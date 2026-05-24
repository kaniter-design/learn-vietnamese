# K S UX/UI Design Workflow — For External AI

> **ถ้า AI ตัวไหนอ่านไฟล์นี้ ให้ทำตาม workflow นี้ = ผลงานจะได้มาตรฐานเดียวกับคุณ (K S)**
> 
> เขียนโดย Hermes Agent (OWL) สำหรับ K S — UX/UI Designer ที่ใช้ AI หลายตัวทำงาน
> 
> **สำคัญ:** ไฟล์นี้ออกแบบมาให้ copy-paste ไปใส่ ChatGPT / Claude / AGY / อะไรก็ได้ แล้วได้ผลลัพธ์ตรงมาตรฐาน

---

## 🚦 ก่อนเริ่มทุกอย่าง — อ่านนี้ก่อน

### คุณคือใคร
- **ตำแหน่ง:** UX/UI Designer (ไม่เขียน code เอง — สั่ง AI ทำแทน)
- **สไตล์:** ทำงานผ่าน AI agent ที่อ่าน spec แล้วส่ง URL ให้ review
- **เป้าหมาย:** ได้ design ที่ดี + prototype ที่ใช้งานได้ + handoff ให้ dev ได้เลย

### กฎทอง 5 ข้อ (ห้ามละเมิด)

| # | กฎ | ความหมาย |
|---|-----|----------|
| 1 | **ไม่มั่ว** | ถ้าไม่รู้ บอกว่าไม่รู้ อย่าเดา อย่าทำข้อมูลปลอม |
| 2 | **ไม่รู้ → ถาม** | ถ้า context ไม่พอ ถาม user ก่อน อย่าเดาเอง |
| 3 | **Plan ก่อนทำ** | งานใหญ่ → แสดงแผนก่อน ให้ user approve แล้วค่อยทำ |
| 4 | **Verify ก่อน claim** | อย่าบอว่า "เสร็จแล้ว" ถ้ายังไม่ได้ตรวจจริง |
| 5 | **User อยู่ใน loop** | ทุก phase ต้อง user approve ก่อนข้าม phase ต่อไป |

---

## 📋 7-Phase Workflow

### Phase 1: Discovery (ค้นหาปัญหา + กำหนด scope)

**สิ่งที่ต้องทำ:**
1. คุยกับ user เก็บ requirement → จดเป็น `raw-notes.md`
2. เจาะ scope → `scope-checklist.md`
3. สรุปเป็น `project-brief.md` (structured)
4. แชร์ moodboard ถ้ามี

**ต้องมีก่อนข้าม P2:**
- [ ] `project-brief.md` — มี goals, constraints, target user
- [ ] `scope-checklist.md` — ระบุสิ่งที่ทำ/ไม่ทำ
- [ ] **User approve brief** ← สำคัญมาก

**ตัวอย่าง prompt สำหรับ AI:**
```
ผมมี idea สำหรับ [app/website] ที่ [อธิบายสั้นๆ]
กลุ่มเป้าหมาย: [ใคร]
ปัญหาที่จะแก้: [อะไร]
Constraint: [budget/timeline/tech — ถ้ามี]

ช่วยทำ:
1. raw-notes.md — สรุปสิ่งที่ผมบอก
2. scope-checklist.md — ระบุ in-scope / out-of-scope
3. project-brief.md — structured brief (goals, user, constraints, success metrics)

ถ้ายังข้อมูลไม่พอ ถามผมก่อน อย่าเดา
```

---

### Phase 2: Research + Strategy (วิจัย + วางกลยุทธ์)

**สิ่งที่ต้องทำ:**
1. วิเคราะห์คู่แข่ง → `competitor-analysis.md`
2. สร้าง Persona + Journey Map → `personas.md`, `journey-map.md`
3. Market positioning → `positioning-statement.md`
4. Technical feasibility → `feasibility-checklist.md`

**ต้องมีก่อนข้าม P3:**
- [ ] `competitor-analysis.md`
- [ ] `personas.md` + `journey-map.md`
- [ ] `positioning-statement.md`
- [ ] `feasibility-checklist.md`

**ตัวอย่าง prompt:**
```
จาก project-brief.md นี้ [แนบ/วาง content]
ช่วยทำ:
1. competitor-analysis.md — วิเคราะห์คู่แข่ง 3 ตัว เปรียบเทียบ features/pricing/positioning
2. personas.md — สร้าง 2-3 persona พร้อม goals, pain points, behavior
3. journey-map.md — user journey จากรู้จัก → ใช้งาน → กลับมาใช้ซ้ำ
4. positioning-statement.md — 1 ประโยชน์บอกว่าแตกต่างยังไง
5. feasibility-checklist.md — เช็คว่า idea นี้ทำได้จริงไหม (tech, budget, timeline)

ถ้าข้อมูลไม่พอสำหรับส่วนไหน บอกผม
```

---

### Phase 3: UX Design (ออกแบบ flow + โครงสร้าง)

**สิ่งที่ต้องทำ:**
1. User flow → `user-flow.md`
2. Information architecture → `ia-map.md`
3. HTML wireframe → `wireframe.html`
4. Review wireframe → `wireframe-feedback.md`

**ต้องมีก่อนข้าม P4:**
- [ ] `user-flow.md`
- [ ] `ia-map.md`
- [ ] `wireframe.html` (HTML ที่เปิดใน browser ได้)
- [ ] `wireframe-feedback.md`

**ตัวอย่าง prompt:**
```
จาก research นี้ [แนบ brief + personas + journey]
ช่วยทำ:
1. user-flow.md — flow diagram จากหน้าแรก → หน้าสุดท้ายของแต่ละ use case หลัก
2. ia-map.md — information architecture (site map / screen map)
3. wireframe.html — HTML wireframe ของทุกหน้าสำคัญ (mobile-first, ใช้ DaisyUI หรือ Tailwind)
4. wireframe-feedback.md — ผมเป็น AI reviewer: จุดไหน flow ติด, จุดไหนขาด, จุดไหนเกิน

wireframe.html ต้องเปิดใน browser ได้จริง (self-contained HTML)
```

---

### Phase 4: UI Design (ออกแบบรายละเอียด)

**สิ่งที่ต้องทำ:**
1. Design tokens → `design-tokens.css`
2. Component library → `component-library.md`
3. UI review → `ui-review-notes.md`
4. Accessibility audit → `accessibility-audit.md`
5. Responsive plan → `responsive-plan.md`

**ต้องมีก่อนข้าม P5:**
- [ ] `design-tokens.css` — color, typography, spacing, shadow
- [ ] `component-library.md` — ทุก component ที่ใช้ (button, card, modal, form, nav)
- [ ] `ui-review-notes.md`
- [ ] `accessibility-audit.md` — WCAG AA minimum
- [ ] `responsive-plan.md`
- [ ] **User approve design** ← สำคัญมาก

**ตัวอย่าง prompt:**
```
จาก wireframe.html + project brief นี้ [แนบ]
ช่วยทำ:
1. design-tokens.css — CSS custom properties สำหรับ: color palette, font scale, spacing scale, border-radius, shadow
2. component-library.md — อธิบายทุก component ที่ใช้ พร้อม states (default, hover, active, disabled, error)
3. accessibility-audit.md — เช็ค contrast ratio, touch target size, heading hierarchy, form labels, focus states
4. responsive-plan.md — แต่ละ component/หน้า เปลี่ยนยังไงตาม breakpoint (320/375/768/1024/1280px)

Design system ที่ใช้: [DaisyUI / Tailwind / custom — ระบุ]
ภาษา: [Thai / English / bilingual]
```

---

### Phase 5: Prototype (สร้างตัวอย่างที่ใช้งานได้)

**สิ่งที่ต้องทำ:**
1. HTML skeleton → `index.html`
2. Components
3. JS interaction
4. Responsive layout
5. CSS animations

**ต้องมีก่อนข้าม P6:**
- [ ] `index.html` ที่เปิดได้จริงใน browser
- [ ] ทุกหน้าสำคัญครบ
- [ ] Interaction ที่สำคัญทำงาน (form submit, modal, nav toggle)
- [ ] Responsive ที่ 375px, 768px, 1280px

**ตัวอย่าง prompt:**
```
จาก design-tokens.css + component-library.md + wireframe.html นี้ [แนบ]
ช่วยสร้าง prototype เป็น HTML ที่:
- Self-contained (ทุกอย่างใน 1 ไฟล์ หรือ ไฟล์เดียว + CSS ภายใน)
- ใช้ [DaisyUI + Tailwind CDN / custom CSS — ระบุ]
- Responsive mobile-first
- ทุกหน้าสำคัญครบตาม IA
- Interaction หลักทำงาน (JS ใน <script> tag)

เริ่มจาก skeleton ก่อน แล้วค่อยเพิ่ง component ทีละส่วน
ทุกขั้นตอน แสดงสิ่งที่ทำแล้ว ให้ผมดูก่อนต่อ
```

---

### Phase 6: Iterate + Refine (แก้ไข + ปรับปรุง)

**สิ่งที่ต้องทำ:**
1. แก้ตาม feedback
2. AI review
3. UX suggestions
4. เพิ่ม component ที่ขาด
5. แก้ bug
6. QA สุดท้าย

**ต้องมีก่อนข้าม P7:**
- [ ] `qa-checklist.md` — ทุกข้อ pass
- [ ] Bug list ว่าง (ไม่มี bug ค้าง)
- [ ] **User approve final** ← สำคัญมาก

**ตัวอย่าง prompt:**
```
นี่คือ prototype ปัจจุบัน [แนบ/ส่ง URL]
Feedback จาก user: [ระบุ]

ช่วย:
1. แก้ไขตาม feedback ทุกข้อ
2. QA checklist — เช็ค: responsive (320/375/768/1280px), contrast, touch target, form validation, no console errors
3. แก้ bug ที่เจอ

ทุกขั้นตอน แสดงสิ่งที่เปลี่ยน ให้ผมดูก่อน commit
```

---

### Phase 7: Dev Handoff (ส่งมอบให้ dev)

**สิ่งที่ต้องทำ:**
1. Design spec → `design-spec.md`
2. Design system doc → `design-tokens.md`
3. Interaction notes → `interaction-notes.md`
4. Annotate HTML → `index.html` (with comments)
5. ตอบคำถาม dev

**Done when:**
- [ ] Design spec ครบ
- [ ] Repo pushed to GitHub
- [ ] URL deployed + เปิดได้จริง
- [ ] No console errors

**ตัวอย่าง prompt:**
```
จาก prototype สุดท้ายนี้ [แนบ]
ช่วยทำ handoff package:
1. design-spec.md — full spec: colors, fonts, spacing, breakpoints, component behavior
2. design-tokens.md — design tokens ทั้งหมพพร้อมใช้ (CSS variables หรือ SCSS)
3. interaction-notes.md — อธิบาย interaction ทุกจุด (hover, click, transition, animation)
4. Annotate HTML — เพิ่ม comments ใน index.html อธิบายทุก section/component

Format: อ่านง่าย ที่ dev สามารถ clone repo แล้วเข้าใจได้เลย
```

---

## 🎨 Design Standards (สำคัญมาก — อย่าข้าม)

### Thai Typography Rules

| Rule | ถูก | ผิด |
|------|-----|------|
| Line-height | 1.7+ (Thai ต้องการพื้นที่สระบน-ล่าง) | 1.5 (น้อยไป) |
| Letter-spacing | 0 (ไทยไม่มี space ระหว่างคำ) | -0.02em (ห้าม!) |
| Word-break | `word-break: normal` | `break-all` (ตัดคำผิด) |
| Font weight body | 400 (OK) | ไม่ต้องเพิ่มเป็น 500 |
| Font pairing | ฟอนต์ไทย + ฟอนต์อังกฤษแยก | ฟอนต์ไทยที่มี Latin (สู้ฟอนต์อังกฤษแท้ไม่ได้) |
| Mobile height | `min-h-[100dvh]` | `h-screen` (layout jump) |

### Responsive Rules

| Rule | ถูก | ผิด |
|------|-----|------|
| Grid | `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3` | `grid-cols-3` (ไม่มี breakpoint) |
| Overflow | `overflow-x-auto` บน container | ไม่มี overflow handling |
| Touch target | min 44x44px | เล็กกว่า 32px |
| Body scroll (mobile) | `overflow: visible` บน mobile | `overflow: hidden` ทำให้เลื่อนไม่ได้ |

### Accessibility (WCAG AA Minimum)

- Contrast ratio: **4.5:1** (body text), **3:1** (large text)
- Touch target: **min 44x44px**
- Heading hierarchy: h1 → h2 → h3 (ข้ามห้าม)
- Form: ทุก input ต้องมี label
- Focus states: visible ทุก interactive element
- Color ไม่ใช่สิ่งเดียวที่สื่อความหมาย (เพิ่ม icon/text)

---

## 🔧 Technical Stack (Default)

| Layer | Tool |
|-------|------|
| HTML/CSS framework | DaisyUI + Tailwind CSS (CDN สำหรับ prototype) |
| Icons | Heroicons / Lucide (SVG) |
| Fonts | Google Fonts (Thai + Latin แยก) |
| JS | Vanilla JS (ใน `<script>` tag) |
| Prototype hosting | GitHub Pages / Cloudflare Pages |
| Repo | GitHub (`kaniter-design/xxx`) |

---

## 📁 File Structure (Expected Output)

```
project/
├── project-brief.md
├── scope-checklist.md
├── competitor-analysis.md
├── personas.md
├── journey-map.md
├── positioning-statement.md
├── feasibility-checklist.md
├── user-flow.md
├── ia-map.md
├── wireframe.html
├── wireframe-feedback.md
├── design-tokens.css
├── component-library.md
├── ui-review-notes.md
├── accessibility-audit.md
├── responsive-plan.md
├── index.html          ← prototype หลัก
├── design-spec.md
├── design-tokens.md
├── interaction-notes.md
└── qa-checklist.md
```

---

## 🚫 Anti-Patterns (ห้ามทำ)

1. **ห้ามข้าม phase** — ทำ P1 ให้เสร็จ → user approve → ค่อย P2
2. **ห้ามเดา** — ถ้าไม่รู้ ถาม อย่าทำข้อมูลปลอม
3. **ห้าม claim done โดยไม่ verify** — ต้องเปิด URL จริง เช็คจริง
4. **ห้าม over-specify design** — ให้ model ออกแบบเอง บอกแค่ vibe + constraints
5. **ห้ามใช้ design ที่ AI ทำเองโดยไม่ review** — ต้องมี human review ทุก phase
6. **ห้ามละ responsive** — mobile-first เสมอ เช็ค 320px ด้วย
7. **ห้ามละ accessibility** — WCAG AA เป็น minimum ไม่ใช่ nice-to-have

---

## 💡 Tips สำหรับ AI ที่อ่านไฟล์นี้

1. **ทุก phase ต้องมี artifact** (ไฟล์/URL) ก่อนข้าม phase ต่อไป
2. **ถ้า user ไม่ให้ข้อมูลพอ → ถาม** อย่าเดา
3. **แสดงแผนก่อนทำ** โดยเฉพาะงานใหญ่
4. **ทำทีละขั้น** อย่าทำทุกอย่างพร้อมกันแล้วส่งทีเดียว
5. **เขียนไฟล์ที่อ่านง่าย** ทั้งสำหรับ user และ dev
6. **ภาษาอังกฤศเสมอ** ใน output (ยกเว้น user ขอ Thai)
7. **Design decisions → อธิบายเหตุผล** อย่าแค่บอกว่า "ใช้สีนี้" แต่บอกว่า "ทำไม"

---

*สร้างโดย Hermes Agent (OWL) สำหหรับ K S — 2026-05-23*
*อัปเดตล่าสุด: workflow-router skill + 7-phase workflow + design standards*
