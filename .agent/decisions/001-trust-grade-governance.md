# ADR-001: Trust-Grade Governance Model

## Status

**Accepted** — 2025-12-01

## Context

Antigravity AI Kit needed a governance philosophy that would ensure AI-assisted development remains safe, predictable, and aligned with engineering best practices. Without formal constraints, AI agents may produce technically correct but architecturally misaligned solutions, bypass security practices, or make decisions that optimize for speed over stability.

## Decision

We adopted the **Trust-Grade Governance Model** with the following immutable constraints:

| Priority | Principle | Meaning |
|:---------|:----------|:--------|
| 1 | Trust > Speed | Never sacrifice user trust for faster delivery |
| 2 | Completion > Suggestion | Finish current work before proposing new work |
| 3 | Consistency > Speed | Update all affected files, not just the target |
| 4 | Explainability > Performance | Understandable decisions beat clever shortcuts |
| 5 | Safety > Growth | Never compromise security, data privacy, or stability |

These principles are enforced through:
- **rules.md**: The binding identity contract loaded at every session
- **Session management**: State tracked across sessions via `session-context.md` and `session-state.json`
- **Checklists**: Pre/post session quality gates
- **Hooks**: Event-driven automation for enforcement

## Consequences

### Positive
- Consistent AI behavior across sessions and projects
- Security-by-default through principle ordering
- Predictable decision-making under ambiguity
- Maintainable codebase through Consistency > Speed

### Negative
- Slower initial response time (context loading)
- Higher token usage per session (governance overhead)
- May feel restrictive for rapid prototyping scenarios

## Alternatives Considered

1. **No governance** — Pure LLM default behavior. Rejected due to inconsistency and safety risks.
2. **Permission-based** — Ask user for every decision. Rejected due to excessive friction.
3. **Role-based** — Different governance per agent. Rejected due to complexity of maintaining cross-agent consistency.
