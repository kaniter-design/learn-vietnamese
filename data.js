// ================================================================
// LEARN VIETNAMESE — Curriculum Data
// 270+ words from 4-week plan
// ================================================================

const CURRICULUM = {
  weeks: [
    // ================================================================
    // WEEK 1: Greetings + Sound System (~80 words)
    // ================================================================
    {
      id: 1,
      title: 'ทักทาย + ระบบเสียง',
      days: [
        // Day 1: Basic greetings (8 words)
        {
          id: 1,
          title: 'ทักทายพื้นฐาน',
          words: [
            { word: 'xin chào', ipa: '/ʃin tʃao/', tones: '➡️↗️', meaning: 'สวัสดี', emoji: '👋', tips: 'xin chào = สินเชา — ยิ้มพร้อมทักทาย' },
            { word: 'cảm ơn', ipa: '/kam əːn/', tones: '❓↗️', meaning: 'ขอบคุณ', emoji: '🙏', tips: 'Cảm ❓ = รู้สึก, ơn ↗️ = คุณ' },
            { word: 'xin lỗi', ipa: '/ʃin loj/', tones: '➡️❓', meaning: 'ขอโทษ', emoji: '😔', tips: 'คำขอโทษสุภาพ' },
            { word: 'tạm biệt', ipa: '/tam biət/', tones: '⬇️⬇️', meaning: 'ลาก่อน', emoji: '👋', tips: 'tạm ⬇️ = ชั่วคราว, biệt ⬇️ = จาก' },
            { word: 'vâng', ipa: '/vəŋ/', tones: '➡️', meaning: 'ครับ/ค่ะ (ใช่)', emoji: '✅', tips: 'ตอบรับสุภาพ' },
            { word: 'không', ipa: '/xəːŋ/', tones: '➡️', meaning: 'ไม่', emoji: '❌', tips: 'คำปฏิเสธพื้นฐาน' },
            { word: 'có', ipa: '/kɔ/', tones: '↗️', meaning: 'มี/ใช่', emoji: '✅', tips: 'Có ↗️ = have yes' },
            { word: 'ạ', ipa: '/a/', tones: '❓', meaning: 'ครับ/ค่ะ (สุภาพ)', emoji: '🙇', tips: 'เติมท้ายประโยคเพื่อความสุภาพ' }
          ]
        },
        // Day 2: Self-introduction (12 words)
        {
          id: 2,
          title: 'แนะนำตัว',
          words: [
            { word: 'tôi', ipa: '/toj/', tones: '➡️', meaning: 'ผม/ฉัน', emoji: '🙋', tips: 'ใช้ได้ทั้งชายหญิง' },
            { word: 'bạn', ipa: '/baːn/', tones: '↘️', meaning: 'คุณ/เธอ', emoji: '👤', tips: 'bạn ↘️ = เพื่อน/คุณ' },
            { word: 'tên', ipa: '/tɛn/', tones: '➡️', meaning: 'ชื่อ', emoji: '📝', tips: 'Tôi tên là... = ฉันชื่อ...' },
            { word: 'là', ipa: '/la/', tones: '↘️', meaning: 'เป็น/คือ', emoji: '🔗', tips: 'là ↘️ = is/am/are' },
            { word: 'quốc tịch', ipa: '/kwok tɨk/', tones: '↗️⬇️', meaning: 'สัญชาติ', emoji: '🌍', tips: 'พูดสัญชาติตามหลัง' },
            { word: 'Thái', ipa: '/tʰaj/', tones: '↗️', meaning: 'ไทย', emoji: '🇹🇭', tips: 'คนไทย = người Thái' },
            { word: 'người', ipa: '/ŋɨːj/', tones: '➡️', meaning: 'คน', emoji: '👥', tips: 'người ➡️ = คน/บุคคล' },
            { word: 'nghề nghiệp', ipa: '/ŋɨː niəp/', tones: '➡️⬇️', meaning: 'อาชีพ', emoji: '💼', tips: 'ถามอาชีพ = nghề nghiệp của bạn?' },
            { word: 'thiết kế', ipa: '/tʰiət kɛ/', tones: '↘️↗️', meaning: 'ออกแบบ', emoji: '🎨', tips: 'thiết kế đồ họa = ออกแบบกราฟิก' },
            { word: 'sống', ipa: '/ʂoŋ/', tones: '↗️', meaning: 'อยู่/มีชีวิต', emoji: '🏠', tips: 'Bạn sống ở đâu? = คุณอยู่ที่ไหน' },
            { word: 'ở', ipa: '/ɨː/', tones: '❓', meaning: 'ที่ (สถานที่)', emoji: '📍', tips: 'ở = at/in' },
            { word: 'Bangkok', ipa: '/baːŋ kok/', tones: '➡️⬇️', meaning: 'กรุงเทพ', emoji: '🏙️', tips: 'Sống ở Bangkok = อยู่กรุงเทพ' }
          ]
        },
        // Day 3: Tones 1-3 (minimal pairs)
        {
          id: 3,
          title: 'วรรณยุกต์ 1-3',
          words: [
            { word: 'ma', ipa: '/ma/', tones: '➡️', meaning: 'ผี', emoji: '👻', tips: 'ma ➡️ เสียงสามัญ เหมือน "มา" ไทย' },
            { word: 'mà', ipa: '/ma/', tones: '↘️', meaning: 'แม่', emoji: '👩', tips: 'mà ↘️ เสียงเอก เหมือน "มา่" (แต่แม่)' },
            { word: 'má', ipa: '/ma/', tones: '↗️', meaning: 'แม่ (แก้ม)', emoji: '😊', tips: 'má ↗️ เสียงจัตวา = แก้ม' },
            { word: 'ta', ipa: '/ta/', tones: '➡️', meaning: 'เรา', emoji: '👥', tips: 'ta ➡️ = เรา/พวกเรา' },
            { word: 'tà', ipa: '/ta/', tones: '↘️', meaning: 'ชั่วร้าย', emoji: '😈', tips: 'tà ↘️ = ชั่ว/ไม่ดี' },
            { word: 'tá', ipa: '/ta/', tones: '↗️', meaning: 'โหล (12ชิ้น)', emoji: '🔟', tips: 'tá ↗️ = 1 โหล = 12' },
            { word: 'cá', ipa: '/ka/', tones: '↗️', meaning: 'ปลา', emoji: '🐟', tips: 'cá ↗️ = ปลา เสียงจัตวา' },
            { word: 'cà', ipa: '/ka/', tones: '↘️', meaning: 'มะเขือ', emoji: '🍆', tips: 'cà ↘️ = มะเขือ (cà chua = มะเขือเทศ)' },
            { word: 'đi', ipa: '/di/', tones: '➡️', meaning: 'ไป', emoji: '🚶', tips: 'đi ➡️ = ไป/เดิน' },
            { word: 'đì', ipa: '/di/', tones: '↘️', meaning: 'เน้นเสียง', emoji: '🔊', tips: 'đì ↘️ = ใช้เน้นประโยค' }
          ]
        },
        // Day 4: Tones 4-6 (minimal pairs)
        {
          id: 4,
          title: 'วรรณยุกต์ 4-6',
          words: [
            { word: 'mả', ipa: '/ma/', tones: '❓', meaning: 'หลุมศพ', emoji: '🪦', tips: 'mả ❓ = หลุม — ขึ้นแล้วลง!' },
            { word: 'mã', ipa: '/ma/', tones: '〰️', meaning: 'ม้า', emoji: '🐴', tips: 'mã 〰️ = ม้า — เสียงสะดุด!' },
            { word: 'mạ', ipa: '/ma/', tones: '⬇️', meaning: 'ข้าวกล้า', emoji: '🌾', tips: 'mạ ⬇️ = ต้นกล้า — สั้นกระแทก!' },
            { word: 'bả', ipa: '/ba/', tones: '❓', meaning: 'พิษ', emoji: '☠️', tips: 'bả ❓ = พิษ — เสียงถาม' },
            { word: 'bã', ipa: '/ba/', tones: '〰️', meaning: 'กาก/เศษ', emoji: '🗑️', tips: 'bã 〰️ = กาก — เสียงสะดุด' },
            { word: 'bạ', ipa: '/ba/', tones: '⬇️', meaning: 'สุ่ม/บังเอิญ', emoji: '🎲', tips: 'bạ ⬇️ = สุ่ม — เสียงสั้น' },
            { word: 'cả', ipa: '/ka/', tones: '❓', meaning: 'ทั้งหมด/ตัวใหญ่', emoji: '📏', tips: 'cả ❓ = ทั้งหมด' },
            { word: 'cã', ipa: '/ka/', tones: '〰️', meaning: 'โต้เถียง', emoji: '🗣️', tips: 'cã 〰️ = เถียง/โต้แย้ง' },
            { word: 'cạ', ipa: '/ka/', tones: '⬇️', meaning: 'ข้าง/เคียง', emoji: '↔️', tips: 'cạ ⬇️ = ข้างๆ' },
            { word: 'vã', ipa: '/va/', tones: '〰️', meaning: 'โปรย/สาด', emoji: '💦', tips: 'vã 〰️ = โปรย/สาดน้ำ' }
          ]
        },
        // Day 5: Basic vowels (10 example words)
        {
          id: 5,
          title: 'สระพื้นฐาน',
          words: [
            { word: 'ba', ipa: '/ba/', tones: '➡️', meaning: 'สาม/พ่อ', emoji: '3️⃣', tips: 'a = father' },
            { word: 'ăn', ipa: '/an/', tones: '➡️', meaning: 'กิน', emoji: '🍽️', tips: 'ă = cat' },
            { word: 'ân', ipa: '/ən/', tones: '➡️', meaning: 'เมตตา/คุณ', emoji: '💝', tips: 'â = fur (unrounded)' },
            { word: 'em', ipa: '/ɛm/', tones: '➡️', meaning: 'น้อง/คุณ (หญิง)', emoji: '👧', tips: 'e = bed' },
            { word: 'tên', ipa: '/tɛn/', tones: '➡️', meaning: 'ชื่อ', emoji: '📛', tips: 'ê = say' },
            { word: 'i', ipa: '/i/', tones: '➡️', meaning: 'เย็น (อากาศ)', emoji: '❄️', tips: 'i = see' },
            { word: 'to', ipa: '/tɔ/', tones: '➡️', meaning: 'ใหญ่', emoji: '📏', tips: 'o = hot' },
            { word: 'ông', ipa: '/oŋ/', tones: '➡️', meaning: 'คุณปู่/คุณ (ชายสูงอายุ)', emoji: '👴', tips: 'ô = go' },
            { word: 'ơi', ipa: '/ɤːj/', tones: '➡️', meaning: 'เฮ้! (เรียก)', emoji: '📢', tips: 'ơ = fur (longer)' },
            { word: 'uống', ipa: '/uoŋ/', tones: '↗️', meaning: 'ดื่ม', emoji: '🥤', tips: 'u = food' }
          ]
        },
        // Day 6: Basic consonants (15 words)
        {
          id: 6,
          title: 'พยัญชนะพื้นฐาน',
          words: [
            { word: 'ba', ipa: '/ba/', tones: '➡️', meaning: 'สาม', emoji: '3️⃣', tips: 'b = /b/ เหมือนไทย' },
            { word: 'cá', ipa: '/ka/', tones: '↗️', meaning: 'ปลา', emoji: '🐟', tips: 'c = /k/ ไม่ใช่ /s/' },
            { word: 'đi', ipa: '/ɗi/', tones: '➡️', meaning: 'ไป', emoji: '🚶', tips: 'đ = /ɗ/ — ไม่มีในไทย!' },
            { word: 'ga', ipa: '/ga/', tones: '➡️', meaning: 'ไก่/สถานีรถไฟ', emoji: '🐔', tips: 'g = /g/ เหมือนไทย' },
            { word: 'hai', ipa: '/haj/', tones: '➡️', meaning: 'สอง', emoji: '2️⃣', tips: 'h = /h/ เหมือนไทย' },
            { word: 'không', ipa: '/xəːŋ/', tones: '➡️', meaning: 'ไม่/ศูนย์', emoji: '0️⃣', tips: 'kh = /x/ คล้าย "ข" ไทย' },
            { word: 'là', ipa: '/la/', tones: '↘️', meaning: 'เป็น/คือ', emoji: '🔗', tips: 'l = /l/ เหมือนไทย' },
            { word: 'một', ipa: '/mot/', tones: '⬇️', meaning: 'หนึ่ง', emoji: '1️⃣', tips: 'm = /m/ เหมือนไทย' },
            { word: 'năm', ipa: '/nam/', tones: '➡️', meaning: 'ห้า/ปี', emoji: '5️⃣', tips: 'n = /n/ เหมือนไทย' },
            { word: 'người', ipa: '/ŋɨːj/', tones: '➡️', meaning: 'คน', emoji: '👥', tips: 'ng = /ŋ/ เหมือน "ง" ไทย' },
            { word: 'nghề', ipa: '/ŋɛ/', tones: '↘️', meaning: 'อาชีพ', emoji: '💼', tips: 'ngh = /ŋ/ เหมือน "ง" เช่นกัน' },
            { word: 'nhà', ipa: '/ɲa/', tones: '↘️', meaning: 'บ้าน', emoji: '🏠', tips: 'nh = /ɲ/ เหมือน "หญ" ไทย' },
            { word: 'phở', ipa: '/fəː/', tones: '↗️', meaning: 'เฝอ', emoji: '🍜', tips: 'ph = /f/ ไม่ออกเป็น "พ"!' },
            { word: 'quốc', ipa: '/kwok/', tones: '↗️', meaning: 'ประเทศ', emoji: '🌐', tips: 'qu = /kw/ คล้าย "กว" ไทย' },
            { word: 'xin', ipa: '/ʃin/', tones: '➡️', meaning: 'ขอ (กริยานำ)', emoji: '🙏', tips: 'x = /ʃ/ คล้าย "ซ" แต่ชี้ฟันบน' }
          ]
        },
        // Day 7: Weekly review (no new words)
        {
          id: 7,
          title: 'ทบทวนสัปดาห์ 1',
          words: []
        }
      ]
    },

    // ================================================================
    // WEEK 2: Numbers + Shopping (~70 words)
    // ================================================================
    {
      id: 2,
      title: 'ตัวเลข + ซื้อของ',
      days: [
        // Day 1: Numbers 1-20
        {
          id: 1,
          title: 'ตัวเลข 1-20',
          words: [
            { word: 'một', ipa: '/mot/', tones: '⬇️', meaning: '1 (หนึ่ง)', emoji: '1️⃣', tips: 'một ⬇️ = เสียงสั้นกระแทก' },
            { word: 'hai', ipa: '/haj/', tones: '➡️', meaning: '2 (สอง)', emoji: '2️⃣', tips: 'hai ➡️ = เสียงราบ' },
            { word: 'ba', ipa: '/ba/', tones: '➡️', meaning: '3 (สาม)', emoji: '3️⃣', tips: 'ba ➡️ = เสียงสามัญ' },
            { word: 'bốn', ipa: '/bon/', tones: '↗️', meaning: '4 (สี่)', emoji: '4️⃣', tips: 'bốn ↗️ = เสียง Sắc' },
            { word: 'năm', ipa: '/nam/', tones: '➡️', meaning: '5 (ห้า)', emoji: '5️⃣', tips: 'năm ➡️ = หมายถึงทั้งห้าและปี' },
            { word: 'sáu', ipa: '/ʂaw/', tones: '↗️', meaning: '6 (หก)', emoji: '6️⃣', tips: 'sáu ↗️ = เสียง Sắc' },
            { word: 'bảy', ipa: '/baj/', tones: '❓', meaning: '7 (เจ็ด)', emoji: '7️⃣', tips: 'bảy ❓ = เสียง Hỏi' },
            { word: 'tám', ipa: '/tam/', tones: '↗️', meaning: '8 (แปด)', emoji: '8️⃣', tips: 'tám ↗️ = พยัญชนะท้าย -m' },
            { word: 'chín', ipa: '/tʃin/', tones: '↗️', meaning: '9 (เก้า)', emoji: '9️⃣', tips: 'chín ↗️ = พยัญชนะท้าย -n' },
            { word: 'mười', ipa: '/mɨːj/', tones: '↘️', meaning: '10 (สิบ)', emoji: '🔟', tips: 'mười ↘️ = รากศัพท์เดียวกับ "mười" (สิบ)' }
          ]
        },
        // Day 2: Numbers 20-100
        {
          id: 2,
          title: 'ตัวเลข 20-100',
          words: [
            { word: 'hai mươi', ipa: '/haj mɨːj/', tones: '➡️↘️', meaning: '20 (ยี่สิบ)', emoji: '2️⃣0️⃣', tips: 'hai = 2, mươi = สิบ' },
            { word: 'ba mươi', ipa: '/ba mɨːj/', tones: '➡️↘️', meaning: '30 (สามสิบ)', emoji: '3️⃣0️⃣', tips: 'นับแบบนี้ถึง 90' },
            { word: 'một trăm', ipa: '/mot tʃam/', tones: '⬇️➡️', meaning: '100 (หนึ่งร้อย)', emoji: '💯', tips: 'trăm = ร้อย' },
            { word: 'trăm', ipa: '/tʃam/', tones: '➡️', meaning: 'ร้อย', emoji: '💯', tips: 'ใช้ต่อท้ายเลข 100+' }
          ]
        },
        // Day 3: Currency
        {
          id: 3,
          title: 'สกุลเงิน',
          words: [
            { word: 'đồng', ipa: '/ɗoŋ/', tones: '↘️', meaning: 'ดอง (สกุลเงิน VND)', emoji: '💵', tips: '1 USD ≈ 25,000 VND' },
            { word: 'nghìn', ipa: '/ŋin/', tones: '↘️', meaning: 'พัน', emoji: '💵', tips: 'một nghìn = 1,000' },
            { word: 'triệu', ipa: '/tʃiəw/', tones: '⬇️', meaning: 'ล้าน', emoji: '💰', tips: 'một triệu = 1,000,000 VND ≈ 1,400 บาท' },
            { word: 'tiền', ipa: '/tiən/', tones: '↘️', meaning: 'เงิน', emoji: '💰', tips: 'tiền = เงิน/ค่าใช้จ่าย' },
            { word: 'giá', ipa: '/za/', tones: '↗️', meaning: 'ราคา', emoji: '🏷️', tips: 'giá bao nhiêu? = ราคาเท่าไหร่?' }
          ]
        },
        // Day 4: Asking prices
        {
          id: 4,
          title: 'ถามราคา',
          words: [
            { word: 'bao nhiêu', ipa: '/baw niəw/', tones: '➡️➡️', meaning: 'เท่าไหร่', emoji: '❓', tips: 'bao nhiêu? = เท่าไหร่/จำนวนเท่าไหร่' },
            { word: 'đắt', ipa: '/ɗat/', tones: '↗️', meaning: 'แพง', emoji: '😱', tips: 'đắt quá! = แพงเกินไป!' },
            { word: 'rẻ', ipa: '/zɛ/', tones: '❓', meaning: 'ถูก', emoji: '🏷️', tips: 'rẻ = ราคาถูก' },
            { word: 'mắc quá', ipa: '/mak kwa/', tones: '⬇️↗️', meaning: 'แพงเกินไป', emoji: '😰', tips: 'mắc = แพง, quá = เกินไป' },
            { word: 'giảm giá', ipa: '/zam za/', tones: '❓↗️', meaning: 'ลดราคา', emoji: '🏷️', tips: 'ใช้ต่อรองราคาได้' }
          ]
        },
        // Day 5: Bargaining
        {
          id: 5,
          title: 'ต่อราคา',
          words: [
            { word: 'bao nhiêu tiền', ipa: '/baw niəw tiən/', tones: '➡️➡️↘️', meaning: 'เท่าไหร่', emoji: '💰', tips: 'Cái này bao nhiêu tiền?' },
            { word: 'đắt quá', ipa: '/ɗat kwa/', tones: '↗️↗️', meaning: 'แพงเกินไป', emoji: '🙀', tips: 'ใช้ต่อรอง' },
            { word: 'giảm chút', ipa: '/zam tʃut/', tones: '❓↗️', meaning: 'ลดหน่อย', emoji: '🤏', tips: 'giảm chút được không? = ลดหน่อยได้ไหม' },
            { word: 'rẻ hơn', ipa: '/zɛ hɤːn/', tones: '❓➡️', meaning: 'ถูกกว่า', emoji: '💲', tips: 'Có rẻ hơn không? = มีถูกกว่าไหม' }
          ]
        },
        // Day 6: Roleplay shopping
        {
          id: 6,
          title: 'Roleplay: ซื้อของ',
          words: [
            { word: 'cái này', ipa: '/kaj naj/', tones: '↗️↘️', meaning: 'อันนี้', emoji: '👉', tips: 'cái này bao nhiêu? = อันนี้เท่าไหร่' },
            { word: 'mua', ipa: '/muə/', tones: '➡️', meaning: 'ซื้อ', emoji: '🛒', tips: 'Tôi muốn mua... = ฉันอยากซื้อ...' },
            { word: 'bán', ipa: '/baj/', tones: '↗️', meaning: 'ขาย', emoji: '🏪', tips: 'Có bán không? = มีขายไหม' },
            { word: 'cần', ipa: '/kən/', tones: '↘️', meaning: 'ต้องการ', emoji: '✅', tips: 'Tôi cần... = ฉันต้องการ...' },
            { word: 'được không', ipa: '/ɗɨək xəːŋ/', tones: '⬇️➡️', meaning: 'ได้ไหม', emoji: '🤔', tips: 'เติมท้ายประโยค = ได้ไหม' }
          ]
        },
        // Day 7: Weekly review (no new words)
        {
          id: 7,
          title: 'ทบทวนสัปดาห์ 2',
          words: []
        }
      ]
    },

    // ================================================================
    // WEEK 3: Food + Ordering (~60 words)
    // ================================================================
    {
      id: 3,
      title: 'อาหาร + สั่งเฝอ',
      days: [
        // Day 1: Foods
        {
          id: 1,
          title: 'อาหาร',
          words: [
            { word: 'cơm', ipa: '/kəːm/', tones: '➡️', meaning: 'ข้าว', emoji: '🍚', tips: 'cơm = ข้าวสวย/อาหาร' },
            { word: 'phở', ipa: '/fəː/', tones: '↗️', meaning: 'เฝอ (ก๋วยเตี๋ยว)', emoji: '🍜', tips: 'phở = /fəː/ ไม่ออกเป็น "พ"!' },
            { word: 'bún', ipa: '/bun/', tones: '↗️', meaning: 'หมี่ (เส้นเล็ก)', emoji: '🍝', tips: 'bún = เส้นหมี่ขาว' },
            { word: 'bánh mì', ipa: '/baːn mi/', tones: '↗️➡️', meaning: 'ขนมปัง (แซนด์วิชเวียดนาม)', emoji: '🥖', tips: 'เมนูเด็ดของเวียดนาม!' },
            { word: 'thịt', ipa: '/tʰit/', tones: '⬇️', meaning: 'เนื้อ', emoji: '🥩', tips: 'thịt lợn = หมู, thịt bò = เนื้อวัว' },
            { word: 'cá', ipa: '/kaː/', tones: '↗️', meaning: 'ปลา', emoji: '🐟', tips: 'cá kho = ปลาตุ๋น' },
            { word: 'rau', ipa: '/raw/', tones: '➡️', meaning: 'ผัก', emoji: '🥬', tips: 'rau sống = ผักสด' },
            { word: 'trứng', ipa: '/tʃɨŋ/', tones: '↗️', meaning: 'ไข่', emoji: '🥚', tips: 'trứng ốp la = ไข่ดาว' }
          ]
        },
        // Day 2: Drinks
        {
          id: 2,
          title: 'เครื่องดื่ม',
          words: [
            { word: 'cà phê', ipa: '/kaː fɛ/', tones: '↘️➡️', meaning: 'กาแฟ', emoji: '☕', tips: 'cà phê sữa đá = กาแฟใส่นม' },
            { word: 'trà', ipa: '/tʃaː/', tones: '↘️', meaning: 'ชา', emoji: '🍵', tips: 'trà đá = ชาเย็น' },
            { word: 'nước', ipa: '/nɨːək/', tones: '↗️', meaning: 'น้ำ', emoji: '💧', tips: 'nước = น้ำ/ของเหลว' },
            { word: 'bia', ipa: '/biːa/', tones: '➡️', meaning: 'เบียร์', emoji: '🍺', tips: 'Bia Hà Nội = เบียร์ฮานอย' },
            { word: 'sữa', ipa: '/sɨːa/', tones: '❓', meaning: 'นม', emoji: '🥛', tips: 'cà phê sữa = กาแฟนม' },
            { word: 'đá', ipa: '/ɗa/', tones: '↗️', meaning: 'น้ำแข็ง', emoji: '🧊', tips: 'cà phê đá = กาแฟเย็น' },
            { word: 'nóng', ipa: '/nɔŋ/', tones: '↗️', meaning: 'ร้อน', emoji: '🔥', tips: 'cà phê nóng = กาแฟร้อน' }
          ]
        },
        // Day 3: Ordering in shops
        {
          id: 3,
          title: 'สั่งของ',
          words: [
            { word: 'cho tôi', ipa: '/tʃɔ toj/', tones: '❓➡️', meaning: 'ให้ผม', emoji: '🙋', tips: 'Cho tôi... = ขอ...' },
            { word: 'thêm', ipa: '/tʰem/', tones: '➡️', meaning: 'เพิ่ม', emoji: '➕', tips: 'thêm = more/เพิ่ม' },
            { word: 'không ạ', ipa: '/xəːŋ a/', tones: '➡️❓', meaning: 'ไม่ครับ/ค่ะ', emoji: '🙅', tips: 'ตอบปฏิเสธสุภาพ' },
            { word: 'ngon', ipa: '/ŋɔn/', tones: '➡️', meaning: 'อร่อย', emoji: '😋', tips: 'Ngon quá! = อร่อยมาก!' }
          ]
        },
        // Day 4: Flavors
        {
          id: 4,
          title: 'รสชาติ',
          words: [
            { word: 'dắt', ipa: '/zɨːt/', tones: '↗️', meaning: 'เผ็ด', emoji: '🌶️', tips: 'Có dắt không? = เผ็ดไหม' },
            { word: 'mặn', ipa: '/mɨːn/', tones: '⬇️', meaning: 'เค็ม', emoji: '🧂', tips: 'mặn = เค็ม' },
            { word: 'ngọt', ipa: '/ŋɔt/', tones: '⬇️', meaning: 'หวาน', emoji: '🍬', tips: 'ngọt = หวาน' },
            { word: 'chua', ipa: '/tʃuːa/', tones: '➡️', meaning: 'เปรี้ยว', emoji: '🍋', tips: 'chua = เปรี้ยว' },
            { word: 'béo', ipa: '/ɓɛɔ/', tones: '↗️', meaning: 'มัน', emoji: '🥑', tips: 'béo = มัน/มีไขมัน' }
          ]
        },
        // Day 5: Roleplay coffee
        {
          id: 5,
          title: 'Roleplay: สั่งกาแฟ',
          words: [
            { word: 'cà phê đen', ipa: '/kaː fɛ ɗɛn/', tones: '↘️➡️➡️', meaning: 'กาแฟดำ', emoji: '☕', tips: 'đen = ดำ' },
            { word: 'cà phê sữa', ipa: '/kaː fɛ sɨːa/', tones: '↘️➡️❓', meaning: 'กาแฟนม', emoji: '☕', tips: 'เมนูฮิตมาก!' },
            { word: 'cà phê đá', ipa: '/kaː fɛ ɗa/', tones: '↘️➡️↗️', meaning: 'กาแฟเย็น', emoji: '🧊', tips: 'đá = น้ำแข็ง' },
            { word: 'cà phê nóng', ipa: '/kaː fɛ nɔŋ/', tones: '↘️➡️↗️', meaning: 'กาแฟร้อน', emoji: '🔥', tips: 'nóng = ร้อน' }
          ]
        },
        // Day 6: Roleplay ordering pho (7 words)
        {
          id: 6,
          title: '🍜 Roleplay: สั่งเฝอ',
          words: [
            { word: 'tô phở', ipa: '/to fɤː/', tones: '➡️↗️', meaning: 'ชามเฝอ', emoji: '🍜', tips: 'Một tô phở bò = เฝอเนื้อหนึ่งชาม' },
            { word: 'nước mắm', ipa: '/nɨək mam/', tones: '↗️↗️', meaning: 'น้ำปลา', emoji: '🧂', tips: 'Nước mắm คือน้ำปลาเวียดนาม' },
            { word: 'giá đỗ', ipa: '/za ɗo/', tones: '↗️⬇️', meaning: 'ถั่วงอก', emoji: '🌱', tips: 'ใส่ในเฝอเพื่อความกรุบกรอบ' },
            { word: 'rau thơm', ipa: '/raw tʰɤm/', tones: '➡️➡️', meaning: 'ผักสด/สมุนไพร', emoji: '🌿', tips: 'รวมผักต่างๆ ที่ใส่ในเฝอ' },
            { word: 'chín', ipa: '/tʃin/', tones: '↗️', meaning: 'สุก', emoji: '🍖', tips: 'Thịt chín = เนื้อสุก' },
            { word: 'tái', ipa: '/taj/', tones: '↗️', meaning: 'ดิบ (ลวก)', emoji: '🥩', tips: 'Phở tái = เฝอเนื้อดิบลวก' },
            { word: 'nước dùng', ipa: '/nɨək zuŋ/', tones: '↗️↘️', meaning: 'น้ำซุป', emoji: '🥣', tips: 'Nước dùng phở = น้ำซุปเฝอหอมๆ' }
          ]
        },
        // Day 7: Weekly review (no new words)
        {
          id: 7,
          title: 'ทบทวนสัปดาห์ 3',
          words: []
        }
      ]
    },

    // ================================================================
    // WEEK 4: Transportation + Directions (~60 words)
    // ================================================================
    {
      id: 4,
      title: 'เดินทาง + ทิศทาง',
      days: [
        // Day 1: Transportation
        {
          id: 1,
          title: 'การเดินทาง',
          words: [
            { word: 'xe buýt', ipa: '/sɛ bɨt/', tones: '➡️↗️', meaning: 'รถเมล์', emoji: '🚌', tips: 'xe = ยานพาหนะ' },
            { word: 'taxi', ipa: '/tak si/', tones: '➡️➡️', meaning: 'แท็กซี่', emoji: '🚕', tips: 'ออกเสียง tak-si' },
            { word: 'xe máy', ipa: '/sɛ m aːj/', tones: '➡️↗️', meaning: 'มอเตอร์ไซค์', emoji: '🏍️', tips: 'xe máy = รถจักรยานยนต์' },
            { word: 'đi bộ', ipa: '/ɗi bɔ/', tones: '➡️⬇️', meaning: 'เดิน', emoji: '🚶', tips: 'đi bộ = เดินเท้า' },
            { word: 'máy bay', ipa: '/maj baj/', tones: '↗️➡️', meaning: 'เครื่องบิน', emoji: '✈️', tips: 'máy bay = เครื่องบิน' },
            { word: 'tàu', ipa: '/taw/', tones: '↘️', meaning: 'รถไฟ/เรือ', emoji: '🚂', tips: 'tàu hỏa = รถไฟ' }
          ]
        },
        // Day 2: Directions
        {
          id: 2,
          title: 'ทิศทาง',
          words: [
            { word: 'trái', ipa: '/tʃaj/', tones: '↗️', meaning: 'ซ้าย', emoji: '⬅️', tips: 'rẽ trái = เลี้ยวซ้าย' },
            { word: 'phải', ipa: '/faj/', tones: '↗️', meaning: 'ขวา', emoji: '➡️', tips: 'rẽ phải = เลี้ยวขวา' },
            { word: 'thẳng', ipa: '/tʰaŋ/', tones: '↗️', meaning: 'ตรงไป', emoji: '⬆️', tips: 'đi thẳng = ตรงไป' },
            { word: 'quay lại', ipa: '/kwaj laj/', tones: '➡️↗️', meaning: 'กลับ/ย้อน', emoji: '🔙', tips: 'quay lại = turn back' },
            { word: 'gần', ipa: '/gən/', tones: '↘️', meaning: 'ใกล้', emoji: '📍', tips: 'gần đây = ใกล้ๆ ที่นี่' },
            { word: 'xa', ipa: '/sa/', tones: '➡️', meaning: 'ไกล', emoji: '🗺️', tips: 'xa quá = ไกลมาก' }
          ]
        },
        // Day 3: Asking & giving directions
        {
          id: 3,
          title: 'ถามทาง',
          words: [
            { word: 'ở đâu', ipa: '/ɨː dəw/', tones: '❓➡️', meaning: 'อยู่ที่ไหน', emoji: '❓', tips: '___ ở đâu? = ___ อยู่ที่ไหน' },
            { word: 'đi thế nào', ipa: '/ɗi tʰɛ naw/', tones: '➡️↘️↘️', meaning: 'ไปยังไง', emoji: '🗺️', tips: 'đi thế nào đến... = ไปยังไงถึง...' },
            { word: 'bao xa', ipa: '/baw sa/', tones: '➡️➡️', meaning: 'ไกลแค่ไหน', emoji: '📏', tips: 'bao xa = เท่าไหร่ไกล' },
            { word: 'đến', ipa: '/ɗɛn/', tones: '↗️', meaning: 'ถึง/มาถึง', emoji: '🏁', tips: 'đến nơi = ถึงที่หมาย' }
          ]
        },
        // Day 4: Calling a ride
        {
          id: 4,
          title: 'เรียกรถ',
          words: [
            { word: 'Grab', ipa: '/gɾɛp/', tones: '➡️', meaning: 'แกร็บ (เรียกแท็กซี่)', emoji: '📱', tips: 'ใช้ Grab แทน taxi ในเวียดนาม' },
            { word: 'giá bao nhiêu', ipa: '/za baw niəw/', tones: '↗️➡️➡️', meaning: 'ราคาเท่าไหร่', emoji: '💰', tips: 'Giá bao nhiêu đến...?' },
            { word: 'đến đây', ipa: '/ɗɛn dəj/', tones: '↗️➡️', meaning: 'มาที่นี่', emoji: '📍', tips: 'đến đây = มา(ที่)นี่' },
            { word: 'đón', ipa: '/ɗɔn/', tones: '↗️', meaning: 'รับ (คน)', emoji: '🚗', tips: 'đón tôi = มารับฉัน' }
          ]
        },
        // Day 5: Roleplay travel (7 words)
        {
          id: 5,
          title: '🗺️ Roleplay: เดินทาง',
          words: [
            { word: 'ghé thăm', ipa: '/gɛ tʰam/', tones: '↗️➡️', meaning: 'แวะเยี่ยม', emoji: '🚶', tips: 'Ghé thăm Hội An = แวะเที่ยวฮอยอัน' },
            { word: 'bản đồ', ipa: '/ban ɗo/', tones: '❓↘️', meaning: 'แผนที่', emoji: '🗺️', tips: 'Xem bản đồ = ดูแผนที่' },
            { word: 'lạc đường', ipa: '/lak ɗɨəŋ/', tones: '⬇️↘️', meaning: 'หลงทาง', emoji: '😵', tips: 'Tôi bị lạc đường = ผมหลงทาง' },
            { word: 'vé', ipa: '/vɛ/', tones: '↗️', meaning: 'ตั๋ว', emoji: '🎫', tips: 'Mua vé = ซื้อตั๋ว' },
            { word: 'ga', ipa: '/ga/', tones: '➡️', meaning: 'สถานีรถไฟ', emoji: '🚉', tips: 'Ga Hà Nội = สถานีฮานอย' },
            { word: 'bến xe', ipa: '/ben sɛ/', tones: '↗️➡️', meaning: 'สถานีขนส่ง', emoji: '🚌', tips: 'Bến xe miền Đông = สถานีขนส่งตะวันออก' },
            { word: 'địa chỉ', ipa: '/ɗia tʃi/', tones: '⬇️❓', meaning: 'ที่อยู่', emoji: '📍', tips: 'Cho tôi địa chỉ = ขอที่อยู่หน่อย' }
          ]
        },
        // Day 6: Roleplay taxi (7 words)
        {
          id: 6,
          title: '🚕 Roleplay: Taxi/Grab',
          words: [
            { word: 'bắt taxi', ipa: '/bat tak si/', tones: '↗️➡️➡️', meaning: 'เรียกแท็กซี่', emoji: '🚕', tips: 'Bắt taxi ở đâu? = เรียกแท็กซี่ที่ไหน' },
            { word: 'lên xe', ipa: '/lɛn sɛ/', tones: '➡️➡️', meaning: 'ขึ้นรถ', emoji: '🚗', tips: 'Lên xe đi! = ขึ้นรถเลย!' },
            { word: 'xuống xe', ipa: '/suoŋ sɛ/', tones: '↗️➡️', meaning: 'ลงรถ', emoji: '🚶', tips: 'Xuống xe ở đây = ลงรถตรงนี้' },
            { word: 'chờ', ipa: '/tʃɤː/', tones: '↘️', meaning: 'รอ', emoji: '⏳', tips: 'Chờ một chút = รอสักครู่' },
            { word: 'nhanh lên', ipa: '/ɲaɲ lɛn/', tones: '➡️➡️', meaning: 'เร็วๆ', emoji: '⚡', tips: 'Làm nhanh lên! = ทำให้เร็ว!' },
            { word: 'tài xế', ipa: '/taj sɛ/', tones: '↘️↗️', meaning: 'คนขับ', emoji: '🧑‍✈️', tips: 'Anh tài xế ơi! = พี่คนขับ!' },
            { word: 'kẹt xe', ipa: '/kɛt sɛ/', tones: '⬇️➡️', meaning: 'รถติด', emoji: '🚙', tips: 'Kẹt xe quá! = รถติดมาก!' }
          ]
        },
        // Day 7: Final review (no new words)
        {
          id: 7,
          title: '🎉 ทบทวนสุดท้าย',
          words: []
        }
      ]
    }
  ]
};

// ================================================================
// Day Number → Curriculum Mapping (28 days = 4 weeks × 7 days)
// ================================================================

const DAY_MAP = [
  // Week 1: Greetings + Sound System (days 1-7)
  { week: 1, day: 1, title: 'ทักทายพื้นฐาน', grammar: 'SVO: Tôi là... = ผมคือ...' },
  { week: 1, day: 2, title: 'แนะนำตัว', grammar: 'Bạn là...? = คุณคือ...?' },
  { week: 1, day: 3, title: 'วรรณยุกต์ 1-3', grammar: 'Có/Không: มี/ไม่มี — Có... không?' },
  { week: 1, day: 4, title: 'วรรณยุกต์ 4-6', grammar: 'คำถาม: Ở đâu, Gì, Bao nhiêu?' },
  { week: 1, day: 5, title: 'สระพื้นฐาน', grammar: 'Đây là... = นี่คือ...' },
  { week: 1, day: 6, title: 'พยัญชนะ', grammar: 'Không + กริยา = ปฏิเสธ' },
  { week: 1, day: 7, title: '📝 Review Week 1' },
  // Week 2: Numbers + Shopping (days 8-14)
  { week: 2, day: 1, title: 'ตัวเลข 1-20', grammar: 'Một, hai, ba... + đơn vị' },
  { week: 2, day: 2, title: 'ตัวเลข 20-100', grammar: 'จำนวน + đơn vị tiền' },
  { week: 2, day: 3, title: 'สกุลเงิน', grammar: '...bao nhiêu tiền? = ...เท่าไหร่' },
  { week: 2, day: 4, title: 'ถามราคา', grammar: 'Cái này bao nhiêu? = อันนี้เท่าไหร่' },
  { week: 2, day: 5, title: 'ต่อราคา', grammar: 'Đắt quá! = แพงเกิน! Giảm... = ลด...' },
  { week: 2, day: 6, title: '🛒 Roleplay: ซื้อของ', grammar: 'Cho tôi... = ขอ...' },
  { week: 2, day: 7, title: '📝 Review Week 2' },
  // Week 3: Food + Ordering (days 15-21)
  { week: 3, day: 1, title: 'อาหาร', grammar: 'นาม + คุณศัพท์: cà phê đen' },
  { week: 3, day: 2, title: 'เครื่องดื่ม', grammar: 'Muốn + กริยา = อยาก...' },
  { week: 3, day: 3, title: 'สั่งของในร้าน', grammar: 'Cho tôi + [สิ่ง] = ขอ...' },
  { week: 3, day: 4, title: 'รสชาติ', grammar: 'Ngon quá! = อร่อยมาก!' },
  { week: 3, day: 5, title: '☕ Roleplay: สั่งกาแฟ', grammar: 'đã/đang/sẽ = tense markers' },
  { week: 3, day: 6, title: '🍜 Roleplay: สั่งเฝอ', grammar: 'Review grammar week 3' },
  { week: 3, day: 7, title: '📝 Review Week 3' },
  // Week 4: Travel + Directions (days 22-28)
  { week: 4, day: 1, title: 'การเดินทาง', grammar: 'Đi + ทิศทาง = ไป...' },
  { week: 4, day: 2, title: 'ทิศทาง', grammar: 'Rẽ trái/phải = เลี้ยวซ้าย/ขวา' },
  { week: 4, day: 3, title: 'ถามทาง', grammar: '___ ở đâu? = ___อยู่ที่ไหน' },
  { week: 4, day: 4, title: 'เรียกรถ', grammar: 'Bao nhiêu đến...? = เท่าไหร่ถึง...' },
  { week: 4, day: 5, title: '🗺️ Roleplay: เดินทาง', grammar: 'Ghé thăm = แวะเยี่ยม' },
  { week: 4, day: 6, title: '🚕 Roleplay: Taxi/Grab', grammar: 'Review all tenses' },
  { week: 4, day: 7, title: '🎉 Final Review', grammar: 'All grammar + all vocab' }
];

// Map day number (1-28) → { week, day, title, grammar, words[] }
function getDayInfo(dayNum) {
  if (dayNum < 1 || dayNum > 28) return null;
  const map = DAY_MAP[dayNum - 1];
  // Get vocabulary words for this curriculum week+day
  const words = map.week ? getWords(map.week, map.day) : [];
  return { ...map, dayNum, words };
}

// ================================================================
// Review day: get all words from the week
// ================================================================
function getWeekWords(weekId) {
  const week = CURRICULUM.weeks.find(w => w.id === weekId);
  if (!week) return [];
  return week.days.flatMap(d => d.words);
}

function getReviewWords(dayNum) {
  const info = DAY_MAP[dayNum - 1];
  if (!info || info.day !== 7) return [];
  return getWeekWords(info.week);
}
function getAllWords() {
  const words = [];
  CURRICULUM.weeks.forEach(week => {
    week.days.forEach(day => {
      day.words.forEach(w => {
        words.push({ ...w, week: week.id, day: day.id });
      });
    });
  });
  return words;
}

// ================================================================
// Text-RPG QUEST DATA
// 6 quests across 4 weeks — NPC scenarios + branching choices
// ================================================================

const QUESTS = [
  // ── WEEK 1 QUESTS ──────────────────────────────────────────
  {
    id: 'w1-arrival',
    title: 'ด่านตรวจคนเข้าเมือง',
    icon: '🛂',
    npc: 'เจ้าหน้าที่ตม.',
    npcEmoji: '👮',
    dayRange: [1, 2],
    context: 'คุณเพิ่งถึงสนามบินโฮจิมินห์ เข้าแถวที่ด่านตรวจคนเข้าเมือง...',
    hp: 100000,
    steps: [
      {
        npcLine: 'Xin chào! Hộ chiếu của bạn?',
        npcLineThai: 'สวัสดีครับ! พาสปอร์ตของคุณครับ',
        prompt: 'คุณจะตอบเจ้าหน้าที่ยังไง?',
        choices: [
          { text: 'Xin chào ➡️↗️', correct: true, response: '✅ เจ้าหน้าที่พยักหน้า พร้อมยิ้ม — "Chào anh!"', hpChange: 0 },
          { text: 'Xin cháo ↗️↗️', correct: false, response: '❌ เจ้าหน้าที่ขมวดคิ้ว — คุณพูด "ก๋วยเตี๋ยว" ไม่ใช่ "สวัสดี" เขาให้คุณต่อแถวใหม่ 😅', hpChange: -10000 }
        ]
      },
      {
        npcLine: 'Đi du lịch hay công tác?',
        npcLineThai: 'มาเที่ยวหรือมาทำงานครับ?',
        prompt: 'คุณจะตอบยังไง?',
        choices: [
          { text: 'Du lịch 🏖️', correct: true, response: '✅ "Du lịch!" เจ้าหน้าที่ประทับตราให้ผ่านฉลุย ✅', hpChange: 0 },
          { text: 'Công chúa 👸', correct: false, response: '❌ "Công chúa?" = "เจ้าหญิง" — เจ้าหน้าที่หัวเราะและให้คุณตอบใหม่ 😂', hpChange: -5000 }
        ]
      },
      {
        npcLine: 'Bao nhiêu ngày?',
        npcLineThai: 'กี่วันครับ?',
        prompt: 'จะบอกว่า "7 วัน"?',
        choices: [
          { text: 'Bảy ngày ❓➡️', correct: true, response: '✅ "Bảy ngày!" เจ้าหน้าที่ส่งพาสปอร์ตคืน "Chúc bạn vui vẻ!" (ขอให้มีความสุข)', hpChange: 0 },
          { text: 'Báy ngày ↗️➡️', correct: false, response: '❌ เสียง "Bảy" ❓ กลายเป็น "Báy" ↗️ — เจ้าหน้าที่งง คุณต้องพูดซ้ำ', hpChange: -5000 }
        ]
      }
    ],
    success: '🎉 ผ่านด่านตรวจ! เหลือเงิน: {hp} VND',
    fail: '💸 เงินร่วงเหลือ {hp} VND — เสียค่าปรับจากการสื่อสารผิด และถูกให้กลับไปต่อแถวใหม่'
  },
  {
    id: 'w1-taxi',
    title: 'เจรจากับไรเดอร์',
    icon: '🏍️',
    npc: 'Anh Nam',
    npcEmoji: '🧑‍✈️',
    dayRange: [3, 4],
    context: 'คุณออกจากสนามบิน และเรียก Grab "Anh Nam" ขี่มอเตอร์ไซค์มารับ...',
    hp: 100000,
    steps: [
      {
        npcLine: 'Đi đâu đây?',
        npcLineThai: 'จะไปไหนครับ?',
        prompt: 'คุณจะตอบว่า "ไปโรงแรม" — Tôi đi khách sạn',
        choices: [
          { text: 'Tôi đi khách sạn ➡️➡️↗️↗️⬇️', correct: true, response: '✅ "Ok anh!" Nam พยักหน้า ขับออกไป', hpChange: 0 },
          { text: 'Tôi đi khách sàn ➡️➡️↗️↗️↘️', correct: false, response: '❌ Nam หันมามอง — "Sàn? Sàn nhảy?" (ที่เต้นรำ?) คุณต้องพูดใหม่ 😅', hpChange: -10000 }
        ]
      },
      {
        npcLine: 'Có xa không?',
        npcLineThai: 'ไกลไหมครับ?',
        prompt: 'Nam ถามว่าที่พักคุณไกลไหม — ไม่ไกล (ไม่ใกล้)',
        choices: [
          { text: 'Không xa ➡️➡️', correct: true, response: '✅ "Không xa, đi nhanh thôi!" (ไม่ไกล เดี๋ยวถึง) Nam บิดคันเร่ง', hpChange: 0 },
          { text: 'Không sa ➡️➡️', correct: false, response: '❌ "sa?" = ผ้าคลุม — Nam งงว่าคุณพูดถึงผ้าคลุมทำไม 😂', hpChange: -5000 }
        ]
      },
      {
        npcLine: 'Bao nhiêu tiền đây?',
        npcLineThai: 'เท่าไหร่ครับ?',
        prompt: 'ถึงที่หมาย Nam บอกค่าโดยสาร 50,000 VND',
        choices: [
          { text: 'Năm mươi nghìn ➡️➡️➡️', correct: true, response: '✅ "Đúng rồi!" Nam รับเงิน "Cảm ơn anh!"', hpChange: -50000 },
          { text: 'Năm mươi nghìn ➡️↘️➡️', correct: false, response: '❌ Nam ทำหน้างง — "Lăm mươi?" ต้องพูดใหม่', hpChange: -50000 }
        ]
      }
    ],
    success: '🎉 ถึงโรงแรม! Nam โบกมือลา — "Chúc anh vui vẻ!"',
    fail: '💸 Nam หงุดหงิดที่คุณพูดชื่อราคาผิด คิดค่ารอเพิ่ม!'
  },
  // ── WEEK 2 QUESTS ──────────────────────────────────────────
  {
    id: 'w2-sim',
    title: 'ซื้อซิมการ์ด',
    icon: '📱',
    npc: 'พนักงานขาย',
    npcEmoji: '👩‍💼',
    dayRange: [8, 9],
    context: 'คุณเดินเข้า 7-Eleven ในโฮจิมินห์เพื่อซื้อซิมการ์ด...',
    hp: 200000,
    steps: [
      {
        npcLine: 'Xin chào! Cần mua gì thế anh?',
        npcLineThai: 'สวัสดีครับ! ต้องการซื้ออะไรคะ?',
        prompt: 'คุณจะบอกว่า "ซื้อซิมการ์ด"',
        choices: [
          { text: 'Tôi muốn mua sim ➡️↗️➡️➡️', correct: true, response: '✅ "Dạ, loại nào ạ?" เธอแนะนำซิม tourist 100k', hpChange: 0 },
          { text: 'Tôi muốn mua xim ➡️↗️➡️➡️', correct: false, response: '❌ "Xim?" — พนักงานยิ้มแต่ไม่เข้าใจ "Xim" ไม่ใช่คำศัพท์ 😅', hpChange: -5000 }
        ]
      },
      {
        npcLine: 'Sim du lịch 100k, được không ạ?',
        npcLineThai: 'ซิมท่องเที่ยว 100k ได้ไหมคะ?',
        prompt: 'คุณจะถามว่า "100k แพงไป ลดได้ไหม?" … ราคาเท่าไหร่?',
        choices: [
          { text: 'Bao nhiêu? ➡️➡️', correct: true, response: '✅ "100k thôi anh! Rẻ lắm!" เธอยิ้ม', hpChange: 0 },
          { text: 'Đắt quá! ↗️↗️', correct: true, response: '✅ เธอเห็นใจ "Em giảm cho anh còn 80k!" — ประหยัด 20k 💰', hpChange: 20000 }
        ]
      },
      {
        npcLine: 'Chọn số đi anh!',
        npcLineThai: 'เลือกเลขเลยค่ะ!',
        prompt: 'เธอให้เลือกหมายเลข — จะพูดว่า "เอาหมายเลขนี้"?',
        choices: [
          { text: 'Số này ➗↘️', correct: true, response: '✅ "OK anh!" — ซิมใช้งานได้ทันที 📶', hpChange: -80000 },
          { text: 'Số nài ➗↘️', correct: false, response: '❌ "Số nài?" — พนักงานงง "คือว่ายน้ำหรือคะ?" 🏊', hpChange: 0 }
        ]
      }
    ],
    success: '🎉 ซิมใช้ได้! เชื่อมต่ออินเทอร์เน็ตได้แล้ว',
    fail: '💸 ซื้อซิมไม่สำเร็จ — ต้องกลับมาที่ร้านใหม่'
  },
  {
    id: 'w2-market',
    title: 'ตลาดเบนถั่น',
    icon: '🏪',
    npc: 'แม่ค้าตลาด',
    npcEmoji: '👩‍🌾',
    dayRange: [10, 11],
    context: 'คุณไปตลาดเบนถั่น แม่ค้าขายน้ำขวด 20k แต่บอกราคา 100k หวังหลอกคุณ...',
    hp: 200000,
    steps: [
      {
        npcLine: 'Mua nước không em? 100k một chai!',
        npcLineThai: 'ซื้อน้ำไหมคะ? 100k ต่อขวด!',
        prompt: 'แม่ค้าโอเวอร์ไพรซ์! เธอคิด 100k ทั้งที่ตั้ง 20k — คุณจะ?',
        choices: [
          { text: 'Đắt quá! ↗️↗️', correct: true, response: '✅ "Đắt quá!" — แม่ค้าถูกจับได้ "Thôi 20k thôi em!" 💪', hpChange: 80000 },
          { text: 'Rẻ quá! ❓↗️', correct: false, response: '❌ "Rẻ quá!" = ถูกมาก! — ตอนนี้คุณเลยต้องจ่าย 100k ทั้งที่รู้ว่าโดนหลอก 😱', hpChange: -100000 }
        ]
      },
      {
        npcLine: 'Em giỏi quá! Hai chai đúng không?',
        npcLineThai: 'เก่งจังเลย! 2 ขวดใช่มั้ย?',
        prompt: 'เธอถามว่าจะซื้อกี่ขวด — "2 ขวด"',
        choices: [
          { text: 'Hai chai ➡️➡️', correct: true, response: '✅ "Của em đây!" แม่ค้าให้คุณสองขวด 40k', hpChange: -40000 },
          { text: 'Hai tai ➡️➡️', correct: false, response: '❌ "Hai tai?" = สองหู — "อั… หนูจะซื้อหูทำไม?" 😂', hpChange: 0 }
        ]
      }
    ],
    success: '🎉 รอดจากการโดนหลอก! คุณต่อรองเก่งมาก',
    fail: '💸 เสียตังค์เกิน! ครั้งหน้าต้องใช้ "Đắt quá!"'
  },
  // ── WEEK 3 QUEST ───────────────────────────────────────────
  {
    id: 'w3-pho',
    title: 'ร้านเฝอ',
    icon: '🍜',
    npc: 'Chị Linh',
    npcEmoji: '👩‍🍳',
    dayRange: [15, 16],
    context: 'คุณเดินเข้าร้านเฝอชื่อดัง "Chị Linh" เธอถามเสียงดังลั่นร้าน...',
    hp: 150000,
    steps: [
      {
        npcLine: 'Ăn gì đây?',
        npcLineThai: 'กินอะไรดีคะ?',
        prompt: 'คุณจะสั่ง "เฝอเนื้อ"',
        choices: [
          { text: 'Phở bò ❓↘️', correct: true, response: '✅ "Phở bò một tô!" Chị Linh หันไปสั่งครัว', hpChange: 0 },
          { text: 'Phở bơ ❓➡️', correct: false, response: '❌ "Bơ?" = อะโวคาโด — Chị Linh หัวเราะ "น้องจะกินเฝออะโวคาโดเหรอ?" 🥑', hpChange: -10000 }
        ]
      },
      {
        npcLine: 'Có ăn thêm rau không?',
        npcLineThai: 'เอาผักเพิ่มไหมคะ?',
        prompt: 'เธอถามว่าเอาผักเพิ่มไหม — "เพิ่มผัก"',
        choices: [
          { text: 'Thêm rau ➡️➡️', correct: true, response: '✅ "Rau nhiều ăn cho khỏe!" เธอใส่ผักให้เต็มชาม 🥬', hpChange: 0 },
          { text: 'Thêm lau ➡️⬇️', correct: false, response: '❌ "Lau?" = เช็ด — "น้องจะเช็ดอะไร?" 😅', hpChange: -5000 }
        ]
      },
      {
        npcLine: 'Có muốn uống gì không?',
        npcLineThai: 'อยากดื่มอะไรไหมคะ?',
        prompt: 'คุณสั่ง "กาแฟใส่นม"',
        choices: [
          { text: 'Cà phê sữa ↘️➡️❓', correct: true, response: '✅ "Cà phê sữa đá!" — แก้วมาเย็นชื่นใจ', hpChange: -30000 },
          { text: 'Cà phê chữa ↘️➡️❓', correct: false, response: '❌ "Chữa?" = รักษา — "ร้านนี้ขายกาแฟ ไม่ใช่ยา" 😂', hpChange: -30000 }
        ]
      }
    ],
    success: '🎉 Chị Linh ยกนิ้วให้ — "Phở ngon không? Ăn nữa nhé!"',
    fail: '💸 สั่งพลาด! เสียทั้งเงินทั้งหน้า'
  },
  // ── WEEK 4 QUEST ───────────────────────────────────────────
  {
    id: 'w4-taxi',
    title: 'ถนนฮานอย',
    icon: '🚕',
    npc: 'Taxi Driver',
    npcEmoji: '🧑‍✈️',
    dayRange: [22, 23],
    context: 'คุณอยู่ในฮานอย old quarter รถติดมาก คนขับแท็กซี่ถามว่าคุณจะไปไหน...',
    hp: 200000,
    steps: [
      {
        npcLine: 'Đi đâu đây bác?',
        npcLineThai: 'จะไปไหนครับ?',
        prompt: 'คุณบอก "ไปสถานีรถไฟฮานอย"',
        choices: [
          { text: 'Đi ga Hà Nội ➡️➡️↘️⬇️', correct: true, response: '✅ "Ok bác!" คนขับเลี้ยวเข้าถนนหลัก', hpChange: 0 },
          { text: 'Đi gà Hà Nội ➡️↗️↘️⬇️', correct: false, response: '❌ "Gà?" = ไก่ — "ไปไก่ฮานอย?" คนขับหัวเราะคิกคัก 🐔', hpChange: -10000 }
        ]
      },
      {
        npcLine: 'Kẹt xe quá! Rẽ trái nhé?',
        npcLineThai: 'รถติดมาก! เลี้ยวซ้ายนะครับ?',
        prompt: 'รถติด คนขับถามว่า "เลี้ยวซ้าย" — คุณจะตอบ?',
        choices: [
          { text: 'Rẽ trái ↘️↗️', correct: true, response: '✅ Anh rẽซ้าย, ตัดผ่านตรอกเล็กๆ ถึงเร็วกว่า', hpChange: 0 },
          { text: 'Rẽ chai ↘️➡️', correct: false, response: '❌ "Chai?" = ขวด — รถเลี้ยวเข้าร้านขายขวดแตก 🍾 ต้องถอยกลับ', hpChange: -15000 }
        ]
      },
      {
        npcLine: 'Đến nơi rồi! 50k nhé.',
        npcLineThai: 'ถึงแล้วครับ! 50k',
        prompt: 'ถึงที่หมาย คนขับบอกว่า 50,000 VND',
        choices: [
          { text: 'Cảm ơn! ❓➡️', correct: true, response: '✅ "Cảm ơn bác!" คุณให้ 50k และเดินเข้าสถานี', hpChange: -50000 },
          { text: 'Cảm ổn ❓↘️', correct: false, response: '❌ "Ổn?" = "สบายดี" — "จะขอบคุณหรือบอกว่าสบายดีกันแน่" 😂', hpChange: -50000 }
        ]
      }
    ],
    success: '🎉 ถึงสถานีทันขบวนรถไฟเที่ยวสุดท้าย!',
    fail: '💸 หลงทาง! ค่าแท็กซี่พุ่งเป็น 2 เท่า'
  }
];

// ================================================================
// Helper: Get quest for a specific day
// ================================================================

function getQuestForDay(dayNum) {
  return QUESTS.find(q => dayNum >= q.dayRange[0] && dayNum <= q.dayRange[1]) || null;
}

// ================================================================
// Helper: Get words for a specific week/day
// ================================================================
function getWords(weekId, dayId) {
  const week = CURRICULUM.weeks.find(w => w.id === weekId);
  if (!week) return [];
  if (dayId) {
    const day = week.days.find(d => d.id === dayId);
    return day ? day.words : [];
  }
  // Return all words in week
  return week.days.flatMap(d => d.words);
}

// ================================================================
// Helper: Shuffle array (Fisher-Yates)
// ================================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ================================================================
// Helper: Pick n random items from array
// ================================================================
function pickRandom(arr, n) {
  const shuffled = shuffle(arr);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

// ================================================================
// Helper: Generate multiple-choice distractors
// ================================================================
function generateChoices(correctWord, allWords, count = 3) {
  // Get other words (different word, different meaning)
  const others = allWords.filter(w => w.word !== correctWord.word);
  const shuffled = shuffle(others);
  const wrong = shuffled.slice(0, count);

  // Mix correct with wrong and shuffle
  const choices = [
    { text: correctWord.meaning, word: correctWord.word, isCorrect: true },
    ...wrong.map(w => ({ text: w.meaning, word: w.word, isCorrect: false }))
  ];
  return shuffle(choices);
}

// ================================================================
// Helper: Get tone by name
// ================================================================
const TONES = [
  { id: 'ngang', emoji: '➡️', name: 'Ngang', desc: 'ราบ', thai: 'สามัญ' },
  { id: 'huyen', emoji: '↘️', name: 'Huyền', desc: 'ต่ำ', thai: 'เอก' },
  { id: 'sac', emoji: '↗️', name: 'Sắc', desc: 'สูง', thai: 'จัตวา' },
  { id: 'hoi', emoji: '❓', name: 'Hỏi', desc: 'ถาม', thai: 'ไม่มี!' },
  { id: 'nga', emoji: '〰️', name: 'Ngã', desc: 'น้ำ', thai: 'ไม่มี!' },
  { id: 'nang', emoji: '⬇️', name: 'Nặng', desc: 'กลั้น', thai: 'ไม่มี!' }
];
// ================================================================
// SHADOWING DATA — 10 practice sentences
// Listen → Repeat → Compare → Feedback
// ================================================================
const SHADOWING_DATA = [
  { 
    id: 1, vn: 'Tôi muốn đi chợ Bến Thành', 
    ipa: '/toj muən di tʃəː ɓen tʰaɲ/', 
    thai: 'ฉันอยากไปตลาดเบนถั่น',
    context: 'กำลังคุยกับเพื่อนว่าจะไปเที่ยวที่ไหน',
    difficulty: 'ง่าย'
  },
  { 
    id: 2, vn: 'Cho tôi một tô phở bò', 
    ipa: '/tʃɔ toj mot to fəː ɓɔ/', 
    thai: 'ขอเฝอเนื้อหนึ่งชาม',
    context: 'นั่งในร้านเฝอ กำลังสั่งอาหาร',
    difficulty: 'ง่าย'
  },
  { 
    id: 3, vn: 'Cái này bao nhiêu tiền?', 
    ipa: '/kaj naj ɓaw ɲiəw tiən/', 
    thai: 'อันนี้เท่าไหร่?',
    context: 'เดินดูของในร้าน อยากถามราคา',
    difficulty: 'ง่าย'
  },
  { 
    id: 4, vn: 'Làm ơn chỉ tôi đường ra ga', 
    ipa: '/lam ɜːn tʃi toj ɗɨəŋ za ɣa/', 
    thai: 'กรุณาช่วยบอกทางไปสถานีให้หน่อย',
    context: 'หลงทางอยู่ในฮานอย old quarter',
    difficulty: 'ปานกลาง'
  },
  { 
    id: 5, vn: 'Tôi muốn đặt hai vé xe lửa', 
    ipa: '/toj muən ɗat haj vɛ sɛ lɨːa/', 
    thai: 'ฉันต้องการจองตั๋วรถไฟสองใบ',
    context: 'กำลังซื้อตั๋วที่สถานี',
    difficulty: 'ปานกลาง'
  },
  { 
    id: 6, vn: 'Grab đến sân bay là bao nhiêu?', 
    ipa: '/ɣap ɗen sən ɓaj la ɓaw ɲiəw/', 
    thai: 'แกร็บไปสนามบินเท่าไหร่?',
    context: 'กำลังคุยกับไรเดอร์ Grab',
    difficulty: 'ปานกลาง'
  },
  { 
    id: 7, vn: 'Xin lỗi, quán này có mở cửa không?', 
    ipa: '/ʃin loj kwan naj kɔ mɜː kɨːa xəŋ/', 
    thai: 'ขอโทษครับ ร้านนี้เปิดหรือยัง?',
    context: 'ยืนหน้าร้านอาหาร อยากรู้ว่าเปิดรึยัง',
    difficulty: 'ปานกลาง'
  },
  { 
    id: 8, vn: 'Tôi muốn gọi một ly cà phê sữa đá', 
    ipa: '/toj muən ɣoj mot li kaː fɛ sɨːa ɗa/', 
    thai: 'ฉันอยากสั่งกาแฟนมเย็นหนึ่งแก้ว',
    context: 'นั่งในร้านกาแฟ กำลังเรียกพนักงาน',
    difficulty: 'ยาก'
  },
  { 
    id: 9, vn: 'Chị có thể nói chậm hơn được không ạ?', 
    ipa: '/tʃi kɔ tʰeː nɔj tʃəm hɜːn ɗɨək xəŋ a/', 
    thai: 'พี่พูดช้ากว่านี้ได้ไหมคะ?',
    context: 'กำลังคุยกับคนท้องถิ่น พูดเร็วเกินไป',
    difficulty: 'ยาก'
  },
  { 
    id: 10, vn: 'Cảm ơn anh đã giúp tôi tìm đường', 
    ipa: '/kam ɜːn ʔaɲ ɗa zuːp toj tim ɗɨəŋ/', 
    thai: 'ขอบคุณพี่ที่ช่วยฉันหาทาง',
    context: 'มีคนช่วยหาทางให้ พูดขอบคุณ',
    difficulty: 'ยาก'
  }
];
