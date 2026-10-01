# Bài kiểm tra giữa kỳ — Quán Huế Xưa

- **Họ và tên**: Hoàng Văn Thuận
- **Mã số sinh viên**: 2301ITA044
- **Lớp / số máy**: INT.7.18 / Máy 05
- **Tự đánh giá**: 10/10
- **Sử dụng AI**: Không

---

## I. Hướng dẫn chạy dự án

```bash
cd Kiemtra_giuaky
npm install
npm run dev
```

Mở trình duyệt: `http://localhost:5173`

---

## II. Báo cáo kết quả thực hiện

### Câu 1: Biến môi trường, component, danh sách (1,5 / 1,5 điểm)
- C1.1 (0,5đ): Đọc `VITE_TEN_QUAN` từ file `.env` qua `import.meta.env` hiển thị trong thẻ `<h1>`. Số lượng phần ăn nằm trong thẻ mang thuộc tính `data-testid="tong-phan"`.
- C1.2 (0,5đ): Thẻ món ăn `<article>` hiển thị tên (`<h3>`), mô tả, giá định dạng qua `dinhDangGia`. Món hết hàng hiển thị `<span className="het-mon">Hết món</span>`.
- C1.3 (0,5đ): Kết xuất đủ 8 món trong `DS_MON` bằng `.map()`, dùng `key={mon.id}`, truyền đầy đủ props `mon`, `dangChon`, `onChon`, `onDat`.

### Câu 2: State, sự kiện, nâng trạng thái (2,5 / 2,5 điểm)
- C2.1 (0,5đ): Nút `"Đặt món"` trong `MonAnCard.jsx` bị disabled khi món hết hàng (`daHet`). Bấm nút gọi `onDat(mon.id)` và chặn nổi bọt sự kiện bằng `e.stopPropagation()`.
- C2.2 (1,0đ): State `gio` dạng `[{ id, soLuong }]` tại `App.jsx`. Hàm `datMon(id)` cập nhật bất biến (chưa có thì thêm `{ id, soLuong: 1 }`, có rồi thì tăng `soLuong + 1`).
- C2.3 (0,5đ): `tongPhan` tính trực tiếp từ `gio` bằng `reduce`, không tạo state thừa.
- C2.4 (0,5đ): Thẻ được chọn nhận class `"dang-chon"` lưu qua state `idDangChon`. Bấm nút "Đặt món" không làm đổi thẻ đang chọn.

### Câu 3: Hook (2,5 / 2,5 điểm)
- C3.1 (0,75đ): `GioHang.jsx` tính `tongTien` qua `useMemo` phụ thuộc `[gio, dsMon]`. Giỏ rỗng hiện `"Giỏ hàng trống"`. Tổng tiền trong thẻ `data-testid="tong-tien"`.
- C3.2 (0,5đ): `useEffect` đồng bộ `document.title`: giỏ rỗng là tên quán, có hàng là `(n) <Tên quán>`.
- C3.3 (0,75đ): Custom hook `useLocalStorage(khoa, giaTriDau)` đọc lười, parse JSON có `try/catch`, ghi tự động, hỗ trợ functional update. `App.jsx` dùng `useLocalStorage("gio-hang", [])`.
- C3.4 (0,5đ): `useRef` và `useEffect` tự động focus vào ô `"Họ tên"` khi mở trang.

### Câu 4: Biểu mẫu và thành phần kết hợp (2,5 / 2,5 điểm)
- C4.1 (1,25đ): Controlled form với state cho `hoTen`, `soDienThoai`, `ghiChu`, và `errors`. Kiểm tra hợp lệ trên `onBlur` và `onSubmit` qua hàm `kiemTra`. Lỗi hiện trong `<p className="loi" role="alert">`. Gửi hợp lệ gọi `onGui` với chuỗi đã `trim()`.
- C4.2 (0,5đ): `Khung.jsx` có `hanhDong`. `App.jsx` truyền nút `"Xóa giỏ hàng"` để làm rỗng giỏ hàng.
- C4.3 (0,75đ): Nút `"Gửi đơn"` chỉ bật khi `choPhepGui = true`. Hàm `guiDon` hiển thị `"Đã nhận đơn của <Họ tên>"` trong `<p role="status">`, làm rỗng giỏ và reset form bằng cách đổi React `key`.

### Câu 5: Git và nộp bài (1,0 / 1,0 điểm)
- C5.1 (0,25đ): Làm trên nhánh `giuaky/2301ITA044`.
- C5.2 (0,25đ): Có đầy đủ các commit rõ ràng cho từng câu.
- C5.3 (0,25đ): Đẩy lên GitHub và tạo Pull Request đúng cú pháp tiêu đề: `[Giữa kỳ] 2301ITA044 - Hoàng Văn Thuận`.
- C5.4 (0,25đ): README.md điền đầy đủ họ tên, MSSV, số máy, tự đánh giá và khai báo AI: Không.
