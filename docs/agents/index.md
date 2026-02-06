# Agents

Agents are specialized sub-agents that handle delegated tasks with focused expertise.

---

## Agent Roster

| Agent                                    | Purpose                         | When to Use                  |
| :--------------------------------------- | :------------------------------ | :--------------------------- |
| 📋 **[Planner](planner.md)**             | Feature implementation planning | Before starting new features |
| 🏛️ **[Architect](architect.md)**         | System design decisions         | For architectural changes    |
| 🔍 **[Code Reviewer](code-reviewer.md)** | Quality & security review       | Before merging code          |
| 🧪 **TDD Guide**                         | Test-driven development         | When writing tests           |
| 🔐 **Security Reviewer**                 | Vulnerability analysis          | For security-sensitive code  |
| 🔧 **Build Error Resolver**              | Rapid build fixes               | When builds fail             |
| 🎭 **E2E Runner**                        | End-to-end testing              | For integration tests        |
| 🧹 **Refactor Cleaner**                  | Dead code cleanup               | During refactoring           |
| 📚 **Doc Updater**                       | Documentation sync              | After code changes           |
| 🧠 **Knowledge Agent**                   | RAG retrieval                   | For context queries          |
| 📱 **Mobile Developer**                  | React Native/Expo development   | For mobile app work          |
| 🗄️ **Database Architect**                | Schema design & queries         | For database changes         |
| 🚀 **DevOps Engineer**                   | CI/CD & deployment              | For infrastructure work      |
| ⚡ **Performance Optimizer**             | Core Web Vitals optimization    | For performance tuning       |
| 🔭 **Explorer Agent**                    | Codebase discovery              | For codebase exploration     |

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
