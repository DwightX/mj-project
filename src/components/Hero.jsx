import { motion } from 'framer-motion'

const C = {
  bg: '#F5F2ED',
  navy: '#0F172A',
  navyMid: '#334155',
  navySoft: '#94A3B8',
  gold: '#A97D13',
  goldLight: '#D4A574',
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
    <section
      className="relative flex flex-col min-h-screen"
      style={{ background: C.bg }}
    >
      {/* Top strip */}
      {/* <motion.div
        {...fade(0)}
        className="flex items-center justify-between px-8 md:px-16 py-5"
        style={{ borderBottom: `1px solid ${C.border}` }}
      >
        <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: '0.95rem', color: C.navy, letterSpacing: '-0.3px' }}>
          MJ Leadership
        </span>
      </motion.div> */}

      {/* Main — headline fills available space */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12">

        <motion.p
          {...fade(0.1)}
          style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, marginBottom: '1.75rem' }}
        >
          Executive Leadership Coaching
        </motion.p>

        <motion.h1
          {...fade(0.2)}
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
           fontWeight: 600,
            fontSize: 'clamp(3.5rem, 9.5vw, 9rem)',
            lineHeight: 0.97,
            letterSpacing: '-4px',
            color: C.navy,
            marginBottom: '3rem',
          }}
        >
          Leadership<br />
          <span style={{ color: C.gold }}>Shouldn't</span><br />
          Feel This Hard.
        </motion.h1>

        <motion.p
          {...fade(0.32)}
          style={{ fontSize: '1rem', color: C.navyMid, lineHeight: 1.7, maxWidth: '480px', marginBottom: '2.5rem' }}
        >
          Helping ambitious leaders build the clarity, confidence, and presence
          to lead teams that actually want to follow — through a proven, human-first framework.
        </motion.p>

        <motion.div {...fade(0.42)} className="flex flex-wrap gap-3">
          <button
            onClick={() => scrollTo('#pricing')}
            className="font-bold px-7 py-3.5 cursor-pointer transition-all duration-150"
            style={{ background: C.navy, color: C.bg, borderRadius: '6px', border: 'none', fontSize: '0.9rem' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1E293B')}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.navy)}
          >
            View Services →
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="font-semibold px-7 py-3.5 cursor-pointer transition-all duration-150"
            style={{ background: 'transparent', color: C.navy, border: `1.5px solid ${C.border}`, borderRadius: '6px', fontSize: '0.9rem' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.navy)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
          >
            Contact
          </button>
        </motion.div>
      </div>

      {/* Bottom strip — stats */}
      <motion.div
        {...fade(0.52)}
        className="flex flex-wrap items-center gap-x-10 gap-y-4 px-8 md:px-16 py-5"
        style={{ borderTop: `1px solid ${C.border}` }}
      >
        {[
          { value: '200+', label: 'Leaders Coached' },
          { value: '94%', label: 'Completion Rate' },
          { value: '4.9★', label: 'Avg. Rating' },
          { value: '15+', label: 'Years Experience' },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            {i > 0 && (
              <span style={{ display: 'inline-block', width: '1px', height: '20px', background: C.border }} />
            )}
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: '1.1rem', color: C.navy, letterSpacing: '-0.5px' }}>
              {s.value}
            </span>
            <span style={{ fontSize: '0.75rem', color: C.navySoft, fontWeight: 500 }}>
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
