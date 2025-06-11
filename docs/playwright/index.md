---
title: Giới thiệu Playwright
---

# 🧪 Giới thiệu về kiểm thử tự động với Playwright

## 🎭 Playwright là gì?

**Playwright** là một công cụ giúp bạn **tự động mở trang web, bấm nút, nhập dữ liệu, và kiểm tra xem mọi thứ có hoạt
động đúng không** — giống như một người dùng thực sự.

> 🧠 Hãy tưởng tượng bạn có một “robot” mở website, làm thao tác thay bạn, và báo lại nếu có gì sai.

## 🤖 Tại sao cần kiểm thử tự động?

- ✅ Tiết kiệm thời gian (không cần kiểm tra thủ công từng lần).
- ✅ Tránh bỏ sót lỗi (máy làm thì không mệt mỏi).
- ✅ Lặp lại được nhiều lần (mỗi lần ra phiên bản mới đều có thể test lại tự động).

---

## ⚔️ So sánh Playwright với các công cụ khác?

| Công cụ        | Ưu điểm chính                            | Nhược điểm chính                         |
|----------------|------------------------------------------|------------------------------------------|
| **Selenium**   | Phổ biến, hỗ trợ nhiều trình duyệt       | Cài đặt phức tạp, chạy chậm              |
| **Cypress**    | Dễ dùng, tài liệu tốt                    | Chạy tốt với Chrome, hạn chế trình duyệt |
| **Playwright** | Dễ dùng, hỗ trợ nhiều trình duyệt, nhanh | Còn mới hơn nên tài liệu ít hơn Selenium |

---

## 📌 Vì sao bạn nên chọn Playwright?

- ✅ **Hỗ trợ Chrome, Firefox, Safari** chỉ với một dòng lệnh.
- ✅ **Rất dễ cài đặt**, chạy ngay được.
- ✅ **Có công cụ tạo test tự động** (chỉ cần bấm và thao tác như người dùng).
- ✅ **Hỗ trợ AI rất tốt** – bạn có thể viết test bằng cách mô tả bằng tiếng Việt!

> 💬 Ví dụ: "Tôi muốn kiểm tra xem khi nhập sai mật khẩu thì sẽ hiện thông báo lỗi." → ChatGPT sẽ viết test Playwright
> cho bạn!

---

## 👶 Ai nên đọc tài liệu này?

- Bạn làm kiểm thử phần mềm (tester) nhưng chưa biết lập trình.
- Bạn muốn kiểm tra giao diện web mà không phụ thuộc lập trình viên.
- Bạn tò mò về tự động hóa test, nhưng sợ code.

## 🧰 Tôi cần chuẩn bị những gì?

- Máy tính đã cài Node.js (bạn sẽ được hướng dẫn cụ thể)
- **Một công cụ để chạy lệnh**: Terminal / Command Prompt / Terminal tích hợp trong IDE
- ✅ **Khuyên dùng**: [WebStorm](https://www.jetbrains.com/webstorm/) – nay đã miễn phí cho mọi người!

::: tip Tại sao nên dùng WebStorm?

- WebStorm có gợi ý thông minh khi viết test
- Có sẵn terminal tích hợp
- Tự kiểm tra lỗi khi viết sai cú pháp
- Hỗ trợ cực tốt cho Playwright và TypeScript
  :::

---
> 💡 Bạn vẫn có thể dùng VSCode nếu quen, nhưng WebStorm hiện đã miễn phí và rất mạnh mẽ cho người mới học.

> ✅ Đừng lo nếu bạn chưa từng viết dòng mã nào — mọi bước sẽ được hướng dẫn rất chi tiết và có thể copy-paste là chạy!

➡️ Tiếp theo: [Cài đặt môi trường để viết test với Playwright](./setup.md)
