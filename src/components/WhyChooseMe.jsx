import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const C = {
  bg: '#F0E9DF',
  gold: '#A17B4F',
  textPrimary: '#1C1510',
  textMuted: '#5C4F45',
  textDim: '#9C8E85',
  border: 'rgba(28,21,16,0.12)',
}

const differentiators = ['Human-First Framework', 'Real-World Scenarios', '1:1 Coaching', 'Proven Systems', 'Accountability']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } }),
}

export default function WhyChooseMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section id="about" className="py-36" style={{ background: C.bg }} ref={ref}>
      <div className="max-w-8xl mx-auto px-8 md:px-16">

        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}
          className="flex items-baseline gap-4 mb-16"
          style={{ borderTop: `2px solid ${C.gold}`, paddingTop: '1.1rem' }}
        >
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: C.gold, letterSpacing: '0.22em' }}>01</span>
          <span style={{ width: '1px', height: '10px', background: C.border, display: 'inline-block', marginBottom: '-1px' }} />
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.textDim }}>The Foundation</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.8}
              style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.45rem', fontWeight: 600, color: C.gold, marginBottom: '1.5rem', lineHeight: 1.45 }}
            >
              "Self Growth Never Stops."
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.9}
              style={{ width: '40px', height: '3px', background: C.gold, marginBottom: '1.25rem' }}
            />

            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={1}
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-2px', color: C.textPrimary, marginBottom: '1.75rem' }}
            >
              Built by someone who has{' '}
              <span style={{ color: C.gold }}>lived it.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={2}
              style={{ color: C.textMuted, fontSize: '1rem', fontWeight: 400, lineHeight: 1.85, marginBottom: '1.25rem', maxWidth: '520px' }}
            >
              As an All-American collegiate athlete and team captain, I was shaped by values like hard work, discipline, confidence, coachability, and teamwork. I took that same mindset into business — rising from Sales Representative to Head of Sales and becoming the #1 leader at multiple organizations along the way.
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={3}
              style={{ color: C.textMuted, fontSize: '1rem', fontWeight: 400, lineHeight: 1.85, marginBottom: '2.5rem', maxWidth: '520px' }}
            >
              I built this after recognizing a pattern no one was talking about: leaders weren't failing because they lacked potential — they were failing because they lacked clarity, structure, and a real framework to lead from.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={4}
              style={{ borderTop: `1px solid ${C.border}`, paddingTop: '1.75rem' }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {differentiators.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-4 py-1.5"
                    style={{ border: `1px solid ${C.border}`, color: C.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '0' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, textDecoration: 'none', borderBottom: `1px solid ${C.gold}`, paddingBottom: '2px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#8B6A40')}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.gold)}
              >
                Read the Full Story
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div style={{ position: 'absolute', left: '-2rem', top: '10%', bottom: '10%', width: '1px', background: C.border }} />

            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="src/assets/Matt_Headshot.jpg"
                alt="Matt Njoku"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.82) sepia(0.08)' }}
              />
            </div>

            <div className="absolute bottom-0 left-0 p-7" style={{ background: C.gold, minWidth: '210px' }}>
              <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '2.25rem', color: '#FAF7F2', lineHeight: 1 }}>20+</div>
              <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontWeight: 400, fontSize: '1rem', color: 'rgba(250,247,242,0.85)', marginTop: '6px', lineHeight: 1.4 }}>
                Years of experience
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
