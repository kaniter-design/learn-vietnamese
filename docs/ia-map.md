# Information Architecture — Learn Vietnamese Web App

> Phase 3: UX Design
> App components, view routing hierarchy, UI states, and data schemas

---

## 🏗 Web App Navigation & Page Structure

```
Learn Vietnamese Web App (Local WSL)
│
├── 🏠 Landing Page (Onboarding Wizard)
│   ├── Welcome Panel (New User)
│   ├── Level Placement Assessment (5 questions)
│   │   ├── MCQ Answers
│   │   └── Level assigned (0 to 2)
│   └── Direct Dashboard Access (Returning User)
│
├── 📖 Learn (หลักสูตรบทเรียน)
│   ├── Level 0: ระบบเสียงและวรรณยุกต์
│   │   ├── 0.1 ตัวอักษร (29 ตัว)
│   │   ├── 0.2 สระเดี่ยวและสระประสม (12 สระ)
│   │   ├── 0.3 พยัญชนะต้นและตัวสะกด (17 ตัว)
│   │   ├── 0.4 วรรณยุกต์ (6 เสียง)
│   │   │   ├── นิยามของเสียงแต่ละวรรณยุกต์
│   │   │   ├── เปรียบเทียบโทนเสียงภาษาไทย
│   │   │   └── แบบฝึกหัดฟังแยกเสียง (TTS audio)
│   │   ├── 0.5 ฝึกฝนแยกแยะ minimal pairs
│   │   └── 0.6 บทอ่านออกเสียงเบื้องต้น
│   ├── Level 1: Survival (การสื่อสารเอาตัวรอด)
│   │   ├── 1.1 การทักทายและการลา
│   │   ├── 1.2 การแนะนำตัวและอาชีพ
│   │   ├── 1.3 ตัวเลขและการนับ
│   │   ├── 1.4 การแลกเงินและถามราคา
│   │   ├── 1.5 วันเวลาและกำหนดการ
│   │   └── 1.6 การสั่งอาหารและการสั่งกาแฟ
│   └── Level 2: Business & PR (ภาษาธุรกิจและประสานราชการ)
│       ├── 2.1 การแนะนำหน่วยงานและบริษัท
│       ├── 2.2 โครงสร้างองค์กรและตำแหน่งงาน
│       ├── 2.3 การสื่อสารในห้องประชุม
│       ├── 2.4 การสนทนาทางโทรศัพท์
│       └── 2.5 การเขียนอีเมลทางการและจดหมายราชการ
│
├── 🃏 Flashcards (ท่องศัพท์ระบบ SRS)
│   ├── SRS Review Dashboard
│   │   ├── Flip Card action (Show Vietnamese -> Show Thai + audio)
│   │   └── Ease Rating selection (SM-2 buttons: Easy, Medium, Hard)
│   ├── Vocabulary Bank Panel (แสดงคลังคำศัพท์ทั้งหมดแบบตาราง)
│   └── Add Custom Words (ฟอร์มบันทึกคำศัพท์เพิ่มด้วยตนเอง)
│
├── 📝 Tones (ออกเสียงและแยกวรรณยุกต์)
│   ├── MCQ Listening Training (คลิกฟังคำพูด -> ทายวรรณยุกต์)
│   ├── Speech Training (ดูคำศัพท์ -> กดอัดเสียง -> แปลงเป็นข้อความเพื่อตรวจสอบเสียงสะกด)
│   └── Pitch Contour Diagram (ภาพกราฟฟิกเปรียบเทียบคลื่นความถี่ของเสียง)
│
├── 💬 Chat / Quests (สถานการณ์บทบาทสมมติ)
│   ├── Scenario Grid (ด่านสั่งกาแฟ, ด่านประสานจดหมายราชการ, ด่านเจรจาการค้า)
│   ├── Roleplay Conversation Room (หน้าต่างแชทกับ NPC)
│   │   ├── NPC Chat Bubble + Thai Translation
│   │   ├── HP / Budget dynamic indicator bar
│   │   ├── Scaffolding response selector (Tier 1 & Tier 2)
│   │   └── Voice/Speech microphone input box (Tier 3)
│   └── Quest Summary overlay (แสดงสรุปคำศัพท์ใหม่และคะแนนความถูกต้อง)
│
├── 📊 Progress (สถิติความก้าวหน้า)
│   ├── Streak Counter Panel (จำนวนวันติดต่อกัน)
│   ├── Vocabulary retention progress (จำนวนคำศัพท์ที่จำได้/ผ่านเกณฑ์ SRS)
│   ├── Completed modules stats
│   └── Tone accuracy analytics radar/bar chart
│
└── ⚙️ Settings (ตั้งค่าการใช้งาน)
    ├── Instruction Language configuration (ภาษาอธิบาย: ไทย/อังกฤษ)
    ├── TTS Audio Speed config slider (0.6x ถึง 1.0x)
    ├── Reset all progress data (ปุ่มยืนยันรีเซ็ตสถิติ)
    └── Local API endpoint checks (ตรวจสอบสถานะการเชื่อมต่อ FastAPI/Gemini)
```

---

## 🔄 App Route & View State Map

The app works as a Single Page Application (SPA). Switching tabs mutates the active view state.

```
                  ┌───────────────┐
                  │ ONBOARDING    │ ← If DB is empty / No user profile
                  │ WIZARD STATE  │
                  └───────┬───────┘
                          │
                  ┌───────▼───────┐
                  │  DASHBOARD    │ ← Active View: "Learn" (Default)
                  │  VIEW STATE   │
                  └───────┬───────┘
                          │
      ┌───────────────────┼───────────────────┬───────────────────┐
      │                   │                   │                   │
┌─────▼─────┐       ┌─────▼─────┐       ┌─────▼─────┐       ┌─────▼─────┐
│ LEARN     │       │ SRS CARD  │       │ TONES     │       │ QUEST     │
│ MODULE    │       │ REVIEW    │       │ PRACTICE  │       │ CHAT ROOM │
│ ACTIVE    │       │ ACTIVE    │       │ ACTIVE    │       │ ACTIVE    │
└─────┬─────┘       └─────┬─────┘       └─────┬─────┘       └─────┬─────┘
      │                   │                   │                   │
      ▼                   ▼                   ▼                   ▼
┌───────────┐       ┌───────────┐       ┌───────────┐       ┌───────────┐
│ Renders   │       │ Renders   │       │ Plays     │       │ Initiates │
│ lesson    │       │ vocabulary│       │ TTS audio │       │ Gemini NPC│
│ text card │       │ front card│       │ challenges│       │ dynamic   │
│ & quiz    │       │ & flips   │       │ & records │       │ chat loop │
│ question  │       │ on rating │       │ mic input │       │ & HP checks│
└───────────┘       └───────────┘       └───────────┘       └───────────┘
```

### View Transition Rules

| Current View State | User Interaction | Next View State | API / Database Action |
|--------------------|------------------|-----------------|-----------------------|
| ONBOARDING WIZARD | Complete quiz / Skip | DASHBOARD (Learn) | POST `/api/progress` (Set initial level) |
| DASHBOARD | Clicks `[Learn]` tab | LEARN MODULE | None |
| DASHBOARD | Clicks `[Flashcards]` tab | SRS CARD REVIEW | GET `/api/srs` (Fetch review queue) |
| DASHBOARD | Clicks `[Tones]` tab | TONES PRACTICE | GET `/api/progress` (Fetch tone analytics) |
| DASHBOARD | Clicks `[Chat]` tab | QUEST CHAT ROOM | GET `/api/progress` (Fetch unlocked quests) |
| QUEST CHAT ROOM | Submits text/speech answer | QUEST CHAT ROOM | POST `/api/quest/chat` (LLM response generation) |
| Any Active View | Clicks `[Back/Home]` button | DASHBOARD (Learn) | Saves state logs |

---

## 📱 Desktop & Mobile UI Layout Grid

### Desktop Layout (Grid System)
- **Left Column (15%):** Vertical Sidebar Navigation menu (Learn, Flashcards, Chat, Tones, Progress, Settings). Shows active state and streak counter.
- **Center Main Panel (85%):** Primary workspace area (Lessons, active Flashcard wrapper, Quest dialogue, settings options).
- **Sticky Alerts:** Bottom corner toast indicators for connection states or completion achievements.

### Mobile Layout (Responsive Viewport)
- **Top Header:** Streak display and active level badge.
- **Bottom Navigation Bar:** Tab links styled with compact icons (Learn, Review, Chat, More).
- **Main Scroll Area:** Fullscreen message cards or quiz layouts optimized for comfortable touch interactions (minimum 44px height).

---

## 🗃 SQLite Database Schema (progress.db)

The database models are serialized between SQLAlchemy backend and Pydantic request models.

```
                       ┌──────────────────────┐
                       │     user_profile     │
                       ├──────────────────────┤
                       │ id (PK)              │
                       │ streak               │
                       │ last_active_date     │
                       │ current_day          │
                       └──────────┬───────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         │ (1-to-many)            │ (1-to-many)            │ (1-to-many)
┌────────▼─────────────┐ ┌────────▼─────────────┐ ┌────────▼─────────────┐
│    completed_days    │ │      srs_words       │ │ completed_quests     │
├──────────────────────┤ ├──────────────────────┤ ├──────────────────────┤
│ day_num (PK)         │ │ word (PK)            │ │ quest_id (PK)        │
│ completed_at         │ │ meaning              │ │ completed_at         │
└──────────────────────┘ │ box (Leitner 1-5)    │ └──────────────────────┘
                         │ next_review_date     │
                         └──────────────────────┘
```

### 1. `user_profile` table
Stores overall status for the local user (`id = 1` default).
- `id`: INTEGER (Primary Key)
- `streak`: INTEGER
- `last_active_date`: VARCHAR (format `YYYY-MM-DD`)
- `current_day`: INTEGER

### 2. `completed_days` table
Tracks modules or curriculum days completed.
- `day_num`: INTEGER (Primary Key)
- `completed_at`: TIMESTAMP

### 3. `srs_words` table
Stores vocabulary words and intervals for Leitner spaced repetition.
- `word`: VARCHAR (Primary Key, e.g., "cảm ơn")
- `meaning`: VARCHAR (Thai meaning helper)
- `box`: INTEGER (SM-2 interval rating index 1 to 5)
- `next_review_date`: VARCHAR (format `YYYY-MM-DD`)

### 4. `tone_practice_stats` table
Stores attempt counts per tone category to generate accuracy statistics.
- `id`: INTEGER (Primary Key)
- `tone_name`: VARCHAR (e.g., "hỏi", "ngã")
- `total_attempts`: INTEGER
- `correct_attempts`: INTEGER

### 5. `completed_quests` table
Stores roleplay scenarios finished by the user.
- `quest_id`: VARCHAR (Primary Key, e.g., "coffee_shop")
- `completed_at`: TIMESTAMP

---

*Generated: 2026-05-24 | Phase 3: UX Design*
