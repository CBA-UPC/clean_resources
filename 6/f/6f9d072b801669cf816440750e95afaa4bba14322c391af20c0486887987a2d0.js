const Zen=function(){const e=n=t=["zenId","zenFp","lr"],o=(e,t)=>new Promise((o,i)=>{let a=t?"?ver="+n():"",d=document.createElement("script");d.src=e+a,d.async=!0,d.onload=(,d.onerror=(,document.head.appendChild(d)}),i="AIzaSyBCYW8JYdGu-vHvMUwuuAvoZxduUsSCVMM",a="AIzaSyCs0bWsRAA_VLBM2xKFjhL-k2cEdxcRqL0",d=async e=>{window.zen={}||zen,window.zen.config=e,window.zen.preview=!1;let i=h(),a=e.config;if(window.zen.config.isSPA=window.zen.config.isSPA||!1,""!==i){const n=await x(e.config,i);a=200===n.status?n.file:e.config,200===n.status&&f(i),i.indexOf("p")>-1&&(window.zen.preview=!0)}try{const i=await fetch(`${e.cdnPath}/dist/data/${a}?version=${n()}`),d=await i.json();window.zen.d=JSON.parse(JSON.stringify(d)).config;let r=W();if(!r)return t.map(,!1;o(window.zen.config.scaffold,!0)}catch(e){console.warn(e)}},r=e=>{if(navigator.cookieEnabled)return window.localStorage.getItem(e)},s=(e,n)=>{if(navigator.cookieEnabled)return window.localStorage.setItem(e,n)},c=l=(e,n)=>r(e)&&"null"!==r(e)?r(e):(s(e,n),n),u=w=({cdnPath:e,zenId:n,zenFp:t})=>new Promise(i=>{r("zenFp")&&i(),n&&l("zenId",n),t&&(l("zenFp",t),i());let a=o(`${e}/dist/iife.min.js`);a.then(()=>{let e=FingerprintJS.load();e.then(e=>e.get()).then(e=>{s("zenFp",e.visitorId),i()})})}),p=h=()=>p("preview")?p("preview"):"",z=(e,n)=>{const t=n.indexOf("p")>-1?n:`config${n}`;return`${e.split("/config")[0]}/${t.toLocaleLowerCase()}.json`},f=e=>{let n=document.querySelectorAll("a");n.forEach(n=>{n.href.indexOf(window.location.origin)>-1&&(n.href=n.href+"?preview="+e)})},m=()=>{let e=p("bluesky");null!==e&&(c("zenId"),c("zenFp"))},x=async(e,t)=>{let o=z(e,t),i={status:404,file:""};try{const e=await fetch(`https://content.zenimpact.io/dist/data/${o}?ver=${n()}`);await e.json();i.file=o,i.status=e.status}catch(e){console.warn(e)}return i},I=()=>"xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,,g=e=>new Promise(t=>{fetch(`https://content.zenimpact.io/dist/data/${e}/client.json?ver=${n()}`).then(e=>e.json()).then(e=>{t(e[window.location.host])}).catch(e=>console.warn(e))}),v=async e=>{let n=await g(e.client),t={client:e.client,site:null};return void 0===n?t:n.hasOwnProperty("siteId")?{client:e.client,site:n.siteId}:t},y=$=()=>({"Content-Type":"application/json","x-api-key":window.token}),b=(e,n)=>{y(e)?(window.token=i,n(i)):(window.token=a,n(a))},F=t=>{const{client:o,site:i}=t,a=`https://content.zenimpact.io/dist/data/${o}/${i}/init.json?ver=${n()}`;fetch(a,{method:"GET"}).then(e=>(401===e.status&&console.warn(e.status),e.json())).then(async n=>{var t=n[window.location.host];j(t,n=>{if(t.zenId=n.zenId?n.zenId:I(),t.zenFp=n.zenFp,n.zenId&&s("zenId",t.zenId),n.zenFp&&s("zenFp",t.zenFp),!t.isActive)return e(),!1;b(t.endpoint,})}).catch(},S=(e,n)=>(null==r("zenId")&&C(e.endpoint,e.zenId,n),e.zenId),O=async(e,n)=>{await S(e,n);let t=!!r("zenId")&&await L(e,n);t||(u(e.options,"print")&&await w(e),u(e.options,"302")?A(e,n,!0):A(e,n,!1))},L=({endpoint:e,zenId:n,siteId:t},o)=>new Promise(o=>{fetch(`${e}/validate?zenId=${r("zenId")}&siteId=${t}`,{method:"POST",headers:$()}).then(.then(e=>{e.status||(s("zenId",n),o(!1))}).catch(e=>console.warn(e))}),E="*";var k=0;const P=e=>{let n=document.getElementById("zenapseHubGetValues");if(n)return n;let t=document.createElement("iframe");return t.height=0,t.width=0,t.style.display="none",t.id="zenapseHubGetValues",t.title="zenapseHubGetValues",t.src=`${e}/values`,t},j=({hub:e},n)=>{if(r("zenId")&&r("zenFp"))return n({zenId:r("zenId"),zenFp:r("zenFp")});let t=P(e);t.addEventListener("load",()=>{t.contentWindow.postMessage("check",E)},{once:!0}),window.addEventListener("message",t=>{t.origin.indexOf("hub")>-1?n(t.data):k<20&&(console.log(`trying again ${k}`),k++,j({hub:e},n))},{once:!0}),document.body.append(t)},A=({endpoint:e,zenId:n,zenFp:t,hub:o,siteId:i},a,d)=>{if(n&&t)return!1;let s=document.createElement("iframe"),c=l("zenId",n),u=r("zenFp")?`&print=${r("zenFp")}`:"";s.height=0,s.width=0,s.id="zenapseHubId",s.title="zenapseHubFrame",s.src=`${o}/set?zenId=${c}${u}&token=${a}`;let w=null;s.onload=(,window.addEventListener("message",n=>{const t=null!==w?w.contentWindow:null;if(n.source===t){let t=M(n.data);t||d&&T(o,c,i,a,e)}},{once:!0}),setTimeout(()=>{document.body.append(s),w=document.getElementById(s.id)},5e3)},M=e=>"object"==typeof e&&void 0!==e.zenId,T=(e,n,t,o)=>{let i=document.createElement("form"),a=r("zenFp");i.action=`${e}/zenhub`,i.id="hubform",i.method="POST",i.innerHTML=`<input name="zenId" value="${n}" />\n                      <input name="site" value="${t}" />\n                      <input name="token" value="${o}" />\n                      ${a?`<input name="print" value="${a}" />`:""}`,document.body.append(i),i.submit()},C=(e,n)=>{fetch(`${e}/zenid?zenId=${n}`,{method:"POST",headers:$()}).then(e=>e.json()).catch(e=>console.warn(e))},G=e=>{let n=e.OnetrustActiveGroups.split(",").filter(.map(,t=!1;return(n.includes(2)||n.includes(3)||n.includes(4))&&(t=!0),t},H=()=>!!window.dataLayer.find(,V=()=>window.dataLayer.find(,W=()=>{if(0===window.dataLayer.length)return!0;if(!H())return!0;let e=V();if(e)return G(e);console.log("checking again"),setTimeout(()=>{let e=V();return!e||G(e)},200)},B=async e=>(window.dataLayer=window.dataLayer||[],!!e.hasOwnProperty("client")&&(e.hasOwnProperty("site")||(e=await v(e)),!!e.site&&(m(),void F(e,a))));return{init:B}}();