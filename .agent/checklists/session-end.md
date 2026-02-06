# Session End Checklist

> **Framework**: Antigravity AI Kit v2.0.0  
> **Purpose**: Complete this checklist before ending any work session  
> **Principle**: Context preservation for continuity

---

## 📝 Context Preservation

- [ ] **session-context.md** updated with:
  - What was accomplished
  - Open items and next steps
  - Any blockers discovered
- [ ] **session-state.json** updated (if applicable)

---

## 📊 Progress Documentation

- [ ] **README.md** or docs updated (if needed)
- [ ] **CHANGELOG.md** updated (if release-worthy changes)
- [ ] **ADRs created** for significant decisions
  - Use `/adr` command for new decisions

---

## 🔍 Quality Verification

- [ ] **All tests pass**
  ```bash
  npm test
  ```
- [ ] **Build succeeds**
  ```bash
  npm run build
  ```
- [ ] **Linting clean**
  ```bash
  npm run lint
  ```

---

## 📦 Git Status

- [ ] **All changes committed**
  ```bash
  git status  # Should be clean
  ```
- [ ] **Commit messages follow convention**
  ```
  feat(scope): description
  fix(scope): description
  docs(scope): description
  ```
- [ ] **Pushed to remote**
  ```bash
  git push origin [branch]
  ```

---

## 🔄 Handoff Preparation

If another session will continue this work:

- [ ] Clear **Next Steps** documented in session-context.md
- [ ] **Blockers** clearly identified
- [ ] Required **context files** listed
- [ ] Any **environment changes** noted

---

## ✅ Session Complete

**Final commit convention:**

```bash
git commit -m "chore(session): end session - [summary]"
git push origin [branch]
```

Session can now be safely ended.
