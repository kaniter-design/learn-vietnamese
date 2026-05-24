# Information Architecture — Learn Vietnamese Bot

> Phase 3: UX Design
> Bot structure, command hierarchy, state map, data schema

---

## 🏗 Bot IA Structure

```
Vietnamese Tutor Bot
│
├── 🏠 หน้าแรก (/start)
│   ├── ทักทายกลับ (returning user)
│   ├── ทดสอบระดับ (new user)
│   │   ├── 5 ข้อประเมิน
│   │   └── ผล → กำหนด Level
│   └── เมนูหลัก
│
├── 📚 เรียน (/learn)
│   ├── Level 0: ระบบเสียง
│   │   ├── 0.1 ตัวอักษร (29 ตัว)
│   │   ├── 0.2 สระ (12 สระ)
│   │   ├── 0.3 พยัญชนะ (17 ตัว)
│   │   ├── 0.4 วรรณยุกต์ (6 เสียง)
│   │   │   ├── อธิบายแต่ละเสียง
│   │   │   ├── เปรียบเทียบกับไทย
│   │   │   └── ฝึกแยกเสียง (audio)
│   │   ├── 0.5 ฝึกเสียง (minimal pairs)
│   │   └── 0.6 อ่านพื้นฐาน
│   ├── Level 1: Survival
│   │   ├── 1.1 ทักทาย
│   │   ├── 1.2 แนะนำตัว
│   │   ├── 1.3 ตัวเลข
│   │   ├── 1.4 เงิน/ราคา
│   │   ├── 1.5 เวลา/วันที่
│   │   ├── 1.6 ทิศทาง
│   │   ├── 1.7 อาหาร/เครื่องดื่ม
│   │   ├── 1.8 การเดินทาง
│   │   ├── 1.9 ช้อปปิ้ง
│   │   └── 1.10 เหตุฉุกเฉิน
│   ├── Level 2: Business Basics
│   │   ├── 2.1 แนะนำบริษัท
│   │   ├── 2.2 ตำแหน่งงาน
│   │   ├── 2.3 การประชุม
│   │   ├── 2.4 โทรศัพท์ธุรกิจ
│   │   ├── 2.5 อีเมลเบื้องต้น
│   │   ├── 2.6 เทมเพลตอีเมล
│   │   ├── 2.7 ตัวเลขธุรกิจ
│   │   ├── 2.8 วันที่/กำหนดส่ง
│   │   ├── 2.9 นัดหมาย
│   │   └── 2.10 Small talk
│   └── Level 3-4: Advanced Business (v0.3)
│
├── 🃏 ท่องคำ (/flashcards)
│   ├── ทบทวน SRS
│   │   ├── แสดงคำ → ดูคำแปล → ให้คะแนน
│   │   └── แสดงผล + ตัวอย่าง + เปรียบเทียบเสียง
│   ├── ดูคำทั้งหมด (pagination)
│   ├── เพิ่มคำ (manual)
│   └── สถิติ (จำนวนคำ, คะแนนเสียง)
│
├── 📝 วรรณยุกต์ (/tones)
│   ├── ฝึกแยกเสียง (audio MCQ)
│   │   ├── เลือกเสียงที่ถูกต้อง
│   │   ├── ฟัง minimal pair
│   │   └── เปรียบเทียบไทย
│   ├── คะแนนแต่ละเสียง
│   └── เสียงที่ยังสับสน (targeted practice)
│
├── 💬 สนทนา (/conversation)
│   ├── เลือกสถานการณ์
│   │   ├── ☕ สั่งกาแฟ
│   │   ├── ✈️ เดินทาง
│   │   ├── 🏪 ช้อปปิ้ง
│   │   ├── 🏢 แนะนำบริษัท
│   │   ├── 📧 อีเมลธุรกิจ
│   │   └── 🎲 สุ่ม
│   ├── สนทนากับ AI
│   │   ├── User พิมพ์
│   │   ├── AI typing indicator
│   │   ├── AI ตอบ + แก้ไข
│   │   └── จบ → สรุป
│   └── ประวัติสนทนา
│
├── 📊 ความก้าวหน้า (/progress)
│   ├── Streak
│   ├── คำศัพท์ที่จำได้
│   ├── บทเรียนที่เรียน
│   ├── สนทนาที่ฝึก
│   ├── คะแนนวรรณยุกต์
│   ├── Level progress (%)
│   └── รายงานรายสัปดาห์
│
└── ⚙️ ตั้งค่า (/settings)
    ├── ภาษา (ไทย/เวียดนาม/คู่)
    ├── Level (ปรับเองได้)
    ├── เป้าหมายวัน (5/10/15/20 นาที)
    ├── การแจ้งเตือน (เปิด/ปิด)
    ├── เสียง (เปิด/ปิด — สำหรับ audio)
    └── ข้อมล (export/reset)
```

---

## 🔄 State Machine

```
                ┌───────────┐
                │   IDLE    │ ← Default (waiting for command)
                │           │
                └─────┬─────┘
                      │
     ┌────────────────┼────────────────┬──────────────────┐
     │                │                │                  │
┌────▼────┐    ┌──────▼──────┐   ┌────▼────┐     ┌──────▼──────┐
│ LEARN   │    │ FLASHCARDS  │   │ TONES   │     │CONVERSATION │
│         │    │             │   │         │     │             │
└────┬────┘    └──────┬──────┘   └────┬────┘     └──────┬──────┘
     │                │               │                  │
     ▼                ▼               ▼                  ▼
┌─────────┐    ┌────────────┐   ┌──────────┐    ┌──────────────┐
│Lesson   │    │Review      │   │Listening │    │Chat Session  │
│Active   │    │Session     │   │Practice  │    │Active        │
│         │    │            │   │          │    │              │
│•reading │    │•show word  │   │•play     │    │•user types   │
│•example │    │•show answer│   │ audio    │    │•AI responds  │
│•quiz    │    │•rate       │   │•pick tone│    │•correction   │
└─────────┘    └────────────┘   └──────────┘    └──────┬───────┘
     │                │               │                 │
     │                │               │                 ▼
     │                │               │         ┌──────────────┐
     │                │               │         │  TYPING      │
     │                │               │         │  (AI think)  │
     │                │               │         └──────┬───────┘
     │                │               │                │
     └────────────────┴───────────────┴────────────────┘
                      │
                      ▼
                ┌───────────┐
                │   IDLE    │
                │           │
                └───────────┘
```

### State Transition Rules

| Current State | User Action → | Next State |
|---------------|---------------|------------|
| IDLE | `/learn` or button | LEARN |
| IDLE | `/flashcards` or button | FLASHCARDS |
| IDLE | `/tones` or button | TONES |
| IDLE | `/conversation` or button | CONVERSATION |
| IDLE | `/progress` or button | IDLE (show stats) |
| IDLE | `/settings` or button | IDLE (show settings) |
| IDLE | `/cancel` or `/start` | IDLE (restart) |
| Any | `/cancel` | IDLE |
| Any | button "↩ กลับ" | IDLE (→ Main Menu) |
| LEARN | Cancel or finish lesson | IDLE |
| FLASHCARDS | Cancel or finish review | IDLE |
| TONES | Cancel or finish practice | IDLE |
| CONVERSATION | User sends message | TYPING |
| TYPING | API response received | CONVERSATION (show reply) |
| TYPING | API timeout (>10s) | CONVERSATION (show error + retry) |
| CONVERSATION | End session | IDLE |

---

## 📱 Keyboard Navigation Tree

### Main Menu Keyboard
```
Row 1: [📚 เรียน]        [🃏 ท่องคำ]
Row 2: [💬 สนทนา]        [📊 ความก้าวหน้า]
Row 3: [📝 วรรณยุกต์]     [⚙️ ตั้งค่า]
```

### Contextual Back Buttons
ทุก sub-menu และ action จะมี `[↩ กลับ]` เสมอ

### Audio Button Pattern
ทุกหน้าที่มีเสียงจะมีปุ่ม `[🔊 ฟัง]` อยู่ถัดจากคำศัพท์/ประโยค

---

## 🗃 Data Schema

| Entity | Fields | Relation |
|--------|--------|----------|
| **User** | id, level, language, streak, daily_goal, notification_enabled, sound_enabled, last_active, created_at | Root |
| **Vocabulary** | id, user_id, word_vi, word_th, word_en, pronunciation, tone, part_of_speech, example_vi, example_th, level, next_review, ease_factor, interval, repetitions, srs_stage, last_reviewed, created_at | Many per user |
| **Progress** | id, user_id, type, count, date, week, year | Many per user |
| **LessonProgress** | id, user_id, level, module, completed, score, completed_at | Many per user |
| **ToneStats** | id, user_id, tone_name, correct, total, last_practiced | Many per user |
| **ConversationLog** | id, user_id, scenario, messages, corrections_count, new_words_count, date | Many per user |
| **ErrorLog** | id, user_id, error_type, error_detail, word_id, count, first_seen, last_seen | Many per user |
| **SessionState** | id, user_id, current_module, current_level, current_tier, current_step, context_json, updated_at | One per user |

### SRS Fields (Vocabulary)
| Field | Type | Description |
|-------|------|-------------|
| `ease_factor` | REAL | SM-2 ease factor (default 2.5, min 1.3) |
| `interval` | INTEGER | Days until next review |
| `repetitions` | INTEGER | Consecutive correct count |
| `srs_stage` | INTEGER | Current SRS stage: 0=new, 1=learning, 2=review, 3=mastered |
| `last_reviewed` | TIMESTAMP | Last review timestamp (for SRS calculation) |

### SRS Schedule
| Stage | Interval | Description |
|-------|----------|-------------|
| New | 0 | Never reviewed |
| Learning | 1 day | Just learned |
| Review | 3→7→14→30 days | Spaced repetition |
| Mastered | 60 days | Retention confirmed |

### Error Log Types
| Type | Description |
|------|-------------|
| `tone_confusion` | Wrong tone selected (e.g., Hỏi vs Ngã) |
| `vowel_confusion` | Wrong vowel (e.g., a vs ă vs â) |
| `consonant_confusion` | Wrong consonant (e.g., d vs đ) |
| `spelling_error` | Wrong character in word |
| `grammar_error` | Wrong word order or particle |

### Session State
| Field | Description |
|-------|-------------|
| `current_module` | e.g., "week1_day3_tones" |
| `current_level` | User's current level (0-4) |
| `current_tier` | Scaffolding tier (1=Recognition, 2=Recall, 3=Production) |
| `current_step` | Step within current module |
| `context_json` | JSON blob for interruptible conversations (stores conversation history, roleplay state, etc.) |

### Progress Types
| Type | Description |
|------|-------------|
| `lesson_complete` | Lesson finished |
| `flashcard_review` | Cards reviewed |
| `tone_practice` | Tone questions answered |
| `conversation_msg` | Messages sent in conversation |
| `streak` | Daily streak increment |

### Tone Stats
| Tone | Thai Comparison |
|------|-----------------|
| Ngang | เสียงสามัญ (mid) |
| Huyền | เสียงเอก (low falling) |
| Sắc | เสียงจัตวา (high rising) |
| Hỏi | เสียงถาม (dipping-rising) — ไม่มีในไทย |
| Ngã | เสียงน้ำ (creaky rising) — ไม่มีในไทย |
| Nặng | เสียงกลั้น (low constricted) — ไม่มีในไทย |

---

*Generated: 2026-05-23 | Phase 3: UX Design*
