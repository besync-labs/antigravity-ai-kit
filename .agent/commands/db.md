---
description: Database schema design and migrations
---

# /db Command

Design, modify, or migrate database schemas.

## Usage

```
/db design <entity>    # Design new schema
/db migrate            # Create migration
/db seed               # Create seed data
/db analyze            # Analyze current schema
```

## Examples

```
/db design User entity with relations
/db migrate add email verification fields
/db seed create test users
```

## Output

- Prisma schema updates
- Migration files generated
- Seed scripts created
