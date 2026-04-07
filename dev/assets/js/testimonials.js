// ======= TRANSFORMATIONS CAROUSEL =======
(function() {
  const track   = document.getElementById('transformsTrack');
  const cards   = Array.from(track.querySelectorAll('.tr-card'));
  const dots    = Array.from(document.querySelectorAll('.tr-dot'));
  const btnPrev = document.querySelector('.tr-prev');
  const btnNext = document.querySelector('.tr-next');

  let current = 0;
  const total = cards.length;

  function getCardWidth() {
    return cards[0].getBoundingClientRect().width + 12; // gap = 12px
  }

  function goTo(index) {
    current = (index + total) % total;

    const outer    = document.querySelector('.transforms-track-outer');
    const outerW   = outer.getBoundingClientRect().width;
    const cardW    = getCardWidth();
    const offset   = (current * cardW) - (outerW / 2 - cardW / 2);

    track.style.transform = `translateX(${offset}px)`;

    cards.forEach((c, i) => c.classList.toggle('active-card', i === current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  // desktop: no carousel, just mark all active
  function checkDesktop() {
    if (window.innerWidth >= 900) {
      track.style.transform = '';
      cards.forEach(c => c.classList.add('active-card'));
    } else {
      goTo(current);
    }
  }

  btnPrev.addEventListener('click', () => goTo(current - 1));
  btnNext.addEventListener('click', () => goTo(current + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  // touch swipe
  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });

  window.addEventListener('resize', checkDesktop);
  checkDesktop();
})();