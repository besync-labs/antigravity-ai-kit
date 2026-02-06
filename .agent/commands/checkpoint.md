---
description: Save a checkpoint for later recovery
---

# /checkpoint Command

Create a save point for your work.

## Usage

```
/checkpoint <name>     # Create named checkpoint
/checkpoint restore    # List and restore checkpoints
```

## Examples

```
/checkpoint before-refactor
/checkpoint auth-complete
/checkpoint restore
```

## Purpose

- Save progress before risky changes
- Enable easy rollback
- Track work milestones
