import { useEffect, useRef, useState } from 'react'

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
      <div className="navbar__shell">
        <div className="navbar__inner">
          <a href="#hero" className="navbar__logo" onClick={close}>
            <span className="navbar__logo-mark">SV</span>
            <span className="navbar__logo-text">Shane Van Den Aardweg</span>
          </a>

          <nav className="navbar__links" aria-label="Site navigation">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="navbar__link">{l.label}</a>
            ))}
            <a
              href="/shane-cv/cv-print.html?print=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--dark navbar__cta"
            >
              Download CV
            </a>
          </nav>

          <button
            className={`navbar__burger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="navbar__mobile-link" onClick={close}>{l.label}</a>
        ))}
        <a
          href="/shane-cv/cv-print.html?print=1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--dark"
          onClick={close}
          style={{ marginTop: '8px' }}
        >
          Download CV
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed; top: 14px; left: 0; right: 0;
          z-index: 120; transition: transform 0.3s ease;
        }
        .navbar__shell {
          width: min(1120px, calc(100% - 24px));
          margin: 0 auto;
          border-radius: 999px;
          padding: 8px;
          background:
            radial-gradient(circle at 10% 50%, rgba(16,185,129,0.18), transparent 42%),
            rgba(255,255,255,0.72);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(16,185,129,0.22);
          box-shadow: 0 4px 24px rgba(17,24,39,0.08);
          transition: box-shadow 0.3s, background 0.3s;
        }
        .navbar--scrolled .navbar__shell {
          box-shadow: 0 8px 32px rgba(17,24,39,0.12);
        }
        .navbar__inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 16px 0 20px; height: 48px;
        }
        .navbar__logo {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none;
        }
        .navbar__logo-mark {
          width: 32px; height: 32px; border-radius: 50%;
          background: var(--charcoal); color: #fff;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          display: flex; align-items: center; justify-content: center;
        }
        .navbar__logo-text {
          font-size: 14px; font-weight: 500; color: var(--charcoal);
        }
        .navbar__links {
          display: flex; align-items: center; gap: 4px;
        }
        .navbar__link {
          font-size: 13.5px; font-weight: 400; color: var(--mid);
          text-decoration: none; padding: 6px 14px; border-radius: 50px;
          transition: color 0.2s, background 0.2s;
        }
        .navbar__link:hover { color: var(--charcoal); background: var(--emerald-50); }
        .navbar__cta { font-size: 13px; padding: 10px 20px; margin-left: 8px; }

        .navbar__burger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .navbar__burger span {
          display: block; width: 22px; height: 2px;
          background: var(--charcoal); border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .navbar__burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .navbar__burger.open span:nth-child(2) { opacity: 0; }
        .navbar__burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .navbar__mobile {
          display: none; flex-direction: column; gap: 4px;
          width: min(1120px, calc(100% - 24px)); margin: 8px auto 0;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(14px);
          border-radius: 20px;
          border: 1px solid rgba(16,185,129,0.18);
          padding: 16px;
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s ease;
        }
        .navbar__mobile--open { max-height: 400px; }
        .navbar__mobile-link {
          font-size: 15px; color: var(--charcoal); text-decoration: none;
          padding: 10px 16px; border-radius: 12px;
          transition: background 0.2s;
        }
        .navbar__mobile-link:hover { background: var(--emerald-50); }

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
