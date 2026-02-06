---
name: git-workflow
description: Git workflow patterns and best practices
triggers: [context, git, commit, branch, pr]
---

# Git Workflow Skill

> **Purpose**: Apply professional Git workflows and conventions

---

## Overview

This skill provides Git workflow patterns for professional software development teams.

---

## Branch Strategy

### GitFlow

```
main         ──●────────────────●──────────●──→
              ↑                  ↑
release    ──●─┘               ●─┘
              ↑                ↑
develop   ──●──●──●──●──●──●──●──●──●──→
             ↑     ↑
feature   ───●─────●
```

### Trunk-Based

```
main      ──●──●──●──●──●──●──●──●──→
             ↑     ↑
short     ───●     ●  (< 1 day)
feature
```

---

## Branch Naming

```
feature/ABC-123-add-user-auth
bugfix/ABC-456-fix-login-error
hotfix/ABC-789-critical-security-patch
release/v1.2.0
chore/update-dependencies
```

---

## Conventional Commits

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type       | Usage            |
| :--------- | :--------------- |
| `feat`     | New feature      |
| `fix`      | Bug fix          |
| `docs`     | Documentation    |
| `style`    | Formatting       |
| `refactor` | Code restructure |
| `test`     | Adding tests     |
| `chore`    | Maintenance      |
| `perf`     | Performance      |
| `ci`       | CI/CD changes    |

### Examples

```bash
feat(auth): add JWT refresh token support

fix(api): handle null user in profile endpoint

Closes #123

docs(readme): add installation instructions

chore(deps): update dependencies to latest versions
```

---

## Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist

- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Self-reviewed my code
- [ ] Added necessary documentation
- [ ] No new warnings

## Testing

How to test these changes
```

---

## Common Commands

```bash
# Create feature branch
git checkout -b feature/ABC-123-new-feature

# Stage and commit
git add -p                    # Interactive staging
git commit -m "feat: add..."

# Rebase on main
git fetch origin
git rebase origin/main

# Squash commits
git rebase -i HEAD~3

# Push feature branch
git push origin feature/ABC-123-new-feature
```

---

## Quick Reference

| Command                 | Usage                |
| :---------------------- | :------------------- |
| `git log --oneline -10` | Recent commits       |
| `git diff --staged`     | Staged changes       |
| `git stash`             | Temporary storage    |
| `git cherry-pick <sha>` | Pick specific commit |
| `git bisect`            | Find bad commit      |
| `git reflog`            | Recovery tool        |
