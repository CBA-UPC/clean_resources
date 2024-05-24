
'use strict';
(function () {
  var currentScript = document.currentScript;

  // Safari 10 support type="module" but still download and executes the nomodule script
  if (!currentScript || !currentScript.hasAttribute('nomodule') || !('onbeforeload' in currentScript)) {

    /**
 * core-js 3.6.5
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2019 Denis Pushkarev (zloirock.ru)
 */
!function(t){"use strict";(},function(t,n){t.exports={}},function(t,n,e){var r=e(2),o=e(56),i=e(57);r({target:"Array",proto:!0},{copyWithin:o}),i("copyWithin")},function(t,n,e){var r=e(2),o=e(63).every,i=e(66),a=e(67),u=i("every"),c=a("every");r({target:"Array",proto:!0,forced:!u||!c},{every:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(2),o=e(63).filter,i=e(52),a=e(67),u=i("filter"),c=a("filter");r({target:"Array",proto:!0,forced:!u||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(2),o=e(63).find,i=e(57),a=e(67),u=!0,c=a("find");"find"in[]&&Array(1).find((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,n,e){var r=e(2),o=e(63).map,i=e(52),a=e(67),u=i("map"),c=a("map");r({target:"Array",proto:!0,forced:!u||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(2),o=e(104).left,i=e(66),a=e(67),u=i("reduce"),c=a("reduce",{1:0});r({target:"Array",proto:!0,forced:!u||!c},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){e(109)("Array")},function(t,n,e){e(57)("flat")},function(t,n,e){var r=e(119),o=e(125);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o):!0},{EPSILON:Math.pow(2,-52)})},function(t,n,e){e(2)({target:"Numbreturn"number"==typeof t&&r(t)}},function(t,n,e){e(2)({target:"NumbeAFE_INTEGER:-9007199254740991})},function(t,n,e){var r=e(2),o=e(140);r({target:"Number",stat:!0,forced:Numberl(v,h)||(e[h]=v[h]);return e}:s},function(t,n,e){var r=e(2),o=e(5),i=e(149),a=e(46),u=e(65),c=e(19);o&&r({target:"Object",proto:!0,forced:i},{__defineGetter__:function(t,n){c.f(a(this),t,{get:u(n),enumerable:!0,configurable:!0})}})},function(t,n,e){var r=e(2),o=e(152).entries;r({target:"Object",stat:!0},{entf:function(t){return a(i(t))}})},function(t,n,e){e(2)({target(t){return!!i(t)&&(!a||a(t))}})},function(t,n,e){var r=e(2),o=e(6),i=e(14),a=Object.isFrozen;r({target:"Object",stat:!0,forced:o((function(){a(1)}))},{isFrozen:functis:function(t){return i(o(t))}})},function(t,n,e){var r=e(2),o=e(5),i=e(149),a=e(46),u=e(13),c=e(93),f=e(4).f;o&&r({target:"Object",proto:!0,forced:i},{__lookupGetter__:function(t){var n,e=a(this),r=u(t,!0);do{if(n=f(e,r))return n.set}while(e=c(e))}})},function(t,n,e){var r=e(2),o=e(14),i=e(120).onFreeze,a=e(121),u=e(6),c=Object.preventExtensions;r({target:"Object",stat:!0,forced:u((function(){c(1)})),sham:!a},{preventExtensions:function!1))),t.exports={set:v,clear:g}},function(t,n,e){var r=e(54);t.exports=/(iphone|iprts={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r,o=e(2),i=e(4).f,a=e(39),u=e(199),c=e(12),f=e(200),s=e(29),l="".endsWith,p=Math.min,h=f("endsWith");o({target:"String",proto:!0,forced:!!(s||h||(r=i(String.prototype,"endsWith"),i,:r[m](n)}}),x||m in E||p(E,m,j)},function(t,n,e){var r=e(2),o=e(210).end;r({target:"String",proto:!0,forced:e(211)},{padEnd:function(t){return o(this,t,arguments.lrn E.push(p.slice(b)),E}]}),!g)},function(t,n,e){var r,o=e(2),i=e(4).f,a=e(39),u=e(199),c=e(12),f=e(200),s=e(29),l="".startsWith,p=Math.min,h=f("startsWith");o({target:"String",proto:!0,forced:!!(s||h||(r=i(String.prototype,"startsWith"),!,r,�᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,n,e){var r=e(2),o=e(128).end,i=e(220)("trimEnd"),a=i?function(){return o(this)}:"".trimEnd;r({target:"String",prto:!0,forced:i},{trimStart:a,trimLeft:a})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("anchor")},{anchor:f.toLowerCase()||n.split('"').length>3}))}},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("big")},{big:function(){return o(this,"big","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("blink")},{blink:function(){return o(this,"blink","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("bold")},{bold:function(){return o(this,"b","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("fixed")},{fixed:function(){return o(this,"tt","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("fontcolor")},{fontcolor:function(t){return o(this,"font","color",t)}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("fontsize")},{fontsize:function(t){return o(this,"font","size",t)}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("italics")},{italiunction(t){return o(this,"a","href",t)}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("small")},{small:function(){return o(this,"small","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("strike")},{strike:function(){return o(this,"strike","","")}})},function(t,n,e){var r=e(2),o=e(224);r({target:"String",proto:!0,forced:e(225)("sub")},{sub(){return URL.prototype.toString.call(this)}})}])}();

//!fetch 3.0.0, global "this" must be replaced with "window"
// IIFE version
!function(t){"use strict";var e="URLSearchParams"in self,r="Symbol"in self&&"iterator"on(){try{return new Blob,!0}catch(t){return!1}}(),n="FormData"in self,i="ArrayBuffer"in self;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]"urn this.t(e);var r=this.map[otype.delete=fun(t){return t=h(tnction(t){returnrototype.set=functioasOwnProperty(r)& this.forEach((funcrn this.forEach((funs.forEach((function(e,r){t.push([r,e])})),f(t)},r&&(d.prototype[Symbol.iterator]=d.prototype.entries);var meaders),this.urion(){return new w(this,{body:this._bodyInit})},b.call(w.pext,headatus:0,statusText:""});return t.type="ern new E(null,{status:e,headers:{location:t}})},t.DOMException=self.DOMException,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOsend(void 0===s._bodyInit?null:s._bodyInit)}))}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=d,self.Request=w,self.Response=E),t.Headeble:!0,enumerable:!0,value:customElements})};
}).call(self);

// Polyfill document.baseURI
"string"!==typeof document.baseURI&&Object.defineProperty(Document.prototyr("base");return a&&a.href?a.href:document.URL}});

// Polyfill CustomEvent
"function"!=nt(c,a.bubbles,a.cancelable,a.detail);return b},window.CustomEvent.prototype=wentNode;this.path.push(c,d);return this.path})})(Event.prototype,document,window);

/*!
Element.closest and Element.matches
https://github.com/jonathantneal/ctches(a))return b;b=b.parentNode}return null})})(window.Eletion(a){return a&&a.composed?d(this):b(this)})})(Eleode({composed:!0});return a&&9===a.nodeType}})}ntNode&&this.parentNode.removeChild(this)}})})})([Element.prototype,CharacterData.prototype,Docum,n()},t.value=e.getAttribute("class")||"",guments.length;a++)d.call(thLElement;Object.setPrototypeOf(HTMLElement,a)}})();
/**
 * SystemJS 4.0.2
 * MANUAL PATCH: remove script.crossOrigin = "anonymous"
 * MANUAL PATCH: add conn?'" from '+n:'"'))}return Promise.resolve(o)}}();

    // Figure out currentScript (for IE11, since it does not support currentScript)
    var regex = /\/cx-overlay(\.esm)?\.js($|\?|#)/;
    var scriptElm = currentScript || Arrayata-stencil-namespace') === "cx-overlay";
    });

    var resourcesUrl = scriptElm ? scriptElm.getAttribute('data-resources-url') || scriptElm.src : '';
    var start = function() {
      // if src is not present then origin is "null", and new URL() throws TypeError: Failed to construct 'URL': Invalid base URL
      var url = new URL('./p-0a8e108c.system.js', new URL(resourcesUrl, window.location.origin !== 'null' ? window.location.origin : undefined));
      System.import(url.href);
    };

    start();

    // Note: using .call(window) here because the self-executing function needs
    // to be scoped to the window object for the ES6Promise polyfill to work
  }
}).call(window);
