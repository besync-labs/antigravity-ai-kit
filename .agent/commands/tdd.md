---
name: tdd
description: Start test-driven development workflow for a component
invokes: tdd-guide
---

# /tdd

> **Purpose**: Enforce test-first development with RED-GREEN-REFACTOR cycle

---

## Usage

```
/tdd [component/feature name]
```

## Examples

```
/tdd UserService
/tdd AuthController login endpoint
/tdd calculateTotal utility function
```

---

## Behavior

1. **Invoke TDD Guide Agent**
2. **Analyze Component** - Understand what to test
3. **Write Failing Test** (RED) - Create test that fails
4. **Verify Failure** - Run test, confirm it fails
5. **Write Implementation** (GREEN) - Minimal code to pass
6. **Verify Pass** - Run test, confirm it passes
7. **Refactor** (IMPROVE) - Clean up while keeping tests green
8. **Check Coverage** - Verify 80%+ achieved

---

## Output

```markdown
## TDD Session: UserService

### RED Phase 🔴

Created test: `user.service.spec.ts`
Test status: FAILING ✓

### GREEN Phase 🟢

Implementation: `user.service.ts`
Test status: PASSING ✓

### Coverage

- Statements: 92%
- Branches: 85%
- Functions: 90%
- Lines: 92%

Status: ✅ TDD Complete
```

---

## Related Commands

- `/verify` - Full verification loop
- `/code-review` - Review the implementation
