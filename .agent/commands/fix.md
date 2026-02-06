---
description: Fix linting, type errors, or compilation issues
---

# /fix Command

Automatically identify and fix code quality issues.

## Usage

```
/fix                    # Fix current file
/fix <path>            # Fix specific file or directory
/fix lint              # Fix linting errors
/fix types             # Fix TypeScript errors
```

## Examples

```
/fix src/services/
/fix ESLint errors in utils
/fix TypeScript errors in api module
```

## Process

1. Run diagnostic tools
2. Identify issues
3. Apply automatic fixes
4. Manual fixes for remaining issues
5. Verify all issues resolved
