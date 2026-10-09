/* Cookie consent banner — first-visit choice, persisted in localStorage. */
(function () {
  var KEY = 'mom-cookie-consent';
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;

  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  // Show only when the visitor has never chosen.
  if (!choice) banner.hidden = false;

  function apply(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
    banner.hidden = true;
    if (typeof window.gtag === 'function') {
      var s = v === 'accepted' ? 'granted' : 'denied';
      window.gtag('consent', 'update', {
        'ad_storage': s,
        'ad_user_data': s,
        'ad_personalization': s,
        'analytics_storage': s
      });
    }
  }

  var accept = document.getElementById('cookie-accept');
  var decline = document.getElementById('cookie-decline');
  if (accept) accept.addEventListener('click', function () { apply('accepted'); });
  if (decline) decline.addEventListener('click', function () { apply('declined'); });

  // Footer "Cookie settings" link re-opens the banner.
  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('[data-cookie-settings]')) {
      e.preventDefault();
      banner.hidden = false;
    }
  });
})();
