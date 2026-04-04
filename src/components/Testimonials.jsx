import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
    <section id="testimonials" className="py-36 bg-dark">
      <div className="max-w-8xl mx-auto px-8 md:px-16" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: '2px solid #C8956C', paddingTop: '1.1rem' }}>
            <span className="section-number">02</span>
            <span className="section-pipe" />
            <span className="section-label">Results</span>
          </div>

          <div className="divider-gold mb-5" />

          <h2 className="heading-xl mb-3">
            Leaders Who Took the Leap
          </h2>
          <p className="pull-quote" style={{ opacity: 0.85 }}>
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
                background: '#111E2E',
                border: '1px solid rgba(255,255,255,0.06)',
                borderTop: '2px solid rgba(200,149,108,0.2)',
                padding: '1.75rem',
              }}
            >
              <div className="font-serif text-gold mb-2" style={{ fontSize: '5rem', lineHeight: 0.7, opacity: 0.3, fontWeight: 700, userSelect: 'none' }}>
                "
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-gold" style={{ fontSize: '0.8rem' }}>★</span>
                ))}
              </div>

              <p className="text-muted-dark mb-6" style={{ lineHeight: 1.8, fontWeight: 300, fontSize: '0.9rem' }}>
                {t.quote}
              </p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                <div className="flex items-center gap-3">
                  <img
                    src={AVATAR}
                    alt={t.name}
                    className="w-9 h-9 object-cover flex-shrink-0"
                    style={{ border: '1px solid rgba(200,149,108,0.2)' }}
                  />
                  <div>
                    <div className="font-sans font-bold text-cream" style={{ fontSize: '0.8rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{t.name}</div>
                    <div className="font-serif italic text-text-dim" style={{ fontSize: '0.82rem', marginTop: '1px' }}>{t.role}</div>
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
