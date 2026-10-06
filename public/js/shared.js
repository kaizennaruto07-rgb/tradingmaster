(function(){
  'use strict';
  const $=id=>document.getElementById(id);
  const root=document.documentElement;

  // Tools dropdown menu
  const toolsNavItem=$('toolsNavItem'), toolsMenuBtn=$('toolsMenuBtn');
  function closeMenu(){ if(toolsNavItem&&toolsMenuBtn){toolsNavItem.classList.remove('open');toolsMenuBtn.setAttribute('aria-expanded','false');} }
  if(toolsMenuBtn&&toolsNavItem){
    toolsMenuBtn.addEventListener('click',function(event){event.stopPropagation();const opened=!toolsNavItem.classList.contains('open');toolsNavItem.classList.toggle('open',opened);toolsMenuBtn.setAttribute('aria-expanded',opened?'true':'false');});
    document.addEventListener('click',function(event){if(!(event.target&&event.target.closest&&event.target.closest('.nav-item')))closeMenu();});
    document.addEventListener('keydown',function(event){if(event.key==='Escape')closeMenu();});
  }

  // Theme toggle (dark / light), persisted in localStorage.
  const themeToggle=$('themeToggle'), THEME_KEY='mom-theme';
  function resolvedTheme(){const t=root.getAttribute('data-theme');if(t==='dark'||t==='light')return t;return matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}
  function syncThemeToggle(){if(themeToggle)themeToggle.setAttribute('aria-label','Switch to '+(resolvedTheme()==='dark'?'light':'dark')+' mode');}
  if(themeToggle){
    syncThemeToggle();
    themeToggle.addEventListener('click',function(){
      const next=resolvedTheme()==='dark'?'light':'dark';
      root.setAttribute('data-theme',next);
      try{localStorage.setItem(THEME_KEY,next);}catch(e){}
      syncThemeToggle();
    });
  }

  // Scroll-linked atmosphere and section reveals.
  const topline=document.querySelector('.topline');
  let scrollTick=false;
  function syncScroll(){
    const max=Math.max(1,root.scrollHeight-innerHeight);
    root.style.setProperty('--scroll',Math.min(1,scrollY/max));
    topline.classList.toggle('scrolled',scrollY>12);
    scrollTick=false;
  }
  addEventListener('scroll',()=>{if(!scrollTick){requestAnimationFrame(syncScroll);scrollTick=true}},{passive:true});syncScroll();
  if(matchMedia('(pointer:fine)').matches){
    addEventListener('pointermove',e=>{root.style.setProperty('--mx',(e.clientX/innerWidth*100).toFixed(1)+'%');root.style.setProperty('--my',(e.clientY/innerHeight*100).toFixed(1)+'%')},{passive:true});
  }
  const reveals=document.querySelectorAll('[data-reveal]');
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    root.classList.add('motion-ready');
    const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');revealObserver.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -5%'});
    reveals.forEach(el=>revealObserver.observe(el));
  }else reveals.forEach(el=>el.classList.add('in-view'));

  // Vision journey: chapter stepper, rail progress and the staggered equation reveal.
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const journeyEl=document.querySelector('.journey');
  const railEl=document.querySelector('.journey-rail');
  const railItems=Array.prototype.slice.call(document.querySelectorAll('.journey-rail li'));
  const chapters=Array.prototype.slice.call(document.querySelectorAll('.chapter'));
  if(railEl&&chapters.length){
    if('IntersectionObserver' in window){
      const railObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){railItems.forEach(li=>li.classList.toggle('active',li.dataset.rail===entry.target.dataset.chapter))}}),{rootMargin:'-38% 0px -38% 0px'});
      chapters.forEach(c=>railObserver.observe(c));
    }else if(railItems.length)railItems[0].classList.add('active');
  }
  const equation=document.querySelector('.equation-block');
  if(equation){
    if('IntersectionObserver' in window&&!reducedMotion){
      const eqObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){equation.classList.add('in-equation');eqObserver.disconnect()}}),{threshold:.32});
      eqObserver.observe(equation);
    }else equation.classList.add('in-equation');
  }
  // C-game → A-game transformation: fire when the stage itself is well into view.
  const gameChapter=document.querySelector('.chapter-game');
  if(gameChapter){
    const gameStage=gameChapter.querySelector('.game-stage');
    if('IntersectionObserver' in window&&!reducedMotion&&gameStage){
      const gameObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){gameChapter.classList.add('game-on');gameObserver.disconnect()}}),{threshold:.4});
      gameObserver.observe(gameStage);
    }else gameChapter.classList.add('game-on');
  }
  if(journeyEl&&railEl&&!reducedMotion){
    const syncJourneyFill=()=>{
      const rect=journeyEl.getBoundingClientRect();
      const denom=Math.max(1,rect.height-innerHeight*.35);
      const prog=Math.min(1,Math.max(0,(innerHeight*.55-rect.top)/denom));
      railEl.style.setProperty('--fill',prog.toFixed(3));
    };
    let journeyTick=false;
    addEventListener('scroll',()=>{if(!journeyTick){requestAnimationFrame(()=>{syncJourneyFill();journeyTick=false});journeyTick=true}},{passive:true});
    syncJourneyFill();
  }

  const money=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(n)?n:0);
  const usdt=n=>'USDT '+new Intl.NumberFormat('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(n)?n:0);
  const amt=n=>new Intl.NumberFormat('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(n)?n:0);
  const fixed=(n,d=2)=>Number.isFinite(n)?n.toFixed(d):(0).toFixed(d);
  const paise=n=>Math.round((n+Number.EPSILON)*100)/100;
  
  // Quote rotator (homepage only — elements exist only there)
  if($('quote')&&$('quoteIndex')){
const quotes=[
    'A planned loss is tuition. An unplanned loss is a leak.','The best entry cannot rescue careless sizing.','Protect the account that must fund your next decision.','Risk is the one variable you can choose before the market speaks.','A stop is not pessimism; it is a contract with yourself.','Trade the plan, then grade the execution.','Gross profit is a headline. Net profit is the truth.','Small risk keeps large lessons affordable.','Leverage changes speed, not direction.','The market owes clarity to no one. Your process should.',
    'Patience is a position too.','Good trading feels quieter than bad trading.','A valid setup can still be a losing trade.','Survival is the first compounding strategy.','If the loss feels personal, the size is probably too large.','Fees are certain. Profit is not.','Measure twice; place the order once.','Discipline is remembering tomorrow during today’s trade.','The chart shows price. Your journal shows the trader.','Conviction should never cancel arithmetic.',
    'The risk budget is decided before the story begins.','Do not borrow confidence from a winning streak.','One trade is noise; repeated behavior is signal.','A breakeven move is part of the setup, not an afterthought.','A professional can be wrong without being ruined.','Your edge needs room; your loss needs a wall.','Precision in sizing beats drama in prediction.','The cheapest mistake is the one caught in the calculator.','Consistency begins where improvisation ends.','An exit plan is a form of respect for capital.',
    'The market rewards no one for being busy.','Margin is access, not affordability.','The distance to stop decides the quantity—not the other way around.','Before asking what you can make, decide what you can lose.','A target without costs is only a sketch.','The strongest trade is one you can manage calmly.','Risk compounds too; keep it deliberately small.','Execution quality lives in the details nobody posts.','Uncertainty is permanent. Position size is adjustable.','Do not turn a thesis into a hostage situation.',
    'Your process should work even when your opinion does not.','The account balance is feedback, not identity.','Every fee deserves a line before every trade deserves a click.','A quiet no-trade day can be excellent risk management.','Use leverage to shape capital efficiency, not excitement.','The plan matters most when the candle moves fastest.','A loss inside the plan is not a broken process.','Trading less can reveal more.','Know the cash outflow, not only the payoff diagram.','A rule remembered late is merely a regret.',
    'Good risk management makes ordinary judgment survivable.','A position is too large when it changes your thinking.','Your stop defines the trade more honestly than your target.','The goal is not to avoid losses; it is to avoid uncontrolled losses.','Cost-aware traders need fewer miracles.','No calculator can replace restraint, but it can expose wishful thinking.','The next trade is never guaranteed. Preserve the option to take it.','A repeatable process is more valuable than a memorable prediction.','Capital protected today can express a better idea tomorrow.','Let numbers challenge the narrative.',
    'The cleanest edge often looks boring in real time.','Trade management begins before entry.','Know why the size is right, not merely why the direction feels right.','A limit respected once becomes discipline only when repeated.','Friction turns marginal trades into bad trades.','Your best trade may be the risk you decline.','The stop price and position size are one decision.','A spreadsheet cannot feel fear; use that advantage early.','What survives costs is what counts.','The market can move farther than your margin can wait.',
    'A small planned loss preserves analytical honesty.','Do not let a low margin requirement disguise a large notional.','When the math says no, gratitude is cheaper than regret.','Risk-adjusted thinking is patience with a calculator.','A strategy is incomplete until its costs are known.','The most important percentage is the one you are willing to lose.','Profit targets inspire; loss limits sustain.','You do not control the candle. You control the consequence.','A disciplined trader can sleep through uncertainty.','Put the fee schedule inside the strategy, not beneath it.',
    'Scale only what remains sound after costs.','A good setup at the wrong size is a bad trade.','Every order has a market opinion and a cost opinion.','Do not confuse available leverage with required leverage.','A robust plan has space for being wrong.','Net expectancy is the only expectancy the account receives.','Risk limits turn confidence into something measurable.','The account remembers every hidden cost.','Clarity comes before quantity.','Process is the position you hold every day.',
    'Your risk budget is a boundary, not a suggestion.','The distance between hope and discipline is often one stop order.','Cost is not noise when the edge is small.','A professional prepares for the ordinary loss.','Trade size is where psychology becomes arithmetic.','The market tests rules that were never written down.','An honest breakeven is better than an attractive illusion.','Keep the trade small enough to keep the mind useful.','A fee ignored is still a fee paid.','First protect the ability to continue.','A clean loss can be evidence of a clean process.','Never let urgency choose the quantity.','The target is optional; the risk limit is not.','Price moves attract attention. Position size decides consequence.','Treat every hidden cost as an exposed risk.','A trade begins with a number, not a feeling.','When uncertainty rises, size can fall.','A calm mind is easier to fund with a smaller position.','The edge is what remains after reality sends the bill.'
  ];
  let qi=Math.floor(Math.random()*quotes.length);
  const quoteTotal=String(quotes.length).padStart(2,'0');
  function showQuote(){ $('quote').textContent=quotes[qi];$('quoteIndex').textContent=String(qi+1).padStart(2,'0')+' / '+quoteTotal; }
  showQuote();

  // (Each calculator moved to its own routed page; the tab switcher was removed.)

  
  }
})();
