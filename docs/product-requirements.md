# Product Requirements — Full-Stack AI-Native Vietnamese Tutor (v2.0)

> Phase 1: Discovery — Product requirements  
> Status: 📝 Approved  
> Version: 2.0 (Full-Stack Pivot)  
> Created: 2026-05-24  

---

## 🎯 1. Core Objectives

*   **Platform:** Responsive Web Application (HTML5 / Vanilla JS / CSS) served locally via Python (FastAPI).
*   **Target User:** Thai adult native speakers learning conversational/business Vietnamese.
*   **Operating Environment:** WSL (Ubuntu) on Windows notebook.
*   **API Cost Target:** **$0 (Zero Cost)**. All cloud resources must leverage free-tier quotas (Gemini Free Tier) and browser-native features.

---

## 💾 2. Database & Persistence Requirements (SQLite)

We require a local SQLite database (`progress.db`) running on WSL to store progress state. The backend must query and update the database via SQLAlchemy ORM.

### Database Tables:

1.  `user_profile`:
    *   `id`: Primary Key (defaults to 1 for local single user)
    *   `streak`: Integer (current daily streak)
    *   `last_active_date`: Date string (`YYYY-MM-DD`)
    *   `current_day`: Integer (furthest day unlocked, 1-28)
2.  `completed_days`:
    *   `day_num`: Integer (Primary Key, day completed)
    *   `completed_at`: DateTime
3.  `srs_words`:
    *   `word`: String (Primary Key, Vietnamese word)
    *   `meaning`: String
    *   `box`: Integer (Leitner box number, 1-5)
    *   `next_review_date`: Date string
4.  `tone_practice_stats`:
    *   `id`: Primary Key
    *   `total_attempts`: Integer
    *   `correct_attempts`: Integer
5.  `completed_quests`:
    *   `quest_id`: String (Primary Key, e.g. `w1-arrival`)
    *   `completed_at`: DateTime

---

## 🤖 3. AI API Integration Requirements (Gemini API)

We will use the **Google Gemini SDK (`google-generativeai`)** on the FastAPI backend to run AI features. 

### A. Generative Roleplay Chat (`/api/quest/chat`)
*   **Input:** User text input, current quest ID, current HP/budget, conversation history.
*   **System Prompt:** Feeds the NPC persona (e.g. Chị Linh, Anh Nam) and system variables (HP calculations, emotional reactions).
*   **Output:** JSON structure containing:
    ```json
    {
      "npc_line": "Vietnamese response text",
      "npc_line_thai": "Thai translation of the response",
      "hp_mutation": -5000,
      "feedback": "Educational suggestion or warning in Thai if tone/word was wrong, otherwise null",
      "is_finished": false,
      "success": true
    }
    ```

### B. Smart Fail Diagnostics (`/api/quiz/diagnose`)
*   **Input:** Correct word string, selected incorrect word string, user question (optional).
*   **System Prompt:** Instructs the AI as an expert adult language specialist.
*   **Output:** A short, custom explanation in Thai detailing the specific difference (e.g. onset, vowel, or tone) between the two words.

---

## 🎙️ 4. Audio & Speech Recognition Requirements

To maintain zero API costs, all speech capabilities are handled client-side:
*   **Text-to-Speech (TTS):** Uses the browser's native `SpeechSynthesis` API. If no Vietnamese voice is installed on the user's system, it automatically calls the Google Translate TTS fallback URL:
    `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q={text}`
*   **Speech Recognition (STT):** Uses the browser's native `webkitSpeechRecognition` API. The language is set to `vi-VN` to recognize user spoken input and match it with the target word.

### 🎭 Shadowing (ฟังแล้วพูดตาม)
A listen-and-repeat drill that combines TTS + STT for fluency practice:
1. Displays a Vietnamese sentence in context (e.g. ordering food, business greeting).
2. User listens to TTS playback (normal or slow speed).
3. User records themselves repeating the sentence via `webkitSpeechRecognition`.
4. Engine computes a **Levenshtein similarity score** between spoken input and target sentence.
5. Results shown as a percentage + word-by-word comparison (✅ correct / ❌ incorrect).
6. 10 built-in sentences (SHADOWING_DATA) covering A0-B1 levels, shuffled and served 5 per session.
- **Navigation:** Bottom nav tab (🎭), keyboard shortcut `h`, Roadmap quick action.
- **Zero API cost:** All processing is client-side (TTS + STT + Levenshtein).

---

## 🧱 5. REST API Interface Specs

The FastAPI server must expose the following JSON endpoints:

### 1. `GET /api/progress`
Returns user profile stats, completed days, and overall metrics:
```json
{
  "streak": 5,
  "current_day": 3,
  "completed_days": [1, 2],
  "words_learned": 20,
  "tone_accuracy": "78%",
  "quests_completed": ["w1-arrival"]
}
```

### 2. `POST /api/progress/complete`
Marks a day as completed and updates streak:
```json
{ "day_num": 3 }
```

### 3. `GET /api/srs`
Retrieves the list of words currently due for review.

### 4. `POST /api/srs/fail`
Adds a failed word to the SRS queue:
```json
{ "word": "mẹ", "meaning": "แม่" }
```

### 5. `DELETE /api/srs/master`
Removes a word from the SRS queue when the user remembers it.
