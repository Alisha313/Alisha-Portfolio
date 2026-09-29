const EDUCATION = [
  {
    icon: 'ph-graduation-cap',
    school: 'Kean University',
    location: 'Union, NJ',
    degree: 'B.S. Computer Science',
    date: 'Kean University',
    details: ['Bachelor of Science in Computer Science'],
  },
]

const CERTS = [
  { icon: 'ph-certificate', title: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', date: 'Certified' },
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
          Education &amp; <span className="gradient-text">certification</span>
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
              <ul className="edu-place" style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem' }}>
                {edu.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          ))}
          {CERTS.map((c) => (
            <div key={c.title} className="edu-card-modern glass-card">
              <div className="edu-icon-modern">
                <i className={`ph-fill ${c.icon}`} />
              </div>
              <h3>{c.title}</h3>
              <p className="edu-place">{c.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
