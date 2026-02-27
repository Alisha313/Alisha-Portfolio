const PROJECT_CATEGORIES = [
  {
    label: 'College Projects',
    projects: [
      {
        icon: 'ph-planet',
        title: 'Mars Explorer',
        desc: 'React + Vite dashboard displaying Mars weather data and rover photos from NASA\u2019s API.',
        tags: ['React', 'Vite', 'NASA API'],
        link: 'https://github.com/Alisha313',
      },
      {
        icon: 'ph-game-controller',
        title: 'Tic Tac Toe',
        desc: 'Interactive two-player Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/Alisha313',
      },
    ],
  },
  {
    label: 'Boot Camp Projects',
    projects: [
      {
        icon: 'ph-chart-line-up',
        title: 'E-Commerce Microservice',
        desc: 'Distributed order processing system using Spring Boot, Kafka, and PostgreSQL.',
        tags: ['Spring Boot', 'Kafka', 'PostgreSQL'],
        link: 'https://github.com/Alisha313',
      },
      {
        icon: 'ph-robot',
        title: 'ML Sentiment Analyzer',
        desc: 'NLP pipeline built with Python, TensorFlow, and Flask for real-time text sentiment.',
        tags: ['Python', 'TensorFlow', 'Flask'],
        link: 'https://github.com/Alisha313',
      },
      {
        icon: 'ph-cloud-arrow-up',
        title: 'AWS Serverless API',
        desc: 'REST API on AWS Lambda, API Gateway and DynamoDB with CI/CD via GitHub Actions.',
        tags: ['AWS Lambda', 'DynamoDB', 'CI/CD'],
        link: 'https://github.com/Alisha313',
      },
    ],
  },
  {
    label: 'Revature Training',
    projects: [
      {
        icon: 'ph-users',
        title: 'Team Management App',
        desc: 'Full-stack team management dashboard with React, Node.js, and MongoDB.',
        tags: ['React', 'Node.js', 'MongoDB'],
        link: 'https://github.com/Alisha313',
      },
      {
        icon: 'ph-shield-check',
        title: 'Auth Microservice',
        desc: 'JWT-based authentication service with Spring Security and Redis session caching.',
        tags: ['Spring Security', 'JWT', 'Redis'],
        link: 'https://github.com/Alisha313',
      },
      {
        icon: 'ph-database',
        title: 'Data Pipeline',
        desc: 'ETL pipeline with Python, Apache Spark, and PostgreSQL for analytics workloads.',
        tags: ['Python', 'Spark', 'PostgreSQL'],
        link: 'https://github.com/Alisha313',
      },
    ],
  },
]

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card glass-card"
    >
      <div className="project-card-icon">
        <i className={`ph ${project.icon}`} />
      </div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-desc">{project.desc}</p>
      <div className="project-card-tags">
        {project.tags.map((t) => (
          <span key={t} className="project-tag">{t}</span>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="label-text">04 / Projects</span>
        </div>
        <h2 className="section-heading">
          Featured <span className="gradient-text">Work</span>
        </h2>

        {PROJECT_CATEGORIES.map((cat) => (
          <div key={cat.label}>
            <h3 className="project-category-label">{cat.label}</h3>
            <div className="project-grid">
              {cat.projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
