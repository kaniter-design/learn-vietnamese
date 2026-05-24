# Curriculum Research + Feasibility

> Phase 2: Research
> Vietnamese curriculum structure, content sources, and feasibility assessment

---

## 📚 Vietnamese Curriculum Structure (Proposed)

### Level 0: Sound System (ระบบเสียง)
**Goal:** Read, pronounce, and distinguish all Vietnamese sounds.

| Module | Content | Est. Words |
|--------|---------|------------|
| 0.1 Alphabet | 29 letters (12 vowels, 17 consonants), diacritics | — |
| 0.2 Vowels | Simple vowels (a, ă, â, e, ê, i, o, ô, ơ, u, ư, y) | — |
| 0.3 Consonants | Initial + final consonants, tricky pairs (tr/ch, s/x, d/gi) | — |
| 0.4 Tones | 6 tones: ngang, huyền, sắc, hỏi, ngã, nặng | — |
| 0.5 Tone practice | Minimal pairs, tone discrimination drills | 50 words |
| 0.6 Reading | Read simple words with correct tones | 30 words |

---

### Level 1: Survival Vietnamese (สนทนาเพื่อชีวิต)
**Goal:** Handle basic daily conversations.

| Module | Content | Est. Words |
|--------|---------|------------|
| 1.1 Greetings | Xin chào, cảm ơn, xin lỏi, tạm biệt + responses | 15 |
| 1.2 Self intro | Name, nationality, job (Thai→Vietnamese) | 20 |
| 1.3 Numbers | 1–100, thousands, millions | — |
| 1.4 Money & prices | How much?, negotiating prices | 15 |
| 1.5 Time & date | Days, months, time of day | 25 |
| 1.6 Directions | Left, right, near, far, addresses | 15 |
| 1.7 Food & drink | Ordering, common dishes | 30 |
| 1.8 Transport | Taxi, bus, motorbike, directions | 20 |
| 1.9 Shopping | Bargaining, sizes, colors | 20 |
| 1.10 Emergency | Help, hospital, police | 15 |
| | **Level 1 Total** | **~175 words** |

---

### Level 2: Business Basics (ธุรกิจเบื้องต้น)
**Goal:** Communicate in basic business settings.

| Module | Content | Est. Words |
|--------|---------|------------|
| 2.1 Company intro | Company name, industry, size, location | 25 |
| 2.2 Job titles | Manager, director, employee, partner | 20 |
| 2.3 Meeting basics | Scheduling, agenda, opinions | 25 |
| 2.4 Phone calls | Business phone phrases | 20 |
| 2.5 Email basics | Subject lines, greetings, closings | — |
| 2.6 Business email templates | Inquiry, follow-up, confirmation | 10 templates |
| 2.7 Numbers in business | Prices, quantities, percentages | 15 |
| 2.8 Dates & deadlines | Delivery dates, payment terms | 15 |
| 2.9 Making appointments | Propose, confirm, cancel, reschedule | 20 |
| 2.10 Small talk | Weather, travel, food (business context) | 20 |
| | **Level 2 Total** | **~170 words + 10 templates** |

---

### Level 3: Intermediate Business (ธุรกิจระดับกลาง)
**Goal:** Handle business negotiations and presentations.

| Module | Content | Est. Words |
|--------|---------|------------|
| 3.1 Negotiation | Proposing, counter-offering, agreeing | 30 |
| 3.2 Products & services | Describing, comparing, pricing | 30 |
| 3.3 Contracts & terms | Basic contract vocabulary | 25 |
| 3.4 Presentations | Opening, explaining, closing | 20 |
| 3.5 Complaints & solutions | Problem description, resolution | 20 |
| 3.6 Banking & Payment | L/C, T/T, payment terms | 20 |
| 3.7 Shipping & Logistics | FOB, CIF, delivery, customs | 25 |
| 3.8 Cultural notes | Vietnamese business etiquette | — |
| | **Level 3 Total** | **~170 words** |

---

### Level 4: Advanced Business (ธุรกิจระดับสูง)
**Goal:** Professional-level business communication.

| Module | Content | Est. Words |
|--------|---------|------------|
| 4.1 Complex negotiation | Multi-party, conditional agreements | 30 |
| 4.2 Trade shows | Booth, catalog, samples, orders | 25 |
| 4.3 Formal reports | Business report structure | 20 |
| 4.4 Advanced email | Formal register, nuanced tone | 15 templates |
| 4.5 Vietnamese law basics | Company registration, tax, IP | 20 |
| 4.6 Relationship building | Guanxi, face, gift-giving culture | — |
| | **Level 4 Total** | **~110 words + 15 templates** |

---

## 📊 Content Estimates

| Metric | Value |
|--------|-------|
| Total vocabulary (L0–L4) | ~650 words |
| Business phrase templates | 25+ |
| Grammar points | ~40 |
| Tone pairs | 15 minimal pair sets |
| Conversation scenarios | 20+ |
| **Total content items** | **~750+** |

---

## 🔧 Content Sources

| Source | Use | Status |
|--------|-----|--------|
| **Human-curated JSON** | Core vocabulary, phrases, grammar | Bot creator writes + AI assists |
| **AI-generated examples** | Extra example sentences per word | OpenCode Go API |
| **User contributions** | Words user adds from real work | User input + AI explanation |
| **Thai comparison notes** | Grammar parallels/differences | Bot creator + AI |

### Data Files (Proposed)
```
data/
├── curriculum.json       # All levels, modules, lessons
├── vocabulary.json       # Words: VI, TH, EN, tone, part-of-speech, examples
├── phrases.json          # Business phrase templates with blanks
├── grammar.json          # Grammar points with TH explanations
├── scenarios.json        # Conversation scenarios per level
└── tones.json            # Minimal pairs, tone rules
```

---

## ✅ Feasibility Assessment

### Technical Feasibility

| Component | Complexity | Risk | Notes |
|-----------|------------|------|-------|
| Telegram bot skeleton | Low | Low | Same as English bot |
| Curriculum browser | Medium | Low | Level/module/lesson navigation |
| Flashcards + SRS | Low | Low | Same as English bot, add tone field |
| Tone practice (MCQ) | Medium | Low | Audio playback + choice selection |
| Conversation AI | Medium | Medium | Needs good prompt engineering |
| Business phrases library | Low | Low | Static JSON, easy |
| Adaptive mastery tracking | High | Medium | Custom logic beyond SRS |
| Progress dashboard | Low | Low | Same pattern as English bot |

### Vietnamese-Specific Feasibility

| Challenge | Solution | Risk |
|-----------|----------|------|
| Vietnamese text rendering | UTF-8, Telegram handles it natively | Low |
| Vietnamese audio | Use TTS API (e.g., gTTS, Edge TTS — free) or record | Medium |
| Tone accuracy in content | Human-reviewed tone marks in JSON | Low |
| Thai speaker tone confusion | Dedicated tone comparison module (TH vs VI tones) | Low |

### Budget Feasibility

| Item | Cost |
|------|------|
| OpenCode Go subscription | $10/mo |
| Audio TTS (gTTS/Edge TTS) | Free |
| Server (WSL, own hardware) | $0 |
| **Total** | **$10/mo** ✅ |

### Timeline Feasibility

| Milestone | Estimate |
|-----------|----------|
| P1–P4 (Discovery → UI Design) | 2–3 sessions |
| P5 v0.1 (Level 0–1 + basics) | 3–5 hours coding |
| P5 v0.2 (Level 2 + conversation) | 3–5 hours |
| P5 v0.3 (Level 3–4) | 3–5 hours |
| P6 (Iterate + adaptive) | 2–4 hours |
| **Total coding** | **12–20 hours** |

---

## ⚠️ Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Vietnamese content quality | Medium | | Human review for all vocabulary before P5 |
| Tone teaching effectiveness | Medium | | Use minimal pairs, audio, Thai comparison |
| AI conversation too advanced for beginners | Medium | | Prompt engineering: limit vocabulary per level |
| User expects voice/speaking practice | Low | Medium | Phase 2 feature. Phase 1: text-only |
| Scope creep (too many levels) | Medium | | Strict phased delivery. L0–L2 = v1.0 |

---

*Generated: 2026-05-23 | Phase 2: Research*
