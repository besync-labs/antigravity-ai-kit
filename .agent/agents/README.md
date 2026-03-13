# Antigravity AI Kit — Agents

> **Purpose**: Specialized sub-agents for task delegation
> **Count**: 19 Core Agents

---

## Overview

Agents are specialized personas that handle delegated tasks with focused expertise. Each agent has:

- **Defined responsibilities** — What it handles
- **Specific tools** — What it can use
- **Constraints** — What it cannot do

---

## Agent Roster

### Core Development Agents

| Agent                       | File                      | Purpose                         |
| :-------------------------- | :------------------------ | :------------------------------ |
| 📋 **Planner**              | `planner.md`              | Feature implementation planning |
| 🏛️ **Architect**            | `architect.md`            | System design decisions         |
| 🔍 **Code Reviewer**        | `code-reviewer.md`        | Quality & security review       |
| 🧪 **TDD Guide**            | `tdd-guide.md`            | Test-driven development         |
| 🔧 **Build Error Resolver** | `build-error-resolver.md` | Rapid build fixes               |
| 🖥️ **Backend Specialist**   | `backend-specialist.md`   | Node.js, NestJS, API design     |
| 🎨 **Frontend Specialist**  | `frontend-specialist.md`  | React, Next.js, UI architecture |

### Quality & Security Agents

| Agent                        | File                       | Purpose                      |
| :--------------------------- | :------------------------- | :--------------------------- |
| 🔐 **Security Reviewer**     | `security-reviewer.md`     | Vulnerability analysis       |
| 🎭 **E2E Runner**            | `e2e-runner.md`            | End-to-end testing           |
| ⚡ **Performance Optimizer** | `performance-optimizer.md` | Core Web Vitals optimization |

### Infrastructure Agents

| Agent                        | File                       | Purpose                       |
| :--------------------------- | :------------------------- | :---------------------------- |
| 📱 **Mobile Developer**      | `mobile-developer.md`      | React Native/Expo development |
| 🗄️ **Database Architect**    | `database-architect.md`    | Schema design, queries        |
| 🚀 **DevOps Engineer**       | `devops-engineer.md`       | CI/CD, deployment             |
| 🛡️ **Reliability Engineer**  | `reliability-engineer.md`  | SRE, production readiness     |

### Maintenance & Discovery Agents

| Agent                      | File                     | Purpose                     |
| :------------------------- | :----------------------- | :-------------------------- |
| 🧹 **Refactor Cleaner**    | `refactor-cleaner.md`    | Dead code cleanup           |
| 📚 **Doc Updater**         | `doc-updater.md`         | Documentation sync          |
| 🧠 **Knowledge Agent**     | `knowledge-agent.md`     | RAG retrieval               |
| 🔭 **Explorer Agent**      | `explorer-agent.md`      | Codebase discovery          |
| 📊 **Sprint Orchestrator** | `sprint-orchestrator.md` | Sprint planning & velocity  |

---

## Agent Selection Matrix

The `intelligent-routing` skill automatically selects agents based on request keywords:

| Intent       | Keywords                            | Agent(s)                  |
| ------------ | ----------------------------------- | ------------------------- |
| Architecture | "design", "structure", "pattern"    | `architect`               |
| Planning     | "plan", "roadmap", "sprint"         | `planner`                 |
| Security     | "security", "vulnerability", "auth" | `security-reviewer`       |
| Testing      | "test", "coverage", "e2e"           | `tdd-guide`, `e2e-runner` |
| Mobile       | "mobile", "react native", "expo"    | `mobile-developer`        |
| Database     | "schema", "migration", "query"      | `database-architect`      |
| Deployment   | "deploy", "CI/CD", "production"     | `devops-engineer`         |
| Performance  | "slow", "optimize", "performance"   | `performance-optimizer`   |
| Discovery    | "explore", "map", "understand"      | `explorer-agent`          |

---

## How to Use Agents

Agents are invoked automatically by the orchestrator based on context. You can also explicitly request them:

```
Use the architect agent to design the database schema.
```

```
Delegate this security review to the security-reviewer agent.
```

---

## Agent Specification Format

Each agent file follows this structure:

```markdown
# [Agent Name]

> **Platform**: Antigravity AI Kit
> **Purpose**: [Brief description]

---

## Identity

[Agent persona and core responsibility]

## Capabilities

- [What the agent can do]

## Constraints

- [What the agent cannot do]

## Workflow

1. [Step 1]
2. [Step 2]
```

---

## Extending Agents

To add a custom agent:

1. Create a new `.md` file in this directory
2. Follow the specification format above
3. Reference it in your workflows

Custom agents inherit the Operating Constraints from `rules.md`.
