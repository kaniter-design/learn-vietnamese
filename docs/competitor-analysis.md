# Competitor Analysis — Learn Vietnamese Web App

> Phase 2: Research
> Scope: Vietnamese language learning apps + web tools
> Date: 2026-05-24

---

## 📊 Market Landscape

| App | Price | Platform | Strengths | Weaknesses |
|-----|-------|----------|-----------|------------|
| **Duolingo** | Free / $13 mo | iOS, Android, Web | Gamified, streaks, huge user base, Vietnamese course (EN→VI) | English-only bridge language, no Thai, no business focus, no tones practice |
| **Drops** | Free / $10 mo | iOS, Android | Beautiful visuals, 5-min sessions, mnemonics, Southern dialect | No grammar, no conversation, vocabulary-only, no Thai |
| **Ling** | $17/mo | iOS, Android, Web | All-round (read/write/speak/listen), chatbot, grammar tips | Expensive, English-only bridge, no business focus |
| **Mondly** | $10/mo | iOS, Android, Web | Conversation practice, AR lessons, real-life scenarios | Generic, no Thai, limited Vietnamese depth |
| **LingoDeer** | $13/mo | iOS, Android | Grammar lessons, native audio, structured curriculum | 10 languages only, English bridge, no business focus |
| **VietnamesePod101** | $8–30/mo | iOS, Android, Web | Audio lessons, culture notes, leveled curriculum | No gamification, no bot, passive learning, no Thai |
| **Pimsleur Vietnamese** | $15–20 mo | iOS, Audio | Audio-focused, speaking practice | Expensive, no reading/writing, no Thai |

---

## 🔍 Gap Analysis — What Nobody Does

| Gap | Opportunity |
|-----|-------------|
| **Thai → Vietnamese** | Every app uses English as bridge. Zero apps serve Thai speakers learning Vietnamese. |
| **Business Vietnamese** | No app targets business/trade communication specifically. Generic conversation only. |
| **Copy-paste phrase library** | No app gives ready-to-use business email/meeting phrases you can paste directly. |
| **Adaptive mastery tracking** | All use basic SRS. None track "can use in real conversation" vs "recognizes on flashcard". |
| **Zero-Cost LLM Roleplay** | Traditional apps rely on static choices or expensive APIs. Zero apps run generative roleplays completely free via Gemini Free Tier. |
| **Vietnamese tones focus** | Tones are the #1 pain point. No app has dedicated tone-training with visual contour feedback. |
| **Thai speaker pain points** | Thai and Vietnamese share some structural similarities (tonal, analytic). No app leverages this. |

---

## 🎯 Our Positioning

**"Thai-speaking business professional's Vietnamese tutor — from zero to deal-closing."**

| Differentiator | How |
|----------------|-----|
| **Thai bridge language** | All explanations, grammar, feedback in Thai |
| **Business-first curriculum** | Survival → Business basics → Advanced business (not generic travel) |
| **Copy-paste phrase library** | Ready-to-use emails, meeting phrases, negotiation scripts |
| **Tone mastery system** | Dedicated 6-tone training comparing pitch contours with Thai/Chinese |
| **Adaptive learning** | Backend logs errors and adjusts roleplay/SRS dynamically |
| **Local-first Web App** | Run locally on WSL, zero cloud subscription fees, privacy-focused |
| **$0/month (Free)** | Fully runs on Gemini Free Tier API + SQLite + browser TTS/STT |

---

## 📈 Vietnamese Language Learning Market

### Key Facts
- **90M+ native speakers** — Vietnam's official language
- **Growing economy** — Vietnam is ASEAN's fastest-growing major economy
- **Thai-Vietnamese trade** — Bilateral trade ~$20B/year, growing
- **ASEAN proximity** — Vietnam is Thailand's neighbor, increasing business ties
- **Language difficulty** — Category IV for English speakers (same as Chinese, Japanese, Arabic)
- **For Thai speakers** — Easier than for English speakers (shared tonal system, analytic grammar) but tones are different (6 vs 5)
- **For Chinese learners** — Shared SVO word order, similar Sino-Vietnamese vocabulary (Hán Việt), and tonal concepts accelerate learning.

### Learner Pain Points (from reviews + forums)
1. **Tones are terrifying** — 6 tones, completely change meaning
2. **Nobody explains in Thai** — All resources are English→Vietnamese
3. **Business Vietnamese is niche** — Hard to find quality business content
4. **Speaking practice** — Hard to find conversation partners
5. **Tones ≠ Thai tones** — Thai speakers assume tones transfer, but they don't map 1:1

---

## 🏆 Competitive Advantage Matrix

| Feature | Duolingo | Drops | Ling | Mondly | **Our Web App** |
|---------|----------|-------|------|--------|-------------|
| Thai bridge | ❌ | ❌ | ❌ | ❌ | ✅ |
| Business focus | ❌ | ❌ | ❌ | ❌ | ✅ |
| Copy-paste phrases | ❌ | ❌ | ❌ | ❌ | ✅ |
| Tone training | ⚠️ Basic | ❌ | ⚠️ Basic | ❌ | ✅ Dedicated |
| Conversation AI | ❌ | ❌ | ⚠️ Basic | ⚠️ Basic | ✅ Adaptive (Gemini) |
| Adaptive difficulty | ❌ | ❌ | ❌ | ❌ | ✅ Mastery-based |
| Responsive Web UI | ✅ | ❌ | ✅ | ✅ | ✅ |
| Price | Free–$13/mo | Free–$10/mo | $17/mo | $10/mo | **$0/mo (Free)** |

---

## 🚨 Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Duolingo adds Thai→Vietnamese | Medium | High | Move fast, build business focus they won't |
| Gemini Free Tier rate limits (15 RPM) | Low | Medium | Cache static curriculum data locally, use AI only for dynamic roleplays & quiz explanations |
| Curriculum content quality | Low | High | Human-reviewed content in JSON, AI supplements only |
| Browser compatibility with Speech API | Low | Medium | Fall back gracefully to Google Translate TTS and simple text quizzes if browser lacks voice recognition |

---

## 💡 Opportunities

1. **ASEAN expansion** — Web app can add Thai↔Lao, Thai↔Khmer, Thai↔Burmese later
2. **Corporate clients** — Thai government sectors or companies doing business in Vietnam need employee training
3. **Tourism / Trade** — Survival Vietnamese is valuable for cross-border public liaisons and trade
4. **Partner with Vietnamese tutors** — Future: connect AI practice with real human tutors

---

*Generated: 2026-05-24 | Phase 2: Research*
