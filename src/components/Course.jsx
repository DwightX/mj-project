import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const modules = [
  {
    number: '01',
    title: 'The Leadership Identity Shift',
    desc: 'Discover who you are as a leader — beyond the title. Build an authentic leadership identity that commands respect and drives results.',
    duration: '2 weeks',
  },
  {
    number: '02',
    title: 'Mastering Human-First Communication',
    desc: 'Learn the communication frameworks that top leaders use to inspire, align, and energize their teams in any situation.',
    duration: '3 weeks',
  },
  {
    number: '03',
    title: 'Building High-Performance Cultures',
    desc: 'Design team environments where people do their best work. Understand motivation, accountability, and psychological safety.',
    duration: '3 weeks',
  },
  {
    number: '04',
    title: 'Strategic Decision-Making Under Pressure',
    desc: 'Develop the frameworks and mental models that help you make clear, confident decisions even in ambiguous situations.',
    duration: '2 weeks',
  },
  {
    number: '05',
    title: 'Executive Presence & Personal Brand',
    desc: 'Show up as the leader you\'re meant to be. Build executive presence, influence without authority, and a brand that opens doors.',
    duration: '2 weeks',
  },
  {
    number: '06',
    title: 'Sustaining Impact & Preventing Burnout',
    desc: 'The strategies that keep high performers performing — long-term. Energy management, boundaries, and leading from a full cup.',
    duration: '2 weeks',
  },
]

export default function Course() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="course" className="py-28 bg-white">
      <div className="  mx-auto px-8 md:px-16" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#cc922f' }}
          >
            The Curriculum
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: '#0a2749' }}
          >
            What You'll Master in 14 Weeks
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            A structured, results-driven program designed around real leadership challenges —
            not theory. Each module builds on the last to create lasting transformation.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border transition-all duration-300 cursor-default"
              style={{ borderColor: '#e5e7eb' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#cc922f'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(204,146,47,0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e7eb'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div
                className="text-4xl font-black mb-4 leading-none"
                style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(204,146,47,0.2)' }}
              >
                {mod.number}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: '#0a2749', fontFamily: "'Playfair Display', serif" }}
              >
                {mod.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7280' }}>
                {mod.desc}
              </p>
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(10,39,73,0.06)', color: '#0a2749' }}
              >
                ⏱ {mod.duration}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-sm mb-5" style={{ color: '#9ca3af' }}>
            Plus: Weekly live group coaching calls, private community access, and 1:1 session (select tiers)
          </p>
          <button
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: '#0a2749', color: '#ffffff' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#cc922f')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0a2749')}
          >
            See Pricing & Enroll →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
