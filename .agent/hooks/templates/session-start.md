# Session Start Hook

> **Trigger**: SessionStart  
> **Priority**: 1 (Highest)  
> **Status**: Active

---

## 🎯 Purpose

Load context and prepare the environment when a new session begins. This hook ensures **continuity** and **full context** before any work starts.

---

## 🔄 Actions

### 1. Load Session Context

Read and apply previous session context:

```javascript
// Load session-context.md
const context = await loadFile(".agent/session-context.md");
injectSystemPrompt(context);
```

### 2. Check Session State

Load machine-readable state:

```javascript
// Load session-state.json
const state = await loadJSON(".agent/session-state.json");
if (state.currentTask) {
  notify(`Resuming task: ${state.currentTask}`);
}
```

### 3. Verify Git Status

Check current branch and any uncommitted changes:

```javascript
const gitStatus = await exec("git status --short");
if (gitStatus.length > 0) {
  warn(`Uncommitted changes detected: ${gitStatus.split("\n").length} files`);
}
```

### 4. Check Dependencies

Ensure project dependencies are installed:

```javascript
const lockfileChanged = await exec("git diff HEAD package-lock.json");
if (lockfileChanged) {
  suggest("Dependencies may have changed. Consider running npm install.");
}
```

---

## 📋 Output

```
[Session Start]
✓ Context loaded from session-context.md
✓ State restored: currentTask = "Implementing feature X"
✓ Git branch: main (clean)
✓ Dependencies: Up to date
```

---

## 🔧 Customization

Extend this hook for project-specific needs:

```json
{
  "name": "session-start-custom",
  "trigger": "SessionStart",
  "action": "Load project-specific context files"
}
```

---

## ⚖️ Trust-Grade Integration

This hook supports Trust-Grade principles:

- **Consistency > Speed**: Full context before new work
- **Completion > Suggestion**: Resume unfinished tasks
- **Explainability**: Clear session state visibility
