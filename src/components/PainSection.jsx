import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const painPoints = [
  'You were promoted without training',
  'You are a manager that lacks structure',
  'Your team performance is inconsistent',
  'Accountability conversations are avoided',
]

const outcomes = [
  'Run structured 1:1s that drive performance',
  'Hold confident accountability conversations',
  'Build a repeatable coaching system',
  'Improve team output and consistency',
  'Learn leadership strategies leveraging AI',
]

const authority = [
  { value: '130+', label: 'Sales professionals led & developed' },
  { value: '250%+', label: 'Revenue growth delivered' },
  { value: '20+', label: 'Years building & scaling teams' },
]

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
      <circle cx="8" cy="8" r="7" fill="rgba(200,149,108,0.12)" />
      <path d="M5 8l2.5 2.5L11 5.5" stroke="#C8956C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PainSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section className="bg-dark py-20" ref={ref}>
      <div className="max-w-8xl mx-auto px-8 md:px-16">

        {/* Pain + Outcomes two-col */}
        <div className="grid md:grid-cols-2 gap-0 mb-14">

          {/* Pain */}
          <div style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="md:pr-12 py-4"
            >
              <div className="mb-8" style={{ borderTop: '2px solid rgba(200,149,108,0.5)', paddingTop: '1.1rem' }}>
                <span className="eyebrow">This program is for you if...</span>
              </div>
              <ul>
                {painPoints.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-4"
                    style={{
                      padding: '1rem 0',
                      borderBottom: i < painPoints.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}
                  >
                    <span style={{ display: 'inline-block', width: '6px', height: '6px', background: '#C8956C', borderRadius: '50%', flexShrink: 0, marginTop: '9px', opacity: 0.8 }} />
                    <span className="text-muted-dark" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{p}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Outcomes */}
          <div className="mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:pl-12 py-4"
            >
              <div className="mb-8" style={{ borderTop: '2px solid rgba(200,149,108,0.35)', paddingTop: '1.1rem' }}>
                <span className="eyebrow" style={{ color: 'rgba(200,149,108,0.65)' }}>After this program, you will:</span>
              </div>
              <ul>
                {outcomes.map((o, i) => (
                  <motion.li
                    key={o}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-4"
                    style={{
                      padding: '1rem 0',
                      borderBottom: i < outcomes.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}
                  >
                    <Check />
                    <span className="text-muted-dark" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{o}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>

        {/* Authority strip */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.75rem' }}>
          <motion.p
            className="eyebrow mb-7"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.45 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Built by a Leader Who Has Done This at Scale
          </motion.p>
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {authority.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.52 + i * 0.12, ease: 'easeOut' }}
              >
                <div className="font-sans font-bold text-gold" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1, letterSpacing: '-1.5px' }}>
                  {a.value}
                </div>
                <div className="font-serif italic text-muted-dark" style={{ fontSize: '0.85rem', marginTop: '7px' }}>
                  {a.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
