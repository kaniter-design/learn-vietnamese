# Scope Checklist — Full-Stack AI-Native Vietnamese Tutor (v2.0)

> Phase 1: Discovery — Scope checklist  
> Status: 📝 Approved  
> Version: 2.0 (Full-Stack Pivot)  
> Created: 2026-05-24  

---

## ✅ In-Scope (v2.0)

### 1. Backend API (FastAPI)
*   **Progress Endpoint:** `/api/progress` (GET/POST) to save and load Day Completion, Streak, and Active Dates.
*   **SRS Queue Endpoint:** `/api/srs` (GET/POST/DELETE) to manage the Spaced Repetition vocabulary list stored in the database.
*   **Generative Quest Chat:** `/api/quest/chat` (POST) to interface with the Gemini API. Supports dynamic roleplay, conversational status tracking, and budget/HP calculations.
*   **Smart Fail Endpoint:** `/api/quiz/diagnose` (POST) to analyze user errors via Gemini and return customized pedagogical explanations in Thai.

### 2. Relational Database (SQLite)
*   Table schemas for:
    *   `user_profile` (Streak, last_active, current_day)
    *   `completed_days` (Day numbers completed)
    *   `srs_words` (Words in the SRS queue, error counts, ease factor)
    *   `tone_practice` (Tone correctness percentages)
    *   `completed_quests` (Quest IDs successfully finished)

### 3. AI Integrations (Free Tier)
*   **Gemini 2.0 Flash SDK:** Used backend-side for all LLM calls. Securely uses the `GEMINI_API_KEY` from the WSL environment.
*   **System Prompts:** Configured roleplay personas (Chị Linh, Anh Nam) and pedagogical guidelines (smart corrections) in prompt templates.

### 4. Frontend Integrations
*   Migrate Javascript storage calls in [index.html](file:///d:/Works/Github/learn-vietnamese/index.html) from `localStorage` to backend fetch commands (`/api/...`).
*   **Speech Recognition UI:** A microphone button `🎙️` on word cards to record and test pronunciation client-side.

---

## ❌ Out-of-Scope (v2.0)

*   **Paid API Services:** Any paid subscription models (such as OpenAI Whisper API or Google Cloud TTS API). All speech functions must be client-side and free.
*   **Multi-User Auth & Accounts:** The app is designed for local WSL usage. It uses a single local user profile (`user_id = 1`) without login screens or password hashing.
*   **Production Hosting & Cloud DBs:** Hosting on AWS/Heroku or database services like Supabase. The server runs on `localhost` WSL and stores data in a local `.db` file.
*   **Voice Quality Assessment (AI Pronunciation Grader):** Grading exact pronunciation waveforms via AI. We only perform text matching via browser-native STT.
