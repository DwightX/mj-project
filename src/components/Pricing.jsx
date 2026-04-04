import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

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
    color: '#C8956C',
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
        background: '#111E2E',
        borderTop: `2px solid ${hovered ? tier.color : `${tier.color}55`}`,
        borderLeft: `1px solid ${hovered ? `${tier.color}35` : 'rgba(255,255,255,0.07)'}`,
        borderRight: last ? `1px solid ${hovered ? `${tier.color}35` : 'rgba(255,255,255,0.07)'}` : 'none',
        borderBottom: `1px solid ${hovered ? `${tier.color}35` : 'rgba(255,255,255,0.07)'}`,
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'transform 0.22s ease, border-color 0.22s ease',
      }}
    >
      <div className="p-8 flex flex-col h-full">
        <p className="font-sans font-extrabold" style={{ fontSize: '0.7rem', color: tier.color, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          {tier.name}
        </p>
        <p className="font-serif italic text-muted-dark mb-6" style={{ fontSize: '0.85rem' }}>
          {tier.size}
        </p>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-sans font-bold text-cream" style={{ fontSize: '2.25rem', letterSpacing: '-2px', lineHeight: 1 }}>
            {tier.price}
          </span>
        </div>
        <p className="font-serif italic text-muted-dark mb-7" style={{ fontSize: '0.85rem' }}>
          {tier.per}
        </p>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.25rem', flex: 1 }}>
          <ul className="space-y-3">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check color={tier.color} />
                <span className="text-muted-dark" style={{ fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.5 }}>{f}</span>
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
    <section id="pricing" className="py-36 bg-dark">
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: '2px solid #C8956C', paddingTop: '1.1rem' }}>
            <span className="section-number">03</span>
            <span className="section-pipe" />
            <span className="section-label">Investment</span>
          </div>
          <div className="divider-gold mb-5" />
          <h2 className="heading-xl mb-3">
            Choose Your Path Forward
          </h2>
          <p className="pull-quote" style={{ opacity: 0.85 }}>
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
            background: '#111E2E',
            border: '1px solid rgba(200,149,108,0.25)',
            borderTopWidth: '2px',
            borderTopColor: '#C8956C',
          }}
        >
          <div style={{ background: '#C8956C', display: 'inline-block', padding: '4px 16px', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#0F172A' }}>
            Founder Rate — Limited Availability
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8" style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="font-sans font-extrabold text-gold mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                Individual Enrollment
              </p>
              <p className="font-serif italic text-muted-dark mb-7" style={{ fontSize: '1rem', lineHeight: 1.5 }}>
                Full LIT Program — 10 Weeks or 5-Week Fast Track
              </p>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-sans font-bold text-cream" style={{ fontSize: '3.25rem', letterSpacing: '-3px', lineHeight: 1 }}>
                  $1,099
                </span>
                <span className="font-sans text-gold" style={{ fontSize: '1.1rem', opacity: 0.4, textDecoration: 'line-through' }}>
                  $1,499
                </span>
              </div>
              <p className="font-serif italic text-muted-dark mb-8" style={{ fontSize: '0.88rem' }}>
                per person
              </p>
              <Link to="/program" className="btn btn-gold">
                Enroll Now
              </Link>
            </div>

            <div className="p-8">
              <p className="font-sans font-extrabold" style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4B5568', marginBottom: '1.25rem' }}>
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
                    <Check color="#C8956C" />
                    <span className="text-muted-dark" style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Team tiers */}
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
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem' }}
        >
          <p className="font-serif italic text-muted-dark" style={{ fontSize: '0.95rem' }}>
            Not sure which option is right?{' '}
            <Link to="/program" className="text-gold" style={{ textDecoration: 'underline' }}>
              View the full program details
            </Link>.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gold font-sans font-bold cursor-pointer"
            style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
          >
            Contact us for team pricing →
          </button>
        </motion.div>

      </div>
    </section>
  )
}
