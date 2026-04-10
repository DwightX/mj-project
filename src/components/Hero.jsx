import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
})

const stats = [
  { value: '20+', label: 'Years of Sales Experience' },
  { value: '15+', label: 'Years of Sales Leadership' },
  { value: '130+', label: 'Leaders Coached' },
  { value: '8x', label: 'Presidents Club' },
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
          Become the Leader<br />
          <span className="text-gold-light">Your Team Needs.</span>
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
          That's exactly what we focus on. We provide leadership training and development.
        </motion.p>

        <motion.div {...fade(0.46)} className="flex flex-wrap gap-3 mb-4">
          <button onClick={() => scrollTo('#booking')} className="btn btn-navy">
            Apply for Beta Cohort
          </button>
          <Link to="/program" className="btn btn-outline-dark">
            View Program
          </Link>
        </motion.div>

        <motion.p {...fade(0.52)} className="font-serif italic" style={{ fontSize: '0.8rem', color: '#A17B4F' }}>
          Limited to 10–15 Business Managers. Spots Filling Fast.
        </motion.p>
      </div>

      {/* Stats strip */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ borderTop: '2px solid rgba(15,23,42,0.1)' }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
            className="flex flex-col justify-center px-8 md:px-10 py-6"
            style={{
              borderRight: i < stats.length - 1 ? '1px solid rgba(15,23,42,0.08)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(15,23,42,0.08)' : 'none',
            }}
          >
            <span
              className="font-sans font-bold text-gold-light"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1, letterSpacing: '-2px' }}
            >
              {s.value}
            </span>
            <span
              className="font-serif italic mt-2"
              style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.4 }}
            >
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
