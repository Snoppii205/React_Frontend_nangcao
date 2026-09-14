import React, { useState } from 'react';

export function Counter() {
  // Khai báo State: Dữ liệu thay đổi thì UI tự render lại
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      width: '350px',
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <h3>Mô hình React (Lập trình khai báo)</h3>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 18px',
          fontSize: '16px',
          cursor: 'pointer',
          background: '#61dafb',
          color: '#000',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}

export default Counter;