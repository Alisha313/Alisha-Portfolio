const PROJECT_CATEGORIES = [
  {
    label: 'College Projects',
    projects: [
      {
        icon: 'ph-planet',
        title: 'Mars Explorer',
        desc: 'React + Vite dashboard displaying Mars weather data and rover photos from NASA\u2019s API.',
        tags: ['React', 'Vite', 'NASA API'],
        link: 'https://github.com/Alisha313/Alisha-Portfolio',
      },
      {
        icon: 'ph-game-controller',
        title: 'Tic Tac Toe',
        desc: 'Interactive two-player Tic Tac Toe game built with vanilla HTML, CSS, and JavaScript.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/Alisha313/Alisha-Portfolio',
      },
      {
        icon: 'ph-house-line',
        title: 'OwnIt Property Calculator',
        desc: 'Property investment calculator that helps users estimate mortgage payments, ROI, and closing costs.',
        tags: ['JavaScript', 'Finance', 'Responsive'],
        link: 'https://github.com/Alisha313/OwnItPropertyCalculator',
      },
    ],
  },
  {
    label: 'Personal Projects',
    projects: [
      {
        icon: 'ph-shopping-cart',
        title: 'Foot Commerce',
        desc: 'Full-stack e-commerce platform for footwear with product listings, cart, and checkout flow.',
        tags: ['JavaScript', 'Node.js', 'E-Commerce'],
        link: 'https://github.com/Alisha313/foot-commerce',
      },
      {
        icon: 'ph-twitter-logo',
        title: 'Twitter Clone',
        desc: 'Social media clone replicating core Twitter features — tweets, follows, and timelines.',
        tags: ['Python', 'Django', 'PostgreSQL'],
        link: 'https://github.com/Alisha313/Twitter-Clone',
      },
      {
        icon: 'ph-pizza',
        title: 'Submarine Pizzeria',
        desc: 'Restaurant ordering application with menu browsing, cart management, and order processing.',
        tags: ['Python', 'Flask', 'SQL'],
        link: 'https://github.com/Alisha313/Submarine-Pizzeria',
      },
      {
        icon: 'ph-heartbeat',
        title: 'ML Heart Disease Prediction',
        desc: 'Machine learning model predicting heart disease risk using the Cleveland Dataset with data visualization.',
        tags: ['Python', 'Jupyter', 'Scikit-learn'],
        link: 'https://github.com/Alisha313/ML-Heart-Disease-Prediction',
      },
    ],
  },
  {
    label: 'Revature Training',
    projects: [
      {
        icon: 'ph-code',
        title: 'Revature Training Projects',
        desc: 'Collection of Java projects built during Revature\u2019s intensive full-stack training program.',
        tags: ['Java', 'Spring', 'SQL'],
        link: 'https://github.com/Alisha313/Revature-training',
      },
      {
        icon: 'ph-database',
        title: 'Project 0',
        desc: 'Foundation project demonstrating core Java concepts, OOP principles, and database connectivity.',
        tags: ['Java', 'JDBC', 'OOP'],
        link: 'https://github.com/Alisha313/Project0',
      },
      {
        icon: 'ph-sparkle',
        title: 'Bare Beauty',
        desc: 'Beauty product showcase application with catalog browsing and product detail pages.',
        tags: ['Full-Stack', 'JavaScript', 'CSS'],
        link: 'https://github.com/Alisha313/Bare-Beauty',
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
          Featured <span className="gradient-text">Work</span>
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
