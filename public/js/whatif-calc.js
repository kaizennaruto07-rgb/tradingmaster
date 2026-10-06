/* What-If Trade Simulator — Monte Carlo engine + SVG fan chart.
   Pure vanilla JS, no dependencies. Works standalone (also used for Node sanity tests). */
(function () {
  'use strict';

  var SIMS = 1000;

  function percentile(sorted, p) {
    if (!sorted.length) return 0;
    var i = (p / 100) * (sorted.length - 1);
    var lo = Math.floor(i), hi = Math.ceil(i);
    return sorted[lo] + (sorted[hi] - sorted[lo]) * (i - lo);
  }

  // One simulated future: fixed-fractional risk on current capital.
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

    var profitCount = 0, ruinCount = 0;
    for (var j = 0; j < SIMS; j++) {
      if (finals[j] > capital) profitCount++;
      if (drawdowns[j] >= 0.5) ruinCount++;
    }

    return {
      sims: SIMS,
      p10Final: percentile(finals, 10),
      p50Final: percentile(finals, 50),
      p90Final: percentile(finals, 90),
      probProfit: profitCount / SIMS * 100,
      probRuin: ruinCount / SIMS * 100,
      medianMaxDD: percentile(drawdowns, 50) * 100,
      p10: p10, p50: p50, p90: p90,
      nSamples: nSamples
    };
  }

  // Indian number formatting: lakh / crore for large values.
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
    // Node export for sanity tests
    if (typeof module !== 'undefined') module.exports = { simulate: simulate, fmtINR: fmtINR };
    return;
  }

  var $ = function (id) { return document.getElementById(id); };

  var els = {};
  ['wCapital', 'wWinRate', 'wWinR', 'wLossR', 'wRisk', 'wTrades',
   'wValidation', 'wP50', 'wProbProfit', 'wP10', 'wP90', 'wProbProfit2',
   'wRuin', 'wMedDD', 'wChart', 'wShare', 'wRunBtn', 'wCopyBtn', 'wCopyMsg'
  ].forEach(function (id) { els[id] = $(id); });

  if (!els.wCapital) return; // not on this page

  function readInputs() {
    return {
      capital: parseFloat(els.wCapital.value),
      winRate: parseFloat(els.wWinRate.value),
      winR: parseFloat(els.wWinR.value),
      lossR: parseFloat(els.wLossR.value),
      riskPct: parseFloat(els.wRisk.value),
      trades: parseInt(els.wTrades.value, 10)
    };
  }

  function validate(o) {
    var errs = [];
    if (!(o.capital > 0)) errs.push('Starting capital must be above zero.');
    if (!(o.winRate > 0 && o.winRate < 100)) errs.push('Win rate must be between 0 and 100%.');
    if (!(o.winR > 0)) errs.push('Average win must be above zero.');
    if (!(o.lossR > 0)) errs.push('Average loss must be above zero.');
    if (!(o.riskPct > 0 && o.riskPct <= 25)) errs.push('Risk per trade must be between 0 and 25%.');
    if (!(o.trades >= 10 && o.trades <= 2000)) errs.push('Trades must be between 10 and 2,000.');
    return errs;
  }

  function drawChart(res, capital, trades) {
    var svg = els.wChart;
    var W = 620, H = 300, padL = 8, padR = 8, padT = 30, padB = 26;
    var maxV = Math.max.apply(null, res.p90.concat([capital * 1.05]));
    if (maxV <= 0) maxV = capital;
    // Colors — distinct for each line, visible on dark bg
    var C = {
      p50: '#14d991',      // bright mint — median
      p90: '#57c8f2',      // light blue — optimistic
      p10: '#ff6b6b',      // soft red — pessimistic
      band: '#14d991',     // band fill
      start: '#92a59c',    // muted gray — start line
      label: '#c8d8d0',   // light gray-green — all text
      grid: '#21332b',     // subtle grid
      profit: '#14d991',
      loss: '#ff6b6b'
    };
    var MONO = '600 10px ui-monospace, SFMono-Regular, Menlo, monospace';
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
    // profit/loss background zones
    html += '<rect x="' + padL + '" y="' + padT + '" width="' + (W - padL - padR) + '" height="' + (parseFloat(yStart) - padT) + '" fill="' + C.profit + '" opacity="0.04"/>';
    html += '<rect x="' + padL + '" y="' + yStart + '" width="' + (W - padL - padR) + '" height="' + (H - padB - parseFloat(yStart)) + '" fill="' + C.loss + '" opacity="0.05"/>';
    // start-capital dashed line
    html += '<line x1="' + padL + '" y1="' + yStart + '" x2="' + (W - padR) + '" y2="' + yStart + '" stroke="' + C.start + '" stroke-width="1" stroke-dasharray="5 5" opacity="0.8"/>';
    html += '<text x="' + (W - padR) + '" y="' + (parseFloat(yStart) - 6) + '" text-anchor="end" font="' + MONO + '" fill="' + C.label + '">start ' + fmtINR(capital) + '</text>';
    // P10–P90 band
    html += '<path d="' + band + ' ' + rev + ' Z" fill="' + C.band + '" opacity="0.10"/>';
    // P90 optimistic line (blue)
    html += '<path d="' + linePath(res.p90) + '" fill="none" stroke="' + C.p90 + '" stroke-width="1.5" opacity="0.8"/>';
    // P10 pessimistic line (red)
    html += '<path d="' + linePath(res.p10) + '" fill="none" stroke="' + C.p10 + '" stroke-width="1.5" opacity="0.8"/>';
    // P50 median line (bright mint, thickest)
    html += '<path d="' + linePath(res.p50) + '" fill="none" stroke="' + C.p50 + '" stroke-width="2.5"/>';
    // x labels
    html += '<text x="' + padL + '" y="' + (H - 8) + '" font="' + MONO + '" fill="' + C.label + '">trade 1</text>';
    html += '<text x="' + (W - padR) + '" y="' + (H - 8) + '" text-anchor="end" font="' + MONO + '" fill="' + C.label + '">trade ' + trades.toLocaleString('en-IN') + '</text>';
    // legend — 3 distinct colors
    var ly = 16;
    html += '<g font="' + MONO + '" fill="' + C.label + '">';
    html += '<line x1="' + padL + '" y1="' + ly + '" x2="' + (padL + 22) + '" y2="' + ly + '" stroke="' + C.p90 + '" stroke-width="2.5"/><text x="' + (padL + 28) + '" y="' + (ly + 4) + '">P90 optimistic</text>';
    html += '<line x1="' + (padL + 130) + '" y1="' + ly + '" x2="' + (padL + 152) + '" y2="' + ly + '" stroke="' + C.p50 + '" stroke-width="2.5"/><text x="' + (padL + 158) + '" y="' + (ly + 4) + '">P50 median</text>';
    html += '<line x1="' + (padL + 250) + '" y1="' + ly + '" x2="' + (padL + 272) + '" y2="' + ly + '" stroke="' + C.p10 + '" stroke-width="2.5"/><text x="' + (padL + 278) + '" y="' + (ly + 4) + '">P10 pessimistic</text>';
    html += '</g>';
    // interactive hover: vertical cursor + tooltip
    html += '<rect id="wHoverZone" x="' + padL + '" y="' + padT + '" width="' + (W - padL - padR) + '" height="' + (H - padT - padB) + '" fill="transparent" style="cursor:crosshair"/>';
    html += '<line id="wHoverLine" x1="0" y1="' + padT + '" x2="0" y2="' + (H - padB) + '" stroke="' + C.label + '" stroke-width="1" opacity="0" stroke-dasharray="3 3"/>';
    html += '<g id="wTooltip" opacity="0" font="' + MONO + '">'
      + '<rect id="wTipBg" x="0" y="0" width="172" height="64" rx="8" fill="#0d1f17" stroke="' + C.grid + '" stroke-width="1"/>'
      + '<text id="wTipTrade" x="10" y="18" fill="' + C.label + '"></text>'
      + '<text id="wTipP90" x="10" y="34" fill="' + C.p90 + '"></text>'
      + '<text id="wTipP50" x="10" y="48" fill="' + C.p50 + '"></text>'
      + '<text id="wTipP10" x="10" y="62" fill="' + C.p10 + '"></text>'
      + '</g>';
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = html;

    // wire up interactivity
    (function () {
      var zone = svg.querySelector('#wHoverZone');
      var hline = svg.querySelector('#wHoverLine');
      var tip = svg.querySelector('#wTooltip');
      var tipBg = svg.querySelector('#wTipBg');
      var tTrade = svg.querySelector('#wTipTrade');
      var tP90 = svg.querySelector('#wTipP90');
      var tP50 = svg.querySelector('#wTipP50');
      var tP10 = svg.querySelector('#wTipP10');
      if (!zone) return;
      function fmtShort(v) {
        if (v >= 1e7) return '₹' + (v / 1e7).toFixed(2) + ' Cr';
        if (v >= 1e5) return '₹' + (v / 1e5).toFixed(2) + ' L';
        if (v >= 1e3) return '₹' + (v / 1e3).toFixed(1) + 'K';
        return '₹' + Math.round(v);
      }
      zone.addEventListener('mousemove', function (e) {
        var rect = svg.getBoundingClientRect();
        var scaleX = W / rect.width;
        var mx = (e.clientX - rect.left) * scaleX;
        var idx = Math.round((mx - padL) / (W - padL - padR) * (res.nSamples - 1));
        idx = Math.max(0, Math.min(res.nSamples - 1, idx));
        var cx = X(idx);
        hline.setAttribute('x1', cx); hline.setAttribute('x2', cx);
        hline.setAttribute('opacity', '0.6');
        var tradeNum = Math.round(1 + (idx / (res.nSamples - 1)) * (trades - 1));
        tTrade.textContent = 'Trade ' + tradeNum.toLocaleString('en-IN');
        tP90.textContent = 'P90: ' + fmtShort(res.p90[idx]);
        tP50.textContent = 'P50: ' + fmtShort(res.p50[idx]);
        tP10.textContent = 'P10: ' + fmtShort(res.p10[idx]);
        // position tooltip, flip if near right edge
        var tx = cx + 12, ty = padT + 8;
        if (tx + 172 > W - padR) tx = cx - 184;
        tip.setAttribute('transform', 'translate(' + tx + ',' + ty + ')');
        tip.setAttribute('opacity', '1');
      });
      zone.addEventListener('mouseleave', function () {
        hline.setAttribute('opacity', '0');
        tip.setAttribute('opacity', '0');
      });
      // touch support
      zone.addEventListener('touchmove', function (e) {
        if (e.touches.length) {
          var t = e.touches[0];
          var ev = new MouseEvent('mousemove', { clientX: t.clientX, clientY: t.clientY });
          zone.dispatchEvent(ev);
        }
        e.preventDefault();
      }, { passive: false });
    })();
  }

  function shareText(o, res) {
    return 'I simulated ' + o.trades.toLocaleString('en-IN') + ' trades at ' + o.winRate +
      '% win rate (' + o.winR + ':' + o.lossR + ' R:R, ' + o.riskPct + '% risk) starting with ' +
      fmtINR(o.capital) + '. Median outcome: ' + fmtINR(res.p50Final) +
      ' · chance of profit: ' + fmtPct(res.probProfit, 0) +
      ' · chance of a 50%+ drawdown: ' + fmtPct(res.probRuin, 0) +
      '. — What-If Trade Simulator, Monks Of Market';
  }

  var debounce = null;
  function run() {
    var o = readInputs();
    var errs = validate(o);
    if (errs.length) {
      els.wValidation.innerHTML = errs.map(function (e) { return '<div>' + e + '</div>'; }).join('');
      return;
    }
    els.wValidation.innerHTML = '';
    els.wRunBtn.disabled = true;
    els.wRunBtn.textContent = 'Simulating 1,000 futures…';
    // let the UI paint before the heavy loop
    setTimeout(function () {
      var t0 = performance.now();
      var res = simulate(o);
      var ms = Math.round(performance.now() - t0);

      var profit = res.p50Final >= o.capital;
      els.wP50.textContent = fmtINR(res.p50Final);
      els.wP50.className = 'result-big ' + (profit ? 'good' : 'bad');
      els.wProbProfit.textContent = fmtPct(res.probProfit, 0);
      els.wP10.textContent = fmtINR(res.p10Final);
      els.wP90.textContent = fmtINR(res.p90Final);
      els.wProbProfit2.textContent = fmtPct(res.probProfit, 1);
      els.wRuin.textContent = fmtPct(res.probRuin, 1);
      els.wRuin.className = res.probRuin > 10 ? 'bad' : '';
      els.wMedDD.textContent = fmtPct(res.medianMaxDD, 1);
      els.wShare.value = shareText(o, res);

      drawChart(res, o.capital, o.trades);

      els.wRunBtn.disabled = false;
      els.wRunBtn.textContent = 'Run simulation';
      els.wRunBtn.setAttribute('data-ms', ms + 'ms · 1,000 runs');
    }, 30);
  }

  function queue() {
    clearTimeout(debounce);
    debounce = setTimeout(run, 350);
  }

  ['wCapital', 'wWinRate', 'wWinR', 'wLossR', 'wRisk', 'wTrades'].forEach(function (id) {
    els[id].addEventListener('input', queue);
  });
  els.wRunBtn.addEventListener('click', run);
  $('wExample').addEventListener('click', function () {
    els.wCapital.value = 100000; els.wWinRate.value = 40;
    els.wWinR.value = 2; els.wLossR.value = 1;
    els.wRisk.value = 1; els.wTrades.value = 500;
    run();
  });
  els.wCopyBtn.addEventListener('click', function () {
    var txt = els.wShare.value;
    function done() {
      els.wCopyMsg.textContent = 'Copied — paste it anywhere.';
      setTimeout(function () { els.wCopyMsg.textContent = ''; }, 2500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(done, function () {
        els.wShare.select(); document.execCommand('copy'); done();
      });
    } else {
      els.wShare.select(); document.execCommand('copy'); done();
    }
  });

  run();
})();
