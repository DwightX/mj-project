import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const C = {
  bg: '#0F172A',
  cardBg: '#1F2937',
  blue: '#3A82FF',
  gold: '#D4A574',
  textPrimary: '#F8FAFC',
  textMuted: '#8895A7',
}

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section id="booking" className="py-24" style={{ background: C.bg }}>
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.72rem', color: C.gold, letterSpacing: '0.18em', textTransform: 'uppercase' }}>04</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.textDim }}>Schedule</span>
          </div>
          <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px', color: C.textPrimary, marginBottom: '0.5rem' }}>
            Let's Talk About Your Leadership
          </h2>
          <p style={{ color: C.textMuted, maxWidth: '460px', fontSize: '1rem' }}>
            Schedule a free 30-minute strategy session. No pitch, no pressure — just a real conversation about where you are and where you want to go.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/carter91jr/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm mt-5"
          style={{ color: C.textMuted }}
        >
          Can't find a time? Reach out via the{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer underline transition-colors duration-150"
            style={{ color: C.blue }}
          >
            contact form below
          </button>.
        </motion.p>
      </div>
    </section>
  )
}
