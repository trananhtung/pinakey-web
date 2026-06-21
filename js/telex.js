// telex.js — bộ chuyển đổi Telex/VNI → tiếng Việt, chạy ngay trong trình duyệt.
// Đây là phiên bản trình diễn (demo) cho trang web, không phải lõi engine thật
// của PinaKey (lõi thật viết bằng Rust). Nó xử lý đủ tốt các trường hợp phổ biến
// để khách ghé thăm có thể tự gõ thử và thấy dấu thanh hiện ra.

(function (global) {
  "use strict";

  // ── Dữ liệu nền tảng ──────────────────────────────────────────────
  // Bảng đặt dấu thanh lên từng nguyên âm (chỉ số 0..5 = không/sắc/huyền/hỏi/ngã/nặng)
  const TONE_TABLE = {
    a: ["a", "á", "à", "ả", "ã", "ạ"],
    ă: ["ă", "ắ", "ằ", "ẳ", "ẵ", "ặ"],
    â: ["â", "ấ", "ầ", "ẩ", "ẫ", "ậ"],
    e: ["e", "é", "è", "ẻ", "ẽ", "ẹ"],
    ê: ["ê", "ế", "ề", "ể", "ễ", "ệ"],
    i: ["i", "í", "ì", "ỉ", "ĩ", "ị"],
    o: ["o", "ó", "ò", "ỏ", "õ", "ọ"],
    ô: ["ô", "ố", "ồ", "ổ", "ỗ", "ộ"],
    ơ: ["ơ", "ớ", "ờ", "ở", "ỡ", "ợ"],
    u: ["u", "ú", "ù", "ủ", "ũ", "ụ"],
    ư: ["ư", "ứ", "ừ", "ử", "ữ", "ự"],
    y: ["y", "ý", "ỳ", "ỷ", "ỹ", "ỵ"],
  };

  const BASE_VOWELS = "aăâeêioôơuưy";
  const TONE_KEYS = { s: 1, f: 2, r: 3, x: 4, j: 5 }; // Telex
  const VNI_TONE = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }; // VNI: 1..5 = sắc huyền hỏi ngã nặng

  function stripTone(ch) {
    for (const base in TONE_TABLE) {
      const idx = TONE_TABLE[base].indexOf(ch);
      if (idx >= 0) return base;
    }
    return ch;
  }

  // Giữ nguyên hoa/thường khi biến đổi
  function matchCase(src, target) {
    return src === src.toUpperCase() && src !== src.toLowerCase()
      ? target.toUpperCase()
      : target;
  }

  // ── Đặt dấu thanh lên đúng nguyên âm của một âm tiết ──────────────
  function placeTone(letters, tone) {
    if (!tone) return letters;
    const vowelIdx = [];
    for (let i = 0; i < letters.length; i++) {
      if (BASE_VOWELS.includes(stripTone(letters[i]).toLowerCase())) vowelIdx.push(i);
    }
    if (vowelIdx.length === 0) return letters;

    let target;
    const marked = vowelIdx.filter((i) => {
      const low = stripTone(letters[i]).toLowerCase();
      return "ăâêôơư".includes(low);
    });
    const hasCoda = vowelIdx[vowelIdx.length - 1] < letters.length - 1;

    // Ưu tiên ơ / ê, rồi tới các nguyên âm có mũ/móc khác
    const pref = marked.find((i) => "êơ".includes(stripTone(letters[i]).toLowerCase()));
    if (pref !== undefined) target = pref;
    else if (marked.length) target = marked[marked.length - 1];
    else if (vowelIdx.length === 1) target = vowelIdx[0];
    else if (hasCoda) target = vowelIdx[vowelIdx.length - 1];
    else if (vowelIdx.length === 2) {
      const pair =
        stripTone(letters[vowelIdx[0]]).toLowerCase() +
        stripTone(letters[vowelIdx[1]]).toLowerCase();
      // oa, oe, uy → dấu trên nguyên âm thứ hai; còn lại trên nguyên âm thứ nhất
      target = ["oa", "oe", "uy"].includes(pair) ? vowelIdx[1] : vowelIdx[0];
    } else {
      target = vowelIdx[1]; // âm tiết 3 nguyên âm mở → nguyên âm giữa
    }

    const ch = letters[target];
    const base = stripTone(ch).toLowerCase();
    if (TONE_TABLE[base]) {
      letters[target] = matchCase(ch, TONE_TABLE[base][tone]);
    }
    return letters;
  }

  // ── Chuyển một "từ" (chuỗi không khoảng trắng) ────────────────────
  function convertWord(word, method) {
    let letters = []; // các ký tự nền (đã gắn mũ/móc/đ), chưa có dấu thanh
    let tone = 0;
    let lastKey = "";

    const pushLiteral = (c) => letters.push(c);

    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      const low = c.toLowerCase();

      if (method === "vni") {
        if (/[0-9]/.test(c)) {
          applyVni(low);
          lastKey = low;
          continue;
        }
        pushLiteral(c);
        lastKey = low;
        continue;
      }

      // ── TELEX ──
      // Dấu thanh: s f r x j (gõ lặp để thoát thành chữ thường)
      if (low in TONE_KEYS) {
        const last = letters[letters.length - 1];
        const hasVowel = letters.some((l) =>
          BASE_VOWELS.includes(stripTone(l).toLowerCase())
        );
        // gõ lại đúng phím dấu vừa rồi → trả về chữ literal, xoá dấu
        if (lastKey === low && last && last.toLowerCase() === low) {
          tone = 0;
          lastKey = "";
          continue; // phím thứ hai bị "nuốt", chữ literal đã nằm sẵn
        }
        if (hasVowel) {
          tone = TONE_KEYS[low];
          lastKey = low;
          continue;
        }
        pushLiteral(c);
        lastKey = low;
        continue;
      }

      // z → xoá dấu thanh
      if (low === "z") {
        if (lastKey === "z") {
          pushLiteral(c);
        } else {
          tone = 0;
        }
        lastKey = low;
        continue;
      }

      // w → ă/ơ/ư (hoặc đứng một mình → ư)
      if (low === "w") {
        const last = letters[letters.length - 1];
        const lastLow = last ? stripTone(last).toLowerCase() : "";
        if (lastLow === "a") letters[letters.length - 1] = matchCase(last, "ă");
        else if (lastLow === "o") letters[letters.length - 1] = matchCase(last, "ơ");
        else if (lastLow === "u") letters[letters.length - 1] = matchCase(last, "ư");
        else if (lastLow === "ă" || lastLow === "ơ" || lastLow === "ư") {
          // gõ lại w → thoát về chữ + w
          const plain = { ă: "a", ơ: "o", ư: "u" }[lastLow];
          letters[letters.length - 1] = matchCase(last, plain);
          pushLiteral(c);
        } else {
          letters.push(matchCase(c, "ư"));
        }
        lastKey = low;
        continue;
      }

      // mũ: aa→â, ee→ê, oo→ô ; dd→đ
      const last = letters[letters.length - 1];
      const lastLow = last ? stripTone(last).toLowerCase() : "";
      if ((low === "a" || low === "e" || low === "o") && lastLow === low) {
        letters[letters.length - 1] = matchCase(last, { a: "â", e: "ê", o: "ô" }[low]);
        lastKey = low;
        continue;
      }
      if (low === "d" && lastLow === "d") {
        letters[letters.length - 1] = matchCase(last, "đ");
        lastKey = low;
        continue;
      }
      // gõ lại nguyên âm mũ → thoát: â + a → aa? (giữ đơn giản: thêm literal)
      pushLiteral(c);
      lastKey = low;
    }

    function applyVni(d) {
      const last = letters[letters.length - 1];
      const lastLow = last ? stripTone(last).toLowerCase() : "";
      if (d in VNI_TONE) {
        if (letters.some((l) => BASE_VOWELS.includes(stripTone(l).toLowerCase())))
          tone = VNI_TONE[d];
        return;
      }
      if (d === "6") {
        if ("aeo".includes(lastLow))
          letters[letters.length - 1] = matchCase(last, { a: "â", e: "ê", o: "ô" }[lastLow]);
        return;
      }
      if (d === "7") {
        if (lastLow === "o") letters[letters.length - 1] = matchCase(last, "ơ");
        else if (lastLow === "u") letters[letters.length - 1] = matchCase(last, "ư");
        return;
      }
      if (d === "8") {
        if (lastLow === "a") letters[letters.length - 1] = matchCase(last, "ă");
        return;
      }
      if (d === "9") {
        if (lastLow === "d") letters[letters.length - 1] = matchCase(last, "đ");
        return;
      }
    }

    letters = placeTone(letters, tone);
    return letters.join("");
  }

  // ── API công khai ─────────────────────────────────────────────────
  function transform(raw, method) {
    method = method || "telex";
    // tách giữ nguyên khoảng trắng/dấu câu cơ bản
    return raw
      .split(/(\s+)/)
      .map((tok) => (/\s+/.test(tok) ? tok : convertWord(tok, method)))
      .join("");
  }

  global.PinaKeyTelex = { transform };
})(window);
