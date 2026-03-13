---
description: Display project and progress status. Current state overview.
version: 2.1.0
sdlc-phase: cross-cutting
skills: [verification-loop]
commit-types: [chore]
---

# /status — Project Status Overview

> **Trigger**: `/status [sub-command]`
> **Lifecycle**: Cross-cutting — any SDLC phase

> [!NOTE]
> This is a read-only, informational workflow. It gathers and displays data without modifying anything.

> [!TIP]
> Skill reference: `.agent/skills/verification-loop/SKILL.md` — health checks and continuous quality gates

---

## Critical Rules

1. **Accurate data** — all reported information must reflect the current state, not cached data
2. **No stale info** — read live data from git, filesystem, and project config
3. **Health checks** — always include build and test health indicators
4. **Non-destructive** — this workflow must never modify any files or state

---

## Argument Parsing

| Command | Action |
| :----------------- | :------------------------------------------ |
| `/status` | Full status report (all sections) |
| `/status brief` | Condensed one-line summary |
| `/status health` | Health checks only (build, tests, server) |
| `/status git` | Git status only (branch, changes, commits) |

---

## Steps

// turbo
1. **Project Detection**
   - Detect project name, path, and type from config files
   - Identify the tech stack (framework, language, database, etc.)

// turbo
2. **Git Status**
   - Current branch and last commit
   - Uncommitted changes (staged, unstaged, untracked)
   - Branch ahead/behind status

// turbo
3. **Progress Tracking**
   - Read ROADMAP or task files for sprint/task status
   - Count completed, in-progress, and pending items
   - Identify blockers if any

// turbo
4. **Health Check**
   - Build status (can the project compile/build?)
   - Test status (are tests passing?)
   - Server status (is the dev server running?)

// turbo
5. **File Statistics**
   - Files created and modified (from git)
   - Recent changes summary

---

## Output Template

```markdown
## 📊 Project Status

### Project

- **Name**: [project name]
- **Path**: [project path]
- **Stack**: [language] + [framework] + [database]

### Git

- **Branch**: [branch name]
- **Last Commit**: [hash] — [message]
- **Changes**: [N] staged · [N] unstaged · [N] untracked

### Progress

✅ Completed ([N]): [list]
🔄 In Progress ([N]): [list]
⏳ Pending ([N]): [list]

### Health

| Check | Status |
| :---- | :----- |
| Build | ✅ Passing / ❌ Failing |
| Tests | ✅ [N]/[N] passing / ❌ [N] failures |
| Server | 🟢 Running / ⚪ Stopped |

### Statistics

- Files created: [N]
- Files modified: [N]
- Test coverage: [N]%
```

---

## Governance

**PROHIBITED:**
- Modifying files, state, or configuration
- Reporting stale or cached data
- Skipping health checks
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- Live data from git, filesystem, and project config
- Health check in every full status report
- Accurate progress tracking from project files

---

## Completion Criteria

- [ ] Project info is detected and displayed
- [ ] Git status is current and accurate
- [ ] Progress tracking reflects actual state
- [ ] Health checks are performed and reported

---

## Related Resources

- **Previous**: `/deploy` (post-deployment monitoring)
- **Cross-cutting**: Available at any SDLC phase
- **Related**: `/retrospective` (sprint-level status review)
