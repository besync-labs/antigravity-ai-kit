---
name: continuous-learning
description: Extract reusable patterns from sessions and save them as knowledge
triggers: [session-end, manual]
---

# Continuous Learning Skill

> **Purpose**: Learn from development sessions to improve future assistance

---

## Overview

This skill implements the PAAL (Perceive-Analyze-Adapt-Learn) cycle to extract reusable patterns from development sessions.

---

## PAAL Cycle

### 1. Perceive

Monitor session for significant events:

- User corrections
- Repeated patterns
- Error resolutions
- Decision rationale

### 2. Analyze

Identify learning opportunities:

- What went wrong?
- What went right?
- What patterns emerged?
- What knowledge was missing?

### 3. Adapt

Apply learnings immediately:

- Update mental models
- Adjust approach
- Incorporate feedback

### 4. Learn

Persist knowledge for future:

- Document patterns in `decisions/`
- Update knowledge base
- Create reusable templates

---

## Pattern Extraction Format

```markdown
# Pattern: [Name]

## Context

When: [Situation]
Problem: [What problem this solves]

## Solution

[How to apply the pattern]

## Example

[Concrete example]

## Anti-patterns

[What NOT to do]
```

---

## Integration

- Runs at session end
- Can be triggered manually with `/learn`
- Outputs to `decisions/` directory
