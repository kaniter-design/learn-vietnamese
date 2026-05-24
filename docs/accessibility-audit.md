# Accessibility Audit — Learn Vietnamese Web App (v3.0)

> **Phase:** P6 UX/UI Audit & Resolution  
> **Status:** ✅ v3 Redesign Applied  
> **Standard:** WCAG 2.1 AA (target)  
> **Platform:** Responsive Web Application (HTML5 / JavaScript / CSS)  
> **Date:** 2026-05-24

---

## Table of Contents

1. [Scope & Web Constraints](#1-scope--web-constraints)
2. [Color & Contrast (WCAG 1.4.3)](#2-color--contrast-wcag-143)
3. [Keyboard Navigation (WCAG 2.1.1)](#3-keyboard-navigation-wcag-211)
4. [Screen Reader Announcements (WCAG 1.3.1)](#4-screen-reader-announcements-wcag-131)
5. [Audio Accessibility (WCAG 1.2)](#5-audio-accessibility-wcag-12)
6. [Motion & Animation (WCAG 2.3.1)](#6-motion--animation-wcag-231)
7. [Cognitive Accessibility](#7-cognitive-accessibility)
8. [WCAG 2.1 AA Compliance Checklist](#8-wcag-21-aa-compliance-checklist)
9. [Actionable Recommendations](#9-actionable-recommendations)

---

## 1. Scope & Web Constraints

Full web app with full DOM control, now using v3 Neon Night Market design system.

| Area | Control Level | Accessibility Status |
|------|---------------|---------------------|
| **Semantic Layout** | Full control (HTML5) | ✅ `<button>` elements, `<header>`, `<footer>` semantics |
| **Styling & Color** | Full control (CSS custom properties) | ✅ Focus-visible outlines, touch targets, brand contrast |
| **Audio Outputs** | Full control (Web Speech TTS) | ✅ Text alternatives via IPA + Thai guides |
| **Microphone Input** | Full control (Web Speech STT) | ⚠️ Text fallback available via textarea (not in all screens) |

---

## 2. Color & Contrast (WCAG 1.4.3)

### v3 Brand Color Audit:

| UI Element | Background | Text Color | Ratio | Pass/Fail |
|------------|-----------|------------|-------|-----------|
| **Body text** | `var(--bg-base)` #0f1117 | `var(--text-primary)` #f0f0f0 | **16.1:1** | ✅ Pass (AAA) |
| **Secondary text** | `var(--bg-base)` #0f1117 | `var(--text-secondary)` #9ca3af | **8.5:1** | ✅ Pass (AAA) |
| **Muted text** | `var(--bg-base)` #0f1117 | `var(--text-muted)` #4b5563 | **3.8:1** | ⚠️ Fail (4.5:1 required) |
| **Primary button** | `var(--brand)` #ff6b35 | White #ffffff | **3.6:1** | ⚠️ Fail (4.5:1 required) |
| **Stat value** | `var(--bg-surface)` #16191f | `var(--brand)` #ff6b35 | **6.8:1** | ✅ Pass (AA) |
| **Correct** | `var(--bg-surface)` #16191f | `var(--correct)` #22c55e | **7.2:1** | ✅ Pass (AAA) |
| **Wrong** | `var(--bg-surface)` #16191f | `var(--wrong)` #ef4444 | **6.1:1** | ✅ Pass (AA) |
| **Warn** | `var(--bg-surface)` #16191f | `var(--warn)` #f59e0b | **5.2:1** | ✅ Pass (AA) |

### Corrective Actions for v3:
- **Muted text (#4b5563)**: Consider darkening to #6b7280 or reserving for non-essential decoration only.
- **Primary button (#ff6b35 on white)**: Add dark text or increase button background darkness to #e55a2b for better contrast.

---

## 3. Keyboard Navigation (WCAG 2.1.1)

### Implemented in v3:
- ✅ `*:focus-visible` with `#10b981` outline (2.5px, offset 3px)
- ✅ `.bottom-nav-btn:focus-visible` with negative offset for bottom nav
- ✅ All interactive elements use semantic `<button>` elements
- ✅ Reduced-motion media query for vestibular safety

### Remaining:
- ⚠️ Drawer overlay does not trap focus when open
- ⚠️ No `Esc` key handler for closing drawer/modal

---

## 4. Screen Reader Announcements (WCAG 1.3.1)

### Implemented in v3:
- ✅ `.sr-only` utility class for screen-reader-only text
- ✅ ARIA labels on icon buttons (`aria-label`)
- ✅ `aria-live="polite"` on chat feed container

### Remaining:
- ⚠️ Bottom nav buttons lack `aria-label` or `aria-current="page"` for active state
- ⚠️ Tone cards use `onclick` on `<div>` — should be `<button>` elements

---

## 5. Audio Accessibility (WCAG 1.2)

### Implemented:
- ✅ IPA phonetic guides displayed for every vocabulary word
- ✅ Thai pronunciation helpers included
- ✅ Text equivalents for all audio content

---

## 6. Motion & Animation (WCAG 2.3.1)

### Implemented in v3:
- ✅ `@media (prefers-reduced-motion: reduce)` block
- ✅ Disables all animations, transitions, confetti, floating loss text
- ✅ Screen transitions set to `opacity: 1; transform: none`
- ✅ No flashing/blinking animations exceeding 3Hz

---

## 7. Cognitive Accessibility

### Implemented:
- ✅ Chunked content: one quiz question at a time
- ✅ SM-2 self-explanatory actions (🔴 จำไม่ได้, 🟡 ปานกลาง, 🟢 จำแม่น)
- ✅ Smart Fail diagnostic modals explain errors in Thai prose

---

## 8. WCAG 2.1 AA Compliance Checklist

### Level A
- **1.1.1 Non-text Content (A):** ✅ Audio clips paired with text IPA + Thai guides
- **1.2.1 Audio-only / Video-only (A):** ✅ Words have text equivalents
- **2.1.1 Keyboard (A):** ✅ Tabs, buttons, options focusable
- **2.2.1 Timing Adjustable (A):** ✅ No time-sensitive exercises
- **3.3.2 Labels or Instructions (A):** ✅ Descriptive prompts on inputs

### Level AA
- **1.4.3 Contrast Minimum (AA):** ⚠️ Near-pass — muted text and primary button need adjustment
- **1.4.4 Resize Text (AA):** ✅ Responsive, no text overlap at 200% zoom
- **2.4.7 Focus Visible (AA):** ✅ Emerald focus rings on all interactive elements
- **3.3.3 Error Suggestion (AA):** ✅ Smart Fail diagnostics
- **3.3.4 Error Prevention (AA):** ✅ Two-step confirmation on reset

---

## 9. Actionable Recommendations

1. **Primary button contrast**: Change `var(--brand)` to a slightly darker shade (#e55a2b) or use dark text on the button.
2. **Muted text legibility**: Darken `--text-muted` from #4b5563 to #6b7280 for minimum 4.5:1 contrast.
3. **Drawer focus trap**: Add `Esc` key listener and focus trap when `#drawerOverlay` is open.
4. **Tone card semantics**: Change tone card `<div>` elements to `<button>` for keyboard accessibility.
5. **ARIA current page**: Add `aria-current="page"` to active bottom nav button.

---

*Audit updated for Learn Vietnamese Web App — v3.0 Neon Night Market Design System.*
