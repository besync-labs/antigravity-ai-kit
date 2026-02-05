# Antigravity AI Kit — Commands

> **Purpose**: Slash commands for quick execution of common operations
> **Count**: 20 Core Commands

---

## Overview

Commands provide quick, consistent execution of development operations. Type `/command` to invoke.

---

## Command Categories

### 📋 Planning & Management

| Command      | Purpose                    | Usage                           |
| :----------- | :------------------------- | :------------------------------ |
| `/plan`      | Create implementation plan | `/plan Add user authentication` |
| `/track`     | Start formal feature track | `/track AUTH-001`               |
| `/implement` | Execute plan with tracking | `/implement`                    |
| `/setup`     | Configure project context  | `/setup`                        |
| `/status`    | Current session status     | `/status`                       |

### 💻 Development

| Command        | Purpose                 | Usage               |
| :------------- | :---------------------- | :------------------ |
| `/tdd`         | Test-driven development | `/tdd UserService`  |
| `/build-fix`   | Fix build errors        | `/build-fix`        |
| `/code-review` | Quality review          | `/code-review src/` |

### ✅ Quality & Security

| Command          | Purpose                | Usage            |
| :--------------- | :--------------------- | :--------------- |
| `/verify`        | Full verification loop | `/verify`        |
| `/security-scan` | Security audit         | `/security-scan` |

### 🔀 Git & PRs

| Command      | Purpose             | Usage                          |
| :----------- | :------------------ | :----------------------------- |
| `/git`       | Git operations      | `/git commit "feat: add auth"` |
| `/pr`        | Create pull request | `/pr`                          |
| `/review-pr` | Review pull request | `/review-pr 123`               |

### 🔍 Research

| Command       | Purpose          | Usage                         |
| :------------ | :--------------- | :---------------------------- |
| `/research`   | Research a topic | `/research React vs Vue`      |
| `/brainstorm` | Ideation session | `/brainstorm Auth approaches` |
| `/scout`      | Explore codebase | `/scout src/services/`        |

### 📊 Session

| Command       | Purpose              | Usage                      |
| :------------ | :------------------- | :------------------------- |
| `/checkpoint` | Save session state   | `/checkpoint`              |
| `/compact`    | Context management   | `/compact`                 |
| `/knowledge`  | Query knowledge base | `/knowledge auth patterns` |
| `/index`      | Index documentation  | `/index docs/`             |

---

## Command File Format

Each command file follows this structure:

```markdown
---
name: command-name
description: Brief description
invokes: [agent-name] # Optional
---

# /command-name

> **Purpose**: What this command does

---

## Usage
```

/command-name [args]

```

## Behavior

1. [Step 1]
2. [Step 2]

## Examples

```

/command-name arg1 arg2

```

```

---

## Creating Custom Commands

1. Create a new `.md` file in this directory
2. Follow the format above
3. Reference agents if needed

Commands inherit Operating Constraints from `rules.md`.
