// useLocalStorage.js - Đáp ứng C3.3
import { useState, useEffect } from 'react';

export function useLocalStorage(khoa, giaTriDau) {
  // Lazy initialization: đọc và phân tích JSON an toàn từ localStorage
  const [giaTri, setGiaTri] = useState(() => {
    try {
      const duLieu = localStorage.getItem(khoa);
      if (duLieu !== null) {
        return JSON.parse(duLieu);
      }
      return giaTriDau;
    } catch {
      return giaTriDau;
    }
  });

  // Tự động ghi vào localStorage mỗi khi giá trị hoặc khóa thay đổi
  useEffect(() => {
    try {
      localStorage.setItem(khoa, JSON.stringify(giaTri));
    } catch (e) {
      console.error('Lỗi khi ghi vào localStorage:', e);
    }
  }, [khoa, giaTri]);

  return [giaTri, setGiaTri];
}
