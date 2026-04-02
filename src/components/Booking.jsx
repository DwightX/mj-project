import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const C = {
  bg: '#0C1420',
  blue: '#3A82FF',
  gold: '#C8956C',
  textPrimary: '#F5F0EB',
  textMuted: '#8A9AAA',
  textDim: '#4B5568',
}

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section id="booking" className="py-36" style={{ background: C.bg }}>
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Section header — 2px gold top border */}
          <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: `2px solid ${C.gold}`, paddingTop: '1.1rem' }}>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: C.gold, letterSpacing: '0.22em' }}>04</span>
            <span style={{ width: '1px', height: '10px', background: 'rgba(255,255,255,0.15)', display: 'inline-block' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.textDim }}>Schedule</span>
          </div>

          {/* Short amber accent bar */}
          <div style={{ width: '40px', height: '3px', background: C.gold, marginBottom: '1.25rem' }} />

          <h2 style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
            letterSpacing: '-2px',
            color: C.textPrimary,
            marginBottom: '0.75rem',
            lineHeight: 1.05,
          }}>
            Let's Talk About Your Leadership
          </h2>
          <p style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: C.gold,
            opacity: 0.85,
            lineHeight: 1.5,
            maxWidth: '520px',
          }}>
            No pitch, no pressure — just a real conversation about where you are and where you want to go.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/matt-leadershipintraining/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-5"
          style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1rem', color: C.textMuted }}
        >
          Can't find a time? Reach out via the{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer underline transition-colors duration-150"
            style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1rem', color: C.gold }}
          >
            contact form below
          </button>.
        </motion.p>
      </div>
    </section>
  )
}
