(function(w,d){zaraz.debug=(cK="")=>{document.cookie=`zarazDebug=${cK}; path=/`;location.reload()};window.zaraz._al=function(bZ,b$,ca){w.zaraz.listeners.push({item:bZ,type:b$,callback:ca});bZ.addEventListener(b$,ca)};zaraz.preview=(cb="")=>{document.cookie=`zarazPreview=${cb}; path=/`;location.reload()};zaraz.i=function(cB){const cC=d.createElement("div");cC.innerHTML=unescape(cB);const cD=cC.querySelectorAll("script");for(let cE=0;cE<cD.length;cE++){const cF=d.createElement("script");cD[cE].innerHTML&&(cF.innerHTML=cD[cE].innerHTML);for(const cG of cD[cE].attributes)cF.setAttribute(cG.name,cG.value);d.head.appendChild(cF);cD[cE].remove()}d.body.appendChild(cC)};zaraz.f=async function(cH,cI){const cJ={credentials:"include",keepalive:!0,mode:"no-cors"};if(cI){cJ.method="POST";cJ.body=new URLSearchParams(cI);cJ.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(cH,cJ)};window.zaraz._p=async fS=>new Promise((fT=>{if(fS){fS.e&&fS.e.forEach((fU=>{try{new Function(fU)()}catch(fV){console.error(`Error executing script: ${fU}\n`,fV)}}));Promise.allSettled((fS.f||[]).map((fW=>fetch(fW[0],fW[1]))))}fT()}));zaraz.pageVariables={};zaraz.__zcl=zaraz.__zcl||{};zaraz.track=async function(cf,cg,ch){return new Promise(((ci,cj)=>{const ck={name:cf,data:{}};for(const cl of[localStorage,sessionStorage])Object.keys(cl||{}).filter((cn=>cn.startsWith("_zaraz_"))).forEach((cm=>{try{ck.data[cm.slice(7)]=JSON.parse(cl.getItem(cm))}catch{ck.data[cm.slice(7)]=cl.getItem(cm)}}));Object.keys(zaraz.pageVariables).forEach((co=>ck.data[co]=JSON.parse(zaraz.pageVariables[co])));Object.keys(zaraz.__zcl).forEach((cp=>ck.data[`__zcl_${cp}`]=zaraz.__zcl[cp]));ck.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
zarazData.c=d.cookie;
//
ck.data={...ck.data,...cg};ck.zarazData=zarazData;fetch("https://blog.cloudflare.com/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ck)}).catch((()=>{
//
return fetch("https://blog.cloudflare.com/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ck)})})).then((function(cr){zarazData._let=(new Date).getTime();cr.ok||cj();return 204!==cr.status&&cr.json()})).then((async cq=>{await zaraz._p(cq);"function"==typeof ch&&ch()})).finally((()=>ci()))}))};zaraz.set=function(cs,ct,cu){try{ct=JSON.stringify(ct)}catch(cv){return}prefixedKey="_zaraz_"+cs;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[cs];if(void 0!==ct){cu&&"session"==cu.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,ct):cu&&"page"==cu.scope?zaraz.pageVariables[cs]=ct:localStorage&&localStorage.setItem(prefixedKey,ct);zaraz.__watchVar={key:cs,value:ct}}};for(const{m:cw,a:cx}of zarazData.q.filter((({m:cy})=>["debug","set"].includes(cy))))zaraz[cw](...cx);for(const{m:cz,a:cA}of zaraz.q)zaraz[cz](...cA);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(by,bz,bA,bB){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[by]||(zaraz.__zarazTriggerMap[by]="");zaraz.__zarazTriggerMap[by]+="*"+bz+"*";zaraz.track("__zarazEmpty",{...bA,__zarazClientTriggers:zaraz.__zarazTriggerMap[by]},bB)};zaraz._processDataLayer=dh=>{for(const di of Object.entries(dh))zaraz.set(di[0],di[1],{scope:"page"});if(dh.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(dh.event))return;let dj={};for(let dk of dataLayer.slice(0,dataLayer.indexOf(dh)+1))dj={...dj,...dk};delete dj.event;dh.event.startsWith("gtm.")||zaraz.track(dh.event,dj)}};window.dataLayer=w.dataLayer||[];const dg=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...dl){let dm=dg.apply(this,dl);zaraz._processDataLayer(dl[0]);return dm}});dataLayer.forEach((dn=>zaraz._processDataLayer(dn)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((bb=>clearTimeout(bb)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((bc=>bc.item.removeEventListener(bc.type,bc.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._c=eZ=>{const{event:e$,...fa}=eZ;zaraz.track(e$,{...fa,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);","const el = document.createElement('script');Object.entries(JSON.parse(`{\"src\":\"/content/images/oneTrust_production/consent/e2e87157-9442-4aa3-b624-1cfc19f34f2f/OtAutoBlock.js\",\"type\":\"text/javascript\"}`)).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);","const el = document.createElement('script');Object.entries(JSON.parse(`{\"src\":\"/content/images/oneTrust_production/scripttemplates/otSDKStub.js\",\"type\":\"text/javascript\",\"charset\":\"UTF-8\",\"data-domain-script\":\"e2e87157-9442-4aa3-b624-1cfc19f34f2f\"}`)).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);","const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);","const el = document.createElement('script');Object.entries(JSON.parse(`{\"src\":\"https://www.googleoptimize.com/optimize.js?id=GTM-N4JSZJ8\"}`)).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);","const d = document.createElement('div');d.innerHTML = `<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://tr.www.cloudflare.com/ns.html?id=GTM-PKQFGQB\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->`;document.body.appendChild(d);","(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://tr.www.cloudflare.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PKQFGQB');","\nvar trackRecruitingLink = function(role, url) {\n   ga('send', 'event', 'recruiting', 'jobscore-click', role, {\n     'transport': 'beacon',\n     'hitCallback': function(){document.location = url;}\n   });\n}\n","\n\t(function() {\n\t\tvar didInit = false;\n\t\tfunction initMunchkin() {\n\t\t\tif(didInit === false) {\n\t\t\t\tdidInit = true;\n\t\t\t\tMunchkin.init('713-XSC-918');\n\t\t\t}\n\t\t}\n\t\tvar s = document.createElement('script');\n\t\ts.type = 'text/javascript';\n\t\ts.async = true;\n\t\ts.src = '//munchkin.marketo.net/munchkin.js';\n\t\ts.onreadystatechange = function() {\n\t\t\tif (this.readyState == 'complete' || this.readyState == 'loaded') {\n\t\t\t\tinitMunchkin();\n\t\t\t}\n\t\t};\n\t\ts.onload = initMunchkin;\n\t\tdocument.getElementsByTagName('head')[0].appendChild(s);\n\t\t})();\n","const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);","const el = document.createElement('script');Object.entries(JSON.parse(`{\"defer\":\"\",\"src\":\"https://api.radar.cloudflare.com/beacon.js\"}`)).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);","(function(w,d){})(window, document)"]})})(window,document);