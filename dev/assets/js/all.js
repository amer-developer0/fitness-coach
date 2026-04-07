// ======= NAV & SCROLL REVEAL =======
const nav = document.getElementById('topNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));


// ======= FAQ =======
function tog(btn) {
  const ans = btn.nextElementSibling;
  const open = btn.classList.contains('open');
  document.querySelectorAll('.faq-btn').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!open) {
    btn.classList.add('open');
    ans.classList.add('open');
  }
}


// ======= PRICING TABS =======
document.querySelectorAll('.pricing-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.pricing-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pricing-cards').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('tab-' + this.dataset.tab).classList.add('active');
  });
});


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

  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });

  window.addEventListener('resize', checkDesktop);
  checkDesktop();
})();
