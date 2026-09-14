# LAB 3 — SO SÁNH ĐẾM SỐ: VANILLA JS vs REACT

⏱ **Thời gian**: 15 phút  
🎯 **Mục tiêu**: Đối chiếu trực quan giữa hai mô hình lập trình: **Mệnh lệnh (Imperative)** và **Khai báo (Declarative)**.

---

## 1. So sánh mã nguồn

### A. Mô hình Vanilla JS (Lập trình mệnh lệnh — Imperative)
\\\javascript
// HTML: <button id="btn">Click</button> <span id="count">0</span>
const btn = document.getElementById('btn');
const countSpan = document.getElementById('count');
let count = 0;

btn.addEventListener('click', () => {
  count++;
  countSpan.textContent = count; // BẮT BUỘC phải chỉ định rõ cách cập nhật UI vào DOM
});
\\\

### B. Mô hình React (Lập trình khai báo — Declarative)
\\\	sx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  ); // Chỉ cần khai báo UI gắn với biến state 'count'
}
\\\

---

## 2. 📝 Phiếu so sánh chi tiết

| Tiêu chí | Vanilla JS (Lập trình mệnh lệnh) | React (Lập trình khai báo) |
| :--- | :--- | :--- |
| **Cách cập nhật UI** | Lập trình viên phải trực tiếp thao tác với DOM (\getElementById\, \.textContent = ...\). Phải làm rõ **"LÀM THẾ NÀO"** để đổi giao diện. | React tự động render lại khi \state\ thay đổi qua \setCount\. Lập trình viên chỉ cần mô tả **"GIAO DIỆN TRÔNG NHƯ THẾ NÀO"**. |
| **Số dòng code** | Dài dòng hơn (phải truy vấn phần tử, lắng nghe sự kiện, quản lý biến ngoài, cập nhật lại DOM). | Rất ngắn gọn, gọn gàng và gom cụm logic + giao diện vào chung một Component. |
| **Khả năng mở rộng** | Khi ứng dụng lớn, có nhiều sự kiện và dữ liệu phụ thuộc nhau, code DOM rất dễ xung đột (Spaghetti code), khó bảo trì. | Cực kỳ dễ mở rộng. Component độc lập, tái sử dụng được ở nhiều nơi, dễ quản lý state phức tạp. |

---

## 3. Kết luận rút ra
1. Cả hai mô hình đều hoàn thành nhiệm vụ đếm số, nhưng **React giúp loại bỏ hoàn toàn gánh nặng thao tác DOM thủ công**.
2. React sử dụng cơ chế **Virtual DOM**: Khi state thay đổi, React tự tính toán phần tử nào thực sự thay đổi và chỉ cập nhật đúng phần tử đó trên Real DOM, giúp tối ưu hiệu năng.