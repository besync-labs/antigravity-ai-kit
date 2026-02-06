---
description: Generate changelog from commits
---

# /changelog Command

Generate or update changelog from git history.

## Usage

```
/changelog             # Generate from recent commits
/changelog <version>   # Changelog for specific version
```

## Examples

```
/changelog
/changelog v1.2.0
/changelog since last release
```

## Output Format

```markdown
## [1.2.0] - 2026-02-06

### Added

- New user profile feature

### Changed

- Updated authentication flow

### Fixed

- Login error handling
```
