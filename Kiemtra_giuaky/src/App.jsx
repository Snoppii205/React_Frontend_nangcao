import { useState, useEffect } from 'react';
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

  // C2.4: State lưu id món đang được chọn
  const [idDangChon, setIdDangChon] = useState(null);

  // C3.3: State giỏ hàng lưu bằng custom hook useLocalStorage
  const [gio, setGio] = useLocalStorage('gio-hang', []);

  // C4.3: State lưu thông báo thành công và key để reset form
  const [thongBaoThanhCong, setThongBaoThanhCong] = useState('');
  const [formKey, setFormKey] = useState(0);

  // C2.2: Hàm datMon cập nhật giỏ hàng theo phong cách immutable
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

  // C2.3: Derived data - tính tổng số phần ăn trực tiếp từ gio
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

  // C4.3: Xử lý gửi đơn hàng
  function guiDon(thongTinKhach) {
    // 1. Hiển thị thông báo "Đã nhận đơn của <Họ tên>"
    setThongBaoThanhCong(`Đã nhận đơn của ${thongTinKhach.hoTen}`);

    // 2. Làm trống giỏ hàng
    setGio([]);

    // 3. Reset FormDatMon bằng cách thay đổi React key
    setFormKey((prevKey) => prevKey + 1);
  }

  return (
    <div className="ung-dung">
      <Header tongPhan={tongPhan} />

      {/* C4.3: Thông báo đặt đơn thành công render bên trong <p role="status"> */}
      {thongBaoThanhCong && (
        <p className="thong-bao-thanh-cong" role="status">
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
          {/* C4.2: Khung giỏ hàng với tiêu đề "Giỏ hàng" và nút "Xóa giỏ hàng" */}
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

          {/* Form đặt món - Reset bằng key khi formKey thay đổi */}
          <Khung tieuDe="Thông tin đặt món">
            <FormDatMon
              key={formKey}
              choPhepGui={gio.length > 0}
              onGui={guiDon}
            />
          </Khung>
        </aside>
      </main>
    </div>
  );
}

export default App;
