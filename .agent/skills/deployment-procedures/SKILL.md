---
name: deployment-procedures
description: Production deployment workflows, rollback strategies, and CI/CD best practices.
version: 1.0.0
allowed-tools: Read, Glob, Grep, Bash
---

# Deployment Procedures

> Every deployment is a risk. Minimize risk through preparation, not speed.

---

## 1. Pre-Deployment Principles

### The 4 Verification Categories

| Category         | What to Check                          |
| ---------------- | -------------------------------------- |
| **Code Quality** | Tests passing, linting clean, reviewed |
| **Build**        | Production build works, no warnings    |
| **Environment**  | Env vars set, secrets current          |
| **Safety**       | Backup done, rollback plan ready       |

### Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Production build successful
- [ ] Environment variables verified
- [ ] Database migrations ready (if any)
- [ ] Rollback plan documented
- [ ] Team notified
- [ ] Monitoring ready

---

## 2. The 5-Phase Deployment Process

```
1. PREPARE
   └── Verify code, build, env vars

2. BACKUP
   └── Save current state before changing

3. DEPLOY
   └── Execute with monitoring open

4. VERIFY
   └── Health check, logs, key flows

5. CONFIRM or ROLLBACK
   └── All good? Confirm. Issues? Rollback.
```

### Phase Principles

| Phase       | Principle                        |
| ----------- | -------------------------------- |
| **Prepare** | Never deploy untested code       |
| **Backup**  | Can't rollback without backup    |
| **Deploy**  | Watch it happen, don't walk away |
| **Verify**  | Trust but verify                 |
| **Confirm** | Have rollback trigger ready      |

---

## 3. Platform-Specific Procedures

### Vercel (BeSync Primary)

```bash
# Preview deploy (automatic on PR)
git push origin feature-branch

# Production deploy
git push origin main
# or
vercel --prod
```

### Firebase

```bash
# Deploy hosting
firebase deploy --only hosting

# Deploy functions
firebase deploy --only functions
```

### Docker/VPS

```bash
# Build and push
docker build -t app:latest .
docker push registry/app:latest

# On server
docker pull registry/app:latest
docker-compose up -d
```

---

## 4. Rollback Strategies

### When to Rollback

| Symptom                 | Action                |
| ----------------------- | --------------------- |
| 5xx errors              | Rollback immediately  |
| Critical feature broken | Rollback              |
| Minor visual bug        | Hotfix forward        |
| Performance degradation | Evaluate, then decide |

### Rollback by Platform

| Platform | Method                                     |
| -------- | ------------------------------------------ |
| Vercel   | Redeploy previous commit, or use dashboard |
| Firebase | `firebase hosting:rollback`                |
| Docker   | Switch to previous image tag               |

---

## 5. Zero-Downtime Strategies

| Strategy   | When to Use                    |
| ---------- | ------------------------------ |
| Blue-Green | Multiple servers, quick switch |
| Rolling    | Gradual, Kubernetes            |
| Canary     | Test with subset of users      |

---

## 6. Anti-Patterns

| ❌ Don't                 | ✅ Do                |
| ------------------------ | -------------------- |
| Deploy on Friday         | Deploy early in week |
| Rush deployment          | Follow the process   |
| Skip staging             | Always test first    |
| Deploy without backup    | Backup before deploy |
| Walk away after deploy   | Monitor for 15+ min  |
| Multiple changes at once | One change at a time |

---

## 7. Decision Checklist

Before deploying:

- [ ] Platform-appropriate procedure?
- [ ] Backup strategy ready?
- [ ] Rollback plan documented?
- [ ] Monitoring configured?
- [ ] Team notified?
- [ ] Time to monitor after?

---

## 8. Best Practices

1. **Small, frequent deploys** over big releases
2. **Feature flags** for risky changes
3. **Automate** repetitive steps
4. **Document** every deployment
5. **Review** what went wrong after issues
6. **Test rollback** before you need it

---

## 9. BeSync Deployment Flow

```
develop → staging (auto) → main → production (auto)
    │          │              │
    └── PR ────┴── Review ────┴── Deploy
```

### Branch Protection

- `main` requires PR approval
- CI must pass before merge
- No force push allowed

---

> **Golden Rule:** If in doubt, don't deploy. Wait, prepare, then deploy.
