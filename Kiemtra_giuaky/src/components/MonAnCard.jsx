import { FaPlus, FaFire } from 'react-icons/fa';
import { dinhDangGia } from '../utils/dinhDangGia';

export function MonAnCard({ mon, dangChon, onChon, onDat }) {
  return (
    <div
      className={`the-mon-an ${dangChon ? 'dang-chon' : ''}`}
      onClick={() => onChon && onChon(mon.id)}
    >
      <div className="the-mon-an__dau">
        <div className="the-mon-an__nhom-ten">
          <h3 className="the-mon-an__ten">{mon.ten}</h3>
          {mon.noiBat && (
            <span className="huy-hieu-hot">
              <FaFire size={11} /> Bán chạy
            </span>
          )}
        </div>
        <span className="the-mon-an__gia">{dinhDangGia(mon.gia)}</span>
      </div>

      <p className="the-mon-an__mo-ta">{mon.moTa}</p>

      <div className="the-mon-an__chan">
        {mon.daHet ? (
          <span className="het-mon">Hết món</span>
        ) : (
          <span className="the-mon-an__trang-thai">
            {dangChon ? '✓ Đang chọn' : 'Còn món'}
          </span>
        )}

        <button
          type="button"
          className="nut-dat-mon"
          disabled={mon.daHet}
          onClick={(e) => {
            e.stopPropagation();
            if (onDat) onDat(mon.id);
          }}
        >
          <FaPlus size={11} /> Đặt món
        </button>
      </div>
    </div>
  );
}
