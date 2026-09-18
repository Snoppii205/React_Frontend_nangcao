// Mảng dữ liệu địa danh Huế — mỗi phần tử có id duy nhất làm key
export const DANH_SACH_DIA_DANH = [
  {
    id: 1,
    anh: "https://picsum.photos/seed/dainoi/400/260",
    ten: "Đại Nội Huế",
    moTa: "Kinh thành của triều Nguyễn, di sản văn hoá thế giới.",
    noiBat: true,
  },
  {
    id: 2,
    anh: "https://picsum.photos/seed/trangtien/400/260",
    ten: "Cầu Tràng Tiền",
    moTa: "Cây cầu biểu tượng bắc qua dòng sông Hương thơ mộng.",
    noiBat: false,
  },
  {
    id: 3,
    anh: "https://picsum.photos/seed/thienmu/400/260",
    ten: "Chùa Thiên Mụ",
    moTa: "Ngôi chùa cổ linh thiêng, biểu tượng của xứ Huế.",
    noiBat: true,
  },
  {
    id: 4,
    anh: "https://picsum.photos/seed/dongba/400/260",
    ten: "Chợ Đông Ba",
    // Cố ý bỏ trống moTa để thử nghiệm giá trị mặc định (default prop)
    noiBat: false,
  },
];
