---
name: testing-patterns
description: Testing strategies and patterns for quality assurance
triggers: [context, test, tdd, jest, vitest]
---

# Testing Patterns Skill

> **Purpose**: Apply professional testing strategies for quality assurance

---

## Overview

This skill provides comprehensive testing patterns for unit, integration, and end-to-end testing.

---

## Testing Pyramid

```
        /\
       /E2E\         ← Few, slow, expensive
      /──────\
     /Integra-\      ← Some, medium speed
    / tion     \
   /────────────\
  /    Unit      \   ← Many, fast, cheap
 /────────────────\
```

---

## Unit Testing

### AAA Pattern (Arrange-Act-Assert)

```typescript
describe("UserService", () => {
  it("should create a user with valid data", async () => {
    // Arrange
    const userData = { email: "test@example.com", name: "Test" };
    const mockRepository = {
      create: jest.fn().mockResolvedValue({ id: "1", ...userData }),
    };
    const service = new UserService(mockRepository);

    // Act
    const result = await service.createUser(userData);

    // Assert
    expect(result.id).toBe("1");
    expect(result.email).toBe("test@example.com");
    expect(mockRepository.create).toHaveBeenCalledWith(userData);
  });
});
```

### Test Naming

```typescript
// Pattern: should_[expected]_when_[condition]
it('should throw ValidationError when email is invalid', () => { ... });
it('should return empty array when no users exist', () => { ... });
it('should hash password when creating user', () => { ... });
```

---

## Integration Testing

```typescript
describe("POST /api/users", () => {
  beforeAll(async () => {
    await setupTestDatabase();
  });

  afterAll(async () => {
    await teardownTestDatabase();
  });

  it("should create user and return 201", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({ email: "test@example.com", password: "SecurePass123!" })
      .expect(201);

    expect(response.body.data.email).toBe("test@example.com");
  });
});
```

---

## Mocking

### Mock Functions

```typescript
const mockSendEmail = jest.fn().mockResolvedValue({ sent: true });
```

### Mock Modules

```typescript
jest.mock("./emailService", () => ({
  sendEmail: jest.fn().mockResolvedValue({ sent: true }),
}));
```

### Spy Functions

```typescript
const spy = jest.spyOn(userService, "validate");
await userService.createUser(data);
expect(spy).toHaveBeenCalled();
```

---

## Coverage Targets

| Metric     | Target |
| :--------- | :----- |
| Lines      | ≥80%   |
| Branches   | ≥75%   |
| Functions  | ≥80%   |
| Statements | ≥80%   |

---

## Quick Reference

| Pattern         | Usage                 |
| :-------------- | :-------------------- |
| AAA             | All unit tests        |
| Given-When-Then | BDD style             |
| Mocking         | Isolate dependencies  |
| Fixtures        | Reusable test data    |
| Factories       | Generate test objects |
| Snapshot        | UI components         |
