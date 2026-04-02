import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CREAM = '#FAF7F2'
const CREAM_DEEP = '#F0E9DF'
const DARK = '#0C1420'
const DARK_CARD = '#111E2E'
const GOLD_LIGHT = '#A17B4F'
const GOLD = '#C8956C'
const NAVY = '#0F172A'
const TEXT = '#1C1510'
const TEXT_MUTED = '#5C4F45'
const TEXT_DIM = '#9C8E85'
const BORDER = 'rgba(28,21,16,0.12)'
const BORDER_DARK = 'rgba(255,255,255,0.07)'

function SectionTransition({ from = 'light' }) {
  const bg = from === 'light' ? CREAM_DEEP : DARK
  const thick = from === 'light' ? 'rgba(28,21,16,0.22)' : `rgba(200,149,108,0.4)`
  const thin = from === 'light' ? 'rgba(28,21,16,0.08)' : 'rgba(200,149,108,0.12)'
  return (
    <div style={{ background: bg, padding: '0 2rem' }}>
      <div style={{ height: '3px', background: thick }} />
      <div style={{ height: '1px', background: thin, marginTop: '4px' }} />
    </div>
  )
}

function ChapterHeader({ number, label, dark }) {
  const gold = dark ? GOLD : GOLD_LIGHT
  const border = dark ? BORDER_DARK : BORDER
  const dim = dark ? 'rgba(255,255,255,0.25)' : TEXT_DIM
  return (
    <div className="flex items-baseline gap-4 mb-12" style={{ borderTop: `2px solid ${gold}`, paddingTop: '1.1rem' }}>
      <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: gold, letterSpacing: '0.22em' }}>{number}</span>
      <span style={{ width: '1px', height: '10px', background: border, display: 'inline-block' }} />
      <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: dim }}>{label}</span>
    </div>
  )
}

function AccentBar({ color }) {
  return <div style={{ width: '40px', height: '3px', background: color, marginBottom: '1.25rem' }} />
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

const credentials = [
  { label: 'Education', value: 'Master\'s in Management & Leadership (MSML)' },
  { label: 'Recognition', value: 'Marquis Who\'s Who Listee' },
  { label: 'Certifications', value: 'Developing Leadership Presence — LinkedIn Learning' },
  { label: '', value: 'Foundations of Leadership — Hone' },
  { label: '', value: 'Developing Yourself and Others — DDI' },
  { label: 'Awards', value: 'Multi Presidents Club Award Winning Leader' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Page header */}
        <section className="pt-40 pb-24" style={{ background: CREAM }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.1rem', color: GOLD_LIGHT, marginBottom: '1.5rem' }}>
                The story behind the work
              </p>
              <AccentBar color={GOLD_LIGHT} />
              <h1 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.97, letterSpacing: '-3px', color: NAVY, marginBottom: '1.5rem' }}>
                About<br /><span style={{ color: GOLD_LIGHT }}>Matt Njoku</span>
              </h1>
              <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.4rem', fontWeight: 600, color: '#2D3748', maxWidth: '600px', lineHeight: 1.5 }}>
                "Self Growth Never Stops."
              </p>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Chapter 1 — Where It Started */}
        <section className="py-28" style={{ background: DARK }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="01" label="Where It Started" dark />
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <AccentBar color={GOLD} />
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: '#F5F0EB', marginBottom: '1.75rem', lineHeight: 1.08 }}>
                    Leadership was part of the <span style={{ color: GOLD }}>foundation.</span>
                  </h2>
                  <p style={{ color: '#8A9AAA', fontSize: '1rem', fontWeight: 400, lineHeight: 1.85, marginBottom: '1.25rem' }}>
                    Leadership has been a part of my life long before I ever stepped into a corporate role. As an All-American collegiate athlete and team captain from high school through college, I was shaped by values like hard work, discipline, confidence, coachability, and teamwork.
                  </p>
                  <p style={{ color: '#8A9AAA', fontSize: '1rem', fontWeight: 400, lineHeight: 1.85 }}>
                    Those weren't just things I practiced on the field — they became the foundation for how I approached everything. While I had aspirations in professional sports, my parents encouraged me to pursue a different path — one that combined education with real-world experience. That decision changed everything.
                  </p>
                </div>
                <div style={{ borderLeft: `1px solid ${BORDER_DARK}`, paddingLeft: '3rem' }}>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 600, color: GOLD, lineHeight: 1.5, marginBottom: '2rem' }}>
                    "I took the same mindset that drove me in athletics and brought it into business."
                  </p>
                  <p style={{ color: '#8A9AAA', fontSize: '1rem', fontWeight: 400, lineHeight: 1.85 }}>
                    I wanted to learn fast, compete at a high level, and earn the opportunity to lead.
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* Chapter 2 — Building as a Leader */}
        <section className="py-28" style={{ background: CREAM_DEEP }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="02" label="Building as a Leader" dark={false} />
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <AccentBar color={GOLD_LIGHT} />
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: TEXT, marginBottom: '1.75rem', lineHeight: 1.08 }}>
                    From rep to <span style={{ color: GOLD_LIGHT }}>head of sales.</span>
                  </h2>
                  <p style={{ color: TEXT_MUTED, fontSize: '1rem', fontWeight: 400, lineHeight: 1.85, marginBottom: '1.5rem' }}>
                    Early in my career, I committed to growth on every level. While working full-time, I earned my Master's degree in Management and Leadership — applying what I learned in real time. That combination of education and execution helped me rise quickly through the ranks.
                  </p>
                  <p style={{ color: TEXT_MUTED, fontSize: '1rem', fontWeight: 400, lineHeight: 1.85 }}>
                    I became the #1 leader at multiple companies I worked for. From the outside, it looked like a fast climb. But internally, I was learning some hard lessons.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: TEXT_DIM, marginBottom: '1.5rem' }}>Career Progression</p>
                  <div className="space-y-0">
                    {careerSteps.map((step, i) => (
                      <div key={step} className="flex items-center gap-4" style={{ padding: '1rem 0', borderBottom: i < careerSteps.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                        <div style={{ width: '6px', height: '6px', background: i === careerSteps.length - 1 ? GOLD_LIGHT : BORDER, borderRadius: '50%', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.9rem', fontWeight: i === careerSteps.length - 1 ? 700 : 400, color: i === careerSteps.length - 1 ? TEXT : TEXT_MUTED, letterSpacing: '0.01em' }}>
                          {step}
                        </span>
                        {i === careerSteps.length - 1 && (
                          <span style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.8rem', color: GOLD_LIGHT, marginLeft: 'auto' }}>Current</span>
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

        {/* Chapter 3 — The Moment */}
        <section className="py-28" style={{ background: DARK }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="03" label="The Moment Everything Changed" dark />
              <div style={{ maxWidth: '720px' }}>
                <AccentBar color={GOLD} />
                <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: '#F5F0EB', marginBottom: '1.75rem', lineHeight: 1.08 }}>
                  The mistake most leaders make — but <span style={{ color: GOLD }}>few talk about.</span>
                </h2>
                <p style={{ color: '#8A9AAA', fontSize: '1rem', fontWeight: 400, lineHeight: 1.85, marginBottom: '1.25rem' }}>
                  When I took over my first sales team, I made a mistake that a lot of leaders make — but few talk about. I focused almost entirely on performance. In a skip-level meeting, it became clear: I hadn't built real, genuine connections with my team.
                </p>
                <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.4rem', fontWeight: 600, color: GOLD, lineHeight: 1.5, margin: '2rem 0', paddingLeft: '1.5rem', borderLeft: `3px solid ${GOLD}` }}>
                  "That moment stuck with me. Because I realized — this wasn't just a 'me' problem."
                </p>
                <p style={{ color: '#8A9AAA', fontSize: '1rem', fontWeight: 400, lineHeight: 1.85 }}>
                  As I continued leading and working with other managers, patterns started to show up everywhere — and they all pointed to the same root cause.
                </p>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* Chapter 4 — What I Started to See */}
        <section className="py-28" style={{ background: CREAM_DEEP }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="04" label="What I Started to See" dark={false} />
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <AccentBar color={GOLD_LIGHT} />
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: TEXT, marginBottom: '1.75rem', lineHeight: 1.08 }}>
                    A pattern no one was <span style={{ color: GOLD_LIGHT }}>addressing.</span>
                  </h2>
                  <p style={{ color: TEXT_MUTED, fontSize: '1rem', lineHeight: 1.85, marginBottom: '2rem' }}>
                    As Matt continued leading and working with other managers, the same patterns kept appearing across different industries, team sizes, and career stages.
                  </p>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.15rem', fontWeight: 600, color: GOLD_LIGHT, lineHeight: 1.5, marginBottom: '2rem' }}>
                    "What frustrated me wasn't that leaders were failing — it was why. There were no clear guidelines. No consistent frameworks. No alignment."
                  </p>
                  <p style={{ color: TEXT_MUTED, fontSize: '1rem', lineHeight: 1.85 }}>
                    People weren't underperforming because they lacked potential. They were underperforming because they lacked clarity.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: TEXT_DIM, marginBottom: '1.5rem' }}>Patterns Seen Across Teams</p>
                  <div className="space-y-0">
                    {patterns.map((p, i) => (
                      <div key={p} className="flex items-start gap-4" style={{ padding: '1rem 0', borderBottom: i < patterns.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                        <div style={{ width: '6px', height: '6px', background: GOLD_LIGHT, borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 400, color: TEXT_MUTED, lineHeight: 1.6 }}>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Chapter 5 — Why I Built This */}
        <section className="py-28" style={{ background: DARK }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <ChapterHeader number="05" label="Why I Built This" dark />
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <AccentBar color={GOLD} />
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-1.5px', color: '#F5F0EB', marginBottom: '1.75rem', lineHeight: 1.08 }}>
                    To give leaders the clarity they <span style={{ color: GOLD }}>never got.</span>
                  </h2>
                  <p style={{ color: '#8A9AAA', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                    I built this to change that. To give leaders a clear, practical foundation — so they know what to do from day one. This isn't about theory. It's about giving real leaders the tools, structure, and mindset they need to succeed — without having to learn everything the hard way.
                  </p>
                  <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.2rem', fontWeight: 600, color: GOLD, lineHeight: 1.5, marginTop: '1.5rem' }}>
                    "Because better leaders don't just build better teams — they build better organizations."
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(200,149,108,0.5)', marginBottom: '1.5rem' }}>When Leaders Have Clarity</p>
                  <div className="space-y-0">
                    {clarityOutcomes.map((o, i) => (
                      <div key={o} className="flex items-start gap-4" style={{ padding: '1.1rem 0', borderBottom: i < clarityOutcomes.length - 1 ? `1px solid ${BORDER_DARK}` : 'none' }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
                          <circle cx="8" cy="8" r="7" fill="rgba(200,149,108,0.12)" />
                          <path d="M5 8l2.5 2.5L11 5.5" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ fontSize: '0.95rem', fontWeight: 400, color: '#8A9AAA', lineHeight: 1.6 }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* The Mission */}
        <section className="py-28" style={{ background: CREAM }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div style={{ borderTop: `2px solid ${GOLD_LIGHT}`, paddingTop: '1.1rem', marginBottom: '2rem' }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: GOLD_LIGHT, letterSpacing: '0.22em' }}>The Mission</span>
              </div>
              <AccentBar color={GOLD_LIGHT} />
              <p style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-1.5px', color: NAVY, lineHeight: 1.15, maxWidth: '760px' }}>
                To develop confident, effective leaders who know how to lead people — not just manage performance.
              </p>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="light" />

        {/* Credentials */}
        <section className="py-28" style={{ background: DARK }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <div className="flex items-baseline gap-4 mb-16" style={{ borderTop: `2px solid ${GOLD}`, paddingTop: '1.1rem' }}>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: '0.75rem', color: GOLD, letterSpacing: '0.22em' }}>06</span>
                <span style={{ width: '1px', height: '10px', background: BORDER_DARK, display: 'inline-block' }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>Credentials</span>
              </div>

              <div className="grid md:grid-cols-2 gap-0">
                {credentials.map((c, i) => (
                  <div
                    key={i}
                    className="flex gap-6 items-start"
                    style={{ padding: '1.25rem 0', borderBottom: `1px solid ${BORDER_DARK}`, borderRight: i % 2 === 0 ? `1px solid ${BORDER_DARK}` : 'none', paddingRight: i % 2 === 0 ? '3rem' : '0', paddingLeft: i % 2 === 1 ? '3rem' : '0' }}
                  >
                    {c.label && (
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, minWidth: '90px', paddingTop: '2px', opacity: 0.8 }}>{c.label}</span>
                    )}
                    <span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#8A9AAA', lineHeight: 1.6, paddingLeft: c.label ? '0' : '102px' }}>{c.value}</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-x-12 gap-y-6 mt-14" style={{ borderTop: `1px solid ${BORDER_DARK}`, paddingTop: '2rem' }}>
                {[
                  { value: '20+', label: 'Years in Sales' },
                  { value: '15+', label: 'Years in Leadership' },
                  { value: '100+', label: 'Leaders Coached' },
                  { value: '4x', label: 'Presidents Club' },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '2.25rem', letterSpacing: '-2px', color: '#F5F0EB', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.9rem', color: '#8A9AAA', marginTop: '4px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </section>

        <SectionTransition from="dark" />

        {/* CTA */}
        <section className="py-28" style={{ background: CREAM }}>
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <FadeSection>
              <AccentBar color={GOLD_LIGHT} />
              <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1.5px', color: NAVY, marginBottom: '0.75rem', lineHeight: 1.05 }}>
                Ready to Become the Leader Your Team Actually Needs?
              </h2>
              <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.2rem', fontWeight: 600, color: GOLD_LIGHT, marginBottom: '1.75rem', lineHeight: 1.5, maxWidth: '560px' }}>
                "You don't need more guesswork. You need clarity, structure, and a proven approach that works in the real world."
              </p>
              <div style={{ width: '100%', maxWidth: '560px', height: '1px', background: BORDER, marginBottom: '1.75rem' }} />
              <p style={{ color: TEXT_MUTED, fontSize: '1rem', lineHeight: 1.85, maxWidth: '560px', marginBottom: '2.5rem' }}>
                Whether you're leading your first team, struggling to get consistent performance, trying to build trust while driving results, or simply ready to operate at a higher level — this is where that shift happens.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/program"
                  style={{ background: NAVY, color: CREAM, padding: '14px 32px', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#1E293B')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = NAVY)}
                >
                  View the Program
                </Link>
                <Link
                  to="/"
                  style={{ background: 'transparent', color: NAVY, padding: '14px 32px', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, border: `1.5px solid ${BORDER}`, textDecoration: 'none', display: 'inline-block' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = NAVY)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = BORDER)}
                >
                  Book a Call
                </Link>
              </div>
            </FadeSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
