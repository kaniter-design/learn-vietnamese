# Project Brief — Learn Vietnamese Bot (ภาษาเวียดนามสำหรับธุรกิจ)

> Phase 1: Discovery — Structured project brief
> Status: 📝 Draft
> Version: 0.1
> Created: 2026-05-23

---

## 🎯 Project Goals

1. **สร้าง Telegram bot** สอนภาษาเวียดนามแบบเรียงขั้น — จากความรู้ 0 ไปจนถึงการสื่อสารระดับ business ด้านการค้าระหว่างประเทศ
2. **Bot ปรับตัวได้** — เรียนรู้จากพฤติกรรม user, ปรับเนื้อหาตามจุดอ่อน-จุดแข็ง, ยกระดับเมื่อพร้อม
3. **Phased delivery** — ทำทีละ phase ง่ายก่อน, ขยายฟีเจอร์ทีละชั้น
4. **ใช้งานบน WSL** — server ส่วนตัว, cost ≤ $10/เดือน

---

## 👤 Target User

| Attribute | Value |
|-----------|-------|
| **User** | K S (UX/UI Designer) |
| **Vietnamese level** | 0 — ไม่เคยเรียนมาก่อนเลย |
| **Goal** | Business communication ด้านการค้าระหว่างประเทศ |
| **Native language** | Thai |
| **Tech literacy** | สูง — ทำงานกับ AI agents เป็นปกติ |
| **Environment** | WSL on Windows notebook |

### User Needs
- เริ่มจากพื้นฐานที่สุด: สระ, พยัญชนะ, วรรณยุกต์ (เวียดนามมี 6 เสียง)
- คำศัพท์ที่ใช้จริงในธุรกิจก่อน (greetings, negotiation, email, meeting)
- ประโยคต้นแบบที่ copy-paste ได้เลยสำหรับงาน
- Bot ที่ "รู้ว่า user จำได้แค่ไหน" — ไม่ซ้ำที่จำแล้ว, เน้นที่ยังไม่แข็ง
- เห็น progress ชัด — รู้ว่าตัวเองอยู่ไหนใน journey

### Learning Path (Proposed)

```
Level 0: พื้นฐานระบบเสียง
  ├── สระ + พยัญชนะเวียดนาม
  ├── วรรณยุกต์ 6 เสียง
  └── การออกเสียงพื้นฐาน

Level 1: สนทนาทั่วไป (Survival Vietnamese)
  ├── ทักทาย, แนะนำตัว
  ├── ตัวเลข, ราคา, เวลา
  ├── สั่งอาหาร, เดินทาง
  └── คำศัพท์พื้นฐาน ~200 คำ

Level 2: ธุรกิจเบื้องต้น (Business Basics)
  ├── แนะนำบริษัท, ตำแหน่งงาน
  ├── นัดหมาย, ประชุม
  ├── อีเมลธุรกิจเบื้องต้น
  └── คำศัพท์ business ~300 คำ

Level 3: ธุรกิจระดับกลาง (Intermediate Business)
  ├── เจรจาต่อรอง, เสนอราคา
  ├── สัญญา, เงื่อนไข
  ├── นำเสนอผลิตภัณฑ์
  └── อีเมล-รายงานระดับกลาง

Level 4: ธุรกิจระดับสูง (Advanced Business)
  ├── เจรจาต่อรองซับซ้อน
  ├── งานแสดงสินค้า, trade show
  ├── รายงาน-เอกสารทางการ
  └── วัฒนธรรมธุรกิจเวียดนาม
```

---

## 🚧 Constraints

| Constraint | Detail |
|------------|--------|
| **Platform** | Telegram bot (mobile-first) |
| **Server** | WSL on Windows notebook |
| **AI** | OpenCode Go API (opencode-go/deepseek-v4-flash) |
| **Database** | SQLite (local) |
| **Budget** | ≤ $10/เดือน |
| **Language pair** | Thai ↔ Vietnamese (Thai as explanation language) |
| **Team** | Solo dev |

---

## ✅ Success Metrics

| Metric | Target |
|--------|--------|
| Bot ใช้งานได้ end-to-end | deploy + responsive |
| Curriculum ครบ 4 levels | สระ→business advanced |
| Adaptive learning | bot ปรับ content ตามจุดอ่อน user |
| Progress tracking | เห็นว่าอยู่ level ไหน, จำได้กี่คำ |
| Cost | ≤ $10/เดือน |

---

## 🏗 Technical Architecture

```
┌──────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  Telegram    │────▶│  Python Bot      │────▶│  OpenCode Go API │
│  Client      │     │  (telegram-bot)  │     │  (deepseek-v4)   │
└──────────────┘     └───────┬──────────┘     └──────────────────┘
                             │
                     ┌───────▼──────────┐
                     │  SQLite DB       │
                     │  (user, vocab,   │
                     │   progress,      │
                     │   mastery)       │
                     └──────────────────┘
```

---

## 📁 Project Structure (Proposed)

```
learn-vietnamese-bot/
├── main.py                 # Entry point
├── config.py               # Settings, API keys
├── db/
│   ├── models.py           # SQLite schema
│   └── repository.py       # CRUD
├── handlers/
│   ├── start.py            # /start, /help, onboarding
│   ├── curriculum.py       # Level selection, lesson flow
│   ├── vocabulary.py       # Flashcards, word practice
│   ├── conversation.py     # AI chat practice
│   ├── pronunciation.py    # Tone practice, audio
│   └── progress.py         # Stats, reports
├── services/
│   ├── opencode_client.py  # API wrapper
│   ├── curriculum_engine.py # Adaptive level logic
│   ├── srs.py              # Spaced repetition
│   └── mastery.py          # Track word/grammar mastery
├── data/
│   ├── curriculum.json     # All levels, lessons, words
│   └── business_phrases.json # Copy-paste templates
├── utils/
│   ├── keyboards.py        # Inline keyboards
│   └── formatters.py       # Text helpers
└── requirements.txt
```

---

## 🗺 Roadmap (Phased Delivery)

| Phase | Deliverables | Priority |
|-------|-------------|----------|
| **P1: Discovery** ✅ | brief, scope | ← อยู่ตรงนี้ |
| **P2: Research** | competitor analysis, Vietnamese learning landscape | |
| **P3: UX Design** | user flow, IA, wireframe | |
| **P4: UI Design** | design tokens, component library | |
| **P5: Prototype v0.1** | Level 0 (ระบบเสียง) + Level 1 (survival) | 🔄 ทำก่อน |
| **P5: Prototype v0.2** | Level 2 (business basics) + flashcards | |
| **P5: Prototype v0.3** | Level 3-4 + conversation AI | |
| **P6: Iterate** | refine, QA, adaptive learning | |
| **P7: Handoff** | design spec, deployment | |

---

## 🔑 Key Design Decisions

1. **Thai as bridge language** — อธิบายเวียดนามเป็นภาษาไทย, ไม่ใช่อังกฤษ
2. **Curriculum-driven** — ข้อมูลบทเรียนอยู่ใน `data/` (JSON), ไม่ generate ทั้งหมดจาก AI
3. **AI ใช้สำหรับ:** สร้างตัวอย่างประโยค, อธิบายไวยากรณ์, แก้ไขข้อความ user, สนทนา practice
4. **Mastery tracking** — ไม่ใช่แค่ SRS, ต้อง track ว่า user "ใช้ได้จริง" หรือแค่ "จำได้"
5. **Business phrases library** — คลังประโยค copy-paste ได้เลยสำหรับงานจริง

---

## ❓ Open Questions

1. **เสียง/ออกเสียง** — ต้องการฝึกออกเสียงด้วยไหม? (voice message → AI ตรวจ) หรือข้ามไปก่อน?
2. **เวียดนามเหนือ vs ใต้** — เน้นสำเนียงไหน? (เวียดนามใต้ใช้ในการค้ามากกว่า)
3. **เป้าหมายเวลา** — อยากได้ prototype ใช้งานได้ภายในกี่สัปดาห์?

---

*Generated: 2026-05-23 | K S UX/UI Design Workflow v1*
