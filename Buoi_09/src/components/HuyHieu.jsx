// Lab 5 (Bonus): Thành phần Huy hiệu tái sử dụng kết hợp props (mau) và children (nội dung)
function HuyHieu({ mau = "#0f6e6a", children }) {
  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: mau,
        color: "#ffffff",
        padding: "3px 8px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "600",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
      }}
    >
      {children}
    </span>
  );
}

export default HuyHieu;
