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
- references to legal matters or IP of any kind
- third-person personal references to the founder by first name

Already-public professional identifiers may remain when they are intentionally part of the public entity graph.

Public copy may say:
- Channing Way
- frontier-model orchestration
- high-variance work
- API
- POC

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

## Copy register

- No em-dashes in visible copy. The em-dash is an AI-tell pattern actively being removed from public surfaces. Use periods, semicolons, colons, or parentheses instead.
- No filler-prefix register-tics (e.g., word-prefixes used as filler rather than load-bearing).
- Use canonical technical vocabulary, not paraphrased near-misses. Example: `continuum mechanics` (not `continuous mechanics`).
- No "Established YYYY" or similar fixed-year establishment claims in visible page chrome. The Schema.org `foundingDate` covers this for crawlers; visible copy does not need to repeat it.

## Files

Primary public files:
- `index.html`
- `api.html`
- `poc.html`
- `sitemap.xml`
- `llms.txt`
- `README.md`

Discovery and metadata:
- `.well-known/openapi.json` (OpenAPI 3.1 spec for API endpoints)
- `api/manifest.json` (Schema.org Organization JSON-LD)
- `api/health.json` (static public-status document)
- `_headers` (Cloudflare Workers Content-Type overrides)

Deployment:
- Cloudflare Workers Static Assets
- production deploys from `main`

## URL canonicalization

Public URLs are extensionless. Cloudflare 307-redirects `.html`-suffixed URLs to extensionless equivalents:
- `/api.html` 307 -> `/api`
- `/poc.html` 307 -> `/poc`

Canonical references (sitemap, `og:url`, JSON-LD `@id`, OpenAPI server URLs, internal links) must use the extensionless form. Do not suggest reverting to `.html`-suffixed URLs.

## Schema and metadata consistency

Cross-file consistency must be maintained:
- `sitemap.xml` URLs match the canonical extensionless form
- `og:url` meta tags match the canonical URL of each page
- JSON-LD `@id` references match the canonical entity URLs
- OpenAPI `servers` URLs match the deployed origin
- `_headers` rules cover Content-Type overrides for non-default JSON variants (e.g., `application/ld+json` for `/api/manifest.json`)

## Commits and signing

The `main` branch has `required_signatures` enabled. All commits to `main` must be signed.

Agent-authored commits must be created via GitHub APIs that auto-sign:
- GraphQL `createCommitOnBranch` mutation (preferred for multi-file commits)
- REST `PUT /repos/{owner}/{repo}/contents/{path}` (one signed commit per file)

Do not suggest agent workflows that use local `git commit` followed by `git push` from a personal access token. Local git from an agent token does not sign and will be blocked at merge by branch protection.

## Auth boundaries

This repository's branch-protection gates (`required_signatures`, conversation resolution, 1 approving review) must be satisfied legitimately, never bypassed.

Agent identities (e.g., `channingway-agent`) may open PRs and create signed commits. Agents must NOT use the founder's personal account auth to approve, review, or merge. Those gates are reserved for the human operator.

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
- check that `sitemap.xml` parses and URLs are extensionless
- check that no private-method or private-context language was added
- check that public copy stays tight and minimal
- check that no em-dashes were introduced into visible copy
- check that canonical vocabulary is used on technical-field terms
