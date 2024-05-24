/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){if(void 0!==window.Reflect&&void 0!==window.customElements&&!window.customElements.polyfillWrapFlushCallback){var BuiltInHTMLElement=HTMLElement;window.HTMLElement=HTMLElement.prototype=BuiltInHTMLElement.prototype;HTMLElement.prototype.constructor=HTMLElement;Object.setPrototypeOf(HTMLElement,BuiltInHTMLElement)}})();
(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
var p=window.Document.prototype.createElement,q=window.Document.prototype.createElementNS,aa=window.Document.prototype.importNode,ba=window.Document.prototype.prepend,ca=window.Document.prototype.append,da=window.DocumentFragment.prototype.prepend,ea=window.DocumentFragment.prototype.append,t=window.Node.prototype.cloneNode,u=window.Node.prototype.appendChild,v=window.Node.prototype.insertBefore,w=window.Node.prototype.removeChild,x=window.Node.prototype.replaceChild,z=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),A=window.Element.prototype.attachShadow,B=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),C=window.Element.prototype.getAttribute,D=window.Element.prototype.setAttribute,E=window.Element.prototype.removeAttribute,F=window.Element.prototype.getAttributeNS,G=window.Element.prototype.setAttributeNS,H=window.Element.prototype.removeAttributeNS,fa=window.Element.prototype.insertAdjacentElement,ha=window.Element.prototype.insertAdjacentHTML,ia=window.Element.prototype.prepend,
ja=window.Element.prototype.append,ka=window.Element.prototype.before,la=window.Element.prototype.after,ma=window.Element.prototype.replaceWith,na=window.Element.prototype.remove,oa=window.HTMLElement,I=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),pa=window.HTMLElement.prototype.insertAdjacentElement,qa=window.HTMLElement.prototype.insertAdjacentHTML;var ra=function(){var a=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(b){return a.add(b)});return a}();ar ta=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);
unction ua(){var a=!(null==N||!N.noDocumentConstructionObserver),b=!(null==N||!N.shadyDomFastWalk);this.j=[];this.B=[];this.i=!1;this.shadyDomFastWalk=b;this.O=!a}unction va(a,b){a.i=!0;a.j.push(b)}tion S(a,b){try{var c=a.K(b.ownerDocument,b.localName);c&&a.M(b,c)}catch(e){V(e)}}m=ua.prototype;
m.M=function(a,b){if(void 0===a.__CE_state){b.constructionStack.push(a);try{try{if(new b.constructorFunction!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{b.constructionStack.pop()}}catch(f){throw a.__CE_state=2,f;}a.__CE_state=1;a.__CE_definition=b;if(b.attributeChangedCallback&&a.hasAttributes()){b=b.observedAttributes;for(var c=0;c<b.length;c++){var e=b[c],d=a.getAttribute(e);null!==d&&this.attributeChangedCallback(a,e,null,d,null)}}J(a)&&
this.connectedCallback(a)}};m.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a)}catch(c){V(c)}};m.disconnectedCallback=m.attributeChangedCallback=
m.K=function(a,b){var c=a.__CE_registry;if(c&&(a.defaultView||a.__CE_isImportDocument))return W(c,b)};
a.prototype.resolve=.prototype.disconnect=X.prototype.J=function(a){var b=this.l.readyState;"interactive"!==b&&"complete"!==b||this.disconnect();for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,e=0;e<c.length;e++)U(this.g,c[e])};=Y.prototype;m.N=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");za(this,a);this.o.set(a,b);this.v.push(a);this.h||(this.h=!0,this.m(function(){return c.G()}))};
m.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");za(this,a);Aa(this,a,b);this.v.push(a);this.h||(this.h=!0,this.m()};function za(a,b){if(!sa(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(W(a,b)&&!window.enableHotReplacement)throw Error("A custom element with name '"+(b+"' has already been defined."));if(a.A)throw Error("A custom element is already being defined.");}
.upgrade=
m.G=function(){var a=this;if(!1!==this.h){this.h=!1;for(var b=[],c=this.v,e=new Map,d=0;d<c.length;d++)e.set(c[d],[]);U(this.g,document,{upgrade:);for(d=0;d<b.length;d++)S(this.g,b[d]);for(d=0;d<c.length;d++){for(var f=c[d],g=e.get(f),h=0;h<g.length;h++)S(this.g,g[h]);(f=this.C.get(f))&&f.resolve(void 0)}c.length=0}};m.get=
m.whenDefined=m.polyfillWrapFlushCallback=function(a){this.F&&this.F.disconnect();var b=this.m;this.m=;
.prototype.define=Y.prototype.define;Y.prototype.upgrade=Y.prototype.upgrade;Y.prototype.get=Y.prototype.get;Y.prototype.whenDefined=Y.prototype.whenDefined;Y.prototype.polyfillDefineLazy=Y.prototype.N;Y.prototype.polyfillWrapFlushCallback=Y.prototype.polyfillWrapFlushCallback;function Z(a,b,c){function e(d){return function(){for(var f=n.apply(0,arguments),g=[],h=[],k=0;k<f.length;k++){var l=f[k];l instanceof Element&&J(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l)}d.apply(this,f);for(f=0;f<h.length;f++)T(a,h[f]);if(J(this))for(h=0;h<g.length;h++)f=g[h],f instanceof Element&&R(a,f)}}void 0!==c.prepend&&(b.prepend=e(c.prepend));void 0!==c.append&&(b.append=e(c.append))};function Ca(a){function b(e){return function(){for(var d=n.apply(0,arguments),f=[],g=[],h=0;h<d.length;h++){var k=d[h];k instanceof Element&&J(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)f.push(k);else f.push(k)}e.apply(this,d);for(d=0;d<g.length;d++)T(a,g[d]);if(J(this))for(g=0;g<f.length;g++)d=f[g],d instanceof Element&&R(a,d)}}var c=Element.prototype;void 0!==ka&&(c.before=b(ka));void 0!==la&&(c.after=b(la));void 0!==ma&&(c.replaceWith=function(){for(var e=
n.apply(0,arguments),d=[],f=[],g=0;g<e.length;g++){var h=e[g];h instanceof Element&&J(h)&&f.push(h);if(h instanceof DocumentFragment)for(h=h.firstChild;h;h=h.nextSibling)d.push(h);else d.push(h)}g=J(this);ma.apply(this,e);for(e=0;e<f.length;e++)T(a,f[e]);if(g)for(T(a,this),f=0;f<d.length;f++)e=d[f],e instanceof Element&&R(a,e)});void 0!==na&&(c.remove=};var Ea={};var N=window.customElements;&&!N.forcePolyfill&&"function"==typeof N.define&&"function"==typeof N.get||Ha();window.__CE_installPolyfill=Ha;})();
(function(){var b=window.document;window.WebComponents=window.WebComponents||{};var a=function(){window.removeEventListener("DOMContentLoaded",a);window.WebComponents.ready=!0;var c=b.createEvent("CustomEvent");c.initEvent("WebComponentsReady",!0,!0);setTimeout(0)};"complete"===b.readyState?a():window.addEventListener("DOMContentLoaded",a)})();
