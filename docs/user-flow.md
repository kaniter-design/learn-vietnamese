# User Flow — Learn Vietnamese Web App (ภาษาเวียดนามสำหรับธุรกิจและราชการ)

> Phase 3: UX Design
> Web layout views, routing navigation, and interaction flows

---

## 📐 Web App View & Routing Structure

```
                    ┌─────────────────────────────┐
                    │      Landing Onboarding     │
                    │   "Xin chào! ยินดีต้อนรับ!"  │
                    └─────────────┬───────────────┘
                                  │
                    ┌─────────────▼───────────────┐
                    │     Level Assessment Wizard │
                    │   (Quick check: 0 หรือ skip) │
                    └─────────────┬───────────────┘
                                  │
                    ┌─────────────▼───────────────┐
                    │    Dashboard / Main View    │
                    │                             │
                    │  [📖 Learn]   [🃏 Flashcard]│
                    │  [💬 Chat]    [📝 Tones]    │
                    │  [📊 Progress][⚙️ Settings] │
                    └──┬────┬────┬────┬────┬──────┘
                       │    │    │    │    │
            ┌──────────┘    │    │    │    └──────────┐
            ▼               ▼    ▼    ▼               ▼
       ┌─────────┐   ┌─────────┐ ┌──────┐ ┌──────────────┐
       │ Learn   │   │ Flash-  │ │ Tones│ │ Chat / Quest │
       │ View    │   │ cards   │ │ View │ │ View         │
       │         │   │ View    │ │      │ │              │
       │Select   │   │Review → │ │Pitch │ │Select quest │
       │level →  │   │Rate SRS │ │contour││→ LLM message │
       │interactive│ │(Leitner)│ │audio │ │→ Speak/Type  │
       │lesson   │   │         │ │quiz  │ │→ Correction  │
       └─────────┘   └─────────┘ └──────┘ └──────────────┘
```

---

## 🔄 Main Flow Diagrams

### 1. Landing Onboarding & Wizard Flow

When a user visits `http://localhost:8000`:

```
User opens site
App checks DB: Is there progress stored?
│
├── [RETURNING USER]
│   App: Direct redirect to Dashboard view
│   Toast Alert: "ยินดีต้อนรับกลับ! 👋 เรียนรู้ต่อจากจุดเดิมเลยนะ"
│
└── [NEW USER]
    App renders Welcome screen: "Xin chào! 👋 ยินดีต้อนรับสู่แอปเรียนภาษาเวียดนาม"
    App explains: "เน้นการเรียนเพื่อธุรกิจและการสื่อสารราชการ อธิบายละเอียดเป็นภาษาไทย"
    
    Interactive Buttons:
    [🚀 ทดสอบระดับภาษา]  [⏭ ข้ามเพื่อเริ่มจาก 0 (แนะนำ)]

    [ASSESSMENT WIZARD — 5 Questions]
         │
         ├── Q1: "คำว่า 'xin chào' แปลว่าอะไร?"
         │   A) ขอบคุณ  B) สวัสดี  C) ลาก่อน  D) ขอโทษ
         │
         ├── Q2: "เลือกคำที่มีเสียงวรรณยุกต์ 'sắc' (เสียงสูง)"
         │   A) ma  B) má  C) mà  D) mả
         │
         ├── Q3: "Cảm ơn แปลว่าอะไร?"
         │   A) ขอโทษ  B) สวัสดี  C) ขอบคุณ  D) แล้วพบกันใหม่
         │
         ├── Q4: "เลือกคำสรรพนามสำหรับการเจรจาที่เป็นทางการ (ใช้แทนตัวเอง)"
         │   A) tôi  B) bạn  C) anh  D) cô
         │
         ├── Q5: "Tạm biệt แปลว่าอะไร?"
         │   A) สวัสดี  B) ขอบคุณ  C) ลาก่อน  D) ขอโทษ
         │
         [SCORING ENGINE]
         5/5 → Level 1 (Survival) — "คุณมีพื้นฐานแล้ว! ปลดล็อกด่านสนทนาเบื้องต้น"
         3-4/5 → Level 0.5 (แนะนำให้ทบทวนระบบเสียงวรรณยุกต์ก่อน)
         0-2/5 → Level 0 (เริ่มจากระบบออกเสียง) — "ไม่เป็นไร! เรามาเริ่มปูพื้นฐานพร้อมกัน"

    [SKIP BUTTON]
         └── Redirect to Dashboard -> Level 0
```

---

### 2. 📖 Learn (บทเรียน) Flow

```
User clicks [Learn] in Navigation Menu
App shows: 📚 Level & Module Selection
     Current Active Level: Level 0 (ระบบเสียงและวรรณยุกต์)
     
     ┌──────────────────────────────────────────────────┐
     │ [Level 0: ระบบเสียงและตัวอักษร] -> Active        │
     │ [Level 1: การสื่อสารพื้นฐาน (Survival)]          │
     │ [Level 2: ภาษาธุรกิจและงานราชการ (Business)]      │
     └──────────────────────────────────────────────────┘

[USER CLICKS MODULE 0.4 TONES]
     │
     ├── App displays Tones Lesson Interface:
     │   "พยัญชนะต้นเหมือนกัน ออกเสียงต่างกันตามวรรณยุกต์ทั้ง 6 เสียง"
     │   Displays Tone Matrix Table:
     │   1. Ngang (เสียงราบ)  — ma (ผี)       [🔊 Listen]
     │   2. Huyền (เสียงเอก)  — mà (แต่)       [🔊 Listen]
     │   3. Sắc (เสียงจัตวา)  — má (แก้ม/แม่)   [🔊 Listen]
     │   4. Hỏi (เสียงถาม)    — mả (หลุมศพ)   [🔊 Listen]
     │   5. Ngã (เสียงสะดุด)  — mã (ม้า)       [🔊 Listen]
     │   6. Nặng (เสียงกลั้น)  — mạ (ต้นกล้า)   [🔊 Listen]
     │   
     │   Displays Thai Comparison Helper Panel:
     │   - เสียง Ngang, Huyền, Sắc ใกล้เคียงกับเสียงสามัญ เอก จัตวา ของไทย
     │   - เสียง Hỏi, Ngã, Nặng ไม่มีในไทย ต้องสังเกตการหักมุมของเสียง (Pitch Contour)
     │   
     │   [▶ เริ่มทดสอบท้ายบทเรียน]
     │
     └── [USER CLICKS START QUIZ]
         App plays Audio: "ma"
         Displays interactive option cards:
         [1. Ngang] [2. Huyền] [3. Sắc] [4. Hỏi] [5. Ngã] [6. Nặng]
         [🔊 Play Again]
```

---

### 3. 🃏 Flashcards (ท่องศัพท์ SRS) Flow

```
User clicks [Flashcards] in Navigation Menu
App displays Dashboard Card:
     "คำศัพท์ที่ครบกำหนดทบทวนวันนี้: 12 คำ"
     "คลังคำสะสมทั้งหมด: 47 คำ"
     
     [▶ เริ่มทบทวนการเรียน]  [➕ เพิ่มคำศัพท์ด้วยตนเอง]

[USER CLICKS START REVIEW]
     │
     ├── App renders Flashcard Front Side:
     │   Displays: **xin chào** 
     │   Phonetics helper: /ʃin tʃao/
     │   Audio control: [🔊 Listen]
     │   [👀 แสดงคำแปลและประโยคตัวอย่าง]
     │
     ├── [USER CLICKS SHOW TRANSLATION]
     │   Card flips. Renders Back Side:
     │   Meaning: สวัสดี (ทักทายทั่วไป)
     │   Example sentence: "Xin chào, bạn khỏe không?"
     │   Thai Translation: "สวัสดี คุณสบายดีไหม?"
     │   
     │   Displays SM-2 Leitner Rating Buttons:
     │   [🔴 จำไม่ได้ (ทบทวนด่วน)] [🟡 ปานกลาง (ทบทวนวันพรุ่งนี้)] [🟢 จำแม่น (ผ่าน)]
     │
     └── User clicks rating -> SQLite records interval -> Loads next card
```

---

### 4. 💬 Chat / Quest (บทบาทสมมติ AI) Flow

```
User clicks [Chat/Quest] in Navigation Menu
App shows: 🎭 AI Roleplay Scenarios (Quests)
     
     [☕ สั่งกาแฟที่ฮานอย (L1)] [🏪 ต่อราคาสินค้า (L1)]
     [🏢 แนะนำธุรกิจของคุณ (L2)] [📧 ร่างอีเมลประสานงาน (L2)]

[USER CLICKS COFFEE QUEST]
     │
     ├── App starts Quest Screen:
     │   Renders Chat Area and NPC status bar (HP/Budget indicator: 100,000 VND)
     │   Audio Speech: Narrator intro voice
     │   NPC Avatar Chị Linh sends text:
     │   > "Chị muốn uống gì ạ?" ❓ (พี่อยากดื่มอะไรคะ?)
     │   
     │   Input Scaffolding Level Indicator:
     │   ├── [Tier 1 Option Cards]
     │   │   [Cho tôi cà phê sữa đá ạ 🙋] [Tôi muốn trà 🍵]
     │   └── [Tier 3 Free Form Text & Speech Input]
     │       Input Box + Microphone Button
     │
     ├── User taps Microphone and says: "Cho tôi cà phê sữa đá"
     │   STT engine converts speech to text, sends via `/api/quest/chat`
     │
     ├── FastAPI Backend calls Gemini API:
     │   - Evaluates pronunciation correctness.
     │   - Deducts budget or mutates HP.
     │   - Generates responsive NPC line with Thai guidance.
     │
     ├── App renders Chị Linh response:
     │   > "Dạ có ngay! Cà phê sữa đá 35,000 đồng ạ. Chị đợi chút."
     │   Smart feedback shows in Thai: "เก่งมาก! ออกเสียงวรรณยุกต์ตรงตามความหมาย"
     │   
     └── User clicks [⏹ จบการสนทนา] -> Summary Card:
         - New words locked: 3 words
         - Mistakes corrected: 0
         - Rating: ⭐⭐⭐ Excellent!
```

---

### 5. 📝 Tones (ฝึกออกเสียงวรรณยุกต์) Flow

```
User clicks [Tones] in Navigation Menu
App shows: 📝 Tone Discrimination Stats (Current accuracy: 72%)
     [▶ เริ่มฝึกเสียง]  [📊 ดูรายงานจุดอ่อน]

[USER CLICKS START PRACTICE]
     │
     ├── App plays synthesized word audio: "mả"
     │   Displays Choice Buttons:
     │   [➡️ Ngang] [↘️ Huyền] [↗️ Sắc]
     │   [❓ Hỏi]  [〰️ Ngã]   [⬇️ Nặng]
     │
     ├── User selects [❓ Hỏi]
     │   App highlights selection with Green Border:
     │   "✅ ถูกต้อง! 'mả' เป็นเสียง Hỏi (เสียงถาม)"
     │   Compare with: "má" (Sắc - จัตวา) และ "mã" (Ngã - เสียงน้ำ)
     │   Displays Pitch Contour Graph showing the dip and rise.
     │   
     └── Clicks [▶ ข้อต่อไป] -> Renders next challenge
```

---

## 📋 Web Routes & UI Actions

| Router path / Tab | Component View | Action triggered |
|-------------------|----------------|------------------|
| `/` or `Index` | Onboarding Wizard | Level test / Onboarding skips |
| `[Learn]` | Curriculum Module Matrix | Opens lesson cards, starts interactive MCQ quizzes |
| `[Flashcards]` | Leitner Flashcard Viewer | Flips cards, sends SM-2 rating calls to API |
| `[Tones]` | Tone Audio Trainer | Triggers Web Speech recognition & plays pitch contour visualizer |
| `[Chat]` | Quest Roleplay Room | API fetches LLM replies, parses STT speech, calculates HP |
| `[Progress]` | Database Stats Panel | Loads SQLite records (streaks, complete modules, SRS queue) |
| `[Settings]` | Configuration Modal | Adjusts audio playback speed, toggles instruction language |

---

## 🎯 Key Design Decisions

1. **Responsive Viewports** — ออกแบบ UI ให้ขยายเต็มจอคอมพิวเตอร์สำหรับการร่างอีเมล และบีบส่วนแสดงผลมาเป็นลักษณะแอปมือถือได้เมื่อใช้งานผ่าน Smartphone
2. **Permission Check Hook** — ก่อนเข้าบทเรียนที่ต้องใช้ระบบพูด (Speech Recognition) แอปจะมีการแจ้งเตือนเพื่อขออนุญาตเปิดไมโครโฟนเบราว์เซอร์อย่างชัดเจน พร้อมวิธีแก้ไขหากเบราว์เซอร์บล็อกการทำงาน
3. **No Terminal/Command UI** — เปลี่ยนระบบคำสั่งแบบพิมพ์เดิมของบอต เช่น `/learn` มาเป็นเมนู Sidebar และ Dashboard Navigation
4. **Smart Fail Explanation Modals** — แทนที่ข้อความแจ้งเตือนข้อผิดพลาดทั่วไปด้วยไดอะล็อกวิเคราะห์แยกแยะ (เช่น ชี้แจงความแตกต่างของ onset หรือวรรณยุกต์) โดยดึงข้อมูลประเมินภาษาเวียดนามเปรียบเทียบคำภาษาไทยจากฐานข้อมูลหรือ Gemini
5. **Dynamic Audio Speed Slider** — ทุกจุดที่มีปุ่มเสียง [🔊] ผู้ใช้สามารถเลื่อนแถบสไลเดอร์ปรับความเร็วของเสียงพูดได้ตั้งแต่ 0.6x (ช้ามากเพื่อฟังตำแหน่งเสียง) ถึง 1.0x (ความเร็วปกติ)

---

*Generated: 2026-05-24 | Phase 3: UX Design*
