import { useScrollReveal } from '../hooks/useAnimations'

const degrees = [
  {
    degree: 'Bachelor of Exercise Science',
    school: 'Union Commonwealth University',
    location: 'Kentucky, USA',
    period: '2024 – 2025',
    tags: ['Exercise Science', 'Cum Laude', '3.72 GPA', "Dean's List × 2", 'First Team Soccer', 'Silver Sneaker Internship'],
    note: 'Scouted by Gulf United FC in South Africa — relocated to the USA to study and play Division I soccer. Completed degree Cum Laude with a 3.72 GPA.',
  },
  {
    degree: 'Bachelor of Science: Health Sciences (Incomplete)',
    school: 'University of Johannesburg',
    location: 'Johannesburg, South Africa',
    period: '2022 – 2023',
    tags: ['Health Sciences', 'Exercise & Sport Science', 'Transferred to USA'],
    note: 'Began studies at UJ before being scouted by Gulf United FC and transferring to Union Commonwealth University in the USA to continue studies and play Division I soccer.',
  },
  {
    degree: 'High School Diploma (Matric)',
    school: 'Boksburg High School',
    location: 'Boksburg, South Africa',
    period: '2017 – 2021',
    tags: ['3 Matric Distinctions', 'Soccer Captain', 'Cricket Captain', 'School Prefect', 'Eastern Gauteng Soccer'],
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
          ))}
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
        .edu-list { display: flex; flex-direction: column; gap: 20px; }
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
        .edu-school { font-size: 13px; color: var(--mid); margin-bottom: 2px; }
        .edu-note { font-size: 13px; color: var(--mid); line-height: 1.65; margin-bottom: 14px; border-left: 3px solid var(--emerald-300); padding-left: 12px; }
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
