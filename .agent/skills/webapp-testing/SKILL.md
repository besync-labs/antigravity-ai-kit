---
name: webapp-testing
description: Web application testing principles. E2E, Playwright, component testing, and deep audit strategies.
version: 1.0.0
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

# Web App Testing

> Discover and test everything. Leave no route untested.

---

## 1. Deep Audit Approach

### Discovery First

| Target        | How to Find                     |
| ------------- | ------------------------------- |
| Routes        | Scan app/, pages/, router files |
| API endpoints | Grep for HTTP methods           |
| Components    | Find component directories      |
| Features      | Read documentation              |

### Systematic Testing

1. **Map** - List all routes/APIs
2. **Scan** - Verify they respond
3. **Test** - Cover critical paths

---

## 2. Testing Pyramid

```
        /\          E2E (Few)
       /  \         Critical user flows
      /----\
     /      \       Integration (Some)
    /--------\      API, data flow
   /          \
  /------------\    Unit/Component (Many)
                    Individual pieces
```

---

## 3. E2E Test Principles

### What to Test

| Priority | Tests                     |
| -------- | ------------------------- |
| 1        | Happy path user flows     |
| 2        | Authentication flows      |
| 3        | Critical business actions |
| 4        | Error handling            |

### Best Practices

| Practice           | Why                |
| ------------------ | ------------------ |
| Use data-testid    | Stable selectors   |
| Wait for elements  | Avoid flaky tests  |
| Clean state        | Independent tests  |
| Avoid impl details | Test user behavior |

---

## 4. Playwright Configuration

### Recommended Settings

| Setting     | Recommendation    |
| ----------- | ----------------- |
| Retries     | 2 on CI           |
| Trace       | on-first-retry    |
| Screenshots | on-failure        |
| Video       | retain-on-failure |

### Core Concepts

| Concept           | Use                    |
| ----------------- | ---------------------- |
| Page Object Model | Encapsulate page logic |
| Fixtures          | Reusable test setup    |
| Assertions        | Built-in auto-wait     |
| Trace Viewer      | Debug failures         |

---

## 5. Test Organization

### File Structure

```
tests/
├── e2e/           # Full user flows
├── integration/   # API, data
├── component/     # UI units
└── fixtures/      # Shared data
```

### Naming Convention

| Pattern       | Example                     |
| ------------- | --------------------------- |
| Feature-based | `login.spec.ts`             |
| Descriptive   | `user-can-checkout.spec.ts` |

---

## 6. API Testing

### Coverage Areas

| Area           | Tests                       |
| -------------- | --------------------------- |
| Status codes   | 200, 400, 404, 500          |
| Response shape | Matches schema              |
| Error messages | User-friendly               |
| Edge cases     | Empty, large, special chars |

---

## 7. CI Integration

### Pipeline Steps

1. Install dependencies
2. Install browsers (`npx playwright install`)
3. Run tests
4. Upload artifacts (traces, screenshots)

### Parallelization

| Strategy | Use                |
| -------- | ------------------ |
| Per file | Playwright default |
| Sharding | Large suites       |
| Workers  | Multiple browsers  |

---

## 8. Anti-Patterns

| ❌ Don't            | ✅ Do          |
| ------------------- | -------------- |
| Test implementation | Test behavior  |
| Hardcode waits      | Use auto-wait  |
| Skip cleanup        | Isolate tests  |
| Ignore flaky tests  | Fix root cause |

---

## 9. BeSync Testing Standards

### Required Coverage

| Vertical      | Minimum Coverage |
| ------------- | ---------------- |
| Auth          | 90%+             |
| Payment       | 95%+             |
| Core Features | 80%+             |

### Test Types Required

- [ ] Unit tests (Jest/Vitest)
- [ ] Integration tests (Supertest)
- [ ] E2E tests (Playwright)
- [ ] Visual regression (optional)

---

> **Remember:** E2E tests are expensive. Use them for critical paths only.
