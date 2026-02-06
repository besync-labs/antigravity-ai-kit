---
name: architecture
description: System design patterns and architectural principles
triggers: [context, architecture, design, system]
---

# Architecture Skill

> **Purpose**: Apply proven architectural patterns for scalable systems

---

## Overview

This skill provides guidance for designing maintainable, scalable software architectures using industry-standard patterns.

---

## Architectural Patterns

### 1. Layered Architecture

```
┌─────────────────────────┐
│    Presentation Layer   │  ← Controllers, Views
├─────────────────────────┤
│    Application Layer    │  ← Use Cases, Services
├─────────────────────────┤
│      Domain Layer       │  ← Entities, Business Logic
├─────────────────────────┤
│   Infrastructure Layer  │  ← Database, External APIs
└─────────────────────────┘
```

### 2. Clean Architecture

- **Entities**: Core business objects
- **Use Cases**: Application-specific business rules
- **Interface Adapters**: Controllers, Presenters, Gateways
- **Frameworks**: External concerns (DB, Web, Devices)

### 3. Hexagonal Architecture (Ports & Adapters)

```
         ┌─────────────────┐
   ──────│     Ports       │──────
         │   (Interfaces)  │
         │                 │
         │  Domain Core    │
         │                 │
   ──────│    Adapters     │──────
         └─────────────────┘
```

---

## Design Principles

### SOLID

| Principle                 | Description                                 |
| :------------------------ | :------------------------------------------ |
| **S**ingle Responsibility | One reason to change                        |
| **O**pen/Closed           | Open for extension, closed for modification |
| **L**iskov Substitution   | Subtypes must be substitutable              |
| **I**nterface Segregation | Many specific interfaces                    |
| **D**ependency Inversion  | Depend on abstractions                      |

### DRY, KISS, YAGNI

- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple, Stupid
- **YAGNI**: You Aren't Gonna Need It

---

## Module Structure

```
src/
├── domain/               # Core business logic
│   ├── entities/
│   ├── value-objects/
│   └── services/
├── application/          # Use cases
│   ├── commands/
│   ├── queries/
│   └── handlers/
├── infrastructure/       # External concerns
│   ├── database/
│   ├── messaging/
│   └── external-apis/
└── interfaces/           # Entry points
    ├── http/
    ├── graphql/
    └── cli/
```

---

## Quick Reference

| Pattern       | When to Use                      |
| :------------ | :------------------------------- |
| Monolith      | MVP, small team                  |
| Microservices | Scale, team autonomy             |
| Event-Driven  | Async, decoupling                |
| CQRS          | Read/write separation            |
| Serverless    | Variable load, cost optimization |
