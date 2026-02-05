---
description: Display project and progress status. Current state overview.
---

# /status - Show Status

$ARGUMENTS

---

## Task

Show current project and task status.

### What It Shows

1. **Project Info**
   - Project name and path
   - Tech stack detected
   - Current features

2. **Progress Status**
   - Completed tasks
   - In-progress tasks
   - Pending work

3. **File Statistics**
   - Files created/modified
   - Recent changes

4. **Health Check**
   - Build status
   - Test status
   - Server status (if running)

---

## Output Format

```markdown
=== Project Status ===

📁 Project: my-app
📂 Path: /projects/my-app
🏷️ Type: Next.js + NestJS + PostgreSQL

---

🔧 Tech Stack:
Framework: Next.js
Backend: NestJS
Database: PostgreSQL
Auth: Clerk

---

✅ Completed (5):
• Initial setup
• Database schema
• Auth integration
• API endpoints
• Core pages

🔄 In Progress (1):
• User dashboard (70%)

⏳ Pending (2):
• Admin panel
• Email notifications

---

📊 Statistics:
Files created: 47
Files modified: 12
Tests passing: 24/24

---

💚 Health: All systems OK
```

---

## Examples

```
/status
/status brief
/status health
```
