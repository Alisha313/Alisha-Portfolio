const SKILLS = [
  {
    icon: 'ph-code',
    title: 'Languages & backend',
    items: ['Java 11/17', 'Python', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST', 'Microservices'],
  },
  {
    icon: 'ph-browser',
    title: 'Frontend',
    items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'React Hooks', 'Redux'],
  },
  {
    icon: 'ph-shield-check',
    title: 'APIs & security',
    items: ['OpenAPI/Swagger', 'Postman', 'OAuth 2.0', 'JWT', 'Role-based access'],
  },
  {
    icon: 'ph-database',
    title: 'Data & messaging',
    items: ['PostgreSQL', 'SQL', 'Redis', 'Apache Kafka', 'Query optimization', 'Caching'],
  },
  {
    icon: 'ph-cloud',
    title: 'AWS',
    items: ['EC2', 'Lambda', 'S3', 'RDS', 'API Gateway', 'SQS', 'IAM', 'CloudWatch'],
  },
  {
    icon: 'ph-git-branch',
    title: 'DevOps & CI/CD',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Maven', 'Linux', 'Bash'],
  },
  {
    icon: 'ph-bug',
    title: 'Testing',
    items: ['JUnit', 'Mockito', 'Jest', 'React Testing Library', 'Cypress'],
  },
  {
    icon: 'ph-chart-line',
    title: 'Observability',
    items: ['Splunk', 'Datadog', 'Prometheus', 'Grafana'],
  },
  {
    icon: 'ph-robot',
    title: 'AI development',
    items: ['Claude Code', 'Codex', 'OpenCode', 'GitHub Copilot'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="label-text">03 / Skills</span>
        </div>
        <h2 className="section-heading">
          Technical <span className="gradient-text">stack</span>
        </h2>

        <div className="skills-bento">
          {SKILLS.map((skill) => (
            <div key={skill.title} className="skill-bento-card glass-card">
              <div className="skill-icon-wrap">
                <i className={`ph ${skill.icon}`} />
              </div>
              <h3>{skill.title}</h3>
              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
