# Wireframe Feedback — Self-Review

> Phase 3: UX Design — Wireframe Review
> Date: 2026-05-23

---

## ✅ What Works Well

| Aspect | Rating | Notes |
|--------|--------|-------|
| **Visual fidelity** | 🟢 Good | Telegram dark theme, chat bubbles, inline keyboards — consistent with English bot |
| **Flow coverage** | 🟢 All screens | Welcome → Menu → Lesson → Flashcards → Tones → Conversation → Progress → Settings |
| **Interactive** | 🟢 Tab switching | 8 screens navigable via tabs |
| **Audio integration** | 🟢 Key differentiator | 🔊 buttons on every screen with audio content — critical for Vietnamese |
| **Tone practice** | 🟢 Unique feature | Dedicated tone training screen with 6-tone MCQ — no competitor has this |
| **Typing indicator** | 🟢 Animated | 3-dot bounce animation in conversation — feels real |
| **Thai bridge** | 🟢 Consistent | All explanations in Thai, Vietnamese words highlighted |

---

## ⚠️ Issues & Improvements

### UX Issues

| # | Issue | Severity | Suggestion |
|---|-------|----------|------------|
| 1 | **Audio playback not interactive in wireframe** | 🟡 Medium | Wireframe shows 🔊 buttons but can't actually play. In P5, use Telegram's native audio message or TTS API |
| 2 | **Tone practice: 6 choices may be overwhelming** | 🟡 Medium | Consider 2-step: first identify tone family (rising/falling/level), then specific tone |
| 3 | **Flashcard: no "I knew this already" fast-track** | 🟢 Low | Add "จำแล้ว" button for words user already knows — skip to next |
| 4 | **Lesson flow: no "mark as done"** | 🟡 Medium | User should be able to mark lesson complete and track progress |
| 5 | **No daily goal reminder** | 🟢 Low | Settings has daily goal but no reminder/notification flow shown |

### Content Issues

| # | Issue | Severity | Suggestion |
|---|-------|----------|------------|
| 6 | **Vietnamese text rendering** | 🟡 Medium | Wireframe uses real Vietnamese with diacritics — verify Telegram renders correctly on all devices |
| 7 | **Thai comparison for tones** | 🟢 Good | "เหมือนเสียงจัตวาไทย" is helpful but some tones (ngã, nặng) have no Thai equivalent — clearly marked |
| 8 | **Business phrases library not shown** | 🟡 Medium | Level 2+ business templates not in wireframe — add in P5 |

### Accessibility Issues

| # | Issue | Severity | Suggestion |
|---|-------|----------|------------|
| 9 | **Audio-only tone practice** | 🟡 Medium | Tone practice requires audio — add visual fallback (waveform, tone contour diagram) |
| 10 | **Color + text feedback** | 🟢 Good | Correct/wrong uses ✅/❌ + color + text — good for color-blind users |
| 11 | **Text size: Vietnamese diacritics** | 🟡 Medium | Vietnamese with diacritics needs larger font — 14px minimum, 16px preferred |

---

## 🎯 Recommendations for P5

| Priority | Recommendation |
|----------|---------------|
| 🔴 **Critical** | Audio playback system — TTS API (gTTS/Edge TTS) for Vietnamese pronunciation |
| 🔴 **Critical** | Vietnamese text rendering test on iOS + Android Telegram |
| 🟡 **Important** | Tone practice: consider 2-step selection (family → specific) |
| 🟡 **Important** | Lesson completion tracking + progress per module |
| 🟡 **Important** | Business phrase templates screen (Level 2+) |
| 🟢 **Nice** | Daily goal notification/reminder flow |
| 🟢 **Nice** | "จำแล้ว" fast-track for flashcards |

---

## 📊 Wireframe Completion

| Screen | Status | Notes |
|--------|--------|-------|
| Welcome + Level Test | ✅ Complete | 5-question assessment with scoring |
| Main Menu | ✅ Complete | 6 buttons, 2×3 grid |
| Lesson (Level 0: Tones) | ✅ Complete | Tone explanation + audio + practice button |
| Flashcards | ✅ Complete | SRS flow with Thai translation + audio |
| Tone Practice | ✅ Complete | 6-tone MCQ with audio playback |
| Conversation | ✅ Complete | Scenario select → typing → AI response |
| Progress | ✅ Complete | Stats grid + tone score + level progress |
| Settings | ✅ Complete | Language, level, goal, notification, sound |

**Ready for P3 approval?** ✅ Yes — all screens covered, issues recorded for P5-P6.

---

## 🔑 Vietnamese-Specific Design Decisions

1. **Audio-first** — Every word/phrase has 🔊 button. Vietnamese is impossible to learn without hearing tones.
2. **Thai tone comparison** — Map Vietnamese tones to Thai tones where possible, explicitly mark where they differ.
3. **Tone score tracking** — Separate from vocabulary score. User needs to see tone improvement specifically.
4. **Business phrases library** — Copy-paste ready templates for emails, meetings, negotiations.
5. **Sound on/off toggle** — Some users may be in public — allow disabling audio.

---

*Generated: 2026-05-23 | Phase 3: UX Design*
