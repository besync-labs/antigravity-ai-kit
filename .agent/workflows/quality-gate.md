---
description: Pre-task research and validation protocol. Market research, gap analysis, and ethics review before implementation.
version: 2.1.0
sdlc-phase: discover
skills: [brainstorming]
commit-types: [docs, chore]
---

# /quality-gate — Pre-Task Research & Validation Protocol

> **Trigger**: `/quality-gate` — recommended before implementation of new features or refactors
> **Lifecycle**: Before `/plan` — research informs planning

> [!CAUTION]
> Governance gate. Complete market research, gap analysis, and ethics review before implementation begins. Approval required.

---

## Critical Rules

1. **RESEARCH FIRST** — no implementation without validated research
2. **EVIDENCE-BASED** — all claims backed by market data or competitor analysis
3. **ETHICS GATE** — privacy, bias, and automation risks must be evaluated
4. **APPROVAL REQUIRED** — present findings to Product Owner before proceeding

---

## Scope Filter

| Task Type                         | Quality Gate Required? |
| :-------------------------------- | :--------------------- |
| `feat()` — new features           | ✅ Required            |
| `refactor()` — structural changes | ✅ Required            |
| `fix()` — bug fixes               | ❌ Skip                |
| `chore()` — maintenance           | ❌ Skip                |
| `docs()` — documentation          | ❌ Skip                |
| `test()` — test additions         | ❌ Skip                |

---

## Steps

Execute IN ORDER. Do not skip any step.

### Step 1: Market Research

// turbo

Research the task domain across minimum 5 market leaders:

- Identify the top competitors for the feature domain
- Document: how is this feature implemented today?
- Document: why did users adopt it? What outcomes does it drive?

### Step 2: Comparative Analysis

// turbo

Produce a comparison table:

| Competitor | Approach | AI/ML Methods | UX Pattern | Automation Level | Data Privacy |
| :--------- | :------- | :------------ | :--------- | :--------------- | :----------- |
| {leader 1} | ...      | ...           | ...        | ...              | ...          |

### Step 3: Gap Detection

// turbo

Identify and document:

- Where your product meets/exceeds market standards
- Where your product is BELOW market level
- Outdated patterns in current/proposed approach
- If the approach uses deceptive, spammy, or harmful patterns → **REJECT**

### Step 4: Enhancement Strategy

// turbo

Define how your product improves upon the market baseline:

- More transparent? (explainable metrics, clear scoring)
- More ethical? (human-in-the-loop, consent-first)
- More user-centric? (measurable funnel insights)
- More data-sovereign? (local-first processing, user-owned data)
- More accurate? (semantic analysis over keyword matching)

**Rule:** Never replicate without improvement.

### Step 5: Ethics, Bias & Automation Safety

// turbo

Evaluate:

- Privacy implications (GDPR, personal data handling)
- AI bias risks in scoring, matching, or recommendations
- Automation safety (rate limiting, anti-spam, ToS compliance)
- User autonomy (human-in-the-loop preserved?)
- Mitigation strategies for each identified risk

### Step 6: Research Summary

// turbo

Compile findings into a research report:

1. Research summary (from Steps 1-5)
2. Key insights extracted
3. Risks of weak approaches
4. Proposed solution
5. Why this approach is superior
6. Dependencies and blockers

### Step 7: Present for Approval

Present the Research Report to the Product Owner via `notify_user`.
**Implementation may NOT begin until explicit approval is received.**
After approval, proceed to `/plan` for structured task planning.

---

## Output Template

```markdown
# Quality Gate Report: [Feature Name]

> Date: [date] · Author: Antigravity AI Kit

## Market Research (≥5 competitors)

| Competitor | Approach | AI/ML | UX Pattern | Automation | Privacy |
| :--------- | :------- | :---- | :--------- | :--------- | :------ |
| [leader]   | ...      | ...   | ...        | ...        | ...     |

## Gap Analysis

| Area | Current State | Market Standard | Gap? |
| :--- | :------------ | :-------------- | :--- |
| [area] | [state] | [standard] | ✅/⚠️/❌ |

## Enhancement Strategy

[How we improve upon the market baseline]

## Ethics & Safety Review

| Risk | Assessment | Mitigation |
| :--- | :--------- | :--------- |
| [risk] | [level] | [strategy] |

## Verdict

✅ Approved / ❌ Rejected — [reasoning]

After approval: proceed to `/plan` for implementation planning.
```

---

## Rejection Triggers

If any of these conditions are met, **REJECT** the task:

1. ❌ No market research for this feature domain
2. ❌ Approach uses outdated or harmful patterns
3. ❌ Solution is below market standard
4. ❌ Ethics/privacy/automation risks unmitigated
5. ❌ "Just implement it" without research justification

---

## Governance

**PROHIBITED:** Implementing without research · skipping competitor analysis · ignoring ethics review · proceeding without approval · marking research "complete" without evidence

**REQUIRED:** Minimum 5 competitors analyzed · enhancement over baseline documented · all risks mitigated · Product Owner approval

---

## Completion Criteria

- [ ] Market research completed (≥5 competitors)
- [ ] Comparative analysis table produced
- [ ] Gap detection documented
- [ ] Enhancement strategy defined (improvement over baseline)
- [ ] Ethics/bias/automation review completed
- [ ] Research report saved as artifact
- [ ] Presented to Product Owner and approved

## Related Resources

- **Previous**: `/brainstorm` (explore options before validation)
- **Next**: `/plan` (implementation planning after approval)
- **Related**: `/retrospective` (post-sprint audit applies similar rigor)
- **Skill**: `.agent/skills/brainstorming/SKILL.md` (Socratic questioning patterns)
