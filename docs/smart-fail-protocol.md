# Smart Fail Protocol — Diagnostic Error Correction

> Phase 3+: Pedagogy Detail
> Master Reference for AI response generation when user makes errors

---

## 🚫 Rule: NEVER say "Incorrect. The answer is X."

Every error response MUST:
1. Acknowledge what the user got right
2. Diagnose WHY the error happened
3. Provide the correct answer with explanation
4. Give actionable next step

---

## Error Type Response Templates

### Type 1: Tone Confusion

**Scenario:** User selects wrong tone (e.g., Hỏi ❓ vs Ngã 〰️)

**Template:**
```
เกือบถูกแล้วคับ! แต่คุณเลือกเสียง **[wrong_tone_emoji]** แทนที่จะเป็น **[correct_tone_emoji]**

คำว่า **[wrong_word]** แปลว่า "[wrong_meaning]" คับ
คำที่ถูกคือ **[correct_word]** [correct_tone_emoji] แปลว่า "[correct_meaning]"

💡 **[tone_name]:** [tone_description]
ลองฟังความต่างอีกครั้งนะคับ 👂
```

**Example (Hỏi vs Ngã):**
```
เกือบถูกแล้วคับ! 😅 แต่คุณเลือกเสียง **〰️ (Ngã)** แทนที่จะเป็น **❓ (Hỏi)**

คำว่า **mã** 〰️ แปลว่า "ม้า" คับ
คำที่ถูกคือ **mả** ❓ แปลว่า "หลุม"

💡 เสียง Hỏi ❓ = เสียงขึ้นแล้วลง (เหมือนถามคำถาม)
   เสียง Ngã 〰️ = เสียงสะดุด (เหมือนพูดแล้วสะดุด)
ลองฟังความต่างอีกครั้งนะคับ 👂
```

### Type 2: Vowel Confusion

**Scenario:** User selects wrong vowel (e.g., a vs ă vs â)

**Template:**
```
ใกล้แล้วคับ! แต่สระที่คุณเลือกคือ **[wrong_vowel]** แทนที่จะเป็น **[correct_vowel]**

[cross_linguistic_anchor]

ลองฟังแล้วเลือกใหม่นะคับ 👂
```

**Example (a vs ă):**
```
ใกล้แล้วคับ! แต่สระที่คุณเลือกคือ **a** (อา) แทนที่จะเป็น **ă** (แอ)

💡 **a** เหมือน "a" ใน "father" — ปากกว้าง
   **ă** เหมือน "a" ใน "cat" — ปากแคบ

คำว่า **ba** คือ "สาม" แต่ **bă** ไม่มีในพจนานุกรมนะคับ 😅
ลองฟังแล้วเลือกใหม่นะคับ 👂
```

### Type 3: Consonant Confusion

**Scenario:** User selects wrong consonant (e.g., d vs đ)

**Template:**
```
เกือบแล้วคับ! แต่ตัวที่คุณเลือกคือ **[wrong_consonant]** แทนที่จะเป็น **[correct_consonant]**

[cross_linguistic_anchor]

ลองเลือกใหม่นะคับ 💪
```

**Example (d vs đ):**
```
เกือบแล้วคับ! แต่ตัวที่คุณเลือกคือ **d** แทนที่จะเป็น **đ**

💡 **d** เวียดนามออกเสียงแข็งๆ เหมือน "ด" ไทย
   **đ** เวียดนามออกเสียงเหมือน "ด" แต่เสียงลึกกว่า — ไม่มีในไทยพวกเราเลย!

คำว่า **đi** คือ "ไป" แต่ **di** แปลว่า "ย้าย" คับ
ลองเลือกใหม่นะคับ 💪
```

### Type 4: Spelling Error

**Scenario:** User builds wrong character in spelling drill

**Template:**
```
ขั้นที่ [step] ยังไม่ถูกคับ

**[explanation_of_wrong_choice]**

ลองแยกฟังอีกครั้ง: **[hint]**
```

### Type 5: Grammar Error

**Scenario:** User writes wrong word order or particle

**Template:**
```
เข้าใจแล้วคับ! แต่ในภาษาเวียดนาม เราใช้คำว่า **[correct_word]** แทน **[wrong_word]**

💡 **[grammar_rule_explanation]**

ลองสร้างประโยคใหม่ด้วยคำว่า **[correct_word]** นะคับ ✍️
```

---

## JSON Output for Smart Fail

```json
{
  "system_state_update": {
    "update_error_log": "tone_confusion_Hoi_vs_Nga",
    "adjust_difficulty": -1,
    "trigger_srs": true
  },
  "feedback_layer": "เกือบถูกแล้วคับ! แต่คุณเลือกเสียง **〰️ (Ngã)** แทนที่จะเป็น **❓ (Hỏi)**",
  "core_content_layer": "คำว่า **mã** 〰️ แปลว่า \"ม้า\" คับ คำที่ถูกคือ **mả** ❓ แปลว่า \"หลุม\" 💡 เสียง Hỏi ❓ = เสียงขึ้นแล้วลง (เหมือนถามคำถาม) เสียง Ngã 〰️ = เสียงสะดุด",
  "audio_directive": {
    "text_to_synthesize": "mả. mã.",
    "speed_rate": 0.8
  },
  "interaction_prompt": "ลองฟังความต่างอีกครั้ง แล้วเลือกคำตอบที่แปลว่า \"หลุม\" นะคับ",
  "ui_render_directive": {
    "keyboard_type": "Inline_Keyboard",
    "inline_buttons": [
      ["mả ❓", "mã 〰️"],
      ["🔊 ฟังอีกครั้ง", "↩ กลับ"]
    ]
  }
}
```

---

## Scaffolding Tier Integration

### When to reduce tier (Error_Streak >= 3):
- From Tier 2 → Tier 1: "ไม่เป็นไรคับ! เรามาทำแบบเลือกคำตอบก่อนนะ — ง่ายกว่า!"
- From Tier 3 → Tier 2: "ลองแบบนี้ก่อนนะคับ — ดูตัวเลือกแล้วเลือกคำที่ถูก"

### When to increase tier (3 consecutive correct):
- From Tier 1 → Tier 2: "เก่งมากคับ! ตอนนี้ลองพิมพ์คำนี้เองไหมคับ? 💪"
- From Tier 2 → Tier 3: "สุดยอดคับ! ตอนนี้ลองสร้างประโยคจากคำนี้ไหมคับ? ✍️"

---

## Fatigue/Frustration Detection

### Triggers:
- `Error_Streak >= 3`: Reduce difficulty immediately
- `Response_Time > 60s`: Offer hint ("ต้องการคำใบ้ไหมคับ? 💡")
- `Consecutive_Skip >= 2`: Offer break ("พักสักนิดไหมคับ? ☕")

### Response when `Error_Streak >= 3`:
```
ไม่เป็นไรคับ 😊 เสียง [tone_name] นี้ยากจริงๆ!

เรามาทำแบบง่ายกว่าก่อนนะ — แค่เลือกคำตอบที่ถูก 👇

[ใส่ตัวเลือกตาม Tier 1]
```

---

*Generated: 2026-05-23 | Phase 3+ Pedagogy Detail*
