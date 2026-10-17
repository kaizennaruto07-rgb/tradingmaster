/* Position Size Calculator — risk-budget sizing + cost-aware shares + SVG chart.
   Pure vanilla JS, no dependencies. Works standalone (also used for Node sanity tests).
   Math: riskAmount = account * riskPct/100; stopDistance = entry - stop (long);
   effRisk = riskAmount - 2*brokerage (when cost-aware); shares = floor(effRisk / stopDistance). */
(function () {
  'use strict';

  // ---- pure math (no DOM): everything above this line is Node-testable ----

  // Core sizing. Returns { ok, errors[], riskAmount, stopDistance, brokerageRoundTrip,
  // effRisk, shares, positionValue, pctDeployed }. Shares are floored to whole units.
  function calcPosition(account, riskPct, entry, stop, brokerage, costAware) {
    var errs = [];
    if (!(account > 0)) errs.push('Account size must be above zero.');
    if (!(riskPct > 0 && riskPct <= 100)) errs.push('Risk per trade must be between 0% and 100%.');
    if (!(entry > 0)) errs.push('Entry price must be above zero.');
    if (!(stop > 0)) errs.push('Stop-loss price must be above zero.');
    var distance = entry - stop;
    if (errs.length === 0 && !(distance > 0))
      errs.push('Stop-loss must sit below entry (long position): the stop distance has to be positive.');
    var riskAmount = account * riskPct / 100;
    var brok = costAware ? 2 * (brokerage || 0) : 0;
    if (errs.length === 0 && brok >= riskAmount)
      errs.push('Round-trip brokerage eats the entire risk budget — raise the risk % or lower the brokerage.');
    if (errs.length) return { ok: false, errors: errs };
    var effRisk = riskAmount - brok;
    var shares = Math.floor(effRisk / distance);
    var positionValue = shares * entry;
    return {
      ok: true, errors: [],
      riskAmount: riskAmount, stopDistance: distance,
      brokerageRoundTrip: brok, effRisk: effRisk,
      shares: shares, positionValue: positionValue,
      pctDeployed: positionValue / account * 100
    };
  }

  // Classical risk of ruin (same formula as ror-calc.js) — for the tie-in line.
  // p = win probability, b = payoff ratio, riskPct = risk per trade %.
  function classicalRoR(p, b, riskPct) {
    if (!(p > 0 && p < 1) || !(b > 0) || !(riskPct > 0)) return 1;
    var E = p * b - (1 - p);
    if (E <= 0) return 1;
    if (E >= 1) return 0;
    return Math.pow((1 - E) / (1 + E), 100 / riskPct);
  }

  // Indian number formatting: lakh / crore for large values (identical to ror-calc.js).
  function fmtINR(v) {
    var neg = v < 0;
    var a = Math.abs(v);
    var s;
    if (a >= 10000000) s = '₹' + (a / 10000000).toFixed(2) + ' Cr';
    else if (a >= 100000) s = '₹' + (a / 100000).toFixed(2) + ' L';
    else if (a >= 1000) s = '₹' + a.toLocaleString('en-IN', { maximumFractionDigits: 0 });
    else s = '₹' + a.toFixed(0);
    return (neg ? '−' : '') + s;
  }

  function fmtShares(v) { return Math.round(v).toLocaleString('en-IN'); }

  function fmtPct(v, digits) {
    return v.toFixed(digits === undefined ? 1 : digits) + '%';
  }

  // ---- DOM wiring (browser only) ----
  if (typeof document === 'undefined') {
    if (typeof module !== 'undefined') {
      module.exports = {
        calcPosition: calcPosition, classicalRoR: classicalRoR,
        fmtINR: fmtINR, fmtShares: fmtShares
      };
    }
    return;
  }

  var $ = function (id) { return document.getElementById(id); };

  var els = {};
  ['pAccount', 'pRisk', 'pRiskVal', 'pEntry', 'pStop', 'pBrok', 'pCostAware',
   'pValidation', 'pShares', 'pValue', 'pRiskAmt', 'pDist', 'pDeployed',
   'pEffRisk', 'pRorTie', 'pZeroNote',
   'pCurve', 'pShare', 'pRunBtn', 'pCopyBtn', 'pCopyMsg', 'pExample'
  ].forEach(function (id) { els[id] = $(id); });

  if (!els.pAccount) return; // not on this page

  var C = {
    p50: '#14d991', label: '#c8d8d0', grid: '#21332b',
    profit: '#14d991', loss: '#ff6b6b', accent: '#b78cff', danger: '#ff6b6b'
  };
  var MONO = '600 10px ui-monospace, SFMono-Regular, Menlo, monospace';

  // The key visual: shares vs stop distance is a hyperbola — tighter stop,
  // bigger size for the same risk budget. Marker shows your current setup.
  function drawSharesCurve(effRisk, curDist, curShares) {
    var svg = els.pCurve;
    var W = 620, H = 300, padL = 56, padR = 14, padT = 26, padB = 34;
    var dMin = Math.max(curDist / 4, 0.5), dMax = curDist * 3;
    var STEPS = 80;
    var pts = [];
    for (var i = 0; i <= STEPS; i++) {
      var d = dMin + (dMax - dMin) * i / STEPS;
      pts.push([d, effRisk / d]);
    }
    var yMax = Math.max(effRisk / dMin, curShares, 1);
    function X(d) { return padL + ((d - dMin) / (dMax - dMin)) * (W - padL - padR); }
    function Y(s) { return padT + (1 - Math.min(s, yMax) / yMax) * (H - padT - padB); }
    function linePath() {
      return pts.map(function (pt, j) {
        return (j ? 'L' : 'M') + X(pt[0]).toFixed(1) + ',' + Y(pt[1]).toFixed(1);
      }).join(' ');
    }

    var html = '';
    html += '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="transparent"/>';
    // y gridlines (shares)
    [0, 0.5, 1].forEach(function (f) {
      var v = yMax * f, yy = Y(v).toFixed(1);
      html += '<line x1="' + padL + '" y1="' + yy + '" x2="' + (W - padR) + '" y2="' + yy + '" stroke="' + C.grid + '" stroke-width="1" opacity="0.7"/>';
      html += '<text x="' + (padL - 8) + '" y="' + (parseFloat(yy) + 3) + '" text-anchor="end" font="' + MONO + '" fill="' + C.label + '">' + fmtShares(v) + '</text>';
    });
    html += '<text x="14" y="' + (padT + 4) + '" font="' + MONO + '" fill="' + C.label + '">shares</text>';
    // x labels (stop distance ₹)
    [dMin, curDist, dMax].forEach(function (dd, k) {
      html += '<text x="' + X(dd).toFixed(1) + '" y="' + (H - 18) + '" text-anchor="middle" font="' + MONO + '" fill="' + (k === 1 ? C.p50 : C.label) + '">₹' + dd.toFixed(dd < 10 ? 1 : 0) + '</text>';
    });
    html += '<text x="' + ((padL + W - padR) / 2).toFixed(1) + '" y="' + (H - 4) + '" text-anchor="middle" font="' + MONO + '" fill="' + C.label + '">stop distance (₹)</text>';
    // the hyperbola
    html += '<path d="' + linePath() + '" fill="none" stroke="' + C.p50 + '" stroke-width="2.5" stroke-linejoin="round"/>';
    // your marker
    var cx = X(curDist).toFixed(1), cy = Y(curShares).toFixed(1);
    html += '<line x1="' + cx + '" y1="' + padT + '" x2="' + cx + '" y2="' + (H - padB) + '" stroke="' + C.label + '" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>';
    html += '<circle cx="' + cx + '" cy="' + cy + '" r="5.5" fill="' + C.accent + '" stroke="#0d1f17" stroke-width="2"/>';
    html += '<text x="' + cx + '" y="' + (parseFloat(cy) - 12) + '" text-anchor="middle" font="' + MONO + '" fill="' + C.accent + '">you: ' + fmtShares(curShares) + '</text>';

    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = html;
  }

  function readInputs() {
    return {
      account: parseFloat(els.pAccount.value),
      riskPct: parseFloat(els.pRisk.value),
      entry: parseFloat(els.pEntry.value),
      stop: parseFloat(els.pStop.value),
      brokerage: parseFloat(els.pBrok.value) || 0,
      costAware: els.pCostAware.checked
    };
  }

  function shareText(o, r) {
    return 'My position size: ' + fmtShares(r.shares) + ' shares (' + fmtINR(r.positionValue) +
      ' deployed, ' + fmtPct(r.pctDeployed, 1) + ' of ' + fmtINR(o.account) + ' account) at ' +
      fmtPct(o.riskPct, o.riskPct < 1 ? 2 : 1) + ' risk — entry ' + fmtINR(o.entry) +
      ', stop ' + fmtINR(o.stop) + '. — Position Size Calculator, Monks Of Market';
  }

  var debounce = null;
  function run() {
    var o = readInputs();
    var r = calcPosition(o.account, o.riskPct, o.entry, o.stop, o.brokerage, o.costAware);
    if (!r.ok) {
      els.pValidation.innerHTML = r.errors.map(function (e) { return '<div>' + e + '</div>'; }).join('');
      return;
    }
    els.pValidation.innerHTML = '';

    els.pShares.textContent = fmtShares(r.shares);
    els.pValue.textContent = fmtINR(r.positionValue);
    els.pRiskAmt.textContent = fmtINR(r.riskAmount);
    els.pDist.textContent = fmtINR(r.stopDistance);
    els.pDeployed.textContent = fmtPct(r.pctDeployed, 1);
    els.pEffRisk.textContent = o.costAware
      ? fmtINR(r.effRisk) + ' (after ' + fmtINR(r.brokerageRoundTrip) + ' brokerage)'
      : fmtINR(r.effRisk);

    if (r.shares === 0) {
      els.pZeroNote.style.display = 'block';
      els.pZeroNote.textContent = 'Zero shares: your risk budget cannot cover even one share at this stop distance. Raise the risk %, use a tighter stop, or add capital — never widen the stop just to fit size.';
    } else {
      els.pZeroNote.style.display = 'none';
    }

    // Risk-of-ruin tie-in: classical RoR at 40% win / 2R with this risk %.
    var ror = classicalRoR(0.4, 2, o.riskPct) * 100;
    var rorTxt = ror < 0.01 ? '<0.01%' : fmtPct(ror, 2);
    els.pRorTie.innerHTML = 'At a 40% win rate with 2:1 payoff, risking ' +
      fmtPct(o.riskPct, o.riskPct < 1 ? 2 : 1) + ' per trade carries ≈' + rorTxt +
      ' classical ruin risk. <a href="/tools/risk-of-ruin/">Check your real ruin number →</a>';

    els.pShare.value = shareText(o, r);
    drawSharesCurve(r.effRisk, r.stopDistance, r.shares);
  }

  function queue() {
    clearTimeout(debounce);
    debounce = setTimeout(run, 300);
  }

  function syncLabels() {
    var rv = parseFloat(els.pRisk.value);
    els.pRiskVal.textContent = (rv < 1 ? rv.toFixed(2) : rv.toFixed(1)) + '%';
  }

  ['pAccount', 'pRisk', 'pEntry', 'pStop', 'pBrok'].forEach(function (id) {
    els[id].addEventListener('input', function () { syncLabels(); queue(); });
  });
  els.pCostAware.addEventListener('change', queue);
  els.pRunBtn.addEventListener('click', run);

  els.pExample.addEventListener('click', function () {
    els.pAccount.value = 100000;
    els.pRisk.value = 1;
    els.pEntry.value = 250;
    els.pStop.value = 240;
    els.pBrok.value = 20;
    els.pCostAware.checked = true;
    syncLabels(); run();
  });

  els.pCopyBtn.addEventListener('click', function () {
    var txt = els.pShare.value;
    function done() {
      els.pCopyMsg.textContent = 'Copied — paste it anywhere.';
      setTimeout(function () { els.pCopyMsg.textContent = ''; }, 2500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(done, function () {
        els.pShare.select(); document.execCommand('copy'); done();
      });
    } else {
      els.pShare.select(); document.execCommand('copy'); done();
    }
  });

  syncLabels();
  run();
})();
