try{(function(w,d){zaraz.debug=(fE="")=>{document.cookie=`zarazDebug=${fE}; path=/`;location.reload()};window.zaraz._al=function(eB,eC,eD){w.zaraz.listeners.push({item:eB,type:eC,callback:eD});eB.addEventListener(eC,eD)};zaraz.preview=(eE="")=>{document.cookie=`zarazPreview=${eE}; path=/`;location.reload()};zaraz.i=function(fv){const fw=d.createElement("div");fw.innerHTML=unescape(fv);const fx=fw.querySelectorAll("script");for(let fy=0;fy<fx.length;fy++){const fz=d.createElement("script");fx[fy].innerHTML&&(fz.innerHTML=fx[fy].innerHTML);for(const fA of fx[fy].attributes)fz.setAttribute(fA.name,fA.value);d.head.appendChild(fz);fx[fy].remove()}d.body.appendChild(fw)};zaraz.f=async function(fB,fC){const fD={credentials:"include",keepalive:!0,mode:"no-cors"};if(fC){fD.method="POST";fD.body=new URLSearchParams(fC);fD.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(fB,fD)};window.zaraz._p=async bv=>new Promise((bw=>{if(bv){bv.e&&bv.e.forEach((bx=>{try{new Function(bx)()}catch(by){console.error(`Error executing script: ${bx}\n`,by)}}));Promise.allSettled((bv.f||[]).map((bz=>fetch(bz[0],bz[1]))))}bw()}));zaraz.pageVariables={};zaraz.__zcl=zaraz.__zcl||{};zaraz.track=async function(e$,fa,fb){return new Promise(((fc,fd)=>{const fe={name:e$,data:{}};for(const ff of[localStorage,sessionStorage])Object.keys(ff||{}).filter((fh=>fh.startsWith("_zaraz_"))).forEach((fg=>{try{fe.data[fg.slice(7)]=JSON.parse(ff.getItem(fg))}catch{fe.data[fg.slice(7)]=ff.getItem(fg)}}));Object.keys(zaraz.pageVariables).forEach((fi=>fe.data[fi]=JSON.parse(zaraz.pageVariables[fi])));Object.keys(zaraz.__zcl).forEach((fj=>fe.data[`__zcl_${fj}`]=zaraz.__zcl[fj]));fe.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
zarazData.c=d.cookie;
//
fe.data={...fe.data,...fa};fe.zarazData=zarazData;fetch("https://blog.cloudflare.com/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(fe)}).catch((()=>{
//
return fetch("https://blog.cloudflare.com/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(fe)})})).then((function(fl){zarazData._let=(new Date).getTime();fl.ok||fd();return 204!==fl.status&&fl.json()})).then((async fk=>{await zaraz._p(fk);"function"==typeof fb&&fb()})).finally((()=>fc()))}))};zaraz.set=function(fm,fn,fo){try{fn=JSON.stringify(fn)}catch(fp){return}prefixedKey="_zaraz_"+fm;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[fm];if(void 0!==fn){fo&&"session"==fo.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,fn):fo&&"page"==fo.scope?zaraz.pageVariables[fm]=fn:localStorage&&localStorage.setItem(prefixedKey,fn);zaraz.__watchVar={key:fm,value:fn}}};for(const{m:fq,a:fr}of zarazData.q.filter((({m:fs})=>["debug","set"].includes(fs))))zaraz[fq](...fr);for(const{m:ft,a:fu}of zaraz.q)zaraz[ft](...fu);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(ea,eb,ec,ed){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[ea]||(zaraz.__zarazTriggerMap[ea]="");zaraz.__zarazTriggerMap[ea]+="*"+eb+"*";zaraz.track("__zarazEmpty",{...ec,__zarazClientTriggers:zaraz.__zarazTriggerMap[ea]},ed)};zaraz._processDataLayer=fI=>{for(const fJ of Object.entries(fI))zaraz.set(fJ[0],fJ[1],{scope:"page"});if(fI.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(fI.event))return;let fK={};for(let fL of dataLayer.slice(0,dataLayer.indexOf(fI)+1))fK={...fK,...fL};delete fK.event;fI.event.startsWith("gtm.")||zaraz.track(fI.event,fK)}};window.dataLayer=w.dataLayer||[];const fH=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...fM){let fN=fH.apply(this,fM);zaraz._processDataLayer(fM[0]);return fN}});dataLayer.forEach((fO=>zaraz._processDataLayer(fO)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((dB=>clearTimeout(dB)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((dC=>dC.item.removeEventListener(dC.type,dC.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._c=cI=>{const{event:cJ,...cK}=cI;zaraz.track(cJ,{...cK,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);","const el = document.createElement('script');Object.entries(JSON.parse(`{\"src\":\"/content/images/oneTrust_production/consent/e2e87157-9442-4aa3-b624-1cfc19f34f2f/OtAutoBlock.js\",\"type\":\"text/javascript\"}`)).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);","const el = document.createElement('script');Object.entries(JSON.parse(`{\"src\":\"/content/images/oneTrust_production/scripttemplates/otSDKStub.js\",\"type\":\"text/javascript\",\"charset\":\"UTF-8\",\"data-domain-script\":\"e2e87157-9442-4aa3-b624-1cfc19f34f2f\"}`)).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);","const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);","const el = document.createElement('script');Object.entries(JSON.parse(`{\"src\":\"https://www.googleoptimize.com/optimize.js?id=GTM-N4JSZJ8\"}`)).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);","const d = document.createElement('div');d.innerHTML = `<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src=\"https://tr.www.cloudflare.com/ns.html?id=GTM-PKQFGQB\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->`;document.body.appendChild(d);","(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://tr.www.cloudflare.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PKQFGQB');","\nvar trackRecruitingLink = function(role, url) {\n   ga('send', 'event', 'recruiting', 'jobscore-click', role, {\n     'transport': 'beacon',\n     'hitCallback': function(){document.location = url;}\n   });\n}\n","\n\t(function() {\n\t\tvar didInit = false;\n\t\tfunction initMunchkin() {\n\t\t\tif(didInit === false) {\n\t\t\t\tdidInit = true;\n\t\t\t\tMunchkin.init('713-XSC-918');\n\t\t\t}\n\t\t}\n\t\tvar s = document.createElement('script');\n\t\ts.type = 'text/javascript';\n\t\ts.async = true;\n\t\ts.src = '//munchkin.marketo.net/munchkin.js';\n\t\ts.onreadystatechange = function() {\n\t\t\tif (this.readyState == 'complete' || this.readyState == 'loaded') {\n\t\t\t\tinitMunchkin();\n\t\t\t}\n\t\t};\n\t\ts.onload = initMunchkin;\n\t\tdocument.getElementsByTagName('head')[0].appendChild(s);\n\t\t})();\n","const d = document.createElement('div');d.innerHTML = ``;document.body.appendChild(d);","const el = document.createElement('script');Object.entries(JSON.parse(`{\"defer\":\"\",\"src\":\"https://api.radar.cloudflare.com/beacon.js\"}`)).forEach(([k, v]) => {el.setAttribute(k, v);});document.head.appendChild(el);","(function(w,d){})(window, document)"]})})(window,document)}catch(e){throw fetch("https://blog.cloudflare.com/cdn-cgi/zaraz/t"),e;}