import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const C = {
  blue: '#3A82FF',
  gold: '#D4A574',
  goldHover: '#C4915A',
  textPrimary: '#F8FAFC',
  textMuted: '#8895A7',
  textDim: '#4B5568',
}

const INV = {
  default: { bg: '#EEF4FF', border: '#3A82FF', text: '#0A0F1E', sub: '#1E3A6E', dim: '#4B5568' },
  highlight: { bg: '#FDF5EC', border: '#D4A574', text: '#1A0E00', sub: '#5A3A08', dim: '#7A5A1A' },
}

const grainUrl = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E\")"

const plans = [
  {
    name: 'Tier 1',
    price: '$997',
    period: 'one-time',
    tagline: 'Everything you need to start leading differently.',
    summary: 'Best for emerging leaders building their foundation. You get the full curriculum, group coaching, and a community of peers — everything to start leading with real intention.',
    highlight: false,
    features: [
      'Full 14-week course curriculum',
      'Lifetime access to all materials',
      'Private community access',
      'Weekly group coaching calls',
      'Workbooks & frameworks library',
      'Course completion certificate',
    ],
    missing: ['1:1 coaching sessions', 'Priority support', 'Personalized action plan'],
    cta: 'Get Started',
  },
  {
    name: 'Tier 2',
    price: '$2,497',
    period: 'one-time',
    tagline: 'For leaders serious about a step-change in performance.',
    summary: 'Best for mid-level leaders who want accountability and personalised direction. Three 1:1 sessions, a custom 90-day action plan, and priority access to MJ make this the most popular choice.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Tier 1',
      '3 × 1:1 coaching sessions',
      'Personalized 90-day action plan',
      'Priority email support',
      'Hot seat coaching in group calls',
      'LinkedIn profile & brand review',
      'Alumni network lifetime access',
    ],
    missing: [],
    cta: 'Get Started',
  },
  {
    name: 'Tier 3',
    price: '$4,997',
    period: 'one-time',
    tagline: 'White-glove support for leaders ready to operate at the top.',
    summary: 'Best for senior leaders ready to go all-in. Eight 1:1 sessions, a full team assessment, direct Slack access to MJ, and monthly check-ins for six months — the most comprehensive path to the top.',
    highlight: false,
    features: [
      'Everything in Tier 2',
      '8 × 1:1 coaching sessions',
      'Custom leadership development plan',
      'Team assessment & full report',
      'Monthly check-ins for 6 months',
      'Direct Slack access to MJ',
      'VIP in-person workshop invite',
    ],
    missing: [],
    cta: 'Apply Now',
  },
]

function PricingCard({ plan, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const inv = plan.highlight ? INV.highlight : INV.default

  const borderColor = hovered ? inv.border : (plan.highlight ? 'rgba(212,165,116,0.4)' : 'rgba(255,255,255,0.08)')
  const taglineColor = hovered ? inv.dim : C.textDim
  const priceColor = hovered ? inv.text : (plan.highlight ? C.gold : C.textPrimary)
  const periodColor = hovered ? inv.dim : C.textDim
  const featureColor = hovered ? inv.sub : C.textMuted
  const missingColor = hovered ? inv.dim : C.textDim
  const dividerColor = hovered ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)'
  const badgeBg = hovered ? (plan.highlight ? C.gold : C.blue) : (plan.highlight ? C.gold : C.blue)
  const badgeText = hovered ? (plan.highlight ? '#0F172A' : '#fff') : '#fff'
  const ctaBg = hovered ? (plan.highlight ? C.gold : C.blue) : (plan.highlight ? C.gold : 'transparent')
  const ctaColor = hovered ? (plan.highlight ? '#0F172A' : '#fff') : (plan.highlight ? '#0F172A' : C.blue)
  const ctaBorder = (!hovered && !plan.highlight) ? `1.5px solid rgba(58,130,255,0.35)` : 'none'
  const checkFill = hovered ? (plan.highlight ? 'rgba(212,165,116,0.25)' : 'rgba(58,130,255,0.2)') : 'rgba(58,130,255,0.15)'
  const checkStroke = hovered ? (plan.highlight ? C.gold : C.blue) : C.blue
  const xFill = hovered ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.03)'
  const xStroke = hovered ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.15)'
  const nameColor = hovered ? (plan.highlight ? C.gold : C.blue) : (plan.highlight ? C.gold : C.blue)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl overflow-hidden"
      style={{
        backgroundImage: grainUrl,
        backgroundColor: hovered ? inv.bg : (plan.highlight ? '#1E2D45' : '#1F2937'),
        border: `1px solid ${borderColor}`,
        transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
        boxShadow: hovered
          ? (plan.highlight ? '0 20px 56px rgba(212,165,116,0.14)' : '0 20px 56px rgba(58,130,255,0.1)')
          : (plan.highlight ? '0 0 40px rgba(212,165,116,0.06)' : 'none'),
        transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {plan.badge && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-b-lg"
          style={{ background: badgeBg, color: badgeText, transition: 'background 0.35s ease, color 0.35s ease' }}
        >
          {plan.badge}
        </div>
      )}

      <div className="p-8 pt-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: nameColor, transition: 'color 0.35s ease' }}>
          {plan.name}
        </p>
        <p className="text-sm mb-2 leading-relaxed" style={{ color: taglineColor, transition: 'color 0.35s ease' }}>
          {plan.tagline}
        </p>

        {/* Hover summary */}
        <AnimatePresence>
          {hovered && (
            <motion.p
              key="summary"
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: '1rem' }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.25 }}
              className="text-sm leading-relaxed overflow-hidden"
              style={{
                color: plan.highlight ? INV.highlight.sub : INV.default.sub,
                borderLeft: `2px solid ${plan.highlight ? C.gold : C.blue}`,
                paddingLeft: '0.75rem',
              }}
            >
              {plan.summary}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="mb-8" style={{ marginTop: hovered ? '0' : '1rem', transition: 'margin 0.25s ease' }}>
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: '2.75rem', letterSpacing: '-1.5px', color: priceColor, transition: 'color 0.35s ease' }}>
            {plan.price}
          </span>
          <span className="text-sm ml-2" style={{ color: periodColor, transition: 'color 0.35s ease' }}>
            {plan.period}
          </span>
        </div>

        <button
          onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-3.5 font-bold text-sm cursor-pointer mb-8"
          style={{
            borderRadius: '6px',
            background: ctaBg,
            color: ctaColor,
            border: ctaBorder,
            transition: 'background 0.35s ease, color 0.35s ease',
          }}
        >
          {plan.cta} →
        </button>

        <div style={{ borderTop: `1px solid ${dividerColor}`, paddingTop: '1.5rem', transition: 'border-color 0.35s ease' }}>
          <ul className="space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <circle cx="8" cy="8" r="7" fill={checkFill} style={{ transition: 'fill 0.35s ease' }} />
                  <path d="M5 8l2.5 2.5L11 5.5" stroke={checkStroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.35s ease' }} />
                </svg>
                <span style={{ color: featureColor, transition: 'color 0.35s ease' }}>{f}</span>
              </li>
            ))}
            {plan.missing.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <circle cx="8" cy="8" r="7" fill={xFill} style={{ transition: 'fill 0.35s ease' }} />
                  <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke={xStroke} strokeWidth="1.4" strokeLinecap="round" style={{ transition: 'stroke 0.35s ease' }} />
                </svg>
                <span style={{ color: missingColor, transition: 'color 0.35s ease' }}>{f}</span>
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
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="py-24" style={{ background: '#0F172A' }}>
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.72rem', color: C.gold, letterSpacing: '0.18em', textTransform: 'uppercase' }}>03</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.textDim }}>Investment</span>
          </div>
          <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px', color: C.textPrimary, marginBottom: '0.5rem' }}>
            Choose Your Path Forward
          </h2>
          <p style={{ color: C.textMuted, maxWidth: '460px', fontSize: '1rem' }}>
            Every plan includes full curriculum access and a 30-day money-back guarantee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
