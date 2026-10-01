# Bài kiểm tra giữa kỳ: Quán Huế Xưa

* **Học phần**: Web FrontEnd nâng cao (`INT.7.18`) — Đại học Phú Xuân (PXU)
* **Sinh viên**: Hoàng Văn Thuận
* **Mã số sinh viên**: 2301ITA044
* **Nhánh nộp bài**: `giuaky/2301ITA044`
* **Công nghệ**: React 19 + Vite 6 + JavaScript + LocalStorage

---

## 🚀 Hướng dẫn cài đặt & chạy dự án

```bash
# 1. Chuyển vào thư mục bài kiểm tra
cd Kiemtra_giuaky

# 2. Cài đặt các gói phụ thuộc (nếu chưa cài)
npm install

# 3. Khởi chạy máy chủ phát triển (Development Server)
npm run dev
```

Mở trình duyệt tại địa chỉ hiển thị trong terminal (thường là `http://localhost:5173`).

---

## 📋 Tóm tắt các yêu cầu đã hoàn thành

### Câu 1 — Environment, Components, Lists
* **C1.1**: Đọc `VITE_TEN_QUAN` từ `import.meta.env` trong `Header.jsx`, hiển thị tên quán trong thẻ `<h1>`. Giỏ hàng mang thuộc tính `data-testid="tong-phan"`.
* **C1.2**: `MonAnCard.jsx` hiển thị mô tả món, định dạng giá qua hàm tiện ích `dinhDangGia`. Kết xuất có điều kiện: món hết hàng (`daHet === true`) hiển thị chính xác `"Hết món"` với class `het-mon`.
* **C1.3**: `DanhSachMon.jsx` render danh sách bằng `.map()`, dùng `mon.id` làm React `key` duy nhất và truyền đủ props: `mon`, `dangChon`, `onChon`, `onDat`.

### Câu 2 — State and Events
* **C2.1**: Nút `"Đặt món"` trong `MonAnCard.jsx` tự động `disabled` khi hết món. Sử dụng `e.stopPropagation()` để khi click đặt món không làm kích hoạt sự kiện chọn thẻ (`onChon`).
* **C2.2**: State giỏ hàng lưu ở `App.jsx` dạng `[{ id, soLuong }]`. Hàm `datMon(id)` cập nhật bất biến (immutable state update).
* **C2.3**: `tongPhan` được tính toán trực tiếp từ `gio` (Derived State, không tạo state thừa).
* **C2.4**: State `idDangChon` lưu id món đang chọn, thẻ được chọn nhận class `"dang-chon"`.

### Câu 3 — React Hooks
* **C3.1**: `GioHang.jsx` dùng `useMemo` tính `tongTien` phụ thuộc `[gio, dsMon]`. Khi giỏ trống hiển thị `"Giỏ hàng trống"`. Khu vực tổng tiền mang `data-testid="tong-tien"`.
* **C3.2**: `App.jsx` dùng `useEffect` đồng bộ tiêu đề trang `document.title`:
  * Khi giỏ trống: `<Tên quán>`
  * Khi có $n$ phần: `(n) <Tên quán>`
* **C3.3**: Custom Hook `hooks/useLocalStorage.js` khởi tạo lười (lazy initialization), xử lý `try/catch` JSON an toàn, hỗ trợ functional updates và tự động lưu vào `localStorage`. `App.jsx` áp dụng `useLocalStorage("gio-hang", [])`.
* **C3.4**: `FormDatMon.jsx` dùng `useRef` và `useEffect` tự động focus vào ô `"Họ tên"` khi component xuất hiện.

### Câu 4 — Controlled Form & Component Composition
* **C4.1**: Biểu mẫu kiểm soát (Controlled Form) với state cho `hoTen`, `soDienThoai`, `ghiChu`, và `errors`. Kiểm tra hợp lệ trên `onBlur` và `onSubmit` bằng hàm `kiemTra`. Thông báo lỗi hiển thị trong thẻ `<p className="loi" role="alert">`.
* **C4.2**: Component `Khung.jsx` bọc nội dung (`children`) kèm tiêu đề `"Giỏ hàng"` và nút hành động `"Xóa giỏ hàng"` để làm rỗng giỏ.
* **C4.3**: Nút `"Gửi đơn"` chỉ bật (`enabled`) khi giỏ có món (`choPhepGui === true`). Khi gửi thành công:
  1. Hiển thị thông báo: `<p role="status">Đã nhận đơn của <Họ tên></p>`.
  2. Làm trống giỏ hàng.
  3. Reset biểu mẫu bằng cách thay đổi React `key` của `FormDatMon`.

---

## 🎯 Ghi chú bảo vệ (Defense Notes)

1. **Tại sao `tongPhan` không dùng `useState`?**
   * Vì `tongPhan` có thể suy ra hoàn toàn từ state `gio` (`gio.reduce(...)`). Tạo thêm state riêng sẽ gây dư thừa và nguy cơ bất đồng bộ dữ liệu.
2. **Tại sao cần `e.stopPropagation()` trong nút "Đặt món"?**
   * Nút đặt món nằm lồng bên trong thẻ card món ăn (thẻ có sự kiện click để chọn món). Nếu không chặn nổi bọt sự kiện, khi người dùng bấm đặt món, sự kiện click sẽ lan lên phần tử cha và làm đổi món đang chọn ngoài ý muốn.
3. **Tại sao dùng `useMemo` cho `tongTien`?**
   * Tránh việc phải duyệt mảng và tìm kiếm đơn giá trong danh mục món mỗi khi component re-render vì các lý do không liên quan đến giỏ hàng hoặc danh mục món.
4. **Tại sao reset form bằng cách đổi `key`?**
   * Trong React, khi `key` của một component thay đổi, React sẽ coi đó là một component hoàn toàn mới, hủy bỏ instance cũ (unmount) và khởi tạo instance mới (mount), từ đó toàn bộ state bên trong form tự động quay về giá trị ban đầu mà không cần phải gọi thủ công từng hàm `set...('')`.
