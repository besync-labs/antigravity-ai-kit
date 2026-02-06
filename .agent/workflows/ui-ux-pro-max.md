---
description: Premium UI/UX design and implementation workflow
---

# /ui-ux-pro-max Workflow

> **Purpose**: Create stunning, professional-grade user interfaces

---

## Design Philosophy

### Core Principles

1. **Visual Excellence** — Premium look and feel
2. **User-Centric** — Intuitive navigation
3. **Accessibility** — WCAG 2.1 AA compliant
4. **Performance** — Smooth 60fps animations

---

## Workflow Steps

### 1. Design System Check

- Existing color palette?
- Typography scale?
- Spacing system?
- Component library?

### 2. Layout Structure

```
┌─────────────────────────────────┐
│           Header/Nav            │
├─────────┬───────────────────────┤
│         │                       │
│ Sidebar │    Main Content       │
│         │                       │
├─────────┴───────────────────────┤
│             Footer              │
└─────────────────────────────────┘
```

### 3. Visual Enhancements

#### Colors

```css
/* Modern color palette */
--primary: hsl(230, 70%, 55%);
--surface: hsl(230, 20%, 10%);
--glass: rgba(255, 255, 255, 0.05);
```

#### Typography

```css
/* Professional type scale */
--font-display: "Inter", system-ui, sans-serif;
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
```

#### Effects

```css
/* Modern effects */
backdrop-filter: blur(12px);
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
border-radius: 12px;
```

### 4. Micro-Interactions

```css
/* Smooth transitions */
transition: all 0.2s ease-out;

/* Hover states */
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### 5. Responsive Design

```css
/* Mobile-first breakpoints */
@media (min-width: 640px) {
  /* sm */
}
@media (min-width: 768px) {
  /* md */
}
@media (min-width: 1024px) {
  /* lg */
}
@media (min-width: 1280px) {
  /* xl */
}
```

---

## Checklist

- [ ] Design system verified
- [ ] Layout structured
- [ ] Colors and typography applied
- [ ] Micro-interactions added
- [ ] Responsive design tested
- [ ] Accessibility verified

---

## Examples

```
/ui-ux-pro-max dashboard layout
/ui-ux-pro-max landing page hero
/ui-ux-pro-max settings page redesign
```
