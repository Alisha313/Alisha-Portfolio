import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

/* ── Constellation canvas config ── */
const COLORS = [
  { r: 91, g: 140, b: 110 },
  { r: 160, g: 125, b: 80 },
  { r: 115, g: 155, b: 125 },
  { r: 180, g: 155, b: 110 },
  { r: 130, g: 160, b: 140 },
]
const LINE_DIST = 140
const MOUSE_CONNECT = 200
const REPULSE_RADIUS = 150
const REPULSE_STRENGTH = 3
const BASE_SPEED = 0.3
const FRICTION = 0.92

const ROTATING_WORDS = [
  'scalable microservices',
  'cloud infrastructure',
  'full-stack applications',
  'CI/CD pipelines',
]

const TECH_CHIPS = ['Java', 'Python', 'Spring Boot', 'AWS', 'React', 'Docker']

export default function Hero() {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)
  const [currentWord, setCurrentWord] = useState(0)

  /* ── Rotating words ── */
  useEffect(() => {
    const id = setInterval(() => setCurrentWord((prev) => (prev + 1) % ROTATING_WORDS.length), 2800)
    return () => clearInterval(id)
  }, [])

  /* ── Hero entrance animation ── */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.to('.hero-badge', { opacity: 1, y: 0, duration: 0.8 }, 0.2)
      .to('.hero-name .line-inner', { opacity: 1, y: 0, duration: 1 }, 0.4)
      .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.8 }, 0.8)
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8 }, 1.0)
      .to('.hero-tech-stack', { opacity: 1, y: 0, duration: 0.8 }, 1.2)
    return () => tl.kill()
  }, [])

  /* ── Constellation canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current
    const hero = heroRef.current
    if (!canvas || !hero) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let mouse = { x: -9999, y: -9999 }
    let W, H, dpr, animId

    function resize() {
      dpr = window.devicePixelRatio || 1
      W = hero.offsetWidth
      H = hero.offsetHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function createParticles() {
      const count = Math.min(Math.floor((W * H) / 7000), 180)
      particles = []
      for (let i = 0; i < count; i++) {
        const c = COLORS[Math.floor(Math.random() * COLORS.length)]
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          baseVx: (Math.random() - 0.5) * BASE_SPEED,
          baseVy: (Math.random() - 0.5) * BASE_SPEED,
          vx: 0, vy: 0,
          r: Math.random() * 2.5 + 1.5,
          color: c, alpha: Math.random() * 0.5 + 0.35,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx2m = p.x - mouse.x, dy2m = p.y - mouse.y
        const distM = Math.sqrt(dx2m * dx2m + dy2m * dy2m)
        if (distM < REPULSE_RADIUS && distM > 0) {
          const force = (1 - distM / REPULSE_RADIUS) * REPULSE_STRENGTH
          p.vx += (dx2m / distM) * force
          p.vy += (dy2m / distM) * force
        }
        p.vx *= FRICTION; p.vy *= FRICTION
        p.x += p.baseVx + p.vx; p.y += p.baseVy + p.vy
        if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20
        if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${p.alpha})`
        ctx.fill()
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x, dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINE_DIST) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${(1 - dist / LINE_DIST) * 0.22})`
            ctx.lineWidth = 0.8; ctx.stroke()
          }
        }
        if (distM < MOUSE_CONNECT) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(91,140,110,${(1 - distM / MOUSE_CONNECT) * 0.4})`
          ctx.lineWidth = 1; ctx.stroke()
        }
      }
      animId = requestAnimationFrame(draw)
    }

    resize(); createParticles(); draw()

    const onResize = () => { resize(); createParticles() }
    const onMouseMove = (e) => { const r = hero.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const onTouchMove = (e) => { const r = hero.getBoundingClientRect(); mouse.x = e.touches[0].clientX - r.left; mouse.y = e.touches[0].clientY - r.top }

    window.addEventListener('resize', onResize)
    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('mouseleave', onMouseLeave)
    hero.addEventListener('touchend', onMouseLeave)
    hero.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      hero.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('mouseleave', onMouseLeave)
      hero.removeEventListener('touchend', onMouseLeave)
      hero.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <canvas className="constellation-canvas" ref={canvasRef} />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Open to Opportunities
        </div>

        <h1 className="hero-name" data-splitting>
          <span className="line">
            <span className="line-inner">Hi, I&apos;m Alisha</span>
          </span>
        </h1>

        <h2 className="hero-title">
          <span className="title-static">I build </span>
          <span className="title-rotate">
            {ROTATING_WORDS.map((word, i) => (
              <span key={word} className={`rotate-word${i === currentWord ? ' active' : ''}`}>
                {word}
              </span>
            ))}
          </span>
        </h2>

        <p className="hero-tagline">
          Software Engineer crafting high-performance Java &amp; Python systems
          in financial and cloud-based environments.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-magnetic" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <span className="btn-magnetic-inner">
              <span className="btn-text">Explore My Work</span>
              <span className="btn-icon"><i className="ph ph-arrow-down" /></span>
            </span>
          </a>
          <a href="/assets/Alisha_Patel_Resume.pdf" className="btn-ghost-glow" target="_blank" rel="noopener noreferrer">
            <span><i className="ph ph-file-pdf" /> Resume</span>
          </a>
          <a href="#contact" className="btn-ghost-glow" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        <div className="hero-tech-stack">
          <span className="tech-label">Tech I love:</span>
          <div className="tech-icons">
            {TECH_CHIPS.map((chip) => (
              <span key={chip} className="tech-chip">{chip}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
