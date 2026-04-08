// Nav scroll effect
const nav = document.getElementById('topNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));



window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-bg');
    if (parallax) {
        let scrollPosition = window.pageYOffset;
        // تحريك الصورة بسرعة أبطأ من السكرول العادي (0.2)
        parallax.style.transform = 'translateY(' + (scrollPosition * 0.2) + 'px)';
    }
});