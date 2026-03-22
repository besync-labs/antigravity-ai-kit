# Contributing to Antigravity AI Kit

Thank you for your interest in contributing to **Antigravity AI Kit**!

## Getting Started

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/antigravity-ai-kit.git
   cd antigravity-ai-kit
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Run tests** to verify everything works:
   ```bash
   npm test
   ```

## GitFlow Branching Strategy

We use **GitFlow** with `dev` as the integration branch and `main` as the production branch.

```
main (production — releases only)
 └── dev (integration — all features merge here)
      ├── feat/your-feature
      ├── fix/your-bugfix
      └── docs/your-docs
```

### Branch Rules

| Branch Type | Base | Target | Example |
|:---|:---|:---|:---|
| `feat/*` | `dev` | `dev` | `feat/add-python-agent` |
| `fix/*` | `dev` | `dev` | `fix/cli-init-error` |
| `refactor/*` | `dev` | `dev` | `refactor/loading-engine` |
| `docs/*` | `dev` | `dev` | `docs/update-readme` |
| `chore/*` | `dev` | `dev` | `chore/bump-deps` |
| `hotfix/*` | `main` | `main` + `dev` | `hotfix/security-patch` |

**Important**: Always create your branch from `dev`, not `main`. PRs should target `dev`.

### Creating a Feature Branch

```bash
git checkout dev
git pull origin dev
git checkout -b feat/your-feature-name
```

## Development Workflow

1. **Create branch** from `dev` (see above)
2. **Make changes** and commit with conventional messages
3. **Run tests**: `npm test`
4. **Push** your branch: `git push -u origin feat/your-feature-name`
5. **Create PR** targeting `dev`
6. **Wait** for CI checks and reviewer approval
7. **Squash-merge** into `dev`

### Commit Messages

We follow **Conventional Commits**:

```
feat(agents): add python-specialist agent
fix(cli): handle missing .agent directory gracefully
docs(readme): update skills count to 35
test(security): add injection scan for new patterns
chore(deps): update vitest to 3.x
```

### Running Tests

```bash
npm test                           # Run all tests
npx vitest run --reporter=verbose  # Verbose output
npx vitest watch                   # Watch mode
```

Test suites:
- **Unit tests** (`tests/unit/`) — CLI command tests
- **Structural tests** (`tests/structural/`) — Inventory + schema validation
- **Security tests** (`tests/security/`) — Injection scan + leakage detection

### Quality Checks

Before submitting a PR, ensure:
- [ ] All tests pass (`npm test`)
- [ ] No hardcoded secrets
- [ ] Counts are synchronized (manifest, README, CheatSheet, CLI)
- [ ] New agents/skills include YAML frontmatter
- [ ] PR title uses conventional commit format

## Adding New Components

### Adding an Agent

1. Create `.agent/agents/your-agent.md` with frontmatter:
   ```markdown
   ---
   name: your-agent
   description: What this agent does
   triggers: [keyword1, keyword2]
   ---
   # Your Agent
   Instructions...
   ```
2. Add entry to `.agent/manifest.json`
3. Update count in `README.md`, `.agent/CheatSheet.md`, `bin/ag-kit.js`
4. Run `npm test` to verify structural integrity

### Adding a Skill

1. Create `.agent/skills/your-skill/SKILL.md` with frontmatter
2. Add entry to `.agent/manifest.json`
3. Update counts everywhere (see Adding an Agent, step 3)
4. Run `npm test`

### Adding a Workflow

1. Create `.agent/workflows/your-workflow.md` with frontmatter
2. Add entry to `.agent/manifest.json`
3. Update counts
4. Run `npm test`

## Release Process

Releases follow the GitFlow release cycle:

1. All features merged into `dev` and stable
2. Create release PR: `dev` → `main` with title `release: vX.Y.Z`
3. CI checks pass, human review approved
4. Merge into `main`
5. Tag: `git tag vX.Y.Z`
6. Publish: `npm publish`
7. Merge `main` back into `dev`

## Code Standards

- **Zero dependencies** — the core kit uses only Node.js built-ins
- **Strict type safety** — use JSDoc annotations for all functions
- **Descriptive names** — no abbreviations
- **Max file length** — 800 lines per file, 50 lines per function

## Pull Request Process

1. Create a PR against `dev` (not `main`)
2. Fill in the PR template completely
3. Ensure all CI checks pass
4. Wait for reviewer approval (gemini-code-assist + human)
5. Squash-merge after approval

## Questions?

Open an [issue](https://github.com/besync-labs/antigravity-ai-kit/issues) or start a [discussion](https://github.com/besync-labs/antigravity-ai-kit/discussions).
