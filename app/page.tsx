import { WaitlistForm } from '@/app/components/waitlist-form';

export const metadata = {
  title: 'Oge',
  description: 'Publica tu outfit del día. La comunidad lo puntúa del 1 al 10. Compite con tu ciudad y sube al top de tu país.',
  openGraph: {
    title: 'Oge',
    description: 'Publica tu outfit. Recibe puntuaciones. Sube al ranking.',
    images: [{ url: '/og-image.png' }],
  },
};

export default function Home() {
  return (
    <main style={s.page}>
      <Nav />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <WaitlistSection />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav style={s.nav}>
      <div style={s.navInner}>
        <div />
        <a href="#waitlist" style={s.navCta}>Unirse a la lista</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={s.hero}>
      <div style={s.heroInner}>
        <img src="/oge-logo.png" alt="Oge" style={s.heroLogo} />
        <div style={s.badge}>
          <span style={s.badgeDot} />
          Próximamente en iOS y Android
        </div>
        <h1 style={s.heroTitle}>
          Publica tu outfit.<br />
          <span style={s.heroAccent}>Recibe puntuaciones.</span><br />
          Sube al ranking.
        </h1>
        <p style={s.heroSub}>
          Comparte una foto de tu outfit cada día. La comunidad lo puntúa del 1 al 10. Compite con tu ciudad y sube al top de tu país.
        </p>
        <WaitlistForm />
        <p style={s.heroNote}>Gratis · Sin spam · Acceso anticipado</p>
      </div>

      <div style={s.heroVisual} aria-hidden>
        <MockCard
          username="sofia_m"
          location="Madrid"
          score="9.1"
          votes={284}
          accent="#208AEF"
          comments={[
            { user: 'carlos_v', text: 'este look es una pasada 🔥', side: 'right' },
            { user: 'leila.r', text: 'el layering me tiene loca', side: 'right' },
          ]}
          reactions={[
            { emoji: '🔥', count: 47 },
            { emoji: '💯', count: 31 },
          ]}
        />
      </div>
    </section>
  );
}

function MockCard({
  username, location, score, votes, accent, comments, reactions,
}: {
  username: string;
  location: string;
  score: string;
  votes: number;
  accent: string;
  comments: { user: string; text: string; side: 'left' | 'right' }[];
  reactions: { emoji: string; count: number }[];
}) {
  return (
    <div style={s.mockWrap}>
      {/* Floating comments */}
      {comments.map((c, i) => (
        <div key={i} style={{ ...s.floatingComment, top: `${22 + i * 28}%`, right: '-36%', animationDelay: `${i * 0.4}s` }}>
          <span style={s.commentUser}>@{c.user}</span>
          <span style={s.commentText}>{c.text}</span>
        </div>
      ))}

      {/* Floating reactions */}
      {reactions.map((r, i) => (
        <div key={i} style={{ ...s.floatingReaction, bottom: `${32 + i * 16}%`, left: '-28%', animationDelay: `${i * 0.3}s` }}>
          {r.emoji} <span style={s.reactionCount}>{r.count}</span>
        </div>
      ))}

      {/* Card */}
      <div style={{ ...s.mockCard, borderColor: `${accent}25` }}>
        {/* Header */}
        <div style={s.mockHeader}>
          <div style={s.mockAvatar} />
          <div>
            <div style={s.mockUsername}>@{username}</div>
            <div style={s.mockLocation}>📍 {location}</div>
          </div>
        </div>

        {/* Photo */}
        <div style={{ ...s.mockPhoto, background: `linear-gradient(160deg, ${accent}18 0%, #111 60%)` }}>
          {/* Score badge */}
          <div style={{ ...s.mockScoreBadge, background: accent }}>
            <span style={s.mockScoreNum}>{score}</span>
            <span style={s.mockScoreDen}>/10</span>
          </div>
          {/* Rank badge */}
          <div style={s.mockRankBadge}>#1 Madrid today</div>
        </div>

        {/* Vote bar */}
        <div style={s.mockVoteBar}>
          <div style={s.mockVoteSlider}>
            <div style={{ ...s.mockVoteThumb, left: `${(parseFloat(score) - 1) / 9 * 100}%`, background: accent }} />
          </div>
          <span style={s.mockVoteCount}>{votes} votes</span>
        </div>
      </div>
    </div>
  );
}

function SocialProof() {
  const cards = [
    {
      username: 'leo.b',
      location: 'Barcelona',
      score: '8.7',
      rank: '#1 Barcelona',
      accent: '#A855F7',
      comment: { user: 'marta_g', text: 'las zapatillas lo hacen todo 👌' },
    },
    {
      username: 'ana_v',
      location: 'Valencia',
      score: '9.3',
      rank: '#1 España 🇪🇸',
      accent: '#F59E0B',
      comment: { user: 'javi.m', text: 'top 1 España bien merecido!!!' },
    },
    {
      username: 'nour.k',
      location: 'París',
      score: '8.2',
      rank: '#2 París',
      accent: '#EC4899',
      comment: { user: 'theo_r', text: 'vibra parisina total 🥐✨' },
    },
  ];

  return (
    <section style={s.socialSection}>
      <div style={s.sectionInner}>
        <p style={s.sectionTag}>En Oge ahora mismo</p>
        <h2 style={s.sectionTitle}>Looks reales. Puntuaciones reales.</h2>
        <div style={s.cardRow}>
          {cards.map((c) => (
            <div key={c.username} style={s.socialCard}>
              {/* Header */}
              <div style={s.socialHeader}>
                <div style={{ ...s.socialAvatar, background: `${c.accent}33` }} />
                <div>
                  <div style={s.socialUsername}>@{c.username}</div>
                  <div style={s.socialMeta}>📍 {c.location}</div>
                </div>
                <div style={{ ...s.socialScore, color: c.accent }}>{c.score}</div>
              </div>

              {/* Photo placeholder */}
              <div style={{ ...s.socialPhoto, background: `linear-gradient(145deg, ${c.accent}14 0%, #0a0a0a 70%)` }}>
                <div style={{ ...s.socialRank, borderColor: `${c.accent}40`, color: c.accent }}>{c.rank}</div>
              </div>

              {/* Comment */}
              <div style={s.socialComment}>
                <span style={s.socialCommentUser}>@{c.comment.user}</span>
                <span style={s.socialCommentText}> {c.comment.text}</span>
              </div>

              {/* Actions */}
              <div style={s.socialActions}>
                <div style={s.socialAction}>
                  <span>⭐</span>
                  <span style={s.socialActionLabel}>Puntuar</span>
                </div>
                <div style={s.socialAction}>
                  <span>🔖</span>
                  <span style={s.socialActionLabel}>Guardar</span>
                </div>
                <div style={s.socialAction}>
                  <span>↗</span>
                  <span style={s.socialActionLabel}>Compartir</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Publica tu outfit del día',
      desc: 'Una foto al día. Tu look, tu momento — sin repeticiones.',
    },
    {
      number: '02',
      title: 'La comunidad lo puntúa',
      desc: 'Desliza para puntuar outfits del 1 al 10. Votos honestos y anónimos.',
    },
    {
      number: '03',
      title: 'Sube al ranking',
      desc: 'Compite por el top de tu ciudad y tu país. El ranking se reinicia cada día.',
    },
  ];

  return (
    <section style={s.section}>
      <div style={s.sectionInner}>
        <p style={s.sectionTag}>Cómo funciona</p>
        <h2 style={s.sectionTitle}>Simple. Social. Competitivo.</h2>
        <div style={s.steps}>
          {steps.map((step) => (
            <div key={step.number} style={s.step}>
              <span style={s.stepNumber}>{step.number}</span>
              <h3 style={s.stepTitle}>{step.title}</h3>
              <p style={s.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: '📍',
      title: 'Tu ciudad. Tu país.',
      desc: 'Descubre qué llevan cerca de ti. Filtra por ciudad o país y encuentra el estilo local.',
    },
    {
      icon: '⚡',
      title: 'Un outfit al día',
      desc: 'El límite diario lo hace real. Sin spam, sin ruido — una sola oportunidad para impresionar.',
    },
    {
      icon: '🏆',
      title: 'Rankings diarios',
      desc: 'Cada día es una nueva competición. Los mejores outfits suben, el ranking se reinicia a medianoche.',
    },
    {
      icon: '👁️',
      title: 'Feed personalizado',
      desc: 'Elige tu preferencia — moda masculina, femenina o ambas — y ve lo que te interesa.',
    },
    {
      icon: '🗂️',
      title: 'Colecciones',
      desc: 'Guarda los outfits que te gustan y organízalos. Suscríbete a colecciones de otros usuarios.',
    },
    {
      icon: '🌍',
      title: 'Comunidad global',
      desc: 'Compite localmente, descubre globalmente. Ve los mejores outfits de ciudades de todo el mundo.',
    },
  ];

  return (
    <section style={{ ...s.section, background: 'rgba(255,255,255,0.02)' }}>
      <div style={s.sectionInner}>
        <p style={s.sectionTag}>Funcionalidades</p>
        <h2 style={s.sectionTitle}>Todo lo que necesitas para destacar.</h2>
        <div style={s.featureGrid}>
          {features.map((f) => (
            <div key={f.title} style={s.featureCard}>
              <span style={s.featureIcon}>{f.icon}</span>
              <h3 style={s.featureTitle}>{f.title}</h3>
              <p style={s.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  return (
    <section id="waitlist" style={s.waitlistSection}>
      <div style={s.waitlistInner}>
        <img src="/oge-logo.png" alt="Oge" style={s.waitlistLogo} />
        <h2 style={s.waitlistTitle}>Sé el primero en entrar.</h2>
        <p style={s.waitlistSub}>
          Oge llega pronto a iOS y Android. Apúntate a la lista de espera y consigue acceso anticipado cuando abramos las puertas.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.footerInner}>
        <img src="/oge-logo.png" alt="Oge" style={{ width: 32, height: 32, objectFit: 'contain' }} />
        <div style={s.footerLinks}>
          <a href="/terms" style={s.footerLink}>Términos</a>
          <a href="/privacy" style={s.footerLink}>Privacidad</a>
          <a href="mailto:hello@ogeapp.com" style={s.footerLink}>Contacto</a>
        </div>
        <p style={s.footerCopy}>© {new Date().getFullYear()} Oge. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', overflowX: 'hidden' },

  // Nav
  nav: {
    position: 'sticky', top: 0, zIndex: 100,
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    background: 'rgba(0,0,0,0.75)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  },
  navInner: { maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  navLogo: { display: 'flex', alignItems: 'center' },
  navLogoImg: { width: 36, height: 36, objectFit: 'contain' },
  navLogoText: { display: 'none' },
  navCta: { padding: '8px 18px', borderRadius: 50, background: '#208AEF', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none' },

  // Hero
  hero: {
    maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 60, flexWrap: 'wrap' as React.CSSProperties['flexWrap'],
  },
  heroInner: { flex: 1, minWidth: 300, display: 'flex', flexDirection: 'column', gap: 24 },
  heroLogo: { width: 120, height: 120, objectFit: 'contain' },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 7,
    background: 'rgba(32,138,239,0.12)', border: '1px solid rgba(32,138,239,0.3)',
    borderRadius: 50, padding: '6px 14px', fontSize: 13, fontWeight: 600, color: '#60B4FF',
    width: 'fit-content',
  },
  badgeDot: { width: 6, height: 6, borderRadius: '50%', background: '#208AEF', flexShrink: 0 },
  heroTitle: { fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, margin: 0, color: '#fff' },
  heroAccent: { color: '#208AEF' },
  heroSub: { fontSize: 18, color: '#777', lineHeight: 1.7, margin: 0, maxWidth: 460 },
  heroNote: { margin: 0, fontSize: 13, color: '#444' },

  // Mock card hero visual
  heroVisual: { position: 'relative', flexShrink: 0, width: 260, height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  mockWrap: { position: 'relative', width: 220, height: 380 },
  mockCard: {
    background: '#111', border: '1px solid',
    borderRadius: 20, overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
    width: '100%', height: '100%',
  },
  mockHeader: { display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px' },
  mockAvatar: { width: 32, height: 32, borderRadius: '50%', background: '#208AEF33', flexShrink: 0 },
  mockUsername: { fontSize: 13, fontWeight: 700, color: '#fff' },
  mockLocation: { fontSize: 11, color: '#555' },
  mockPhoto: { flex: 1, position: 'relative' },
  mockScoreBadge: {
    position: 'absolute', bottom: 10, left: 10,
    borderRadius: 50, padding: '5px 12px',
    display: 'flex', alignItems: 'baseline', gap: 2,
  },
  mockScoreNum: { fontSize: 18, fontWeight: 800, color: '#fff' },
  mockScoreDen: { fontSize: 11, color: 'rgba(255,255,255,0.7)' },
  mockRankBadge: {
    position: 'absolute', top: 10, right: 10,
    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
    borderRadius: 50, padding: '4px 10px',
    fontSize: 11, fontWeight: 700, color: '#fff',
  },
  mockVoteBar: { padding: '10px 14px 14px', display: 'flex', alignItems: 'center', gap: 10 },
  mockVoteSlider: { flex: 1, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2, position: 'relative' },
  mockVoteThumb: { position: 'absolute', top: '50%', transform: 'translate(-50%,-50%)', width: 12, height: 12, borderRadius: '50%' },
  mockVoteCount: { fontSize: 11, color: '#555', flexShrink: 0 },

  // Floating comments
  floatingComment: {
    position: 'absolute',
    background: 'rgba(20,20,20,0.9)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12, padding: '8px 12px',
    display: 'flex', flexDirection: 'column', gap: 2,
    maxWidth: 160, zIndex: 10,
  },
  commentUser: { fontSize: 10, fontWeight: 700, color: '#208AEF' },
  commentText: { fontSize: 11, color: '#ccc', lineHeight: 1.4 },
  floatingReaction: {
    position: 'absolute',
    background: 'rgba(20,20,20,0.9)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 50, padding: '6px 12px',
    fontSize: 14, display: 'flex', alignItems: 'center', gap: 5,
    zIndex: 10,
  },
  reactionCount: { fontSize: 12, fontWeight: 700, color: '#fff' },

  // Social proof cards
  socialSection: { padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.04)' },
  cardRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 },
  socialCard: {
    background: '#0d0d0d',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20, overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  },
  socialHeader: { display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px' },
  socialAvatar: { width: 36, height: 36, borderRadius: '50%', flexShrink: 0 },
  socialUsername: { fontSize: 13, fontWeight: 700, color: '#fff' },
  socialMeta: { fontSize: 11, color: '#555', marginTop: 1 },
  socialScore: { fontSize: 22, fontWeight: 800, marginLeft: 'auto' },
  socialPhoto: { height: 220, position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', padding: 12 },
  socialRank: {
    border: '1px solid',
    borderRadius: 50, padding: '4px 12px',
    fontSize: 11, fontWeight: 700,
    background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
  },
  socialComment: { padding: '12px 16px', fontSize: 13, color: '#888', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  socialCommentUser: { fontWeight: 700, color: '#fff' },
  socialCommentText: { color: '#666' },
  socialActions: { display: 'flex', padding: '12px 16px', gap: 24 },
  socialAction: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#444', cursor: 'default' },
  socialActionLabel: { fontSize: 12 },

  // Sections
  section: { padding: '80px 0' },
  sectionInner: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' },
  sectionTag: { margin: '0 0 12px', fontSize: 13, fontWeight: 700, color: '#208AEF', textTransform: 'uppercase' as React.CSSProperties['textTransform'], letterSpacing: 1 },
  sectionTitle: { fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: -1, margin: '0 0 56px', color: '#fff' },

  // Steps
  steps: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40 },
  step: { display: 'flex', flexDirection: 'column', gap: 12 },
  stepNumber: { fontSize: 13, fontWeight: 800, color: '#208AEF', letterSpacing: 1 },
  stepTitle: { fontSize: 20, fontWeight: 700, color: '#fff', margin: 0 },
  stepDesc: { fontSize: 15, color: '#555', lineHeight: 1.7, margin: 0 },

  // Feature grid
  featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 },
  featureCard: {
    background: 'rgba(255,255,255,0.025)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 16, padding: 24,
    display: 'flex', flexDirection: 'column', gap: 10,
  },
  featureIcon: { fontSize: 24 },
  featureTitle: { fontSize: 17, fontWeight: 700, color: '#fff', margin: 0 },
  featureDesc: { fontSize: 14, color: '#555', lineHeight: 1.65, margin: 0 },

  // Waitlist
  waitlistSection: {
    padding: '100px 24px',
    background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(32,138,239,0.08) 0%, transparent 70%)',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  waitlistInner: { maxWidth: 560, margin: '0 auto', textAlign: 'center' as React.CSSProperties['textAlign'], display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 },
  waitlistLogo: { width: 110, height: 110, objectFit: 'contain', marginBottom: 4 },
  waitlistTitle: { fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: -1, margin: 0, color: '#fff' },
  waitlistSub: { fontSize: 16, color: '#555', lineHeight: 1.7, margin: 0 },

  // Footer
  footer: { borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px' },
  footerInner: { maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as React.CSSProperties['flexWrap'], gap: 16 },
  footerLinks: { display: 'flex', gap: 24 },
  footerLink: { fontSize: 14, color: '#444', textDecoration: 'none' },
  footerCopy: { margin: 0, fontSize: 13, color: '#333' },
};
