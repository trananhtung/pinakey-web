// main.js — điều khiển tương tác của trang: ngôn ngữ, giao diện sáng/tối,
// nút sao chép, tab cài đặt, hoạt cảnh hero, và sân chơi gõ thử.

(function () {
  "use strict";

  const I18N = window.PINAKEY_I18N;
  const Telex = window.PinaKeyTelex;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── Ngôn ngữ ──────────────────────────────────────────────────────
  let lang = localStorage.getItem("pk-lang") || "vi";

  function applyLang(next) {
    lang = next;
    localStorage.setItem("pk-lang", lang);
    document.documentElement.setAttribute("lang", lang);
    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    // Chuỗi có markup (in đậm, <code>…) — render bằng innerHTML.
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.langBtn === lang));
    });
  }

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.langBtn));
  });

  // ── Giao diện sáng / tối ─────────────────────────────────────────
  const storedTheme = localStorage.getItem("pk-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let theme = storedTheme || (systemDark ? "dark" : "light");

  function applyTheme(next) {
    theme = next;
    localStorage.setItem("pk-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Chuyển sáng" : "Chuyển tối");
      btn.textContent = theme === "dark" ? "☀" : "☾";
    }
  }
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle)
    themeToggle.addEventListener("click", () =>
      applyTheme(theme === "dark" ? "light" : "dark")
    );

  // ── Nút sao chép ─────────────────────────────────────────────────
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const sel = btn.getAttribute("data-copy");
      const src = document.querySelector(sel);
      if (!src) return;
      const text = src.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
      } catch (_) {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      const labelEl = btn.querySelector("[data-copy-label]") || btn;
      const dict = I18N[lang];
      const doneKey = btn.getAttribute("data-copy-done") || "hero.copied";
      const idleKey = btn.getAttribute("data-copy-idle") || "hero.copy";
      labelEl.textContent = dict[doneKey];
      btn.classList.add("is-copied");
      setTimeout(() => {
        labelEl.textContent = dict[idleKey];
        btn.classList.remove("is-copied");
      }, 1600);
    });
  });

  // ── Tab cài đặt ──────────────────────────────────────────────────
  const tabs = document.querySelectorAll("[data-tab]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const name = tab.dataset.tab;
      tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
      document.querySelectorAll("[data-panel]").forEach((p) => {
        p.hidden = p.dataset.panel !== name;
      });
    });
  });

  // ── Sân chơi gõ thử ──────────────────────────────────────────────
  const input = document.getElementById("play-input");
  const output = document.getElementById("play-output");
  let method = "telex";

  function renderPlayground() {
    const dict = I18N[lang];
    const raw = input ? input.value : "";
    if (!raw) {
      output.textContent = dict["try.output.empty"];
      output.classList.add("is-empty");
      return;
    }
    output.textContent = Telex.transform(raw, method);
    output.classList.remove("is-empty");
  }

  if (input) input.addEventListener("input", renderPlayground);

  document.querySelectorAll("[data-method]").forEach((btn) => {
    btn.addEventListener("click", () => {
      method = btn.dataset.method;
      document
        .querySelectorAll("[data-method]")
        .forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      renderPlayground();
    });
  });

  const clearBtn = document.getElementById("play-clear");
  if (clearBtn)
    clearBtn.addEventListener("click", () => {
      input.value = "";
      renderPlayground();
      input.focus();
    });

  document.querySelectorAll("[data-example]").forEach((chip) => {
    chip.addEventListener("click", () => {
      if (!input) return;
      method = "telex";
      document
        .querySelectorAll("[data-method]")
        .forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.method === "telex")));
      input.value = chip.dataset.example;
      renderPlayground();
      input.focus();
    });
  });

  // ── Hoạt cảnh hero: gõ Telex → dấu thanh rơi vào chữ ─────────────
  const heroIn = document.getElementById("hero-telex");
  const heroOut = document.getElementById("hero-viet");
  const heroCaret = document.getElementById("hero-caret");

  const HERO_SEQ = [
    { telex: "Tieesng Vieejt", viet: "Tiếng Việt" },
    { telex: "chuwx Quoosc Nguwx", viet: "chữ Quốc Ngữ" },
    { telex: "Phong vij quee huwowng", viet: "Phong vị quê hương" },
    { telex: "gox muwowtj", viet: "gõ mượt" },
  ];

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async function runHero() {
    if (!heroIn || !heroOut) return;
    if (prefersReduced) {
      heroIn.textContent = "Tieesng Vieejt";
      heroOut.textContent = "Tiếng Việt";
      if (heroCaret) heroCaret.style.display = "none";
      return;
    }
    // vòng lặp vô hạn, nhẹ nhàng
    // eslint-disable-next-line no-constant-condition
    while (true) {
      for (const step of HERO_SEQ) {
        // gõ từng phím vào ô Telex
        heroIn.textContent = "";
        heroOut.textContent = "";
        for (let i = 0; i < step.telex.length; i++) {
          heroIn.textContent += step.telex[i];
          await sleep(70 + Math.round(60 * Math.abs(Math.sin(i))));
        }
        await sleep(280);
        // "biến đổi" — dấu thanh rơi vào chữ, từng ký tự một
        const target = step.viet;
        for (let i = 0; i < target.length; i++) {
          heroOut.textContent = target.slice(0, i + 1);
          const span = document.createElement("span");
          // hiệu ứng rơi cho ký tự cuối
          heroOut.textContent = target.slice(0, i);
          span.textContent = target[i];
          span.className = "drop";
          heroOut.appendChild(span);
          await sleep(90);
        }
        heroOut.textContent = target;
        await sleep(1600);
      }
    }
  }

  // ── Lộ dần khi cuộn ──────────────────────────────────────────────
  function setupReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  // ── Cuộn mượt cho nav neo ────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    });
  });

  // ── Header co lại khi cuộn ───────────────────────────────────────
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ── Khởi động ────────────────────────────────────────────────────
  applyTheme(theme);
  applyLang(lang);
  renderPlayground();
  setupReveal();
  runHero();
})();
