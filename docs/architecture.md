# Architecture

Antigravity AI Kit is an engineered framework with multiple interconnected components.

---

## Architecture Overview

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

## Component Breakdown

### Agents (17)

Specialized sub-agents that handle delegated tasks with focused expertise.

- **Core**: Architect, Planner, Code Reviewer, TDD Specialist
- **Domain**: Mobile, Frontend, Backend, Database, DevOps, Security, Performance
- **Support**: Documentation, Debugger, Refactorer, Explorer, E2E, Knowledge

### Commands (31)

Slash commands for quick execution of common operations.

- **Planning**: /plan, /implement, /status, /setup
- **Development**: /build, /fix, /debug, /refactor, /cook
- **Quality**: /verify, /code-review, /security-scan, /perf

### Skills (26)

Domain expertise modules that extend AI capabilities.

- **Operational**: verification-loop, continuous-learning, strategic-compact
- **Orchestration**: intelligent-routing, parallel-agents, behavioral-modes
- **Domain**: api-patterns, architecture, clean-code, database-design

### Workflows (11)

Complete development lifecycles for multi-step processes.

- /brainstorm, /create, /debug, /deploy, /enhance, /orchestrate
- /plan, /preview, /status, /test, /ui-ux-pro-max

### Rules & Hooks

- **Rules** (5): Immutable governance constraints
- **Hooks** (4): Event-driven automation (session-start, session-end, pre-commit, post-deploy)

---

## Directory Structure

```
.agent/
├── agents/               # 17 specialized agents
├── commands/             # 31 slash commands
├── skills/               # 26 capability modules
├── workflows/            # 11 process templates
├── hooks/                # Event automation
├── rules/                # Governance rules
├── checklists/           # Verification checklists
├── templates/            # Feature templates
└── decisions/            # ADR system
```
