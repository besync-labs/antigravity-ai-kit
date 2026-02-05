---
description: Add or update features in existing application. Iterative development.
---

# /enhance - Update Application

$ARGUMENTS

---

## Task

Add features or make updates to an existing application.

### Steps

1. **Understand Current State**
   - Explore project structure
   - Understand existing features, tech stack

2. **Plan Changes**
   - Determine what will be added/changed
   - Detect affected files
   - Check dependencies

3. **Present Plan** (for major changes)

   ```
   "To add admin panel:
   - I'll create 15 new files
   - Update 8 files
   - Takes ~10 minutes

   Should I start?"
   ```

4. **Apply Changes**
   - Call relevant agents
   - Make changes
   - Test

5. **Verify**
   - Run tests
   - Check build

---

## Examples

```
/enhance add dark mode
/enhance build admin panel
/enhance integrate payment system
/enhance add search feature
/enhance edit profile page
/enhance make responsive
```

---

## Caution

- **Get approval** for major changes
- **Warn on conflicts** (e.g., "use Firebase" when project uses PostgreSQL)
- **Preserve existing** functionality — don't break what works
