(async function () {

  // ─── جيب الداتا ────────────────────────────────────────────
  let cfg;
  try {
    const res = await fetch('assets/data/data.json', { cache: 'no-cache' });
    if (!res.ok) return;
    cfg = await res.json();
  } catch {
    return; // أي خطأ = فضل الـ HTML الافتراضي
  }

  // ─── Helper ────────────────────────────────────────────────
  const waLink = (text) =>
    `https://wa.me/${cfg.contact.whatsapp}?text=${encodeURIComponent(text)}`;

  // ══════════════════════════════════════════════════════════════
  // 1. رقم الواتساب — كل الأزرار
  // ══════════════════════════════════════════════════════════════
  document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
    const url  = new URL(a.getAttribute('href'));
    const text = url.searchParams.get('text') ?? '';
    a.href = `https://wa.me/${cfg.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  });

  // ══════════════════════════════════════════════════════════════
  // 2. Social Proof — عدد المتدربين
  // ══════════════════════════════════════════════════════════════
  const proofEl = document.querySelector('.proof-text strong');
  if (proofEl) proofEl.textContent = `${cfg.social_proof.students_count} متدرب`;

  // ══════════════════════════════════════════════════════════════
  // 3. طرق الدفع
  // ══════════════════════════════════════════════════════════════
  const paymentCards = document.querySelector('.payment-cards');
  if (paymentCards && cfg.payment_methods?.length) {

    const iconMap  = { instapay: 'fa-bolt', orange: 'fa-mobile-screen', bank: 'fa-building-columns' };
    const classMap = { instapay: 'instapay', orange: 'orange', bank: 'bank' };

    paymentCards.innerHTML = cfg.payment_methods.map(m => `
      <div class="payment-card">
        <div class="payment-icon ${classMap[m.type] ?? ''}">
          <i class="fa-solid ${iconMap[m.type] ?? 'fa-credit-card'}"></i>
        </div>
        <div class="payment-info">
          <h4>${m.label}</h4>
          <p>${m.account_name}${m.note   ? ' · ' + m.note   : ''}
                               ${m.branch ? ' · ' + m.branch : ''}</p>
          <span class="payment-num">${m.number}</span>
        </div>
      </div>
    `).join('');
  }

  // ══════════════════════════════════════════════════════════════
  // 4. الباقات — Monthly & Weekly
  // ══════════════════════════════════════════════════════════════
  const badgeIconMap = {
    'الأكثر طلبًا' : 'fa-star',
    'أفضل استثمار' : 'fa-trophy',
    'أعلى قيمة'    : 'fa-crown',
  };

  function buildCards(packages, tabId) {
    const container = document.getElementById(tabId);
    if (!container || !packages?.length) return;

    container.innerHTML = packages.map(p => `
      <div class="price-card ${p.featured ? 'featured' : ''} reveal">

        ${p.badge ? `
        <div class="price-badge">
          <i class="fa-solid ${badgeIconMap[p.badge] ?? 'fa-award'}"></i>
          ${p.badge}
        </div>` : ''}

        <div class="price-plan">
          ${p.plan}
          ${p.plan.includes('هدية') ? '<i class="fa-solid fa-gift"></i>' : ''}
        </div>

        <div class="price-amount">${p.price} <span class="price-cur">جنيه</span></div>
        <div class="price-original">${p.original_price ?? ''}</div>

        <ul class="price-feats">
          ${p.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
        </ul>

        <a href="${waLink(p.whatsapp_text)}"
           class="price-btn" target="_blank" rel="noopener noreferrer">ابدأ دلوقتي</a>

      </div>
    `).join('');

    // ── Fix: الكروت المحقونة مش بيشوفها الـ IntersectionObserver ──
    // لأنه اشتغل قبل ما الـ inject يحط العناصر في الـ DOM
    container.querySelectorAll('.reveal').forEach(el => el.classList.add('vis'));
  }

  buildCards(cfg.pricing?.monthly, 'tab-monthly');
  buildCards(cfg.pricing?.weekly,  'tab-weekly');

  // ══════════════════════════════════════════════════════════════
  // 5. الـ FAQ
  // ══════════════════════════════════════════════════════════════
  const faqList = document.querySelector('.faq-list');
  if (faqList && cfg.faq?.length) {
    faqList.innerHTML = cfg.faq.map(item => `
      <div class="faq-item">
        <button class="faq-btn" onclick="tog(this)">
          ${item.q}
          <span class="ico"><i class="fa-solid fa-chevron-down"></i></span>
        </button>
        <div class="faq-ans">${item.a}</div>
      </div>
    `).join('');
  }

})();
