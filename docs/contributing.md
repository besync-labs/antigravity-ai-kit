# Contributing

We welcome contributions! Here's how to get started.

---

## Development Workflow

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Run** verification: `/verify`
5. **Submit** a pull request

---

## Guidelines

### Code Quality

- Follow existing patterns and conventions
- Use TypeScript strict mode
- No `any` types
- Document complex logic

### Commits

Use conventional commit format:

```
feat: add new mobile-patterns skill
fix: resolve agent routing issue
docs: update getting-started guide
```

### Pull Requests

- Clear description of changes
- Reference any related issues
- Include verification results
- Update documentation if needed

---

## Adding New Components

### New Agent

1. Create `.agent/agents/agent-name.md`
2. Follow the agent template
3. Add triggers and capabilities
4. Test with relevant workflows

### New Skill

1. Create `.agent/skills/skill-name/SKILL.md`
2. Document patterns and usage
3. Include code examples
4. Test activation keywords

### New Command

1. Create `.agent/commands/command-name.md`
2. Document usage and examples
3. Link to relevant agents/skills
4. Test in development

### New Workflow

1. Create `.agent/workflows/workflow-name.md`
2. Define step-by-step process
3. Include verification steps
4. Test complete lifecycle

---

## Verification

Before submitting, run:

```
/verify
```

This checks:

- ✅ Build passes
- ✅ Lint passes
- ✅ Tests pass
- ✅ No security issues

---

## Questions?

- Open an [issue](https://github.com/besync-labs/antigravity-ai-kit/issues)
- Check existing discussions
- Review the [documentation](https://besync-labs.github.io/antigravity-ai-kit)
