// i18n.js — toàn bộ chuỗi nội dung song ngữ Việt/Anh.
// Mỗi phần tử DOM có thuộc tính data-i18n="khoá" sẽ được thay nội dung theo ngôn ngữ.

window.PINAKEY_I18N = {
  vi: {
    "nav.try": "Gõ thử",
    "nav.features": "Tính năng",
    "nav.install": "Cài đặt",
    "nav.story": "Câu chuyện",
    "nav.github": "GitHub",

    "hero.eyebrow": "Bộ gõ tiếng Việt cho fcitx5 · lõi viết bằng Rust thuần",
    "hero.title.a": "Gõ tiếng Việt,",
    "hero.title.b": "đúng từ con chữ.",
    "hero.lead":
      "PinaKey là bộ gõ Telex / VNI / VIQR cho fcitx5 — lõi thuần Rust, một addon C++ mỏng, và trải nghiệm gõ không gạch chân: chữ hiện thẳng như gõ thường.",
    "hero.cta.install": "Cài đặt ngay",
    "hero.cta.github": "Mã nguồn",
    "hero.demo.label": "Telex gõ vào",
    "hero.demo.result": "PinaKey hiện ra",
    "hero.copy": "Sao chép",
    "hero.copied": "Đã chép!",
    "hero.badge1": "100% Rust",
    "hero.badge2": "không cgo",
    "hero.badge3": "gõ không gạch chân",

    "try.eyebrow": "Sân chơi",
    "try.title": "Gõ thử ngay trong trình duyệt",
    "try.lead":
      "Không cần cài gì cả. Gõ kiểu Telex và xem dấu thanh tự rơi vào chữ — đúng như khi PinaKey chạy trên máy bạn.",
    "try.placeholder": "Gõ thử ở đây… ví dụ: Tieesng Vieejt",
    "try.method": "Kiểu gõ",
    "try.clear": "Xoá",
    "try.hint": "Thử các ví dụ:",
    "try.output.empty": "Kết quả sẽ hiện ở đây…",

    "features.eyebrow": "Vì sao PinaKey",
    "features.title": "Nhẹ, sạch, và thuần Việt từ trong lõi",
    "f1.title": "Lõi thuần Rust",
    "f1.body":
      "Toàn bộ lõi xử lý viết bằng Rust an toàn bộ nhớ, không cgo. Chỉ một addon C++ mỏng nối vào fcitx5 qua C-ABI.",
    "f2.title": "Telex · VNI · VIQR",
    "f2.body":
      "Ba kiểu gõ quen thuộc cùng nhiều biến thể dựng sẵn — kể cả Telex đơn giản (gõ dấu chặt). Biến đổi chính tả được kiểm thử kỹ.",
    "f3.title": "Gõ không gạch chân",
    "f3.body":
      "Chữ hiện thẳng như gõ thường, không preedit gạch chân. Dùng Surrounding Text với app GTK/Qt, hoặc daemon uinput bơm Backspace ở nơi khác.",
    "f4.title": "Emoji và Unicode",
    "f4.body":
      "Gõ :tên để tra emoji, :u<hex> để chèn ký tự Unicode bất kỳ. Chọn nhanh bằng số hoặc Enter.",
    "f5.title": "Từ điển và gõ tắt",
    "f5.body":
      "Từ điển chính tả “giải oan” cho từ mượn (kèm từ điển người dùng), gõ tắt macro, và live-reload khi bạn sửa file — không cần khởi động lại.",
    "f6.title": "Tinh ý theo ngữ cảnh",
    "f6.body":
      "Tự loại trừ app tiếng Anh (terminal, IDE…), tự bỏ qua ô mật khẩu, và có menu khay đổi kiểu gõ. Kèm giao diện thiết lập đồ họa thuần Rust.",

    "install.eyebrow": "Cài đặt",
    "install.title": "Dựng cho fcitx5 trong vài bước",
    "install.lead":
      "Cài các gói -dev của fcitx5 rồi chạy script cài — cargo tự build lõi Rust. Còn lại chỉ vài bước trong fcitx5-configtool.",
    "install.after.title": "Sau khi cài đặt",
    "install.after.1": "Mở <b>fcitx5-configtool</b> (hoặc chạy <code>fcitx5-configtool &</code>).",
    "install.after.2":
      "Thêm input method <b>PinaKey</b> (ngôn ngữ <b>Tiếng Việt</b>) — bỏ tick <i>“Only Current Language”</i> nếu chưa thấy.",
    "install.after.3":
      "Nhấn <b>Ctrl + Space</b> để chuyển, rồi gõ thử: <code>vieetj → việt</code>.",
    "install.tab.quick": "Cài nhanh",
    "install.tab.manual": "Thủ công (cmake)",
    "install.tab.gui": "Thiết lập (GUI)",
    "install.copy": "Sao chép",
    "install.copied": "Đã chép!",
    "install.req":
      "Yêu cầu: một bản Linux có fcitx5, Rust ≥ 1.85 và các gói -dev của fcitx5. Hỗ trợ cả Wayland lẫn X11. Đóng gói sẵn (deb/rpm/AUR/Nix) nằm trong thư mục packaging/.",
    "install.note.quick":
      "Script lo build, ctest, sudo cmake --install và khởi động lại fcitx5 cho bạn.",
    "install.note.gui":
      "Giao diện thiết lập đồ họa (egui) là tùy chọn — chỉnh kiểu gõ, bảng mã, macro và app loại trừ.",

    "story.eyebrow": "Về cái tên",
    "story.title": "Tri ân Francisco de Pina",
    "story.p1":
      "PinaKey mang tên Francisco de Pina (1585–1625), giáo sĩ Dòng Tên người Bồ Đào Nha — người đầu tiên La-tinh hoá tiếng Việt một cách có hệ thống tại Thanh Chiêm – Hội An.",
    "story.p2":
      "Ông đặt nền móng cho chữ Quốc Ngữ, thứ chữ mà mọi bàn phím tiếng Việt hôm nay đều gõ, và là thầy dạy tiếng Việt cho Alexandre de Rhodes. Hậu tố “Key” đánh dấu đây là một bộ gõ.",
    "story.caption": "Francisco de Pina — trong tranh khắc cùng Alexandre de Rhodes",
    "time.1585": "Pina sinh ra ở Bồ Đào Nha",
    "time.1617": "Tới Đàng Trong, bắt đầu ghi tiếng Việt bằng chữ La-tinh",
    "time.today": "Bạn gõ Quốc Ngữ — bằng PinaKey",

    "cta.title": "Sẵn sàng gõ tiếng Việt thật mượt?",
    "cta.lead": "Dựng cho fcitx5 từ mã nguồn. Mở mã bất cứ lúc nào.",
    "cta.install": "Cài đặt ngay",
    "cta.star": "Gắn sao trên GitHub",

    "footer.tagline": "Bộ gõ tiếng Việt thuần Rust cho fcitx5 trên Linux.",
    "footer.made": "Làm bằng ♥ cho cộng đồng Linux Việt.",
    "footer.repo": "Kho mã",
    "footer.releases": "Bản phát hành",
    "footer.arch": "Kiến trúc",
    "footer.license": "Giấy phép",
  },

  en: {
    "nav.try": "Try it",
    "nav.features": "Features",
    "nav.install": "Install",
    "nav.story": "Story",
    "nav.github": "GitHub",

    "hero.eyebrow": "A Vietnamese input method for fcitx5 · core written in pure Rust",
    "hero.title.a": "Type Vietnamese,",
    "hero.title.b": "true to the letter.",
    "hero.lead":
      "PinaKey is a Telex / VNI / VIQR input method for fcitx5 — a pure-Rust core, a thin C++ addon, and underline-free typing: text appears inline, just like normal typing.",
    "hero.cta.install": "Install now",
    "hero.cta.github": "Source code",
    "hero.demo.label": "You type (Telex)",
    "hero.demo.result": "PinaKey writes",
    "hero.copy": "Copy",
    "hero.copied": "Copied!",
    "hero.badge1": "100% Rust",
    "hero.badge2": "no cgo",
    "hero.badge3": "no underline",

    "try.eyebrow": "Playground",
    "try.title": "Try it right in your browser",
    "try.lead":
      "Nothing to install. Type the Telex way and watch the tone marks drop into place — exactly how PinaKey behaves on your machine.",
    "try.placeholder": "Type here… e.g. Tieesng Vieejt",
    "try.method": "Method",
    "try.clear": "Clear",
    "try.hint": "Try these:",
    "try.output.empty": "Your Vietnamese appears here…",

    "features.eyebrow": "Why PinaKey",
    "features.title": "Light, clean, Vietnamese to the core",
    "f1.title": "A pure-Rust core",
    "f1.body":
      "The whole processing core is memory-safe Rust, no cgo. Only a thin C++ addon bridges into fcitx5 over a C-ABI.",
    "f2.title": "Telex · VNI · VIQR",
    "f2.body":
      "Three familiar typing styles plus prebuilt variants — including simple Telex (strict tone keys). Spelling transforms are thoroughly tested.",
    "f3.title": "No underline",
    "f3.body":
      "Text appears inline with no preedit underline. It uses Surrounding Text on GTK/Qt apps, or a uinput daemon that injects Backspace elsewhere.",
    "f4.title": "Emoji and Unicode",
    "f4.body":
      "Type :name to look up emoji, :u<hex> to insert any Unicode character. Pick with a number key or Enter.",
    "f5.title": "Dictionary and macros",
    "f5.body":
      "A spelling dictionary that clears loanwords (plus your own user dictionary), macro shortcuts, and live-reload when you edit files — no restart needed.",
    "f6.title": "Context-aware",
    "f6.body":
      "It skips English apps (terminals, IDEs…), ignores password fields, and offers a tray menu to switch styles. A pure-Rust settings GUI is included.",

    "install.eyebrow": "Install",
    "install.title": "Build for fcitx5 in a few steps",
    "install.lead":
      "Install the fcitx5 -dev packages, then run the install script — cargo builds the Rust core for you. The rest is just a few steps in fcitx5-configtool.",
    "install.after.title": "After installing",
    "install.after.1": "Open <b>fcitx5-configtool</b> (or run <code>fcitx5-configtool &</code>).",
    "install.after.2":
      "Add the <b>PinaKey</b> input method (language <b>Vietnamese</b>) — untick <i>“Only Current Language”</i> if you don't see it.",
    "install.after.3":
      "Press <b>Ctrl + Space</b> to switch, then try typing: <code>vieetj → việt</code>.",
    "install.tab.quick": "Quick install",
    "install.tab.manual": "Manual (cmake)",
    "install.tab.gui": "Settings (GUI)",
    "install.copy": "Copy",
    "install.copied": "Copied!",
    "install.req":
      "Requires: a Linux with fcitx5, Rust ≥ 1.85 and the fcitx5 -dev packages. Works on both Wayland and X11. Prebuilt packages (deb/rpm/AUR/Nix) live in the packaging/ folder.",
    "install.note.quick":
      "The script handles build, ctest, sudo cmake --install and restarting fcitx5 for you.",
    "install.note.gui":
      "The graphical settings app (egui) is optional — tweak typing style, charset, macros and excluded apps.",

    "story.eyebrow": "About the name",
    "story.title": "In honour of Francisco de Pina",
    "story.p1":
      "PinaKey is named after Francisco de Pina (1585–1625), a Portuguese Jesuit — the first to systematically romanise Vietnamese, in Thanh Chiêm – Hội An.",
    "story.p2":
      "He laid the foundation of chữ Quốc Ngữ, the script every Vietnamese keyboard types today, and taught Vietnamese to Alexandre de Rhodes. The “Key” suffix marks this as an input method.",
    "story.caption": "Francisco de Pina — in an engraving alongside Alexandre de Rhodes",
    "time.1585": "Pina is born in Portugal",
    "time.1617": "Arrives in Đàng Trong, begins writing Vietnamese in Latin script",
    "time.today": "You type Quốc Ngữ — with PinaKey",

    "cta.title": "Ready to type Vietnamese, smoothly?",
    "cta.lead": "Build it for fcitx5 from source. Read the source anytime.",
    "cta.install": "Install now",
    "cta.star": "Star on GitHub",

    "footer.tagline": "A pure-Rust Vietnamese input method for fcitx5 on Linux.",
    "footer.made": "Made with ♥ for the Vietnamese Linux community.",
    "footer.repo": "Repository",
    "footer.releases": "Releases",
    "footer.arch": "Architecture",
    "footer.license": "Licence",
  },
};
