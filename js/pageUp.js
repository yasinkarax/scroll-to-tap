(() => {
  const upEl = document.getElementById('up');
  if (!upEl) return;

  const contentEl = document.querySelector('.content');
  const scrollSize = 400;

  const bgLeft0 = [14, 20, 40];
  const bgLeft1 = [32, 10, 70];
  const bgLeft2 = [10, 60, 120];

  const bgRight0 = [90, 25, 140];
  const bgRight1 = [160, 60, 220];
  const bgRight2 = [60, 180, 240];

  const bgMid0 = [30, 140, 220];
  const bgMid1 = [120, 40, 200];
  const bgMid2 = [45, 210, 120];

  const accent0 = [0, 200, 255];
  const accent1 = [255, 110, 210];
  const accent2 = [0, 255, 170];

  function mix(a, b, t) {
    return [
      Math.round(a[0] + (b[0] - a[0]) * t),
      Math.round(a[1] + (b[1] - a[1]) * t),
      Math.round(a[2] + (b[2] - a[2]) * t),
    ];
  }

  function updateVisibility() {
    const shouldShow = window.scrollY >= scrollSize;
    upEl.style.display = shouldShow ? 'flex' : 'none';
  }

  function updateBackground() {
    if (!contentEl) return;
    const doc = document.documentElement;
    const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
    const p = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);

    const tt = p < 0.5 ? p * 2 : (1 - p) * 2;
    const midBoost = 1 - Math.abs(p - 0.5) * 2;

    const bgLeft = p < 0.5 ? mix(bgLeft0, bgLeft1, p / 0.5) : mix(bgLeft1, bgLeft2, (p - 0.5) / 0.5);
    const bgRight = p < 0.5 ? mix(bgRight0, bgRight1, p / 0.5) : mix(bgRight1, bgRight2, (p - 0.5) / 0.5);
    const bgMid = p < 0.5 ? mix(bgMid0, bgMid1, p / 0.5) : mix(bgMid1, bgMid2, (p - 0.5) / 0.5);
    const accent = p < 0.5 ? mix(accent0, accent1, p / 0.5) : mix(accent1, accent2, (p - 0.5) / 0.5);

    contentEl.style.setProperty('--page-bg-left', `${bgLeft[0]} ${bgLeft[1]} ${bgLeft[2]}`);
    contentEl.style.setProperty('--page-bg-mid', `${bgMid[0]} ${bgMid[1]} ${bgMid[2]}`);
    contentEl.style.setProperty('--page-bg-right', `${bgRight[0]} ${bgRight[1]} ${bgRight[2]}`);

    const glassAlpha = 0.1 + 0.16 * midBoost;
    const glassBorderAlpha = 0.22 + 0.22 * midBoost;
    upEl.style.setProperty('--glass-alpha', glassAlpha.toFixed(3));
    upEl.style.setProperty('--glass-border-alpha', glassBorderAlpha.toFixed(3));
    upEl.style.setProperty('--up-accent', `${accent[0]} ${accent[1]} ${accent[2]}`);

  }

  updateVisibility();
  updateBackground();

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateVisibility();
      updateBackground();
      ticking = false;
    });
  });

  function pageUp() {
    try {
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
      const scrollBehavior = window.getComputedStyle(document.documentElement).scrollBehavior;
      const behavior = reducedMotion
        ? 'auto'
        : scrollBehavior === 'smooth'
          ? 'smooth'
          : 'auto';

      window.scrollTo({ top: 0, behavior });
    } catch (e) {
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