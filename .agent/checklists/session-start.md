# Session Start Checklist

> **Framework**: Antigravity AI Kit v2.0.0  
> **Purpose**: Complete this checklist at the beginning of every work session  
> **Principle**: Full context before new work

---

## 🔄 Context Loading

- [ ] **session-context.md** loaded
  - Last session summary reviewed
  - Open items identified
- [ ] **session-state.json** loaded
  - Last commit verified
  - Current task identified
- [ ] **rules.md** loaded (if project has one)
  - Project-specific rules acknowledged

---

## 📂 Project State

- [ ] **Git status** clean or understood
  ```bash
  git status
  git branch
  ```
- [ ] **Dependencies** up to date
  ```bash
  npm install  # or pnpm install
  ```
- [ ] **Build** passes
  ```bash
  npm run build
  ```

---

## 🎯 Task Context

Based on task type, load relevant context:

**For Feature Work:**

- [ ] Requirements document located
- [ ] Related existing code identified
- [ ] Test strategy understood

**For Bug Fixes:**

- [ ] Bug reproduction steps known
- [ ] Related logs/errors reviewed
- [ ] Affected code paths identified

**For Refactoring:**

- [ ] Scope of changes understood
- [ ] Test coverage verified
- [ ] Rollback plan considered

---

## ⚡ Quick Verification

- [ ] Development server starts
  ```bash
  npm run dev
  ```
- [ ] Tests pass
  ```bash
  npm test
  ```
- [ ] No critical errors in console

---

## ✅ Ready State

After completing this checklist:

1. ✅ Context fully loaded
2. ✅ Environment verified
3. ✅ Ready to begin task

**Proceed with**: `/plan` or `/implement`
