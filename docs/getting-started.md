# Getting Started

Get up and running with Antigravity AI Kit in 2 minutes.

---

## Installation

### Option 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/besync-labs/antigravity-ai-kit.git

# Copy .agent/ to your project
cp -r antigravity-ai-kit/.agent/ your-project/.agent/
```

### Option 2: Download .agent/ Only

Download just the `.agent/` folder from the repository and place it in your project root.

---

## First Session

1. Open your project in Antigravity IDE
2. Run the status command:

```
/status
```

You should see:

```
📊 Session Status
├── Active: Yes
├── Context: Loaded
└── Ready for commands
```

---

## Basic Workflow

### 1. Plan Your Feature

```
/plan Add user authentication
```

The Planner agent creates a detailed implementation plan.

### 2. Review the Plan

Review the generated plan in your working directory.

### 3. Implement

```
/implement
```

### 4. Verify

```
/verify
```

Runs all quality gates: build, lint, test, coverage.

---

## Next Steps

- Explore [Agents](agents/index.md) — 10 specialized AI agents
- Learn [Commands](commands/index.md) — 20 slash commands
- Understand [Governance](governance/index.md) — Operating constraints
