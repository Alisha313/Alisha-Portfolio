import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const scrollBarRef = useRef(null)

  /* ── Scroll progress bar ── */
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      if (scrollBarRef.current) scrollBarRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  /* ── GSAP scroll-triggered animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section labels slide in
      gsap.utils.toArray('.section-label').forEach((label) => {
        gsap.from(label, {
          scrollTrigger: { trigger: label, start: 'top 85%' },
          x: -40, opacity: 0, duration: 0.7, ease: 'power3.out',
        })
      })

      // Section headings fade up
      gsap.utils.toArray('.section-heading').forEach((heading) => {
        gsap.from(heading, {
          scrollTrigger: { trigger: heading, start: 'top 85%' },
          y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        })
      })

      // Glass-card stagger groups
      const cardGroups = [
        '.bento-about .glass-card',
        '.exp-list .exp-card',
        '.skills-bento .skill-bento-card',
        '.project-grid .project-card',
        '.edu-row .edu-card-modern',
        '.contact-socials .social-card',
      ]
      cardGroups.forEach((selector) => {
        gsap.utils.toArray(selector).forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: 'top 88%' },
            y: 50, opacity: 0, duration: 0.7, delay: i * 0.1, ease: 'power3.out',
          })
        })
      })

      // Contact section
      gsap.from('.contact-form-modern', {
        scrollTrigger: { trigger: '.contact-form-modern', start: 'top 85%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
      })
      gsap.from('.contact-big-text', {
        scrollTrigger: { trigger: '.contact-big-text', start: 'top 85%' },
        y: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  /* ── Animated counters ── */
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const target = parseInt(el.getAttribute('data-count'), 10)
            let current = 0
            const increment = Math.ceil(target / 40)
            const timer = setInterval(() => {
              current += increment
              if (current >= target) { current = target; clearInterval(timer) }
              el.textContent = current + '+'
            }, 40)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )
    counters.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  /* ── Magnetic button effect ── */
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn-magnetic')
    const handlers = []
    buttons.forEach((btn) => {
      const inner = btn.querySelector('.btn-magnetic-inner')
      if (!inner) return
      const move = (e) => {
        const rect = btn.getBoundingClientRect()
        inner.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * 0.3}px, ${(e.clientY - rect.top - rect.height / 2) * 0.3}px)`
      }
      const leave = () => { inner.style.transform = 'translate(0, 0)' }
      btn.addEventListener('mousemove', move)
      btn.addEventListener('mouseleave', leave)
      handlers.push({ btn, move, leave })
    })
    return () => handlers.forEach(({ btn, move, leave }) => {
      btn.removeEventListener('mousemove', move)
      btn.removeEventListener('mouseleave', leave)
    })
  }, [])

  /* ── Text scramble on section labels ── */
  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'
    const labels = document.querySelectorAll('.label-text')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const original = el.textContent
            let iteration = 0
            const interval = setInterval(() => {
              el.textContent = original.split('').map((char, i) => {
                if (i < iteration) return original[i]
                if (char === ' ' || char === '/') return char
                return chars[Math.floor(Math.random() * chars.length)]
              }).join('')
              iteration += 0.6
              if (iteration >= original.length) { el.textContent = original; clearInterval(interval) }
            }, 30)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )
    labels.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* ── 3-D tilt on glass cards ── */
  useEffect(() => {
    const MAX_TILT = 8
    const GLOW_SIZE = 280
    const cards = document.querySelectorAll('.glass-card')
    const handlers = []
    cards.forEach((card) => {
      const glowEl = document.createElement('div')
      glowEl.className = 'card-tilt-glow'
      card.style.position = 'relative'
      card.style.overflow = 'hidden'
      card.appendChild(glowEl)
      const move = (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.transform = `perspective(800px) rotateX(${((y - rect.height / 2) / (rect.height / 2)) * -MAX_TILT}deg) rotateY(${((x - rect.width / 2) / (rect.width / 2)) * MAX_TILT}deg) scale3d(1.02,1.02,1.02)`
        glowEl.style.opacity = '1'
        glowEl.style.left = (x - GLOW_SIZE / 2) + 'px'
        glowEl.style.top = (y - GLOW_SIZE / 2) + 'px'
      }
      const leave = () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)'
        glowEl.style.opacity = '0'
      }
      card.addEventListener('mousemove', move)
      card.addEventListener('mouseleave', leave)
      handlers.push({ card, glowEl, move, leave })
    })
    return () => handlers.forEach(({ card, glowEl, move, leave }) => {
      card.removeEventListener('mousemove', move)
      card.removeEventListener('mouseleave', leave)
      if (glowEl.parentNode) glowEl.parentNode.removeChild(glowEl)
    })
  }, [])

  return (
    <>
      <div className="scroll-progress" ref={scrollBarRef} />
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
