import { useState, useRef } from 'react'

const SOCIALS = [
  { icon: 'ph-github-logo', label: 'GitHub', href: 'https://github.com/Alisha313', user: '@Alisha313' },
  { icon: 'ph-linkedin-logo', label: 'LinkedIn', href: 'https://linkedin.com/in/alisha-p-55a692192', user: 'Alisha Patel' },
  { icon: 'ph-envelope-simple', label: 'Email', href: 'mailto:alishap1924@gmail.com', user: 'alishap1924@gmail.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const formRef = useRef(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formsubmit.co/ajax/alishap1924@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Contact: ${form.name}`,
          _captcha: 'false',
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        throw new Error('FormSubmit error')
      }
    } catch {
      // Fallback to mailto
      const mailtoLink = `mailto:alishap1924@gmail.com?subject=${encodeURIComponent(
        `Portfolio Contact: ${form.name}`
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`
      window.location.href = mailtoLink
      setStatus('idle')
    }
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-label">
          <span className="label-line" />
          <span className="label-text">06 / Contact</span>
        </div>
        <h2 className="section-heading">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="contact-big-text">
          Have a project in mind or just want to say hello?
          <br />
          I&apos;d love to hear from you.
        </p>

        <div className="contact-grid-modern">
          <form
            ref={formRef}
            className="contact-form-modern glass-card"
            onSubmit={handleSubmit}
          >
            <div className="form-group-modern">
              <input
                type="text"
                name="name"
                className="form-input-modern"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-modern">
              <input
                type="email"
                name="email"
                className="form-input-modern"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-modern">
              <textarea
                name="message"
                className="form-input-modern"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-magnetic" disabled={status === 'sending'}>
              <span className="btn-magnetic-inner">
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
                {status === 'idle' && <i className="ph ph-paper-plane-tilt" />}
              </span>
            </button>

            {status === 'sent' && (
              <p className="form-status-msg" style={{ color: '#5b7b6d', marginTop: '1rem' }}>
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="form-status-msg" style={{ color: '#c0392b', marginTop: '1rem' }}>
                Error sending message. Please try again.
              </p>
            )}
          </form>

          <div className="contact-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card glass-card"
              >
                <i className={`ph ${s.icon}`} />
                <div>
                  <span className="social-label">{s.label}</span>
                  <span className="social-user">{s.user}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
