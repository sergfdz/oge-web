export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ maxWidth: 360, width: "100%", textAlign: "center" }}>
        <img src="/oge-logo.png" alt="OGE" style={{ width: 72, height: 72, objectFit: "contain", marginBottom: 32 }} />
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <a href="https://apps.apple.com" style={storeBtn}>App Store</a>
          <a href="https://play.google.com" style={storeBtn}>Google Play</a>
        </div>
      </div>
    </div>
  );
}

const storeBtn: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid #333",
  color: "#fff",
  padding: "12px 24px",
  borderRadius: 50,
  fontSize: 14,
  textDecoration: "none",
};
