---
description: Premium UI/UX design and implementation workflow.
version: 2.1.0
sdlc-phase: build
skills: [ui-ux-pro-max, frontend-patterns, mobile-design]
commit-types: [feat, refactor]
---

# /ui-ux-pro-max — Premium UI/UX Design & Implementation

> **Trigger**: `/ui-ux-pro-max [description]`
> **Lifecycle**: Build — UI/design implementation

> [!IMPORTANT]
> This workflow demands visual excellence. Generic, template-like, or "AI-slop" designs are unacceptable. Every interface must feel premium, intentional, and alive.

> [!TIP]
> This workflow leverages the **ui-ux-pro-max** skill (50+ styles, 21 palettes, 50 font pairings, 20 chart types). Read `.agent/skills/ui-ux-pro-max/SKILL.md` for the full design system catalog.

---

## Critical Rules

1. **Anti-AI-slop** — no generic gradients, no default border-radius everywhere, no cookie-cutter layouts
2. **Premium aesthetics** — curated color palettes (HSL-tuned), modern typography (Google Fonts), smooth micro-animations
3. **WCAG 2.1 AA compliance** — all designs must meet accessibility standards (contrast ratios, keyboard navigation, screen reader support)
4. **Performance-first** — smooth 60fps animations, optimized images, minimal layout shifts
5. **Mobile-first responsive** — design for mobile first, then enhance for larger screens
6. **Design system coherence** — use existing design tokens when available; create consistent ones when not

---

## Steps

// turbo
1. **Design System Audit**
   - Check for existing color palette, typography scale, spacing system
   - Identify component library in use (if any)
   - Note existing design tokens and CSS variables

// turbo
2. **Requirements Analysis**
   - What is being designed? (page, component, layout)
   - What is the target mood/aesthetic? (minimal, bold, glass, etc.)
   - Reference existing brand guidelines or style preferences

3. **Design Implementation**
   - Build the layout structure (semantic HTML)
   - Apply color palette and typography
   - Add spacing, borders, and visual hierarchy
   - Implement responsive breakpoints (mobile-first)

4. **Micro-Interactions & Polish**
   - Add hover states, focus indicators, and transitions
   - Implement loading states and skeleton screens
   - Add subtle animations for engagement (easing, transforms)
   - Verify 60fps performance on animations

5. **Accessibility Verification**
   - Color contrast ratios (≥4.5:1 for text, ≥3:1 for large text)
   - Keyboard navigation (tab order, focus management)
   - Screen reader compatibility (ARIA labels, semantic HTML)
   - Motion reduction support (`prefers-reduced-motion`)

---

## Design Reference

### Color Approach

```css
/* Curated palette — NOT default browser colors */
--primary: hsl(230, 70%, 55%);
--primary-light: hsl(230, 70%, 70%);
--surface: hsl(230, 20%, 10%);
--surface-elevated: hsl(230, 20%, 14%);
--glass: rgba(255, 255, 255, 0.05);
```

### Typography

```css
/* Professional type scale — NOT system defaults */
--font-display: "Inter", "Outfit", system-ui, sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", monospace;
```

### Effects

```css
/* Modern depth and glass */
backdrop-filter: blur(12px);
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
border: 1px solid rgba(255, 255, 255, 0.06);
```

### Responsive Breakpoints

```css
/* Mobile-first progression */
@media (min-width: 640px)  { /* sm  */ }
@media (min-width: 768px)  { /* md  */ }
@media (min-width: 1024px) { /* lg  */ }
@media (min-width: 1280px) { /* xl  */ }
```

---

## Output Template

```markdown
## 🎨 UI/UX: [Component/Page Name]

### Design System

- **Palette**: [palette name or custom HSL values]
- **Typography**: [font pairing]
- **Style**: [minimal | glass | bold | dark | etc.]

### Implementation

| File | Purpose |
| :--- | :------ |
| `path/to/component` | [description] |
| `path/to/styles` | [description] |

### Accessibility

- ✅ Contrast ratios: [pass/fail]
- ✅ Keyboard navigation: [pass/fail]
- ✅ Screen reader: [pass/fail]
- ✅ Reduced motion: [supported]

### Responsive

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

After design: proceed to `/preview` for visual verification or `/test` for component testing.
```

---

## Governance

**PROHIBITED:**
- Generic, template-like designs ("AI-slop")
- Using default browser colors (plain red, blue, green)
- Using default system fonts without intentional typography
- Ignoring accessibility requirements
- Hardcoding pixel values without responsive design
- Skipping failed steps · proceeding without resolution

**REQUIRED:**
- Curated, harmonious color palettes
- Modern typography from established font sources
- WCAG 2.1 AA compliance verification
- Mobile-first responsive implementation
- Micro-animations and hover states for engagement

---

## Completion Criteria

- [ ] Design system is audited (existing tokens identified or created)
- [ ] Layout is implemented with semantic HTML
- [ ] Colors, typography, and spacing are premium-quality
- [ ] Micro-interactions and transitions are smooth (60fps)
- [ ] Accessibility passes WCAG 2.1 AA
- [ ] Responsive design works across breakpoints
- [ ] After design: proceed to `/preview` for visual check or `/test` for component tests

---

## Related Resources

- **Previous**: `/plan` (design requirements defined)
- **Next**: `/preview` (visual verification) · `/test` (component testing)
- **Skill**: `.agent/skills/ui-ux-pro-max/SKILL.md` (50+ styles, 21 palettes, 50 font pairings)
- **Related Skills**: `.agent/skills/frontend-patterns/SKILL.md` · `.agent/skills/mobile-design/SKILL.md`
