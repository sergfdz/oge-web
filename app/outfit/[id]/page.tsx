import { supabaseServer as supabase } from '@/lib/supabase-server';
import { AutoRedirect } from '@/app/components/auto-redirect';

type Props = { params: Promise<{ id: string }> };

async function getOutfit(id: string) {
  const { data: outfit, error } = await supabase
    .from('outfits')
    .select('id, description, final_score, vote_count, user_id, created_at, outfit_images(url, position)')
    .eq('id', id)
    .eq('is_private', false)
    .maybeSingle();

  if (error) throw new Error(`outfits query: ${error.message} (${error.code})`);
  if (!outfit) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('username, full_name, avatar_url')
    .eq('id', outfit.user_id)
    .maybeSingle();

  const images = [...(outfit.outfit_images ?? [])]
    .sort((a: { position: number }, b: { position: number }) => a.position - b.position)
    .map((img: { url: string }) => img.url);

  return { outfit, profile, images };
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const result = await getOutfit(id);
  const username = result?.profile?.username ?? 'Oge';
  const image = result?.images?.[0];
  const score = result?.outfit?.final_score?.toFixed(1);
  return {
    title: `@${username}'s outfit · Oge`,
    description: score ? `Rated ${score}/10 on Oge` : 'Daily Outfit Rater',
    openGraph: image ? { images: [{ url: image, width: 1080, height: 1350 }] } : undefined,
  };
}

export default async function OutfitPage({ params }: Props) {
  const { id } = await params;
  const result = await getOutfit(id);
  const deepLink = `outfitrater://outfit/${id}`;

  if (!result) {
    return (
      <div style={s.page}>
        <TopBar label="outfit" />
        <div style={s.card}>
          <img src="/oge-logo.png" alt="Oge" style={s.logo} />
          <p style={s.body}>This outfit is not available.</p>
        </div>
        <BottomBar deepLink={deepLink} />
      </div>
    );
  }

  const { outfit, profile, images } = result;
  const score = outfit.final_score ? Number(outfit.final_score).toFixed(1) : null;

  return (
    <div style={s.page}>
      <AutoRedirect href={deepLink} />
      <TopBar label={profile?.username ? `@${profile.username}` : 'outfit'} />

      <div style={s.card}>
        {/* Photo carousel */}
        {images.length > 0 && (
          <div style={s.carouselWrap}>
            <div className="carousel" style={s.carousel}>
              {images.map((url: string, i: number) => (
                <div key={i} style={s.slide}>
                  <img src={url} alt="" style={s.slideImg} />
                </div>
              ))}
            </div>
            {score && (
              <div style={s.scoreBadge}>
                <span style={s.scoreNum}>{score}</span>
                <span style={s.scoreDen}>/10</span>
              </div>
            )}
            {images.length > 1 && (
              <div style={s.dots}>
                {images.map((_: string, i: number) => (
                  <div key={i} style={{ ...s.dot, ...(i === 0 ? s.dotActive : {}) }} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* User row */}
        <div style={s.userRow}>
          {profile?.avatar_url
            ? <img src={profile.avatar_url} alt={profile.username} style={s.avatar} />
            : <div style={s.avatarFallback} />}
          <div>
            <p style={s.username}>@{profile?.username ?? 'unknown'}</p>
            {profile?.full_name && <p style={s.fullName}>{profile.full_name}</p>}
          </div>
        </div>

        {outfit.description && <p style={s.description}>{outfit.description}</p>}
      </div>

      <BottomBar deepLink={deepLink} />
    </div>
  );
}

function TopBar({ label }: { label: string }) {
  return (
    <div style={s.topBar}>
      <p style={s.topBarLabel}>{label}</p>
    </div>
  );
}

function BottomBar({ deepLink }: { deepLink: string }) {
  return (
    <div style={s.bottomBar}>
      <a href={deepLink} style={s.cta}>Open in Oge</a>
      <div style={s.storeRow}>
        <a href="https://apps.apple.com" style={s.storeBtn}>App Store</a>
        <a href="https://play.google.com" style={s.storeBtn}>Google Play</a>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', background: '#000', paddingBottom: 160 },
  topBar: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  topBarLabel: { margin: 0, fontWeight: 700, fontSize: 15, color: '#fff' },
  card: { maxWidth: 400, width: '100%', margin: '0 auto', padding: '16px 16px 0' },
  logo: { width: 48, height: 48, objectFit: 'contain', marginBottom: 24 },
  body: { fontSize: 16, color: '#ccc', marginBottom: 24 },
  carouselWrap: {
    position: 'relative',
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory' as React.CSSProperties['scrollSnapType'],
    WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
    scrollbarWidth: 'none' as React.CSSProperties['scrollbarWidth'],
    msOverflowStyle: 'none' as React.CSSProperties['msOverflowStyle'],
  },
  slide: {
    flexShrink: 0,
    width: '100%',
    aspectRatio: '4/5',
    scrollSnapAlign: 'start' as React.CSSProperties['scrollSnapAlign'],
  },
  slideImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  scoreBadge: {
    position: 'absolute',
    bottom: 36,
    left: 12,
    background: 'rgba(0,0,0,0.72)',
    backdropFilter: 'blur(8px)',
    borderRadius: 50,
    padding: '6px 14px',
    display: 'flex',
    alignItems: 'baseline',
    gap: 2,
  },
  scoreNum: { fontSize: 20, fontWeight: 800, color: '#fff' },
  scoreDen: { fontSize: 13, color: '#999' },
  dots: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: 5,
  },
  dot: { width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.35)' },
  dotActive: { background: '#fff' },
  userRow: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 },
  avatar: { width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' },
  avatarFallback: { width: 40, height: 40, borderRadius: '50%', background: '#222' },
  username: { margin: 0, fontWeight: 700, fontSize: 15, color: '#fff' },
  fullName: { margin: 0, fontSize: 13, color: '#888' },
  description: { fontSize: 15, color: '#ccc', margin: '0 0 16px', lineHeight: '1.5' },
  bottomBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px 24px 32px',
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  cta: {
    display: 'block',
    background: '#208AEF',
    color: '#fff',
    padding: '14px 0',
    borderRadius: 50,
    fontWeight: 700,
    fontSize: 16,
    textDecoration: 'none',
    textAlign: 'center',
    marginBottom: 12,
  },
  storeRow: { display: 'flex', gap: 12, justifyContent: 'center' },
  storeBtn: {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,0.15)',
    color: '#888',
    padding: '9px 20px',
    borderRadius: 50,
    fontSize: 13,
    textDecoration: 'none',
  },
};
