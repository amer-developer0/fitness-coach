/* ════════════════════════════════════════
   SCROLL.JS
   - Progress bar
   - Reveal on scroll (IntersectionObserver)
════════════════════════════════════════ */

const progressBar = document.getElementById('progress-bar');

/* ══ PROGRESS BAR ══ */
function updateProgressBar() {
  const scrolled = window.scrollY;
  const total    = document.body.scrollHeight - window.innerHeight;
  const ratio    = Math.min(scrolled / Math.max(total, 1), 1);
  progressBar.style.transform = `scaleX(${ratio})`;
}

/* ══ REVEAL ON SCROLL ══ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(
        () => entry.target.classList.add('visible'),
        i * 65
      );
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal')
        .forEach(el => revealObserver.observe(el));

/* ══ SCROLL LISTENER ══ */
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(() => {
      updateProgressBar();
      ticking = false;
    });
  }
}, { passive: true });

/* run once on load */
updateProgressBar();