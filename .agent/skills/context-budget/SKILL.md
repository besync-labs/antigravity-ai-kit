---
name: context-budget
description: Context window budget management and selective capability loading for LLM token optimization.
version: 1.0.0
triggers: [context-warning, session-start, manual]
---

# Context Budget Skill

> **Purpose**: Manage LLM context window as a finite resource. Ensure the right agents and skills are loaded for each task while preventing context overflow.

---

## Overview

LLM context windows have hard token limits. Loading all 19 agents and 27 skills simultaneously consumes context that should be reserved for the actual work. This skill implements intelligent selective loading to maximize usable context for code and reasoning.

---

## How It Works

### 1. Domain Detection

At the start of each task, analyze the user request to identify which domains are involved:

```
User: "Add JWT authentication to the API"
→ Detected domains: security, backend, testing
→ Load: security-reviewer, backend-specialist, tdd-guide
→ Load: security-practices, api-patterns, testing-patterns
```

### 2. Selective Loading

Consult `engine/loading-rules.json` to determine which agents and skills to load:

- **Always loaded** (core): `rules.md`, `manifest.json`, `workflow-state.json`
- **Session context**: `session-context.md`, `session-state.json`
- **Domain-specific**: Only agents/skills matching detected domains

### 3. Budget Limits

| Resource | Default Limit | Rationale |
|:---------|:-------------|:----------|
| Agents per session | 4 | Each agent ~200-500 tokens of context |
| Skills per session | 6 | Each skill ~200-800 tokens of context |
| Maximum loaded context | ~30% of window | Reserve 70% for code and reasoning |

### 4. Overflow Prevention

When approaching context limits:

1. **Warn**: Alert that context is nearing capacity
2. **Compact**: Apply `strategic-compact` skill to summarize completed work
3. **Unload**: Release agents/skills no longer needed for current phase
4. **Persist**: Save important context to `session-state.json` before compaction

---

## Task-Based Loading Profiles

| Task Type | Agents Loaded | Skills Loaded |
|:----------|:-------------|:-------------|
| **Security audit** | security-reviewer, architect | security-practices, architecture |
| **Feature build** | planner, architect, tdd-guide | plan-writing, testing-patterns, clean-code |
| **Bug fix** | build-error-resolver | debugging-strategies |
| **Sprint planning** | sprint-orchestrator, planner | plan-writing, brainstorming |
| **Code review** | code-reviewer, security-reviewer | clean-code, security-practices |
| **Deployment** | devops-engineer, reliability-engineer | deployment-procedures, docker-patterns |

---

## Integration

- Triggered at session start by reading `engine/loading-rules.json`
- Enforced by `reliability-engineer` agent
- Monitored throughout session lifecycle
- Compaction delegated to `strategic-compact` skill
