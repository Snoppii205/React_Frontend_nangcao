import { useState } from "react";
import BoCucTrang from "../components/BoCucTrang";
import TheDiaDanh from "../components/TheDiaDanh";
import The from "../components/The";
import DanhSach from "../components/DanhSach";
import HopThongBao, { HopThongBaoThanhCong } from "../components/HopThongBao";
import HuyHieu from "../components/HuyHieu";
import { DANH_SACH_DIA_DANH } from "../du-lieu/diaDanh";
import { DANH_SACH_MON_AN } from "../du-lieu/monAn";

function TrangDanhMuc() {
  // State lưu danh sách ID địa danh được yêu thích (điểm cộng: Thẻ có hành động)
  const [danhSachYeuThich, setDanhSachYeuThich] = useState([1]);

  const toggleYeuThich = (id) => {
    if (danhSachYeuThich.includes(id)) {
      setDanhSachYeuThich(danhSachYeuThich.filter((itemId) => itemId !== id));
    } else {
      setDanhSachYeuThich([...danhSachYeuThich, id]);
    }
  };

  const soLuong = DANH_SACH_DIA_DANH.length;

  return (
    <BoCucTrang
      thanhDieuHuong={
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "22px" }}>Khám phá Cố đô Huế</h1>
            <small style={{ color: "#94a3b8" }}>Học phần INT.7.18 — phu-xuan-react</small>
          </div>
          <div>
            <HuyHieu mau="#d97706">
              ❤️ Yêu thích: {danhSachYeuThich.length}
            </HuyHieu>
          </div>
        </div>
      }
      chanTrang={
        <div>
          <p style={{ margin: "4px 0" }}>© 2026 Hoàng Văn Thuận — Bài 9: Tái sử dụng và kết hợp thành phần</p>
          <small>Đại học Phú Xuân · Khoa CNTT</small>
        </div>
      }
      noiDungChinh={
        <>
          {/* Lab 4: Hộp thông báo tổng quát và chuyên biệt */}
          <HopThongBao>
            Hiện có <strong>{soLuong}</strong> địa danh và <strong>{DANH_SACH_MON_AN.length}</strong> món ăn đặc sản đang được giới thiệu.
          </HopThongBao>

          <HopThongBaoThanhCong>
            Dữ liệu địa danh và ẩm thực đã được kết xuất thành công qua Component tái sử dụng.
          </HopThongBaoThanhCong>

          {/* Lab 2 & Lab 1: Dùng The bọc lưới thẻ địa danh */}
          <The tieuDe="Di tích tiêu biểu Cố đô">
            <div className="luoi-dia-danh">
              {DANH_SACH_DIA_DANH.map((dd) => (
                <TheDiaDanh
                  key={dd.id}
                  anh={dd.anh}
                  ten={dd.ten}
                  moTa={dd.moTa}
                  daThich={danhSachYeuThich.includes(dd.id)}
                  onThich={() => toggleYeuThich(dd.id)}
                  huyHieu={
                    dd.noiBat ? (
                      <HuyHieu mau="#dc2626">Nổi bật</HuyHieu>
                    ) : null
                  }
                />
              ))}
            </div>
          </The>

          {/* Lab 3B: DanhSach với mẫu Render Props (2 kiểu hiển thị khác nhau) */}
          <The tieuDe="Ẩm thực Huế (Mẫu Render Props)">
            <h4 style={{ margin: "12px 0 6px", color: "#1b2a4a" }}>1. Kiểu hiển thị danh sách giá (chữ đậm):</h4>
            <DanhSach
              cacMuc={DANH_SACH_MON_AN}
              hienThiMuc={(mon) => (
                <span>
                  <strong>{mon.ten}</strong> —{" "}
                  <span style={{ color: "#0f6e6a", fontWeight: "bold" }}>
                    {mon.gia.toLocaleString()}đ
                  </span>
                </span>
              )}
            />

            <h4 style={{ margin: "18px 0 6px", color: "#1b2a4a" }}>2. Kiểu hiển thị kèm nút đặt món:</h4>
            <DanhSach
              cacMuc={DANH_SACH_MON_AN}
              hienThiMuc={(mon) => (
                <>
                  <span>
                    <strong>{mon.ten}</strong> ({mon.gia.toLocaleString()}đ)
                  </span>
                  <button
                    type="button"
                    className="nut-dat-mon"
                    onClick={() => alert(`Đã thêm ${mon.ten} vào đơn đặt món!`)}
                  >
                    Đặt món ngay
                  </button>
                </>
              )}
            />
          </The>
        </>
      }
    />
  );
}

export default TrangDanhMuc;
