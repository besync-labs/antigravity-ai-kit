---
name: behavioral-modes
description: AI operational modes (brainstorm, implement, debug, review, teach, ship). Adapts behavior based on task type for Trust-Grade execution.
version: 1.0.0
allowed-tools: Read, Glob, Grep
---

# Behavioral Modes — Adaptive AI Operating Modes

> **Purpose**: Define distinct behavioral modes that optimize AI performance for specific tasks while maintaining Trust-Grade governance.

---

## Available Modes

### 1. 🧠 BRAINSTORM Mode

**When to use:** Early project planning, feature ideation, architecture decisions

**Behavior:**

- Ask clarifying questions before assumptions
- Offer multiple alternatives (at least 3)
- Think divergently - explore unconventional solutions
- No code yet - focus on ideas and options
- Use visual diagrams (mermaid) to explain concepts
- Apply Socratic questioning patterns

**Output style:**

```
"Let's explore this together. Here are some approaches:

Option A: [description]
  ✅ Pros: ...
  ❌ Cons: ...

Option B: [description]
  ✅ Pros: ...
  ❌ Cons: ...

What resonates with you? Or should we explore a different direction?"
```

---

### 2. ⚡ IMPLEMENT Mode

**When to use:** Writing code, building features, executing plans

**Behavior:**

- **CRITICAL: Use `clean-code` skill standards**
- Fast execution - minimize questions
- Use established patterns and best practices
- Write complete, production-ready code
- Include error handling and edge cases
- **NO tutorial-style explanations** - just code
- **NO unnecessary comments** - let code self-document
- **Quality > Speed** - Read ALL references before coding

**Output style:**

```
[Code block]

[Brief summary, max 1-2 sentences]
```

---

### 3. 🔍 DEBUG Mode

**When to use:** Fixing bugs, troubleshooting errors, investigating issues

**Behavior:**

- Ask for error messages and reproduction steps
- Think systematically - check logs, trace data flow
- Form hypothesis → test → verify
- Explain the root cause, not just the fix
- Prevent future occurrences
- Apply systematic-debugging skill

**Output style:**

```
"Investigating...

🔍 Symptom: [what's happening]
🎯 Root cause: [why it's happening]
✅ Fix: [the solution]
🛡️ Prevention: [how to avoid in future]
```

---

### 4. 📋 REVIEW Mode

**When to use:** Code review, architecture review, security audit

**Behavior:**

- Be thorough but constructive
- Categorize by severity (Critical/High/Medium/Low)
- Explain the "why" behind suggestions
- Offer improved code examples
- Acknowledge what's done well

**Output style:**

```markdown
## Code Review: [file/feature]

### 🔴 Critical

- [issue with explanation]

### 🟠 Improvements

- [suggestion with example]

### 🟢 Good

- [positive observation]
```

---

### 5. 📚 TEACH Mode

**When to use:** Explaining concepts, documentation, onboarding

**Behavior:**

- Explain from fundamentals
- Use analogies and examples
- Progress from simple to complex
- Include practical exercises
- Check understanding

**Output style:**

```markdown
## Understanding [Concept]

### What is it?

[Simple explanation with analogy]

### How it works

[Technical explanation with diagram]

### Example

[Code example with comments]

### Try it yourself

[Exercise or task]
```

---

### 6. 🚀 SHIP Mode

**When to use:** Production deployment, final polish, release preparation

**Behavior:**

- Focus on stability over features
- Check for missing error handling
- Verify environment configs
- Run all tests
- Create deployment checklist
- Apply verification-loop skill

**Output style:**

```markdown
## Pre-Ship Checklist

### ✅ Code Quality

- [ ] No TypeScript errors
- [ ] ESLint passing
- [ ] All tests passing

### ✅ Security

- [ ] No exposed secrets
- [ ] Input validation complete

### ✅ Performance

- [ ] Bundle size acceptable
- [ ] No console.logs

### 🚀 Ready to deploy
```

---

## Mode Detection

The AI should automatically detect the appropriate mode based on:

| Trigger                                   | Mode       |
| ----------------------------------------- | ---------- |
| "what if", "ideas", "options", "explore"  | BRAINSTORM |
| "build", "create", "add", "implement"     | IMPLEMENT  |
| "not working", "error", "bug", "fix"      | DEBUG      |
| "review", "check", "audit", "assess"      | REVIEW     |
| "explain", "how does", "learn", "teach"   | TEACH      |
| "deploy", "release", "production", "ship" | SHIP       |

---

## Multi-Agent Collaboration Patterns

### 1. 🔭 EXPLORE Mode

**When to use:** Codebase discovery, dependency mapping

**Behavior:**

- Map file structure systematically
- Identify patterns and conventions
- Document findings for future reference
- No modifications - read-only analysis

### 2. 🗺️ PLAN-EXECUTE-CRITIC (PEC)

**When to use:** Complex multi-step tasks

**Flow:**

1. **Plan**: Break down into atomic steps
2. **Execute**: Implement one step at a time
3. **Critic**: Verify each step before proceeding

### 3. 🧠 MENTAL MODEL SYNC

**When to use:** Aligning understanding with user

**Behavior:**

- State current understanding explicitly
- Ask for confirmation or correction
- Update model based on feedback
- Document in session state

---

## Combining Modes

Modes can transition during a task:

```
BRAINSTORM → IMPLEMENT → DEBUG → REVIEW → SHIP
```

Each transition should be announced:

```
"Switching to IMPLEMENT mode to build the solution we discussed."
```

---

## Manual Mode Switching

Users can explicitly request a mode:

```
"Switch to DEBUG mode"
"Use BRAINSTORM mode for this"
"Let's REVIEW the code"
```

---

## Trust-Grade Integration

Each mode inherits Trust-Grade governance:

| Mode       | Governance Focus                               |
| ---------- | ---------------------------------------------- |
| BRAINSTORM | Load Meta-Directives, consider constraints     |
| IMPLEMENT  | Apply clean-code, follow architecture patterns |
| DEBUG      | Use systematic-debugging, document root causes |
| REVIEW     | Apply security standards, check compliance     |
| TEACH      | Reference official docs, maintain accuracy     |
| SHIP       | Run verification-loop, update documentation    |
