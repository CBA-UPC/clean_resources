(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var b="function"==typeof Object.create?Object.create:d;if("function"==typeof Object.setPrototypeOf)d=Object.setPrototypeOf;else{var e;a:{var f={a:!0},g={};try{g.__proto__=f;e=g.a;break a}catch(a){}e=!1}d=e?null}var k=d;function l(a,c){var h=void 0===h?null:h;var n=document.createEvent("CustomEvent");n.initCustomEvent(a,!0,!0,h);c.dispatchEvent(n)};ar p=HTMLElement;m.prototype=b(p.prototype);m.prototype.constructor=m;if(k)k(m,p);else for(var q in p)if("prototype"!=q)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(p,q);r&&Object.defineProperty(m,q,r)}else m[q]=p[q];m.prototype.connectedCallback=function(){l("attached",this)};m.prototype.disconnectedCallback=customElements.define("gwd-attached",m);}).call(this);
