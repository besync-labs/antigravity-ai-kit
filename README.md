# 🚀 Antigravity AI Kit

![version](https://img.shields.io/badge/version-2.1.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![AI Agents](https://img.shields.io/badge/AI%20Agents-19-purple)
![Skills](https://img.shields.io/badge/Skills-27-orange)
![Commands](https://img.shields.io/badge/Commands-31-red)
![Workflows](https://img.shields.io/badge/Workflows-11-teal)
![Checklists](https://img.shields.io/badge/Checklists-3-yellow)

<p align="center">
  <b>🎯 Transform Your IDE into an AI Engineering Team</b>
</p>

<p align="center">
  Antigravity AI Kit is a <b>Trust-Grade AI development framework</b> that brings <b>19 specialized agents</b>, <b>31 commands</b>, <b>27 skills</b>, and <b>11 workflows</b> to help you code 10x faster with governance-first principles.
</p>

<p align="center">
  🚀 <a href="#-quick-start">Quick Start</a> •
  🤖 <a href="#-agents-17">Agents</a> •
  🛠️ <a href="#%EF%B8%8F-skills-26">Skills</a> •
  ⌨️ <a href="#%EF%B8%8F-commands-31">Commands</a> •
  🔄 <a href="#-session-management">Sessions</a> •
  ⚖️ <a href="#%EF%B8%8F-operating-constraints">Governance</a>
</p>

---

## 📚 Table of Contents

- [What is Antigravity AI Kit?](#-what-is-antigravity-ai-kit)
- [Key Features](#-key-features)
- [Quick Start](#-quick-start)
- [Architecture](#%EF%B8%8F-architecture-overview)
- [Agents](#-agents-17)
- [Commands](#%EF%B8%8F-commands-31)
- [Skills](#%EF%B8%8F-skills-26)
- [Workflows](#-workflows-11)
- [Operating Constraints](#%EF%B8%8F-operating-constraints)
- [Session Management](#-session-management)
- [How to Extend](#-how-to-extend)
- [Contributing](#-contributing)

---

## 🤔 What is Antigravity AI Kit?

**Antigravity AI Kit** transforms your IDE into a **virtual engineering team** with:

| Feature           | Count | Description                                                            |
| :---------------- | :---- | :--------------------------------------------------------------------- |
| 🤖 **AI Agents**  | 19    | Specialized roles (Mobile, DevOps, Database, Security, Performance...) |
| 🛠️ **Skills**     | 27    | Domain knowledge modules (API, Testing, Architecture, Docker...)       |
| ⌨️ **Commands**   | 31    | Slash commands for every development workflow                          |
| 🔄 **Workflows**  | 11    | Process templates (/create, /debug, /deploy, /test...)                 |
| ✅ **Checklists** | 3     | Quality gates (session-start, session-end, pre-commit)                 |
| ⚖️ **Rules**      | 5     | Immutable governance constraints                                       |
| 🔗 **Hooks**      | 4     | Event-driven automation                                                |

---

## ✨ Key Features

- **🔒 Trust-Grade Governance**: `/explore → /plan → /work → /review` — Each iteration builds context
- **🤖 Multi-Agent System**: 17 specialized agents that collaborate (Mobile Developer, DevOps, Database Architect...)
- **📦 Context as Artifact**: Persistent markdown files for plans, specs, and decisions
- **🔄 Continuous Learning**: PAAL cycle extracts patterns from every session
- **🛡️ Security First**: Built-in secret detection, vulnerability scanning, and compliance checks

### Core Philosophy

> **"Trust > Optimization. Safety > Growth. Explainability > Performance."**

---

## ⚡ Quick Start

### Option 1: NPX (Recommended)

```bash
npx antigravity-ai-kit init
```

This automatically copies the `.agent/` folder to your project.

### Option 2: Manual Installation

```bash
# 1. Clone the repository
git clone https://github.com/besync-labs/antigravity-ai-kit.git

# 2. Copy .agent/ to your project
cp -r antigravity-ai-kit/.agent/ your-project/.agent/

# 3. Start your session
/status
```

### Option 3: Direct Download

1. Download the `.agent/` folder from this repository
2. Place it in your project root
3. Run `/status` in your AI-powered IDE

That's it! The kit is now active and ready to accelerate your development.

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                      ANTIGRAVITY AI KIT v2.0.0                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐      │
│  │   17 AGENTS     │  │   31 COMMANDS   │  │   26 SKILLS     │      │
│  │                 │  │                 │  │                 │      │
│  │ • Architect     │  │ • /plan         │  │ • api-patterns  │      │
│  │ • Mobile Dev    │  │ • /implement    │  │ • architecture  │      │
│  │ • DevOps        │  │ • /verify       │  │ • clean-code    │      │
│  │ • DB Architect  │  │ • /deploy       │  │ • testing       │      │
│  │ • Security      │  │ • /debug        │  │ • docker        │      │
│  │ • + 12 more     │  │ • + 26 more     │  │ • + 21 more     │      │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘      │
│                              │                                       │
│           ┌──────────────────┴──────────────────┐                   │
│           ▼                                      ▼                   │
│  ┌─────────────────────────────────────────────────────────┐        │
│  │                    11 WORKFLOWS                          │        │
│  │  /brainstorm • /create • /debug • /deploy • /enhance    │        │
│  │  /orchestrate • /plan • /preview • /test • /status      │        │
│  │  /ui-ux-pro-max                                          │        │
│  └─────────────────────────────────────────────────────────┘        │
│                              │                                       │
│           ┌──────────────────┴──────────────────┐                   │
│           ▼                                      ▼                   │
│  ┌─────────────────┐                   ┌─────────────────┐          │
│  │     RULES       │                   │     HOOKS       │          │
│  │  (Governance)   │                   │  (Automation)   │          │
│  └─────────────────┘                   └─────────────────┘          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🤖 Agents (17)

### Core Development

| Agent              | Role                    | Triggers                          |
| :----------------- | :---------------------- | :-------------------------------- |
| **Architect**      | System design, patterns | architecture, design, scalability |
| **Code Reviewer**  | Quality assurance       | review, quality, best practices   |
| **TDD Specialist** | Test-driven development | test, tdd, coverage               |

### Domain Specialists

| Agent                    | Role                          | Triggers                     |
| :----------------------- | :---------------------------- | :--------------------------- |
| **Mobile Developer**     | iOS/Android patterns          | mobile, react-native, expo   |
| **Frontend Specialist**  | React, Vue, UI/UX             | frontend, component, styling |
| **Backend Specialist**   | Node.js, NestJS, APIs         | backend, api, server         |
| **Database Architect**   | Schema, queries, optimization | database, prisma, sql        |
| **DevOps Engineer**      | CI/CD, Docker, deployment     | devops, docker, deploy       |
| **Security Auditor**     | Vulnerabilities, compliance   | security, auth, audit        |
| **Performance Engineer** | Optimization, profiling       | performance, speed, metrics  |

### Support

| Agent                    | Role                       | Triggers              |
| :----------------------- | :------------------------- | :-------------------- |
| **Documentation Writer** | Docs, READMEs, guides      | documentation, readme |
| **Debugger**             | Systematic debugging       | debug, error, fix     |
| **Refactorer**           | Code cleanup, optimization | refactor, cleanup     |
| **Frontend Specialist**  | React, Next.js, UI architecture | frontend, component, CSS |
| **Backend Specialist**   | Node.js, NestJS, API design | backend, API, server  |
| **Sprint Orchestrator**  | Sprint planning, velocity tracking | sprint, roadmap, velocity |
| **Reliability Engineer** | SRE, production readiness | reliability, SLA, monitoring |

---

## ⌨️ Commands (31)

### Core Workflow

| Command      | Description                |
| :----------- | :------------------------- |
| `/plan`      | Create implementation plan |
| `/implement` | Execute the plan           |
| `/verify`    | Run all quality gates      |
| `/status`    | Check project status       |

### Development

| Command     | Description                   |
| :---------- | :---------------------------- |
| `/build`    | Build a new feature           |
| `/fix`      | Fix linting/type errors       |
| `/debug`    | Systematic debugging          |
| `/refactor` | Improve code quality          |
| `/cook`     | Full scratch-to-done workflow |

### Documentation & Git

| Command      | Description                  |
| :----------- | :--------------------------- |
| `/doc`       | Generate documentation       |
| `/adr`       | Create architecture decision |
| `/changelog` | Generate changelog           |
| `/git`       | Git operations               |
| `/pr`        | Create/manage pull requests  |

### Exploration & Research

| Command     | Description              |
| :---------- | :----------------------- |
| `/scout`    | Explore codebase         |
| `/research` | Research technologies    |
| `/ask`      | Ask questions about code |

### Quality & Security

| Command          | Description             |
| :--------------- | :---------------------- |
| `/code-review`   | Run code review         |
| `/tdd`           | Test-driven development |
| `/security-scan` | Security audit          |
| `/perf`          | Performance analysis    |

### Integration & Deployment

| Command      | Description              |
| :----------- | :----------------------- |
| `/integrate` | Third-party integrations |
| `/db`        | Database operations      |
| `/deploy`    | Deploy to environment    |
| `/design`    | UI/UX design             |

### Context Management

| Command       | Description       |
| :------------ | :---------------- |
| `/learn`      | Extract patterns  |
| `/checkpoint` | Save progress     |
| `/compact`    | Compress context  |
| `/eval`       | Evaluate metrics  |
| `/setup`      | Configure project |
| `/help`       | Show help         |

---

## 🛠️ Skills (27)

### Operational Skills (4)

| Skill                 | Purpose                   |
| :-------------------- | :------------------------ |
| `verification-loop`   | Continuous quality gates  |
| `continuous-learning` | Pattern extraction (PAAL) |
| `strategic-compact`   | Context window management |
| `eval-harness`        | Performance evaluation    |

### Orchestration Skills (3)

| Skill                 | Purpose                   |
| :-------------------- | :------------------------ |
| `intelligent-routing` | Auto agent selection      |
| `parallel-agents`     | Multi-agent orchestration |
| `behavioral-modes`    | Adaptive AI operation     |

### Domain Skills (12)

| Skill                  | Purpose                         |
| :--------------------- | :------------------------------ |
| `api-patterns`         | RESTful API design              |
| `architecture`         | System design patterns          |
| `clean-code`           | Code quality principles         |
| `database-design`      | Schema optimization             |
| `testing-patterns`     | TDD, unit, integration          |
| `typescript-expert`    | Advanced TypeScript             |
| `frontend-patterns`    | React, component design         |
| `nodejs-patterns`      | Backend patterns                |
| `debugging-strategies` | Systematic debugging            |
| `security-practices`   | OWASP, vulnerability prevention |
| `docker-patterns`      | Containerization                |
| `git-workflow`         | Branching, commits              |

### Development Skills (7)

| Skill                   | Purpose                 |
| :---------------------- | :---------------------- |
| `app-builder`           | Full-stack scaffolding  |
| `mobile-design`         | Mobile UI/UX patterns   |
| `webapp-testing`        | E2E, Playwright testing |
| `deployment-procedures` | CI/CD, rollback         |
| `performance-profiling` | Core Web Vitals         |
| `brainstorming`         | Socratic discovery      |
| `plan-writing`          | Structured planning     |

---

## 🔄 Workflows (11)

| Workflow          | Description              | Command          |
| :---------------- | :----------------------- | :--------------- |
| **brainstorm**    | Creative ideation        | `/brainstorm`    |
| **create**        | Scaffold new features    | `/create`        |
| **debug**         | Systematic debugging     | `/debug`         |
| **deploy**        | Deployment process       | `/deploy`        |
| **enhance**       | Improve existing code    | `/enhance`       |
| **orchestrate**   | Multi-agent coordination | `/orchestrate`   |
| **plan**          | Implementation planning  | `/plan`          |
| **preview**       | Preview changes          | `/preview`       |
| **status**        | Project status check     | `/status`        |
| **test**          | Test writing workflow    | `/test`          |
| **ui-ux-pro-max** | Premium UI design        | `/ui-ux-pro-max` |

---

## ⚖️ Operating Constraints

### Immutable Rules

1. **Trust > Optimization** — Never compromise trust for speed
2. **Safety > Growth** — Prevent harm before enabling capability
3. **No Memory of Previous Sessions** — Treat each session as fresh
4. **Explainability > Performance** — Be transparent about decisions
5. **Human Override Always Available** — User can always interrupt

### Governance Protocol

```
/explore → /plan → /work → /review → /deploy
```

Each phase requires explicit approval before proceeding.

---

## 🔄 Session Management

> **The secret to 10x productivity**: Never lose context between sessions.

Antigravity AI Kit includes a robust **Session Management Architecture** that ensures continuity across work sessions. This is what separates casual AI usage from Trust-Grade AI development.

### How It Works

```
┌─────────────────────────────────────────────────────────────────────┐
│                     SESSION LIFECYCLE                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────┐       ┌──────────────┐       ┌──────────────┐     │
│  │ Session      │  ───► │   WORK       │  ───► │ Session      │     │
│  │ Start Hook   │       │   SESSION    │       │ End Hook     │     │
│  └──────────────┘       └──────────────┘       └──────────────┘     │
│         │                      │                      │              │
│         ▼                      ▼                      ▼              │
│  ┌──────────────┐       ┌──────────────┐       ┌──────────────┐     │
│  │ Load Context │       │ Pre-Commit   │       │ Save State   │     │
│  │ Verify Env   │       │ Quality Gate │       │ Handoff Docs │     │
│  └──────────────┘       └──────────────┘       └──────────────┘     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Components

| Component                   | Purpose                       | Location                             |
| :-------------------------- | :---------------------------- | :----------------------------------- |
| **Session Context**         | Live session state, resumable | `.agent/session-context.md`          |
| **Session Start Checklist** | Pre-flight verification       | `.agent/checklists/session-start.md` |
| **Session End Checklist**   | Wrap-up and handoff           | `.agent/checklists/session-end.md`   |
| **Pre-Commit Checklist**    | Quality gate before commits   | `.agent/checklists/pre-commit.md`    |

### Usage

**Starting a Session:**

```
Follow the session-start checklist
```

The AI will:

1. ✅ Load previous session context
2. ✅ Verify git status and branch
3. ✅ Check dependencies and build
4. ✅ Resume from last open task

**During Work:**

```
/verify  # Run quality checks before commits
```

**Ending a Session:**

```
Follow the session-end checklist
```

The AI will:

1. ✅ Update session-context.md with progress
2. ✅ Document open items and next steps
3. ✅ Commit all changes
4. ✅ Create handoff notes

### Productivity Benefits

| Benefit                | Description                                   |
| :--------------------- | :-------------------------------------------- |
| **Zero Ramp-Up Time**  | Context loads automatically, resume instantly |
| **No Lost Work**       | State persisted across sessions               |
| **Consistent Quality** | Same quality gates every time                 |
| **Clean Handoffs**     | Anyone can continue your work                 |
| **Audit Trail**        | Every session documented                      |

### Example Session Context

```markdown
# AI Session Context

## Last Session Summary

**Date**: February 5, 2026
**Focus**: User authentication feature

### What Was Done

- ✅ Implemented JWT refresh tokens
- ✅ Added login/logout endpoints
- [ ] Email verification (in progress)

### Open Items

1. [ ] Complete email verification
2. [ ] Add password reset flow

## Quick Resume

cd my-project && npm run dev
```

---

## 🔧 How to Extend

### Adding Custom Agents

```markdown
## <!-- .agent/agents/my-agent.md -->

name: my-agent
description: Custom agent description
triggers: [keyword1, keyword2]

---

# My Agent

Instructions for the agent...
```

### Adding Custom Skills

```markdown
## <!-- .agent/skills/my-skill/SKILL.md -->

name: my-skill
description: What this skill does
triggers: [context, keywords]

---

# My Skill

## Overview

...

## Workflow

...
```

### Adding Custom Commands

```markdown
## <!-- .agent/commands/my-command.md -->

## description: What this command does

# /my-command

Usage and instructions...
```

---

## 📁 Repository Structure

```
antigravity-ai-kit/
├── .agent/                    # Core AI Kit
│   ├── agents/               # 17 specialized agents
│   ├── commands/             # 31 slash commands
│   ├── skills/               # 26 capability modules
│   ├── workflows/            # 11 process templates
│   ├── hooks/                # Event automation
│   ├── rules/                # Governance rules
│   ├── checklists/           # Verification checklists
│   ├── templates/            # Feature templates
│   └── decisions/            # ADR system
├── docs/                      # Documentation
├── examples/                  # Usage examples
├── scripts/                   # Utility scripts
├── README.md                  # This file
├── LICENSE                    # MIT License
└── CHANGELOG.md               # Version history
```

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run verification: `/verify`
5. Submit a pull request

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
- **Documentation**: [besync-labs.github.io/antigravity-ai-kit](https://besync-labs.github.io/antigravity-ai-kit)
- **Origin**: Derived from BeSync Trust-Grade AI Governance

---

## 🙏 Acknowledgments

- Initial patterns from [vudovn/antigravity-kit](https://github.com/vudovn/antigravity-kit)
- Command structure inspired by [nth5693/gemini-kit](https://github.com/nth5693/gemini-kit)
- Context-driven development from [Google Conductor](https://developers.googleblog.com/en/conductor-introducing-context-driven-development-for-gemini-cli/)
- Hook concepts from [everything-claude-code](https://github.com/affaan-m/everything-claude-code)

_Antigravity AI Kit v2.1.0 extends these foundations with Trust-Grade governance, session management, and 90+ capabilities._

---

<p align="center">
  <b>Built with 💜 for developers who demand excellence</b>
</p>

<p align="center">
  <a href="https://github.com/besync-labs/antigravity-ai-kit">⭐ Star me on GitHub</a>
</p>
