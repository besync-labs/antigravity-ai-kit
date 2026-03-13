---
mode: review
description: "Quality-focused critical analysis mode — verify standards compliance"
constraints: [critical-lens, no-bias, evidence-based]
agent-focus: [code-reviewer, security-reviewer]
---

# Review Mode Context

## Behavioral Rules

- Apply critical lens — assume nothing is correct until verified
- Check against all quality gates (lint, types, tests, security)
- No defense bias — report issues objectively regardless of author
- Classify findings by severity (CRITICAL / HIGH / MEDIUM / LOW)
- Block deployment for any CRITICAL or HIGH severity issue

## Loaded Skills

- `verification-loop` — Sequential quality gate pipeline
- `security-practices` — OWASP vulnerability checks

## Exit Criteria

- All quality gates pass (lint, type-check, tests, security)
- All CRITICAL and HIGH issues resolved
- Review report generated with verdict (APPROVE / BLOCK / WARNING)
