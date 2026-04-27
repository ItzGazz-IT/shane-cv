import { useScrollReveal } from '../hooks/useAnimations'

const techSkills = [
  { name: 'Sport & Coaching',    level: 95 },
  { name: 'Leadership',          level: 90 },
  { name: 'Communication',       level: 88 },
  { name: 'Customer Service',    level: 85 },
  { name: 'Computer Skills',     level: 72 },
]

const coreSkills = [
  'Competitive Drive',
  'Fast Learner',
  'Team Worker',
  'Reliability',
  'Adaptability',
  'Attention to Detail',
]

const languages = [
  { lang: 'English',   prof: 'Fluent' },
  { lang: 'Afrikaans', prof: 'Conversational' },
]

export default function Skills() {
  const [sectionRef, visible] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="skills" ref={sectionRef} className="section section--alt">
      <div className="container">
        <div className={`skills-title-wrap${visible ? ' sk-revealed' : ''}`}>
          <span className="label">Capabilities</span>
          <h2 className="section-title">Skills &amp; Languages</h2>
        </div>

        <div className="skills-grid">
          <div className={`skills-card sk-card-1${visible ? ' sk-revealed' : ''}`}>
            <h3 className="skills-card-title">Key Skills</h3>
            <div className="skill-bars">
              {techSkills.map((s, i) => (
                <div key={s.name} className="skill-bar-item" style={{ '--bar-delay': `${0.2 + i * 0.1}s` }}>
                  <div className="skill-bar-label">
                    <span>{s.name}</span>
                    <span className="skill-bar-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className={`skill-bar-fill${visible ? ' skill-bar-fill--go' : ''}`}
                      style={{ '--fill-w': `${s.level}%`, '--bar-delay': `${0.3 + i * 0.12}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-right">
            <div className={`skills-card sk-card-2${visible ? ' sk-revealed' : ''}`}>
              <h3 className="skills-card-title">Core Strengths</h3>
              <div className="core-skills">
                {coreSkills.map((s, i) => (
                  <div
                    key={s}
                    className={`core-skill-item${visible ? ' core-visible' : ''}`}
                    style={{ '--cs-delay': `${0.4 + i * 0.08}s` }}
                  >
                    <div className="core-skill-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`skills-card sk-card-3${visible ? ' sk-revealed' : ''}`}>
              <h3 className="skills-card-title">Languages</h3>
              <div className="lang-list">
                {languages.map(l => (
                  <div key={l.lang} className="lang-item">
                    <span className="lang-name">{l.lang}</span>
                    <span className="tag" style={{ fontSize: '11px' }}>{l.prof}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-title-wrap {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .skills-title-wrap.sk-revealed { opacity:1; transform:none; }
        .sk-card-1, .sk-card-2, .sk-card-3 {
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .sk-card-1.sk-revealed { opacity:1; transform:none; transition-delay:0.15s; }
        .sk-card-2.sk-revealed { opacity:1; transform:none; transition-delay:0.25s; }
        .sk-card-3.sk-revealed { opacity:1; transform:none; transition-delay:0.38s; }
        .skills-grid {
          display: grid; grid-template-columns: 1fr 360px;
          gap: 20px; align-items: start;
        }
        .skills-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: 24px; padding: 32px;
          transition: box-shadow 0.3s ease;
        }
        .skills-card:hover { box-shadow: 0 10px 36px rgba(16,185,129,0.1); }
        .skills-card-title {
          font-size: 1.25rem; font-weight: 500; color: var(--charcoal); margin-bottom: 24px;
        }
        .skill-bars { display: flex; flex-direction: column; gap: 18px; }
        .skill-bar-label {
          display: flex; justify-content: space-between;
          font-size: 14px; color: var(--mid); margin-bottom: 8px;
        }
        .skill-bar-pct { color: var(--light-txt); }
        .skill-bar-track {
          height: 6px; background: var(--emerald-100);
          border-radius: 50px; overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%; width: 0;
          background: linear-gradient(90deg, var(--emerald-300), var(--emerald-500));
          border-radius: 50px; transition: width 0s;
        }
        .skill-bar-fill--go {
          width: var(--fill-w);
          transition: width 1s cubic-bezier(.4,0,.2,1) var(--bar-delay);
        }
        .skills-right { display: flex; flex-direction: column; gap: 20px; }
        .core-skills { display: flex; flex-direction: column; gap: 10px; }
        .core-skill-item {
          display: flex; align-items: center; gap: 12px;
          font-size: 14px; color: var(--mid);
          opacity: 0; transform: translateX(-12px);
          transition: opacity 0.4s ease var(--cs-delay), transform 0.4s ease var(--cs-delay);
        }
        .core-skill-item.core-visible { opacity:1; transform:none; }
        .core-skill-icon {
          width: 26px; height: 26px; border-radius: 50%;
          background: var(--emerald-100);
          display: flex; align-items: center; justify-content: center;
          color: var(--emerald-500); flex-shrink: 0;
        }
        .lang-list { display: flex; flex-direction: column; }
        .lang-item {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 0; border-bottom: 1px solid var(--border);
        }
        .lang-item:last-child { border-bottom: none; padding-bottom: 0; }
        .lang-name { font-size: 15px; color: var(--charcoal); }
        @media (max-width: 860px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
