import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import mattHeadshot from '../assets/Matt_Headshot.jpg'


const differentiators = ['Human-First Framework', 'Real-World Scenarios', '1:1 Coaching', 'Proven Systems', 'Accountability']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } }),
}

export default function WhyChooseMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <section id="about" className="py-36 bg-cream-deep" ref={ref}>
      <div className="max-w-8xl mx-auto px-8 md:px-16">

        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}
          className="flex items-baseline gap-4 mb-16"
          style={{ borderTop: '2px solid #A17B4F', paddingTop: '1.1rem' }}
        >
          <span className="section-number">01</span>
          <span className="section-pipe-dark" />
          <span className="section-label-dark">The Foundation</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.8}
              className="pull-quote-light mb-6"
            >
              "Self Growth Never Stops."
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0.9}
              className="accent-bar-light mb-5"
            />

            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={1}
              className="heading-xl-dark mb-7"
            >
              Built by someone who has{' '}
              <span className="text-gold-light">lived it.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={2}
              className="body-lead-dark mb-5"
              style={{ maxWidth: '520px' }}
            >
              As an All-American collegiate athlete and team captain, I was shaped by values like hard work, discipline, confidence, coachability, and teamwork. I took that same mindset into business — rising from Sales Representative to Head of Sales and becoming the #1 leader at multiple organizations along the way.
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={3}
              className="body-lead-dark mb-10"
              style={{ maxWidth: '520px' }}
            >
              I built this after recognizing a pattern no one was talking about: leaders weren't failing because they lacked potential — they were failing because they lacked clarity, structure, and a real framework to lead from.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={4}
              style={{ borderTop: '1px solid rgba(28,21,16,0.12)', paddingTop: '1.75rem' }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {differentiators.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-4 py-1.5 text-text-muted"
                    style={{ border: '1px solid rgba(28,21,16,0.12)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                className="text-gold-light"
                style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid #A17B4F', paddingBottom: '2px' }}
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
            <div style={{ position: 'absolute', left: '-2rem', top: '10%', bottom: '10%', width: '1px', background: 'rgba(28,21,16,0.12)' }} />

            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={mattHeadshot}
                alt="Matt Njoku"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.82) sepia(0.08)' }}
              />
            </div>

            <div className="absolute bottom-0 left-0 p-7" style={{ background: '#A17B4F', minWidth: '210px' }}>
              <div className="font-sans font-bold text-cream" style={{ fontSize: '2.25rem', lineHeight: 1 }}>20+</div>
              <div className="font-serif italic text-cream" style={{ fontSize: '1rem', opacity: 0.85, marginTop: '6px', lineHeight: 1.4 }}>
                Years of experience
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
