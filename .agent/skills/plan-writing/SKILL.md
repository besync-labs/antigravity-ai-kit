---
name: plan-writing
description: Structured task planning with clear breakdowns, dependencies, and verification criteria.
version: 1.0.0
allowed-tools: Read, Glob, Grep
---

# Plan Writing

> Small tasks, clear outcomes, verifiable results.

---

## Overview

Framework for breaking down work into clear, actionable tasks with verification criteria.

---

## Task Breakdown Principles

### 1. Small, Focused Tasks

- Each task: 2-5 minutes
- One clear outcome per task
- Independently verifiable

### 2. Clear Verification

- How do you know it's done?
- What can you check/test?
- What's the expected output?

### 3. Logical Ordering

- Dependencies identified
- Parallel work where possible
- Critical path highlighted
- **Verification is always LAST**

---

## Planning Principles

> 🔴 **NO fixed templates. Each plan is UNIQUE to the task.**

### Principle 1: Keep It SHORT

| ❌ Wrong                    | ✅ Right              |
| --------------------------- | --------------------- |
| 50 tasks with sub-sub-tasks | 5-10 clear tasks max  |
| Every micro-step listed     | Only actionable items |
| Verbose descriptions        | One-line per task     |

> **Rule:** If plan is longer than 1 page, it's too long. Simplify.

---

### Principle 2: Be SPECIFIC, Not Generic

| ❌ Wrong             | ✅ Right                                                 |
| -------------------- | -------------------------------------------------------- |
| "Set up project"     | "Run `npx create-next-app`"                              |
| "Add authentication" | "Install next-auth, create `/api/auth/[...nextauth].ts`" |
| "Style the UI"       | "Add Tailwind classes to `Header.tsx`"                   |

---

### Principle 3: Dynamic Content Based on Context

**For NEW PROJECT:**

- What tech stack?
- What's the MVP?
- What's the file structure?

**For FEATURE ADDITION:**

- Which files are affected?
- What dependencies needed?
- How to verify it works?

**For BUG FIX:**

- What's the root cause?
- What file/line to change?
- How to test the fix?

---

### Principle 4: Verification is Simple

| ❌ Wrong                     | ✅ Right                                     |
| ---------------------------- | -------------------------------------------- |
| "Verify the component works" | "Run `npm run dev`, click button, see toast" |
| "Test the API"               | "curl localhost:3000/api/users returns 200"  |
| "Check styles"               | "Open browser, verify dark mode works"       |

---

## Plan Structure (Minimal)

```markdown
# [Task Name]

## Goal

One sentence: What are we building/fixing?

## Tasks

- [ ] Task 1: [Action] → Verify: [Check]
- [ ] Task 2: [Action] → Verify: [Check]
- [ ] Task 3: [Action] → Verify: [Check]

## Done When

- [ ] [Main success criteria]

## Notes

[Any important considerations]
```

> **That's it.** No phases, no sub-sections unless truly needed.

---

## Best Practices

1. **Start with goal** — What are we building/fixing?
2. **Max 10 tasks** — If more, break into multiple plans
3. **Each task verifiable** — Clear "done" criteria
4. **Project-specific** — No copy-paste templates
5. **Update as you go** — Mark `[x]` when complete

---

## When to Use

- New project from scratch
- Adding a feature
- Fixing a bug (if complex)
- Refactoring multiple files
