// Detect bot crawls and inject the latest crawl timestamp into the response HTML.
// Bound KV namespace: CRAWL_TRACKER → channingway-crawl-tracker

const BOT_PATTERNS = [
  /ClaudeBot/i,
  /GPTBot/i,
  /Bytespider/i,
  /Google-Extended/i,
  /CCBot/i,
  /Amazonbot/i,
  /Applebot-Extended/i,
  /meta-externalagent/i,
  /PerplexityBot/i,
  /YouBot/i,
  /ChatGPT-User/i,
  /Cohere-AI/i,
  /Diffbot/i,
];

export async function onRequest(context) {
  const { request, env, next } = context;
  const ua = request.headers.get('User-Agent') || '';
  const isBot = BOT_PATTERNS.some((p) => p.test(ua));

  if (isBot && env.CRAWL_TRACKER) {
    const now = new Date().toISOString();
    context.waitUntil(env.CRAWL_TRACKER.put('last_crawled', now));
  }

  const response = await next();
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return response;

  let lastCrawled = 'never';
  if (env.CRAWL_TRACKER) {
    const stored = await env.CRAWL_TRACKER.get('last_crawled');
    if (stored) lastCrawled = stored.split('T')[0];
  }

  return new HTMLRewriter()
    .on('[data-last-crawled]', {
      element(elem) {
        elem.setInnerContent(lastCrawled);
      },
    })
    .transform(response);
}
