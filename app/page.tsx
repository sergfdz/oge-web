import { WaitlistForm } from '@/app/components/waitlist-form';

export const metadata = {
  title: 'Oge — Daily Outfit Rater',
  description: 'Post your outfit. Get rated. Climb the ranking. The social app where style meets competition.',
  openGraph: {
    title: 'Oge — Daily Outfit Rater',
    description: 'Post your outfit. Get rated. Climb the ranking.',
    images: [{ url: '/og-image.png' }],
  },
};

export default function Home() {
  return (
    <main style={s.page}>
      <Nav />
      <Hero />
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
        <div style={s.navLogo}>
          <img src="/oge-logo.png" alt="Oge" style={s.navLogoImg} />
          <span style={s.navLogoText}>Oge</span>
        </div>
        <a href="#waitlist" style={s.navCta}>Join waitlist</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={s.hero}>
      <div style={s.heroInner}>
        <div style={s.badge}>
          <span style={s.badgeDot} />
          Coming soon
        </div>
        <h1 style={s.heroTitle}>
          Post your outfit.<br />
          <span style={s.heroAccent}>Get rated.</span><br />
          Climb the ranking.
        </h1>
        <p style={s.heroSub}>
          Oge is the social app where you share a daily outfit photo and the community scores it from 1 to 10. Compete with your city. Rise to the top of your country.
        </p>
        <WaitlistForm />
        <p style={s.heroNote}>Free to join · iOS & Android · Launching soon</p>
      </div>

      {/* Decorative score cards */}
      <div style={s.heroCards} aria-hidden>
        <ScoreCard score="9.1" label="Madrid · Today" rank={1} accent="#208AEF" />
        <ScoreCard score="8.4" label="Barcelona · Today" rank={2} accent="#A855F7" />
        <ScoreCard score="7.8" label="Valencia · Today" rank={3} accent="#F59E0B" />
      </div>
    </section>
  );
}

function ScoreCard({ score, label, rank, accent }: { score: string; label: string; rank: number; accent: string }) {
  return (
    <div style={{ ...s.card, borderColor: `${accent}30` }}>
      <div style={s.cardThumb}>
        <div style={{ ...s.cardThumbInner, background: `linear-gradient(135deg, ${accent}22, ${accent}08)` }} />
        <div style={{ ...s.cardScoreBadge, background: accent }}>
          <span style={s.cardScoreText}>{score}</span>
        </div>
      </div>
      <div style={s.cardMeta}>
        <span style={{ ...s.cardRank, color: accent }}>#{rank}</span>
        <span style={s.cardLabel}>{label}</span>
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Post your daily outfit',
      desc: 'Share one photo per day. Your look, your style, your moment.',
    },
    {
      number: '02',
      title: 'The community rates it',
      desc: 'Other users score your outfit from 1 to 10. No filters, just honest opinions.',
    },
    {
      number: '03',
      title: 'Climb the ranking',
      desc: 'Compete for the top spot in your city and country. Updated daily.',
    },
  ];

  return (
    <section style={s.section}>
      <div style={s.sectionInner}>
        <p style={s.sectionTag}>How it works</p>
        <h2 style={s.sectionTitle}>Simple. Social. Competitive.</h2>
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
      title: 'Your city. Your country.',
      desc: 'See what people are wearing near you. Filter by city or country and discover local style.',
    },
    {
      icon: '⚡',
      title: 'One outfit a day',
      desc: 'The daily limit keeps it real. No spam, no noise — just one shot to impress.',
    },
    {
      icon: '🏆',
      title: 'Daily rankings',
      desc: 'Every day is a new competition. Top outfits rise, the rankings reset at midnight.',
    },
    {
      icon: '👁️',
      title: 'Curated feed',
      desc: 'Set your content preference — menswear, womenswear, or both — and see what matters to you.',
    },
    {
      icon: '🗂️',
      title: 'Collections',
      desc: 'Save outfits you love and organize them into collections. Subscribe to collections from others.',
    },
    {
      icon: '🔢',
      title: 'Fair scoring',
      desc: 'Scores are calculated with a Bayesian algorithm. No gaming the system — quality beats volume.',
    },
  ];

  return (
    <section style={{ ...s.section, background: 'rgba(255,255,255,0.02)' }}>
      <div style={s.sectionInner}>
        <p style={s.sectionTag}>Features</p>
        <h2 style={s.sectionTitle}>Everything you need to stand out.</h2>
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
        <h2 style={s.waitlistTitle}>Be the first to know.</h2>
        <p style={s.waitlistSub}>
          Oge is launching soon on iOS and Android. Join the waitlist and get early access when we open the doors.
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
        <div style={s.footerLogo}>
          <img src="/oge-logo.png" alt="Oge" style={s.navLogoImg} />
          <span style={s.navLogoText}>Oge</span>
        </div>
        <div style={s.footerLinks}>
          <a href="/terms" style={s.footerLink}>Terms</a>
          <a href="/privacy" style={s.footerLink}>Privacy</a>
          <a href="mailto:hello@ogeapp.com" style={s.footerLink}>Contact</a>
        </div>
        <p style={s.footerCopy}>© {new Date().getFullYear()} Oge. All rights reserved.</p>
      </div>
    </footer>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' },

  // Nav
  nav: {
    position: 'sticky', top: 0, zIndex: 100,
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    background: 'rgba(0,0,0,0.7)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  },
  navInner: { maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  navLogo: { display: 'flex', alignItems: 'center', gap: 8 },
  navLogoImg: { width: 28, height: 28, objectFit: 'contain' },
  navLogoText: { fontSize: 17, fontWeight: 800, color: '#fff', letterSpacing: -0.3 },
  navCta: {
    padding: '8px 18px', borderRadius: 50,
    background: '#208AEF', color: '#fff',
    fontSize: 14, fontWeight: 600, textDecoration: 'none',
  },

  // Hero
  hero: {
    maxWidth: 1100, margin: '0 auto', padding: '80px 24px 100px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 60, flexWrap: 'wrap' as React.CSSProperties['flexWrap'],
  },
  heroInner: { flex: 1, minWidth: 300, display: 'flex', flexDirection: 'column', gap: 24 },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 7,
    background: 'rgba(32,138,239,0.12)', border: '1px solid rgba(32,138,239,0.3)',
    borderRadius: 50, padding: '6px 14px', fontSize: 13, fontWeight: 600, color: '#60B4FF',
    width: 'fit-content',
  },
  badgeDot: { width: 6, height: 6, borderRadius: '50%', background: '#208AEF', flexShrink: 0 },
  heroTitle: { fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: -2, margin: 0, color: '#fff' },
  heroAccent: { color: '#208AEF' },
  heroSub: { fontSize: 18, color: '#888', lineHeight: 1.7, margin: 0, maxWidth: 480 },
  heroNote: { margin: 0, fontSize: 13, color: '#444' },

  // Score cards
  heroCards: { display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 },
  card: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid',
    borderRadius: 16, padding: 14,
    display: 'flex', alignItems: 'center', gap: 14,
    width: 230,
  },
  cardThumb: { width: 52, height: 64, borderRadius: 10, overflow: 'hidden', position: 'relative', flexShrink: 0 },
  cardThumbInner: { width: '100%', height: '100%' },
  cardScoreBadge: { position: 'absolute', bottom: 4, right: 4, borderRadius: 6, padding: '2px 6px' },
  cardScoreText: { fontSize: 11, fontWeight: 800, color: '#fff' },
  cardMeta: { display: 'flex', flexDirection: 'column', gap: 3 },
  cardRank: { fontSize: 18, fontWeight: 800 },
  cardLabel: { fontSize: 12, color: '#555' },

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
  stepDesc: { fontSize: 15, color: '#666', lineHeight: 1.7, margin: 0 },

  // Feature grid
  featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 },
  featureCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 16, padding: 24,
    display: 'flex', flexDirection: 'column', gap: 10,
  },
  featureIcon: { fontSize: 24 },
  featureTitle: { fontSize: 17, fontWeight: 700, color: '#fff', margin: 0 },
  featureDesc: { fontSize: 14, color: '#666', lineHeight: 1.65, margin: 0 },

  // Waitlist section
  waitlistSection: {
    padding: '100px 24px',
    background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(32,138,239,0.08) 0%, transparent 70%)',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  },
  waitlistInner: { maxWidth: 560, margin: '0 auto', textAlign: 'center' as React.CSSProperties['textAlign'], display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 },
  waitlistTitle: { fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: -1, margin: 0, color: '#fff' },
  waitlistSub: { fontSize: 16, color: '#666', lineHeight: 1.7, margin: 0 },

  // Footer
  footer: { borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px' },
  footerInner: { maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as React.CSSProperties['flexWrap'], gap: 16 },
  footerLinks: { display: 'flex', gap: 24 },
  footerLink: { fontSize: 14, color: '#555', textDecoration: 'none' },
  footerCopy: { margin: 0, fontSize: 13, color: '#333' },
};
