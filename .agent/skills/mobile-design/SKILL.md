---
name: mobile-design
description: Mobile UI/UX patterns for iOS and Android. Touch-first, platform-respectful design with React Native/Expo focus.
version: 1.0.0
allowed-tools: Read, Glob, Grep
---

# Mobile Design System

> **Philosophy:** Touch-first. Battery-conscious. Platform-respectful. Offline-capable.
> **Core Principle:** Mobile is NOT a small desktop. THINK mobile constraints, ASK platform choice.

---

## ⚠️ CRITICAL: ASK BEFORE ASSUMING

### You MUST Ask If Not Specified:

- **Platform**: iOS only? Android only? Both?
- **Framework**: React Native/Expo? Flutter?
- **Navigation**: Tab-based? Stack? Drawer?
- **Offline**: Required? Nice-to-have? Not needed?

---

## 📱 Platform Decision Matrix

### When to Unify vs Diverge

```
                    UNIFY (same on both)          DIVERGE (platform-specific)
                    ───────────────────           ──────────────────────────
Business Logic      ✅ Always                     -
Data Layer          ✅ Always                     -
Core Features       ✅ Always                     -

Navigation          -                             ✅ iOS: edge swipe, Android: back button
Gestures            -                             ✅ Platform-native feel
Icons               -                             ✅ SF Symbols vs Material Icons
Date Pickers        -                             ✅ Native pickers feel right
Modals/Sheets       -                             ✅ iOS: bottom sheet vs Android: dialog
Typography          -                             ✅ SF Pro vs Roboto (or custom)
```

### Quick Reference: Platform Defaults

| Element              | iOS                       | Android                    |
| -------------------- | ------------------------- | -------------------------- |
| **Primary Font**     | SF Pro / SF Compact       | Roboto                     |
| **Min Touch Target** | 44pt × 44pt               | 48dp × 48dp                |
| **Back Navigation**  | Edge swipe left           | System back button/gesture |
| **Bottom Tab Icons** | SF Symbols                | Material Symbols           |
| **Action Sheet**     | UIActionSheet from bottom | Bottom Sheet / Dialog      |
| **Progress**         | Spinner                   | Linear progress (Material) |

---

## 🧠 Mobile UX Psychology

### Fitts' Law for Touch

```
Desktop: Cursor is precise (1px)
Mobile:  Finger is imprecise (~7mm contact area)

→ Touch targets MUST be 44-48px minimum
→ Important actions in THUMB ZONE (bottom of screen)
→ Destructive actions AWAY from easy reach
```

### Thumb Zone (One-Handed Usage)

```
┌─────────────────────────────┐
│      HARD TO REACH          │ ← Navigation, menu, back
│        (stretch)            │
├─────────────────────────────┤
│      OK TO REACH            │ ← Secondary actions
│       (natural)             │
├─────────────────────────────┤
│      EASY TO REACH          │ ← PRIMARY CTAs, tab bar
│    (thumb's natural arc)    │ ← Main content interaction
└─────────────────────────────┘
        [  HOME  ]
```

### Mobile-Specific Cognitive Load

| Desktop            | Mobile Difference              |
| ------------------ | ------------------------------ |
| Multiple windows   | ONE task at a time             |
| Keyboard shortcuts | Touch gestures                 |
| Hover states       | NO hover (tap or nothing)      |
| Large viewport     | Limited space, scroll vertical |
| Stable attention   | Interrupted constantly         |

---

## ⚡ React Native/Expo Performance

### FlatList Optimization

```typescript
// ✅ CORRECT: Memoized renderItem + React.memo wrapper
const ListItem = React.memo(({ item }: { item: Item }) => (
  <View style={styles.item}>
    <Text>{item.title}</Text>
  </View>
));

const renderItem = useCallback(
  ({ item }: { item: Item }) => <ListItem item={item} />,
  []
);

// ✅ CORRECT: FlatList with all optimizations
<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}  // Stable ID, NOT index
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={5}
/>
```

### Animation Performance

```
GPU-accelerated (FAST):     CPU-bound (SLOW):
├── transform               ├── width, height
├── opacity                 ├── top, left, right, bottom
└── (use these ONLY)        ├── margin, padding
                            └── (AVOID animating these)
```

---

## 📝 Pre-Development Checklist

### Before Starting ANY Mobile Project

- [ ] Platform(s) confirmed (iOS/Android/Both)
- [ ] Framework chosen (Expo preferred for BeSync)
- [ ] Navigation pattern decided
- [ ] Offline requirements clarified
- [ ] Design system tokens defined

### Before Every Screen

- [ ] Touch targets ≥ 44pt
- [ ] Primary actions in thumb zone
- [ ] Safe area insets handled
- [ ] Both orientations considered (or locked)

### Before Release

- [ ] Performance profiled
- [ ] Memory usage checked
- [ ] Battery impact tested
- [ ] Accessibility verified

---

## 🔗 BeSync Mobile Stack

| Layer      | Technology                       |
| ---------- | -------------------------------- |
| Framework  | Expo (managed workflow)          |
| Navigation | Expo Router                      |
| State      | Zustand + React Query            |
| Storage    | expo-secure-store + AsyncStorage |
| UI         | Custom + NativeWind (if needed)  |

---

## ❌ Mobile Anti-Patterns

| ❌ Don't                    | ✅ Do                     |
| --------------------------- | ------------------------- |
| Assume platform conventions | Ask or detect platform    |
| Use web-style hover states  | Use pressable feedback    |
| Put CTAs at top of screen   | Keep CTAs in thumb zone   |
| Use tiny touch targets      | Minimum 44-48px           |
| Ignore safe areas           | Always respect insets     |
| Over-animate                | Subtle, purposeful motion |
