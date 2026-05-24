# Scope Checklist — Learn Vietnamese Bot

> Phase 1: Discovery
> In-scope / Out-of-scope for v1.0

---

## ✅ In-Scope (v1.0)

### Core Features
| Feature | Description | Phase |
|---------|-------------|-------|
| **Curriculum browser** | เลือก level, ดูบทเรียน, เลือกหัวข้อ | P5 v0.1 |
| **Vocabulary flashcards** | คำศัพท์ + เสียง + ตัวอย่าง + SRS | P5 v0.1 |
| **Tone practice** | ฝึกแยก 6 เสียงวรรณยุกต์ (multiple choice) | P5 v0.1 |
| **Conversation practice** | สนทนากับ AI ตาม scenario ที่เลือก | P5 v0.2 |
| **Business phrases library** | คลังประโยค copy-paste สำหรับงานจริง | P5 v0.2 |
| **Progress dashboard** | ดู level ปัจจุบัน, คำศัพท์ที่จำได้, streak | P5 v0.1 |
| **Adaptive level** | Bot ปรับ content ตามจุดอ่อน-จุดแข็ง | P6 |

### Levels (v1.0)
| Level | Content | Status |
|-------|---------|--------|
| Level 0 | ระบบเสียง: สระ, พยัญชนะ, วรรณยุกต์ 6 เสียง | P5 v0.1 |
| Level 1 | Survival: ทักทาย, ตัวเลข, ราคา, เดินทาง (~200 คำ) | P5 v0.1 |
| Level 2 | Business basics: แนะนำบริษัท, นัดหมาย, อีเมล (~300 คำ) | P5 v0.2 |

### Technical
| Item | Status |
|------|--------|
| Python + python-telegram-bot | ✅ |
| SQLite (local) | ✅ |
| OpenCode Go API | ✅ |
| systemd service on WSL | ✅ |
| Thai as explanation language | ✅ |

---

## ❌ Out-of-Scope (v1.0)

| Feature | Reason | Future? |
|---------|--------|---------|
| Voice input (user speaks → AI checks) | Complex, needs Whisper/voice API | P7+ |
| Vietnamese handwriting recognition | Out of scope | Never (text-only bot) |
| Multi-user / classroom mode | Solo use only | Never |
| Mobile app (native) | Telegram is enough | Never |
| Vietnamese ↔ English | Thai ↔ Vietnamese only | P7+ |
| Level 3-4 (advanced business) | Phase 2 | P5 v0.3 |
| Cultural etiquette lessons | Can add as content later | P6 |
| Offline mode (no internet) | AI calls need internet | Never |

---

## 📋 Scope per Phase

### P5 Prototype v0.1 — "Sound System + Survival"
- Level 0: ระบบเสียง (สระ, พยัญชนะ, วรรณยุกต์)
- Level 1: Survival conversation
- Flashcards with SRS
- Basic progress tracking
- ✅ Bot ใช้งานได้จริง, เริ่มเรียนได้

### P5 Prototype v0.2 — "Business Basics"
- Level 2: Business Vietnamese
- Conversation practice (AI scenarios)
- Business phrases library
- Adaptive difficulty

### P5 Prototype v0.3 — "Full Business"
- Level 3-4: Advanced business
- Full conversation AI
- Mastery tracking

### P6 — "Adaptive Intelligence"
- Bot learns from user mistakes
- Personalized curriculum pacing
- Suggests review based on forgetting curve

---

*Generated: 2026-05-23*
