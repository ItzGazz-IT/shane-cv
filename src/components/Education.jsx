import { useScrollReveal } from '../hooks/useAnimations'

export default function Education() {
  const [sectionRef, visible] = useScrollReveal({ threshold: 0.1 })

  const tags = ['Update', 'With', 'Shane\'s', 'Actual', 'Subjects']

  return (
    <section id="education" ref={sectionRef} className="section">
      <div className="container">
        <span className="label">Academic</span>
        <h2 className="section-title">Education</h2>

        <div className={`edu-card${visible ? ' edu-in' : ''}`}>
          <div className="edu-header">
            <div>
              <div className="edu-degree">Matric Certificate</div>
              <div className="edu-school">Please update school name here</div>
            </div>
            <div className="edu-year">Update Year</div>
          </div>
          <div className="edu-tags">
            {tags.map((t, i) => (
              <span
                key={t}
                className={`tag edu-tag${visible ? ' edu-tag--in' : ''}`}
                style={{ transitionDelay: `${0.3 + i * 0.07}s` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .edu-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px; padding: 32px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s, box-shadow 0.3s;
        }
        .edu-card.edu-in { opacity:1; transform:none; }
        .edu-card:hover { box-shadow: 0 10px 36px rgba(16,185,129,0.1); }
        .edu-header {
          display: flex; justify-content: space-between;
          align-items: flex-start; gap: 16px; margin-bottom: 20px;
        }
        .edu-degree {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 500; color: var(--charcoal); margin-bottom: 6px;
        }
        .edu-school { font-size: 13px; color: var(--mid); }
        .edu-year {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--light-txt); white-space: nowrap;
        }
        .edu-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .edu-tag {
          opacity: 0; transform: scale(0.85);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .edu-tag--in { opacity:1; transform:none; }
      `}</style>
    </section>
  )
}
