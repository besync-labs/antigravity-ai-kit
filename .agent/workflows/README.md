# Antigravity AI Kit — Workflows

> **Purpose**: Process templates for common development tasks
> **Count**: 11 Workflows

---

## Overview

Workflows are structured process templates that guide you through complex tasks. Invoke them using slash commands.

---

## Available Workflows

| Workflow          | Command          | Description                                   |
| :---------------- | :--------------- | :-------------------------------------------- |
| **brainstorm**    | `/brainstorm`    | Creative ideation and problem exploration     |
| **create**        | `/create`        | Scaffold new features, components, or modules |
| **debug**         | `/debug`         | Systematic debugging process                  |
| **deploy**        | `/deploy`        | Deployment workflow with verification         |
| **enhance**       | `/enhance`       | Improve existing code quality                 |
| **orchestrate**   | `/orchestrate`   | Multi-agent coordination                      |
| **plan**          | `/plan`          | Create implementation plans                   |
| **preview**       | `/preview`       | Preview changes before committing             |
| **status**        | `/status`        | Check project status                          |
| **test**          | `/test`          | Systematic test writing                       |
| **ui-ux-pro-max** | `/ui-ux-pro-max` | Premium UI/UX design                          |

---

## Workflow Format

```markdown
---
description: What this workflow does
---

# /workflow-name Workflow

> **Purpose**: Brief description

---

## Workflow Steps

### 1. Step Name

Description and actions...

### 2. Step Name

Description and actions...

---

## Checklist

- [ ] Task 1
- [ ] Task 2

---

## Examples

\`\`\`
/workflow-name example usage
\`\`\`
```

---

## Creating Custom Workflows

1. Create `workflows/my-workflow.md`
2. Add frontmatter with `description`
3. Define workflow steps
4. Include checklist and examples
