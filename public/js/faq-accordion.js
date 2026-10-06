// Converts article markdown FAQ sections into accordions.
// Markdown pattern: <h3>Frequently asked questions</h3> followed by
// <p><strong>Question?</strong>\nAnswer...</p> blocks.
// Runs automatically on every article page — no per-article work needed.
(function () {
  function initFaqToggle(scope) {
    scope.querySelectorAll('[data-faq]').forEach(function (item) {
      if (item.dataset.faqInit) return;
      item.dataset.faqInit = '1';
      var btn = item.querySelector('.faq-q');
      var ans = item.querySelector('.faq-a');
      btn.addEventListener('click', function () {
        var isOpen = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) {
          ans.removeAttribute('hidden');
          ans.style.maxHeight = ans.scrollHeight + 'px';
        } else {
          ans.style.maxHeight = '0';
          setTimeout(function () {
            if (!item.classList.contains('open')) ans.setAttribute('hidden', '');
          }, 300);
        }
      });
    });
  }

  function buildAccordion(container, faqs) {
    var section = document.createElement('div');
    section.className = 'faq-section';
    var list = document.createElement('div');
    list.className = 'faq-list';
    faqs.forEach(function (f, i) {
      var item = document.createElement('div');
      item.className = 'faq-item';
      item.setAttribute('data-faq', '');
      item.innerHTML =
        '<button class="faq-q" aria-expanded="false">' +
        '<span></span><span class="faq-icon" aria-hidden="true">+</span></button>' +
        '<div class="faq-a" hidden><p></p></div>';
      item.querySelector('.faq-q span').textContent = f.q;
      item.querySelector('.faq-a p').textContent = f.a;
      list.appendChild(item);
    });
    section.appendChild(list);
    return section;
  }

  document.querySelectorAll('.article-body').forEach(function (body) {
    var headings = body.querySelectorAll('h2, h3');
    headings.forEach(function (h) {
      if (!/frequently asked questions/i.test(h.textContent)) return;
      var faqs = [];
      var toRemove = [h];
      var el = h.nextElementSibling;
      var pendingQ = null;
      var pendingA = [];
      function flush() {
        if (pendingQ && pendingA.length) {
          faqs.push({ q: pendingQ, a: pendingA.join('\n\n') });
        }
        pendingQ = null;
        pendingA = [];
      }
      while (el && !/^H[1-2]$/.test(el.tagName)) {
        if (el.tagName === 'H3') {
          // Format B: ### Question? as heading, answer in following <p>s
          flush();
          pendingQ = el.textContent.trim();
          toRemove.push(el);
        } else if (el.tagName === 'P') {
          var strong = el.querySelector('strong');
          if (strong && el.firstChild === strong && !pendingQ) {
            // Format A: <p><strong>Question?</strong>\nAnswer...</p>
            var q = strong.textContent.trim();
            var clone = el.cloneNode(true);
            clone.querySelector('strong').remove();
            var a = clone.textContent.replace(/^\s*\n/, '').trim();
            if (q && a) faqs.push({ q: q, a: a });
            toRemove.push(el);
          } else if (pendingQ) {
            pendingA.push(el.textContent.trim());
            toRemove.push(el);
          }
        }
        el = el.nextElementSibling;
      }
      flush();
      if (faqs.length) {
        var acc = buildAccordion(body, faqs);
        h.replaceWith(acc);
        toRemove.slice(1).forEach(function (n) { n.remove(); });
        initFaqToggle(acc);
      }
    });
  });

  // Also init any server-rendered accordions (tool pages)
  initFaqToggle(document);
})();
