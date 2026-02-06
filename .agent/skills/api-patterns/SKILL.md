---
name: api-patterns
description: RESTful API design patterns and best practices
triggers: [context, api, backend, endpoint]
---

# API Patterns Skill

> **Purpose**: Apply professional RESTful API design principles

---

## Overview

This skill provides guidance for designing clean, consistent, and scalable APIs following industry best practices.

---

## Core Principles

### 1. Resource-Oriented Design

- Use **nouns** for resources: `/users`, `/orders`, `/products`
- Use HTTP verbs for actions: GET, POST, PUT, PATCH, DELETE
- Avoid verbs in URLs: ❌ `/getUsers` → ✅ `/users`

### 2. Consistent Naming

```
GET    /api/v1/users          # List users
POST   /api/v1/users          # Create user
GET    /api/v1/users/:id      # Get user
PATCH  /api/v1/users/:id      # Update user
DELETE /api/v1/users/:id      # Delete user
```

### 3. Versioning

- Use URL versioning: `/api/v1/`, `/api/v2/`
- Or header versioning: `Accept: application/vnd.api+json;version=1`

---

## Response Structure

### Success Response

```json
{
  "data": { ... },
  "meta": {
    "timestamp": "2026-02-06T00:00:00Z",
    "requestId": "uuid"
  }
}
```

### Error Response

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [{ "field": "email", "issue": "required" }]
  }
}
```

---

## Status Codes

| Code | Usage                 |
| :--- | :-------------------- |
| 200  | Success               |
| 201  | Created               |
| 204  | No Content (delete)   |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 409  | Conflict              |
| 422  | Unprocessable Entity  |
| 500  | Internal Server Error |

---

## Pagination

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

---

## Quick Reference

| Pattern | Example                      |
| :------ | :--------------------------- |
| List    | `GET /users`                 |
| Create  | `POST /users`                |
| Get     | `GET /users/123`             |
| Update  | `PATCH /users/123`           |
| Delete  | `DELETE /users/123`          |
| Nested  | `GET /users/123/orders`      |
| Filter  | `GET /users?status=active`   |
| Search  | `GET /users?q=john`          |
| Sort    | `GET /users?sort=-createdAt` |
