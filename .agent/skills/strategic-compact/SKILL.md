---
name: strategic-compact
description: Context window management with strategic compaction
triggers: [context-warning, manual]
---

# Strategic Compact Skill

> **Purpose**: Manage context window efficiently while preserving important information

---

## Overview

As conversations grow, context window limits require strategic compaction. This skill ensures important context is preserved while freeing space for new work.

---

## Workflow

### 1. Assess Context

Evaluate current context usage:

- How much context is used?
- What is the oldest content?
- What is most important?

### 2. Prioritize

Rank content by importance:

| Priority | Content Type               |
| :------- | :------------------------- |
| CRITICAL | Active code being modified |
| HIGH     | Current task context       |
| MEDIUM   | Related code for reference |
| LOW      | Completed discussions      |

### 3. Compact

Summarize or remove low-priority content:

- Summarize completed tasks
- Remove verbose output
- Keep code snippets, remove explanations

### 4. Persist

Save important context externally:

- Update `session-state.json`
- Document decisions in `decisions/`
- Create checkpoints

---

## Integration

- Triggered at context warning threshold
- Can be invoked with `/compact`
- Preserves session continuity
