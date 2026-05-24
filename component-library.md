# Component Library — Learn Vietnamese Telegram Bot

> **Phase:** P4 UI Design
> **Status:** Draft
> **Aligns with:** MASTER-SYSTEM-PROMPT.md v2.0
> **Design Tokens:** `design-tokens.css`

---

## Table of Contents

1. [Message Types](#1-message-types)
2. [Inline Keyboards](#2-inline-keyboards)
3. [Progress Display](#3-progress-display)
4. [Feedback Components](#4-feedback-components)
5. [Tone Display](#5-tone-display)
6. [Audio Integration](#6-audio-integration)
7. [Spelling Drill](#7-spelling-drill)
8. [Quiz & Assessment](#8-quiz--assessment)
9. [Roleplay Conversation](#9-roleplay-conversation)
10. [Onboarding](#10-onboarding)
11. [Settings & Preferences](#11-settings--preferences)
12. [Error & Empty States](#12-error--empty-states)
13. [JSON Output Mapping](#13-json-output-mapping)

---

## 1. Message Types

Every interaction uses one of 3 message layouts. Mapping aligns with `ui_render_directive.keyboard_type` in the JSON output.

### 1.1 Bot Message

The primary teaching message. Sent by the bot with lesson content, explanations, or questions.

```json
{
  "feedback_layer": "Short emotional validation or diagnostic feedback in Thai.",
  "core_content_layer": "Main lesson text. **Vietnamese** with tone emoji, *Thai* pronunciation guide.",
  "interaction_prompt": "Direct instruction telling user what to do next.",
  "ui_render_directive": {
    "keyboard_type": "Inline_Keyboard"
  }
}
```

**Layout:**
```
┌──────────────────────────────────────┐
│  🙂 Bot Avatar                       │
│                                      │
│  **feedback_layer**                  │
│  โอ๊ะ! พลาดไปนิดเดียวคับ 😅           │
│                                      │
│  **core_content_layer**              │
│  คำว่า **Cảm ơn** ❓ (ก๋าม-เอิน)       │
│                                      │
│  🔊 — **interaction_prompt**         │
│  เลือกคำตอบที่แปลว่า "ขอบคุณ"         │
│                                      │
│  ┌──────────┬──────────┐             │
│  │ Cảm ơn   │ Cấm ơn   │  ← inline  │
│  ├──────────┴──────────┤   keyboard  │
│  │ 🔊 ฟังความต่าง       │             │
│  └─────────────────────┘             │
└──────────────────────────────────────┘
```

**States:**
| State | Visual | Behavior |
|-------|--------|----------|
| Default | White bubble, shadow | Content + keyboard visible |
| Loading | Pulsing indicator (3 dots) | Shown while bot generates response |
| Error | Red tint, retry button | Network failure / API error |

### 1.2 User Message

The user's reply — quiz answer, free text, or menu selection.

```json
{
  "ui_render_directive": {
    "keyboard_type": "Text_Input_Required"
  }
}
```

**Layout:**
```
┌──────────────────────────────────────┐
│                        User Avatar 🤓│
│                                      │
│  Answer / text input                 │
│  > Cảm ơn ❓                        │
└──────────────────────────────────────┘
```

**Input modes:**
| Mode | Telegram Mechanism | Use Case |
|------|-------------------|----------|
| Inline Keyboard button press | `callback_query` | Quiz answers, menu selection, spelling drill |
| Free text | `message.text` | Roleplay responses, open-ended questions |
| /command | `message.entities` | Menu commands: `/start`, `/learn`, `/review`, `/progress` |

### 1.3 System Message

Non-interactive notifications: progress updates, streak alerts, SRS reminders.

```json
{
  "ui_render_directive": {
    "keyboard_type": "End_Module_Summary"
  }
}
```

**Layout:**
```
┌──────────────────────────────────────┐
│         📊 System Notification       │
│                                      │
│  Progress: [██████░░░░] 60%         │
│  🔥 7-Day Streak!                   │
│  📚 47 คำที่จำได้                    │
│                                      │
│  ┌──────────────┐                    │
│  │ 📖 เรียนต่อ   │   ← inline btn    │
│  └──────────────┘                    │
└──────────────────────────────────────┘
```

---

## 2. Inline Keyboards

All user interaction via Telegram Inline Keyboards. No free-text required for quiz/selection modes.

### 2.1 Selection Keyboard (Quiz Answer)

2-4 options in a grid. Used for MCQ, minimal pair identification, and menu selection.

```json
{
  "ui_render_directive": {
    "keyboard_type": "Inline_Keyboard",
    "inline_buttons": [
      ["Option A", "Option B"],
      ["Option C", "Option D"],
      ["🔊 ฟังอีกครั้ง"]
    ]
  }
}
```

**Layout:**
```
┌─────────────┬─────────────┐
│  Option A   │  Option B   │
├─────────────┼─────────────┤
│  Option C   │  Option D   │
├─────────────┴─────────────┤
│  🔊 ฟังอีกครั้ง              │
└───────────────────────────┘
```

**Row patterns:**
| Columns | Buttons/row | Use Case |
|---------|------------|----------|
| 2 cols | 2 per row | MCQ with 4 options, minimal pairs |
| 3 cols | 3 per row | Spelling drill (choose consonant/vowel) |
| 1 col  | 1 per row | Menu navigation, confirmation, "continue" |
| 4 cols | 4 per row | Tone selection (6 tones in 2 rows of 3 or 2+3+1) |

**States after selection:**
| State | Visual | Timing |
|-------|--------|--------|
| Unselected | Default button style | Before user taps |
| Selected (correct) | Green border + ✅ | Immediate on selection |
| Selected (wrong) | Red border + ❌ | Immediate on selection |
| Correct answer revealed | Green highlight | Only in delayed-reveal mode |
| Disabled | Gray, 40% opacity | After time-out or single-answer quiz |

### 2.2 Navigation Keyboard

Menu-style buttons for choosing between modules, features, or flow control.

```json
{
  "ui_render_directive": {
    "inline_buttons": [
      ["📖 เรียนรู้", "🔄 ทบทวน"],
      ["🎯 Tone Practice", "💬 Roleplay"],
      ["📊 ความคืบหน้า", "⚙️ ตั้งค่า"]
    ]
  }
}
```

**Layout:**
```
┌──────────────┬──────────────┐
│  📖 เรียนรู้  │  🔄 ทบทวน    │
├──────────────┼──────────────┤
│  🎯 Tone     │  💬 Roleplay │
├──────────────┼──────────────┤
│  📊 ความคืบ   │  ⚙️ ตั้งค่า   │
└──────────────┴──────────────┘
```

### 2.3 Confirmation Keyboard

Simple yes/no or continue/stop. Used before starting SRS review, exiting a module, or deleting data.

```json
{
  "ui_render_directive": {
    "inline_buttons": [
      ["✅ ใช่ ทำต่อเลย", "⏸️ พักก่อน"]
    ]
  }
}
```

### 2.4 Audio Playback Keyboard

Contains only audio-related buttons. Usually appended as the last row.

```json
{
  "ui_render_directive": {
    "inline_buttons": [
      ["🔊 ฟังอีกครั้ง", "🔊 ฟังช้าๆ"]
    ]
  }
}
```

| Button | `callback_data` | Action |
|--------|----------------|--------|
| 🔊 ฟังอีกครั้ง | `audio_replay` | Replay at current speed |
| 🔊 ฟังช้าๆ | `audio_slow` | Replay at 0.8x speed |
| 🔊 ฟังความต่าง | `audio_compare` | Play minimal pair in sequence |

---

## 3. Progress Display

### 3.1 Progress Bar

Text-based visual progress indicator. Used in both system messages and as inline text.

```json
{
  "core_content_layer": "Progress: ▰▰▰▰▰▰▰▰▰▰▰▰▱▱▱▱▱▱▱▱ 60%"
}
```

**Patterns:**
| Fill Char | Empty Char | Ratio | Visual |
|-----------|-----------|-------|--------|
| ▰ (filled) | ▱ (empty) | 24 chars | ▰▰▰▰▰▰▰▰▰▰▰▰▱▱▱▱▱▱▱▱ |
| 🟩 | ⬜ | 10 chars | 🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜ |
| █ | ░ | 20 chars | ████████████░░░░░░ |

**Rule:** Always show fraction + percentage: `56/100 56%`

### 3.2 Streak Counter

```json
{
  "core_content_layer": "🔥 **7-Day Streak!** เรียนมา 7 วันติดต่อกันแล้ว!"
}
```

**Visual:** `🔥 N-Day Streak!` with encouraging message.

**States:**
| State | Text | Emoji |
|-------|------|-------|
| Active (1-2 days) | 🔥 N วัน | Normal flame |
| Active (3-6 days) | 🔥 N วัน! | Flame + exclamation |
| Active (7+ days) | 🔥🔥 N วัน!!! | Double flame, celebratory |
| Broken | 💔 Streak หายแล้ว... | Heartbreak, gentle |
| At risk (no activity yesterday) | ⏰ อย่าลืมเรียนวันนี้! | Bell/alarm |

### 3.3 Level / Module Progress

```json
{
  "core_content_layer": "📚 **Level 1: ทักทายพื้นฐาน**\n\nบทที่ 3/7 · วันนี้ 4/10 นาที"
}
```

**Format:** `📚 Level N: Title\nบทที่ X/7 · วันนี้ Y/10 นาที`

### 3.4 Skill Breakdown (Tone Accuracy)

```json
{
  "core_content_layer": "📝 **คะแนนวรรณยุกต์**\n\n➡️  ✅ · ↘️  ✅ · ↗️  ✅\n❓  ❌ · 〰️  ❌ · ⬇️  ❌\n\n> Focus on Hỏi ❓ and Ngã 〰️ — these are your weak spots!"
}
```

**Format:** Each tone emoji + ✅ or ❌ + count. Weak tones highlighted with focus tip.

---

## 4. Feedback Components

### 4.1 Correct Answer Feedback

```json
{
  "feedback_layer": "✅ ถูกต้อง! เยี่ยมมากคับ! 🎉",
  "ui_render_directive": {
    "inline_buttons": [["📖 ต่อไป"]]
  }
}
```

**Feedback levels:**
| Performance | Feedback | Visual |
|-------------|----------|--------|
| Correct (no errors) | ✅ ถูกต้อง! เยี่ยมมาก! 🎉 | Green + sparkle emoji |
| Correct (1 error) | ✅ ถูกแล้ว! เก่งมากคับ 💪 | Green + flexed bicep |
| Correct (2+ errors) | ✅ ในที่สุดก็ถูก! สู้ๆ คับ 💪🔥 | Green + fire, encouragement |
| Perfect streak (3+) | ⭐🔥 PERFECT! 3 ติด! สุดยอด! | Star + fire + celebration |

### 4.2 Wrong Answer Feedback (Smart Fail)

**NEVER say "Incorrect. The answer is X."** Must diagnose WHY the user chose wrong.

```json
{
  "feedback_layer": "โอ๊ะ! เกือบถูกแล้วคับ 😅",
  "core_content_layer": "คำที่คุณเลือกคือ **Cấm ơn** คำว่า Cấm แปลว่า \"ห้าม\" คับ!\n\nถ้าเราจะขอบคุณ ต้องใช้สระ a-m คือ **Cảm** ❓ (ก๋าม-เอิน)\n\nCấm ơn = ห้ามขอบคุณ 😅",
  "audio_directive": {
    "text_to_synthesize": "Cảm ơn. Cấm ơn.",
    "speed_rate": 0.8
  },
  "interaction_prompt": "ลองฟังความต่าง แล้วเลือกอีกครั้งคับ",
  "ui_render_directive": {
    "inline_buttons": [
      ["Cảm ơn", "Cấm ơn"],
      ["🔊 ฟังความต่าง"]
    ]
  }
}
```

**5 Diagnostic Error Types** (from `smart-fail-protocol.md`):
| Error Type | Cause | Smart Fail Approach |
|------------|-------|-------------------|
| **TONE_MISMATCH** | User confused Hỏi vs Ngã, or Sắc vs Nặng | Compare tone contours, use Thai analog |
| **VOWEL_SWAP** | User mixed a/ă/â or ô/ơ | Explain vowel shape, mouth position |
| **CONSONANT_CONFUSION** | User mixed c/k/qu or d/đ | Contrast minimal pair, mouth/tongue position |
| **FINAL_CONSONANT** | User dropped terminal -c, -t, -ng | Connect to Thai แม่กก/กด/กน |
| **SEMANTIC_SLIP** | User knew pronunciation but chose wrong meaning | Correct meaning + context anchor |

### 4.3 Encouragement Patterns

| Scenario | Message |
|----------|---------|
| First correct answer | ✅ เยี่ยม! เริ่มต้นได้ดีมาก! 🎉 |
| After error streak (3+) | ไม่เป็นไรคับ! พักก่อน แล้วค่อยมาลองใหม่นะ 💪 |
| Halfway through module | 👍 ครึ่งทางแล้ว! สู้ๆ! 🔥 |
| Module complete | 🎉✨ ผ่านบทนี้แล้ว! ยอดเยี่ยม! |
| Daily goal reached | 🏆 เรียนครบ 10 นาทีวันนี้แล้ว! |
| Streak milestone (7 days) | 🔥🔥🔥 หนึ่งอาทิตย์แล้ว! ทำได้เยี่ยมมาก! |

---

## 5. Tone Display

### 5.1 Tone Reference Card

Shown during onboarding and as reference when user requests help.

```json
{
  "core_content_layer": "## 🎵 วรรณยุกต์เวียดนาม 6 เสียง\n\n➡️ **Ngang** (ราบ) — เสียงสามัญไทย\n↘️ **Huyền** (ต่ำ) — เสียงเอกไทย\n↗️ **Sắc** (สูง) — เสียงจัตวาไทย\n❓ **Hỏi** (ถาม) — ขึ้นแล้วลง ไม่มีในไทย\n〰️ **Ngã** (น้ำ) — เสียงสะดุด ไม่มีในไทย\n⬇️ **Nặng** (กลั้น) — สั้นกระแทก ไม่มีในไทย\n\n> 💡 Tips: Hỏi → เหมือนถามคำถาม · Ngã → เหมือนสะดุด · Nặng → เหมือนตัดคำ"
}
```

**Layout:**
```
┌──────────────────────────────────────┐
│  🎵 วรรณยุกต์เวียดนาม 6 เสียง        │
│                                      │
│  ➡️  Ngang (ราบ)  — เสียงสามัญไทย    │
│  ↘️  Huyền (ต่ำ)  — เสียงเอกไทย      │
│  ↗️  Sắc (สูง)    — เสียงจัตวาไทย    │
│  ❓  Hỏi (ถาม)    — ขึ้นแล้วลง        │
│  〰️  Ngã (น้ำ)    — เสียงสะดุด        │
│  ⬇️  Nặng (กลั้น)  — สั้นกระแทก       │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ แบบฝึกหัด: แยกเสียง ➡️↘️↗️   │    │
│  └──────────────────────────────┘    │
└──────────────────────────────────────┘
```

### 5.2 Word with Tone Label

Every new word display includes its Vietnamese spelling + tone emoji + Thai pronunciation.

```
**tôi** ➡️ (โดย) = ผม/ฉัน
**bạn** ↘️ (บ่าน) = คุณ
**má** ↗️ (มา/จัตวา) = แม่ (ต่างจาก mà!)
```

---

## 6. Audio Integration

### 6.1 Audio Button

Every word or phrase with a synthesized audio file. 2-3 seconds per word, full sentence for phrases.

```json
{
  "audio_directive": {
    "text_to_synthesize": "Xin chào",
    "speed_rate": 1.0
  }
}
```

**Display:**
```
🔊 **xin chào** ➡️ (สิน-เชา) = สวัสดี 👋
```

**Speed control:**
| `speed_rate` | Label | Use Case |
|-------------|-------|----------|
| 1.0 | Normal | Default playback |
| 0.8 | ช้า (Slow) | New word first exposure |
| 0.6 | ช้ามาก (Very Slow) | Problem phoneme / tone drill |

### 6.2 Audio Compare Mode

Play two similar words side-by-side for minimal pair training.

```json
{
  "audio_directive": {
    "text_to_synthesize": "ma. mà. má. mả. mã. mạ.",
    "speed_rate": 0.8
  }
}
```

**Layout:** 🔄 **ma** ➡️ vs **mà** ↘️ — ฟังความต่าง: `[🔊 ฟัง]`

---

## 7. Spelling Drill

Break word assembly into sequential steps. Uses Inline Keyboard for each step.

**Flow reference:** MASTER-SYSTEM-PROMPT.md §5 — The Spelling Drill Protocol.

### 7.1 Step-by-Step Assembly

```json
{
  "feedback_layer": "สะกดคำว่า **Mẹ** ⬇️ (แม่) กันเถอะ!",
  "ui_render_directive": {
    "keyboard_type": "Inline_Keyboard",
    "inline_buttons": [
      ["m", "n", "b"]
    ]
  }
}
```

**Step sequence:**

| Step | Prompt | Buttons |
|------|--------|---------|
| 1. Consonant | "เลือกพยัญชนะต้น" | [m] [n] [b] [l] |
| 2. Vowel | "เลือกสระ" | [a] [e] [i] [o] [u] |
| 3. Final (if any) | "เลือกตัวสะกด" | [none] [-c] [-n] [-ng] [-t] [-p] |
| 4. Tone | "เลือกวรรณยุกต์" | [➡️] [↘️] [↗️] [❓] [〰️] [⬇️] |
| 5. Result | Backend synthesizes audio for assembly | "ฟังผลลัพธ์" button |

**State machine:**
```
[Start] → Step 1: Consonant
           ↓ correct / wrong feedback
         [Step 2: Vowel] ← retry if wrong
           ↓
         Step 3: Final (if applicable)
           ↓
         Step 4: Tone
           ↓
         [Result: Audio synthesis + word reveal]
           ↓
         [Continue / Retry / Next word]
```

### 7.2 Error Handling in Spelling Drill

| Error | Response | Action |
|-------|----------|--------|
| Wrong consonant | "❌ ผิด! **Mẹ** เริ่มด้วย **m** นะคับ" | Show hint, retry same step |
| Wrong vowel | "❌ ผิด! เสียงสระคือ **e** เหมือน 'bed'" | Show anchor, retry |
| Wrong tone | "❌ ผิด! **Mẹ** เป็นเสียง **Nặng** ⬇️ — สั้นกระแทก" | Play audio, retry with fewer options |

After 2 failures on same step: scaffold down — reduce choices to 2 options + show Thai hint.

---

## 8. Quiz & Assessment

### 8.1 Multiple Choice Quiz

```json
{
  "feedback_layer": "ข้อต่อไป! คำว่า 'สวัสดี' เป็นภาษาเวียดนามคืออะไร?",
  "ui_render_directive": {
    "inline_buttons": [
      ["Xin chào ➡️", "Cảm ơn ❓"],
      ["Tạm biệt ⬇️", "Xin lỗi ❓"],
      ["🔊 ฟังตัวเลือก"]
    ]
  }
}
```

### 8.2 Minimal Pair Identification

```json
{
  "feedback_layer": "ฟังแล้วเลือกคำที่แปลว่า 'แม่'",
  "audio_directive": {
    "text_to_synthesize": "ma. má.",
    "speed_rate": 0.8
  },
  "ui_render_directive": {
    "inline_buttons": [
      ["ma ➡️ (ผี)", "má ↗️ (แม่)"],
      ["🔊 ฟังอีกครั้ง"]
    ]
  }
}
```

### 8.3 Tone Identification

Play audio, user identifies which tone they heard.

```json
{
  "feedback_layer": "คำนี้ออกเสียงวรรณยุกต์อะไร?",
  "audio_directive": {
    "text_to_synthesize": "bả",
    "speed_rate": 1.0
  },
  "ui_render_directive": {
    "inline_buttons": [
      ["➡️", "↘️", "↗️"],
      ["❓", "〰️", "⬇️"],
      ["🔊 ฟังอีกครั้ง"]
    ]
  }
}
```

### 8.4 SRS Review Quiz

Spaced repetition review card. Triggered when `trigger_srs: true`.

```json
{
  "system_state_update": {
    "trigger_srs": true,
    "update_error_log": null
  },
  "feedback_layer": "🔄 เวลาทบทวนแล้ว! คำนี้ยังจำได้ไหม?",
  "core_content_layer": "**cảm ơn** ❓",
  "interaction_prompt": "คำนี้แปลว่าอะไร?",
  "ui_render_directive": {
    "inline_buttons": [
      ["สวัสดี", "ขอบคุณ 🙏"],
      ["ขอโทษ", "ลาก่อน"],
      ["🔊 ฟังคำศัพท์"]
    ]
  }
}
```

**SRS schedule mapping:**
| Stage | Delay | Quiz type | Prompt |
|-------|-------|-----------|--------|
| 0 (New) | Immediate | Recognition (4 choices) | "จำได้ไหม?" |
| 1 | 1 day | Recall (2 choices) | "ลองทบทวน" |
| 2 | 3 days | Recall (2 choices) | "ยังจำได้?" |
| 3 | 7 days | Production (type answer) | "พิมพ์คำตอบ" |
| 4 | 14 days | Production (type answer) | "ทบทวนอีกครั้ง" |
| 5 | 30 days | Roleplay use | "ใช้ในประโยค" |
| 6 (Mastered) | — | Archived | ✅ Mastered |

---

## 9. Roleplay Conversation

Simulated dialogue where the AI plays a role (vendor, waiter, receptionist) and the user responds in Vietnamese.

### 9.1 Roleplay Mode Trigger

```json
{
  "feedback_layer": "🎭 **Roleplay: สั่งกาแฟ**\n\nคุณกำลังยืนอยู่หน้าร้านกาแฟในฮานอย\nพนักงานถามว่า:\n\n> \"Chị muốn uống gì ạ?\" ❓\n> (พี่อยากดื่มอะไรคะ?)",
  "audio_directive": {
    "text_to_synthesize": "Chị muốn uống gì ạ?",
    "speed_rate": 1.0
  },
  "interaction_prompt": "พิมพ์คำตอบเป็นภาษาเวียดนาม หรือเลือกจากตัวเลือกด้านล่าง:",
  "ui_render_directive": {
    "keyboard_type": "Inline_Keyboard",
    "inline_buttons": [
      ["Cho tôi cà phê sữa ạ 🙋"],
      ["Tôi không biết 🤷"],
      ["🔊 ฟังคำถามอีกครั้ง"]
    ]
  }
}
```

### 9.2 Roleplay Progression

| Phase | AI Role | User Role | Scaffolding |
|-------|---------|-----------|-------------|
| Setup | Narrator — sets scene & context | Listener (read only) | Full Thai explanation |
| Opening | Shopkeeper — asks first question | Customer — choose reply | 3 inline options (Tier 1) |
| Response | React to user choice | Continue conversation | 2 inline options (Tier 2) |
| Free-form | Branch based on user input | Type own reply (Tier 3) | Thai hints only |
| Wrap-up | Summary + new vocab learned | — | Review card |

### 9.3 Branching Error Handling

If user types something unexpected or incorrect during roleplay:

```json
{
  "feedback_layer": "พนักงานงงนิดนึง 😅 แต่ไม่เป็นไร!",
  "core_content_layer": "คุณพิมพ์ว่า \"{user_text}\"\n\nถ้าคุณสั่งกาแฟ แบบธรรมชาติคือ:\n**\"Cho tôi cà phê sữa ạ\"** 🙋\n(ขอ กาแฟนม ครับ/คะ)",
  "audio_directive": {
    "text_to_synthesize": "Cho tôi cà phê sữa ạ",
    "speed_rate": 0.8
  },
  "interaction_prompt": "ลองพูดอีกครั้ง หรือถามเพิ่มเติมได้เลย!",
  "ui_render_directive": {
    "inline_buttons": [
      ["Cho tôi cà phê sữa ạ"],
      ["💬 ถามเรื่องอื่น"]
    ]
  }
}
```

---

## 10. Onboarding

### 10.1 Goal Selection

```json
{
  "feedback_layer": "👋 **Xin chào!** ยินดีต้อนรับ!\n\nก่อนเริ่มเรียน บอกเป้าหมายของคุณหน่อยได้ไหม?",
  "ui_render_directive": {
    "inline_buttons": [
      ["🏖️ ท่องเที่ยว", "💼 ทำงาน/ธุรกิจ"],
      ["🗣️ สนทนาทั่วไป"]
    ]
  }
}
```

**After selection:**
```json
{
  "feedback_layer": "เยี่ยม! ปรับเนื้อหาให้คุณ {goal} แล้วคับ 🎯\n\nเริ่มกันเลย!",
  "ui_render_directive": {
    "inline_buttons": [
      ["เริ่มเรียนวันนี้ 📖"]
    ]
  }
}
```

### 10.2 Level Placement

Optional quick assessment to skip known material.

```json
{
  "feedback_layer": "คุณเคยเรียนภาษาเวียดนามมาก่อนไหม?",
  "ui_render_directive": {
    "inline_buttons": [
      ["ไม่เคยเลย 🆕", "พอรู้บ้าง 🟡"],
      ["พูดได้นิดหน่อย 🟢"]
    ]
  }
}
```

---

## 11. Settings & Preferences

```json
{
  "feedback_layer": "⚙️ **ตั้งค่า**\n\nปรับประสบการณ์การเรียนของคุณ",
  "ui_render_directive": {
    "inline_buttons": [
      ["🔊 ความเร็วเสียง: ปกติ", "📝 ภาษาไทยล้วน"],
      ["🎯 เป้าหมายรายวัน: 10 นาที"],
      ["🌙 โหมดกลางคืน", "🔄 รีเซ็ตความคืบหน้า"],
      ["🔙 กลับ"]
    ]
  }
}
```

| Setting | Options | Default | Effect |
|---------|---------|---------|--------|
| Audio speed | Normal / Slow / Very Slow | Normal | `speed_rate` in all audio directives |
| Instruction language | Thai only / Transition to VI | Thai only | Lexical adjustment rate |
| Daily goal | 5 / 10 / 15 / 20 min | 10 min | Progress tracking target |
| Dark mode | System / Light / Dark | System | `prefers-color-scheme` |
| Reset | Confirm dialog | — | Clears all progress data |

---

## 12. Error & Empty States

### 12.1 Network Error

```json
{
  "feedback_layer": "⚠️ **เสียใจด้วย!** เกิดข้อผิดพลาดในการเชื่อมต่อ",
  "core_content_layer": "ไม่สามารถสร้างเสียงหรือดึงข้อมูลได้ในขณะนี้\nกรุณาลองอีกครั้งในอีกสักครู่",
  "ui_render_directive": {
    "inline_buttons": [
      ["🔄 ลองอีกครั้ง"]
    ]
  }
}
```

### 12.2 No Data / Empty State

```json
{
  "feedback_layer": "📭 ยังไม่มีข้อมูลการเรียนในส่วนนี้",
  "core_content_layer": "เริ่มเรียนก่อน แล้วเราจะแสดงความคืบหน้าที่นี่!",
  "ui_render_directive": {
    "inline_buttons": [
      ["📖 เริ่มเรียน"]
    ]
  }
}
```

### 12.3 Rate Limit / Quota

```json
{
  "feedback_layer": "⏳ รอสักครู่... กำลังประมวลผล",
  "core_content_layer": "ระบบกำลังทำงาน กลับมาใหม่ใน 2-3 วินาทีนะคับ",
  "ui_render_directive": {
    "keyboard_type": "Text_Input_Required"
  }
}
```

---

## 13. JSON Output Mapping

Every bot response maps to this JSON structure (from MASTER-SYSTEM-PROMPT.md v2.0 §6):

```json
{
  "system_state_update": {
    "update_error_log": "string | null",
    "adjust_difficulty": -1 | 0 | 1,
    "trigger_srs": false | true
  },
  "feedback_layer": "Thai — emotional validation or diagnostic. Short. Conversational.",
  "core_content_layer": "Lesson content. **Vietnamese** + emoji, *Thai* pronunciation.",
  "audio_directive": {
    "text_to_synthesize": "Vietnamese TTS string",
    "speed_rate": 1.0 | 0.8 | 0.6
  },
  "interaction_prompt": "Direct instruction or question for the user.",
  "ui_render_directive": {
    "keyboard_type": "Inline_Keyboard | Text_Input_Required | End_Module_Summary",
    "inline_buttons": [
      ["Row 1 - Btn A", "Row 1 - Btn B"],
      ["Row 2 - Btn A"]
    ]
  }
}
```

### Component-to-JSON mapping matrix:

| Component | `keyboard_type` | `inline_buttons` Pattern |
|-----------|----------------|------------------------|
| MCQ Quiz | `Inline_Keyboard` | 2×2 grid + audio row |
| Spelling Drill | `Inline_Keyboard` | Per-step options (varies) |
| Tone Practice | `Inline_Keyboard` | 2 rows of 3 + audio row |
| Menu Navigation | `Inline_Keyboard` | 2-column navigation grid |
| SRS Review | `Inline_Keyboard` | 2×2 or single answer choices |
| Roleplay | `Inline_Keyboard` | Suggested replies (1-3 options) |
| Free-form Question | `Text_Input_Required` | None (keyboard type only) |
| Module Summary | `End_Module_Summary` | Continue / Next module button |
| System Notification | `Text_Input_Required` | None (no interaction needed) |

---

*End of Component Library — Learn Vietnamese Telegram Bot v1.0*
