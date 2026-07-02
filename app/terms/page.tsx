export const metadata = {
  title: 'Terms and Conditions · Oge',
};

const EFFECTIVE_DATE = 'July 2, 2026';
const CONTACT_EMAIL = 'hello@oge.app';
const APP_NAME = 'Oge';
const COMPANY = 'Oge';

export default function TermsPage() {
  return (
    <div style={s.page}>
      <div style={s.content}>
        <img src="/oge-logo.png" alt="Oge" style={s.logo} />
        <h1 style={s.h1}>Terms and Conditions</h1>
        <p style={s.meta}>Effective date: {EFFECTIVE_DATE}</p>

        <Section title="1. Acceptance of Terms">
          <p>By downloading, installing, or using {APP_NAME} ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the App.</p>
        </Section>

        <Section title="2. Eligibility">
          <p>You must be at least 13 years old to use the App. By using the App, you represent that you meet this requirement.</p>
        </Section>

        <Section title="3. User Accounts">
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use.</p>
        </Section>

        <Section title="4. User Content">
          <p>You retain ownership of the photos and content you post ("User Content"). By posting User Content, you grant {COMPANY} a worldwide, non-exclusive, royalty-free license to display, distribute, and promote your content within the App.</p>
          <p>You agree not to post content that is illegal, abusive, defamatory, or infringes the rights of others.</p>
        </Section>

        <Section title="5. Acceptable Use">
          <p>You agree not to:</p>
          <ul style={s.ul}>
            <li>Use the App for any unlawful purpose.</li>
            <li>Post content that is obscene, hateful, or harassing.</li>
            <li>Impersonate other users or persons.</li>
            <li>Attempt to gain unauthorized access to the App or its systems.</li>
            <li>Scrape, crawl, or collect data from the App without our consent.</li>
          </ul>
        </Section>

        <Section title="6. Voting and Scores">
          <p>Scores and rankings are computed algorithmically and are for entertainment purposes. {COMPANY} reserves the right to modify the scoring system at any time.</p>
        </Section>

        <Section title="7. Moderation">
          <p>{COMPANY} reserves the right to remove content or suspend accounts that violate these Terms, at our sole discretion and without prior notice.</p>
        </Section>

        <Section title="8. Intellectual Property">
          <p>The App and its original content (excluding User Content) are the exclusive property of {COMPANY} and are protected by applicable intellectual property laws.</p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p>The App is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the App will be uninterrupted, error-free, or free of harmful components.</p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>To the fullest extent permitted by law, {COMPANY} shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.</p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p>We may update these Terms at any time. Continued use of the App after changes constitutes acceptance of the revised Terms. We will notify users of material changes through the App.</p>
        </Section>

        <Section title="12. Termination">
          <p>We reserve the right to terminate or suspend your account at any time for violation of these Terms.</p>
        </Section>

        <Section title="13. Governing Law">
          <p>These Terms are governed by the laws of Spain, without regard to conflict of law provisions.</p>
        </Section>

        <Section title="14. Contact">
          <p>Questions about these Terms? Contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a>.</p>
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
};
