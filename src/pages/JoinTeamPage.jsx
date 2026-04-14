import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' },
})

export default function JoinTeamPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="pt-40 pb-24 bg-cream">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <motion.div {...fade(0.1)}>
              <p className="eyebrow mb-5">Be Part of Something</p>
              <div className="accent-bar-light mb-5" />
              <h1
                className="font-sans font-bold text-navy mb-6"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 0.97, letterSpacing: '-3px', maxWidth: '800px' }}
              >
                Join the <span className="text-gold-light">LIT Team.</span>
              </h1>
              <p
                className="font-serif italic text-gold-light mb-10"
                style={{ fontSize: '1.15rem', maxWidth: '520px' }}
              >
                "Self Growth Never Stops."
              </p>
              <div style={{ width: '100%', maxWidth: '560px', height: '1px', background: 'rgba(15,23,42,0.1)', marginBottom: '1.75rem' }} />
              <p
                className="body-lead-dark mb-5"
                style={{ maxWidth: '560px' }}
              >
                We're a small team on a mission to develop confident, effective leaders. If that mission resonates with you, we'd love to hear from you.
              </p>
              <p
                className="body-lead-dark mb-10"
                style={{ maxWidth: '560px' }}
              >
                No formal process. Just send us a note introducing yourself, your background, and why you're drawn to leadership development. We'll take it from there.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="mailto:matt@leadershipintraining.com?subject=Joining the LIT Team"
                  className="btn btn-navy"
                >
                  Reach Out
                </a>
                <Link to="/about" className="btn btn-outline-dark">
                  Learn About LIT
                </Link>
              </div>
              <p className="font-serif italic text-text-muted mt-4" style={{ fontSize: '0.85rem' }}>
                matt@leadershipintraining.com
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact strip */}
        <section className="py-20 bg-dark">
          <div className="max-w-8xl mx-auto px-8 md:px-16">
            <motion.div {...fade(0.1)}>
              <div className="flex items-baseline gap-4 mb-10" style={{ borderTop: '2px solid #C8956C', paddingTop: '1.1rem' }}>
                <span className="section-number">01</span>
                <span className="section-pipe" />
                <span className="section-label">Get In Touch</span>
              </div>
              <p className="body-lead mb-2" style={{ maxWidth: '520px' }}>
                Send an email to the address below and someone from our team will get back to you.
              </p>
              <a
                href="mailto:matt@leadershipintraining.com?subject=Joining the LIT Team"
                className="font-sans font-bold text-gold"
                style={{ fontSize: '1rem', letterSpacing: '0.01em', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.75'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                matt@leadershipintraining.com
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
