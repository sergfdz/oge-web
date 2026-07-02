'use client';

const IOS_URL = 'https://apps.apple.com';
const ANDROID_URL = 'https://play.google.com';

export function OpenInAppButton({ deepLink, style }: { deepLink: string; style?: React.CSSProperties }) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const storeUrl = /Android/i.test(navigator.userAgent) ? ANDROID_URL : IOS_URL;

    // If app opens, the tab goes to background and visibilitychange fires — cancel the fallback.
    // If app is not installed, we stay visible and the timer fires → go to store.
    const timer = setTimeout(() => {
      window.location.href = storeUrl;
    }, 2000);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) clearTimeout(timer);
    }, { once: true });

    window.location.href = deepLink;
  }

  return (
    <a href={deepLink} onClick={handleClick} style={style}>
      Open in Oge
    </a>
  );
}
