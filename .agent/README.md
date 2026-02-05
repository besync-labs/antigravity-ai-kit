# Antigravity AI Kit — .agent/ Directory

> **Purpose**: Core agent architecture for AI-assisted development
> **Quick Start**: Copy this folder to your project root

---

## 🚀 Session Initialization

Every new AI session, run:

```
/status
```

This loads your session context and activates the orchestrator.

---

## 📁 Directory Structure

```
.agent/
├── rules.md                # Core governance & identity
├── session-state.json      # Machine-readable state
│
├── agents/                 # 15 specialized agents
├── commands/               # 20 slash commands
├── skills/                 # 14 capability extensions
├── workflows/              # 8 slash command workflows
├── hooks/                  # Event-driven automation
├── rules/                  # Modular governance
├── contexts/               # Mode switching
├── checklists/             # Verification lists
├── templates/              # Feature templates
└── decisions/              # ADR system
```

---

## ⚡ Quick Reference

### Core Commands

| Command        | Purpose                    |
| :------------- | :------------------------- |
| `/status`      | Current session status     |
| `/plan`        | Create implementation plan |
| `/tdd`         | Test-driven development    |
| `/verify`      | Full verification loop     |
| `/code-review` | Quality review             |

### Session Files

| File                 | Purpose                    |
| :------------------- | :------------------------- |
| `rules.md`           | Core identity & governance |
| `session-state.json` | Machine-readable state     |

---

## ⚖️ Operating Constraints

| Constraint              | Meaning                          |
| :---------------------- | :------------------------------- |
| Trust > Optimization    | User trust is never sacrificed   |
| Safety > Growth         | Safety overrides business goals  |
| Completion > Suggestion | Finish work before proposing new |

---

## 🔗 Documentation

- [Full README](../README.md)
- [Commands Reference](commands/README.md)
- [Agents Reference](agents/README.md)
