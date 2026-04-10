import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function SectionTransition({ from = 'light' }) {
  const bg = from === 'light' ? '#F0E9DF' : '#0C1420'
  const thick = from === 'light' ? 'rgba(28,21,16,0.22)' : 'rgba(200,149,108,0.4)'
  const thin = from === 'light' ? 'rgba(28,21,16,0.08)' : 'rgba(200,149,108,0.12)'
  return (
    <div style={{ background: bg, padding: '0 2rem' }}>
      <div style={{ height: '3px', background: thick }} />
      <div style={{ height: '1px', background: thin, marginTop: '4px' }} />
    </div>
  )
}

function FadeSection({ children, className, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

const outcomes = [
  'Confidence in leading any type of employee',
  'Clear systems for accountability and performance',
  'Stronger team trust and engagement',
  'The ability to lead without micromanaging',
]

const modules = [
  { num: '01', title: 'How to Coach Your Team to Consistently Perform Without Micromanaging' },
  { num: '02', title: 'How to Challenge and Retain Top Performers Without Burning Them Out' },
  { num: '03', title: 'How to Balance Empathy and Accountability as a Leader' },
  { num: '04', title: 'How to Set Clear Expectations That Eliminate Confusion and Underperformance' },
  { num: '05', title: 'How to Lead with Integrity and Make Decisions Your Team Trusts' },
]


export default function ProgramPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Program hero */}
        <section className="pt-40 pb-28 bg-dark">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: '2px solid #C8956C', paddingTop: '1.1rem' }}>
                <span className="section-number">LIT</span>
                <span className="section-pipe" />
                <span className="section-label">Leadership in Transition Program</span>
              </div>

              <div className="divider-gold mb-5" />

              <h1 className="font-sans font-bold text-cream mb-7" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.97, letterSpacing: '-3px' }}>
                The LIT<br /><span className="text-gold">Program</span>
              </h1>

              <p className="pull-quote mb-6" style={{ maxWidth: '600px' }}>
                "Transform how you lead, communicate, and drive performance. No years of trial and error required."
              </p>

              <div style={{ width: '100%', maxWidth: '600px', height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '1.5rem' }} />

              <p className="body-lead mb-10" style={{ maxWidth: '580px' }}>
                A 10-week leadership development program (or 5-week fast track) built for leaders who are ready to stop guessing and start leading with clarity, structure, and confidence.
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <Link to="/#booking" className="btn btn-gold">
                  Apply for Beta Cohort
                </Link>
                <Link to="/about" className="btn btn-outline">
                  About Matt
                </Link>
              </div>
              <p className="font-serif italic text-gold" style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                Limited to 10–15 Business Managers. Spots Filling Fast.
              </p>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="dark" />

        {/* Outcomes */}
        <section className="py-28 bg-cream-deep">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-12" style={{ borderTop: '2px solid #A17B4F', paddingTop: '1.1rem' }}>
                <span className="section-number">01</span>
                <span className="section-pipe-dark" />
                <span className="section-label-dark">Outcomes</span>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="accent-bar-light mb-5" />
                  <h2 className="heading-xl-dark mb-6">
                    What You'll Walk Away With
                  </h2>
                  <p className="pull-quote-light">
                    "Proven frameworks you can apply immediately. Not theory you'll forget by Monday."
                  </p>
                </div>
                <div className="space-y-0">
                  {outcomes.map((o, i) => (
                    <div key={o} className="flex items-start gap-4" style={{ padding: '1.1rem 0', borderBottom: i < outcomes.length - 1 ? '1px solid rgba(28,21,16,0.12)' : 'none' }}>
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="8" cy="8" r="7" fill="rgba(161,123,79,0.12)" />
                        <path d="M5 8l2.5 2.5L11 5.5" stroke="#A17B4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="body-lead-dark" style={{ fontSize: '0.95rem' }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Program modules */}
        <section className="py-28 bg-dark">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-12" style={{ borderTop: '2px solid #C8956C', paddingTop: '1.1rem' }}>
                <span className="section-number">02</span>
                <span className="section-pipe" />
                <span className="section-label">Curriculum</span>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="accent-bar mb-5" />
                  <h2 className="heading-xl mb-4">
                    Program Modules
                  </h2>
                  <p className="pull-quote" style={{ opacity: 0.85 }}>
                    10 outcome-driven modules. Real-world scenarios. Frameworks you use on Monday.
                  </p>
                </div>
                <div className="space-y-0">
                  {modules.map((m) => (
                    <div key={m.num} className="flex items-start gap-5" style={{ padding: '1.25rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                      <span className="section-number flex-shrink-0" style={{ paddingTop: '3px' }}>{m.num}</span>
                      <span className="body-lead" style={{ fontSize: '0.9rem' }}>{m.title}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-5" style={{ padding: '1.25rem 0' }}>
                    <span className="font-sans font-extrabold text-gold" style={{ fontSize: '0.7rem', letterSpacing: '0.18em', flexShrink: 0, opacity: 0.4 }}>+5</span>
                    <span className="font-serif italic text-gold" style={{ fontSize: '0.9rem', opacity: 0.55 }}>And five more modules across the full program.</span>
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="dark" />

        {/* Beta Cohort CTA */}
        <section id="individual-pricing" className="py-28 bg-cream">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-12" style={{ borderTop: '2px solid #A17B4F', paddingTop: '1.1rem' }}>
                <span className="section-number">03</span>
                <span className="section-pipe-dark" />
                <span className="section-label-dark">Beta Cohort</span>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="accent-bar-light mb-5" />
                  <h2 className="heading-xl-dark mb-4">
                    Beta Cohort<br />
                    <span className="text-gold-light">Limited Pricing</span>
                  </h2>
                  <p className="body-lead-dark mb-8" style={{ maxWidth: '440px' }}>
                    We're accepting a limited group of managers for our inaugural cohort. Apply now to learn more about fit, format, and pricing.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Link to="/#booking" className="btn btn-navy">
                      Apply for Beta Cohort
                    </Link>
                    <Link to="/#contact" className="btn btn-outline-dark">
                      Ask a Question
                    </Link>
                  </div>
                  <p className="font-serif italic text-gold-light" style={{ fontSize: '0.8rem' }}>
                    Limited to 10–15 Business Managers. Spots Filling Fast.
                  </p>
                </div>
                <div>
                  <p className="font-sans font-extrabold text-text-dim mb-6" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>What's Included</p>
                  <div className="space-y-0">
                    {[
                      '10 outcome-driven leadership modules',
                      '10-week program or 5-week fast track',
                      'Proven frameworks you can apply immediately',
                      'Real-world leadership scenarios, not theory',
                      '1:1 coaching and accountability support',
                    ].map((f, i, arr) => (
                      <div key={f} className="flex items-start gap-4" style={{ padding: '1rem 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(28,21,16,0.12)' : 'none' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                          <circle cx="8" cy="8" r="7" fill="rgba(161,123,79,0.12)" />
                          <path d="M5 8l2.5 2.5L11 5.5" stroke="#A17B4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="body-lead-dark" style={{ fontSize: '0.9rem' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* CTA */}
        <section className="py-28 bg-cream">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="accent-bar-light mb-5" />
                  <h2 className="heading-xl-dark mb-3">
                    Not Sure Which Option Is Right?
                  </h2>
                  <p className="pull-quote-light mb-7">
                    "Book a free 30-minute strategy call and we'll find the right path based on your goals, team size, and current challenges."
                  </p>
                  <div style={{ width: '48px', height: '1px', background: 'rgba(28,21,16,0.12)', marginBottom: '1.75rem' }} />
                  <p className="body-lead-dark mb-10">
                    No pitch, no pressure. Just a real conversation about where you are, where you want to go, and what it takes to get there.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <Link to="/#booking" className="btn btn-navy">
                      Apply for Beta Cohort
                    </Link>
                    <Link to="/#contact" className="btn btn-outline-dark">
                      Contact Us
                    </Link>
                  </div>
                  <p className="font-serif italic text-gold-light" style={{ fontSize: '0.8rem' }}>
                    Limited to 10–15 Business Managers. Spots Filling Fast.
                  </p>
                </div>
                <div style={{ borderLeft: '1px solid rgba(28,21,16,0.12)', paddingLeft: '3rem' }}>
                  <p className="font-sans font-extrabold text-text-dim mb-6" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>This is for you if</p>
                  <div className="space-y-0">
                    {[
                      "You're leading your first team",
                      "You're struggling to get consistent performance",
                      "You're trying to build trust while driving results",
                      "You're ready to operate at a higher level",
                    ].map((item, i, arr) => (
                      <div key={item} className="flex items-start gap-4" style={{ padding: '1rem 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(28,21,16,0.12)' : 'none' }}>
                        <div style={{ width: '6px', height: '6px', background: '#A17B4F', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
                        <span className="body-lead-dark" style={{ fontSize: '0.9rem' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
