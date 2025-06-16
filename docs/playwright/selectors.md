---
title: Các cách chọn phần tử (selector) thường gặp
---

# 🎯 Các cách chọn phần tử (selector) trong Playwright

Để tương tác với trang web (bấm nút, nhập liệu, kiểm tra nội dung...), bạn cần **chọn đúng phần tử**.

Dưới đây là các tình huống phổ biến và cách chọn phần tử phù hợp nhất với người mới.

---

## 🔘 Chọn nút bấm (button)

### HTML mẫu:

```html

<button>Đăng nhập</button>
````

### Cách chọn:

```ts
await page.getByRole('button', {name: 'Đăng nhập'}).click();
```

### Hoặc:

```ts
await page.locator('text=Đăng nhập').click();
```

---

## 📝 Chọn ô nhập (input)

### HTML mẫu:

```html
<input id="username" placeholder="Nhập tên đăng nhập"/>
```

### Cách chọn:

```ts
await page.locator('#username').fill('admin');
```

Nếu có label liên kết:

```html
<label for="email">Email</label>
<input id="email"/>
```

```ts
await page.getByLabel('Email').fill('test@example.com');
```

---

## 📋 Chọn dropdown (select)

### HTML mẫu:

```html
<select id="country">
    <option value="VN">Việt Nam</option>
    <option value="US">Hoa Kỳ</option>
</select>
```

### Cách chọn:

```ts
await page.selectOption('#country', 'VN');
```

---

## ✅ Chọn checkbox

### HTML mẫu:

```html
<input type="checkbox" id="agree"/>
<label for="agree">Tôi đồng ý</label>
```

### Cách chọn:

```ts
await page.getByLabel('Tôi đồng ý').check();
```

---

## 📄 Chọn văn bản bất kỳ

### HTML mẫu:

```html
<p class="error">Sai tên đăng nhập hoặc mật khẩu</p>
```

### Cách chọn:

```ts
await expect(page.locator('.error')).toHaveText('Sai tên đăng nhập hoặc mật khẩu');
```

Hoặc:

```ts
await expect(page.getByText('Sai tên đăng nhập hoặc mật khẩu')).toBeVisible();
```

---

## 🧪 Chọn phần tử theo `data-testid` (khuyên dùng nếu có)

### HTML mẫu:

```html

<button data-testid="submit-btn">Gửi</button>
```

### Cách chọn:

```ts
await page.getByTestId('submit-btn').click();
```

---

## 🧠 Gợi ý khi chọn selector

| Tình huống                  | Gợi ý selector                                   |
|-----------------------------|--------------------------------------------------|
| Có `id`                     | Dùng `#id`                                       |
| Có `data-testid`            | Dùng `getByTestId(...)`                          |
| Có label (ô nhập, checkbox) | Dùng `getByLabel(...)`                           |
| Là nút                      | Dùng `getByRole('button', { name: ... })`        |
| Nội dung văn bản            | Dùng `getByText(...)` hoặc `locator('text=...')` |
| Không chắc dùng gì          | Nhờ AI hoặc dùng `codegen` của Playwright        |

---

## 🛠️ Dùng Playwright Codegen để tự tạo selector

Bạn có thể dùng công cụ `codegen` của Playwright để ghi lại thao tác và tạo mã tự động:

```bash
npx playwright codegen https://example.com
```

* Một cửa sổ sẽ mở ra
* Bạn thao tác như người dùng
* Playwright sẽ sinh code và selector phù hợp nhất

---

## ✅ Tổng kết

* Chọn selector là bước **rất quan trọng** để test chạy ổn định
* Dùng `getByRole`, `getByLabel`, `getByTestId` giúp code dễ đọc, ít lỗi
* Có thể gửi AI mã HTML để được gợi ý selector chính xác hơn

---

➡️ Quay lại: [🤖 Dùng AI để tạo test](./ai-assist.md)
