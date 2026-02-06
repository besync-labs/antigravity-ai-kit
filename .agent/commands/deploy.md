---
description: Deploy application to target environment
---

# /deploy Command

Deploy application to specified environment.

## Usage

```
/deploy                # Deploy to default (staging)
/deploy <env>          # Deploy to specific environment
```

## Examples

```
/deploy
/deploy staging
/deploy production
```

## Environments

- **development**: Local docker
- **staging**: Preview deployment
- **production**: Live deployment

## Process

1. Run verification
2. Build production bundle
3. Push to target environment
4. Run health checks
5. Report status
