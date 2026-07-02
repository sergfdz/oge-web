export const metadata = {
  title: 'Privacy Policy · Oge',
};

const EFFECTIVE_DATE = 'July 2, 2026';
const CONTACT_EMAIL = 'hello@oge.app';
const APP_NAME = 'Oge';
const COMPANY = 'Oge';

export default function PrivacyPage() {
  return (
    <div style={s.page}>
      <div style={s.content}>
        <img src="/oge-logo.png" alt="Oge" style={s.logo} />
        <h1 style={s.h1}>Privacy Policy</h1>
        <p style={s.meta}>Effective date: {EFFECTIVE_DATE}</p>

        <Section title="1. Who We Are">
          <p>{COMPANY} operates the {APP_NAME} mobile application ("the App"). This policy explains what data we collect, how we use it, and your rights regarding it.</p>
          <p>Contact: <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a></p>
        </Section>

        <Section title="2. Data We Collect">
          <p><strong style={s.strong}>Account data:</strong> email address, username, full name (optional), profile photo (optional).</p>
          <p><strong style={s.strong}>Location data:</strong> country and city that you manually select. We do not access your device's GPS.</p>
          <p><strong style={s.strong}>Content:</strong> outfit photos and descriptions you upload.</p>
          <p><strong style={s.strong}>Usage data:</strong> votes you cast, content you save, accounts you follow.</p>
          <p><strong style={s.strong}>Device data:</strong> push notification token (if you grant permission).</p>
        </Section>

        <Section title="3. How We Use Your Data">
          <ul style={s.ul}>
            <li>To provide and operate the App (feed, voting, rankings, profiles).</li>
            <li>To send push notifications about activity on your posts (if enabled).</li>
            <li>To enforce our Terms and Conditions and moderate content.</li>
            <li>To improve the App through aggregate, anonymized analytics.</li>
          </ul>
          <p>We do not sell your personal data to third parties.</p>
        </Section>

        <Section title="4. Legal Basis (GDPR)">
          <p>For users in the European Economic Area, we process your data under the following bases:</p>
          <ul style={s.ul}>
            <li><strong style={s.strong}>Contract performance:</strong> to provide the service you signed up for.</li>
            <li><strong style={s.strong}>Legitimate interests:</strong> security, abuse prevention, product improvement.</li>
            <li><strong style={s.strong}>Consent:</strong> push notifications (you can withdraw at any time).</li>
          </ul>
        </Section>

        <Section title="5. Data Sharing">
          <p>We share data only with:</p>
          <ul style={s.ul}>
            <li><strong style={s.strong}>Supabase:</strong> our backend provider, used for database and authentication (data stored in EU region).</li>
            <li><strong style={s.strong}>Expo / Apple / Google:</strong> for push notification delivery.</strong></li>
          </ul>
          <p>We do not share your data with advertisers or data brokers.</p>
        </Section>

        <Section title="6. Data Retention">
          <p>We retain your data for as long as your account is active. You may request deletion at any time (see Section 8). After deletion, we may retain anonymized aggregate data indefinitely.</p>
        </Section>

        <Section title="7. Security">
          <p>We use industry-standard security measures including encrypted connections (HTTPS/TLS) and access controls. No system is completely secure; use a strong, unique password.</p>
        </Section>

        <Section title="8. Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul style={s.ul}>
            <li>Access the personal data we hold about you.</li>
            <li>Correct inaccurate data.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Object to or restrict certain processing.</li>
            <li>Data portability.</li>
          </ul>
          <p>To exercise these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a>. You can also delete your account directly from the App under Settings → Delete Account.</p>
        </Section>

        <Section title="9. Children">
          <p>The App is not directed to children under 13. We do not knowingly collect personal data from children under 13. If you believe a child has provided us data, contact us and we will delete it.</p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>We may update this policy from time to time. We will notify you of material changes through the App. Continued use after changes constitutes acceptance.</p>
        </Section>

        <Section title="11. Contact">
          <p>Questions or complaints? Email us at <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a>.</p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={s.section}>
      <h2 style={s.h2}>{title}</h2>
      {children}
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', background: '#000', padding: '40px 0 80px' },
  content: { maxWidth: 680, margin: '0 auto', padding: '0 24px', color: '#ccc', fontSize: 15, lineHeight: '1.7' },
  logo: { width: 40, height: 40, objectFit: 'contain', display: 'block', marginBottom: 24 },
  h1: { fontSize: 28, fontWeight: 800, color: '#fff', margin: '0 0 6px' },
  meta: { fontSize: 13, color: '#555', margin: '0 0 40px' },
  section: { marginBottom: 32 },
  h2: { fontSize: 17, fontWeight: 700, color: '#fff', margin: '0 0 10px' },
  ul: { paddingLeft: 20, margin: '8px 0', display: 'flex', flexDirection: 'column', gap: 6 },
  link: { color: '#208AEF', textDecoration: 'none' },
  strong: { color: '#fff', fontWeight: 600 },
};
