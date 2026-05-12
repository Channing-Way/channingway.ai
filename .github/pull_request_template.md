## Summary

<!-- What changed? Keep this tight and match the diff. -->

## Naming convention

- PR title uses Conventional Commits: `<type>: <imperative summary>` or `<type>(scope): <imperative summary>`.
- Branch name matches the PR title intent: `<type>/<kebab-case-summary>`.
- Commit subject matches the PR title unless the PR intentionally contains multiple commits.
- PR body summary matches the actual diff. No stale template text.
- After every push that adds commits, re-audit title and description against the NO_REPLY check and Copy register sections below.

Type:
- [ ] feat
- [ ] fix
- [ ] docs
- [ ] style
- [ ] chore
- [ ] other:

## Surface

- [ ] public website copy / layout
- [ ] metadata / SEO / sitemap
- [ ] README / repository documentation
- [ ] deployment / infrastructure
- [ ] other:

## Public/private boundary

- [ ] No secrets, private context, or implementation details beyond the public surface being changed (R-BOUNDARY-1..7 per `.github/copilot-instructions.md`).

## NO_REPLY check

PR titles and descriptions are public surfaces. Before push, scan for and strip:

- [ ] Internal forward-roadmap leak (references to follow-up PRs, sequence steps, retired-as-outlier language).
- [ ] Internal architecture-naming such as labels for unselected design alternatives.
- [ ] Aspirational or unrelated partner lists in PR descriptions. Partners materially involved in the diff may be named directly; the full partner stack roster lives in `.github/copilot-instructions.md`.
- [ ] Money, pricing, dollar figures, fees, or rates.
- [ ] Personal-history detail (substance use, somatic load, masking, recomposition narrative).
- [ ] Forward-operational sequencing language ("we'll do X next", "after this lands").
- [ ] Internal principle names from agent-context files on a public surface.

## Copy register

- [ ] R-COPY-1..4 verified per `.github/copilot-instructions.md` (em-dashes, register-tics, canonical vocabulary, no fixed-year claim).

## Review-comment discipline

PR comments on this repo are public-facing review surfaces. Apply the same public/private boundary check to review bodies and inline comments before posting.

**Automated reviewer tagging.** Automated PR reviewers (Copilot Coding Agent, `copilot-pull-request-reviewer[bot]`, and any other connected review bots) `@channingway-agent` in inline review comments and review summaries so the agent identity receives notification and can respond inline.

Reviewers:
- [ ] Keep comments focused on technical, design, copy, deployment, or verification substance.
- [ ] Do not include private file names, internal memory references, private auth context, legal context, employer/personal context, or internal process vocabulary.
- [ ] Translate internal framing into public-safe, industry-standard language where possible.
- [ ] Automated reviewer bots `@channingway-agent` in inline comments and review summaries.

## Information density score (IDS)

This PR's substantive density is graded by an automated reviewer using the R-IDS-1 criteria in `.github/copilot-instructions.md`. The score itself is the metric; no formula, no weights, no hard-coded thresholds.

- [ ] IDS calculated by an automated reviewer and posted as a comment on this PR.

## Information density target (R-IDS-2)

Declare the target tier for this PR. **Select exactly one.** The automated reviewer's IDS is evaluated against the declaration; substantial divergence flags for review.

- [ ] **High** (target IDS 7-10): architecture, governance primitive, multi-concept bundle, new R-rule.
- [ ] **Medium** (target IDS 4-6): substantive feature work, refactor with context, well-scoped functional change.
- [ ] **Low** (target IDS 1-3): mechanical fix, dependency bump, security patch, revert, typo correction.

## Visual / copy review

- [ ] Preview checked, if visual.
- [ ] Copy is tight and accurate.

## Verification

<!-- What did you check? Include preview/build/test status if relevant. -->

## Review gate

Human review required before merge.

Acceptable merge authorization:
- GitHub comment from the repository owner or maintainer saying `merge`
- Formal approval review on the latest commit with merge intent

Emoji reactions and off-platform messages are acknowledgements only, not merge authorization.
