/* =========================================
   ALISHA'S PORTFOLIO — INTERACTIONS
   GSAP + ScrollTrigger
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  /* ---- Cache DOM ---- */
  const scrollProgress = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contactForm');

  /* =========================================
     1. SCROLL PROGRESS BAR
     ========================================= */
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* =========================================
     3. NAVBAR
     ========================================= */
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const sections = document.querySelectorAll('.section, .hero');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px', threshold: 0 });

  sections.forEach((s) => navObserver.observe(s));

  /* =========================================
     4. ROTATING HERO WORDS
     ========================================= */
  const rotateWords = document.querySelectorAll('.rotate-word');
  let currentWord = 0;

  function rotateTitle() {
    rotateWords.forEach((w) => w.classList.remove('active'));
    currentWord = (currentWord + 1) % rotateWords.length;
    rotateWords[currentWord].classList.add('active');
  }

  setInterval(rotateTitle, 2800);

  /* =========================================
     5. GSAP ANIMATIONS
     ========================================= */
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      setTimeout(initGSAP, 100);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // --- Hero entrance ---
    const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTL
      .to('.hero-badge', { opacity: 1, y: 0, duration: 0.8 }, 0.2)
      .to('.hero-name .line-inner', { opacity: 1, y: 0, duration: 1 }, 0.4)
      .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.8 }, 0.8)
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8 }, 1.0)
      .to('.hero-tech-stack', { opacity: 1, y: 0, duration: 0.8 }, 1.2);

    // --- Section labels ---
    gsap.utils.toArray('.section-label').forEach((label) => {
      gsap.from(label, {
        scrollTrigger: { trigger: label, start: 'top 85%', toggleActions: 'play none none none' },
        x: -40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });
    });

    // --- Section headings ---
    gsap.utils.toArray('.section-heading').forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // --- Glass cards stagger ---
    const cardGroups = [
      '.bento-about .glass-card',
      '.exp-list .exp-card',
      '.skills-bento .skill-bento-card',
      '.project-grid .project-card',
      '.edu-row .edu-card-modern',
      '.contact-socials .social-card',
    ];

    cardGroups.forEach((selector) => {
      const cards = gsap.utils.toArray(selector);
      if (cards.length === 0) return;

      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    });

    // --- Contact form ---
    gsap.from('.contact-form-modern', {
      scrollTrigger: { trigger: '.contact-form-modern', start: 'top 85%' },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    // --- Contact big text ---
    gsap.from('.contact-big-text', {
      scrollTrigger: { trigger: '.contact-big-text', start: 'top 85%' },
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
    });

  }

  initGSAP();

  /* =========================================
     6. ANIMATED COUNTERS
     ========================================= */
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        let current = 0;
        const increment = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current + '+';
        }, 40);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((c) => counterObserver.observe(c));

  /* =========================================
     7. MAGNETIC BUTTON EFFECT
     ========================================= */
  document.querySelectorAll('.btn-magnetic').forEach((btn) => {
    const inner = btn.querySelector('.btn-magnetic-inner');
    if (!inner) return;

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      inner.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      inner.style.transform = 'translate(0, 0)';
    });
  });

  /* =========================================
     8. CONTACT FORM
     ========================================= */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-submit');
      const btnText = btn.querySelector('.btn-text');
      const original = btnText.textContent;
      const formData = new FormData(contactForm);

      btnText.textContent = 'Sending...';
      btn.style.pointerEvents = 'none';

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            btnText.textContent = 'Sent!';
            btn.querySelector('.btn-magnetic-inner').style.background = '#5b9a6d';
            contactForm.reset();
          } else {
            btnText.textContent = 'Error — Try Again';
            btn.querySelector('.btn-magnetic-inner').style.background = '#b55a5a';
          }
        })
        .catch(() => {
          btnText.textContent = 'Error — Try Again';
          btn.querySelector('.btn-magnetic-inner').style.background = '#b55a5a';
        })
        .finally(() => {
          setTimeout(() => {
            btnText.textContent = original;
            btn.querySelector('.btn-magnetic-inner').style.background = '';
            btn.style.pointerEvents = '';
          }, 2500);
        });
    });
  }

  /* ─── Hero Constellation Network ─── */
  (function initConstellation() {
    const canvas = document.getElementById('constellationCanvas');
    const hero = document.querySelector('.hero');
    if (!canvas || !hero) return;
    const ctx = canvas.getContext('2d');

    const COLORS = [
      { r: 91, g: 140, b: 110 },
      { r: 160, g: 125, b: 80 },
      { r: 115, g: 155, b: 125 },
      { r: 180, g: 155, b: 110 },
      { r: 130, g: 160, b: 140 },
    ];

    const LINE_DIST = 140;
    const MOUSE_CONNECT = 200;
    const REPULSE_RADIUS = 150;
    const REPULSE_STRENGTH = 3;
    const BASE_SPEED = 0.3;
    const FRICTION = 0.92;

    let particles = [];
    let mouse = { x: -9999, y: -9999 };
    let W, H, dpr;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      W = hero.offsetWidth;
      H = hero.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      const area = W * H;
      const count = Math.min(Math.floor(area / 7000), 180);
      particles = [];
      for (let i = 0; i < count; i++) {
        const c = COLORS[Math.floor(Math.random() * COLORS.length)];
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          baseVx: (Math.random() - 0.5) * BASE_SPEED,
          baseVy: (Math.random() - 0.5) * BASE_SPEED,
          vx: 0,
          vy: 0,
          r: Math.random() * 2.5 + 1.5,
          color: c,
          alpha: Math.random() * 0.5 + 0.35,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx2m = p.x - mouse.x;
        const dy2m = p.y - mouse.y;
        const distM = Math.sqrt(dx2m * dx2m + dy2m * dy2m);
        if (distM < REPULSE_RADIUS && distM > 0) {
          const force = (1 - distM / REPULSE_RADIUS) * REPULSE_STRENGTH;
          p.vx += (dx2m / distM) * force;
          p.vy += (dy2m / distM) * force;
        }

        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.baseVx + p.vx;
        p.y += p.baseVy + p.vy;

        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color.r + ',' + p.color.g + ',' + p.color.b + ',' + p.alpha + ')';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINE_DIST) {
            const lineAlpha = (1 - dist / LINE_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(' + p.color.r + ',' + p.color.g + ',' + p.color.b + ',' + lineAlpha + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (distM < MOUSE_CONNECT) {
          const mAlpha = (1 - distM / MOUSE_CONNECT) * 0.4;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(91,140,110,' + mAlpha + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    hero.addEventListener('mouseleave', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    hero.addEventListener('touchmove', (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    }, { passive: true });

    hero.addEventListener('touchend', () => {
      mouse.x = -9999;
      mouse.y = -9999;
    });
  })();

  /* ─── Interactive 3D Tilt Cards ─── */
  (function initTiltCards() {
    const cards = document.querySelectorAll('.glass-card');
    const MAX_TILT = 8;
    const GLOW_SIZE = 280;

    cards.forEach((card) => {
      const glowEl = document.createElement('div');
      glowEl.className = 'card-tilt-glow';
      card.style.position = 'relative';
      card.style.overflow = 'hidden';
      card.appendChild(glowEl);

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        const rotateX = ((y - cy) / cy) * -MAX_TILT;
        const rotateY = ((x - cx) / cx) * MAX_TILT;

        card.style.transform =
          'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02,1.02,1.02)';

        glowEl.style.opacity = '1';
        glowEl.style.left = (x - GLOW_SIZE / 2) + 'px';
        glowEl.style.top = (y - GLOW_SIZE / 2) + 'px';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
        glowEl.style.opacity = '0';
      });
    });
  })();

  /* ─── Text Scramble Effect on Section Labels ─── */
  (function initTextScramble() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';
    const labels = document.querySelectorAll('.label-text');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrambleReveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    labels.forEach((el) => observer.observe(el));

    function scrambleReveal(el) {
      const original = el.textContent;
      const length = original.length;
      let iteration = 0;
      const interval = setInterval(() => {
        el.textContent = original
          .split('')
          .map((char, i) => {
            if (i < iteration) return original[i];
            if (char === ' ' || char === '/') return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        iteration += 0.6;
        if (iteration >= length) {
          el.textContent = original;
          clearInterval(interval);
        }
      }, 30);
    }
  })();
});
