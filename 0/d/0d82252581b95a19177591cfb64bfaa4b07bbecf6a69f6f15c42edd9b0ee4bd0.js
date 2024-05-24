"use strict";(()=>{var O=!1,ne=10,g=null;try{g=window;let e=null,t=0;for(;t<ne&&(g?.parent?.window&&g?.parent!==g);){e=g.parent;let n=null,o=e.document.getElementsByTagName("iframe");for(let r=0;r<o.length;r++){let i=o[r];i.contentWindow===g&&(n=i)}if(O=!!n,!o?.length||!O)break;g=g.parent.window,t++}}catch{}function j(){return window?.TEST_API_SERVER_DOMAIN||"api.dable.io"}function q(){return window?.TEST_AD_LOGGING_SERVER_DOMAIN||"ad-log.dable.io"}function J(){return location?.protocol==="https:"?"https:":"http:"}function p(e){try{console.log(`Dable DEBUG: ${e}`)}catch{}}function P(){let e=null,t=null;O?(t=window.parent.window,e=window.parent.document):(t=window,e=document);let n=0;return typeof t.pageYOffset=="number"?n=t.pageYOffset:e.documentElement?.scrollTop?n=e.documentElement.scrollTop:e.body?.scrollTop&&(n=e.body.scrollTop),n}function k(){let e;O?e=util.rootWindow():e=window;let t=e.document.body,n=e.document.documentElement||document.body;return{viewport:e.innerHeight||n.clientHeight,window:Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)}}function A(){let e=window.crypto||window.msCrypto;if(!(e&&e.getRandomValues))return Math.random();let t=4294967295,n=new Uint32Array(1);return e.getRandomValues(n),n[0]/t}var C=class{constructor(t){this.executor=t}execute(t){let n=Array.prototype.shift.apply(t);this.executor[n]?this.executor[n].apply(this.executor,t):p(`\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uBA85\uB839\uC785\uB2C8\uB2E4: ${n}`)}push(t){if(Array.isArray(t[0])){for(let n=0;n<t.length;n++){let o=t[n];this.push(o)}return}return this.execute(t)}};var ie=function(){let e=0;return()=>++e}();function oe(e){let t=document.createElement("script"),n=!1;t.src=e,t.async=!0,t.onload=()=>{n||(n=!0,t.onload=null,t?.parentNode?.removeChild(t))},document.head.appendChild(t)}function M(e,t){let n=[];return Array.isArray(t)?t.forEach((o,r)=>{let i=M(`${e}[${r}]`,o);i&&n.push(i)}):t&&typeof t=="object"?Object.keys(t).forEach(o=>{let r=M(`${e}[${o}]`,t[o]);r&&n.push(r)}):e&&n.push(encodeURIComponent(e)+"="+encodeURIComponent(String(t))),n.join("&")}function I(e,t={},n){let o=[];Object.keys(t||{}).forEach(i=>{let s=M(i,t[i]);s&&o.push(s)});let r=`_dbljson${ie()}`;return typeof window=="object"&&(window[r]=i=>{n?.(i)}),o.push(`callback=${r}&_=${Date.now()}`),oe(`${e}?${o.join("&")}`),r}function l(e){let n=new RegExp(`\\b${e}=(.*?)(?:[,;]|$)`).exec(document.cookie);return n&&n[1]&&n[1]!=="null"?n[1]:""}function _(e,t,n=60){let o=new Date(Date.now()+n*1e3),r=location.hostname.split("."),i=Math.max(0,r.length-2)+1;for(;--i>=0;){let s=r.slice(i).join("."),c=`${e}=${t}; path=/; domain=${s}; expires=${o.toUTCString()};`;if(document.cookie=c,l(e))return}}function re(e){if(window.gtag)return;let t=document.createElement("script");t.async=!0,t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`;let n=document.createElement("script");n.innerHTML='window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)}gtag("js", new Date())',document.head.appendChild(t),document.head.appendChild(n)}function X(e,t){if(!e)return;re(e);let n={send_to:e,...t};try{gtag("config",e),gtag("event","page_view",n)}catch{}}function K(e,t,n=20){let r=e-t,i=e>0?Math.floor(r/400):0;return Math.min(i,n-1)}function se(e){let t,n,o=null,r,i="G",s=["MDK77FHMS5","0WBKEJ0RS9","4KP3M9S35E","HZTVRE3QMR","7NS7KV1CKM","0HJXDNR6TP","5HJSY0GGGQ","RR0JGJWWVS","2NRTFCWHZX","JXDCE1T5M4"],c=["ZBJ7JX11PL","TH9DNLM4ST","RBLEQ9SYXS","H50HXHNWK6","KGMEQNKMPR","LL1S649PC7","PN4GCNT1WZ","8801MDGFCX","R6J3ZGR5YV","0ZLWSJ955R","Q73XC0PFZZ","R10748GL9Y","GS31TDW2S2","KMPPLRHJH5","79C1V7Q4Z0","6CKWRT2JS7","QG18F88RWX","YMFLW158KN","B13LD3ESNR","CJCVTN52FS"];if(e<=4e3)t=0,n=s;else if(e<=12e3)t=4e3,n=c;else return null;return r=K(e,t),r===null?null:(o=i+"-"+n[r],o)}function Q(e,t,n){if(e==="worldvision.or.kr"||e==="pickup"||n===void 0||e===void 0)return;let o={dimension1:n,dimension2:t},r=se(n);X(r,o)}function de(e){let{platform:t,platformVersion:n,wow64:o,mobile:r,model:i}=e,s=n.replace(/\./g,"_");if(t==="Android"&&r)return`Linux; Android ${s}; ${i}`;if(t==="macOS")return`Macintosh; Intel Mac OS X ${s}`;if(t==="Windows"){let c=n.split("."),u=parseInt(c[0]),f=o?"WOW64":"Win64; x64";return u>0?`Windows NT 10.0; ${f}`:`Windows NT 6.${c[1]}; ${f}`}return t==="Chrome OS"?`X11; CrOS x86_64 ${n}`:t==="Linux"?"X11; Linux x86_64":`${t} ${n}`}function Y(){let e=navigator.userAgentData,t=Promise.resolve("");if(!e||!e.getHighEntropyValues)return t;let n=Number(e.brands.find(o=>o.brand==="Chromium")?.version);return!n||n<101?t:e.getHighEntropyValues(["mobile","platformVersion","platform","fullVersionList","model","wow64"]).then(o=>{let r=o.fullVersionList.find(c=>c.brand==="Chromium")?.version,i=de(o),s=navigator.userAgent.replace(/\bChrome\/[\d.]+/,`Chrome/${r}`).replace(/^(Mozilla\/5\.0) \(.+?\)/,`$1 (${i})`);return navigator.userAgent!==s?s:""})}var ae=String(Math.round(A()*1e8)),le=1e3*10,U=1e3*60*30,ue=1e3*60*60*24*30,v=!1,S=null,w=null,Z=!1,B=!0,G=null,E=e=>{let t=null;try{t=decodeURIComponent(e)}catch{t=unescape(e)}return t};function x(e,t){let n,{client_name_or_account_id:o,event_type:r,data:i={},uid:s,cid:c,cached_click:u,cached_conversion:f,client_id:b,items:N}=e;i===null&&(i={});let $=E(window?.location?.href||"");if($.indexOf("dablena=NATEST")>-1)return;let d=window?.location?.href?.match(/[\?\&]utm_[a-z]+=[^\#\&]+/g);u||f?(n=(u||f).split("|"),n.unshift("")):n=$.match(/[\?\&]dablena=([^\|]+)\|([^\|]+)\|([^\|]+)\|([^\|]+)\|([^\|\#\&]+)\|([^\|\#\&]+)(?:\|([^\|\#\&]+))(?:\|([^\|\#\&]+))(?:\|(\d+))?/);let m=document?.referrer||"";m.indexOf("api.dable.io/widgets")>-1?(s=E(m.split("/")[7]?.split("?")[0]||"")||s,i.widget_id=m.split("/")[5],i.service_name=n?.[3]||E(m.match(/[\?\&]site=([^\#\&]+)/)?.[1]||""),i.campaign_id=n?.[4]||"",i.content_id=n?.[5]||"",i.method=n?.[6]||"",i.channel=n?.[7]||"",i.request_id=n?.[8]||""):n&&(s=n?.[1]||s,i.widget_id=n?.[2],i.service_name=n?.[3],i.campaign_id=n?.[4]||"",i.content_id=n?.[5]||"",i.method=n?.[6]||"",i.channel=n?.[7]||"",i.request_id=n?.[8]||""),i.url=window?.location?.href||"",i.ref=m,i.cid=c,b&&(i.client_id=b),N&&(i.items=N),(r.indexOf("adview+")===0||r.indexOf("inlinkview+")===0||v&&i.session_id)&&(i.duration=e.duration||0,i.scroll_y=e.scroll_y,i.page_height=e.page_height,i.window_height=e.window_height,i.click_timestamp=n?.[9]||"");let y=`${J()}//${q()}/logs`;if(y+=`/clients/${encodeURIComponent(o)}`,y+=`/users/${encodeURIComponent(s)}/${r}`,d)for(let a=0;a<d.length;a++){let h=d[a]?.substring(1).split("=");i[h[0]]=E(h[1])}i.z=String(Math.round(Math.random()*1e6));let T=setTimeout(function(){t&&t()},2e3);Y().then(a=>{a&&(i.user_agent=a),I(y,i,function(h){h!=="OK"&&p(h),(!(r.indexOf("adview+")===0||r.indexOf("inlinkview+")===0||r.indexOf("visit")===0)||!Z)&&(Q(o,r,b),Z=!0),T&&(clearTimeout(T),t&&t())})})}var fe=e=>{let t=0;G=new Date().getTime();let n=setInterval(function(){let o=new Date().getTime();o-G>le&&clearInterval(n),G=o,t=t+1,e.duration=t;try{let r=k();e.scroll_y=P(),e.page_height=r.window,e.window_height=r.viewport}catch{e.scroll_y=-1,e.page_height=-1,e.window_height=-1}x(e),_(S,w,U)},1e3)},z=(e,t,n)=>{setTimeout(function(){e.event_type=`adview+${t}`,e.duration=t;try{let o=k();e.scroll_y=P(),e.page_height=o.window,e.window_height=o.viewport}catch{e.scroll_y=-1,e.page_height=-1,e.window_height=-1}n?n(e):x(e)},t*1e3)},he=(e,t)=>{let{count:n}=t;t.duration=n,x(t),(n===5||n===30)&&(e.event_type=`inlinkview+${n}`,e.duration=n,x(e))};function ee(e,t){let{client_name_or_account_id:n,uid:o,cid:r,cached_click:i,cached_conversion:s,client_id:c,items:u,data:f}=e,b=/[\?\&]dablena=([^\|]+)\|([^\|]+)\|([^\|]+)\|([^\|]+)\|([^\|\#\&]+)\|([^\|\#\&]+)(?:\|([^\|\#\&]+))(?:\|([^\|\#\&]+))(?:\|(\d+))?/,N=window?.location?.href?.match(/[\?\&]utm_[a-z]+=[^\#\&]+/g),$=E(window?.location?.href||"").match(b),d="visit";S=`__dbl__se_${c}`;let m=`__dbl__re_${c}`;v=!1;let y=!!l(S),T=!!l(m);($||i)&&(f?.is_native?d="inlinkview":d="adview",y?w=l(S):(w=r.slice(0,3)+String(Math.round(A()*1e8)),_(m,1,ue)),v=!0,_(S,w,U)),d==="visit"&&(y||T)&&(y?w=l(S):T&&(w=r.slice(0,3)+String(Math.round(A()*1e8))),v=!0,_(S,w,U));let a={event_type:d,client_name_or_account_id:n,uid:o,cid:r,cached_click:i,cached_conversion:s,client_id:c,items:u},h={event_type:d,client_name_or_account_id:n,uid:o,cid:r,cached_click:i,cached_conversion:s,client_id:c,items:u,data:{session_id:w,user_page_id:ae}};if(d==="inlinkview"){let{scroll_y:L,page_height:H,window_height:D,count:W}=f;Object.assign(a,{scroll_y:L},{page_height:H},{window_height:D},{count:W}),Object.assign(h,{scroll_y:L},{page_height:H},{window_height:D},{count:W}),he(a,h)}B&&(d==="adview"&&(z(a,5),z(a,30)),v&&d!=="inlinkview"&&fe(h),d==="visit"&&(!v||N)?x(a,t):t&&t(),f?.is_native&&(B=!1))}function pe(){if(window.fbq)return;let e=window.fbq=function(){return e.callMethod?e.callMethod.apply(e,arguments):e.queue.push(arguments)};window._fbq||(window._fbq=e),e.push=e,e.loaded=1,e.version="2.0",e.queue=[];let t=document.createElement("script");t.async=1,t.src="https://connect.facebook.net/en_US/fbevents.js";let n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}function te(e,t){pe(),window.fbq("init",`${e}`),window.fbq("track",t)}var ge=e=>/\d\d\d-\d\d\d-\d\d\d/.test(e)?Number(e.split("-").join("").substring(3)):null,_e={Visit:{type:"visit"},PageView:{type:"visit"},ViewContent:{type:"content"},Search:{type:"search"},AddToCart:{type:"cart"},AddToWishlist:{type:"wishlist"},InitialCheckout:{type:"checkout"},InitiateCheckout:{type:"checkout"},AddPaymentInfo:{type:"payment"},Purchase:{type:"purchase",validateData(e){if(!e?.value||!e?.currency)throw"value or currency did not defined."}},Lead:{type:"lead"},CompleteRegistration:{type:"registration"},event1:{type:"event1"},event2:{type:"event2"},event3:{type:"event3"}},R=class{cacheCookieName=void 0;cacheExpire=void 0;constructor(){this.cacheCookieName="dable_uid",this.cacheExpire=3*365*24*60*60*1e3}init(t){this.clientNameOrAccountId=t}track(t,n,o){if(typeof n=="function"&&(o=n,n=null),o||(o=function(){}),!this.clientNameOrAccountId){p("init should executed before executing track method"),o();return}if(document.location.href.indexOf("gtm-msr.appspot")>-1){o();return}let r=_e[t];try{if(r)r.validateData&&r.validateData(n);else throw`Invalid event code: ${t}`}catch(i){p(i)}this.fetchPrefs(i=>{this.fetchUID(s=>{if(i.sp_client===null){p(`Invalid ID: ${this.clientNameOrAccountId}`),o();return}i.sp_client?.facebook?.enabled&&i.sp_client?.facebook?.pixel_id&&te(i.sp_client.facebook.pixel_id,t),(t==="PageView"?ee:x)({client_name_or_account_id:this.clientNameOrAccountId,event_type:r.type,data:n,uid:s,cid:i.cid,cached_click:i.sp_client?.cached_click,cached_conversion:i.sp_client?.cached_conversion,client_id:i.sp_client?.client_id},o)})})}fetchPrefs(t){if(!this.clientNameOrAccountId){p("init should executed before executing fetchPrefs method");return}if(this.prefs){let s=this.clientNameOrAccountId===this.prefs.sp_client.client_name,c=ge(this.clientNameOrAccountId)===this.prefs.sp_client.client_id;if(s||c){t(this.prefs);return}}if(this.fetchPrefsQueue){this.fetchPrefsQueue.push(t);return}this.fetchPrefsQueue=[t];let n=l(this.cacheCookieName),o=window?.location?.href?.match(/[\?\&]ecid=([^\#\&]+)/)?.[1],r=window?.location?.href?.match(/[?&]request_id=([^#&]+)/)?.[1],i={paramUid:"",cached_uid:"",requestId:""};o&&(i.paramUid=o),r&&(i.requestId=r),n&&n!=="undefined"&&(i.cached_uid=n),I(`https://${j()}/plugin/services/${encodeURIComponent(this.clientNameOrAccountId)}/prefs2`,i,s=>{this.prefs=s&&s.result||null;for(let c=0;c<this.fetchPrefsQueue.length;c++){let u=this.fetchPrefsQueue[c];u(this.prefs)}this.fetchPrefsQueue=null,_(this.cacheCookieName,this.prefs.cid,this.cacheExpire)})}fetchUID(t){let n=function(){return String(Math.round(A()*9e7)+1e7)+"."+String(new Date().getTime())};if(this.uid){t(this.uid);return}this.fetchPrefs(o=>{let{cid:r}=o;t(r||n())})}};(e=>{let t=e.q||[];if(Array.isArray(t)){e.q=new C(new R);for(let n=0;n<t.length;n++){let o=t[n];e.q.push(o)}}})(window.dablena);})();
