# Copilot instructions for channingway.ai

This repository contains the public website source for channingway.ai.

Channing Way is a specialized AI systems practice focused on frontier-model orchestration for high-variance work. This repository is not the product, private implementation, operational substrate, client context, dispatch system, or internal memory.

## Public/private boundary

Do not add or suggest:
- secrets, tokens, credentials, or private URLs
- private repository names
- private, non-consensual, safety-relevant, or unnecessary PII
- client context
- internal memory paths
- private-method language
- implementation details for the orchestration system

Already-public professional identifiers may remain when they are intentionally part of the public entity graph.

Public copy may say:
- Channing Way
- frontier-model orchestration
- high-variance work
- API
- POC / capability receipts
- Established 2026

Do not explain how the private orchestration method works.

## Site style

Keep the site minimal:
- static HTML
- monospace
- dark/light color-scheme support
- terse copy
- no marketing bloat
- no generic startup language
- no unnecessary navigation or decorative UI

Prefer removing copy over adding explanatory copy.

## Files

Primary public files:
- `index.html`
- `api.html`
- `poc.html`
- `sitemap.xml`
- `README.md`

Deployment:
- Cloudflare Workers Static Assets
- production deploys from `main`

## Pull requests

Use `.github/pull_request_template.md`.

PR titles should use Conventional Commits:
- `feat: ...`
- `fix: ...`
- `docs: ...`
- `style: ...`
- `chore: ...`

The PR title, branch name, commit subject, and PR body must describe the same intent.

Human review is required before merge. Emoji reactions and off-platform messages are acknowledgements only, not merge authorization.

## Validation

For HTML/static changes:
- inspect the rendered page or Cloudflare preview
- check that `sitemap.xml` parses
- check that no private-method or private-context language was added
- check that public copy stays tight and minimal
