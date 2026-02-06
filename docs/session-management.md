# Session Management

> **The secret to 10x productivity**: Never lose context between sessions.

Antigravity AI Kit includes a robust **Session Management Architecture** that ensures continuity across work sessions.

---

## How It Works

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

---

## Key Components

| Component                   | Purpose                       | Location                             |
| :-------------------------- | :---------------------------- | :----------------------------------- |
| **Session Context**         | Live session state, resumable | `.agent/session-context.md`          |
| **Session Start Checklist** | Pre-flight verification       | `.agent/checklists/session-start.md` |
| **Session End Checklist**   | Wrap-up and handoff           | `.agent/checklists/session-end.md`   |
| **Pre-Commit Checklist**    | Quality gate before commits   | `.agent/checklists/pre-commit.md`    |

---

## Usage

### Starting a Session

```
Follow the session-start checklist
```

The AI will:

1. ✅ Load previous session context
2. ✅ Verify git status and branch
3. ✅ Check dependencies and build
4. ✅ Resume from last open task

### During Work

```
/verify  # Run quality checks before commits
```

### Ending a Session

```
Follow the session-end checklist
```

The AI will:

1. ✅ Update session-context.md with progress
2. ✅ Document open items and next steps
3. ✅ Commit all changes
4. ✅ Create handoff notes

---

## Productivity Benefits

| Benefit                | Description                                   |
| :--------------------- | :-------------------------------------------- |
| **Zero Ramp-Up Time**  | Context loads automatically, resume instantly |
| **No Lost Work**       | State persisted across sessions               |
| **Consistent Quality** | Same quality gates every time                 |
| **Clean Handoffs**     | Anyone can continue your work                 |
| **Audit Trail**        | Every session documented                      |

---

## Example Session Context

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
