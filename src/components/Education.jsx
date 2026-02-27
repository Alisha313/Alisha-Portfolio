const EDUCATION = [
  {
    icon: 'ph-graduation-cap',
    school: 'Kean University',
    location: 'Union, NJ',
    degree: 'B.S. Computer Science',
    date: 'Expected Dec 2026',
    details: ['Dean\u2019s List \u2022 GPA 3.8', 'Coursework: Algorithms, Databases, ML, Cloud Computing'],
  },
  {
    icon: 'ph-graduation-cap',
    school: 'Middlesex College',
    location: 'Edison, NJ',
    degree: 'A.S. Computer Science',
    date: 'May 2024',
    details: ['Transferred to Kean University', 'Coursework: Data Structures, OOP, Discrete Math'],
  },
]

const CERTS = [
  { icon: 'ph-certificate', title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', date: '2024' },
  { icon: 'ph-certificate', title: 'Java SE 11 Developer', org: 'Oracle', date: '2023' },
  { icon: 'ph-certificate', title: 'Spring Professional', org: 'VMware', date: '2023' },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="label-text">05 / Education</span>
        </div>
        <h2 className="section-heading">
          Education &amp; <span className="gradient-text">Certifications</span>
        </h2>

        <div className="edu-row">
          {EDUCATION.map((edu) => (
            <div key={edu.school} className="edu-card-modern glass-card">
              <div className="edu-icon-modern">
                <i className={`ph ${edu.icon}`} />
              </div>
              <h3>{edu.school}</h3>
              <p className="edu-place">{edu.location}</p>
              <p className="edu-place">{edu.degree}</p>
              <span className="edu-date-badge">{edu.date}</span>
              <ul className="edu-place" style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem' }}>
                {edu.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="edu-sub-heading">Certifications</h3>
        <div className="edu-row edu-row-4">
          {CERTS.map((c) => (
            <div key={c.title} className="edu-card-modern glass-card">
              <div className="edu-icon-modern">
                <i className={`ph-fill ${c.icon}`} />
              </div>
              <h3>{c.title}</h3>
              <p className="edu-place">{c.org}</p>
              <span className="edu-date-badge">{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
