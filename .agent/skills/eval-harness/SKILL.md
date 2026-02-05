---
name: eval-harness
description: Evaluation framework for measuring agent performance
triggers: [manual]
---

# Eval Harness Skill

> **Purpose**: Measure and improve agent performance through structured evaluation

---

## Overview

This skill provides a framework for evaluating agent performance across key dimensions.

---

## Evaluation Dimensions

### 1. Accuracy

- Did the solution work correctly?
- Were there any bugs introduced?
- Was the approach optimal?

### 2. Efficiency

- How many iterations were needed?
- Was context used efficiently?
- Were there unnecessary steps?

### 3. Alignment

- Were operating constraints followed?
- Were user preferences respected?
- Was the solution appropriate?

### 4. Quality

- Does code meet standards?
- Is it well-tested?
- Is it maintainable?

---

## Evaluation Metrics

| Metric                  | Target |
| :---------------------- | :----- |
| First-time success rate | >80%   |
| Iterations to solution  | <3     |
| Test coverage           | >80%   |
| Build success           | 100%   |

---

## Report Format

```markdown
# Evaluation Report

## Session: [ID]

## Task: [Description]

### Metrics

| Dimension  | Score | Notes               |
| :--------- | :---- | :------------------ |
| Accuracy   | 9/10  | Minor fix needed    |
| Efficiency | 8/10  | 2 iterations        |
| Alignment  | 10/10 | All constraints met |
| Quality    | 9/10  | Good coverage       |

### Overall: 36/40 (90%)

### Learnings

- [What went well]
- [What could improve]
```

---

## Integration

- Run at session end for learning
- Use for continuous improvement
