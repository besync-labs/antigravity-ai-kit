---
name: parallel-agents
description: Multi-agent orchestration patterns for complex tasks requiring multiple domain expertise or comprehensive analysis.
version: 1.0.0
allowed-tools: Read, Glob, Grep
---

# Native Parallel Agents

> **Purpose**: Enable coordinating multiple specialized agents through Antigravity's native agent system while maintaining Trust-Grade governance.

## Overview

This skill enables coordinating multiple specialized agents for complex tasks. Unlike external scripts, this approach keeps all orchestration within Antigravity's control while applying BeSync governance protocols.

---

## When to Use Orchestration

✅ **Good for:**

- Complex tasks requiring multiple expertise domains
- Code analysis from security, performance, and quality perspectives
- Comprehensive reviews (architecture + security + testing)
- Feature implementation needing backend + frontend + database work
- Trust-Grade verticals (Auth, Payment, etc.)

❌ **Not for:**

- Simple, single-domain tasks
- Quick fixes or small changes
- Tasks where one agent suffices

---

## Native Agent Invocation

### Single Agent

```
Use the security-reviewer agent to audit authentication
```

### Sequential Chain

```
First, use the architect to review structure.
Then, use the code-reviewer to check implementation.
Finally, use the tdd-guide to verify test coverage.
```

### With Context Passing

```
Use the planner to break down the feature.
Based on that plan, have the architect design the structure.
Then, have the tdd-guide create test specifications.
```

### Resume Previous Work

```
Resume agent [agentId] and continue with additional requirements.
```

---

## Orchestration Patterns

### Pattern 1: Feature Vertical (BeSync Standard)

```
Agents: planner → architect → [domain-agents] → tdd-guide → e2e-runner

1. planner: Break down feature into tasks
2. architect: Design component structure
3. [domain-agents]: Implement by domain
4. tdd-guide: Create/verify unit tests
5. e2e-runner: Create/verify E2E tests
6. Synthesize all deliverables
```

### Pattern 2: Code Review Comprehensive

```
Agents: code-reviewer → security-reviewer → synthesis

1. code-reviewer: Quality and patterns review
2. security-reviewer: Security posture audit
3. Synthesize with prioritized findings
```

### Pattern 3: Security Audit

```
Agents: security-reviewer → architect → tdd-guide

1. security-reviewer: Vulnerability assessment
2. architect: Secure architecture patterns
3. tdd-guide: Security test specifications
```

### Pattern 4: Build Recovery

```
Agents: build-error-resolver → refactor-cleaner → tdd-guide

1. build-error-resolver: Fix immediate errors
2. refactor-cleaner: Clean up technical debt
3. tdd-guide: Add regression tests
```

---

## Available Agents

| Agent                  | Expertise     | Trigger Phrases                     |
| ---------------------- | ------------- | ----------------------------------- |
| `architect`            | System Design | "design", "structure", "pattern"    |
| `planner`              | Task Planning | "plan", "roadmap", "breakdown"      |
| `code-reviewer`        | Code Quality  | "review", "check", "audit"          |
| `security-reviewer`    | Security      | "security", "auth", "vulnerability" |
| `tdd-guide`            | Unit Testing  | "test", "TDD", "coverage"           |
| `e2e-runner`           | E2E Testing   | "e2e", "playwright", "integration"  |
| `build-error-resolver` | Build Issues  | "error", "compile", "typescript"    |
| `refactor-cleaner`     | Refactoring   | "refactor", "clean", "improve"      |
| `doc-updater`          | Documentation | "docs", "readme", "document"        |
| `knowledge-agent`      | Knowledge     | "learn", "pattern", "remember"      |

---

## Synthesis Protocol

After all agents complete, synthesize findings:

```markdown
## Orchestration Synthesis

### Task Summary

[What was accomplished]

### Agent Contributions

| Agent             | Finding         |
| ----------------- | --------------- |
| architect         | Designed X      |
| security-reviewer | Identified Y    |
| tdd-guide         | Created Z tests |

### Consolidated Deliverables

1. **Code Changes**: [summary]
2. **Test Coverage**: [metrics]
3. **Documentation**: [updates]

### Action Items

- [ ] Complete remaining tasks
- [ ] Run verification loop
- [ ] Update session state
```

---

## Trust-Grade Integration

### Pre-Orchestration Checklist

- [ ] Verify session state is current
- [ ] Check for active blockers
- [ ] Load relevant Meta-Directives
- [ ] Confirm scope with user if complex

### Post-Orchestration Protocol

- [ ] Run verification-loop skill
- [ ] Update session-state.json
- [ ] Trigger continuous-learning if patterns detected
- [ ] Document in knowledge base if novel approach

---

## Best Practices

1. **Logical Order**: Discovery → Design → Implementation → Testing
2. **Share Context**: Pass relevant findings to subsequent agents
3. **Single Synthesis**: One unified report, not separate outputs
4. **Verify Changes**: Always include tdd-guide for code modifications
5. **Maintain Governance**: Apply Trust-Grade protocols throughout

---

## Key Benefits

- ✅ **Single session** - All agents share context
- ✅ **AI-controlled** - Orchestrated autonomously
- ✅ **Trust-Grade** - Governance maintained throughout
- ✅ **Resume support** - Can continue previous agent work
- ✅ **Context passing** - Findings flow between agents
