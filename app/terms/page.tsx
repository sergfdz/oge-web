export const metadata = {
  title: 'Terms and Conditions · Oge',
};

const EFFECTIVE_DATE = 'July 2, 2026';
const CONTACT_EMAIL = 'hello@oge.app';

export default function TermsPage() {
  return (
    <div style={s.page}>
      <div style={s.content}>
        <img src="/oge-logo.png" alt="Oge" style={s.logo} />
        <h1 style={s.h1}>Terms and Conditions</h1>
        <p style={s.meta}>Effective date: {EFFECTIVE_DATE}</p>

        <Section title="1. Who We Are and What Oge Does">
          <p>Oge is a mobile application that lets users publish a daily photo of their outfit and receive ratings from other users on a scale of 1 to 10. Content is organized by region (country and city) and filtered by the viewer's content preferences.</p>
          <p>By creating an account or using Oge, you agree to these Terms and Conditions in full. If you do not agree, do not use the app.</p>
        </Section>

        <Section title="2. Eligibility">
          <p>You must be at least 13 years old to use Oge. If you are under 18, you confirm that you have the permission of a parent or legal guardian.</p>
          <p>By registering, you represent that all information you provide is accurate and that you have the legal capacity to enter into these Terms.</p>
        </Section>

        <Section title="3. Your Account">
          <p>You are responsible for keeping your login credentials confidential and for all activity that occurs under your account. You may not share your account or credentials with anyone else.</p>
          <p>You agree to notify us immediately at <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a> if you suspect any unauthorized access to your account.</p>
          <p>Each person may only hold one account. Creating multiple accounts to circumvent moderation actions or voting restrictions is prohibited.</p>
        </Section>

        <Section title="4. Daily Outfits">
          <p>Each user may publish a maximum of one outfit per calendar day. An outfit may include one or more photos and an optional text description.</p>
          <p>By publishing an outfit, you confirm that you are the person depicted in the photos, or that you have obtained all necessary rights and consents from the people depicted.</p>
        </Section>

        <Section title="5. Voting and Scoring">
          <p>Each user may rate any outfit once with a score from 1 to 10. Votes cannot be changed once submitted.</p>
          <p>Final scores are calculated using a Bayesian algorithm that takes into account the number of votes received. This system is designed to prevent manipulation by a small number of votes. We reserve the right to modify the scoring formula at any time.</p>
          <p>Scores and rankings are for entertainment purposes only and do not constitute any form of professional or commercial evaluation.</p>
        </Section>

        <Section title="6. User Content — License">
          <p>You retain full ownership of the photos and text you publish on Oge ("User Content").</p>
          <p>By posting User Content, you grant Oge a worldwide, non-exclusive, royalty-free, sublicensable license to display, reproduce, distribute, and promote that content within the app and in marketing materials related to Oge (e.g., promotional screenshots, social media posts about the app). This license ends when you delete the content or your account.</p>
          <p>You represent and warrant that your User Content does not infringe the intellectual property, privacy, or any other rights of any third party.</p>
        </Section>

        <Section title="7. Prohibited Content and Conduct">
          <p>You agree not to post or transmit content that:</p>
          <ul style={s.ul}>
            <li>Is sexually explicit, pornographic, or depicts nudity in a non-artistic context.</li>
            <li>Is hateful, discriminatory, or harasses, threatens, or bullies any person or group.</li>
            <li>Depicts or glorifies violence, self-harm, eating disorders, or dangerous behavior.</li>
            <li>Infringes the copyright, trademark, or privacy rights of others.</li>
            <li>Contains spam, advertising, or unsolicited promotional material.</li>
            <li>Is misleading, deceptive, or impersonates another person or entity.</li>
            <li>Depicts minors in a sexualized or inappropriate context.</li>
          </ul>
          <p>You also agree not to:</p>
          <ul style={s.ul}>
            <li>Use automated tools (bots, scripts) to cast votes, create accounts, or interact with the app.</li>
            <li>Coordinate with others to artificially inflate or deflate scores.</li>
            <li>Attempt to reverse-engineer, decompile, or extract source code from the app.</li>
            <li>Interfere with the app's infrastructure or security.</li>
          </ul>
        </Section>

        <Section title="8. Social Features — Follows, Saves, and Collections">
          <p>Oge allows you to follow other users, save outfits, and organize saved outfits into personal collections. These features are intended for personal, non-commercial use within the app.</p>
          <p>You may block other users to prevent them from seeing your content and interacting with you. Blocking is mutual and immediate.</p>
        </Section>

        <Section title="9. Location">
          <p>Oge uses location (country and city) to organize content in regional feeds and rankings. Location is set manually by you when configuring your profile. We do not access your device's GPS or location services.</p>
          <p>The location associated with an outfit is fixed at the time of publication and does not change if you later update your profile location.</p>
        </Section>

        <Section title="10. Content Moderation">
          <p>We reserve the right — but are not obligated — to review, moderate, or remove any User Content that we determine, in our sole discretion, violates these Terms or is otherwise harmful or objectionable.</p>
          <p>We may suspend or permanently ban accounts that repeatedly violate these Terms, without prior notice and without liability to you.</p>
          <p>To report content that you believe violates these Terms, use the in-app reporting feature available on any outfit or profile.</p>
        </Section>

        <Section title="11. Intellectual Property">
          <p>The Oge name, logo, design, and all original content in the app (excluding User Content) are the exclusive property of Oge and are protected by applicable intellectual property laws. You may not use them without our prior written consent.</p>
        </Section>

        <Section title="12. Disclaimer of Warranties">
          <p>Oge is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the app will always be available, uninterrupted, or error-free.</p>
        </Section>

        <Section title="13. Limitation of Liability">
          <p>To the maximum extent permitted by applicable law, Oge shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of data, loss of profits, or reputational harm — arising out of or related to your use of the app, even if we have been advised of the possibility of such damages.</p>
        </Section>

        <Section title="14. Account Deletion">
          <p>You may delete your account at any time from Settings → Delete Account. Upon deletion, your profile, outfits, and personal data will be permanently removed in accordance with our Privacy Policy. Some residual data (e.g., anonymized aggregate statistics) may be retained.</p>
        </Section>

        <Section title="15. Changes to These Terms">
          <p>We may update these Terms from time to time. We will notify you of material changes through the app or by email. Your continued use of Oge after the new Terms take effect constitutes acceptance of the updated Terms.</p>
        </Section>

        <Section title="16. Governing Law and Disputes">
          <p>These Terms are governed by the laws of Spain. Any disputes arising from these Terms or your use of Oge shall be subject to the exclusive jurisdiction of the courts of Spain.</p>
        </Section>

        <Section title="17. Contact">
          <p>If you have questions about these Terms, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={s.link}>{CONTACT_EMAIL}</a>.</p>
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
};
