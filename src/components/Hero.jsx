import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
})

const stats = [
  { value: '20+', label: 'Years of Sales Experience' },
  { value: '15', label: 'Years of Sales Leadership' },
  { value: '100+', label: 'Reps & Managers Coached' },
  { value: '4x', label: 'Presidents Club' },
]

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative flex flex-col bg-cream" style={{ height: '100dvh', minHeight: '600px' }}>
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16">

        <motion.p {...fade(0.1)} className="font-serif italic text-gold-light mb-6" style={{ fontSize: '1.15rem' }}>
          "Self Growth Never Stops"
        </motion.p>

        <motion.h1
          {...fade(0.2)}
          className="font-sans font-bold text-navy mb-8"
          style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.95, letterSpacing: '-4px' }}
        >
          Ready to Become<br />
          the Leader Your<br />
          <span className="text-gold-light">Team Actually Needs?</span>
        </motion.h1>

        <motion.div
          {...fade(0.3)}
          className="mb-6"
          style={{ width: '100%', maxWidth: '560px', height: '1px', background: 'rgba(15,23,42,0.1)' }}
        />

        <motion.p
          {...fade(0.38)}
          className="mb-10"
          style={{ fontSize: '1rem', lineHeight: 1.8, maxWidth: '520px', color: '#64748B' }}
        >
          You need clarity. Structure. And a proven approach that actually works in the real world.
          That's exactly what we focus on.
        </motion.p>

        <motion.div {...fade(0.46)} className="flex flex-wrap gap-3">
          <Link to="/program" className="btn btn-navy">
            View Program
          </Link>
          <button onClick={() => scrollTo('#contact')} className="btn btn-outline-dark">
            Contact
          </button>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        {...fade(0.56)}
        className="flex flex-wrap items-center gap-x-10 gap-y-4 px-8 md:px-16 py-6"
        style={{ borderTop: '1px solid rgba(15,23,42,0.1)' }}
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            {i > 0 && <span style={{ display: 'inline-block', width: '1px', height: '20px', background: 'rgba(15,23,42,0.1)' }} />}
            <span className="font-sans font-bold text-navy" style={{ fontSize: '1.1rem', letterSpacing: '-0.5px' }}>
              {s.value}
            </span>
            <span className="font-serif italic" style={{ fontSize: '0.9rem', color: '#64748B' }}>
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
