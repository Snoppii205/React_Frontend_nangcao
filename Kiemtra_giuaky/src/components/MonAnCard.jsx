import { FaPlus } from 'react-icons/fa';
import { dinhDangGia } from '../utils/dinhDangGia';

export default function MonAnCard({ mon, dangChon, onChon, onDat }) {
  function xuLyBamThe() {
    if (onChon) onChon(mon.id);
  }

  function xuLyBamDatMon(e) {
    e.stopPropagation();
    if (onDat) onDat(mon.id);
  }

  return (
    <article
      className={`the-mon-an ${dangChon ? 'dang-chon' : ''}`}
      onClick={xuLyBamThe}
    >
      <div className="the-mon-an__dau">
        <h3 className="the-mon-an__ten">{mon.ten}</h3>
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
          onClick={xuLyBamDatMon}
        >
          <FaPlus size={11} /> Đặt món
        </button>
      </div>
    </article>
  );
}
