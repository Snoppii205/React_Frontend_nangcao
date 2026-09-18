import "./DanhSach.css";

// Thành phần khung danh sách sử dụng mẫu Render Props
// cacMuc: mảng dữ liệu cần hiển thị
// hienThiMuc: hàm do nơi gọi truyền vào để tùy biến cách hiển thị từng mục
function DanhSach({ cacMuc, hienThiMuc }) {
  return (
    <ul className="danh-sach">
      {cacMuc.map((muc) => (
        <li key={muc.id} className="danh-sach__muc">
          {hienThiMuc(muc)}
        </li>
      ))}
    </ul>
  );
}

export default DanhSach;
