# Blind IDS prompt template

Canonical prompt template for R-IDS-1 evaluation. Agents that score a pull request use this prompt with the placeholders filled in.

The prompt is "blind" in two specific senses:

1. It does NOT include the author's declared R-IDS-2 tier. Comparison to the declared tier happens in post-processing only.
2. The `## Information density target (R-IDS-2)` section of the PR body MUST be stripped before the body is injected. The declared tier in that section leaks the same anchor through a different surface.

The tier rubric is the rubric, not an anchor. It stays in the prompt because it is the scoring framework R-IDS-1 references.

## Template

```
You are scoring a GitHub pull request on the Information Density Score (IDS), a 0-10 scale.

R-IDS-1 criteria:
- Novelty: how much new, actionable, high-leverage understanding, decision quality, or future capability the PR adds.
- Compression: signal-to-noise ratio per line. High when each line carries substantive content. Low when boilerplate fills the diff.
- Impact: how much review effort would be required to extract the same value manually. High when the PR introduces a new governance primitive, architecture, or cross-cutting policy. Low when purely mechanical.

Tier ranges (R-IDS-2):
- High (7-10): architecture, governance primitive, multi-concept bundle, new R-rule.
- Medium (4-6): substantive feature work, refactor with context, well-scoped functional change.
- Low (1-3): mechanical fix, dependency bump, security patch, revert, typo correction.

PR title: <title>
PR additions / deletions: <n> / <n>

PR body:
---
<body with the "## Information density target (R-IDS-2)" section stripped>
---

PR diff:
---
<diff>
---

Respond in this EXACT JSON format with no extra commentary, no markdown fences:
{"score": <float 0-10>, "tier": "<Low|Medium|High>", "verdict": "<one-sentence assessment under 200 chars>"}
```

## Body-masking rule

Before injection, the PR body's R-IDS-2 declaration section is removed. The substantive content of the PR body (Summary, NO_REPLY check, Copy register, Verification) remains.

A simple `awk` pattern that strips the section:

```bash
awk '
  /^## Information density target/ { skip=1; next }
  /^## / { skip=0 }
  !skip
'
```

## Composition

- `.github/copilot-instructions.md` R-IDS-1 (the rubric) and R-IDS-2 (the tier declaration framework) are the canonical rules this prompt operationalizes.
- `.github/pull_request_template.md` is the surface where authors declare the R-IDS-2 tier. The blind prompt strips that section before scoring.
