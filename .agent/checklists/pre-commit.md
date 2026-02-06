# Pre-Commit Checklist

> **Framework**: Antigravity AI Kit v2.0.0  
> **Purpose**: Quality gate before committing code  
> **Principle**: Prevention over correction

---

## 🔍 Code Quality

- [ ] **No debug code left**
  - No `console.log` statements (unless intentional)
  - No `debugger` statements
  - No commented-out code blocks
- [ ] **Code is self-documenting**
  - Clear variable/function names
  - Complex logic has comments explaining WHY

---

## 🧪 Testing

- [ ] **All tests pass**
  ```bash
  npm test
  ```
- [ ] **New code has tests** (when applicable)
- [ ] **Coverage maintained or improved**

---

## 🔨 Build & Lint

- [ ] **TypeScript compiles**
  ```bash
  npm run build
  ```
- [ ] **Linting passes**
  ```bash
  npm run lint
  ```
- [ ] **Formatting correct**
  ```bash
  npm run format
  ```

---

## 🔐 Security

- [ ] **No secrets in code**
  - No API keys
  - No passwords
  - No tokens
- [ ] **Dependencies secure**
  ```bash
  npm audit
  ```

---

## 📋 Commit Message

Follow conventional commits format:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`

**Examples**:

```bash
git commit -m "feat(auth): add JWT refresh token support"
git commit -m "fix(api): handle null user in profile endpoint"
git commit -m "docs(readme): add installation instructions"
```

---

## ✅ Ready to Commit

All checks passed? Proceed with:

```bash
git add -A
git commit -m "<type>(<scope>): <description>"
```
