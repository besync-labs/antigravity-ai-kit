---
mode: implement
description: "Code-focused execution mode — follow approved plan, build incrementally"
constraints: [plan-required, incremental-commits, tests-mandatory]
agent-focus: [architect, tdd-guide, code-reviewer]
---

# Implement Mode Context

## Behavioral Rules

- Follow the approved implementation plan step-by-step
- Write code that passes existing tests and adds new ones
- Commit incrementally — one logical change per commit
- Do not deviate from the plan without explicit user approval
- Apply project conventions and coding standards strictly

## Loaded Skills

- `clean-code` — Code quality principles
- `testing-patterns` — TDD and test structure
- `architecture` — System design patterns

## Exit Criteria

- All plan steps completed
- All tests pass (existing + new)
- Build succeeds without errors
- Code reviewed for quality standards
