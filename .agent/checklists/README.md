# Antigravity AI Kit — Checklists

> **Purpose**: Quality gates and structured workflows  
> **Count**: 3 Core Checklists

---

## Overview

Checklists ensure consistent quality and context preservation across sessions. They are the **operational backbone** of Trust-Grade AI governance.

---

## Available Checklists

| Checklist                            | When to Use          | Purpose                          |
| :----------------------------------- | :------------------- | :------------------------------- |
| [session-start.md](session-start.md) | Beginning of session | Load context, verify environment |
| [session-end.md](session-end.md)     | End of session       | Save state, document progress    |
| [pre-commit.md](pre-commit.md)       | Before git commits   | Quality verification             |

---

## Why Checklists Matter

### 1. Context Continuity

Sessions don't exist in isolation. Checklists ensure:

- Previous work is understood
- Current state is documented
- Future sessions can resume seamlessly

### 2. Quality Gates

Prevent issues before they happen:

- Tests pass before commits
- No secrets in code
- Documentation updated

### 3. Trust-Grade Governance

Explicit verification over implicit assumption:

- Every session starts with full context
- Every session ends with preserved state
- Every commit meets quality standards

---

## Usage

### Automatic (Recommended)

AI agents automatically follow checklists when:

- Session begins → `session-start.md`
- Commit requested → `pre-commit.md`
- Session ends → `session-end.md`

### Manual

Explicitly invoke with:

```
Follow the session-start checklist
Run the pre-commit checklist
Complete the session-end checklist
```

---

## Customization

Add project-specific checklists:

```markdown
<!-- .agent/checklists/my-checklist.md -->

# My Custom Checklist

> **Purpose**: [What this checklist ensures]

---

## Section 1

- [ ] Task 1
- [ ] Task 2

## Section 2

- [ ] Task 3
```

Checklists should be:

- **Actionable**: Each item is a concrete step
- **Verifiable**: Each item can be checked as done
- **Concise**: Focus on essential items only
