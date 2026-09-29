const PROJECT_CATEGORIES = [
  {
    label: 'Featured',
    projects: [
      {
        icon: 'ph-house-line',
        title: 'OwnIt Property Calculator',
        desc: 'A property platform I am building to show Java and AI in the same product. Mortgage, rent-versus-buy, and home-value calculations sit in a Java core with JUnit. The app around it covers listings, an agent CRM, and an assistant (Groq or OpenAI) that can use map, market-trend, and valuation tools instead of answering from a generic prompt.',
        tags: ['Java', 'Spring Boot', 'JUnit', 'Node.js', 'MongoDB', 'AI'],
        link: 'https://github.com/Alisha313/OwnItPropertyCalculator',
      },
    ],
  },
  {
    label: 'Other builds',
    projects: [
      {
        icon: 'ph-heartbeat',
        title: 'ML Heart Disease Prediction',
        desc: 'Supervised models on the Cleveland heart-disease set, with visualization so the result is inspectable.',
        tags: ['Python', 'Jupyter', 'Scikit-learn'],
        link: 'https://github.com/Alisha313/ML-Heart-Disease-Prediction',
      },
      {
        icon: 'ph-shopping-cart',
        title: 'Foot Commerce',
        desc: 'Full-stack storefront for footwear: listings, cart, and checkout.',
        tags: ['JavaScript', 'Node.js'],
        link: 'https://github.com/Alisha313/foot-commerce',
      },
      {
        icon: 'ph-twitter-logo',
        title: 'Twitter Clone',
        desc: 'A social clone with tweets, follows, and timelines.',
        tags: ['Python', 'Django', 'PostgreSQL'],
        link: 'https://github.com/Alisha313/Twitter-Clone',
      },
      {
        icon: 'ph-pizza',
        title: 'Submarine Pizzeria',
        desc: 'Restaurant ordering: menu, cart, and order processing.',
        tags: ['Python', 'Flask', 'SQL'],
        link: 'https://github.com/Alisha313/Submarine-Pizzeria',
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
      <h3>{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-stack">
        {project.tags.map((t) => (
          <span key={t}>{t}</span>
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
          Selected <span className="gradient-text">work</span>
        </h2>

        {PROJECT_CATEGORIES.map((cat) => (
          <div key={cat.label} className="project-category">
            <div className="category-heading">
              <span className="category-label">{cat.label}</span>
            </div>
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
