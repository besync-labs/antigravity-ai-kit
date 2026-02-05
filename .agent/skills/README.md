# Antigravity AI Kit — Skills

> **Purpose**: Workflow definitions and domain knowledge extensions
> **Count**: 4 Core Skills

---

## Overview

Skills are comprehensive workflow definitions that extend agent capabilities. Each skill contains:

- **SKILL.md** — Main instruction file with detailed steps
- **scripts/** — Optional helper scripts
- **examples/** — Optional reference implementations

---

## Core Skills

| Skill                                               | Purpose                   |
| :-------------------------------------------------- | :------------------------ |
| [verification-loop](verification-loop/SKILL.md)     | Continuous quality gates  |
| [continuous-learning](continuous-learning/SKILL.md) | Pattern extraction (PAAL) |
| [strategic-compact](strategic-compact/SKILL.md)     | Context window management |
| [eval-harness](eval-harness/SKILL.md)               | Performance evaluation    |

---

## Skill Format

```markdown
---
name: skill-name
description: What this skill does
triggers: [manual, auto]
---

# Skill Name

## Overview

[What problem this skill solves]

## Workflow

1. [Step 1]
2. [Step 2]

## Configuration

[Any configurable parameters]
```

---

## Creating Custom Skills

1. Create a new directory: `skills/my-skill/`
2. Add `SKILL.md` with the format above
3. Optionally add `scripts/` and `examples/`
