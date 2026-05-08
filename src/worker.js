const ALLOWED_ORIGINS = ['https://channingway.ai', 'https://www.channingway.ai'];
const INTAKE_ROUTE = '/api/intake/submit';
const TASK_MAX = 10000;
const EMBED_VALUE_MAX = 1024;
const URGENCY_VALUES = ['1d', '1w', '1mo', 'flex'];
const URGENCY_LABELS = {
  '1d': 'Within 1 day',
  '1w': 'Within 1 week',
  '1mo': 'Within 1 month',
  'flex': 'Flexible / no rush'
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === INTAKE_ROUTE && request.method === 'POST') {
      return handleIntake(request, env);
    }

    if (url.pathname === INTAKE_ROUTE && request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    return env.ASSETS.fetch(request);
  }
};

async function handleIntake(request, env) {
  const origin = request.headers.get('Origin') || '';
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return json({ error: 'Forbidden.' }, 403);
  }

  const ct = request.headers.get('Content-Type') || '';
  if (!ct.includes('application/json')) {
    return json({ error: 'Bad Request.' }, 400);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Bad Request.' }, 400);
  }

  const task = String(body.task || '').trim();
  const urgency = String(body.urgency || '').trim();

  if (!task) {
    return json({ error: 'Task is required.' }, 400);
  }
  if (!URGENCY_VALUES.includes(urgency)) {
    return json({ error: 'Invalid urgency value.' }, 400);
  }
  if (task.length > TASK_MAX) {
    return json({ error: 'Task exceeds maximum length.' }, 400);
  }

  if (!env.DISCORD_WEBHOOK_URL) {
    return json({ error: 'Service unavailable.' }, 503);
  }

  const submittedAt = new Date().toISOString();
  const taskValue = task.length > EMBED_VALUE_MAX
    ? task.slice(0, EMBED_VALUE_MAX - 4) + ' ...'
    : task;

  // Neutralize @ in user-provided text. allowed_mentions governs the top-level
  // content but Discord may honor the user allowlist inside embed fields too;
  // a zero-width space after @ keeps the text visually identical while breaking
  // mention syntax (covers <@user>, <@!user>, <@&role>, @everyone, @here).
  const safeTaskValue = taskValue.replace(/@/g, '@\u200b');

  const rawVelId = String(env.VEL_USER_ID || '').trim();
  const velUserId = /^\d{17,19}$/.test(rawVelId) ? rawVelId : null;

  const payload = {
    username: 'Channing Way Intake',
    allowed_mentions: velUserId
      ? { parse: [], users: [velUserId] }
      : { parse: [] },
    embeds: [{
      title: 'New job intake',
      color: 0x222222,
      fields: [
        { name: 'Task', value: safeTaskValue },
        { name: 'Urgency', value: URGENCY_LABELS[urgency], inline: true },
        { name: 'Submitted at', value: submittedAt, inline: true }
      ],
      footer: { text: 'channingway.ai/intake' },
      timestamp: submittedAt
    }]
  };

  if (velUserId) {
    payload.content = `<@${velUserId}>`;
  }

  let resp;
  try {
    resp = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch {
    return json({ error: 'Network error. Try again or email bethany@channingway.ai.' }, 502);
  }

  if (resp.ok) {
    return json({ ok: true }, 200);
  }

  return json({ error: 'Submission failed (status ' + resp.status + '). Email bethany@channingway.ai.' }, 502);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
