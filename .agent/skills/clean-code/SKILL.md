---
name: clean-code
description: Code quality principles and best practices
triggers: [context, code, quality, review]
---

# Clean Code Skill

> **Purpose**: Write maintainable, readable, and professional code

---

## Overview

This skill applies Robert C. Martin's Clean Code principles and industry best practices for writing professional-grade code.

---

## Naming Conventions

### Variables

```typescript
// ❌ Bad
const d = new Date();
const u = users.filter((x) => x.active);

// ✅ Good
const currentDate = new Date();
const activeUsers = users.filter((user) => user.isActive);
```

### Functions

```typescript
// ❌ Bad
function process(data) { ... }
function handle(x) { ... }

// ✅ Good
function validateUserInput(formData) { ... }
function calculateTotalPrice(orderItems) { ... }
```

### Classes

```typescript
// ❌ Bad
class Data { ... }
class Manager { ... }

// ✅ Good
class UserRepository { ... }
class OrderService { ... }
```

---

## Functions

### Single Responsibility

```typescript
// ❌ Bad - does too much
function processOrder(order) {
  validateOrder(order);
  calculateTotal(order);
  saveToDatabase(order);
  sendEmail(order);
}

// ✅ Good - one responsibility each
function validateOrder(order) { ... }
function calculateOrderTotal(order) { ... }
function persistOrder(order) { ... }
function notifyCustomer(order) { ... }
```

### Keep Small (≤20 lines)

- Each function should do ONE thing
- Extract helper functions when growing

### Minimize Parameters

```typescript
// ❌ Bad
function createUser(name, email, age, address, phone, role) { ... }

// ✅ Good
function createUser(userData: CreateUserDto) { ... }
```

---

## Error Handling

```typescript
// ❌ Bad
try {
  doSomething();
} catch (e) {
  console.log(e);
}

// ✅ Good
try {
  await processPayment(order);
} catch (error) {
  logger.error("Payment processing failed", { orderId: order.id, error });
  throw new PaymentFailedError(order.id, error.message);
}
```

---

## Comments

```typescript
// ❌ Bad - obvious comment
// Increment counter by 1
counter++;

// ✅ Good - explains WHY
// Offset for 0-based index when displaying to users
const displayIndex = arrayIndex + 1;
```

---

## Quick Reference

| Principle      | Guideline             |
| :------------- | :-------------------- |
| Names          | Intention-revealing   |
| Functions      | Small, single purpose |
| Parameters     | ≤3 ideally            |
| Comments       | Explain why, not what |
| Formatting     | Consistent, readable  |
| Error Handling | Explicit, informative |
| DRY            | Don't repeat yourself |
| KISS           | Keep it simple        |
