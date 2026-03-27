import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const C = {
  bg: '#0F172A',
  statBg: '#D4A574',
  blue: '#3A82FF',
  gold: '#D4A574',
  textPrimary: '#F8FAFC',
  textMuted: '#8895A7',
  textDim: '#4B5568',
  border: 'rgba(255,255,255,0.1)',
}

const tags = ['Community', 'Curriculum', '1:1 Coaching', 'Accountability', 'Frameworks']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } }),
}

export default function WhyChooseMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24" style={{ background: C.bg }} ref={ref}>
      <div className="max-w-8xl mx-auto px-8 md:px-16">

        {/* Numbered section divider */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}
          className="flex items-center justify-between mb-14"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}
        >
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.72rem', color: C.gold, letterSpacing: '0.18em', textTransform: 'uppercase' }}>01</span>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.textDim }}>Why Choose MJ</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={1}
              style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
               fontWeight: 600,
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                color: C.textPrimary,
                marginBottom: '1.75rem',
              }}
            >
              Built for leaders who are{' '}
              <span style={{ color: C.gold }}>done playing small.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={2}
              style={{ color: C.textMuted, fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.25rem', maxWidth: '520px' }}
            >
              Most leadership programs hand you a workbook and wish you luck. This is different.
              MJ works directly with you to diagnose your specific blind spots, reframe how you
              show up, and build habits that compound — in your team, your career, and your confidence.
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={3}
              style={{ color: C.textMuted, fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '520px' }}
            >
              In 90 days, clients consistently report stronger team trust, clearer communication,
              and measurable growth in performance — not because of theory, but because of the
              doing. Every session is built around your real challenges.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={4}
              style={{ borderTop: `1px solid ${C.border}`, paddingTop: '1.75rem' }}
            >
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-semibold px-4 py-1.5 rounded-full"
                    style={{
                      border: `1.5px solid ${C.border}`,
                      color: C.textMuted,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Image + stat card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://cdn.vectorstock.com/i/500p/58/15/male-silhouette-profile-picture-vector-35845815.jpg"
                alt="MJ coaching session"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.75)' }}
              />
            </div>

            {/* Stat overlay — bottom-left, gold fill like the reference */}
            <div
              className="absolute bottom-0 left-0 p-6 rounded-br-2xl"
              style={{
                background: C.statBg,
                minWidth: '200px',
              }}
            >
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: '2.25rem', color: '#0F172A', lineHeight: 1 }}>
                15+
              </div>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#0F172A', marginTop: '4px', lineHeight: 1.3 }}>
                Years of<br />experience
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
