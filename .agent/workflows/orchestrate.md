---
description: Multi-agent orchestration for complex tasks requiring multiple specialists.
version: 2.0.0
---

# /orchestrate — Multi-Agent Coordination

> **Trigger**: `/orchestrate [task description]`
> **Lifecycle**: Reactive — complex multi-domain tasks at any SDLC phase

> [!CAUTION]
> This workflow coordinates multiple agents on the same codebase. Ensure clear domain boundaries to avoid conflicting changes. Phase 2 (implementation) requires explicit user approval.

> [!TIP]
> This workflow leverages the **parallel-agents** and **intelligent-routing** skills. Read `.agent/skills/parallel-agents/SKILL.md` and `.agent/skills/intelligent-routing/SKILL.md` for extended guidance.

---

## Critical Rules

1. **2-Phase protocol** — always plan before implementing; never skip Phase 1
2. **User approval gate** — Phase 2 cannot start without explicit user approval
3. **Context passing mandatory** — every subagent must receive full context (original request, decisions made, previous work)
4. **No agent conflicts** — agents must work on separate files or clearly delineated domains
5. **Verification required** — run quality gates after all agents complete

---

## Steps

### PHASE 1: Planning (Sequential)

// turbo
1. **Analyze Task Domains**
   - Identify all domains involved (backend, frontend, database, security, etc.)
   - Map which agents are needed

// turbo
2. **Create Orchestration Plan**
   - Use `planner` agent for structured task breakdown
   - Use `explorer-agent` for codebase discovery if needed
   - Define execution order and dependencies

> 🔴 **NO other agents during Phase 1!**

3. **Checkpoint: User Approval**

   ```
   ✅ Orchestration plan created.

   Agents needed: [list]
   Estimated scope: [file count]

   Approve to start implementation? (Y/N)
   ```

> 🔴 **DO NOT proceed to Phase 2 without explicit user approval!**

### PHASE 2: Implementation (After Approval)

4. **Execute in Groups**

   | Group | Agents | Domain |
   | :--------- | :------------------------------- | :------------------------- |
   | Foundation | `database-architect`, `security-reviewer` | Data layer, security |
   | Core | `architect`, `backend-specialist`, `frontend-specialist`, `mobile-developer` | Application logic |
   | Quality | `tdd-guide`, `e2e-runner` | Test coverage |
   | Operations | `devops-engineer`, `reliability-engineer` | Infrastructure, reliability |

5. **Context Passing** (for every subagent invocation)
   - Original user request (full text)
   - All decisions from Socratic questions
   - Summary of previous agent work
   - Current plan state

// turbo
6. **Verification**
   - Run full test suite
   - Run lint and type-check
   - Verify build succeeds
   - Synthesize results into report

---

## Agent Selection Matrix

| Domain | Keywords | Agent(s) |
| :----------- | :------------------------------------ | :------------------------------------------------------ |
| Architecture | "design", "structure", "pattern" | `architect`, `planner` |
| Backend | "API", "database", "server" | `backend-specialist`, `database-architect` |
| Frontend | "UI", "component", "page" | `frontend-specialist` |
| Mobile | "mobile", "expo", "react native" | `mobile-developer` |
| Security | "security", "auth", "vulnerabilities" | `security-reviewer` |
| Testing | "test", "coverage", "e2e" | `tdd-guide`, `e2e-runner` |
| DevOps | "deploy", "CI/CD", "production" | `devops-engineer` |
| Performance | "slow", "optimize", "speed" | `performance-optimizer` |
| Reliability | "uptime", "monitoring", "resilience" | `reliability-engineer` |
| Code Quality | "refactor", "clean", "lint" | `refactor-cleaner`, `code-reviewer` |

---

## Output Template

```markdown
## 🎭 Orchestration Complete

### Agents Invoked

| Agent | Domain | Summary |
| :---- | :----- | :------ |
| `[agent]` | [domain] | [what was done] |

### Deliverables

| Action | File | Agent |
| :----- | :--- | :---- |
| Created | `path/to/file` | [agent] |
| Modified | `path/to/file` | [agent] |

### Verification

- ✅ Tests: [N] passing
- ✅ Build: successful
- ✅ Lint: clean

### Next Steps

- [suggestions for follow-up workflows]
```

---

## Governance

**PROHIBITED:**
- Skipping Phase 1 (planning) and jumping to implementation
- Starting Phase 2 without explicit user approval
- Invoking agents without passing full context
- Allowing agents to work on overlapping files without coordination
- Skipping verification after agent work completes
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- 2-Phase protocol (plan → approve → implement)
- Full context passing to every subagent
- Domain boundary enforcement
- Quality verification after all agents complete

---

## Completion Criteria

- [ ] Task domains are analyzed and agents are selected
- [ ] Phase 1 plan is created and presented
- [ ] User has explicitly approved Phase 2
- [ ] All agents have completed their work
- [ ] Context was passed to every subagent invocation
- [ ] Verification passes (tests, build, lint)
- [ ] Final synthesized report is delivered

---

## Related Resources

- **Cross-cutting**: Can be invoked at any SDLC phase for complex tasks
- **Skills**: `.agent/skills/parallel-agents/SKILL.md` · `.agent/skills/intelligent-routing/SKILL.md`
- **Agents**: See `.agent/agents/` for full agent catalog
