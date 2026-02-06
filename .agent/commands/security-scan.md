---
description: Run security audit and vulnerability scan
---

# /security-scan Command

Scan codebase for security vulnerabilities.

## Usage

```
/security-scan                 # Full security audit
/security-scan deps           # Dependency vulnerabilities
/security-scan code           # Code vulnerabilities
/security-scan secrets        # Secret detection
```

## Examples

```
/security-scan
/security-scan Check for hardcoded credentials
/security-scan Review authentication implementation
```

## Checks

- Dependency vulnerabilities (npm audit)
- Hardcoded secrets/credentials
- SQL injection risks
- XSS vulnerabilities
- Authentication weaknesses
- OWASP Top 10 compliance
