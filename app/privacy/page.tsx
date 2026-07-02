export const metadata = {
  title: 'Privacy Policy · Oge',
};

const EFFECTIVE_DATE = 'July 2, 2026';
const CONTACT_EMAIL = 'hello@oge.app';

export default function PrivacyPage() {
  return (
    <div style={s.page}>
      <div style={s.content}>
        <img src="/oge-logo.png" alt="Oge" style={s.logo} />
        <h1 style={s.h1}>Privacy Policy</h1>
        <p style={s.meta}>Effective date: {EFFECTIVE_DATE}</p>

        <Section title="1. Who We Are">
          <p>Oge is a mobile application where users share daily outfit photos and rate each other's style. This Privacy Policy explains what personal data we collect when you use Oge, why we collect it, and what rights you have over it.</p>
          <p>For any privacy-related questions, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a>.</p>
        </Section>

        <Section title="2. Data We Collect">
          <p><strong style={s.strong}>Account data:</strong> When you register, we collect your email address and the password you create (stored encrypted). You may optionally add a username, full name, and profile photo.</p>
          <p><strong style={s.strong}>Profile data:</strong> Country and city (set manually by you), content preference (men, women, or all), and an optional short bio. We do not access your device's GPS or location services at any point.</p>
          <p><strong style={s.strong}>Outfit content:</strong> The photos you upload and any text description you add. Each outfit also stores the location (country and city) from your profile at the time of publication.</p>
          <p><strong style={s.strong}>Activity data:</strong> The votes you cast on other outfits, the outfits you save, the collections you create, and the accounts you follow or block.</p>
          <p><strong style={s.strong}>Push notification token:</strong> If you grant permission, we store a device token issued by Apple (APNs) or Google (FCM) to deliver notifications about activity on your outfits. You can revoke this permission at any time in your device settings.</p>
          <p><strong style={s.strong}>Technical data:</strong> Basic request logs (timestamps, error logs) retained for up to 30 days for security and debugging purposes. We do not use third-party analytics SDKs.</p>
        </Section>

        <Section title="3. How We Use Your Data">
          <ul style={s.ul}>
            <li><strong style={s.strong}>To operate the app:</strong> showing you the feed, computing outfit scores and regional rankings, enabling voting, saves, follows, and collections.</li>
            <li><strong style={s.strong}>To send push notifications:</strong> informing you when someone votes on your outfit, follows you, or interacts with your content (only if you have granted permission).</li>
            <li><strong style={s.strong}>To personalize your feed:</strong> filtering content based on your selected region and content preference.</li>
            <li><strong style={s.strong}>To maintain safety:</strong> detecting and acting on policy violations, processing reports, and enforcing bans.</li>
            <li><strong style={s.strong}>To improve Oge:</strong> using anonymized, aggregate data (e.g., how many outfits are posted per day) to understand how the app is used. We do not build individual behavioral profiles for this purpose.</li>
          </ul>
          <p>We do not use your data for advertising. We do not sell your personal data to third parties.</p>
        </Section>

        <Section title="4. Legal Basis for Processing (GDPR)">
          <p>For users in the European Economic Area (EEA) and the United Kingdom, we process your personal data under the following legal bases:</p>
          <ul style={s.ul}>
            <li><strong style={s.strong}>Performance of a contract (Art. 6.1.b GDPR):</strong> processing your account data, content, votes, follows, and saves is necessary to provide the service you signed up for.</li>
            <li><strong style={s.strong}>Legitimate interests (Art. 6.1.f GDPR):</strong> security monitoring, abuse prevention, error logging, and service improvement — provided these interests are not overridden by your rights.</li>
            <li><strong style={s.strong}>Consent (Art. 6.1.a GDPR):</strong> sending push notifications. You may withdraw this consent at any time in your device settings without affecting the lawfulness of prior processing.</li>
          </ul>
        </Section>

        <Section title="5. Who We Share Your Data With">
          <p>We share your data only with the following service providers, and only to the extent necessary to operate Oge:</p>
          <ul style={s.ul}>
            <li><strong style={s.strong}>Supabase:</strong> our backend provider, responsible for database storage, file storage (outfit photos), and authentication. Data is stored in the European Union. Supabase processes data as a data processor under a Data Processing Agreement.</li>
            <li><strong style={s.strong}>Apple (APNs) and Google (FCM):</strong> for delivering push notifications to iOS and Android devices respectively. Only your device token and a notification payload are shared.</li>
            <li><strong style={s.strong}>Expo:</strong> the framework used to build and distribute the app. Expo may process technical metadata (e.g., crash reports) as part of the app infrastructure.</li>
          </ul>
          <p>We do not share your data with advertisers, data brokers, or any other third parties.</p>
        </Section>

        <Section title="6. Public Information">
          <p>The following information is visible to all users of Oge:</p>
          <ul style={s.ul}>
            <li>Your username, profile photo, full name (if provided), and bio.</li>
            <li>Your country and city (if you choose to display location in your profile).</li>
            <li>The outfits you publish, including their scores and the number of votes.</li>
            <li>Your public collections.</li>
            <li>Your follower and following counts.</li>
          </ul>
          <p>Your email address is never shown to other users. The specific scores you assign to each outfit are private.</p>
        </Section>

        <Section title="7. Data Retention">
          <p>We retain your personal data for as long as your account is active. When you delete your account:</p>
          <ul style={s.ul}>
            <li>Your profile, outfits, photos, votes, saves, collections, and follows are permanently deleted within 30 days.</li>
            <li>Anonymized aggregate data (e.g., total vote counts used in historical score calculations) may be retained indefinitely as it can no longer be linked to you.</li>
            <li>Push notification tokens are deleted immediately upon account deletion.</li>
          </ul>
        </Section>

        <Section title="8. Security">
          <p>All data is transmitted over encrypted connections (HTTPS/TLS). Passwords are hashed using bcrypt and are never stored in plain text. Access to the database is restricted to authorized personnel and automated systems.</p>
          <p>No system is completely secure. If you become aware of a security vulnerability in Oge, please report it to <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a>.</p>
        </Section>

        <Section title="9. Your Rights">
          <p>Depending on where you live, you have some or all of the following rights regarding your personal data:</p>
          <ul style={s.ul}>
            <li><strong style={s.strong}>Right of access:</strong> to request a copy of the personal data we hold about you.</li>
            <li><strong style={s.strong}>Right to rectification:</strong> to correct inaccurate or incomplete data. You can update most of your data directly in the app under Settings → Edit Profile.</li>
            <li><strong style={s.strong}>Right to erasure:</strong> to request deletion of your personal data. You can delete your account directly in the app under Settings → Delete Account, or by contacting us.</li>
            <li><strong style={s.strong}>Right to restriction:</strong> to ask us to restrict processing of your data in certain circumstances.</li>
            <li><strong style={s.strong}>Right to data portability:</strong> to receive your data in a structured, machine-readable format.</li>
            <li><strong style={s.strong}>Right to object:</strong> to object to processing based on legitimate interests.</li>
            <li><strong style={s.strong}>Right to withdraw consent:</strong> where processing is based on consent (push notifications), you may withdraw at any time.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a>. We will respond within 30 days. You also have the right to lodge a complaint with your local data protection authority (in Spain: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" style={s.link}>AEPD</a>).</p>
        </Section>

        <Section title="10. Children">
          <p>Oge is not directed to children under 13 years of age. We do not knowingly collect personal data from children under 13. If you believe that a child under 13 has created an account, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a> and we will delete the account and associated data promptly.</p>
        </Section>

        <Section title="11. International Transfers">
          <p>Oge is operated from Spain. If you access the app from outside the EEA, your data may be transferred to and processed in countries that may not offer the same level of data protection as your home country. By using Oge, you consent to such transfers. Where required, we ensure appropriate safeguards are in place (e.g., Standard Contractual Clauses with Supabase).</p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time to reflect changes in the app, our practices, or applicable law. We will notify you of material changes through the app. The date at the top of this page always reflects the most recent version.</p>
        </Section>

        <Section title="13. Contact">
          <p>For any questions, requests, or complaints regarding this Privacy Policy or how we handle your data, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a>.</p>
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
  content: { maxWidth: 680, margin: '0 auto', padding: '0 24px', color: '#ccc', fontSize: 15, lineHeight: '1.75' },
  logo: { width: 40, height: 40, objectFit: 'contain', display: 'block', marginBottom: 24 },
  h1: { fontSize: 28, fontWeight: 800, color: '#fff', margin: '0 0 6px' },
  meta: { fontSize: 13, color: '#555', margin: '0 0 40px' },
  section: { marginBottom: 36 },
  h2: { fontSize: 17, fontWeight: 700, color: '#fff', margin: '0 0 12px' },
  ul: { paddingLeft: 20, margin: '8px 0 12px', display: 'flex', flexDirection: 'column', gap: 7 },
  link: { color: '#208AEF', textDecoration: 'none' },
  strong: { color: '#fff', fontWeight: 600 },
};
