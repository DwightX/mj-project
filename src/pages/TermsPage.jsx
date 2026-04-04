import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  {
    title: 'Agreement to Terms',
    body: [
      'By accessing this website or enrolling in the LIT Program, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this site or purchase any services.',
      'These Terms apply to all visitors, clients, and others who access or use the services provided by Matt Njoku through leadershipintraining.com.',
    ],
  },
  {
    title: 'Program Description',
    body: [
      'The LIT Program (Leadership in Transition) is a leadership development course available as a 10-week full program or a 5-week fast track. The program includes 10 outcome-driven modules covering leadership frameworks, team management, accountability, and performance.',
      'Program content is delivered digitally. Access details are provided upon confirmed enrollment and payment.',
      'Matt Njoku reserves the right to update, refine, or improve program content at any time. Material improvements will be made available to enrolled participants.',
    ],
  },
  {
    title: 'Enrollment & Payment',
    body: [
      'Individual Enrollment: The current founder rate is $1,099 for full program access. This rate is offered for a limited time and is subject to change without notice.',
      'Team & Company Pricing: Teams of 5–9 participants are priced at $950 per person. Teams of 10–19 participants are priced at $850 per person. Organizations with 20 or more participants receive custom pricing, available upon request.',
      'Payment is due in full at the time of enrollment unless a payment arrangement has been agreed to in writing. Enrollment is not confirmed until payment is received.',
      'Pricing for team and organizational engagements will be outlined in a separate written agreement prior to payment.',
    ],
  },
  {
    title: 'Refund Policy',
    body: [
      'Individual Enrollment: A full refund is available within 7 days of purchase, provided you have not accessed more than the first module of the program. After 7 days or after accessing module 2 or beyond, no refund will be issued.',
      'Team & Organization Engagements: Refund terms for team and organizational enrollments are outlined in the separate engagement agreement. In general, deposits are non-refundable once program preparation has begun.',
      'To request a refund, contact matt@leadershipintraining.com within the applicable window. Refunds are processed within 10 business days.',
    ],
  },
  {
    title: 'Intellectual Property',
    body: [
      'All content within the LIT Program — including but not limited to course materials, frameworks, videos, worksheets, and written content — is the proprietary intellectual property of Matt Njoku.',
      'Enrolled participants are granted a limited, non-transferable, non-exclusive license to access and use program materials for personal leadership development only.',
      'You may not reproduce, distribute, publish, share, sublicense, resell, or create derivative works from any program content without express written permission from Matt Njoku.',
    ],
  },
  {
    title: 'Disclaimer of Results',
    body: [
      'The LIT Program is designed to provide frameworks, tools, and strategies to support leadership development. Results will vary based on individual effort, experience, circumstances, and the application of program content.',
      'Nothing on this website or within the program constitutes a guarantee of specific outcomes, career advancement, revenue growth, or any measurable result.',
      'Testimonials and examples shared on this site represent individual experiences and are not a guarantee that all participants will achieve the same results.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'To the fullest extent permitted by applicable law, Matt Njoku shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or participation in the LIT Program.',
      "In no event shall Matt Njoku's total liability to you exceed the amount paid by you for the program or service giving rise to the claim.",
    ],
  },
  {
    title: 'Acceptable Use',
    body: [
      "You agree not to use this website or any services offered for any unlawful purpose or in a way that could damage, disable, or impair the site or interfere with any other party's use.",
      'You agree not to attempt to gain unauthorized access to any portion of the site, other accounts, or any systems connected to this website.',
    ],
  },
  {
    title: 'Governing Law',
    body: [
      'These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.',
      'Any disputes arising under these Terms shall be resolved in the courts of competent jurisdiction located in New York, NY.',
    ],
  },
  {
    title: 'Changes to These Terms',
    body: [
      'Matt Njoku reserves the right to update these Terms of Service at any time. The "Last Updated" date at the top of this page will reflect any changes. Continued use of this website or program access after updates constitutes acceptance of the revised terms.',
      'Material changes will be communicated to enrolled participants via email.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'For questions about these Terms of Service, please contact:',
      'Matt Njoku\nleadershipintraining.com\nmatt@leadershipintraining.com\nNew York, NY',
    ],
  },
]

export default function TermsPage() {
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
              Terms of Service
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
                These Terms of Service govern your use of this website and your participation in the LIT Program
                offered by Matt Njoku. Please read these terms carefully before enrolling or using any services.
                By proceeding, you agree to be bound by the terms outlined below.
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
