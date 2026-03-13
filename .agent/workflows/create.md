---
description: Create new features, components, or modules from scratch.
version: 2.0.0
---

# /create — Scaffold New Features

> **Trigger**: `/create [description]`
> **Lifecycle**: Build — after `/plan` approval

> [!IMPORTANT]
> This workflow creates new code. All scaffolded code MUST follow existing project patterns and conventions. No orphan code — everything must integrate with the existing architecture.

> [!TIP]
> This workflow leverages the **app-builder** skill. Read `.agent/skills/app-builder/SKILL.md` for extended guidance.

---

## Critical Rules

1. **Follow existing patterns** — scan the codebase for conventions before writing anything
2. **No orphan code** — every new file must be imported, referenced, or routed
3. **Tests required** — every new feature must include appropriate tests
4. **Stack-agnostic detection** — auto-detect the project type before scaffolding
5. **User approval for major scaffolds** — present the plan before creating >5 files
6. **Document public APIs** — add inline documentation for all exported functions/components

---

## Steps

// turbo
1. **Clarify Requirements**
   - What type of component, feature, or module?
   - What is the acceptance criteria?
   - Any specific patterns, libraries, or constraints?

// turbo
2. **Detect Project Stack**
   - Auto-detect the project type from config files (`package.json`, `pyproject.toml`, `Cargo.toml`, `go.mod`, etc.)
   - Identify the framework, language, and conventions in use
   - Determine the appropriate scaffold structure

// turbo
3. **Analyze Existing Patterns**
   - Search for similar components/modules in the codebase
   - Identify naming conventions, file structure, and import patterns
   - Note relevant utilities, helpers, and shared modules to reuse

4. **Present Scaffold Plan**
   - Show the proposed file structure and integration points
   - For major scaffolds (>5 files): present plan and wait for user approval
   - For minor scaffolds: proceed with creation

5. **Implement**
   - Create files following detected project conventions
   - Apply SOLID principles and project-specific patterns
   - Wire up imports, routes, and exports

6. **Add Tests**
   - Unit tests for utilities and business logic
   - Integration tests for component interactions
   - E2E tests for critical user flows (when applicable)

7. **Document**
   - Add inline documentation (JSDoc, docstrings, etc.)
   - Update relevant README or docs if the feature is user-facing
   - Create usage examples if appropriate

---

## Output Template

```markdown
## 🏗️ Create: [Feature Name]

### Stack Detected

- **Language**: [language]
- **Framework**: [framework]
- **Conventions**: [detected patterns]

### Files Created

| File | Purpose |
| :--- | :------ |
| `path/to/file` | [description] |

### Integration Points

- [How new code connects to existing architecture]

### Tests Added

- [x] Unit tests: `path/to/tests`
- [x] Integration tests: `path/to/tests`

### Next Steps

After creation: proceed to `/test` for full test suite or `/preview` for visual verification.
```

---

## Governance

**PROHIBITED:**
- Creating files without checking existing patterns first
- Scaffolding framework-specific code in a different-stack project
- Leaving orphan files not connected to the project
- Skipping tests for new features
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- Stack detection before scaffolding
- Pattern analysis before implementation
- User approval for scaffolds creating >5 files
- Test coverage for all new code
- Integration with existing project architecture

---

## Completion Criteria

- [ ] Project stack is detected and documented
- [ ] Existing patterns are analyzed and followed
- [ ] All files are created and integrated (no orphans)
- [ ] Tests are written and passing
- [ ] Documentation is added for public APIs
- [ ] After creation: proceed to `/test` for validation or `/preview` for visual check

---

## Related Resources

- **Previous**: `/plan` (implementation plan must exist for major features)
- **Next**: `/test` (validate new code) · `/preview` (visual verification)
- **Skill**: `.agent/skills/app-builder/SKILL.md`
- **Related Skills**: `.agent/skills/clean-code/SKILL.md` · `.agent/skills/architecture/SKILL.md`
