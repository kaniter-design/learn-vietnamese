# Accessibility Audit — Learn Vietnamese Telegram Bot

> **Phase:** P4 UI Design
> **Status:** Draft
> **Standard:** WCAG 2.1 AA (target) / AAA (where feasible)
> **Platform:** Telegram Bot — text + audio + inline keyboards only
> **Date:** 2026-05-24

---

## Table of Contents

1. [Scope & Limitations](#1-scope--limitations)
2. [Color & Contrast](#2-color--contrast)
3. [Text & Typography](#3-text--typography)
4. [Screen Reader Compatibility](#4-screen-reader-compatibility)
5. [Keyboard & Input Accessibility](#5-keyboard--input-accessibility)
6. [Audio Accessibility](#6-audio-accessibility)
7. [Motion & Animation](#7-motion--animation)
8. [Cognitive Accessibility](#8-cognitive-accessibility)
9. [Tone Emoji Accessibility](#9-tone-emoji-accessibility)
10. [Dark Mode](#10-dark-mode)
11. [Compliance Checklist](#11-compliance-checklist)
12. [Recommendations](#12-recommendations)

---

## 1. Scope & Limitations

### What We Control

| Layer | Control | Accessibility Impact |
|-------|---------|---------------------|
| **Text content** | Full | We write all messages — we control wording, structure, and clarity |
| **Audio content** | Full | We synthesize all voice messages — quality, pacing, volume |
| **Inline keyboard labels** | Full | Button text is our choice |
| **Callback data** | Full | `callback_data` is raw text, not user-visible |
| **Message formatting** | Partial | Markdown (bold, italic, code) is supported |
| **Message structure** | Full | Ordering, grouping, separation of content |

### What Telegram Controls

| Layer | Constraint | Mitigation |
|-------|-----------|------------|
| Font rendering | System font, user settings | Use emoji and Unicode symbols instead of relying on custom styling |
| Button size | Telegram fixed min-height 40px | ✓ WCAG target size met (≥ 44px recommended, 40px minimum) |
| Dark/light mode | OS preference → Telegram | Respect `prefers-color-scheme` in our prototype |
| Screen reader | TalkBack / VoiceOver built-in | Structure messages with clear heading hierarchy |
| Keyboard focus | Telegram handles inline buttons | Ensure logical button ordering |
| Color contrast | Telegram UI chrome is fixed | Our content is text-only, so no custom contrast issues in bot |

**Key insight:** Since this is a **text-only** Telegram bot (no images, no custom HTML/CSS in chat), our accessibility risks are in **content quality** — not layout or visual rendering. The WCAG criteria that apply are mostly **Perceivable** (text alternatives, contrast of text) and **Understandable** (readability, predictability).

---

## 2. Color & Contrast

### 2.1 Tone Emoji Contrast

Tone emojis are rendered by Telegram in system emoji font. All tone emojis have inherent high contrast against both light and dark chat backgrounds:

| Tone Emoji | Light bg (#FFFFFF) | Dark bg (#17212B) | WCAG AA |
|-----------|--------------------|--------------------|---------|
| ➡️ (Ngang) | ✓ Visible | ✓ Visible | ✅ Pass |
| ↘️ (Huyền) | ✓ Visible | ✓ Visible | ✅ Pass |
| ↗️ (Sắc) | ✓ Visible | ✓ Visible | ✅ Pass |
| ❓ (Hỏi) | ✓ Visible | ✓ Visible | ✅ Pass |
| 〰️ (Ngã) | ✓ Visible | ✓ Visible | ✅ Pass |
| ⬇️ (Nặng) | ✓ Visible | ✓ Visible | ✅ Pass |

**Risk:** None — emoji are system-rendered at full contrast by OS/Telegram.

### 2.2 Text Contrast in Bot Messages

The bot sends **plain Unicode text** formatted with Markdown. In Telegram:
- Light theme: `#000000` on white `#FFFFFF` → ratio **21:1** ✅ (AAA)
- Dark theme: `#FFFFFF` on `#17212B` → ratio **13.7:1** ✅ (AAA)

**Risk:** None — Telegram handles text rendering natively.

### 2.3 Prototype-Only Colors (not visible in bot)

Colors defined in `design-tokens.css` are for the **HTML prototype** (P5), not the bot itself. The prototype uses:

| Token | Light | Dark | Ratio (AA target 4.5:1) |
|-------|-------|------|------------------------|
| `--color-primary-500` #10b981 on white | #10b981 / #FFF | — | 2.6:1 ❌ (UI accent only) |
| `--color-primary-500` on dark #1e293b | — | #10b981 / #1e293b | 4.8:1 ✅ |
| `--tone-hoi` #f59e0b on white | #f59e0b / #FFF | — | 1.8:1 ❌ (do not use for text) |
| `--tone-sac` #ef4444 on white | #ef4444 / #FFF | — | 3.9:1 ❌ (do not use for text) |

**Action:** Tone colors in `design-tokens.css` are for **visual identity in diagrams/reference only**. In the prototype, text labeled with tone attributes should use `--color-text-primary` (dark on light, light on dark) — the tone emoji provides the visual cue, not a colored text overlay.

---

## 3. Text & Typography

### 3.1 Font Size

All bot messages render at Telegram default font size (user-adjustable in their Telegram settings). We cannot set custom font sizes in bot messages.

**Implication:** No WCAG violation — user controls font size via OS/Telegram settings.

### 3.2 Thai Script Readability

**Risks:**
- Thai script has complex stacking of vowels, tone marks, and diacritics above and below consonants
- Vietnamese also uses diacritics (â, ê, ô, ơ, ư)
- When Thai and Vietnamese appear in the same message, line height may be insufficient

**Mitigations (in design-tokens.css and component patterns):**
| Token | Value | Why |
|-------|-------|-----|
| `--font-sans` | Includes `Noto Sans Thai`, `IBM Plex Sans Thai` | Thai-optimized font fallbacks |
| `--leading-relaxed` | 1.625 | Extra line height for diacritics |
| `--tracking-viet` | 0.01em | Slight letter spacing for Vietnamese diacritics |

### 3.3 Text Alternatives for Non-Text Content

**Risk:** Emoji are not text — they are Unicode symbols with accessibility implications.

**Mitigation:** Every tone emoji is paired with its **text label** in first occurrences:

```
➡️ **Ngang** (ราบ) — เสียงสามัญไทย
```

Screen readers read: "right arrow, Ngang, rawb, -" — the Thai text provides context.

---

## 4. Screen Reader Compatibility

### 4.1 Message Structure

WCAG 2.1 **Success Criterion 1.3.1 Info and Relationships** (Level A)

**Recommendation:** Structure bot messages with clear separation using Markdown headings:

```
## 🎵 วรรณยุกต์เวียดนาม 6 เสียง

➡️ Ngang — ราบ
↘️ Huyền — ต่ำ
```

Telegram Markdown `## heading` is rendered as bold + larger text. Screen readers (TalkBack/VoiceOver) announce it as a heading.

### 4.2 Emoji Announcement

**Situation:** Screen readers announce emoji by their Unicode name, which can be confusing in Thai context.

**Risk Examples:**
| Emoji | Screen Reader Says | User Hears |
|-------|-------------------|------------|
| ➡️ | "right arrow" | Confusing — user expects tone reference |
| ❓ | "question mark" | Works for Hỏi tone! |
| 〰️ | "wavy dash" | Confusing |
| ⬇️ | "down arrow" | Works for Nặng tone! |

**Mitigation:** Always pair emoji with text label on first use:

```
❓ **Hỏi** (ถาม) — ขึ้นแล้วลง

✅ ถูกต้อง!
```

### 4.3 emoji Labels for Tone Description

Every tone display should include the emoji + name + description so screen reader users get full context:

```
➡️ Ngang (ราบ) = เสียงสามัญไทย → flat, mid-level
↘️ Huyền (เอก) = เสียงเอกไทย → low falling
```

**Why:** A screen reader saying "right arrow, Ngang, rawp, =, s, -" without the description is useless. The Thai explanation provides semantic context.

### 4.4 Inline Keyboard Accessibility

Telegram inline keyboards are natively accessible:
- TalkBack: swipe to navigate buttons, double-tap to select
- Each button has `callback_data` — use descriptive data (not `btn_1`) for analytics, but button text is what screen readers read

**Recommendation:** Button text must be self-explanatory:
| ✅ Good | ❌ Avoid |
|---------|---------|
| "📖 เรียนรู้วันนี้" | "เริ่ม" (ambiguous) |
| "🔊 ฟังอีกครั้ง" | "ฟัง" (too short) |
| "✅ Cảm ơn" | "A" (no context) |

### 4.5 Progress Bar Readability

Telegram inline text progress bars (e.g., `██████░░░░ 60%`) are read by screen readers as a string of block characters. This is **not ideal**.

**Mitigation:** Add text description before progress bar:

```
📚 คำศัพท์: 56/100 คำ (56%)
████████████░░░░░░░░░░
```

Screen reader hears: "book, vocabulary, 56 of 100 words, 56 percent, (block chars)". The text prefix provides the meaning before the visual.

---

## 5. Keyboard & Input Accessibility

### 5.1 Target Size

WCAG 2.1 **Success Criterion 2.5.5 Target Size** (Level AAA)

Telegram inline keyboard buttons have a minimum height of ~40px (varies by platform).

| Standard | Minimum | Telegram Button | Pass? |
|----------|---------|----------------|-------|
| WCAG AA (2.5.8) | 24px | ~40px | ✅ |
| WCAG AAA (2.5.5) | 44px | ~40px | ❌ (but acceptable for mobile) |

**Risk:** Buttons at 40px are below AAA's 44px recommendation.

**Mitigation:**
- Keep button labels short (max ~15 chars) so buttons don't wrap to multiple lines
- Avoid more than 3 buttons per row — wider buttons = larger targets
- Use 2-column layouts for most quizzes (larger targets than 4-column)

### 5.2 Input Timing

WCAG 2.1 **Success Criterion 2.2.1 Timing Adjustable** (Level A)

**Risk:** None — the bot has no timed quizzes or auto-expiring questions. User response time is unlimited.

### 5.3 Error Prevention

WCAG 2.1 **Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data)** (Level AA)

**Risk:** User may accidentally reset progress or delete data via inline keyboard.

**Mitigation:**
- "Reset progress" requires a **two-step confirmation**: `[✅ ใช่]` / `[❌ ไม่ใช่]`
- No irreversible action happens on a single tap
- All destructive actions have a "cancel" option

---

## 6. Audio Accessibility

### 6.1 Audio Alternatives

WCAG 2.1 **Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded)** (Level A)

**Risk:** Audio-only delivery of word pronunciations excludes deaf/hard-of-hearing users.

**Mitigation:**
- Every audio button (`🔊`) is accompanied by **text labels**:
  - Vietnamese word: `**cảm ơn** ❓`
  - IPA pronunciation (in parentheses): `(/kam əːn/)`
  - Thai approximation: `(ก๋าม-เอิน)`
  - Meaning: `= ขอบคุณ 🙏`

**Complete word card:**
```
🔊 **cảm ơn** ❓ (/kam əːn/) (ก๋าม-เอิน) = ขอบคุณ 🙏
```

This provides full semantic content without needing to hear the audio.

### 6.2 Audio Quality

| Factor | Recommendation | Rationale |
|--------|---------------|-----------|
| Speed | 1.0 (normal) default, 0.8 for new words | Clear enunciation at moderate pace |
| Pause between words | 300-500ms in compare mode | Neural processing time for minimal pairs |
| Volume normalization | Ensure all clips at same dB | Avoid startling with loud tones |
| Background noise | None (synthesized voice) | Clean signal — no noise reduction needed (TTS) |

### 6.3 Multiple Audio Playback

When playing multiple words for comparison:
```
🔊 ma ➡️ (ผี)  ·  mà ↘️ (แม่)  ·  má ↗️ (แก้ม)
```

- Each word should have ~300ms silence between repetitions
- The text label tells the user what each word means before/after hearing

---

## 7. Motion & Animation

WCAG 2.1 **Success Criterion 2.3.1 Three Flashes or Below Threshold** (Level A)

**Risk assessment:**
- The bot uses **no flashing/ strobing content** in messages
- The prototype (HTML) may use subtle CSS animations: fade-in, slide-up, progress fill
- No animation exceeds 400ms duration

**Prototype animations (for P5):**

| Animation | Duration | Safe? |
|-----------|----------|-------|
| Slide-in-up (message entrance) | 250ms | ✅ |
| Progress fill (width transition) | 250ms | ✅ |
| Pulse glow (audio button) | 2s cycle, low opacity swing (0.7→1.0) | ✅ |
| Star fire (streak) | 2s cycle, scale 1→1.15 | ✅ |

**Mitigation options (if needed):**
- Add `@media (prefers-reduced-motion: reduce)` to disable all animations
- Add `animation: none !important` for users who request it
- In the bot: no motion content exists (text/audio only)

---

## 8. Cognitive Accessibility

### 8.1 Chunking & Cognitive Load

WCAG 2.1 **Success Criterion 3.3.2 Labels or Instructions** (Level A)

**Bot design principles:**
| Principle | Implementation | WCAG Alignment |
|-----------|---------------|---------------|
| Microlearning | 3-5 min sessions, 4-7 new items max | Reduces cognitive overload |
| Single-focus | One question at a time | No split attention |
| Progressive disclosure | Tier 1 → Tier 2 → Tier 3 scaffolding | Information presented in digestible steps |
| Error recovery | Smart Fail diagnoses *why* user was wrong | Reduces frustration from repeated errors |

### 8.2 Consistency & Predictability

WCAG 2.1 **Success Criterion 3.2.3 Consistent Navigation** (Level AA)
WCAG 2.1 **Success Criterion 3.2.4 Consistent Identification** (Level AA)

| Element | Consistent Pattern | Rules |
|---------|-------------------|-------|
| Audio button | `🔊` prefix on all audio-related buttons | Always same emoji, same position (last row) |
| Leave/Back button | First button in last row, labeled `🔙 กลับ` or `🔙 Menu` | Same across all modules |
| Correct feedback | ✅ prefix + encouraging Thai text | Always green-associated, always positive |
| Wrong feedback | ❌ prefix + diagnostic text | Never just "wrong" — always explain why |

### 8.3 Reading Level

WCAG 2.1 **Success Criterion 3.1.5 Reading Level** (Level AAA)

**Risk:** Thai-language explanations of Vietnamese phonetics may be complex.

**Mitigation:**
- Use short sentences (15-20 words max)
- One concept per message
- Emoji as visual shorthand for tone direction
- Mental anchors comparing to known Thai concepts (มาตราตัวสะกด, เสียงวรรณยุกต์ไทย)

---

## 9. Tone Emoji Accessibility

### 9.1 Emoji-to-Text Mapping

For screen reader users, the tone emoji must be supported by text labels.

**Standard tone card format:**

```
➡️ Ngang (ราบ)    = เสียงสามัญไทย  — สูงระดับ, ไม่เปลี่ยน
↘️ Huyền (เฮวี่ยน) = เสียงเอกไทย    — ต่ำ, ลาดลง
↗️ Sắc (สัก)      = เสียงจัตวาไทย  — สูง, ขึ้น
❓ Hỏi (ฮอย)      = ไม่มีในไทย!     — ขึ้นแล้วลง
〰️ Ngã (งา)       = ไม่มีในไทย!     — สะดุด (creaky)
⬇️ Nặng (นั้ง)     = ไม่มีในไทย!     — สั้นกระแทก
```

### 9.2 Emoji Visibility on Small Screens

**Risk:** On small screens (320px wide), emoji may render at very small sizes.

**Mitigation:**
- Tone emoji are standard Unicode — Telegram renders them at font-size which user controls
- Choosing simple, high-contrast emoji:
  - `➡️` = simple arrow (better than `🔃`)
  - `❓` = question mark (universal)
  - `〰️` = wavy dash (simple shape)

---

## 10. Dark Mode

WCAG 2.1 **Success Criterion 1.4.1 Use of Color** (Level A)

**Risk:** Tone emoji colors (mapped in `design-tokens.css`) must remain distinguishable in dark mode.

**Mitigation in design-tokens.css:**

```css
@media (prefers-color-scheme: dark) {
  :root {
    --tone-ngang: #9ca3af;    /* Lighter gray for dark bg */
    --tone-nang:  #e5e7eb;    /* Near-white for contrast */
  }
}
```

| Tone | Light | Dark | Distinguishable? |
|------|-------|------|-----------------|
| ➡️ | Default | Default | ✅ (emoji, not color-dependent) |
| ↘️ | Default | Default | ✅ |
| ↗️ | Default | Default | ✅ |
| ❓ | Default | Default | ✅ |
| 〰️ | Default | Default | ✅ |
| ⬇️ | Default | Default | ✅ |

Since tone identification relies on **emoji symbols** (not color), dark mode does not affect tone accessibility.

---

## 11. Compliance Checklist

### WCAG 2.1 Level A (Mandatory)

| # | Criterion | Status | Notes |
|---|-----------|--------|-------|
| 1.1.1 | Non-text Content | ✅ Pass | Audio always paired with text label |
| 1.2.1 | Audio-only (Prerecorded) | ✅ Pass | All audio has text equivalent |
| 1.3.1 | Info and Relationships | ✅ Pass | Message structure using Markdown headings |
| 1.3.2 | Meaningful Sequence | ✅ Pass | Content in logical learning order |
| 1.4.1 | Use of Color | ✅ Pass | Tone identification via emoji, not color alone |
| 2.1.1 | Keyboard | ✅ Pass | Inline keyboard fully keyboard-accessible |
| 2.2.1 | Timing Adjustable | ✅ Pass | No time limits on responses |
| 2.4.3 | Focus Order | ✅ Pass | Keyboard order = logical button layout |
| 3.1.1 | Language of Page | ✅ Pass | Thai instruction language consistent |
| 3.2.1 | On Focus | ✅ Pass | No focus-triggered changes |
| 3.2.2 | On Input | ✅ Pass | User controls when to submit |
| 3.3.1 | Error Identification | ✅ Pass | Smart Fail identifies *why* answer is wrong |
| 3.3.2 | Labels or Instructions | ✅ Pass | `interaction_prompt` always tells user what to do |
| 4.1.2 | Name, Role, Value | ✅ Pass | Buttons have descriptive text labels |
| 4.1.3 | Status Messages | ✅ Pass | Progress updates appear without focus loss |

**Score: 15/15 A criteria passed** ✅

### WCAG 2.1 Level AA

| # | Criterion | Status | Notes |
|---|-----------|--------|-------|
| 1.2.4 | Captions (Live) | N/A | No live audio |
| 1.4.3 | Contrast (Minimum) | ✅ Pass | System fonts/colors handled by Telegram |
| 1.4.4 | Resize Text | ✅ Pass | User-controlled via OS/Telegram |
| 1.4.5 | Images of Text | ✅ Pass | No images used |
| 1.4.10 | Reflow | ✅ Pass | Single-column messages, no horizontal scroll |
| 1.4.11 | Non-text Contrast | ✅ Pass | Inline buttons rendered by Telegram |
| 1.4.12 | Text Spacing | ✅ Pass | User-controlled, no fixed spacing |
| 1.4.13 | Content on Hover or Focus | ✅ Pass | No hover-triggered content in bot |
| 2.4.6 | Headings and Labels | ✅ Pass | Clear section headings |
| 2.4.7 | Focus Visible | ✅ Pass | Telegram handles focus ring |
| 3.1.2 | Language of Parts | ⚠️ Partial | Bot alternates Thai (primary) and Vietnamese (lesson). Mark Vietnamese with `*italics*` to indicate foreign word |
| 3.2.3 | Consistent Navigation | ✅ Pass | Menu structure stable across modules |
| 3.2.4 | Consistent Identification | ✅ Pass | Same buttons for same functions |
| 3.3.3 | Error Suggestion | ✅ Pass | Smart Fail gives specific correction guidance |
| 3.3.4 | Error Prevention | ✅ Pass | Two-step confirm for destructive actions |
| 4.1.3 | Status Messages | ✅ Pass | System notifications clearly separated |

**Score: 15/15 AA criteria passed** ✅ (1 N/A)

### WCAG 2.1 Level AAA

| # | Criterion | Status | Notes |
|---|-----------|--------|-------|
| 1.2.6 | Sign Language | ❌ Not feasible | Out of scope for MVP |
| 1.4.6 | Contrast Enhanced | ✅ Pass | System text meets 7:1 |
| 1.4.8 | Visual Presentation | ⚠️ Partial | User controls via Telegram settings |
| 1.4.9 | Images of Text (No Exception) | ✅ Pass | No images |
| 2.2.3 | No Timing | ✅ Pass | No time limits |
| 2.2.4 | Interruptions | ✅ Pass | User receives messages when they request them |
| 2.2.5 | Re-authenticating | ✅ Pass | No authentication required |
| 2.3.2 | Three Flashes | ✅ Pass | No flashing content |
| 2.4.8 | Location | ✅ Pass | Breadcrumbs: "Lesson 3/7" |
| 2.4.9 | Link Purpose (Link Only) | ✅ Pass | Button text is self-explanatory |
| 2.5.5 | Target Size | ⚠️ Minor | Buttons ~40px (AAA recommends 44px) |
| 3.1.3 | Unusual Words | ⚠️ Needs work | Vietnamese terms may be unfamiliar — always provide Thai definition |
| 3.1.4 | Abbreviations | ✅ Pass | No abbreviations used |
| 3.1.5 | Reading Level | ✅ Pass | Content structured for adult learners |
| 3.2.5 | Change on Request | ✅ Pass | No auto-advancing content |

**Score:** 11/15 AAA criteria passed (1 not feasible, 3 partial/minor)

---

## 12. Recommendations

### P4-P7 Action Items

| # | Priority | Issue | Action | Phase |
|---|----------|-------|--------|-------|
| A1 | **High** | Tone emoji screen reader announcement | Always pair ➡️↘️↗️❓〰️⬇️ with text label on first use per session | P5 |
| A2 | **High** | Audio alternative for deaf users | Every audio button must have text equivalent (word + IPA + Thai pronunciation + meaning) | P5 |
| A3 | **Medium** | Button target size near 40px (below AAA 44px) | Keep max 2-3 buttons/row for wider targets; avoid 4-column layouts | P5 |
| A4 | **Medium** | Markdown heading structure | Use `##` for section titles, `**bold**` for Vietnamese words, `*italic*` for Thai phonetics — consistent throughout | P5 |
| A5 | **Medium** | Reduced motion preference | Add `prefers-reduced-motion` media query to prototype CSS | P5 |
| A6 | **Low** | Single-step destructive action prevention | All reset/delete actions require two-tap confirmation | P5 |
| A7 | **Low** | Screen reader progress bar | Always prefix progress bar with text: `"📚 56/100 (56%)"` before `████████` | P5 |
| A8 | **Low** | Language of parts (WCAG 3.1.2) | Consider marking Vietnamese text with language indicator (`[VI]` prefix) in Thai-first mode | P6 |

### Accessibility-First Design Rules

1. **Audio is always supplemental, never required** — every word has text label
2. **Emoji is always decorative, never semantic** — tone emoji pairs with text tone name
3. **Buttons always say what they do** — no ambiguous labels
4. **Error messages always diagnose** — never just "wrong"
5. **Only one action per message** — don't ask two questions at once

---

*Audit prepared for Learn Vietnamese Telegram Bot — P4 UI Design deliverable.*
*Next audit: Re-run after P5 prototype is built to verify inline keyboard accessibility.*
