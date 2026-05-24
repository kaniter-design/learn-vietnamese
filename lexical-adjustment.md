# Lexical Adjustment Strategy — Thai to Vietnamese Transition

> Phase 3+: Pedagogy Detail
> Gradually replace Thai instructional language with Vietnamese as user progresses

---

## Principle

Start with Thai as the primary instruction language. As the user progresses, gradually introduce Vietnamese directives. By Level 2+, users should understand simple Vietnamese instructions without Thai translation.

---

## Phase-by-Phase Transition

### Level 0 (Week 1-2): 100% Thai
All instructions, explanations, and feedback in Thai.

```
Bot: "คำว่า **xin chào** แปลว่า สวัสดี คับ"
Bot: "เลือกคำตอบที่ถูกนะคับ"
Bot: "ถูกต้อง! 👏"
```

**Vietnamese introduced:** None (except target vocabulary)

### Level 1 (Week 3-4): 90% Thai, 10% Vietnamese
Introduce simple Vietnamese directives with Thai translation.

| Vietnamese | Thai | When to Use |
|------------|------|-------------|
| Đúng rồi! | ถูกต้องแล้ว! | Correct answer (from Week 3) |
| Sai rồi | ผิดแล้ว | Wrong answer (from Week 3) |
| Nghe lại nhé | ฟังอีกครับ | Listen again (from Week 3) |
| Đọc theo nhé | อ่านตามนะคับ | Read along (from Week 4) |
| Thử lại nhé | ลองใหม่นะคับ | Try again (from Week 4) |

**Pattern:** Say Vietnamese FIRST, then Thai translation in parentheses.
```
Bot: "Đúng rồi! (ถูกต้องแล้ว!) 👏"
Bot: "Nghe lại nhé (ฟังอีกครับ) 👂"
```

### Level 2 (Week 5-8): 60% Thai, 40% Vietnamese
Vietnamese directives without Thai translation. Thai only for complex explanations.

```
Bot: "Đúng rồi! 👏 ต่อไป — เลือกคำที่แปลว่า 'แม่'"
Bot: "Sai rồi 😅 ลองฟังอีกครั้งนะ — **mà** ↘️ กับ **má** ↗️"
Bot: "Đọc theo nhé: 'Xin chào, tôi là...'"
```

**New Vietnamese directives (no Thai translation):**
| Vietnamese | Meaning |
|------------|---------|
| Tiếp tục | Continue |
| Chọn đáp án | Select answer |
| Điền vào chỗ trống | Fill in the blank |
| Phát âm lại | Repeat pronunciation |
| Viết lại | Write again |

### Level 3 (Week 9+): 30% Thai, 70% Vietnamese
Thai only for grammar explanations and complex instructions.

```
Bot: "Hôm nay chúng ta học về động tứ (คำกริยา). Trong tiếng Việt, động từ không biến đổi theo thì คับ"
Bot: "Đúng! 'Ăn' nghĩa là 'กิน' — giống như tiếng Thái คับ"
```

---

## Vietnamese Directive Vocabulary

### Simple (Level 1)
| Vietnamese | Thai | Emoji |
|------------|------|-------|
| Đúng rồi | ถูกต้อง | ✅ |
| Sai rồi | ผิด | ❌ |
| Nghe lại | ฟังอีก | 👂 |
| Đọc theo | อ่านตาม | 📖 |
| Thử lại | ลองใหม่ | 🔄 |
| Tiếp tục | ต่อไป | ▶️ |

### Intermediate (Level 2)
| Vietnamese | Thai |
|------------|------|
| Chọn đáp án | เลือกคำตอบ |
| Điền từ | ใส่คำ |
| Phát âm | ออกเสียง |
| Viết lại | เขียนใหม่ |
| Đọc to | อ่านเสียงดัง |

### Advanced (Level 3)
| Vietnamese | Thai |
|------------|------|
| Hãy giải thích | อธิบายหน่อย |
| So sánh | เปรียบเทีบ |
| Tóm tắt | สรุป |
| Dịch sang tiếng Việt | แปลเป็นเวียดนาม |
| Sử dụng trong câu | ใช้ในประโยค |

---

## JSON Output Example with Lexical Adjustment

### Level 1 (Early):
```json
{
  "feedback_layer": "Đúng rồi! (ถูกต้องแล้ว!) ✅",
  "interaction_prompt": "Chọn đáp án tiếp theo nhé (เลือกคำตอบต่อไปนะคับ)"
}
```

### Level 2 (Mid):
```json
{
  "feedback_layer": "Đúng rồi! ✅",
  "interaction_prompt": "Tiếp theo — điền từ vào chỗ trống"
}
```

### Level 3 (Advanced):
```json
{
  "feedback_layer": "Đúng! Hãy sử dụng từ này trong câu nhé",
  "interaction_prompt": "Viết một câu bằng tiếng Việt với từ 'đắt'"
}
```

---

## Special Rules

1. **Error corrections** always include the target word with tone emoji
2. **New vocabulary** always introduced with Thai translation first
3. **Instructions** transition Thai→Vietnamese based on user level
4. **Feedback** (correct/wrong) transitions fastest — simple words like Đúng/Sai
5. **Grammar explanations** stay in Thai until Level 3

---

*Generated: 2026-05-23 | Phase 3+ Pedagogy Detail*
