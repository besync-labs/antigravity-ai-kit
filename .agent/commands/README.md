# Antigravity AI Kit — Commands

> **Purpose**: Slash commands for quick access to common operations
> **Count**: 31 Commands

---

## Overview

Commands are quick invocations that trigger specific actions or workflows. Type `/command-name` in chat to use.

---

## Command Categories

### Core Workflow

| Command      | Description                |
| :----------- | :------------------------- |
| `/plan`      | Create implementation plan |
| `/implement` | Execute the approved plan  |
| `/verify`    | Run all quality gates      |
| `/status`    | Check project status       |

### Development

| Command     | Description                        |
| :---------- | :--------------------------------- |
| `/build`    | Build a new feature from scratch   |
| `/fix`      | Fix linting, type, or build errors |
| `/debug`    | Systematic debugging process       |
| `/refactor` | Improve code quality               |
| `/cook`     | Full scratch-to-done workflow      |

### Documentation & Git

| Command      | Description                         |
| :----------- | :---------------------------------- |
| `/doc`       | Generate documentation              |
| `/adr`       | Create Architecture Decision Record |
| `/changelog` | Generate changelog from commits     |
| `/git`       | Git operations with best practices  |
| `/pr`        | Create or manage pull requests      |

### Exploration & Research

| Command     | Description                        |
| :---------- | :--------------------------------- |
| `/scout`    | Explore and understand codebase    |
| `/research` | Research technologies or solutions |
| `/ask`      | Ask questions about code           |

### Quality & Security

| Command          | Description                           |
| :--------------- | :------------------------------------ |
| `/code-review`   | Run code review                       |
| `/tdd`           | Test-driven development workflow      |
| `/security-scan` | Security audit and vulnerability scan |
| `/perf`          | Performance analysis and optimization |

### Integration & Deployment

| Command      | Description                     |
| :----------- | :------------------------------ |
| `/integrate` | Third-party service integration |
| `/db`        | Database schema and migrations  |
| `/deploy`    | Deploy to target environment    |
| `/design`    | UI/UX design specifications     |

### Context Management

| Command       | Description                   |
| :------------ | :---------------------------- |
| `/learn`      | Extract patterns from session |
| `/checkpoint` | Save progress checkpoint      |
| `/compact`    | Compress context for memory   |
| `/eval`       | Evaluate metrics              |
| `/setup`      | Configure project with kit    |
| `/help`       | Show available commands       |

---

## Command Format

```markdown
---
description: What this command does
---

# /command-name Command

Brief description.

## Usage

\`\`\`
/command-name [options]
\`\`\`

## Examples

\`\`\`
/command-name example usage
\`\`\`

## Process

1. Step 1
2. Step 2
```

---

## Creating Custom Commands

1. Create `commands/my-command.md`
2. Add frontmatter with `description`
3. Define usage, examples, and process
