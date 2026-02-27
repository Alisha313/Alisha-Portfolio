import { useCallback } from 'react'

const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const FOOTER_SOCIALS = [
  { icon: 'ph-github-logo', href: 'https://github.com/Alisha313', label: 'GitHub' },
  { icon: 'ph-linkedin-logo', href: 'https://linkedin.com/in/alisha-p-55a692192', label: 'LinkedIn' },
  { icon: 'ph-envelope-simple', href: 'mailto:alishap1924@gmail.com', label: 'Email' },
]

export default function Footer() {
  const smoothScroll = useCallback((e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <footer className="footer-modern">
      <div className="container footer-flex">
        <div className="footer-brand">
          <span className="footer-logo">A<span className="accent-dot">.</span></span>
          <p>Building scalable solutions with clean code.</p>
        </div>

        <nav className="footer-links">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          {FOOTER_SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className=""
              aria-label={s.label}
            >
              <i className={`ph ${s.icon}`} />
            </a>
          ))}
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Alisha Patel. All rights reserved.</p>
      </div>
    </footer>
  )
}
