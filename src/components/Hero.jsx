import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const C = {
  bg: '#FAF7F2',
  navy: '#0F172A',
  navyMid: '#1E293B',
  navySoft: '#64748B',
  gold: '#A17B4F',
  border: 'rgba(15,23,42,0.1)',
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
})

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative flex flex-col" style={{ background: C.bg, height: '100dvh', minHeight: '600px' }}>
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16">

        <motion.p
          {...fade(0.1)}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            fontSize: '1.15rem',
            fontWeight: 400,
            color: C.gold,
            marginBottom: '1.5rem',
          }}
        >
          "Self Growth Never Stops"
        </motion.p>

        <motion.h1
          {...fade(0.2)}
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            lineHeight: 0.95,
            letterSpacing: '-4px',
            color: C.navy,
            marginBottom: '2rem',
          }}
        >
          Ready to Become<br />
          the Leader Your<br />
          <span style={{ color: C.gold }}>Team Actually Needs?</span>
        </motion.h1>

        <motion.div {...fade(0.3)} style={{ width: '100%', maxWidth: '560px', height: '1px', background: C.border, marginBottom: '1.5rem' }} />

        <motion.p
          {...fade(0.38)}
          style={{ fontSize: '1rem', fontWeight: 400, color: C.navySoft, lineHeight: 1.8, maxWidth: '520px', marginBottom: '2.5rem' }}
        >
          You need clarity. Structure. And a proven approach that actually works in the real world.
          That's exactly what we focus on.
        </motion.p>

        <motion.div {...fade(0.46)} className="flex flex-wrap gap-3">
          <Link
            to="/program"
            className="font-bold cursor-pointer transition-all duration-200"
            style={{
              background: C.navy,
              color: C.bg,
              borderRadius: '0',
              border: 'none',
              padding: '14px 32px',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1E293B')}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.navy)}
          >
            View Program
          </Link>
          <button
            onClick={() => scrollTo('#contact')}
            className="font-bold cursor-pointer transition-all duration-200"
            style={{
              background: 'transparent',
              color: C.navy,
              border: `1.5px solid ${C.border}`,
              borderRadius: '0',
              padding: '14px 32px',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.navy)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            Contact
          </button>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        {...fade(0.56)}
        className="flex flex-wrap items-center gap-x-10 gap-y-4 px-8 md:px-16 py-6"
        style={{ borderTop: `1px solid ${C.border}` }}
      >
        {[
          { value: '20+', label: 'Years of Sales Experience' },
          { value: '15', label: 'Years of Sales Leadership' },
          { value: '100+', label: 'Reps & Managers Coached' },
          { value: '4x', label: 'Presidents Club' },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            {i > 0 && <span style={{ display: 'inline-block', width: '1px', height: '20px', background: C.border }} />}
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '1.1rem', color: C.navy, letterSpacing: '-0.5px' }}>
              {s.value}
            </span>
            <span style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.9rem', color: C.navySoft }}>
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
