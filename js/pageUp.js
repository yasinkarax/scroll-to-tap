(() => {
  const upEl = document.getElementById('up');
  if (!upEl) return;

  const scrollSize = 600;

  function updateVisibility() {
    const shouldShow = window.scrollY >= scrollSize;
    // `#up` styles assume flex centering (justify-content/align-items).
    upEl.style.display = shouldShow ? 'flex' : 'none';
  }

  // Initial state (page refreshed while scrolled).
  updateVisibility();

  // Throttle scroll handler with requestAnimationFrame for smoother performance.
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateVisibility();
      ticking = false;
    });
  });

  function pageUp() {
    // Prefer modern API; fall back for older browsers.
    try {
      // Keep README behavior: if user removes `scroll-behavior: smooth;`,
      // then default to non-smooth scrolling.
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
      const scrollBehavior = window.getComputedStyle(document.documentElement).scrollBehavior;
      const behavior = reducedMotion
        ? 'auto'
        : scrollBehavior === 'smooth'
          ? 'smooth'
          : 'auto';

      window.scrollTo({ top: 0, behavior });
    } catch (e) {
      // Safari/old browsers fallback.
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  upEl.addEventListener('click', pageUp);
  upEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pageUp();
    }
  });
})();