# Antigravity AI Kit — Hooks

> **Purpose**: Event-driven automation triggered by specific actions

---

## Overview

Hooks are automated actions triggered by events during development sessions.

---

## Available Hooks

| Hook               | Trigger           | Action           |
| :----------------- | :---------------- | :--------------- |
| `session-start`    | Session begins    | Load context     |
| `session-end`      | Session ends      | Save state       |
| `pre-commit`       | Before git commit | Run verification |
| `secret-detection` | After file write  | Block secrets    |

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

| Trigger        | When                  |
| :------------- | :-------------------- |
| `SessionStart` | New session begins    |
| `SessionEnd`   | Session ends          |
| `PreToolUse`   | Before tool execution |
| `PostToolUse`  | After tool execution  |
