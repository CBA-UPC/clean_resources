/*! For license information please see loader.js.LICENSE.txt */
(()=>{var t={34316:50132:32249:,e={};.n=r.d=r.g=),r.o=((),(()=>{"use strict";var t=r(50132),e=r.n(t);var n=window.IS_USERSNAP_IFRAME?window.parent:window;const o={startElement:null,endElement:null,insertFirst:function(t){this.createComments(),n.document.body.insertBefore(t,this.startElement.nextSibling)},insertLast:function(t){this.createComments(),n.document.body.insertBefore(t,this.endElement)},createComments:function(){this.startElement||(this.startElement=n.document.createComment("uspssb"),n.document.body.appendChild(this.startElement),this.endElement=n.document.createComment("uspsse"),n.document.body.appendChild(this.endElement))},isChildAttached:saveRemoveChild:function(t){this.isChildAttached(t)&&t.parentNode.removeChild(t)},isDOMValid:removeElement:;var i=r(32249),s=r.n(i)()({Promise:e()}).fetch;function a(t,e){return new URL(e,function(t){return"/"===t.slice(-1)?t:"".concat(t,"/")}(t)).href}function u(t,i){return new(e())((function(e){var u=n.document.createElement("iframe"),c=t);s(c).then(().then((function(r){u.onload=function(){u.contentWindow.IS_USERSNAP_IFRAME=!0,function(t,e,r){var n=t.document.documentElement,o=(new DOMParser).parseFromString(e,"text/html");o.querySelectorAll("script").forEach((function(t){t.src=a(r,t.getAttribute("src"))})),o.querySelectorAll("link").forEach((function(t){t.href=a(r,t.getAttribute("href"))})),o.querySelectorAll("img").forEach((function(t){t.src=a(r,t.getAttribute("src"))})),n.innerHTML=o.documentElement.innerHTML;for(var i=n.querySelectorAll("script"),s=function(){var e=i[u],r=t.document.createElement("script");Object.keys(e.attributes).forEach((function(t){var n=e.attributes[t];r.setAttribute(n.name,n.value)})),r.appendChild(t.document.createTextNode(e.innerHTML)),e.parentNode.replaceChild(r,e)},u=0;u<i.length;u++)s()}(u.contentWindow,r,i.cdnUrl),u.contentWindow.apiReady=u.contentWindow.init?u.contentWindow.init(i):u.contentWindow.config=i},u.style.display="none",u.style.height=0,u.style.width=0,u.style.zIndex=2147483647,u.setAttribute("name","us-entrypoint-".concat(t)),u.setAttribute("aria-hidden",""),i.config&&i.config.iframeTitle&&u.setAttribute("title",i.config.iframeTitle),o.insertLast(u)}))}))}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}d=l((function t(e,r){var n=this;!this,t),h(this,"loadApiIframe",(function(){return u(n.entrypointName,n.entrypointConfig).then((function(t){var e=t.iframe,r=t.api;return n.internalApi=r,n.apiIframe=e,r}))})),h(this,"getProxyFunction",(function(t){return"init"===t?function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var o;return n.apiIframe?(o=n.internalApi).init.apply(o,e):n.loadApiIframe().then((function(t){var r;return n.internalApi=t,(r=n.internalApi).init.apply(r,e)}))}:"destroy"===t?function(){var t;return n.apiIframe?(t=n.internalApi).destroy.apply(t,arguments).then((function(){var t;t=n.apiIframe,o.removeElement(t),n.apiIframe=null})):Promise.resolve()}:"function"==typeof n.internalApi[t]?function(){var e;return n.apiIframe?(e=n.internalApi)[t].apply(e,arguments):(console.warn("Not initialized: Call api.init() before calling api.".concat(t,"()")),null)}:n.internalApi[t]})),h(this,"getApiProxy",(function(t){return n.internalApi=t,n.apiProxy={},Object.keys(t).forEach((),n.apiProxy})),h(this,"getApi",(function(){return n.apiProxy?Promise.resolve(n.apiProxy):n.loadApiIframe().then(()})),this.entrypointName=e,this.entrypointConfig=r,this.apiProxy=null,this.apiIframe=null,this.internalApi=null})),y=r(34316),b=r.n(y);const m=r.p+"assets/css/styles/75c58b24c329638517fc.css";oid 0===window.Promise&&(window.Promise=e()),"object"===("undefined"==typeof usersnapConfig?"undefined":_(usersnapConfig))){var A,E=null===(A=usersnapConfig.cdnUrl)||void 0===A?void 0:A.trim();E?("string"==typeof(S={publicPath:E}.publicPath)&&(r.p="/"===(x=S).slice(-1)?x:"".concat(x,"/")),O=w(w({},usersnapConfig),{},{cdnUrl:E}),P=O.onLoadCallbackName,(T=document.createElement("link")).rel="stylesheet",T.href=m,document.head.appendChild(T),new d(b().SETUP,O).getApi().then((function(t){if(P)try{window[P](t)}catch(t){console.error("Loading widget failed: evaluating `window.".concat(P,"` resulted in error"),t)}else t.init()})).catch(()):console.error("Loading widget failed: cdnUrl must be set, got: ".concat(JSON.stringify(w(w({},usersnapConfig),{},{publicPath:E}))))}else console.error("Loading widget failed: object usersnapConfig must be defined");var O,P,T,x,S})()})();