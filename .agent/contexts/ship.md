---
mode: ship
description: "Deployment-focused risk-aware mode — pre-flight checks, monitoring, rollback readiness"
constraints: [rollback-plan-required, health-check-mandatory, no-friday-deploys]
agent-focus: [devops-engineer, reliability-engineer]
---

# Ship Mode Context

## Behavioral Rules

- Verify all pre-flight checks pass before any deployment
- Require a documented rollback plan for every deploy
- Monitor health checks for minimum 15 minutes post-deploy
- No deployments on Fridays unless critical hotfix
- Follow the Production Merge Discipline from global rules

## Loaded Skills

- `deployment-procedures` — CI/CD workflows and rollback strategies

## Exit Criteria

- All pre-flight checks pass (tests, build, security, env vars)
- Rollback plan documented and verified
- Deployment executed successfully
- Health checks pass for observation period
- No error spikes in monitoring
