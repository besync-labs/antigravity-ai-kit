---
description: Tier-1 Retrospective Quality Audit — full product, architecture, and pipeline review against market standards
version: 2.0.0
---

# /retrospective — Tier-1 Retrospective Quality Audit

> **Trigger**: `/retrospective` or `/tier1-audit`
> **Lifecycle**: After sprint/milestone completion — feeds next sprint's `/plan`

> [!CAUTION]
> Critical governance workflow. Do NOT defend previous decisions by default, minimize issues, or optimize for speed over correctness. Be critical, precise, honest.

---

## Critical Rules

1. **No defense bias** — never defend previous decisions by default; evaluate with fresh eyes
2. **No minimization** — report all issues at their true severity, never downplay
3. **Evidence required** — every classification (✅/⚠️/❌) must be backed by data or benchmarks
4. **Structural over cosmetic** — prefer foundational improvements over surface fixes
5. **Market-grade bar** — compare against Google/Meta/Apple quality standards

---

## When to Execute

- Major milestones (sprint completion, phase gates)
- Pre-launch reviews (alpha, beta, production)
- Quality regressions or concerns
- On-demand via `/retrospective`

---

## Audit Scope

Audit MUST automatically cover all applicable domains. Skip domains not yet implemented.

| Domain                | What to Audit                                        |
| :-------------------- | :--------------------------------------------------- |
| **Architecture**      | Backend, frontend, infra, database, AI integration   |
| **Code Quality**      | Patterns, consistency, type safety, test coverage    |
| **Security & Privacy**| Data handling, encryption, GDPR, authentication      |
| **Performance**       | Load times, bundle size, API latency, caching        |
| **Testing**           | Coverage, strategy, regression prevention            |
| **Documentation**     | API docs, README, inline comments, decision records  |
| **CI/CD**             | Pipeline reliability, deployment safety              |
| **UX/Accessibility**  | User experience, a11y compliance, responsive design  |

> [!IMPORTANT]
> Nothing is assumed correct. Every completed item is subject to re-evaluation.

---

## Steps

Execute IN ORDER. Do not skip any step.

### Step 1: Inventory Collection

// turbo

Load and catalog: project docs, task tracking, git log (main), ADRs, feature specs. Produce a **Completed Task & System Inventory**.

### Step 2: Market Benchmark Analysis

// turbo

For each feature, evaluate against market leaders and best-in-class implementations:

| Feature | Current  | Market Leader | Gap?     | Notes    |
| :------ | :------- | :------------ | :------- | :------- |
| [name]  | [approach] | [best impl.]| ✅/⚠️/❌ | [detail] |

### Step 3: Outdated Pattern Detection

// turbo

Evaluate each item:

- Legacy UX, architecture, or pipeline assumptions?
- Deprecated libraries, patterns, or anti-patterns?
- Reflects current best practices or older thinking?

| Area   | Current  | Issue          | Modern Alternative |
| :----- | :------- | :------------- | :----------------- |
| [area] | [exists] | [why outdated] | [replacement]      |

### Step 4: Tier-1 Quality Validation

// turbo

For each system: Would it pass review at Google/Meta/Apple? Senior-level or merely functional? Shortcuts, missing edge cases? Code quality meet strict TypeScript/testing standards? AI pipelines reproducible and benchmarked?

### Step 5: Ethics, Bias & Automation Safety

// turbo

- AI scoring bias (demographic, linguistic)?
- Automated actions transparent and explainable?
- GDPR compliance and data sovereignty?
- Automation safeguards effective (human-in-the-loop, rate limiting)?

### Step 6: Differentiation Alignment

// turbo

Check each feature against your product values:

- Quality > Volume philosophy?
- Measurable, transparent outcomes?
- Human-in-the-loop control?
- Ethical automation?
- Explainable AI scoring?

### Step 7: Classification & Reporting

// turbo

| Classification         | Meaning                             | Action             |
| :--------------------- | :---------------------------------- | :----------------- |
| ✅ Tier-1 Compliant    | Meets/exceeds standards + values    | None               |
| ⚠️ Partially Compliant | Functional but below Tier-1         | Refinement plan    |
| ❌ Non-Compliant       | Below market or violates principles | Revision — blocker |

---

## Output Template

```markdown
# Tier-1 Retrospective Audit Report

> Date: [date] · Sprint: [N] · Auditor: Antigravity AI Kit

## 1. Executive Summary

## 2. System Inventory

## 3. Compliance Classification (✅/⚠️/❌ per area)

## 4. Gaps & Risks

## 5. Outdated Implementations

## 6. Revision Recommendations (change + justification + impact)

## 7. Priority Matrix

| Priority    | Issue | Impact | Effort |
| :---------- | :---- | :----- | :----- |
| 🔴 Critical | ...   | ...    | ...    |
| 🟠 High     | ...   | ...    | ...    |
| 🟢 Optional | ...   | ...    | ...    |

## 8. Conclusion & Next Steps
```

---

## Revision Rules

1. Prefer structural improvements over cosmetic fixes
2. Avoid incremental patching when foundations are weak
3. Provide concrete examples — not vague suggestions
4. Reference market data to justify every recommendation

---

## Governance

**PROHIBITED:** Defending past decisions by default · minimizing issues · optimizing speed over correctness · marking ✅ without evidence · skipping domains

**REQUIRED:** Rigorous analysis · market-grade bar · revisions for all non-compliant areas · actionable recommendations

---

## Completion Criteria

- [ ] All applicable domains inventoried and analyzed
- [ ] Every item classified (✅/⚠️/❌)
- [ ] All gaps documented with evidence
- [ ] Revision path for every non-compliant area
- [ ] Priority Matrix populated
- [ ] Audit report saved as artifact
- [ ] Findings presented to Product Owner via `notify_user`

> [!NOTE]
> If no gaps found, explicitly state WHY with evidence from benchmarks and quality metrics.

## Related Resources

- **Previous**: Sprint/milestone completion triggers this workflow
- **Next**: `/plan` (findings feed next sprint's planning)
- **Related**: `/quality-gate` (pre-task validation) · `/review` (code-level quality gates)
