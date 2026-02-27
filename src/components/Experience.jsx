const JOBS = [
  {
    icon: 'ph-buildings',
    role: 'Software Engineering Job Simulation',
    company: 'JPMorgan Chase (Forage)',
    date: 'Jan 2026',
    bullets: [
      'Built a Spring Boot microservice that consumes high-volume Kafka transaction events, validates data, and persists records using Spring Data JPA with an H2 SQL database.',
      'Integrated an external REST Incentive API into the transaction workflow and exposed a REST endpoint for querying user balances in JSON format.',
      'Tested and verified system reliability using Maven test suites and embedded Kafka, ensuring correct message processing, database updates, and API interactions.',
    ],
    tags: ['Spring Boot', 'Kafka', 'REST API', 'JPA'],
  },
  {
    icon: 'ph-buildings',
    role: 'Software Engineer (Contract)',
    company: 'JPMorgan Chase \u2014 Newport, NJ',
    date: 'Sept 2023 \u2013 Jun 2024',
    bullets: [
      'Designed and deployed scalable Java Spring Boot and Python Flask microservices supporting high-volume financial transactions across multiple services.',
      'Built CI/CD pipelines with Jenkins and Docker to streamline deployments and improve release reliability.',
      'Implemented Redis caching and optimized database queries, improving API response times by 30%.',
      'Created API documentation and onboarding tools to improve developer productivity and reduce setup time.',
      'Collaborated with cross-functional teams to ensure applications met PCI-DSS and enterprise security standards.',
    ],
    tags: ['Java', 'Python', 'Jenkins', 'Docker', 'Redis'],
  },
  {
    icon: 'ph-code',
    role: 'Full Stack Java Developer',
    company: 'Revature \u2014 Edison, NJ',
    date: 'May 2023 \u2013 Sept 2023',
    bullets: [
      'Developed REST APIs with Java Spring Boot and PostgreSQL, improving query performance by 40%.',
      'Built responsive React.js interfaces with optimized state management for faster rendering.',
      'Designed Node.js backends with MongoDB to support high-availability applications.',
      'Collaborated in Agile teams using Git and Bitbucket for version control and delivery.',
    ],
    tags: ['Spring Boot', 'React.js', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    icon: 'ph-storefront',
    role: 'Task Associate',
    company: 'Ulta Beauty \u2014 Woodbridge, NJ',
    date: 'Sept 2025 \u2013 Present',
    bullets: [
      'Unload and organize incoming merchandise shipments efficiently.',
      'Stock shelves and maintain accurate backroom inventory.',
      'Assist with visual merchandising and promotional displays.',
    ],
    tags: ['Operations', 'Inventory', 'Merchandising'],
    outside: true, // rendered outside exp-list
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
        {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="exp-tags">
        {job.tags.map((t) => <span key={t} className="exp-tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Experience() {
  const mainJobs = JOBS.filter((j) => !j.outside)
  const outsideJobs = JOBS.filter((j) => j.outside)

  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="label-text">02 / Experience</span>
        </div>
        <h2 className="section-heading">
          Where I&apos;ve <span className="gradient-text">Worked</span>
        </h2>

        <div className="exp-list">
          {mainJobs.map((job, i) => <ExpCard key={i} job={job} />)}
        </div>

        {outsideJobs.map((job, i) => <ExpCard key={`out-${i}`} job={job} />)}
      </div>
    </section>
  )
}
