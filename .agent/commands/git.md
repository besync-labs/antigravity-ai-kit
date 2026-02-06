---
description: Git operations and commit management
---

# /git Command

Execute Git operations with best practices.

## Usage

```
/git status            # Show repository status
/git commit "<msg>"    # Commit with conventional message
/git branch <name>     # Create feature branch
/git sync              # Fetch and rebase on main
```

## Examples

```
/git commit "feat(auth): add JWT refresh token"
/git branch feature/ABC-123-user-profile
/git sync
```

## Commit Message Format

```
<type>(<scope>): <description>

Types: feat, fix, docs, style, refactor, test, chore
```
