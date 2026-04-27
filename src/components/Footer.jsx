export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">SV</span>
          <span className="footer-name">Shane Van Den Aardweg</span>
        </div>
        <div className="footer-line" />
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} · Barbourville, KY</p>
          <p className="footer-built">Built by <a href="mailto:gareth@itzgazz.co.za">ItzGazz IT</a></p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg2);
          border-top: 1px solid var(--border-dim);
          padding: 40px 0;
        }
        .footer-inner { display: flex; flex-direction: column; gap: 24px; }
        .footer-brand { display: flex; align-items: center; gap: 14px; }
        .footer-mark {
          width: 36px; height: 36px;
          background: var(--accent); color: var(--bg);
          font-family: 'Bebas Neue', sans-serif; font-size: 16px; letter-spacing: 0.08em;
          display: flex; align-items: center; justify-content: center;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
        }
        .footer-name {
          font-family: 'Space Mono', monospace;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--mid);
        }
        .footer-line { height: 1px; background: var(--border-dim); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; }
        .footer-copy {
          font-family: 'Space Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--dim);
        }
        .footer-built {
          font-family: 'Space Mono', monospace;
          font-size: 10px; letter-spacing: 0.08em; color: var(--dim);
        }
        .footer-built a { color: var(--accent); text-decoration: none; }
        .footer-built a:hover { text-decoration: underline; }
      `}</style>
    </footer>
  )
}
