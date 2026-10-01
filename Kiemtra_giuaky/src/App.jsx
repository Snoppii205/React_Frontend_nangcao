import { useState, useEffect } from 'react';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import { DANH_SACH_MON } from './data/monAn';
import { Header } from './components/Header';
import { DanhSachMon } from './components/DanhSachMon';
import { GioHang } from './components/GioHang';
import { FormDatMon } from './components/FormDatMon';
import { Khung } from './components/Khung';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [dsMon] = useState(DANH_SACH_MON);
  const [idDangChon, setIdDangChon] = useState(null);
  const [gio, setGio] = useLocalStorage('gio-hang', []);
  const [thongBaoThanhCong, setThongBaoThanhCong] = useState('');
  const [formKey, setFormKey] = useState(0);

  function datMon(id) {
    setGio((prevGio) => {
      const daCo = prevGio.find((item) => item.id === id);
      if (daCo) {
        return prevGio.map((item) =>
          item.id === id ? { ...item, soLuong: item.soLuong + 1 } : item
        );
      }
      return [...prevGio, { id, soLuong: 1 }];
    });
  }

  const tongPhan = gio.reduce((tong, item) => tong + item.soLuong, 0);

  useEffect(() => {
    const tenQuan = import.meta.env.VITE_TEN_QUAN || 'Quán Huế Xưa';
    if (tongPhan === 0) {
      document.title = tenQuan;
    } else {
      document.title = `(${tongPhan}) ${tenQuan}`;
    }
  }, [tongPhan]);

  function guiDon(thongTinKhach) {
    setThongBaoThanhCong(`Đã nhận đơn của ${thongTinKhach.hoTen}`);
    setGio([]);
    setFormKey((prevKey) => prevKey + 1);
  }

  return (
    <div className="ung-dung">
      <Header tongPhan={tongPhan} />

      {thongBaoThanhCong && (
        <p className="thong-bao-thanh-cong" role="status">
          <FaCheckCircle size={16} style={{ marginRight: 8, verticalAlign: 'text-bottom' }} />
          {thongBaoThanhCong}
        </p>
      )}

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
                  <FaTrashAlt size={11} style={{ marginRight: 4 }} />
                  Xóa giỏ hàng
                </button>
              )
            }
          >
            <GioHang gio={gio} dsMon={dsMon} />
          </Khung>

          <Khung tieuDe="Thông tin đặt món">
            <FormDatMon
              key={formKey}
              choPhepGui={gio.length > 0}
              onGui={guiDon}
            />
          </Khung>
        </aside>
      </main>

      <footer className="phan-chan">
        <p>© 2026 Quán Huế Xưa — Học phần Web FrontEnd nâng cao (INT.7.18)</p>
        <p>Sinh viên thực hiện: Hoàng Văn Thuận — MSSV: 2301ITA044</p>
      </footer>
    </div>
  );
}

export default App;
