# Agents

Agents are specialized sub-agents that handle delegated tasks with focused expertise. **17 agents** across 3 categories.

---

## Core Development

| Agent                                    | Role                    | Triggers                          |
| :--------------------------------------- | :---------------------- | :-------------------------------- |
| 📋 **[Planner](planner.md)**             | Feature planning        | plan, implementation              |
| 🏛️ **[Architect](architect.md)**         | System design, patterns | architecture, design, scalability |
| 🔍 **[Code Reviewer](code-reviewer.md)** | Quality assurance       | review, quality, best practices   |
| 🧪 **TDD Specialist**                    | Test-driven development | test, tdd, coverage               |

---

## Domain Specialists

| Agent                       | Role                          | Triggers                     |
| :-------------------------- | :---------------------------- | :--------------------------- |
| 📱 **Mobile Developer**     | iOS/Android patterns          | mobile, react-native, expo   |
| 🎨 **Frontend Specialist**  | React, Vue, UI/UX             | frontend, component, styling |
| 🔧 **Backend Specialist**   | Node.js, NestJS, APIs         | backend, api, server         |
| 🗄️ **Database Architect**   | Schema, queries, optimization | database, prisma, sql        |
| 🚀 **DevOps Engineer**      | CI/CD, Docker, deployment     | devops, docker, deploy       |
| 🔐 **Security Auditor**     | Vulnerabilities, compliance   | security, auth, audit        |
| ⚡ **Performance Engineer** | Optimization, profiling       | performance, speed, metrics  |

---

## Support

| Agent                       | Role                       | Triggers              |
| :-------------------------- | :------------------------- | :-------------------- |
| 📚 **Documentation Writer** | Docs, READMEs, guides      | documentation, readme |
| 🐛 **Debugger**             | Systematic debugging       | debug, error, fix     |
| 🧹 **Refactorer**           | Code cleanup, optimization | refactor, cleanup     |
| 🔭 **Explorer Agent**       | Codebase discovery         | explore, scout        |
| 🎭 **E2E Runner**           | End-to-end testing         | e2e, integration      |
| 🧠 **Knowledge Agent**      | RAG retrieval              | knowledge, context    |

---

## How Agents Work

1. **Delegation** — Main agent delegates to specialized agent
2. **Context Transfer** — Relevant context is passed
3. **Execution** — Agent performs focused task
4. **Report** — Results returned to main agent

---

## Using Agents

Agents are invoked automatically by commands:

```
/plan Add user authentication
# → Invokes Planner agent

/code-review src/auth/
# → Invokes Code Reviewer agent
```
