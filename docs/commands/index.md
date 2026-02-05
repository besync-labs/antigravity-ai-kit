# Commands

Slash commands provide quick execution of common operations.

---

## Command Categories

### Planning & Management

| Command      | Purpose                    |
| :----------- | :------------------------- |
| `/plan`      | Create implementation plan |
| `/track`     | Start formal feature track |
| `/implement` | Execute plan with tracking |
| `/setup`     | Configure project context  |
| `/status`    | Current session status     |

### Development

| Command        | Purpose                 |
| :------------- | :---------------------- |
| `/tdd`         | Test-driven development |
| `/build-fix`   | Fix build errors        |
| `/code-review` | Quality review          |

### Quality & Security

| Command          | Purpose                |
| :--------------- | :--------------------- |
| `/verify`        | Full verification loop |
| `/security-scan` | Security audit         |

### Git & PRs

| Command      | Purpose             |
| :----------- | :------------------ |
| `/git`       | Git operations      |
| `/pr`        | Create pull request |
| `/review-pr` | Review pull request |

### Research

| Command       | Purpose          |
| :------------ | :--------------- |
| `/research`   | Research a topic |
| `/brainstorm` | Ideation session |
| `/scout`      | Explore codebase |

### Session

| Command       | Purpose              |
| :------------ | :------------------- |
| `/checkpoint` | Save session state   |
| `/compact`    | Context management   |
| `/knowledge`  | Query knowledge base |

---

## Command Format

```
/command-name [arguments]
```

**Examples:**

```bash
/plan Add user authentication
/verify
/git commit "feat: add auth"
```
