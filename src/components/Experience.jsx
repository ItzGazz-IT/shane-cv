import { useScrollReveal } from '../hooks/useAnimations'

const jobs = [
  {
    title: 'Student Supervisor & Manager',
    company: 'Union Commonwealth University',
    location: 'Kentucky, USA',
    period: '2024 – 2025',
    active: true,
    bullets: [
      'Supervised and managed student staff within campus operations.',
      'Coordinated daily schedules, resolved issues and maintained team performance standards.',
      'Acted as a point of contact between students and management.',
    ],
  },
  {
    title: 'Internship — Silver Sneaker Program',
    company: 'Union Commonwealth University',
    location: 'Kentucky, USA',
    period: '2024 – 2025',
    active: false,
    bullets: [
      'Ran the Silver Sneaker community fitness programme as part of the degree internship.',
      'Designed and led group exercise sessions for senior participants.',
      'Applied exercise science principles in a real-world community health setting.',
    ],
  },
  {
    title: 'Cafeteria & Starbucks Worker',
    company: 'Union Commonwealth University',
    location: 'Kentucky, USA',
    period: '2024 – 2025',
    active: false,
    bullets: [
      'Worked across all cafeteria stations: serving, food prep and the kitchen.',
      'Transferred to the campus Starbucks — maintained excellent service with zero complaints.',
      'Built strong working relationships with colleagues and management.',
    ],
  },
  {
    title: 'Assistant Teacher',
    company: 'Primary School',
    location: 'South Africa',
    period: '2023 – 2024',
    active: false,
    bullets: [
      'Taught full classes independently when the lead teacher was unavailable.',
      'Assisted with all admin tasks, stock taking and setting assessments.',
      'Worked supportively with children across all age groups.',
    ],
  },
  {
    title: 'Football Coach',
    company: 'Own Football Academy',
    location: 'Johannesburg',
    period: '2023 – Present',
    active: false,
    bullets: [
      'Founded and run a personal football training academy with weekly Saturday sessions.',
      'Coach and mentor children aged 8–13, developing skill, discipline and confidence.',
    ],
  },
  {
    title: 'Volunteer',
    company: 'Wit Deep Primary School',
    location: 'Johannesburg',
    period: 'Jan – Nov 2022',
    active: false,
    bullets: [
      'Assisted with fundraising events — engaging the public, selling tickets and handling cash.',
    ],
  },
  {
    title: 'Office Assistant',
    company: 'Franki Africa',
    location: 'Johannesburg',
    period: 'Mar – Dec 2018',
    active: false,
    bullets: [
      'Completed a range of administrative tasks within a professional corporate office environment.',
    ],
  },
  {
    title: 'Referee',
    company: 'Boksburg Football Club',
    location: 'Johannesburg',
    period: 'Feb – Nov 2014',
    active: false,
    bullets: [
      'Explained and enforced regulations and rules to players, coaches and spectators.',
      'Promoted good sportsmanship and inspected equipment for safety compliance.',
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
