import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'About', to: '/about', type: 'route' },
  { label: 'Program', to: '/program', type: 'route' },
  { label: 'Contact', type: 'contact' },
]

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const pastHero = isHome
    ? scrollY > (typeof window !== 'undefined' ? window.innerHeight - 80 : 700)
    : true
  const visible = isHome ? scrollY > 30 : true

  const isDark = !isHome || pastHero
  const navBg = isDark ? '#0F172A' : '#FAF7F2'
  const navBorder = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.12)'
  const logoMain = isDark ? '#F5F0EB' : '#0F172A'
  const logoSub = isDark ? '#8A9AAA' : '#718096'
  const accentBar = isDark ? '#C8956C' : '#A17B4F'
  const linkColor = isDark ? '#8A9AAA' : '#5C4F45'
  const linkHover = isDark ? '#C8956C' : '#A17B4F'
  const burgerColor = isDark ? '#F5F0EB' : '#0F172A'

  const handleContactClick = () => {
    setMenuOpen(false)
    if (isHome) {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      // After navigating home, user can scroll to contact
      setTimeout(() => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    }
  }

  const linkStyle = {
    color: linkColor,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    fontSize: '0.7rem',
    fontWeight: 700,
    transition: 'color 0.2s ease',
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        background: navBg,
        borderBottom: `1px solid ${navBorder}`,
        transition: 'opacity 0.25s ease, background 0.4s ease, border-color 0.4s ease',
      }}
    >
      <div className="max-w-8xl mx-auto px-8 md:px-16 flex items-center justify-between h-16">

        <Link to="/" className="flex items-center gap-2">
          <span style={{ display: 'inline-block', width: '3px', height: '18px', background: accentBar, transition: 'background 0.4s ease' }} />
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: logoMain, transition: 'color 0.4s ease' }}>
            Leadership
          </span>
          <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 400, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: logoSub, transition: 'color 0.4s ease' }}>
            In Training
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.type === 'route' ? (
                <Link
                  to={link.to}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = linkHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  onClick={handleContactClick}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.target.style.color = linkHover)}
                  onMouseLeave={(e) => (e.target.style.color = linkColor)}
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-0.5 w-5 origin-center"
            style={{ background: burgerColor }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block h-0.5 origin-center"
            style={{ background: burgerColor, width: '14px' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-0.5 w-5 origin-center"
            style={{ background: burgerColor }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden"
            style={{ background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <ul className="flex flex-col px-8 py-5 gap-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.type === 'route' ? (
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      style={{ color: '#F5F0EB', letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, display: 'block' }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={handleContactClick}
                      style={{ color: '#F5F0EB', letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
