---
description: Structured brainstorming. Explore options before committing to implementation.
version: 2.1.0
sdlc-phase: discover
skills: [brainstorming]
commit-types: [docs]
---

# /brainstorm — Structured Idea Exploration

> **Trigger**: `/brainstorm [topic]`
> **Lifecycle**: Discover — before `/quality-gate` or `/plan`

> [!NOTE]
> This is an exploratory workflow. It produces ideas, not code. All options should be evidence-based.

> [!TIP]
> This workflow leverages the **brainstorming** skill. Read `.agent/skills/brainstorming/SKILL.md` for extended guidance.

---

## Critical Rules

1. **No code** — produce ideas, diagrams, and analysis only
2. **Minimum 3 options** — always present at least 3 approaches
3. **Evidence-based** — support recommendations with reasoning, tradeoffs, and data
4. **Socratic exploration** — ask clarifying questions before generating options
5. **Honest tradeoffs** — never hide complexity or risk to make an option look better
6. **Defer to user** — present options and recommend, but the user decides

---

## Argument Parsing

| Command | Action |
| :---------------------- | :----------------------------------------------- |
| `/brainstorm` | Prompt for topic, then run full exploration |
| `/brainstorm [topic]` | Explore the specified topic directly |

---

## Steps

// turbo
1. **Gather Context**
   - What problem are we solving?
   - Who is the target user?
   - What constraints exist (time, budget, tech stack)?
   - What has already been tried or ruled out?

// turbo
2. **Research & Analyze**
   - Survey existing patterns and solutions in the codebase
   - Identify industry best practices for the problem domain
   - Note relevant constraints from the project architecture

3. **Generate Options**
   - Provide at least 3 distinct approaches
   - Each with pros, cons, effort estimate, and risk level
   - Consider unconventional or hybrid solutions

4. **Compare & Recommend**
   - Summarize tradeoffs in a comparison table
   - Give a clear recommendation with reasoning
   - Ask the user which direction to explore further

---

## Output Template

```markdown
## 🧠 Brainstorm: [Topic]

### Context

[Brief problem statement and constraints]

---

### Option A: [Name]

[Description]

✅ **Pros:** [benefits]
❌ **Cons:** [drawbacks]
📊 **Effort:** Low | Medium | High
⚠️ **Risk:** Low | Medium | High

---

### Option B: [Name]

[Similar format]

---

### Option C: [Name]

[Similar format]

---

### Comparison Matrix

| Criteria     | Option A | Option B | Option C |
| :----------- | :------- | :------- | :------- |
| Effort       |          |          |          |
| Risk         |          |          |          |
| Scalability  |          |          |          |
| Maintainability |       |          |          |

---

## 💡 Recommendation

**Option [X]** because [reasoning].

After selection: proceed to `/quality-gate` for validation or `/plan` for implementation planning.
```

---

## Governance

**PROHIBITED:**
- Writing implementation code during brainstorming
- Presenting fewer than 3 options
- Hiding complexity or risk to bias the recommendation
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- Clarifying questions before generating options
- Evidence-based reasoning for all recommendations
- Comparison matrix for structured decision-making
- User confirmation before proceeding to next workflow

---

## Completion Criteria

- [ ] Problem statement and constraints are clearly documented
- [ ] At least 3 distinct options are presented with pros/cons
- [ ] Comparison matrix is included
- [ ] Recommendation is given with reasoning
- [ ] User has selected a direction
- [ ] After selection: proceed to `/quality-gate` for validation or `/plan` for planning

---

## Related Resources

- **Next**: `/quality-gate` (validate selected approach) · `/plan` (create implementation plan)
- **Skill**: `.agent/skills/brainstorming/SKILL.md`
- **Mode**: Activates BRAINSTORM behavioral mode (see `.agent/skills/behavioral-modes/SKILL.md`)
