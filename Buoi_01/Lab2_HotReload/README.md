# LAB 2 — CHỈNH SỬA VÀ QUAN SÁT HOT RELOAD

⏱ **Thời gian**: 20 phút  
🎯 **Mục tiêu**: Trải nghiệm trực tiếp tính năng Hot Reload (Fast Refresh) và bản chất lập trình khai báo của React.

---

## 1. Mã nguồn thực hành (\src/App.tsx\)

\\\	sx
function App() {
  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: 'red' }}>Xin chào, Hoàng Văn Thuận!</h1>
      <p>Tôi đang học Web FrontEnd nâng cao</p>
      <button onClick={() => console.log('Clicked!')}>Click me</button>
    </div>
  );
}

export default App;
\\\

---

## 2. Quan sát hiện tượng Hot Reload (Fast Refresh)
* Khi thay đổi mã nguồn trong file \App.tsx\ (sửa tên, đổi style chữ đỏ, thêm nút click) và lưu lại (\Ctrl + S\):
  * Khung preview lập tức cập nhật giao diện mới.
  * **Không cần tải lại toàn bộ trang (F5)** và trạng thái ứng dụng vẫn được giữ nguyên.

---

## 3. Câu hỏi thảo luận quan trọng

> **Câu hỏi**: *"Mình có phải viết lệnh nào để 'cập nhật giao diện' không, hay chỉ sửa nội dung mô tả?"*

> **Trả lời**:  
> **Không!** Lập trình viên không cần viết các lệnh thao tác trực tiếp với DOM (như \document.getElementById\, \.innerHTML\, \.textContent\).  
> Ta chỉ cần **mô tả giao diện mong muốn thông qua cú pháp JSX** (Lập trình khai báo - Declarative Programming). React sẽ tự động so sánh cây Virtual DOM và cập nhật phần tử tương ứng lên Real DOM một cách tối ưu.

---

## 4. Checkpoint Lab 2
- [x] Sửa được nội dung hiển thị và thấy preview tự cập nhật
- [x] Thêm nút \<button>Click me</button>\ và style màu đỏ cho \<h1>\
- [x] Giải thích được vì sao không cần viết lệnh cập nhật giao diện thủ công