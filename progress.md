# Progress — Learn Vietnamese Website

> ไฟล์นี้ใช้ resume การทำงานใน session ถัดไป
> อัปเดตล่าสุด: 2026-05-24 | ✅ Day 0 Phonetics & Leitner Drawer Complete & Planning Next Steps 🔄

---

## 📊 สถานะปัจจุบัน

| Phase | สถานะ | เอกสาร |
|-------|--------|--------|
| **P1: Discovery** | ✅ Complete | `docs/project-brief.md`, `docs/scope-checklist.md` |
| **P2: Research** | ✅ Complete | `docs/competitor-analysis.md`, `docs/personas.md`, `docs/curriculum-research.md`, `docs/positioning-statement.md`, `docs/journey-map.md` |
| **P3: UX Design** | ✅ Complete | `docs/user-flow.md`, `docs/ia-map.md`, `docs/wireframe.html`, `docs/wireframe-feedback.md` |
| **Requirements** | ✅ Consolidated | `docs/product-requirements.md`, `docs/curriculum-4week.md` |
| **P4: UI Design** | ✅ Complete | `design-tokens.css`, `docs/component-library.md`, `docs/accessibility-audit.md`, `docs/responsive-plan.md` |
| **P5: Backend Integration** | ✅ Complete | `app.py`, `database.py`, `schemas.py`, `requirements.txt` (FastAPI + SQLite + Gemini API) |
| **P6: Version 3.0 Upgrades** | ✅ Complete | Word Banks + Speech Recognition + UX/UI Every Dimension |
| **P7: Handoff** | ⏳ | ยังไม่ได้เริ่ม |

---

## 🔑 Tech Stack (Confirmed) — Full-Stack Web App

| Layer | Choice |
|-------|--------|
| **Frontend** | Vanilla HTML + CSS (no framework) + CDN DaisyUI + webkitSpeechRecognition API |
| **Backend** | FastAPI (Python 3.14) |
| **Database** | SQLite + SQLAlchemy ORM (`progress.db`) |
| **TTS** | Web Speech API (vi-VN) with local backend proxy fallback `/api/tts` (bypasses CORS/Referer blocks) |
| **AI Model** | Google Gemini API (`gemini-2.0-flash` on free tier via environment variable `GEMINI_API_KEY`) |
| **Language pair** | Thai ↔ Vietnamese |

---

## 📁 โครงสร้าง Project

```
learn_vietnamese/
├── index.html                # Main website (SPA - HTML + CSS + JS)
├── data.js                   # Curriculum data + quests + helpers
├── app.py                    # FastAPI Gateway + Gemini API hooks + TTS Proxy
├── database.py               # SQLite connection, SQL Model tables
├── schemas.py                # Pydantic input/output validation models
├── requirements.txt          # Python dependencies
├── progress.db               # SQLite database file
├── design-tokens.css         # Design tokens (P4)
├── progress.md               # ← ไฟล์นี้
├── MASTER-SYSTEM-PROMPT.md   # Master reference
├── ai-collaboration-guide.md # Coordination guide for AI Agents
└── docs/                     # Design/Research specs & documents (P1-P4)
```

---

## ✅ Built Features (Web App)

| Feature | สถานะ | รายละเอียด |
|---------|--------|------------|
| Dashboard + 4-week path | ✅ Done | screen-dashboard, week dots, day navigation |
| Word cards (vocab) | ✅ Done | ~291 คำศัพท์, 28 วันเต็ม (21 คำใหม่เพิ่มใน 🍜 Roleplay สั่งเฝอ + 🗺️ เดินทาง + 🚕 Taxi/Grab) |
| Quiz engine | ✅ Done | Multiple choice from current day's vocab |
| Spelling drill | ✅ Done | Listen → type, tone validation |
| Tone practice | ✅ Done | All 6 tones w/ minimal pairs + sound chart, stats sync |
| Quest system (Text-RPG) | ✅ Done | 6 quests: Airport, Grab Bike, 7-Eleven, Market, Phở, Taxi. Dynamic AI Quest Chat roleplay using Gemini with local fallback |
| Progress screen | ✅ Done | screen-progress, dynamic stats and week progress bars |
| Smart Fail Diagnostics | ✅ Done | Calls `/api/quiz/diagnose` for dynamic explanation of incorrect tone contours / vowels in Thai, and auto-queues failed words in SRS |
| local TTS Proxy | ✅ Done | Routes speech synthesizer requests through `/api/tts` to bypass browser CORS blocks |
| SQLite Sync | ✅ Done | Streaks, unlocked days, Leitner box levels, tone stats are persisted in SQLite |

---

## ⏳ Remaining Tasks (Version 3.0 Upgrades)

- [x] **Day 0 Phonetics & Tones Primer** — Interactive soundboard + vowel/consonant charts to teach pronunciation before vocabulary.
- [x] **Vocabulary Leitner Box Drawer** — A visual dashboard to see learned words sorted by Leitner Box level (1 to 5) with audio playback.
- [x] **Duolingo-style Word Banks (ระบบต่อประโยค)** — 🧩 27 ประโยค SVO ใน 13 วัน, Bubble Token UI, Syntax Validation, Juicy Feedback
- [x] **Elsa Speak-style Speech Recognition (ระบบประเมินเสียงพูด)** — 🎤 webkitSpeechRecognition vi-VN, Levenshtein Similarity, Mic Pulse UI, Waveform Animation, Real-time Score Feedback
  - CSS: mic-btn pulse ring animation, waveform bars, speech result cards (excellent/good/needs-work)
  - HTML: #view-speaking screen with target word, mic button, waveform, result card, stats
  - JS: webkitSpeechRecognition vi-VN, String Similarity Matcher (Levenshtein), 10-vocab pool per day
  - Integration: switchScreen handler, keyboard 's' shortcut, roadmap button, bottom nav tab
- [x] **เนื้อหาครบ 28 วัน** — เพิ่ม 6 วันหายไป: W2D7 Review, W3D6 🍜 สั่งเฝอ (7 คำ), W3D7 Review, W4D5 🗺️ เดินทาง (7 คำ), W4D6 🚕 Taxi/Grab (7 คำ), W4D7 🎉 Final Review
  - เพิ่มคำศัพท์ใหม่อีก 21 คำ รวมเป็น ~291 คำ
  - IPA, วรรณยุกต์, ความหมาย, emoji, tips ครบทุกคำ
- [x] **UX/UI Enhancements Every Dimension** — ✨ 7 Phases of comprehensive polish
  - **Phase 1:** Design System — Glass hierarchy (.glass-1/2/3), Glow system (.glow-emerald/gold/rose/blue/cyan/amber), Gradient text/borders, Hover lift
  - **Phase 2:** Animations — Page enter transitions (scale+fade), Stagger children, Card slide-in, Node complete animation, Progress shimmer
  - **Phase 3:** Bottom Nav — Animated active indicator (gradient underline glow), Scale-on-press feedback, Active background tint
  - **Phase 4:** Cards/Buttons/Progress — Unified hover-lift on .rpg-card/.hud-card, Button press scale (0.97), Progress fill shimmer animation
  - **Phase 5:** Roadmap Nodes — Hover scale (1.15), Complete bounce animation, Milestone glow badge, Offset alternating layout
  - **Phase 6:** Toast/Drawer/Empty/Loading — Toast slide-up with spring, Rich icons per type, Drawer spring cubic-bezier, Empty state styling, Skeleton shimmer
  - **Phase 7:** Accessibility — Focus-visible outlines (#10b981), Reduced-motion media query (disables all animations), Touch target minimums (44px), Smooth scroll
- [x] **Listening Comprehension (🎧 ฝึกฟัง)** — 10 dialogues with comprehension questions
  - 🍜 ร้านเฝอ, ☕ ร้านกาแฟ, 🛒 ตลาด, 🗺️ ถามทาง, 📱 Grab, 🏨 โรงแรม, 🚂 ตั๋วรถไฟ, 🍽️ ร้านอาหาร, 💬 เพื่อน, 🇻🇳 อยู่เวียดนาม
  - 3-4 comprehension questions per dialogue (difficulty: ง่าย→ปานกลาง→ยาก)
  - TTS play with line-by-line progression + transcript toggle + results tracking
  - Bottom nav button (grid-cols-5) + keyboard shortcut 'l'
  - SpeechSynthesis.cancel() + double-increment bug fix

---

## 📝 Session Resume Guide

เมื่อเปิด session ใหม่:
1. อ่าน `progress.md` นี้ก่อน เพื่อตรวจสอบสถานะล่าสุด
2. Uvicorn Server รันอยู่ที่ `http://127.0.0.1:8000`
3. Recap: **✅ API Integration (Phase 5) เสร็จสมบูรณ์แล้ว อยู่ระหว่างการทำ P6 Version 3.0 Upgrades**

---

*Updated: 2026-05-24 | Status: P5 Backend Integration ✅ → P6 Version 3.0 Upgrades 🔄*
