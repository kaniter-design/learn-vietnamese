# Project Brief — Full-Stack AI-Native Vietnamese Tutor App (v2.0)

> Phase 1: Discovery — Project brief  
> Status: 📝 Approved  
> Version: 2.0 (Full-Stack Pivot)  
> Created: 2026-05-24  

---

## 🎯 Project Goals

1.  **สร้าง Full-Stack Web App** สอนภาษาเวียดนามเริ่มจาก 0 สำหรับคนไทย โดยนำเสนอแบบเส้นทางเรียนรู้และระบบบทบาทสมมติ (Text-RPG Quests)
2.  **AI-Native Integration (Zero Cost):** ผนวกโมเดล **Gemini Free Tier API** เพื่อเป็นคู่สนทนาภาษาเวียดนามแบบ Generative Roleplay, ตรวจหาข้อผิดพลาดไวยากรณ์/การออกเสียงเรียลไทม์ และประเมินวิเคราะห์จุดอ่อน (Smart Diagnostics)
3.  **ระบบเก็บความก้าวหน้าถาวร (Persistent Progress):** บันทึกสถานะการเรียนรู้อย่างยั่งยืนในฐานข้อมูลท้องถิ่น (SQLite) บน WSL เพื่อให้ข้อมูลไม่สูญหายเมื่อรีเฟรชเบราว์เซอร์
4.  **ใช้งานบน WSL:** โครงสร้างสำหรับรันเซิร์ฟเวอร์แบบส่วนตัว (Localhost) บน Windows notebook มีค่าใช้จ่ายคงที่เป็น $0/เดือน

---

## 👤 Target User

| Attribute | Value |
|---|---|
| **User** | K S (UX/UI Designer) |
| **Vietnamese level** | 0 — ไม่เคยเรียนมาก่อนเลย |
| **Goal** | Business communication ด้านการค้าระหว่างประเทศ |
| **Native language** | Thai (ภาษาไทยเป็นภาษานำอธิบาย) |
| **Tech literacy** | สูง — ทำงานร่วมกับ AI agents และรันเซิร์ฟเวอร์บน WSL ได้ปกติ |
| **Environment** | WSL (Ubuntu) on Windows notebook |

---

## 🏗 Technical Architecture

ระบบจะแยกส่วนเป็น **Client-Server Architecture** เพื่อรักษาหน้าบ้านสวยงามเดิมไว้ และใช้ Python หลังบ้านจัดการ SQLite + AI API:

```
┌────────────────────────────────────────────────────────┐
│                        BROWSER                         │
│  [index.html (Tailwind/DaisyUI) + data.js (Curriculum)]│
└───────────────────────────┬────────────────────────────┘
                            │
                            │ (fetch /api)
                            ▼
┌────────────────────────────────────────────────────────┐
│                   WSL SERVER (Local)                   │
│   [FastAPI (Python) API Gateway]                       │
└─────────────────────┬───────────────┬──────────────────┘
                      │               │
                      │               │ (Google GenAI SDK)
                      ▼               ▼
┌───────────────────────────┐   ┌────────────────────────┐
│      LOCAL DATABASE       │   │     CLOUDFRONT API     │
│   [SQLite (progress.db)]  │   │  [Gemini Free API Key] │
└───────────────────────────┘   └────────────────────────┘
```

### Tech Stack Details:
*   **Frontend:** HTML + CSS (Tailwind CDN / DaisyUI) + Vanilla JS (เชื่อมโยงผ่าน `fetch`).
*   **Backend:** Python + **FastAPI** (ประสิทธิภาพสูง รันเร็ว เขียนน้อย).
*   **Database:** **SQLite** (เก็บลงไฟล์ `progress.db` ในโปรเจกต์).
*   **AI Engine:** **Gemini 2.0 Flash API (Free Tier)** ผ่าน SDK `google-generativeai` (โควตาฟรี 1,500 ครั้ง/วัน).
*   **Speech System:** Browser Web Speech API (`webkitSpeechRecognition` และ `speechSynthesis`) ร่วมกับระบบเสียงสังเคราะห์สำรองของ Google.

---

## 📁 File Structure

```
learn-vietnamese/
├── index.html            # Frontend UI (Dashboard, Learn, Tones, Spelling, Progress, Grammar)
├── data.js               # Curriculum static data & helper config
├── app.py                # FastAPI main server entry point
├── database.py           # SQLite setup, models, and session helpers
├── schemas.py            # Pydantic schemas for request/response serialization
├── requirements.txt      # Python dependencies (fastapi, uvicorn, sqlalchemy, google-generativeai)
├── MASTER-SYSTEM-PROMPT.md
├── progress.md           # Progress tracking
└── docs/                 # Product discovery documents (P1-P4 specs)
```

---

## ✅ Success Metrics

*   **Zero Cost:** สถาปัตยกรรมทั้งหน้าบ้าน หลังบ้าน ฐานข้อมูล และ AI API ต้องฟรี 100%
*   **Dynamic Chat Performance:** บทสนทนากับ AI ในด่าน Quests ตอบสนองเร็วแบบธรรมชาติภายใน 2 วินาที
*   **Data Integrity:** ข้อมูลความก้าวหน้า ความแม่นยำของวรรณยุกต์ และคลังคำที่ตอบผิด (SRS) ถูกบันทึกถาวรลงใน SQLite
*   **Frictionless Running:** รันเซิร์ฟเวอร์ด้วยคำสั่งสั้น ๆ ตัวเดียวจาก WSL เช่น `uvicorn app:app --reload`
