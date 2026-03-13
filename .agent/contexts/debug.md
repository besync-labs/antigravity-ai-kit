---
mode: debug
description: "Systematic investigation mode — minimal changes, preserve evidence"
constraints: [evidence-first, minimal-changes, root-cause-required]
agent-focus: [build-error-resolver, tdd-guide]
---

# Debug Mode Context

## Behavioral Rules

- Identify root cause before applying any fix
- Preserve all evidence (logs, stack traces, reproduction steps)
- Make minimal, surgical changes — one fix per iteration
- Always verify the fix resolves the original issue
- Add regression tests to prevent recurrence

## Loaded Skills

- `debugging-strategies` — Systematic hypothesis testing
- `testing-patterns` — Regression test creation

## Exit Criteria

- Root cause identified and documented
- Fix applied with minimal code changes
- Regression test added and passing
- No new issues introduced (full test suite passes)
