import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const credentials = [
  { icon: '🎓', title: 'ICF Certified Coach', desc: 'International Coaching Federation — highest accreditation' },
  { icon: '📈', title: 'Fortune 500 Leadership', desc: '15 years leading high-performance teams at scale' },
  { icon: '🏆', title: 'Forbes Coaches Council', desc: 'Recognized among the top executive coaches globally' },
  { icon: '📚', title: 'Published Author', desc: 'Author of "Lead from Within" — 10,000+ copies sold' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28" style={{ backgroundColor: '#f7f4ef' }}>
      <div className="  mx-auto px-8 md:px-16" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image / Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Placeholder image block */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5]"
            >
              <img
                src="https://cdn.vectorstock.com/i/500p/58/15/male-silhouette-profile-picture-vector-35845815.jpg"
                alt="Michael Johnson — Executive Leadership Coach"
                className="w-full h-full object-contain"
                style={{ padding: '2rem' }}
              />
              {/* Gold accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-2"
                style={{ background: '#cc922f' }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -right-6 top-16 rounded-xl p-4 shadow-xl"
              style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
            >
              <div className="text-2xl font-black" style={{ color: '#cc922f', fontFamily: "'Playfair Display', serif" }}>200+</div>
              <div className="text-xs text-gray-500 mt-0.5 font-medium">Leaders Coached</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -left-6 bottom-16 rounded-xl p-4 shadow-xl"
              style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
            >
              <div className="text-2xl font-black" style={{ color: '#0a2749', fontFamily: "'Playfair Display', serif" }}>15+</div>
              <div className="text-xs text-gray-500 mt-0.5 font-medium">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: '#cc922f' }}
            >
              About MJ
            </span>

            <h2
              className="text-4xl md:text-5xl font-black mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: '#0a2749' }}
            >
              I've Sat in the Seat You're In Right Now
            </h2>

            <p className="text-base leading-relaxed mb-5" style={{ color: '#4b5563' }}>
              After rising through the ranks at three Fortune 500 companies and leading teams
              of 200+ people, I know firsthand how isolating and overwhelming leadership can feel
              — especially when no one prepares you for the human side of it.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: '#4b5563' }}>
              That's why I created this course. Not a theoretical framework — a real, practiced
              methodology distilled from 15 years of success, failure, and everything in between.
              My clients don't just become better leaders. They become leaders people actually
              want to follow.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-3 p-4 rounded-xl"
                  style={{ background: '#ffffff', border: '1px solid #e5e7eb' }}
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{cred.icon}</span>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#0a2749' }}>{cred.title}</div>
                    <div className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{cred.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
