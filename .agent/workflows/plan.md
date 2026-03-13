---
description: Create implementation plan. Invokes planner agent for structured task breakdown.
version: 2.0.0
---

# /plan — Implementation Planning

> **Trigger**: `/plan [task description]`
> **Lifecycle**: Plan — first step of SDLC after discovery

> [!IMPORTANT]
> This workflow creates plans, NOT code. No implementation during planning. All plans require user approval before execution begins.

> [!TIP]
> This workflow leverages the **plan-writing** skill. Read `.agent/skills/plan-writing/SKILL.md` for extended guidance.

---

## Critical Rules

1. **No code writing** — this workflow produces plans only
2. **Socratic gate** — ask at least 3 clarifying questions before creating a plan
3. **Dynamic naming** — name plan files based on the task (e.g., `PLAN-auth-fix.md`)
4. **Verification criteria** — every task in the plan must have clear "done" criteria
5. **User approval required** — never proceed to implementation without explicit approval
6. **Small, focused tasks** — break down work into atomic, verifiable steps

---

## Argument Parsing

| Command | Action |
| :----------------------- | :---------------------------------------------- |
| `/plan` | Prompt for task description |
| `/plan [description]` | Create implementation plan for the described task |

---

## Steps

// turbo
1. **Clarify Requirements** (Socratic Gate)
   - Ask at least 3 clarifying questions about purpose, scope, and constraints
   - Confirm acceptance criteria and edge cases
   - Identify relevant existing code and patterns

// turbo
2. **Explore Codebase**
   - Scan project structure and architecture
   - Identify files, modules, and patterns relevant to the task
   - Note dependencies and integration points

3. **Create Plan**
   - Break down the task into small, focused steps
   - Assign verification criteria to each step
   - Order tasks logically (dependencies first)
   - Identify which agents are needed for multi-domain tasks
   - Save plan to `docs/PLAN-{task-slug}.md`

4. **Present for Approval**
   - Show the plan summary to the user
   - Wait for explicit approval before any implementation

---

## Naming Convention

| Request | Plan File |
| :----------------------- | :--------------------------- |
| `/plan e-commerce cart` | `PLAN-ecommerce-cart.md` |
| `/plan mobile app` | `PLAN-mobile-app.md` |
| `/plan auth fix` | `PLAN-auth-fix.md` |

---

## Output Template

```markdown
## 📋 Plan: [Task Name]

### Scope

[What this plan covers and what it doesn't]

### Tasks

1. [ ] [Task description] — **Verify**: [done criteria]
2. [ ] [Task description] — **Verify**: [done criteria]
3. [ ] [Task description] — **Verify**: [done criteria]

### Agent Assignments (if multi-domain)

| Task | Agent | Domain |
| :--- | :---- | :----- |
| [task] | [agent] | [domain] |

### Risks & Considerations

- [risk or constraint]

---

✅ Plan saved: `docs/PLAN-{slug}.md`

Approve to start implementation with `/create` or `/enhance`.
```

---

## Governance

**PROHIBITED:**
- Writing implementation code during planning
- Proceeding to implementation without user approval
- Creating vague, unverifiable tasks
- Skipping the Socratic gate
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- At least 3 clarifying questions before planning
- Verification criteria for every task
- User approval before implementation begins
- Plan file saved in `docs/` with dynamic name

---

## Completion Criteria

- [ ] Clarifying questions asked and answered
- [ ] Codebase explored for relevant context
- [ ] Plan created with verifiable tasks
- [ ] Plan saved to `docs/PLAN-{slug}.md`
- [ ] User has reviewed and approved the plan
- [ ] After approval: proceed to `/create` or `/enhance` for implementation

---

## Related Resources

- **Previous**: `/brainstorm` (explore options) · `/quality-gate` (validate approach)
- **Next**: `/create` (scaffold new features) · `/enhance` (iterative development)
- **Skill**: `.agent/skills/plan-writing/SKILL.md`
- **Agent**: `planner` agent (see `.agent/agents/planner.md`)
