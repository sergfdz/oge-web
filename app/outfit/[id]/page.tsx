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
  const username = result?.profile?.username ?? 'OGE';
  const image = result?.images?.[0];
  const score = result?.outfit?.final_score?.toFixed(1);
  return {
    title: `@${username}'s outfit · OGE`,
    description: score ? `Rated ${score}/10 on OGE — Daily Outfit Rater` : 'Daily Outfit Rater',
    openGraph: image ? {
      images: [{ url: image, width: 1080, height: 1350 }],
    } : undefined,
  };
}

export default async function OutfitPage({ params }: Props) {
  const { id } = await params;
  const result = await getOutfit(id);
  const deepLink = `outfitrater://outfit/${id}`;

  if (!result) {
    return (
      <div style={s.page}>
        <div style={s.card}>
          <img src="/oge-logo.png" alt="OGE" style={s.logo} />
          <p style={s.sub}>Daily Outfit Rater</p>
          <p style={s.body}>This outfit is not available.</p>
          <StoreButtons />
        </div>
      </div>
    );
  }

  const { outfit, profile, images } = result;
  const heroImage = images[0];
  const score = outfit.final_score ? Number(outfit.final_score).toFixed(1) : null;

  return (
    <div style={s.page}>
      <AutoRedirect href={deepLink} />

      <div style={s.card}>
        {/* Hero image */}
        {heroImage && (
          <div style={s.heroWrap}>
            <img src={heroImage} alt="outfit" style={s.hero} />
            {score && (
              <div style={s.scoreBadge}>
                <span style={s.scoreNum}>{score}</span>
                <span style={s.scoreDen}>/10</span>
              </div>
            )}
          </div>
        )}

        {/* User row */}
        <div style={s.userRow}>
          {profile?.avatar_url ? (
            <img src={profile.avatar_url} alt={profile.username} style={s.avatar} />
          ) : (
            <div style={s.avatarFallback} />
          )}
          <div>
            <p style={s.username}>@{profile?.username ?? 'unknown'}</p>
            {profile?.full_name && <p style={s.fullName}>{profile.full_name}</p>}
          </div>
        </div>

        {/* Description */}
        {outfit.description && <p style={s.description}>{outfit.description}</p>}

        {/* Extra photos strip */}
        {images.length > 1 && (
          <div style={s.strip}>
            {images.slice(1, 5).map((url: string, i: number) => (
              <img key={i} src={url} alt="" style={s.thumb} />
            ))}
          </div>
        )}

        {/* CTA */}
        <a href={deepLink} style={s.cta}>Open in OGE</a>

        <p style={s.hint}>Don't have OGE yet?</p>
        <StoreButtons />
      </div>
    </div>
  );
}

function StoreButtons() {
  return (
    <div style={s.storeRow}>
      <a href="https://apps.apple.com" style={s.storeBtn}>App Store</a>
      <a href="https://play.google.com" style={s.storeBtn}>Google Play</a>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    background: '#000',
  },
  card: {
    maxWidth: 400,
    width: '100%',
  },
  logo: { width: 48, height: 48, objectFit: 'contain', marginBottom: 8 },
  sub: { display: 'none' },
  body: { fontSize: 16, color: '#ccc', marginBottom: 24 },
  heroWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '4/5',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  hero: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  scoreBadge: {
    position: 'absolute',
    bottom: 12,
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
  userRow: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 },
  avatar: { width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' },
  avatarFallback: { width: 40, height: 40, borderRadius: '50%', background: '#222' },
  username: { margin: 0, fontWeight: 700, fontSize: 15, color: '#fff' },
  fullName: { margin: 0, fontSize: 13, color: '#888' },
  description: { fontSize: 15, color: '#ccc', margin: '0 0 16px', lineHeight: '1.5' },
  strip: { display: 'flex', gap: 6, marginBottom: 24 },
  thumb: { flex: 1, aspectRatio: '1', objectFit: 'cover', borderRadius: 8, minWidth: 0 },
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
    marginBottom: 24,
  },
  hint: { fontSize: 13, color: '#555', marginBottom: 12, textAlign: 'center' },
  storeRow: { display: 'flex', gap: 12, justifyContent: 'center' },
  storeBtn: {
    display: 'inline-block',
    border: '1px solid #333',
    color: '#888',
    padding: '10px 20px',
    borderRadius: 50,
    fontSize: 13,
    textDecoration: 'none',
  },
};
