import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CREAM = '#FAF7F2'
const CREAM_DEEP = '#F0E9DF'
const DARK = '#0C1420'
const DARK_CARD = '#111E2E'
const GOLD_LIGHT = '#A17B4F'
const GOLD = '#C8956C'
const NAVY = '#0F172A'
const BLUE = '#3A82FF'
const TEXT = '#1C1510'
const TEXT_MUTED = '#5C4F45'
const TEXT_DIM = '#9C8E85'
const BORDER = 'rgba(28,21,16,0.12)'
const BORDER_DARK = 'rgba(255,255,255,0.07)'

function SectionTransition({ from = 'light' }) {
  const bg = from === 'light' ? CREAM_DEEP : DARK
  const thick = from === 'light' ? 'rgba(28,21,16,0.22)' : 'rgba(200,149,108,0.4)'
  const thin = from === 'light' ? 'rgba(28,21,16,0.08)' : 'rgba(200,149,108,0.12)'
  return (
    <div style={{ background: bg, padding: '0 2rem' }}>
      <div style={{ height: '3px', background: thick }} />
      <div style={{ height: '1px', background: thin, marginTop: '4px' }} />
    </div>
  )
}

function AccentBar({ color }) {
  return <div style={{ width: '40px', height: '3px', background: color, marginBottom: '1.25rem' }} />
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

const teamTiers = [
  {
    name: 'Small Teams',
    size: '5–9 participants',
    price: '$950',
    per: 'per person',
    features: [
      'Full program access',
      'Aligned leadership frameworks across team',
      'Improved consistency in management approach',
    ],
    color: GOLD,
  },
  {
    name: 'Growth Teams',
    size: '10–19 participants',
    price: '$850',
    per: 'per person',
    features: [
      'Everything in Small Team package',
      'Increased team alignment and performance',
      'Ideal for developing emerging leaders at scale',
    ],
    color: BLUE,
  },
  {
    name: 'Organizations',
    size: '20+ participants',
    price: 'Custom',
    per: 'pricing',
    features: [
      'Tailored rollout strategy',
      'Scalable leadership development',
      'Designed for long-term organizational impact',
    ],
    color: '#4A7C59',
  },
]

function Check({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
      <circle cx="8" cy="8" r="7" fill={`${color}20`} />
      <path d="M5 8l2.5 2.5L11 5.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ProgramPage() {

  return (
    <>
      <Navbar />
      <main>

        {/* Program hero */}
        <section className="pt-40 pb-28" style={{ background: DARK }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: `2px solid ${GOLD}`, paddingTop: '1.1rem' }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: GOLD, letterSpacing: '0.22em' }}>LIT</span>
                <span style={{ width: '1px', height: '10px', background: BORDER_DARK, display: 'inline-block' }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Leadership in Transition Program</span>
              </div>

              <AccentBar color={GOLD} />

              <h1 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.97, letterSpacing: '-3px', color: '#F5F0EB', marginBottom: '1.75rem' }}>
                The LIT<br /><span style={{ color: GOLD }}>Program</span>
              </h1>

              <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.4rem', fontWeight: 600, color: GOLD, lineHeight: 1.5, maxWidth: '600px', marginBottom: '1.5rem' }}>
                "Transform how you lead, communicate, and drive performance — without years of trial and error."
              </p>

              <div style={{ width: '100%', maxWidth: '600px', height: '1px', background: BORDER_DARK, marginBottom: '1.5rem' }} />

              <p style={{ fontSize: '1rem', fontWeight: 400, color: '#8A9AAA', lineHeight: 1.85, maxWidth: '580px', marginBottom: '2.5rem' }}>
                A 10-week leadership development program (or 5-week fast track) built for leaders who are ready to stop guessing and start leading with clarity, structure, and confidence.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#individual-pricing"
                  style={{ background: GOLD, color: NAVY, padding: '14px 32px', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 800, textDecoration: 'none', display: 'inline-block', transition: 'background 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = GOLD_LIGHT)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = GOLD)}
                >
                  See Pricing
                </a>
                <Link
                  to="/about"
                  style={{ background: 'transparent', color: '#F5F0EB', padding: '14px 32px', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, border: `1.5px solid ${BORDER_DARK}`, textDecoration: 'none', display: 'inline-block', transition: 'border-color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = BORDER_DARK)}
                >
                  About Matt
                </Link>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="dark" />

        {/* What you'll walk away with */}
        <section className="py-28" style={{ background: CREAM_DEEP }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-12" style={{ borderTop: `2px solid ${GOLD_LIGHT}`, paddingTop: '1.1rem' }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: GOLD_LIGHT, letterSpacing: '0.22em' }}>01</span>
                <span style={{ width: '1px', height: '10px', background: BORDER, display: 'inline-block' }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: TEXT_DIM }}>Outcomes</span>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <AccentBar color={GOLD_LIGHT} />
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: TEXT, marginBottom: '1.5rem', lineHeight: 1.08 }}>
                    What You'll Walk Away With
                  </h2>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.15rem', fontWeight: 600, color: GOLD_LIGHT, lineHeight: 1.5 }}>
                    "Proven frameworks you can apply immediately — not theory you'll forget by Monday."
                  </p>
                </div>
                <div className="space-y-0">
                  {outcomes.map((o, i) => (
                    <div key={o} className="flex items-start gap-4" style={{ padding: '1.1rem 0', borderBottom: i < outcomes.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="8" cy="8" r="7" fill={`${GOLD_LIGHT}20`} />
                        <path d="M5 8l2.5 2.5L11 5.5" stroke={GOLD_LIGHT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: '0.95rem', fontWeight: 400, color: TEXT_MUTED, lineHeight: 1.65 }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Program modules */}
        <section className="py-28" style={{ background: DARK }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-12" style={{ borderTop: `2px solid ${GOLD}`, paddingTop: '1.1rem' }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: GOLD, letterSpacing: '0.22em' }}>02</span>
                <span style={{ width: '1px', height: '10px', background: BORDER_DARK, display: 'inline-block' }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Curriculum</span>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <AccentBar color={GOLD} />
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: '#F5F0EB', marginBottom: '1rem', lineHeight: 1.08 }}>
                    Program Modules
                  </h2>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: 600, color: GOLD, lineHeight: 1.5 }}>
                    10 outcome-driven modules. Real-world scenarios. Frameworks you use on Monday.
                  </p>
                </div>
                <div className="space-y-0">
                  {modules.map((m, i) => (
                    <div key={m.num} className="flex items-start gap-5" style={{ padding: '1.25rem 0', borderBottom: `1px solid ${BORDER_DARK}` }}>
                      <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.7rem', color: GOLD, letterSpacing: '0.18em', flexShrink: 0, paddingTop: '3px' }}>{m.num}</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#8A9AAA', lineHeight: 1.65 }}>{m.title}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-5" style={{ padding: '1.25rem 0' }}>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.7rem', color: 'rgba(200,149,108,0.4)', letterSpacing: '0.18em', flexShrink: 0 }}>+5</span>
                    <span style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(200,149,108,0.55)' }}>And five more modules across the full program.</span>
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="dark" />

        {/* Individual pricing */}
        <section id="individual-pricing" className="py-28" style={{ background: CREAM }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-12" style={{ borderTop: `2px solid ${GOLD_LIGHT}`, paddingTop: '1.1rem' }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: GOLD_LIGHT, letterSpacing: '0.22em' }}>03</span>
                <span style={{ width: '1px', height: '10px', background: BORDER, display: 'inline-block' }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: TEXT_DIM }}>Individual Enrollment</span>
              </div>

              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <AccentBar color={GOLD_LIGHT} />
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: TEXT, marginBottom: '1rem', lineHeight: 1.08 }}>
                    Individual Enrollment
                  </h2>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: 600, color: GOLD_LIGHT, lineHeight: 1.5, marginBottom: '2rem' }}>
                    Full Program — 10 Weeks or 5-Week Fast Track
                  </p>
                  <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '3.5rem', letterSpacing: '-3px', color: TEXT, lineHeight: 1 }}>$1,099</span>
                    <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1.25rem', color: TEXT_DIM, textDecoration: 'line-through' }}>$1,499</span>
                  </div>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.9rem', color: GOLD_LIGHT, marginBottom: '2rem' }}>
                    Founder Rate — Limited Availability
                  </p>
                  <Link
                    to="/"
                    style={{ background: NAVY, color: CREAM, padding: '15px 36px', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 800, textDecoration: 'none', display: 'inline-block', transition: 'background 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#1E293B')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = NAVY)}
                  >
                    Enroll Now
                  </Link>
                </div>
                <div>
                  <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: TEXT_DIM, marginBottom: '1.5rem' }}>What's Included</p>
                  <div className="space-y-0">
                    {[
                      '10 outcome-driven leadership modules',
                      '10-week program or 5-week fast track',
                      'Proven frameworks you can apply immediately',
                      'Real-world leadership scenarios — not theory',
                    ].map((f, i, arr) => (
                      <div key={f} className="flex items-start gap-4" style={{ padding: '1rem 0', borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                          <circle cx="8" cy="8" r="7" fill={`${GOLD_LIGHT}20`} />
                          <path d="M5 8l2.5 2.5L11 5.5" stroke={GOLD_LIGHT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ fontSize: '0.9rem', fontWeight: 400, color: TEXT_MUTED, lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Team pricing */}
        <section className="py-28" style={{ background: DARK }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-12" style={{ borderTop: `2px solid ${GOLD}`, paddingTop: '1.1rem' }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: GOLD, letterSpacing: '0.22em' }}>04</span>
                <span style={{ width: '1px', height: '10px', background: BORDER_DARK, display: 'inline-block' }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Team and Company Pricing</span>
              </div>

              <div className="mb-14">
                <AccentBar color={GOLD} />
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: '#F5F0EB', marginBottom: '0.75rem', lineHeight: 1.08 }}>
                  Develop Stronger Leaders Across Your Organization
                </h2>
                <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.1rem', fontWeight: 600, color: GOLD, lineHeight: 1.5, maxWidth: '560px' }}>
                  Scalable, high-impact training built for consistent results at every level of your team.
                </p>
              </div>
            </FadeSection>

            <div className="grid md:grid-cols-3">
              {teamTiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className="p-8"
                  style={{
                    background: DARK_CARD,
                    borderTop: `2px solid ${tier.color}55`,
                    borderLeft: `1px solid ${BORDER_DARK}`,
                    borderRight: i === teamTiers.length - 1 ? `1px solid ${BORDER_DARK}` : 'none',
                    borderBottom: `1px solid ${BORDER_DARK}`,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.7rem', color: tier.color, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {tier.name}
                  </p>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.85rem', color: TEXT_MUTED, marginBottom: '1.5rem' }}>
                    {tier.size}
                  </p>
                  <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '2.25rem', letterSpacing: '-2px', color: '#F5F0EB', lineHeight: 1, display: 'block', marginBottom: '0.25rem' }}>
                    {tier.price}
                  </span>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.85rem', color: TEXT_MUTED, marginBottom: '1.75rem' }}>
                    {tier.per}
                  </p>
                  <div style={{ borderTop: `1px solid ${BORDER_DARK}`, paddingTop: '1.25rem', flex: 1 }}>
                    <ul className="space-y-3">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check color={tier.color} />
                          <span style={{ fontSize: '0.85rem', fontWeight: 300, color: TEXT_MUTED, lineHeight: 1.5 }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionTransition from="dark" />

        {/* CTA */}
        <section className="py-28" style={{ background: CREAM }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <AccentBar color={GOLD_LIGHT} />
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: TEXT, marginBottom: '0.75rem', lineHeight: 1.05 }}>
                    Not Sure Which Option Is Right?
                  </h2>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.15rem', fontWeight: 600, color: GOLD_LIGHT, marginBottom: '1.75rem', lineHeight: 1.5 }}>
                    "Book a free 30-minute strategy call and we'll find the right path based on your goals, team size, and current challenges."
                  </p>
                  <div style={{ width: '48px', height: '1px', background: BORDER, marginBottom: '1.75rem' }} />
                  <p style={{ color: TEXT_MUTED, fontSize: '1rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                    No pitch, no pressure. Just a real conversation about where you are, where you want to go, and what it takes to get there.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/"
                      style={{ background: NAVY, color: CREAM, padding: '14px 32px', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 800, textDecoration: 'none', display: 'inline-block', transition: 'background 0.2s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#1E293B')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = NAVY)}
                    >
                      Book a Free Strategy Call
                    </Link>
                    <Link
                      to="/"
                      style={{ background: 'transparent', color: TEXT, padding: '14px 32px', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, border: `1.5px solid ${BORDER}`, textDecoration: 'none', display: 'inline-block', transition: 'border-color 0.2s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = TEXT)}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = BORDER)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div style={{ borderLeft: `1px solid ${BORDER}`, paddingLeft: '3rem' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: TEXT_DIM, marginBottom: '1.5rem' }}>This is for you if</p>
                  <div className="space-y-0">
                    {[
                      'You\'re leading your first team',
                      'You\'re struggling to get consistent performance',
                      'You\'re trying to build trust while driving results',
                      'You\'re ready to operate at a higher level',
                    ].map((item, i, arr) => (
                      <div key={item} className="flex items-start gap-4" style={{ padding: '1rem 0', borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                        <div style={{ width: '6px', height: '6px', background: GOLD_LIGHT, borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 400, color: TEXT_MUTED, lineHeight: 1.6 }}>{item}</span>
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
