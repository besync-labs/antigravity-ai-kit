---
name: status
description: Display current session status and context
---

# /status

> **Purpose**: Quick overview of current session state

---

## Usage

```
/status
```

---

## Behavior

1. **Load Session State** from `session-state.json`
2. **Check Git Status** - Current branch, uncommitted changes
3. **Check Build Status** - Last build result
4. **Display Context** - Current task, open items

---

## Output

```markdown
## Session Status

**Branch**: feature/auth
**Last Commit**: abc1234 - feat: add login form
**Uncommitted Changes**: 3 files

## Current Task

[Current task description or "No active task"]

## Open Items

- [x] Item 1
- [ ] Item 2

## Quick Actions

- `/plan` - Create new plan
- `/verify` - Run verification
```

---

## Related Commands

- `/checkpoint` - Save current state
- `/compact` - Manage context
