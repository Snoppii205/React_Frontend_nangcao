export function Header({ tongPhan = 0 }) {
  const tenQuan = import.meta.env.VITE_TEN_QUAN || 'Quán Huế Xưa';

  return (
    <header className="phan-dau">
      <h1>{tenQuan}</h1>
      <div className="huy-hieu-gio">
        🛒 Giỏ hàng: <span data-testid="tong-phan">{tongPhan}</span> phần
      </div>
    </header>
  );
}
