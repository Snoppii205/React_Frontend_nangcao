import { useState } from 'react';
import { DANH_SACH_MON } from './data/monAn';
import { Header } from './components/Header';
import { DanhSachMon } from './components/DanhSachMon';
import './App.css';

function App() {
  const [dsMon] = useState(DANH_SACH_MON);
  const [idDangChon, setIdDangChon] = useState(null);

  // Câu 1: Trưng bày Header và DanhSachMon
  return (
    <div className="ung-dung">
      <Header tongPhan={0} />

      <main className="noi-dung-chinh">
        <section>
          <DanhSachMon
            dsMon={dsMon}
            idDangChon={idDangChon}
            onChon={(id) => setIdDangChon(id)}
            onDat={(id) => console.log('Dat mon:', id)}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
