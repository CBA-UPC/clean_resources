/* Styles used by all specs, including both Living Standards and Review
   Drafts, but not the HTML Dev Edition. Just bare structural stuff,
   since RDs intentionally don't get very styled. RDs will *not* have
   access to the common variables, so supply a basic (light-mode)
   fallback value for any variable usage in this stylesheet. */

.head .logo { position: absolute; top: 1em; right: 1em; line-height: 0; }
.head .logo img { border: none; }

.toc, .toc li { list-style: none; }

pre > code.idl::before, pre.idl::before { content: 'IDL'; }
pre > code.css::before, pre.highlight.lang-css::before { content: 'CSS'; }

.note::before { content: 'Note'; }
.warning::before { content: '\26A0 Warning!'; }
.example::before { content: 'Example'; }
dl.domintro::before { content: 'For web developers (non-normative)'; }

/* Floating-but-collapsible annoying warning.
   Colors are intentionally not darkmode-adjusted; they're
   meant to be eye-catching and annoying. */
details.annoying-warning {
  background-color: #920800;
  background-image: linear-gradient(transparent 40%, rgba(255, 255, 255, 0.2));
  border: solid rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  border-width: 1px 1px 0 1px;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.95);
  opacity: .95;
  position: fixed;
  left: 5%;
  margin: 0 auto;
  right: 5%;
  z-index: 10;
}

details.annoying-warning[open] {
  top: 10%;
  top: calc(5vw + 5vh);
  max-width: 1024px;
  outline: solid 10000px rgba(255, 255, 255, 0.6);
}

details.annoying-warning:not([open]) {
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0;
}

details.annoying-warning > summary {
  display: list-item; /* polyfill */
  font-size: 0.875em;
  font-weight: bold;
  letter-spacing: 0.02em;
  padding: 10px 5px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.85);
  cursor: default;
}

details.annoying-warning > summary::after {
  content: " Expand";
  position: absolute;
  top: 0;
  right: 5px;
  font-size: smaller;
  font-weight: bold;
}

details.annoying-warning[open] > summary::after {
  content: " Collapse";
}

details.annoying-warning p {
  padding: 0 7.5% 1em;
  line-height: 1.4;
  margin: 0;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.85);
}

details.annoying-warning a {
  color: white;
  text-decoration: underline;
}
&&a("Unknown data type: "+t,"Call clipboard.suppressWarnings() to suppress this warning."),this.m[t]=e},d.prototype.getData=function(t){return this.m[t]},d.prototype.forEach=function(t){for(var e in this.m)t(this.m[e],e)},d),u=function(t){},l=!0;function d(){this.m={}}var f=function(){(console.warn||console.log).apply(console,arguments)}.bind("[clipboard-polyfill]"),p="text/plain";function v(t){u=t}function m(){c=l=!1}function h(n){return r(this,void 0,void 0,function(){var e;return o(this,function(t){if(l&&!n.getData(p)&&f("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."),S()){if(function(){var t=n.getData(p);if(void 0!==t)return window.clipboardData.setData("Text",t);throw new Error("No `text/plain` value was specified.")}())return[2];throw new Error("Copying failed, possibly because the user rejected it.")}if(L(n))return u("regular execCopy worked"),[2];if(-1<navigator.userAgent.indexOf("Edge"))return u('UA "Edge" => assuming success'),[2];if(A(document.body,n))return u("copyUsingTempSelection worked"),[2];if(function(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var n=A(e,t);return document.body.removeChild(e),n}(n))return u("copyUsingTempElem worked"),[2];if(void 0!==(e=n.getData(p))&&function(t){u("copyTextUsingDOM");var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var n=e;e.attachShadow&&(u("Using shadow DOM."),n=e.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=t,n.appendChild(r),document.body.appendChild(e),D(r);var o=document.execCommand("copy");return T(),document.body.removeChild(e),o}(e))return u("copyTextUsingDOM worked"),[2];throw new Error("Copy command failed.")})})}function g(e){return r(this,void 0,void 0,function(){return o(this,function(t){return navigator.clipboard&&navigator.clipboard.writeText?(u("Using `navigator.clipboard.writeText()`."),[2,navigator.clipboard.writeText(e)]):[2,h(C(e))]})})}function b(){return r(this,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return e=C,[4,y()];case 1:return[2,e.apply(void 0,[t.sent()])]}})})}function y(){return r(this,void 0,void 0,function(){return o(this,function(t){if(navigator.clipboard&&navigator.clipboard.readText)return u("Using `navigator.clipboard.readText()`."),[2,navigator.clipboard.readText()];if(S())return u("Reading text using IE strategy."),[2,function(){return r(this,void 0,void 0,function(){var e;return o(this,function(t){if(""===(e=window.clipboardData.getData("Text")))throw new Error("Empty clipboard or could not read plain text from clipboard");return[2,e]})})}()];throw new Error("Read is not supported in your browser.")})})}var w=!1;function _(){w||(l&&f('The deprecated default object of `clipboard-polyfill` was called. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'),w=!0)}var x={DT:s,setDebugLog:function(t){return _(),v(t)},suppressWarnings:function(){return _(),m()},write:function(e){return r(this,void 0,void 0,function(){return o(this,function(t){return _(),[2,h(e)]})})},writeText:function(e){return r(this,void 0,void 0,function(){return o(this,function(t){return _(),[2,g(e)]})})},read:function(){return r(this,void 0,void 0,function(){return o(this,function(t){return _(),[2,b()]})})},readText:function(){return r(this,void 0,void 0,function(){return o(this,function(t){return _(),[2,y()]})})}},E=function(){this.success=!1};function L(t){var e=new E,n=function(r,t,o){u("listener called"),r.success=!0,t.forEach(function(t,e){var n=o.clipboardData;n.setData(e,t),e===p&&n.getData(e)!==t&&(u("setting text/plain failed"),r.success=!1)}),o.preventDefault()}.bind(this,e,t);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return e.success}function A(t,e){D(t);var n=L(e);return T(),n}function D(t){var e=document.getSelection();if(e){var n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}function T(){var t=document.getSelection();t&&t.removeAllRanges()}function C(t){var e=new s;return e.setData(p,t),e}function S(){return"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData}e.default=x},function(t,e,n){"use strict";window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})},function(t,e,n){"use strict";Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(t))return e;e=e.parentElement}while(null!==e);return null})},function(t,e,n){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector)},function(t,e,n){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e})},function(t,e,n){"use strict";"document"in self&&("classList"in document.createElement("_")?function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var r=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var e,n=arguments.length;for(e=0;e<n;e++)t=arguments[e],r.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():function(t){if("Element"in t){var e="classList",n="prototype",r=t.Element[n],o=Object,i=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[n].indexOf||function(t){for(var e=0;e<this.length;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},s=function(t,e){if(""===e)throw new c("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","String contains an invalid character");return a.call(t,e)},u=function(t){for(var e=i.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],r=0;r<n.length;r++)this.push(n[r]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=u[n]=[],d=function(){return new u(this)};if(c[n]=Error[n],l.item=function(t){return this[t]||null},l.contains=function(t){return-1!==s(this,t+="")},l.add=function(){for(var t,e=arguments,n=0,r=e.length,o=!1;-1===s(this,t=e[n]+"")&&(this.push(t),o=!0),++n<r;);o&&this._updateClassName()},l.remove=function(){var t,e,n=arguments,r=0,o=n.length,i=!1;do{for(e=s(this,t=n[r]+"");-1!==e;)this.splice(e,1),i=!0,e=s(this,t)}while(++r<o);i&&this._updateClassName()},l.toggle=function(t,e){t+="";var n=this.contains(t),r=n?!0!==e&&"remove":!1!==e&&"add";return r&&this[r](t),!0===e||!1===e?e:!n},l.toString=function(){return this.join(" ")},o.defineProperty){var f={get:d,enumerable:!0,configurable:!0};try{o.defineProperty(r,e,f)}catch(t){-2146823252===t.number&&(f.enumerable=!1,o.defineProperty(r,e,f))}}else o[n].__defineGetter__&&r.__defineGetter__(e,d)}}(self))},,,,function(t,e,n){"use strict";var o=n(0),r=void document.body.addEventListener("click",function(t){var n=t.target,e=n.getAttribute("data-copy-target");if(!e)return!1;t.preventDefault();var r="sibling"===e?n.nextElementSibling:document.querySelector(e);o.writeText(r.innerText).then(function(){var t=""===n.innerHTML?'<svg class="pointer:off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M17.257 8.502l-7.43 6.996-3.083-3.083" /><path d="M21.995 3.778c0-1.706-1.347-3.091-3.006-3.091H4.96c-1.659 0-3.006 1.385-3.006 3.091v14.424c0 1.706 1.347 3.091 3.006 3.091h14.029c1.659 0 3.006-1.385 3.006-3.091V3.778z" transform="matrix(.99798 0 0 .97057 .05 1.333)" /></svg>':n.innerHTML,e=n.getAttribute("data-copy-success")?decodeURIComponent(n.getAttribute("data-copy-success")):"Copied!";n.style.pointerEvents="none",n.blur(),n.innerHTML=e,setTimeout(function(){n.innerHTML=t,n.style.pointerEvents=""},2e3)},function(t){n.innerHTML="Error"})},!0);t.exports=r},function(t,e,n){"use strict";document.addEventListener("invalid",function(t){t.preventDefault()},!0),document.addEventListener("blur",i,!0),document.addEventListener("click",c,!1);function r(t){var e=t.closest("label")||t;t.value&&!t.value.replace(/\s/g,"").length&&(t.value=""),t.getAttribute("data-reject")===t.value?t.setCustomValidity(t.getAttribute("data-reject-message")):t.getAttribute("data-reject")!==t.value&&t.setCustomValidity(""),o("hide",t);var n=t.checkValidity();return t.value&&!n?(e.removeAttribute("data-valid"),e.setAttribute("data-invalid","")):t.value&&n?(e.removeAttribute("data-invalid"),e.setAttribute("data-valid","")):t.value||(e.removeAttribute("data-valid"),e.removeAttribute("data-invalid")),n}function o(t,e){function n(){o.parentNode.removeChild(o)}function r(){var t=e.closest("label");if(!t)return!1;t.insertAdjacentHTML("beforeend",'<aside data-validation-message data-tooltip data-tooltip-position="'+(e.getAttribute("data-message-position")||"down")+'" data-tooltip-visible="true"><span data-tooltip-content>'+i+"</span></aside>")}var o=e.closest("form").querySelector("[data-validation-message]"),i=e.getAttribute("data-reject")===e.value?e.validationMessage:e.getAttribute("data-message")?e.dataset.message:e.validationMessage;o&&"hide"===t&&n(),"show"!==t||o?"show"===t&&o&&(o.parentNode!==e.parentNode?(n(),r()):o.childNodes[0].textContent=i):r()}function i(t){var e=t.target;e.required&&"submit"!==e.type&&r(e)}function a(t){"none"!==t.style.display?"function"==typeof t.select?t.select():t.focus():t.nextSibling.select(),o("show",t)}function c(t){if(t.target&&"submit"===t.target.type){var e=(t.target.hasAttribute("form")?document.getElementById(t.target.getAttribute("form")):t.target.closest("form")).querySelector("[required]:invalid");if(e){var n=e.closest("label")||e;return t.preventDefault(),n.removeAttribute("data-valid"),n.setAttribute("data-invalid",""),a(e),!1}}}},function(t,e,n){"use strict";t.exports=function(n,t){var r,o,i,a=Object.assign({},{initWidth:"820px",openClass:"menu-open",menuSelector:".main-menu",menuToggle:".menu-toggle"},t),c=document.querySelector(n||"[role=banner]"),e=window.matchMedia("(max-width: "+a.initWidth+")"),s=document.body;function u(t){if(t=t||window.event,!s.classList.contains(a.openClass))return!1;switch(t.keyCode){case 9:if(1===r.length){t.preventDefault();break}t.shiftKey?document.activeElement===o&&(t.preventDefault(),i.focus()):document.activeElement===i&&(t.preventDefault(),o.focus());break;case 27:s.classList.remove(a.openClass),d(a.menuSelector,!1)}}function l(t){var e=a.menuToggle+", ."+a.openClass+" "+n+' a[href^="#"]';t.target.closest(e)&&(s.classList.toggle(a.openClass),s.classList.contains(a.openClass)?(d(a.menuSelector,!0),r=c.querySelectorAll("button, [href], input, select, textarea"),o=r[0],i=r[r.length-1]):d(a.menuSelector,!1))}function d(t,e){var n=document.querySelector(t);n.querySelectorAll("button, [href], input, select, textarea").forEach(function(t){return t.setAttribute("tabindex",e?"":"-1")}),n.hidden=!e}function f(t){t.matches?(d(a.menuSelector,!1),document.addEventListener("click",l,!1),document.addEventListener("keydown",u,!1)):(d(a.menuSelector,!0),document.removeEventListener("click",l,!1),document.removeEventListener("keydown",u,!1))}c&&(f(e),e.addListener(f))}},function(t,e,n){"use strict";t.exports=function(t){"loading"!=document.readyState?t():document.addEventListener("DOMContentLoaded",t)}},function(t,e,n){"use strict";var r={set:function(n,r,o){var i=Date.now(),a={};return a.value=requestAnimationFrame(function t(){var e=Date.now();r<=e-i?void 0!==o?n.call(n,o):n.call(n):a.value=requestAnimationFrame(t)}),a},clear:function(t){window.cancelAnimationFrame(t.value)}};t.exports=r},function(t,e,n){"use strict";t.exports=function(t,e,n){n=n||window;var r=!1;n.addEventListener(t,function(){r||(r=!0,requestAnimationFrame(function(){n.dispatchEvent(new CustomEvent(e)),r=!1}))})}},function(t,e,n){"use strict";var r=n(14),o=n(13);t.exports=function(t){var e,n=Object.assign({},{resizeDelay:250},t);r("resize","optimizedResize"),window.addEventListener("optimizedResize",function(){e&&o.clear(e),document.querySelector("#full-stop")||document.body.insertAdjacentHTML("beforeend",'<style id="full-stop">\n          *, \n          *:after, \n          *:before { \n            transition: none !important; \n            animation: none !important; \n          }\n        </style>'),e=o.set(function(){document.body.removeChild(document.querySelector("#full-stop"))},n.resizeDelay)},!1)}},function(t,e,n){"use strict";n(5),n(4),n(3),n(2),n(1);var r=n(15),o=n(12),i=n(11),a=n(10),c=n(9);o(function(){r(),i()},!(window.crux=t.exports={fullStop:r,ready:o,mobileMenu:i,validation:a,copy:c}))},function(t,e,n){"use strict";n(16),console.log("%c\n     _-.:.-_\n  .'-/_:-:_\\-'.\n /_'/__ |__'._'\\\n'__(___.)___ )_ '\n(__(___ )___ )__)\n.__(___.(__  )_ .\n \\__\\__ )__ /__/\n  -__\\ _(_ )__-\n   \\ _\\_)./_ /\n     \\_.|_./\n      |_|_|\n        |\n       [_]\n\n    Let's Fly","font-family:monospace")}]);