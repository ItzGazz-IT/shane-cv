import { useScrollReveal } from '../hooks/useAnimations'

const degrees = [
  {
    degree: 'Bachelor of Exercise Science',
    school: 'Union Commonwealth University',
    location: 'Kentucky, USA',
    period: '2024 – 2025',
    tags: ['Exercise Science', 'Cum Laude', '3.72 GPA', "Dean's List × 2", 'First Team Soccer', 'Silver Sneaker Internship'],
    note: 'I was scouted by Gulf United FC in South Africa — I relocated to the USA to study and play NAIA soccer. I completed my degree Cum Laude with a 3.72 GPA.',
  },
  {
    degree: 'BSc: Health Sciences (Incomplete – Transferred)',
    school: 'University of Johannesburg',
    location: 'Johannesburg, South Africa',
    period: '2022 – 2023',
    tags: ['Health Sciences', 'Exercise & Sport Science', 'Transferred to USA'],
    note: 'I began my studies at UJ before being scouted by Gulf United FC and transferring to Union Commonwealth University.',
  },
  {
    degree: 'High School Diploma (Matric)',
    school: 'Boksburg High School',
    location: 'Boksburg, South Africa',
    period: '2017 – 2021',
    tags: ['3 Distinctions', 'Soccer Captain', 'Cricket Captain', 'School Prefect', 'Eastern Gauteng Soccer'],
    note: '',
  },
]

export default function Education() {
  const [sectionRef, visible] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="education" ref={sectionRef} className="section">
      <div className="container">
        <span className="label">Academic</span>
        <h2 className="section-title">Education</h2>

        <div className="edu-list">
          {degrees.map((d, i) => (
            <div
              key={d.degree}
              className={`edu-card${visible ? ' edu-in' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              <div className="edu-num">0{i + 1}</div>
              <div className="edu-body">
                <div className="edu-header">
                  <div>
                    <div className="edu-degree">{d.degree}</div>
                    <div className="edu-school">{d.school} · {d.location}</div>
                  </div>
                  <div className="edu-year">{d.period}</div>
                </div>
                {d.note ? <p className="edu-note">{d.note}</p> : null}
                <div className="edu-tags">
                  {d.tags.map((t, j) => (
                    <span
                      key={t}
                      className={`tag edu-tag${visible ? ' edu-tag--in' : ''}`}
                      style={{ transitionDelay: `${0.3 + i * 0.15 + j * 0.06}s` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-list { display: flex; flex-direction: column; gap: 2px; }
        .edu-card {
          display: grid; grid-template-columns: 64px 1fr;
          gap: 24px; align-items: start;
          background: var(--card); border: 1px solid var(--border-dim);
          padding: 28px 32px;
          opacity: 0; transform: translateX(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.3s;
        }
        .edu-card.edu-in { opacity: 1; transform: none; }
        .edu-card:hover { border-color: var(--accent); }
        .edu-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem; color: var(--border-dim); line-height: 1;
          letter-spacing: 0.04em; padding-top: 2px;
          transition: color 0.3s;
        }
        .edu-card:hover .edu-num { color: var(--accent); }
        .edu-header {
          display: flex; justify-content: space-between;
          align-items: flex-start; gap: 16px; margin-bottom: 12px;
        }
        .edu-degree {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem; color: var(--white);
          letter-spacing: 0.04em; margin-bottom: 4px;
        }
        .edu-school { font-size: 12px; color: var(--accent); }
        .edu-note {
          font-size: 13px; color: var(--mid); line-height: 1.65;
          margin-bottom: 14px;
          border-left: 2px solid var(--accent);
          padding-left: 12px;
        }
        .edu-year {
          font-family: 'Space Mono', monospace;
          font-size: 10px; color: var(--dim); letter-spacing: 0.1em; white-space: nowrap;
        }
        .edu-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .edu-tag { opacity: 0; transform: scale(0.85); transition: opacity 0.35s ease, transform 0.35s ease; }
        .edu-tag--in { opacity: 1; transform: none; }
        @media (max-width: 600px) { .edu-card { grid-template-columns: 1fr; } .edu-num { display: none; } }
      `}</style>
    </section>
  )
}
