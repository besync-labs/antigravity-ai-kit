---
description: Multi-agent orchestration for complex tasks requiring multiple specialists.
---

# /orchestrate - Multi-Agent Coordination

$ARGUMENTS

---

## 🔴 CRITICAL: 2-Phase Orchestration

### PHASE 1: PLANNING (Sequential)

| Step | Agent            | Action                         |
| ---- | ---------------- | ------------------------------ |
| 1    | `planner`        | Create implementation plan     |
| 2    | `explorer-agent` | Codebase discovery (if needed) |

> 🔴 **NO OTHER AGENTS during planning!**

### ⏸️ CHECKPOINT: User Approval

After plan is complete, ASK:

```
✅ Plan created: docs/PLAN.md

Do you approve? (Y/N)
- Y: Start implementation
- N: I'll revise the plan
```

> 🔴 **DO NOT proceed to Phase 2 without explicit user approval!**

### PHASE 2: IMPLEMENTATION (Parallel after approval)

| Group      | Agents                                    |
| ---------- | ----------------------------------------- |
| Foundation | `database-architect`, `security-reviewer` |
| Core       | `architect`, `mobile-developer`           |
| Polish     | `tdd-guide`, `devops-engineer`            |

---

## Agent Selection Matrix

| Domain      | Keywords                              | Agent(s)                  |
| ----------- | ------------------------------------- | ------------------------- |
| Security    | "security", "auth", "vulnerabilities" | `security-reviewer`       |
| Backend     | "API", "database", "server"           | `database-architect`      |
| Frontend    | "UI", "component", "page"             | `architect`               |
| Mobile      | "mobile", "expo", "react native"      | `mobile-developer`        |
| Testing     | "test", "coverage", "e2e"             | `tdd-guide`, `e2e-runner` |
| DevOps      | "deploy", "CI/CD", "production"       | `devops-engineer`         |
| Performance | "slow", "optimize", "speed"           | `performance-optimizer`   |

---

## Orchestration Protocol

1. **Analyze Task Domains** — Identify all domains involved
2. **Phase Detection** — Plan exists? User approved?
3. **Execute** — Planning or implementation based on phase
4. **Context Passing** — Pass full context to subagents
5. **Verification** — Run quality gates
6. **Synthesize** — Combine outputs into report

---

## Context Passing (MANDATORY)

When invoking ANY subagent, include:

1. **Original User Request:** Full text
2. **Decisions Made:** All answers to Socratic questions
3. **Previous Agent Work:** Summary of completed work
4. **Current Plan State:** If plan exists

---

## Output Format

```markdown
## 🎭 Orchestration Complete

### Agents Invoked

- `architect` → [summary]
- `database-architect` → [summary]
- `tdd-guide` → [summary]

### Deliverables

- [list of created/modified files]

### Verification

- [test results, lint results]

### Next Steps

- [suggestions for follow-up]
```

---

## Examples

```
/orchestrate build e-commerce platform
/orchestrate add user authentication
/orchestrate refactor database layer
```
