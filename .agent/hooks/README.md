# Antigravity AI Kit — Hooks

> **Purpose**: Event-driven automation triggered by specific actions  
> **Count**: 4 Core Hooks + Templates

---

## Overview

Hooks are automated actions triggered by events during development sessions. They form the **operational backbone** of Trust-Grade AI governance.

---

## Available Hooks

| Hook               | Trigger           | Action                | Status |
| :----------------- | :---------------- | :-------------------- | :----- |
| `session-start`    | Session begins    | Load context          | Active |
| `session-end`      | Session ends      | Save state            | Active |
| `pre-commit`       | Before git commit | Run verification      | Active |
| `secret-detection` | After file write  | Block exposed secrets | Active |

---

## Hook Templates

Detailed implementation guides are available in `templates/`:

| Template                                       | Purpose                               |
| :--------------------------------------------- | :------------------------------------ |
| [session-start.md](templates/session-start.md) | Context loading and environment setup |
| [session-end.md](templates/session-end.md)     | State preservation and handoff        |

---

## Configuration

Hooks are defined in `hooks.json`:

```json
{
  "hooks": [
    {
      "name": "hook-name",
      "trigger": "TriggerType",
      "matcher": "condition",
      "action": "what to do"
    }
  ]
}
```

---

## Trigger Types

| Trigger        | When Activated            |
| :------------- | :------------------------ |
| `SessionStart` | New session begins        |
| `SessionEnd`   | Session ends              |
| `PreToolUse`   | Before tool execution     |
| `PostToolUse`  | After tool execution      |
| `FileWrite`    | After writing to any file |
| `GitCommit`    | Before git commit         |

---

## Trust-Grade Principles

Hooks implement Trust-Grade governance:

1. **Automatic**: No manual discipline required
2. **Consistent**: Same quality gates every time
3. **Transparent**: Actions are documented
4. **Non-Blocking**: Warnings over hard blocks (when safe)

---

## Creating Custom Hooks

Add to `hooks.json`:

```json
{
  "name": "my-custom-hook",
  "trigger": "PostToolUse",
  "matcher": "tool == 'Write' && file.endsWith('.ts')",
  "action": "Run TypeScript type check"
}
```

Create implementation in `templates/my-custom-hook.md` with:

- Purpose
- Actions (with code examples)
- Expected output
- Customization options
