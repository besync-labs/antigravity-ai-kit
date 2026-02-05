# Testing Rules

> **Priority**: HIGH — Enforced before merge

---

## TDD Requirement

- **WRITE** tests before implementation
- **RED-GREEN-REFACTOR** workflow mandatory
- **80%** minimum coverage required

## Test Types

| Type        | Required       | Coverage       |
| :---------- | :------------- | :------------- |
| Unit        | MANDATORY      | All logic      |
| Integration | MANDATORY      | API endpoints  |
| E2E         | Critical flows | Auth, payments |

## Test Quality

- **INDEPENDENT** — Tests don't depend on each other
- **DETERMINISTIC** — Same result every run
- **FAST** — Unit tests < 100ms

## Naming Convention

```
describe('[Component]', () => {
  describe('[method]', () => {
    it('should [expected behavior]', () => {
      // Given / When / Then
    });
  });
});
```
