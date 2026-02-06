---
name: database-design
description: Database schema design and optimization patterns
triggers: [context, database, schema, sql, prisma]
---

# Database Design Skill

> **Purpose**: Design efficient, normalized database schemas

---

## Overview

This skill provides guidance for designing performant, scalable database schemas following best practices.

---

## Schema Design Principles

### 1. Normalization (3NF)

- **1NF**: Atomic values, no repeating groups
- **2NF**: No partial dependencies
- **3NF**: No transitive dependencies

### 2. Naming Conventions

```sql
-- Tables: plural, snake_case
users, order_items, user_preferences

-- Columns: singular, snake_case
user_id, created_at, is_active

-- Primary Keys: id or {table}_id
id, user_id

-- Foreign Keys: {referenced_table}_id
user_id, order_id
```

---

## Common Patterns

### User Entity

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  firstName String?
  lastName  String?
  role      Role     @default(USER)
  isActive  Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  USER
  ADMIN
}
```

### One-to-Many

```prisma
model User {
  id     String  @id @default(uuid())
  orders Order[]
}

model Order {
  id     String @id @default(uuid())
  userId String
  user   User   @relation(fields: [userId], references: [id])
}
```

### Many-to-Many

```prisma
model User {
  id    String @id @default(uuid())
  roles Role[]
}

model Role {
  id    String @id @default(uuid())
  users User[]
}
```

---

## Indexing Strategy

```prisma
model User {
  id    String @id @default(uuid())
  email String @unique

  @@index([createdAt])
  @@index([isActive, role])
}
```

### When to Index

| Scenario          | Index Type     |
| :---------------- | :------------- |
| Primary lookup    | Primary Key    |
| Unique constraint | Unique         |
| Frequent WHERE    | B-tree         |
| Text search       | Full-text      |
| JSON fields       | GIN (Postgres) |

---

## Query Optimization

```typescript
// ❌ N+1 Problem
const users = await prisma.user.findMany();
for (const user of users) {
  const orders = await prisma.order.findMany({ where: { userId: user.id } });
}

// ✅ Eager Loading
const users = await prisma.user.findMany({
  include: { orders: true },
});
```

---

## Quick Reference

| Pattern        | Usage               |
| :------------- | :------------------ |
| UUID           | Distributed systems |
| Auto-increment | Simple apps         |
| Soft Delete    | Audit requirements  |
| Timestamps     | Always include      |
| Indexes        | Frequent queries    |
| Constraints    | Data integrity      |
