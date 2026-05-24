// ================================================================
// HANOI SURVIVAL — Redesign v3.0 "Neon Night Market"
// Comprehensive transformation script
// ================================================================
const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

let count = 0;
function replace(oldStr, newStr, desc) {
  if (html.includes(oldStr)) {
    // Check for multiple occurrences
    const occurrences = html.split(oldStr).length - 1;
    if (occurrences > 1 && !desc.includes('ALL')) {
      console.log(`  ⚠️  "${desc}": ${occurrences} occurrences, only replacing first!`);
    }
    html = html.replace(oldStr, newStr);
    count++;
    console.log(`  ✅ ${desc}`);
  } else {
    console.log(`  ❌ NOT FOUND: ${desc}`);
  }
}

console.log('=== Redesign v3.0 — Neon Night Market ===\n');

// ================================================================
// 1. GOOGLE FONTS — Replace with Syne + DM Sans + JetBrains Mono
// ================================================================
replace(
  `<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Outfit:wght@500;600;800&family=Noto+Sans+Thai:wght@500;700&display=swap" rel="stylesheet">`,
  `<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=Noto+Sans+Thai:wght@400;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">`,
  'Font imports → Syne + DM Sans + JetBrains Mono'
);

// ================================================================
// 2. CSS :root — Replace with new color system
// ================================================================
replace(
  `    :root {\r\n      --font-game: 'Space Grotesk', 'Outfit', 'Noto Sans Thai', sans-serif;\r\n      --neon-gold: #fbbf24;\r\n      --neon-emerald: #10b981;\r\n      --neon-rose: #f43f5e;\r\n      --cyber-blue: #3b82f6;\r\n      --surface-base: #030712;\r\n    }`,
  `    :root {\r\n      /* Backgrounds */\r\n      --bg-deep:    #0a0a0f;\r\n      --bg-base:    #0f1117;\r\n      --bg-surface: #16191f;\r\n      --bg-raised:  #1c2028;\r\n\r\n      /* Brand — Vietnamese Red-Orange */\r\n      --brand:      #ff6b35;\r\n      --brand-dim:  rgba(255, 107, 53, 0.15);\r\n      --brand-glow: rgba(255, 107, 53, 0.25);\r\n\r\n      /* Legacy (for backward compatibility) */\r\n      --neon-emerald: #10b981;\r\n      --neon-gold: #fbbf24;\r\n      --neon-rose: #f43f5e;\r\n      --cyber-blue: #3b82f6;\r\n      --surface-base: #0a0a0f;\r\n\r\n      /* Semantic */\r\n      --correct:    #22c55e;\r\n      --wrong:      #ef4444;\r\n      --warn:       #f59e0b;\r\n\r\n      /* Text */\r\n      --text-primary:   #f0f0f0;\r\n      --text-secondary: #9ca3af;\r\n      --text-muted:     #4b5563;\r\n\r\n      /* Fonts */\r\n      --font-game: 'Syne', 'DM Sans', 'Noto Sans Thai', sans-serif;\r\n      --font-display: 'Syne', sans-serif;\r\n      --font-body: 'DM Sans', 'Noto Sans Thai', sans-serif;\r\n      --font-vn: 'JetBrains Mono', monospace;\r\n\r\n      /* Tone Colors */\r\n      --tone-1: #94a3b8;\r\n      --tone-2: #fb923c;\r\n      --tone-3: #f87171;\r\n      --tone-4: #fbbf24;\r\n      --tone-5: #c084fc;\r\n      --tone-6: #4ade80;\r\n    }`,
  'CSS :root → new color system'
);

// ================================================================
// 3. CSS — Add new classes before </style>
// ================================================================
const newCSS = `
    /* ════════════════════════════════════════════════════════════ */
    /* REDESIGN v3.0 — Neon Night Market Design System           */
    /* ════════════════════════════════════════════════════════════ */

    /* ── Body background ── */
    body { background-color: var(--bg-deep); }

    /* ── Mobile container ── */
    .mobile-container { background-color: var(--bg-base); }

    /* ── Screen header pattern ── */
    .screen-header {
      display: flex; align-items: center; gap: 0.75rem;
      margin-bottom: 1rem;
    }
    .screen-icon {
      width: 2.5rem; height: 2.5rem; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.125rem;
      background: var(--brand-dim);
      border: 1px solid rgba(255,107,53,0.2);
      flex-shrink: 0;
    }
    .screen-title {
      font-size: 1.125rem; font-weight: 700;
      font-family: var(--font-display);
      color: var(--text-primary);
    }
    .screen-subtitle {
      font-size: 0.7rem; color: var(--text-muted);
    }

    /* ── Button System (3 variants) ── */
    .btn-primary {
      width: 100%; padding: 0.875rem 1.5rem;
      background: var(--brand);
      color: white; border: none; border-radius: 12px;
      font-size: 0.9rem; font-weight: 600;
      font-family: var(--font-body);
      cursor: pointer; text-align: center;
      transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .btn-primary:hover {
      background: #ff7d4d;
      box-shadow: 0 8px 24px var(--brand-glow);
      transform: translateY(-1px);
    }
    .btn-primary:active { transform: scale(0.97); }

    .btn-ghost {
      padding: 0.75rem 1.25rem;
      background: var(--bg-raised);
      color: var(--text-secondary);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      font-size: 0.875rem; font-weight: 500;
      cursor: pointer; text-align: center;
      transition: all 0.2s;
    }
    .btn-ghost:hover {
      color: var(--text-primary);
      border-color: rgba(255,255,255,0.15);
    }

    .btn-choice {
      width: 100%; text-align: left;
      padding: 1rem 1.125rem;
      background: var(--bg-surface);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px;
      color: var(--text-primary);
      font-size: 0.875rem; font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-choice:hover {
      background: var(--bg-raised);
      border-color: var(--brand);
      padding-left: 1.5rem;
    }
    .btn-choice.correct {
      border-color: var(--correct) !important;
      background: rgba(34, 197, 94, 0.12) !important;
    }
    .btn-choice.wrong {
      border-color: var(--wrong) !important;
      background: rgba(239, 68, 68, 0.12) !important;
    }

    /* ── Card System (2 variants) ── */
    .card {
      background: var(--bg-surface);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 1.25rem;
    }
    .card-inner {
      background: var(--bg-raised);
      border: 1px solid rgba(255,255,255,0.04);
      border-radius: 12px;
      padding: 1rem;
    }

    /* ── Stats Strip ── */
    .stats-strip {
      display: flex; align-items: center;
      justify-content: space-around;
      padding: 1rem;
      background: var(--bg-surface);
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.06);
      margin-bottom: 1rem;
    }
    .stat-item {
      display: flex; flex-direction: column;
      align-items: center; gap: 2px;
    }
    .stat-value {
      font-size: 1.375rem; font-weight: 700;
      color: var(--brand);
      font-family: var(--font-display);
    }
    .stat-label {
      font-size: 0.65rem; color: var(--text-muted);
      font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .stat-divider {
      width: 1px; height: 2rem;
      background: rgba(255,255,255,0.06);
    }

    /* ── Tone Grid (Phonetics) ── */
    .tone-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
    .tone-card {
      background: var(--bg-surface);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 1rem 0.875rem;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex; flex-direction: column;
      gap: 0.25rem;
      position: relative; overflow: hidden;
    }
    .tone-card:hover, .tone-card:active {
      border-color: rgba(255,107,53,0.4);
      background: var(--bg-raised);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    }
    .tone-card.playing {
      border-color: var(--brand);
      box-shadow: 0 0 0 2px var(--brand-glow);
    }
    .tone-contour { height: 40px; margin-bottom: 0.25rem; }
    .tone-name { font-size: 0.875rem; font-weight: 700; font-family: var(--font-display); }
    .tone-example { font-size: 1.25rem; font-weight: 500; color: var(--text-primary); font-family: var(--font-vn); }
    .tone-meaning { font-size: 0.75rem; color: var(--text-secondary); }
    .tone-mark { font-size: 0.65rem; color: var(--text-muted); }
    .tone-compare {
      font-size: 0.65rem; color: var(--text-secondary);
      margin-top: 0.25rem; padding: 2px 6px;
      background: rgba(255,255,255,0.04);
      border-radius: 4px; display: inline-block;
    }
    .tone-play-btn {
      font-size: 0.65rem; color: var(--brand);
      background: var(--brand-dim);
      border: none; border-radius: 8px;
      padding: 4px 8px; cursor: pointer;
      margin-top: 0.5rem; font-weight: 600;
      align-self: flex-start;
    }

    /* ── Phonetic tab intro ── */
    .tab-intro {
      font-size: 0.8rem; color: var(--text-secondary);
      line-height: 1.6; margin-bottom: 0.75rem;
    }

    /* ── Vietnamese word display ── */
    .vn-word {
      font-family: var(--font-vn);
      font-size: 2rem; font-weight: 500;
      color: var(--text-primary); letter-spacing: 0.02em;
    }
    .vn-word-sm {
      font-family: var(--font-vn);
      font-size: 1.125rem; font-weight: 500;
      color: var(--text-primary);
    }

    /* ── HUD Header ── */
    .app-header {
      position: sticky; top: 0; z-index: 40;
      display: flex; align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      background: rgba(15, 17, 23, 0.85);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .hud-brand { display: flex; align-items: center; gap: 0.5rem; }
    .hud-logo { font-size: 1.25rem; }
    .hud-title {
      font-family: var(--font-display); font-size: 1rem;
      font-weight: 800; color: var(--brand);
      letter-spacing: 0.08em;
    }
    .hud-stats { display: flex; align-items: center; gap: 0.5rem; }
    .hud-stat {
      display: flex; align-items: center; gap: 0.3rem;
      padding: 0.3rem 0.75rem;
      background: var(--bg-surface);
      border-radius: 999px;
      font-size: 0.75rem; font-weight: 700;
      color: var(--warn);
      border: 1px solid rgba(245, 158, 11, 0.2);
    }
    .hud-vnd { color: #fbbf24; }
    .hud-vnd .hud-stat { border-color: rgba(251, 191, 36, 0.2); }

    /* ── Onboarding ── */
    #view-onboarding {
      min-height: 100dvh;
      background: radial-gradient(ellipse at 50% 0%, rgba(255,107,53,0.12) 0%, transparent 60%),
                  var(--bg-base);
      padding: 2rem 1.25rem;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
    #view-onboarding.active { display: flex; }
    .onboard-step {
      width: 100%; display: none;
      flex-direction: column; gap: 1.5rem;
      animation: fadeSlideUp 0.4s ease-out;
    }
    .onboard-step.active { display: flex; }
    .goal-card {
      padding: 1.25rem; border-radius: 16px;
      border: 2px solid rgba(255,255,255,0.06);
      background: var(--bg-surface);
      cursor: pointer;
      transition: all 0.2s;
      display: flex; align-items: center; gap: 1rem;
    }
    .goal-card:hover { border-color: rgba(255,107,53,0.4); }
    .goal-card.selected {
      border-color: var(--brand);
      background: var(--brand-dim);
      box-shadow: 0 0 20px var(--brand-glow);
    }
    .goal-card .goal-emoji { font-size: 2rem; }
    .goal-card .goal-text { flex: 1; }
    .goal-card .goal-title { font-size: 1rem; font-weight: 700; color: var(--text-primary); }
    .goal-card .goal-desc { font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.15rem; }
    .path-item {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 0.75rem; border-radius: 12px;
      background: var(--bg-surface);
    }

    /* ── Session time estimate ── */
    .session-time {
      display: inline-flex; align-items: center; gap: 0.25rem;
      font-size: 0.7rem; color: var(--text-muted);
      background: var(--bg-raised); padding: 3px 10px;
      border-radius: 999px; margin-top: 0.375rem;
    }

    /* ── Settings screen ── */
    .setting-label {
      font-size: 0.8rem; font-weight: 600;
      color: var(--text-secondary); margin-bottom: 0.5rem;
    }
    .setting-select {
      width: 100%; padding: 0.625rem 1rem;
      background: var(--bg-raised);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      color: var(--text-primary); font-size: 0.875rem;
      font-family: var(--font-body);
    }
    .setting-value {
      font-size: 0.875rem; color: var(--brand);
      font-weight: 600;
    }

    /* ── Week label on roadmap ── */
    .week-label {
      text-align: center; font-size: 0.65rem;
      font-weight: 700; color: var(--brand);
      text-transform: uppercase; letter-spacing: 0.1em;
      padding: 0.5rem 0;
      position: relative; z-index: 10;
    }

    /* ── Node map enhancements ── */
    .node-btn.active {
      background: var(--brand) !important;
      border-color: var(--brand) !important;
      color: white !important;
      box-shadow: 0 0 0 4px var(--brand-dim), 0 0 30px var(--brand-glow);
      width: 60px; height: 60px; font-size: 1.125rem;
    }

    /* ── Utility ── */
    .text-brand { color: var(--brand); }
    .text-correct { color: var(--correct); }
    .text-wrong { color: var(--wrong); }
    .text-warn { color: var(--warn); }
`;

replace(
  '    /* Accessibility: sr-only */\n    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }',
  newCSS + '\n    /* Accessibility: sr-only */\n    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }',
  'Added new design system CSS classes'
);

// ================================================================
// 4. HUD HEADER — Replace with branded sticky header
// ================================================================
const oldHud = `    <!-- ===== STICKY TOP HUD ===== -->
    <header class="p-3 bg-gray-950/80 border-b border-white/5 flex items-center justify-between backdrop-blur-md z-40 sticky top-0">
      <div class="flex items-center gap-2">
        <span class="text-lg">💰</span>
        <div>
          <div class="text-[0.5rem] text-gray-500 font-bold uppercase tracking-wider">งบเอาชีวิตรอด</div>
          <div class="text-amber-400 font-extrabold text-sm" id="hud-currency">100,000 VND</div>
        </div>
      </div>
      <div id="hud-loss-container" class="pointer-events-none"></div>
      <div class="flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-xl">
        <span class="text-xs">🔥</span>
        <span class="text-[0.65rem] font-bold text-amber-400" id="hud-streak">0 วัน</span>
      </div>
    </header>`;

const newHud = `    <!-- ===== STICKY TOP HUD (Redesigned) ===== -->
    <header class="app-header">
      <div class="hud-brand">
        <span class="hud-logo">🇻🇳</span>
        <span class="hud-title">HANOI</span>
      </div>
      <div id="hud-loss-container" class="pointer-events-none"></div>
      <div class="hud-stats">
        <div class="hud-stat hud-streak">
          <span>🔥</span>
          <span id="hud-streak">0</span>
        </div>
        <div class="hud-stat hud-vnd">
          <span>💰</span>
          <span id="hud-currency">100,000</span>
        </div>
      </div>
    </header>`;

replace(oldHud, newHud, 'HUD Header → branded sticky header');

// ================================================================
// 5. ROADMAP — Replace stats grid with stats strip, remove quick actions + TTS
// ================================================================
const oldRoadmapStats = `        <!-- Stats row -->
        <div class="grid grid-cols-3 gap-2 mb-4">
          <div class="bg-white/5 rounded-xl p-2.5 text-center">
            <div class="text-emerald-400 text-lg font-black" id="map-streak">0</div>
            <div class="text-[0.55rem] text-gray-500 font-bold uppercase">🔥 Streak</div>
          </div>
          <div class="bg-white/5 rounded-xl p-2.5 text-center">
            <div class="text-amber-400 text-lg font-black" id="map-words">0</div>
            <div class="text-[0.55rem] text-gray-500 font-bold uppercase">📖 คำศัพท์</div>
          </div>
          <div class="bg-white/5 rounded-xl p-2.5 text-center">
            <div class="text-cyan-400 text-lg font-black" id="map-accuracy">0%</div>
            <div class="text-[0.55rem] text-gray-500 font-bold uppercase">🎯 ความแม่น</div>
          </div>
        </div>`;

const newRoadmapStats = `        <!-- Stats strip -->
        <div class="stats-strip">
          <div class="stat-item">
            <span class="stat-value" id="map-streak">0</span>
            <span class="stat-label">🔥 Streak</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value" id="map-words">0</span>
            <span class="stat-label">📖 คำศัพท์</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-value" id="map-accuracy">0%</span>
            <span class="stat-label">🎯 แม่นยำ</span>
          </div>
        </div>`;

replace(oldRoadmapStats, newRoadmapStats, 'Roadmap stats → stats strip');

// Remove quick actions grid
const oldQuickActions = `        <!-- Quick actions -->
        <div class="grid grid-cols-3 gap-2 mt-3">
          <button class="btn-vn text-xs text-center" onclick="switchScreen('learn')">📖 เริ่มเรียนวันนี้</button>
          <button class="btn-vn text-xs text-center" onclick="switchScreen('flashcards')">🃏 Flashcard</button>
          <button class="btn-vn text-xs text-center" onclick="switchScreen('tones')">🎵 ฝึกวรรณยุกต์</button>
          <button class="btn-vn text-xs text-center" onclick="switchScreen('speaking')">🎤 ฝึกออกเสียง</button>
          <button class="btn-vn text-xs text-center" onclick="switchScreen('phonetics')">🔊 สัทศาสตร์</button>
          <button class="btn-vn text-xs text-center" onclick="switchScreen('shadowing')">🎭 Shadowing</button>
          <button class="btn-vn text-xs text-center" onclick="startWordBank()">🧩 ต่อประโยค</button>
        </div>`;

const newQuickActions = `        <!-- Hidden: quick actions removed in v3 (use bottom nav) -->`;

replace(oldQuickActions, newQuickActions, 'Roadmap quick actions → removed');

// Remove TTS settings card
const oldTTSCard = `        <!-- TTS settings -->
        <div class="rpg-card p-3 mt-3">
          <div class="text-[0.6rem] text-gray-500 font-bold uppercase tracking-wider mb-2">⚙️ ตั้งค่าเสียง</div>
          <div class="flex items-center gap-2">
            <select id="tts-engine" class="select select-bordered select-sm flex-1 bg-gray-900 border-gray-700 text-gray-300 text-xs" onchange="changeTTSEngine(this.value)">
              <option value="auto">เครื่องสังเคราะห์เสียงอัตโนมัติ</option>
              <option value="google">Google TTS (คุณภาพสูง)</option>
            </select>
            <button class="btn-vn text-xs" onclick="speak('Xin chào, tôi là người Việt Nam')">🔊 ทดสอบ</button>
          </div>
        </div>`;

replace(oldTTSCard, '<!-- TTS settings moved to Settings screen in v3 -->', 'Roadmap TTS settings → removed');

// ================================================================
// 6. ONBOARDING — Replace with 3-step version
// ================================================================
const oldOnboarding = `      <!-- ============================================================ -->
      <!-- SCREEN 1b: ONBOARDING WIZARD -->
      <!-- ============================================================ -->
      <div class="screen flex-col px-4 py-4 space-y-3" id="view-onboarding" style="display:none;">
        <!-- Step 1: Welcome -->
        <div id="onboarding-step-1" class="flex flex-col items-center text-center py-6 space-y-4">
          <div class="text-6xl mb-2">🇻🇳</div>
          <div class="text-2xl font-bold text-white">ฮานอย ซูไววอล</div>
          <div class="text-base text-emerald-400 font-semibold">ยินดีต้อนรับ! 🎉</div>
          <div class="text-xs text-gray-400 leading-relaxed px-4">
            แอปเรียนภาษาเวียดนามสำหรับคนไทยโดยเฉพาะ<br>
            เริ่มต้นจากศูนย์ สู่การเอาตัวรอดในเวียดนาม
          </div>
          <div class="flex flex-col w-full gap-2 px-4 mt-2">
            <div class="flex items-center gap-3 text-xs text-gray-300">
              <span class="text-emerald-400">📖</span> เรียนคำศัพท์ 28 วัน ครอบคลุมทุกสถานการณ์
            </div>
            <div class="flex items-center gap-3 text-xs text-gray-300">
              <span class="text-emerald-400">🔊</span> ฝึกออกเสียงด้วยระบบ Speech + วรรณยุกต์
            </div>
            <div class="flex items-center gap-3 text-xs text-gray-300">
              <span class="text-emerald-400">🎧</span> ฟังบทสนทนาจริง พร้อมแบบฝึกหัด
            </div>
            <div class="flex items-center gap-3 text-xs text-gray-300">
              <span class="text-emerald-400">🤖</span> AI Roleplay กับ Gemini ปรับตามคุณ
            </div>
          </div>
          <button class="btn-vn mt-4" onclick="onboardingNext(2)">
            เริ่มกันเลย! ➡️
          </button>
          <button class="text-xs text-gray-500 underline mt-2" onclick="skipOnboarding()">
            ข้าม (ไปเลย)
          </button>
        </div>

        <!-- Step 2: Assessment -->
        <div id="onboarding-step-2" class="flex-col space-y-3" style="display:none;">
          <div class="flex items-center gap-3 mb-1">
            <span class="text-2xl">📝</span>
            <div>
              <div class="text-base font-bold text-white">ทดสอบระดับภาษา</div>
              <div class="text-[0.6rem] text-gray-400">ตอบ 5 ข้อเพื่อประเมินระดับของคุณ</div>
            </div>
          </div>
          <div class="text-xs text-gray-500" id="onboarding-q-progress">ข้อที่ 1 / 5</div>
          <div id="onboarding-question-card" class="rpg-card p-4">
            <div class="text-sm font-semibold text-white mb-3" id="onboarding-question">Loading...</div>
            <div id="onboarding-options" class="flex flex-col gap-2"></div>
          </div>
          <div class="text-[0.6rem] text-gray-500 text-center" id="onboarding-level-hint"></div>
        </div>

        <!-- Step 3: Result -->
        <div id="onboarding-step-3" class="flex-col items-center text-center space-y-3" style="display:none;">
          <div id="onboarding-result-emoji" class="text-5xl">🎯</div>
          <div class="text-lg font-bold text-white" id="onboarding-result-title">ประเมินระดับของคุณ</div>
          <div class="rpg-card p-4 w-full">
            <div class="text-3xl font-bold text-emerald-400" id="onboarding-level-display">A0</div>
            <div class="text-xs text-gray-400 mt-1" id="onboarding-level-desc">มือใหม่เริ่มต้น</div>
            <div class="mt-3 text-xs text-gray-400 leading-relaxed" id="onboarding-level-detail">
              คุณยังไม่มีพื้นฐานภาษาเวียดนาม<br>
              ไม่ต้องห่วง! เราจะเริ่มจากศูนย์ไปด้วยกัน
            </div>
            <div class="mt-4 text-xs text-gray-500">
              คำศัพท์วันที่ 1-7 (Day 1-7) · ระดับพื้นฐาน
            </div>
          </div>
          <button class="btn-vn mt-2" onclick="finishOnboarding()">
            🚀 เริ่มเรียน!
          </button>
          <button class="text-xs text-gray-500 underline mt-1" onclick="skipOnboarding()">
            ข้าม (ใช้ระดับ A0)
          </button>
        </div>
      </div>`;

const newOnboarding = `      <!-- ============================================================ -->
      <!-- SCREEN 0b: ONBOARDING (3 Steps — Redesigned v3) -->
      <!-- ============================================================ -->
      <div class="screen" id="view-onboarding">
        <!-- Step 1: Welcome -->
        <div id="onboarding-step-1" class="onboard-step active">
          <div class="text-center">
            <div class="text-6xl mb-3">🇻🇳</div>
            <h1 class="text-2xl font-bold" style="font-family:var(--font-display); color:var(--brand);">HANOI SURVIVAL</h1>
            <p class="text-sm mt-1" style="color:var(--text-secondary);">เรียนภาษาเวียดนาม สำหรับคนไทย</p>
          </div>
          <div class="text-center" style="color:var(--text-secondary); font-size:0.85rem; line-height:1.7;">
            ไม่ต้องมีพื้นฐาน เราจะพาคุณจากศูนย์<br>
            ไปถึงสื่อสารธุรกิจได้ใน 4 สัปดาห์
          </div>
          <button class="btn-primary mt-4" onclick="onboardingNext(2)">
            เริ่มต้นเลย →
          </button>
        </div>

        <!-- Step 2: Goal Selection -->
        <div id="onboarding-step-2" class="onboard-step">
          <div class="text-center">
            <h2 class="screen-title">เป้าหมายของคุณคืออะไร?</h2>
            <p class="text-xs mt-1" style="color:var(--text-muted);">เลือกเป้าหมายการเรียนของคุณ</p>
          </div>
          <div class="goal-card" onclick="selectGoal('travel', this)">
            <span class="goal-emoji">🏖️</span>
            <div class="goal-text">
              <div class="goal-title">ท่องเที่ยว</div>
              <div class="goal-desc">สั่งอาหาร ต่อราคา ถามทาง</div>
            </div>
          </div>
          <div class="goal-card selected" onclick="selectGoal('business', this)" id="goal-business">
            <span class="goal-emoji">💼</span>
            <div class="goal-text">
              <div class="goal-title">ธุรกิจ / ราชการ</div>
              <div class="goal-desc">ประชุม เจรจา อีเมล</div>
            </div>
          </div>
          <div class="goal-card" onclick="selectGoal('conversation', this)">
            <span class="goal-emoji">🗣️</span>
            <div class="goal-text">
              <div class="goal-title">สนทนาทั่วไป</div>
              <div class="goal-desc">พูดคุยกับคนเวียดนาม</div>
            </div>
          </div>
          <button class="btn-primary" onclick="onboardingNext(3)">
            ถัดไป →
          </button>
        </div>

        <!-- Step 3: Path Preview -->
        <div id="onboarding-step-3" class="onboard-step">
          <div class="text-center">
            <h2 class="screen-title">เส้นทางของคุณ</h2>
          </div>
          <div class="space-y-2">
            <div class="path-item"><span>✅</span><span style="color:var(--text-primary); font-size:0.85rem;">Day 0 — เรียนระบบเสียง 6 วรรณยุกต์ก่อน</span></div>
            <div class="path-item"><span>📖</span><span style="color:var(--text-primary); font-size:0.85rem;">Week 1 — ทักทาย + แนะนำตัว (8-12 คำ/วัน)</span></div>
            <div class="path-item"><span>📖</span><span style="color:var(--text-primary); font-size:0.85rem;">Week 2 — ตัวเลข + ซื้อของ + ต่อราคา</span></div>
            <div class="path-item"><span>📖</span><span style="color:var(--text-primary); font-size:0.85rem;">Week 3 — อาหาร + สั่งเฝอ + กาแฟ</span></div>
            <div class="path-item"><span>📖</span><span style="color:var(--text-primary); font-size:0.85rem;">Week 4 — เดินทาง + ทิศทาง + เรียก taxi</span></div>
            <div class="path-item"><span>🏆</span><span style="color:var(--text-primary); font-size:0.85rem;">จบ — 250+ คำ, 6 quests สำเร็จ</span></div>
          </div>
          <div class="text-center text-xs" style="color:var(--text-muted);">
            ⏱ 5-10 นาที/วัน
          </div>
          <button class="btn-primary" onclick="finishOnboarding()">
            เริ่มเรียนเลย! 🚀
          </button>
        </div>
      </div>`;

replace(oldOnboarding, newOnboarding, 'Onboarding → 3-step redesigned');

// ================================================================
// 7. PHONETICS — Replace tone content with interactive cards
// ================================================================
// The tones tab content
const oldTonesTab = `          <div id="p-tones" class="phonetic-tab">\r\n            <div class="text-white text-xs font-bold mb-2">🎵 6 วรรณยุกต์ภาษาเวียดนาม</div>\r\n            <div class="space-y-1.5 text-xs text-gray-400 leading-relaxed">\r\n              <p><span class=\"text-slate-300 font-bold\">1. Ngang ➡️ (กลาง)</span> — ma (ผี) เสียงเรียบ</p>\r\n              <p><span class=\"text-orange-300 font-bold\">2. Huyền ↘️ (ต่ำ)</span> — mà (แต่) เสียงต่ำตก</p>\r\n              <p><span class=\"text-red-300 font-bold\">3. Sắc ↗️ (สูง)</span> — má (แก้ม) เสียงสูงขึ้น</p>\r\n              <p><span class=\"text-yellow-300 font-bold\">4. Hỏi ❓ (หัก)</span> — mả (ศพ) เสียงหัก</p>\r\n              <p><span class=\"text-purple-300 font-bold\">5. Ngã 〰️ (สะบัด)</span> — mã (ม้า) เสียงสะบัด</p>\r\n              <p><span class=\"text-green-300 font-bold\">6. Nặng ⬇️ (หนัก)</span> — mạ (ข้าวกล้า) เสียงหนัก</p>\r\n            </div>\r\n          </div>`;

const newTonesTab = `          <div id="p-tones" class="phonetic-tab">\r\n            <p class="tab-intro">\r\n              ภาษาเวียดนามมี 6 วรรณยุกต์ — แตกต่างจากไทย 5 เสียง\r\n              กดที่การ์ดเพื่อฟังเสียง และดูทิศทางของเสียง\r\n            </p>\r\n\r\n            <div class="tone-grid">\r\n              <!-- Card 1: Ngang -->\r\n              <div class="tone-card" onclick="playToneDemo('ma', 'ngang')">\r\n                <div class="tone-contour">\r\n                  <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:100%;">\r\n                    <line x1="5" y1="20" x2="55" y2="20" stroke="var(--tone-1)" stroke-width="2.5" stroke-linecap="round"/>\r\n                  </svg>\r\n                </div>\r\n                <div class="tone-name" style="color:var(--tone-1)">Ngang</div>\r\n                <div class="tone-example">ma</div>\r\n                <div class="tone-meaning">ผี</div>\r\n                <div class="tone-mark">ไม่มีเครื่องหมาย</div>\r\n                <div class="tone-compare">≈ เสียงสามัญไทย</div>\r\n                <button class="tone-play-btn">🔊 ฟัง</button>\r\n              </div>\r\n              <!-- Card 2: Huyền -->\r\n              <div class="tone-card" onclick="playToneDemo('mà', 'huyen')">\r\n                <div class="tone-contour">\r\n                  <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:100%;">\r\n                    <line x1="5" y1="10" x2="55" y2="35" stroke="var(--tone-2)" stroke-width="2.5" stroke-linecap="round"/>\r\n                  </svg>\r\n                </div>\r\n                <div class="tone-name" style="color:var(--tone-2)">Huyền</div>\r\n                <div class="tone-example">mà</div>\r\n                <div class="tone-meaning">แต่</div>\r\n                <div class="tone-mark">\` (grave accent)</div>\r\n                <div class="tone-compare">≈ เสียงเอกไทย</div>\r\n                <button class="tone-play-btn">🔊 ฟัง</button>\r\n              </div>\r\n              <!-- Card 3: Sắc -->\r\n              <div class="tone-card" onclick="playToneDemo('má', 'sac')">\r\n                <div class="tone-contour">\r\n                  <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:100%;">\r\n                    <line x1="5" y1="35" x2="55" y2="5" stroke="var(--tone-3)" stroke-width="2.5" stroke-linecap="round"/>\r\n                  </svg>\r\n                </div>\r\n                <div class="tone-name" style="color:var(--tone-3)">Sắc</div>\r\n                <div class="tone-example">má</div>\r\n                <div class="tone-meaning">แก้ม</div>\r\n                <div class="tone-mark">´ (acute accent)</div>\r\n                <div class="tone-compare">≈ เสียงจัตวาไทย</div>\r\n                <button class="tone-play-btn">🔊 ฟัง</button>\r\n              </div>\r\n              <!-- Card 4: Hỏi -->\r\n              <div class="tone-card" onclick="playToneDemo('mả', 'hoi')">\r\n                <div class="tone-contour">\r\n                  <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:100%;">\r\n                    <path d="M5,20 Q30,5 55,25" stroke="var(--tone-4)" stroke-width="2.5" fill="none" stroke-linecap="round"/>\r\n                  </svg>\r\n                </div>\r\n                <div class="tone-name" style="color:var(--tone-4)">Hỏi</div>\r\n                <div class="tone-example">mả</div>\r\n                <div class="tone-meaning">ศพ</div>\r\n                <div class="tone-mark">̉ (hook above)</div>\r\n                <div class="tone-compare">⚠️ ไม่มีในภาษาไทย</div>\r\n                <button class="tone-play-btn">🔊 ฟัง</button>\r\n              </div>\r\n              <!-- Card 5: Ngã -->\r\n              <div class="tone-card" onclick="playToneDemo('mã', 'nga')">\r\n                <div class="tone-contour">\r\n                  <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:100%;">\r\n                    <path d="M5,25 Q20,5 35,20 Q45,28 55,8" stroke="var(--tone-5)" stroke-width="2.5" fill="none" stroke-linecap="round"/>\r\n                  </svg>\r\n                </div>\r\n                <div class="tone-name" style="color:var(--tone-5)">Ngã</div>\r\n                <div class="tone-example">mã</div>\r\n                <div class="tone-meaning">ม้า</div>\r\n                <div class="tone-mark">~ (tilde)</div>\r\n                <div class="tone-compare">⚠️ ไม่มีในภาษาไทย</div>\r\n                <button class="tone-play-btn">🔊 ฟัง</button>\r\n              </div>\r\n              <!-- Card 6: Nặng -->\r\n              <div class="tone-card" onclick="playToneDemo('mạ', 'nang')">\r\n                <div class="tone-contour">\r\n                  <svg viewBox="0 0 60 40" fill="none" style="width:100%;height:100%;">\r\n                    <line x1="5" y1="10" x2="40" y2="35" stroke="var(--tone-6)" stroke-width="2.5" stroke-linecap="round"/>\r\n                    <circle cx="40" cy="35" r="3" fill="var(--tone-6)"/>\r\n                  </svg>\r\n                </div>\r\n                <div class="tone-name" style="color:var(--tone-6)">Nặng</div>\r\n                <div class="tone-example">mạ</div>\r\n                <div class="tone-meaning">ข้าวกล้า</div>\r\n                <div class="tone-mark">. (dot below)</div>\r\n                <div class="tone-compare">⚠️ ไม่มีในภาษาไทย</div>\r\n                <button class="tone-play-btn">🔊 ฟัง</button>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- CTA -->\r\n            <div class="mt-4 text-center">\r\n              <p class="text-xs mb-2" style="color:var(--text-secondary);">ฟังครบแล้ว? ทดสอบความเข้าใจก่อนเริ่มบทเรียน</p>\r\n              <button class="btn-primary" onclick="switchScreen('tones')">\r\n                🎵 ทดสอบวรรณยุกต์\r\n              </button>\r\n            </div>\r\n          </div>`;

replace(oldTonesTab, newTonesTab, 'Phonetics tones → interactive tone cards');

// ================================================================
// 8. LEARN SCREEN — Add time estimate after subtitle
// ================================================================
replace(
  `              <p class="text-gray-500 text-[0.6rem]" id="learn-day-subtitle">เริ่มต้นการเรียนรู้</p>\r\n            </div>`,
  `              <p class="text-gray-500 text-[0.6rem]" id="learn-day-subtitle">เริ่มต้นการเรียนรู้</p>\r\n              <div class="session-time">\r\n                <span>⏱</span>\r\n                <span id="learn-time-est">ประมาณ 8 นาที</span>\r\n              </div>\r\n            </div>`,
  'Learn screen — added time estimate badge'
);

// ================================================================
// 9. SETTINGS — Replace with new layout
// ================================================================
const oldSettings = `      <!-- ============================================================ -->
      <!-- SCREEN 6b: SETTINGS -->
      <!-- ============================================================ -->
      <div class="screen flex-col px-4 py-4 space-y-3" id="view-settings" style="display:none;">
        <div class="flex items-center gap-3 mb-1">
          <span class="text-2xl">⚙️</span>
          <div>
            <div class="text-base font-bold text-white">ตั้งค่า (Settings)</div>
            <div class="text-[0.6rem] text-gray-400">ปรับแต่งแอปตามต้องการ</div>
          </div>
        </div>
        
        <!-- TTS Speed -->
        <div class="rpg-card p-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">🔊</span>
            <div>
              <div class="text-sm font-semibold text-white">ความเร็วเสียง (TTS Speed)</div>
              <div class="text-[0.6rem] text-gray-400">ปรับความเร็วในการอ่านออกเสียง</div>
            </div>
          </div>
          <div class="mt-3 flex items-center gap-3">
            <span class="text-xs text-gray-400 w-8 text-right">🐢</span>
            <input type="range" id="tts-speed-slider" min="0.5" max="1.5" step="0.05" value="0.85" class="flex-1 accent-emerald-500" oninput="updateTTSSpeed(this.value)">
            <span class="text-xs text-gray-400 w-8">🐇</span>
          </div>
          <div class="text-center text-xs text-gray-500 mt-1">
            <span id="tts-speed-display">0.85</span>x
          </div>
        </div>
        
        <!-- Language Config -->
        <div class="rpg-card p-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">🌐</span>
            <div>
              <div class="text-sm font-semibold text-white">ภาษา (Language)</div>
              <div class="text-[0.6rem] text-gray-400">ภาษาในการแสดงผล</div>
            </div>
          </div>
          <div class="mt-3 flex gap-2">
            <button class="btn-vn text-xs flex-1 active" onclick="setAppLanguage('th')" id="lang-th-btn">🇹🇦 ไทย</button>
            <button class="btn-vn text-xs flex-1 !border-gray-600 !text-gray-400" onclick="setAppLanguage('en')" id="lang-en-btn">🇺🇸 English</button>
          </div>
        </div>
        
        <!-- API Status -->
        <div class="rpg-card p-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">🔌</span>
            <div>
              <div class="text-sm font-semibold text-white">สถานะเซิร์ฟเวอร์</div>
              <div class="text-[0.6rem] text-gray-400">เชื่อมต่อ API กับ Gemini AI</div>
            </div>
          </div>
          <div class="mt-2 flex items-center gap-2">
            <span id="api-status-dot" class="w-2 h-2 rounded-full bg-gray-500"></span>
            <span id="api-status-text" class="text-xs text-gray-400">กำลังตรวจสอบ...</span>
            <button class="ml-auto btn-vn text-xs !px-3 !py-1" onclick="checkAPIStatus()">🔄 ตรวจสอบ</button>
          </div>
        </div>
        
        <!-- Data Management -->
        <div class="rpg-card p-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">💾</span>
            <div>
              <div class="text-sm font-semibold text-white">จัดการข้อมูล</div>
              <div class="text-[0.6rem] text-gray-400">ข้อมูลการเรียนของคุณ</div>
            </div>
          </div>
          <div class="mt-2 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-400">จำนวนวันที่เรียนแล้ว</span>
              <span class="text-xs text-white font-bold" id="settings-days-count">0</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-400">คำศัพท์ที่เรียนแล้ว</span>
              <span class="text-xs text-white font-bold" id="settings-words-count">0</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-400">SRS Flashcard</span>
              <span class="text-xs text-white font-bold" id="settings-srs-count">0</span>
            </div>
          </div>
          <button class="btn-vn text-xs w-full mt-3 !border-red-800 !text-red-400 hover:!bg-red-900/20" onclick="confirmResetProgress()" id="reset-progress-btn">
            🗑️ รีเซ็ตข้อมูลทั้งหมด
          </button>
        </div>
        
        <!-- About -->
        <div class="rpg-card p-4">
          <div class="flex items-center gap-2">
            <span class="text-lg">ℹ️</span>
            <div>
              <div class="text-sm font-semibold text-white">เกี่ยวกับ</div>
              <div class="text-[0.6rem] text-gray-400">เวอร์ชัน 1.0 · ฮานอย ซูไววอล</div>
            </div>
          </div>
          <div class="mt-1 text-xs text-gray-500 leading-relaxed">
            แอปเรียนภาษาเวียดนามสำหรับคนไทย<br>
            ฟรีตลอดชีพ · ไม่มีโฆษณา · สร้างด้วย ❤️
          </div>
        </div>
      </div>`;

const newSettings = `      <!-- ============================================================ -->
      <!-- SCREEN: SETTINGS (Redesigned v3) -->
      <!-- ============================================================ -->
      <div class="screen flex-col px-4 py-4 space-y-3" id="view-settings" style="display:none;">
        <div class="screen-header">
          <span class="screen-icon">⚙️</span>
          <div>
            <div class="screen-title">ตั้งค่า</div>
            <p class="screen-subtitle">ปรับแต่งแอปตามต้องการ</p>
          </div>
        </div>

        <!-- TTS Engine -->
        <div class="card mb-3">
          <div class="setting-label">🔊 เครื่องสังเคราะห์เสียง</div>
          <select id="tts-engine" class="setting-select" onchange="changeTTSEngine(this.value)">
            <option value="auto">อัตโนมัติ (แนะนำ)</option>
            <option value="google">Google TTS (คุณภาพสูง)</option>
          </select>
          <div class="mt-2 flex items-center gap-3">
            <span class="text-xs" style="color:var(--text-muted)">🐢</span>
            <input type="range" id="tts-speed-slider" min="0.5" max="1.5" step="0.05" value="0.85" class="flex-1" style="accent-color:var(--brand);" oninput="updateTTSSpeed(this.value)">
            <span class="text-xs" style="color:var(--text-muted)">🐇</span>
          </div>
          <div class="text-center text-xs mt-1" style="color:var(--text-muted);">
            <span id="tts-speed-display">0.85</span>x
          </div>
          <button class="btn-ghost mt-2 text-sm" onclick="speak('Xin chào, tôi là người Việt Nam')">
            🔊 ทดสอบเสียง
          </button>
        </div>

        <!-- Goal -->
        <div class="card mb-3">
          <div class="setting-label">🎯 เป้าหมายการเรียน</div>
          <div id="current-goal" class="setting-value">ธุรกิจ / ราชการ</div>
          <button class="btn-ghost mt-2 text-sm" onclick="resetGoal()">
            เปลี่ยนเป้าหมาย
          </button>
        </div>

        <!-- Progress link -->
        <div class="card mb-3">
          <div class="setting-label">📊 ข้อมูลความคืบหน้า</div>
          <button class="btn-ghost text-sm" onclick="switchScreen('progress')">
            ดู Progress Dashboard
          </button>
        </div>

        <!-- API Status -->
        <div class="card mb-3">
          <div class="setting-label">🔌 สถานะเซิร์ฟเวอร์</div>
          <div class="flex items-center gap-2">
            <span id="api-status-dot" style="width:8px;height:8px;border-radius:50%;background:var(--text-muted);display:inline-block;"></span>
            <span id="api-status-text" class="text-xs" style="color:var(--text-secondary);">กำลังตรวจสอบ...</span>
            <button class="btn-ghost text-xs ml-auto" onclick="checkAPIStatus()">🔄 ตรวจสอบ</button>
          </div>
        </div>

        <!-- Data Management -->
        <div class="card">
          <div class="setting-label">💾 จัดการข้อมูล</div>
          <div class="flex flex-col gap-2 mt-1">
            <div class="flex justify-between text-xs" style="color:var(--text-muted);">
              <span>จำนวนวันที่เรียนแล้ว</span>
              <span style="color:var(--text-primary);font-weight:700;" id="settings-days-count">0</span>
            </div>
            <div class="flex justify-between text-xs" style="color:var(--text-muted);">
              <span>คำศัพท์ที่เรียนแล้ว</span>
              <span style="color:var(--text-primary);font-weight:700;" id="settings-words-count">0</span>
            </div>
            <div class="flex justify-between text-xs" style="color:var(--text-muted);">
              <span>SRS Flashcard</span>
              <span style="color:var(--text-primary);font-weight:700;" id="settings-srs-count">0</span>
            </div>
          </div>
          <button class="btn-ghost text-sm mt-3" style="border-color:rgba(239,68,68,0.3);color:var(--wrong);width:100%;" onclick="confirmResetProgress()">
            🗑️ รีเซ็ตทั้งหมด
          </button>
        </div>

        <!-- About -->
        <div class="card">
          <div class="setting-label">ℹ️ เกี่ยวกับ</div>
          <div class="text-xs" style="color:var(--text-muted);line-height:1.5;">
            เวอร์ชัน 1.0 · ฮานอย ซูไววอล<br>
            แอปเรียนภาษาเวียดนามสำหรับคนไทย<br>
            ฟรีตลอดชีพ · ไม่มีโฆษณา · สร้างด้วย ❤️
          </div>
        </div>
      </div>`;

replace(oldSettings, newSettings, 'Settings screen → redesigned layout');

// ================================================================
// 10. BOTTOM NAV — Replace with 5 tabs
// ================================================================
const oldBottomNav = `    <!-- ===== BOTTOM NAVIGATION ===== -->
    <footer class="bg-gray-950/90 border-t border-white/5 p-1.5 grid grid-cols-6 gap-0.5 z-40">
      <button class="bottom-nav-btn active" onclick="switchScreen('roadmap')">
        <span class="nav-icon">🗺️</span>แผนที่
      </button>
      <button class="bottom-nav-btn" onclick="switchScreen('learn')">
        <span class="nav-icon">📖</span>บทเรียน
      </button>
      <button class="bottom-nav-btn" onclick="switchScreen('flashcards')">
        <span class="nav-icon">🃏</span>ทบทวนศัพท์
      </button>
      <button class="bottom-nav-btn" onclick="switchScreen('listening')">
        <span class="nav-icon">🎧</span>ฝึกฟัง
      </button>
      
      <button class="bottom-nav-btn" onclick="switchScreen('shadowing')">
        <span class="nav-icon">🎭</span>พูดตาม
      </button>
      <button class="bottom-nav-btn" onclick="switchScreen('speaking')">
        <span class="nav-icon">🎤</span>ฝึกออกเสียง
      </button>
    </footer>`;

const newBottomNav = `    <!-- ===== BOTTOM NAVIGATION (Redesigned v3 — 5 tabs) ===== -->
    <footer class="bottom-nav">
      <button class="bottom-nav-btn active" onclick="switchScreen('roadmap')">
        <span class="nav-icon">🗺️</span>แผนที่
      </button>
      <button class="bottom-nav-btn" onclick="switchScreen('learn')">
        <span class="nav-icon">📖</span>เรียน
      </button>
      <button class="bottom-nav-btn" onclick="switchScreen('flashcards')">
        <span class="nav-icon">🃏</span>ทบทวน
      </button>
      <button class="bottom-nav-btn" onclick="switchScreen('speaking')">
        <span class="nav-icon">🎤</span>ออกเสียง
      </button>
      <button class="bottom-nav-btn" onclick="switchScreen('settings')">
        <span class="nav-icon">⚙️</span>ตั้งค่า
      </button>
    </footer>`;

replace(oldBottomNav, newBottomNav, 'Bottom nav → 5 tabs with Settings');

// ================================================================
// 11. Bottom Nav CSS — Add new bottom-nav styles
// ================================================================
// Add bottom-nav grid styling
replace(
  '.bottom-nav-btn.active {\r\n      background: rgba(16, 185, 129, 0.08);\r\n    }',
  '.bottom-nav {\r\n      display: grid;\r\n      grid-template-columns: repeat(5, 1fr);\r\n      padding: 0.5rem 0.25rem;\r\n      background: rgba(15, 17, 23, 0.92);\r\n      backdrop-filter: blur(16px);\r\n      border-top: 1px solid rgba(255,255,255,0.05);\r\n    }\r\n.bottom-nav-btn.active {\r\n      background: var(--brand-dim);\r\n    }',
  'Added .bottom-nav CSS grid styles'
);

// ================================================================
// 12. switchScreen() — Update navMap
// ================================================================
replace(
  'const navMap = { roadmap: 0, learn: 1, flashcards: 2, listening: 3, shadowing: 4, speaking: 5 };',
  'const navMap = { roadmap: 0, learn: 1, flashcards: 2, speaking: 3, settings: 4 };',
  'navMap → updated for 5-tab navigation'
);

// ================================================================
// 13. renderNodeMap() — Add week labels in JS
// ================================================================
replace(
  `for (let d = 1; d <= 28; d++) {\r\n        const info = dayData[d - 1] || { week: Math.ceil(d / 7), day: ((d - 1) % 7) + 1, title: 'วันที่ ' + d, grammar: '' \n        };`,
  `for (let d = 1; d <= 28; d++) {\r\n        // Add week label before days 1, 8, 15, 22\r\n        if (d === 1 || d === 8 || d === 15 || d === 22) {\r\n          html += '<div class=\"week-label\">สัปดาห์ที่ ' + Math.ceil(d/7) + '</div>';\r\n        }\r\n        const info = dayData[d - 1] || { week: Math.ceil(d / 7), day: ((d - 1) % 7) + 1, title: 'วันที่ ' + d, grammar: '' };`,
  'renderNodeMap() — added week labels'
);

// ================================================================
// 14. prevDay() / nextDay() — Add lock guards
// ================================================================
replace(
  `function nextDay() {\r\n      if (currentDay < 28) { currentDay++; renderDay(currentDay); }\r\n    }\r\n\r\n    function prevDay() {\r\n      if (currentDay > 1) { currentDay--; renderDay(currentDay); }\r\n    }`,
  `function nextDay() {\r\n      const maxAllowed = Math.min(28, (progress.completedDays ? progress.completedDays.length : 0) + 1);\r\n      if (currentDay < maxAllowed) {\r\n        currentDay++;\r\n        renderDay(currentDay);\r\n      } else {\r\n        showToast('✅ ทำแบบทดสอบวันนี้ก่อนเพื่อปลดล็อควันถัดไป', 'warning');\r\n      }\r\n    }\r\n\r\n    function prevDay() {\r\n      if (currentDay > 1) { currentDay--; renderDay(currentDay); }\r\n    }`,
  'nextDay() — added lock guard (cannot skip ahead of completed days)'
);

// ================================================================
// 15. startListening() — Add iOS fallback
// ================================================================
replace(
  `function startListening() {\r\n      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;`,
  `function startListening() {\r\n      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;\r\n      if (!SR) {\r\n        document.getElementById('speak-status-text').textContent = '\\u26a0\\ufe0f \\u0e40\\u0e1a\\u0e23\\u0e32\\u0e27\\u0e4c\\u0e40\\u0e0b\\u0e2d\\u0e23\\u0e4c\\u0e19\\u0e35\\u0e49\\u0e44\\u0e21\\u0e48\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a Speech Recognition';\r\n        const resultEl = document.getElementById('speak-result');\r\n        resultEl.classList.remove('hidden');\r\n        resultEl.className = 'speech-result';\r\n        resultEl.innerHTML = '<div style=\"text-align:center;padding:1rem;\"><div style=\"font-size:0.875rem;color:var(--text-secondary);margin-bottom:0.75rem;\">\\u0e41\\u0e1a\\u0e23\\u0e32\\u0e27\\u0e4c\\u0e40\\u0e0b\\u0e2d\\u0e23\\u0e4c\\u0e19\\u0e35\\u0e49\\u0e44\\u0e21\\u0e48\\u0e23\\u0e2d\\u0e07\\u0e23\\u0e31\\u0e1a\\u0e01\\u0e32\\u0e23\\u0e23\\u0e31\\u0e1a\\u0e23\\u0e39\\u0e49\\u0e40\\u0e2a\\u0e35\\u0e22\\u0e07<br><span style=\"font-size:0.75rem;\">\\u0e25\\u0e2d\\u0e07 Chrome \\u0e1a\\u0e19 Android \\u0e2b\\u0e23\\u0e37\\u0e2d Desktop \\u0e41\\u0e17\\u0e19</span></div><button class=\"btn-ghost\" onclick=\"nextSpeechWord()\">\\u0e02\\u0e49\\u0e32\\u0e21\\u0e44\\u0e1b\\u0e04\\u0e33\\u0e16\\u0e31\\u0e14\\u0e44\\u0e1b \\u2192</button></div>';\r\n        return;\r\n      }`,
  'startListening() — added iOS SpeechRecognition fallback'
);

// ================================================================
// 16. Add playToneDemo() function — Insert before toggleSpeechRecognition
// ================================================================
replace(
  'function toggleSpeechRecognition() {',
  `// ================================================================\r\n    // TONE DEMO PLAYER (for phonetics tone cards)\r\n    // ================================================================\r\n    function playToneDemo(word, toneName) {\r\n      // Find and highlight the clicked card\r\n      var cards = document.querySelectorAll('.tone-card');\r\n      cards.forEach(function(c) { c.classList.remove('playing'); });\r\n      var target = event.currentTarget;\r\n      target.classList.add('playing');\r\n      setTimeout(function() { target.classList.remove('playing'); }, 1500);\r\n      // Speak the word\r\n      speak(word, 0.7);\r\n    }\r\n\r\n    function toggleSpeechRecognition() {`,
  'playToneDemo() — added tone card player function'
);

// ================================================================
// 17. Add renderDay time estimate — Add to renderDay function
// ================================================================
// Find renderDay function and add time estimate calculation
replace(
  `function renderDay(dayNum) {\r\n      currentDay = dayNum;\r\n      const data = getDayInfo(dayNum);`,
  `function renderDay(dayNum) {\r\n      currentDay = dayNum;\r\n      const data = getDayInfo(dayNum);\r\n      // Update time estimate\r\n      const words = data && data.words ? data.words : [];\r\n      const estMinutes = Math.max(5, Math.round(words.length * 0.8 + 3));\r\n      const timeEl = document.getElementById('learn-time-est');\r\n      if (timeEl) timeEl.textContent = '\\u2248 ' + estMinutes + ' \\u0e19\\u0e32\\u0e17\\u0e35';`,
  'renderDay() — added dynamic time estimate'
);

// ================================================================
// 18. Add switchScreen handler for settings
// ================================================================
replace(
  `if (screenId === 'wordbank') { if (wbCurrentSentence) renderWordBank(); else startWordBank(); }`,
  `if (screenId === 'settings') {\r\n        const goalEl = document.getElementById('current-goal');\r\n        const goal = localStorage.getItem('vn_goal') || '\\u0e18\\u0e38\\u0e23\\u0e01\\u0e34\\u0e08 / \\u0e23\\u0e32\\u0e0a\\u0e01\\u0e32\\u0e23';\r\n        if (goalEl) goalEl.textContent = goal;\r\n        const ttsEl = document.getElementById('tts-engine');\r\n        if (ttsEl) ttsEl.value = ttsEngine;\r\n      }\r\n      if (screenId === 'wordbank') { if (wbCurrentSentence) renderWordBank(); else startWordBank(); }`,
  'switchScreen() — added settings handler (goal + TTS)'
);

// ================================================================
// 19. Add selectGoal + resetGoal JS functions
// ================================================================
replace(
  `// ================================================================\r\n    // DRAWER (Bottom Sheet)`,
  `// ================================================================\r\n    // ONBOARDING HELPERS (v3)\r\n    // ================================================================\r\n    function selectGoal(goal, el) {\r\n      document.querySelectorAll('.goal-card').forEach(function(c) { c.classList.remove('selected'); });\r\n      if (el) el.classList.add('selected');\r\n      localStorage.setItem('vn_goal', goal);\r\n    }\r\n    function resetGoal() {\r\n      localStorage.removeItem('vn_goal');\r\n      localStorage.removeItem('vn_onboarded');\r\n      showToast('\\u0e40\\u0e1b\\u0e25\\u0e35\\u0e48\\u0e22\\u0e19\\u0e40\\u0e1b\\u0e49\\u0e32\\u0e2b\\u0e21\\u0e32\\u0e22\\u0e40\\u0e23\\u0e35\\u0e22\\u0e19\\u0e23\\u0e2d\\u0e22 \\u0e01\\u0e23\\u0e38\\u0e13\\u0e32\\u0e17\\u0e33\\u0e2d\\u0e19\\u0e1a\\u0e2d\\u0e23\\u0e4c\\u0e14\\u0e34\\u0e49\\u0e07\\u0e43\\u0e2b\\u0e21\\u0e48', 'info');\r\n      setTimeout(function() { switchScreen('onboarding'); }, 800);\r\n    }\r\n    function onboardingNext(step) {\r\n      for (var i = 1; i <= 3; i++) {\r\n        var el = document.getElementById('onboarding-step-' + i);\r\n        if (el) el.classList.remove('active');\r\n      }\r\n      var next = document.getElementById('onboarding-step-' + step);\r\n      if (next) next.classList.add('active');\r\n    }\r\n    function finishOnboarding() {\r\n      if (!localStorage.getItem('vn_goal')) localStorage.setItem('vn_goal', 'business');\r\n      localStorage.setItem('vn_onboarded', 'true');\r\n      switchScreen('phonetics');\r\n    }\r\n\r\n    // ================================================================\r\n    // DRAWER (Bottom Sheet)`,
  'Added onboarding helper functions (selectGoal, resetGoal, onboardingNext, finishOnboarding)'
);

// ================================================================
// 20. Update finishOnboarding ref in JS (for first-visit detection)
// ================================================================
// The old finishOnboarding function had assessment logic. We need to keep the DOMContentLoaded
// check for vn_onboarded but update it to skip the old assessment.
// Let's find and update the loadState reference for first-visit detection.

replace(
  `  // Check onboarding status\n      if (!localStorage.getItem('vn_onboarded') && !localStorage.getItem('vn_progress')) {\n        console.log('First visit - showing onboarding');\n        switchScreen('onboarding');\n      } else {\n        loadState();\n      }`,
  `  // Check onboarding status (v3)\n      if (!localStorage.getItem('vn_onboarded') && !localStorage.getItem('vn_progress')) {\n        console.log('First visit - showing onboarding');\n        switchScreen('onboarding');\n      } else {\n        loadState();\n      }`,
  'DOMContentLoaded onboarding check — updated (v3)'
);

// ================================================================
// WRITE FILE
// ================================================================
fs.writeFileSync('index.html', html, 'utf8');
console.log(`\n=== DONE! ${count} replacements applied ===`);
