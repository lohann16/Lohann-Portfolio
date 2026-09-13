// Fade in on scroll
  const els = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));

  // Language toggle (EN / FR) — translates hero, about, and contact copy
  (function () {
    var toggle = document.getElementById('lang-toggle');
    if (!toggle) return;

    var stored = null;
    try { stored = localStorage.getItem('site-lang'); } catch (e) { /* storage unavailable, default to EN */ }
    var lang = stored === 'fr' ? 'fr' : 'en';

    function apply(lang) {
      document.documentElement.setAttribute('lang', lang);
      document.querySelectorAll('[data-en]').forEach(function (el) {
        var value = lang === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
        if (value !== null) el.textContent = value;
      });
      toggle.textContent = lang === 'fr' ? 'EN' : 'FR';
      toggle.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
    }

    apply(lang);

    toggle.addEventListener('click', function () {
      lang = lang === 'fr' ? 'en' : 'fr';
      try { localStorage.setItem('site-lang', lang); } catch (e) { /* ignore if storage unavailable */ }
      apply(lang);
    });
  })();

  // Smooth active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    links.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  });