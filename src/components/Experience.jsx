import { useScrollReveal } from '../hooks/useAnimations'

const jobs = [
  {
    title: 'Graduate Assistant (Appointed)',
    company: 'Union Commonwealth University',
    location: 'Kentucky, USA',
    period: '2026 – Present',
    active: true,
    bullets: [
      'I was awarded a Graduate Assistant position at Union Commonwealth University.',
      'I support university programmes through academic and operational responsibilities.',
    ],
  },
  {
    title: 'Student Supervisor & Manager',
    company: 'Union Commonwealth University',
    location: 'Kentucky, USA',
    period: '2024 – 2025',
    active: false,
    bullets: [
      'I supervised and managed student staff within campus operations.',
      'I coordinated daily schedules, resolved issues and maintained team performance.',
      'I was the point of contact between students and management.',
    ],
  },
  {
    title: 'Internship — Silver Sneaker Program',
    company: 'Union Commonwealth University',
    location: 'Kentucky, USA',
    period: '2024 – 2025',
    active: false,
    bullets: [
      'I ran the Silver Sneaker community fitness programme as part of my degree internship.',
      'I designed and led group exercise sessions for senior participants.',
    ],
  },
  {
    title: 'Cafeteria & Starbucks Worker',
    company: 'Union Commonwealth University',
    location: 'Kentucky, USA',
    period: '2024 – 2025',
    active: false,
    bullets: [
      'I worked across all cafeteria stations: serving, food prep and the kitchen.',
      'I transferred to the campus Starbucks — zero complaints throughout.',
    ],
  },
  {
    title: 'Assistant Teacher',
    company: 'Primary School',
    location: 'South Africa',
    period: '2023 – 2024',
    active: false,
    bullets: [
      'I taught full classes independently when the lead teacher was unavailable.',
      'I assisted with admin, stock taking and setting assessments.',
    ],
  },
  {
    title: 'Football Coach',
    company: 'Own Football Academy',
    location: 'Johannesburg',
    period: '2023 – Present',
    active: false,
    bullets: [
      'I founded and run a football training academy with weekly Saturday sessions.',
      'I coach and mentor children aged 8–13.',
    ],
  },
  {
    title: 'Volunteer',
    company: 'Wit Deep Primary School',
    location: 'Johannesburg',
    period: 'Jan – Nov 2022',
    active: false,
    bullets: ['I helped with fundraising events — public engagement, ticket sales and cash handling.'],
  },
  {
    title: 'Office Assistant',
    company: 'Franki Africa',
    location: 'Johannesburg',
    period: 'Mar – Dec 2018',
    active: false,
    bullets: ['I handled administrative tasks within a corporate office environment.'],
  },
  {
    title: 'Referee',
    company: 'Boksburg Football Club',
    location: 'Johannesburg',
    period: 'Feb – Nov 2014',
    active: false,
    bullets: ['I enforced regulations, promoted sportsmanship and inspected equipment.'],
  },
]

export default function Experience() {
  const [sectionRef, visible] = useScrollReveal({ threshold: 0.05 })

  return (
    <section id="experience" ref={sectionRef} className="section">
      <div className="container">
        <span className="label">Career</span>
        <h2 className="section-title">Work Experience</h2>

        <div className="exp-timeline">
          {jobs.map((job, i) => (
            <div
              key={job.title + i}
              className={`exp-item${visible ? ' exp-item--in' : ''}`}
              style={{ transitionDelay: `${0.05 + i * 0.08}s` }}
            >
              <div className="exp-line-col">
                <div className={`exp-node${job.active ? ' exp-node--active' : ''}`} />
                {i < jobs.length - 1 && <div className="exp-connector" />}
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <div className="exp-title">{job.title}</div>
                    <div className="exp-company">{job.company} <span>· {job.location}</span></div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{job.period}</span>
                    {job.active && <span className="exp-badge">CURRENT</span>}
                  </div>
                </div>
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-timeline { display: flex; flex-direction: column; }
        .exp-item {
          display: grid; grid-template-columns: 40px 1fr;
          gap: 0; opacity: 0; transform: translateX(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .exp-item--in { opacity: 1; transform: none; }
        .exp-line-col {
          display: flex; flex-direction: column; align-items: center;
          padding-top: 4px;
        }
        .exp-node {
          width: 10px; height: 10px; flex-shrink: 0;
          border: 2px solid var(--dim);
          background: var(--bg);
        }
        .exp-node--active {
          border-color: var(--accent);
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent);
        }
        .exp-connector {
          flex: 1; width: 1px; min-height: 20px;
          background: var(--border-dim); margin: 4px 0;
        }
        .exp-content {
          padding: 0 0 32px 24px;
          border-bottom: 1px solid var(--border-dim);
          margin-bottom: 0;
        }
        .exp-item:last-child .exp-content { border-bottom: none; }
        .exp-header {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 16px; margin-bottom: 10px;
        }
        .exp-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.25rem; color: var(--white); letter-spacing: 0.04em;
          margin-bottom: 3px;
        }
        .exp-company { font-size: 12px; color: var(--accent); font-weight: 500; }
        .exp-company span { color: var(--dim); font-weight: 400; }
        .exp-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; flex-shrink: 0; }
        .exp-period {
          font-family: 'Space Mono', monospace;
          font-size: 10px; color: var(--dim); letter-spacing: 0.1em; white-space: nowrap;
        }
        .exp-badge {
          font-family: 'Space Mono', monospace;
          font-size: 9px; letter-spacing: 0.15em;
          color: var(--accent); border: 1px solid var(--accent);
          padding: 2px 8px;
        }
        .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 5px; }
        .exp-bullets li {
          font-size: 13px; color: var(--mid); line-height: 1.65;
          padding-left: 14px; position: relative;
        }
        .exp-bullets li::before { content: '>'; position: absolute; left: 0; color: var(--accent); font-size: 10px; top: 2px; }
        @media (max-width: 600px) { .exp-header { flex-direction: column; gap: 6px; } }
      `}</style>
    </section>
  )
}
