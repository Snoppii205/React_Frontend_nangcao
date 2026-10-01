import { useMemo } from 'react';
import { dinhDangGia } from '../utils/dinhDangGia';

export function GioHang({ gio, dsMon }) {
  const tongTien = useMemo(() => {
    return gio.reduce((tong, item) => {
      const mon = dsMon.find((m) => m.id === item.id);
      const donGia = mon ? mon.gia : 0;
      return tong + donGia * item.soLuong;
    }, 0);
  }, [gio, dsMon]);

  if (gio.length === 0) {
    return (
      <div data-testid="gio-hang">
        <p className="gio-hang-trong">Giỏ hàng trống</p>
      </div>
    );
  }

  return (
    <div data-testid="gio-hang">
      <ul className="danh-sach-gio">
        {gio.map((item) => {
          const mon = dsMon.find((m) => m.id === item.id);
          const tenMon = mon ? mon.ten : 'Món không tồn tại';
          const thanhTien = mon ? mon.gia * item.soLuong : 0;

          return (
            <li key={item.id} className="muc-gio">
              <span>{tenMon} × {item.soLuong}</span>
              <strong>{dinhDangGia(thanhTien)}</strong>
            </li>
          );
        })}
      </ul>

      <div className="tong-tien-container">
        <span>Tổng cộng:</span>
        <span className="tong-tien-so" data-testid="tong-tien">
          {dinhDangGia(tongTien)}
        </span>
      </div>
    </div>
  );
}
