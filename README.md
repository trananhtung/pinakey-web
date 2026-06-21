# PinaKey — Trang giới thiệu (landing page)

Trang web giới thiệu **[PinaKey](https://github.com/trananhtung/pinakey)** — bộ gõ
tiếng Việt (Telex / VNI / VIQR) cho Linux, IBus và fcitx5, viết hoàn toàn bằng Rust thuần.

🌐 **Xem trực tiếp:** https://trananhtung.github.io/pinakey-web/

## Đặc điểm trang

- **Song ngữ Việt / Anh** — nút chuyển VI/EN, ghi nhớ lựa chọn.
- **Giao diện sáng/tối** — "giấy dó" và "mực nho", tự theo hệ thống.
- **Gõ thử ngay trong trình duyệt** — engine Telex/VNI mini bằng JavaScript;
  khách tự gõ và thấy dấu thanh rơi vào chữ.
- **Hoạt cảnh hero** — chuỗi Telex biến đổi thành tiếng Việt theo thời gian thực.
- Tôn trọng `prefers-reduced-motion`, có focus bàn phím, responsive tới mobile.

## Phong cách "Mực & Son"

Kết hợp di sản chữ Quốc Ngữ (giấy dó, mực nho, son mài đỏ, nhũ vàng) với chất
terminal hiện đại. Chữ tiêu đề dùng *Playfair Display*, thân dùng *Be Vietnam Pro*,
mã dùng *JetBrains Mono*.

## Công nghệ

Static thuần — chỉ HTML, CSS và JavaScript, **không cần build step**.

```
index.html        cấu trúc trang
styles.css        toàn bộ thẩm mỹ (biến CSS cho sáng/tối)
js/i18n.js        chuỗi nội dung song ngữ
js/telex.js       engine gõ thử (demo) Telex/VNI
js/main.js        tương tác: ngôn ngữ, theme, copy, tab, hoạt cảnh
assets/           chân dung, favicon, ảnh OG
```

> Engine gõ trong `js/telex.js` chỉ là bản trình diễn cho trang web. Lõi engine
> thật của PinaKey viết bằng Rust, nằm ở [repo chính](https://github.com/trananhtung/pinakey).

## Chạy thử cục bộ

Mở `index.html` bằng trình duyệt, hoặc phục vụ tĩnh:

```sh
python3 -m http.server 8000   # rồi mở http://localhost:8000
```

## Triển khai

Đẩy lên nhánh `main`; GitHub Pages phục vụ trực tiếp từ thư mục gốc. File `.nojekyll`
bảo GitHub bỏ qua Jekyll và phục vụ nguyên trạng.

## Giấy phép

[MIT](LICENSE).
