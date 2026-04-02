import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const C = {
  bg: '#0C1420',
  cardBg: '#111E2E',
  border: 'rgba(255,255,255,0.07)',
  cardBorder: 'rgba(255,255,255,0.06)',
  gold: '#C8956C',
  textPrimary: '#F5F0EB',
  textMuted: '#8A9AAA',
  textDim: '#4B5568',
}

const AVATAR = 'https://cdn.vectorstock.com/i/500p/58/15/male-silhouette-profile-picture-vector-35845815.jpg'

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'VP of Operations, TechCorp',
    quote: "MJ's course fundamentally changed how I think about leadership. Within 60 days of finishing the program, I was promoted to VP. The communication frameworks alone were worth 10x the investment.",
    stars: 5,
  },
  {
    name: 'David R.',
    role: 'Director of Engineering, Startup Co.',
    quote: "I've taken a lot of leadership courses. Most are rehashed theory. This one was different — raw, real, and brutally practical. My team retention improved by 40% after applying just module 3.",
    stars: 5,
  },
  {
    name: 'Priya M.',
    role: 'COO, Healthcare Group',
    quote: "The 1:1 sessions with MJ gave me tools I use every single week. She doesn't just coach — she helps you see your blind spots with care and precision. Absolute game-changer.",
    stars: 5,
  },
  {
    name: 'James T.',
    role: 'Team Lead, Financial Services',
    quote: "I was skeptical. I've been burned by 'transformational' courses before. But this delivered. Concrete, step-by-step, and MJ is genuinely invested in your success. Worth every cent.",
    stars: 5,
  },
  {
    name: 'Amanda L.',
    role: 'Senior Manager, Retail Chain',
    quote: "I enrolled in Tier 1 and still got more value than I expected. The community alone is incredible — a group of leaders who are actually open and honest. Rare to find.",
    stars: 5,
  },
  {
    name: 'Chris W.',
    role: 'SVP, Media Company',
    quote: "Executive presence was always something I struggled to define, let alone develop. Module 5 cracked it wide open for me. I now show up completely differently in the boardroom.",
    stars: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section id="testimonials" className="py-36" style={{ background: C.bg }}>
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Section header — 2px gold top border */}
          <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: `2px solid ${C.gold}`, paddingTop: '1.1rem' }}>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: C.gold, letterSpacing: '0.22em' }}>02</span>
            <span style={{ width: '1px', height: '10px', background: C.border, display: 'inline-block' }} />
            <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.textDim }}>Results</span>
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
            Leaders Who Took the Leap
          </h2>
          <p style={{
            fontFamily: '"Playfair Display", serif',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: C.gold,
            opacity: 0.85,
            lineHeight: 1.5,
          }}>
            Real results from real leaders — across industries, team sizes, and career stages.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid mb-5"
              style={{
                background: C.cardBg,
                border: `1px solid ${C.cardBorder}`,
                borderTop: `2px solid rgba(200,149,108,0.2)`,
                padding: '1.75rem',
                borderRadius: '0',
              }}
            >
              {/* Playfair large serif quote mark */}
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '5rem',
                lineHeight: 0.7,
                color: C.gold,
                opacity: 0.3,
                marginBottom: '0.5rem',
                fontWeight: 700,
                userSelect: 'none',
              }}>
                "
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} style={{ color: C.gold, fontSize: '0.8rem' }}>★</span>
                ))}
              </div>

              <p style={{ color: C.textMuted, lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300, fontSize: '0.9rem' }}>
                {t.quote}
              </p>

              <div style={{ borderTop: `1px solid ${C.cardBorder}`, paddingTop: '1rem' }}>
                <div className="flex items-center gap-3">
                  <img
                    src={AVATAR}
                    alt={t.name}
                    className="w-9 h-9 object-cover flex-shrink-0"
                    style={{ border: `1px solid rgba(200,149,108,0.2)` }}
                  />
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: C.textPrimary, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{t.name}</div>
                    <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.82rem', color: C.textDim, marginTop: '1px' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
