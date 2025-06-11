---
title: Cài đặt môi trường và Playwright
---

# ⚙️ Cài đặt môi trường để viết test với Playwright

## 🧑‍💻 Bước 1: Cài đặt Node.js

Playwright chạy bằng **Node.js** – một công cụ giúp chạy code JavaScript ngoài trình duyệt.  
📌 Bạn không cần hiểu sâu – chỉ cần cài đúng là được!

### ✅ Cách cài:

1. Vào trang chính thức: 👉 [https://nodejs.org](https://nodejs.org)
2. Bấm nút **Download Node.js (LTS)** màu xanh lá
3. Tải file và **cài như phần mềm bình thường**

Sau khi cài xong, mở **Terminal** (hoặc terminal trong WebStorm) và gõ:

```bash
node -v
```

Nếu bạn thấy phiên bản kiểu như `v22.16.0`, nghĩa là đã cài thành công 🎉

---

## 📁 Bước 2: Tạo thư mục chứa các bài test

### 👉 Cách dễ nhất (dành cho người mới):

1. Mở **WebStorm**
2. Bấm **File → New → Project…**
3. Chọn loại dự án là **Empty Project**
4. Đặt tên là `playwright-tests` (hoặc bất kỳ tên nào bạn thích)
5. Bấm **Create**

Bây giờ bạn đã có một thư mục riêng để bắt đầu viết test rồi!

### 💻 Nếu bạn thích dùng dòng lệnh (tuỳ chọn):

Mở Terminal và nhập:

```bash
mkdir playwright-tests
cd playwright-tests
```

---

## 🤖 Bước 3: Cài đặt Playwright (cách đơn giản nhất)

Thay vì gõ nhiều lệnh riêng lẻ, bạn chỉ cần một dòng lệnh:

```bash
npm init playwright@latest
```

### ✅ Sau khi gõ lệnh, bạn sẽ được hỏi:

```bash
Need to install the following packages:
  create-playwright@latest
Ok to proceed? (y)
```

➡️ Bạn hãy nhập `y` rồi bấm **Enter**

---

📋 Tiếp theo là một số câu hỏi tự động:

| Câu hỏi hiển thị                                 | Nên chọn gì (cho người mới)                       |
|--------------------------------------------------|---------------------------------------------------|
| **Do you want to use TypeScript or JavaScript?** | Bấm Enter để chọn TypeScript (lựa chọn mặc định). |
| **Where to put your end-to-end tests?**          | Bấm Enter để chọn mặc định `tests`                |
| **Add a GitHub Actions workflow?**               | Chọn `n` (nếu bạn chưa dùng GitHub)               |
| **Install Playwright browsers?**                 | Chọn `y` ✅ (rất quan trọng!)                      |
| **Install dependencies?**                        | Chọn `y` ✅ để cài các thư viện cần thiết          |

---

🧾 Sau khi hoàn tất, bạn sẽ có:

- 📁 Thư mục `tests/` chứa ví dụ test sẵn
- ⚙️ File `playwright.config.ts` để cấu hình
- 📦 Thư viện và trình duyệt đã sẵn sàng
- 🚀 Một dự án test hoàn chỉnh – dùng được ngay

---

## 🧪 Bước 4: Chạy thử test mẫu

### ▶️ Cách 1: Chạy test bằng dòng lệnh (nhanh nhất)

Trong Terminal, gõ:

```bash
npx playwright test
```

Bạn sẽ thấy kết quả giống như:

```
Running 1 test using 1 worker
✓ Example test (2s)

1 passed
```

🎉 Vậy là bạn đã chạy được bài test đầu tiên do Playwright tạo sẵn!

---

### 🖥️ Cách 2: Chạy test bằng **UI Mode** (chế độ giao diện trực quan)

Chế độ này sẽ **hiển thị cửa sổ để bạn theo dõi test đang chạy**, dễ hình dung hơn cho người mới.

Chạy lệnh:

```bash
npx playwright test --ui
```

Sau đó:

* Giao diện quản lý test sẽ hiện lên (Playwright Test UI).
* Bạn có thể **bấm nút “▶ Run”** để chạy từng bài test.
* Có thể **xem lại kết quả, mở lại video, hoặc xem ảnh chụp màn hình**.

::: tip
UI Mode cực kỳ hữu ích khi bạn mới học vì có thể **xem test chạy từng bước** mà không cần nhớ lệnh!
:::

---


## 💡 Mẹo dành cho bạn:

> Sử dụng WebStorm giúp việc viết test dễ hơn rất nhiều:
> - Gợi ý thông minh khi gõ
> - Tô màu cú pháp rõ ràng
> - Có sẵn terminal tích hợp
> - Tự phát hiện lỗi khi viết sai

---

➡️ Tiếp theo: [✍️ Viết test đầu tiên bằng Playwright](./first-test.md)