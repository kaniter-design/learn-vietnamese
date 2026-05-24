# Product Requirements — Learn Vietnamese Bot (Consolidated)

> เอกสารรวม Requirements ทั้งหมดสำหรับ AI ทำงานต่อ
> Updated: 2026-05-23

---

## 🎯 Core Objective

- **Project:** Telegram Bot สอนภาษาเวียดนาม เริ่มจาก 0
- **Target:** ผู้ใหญ่วัยทำงาน (Adult Learners)
- **AI Persona:** Product Designer + ผู้สอนภาษาเวียดนาม + Adult Learning Expert
- **Constraints:** ไม่มี Image Generation — ใช้ Text, Emoji, Inline Keyboard, Voice Message

---

## 🧠 Learning Principles

### 1. Practical First
- เน้นคำศัพท์และประโยคเอาชีวิตรอด (Survival phrases) ที่ใช้ได้จริงทันที
- เลี่ยงการท่องจำแบบนกแก้ว (parrot learning)

### 2. Mental Anchors
- **สระ:** เทียบกับ A, E, I, O, U ในภาษาอังกฤษ
  - a → /ɑ/ (เหมือน "a" ใน "father")
  - ă → /æ/ (เหมือน "a" ใน "cat")
  - â → /ə/ (เหมือน "a" ใน "about")
  - e → /ɛ/ (เหมือน "e" ใน "bed")
  - ê → /e/ (เหมือน "ay" ใน "say")
  - i → /i/ (เหมือน "ee" ใน "see")
  - o → /ɔ/ (เหมือน "o" ใน "hot")
  - ô → /o/ (เหมือน "o" ใน "go")
  - ơ → /əː/ (เหมือน "u" ใน "fur")
  - u → /u/ (เหมือน "oo" ใน "food")
  - ư → /ɨ/ (ไม่มีในอังกฤษ — ปากแบ้แต่ลิ้นยกขึ้น)
  - y → /i/ (เหมือน "ee")

- **พยัญชนะท้าย (Final Consonants):** เทียบกับมาตราตัวสะกดไทย
  - แม่กก (k, c, ng) → พยัญชนะท้าย -k, -c, -ng
  - แม่กด (t, p) → พยัญชนะท้าย -t, -p
  - แม่กน (n, m) → พยัญชนะท้าย -n, -m
  - เสียงที่ไม่มีในไทย: -nh (เหมือน "ny" ใน "canyon"), -ch

- **วรรณยุกต์:** เทียบกับเสียงวรรณยุกต์ไทย 5 เสียง
  - Ngang (ราบ) ≈ เสียงสามัญไทย
  - Huyền (เอก) ≈ เสียงเอกไทย
  - Sắc (จัตวา) ≈ เสียงจัตวาไทย
  - Hỏi (ถาม) ≈ ไม่มีในไทย — เสียงขึ้นแล้วลง
  - Ngã (น้ำ) ≈ ไม่มีในไทย — เสียงสะดุด (creaky)
  - Nặng (กลั้น) ≈ ไม่มีในไทย — เสียงสั้นกระแทก

### 3. Microlearning (Chunking)
- ส่งข้อมูลทีละส่วนสั้นๆ
- เรียน 3-5 นาที/วัน
- ป้องกัน Cognitive Overload

### 4. Spaced Repetition
- ติดตามคำที่ตอบผิด
- แจ้งเตือนทบทวนแบบเว้นระยะ: 1 วัน → 3 วัน → 7 วัน → 14 วัน → 30 วัน

---

## 🛠 Features & UX

### 1. Symbolic & Physical Cues (Emoji Tone Markers)
ทุกคำศัพท์แสดง Emoji กำกับเสียงวรรณยุกต์:

| เสียง | Emoji | ทิศทาง | ตัวอย่าง |
|-------|-------|--------|----------|
| Ngang | ➡️ | ราบ | ma ➡️ |
| Huyền | ↘️ | ลงต่ำ | mà ↘️ |
| Sắc | ↗️ | ขึ้นสูง | má ↗️ |
| Hỏi | ❓ | ขึ้นแล้วลง | bả ❓ |
| Ngã | 〰️ | กระเพื่อม (creaky) | mã 〰️ |
| Nặng | ⬇️ | สั้นกระแทก | mạ ⬇️ |

### 2. Audio Integration
- Voice Note 2-3 วินาที ควบคู่ทุกคำศัพท์
- สมองเชื่อมโยงเสียงกับสัญลักษณ์
- ปุ่ม 🔊 ฟัง ทุกคำ/ประโยค

### 3. Inline Keyboards
- **ควบคุมจังหวะ:** กด "อ่านต่อ" / "ฟังซ้ำ" / "ทบทวนอีกครั้ง"
- **Quiz:** เลือกคำตอบจาก 4 ตัวเลือก
- **Spelling Drills:** สะกดคำโดยกดเลือก พยัญชนะ + สระ + วรรณยุกต์ ตามลำดับ → บอทส่งเสียงเฉลย

### 4. Text Roleplay
- จำลองสถานการณ์: สั่งอาหาร, ซื้อของ, นัดหมาย
- AI เป็นคู่สนทนา, ผู้ใช้พิมพ์ภาษาเวียดนาม

### 5. Text Gamification
- Progress Bar: 🟩🟩🟩⬜️⬜️ (60%)
- Streak: 🔥 7 วัน
- Emoji feedback: ✅ ถูก / ❌ ผิด / ⭐ เยี่ยม / 💪 ใกล้แล้ว

---

## 📚 4-Week Curriculum (Detailed)

### Onboarding
- ถามเป้าหมาย: ท่องเที่ยว / ทำงาน / สนทนาทั่วไป
- ปรับเนื้อหาตามเป้าหมาย

### สัปดาห์ที่ 1: ทักทาย + วรรณยุกต์
| วัน | เนื้อหา | คำศัพท์ |
|-----|---------|----------|
| 1 | ทักทายพื้นฐาน | xin chào, cảm ơn, xin lỗi, tạm biệt (8 คำ) |
| 2 | แนะนำตัว | tôi, bạn, tên, quốc tịch, nghề nghiệp (12 คำ) |
| 3 | วรรณยุกต์ 1-3 | Ngang, Huyền, Sắc + minimal pairs (15 คำ) |
| 4 | วรรณยุกต์ 4-6 | Hỏi, Ngã, Nặng + minimal pairs (15 คำ) |
| 5 | สระพื้นฐาน | a, ă, â, e, ê, i (10 คำตัวอย่าง) |
| 6 | พยัญชนะพื้นฐาน | b, c, d, đ, g, h, k, l, m, n (15 คำ) |
| 7 | ทบทวนรายสัปดาห์ | Quiz + Spelling Drill |

### สัปดาห์ที่ 2: ตัวเลข + ซื้อของ
| วัน | เนื้อหา | คำศัพท์ |
|-----|---------|----------|
| 1 | ตัวเลข 1-20 | một → hai mươi (20 คำ) |
| 2 | ตัวเลข 20-100 | ba mươi → một trăm (10 คำ) |
| 3 | สกุลเงิng | đồng, nghìn, triệu (8 คำ) |
| 4 | ถามราคา | bao nhiêu, đắt, rẻ (10 คำ) |
| 5 | ต่อราộc | giảm giá, mắc quá, bao nhiêu tiền (12 คำ) |
| 6 | Roleplay: ซื้อของ | จำลองตลาด (10 คำ) |
| 7 | ทบทวนรายสัปดาห์ | Quiz + Roleplay |

### สัปดาห์ที่ 3: อาหาร + สั่งเฝอ/กาแฟ
| วัน | เนื้อหา | คำศัพท์ |
|-----|---------|----------|
| 1 | อาหารพื้นฐาน | cơm, phở, bún, bánh mì, thịt, cá, rau (15 คำ) |
| 2 | เครื่องดื่ม | cà phê, trà, nước, bia, sữa (10 คำ) |
| 3 | สั่ngของในร้าน | cho tôi, thêm, không, ạ (10 คำ) |
| 4 | รสชาติ | ngon, dắt, mặn, ngọt, chua, cay (8 คำ) |
| 5 | Roleplay: สั่งกาแฟ | cà phê đen/sữa, đá/nóng (12 คำ) |
| 6 | Roleplay: สั่งเฝอ | จำลองร้านอาหาร (15 คำ) |
| 7 | ทบทวนรายสัปดาห์ | Quiz + Roleplay |

### สัปดาห์ที่ 4: เดินทาง + ทิศทาง
| วัน | เนื้อหา | คำศัพท์ |
|-----|---------|----------|
| 1 | การเดินทาง | xe buýt, taxi, xe máy, đi bộ, máy bay (10 คำ) |
| 2 | ทิศทาง | trái, phải, thẳng, quay lại, gần, xa (10 คำ) |
| 3 | ถาม-บอกทาง | ở đâu, đi thế nào, bao xa (12 คำ) |
| 4 | เรียกรร | taxi, Grab, giá bao nhiêu, đến đây (10 คำ) |
| 5 | Roleplay: ถามทาง | จำลองบอกทาง (12 คำ) |
| 6 | Roleplay: เรียกรร | จำลองเรียก taxi/Grab (10 คำ) |
| 7 | ทบทวนรายสัปดาห์ | Quiz + Roleplay + Spelling Drill |

**Total: ~250 คำศัพท์ใน 4 สัปดาห์**

---

## 📐 Spelling Drill Format

```
Bot: สะกดคำว่า "xin chào" กันเถอะ!
     เลือกพยัญชนะต้น: [x] [s] [ch] [kh]
     
User: [x]
Bot: ✅ ถูก! ต่อไป — เลือกสระ: [i] [a] [o] [e]

User: [i]
Bot: ✅ ถูก! ต่อไป — เลือกวรรณยุกต์: [➡️] [↘️] [↗️] [↗↘️] [〰️] [⬇️]

User: [↘️]
Bot: ❌ ผิด! "xin" เป็นเสียง Ngang (➡️) — ไม่มีวรรณยุกต์
     ลองอีกครั้ง: [➡️] [↘️] [↗️]
```

---

## 📊 Progress Tracking

| Metric | How Shown |
|--------|-----------|
| คำศัพท์ที่จำได้ | "📚 47 คำที่จำได้" |
| คะแนนวรรณยุกต์ | "📝 เสียง: 72% (↗️↘️✅ ↗↘️〰️⬇️❌)" |
| Streak | "🔥 7 วัน" |
| Level progress | "🟩🟩🟩⬜️⬇️ 60% → Level 1" |
| เป้าหมายวัน | "⏱️ 3/10 นาทีวันนี้" |

---

## 📤 Output Format (JSON)

Every bot response must be valid JSON with this structure:

```json
{
  "system_state_update": {
    "update_error_log": "string_or_null",
    "adjust_difficulty": -1,
    "trigger_srs": true
  },
  "feedback_layer": "โอ๊ะ! พลาดไปนิดเดียวคับ 😅",
  "core_content_layer": "คำที่คุณเลือกคือ **Cấm ơน** คำว่า Cấm แปลว่า \"ห้าม\" คับ! ถ้าเราจะขอบคุณ เราต้องใช้ **Cảm** ❓",
  "audio_directive": {
    "text_to_synthesize": "Cảm ơn. Cấm ơn.",
    "speed_rate": 0.8
  },
  "interaction_prompt": "ลองฟังความต่าง แล้วเลือกคำตอบที่แปลว่า \"ขอบคุณ\" อีกครั้งคับ",
  "ui_render_directive": {
    "keyboard_type": "Inline_Keyboard",
    "inline_buttons": [
      ["Cảm ơน", "Cấม ơน"],
      ["🔊 ฟังความต่าง"]
    ]
  }
}
```

**speed_rate:** 0.8 = slow, 1.0 = normal

---

## 🔑 Key Design Decisions

1. **Thai as bridge** — อธิบายทุกอย่างเป็นภาษาไทย
2. **Emoji tone markers** — แสดงทิศทางเสียงทุกคำ
3. **Voice Notes** — ทุกคำมีเสียง 2-3 วินาที
4. **Spelling Drills** — สะกดทีละส่วน: พยัญชนะ + สระ + วรรณยุกต์
5. **Mental Anchors** — เทียบสระกับ A,E,I,O,U และพยัญชนะท้ายกับมาตราไทย
6. **Microlearning** — 3-5 นาที/วัน
7. **Spaced Repetition** — ทบทวน 1→3→7→14→30 วัน

---

*Generated: 2026-05-23 | Consolidated from all P1-P3 deliverables*
