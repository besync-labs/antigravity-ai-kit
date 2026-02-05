# Git Workflow Rules

> **Priority**: HIGH — Enforced by hooks

---

## Commit Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

| Type       | Use                |
| :--------- | :----------------- |
| `feat`     | New feature        |
| `fix`      | Bug fix            |
| `docs`     | Documentation      |
| `refactor` | Code restructuring |
| `test`     | Test additions     |
| `chore`    | Maintenance        |

## Branch Naming

- `feature/` — New features
- `fix/` — Bug fixes
- `refactor/` — Code improvements

## Before Commit

- [ ] All tests pass
- [ ] Lint passes
- [ ] Build succeeds
- [ ] No secrets in code

## Pull Requests

- **REQUIRE** code review
- **INCLUDE** test coverage
- **LINK** to issue/ticket
