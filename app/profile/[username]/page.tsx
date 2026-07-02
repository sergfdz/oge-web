import { supabaseServer as supabase } from '@/lib/supabase-server';
import { AutoRedirect } from '@/app/components/auto-redirect';
import { OpenInAppButton } from '@/app/components/open-in-app-button';

type Props = { params: Promise<{ username: string }> };

async function getProfileData(username: string) {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('id, username, full_name, avatar_url, bio, city, show_location')
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
    title: `@${username} · Oge`,
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
        <TopBar username={username} />
        <div style={s.notFound}>
          <img src="/oge-logo.png" alt="Oge" style={s.logo} />
          <p style={s.notFoundText}>@{username} not found.</p>
        </div>
        <BottomBar deepLink={deepLink} />
      </div>
    );
  }

  const { profile, followerCount, followingCount, outfits, avgScore } = result;

  return (
    <div style={s.page}>
      <AutoRedirect href={deepLink} />
      <TopBar username={profile.username} />

      <div style={s.content}>
        {/* Info row: avatar · name+followers · score */}
        <div style={s.infoRow}>
          {profile.avatar_url
            ? <img src={profile.avatar_url} alt={profile.username} style={s.avatar} />
            : <div style={s.avatarFallback} />}

          <div style={s.userInfo}>
            {profile.full_name && <p style={s.fullName}>{profile.full_name}</p>}
            <p style={s.usernameText}>@{profile.username}</p>
            <p style={s.followStats}>
              <span style={s.followNum}>{followerCount}</span>
              <span style={s.followLabel}> seguidores</span>
              <span style={s.followDot}> · </span>
              <span style={s.followNum}>{followingCount}</span>
              <span style={s.followLabel}> siguiendo</span>
            </p>
          </div>

          {avgScore !== null && (
            <div style={s.scoreBlock}>
              <p style={s.scoreValue}>{avgScore.toFixed(1)}</p>
              <p style={s.scoreLabel}>punt. media</p>
            </div>
          )}
        </div>

        {/* Bio + location */}
        {(profile.bio || (profile.show_location && profile.city)) && (
          <div style={s.bioSection}>
            {profile.bio && <p style={s.bio}>{profile.bio}</p>}
            {profile.show_location && profile.city && (
              <p style={s.location}>📍 {profile.city}</p>
            )}
          </div>
        )}

        {/* 2-col outfit grid */}
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

function TopBar({ username }: { username: string }) {
  return (
    <div style={s.topBar}>
      <p style={s.topBarUsername}>@{username}</p>
    </div>
  );
}

function BottomBar({ deepLink }: { deepLink: string }) {
  return (
    <div style={s.bottomBar}>
      <OpenInAppButton deepLink={deepLink} style={s.cta} />
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
  topBarUsername: { margin: 0, fontWeight: 700, fontSize: 15, color: '#fff' },
  content: { padding: '16px 16px 0' },

  // Info row
  infoRow: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 },
  avatar: { width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 },
  avatarFallback: { width: 72, height: 72, borderRadius: '50%', background: '#222', flexShrink: 0 },
  userInfo: { flex: 1, minWidth: 0 },
  fullName: { margin: '0 0 2px', fontWeight: 700, fontSize: 15, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  usernameText: { margin: '0 0 6px', fontSize: 13, color: '#888' },
  followStats: { margin: 0, fontSize: 13, color: '#fff' },
  followNum: { fontWeight: 700 },
  followLabel: { color: '#888' },
  followDot: { color: '#555' },
  scoreBlock: { textAlign: 'center', flexShrink: 0 },
  scoreValue: { margin: '0 0 2px', fontWeight: 800, fontSize: 22, color: '#fff' },
  scoreLabel: { margin: 0, fontSize: 11, color: '#666' },

  // Bio
  bioSection: { marginBottom: 16 },
  bio: { margin: '0 0 4px', fontSize: 14, color: '#ccc', lineHeight: '1.5' },
  location: { margin: 0, fontSize: 13, color: '#666' },

  // Grid 2 cols
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 3,
  },
  gridItem: { position: 'relative', aspectRatio: '3/4', overflow: 'hidden' },
  gridImg: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
  gridPlaceholder: { width: '100%', height: '100%', background: '#111' },
  gridScore: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    background: 'rgba(0,0,0,0.72)',
    backdropFilter: 'blur(6px)',
    color: '#fff',
    fontSize: 12,
    fontWeight: 700,
    padding: '3px 8px',
    borderRadius: 50,
  },

  // Bottom bar
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

  // Not found
  notFound: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' },
  logo: { width: 48, height: 48, objectFit: 'contain', marginBottom: 16 },
  notFoundText: { fontSize: 16, color: '#555', margin: 0 },
};
