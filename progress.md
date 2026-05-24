# Progress — Learn Vietnamese Website

> ไฟล์นี้ใช้ resume การทำงานใน session ถัดไป
> อัปเดตล่าสุด: 2026-05-24 | ✅ Website Prototype Phase

---

## 📊 สถานะปัจจุบัน

| Phase | สถานะ | เอกสาร |
|-------|--------|--------|
| **P1: Discovery** | ✅ Complete | `project-brief.md`, `scope-checklist.md` |
| **P2: Research** | ✅ Complete | `competitor-analysis.md`, `personas.md`, `curriculum-research.md`, `positioning-statement.md`, `journey-map.md` |
| **P3: UX Design** | ✅ Complete | `user-flow.md`, `ia-map.md`, `wireframe.html`, `wireframe-feedback.md` |
| **Requirements** | ✅ Consolidated | `product-requirements.md`, `curriculum-4week.md` |
| **P4: UI Design** | ✅ Complete | `design-tokens.css`, `component-library.md`, `accessibility-audit.md`, `responsive-plan.md` |
| **P5: Prototype** | ✅ Complete | `index.html` + `data.js` — full website prototype |
| **P6: Iterate** | 🔄 อยู่ระหว่างทำ | ดูรายละเอียดด้านล่าง |
| **P7: Handoff** | ⏳ | ยังไม่ได้เริ่ม |

---

## 🔑 Tech Stack (Confirmed) — Website

| Layer | Choice |
|-------|--------|
| **Frontend** | Vanilla HTML + CSS (no framework) + CDN DaisyUI |
| **Backend** | **TBD — None yet (static only)** |
| **Database** | **TBD — None yet (no persistence)** |
| **TTS** | edge-tts (vi-VN-HoaiNeural) — not integrated yet |
| **AI Model** | `opencode-go/deepseek-v4-flash` |
| **Language pair** | Thai ↔ Vietnamese |

---

## 📁 โครงสร้าง Project

```
learn_vietnamese/
├── index.html                # Main website (1868 lines) — all screens
├── data.js                   # Curriculum data + quests + helpers
├── design-tokens.css         # Design tokens (P4)
├── wireframe.html            # Wireframe (P3)
├── progress.md               # ← ไฟล์นี้
├── MASTER-SYSTEM-PROMPT.md   # Master reference
├── *.md                      # Design docs (P1-P4, content)
├── k-s-workflow-for-ai.md    # AI workflow guide
```

---

## ✅ Built Features (Website Prototype)

| Feature | สถานะ | รายละเอียด |
|---------|--------|------------|
| Dashboard + 4-week path | ✅ Done | screen-dashboard, week dots, day navigation |
| Word cards (vocab) | ✅ Done | 270+ words, all 4 weeks in data.js |
| Quiz engine | ✅ Done | Multiple choice from current day's vocab |
| Spelling drill | ✅ Done | Listen → type, tone validation |
| Tone practice | ✅ Done | All 6 tones w/ minimal pairs + sound chart |
| Quest system (Text-RPG) | ✅ Done | 6 quests: Airport, Grab Bike, 7-Eleven, Market, Phở, Taxi. HP/currency mechanic, humor spikes |
| Progress screen | ✅ Done | screen-progress (basic) |
| Grammar reference | ✅ Done | screen-grammar |
| Data: full curriculum | ✅ Done | 4 weeks, 28 days, ~270 words + IPA + tones + tips |

---

## ⏳ Remaining (Priority Order)

### P1 — Core Polish (quick wins)
- [ ] **LocalStorage save** — progress หายเมื่อรีเฟรช ต้อง save day completion, quiz scores
- [ ] **Edge TTS audio** — ปุ่ม 🔊 บน word card, ใช้ media playback API

### P2 — Content Expansion
- [ ] **Week 3-4 spelling** — ระบบสะกดคำตอนนี้ใช้แค่ Week 1-2 vocab
- [ ] **Week 3-4 quest scenarios** — quests มีแค่ 6 อัน ครอบคลุมแค่บางวัน
- [ ] **Quest day mapping** — quest ถูก trigger อัตโนมัติตามวัน (ตอนนี้มีปุ่มแมนนวล)

### P3 — Features
- [ ] **SRS (Spaced Repetition)** — ระบบทวนคำระยะยาว แบบ Leitner/SM-2
- [ ] **Business phrases library** — แยกหน้า business-phrases.md content
- [ ] **Smart Fail Protocol** — feedback เมื่อตอบผิดซ้ำ
- [ ] **AI conversation practice** — บทสนทนากับ AI (ต้องมี backend)

### P4 — Quality
- [ ] **Responsive polish** — mobile test, ปรับ layout จุดที่พัง
- [ ] **Accessibility** — ตรวจ WCAG gaps จาก accessibility-audit.md
- [ ] **Deploy** — ขึ้น Cloudflare Pages หรือ Netlify

---

## 📝 Session Resume Guide

เมื่อเปิด session ใหม่:
1. อ่าน `progress.md` นี้ก่อน
2. อ่าน `MASTER-SYSTEM-PROMPT.md` — master reference
3. อ่าน `product-requirements.md` — requirements
4. อ่าน `curriculum-4week.md` — เนื้อหา
5. Recap: **✅ Website prototype เสร็จ (P5). อยู่ระหว่าง P6 Iterate — ลำดับถัดไปคือ LocalStorage + Audio**

---

## 🎯 Recommended Next Session (เลือกได้)

1. **LocalStorage persistence** — บันทึก progress, day completion, quiz score
2. **Edge TTS audio** — ปุ่ม 🔊 เปิดเสียงอ่านคำศัพท์
3. **Week 3-4 quiz/spelling** — ขยาย quiz engine ไปถึง data week 3-4

---

*Updated: 2026-05-24 | Status: P5 Prototype ✅ → P6 Iterate 🔄*
