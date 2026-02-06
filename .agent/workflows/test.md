---
description: Write and run tests systematically
---

# /test Workflow

> **Purpose**: Systematic test writing and execution

---

## Workflow Steps

### 1. Identify Test Scope

- What needs to be tested?
- Unit, integration, or E2E?
- What are the critical paths?

### 2. Analyze Existing Coverage

```bash
npm run test:coverage
```

- Check current coverage percentage
- Identify untested code paths
- Prioritize critical functionality

### 3. Write Tests (AAA Pattern)

```typescript
describe("FeatureName", () => {
  it("should [expected behavior] when [condition]", () => {
    // Arrange
    const input = createTestData();

    // Act
    const result = functionUnderTest(input);

    // Assert
    expect(result).toEqual(expectedOutput);
  });
});
```

### 4. Test Categories

| Type        | Scope          | Speed  | Isolation       |
| :---------- | :------------- | :----- | :-------------- |
| Unit        | Function/Class | Fast   | Full mocking    |
| Integration | Module         | Medium | Partial mocking |
| E2E         | Full system    | Slow   | No mocking      |

### 5. Run Tests

```bash
# All tests
npm test

# Watch mode
npm run test:watch

# Specific file
npm test -- user.service.spec.ts

# Coverage report
npm run test:coverage
```

### 6. Review Results

- All tests passing?
- Coverage targets met (≥80%)?
- Edge cases covered?

---

## Checklist

- [ ] Test scope identified
- [ ] Coverage analyzed
- [ ] Tests written
- [ ] All tests passing
- [ ] Coverage ≥80%
- [ ] Edge cases covered

---

## Examples

```
/test UserService
/test authentication flow
/test API endpoints for orders
```
