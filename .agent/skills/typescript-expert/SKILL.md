---
name: typescript-expert
description: Advanced TypeScript patterns and best practices
triggers: [context, typescript, types, generics]
---

# TypeScript Expert Skill

> **Purpose**: Apply advanced TypeScript patterns for type-safe code

---

## Overview

This skill provides advanced TypeScript techniques for building robust, type-safe applications.

---

## Utility Types

### Built-in Utilities

```typescript
// Partial - all properties optional
type UpdateUser = Partial<User>;

// Required - all properties required
type CompleteUser = Required<User>;

// Pick - select specific properties
type UserCredentials = Pick<User, "email" | "password">;

// Omit - exclude specific properties
type PublicUser = Omit<User, "password" | "hashedToken">;

// Record - key-value mapping
type UserRoles = Record<string, Role>;
```

---

## Generics

### Basic Generic

```typescript
function identity<T>(value: T): T {
  return value;
}
```

### Constrained Generic

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### Generic Class

```typescript
class Repository<T extends { id: string }> {
  async findById(id: string): Promise<T | null> { ... }
  async save(entity: T): Promise<T> { ... }
}
```

---

## Type Guards

### typeof Guard

```typescript
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value * 2;
}
```

### instanceof Guard

```typescript
function handleError(error: Error | string) {
  if (error instanceof ValidationError) {
    return { code: "VALIDATION", message: error.message };
  }
  return { code: "UNKNOWN", message: String(error) };
}
```

### Custom Guard

```typescript
interface User {
  type: "user";
  name: string;
}
interface Admin {
  type: "admin";
  name: string;
  permissions: string[];
}

function isAdmin(person: User | Admin): person is Admin {
  return person.type === "admin";
}
```

---

## Discriminated Unions

```typescript
type Result<T> = { success: true; data: T } | { success: false; error: string };

function handleResult<T>(result: Result<T>) {
  if (result.success) {
    console.log(result.data); // TypeScript knows data exists
  } else {
    console.error(result.error); // TypeScript knows error exists
  }
}
```

---

## Mapped Types

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
```

---

## Quick Reference

| Pattern          | Usage                 |
| :--------------- | :-------------------- |
| `Partial<T>`     | Optional updates      |
| `Required<T>`    | Strict validation     |
| `Pick<T, K>`     | Select properties     |
| `Omit<T, K>`     | Exclude properties    |
| `Record<K, V>`   | Key-value maps        |
| `Extract<T, U>`  | Filter union types    |
| `Exclude<T, U>`  | Exclude union types   |
| `NonNullable<T>` | Remove null/undefined |
