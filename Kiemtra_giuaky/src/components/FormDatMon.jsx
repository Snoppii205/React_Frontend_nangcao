// FormDatMon.jsx - Đáp ứng C3.4, C4.1, C4.3
import { useState, useRef, useEffect } from 'react';
import { kiemTra } from '../utils/kiemTra';

export function FormDatMon({ choPhepGui, onGui }) {
  // C4.1: Controlled form states
  const [hoTen, setHoTen] = useState('');
  const [soDienThoai, setSoDienThoai] = useState('');
  const [ghiChu, setGhiChu] = useState('');
  const [errors, setErrors] = useState({});

  // C3.4: useRef & useEffect tự động focus vào ô "Họ tên" khi form xuất hiện
  const hoTenRef = useRef(null);

  useEffect(() => {
    if (hoTenRef.current) {
      hoTenRef.current.focus();
    }
  }, []);

  // Validate từng trường trên sự kiện onBlur
  function handleBlur(tenTruong, giaTri) {
    const thongBaoLoi = kiemTra(tenTruong, giaTri);
    setErrors((prev) => ({
      ...prev,
      [tenTruong]: thongBaoLoi,
    }));
  }

  // C4.1: Validate toàn bộ biểu mẫu trên sự kiện onSubmit
  function handleSubmit(e) {
    e.preventDefault();

    const loiHoTen = kiemTra('hoTen', hoTen);
    const loiSdt = kiemTra('soDienThoai', soDienThoai);

    const danhSachLoi = {};
    if (loiHoTen) danhSachLoi.hoTen = loiHoTen;
    if (loiSdt) danhSachLoi.soDienThoai = loiSdt;

    setErrors(danhSachLoi);

    // Nếu không hợp lệ: ngăn chặn gửi đơn, KHÔNG gọi onGui
    if (loiHoTen || loiSdt) {
      return;
    }

    // Khi hợp lệ: loại bỏ khoảng trắng thừa xung quanh và gọi onGui
    if (onGui) {
      onGui({
        hoTen: hoTen.trim(),
        soDienThoai: soDienThoai.trim(),
        ghiChu: ghiChu.trim(),
      });
    }
  }

  return (
    <form className="bieu-mau" onSubmit={handleSubmit}>
      <div className="truong-nhap">
        <label htmlFor="hoTen">Họ tên</label>
        <input
          id="hoTen"
          type="text"
          ref={hoTenRef}
          value={hoTen}
          onChange={(e) => setHoTen(e.target.value)}
          onBlur={() => handleBlur('hoTen', hoTen)}
          placeholder="Nhập họ và tên..."
        />
        {/* C4.1: Thông báo lỗi phải dùng <p className="loi" role="alert"> */}
        {errors.hoTen && (
          <p className="loi" role="alert">
            {errors.hoTen}
          </p>
        )}
      </div>

      <div className="truong-nhap">
        <label htmlFor="soDienThoai">Số điện thoại</label>
        <input
          id="soDienThoai"
          type="text"
          value={soDienThoai}
          onChange={(e) => setSoDienThoai(e.target.value)}
          onBlur={() => handleBlur('soDienThoai', soDienThoai)}
          placeholder="0xxxxxxxxx"
        />
        {errors.soDienThoai && (
          <p className="loi" role="alert">
            {errors.soDienThoai}
          </p>
        )}
      </div>

      <div className="truong-nhap">
        <label htmlFor="ghiChu">Ghi chú</label>
        <textarea
          id="ghiChu"
          rows={3}
          value={ghiChu}
          onChange={(e) => setGhiChu(e.target.value)}
          placeholder="Ghi chú thêm cho quán (tùy chọn)..."
        />
      </div>

      {/* C4.3: Nút "Gửi đơn" chỉ enabled khi choPhepGui === true */}
      <button
        type="submit"
        className="nut-gui-don"
        disabled={!choPhepGui}
      >
        Gửi đơn
      </button>
    </form>
  );
}
