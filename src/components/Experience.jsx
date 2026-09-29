const JOBS = [
  {
    icon: 'ph-first-aid',
    role: 'Senior Software Engineer',
    company: 'Johnson & Johnson — New Jersey',
    date: 'Oct 2024 – Present',
    bullets: [
      'Lead the design and delivery of Java 17 / Spring Boot microservices and secure REST APIs for healthcare applications, with Spring Security and role-based access control.',
      'Build React interfaces and integrate them with Spring Boot APIs, cutting time spent on data review tasks by 20%.',
      'Optimize PostgreSQL queries and Hibernate/JPA data access for validation and reporting, reducing report response time by 25%.',
      'Develop Kafka producers and consumers for healthcare event workflows, with message validation, exception handling, retries, and failure recovery.',
      'Deploy and operate Spring Boot services on AWS — EC2, RDS/PostgreSQL, S3, Lambda, and API Gateway — for event-driven processing and production API integrations.',
      'Containerize Java services with Docker and maintain Jenkins CI/CD pipelines with Maven and Git across environments.',
      'Review code, mentor engineers, and lead production investigations across React, service logs, and SQL with development and QA.',
    ],
    tags: ['Java 17', 'Spring Boot', 'Kafka', 'PostgreSQL', 'AWS', 'React'],
  },
  {
    icon: 'ph-heartbeat',
    role: 'Software Engineer',
    company: 'Oscar Health — New Jersey',
    date: 'Jun 2021 – Aug 2024',
    bullets: [
      'Developed Java 11 / Spring Boot microservices and REST APIs for member, claims, and provider workflows.',
      'Built responsive member and provider screens in React, JavaScript, HTML5, and CSS, integrating REST APIs and reducing page load time by 20%.',
      'Implemented Hibernate/JPA and PostgreSQL data access for eligibility and insurance records.',
      'Applied Spring Security and request validation so access to protected health information stayed inside HIPAA-aligned workflows.',
      'Deployed and maintained applications on AWS EC2, RDS, and S3 with Docker, Jenkins, Maven, and Git.',
      'Wrote JUnit and Mockito tests for member, claims, and provider services, and validated fixes with QA through release.',
    ],
    tags: ['Java 11', 'Spring Boot', 'React', 'PostgreSQL', 'Spring Security'],
  },
]

function ExpCard({ job }) {
  return (
    <div className="exp-card glass-card">
      <div className="exp-top">
        <div className="exp-company-badge">
          <span className="company-icon"><i className={`ph ${job.icon}`} /></span>
          <div>
            <h3 className="exp-role">{job.role}</h3>
            <p className="exp-company">{job.company}</p>
          </div>
        </div>
        <span className="exp-date">{job.date}</span>
      </div>
      <ul className="exp-bullets">
        {job.bullets.map((b) => <li key={b}>{b}</li>)}
      </ul>
      <div className="exp-tags">
        {job.tags.map((t) => <span key={t} className="exp-tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="label-text">02 / Experience</span>
        </div>
        <h2 className="section-heading">
          The <span className="gradient-text">path</span>
        </h2>

        <div className="exp-list">
          {JOBS.map((job) => <ExpCard key={job.company} job={job} />)}
        </div>
      </div>
    </section>
  )
}
