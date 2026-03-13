---
description: Systematic debugging workflow. Activates DEBUG mode for problem investigation.
version: 2.1.0
sdlc-phase: reactive
skills: [debugging-strategies]
commit-types: [fix]
---

# /debug — Systematic Problem Investigation

> **Trigger**: `/debug [issue description]`
> **Lifecycle**: Reactive — any SDLC phase

> [!CAUTION]
> Debugging may involve production systems. Never apply untested fixes to production. Always identify and document the root cause before implementing changes.

> [!TIP]
> This workflow leverages the **debugging-strategies** skill. Read `.agent/skills/debugging-strategies/SKILL.md` for extended guidance.

---

## Critical Rules

1. **Root cause required** — never apply a fix without understanding why the issue occurs
2. **No guessing** — form hypotheses, test them systematically, eliminate possibilities
3. **Prevention mandatory** — every fix must include measures to prevent recurrence
4. **Preserve evidence** — capture error messages, logs, and reproduction steps before changing anything
5. **Minimal changes** — fix only what's broken; avoid scope creep during debugging

---

## Argument Parsing

| Command | Action |
| :-------------------------- | :------------------------------------------- |
| `/debug` | Prompt for issue description |
| `/debug [issue]` | Investigate the specified issue directly |

---

## Steps

// turbo
1. **Gather Information**
   - Capture the exact error message, stack trace, or unexpected behavior
   - Document reproduction steps (reliable vs. intermittent)
   - Note expected vs. actual behavior

// turbo
2. **Environment Diagnostics**
   - Operating system and version
   - Runtime versions (Node.js, Python, etc.)
   - Recent git changes (`git log -5 --oneline`)
   - Relevant environment variables and config
   - Dependency versions (`package.json`, `pyproject.toml`, etc.)

// turbo
3. **Form Hypotheses**
   - List 3+ possible causes, ordered by likelihood
   - Consider: recent changes, dependency issues, environment differences, data edge cases

// turbo
4. **Investigate Systematically**
   - Test each hypothesis in order of likelihood
   - Check logs, data flow, network requests, and state
   - Use elimination method — rule out causes definitively
   - Document findings for each hypothesis tested

5. **Apply Fix**
   - Implement the minimal fix that addresses the root cause
   - Verify the fix resolves the original issue
   - Confirm no regressions are introduced

6. **Prevent Recurrence**
   - Add tests that would catch this issue
   - Add validation, error handling, or guardrails as needed
   - Document the root cause for future reference

---

## Output Template

```markdown
## 🔍 Debug: [Issue]

### 1. Symptom

[What's happening — error message, unexpected behavior]

### 2. Environment

- **OS**: [os]
- **Runtime**: [runtime and version]
- **Recent Changes**: [last 3 commits]

### 3. Hypotheses

1. ❓ [Most likely cause] — [why]
2. ❓ [Second possibility] — [why]
3. ❓ [Less likely cause] — [why]

### 4. Investigation

**Hypothesis 1:** [What I checked] → [Result: confirmed / eliminated]
**Hypothesis 2:** [What I checked] → [Result]

### 5. Root Cause

🎯 **[Root cause explanation]**

### 6. Fix Applied

[Code changes with explanation]

### 7. Prevention

🛡️ [Tests added, validation added, documentation updated]

After fix: proceed to `/test` for regression verification.
```

---

## Governance

**PROHIBITED:**
- Applying fixes without identifying the root cause
- Guessing randomly without structured hypothesis testing
- Modifying production systems without rollback plan
- Ignoring prevention measures after a fix
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- Evidence-based hypothesis testing
- Root cause documentation before any fix
- Prevention measures (tests, validation, guardrails)
- Regression verification after fix

---

## Completion Criteria

- [ ] Error/issue is fully reproduced and documented
- [ ] Environment diagnostics are captured
- [ ] Root cause is identified with evidence
- [ ] Fix is applied and verified
- [ ] Prevention measures are implemented (tests, validation)
- [ ] No regressions introduced
- [ ] After fix: proceed to `/test` for full regression check

---

## Related Resources

- **Next**: `/test` (regression verification after fix)
- **Skill**: `.agent/skills/debugging-strategies/SKILL.md`
- **Related Skills**: `.agent/skills/testing-patterns/SKILL.md`
