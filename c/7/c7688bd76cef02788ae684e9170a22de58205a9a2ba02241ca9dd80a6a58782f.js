!function(t){let e=()=>{try{return Boolean("object"==typeof t.top&&t.top.document)}catch(e){return!1}},r=(t,e)=>t.getAttribute(e),n=(t,e,n)=>r(t,e)&&r(t,e).includes(n),o=(t,e)=>{let r=RegExp('"',"g");if(t)return`"${e.getAttribute("property")||e.getAttribute("name")}":"${e.content.replace(r,"`")}"`},c=t=>t.filter((e,r)=>t.indexOf(e)===r&&""!==e),i=(()=>{if(!e())return null;let r={},i=t.top.document.title||"",p=t.top.document.getElementsByTagName("h1")[0]?.textContent||"",a=t.top.document.head.getElementsByTagName("meta"),s=t=>n(a[t],"property","title")||n(a[t],"name","title")||n(a[t],"property","yandex_recommendations_title"),d=t=>n(a[t],"property","description")||n(a[t],"name","description"),l=t=>n(a[t],"property","yandex_recommendations_category")||n(a[t],"name","mediator_theme"),m=[],u=[],y=[];Object.keys(a).forEach(t=>{o(s(t),a[t])&&m.push(o(s(t),a[t])),o(d(t),a[t])&&u.push(o(d(t),a[t])),o(l(t),a[t])&&y.push(o(l(t),a[t]))});let g={};i&&(g.title=i),p&&(g.header=p);let h=`${c(m).join()}`;","===h[0]&&(h=h.substring(1)),h=h.replace(/\n/g,"");try{g.meta=JSON.parse(`{${h}}`)}catch(f){g.meta=""}let b={},j=`${c(u).join()}`;","===j[0]&&(j=j.substring(1)),j=j.replace(/\n/g,"");try{b.pd=JSON.parse(`{${j}}`)}catch(x){b.pd=""}let $={},_=`${c(y).join()}`;","===_[0]&&(_=_.substring(1)),_=_.replace(/\n/g,"");try{$.pc=JSON.parse(`{${_}}`)}catch(k){$.pc=""}return r.pt=JSON.stringify(g),r.pd=b?.pd?JSON.stringify(b.pd):"",r.pc=$?.pc?JSON.stringify($.pc):"",r.cv=document?.cookie?document.cookie:"",r})();if(!i)return;let p=Object.values(i).every(t=>""===t.trim());if(!window.top.mt_ct&&!p){var a;fetch("https://ad.mail.ru/web/adcontext/",{method:"POST",headers:{"Content-type":"application/json"},mode:"no-cors",cache:"no-cache",credentials:"include",body:btoa(unescape(encodeURIComponent(JSON.stringify(i))))}).then(t=>{t.ok&&(window.top.mt_ct=!0)})}}(window);