// DanhSachMon.jsx - Đáp ứng C1.3
import { MonAnCard } from './MonAnCard';

export function DanhSachMon({ dsMon, idDangChon, onChon, onDat }) {
  return (
    <div className="danh-sach-mon">
      {/* C1.3: Dùng .map() render danh sách, key là mon.id */}
      {dsMon.map((mon) => (
        <MonAnCard
          key={mon.id}
          mon={mon}
          dangChon={mon.id === idDangChon}
          onChon={onChon}
          onDat={onDat}
        />
      ))}
    </div>
  );
}
