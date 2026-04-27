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
      <div className="hero-blob hero-blob--1" aria-hidden="true" />
      <div className="hero-blob hero-blob--2" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-text">
          <span className="label">Available for work</span>
          <h1 className="hero-name">
            <span className="hero-name-line1">Shane</span><br />
            <em className="hero-name-line2">Van Den Aardweg</em>
          </h1>

          <p className="hero-typewriter">
            <span>{displayed}</span>
            <span className="hero-cursor">|</span>
          </p>

          <p className="hero-tagline">
            Motivated and dependable professional eager to contribute,
            grow and make a real difference — based in Johannesburg, South Africa.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn--dark mag-btn">Contact me</a>
            <a
              href="/shane-cv/cv-print.html?print=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline mag-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
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
          <div className="hero-photo-ring" aria-hidden="true" />
          <div className="hero-float-tag">
            <span>JHB</span>
            <small>Johannesburg</small>
          </div>
          <div className="hero-pill hero-pill--1">Motivated</div>
          <div className="hero-pill hero-pill--2">Available</div>
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
          padding: 120px 0 80px;
        }
        .hero-blob {
          position: absolute; border-radius: 50%;
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .hero-blob--1 {
          width: 600px; height: 600px;
          background: rgba(16,185,129,0.1);
          bottom: -100px; left: -120px;
        }
        .hero-blob--2 {
          width: 400px; height: 400px;
          background: rgba(16,185,129,0.07);
          top: 10%; right: 5%;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 60px; align-items: center;
          position: relative; z-index: 1;
        }
        .hero-text { display: flex; flex-direction: column; gap: 20px; }
        .hero-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 7vw, 5.2rem);
          font-weight: 300; line-height: 0.95;
          color: var(--charcoal);
        }
        .hero-name-line2 {
          font-style: italic; color: var(--emerald-500);
        }
        .hero-typewriter {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--mid); font-weight: 400; min-height: 1.6em;
        }
        .hero-cursor {
          display: inline-block;
          animation: blink 1s step-end infinite;
          color: var(--emerald-500); font-weight: 300;
        }
        @keyframes blink { 50% { opacity: 0 } }
        .hero-tagline {
          font-size: 15px; line-height: 1.75; color: var(--mid);
          max-width: 480px;
        }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

        /* Photo */
        .hero-photo-wrap {
          position: relative; width: 100%;
          max-width: 380px; margin-left: auto;
          animation: fadeLeft 0.9s ease both;
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: none; }
        }
        .hero-photo-frame {
          width: 100%; aspect-ratio: 4/5;
          border-radius: 28px; overflow: hidden;
          background: var(--emerald-100);
          position: relative;
        }
        .hero-photo {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 20%;
          display: block;
        }
        .hero-photo-fallback {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem; color: var(--emerald-500); font-weight: 300;
        }
        .hero-photo-ring {
          position: absolute; inset: -12px;
          border-radius: 36px;
          border: 1.5px solid rgba(16,185,129,0.25);
          pointer-events: none;
        }
        .hero-float-tag {
          position: absolute; bottom: 28px; left: -20px;
          background: var(--charcoal); color: #fff;
          border-radius: 16px; padding: 12px 18px;
          display: flex; flex-direction: column;
          box-shadow: 0 8px 24px rgba(17,24,39,0.18);
        }
        .hero-float-tag span { font-size: 1.1rem; font-weight: 600; line-height: 1; }
        .hero-float-tag small {
          font-size: 10px; opacity: 0.65;
          letter-spacing: 0.08em; text-transform: uppercase; margin-top: 2px;
        }
        .hero-pill {
          position: absolute;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 50px;
          font-size: 12px; font-weight: 500;
          color: var(--charcoal);
          padding: 6px 14px;
          box-shadow: 0 4px 12px rgba(17,24,39,0.1);
        }
        .hero-pill--1 { top: 16px; right: -10px; animation: float1 3.5s ease-in-out infinite; }
        .hero-pill--2 { top: 44%; right: -18px; animation: float2 4s ease-in-out infinite; }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }

        .hero-scroll {
          position: absolute; bottom: 28px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          opacity: 0.5;
        }
        .hero-scroll-line {
          width: 1px; height: 36px;
          background: var(--charcoal);
          animation: scrollPulse 1.8s ease-in-out infinite;
        }
        .hero-scroll span { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--mid); }
        @keyframes scrollPulse { 0%,100%{opacity:0.3;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.3)} }

        .mag-btn { transition: transform 0.25s, box-shadow 0.25s, opacity 0.2s; }
        .mag-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(17,24,39,0.14); }

        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .hero-photo-wrap { max-width: 300px; margin: 0 auto; }
          .hero-tagline { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  )
}
