import { Link } from 'react-router-dom'

const C = {
  bg: '#080E1A',
  border: 'rgba(255,255,255,0.08)',
  blue: '#3A82FF',
  gold: '#D4A574',
  textPrimary: '#F8FAFC',
  textMuted: '#8895A7',
  textDim: '#3D4A5E',
}

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Instagram', href: '#', icon: '▷' },
  { label: 'X', href: '#', icon: '𝕏' },
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-8xl mx-auto px-8 md:px-16 pt-14 pb-10">
        <div className="grid md:grid-cols-3 gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-1">
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif',fontWeight: 600, fontSize: '1.2rem', color: C.textPrimary, letterSpacing: '-0.5px' }}>MJ</span>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 400, fontSize: '1.2rem', color: C.textMuted, letterSpacing: '-0.5px' }}> Leadership</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.gold, marginBottom: '1.25rem' }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{ fontSize: '0.875rem', color: C.textDim, cursor: 'pointer', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => (e.target.style.color = C.gold)}
                    onMouseLeave={(e) => (e.target.style.color = C.textDim)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Email */}
          <div>
            <h4 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.gold, marginBottom: '1.25rem' }}>
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center text-sm font-bold transition-all duration-150"
                  style={{ background: '#1F2937', color: C.textMuted, borderRadius: '6px', border: `1px solid ${C.border}` }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#2A3A50'; e.currentTarget.style.color = C.gold }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#1F2937'; e.currentTarget.style.color = C.textMuted }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:carter91jr@gmail.com"
              style={{ fontSize: '0.875rem', color: C.textDim, transition: 'color 0.15s' }}
              onMouseEnter={(e) => (e.target.style.color = C.gold)}
              onMouseLeave={(e) => (e.target.style.color = C.textDim)}
            >
              carter91jr@gmail.com
            </a>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${C.border}`, fontSize: '0.75rem', color: C.textDim }}
        >
          <p>© {new Date().getFullYear()} MJ Leadership. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a
                key={label}
                href="#"
                style={{ color: C.textDim, transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.target.style.color = C.gold)}
                onMouseLeave={(e) => (e.target.style.color = C.textDim)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
