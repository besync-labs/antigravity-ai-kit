# Antigravity AI Kit — Workflows

> **Purpose**: Slash command workflows for common tasks
> **Count**: 8 Workflows

---

## Overview

Workflows are triggered by `/command` syntax for common development tasks. Each workflow provides structured guidance and output formats.

---

## Available Workflows

| Command                        | Purpose                     |
| :----------------------------- | :-------------------------- |
| [/brainstorm](brainstorm.md)   | Structured idea exploration |
| [/plan](plan.md)               | Implementation planning     |
| [/debug](debug.md)             | Systematic debugging        |
| [/enhance](enhance.md)         | Feature addition/updates    |
| [/orchestrate](orchestrate.md) | Multi-agent coordination    |
| [/deploy](deploy.md)           | Production deployment       |
| [/preview](preview.md)         | Local server management     |
| [/status](status.md)           | Project status display      |

---

## Quick Reference

### Planning & Discovery

```
/brainstorm [topic]     - Explore options before coding
/plan [feature]         - Create implementation plan
/status                 - Show project status
```

### Development

```
/enhance [feature]      - Add/update features
/debug [issue]          - Systematic debugging
/orchestrate [task]     - Multi-agent complex tasks
```

### Deployment

```
/preview                - Manage dev server
/deploy                 - Production deployment
/deploy check           - Pre-deployment checks
/deploy rollback        - Rollback to previous
```

---

## Workflow Format

```markdown
---
description: What this workflow does
---

# /command - Title

$ARGUMENTS

---

## Task

[What happens when triggered]

## Behavior

[Step by step process]

## Output Format

[Expected output]

## Examples

[Usage examples]
```

---

## Creating Custom Workflows

1. Create a new `.md` file in this directory
2. Name it after the command (e.g., `mycommand.md`)
3. Follow the format above
4. Use `$ARGUMENTS` placeholder for user input
