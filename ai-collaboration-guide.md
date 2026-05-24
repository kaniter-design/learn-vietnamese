# AI Collaboration & Hand-off Guide — Learn Vietnamese Web App

> **Version:** 1.1.0  
> **Status:** Live Reference  
> **Date:** 2026-05-24  
> **Purpose:** Master coordination blueprint for AI agents working on code implementation, curriculum content, or UI redesigns.

---

## 🎯 1. Project Context & Identity

This project is a **Full-Stack AI-Native Web Application** designed to teach Vietnamese from zero (A0) to functional business/public sector communication (A2/B1) for Thai native speakers.

### Architecture Overview (Zero-Cost WSL Setup)
To guarantee a **$0/month operating cost**, the system relies entirely on local-first services and free cloud quotas:

```
┌────────────────────────────────────────────────────────┐
│                        BROWSER                         │
│  [index.html (Tailwind/DaisyUI) + data.js (Curriculum)]│
└───────────────────────────┬────────────────────────────┘
                            │
                            │ (AJAX / Fetch API)
                            ▼
┌────────────────────────────────────────────────────────┐
│                   WSL LOCAL HOST                       │
│    [FastAPI (Python) Server Entry: app.py]             │
└─────────────────────┬───────────────┬──────────────────┘
                      │               │
                      │               │ (Google GenAI SDK)
                      ▼               ▼
┌───────────────────────────┐   ┌────────────────────────┐
│       LOCAL SQLITE        │   │    GEMINI FREE TIER    │
│   [progress.db (SQLAlchemy)]│   │  [Gemini 2.0 Flash API]│
└───────────────────────────┘   └────────────────────────┘
```

1. **Frontend:** HTML5 + CSS (Tailwind CDN / DaisyUI) + JS (`data.js` static curriculum). Communicates with backend using asynchronous `fetch()` API.
2. **Backend:** Python + **FastAPI** (served locally on WSL). Handles AI prompting, SQLite database connections, and business phrase processing.
3. **Database:** **SQLite** (`progress.db` file in repository). Stores daily streaks, Leitner Box Spaced Repetition (SRS) data, quest completion, and tone practice accuracy statistics.
4. **AI LLM:** **Gemini 2.0 Flash API (Free Tier)** via `google-generativeai` python SDK. Runs roleplay simulations, checks grammar correctness, and translates dialogue.
5. **Speech System:** Browser-native **Web Speech API** (Speech Recognition for speech inputs, Speech Synthesis with Google fallback URL proxy `/api/tts` for audio outputs).

---

## ⚠️ 2. Crucial Constraints (Strict Compliance Required)

Any AI editing the codebase must conform to these constraints:
*   **$0 API Costs:** Do not use paid APIs (e.g. OpenAI GPT-4, ElevenLabs, Amazon Polly). All AI interactions must run via Gemini Free Tier. All audio TTS/STT must run on browser-native client APIs.
*   **WSL Localhost Deployment:** The backend must run locally under WSL. Keep database configurations SQLite-local; do not introduce external Docker instances or PostgreSQL databases unless explicitly asked.
*   **Decoupled Frontend preservation:** Do not rebuild the frontend in Next.js or React. Maintain [index.html](file:///d:/Works/Github/learn-vietnamese/index.html) and interface using AJAX endpoints to preserve the layout aesthetics.
*   **Thai-bridge explanations:** Explanations, feedback, grammatical diagnostics, and settings helpers must be delivered in **Thai**.

---

## 📁 3. Workspace File Layout

The following directories and files constitute the codebase:

```
learn-vietnamese/
├── index.html                  # Frontend Interface (Tabs, Dashboard, Quests, Tones, Settings)
├── data.js                     # Static curriculum (28-day mapping, vocabulary dictionary)
├── app.py                      # FastAPI primary server gateway
├── database.py                 # SQLite connection, SQL Model tables
├── schemas.py                  # Pydantic serializations (Req/Res)
├── requirements.txt            # Python pip dependencies list
├── progress.db                 # SQLite database file
├── design-tokens.css           # Styling design tokens & custom component variables
├── MASTER-SYSTEM-PROMPT.md     # Tutor prompt, Tone table, and Curriculum outlines
├── progress.md                 # Spaced Repetition (SRS) tracking & task logs
└── docs/                       # Product design and research specifications
    ├── project-brief.md        # Phase 1: High level goals & deliverables
    ├── scope-checklist.md      # Phase 1: API list & in-scope boundaries
    ├── product-requirements.md  # Phase 1: Detailed functional specs
    ├── database-schema.md      # Phase 1: Database relational tables DDL
    ├── competitor-analysis.md  # Phase 2: Gap analysis & market matrix
    ├── personas.md             # Phase 2: Persona profile of K S (32yo Thai Civil Servant)
    ├── journey-map.md          # Phase 2: 5-step user journey
    ├── user-flow.md            # Phase 3: Route flow map & Onboarding Wizard
    ├── ia-map.md               # Phase 3: View tree states & DB tables
    ├── component-library.md    # Phase 4: Web components & design mappings
    └── accessibility-audit.md  # Phase 4: WCAG 2.1 AA checklist
```

---

## 🗃 4. API & Database Hand-off Specs

### Relational Tables (SQLite Model)
SQLAlchemy tables defined in `database.py`:
1.  `user_profile`: `id` (PK, default 1), `streak`, `last_active_date`, `current_day`.
2.  `completed_days`: `day_num` (PK), `completed_at`.
3.  `srs_words`: `word` (PK, e.g. "cảm ơn"), `meaning`, `box` (Leitner index 1-5), `next_review_date`.
4.  `tone_practice_stats`: `id` (PK), `tone_name`, `total_attempts`, `correct_attempts`.
5.  `completed_quests`: `quest_id` (PK), `completed_at`.

### FastAPI Endpoint Routing list
Exposed HTTP endpoints in `app.py`:
*   `GET /api/progress` -> Returns user statistics, current day, unlocked modules.
*   `POST /api/progress/complete` -> Marks a lesson day as completed, increments streaks.
*   `GET /api/srs` -> Returns vocab words due for Leitner review.
*   `POST /api/srs/fail` -> Adds/demotes a word in SRS Leitner box.
*   `DELETE /api/srs/master/{word}` -> Promotes a word to next Leitner box or masters it.
*   `GET /api/srs/stats` -> Returns word counts and lists in each Leitner Box.
*   `GET /api/tts` -> Serves Google TTS mp3 stream, bypassing browser CORS/Referer blocks.
*   `POST /api/quest/chat` -> AI generative roleplay loop.
*   `POST /api/quiz/diagnose` -> Explains quiz errors via Gemini AI Smart Fail protocol.

---

## 🤖 5. AI Orchestration Protocol (Tutor Prompts)

For roleplay prompts, feed the AI with persona details from [MASTER-SYSTEM-PROMPT.md](file:///d:/Works/Github/learn-vietnamese/MASTER-SYSTEM-PROMPT.md). The Gemini response should return this JSON structure:

```json
{
  "system_state_update": {
    "update_error_log": "string | null",
    "adjust_difficulty": -1 | 0 | 1,
    "trigger_srs": false | true
  },
  "feedback_layer": "Thai guidance explaining mistakes or validating tone pronunciation.",
  "core_content_layer": "Vietnamese NPC message. E.g. 'Chị muốn uống gì ạ?'",
  "audio_directive": {
    "text_to_synthesize": "Chị muốn uống gì ạ?",
    "speed_rate": 1.0
  },
  "interaction_prompt": "Prompt instructions in Thai (e.g. 'เลือกคำตอบที่ถูกต้องเพื่อดำเนินการต่อ')",
  "ui_render_directive": {
    "keyboard_type": "Options_Grid",
    "inline_buttons": [
      ["Cho tôi cà phê sữa đá", "Tôi muốn uống trà"],
      ["🔊 Replay Voice"]
    ]
  }
}
```

### Smart Fail Diagnostic logic
*   **Tone mismatch:** Explain difference (e.g., *cá* ↗️ (fish) vs *cà* ↘️ (eggplant)).
*   **Consonant swap:** Compare onset changes in Thai (e.g. *d* vs *đ*).
*   **Final consonant:** Explain endings using Thai *Maetra* (แม่กก, แม่กด, แม่กบ).

---

## 📋 6. Current Task Backlog

The current status of the project implementation checklist:
- [x] Phase 1: Discovery documents updated.
- [x] Phase 2: Research documents updated (K S Persona updated).
- [x] Phase 3: UX Design routing & flows mapped.
- [x] Phase 4: UI component specs & WCAG audit completed.
- [x] Phase 5: Coding backend database, endpoints, and frontend AJAX connection.
- [ ] **Phase 6: Version 3.0 Upgrades (Active Next Step):**
  - [x] Build Day 0 Phonetics & Tones Primer UI Screen.
  - [x] Build Vocabulary Leitner Box Drawer Dashboard.
  - [x] Complete UX/UI Design Audit & Premium Dark Theme Overhaul.
  - [ ] Implement Duolingo-style Word Bank Sentence Builder.
  - [ ] Implement Elsa Speak-style Speech Recognition & Matcher Drills.

---

*This guide serves as the handed-over project memory. When starting a new coding context, read this file first to restore system variables.*
