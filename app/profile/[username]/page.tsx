import { supabaseServer as supabase } from '@/lib/supabase-server';
import { AutoRedirect } from '@/app/components/auto-redirect';

type Props = { params: Promise<{ username: string }> };

async function getProfileData(username: string) {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('id, username, full_name, avatar_url, bio, country_code, city, show_location')
    .eq('username', username)
    .maybeSingle();

  if (error) throw new Error(`profiles query: ${error.message} (${error.code})`);
  if (!profile) return null;

  const [
    { count: followerCount },
    { count: followingCount },
    { data: outfits },
  ] = await Promise.all([
    supabase.from('follows').select('*', { count: 'exact', head: true }).eq('following_id', profile.id),
    supabase.from('follows').select('*', { count: 'exact', head: true }).eq('follower_id', profile.id),
    supabase
      .from('outfits')
      .select('id, final_score, outfit_images(url, position)')
      .eq('user_id', profile.id)
      .eq('is_private', false)
      .order('created_at', { ascending: false })
      .limit(12),
  ]);

  const outfitList = (outfits ?? []).map((o: { id: string; final_score: number | null; outfit_images: { url: string; position: number }[] }) => ({
    id: o.id,
    score: o.final_score,
    coverUrl: [...(o.outfit_images ?? [])].sort((a, b) => a.position - b.position)[0]?.url ?? null,
  }));

  const scores = outfitList.map((o: { score: number | null }) => o.score).filter((s: number | null): s is number => s !== null && s > 0);
  const avgScore = scores.length > 0 ? scores.reduce((a: number, b: number) => a + b, 0) / scores.length : null;

  return { profile, followerCount: followerCount ?? 0, followingCount: followingCount ?? 0, outfits: outfitList, avgScore };
}

export async function generateMetadata({ params }: Props) {
  const { username } = await params;
  const result = await getProfileData(username);
  const avatar = result?.profile.avatar_url;
  return {
    title: `@${username} · OGE`,
    description: result?.profile.bio ?? 'Oge — Daily Outfit Rater',
    openGraph: avatar ? { images: [{ url: avatar }] } : undefined,
  };
}

export default async function ProfilePage({ params }: Props) {
  const { username } = await params;
  const result = await getProfileData(username);
  const deepLink = `outfitrater://profile/${username}`;

  if (!result) {
    return (
      <div style={s.page}>
        <div style={s.card}>
          <img src="/oge-logo.png" alt="Oge" style={s.logo} />
          <p style={s.body}>@{username} not found.</p>
        </div>
        <BottomBar deepLink={deepLink} />
      </div>
    );
  }

  const { profile, followerCount, followingCount, outfits, avgScore } = result;

  return (
    <div style={s.page}>
      <AutoRedirect href={deepLink} />

      <div style={s.card}>
        <div style={s.header}>
          {profile.avatar_url
            ? <img src={profile.avatar_url} alt={profile.username} style={s.avatar} />
            : <div style={s.avatarFallback} />}
          <p style={s.username}>@{profile.username}</p>
          {profile.full_name && <p style={s.fullName}>{profile.full_name}</p>}
          {profile.bio && <p style={s.bio}>{profile.bio}</p>}
        </div>

        <div style={s.stats}>
          <Stat label="followers" value={followerCount} />
          <div style={s.statDivider} />
          <Stat label="following" value={followingCount} />
          <div style={s.statDivider} />
          <Stat label="outfits" value={outfits.length} />
          {avgScore !== null && (
            <>
              <div style={s.statDivider} />
              <Stat label="avg score" value={avgScore.toFixed(1)} />
            </>
          )}
        </div>

        {outfits.length > 0 && (
          <div style={s.grid}>
            {outfits.map((o: { id: string; coverUrl: string | null; score: number | null }) => (
              <div key={o.id} style={s.gridItem}>
                {o.coverUrl
                  ? <img src={o.coverUrl} alt="" style={s.gridImg} />
                  : <div style={s.gridPlaceholder} />}
                {o.score !== null && o.score > 0 && (
                  <div style={s.gridScore}>{Number(o.score).toFixed(1)}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomBar deepLink={deepLink} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ margin: 0, fontWeight: 700, fontSize: 18, color: '#fff' }}>{value}</p>
      <p style={{ margin: 0, fontSize: 12, color: '#666', marginTop: 2 }}>{label}</p>
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
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '32px 24px 160px',
    background: '#000',
  },
  card: { maxWidth: 440, width: '100%' },
  logo: { width: 48, height: 48, objectFit: 'contain', marginBottom: 24 },
  body: { fontSize: 16, color: '#ccc', marginBottom: 24 },
  header: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 },
  avatar: { width: 88, height: 88, borderRadius: '50%', objectFit: 'cover', marginBottom: 12 },
  avatarFallback: { width: 88, height: 88, borderRadius: '50%', background: '#222', marginBottom: 12 },
  username: { margin: '0 0 4px', fontWeight: 700, fontSize: 18, color: '#fff' },
  fullName: { margin: '0 0 8px', fontSize: 14, color: '#888' },
  bio: { margin: 0, fontSize: 14, color: '#aaa', textAlign: 'center', lineHeight: '1.5' },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: '16px 0',
    marginBottom: 20,
    borderTop: '1px solid #111',
    borderBottom: '1px solid #111',
  },
  statDivider: { width: 1, height: 24, background: '#222' },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 2,
  },
  gridItem: { position: 'relative', aspectRatio: '3/4', overflow: 'hidden' },
  gridImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  gridPlaceholder: { width: '100%', height: '100%', background: '#111' },
  gridScore: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    fontSize: 11,
    fontWeight: 700,
    padding: '2px 6px',
    borderRadius: 50,
  },
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
