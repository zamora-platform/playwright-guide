---
title: Tài nguyên học tập & công cụ bổ trợ
---

# 📚 Tài nguyên học tập & công cụ hỗ trợ

Trang này tổng hợp những tài nguyên, công cụ và liên kết hữu ích để bạn có thể học Playwright nhanh hơn, sâu hơn và dễ
áp dụng hơn.

---

## 🛠️ Công cụ hỗ trợ trong Playwright

### ▶️ Playwright Codegen – Ghi lại thao tác thành mã test

```bash
npx playwright codegen https://example.com
````

* Mở giao diện trình duyệt
* Bạn thao tác như người dùng thật (gõ, click…)
* Playwright sẽ **tự tạo mã kiểm thử tương ứng**

::: tip
Phù hợp với người mới chưa viết code: chỉ cần thao tác bằng chuột, Playwright sẽ sinh mã test.
:::

---

### 🎥 Trace Viewer – Xem lại test bị lỗi như video

Nếu test gặp lỗi, bạn có thể xem lại quá trình test như video:

```bash
npx playwright show-trace trace.zip
```

* Có thể mở lại từng bước
* Thấy rõ vấn đề test bị sai ở đâu

---

### 🧪 UI Mode – Giao diện chạy test trực quan

```bash
npm run test:ui
```

* Giao diện đồ họa để xem và chạy từng test
* Có thể chọn test, chạy lại, xem log
* Rất phù hợp để học và debug

---

## 📖 Tài liệu chính thức

* 🔗 [Trang chủ Playwright](https://playwright.dev/)
* 📚 [Tài liệu Playwright Test](https://playwright.dev/docs/intro)
* 🧪 [API của `@playwright/test`](https://playwright.dev/docs/api/class-playwright)

---

## 📦 Các plugin hữu ích

| Plugin                                                                                                      | Mô tả                                        |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| [Test Automation](https://plugins.jetbrains.com/plugin/20175-test-automation)                               | Hỗ trợ highlight và chạy test trong WebStorm |
| [VSCode Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) | Tích hợp Playwright vào VSCode               |

---

## 🧠 Tài nguyên cộng đồng

* [Stack Overflow – Playwright](https://stackoverflow.com/questions/tagged/playwright)
* [Playwright GitHub Discussions](https://github.com/microsoft/playwright/discussions)
* [Discord cộng đồng](https://discord.com/invite/playwright)

---

## 📌 Gợi ý học tiếp

* Làm quen với `beforeEach`, `test.describe()` để tổ chức test tốt hơn
* Viết test nâng cao: nhiều bước, nhiều dữ liệu
* Kết hợp Playwright với CI/CD (GitHub Actions)

---

➡️ Quay lại: [🔙 Danh sách bài học chính](./)
