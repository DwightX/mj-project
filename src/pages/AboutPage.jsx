import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mattHeadshot from '../assets/Matt_Headshot.jpg'

function SectionTransition({ from = 'light' }) {
  const bg = from === 'light' ? '#F0E9DF' : '#0C1420'
  const thick = from === 'light' ? 'rgba(28,21,16,0.22)' : 'rgba(200,149,108,0.4)'
  const thin = from === 'light' ? 'rgba(28,21,16,0.08)' : 'rgba(200,149,108,0.12)'
  return (
    <div style={{ background: bg, padding: '0 2rem' }}>
      <div style={{ height: '3px', background: thick }} />
      <div style={{ height: '1px', background: thin, marginTop: '4px' }} />
    </div>
  )
}

function ChapterHeader({ number, label, dark }) {
  const gold = dark ? '#C8956C' : '#A17B4F'
  const border = dark ? 'rgba(255,255,255,0.07)' : 'rgba(28,21,16,0.12)'
  return (
    <div className="flex items-baseline gap-4 mb-12" style={{ borderTop: `2px solid ${gold}`, paddingTop: '1.1rem' }}>
      <span className="section-number">{number}</span>
      <span style={{ width: '1px', height: '10px', background: border, display: 'inline-block' }} />
      <span className={dark ? 'section-label' : 'section-label-dark'}>{label}</span>
    </div>
  )
}

function FadeSection({ children, className, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

const careerSteps = [
  'Sales Representative',
  'Team Leader',
  'Director',
  'VP of Sales',
  'Head of Sales',
]

const patterns = [
  'New leaders struggling to set clear expectations',
  'Inconsistent approaches to managing performance',
  'Difficulty leading top performers',
  'Over-reliance on micromanagement',
  'Lack of confidence in decision-making',
]

const clarityOutcomes = [
  'Lead with confidence from day one',
  'Make fewer costly mistakes',
  'Build stronger, more connected teams',
  'Drive faster, more consistent results',
]

const credentialColumns = [
  {
    label: 'Education',
    items: ["Master's in Management & Leadership (MSML)"],
  },
  {
    label: 'Certifications',
    items: [
      'Developing Leadership Presence — LinkedIn Learning',
      'Foundations of Leadership — Hone',
      'Developing Yourself and Others — DDI',
    ],
  },
  {
    label: 'Recognition & Awards',
    items: [
      "Marquis Who's Who Listee",
      'Multi Presidents Club Award Winning Leader',
    ],
  },
]

function CredentialsGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <div ref={ref} className="grid md:grid-cols-3 mb-14">
      {credentialColumns.map((col, i) => (
        <motion.div
          key={col.label}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.14, ease: 'easeOut' }}
          style={{
            borderRight: i < credentialColumns.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            paddingRight: i < credentialColumns.length - 1 ? '2.5rem' : '0',
            paddingLeft: i > 0 ? '2.5rem' : '0',
          }}
        >
          <p className="eyebrow mb-5 pb-3" style={{ opacity: 0.8, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            {col.label}
          </p>
          <ul>
            {col.items.map((item, j) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.14 + j * 0.1 + 0.15, ease: 'easeOut' }}
                className="flex items-start gap-3"
                style={{ padding: '0.75rem 0', borderBottom: j < col.items.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
              >
                <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: '#C8956C', flexShrink: 0, marginTop: '8px', opacity: 0.6 }} />
                <span className="text-muted-dark" style={{ fontSize: '0.88rem', fontWeight: 400, lineHeight: 1.65 }}>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

function StatsRow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const stats = [
    { value: '20+', label: 'Years in Sales' },
    { value: '15+', label: 'Years in Leadership' },
    { value: '130+', label: 'Leaders Coached' },
    { value: '8x', label: 'Presidents Club' },
  ]

  return (
    <div ref={ref} className="flex flex-wrap gap-x-12 gap-y-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem' }}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
        >
          <div className="font-sans font-bold text-gold" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1, letterSpacing: '-1.5px' }}>{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Page header */}
        <section className="pt-32 pb-0 bg-cream">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
              >
                <p className="font-serif italic text-gold-light mb-6" style={{ fontSize: '1.1rem' }}>
                  The story behind the work
                </p>
                <div className="accent-bar-light mb-5" />
                <h1 className="font-sans font-bold text-navy mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 0.97, letterSpacing: '-3px' }}>
                  About<br /><span className="text-gold-light">Matt Njoku</span>
                </h1>
                <p className="font-serif italic font-semibold" style={{ fontSize: '1.4rem', color: '#2D3748', maxWidth: '480px', lineHeight: 1.5 }}>
                  "Self Growth Never Stops."
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
                className="relative"
              >
                <div style={{ position: 'absolute', left: '-1.5rem', top: '10%', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, #A17B4F, transparent)' }} />

                <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <motion.img
                    src={mattHeadshot}
                    alt="Matt Njoku"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'top center', filter: 'brightness(0.88) sepia(0.06)' }}
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                  />
                </div>

                <div className="grid grid-cols-2" style={{ borderTop: '2px solid #A17B4F' }}>
                  {[
                    { value: '20+', label: 'Years in Sales' },
                    { value: '15+', label: 'Years Leading' },
                    { value: '130+', label: 'Leaders Coached' },
                    { value: '8x', label: 'Presidents Club' },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.7 + i * 0.1, ease: 'easeOut' }}
                      style={{
                        padding: '1.1rem 1.25rem',
                        borderRight: i % 2 === 0 ? '1px solid rgba(28,21,16,0.1)' : 'none',
                        borderBottom: i < 2 ? '1px solid rgba(28,21,16,0.1)' : 'none',
                      }}
                    >
                      <div className="font-sans font-bold text-gold-light" style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', lineHeight: 1, letterSpacing: '-1px' }}>{s.value}</div>
                      <div className="font-serif italic" style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '6px' }}>{s.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Chapter 1 */}
        <section className="py-28 bg-dark">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="01" label="Where It Started" dark />
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="accent-bar mb-5" />
                  <h2 className="heading-lg mb-7">
                    Leadership was part of the <span className="text-gold">foundation.</span>
                  </h2>
                  <p className="body-lead mb-5">
                    Leadership has been a part of my life long before I ever stepped into a corporate role. As an All-American collegiate athlete and team captain from high school through college, I was shaped by values like hard work, discipline, confidence, coachability, and teamwork.
                  </p>
                  <p className="body-lead mb-10">
                    Those weren't just things I practiced on the field. They became the foundation for how I approached everything. While I had aspirations in professional sports, my parents encouraged me to pursue a different path, one that combined education with real-world experience. That decision changed everything.
                  </p>
                  {/* Founder narrative */}
                  <div>
                    {[
                      'I was promoted early…',
                      'I saw managers struggling…',
                      'No real training existed…',
                      'So I built this…',
                    ].map((line, i) => (
                      <div
                        key={line}
                        className="flex items-center gap-4"
                        style={{
                          padding: '0.9rem 0',
                          borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                        }}
                      >
                        <span className="font-sans font-bold text-gold" style={{ fontSize: '0.65rem', letterSpacing: '0.18em', minWidth: '1.5rem', opacity: 0.6 }}>
                          0{i + 1}
                        </span>
                        <span className="font-serif italic text-cream" style={{ fontSize: '1.05rem' }}>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.07)', paddingLeft: '3rem' }}>
                  <p className="pull-quote mb-8">
                    "I took the same mindset that drove me in athletics and brought it into business."
                  </p>
                  <p className="body-lead">
                    I wanted to learn fast, compete at a high level, and earn the opportunity to lead.
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* Chapter 2 */}
        <section className="py-28 bg-cream-deep">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="02" label="Building as a Leader" dark={false} />
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="accent-bar-light mb-5" />
                  <h2 className="heading-lg-dark mb-7">
                    From rep to <span className="text-gold-light">head of sales.</span>
                  </h2>
                  <p className="body-lead-dark mb-6">
                    Early in my career, I committed to growth on every level. While working full-time, I earned my Master's degree in Management and Leadership, applying what I learned in real time. That combination of education and execution helped me rise quickly through the ranks.
                  </p>
                  <p className="body-lead-dark">
                    I became the #1 leader at multiple companies I worked for. From the outside, it looked like a fast climb. But internally, I was learning some hard lessons.
                  </p>
                </div>
                <div>
                  <p className="font-sans font-extrabold text-text-dim mb-6" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Career Progression</p>
                  <div className="space-y-0">
                    {careerSteps.map((step, i) => (
                      <div key={step} className="flex items-center gap-4" style={{ padding: '1rem 0', borderBottom: i < careerSteps.length - 1 ? '1px solid rgba(28,21,16,0.12)' : 'none' }}>
                        <div style={{ width: '6px', height: '6px', background: i === careerSteps.length - 1 ? '#A17B4F' : 'rgba(28,21,16,0.12)', borderRadius: '50%', flexShrink: 0 }} />
                        <span className={i === careerSteps.length - 1 ? 'font-bold text-text' : 'text-text-muted'} style={{ fontSize: '0.9rem', letterSpacing: '0.01em' }}>
                          {step}
                        </span>
                        {i === careerSteps.length - 1 && (
                          <span className="font-serif italic text-gold-light ml-auto" style={{ fontSize: '0.8rem' }}>Current</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Chapter 3 */}
        <section className="py-28 bg-dark">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="03" label="The Moment Everything Changed" dark />
              <div style={{ maxWidth: '720px' }}>
                <div className="accent-bar mb-5" />
                <h2 className="heading-lg mb-7">
                  The mistake most leaders make, but <span className="text-gold">few talk about.</span>
                </h2>
                <p className="body-lead mb-5">
                  When I took over my first sales team, I made a mistake that a lot of leaders make, but few talk about. I focused almost entirely on performance. In a skip-level meeting, it became clear: I hadn't built real, genuine connections with my team.
                </p>
                <p className="pull-quote my-8 pl-6" style={{ borderLeft: '3px solid #C8956C' }}>
                  "That moment stuck with me. I realized this wasn't just a 'me' problem."
                </p>
                <p className="body-lead">
                  As I continued leading and working with other managers, patterns started to show up everywhere. They all pointed to the same root cause.
                </p>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* Chapter 4 */}
        <section className="py-28 bg-cream-deep">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="04" label="What I Started to See" dark={false} />
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="accent-bar-light mb-5" />
                  <h2 className="heading-lg-dark mb-7">
                    A pattern no one was <span className="text-gold-light">addressing.</span>
                  </h2>
                  <p className="body-lead-dark mb-8">
                    As I continued leading and working with other managers, the same patterns kept appearing across different industries, team sizes, and career stages.
                  </p>
                  <p className="pull-quote-light mb-8">
                    "What frustrated me wasn't that leaders were failing. It was why. There were no clear guidelines. No consistent frameworks. No alignment."
                  </p>
                  <p className="body-lead-dark">
                    People weren't underperforming because they lacked potential. They were underperforming because they lacked clarity.
                  </p>
                </div>
                <div>
                  <p className="font-sans font-extrabold text-text-dim mb-6" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Patterns Seen Across Teams</p>
                  <div className="space-y-0">
                    {patterns.map((p, i) => (
                      <div key={p} className="flex items-start gap-4" style={{ padding: '1rem 0', borderBottom: i < patterns.length - 1 ? '1px solid rgba(28,21,16,0.12)' : 'none' }}>
                        <div style={{ width: '6px', height: '6px', background: '#A17B4F', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
                        <span className="body-lead-dark" style={{ fontSize: '0.9rem' }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Chapter 5 */}
        <section className="py-28 bg-dark">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="05" label="Why I Built This" dark />
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="accent-bar mb-5" />
                  <h2 className="heading-lg mb-7">
                    To give leaders the clarity they <span className="text-gold">never got.</span>
                  </h2>
                  <p className="body-lead mb-5">
                    I built this to change that. To give leaders a clear, practical foundation so they know what to do from day one. This isn't about theory. It's about giving real leaders the tools, structure, and mindset they need to succeed, without having to learn everything the hard way.
                  </p>
                  <p className="pull-quote mt-6">
                    "Because better leaders don't just build better teams. They build better organizations."
                  </p>
                </div>
                <div>
                  <p className="font-sans font-extrabold text-gold mb-6" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5 }}>When Leaders Have Clarity</p>
                  <div className="space-y-0">
                    {clarityOutcomes.map((o, i) => (
                      <div key={o} className="flex items-start gap-4" style={{ padding: '1.1rem 0', borderBottom: i < clarityOutcomes.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                          <circle cx="8" cy="8" r="7" fill="rgba(200,149,108,0.12)" />
                          <path d="M5 8l2.5 2.5L11 5.5" stroke="#C8956C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="body-lead" style={{ fontSize: '0.95rem' }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* The Mission */}
        <section className="py-28 bg-cream">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div style={{ borderTop: '2px solid #A17B4F', paddingTop: '1.1rem', marginBottom: '2rem' }}>
                <span className="section-number">The Mission</span>
              </div>
              <div className="accent-bar-light mb-5" />
              <p className="font-sans font-bold text-navy" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-1.5px', lineHeight: 1.15, maxWidth: '760px' }}>
                To develop confident, effective leaders who know how to lead people, not just manage performance.
              </p>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Credentials */}
        <section className="py-28 bg-dark">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-16" style={{ borderTop: '2px solid #C8956C', paddingTop: '1.1rem' }}>
                <span className="section-number">06</span>
                <span className="section-pipe" />
                <span className="section-label">Credentials</span>
              </div>
            </FadeSection>

            <CredentialsGrid />
            <StatsRow />
          </div>
        </section>

        <SectionTransition from="dark" />

        {/* CTA */}
        <section className="py-28 bg-cream">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="accent-bar-light mb-5" />
              <h2 className="heading-xl-dark mb-3">
                Become the Leader Your Team Needs.
              </h2>
              <p className="pull-quote-light mb-7" style={{ maxWidth: '560px' }}>
                "You don't need more guesswork. You need clarity, structure, and a proven approach that works in the real world."
              </p>
              <div style={{ width: '100%', maxWidth: '560px', height: '1px', background: 'rgba(28,21,16,0.12)', marginBottom: '1.75rem' }} />
              <p className="body-lead-dark mb-10" style={{ maxWidth: '560px' }}>
                Whether you're leading your first team, struggling to get consistent performance, trying to build trust while driving results, or simply ready to operate at a higher level, this is where that shift happens.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <Link to="/#booking" className="btn btn-navy">
                  Apply for Beta Cohort
                </Link>
                <Link to="/program" className="btn btn-outline-dark">
                  View the Program
                </Link>
              </div>
              <p className="font-serif italic text-gold-light" style={{ fontSize: '0.8rem' }}>
                Limited to 10–15 Business Managers. Spots Filling Fast.
              </p>
            </FadeSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
