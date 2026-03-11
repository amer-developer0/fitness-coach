/* ════════════════════════════════════════
   COUNTDOWN.JS
   عداد 24 ساعة من أول زيارة.
   يُخزَّن في localStorage — لو المستخدم
   رجع قبل ما يخلص الوقت، يكمل من حيث وقف.
════════════════════════════════════════ */

(function () {

  const STORAGE_KEY = 'fit90_countdown_end';
  const DURATION_MS = 24 * 60 * 60 * 1000; /* 24 ساعة */

  const hEl = document.getElementById('cd-h');
  const mEl = document.getElementById('cd-m');
  const sEl = document.getElementById('cd-s');

  /* لو أي عنصر مش موجود في الصفحة، ما نشغلش */
  if (!hEl || !mEl || !sEl) return;

  /* جيب أو اعمل وقت النهاية */
  let endTime = parseInt(localStorage.getItem(STORAGE_KEY), 10);

  if (!endTime || endTime < Date.now()) {
    endTime = Date.now() + DURATION_MS;
    localStorage.setItem(STORAGE_KEY, endTime);
  }

  /* ══ TICK ══ */
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
      /* وقت العرض انتهى — اخفي الكارد أو غير النص */
      const strip = document.querySelector('.cd-strip');
      if (strip) strip.style.display = 'none';
    }
  }

  tick();

})();