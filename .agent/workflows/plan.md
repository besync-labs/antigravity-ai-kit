---
description: Create implementation plan. Invokes planner agent for structured task breakdown.
---

# /plan - Implementation Planning

$ARGUMENTS

---

## 🔴 CRITICAL RULES

1. **NO CODE WRITING** — This creates plan only
2. **Use planner agent** — Invoke for structured breakdown
3. **Socratic Gate** — Ask clarifying questions first
4. **Dynamic Naming** — Name based on task

---

## Task

Create implementation plan using the `planner` agent.

### Steps

1. **Clarify Requirements**
   - Ask 3 questions minimum (Socratic Gate)
   - Purpose, scope, constraints

2. **Create Plan**
   - Task breakdown with verification criteria
   - Agent assignments if multi-domain
   - Clear done criteria

3. **Output Location**
   - Plan in project root or `docs/` folder
   - Named dynamically: `PLAN-{task-slug}.md`

---

## Naming Examples

| Request                 | Plan File                |
| ----------------------- | ------------------------ |
| `/plan e-commerce cart` | `PLAN-ecommerce-cart.md` |
| `/plan mobile app`      | `PLAN-mobile-app.md`     |
| `/plan dark mode`       | `PLAN-dark-mode.md`      |
| `/plan auth fix`        | `PLAN-auth-fix.md`       |

---

## After Planning

```
✅ Plan created: docs/PLAN-{slug}.md

Next steps:
- Review the plan
- Approve to start implementation
- Or modify plan manually
```

---

## Examples

```
/plan e-commerce site with cart
/plan mobile app for fitness tracking
/plan SaaS dashboard with analytics
/plan add authentication
```
