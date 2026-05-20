# channingway.ai

Static landing page for [channingway.ai](https://channingway.ai). Channing Way is a specialized AI systems practice based in Berkeley, focused on frontier-model orchestration for high-variance work.

This repository contains the public website source only. Product architecture, client work, and private operating materials are not included. Public discovery files include JSON-LD identity and POC receipts.

Deployed via Cloudflare Workers Static Assets. Changes are reviewed through pull requests.

## Cloudflare Environments

Production deploys from `main` with `wrangler deploy --env=""` and verifies `https://channingway.ai/`.

Staging deploys from the `staging` branch with `wrangler deploy --env staging`. Wrangler creates the staging Worker as `channingway-ai-staging`. Attach the custom domain `staging.channingway.ai` to that Worker in Cloudflare, then the GitHub workflow verifies `https://staging.channingway.ai/` before recording deployment status.

After this workflow lands, create the `staging` branch from `main`; later pushes to `staging` run the staging deploy path.

To rehearse a PR before production, update the `staging` branch with the reviewed PR changes, push `staging`, and wait for the Deploy workflow to pass. This is especially useful for GitHub Actions dependency bumps because the staging branch runs the workflow file and pinned action versions before they reach `main`.

Staging secrets are separate from production secrets. Set them per Cloudflare environment by name only, never in source:

```sh
wrangler secret put DISCORD_WEBHOOK_URL --env staging
wrangler secret put VEL_USER_ID --env staging
```

Commits may include agent attribution as provenance for the work performed.
