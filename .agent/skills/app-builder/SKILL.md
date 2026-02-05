---
name: app-builder
description: Application scaffolding orchestrator. Creates full-stack applications from requirements, selects tech stack, coordinates agents.
version: 1.0.0
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Agent
---

# App Builder — Application Building Orchestrator

> Analyzes requirements, determines tech stack, plans structure, and coordinates agents.

---

## 🎯 Process Overview

```
User Request → Analyze → Select Stack → Plan → Scaffold → Coordinate → Verify
```

---

## 📦 BeSync Default Stack

| Layer            | Technology                    | Alternative |
| ---------------- | ----------------------------- | ----------- |
| **Web Frontend** | Next.js 14+                   | Nuxt 3      |
| **Mobile**       | Expo (React Native)           | Flutter     |
| **Backend**      | NestJS                        | FastAPI     |
| **Database**     | PostgreSQL + Prisma           | Supabase    |
| **Auth**         | NextAuth / Firebase Auth      | Clerk       |
| **Hosting**      | Vercel                        | Firebase    |
| **Storage**      | Cloudinary / Firebase Storage | S3          |

---

## 🔗 Agent Coordination

| Agent               | Role                         | When to Invoke               |
| ------------------- | ---------------------------- | ---------------------------- |
| `planner`           | Task breakdown, dependencies | Starting any project         |
| `architect`         | System design, patterns      | Architecture decisions       |
| `code-reviewer`     | Quality, patterns            | After implementation         |
| `security-reviewer` | Security posture             | Auth, payment features       |
| `tdd-guide`         | Test specifications          | Before/during implementation |

---

## 📋 Project Type Detection

| Keywords                          | Project Type      | Default Stack           |
| --------------------------------- | ----------------- | ----------------------- |
| "web app", "website", "dashboard" | Web Application   | Next.js + Prisma        |
| "mobile app", "iOS", "Android"    | Mobile App        | Expo + NestJS API       |
| "API", "backend", "server"        | API Service       | NestJS + Prisma         |
| "landing page", "marketing"       | Static Site       | Next.js (static export) |
| "CLI", "command line"             | CLI Tool          | Node.js + Commander     |
| "extension", "plugin"             | Browser Extension | Chrome MV3              |

---

## 🏗️ Scaffolding Process

### Step 1: Clarify Requirements

```markdown
Before scaffolding, confirm:

1. Project type (web/mobile/API/etc.)
2. Core features (3-5 max for MVP)
3. Auth requirements (none/social/email)
4. Database needs (none/simple/complex)
```

### Step 2: Create Plan

```markdown
## Project Plan: [Name]

### Core Features

1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

### Tech Stack

- Frontend: [choice]
- Backend: [choice]
- Database: [choice]

### File Structure

[directory tree]

### Implementation Order

1. Setup & configuration
2. Database schema
3. API endpoints
4. Frontend pages
5. Authentication
6. Testing
```

### Step 3: Scaffold

```bash
# Example: Next.js project
npx create-next-app@latest ./project-name \
  --typescript \
  --eslint \
  --tailwind \
  --app \
  --src-dir
```

### Step 4: Coordinate Agents

```
1. Invoke planner → Task breakdown
2. Invoke architect → Design decisions
3. Execute tasks sequentially
4. Invoke tdd-guide → Add tests
5. Invoke code-reviewer → Final review
```

---

## 📁 Standard Directory Structures

### Next.js Full-Stack

```
src/
├── app/              # Pages & routes
│   ├── api/          # API routes
│   └── (auth)/       # Auth pages
├── components/       # React components
├── lib/              # Utilities
├── server/           # Server-side logic
│   ├── db/           # Prisma client
│   └── services/     # Business logic
└── types/            # TypeScript types
```

### NestJS API

```
src/
├── modules/          # Feature modules
│   ├── auth/
│   ├── users/
│   └── [feature]/
├── common/           # Shared utilities
│   ├── decorators/
│   ├── guards/
│   └── interceptors/
└── config/           # Configuration
```

### Expo Mobile

```
src/
├── app/              # Expo Router screens
├── components/       # UI components
├── hooks/            # Custom hooks
├── services/         # API clients
├── stores/           # Zustand stores
└── utils/            # Helpers
```

---

## ✅ Post-Scaffold Checklist

- [ ] Dependencies installed
- [ ] Environment variables documented
- [ ] README updated
- [ ] Git initialized
- [ ] Basic tests passing
- [ ] Development server runs

---

## Usage Example

```
User: "Create a task management app with user auth"

App Builder Process:
1. Project type: Web Application
2. Tech stack: Next.js + Prisma + NextAuth
3. Create plan:
   ├─ Database schema (users, tasks, lists)
   ├─ API routes (CRUD for tasks)
   ├─ Pages (dashboard, tasks, settings)
   └─ Components (TaskCard, TaskList, etc.)
4. Scaffold project
5. Coordinate agents for implementation
6. Run verification loop
```
