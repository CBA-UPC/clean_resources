"use strict";(self.webpackChunkcomb_trade=self.webpackChunkcomb_trade||[]).push([[53615],{11411:(e,t,r)=>{r.d(t,{IF:()=>Z,w2:()=>I});var n=r(1413),o=(r(69710),r(46539),r(57500),r(57235),r(11244),r(43612),r(41561),r(46536),r(68851),r(31705),r(8080)),a=r(58927),c=r(49783),i=r(46430),l=r(60378),s=r(61805),u=r(91103),f=r(53949),v=r(21911),d="okI18nVersion",p="en_US",g=o.Z.localeStore,h=o.Z.localeDevStore,w=o.Z.localeState,j=o.Z.hasLoadedModules,y=null,Z=new Promise(();function m(e,t,r,o){var a=w[t]&&w[t].locale||f.Z.locale||c.Z.get("locale")||c.Z.get("language")||p,i=(0,v.a5)(),l=e||(0,n.Z)((0,n.Z)({},window&&window["".concat(t)]),{},{version:r,project:t}),s=(0,n.Z)((0,n.Z)((0,n.Z)({},h["".concat(t)]),l),i);(0,u.S1)(s,{locale:a.toLowerCase(),project:"".concat(t)});var d=[];w.fetchModules.map((function(e){return e.project===t?d.push((0,n.Z)((0,n.Z)({},e),{},{fetchDone:!0})):d.push(e)})),w.fetchModules=d;var g=w["".concat(t,"_").concat(o)];(null===g||void 0===g?void 0:g.updateView)&&(null===g||void 0===g||g.updateView());var j=w.fetchConfigs.find(();j&&j.fastRender&&j.onLocaleReady(e||window["".concat(t)])}function b(e,t,r,a){var i=(window||{}).onLocaleDataReady,l=w[t.project]&&w[t.project].locale||f.Z.locale||c.Z.get("locale")||c.Z.get("language")||p;r||!window["".concat(t.project)]||a||t.noCache||window.addEventListener("load",(function(){try{var e=JSON.stringify(window["".concat(t.project)]),r=(0,v.Gc)(t.locale,e),o=localStorage.i18nDBversion||1e4;!r&&(0,s.S_)({project:t.project,locale:t.locale,version:t.version,data:(0,n.Z)((0,n.Z)({},window["".concat(t.project)]),{},{project:"".concat(t.project,"_").concat(t.locale),version:t.version})},Number.isNaN(o)?1e4:o)}catch(a){(0,v.pH)("i18n-multiLoaded-setDB-err",t)}}));var d=r||(0,n.Z)((0,n.Z)({},window&&window["".concat(t.project)]),{},{version:t.version,project:t.project}),Z=(0,v.a5)(),b=(0,n.Z)((0,n.Z)((0,n.Z)({},h["".concat(t.project)]),d),Z);if(i&&i(r||(window&&window["".concat(t.project)],{project:t.project})),e)return j.push(t.project),void y(b);(0,u.S1)(b,{locale:l.toLowerCase(),project:"".concat(t.project)}),o.Z.usingRemote?w["".concat(t.project,"_").concat(t.flag)]&&(g["".concat(t.project)]=r||window&&window["".concat(t.project)],m(r,t.project,t.version,t.flag)):g["".concat(t.project)]=r||window&&window["".concat(t.project)]}function S(e,t,r){var n=document.createElement("script");n.setAttribute("src",e.url),n.onerror=t,n.onload=r,document.head.appendChild(n)}function I(e,t,r){var u,g,h=e.project,y=e.noCache,Z=e.flag,N=e.noFetch;t&&!r&&(w[h]={},w[h].errorTimes=0);var E=function(e,t){var r=t.site,n=t.project,i=t.version,s=t.resourceType,u=void 0===s?"js":s,d=t.fetchBaseUrl,g=void 0===d?o.Z.fetchBaseUrl:d,h=(0,a.Z)().LANGUAGE_VERSIONS,w=t.locale||f.Z.locale||!(0,l.y)()&&c.Z.get("locale")||!(0,l.y)()&&c.Z.get("language")||p,j=r.toLowerCase(),y=n.toLowerCase(),Z=w&&w.toLowerCase&&w.toLowerCase().replace(/-/g,"_"),m="".concat(j,"_").concat(y,"_").concat(Z),b="".concat(g,"/").concat(r,"/").concat(y,"/").concat(Z,".").concat(u),S=h[(0,v.jp)(n,!0)]||i;return{url:"".concat(b).concat(S?"?v=".concat(S):""),namespace:m,finalVersion:S,locale:w}}(0,e),x=E.finalVersion;if(j.includes(h))m(!1,h,x,Z);else{var A=E.locale,_=function(){!function(e,t){var r=e.flag?w["".concat(e.project,"_").concat(e.flag)]:w[e.project];r.errorTimes+=1;var o=r.errorTimes;if(o>=4)(0,v.pH)("i18n-remote-data-err",e);else if(2===o){var a=p,i=e.locale||f.Z.locale||c.Z.get("locale")||c.Z.get("language");if(2===o&&(i!==a||w.urlTestLocale)){var l=w.fetchConfigs.find((),s=e;l?(l.locale=a,l.flag=e.flag,w[e.project]=a):s.locale=a,t(e.flag?(0,n.Z)({},l):(0,n.Z)({},s),!e.flag,!0)}}else t((0,n.Z)({},e),!e.flag,!0)}(e,I)},C=function(){b(t,{project:h,version:x,locale:A,noCache:y,flag:Z},!1)};if(window&&null!==(u=window)&&void 0!==u&&null!==(g=u.indexedDB)&&void 0!==g&&g.open&&!y&&!N){var O=i.Z.g.get(d)||{};(O[h]&&O[h][A]||"")===x?window&&window["".concat(h)]?b(t,{project:h,version:x,locale:A,noCache:y,flag:Z},!1,!0):((0,s.VK)({project:h,version:x,locale:A},(function(e){if(e){var r=(0,v.Gc)(A,e.data||""),n=JSON.parse(e.data);n&&!r&&(window["".concat(h)]=n),x!==e.version||r?S(E,_,C):b(t,{project:h,version:x,locale:A,noCache:y,flag:Z},n)}else S(E,_,C)}),(),(0,v.UK)(h,E,S,_,C)):window["".concat(h)]?b(t,{project:h,version:x,locale:A,noCache:y,flag:Z},window["".concat(h)],!0):S(E,_,C)}else!N&&S(E,_,C),N&&C()}}},46541:(e,t,r)=>{r.d(t,{d:);var n=r(11411),o=r(8080),a=r(58927),c=r(53949),i=r(21911);function l(e){var t=e;return c.Z.envSign&&"prod"!==c.Z.envSign&&(0,o.N)({fetchBaseUrl:(0,a.Z)().BASE_URL_PREVIEW}),t.project=(0,i.jp)(t.project),(0,n.w2)(t,!0),n.IF}},73271:(e,t,r)=>{var n=r(61533);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},11244:35041:(e,t,r)=>{var n=r(65950),o=r(59600).filter;n({target:"Array",proto:!0,forced:!r(8993)("filter")},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},68851:83647:51702:43612:1503:73574:46536:64344:12687:69710:24046:46539:82527:31705:92471:57235:5865:(e,t,r)=>{var n=r(2209),o=r(21700),a=r(31354),c=r(74418),i=r(87574),l=r(93548),s=r(81178),u=r(69204),f=r(17319),v=r(71856),d=r(37029),p=r(42605),g=r(78312),h=r(235),w=g.UNSUPPORTED_Y,j=Math.min,y=o([].push),Z=o("".slice),m=!h((),b="c"==="abbc".split(/(b)*/)[1]||4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length;a("split",(,b||!m,w)},61113:80410:4106:78563:]);
//# sourceMappingURL=https://static-daily.okg.com/crash/okfe/comb-trade/53615/index.a7db9ae0.js.map