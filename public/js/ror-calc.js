/* Risk of Ruin Calculator — classical RoR + Monte Carlo cross-check + SVG charts.
   Pure vanilla JS, no dependencies. Works standalone (also used for Node sanity tests).
   Math: p = win probability (0..1), b = avg win / avg loss in risk units.
   Edge per trade E = p*b − (1−p). If E ≤ 0 → ruin = 100% (gambler's ruin).
   If E > 0 → RoR = ((1−E)/(1+E))^N, N = 100 / riskPct (risk units in the account). */
(function () {
  'use strict';

  var SIMS = 1000;

  function percentile(sorted, p) {
    if (!sorted.length) return 0;
    var i = (p / 100) * (sorted.length - 1);
    var lo = Math.floor(i), hi = Math.ceil(i);
    return sorted[lo] + (sorted[hi] - sorted[lo]) * (i - lo);
  }

  // Classical risk of ruin, fixed-fractional, infinite horizon. Returns fraction 0..1.
  function classicalRoR(p, b, riskPct) {
    if (!(p > 0 && p < 1) || !(b > 0) || !(riskPct > 0)) return 1;
    var E = p * b - (1 - p);
    if (E <= 0) return 1;   // no edge → eventual ruin is certain
    if (E >= 1) return 0;
    var N = 100 / riskPct;  // number of risk units the account holds
    return Math.pow((1 - E) / (1 + E), N);
  }

  // Edge per trade in risk units.
  function edgePerTrade(p, b) { return p * b - (1 - p); }

  // Maximum risk-per-trade (%) with RoR <= target (default 1%).
  // Returns null when no size is safe (no edge). Caps at 25%.
  function solveMaxRisk(p, b, target) {
    target = target === undefined ? 0.01 : target;
    var lo = 0.05, hi = 25;
    if (classicalRoR(p, b, lo) > target) return null;
    if (classicalRoR(p, b, hi) <= target) return hi;
    for (var i = 0; i < 60; i++) {
      var mid = (lo + hi) / 2;
      if (classicalRoR(p, b, mid) <= target) lo = mid; else hi = mid;
    }
    return lo;
  }

  // One simulated future: fixed-fractional risk on current capital (same engine as whatif-calc.js).
  function runOne(capital, winRate, winR, lossR, riskPct, trades, sampleEvery) {
    var eq = capital, peak = capital, maxDD = 0;
    var samples = [capital];
    for (var t = 1; t <= trades; t++) {
      var riskAmt = eq * riskPct / 100;
      var win = Math.random() * 100 < winRate;
      eq += win ? riskAmt * winR : -riskAmt * lossR;
      if (eq < 0) eq = 0;
      if (eq > peak) peak = eq;
      var dd = peak > 0 ? (peak - eq) / peak : 0;
      if (dd > maxDD) maxDD = dd;
      if (t % sampleEvery === 0 || t === trades) samples.push(eq);
    }
    return { final: eq, maxDD: maxDD, samples: samples };
  }

  // Monte Carlo cross-check: 1000 fixed-fractional paths.
  // "Effective ruin" = share of paths with max drawdown >= 90% (fixed-fractional
  // equity never hits exactly zero, so a deep-drawdown proxy is the honest label).
  function simulate(opts) {
    var capital = opts.capital, winRate = opts.winRate, winR = opts.winR,
        lossR = opts.lossR, riskPct = opts.riskPct, trades = opts.trades;
    var sampleEvery = Math.max(1, Math.ceil(trades / 60));
    var finals = new Array(SIMS), drawdowns = new Array(SIMS);
    var nSamples = Math.floor(trades / sampleEvery) + 2;
    var cols = [];
    for (var s = 0; s < nSamples; s++) cols.push(new Array(SIMS));

    for (var i = 0; i < SIMS; i++) {
      var r = runOne(capital, winRate, winR, lossR, riskPct, trades, sampleEvery);
      finals[i] = r.final;
      drawdowns[i] = r.maxDD;
      for (var k = 0; k < r.samples.length && k < nSamples; k++) cols[k][i] = r.samples[k];
    }
    finals.sort(function (a, b) { return a - b; });
    drawdowns.sort(function (a, b) { return a - b; });

    var p10 = [], p50 = [], p90 = [];
    for (var k2 = 0; k2 < nSamples; k2++) {
      var col = cols[k2].slice().sort(function (a, b) { return a - b; });
      p10.push(percentile(col, 10));
      p50.push(percentile(col, 50));
      p90.push(percentile(col, 90));
    }

    var effRuin = 0;
    for (var j = 0; j < SIMS; j++) if (drawdowns[j] >= 0.9) effRuin++;

    return {
      sims: SIMS,
      p10Final: percentile(finals, 10),
      p50Final: percentile(finals, 50),
      p90Final: percentile(finals, 90),
      mcRuinPct: effRuin / SIMS * 100,
      medianMaxDD: percentile(drawdowns, 50) * 100,
      p10: p10, p50: p50, p90: p90,
      nSamples: nSamples
    };
  }

  // Indian number formatting: lakh / crore for large values (identical to whatif-calc.js).
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

  function fmtPct(v, digits) {
    return v.toFixed(digits === undefined ? 1 : digits) + '%';
  }

  // ---- DOM wiring (browser only) ----
  if (typeof document === 'undefined') {
    if (typeof module !== 'undefined') {
      module.exports = {
        classicalRoR: classicalRoR, edgePerTrade: edgePerTrade,
        solveMaxRisk: solveMaxRisk, simulate: simulate, fmtINR: fmtINR
      };
    }
    return;
  }

  var $ = function (id) { return document.getElementById(id); };

  var els = {};
  ['rWinRate', 'rWinRateVal', 'rWinR', 'rLossR', 'rRisk', 'rRiskVal', 'rCapital',
   'rValidation', 'rRuinPct', 'rSurvival', 'rSolver', 'rSolverNote',
   'rClassical', 'rMcRuin', 'rMedDD', 'rEdge',
   'rCurve', 'rFan', 'rShare', 'rRunBtn', 'rCopyBtn', 'rCopyMsg', 'rExample'
  ].forEach(function (id) { els[id] = $(id); });

  if (!els.rWinRate) return; // not on this page

  var PRESETS = { '1:1': [1, 1], '1.5:1': [1.5, 1], '2:1': [2, 1], '3:1': [3, 1] };
  var TRADE_CHOICES = [100, 500, 1000];
  var curTrades = 500;

  function readInputs() {
    return {
      winRate: parseFloat(els.rWinRate.value),
      winR: parseFloat(els.rWinR.value),
      lossR: parseFloat(els.rLossR.value),
      riskPct: parseFloat(els.rRisk.value),
      capital: parseFloat(els.rCapital.value),
      trades: curTrades
    };
  }

  function validate(o) {
    var errs = [];
    if (!(o.winRate >= 10 && o.winRate <= 90)) errs.push('Win rate must be between 10% and 90%.');
    if (!(o.winR > 0)) errs.push('Average win must be above zero.');
    if (!(o.lossR > 0)) errs.push('Average loss must be above zero.');
    if (!(o.riskPct >= 0.25 && o.riskPct <= 10)) errs.push('Risk per trade must be between 0.25% and 10%.');
    if (!(o.capital > 0)) errs.push('Starting capital must be above zero.');
    return errs;
  }

  var C = {
    p50: '#14d991', p90: '#57c8f2', p10: '#ff6b6b', band: '#14d991',
    start: '#92a59c', label: '#c8d8d0', grid: '#21332b',
    profit: '#14d991', loss: '#ff6b6b', accent: '#b78cff', danger: '#ff6b6b'
  };
  var MONO = '600 10px ui-monospace, SFMono-Regular, Menlo, monospace';

  // (a) The killer visual: ruin probability curve vs risk per trade.
  function drawRuinCurve(p, b, curRisk, solverRisk) {
    var svg = els.rCurve;
    var W = 620, H = 300, padL = 46, padR = 14, padT = 26, padB = 30;
    var x0 = 0.25, x1 = 10;
    var STEPS = 90;
    var pts = [];
    for (var i = 0; i <= STEPS; i++) {
      var rk = x0 + (x1 - x0) * i / STEPS;
      pts.push([rk, classicalRoR(p, b, rk) * 100]);
    }
    function X(rk) { return padL + ((rk - x0) / (x1 - x0)) * (W - padL - padR); }
    function Y(v) { return padT + (1 - Math.min(v, 100) / 100) * (H - padT - padB); }
    function linePath() {
      return pts.map(function (pt, j) {
        return (j ? 'L' : 'M') + X(pt[0]).toFixed(1) + ',' + Y(pt[1]).toFixed(1);
      }).join(' ');
    }

    var html = '';
    html += '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="transparent"/>';
    // 1% safety threshold
    var y1 = Y(1).toFixed(1);
    html += '<line x1="' + padL + '" y1="' + y1 + '" x2="' + (W - padR) + '" y2="' + y1 + '" stroke="' + C.accent + '" stroke-width="1" stroke-dasharray="5 5" opacity="0.85"/>';
    html += '<text x="' + (W - padR) + '" y="' + (parseFloat(y1) - 6) + '" text-anchor="end" font="' + MONO + '" fill="' + C.accent + '">1% safety line</text>';
    // y gridlines + labels
    [0, 25, 50, 75, 100].forEach(function (v) {
      var yy = Y(v).toFixed(1);
      html += '<line x1="' + padL + '" y1="' + yy + '" x2="' + (W - padR) + '" y2="' + yy + '" stroke="' + C.grid + '" stroke-width="1" opacity="0.7"/>';
      html += '<text x="' + (padL - 8) + '" y="' + (parseFloat(yy) + 3) + '" text-anchor="end" font="' + MONO + '" fill="' + C.label + '">' + v + '%</text>';
    });
    // x labels
    [0.25, 2.5, 5, 7.5, 10].forEach(function (rk) {
      html += '<text x="' + X(rk).toFixed(1) + '" y="' + (H - 10) + '" text-anchor="middle" font="' + MONO + '" fill="' + C.label + '">' + rk + '%</text>';
    });
    html += '<text x="' + ((padL + W - padR) / 2).toFixed(1) + '" y="' + (H - 10) + '" text-anchor="middle" font="' + MONO + '" fill="' + C.label + '">risk per trade</text>';
    // the curve
    html += '<path d="' + linePath() + '" fill="none" stroke="' + C.danger + '" stroke-width="2.5" stroke-linejoin="round"/>';
    // solver marker (max safe size)
    if (solverRisk !== null && solverRisk <= 10) {
      var sx = X(solverRisk).toFixed(1), sy = Y(1).toFixed(1);
      html += '<circle cx="' + sx + '" cy="' + sy + '" r="5" fill="' + C.accent + '" stroke="#0d1f17" stroke-width="2"/>';
      html += '<text x="' + sx + '" y="' + (parseFloat(sy) - 12) + '" text-anchor="middle" font="' + MONO + '" fill="' + C.accent + '">max ' + solverRisk.toFixed(1) + '%</text>';
    }
    // current-risk marker
    var cx = X(curRisk).toFixed(1), cy = Y(classicalRoR(p, b, curRisk) * 100).toFixed(1);
    html += '<line x1="' + cx + '" y1="' + padT + '" x2="' + cx + '" y2="' + (H - padB) + '" stroke="' + C.label + '" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>';
    html += '<circle cx="' + cx + '" cy="' + cy + '" r="5.5" fill="' + C.p50 + '" stroke="#0d1f17" stroke-width="2"/>';
    html += '<text x="' + cx + '" y="' + (parseFloat(cy) + 18) + '" text-anchor="middle" font="' + MONO + '" fill="' + C.p50 + '">you: ' + curRisk + '%</text>';

    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = html;
  }

  // (b) Monte Carlo equity fan chart (same visual language as the What-If simulator).
  function drawFanChart(res, capital, trades) {
    var svg = els.rFan;
    var W = 620, H = 300, padL = 8, padR = 8, padT = 30, padB = 26;
    var maxV = Math.max.apply(null, res.p90.concat([capital * 1.05]));
    if (maxV <= 0) maxV = capital;
    function X(i) { return padL + (i / (res.nSamples - 1)) * (W - padL - padR); }
    function Y(v) { return padT + (1 - v / maxV) * (H - padT - padB); }
    function linePath(arr) {
      return arr.map(function (v, i) { return (i ? 'L' : 'M') + X(i).toFixed(1) + ',' + Y(v).toFixed(1); }).join(' ');
    }
    var band = linePath(res.p90);
    var rev = res.p10.slice().reverse().map(function (v, i) {
      return 'L' + X(res.nSamples - 1 - i).toFixed(1) + ',' + Y(v).toFixed(1);
    }).join(' ');
    var yStart = Y(capital).toFixed(1);
    var html = '';
    html += '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="transparent"/>';
    html += '<rect x="' + padL + '" y="' + padT + '" width="' + (W - padL - padR) + '" height="' + (parseFloat(yStart) - padT) + '" fill="' + C.profit + '" opacity="0.04"/>';
    html += '<rect x="' + padL + '" y="' + yStart + '" width="' + (W - padL - padR) + '" height="' + (H - padB - parseFloat(yStart)) + '" fill="' + C.loss + '" opacity="0.05"/>';
    html += '<line x1="' + padL + '" y1="' + yStart + '" x2="' + (W - padR) + '" y2="' + yStart + '" stroke="' + C.start + '" stroke-width="1" stroke-dasharray="5 5" opacity="0.8"/>';
    html += '<text x="' + (W - padR) + '" y="' + (parseFloat(yStart) - 6) + '" text-anchor="end" font="' + MONO + '" fill="' + C.label + '">start ' + fmtINR(capital) + '</text>';
    html += '<path d="' + band + ' ' + rev + ' Z" fill="' + C.band + '" opacity="0.10"/>';
    html += '<path d="' + linePath(res.p90) + '" fill="none" stroke="' + C.p90 + '" stroke-width="1.5" opacity="0.8"/>';
    html += '<path d="' + linePath(res.p10) + '" fill="none" stroke="' + C.p10 + '" stroke-width="1.5" opacity="0.8"/>';
    html += '<path d="' + linePath(res.p50) + '" fill="none" stroke="' + C.p50 + '" stroke-width="2.5"/>';
    html += '<text x="' + padL + '" y="' + (H - 8) + '" font="' + MONO + '" fill="' + C.label + '">trade 1</text>';
    html += '<text x="' + (W - padR) + '" y="' + (H - 8) + '" text-anchor="end" font="' + MONO + '" fill="' + C.label + '">trade ' + trades.toLocaleString('en-IN') + '</text>';
    var ly = 16;
    html += '<g font="' + MONO + '" fill="' + C.label + '">';
    html += '<line x1="' + padL + '" y1="' + ly + '" x2="' + (padL + 22) + '" y2="' + ly + '" stroke="' + C.p90 + '" stroke-width="2.5"/><text x="' + (padL + 28) + '" y="' + (ly + 4) + '">P90 optimistic</text>';
    html += '<line x1="' + (padL + 130) + '" y1="' + ly + '" x2="' + (padL + 152) + '" y2="' + ly + '" stroke="' + C.p50 + '" stroke-width="2.5"/><text x="' + (padL + 158) + '" y="' + (ly + 4) + '">P50 median</text>';
    html += '<line x1="' + (padL + 250) + '" y1="' + ly + '" x2="' + (padL + 272) + '" y2="' + ly + '" stroke="' + C.p10 + '" stroke-width="2.5"/><text x="' + (padL + 278) + '" y="' + (ly + 4) + '">P10 pessimistic</text>';
    html += '</g>';
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = html;
  }

  function shareText(o, rorFrac, survPct, solverRisk) {
    var solverBit = solverRisk === null
      ? 'no safe size exists at this edge'
      : 'keep risk under ' + solverRisk.toFixed(1) + '% to hold ruin below 1%';
    return 'My risk of ruin: ' + fmtPct(rorFrac * 100, 1) + ' at ' + o.riskPct +
      '% risk per trade (' + o.winRate + '% win rate, ' + o.winR + ':' + o.lossR +
      ' R:R). Survival probability: ' + fmtPct(survPct, 1) + '. ' +
      solverBit.charAt(0).toUpperCase() + solverBit.slice(1) +
      '. — Risk of Ruin Calculator, Monks Of Market';
  }

  var debounce = null;
  function run() {
    var o = readInputs();
    var errs = validate(o);
    if (errs.length) {
      els.rValidation.innerHTML = errs.map(function (e) { return '<div>' + e + '</div>'; }).join('');
      return;
    }
    els.rValidation.innerHTML = '';
    els.rRunBtn.disabled = true;
    els.rRunBtn.textContent = 'Crunching 1,000 futures…';
    setTimeout(function () {
      var t0 = performance.now();
      var p = o.winRate / 100, b = o.winR / o.lossR;
      var rorFrac = classicalRoR(p, b, o.riskPct);
      var survPct = (1 - rorFrac) * 100;
      var solverRisk = solveMaxRisk(p, b);
      var res = simulate(o);
      var ms = Math.round(performance.now() - t0);

      var danger = rorFrac * 100 > 1;
      els.rRuinPct.textContent = fmtPct(rorFrac * 100, rorFrac * 100 < 0.1 && rorFrac > 0 ? 4 : 1);
      els.rRuinPct.className = 'result-big ' + (danger ? 'bad' : 'good');
      els.rSurvival.textContent = fmtPct(survPct, survPct > 99.9 ? 2 : 1);
      if (solverRisk === null) {
        els.rSolver.textContent = 'No safe size — this strategy has no edge.';
        els.rSolverNote.textContent = 'With zero or negative expectancy, eventual ruin is certain at any size. Fix the edge first; sizing cannot save it.';
      } else if (solverRisk >= 25) {
        els.rSolver.textContent = 'Keep risk per trade under 25% to hold ruin below 1%.';
        els.rSolverNote.textContent = 'The maths allows even the top of the slider — but that is the model talking, not advice. Verify the edge is real before sizing up.';
      } else {
        els.rSolver.textContent = 'Keep risk per trade under ' + solverRisk.toFixed(1) + '% to hold ruin below 1%.';
        els.rSolverNote.textContent = 'Classical fixed-fractional model. Costs and slippage make reality harsher — treat this as a ceiling, not a target.';
      }
      els.rClassical.textContent = fmtPct(rorFrac * 100, 1);
      els.rMcRuin.textContent = fmtPct(res.mcRuinPct, 1);
      els.rMedDD.textContent = fmtPct(res.medianMaxDD, 1);
      els.rEdge.textContent = (edgePerTrade(p, b) >= 0 ? '+' : '') + edgePerTrade(p, b).toFixed(3) + 'R';
      els.rShare.value = shareText(o, rorFrac, survPct, solverRisk);

      drawRuinCurve(p, b, o.riskPct, solverRisk);
      drawFanChart(res, o.capital, o.trades);

      els.rRunBtn.disabled = false;
      els.rRunBtn.textContent = 'Calculate risk of ruin';
      els.rRunBtn.setAttribute('data-ms', ms + 'ms · 1,000 runs');
    }, 30);
  }

  function queue() {
    clearTimeout(debounce);
    debounce = setTimeout(run, 350);
  }

  function syncLabels() {
    els.rWinRateVal.textContent = els.rWinRate.value + '%';
    els.rRiskVal.textContent = parseFloat(els.rRisk.value).toFixed(2).replace(/0$/, '') + '%';
  }

  ['rWinRate', 'rWinR', 'rLossR', 'rRisk', 'rCapital'].forEach(function (id) {
    els[id].addEventListener('input', function () { syncLabels(); queue(); });
  });
  els.rRunBtn.addEventListener('click', run);

  // R:R preset buttons
  Array.prototype.forEach.call(document.querySelectorAll('[data-rr]'), function (btn) {
    btn.addEventListener('click', function () {
      var pr = PRESETS[btn.getAttribute('data-rr')];
      els.rWinR.value = pr[0]; els.rLossR.value = pr[1];
      Array.prototype.forEach.call(document.querySelectorAll('[data-rr]'), function (b2) {
        b2.classList.toggle('active', b2 === btn);
      });
      queue();
    });
  });

  // Trades segmented control
  Array.prototype.forEach.call(document.querySelectorAll('[data-trades]'), function (btn) {
    btn.addEventListener('click', function () {
      curTrades = parseInt(btn.getAttribute('data-trades'), 10);
      Array.prototype.forEach.call(document.querySelectorAll('[data-trades]'), function (b2) {
        b2.classList.toggle('active', b2 === btn);
      });
      queue();
    });
  });

  els.rExample.addEventListener('click', function () {
    els.rWinRate.value = 45;
    els.rWinR.value = 1.5; els.rLossR.value = 1;
    els.rRisk.value = 1; els.rCapital.value = 100000;
    curTrades = 500;
    Array.prototype.forEach.call(document.querySelectorAll('[data-trades]'), function (b2) {
      b2.classList.toggle('active', b2.getAttribute('data-trades') === '500');
    });
    syncLabels(); run();
  });

  els.rCopyBtn.addEventListener('click', function () {
    var txt = els.rShare.value;
    function done() {
      els.rCopyMsg.textContent = 'Copied — paste it anywhere.';
      setTimeout(function () { els.rCopyMsg.textContent = ''; }, 2500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(done, function () {
        els.rShare.select(); document.execCommand('copy'); done();
      });
    } else {
      els.rShare.select(); document.execCommand('copy'); done();
    }
  });

  syncLabels();
  run();
})();
