export function kiemTra(tenTruong, giaTri) {
  const giaTriChuoi = (giaTri ?? '').trim();

  if (tenTruong === 'hoTen') {
    if (giaTriChuoi.length < 2) {
      return 'Họ tên cần ít nhất 2 ký tự';
    }
  }

  if (tenTruong === 'soDienThoai') {
    const regexSdt = /^0\d{9}$/;
    if (!regexSdt.test(giaTriChuoi)) {
      return 'Số điện thoại gồm 10 chữ số, bắt đầu bằng 0';
    }
  }

  return '';
}
