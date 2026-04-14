import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'About', to: '/about', type: 'route' },
  { label: 'Program', to: '/program', type: 'route' },
  { label: 'Join My Team', to: '/join', type: 'route' },
  { label: 'Contact', href: '#contact', type: 'scroll' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthewnjoku/', icon: 'in' },
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-dark">
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '2rem 0 0' }}>
        <div className="flex items-center justify-center gap-3">
          <div style={{ height: '1px', width: '60px', background: 'rgba(255,255,255,0.07)' }} />
          <div style={{ width: '3px', height: '3px', background: '#C8956C', opacity: 0.5, borderRadius: '50%' }} />
          <div style={{ height: '1px', width: '60px', background: 'rgba(255,255,255,0.07)' }} />
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-8 md:px-16 pt-10 pb-10">
        <div className="grid md:grid-cols-3 gap-10 mb-14">

          <div>
            <Link to="/" className="flex items-center gap-2 mb-3" style={{ textDecoration: 'none' }}>
              <span style={{ display: 'inline-block', width: '3px', height: '16px', background: '#C8956C' }} />
              <span className="font-sans font-bold text-cream" style={{ fontSize: '0.82rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Leadership</span>
              <span className="font-sans text-muted-dark" style={{ fontWeight: 400, fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>In Training</span>
            </Link>
            <p className="font-serif italic" style={{ fontSize: '0.95rem', color: '#3D4A5E', lineHeight: 1.6 }}>
              Self Growth Never Stops.
            </p>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.type === 'route' ? (
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  ) : (
                    <button onClick={() => scrollTo(link.href)} className="footer-link">
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center font-bold transition-all duration-150"
                  style={{ background: '#111E2E', color: '#8A9AAA', border: '1px solid rgba(255,255,255,0.07)', fontSize: '0.7rem', letterSpacing: '0.04em' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#1C2D42'; e.currentTarget.style.color = '#C8956C' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#111E2E'; e.currentTarget.style.color = '#8A9AAA' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a href="mailto:matt@leadershipintraining.com" className="footer-link">
              matt@leadershipintraining.com
            </a>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', fontSize: '0.75rem', color: '#3D4A5E' }}
        >
          <p className="font-serif italic" style={{ fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Leadership In Training. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
