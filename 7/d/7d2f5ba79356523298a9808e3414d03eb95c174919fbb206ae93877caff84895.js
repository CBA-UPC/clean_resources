"use strict";(self.webpackChunkPhoenix=self.webpackChunkPhoenix||[]).push([[6571],{40596:()=>{!function(t){unction o(e,o){!c.debug&&!o||t.console&&t.console.log&&(o?console.error("[ABD] "+e):console.log("[ABD] "+e))}function n(t){o("start beginTest"),1==h||(l(t),y.quick="testing",g.test=setTimeout((,5))}function l(t){var e,n=document.body,l="width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;";if(null!=t&&"string"!=typeof t){for(null!=t.style&&(l+=t.style),f=function(t,e){var o,n,l=e;if(n=document.createElement("div"),l)for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&n.setAttribute(o,l[o]);return n}(0,{class:t.cssClass,style:l}),o("adding bait node to DOM"),n.appendChild(f),e=0;e<b.nullProps.length;e++)f[b.nullProps[e]];for(e=0;e<b.zeroProps.length;e++)f[b.zeroProps[e]]}else o("invalid bait being cast")}function i(t,n){var u,a=document.body,s=!1;if(null==f&&(o("recast bait"),l(t||m)),"string"==typeof t)return o("invalid bait used",!0),void(r()&&setTimeout((function(){}),5));for(0<g.test&&(clearTimeout(g.test),g.test=0),null!==a.getAttribute("abp")&&(o("found adblock body attribute"),s=!0),u=0;u<b.nullProps.length;u++){if(null==f[b.nullProps[u]]){4<n&&(s=!0),o("found adblock null attr: "+b.nullProps[u]);break}if(1==s)break}for(u=0;u<b.zeroProps.length&&1!=s;u++)0==f[b.zeroProps[u]]&&(4<n&&(s=!0),o("found adblock zero attr: "+b.zeroProps[u]));if(void 0!==window.getComputedStyle){var d=window.getComputedStyle(f,null);("none"==d.getPropertyValue("display")||"hidden"==d.getPropertyValue("visibility"))&&(4<n&&(s=!0),o("found adblock computedStyle indicator"))}s||n++>=c.maxLoop?(o("exiting test loop - value: "+(h=s)),),r()&&setTimeout((function(){}),5)):g.test=setTimeout((,c.loopDelay)}ar u="offset",a="client",s=d=void 0===t.addEventListener,c={loopDelay:50,maxLoop:5,debug:!0,found:s,notfound:s,complete:s},p=[],f=null,m={cssClass:"ads-min pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"},b={nullProps:[u+"Parent"],zeroProps:[]};b.zeroProps=[u+"Height",u+"Left",u+"Top",u+"Width",u+"Height",a+"Height",a+"Width"];var y={quick:null,remote:null},h=null,g={test:0,download:0},v={version:"1.0.1-AREN",init:function(e){var o,l,i,r,u,a,f;if(e){for(o in l={complete:s,found:s,notfound:s},e)Object.prototype.hasOwnProperty.call(e,o)&&("complete"==o||"found"==o||"notFound"==o?l[o.toLowerCase()]=e[o]:c[o]=e[o]);p.push(l),f=!1,document.readyState&&"complete"==document.readyState&&(f=!0),i=f?i():(r=t,u="load",a=i,d?r.attachEvent("on"+u,a):r.addEventListener(u,a,!1))}}};t.adblockDetector=v}(window)}},);
//# sourceMappingURL=adBlockDetector.min.js.map