# Component Library — Learn Vietnamese Web App

> **Phase:** P4 UI Design
> **Status:** Draft
> **Aligns with:** Full-Stack Web App Architecture (v2.0)
> **Design Tokens:** `design-tokens.css` / Tailwind + DaisyUI references

---

## Table of Contents

1. [Layout & Navigation Components](#1-layout--navigation-components)
2. [Interactive Card Components](#2-interactive-card-components)
3. [Chat & Dialogue Bubbles](#3-chat--dialogue-bubbles)
4. [Audio & Pronunciation Controls](#4-audio--pronunciation-controls)
5. [Spelling Drill Widget](#5-spelling-drill-widget)
6. [Tones Contour Visualizer](#6-tones-contour-visualizer)
7. [SM-2 Rating Button Groups](#7-sm-2-rating-button-groups)
8. [Form Input & Speech Controls](#8-form-input--speech-controls)
9. [Feedback & Notification Indicators](#9-feedback--notification-indicators)
10. [JSON Output Mapping](#10-json-output-mapping)

---

## 1. Layout & Navigation Components

### 1.1 App Sidebar Navigation (Desktop)
A sticky left-aligned column managing view states.
- **Visuals:** Dark or slate background, clean border/shadow separation, active states with emerald color accents.
- **Sub-elements:**
  - *User Profile Badge:* User avatar placeholder, current daily streak badge (e.g. `🔥 7 Days`).
  - *Nav Links:* Anchor links styled as horizontal list items with SVG icons: `📖 Learn`, `🃏 Flashcards`, `💬 Quest Chat`, `📝 Tones`, `📊 Progress`, `⚙️ Settings`.
  - *Connection Status indicator:* Small pulsing indicator (Green = local FastAPI connected, Red = API offline).

### 1.2 Viewport Main Wrapper
Main container adapting to active views.
- **Desktop:** `flex-1 min-h-screen p-8 bg-slate-50 dark:bg-slate-900`
- **Mobile (Responsive):** Full-screen width viewport, vertical scroll, bottom navigation bar replacing the sidebar menu.

---

## 2. Interactive Card Components

### 2.1 Module Selection Card
Used in the **Learn** dashboard to select lessons.
```
┌──────────────────────────────────────────────┐
│  📖 Level 0: เสียงและวรรณยุกต์                │
│  Progress: [██████░░░░] 60% (6/10)           │
│                                              │
│  [0.1 Alphabet] [0.2 Vowels]  [0.3 Consonants]│
│  [0.4 Tones]    [0.5 Practice][0.6 Reading]  │
└──────────────────────────────────────────────┘
```
- **States:**
  - *Locked:* Gray background, lock icon, unclickable.
  - *Unlocked:* Light outline, hover scale animation.
  - *Completed:* Checkmark indicator in corner, green boundary highlight.

### 2.2 Quiz Challenge Card
Container for multiple choice questions (MCQ) or minimal pair identification.
- **Tailwind class:** `card shadow-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700`
- **Inner elements:**
  - *Audio Prompt:* Large circular play button.
  - *Answer Grid:* 2x2 layout of button choices.
  - *Submit button:* Emerald green primary button (hidden in instant-reveal mode).

---

## 3. Chat & Dialogue Bubbles

Used in **Quest Chat** roleplay modes. Combines narrative context, NPC dialogs, and user speech translations.

### 3.1 NPC Chat Bubble
- **Visuals:** Left-aligned bubble, slate-gray or white background, rounded edges, speech bubble tail on left.
- **Interactive features:**
  - *Thai Translation toggle:* Small `[แปลไทย]` toggle text displaying/hiding translated lines (e.g., `(พี่อยากดื่มอะไรคะ?)`) under the Vietnamese word.
  - *TTS Audio Trigger:* Compact speaker icon `[🔊]` placed next to the Vietnamese sentence.

```
┌────────────────────────────────────────┐
│ 🙂 Chị Linh (พนักงานร้าน)               │
│                                        │
│  "Chị muốn uống gì ạ?"  🔊              │
│  [แปลไทย] -> (พี่อยากดื่มอะไรคะ?)        │
└────────────────────────────────────────┘
```

### 3.2 User Chat Bubble
- **Visuals:** Right-aligned bubble, emerald-green background, white text, rounded edges, speech bubble tail on right.
- **Content:** User text input, or converted speech text. Matches tone analysis validation.

```
                               ┌────────────────────────────────────────┐
                               │ User (ลูกค้า) 👤                        │
                               │                                        │
                               │  "Cho tôi một cà phê sữa đá." 🔊       │
                               └────────────────────────────────────────┘
```

---

## 4. Audio & Pronunciation Controls

### 4.1 Playback Button
Every Vietnamese word or phrase requires an inline audio controller.
- **HTML structure:** `<button class="btn btn-circle btn-primary btn-sm mx-1"> 🔊 </button>`
- **Behavior:** Fetches client-side synthesized speech. If local voice package is missing, calls Google Translate public TTS fallback.

### 4.2 Speed Selector Slider
Global slider located in Settings modal (or adjacent to dialogue widgets).
- **Options:** `0.6x` (Very Slow), `0.8x` (Slow), `1.0x` (Normal).
- **Implementation:** HTML range slider binding to JS `speechSynthesis.rate`.

---

## 5. Spelling Drill Widget

Converts character spelling into a progressive step-by-step assembly game (Tier 2/3 scaffolding).

```
┌──────────────────────────────────────────────┐
│  สะกดคำว่า: Mẹ ⬇️ (แม่)                       │
│                                              │
│  Selected: [ m ] → [ _ ] → [ _ ]             │
│                                              │
│  [ เลือกสระ ]:                                │
│  ┌───────┬───────┬───────┬───────┬───────┐   │
│  │   a   │   e   │   i   │   o   │   u   │   │
│  └───────┴───────┴───────┴───────┴───────┘   │
└──────────────────────────────────────────────┘
```

### Flow Sequence:
1. **Consonant Selection Grid:** Select leading onset letter (e.g. `[m] [n] [b] [d]`).
2. **Vowel Selection Grid:** Select middle vowel character (e.g. `[a] [e] [i] [o]`).
3. **Tone Selection Grid:** Select tone diacritic mark (e.g. `[➡️] [↘️] [↗️] [❓] [〰️] [⬇️]`).
4. **Validation:** Flash green if correctly assembled, play TTS word output. Fail defaults to reducing options to 2 cards.

---

## 6. Tones Contour Visualizer

Displays real-time or static pitch contour graphs to help Thai speakers discriminate tones (since Thai has 5 tones, Vietnamese has 6, and Hỏi/Ngã/Nặng have no Thai equivalents).

- **Implementation:** Lightweight SVG Canvas element.
- **Curves:**
  - *Ngang:* Flat straight horizontal line.
  - *Huyền:* Straight line sloping downwards.
  - *Sắc:* Curve sweeping steeply upwards.
  - *Hỏi:* Dipping-rising line (curving down, then hooking up).
  - *Ngã:* Staccato split contour (creaky break midway, rising sharply).
  - *Nặng:* Steep drop cut off abruptly.

```
  Pitch
  ▲
  │     / [Sắc ↗️]
  │ ─── [Ngang ➡️]
  │ \_/\ [Hỏi ❓]
  │  \   [Huyền ↘️]
  └──────────────► Time
```

---

## 7. SM-2 Rating Button Groups

Used in **Flashcards** view state. Renders on the back of cards to record Leitner intervals.

```
┌────────────────────────────────────────────────────────┐
│  จำคำนี้ได้ยากง่ายแค่ไหน?                               │
│                                                        │
│  [🔴 จำไม่ได้]     [🟡 ปานกลาง]     [🟢 จำแม่น/ง่ายมาก]   │
│  (ทบทวนด่วน)       (ทบทวนพรุ่งนี้)    (ผ่าน / เพิ่มระยะ)     │
└────────────────────────────────────────────────────────┘
```

- **Buttons mapping:**
  - `[🔴 จำไม่ได้]`: Sets Leitner box to 1, next review within 12 hours.
  - `[🟡 ปานกลาง]`: Increments interval by 1 day, keeps box.
  - `[🟢 จำแม่น/ง่ายมาก]`: Advances word to next Leitner box, sets next review to +3 or +7 days.

---

## 8. Form Input & Speech Controls

### 8.1 Textarea Input Area
Standard input area for typing business replies or draft emails.
- **Classes:** `textarea textarea-bordered w-full h-32 focus:border-emerald-500`
- **Placeholder:** `พิมพ์ประโยคตอบภาษาเวียดนามที่นี่...`

### 8.2 Microphone speech triggers
Used for Speech-to-Text validation.
- **Visuals:** Circle button, microphone icon.
- **States:**
  - *Idle:* Gray icon, outline.
  - *Listening (Active STT):* Red background, pulsing glow animations, text label changing to `🔴 กำลังบันทึกเสียงพูด... พูดภาษาเวียดนามได้เลย`.
  - *Supported browser:* Chrome/Safari compatible with browser-native Web Speech API. Toggles alternative fallback text input on unsupported devices.

---

## 9. Feedback & Notification Indicators

### 9.1 Smart Fail Correction Modal
Renders when the user makes a mistake on a quiz question. **Never** just say "wrong"; describe the root linguistic error.
- **Visuals:** Toast overlay or popover panel, light red tint background, warning border.
- **Linguistic feedback mapping:**
  - *Tone confusion:* Shows comparison curves, e.g. "คุณเลือก má ↗️ (เสียงจัตวา) แต่คำตอบที่ถูกต้องคือ mà ↘️ (เสียงเอก) นะครับ".
  - *Vowel swap:* Displays mouth position differences (e.g., â vs a).

### 9.2 Success Toast Notification
Dynamic popup in the top-right corner.
- **Triggers:** Completing a module, answering 5 correct questions, updating streak.
- **Visual:** `badge badge-success`, emerald green, slide-in animation.

---

## 10. JSON Output Mapping

Response frames fetched from the local FastAPI backend `/api/quest/chat` conform to this JSON schema:

```json
{
  "system_state_update": {
    "update_error_log": "string | null",
    "adjust_difficulty": -1 | 0 | 1,
    "trigger_srs": false | true
  },
  "feedback_layer": "Thai diagnostic guidance or encouraging feedback.",
  "core_content_layer": "Primary Vietnamese lesson/dialogue block. Formatting uses HTML tags.",
  "audio_directive": {
    "text_to_synthesize": "Vietnamese audio string",
    "speed_rate": 1.0 | 0.8 | 0.6
  },
  "interaction_prompt": "Specific prompt instruction telling user what button/input to perform.",
  "ui_render_directive": {
    "keyboard_type": "Options_Grid" | "Free_Text_Input" | "Spelling_Assembly",
    "inline_buttons": [
      ["Option Text A", "Option Text B"],
      ["🔊 Replay Audio"]
    ]
  }
}
```

---

*Generated: 2026-05-24 | Phase 4: UI Design*
