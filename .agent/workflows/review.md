---
description: Code review workflow. Sequential quality gate pipeline — lint, type-check, test, security scan, and build verification.
version: 2.1.0
sdlc-phase: verify
skills: [verification-loop]
commit-types: [fix, refactor]
---

# /review — Code Review Quality Gate

> **Trigger**: `/review` (full) · `/review lint` · `/review tests` · `/review security` · `/review build`
> **Lifecycle**: After implementation, before `/retrospective`

> [!CAUTION]
> Sequential gate pipeline — each step must pass before proceeding. Failed gates block merge. No overrides.

> [!TIP]
> This workflow leverages the **verification-loop** skill. Read `.agent/skills/verification-loop/SKILL.md` for extended guidance.

---

## Scope Filter

| Commit Type | Review Required? | Rationale |
| :---------- | :--------------- | :-------- |
| `feat()` | ✅ Full review | New functionality needs all gates |
| `fix()` | ✅ Full review | Bug fixes need regression verification |
| `refactor()` | ✅ Full review | Structural changes need quality validation |
| `test()` | ⚠️ Gate 3 only | Test-only changes need test verification |
| `docs()` | ❌ Skip | No testable code changes |
| `chore()` | ❌ Skip | Config/tooling, no code quality risk |

---

## Critical Rules

1. **SEQUENTIAL** — each gate must pass before the next runs
2. **STOP ON FAILURE** — if a gate fails, stop immediately, show error + fix suggestion
3. **NO OVERRIDES** — failed gates block merge, no exceptions
4. **FULL-STACK** — all relevant stacks are scanned
5. **DOCUMENT** — log results for audit trail

---

## Argument Parsing

| Command            | Gates Run                 |
| :----------------- | :------------------------ |
| `/review`          | All gates (1-5)           |
| `/review lint`     | Gate 1 (Lint)             |
| `/review types`    | Gate 2 (Type Check)       |
| `/review tests`    | Gate 3 (Tests)            |
| `/review security` | Gate 4 (Security Scan)    |
| `/review build`    | Gate 5 (Build)            |

---

## Pipeline Gates

Execute gates IN ORDER. Stop at first failure.

### Gate 1: Lint

// turbo

Run the project's lint tool:

```bash
# Examples (adapt to your stack):
npm run lint            # JavaScript/TypeScript
ruff check .            # Python
cargo clippy            # Rust
```

### Gate 2: Type Check

// turbo

Run the project's type checker:

```bash
# Examples:
npx tsc --noEmit        # TypeScript
mypy .                  # Python
```

### Gate 3: Tests

// turbo

Run the project's test suite:

```bash
# Examples:
npm test                # Node.js
pytest tests/ -q        # Python
cargo test              # Rust
```

### Gate 4: Security Scan

// turbo

Run dependency and vulnerability scanning:

```bash
# Examples:
npm audit --audit-level=moderate    # Node.js
pip-audit                           # Python
cargo audit                         # Rust
```

### Gate 5: Build Verification

// turbo

Verify the project builds successfully:

```bash
# Examples:
npm run build           # Node.js
python -m build         # Python
cargo build --release   # Rust
```

---

## Output Template

### ✅ All Gates Passed

```markdown
## ✅ Review Complete

| Gate          | Status                | Duration |
| :------------ | :-------------------- | :------- |
| Lint          | ✅ Pass               | {time}   |
| Type Check    | ✅ Pass               | {time}   |
| Tests         | ✅ Pass ({n}/{n})     | {time}   |
| Security      | ✅ No vulnerabilities | {time}   |
| Build         | ✅ Pass               | {time}   |

**Verdict**: Ready for commit.
```

### ❌ Gate Failed

```markdown
## ❌ Review Failed at Gate {N}

| Gate   | Status    |
| :----- | :-------- |
| {gate} | ❌ FAILED |

### Error Output

{error details}

### Recommended Fix

{fix steps}

Re-run: `/review` or `/review {gate}`
```

---

## Governance

**PROHIBITED:** Skipping gates · overriding failures · merging without all gates passing · ignoring security scan results

**REQUIRED:** Run all gates for merge-ready code · document results · fix failures before re-running

---

## Completion Criteria

- [ ] All applicable gates executed in sequence
- [ ] Zero failures across all gates
- [ ] Results documented with pass/fail + duration
- [ ] Verdict rendered: "Ready for commit" or "Failed at Gate N"

## Related Resources

- **Previous**: `/test` (tests must pass before review)
- **Next**: `/deploy` (deployment after all gates pass)
- **Skill**: `.agent/skills/verification-loop/SKILL.md`
- **Related**: `/quality-gate` (pre-task research) · `/retrospective` (sprint-level audit)
