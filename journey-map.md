# Journey Map — Learn Vietnamese Bot

> Phase 2: Research
> 5-phase user journey from discovery to mastery

---

## 🗺 Journey Overview

```
Discovery → Onboarding → Learning → Practice → Mastery
   │            │           │          │          │
   │            │           │          │          │
  Find bot    Set up     Lessons    Real use   Maintenance
  & start     level      & review   at work    & growth
```

---

## Phase 1: Discovery

| Aspect | Detail |
|--------|--------|
| **Trigger** | User needs Vietnamese for work, searches for learning tools |
| **Channel** | Recommendation, Telegram search, word of mouth |
| **First impression** | Bot description: "เรียนภาษาเวียดนามสำหรับธุรกิจ — อธิบายเป็นภาษาไทย" |
| **Action** | User sends /start |
| **Emotion** | Curious, hopeful, slightly anxious (new language) |

---

## Phase 2: Onboarding

| Step | User Action | Bot Response | Emotion |
|------|------------|--------------|---------|
| 1 | /start | Welcome + feature overview | Excited |
| 2 | "Get started" | "Do you know any Vietnamese?" | Honest |
| 3 | "No experience" | "Perfect! We'll start from sounds. Here's your path:" | Relieved |
| 4 | — | Show curriculum overview (L0→L4) | Motivated |
| 5 | "Let's begin!" | Start Level 0, Module 0.1 (Alphabet) | Ready |

**Key design decisions:**
- No complex assessment for Level 0 — everyone starts at sounds
- Show the full path upfront (L0→L4) so user sees the destination
- Skip option available but default is "start from zero"

---

## Phase 3: Learning (Levels 0–2)

### Level 0: Sound System
| Session | Content | Interaction | Duration |
|---------|---------|-------------|----------|
| 1 | Alphabet introduction | Read letters, tap to hear | 5 min |
| 2 | Vowels | Listen + repeat (text description) | 5 min |
| 3 | Consonants | Tricky pairs practice | 5 min |
| 4 | Tone introduction | 6 tones explained with Thai comparison | 10 min |
| 5 | Tone practice | MCQ: which tone is this? | 5 min |
| 6 | Reading practice | Read simple words with tones | 5 min |

### Level 1: Survival
| Session | Content | Interaction | Duration |
|---------|---------|-------------|----------|
| 1 | Greetings | Flashcards + conversation | 10 min |
| 2 | Self intro | Template fill-in | 10 min |
| 3 | Numbers | Number drills | 10 min |
| 4 | Food & ordering | Role-play with AI | 10 min |
| 5 | Shopping | Bargaining practice | 10 min |
| 6 | Review | SRS flashcard review | 5 min |

### Level 2: Business Basics
| Session | Content | Interaction | Duration |
|---------|---------|-------------|----------|
| 1 | Company intro | Template + vocabulary | 10 min |
| 2 | Job titles | Flashcards | 5 min |
| 3 | Meeting phrases | Conversation practice | 10 min |
| 4 | Email basics | Template library | 10 min |
| 5 | Write email | User writes, AI corrects | 15 min |
| 6 | Phone calls | Role-play | 10 min |

---

## Phase 4: Practice (Levels 3–4)

| Activity | Description | Frequency |
|----------|-------------|-----------|
| **Conversation AI** | Role-play business scenarios | Daily |
| **Email review** | User writes real email, AI reviews | As needed |
| **Phrase drilling** | Business phrase flashcards | Daily |
| **Tone maintenance** | Quick tone discrimination drills | 3x/week |
| **Cultural tips** | Vietnamese business etiquette | Weekly |

---

## Phase 5: Mastery (Ongoing)

| Activity | Description | Frequency |
|----------|-------------|-----------|
| **SRS review** | Maintain vocabulary | Daily (5 min) |
| **New phrases** | Advanced business phrases | Weekly |
| **Conversation** | Free conversation with AI | 2–3x/week |
| **Real-world use** | Use Vietnamese at work | Ongoing |
| **Progress check** | Bot suggests areas to improve | Monthly |

---

## 📊 Journey Metrics

| Phase | Duration | Milestones |
|-------|----------|------------|
| Onboarding | Day 1 | Level set, first lesson complete |
| Level 0 | Week 1–2 | Can read Vietnamese, knows 6 tones |
| Level 1 | Week 3–6 | Can have basic conversations |
| Level 2 | Week 7–12 | Can handle basic business situations |
| Level 3-4 | Week 13–20 | Can negotiate, present, write formal emails |
| Mastery | Week 20+ | Ongoing maintenance + real-world use |

---

## 🔄 Loop: Daily Learning Cycle

```
Morning: SRS review (5 min)
  ↓
Commute: New lesson or phrase drill (10 min)
  ↓
Lunch: Conversation practice (10 min)
  ↓
Evening: Review + progress check (5 min)
  ↓
Next day: Bot adjusts based on yesterday's performance
```

---

*Generated: 2026-05-23 | Phase 2: Research*
