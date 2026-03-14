# Getting Started

Get up and running with Antigravity AI Kit in **30 seconds**.

---

## ⚡ Quick Start

### Option 1: NPX (Recommended)

```bash
npx antigravity-ai-kit init
```

This automatically copies the `.agent/` folder to your project. Done!

> **Tip:** Use `npx antigravity-ai-kit init --force` to overwrite an existing `.agent/` folder.

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

## ✅ Verify Installation

After installing, validate your setup with the built-in CLI checks:

```bash
ag-kit verify     # Manifest integrity check
ag-kit scan       # Security scan
```

Both should return clean results. If they report issues, try reinstalling with `--force`.

---

## First Session

1. Open your project in your AI-powered IDE (VS Code, Cursor, Windsurf, etc.)
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

- **[Agents](agents/index.md)** — 19 specialized AI agents
- **[Commands](commands/index.md)** — 31 slash commands
- **[Skills](skills/index.md)** — 31 domain expertise modules
- **[Workflows](workflows/index.md)** — 14 development workflows
- **[Session Management](session-management.md)** — Never lose context
- **[Governance](governance/index.md)** — Operating constraints
