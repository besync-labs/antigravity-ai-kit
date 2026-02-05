# Antigravity AI Kit — Skills

> **Purpose**: Workflow definitions and domain knowledge extensions
> **Count**: 14 Skills (4 Operational + 10 Domain)

---

## Overview

Skills are comprehensive workflow definitions that extend agent capabilities. Each skill contains:

- **SKILL.md** — Main instruction file with detailed steps
- **scripts/** — Optional helper scripts
- **examples/** — Optional reference implementations

---

## Skill Loading Protocol

```
User Request → Analyze Keywords → Match Skill → Load SKILL.md → Apply
```

Skills are automatically loaded based on task context. Agents invoke relevant skills to enhance their capabilities.

---

## Operational Skills (Meta/System)

| Skill                                               | Purpose                   |
| :-------------------------------------------------- | :------------------------ |
| [verification-loop](verification-loop/SKILL.md)     | Continuous quality gates  |
| [continuous-learning](continuous-learning/SKILL.md) | Pattern extraction (PAAL) |
| [strategic-compact](strategic-compact/SKILL.md)     | Context window management |
| [eval-harness](eval-harness/SKILL.md)               | Performance evaluation    |

---

## Orchestration Skills

| Skill                                               | Purpose                     |
| :-------------------------------------------------- | :-------------------------- |
| [intelligent-routing](intelligent-routing/SKILL.md) | Automatic agent selection   |
| [parallel-agents](parallel-agents/SKILL.md)         | Multi-agent orchestration   |
| [behavioral-modes](behavioral-modes/SKILL.md)       | Adaptive AI operation modes |

---

## Domain Skills

### Development

| Skill                                                   | Purpose                       |
| :------------------------------------------------------ | :---------------------------- |
| [app-builder](app-builder/SKILL.md)                     | Full-stack scaffolding        |
| [mobile-design](mobile-design/SKILL.md)                 | Mobile UI/UX patterns         |
| [webapp-testing](webapp-testing/SKILL.md)               | E2E and Playwright testing    |
| [deployment-procedures](deployment-procedures/SKILL.md) | CI/CD and rollback strategies |
| [performance-profiling](performance-profiling/SKILL.md) | Core Web Vitals optimization  |

### Planning

| Skill                                   | Purpose                     |
| :-------------------------------------- | :-------------------------- |
| [brainstorming](brainstorming/SKILL.md) | Socratic discovery protocol |
| [plan-writing](plan-writing/SKILL.md)   | Structured task breakdown   |

---

## Skill Format

```markdown
---
name: skill-name
description: What this skill does
version: 1.0.0
allowed-tools: Read, Glob, Grep
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
