import { useState, useEffect } from 'react';

export function useLocalStorage(khoa, giaTriDau) {
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

  useEffect(() => {
    try {
      localStorage.setItem(khoa, JSON.stringify(giaTri));
    } catch (e) {
      console.error(e);
    }
  }, [khoa, giaTri]);

  return [giaTri, setGiaTri];
}
