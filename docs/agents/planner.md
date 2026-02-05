# Planner Agent

> Creates detailed implementation plans for features and tasks.

---

## Purpose

The Planner agent analyzes requirements and creates step-by-step implementation plans with:

- Task breakdown
- File changes needed
- Dependencies
- Testing strategy
- Risk assessment

---

## Invocation

```
/plan <feature description>
```

**Example:**

```
/plan Add user authentication with JWT tokens
```

---

## Output

The Planner produces a markdown plan with:

1. **Requirements Analysis** — Understanding what needs to be done
2. **Architecture Review** — How it fits existing system
3. **Step Breakdown** — Ordered implementation steps
4. **Testing Strategy** — Required tests
5. **Risks & Mitigations** — Potential issues

---

## Best Practices

- Be specific in your feature description
- Review the plan before implementing
- Update the plan if requirements change
