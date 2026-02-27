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
              <div className="edu-card-icon">
                <i className={`ph ${edu.icon}`} />
              </div>
              <h3 className="edu-card-school">{edu.school}</h3>
              <span className="edu-card-location">{edu.location}</span>
              <p className="edu-card-degree">{edu.degree}</p>
              <span className="edu-card-date">{edu.date}</span>
              <ul className="edu-card-details">
                {edu.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="cert-heading">Certifications</h3>
        <div className="edu-row">
          {CERTS.map((c) => (
            <div key={c.title} className="edu-card-modern glass-card cert-card">
              <div className="edu-card-icon">
                <i className={`ph-fill ${c.icon}`} />
              </div>
              <h3 className="edu-card-school">{c.title}</h3>
              <span className="edu-card-location">{c.org}</span>
              <span className="edu-card-date">{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
