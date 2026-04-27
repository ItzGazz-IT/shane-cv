import { useScrollReveal } from '../hooks/useAnimations'

const techSkills = [
  { name: 'Sport & Coaching',  level: 95 },
  { name: 'Leadership',        level: 90 },
  { name: 'Communication',     level: 88 },
  { name: 'Customer Service',  level: 85 },
  { name: 'Computer Skills',   level: 72 },
]

const coreSkills = [
  'Competitive Drive', 'Fast Learner', 'Team Worker',
  'Reliability', 'Adaptability', 'Attention to Detail',
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
        <span className="label">Capabilities</span>
        <h2 className="section-title">Skills &amp; Languages</h2>

        <div className="skills-grid">
          <div className={`sk-panel${visible ? ' sk-in' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className="sk-panel-head">KEY SKILLS</div>
            <div className="skill-bars">
              {techSkills.map((s, i) => (
                <div key={s.name} className="skill-bar-item">
                  <div className="skill-bar-label">
                    <span>{s.name}</span>
                    <span className="skill-bar-pct">{visible ? s.level : 0}%</span>
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

          <div className={`sk-panel${visible ? ' sk-in' : ''}`} style={{ transitionDelay: '0.22s' }}>
            <div className="sk-panel-head">CORE STRENGTHS</div>
            <div className="core-skills">
              {coreSkills.map((s, i) => (
                <div
                  key={s}
                  className={`core-skill-item${visible ? ' core-visible' : ''}`}
                  style={{ '--cs-delay': `${0.4 + i * 0.07}s` }}
                >
                  <span className="core-skill-icon">›</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`sk-panel${visible ? ' sk-in' : ''}`} style={{ transitionDelay: '0.34s' }}>
            <div className="sk-panel-head">LANGUAGES</div>
            <div className="lang-list">
              {languages.map(l => (
                <div key={l.lang} className="lang-item">
                  <span className="lang-name">{l.lang}</span>
                  <span className="tag">{l.prof}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          gap: 2px;
        }
        .sk-panel {
          background: var(--card); border: 1px solid var(--border-dim);
          padding: 32px; opacity: 0; transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s;
        }
        .sk-panel.sk-in { opacity: 1; transform: none; }
        .sk-panel:hover { border-color: var(--accent); }
        .sk-panel-head {
          font-family: 'Space Mono', monospace;
          font-size: 9px; letter-spacing: 0.25em; color: var(--accent);
          margin-bottom: 24px;
        }
        .skill-bars { display: flex; flex-direction: column; gap: 18px; }
        .skill-bar-label {
          display: flex; justify-content: space-between;
          font-size: 13px; color: var(--mid); margin-bottom: 8px;
        }
        .skill-bar-pct { color: var(--accent); font-family: 'Space Mono', monospace; font-size: 11px; }
        .skill-bar-track {
          height: 2px; background: var(--border-dim); overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%; width: 0;
          background: linear-gradient(90deg, var(--accent-dim), var(--accent));
          transition: width 0s;
        }
        .skill-bar-fill--go {
          width: var(--fill-w);
          transition: width 1.2s cubic-bezier(.4,0,.2,1) var(--bar-delay);
        }
        .core-skills { display: flex; flex-direction: column; gap: 10px; }
        .core-skill-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: var(--mid);
          opacity: 0; transform: translateX(-10px);
          transition: opacity 0.4s ease var(--cs-delay), transform 0.4s ease var(--cs-delay);
        }
        .core-skill-item.core-visible { opacity: 1; transform: none; }
        .core-skill-icon { color: var(--accent); font-size: 16px; line-height: 1; }
        .lang-list { display: flex; flex-direction: column; gap: 16px; }
        .lang-item { display: flex; justify-content: space-between; align-items: center; }
        .lang-name { font-size: 14px; color: var(--txt); }
        @media (max-width: 860px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
