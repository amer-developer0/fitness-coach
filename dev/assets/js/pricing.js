// ======= PRICING TABS =======
document.querySelectorAll('.pricing-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.pricing-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pricing-cards').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    document.getElementById('tab-' + this.dataset.tab).classList.add('active');
  });
});