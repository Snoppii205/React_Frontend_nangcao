import { FaUtensils, FaMapMarkerAlt } from 'react-icons/fa';

export function Header({ tongPhan = 0 }) {
  const tenQuan = import.meta.env.VITE_TEN_QUAN || 'Quán Huế Xưa';

  return (
    <header className="phan-dau">
      <div className="phan-dau__thuong-hieu">
        <h1>{tenQuan}</h1>
        <p className="phan-dau__phu">
          <FaMapMarkerAlt size={12} /> 20 Nguyễn Huệ, TP. Huế • Mở cửa: 06:30 - 21:30
        </p>
      </div>

      <div className="huy-hieu-gio">
        <FaUtensils />
        Giỏ hàng: <span data-testid="tong-phan">{tongPhan}</span> phần
      </div>
    </header>
  );
}
