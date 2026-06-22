export const metadata = {
  title: 'OGE — Daily Outfit Rater',
  description: 'Rate and discover daily outfits.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#000', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
