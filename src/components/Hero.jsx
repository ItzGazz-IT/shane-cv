import { useEffect, useState } from 'react'

const roles = [
  'Graduate Assistant (Appointed)',
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
        <div className="hero-content">
          <div className="hero-text hero-text--enhanced">
            <div className="hero-decorative-top" aria-hidden="true" />
            
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" />
              <span className="label" style={{ margin: 0 }}>Available for work · Barbourville, KY</span>
              <span className="hero-eyebrow-line" />
            </div>

            <div className="hero-badge-container">
              <div className="hero-badge">
                <span className="badge-icon">★</span>
                <span className="badge-text">Graduate Assistant · Union Commonwealth University</span>
              </div>
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
              Cum Laude Exercise Science graduate (3.72 GPA) with competitive discipline and proven leadership. Based in Barbourville, KY — available immediately.
            </p>

            <div className="hero-actions">
              <a href="#about" className="btn btn--dark">Explore my story</a>
              <a href="/shane-cv/cv-print.html?print=1" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Download CV
              </a>
            </div>

            <div className="hero-stats-wrapper">
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

            <div className="hero-decorative-bottom" aria-hidden="true" />
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
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 110px 20px 90px;
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
          position: absolute; width: 820px; height: 820px;
          border-radius: 50%; z-index: 0; pointer-events: none;
          background: radial-gradient(circle, rgba(0,255,135,0.11) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          animation: pulseGlow 6s ease-in-out infinite;
        }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.65; } 50% { opacity: 1; } }

        .hero-inner {
          position: relative; z-index: 1;
          width: 100%;
          display: flex; justify-content: center;
        }
        .hero-content {
          width: 100%;
          max-width: 700px;
        }
        .hero-text { 
          display: flex; flex-direction: column; gap: 26px;
          align-items: center; text-align: center;
          animation: heroRise 0.9s ease-out both;
        }
        .hero-text--enhanced { gap: 26px; }
        @keyframes heroRise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        .hero-decorative-top {
          width: 2px; height: 34px;
          background: linear-gradient(to bottom, transparent, var(--accent));
          margin-bottom: 8px;
          margin-left: auto; margin-right: auto;
        }
        .hero-decorative-bottom {
          width: 2px; height: 34px;
          background: linear-gradient(to top, transparent, var(--accent));
          margin-top: 8px;
          margin-left: auto; margin-right: auto;
        }

        .hero-eyebrow { 
          display: flex; align-items: center; gap: 14px;
          justify-content: center;
        }
        .hero-eyebrow-line { 
          width: 36px; height: 1px; background: var(--accent);
        }

        .hero-badge-container { margin: 0; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(0, 255, 135, 0.07);
          border: 1px solid rgba(0, 255, 135, 0.3);
          border-radius: 8px;
          padding: 12px 18px;
          width: fit-content;
          box-shadow: 0 0 16px rgba(0,255,135,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .hero-badge:hover {
          border-color: rgba(0, 255, 135, 0.6);
          box-shadow: 0 0 26px rgba(0,255,135,0.18);
          transform: translateY(-2px);
        }
        .badge-icon {
          font-size: 14px; color: var(--accent);
        }
        .badge-text {
          font-size: 12px; font-weight: 600; color: var(--accent);
          letter-spacing: 0.03em;
        }

        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          line-height: 0.93; letter-spacing: 0.03em;
          margin: 8px 0;
        }
        .hero-name-first {
          display: block;
          font-size: clamp(4.7rem, 11vw, 8.2rem);
          color: var(--white);
          letter-spacing: 0.02em;
        }
        .hero-name-last {
          display: block;
          font-size: clamp(3.2rem, 7.4vw, 5.8rem);
          color: var(--accent);
          letter-spacing: 0.06em;
        }
        .hero-typewriter-row {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 14px; color: var(--mid);
          justify-content: center;
          min-height: 1.6em;
        }
        .hero-typewriter-prefix { 
          color: var(--accent); font-weight: 700;
        }
        .hero-typewriter { min-height: 1.4em; }
        .hero-cursor {
          display: inline-block; font-size: 11px;
          color: var(--accent);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0 } }

        .hero-tagline {
          font-size: 15px; line-height: 1.8; color: var(--mid);
          max-width: 560px;
          margin: 4px auto 0;
        }
        .hero-actions { 
          display: flex; gap: 12px; flex-wrap: wrap;
          justify-content: center;
          margin-top: 10px;
        }
        .hero-stats-wrapper {
          width: 100%;
          display: flex; justify-content: center;
        }
        .hero-stats {
          display: flex; align-items: center; gap: 34px;
          padding: 22px 0;
          border-top: 1px solid var(--border-dim);
          border-bottom: 1px solid var(--border-dim);
          width: 100%;
          justify-content: center;
        }
        .hero-stat { 
          display: flex; flex-direction: column; gap: 4px;
          align-items: center;
          transition: transform 0.2s ease;
        }
        .hero-stat:hover { transform: translateY(-2px); }
        .hero-stat-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem; color: var(--accent); line-height: 1;
          letter-spacing: 0.06em;
        }
        .hero-stat-lbl {
          font-family: 'Space Mono', monospace;
          font-size: 9px; color: var(--dim); letter-spacing: 0.15em; text-transform: uppercase;
        }
        .hero-stat-div { width: 1px; height: 34px; background: var(--border-dim); opacity: 0.5; }

        .hero-scroll {
          position: absolute; bottom: 26px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .hero-scroll-line {
          width: 1px; height: 34px; background: var(--accent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .hero-scroll span {
          font-family: 'Space Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--dim);
        }
        @keyframes scrollPulse { 0%,100%{opacity:0.3} 50%{opacity:1} }

        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding: 108px 16px 84px;
          }
          .hero-content { max-width: 100%; }
          .hero-name-first { font-size: clamp(3.6rem, 17vw, 5.4rem); }
          .hero-name-last { font-size: clamp(2.3rem, 11vw, 3.8rem); }
          .hero-tagline { font-size: 14px; }
          .hero-stats {
            gap: 18px;
            padding: 18px 0;
          }
          .hero-stat-val { font-size: 1.7rem; }
          .hero-stat-div { height: 28px; }
          .hero-scroll { bottom: 18px; }
        }
      `}</style>
    </section>
  )
}

