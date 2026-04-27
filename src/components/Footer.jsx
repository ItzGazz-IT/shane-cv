export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">SV</span>
          <span className="footer-name">Shane Van Den Aardweg</span>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} · Johannesburg, South Africa</p>
        <p className="footer-built">Built with care · <a href="mailto:gareth@itzgazz.co.za">ItzGazz IT</a></p>
      </div>

      <style>{`
        .footer {
          background: var(--charcoal); color: #fff;
          padding: 40px 0;
        }
        .footer-inner {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          text-align: center;
        }
        .footer-brand {
          display: flex; align-items: center; gap: 10px;
        }
        .footer-mark {
          width: 34px; height: 34px; border-radius: 50%;
          background: var(--emerald-500); color: var(--charcoal);
          font-size: 11px; font-weight: 700; letter-spacing: 0.04em;
          display: flex; align-items: center; justify-content: center;
        }
        .footer-name {
          font-size: 15px; font-weight: 500; color: rgba(255,255,255,0.9);
        }
        .footer-copy { font-size: 12px; color: rgba(255,255,255,0.4); }
        .footer-built { font-size: 11px; color: rgba(255,255,255,0.3); }
        .footer-built a { color: var(--emerald-300); text-decoration: none; }
        .footer-built a:hover { text-decoration: underline; }
      `}</style>
    </footer>
  )
}
