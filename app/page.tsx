export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ maxWidth: 360, width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, margin: 0, letterSpacing: -1 }}>OGE</h1>
        <p style={{ fontSize: 14, color: '#999', margin: '4px 0 32px' }}>Daily Outfit Rater</p>
        <p style={{ fontSize: 16, color: '#ccc', marginBottom: 32 }}>Rate and discover daily outfits from your city.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="https://apps.apple.com" style={storeBtn}>App Store</a>
          <a href="https://play.google.com" style={storeBtn}>Google Play</a>
        </div>
      </div>
    </div>
  );
}

const storeBtn: React.CSSProperties = {
  display: 'inline-block', border: '1px solid #333', color: '#fff',
  padding: '12px 24px', borderRadius: 50, fontSize: 14, textDecoration: 'none',
};
