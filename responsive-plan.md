# Responsive Plan — Learn Vietnamese Telegram Bot

> **Phase:** P4 UI Design
> **Status:** Draft
> **Platform:** Telegram (cross-client)
> **Target:** Mobile-first, with desktop optimization
> **Design Tokens:** `design-tokens.css`

---

## Table of Contents

1. [Platform Overview](#1-platform-overview)
2. [Breakpoints & Viewports](#2-breakpoints--viewports)
3. [Inline Keyboard Adaptation](#3-inline-keyboard-adaptation)
4. [Message Layout](#4-message-layout)
5. [Audio Considerations](#5-audio-considerations)
6. [Dark Mode](#6-dark-mode)
7. [Prototype Responsive Strategy](#7-prototype-responsive-strategy)
8. [Edge Cases](#8-edge-cases)

---

## 1. Platform Overview

The bot runs on 5 Telegram clients with different rendering environments:

| Platform | OS | Typical Width | Notes |
|----------|----|---------------|-------|
| **iOS** | iOS 14+ | 320–430pt | Primary target. Notch/Dynamic Island affects top inset |
| **Android** | Android 8+ | 360–412dp | Largest user base in Thailand. Status bar + nav bar insets |
| **macOS** | macOS 11+ | 800–1400px | Sidebar + chat list + message pane |
| **Windows** | Windows 10+ | 800–1920px | Telegram Desktop. Message width bounded to ~700px |
| **Web (WebK/TDesktop)** | Cross-browser | 320–1920px | Matches mobile on narrow, desktop on wide |

**Primary target:** Android + iOS (combined ~95% of Thai Telegram users).

### Platform Rendering Differences

| Feature | iOS | Android | Desktop | Web |
|---------|-----|---------|---------|-----|
| Message bubble width | Full width - 2× avatar gap | Full width - 2× avatar gap | Max ~700px centered | Max ~700px centered |
| Inline keyboard button width | Split equally per row | Split equally per row | Fixed min/max width | Fixed min/max width |
| Emoji rendering | Apple Color Emoji (SF Symbols) | Noto Color Emoji / vendor | Twemoji / platform | Platform-dependent |
| TTS playback | Inline player | Notification + inline | Browser notification | Browser tab |
| Font scaling | iOS Dynamic Type | Android Accessibility > Font size | OS system | Browser zoom |

**Key insight:** Telegram normalizes most layout differences server-side. Inline keyboard buttons render identically across clients (same `callback_data`, same button layout). Message text formatting (Markdown) renders consistently. The main differences are in **text width** and **emoji appearance**.

---

## 2. Breakpoints & Viewports

Since the bot is **text-only** with inline keyboards, responsiveness is about **content density** and **button layout**, not CSS breakpoints.

### 2.1 Mobile (320–428px) — Primary

| Attribute | Value | Impact |
|-----------|-------|--------|
| Max characters per line | ~35–45 Thai chars | Keep lines short; use natural line breaks |
| Inline keyboard width | 100% minus padding | 2-column very comfortable; 3-column tight |
| Optimal buttons per row | 2 (max 3) | 3 buttons/row = small targets on 320px |
| Audio button position | Last row, centered | Doesn't crowd content |
| Avatar size | 36–40px | Small but distinguishable |

**Rule for mobile:**
- Max 3 buttons per row (2 preferred)
- Keep button text ≤ 12 chars (Thai)
- Break long messages into multiple bot messages (not one wall of text)
- Use progressive disclosure — reveal content step by step

### 2.2 Tablet (600–820px)

| Attribute | Value | Impact |
|-----------|-------|--------|
| Max characters per line | ~60–80 Thai chars | Messages can be more text-dense |
| Inline keyboard width | ~80% (centered, not full-width) | 3–4 columns comfortable |
| Optimal buttons per row | 2–4 | 3-column for MCQ, 4-column for tone selection |
| Avatar size | 48px | Comfortable |

**Rule for tablet:**
- Match Telegram's centered-window layout
- Can use 4-column layouts for tone selection (6 tones = 4+2)
- Message content can be 1.5× denser than mobile

### 2.3 Desktop (1024–1920px)

| Attribute | Value | Impact |
|-----------|-------|--------|
| Max characters per line | ~70–90 Thai chars (bounded by Telegram's 700px bubble) | |
| Inline keyboard width | Fixed ~400px (not screen-width) | Buttons don't stretch to full window |
| Optimal buttons per row | 2–4 | Buttons don't become *too* wide (hard to scan) |
| Message width | Max ~700px | Content is bounded; cannot use full screen width |
| Multi-column possible | Yes, but 2-column preferred for readability | Text doesn't line-wrap awkwardly |

**Rule for desktop:**
- Telegram Desktop bounds message width to ~700px — content doesn't stretch
- Use 2-column layout for most MCQs (single row buttons look stretched at 400px)
- Add contextual tooltips where possible (but Telegram inline keyboard doesn't support tooltips)
- Content can be slightly denser but keep same microlearning structure

### 2.4 Width Impact on Tone Selection

The 6-tone tonal chart is the most layout-sensitive component.

| Viewport | Layout | Visual |
|----------|--------|--------|
| < 360px (small mobile) | 5+1 or 2×3 grid in inline keyboard | Push to 2+2+2 if possible |
| 360–428px (standard mobile) | 3×2 grid (3 cols, 2 rows) | Comfortable |
| 600+px (tablet/desktop) | 3×2 or 6×1 | 6×1 row is ugly — stick to 3×2 |

**Recommendation:** Always use 3×2 grid for tone selection across all viewports. It's the most stable layout.

---

## 3. Inline Keyboard Adaptation

### 3.1 Button Width & Columns

Telegram determines button width by splitting the row equally across the number of buttons. We control the row pattern in `inline_buttons`.

**Recommended patterns by device:**

| Pattern | Buttons | Mobile 320px | Mobile 375px | Desktop | Best for |
|---------|---------|--------------|--------------|---------|----------|
| 2 cols | 2/row | ✅ Perfect | ✅ Perfect | ✅ Good | MCQ, quiz, confirmation |
| 3 cols | 3/row | ⚠️ Tight | ✅ OK | ✅ Good | Spelling drill consonants |
| 1 col | 1/row | ✅ Perfect | ✅ Perfect | ❌ Too wide | Navigation menu, continue |
| 4 cols | 4/row | ❌ Tiny text | ⚠️ Tight | ✅ Good | Tone quick-select |
| Mixed | varies | ⚠️ | ✅ | ✅ | Audio row (1 btn) + quiz (2 btn) |

**Decision table for P5 prototype:**

```python
def recommend_columns(buttons_count, expected_platform):
    if buttons_count == 1:
        return [1]          # Full width
    elif buttons_count <= 4:
        return [2, 2]       # 2 rows of 2
    elif buttons_count == 6:
        return [3, 3]       # 2 rows of 3 (tone selection)
    elif buttons_count == 5:
        return [3, 2]       # Uneven but stable
    elif buttons_count > 6 and expected_platform == 'mobile':
        return [2] * ceil(buttons_count / 2)  # 2 per row
    else:
        return [3] * ceil(buttons_count / 3)  # 3 per row
```

### 3.2 Button Text Truncation

**Risk:** Long button text gets truncated on narrow screens.

**Limits by platform:**
| Buttons/row | Mobile (320px) max chars | Desktop max chars |
|-------------|-------------------------|-------------------|
| 1 | ~30 Thai chars | ~50 Thai chars |
| 2 | ~14 Thai chars | ~24 Thai chars |
| 3 | ~9 Thai chars | ~16 Thai chars |
| 4 | ~6 Thai chars | ~12 Thai chars |

**Rules:**
- On mobile, avoid 4-column layouts unless button text ≤ 6 Thai chars (e.g., tones: ➡️↘️↗️❓〰️⬇️)
- Always test the longest button text against the narrowest viewport (320px)
- If text might truncate, split into more rows with fewer columns

### 3.3 Keyboard Row Ordering

**Mobile-first row order (primary for all outputs):**

```
Row 1: [Primary action A] [Primary action B]    ← User's main choice
Row 2: [Secondary action C] [Secondary action D] ← Less critical options
Row 3: [🔊 Listen] [📖 Help]                     ← Utility actions always at bottom
```

**Rationale:**
- Most common interactions on top (Fitts's Law — easier to reach on mobile)
- Audio/utility buttons at the bottom — they don't change between questions
- Consistent row positioning builds muscle memory

---

## 4. Message Layout

### 4.1 Single Message Structure

Every bot message follows the same structure across all platforms:

```
┌──────────────────────────────────────┐
│  📝 feedback_layer (short, top)      │  ← Emotional/diagnostic, 1-2 lines
│                                      │
│  core_content_layer (main content)   │  ← Lesson, explanation, question
│  **Vietnamese** ❓ + *Thai*           │     Multiple lines possible
│                                      │
│  🔊 interaction_prompt               │  ← What user should do next, 1 line
│                                      │
│  [Btn A]  [Btn B]                    │  ← Inline keyboard
│  [Btn C]  [Btn D]                    │
│  [🔊 Listen Again]                   │
└──────────────────────────────────────┘
```

### 4.2 Message Splitting

**Rule:** If `core_content_layer` exceeds ~500 chars (mobile) or ~800 chars (desktop), split into 2+ sequential messages.

**Split strategy:**
```
Message 1: Context + question
  └─ Inline keyboard: [Show answer choices]
  
Message 2 (after user selects): Feedback + explanation
  └─ Inline keyboard: [Continue]
```

**Do not split mid-word or mid-sentence.** Split at content boundaries: explanation → quiz, or context → question.

### 4.3 Multi-Message Sequences

For complex lessons (e.g., tone introduction), use a sequential flow:

```
Step 1: Introduce 2 tones with examples
Step 2: Minimal pair identification quiz (2-3 questions)
Step 3: Spelling drill with one example
Step 4: Summary + progress update (system message)
```

Each step is a separate bot message — avoids scroll fatigue.

---

## 5. Audio Considerations

### 5.1 Audio Delivery

| Platform | How Audio Plays | User Experience |
|----------|----------------|-----------------|
| iOS | Inline audio player (short clip, tap to play) | Plays within chat, no app switch |
| Android | Notification + inline player | Can play while typing |
| Desktop | Inline player + browser tab indicator | New tab notification for play |
| Web | Inline browser player | Tab must be active |

### 5.2 Audio File Sizing

**Constraint:** Telegram voice messages are limited to 1 minute. Our clips are 2-3 seconds per word.

**Optimization:**
| Content type | Target duration | Sampling | Format |
|-------------|----------------|----------|--------|
| Single word | 1.5–2.5 sec | 16kHz | Opus (via TTS) |
| Phrase (3-5 words) | 3–5 sec | 16kHz | Opus |
| Compare pair | 3–5 sec | 16kHz | Opus |
| Example sentence | 4–7 sec | 16kHz | Opus |

All audio is synthesized via TTS — file sizes are negligible (< 10KB per clip).

### 5.3 Audio on Slow Connections

**Risk:** On 3G or slow connections, audio may buffer.

**Mitigation:**
- All audio text labels are visible **before** the audio plays — user can read while buffering
- Button `🔊 ฟัง` initiates download; `⏳ กำลังโหลด...` shown while loading
- If download fails (5+ sec), show text-based retry: `[🔄 ลองอีกครั้ง]`
- No video/rich media — audio only, small files

---

## 6. Dark Mode

### 6.1 Platform Dark Mode Support

| Platform | Dark Mode Activation | Bot Impact |
|----------|---------------------|------------|
| iOS | System setting | Bot text unaffected (white text) |
| Android | System setting | Bot text unaffected |
| Desktop | Telegram theme override | Theme colors change but text is system |
| Web | System / Telegram theme | Same as desktop |

**Impact on bot:** None. The bot sends plain text and emoji — Telegram's client renders them with appropriate colors for light or dark mode. Emoji are full-color in both modes.

### 6.2 Prototype Dark Mode

For the P5 HTML prototype, `design-tokens.css` includes dark mode overrides via `@media (prefers-color-scheme: dark)`. The prototype should auto-detect the user's system preference.

**Testing checklist:**
- [ ] Light mode: all contrasts ≥ 4.5:1
- [ ] Dark mode: all contrasts ≥ 4.5:1
- [ ] Tone emoji visible in both modes
- [ ] Progress bar shows in both modes
- [ ] Audio button visible in both modes
- [ ] No image background that clashes with either mode

---

## 7. Prototype Responsive Strategy

For P5, the HTML prototype must simulate the Telegram chat interface responsively.

### 7.1 Prototype Breakpoints

```css
/* Mobile first — default styles target mobile (320px+) */
:root {
  /* Mobile default */
}

/* Tablet+ (≥ 600px) — wider message area */
@media (min-width: 600px) {
  .chat-message { max-width: 85%; }
  .keyboard-row { max-width: 80%; }
}

/* Desktop (≥ 1024px) — simulate Telegram Desktop's bounded chat area */
@media (min-width: 1024px) {
  .chat-container { max-width: 700px; margin: 0 auto; }
  .chat-message { max-width: 700px; }
  .keyboard-row { max-width: 450px; }
}
```

### 7.2 Content Density Switch

| Breakpoint | Line length | Message padding | Button font size |
|------------|-------------|-----------------|------------------|
| < 600px | Short (35-45 chars) | 12px 16px | 14px (--text-sm) |
| 600–1024px | Medium (50-70 chars) | 16px 20px | 14px (--text-sm) |
| ≥ 1024px | Bounded to 700px | 16px 24px | 15px |

### 7.3 Avatar Sizing

| Viewport | Avatar size | Status |
|----------|-------------|--------|
| Mobile | 36px | Default |
| Tablet | 42px | Slightly larger for readability |
| Desktop | 48px | Comfortable, matching Telegram Desktop |

### 7.4 Device-Specific Layout Adjustments

| Scenario | Adjustment | Rationale |
|----------|-----------|-----------|
| Notch (iPhone X+) | Top message padding + safe-area | Content not hidden behind notch |
| Foldable (Samsung Fold) | Treat as tablet (600px+) | Wide inner screen |
| Landscape mobile | Reduce avatar size to 32px | Maximize horizontal space |
| Split-screen (iPad) | Revert to mobile layout | Half-screen = mobile width ~375px |

---

## 8. Edge Cases

### 8.1 Very Small Screens (< 320px)

**Devices:** iPhone SE (1st gen), Android with large font scaling.

**Mitigation strategy:**
- All layouts default to 2 columns max — never 3+ columns
- Button text should function at 85% zoom
- Avoid emoji-only buttons (except tone selectors, which are emoji by design)
- Test with Thai text at max font scaling

### 8.2 Very Large Screens (Ultrawide 3440px)

**Devices:** 34"+ ultrawide monitors.

**Mitigation:**
- Telegram Desktop already bounds message width to ~700px
- No special handling needed — Telegram handles it

### 8.3 Telegram Web Within a Browser Tab

**Scenario:** User opens web.telegram.org in a narrow browser tab (e.g., 320px side panel).

**Mitigation:**
- Same as mobile layout — responsive by default
- If < 480px, force 2-column keyboard layout (no 3+ columns)

### 8.4 Accessibility Font Scaling

**Scenario:** User sets OS font to maximum (iOS Larger Accessibility Text, Android XXXLarge).

**Effects:**
- Button text may truncate or word-wrap
- Messages become very tall

**Mitigation:**
- This is Telegram/OS responsibility — the bot sends plain text
- Keep button text ≤ 12 chars to reduce truncation risk at all sizes
- Inline keyboard buttons that are too small get truncated by Telegram client — the bot cannot fix this
- **Audio always provides the primary learning channel** — even if text is hard to read, audio playback works

### 8.5 Split Screen / Multi-Window

**Scenario:** Android split-screen or iPad Slide Over.

**Mitigation:**
- Width may drop to 320px even on tablet
- Same rules as mobile layout apply
- Progressive enhancement: mobile defaults, tablet/desktop improvements only when width ≥ 600px

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────┐
│                RESPONSIVE RULES                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  MOBILE (< 600px):                                │
│  ├─ 2-column keyboard (default)                  │
│  ├─ Max 3 cols for tone selector (3×2 grid)      │
│  ├─ Button text ≤ 12 Thai chars                  │
│  └─ One concept per message                      │
│                                                  │
│  TABLET (600–1024px):                             │
│  ├─ 3-column keyboard comfortable                │
│  ├─ Messages at 85% max-width                    │
│  └─ Slightly denser content OK                   │
│                                                  │
│  DESKTOP (≥ 1024px):                              │
│  ├─ Bounded to 700px chat area                   │
│  ├─ 4-column tone select fine                    │
│  ├─ Button text up to 24 Thai chars in 2-col     │
│  └─ Audio plays in inline player                 │
│                                                  │
└─────────────────────────────────────────────────┘
```

---

*Responsive Plan for Learn Vietnamese Telegram Bot — P4 UI Design deliverable.*
*Next step: Implement this layout in P5 HTML prototype with responsive CSS.*
