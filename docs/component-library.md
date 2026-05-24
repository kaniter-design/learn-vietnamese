# Component Library — Learn Vietnamese Web App (v3.0)

> **Phase:** P6 UX/UI Audit & Resolution  
> **Status:** ✅ v3 Redesign Complete  
> **Design Tokens:** `design-tokens.css` + CSS Custom Properties in `index.html`  
> **Date:** 2026-05-24

---

## Table of Contents

1. [Layout & Navigation Components](#1-layout--navigation-components)
2. [Interactive Card Components](#2-interactive-card-components)
3. [Button System](#3-button-system)
4. [Stats & Progress](#4-stats--progress)
5. [Tone System](#5-tone-system)
6. [Audio & Pronunciation Controls](#6-audio--pronunciation-controls)
7. [Onboarding Flow](#7-onboarding-flow)
8. [Settings Components](#8-settings-components)
9. [Roadmap (Node Map)](#9-roadmap-node-map)
10. [Feedback & Notifications](#10-feedback--notifications)

---

## 1. Layout & Navigation Components

### 1.1 App Header (`.app-header`)

Sticky top navigation bar with brand and stats.

```
┌─────────────────────────────────────────┐
│ 🇻🇳 HANOOI     │  🔥 3   💰 100,000  │
│                │  (streak)  (VND)      │
└─────────────────────────────────────────┘
```

- **CSS:** `position: sticky; top: 0; z-index: 40; backdrop-filter: blur(16px)`
- **Sub-elements:**
  - `.hud-brand`: Logo emoji + brand name (Syne font, brand color)
  - `.hud-stats`: Flex row of stat pills
  - `.hud-stat`: Pill badge with emoji + value (`.hud-streak` for fire, `.hud-vnd` for currency)

### 1.2 Bottom Navigation (`.bottom-nav`)

Mobile-first 5-tab navigation bar.

```
┌──────┬──────┬──────┬──────┬──────┐
│ 🗺️    │ 📖   │ 🃏   │ 🎤   │ ⚙️   │
│ แผนที่ │ เรียน │ ทบทวน │ ออกเสียง │ ตั้งค่า│
└──────┴──────┴──────┴──────┴──────┘
```

- **CSS:** `grid-template-columns: repeat(5, 1fr)`, glass background, animated gradient underline indicator
- **States:** 
  - `active`: Brand-dim background + brand text color + translateY(-1px) icon
  - Default: Gray text (#6b7280)
- **Accessibility:** `min-height: 44px`, `focus-visible` outline

### 1.3 Screen Header (`.screen-header`)

Consistent header pattern for sub-screens.

```
┌─────────────────────────────────────┐
│ [🔊]  สัทศาสตร์ Day 0               │
│       ปูพื้นก่อนเรียนจริง             │
└─────────────────────────────────────┘
```

- **Sub-elements:** `.screen-icon` (2.5rem, brand-dim bg), `.screen-title` (Syne 700), `.screen-subtitle` (muted)

---

## 2. Interactive Card Components

### 2.1 Standard Card (`.card`)

Primary content card with surface background.

```
┌─────────────────────────────────────┐
│  Content area                       │
│  (padding: 1.25rem)                │
└─────────────────────────────────────┘
```

- **CSS:** `background: var(--bg-surface); border-radius: 16px; border: 1px solid rgba(255,255,255,0.06)`
- **Hover:** Subtle lift effect (via `.rpg-card`, `.hud-card` base styles)

### 2.2 Inner Card (`.card-inner`)

Nested card for visual hierarchy within a `.card`.

- **CSS:** `background: var(--bg-raised); border-radius: 12px; padding: 1rem`

### 2.3 Glass Hierarchy

Three levels of glass depth:

| Class | Background | Backdrop |
|-------|-----------|----------|
| `.glass-1` | `rgba(9, 13, 22, 0.5)` | `blur(4px)` |
| `.glass-2` | `rgba(9, 13, 22, 0.65)` | `blur(12px)` |
| `.glass-3` | `rgba(9, 13, 22, 0.8)` | `blur(24px)` |

---

## 3. Button System

Three variants with unified interaction patterns:

### 3.1 Primary Button (`.btn-primary`)

Full-width call-to-action button.

- **CSS:** `background: var(--brand); border-radius: 12px; font-weight: 600`
- **Hover:** Lighten brand + glow shadow + translateY(-1px)
- **Active:** `scale(0.97)`

### 3.2 Ghost Button (`.btn-ghost`)

Secondary action button with subtle border.

- **CSS:** `background: var(--bg-raised); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px`
- **Hover:** Brighter text + border

### 3.3 Choice Button (`.btn-choice`)

Quiz/selection button with left-aligned text.

- **CSS:** `background: var(--bg-surface); border-radius: 12px`
- **Hover:** Brand border + left padding shift
- **States:** `.correct` (green border + tint), `.wrong` (red border + tint)

---

## 4. Stats & Progress

### 4.1 Stats Strip (`.stats-strip`)

Horizontal stats display for dashboard/roadmap.

```
┌─────────────────────────────────────────┐
│    🔥 วัน     │   📖 คำ    │  🎯 แม่นยำ  │
│      3        │    42      │    78%     │
└─────────────────────────────────────────┘
```

- **CSS:** `display: flex; justify-content: space-around; background: var(--bg-surface); border-radius: 16px`
- **Divider:** `.stat-divider` (1px vertical line)

### 4.2 Progress Bar (`.progress-fill`)

Animated progress fill with shimmer effect.

- **CSS:** `background: linear-gradient(90deg, #10b981, #34d399, #10b981); background-size: 200% 100%;`
- **Animation:** `progressShimmer` (2.5s linear infinite)

---

## 5. Tone System

### 5.1 Tone Grid (`.tone-grid`)

2-column grid of interactive tone cards.

```
┌─────────────┬─────────────┐
│  Ngang      │  Huyền      │
│  (SVG line) │  (SVG line) │
│  ma = ผี    │  mà = แต่   │
│  🔊 ฟัง     │  🔊 ฟัง     │
├─────────────┼─────────────┤
│  Sắc        │  Hỏi        │
│  ...        │  ...        │
└─────────────┴─────────────┘
```

### 5.2 Tone Card (`.tone-card`)

Individual tone display with SVG contour visualization.

- **Elements:** SVG contour, tone name (colored), example word (VN monospace), meaning, mark, comparison text, play button
- **States:** `.playing` (brand border + glow)

### 5.3 Tone Colors

| Tone | Variable | Color |
|------|----------|-------|
| Ngang | `--tone-1` | #94a3b8 (slate) |
| Huyền | `--tone-2` | #fb923c (orange) |
| Sắc | `--tone-3` | #f87171 (red) |
| Hỏi | `--tone-4` | #fbbf24 (amber) |
| Ngã | `--tone-5` | #c084fc (purple) |
| Nặng | `--tone-6` | #4ade80 (green) |

---

## 6. Audio & Pronunciation Controls

### 6.1 Mic Button (`.mic-btn`)

Circular speech recording trigger.

- **States:**
  - `idle`: Blue border, default size
  - `.listening`: Green border + pulse ring animation
  - `.processing`: Blue border + fast pulse
  - `:disabled`: 40% opacity, no hover

### 6.2 Waveform Box (`.waveform-box`)

Animated sound visualization bars.

- **CSS:** 10 bars with staggered animation delays
- **States:** `.inactive` (short flat bars, gray), active (gradient bars, animated height)

### 6.3 Speech Result Card (`.speech-result`)

Pronunciation feedback display.

- **States:** `.excellent` (green border), `.good` (yellow), `.needs-work` (red)
- **Sub-element:** `.speech-score-ring` — circular score display

---

## 7. Onboarding Flow

### 7.1 Onboarding Screen (`.onboard-step`)

3-step wizard.

- **Step 1:** Welcome — app name + description + CTA
- **Step 2:** Goal selection — `.goal-card` options (travel/business/conversation)
- **Step 3:** Path preview — `.path-item` list of weekly topics

### 7.2 Goal Card (`.goal-card`)

Selectable goal option with emoji + title + description.

- **States:** Selected (brand border + brand-dim bg + glow shadow)

---

## 8. Settings Components

### 8.1 Setting Select (`.setting-select`)

Styled dropdown for TTS engine selection.

- **CSS:** `background: var(--bg-raised); border-radius: 10px; color: var(--text-primary)`

### 8.2 Setting Label (`.setting-label`)

Section label in settings.

- **CSS:** `font-size: 0.8rem; font-weight: 600; color: var(--text-secondary)`

### 8.3 Setting Value (`.setting-value`)

Display-only value (e.g., current goal).

- **CSS:** `font-size: 0.875rem; color: var(--brand); font-weight: 600`

---

## 9. Roadmap (Node Map)

### 9.1 Week Label (`.week-label`)

Section header for each week in the node tree.

- **CSS:** `text-transform: uppercase; letter-spacing: 0.1em; color: var(--brand)`

### 9.2 Node Button (`.node-btn`)

Circular day node in the vertical progression map.

- **States:** 
  - Default: Gray circle with day number
  - `locked`: Grayed, no pointer events
  - `completed`: Emerald tint + checkmark
  - `active`: Brand fill + glow ring

---

## 10. Feedback & Notifications

### 10.1 Toast Container (`#toast-container`)

Fixed bottom-center toast stack.

- **Animation:** `toastEnter` (spring scale-up)
- **Accessibility:** `pointer-events: none` on container, `auto` on children

### 10.2 Skeleton Loader (`.skeleton`)

Shimmer placeholder for loading content.

- **CSS:** `background: linear-gradient(90deg, ...); border-radius: 0.75rem`
- **Animation:** `skeletonShimmer` (1.8s ease-in-out infinite)

### 10.3 Confetti (`.confetti-particle`)

Celebration particles.

- **CSS:** Fixed position, random colors, `confettiFall` animation
- **Accessibility:** Hidden when `prefers-reduced-motion: reduce`

### 10.4 Floating Loss (`.floating-loss`)

Damage VND float text.

- **CSS:** `position: fixed; color: var(--neon-rose)` with `floatAway` animation
- **Accessibility:** Hidden on reduced-motion

---

*Generated: 2026-05-24 | Component Library for v3.0 Neon Night Market Design System*
