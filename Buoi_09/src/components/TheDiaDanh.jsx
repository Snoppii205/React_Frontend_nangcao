import "./TheDiaDanh.css";

function TheDiaDanh({ anh, ten, moTa = "Đang cập nhật mô tả...", onThich, daThich, huyHieu }) {
  return (
    <div className="the-dia-danh">
      <div className="the-dia-danh__anh-wrap">
        <img className="the-dia-danh__anh" src={anh} alt={ten} />
        {huyHieu && <div className="the-dia-danh__huy-hieu">{huyHieu}</div>}
      </div>
      <div className="the-dia-danh__than">
        <h3 className="the-dia-danh__ten">{ten}</h3>
        <p className="the-dia-danh__mo-ta">{moTa}</p>
        {onThich && (
          <div className="the-dia-danh__hanh-dong">
            <button
              type="button"
              className={`nut-thich ${daThich ? "da-thich" : ""}`}
              onClick={onThich}
            >
              {daThich ? "❤️ Đã thích" : "🤍 Yêu thích"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TheDiaDanh;
