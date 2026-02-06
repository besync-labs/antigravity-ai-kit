# Getting Started

Get up and running with Antigravity AI Kit in **30 seconds**.

---

## ⚡ Quick Start

### Option 1: NPX (Recommended)

```bash
npx @emredursun/antigravity-ai-kit init
```

This automatically copies the `.agent/` folder to your project. Done!

---

### Option 2: Manual Installation

```bash
# 1. Clone the repository
git clone https://github.com/besync-labs/antigravity-ai-kit.git

# 2. Copy .agent/ to your project
cp -r antigravity-ai-kit/.agent/ your-project/.agent/

# 3. Start your session
/status
```

---

### Option 3: Direct Download

1. Download the `.agent/` folder from [GitHub](https://github.com/besync-labs/antigravity-ai-kit)
2. Place it in your project root
3. Run `/status` in your AI-powered IDE

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

- **[Agents](agents/index.md)** — 17 specialized AI agents
- **[Commands](commands/index.md)** — 31 slash commands
- **[Skills](skills/index.md)** — 26 domain expertise modules
- **[Workflows](workflows/index.md)** — 11 development workflows
- **[Session Management](session-management.md)** — Never lose context
- **[Governance](governance/index.md)** — Operating constraints
