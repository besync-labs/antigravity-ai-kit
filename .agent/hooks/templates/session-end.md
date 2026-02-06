# Session End Hook

> **Trigger**: SessionEnd  
> **Priority**: 1 (Highest)  
> **Status**: Active

---

## 🎯 Purpose

Save context and preserve state when a session ends. This hook ensures **continuity** for future sessions and proper **handoff** documentation.

---

## 🔄 Actions

### 1. Update Session Context

Save current session summary:

```javascript
// Update session-context.md
const summary = generateSessionSummary({
  accomplishments: getAccomplishments(),
  openItems: getOpenItems(),
  commits: getSessionCommits(),
});
await writeFile(".agent/session-context.md", summary);
```

### 2. Save Session State

Persist machine-readable state:

```javascript
// Update session-state.json
const state = {
  lastUpdated: new Date().toISOString(),
  currentTask: getCurrentTask(),
  branch: await exec("git branch --show-current"),
  lastCommit: await exec("git rev-parse --short HEAD"),
};
await writeJSON(".agent/session-state.json", state);
```

### 3. Verify Clean State

Check for uncommitted changes:

```javascript
const gitStatus = await exec("git status --short");
if (gitStatus.length > 0) {
  warn(
    "Uncommitted changes detected. Consider committing before ending session.",
  );
}
```

### 4. Generate Handoff Notes

Create handoff documentation if needed:

```javascript
if (hasOpenItems()) {
  const handoff = generateHandoffNotes({
    nextPriority: getNextPriority(),
    blockers: getBlockers(),
    contextFiles: getRelevantFiles(),
  });
  appendToSessionContext(handoff);
}
```

---

## 📋 Output

```
[Session End]
✓ session-context.md updated
✓ session-state.json saved
✓ Git status: clean
✓ Handoff notes: Generated

Session ended successfully. Ready for next session.
```

---

## 🔧 Customization

Extend this hook for project-specific needs:

```json
{
  "name": "session-end-custom",
  "trigger": "SessionEnd",
  "action": "Run project-specific cleanup tasks"
}
```

---

## ⚖️ Trust-Grade Integration

This hook supports Trust-Grade principles:

- **Context Preservation**: Never lose work context
- **Explainability**: Document what was done and why
- **Handoff-Ready**: Future sessions can resume seamlessly
