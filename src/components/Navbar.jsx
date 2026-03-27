import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const C = {
  navBg: '#0F172A',
  border: 'rgba(255,255,255,0.08)',
  blue: '#3A82FF',
  gold: '#D4A574',
  goldHover: '#C4915A',
  textPrimary: '#F8FAFC',
  textMuted: '#8895A7',
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'auto' : 'none',
        background: C.navBg,
        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
      }}
    >
      <div className="max-w-8xl mx-auto px-8 md:px-16 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-1">
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: '1.2rem', color: C.textPrimary, letterSpacing: '-0.5px' }}>MJ</span>
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 400, fontSize: '1.2rem', color: C.textMuted, letterSpacing: '-0.5px' }}> Leadership</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium cursor-pointer transition-colors duration-150"
                style={{ color: C.textMuted }}
                onMouseEnter={(e) => (e.target.style.color = C.blue)}
                onMouseLeave={(e) => (e.target.style.color = C.textMuted)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {[0, 1, 2].map((i) => <span key={i} className="block h-0.5 w-5" style={{ background: C.textPrimary }} />)}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ background: C.navBg, borderTop: `1px solid ${C.border}` }}
          >
            <ul className="flex flex-col px-8 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => handleNavClick(link.href)} className="text-sm font-medium w-full" style={{ color: C.textPrimary }}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
