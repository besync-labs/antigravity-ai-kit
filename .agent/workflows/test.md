---
description: Write and run tests systematically.
version: 2.1.0
sdlc-phase: verify
skills: [testing-patterns, webapp-testing]
commit-types: [test]
---

# /test — Systematic Test Writing & Execution

> **Trigger**: `/test [scope]`
> **Lifecycle**: Verify — after implementation, before `/review`

> [!IMPORTANT]
> Tests are the primary quality gate. All new code must have test coverage. Never skip failing tests — fix the code or fix the test.

> [!TIP]
> This workflow leverages the **testing-patterns** and **webapp-testing** skills. Read `.agent/skills/testing-patterns/SKILL.md` and `.agent/skills/webapp-testing/SKILL.md` for extended guidance.

---

## Critical Rules

1. **AAA pattern** — all tests must follow Arrange-Act-Assert
2. **Coverage ≥80%** — target minimum 80% code coverage on new code
3. **No skipping** — `skip`, `xit`, `xdescribe` are prohibited in committed code
4. **Descriptive names** — test names must describe expected behavior: "should [behavior] when [condition]"
5. **Edge cases** — always test boundary conditions, null/undefined, and error paths
6. **Stack-agnostic** — detect the project stack and use the appropriate test framework

---

## Scope Filter

| Commit Type | Run Tests? | Rationale |
| :---------- | :--------- | :-------- |
| `feat()` | ✅ Yes | New functionality needs coverage |
| `fix()` | ✅ Yes | Bug fixes need regression tests |
| `refactor()` | ✅ Yes | Refactors must prove no regressions |
| `test()` | ✅ Yes | Test changes need validation |
| `docs()` | ❌ Skip | No testable code changes |
| `chore()` | ❌ Skip | Config/tooling, no testable code |

---

## Steps

// turbo
1. **Identify Test Scope**
   - What needs to be tested? (specific file, module, or feature)
   - What type of tests? (unit, integration, E2E)
   - What are the critical paths and edge cases?

// turbo
2. **Detect Test Framework**
   - Scan for test config: `jest.config.*`, `vitest.config.*`, `pytest.ini`, `pyproject.toml`, `Cargo.toml`
   - Determine the test runner and assertion library
   - Identify coverage tool

// turbo
3. **Analyze Existing Coverage**
   - Run coverage report
   - Identify untested code paths
   - Prioritize critical functionality and edge cases

4. **Write Tests**
   - Follow AAA pattern (Arrange-Act-Assert)
   - Use descriptive test names
   - Cover happy paths, edge cases, and error scenarios
   - Mock external dependencies appropriately

// turbo
5. **Run Tests**
   - Execute the full test suite
   - Verify all tests pass
   - Check coverage meets ≥80% threshold

// turbo
6. **Review Results**
   - All tests passing?
   - Coverage targets met?
   - Edge cases covered?
   - Any flaky tests identified?

---

## Multi-Stack Test Commands

| Stack | Test Command | Coverage Command |
| :------------ | :----------------------- | :------------------------------- |
| Node.js/Jest | `npm test` | `npm run test:coverage` |
| Node.js/Vitest | `npx vitest` | `npx vitest --coverage` |
| Python/pytest | `pytest` | `pytest --cov` |
| Rust/Cargo | `cargo test` | `cargo tarpaulin` |
| Go | `go test ./...` | `go test -coverprofile=cover.out` |

---

## Output Template

```markdown
## 🧪 Test Results: [Scope]

### Framework

- **Runner**: [jest | vitest | pytest | cargo test]
- **Coverage Tool**: [tool]

### Results

| Metric | Value |
| :--------- | :--------- |
| Total | [N] tests |
| Passing | ✅ [N] |
| Failing | ❌ [N] |
| Skipped | ⚠️ [N] |
| Coverage | [N]% |

### Tests Written

| Test File | Tests | Status |
| :-------- | :---- | :----- |
| `path/to/test` | [N] | ✅ All passing |

### Coverage Gaps (if any)

- [ ] [Untested function/module]

After testing: proceed to `/review` for quality gates.
```

---

## Governance

**PROHIBITED:**
- Committing code with `skip`, `xit`, or `xdescribe` annotations
- Submitting code below 80% coverage without explicit justification
- Testing only happy paths — edge cases are mandatory
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- AAA pattern for all tests
- Coverage report generation and review
- Descriptive test names following "should [behavior] when [condition]"
- Stack-appropriate test framework usage

---

## Completion Criteria

- [ ] Test scope is identified
- [ ] Test framework is detected for the project stack
- [ ] Tests are written following AAA pattern
- [ ] All tests are passing
- [ ] Coverage is ≥80% on new code
- [ ] Edge cases and error paths are covered
- [ ] No skipped tests in committed code
- [ ] After testing: proceed to `/review` for quality gates
- [ ] Note: if `/test` ran immediately before `/review` with no code changes, `/review` Gate 3 may use cached results

---

## Related Resources

- **Previous**: `/create` (test new code) · `/enhance` (test changes) · `/debug` (regression check after fix)
- **Next**: `/review` (quality gate pipeline)
- **Skills**: `.agent/skills/testing-patterns/SKILL.md` · `.agent/skills/webapp-testing/SKILL.md`
