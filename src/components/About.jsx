import { useScrollReveal, useCountUp } from '../hooks/useAnimations'

const STATS = [
  { value: 3,   suffix: '.72', label: 'GPA · Cum Laude' },
  { value: 2,   suffix: '',   label: 'Degrees Earned'   },
  { value: 2,   suffix: '×',  label: "Dean's List"      },
  { value: 8,   suffix: '+',  label: 'Roles'            },
]

function StatCard({ value, suffix, label, active }) {
  const count = useCountUp(value, 1400, active)
  return (
    <div className="about-stat">
      <span className="about-stat__value">{count}{suffix}</span>
      <span className="about-stat__label">{label}</span>
    </div>
  )
}

export default function About() {
  const [sectionRef, visible] = useScrollReveal({ threshold: 0.15 })

  return (
    <section id="about" ref={sectionRef} className={`section section--alt reveal${visible ? ' revealed' : ''}`}>
      <div className="container">
        <div className="about-grid">
          <div className="about-main stagger-1">
            <span className="label">About</span>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>
              Driven.<br/>
              <span style={{ color: 'var(--accent)' }}>Proven.</span>
            </h2>
            <p className="about-body">
              I'm a Cum Laude Exercise Science graduate (3.72 GPA). I was scouted in South Africa
              by Gulf United FC — I relocated to Barbourville, Kentucky, earned First Team soccer honours
              at Union Commonwealth University and made the Dean's List twice, all while working and studying.
            </p>
            <div className="about-highlight">
              <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: 'var(--accent)', marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Graduate Assistant</p>
              <p className="about-body" style={{ marginTop: 0, fontSize: '14px', lineHeight: '1.7', color: 'var(--mid)' }}>
                A Graduate Assistant (GA) is a graduate student who is employed by their university in a dual role: pursuing an advanced degree while simultaneously working part-time for a specific academic department or administrative office.
              </p>
            </div>
            <p className="about-body" style={{ marginTop: '18px' }}>
              I'm currently based in Barbourville, KY and available immediately.
              I bring competitive discipline, leadership and genuine hustle to every environment I'm part of.
            </p>
            <div className="about-tags">
              {['Competitive', 'Fast Learner', 'Reliable', 'Team Player', 'Good Leader', 'Adaptable'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-stats stagger-2">
            {STATS.map(s => <StatCard key={s.label} {...s} active={visible} />)}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid; grid-template-columns: 1fr 280px;
          gap: 80px; align-items: start;
        }
        .about-body { font-size: 15px; line-height: 1.85; color: var(--mid); }
        .about-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
        .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .about-stat {
          background: var(--card);
          border: 1px solid var(--border-dim);
          padding: 24px 18px;
          display: flex; flex-direction: column; gap: 6px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .about-stat:hover {
          border-color: var(--accent);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .about-stat__value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.6rem; color: var(--accent); line-height: 1;
          letter-spacing: 0.04em;
        }
        .about-stat__label {
          font-family: 'Space Mono', monospace;
          font-size: 9px; color: var(--dim);
          letter-spacing: 0.15em; text-transform: uppercase; line-height: 1.4;
        }
        .about-highlight {
          background: rgba(0, 255, 135, 0.05);
          border-left: 3px solid var(--accent);
          padding: 20px;
          margin: 20px 0;
          border-radius: 4px;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
