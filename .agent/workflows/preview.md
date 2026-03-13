---
description: Preview server management. Start, stop, and check local development server.
version: 2.1.0
sdlc-phase: build
skills: [shell-conventions]
commit-types: [chore]
---

# /preview — Preview Server Management

> **Trigger**: `/preview [sub-command]`
> **Lifecycle**: Build — during development

> [!NOTE]
> This is a utility workflow for managing local development servers. Server operations are interactive and require user confirmation.

> [!TIP]
> Skill reference: `.agent/skills/shell-conventions/SKILL.md` — PowerShell/Bash conventions for server commands

---

## Critical Rules

1. **Auto-detect project type** — determine the correct dev server command from config files
2. **Handle port conflicts** — detect and resolve port collisions gracefully
3. **No background orphans** — always track running servers and provide stop commands
4. **Platform-aware** — support web (Next.js, Vite), mobile (Expo), and API (NestJS) projects

---

## Argument Parsing

| Command | Action |
| :-------------------- | :----------------------------------------------- |
| `/preview` | Show current server status |
| `/preview start` | Start the development server |
| `/preview stop` | Stop the running server |
| `/preview restart` | Restart the server |

---

## Steps

// turbo
1. **Detect Project Type**
   - Scan for config files (`package.json`, `next.config.*`, `vite.config.*`, `app.json`, etc.)
   - Determine the correct dev server command
   - Identify the default port

// turbo
2. **Check Current State**
   - Is a server already running?
   - Is the target port available?
   - Are dependencies installed?

3. **Execute Command**
   - **Start**: Launch the dev server with the detected command
   - **Stop**: Terminate the running server process
   - **Restart**: Stop then start
   - **Status**: Report current server state

4. **Handle Port Conflicts** (if applicable)
   - Offer options: use alternate port, close conflicting process, or specify custom port
   - Wait for user choice before proceeding

---

## Project Type Detection

| Project Type | Config File | Command | Default Port |
| :----------- | :----------------- | :------------------ | :----------- |
| Next.js | `next.config.*` | `npm run dev` | 3000 |
| Vite | `vite.config.*` | `npm run dev` | 5173 |
| Expo | `app.json` | `npx expo start` | 8081 |
| NestJS | `nest-cli.json` | `npm run start:dev` | 3000 |
| Python/Django | `manage.py` | `python manage.py runserver` | 8000 |
| Python/FastAPI | `main.py` | `uvicorn main:app --reload` | 8000 |

---

## Output Template

### Server Started

```markdown
## 🚀 Preview Server

- **Project**: [name]
- **Type**: [framework]
- **URL**: http://localhost:[port]
- **Status**: 🟢 Running

Stop with `/preview stop` or restart with `/preview restart`.
```

### Port Conflict

```markdown
## ⚠️ Port Conflict

Port [port] is already in use.

1. Start on port [alt-port]
2. Close the process using port [port]
3. Specify a different port

Which option? (default: 1)
```

---

## Governance

**PROHIBITED:**
- Starting servers without detecting the project type
- Leaving orphaned server processes
- Auto-running server commands without user awareness
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- Project type detection before starting
- Port conflict resolution
- Clean process management (track running servers)

---

## Completion Criteria

- [ ] Project type is detected
- [ ] Server command is correct for the detected stack
- [ ] Port conflicts are resolved (if any)
- [ ] Server is running and accessible (for start command)
- [ ] Server is stopped cleanly (for stop command)

---

## Related Resources

- **Previous**: `/create` (after scaffolding, preview the result) · `/enhance` (verify changes visually)
- **Cross-cutting**: Available during any Build phase activity
