# Contributing to channingway.ai

This repository is the public website source. Contributions are reviewed by a human maintainer before merge. The rules below are policy: they are enforced by branch protection and human review, not by automated agents.

For agent-facing instructions (what to change, what not to write), see [`.github/copilot-instructions.md`](.github/copilot-instructions.md). For machine-checked rules on visible copy, see [`.github/workflows/register-lint.yml`](.github/workflows/register-lint.yml).

## Branch protection on `main`

The `main` branch requires:
- signed commits (`required_signatures` is enabled)
- 1 approving review
- conversation resolution
- passing required checks (including `register-lint`)

These gates must be satisfied legitimately. Do not bypass them.

## Commits and signing

Because `required_signatures` is enabled, every commit reaching `main` must be signed.

Agent-authored commits must be created via GitHub APIs that auto-sign:
- GraphQL `createCommitOnBranch` mutation (preferred for multi-file commits)
- REST `PUT /repos/{owner}/{repo}/contents/{path}` (one signed commit per file)

Local `git commit` is not auto-signed unless GPG or SSH signing is configured. Agent workflows using local git plus a PAT-based push typically produce unsigned commits, which `required_signatures` will reject at merge. The GitHub API paths above auto-sign without local key configuration; use them for agent workflows.

## Auth boundaries

Agent identities (e.g., `channingway-agent`) may:
- open pull requests
- create signed commits
- push to non-`main` branches

Agent identities must NOT use the founder's personal account auth to:
- approve a pull request
- submit a review
- merge a pull request

Branch-protection gates are reserved for the human operator.

## Pull requests

Use [`.github/pull_request_template.md`](.github/pull_request_template.md). The template covers naming conventions, surface checks, the public/private boundary, and the review gate.

PR titles use Conventional Commits:
- `feat: ...`
- `fix: ...`
- `docs: ...`
- `style: ...`
- `chore: ...`

The PR title, branch name, commit subject, and PR body must describe the same intent.

Human review is required before merge. Emoji reactions and off-platform messages are acknowledgements only, not merge authorization.

## Public/private boundary on review surfaces

PR bodies, issue comments, review replies, and commit messages are public. The same boundary that applies to page copy applies to those surfaces. The agent-facing version of these rules lives in [`.github/copilot-instructions.md`](.github/copilot-instructions.md); see the Copy register and Public/private boundary sections.

The register lint (`.github/workflows/register-lint.yml`) only inspects checked-in files. It does not see PR bodies or comments, so authors of those surfaces must self-audit.
