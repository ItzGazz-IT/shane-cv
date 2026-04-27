import { useScrollReveal } from '../hooks/useAnimations'
import { useState } from 'react'

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const [sectionRef] = useScrollReveal({
    threshold: 0.1,
  })

  const copyEmail = () => {
    navigator.clipboard.writeText('shanevda6@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const actions = [
    {
      label: 'Send an Email',
      sub: 'shanevda6@gmail.com',
      cta: 'Open email client →',
      href: 'mailto:shanevda6@gmail.com',
      accent: 'var(--emerald-500)',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
    {
      label: 'Call or SMS',
      sub: '+27 79 902 9015',
      cta: 'Tap to call →',
      href: 'tel:+27799029015',
      accent: 'var(--charcoal)',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 7.73 7.73l.87-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z"/>
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      sub: '+27 79 902 9015',
      cta: 'Message on WhatsApp →',
      href: 'https://wa.me/27799029015?text=Hi%20Shane%2C%20I%20saw%20your%20CV%20and%20would%20like%20to%20connect.',
      accent: '#25d366',
      icon: (
        <svg width="28" height="28" viewBox="0 0 32 32" fill="#25d366">
          <path d="M16.002 2.667C8.638 2.667 2.667 8.637 2.667 16c0 2.338.626 4.528 1.716 6.42L2.667 29.333l7.138-1.687A13.271 13.271 0 0 0 16.002 29.333C23.365 29.333 29.333 23.363 29.333 16S23.365 2.667 16.002 2.667zm0 24.267a10.927 10.927 0 0 1-5.578-1.53l-.4-.237-4.237 1.001 1.053-4.11-.26-.42A10.929 10.929 0 0 1 5.067 16c0-6.03 4.906-10.933 10.935-10.933S26.933 9.97 26.933 16s-4.902 10.933-10.931 10.933zm6.001-8.189c-.329-.164-1.944-.957-2.245-1.066-.301-.109-.521-.164-.74.164-.22.329-.851 1.066-.043 1.285.274.082 1.233.164 2.35.219.22.009.44.009.659 0l-.01-.001c.329.055.549-.11.604-.384.164-.74.164-2.44.164-2.44 0-.274-.219-.493-.493-.493-.274 0-.493.219-.493.493v1.755a.11.11 0 0 1-.11.11l-.055-.001z"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="section section--alt">
      <div className="container">
        <div className="ct-head">
          <span className="label">Get in Touch</span>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>
            Ready to connect?
          </h2>
          <p className="ct-sub">
            Shane is available immediately and open to all opportunities — reach out via any of the options below.
          </p>
        </div>

        <div className="ct-cards">
          {actions.map(a => (
            <a key={a.label} href={a.href} className="ct-card" target={a.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              <div className="ct-card-icon" style={{ color: a.accent }}>{a.icon}</div>
              <div className="ct-card-label">{a.label}</div>
              <div className="ct-card-sub">{a.sub}</div>
              <span className="ct-card-cta" style={{ color: a.accent }}>{a.cta}</span>
            </a>
          ))}
        </div>

        <div className="ct-copy">
          <span className="ct-copy-text">shanevda6@gmail.com</span>
          <button className={`ct-copy-btn${copied ? ' ct-copy-btn--done' : ''}`} onClick={copyEmail}>
            {copied
              ? (<><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!</>)
              : (<><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy email</>)
            }
          </button>
        </div>

        <div className="ct-download">
          <a href="/shane-cv/cv-print.html?print=1" target="_blank" rel="noopener noreferrer" className="ct-dl-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Full CV (PDF)
          </a>
          <p className="ct-dl-note">Johannesburg, South Africa · Available immediately</p>
        </div>
      </div>

      <style>{`
        .ct-head { margin-bottom: 48px; }
        .ct-sub { font-size: 15px; color: var(--mid); line-height: 1.7; max-width: 520px; }
        .ct-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px; margin-bottom: 32px;
        }
        .ct-card {
          background: var(--white);
          border: 1.5px solid var(--border);
          border-radius: 20px; padding: 28px 24px;
          text-decoration: none; color: inherit;
          display: flex; flex-direction: column; gap: 6px;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          position: relative; overflow: hidden;
        }
        .ct-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(16,185,129,0.12);
          border-color: var(--emerald-300);
        }
        .ct-card-icon { margin-bottom: 8px; }
        .ct-card-label { font-size: 16px; font-weight: 600; color: var(--charcoal); }
        .ct-card-sub { font-size: 13px; color: var(--mid); }
        .ct-card-cta { font-size: 12px; font-weight: 500; margin-top: 8px; }

        .ct-copy {
          display: flex; align-items: center; gap: 12px;
          background: var(--white); border: 1px solid var(--border);
          border-radius: 14px; padding: 16px 20px;
          margin-bottom: 24px;
        }
        .ct-copy-text { font-size: 14px; color: var(--mid); flex: 1; }
        .ct-copy-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 500; color: var(--charcoal);
          background: var(--emerald-50); border: 1px solid var(--emerald-100);
          border-radius: 8px; padding: 7px 14px; cursor: pointer;
          transition: background 0.2s;
        }
        .ct-copy-btn:hover { background: var(--emerald-100); }
        .ct-copy-btn--done { color: var(--emerald-600); background: var(--emerald-100); }

        .ct-download { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }
        .ct-dl-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--charcoal); color: #fff;
          font-size: 14px; font-weight: 500;
          padding: 14px 28px; border-radius: 50px;
          text-decoration: none; transition: opacity 0.2s, transform 0.2s;
        }
        .ct-dl-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .ct-dl-note { font-size: 12px; color: var(--light-txt); margin-left: 4px; }

        @media (max-width: 760px) {
          .ct-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
