(function(){
  'use strict';
  const $=id=>document.getElementById(id);
  const num=id=>Number($(id).value);
  const usdt=n=>'USDT '+new Intl.NumberFormat('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(n)?n:0);
    const amt=n=>new Intl.NumberFormat('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(n)?n:0);
    const fixed=(n,d=2)=>Number.isFinite(n)?n.toFixed(d):(0).toFixed(d);
    const paise=n=>Math.round((n+Number.EPSILON)*100)/100;
  const money=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',minimumFractionDigits:2,maximumFractionDigits:2}).format(Number.isFinite(n)?n:0);
function optionCharges(qty,buy,sell,broker,exRate,sttRate){
    const buyTurn=qty*buy,sellTurn=qty*sell;
    const broBuy=paise(broker),broSell=paise(broker);
    const stt=paise(sellTurn*sttRate/100);
    const rawExBuy=buyTurn*exRate/100,rawExSell=sellTurn*exRate/100;
    const rawSebiBuy=buyTurn*10/10000000,rawSebiSell=sellTurn*10/10000000;
    const exBuy=paise(rawExBuy),exSell=paise(rawExSell);
    const sebiBuy=paise(rawSebiBuy),sebiSell=paise(rawSebiSell);
    const stamp=paise(buyTurn*.003/100);
    const gstBuy=paise((broker+rawExBuy+rawSebiBuy)*.18),gstSell=paise((broker+rawExSell+rawSebiSell)*.18);
    const total=paise(broBuy+broSell+stt+exBuy+exSell+sebiBuy+sebiSell+stamp+gstBuy+gstSell);
    return{buyTurn,sellTurn,broBuy,broSell,stt,exBuy,exSell,sebiBuy,sebiSell,stamp,gstBuy,gstSell,total};
  }
  function optionCalc(){
    const qty=num('oQty'),buy=num('oBuy'),target=num('oTarget'),stop=num('oStop'),exRate=num('oExchange');
    const broker=20,sttRate=0.15;
    const errors=[];if(!(qty>0))errors.push('Quantity must be above zero.');if(!(buy>=0&&target>=0&&stop>=0))errors.push('Premiums cannot be negative.');if(!(exRate>=0))errors.push('Exchange rate cannot be negative.');
    if(!(target>buy))errors.push('Target sell premium must be above buy premium.');if(!(stop<buy))errors.push('Stop-loss premium must be below buy premium.');
    const v=$('oValidation');v.textContent=errors.join(' ');v.classList.toggle('show',errors.length>0);if(errors.length)return;
    const c=optionCharges(qty,buy,target,broker,exRate,sttRate),gross=(target-buy)*qty,net=gross-c.total;
    const cs=optionCharges(qty,buy,stop,broker,exRate,sttRate),grossStop=(stop-buy)*qty,netStop=grossStop-cs.total;
    const rr=netStop<0?net/(-netStop):0;
    const be=buy+c.total/qty;
    let lo=0,hi=Math.max(buy*5+100,1000);for(let i=0;i<80;i++){const mid=(lo+hi)/2,mc=optionCharges(qty,buy,mid,broker,exRate,sttRate);if((mid-buy)*qty-mc.total>=0)hi=mid;else lo=mid}const exactBE=hi;
    $('oNet').textContent=money(net);$('oNet').className='result-big '+(net>=0?'good':'bad');$('oNetStop').textContent=money(netStop);$('oNetStop').className=netStop>=0?'good':'bad';$('oRR').textContent=netStop<0?fixed(rr,2)+' : 1':'—';$('oGross').textContent=money(gross);$('oTotal').textContent=money(c.total);$('oBE').textContent=money(be);$('oExactBE').textContent=money(exactBE);$('oDrag').textContent=gross!==0?fixed(Math.abs(c.total/gross*100),2)+'%':'—';$('oBuyTurn').textContent=money(c.buyTurn);$('oSellTurn').textContent=money(c.sellTurn);$('oQtyOut').textContent=fixed(qty,0);
    $('oBrok').textContent=money(c.broBuy+c.broSell);$('oSttOut').textContent=money(c.stt);$('oExBuy').textContent=money(c.exBuy);$('oExSell').textContent=money(c.exSell);$('oSebi').textContent=money(c.sebiBuy+c.sebiSell);$('oStamp').textContent=money(c.stamp);$('oGstBuy').textContent=money(c.gstBuy);$('oGstSell').textContent=money(c.gstSell);
  }
  ['oQty','oBuy','oTarget','oStop','oExchange'].forEach(id=>$(id).addEventListener('input',optionCalc));
  $('optionsExample').addEventListener('click',()=>{$('oQty').value=50;$('oBuy').value=100;$('oTarget').value=120;$('oStop').value=90;$('oExchange').value=.03553;optionCalc()});
  optionCalc();
  optionCalc();
})();
