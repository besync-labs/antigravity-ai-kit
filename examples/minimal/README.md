# Antigravity AI Kit: Minimal Example

> A minimal example showing how to get started with Antigravity AI Kit in any project.

## What This Example Shows

This example demonstrates the **minimum viable setup** to start using Antigravity AI Kit in a project:

1. Session management (start/end protocols)
2. Basic workflow usage (`/plan`, `/implement`, `/verify`)
3. Agent routing (automatic specialist selection)

## Setup

```bash
# Install Antigravity AI Kit into your project
npx antigravity-ai-kit init

# Verify installation
npx antigravity-ai-kit status
```

## Directory Structure

After running `ag-kit init`, your project will have:

```
your-project/
├── .agent/
│   ├── agents/          # 19 specialist AI agents
│   ├── commands/        # 31 slash commands
│   ├── skills/          # 28 domain skills
│   ├── workflows/       # 11 workflow templates
│   ├── checklists/      # Quality gates
│   ├── engine/          # Autonomy engine (state machine + loading rules)
│   ├── hooks/           # Event automation
│   ├── rules.md         # Governance contract
│   ├── manifest.json    # Capability registry
│   └── session-context.md  # Session handoff notes
├── .githooks/
│   └── pre-commit       # Secret detection
└── your code...
```

## Quick Start Workflows

### 1. Plan a Feature

```
/plan add user authentication
```

The AI will:
- Ask 3+ Socratic questions to clarify requirements
- Create a structured implementation plan
- Wait for your approval before coding

### 2. Build the Feature

```
/create authentication system
```

The AI will:
- Route to the right specialists (security-reviewer, backend-specialist, tdd-guide)
- Follow the plan step by step
- Run quality gates before completing

### 3. Debug an Issue

```
/debug login returns 401 after token refresh
```

The AI will:
- Activate DEBUG mode (systematic investigation)
- Form hypothesis → test → verify
- Provide root cause + fix + prevention

### 4. Deploy

```
/deploy check
/deploy production
```

The AI will:
- Run pre-deployment checklist
- Build and verify
- Deploy to your configured platform

## Session Management

Every work session follows the Trust-Grade protocol:

1. **Session Start**: AI loads your project context, checks git status, reads roadmap
2. **Work**: AI assists with your task using relevant agents and skills
3. **Session End**: AI updates tracking files, extracts patterns, creates handoff notes

## Next Steps

- See `examples/full-stack/` for a complete project example
- Read `.agent/rules.md` to understand the governance contract
- Try `/brainstorm` to explore ideas before implementing
