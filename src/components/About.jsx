export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="label-text">01 / About</span>
        </div>

        <div className="bento-grid bento-about">
          <div className="bento-card bento-bio glass-card">
            <h2 className="bento-heading">
              I got into this work by shipping{' '}
              <span className="gradient-text">healthcare systems that have to be right.</span>
            </h2>
            <p>
              I&apos;m a senior software engineer with 5+ years in healthcare and health insurance.
              The through-line is Java and Spring Boot: secure REST APIs, PostgreSQL, Kafka, and AWS,
              taken from technical design through production release.
            </p>
            <p>
              That started at <strong>Oscar Health</strong>, where I spent three years on member, claims,
              and provider services — eligibility data, HIPAA-aligned access, and React screens for the people
              using those systems. Since October 2024 I&apos;ve been at <strong>Johnson &amp; Johnson</strong>,
              leading Java 17 microservices, event workflows, and the production issues that show up after launch.
            </p>
            <p>
              I still build on the side. <strong>OwnIt Property Calculator</strong> is where I&apos;m putting
              that same backend habit next to an AI assistant — Java for the calculations, and a model that
              can use the product&apos;s own data. Day to day I also work with Claude Code, Codex, OpenCode,
              and GitHub Copilot.
            </p>
          </div>

          <div className="bento-card bento-cert glass-card">
            <div className="cert-badge">
              <i className="ph-fill ph-certificate" />
            </div>
            <div className="cert-text">
              <span className="cert-title">AWS Certified</span>
              <span className="cert-sub">Cloud Practitioner</span>
            </div>
          </div>

          <div className="bento-card bento-photo glass-card">
            <div className="photo-wrapper">
              <img src={`${import.meta.env.BASE_URL}assets/alisha-photo.png`} alt="Alisha Patel" className="photo-portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
