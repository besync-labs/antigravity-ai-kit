---
name: verify
description: Run full verification loop (build, lint, test, coverage)
invokes: verification-loop skill
---

# /verify

> **Purpose**: Comprehensive quality verification before commit/deploy

---

## Usage

```
/verify
/verify --fix  # Auto-fix lint issues
```

---

## Behavior

1. **Build Check** - Compile TypeScript
2. **Lint Check** - ESLint/Prettier
3. **Type Check** - Strict TypeScript
4. **Unit Tests** - All unit tests
5. **Integration Tests** - API tests
6. **Coverage Check** - 80%+ required
7. **Security Scan** - Basic vulnerability check

---

## Output

```markdown
## Verification Report

| Check      | Status | Time |
| :--------- | :----- | :--- |
| Build      | ✅     | 2.3s |
| Lint       | ✅     | 1.2s |
| Types      | ✅     | 3.1s |
| Unit Tests | ✅     | 8.5s |
| Coverage   | ✅ 92% | -    |
| Security   | ✅     | 1.0s |

**Overall**: ✅ PASS

Ready to commit!
```

---

## Related Commands

- `/security-scan` - Deep security audit
- `/code-review` - Manual code review
