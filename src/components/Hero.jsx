import { useEffect, useState } from 'react'

const roles = [
  'Exercise Science Graduate',
  'Football Coach & Mentor',
  'Cum Laude · 3.72 GPA',
  'Open to New Opportunities',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = roles[roleIdx]
    let timeout
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((roleIdx + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section id="hero" className="hero">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="label" style={{ margin: 0 }}>Available for work · Barbourville, KY</span>
          </div>

          <h1 className="hero-name">
            <span className="hero-name-first">Shane</span>
            <span className="hero-name-last">Van Den<br/>Aardweg</span>
          </h1>

          <div className="hero-typewriter-row">
            <span className="hero-typewriter-prefix">_</span>
            <span className="hero-typewriter">{displayed}<span className="hero-cursor">█</span></span>
          </div>

          <p className="hero-tagline">
            Cum Laude graduate. First Team soccer athlete. Based in Barbourville, KY — available immediately.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn--dark">Get in touch</a>
            <a href="/shane-cv/cv-print.html?print=1" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              Download CV
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-val">3.72</span>
              <span className="hero-stat-lbl">GPA</span>
            </div>
            <div className="hero-stat-div" />
            <div className="hero-stat">
              <span className="hero-stat-val">2×</span>
              <span className="hero-stat-lbl">Dean's List</span>
            </div>
            <div className="hero-stat-div" />
            <div className="hero-stat">
              <span className="hero-stat-val">8+</span>
              <span className="hero-stat-lbl">Roles</span>
            </div>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-corner hero-photo-corner--tl" />
          <div className="hero-photo-corner hero-photo-corner--br" />
          <div className="hero-photo-frame">
            <img
              src="/shane-cv/profile.jpg"
              alt="Shane Van Den Aardweg"
              className="hero-photo"
              onLoad={e  => { e.target.nextSibling.style.display = 'none' }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <div className="hero-photo-fallback">SV</div>
          </div>
          <div className="hero-badge">
            <span className="hero-badge-val">CUM LAUDE</span>
            <span className="hero-badge-sub">Exercise Science</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex; align-items: center;
          position: relative; overflow: hidden;
          padding: 100px 0 80px;
          background: var(--bg);
        }
        .hero-grid-overlay {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(0,255,135,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-glow {
          position: absolute; width: 700px; height: 700px;
          border-radius: 50%; z-index: 0; pointer-events: none;
          background: radial-gradient(circle, rgba(0,255,135,0.08) 0%, transparent 65%);
          top: -200px; right: -100px;
        }
        .hero-inner {
          display: grid; grid-template-columns: 1fr 460px;
          gap: 80px; align-items: center;
          position: relative; z-index: 1;
        }
        .hero-text { display: flex; flex-direction: column; gap: 24px; }
        .hero-eyebrow { display: flex; align-items: center; gap: 14px; }
        .hero-eyebrow-line { width: 32px; height: 1px; background: var(--accent); }
        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          line-height: 0.9; letter-spacing: 0.02em;
        }
        .hero-name-first {
          display: block;
          font-size: clamp(4rem, 9vw, 8rem);
          color: var(--white);
        }
        .hero-name-last {
          display: block;
          font-size: clamp(2.5rem, 5.5vw, 5rem);
          color: var(--accent);
        }
        .hero-typewriter-row {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 14px; color: var(--mid);
        }
        .hero-typewriter-prefix { color: var(--accent); }
        .hero-typewriter { min-height: 1.4em; }
        .hero-cursor {
          display: inline-block; font-size: 12px;
          color: var(--accent);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0 } }
        .hero-tagline {
          font-size: 15px; line-height: 1.8; color: var(--mid);
          max-width: 460px;
        }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-stats {
          display: flex; align-items: center; gap: 24px;
          padding: 20px 0; border-top: 1px solid var(--border-dim);
        }
        .hero-stat { display: flex; flex-direction: column; gap: 2px; }
        .hero-stat-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem; color: var(--white); line-height: 1;
          letter-spacing: 0.04em;
        }
        .hero-stat-lbl {
          font-family: 'Space Mono', monospace;
          font-size: 9px; color: var(--dim); letter-spacing: 0.15em; text-transform: uppercase;
        }
        .hero-stat-div { width: 1px; height: 32px; background: var(--border-dim); }

        /* Photo */
        .hero-photo-wrap {
          position: relative; width: 100%; max-width: 460px;
          animation: fadeLeft 0.9s ease both;
        }
        @keyframes fadeLeft { from{opacity:0;transform:translateX(30px)} to{opacity:1;transform:none} }
        .hero-photo-frame {
          width: 100%; aspect-ratio: 3/4;
          overflow: hidden; position: relative;
          background: var(--bg3);
        }
        .hero-photo {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 15%;
          display: block; filter: grayscale(20%);
          transition: filter 0.4s;
        }
        .hero-photo:hover { filter: grayscale(0%); }
        .hero-photo-fallback {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 6rem; color: var(--accent);
        }
        .hero-photo-corner {
          position: absolute; width: 24px; height: 24px; z-index: 2;
        }
        .hero-photo-corner--tl {
          top: -6px; left: -6px;
          border-top: 2px solid var(--accent);
          border-left: 2px solid var(--accent);
        }
        .hero-photo-corner--br {
          bottom: -6px; right: -6px;
          border-bottom: 2px solid var(--accent);
          border-right: 2px solid var(--accent);
        }
        .hero-badge {
          position: absolute; bottom: 28px; left: -24px;
          background: var(--bg); border: 1px solid var(--accent);
          padding: 14px 20px;
          display: flex; flex-direction: column; gap: 2px;
          box-shadow: 0 0 30px rgba(0,255,135,0.15);
        }
        .hero-badge-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem; color: var(--accent); letter-spacing: 0.12em;
        }
        .hero-badge-sub {
          font-family: 'Space Mono', monospace;
          font-size: 9px; color: var(--mid); letter-spacing: 0.1em; text-transform: uppercase;
        }
        .hero-scroll {
          position: absolute; bottom: 28px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .hero-scroll-line {
          width: 1px; height: 40px; background: var(--accent);
          animation: scrollPulse 1.8s ease-in-out infinite;
        }
        .hero-scroll span {
          font-family: 'Space Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--dim);
        }
        @keyframes scrollPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .hero-photo-wrap { max-width: 320px; }
          .hero-badge { left: -8px; }
        }
      `}</style>
    </section>
  )
}


