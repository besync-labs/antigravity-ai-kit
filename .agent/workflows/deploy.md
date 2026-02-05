---
description: Production deployment with pre-flight checks, execution, and verification.
---

# /deploy - Production Deployment

$ARGUMENTS

---

## Sub-commands

```
/deploy            - Interactive deployment wizard
/deploy check      - Run pre-deployment checks only
/deploy preview    - Deploy to preview/staging
/deploy production - Deploy to production
/deploy rollback   - Rollback to previous version
```

---

## Pre-Deployment Checklist

```markdown
## 🚀 Pre-Deploy Checklist

### Code Quality

- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] ESLint passing (`npx eslint .`)
- [ ] All tests passing (`npm test`)

### Security

- [ ] No hardcoded secrets
- [ ] Environment variables documented
- [ ] Dependencies audited (`npm audit`)

### Performance

- [ ] Bundle size acceptable
- [ ] No console.log statements
- [ ] Images optimized

### Ready to deploy? (y/n)
```

---

## Deployment Flow

```
/deploy
    │
    ▼
Pre-flight checks
    │
    Pass? ──No──► Fix issues
    │
   Yes
    │
    ▼
Build application
    │
    ▼
Deploy to platform
    │
    ▼
Health check & verify
    │
    ▼
✅ Complete
```

---

## Output Format

### Successful Deploy

```markdown
## 🚀 Deployment Complete

### Summary

- **Version:** v1.2.3
- **Environment:** production
- **Duration:** 47 seconds
- **Platform:** Vercel

### URLs

- 🌐 Production: https://app.example.com
- 📊 Dashboard: https://vercel.com/project

### Health Check

✅ API responding (200 OK)
✅ Database connected
✅ All services healthy
```

### Failed Deploy

```markdown
## ❌ Deployment Failed

### Error

[Error description]

### Resolution

1. [Fix steps]
2. [Verification]
3. Try `/deploy` again

### Rollback Available

Run `/deploy rollback` if needed.
```

---

## Platform Support

| Platform | Command         | Auto-detect |
| -------- | --------------- | ----------- |
| Vercel   | `vercel --prod` | Next.js     |
| Railway  | `railway up`    | NestJS      |
| Expo EAS | `eas build`     | Mobile      |

---

## Examples

```
/deploy
/deploy check
/deploy preview
/deploy production
/deploy rollback
```
