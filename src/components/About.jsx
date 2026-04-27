import { useScrollReveal, useCountUp } from '../hooks/useAnimations'

const STATS = [
  { value: 100, suffix: '%', label: 'Commitment to Every Role' },
  { value: 3,   suffix: '+', label: 'Industries Experienced'   },
  { value: 5,   suffix: '+', label: 'Key Skills Developed'     },
  { value: 1,   suffix: '',  label: 'Goal: Your Next Great Hire'},
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
              Driven by purpose &<br />
              <em style={{ fontStyle: 'italic', color: 'var(--emerald-500)' }}>a hunger to grow</em>
            </h2>
            <p className="about-body">
              Enthusiastic and dependable individual who brings energy, reliability and a
              positive attitude to every environment. With a strong work ethic and a willingness
              to learn, Shane adapts quickly and delivers results.
            </p>
            <p className="about-body" style={{ marginTop: '18px' }}>
              Currently exploring new career opportunities and committed to finding a role
              where hard work, accountability and genuine effort are valued. Available
              immediately and eager to contribute.
            </p>
            <div className="about-tags">
              {['Hard Working', 'Reliable', 'Fast Learner', 'Team Player', 'Problem Solver', 'Adaptable'].map(t => (
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
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 64px; align-items: start;
        }
        .about-body { font-size: 15px; line-height: 1.8; color: var(--mid); }
        .about-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .about-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        .about-stat {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px; padding: 24px 18px;
          display: flex; flex-direction: column; gap: 6px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .about-stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(16,185,129,0.14);
        }
        .about-stat__value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem; font-weight: 400;
          color: var(--emerald-500); line-height: 1;
        }
        .about-stat__label {
          font-size: 11px; color: var(--light-txt);
          letter-spacing: 0.04em; line-height: 1.4;
        }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
