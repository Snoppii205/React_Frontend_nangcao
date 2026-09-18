# phu-xuan-react — Bài 9: Tái sử dụng & Kết hợp thành phần

* **Học phần**: INT.7.18 — Web FrontEnd nâng cao
* **Sinh viên**: Hoàng Văn Thuận
* **Dự án**: Du lịch Huế (Di tích & Ẩm thực) — React 19 + Vite
* **Nhánh làm việc**: `feature/buoi9-tai-su-dung-thanh-phan`

---

## 🚀 Cài đặt & Chạy dự án

```bash
# 1. Chuyển vào thư mục Buổi 9
cd Buoi_09

# 2. Cài đặt các thư viện (nếu chưa cài)
npm install

# 3. Khởi chạy máy chủ phát triển
npm run dev
```

Mở trình duyệt tại: [http://localhost:5173](http://localhost:5173)

---

## 🧱 Các thành phần đã xây dựng

### 1. `TheDiaDanh.jsx` (Lab 1)
* **Đặc điểm**: Tái sử dụng qua props (`anh`, `ten`, `moTa`).
* **Tính năng**: 
  * Áp dụng destructuring ngay tại tham số.
  * Có giá trị mặc định cho mô tả: `moTa = "Đang cập nhật mô tả..."` (kiểm nghiệm trên thẻ *Chợ Đông Ba*).
  * Render danh sách mảng dữ liệu bằng `.map()` kèm `key={dd.id}` ổn định.
  * *(Điểm cộng bonus)*: Tích hợp prop-hàm `onThich` cho phép người dùng bấm thả tim/yêu thích địa danh.

### 2. `The.jsx` (Lab 2)
* **Đặc điểm**: Thành phần khung (card container) nhận prop `tieuDe` và thuộc tính đặc biệt `children`.
* **Tính năng**: Sử dụng kết xuất có điều kiện `{tieuDe && <div className="the__dau">{tieuDe}</div>}` để linh hoạt hiển thị khi có hoặc không có tiêu đề. Bọc các loại nội dung khác nhau như lưới địa danh và danh sách ẩm thực.

### 3. `BoCucTrang.jsx` (Lab 3A)
* **Đặc điểm**: Dựng layout với 3 khe cắm JSX độc lập: `thanhDieuHuong` (header), `noiDungChinh` (main), `chanTrang` (footer).

### 4. `DanhSach.jsx` (Lab 3B - Điểm cộng Render Props)
* **Đặc điểm**: Áp dụng mẫu Render Props qua prop-hàm `hienThiMuc`.
* **Tính năng**: Tách biệt logic lặp `<ul><li>` ra khỏi cách trình bày từng mục. Trong trang đã minh họa hiển thị cùng một danh sách món ăn theo 2 kiểu:
  1. Kiểu văn bản in đậm giá tiền.
  2. Kiểu có nút hành động "Đặt món ngay".

### 5. `HopThongBao.jsx` & `HopThongBaoThanhCong` (Lab 4)
* **Đặc điểm**: Minh họa triết lý Kết hợp thay vì Kế thừa (Composition over Inheritance).
* **Tính năng**:
  * `HopThongBao`: Component tổng quát nhận `mauNen` và `children`.
  * `HopThongBaoThanhCong`: Component chuyên biệt hóa (Specialization), tái sử dụng `HopThongBao` với màu nền xanh lá và tiền tố thông báo thành công cố định.

### 6. `HuyHieu.jsx` (Lab 5 - Thử thách thành phần tái sử dụng riêng)
* **Thiết kế**: Nhận prop `mau` (mã màu tùy chỉnh) và `children` (nhãn nội dung của huy hiệu).
* **Giải thích lựa chọn theo sơ đồ quyết định**:
  * Dùng `mau` dạng prop thường vì đây là giá trị màu sắc đơn giản (string hex).
  * Dùng `children` cho nội dung vì nhãn có thể là văn bản ngắn hoặc kèm biểu tượng icon linh hoạt (`⭐ Nổi bật`, `❤️ Yêu thích: 1`,...).
* **Sử dụng thực tế**: Gắn trên góc ảnh của các địa danh nổi bật và hiển thị số lượng yêu thích trên thanh điều hướng.

---

## 📋 Bảng Test Case tự kiểm tra

| Test case | Thao tác kiểm tra | Kết quả mong đợi | Trạng thái |
| :---: | :--- | :--- | :---: |
| **TC1** | Chạy `npm run dev` | Không lỗi, mở được localhost:5173 | ✅ Đạt |
| **TC2** | Xem lưới địa danh | Đủ 4 thẻ, mỗi thẻ có ảnh, tên và mô tả | ✅ Đạt |
| **TC3** | Xem thẻ Chợ Đông Ba | Hiển thị "Đang cập nhật mô tả...", không bị `undefined` | ✅ Đạt |
| **TC4** | Xem khung `The` | Có tiêu đề xanh + phần thân hiển thị đúng nội dung bọc | ✅ Đạt |
| **TC5** | Xem bố cục trang | Đủ 3 vùng Header, Main, Footer | ✅ Đạt |
| **TC6** | Mở Console (F12) | Không có cảnh báo thiếu key, không có lỗi đỏ | ✅ Đạt |

---

## 📸 Ảnh chụp giao diện

![Giao diện Trang danh mục](./anh-chup/trang-danh-muc.png)
