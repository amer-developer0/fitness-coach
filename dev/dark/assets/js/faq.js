/* ════════════════════════════════════════
   FAQ.JS
   Accordion — one item open at a time
   + ARIA aria-expanded sync
════════════════════════════════════════ */

document.querySelectorAll('.faq-q').forEach(btn => {

  btn.addEventListener('click', () => {
    const item    = btn.closest('.faq-item');
    const isOpen  = item.classList.contains('open');

    /* close all */
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });

    /* open clicked — only if it was closed */
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

});