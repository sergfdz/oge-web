type Props = { params: { id: string } };

export default function OutfitPage({ params }: Props) {
  const deepLink = `outfitrater://outfit/${params.id}`;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>OGE</h1>
        <p style={styles.subtitle}>Daily Outfit Rater</p>
        <p style={styles.body}>Open this outfit in the OGE app.</p>
        <a href={deepLink} style={styles.btn}>
          Open in OGE
        </a>
        <p style={styles.hint}>Don't have the app yet?</p>
        <div style={styles.storeRow}>
          <a href="https://apps.apple.com" style={styles.storeBtn}>App Store</a>
          <a href="https://play.google.com" style={styles.storeBtn}>Google Play</a>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 },
  card: { maxWidth: 360, width: '100%', textAlign: 'center' },
  title: { fontSize: 36, fontWeight: 800, margin: 0, letterSpacing: -1 },
  subtitle: { fontSize: 14, color: '#999', margin: '4px 0 32px' },
  body: { fontSize: 16, color: '#ccc', marginBottom: 24 },
  btn: {
    display: 'inline-block', background: '#208AEF', color: '#fff',
    padding: '14px 32px', borderRadius: 50, fontWeight: 700, fontSize: 16,
    textDecoration: 'none', marginBottom: 32,
  },
  hint: { fontSize: 13, color: '#666', marginBottom: 12 },
  storeRow: { display: 'flex', gap: 12, justifyContent: 'center' },
  storeBtn: {
    display: 'inline-block', border: '1px solid #333', color: '#fff',
    padding: '10px 20px', borderRadius: 50, fontSize: 13, textDecoration: 'none',
  },
};
