import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
      <circle cx="8" cy="8" r="7" fill="rgba(200,149,108,0.12)" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke="#C8956C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section id="pricing" className="py-20 bg-dark" ref={ref}>
      <div className="max-w-8xl mx-auto px-8 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-4 mb-12"
          style={{ borderTop: '2px solid #C8956C', paddingTop: '1.1rem' }}
        >
          <span className="section-number">02</span>
          <span className="section-pipe" />
          <span className="section-label">Beta Cohort</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="divider-gold mb-6" />
            <h2 className="heading-xl mb-4">
              Beta Cohort<br />
              <span className="text-gold">Limited Pricing</span>
            </h2>
            <p className="body-lead mb-8" style={{ maxWidth: '460px' }}>
              We're accepting a limited group of managers for our inaugural cohort. Apply now to learn more about fit, format, and pricing.
            </p>
            <div className="flex flex-wrap gap-3 mb-5">
              <button
                onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-gold"
              >
                Apply for Beta Cohort
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline"
              >
                Ask a Question
              </button>
            </div>
            <p className="font-serif italic text-gold" style={{ fontSize: '0.85rem', opacity: 0.7 }}>
              Limited to 10–15 Business Managers. Spots Filling Fast.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: '#111E2E',
              border: '1px solid rgba(200,149,108,0.2)',
              borderTop: '2px solid #C8956C',
              padding: '2.5rem',
            }}
          >
            <p className="eyebrow mb-6">What's Included</p>
            <ul className="space-y-4 mb-8">
              {[
                '10 outcome-driven leadership modules',
                '10-week program or 5-week fast track',
                'Proven frameworks you can apply immediately',
                'Real-world leadership scenarios, not theory',
                '1:1 coaching and accountability support',
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check />
                  <span className="text-muted-dark" style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.25rem' }}>
              <p className="font-serif italic text-gold" style={{ fontSize: '0.88rem', opacity: 0.65 }}>
                Cohort size is intentionally limited to ensure quality, attention, and results.
              </p>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.5rem' }}
        >
          <p className="font-serif italic text-muted-dark" style={{ fontSize: '0.95rem' }}>
            Building a team?{' '}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gold cursor-pointer"
              style={{ textDecoration: 'underline', background: 'none', border: 'none', fontFamily: 'inherit', fontStyle: 'italic', fontSize: 'inherit' }}
            >
              Contact us for team and organization pricing.
            </button>
          </p>
          <Link to="/program" className="text-gold font-sans font-bold" style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            View full program details →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
