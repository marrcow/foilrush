// FoilRush — main.js

// ── Sticky nav ──
const nav = document.getElementById('site-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav-scrolled', window.scrollY > 80);
}, { passive: true });

// ── Mobile menu toggle ──
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Scroll-reveal ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));
