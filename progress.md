# Progress — Learn Vietnamese Website

> ไฟล์นี้ใช้ resume การทำงานใน session ถัดไป
> อัปเดตล่าสุด: 2026-05-24 | ✅ UX/UI Audit & Fixes Complete

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
| **P6: Version 3.0 Upgrades** | ✅ Complete | Word Banks + Speech Recognition + UX/UI Every Dimension + Audit & Fixes |
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
├── apply_audit_fixes.py      # (temp) Audit fix script — can be deleted
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
| Word cards (vocab) | ✅ Done | 167 คำศัพท์, 28 วัน (พร้อม IPA + tone marker + tips) |
| Quiz engine | ✅ Done | Multiple choice from current day's vocab |
| Spelling drill | ✅ Done | Listen → type, tone validation |
| Tone practice | ✅ Done | All 6 tones w/ minimal pairs + sound chart, stats sync |
| Quest system (Text-RPG) | ✅ Done | 6 quests: Airport, Grab Bike, 7-Eleven, Market, Phở, Taxi. Dynamic AI Quest Chat |
| Progress screen | ✅ Done | screen-progress, dynamic stats and week progress bars |
| Smart Fail Diagnostics | ✅ Done | Dynamic explanation of incorrect tone contours / vowels in Thai |
| local TTS Proxy | ✅ Done | Routes speech synthesizer through `/api/tts` |
| SQLite Sync | ✅ Done | Streaks, unlocked days, Leitner box levels persisted |
| Keyboard Shortcuts | ✅ Done | 'e'→Learn, 'l'→Listening, 's'→Speaking, 'p'→Progress, 'd'→Dashboard, 'w'→Word Bank, 'h'→Shadowing |
| ARIA Accessibility | ✅ Done | sr-only CSS, aria-live polite, focus-visible outlines, reduced-motion |
| Settings Screen | ✅ Done | TTS engine/speed, goal, API health, reset progress |
| Onboarding | ✅ Done | 3-step goal selection (travel/business/conversation) |
| Phonetics (Day 0) | ✅ Done | Interactive 6-tone grid with SVG contours + click-to-play |
| Flashcard (SRS) | ✅ Done | Leitner SRS with flip animation + box visualization |
| Word Banks | ✅ Done | 27 SVO sentences, bubble token UI, syntax validation |
| Speech Recognition | ✅ Done | webkitSpeechRecognition vi-VN, Levenshtein similarity, waveform |
| Shadowing | ✅ Done | 10 sentences, listen → speak → compare with word-by-word feedback |
| Listening Comprehension | ✅ Done | 10 dialogues with comprehension questions |
| Bottom Nav | ✅ Done | 5 tabs (🗺️📖🃏🎤⚙️) with animated indicator |
| HUD Header | ✅ Done | Brand logo + streak + VND currency display |
| Stats Strip | ✅ Done | Centralized stat display on roadmap |

---

## ✅ UX/UI Audit Fixes Applied (ล่าสุด)

### CSS Fixes
- `.bottom-nav-btn.active`: Added `color: var(--brand)` for brand consistency
- `.node-btn.active` v3: Removed fixed width/height for responsive layout
- `body` / `.mobile-container`: Unified background variables (no duplicates)
- Card animation: Added `.card` class targeting alongside `.rpg-card`
- Settings/shadowing/listening screens: Removed inline `display:none` (use `.screen` CSS)
- Excess blank lines in CSS cleaned up

### Data Fixes
- `dắt` IPA: `/zɨːt/` → `/zɐt/` (corrected short vowel ă)
- `mặn` IPA: `/mɨːn/` → `/mɐn/` (corrected short vowel ă)

### UX Improvements
- Day 0 phonetics link added to roadmap header
- Bottom nav text shortened for 5-column fit
- Time estimate now uses `getWordsForDay(dayNum)` for accurate count

### Documentation Updated
- `docs/ux-ui-audit-report.md`: Full v3 audit with resolved findings
- `docs/accessibility-audit.md`: WCAG audit with v3 contrast analysis
- `docs/component-library.md`: Comprehensive v3 component catalog

---

## ⏳ Remaining Tasks

- [ ] **P7: Handoff** — Final review, git commit, deployment guide

---

*Updated: 2026-05-24 | Status: P6 v3.0 UX/UI Audit & Fixes ✅ Complete*
