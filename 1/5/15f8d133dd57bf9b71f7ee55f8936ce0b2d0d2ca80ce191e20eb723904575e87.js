/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={137:645:379:(t,e,n)=>{var i,r=),o=[]; l,d=(l=[],;r h=null,A=0;.exports=},e={};.n=n.d=n.o=(()=>{const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,o=new RegExp(`${i}|${r}`),s="$lit$";onst c=l=d=p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;onst h=A=f=new WeakMap,m=g={},v={};onst b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:),x=` ${i} `;onst S=C=!1;(();onst B=onst M=new Map,R=new WeakMap,z=new class{handleAttributeExpressions"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const _=Q=let K=!0;void 0===window.ShadyCSS?K=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),K=!1);const W=L=["html","svg"],V=new Set;window.JSCompiler_renameProperty=const q={toAttributefromAttribute,G=D={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:G};class J extends HTMLElement{tic createProperty(t,e=D){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}date(){return 4&this._updateState}UpdateComplete(){return this._updatePromise}dated(t){}J.finalized=!0;const H=Element.prototype;H.msMatchesSelector||H.webkitMatchesSelector;const Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol();window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const X={};class $ extends J{ized=!0,$.render=(t,n,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,o=R.has(n),s=K&&11===n.nodeType&&!!n.host,a=s&&!V.has(r),c=a?document.createDocumentFragment():n;if(((t,c,Object.assign({templateFactory:W(r)},i)),a){const t=R.get(c);R.delete(c);((t,e,n)=>{V.add(t);const i=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const s=document.createElement("style");for(let t=0;t<o;t++){const e=r[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}((t);const a=i.content;n?n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),u(n,t)}})(r,c,t.value instanceof y?t.value.template:void 0),e(n,n.firstChild),n.appendChild(c),R.set(n,t)}!o&&s&&window.ShadyCSS.styleElement(n.host)};const tt=function(){ar e="DOMContentLoaded";function n(t,e,n,i){if(i=i||{},t.addEventListener(e,n),t.dataEvents){var r=t.dataEvents[e];if(r)if(i.purgeEventData)for(;r.length>0;)n.call(t,{data:r.shift(),target:t});else r.forEach(()}}eturn{delegate:function(){function e(t,n,i,r,o,s){if(n!==i){var a=r.indexOf(n);-1!==a&&(o.call(r[a],t),s.preventDefault&&t.preventDefault()),e(t,n.parentNode,i,r,o,s)}else s.stopPropagation&&t.stopPropagation()}return function(n,i,r,o,s){s=s||{},i=i.split(","),void 0===n.length&&(n=[n]),n.forEach||(n=t(n)),n.forEach((function(n){n.addEventListener(r,(function(r){var a=[];i.forEach((function(e){a=">"===e.substr(0,1)?function(e,n,i){var r=t(n.querySelectorAll(i.substr(1)));return r=r.filter((),e.concat(r)}(a,n,e):function(e,n,i){return e.concat(t(n.querySelectorAll(i)))}(a,n,e)})),e(r,r.target,n,a,o,s)}))}))}}(),domReady:fire:listen:n}}();function et(){var t=at(["<div class='sentiment'>\n    ","\n    ","\n  </div>"]);return et=function(){return t},t}unction it(){var t=at(['<div style="display:','">\n      ',"\n      ",'\n      <p class="social-icons__privacy">** No personal data will be collected as part of our research.</p>\n    </div>\n  ']);return it=function(){return t},t}function rt(){var t=at(["<span sentiment-value="," class='sentiment-item ","' @click=",">\n          ","\n      </span>"]);return rt=function(){return t},t}function ot(){var t=at(['<div class="sentiment-body">\n    ',"\n  </div>"]);return ot=function(){return t},t}unction at(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const ct=function(t,e,n,i){return _(et(),i?_(nt()):"",function(t,e,n,i){return _(it(),i?"none":"inline-block",_(st(),"The story makes me feel...","\n    We understand that the news we report can sometimes have an impact on how you feel.\n    We’d like to understand that a little better.\n    The information you give us today will help us improve our approach to reporting in the future.\n  ","(multiple selection possible)"),function(t,e,n){return _(ot(),t.map((function(t){var i=e.includes(t),r=t.charAt(0).toUpperCase()+t.slice(1);return _(rt(),t,i?"highlighted":"",n,r)})))}(t,e,n))}(t,e,n,i))};function lt(){var t=ht(["<div class='actions'>\n    ","\n    ","\n  </div>"]);return lt=function(){return t},}function pt(){var t=ht(["<div class='actions-list'>\n    ","\n  </div>"]);return pt=function(){return t},t}function ut(){var t=ht(["<div class='actions-header'>\n    <div class='actions-header__title'>","</div>\n    <div class='actions-header__description'>","</div>\n  </div>"]);return ut=function(){return t},t}function ht(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})nst vt=function(t){function e(){return window.digitalData&&window.digitalData.article&&window.digitalData.article.attributes.articleUrl}var n={facebook:"https://www.facebook.com/sharer/sharer.php?u=",twitter:"https://twitter.com/share?text=",whatsapp:"https://api.whatsapp.com/send?text=",link:e()}return _(At(),t.map((function(t){return function(t){return _(mt(),n[t]+e(),"share-provider actionable-journalism-share-link ".concat(t,"-icon"),t.charAt(0).toUpperCase()+t.slice(1),t,(function(){return r=t,o=e(),s=window.digitalData&&window.digitalData.article&&window.digitalData.article.attributes.articleTitle,a=n[r],c="","twitter"===r?c=encodeURIComponent(s+"&url="+encodeURIComponent(i(o,r))):"facebook"===r?c=encodeURIComponent(i(o,r)):"whatsapp"===r&&(c=o),void(c&&window.open(a+c));var r,o,s,a,c}))}(t)})),_(ft(),(function(){return function(){var t=e();navigator.clipboard.writeText(t);var n=document.querySelector(".aj-copy-prompt");n.classList.add("active"),setTimeout}),3e3)}()})))Et=function(t)}(r,t);var e,n,i=(e=r,}(});function r(){var t;retur}(this,r),(t=i.call(this)).sentiments=JSON.parse(t.getAttribute("aj-sentiments")),t.actions=JSON.parse(t.getAttribute("aj-actions")),t.socialProviders=["facebook","twitter","whatsapp"],t.selectedSentiments=[],t.sentimentsSubmitted=!1,t}return St(r,null,[{key:"properties",ge}}]),St(r,[{key:"createRenderRoot",valu}},{key:"sentimentToggle",value:function(t){var e,n=t.target.getAttribute("sentiment-value"),i=this.selectedSentiments.indexOf(n);-1===i?this.selectedSentiments.push(n):this.selectedSentiments.splice(i,1),this.selectedSentiment}(e=this.selectedSentiments)}(e)}(e)}()}},{key:"submitSentiment",value:function(){tt.fire(window,"analytics.track",{name:"sentimentSubmitted",category:"actionableJournalism",value:this.selectedSentiments.join(",")}),this.sentimentsSubmitted=!0}},{key:"render",value:function(){if(this.actions&&this.sentiments&&this.socialProviders){var t=0===this.selectedSentiments.length;return _(bt(),(e=this.actions,_(lt(),_(ut(),"Feel inspired to make a positive change?","We have selected our top trusted sources that can help you take action…"),(n=e,_(pt(),n.map((function(t){var e=t.actionUrl,n=t.actionName,i=t.actionImage;return _(dt(),e,e,n,i)})))))),ct(this.sentiments,this.selectedSentiments,this.sentimentToggle,this.sentimentsSubmitted),vt(this.socialProviders),this.sentimentsSubmitted?"none":"inline-block",t,this.selectedSentiments.join(","),this.submitSentiment)}var e,n}}]),r}($);var jt=n(379),Ot=n.n(jt),Tt=n(137);Ot()(Tt.Z,{insert:"head",singleton:!1}),Tt.Z.locals,customElements.define("aj-component",Et)})()})();