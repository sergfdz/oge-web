import { WaitlistForm } from '@/app/components/waitlist-form';

export const metadata = {
  title: 'Oge',
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
          Coming soon to iOS & Android
        </div>
        <h1 style={s.heroTitle}>
          Post your outfit.<br />
          <span style={s.heroAccent}>Get rated.</span><br />
          Climb the ranking.
        </h1>
        <p style={s.heroSub}>
          Share a daily outfit photo. The community scores it 1–10. Compete with your city and rise to the top of your country.
        </p>
        <WaitlistForm />
        <p style={s.heroNote}>Free · No spam · Early access</p>
      </div>

      <div style={s.heroVisual} aria-hidden>
        <MockCard
          username="sofia_m"
          location="Madrid"
          score="9.1"
          votes={284}
          accent="#208AEF"
          comments={[
            { user: 'carlos_v', text: 'this fit goes so hard 🔥', side: 'right' },
            { user: 'leila.r', text: 'obsessed with the layering', side: 'right' },
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
      comment: { user: 'marta_g', text: 'ok the shoes make this 👌' },
    },
    {
      username: 'ana_v',
      location: 'Valencia',
      score: '9.3',
      rank: '#1 Spain 🇪🇸',
      accent: '#F59E0B',
      comment: { user: 'javi.m', text: 'top 1 spain deserved!!!' },
    },
    {
      username: 'nour.k',
      location: 'Paris',
      score: '8.2',
      rank: '#2 Paris',
      accent: '#EC4899',
      comment: { user: 'theo_r', text: 'parisian energy 🥐✨' },
    },
  ];

  return (
    <section style={s.socialSection}>
      <div style={s.sectionInner}>
        <p style={s.sectionTag}>Live on Oge</p>
        <h2 style={s.sectionTitle}>Real looks. Real scores.</h2>
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
                  <span style={s.socialActionLabel}>Rate</span>
                </div>
                <div style={s.socialAction}>
                  <span>🔖</span>
                  <span style={s.socialActionLabel}>Save</span>
                </div>
                <div style={s.socialAction}>
                  <span>↗</span>
                  <span style={s.socialActionLabel}>Share</span>
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
      title: 'Post your daily outfit',
      desc: 'One photo per day. Your look, your moment — no do-overs.',
    },
    {
      number: '02',
      title: 'The community rates it',
      desc: 'Swipe up or down to score outfits from 1 to 10. Honest, anonymous votes.',
    },
    {
      number: '03',
      title: 'Climb the ranking',
      desc: 'Compete for the top spot in your city and country. Rankings reset every day.',
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
      desc: 'Set your preference — menswear, womenswear, or both — and see what matters to you.',
    },
    {
      icon: '🗂️',
      title: 'Collections',
      desc: 'Save outfits you love and organize them. Subscribe to collections from other users.',
    },
    {
      icon: '🌍',
      title: 'Global community',
      desc: 'Compete locally, discover globally. See top outfits from cities around the world.',
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
        <img src="/oge-logo.png" alt="Oge" style={s.waitlistLogo} />
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
        <img src="/oge-logo.png" alt="Oge" style={{ width: 32, height: 32, objectFit: 'contain' }} />
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
  waitlistLogo: { width: 80, height: 80, objectFit: 'contain', marginBottom: 8 },
  waitlistTitle: { fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: -1, margin: 0, color: '#fff' },
  waitlistSub: { fontSize: 16, color: '#555', lineHeight: 1.7, margin: 0 },

  // Footer
  footer: { borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px' },
  footerInner: { maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as React.CSSProperties['flexWrap'], gap: 16 },
  footerLinks: { display: 'flex', gap: 24 },
  footerLink: { fontSize: 14, color: '#444', textDecoration: 'none' },
  footerCopy: { margin: 0, fontSize: 13, color: '#333' },
};
