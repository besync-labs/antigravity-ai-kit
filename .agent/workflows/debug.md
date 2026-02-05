---
description: Systematic debugging workflow. Activates DEBUG mode for problem investigation.
---

# /debug - Systematic Problem Investigation

$ARGUMENTS

---

## Purpose

Activates DEBUG mode for systematic investigation of issues, errors, or unexpected behavior.

---

## Behavior

1. **Gather Information**
   - Error message
   - Reproduction steps
   - Expected vs actual behavior
   - Recent changes

2. **Form Hypotheses**
   - List possible causes
   - Order by likelihood

3. **Investigate Systematically**
   - Test each hypothesis
   - Check logs, data flow
   - Use elimination method

4. **Fix and Prevent**
   - Apply fix
   - Explain root cause
   - Add prevention measures

---

## Output Format

```markdown
## 🔍 Debug: [Issue]

### 1. Symptom

[What's happening]

### 2. Information Gathered

- Error: `[error message]`
- File: `[filepath]`
- Line: [line number]

### 3. Hypotheses

1. ❓ [Most likely cause]
2. ❓ [Second possibility]
3. ❓ [Less likely cause]

### 4. Investigation

**Testing hypothesis 1:**
[What I checked] → [Result]

### 5. Root Cause

🎯 **[Explanation]**

### 6. Fix

[Code changes]

### 7. Prevention

🛡️ [How to prevent in future]
```

---

## Examples

```
/debug login not working
/debug API returns 500
/debug form doesn't submit
/debug data not saving
```

---

## Key Principles

- **Ask before assuming** — get full error context
- **Test hypotheses** — don't guess randomly
- **Explain why** — not just what to fix
- **Prevent recurrence** — add tests, validation
