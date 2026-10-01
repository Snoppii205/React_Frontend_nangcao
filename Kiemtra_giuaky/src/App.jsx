import { useState } from 'react';
import { DANH_SACH_MON } from './data/monAn';
import { Header } from './components/Header';
import { DanhSachMon } from './components/DanhSachMon';
import './App.css';

function App() {
  const [dsMon] = useState(DANH_SACH_MON);

  // C2.4: Lưu id món đang được chọn trong state idDangChon
  const [idDangChon, setIdDangChon] = useState(null);

  // C2.2: State giỏ hàng thuộc về App, cấu trúc [{ id, soLuong }]
  const [gio, setGio] = useState([]);

  // C2.2: Hàm datMon(id) cập nhật bất biến (immutable state update)
  function datMon(id) {
    setGio((prevGio) => {
      const daCoTrongGio = prevGio.find((item) => item.id === id);
      if (daCoTrongGio) {
        return prevGio.map((item) =>
          item.id === id ? { ...item, soLuong: item.soLuong + 1 } : item
        );
      }
      return [...prevGio, { id, soLuong: 1 }];
    });
  }

  // C2.3: Tính tongPhan từ gio - Derived State, không tạo state thừa
  const tongPhan = gio.reduce((tong, item) => tong + item.soLuong, 0);

  return (
    <div className="ung-dung">
      <Header tongPhan={tongPhan} />

      <main className="noi-dung-chinh">
        <section>
          <DanhSachMon
            dsMon={dsMon}
            idDangChon={idDangChon}
            onChon={(id) => setIdDangChon(id)}
            onDat={datMon}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
