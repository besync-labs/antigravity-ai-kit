# Extending the Kit

Antigravity AI Kit is designed to be extensible. Add custom agents, skills, and commands to match your workflow.

---

## Adding Custom Agents

Create a new file in `.agent/agents/`:

```markdown
## <!-- .agent/agents/my-agent.md -->

name: my-agent
description: Custom agent description
triggers: [keyword1, keyword2]

---

# My Agent

## Purpose

What this agent specializes in.

## Capabilities

- Capability 1
- Capability 2

## Workflow

1. Step 1
2. Step 2
3. Step 3
```

---

## Adding Custom Skills

Create a new folder in `.agent/skills/`:

```markdown
## <!-- .agent/skills/my-skill/SKILL.md -->

name: my-skill
description: What this skill does
triggers: [context, keywords]

---

# My Skill

## Overview

What this skill provides.

## Patterns

### Pattern 1

Description and usage.

### Pattern 2

Description and usage.
```

---

## Adding Custom Commands

Create a new file in `.agent/commands/`:

```markdown
## <!-- .agent/commands/my-command.md -->

## description: What this command does

# /my-command

## Usage
```

/my-command [arguments]

```

## Examples

```

/my-command feature-name

```

## Workflow

1. Step 1
2. Step 2
```

---

## Adding Custom Workflows

Create a new file in `.agent/workflows/`:

```markdown
## <!-- .agent/workflows/my-workflow.md -->

## description: Multi-step workflow description

# My Workflow

## Overview

What this workflow accomplishes.

## Steps

1. **Phase 1**: Description
2. **Phase 2**: Description
3. **Phase 3**: Description

## Verification

How to verify the workflow completed successfully.
```

---

## Best Practices

1. **Use descriptive names** — Clear, action-oriented naming
2. **Define triggers** — Keywords that activate the agent/skill
3. **Include examples** — Show real usage patterns
4. **Document workflows** — Step-by-step instructions
5. **Test locally** — Verify before committing
