---
title: Dùng AI để tạo test dễ dàng hơn
---

# 🤖 Dùng AI để tạo test Playwright

Bạn không cần biết lập trình để viết test.  
Chỉ cần mô tả bằng ngôn ngữ tự nhiên – phần còn lại, AI sẽ làm giúp bạn!

---

## 🧠 Cách hoạt động

1. Mở một công cụ AI hỗ trợ Playwright (ví dụ: ChatGPT, Copilot, Grok, Gemini hay các công cụ AI khác).
2. Gõ mô tả hành vi bạn muốn kiểm thử, ví dụ:
   > Tôi muốn kiểm tra rằng khi nhập sai mật khẩu, trang web hiển thị thông báo lỗi.

3. AI sẽ trả lại cho bạn đoạn mã test Playwright.  
   Bạn chỉ cần **copy và dán vào file `.spec.ts`** để chạy ngay.

---

## ✍️ Ví dụ 1: Kiểm tra đăng nhập sai

### 🎯 Mô tả cho AI:

```
Tôi muốn viết một test với Playwright để kiểm tra:
- Mở trang https://example.com/login
- Nhập tên người dùng là "admin"
- Nhập mật khẩu sai là "sai123"
- Bấm nút "Đăng nhập"
- Kiểm tra rằng có hiển thị dòng chữ "Sai tên đăng nhập hoặc mật khẩu"
```

### ✅ Kết quả AI sinh ra:

```ts
import {test, expect} from '@playwright/test';

test('hiện thông báo lỗi khi đăng nhập sai', async ({page}) => {
    await page.goto('https://example.com/login');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'sai123');
    await page.click('text=Đăng nhập');
    await expect(page.locator('.error-message')).toHaveText('Sai tên đăng nhập hoặc mật khẩu');
});
```

### 📁 Cách dùng:

- Tạo file mới trong thư mục `tests/`, ví dụ `login-error.spec.ts`
- Dán đoạn mã vào
- Chạy với lệnh:

```bash
npm run test
```

---

## ✍️ Ví dụ 2: Kiểm tra điều hướng sau khi đăng nhập thành công

### 🎯 Mô tả cho AI:

```
Test Playwright:
- Truy cập trang https://example.com/login
- Nhập tài khoản hợp lệ
- Sau khi đăng nhập, chuyển sang trang /dashboard
```

### ✅ Kết quả:

```ts
test('đăng nhập thành công chuyển hướng về dashboard', async ({page}) => {
    await page.goto('https://example.com/login');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'matkhau123');
    await page.click('text=Đăng nhập');
    await expect(page).toHaveURL(/\/dashboard/);
});
```
---
## 🖼️ Gửi hình ảnh giao diện trang web cho AI

> Bạn có thể **gửi ảnh chụp màn hình** của trang web cho AI (ví dụ ChatGPT) và yêu cầu viết test dựa vào đó.

### Ví dụ:

* **Gửi ảnh**: giao diện trang đăng nhập
* **Mô tả thêm**: “Tôi muốn kiểm tra khi nhập sai mật khẩu thì hiện lỗi”

AI sẽ:

* Nhìn vào ảnh
* Xác định vị trí nút, ô nhập
* Sinh ra đoạn test phù hợp với nội dung bạn thấy trên giao diện

::: tip
Nếu bạn không biết tên `id` hay `class`, chỉ cần chụp màn hình và mô tả. AI có thể giúp bạn dự đoán đúng selector để dùng trong test.
:::

---

## 🧬 Gửi mã HTML để AI hỗ trợ chọn đúng phần tử

Khi test không chạy đúng, có thể do **bạn đang chọn sai phần tử** (selector).
Giải pháp: **copy mã HTML của phần tử đó và gửi cho AI**, ví dụ:

### 🔍 HTML bạn copy từ trình duyệt:

```html
<button class="btn-primary" data-testid="submit-button">Đăng nhập</button>
```

### 💬 Bạn nhờ AI:

> Đây là nút đăng nhập trong trang của tôi. Hãy viết cách chọn đúng phần tử này trong Playwright.

### ✅ AI có thể trả lời:

```ts
await page.getByTestId('submit-button').click();
// hoặc:
await page.locator('button:has-text("Đăng nhập")').click();
```

📌 Cách này giúp test **ổn định hơn**, tránh lỗi do dùng selector không chính xác.


---


## 💡 Lưu ý khi dùng AI:

| Mẹo                        | Lợi ích                             |
|----------------------------|-------------------------------------|
| Mô tả càng rõ ràng         | AI càng sinh ra test đúng ý bạn     |
| Dùng đúng tên nút/trường   | Để AI tạo đúng selector             |
| Có thể nói bằng tiếng Việt | Không cần viết mô tả bằng tiếng Anh |

---

## 🚀 Mở rộng nâng cao (khi đã quen):

- Giao cho AI viết test dạng `data-driven` (nhiều bộ dữ liệu)
- Nhờ AI viết `beforeEach` để không lặp code
- Dùng AI gợi ý cách viết test dễ bảo trì hơn

---

## 🧪 Tổng kết

- ✅ Không cần viết code từ đầu
- ✅ Chỉ cần mô tả bằng tiếng Việt
- ✅ Copy, dán và chạy được ngay
- ✅ Tiết kiệm thời gian – học nhanh hơn

---

➡️ Tiếp theo (tuỳ chọn):  
[📚 Tài nguyên học thêm & mẹo nâng cao](./selectors.md)