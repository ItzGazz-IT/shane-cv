import { useScrollReveal } from '../hooks/useAnimations'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [sectionRef] = useScrollReveal({ threshold: 0.1 })

  const copyEmail = () => {
    navigator.clipboard.writeText('shanevda6@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <section id="contact" ref={sectionRef} className="section section--alt">
      <div className="container">
        <span className="label">Get in Touch</span>
        <h2 className="section-title">Let's Connect</h2>

        <div className="ct-layout">
          <div className="ct-info">
            <p className="ct-body">
              Shane is available immediately and open to roles in
              Fayetteville, NC or Barbourville, KY. Reach out via any channel below.
            </p>

            <div className="ct-links">
              <a href="mailto:shanevda6@gmail.com" className="ct-link">
                <span className="ct-link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <div>
                  <div className="ct-link-label">Email</div>
                  <div className="ct-link-val">shanevda6@gmail.com</div>
                </div>
              </a>

              <a href="tel:+27799029015" className="ct-link">
                <span className="ct-link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 7.73 7.73l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/>
                  </svg>
                </span>
                <div>
                  <div className="ct-link-label">Call / SMS</div>
                  <div className="ct-link-val">+27 79 902 9015</div>
                </div>
              </a>

              <a href="https://wa.me/27799029015?text=Hi%20Shane%2C%20I%20saw%20your%20CV%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer" className="ct-link">
                <span className="ct-link-icon" style={{ color: '#25d366', borderColor: '#25d366' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </span>
                <div>
                  <div className="ct-link-label">WhatsApp</div>
                  <div className="ct-link-val">+27 79 902 9015</div>
                </div>
              </a>
            </div>
          </div>

          <div className="ct-actions">
            <div className="ct-copy-row">
              <span className="ct-copy-email">shanevda6@gmail.com</span>
              <button className={`ct-copy-btn${copied ? ' done' : ''}`} onClick={copyEmail}>
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            <a href="/shane-cv/cv-print.html?print=1" target="_blank" rel="noopener noreferrer" className="btn btn--dark ct-dl-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Full CV
            </a>

            <p className="ct-note">
              Barbourville, KY · Fayetteville NC or Barbourville KY · Available now
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .ct-layout {
          display: grid; grid-template-columns: 1fr 380px;
          gap: 80px; align-items: start;
        }
        .ct-body { font-size: 15px; color: var(--mid); line-height: 1.8; margin-bottom: 40px; }
        .ct-links { display: flex; flex-direction: column; gap: 2px; }
        .ct-link {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 20px; background: var(--card);
          border: 1px solid var(--border-dim);
          text-decoration: none; color: inherit;
          transition: border-color 0.25s;
        }
        .ct-link:hover { border-color: var(--accent); }
        .ct-link-icon {
          width: 36px; height: 36px; flex-shrink: 0;
          border: 1px solid var(--accent); color: var(--accent);
          display: flex; align-items: center; justify-content: center;
        }
        .ct-link-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--dim); margin-bottom: 4px;
        }
        .ct-link-val { font-size: 14px; color: var(--txt); }

        .ct-actions { display: flex; flex-direction: column; gap: 16px; padding-top: 4px; }
        .ct-copy-row {
          display: flex; align-items: center;
          background: var(--card); border: 1px solid var(--border-dim);
          padding: 14px 16px; gap: 12px;
        }
        .ct-copy-email { font-family: 'Space Mono', monospace; font-size: 12px; color: var(--mid); flex: 1; }
        .ct-copy-btn {
          font-family: 'Space Mono', monospace;
          font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
          background: transparent; border: 1px solid var(--accent);
          color: var(--accent); padding: 6px 14px; cursor: pointer;
          transition: background 0.2s;
        }
        .ct-copy-btn:hover, .ct-copy-btn.done { background: var(--accent-glow); }
        .ct-dl-btn { width: 100%; justify-content: center; }
        .ct-note {
          font-family: 'Space Mono', monospace;
          font-size: 9px; letter-spacing: 0.1em; color: var(--dim);
          text-transform: uppercase; line-height: 1.8; text-align: center;
        }
        @media (max-width: 860px) {
          .ct-layout { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
    </section>
  )
}


