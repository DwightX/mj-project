import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    title: 'Information We Collect',
    body: [
      'When you use this website, we may collect the following types of information:',
      'Contact information you provide voluntarily — including your first name, last name, and message content — when you submit the contact form on this site.',
      'Booking information collected through Calendly when you schedule a strategy call, including your name, email address, and any details you provide during the booking process.',
      'Basic usage data such as pages visited and time spent on the site, collected through standard web server logs. We do not use third-party analytics tracking at this time.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'Information you provide is used solely to respond to your inquiries, schedule calls, and communicate about the LIT Program or other coaching services.',
      'We may follow up with relevant program information based on your expressed interest. You may opt out of any follow-up communication at any time by replying to any email with "unsubscribe" or by contacting us directly.',
      'We do not use your information for automated decision-making, profiling, or any purpose other than direct communication related to the services offered on this site.',
    ],
  },
  {
    title: 'Information Sharing',
    body: [
      'We do not sell, rent, or trade your personal information to any third party under any circumstances.',
      'Your information is shared only with Calendly (for scheduling purposes) and your email provider when you communicate with us directly. These third parties have their own privacy policies governing how they handle your data.',
      'We may disclose information if required by law or to protect the rights, property, or safety of Matt Njoku, this business, or others.',
    ],
  },
  {
    title: 'Third-Party Services',
    body: [
      "This website uses Calendly to facilitate appointment scheduling. When you book a call through Calendly, your information is subject to Calendly's Privacy Policy in addition to this policy.",
      'The contact form on this site sends messages directly to our email inbox via your native email client. No form data is stored on this website\'s servers.',
      'We do not integrate any advertising networks, social media trackers, or third-party analytics platforms.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'This website does not currently use cookies for tracking or analytics purposes.',
      'If you access the site through a browser that sets functional cookies as part of standard operation (such as session cookies), those are managed by your browser and are not used to track your activity across sites.',
    ],
  },
  {
    title: 'Data Retention',
    body: [
      'We retain information you provide only for as long as necessary to respond to your inquiry or maintain an ongoing coaching relationship.',
      'If you would like your information removed from our records, contact us at matt@leadershipintraining.com and we will fulfill your request within a reasonable timeframe.',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'You have the right to request access to the personal information we hold about you, to request corrections, and to request deletion of your data.',
      'To exercise any of these rights, contact us directly at matt@leadershipintraining.com. We will respond to all reasonable requests promptly.',
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      'This website and the LIT Program are intended for adults aged 18 and older. We do not knowingly collect personal information from individuals under 18. If you believe a minor has provided us with personal information, please contact us immediately.',
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, the "Last Updated" date at the top of this page will reflect the change. Continued use of this website after any updates constitutes acceptance of the revised policy.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'If you have any questions about this Privacy Policy or how your information is handled, please reach out:',
      'Matt Njoku\nleadershipintraining.com\nmatt@leadershipintraining.com\nNew York, NY',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>

        <section className="pt-40 pb-16 bg-dark">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: '2px solid #C8956C', paddingTop: '1.1rem' }}>
              <span className="section-number">Legal</span>
              <span className="section-pipe" />
              <span className="section-label">Matt Njoku</span>
            </div>
            <div className="divider-gold mb-5" />
            <h1 className="heading-page mb-4">
              Privacy Policy
            </h1>
            <p className="font-serif italic text-gold" style={{ fontSize: '1rem', opacity: 0.7 }}>
              Last updated: April 2, 2026
            </p>
          </div>
        </section>

        <section className="py-20 bg-cream">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <div style={{ maxWidth: '720px' }}>

              <p className="legal-body mb-12 pb-8" style={{ fontSize: '1rem', borderBottom: '1px solid rgba(28,21,16,0.1)' }}>
                This Privacy Policy describes how Matt Njoku (<em>leadershipintraining.com</em>) collects, uses, and protects
                the personal information you provide when visiting this website or engaging with the LIT Program.
                Your privacy is important and this policy is written in plain language so you know exactly what to expect.
              </p>

              {sections.map((section, i) => (
                <div
                  key={section.title}
                  style={{ marginBottom: '2.75rem', paddingBottom: '2.75rem', borderBottom: i < sections.length - 1 ? '1px solid rgba(28,21,16,0.1)' : 'none' }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="legal-accent" />
                    <h2 className="legal-section-title">{section.title}</h2>
                  </div>
                  <div style={{ paddingLeft: '15px', marginTop: '1rem' }}>
                    {section.body.map((para, j) => (
                      <p
                        key={j}
                        className="legal-body"
                        style={{ marginBottom: j < section.body.length - 1 ? '1rem' : '0', whiteSpace: 'pre-line' }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
