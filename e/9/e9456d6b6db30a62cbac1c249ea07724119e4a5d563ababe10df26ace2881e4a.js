(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{490:function(t,n,h){"use strict";h.r(n),function(r){h.d(n,"default",function(){return e});var t=h(15),o=h.n(t),t=h(16),i=h.n(t),t=h(346),a=h.n(t),t=h(347),c=h.n(t),t=h(348),s=h.n(t),t=h(349);function u(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,e=function(){};return{s:e,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=s()(n);return e=r?(t=s()(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),c()(this,e)}}var f=new(h(103).a)(!1,!0),e=function(t){a()(n,t);var e=d(n);function n(){return o()(this,n),e.apply(this,arguments)}return i()(n,[{key:"onCreate",value:function(){var e=this;window.uolPolicyBanner=window.uolPolicyBanner||[],window.uolPolicyBanner.push(function(t){t=t.action;"skip"!==t&&"hide"!==t||e.start()})}},{key:"start",value:function(){function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;i&&t<500?i=!1:500<=t&&(i=!0),o||null===document.querySelector(".webalert_container")||(i=!1,window.removeEventListener("scroll",e)),i?(r.classList.remove("ticker-closed"),r.classList.contains("hidden")||(!o&&(r.classList.contains("right-down")||r.classList.contains("left-down"))||o&&r.classList.contains("right-down"))&&document.querySelector(".back-to-top").classList.add("hidden")):r.classList.add("ticker-closed"),r.setAttribute("data-show",i)}var n=this,r=this.dom,o="true"==r.getAttribute("data-desktop"),i=!1;window.addEventListener("scroll",e),this.rules=JSON.parse(r.dataset.rules),this.checkExibitionRules(this.rules).then(function(t){return n.actionTicker(r,t)})}},{key:"setCookie",value:function(t){var e=Number(t.dataset.cookiedate);isNaN(e)&&(e=1);var n=(new Date).getDate()+e,r=new Date;r.setDate(n),r.setHours(0,0,0,0);e=new Date(r),e=["".concat(t.dataset.cookiename,"=1"),"expires=".concat(e.toGMTString()),"domain=.uol.com.br","path=/"];document.cookie=e.join("; ")}},{key:"hasCookie",value:function(t){return 1==f.get(t.dataset.cookiename)}},{key:"showTicker",value:function(t){return"show"==t?this.dom.classList.remove("hidden"):this.dom.classList.add("hidden")}},{key:"closeTicker",value:function(t){return t.classList.add("ticker-closed"),this.setCookie(this.dom),setTimeout(function(){t.classList.add("hidden"),document.querySelector(".back-to-top").classList.remove("hidden")},1e3)}},{key:"actionTicker",value:function(t,e){var n=this,r=t.querySelectorAll(".access-click"),o=t.querySelector(".close");if(!this.hasCookie(this.dom)&&e){var i,a=u(r);try{for(a.s();!(i=a.n()).done;)i.value.addEventListener("click",function(){return n.closeTicker(t)})}catch(t){a.e(t)}finally{a.f()}o.addEventListener("click",function(){return n.closeTicker(t)}),this.showTicker("show")}else this.showTicker("hide")}},{key:"getLoyalty",value:function(){return DucksLake.getUserLoyalty().then(function(t){var e=t.data,t=t.code;return null!=e.uol&&t?e.uol.loyalty:"unclassified"})}},{key:"getTags",value:function(){return DucksLake.getUserTagsInfo().then(function(t){return t.data})}},{key:"checkExibitionRules",value:function(e){var n=this;return r.all([this.getLoyalty(),this.getTags()]).then(function(t){if(0==e.length)return!0;var o=t[0],i=t[1].tags.map(function(t){return t.key});return-1<location.search.indexOf("debug=true")&&(o=n.qaReplaceData().fidelity,i=n.qaReplaceData().tags),null!=e.find(function(t){var e=new RegExp("".concat(t.regexp)).test(location.href),n=t.fidelity.includes(o),r=t.tags.some(function(t){return i.includes(JSON.stringify(t.id))});if(e)return n&&(r||0==t.tags.length)})})}},{key:"qaReplaceData",value:function(){var e=[],t=new URLSearchParams(window.location.search),n=t.get("fidelity");return t.get("tags").split(",").forEach(function(t){return e.push(t)}),{fidelity:n,tags:e}}}]),n}(t.a)}.call(this,h(32))}}]);t=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var l=(0,o(2648).Z)(o(7294));let n=l.default.createContext(null);t.AppRouterContext=n;let r=l.default.createContext(null);t.LayoutRouterContext=r;let u=l.default.createContext(null);t.GlobalLayoutRouterContext=u;let a=l.default.createContext(null);t.TemplateContext=a},9008:function(e,t,o){e.exports=o(3121)},1664:function(e,t,o){e.exports=o(1551)},4298:function(e,t,o){e.exports=o(3573)}}]);