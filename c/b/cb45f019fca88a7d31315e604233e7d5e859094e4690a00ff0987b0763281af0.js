   (()=>{"use strict";var e={d:o:r:,t={};((e,t,n)=>{n.r(t),n.d(t,{addSubscription:()=>I,getItemRecommendation:()=>h,getNewsFromSources:()=>P,getSubscription:()=>_,getUserBlocksHome:()=>x,getUserBlogPostsRecommendation:()=>g,getUserInscriptions:()=>C,getUserLoyalty:()=>b,getUserTagsInfo:()=>S,getUserViewsByCentral:()=>k,isFirstUserAccess:),/test|development/.test("production");var r=o=i=function(){if("www.uol.com.br"===location.hostname&&"/"===location.pathname)return"home";try{if(window.universal_variable.aud.central)return window.universal_variable.aud.central;throw new Error("central não definida em universal_variable")}catch(e){return"undefined"}};var a,s,l,u=1==(!0===/duckslake-sdk=debug/.test(location.search))?console.log.bind(console,"[ducks-lake:middleware]"),c=!0===/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&"www.uol.com.br"!==location.hostname?"https://"+location.hostname+((null===(a=window.Config)||void 0===a?void 0:a.servicename)||"/service/")+"index.htm?loadComponent=assets&contentType=html&tpl=assets/modules/duckslake-sdk/index.html&version=3.3.1":"https://www.uol.com.br/service/index.htm?loadComponent=assets&contentType=html&tpl=assets/modules/duckslake-sdk/index.html&version=3.3.1",d=function(e){var t=r(c.split("/").filter),2);return t[0]+"//"+t[1]}(),f=!1,v=document.createElement("iframe"),m=new Map,w=new Set,p=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return s(void 0,void 0,void 0,function(){var n;return l(this,function(r){switch(r.label){case 0:return"init"===e?[3,2]:[4,s(void 0,void 0,void 0,function(){return l(this,function(e){return!0===f?[2,Promise.resolve()]:[2,new Promise)]})})];case 1:r.sent(),r.label=2;case 2:return n=m.size+1,[2,new Promise(function(r){m.set(n,r),v.contentWindow.postMessage({id:n,action:e,params:t},c)})]}})})}},y=function(){window.addEventListener("message",function(e){var t=e.origin,n=e.data,r=n.id,o=n.result;if(u("middleware recebeu mensagem do sdk",r,e.origin,e.data),t===d){var i=m.get(r);"function"==typeof i&&(m.set(r,null),i(o))}else u("descartando mensagem de origin que não é do SDK (recebido: "+t+" / esperado: "+d+")")},!1),v.onload=function(){return s(void 0,void 0,void 0,function(){var e,t,n,a;return l(this,function(s){switch(s.label){case 0:return[4,p("init")({actualUser:(l=r(document.cookie.split(";").m)}).find(function(e){var t=r(e,1)[0];return"_ga"===(void 0===t?"":t).trim()})||[],2)[1],void 0!==l?{identified:!0,gaID:o(l)}:{identified:!1,gaID:null}),centralKey:i(),platform:(null===(t=window.Config)||void 0===t?void 0:t.platform)||"",mediaId:null===(a=null===(n=window.universal_variable)||void 0===n?void 0:n.aud)||void 0===a?void 0:a.mediaId,referrer:location.href})];case 1:return(e=s.sent()).metrics&&e.metrics.fidelity&&["sc","aud"].forEach(function(t){window.universal_variable=window.universal_variable||{},window.universal_variable[t]=window.universal_variable[t]||{},window.universal_variable[t].userFidelity=e.metrics.fidelity}),f=!0,function(){var e,t;try{for(var)}(w),r=n.next();!r.done;r=n.next())(0,r.value)()}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}}(),[2]}var l})})},v.name="duckslake-sdk",v.src=c,v.style.display="none",v.style.width="0",v.style.height="0",v.style.opacity="0",v.style.border="0",v.style.position="absolute",v.style.left="-9999px",v.setAttribute("width","0"),v.setAttribute("height","0"),v.setAttribute("sandbox","allow-scripts allow-same-origin"),v.setAttribute("referrerpolicy","no-referrer"),document.body.appendChild(v)},b=p("getUserLoyalty"),h=p("getItemRecommendation"),g=p("getUserBlogPostsRecommendation"),k=p("getUserViewsByCentral"),S=p("getUserTagsInfo"),x=p("getUserBlocksHome"),U=p("isFirstUserAccess"),_=p("getSubscription"),I=p("addSubscription"),P=p("getNewsFromSources"),C=p("getUserInscriptions");!function(){if("interactive"!=document.readyState){var)};window.addEventListener("DOMContentLoaded",e)}else y()}()})(0,t,e),window.DucksLake=t})();   