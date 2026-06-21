// i18n.js — toàn bộ chuỗi nội dung song ngữ Việt/Anh.
// Mỗi phần tử DOM có thuộc tính data-i18n="khoá" sẽ được thay nội dung theo ngôn ngữ.

window.PINAKEY_I18N = {
  vi: {
    "nav.try": "Gõ thử",
    "nav.features": "Tính năng",
    "nav.install": "Cài đặt",
    "nav.story": "Câu chuyện",
    "nav.github": "GitHub",

    "hero.eyebrow": "Bộ gõ tiếng Việt cho Linux · viết bằng Rust thuần",
    "hero.title.a": "Gõ tiếng Việt,",
    "hero.title.b": "đúng từ con chữ.",
    "hero.lead":
      "PinaKey là bộ gõ Telex / VNI / VIQR cho IBus và fcitx5 — không cgo, không phụ thuộc Go, chỉ Rust và những con dấu thanh rơi đúng chỗ.",
    "hero.cta.install": "Cài đặt ngay",
    "hero.cta.github": "Mã nguồn",
    "hero.demo.label": "Telex gõ vào",
    "hero.demo.result": "PinaKey hiện ra",
    "hero.copy": "Sao chép",
    "hero.copied": "Đã chép!",
    "hero.badge1": "100% Rust",
    "hero.badge2": "không cgo",
    "hero.badge3": "IBus + fcitx5",

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
    "f1.title": "Thuần Rust, không cgo",
    "f1.body":
      "Toàn bộ engine viết bằng Rust an toàn bộ nhớ. Không nhúng Go, không liên kết C — một binary gọn chạy thẳng.",
    "f2.title": "Telex · VNI · VIQR",
    "f2.body":
      "Ba kiểu gõ quen thuộc, biến đổi chính tả và kiểm tra âm tiết được phủ bởi 47 bài test hành vi.",
    "f3.title": "IBus và fcitx5",
    "f3.body":
      "Giao thức IBus hiện thực trên zbus; frontend fcitx5 dùng chung lõi engine qua C-ABI. Một lõi, hai khung.",
    "f4.title": "Nhẹ và nhanh",
    "f4.body":
      "Lõi đơn luồng chạy sau một actor qua channel. Khởi động tức thì, ngốn ít RAM, không daemon nặng nề.",
    "f5.title": "Emoji và macro",
    "f5.body": "Trie emoji cùng bảng macro để bung gõ tắt — sẵn sàng mở rộng theo nhu cầu.",
    "f6.title": "Mã nguồn mở",
    "f6.body":
      "Giấy phép tự do, workspace nhiều crate rõ ràng, kiểm thử nghiêm ngặt. Đọc được, sửa được, tin được.",

    "install.eyebrow": "Cài đặt",
    "install.title": "Một dòng lệnh là xong",
    "install.lead":
      "Trình cài tự nhận diện CPU (x86_64 hoặc aarch64), tải binary bản mới nhất và đăng ký với bộ gõ. Nhấn Super + Space để chuyển sang PinaKey.",
    "install.tab.ibus": "IBus (nhanh nhất)",
    "install.tab.fcitx": "fcitx5",
    "install.tab.source": "Từ mã nguồn",
    "install.copy": "Sao chép",
    "install.copied": "Đã chép!",
    "install.req":
      "Yêu cầu: một bản Linux có IBus (GNOME mặc định đã có), lệnh curl và quyền sudo. Gỡ cài bất cứ lúc nào bằng cờ --uninstall.",
    "install.note.fcitx":
      "Frontend fcitx5 đang trên nhánh phát triển — dựng từ thư mục fcitx5/ trong repo.",

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
    "cta.lead": "Cài trong một dòng. Mở mã nguồn bất cứ lúc nào.",
    "cta.install": "Cài đặt ngay",
    "cta.star": "Gắn sao trên GitHub",

    "footer.tagline": "Bộ gõ tiếng Việt thuần Rust cho Linux.",
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

    "hero.eyebrow": "A Vietnamese input method for Linux · written in pure Rust",
    "hero.title.a": "Type Vietnamese,",
    "hero.title.b": "true to the letter.",
    "hero.lead":
      "PinaKey is a Telex / VNI / VIQR input method for IBus and fcitx5 — no cgo, no Go runtime, just Rust and tone marks that land exactly where they belong.",
    "hero.cta.install": "Install now",
    "hero.cta.github": "Source code",
    "hero.demo.label": "You type (Telex)",
    "hero.demo.result": "PinaKey writes",
    "hero.copy": "Copy",
    "hero.copied": "Copied!",
    "hero.badge1": "100% Rust",
    "hero.badge2": "no cgo",
    "hero.badge3": "IBus + fcitx5",

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
    "f1.title": "Pure Rust, no cgo",
    "f1.body":
      "The whole engine is memory-safe Rust. No embedded Go, no C linkage — one tidy binary that just runs.",
    "f2.title": "Telex · VNI · VIQR",
    "f2.body":
      "Three familiar typing styles. Spelling transforms and syllable checks are covered by 47 behavioural tests.",
    "f3.title": "IBus and fcitx5",
    "f3.body":
      "IBus is implemented over zbus; the fcitx5 frontend shares the same engine core via a C-ABI. One core, two frames.",
    "f4.title": "Light and fast",
    "f4.body":
      "A single-threaded core runs behind a channel actor. Instant start, tiny memory footprint, no heavy daemon.",
    "f5.title": "Emoji and macros",
    "f5.body": "An emoji trie and macro table for shortcut expansion — ready to grow with your needs.",
    "f6.title": "Open source",
    "f6.body":
      "A free licence, a clear multi-crate workspace, rigorous tests. Readable, hackable, trustworthy.",

    "install.eyebrow": "Install",
    "install.title": "One line and you're done",
    "install.lead":
      "The installer detects your CPU (x86_64 or aarch64), downloads the latest binary and registers it with the input framework. Press Super + Space to switch to PinaKey.",
    "install.tab.ibus": "IBus (fastest)",
    "install.tab.fcitx": "fcitx5",
    "install.tab.source": "From source",
    "install.copy": "Copy",
    "install.copied": "Copied!",
    "install.req":
      "Requires: a Linux with IBus (default on GNOME), curl and sudo. Uninstall anytime with the --uninstall flag.",
    "install.note.fcitx":
      "The fcitx5 frontend lives on a development branch — build it from the fcitx5/ folder in the repo.",

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
    "cta.lead": "Install in one line. Read the source anytime.",
    "cta.install": "Install now",
    "cta.star": "Star on GitHub",

    "footer.tagline": "A pure-Rust Vietnamese input method for Linux.",
    "footer.made": "Made with ♥ for the Vietnamese Linux community.",
    "footer.repo": "Repository",
    "footer.releases": "Releases",
    "footer.arch": "Architecture",
    "footer.license": "Licence",
  },
};
