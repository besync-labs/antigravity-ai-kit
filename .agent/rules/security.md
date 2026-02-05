# Security Rules

> **Priority**: CRITICAL — Inviolable

---

## Secrets Management

- **NEVER** hardcode secrets in source code
- **ALWAYS** use environment variables
- **BLOCK** commits containing `sk-`, `api_key`, `password=`

## Input Validation

- **ALWAYS** validate user input with Zod or similar
- **NEVER** trust client-side data
- **SANITIZE** all input before use

## Authentication

- **REQUIRE** authentication on all sensitive endpoints
- **IMPLEMENT** rate limiting (5 attempts/minute)
- **ROTATE** tokens on logout

## Data Protection

- **ENCRYPT** PII at rest
- **USE** HTTPS for all connections
- **MINIMIZE** data collection
