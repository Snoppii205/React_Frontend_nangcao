// MonAnCard.jsx - Đáp ứng C1.2 & C2.1, C2.4
import { dinhDangGia } from '../utils/dinhDangGia';

export function MonAnCard({ mon, dangChon, onChon, onDat }) {
  return (
    <div
      className={`the-mon-an ${dangChon ? 'dang-chon' : ''}`}
      onClick={() => onChon && onChon(mon.id)}
    >
      <div className="the-mon-an__dau">
        <h3 className="the-mon-an__ten">{mon.ten}</h3>
        <span className="the-mon-an__gia">{dinhDangGia(mon.gia)}</span>
      </div>

      {/* C1.2: Hiển thị mô tả món ăn */}
      <p className="the-mon-an__mo-ta">{mon.moTa}</p>

      <div className="the-mon-an__chan">
        {/* C1.2: Render có điều kiện, khi hết món hiển thị "Hết món" với class het-mon */}
        {mon.daHet ? (
          <span className="het-mon">Hết món</span>
        ) : (
          <span />
        )}

        {/* C2.1: Nút với text chính xác "Đặt món", disabled khi mon.daHet */}
        {/* e.stopPropagation() ngăn sự kiện nổi bọt kích hoạt chọn thẻ onChon */}
        <button
          type="button"
          className="nut-dat-mon"
          disabled={mon.daHet}
          onClick={(e) => {
            e.stopPropagation();
            if (onDat) onDat(mon.id);
          }}
        >
          Đặt món
        </button>
      </div>
    </div>
  );
}
