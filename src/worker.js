/**
 * Channing Way — Cloudflare Worker
 *
 * Routes:
 *   POST /api/intake/submit  — intake form handler; proxies to Discord webhook
 *                              stored as Wrangler secret DISCORD_WEBHOOK_URL.
 *   *                         — static assets via ASSETS binding.
 */

const ALLOWED_ORIGINS = ['https://channingway.ai', 'https://www.channingway.ai'];
const INTAKE_ROUTE = '/api/intake/submit';
const TASK_MAX = 10000;
const EMBED_VALUE_MAX = 1024;
const DUE_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

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
  // Origin validation — reject cross-origin submissions.
  const origin = request.headers.get('Origin') || '';
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return json({ error: 'Forbidden.' }, 403);
  }

  // Content-Type guard.
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
  const dueDate = String(body.due_date || '').trim();

  if (!task) {
    return json({ error: 'Task is required.' }, 400);
  }
  if (!dueDate) {
    return json({ error: 'Due date is required.' }, 400);
  }
  if (!DUE_DATE_RE.test(dueDate)) {
    return json({ error: 'Due date must be in YYYY-MM-DD format.' }, 400);
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

  const payload = {
    username: 'Channing Way Intake',
    allowed_mentions: { parse: [] },
    embeds: [{
      title: 'New job intake',
      color: 0x222222,
      fields: [
        { name: 'Task', value: taskValue },
        { name: 'Due date', value: dueDate, inline: true },
        { name: 'Submitted at', value: submittedAt, inline: true }
      ],
      footer: { text: 'channingway.ai/intake' },
      timestamp: submittedAt
    }]
  };

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

  if (resp.ok || resp.status === 204) {
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
