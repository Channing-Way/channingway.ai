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
- references to legal matters or intellectual property of any kind
- third-person personal references to the founder by first name

Already-public professional identifiers may remain when they are intentionally part of the public entity graph.

Public copy may say:
- Channing Way
- frontier-model orchestration
- high-variance work
- API
- POC

Do not explain how the private orchestration method works.

## Partners and visible-stack composition

Partner relationships and stack composition are intentionally visible. Channing Way operates infrastructure through credited partners; the architecture depends on this visibility.

Partners that may be openly named in repo files, PR descriptions, deployment configs, and Substack:
- Minimus — hardened-image substrate / MinimOS Node base
- Cloudflare — Workers and WAF
- xAI and other model providers — agent runtime
- Wispr Flow — voice-first capture (forward integration)

Do not recommend stripping partner references from public surfaces. Do not flag partner-name disclosure as a privacy or security issue. Partner credentials (for example, the Minimus tenant ID, which doubles as a registry password) are secrets and must not appear in source. But the partner relationship itself is publicly credited.

Stack composition is also publicly visible. Do not flag "this exposes which infrastructure we use" as a concern; that exposure is intentional.

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
- No filler-prefix register-tics in public-facing text. Specifically forbidden: `substrate-fluent`, `substrate-naive`, `substrate-real`, `substrate-class`, `substrate-honest`, and `substantively` when used as a filler adverb before another adjective ("substantively correct", "substantively shipping"). These read as register-overhead to outside observers, not load-bearing meaning. Plain English in public text. Applies to: page copy, PR descriptions, commit messages, PR/issue comments, review replies, public Substack posts, and any other public-facing artifact. Internal chat, private repos, and local memory files are exempt; this rule is specifically for surfaces that strangers can read.
- Use canonical technical vocabulary, not paraphrased near-misses. Example: `continuum mechanics` (not `continuous mechanics`).
- No "Established YYYY" or similar fixed-year establishment claims in visible page chrome. The Schema.org `foundingDate` covers this for crawlers; visible copy does not need to repeat it.

**Note on automated enforcement.** Copilot's PR review only inspects changed file diffs. PR descriptions, issue/PR comments, review replies, commit messages, and the PR title itself are **not auto-enforced** by the review bot. Agents writing those surfaces must self-audit against this section before submitting; do not assume Copilot will catch register issues in non-code text. Treat this section as a contract that applies whether or not an automated reviewer flags it.

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

## Versioning: always latest, never pin

Component versions are not pinned in this repository. Use:
- `:latest` for container base images
- `@latest` for npm packages installed at build time
- `ubuntu-latest` for GitHub Actions runners
- `@v<major>` for GitHub Actions (forward-drift within major)
- Current frontier model versions, not stable-from-six-months-ago

Reproducibility lives at the composed-image / SHA-tagged-artifact layer, not at the component-version layer. The `cw-build` container is tagged with the git SHA on every build; downstream workflows pull by SHA. Components inside the image forward-drift between rebuilds; the artifact-as-a-whole is reproducible by SHA tag.

Do not recommend pinning specific Node versions, specific Ubuntu LTS versions, specific npm package versions, or specific Docker image digests when reviewing this repo. The leading-edge philosophy is intentional.

Existing pins that landed as stopgaps for unrelated bugs (for example the `wrangler@4.90.0` and `ubuntu-22.04` pins in `cloudflare-deployment.yml` from PR #69) are outliers being reverted. When reviewing, actively look for implicit version pinning anywhere in the repo — Dockerfile `FROM` tags, npm dependency pinning, action version pins beyond the major, OS image pins, model-version pins — and flag them so they can be moved back to leading-edge.

Exception: GitHub Actions major-version refs (`@v4`, `@v3`) are acceptable forward-drift since major-version bumps signal breaking changes. Do not pin actions to specific commit SHAs unless there is a documented supply-chain reason.

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
