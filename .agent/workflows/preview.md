---
description: Preview server management. Start, stop, and check local development server.
---

# /preview - Preview Management

$ARGUMENTS

---

## Task

Manage preview/development server.

### Commands

```
/preview           - Show current status
/preview start     - Start server
/preview stop      - Stop server
/preview restart   - Restart server
```

---

## Usage Examples

### Start Server

```
/preview start

Response:
🚀 Starting preview...
   Port: 3000
   Type: Next.js

✅ Preview ready!
   URL: http://localhost:3000
```

### Status Check

```
/preview

Response:
=== Preview Status ===

🌐 URL: http://localhost:3000
📁 Project: my-app
🏷️ Type: Next.js
💚 Health: OK
```

### Port Conflict

```
/preview start

Response:
⚠️ Port 3000 is in use.

Options:
1. Start on port 3001
2. Close app on 3000
3. Specify different port

Which one? (default: 1)
```

---

## Technical

Commands executed based on project type:

| Project Type | Command             |
| ------------ | ------------------- |
| Next.js      | `npm run dev`       |
| Vite         | `npm run dev`       |
| Expo         | `npx expo start`    |
| NestJS       | `npm run start:dev` |
