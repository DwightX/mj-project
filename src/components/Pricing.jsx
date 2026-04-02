import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const GOLD = '#C8956C'
const GOLD_LIGHT = '#A17B4F'
const NAVY = '#0F172A'
const DARK = '#0C1420'
const DARK_CARD = '#111E2E'
const TEXT_PRIMARY = '#F5F0EB'
const TEXT_MUTED = '#8A9AAA'
const TEXT_DIM = '#4B5568'
const BORDER_DARK = 'rgba(255,255,255,0.07)'

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
    color: '#3A82FF',
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

function TierCard({ tier, index, inView, last }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: DARK_CARD,
        borderTop: `2px solid ${hovered ? tier.color : `${tier.color}55`}`,
        borderLeft: `1px solid ${hovered ? `${tier.color}35` : BORDER_DARK}`,
        borderRight: last ? `1px solid ${hovered ? `${tier.color}35` : BORDER_DARK}` : 'none',
        borderBottom: `1px solid ${hovered ? `${tier.color}35` : BORDER_DARK}`,
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'transform 0.22s ease, border-color 0.22s ease',
      }}
    >
      <div className="p-8" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.7rem', color: tier.color, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          {tier.name}
        </p>
        <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.85rem', color: TEXT_MUTED, marginBottom: '1.5rem' }}>
          {tier.size}
        </p>
        <div className="flex items-baseline gap-2 mb-1">
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '2.25rem', letterSpacing: '-2px', color: TEXT_PRIMARY, lineHeight: 1 }}>
            {tier.price}
          </span>
        </div>
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
    </motion.div>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section id="pricing" className="py-36" style={{ background: DARK }}>
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: `2px solid ${GOLD}`, paddingTop: '1.1rem' }}>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: GOLD, letterSpacing: '0.22em' }}>03</span>
            <span style={{ width: '1px', height: '10px', background: BORDER_DARK, display: 'inline-block' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: TEXT_DIM }}>Investment</span>
          </div>
          <div style={{ width: '40px', height: '3px', background: GOLD, marginBottom: '1.25rem' }} />
          <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', letterSpacing: '-2px', color: TEXT_PRIMARY, marginBottom: '0.75rem', lineHeight: 1.05 }}>
            Choose Your Path Forward
          </h2>
          <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.2rem', fontWeight: 600, color: GOLD, opacity: 0.85, lineHeight: 1.5 }}>
            Every plan includes full LIT Program access and a structured path to results.
          </p>
        </motion.div>

        {/* Individual — featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-4"
          style={{
            background: DARK_CARD,
            borderTop: `2px solid ${GOLD}`,
            border: `1px solid rgba(200,149,108,0.25)`,
            borderTopWidth: '2px',
            borderTopColor: GOLD,
          }}
        >
          {/* Founder Rate badge */}
          <div style={{ background: GOLD, display: 'inline-block', padding: '4px 16px', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: NAVY }}>
            Founder Rate — Limited Availability
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left — price + CTA */}
            <div className="p-8" style={{ borderRight: `1px solid ${BORDER_DARK}` }}>
              <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.7rem', color: GOLD, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Individual Enrollment
              </p>
              <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1rem', color: TEXT_MUTED, marginBottom: '1.75rem', lineHeight: 1.5 }}>
                Full LIT Program — 10 Weeks or 5-Week Fast Track
              </p>
              <div className="flex items-baseline gap-3 mb-1">
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '3.25rem', letterSpacing: '-3px', color: TEXT_PRIMARY, lineHeight: 1 }}>
                  $1,099
                </span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: '1.1rem', color: 'rgba(200,149,108,0.4)', textDecoration: 'line-through' }}>
                  $1,499
                </span>
              </div>
              <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.88rem', color: TEXT_MUTED, marginBottom: '2rem' }}>
                per person
              </p>
              <Link
                to="/program"
                style={{
                  display: 'inline-block',
                  background: GOLD,
                  color: NAVY,
                  padding: '14px 36px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = GOLD_LIGHT)}
                onMouseLeave={(e) => (e.currentTarget.style.background = GOLD)}
              >
                Enroll Now
              </Link>
            </div>

            {/* Right — features */}
            <div className="p-8">
              <p style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: TEXT_DIM, marginBottom: '1.25rem' }}>
                What's Included
              </p>
              <ul className="space-y-4">
                {[
                  '10 outcome-driven leadership modules',
                  '10-week program or 5-week fast track',
                  'Proven frameworks you can apply immediately',
                  'Real-world leadership scenarios — not theory',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check color={GOLD} />
                    <span style={{ fontSize: '0.9rem', fontWeight: 300, color: TEXT_MUTED, lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Team tiers — 3 equal cards */}
        <div className="grid md:grid-cols-3">
          {teamTiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} inView={inView} last={i === teamTiers.length - 1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${BORDER_DARK}`, paddingTop: '1.5rem' }}
        >
          <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.95rem', color: TEXT_MUTED }}>
            Not sure which option is right?{' '}
            <Link to="/program" style={{ color: GOLD, textDecoration: 'underline' }}>
              View the full program details
            </Link>.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            Contact us for team pricing →
          </button>
        </motion.div>

      </div>
    </section>
  )
}
