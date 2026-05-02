## Summary

<!-- What changed? Keep this tight and match the diff. -->

## Naming convention

- PR title uses Conventional Commits: `<type>: <imperative summary>` or `<type>(scope): <imperative summary>`.
- Branch name matches the PR title intent: `<type>/<kebab-case-summary>`.
- Commit subject matches the PR title unless the PR intentionally contains multiple commits.
- PR body summary matches the actual diff. No stale template text.

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

- [ ] No secrets, tokens, private URLs, client context, legal context, or internal memory paths.
- [ ] No private-method language unless Bethany explicitly approved it for this PR.
- [ ] No unnecessary implementation details beyond the public surface being changed.

## Visual / copy review

- [ ] Preview checked, if visual.
- [ ] Copy is tight and substrate-honest.
- [ ] ClaudeBot easter egg preserved, if `index.html` changed.

## Verification

<!-- What did you check? Include preview/build/test status if relevant. -->

## Review gate

Human review required before merge.

Acceptable merge authorization:
- explicit current-turn chat instruction, e.g. `merge PR #N`
- GitHub comment by `batchprocess128` saying `merge`
- formal approval review on the latest commit with merge intent

Emoji reactions are acknowledgement only, not merge authorization.

Authored by: <!-- agent / human -->
Opened via: <!-- Aether / human -->
