# Scaffolding & Fading Matrix — Curriculum Integration

> Phase 3+: Pedagogy Detail
> Maps Master Prompt Tier 1/2/3 to curriculum modules

---

## Tier Definitions

| Tier | Name | User Action | Bot Provides | When to Use |
|------|------|-------------|--------------|-------------|
| **Tier 1** | Recognition | Select from options | Full Thai translation + audio + 3-4 options | New concept, first exposure |
| **Tier 2** | Recall | Type the word | Thai hint only, no options | After 2+ correct Tier 1 responses |
| **Tier 3** | Production | Build full sentence | Situational prompt, no hints | After 2+ correct Tier 2 responses |

---

## Curriculum Tier Mapping

### Week 1: ทักทาย + ระบบเสียง

| Day | Module | Tier 1 (Recognition) | Tier 2 (Recall) | Tier 3 (Production) |
|-----|--------|---------------------|------------------|---------------------|
| 1 | ทักทาย | เลือกคำแปลที่ถูก: xin chào = ? | พิมพ์คำเวียดนามสำหรับ "สวัสดี" | แนะนำตัวเอง: "Xin chào, tôi là..." |
| 2 | แนะนำตัว | เลือกคำที่ถูก: ผม/ฉัน = ? | พิมพ์ "ผม" เป็นเวียดนาม | บอกชื่อ + อาชีพเป็นเวียดนาม |
| 3 | วรรณยุกต์ 1-3 | ฟังแล้วเลือกเสียง: ma = ➡️/↘️/↗️ | พิมพ์คำที่มีเสียง Sắc | อ่านคำ 3 คำที่มีเสียงต่างกัน |
| 4 | วรรณยุกต์ 4-6 | ฟังแล้วเลือก: mả = ❓/〰️/⬇️ | พิมพ์คำที่มีเสียง Hỏi | อ่าน minimal pair ออกเสียง |
| 5 | สระ | ฟังแล้วจับคู่สระกับเสียง | พิมพ์สระที่ฟังได้ | อ่านคำที่มีสระต่างกัน |
| 6 | พยัญชนะ | เลือกพยัญชนะที่ฟังได้ | พิมพ์คำที่ขึ้นต้นด้วย "đ" | สะกดคำง่ายๆ 5 คำ |
| 7 | ทบทวน | Quiz ทุก tier ผสม | — | Roleplay: ทักทาย + แนะนำตัว |

### Week 2: ตัวเลข + ซื้อของ

| Day | Module | Tier 1 | Tier 2 | Tier 3 |
|-----|--------|--------|--------|--------|
| 1 | เลข 1-20 | ฟังแล้วเลือกตัวเลข | พิมพ์ตัวเลขที่ฟังได้ | บอกราคาสินค้า |
| 2 | เลข 20-100 | เลือกคำที่ถูก: 50 = ? | พิมพ์ "ห้าสิบ" เป็นเวียดนาม | บอกราคาที่สูงขึ้น |
| 3 | สกุลเงิน | เลือกคำแปล: đồng = ? | พิมพ์สกุลเงิน | ถามราคาเป็นเวียดนาม |
| 4-5 | ถาม-ต่อราคา | เลือกประโยคที่ถูก | พิมพ์คำถามราคา | Roleplay: ต่อราคาในตลาด |
| 6-7 | Roleplay | เลือกคำตอบในบทสนทนา | พิมพ์คำตอบเอง | สนทนาเต็มโดยไม่มีตัวเลือก |

### Week 3: อาหาร + สั่งเฝอ/กาแฟ

| Day | Module | Tier 1 | Tier 2 | Tier 3 |
|-----|--------|--------|--------|--------|
| 1-2 | อาหาร/เครื่องดื่ม | เลือกคำแปล | พิมพ์ชื่ออาหาร | บอกเมนูที่ชอบ |
| 3-4 | สั่งของ | เลือกประโยคที่ถูก | พิมพ์คำสั่งซื้อ | Roleplay: สั่งกาแฟ |
| 5-7 | Roleplay | เลือกคำตอบ | พิมพ์คำตอบ | สั่งอาหารเต็มรูปแบบ |

### Week 4: เดินทาง + ทิศทาง

| Day | Module | Tier 1 | Tier 2 | Tier 3 |
|-----|--------|--------|--------|--------|
| 1-2 | การเดินทาง/ทิศ | เลือกคำแปล | พิมพ์คำ | บอกทางไปสถานที่ |
| 3-4 | ถาม-บอกทาง | เลือกประโยค | พิมพ์คำถาม | Roleplay: ถามทาง |
| 5-7 | Roleplay | เลือกคำตอบ | พิมพ์คำตอบ | สนทนาเต็ม: เรียกรถ + บอกทาง |

---

## Spelling Drill Tier Integration

### Tier 1: Recognition (Identify correct spelling)
```
Bot: คำนี้สะกดอย่างไร? "xin chào"
[xin chào] [xin chao] [sin chào] [sin chao]
→ User selects correct option
```

### Tier 2: Recall (Build from hints)
```
Bot: สะกดคำว่า "xin chào"
Step 1: เลือกพยัญชนะต้น [x] [s] [ch]
Step 2: เลือกสระ [i] [a] [o]
Step 3: เลือกวรรณยุกต์ [➡️] [↘️] [↗️]
→ User builds word step by step
```

### Tier 3: Production (Type from memory)
```
Bot: พิมพ์คำเวียดนามสำหรับ "สวัสดี"
→ User types: xin chào
```

---

## Tier Transition Rules

### Promote (→ Higher Tier):
- 3 consecutive correct answers at current tier
- Response time < 10 seconds

### Demote (→ Lower Tier):
- Error streak >= 3 (automatic)
- Response time > 60 seconds (offer hint first, then demote if still stuck)
- User explicitly asks for help

### Tier State Tracking:
Each user has a `current_tier` per module stored in SessionState.
New modules always start at Tier 1.
Completed modules retain highest achieved tier for review.

---

*Generated: 2026-05-23 | Phase 3+ Pedagogy Detail*
