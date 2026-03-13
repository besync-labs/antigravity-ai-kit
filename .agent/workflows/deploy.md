---
description: Production deployment with pre-flight checks, execution, and verification.
version: 2.1.0
sdlc-phase: ship
skills: [deployment-procedures]
commit-types: [chore, fix]
---

# /deploy — Production Deployment

> **Trigger**: `/deploy [sub-command]`
> **Lifecycle**: Ship — after `/review` gate passes

> [!CAUTION]
> Deployment impacts production users and consumes platform credits. Every push to `production` triggers builds on hosting platforms (Vercel, Railway, etc.). Never deploy untested code. Always have a rollback plan before deploying.

> [!TIP]
> This workflow leverages the **deployment-procedures** skill. Read `.agent/skills/deployment-procedures/SKILL.md` for extended guidance.

---

## Critical Rules

1. **Rollback plan required** — never deploy without a documented rollback strategy
2. **No test deploys to production** — use preview/staging environments for testing
3. **Cost-awareness** — batch deployments; avoid unnecessary builds that waste credits
4. **Pre-flight must pass** — all quality gates must pass before deployment
5. **Health check mandatory** — verify the deployment is healthy before marking complete
6. **No secrets in logs** — ensure deployment logs don't expose sensitive data

---

## Scope Filter

Only deploy when changes affect **deployed artifacts**:

| Change Type | Affects Production? | Deploy? |
| :-------------------------- | :------------------ | :------ |
| `apps/api/**`, `apps/web/**` | ✅ Yes | ✅ Yes |
| `docker/**`, `railway.toml` | ✅ Yes (infra) | ✅ Yes |
| `docs/**`, `*.md` | ❌ No | ❌ Never |
| `.agent/**`, `.vscode/**` | ❌ No | ❌ Never |
| `.github/**` | ⚠️ CI only | ⚠️ Case-by-case |
| `packages/shared/**` | ⚠️ If consumed | ⚠️ Case-by-case |

---

## Argument Parsing

| Command | Action |
| :-------------------- | :----------------------------------------------- |
| `/deploy` | Interactive deployment wizard |
| `/deploy check` | Run pre-flight checks only |
| `/deploy preview` | Deploy to preview/staging environment |
| `/deploy production` | Deploy to production |
| `/deploy rollback` | Rollback to previous version |

---

## Steps

// turbo
1. **Pre-Flight Checks**
   - Code quality: `npx tsc --noEmit`, `npx eslint .` (or equivalent)
   - Tests: `npm test` (or equivalent)
   - Security: `npm audit`, no hardcoded secrets
   - Build: `npm run build` succeeds
   - Environment: all required variables documented and set

// turbo
2. **Scope Verification**
   - Check which files changed (`git diff --stat`)
   - Apply Scope Filter — abort if changes are docs/config-only
   - Confirm deployment is production-impacting

3. **Rollback Plan**
   - Document current production version/commit
   - Verify rollback command is available and tested
   - Confirm database migration reversibility (if applicable)

4. **Deploy**
   - Build the application
   - Deploy to target platform
   - Monitor deployment progress

// turbo
5. **Health Check & Verify**
   - API responding (HTTP 200)
   - Database connected
   - All critical services healthy
   - No error spikes in monitoring

6. **Post-Deploy**
   - Document deployed version and commit SHA
   - Update status tracking
   - Notify stakeholders if applicable

---

## Output Template

### Successful Deploy

```markdown
## 🚀 Deployment Complete

### Summary

- **Version**: [commit SHA or tag]
- **Environment**: production | preview
- **Duration**: [time]
- **Platform**: [Vercel | Railway | EAS]

### Health Check

✅ API responding (200 OK)
✅ Database connected
✅ All services healthy

### Rollback

If issues arise: `/deploy rollback` to [previous version]

After deploy: proceed to `/status` for monitoring.
```

### Failed Deploy

```markdown
## ❌ Deployment Failed

### Error

[Error description and logs]

### Resolution

1. [Fix steps]
2. Run `/deploy check` to re-validate
3. Retry `/deploy production`

### Rollback Available

Run `/deploy rollback` to restore [previous version].
```

---

## Platform Support

| Platform | Command | Auto-detect |
| :------- | :-------------- | :---------- |
| Vercel | `vercel --prod` | Next.js |
| Railway | `railway up` | NestJS, API |
| Expo EAS | `eas build` | React Native |

---

## Governance

**PROHIBITED:**
- Deploying code that hasn't passed `/review` quality gates
- Using production for testing — use preview environments
- Deploying docs-only or config-only changes to production
- Skipping the rollback plan
- Deploying without health check verification
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- Pre-flight checks passing before any deployment
- Scope verification using the Production-Impact Filter
- Rollback plan documented before deploying
- Health check after every deployment
- Cost-conscious deployment batching

---

## Completion Criteria

- [ ] Pre-flight checks pass (lint, type-check, tests, security, build)
- [ ] Scope Filter confirms production-impacting changes
- [ ] Rollback plan is documented
- [ ] Deployment completes without errors
- [ ] Health check passes (API, database, services)
- [ ] Deployed version is documented
- [ ] After deploy: proceed to `/status` for monitoring

---

## Related Resources

- **Previous**: `/review` (quality gates must pass before deployment)
- **Next**: `/status` (post-deploy monitoring)
- **Skill**: `.agent/skills/deployment-procedures/SKILL.md`
- **Global Rule**: Production Merge Discipline (see global rules)
