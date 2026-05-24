# Persona — Learn Vietnamese Bot

> Phase 2: Research
> Primary persona for bot design

---

## 👤 Primary Persona: K S

| Attribute | Value |
|-----------|-------|
| **Name** | K S |
| **Role** | UX/UI Designer |
| **Age** | 28–35 (estimated) |
| **Location** | Thailand |
| **Native language** | Thai |
| **English level** | Intermediate–Upper Intermediate (B1–B2) |
| **Vietnamese level** | **0 — Complete beginner** |
| **Goal** | Business communication in Vietnamese (trade/international commerce) |
| **Tech** | WSL, Telegram, AI agents daily |
| **Learning style** | Self-directed, practical, wants usable output fast |

### Motivations
- **Business need** — Works with Vietnamese clients/partners, needs to communicate professionally
- **Cultural interest** — Wants to understand Vietnamese business culture, not just words
- **Efficiency** — Wants maximum progress per minute spent
- **Practicality** — Wants phrases they can use immediately in real work

### Frustrations
- **No Thai→Vietnamese resources** — Everything is English→Vietnamese
- **Tones are confusing** — 6 tones, different from Thai tones
- **Generic content** — Most apps teach travel/tourist Vietnamese, not business
- **No feedback loop** — Apps don't know what you're struggling with
- **Time pressure** — Busy professional, can't spend hours studying

### Learning Preferences
| Preference | Detail |
|------------|--------|
| **Session length** | 5–15 min (commute, break, before bed) |
| **Content type** | Flashcards, conversation practice, phrase templates |
| **Feedback** | Immediate, specific, in Thai |
| **Progress** | Visible, gamified, streak-based |
| **Language** | Thai explanations, Vietnamese examples |
| **Device** | Phone (Telegram) primary |

### Vietnamese-Specific Challenges (Predicted)

| Challenge | Why | Bot Solution |
|-----------|-----|--------------|
| **6 tones** | Thai has 5 tones, Vietnamese has 6 — they don't map 1:1 | Dedicated tone training module with minimal pairs |
| **Latin script** | Vietnamese uses Latin alphabet with diacritics — looks familiar but isn't | Character-by-character reading practice |
| **Classifier words** | Vietnamese uses classifiers (cái, chiếc, con...) like Thai | Grammar lessons with Thai comparison |
| **Pronouns** | Vietnamese pronouns are complex (age/gender/relationship-based) | Business-appropriate pronoun cheat sheet |
| **Formal vs informal** | Business Vietnamese requires formal register | Business register lessons from Level 2 |

---

## 🎭 Secondary Persona (Future)

| Attribute | Value |
|-----------|-------|
| **Profile** | Thai business owner / sales manager |
| **Vietnamese level** | A1–A2 (some basics) |
| **Goal** | Negotiate deals, write emails, attend meetings |
| **Needs** | Business phrases, email templates, meeting vocabulary |

*Note: v1.0 focuses on Primary Persona (K S). Secondary persona for v2.0.*

---

## 📊 User Journey — High Level

```
Awareness → Onboarding → Level 0 → Level 1 → Level 2 → Level 3-4 → Mastery
   │            │           │          │          │           │          │
   │            │           │          │          │           │          │
   │         Assess      Tones     Survival   Business   Advanced   Real-world
   │         level       + script  convos     basics     business   usage
   │
   └── Discovers bot via recommendation / search
```

### Journey Phases

| Phase | User State | Bot Response |
|-------|-----------|--------------|
| **Awareness** | "I need to learn Vietnamese for work" | Clear value proposition: Thai→Vietnamese, business focus |
| **Onboarding** | First /start | Quick assessment (or skip), set level, explain features |
| **Level 0** | "I know nothing" | Tones, alphabet, pronunciation basics |
| **Level 1** | "I can say hello" | Survival conversations, basic vocabulary |
| **Level 2** | "I can chat simply" | Business basics, email templates, meeting vocab |
| **Level 3-4** | "I can do basic business" | Negotiation, presentations, formal register |
| **Mastery** | "I use Vietnamese at work" | Maintenance mode, advanced phrases, culture tips |

---

*Generated: 2026-05-23 | Phase 2: Research*
