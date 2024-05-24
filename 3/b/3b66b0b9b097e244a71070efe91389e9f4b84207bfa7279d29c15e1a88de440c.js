(function() {window.PARSELY = window.PARSELY || {}; window.PARSELY.version = "2.1.0"; window.PARSELY.majorVersion = 2; window.PARSELY.hotfixName = ""; window.PARSELY.flavor = "conversions-engagedtime-slots-spa-video"; window.PARSELY.__template_track_ips = true; window.PARSELY.__template_heartbeat_should_honor_autotrack = undefined; window.PARSELY.__template_limit_et_sample_len = false; window.PARSELY.__template_apikey = "spectrum.ieee.org"; window.PARSELY.__template_is_first_party = false; window.PARSELY.__template_pixelhost = ""; window.PARSELY.__template_customizations = null; })();

/*! parsely-js-api - v2.1.0 - 2023-05-26
 * http://www.parsely.com/
 * 2023 Parsely, Inc. */

function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}window.PARSELY=window.PARSELY||{},function(){var e=function(){return function(e){this!==window&&void 0!==this&&(this.msgs.length>=100&&(this.msgs=this.msgs.slice(0,100)),this.msgs.push(e))}};PARSELY.console={"msgs":[],"log":e(),"dir":e()}}(),function(){var e,t=PARSELY.console;try{e=document.getElementById("parsely-cfg").getAttribute("data-parsely-site")}catch(r){e=null}var n=PARSELY.site||e||PARSELY.__template_apikey||"missing.parsely.com",i=document.location.protocol+"//"+(PARSELY.pixelhost||PARSELY.__template_pixelhost||"p1.parsely.com");PARSELY.pInit=function(e){if(e.error===undefined){if(t.log("Static configuration loaded"),"object"===_typeof(PARSELY.config))for(var n in PARSELY.config)PARSELY.config.hasOwnProperty(n)&&(e[n]=PARSELY.config[n]);PARSELY.config=e,PARSELY.urls={"static":null,"config":null,"pixel":i},PARSELY._sync=!0,PARSELY.is_first_party=PARSELY.__template_is_first_party||!1}else t.log("Unable to load static configuration")},t.log("Loading configuration statically");var o={"apikey":n,"uuid":null,"network_uuid":null,"apikey_uuid":null,"settings":{"debug":!1,"widget":!1,"tracker":!0,"test":window._parselyIsTest||!1},"bundle":null,"customizations":PARSELY.__template_customizations||null,"track_ip_addresses":null==PARSELY.__template_track_ips||PARSELY.__template_track_ips,"heartbeat_should_honor_autotrack":PARSELY.__template_heartbeat_should_honor_autotrack||!1,"limit_et_sample_len":PARSELY.__template_limit_et_sample_len||!1,"is_remote_config":!1};PARSELY.pInit(o)}(),"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){"use strict";function e(e){return e<10?"0"+e:e}function t(){return this.valueOf()}function n(e){return r.lastIndex=0,r.test(e)?'"'+e.replace(r,function(e){var t=u[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function i(e,t){var o,r,u,c,l,f=a,p=t[e];switch(p&&"object"===_typeof(p)&&"function"==typeof p.toJSON&&(p=p.toJSON(e)),"function"==typeof d&&(p=d.call(t,e,p)),_typeof(p)){case"string":return n(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(a+=s,l=[],"[object Array]"===Object.prototype.toString.apply(p)){for(c=p.length,o=0;o<c;o+=1)l[o]=i(o,p)||"null";return u=0===l.length?"[]":a?"[\n"+a+l.join(",\n"+a)+"\n"+f+"]":"["+l.join(",")+"]",a=f,u}if(d&&"object"===_typeof(d))for(c=d.length,o=0;o<c;o+=1)"string"==typeof d[o]&&(u=i(r=d[o],p))&&l.push(n(r)+(a?": ":":")+u);else for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(u=i(r,p))&&l.push(n(r)+(a?": ":":")+u);return u=0===l.length?"{}":a?"{\n"+a+l.join(",\n"+a)+"\n"+f+"}":"{"+l.join(",")+"}",a=f,u}}window.PARSELY||(window.PARSELY={});var o=window.PARSELY;o.JSON||(o.JSON=window.JSON||{});var r=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=t,Number.prototype.toJSON=t,String.prototype.toJSON=t);var a,s,u,d;"function"!=typeof JSON.stringify&&(u={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var o;if(a="",s="","number"==typeof n)for(o=0;o<n;o+=1)s+=" ";else"string"==typeof n&&(s=n);if(d=t,t&&"function"!=typeof t&&("object"!==_typeof(t)||"number"!=typeof t.length))throw new Error("JSON.stringify");return i("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(){function e(e){return e.replace(/\\(?:u(.{4})|([^u]))/g,function(e,t,n){return t?String.fromCharCode(parseInt(t,16)):a[n]})}var t,n,i,o,r,a={"\\":"\\",'"':'"',"/":"/","t":"\t","n":"\n","r":"\r","f":"\f","b":"\b"},s={"go":function(){t="ok"},"firstokey":function(){o=r,t="colon"},"okey":function(){o=r,t="colon"},"ovalue":function(){t="ocomma"},"firstavalue":function(){t="acomma"},"avalue":function(){t="acomma"}},u={"go":function(){t="ok"},"ovalue":function(){t="ocomma"},"firstavalue":function(){t="acomma"},"avalue":function(){t="acomma"}},d={"{":{"go":function(){n.push({"state":"ok"}),i={},t="firstokey"},"ovalue":function(){n.push({"container":i,"state":"ocomma","key":o}),i={},t="firstokey"},"firstavalue":function(){n.push({"container":i,"state":"acomma"}),i={},t="firstokey"},"avalue":function(){n.push({"container":i,"state":"acomma"}),i={},t="firstokey"}},"}":{"firstokey":function(){var e=n.pop();r=i,i=e.container,o=e.key,t=e.state},"ocomma":function(){var e=n.pop();i[o]=r,r=i,i=e.container,o=e.key,t=e.state}},"[":{"go":function(){n.push({"state":"ok"}),i=[],t="firstavalue"},"ovalue":function(){n.push({"container":i,"state":"ocomma","key":o}),i=[],t="firstavalue"},"firstavalue":function(){n.push({"container":i,"state":"acomma"}),i=[],t="firstavalue"},"avalue":function(){n.push({"container":i,"state":"acomma"}),i=[],t="firstavalue"}},"]":{"firstavalue":function(){var e=n.pop();r=i,i=e.container,o=e.key,t=e.state},"acomma":function(){var e=n.pop();i.push(r),r=i,i=e.container,o=e.key,t=e.state}},":":{"colon":function(){if(Object.hasOwnProperty.call(i,o))throw new SyntaxError("Duplicate key '"+o+'"');t="ovalue"}},",":{"ocomma":function(){i[o]=r,t="okey"},"acomma":function(){i.push(r),t="avalue"}},"true":{"go":function(){r=!0,t="ok"},"ovalue":function(){r=!0,t="ocomma"},"firstavalue":function(){r=!0,t="acomma"},"avalue":function(){r=!0,t="acomma"}},"false":{"go":function(){r=!1,t="ok"},"ovalue":function(){r=!1,t="ocomma"},"firstavalue":function(){r=!1,t="acomma"},"avalue":function(){r=!1,t="acomma"}},"null":{"go":function(){r=null,t="ok"},"ovalue":function(){r=null,t="ocomma"},"firstavalue":function(){r=null,t="acomma"},"avalue":function(){r=null,t="acomma"}}};return function(i,o){var a,c=/^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;t="go",n=[];try{for(;;){if(!(a=c.exec(i)))break;a[1]?d[a[1]][t]():a[2]?(r=+a[2],u[t]()):(r=e(a[3]),s[t]()),i=i.slice(a[0].length)}}catch(l){t=l}if("ok"!==t||/[^\u0020\t\n\r]/.test(i))throw t instanceof SyntaxError?t:new SyntaxError("JSON");return"function"==typeof o?function f(e,t){var n,i,a=e[t];if(a&&"object"===_typeof(a))for(n in r)Object.prototype.hasOwnProperty.call(a,n)&&((i=f(a,n))!==undefined?a[n]=i:delete a[n]);return o.call(e,t,a)}({"":r},""):r}}())}(),function(){this.PARSELY||(this.PARSELY={});var e=this.PARSELY,t=!1,n=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;e.Class=function(){},e.Class.extend=function(e){function i(){!t&&this.init&&this.init.apply(this,arguments)}var o=this.prototype;t=!0;var r=new this;t=!1;for(var a in e)r[a]="function"==typeof e[a]&&"function"==typeof o[a]&&n.test(e[a])?function(e,t){return function(){var n=this._super;this._super=o[e];var i=t.apply(this,arguments);return this._super=n,i}}(a,e[a]):e[a];return i.prototype=r,i.constructor=i,i.extend=arguments.callee,i}}(),function(e,t){"undefined"==typeof PARSELY&&(PARSELY={}),"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?(module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)},PARSELY.$=PARSELY.jQuery=t(e,!0)):PARSELY.$=PARSELY.jQuery=t(e,!1)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=y.type(e);return"function"!==n&&!y.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function i(e){var t;for(t in e)if(("data"!==t||!y.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function o(e,t,n,i){if(y.acceptData(e)){var o,r,a=y.expando,s=e.nodeType,u=s?y.cache:e,c=s?e[a]:e[a]&&a;if(c&&u[c]&&(i||u[c].data)||n!==undefined||"string"!=typeof t)return c||(c=s?e[a]=d.pop()||y.guid++:a),u[c]||(u[c]=s?{}:{"toJSON":y.noop}),"object"!==_typeof(t)&&"function"!=typeof t||(i?u[c]=y.extend(u[c],t):u[c].data=y.extend(u[c].data,t)),r=u[c],i||(r.data||(r.data={}),r=r.data),n!==undefined&&(r[y.camelCase(t)]=n),"string"==typeof t?null==(o=r[t])&&(o=r[y.camelCase(t)]):o=r,o}}function r(){return!0}function a(){return!1}function s(){try{return P.activeElement}catch(e){}}function u(e,t,n,i){var o;if(y.isArray(t))y.each(t,function(t,o){n||Y.test(e)?i(e,o):u(e+"["+("object"===_typeof(o)?t:"")+"]",o,n,i)});else if(n||"object"!==y.type(t))i(e,t);else for(o in t)u(e+"["+o+"]",t[o],n,i)}var d=[],c=d.slice,l=(d.concat,d.push),f=(d.indexOf,{}),p=f.toString,v=f.hasOwnProperty,g={},h="1.11.1 -deprecated,-css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl",y=function D(e,t){return new D.fn.init(e,t)},m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,b=/^-ms-/,_=/-([\da-z])/gi,S=function(e,t){return t.toUpperCase()};y.fn=y.prototype={"jquery":h,"constructor":y,"selector":"","length":0,"toArray":function(){return c.call(this)},"get":function(e){return null!=e?e<0?this[e+this.length]:this[e]:c.call(this)},"pushStack":function(e){var t=y.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},"each":function(e,t){return y.each(this,e,t)},"map":function(e){return this.pushStack(y.map(this,function(t,n){return e.call(t,n,t)}))},"slice":function(){return this.pushStack(c.apply(this,arguments))},"first":function(){return this.eq(0)},"last":function(){return this.eq(-1)},"eq":function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},"end":function(){return this.prevObject||this.constructor(null)},"push":l,"sort":d.sort,"splice":d.splice},y.extend=y.fn.extend=function(){var e,t,n,i,o,r,a=arguments[0]||{},s=1,u=arguments.length,d=!1;for("boolean"==typeof a&&(d=a,a=arguments[s]||{},s++),"object"===_typeof(a)||y.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(o=arguments[s]))for(i in o)e=a[i],a!==(n=o[i])&&(d&&n&&(y.isPlainObject(n)||(t=y.isArray(n)))?(t?(t=!1,r=e&&y.isArray(e)?e:[]):r=e&&y.isPlainObject(e)?e:{},a[i]=y.extend(d,r,n)):n!==undefined&&(a[i]=n));return a},y.extend({"expando":"jQuery"+(h+Math.random()).replace(/\D/g,""),"isReady":!0,"error":function(e){throw new Error(e)},"noop":function(){},"isFunction":function(e){return"function"===y.type(e)},"isArray":Array.isArray||function(e){return"array"===y.type(e)},"isWindow":function(e){return null!=e&&e==e.window},"isNumeric":function(e){return!y.isArray(e)&&e-parseFloat(e)>=0},"isEmptyObject":function(e){var t;for(t in e)return!1;return!0},"isPlainObject":function(e){var t;if(!e||"object"!==y.type(e)||e.nodeType||y.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}if(g.ownLast)for(t in e)return v.call(e,t);for(t in e);return t===undefined||v.call(e,t)},"type":function(e){return null==e?e+"":"object"===_typeof(e)||"function"==typeof e?f[p.call(e)]||"object":_typeof(e)},"camelCase":function(e){return e.replace(b,"ms-").replace(_,S)},"nodeName":function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"each":function(e,t,i){var o=0,r=e.length,a=n(e);if(i){if(a)for(;o<r&&!1!==t.apply(e[o],i);o++);else for(o in e)if(!1===t.apply(e[o],i))break}else if(a)for(;o<r&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},"trim":function(e){return null==e?"":(e+"").replace(m,"")},"makeArray":function(e,t){var i=t||[];return null!=e&&(n(Object(e))?y.merge(i,"string"==typeof e?[e]:e):l.call(i,e)),i},"guid":1,"now":function(){return+new Date},"support":g}),y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()});var w,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,P=e.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(y.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if((n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:A.exec(e))&&(n[1]||!t)){if(n[1]){if(t=t instanceof y?t[0]:t,y.merge(this,y.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:P,!0)),E.test(n[1])&&y.isPlainObject(t))for(n in t)y.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return(i=P.getElementById(n[2]))&&i.parentNode&&(this.length=1,this[0]=i),this.context=P,this.selector=e,this}}else{if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(y.isFunction(e))return"undefined"!=typeof w.ready?w.ready(e):e(y)}return e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),y.makeArray(e,this)}).prototype=y.fn,w=y(P);var k,x=/\S+/g,R="undefined"==typeof undefined?"undefined":_typeof(undefined);for(k in y(g))break;g.ownLast="0"!==k,y.acceptData=function(e){var t=y.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)};y.extend({"cache":{},"noData":{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},"hasData":function(e){return!!(e=e.nodeType?y.cache[e[y.expando]]:e[y.expando])&&!i(e)},"data":function(e,t,n){return o(e,t,n)},"_data":function(e,t,n){return o(e,t,n,!0)}});!function(){var t,n,i=P.createElement("div");for(t in{"submit":!0,"change":!0,"focusin":!0})n="on"+t,(g[t+"Bubbles"]=n in e)||(i.setAttribute(n,"t"),g[t+"Bubbles"]=!1===i.attributes[n].expando);i=null}();var L=/^key/,O=/^(?:mouse|pointer|contextmenu)|click/,T=/^(?:focusinfocus|focusoutblur)$/,C=/^([^.]*)(?:\.(.+)|)$/;y.event={"global":{},"add":function(e,t,n,i,o){var r,a,s,u,d,c,l,f,p,v,g,h=y._data(e);if(h){for(n.handler&&(n=(u=n).handler,o=u.selector),n.guid||(n.guid=y.guid++),(a=h.events)||(a=h.events={}),(c=h.handle)||((c=h.handle=function(e){return _typeof(y)===R||e&&y.event.triggered===e.type?undefined:y.event.dispatch.apply(c.elem,arguments)}).elem=e),s=(t=(t||"").match(x)||[""]).length;s--;)p=g=(r=C.exec(t[s])||[])[1],v=(r[2]||"").split(".").sort(),p&&(d=y.event.special[p]||{},p=(o?d.delegateType:d.bindType)||p,d=y.event.special[p]||{},l=y.extend({"type":p,"origType":g,"data":i,"handler":n,"guid":n.guid,"selector":o,"needsContext":o&&y.expr.match.needsContext.test(o),"namespace":v.join(".")},u),(f=a[p])||((f=a[p]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,i,v,c)||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),d.add&&(d.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),o?f.splice(f.delegateCount++,0,l):f.push(l),y.event.global[p]=!0);e=null}},"trigger":function(t,n,i,o){var r,a,s,u,d,c,l,f=[i||P],p=v.call(t,"type")?t.type:t,g=v.call(t,"namespace")?t.namespace.split("."):[];if(s=c=i=i||P,3!==i.nodeType&&8!==i.nodeType&&!T.test(p+y.event.triggered)&&(p.indexOf(".")>=0&&(p=(g=p.split(".")).shift(),g.sort()),a=p.indexOf(":")<0&&"on"+p,t=t[y.expando]?t:new y.Event(p,"object"===_typeof(t)&&t),t.isTrigger=o?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=i),n=null==n?[t]:y.makeArray(n,[t]),d=y.event.special[p]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y.isWindow(i)){for(u=d.delegateType||p,T.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),c=s;c===(i.ownerDocument||P)&&f.push(c.defaultView||c.parentWindow||e)}for(l=0;(s=f[l++])&&!t.isPropagationStopped();)t.type=l>1?u:d.bindType||p,(r=(y._data(s,"events")||{})[t.type]&&y._data(s,"handle"))&&r.apply(s,n),(r=a&&s[a])&&r.apply&&y.acceptData(s)&&(t.result=r.apply(s,n),!1===t.result&&t.preventDefault());if(t.type=p,!o&&!t.isDefaultPrevented()&&(!d._default||!1===d._default.apply(f.pop(),n))&&y.acceptData(i)&&a&&i[p]&&!y.isWindow(i)){(c=i[a])&&(i[a]=null),y.event.triggered=p;try{i[p]()}catch(h){}y.event.triggered=undefined,c&&(i[a]=c)}return t.result}},"dispatch":function(e){e=y.event.fix(e);var t,n,i,o,r,a=[],s=c.call(arguments),u=(y._data(this,"events")||{})[e.type]||[],d=y.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,e)){for(a=y.event.handlers.call(this,e,u),t=0;(o=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(i=o.handlers[r++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,(n=((y.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,s))!==undefined&&!1===(e.result=n)&&(e.preventDefault(),e.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,e),e.result}},"handlers":function(e,t){var n,i,o,r,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(o=[],r=0;r<s;r++)o[n=(i=t[r]).selector+" "]===undefined&&(o[n]=i.needsContext?y(n,this).index(u)>=0:y.find(n,this,null,[u]).length),o[n]&&o.push(i);o.length&&a.push({"elem":u,"handlers":o})}return s<t.length&&a.push({"elem":this,"handlers":t.slice(s)}),a},"fix":function(e){if(e[y.expando])return e;var t,n,i,o=e.type,r=e,a=this.fixHooks[o];for(a||(this.fixHooks[o]=a=O.test(o)?this.mouseHooks:L.test(o)?this.keyHooks:{}),i=a.props?this.props.concat(a.props):this.props,e=new y.Event(r),t=i.length;t--;)e[n=i[t]]=r[n];return e.target||(e.target=r.srcElement||P),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,r):e},"props":"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),"fixHooks":{},"special":{"load":{"noBubble":!0},"focus":{"trigger":function(){if(this!==s()&&this.focus)try{return this.focus(),!1}catch(e){}},"delegateType":"focusin"},"blur":{"trigger":function(){if(this===s()&&this.blur)return this.blur(),!1},"delegateType":"focusout"}}},y.Event=function(e,t){if(!(this instanceof y.Event))return new y.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===undefined&&!1===e.returnValue?r:a):this.type=e,t&&y.extend(this,t),this.timeStamp=e&&e.timeStamp||y.now(),this[y.expando]=!0},y.Event.prototype={"isDefaultPrevented":a,"isPropagationStopped":a,"isImmediatePropagationStopped":a,"stopPropagation":function(){var e=this.originalEvent;this.isPropagationStopped=r,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},"stopImmediatePropagation":function(){var e=this.originalEvent;this.isImmediatePropagationStopped=r,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},y.fn.extend({"on":function(e,t,n,i,o){var r,s;if("object"===_typeof(e)){"string"!=typeof t&&(n=n||t,t=undefined);for(r in e)this.on(r,t,n,e[r],o);return this}if(null==n&&null==i?(i=t,n=t=undefined):null==i&&("string"==typeof t?(i=n,n=undefined):(i=n,n=t,t=undefined)),!1===i)i=a;else if(!i)return this;return 1===o&&(s=i,(i=function(e){return y().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=y.guid++)),this.each(function(){y.event.add(this,e,i,n,t)})},"trigger":function(e,t){return this.each(function(){y.event.trigger(e,t,this)})},"triggerHandler":function(e,t){var n=this[0];if(n)return y.event.trigger(e,t,n,!0)}});g.getSetAttribute,g.input;y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){y.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});var I=/%20/g,Y=/\[\]$/;y.param=function(e,t){var n,i=[],o=function(e,t){t=y.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=y.ajaxSettings&&y.ajaxSettings.traditional),y.isArray(e)||e.jquery&&!y.isPlainObject(e))y.each(e,function(){o(this.name,this.value)});else for(n in e)u(n,e[n],t,o);return i.join("&").replace(I,"+")};var N=e.jQuery,j=e.$;return y.noConflict=function(t){return e.$===y&&(e.$=j),t&&e.jQuery===y&&(e.jQuery=N),y},_typeof(t)===R&&(e.jQuery=e.$=y),y}),"undefined"==typeof window.PARSELY&&(window.PARSELY={}),function(e,t){window.PARSELY._lifecycle=t()}(0,function(){"use strict";var e=void 0;try{new EventTarget,e=!1}catch(t){e=!1}var t="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+_typeof(t));e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=_typeof(t)&&"function"!=typeof t?e:t},a=function(){function e(){n(this,e),this._registry={}}return i(e,[{"key":"addEventListener","value":function(e,t){this._getRegistry(e).push(t)}},{"key":"removeEventListener","value":function(e,t){var n=this._getRegistry(e),i=n.indexOf(t);i>-1&&n.splice(i,1)}},{"key":"dispatchEvent","value":function(e){return e.target=this,Object.freeze(e),this._getRegistry(e.type).forEach(function(t){return t(e)}),!0}},{"key":"_getRegistry","value":function(e){return this._registry[e]=this._registry[e]||[]}}]),e}(),s=e?EventTarget:a,u=e?Event:function _(e){n(this,_),this.type=e},d=function(e){function t(e,i){n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.newState=i.newState,o.oldState=i.oldState,o.originalEvent=i.originalEvent,o}return o(t,u),t}(),c="active",l="passive",f="hidden",p="frozen",v="terminated",g="object"===("undefined"==typeof safari?"undefined":t(safari))&&safari.pushNotification,h=["focus","blur","visibilitychange","freeze","resume","pageshow","onpageshow"in self?"pagehide":"unload"],y=function(e){return e.preventDefault(),e.returnValue="Are you sure?"},m=[[c,l,f,v],[c,l,f,p],[f,l,c],[p,f],[p,c],[p,l]].map(function(e){return e.reduce(function(e,t,n){return e[t]=n,e},{})}),b=function(){return document.visibilityState===f?f:document.hasFocus()?c:l};return new(function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),i=b();return e._state=i,e._unsavedChanges=[],e._handleEvents=e._handleEvents.bind(e),h.forEach(function(t){return addEventListener(t,e._handleEvents,!0)}),g&&addEventListener("beforeunload",function(t){e._safariBeforeUnloadTimeout=setTimeout(function(){t.defaultPrevented||t.returnValue.length>0||e._dispatchChangesIfNeeded(t,f)},0)}),e}return o(t,s),i(t,[{"key":"addUnsavedChanges","value":function(e){!this._unsavedChanges.indexOf(e)>-1&&(0===this._unsavedChanges.length&&addEventListener("beforeunload",y),this._unsavedChanges.push(e))}},{"key":"removeUnsavedChanges","value":function(e){var t=this._unsavedChanges.indexOf(e);t>-1&&(this._unsavedChanges.splice(t,1),0===this._unsavedChanges.length&&removeEventListener("beforeunload",y))}},{"key":"_dispatchChangesIfNeeded","value":function(e,t){if(t!==this._state)for(var n=function(e,t){for(var n,i=0;n=m[i];++i){var o=n[e],r=n[t];if(o>=0&&r>=0&&r>o)return Object.keys(n).slice(o,r+1)}return[]}(this._state,t),i=0;i<n.length-1;++i){var o=n[i],r=n[i+1];this._state=r,this.dispatchEvent(new d("statechange",{"oldState":o,"newState":r,"originalEvent":e}))}}},{"key":"_handleEvents","value":function(e){switch(g&&clearTimeout(this._safariBeforeUnloadTimeout),e.type){case"pageshow":case"resume":this._dispatchChangesIfNeeded(e,b());break;case"focus":this._dispatchChangesIfNeeded(e,c);break;case"blur":this._state===c&&this._dispatchChangesIfNeeded(e,b());break;case"pagehide":case"unload":this._dispatchChangesIfNeeded(e,e.persisted?p:v);break;case"visibilitychange":this._state!==p&&this._state!==v&&this._dispatchChangesIfNeeded(e,b());break;case"freeze":this._dispatchChangesIfNeeded(e,p)}}},{"key":"state","get":function(){return this._state}},{"key":"pageWasDiscarded","get":function(){return document.wasDiscarded||!1}}]),t}())}),function(){this.PARSELY=this.PARSELY||{};var e,t=this.PARSELY;t.util={},(e=t.util).getWindow=function(){if(t.getWindow&&"function"==typeof t.getWindow)return t.getWindow();try{return window.top.document.cookie,window.top}catch(e){try{return window.parent.document.cookie,window.parent}catch(n){return window}}},e.windowSetFunction=function(t,n){var i=e.getWindow(),o=i[t];i[t]=function(){n(),"function"==typeof o&&o()}},e.windowAddEventListener=function(e,t){var n=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{"get":function(){n=!0}}))}catch(o){}var i=!1;return n&&(i={"passive":!0,"capture":!1}),"undefined"!=typeof window.addEventListener?window.addEventListener(e,t,i):"undefined"!=typeof document.attachEvent&&document.attachEvent("on"+e,t)},e.objAddEventListener=function(e,t,n,i){return i=void 0!==i&&i,"undefined"!=typeof e.addEventListener?e.addEventListener(t,n,i):"undefined"!=typeof e.attachEvent&&e.attachEvent("on"+t,n)},e.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},e.getEventUrl=function(){return t.config.eventUrl?t.config.eventUrl:t.lastRequest?t.lastRequest.url:e.getWindow().location.href},e.isSafari=function(){return navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS")},e.isFirefox=function(){return"undefined"!=typeof InstallTrigger},e.getWindowCrypto=function(){var t=e.getWindow();if(t)return t.crypto},e.makeUUID=function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"",n=e.getWindowCrypto();return n?t+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}):t+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/x/g,function(){return(16*Math.random()|0).toString(16)})},e.now=function(){return"undefined"!=typeof performance&&"function"==typeof performance.now?Math.round(performance.timing.navigationStart+performance.now()):(new Date).getTime()}}(),function(e){"use strict";e.Cookies=function(t){var n=function i(e,t,n){return 1===arguments.length?i.get(e):i.set(e,t,n)};return n._document=t.document,n._cacheKeyPrefix="cookey.",n._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),n.defaults={"path":"/","secure":!1},n.get=function(e){return n._renewCache(),n._cache[n._cacheKeyPrefix+e]},n.getJSON=function(t){var i=n.get(t);return i===undefined?i:e.JSON.parse(i)},n.set=function(t,i,o){(o=n._getExtendedOptions(o)).expires=n._getExpiresDate(i===undefined?-1:o.expires);try{n._document.cookie=n._generateCookieString(t,i,o)}catch(r){e.console.log(r)}return n},n.setJSON=function(t,i,o){return n.set(t,e.JSON.stringify(i),o),n},n.extendExpiry=function(e,t){var i=n.get(e);if(i===undefined)return!1;n.set(e,i,t)},n.expire=function(e,t){if(e.constructor!==Array)return n.set(e,undefined,t);for(var i=0;i<e.length;i++)n.set(e[i],undefined,t)},n._getExtendedOptions=function(e){return{"path":e&&e.path||n.defaults.path,"domain":e&&e.domain||n.defaults.domain,"expires":e&&e.expires||n.defaults.expires,"secure":e&&e.secure!==undefined?e.secure:n.defaults.secure}},n._isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},n._getExpiresDate=function(e,t){if(t=t||new Date,"number"==typeof e?e=e===Infinity?n._maxExpireDate:new Date(t.getTime()+1e3*e):"string"==typeof e&&(e=new Date(e)),e&&!n._isValidDate(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return e},n._generateCookieString=function(t,i,o){t=(t=t.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29"),i=(i+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);var r=(o=o||{}).domain||e.cookieDomain||n._autoCookieDomain,a=t+"="+i;return a+=o.path?";path="+o.path:"",a+=r?";domain="+r:"",a+=o.expires?";expires="+o.expires.toUTCString():"",a+=o.secure?";secure":""},n._getCacheFromString=function(e){for(var t={},i=e?e.split("; "):[],o=0;o<i.length;o++){var r=n._getKeyValuePairFromCookieString(i[o]);if(null!=r){var a=n._cacheKeyPrefix+r.key;t[a]===undefined&&(t[a]=r.value)}}return t},n._getKeyValuePairFromCookieString=function(e){var t=e.indexOf("=");t=t<0?e.length:t;var n=e.substr(0,t),i=e.substr(t+1);try{n=decodeURIComponent(n),i=decodeURIComponent(i)}catch(o){return null}return{"key":n,"value":i}},n._renewCache=function(){try{n._cachedDocumentCookie!==n._document.cookie&&(n._cache=n._getCacheFromString(n._document.cookie),n._cachedDocumentCookie=n._document.cookie)}catch(t){e.console.log(t)}},n._isValidDomain=function(e){var t="cookies.js_dtest",i="1"===n.set(t,1,{"domain":e}).get(t);return n.expire(t,{"domain":e}),i},n._getAutoCookieDomain=function(){var t=e.util.getWindow().location.hostname;if(!isNaN(parseInt(t.replace(".",""),10)))return n._isValidDomain(t)?t:null;var i=t.split(".");if(1===i.length)return t;for(var o,r=2;r<=i.length;r++){var a=i.slice(-r).join(".");if(n._isValidDomain(a)){o=a;break}}return o||t},n._autoCookieDomain=n._getAutoCookieDomain(),n}(e.util.getWindow())}(this.PARSELY),function(e){"use strict";var t=function(){};t.prototype=function(){var t=function i(e,t,n){return 1===arguments.length?i.get(e):i.set(e,t,n)};t._keyPrefix="pStore-",t._delimiter="|^";try{t._store=e.util.getWindow().localStorage}catch(n){t._store=undefined}return t._baseDomain=null,t._quotaErrors=["NS_ERROR_DOM_QUOTA_REACHED","QUOTA_EXCEEDED_ERR","QuotaExceededError","W3CException_DOM_QUOTA_EXCEEDED_ERR"],t.get=function(n){t._migrateCookie(n);var i=t._store[t._keyPrefix+n];if(void 0===i)return undefined;try{i=t._deserialize(i)}catch(r){return console.log("Error deserializing stored data for key "+n),t.expire(n),undefined}if("undefined"!=typeof i.expires){var o=parseInt(i.expires,10);if(!isNaN(o)&&e.util.now()>o)return t.expire(n),undefined}return i.value},t.getJSON=function(n){var i=t.get(n);return void 0===i?i:e.JSON.parse(i)},t.set=function(n,i,o){var r=t._keyPrefix+n;if(void 0===i)return delete t._store[r],t;o=e.Cookies._getExtendedOptions(o);var a,s=e.Cookies._getExpiresDate(o.expires);void 0!==s&&(s=s.getTime());try{a=t._serialize({"value":i,"expires":s})}catch(u){return console.log("Error serializing stored data for key "+n),t}try{t._store[r]=a}catch(u){console.log("Error storing data for key "+r+" in localStorage"),-1!==t._quotaErrors.indexOf(u.name)&&console.log("quota exceeded")}return t},t.setJSON=function(n,i,o){return t.set(n,e.JSON.stringify(i),o),t},t.extendExpiry=function(e,n){var i=t.get(e);if(void 0===i)return!1;t.set(e,i,n)},t.expire=function(e,n){return t.set(e,undefined,n)},t._serialize=function(e){return e.value+t._delimiter+e.expires},t._deserialize=function(e){var n=e.split(t._delimiter),i={"value":n[0]};return n.length>1&&(i.expires=n[1]),i},t._migrateCookie=function(n){var i=e.Cookies.get(n);if(e.Cookies.expire(n),void 0!==i){var o=e.ParselyStorage.defaults[n],r={};void 0!==o&&(r.expires=o),t.set(n,i,r)}},{"constructor":t,"get":t.get,"getJSON":t.getJSON,"set":t.set,"setJSON":t.setJSON,"extendExpiry":t.extendExpiry,"expire":t.expire}}();var n=function(){};n.prototype=function(){var n=new t,i=function(){var t=n._keyPrefix;try{return e.util.getWindow().localStorage.setItem(t,t),e.util.getWindow().localStorage.removeItem(t),!0}catch(i){return!1}}()&&function(){var t=!1,n=e.Cookies.get("_parsely_visitor");return void 0!==n&&"{"!==n.charAt(0)&&(t=!0),!!e.util.isSafari()||!0===e.use_localstorage&&!t}()?n:e.Cookies;return{"supportsCookies":"cookie"in document&&(document.cookie.length>0||(document.cookie="test").indexOf.call(document.cookie,"test")>-1),"get":i.get,"getJSON":i.getJSON,"set":i.set,"setJSON":i.setJSON,"extendExpiry":i.extendExpiry,"expire":i.expire,"defaults":{"visitor":{"key":"_parsely_visitor","expires":34164e3,"secure":!1},"session":{"key":"_parsely_session","expires":1800,"secure":!1}}}}(),e.ParselyStorage=new n}(this.PARSELY),function(){var e=this.PARSELY,t=e.Class,n=e.ParselyStorage,i=e.console,o=e.JSON,r=["id"],a=t.extend({"init":function(){this.visitorCookieName=e.visitorCookieName||n.defaults.visitor.key,this.visitorCookieTimeoutSecs=e.visitorCookieTimeoutSecs||n.defaults.visitor.expires,this.visitorCookieSecure=e.visitorCookieSecure||n.defaults.visitor.secure,this.legacyVisitorCookieName=e.legacyVisitorCookieName||"parsely_uuid"},"getVisitorInfo":function(t){t=t||!1;var r=n.get(this.visitorCookieName);if(void 0===r){var a=n.get(this.legacyVisitorCookieName),s=e.config.apikey_uuid||e.config.uuid;!1!==e.optout_disabled_cookies&&void 0===a&&!1===n.supportsCookies&&(a="OPTOUT",i.log("Setting visitor ID to OPTOUT")),void 0===a&&null!==s?(a=s,i.log("No existing visitor ID found, using UUID from config: "+a)):i.log("Using existing value for visitor ID: "+a),r=this.initVisitor(a),n.expire("parsely_uuid")}else{var u=!1;try{r=o.parse(r),u=!0}catch(d){i.log('Unable to JSON parse visitorInfo "'+r+'", assuming ampid.'),r=this.initVisitor(r)}u&&t&&this.extendVisitorExpiry()}return e.config.parsely_site_uuid=r.id,r},"initVisitor":function(e){return this.setVisitorInfo({"id":e,"session_count":0,"last_session_ts":0})},"setVisitorInfo":function(e){for(var t=0;t<r.length;t++){var i=r[t];if("undefined"==typeof e[i]||null===e[i])return!1}return n.setJSON(this.visitorCookieName,e,{"expires":this.visitorCookieTimeoutSecs,"secure":this.visitorCookieSecure}),e},"extendVisitorExpiry":function(){n.extendExpiry(this.visitorCookieName,{"expires":this.visitorCookieTimeoutSecs,"secure":this.visitorCookieSecure})}});e.visitorManager=new a}(),function(){var e=this.PARSELY,t=e.util,n=e.Class,i=e.ParselyStorage,o=e.console,r=e.visitorManager,a=n.extend({"init":function(){this.windowAlias=t.getWindow(),this.documentAlias=this.windowAlias.document,this.sessionCookieName=e.sessionCookieName||i.defaults.session.key,this.sessionCookieTimeoutSecs=i.defaults.session.expires,this.sessionCookieSecure=e.sessionCookieSecure||i.defaults.session.secure,o.log("Initializing session."),this.getSession(!1)},"getSession":function(n){n=n||!1;var a=r.getVisitorInfo(),s=i.getJSON(this.sessionCookieName);if(void 0===s){var u,d;!1===a?(u=1,d=0):(a.session_count++,u=a.session_count,d=a.last_session_ts);var c=new Date;s={"sid":u,"surl":t.getEventUrl(),"sref":e.lastRequest?e.lastRequest.urlref:this.documentAlias.referrer,"sts":c.getTime(),"slts":d},o.log("Session expired/never existed, creating new session with "+this.sessionCookieTimeoutSecs+"s timeout: "+e.JSON.stringify(s)),i.setJSON(this.sessionCookieName,s,{"expires":this.sessionCookieTimeoutSecs,"secure":this.sessionCookieSecure}),a.last_session_ts=s.sts,r.setVisitorInfo(a)}else n&&this.extendSessionExpiry();return s},"extendSessionExpiry":function(){i.extendExpiry(this.sessionCookieName,{"expires":this.sessionCookieTimeoutSecs,"secure":this.sessionCookieSecure})}});e.sessionManager=new a}(),function(){var e=this.PARSELY,t=e.util,n=e.JSON,i=e.$,o=t.getWindow().document;PARSELY.getLdJsonMetas=function(){for(var e=o.getElementsByTagName("script"),t=0;t<e.length;t++){var i=e[t];if("application/ld+json"===i.getAttribute("type")){var r;try{r=n.parse(i.innerHTML)}catch(a){return null}return{"type":"NewsArticle"===r["@type"]?"post":"sectionpage","title":r.headline,"link":r.url,"image_url":r.thumbnailUrl,"pub_date":r.dateCreated,"section":r.articleSection,"authors":r.creator,"tags":r.keywords}}}return null},PARSELY.getRepeatedMetaMetas=function(){for(var e={},t=o.getElementsByTagName("meta"),n={"parsely-title":"title","parsely-link":"link","parsely-image-url":"image_url","parsely-type":"type","parsely-post-id":"post_id","parsely-pub-date":"pub_date","parsely-section":"section","parsely-author":"authors","parsely-tags":"tags"},r=0;r<t.length;r++){var a=t[r],s=n[a.getAttribute("name")];if(void 0!==s){var u=a.getAttribute("content");"authors"===s?"undefined"==typeof e[s]?e[s]=[u]:e[s].push(u):e[s]="tags"===s?u.split(","):u}}return i.isEmptyObject(e)?null:e},PARSELY.getParselyPageMetas=function(){for(var e=o.getElementsByTagName("meta"),t=0;t<e.length;t++){var i=e[t];if("parsely-page"===i.getAttribute("name")){var r=i.getAttribute("value")||i.getAttribute("content");try{return n.parse(r)}catch(a){return null}}}return null},PARSELY.getMetas=function(){return this.getRepeatedMetaMetas()||this.getParselyPageMetas()||this.getLdJsonMetas()}}(),function(){function e(e){for(var t=0,n=0;e;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return[t,n]}function t(e){var n=r.slots.hasParselySlots?u:"id";if(null!==e.getAttribute(n))return"//*[@"+n+'="'+e.getAttribute(n)+'"]';if(e===document.body)return"//"+e.tagName.toLowerCase();for(var i=0,o=e.parentNode?e.parentNode.childNodes:[],a=0;a<o.length;a++){var s=o[a];if(s===e)return t(e.parentNode)+"/"+e.tagName.toLowerCase()+"["+(i+1)+"]";s.nodeType===d&&s.tagName===e.tagName&&i++}}function n(e){if(!e||0===e.indexOf("#")||0===e.indexOf("javascript"))return!0;var t=window.location.href;return e===t||0===e.indexOf(t+"#")}function i(e,t){function n(e,t){return e===document||t>=i||!e?null:"A"===e.nodeName?e:n(e.parentNode,t+1)}var i=(t=t||{}).maxHeight||5;return n(e,0)}function o(e){return e.getAttribute("parsely-target")||e.href}var r=this.PARSELY,a=r.util,s=r.ParselyStorage,u="data-parsely-slot";if(r.slots=r.slots||{},document.querySelector){r.slots.discoverSlots=function(){r.slots.hasParselySlots=!!document.querySelector("["+u+"]"),r.slots.discoveryTime=a.now()},r.slots.discoverSlots(),r.slots.reset=function(){r.slots.discoverSlots()};var d=1;a.objAddEventListener(document.body,"click",function(a){var u=i(a.target?a.target:a.srcElement);if(null===u)return!0;if(!n(u.getAttribute("href"))){var d=e(u),c=t(u),l={"url":r.util.getEventUrl(),"x":d[0],"y":d[1],"xpath":c,"href":o(u)};s.setJSON("_parsely_slot_click",l)}},!0)}else r.console("Slot tracking not supported on this browser")}(),function(e){"use strict";var t=e.$;e.Sampler=function(n){var i={};if(i._hasStartedSampling=!1,i._accumulators={},i._baseHeartbeatInterval=15e4,i._jitterRange=5e3,i._jitterFloor=0-i._jitterRange/2,t.isNumeric(e.secondsBetweenHeartbeats)){var o=i._baseHeartbeatInterval/1e3,r=e.secondsBetweenHeartbeats<o&&!0===n._parselyIsTest;(e.secondsBetweenHeartbeats>o||r)&&(i._baseHeartbeatInterval=1e3*e.secondsBetweenHeartbeats)}return i.trackKey=function(t,o,r){if((void 0===o||"function"==typeof o)&&void 0!==r){if(!i._accumulators.hasOwnProperty(t)){var a=i._baseHeartbeatInterval;i._accumulators[t]={"ms":0,"totalMs":0,"firstSampleTime":e.util.now(),"lastSampleTime":e.util.now(),"lastActiveSampleTime":undefined,"sampleFn":o,"heartbeatFn":r,"heartbeatInterval":a,"heartbeatTimer":undefined,"baseHeartbeatInterval":a}}!1===i._hasStartedSampling&&(n.setInterval(i._sample,100),i._hasStartedSampling=!0),i._setHeartbeatTimeout(t)}},i._setHeartbeatTimeout=function(e){var t=i._accumulators[e];"undefined"!=typeof t.heartbeatTimer&&i._unsetHeartbeatTimeout(e);var o=Math.random()*i._jitterRange+i._jitterFloor,r=t.heartbeatInterval+o;t.heartbeatTimer=n.setTimeout(function(){i.sendHeartbeat(e)},r)},i._unsetHeartbeatTimeout=function(e){var t=i._accumulators[e];n.clearTimeout(t.heartbeatTimer),t.heartbeatTimer=undefined},i._backoff=function(t,n){var i=.3*((n=void 0===n?e.util.now()-t.firstSampleTime:n)/1e3+35),o=Math.min(36e5,i);t.heartbeatInterval=1e3*o},i.dropKey=function(e){delete i._accumulators[e]},i._sample=function(t,n){t=void 0===t?e.util.now():t;var o,r,a,s;for(var u in i._accumulators)o=i._accumulators[u],a=t-(void 0===n?o.lastSampleTime:n),r="undefined"==typeof o.sampleFn||o.sampleFn(t),e.config.limit_et_sample_len&&(s=a>0&&a<200,r=r&&s),o.ms+=r?a:0,o.totalMs+=r?a:0,o.lastSampleTime=t,r&&(t-o.lastActiveSampleTime>o.baseHeartbeatInterval&&(o.heartbeatInterval=o.baseHeartbeatInterval,i._setHeartbeatTimeout(u)),o.lastActiveSampleTime=t)},i.sendHeartbeat=function(e,t,n,o){var r=i._accumulators[e];if(void 0!==r){var a=void 0===t?r.ms/1e3:t,s=Math.round(a);s>0&&s<=3600&&r.heartbeatFn(s,undefined,r.totalMs,o),r.ms=0,o||i._backoff(r,n),i._setHeartbeatTimeout(e)}},i._sendHeartbeats=function(e,t){for(var n in i._accumulators)i.sendHeartbeat(n,e,t,!0)},i._setUnloadListeners=function(){e._lifecycle.addEventListener("statechange",function(e){"hidden"===e.newState.toLowerCase()&&i._sendHeartbeats()})},i._setUnloadListeners(),i}(e.util.getWindow())}(this.PARSELY),function(){var e=this.PARSELY,t=e.config.settings,n=e.Sampler,i=e.$,o=e.util;if("boolean"!=typeof e.enableHeartbeats||e.enableHeartbeats){var r=["focus","mousedown","mouseup","mousemove","scroll","keyup","keydown"],a=["active","passive"],s=5;i.isNumeric(e.activeTimeout)&&e.activeTimeout>=1&&e.activeTimeout<=60&&(s=e.activeTimeout);var u=o.now();e.engagedTime=e.engagedTime||{},e._lastEventTime=u,e.isEngaged=!0,e.isInteracting=!0,e.focused=!0,e.videoPlaying=!1,e.ENGAGED_TIME_SAMPLER_KEY="engagedTime",!0===t.test&&(e._handleEngagementActivityCalls=0),!0!==e.fbInstantArticles&&e._lifecycle.addEventListener("statechange",function(t){var n=t.newState.toLowerCase();-1!==a.indexOf(n)?e.focused=!0:e.focused=!1});var d=function(){e._lastEventTime=o.now(),!0===t.test&&e._handleEngagementActivityCalls++};!0!==e.fbInstantArticles?i.each(r,function(e,t){o.windowAddEventListener(t,d)}):setInterval(d,1e3*s),e.engagedTime.getParams=function(){return{"minActiveTimeout":1,"maxActiveTimeout":60,"activeTimeout":s}},e.engagedTime.sample=function(t,n,i,r){return t=void 0===t?o.now():t,n=void 0===n?e._lastEventTime:n,i=void 0===i?e.videoPlaying:i,r=void 0===r?e.focused:r,e.isInteracting=t-n<1e3*s,e.isEngaged=e.isInteracting&&r||i,e.isEngaged},e.engagedTime.sendHeartbeat=function(t,n,r,a){t=void 0===t?0:t,n=void 0===n?e.enableHeartbeats:n,a=void 0!==a&&a,(void 0===n||!0===n)&&(!0!==e.config.heartbeat_should_honor_autotrack||e.autotrack)&&("undefined"!=typeof PARSELY.beacon&&"undefined"!=typeof PARSELY.beacon.pixel&&"function"==typeof PARSELY.beacon.pixel.beacon?(PARSELY.beacon.pixel.beacon({"date":(new Date).toString(),"action":"heartbeat","inc":t,"tt":r,"url":o.getEventUrl(),"urlref":e.lastRequest?e.lastRequest.urlref:o.getWindow().document.referrer},undefined,a),i.isFunction(e.onHeartbeat)&&e.onHeartbeat(t)):console.warn("PARSELY.beacon.pixel.beacon was called with action='heartbeat' while PARSELY.beacon was undefined."))},e.engagedTime.startTracking=function(){var t=!0===e.fbInstantArticles?undefined:e.engagedTime.sample;n.trackKey(e.ENGAGED_TIME_SAMPLER_KEY,t,e.engagedTime.sendHeartbeat)},e.engagedTime.stopTracking=function(){n.dropKey(e.ENGAGED_TIME_SAMPLER_KEY)},e.engagedTime.initNewPage=function(){e.engagedTime.stopTracking(),e.engagedTime.startTracking()},e.engagedTime.startTracking()}}(),function(){var e=this.PARSELY;e.videoPlaying=!1,e.video=e.video||{},e.video.trackedVideos={},e.video._subscribedElements=[],e.video.skipRegex=new RegExp("data:video/\\w+;base64,.+"),window._parselyIsTest&&(e.video._embedMap={});var t=function(t){var n=e.video.trackedVideos[t].urlOverride;return void 0===n&&(n=e.util.getEventUrl()),n},n=function(){var t=!1;for(var n in e.video.trackedVideos)if(e.video.trackedVideos[n].isPlaying){t=!0;break}e.videoPlaying=t},i=function(n){return function(i,o,r,a){if(i=void 0===i?0:i,o=void 0===o?e.enableHeartbeats:o,a=void 0!==a&&a,void 0===o||!0===o){var s=e.video.trackedVideos[n],u=e.util.getWindow(),d={"date":(new Date).toString(),"action":"vheartbeat","inc":i,"url":t(n),"metadata":e.JSON.stringify(s.metadata),"tt":r,"urlref":e.lastRequest?e.lastRequest.urlref:u.document.referrer};"undefined"!=typeof PARSELY.beacon&&"undefined"!=typeof PARSELY.beacon.pixel&&"function"==typeof PARSELY.beacon.pixel.beacon?(PARSELY.beacon.pixel.beacon(d,undefined,a),e.$.isFunction(e.onHeartbeat)&&e.onHeartbeat(i),s._heartbeatsSent+=1):console.warn("PARSELY.beacon.pixel.beacon was called with action='vheartbeat' while PARSELY.beacon was undefined.")}}},o=function(){for(var t,n,i,o=window,r=0;r<e.video._strategies.length;r++){t=e.video._strategies[r];for(var a=0;a<t.searchTags.length;a++){n=o.document.getElementsByTagName(t.searchTags[a]);for(var s=0;s<n.length;s++)i=n[s],-1===e.video._subscribedElements.indexOf(i)&&t.verify(i)&&(i.id||i.setAttribute("id",t.platform+"-"+e.util.getRandomInt(0,9999999)),!1!==t.subscribe(i)&&("undefined"==typeof t._subscribedElements&&(t._subscribedElements=[]),t._subscribedElements.push(i),e.video._subscribedElements.push(i)))}}};e.video.detectVideos=function(){return o()};var r=function(t,n,o){if(void 0===n&&(n={}),n.hasOwnProperty("link")||(n.link=t),e.video.trackedVideos[t]){for(var r in n)n.hasOwnProperty(r)&&(e.video.trackedVideos[t].metadata[r]=n[r]);void 0!==o&&(e.video.trackedVideos[t].urlOverride=o)}else e.video.trackedVideos[t]={"id":t,"isPlaying":!1,"hasStartedPlaying":!1,"metadata":n,"urlOverride":o,"_heartbeatsSent":0};return e.Sampler.trackKey(t,function(){return e.video.trackedVideos[t].isPlaying},i(t)),e.video.trackedVideos[t]};e.video._storeApiRoot=function(t,n){window._parselyIsTest&&!e.video._embedMap.hasOwnProperty(t)&&(e.video._embedMap[t]=n)},e.video.trackPlay=function(i,o,a){if(void 0!==i)if(null===(i+"").match(e.video.skipRegex)){var s=r(i,o=void 0===o?{}:o,a),u=e.util.getWindow();s.hasStartedPlaying||(s.hasStartedPlaying=!0,"undefined"!=typeof PARSELY.beacon&&"undefined"!=typeof PARSELY.beacon.pixel&&"function"==typeof PARSELY.beacon.pixel.beacon?PARSELY.beacon.pixel.beacon({"date":(new Date).toString(),"action":"videostart","url":t(i),"metadata":e.JSON.stringify(s.metadata),"urlref":e.lastRequest?e.lastRequest.urlref:u.document.referrer}):console.warn("PARSELY.beacon.pixel.beacon was called with action='videostart' while PARSELY.beacon was undefined.")),s.isPlaying=!0,n()}else PARSELY.console.log("Found data-uri video, not subscribing")},e.video.trackPause=function(t,i,o){void 0!==t?(r(t,i,o).isPlaying=!1,n()):e.console.log("no video id provided; trackPause event failed")},e.video.trackPauseAll=function(){for(var t in e.video.trackedVideos)e.video.trackPause(t)},e.video.reset=function(t){if(e.video.trackedVideos.hasOwnProperty(t)){var i=e.video.trackedVideos[t];i.hasStartedPlaying=!1,i.isPlaying=!1,e.Sampler.sendHeartbeat(t),e.Sampler.dropKey(t),n()}else e.console.log("no video id provided; reset failed")},e.video.clear=function(){var t,n=[];for(var i in e.video.trackedVideos)e.video.reset(i),n.push(i);for(t=0;t<n.length;t++)delete e.video.trackedVideos[n[t]];e.video._subscribedElements=[],e.video._buildStrategiesList();for(t=0;t<e.video._strategies.length;t++)delete e.video._strategies[t]._subscribedElements},e.video.addStrategy=function(t){for(var n=0;n<e.video._strategies.length;n++)if(e.video._strategies[n].platform===t.platform)return void e.console.log("Strategy '"+t.platform+"' already registered");e.video._strategies.unshift(t),e.video.hasOwnProperty("autotrack")&&!1===e.video.autotrack||o()},"undefined"==typeof e.video.onPlay&&(e.video.onPlay=function(t,n,i){e.video.trackPlay(n,i)}),"undefined"==typeof e.video.onPause&&(e.video.onPause=function(t,n){e.video.trackPause(n)}),e.video.PLATFORM_MEDIAELEMENTJS="mediaelementjs";var a={"platform":e.video.PLATFORM_MEDIAELEMENTJS,"searchTags":["VIDEO","IFRAME"],"verify":function(e){return-1!==e.className.indexOf("mejs__player")},"subscribe":function(t){if("function"!=typeof window.MediaElement)return e.console.log("Detected mediaelement.js embed butwindow.MediaElement is not accesible."),!1;var n=function(n){var i={"duration":Math.round(1e3*n.duration),"image_url":t.poster,"title":t.title?t.title:n.currentSrc,"video_platform":e.video.PLATFORM_MEDIAELEMENTJS};e.video.onPlay(n,n.currentSrc,i)},i=function(t,n){e.video.onPause(t,t.currentSrc),!0===n&&e.video.reset(t.currentSrc)};new window.MediaElement(t.id,{"success":function(o){e.video._storeApiRoot(t.id,o),o.addEventListener("loadedmetadata",function(){o.addEventListener("play",function(){n(o)}),o.addEventListener("pause",function(){i(o)}),o.addEventListener("ended",function(){i(o,!0)}),e.console.log("Subscribed to mediaelementjs embed with ID '"+t.id+"'")})}})}};e.video.PLATFORM_VIDEOJS="videojs";var s={"platform":e.video.PLATFORM_VIDEOJS,"searchTags":["VIDEO"],"verify":function(e){return-1!==e.className.indexOf("vjs-tech")||-1!==e.className.indexOf("video-js")},"subscribe":function(t){if("function"!=typeof window.videojs)return e.console.log("Detected video.js embed but window.videojs is not accesible."),!1;var n,i=function(n){var i={"duration":Math.round(1e3*n.duration()),"image_url":n.poster_,"title":t.title?t.title:n.currentSrc(),"video_platform":e.video.PLATFORM_VIDEOJS};e.video.onPlay(n,n.currentSrc(),i)},o=function(t,n){e.video.onPause(t,t.currentSrc()),!0===n&&e.video.reset(t.currentSrc())},r=function(n){e.console.log("videojs: Attempting to set listeners"),e.video._storeApiRoot(t.id,n),n.on("play",function(){i(n)}),n.on("pause",function(){o(n)}),n.on("ended",function(){o(n,!0)}),!1===n.paused()&&i(n),e.console.log("videojs: Subscribed to videojs embed with ID '"+t.id+"'")};"undefined"!=typeof window.videojs.getPlayer?(e.console.log("videojs: Using getPlayer() to attach to player"),n=window.videojs.getPlayer(t.id)):(e.console.log("videojs: Using videojs() to attach to player"),n=window.videojs(t.id)),void 0!==n&&(window.isNaN(n.duration())?(e.console.log("videojs: Setting loadedmetadata listener"),n.on("loadedmetadata",function(){r(n)})):(e.console.log("videojs: Player metadata already loaded"),r(n)))}};e.video.PLATFORM_THEPLATFORM="theplatform";var u={"platform":e.video.PLATFORM_THEPLATFORM,"searchTags":["IFRAME"],"verify":function(e){return-1!==e.src.indexOf("player.theplatform.com")},"subscribe":function(t){if("object"!==_typeof(window.$pdk))return e.console.log("Detected ThePlatform embed but window.$pdk is not accesible."),!1;e.video._storeApiRoot(t.id,window.$pdk),window.$pdk.controller.addEventListener("OnReleaseStart",function(t){var n={"duration":t.data.release.duration,"image_url":t.data.release.defaultThumbnailUrl,"title":t.data.release.title,"author":t.data.release.author,"pub_date_tmsp":t.data.release.pubDate/1e3,"video_platform":e.video.PLATFORM_THEPLATFORM};e.video.onPlay(window.$pdk,t.data.release.guid,n)}),window.$pdk.controller.addEventListener("OnMediaPause",function(t){e.video.onPause(window.$pdk,t.data.clip.baseClip.guid)}),window.$pdk.controller.addEventListener("OnMediaEnd",function(t){e.video.onPause(window.$pdk,t.data.clip.baseClip.guid),e.video.reset(t.data.clip.baseClip.guid)}),e.console.log("Subscribed to ThePlatform embed with ID '"+t.id+"'")}};e.video.PLATFORM_VIMEO="vimeo";var d={"platform":e.video.PLATFORM_VIMEO,"searchTags":["IFRAME"],"verify":function(e){return-1!==e.src.indexOf("player.vimeo.com")},"subscribe":function(t){if("object"!==_typeof(window.Vimeo))return e.console.log("Detected Vimeo embed but window.Vimeo is not accesible."),!1;var n=new window.Vimeo.Player(t);e.video._storeApiRoot(t.id,n),n.on("play",function(t){n.getVideoId().then(function(i){n.getVideoTitle().then(function(o){var r={"title":o,"duration":1e3*Math.round(t.duration),"video_platform":e.video.PLATFORM_VIMEO};e.video.onPlay(n,""+i,r)})})}),n.on("pause",function(){n.getVideoId().then(function(t){e.video.onPause(n,""+t)})}),n.on("ended",function(){n.getVideoId().then(function(t){e.video.onPause(n,""+t),e.video.reset(""+t)})}),e.console.log("Subscribed to Vimeo embed with ID '"+t.id+"'")}};e.video.PLATFORM_JWPLAYER="jwplayer";var c={"platform":e.video.PLATFORM_JWPLAYER,"searchTags":["DIV"],"verify":function(e){return-1!==e.className.indexOf("jwplayer")&&-1!==e.className.indexOf("jw-")},"subscribe":function(t){if("function"!=typeof window.jwplayer)return e.console.log("Detected JWPlayer embed but window.jwplayer is not accesible."),!1;var n=window.jwplayer(t.id);e.video._storeApiRoot(t.id,n);n.on("play",function(){var t,i=n.getPlaylistItem();t="undefined"==typeof i.duration?1e3*n.getDuration():1e3*i.duration;var o=i.image;void 0!==o&&0!==o.indexOf("http")&&0===o.indexOf("//")&&(o="http:"+o);var r={"duration":t,"image_url":o,"title":i.title,"pub_date_tmsp":i.pubdate,"video_platform":e.video.PLATFORM_JWPLAYER};"undefined"!=typeof i.tags&&i.tags.length>0&&(r.tags=i.tags.split(",")),"undefined"!=typeof r.pub_date_tmsp&&Number.isInteger(r.pub_date_tmsp)&&(r.pub_date_tmsp*=1e3),i.hasOwnProperty("author")&&(r.author=i.author),i.hasOwnProperty("section")&&(r.section=i.section),e.video.onPlay(n,i.mediaid,r)}),n.on("pause",function(){e.video.onPause(n,n.getPlaylistItem().mediaid)}),n.on("complete",function(){e.video.onPause(n,n.getPlaylistItem().mediaid),e.video.reset(n.getPlaylistItem().mediaid)}),e.console.log("Subscribed to JWPlayer embed with ID '"+t.id+"'")}};e.video.PLATFORM_KALTURA="kaltura";var l={"platform":e.video.PLATFORM_KALTURA,"searchTags":["OBJECT","IFRAME"],"verify":function(e){return"application/x-shockwave-flash"===e.type&&("undefined"!=typeof e.data&&-1!==e.data.indexOf("cdnapi.kaltura.com")||"undefined"!=typeof e.src&&-1!==e.src.indexOf("cdnapi.kaltura.com")||"undefined"!=typeof e.id&&-1!==e.id.indexOf("kaltura-player"))},"subscribe":function(t){var n="parselyKalturaOnPlay"+t.id,i="parselyKalturaOnPause"+t.id,o="parselyKalturaOnEnd"+t.id;e.util.windowSetFunction(n,function(){var n=document.getElementById(t.id),i={"duration":1e3*n.evaluate("{mediaProxy.entry.duration}"),"image_url":n.evaluate("{mediaProxy.entry.thumbnailUrl}"),"title":n.evaluate("{mediaProxy.entry.name}"),"pub_date_tmsp":n.evaluate("{mediaProxy.entry.createdAt}"),"tags":n.evaluate("{mediaProxy.entry.tags}"),"video_platform":e.video.PLATFORM_KALTURA},o=n.evaluate("{mediaProxy.entry.categories}");o&&(i.section=o[0]),e.video.onPlay(n,n.evaluate("{mediaProxy.entry.id}"),i)}),e.util.windowSetFunction(i,function(){var n=document.getElementById(t.id);e.video.onPause(n,n.evaluate("{mediaProxy.entry.id}"))}),e.util.windowSetFunction(o,function(){var n=document.getElementById(t.id),i=n.evaluate("{mediaProxy.entry.id}");e.video.onPause(n,i),e.video.reset(i)});var r=function(){var r=document.getElementById(t.id);e.video._storeApiRoot(t.id,r),r.addJsListener("playerPlayed",n),r.addJsListener("playerPaused",i),r.addJsListener("playerPlayEnd",o)};"undefined"!=typeof document.getElementById(t.id).addJsListener?r():e.util.windowSetFunction("jsCallbackReady",r),e.console.log("Subscribed to Kaltura embed with ID '"+t.id+"'")}};e.video.PLATFORM_WISTIA="wistia";var f={"platform":e.video.PLATFORM_WISTIA,"searchTags":["DIV","IFRAME"],"verify":function(e){return-1!==e.className.indexOf("wistia_embed")||"undefined"!=typeof e.src&&-1!==e.src.indexOf("fast.wistia")},"subscribe":function(t){var n=function(t){var n,i=(n=!0===t.playlist?t.currentVideo():t).data.media,o={"duration":1e3*i.duration,"image_url":i.assets[0].url.replace(".bin",".jpg"),"pub_date_tmsp":i.createdAt,"title":i.name,"video_platform":e.video.PLATFORM_WISTIA};e.video.onPlay(n,i.hashedId,o)},i=function(t,n){var i;i=!0===t.playlist?t.currentVideo():t,e.video.onPause(i,i.data.media.hashedId),!0===n&&e.video.reset(i.data.media.hashedId)},o=function(o,r){if(!o)return!1;e.video._storeApiRoot(r,o),o.bind("play",function(){n(o)}),o.bind("pause",function(){i(o)}),o.bind("end",function(){i(o,!0)}),e.console.log("Subscribed to Wistia embed with ID '"+t.id+"'")};if("undefined"!=typeof window.Wistia){var r=window.Wistia.api(t.id);return r||"function"!=typeof window.Wistia.playlist||(r=window.Wistia.playlist(t.id.split("_")[1])),o(r,t.id)}window._wq=window._wq||[],window._wq.push({"id":t.id,"onReady":function(e){o(e,t.id)}})}};e.video.PLATFORM_BRIGHTCOVE="brightcove";var p={"platform":e.video.PLATFORM_BRIGHTCOVE,"searchTags":["VIDEO","VIDEO-JS"],"verify":function(e){return-1!==["video","video-js"].indexOf(e.tagName.toLowerCase())&&(e.hasAttribute("data-video-id")||e.hasAttribute("data-playlist-id"))},"subscribe":function(t){if("function"!=typeof window.videojs)return e.console.log("Detected Brightcove embed but window.videojs is not accesible."),!1;var n,i=function(t){var n,i=t.mediainfo,o={"duration":1e3*t.duration(),"image_url":t.poster(),"video_platform":e.video.PLATFORM_BRIGHTCOVE};t.el_.attributes["data-playlist-id"]&&t.hasOwnProperty("playlist")&&(i=t.playlist()[t.playlist.currentIndex()]),void 0!==i?(o.pub_date_tmsp=i.publishedAt,o.title=i.name,o.tags=i.tags,n=i.id):t.el_.attributes["data-video-id"]&&(n=t.el_.attributes["data-video-id"].value,o.title=t.el_.getAttribute("data-title")||undefined),n?e.video.onPlay(t,n,o):e.console.log("No video id found for Brightcove embed!")},o=function(t,n){var i;"undefined"!=typeof t.mediainfo?i=t.mediainfo.id:t.el_.attributes["data-video-id"]&&(i=t.el_.attributes["data-video-id"].value),i?(e.video.onPause(t,i),!0===n&&e.video.reset(i)):e.console.log("No video id found for Brightcove embed!")},r=!1,a=function(n){r||(r=!0,e.video._storeApiRoot(t.id,n),n.on("firstplay",function(){i(n)}),n.on("play",function(){i(n)}),n.on("pause",function(){o(n)}),n.on("ended",function(){o(n,!0)}),(!1===n.paused()||n.hasClass("vjs-has-started"))&&i(n),e.console.log("Subscribed to Brightcove embed with ID '"+t.id+"'"))};void 0!==(n="undefined"!=typeof window.videojs.getPlayer?window.videojs.getPlayer(t.id):window.videojs(t.id))&&(window.isNaN(n.duration())?(n.on("loadstart",function(){a(n)}),n.ready(function(){a(n)})):a(n))}};e.video.PLATFORM_YOUTUBE="youtube";var v={"platform":e.video.PLATFORM_YOUTUBE,"searchTags":["IFRAME"],"verify":function(e){return"iframe"===e.tagName.toLowerCase()&&(-1!==e.src.indexOf("youtube.com/embed")||-1!==e.src.indexOf("youtube-nocookie.com/embed"))},"subscribe":function(t){var n=function(t){var n;window.YT.get(t.id)?(e.console.log("YouTube player already initialized, using existing instance"),n=window.YT.get(t.id)):(e.console.log("Initialized new YouTube player instance"),n=new window.YT.Player(t.id)),n.addEventListener("onReady",function(){e.video._storeApiRoot(t.id,n)}),n.addEventListener("onStateChange",function(t){var i=function(t){var n={};return t.hasOwnProperty("getVideoData")&&t.hasOwnProperty("getDuration")?(e.console.log("Youtube player using getVideoData"),n=t.getVideoData(),n.duration=t.getDuration(),n):(t.hasOwnProperty("playerInfo")&&(e.console.log("Youtube player using playerInfo"),(n=t.playerInfo.videoData).duration=t.playerInfo.duration),n)},o=i(n).video_id;if(-1===t.data||0===t.data||2===t.data)e.video.onPause(n,o),0===t.data&&e.video.reset(o);else if(1===t.data){var r={"duration":1e3*i(n).duration,"title":i(n).title,"image_url":"http://img.youtube.com/vi/"+o+"/0.jpg","author":i(n).author,"video_platform":e.video.PLATFORM_YOUTUBE};e.video.onPlay(n,o,r)}}),e.console.log("Subscribed to YouTube embed with ID '"+t.id+"'")};"undefined"!=typeof window.YT&&"undefined"!=typeof window.YT.Player?n(t):e.util.windowSetFunction("onYouTubeIframeAPIReady",function(){n(t)})}};PARSELY.video._buildStrategiesList=function(){var t=[u,d,c,l,f,p,v,s,a];e.video._strategies=[];for(var n,i,o=0;o<t.length;o++)n=t[o],i=!0,"undefined"!=typeof e.video.allowedStrategies&&-1===e.video.allowedStrategies.indexOf(n.platform)&&(i=!1),i&&e.video._strategies.push(n)},PARSELY.video._buildStrategiesList(),e.video.hasOwnProperty("autotrack")&&!1===e.video.autotrack||(o(),e.util.getWindow().setInterval(o,5e3))}(),function(){var e=this.PARSELY;e.spa=e.spa||{};var t=0,n=e.util.getWindow();if(n.history.pushState&&n.addEventListener){var i={"pushState":"parselyPushState","replaceState":"parselyReplaceState"},o=function(e,o){var r=function(){var t;(t=new Event(i[e])).arguments=arguments,n.dispatchEvent(t)};return function(){t++,o.apply(this,arguments),0==--t&&r.apply(this,arguments)}},r=function(e){var t=document.createElement("a");return t.href=e,t.href},a=function(t){var i=e.lastRequest?e.lastRequest.url:"";if(!e.spa.hasOwnProperty("autotrack")||!1!==e.spa.autotrack)if("popstate"===t.type)e.beacon.trackPageView({"url":n.location.href,"urlref":i});else if(3===t.arguments.length){var o=r(t.arguments[2]);e.beacon.trackPageView({"url":o,"urlref":i})}},s={"pushState":o("pushState",n.history.pushState),"replaceState":o("replaceState",n.history.replaceState)},u=function(e){Object.defineProperty(n.history,e,{"get":function(){return s[e]},"set":function(t){return s[e]=o(e,t),s[e]}})};u("pushState"),n.addEventListener("parselyPushState",a),n.addEventListener("popstate",a),e.spa.autotrackReplaceState&&(u("replaceState"),n.addEventListener("parselyReplaceState",a))}}(),function(){var e=this.PARSELY,t=e.$,n=e.Class,i=e.JSON,o=e.console,r=e.config,a=e.urls,s=e.visitorManager,u=e.sessionManager,d=e.ParselyStorage,c=e.util.getWindow(),l=c.document,f=c.screen;PARSELY.Pixel=n.extend({"init":function(){var t=e.util.getEventUrl(),n=f.width+"x"+f.height+"|"+(f.availWidth+"x"+f.availHeight)+"|"+f.colorDepth;this.correlationIds={"pageview":"pvid","videostart":"vsid"},this.callbackName="parselyStartCallback",this.data={"idsite":r.apikey,"url":t,"urlref":l.referrer,"screen":n,"data":{}},r.hasOwnProperty("is_remote_config")&&!0!==r.is_remote_config||(this.data.data.parsely_uuid=r.network_uuid||r.uuid,this.data.data.parsely_site_uuid=r.parsely_site_uuid),this.remoteEndpoint=a.pixel+this.selectEndpoint(),this.thirdPartyBlockedCookieSettings={"name":"_parsely_tpa_blocked","timeoutSecs":43200,"flagAttribute":"tpab"}},"selectEndpoint":function(){return!1===r.track_ip_addresses?"/px/":"/plogger/"},"isThirdPartyAnalyticsBlocked":function(){if(!e.is_first_party)return undefined;var t=this.thirdPartyBlockedCookieSettings,n=d.getJSON(t.name);if(void 0!==n&&(this.third_party_analytics_is_blocked=n[t.flagAttribute]),"undefined"==typeof this.third_party_analytics_is_blocked&&"undefined"==typeof this.third_party_analytics_checked){this.third_party_analytics_checked=!0;var i=this,o=function(e){i.third_party_analytics_is_blocked=e;var n={};n[t.flagAttribute]=e,d.setJSON(t.name,n,{"expires":t.timeoutSecs})},r=new Image;r.onerror=function(){o(!0)},r.onload=function(){o(!1)},r.src="https://p1.parsely.com/plogger/"}return this.third_party_analytics_is_blocked},"addDefaults":function(e){t.extend(!0,this.data,e)},"shouldGenerateVisitorID":function(e){return!(!r.hasOwnProperty("is_remote_config")||!0===r.is_remote_config)&&!e},"saveVisitorID":function(e){var t=u.getSession(),n={"id":e,"session_count":t.sid,"last_session_ts":t.sts};d.setJSON(s.visitorCookieName,n,{"expires":s.visitorCookieTimeoutSecs,"secure":s.visitorCookieSecure}),u.getSession()},"generateVisitorID":function(){r.uuid=e.util.makeUUID("pid="),this.saveVisitorID(r.uuid)},"sendEvent":function(n,i){o.log("beaconing to endpoint: "+this.remoteEndpoint),n.u=i,(new Image).src=this.buildEventRequestUrl(n),t.isFunction(e.onBeacon)&&e.onBeacon(n)},"requestFetch":function(n,i){return o.log("fetching endpoint: "+this.remoteEndpoint),"undefined"!=typeof c.fetch&&(n.u=i,fetch(this.buildEventRequestUrl(n),{"method":"GET","mode":"no-cors","keepalive":!0})["catch"](function(e){o.log(e)}),t.isFunction(e.onBeacon)&&e.onBeacon(n),!0)},"buildEventRequestUrl":function(e){var n=t.param(e);return this.remoteEndpoint+"?"+n},"generatePageloadId":function(){return"undefined"==typeof e.pageload_id&&(e.pageload_id=e.util.makeUUID()),e.pageload_id},"getCorrelationIdKey":function(e){return"_"+e+"_correlation_id"},"generateEventCorrelationId":function(t,n){var i=this.getCorrelationIdKey(t);return!0===n&&(e[i]=e.util.makeUUID()),e[i]},"beacon":function(n,o,d){var c=u.getSession(!0),l=e.util.now(),f=this.generatePageloadId()||0,p=t.extend(!0,{"rand":l,"plid":f},this.data,c,n),v=e.visitorManager.getVisitorInfo();!0===this.isThirdPartyAnalyticsBlocked()&&(p.tpab=1,p.data.flashlight=1),s.extendVisitorExpiry();var g;for(var h in this.correlationIds)void 0!==(g=this.generateEventCorrelationId(h,h===p.action))&&(p[this.correlationIds[h]]=g);p.data=i.stringify(p.data),!0!==o&&(PARSELY.lastRequest=p),r.uuid=v.id,this.shouldGenerateVisitorID(v.id)&&this.generateVisitorID(),!0===d&&(e.util.isFirefox()||e.util.isSafari())&&(d=!1),this.remoteEndpoint=a.pixel+this.selectEndpoint();var y=!1;!0===d&&(y=this.requestFetch(p,r.uuid)),!1===y&&this.sendEvent(p,r.uuid)}})}(),function(){var e=this.PARSELY,t=e.$,n=e.console,i=e.Class,o=e.JSON,r=e.ParselyStorage,a=e.util.getWindow().document;PARSELY.Beacon=i.extend({"init":function(){this.pixel=new PARSELY.Pixel},"trackPageView":function(i,s){void 0!==i&&"undefined"!=typeof i.action&&"pageview"!==i.action||e.initNewPage(!1);var u={"title":a.title,"date":(new Date).toString(),"action":"pageview","url":e.util.getEventUrl(),"urlref":a.referrer};e.hasOwnProperty("metadata")&&(u.hasOwnProperty("metadata")?u.metadata=o.stringify(t.extend(u.metadata,e.metadata.get())):u.metadata=o.stringify(e.metadata.get()));var d=r.getJSON("_parsely_slot_click");d&&(r.expire("_parsely_slot_click"),n.log("Valid slot click found"),u.sl_xp=d.xpath,u.sl_x=d.x,u.sl_y=d.y,u.sl_h=d.href,d.url!==u.urlref&&n.log("urlref overridden by slot data as "+d.url),u.urlref=d.url),i&&t.extend(u,i),this.pixel.beacon(u,s)},"trackConversion":function(e){window.console.warn("[WARN] `PARSELY.beacon.trackConversion()` is being deprecated."),window.console.warn("[WARN] Please consult https://www.parse.ly/help/integration/conversions/ to update to the new Conversions js-API.");var i=["active","lead","customer"],o={"label":undefined};e&&e.category?-1===i.indexOf(e.category)?n.log("'"+e.category+"' is not a valid conversion category; must be one of: "+i.join(", ")):(t.extend(o,e),this.trackPageView({"action":"conversion","data":{"_conversion_type":e.category,"_conversion_label":e.label}})):n.log("No category specified; category required for conversion events")},"start":function(){this.startTime=e.util.now(),this.autotrack="undefined"==typeof PARSELY.autotrack||PARSELY.autotrack,this.autotrack?(n.log("autotrack enabled; doing automatic pageview beacon"),this.trackPageView()):n.log("autotrack disabled; beacon loaded but no data sent")}})}(),function(){var e=PARSELY.config.settings,t=PARSELY.console,n=PARSELY.$;PARSELY.updateDefaults=function(e){return PARSELY.beacon.pixel.addDefaults(e)},PARSELY.setConfigOptions=function(e){e.hasOwnProperty("track_ip_addresses")&&(PARSELY.config.track_ip_addresses=e.track_ip_addresses)},PARSELY.initNewPage=function(e){"undefined"!=typeof PARSELY&&("undefined"!=typeof PARSELY.Sampler&&"function"==typeof PARSELY.Sampler._sendHeartbeats&&PARSELY.Sampler._sendHeartbeats(),"undefined"!=typeof PARSELY.engagedTime&&"function"==typeof PARSELY.engagedTime.initNewPage&&PARSELY.engagedTime.initNewPage(),"undefined"!=typeof PARSELY.video&&"function"==typeof PARSELY.video.clear&&PARSELY.video.clear(),"undefined"!=typeof PARSELY.slots&&"function"==typeof PARSELY.slots.reset&&PARSELY.slots.reset(),"undefined"!=typeof PARSELY.lastRequest&&delete PARSELY.lastRequest,!1!==e&&"undefined"!=typeof PARSELY.beacon&&"function"==typeof PARSELY.beacon.start&&PARSELY.beacon.start(),PARSELY.autotrack&&PARSELY.video&&!1!==PARSELY.video.autotrack&&"function"==typeof PARSELY.video.detectVideos&&PARSELY.video.detectVideos())},PARSELY.onStart=function(e){"function"==typeof e&&e()},PARSELY.isFlashlight=function(){return PARSELY.beacon.pixel.isThirdPartyAnalyticsBlocked()};var i;if(e.tracker&&(t.log("tracker enabled, create Beacon"),i=new PARSELY.Beacon,PARSELY.beacon=i),"undefined"!=typeof PARSELY._stubs){var o,r;for(o in PARSELY._stubs)if(PARSELY._stubs.hasOwnProperty(o)&&"function"==typeof PARSELY[o])for(r=0;r<PARSELY._stubs[o].length;r++)PARSELY[o].apply(null,PARSELY._stubs[o][r])}void 0!==i&&(i.start(),n.isFunction(PARSELY.onReady)&&PARSELY.onReady());try{if("undefined"!=typeof Storage&&localStorage.getItem("parsely-overlay")){var a=document.createElement("script");a.setAttribute("src","https://dash.parsely.com/static/build/overlay.js?v="+PARSELY.util.now()),document.body.appendChild(a)}}catch(s){PARSELY.console.log(s)}}(),function(){var e=PARSELY.onload,t=PARSELY.console;if("function"==typeof e)try{e()}catch(n){t.dir({"info":"hook threw exception","error":n})}t.log("Final load stage completed successfully"),PARSELY.loaded=!0}(),function(){var e=this.PARSELY,t=e.Class;e.conversions=e.conversions||{};for(var n=["Lead Capture","Link Click","Newsletter Signup","Subscription","Purchase","Custom"],i=function(e,t){var n={"action":"conversion","data":{"_conversion_type":e}};return t?"string"==typeof t||t instanceof String||(window.console.warn("[WARN] Attempted to send Parse.ly conversions "+e+" event sent with non-string label; using default value instead."),t="No label provided"):(window.console.warn("[WARN] Attempted to send Parse.ly conversions "+e+" event without label; using default value instead."),t="No label provided"),n.data._conversion_label=t,n},o=function(e){return e.toLowerCase().replace(" ","_")},r=function(e){return"track"+e.replace(" ","")},a=function(t){t.action="conversion",e.beacon.trackPageView(t)},s=0;s<n.length;s++)!function(t){var n=r(t);e.conversions[n]=function(e){e=void 0!==e?e:t;var n=i(o(t),e);a(n)}}(n[s]);if(document.querySelector&&document.querySelectorAll){var u=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined;if(void 0===e&&void 0===t)return!0;if(e)for(var i=0;i<e.length;i++)if(!!!document.querySelector(e[i]))return!1;if(t){if(t.rid&&n&&t.rid!==n.rid)return!1;if(t.termId&&n&&t.termId!==n.termId)return!1}return!0},d=function(e,t){var n=function(e){return e.slice(1).split("&")},i=n(e);return n(t).every(function(e){return this.some(function(t){return-1!==t.indexOf(e)})},i)},c=function(e,t){var n=document.createElement("a");return n.href=t,e.host===n.host&&(0===e.pathname.indexOf(n.pathname)&&(!(n.search.length>0)||d(e.search,n.search)))};e.conversions.ConversionFromConfigs=t.extend({"init":function(t){var n,i=this;this.results=[],this.config=t,"function"==typeof(n=e.conversions[r(i.config.type)])?(this.conversionAction=function(t){u(i.config.conditions,i.config.pianoConditions,t)?e.config.customizations&&!0===e.config.customizations.debug?console.log('Debug: Conversion event would have been sent with type "'.concat(i.config.type,'" and label "').concat(i.config.label||i.config.type,'".')):n(i.config.label):e.console.log("Conversion callback triggered but conditions not satisfied: ".concat(i.config.conditions))},this.callback=function(e){i.conversionAction(e)},this.retryInterval=i.config.retryInterval||100,this.currentUrlIsAllowed=function(){if(Object.prototype.hasOwnProperty.call(i.config,"allowedUrls")){for(var t=e.util.getWindow().location,n=0;n<i.config.allowedUrls.length;n++)if(c(t,i.config.allowedUrls[n]))return!0;return!1}return!0}(),this.processConversionConfig()):e.console.log("Configuration specified ".concat(i.config.type," which is not a supported conversion type"))},"findMatchingElements":function(){var e=document;return this.config.documentSelector&&document.querySelector(this.config.documentSelector)&&(e=document.querySelector(this.config.documentSelector).contentWindow.document),this.matchingElements=e.querySelectorAll(this.config.selector),this},"addDigiohListeners":function(){var e=this.config.documentSelector||"iframe[id*='lightbox-iframe']",t=document.querySelectorAll(e);0===t.length&&!1!==this.config.poll&&setTimeout(this.addDigiohListeners.bind(this),this.retryInterval);for(var n=0;n<t.length;n++)(function i(e){var t,n=this,o=e.contentWindow;o.BOX_CUSTOM_JS===undefined||o.BOX_CUSTOM_JS.runCustomJsBeforeSubmit===undefined?setTimeout(i.bind(this,e),100):(t=o.BOX_CUSTOM_JS.runCustomJsBeforeSubmit,o.BOX_CUSTOM_JS.runCustomJsBeforeSubmit=function(){t.apply(this,arguments),n.callback()},n.results.push(e))}).bind(this,t[n])();return this},"addPianoListeners":function(){var e;return window.tp===undefined||"function"!=typeof window.tp.push?setTimeout(this.addPianoListeners.bind(this),this.retryInterval):(e=["addHandler",this.config.selector||"checkoutComplete",this.callback],window.tp.push(e),this.results.push(e)),this},"addSkimlinksListeners":function(){if(window.MutationObserver===undefined||"function"!=typeof window.MutationObserver)return e.console.log("Skimlinks conversions not supported on this browser"),this;var t=this,n=function(e,n){for(var i=0;i<e.length;i++)if("attributes"===e[i].type&&-1!==e[i].target.href.indexOf("go.skimresources.com")){t.callback(),n.disconnect();break}},i=function(t){var i={"attributeFilter":["href"],"attributeOldValue":!0};new MutationObserver(n).observe(t,i),e.console.log("Created skimlinks observer")};return document.body.addEventListener("click",function(e){"A"===e.target.tagName&&(-1!==e.target.href.indexOf("go.skimresources.com")?t.callback():i(e.target))},!0),this},"addStandardListeners":function(){if(this.findMatchingElements(),0===this.matchingElements.length&&!0===this.config.poll)return setTimeout(this.addStandardListeners.bind(this),100),this;for(var e=0;e<this.matchingElements.length;e++)this.matchingElements[e].addEventListener(this.config.event,this.callback);return this.results.push(this.matchingElements),this},"processConversionConfig":function(){return this.currentUrlIsAllowed?("piano"===this.config.event?this.addPianoListeners():"digioh"===this.config.event?this.addDigiohListeners():"skimlinks"===this.config.event?this.addSkimlinksListeners():"load"===this.config.event?(this.results.push("onload"),this.conversionAction()):this.addStandardListeners(),e.console.log("Initialized conversion configuration for ".concat(this.config.event," event")),this):(e.console.log("Conversion configuration skipped because URL is not allowed."),this)}}),e.conversions.initConversionsFromConfigs=function(t){var n=[];{if(Array.isArray(t.conversions)){for(var i=0;i<t.conversions.length;i++)n.push(new e.conversions.ConversionFromConfigs(t.conversions[i]));return n}e.console.log("PARSELY.config.customizations.conversions is not an array, so skipping conversion customizations.")}},e.config.customizations&&e.config.customizations.conversions&&e.conversions.initConversionsFromConfigs(e.config.customizations)}else e.console.log("Configuration-defined conversions not supported on this browser")}();;
}
.fade.in {
    opacity: 1;
}
.collapse {
    display: none;
}
.collapse.in {
    display: block;
}
tr.collapse.in {
    display: table-row;
}
tbody.collapse.in {
    display: table-row-group;
}
.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition-timing-function: ease;
    -o-transition-timing-function: ease;
    transition-timing-function: ease;
    -webkit-transition-duration: .35s;
    -o-transition-duration: .35s;
    transition-duration: .35s;
    -webkit-transition-property: height, visibility;
    -o-transition-property: height, visibility;
    transition-property: height, visibility;
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
.dropup,
.dropdown {
    position: relative;
}
.dropdown-toggle:focus {
    outline: 0;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.dropdown-menu.pull-right {
    right: 0;
    left: auto;
}
.dropdown-menu .divider {
    height: 1px;
    margin: 9px 0;
    overflow: hidden;
    background-color: #e5e5e5;
}
.dropdown-menu > li > a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
    color: #262626;
    text-decoration: none;
    background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
    color: #fff;
    text-decoration: none;
    background-color: #337ab7;
    outline: 0;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
    color: #777;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
    text-decoration: none;
    cursor: not-allowed;
    background-color: transparent;
    background-image: none;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
.open > .dropdown-menu {
    display: block;
}
.open > a {
    outline: 0;
}
.dropdown-menu-right {
    right: 0;
    left: auto;
}
.dropdown-menu-left {
    right: auto;
    left: 0;
}
.dropdown-header {
    display: block;
    padding: 3px 20px;
    font-size: 12px;
    line-height: 1.42857143;
    color: #777;
    white-space: nowrap;
}
.dropdown-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 990;
}
.pull-right > .dropdown-menu {
    right: 0;
    left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
    content: "";
    border-top: 0;
    border-bottom: 4px dashed;
    border-bottom: 4px solid \9;
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-bottom: 2px;
}
@media (min-width: 768px) {
    .navbar-right .dropdown-menu {
        right: 0;
        left: auto;
    }
    .navbar-right .dropdown-menu-left {
        right: auto;
        left: 0;
    }
}
.btn-group,
.btn-group-vertical {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
    position: relative;
    float: left;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
    z-index: 2;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
    margin-left: -1px;
}
.btn-toolbar {
    margin-left: -5px;
}
.btn-toolbar .btn,
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
    float: left;
}
.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
    margin-left: 5px;
}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
    border-radius: 0;
}
.btn-group > .btn:first-child {
    margin-left: 0;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
    float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
    border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
    outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
    padding-right: 8px;
    padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
    padding-right: 12px;
    padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn-group.open .dropdown-toggle.btn-link {
    -webkit-box-shadow: none;
    box-shadow: none;
}
.btn .caret {
    margin-left: 0;
}
.btn-lg .caret {
    border-width: 5px 5px 0;
    border-bottom-width: 0;
}
.dropup .btn-lg .caret {
    border-width: 0 5px 5px;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
    display: block;
    float: none;
    width: 100%;
    max-width: 100%;
}
.btn-group-vertical > .btn-group > .btn {
    float: none;
}
.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
    margin-top: -1px;
    margin-left: 0;
}
.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
    border-radius: 0;
}
.btn-group-vertical > .btn:first-child:not(:last-child) {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:last-child:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}
.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
    border-radius: 0;
}
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.btn-group-justified {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
    display: table-cell;
    float: none;
    width: 1%;
}
.btn-group-justified > .btn-group .btn {
    width: 100%;
}
.btn-group-justified > .btn-group .dropdown-menu {
    left: auto;
}
[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
}
.input-group {
    position: relative;
    display: table;
    border-collapse: separate;
}
.input-group[class*="col-"] {
    float: none;
    padding-right: 0;
    padding-left: 0;
}
.input-group .form-control {
    position: relative;
    z-index: 2;
    float: left;
    width: 100%;
    margin-bottom: 0;
}
.input-group .form-control:focus {
    z-index: 3;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
    height: 46px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
    height: 46px;
    line-height: 46px;
}
textarea.input-group-lg > .form-control,
textarea.input-group-lg > .input-group-addon,
textarea.input-group-lg > .input-group-btn > .btn,
select[multiple].input-group-lg > .form-control,
select[multiple].input-group-lg > .input-group-addon,
select[multiple].input-group-lg > .input-group-btn > .btn {
    height: auto;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
    height: 30px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
    height: 30px;
    line-height: 30px;
}
textarea.input-group-sm > .form-control,
textarea.input-group-sm > .input-group-addon,
textarea.input-group-sm > .input-group-btn > .btn,
select[multiple].input-group-sm > .form-control,
select[multiple].input-group-sm > .input-group-addon,
select[multiple].input-group-sm > .input-group-btn > .btn {
    height: auto;
}
.input-group-addon,
.input-group-btn,
.input-group .form-control {
    display: table-cell;
}
.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
    border-radius: 0;
}
.input-group-addon,
.input-group-btn {
    width: 1%;
    white-space: nowrap;
    vertical-align: middle;
}
.input-group-addon {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.input-group-addon.input-sm {
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 3px;
}
.input-group-addon.input-lg {
    padding: 10px 16px;
    font-size: 18px;
    border-radius: 6px;
}
.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
    margin-top: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.input-group-addon:first-child {
    border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.input-group-addon:last-child {
    border-left: 0;
}
.input-group-btn {
    position: relative;
    font-size: 0;
    white-space: nowrap;
}
.input-group-btn > .btn {
    position: relative;
}
.input-group-btn > .btn + .btn {
    margin-left: -1px;
}
.input-group-btn > .btn:hover,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:active {
    z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
    margin-right: -1px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
    z-index: 2;
    margin-left: -1px;
}
.nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav > li {
    position: relative;
    display: block;
}
.nav > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
}
.nav > li > a:hover,
.nav > li > a:focus {
    text-decoration: none;
    background-color: #eee;
}
.nav > li.disabled > a {
    color: #777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
    color: #777;
    text-decoration: none;
    cursor: not-allowed;
    background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
    background-color: #eee;
    border-color: #337ab7;
}
.nav .nav-divider {
    height: 1px;
    margin: 9px 0;
    overflow: hidden;
    background-color: #e5e5e5;
}
.nav > li > a > img {
    max-width: none;
}
.nav-tabs {
    border-bottom: 1px solid #ddd;
}
.nav-tabs > li {
    float: left;
    margin-bottom: -1px;
}
.nav-tabs > li > a {
    margin-right: 2px;
    line-height: 1.42857143;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
}
.nav-tabs > li > a:hover {
    border-color: #eee #eee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
    color: #555;
    cursor: default;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
}
.nav-tabs.nav-justified {
    width: 100%;
    border-bottom: 0;
}
.nav-tabs.nav-justified > li {
    float: none;
}
.nav-tabs.nav-justified > li > a {
    margin-bottom: 5px;
    text-align: center;
}
.nav-tabs.nav-justified > .dropdown .dropdown-menu {
    top: auto;
    left: auto;
}
@media (min-width: 768px) {
    .nav-tabs.nav-justified > li {
        display: table-cell;
        width: 1%;
    }
    .nav-tabs.nav-justified > li > a {
        margin-bottom: 0;
    }
}
.nav-tabs.nav-justified > li > a {
    margin-right: 0;
    border-radius: 4px;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
    border: 1px solid #ddd;
}
@media (min-width: 768px) {
    .nav-tabs.nav-justified > li > a {
        border-bottom: 1px solid #ddd;
        border-radius: 4px 4px 0 0;
    }
    .nav-tabs.nav-justified > .active > a,
    .nav-tabs.nav-justified > .active > a:hover,
    .nav-tabs.nav-justified > .active > a:focus {
        border-bottom-color: #fff;
    }
}
.nav-pills > li {
    float: left;
}
.nav-pills > li > a {
    border-radius: 4px;
}
.nav-pills > li + li {
    margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
    color: #fff;
    background-color: #337ab7;
}
.nav-stacked > li {
    float: none;
}
.nav-stacked > li + li {
    margin-top: 2px;
    margin-left: 0;
}
.nav-justified {
    width: 100%;
}
.nav-justified > li {
    float: none;
}
.nav-justified > li > a {
    margin-bottom: 5px;
    text-align: center;
}
.nav-justified > .dropdown .dropdown-menu {
    top: auto;
    left: auto;
}
@media (min-width: 768px) {
    .nav-justified > li {
        display: table-cell;
        width: 1%;
    }
    .nav-justified > li > a {
        margin-bottom: 0;
    }
}
.nav-tabs-justified {
    border-bottom: 0;
}
.nav-tabs-justified > li > a {
    margin-right: 0;
    border-radius: 4px;
}
.nav-tabs-justified > .active > a,
.nav-tabs-justified > .active > a:hover,
.nav-tabs-justified > .active > a:focus {
    border: 1px solid #ddd;
}
@media (min-width: 768px) {
    .nav-tabs-justified > li > a {
        border-bottom: 1px solid #ddd;
        border-radius: 4px 4px 0 0;
    }
    .nav-tabs-justified > .active > a,
    .nav-tabs-justified > .active > a:hover,
    .nav-tabs-justified > .active > a:focus {
        border-bottom-color: #fff;
    }
}
.tab-content > .tab-pane {
    display: none;
}
.tab-content > .active {
    display: block;
}
.nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.navbar {
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
}
@media (min-width: 768px) {
    .navbar {
        border-radius: 4px;
    }
}
@media (min-width: 768px) {
    .navbar-header {
        float: left;
    }
}
.navbar-collapse {
    padding-right: 15px;
    padding-left: 15px;
    overflow-x: visible;
    -webkit-overflow-scrolling: touch;
    border-top: 1px solid transparent;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}
.navbar-collapse.in {
    overflow-y: auto;
}
@media (min-width: 768px) {
    .navbar-collapse {
        width: auto;
        border-top: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .navbar-collapse.collapse {
        display: block !important;
        height: auto !important;
        padding-bottom: 0;
        overflow: visible !important;
    }
    .navbar-collapse.in {
        overflow-y: visible;
    }
    .navbar-fixed-top .navbar-collapse,
    .navbar-static-top .navbar-collapse,
    .navbar-fixed-bottom .navbar-collapse {
        padding-right: 0;
        padding-left: 0;
    }
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
    max-height: 340px;
}
@media (max-device-width: 480px) and (orientation: landscape) {
    .navbar-fixed-top .navbar-collapse,
    .navbar-fixed-bottom .navbar-collapse {
        max-height: 200px;
    }
}
.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
    margin-right: -15px;
    margin-left: -15px;
}
@media (min-width: 768px) {
    .container > .navbar-header,
    .container-fluid > .navbar-header,
    .container > .navbar-collapse,
    .container-fluid > .navbar-collapse {
        margin-right: 0;
        margin-left: 0;
    }
}
.navbar-static-top {
    z-index: 1000;
    border-width: 0 0 1px;
}
@media (min-width: 768px) {
    .navbar-static-top {
        border-radius: 0;
    }
}
.navbar-fixed-top,
.navbar-fixed-bottom {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
}
@media (min-width: 768px) {
    .navbar-fixed-top,
    .navbar-fixed-bottom {
        border-radius: 0;
    }
}
.navbar-fixed-top {
    top: 0;
    border-width: 0 0 1px;
}
.navbar-fixed-bottom {
    bottom: 0;
    margin-bottom: 0;
    border-width: 1px 0 0;
}
.navbar-brand {
    float: left;
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
}
.navbar-brand:hover,
.navbar-brand:focus {
    text-decoration: none;
}
.navbar-brand > img {
    display: block;
}
@media (min-width: 768px) {
    .navbar > .container .navbar-brand,
    .navbar > .container-fluid .navbar-brand {
        margin-left: -15px;
    }
}
.navbar-toggle {
    position: relative;
    float: right;
    padding: 9px 10px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.navbar-toggle:focus {
    outline: 0;
}
.navbar-toggle .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
}
.navbar-toggle .icon-bar + .icon-bar {
    margin-top: 4px;
}
@media (min-width: 768px) {
    .navbar-toggle {
        display: none;
    }
}
.navbar-nav {
    margin: 7.5px -15px;
}
.navbar-nav > li > a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;
}
@media (max-width: 767px) {
    .navbar-nav .open .dropdown-menu {
        position: static;
        float: none;
        width: auto;
        margin-top: 0;
        background-color: transparent;
        border: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .navbar-nav .open .dropdown-menu > li > a,
    .navbar-nav .open .dropdown-menu .dropdown-header {
        padding: 5px 15px 5px 25px;
    }
    .navbar-nav .open .dropdown-menu > li > a {
        line-height: 20px;
    }
    .navbar-nav .open .dropdown-menu > li > a:hover,
    .navbar-nav .open .dropdown-menu > li > a:focus {
        background-image: none;
    }
}
@media (min-width: 768px) {
    .navbar-nav {
        float: left;
        margin: 0;
    }
    .navbar-nav > li {
        float: left;
    }
    .navbar-nav > li > a {
        padding-top: 15px;
        padding-bottom: 15px;
    }
}
.navbar-form {
    padding: 10px 15px;
    margin-top: 8px;
    margin-right: -15px;
    margin-bottom: 8px;
    margin-left: -15px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
}
@media (min-width: 768px) {
    .navbar-form .form-group {
        display: inline-block;
        margin-bottom: 0;
        vertical-align: middle;
    }
    .navbar-form .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle;
    }
    .navbar-form .form-control-static {
        display: inline-block;
    }
    .navbar-form .input-group {
        display: inline-table;
        vertical-align: middle;
    }
    .navbar-form .input-group .input-group-addon,
    .navbar-form .input-group .input-group-btn,
    .navbar-form .input-group .form-control {
        width: auto;
    }
    .navbar-form .input-group > .form-control {
        width: 100%;
    }
    .navbar-form .control-label {
        margin-bottom: 0;
        vertical-align: middle;
    }
    .navbar-form .radio,
    .navbar-form .checkbox {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 0;
        vertical-align: middle;
    }
    .navbar-form .radio label,
    .navbar-form .checkbox label {
        padding-left: 0;
    }
    .navbar-form .radio input[type="radio"],
    .navbar-form .checkbox input[type="checkbox"] {
        position: relative;
        margin-left: 0;
    }
    .navbar-form .has-feedback .form-control-feedback {
        top: 0;
    }
}
@media (max-width: 767px) {
    .navbar-form .form-group {
        margin-bottom: 5px;
    }
    .navbar-form .form-group:last-child {
        margin-bottom: 0;
    }
}
@media (min-width: 768px) {
    .navbar-form {
        width: auto;
        padding-top: 0;
        padding-bottom: 0;
        margin-right: 0;
        margin-left: 0;
        border: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
}
.navbar-nav > li > .dropdown-menu {
    margin-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
    margin-bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.navbar-btn {
    margin-top: 8px;
    margin-bottom: 8px;
}
.navbar-btn.btn-sm {
    margin-top: 10px;
    margin-bottom: 10px;
}
.navbar-btn.btn-xs {
    margin-top: 14px;
    margin-bottom: 14px;
}
.navbar-text {
    margin-top: 15px;
    margin-bottom: 15px;
}
@media (min-width: 768px) {
    .navbar-text {
        float: left;
        margin-right: 15px;
        margin-left: 15px;
    }
}
@media (min-width: 768px) {
    .navbar-left {
        float: left !important;
    }
    .navbar-right {
        float: right !important;
        margin-right: -15px;
    }
    .navbar-right ~ .navbar-right {
        margin-right: 0;
    }
}
.navbar-default {
    background-color: #f8f8f8;
    border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
    color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
    color: #5e5e5e;
    background-color: transparent;
}
.navbar-default .navbar-text {
    color: #777;
}
.navbar-default .navbar-nav > li > a {
    color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
    color: #333;
    background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
}
.navbar-default .navbar-toggle {
    border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
    background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
    background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
    border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
    color: #555;
    background-color: #e7e7e7;
}
@media (max-width: 767px) {
    .navbar-default .navbar-nav .open .dropdown-menu > li > a {
        color: #777;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
        color: #333;
        background-color: transparent;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
    .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
        color: #555;
        background-color: #e7e7e7;
    }
    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
        color: #ccc;
        background-color: transparent;
    }
}
.navbar-default .navbar-link {
    color: #777;
}
.navbar-default .navbar-link:hover {
    color: #333;
}
.navbar-default .btn-link {
    color: #777;
}
.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
    color: #333;
}
.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
    color: #ccc;
}
.navbar-inverse {
    background-color: #222;
    border-color: #080808;
}
.navbar-inverse .navbar-brand {
    color: #9d9d9d;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
    color: #fff;
    background-color: transparent;
}
.navbar-inverse .navbar-text {
    color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a {
    color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
    color: #fff;
    background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
    color: #fff;
    background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
    color: #444;
    background-color: transparent;
}
.navbar-inverse .navbar-toggle {
    border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
    background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
    background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
    border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
    color: #fff;
    background-color: #080808;
}
@media (max-width: 767px) {
    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
        border-color: #080808;
    }
    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
        background-color: #080808;
    }
    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
        color: #9d9d9d;
    }
    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
        color: #fff;
        background-color: transparent;
    }
    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
        color: #fff;
        background-color: #080808;
    }
    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
        color: #444;
        background-color: transparent;
    }
}
.navbar-inverse .navbar-link {
    color: #9d9d9d;
}
.navbar-inverse .navbar-link:hover {
    color: #fff;
}
.navbar-inverse .btn-link {
    color: #9d9d9d;
}
.navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link:focus {
    color: #fff;
}
.navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .navbar-inverse .btn-link:focus {
    color: #444;
}
.breadcrumb {
    padding: 8px 15px;
    margin-bottom: 20px;
    list-style: none;
    background-color: #f5f5f5;
    border-radius: 4px;
}
.breadcrumb > li {
    display: inline-block;
}
.breadcrumb > li + li:before {
    padding: 0 5px;
    color: #ccc;
    content: "/\00a0";
}
.breadcrumb > .active {
    color: #777;
}
.pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
}
.pagination > li {
    display: inline;
}
.pagination > li > a,
.pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
    z-index: 2;
    color: #23527c;
    background-color: #eee;
    border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.pager {
    padding-left: 0;
    margin: 20px 0;
    text-align: center;
    list-style: none;
}
.pager li {
    display: inline;
}
.pager li > a,
.pager li > span {
    display: inline-block;
    padding: 5px 14px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
    text-decoration: none;
    background-color: #eee;
}
.pager .next > a,
.pager .next > span {
    float: right;
}
.pager .previous > a,
.pager .previous > span {
    float: left;
}
.pager .disabled > a,
.pager .disabled > a:hover,
.pager .disabled > a:focus,
.pager .disabled > span {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
}
.label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
}
a.label:hover,
a.label:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}
.label:empty {
    display: none;
}
.btn .label {
    position: relative;
    top: -1px;
}
.label-default {
    background-color: #777;
}
.label-default[href]:hover,
.label-default[href]:focus {
    background-color: #5e5e5e;
}
.label-primary {
    background-color: #337ab7;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
    background-color: #286090;
}
.label-success {
    background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
    background-color: #449d44;
}
.label-info {
    background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
    background-color: #31b0d5;
}
.label-warning {
    background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
    background-color: #ec971f;
}
.label-danger {
    background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
    background-color: #c9302c;
}
.badge {
    display: inline-block;
    min-width: 10px;
    padding: 3px 7px;
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #777;
    border-radius: 10px;
}
.badge:empty {
    display: none;
}
.btn .badge {
    position: relative;
    top: -1px;
}
.btn-xs .badge,
.btn-group-xs > .btn .badge {
    top: 0;
    padding: 1px 5px;
}
a.badge:hover,
a.badge:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}
.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
    color: #337ab7;
    background-color: #fff;
}
.list-group-item > .badge {
    float: right;
}
.list-group-item > .badge + .badge {
    margin-right: 5px;
}
.nav-pills > li > a > .badge {
    margin-left: 3px;
}
.jumbotron {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 30px;
    color: inherit;
    background-color: #eee;
}
.jumbotron h1,
.jumbotron .h1 {
    color: inherit;
}
.jumbotron p {
    margin-bottom: 15px;
    font-size: 21px;
    font-weight: 200;
}
.jumbotron > hr {
    border-top-color: #d5d5d5;
}
.container .jumbotron,
.container-fluid .jumbotron {
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 6px;
}
.jumbotron .container {
    max-width: 100%;
}
@media screen and (min-width: 768px) {
    .jumbotron {
        padding-top: 48px;
        padding-bottom: 48px;
    }
    .container .jumbotron,
    .container-fluid .jumbotron {
        padding-right: 60px;
        padding-left: 60px;
    }
    .jumbotron h1,
    .jumbotron .h1 {
        font-size: 63px;
    }
}
.thumbnail {
    display: block;
    padding: 4px;
    margin-bottom: 20px;
    line-height: 1.42857143;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    -webkit-transition: border .2s ease-in-out;
    -o-transition: border .2s ease-in-out;
    transition: border .2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
    margin-right: auto;
    margin-left: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
    border-color: #337ab7;
}
.thumbnail .caption {
    padding: 9px;
    color: #333;
}
.alert {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
}
.alert h4 {
    margin-top: 0;
    color: inherit;
}
.alert .alert-link {
    font-weight: bold;
}
.alert > p,
.alert > ul {
    margin-bottom: 0;
}
.alert > p + p {
    margin-top: 5px;
}
.alert-dismissable,
.alert-dismissible {
    padding-right: 35px;
}
.alert-dismissable .close,
.alert-dismissible .close {
    position: relative;
    top: -2px;
    right: -21px;
    color: inherit;
}
.alert-success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
}
.alert-success hr {
    border-top-color: #c9e2b3;
}
.alert-success .alert-link {
    color: #2b542c;
}
.alert-info {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
}
.alert-info hr {
    border-top-color: #a6e1ec;
}
.alert-info .alert-link {
    color: #245269;
}
.alert-warning {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
}
.alert-warning hr {
    border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
    color: #66512c;
}
.alert-danger {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
}
.alert-danger hr {
    border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
    color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0;
    }
    to {
        background-position: 0 0;
    }
}
@-o-keyframes progress-bar-stripes {
    from {
        background-position: 40px 0;
    }
    to {
        background-position: 0 0;
    }
}
@keyframes progress-bar-stripes {
    from {
        background-position: 40px 0;
    }
    to {
        background-position: 0 0;
    }
}
.progress {
    height: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: #f5f5f5;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}
.progress-bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background-color: #337ab7;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
    -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease;
}
.progress-striped .progress-bar,
.progress-bar-striped {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    -webkit-background-size: 40px 40px;
    background-size: 40px 40px;
}
.progress.active .progress-bar,
.progress-bar.active {
    -webkit-animation: progress-bar-stripes 2s linear infinite;
    -o-animation: progress-bar-stripes 2s linear infinite;
    animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
    background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
    background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
    background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
    background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.media {
    margin-top: 15px;
}
.media:first-child {
    margin-top: 0;
}
.media,
.media-body {
    overflow: hidden;
    zoom: 1;
}
.media-body {
    width: 10000px;
}
.media-object {
    display: block;
}
.media-object.img-thumbnail {
    max-width: none;
}
.media-right,
.media > .pull-right {
    padding-left: 10px;
}
.media-left,
.media > .pull-left {
    padding-right: 10px;
}
.media-left,
.media-right,
.media-body {
    display: table-cell;
    vertical-align: top;
}
.media-middle {
    vertical-align: middle;
}
.media-bottom {
    vertical-align: bottom;
}
.media-heading {
    margin-top: 0;
    margin-bottom: 5px;
}
.media-list {
    padding-left: 0;
    list-style: none;
}
.list-group {
    padding-left: 0;
    margin-bottom: 20px;
}
.list-group-item {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
}
.list-group-item:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}
a.list-group-item,
button.list-group-item {
    color: #555;
}
a.list-group-item .list-group-item-heading,
button.list-group-item .list-group-item-heading {
    color: #333;
}
a.list-group-item:hover,
button.list-group-item:hover,
a.list-group-item:focus,
button.list-group-item:focus {
    color: #555;
    text-decoration: none;
    background-color: #f5f5f5;
}
button.list-group-item {
    width: 100%;
    text-align: left;
}
.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
    color: #777;
    cursor: not-allowed;
    background-color: #eee;
}
.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
    color: inherit;
}
.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
    color: #777;
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
    z-index: 2;
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
}
.list-group-item.active .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active:hover .list-group-item-heading > small,
.list-group-item.active:focus .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small,
.list-group-item.active:hover .list-group-item-heading > .small,
.list-group-item.active:focus .list-group-item-heading > .small {
    color: inherit;
}
.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
    color: #c7ddef;
}
.list-group-item-success {
    color: #3c763d;
    background-color: #dff0d8;
}
a.list-group-item-success,
button.list-group-item-success {
    color: #3c763d;
}
a.list-group-item-success .list-group-item-heading,
button.list-group-item-success .list-group-item-heading {
    color: inherit;
}
a.list-group-item-success:hover,
button.list-group-item-success:hover,
a.list-group-item-success:focus,
button.list-group-item-success:focus {
    color: #3c763d;
    background-color: #d0e9c6;
}
a.list-group-item-success.active,
button.list-group-item-success.active,
a.list-group-item-success.active:hover,
button.list-group-item-success.active:hover,
a.list-group-item-success.active:focus,
button.list-group-item-success.active:focus {
    color: #fff;
    background-color: #3c763d;
    border-color: #3c763d;
}
.list-group-item-info {
    color: #31708f;
    background-color: #d9edf7;
}
a.list-group-item-info,
button.list-group-item-info {
    color: #31708f;
}
a.list-group-item-info .list-group-item-heading,
button.list-group-item-info .list-group-item-heading {
    color: inherit;
}
a.list-group-item-info:hover,
button.list-group-item-info:hover,
a.list-group-item-info:focus,
button.list-group-item-info:focus {
    color: #31708f;
    background-color: #c4e3f3;
}
a.list-group-item-info.active,
button.list-group-item-info.active,
a.list-group-item-info.active:hover,
button.list-group-item-info.active:hover,
a.list-group-item-info.active:focus,
button.list-group-item-info.active:focus {
    color: #fff;
    background-color: #31708f;
    border-color: #31708f;
}
.list-group-item-warning {
    color: #8a6d3b;
    background-color: #fcf8e3;
}
a.list-group-item-warning,
button.list-group-item-warning {
    color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading,
button.list-group-item-warning .list-group-item-heading {
    color: inherit;
}
a.list-group-item-warning:hover,
button.list-group-item-warning:hover,
a.list-group-item-warning:focus,
button.list-group-item-warning:focus {
    color: #8a6d3b;
    background-color: #faf2cc;
}
a.list-group-item-warning.active,
button.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
button.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus,
button.list-group-item-warning.active:focus {
    color: #fff;
    background-color: #8a6d3b;
    border-color: #8a6d3b;
}
.list-group-item-danger {
    color: #a94442;
    background-color: #f2dede;
}
a.list-group-item-danger,
button.list-group-item-danger {
    color: #a94442;
}
a.list-group-item-danger .list-group-item-heading,
button.list-group-item-danger .list-group-item-heading {
    color: inherit;
}
a.list-group-item-danger:hover,
button.list-group-item-danger:hover,
a.list-group-item-danger:focus,
button.list-group-item-danger:focus {
    color: #a94442;
    background-color: #ebcccc;
}
a.list-group-item-danger.active,
button.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
button.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus,
button.list-group-item-danger.active:focus {
    color: #fff;
    background-color: #a94442;
    border-color: #a94442;
}
.list-group-item-heading {
    margin-top: 0;
    margin-bottom: 5px;
}
.list-group-item-text {
    margin-bottom: 0;
    line-height: 1.3;
}
.panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}
.panel-body {
    padding: 15px;
}
.panel-heading {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
    color: inherit;
}
.panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
}
.panel-title > a,
.panel-title > small,
.panel-title > .small,
.panel-title > small > a,
.panel-title > .small > a {
    color: inherit;
}
.panel-footer {
    padding: 10px 15px;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}
.panel > .list-group,
.panel > .panel-collapse > .list-group {
    margin-bottom: 0;
}
.panel > .list-group .list-group-item,
.panel > .panel-collapse > .list-group .list-group-item {
    border-width: 1px 0;
    border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child,
.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
    border-top: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child,
.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
    border-bottom: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}
.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.panel-heading + .list-group .list-group-item:first-child {
    border-top-width: 0;
}
.list-group + .panel-footer {
    border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table,
.panel > .panel-collapse > .table {
    margin-bottom: 0;
}
.panel > .table caption,
.panel > .table-responsive > .table caption,
.panel > .panel-collapse > .table caption {
    padding-right: 15px;
    padding-left: 15px;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
    border-top-left-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
    border-top-right-radius: 3px;
}
.panel > .table:last-child,
.panel > .table-responsive:last-child > .table:last-child {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
    border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
    border-bottom-right-radius: 3px;
}
.panel > .panel-body + .table,
.panel > .panel-body + .table-responsive,
.panel > .table + .panel-body,
.panel > .table-responsive + .panel-body {
    border-top: 1px solid #ddd;
}
.panel > .table > tbody:first-child > tr:first-child th,
.panel > .table > tbody:first-child > tr:first-child td {
    border-top: 0;
}
.panel > .table-bordered,
.panel > .table-responsive > .table-bordered {
    border: 0;
}
.panel > .table-bordered > thead > tr > th:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.panel > .table-bordered > tbody > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.panel > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-bordered > thead > tr > td:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.panel > .table-bordered > tbody > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.panel > .table-bordered > tfoot > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
}
.panel > .table-bordered > thead > tr > th:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.panel > .table-bordered > tbody > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.panel > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-bordered > thead > tr > td:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.panel > .table-bordered > tbody > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.panel > .table-bordered > tfoot > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
}
.panel > .table-bordered > thead > tr:first-child > td,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.panel > .table-bordered > tbody > tr:first-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.panel > .table-bordered > thead > tr:first-child > th,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.panel > .table-bordered > tbody > tr:first-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
    border-bottom: 0;
}
.panel > .table-bordered > tbody > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.panel > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-bordered > tbody > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.panel > .table-bordered > tfoot > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
    border-bottom: 0;
}
.panel > .table-responsive {
    margin-bottom: 0;
    border: 0;
}
.panel-group {
    margin-bottom: 20px;
}
.panel-group .panel {
    margin-bottom: 0;
    border-radius: 4px;
}
.panel-group .panel + .panel {
    margin-top: 5px;
}
.panel-group .panel-heading {
    border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse > .panel-body,
.panel-group .panel-heading + .panel-collapse > .list-group {
    border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
    border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
    border-bottom: 1px solid #ddd;
}
.panel-default {
    border-color: #ddd;
}
.panel-default > .panel-heading {
    color: #333;
    background-color: #f5f5f5;
    border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #ddd;
}
.panel-default > .panel-heading .badge {
    color: #f5f5f5;
    background-color: #333;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #ddd;
}
.panel-primary {
    border-color: #337ab7;
}
.panel-primary > .panel-heading {
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #337ab7;
}
.panel-primary > .panel-heading .badge {
    color: #337ab7;
    background-color: #fff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #337ab7;
}
.panel-success {
    border-color: #d6e9c6;
}
.panel-success > .panel-heading {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #d6e9c6;
}
.panel-success > .panel-heading .badge {
    color: #dff0d8;
    background-color: #3c763d;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #d6e9c6;
}
.panel-info {
    border-color: #bce8f1;
}
.panel-info > .panel-heading {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #bce8f1;
}
.panel-info > .panel-heading .badge {
    color: #d9edf7;
    background-color: #31708f;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #bce8f1;
}
.panel-warning {
    border-color: #faebcc;
}
.panel-warning > .panel-heading {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #faebcc;
}
.panel-warning > .panel-heading .badge {
    color: #fcf8e3;
    background-color: #8a6d3b;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #faebcc;
}
.panel-danger {
    border-color: #ebccd1;
}
.panel-danger > .panel-heading {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #ebccd1;
}
.panel-danger > .panel-heading .badge {
    color: #f2dede;
    background-color: #a94442;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
    border-bottom-color: #ebccd1;
}
.embed-responsive {
    position: relative;
    display: block;
    height: 0;
    padding: 0;
    overflow: hidden;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
.embed-responsive-16by9 {
    padding-bottom: 56.25%;
}
.embed-responsive-4by3 {
    padding-bottom: 75%;
}
.well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}
.well blockquote {
    border-color: #ddd;
    border-color: rgba(0, 0, 0, .15);
}
.well-lg {
    padding: 24px;
    border-radius: 6px;
}
.well-sm {
    padding: 9px;
    border-radius: 3px;
}
.close {
    float: right;
    font-size: 21px;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
}
.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    filter: alpha(opacity=50);
    opacity: .5;
}
button.close {
    -webkit-appearance: none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    border: 0;
}
.modal-open {
    overflow: hidden;
}
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
}
.modal.fade .modal-dialog {
    -webkit-transition: -webkit-transform .3s ease-out;
    -o-transition:      -o-transform .3s ease-out;
    transition:         transform .3s ease-out;
    -webkit-transform: translate(0, -25%);
    -ms-transform: translate(0, -25%);
    -o-transform: translate(0, -25%);
    transform: translate(0, -25%);
}
.modal.in .modal-dialog {
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
}
.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}
.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}
.modal-content {
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    outline: 0;
    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
}
.modal-backdrop.fade {
    filter: alpha(opacity=0);
    opacity: 0;
}
.modal-backdrop.in {
    filter: alpha(opacity=50);
    opacity: .5;
}
.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
}
.modal-header .close {
    margin-top: -2px;
}
.modal-title {
    margin: 0;
    line-height: 1.42857143;
}
.modal-body {
    position: relative;
    padding: 15px;
}
.modal-footer {
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
    margin-bottom: 0;
    margin-left: 5px;
}
.modal-footer .btn-group .btn + .btn {
    margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
    margin-left: 0;
}
.modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
}
@media (min-width: 768px) {
    .modal-dialog {
        width: 600px;
        margin: 30px auto;
    }
    .modal-content {
        -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
        box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    }
    .modal-sm {
        width: 300px;
    }
}
@media (min-width: 992px) {
    .modal-lg {
        width: 900px;
    }
}
.tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    white-space: normal;
    filter: alpha(opacity=0);
    opacity: 0;

    line-break: auto;
}
.tooltip.in {
    filter: alpha(opacity=90);
    opacity: .9;
}
.tooltip.top {
    padding: 5px 0;
    margin-top: -3px;
}
.tooltip.right {
    padding: 0 5px;
    margin-left: 3px;
}
.tooltip.bottom {
    padding: 5px 0;
    margin-top: 3px;
}
.tooltip.left {
    padding: 0 5px;
    margin-left: -3px;
}
.tooltip-inner {
    max-width: 200px;
    padding: 3px 8px;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 4px;
}
.tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}
.tooltip.top .tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
    right: 5px;
    bottom: 0;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
    bottom: 0;
    left: 5px;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
    top: 0;
    right: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
    top: 0;
    left: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000;
}
.popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: none;
    max-width: 276px;
    padding: 1px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    white-space: normal;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px;
    -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);

    line-break: auto;
}
.popover.top {
    margin-top: -10px;
}
.popover.right {
    margin-left: 10px;
}
.popover.bottom {
    margin-top: 10px;
}
.popover.left {
    margin-left: -10px;
}
.popover-title {
    padding: 8px 14px;
    margin: 0;
    font-size: 14px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-radius: 5px 5px 0 0;
}
.popover-content {
    padding: 9px 14px;
}
.popover > .arrow,
.popover > .arrow:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}
.popover > .arrow {
    border-width: 11px;
}
.popover > .arrow:after {
    content: "";
    border-width: 10px;
}
.popover.top > .arrow {
    bottom: -11px;
    left: 50%;
    margin-left: -11px;
    border-top-color: #999;
    border-top-color: rgba(0, 0, 0, .25);
    border-bottom-width: 0;
}
.popover.top > .arrow:after {
    bottom: 1px;
    margin-left: -10px;
    content: " ";
    border-top-color: #fff;
    border-bottom-width: 0;
}
.popover.right > .arrow {
    top: 50%;
    left: -11px;
    margin-top: -11px;
    border-right-color: #999;
    border-right-color: rgba(0, 0, 0, .25);
    border-left-width: 0;
}
.popover.right > .arrow:after {
    bottom: -10px;
    left: 1px;
    content: " ";
    border-right-color: #fff;
    border-left-width: 0;
}
.popover.bottom > .arrow {
    top: -11px;
    left: 50%;
    margin-left: -11px;
    border-top-width: 0;
    border-bottom-color: #999;
    border-bottom-color: rgba(0, 0, 0, .25);
}
.popover.bottom > .arrow:after {
    top: 1px;
    margin-left: -10px;
    content: " ";
    border-top-width: 0;
    border-bottom-color: #fff;
}
.popover.left > .arrow {
    top: 50%;
    right: -11px;
    margin-top: -11px;
    border-right-width: 0;
    border-left-color: #999;
    border-left-color: rgba(0, 0, 0, .25);
}
.popover.left > .arrow:after {
    right: 1px;
    bottom: -10px;
    content: " ";
    border-right-width: 0;
    border-left-color: #fff;
}
.carousel {
    position: relative;
}
.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.carousel-inner > .item {
    position: relative;
    display: none;
    -webkit-transition: .6s ease-in-out left;
    -o-transition: .6s ease-in-out left;
    transition: .6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
    line-height: 1;
}
@media all and (transform-3d), (-webkit-transform-3d) {
    .carousel-inner > .item {
        -webkit-transition: -webkit-transform .6s ease-in-out;
        -o-transition:      -o-transform .6s ease-in-out;
        transition:         transform .6s ease-in-out;

        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-perspective: 1000px;
        perspective: 1000px;
    }
    .carousel-inner > .item.next,
    .carousel-inner > .item.active.right {
        left: 0;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    .carousel-inner > .item.prev,
    .carousel-inner > .item.active.left {
        left: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
    .carousel-inner > .item.next.left,
    .carousel-inner > .item.prev.right,
    .carousel-inner > .item.active {
        left: 0;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}
.carousel-inner > .active,
.carousel-inner > .next,
.carousel-inner > .prev {
    display: block;
}
.carousel-inner > .active {
    left: 0;
}
.carousel-inner > .next,
.carousel-inner > .prev {
    position: absolute;
    top: 0;
    width: 100%;
}
.carousel-inner > .next {
    left: 100%;
}
.carousel-inner > .prev {
    left: -100%;
}
.carousel-inner > .next.left,
.carousel-inner > .prev.right {
    left: 0;
}
.carousel-inner > .active.left {
    left: -100%;
}
.carousel-inner > .active.right {
    left: 100%;
}
.carousel-control {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15%;
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
    background-color: rgba(0, 0, 0, 0);
    filter: alpha(opacity=50);
    opacity: .5;
}
.carousel-control.left {
    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
    background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));
    background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
    background-repeat: repeat-x;
}
.carousel-control.right {
    right: 0;
    left: auto;
    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
    background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));
    background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
    background-repeat: repeat-x;
}
.carousel-control:hover,
.carousel-control:focus {
    color: #fff;
    text-decoration: none;
    filter: alpha(opacity=90);
    outline: 0;
    opacity: .9;
}
.carousel-control .icon-prev,
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
    position: absolute;
    top: 50%;
    z-index: 5;
    display: inline-block;
    margin-top: -10px;
}
.carousel-control .icon-prev,
.carousel-control .glyphicon-chevron-left {
    left: 50%;
    margin-left: -10px;
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
    right: 50%;
    margin-right: -10px;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
    width: 20px;
    height: 20px;
    font-family: serif;
    line-height: 1;
}
.carousel-control .icon-prev:before {
    content: '\2039';
}
.carousel-control .icon-next:before {
    content: '\203a';
}
.carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    z-index: 15;
    width: 60%;
    padding-left: 0;
    margin-left: -30%;
    text-align: center;
    list-style: none;
}
.carousel-indicators li {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;
    background-color: #000 \9;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #fff;
    border-radius: 10px;
}
.carousel-indicators .active {
    width: 12px;
    height: 12px;
    margin: 0;
    background-color: #fff;
}
.carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
}
.carousel-caption .btn {
    text-shadow: none;
}
@media screen and (min-width: 768px) {
    .carousel-control .glyphicon-chevron-left,
    .carousel-control .glyphicon-chevron-right,
    .carousel-control .icon-prev,
    .carousel-control .icon-next {
        width: 30px;
        height: 30px;
        margin-top: -10px;
        font-size: 30px;
    }
    .carousel-control .glyphicon-chevron-left,
    .carousel-control .icon-prev {
        margin-left: -10px;
    }
    .carousel-control .glyphicon-chevron-right,
    .carousel-control .icon-next {
        margin-right: -10px;
    }
    .carousel-caption {
        right: 20%;
        left: 20%;
        padding-bottom: 30px;
    }
    .carousel-indicators {
        bottom: 20px;
    }
}
.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-header:before,
.modal-header:after,
.modal-footer:before,
.modal-footer:after {
    display: table;
    content: " ";
}
.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-header:after,
.modal-footer:after {
    clear: both;
}
.center-block {
    display: block;
    margin-right: auto;
    margin-left: auto;
}
.pull-right {
    float: right !important;
}
.pull-left {
    float: left !important;
}
.hide {
    display: none !important;
}
.show {
    display: block !important;
}
.invisible {
    visibility: hidden;
}
.text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
}
.hidden {
    display: none !important;
}
.affix {
    position: fixed;
}
@-ms-viewport {
    width: device-width;
}
.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
    display: none !important;
}
.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
    display: none !important;
}
@media (max-width: 767px) {
    .visible-xs {
        display: block !important;
    }
    table.visible-xs {
        display: table !important;
    }
    tr.visible-xs {
        display: table-row !important;
    }
    th.visible-xs,
    td.visible-xs {
        display: table-cell !important;
    }
}
@media (max-width: 767px) {
    .visible-xs-block {
        display: block !important;
    }
}
@media (max-width: 767px) {
    .visible-xs-inline {
        display: inline !important;
    }
}
@media (max-width: 767px) {
    .visible-xs-inline-block {
        display: inline-block !important;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .visible-sm {
        display: block !important;
    }
    table.visible-sm {
        display: table !important;
    }
    tr.visible-sm {
        display: table-row !important;
    }
    th.visible-sm,
    td.visible-sm {
        display: table-cell !important;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .visible-sm-block {
        display: block !important;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .visible-sm-inline {
        display: inline !important;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .visible-sm-inline-block {
        display: inline-block !important;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .visible-md {
        display: block !important;
    }
    table.visible-md {
        display: table !important;
    }
    tr.visible-md {
        display: table-row !important;
    }
    th.visible-md,
    td.visible-md {
        display: table-cell !important;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .visible-md-block {
        display: block !important;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .visible-md-inline {
        display: inline !important;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .visible-md-inline-block {
        display: inline-block !important;
    }
}
@media (min-width: 1200px) {
    .visible-lg {
        display: block !important;
    }
    table.visible-lg {
        display: table !important;
    }
    tr.visible-lg {
        display: table-row !important;
    }
    th.visible-lg,
    td.visible-lg {
        display: table-cell !important;
    }
}
@media (min-width: 1200px) {
    .visible-lg-block {
        display: block !important;
    }
}
@media (min-width: 1200px) {
    .visible-lg-inline {
        display: inline !important;
    }
}
@media (min-width: 1200px) {
    .visible-lg-inline-block {
        display: inline-block !important;
    }
}
@media (max-width: 767px) {
    .hidden-xs {
        display: none !important;
    }
}
@media (min-width: 768px) and (max-width: 991px) {
    .hidden-sm {
        display: none !important;
    }
}
@media (min-width: 992px) and (max-width: 1199px) {
    .hidden-md {
        display: none !important;
    }
}
@media (min-width: 1200px) {
    .hidden-lg {
        display: none !important;
    }
}
.visible-print {
    display: none !important;
}
@media print {
    .visible-print {
        display: block !important;
    }
    table.visible-print {
        display: table !important;
    }
    tr.visible-print {
        display: table-row !important;
    }
    th.visible-print,
    td.visible-print {
        display: table-cell !important;
    }
}
.visible-print-block {
    display: none !important;
}
@media print {
    .visible-print-block {
        display: block !important;
    }
}
.visible-print-inline {
    display: none !important;
}
@media print {
    .visible-print-inline {
        display: inline !important;
    }
}
.visible-print-inline-block {
    display: none !important;
}
@media print {
    .visible-print-inline-block {
        display: inline-block !important;
    }
}
@media print {
    .hidden-print {
        display: none !important;
    }
}