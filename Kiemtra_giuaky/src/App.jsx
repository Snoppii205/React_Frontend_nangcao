import { useState, useEffect } from 'react';
import { DANH_SACH_MON } from './data/monAn';
import { Header } from './components/Header';
import { DanhSachMon } from './components/DanhSachMon';
import { GioHang } from './components/GioHang';
import { Khung } from './components/Khung';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [dsMon] = useState(DANH_SACH_MON);
  const [idDangChon, setIdDangChon] = useState(null);

  // C3.3: Giỏ hàng sử dụng useLocalStorage("gio-hang", [])
  const [gio, setGio] = useLocalStorage('gio-hang', []);

  // C2.2: Hàm datMon(id) cập nhật bất biến
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

  // C2.3: tongPhan là derived data từ gio
  const tongPhan = gio.reduce((tong, item) => tong + item.soLuong, 0);

  // C3.2: useEffect đồng bộ document.title
  useEffect(() => {
    const tenQuan = import.meta.env.VITE_TEN_QUAN || 'Quán Huế Xưa';
    if (tongPhan === 0) {
      document.title = tenQuan;
    } else {
      document.title = `(${tongPhan}) ${tenQuan}`;
    }
  }, [tongPhan]);

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

        <aside>
          <Khung
            tieuDe="Giỏ hàng"
            hanhDong={
              gio.length > 0 && (
                <button
                  type="button"
                  className="nut-xoa-gio"
                  onClick={() => setGio([])}
                >
                  Xóa giỏ hàng
                </button>
              )
            }
          >
            <GioHang gio={gio} dsMon={dsMon} />
          </Khung>
        </aside>
      </main>
    </div>
  );
}

export default App;
