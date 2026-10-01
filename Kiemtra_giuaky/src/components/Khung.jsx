export function Khung({ tieuDe, hanhDong, children }) {
  return (
    <div className="khung">
      <div className="khung__dau">
        <h2 className="khung__tieu-de">{tieuDe}</h2>
        {hanhDong && <div className="khung__hanh-dong">{hanhDong}</div>}
      </div>
      <div className="khung__than">{children}</div>
    </div>
  );
}
