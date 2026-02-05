# Antigravity AI Kit

> **A Trust-Grade AI Development Framework for Antigravity IDE**

Transform your development workflow with a structured, governance-first approach to AI-assisted coding. Antigravity AI Kit provides a complete ecosystem of agents, commands, and skills designed for professional software engineering teams.

---

## ⚡ Quick Start (2 Minutes)

```bash
# 1. Clone the repository
git clone https://github.com/besync-labs/antigravity-ai-kit.git

# 2. Copy .agent/ to your project
cp -r antigravity-ai-kit/.agent/ your-project/.agent/

# 3. Start your session
# In Antigravity IDE, run:
/status
```

That's it. The kit is now active and ready to accelerate your development.

---

## 🎯 What Makes This Different

| Traditional AI Coding | Antigravity AI Kit         |
| :-------------------- | :------------------------- |
| Chat-based, ephemeral | Context-driven, persistent |
| No governance         | Trust-Grade constraints    |
| Generic prompts       | Specialized agents         |
| Ad-hoc commands       | Structured workflows       |
| Session amnesia       | Continuous learning        |

### Core Philosophy

> **"Trust > Optimization. Safety > Growth. Explainability > Performance."**

This isn't just a collection of prompts. It's an **engineered framework** that enforces professional standards through immutable operating constraints.

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    ANTIGRAVITY AI KIT                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │   AGENTS    │  │  COMMANDS   │  │   SKILLS    │          │
│  │  (10 core)  │  │  (20 core)  │  │  (4 core)   │          │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘          │
│         │                │                │                  │
│         └────────────────┼────────────────┘                  │
│                          │                                   │
│                   ┌──────▼──────┐                            │
│                   │   RULES     │                            │
│                   │ (Governance)│                            │
│                   └──────┬──────┘                            │
│                          │                                   │
│  ┌─────────────┐  ┌──────▼──────┐  ┌─────────────┐          │
│  │   HOOKS     │  │  CONTEXTS   │  │  WORKFLOWS  │          │
│  │  (Events)   │  │   (Modes)   │  │  (Process)  │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Component Summary

| Component     | Count | Purpose                                   |
| :------------ | :---- | :---------------------------------------- |
| **Agents**    | 10    | Specialized sub-agents for delegation     |
| **Commands**  | 20    | Slash commands for quick execution        |
| **Skills**    | 4     | Workflow definitions and domain knowledge |
| **Rules**     | 5     | Always-follow governance guidelines       |
| **Contexts**  | 3     | Dynamic mode switching                    |
| **Workflows** | 1     | Development process templates             |

---

## 📁 Folder Structure

```
antigravity-ai-kit/
├── README.md                    # You are here
├── LICENSE                      # MIT License
├── CONTRIBUTING.md              # How to contribute
│
├── .agent/                      # Core agent architecture
│   ├── README.md               # Quick reference
│   ├── rules.md                # Governance & identity
│   ├── session-state.json      # State template
│   │
│   ├── agents/                 # 10 specialized agents
│   ├── commands/               # 20 slash commands
│   ├── skills/                 # 4 capability extensions
│   ├── hooks/                  # Event-driven automation
│   ├── rules/                  # Modular governance
│   ├── contexts/               # Mode switching
│   ├── workflows/              # Process templates
│   ├── checklists/             # Verification lists
│   ├── templates/              # Feature templates
│   └── decisions/              # ADR system
│
├── docs/                       # Extended documentation
├── examples/                   # Configuration examples
└── scripts/                    # Utility scripts
```

---

## 🤖 Agents (10 Core)

Agents are specialized sub-agents that handle delegated tasks with focused expertise.

| Agent                       | Purpose                         | When to Use                  |
| :-------------------------- | :------------------------------ | :--------------------------- |
| 📋 **Planner**              | Feature implementation planning | Before starting new features |
| 🏛️ **Architect**            | System design decisions         | For architectural changes    |
| 🔍 **Code Reviewer**        | Quality & security review       | Before merging code          |
| 🧪 **TDD Guide**            | Test-driven development         | When writing tests           |
| 🔐 **Security Reviewer**    | Vulnerability analysis          | For security-sensitive code  |
| 🔧 **Build Error Resolver** | Rapid build fixes               | When builds fail             |
| 🎭 **E2E Runner**           | End-to-end testing              | For integration tests        |
| 🧹 **Refactor Cleaner**     | Dead code cleanup               | During refactoring           |
| 📚 **Doc Updater**          | Documentation sync              | After code changes           |
| 🧠 **Knowledge Agent**      | RAG retrieval                   | For context queries          |

---

## ⌨️ Commands (20 Core)

Slash commands provide quick execution of common operations.

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

## 🛠️ Skills (4 Core)

Skills are workflow definitions that extend capabilities.

| Skill                   | Purpose                                       |
| :---------------------- | :-------------------------------------------- |
| **verification-loop**   | Continuous quality gates (build, lint, test)  |
| **continuous-learning** | Pattern extraction from sessions (PAAL cycle) |
| **strategic-compact**   | Context window management                     |
| **eval-harness**        | Performance evaluation metrics                |

---

## ⚖️ Operating Constraints (IMMUTABLE)

These constraints are **inviolable** and cannot be overridden:

| Priority     | Constraint                   | Meaning                                     |
| :----------- | :--------------------------- | :------------------------------------------ |
| **Absolute** | Trust > Optimization         | User trust is never sacrificed for metrics  |
| **Absolute** | Safety > Growth              | User safety overrides all business goals    |
| **Absolute** | Explainability > Performance | Understandable AI beats faster AI           |
| **Absolute** | Completion > Suggestion      | Finish current work before proposing new    |
| **Absolute** | Consistency > Speed          | All affected files updated, not just target |

---

## 🎓 The 3-Role Architecture

The kit embodies three distinct expert personas in every interaction:

1. **🏛️ The Architect**
   - Focus: Scalability, Security, Structure
   - Motto: _"If it doesn't scale, it doesn't exist."_

2. **🔮 The Visionary**
   - Focus: User Experience, Design, Innovation
   - Motto: _"Design for humans, not metrics."_

3. **🛡️ The QA Engineer**
   - Focus: Type Safety, Edge Cases, Test Coverage
   - Motto: _"Trust but verify."_

---

## 🔧 How to Extend

### Adding a Custom Agent

Create a new file in `.agent/agents/`:

```markdown
# My Custom Agent

> **Platform**: Antigravity AI Kit
> **Purpose**: [Agent purpose]

---

## Identity

You are a specialized agent for [domain].

## Capabilities

- [Capability 1]
- [Capability 2]

## Constraints

- [Constraint 1]
```

### Adding a Custom Command

Create a new file in `.agent/commands/`:

```markdown
# /my-command

> **Purpose**: [Command purpose]

---

## Usage
```

/my-command [args]

```

## Behavior

1. [Step 1]
2. [Step 2]
```

---

## 📊 Example Workflows

### Feature Development

```
1. /plan Add user authentication
2. Review and approve the plan
3. /implement
4. /verify
5. /git commit "feat: add user auth"
```

### Code Review

```
1. /code-review src/auth/
2. Review findings
3. /security-scan
4. /pr Create PR for auth feature
```

### Research & Exploration

```
1. /research Compare React vs Vue for frontend
2. /brainstorm Authentication approaches
3. /scout src/services/ # Explore existing code
```

---

## 🏆 Design Philosophy

> **"This framework is powered by Trust-Grade engineering — combining the precision of a PhD Engineer, the insight of a Digital Anthropologist, and the discipline of a Senior Staff Engineer."**

### Principles

1. **Governance First**: Rules are not suggestions, they are constraints
2. **Context as Artifact**: Persist important context, don't rely on memory
3. **Progressive Disclosure**: Simple start, deep capabilities
4. **Professional Standards**: Every interaction reflects engineering excellence

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Ideas for Contributions

- Additional agents for specific domains
- New slash commands
- Extended documentation
- Example configurations
- Translations

---

## 📄 License

MIT License — See [LICENSE](LICENSE) for details.

---

## 👤 Author

**Emre Dursun** — Full-Stack Automation Engineer | AI Development Specialist

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emre-dursun-nl/)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://emredursun.nl/)

> _Creator of BeSync and the Trust-Grade AI Governance framework_

---

## 🔗 Links

- **Repository**: [github.com/besync-labs/antigravity-ai-kit](https://github.com/besync-labs/antigravity-ai-kit)
- **Origin**: Derived from BeSync Trust-Grade AI Governance

---
