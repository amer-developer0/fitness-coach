const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
  const scrolled = window.scrollY;
  const total    = document.body.scrollHeight - window.innerHeight;
  const ratio    = Math.min(scrolled / Math.max(total, 1), 1);
  progressBar.style.transform = `scaleX(${ratio})`;
}

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

updateProgressBar();

document.querySelectorAll('.faq-q').forEach(btn => {

  btn.addEventListener('click', () => {
    const item    = btn.closest('.faq-item');
    const isOpen  = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

});

(function () {

  const STORAGE_KEY = 'fit90_countdown_end';
  const DURATION_MS = 24 * 60 * 60 * 1000;

  const hEl = document.getElementById('cd-h');
  const mEl = document.getElementById('cd-m');
  const sEl = document.getElementById('cd-s');

  if (!hEl || !mEl || !sEl) return;

  let endTime = parseInt(localStorage.getItem(STORAGE_KEY), 10);

  if (!endTime || endTime < Date.now()) {
    endTime = Date.now() + DURATION_MS;
    localStorage.setItem(STORAGE_KEY, endTime);
  }

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function tick() {
    const remaining = Math.max(0, endTime - Date.now());

    const hours   = Math.floor(remaining / 3_600_000);
    const minutes = Math.floor((remaining % 3_600_000) / 60_000);
    const seconds = Math.floor((remaining % 60_000) / 1_000);

    hEl.textContent = pad(hours);
    mEl.textContent = pad(minutes);
    sEl.textContent = pad(seconds);

    if (remaining > 0) {
      setTimeout(tick, 1_000);
    } else {
      const strip = document.querySelector('.cd-strip');
      if (strip) strip.style.display = 'none';
    }
  }

  tick();

})();