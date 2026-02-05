---
description: Structured brainstorming. Explore options before committing to implementation.
---

# /brainstorm - Structured Idea Exploration

$ARGUMENTS

---

## Purpose

Activates BRAINSTORM mode for exploring options before implementation. No code — ideas only.

---

## Behavior

1. **Understand the Goal**
   - What problem are we solving?
   - Who is the user?
   - What constraints exist?

2. **Generate Options**
   - Provide at least 3 approaches
   - Each with pros and cons
   - Consider unconventional solutions

3. **Compare and Recommend**
   - Summarize tradeoffs
   - Give recommendation with reasoning

---

## Output Format

```markdown
## 🧠 Brainstorm: [Topic]

### Context

[Brief problem statement]

---

### Option A: [Name]

[Description]

✅ **Pros:**

- [benefit 1]
- [benefit 2]

❌ **Cons:**

- [drawback 1]

📊 **Effort:** Low | Medium | High

---

### Option B: [Name]

[Similar format]

---

### Option C: [Name]

[Similar format]

---

## 💡 Recommendation

**Option [X]** because [reasoning].

What direction would you like to explore?
```

---

## Examples

```
/brainstorm authentication system
/brainstorm state management for complex form
/brainstorm database schema for social app
/brainstorm caching strategy
```

---

## Key Principles

- **No code** — ideas only
- **Visual when helpful** — use diagrams for architecture
- **Honest tradeoffs** — don't hide complexity
- **Defer to user** — present options, let them decide
