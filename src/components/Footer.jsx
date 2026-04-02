import { Link } from 'react-router-dom'

const C = {
  bg: '#080E1A',
  border: 'rgba(255,255,255,0.07)',
  gold: '#C8956C',
  textPrimary: '#F5F0EB',
  textMuted: '#8A9AAA',
  textDim: '#3D4A5E',
}

const navLinks = [
  { label: 'About', to: '/about', type: 'route' },
  { label: 'Program', to: '/program', type: 'route' },
  { label: 'Contact', href: '#contact', type: 'scroll' },
]

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'X', href: '#', icon: 'X' },
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: C.bg }}>
      <div style={{ borderTop: `1px solid ${C.border}`, padding: '2rem 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <div style={{ height: '1px', width: '60px', background: C.border }} />
          <div style={{ width: '3px', height: '3px', background: C.gold, opacity: 0.5, borderRadius: '50%' }} />
          <div style={{ height: '1px', width: '60px', background: C.border }} />
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-8 md:px-16 pt-10 pb-10">
        <div className="grid md:grid-cols-3 gap-10 mb-14">

          <div>
            <Link to="/" className="flex items-center gap-2 mb-3" style={{ textDecoration: 'none' }}>
              <span style={{ display: 'inline-block', width: '3px', height: '16px', background: C.gold }} />
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.textPrimary }}>Matt</span>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 400, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.textMuted }}>Njoku</span>
            </Link>
            <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.95rem', color: C.textDim, lineHeight: 1.6 }}>
              Self Growth Never Stops.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, marginBottom: '1.25rem' }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.type === 'route' ? (
                    <Link
                      to={link.to}
                      style={{ fontSize: '0.875rem', color: C.textDim, transition: 'color 0.15s', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = C.textDim)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollTo(link.href)}
                      style={{ fontSize: '0.875rem', color: C.textDim, cursor: 'pointer', transition: 'color 0.15s' }}
                      onMouseEnter={(e) => (e.target.style.color = C.gold)}
                      onMouseLeave={(e) => (e.target.style.color = C.textDim)}
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, marginBottom: '1.25rem' }}>
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center font-bold transition-all duration-150"
                  style={{ background: '#111E2E', color: C.textMuted, border: `1px solid ${C.border}`, fontSize: '0.7rem', letterSpacing: '0.04em' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#1C2D42'; e.currentTarget.style.color = C.gold }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#111E2E'; e.currentTarget.style.color = C.textMuted }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:matt@leadershipintraining.com"
              style={{ fontSize: '0.875rem', color: C.textDim, transition: 'color 0.15s' }}
              onMouseEnter={(e) => (e.target.style.color = C.gold)}
              onMouseLeave={(e) => (e.target.style.color = C.textDim)}
            >
              matt@leadershipintraining.com
            </a>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid ${C.border}`, fontSize: '0.75rem', color: C.textDim }}
        >
          <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Matt Njoku. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <a key={label} href="#" style={{ color: C.textDim, transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.target.style.color = C.gold)}
                onMouseLeave={(e) => (e.target.style.color = C.textDim)}
              >{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
