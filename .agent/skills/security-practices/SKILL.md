---
name: security-practices
description: Application security best practices and vulnerability prevention
triggers: [context, security, auth, vulnerability]
---

# Security Practices Skill

> **Purpose**: Apply security best practices to protect applications

---

## Overview

This skill provides security guidelines following OWASP standards and industry best practices.

---

## Authentication

### Password Security

```typescript
// ✅ Use bcrypt with cost factor 12
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
```

### JWT Best Practices

```typescript
// Short-lived access tokens
const accessToken = jwt.sign(payload, SECRET, { expiresIn: "15m" });

// Longer-lived refresh tokens (stored securely)
const refreshToken = jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: "7d" });
```

---

## Input Validation

### Never Trust User Input

```typescript
// ❌ SQL Injection vulnerable
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ✅ Parameterized query
const user = await prisma.user.findUnique({ where: { id: userId } });
```

### Sanitize Output

```typescript
// ❌ XSS vulnerable
element.innerHTML = userInput;

// ✅ Escape HTML
import DOMPurify from "dompurify";
element.innerHTML = DOMPurify.sanitize(userInput);
```

---

## OWASP Top 10 Checklist

| Risk                     | Mitigation                           |
| :----------------------- | :----------------------------------- |
| **Injection**            | Parameterized queries, ORMs          |
| **Broken Auth**          | Strong passwords, MFA, rate limiting |
| **Sensitive Data**       | Encryption at rest/transit, HTTPS    |
| **XXE**                  | Disable XML external entities        |
| **Broken Access**        | Verify permissions on every request  |
| **Misconfig**            | Security headers, remove defaults    |
| **XSS**                  | Sanitize output, CSP headers         |
| **Insecure Deserialize** | Validate input types                 |
| **Components**           | Keep dependencies updated            |
| **Logging**              | Log security events, monitor         |

---

## Security Headers

```typescript
// Express/NestJS helmet middleware
app.use(helmet());

// Or manually:
res.setHeader("X-Content-Type-Options", "nosniff");
res.setHeader("X-Frame-Options", "DENY");
res.setHeader("X-XSS-Protection", "1; mode=block");
res.setHeader(
  "Strict-Transport-Security",
  "max-age=31536000; includeSubDomains",
);
res.setHeader("Content-Security-Policy", "default-src 'self'");
```

---

## Secrets Management

```bash
# ❌ Never commit secrets
# .env file with API_KEY=sk-1234...

# ✅ Use environment variables
export API_KEY=$(vault read secret/api-key)

# ✅ Use secret managers
# AWS Secrets Manager, HashiCorp Vault, etc.
```

---

## Quick Reference

| Practice     | Implementation        |
| :----------- | :-------------------- |
| Passwords    | bcrypt, Argon2        |
| Tokens       | Short-lived JWT       |
| SQL          | Parameterized queries |
| XSS          | Sanitize, CSP         |
| HTTPS        | TLS 1.3, HSTS         |
| Secrets      | Environment, vaults   |
| Dependencies | npm audit, Snyk       |
| Logging      | Audit trail, no PII   |
