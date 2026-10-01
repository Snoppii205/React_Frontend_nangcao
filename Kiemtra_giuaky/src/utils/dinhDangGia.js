export function dinhDangGia(gia) {
  if (typeof gia !== 'number') return '0 đ';
  return gia.toLocaleString('vi-VN') + ' đ';
}
