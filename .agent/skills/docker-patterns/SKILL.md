---
name: docker-patterns
description: Docker and containerization best practices
triggers: [context, docker, container, devops]
---

# Docker Patterns Skill

> **Purpose**: Apply Docker best practices for containerization

---

## Overview

This skill provides patterns for building efficient, secure Docker images and orchestrating containers.

---

## Dockerfile Best Practices

### Multi-Stage Build

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]
```

### Layer Optimization

```dockerfile
# ❌ Bad - cache invalidated on any file change
COPY . .
RUN npm install

# ✅ Good - dependencies cached separately
COPY package*.json ./
RUN npm ci
COPY . .
```

---

## Security

### Non-Root User

```dockerfile
# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

### Minimal Base Image

```dockerfile
# ✅ Use alpine variants
FROM node:20-alpine

# ✅ Or distroless
FROM gcr.io/distroless/nodejs20-debian12
```

---

## Docker Compose

### Development Setup

```yaml
version: "3.8"

services:
  app:
    build:
      context: .
      target: development
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    depends_on:
      - db
      - redis

  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: app_dev
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

---

## Health Checks

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1
```

---

## .dockerignore

```
node_modules
npm-debug.log
.git
.env
.env.*
dist
coverage
.DS_Store
*.md
!README.md
```

---

## Quick Reference

| Pattern       | Purpose           |
| :------------ | :---------------- |
| Multi-stage   | Smaller images    |
| Alpine base   | Minimal footprint |
| Non-root user | Security          |
| Layer caching | Faster builds     |
| Health checks | Orchestration     |
| .dockerignore | Exclude files     |
| Compose       | Local development |
