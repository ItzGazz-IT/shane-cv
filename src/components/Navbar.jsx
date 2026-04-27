import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills'     },
  { href: '#education',  label: 'Education'  },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={close}>
          <span className="navbar__logo-mark">SV</span>
          <span className="navbar__logo-text">Shane Van Den Aardweg</span>
        </a>

        <nav className="navbar__links" aria-label="Site navigation">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="navbar__link">{l.label}</a>
          ))}
          <a href="/shane-cv/cv-print.html?print=1" target="_blank" rel="noopener noreferrer" className="btn btn--dark navbar__cta">
            Download CV
          </a>
        </nav>

        <button className={`navbar__burger${open ? ' open' : ''}`} aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={close}>{l.label}</a>
        ))}
        <a href="/shane-cv/cv-print.html?print=1" target="_blank" rel="noopener noreferrer" className="btn btn--dark" onClick={close} style={{ marginTop: '8px' }}>
          Download CV
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 120;
          border-bottom: 1px solid transparent;
          transition: background 0.3s, border-color 0.3s;
        }
        .navbar--scrolled {
          background: rgba(8,11,15,0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom-color: rgba(0,255,135,0.1);
        }
        .navbar__inner {
          width: min(1140px, calc(100% - 48px)); margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 64px;
        }
        .navbar__logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .navbar__logo-mark {
          width: 36px; height: 36px;
          background: var(--accent); color: var(--bg);
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px; letter-spacing: 0.08em;
          display: flex; align-items: center; justify-content: center;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
        }
        .navbar__logo-text {
          font-family: 'Space Mono', monospace;
          font-size: 11px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--txt);
        }
        .navbar__links { display: flex; align-items: center; gap: 2px; }
        .navbar__link {
          font-family: 'Space Mono', monospace;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--mid); text-decoration: none; padding: 8px 14px;
          transition: color 0.2s;
        }
        .navbar__link:hover { color: var(--accent); }
        .navbar__cta { font-size: 11px; padding: 10px 20px; margin-left: 8px; }
        .navbar__burger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .navbar__burger span {
          display: block; width: 24px; height: 2px;
          background: var(--accent); transition: transform 0.3s, opacity 0.3s;
        }
        .navbar__burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .navbar__burger.open span:nth-child(2) { opacity: 0; }
        .navbar__burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .navbar__mobile {
          display: none; flex-direction: column; gap: 4px;
          background: rgba(8,11,15,0.97); border-top: 1px solid rgba(0,255,135,0.1);
          padding: 16px 24px; max-height: 0; overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s;
        }
        .navbar__mobile--open { max-height: 400px; }
        .navbar__mobile-link {
          font-family: 'Space Mono', monospace;
          font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--txt); text-decoration: none; padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s;
        }
        .navbar__mobile-link:hover { color: var(--accent); }
        @media (max-width: 768px) {
          .navbar__links { display: none; }
          .navbar__burger { display: flex; }
          .navbar__mobile { display: flex; }
          .navbar__logo-text { display: none; }
        }
      `}</style>
    </header>
  )
}
