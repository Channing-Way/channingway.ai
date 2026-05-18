# Copilot instructions for channingway.ai

This file tells code-modifying agents what to change and what not to write on this repository's public surfaces. It is the agent-facing contract.

This repository contains the public website source for channingway.ai. Channing Way is a specialized AI systems practice focused on frontier-model orchestration for high-variance work. This repository is not the product, private implementation, operational substrate, client context, dispatch system, or internal memory.

## Scope

In scope for this file:
- what an agent should change in the repo (files, URLs, schema)
- what an agent should not write on public surfaces (boundary rules, copy register)
- where to find sibling rules (CI lint, contributor policy)

Out of scope for this file (do not absorb future rules about these here):
- private orchestration internals
- client-specific guidance
- founder voice/tone for Substack drafts
- branch-protection / signing / merge-authorization policy (lives in [`CONTRIBUTING.md`](../CONTRIBUTING.md))
- machine-checkable text patterns (lives in [`.github/workflows/register-lint.yml`](workflows/register-lint.yml))

## Rule IDs

Rules below are numbered so review comments can cite them directly (e.g., "violates R-COPY-1"). Each rule has a one-line origin note pointing at the PR that introduced or last hardened it; that context is the reason the rule exists.

---

## Public/private boundary

**R-BOUNDARY-1 — never add or suggest:** secrets, tokens, credentials, or private URLs. *(Origin: PR #28.)*

**R-BOUNDARY-2 — never add or suggest:** private repository names, internal memory paths, or implementation details of the private orchestration method (routing logic, model-selection logic, scoring rubrics, agent-coordination patterns, prompt or memory schemas, behavioral-observation IP, evaluation methods). Naming partners and the substantive role each plays in the visible stack (for example, "agent runtime", "mesh VPN", "frontier model provider") is permitted under R-PARTNERS-1; that is not a violation of this rule. Publicly attributable contribution identifiers and concise receipt metadata for public third-party surfaces (issues filed, PRs opened, comments or reviews left, talks given, papers published) are not operational provenance merely because they prove substantive work occurred. The boundary is crossed when the local public surface discloses HOW the private substrate operates, including routing logic, model selection, scoring rubrics, prompt or memory schemas, agent coordination patterns, evaluation methods, prompt templates, sample prompts, stack traces, transcripts, screenshots, internal paths, private repository names, client context, secrets, legal matters or intellectual property, or other private-method implementation detail, whether stated directly or by summarizing private details from the linked artifact. Enumeration is permitted under R-PARTNERS-1 and R-CREDENTIALS-1 when the local public surface only names the existence and nature of the public contribution using stable identifiers and accurate partner/product names. *(Origin: PR #28; clarification clause added in PR #96.)*

**R-BOUNDARY-3 — never add or suggest:** client context, private/non-consensual/safety-relevant/unnecessary PII, or private-method language. *(Origin: PR #28.)*

**R-BOUNDARY-4 — never add or suggest:** references to legal matters or intellectual property of any kind. The boundary is absolute on this public surface; no qualified exceptions. *(Origin: PR #38, hardened in same PR.)*

**R-BOUNDARY-5 — never add or suggest:** third-person personal references to the founder by first name. *(Origin: PR #38.)*

**R-BOUNDARY-6 — do not explain how the private orchestration method works.** Already-public professional identifiers may remain when they are intentionally part of the public entity graph. *(Origin: PR #28.)*

**R-BOUNDARY-7 — do not add logs, stack traces, prompt templates, sample prompts, transcripts, or screenshots that reveal private system behavior.** Debug and trace material belongs in private repos.

**Public copy may say:** Channing Way; frontier-model orchestration; high-variance work; API; POC.

---

## Site style

**R-STYLE-1 — keep the site minimal:** static HTML, monospace, dark/light color-scheme support, terse copy, no marketing bloat, no generic startup language, no unnecessary navigation or decorative UI. Prefer removing copy over adding explanatory copy. *(Origin: PR #28.)*

---

## Copy register

These rules apply to all public-facing text: page copy, PR descriptions, commit messages, PR/issue comments, review replies, public Substack posts, and any other surface a stranger can read. Internal chat, private repos, and local memory files are exempt. Files that define or enforce these rules (this file, `.github/workflows/register-lint.yml`) may name or quote the forbidden patterns where necessary to specify the rule itself; that usage is exempt from the rule it defines.

**Enforcement.** Rules R-COPY-1 through R-COPY-4 are enforced on checked-in visible-content files by [`.github/workflows/register-lint.yml`](workflows/register-lint.yml). The lint does **not** inspect PR bodies, issue comments, review replies, or commit messages — those are not in the working tree. Agents writing those surfaces must self-audit against the rules below before submitting. Do not assume an automated reviewer will flag register issues outside file diffs. *(Origin: PR #62 documented this scope limit; CI lint operationalized in this PR.)*

**R-COPY-1 — no em-dashes (`—`) in visible copy.** The em-dash is an AI-tell pattern actively being removed from public surfaces. Use periods, semicolons, colons, or parentheses instead. *(Origin: PR #38.)*

**R-COPY-2 — no filler-prefix register-tics.** Specifically forbidden: `substrate-fluent`, `substrate-naive`, `substrate-real`, `substrate-class`, `substrate-honest`. These read as register-overhead to outside observers, not load-bearing meaning. Use plain English. *(Origin: PR #38; enumerated list added in PR #61 to close a vagueness loophole.)*

**R-COPY-3 — use canonical technical vocabulary, not paraphrased near-misses.** Example: `continuum mechanics` (not `continuous mechanics`). *(Origin: PR #38.)*

**R-COPY-4 — no "Established YYYY" or similar fixed-year establishment claims in visible page chrome.** The Schema.org `foundingDate` covers this for crawlers; visible copy does not need to repeat it. *(Origin: PR #38.)*

---

## Partners and visible-stack composition

Partner relationships and stack composition are intentionally visible. Channing Way operates infrastructure through credited partners; the architecture depends on this visibility.

**R-PARTNERS-1 — partner relationships are publicly visible and credited.** You may name any partner that is present in code, configuration, build artifacts, public logs, or active deployment outputs. Use accurate generic role labels only; for example: agent runtime, frontier model provider, mesh VPN, WAF, voice capture. Do not recommend stripping partner references from public surfaces. Do not flag partner-name disclosure as a privacy or security issue. Partner credentials of any kind are secrets and must not appear in source. When a partner is removed from active use, remove its credit in the next PR. Do not publish partner ticket URLs, private support addresses, contract identifiers, or non-public codenames. Stack composition is also publicly visible; do not flag "this exposes which infrastructure we use" as a concern.

---

## Public credential surfaces

Public substantive contributions on third-party surfaces (issues filed, PRs opened, comments or reviews left, talks given, papers published) function as credential receipts and may be enumerated on public credential surfaces (POC receipts, identity graph, README, llms.txt). These are bounded by R-BOUNDARY-1 through R-BOUNDARY-7 but not subsumed by them.

**R-CREDENTIALS-1 — public substantive contributions are credential receipts.** Publicly attributable issues filed, pull requests opened, comments or reviews left on public repositories, talks given, papers published, and other verifiable public records of substantive technical work MAY be enumerated on public credential surfaces (POC receipts, identity graph, README, llms.txt). Enumeration should use stable public identifiers, canonical URLs, accurate partner/product names, artifact type, and concise claims. Do not copy or summarize private-method details, logs, stack traces, transcripts, screenshots, prompt templates, sample prompts, prompt or memory schemas, internal paths, private repository names, client context, secrets, legal matters or intellectual property, or accidental disclosures from the linked artifact. If a linked receipt later becomes unavailable, redacted by the host, or discovered to contain sensitive material, update, redact, or remove the local enumeration accordingly. R-CREDENTIALS-1 composes with R-PARTNERS-1 (partner identification, permitted; see R-PARTNERS-1 for constraints on partner and product naming) and remains bounded by R-BOUNDARY-1 through R-BOUNDARY-7 (private-substrate protection). *(Origin: PR #96.)*

---

## Versioning: always latest, never pin

**R-VERSIONING-1 — component versions are not pinned in this repository.** Use:

- `:latest` for container base images
- `@latest` for npm packages installed at build time
- `ubuntu-latest` for GitHub Actions runners
- `@v<major>` for GitHub Actions (forward-drift within major)
- `lts/*` for `.nvmrc` (forward-drifts across LTS majors)
- Current frontier model versions, not stable-from-six-months-ago

Reproducibility lives at the composed-image / SHA-tagged-artifact layer, not at the component-version layer. The `cw-build` container is tagged with the git SHA on every build; downstream workflows pull by SHA. Components inside the image forward-drift between rebuilds; the artifact-as-a-whole is reproducible by SHA tag.

When reviewing, actively look for implicit version pinning anywhere in the repo (Dockerfile `FROM` tags, npm dependency pinning, action version pins beyond the major, OS image pins, model-version pins) and flag them so they can be moved back to leading-edge.

Exception: GitHub Actions major-version refs (`@v4`, `@v3`) are acceptable forward-drift since major-version bumps signal breaking changes. Do not pin actions to specific commit SHAs unless there is a documented supply-chain reason.

---

## Files

Primary public files:
- `public/index.html`
- `public/api.html`
- `public/poc.html`
- `public/intake.html`
- `public/sitemap.xml`
- `public/llms.txt`
- `README.md`

Discovery and metadata:
- `public/.well-known/openapi.json` (OpenAPI 3.1 spec for API endpoints)
- `public/api/manifest.json` (Schema.org Organization JSON-LD)
- `public/api/poc.json` (Schema.org ItemList JSON-LD for public POC receipts)
- `public/api/health.json` (static public-status document)
- `public/_headers` (Cloudflare Workers Content-Type overrides)

Deployment: Cloudflare Workers Static Assets; production deploys from `main`.

---

## URL canonicalization

**R-URL-1 — public URLs are extensionless.** Explicit 301 redirects from `.html`-suffixed URLs to extensionless equivalents (configured in `public/_redirects`):
- `/api.html` 301 -> `/api`
- `/poc.html` 301 -> `/poc`
- `/intake.html` 301 -> `/intake`
- `/index.html` 301 -> `/`

Canonical references (sitemap, `og:url`, JSON-LD `@id`, OpenAPI server URLs, internal links) must use the extensionless form. Do not revert to `.html`-suffixed URLs. *(Origin: PR #38, after a noisy iteration on PR #35; revised in PR #98 to explicit 301s and full extensionless coverage.)*

---

## Schema and metadata consistency

**R-SCHEMA-1 — keep cross-file references aligned:**
- `sitemap.xml` URLs match the canonical extensionless form
- `og:url` meta tags match the canonical URL of each page
- JSON-LD `@id` references match the canonical entity URLs
- OpenAPI `servers` URLs match the deployed origin
- `_headers` rules cover Content-Type overrides for non-default JSON variants (e.g., `application/ld+json` for `/api/manifest.json`)

*(Origin: PR #38.)*

---

## External links

**R-EXTERNAL-1 — external `<a>` tags on public surfaces include `target="_blank" rel="noopener noreferrer"` AND an accessibility hint indicating the link opens in a new tab (`aria-label` ending with `(opens in new tab)`, visible `↗` glyph, or visually-hidden span).** Internal links remain unchanged. This prevents context loss and accidental navigation away from channingway.ai when visitors follow social, upstream, or reference surfaces, and gives screen-reader users equal warning of the new-tab behavior. *(Origin: PR #83.)*

---

## Information density score (IDS)

**R-IDS-1 — every PR is graded on a 0-10 Information Density Score (IDS) by an automated reviewer.** IDS measures architectural substance per unit of diff. Volume is not the measure; density is. The reviewer evaluates three dimensions:

- **Novelty**: how much new, actionable, high-leverage understanding, decision quality, or future capability the PR adds.
- **Compression**: signal-to-noise ratio per line. High when each line carries substantive content. Low when boilerplate, template text, or repeated verification ceremony fills the diff.
- **Impact**: how much review effort would be required to extract the same value manually. High when the PR introduces a new governance primitive, architecture, or cross-cutting policy. Low when purely mechanical.

The substantive output of the automated reviewer (score and reasoning) IS the metric. No formula, no weights, no hard-coded thresholds; the metric drifts forward with the substrate. *(Origin: PR #83.)*

**R-IDS-2 — every PR declares exactly one Information Density target tier (high, medium, or low) in the PR template.** The IDS is evaluated against the declared tier. A scored IDS that substantially diverges from the declared tier flags for review (either the declared tier was wrong, or the work needs different bundling).

- **High** (target IDS 7-10): architecture, governance primitive, multi-concept bundle, new R-rule.
- **Medium** (target IDS 4-6): substantive feature work, refactor with context, well-scoped functional change.
- **Low** (target IDS 1-3): mechanical fix, dependency bump, security patch, revert, typo correction.

Tier ranges are non-overlapping; boundary values belong to the higher tier as written above. The tier ranges are an author-declaration framework for classifying intended scope, not a scoring formula. R-IDS-1's "no hard-coded thresholds" applies to the score itself (the automated reviewer's output is the metric, derived from no formula or weights). R-IDS-2's ranges apply to comparison context (which class of work the PR claims to represent), so reviewers can flag declared-tier vs scored-IDS divergence.

This prevents low-density PRs from sneaking through as architecture-class and prevents high-density work from being fragmented across multiple low-class PRs. *(Origin: PR #84.)*

---

## Validation

When making changes, verify the rules that apply to your diff:

| If you changed... | Verify |
| --- | --- |
| any visible HTML/text | R-COPY-1 .. R-COPY-4 (also enforced by `register-lint`) |
| HTML or sitemap URLs | R-URL-1, R-SCHEMA-1 |
| OpenAPI / manifest / `_headers` | R-SCHEMA-1 |
| any public copy | R-BOUNDARY-1 .. R-BOUNDARY-7, R-STYLE-1 |
| external `<a>` tags on public HTML | R-EXTERNAL-1 |
| any PR | R-IDS-1, R-IDS-2 |
| repo files naming partners or stack | R-PARTNERS-1 |
| POC receipts or public credential metadata | R-CREDENTIALS-1, R-PARTNERS-1, R-BOUNDARY-1 .. R-BOUNDARY-7, R-SCHEMA-1 |
| Dockerfile, workflows, npm, model versions, `.nvmrc` | R-VERSIONING-1 |

For visual changes, also inspect the rendered page or Cloudflare preview.

---

## Pull requests

Use [`.github/pull_request_template.md`](pull_request_template.md). PR title, branch name, commit subject, and PR body must describe the same intent.

**Public PR bodies stay concise.** Do not paste full boundary, copy-register, review-discipline, or NO_REPLY checklists into every PR body. Those rules live here and still apply. PR bodies should summarize the diff, verification, risk, IDS tier, and any public-safe notes needed for review.

**PR self-audit before posting.** Before submitting or updating a PR title, body, commit message, issue comment, review summary, or inline review comment, agents must self-audit for:
- R-BOUNDARY-1 through R-BOUNDARY-7
- R-COPY-1 through R-COPY-4
- R-IDS-1 and R-IDS-2
- no internal forward-roadmap leaks, private process labels, private auth context, personal-history detail, legal context, raw secret values, or stale template text

**Secrets in PR surfaces.** Agents may edit secret names, config references, workflow wiring, and documentation. Agents must not request, reveal, paste, store, screenshot, summarize, or commit raw secret values. Use provider secret stores and refer to secrets by name only.

**Reviewer @-mention.** Automated PR reviewers (Copilot Coding Agent, `copilot-pull-request-reviewer[bot]`, and any other connected review bots) should `@channingway-agent` in inline review comments and review summaries so the agent identity receives notification and can respond inline. *(Origin: PR #83.)*

Branch protection, signing, merge authorization, and auth boundaries live in [`CONTRIBUTING.md`](../CONTRIBUTING.md). Those gates are not actionable for an agent making code changes; they apply to the human operator and the PR-creation pipeline.

---

## Removed rules (history)

Rules retired from this file. Listed so they are not silently reintroduced.

- *"Established 2026" was permitted in the may-say list.* Removed in PR #38 after the visible string was dropped from page chrome in PR #37. Replaced by R-COPY-4 (negative rule against any `Established YYYY` in visible chrome).
- *"capability receipts" was permitted in the may-say list.* Removed in PR #38 pending copy review; not currently sanctioned public vocabulary.
- *"references to active legal matters or contested-IP language"* (qualified form). Tightened in PR #38 to the absolute form now stated as R-BOUNDARY-4; the qualifiers implied an exception class that was not intended.
