---
name: debugging-strategies
description: Systematic debugging approaches for complex problems
triggers: [context, debug, error, bug, fix]
---

# Debugging Strategies Skill

> **Purpose**: Apply systematic debugging approaches

---

## Overview

This skill provides structured methodologies for identifying and resolving bugs efficiently.

---

## The 5-Step Debugging Process

### 1. Reproduce

- Create minimal reproduction case
- Document exact steps to trigger
- Note environment details (OS, versions, config)

### 2. Isolate

```typescript
// Binary search approach
// Comment out half the code, see if issue persists
// Narrow down to smallest failing unit
```

### 3. Identify

- Read error messages carefully
- Check stack traces
- Review recent changes

### 4. Fix

- Make minimal change
- One fix at a time
- Don't introduce new issues

### 5. Verify

- Confirm fix works
- Test edge cases
- Add regression test

---

## Debugging Tools

### Console Debugging

```typescript
// Basic
console.log("value:", value);

// Better - with labels
console.log("[UserService.create]", { email, userId });

// Table format
console.table(users);

// Timing
console.time("api-call");
await fetchData();
console.timeEnd("api-call");
```

### Breakpoint Debugging

```typescript
// VS Code / Chrome DevTools
debugger; // Programmatic breakpoint

// Conditional breakpoint in IDE:
// Right-click → Add Conditional Breakpoint
// user.email === 'test@example.com'
```

---

## Common Bug Patterns

### Async Issues

```typescript
// ❌ Missing await
const user = getUserById(id); // Returns Promise, not User
console.log(user.name); // undefined

// ✅ Fixed
const user = await getUserById(id);
console.log(user.name);
```

### Reference vs Value

```typescript
// ❌ Mutating original
const sorted = items.sort(); // Modifies items!

// ✅ Copy first
const sorted = [...items].sort();
```

### Closure Issues

```typescript
// ❌ Classic loop closure bug
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// ✅ Use let or closure
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}
```

---

## Error Investigation

### Read the Stack Trace

```
Error: Cannot read property 'name' of undefined
    at UserService.getUser (user.service.ts:45:23)  ← Start here
    at UserController.show (user.controller.ts:28:15)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
```

### Check Recent Changes

```bash
git log --oneline -10
git diff HEAD~5..HEAD -- src/
git blame src/services/user.service.ts
```

---

## Quick Reference

| Symptom                    | Likely Cause        |
| :------------------------- | :------------------ |
| undefined is not an object | Null reference      |
| Maximum call stack         | Infinite recursion  |
| Cannot read property       | Missing null check  |
| CORS error                 | Backend config      |
| 401 Unauthorized           | Token expired       |
| 500 Internal Error         | Unhandled exception |
