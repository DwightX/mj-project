import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
    <section id="booking" className="py-36 bg-dark">
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: '2px solid #C8956C', paddingTop: '1.1rem' }}>
            <span className="section-number">04</span>
            <span className="section-pipe" />
            <span className="section-label">Schedule</span>
          </div>

          <div className="divider-gold mb-5" />

          <h2 className="heading-xl mb-3">
            Let's Talk About Your Leadership
          </h2>
          <p className="pull-quote" style={{ opacity: 0.85, maxWidth: '520px' }}>
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
          className="text-center mt-5 font-serif italic text-muted-dark"
          style={{ fontSize: '1rem' }}
        >
          Can't find a time? Reach out via the{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer underline font-serif italic text-gold"
            style={{ fontSize: '1rem' }}
          >
            contact form below
          </button>.
        </motion.p>
      </div>
    </section>
  )
}
