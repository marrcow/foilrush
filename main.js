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
  toggle.setAttribute('aria-expanded', String(open));
  navLinks.setAttribute('aria-hidden', String(!open));
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    navLinks.setAttribute('aria-hidden', 'true');
  });
});

// ── Scroll-reveal with stagger delay ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = Number(entry.target.dataset.delay) || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ── Add to Cart placeholder ──
const addToCartBtn = document.querySelector('.buy-cta');
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    addToCartBtn.textContent = 'Added to Cart ✓';
    addToCartBtn.style.background = '#22a06b';
    setTimeout(() => {
      addToCartBtn.textContent = 'Add to Cart';
      addToCartBtn.style.background = '';
    }, 2000);
  });
}
