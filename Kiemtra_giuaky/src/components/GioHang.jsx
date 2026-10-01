import { useMemo } from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

export default function GioHang({ gio, dsMon }) {
  const tongTien = useMemo(() => {
    return gio.reduce((sum, dong) => {
      const mon = dsMon.find((m) => m.id === dong.id);
      if (!mon) return sum;
      return sum + mon.gia * dong.soLuong;
    }, 0);
  }, [gio, dsMon]);

  if (gio.length === 0) {
    return (
      <div data-testid="gio-hang" className="gio-hang-trong">
        <p>Giỏ hàng trống</p>
      </div>
    );
  }

  return (
    <div data-testid="gio-hang">
      <ul className="danh-sach-gio">
        {gio.map((dong) => {
          const mon = dsMon.find((m) => m.id === dong.id);
          if (!mon) return null;
          const thanhTien = mon.gia * dong.soLuong;

          return (
            <li key={dong.id} className="muc-gio">
              {mon.ten} × {dong.soLuong} — {dinhDangGia(thanhTien)}
            </li>
          );
        })}
      </ul>

      <div className="tong-tien-container">
        <span>Tổng cộng:</span>
        <strong className="tong-tien-so" data-testid="tong-tien">
          {dinhDangGia(tongTien)}
        </strong>
      </div>
    </div>
  );
}
