---
name: performance-profiling
description: Performance profiling principles. Core Web Vitals, measurement, analysis, and optimization.
version: 1.0.0
allowed-tools: Read, Glob, Grep, Bash
---

# Performance Profiling

> Measure, analyze, optimize — in that order.

---

## 1. Core Web Vitals

### Targets

| Metric  | Good    | Poor    | Measures      |
| ------- | ------- | ------- | ------------- |
| **LCP** | < 2.5s  | > 4.0s  | Loading       |
| **INP** | < 200ms | > 500ms | Interactivity |
| **CLS** | < 0.1   | > 0.25  | Stability     |

### When to Measure

| Stage       | Tool                       |
| ----------- | -------------------------- |
| Development | Local Lighthouse           |
| CI/CD       | Lighthouse CI              |
| Production  | RUM (Real User Monitoring) |

---

## 2. Profiling Workflow

### The 4-Step Process

```
1. BASELINE → Measure current state
2. IDENTIFY → Find the bottleneck
3. FIX      → Make targeted change
4. VALIDATE → Confirm improvement
```

### Tool Selection

| Problem     | Tool                 |
| ----------- | -------------------- |
| Page load   | Lighthouse           |
| Bundle size | Bundle analyzer      |
| Runtime     | DevTools Performance |
| Memory      | DevTools Memory      |
| Network     | DevTools Network     |

---

## 3. Bundle Analysis

### What to Look For

| Issue              | Indicator          |
| ------------------ | ------------------ |
| Large dependencies | Top of bundle      |
| Duplicate code     | Multiple chunks    |
| Unused code        | Low coverage       |
| Missing splits     | Single large chunk |

### Optimization Actions

| Finding        | Action                  |
| -------------- | ----------------------- |
| Big library    | Import specific modules |
| Duplicate deps | Dedupe, update versions |
| Route in main  | Code split              |
| Unused exports | Tree shake              |

---

## 4. Runtime Profiling

### Performance Tab

| Pattern            | Meaning              |
| ------------------ | -------------------- |
| Long tasks (>50ms) | UI blocking          |
| Many small tasks   | Batching opportunity |
| Layout/paint       | Rendering bottleneck |
| Script             | JS execution         |

### Memory Tab

| Pattern        | Meaning          |
| -------------- | ---------------- |
| Growing heap   | Possible leak    |
| Large retained | Check references |
| Detached DOM   | Not cleaned up   |

---

## 5. Common Bottlenecks

| Symptom            | Likely Cause              |
| ------------------ | ------------------------- |
| Slow initial load  | Large JS, render blocking |
| Slow interactions  | Heavy event handlers      |
| Jank during scroll | Layout thrashing          |
| Growing memory     | Leaks, retained refs      |

---

## 6. Quick Win Priorities

| Priority | Action              | Impact |
| -------- | ------------------- | ------ |
| 1        | Enable compression  | High   |
| 2        | Lazy load images    | High   |
| 3        | Code split routes   | High   |
| 4        | Cache static assets | Medium |
| 5        | Optimize images     | Medium |

---

## 7. Anti-Patterns

| ❌ Don't          | ✅ Do                |
| ----------------- | -------------------- |
| Guess at problems | Profile first        |
| Micro-optimize    | Fix biggest issue    |
| Optimize early    | Optimize when needed |
| Ignore real users | Use RUM data         |

---

> **Remember:** The fastest code is code that doesn't run. Remove before optimizing.
