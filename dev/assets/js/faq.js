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