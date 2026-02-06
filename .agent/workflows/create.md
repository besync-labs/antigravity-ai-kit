---
description: Create new features, components, or modules from scratch
---

# /create Workflow

> **Purpose**: Scaffold new features, components, or modules with best practices

---

## Workflow Steps

### 1. Clarify Requirements

- What type of component/feature?
- What framework/technology?
- Any specific patterns to follow?

### 2. Check Existing Patterns

- Look for similar components in codebase
- Identify established conventions
- Reuse existing utilities and helpers

### 3. Scaffold Structure

```
feature/
├── components/       # UI components
├── hooks/           # Custom hooks
├── utils/           # Utility functions
├── types/           # TypeScript types
├── api/             # API calls
├── __tests__/       # Tests
└── index.ts         # Public exports
```

### 4. Implement Core Logic

- Follow existing code patterns
- Apply SOLID principles
- Write self-documenting code

### 5. Add Tests

- Unit tests for utilities
- Integration tests for components
- E2E tests for critical flows

### 6. Document

- Add JSDoc comments
- Update README if needed
- Create usage examples

---

## Checklist

- [ ] Requirements clarified
- [ ] Existing patterns reviewed
- [ ] Structure scaffolded
- [ ] Core logic implemented
- [ ] Tests written
- [ ] Documentation added

---

## Examples

```
/create React component for user profile card
/create NestJS module for authentication
/create API endpoint for order processing
```
