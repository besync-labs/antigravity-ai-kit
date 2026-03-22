# Git Workflow Rules — GitFlow

> **Priority**: HIGH — Enforced by hooks
> **Strategy**: GitFlow with `dev` as integration branch, `main` as production

> [!CAUTION]
> **PUSH POLICY**: NEVER push commits during implementation or task work.
> Commits are **local-only** until the user explicitly requests the **session-end protocol**.
> The pre-push hook runs the full LOCAL-CI-GATE (lint, type-check, tests, build) which takes 60-160 seconds.
> Premature pushes waste time and block the agent. Only push once, at session end, after all work is verified.

---

## Branch Strategy

```
main (production — protected, release-only)
 └── dev (integration — all features merge here first)
      ├── feat/add-python-agent
      ├── fix/cli-init-error
      ├── refactor/loading-engine
      └── docs/update-readme
```

### Branch Types

| Branch | Base | Merges Into | Purpose |
| :--- | :--- | :--- | :--- |
| `main` | — | — | Production releases only. Never commit directly. |
| `dev` | `main` | `main` (via release PR) | Integration branch. All feature work targets here. |
| `feat/*` | `dev` | `dev` | New features |
| `fix/*` | `dev` | `dev` | Bug fixes |
| `refactor/*` | `dev` | `dev` | Code restructuring |
| `docs/*` | `dev` | `dev` | Documentation |
| `test/*` | `dev` | `dev` | Test additions |
| `chore/*` | `dev` | `dev` | Maintenance |
| `hotfix/*` | `main` | `main` AND `dev` | Critical production fixes |

### Branch Naming Convention

```
type/short-description
```

Examples:
- `feat/pr-toolkit-v2`
- `fix/windows-eperm-retry`
- `hotfix/security-patch-auth`
- `chore/bump-vitest-v4`

---

## Merge Rules

### Feature → dev

1. Create feature branch from `dev`
2. Develop and commit locally (conventional commits)
3. Push feature branch to remote
4. Create PR targeting `dev`
5. Wait for CI checks to pass
6. Wait for reviewer approval (gemini-code-assist or human)
7. Squash-merge into `dev`

### dev → main (Release)

1. Ensure `dev` is stable (all CI green, no WIP)
2. Create release PR: `dev` → `main`
3. PR title: `release: vX.Y.Z`
4. Wait for ALL CI checks to pass
5. Wait for human review approval
6. Merge (no squash — preserve history)
7. Tag the release: `git tag vX.Y.Z`
8. Run `npm publish` from `main`
9. Merge `main` back into `dev` (sync release commit)

### hotfix → main

1. Create `hotfix/*` branch from `main`
2. Fix the issue with minimal changes
3. Create PR targeting `main`
4. After merge, cherry-pick or merge `main` into `dev`

---

## Commit Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

| Type | Use |
| :--- | :--- |
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `refactor` | Code restructuring |
| `test` | Test additions |
| `chore` | Maintenance |
| `perf` | Performance optimization |
| `ci` | CI/CD changes |

---

## Before Commit

- [ ] All tests pass (`npm test`)
- [ ] Lint passes
- [ ] Build succeeds
- [ ] No secrets in code
- [ ] Counts synced if components added/removed

## Pull Requests

- **REQUIRE** code review (gemini-code-assist + human)
- **INCLUDE** test coverage
- **LINK** to issue/ticket
- **TARGET** `dev` for features/fixes, `main` for releases/hotfixes only
- **NEVER** create a PR from `main` or `dev` directly
- **CONVENTIONAL** title format: `type(scope): description`

---

## Session-End Protocol (Commit & Push)

When the user says "Commit & Push" or similar:

1. **Branch Check**: Verify you're on a feature branch (not `main` or `dev`)
2. **Stage Changes**: `git add` relevant files (never `git add -A` blindly)
3. **Commit**: Use conventional commit message
4. **Push**: Push feature branch to remote with `-u` flag
5. **Create PR**: Target `dev` branch (not `main`)
6. **Report**: Share PR URL and wait for CI + reviewer approval
7. **Do NOT merge**: User decides when to merge after reviews pass
