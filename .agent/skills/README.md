# Antigravity AI Kit — Skills

> **Purpose**: Workflow definitions and domain knowledge extensions
> **Count**: 26 Skills (4 Operational + 3 Orchestration + 12 Domain + 7 Development)

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

## Operational Skills (4)

| Skill                                               | Purpose                   |
| :-------------------------------------------------- | :------------------------ |
| [verification-loop](verification-loop/SKILL.md)     | Continuous quality gates  |
| [continuous-learning](continuous-learning/SKILL.md) | Pattern extraction (PAAL) |
| [strategic-compact](strategic-compact/SKILL.md)     | Context window management |
| [eval-harness](eval-harness/SKILL.md)               | Performance evaluation    |

---

## Orchestration Skills (3)

| Skill                                               | Purpose                     |
| :-------------------------------------------------- | :-------------------------- |
| [intelligent-routing](intelligent-routing/SKILL.md) | Automatic agent selection   |
| [parallel-agents](parallel-agents/SKILL.md)         | Multi-agent orchestration   |
| [behavioral-modes](behavioral-modes/SKILL.md)       | Adaptive AI operation modes |

---

## Domain Skills (12)

### Architecture & Design

| Skill                                           | Purpose                  |
| :---------------------------------------------- | :----------------------- |
| [architecture](architecture/SKILL.md)           | System design patterns   |
| [api-patterns](api-patterns/SKILL.md)           | RESTful API design       |
| [database-design](database-design/SKILL.md)     | Schema optimization      |
| [frontend-patterns](frontend-patterns/SKILL.md) | React/component patterns |
| [nodejs-patterns](nodejs-patterns/SKILL.md)     | Backend patterns         |

### Code Quality

| Skill                                                 | Purpose                 |
| :---------------------------------------------------- | :---------------------- |
| [clean-code](clean-code/SKILL.md)                     | Code quality principles |
| [typescript-expert](typescript-expert/SKILL.md)       | Advanced TypeScript     |
| [testing-patterns](testing-patterns/SKILL.md)         | TDD, unit, integration  |
| [debugging-strategies](debugging-strategies/SKILL.md) | Systematic debugging    |

### Operations

| Skill                                             | Purpose                         |
| :------------------------------------------------ | :------------------------------ |
| [docker-patterns](docker-patterns/SKILL.md)       | Containerization                |
| [git-workflow](git-workflow/SKILL.md)             | Branching, commits              |
| [security-practices](security-practices/SKILL.md) | OWASP, vulnerability prevention |

---

## Development Skills (7)

| Skill                                                   | Purpose                       |
| :------------------------------------------------------ | :---------------------------- |
| [app-builder](app-builder/SKILL.md)                     | Full-stack scaffolding        |
| [mobile-design](mobile-design/SKILL.md)                 | Mobile UI/UX patterns         |
| [webapp-testing](webapp-testing/SKILL.md)               | E2E and Playwright testing    |
| [deployment-procedures](deployment-procedures/SKILL.md) | CI/CD and rollback strategies |
| [performance-profiling](performance-profiling/SKILL.md) | Core Web Vitals optimization  |
| [brainstorming](brainstorming/SKILL.md)                 | Socratic discovery protocol   |
| [plan-writing](plan-writing/SKILL.md)                   | Structured task breakdown     |

---

## Skill Format

```markdown
---
name: skill-name
description: What this skill does
triggers: [context, keywords]
---

# Skill Name

## Overview

[What problem this skill solves]

## Workflow

1. [Step 1]
2. [Step 2]

## Quick Reference

| Pattern | Usage       |
| :------ | :---------- |
| Example | Description |
```

---

## Creating Custom Skills

1. Create a new directory: `skills/my-skill/`
2. Add `SKILL.md` with the format above
3. Optionally add `scripts/` and `examples/`
