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
              I&apos;m a software engineer who loves{' '}
              <span className="gradient-text">building things that scale.</span>
            </h2>
            <p>
              Currently finishing my B.S. in Computer Science at <strong>Kean University</strong> (Dec 2026),
              I&apos;ve spent the last few years working on real production systems &mdash; from high-volume transaction
              microservices at <strong>JPMorgan Chase</strong> to full-stack applications at <strong>Revature</strong>.
            </p>
            <p>
              I&apos;m passionate about clean architecture, performant APIs, and cloud-native solutions.
              When I&apos;m not coding, I&apos;m probably exploring new AWS services or tinkering with ML models.
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
              <img src="/assets/alisha-photo.png" alt="Alisha Patel" className="photo-portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
