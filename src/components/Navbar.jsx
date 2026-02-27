import { useEffect, useState, useCallback } from 'react'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact', cta: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* Scroll class on navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active section tracking via IntersectionObserver */
  useEffect(() => {
    const sections = document.querySelectorAll('.section, .hero')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const smoothScroll = useCallback((e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }, [])

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo" onClick={(e) => smoothScroll(e, '#hero')}>
            Alisha
          </a>

          <button
            className={`nav-toggle${mobileOpen ? ' active' : ''}`}
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <ul className="nav-menu nav-menu-desktop">
            {NAV_LINKS.map(({ href, label, cta }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`nav-link${cta ? ' nav-link-cta' : ''}${activeSection === href.slice(1) ? ' active' : ''}`}
                  data-text={label}
                  onClick={(e) => smoothScroll(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div className={`mobile-menu-overlay${mobileOpen ? ' open' : ''}`}>
        <button
          className="mobile-menu-close"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          <i className="ph ph-x" />
        </button>
        <ul className="mobile-menu-list">
          {NAV_LINKS.map(({ href, label, cta }) => (
            <li key={href}>
              <a
                href={href}
                className={`mobile-menu-link${cta ? ' mobile-menu-cta' : ''}`}
                onClick={(e) => smoothScroll(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
