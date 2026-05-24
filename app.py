import os
import json
import datetime
import urllib.request
import urllib.parse
from typing import List
from fastapi import FastAPI, Depends, HTTPException, Query
from fastapi.responses import FileResponse, JSONResponse, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import google.generativeai as genai

from database import init_db, get_db, UserProfile, CompletedDay, CompletedQuest, SRSWord, TonePracticeStat
import schemas

# Initialize database
init_db()

# Configure Gemini API
api_key = os.environ.get("GEMINI_API_KEY")
if api_key:
    genai.configure(api_key=api_key)
else:
    print("WARNING: GEMINI_API_KEY environment variable not found. Gemini integration will fail.")

app = FastAPI(title="Learn Vietnamese Backend API")

# Add CORS Middleware to support local developer calls
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Host main frontend files directly at root
@app.get("/")
async def get_index():
    return FileResponse("index.html")

@app.get("/data.js")
async def get_data_js():
    return FileResponse("data.js")

@app.get("/design-tokens.css")
async def get_design_tokens_css():
    return FileResponse("design-tokens.css")

# --- Progress Endpoints ---

@app.get("/api/progress", response_model=schemas.ProgressResponse)
def get_progress(db: Session = Depends(get_db)):
    profile = db.query(UserProfile).filter(UserProfile.id == 1).first()
    if not profile:
        raise HTTPException(status_code=404, detail="User profile not found")

    # Completed days
    completed_days_records = db.query(CompletedDay).all()
    completed_days = [c.day_num for c in completed_days_records]

    # Completed quests
    completed_quests_records = db.query(CompletedQuest).all()
    quests_completed = [c.quest_id for c in completed_quests_records]

    # SRS words learned (in Box 2-5 or total in SRS)
    words_learned = db.query(SRSWord).count()

    # Tone accuracy
    tone_stats = db.query(TonePracticeStat).filter(TonePracticeStat.id == 1).first()
    tone_accuracy = "0%"
    if tone_stats and tone_stats.total_attempts > 0:
        pct = int((tone_stats.correct_attempts / tone_stats.total_attempts) * 100)
        tone_accuracy = f"{pct}%"

    return {
        "streak": profile.streak,
        "current_day": profile.current_day,
        "completed_days": completed_days,
        "words_learned": words_learned,
        "tone_accuracy": tone_accuracy,
        "quests_completed": quests_completed,
    }

@app.post("/api/progress/complete")
def complete_day(payload: schemas.DayCompletionRequest, db: Session = Depends(get_db)):
    profile = db.query(UserProfile).filter(UserProfile.id == 1).first()
    if not profile:
        raise HTTPException(status_code=404, detail="User profile not found")

    # Record day completion
    existing_completion = db.query(CompletedDay).filter(CompletedDay.day_num == payload.day_num).first()
    if not existing_completion:
        new_completion = CompletedDay(day_num=payload.day_num)
        db.add(new_completion)

    # Update current day (max unlocked, cap at 28)
    if payload.day_num == profile.current_day and profile.current_day < 35:
        profile.current_day = payload.day_num + 1

    # Update Streak logic
    today_str = datetime.date.today().isoformat()
    yesterday_str = (datetime.date.today() - datetime.timedelta(days=1)).isoformat()

    if not profile.last_active_date:
        profile.streak = 1
    elif profile.last_active_date == yesterday_str:
        profile.streak += 1
    elif profile.last_active_date != today_str:
        # Reset if they skipped a day
        profile.streak = 1

    profile.last_active_date = today_str
    db.commit()

    return {"status": "success", "streak": profile.streak, "current_day": profile.current_day}

# --- SRS Endpoints ---

@app.get("/api/srs", response_model=List[schemas.SRSWordResponse])
def get_srs_queue(db: Session = Depends(get_db)):
    today_str = datetime.date.today().isoformat()
    # Fetch words due for review (next_review_date <= today)
    words = db.query(SRSWord).filter(SRSWord.next_review_date <= today_str).all()
    return words

@app.post("/api/srs/fail", response_model=schemas.SRSWordResponse)
def srs_fail(payload: schemas.SRSWordCreate, db: Session = Depends(get_db)):
    today = datetime.date.today()
    word_record = db.query(SRSWord).filter(SRSWord.word == payload.word.lower()).first()

    # Demote box: box = max(1, box - 1). Review again tomorrow.
    tomorrow_str = (today + datetime.timedelta(days=1)).isoformat()
    if word_record:
        word_record.box = max(1, word_record.box - 1)
        word_record.next_review_date = tomorrow_str
    else:
        word_record = SRSWord(
            word=payload.word.lower(),
            meaning=payload.meaning,
            box=1,
            next_review_date=tomorrow_str
        )
        db.add(word_record)

    db.commit()
    db.refresh(word_record)
    return word_record

@app.delete("/api/srs/master/{word}")
def srs_master(word: str, db: Session = Depends(get_db)):
    today = datetime.date.today()
    word_record = db.query(SRSWord).filter(SRSWord.word == word.lower()).first()

    if not word_record:
        # If it doesn't exist, ignore or return success
        return {"status": "archived", "message": "Word not in SRS queue"}

    # Promote box: box = box + 1
    new_box = word_record.box + 1

    if new_box >= 5:
        # Fully mastered, remove from queue
        db.delete(word_record)
        db.commit()
        return {"status": "mastered", "message": f"Word '{word}' has been fully mastered and archived!"}
    else:
        # Schedule next interval review based on Leitner Box spacing:
        # Box 2: +3 days, Box 3: +7 days, Box 4: +14 days
        intervals = {2: 3, 3: 7, 4: 14}
        days_add = intervals.get(new_box, 1)
        next_date = (today + datetime.timedelta(days=days_add)).isoformat()

        word_record.box = new_box
        word_record.next_review_date = next_date
        db.commit()
        return {
            "status": "promoted",
            "box": new_box,
            "next_review_date": next_date,
            "message": f"Promoted '{word}' to Box {new_box}. Due on {next_date}."
        }

# Support query parameter fallback for DELETE /api/srs/master
@app.delete("/api/srs/master")
def srs_master_query(word: str = Query(...), db: Session = Depends(get_db)):
    return srs_master(word, db)

@app.get("/api/srs/stats")
def get_srs_stats(db: Session = Depends(get_db)):
    counts = {}
    words = {}
    for i in range(1, 6):
        box_records = db.query(SRSWord).filter(SRSWord.box == i).all()
        counts[str(i)] = len(box_records)
        words[str(i)] = [{"word": r.word, "meaning": r.meaning} for r in box_records]
    return {"counts": counts, "words": words}

# --- Tone Stat Endpoint ---

@app.post("/api/tones/record")
def record_tone_practice(payload: schemas.TonePracticeUpdate, db: Session = Depends(get_db)):
    stats = db.query(TonePracticeStat).filter(TonePracticeStat.id == 1).first()
    if not stats:
        stats = TonePracticeStat(id=1, total_attempts=0, correct_attempts=0)
        db.add(stats)

    stats.total_attempts += 1
    if payload.is_correct:
        stats.correct_attempts += 1

    db.commit()
    db.refresh(stats)

    pct = int((stats.correct_attempts / stats.total_attempts) * 100)
    return {"total": stats.total_attempts, "correct": stats.correct_attempts, "accuracy": f"{pct}%"}

# --- Gemini Quest Chat Integration ---

@app.post("/api/quest/chat", response_model=schemas.QuestChatResponse)
def quest_chat(payload: schemas.QuestChatRequest, db: Session = Depends(get_db)):
    if not api_key:
        # Fallback response if API key is not configured
        return {
            "system_state_update": {"update_error_log": None, "adjust_difficulty": 0, "trigger_srs": False},
            "feedback_layer": "ระบบออฟไลน์ (กรุณาตั้งคีย์ Gemini API)",
            "core_content_layer": "Chào bạn! (เซิร์ฟเวอร์ออฟไลน์)",
            "audio_directive": {"text_to_synthesize": "Chào bạn!", "speed_rate": 1.0},
            "interaction_prompt": "กรุณาต่อสู้คีย์หลังบ้าน",
            "ui_render_directive": {
                "keyboard_type": "Options_Grid",
                "inline_buttons": [["Cho tôi cà phê", "Cảm ơn"], ["🔊 ฟังอีกครั้ง"]]
            }
        }

    # Construct the instruction and roleplay prompts matching the scenario
    # Add target user persona parameters (พนักงานราชการไทย, 32 ปี, จำเก่ง, เรียนจีนอยู่)
    system_prompt = f"""
You are acting as an adaptive Vietnamese Language Tutor running a roleplay simulation.
The learner profile is: 32-year-old Thai civil servant, speaks English, currently learning Chinese, has a good memory.
Current Quest ID: {payload.quest_id}
Current User HP: {payload.hp}
Current User Budget: {payload.budget} VND

VOCABULARY CONSTRAINT — CRITICAL:
You MUST ONLY use Vietnamese words from these approved vocabulary lists corresponding to the user's level.
For Level 0-1 (Survival): words from greetings, numbers, shopping, food, transport, and daily survival.
For Level 2 (Business Basics): words related to company structure, meetings, phone, emails.
For Level 3 (Business Trade): words related to negotiation, contracts, payments, problem-solving.

If the quest is 'w1-arrival' or 'coffee_shop' or 'airport' or 'taxi' → use ONLY Level 0-1 vocabulary (survival).
If the quest is 'office_meeting' or 'business_lunch' → use ONLY Level 1-2 vocabulary (survival + business basics).
If the quest is 'mou_meeting' or 'contract_negotiation' → use ONLY Level 1-3 vocabulary (survival + business basics + trade).

Approved vocabulary list (if provided): {payload.vocab_list or 'All Level 0-1 survival vocabulary'}
You MUST prioritize words from this approved list when provided.

NEVER use advanced vocabulary (C1/C2 level) that the learner cannot understand.
If a concept requires a word outside the allowed range, simplify the sentence or use circumlocution.

Instructions:
1. Play the appropriate NPC persona for the quest scenario.
   - For 'w1-arrival': Act as 'Anh Nam' (Grab bike driver in Hanoi), use slightly informal but helpful language.
   - For 'coffee_shop' or similar: Act as 'Chị Linh' (Pho/Coffee shop vendor), speak clearly, react to correct/incorrect tones.
   - For 'mou_meeting': Act as 'Ông Nguyễn' (Trưởng phòng — department head), use formal business language with polite vocabulary.
2. Evaluate the user's inputs. If they write incorrect Vietnamese or sounds inappropriate/incorrect tones, penalize their HP by 10% or deduct 10,000 VND from their budget, and explain the error in the feedback_layer in Thai.
3. Respond in Vietnamese (core_content_layer) and provide a translation in Thai.
4. Supply a list of response options (ui_render_directive.inline_buttons) for the user to choose from (Scaffolding). One option should be correct, others should have subtle tone or vowel mistakes.

You MUST respond strictly in valid JSON format matching this schema:
{{
  "system_state_update": {{
    "update_error_log": "tone_confusion" or "vowel_confusion" or null,
    "adjust_difficulty": -1 or 0 or 1,
    "trigger_srs": true or false
  }},
  "feedback_layer": "Thai explanation of mistakes or validation. E.g. 'เก่งมากครับ!'",
  "core_content_layer": "NPC response in Vietnamese with English translation inside parentheses if useful.",
  "audio_directive": {{
    "text_to_synthesize": "Vietnamese sentence for TTS",
    "speed_rate": 1.0 or 0.8
  }},
  "interaction_prompt": "Thai instructions for the user's next action.",
  "ui_render_directive": {{
    "keyboard_type": "Options_Grid",
    "inline_buttons": [
      ["Option A (correct)", "Option B (incorrect tone)"],
      ["🔊 ฟังอีกครั้ง"]
    ]
  }}
}}
"""

    # Format chat history for Gemini API
    contents = [system_prompt]
    for h in payload.chat_history:
        role = "user" if h.get("role") == "user" else "model"
        contents.append(f"{role}: {h.get('text')}")
    contents.append(f"user: {payload.user_message}")

    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        response = model.generate_content(
            contents,
            generation_config={"response_mime_type": "application/json"}
        )
        
        parsed_res = json.loads(response.text)
        
        # Verify quest completion state
        if parsed_res.get("core_content_layer") and ("success" in response.text.lower() or "tạm biệt" in response.text.lower() or "cảm ơn" in response.text.lower() and len(payload.chat_history) > 4):
            # Mark quest as completed
            existing_quest = db.query(CompletedQuest).filter(CompletedQuest.quest_id == payload.quest_id).first()
            if not existing_quest:
                new_q = CompletedQuest(quest_id=payload.quest_id)
                db.add(new_q)
                db.commit()

        return parsed_res

    except Exception as e:
        print(f"Gemini API error: {e}")
        # Return fallback response
        return {
            "system_state_update": {"update_error_log": None, "adjust_difficulty": 0, "trigger_srs": False},
            "feedback_layer": f"เกิดข้อผิดพลาดในการเรียก AI: {str(e)}",
            "core_content_layer": "Xin lỗi! (ระบบไม่เข้าใจคำพูด)",
            "audio_directive": {"text_to_synthesize": "Xin lỗi!", "speed_rate": 1.0},
            "interaction_prompt": "กรุณาลองพิมพ์ข้อความใหม่อีกครั้ง",
            "ui_render_directive": {
                "keyboard_type": "Options_Grid",
                "inline_buttons": [["ลองใหม่อีกครั้ง"], ["🔊 ฟังความต่าง"]]
            }
        }

# --- Google TTS Proxy Endpoint ---

@app.get("/api/tts")
def get_tts(text: str):
    try:
        encoded_text = urllib.parse.quote(text)
        url = f"https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q={encoded_text}"
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
        )
        response = urllib.request.urlopen(req)
        return StreamingResponse(response, media_type="audio/mpeg")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"TTS proxy failed: {e}")

# --- Gemini Smart Fail Diagnostics ---

@app.post("/api/quiz/diagnose", response_model=schemas.DiagnosticResponse)
def quiz_diagnose(payload: schemas.DiagnosticRequest):
    if not api_key:
        return {"explanation": f"ระบบออฟไลน์: คำตอบที่ถูกต้องคือ '{payload.correct_word}' คับ"}

    prompt = f"""
You are an expert Vietnamese tutor for Thai adult learners.
The user selected the incorrect word '{payload.incorrect_word}' instead of the correct target word '{payload.correct_word}'.

Provide a short, friendly explanation in Thai (maximum 3 sentences) explaining the linguistic difference between the two words.
Analyze differences in tone contours, vowel shapes (e.g., â vs a), or consonants (e.g., d vs đ).
Compare the tone contours to Thai tones or Chinese tones where helpful.
Keep the explanation helpful and conversational. Avoid complex academic jargon.
"""
    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        response = model.generate_content(prompt)
        return {"explanation": response.text.strip()}
    except Exception as e:
        return {"explanation": f"เกิดข้อผิดพลาด: คำตอบที่ถูกต้องคือ '{payload.correct_word}'"}
