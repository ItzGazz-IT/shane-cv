import { useScrollReveal } from '../hooks/useAnimations'

const jobs = [
  {
    title: 'Most Recent Role',
    company: 'Previous Employer',
    location: 'Johannesburg',
    period: 'Update Me',
    active: true,
    bullets: [
      'Please update this section with Shane\'s actual work experience',
      'Add the company name, job title, dates and key responsibilities',
      'Highlight achievements and skills used in this role',
    ],
  },
  {
    title: 'Earlier Role',
    company: 'Previous Employer',
    location: 'Johannesburg',
    period: 'Update Me',
    active: false,
    bullets: [
      'Add another role here with relevant experience',
      'Include duties, responsibilities and any accomplishments',
    ],
  },
]

export default function Experience() {
  const [sectionRef, visible] = useScrollReveal({ threshold: 0.08 })

  return (
    <section id="experience" ref={sectionRef} className="section">
      <div className="container">
        <span className="label">Career</span>
        <h2 className="section-title">Work Experience</h2>

        <div className="exp-list">
          {jobs.map((job, i) => (
            <div
              key={job.title + i}
              className={`exp-card${visible ? ' exp-card--in' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              <div className="exp-card-header">
                <div>
                  <div className="exp-card-title">{job.title}</div>
                  <div className="exp-card-company">
                    {job.company}
                    <span> · {job.location}</span>
                  </div>
                </div>
                <div className="exp-card-meta">
                  <span className="exp-card-period">{job.period}</span>
                  {job.active && <span className="exp-card-badge">Current</span>}
                </div>
              </div>
              <ul className="exp-card-bullets">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-list { display: flex; flex-direction: column; gap: 20px; }
        .exp-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px; padding: 32px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s;
        }
        .exp-card--in { opacity: 1; transform: none; }
        .exp-card:hover { box-shadow: 0 10px 36px rgba(16,185,129,0.1); }
        .exp-card-header {
          display: flex; justify-content: space-between;
          align-items: flex-start; gap: 16px; margin-bottom: 16px;
        }
        .exp-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem; font-weight: 500; color: var(--charcoal);
          margin-bottom: 4px;
        }
        .exp-card-company {
          font-size: 13px; color: var(--emerald-500); font-weight: 500;
        }
        .exp-card-company span { color: var(--light-txt); font-weight: 400; }
        .exp-card-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
        .exp-card-period {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--light-txt);
          white-space: nowrap;
        }
        .exp-card-badge {
          font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase;
          background: var(--emerald-100); color: var(--emerald-600);
          border: 1px solid var(--emerald-300);
          padding: 3px 10px; border-radius: 50px;
        }
        .exp-card-bullets {
          list-style: none; display: flex; flex-direction: column; gap: 8px;
        }
        .exp-card-bullets li {
          font-size: 14px; color: var(--mid); line-height: 1.6;
          padding-left: 16px; position: relative;
        }
        .exp-card-bullets li::before {
          content: '–'; position: absolute; left: 0;
          color: var(--emerald-400);
        }
      `}</style>
    </section>
  )
}
