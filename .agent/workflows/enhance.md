---
description: Add or update features in existing application. Iterative development.
version: 2.1.0
sdlc-phase: build
skills: [clean-code, testing-patterns]
commit-types: [feat, refactor]
---

# /enhance — Iterative Feature Development

> **Trigger**: `/enhance [description]`
> **Lifecycle**: Build — after `/plan` or ad-hoc for minor updates

> [!IMPORTANT]
> This workflow modifies existing code. Always analyze the impact of changes before implementation. Preserve existing functionality — never break what works.

> [!TIP]
> This workflow leverages the **clean-code** skill. Read `.agent/skills/clean-code/SKILL.md` for extended guidance on code quality during iterative development.

---

## Critical Rules

1. **Preserve existing functionality** — changes must not break what currently works
2. **Regression check mandatory** — run the full test suite after every change
3. **User approval for major changes** — present an impact analysis before modifying >5 files
4. **Incremental approach** — make small, verifiable changes rather than large rewrites
5. **Follow existing conventions** — match the patterns already established in the codebase
6. **Document changes** — update documentation to reflect the modified behavior

---

## Argument Parsing

| Command | Action |
| :----------------------------- | :---------------------------------------------- |
| `/enhance` | Prompt for feature description |
| `/enhance [description]` | Begin enhancing the specified feature directly |

---

## Steps

// turbo
1. **Understand Current State**
   - Explore the project structure and architecture
   - Review existing features, tech stack, and conventions
   - Identify the files and modules relevant to the enhancement

// turbo
2. **Impact Analysis**
   - Identify all files that will be affected by the change
   - Map dependencies and downstream consumers
   - Assess risk of regressions in adjacent features
   - Flag any breaking changes or architectural implications

3. **Present Enhancement Plan** (for changes affecting >5 files)

   ```
   "To add [feature]:
   - I'll create [N] new files
   - Modify [N] existing files
   - Affected areas: [list]
   - Estimated risk: Low | Medium | High

   Should I proceed?"
   ```

4. **Implement Changes**
   - Follow existing code patterns and conventions
   - Apply changes incrementally
   - Keep each change small and verifiable

// turbo
5. **Regression Check**
   - Run the full test suite
   - Verify build succeeds
   - Check that existing functionality is preserved
   - Run lint and type-check

6. **Document Changes**
   - Update inline documentation
   - Update README or docs if user-facing behavior changes
   - Add changelog entry if applicable

---

## Output Template

```markdown
## 🔧 Enhancement: [Feature Name]

### Changes Summary

| Action | File | Description |
| :----- | :--- | :---------- |
| Modified | `path/to/file` | [what changed] |
| Created | `path/to/file` | [purpose] |

### Impact Analysis

- **Files affected**: [count]
- **Risk level**: Low | Medium | High
- **Breaking changes**: None | [description]

### Regression Check

- ✅ Tests: [pass count] passing
- ✅ Build: successful
- ✅ Lint: clean
- ✅ Type-check: clean

### What Changed

[Human-readable summary of the enhancement]

After enhancement: proceed to `/test` for validation or `/preview` for visual check.
```

---

## Governance

**PROHIBITED:**
- Breaking existing functionality to add new features
- Making large changes without impact analysis
- Skipping regression checks after modifications
- Ignoring existing code conventions
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- Impact analysis before implementation
- User approval for changes affecting >5 files
- Regression check (tests, build, lint) after every change
- Documentation update for user-facing changes
- Incremental, verifiable changes

---

## Completion Criteria

- [ ] Current state is understood (architecture, patterns, conventions)
- [ ] Impact analysis is complete (affected files, risk level)
- [ ] User approved the plan (for major changes)
- [ ] Changes are implemented following existing patterns
- [ ] Regression check passes (tests, build, lint, type-check)
- [ ] Documentation is updated
- [ ] After enhancement: proceed to `/test` for validation or `/preview` for visual check

---

## Related Resources

- **Previous**: `/plan` (implementation plan for major enhancements)
- **Next**: `/test` (validate changes) · `/preview` (visual verification)
- **Skill**: `.agent/skills/clean-code/SKILL.md`
- **Related Skills**: `.agent/skills/architecture/SKILL.md` · `.agent/skills/testing-patterns/SKILL.md`
