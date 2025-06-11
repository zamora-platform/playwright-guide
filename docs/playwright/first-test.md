---
title: Viết test đầu tiên bằng Playwright
---

# ✍️ Viết test đầu tiên bằng Playwright

Trong phần này, bạn sẽ:

- Tạo một file test mới bên trong thư mục `tests/`
- Viết đoạn kiểm thử đơn giản
- Thêm script để chạy test dễ dàng hơn
- Hiểu cách chạy test bằng 2 cách: **dòng lệnh** và **giao diện (UI mode)**

---

## 📄 Bước 1: Tạo file test mới

Trong WebStorm:

1. Tìm thư mục `tests/` (được tạo sẵn nếu bạn đã dùng `npm init playwright@latest`)
2. Nhấp chuột phải → **New → File**
3. Đặt tên là: `my-first-test.spec.ts`

> 📌 Tên file nên kết thúc bằng `.spec.ts` để Playwright nhận diện là một file kiểm thử.

---

## ✍️ Bước 2: Dán nội dung test vào

```ts
import { test, expect } from '@playwright/test';

test('Trang Google có tiêu đề đúng', async ({ page }) => {
  // Mở trang Google
  await page.goto('https://www.google.com');

  // Kiểm tra tiêu đề trang có chứa từ "Google"
  await expect(page).toHaveTitle(/Google/);
});
```

---

## 🧠 Giải thích ngắn gọn

| Dòng             | Ý nghĩa                                                           |
|------------------|-------------------------------------------------------------------|
| `import ...`     | Gọi Playwright vào để dùng                                        |
| `test(...)`      | Định nghĩa một bài test                                           |
| `page.goto(...)` | Mở trang web                                                      |
| `expect(...)`    | Kiểm tra điều kiện mong đợi (ở đây là tiêu đề có chứa chữ Google) |

---

## ⚙️ Bước 3: Thêm script vào `package.json`

Mở file `package.json` (trong thư mục gốc), tìm mục `"scripts"` và thêm vào như sau:

```json
"scripts": {
    "test": "npx playwright test",
    "test:ui": "npx playwright test --ui"
}
```

> ✅ Nhờ vậy, bạn chỉ cần gõ `npm run test` thay vì phải nhớ cả dòng lệnh dài!

---

## ▶️ Bước 4: Chạy test

### ✅ Cách 1: Chạy nhanh trong Terminal

```bash
npm run test
```

Bạn sẽ thấy kết quả như sau:

```
Running 1 test using 1 worker
✓ Trang Google có tiêu đề đúng
```

---

### 🖥️ Cách 2: Chạy bằng giao diện (UI Mode)

```bash
npm run test:ui
```

- Một cửa sổ sẽ hiện lên
- Bạn có thể **click để chạy từng bài test**
- Dễ dàng xem lại kết quả, video, lỗi...

::: tip
UI Mode rất phù hợp cho người mới học vì bạn sẽ **thấy rõ các bước test được thực hiện ra sao**.
:::

---

## ✅ Tổng kết bạn đã làm được gì?

- ✔️ Tạo file test đầu tiên
- ✔️ Viết đoạn kiểm thử cơ bản
- ✔️ Cấu hình lệnh chạy test nhanh
- ✔️ Biết cách chạy test cả bằng dòng lệnh và giao diện

---

➡️ Tiếp theo: [🤖 Dùng AI để tạo test dễ dàng hơn](./ai-assist.md)