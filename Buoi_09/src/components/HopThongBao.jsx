// Thành phần HopThongBao tổng quát nhận children
function HopThongBao({ mauNen = "#e6f0ef", children }) {
  return (
    <div
      className="hop-thong-bao"
      style={{
        background: mauNen,
        padding: "12px 16px",
        borderRadius: "8px",
        margin: "12px 0",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        color: "#2d3748",
      }}
    >
      {children}
    </div>
  );
}

export default HopThongBao;

// Biến thể chuyên biệt hóa (Specialization via Composition)
export function HopThongBaoThanhCong({ children }) {
  return (
    <HopThongBao mauNen="#e7f3ec">
      <strong style={{ color: "#1e7a46" }}>✓ Thành công! </strong>
      {children}
    </HopThongBao>
  );
}
