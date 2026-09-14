# LAB 1 — KHÁM PHÁ MỘT DỰ ÁN REACT CÓ SẴN

⏱ **Thời gian**: 20 phút  
🎯 **Mục tiêu**: Làm quen giao diện CodeSandbox / StackBlitz và cấu trúc thư mục React.

---

## 1. Cây thư mục và các tệp cốt lõi

`	ext
phu-xuan-react/
├── index.html        # Trang HTML gốc duy nhất của ứng dụng SPA
├── package.json      # Quản lý dependencies, scripts và cấu hình dự án
├── src/
│   ├── main.tsx      # Điểm khởi chạy (Entry point) gắn kết React vào thẻ #root
│   ├── App.tsx       # Component gốc hiển thị giao diện chính
│   └── ...
└── vite.config.ts    # Cấu hình công cụ đóng gói Vite
`

### Chi tiết vai trò:
* **\index.html\**: Chứa thẻ \<div id="root"></div>\. Trong mô hình SPA (Single Page Application), trình duyệt chỉ tải duy nhất file HTML này một lần đầu tiên.
* **\src/main.tsx\**: Gọi hàm \createRoot(document.getElementById('root'))\ để render component gốc (\<App />\) vào DOM.
* **\src/App.tsx\**: Nơi lập trình viên xây dựng giao diện chính của ứng dụng bằng cú pháp JSX/TSX.

---

## 2. 🚀 Thử thách nhanh (Kiểm tra package.json)

Trong mục \dependencies\ của \package.json\:
* **\eact\**: Thư viện lõi của React (cung cấp Hooks, Components, Virtual DOM...). Phiên bản: \^18.x.x\
* **\eact-dom\**: Cung cấp các phương thức để React tương tác và render vào DOM trình duyệt (\createRoot\, \hydrateRoot\...). Phiên bản: \^18.x.x\

---

## 3. Checkpoint Lab 1
- [x] Mở được sandbox và thấy khung preview chạy được
- [x] Chỉ ra đúng vị trí file \src/App.tsx\ trong cây thư mục
- [x] Nối được 1 dòng code với 1 phần tử hiển thị trên preview