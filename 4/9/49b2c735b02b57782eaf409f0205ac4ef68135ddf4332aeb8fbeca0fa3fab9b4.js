var pp_gemius_use_cmp = true;
function gemius_pending(i) {
  window[i] =
    window[i] ||
    function () {
      var x = (window[i + '_pdata'] = window[i + '_pdata'] || []);
      x[x.length] = arguments;
    };
}
gemius_pending('gemius_hit');
gemius_pending('gemius_event');
gemius_pending('pp_gemius_hit');
gemius_pending('pp_gemius_event');
(function (d, t) {
  try {
    var gt = d.createElement(t),
      s = d.getElementsByTagName(t)[0],
      l = 'http' + (location.protocol == 'https:' ? 's' : '');
    gt.setAttribute('async', 'async');
    gt.setAttribute('defer', 'defer');
    gt.src = l + '://s.aimg.sk/vendor/gemius/current.js?v=3.1406eb7e5';
    s.parentNode.insertBefore(gt, s);
  } catch (e) {}
})(document, 'script');
e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/aktuality_symfony/build/crossMenu/",n(n.s="OyVY")}({OyVY:function(e,t,n){"use strict";n.r(t);n("TJ4Q");const r=async(e=!1)=>{const t=i("loc_wthr");if(null==t||e&&"5045"===String(t))return;const n=document.getElementById("cross-menu-weather-link");if(null===n)throw new Error("Parent element is not defined.");const r=n.querySelector("#cross-menu-weather-location"),l=n.querySelector("#cross-menu-weather-icon"),a=n.querySelector("#cross-menu-weather-temperature"),{weatherData:c}=await o(t),u=null==c?void 0:c.location_url,s=null==c?void 0:c.location_name,d=null==c?void 0:c.icon_small,f=null==c?void 0:c.temp;if(u&&(n.href=u),s&&r&&(r.textContent=" "+s),d&&l){const e=document.createElement("div");e.innerHTML=d.trim(),l.replaceChildren(e.firstChild)}f&&a&&(a.textContent=f+" °C - ")},o=async e=>{let t=window.location.host,n="";-1!==t.indexOf("aktuality")&&(n=t.slice(0,t.indexOf(".")),t=t.replace(n,"www"));const r=await fetch(`https://${t}/api/homepage/weather-forecast/?cityId=${e}&project=${n}`,{credentials:"include"});return await r.json()},i=e=>{var t;return null===(t=document.cookie.split("; ").find(t=>t.startsWith(`${e}=`)))||void 0===t?void 0:t.split("=")[1]};(async()=>{let e=0;try{await r(!0),e=setInterval(async()=>{try{await r()}catch(t){clearInterval(e)}},36e5)}catch(t){clearInterval(e),console.warn(t)}})()},TJ4Q:function(e,t,n){}});