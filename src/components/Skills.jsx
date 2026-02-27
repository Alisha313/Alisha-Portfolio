const SKILLS = [
  {
    icon: 'ph-code',
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    icon: 'ph-frame-corners',
    title: 'Frameworks',
    items: ['Spring Boot', 'React.js', 'Node.js', 'Express', 'Flask', 'Hibernate'],
  },
  {
    icon: 'ph-brain',
    title: 'ML / AI',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'OpenCV'],
  },
  {
    icon: 'ph-cloud',
    title: 'Cloud',
    items: ['AWS (EC2, S3, Lambda)', 'Azure', 'GCP Basics', 'Serverless'],
  },
  {
    icon: 'ph-git-branch',
    title: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD'],
  },
  {
    icon: 'ph-database',
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB'],
  },
  {
    icon: 'ph-bug',
    title: 'Testing',
    items: ['JUnit', 'Mockito', 'Jest', 'Selenium', 'Postman'],
  },
  {
    icon: 'ph-tree-structure',
    title: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'OOP', 'Design Patterns', 'System Design'],
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
          Technical <span className="gradient-text">Arsenal</span>
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
