import { useState, useRef, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { kiemTra } from '../utils/kiemTra';

export default function FormDatMon({ onGui, choPhepGui }) {
  const [hoTen, setHoTen] = useState('');
  const [soDienThoai, setSoDienThoai] = useState('');
  const [ghiChu, setGhiChu] = useState('');
  const [errors, setErrors] = useState({});

  const hoTenRef = useRef(null);

  useEffect(() => {
    if (hoTenRef.current) {
      hoTenRef.current.focus();
    }
  }, []);

  function handleBlur(tenTruong, giaTri) {
    const thongBaoLoi = kiemTra(tenTruong, giaTri);
    setErrors((prev) => ({
      ...prev,
      [tenTruong]: thongBaoLoi,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const loiHoTen = kiemTra('hoTen', hoTen);
    const loiSdt = kiemTra('soDienThoai', soDienThoai);

    const danhSachLoi = {};
    if (loiHoTen) danhSachLoi.hoTen = loiHoTen;
    if (loiSdt) danhSachLoi.soDienThoai = loiSdt;

    setErrors(danhSachLoi);

    if (loiHoTen || loiSdt) {
      return;
    }

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

      <button
        type="submit"
        className="nut-gui-don"
        disabled={!choPhepGui}
      >
        <FaPaperPlane size={13} style={{ marginRight: 6 }} />
        Gửi đơn
      </button>
    </form>
  );
}
