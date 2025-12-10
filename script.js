/**
 * AI-Powered Portfolio - Advanced Interactions & Animations
 * Author: Alisha Patel
 */

// ============================================
// THEME MANAGEMENT & AI PERSONALIZATION
// ============================================

class AIPersonalization {
    constructor() {
        this.visitCount = parseInt(localStorage.getItem('visitCount') || '0') + 1;
        localStorage.setItem('visitCount', this.visitCount.toString());
        this.lastVisit = localStorage.getItem('lastVisit');
        localStorage.setItem('lastVisit', new Date().toISOString());
        this.scrollPatterns = JSON.parse(localStorage.getItem('scrollPatterns') || '{}');
    }

    getTimeBasedGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 17) return 'Good afternoon';
        if (hour < 21) return 'Good evening';
        return 'Hello, night owl';
    }

    getPersonalizedMessage() {
        const greeting = this.getTimeBasedGreeting();
        
        if (this.visitCount === 1) {
            return `${greeting}! Welcome to my portfolio. I'm excited to show you my work.`;
        } else if (this.visitCount < 5) {
            return `${greeting}! Great to see you again. You've visited ${this.visitCount} times now.`;
        } else {
            return `${greeting}! Welcome back, loyal visitor #${this.visitCount}! Your interest means a lot.`;
        }
    }

    trackScrollPattern(section) {
        if (!this.scrollPatterns[section]) {
            this.scrollPatterns[section] = 0;
        }
        this.scrollPatterns[section]++;
        localStorage.setItem('scrollPatterns', JSON.stringify(this.scrollPatterns));
    }

    getMostViewedSection() {
        let maxViews = 0;
        let mostViewed = null;
        for (const [section, views] of Object.entries(this.scrollPatterns)) {
            if (views > maxViews) {
                maxViews = views;
                mostViewed = section;
            }
        }
        return mostViewed;
    }
}

// ============================================
// THEME TOGGLE
// ============================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateToggleButton();
    }

    toggle() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        this.updateToggleButton();
        
        // Add transition class for smooth theme change
        document.body.classList.add('theme-transitioning');
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 300);
    }

    updateToggleButton() {
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = this.theme === 'dark' 
                ? '<i class="bi bi-sun-fill"></i>' 
                : '<i class="bi bi-moon-fill"></i>';
        }
    }
}

// ============================================
// PARTICLES NEURAL NETWORK BACKGROUND
// ============================================

class NeuralNetwork {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.connections = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
        this.createParticles();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const numberOfParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        for (let i = 0; i < numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: `hsla(${170 + Math.random() * 60}, 70%, 60%, ${0.5 + Math.random() * 0.5})`
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach((particle, index) => {
            // Mouse interaction
            if (this.mouse.x !== null) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.mouse.radius) {
                    const force = (this.mouse.radius - distance) / this.mouse.radius;
                    particle.vx -= (dx / distance) * force * 0.02;
                    particle.vy -= (dy / distance) * force * 0.02;
                }
            }

            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();

            // Connect particles
            for (let j = index + 1; j < this.particles.length; j++) {
                const other = this.particles[j];
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(0, 171, 174, ${1 - distance / 120})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                }
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// TYPEWRITER EFFECT
// ============================================

class Typewriter {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ============================================
// SCROLL ANIMATIONS & PROGRESS
// ============================================

class ScrollAnimations {
    constructor() {
        this.progressBar = document.getElementById('scrollProgress');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.onScroll());
        this.observeElements();
    }

    onScroll() {
        // Update progress bar
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        if (this.progressBar) {
            this.progressBar.style.width = `${progress}%`;
        }

        // Parallax effect for hero
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.transform = `translateY(${scrollTop * 0.3}px)`;
        }
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Animate skill bars when visible
                    if (entry.target.classList.contains('skill-item')) {
                        const bar = entry.target.querySelector('.skill-fill');
                        if (bar) {
                            const percentage = bar.dataset.percentage;
                            bar.style.width = `${percentage}%`;
                        }
                    }

                    // Animate circular progress
                    if (entry.target.classList.contains('circular-progress')) {
                        const circle = entry.target.querySelector('.progress-ring-fill');
                        if (circle) {
                            const percentage = circle.dataset.percentage;
                            const circumference = 2 * Math.PI * 54;
                            circle.style.strokeDashoffset = circumference - (percentage / 100) * circumference;
                        }
                    }
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.animate-on-scroll, .skill-item, .circular-progress, .project-card').forEach(el => {
            observer.observe(el);
        });
    }
}

// ============================================
// 3D TILT EFFECT FOR CARDS
// ============================================

class TiltEffect {
    constructor(elements) {
        this.elements = elements;
        this.init();
    }

    init() {
        this.elements.forEach(el => {
            el.addEventListener('mousemove', (e) => this.onMouseMove(e, el));
            el.addEventListener('mouseleave', (e) => this.onMouseLeave(el));
        });
    }

    onMouseMove(e, el) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    onMouseLeave(el) {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ============================================
// PROJECT MODAL / LIGHTBOX
// ============================================

class ProjectModal {
    constructor() {
        this.modal = document.getElementById('projectModal');
        this.init();
    }

    init() {
        document.querySelectorAll('.project-expand-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.project-card');
                this.open(card);
            });
        });

        if (this.modal) {
            this.modal.querySelector('.modal-close').addEventListener('click', () => this.close());
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) this.close();
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    }

    open(card) {
        if (!this.modal) return;
        
        const title = card.querySelector('.card-title').textContent;
        const description = card.querySelector('.card-text').innerHTML;
        const video = card.querySelector('video');

        this.modal.querySelector('.modal-title').textContent = title;
        this.modal.querySelector('.modal-description').innerHTML = description;
        
        if (video) {
            const modalVideo = this.modal.querySelector('.modal-video');
            modalVideo.src = video.src;
            modalVideo.load();
        }

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        if (!this.modal) return;
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        const modalVideo = this.modal.querySelector('.modal-video');
        if (modalVideo) {
            modalVideo.pause();
        }
    }
}

// ============================================
// LAZY VIDEO LOADING
// ============================================

class LazyVideoLoader {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.lazy-video').forEach(video => {
            video.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });

            // Custom play button overlay
            const wrapper = video.closest('.video-wrapper');
            if (wrapper) {
                const playBtn = wrapper.querySelector('.video-play-btn');
                if (playBtn) {
                    playBtn.addEventListener('click', () => {
                        video.play();
                        playBtn.style.opacity = '0';
                    });

                    video.addEventListener('pause', () => {
                        playBtn.style.opacity = '1';
                    });

                    video.addEventListener('play', () => {
                        playBtn.style.opacity = '0';
                    });
                }
            }
        });
    }
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Real-time validation
        this.form.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    validateField(input) {
        const value = input.value.trim();
        let isValid = true;
        let message = '';

        if (input.required && !value) {
            isValid = false;
            message = 'This field is required';
        } else if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Please enter a valid email';
            }
        }

        if (!isValid) {
            this.showError(input, message);
        } else {
            this.clearError(input);
        }

        return isValid;
    }

    showError(input, message) {
        input.classList.add('error');
        const errorEl = input.parentElement.querySelector('.error-message');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.style.opacity = '1';
        }
    }

    clearError(input) {
        input.classList.remove('error');
        const errorEl = input.parentElement.querySelector('.error-message');
        if (errorEl) {
            errorEl.style.opacity = '0';
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        let isValid = true;
        this.form.querySelectorAll('input, textarea').forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) return;

        const submitBtn = this.form.querySelector('button[type="submit"]');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form service)
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            this.showSuccess();
            this.form.reset();
        } catch (error) {
            this.showError(submitBtn, 'Something went wrong. Please try again.');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    }

    showSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = '<i class="bi bi-check-circle"></i> Message sent successfully!';
        this.form.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }
}

// ============================================
// FLOATING TECH ICONS
// ============================================

class FloatingIcons {
    constructor() {
        this.container = document.querySelector('.floating-icons');
        this.icons = [];
        this.init();
    }

    init() {
        if (!this.container) return;
        
        this.icons = this.container.querySelectorAll('.float-icon');
        this.animate();
    }

    animate() {
        this.icons.forEach((icon, index) => {
            const delay = index * 0.2;
            icon.style.animationDelay = `${delay}s`;
        });
    }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        if (!this.navbar) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    }
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AI Personalization
    const ai = new AIPersonalization();
    
    // Set personalized greeting
    const greetingEl = document.getElementById('aiGreeting');
    if (greetingEl) {
        greetingEl.textContent = ai.getPersonalizedMessage();
    }

    // Initialize Theme Manager
    const themeManager = new ThemeManager();
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => themeManager.toggle());
    }

    // Initialize Neural Network Background
    const canvas = document.getElementById('neuralCanvas');
    if (canvas) {
        new NeuralNetwork(canvas);
    }

    // Initialize Typewriter
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        new Typewriter(typewriterEl, [
            'Web Application Developer',
            'Frontend Enthusiast',
            'Creative Problem Solver',
            'Tech Explorer'
        ], 100);
    }

    // Initialize Scroll Animations
    new ScrollAnimations();

    // Initialize Smooth Scroll
    new SmoothScroll();

    // Initialize 3D Tilt Effect
    const tiltElements = document.querySelectorAll('.project-card, .glass-card');
    if (tiltElements.length) {
        new TiltEffect(tiltElements);
    }

    // Initialize Project Modal
    new ProjectModal();

    // Initialize Lazy Video Loader
    new LazyVideoLoader();

    // Initialize Contact Form
    new ContactForm();

    // Initialize Floating Icons
    new FloatingIcons();

    // Initialize Navbar Scroll
    new NavbarScroll();

    // Add staggered animation to project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });

    // Track section views for AI personalization
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ai.trackScrollPattern(entry.target.id);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section[id]').forEach(section => {
        sectionObserver.observe(section);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
});
