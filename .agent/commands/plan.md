---
name: plan
description: Create a comprehensive implementation plan for a feature or change
invokes: planner
---

# /plan

> **Purpose**: Create a detailed, actionable implementation plan before coding

---

## Usage

```
/plan [feature description]
```

## Examples

```
/plan Add user authentication with JWT
/plan Refactor database layer to use repository pattern
/plan Implement caching for API responses
```

---

## Behavior

1. **Invoke Planner Agent** with the feature description
2. **Analyze Requirements** - Understand what needs to be built
3. **Check Alignment** - Verify against operating constraints
4. **Create Plan** - Detailed steps with files, actions, risks
5. **Wait for Approval** - Plan must be approved before implementation

---

## Output

A structured implementation plan with:

- Requirements summary
- Architecture changes
- Implementation steps (phased)
- Testing strategy
- Risks and mitigations
- Estimated effort

---

## Related Commands

- `/implement` - Execute an approved plan
- `/track` - Start formal tracking
