import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const C = {
  bg: '#0F172A',
  cardBg: '#1F2937',
  border: 'rgba(255,255,255,0.08)',
  blue: '#3A82FF',
  gold: '#D4A574',
  textPrimary: '#F8FAFC',
  textMuted: '#8895A7',
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
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="py-24" style={{ background: C.bg }}>
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center justify-between mb-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
            <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.72rem', color: C.gold, letterSpacing: '0.18em', textTransform: 'uppercase' }}>02</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.textDim }}>Results</span>
          </div>
          <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px', color: C.textPrimary, marginBottom: '0.5rem' }}>
            Leaders Who Took the Leap
          </h2>
          <p style={{ color: C.textMuted, maxWidth: '460px', fontSize: '1rem' }}>
            Real results from real leaders — across industries, team sizes, and career stages.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid p-6 rounded-2xl mb-6"
              style={{ background: C.cardBg, border: `1px solid ${C.border}` }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} style={{ color: C.gold, fontSize: '0.85rem' }}>★</span>
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: C.textMuted, fontStyle: 'italic' }}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={AVATAR}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  style={{ border: `2px solid rgba(212,165,116,0.3)` }}
                />
                <div>
                  <div className="text-sm font-bold" style={{ color: C.textPrimary }}>{t.name}</div>
                  <div className="text-xs" style={{ color: C.textDim }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
