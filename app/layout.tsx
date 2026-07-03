import './globals.css';

export const metadata = {
  title: 'Oge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#000', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
