try{(function(w,d){zaraz.debug=(cq="")=>{document.cookie=`zarazDebug=${cq}; path=/`;location.reload()};window.zaraz._al=function(bF,bG,bH){w.zaraz.listeners.push({item:bF,type:bG,callback:bH});bF.addEventListener(bG,bH)};zaraz.preview=(bL="")=>{document.cookie=`zarazPreview=${bL}; path=/`;location.reload()};zaraz.i=function(ch){const ci=d.createElement("div");ci.innerHTML=unescape(ch);const cj=ci.querySelectorAll("script");for(let ck=0;ck<cj.length;ck++){const cl=d.createElement("script");cj[ck].innerHTML&&(cl.innerHTML=cj[ck].innerHTML);for(const cm of cj[ck].attributes)cl.setAttribute(cm.name,cm.value);d.head.appendChild(cl);cj[ck].remove()}d.body.appendChild(ci)};zaraz.f=async function(cn,co){const cp={credentials:"include",keepalive:!0,mode:"no-cors"};if(co){cp.method="POST";cp.body=new URLSearchParams(co);cp.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(cn,cp)};window.zaraz._p=async j=>new Promise((k=>{if(j){j.e&&j.e.forEach((l=>{try{new Function(l)()}catch(m){console.error(`Error executing script: ${l}\n`,m)}}));Promise.allSettled((j.f||[]).map((n=>fetch(n[0],n[1]))))}k()}));zaraz.pageVariables={};zaraz.__zcl=zaraz.__zcl||{};zaraz.track=async function(bM,bN,bO){return new Promise(((bP,bQ)=>{const bR={name:bM,data:{}};for(const bS of[localStorage,sessionStorage])Object.keys(bS||{}).filter((bU=>bU.startsWith("_zaraz_"))).forEach((bT=>{try{bR.data[bT.slice(7)]=JSON.parse(bS.getItem(bT))}catch{bR.data[bT.slice(7)]=bS.getItem(bT)}}));Object.keys(zaraz.pageVariables).forEach((bV=>bR.data[bV]=JSON.parse(zaraz.pageVariables[bV])));Object.keys(zaraz.__zcl).forEach((bW=>bR.data[`__zcl_${bW}`]=zaraz.__zcl[bW]));bR.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
zarazData.c=d.cookie;
//
bR.data={...bR.data,...bN};bR.zarazData=zarazData;fetch("https://www.wheregoesrose.com/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(bR)}).catch((()=>{
//
return fetch("https://www.wheregoesrose.com/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(bR)})})).then((function(bY){zarazData._let=(new Date).getTime();bY.ok||bQ();return 204!==bY.status&&bY.json()})).then((async bX=>{await zaraz._p(bX);"function"==typeof bO&&bO()})).finally((()=>bP()))}))};zaraz.set=function(bZ,b$,ca){try{b$=JSON.stringify(b$)}catch(cb){return}prefixedKey="_zaraz_"+bZ;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[bZ];if(void 0!==b$){ca&&"session"==ca.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,b$):ca&&"page"==ca.scope?zaraz.pageVariables[bZ]=b$:localStorage&&localStorage.setItem(prefixedKey,b$);zaraz.__watchVar={key:bZ,value:b$}}};for(const{m:cc,a:cd}of zarazData.q.filter((({m:ce})=>["debug","set"].includes(ce))))zaraz[cc](...cd);for(const{m:cf,a:cg}of zaraz.q)zaraz[cf](...cg);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(be,bf,bg,bh){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[be]||(zaraz.__zarazTriggerMap[be]="");zaraz.__zarazTriggerMap[be]+="*"+bf+"*";zaraz.track("__zarazEmpty",{...bg,__zarazClientTriggers:zaraz.__zarazTriggerMap[be]},bh)};zaraz._processDataLayer=cO=>{for(const cP of Object.entries(cO))zaraz.set(cP[0],cP[1],{scope:"page"});if(cO.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(cO.event))return;let cQ={};for(let cR of dataLayer.slice(0,dataLayer.indexOf(cO)+1))cQ={...cQ,...cR};delete cQ.event;cO.event.startsWith("gtm.")||zaraz.track(cO.event,cQ)}};window.dataLayer=w.dataLayer||[];const cN=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...cS){let cT=cN.apply(this,cS);zaraz._processDataLayer(cS[0]);return cT}});dataLayer.forEach((cU=>zaraz._processDataLayer(cU)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((I=>clearTimeout(I)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((J=>J.item.removeEventListener(J.type,J.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._c=fV=>{const{event:fW,...fX}=fV;zaraz.track(fW,{...fX,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","(function(w,d){})(window, document)"]})})(window,document)}catch(e){throw fetch("https://www.wheregoesrose.com/cdn-cgi/zaraz/t"),e;}yles-wrapper__ZMZ7s{display:flex;align-items:center;align-self:stretch}.styles-header__2NUEz{padding:32px 40px;justify-content:space-between;border-radius:0 0 8px 8px}@media(max-width:991.98px){.styles-header__2NUEz{padding:32px 40px;flex-direction:column;justify-content:center;gap:40px;align-items:stretch}}.styles-header-title__KFoIQ{align-self:stretch;color:#101828;font-size:30px;font-weight:600;line-height:1.26em;letter-spacing:-.6px;margin:0 0 12px}.styles-header-description__255xE{color:var(--gray-600,#475467);font-size:20px;font-weight:400;line-height:1.5em;align-self:stretch}@media(max-width:767.98px){.styles-header-description__255xE{font-size:16px}}@media(max-width:767.98px){.styles-header-request-button__DYWcf{display:flex!important}}.styles-header-request-button-icon__M6F\+b{font-size:24px}.styles-statistics-wrapper__8SLSj{display:grid;padding:48px 81px;gap:120px;align-self:stretch;grid-template-columns:repeat(3,1fr);border-radius:0 0 24px 24px;background:var(--gray-50,#f9fafb)}@media(max-width:991.98px){.styles-statistics-wrapper__8SLSj{display:flex;flex-direction:column;padding:48px 51px;gap:56px}}.styles-statistics-item__Rd7Jy{text-align:center;display:flex;align-items:flex-start;justify-content:center}@media(max-width:991.98px){.styles-statistics-item__Rd7Jy{justify-content:center}}.styles-statistics-item-body__suO4Q{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px}.styles-statistics-item-title__1Y8\+V{font-size:36px;line-height:1.2em;color:#101828;font-weight:600;letter-spacing:-.72px}@media(max-width:991.98px){.styles-statistics-item-title__1Y8\+V{font-size:30px}}.styles-statistics-item-content__8nqq7{font-size:16px;line-height:1.5em;color:#000;text-align:center}