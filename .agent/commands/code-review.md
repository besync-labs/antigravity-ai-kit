---
name: code-review
description: Perform comprehensive code review on files or directories
invokes: code-reviewer
---

# /code-review

> **Purpose**: Quality and security review of code changes

---

## Usage

```
/code-review [path]
/code-review              # Review uncommitted changes
/code-review src/auth/    # Review specific directory
/code-review file.ts      # Review specific file
```

---

## Behavior

1. **Invoke Code Reviewer Agent**
2. **Capture Changes** - Get diff or specified files
3. **Apply Checklist** - Security, quality, best practices
4. **Generate Report** - Categorized findings
5. **Provide Verdict** - APPROVE / BLOCK / WARNING

---

## Output

```markdown
## Code Review Report

| Severity | Count |
| :------- | :---- |
| CRITICAL | 0     |
| HIGH     | 1     |
| MEDIUM   | 3     |
| LOW      | 2     |

### [HIGH] Missing Error Handling

**File**: `src/api/client.ts:42`
**Issue**: Async call without try/catch
**Fix**: Add error boundary

---

**Verdict**: ⚠️ WARNING

Fix HIGH issues before merging.
```

---

## Related Commands

- `/security-scan` - Deep security analysis
- `/verify` - Full verification loop
