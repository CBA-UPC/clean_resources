(function() {window.PARSELY = window.PARSELY || {}; window.PARSELY.version = "2.2.0-dev.0"; window.PARSELY.majorVersion = 2; window.PARSELY.hotfixName = ""; window.PARSELY.flavor = "engagedtime-metadatahashing-slots-video"; window.PARSELY.__template_track_ips = true; window.PARSELY.__template_heartbeat_should_honor_autotrack = undefined; window.PARSELY.__template_limit_et_sample_len = false; window.PARSELY.__template_apikey = "aboutamazon.in"; window.PARSELY.__template_is_first_party = false; window.PARSELY.__template_pixelhost = ""; window.PARSELY.__template_customizations = null; })();

/*! parsely-js-api - v2.2.0-dev.0 - 2023-02-08
 * http://www.parsely.com/
 * 2023 Parsely, Inc. */

function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}window.PARSELY=window.PARSELY||{},function(){var e=function(){return function(e){this!==window&&void 0!==this&&(this.msgs.length>=100&&(this.msgs=this.msgs.slice(0,100)),this.msgs.push(e))}};PARSELY.console={"msgs":[],"log":e(),"dir":e()}}(),function(){var e,t=PARSELY.console;try{e=document.getElementById("parsely-cfg").getAttribute("data-parsely-site")}catch(a){e=null}var n=PARSELY.site||e||PARSELY.__template_apikey||"missing.parsely.com",i=document.location.protocol+"//"+(PARSELY.pixelhost||PARSELY.__template_pixelhost||"p1.parsely.com");PARSELY.pInit=function(e){if(e.error===undefined){if(t.log("Static configuration loaded"),"object"===_typeof(PARSELY.config))for(var n in PARSELY.config)PARSELY.config.hasOwnProperty(n)&&(e[n]=PARSELY.config[n]);PARSELY.config=e,PARSELY.urls={"static":null,"config":null,"pixel":i},PARSELY._sync=!0,PARSELY.is_first_party=PARSELY.__template_is_first_party||!1}else t.log("Unable to load static configuration")},t.log("Loading configuration statically");var o={"apikey":n,"uuid":null,"network_uuid":null,"apikey_uuid":null,"settings":{"debug":!1,"widget":!1,"tracker":!0,"test":window._parselyIsTest||!1},"bundle":null,"customizations":PARSELY.__template_customizations||null,"track_ip_addresses":null==PARSELY.__template_track_ips||PARSELY.__template_track_ips,"heartbeat_should_honor_autotrack":PARSELY.__template_heartbeat_should_honor_autotrack||!1,"limit_et_sample_len":PARSELY.__template_limit_et_sample_len||!1,"is_remote_config":!1};PARSELY.pInit(o)}(),"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){"use strict";function e(e){return e<10?"0"+e:e}function t(){return this.valueOf()}function n(e){return a.lastIndex=0,a.test(e)?'"'+e.replace(a,function(e){var t=u[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function i(e,t){var o,a,u,c,l,f=r,p=t[e];switch(p&&"object"===_typeof(p)&&"function"==typeof p.toJSON&&(p=p.toJSON(e)),"function"==typeof d&&(p=d.call(t,e,p)),_typeof(p)){case"string":return n(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(r+=s,l=[],"[object Array]"===Object.prototype.toString.apply(p)){for(c=p.length,o=0;o<c;o+=1)l[o]=i(o,p)||"null";return u=0===l.length?"[]":r?"[\n"+r+l.join(",\n"+r)+"\n"+f+"]":"["+l.join(",")+"]",r=f,u}if(d&&"object"===_typeof(d))for(c=d.length,o=0;o<c;o+=1)"string"==typeof d[o]&&(u=i(a=d[o],p))&&l.push(n(a)+(r?": ":":")+u);else for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(u=i(a,p))&&l.push(n(a)+(r?": ":":")+u);return u=0===l.length?"{}":r?"{\n"+r+l.join(",\n"+r)+"\n"+f+"}":"{"+l.join(",")+"}",r=f,u}}window.PARSELY||(window.PARSELY={});var o=window.PARSELY;o.JSON||(o.JSON=window.JSON||{});var a=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+e(this.getUTCMonth()+1)+"-"+e(this.getUTCDate())+"T"+e(this.getUTCHours())+":"+e(this.getUTCMinutes())+":"+e(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=t,Number.prototype.toJSON=t,String.prototype.toJSON=t);var r,s,u,d;"function"!=typeof JSON.stringify&&(u={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var o;if(r="",s="","number"==typeof n)for(o=0;o<n;o+=1)s+=" ";else"string"==typeof n&&(s=n);if(d=t,t&&"function"!=typeof t&&("object"!==_typeof(t)||"number"!=typeof t.length))throw new Error("JSON.stringify");return i("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(){function e(e){return e.replace(/\\(?:u(.{4})|([^u]))/g,function(e,t,n){return t?String.fromCharCode(parseInt(t,16)):r[n]})}var t,n,i,o,a,r={"\\":"\\",'"':'"',"/":"/","t":"\t","n":"\n","r":"\r","f":"\f","b":"\b"},s={"go":function(){t="ok"},"firstokey":function(){o=a,t="colon"},"okey":function(){o=a,t="colon"},"ovalue":function(){t="ocomma"},"firstavalue":function(){t="acomma"},"avalue":function(){t="acomma"}},u={"go":function(){t="ok"},"ovalue":function(){t="ocomma"},"firstavalue":function(){t="acomma"},"avalue":function(){t="acomma"}},d={"{":{"go":function(){n.push({"state":"ok"}),i={},t="firstokey"},"ovalue":function(){n.push({"container":i,"state":"ocomma","key":o}),i={},t="firstokey"},"firstavalue":function(){n.push({"container":i,"state":"acomma"}),i={},t="firstokey"},"avalue":function(){n.push({"container":i,"state":"acomma"}),i={},t="firstokey"}},"}":{"firstokey":function(){var e=n.pop();a=i,i=e.container,o=e.key,t=e.state},"ocomma":function(){var e=n.pop();i[o]=a,a=i,i=e.container,o=e.key,t=e.state}},"[":{"go":function(){n.push({"state":"ok"}),i=[],t="firstavalue"},"ovalue":function(){n.push({"container":i,"state":"ocomma","key":o}),i=[],t="firstavalue"},"firstavalue":function(){n.push({"container":i,"state":"acomma"}),i=[],t="firstavalue"},"avalue":function(){n.push({"container":i,"state":"acomma"}),i=[],t="firstavalue"}},"]":{"firstavalue":function(){var e=n.pop();a=i,i=e.container,o=e.key,t=e.state},"acomma":function(){var e=n.pop();i.push(a),a=i,i=e.container,o=e.key,t=e.state}},":":{"colon":function(){if(Object.hasOwnProperty.call(i,o))throw new SyntaxError("Duplicate key '"+o+'"');t="ovalue"}},",":{"ocomma":function(){i[o]=a,t="okey"},"acomma":function(){i.push(a),t="avalue"}},"true":{"go":function(){a=!0,t="ok"},"ovalue":function(){a=!0,t="ocomma"},"firstavalue":function(){a=!0,t="acomma"},"avalue":function(){a=!0,t="acomma"}},"false":{"go":function(){a=!1,t="ok"},"ovalue":function(){a=!1,t="ocomma"},"firstavalue":function(){a=!1,t="acomma"},"avalue":function(){a=!1,t="acomma"}},"null":{"go":function(){a=null,t="ok"},"ovalue":function(){a=null,t="ocomma"},"firstavalue":function(){a=null,t="acomma"},"avalue":function(){a=null,t="acomma"}}};return function(i,o){var r,c=/^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;t="go",n=[];try{for(;;){if(!(r=c.exec(i)))break;r[1]?d[r[1]][t]():r[2]?(a=+r[2],u[t]()):(a=e(r[3]),s[t]()),i=i.slice(r[0].length)}}catch(l){t=l}if("ok"!==t||/[^\u0020\t\n\r]/.test(i))throw t instanceof SyntaxError?t:new SyntaxError("JSON");return"function"==typeof o?function f(e,t){var n,i,r=e[t];if(r&&"object"===_typeof(r))for(n in a)Object.prototype.hasOwnProperty.call(r,n)&&((i=f(r,n))!==undefined?r[n]=i:delete r[n]);return o.call(e,t,r)}({"":a},""):a}}())}(),function(){this.PARSELY||(this.PARSELY={});var e=this.PARSELY,t=!1,n=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;e.Class=function(){},e.Class.extend=function(e){function i(){!t&&this.init&&this.init.apply(this,arguments)}var o=this.prototype;t=!0;var a=new this;t=!1;for(var r in e)a[r]="function"==typeof e[r]&&"function"==typeof o[r]&&n.test(e[r])?function(e,t){return function(){var n=this._super;this._super=o[e];var i=t.apply(this,arguments);return this._super=n,i}}(r,e[r]):e[r];return i.prototype=a,i.constructor=i,i.extend=arguments.callee,i}}(),function(e,t){"undefined"==typeof PARSELY&&(PARSELY={}),"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?(module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)},PARSELY.$=PARSELY.jQuery=t(e,!0)):PARSELY.$=PARSELY.jQuery=t(e,!1)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=y.type(e);return"function"!==n&&!y.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function i(e){var t;for(t in e)if(("data"!==t||!y.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function o(e,t,n,i){if(y.acceptData(e)){var o,a,r=y.expando,s=e.nodeType,u=s?y.cache:e,c=s?e[r]:e[r]&&r;if(c&&u[c]&&(i||u[c].data)||n!==undefined||"string"!=typeof t)return c||(c=s?e[r]=d.pop()||y.guid++:r),u[c]||(u[c]=s?{}:{"toJSON":y.noop}),"object"!==_typeof(t)&&"function"!=typeof t||(i?u[c]=y.extend(u[c],t):u[c].data=y.extend(u[c].data,t)),a=u[c],i||(a.data||(a.data={}),a=a.data),n!==undefined&&(a[y.camelCase(t)]=n),"string"==typeof t?null==(o=a[t])&&(o=a[y.camelCase(t)]):o=a,o}}function a(){return!0}function r(){return!1}function s(){try{return P.activeElement}catch(e){}}function u(e,t,n,i){var o;if(y.isArray(t))y.each(t,function(t,o){n||Y.test(e)?i(e,o):u(e+"["+("object"===_typeof(o)?t:"")+"]",o,n,i)});else if(n||"object"!==y.type(t))i(e,t);else for(o in t)u(e+"["+o+"]",t[o],n,i)}var d=[],c=d.slice,l=(d.concat,d.push),f=(d.indexOf,{}),p=f.toString,g=f.hasOwnProperty,v={},h="1.11.1 -deprecated,-css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl",y=function D(e,t){return new D.fn.init(e,t)},m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,_=/^-ms-/,b=/-([\da-z])/gi,w=function(e,t){return t.toUpperCase()};y.fn=y.prototype={"jquery":h,"constructor":y,"selector":"","length":0,"toArray":function(){return c.call(this)},"get":function(e){return null!=e?e<0?this[e+this.length]:this[e]:c.call(this)},"pushStack":function(e){var t=y.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},"each":function(e,t){return y.each(this,e,t)},"map":function(e){return this.pushStack(y.map(this,function(t,n){return e.call(t,n,t)}))},"slice":function(){return this.pushStack(c.apply(this,arguments))},"first":function(){return this.eq(0)},"last":function(){return this.eq(-1)},"eq":function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},"end":function(){return this.prevObject||this.constructor(null)},"push":l,"sort":d.sort,"splice":d.splice},y.extend=y.fn.extend=function(){var e,t,n,i,o,a,r=arguments[0]||{},s=1,u=arguments.length,d=!1;for("boolean"==typeof r&&(d=r,r=arguments[s]||{},s++),"object"===_typeof(r)||y.isFunction(r)||(r={}),s===u&&(r=this,s--);s<u;s++)if(null!=(o=arguments[s]))for(i in o)e=r[i],r!==(n=o[i])&&(d&&n&&(y.isPlainObject(n)||(t=y.isArray(n)))?(t?(t=!1,a=e&&y.isArray(e)?e:[]):a=e&&y.isPlainObject(e)?e:{},r[i]=y.extend(d,a,n)):n!==undefined&&(r[i]=n));return r},y.extend({"expando":"jQuery"+(h+Math.random()).replace(/\D/g,""),"isReady":!0,"error":function(e){throw new Error(e)},"noop":function(){},"isFunction":function(e){return"function"===y.type(e)},"isArray":Array.isArray||function(e){return"array"===y.type(e)},"isWindow":function(e){return null!=e&&e==e.window},"isNumeric":function(e){return!y.isArray(e)&&e-parseFloat(e)>=0},"isEmptyObject":function(e){var t;for(t in e)return!1;return!0},"isPlainObject":function(e){var t;if(!e||"object"!==y.type(e)||e.nodeType||y.isWindow(e))return!1;try{if(e.constructor&&!g.call(e,"constructor")&&!g.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}if(v.ownLast)for(t in e)return g.call(e,t);for(t in e);return t===undefined||g.call(e,t)},"type":function(e){return null==e?e+"":"object"===_typeof(e)||"function"==typeof e?f[p.call(e)]||"object":_typeof(e)},"camelCase":function(e){return e.replace(_,"ms-").replace(b,w)},"nodeName":function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"each":function(e,t,i){var o=0,a=e.length,r=n(e);if(i){if(r)for(;o<a&&!1!==t.apply(e[o],i);o++);else for(o in e)if(!1===t.apply(e[o],i))break}else if(r)for(;o<a&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},"trim":function(e){return null==e?"":(e+"").replace(m,"")},"makeArray":function(e,t){var i=t||[];return null!=e&&(n(Object(e))?y.merge(i,"string"==typeof e?[e]:e):l.call(i,e)),i},"guid":1,"now":function(){return+new Date},"support":v}),y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()});var S,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,P=e.document,x=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(y.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if((n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:x.exec(e))&&(n[1]||!t)){if(n[1]){if(t=t instanceof y?t[0]:t,y.merge(this,y.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:P,!0)),E.test(n[1])&&y.isPlainObject(t))for(n in t)y.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return(i=P.getElementById(n[2]))&&i.parentNode&&(this.length=1,this[0]=i),this.context=P,this.selector=e,this}}else{if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(y.isFunction(e))return"undefined"!=typeof S.ready?S.ready(e):e(y)}return e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),y.makeArray(e,this)}).prototype=y.fn,S=y(P);var A,k=/\S+/g,O="undefined"==typeof undefined?"undefined":_typeof(undefined);for(A in y(v))break;v.ownLast="0"!==A,y.acceptData=function(e){var t=y.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||!0!==t&&e.getAttribute("classid")===t)};y.extend({"cache":{},"noData":{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},"hasData":function(e){return!!(e=e.nodeType?y.cache[e[y.expando]]:e[y.expando])&&!i(e)},"data":function(e,t,n){return o(e,t,n)},"_data":function(e,t,n){return o(e,t,n,!0)}});!function(){var t,n,i=P.createElement("div");for(t in{"submit":!0,"change":!0,"focusin":!0})n="on"+t,(v[t+"Bubbles"]=n in e)||(i.setAttribute(n,"t"),v[t+"Bubbles"]=!1===i.attributes[n].expando);i=null}();var R=/^key/,L=/^(?:mouse|pointer|contextmenu)|click/,T=/^(?:focusinfocus|focusoutblur)$/,I=/^([^.]*)(?:\.(.+)|)$/;y.event={"global":{},"add":function(e,t,n,i,o){var a,r,s,u,d,c,l,f,p,g,v,h=y._data(e);if(h){for(n.handler&&(n=(u=n).handler,o=u.selector),n.guid||(n.guid=y.guid++),(r=h.events)||(r=h.events={}),(c=h.handle)||((c=h.handle=function(e){return _typeof(y)===O||e&&y.event.triggered===e.type?undefined:y.event.dispatch.apply(c.elem,arguments)}).elem=e),s=(t=(t||"").match(k)||[""]).length;s--;)p=v=(a=I.exec(t[s])||[])[1],g=(a[2]||"").split(".").sort(),p&&(d=y.event.special[p]||{},p=(o?d.delegateType:d.bindType)||p,d=y.event.special[p]||{},l=y.extend({"type":p,"origType":v,"data":i,"handler":n,"guid":n.guid,"selector":o,"needsContext":o&&y.expr.match.needsContext.test(o),"namespace":g.join(".")},u),(f=r[p])||((f=r[p]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,i,g,c)||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),d.add&&(d.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),o?f.splice(f.delegateCount++,0,l):f.push(l),y.event.global[p]=!0);e=null}},"trigger":function(t,n,i,o){var a,r,s,u,d,c,l,f=[i||P],p=g.call(t,"type")?t.type:t,v=g.call(t,"namespace")?t.namespace.split("."):[];if(s=c=i=i||P,3!==i.nodeType&&8!==i.nodeType&&!T.test(p+y.event.triggered)&&(p.indexOf(".")>=0&&(p=(v=p.split(".")).shift(),v.sort()),r=p.indexOf(":")<0&&"on"+p,t=t[y.expando]?t:new y.Event(p,"object"===_typeof(t)&&t),t.isTrigger=o?2:3,t.namespace=v.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=i),n=null==n?[t]:y.makeArray(n,[t]),d=y.event.special[p]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y.isWindow(i)){for(u=d.delegateType||p,T.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),c=s;c===(i.ownerDocument||P)&&f.push(c.defaultView||c.parentWindow||e)}for(l=0;(s=f[l++])&&!t.isPropagationStopped();)t.type=l>1?u:d.bindType||p,(a=(y._data(s,"events")||{})[t.type]&&y._data(s,"handle"))&&a.apply(s,n),(a=r&&s[r])&&a.apply&&y.acceptData(s)&&(t.result=a.apply(s,n),!1===t.result&&t.preventDefault());if(t.type=p,!o&&!t.isDefaultPrevented()&&(!d._default||!1===d._default.apply(f.pop(),n))&&y.acceptData(i)&&r&&i[p]&&!y.isWindow(i)){(c=i[r])&&(i[r]=null),y.event.triggered=p;try{i[p]()}catch(h){}y.event.triggered=undefined,c&&(i[r]=c)}return t.result}},"dispatch":function(e){e=y.event.fix(e);var t,n,i,o,a,r=[],s=c.call(arguments),u=(y._data(this,"events")||{})[e.type]||[],d=y.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,e)){for(r=y.event.handlers.call(this,e,u),t=0;(o=r[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,a=0;(i=o.handlers[a++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,(n=((y.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,s))!==undefined&&!1===(e.result=n)&&(e.preventDefault(),e.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,e),e.result}},"handlers":function(e,t){var n,i,o,a,r=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(o=[],a=0;a<s;a++)o[n=(i=t[a]).selector+" "]===undefined&&(o[n]=i.needsContext?y(n,this).index(u)>=0:y.find(n,this,null,[u]).length),o[n]&&o.push(i);o.length&&r.push({"elem":u,"handlers":o})}return s<t.length&&r.push({"elem":this,"handlers":t.slice(s)}),r},"fix":function(e){if(e[y.expando])return e;var t,n,i,o=e.type,a=e,r=this.fixHooks[o];for(r||(this.fixHooks[o]=r=L.test(o)?this.mouseHooks:R.test(o)?this.keyHooks:{}),i=r.props?this.props.concat(r.props):this.props,e=new y.Event(a),t=i.length;t--;)e[n=i[t]]=a[n];return e.target||(e.target=a.srcElement||P),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,r.filter?r.filter(e,a):e},"props":"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),"fixHooks":{},"special":{"load":{"noBubble":!0},"focus":{"trigger":function(){if(this!==s()&&this.focus)try{return this.focus(),!1}catch(e){}},"delegateType":"focusin"},"blur":{"trigger":function(){if(this===s()&&this.blur)return this.blur(),!1},"delegateType":"focusout"}}},y.Event=function(e,t){if(!(this instanceof y.Event))return new y.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===undefined&&!1===e.returnValue?a:r):this.type=e,t&&y.extend(this,t),this.timeStamp=e&&e.timeStamp||y.now(),this[y.expando]=!0},y.Event.prototype={"isDefaultPrevented":r,"isPropagationStopped":r,"isImmediatePropagationStopped":r,"stopPropagation":function(){var e=this.originalEvent;this.isPropagationStopped=a,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},"stopImmediatePropagation":function(){var e=this.originalEvent;this.isImmediatePropagationStopped=a,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},y.fn.extend({"on":function(e,t,n,i,o){var a,s;if("object"===_typeof(e)){"string"!=typeof t&&(n=n||t,t=undefined);for(a in e)this.on(a,t,n,e[a],o);return this}if(null==n&&null==i?(i=t,n=t=undefined):null==i&&("string"==typeof t?(i=n,n=undefined):(i=n,n=t,t=undefined)),!1===i)i=r;else if(!i)return this;return 1===o&&(s=i,(i=function(e){return y().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=y.guid++)),this.each(function(){y.event.add(this,e,i,n,t)})},"trigger":function(e,t){return this.each(function(){y.event.trigger(e,t,this)})},"triggerHandler":function(e,t){var n=this[0];if(n)return y.event.trigger(e,t,n,!0)}});v.getSetAttribute,v.input;y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){y.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});var C=/%20/g,Y=/\[\]$/;y.param=function(e,t){var n,i=[],o=function(e,t){t=y.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=y.ajaxSettings&&y.ajaxSettings.traditional),y.isArray(e)||e.jquery&&!y.isPlainObject(e))y.each(e,function(){o(this.name,this.value)});else for(n in e)u(n,e[n],t,o);return i.join("&").replace(C,"+")};var N=e.jQuery,j=e.$;return y.noConflict=function(t){return e.$===y&&(e.$=j),t&&e.jQuery===y&&(e.jQuery=N),y},_typeof(t)===O&&(e.jQuery=e.$=y),y}),"undefined"==typeof window.PARSELY&&(window.PARSELY={}),function(e,t){window.PARSELY._lifecycle=t()}(0,function(){"use strict";var e=void 0;try{new EventTarget,e=!1}catch(t){e=!1}var t="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return _typeof(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof(e)},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+_typeof(t));e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=_typeof(t)&&"function"!=typeof t?e:t},r=function(){function e(){n(this,e),this._registry={}}return i(e,[{"key":"addEventListener","value":function(e,t){this._getRegistry(e).push(t)}},{"key":"removeEventListener","value":function(e,t){var n=this._getRegistry(e),i=n.indexOf(t);i>-1&&n.splice(i,1)}},{"key":"dispatchEvent","value":function(e){return e.target=this,Object.freeze(e),this._getRegistry(e.type).forEach(function(t){return t(e)}),!0}},{"key":"_getRegistry","value":function(e){return this._registry[e]=this._registry[e]||[]}}]),e}(),s=e?EventTarget:r,u=e?Event:function b(e){n(this,b),this.type=e},d=function(e){function t(e,i){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.newState=i.newState,o.oldState=i.oldState,o.originalEvent=i.originalEvent,o}return o(t,u),t}(),c="active",l="passive",f="hidden",p="frozen",g="terminated",v="object"===("undefined"==typeof safari?"undefined":t(safari))&&safari.pushNotification,h=["focus","blur","visibilitychange","freeze","resume","pageshow","onpageshow"in self?"pagehide":"unload"],y=function(e){return e.preventDefault(),e.returnValue="Are you sure?"},m=[[c,l,f,g],[c,l,f,p],[f,l,c],[p,f],[p,c],[p,l]].map(function(e){return e.reduce(function(e,t,n){return e[t]=n,e},{})}),_=function(){return document.visibilityState===f?f:document.hasFocus()?c:l};return new(function(e){function t(){n(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),i=_();return e._state=i,e._unsavedChanges=[],e._handleEvents=e._handleEvents.bind(e),h.forEach(function(t){return addEventListener(t,e._handleEvents,!0)}),v&&addEventListener("beforeunload",function(t){e._safariBeforeUnloadTimeout=setTimeout(function(){t.defaultPrevented||t.returnValue.length>0||e._dispatchChangesIfNeeded(t,f)},0)}),e}return o(t,s),i(t,[{"key":"addUnsavedChanges","value":function(e){!this._unsavedChanges.indexOf(e)>-1&&(0===this._unsavedChanges.length&&addEventListener("beforeunload",y),this._unsavedChanges.push(e))}},{"key":"removeUnsavedChanges","value":function(e){var t=this._unsavedChanges.indexOf(e);t>-1&&(this._unsavedChanges.splice(t,1),0===this._unsavedChanges.length&&removeEventListener("beforeunload",y))}},{"key":"_dispatchChangesIfNeeded","value":function(e,t){if(t!==this._state)for(var n=function(e,t){for(var n,i=0;n=m[i];++i){var o=n[e],a=n[t];if(o>=0&&a>=0&&a>o)return Object.keys(n).slice(o,a+1)}return[]}(this._state,t),i=0;i<n.length-1;++i){var o=n[i],a=n[i+1];this._state=a,this.dispatchEvent(new d("statechange",{"oldState":o,"newState":a,"originalEvent":e}))}}},{"key":"_handleEvents","value":function(e){switch(v&&clearTimeout(this._safariBeforeUnloadTimeout),e.type){case"pageshow":case"resume":this._dispatchChangesIfNeeded(e,_());break;case"focus":this._dispatchChangesIfNeeded(e,c);break;case"blur":this._state===c&&this._dispatchChangesIfNeeded(e,_());break;case"pagehide":case"unload":this._dispatchChangesIfNeeded(e,e.persisted?p:g);break;case"visibilitychange":this._state!==p&&this._state!==g&&this._dispatchChangesIfNeeded(e,_());break;case"freeze":this._dispatchChangesIfNeeded(e,p)}}},{"key":"state","get":function(){return this._state}},{"key":"pageWasDiscarded","get":function(){return document.wasDiscarded||!1}}]),t}())}),function(){this.PARSELY=this.PARSELY||{};var e,t=this.PARSELY;t.util={},(e=t.util).getWindow=function(){if(t.getWindow&&"function"==typeof t.getWindow)return t.getWindow();try{return window.top.document.cookie,window.top}catch(e){try{return window.parent.document.cookie,window.parent}catch(n){return window}}},e.windowSetFunction=function(t,n){var i=e.getWindow(),o=i[t];i[t]=function(){n(),"function"==typeof o&&o()}},e.windowAddEventListener=function(e,t){var n=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{"get":function(){n=!0}}))}catch(o){}var i=!1;return n&&(i={"passive":!0,"capture":!1}),"undefined"!=typeof window.addEventListener?window.addEventListener(e,t,i):"undefined"!=typeof document.attachEvent&&document.attachEvent("on"+e,t)},e.objAddEventListener=function(e,t,n,i){return i=void 0!==i&&i,"undefined"!=typeof e.addEventListener?e.addEventListener(t,n,i):"undefined"!=typeof e.attachEvent&&e.attachEvent("on"+t,n)},e.getRandomInt=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},e.getEventUrl=function(){return t.config.eventUrl?t.config.eventUrl:t.lastRequest?t.lastRequest.url:e.getWindow().location.href},e.isSafari=function(){return navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS")},e.isFirefox=function(){return"undefined"!=typeof InstallTrigger},e.isIE=function(){return navigator.userAgent&&navigator.userAgent.indexOf("MSIE")>-1&&navigator.userAgent.indexOf("Trident/")>-1},e.getWindowCrypto=function(){var t=e.getWindow();if(t)return t.crypto},e.makeUUID=function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"",n=e.getWindowCrypto();return n?t+([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}):t+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/x/g,function(){return(16*Math.random()|0).toString(16)})},e.now=function(){return"undefined"!=typeof performance&&"function"==typeof performance.now?Math.round(performance.timing.navigationStart+performance.now()):(new Date).getTime()}}(),function(e){"use strict";e.Cookies=function(t){var n=function i(e,t,n){return 1===arguments.length?i.get(e):i.set(e,t,n)};return n._document=t.document,n._cacheKeyPrefix="cookey.",n._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),n.defaults={"path":"/","secure":!1},n.get=function(e){return n._renewCache(),n._cache[n._cacheKeyPrefix+e]},n.getJSON=function(t){var i=n.get(t);return i===undefined?i:e.JSON.parse(i)},n.set=function(t,i,o){(o=n._getExtendedOptions(o)).expires=n._getExpiresDate(i===undefined?-1:o.expires);try{n._document.cookie=n._generateCookieString(t,i,o)}catch(a){e.console.log(a)}return n},n.setJSON=function(t,i,o){return n.set(t,e.JSON.stringify(i),o),n},n.extendExpiry=function(e,t){var i=n.get(e);if(i===undefined)return!1;n.set(e,i,t)},n.expire=function(e,t){if(e.constructor!==Array)return n.set(e,undefined,t);for(var i=0;i<e.length;i++)n.set(e[i],undefined,t)},n._getExtendedOptions=function(e){return{"path":e&&e.path||n.defaults.path,"domain":e&&e.domain||n.defaults.domain,"expires":e&&e.expires||n.defaults.expires,"secure":e&&e.secure!==undefined?e.secure:n.defaults.secure}},n._isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},n._getExpiresDate=function(e,t){if(t=t||new Date,"number"==typeof e?e=e===Infinity?n._maxExpireDate:new Date(t.getTime()+1e3*e):"string"==typeof e&&(e=new Date(e)),e&&!n._isValidDate(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return e},n._generateCookieString=function(t,i,o){t=(t=t.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29"),i=(i+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);var a=(o=o||{}).domain||e.cookieDomain||n._autoCookieDomain,r=t+"="+i;return r+=o.path?";path="+o.path:"",r+=a?";domain="+a:"",r+=o.expires?";expires="+o.expires.toUTCString():"",r+=o.secure?";secure":""},n._getCacheFromString=function(e){for(var t={},i=e?e.split("; "):[],o=0;o<i.length;o++){var a=n._getKeyValuePairFromCookieString(i[o]);if(null!=a){var r=n._cacheKeyPrefix+a.key;t[r]===undefined&&(t[r]=a.value)}}return t},n._getKeyValuePairFromCookieString=function(e){var t=e.indexOf("=");t=t<0?e.length:t;var n=e.substr(0,t),i=e.substr(t+1);try{n=decodeURIComponent(n),i=decodeURIComponent(i)}catch(o){return null}return{"key":n,"value":i}},n._renewCache=function(){try{n._cachedDocumentCookie!==n._document.cookie&&(n._cache=n._getCacheFromString(n._document.cookie),n._cachedDocumentCookie=n._document.cookie)}catch(t){e.console.log(t)}},n._isValidDomain=function(e){var t="cookies.js_dtest",i="1"===n.set(t,1,{"domain":e}).get(t);return n.expire(t,{"domain":e}),i},n._getAutoCookieDomain=function(){var t=e.util.getWindow().location.hostname;if(!isNaN(parseInt(t.replace(".",""),10)))return n._isValidDomain(t)?t:null;var i=t.split(".");if(1===i.length)return t;for(var o,a=2;a<=i.length;a++){var r=i.slice(-a).join(".");if(n._isValidDomain(r)){o=r;break}}return o||t},n._autoCookieDomain=n._getAutoCookieDomain(),n}(e.util.getWindow())}(this.PARSELY),function(e){"use strict";var t=function(){};t.prototype=function(){var t=function i(e,t,n){return 1===arguments.length?i.get(e):i.set(e,t,n)};t._keyPrefix="pStore-",t._delimiter="|^";try{t._store=e.util.getWindow().localStorage}catch(n){t._store=undefined}return t._baseDomain=null,t._quotaErrors=["NS_ERROR_DOM_QUOTA_REACHED","QUOTA_EXCEEDED_ERR","QuotaExceededError","W3CException_DOM_QUOTA_EXCEEDED_ERR"],t.get=function(n){t._migrateCookie(n);var i=t._store[t._keyPrefix+n];if(void 0===i)return undefined;try{i=t._deserialize(i)}catch(a){return console.log("Error deserializing stored data for key "+n),t.expire(n),undefined}if("undefined"!=typeof i.expires){var o=parseInt(i.expires,10);if(!isNaN(o)&&e.util.now()>o)return t.expire(n),undefined}return i.value},t.getJSON=function(n){var i=t.get(n);return void 0===i?i:e.JSON.parse(i)},t.set=function(n,i,o){var a=t._keyPrefix+n;if(void 0===i)return delete t._store[a],t;o=e.Cookies._getExtendedOptions(o);var r,s=e.Cookies._getExpiresDate(o.expires);void 0!==s&&(s=s.getTime());try{r=t._serialize({"value":i,"expires":s})}catch(u){return console.log("Error serializing stored data for key "+n),t}try{t._store[a]=r}catch(u){console.log("Error storing data for key "+a+" in localStorage"),-1!==t._quotaErrors.indexOf(u.name)&&console.log("quota exceeded")}return t},t.setJSON=function(n,i,o){return t.set(n,e.JSON.stringify(i),o),t},t.extendExpiry=function(e,n){var i=t.get(e);if(void 0===i)return!1;t.set(e,i,n)},t.expire=function(e,n){return t.set(e,undefined,n)},t._serialize=function(e){return e.value+t._delimiter+e.expires},t._deserialize=function(e){var n=e.split(t._delimiter),i={"value":n[0]};return n.length>1&&(i.expires=n[1]),i},t._migrateCookie=function(n){var i=e.Cookies.get(n);if(e.Cookies.expire(n),void 0!==i){var o=e.ParselyStorage.defaults[n],a={};void 0!==o&&(a.expires=o),t.set(n,i,a)}},{"constructor":t,"get":t.get,"getJSON":t.getJSON,"set":t.set,"setJSON":t.setJSON,"extendExpiry":t.extendExpiry,"expire":t.expire}}();var n=function(){};n.prototype=function(){var n=new t,i=function(){var t=n._keyPrefix;try{return e.util.getWindow().localStorage.setItem(t,t),e.util.getWindow().localStorage.removeItem(t),!0}catch(i){return!1}}()&&function(){var t=!1,n=e.Cookies.get("_parsely_visitor");return void 0!==n&&"{"!==n.charAt(0)&&(t=!0),!!e.util.isSafari()||!0===e.use_localstorage&&!t}()?n:e.Cookies;return{"supportsCookies":"cookie"in document&&(document.cookie.length>0||(document.cookie="test").indexOf.call(document.cookie,"test")>-1),"get":i.get,"getJSON":i.getJSON,"set":i.set,"setJSON":i.setJSON,"extendExpiry":i.extendExpiry,"expire":i.expire,"defaults":{"visitor":{"key":"_parsely_visitor","expires":34164e3,"secure":!1},"session":{"key":"_parsely_session","expires":1800,"secure":!1}}}}(),e.ParselyStorage=new n}(this.PARSELY),function(){var e=this.PARSELY,t=e.Class,n=e.ParselyStorage,i=e.console,o=e.JSON,a=["id"],r=t.extend({"init":function(){this.visitorCookieName=e.visitorCookieName||n.defaults.visitor.key,this.visitorCookieTimeoutSecs=e.visitorCookieTimeoutSecs||n.defaults.visitor.expires,this.visitorCookieSecure=e.visitorCookieSecure||n.defaults.visitor.secure,this.legacyVisitorCookieName=e.legacyVisitorCookieName||"parsely_uuid"},"getVisitorInfo":function(t){t=t||!1;var a=n.get(this.visitorCookieName);if(void 0===a){var r=n.get(this.legacyVisitorCookieName),s=e.config.apikey_uuid||e.config.uuid;!1!==e.optout_disabled_cookies&&void 0===r&&!1===n.supportsCookies&&(r="OPTOUT",i.log("Setting visitor ID to OPTOUT")),void 0===r&&null!==s?(r=s,i.log("No existing visitor ID found, using UUID from config: "+r)):i.log("Using existing value for visitor ID: "+r),a=this.initVisitor(r),n.expire("parsely_uuid")}else{var u=!1;try{a=o.parse(a),u=!0}catch(d){i.log('Unable to JSON parse visitorInfo "'+a+'", assuming ampid.'),a=this.initVisitor(a)}u&&t&&this.extendVisitorExpiry()}return e.config.parsely_site_uuid=a.id,a},"initVisitor":function(e){return this.setVisitorInfo({"id":e,"session_count":0,"last_session_ts":0})},"setVisitorInfo":function(e){for(var t=0;t<a.length;t++){var i=a[t];if("undefined"==typeof e[i]||null===e[i])return!1}return n.setJSON(this.visitorCookieName,e,{"expires":this.visitorCookieTimeoutSecs,"secure":this.visitorCookieSecure}),e},"extendVisitorExpiry":function(){n.extendExpiry(this.visitorCookieName,{"expires":this.visitorCookieTimeoutSecs,"secure":this.visitorCookieSecure})}});e.visitorManager=new r}(),function(){var e=this.PARSELY,t=e.util,n=e.Class,i=e.ParselyStorage,o=e.console,a=e.visitorManager,r=n.extend({"init":function(){this.windowAlias=t.getWindow(),this.documentAlias=this.windowAlias.document,this.sessionCookieName=e.sessionCookieName||i.defaults.session.key,this.sessionCookieTimeoutSecs=i.defaults.session.expires,this.sessionCookieSecure=e.sessionCookieSecure||i.defaults.session.secure,o.log("Initializing session."),this.getSession(!1)},"getSession":function(n){n=n||!1;var r=a.getVisitorInfo(),s=i.getJSON(this.sessionCookieName);if(void 0===s){var u,d;!1===r?(u=1,d=0):(r.session_count++,u=r.session_count,d=r.last_session_ts);var c=new Date;s={"sid":u,"surl":t.getEventUrl(),"sref":e.lastRequest?e.lastRequest.urlref:this.documentAlias.referrer,"sts":c.getTime(),"slts":d},o.log("Session expired/never existed, creating new session with "+this.sessionCookieTimeoutSecs+"s timeout: "+e.JSON.stringify(s)),i.setJSON(this.sessionCookieName,s,{"expires":this.sessionCookieTimeoutSecs,"secure":this.sessionCookieSecure}),r.last_session_ts=s.sts,a.setVisitorInfo(r)}else n&&this.extendSessionExpiry();return s},"extendSessionExpiry":function(){i.extendExpiry(this.sessionCookieName,{"expires":this.sessionCookieTimeoutSecs,"secure":this.sessionCookieSecure})}});e.sessionManager=new r}(),function(){var e=this.PARSELY,t=e.Class,n=e.util,i=e.JSON,o=e.$,a=n.getWindow(),r=a.document;if("querySelector"in r&&"querySelectorAll"in r){var s=["\0","","","","","","","","\b","\n","\x0B","\f","\r","","","","","","","","","","","","","","","","","",""],u=["&#0000;","&#0001;","&#0002;","&#0003;","&#0004;","&#0005;","&#0006;","&#0007;","&#0008;","&#000a;","&#000b;","&#000c;","&#000d;","&#000e;","&#000f;","&#0010;","&#0011;","&#0012;","&#0013;","&#0014;","&#0015;","&#0016;","&#0017;","&#0018;","&#0019;","&#001a;","&#001b;","&#001c;","&#001d;","&#001e;","&#001f;"],d=["newsarticle","article","techarticle","reportagenewsarticle","blog","blogposting","liveblogposting","report","review","opinionnewsarticle","analysisnewsarticle","backgroundnewsarticle","reviewnewsarticle","creativework","medicalwebpage","podcastepisode"],c=["webpage"],l=[].concat(d,c),f=function(e){return(new DOMParser).parseFromString(e,"text/html").body.textContent},p=function(e,t){var n,a=!0===t?[]:{},r=null,d=o.trim(e);0===d.indexOf("//<![CDATA[")?(n=(d=d.substr(11)).length-5,d.indexOf("//]]>")===n&&(d=d.substr(0,n))):0===d.indexOf("/*<![CDATA[*/")&&(n=(d=d.substr(13)).length-7,d.indexOf("/*]]>*/")===n&&(d=d.substr(0,n))),d=d.replace(/,\s*(?=[\]|}])/g,""),o.each(s,function(e,t){d=d.replace(new RegExp(t,"g"),"")}),o.each(u,function(e,t){d=d.replace(new RegExp(t,"g"),"")}),d=d.replace(/\n/g,""),d=d.replace(/\t/g," "),d=d.replace(/&#0009;/g," "),d=d.replace(/\\+((\\x[0-9a-fA-F]{2})|(\\u[0-9a-fA-F]{4}))/g,"$1");try{r=i.parse(d)}catch(c){return PARSELY.console.log("Error parsing JSON metadata: "+c),a}return r instanceof Array?r:r instanceof Object?!0===t?[r]:r:a},g=function(e){return("string"==typeof e||e instanceof String)&&0!==e.length?(o.each(u,function(t,n){e=e.replace(new RegExp(n,"g"),"")}),e):e},v=function _(e){if(e instanceof Array)return o.each(e,function(e,t){return _(t)});if(e instanceof Object){var t={};for(var n in e)t[_(n)]=_(e[n]);return t}return null==e?e="":(e=e.toString(),e=g(e),e=f(e)),e},h=function(e){var t=r.querySelectorAll('meta[name="parsely-'+e+'"], meta[property="parsely-'+e+'"]'),n=null;return o.each(t,function(e,t){if(null!==n)return!1;"content"in t&&""!==t.content&&(n=p(t.content,!1))}),n},y=function(){var e=h("metadata");return null===e||e.length>2e3?null:e},m=function(){};m.prototype=function(){var e=t.extend({"extractPageDescription":function(){throw Error("Not Implemented")},"getMetadata":function(e){var t=[];e.hasOwnProperty("tags")&&(t=e.tags,delete e.tags,("string"==typeof t||t instanceof String)&&(t=[t]));var n=y();null===n&&e.hasOwnProperty("metadata")&&(n=e.metadata),null===n||"string"==typeof n||t instanceof String||(n=i.stringify(n));var a=e.section||null;delete e.section;var r={"metadata":n,"section":a},s=[];o.each(t,function(e,t){null!==t&&t.length>0&&""!==t&&s.push(t)}),s.length>0&&(r.tags=s);var u={};return o.each(r,function(e,t){null!==t&&(u[e]=t)}),o.isEmptyObject(u)&&(u=null),u},"extract":function(){var e,t,n={},i=[];try{e=this.extractPageDescription()}catch(u){return PARSELY.console.log("Failed to extract page description: "+u),{}}if(o.isEmptyObject(e)||null===e)return{};o.each(e,function(e,t){n[v(e)]=v(t)});var a=this.getMetadata(n);null!==a&&(n.metadata=a),n.hasOwnProperty("author")&&!n.hasOwnProperty("authors")&&(t=n.author,n.authors=t instanceof Array?t:[t],delete n.author),n.hasOwnProperty("type")&&(i=n.type instanceof Array?n.type:[n.type]);var r=[],s=[];return o.each(i,function(e,t){var n=t.toLowerCase();-1!==d.indexOf(n)?r.push(n):-1!==c.indexOf(n)&&s.push(n)}),r.length>0?n.type="post":s.length>0&&(n.type="index"),n}}),n=e.extend({"extractPageDescription":function(){return h("page")}}),s=e.extend({"extractPageDescription":function(){var e={"authors":[]},t={},n={"@type":"type","headline":"title","url":"link","thumbnailUrl":"image_url","dateCreated":"pub_date","datePublished":"pub_date","articleSection":"section","creator":"authors","contributor":"authors","author":"authors","keywords":"tags","articleId":"post_id","metadata":"metadata","isBasedOn":"network_canonical","identifier":"network_id"},i=function(e,t){return e instanceof Array!=!0&&(e=[e]),o.each(e,function(e,n){var i=null;n instanceof Object==!0?(n.hasOwnProperty("@type")&&"Person"===n["@type"]||n.hasOwnProperty("type")&&"Person"===n.type)&&((i=n.name||null)instanceof Object&&(i=i.name||null),i=[i]):"string"==typeof n||n instanceof String?i=[n]:n instanceof Array&&(i=n),null!==i&&o.each(i,function(e,n){-1===t.indexOf(n)&&null!==n&&t.push(n)})}),t};o.each(r.querySelectorAll('script[type="application/ld+json"]'),function(e,n){var i=p(n.innerHTML,!0);o.each(i,function(e,n){var i="";n.hasOwnProperty("@type")&&(i=n["@type"]),i instanceof Array!=!0&&(i=[i]);var a=[];o.each(i,function(e,t){a.push(t.toLowerCase())}),o.each(a,function(e,i){-1!==l.indexOf(i)&&(t[i]=n)})})});var a;return o.each(l,function(e,n){if((a=t[n])!==undefined)return!1}),a===undefined?{}:(a.hasOwnProperty("datePublished")&&a.hasOwnProperty("dateCreated")&&delete a.dateCreated,o.each(a,function(t,o){if("authors"===(t=n.hasOwnProperty(t)?n[t]:t))e.authors=i(o,e.authors);else{if("@context"===t)return!0;e[t]=o}}),e)}}),u=e.extend({"extractPageDescription":function(){try{return{"amphtmlurl":r.querySelector("link[rel=amphtml]").href}}catch(e){return{}}}}),f=e.extend({"extractPageDescription":function(){var e,t=["type","link","image_url","title","pub_date","section","author","tags","post_id","network_id","network_canonical"],n={};return o.each(t,function(t,i){var a='meta[name="parsely-'+i.replace("_","-")+'"]',s=r.querySelectorAll(a);o.each(s,function(t,o){if(o.content!==undefined&&""!==o.content){var a=o.content;if("tags"===i){n.hasOwnProperty("tags")||(n.tags=[]),e=a.split(",");for(var r=0;r<e.length;r++)n.tags.push(e[r].trim())}else"author"===i?(n.hasOwnProperty("authors")||(n.authors=[]),n.authors.push(a)):n[i]=a}})}),n}}),g=e.extend({"extractPageDescription":function(){try{return{"link":r.querySelector("link[rel=canonical]").href}}catch(e){return{}}}}),_=e.extend({"extractPageDescription":function(){var e;try{return e=r.querySelector("meta[name='title']")||r.querySelector("meta[property='og:title']")||r.querySelector("meta[name='dc.title']"),{"title":e.content}}catch(t){return{"title":r.title||""}}}}),b=function(e){e===undefined&&(e=!0);var t={},i=new s,d=new f,c=new n,l=new u,p=new g,v=[i.extract.bind(i),d.extract.bind(d),c.extract.bind(c),l.extract.bind(l),p.extract.bind(p)];if(e){var h=new _;v.unshift(h.extract.bind(h))}return o.each(v,function(e,n){var i=n();if(null!==i){i.hasOwnProperty("metadata")&&i.metadata.hasOwnProperty("metadata")&&t.hasOwnProperty("metadata")&&(t.metadata.metadata=i.metadata.metadata,delete i.metadata.metadata,o.isEmptyObject(i.metadata)&&delete i.metadata);for(var a in i)i.hasOwnProperty(a)&&(null!==i[a]&&""!==i[a]||delete i[a]);o.extend(t,i)}}),t.hasOwnProperty("metadata")&&(o.each(t.metadata,function(e,n){t.hasOwnProperty(e)||(t[e]=n,delete t.metadata[e])}),o.isEmptyObject(t.metadata)?delete t.metadata:(t.pub_metadata=t.metadata,delete t.metadata)),t.hasOwnProperty("type")&&(t.page_type=t.type,delete t.type),t.title!==undefined&&(t.title=t.title.trim()),e&&(t.title===undefined&&(t.title=""),t.link===undefined&&(t.link=a.location.href||r.location.href)),t};return{"constructor":m,"get":function(e){return b(e)}}}(),e.metadata=new m}}(),function(){var e=this.PARSELY,t=e.$,n=e.util;e.enableMetadataHashing=!("undefined"==typeof e.metadata);var i=function(e){var t=0;if(n.isIE())for(var i=0;i<e.length;++i)t=(t<<5)-t+e.charCodeAt(i);else for(var o=0;o<e.length;++o)t=Math.imul(31,t)+e.charCodeAt(o);return 0|t},o=function(e){var n=["authors","section","tags","title"],o="";return t.each(n,function(t,n){var i=Array.isArray(e[n])?e[n].sort():e[n];o=o.concat(String(i))}),i(o)};e.getMetadataDetectorInfo=function(){var n=e.metadata.get(!1);return{"version":0,"url":n.link,"hash":t.isEmptyObject(n)?undefined:o(n)}}}(),function(){var e=this.PARSELY,t=e.util,n=e.JSON,i=e.$,o=t.getWindow().document;PARSELY.getLdJsonMetas=function(){for(var e=o.getElementsByTagName("script"),t=0;t<e.length;t++){var i=e[t];if("application/ld+json"===i.getAttribute("type")){var a;try{a=n.parse(i.innerHTML)}catch(r){return null}return{"type":"NewsArticle"===a["@type"]?"post":"sectionpage","title":a.headline,"link":a.url,"image_url":a.thumbnailUrl,"pub_date":a.dateCreated,"section":a.articleSection,"authors":a.creator,"tags":a.keywords}}}return null},PARSELY.getRepeatedMetaMetas=function(){for(var e={},t=o.getElementsByTagName("meta"),n={"parsely-title":"title","parsely-link":"link","parsely-image-url":"image_url","parsely-type":"type","parsely-post-id":"post_id","parsely-pub-date":"pub_date","parsely-section":"section","parsely-author":"authors","parsely-tags":"tags"},a=0;a<t.length;a++){var r=t[a],s=n[r.getAttribute("name")];if(void 0!==s){var u=r.getAttribute("content");"authors"===s?"undefined"==typeof e[s]?e[s]=[u]:e[s].push(u):e[s]="tags"===s?u.split(","):u}}return i.isEmptyObject(e)?null:e},PARSELY.getParselyPageMetas=function(){for(var e=o.getElementsByTagName("meta"),t=0;t<e.length;t++){var i=e[t];if("parsely-page"===i.getAttribute("name")){var a=i.getAttribute("value")||i.getAttribute("content");try{return n.parse(a)}catch(r){return null}}}return null},PARSELY.getMetas=function(){return this.getRepeatedMetaMetas()||this.getParselyPageMetas()||this.getLdJsonMetas()}}(),function(){function e(e){for(var t=0,n=0;e;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent;return[t,n]}function t(e){var n=a.slots.hasParselySlots?u:"id";if(null!==e.getAttribute(n))return"//*[@"+n+'="'+e.getAttribute(n)+'"]';if(e===document.body)return"//"+e.tagName.toLowerCase();for(var i=0,o=e.parentNode?e.parentNode.childNodes:[],r=0;r<o.length;r++){var s=o[r];if(s===e)return t(e.parentNode)+"/"+e.tagName.toLowerCase()+"["+(i+1)+"]";s.nodeType===d&&s.tagName===e.tagName&&i++}}function n(e){if(!e||0===e.indexOf("#")||0===e.indexOf("javascript"))return!0;var t=window.location.href;return e===t||0===e.indexOf(t+"#")}function i(e,t){function n(e,t){return e===document||t>=i||!e?null:"A"===e.nodeName?e:n(e.parentNode,t+1)}var i=(t=t||{}).maxHeight||5;return n(e,0)}function o(e){return e.getAttribute("parsely-target")||e.href}var a=this.PARSELY,r=a.util,s=a.ParselyStorage,u="data-parsely-slot";if(a.slots=a.slots||{},document.querySelector){a.slots.discoverSlots=function(){a.slots.hasParselySlots=!!document.querySelector("["+u+"]"),a.slots.discoveryTime=r.now()},a.slots.discoverSlots(),a.slots.reset=function(){a.slots.discoverSlots()};var d=1;r.objAddEventListener(document.body,"click",function(r){var u=i(r.target?r.target:r.srcElement);if(null===u)return!0;if(!n(u.getAttribute("href"))){var d=e(u),c=t(u),l={"url":a.util.getEventUrl(),"x":d[0],"y":d[1],"xpath":c,"href":o(u)};s.setJSON("_parsely_slot_click",l)}},!0)}else a.console("Slot tracking not supported on this browser")}(),function(e){"use strict";var t=e.$;e.Sampler=function(n){var i={};if(i._hasStartedSampling=!1,i._accumulators={},i._baseHeartbeatInterval=15e4,i._jitterRange=5e3,i._jitterFloor=0-i._jitterRange/2,t.isNumeric(e.secondsBetweenHeartbeats)){var o=i._baseHeartbeatInterval/1e3,a=e.secondsBetweenHeartbeats<o&&!0===n._parselyIsTest;(e.secondsBetweenHeartbeats>o||a)&&(i._baseHeartbeatInterval=1e3*e.secondsBetweenHeartbeats)}return i.trackKey=function(t,o,a){if((void 0===o||"function"==typeof o)&&void 0!==a){if(!i._accumulators.hasOwnProperty(t)){var r=i._baseHeartbeatInterval;i._accumulators[t]={"ms":0,"totalMs":0,"firstSampleTime":e.util.now(),"lastSampleTime":e.util.now(),"lastActiveSampleTime":undefined,"sampleFn":o,"heartbeatFn":a,"heartbeatInterval":r,"heartbeatTimer":undefined,"baseHeartbeatInterval":r}}!1===i._hasStartedSampling&&(n.setInterval(i._sample,100),i._hasStartedSampling=!0),i._setHeartbeatTimeout(t)}},i._setHeartbeatTimeout=function(e){var t=i._accumulators[e];"undefined"!=typeof t.heartbeatTimer&&i._unsetHeartbeatTimeout(e);var o=Math.random()*i._jitterRange+i._jitterFloor,a=t.heartbeatInterval+o;t.heartbeatTimer=n.setTimeout(function(){i.sendHeartbeat(e)},a)},i._unsetHeartbeatTimeout=function(e){var t=i._accumulators[e];n.clearTimeout(t.heartbeatTimer),t.heartbeatTimer=undefined},i._backoff=function(t,n){var i=.3*((n=void 0===n?e.util.now()-t.firstSampleTime:n)/1e3+35),o=Math.min(36e5,i);t.heartbeatInterval=1e3*o},i.dropKey=function(e){delete i._accumulators[e]},i._sample=function(t,n){t=void 0===t?e.util.now():t;var o,a,r,s;for(var u in i._accumulators)o=i._accumulators[u],r=t-(void 0===n?o.lastSampleTime:n),a="undefined"==typeof o.sampleFn||o.sampleFn(t),e.config.limit_et_sample_len&&(s=r>0&&r<200,a=a&&s),o.ms+=a?r:0,o.totalMs+=a?r:0,o.lastSampleTime=t,a&&(t-o.lastActiveSampleTime>o.baseHeartbeatInterval&&(o.heartbeatInterval=o.baseHeartbeatInterval,i._setHeartbeatTimeout(u)),o.lastActiveSampleTime=t)},i.sendHeartbeat=function(e,t,n,o){var a=i._accumulators[e];if(void 0!==a){var r=void 0===t?a.ms/1e3:t,s=Math.round(r);s>0&&s<=3600&&a.heartbeatFn(s,undefined,a.totalMs,o),a.ms=0,o||i._backoff(a,n),i._setHeartbeatTimeout(e)}},i._sendHeartbeats=function(e,t){for(var n in i._accumulators)i.sendHeartbeat(n,e,t,!0)},i._setUnloadListeners=function(){e._lifecycle.addEventListener("statechange",function(e){"hidden"===e.newState.toLowerCase()&&i._sendHeartbeats()})},i._setUnloadListeners(),i}(e.util.getWindow())}(this.PARSELY),function(){var e=this.PARSELY,t=e.config.settings,n=e.Sampler,i=e.$,o=e.util;if("boolean"!=typeof e.enableHeartbeats||e.enableHeartbeats){var a=["focus","mousedown","mouseup","mousemove","scroll","keyup","keydown"],r=["active","passive"],s=5;i.isNumeric(e.activeTimeout)&&e.activeTimeout>=1&&e.activeTimeout<=60&&(s=e.activeTimeout);var u=o.now();e.engagedTime=e.engagedTime||{},e._lastEventTime=u,e.isEngaged=!0,e.isInteracting=!0,e.focused=!0,e.videoPlaying=!1,e.ENGAGED_TIME_SAMPLER_KEY="engagedTime",!0===t.test&&(e._handleEngagementActivityCalls=0),!0!==e.fbInstantArticles&&e._lifecycle.addEventListener("statechange",function(t){var n=t.newState.toLowerCase();-1!==r.indexOf(n)?e.focused=!0:e.focused=!1});var d=function(){e._lastEventTime=o.now(),!0===t.test&&e._handleEngagementActivityCalls++};!0!==e.fbInstantArticles?i.each(a,function(e,t){o.windowAddEventListener(t,d)}):setInterval(d,1e3*s),e.engagedTime.getParams=function(){return{"minActiveTimeout":1,"maxActiveTimeout":60,"activeTimeout":s}},e.engagedTime.sample=function(t,n,i,a){return t=void 0===t?o.now():t,n=void 0===n?e._lastEventTime:n,i=void 0===i?e.videoPlaying:i,a=void 0===a?e.focused:a,e.isInteracting=t-n<1e3*s,e.isEngaged=e.isInteracting&&a||i,e.isEngaged},e.engagedTime.sendHeartbeat=function(t,n,a,r){t=void 0===t?0:t,n=void 0===n?e.enableHeartbeats:n,r=void 0!==r&&r,(void 0===n||!0===n)&&(!0!==e.config.heartbeat_should_honor_autotrack||e.autotrack)&&("undefined"!=typeof PARSELY.beacon&&"undefined"!=typeof PARSELY.beacon.pixel&&"function"==typeof PARSELY.beacon.pixel.beacon?(PARSELY.beacon.pixel.beacon({"date":(new Date).toString(),"action":"heartbeat","inc":t,"tt":a,"url":o.getEventUrl(),"urlref":e.lastRequest?e.lastRequest.urlref:o.getWindow().document.referrer},undefined,r),i.isFunction(e.onHeartbeat)&&e.onHeartbeat(t)):console.warn("PARSELY.beacon.pixel.beacon was called with action='heartbeat' while PARSELY.beacon was undefined."))},e.engagedTime.startTracking=function(){var t=!0===e.fbInstantArticles?undefined:e.engagedTime.sample;n.trackKey(e.ENGAGED_TIME_SAMPLER_KEY,t,e.engagedTime.sendHeartbeat)},e.engagedTime.stopTracking=function(){n.dropKey(e.ENGAGED_TIME_SAMPLER_KEY)},e.engagedTime.initNewPage=function(){e.engagedTime.stopTracking(),e.engagedTime.startTracking()},e.engagedTime.startTracking()}}(),function(){var e=this.PARSELY;e.videoPlaying=!1,e.video=e.video||{},e.video.trackedVideos={},e.video._subscribedElements=[],e.video.skipRegex=new RegExp("data:video/\\w+;base64,.+"),window._parselyIsTest&&(e.video._embedMap={});var t=function(t){var n=e.video.trackedVideos[t].urlOverride;return void 0===n&&(n=e.util.getEventUrl()),n},n=function(){var t=!1;for(var n in e.video.trackedVideos)if(e.video.trackedVideos[n].isPlaying){t=!0;break}e.videoPlaying=t},i=function(n){return function(i,o,a,r){if(i=void 0===i?0:i,o=void 0===o?e.enableHeartbeats:o,r=void 0!==r&&r,void 0===o||!0===o){var s=e.video.trackedVideos[n],u=e.util.getWindow(),d={"date":(new Date).toString(),"action":"vheartbeat","inc":i,"url":t(n),"metadata":e.JSON.stringify(s.metadata),"tt":a,"urlref":e.lastRequest?e.lastRequest.urlref:u.document.referrer};"undefined"!=typeof PARSELY.beacon&&"undefined"!=typeof PARSELY.beacon.pixel&&"function"==typeof PARSELY.beacon.pixel.beacon?(PARSELY.beacon.pixel.beacon(d,undefined,r),e.$.isFunction(e.onHeartbeat)&&e.onHeartbeat(i),s._heartbeatsSent+=1):console.warn("PARSELY.beacon.pixel.beacon was called with action='vheartbeat' while PARSELY.beacon was undefined.")}}},o=function(){for(var t,n,i,o=window,a=0;a<e.video._strategies.length;a++){t=e.video._strategies[a];for(var r=0;r<t.searchTags.length;r++){n=o.document.getElementsByTagName(t.searchTags[r]);for(var s=0;s<n.length;s++)i=n[s],-1===e.video._subscribedElements.indexOf(i)&&t.verify(i)&&(i.id||i.setAttribute("id",t.platform+"-"+e.util.getRandomInt(0,9999999)),!1!==t.subscribe(i)&&("undefined"==typeof t._subscribedElements&&(t._subscribedElements=[]),t._subscribedElements.push(i),e.video._subscribedElements.push(i)))}}};e.video.detectVideos=function(){return o()};var a=function(t,n,o){if(void 0===n&&(n={}),n.hasOwnProperty("link")||(n.link=t),e.video.trackedVideos[t]){for(var a in n)n.hasOwnProperty(a)&&(e.video.trackedVideos[t].metadata[a]=n[a]);void 0!==o&&(e.video.trackedVideos[t].urlOverride=o)}else e.video.trackedVideos[t]={"id":t,"isPlaying":!1,"hasStartedPlaying":!1,"metadata":n,"urlOverride":o,"_heartbeatsSent":0};return e.Sampler.trackKey(t,function(){return e.video.trackedVideos[t].isPlaying},i(t)),e.video.trackedVideos[t]};e.video._storeApiRoot=function(t,n){window._parselyIsTest&&!e.video._embedMap.hasOwnProperty(t)&&(e.video._embedMap[t]=n)},e.video.trackPlay=function(i,o,r){if(void 0!==i)if(null===(i+"").match(e.video.skipRegex)){var s=a(i,o=void 0===o?{}:o,r),u=e.util.getWindow();s.hasStartedPlaying||(s.hasStartedPlaying=!0,"undefined"!=typeof PARSELY.beacon&&"undefined"!=typeof PARSELY.beacon.pixel&&"function"==typeof PARSELY.beacon.pixel.beacon?PARSELY.beacon.pixel.beacon({"date":(new Date).toString(),"action":"videostart","url":t(i),"metadata":e.JSON.stringify(s.metadata),"urlref":e.lastRequest?e.lastRequest.urlref:u.document.referrer}):console.warn("PARSELY.beacon.pixel.beacon was called with action='videostart' while PARSELY.beacon was undefined.")),s.isPlaying=!0,n()}else PARSELY.console.log("Found data-uri video, not subscribing")},e.video.trackPause=function(t,i,o){void 0!==t?(a(t,i,o).isPlaying=!1,n()):e.console.log("no video id provided; trackPause event failed")},e.video.trackPauseAll=function(){for(var t in e.video.trackedVideos)e.video.trackPause(t)},e.video.reset=function(t){if(e.video.trackedVideos.hasOwnProperty(t)){var i=e.video.trackedVideos[t];i.hasStartedPlaying=!1,i.isPlaying=!1,e.Sampler.sendHeartbeat(t),e.Sampler.dropKey(t),n()}else e.console.log("no video id provided; reset failed")},e.video.clear=function(){var t,n=[];for(var i in e.video.trackedVideos)e.video.reset(i),n.push(i);for(t=0;t<n.length;t++)delete e.video.trackedVideos[n[t]];e.video._subscribedElements=[],e.video._buildStrategiesList();for(t=0;t<e.video._strategies.length;t++)delete e.video._strategies[t]._subscribedElements},e.video.addStrategy=function(t){for(var n=0;n<e.video._strategies.length;n++)if(e.video._strategies[n].platform===t.platform)return void e.console.log("Strategy '"+t.platform+"' already registered");e.video._strategies.unshift(t),e.video.hasOwnProperty("autotrack")&&!1===e.video.autotrack||o()},"undefined"==typeof e.video.onPlay&&(e.video.onPlay=function(t,n,i){e.video.trackPlay(n,i)}),"undefined"==typeof e.video.onPause&&(e.video.onPause=function(t,n){e.video.trackPause(n)}),e.video.PLATFORM_MEDIAELEMENTJS="mediaelementjs";var r={"platform":e.video.PLATFORM_MEDIAELEMENTJS,"searchTags":["VIDEO","IFRAME"],"verify":function(e){return-1!==e.className.indexOf("mejs__player")},"subscribe":function(t){if("function"!=typeof window.MediaElement)return e.console.log("Detected mediaelement.js embed butwindow.MediaElement is not accesible."),!1;var n=function(n){var i={"duration":Math.round(1e3*n.duration),"image_url":t.poster,"title":t.title?t.title:n.currentSrc,"video_platform":e.video.PLATFORM_MEDIAELEMENTJS};e.video.onPlay(n,n.currentSrc,i)},i=function(t,n){e.video.onPause(t,t.currentSrc),!0===n&&e.video.reset(t.currentSrc)};new window.MediaElement(t.id,{"success":function(o){e.video._storeApiRoot(t.id,o),o.addEventListener("loadedmetadata",function(){o.addEventListener("play",function(){n(o)}),o.addEventListener("pause",function(){i(o)}),o.addEventListener("ended",function(){i(o,!0)}),e.console.log("Subscribed to mediaelementjs embed with ID '"+t.id+"'")})}})}};e.video.PLATFORM_VIDEOJS="videojs";var s={"platform":e.video.PLATFORM_VIDEOJS,"searchTags":["VIDEO"],"verify":function(e){return-1!==e.className.indexOf("vjs-tech")||-1!==e.className.indexOf("video-js")},"subscribe":function(t){if("function"!=typeof window.videojs)return e.console.log("Detected video.js embed but window.videojs is not accesible."),!1;var n,i=function(n){var i={"duration":Math.round(1e3*n.duration()),"image_url":n.poster_,"title":t.title?t.title:n.currentSrc(),"video_platform":e.video.PLATFORM_VIDEOJS};e.video.onPlay(n,n.currentSrc(),i)},o=function(t,n){e.video.onPause(t,t.currentSrc()),!0===n&&e.video.reset(t.currentSrc())},a=function(n){e.console.log("videojs: Attempting to set listeners"),e.video._storeApiRoot(t.id,n),n.on("play",function(){i(n)}),n.on("pause",function(){o(n)}),n.on("ended",function(){o(n,!0)}),!1===n.paused()&&i(n),e.console.log("videojs: Subscribed to videojs embed with ID '"+t.id+"'")};"undefined"!=typeof window.videojs.getPlayer?(e.console.log("videojs: Using getPlayer() to attach to player"),n=window.videojs.getPlayer(t.id)):(e.console.log("videojs: Using videojs() to attach to player"),n=window.videojs(t.id)),void 0!==n&&(window.isNaN(n.duration())?(e.console.log("videojs: Setting loadedmetadata listener"),n.on("loadedmetadata",function(){a(n)})):(e.console.log("videojs: Player metadata already loaded"),a(n)))}};e.video.PLATFORM_THEPLATFORM="theplatform";var u={"platform":e.video.PLATFORM_THEPLATFORM,"searchTags":["IFRAME"],"verify":function(e){return-1!==e.src.indexOf("player.theplatform.com")},"subscribe":function(t){if("object"!==_typeof(window.$pdk))return e.console.log("Detected ThePlatform embed but window.$pdk is not accesible."),!1;e.video._storeApiRoot(t.id,window.$pdk),window.$pdk.controller.addEventListener("OnReleaseStart",function(t){var n={"duration":t.data.release.duration,"image_url":t.data.release.defaultThumbnailUrl,"title":t.data.release.title,"author":t.data.release.author,"pub_date_tmsp":t.data.release.pubDate/1e3,"video_platform":e.video.PLATFORM_THEPLATFORM};e.video.onPlay(window.$pdk,t.data.release.guid,n)}),window.$pdk.controller.addEventListener("OnMediaPause",function(t){e.video.onPause(window.$pdk,t.data.clip.baseClip.guid)}),window.$pdk.controller.addEventListener("OnMediaEnd",function(t){e.video.onPause(window.$pdk,t.data.clip.baseClip.guid),e.video.reset(t.data.clip.baseClip.guid)}),e.console.log("Subscribed to ThePlatform embed with ID '"+t.id+"'")}};e.video.PLATFORM_VIMEO="vimeo";var d={"platform":e.video.PLATFORM_VIMEO,"searchTags":["IFRAME"],"verify":function(e){return-1!==e.src.indexOf("player.vimeo.com")},"subscribe":function(t){if("object"!==_typeof(window.Vimeo))return e.console.log("Detected Vimeo embed but window.Vimeo is not accesible."),!1;var n=new window.Vimeo.Player(t);e.video._storeApiRoot(t.id,n),n.on("play",function(t){n.getVideoId().then(function(i){n.getVideoTitle().then(function(o){var a={"title":o,"duration":1e3*Math.round(t.duration),"video_platform":e.video.PLATFORM_VIMEO};e.video.onPlay(n,""+i,a)})})}),n.on("pause",function(){n.getVideoId().then(function(t){e.video.onPause(n,""+t)})}),n.on("ended",function(){n.getVideoId().then(function(t){e.video.onPause(n,""+t),e.video.reset(""+t)})}),e.console.log("Subscribed to Vimeo embed with ID '"+t.id+"'")}};e.video.PLATFORM_JWPLAYER="jwplayer";var c={"platform":e.video.PLATFORM_JWPLAYER,"searchTags":["DIV"],"verify":function(e){return-1!==e.className.indexOf("jwplayer")&&-1!==e.className.indexOf("jw-")},"subscribe":function(t){if("function"!=typeof window.jwplayer)return e.console.log("Detected JWPlayer embed but window.jwplayer is not accesible."),!1;var n=window.jwplayer(t.id);e.video._storeApiRoot(t.id,n);n.on("play",function(){var t,i=n.getPlaylistItem();t="undefined"==typeof i.duration?1e3*n.getDuration():1e3*i.duration;var o=i.image;void 0!==o&&0!==o.indexOf("http")&&0===o.indexOf("//")&&(o="http:"+o);var a={"duration":t,"image_url":o,"title":i.title,"pub_date_tmsp":i.pubdate,"video_platform":e.video.PLATFORM_JWPLAYER};"undefined"!=typeof i.tags&&i.tags.length>0&&(a.tags=i.tags.split(",")),"undefined"!=typeof a.pub_date_tmsp&&Number.isInteger(a.pub_date_tmsp)&&(a.pub_date_tmsp*=1e3),i.hasOwnProperty("author")&&(a.author=i.author),i.hasOwnProperty("section")&&(a.section=i.section),e.video.onPlay(n,i.mediaid,a)}),n.on("pause",function(){e.video.onPause(n,n.getPlaylistItem().mediaid)}),n.on("complete",function(){e.video.onPause(n,n.getPlaylistItem().mediaid),e.video.reset(n.getPlaylistItem().mediaid)}),e.console.log("Subscribed to JWPlayer embed with ID '"+t.id+"'")}};e.video.PLATFORM_KALTURA="kaltura";var l={"platform":e.video.PLATFORM_KALTURA,"searchTags":["OBJECT","IFRAME"],"verify":function(e){return"application/x-shockwave-flash"===e.type&&("undefined"!=typeof e.data&&-1!==e.data.indexOf("cdnapi.kaltura.com")||"undefined"!=typeof e.src&&-1!==e.src.indexOf("cdnapi.kaltura.com")||"undefined"!=typeof e.id&&-1!==e.id.indexOf("kaltura-player"))},"subscribe":function(t){var n="parselyKalturaOnPlay"+t.id,i="parselyKalturaOnPause"+t.id,o="parselyKalturaOnEnd"+t.id;e.util.windowSetFunction(n,function(){var n=document.getElementById(t.id),i={"duration":1e3*n.evaluate("{mediaProxy.entry.duration}"),"image_url":n.evaluate("{mediaProxy.entry.thumbnailUrl}"),"title":n.evaluate("{mediaProxy.entry.name}"),"pub_date_tmsp":n.evaluate("{mediaProxy.entry.createdAt}"),"tags":n.evaluate("{mediaProxy.entry.tags}"),"video_platform":e.video.PLATFORM_KALTURA},o=n.evaluate("{mediaProxy.entry.categories}");o&&(i.section=o[0]),e.video.onPlay(n,n.evaluate("{mediaProxy.entry.id}"),i)}),e.util.windowSetFunction(i,function(){var n=document.getElementById(t.id);e.video.onPause(n,n.evaluate("{mediaProxy.entry.id}"))}),e.util.windowSetFunction(o,function(){var n=document.getElementById(t.id),i=n.evaluate("{mediaProxy.entry.id}");e.video.onPause(n,i),e.video.reset(i)});var a=function(){var a=document.getElementById(t.id);e.video._storeApiRoot(t.id,a),a.addJsListener("playerPlayed",n),a.addJsListener("playerPaused",i),a.addJsListener("playerPlayEnd",o)};"undefined"!=typeof document.getElementById(t.id).addJsListener?a():e.util.windowSetFunction("jsCallbackReady",a),e.console.log("Subscribed to Kaltura embed with ID '"+t.id+"'")}};e.video.PLATFORM_WISTIA="wistia";var f={"platform":e.video.PLATFORM_WISTIA,"searchTags":["DIV","IFRAME"],"verify":function(e){return-1!==e.className.indexOf("wistia_embed")||"undefined"!=typeof e.src&&-1!==e.src.indexOf("fast.wistia")},"subscribe":function(t){var n=function(t){var n,i=(n=!0===t.playlist?t.currentVideo():t).data.media,o={"duration":1e3*i.duration,"image_url":i.assets[0].url.replace(".bin",".jpg"),"pub_date_tmsp":i.createdAt,"title":i.name,"video_platform":e.video.PLATFORM_WISTIA};e.video.onPlay(n,i.hashedId,o)},i=function(t,n){var i;i=!0===t.playlist?t.currentVideo():t,e.video.onPause(i,i.data.media.hashedId),!0===n&&e.video.reset(i.data.media.hashedId)},o=function(o,a){if(!o)return!1;e.video._storeApiRoot(a,o),o.bind("play",function(){n(o)}),o.bind("pause",function(){i(o)}),o.bind("end",function(){i(o,!0)}),e.console.log("Subscribed to Wistia embed with ID '"+t.id+"'")};if("undefined"!=typeof window.Wistia){var a=window.Wistia.api(t.id);return a||"function"!=typeof window.Wistia.playlist||(a=window.Wistia.playlist(t.id.split("_")[1])),o(a,t.id)}window._wq=window._wq||[],window._wq.push({"id":t.id,"onReady":function(e){o(e,t.id)}})}};e.video.PLATFORM_BRIGHTCOVE="brightcove";var p={"platform":e.video.PLATFORM_BRIGHTCOVE,"searchTags":["VIDEO","VIDEO-JS"],"verify":function(e){return-1!==["video","video-js"].indexOf(e.tagName.toLowerCase())&&(e.hasAttribute("data-video-id")||e.hasAttribute("data-playlist-id"))},"subscribe":function(t){if("function"!=typeof window.videojs)return e.console.log("Detected Brightcove embed but window.videojs is not accesible."),!1;var n,i=function(t){var n,i=t.mediainfo,o={"duration":1e3*t.duration(),"image_url":t.poster(),"video_platform":e.video.PLATFORM_BRIGHTCOVE};t.el_.attributes["data-playlist-id"]&&t.hasOwnProperty("playlist")&&(i=t.playlist()[t.playlist.currentIndex()]),void 0!==i?(o.pub_date_tmsp=i.publishedAt,o.title=i.name,o.tags=i.tags,n=i.id):t.el_.attributes["data-video-id"]&&(n=t.el_.attributes["data-video-id"].value,o.title=t.el_.getAttribute("data-title")||undefined),n?e.video.onPlay(t,n,o):e.console.log("No video id found for Brightcove embed!")},o=function(t,n){var i;"undefined"!=typeof t.mediainfo?i=t.mediainfo.id:t.el_.attributes["data-video-id"]&&(i=t.el_.attributes["data-video-id"].value),i?(e.video.onPause(t,i),!0===n&&e.video.reset(i)):e.console.log("No video id found for Brightcove embed!")},a=!1,r=function(n){a||(a=!0,e.video._storeApiRoot(t.id,n),n.on("firstplay",function(){i(n)}),n.on("play",function(){i(n)}),n.on("pause",function(){o(n)}),n.on("ended",function(){o(n,!0)}),(!1===n.paused()||n.hasClass("vjs-has-started"))&&i(n),e.console.log("Subscribed to Brightcove embed with ID '"+t.id+"'"))};void 0!==(n="undefined"!=typeof window.videojs.getPlayer?window.videojs.getPlayer(t.id):window.videojs(t.id))&&(window.isNaN(n.duration())?(n.on("loadstart",function(){r(n)}),n.ready(function(){r(n)})):r(n))}};e.video.PLATFORM_YOUTUBE="youtube";var g={"platform":e.video.PLATFORM_YOUTUBE,"searchTags":["IFRAME"],"verify":function(e){return"iframe"===e.tagName.toLowerCase()&&(-1!==e.src.indexOf("youtube.com/embed")||-1!==e.src.indexOf("youtube-nocookie.com/embed"))},"subscribe":function(t){var n=function(t){var n;window.YT.get(t.id)?(e.console.log("YouTube player already initialized, using existing instance"),n=window.YT.get(t.id)):(e.console.log("Initialized new YouTube player instance"),n=new window.YT.Player(t.id)),n.addEventListener("onReady",function(){e.video._storeApiRoot(t.id,n)}),n.addEventListener("onStateChange",function(t){var i=function(t){var n={};return t.hasOwnProperty("getVideoData")&&t.hasOwnProperty("getDuration")?(e.console.log("Youtube player using getVideoData"),n=t.getVideoData(),n.duration=t.getDuration(),n):(t.hasOwnProperty("playerInfo")&&(e.console.log("Youtube player using playerInfo"),(n=t.playerInfo.videoData).duration=t.playerInfo.duration),n)},o=i(n).video_id;if(-1===t.data||0===t.data||2===t.data)e.video.onPause(n,o),0===t.data&&e.video.reset(o);else if(1===t.data){var a={"duration":1e3*i(n).duration,"title":i(n).title,"image_url":"http://img.youtube.com/vi/"+o+"/0.jpg","author":i(n).author,"video_platform":e.video.PLATFORM_YOUTUBE};e.video.onPlay(n,o,a)}}),e.console.log("Subscribed to YouTube embed with ID '"+t.id+"'")};"undefined"!=typeof window.YT&&"undefined"!=typeof window.YT.Player?n(t):e.util.windowSetFunction("onYouTubeIframeAPIReady",function(){n(t)})}};PARSELY.video._buildStrategiesList=function(){var t=[u,d,c,l,f,p,g,s,r];e.video._strategies=[];for(var n,i,o=0;o<t.length;o++)n=t[o],i=!0,"undefined"!=typeof e.video.allowedStrategies&&-1===e.video.allowedStrategies.indexOf(n.platform)&&(i=!1),i&&e.video._strategies.push(n)},PARSELY.video._buildStrategiesList(),e.video.hasOwnProperty("autotrack")&&!1===e.video.autotrack||(o(),e.util.getWindow().setInterval(o,5e3))}(),function(){var e=this.PARSELY,t=e.$,n=e.Class,i=e.JSON,o=e.console,a=e.config,r=e.urls,s=e.visitorManager,u=e.sessionManager,d=e.ParselyStorage,c=e.util.getWindow(),l=c.document,f=c.screen;PARSELY.Pixel=n.extend({"init":function(){var t=e.util.getEventUrl(),n=f.width+"x"+f.height+"|"+(f.availWidth+"x"+f.availHeight)+"|"+f.colorDepth;this.correlationIds={"pageview":"pvid","videostart":"vsid"},this.callbackName="parselyStartCallback",this.data={"idsite":a.apikey,"url":t,"urlref":l.referrer,"screen":n,"data":{}},a.hasOwnProperty("is_remote_config")&&!0!==a.is_remote_config||(this.data.data.parsely_uuid=a.network_uuid||a.uuid,this.data.data.parsely_site_uuid=a.parsely_site_uuid),this.remoteEndpoint=r.pixel+this.selectEndpoint(),this.thirdPartyBlockedCookieSettings={"name":"_parsely_tpa_blocked","timeoutSecs":43200,"flagAttribute":"tpab"}},"selectEndpoint":function(){return!1===a.track_ip_addresses?"/px/":"/plogger/"},"isThirdPartyAnalyticsBlocked":function(){if(!e.is_first_party)return undefined;var t=this.thirdPartyBlockedCookieSettings,n=d.getJSON(t.name);if(void 0!==n&&(this.third_party_analytics_is_blocked=n[t.flagAttribute]),"undefined"==typeof this.third_party_analytics_is_blocked&&"undefined"==typeof this.third_party_analytics_checked){this.third_party_analytics_checked=!0;var i=this,o=function(e){i.third_party_analytics_is_blocked=e;var n={};n[t.flagAttribute]=e,d.setJSON(t.name,n,{"expires":t.timeoutSecs})},a=new Image;a.onerror=function(){o(!0)},a.onload=function(){o(!1)},a.src="https://p1.parsely.com/plogger/"}return this.third_party_analytics_is_blocked},"addDefaults":function(e){t.extend(!0,this.data,e)},"shouldGenerateVisitorID":function(e){return!(!a.hasOwnProperty("is_remote_config")||!0===a.is_remote_config)&&!e},"saveVisitorID":function(e){var t=u.getSession(),n={"id":e,"session_count":t.sid,"last_session_ts":t.sts};d.setJSON(s.visitorCookieName,n,{"expires":s.visitorCookieTimeoutSecs,"secure":s.visitorCookieSecure}),u.getSession()},"generateVisitorID":function(){a.uuid=e.util.makeUUID("pid="),this.saveVisitorID(a.uuid)},"sendEvent":function(n,i){o.log("beaconing to endpoint: "+this.remoteEndpoint),n.u=i,(new Image).src=this.buildEventRequestUrl(n),t.isFunction(e.onBeacon)&&e.onBeacon(n)},"requestFetch":function(n,i){return o.log("fetching endpoint: "+this.remoteEndpoint),"undefined"!=typeof c.fetch&&(n.u=i,fetch(this.buildEventRequestUrl(n),{"method":"GET","mode":"no-cors","keepalive":!0})["catch"](function(e){o.log(e)}),t.isFunction(e.onBeacon)&&e.onBeacon(n),!0)},"buildEventRequestUrl":function(e){var n=t.param(e);return this.remoteEndpoint+"?"+n},"generatePageloadId":function(){return"undefined"==typeof e.pageload_id&&(e.pageload_id=e.util.makeUUID()),e.pageload_id},"getCorrelationIdKey":function(e){return"_"+e+"_correlation_id"},"generateEventCorrelationId":function(t,n){var i=this.getCorrelationIdKey(t);return!0===n&&(e[i]=e.util.makeUUID()),e[i]},"beacon":function(n,o,d){var c=u.getSession(!0),l=e.util.now(),f=this.generatePageloadId()||0,p=t.extend(!0,{"rand":l,"plid":f},this.data,c,n),g=e.visitorManager.getVisitorInfo();!0===this.isThirdPartyAnalyticsBlocked()&&(p.tpab=1,p.data.flashlight=1),s.extendVisitorExpiry();var v;for(var h in this.correlationIds)void 0!==(v=this.generateEventCorrelationId(h,h===p.action))&&(p[this.correlationIds[h]]=v);p.data=i.stringify(p.data),!0!==o&&(PARSELY.lastRequest=p),a.uuid=g.id,this.shouldGenerateVisitorID(g.id)&&this.generateVisitorID(),!0===d&&(e.util.isFirefox()||e.util.isSafari())&&(d=!1),this.remoteEndpoint=r.pixel+this.selectEndpoint();var y=!1;!0===d&&(y=this.requestFetch(p,a.uuid)),!1===y&&this.sendEvent(p,a.uuid)}})}(),function(){var e=this.PARSELY,t=e.$,n=e.console,i=e.Class,o=e.JSON,a=e.ParselyStorage,r=e.util.getWindow().document;PARSELY.Beacon=i.extend({"init":function(){this.pixel=new PARSELY.Pixel},"trackPageView":function(i,s){void 0===i&&(i={}),"undefined"!=typeof i.action&&"pageview"!==i.action||e.initNewPage(!1);var u={"title":r.title,"date":(new Date).toString(),"action":"pageview","url":e.util.getEventUrl(),"urlref":r.referrer};e.enablePixelMetadata&&(u.hasOwnProperty("metadata")?u.metadata=o.stringify(t.extend(u.metadata,e.metadata.get())):u.metadata=o.stringify(e.metadata.get())),e.enableMetadataHashing&&(i.data=t.extend(i.data,{"parsely:metadata-detection":e.getMetadataDetectorInfo()}));var d=a.getJSON("_parsely_slot_click");d&&(a.expire("_parsely_slot_click"),n.log("Valid slot click found"),u.sl_xp=d.xpath,u.sl_x=d.x,u.sl_y=d.y,u.sl_h=d.href,d.url!==u.urlref&&n.log("urlref overridden by slot data as "+d.url),u.urlref=d.url),t.extend(u,i),this.pixel.beacon(u,s)},"trackConversion":function(e){window.console.warn("[WARN] `PARSELY.beacon.trackConversion()` is being deprecated."),window.console.warn("[WARN] Please consult https://www.parse.ly/help/integration/conversions/ to update to the new Conversions js-API.");var i=["active","lead","customer"],o={"label":undefined};e&&e.category?-1===i.indexOf(e.category)?n.log("'"+e.category+"' is not a valid conversion category; must be one of: "+i.join(", ")):(t.extend(o,e),this.trackPageView({"action":"conversion","data":{"_conversion_type":e.category,"_conversion_label":e.label}})):n.log("No category specified; category required for conversion events")},"start":function(){this.startTime=e.util.now(),this.autotrack="undefined"==typeof PARSELY.autotrack||PARSELY.autotrack,this.autotrack?(n.log("autotrack enabled; doing automatic pageview beacon"),this.trackPageView()):n.log("autotrack disabled; beacon loaded but no data sent")}})}(),function(){var e=PARSELY.config.settings,t=PARSELY.console,n=PARSELY.$;PARSELY.updateDefaults=function(e){return PARSELY.beacon.pixel.addDefaults(e)},PARSELY.setConfigOptions=function(e){e.hasOwnProperty("track_ip_addresses")&&(PARSELY.config.track_ip_addresses=e.track_ip_addresses)},PARSELY.initNewPage=function(e){"undefined"!=typeof PARSELY&&("undefined"!=typeof PARSELY.Sampler&&"function"==typeof PARSELY.Sampler._sendHeartbeats&&PARSELY.Sampler._sendHeartbeats(),"undefined"!=typeof PARSELY.engagedTime&&"function"==typeof PARSELY.engagedTime.initNewPage&&PARSELY.engagedTime.initNewPage(),"undefined"!=typeof PARSELY.video&&"function"==typeof PARSELY.video.clear&&PARSELY.video.clear(),"undefined"!=typeof PARSELY.slots&&"function"==typeof PARSELY.slots.reset&&PARSELY.slots.reset(),"undefined"!=typeof PARSELY.lastRequest&&delete PARSELY.lastRequest,!1!==e&&"undefined"!=typeof PARSELY.beacon&&"function"==typeof PARSELY.beacon.start&&PARSELY.beacon.start(),PARSELY.autotrack&&PARSELY.video&&!1!==PARSELY.video.autotrack&&"function"==typeof PARSELY.video.detectVideos&&PARSELY.video.detectVideos())},PARSELY.onStart=function(e){"function"==typeof e&&e()},PARSELY.isFlashlight=function(){return PARSELY.beacon.pixel.isThirdPartyAnalyticsBlocked()};var i;if(e.tracker&&(t.log("tracker enabled, create Beacon"),i=new PARSELY.Beacon,PARSELY.beacon=i),"undefined"!=typeof PARSELY._stubs){var o,a;for(o in PARSELY._stubs)if(PARSELY._stubs.hasOwnProperty(o)&&"function"==typeof PARSELY[o])for(a=0;a<PARSELY._stubs[o].length;a++)PARSELY[o].apply(null,PARSELY._stubs[o][a])}void 0!==i&&(i.start(),n.isFunction(PARSELY.onReady)&&PARSELY.onReady());try{if("undefined"!=typeof Storage&&localStorage.getItem("parsely-overlay")){var r=document.createElement("script");r.setAttribute("src","https://dash.parsely.com/static/build/overlay.js?v="+PARSELY.util.now()),document.body.appendChild(r)}}catch(s){PARSELY.console.log(s)}}(),function(){var e=PARSELY.onload,t=PARSELY.console;if("function"==typeof e)try{e()}catch(n){t.dir({"info":"hook threw exception","error":n})}t.log("Final load stage completed successfully"),PARSELY.loaded=!0}();cript>  
<script type='text/javascript'>window.navmet.push({key:'HamburgerMenuIcon',end:+new Date(),begin:window.navmet.tmp});</script>
      </div>
      <div class='nav-fill'>
        
 <div id="nav-shop">
 </div>
        <div id='nav-xshop-container'>
          <div id='nav-xshop' class="nav-progressive-content">
            <script type='text/javascript'>window.navmet.tmp=+new Date();</script>
<a href="/fresh?ref_=nav_cs_fresh" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_0" data-csa-c-content-id="nav_cs_fresh">Fresh</a>

<a href="/minitv?ref_=nav_avod_desktop_topnav" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_1" data-csa-c-content-id="nav_avod_desktop_topnav">Amazon miniTV</a>

<a href="/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_2" data-csa-c-content-id="nav_cs_sell_T3">Sell</a>

<a href="/gp/bestsellers/?ref_=nav_cs_bestsellers" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_3" data-csa-c-content-id="nav_cs_bestsellers">Best Sellers</a>

<a href="/deals?ref_=nav_cs_gb" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_4" data-csa-c-content-id="nav_cs_gb">Today's Deals</a>

<a href="/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_5" data-csa-c-content-id="nav_cs_mobiles">Mobiles</a>

<a href="/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_6" data-csa-c-content-id="nav_cs_electronics"> Electronics </a>

<a href="/prime?ref_=nav_cs_primelink_nonmember" class="nav-a  " data-ux-jq-mouseenter="true" id="nav-link-amazonprime" tabindex="0"  data-csa-c-type="link" data-csa-c-slot-id="nav-link-amazonprime" data-csa-c-content-id="nav_cs_primelink_nonmember"><span>Prime</span><span class="nav-icon nav-arrow"></span></a>

<a href="/gcx/-/gfhz/?ref_=nav_cs_giftfinder" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_8" data-csa-c-content-id="nav_cs_giftfinder">Gift Ideas	</a>

<a href="/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_9" data-csa-c-content-id="nav_cs_help">Customer Service</a>

<a href="/gp/new-releases/?ref_=nav_cs_newreleases" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_10" data-csa-c-content-id="nav_cs_newreleases">New Releases</a>

<a href="/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_11" data-csa-c-content-id="nav_cs_home">Home & Kitchen</a>

<a href="/gp/browse.html?node=6648217031&ref_=nav_cs_fashion" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_12" data-csa-c-content-id="nav_cs_fashion">Fashion</a>

<a href="/gp/sva/dashboard?ref_=nav_cs_apay" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_13" data-csa-c-content-id="nav_cs_apay">Amazon Pay</a>

<a href="/computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_14" data-csa-c-content-id="nav_cs_pc">Computers</a>

<a href="/Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_15" data-csa-c-content-id="nav_cs_books">Books</a>

<a href="/Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_16" data-csa-c-content-id="nav_cs_automotive">Car & Motorbike</a>

<a href="/Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_17" data-csa-c-content-id="nav_cs_toys">Toys & Games</a>

<a href="/Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_18" data-csa-c-content-id="nav_cs_hi">Home Improvement</a>

<a href="/Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_19" data-csa-c-content-id="nav_cs_sports">Sports, Fitness & Outdoors</a>

<a href="/amazon-coupons/b/?_encoding=UTF8&node=10465704031&ref_=nav_cs_coupons" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_20" data-csa-c-content-id="nav_cs_coupons">Coupons</a>

<a href="/beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_21" data-csa-c-content-id="nav_cs_beauty">Beauty & Personal Care</a>

<a href="/health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_22" data-csa-c-content-id="nav_cs_hpc">Health, Household & Personal Care</a>

<a href="/gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_23" data-csa-c-content-id="nav_cs_gc">Gift Cards</a>

<a href="/Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_24" data-csa-c-content-id="nav_cs_grocery">Grocery & Gourmet Foods</a>

<a href="/auto-deliveries/landing?ref_=nav_cs_sns" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_25" data-csa-c-content-id="nav_cs_sns">Subscribe & Save</a>

<a href="/video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_26" data-csa-c-content-id="nav_cs_video_games">Video Games</a>

<a href="/Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_27" data-csa-c-content-id="nav_cs_baby">Baby</a>

<a href="/Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_28" data-csa-c-content-id="nav_cs_audible">Audible</a>

<a href="/Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_29" data-csa-c-content-id="nav_cs_pets">Pet Supplies</a>

<a href="/b/?node=6637738031&ref_=nav_cs_amazonbasics" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_30" data-csa-c-content-id="nav_cs_amazonbasics">AmazonBasics</a>

<a href="/Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books" class="nav-a  " tabindex="0" data-csa-c-type="link" data-csa-c-slot-id="nav_cs_31" data-csa-c-content-id="nav_cs_kindle_books">Kindle eBooks</a>
<script type='text/javascript'>window.navmet.push({key:'CrossShop',end:+new Date(),begin:window.navmet.tmp});</script>
          </div>
        </div>
      </div>
      <div class='nav-right'>
        <script type='text/javascript'>window.navmet.tmp=+new Date();</script><!-- Navyaan SWM -->
<div id="nav-swmslot">
  <div id="navSwmHoliday" style="height: 39px; width: 400px; overflow: hidden; position: relative; ">
    <a aria-label="Big Savings, More Happiness" href="/events/greatrepublicdaysale/?_encoding=UTF8&ref_=nav_swm_swm_gd&pf_rd_p=196078d5-521c-4d07-8f6d-cfdd10c6a2d6&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=MSP1CEGF2FMZQD91DMJG" class="nav-imageHref" >
  <img alt="Big Savings, More Happiness" src="https://m.media-amazon.com/images/G/31/IN-Events/Jan24ARTTeaser1/GW/JanART24_SWM_SN._CB586119408_.jpg">
</a>
      </div>
  
</div><script type='text/javascript'>window.navmet.push({key:'SWM',end:+new Date(),begin:window.navmet.tmp});</script>
      </div>
    </div>

    <div id='nav-subnav-toaster'></div>

    
    <div id="nav-progressive-subnav">
      
    </div>

    <div id='nav-flyout-ewc' class='nav-ewc-lazy-align nav-ewc-hide-head'><div class='nav-flyout-body ewc-beacon' tabindex='-1'><div class='nav-ewc-arrow'></div><div class='nav-ewc-content'></div></div></div><script type='text/javascript'>
(function() {
  var viewportWidth = function() {
    return window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
  };

  if (typeof uet === 'function') {  uet('x1', 'ewc', {wb: 1}); }

  window.$Nav && $Nav.declare('config.ewc', (function() {
    var config = {"enablePersistent":true,"viewportWidthForPersistent":1400,"isEWCLogging":1,"isEWCStateExpanded":true,"EWCStateReason":"fixed","isSmallScreenEnabled":true,"isFreshCustomer":false,"errorContent":{"html":"<div class='nav-ewc-error'><span class='nav-title'>Oops!</span><p class='nav-paragraph'>There is a problem loading your cart right now</p><a href='/gp/cart/view.html?ref_=nav_err_ewc_timeout' class='nav-action-button'><span class='nav-action-inner'>Your Cart</span></a></div>"},"url":"/cart/ewc/compact?hostPageType=APBBrowse&hostSubPageType=null&hostPageRID=MSP1CEGF2FMZQD91DMJG&prerender=0","cartCount":0,"freshCartCount":0,"almCartCount":0,"primeWardrobeCartCount":0,"isCompactViewEnabled":true,"isCompactEWCRendered":true,"isWiderCompactEWCRendered":true,"EWCBrowserCacheKey":"EWC_Cache_257-9804433-6210519__INR_en_IN","isContentRepainted":false,"clearCache":false,"loadFromCacheWithDelay":0,"delayRenderingTillATF":false};
    var hasAui = window.P && window.P.AUI_BUILD_DATE;
    var isRTLEnabled = (document.dir === 'rtl');
    config.pinnable = config.pinnable && hasAui;
    config.isMigrationTreatment = true;

    config.flyout = (function() {
      var navbelt = document.getElementById('nav-belt');
      var navCart = document.getElementById('nav-cart');
      var ewcFlyout = document.getElementById('nav-flyout-ewc');
      var persistentClassOnBody = 'nav-ewc-persistent-hover nav-ewc-full-height-persistent-hover';
      var flyout = {};

      var getDocumentScrollTop = function() {
        return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      };

      var isWindow = function(obj) {
        return obj != null && obj === obj.window;
      };

      var getWindow = function(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
      };

      var getOffset = function(elem) {
        if (elem.getClientRects && !elem.getClientRects().length) {
          return {top: 0};
        }

        var rect = elem.getBoundingClientRect
          ? elem.getBoundingClientRect()
          : {top: 0};

        if (rect.width || rect.height) {
          var doc = elem.ownerDocument;
          var win = getWindow(doc);
          return {
            top: rect.top + win.pageYOffset - doc.documentElement.clientTop
          };
        }
        return rect;
      };

      flyout.align = function() {
        var newTop = getOffset(navbelt).top - getDocumentScrollTop();
        ewcFlyout.style.top = (newTop > 0 ? newTop + 'px' : 0);
      };

      flyout.hide = function() {
        isRTLEnabled
          ? (ewcFlyout.style.left = '')
          : (ewcFlyout.style.right = '');
      };

      if(typeof config.isCompactEWCRendered === 'undefined') {
        if (
          (config.isSmallScreenEnabled && viewportWidth() < 1400) ||
          (config.isCompactViewEnabled && viewportWidth() >= 1400)
        ) {
          config.isCompactEWCRendered = true;
          config.isEWCStateExpanded = true;
          config.url = config.url.replace("/gp/navcart/sidebar", "/cart/ewc/compact");
        } else {
          config.isCompactEWCRendered = false;
        }
      }

      var viewportQualifyForPersistent = function () {
        return (config.isCompactEWCRendered)
          ? true
          : viewportWidth() >= 1400;
      }

      flyout.hasQualifiedViewportForPersistent = viewportQualifyForPersistent;

      var getEWCRightOffset = function() {
        if (!config.isCompactEWCRendered) {
          return 0;
        }

        var $navbelt = document.getElementById('nav-belt');
        if ($navbelt === undefined || $navbelt === null) {
          return 0;
        }

        var EWCCompactViewWidth = (config.isWiderCompactEWCRendered  && viewportWidth() >= 1280) ? 130 : 100;
        var scrollLeft = (window.pageXOffset !== undefined)
          ? window.pageXOffset
          : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        var scrollXAxis = Math.abs(scrollLeft);
        var windowWidth = document.documentElement.clientWidth;
        var navbeltWidth = $navbelt.offsetWidth;
        var isPartOfNavbarNotVisible = (navbeltWidth + EWCCompactViewWidth) > windowWidth;

        if (isPartOfNavbarNotVisible) {
          return 0 - (navbeltWidth - scrollXAxis - windowWidth + EWCCompactViewWidth);
        } else {
          return 0;
        }
      }

      flyout.getEWCRightOffsetCssProperty = function () {
        return getEWCRightOffset() + 'px';
      }

      if (config.isCompactEWCRendered) {
        persistentClassOnBody = 'nav-ewc-persistent-hover nav-ewc-compact-view';
        if (config.isWiderCompactEWCRendered) { persistentClassOnBody += ' nav-ewc-wider-compact-view'; }
      }

      flyout.show = function() {
        isRTLEnabled
          ? (ewcFlyout.style.left = flyout.getEWCRightOffsetCssProperty())
          : (ewcFlyout.style.right = flyout.getEWCRightOffsetCssProperty());
      };

      var isIOSDevice = function() {
        return (/iPad|iPhone|iPod/.test(navigator.platform) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
                !window.MSStream;
      }

      var checkForPersistent = function() {
        if (!hasAui) {
          return { result: false, reason: 'noAui' };
        }
        if (!config.enablePersistent) {
          return { result: false, reason: 'config' };
        }
        if (!viewportQualifyForPersistent()) {
          return { result: false, reason: 'viewport' };
        }
        if (isIOSDevice()) {
          return { result: false, reason: 'iOS' };
        }
        if (!config.cartCount > 0) {
          return { result: false, reason: 'emptycart' };
        }
        return { result: true };
      };

      flyout.ableToPersist = function() {
        return checkForPersistent().result;
      };
      var persistentClassRegExp = '(?:^|\\s)' + persistentClassOnBody + '(?!\\S)';
      flyout.applyPageLayoutForPersistent = function() {
        if (!document.documentElement.className.match( new RegExp(persistentClassRegExp) )) {
          document.documentElement.className += ' ' + persistentClassOnBody;
        }
      };

      flyout.unapplyPageLayoutForPersistent = function() {
        document.documentElement.className = document.documentElement.className.replace( new RegExp(persistentClassRegExp, 'g'), '');
      };

      flyout.persist = function() {
        flyout.applyPageLayoutForPersistent();
        flyout.show();
        if (config.isCompactEWCRendered) {
          flyout.align();
        }
      };

      flyout.unpersist = function() {
        flyout.unapplyPageLayoutForPersistent();
        flyout.hide();
      };
      
      var persistentCheck = checkForPersistent();
    

      var resizeCallback = function() {
        
        if (flyout.ableToPersist()) {
          flyout.persist();
        }
        else {
          flyout.unpersist();
        }
      };

      flyout.bindEvents = function() {
        if (window.addEventListener) {
          window.addEventListener('resize', resizeCallback, false);
          
          if (config.isCompactEWCRendered) {
            window.addEventListener('scroll', flyout.align, false);
          }
        }
      };

      flyout.unbindEvents = function() {
        if (window.removeEventListener) {
          window.removeEventListener('resize', resizeCallback, false);
          
          if (config.isCompactEWCRendered) {
            window.removeEventListener('scroll', flyout.align, false);
          }
        }
      };
      
      var ewcDefaultPersistence = function() {
      
        if (persistentCheck.result) {
          flyout.persist();
          if (window.ue && ue.tag) {
            ue.tag('ewc:persist');
          }
        } else {
          if (window.ue && ue.tag) {
            ue.tag('ewc:unpersist');
            if (persistentCheck.reason === 'noAui') {
              ue.tag('ewc:unpersist:noAui');
            }
            if (persistentCheck.reason === 'viewport') {
              ue.tag('ewc:unpersist:viewport');
            }
            if (persistentCheck.reason === 'emptycart') {
              ue.tag('ewc:unpersist:emptycart');
            }
            if (persistentCheck.reason === 'iOS') {
              ue.tag('ewc:unpersist:iOS');
            }
          }
        }
      };
      
      ewcDefaultPersistence();
      
      if (window.ue && ue.tag)  {
        if (flyout.hasQualifiedViewportForPersistent()) {
          ue.tag('ewc:bview');
        }
        else {
          ue.tag('ewc:sview');
        }
      }
      flyout.bindEvents();
      flyout.cache = function () {
    const cache = window.sessionStorage;
    const CACHE_KEY = "EWCBrowserCacheKey";
    const CACHE_EXPIRY = "EWCBrowserCacheExpiry"; 
    const CACHE_VALUE = "EWCBrowserCacheValue"; 
    const isSessionStorageValid = function () {
        return window && cache && cache instanceof Storage;
    };
    const isCachePresent = function (key) {
        return cache.length > 0 && cache.getItem(key);
    }
    const isValidType = function (value) {
        // Prevents accessing empty key-value and internal methods(prototypes) of storage
        // TODO: Log metrics for invalid access;
        return value && value.constructor == String;
    }
    return {
        getCache: function (key) {
            const value = isCachePresent(key);
            return (isValidType(value)) ? value : null;
        },
        setCache: function (key, value) {
            const oldValue = isCachePresent(key);
            const cacheExpiryTime = isCachePresent(CACHE_EXPIRY);
            // Set the expiry when there's no existing cache - to prevent resetting expiry on page navigation
            if (!cacheExpiryTime) {
                var currentTime = new Date();
                cache.setItem(CACHE_EXPIRY, new Date(currentTime.getTime() + 5 * 60000))
            }
            // TODO: Log length of old and new cache values when logMetrics is true
            cache.setItem(key, value);
        },
        updateCacheAndEwcContainer: function (cacheKey, newEwcContent) {
            const $ = $Nav.getNow("$");
            const $currentEwc = $("#ewc-content");
            if (!$currentEwc.length) {
                var $content = $('#nav-flyout-ewc .nav-ewc-content');
                $content.html(newEwcContent);
                this.setCache(CACHE_KEY, cacheKey);
                if (window.ue && window.ue.count) {
                    var current = window.ue.count("ewc-init-cache") || 0;
                    window.ue.count("ewc-init-cache", current + 1);
                }
            } else {
                var $newEwcContent = $('<div />');
                var EWC_CONTENT_BODY_SCROLL_SELECTOR = ".ewc-scroller--selected";
                if (newEwcContent) { // 1. Updates EWC container with new HTML 
                    const $newEwcHtml = $newEwcContent.html(newEwcContent).find("#ewc-content");
                    const offSet = $currentEwc.find(EWC_CONTENT_BODY_SCROLL_SELECTOR).position().top - $currentEwc.find(".ewc-active-cart--selected").position().top;
                    $currentEwc.html($newEwcHtml.html());
                    $currentEwc.find(EWC_CONTENT_BODY_SCROLL_SELECTOR).scrollTop(offSet);
                    if (typeof window.uex === 'function') {
                        window.uex('ld', 'ewc-reflect-new-state', {wb: 1});
                    }
                } else {
                    // 2. Fetches cached response and updates it's html with new state on EWC Update
                    const cachedEwc = this.getCache(CACHE_VALUE);
                    $newEwcContent = $newEwcContent[0];
                    $(cachedEwc).map(function (elementIndex, element) {
                         $newEwcContent.appendChild((element.id === "ewc-content") ? $currentEwc.clone()[0] : element);
                    });
                    newEwcContent = $newEwcContent.innerHTML;
                    if (window.ue && window.ue.count) {
                        var current = window.ue.count("ewc-update-cache") || 0;
                        window.ue.count("ewc-update-cache", current + 1);
                    }
                }
                $newEwcContent.remove();
            }
            this.setCache(CACHE_VALUE, newEwcContent);
        },
        removeCache: function (key) {
            return cache.removeItem(key);
        }
    }
}
;
      return flyout;
    }());
     
     
     
const CACHE_KEY = "EWCBrowserCacheKey";
const CACHE_VALUE = "EWCBrowserCacheValue"; 
const CACHE_EXPIRY = "EWCBrowserCacheExpiry"; 
var cache = config.flyout.cache();

const isCacheValid = function () {
  // Check for page types and tenure of the cache
  const clearCache = config.clearCache;
  const cacheExpiryTime = cache.getCache(CACHE_EXPIRY);
  const isCacheExpired = new Date() > new Date(cacheExpiryTime);
  const cacheKey = config.EWCBrowserCacheKey;
  const oldCacheKey = cache.getCache(CACHE_KEY);
  const isCacheValid = !clearCache && !isCacheExpired && cacheKey == oldCacheKey;
  if (!isCacheValid && window.ue && window.ue.count) {
    var current = window.ue.count("ewc-cache-invalidated") || 0;
    window.ue.count("ewc-cache-invalidated", current + 1);
  }
  return isCacheValid;
}
function loadFromCache() {
    if (window.uet && typeof window.uet === 'function') {
        window.uet('bb', 'ewc-loaded-from-cache', {wb: 1});
    }
    if (cache) {
        if (isCacheValid()) {
            var content = cache.getCache(CACHE_VALUE);
            if (content) {
                var $ewcContainer = document.getElementById("nav-flyout-ewc").getElementsByClassName("nav-ewc-content")[0];
                var $ewcContent = document.getElementById("ewc-content");
                if ($ewcContainer && !$ewcContent) {
                    $ewcContainer.innerHTML = content;
                    // Execute scripts from cache
                    const ewcJavascript = document.getElementById("ewc-content").parentNode.querySelectorAll(':scope > script');
                    ewcJavascript.forEach(function (script) {
                        var scriptTag = document.createElement("script");
                        scriptTag.innerHTML = script.innerHTML;
                        document.body.appendChild(scriptTag);
                    });
                    if (typeof window.uex === 'function') {
                        window.uex('ld', 'ewc-loaded-from-cache', {wb: 1});
                    }
                } else if (window.ue && window.ue.count && typeof window.ue.count === 'function') {
                    var currentFailure = window.ue.count("ewc-slow-cache") || 0;
                    window.ue.count("ewc-slow-cache", currentFailure + 1);
                }
            }
        } else {
            cache.removeCache(CACHE_VALUE);
            cache.removeCache(CACHE_KEY);
            cache.removeCache(CACHE_EXPIRY);
        }
    }
}
function delayBy(delayTime) {
    if (delayTime) {
        window.setTimeout(function() {
            loadFromCache();
        }, delayTime)
    } else {
        loadFromCache();
    }
}
if(config.delayRenderingTillATF) {
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute("EverywhereCartLoadFromCacheOnAtf", function () {
        delayBy(config.loadFromCacheWithDelay);
    });
} else {
    delayBy(config.loadFromCacheWithDelay);
}

    return config;
  }()));

  if (typeof uet === 'function') {
    uet('x2', 'ewc', {wb: 1});
  }

  if (window.ue && ue.tag) {
    ue.tag('ewc');
    ue.tag('ewc:unrec');
    ue.tag('ewc:cartsize:0');

    if ( window.P && window.P.AUI_BUILD_DATE ) {
      ue.tag('ewc:aui');
    } else {
      ue.tag('ewc:noAui');
    }
  }
}());
</script>
  </div>

  
  

</header>


<script type='text/javascript'>window.navmet.push({key:'NavBar',end:+new Date(),begin:window.navmet.main});</script>


<script type="text/javascript">
  if (window.ue_t0) {
    window.navmet.push({key:"NavMainPaintEnd",end:+new Date(),begin:window.ue_t0});
    window.navmet.push({key:"NavFirstPaintEnd",end:+new Date(),begin:window.ue_t0});
  }
</script>


<script type='text/javascript'>
    <!--
    window.$Nav && $Nav.declare('config.fixedBarBeacon',false);
    window.$Nav && $Nav.when("data").run(function(data) { data({"freshTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<style>#nav-flyout-fresh{width:269px;padding:0;}#nav-flyout-fresh .nav-flyout-content{padding:0;}</style><a href='/amazonfresh'><img src='https://images-eu.ssl-images-amazon.com/images/G/02/omaha/images/yoda/flyout_72dpi._V270092858_.png' /></a>"}}}},"cartTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Cart","url":"/gp/cart/view.html?ref_=nav_err_cart_timeout"},"title":"Oops!","paragraph":"There is a problem loading your cart right now"}}}},"primeTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<a href='/gp/prime?ref_=nav_prime_btn_fb'><img src='https://images-eu.ssl-images-amazon.com/images/G/02/prime/yourprime/yourprime-widget-piv-fallback._V310089192_.jpg' /></a>"}}}},"ewcTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Cart","url":"/gp/cart/view.html?ref_=nav_err_ewc_timeout"},"title":"Oops!","paragraph":"There is a problem loading your cart right now"}}}},"errorWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Wish List","url":"/gp/registry/wishlist/?ref_=nav_err_wishlist"},"title":"Oops!","paragraph":"There is a problem retrieving the list right now"}}}},"emptyWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Wish List","url":"/gp/registry/wishlist/?ref_=nav_err_empty_wishlist"},"title":"Oops!","paragraph":"Your list is empty"}}}},"yourAccountContent":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Your Account","url":"/gp/css/homepage.html?ref_=nav_err_youraccount"},"title":"Oops!","paragraph":"There is a problem retrieving the list right now"}}}},"shopAllTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"There is a problem retrieving the list right now"}}}},"kindleTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"There is a problem retrieving the list right now"}}}}}); });
window.$Nav && $Nav.when("util.templates").run("FlyoutErrorTemplate", function(templates) {
      templates.add("flyoutError", "<# if(error.title) { #><span class='nav-title'><#=error.title #></span><# } #><# if(error.paragraph) { #><p class='nav-paragraph'><#=error.paragraph #></p><# } #><# if(error.button) { #><a href='<#=error.button.url #>' class='nav-action-button' ><span class='nav-action-inner'><#=error.button.text #></span></a><# } #>");
    });

    if (typeof uet == 'function') {
    uet('bb', 'iss-init-pc', {wb: 1});
  }
  if (!window.$SearchJS && window.$Nav) {
    window.$SearchJS = $Nav.make('sx');
  }

  var opts = {
    host: "completion.amazon.co.uk/search/complete"
  , marketId: "44571"
  , obfuscatedMarketId: "A21TJRUUN4KGV"
  , searchAliases: ["aps","amazonfresh","amazon-devices","stripbooks","audible","computers","digital-text","dvd","instant-video","electronics","hpc","kitchen","furniture","popular","software","videogames","toys","beauty","baby","watches","jewelry","luggage","mobile-apps","apparel","shoes","sporting","gift-cards","grocery","mi","office-products","pets","automotive","industrial","fashion","fashion-baby","fashion-baby-boys","fashion-baby-girls","fashion-boys","fashion-boys-clothing","fashion-boys-jewelry","fashion-boys-shoes","fashion-boys-watches","fashion-girls","fashion-girls-clothing","fashion-girls-jewelry","fashion-girls-shoes","fashion-girls-watches","fashion-luggage","fashion-mens","fashion-mens-clothing","fashion-mens-jewelry","fashion-mens-shoes","fashion-mens-watches","fashion-womens","fashion-womens-clothing","fashion-womens-handbags","fashion-womens-jewelry","fashion-womens-shoes","fashion-womens-watches","appliances","pantry","lawngarden","local-services","luxury-beauty","nowstore","more","bigbazaar","home-improvement","alexa-skills","collectibles","todays-deals","under-ten-dollars","specialty-aps-sns"]
  , filterAliases: []
  , pageType: "APBBrowse"
  , requestId: "MSP1CEGF2FMZQD91DMJG"
  , sessionId: "257-9804433-6210519"
  , language: "en_IN"
  , customerId: ""
  , asin: ""
  , b2b: 0
  , fresh: 0
  , isJpOrCn: 0
  , isUseAuiIss: 1
};

var issOpts = {
    fallbackFlag: 1
  , isDigitalFeaturesEnabled: 0
  , isWayfindingEnabled: 0
  , dropdown: "select.searchSelect"
  , departmentText: "in {department}"
  , suggestionText: "Search suggestions"
  , recentSearchesTreatment: "C"
  , authorSuggestionText: "all books by {author}"
  , translatedStringsMap: {"sx-recent-searches":"Recent searches","sx-your-recent-search":"Inspired by your recent search"}
  , biaTitleText: ""
  , biaPurchasedText: ""
  , biaViewAllText: ""
  , biaViewAllManageText: ""
  , biaAndText: ""
  , biaManageText: ""
  , biaWeblabTreatment: ""
  , issNavConfig: {}
  , np: 0
  , issCorpus: []
  , cf: 1
  , removeDeepNodeISS: ""
  , trendingTreatment: "C"
  , useAPIV2: ""
  , opfSwitch: ""
  , isISSDesktopRefactorEnabled: "1"
  , useServiceHighlighting: "true"
  , isInternal: 0
  , isAPICachingDisabled: true
  , isBrowseNodeScopingEnabled: false
  , isStorefrontTemplateEnabled: false
  , disableAutocompleteOnFocus: ""
};

  if (opts.isUseAuiIss === 1 && window.$Nav) {
  window.$Nav.when('sx.iss').run('iss-mason-init', function(iss){
    var issInitObj = buildIssInitObject(opts, issOpts, true);
    new iss.IssParentCoordinator(issInitObj);

    $SearchJS.declare('canCreateAutocomplete', issInitObj);
  });
} else if (window.$SearchJS) {
  var iss;

  // BEGIN Deprecated globals
  var issHost = opts.host
    , issMktid = opts.marketId
    , issSearchAliases = opts.searchAliases
    , updateISSCompletion = function() { iss.updateAutoCompletion(); };
  // END deprecated globals


  $SearchJS.when('jQuery', 'search-js-autocomplete-lib').run('autocomplete-init', initializeAutocomplete);
  $SearchJS.when('canCreateAutocomplete').run('createAutocomplete', createAutocomplete);

} // END conditional for window.$SearchJS
  function initializeAutocomplete(jQuery) {
  var issInitObj = buildIssInitObject(opts, issOpts);
  $SearchJS.declare("canCreateAutocomplete", issInitObj);
} // END initializeAutocomplete
  function initSearchCsl(searchCSL, issInitObject) {
  searchCSL.init(
    opts.pageType,
    (window.ue && window.ue.rid) || opts.requestId
  );
  $SearchJS.declare("canCreateAutocomplete", issInitObject);
} // END initSearchCsl
  function createAutocomplete(issObject) {
  iss = new AutoComplete(issObject);

  $SearchJS.publish("search-js-autocomplete", iss);

  logMetrics();
} // END createAutocomplete
  function buildIssInitObject(opts, issOpts, isNewIss) {
    var issInitObj = {
        src: opts.host
      , sessionId: opts.sessionId
      , requestId: opts.requestId
      , mkt: opts.marketId
      , obfMkt: opts.obfuscatedMarketId
      , pageType: opts.pageType
      , language: opts.language
      , customerId: opts.customerId
      , fresh: opts.fresh
      , b2b: opts.b2b
      , aliases: opts.searchAliases
      , fb: issOpts.fallbackFlag
      , isDigitalFeaturesEnabled: issOpts.isDigitalFeaturesEnabled
      , isWayfindingEnabled: issOpts.isWayfindingEnabled
      , issPrimeEligible: issOpts.issPrimeEligible
      , deptText: issOpts.departmentText
      , sugText: issOpts.suggestionText
      , filterAliases: opts.filterAliases
      , biaWidgetUrl: opts.biaWidgetUrl
      , recentSearchesTreatment: issOpts.recentSearchesTreatment
      , authorSuggestionText: issOpts.authorSuggestionText
      , translatedStringsMap: issOpts.translatedStringsMap
      , biaTitleText: ""
      , biaPurchasedText: ""
      , biaViewAllText: ""
      , biaViewAllManageText: ""
      , biaAndText: ""
      , biaManageText: ""
      , biaWeblabTreatment: ""
      , issNavConfig: issOpts.issNavConfig
      , cf: issOpts.cf
      , ime: opts.isJpOrCn
      , mktid: opts.marketId
      , qs: opts.isJpOrCn
      , issCorpus: issOpts.issCorpus
      , deepNodeISS: {
          searchAliasAccessor: function($) {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAlias()) ||
                   $('select.searchSelect').children().attr('data-root-alias');
          },
          searchAliasDisplayNameAccessor: function() {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAliasDisplayName());
          }
        }
      , removeDeepNodeISS: issOpts.removeDeepNodeISS
      , trendingTreatment: issOpts.trendingTreatment
      , useAPIV2: issOpts.useAPIV2
      , opfSwitch: issOpts.opfSwitch
      , isISSDesktopRefactorEnabled: issOpts.isISSDesktopRefactorEnabled
      , useServiceHighlighting: issOpts.useServiceHighlighting
      , isInternal: issOpts.isInternal
      , isAPICachingDisabled: issOpts.isAPICachingDisabled
      , isBrowseNodeScopingEnabled: issOpts.isBrowseNodeScopingEnabled
      , isStorefrontTemplateEnabled: issOpts.isStorefrontTemplateEnabled
      , disableAutocompleteOnFocus: issOpts.disableAutocompleteOnFocus
      , asin: opts.asin
    };
  
    // If we aren't using the new ISS then we need to add these properties
    
    if (!isNewIss) {
      issInitObj.dd = issOpts.dropdown; // The element with id searchDropdownBox doesn't exist in C.
      issInitObj.imeSpacing = issOpts.imeSpacing;
      issInitObj.isNavInline = 1;
      issInitObj.triggerISSOnClick = 0;
      issInitObj.sc = 1;
      issInitObj.np = issOpts.np;
    }
  
    return issInitObj;
  } // END buildIssInitObject
  function logMetrics() {
  if (typeof uet == 'function' && typeof uex == 'function') {
      uet('be', 'iss-init-pc',
          {
              wb: 1
          });
      uex('ld', 'iss-init-pc',
          {
              wb: 1
          });
  }
} // END logMetrics
  
    
window.$Nav && $Nav.declare('config.navDeviceType','desktop');

window.$Nav && $Nav.declare('config.navDebugHighres',false);

window.$Nav && $Nav.declare('config.pageType','APBBrowse');
window.$Nav && $Nav.declare('config.subPageType','null');

window.$Nav && $Nav.declare('config.dynamicMenuUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdynamic\x2Dmenu.html');

window.$Nav && $Nav.declare('config.dismissNotificationUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Fdismissnotification.html');

window.$Nav && $Nav.declare('config.enableDynamicMenus',true);

window.$Nav && $Nav.declare('config.isInternal',false);

window.$Nav && $Nav.declare('config.isBackup',false);

window.$Nav && $Nav.declare('config.isRecognized',false);

window.$Nav && $Nav.declare('config.transientFlyoutTrigger','\x23nav\x2Dtransient\x2Dflyout\x2Dtrigger');

window.$Nav && $Nav.declare('config.subnavFlyoutUrl','\x2Fnav\x2Fajax\x2FsubnavFlyout');
window.$Nav && $Nav.declare('config.isSubnavFlyoutMigrationEnabled',true);

window.$Nav && $Nav.declare('config.recordEvUrl','\x2Fgp\x2Fnavigation\x2Fajax\x2Frecordevent.html');
window.$Nav && $Nav.declare('config.recordEvInterval',15000);
window.$Nav && $Nav.declare('config.sessionId','257\x2D9804433\x2D6210519');
window.$Nav && $Nav.declare('config.requestId','MSP1CEGF2FMZQD91DMJG');

window.$Nav && $Nav.declare('config.alexaListEnabled',true);

window.$Nav && $Nav.declare('config.readyOnATF',false);

window.$Nav && $Nav.declare('config.dynamicMenuArgs',{"rid":"MSP1CEGF2FMZQD91DMJG","isFullWidthPrime":0,"isPrime":0,"dynamicRequest":1,"weblabs":"","isFreshRegionAndCustomer":"","primeMenuWidth":310});

window.$Nav && $Nav.declare('config.customerName',false);

window.$Nav && $Nav.declare('config.customerCountryCode','IN');

window.$Nav && $Nav.declare('config.yourAccountPrimeURL',null);

window.$Nav && $Nav.declare('config.yourAccountPrimeHover',true);

window.$Nav && $Nav.declare('config.searchBackState',{});

window.$Nav && $Nav.declare('nav.inline');

(function (i) {
  if(window._navbarSpriteUrl) {
    i.onload = function() {window.uet && uet('ne')};
    i.src = window._navbarSpriteUrl;
  }
}(new Image()));

window.$Nav && $Nav.declare('config.autoFocus',false);

window.$Nav && $Nav.declare('config.responsiveTouchAgents',["ieTouch"]);

window.$Nav && $Nav.declare('config.responsiveGW',false);

window.$Nav && $Nav.declare('config.pageHideEnabled',false);

window.$Nav && $Nav.declare('config.sslTriggerType','null');
window.$Nav && $Nav.declare('config.sslTriggerRetry',0);

window.$Nav && $Nav.declare('config.doubleCart',false);

window.$Nav && $Nav.declare('config.signInOverride',true);

window.$Nav && $Nav.declare('config.signInTooltip',true);

window.$Nav && $Nav.declare('config.isPrimeMember',false);

window.$Nav && $Nav.declare('config.packardGlowTooltip',false);

window.$Nav && $Nav.declare('config.packardGlowFlyout',false);

window.$Nav && $Nav.declare('config.rightMarginAlignEnabled',true);

window.$Nav && $Nav.declare('config.flyoutAnimation',false);

window.$Nav && $Nav.declare('config.campusActivation','null');

window.$Nav && $Nav.declare('config.primeTooltip',false);

window.$Nav && $Nav.declare('config.primeDay',false);

window.$Nav && $Nav.declare('config.disableBuyItAgain',false);

window.$Nav && $Nav.declare('config.enableCrossShopBiaFlyout',false);

window.$Nav && $Nav.declare('config.pseudoPrimeFirstBrowse',null);

window.$Nav && $Nav.declare('config.sdaYourAccount',false);

window.$Nav && $Nav.declare('config.csYourAccount',false);

window.$Nav && $Nav.declare('config.cartFlyoutDisabled',true);

window.$Nav && $Nav.declare('config.isTabletBrowser',false);

window.$Nav && $Nav.declare('config.HmenuProximityArea',[200,200,200,200]);

window.$Nav && $Nav.declare('config.HMenuIsProximity',true);

window.$Nav && $Nav.declare('config.isPureAjaxALF',false);

window.$Nav && $Nav.declare('config.accountListFlyoutRedesign',false);

window.$Nav && $Nav.declare('config.navfresh',false);

window.$Nav && $Nav.declare('config.isFreshRegion',false);

if (window.ue && ue.tag) { ue.tag('navbar'); };

window.$Nav && $Nav.declare('config.blackbelt',true);

window.$Nav && $Nav.declare('config.beaconbelt',true);

window.$Nav && $Nav.declare('config.accountList',true);

window.$Nav && $Nav.declare('config.iPadTablet',false);

window.$Nav && $Nav.declare('config.searchapiEndpoint',false);

window.$Nav && $Nav.declare('config.timeline',false);

window.$Nav && $Nav.declare('config.timelineAsinPriceEnabled',false);

window.$Nav && $Nav.declare('config.timelineDeleteEnabled',false);



window.$Nav && $Nav.declare('config.extendedFlyout',false);

window.$Nav && $Nav.declare('config.flyoutCloseDelay',600);

window.$Nav && $Nav.declare('config.pssFlag',0);

window.$Nav && $Nav.declare('config.isPrimeTooltipMigrated',false);

window.$Nav && $Nav.declare('config.hashCustomerAndSessionId','2282596a6ffe4466914200b3b845f9b6f2f3bff9');

window.$Nav && $Nav.declare('config.isExportMode',false);

window.$Nav && $Nav.declare('config.languageCode','en_IN');

window.$Nav && $Nav.declare('config.environmentVFI','AmazonNavigationCards\x2Fdevelopment\x40B6173718910\x2DAL2_x86_64');

window.$Nav && $Nav.declare('config.isHMenuBrowserCacheDisable',false);

window.$Nav && $Nav.declare('config.signInUrlWithRefTag','https\x3A\x2F\x2Fwww.amazon.in\x2Fap\x2Fsignin\x3Fopenid.pape.max_auth_age\x3D0\x26openid.return_to\x3Dhttps\x253A\x252F\x252Fwww.amazon.in\x252Fb\x252F\x253F_encoding\x253DUTF8\x2526node\x253D16192220031\x2526ref_\x253DnavSignInUrlRefTagPlaceHolder\x26openid.identity\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0\x252Fidentifier_select\x26openid.assoc_handle\x3Dinflex\x26openid.mode\x3Dcheckid_setup\x26openid.claimed_id\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0\x252Fidentifier_select\x26openid.ns\x3Dhttp\x253A\x252F\x252Fspecs.openid.net\x252Fauth\x252F2.0');

window.$Nav && $Nav.declare('config.regionalStores',[]);

window.$Nav && $Nav.declare('config.isALFRedesignPT2',false);

window.$Nav && $Nav.declare('config.isNavALFRegistryGiftList',false);

window.$Nav && $Nav.declare('config.marketplaceId','A21TJRUUN4KGV');

window.$Nav && $Nav.declare('config.exportTransitionState','none');

window.$Nav && $Nav.declare('config.enableAeeXopFlyout',false);

window.$Nav && $Nav.declare('config.isPrimeFlyoutMigrationEnabled',false);

window.$Nav && $Nav.declare('config.isAjaxMigrated',true);

window.$Nav && $Nav.declare('config.isAjaxPaymentNotificationMigrated',false);

window.$Nav && $Nav.declare('config.isAjaxPaymentSuppressNotificationMigrated',false);

if (window.P && typeof window.P.declare === "function" && typeof window.P.now === "function") {
  window.P.now('packardGlowIngressJsEnabled').execute(function(glowEnabled) {
    if (!glowEnabled) {
      window.P.declare('packardGlowIngressJsEnabled', true);
    }
  });
  window.P.now('packardGlowStoreName').execute(function(storeName) {
    if (!storeName) {
      window.P.declare('packardGlowStoreName','generic');
    }
  });
}

window.$Nav && $Nav.declare('configComplete');

    -->
</script>


<a id="skippedLink" tabindex="-1"></a>

<script type='text/javascript'>window.navmet.MainEnd = new Date();</script>
<script type="text/javascript">
    if (window.ue_t0) {
      window.navmet.push({key:"NavMainEnd",end:+new Date(),begin:window.ue_t0});
    }
</script>
<!-- sp:end-feature:navbar -->
<!-- sp:feature:host-atf -->

















<style type="text/css">
    .octopus-page-style {
        
    }
</style>









  <script type="text/javascript">
    if (typeof uet == 'function') {
        uet('af');
    }
</script>


<!-- Registering CriticalFeatures to make sure our Nav JS is loaded. -->
<script>
    window.P.register('cf');
</script>
<!-- sp:end-feature:host-atf -->
<!-- sp:feature:nav-btf -->
<!-- NAVYAAN BTF START -->






  <script type='text/javascript'>(function ($Nav) {
"use strict";

if (typeof $Nav === 'undefined' || $Nav === null || typeof $Nav.when !== 'function') {
    return;
}

$Nav.when('$', 'data', 'flyout.yourAccount', 'sidepanel.csYourAccount',
          'config')
    .run("BuyitAgain-YourAccount-SidePanel",
    function ($, data, yaFlyout, csYourAccount, config) {
        if (config.disableBuyItAgain) {
            return;
        }
        var render = function (data) {
            if (data.dramResult) {
                var widgetHtml = data.dramResult;
                navbar.sidePanel({
                    flyoutName: 'yourAccount',
                    data: {html: widgetHtml}
                });
            }
        };

        var renderBuyItAgain = function (biaData) {
            if (csYourAccount) {
                csYourAccount.register(render, biaData);
            } else {
                render(biaData);
            }
        };

        var truncateAndRestructureYaFlyout = function() {
            if (window.P) {
                P.when('A', 'a-truncate').execute(function(A, truncate) {
                    var truncateElements = A.$('.a-truncate');
                    A.each(truncateElements, function(element) {
                        truncate.get(element).update();
                    });
                    var recommendationsWidget = document.getElementById('bia-hcb-widget');
                    if (recommendationsWidget) { 
                        var navFlyout = recommendationsWidget.parentElement;
                        var navFlyoutPaddingBottom = parseInt(window.getComputedStyle(navFlyout).getPropertyValue('padding-bottom'));
                        var navFlyoutContentHeight = navFlyout.clientHeight - navFlyoutPaddingBottom;
                        while (recommendationsWidget.offsetHeight > navFlyoutContentHeight && recommendationsWidget.offsetHeight > 0){
                            var recommendations = recommendationsWidget.querySelectorAll('.biaNavFlyoutFaceout');
                            if (recommendations.length <= 1) {
                                break;
                            }
                            var lastRecommendation = recommendations[recommendations.length - 1];
                            lastRecommendation.parentElement.removeChild(lastRecommendation);
                        }
                    }
               });
            }
        };

        yaFlyout.sidePanel.onData(truncateAndRestructureYaFlyout);
        yaFlyout.onShow(truncateAndRestructureYaFlyout);

    yaFlyout.onRender(function() {
            $.ajax({
                url: '/gp/bia/external/bia-hcb-ajax-handler.html',
                data: {"biaHcbRid":"MSP1CEGF2FMZQD91DMJG"},
                dataType: 'json',
                timeout: 4*1000,
                success: renderBuyItAgain,
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        });
    });
})(window.$Nav);</script>


<script type="text/javascript">
  window.$Nav && $Nav.when("data").run(function (data) {
    data({
      "accountListContent": { "html": "<div id='nav-al-container'><div id='nav-al-signin'><div id='nav-flyout-ya-signin' class='nav-flyout-content nav-flyout-accessibility'><a href='https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fb%2F%3F_encoding%3DUTF8%26node%3D16192220031%26ref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0' rel='nofollow' class='nav-action-signin-button' data-nav-role='signin' data-nav-ref='nav_signin'><span class='nav-action-inner'>Sign in</span></a><div id='nav-flyout-ya-newCust' class='nav_pop_new_cust nav-flyout-content nav-flyout-accessibility'>New customer? <a href='https://www.amazon.in/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fb%2F%3F_encoding%3DUTF8%26node%3D16192220031%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0' rel='nofollow' class='nav-a'>Start here.</a></div></div></div><div id='nav-al-wishlist' class='nav-al-column nav-tpl-itemList nav-flyout-content nav-flyout-accessibility'><div class='nav-title' id='nav-al-title'>Your Lists</div><a href='/hz/wishlist/ls?triggerElementID=createList&ref_=nav_ListFlyout_navFlyout_createList_lv_redirect' class='nav-link nav-item'><span class='nav-text'>Create a Wish List</span></a> <a href='/wishlist/universal?ref_=nav_ListFlyout_gno_listpop_uwl' class='nav-link nav-item'><span class='nav-text'>Wish from Any Website</span></a> <a href='/baby-reg/homepage?ref_=nav_ListFlyout_gno_listpop_br' class='nav-link nav-item'><span class='nav-text'>Baby Wishlist</span></a> <a href='/discover/?ref_=nav_ListFlyout_sbl' class='nav-link nav-item'><span class='nav-text'>Discover Your Style</span></a> <a href='/showroom?ref_=nav_ListFlyout_srm_your_desk_wl_in' class='nav-link nav-item'><span class='nav-text'>Explore Showroom</span></a></div><div id='nav-al-your-account' class='nav-al-column nav-template nav-flyout-content nav-tpl-itemList nav-flyout-accessibility'><div class='nav-title'>Your Account</div><a href='/gp/css/homepage.html?ref_=nav_AccountFlyout_ya' class='nav-link nav-item'><span class='nav-text'>Your Account</span></a> <a id='nav_prefetch_yourorders' href='/gp/css/order-history?ref_=nav_AccountFlyout_orders' class='nav-link nav-item'><span class='nav-text'>Your Orders</span></a> <a href='/hz/wishlist/ls?requiresSignIn=1&ref_=nav_AccountFlyout_wl' class='nav-link nav-item'><span class='nav-text'>Your Wish List</span></a> <a href='/gp/yourstore?ref_=nav_AccountFlyout_recs' class='nav-link nav-item'><span class='nav-text'>Your Recommendations</span></a> <a href='/gp/primecentral?ref_=nav_AccountFlyout_prime' class='nav-link nav-item'><span class='nav-text'>Your Prime Membership</span></a> <a href='/gp/redirect.html?location=https%3A%2F%2Fwww.primevideo.com%2F%3Fref_%3D_apv&source=nav_linktree&token=13D4F90D28CD96790B94E6091246BB1B2AE9FA05' class='nav-link nav-item'><span class='nav-text'>Your Prime Video</span></a> <a href='/auto-deliveries?ref_=nav_AccountFlyout_sns' class='nav-link nav-item'><span class='nav-text'>Your Subscribe & Save Items</span></a> <a href='/hz5/yourmembershipsandsubscriptions?ref_=nav_AccountFlyout_digital_subscriptions' class='nav-link nav-item'><span class='nav-text'>Memberships & Subscriptions</span></a> <a href='/b/?node=2838698031&ld=AZINSOAYAFlyout&ref_=nav_AccountFlyout_sell' class='nav-link nav-item'><span class='nav-text'>Your Seller Account</span></a> <a href='/hz/mycd/myx?pageType=content&ref_=nav_AccountFlyout_myk' class='nav-link nav-item'><span class='nav-text'>Manage Your Content and Devices</span></a> <a href='/gp/browse.html?node=21102587031&ref_=nav_ya_flyout_b2b_reg_bottom' class='nav-link nav-item'><span class='nav-text'>Your Free Amazon Business Account</span></a></div></div>" },
      "tooltipContent": { "html": "" },
      "signinContent": { "html": "<div id='nav-signin-tooltip'><a href='https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fb%2F%3F_encoding%3DUTF8%26node%3D16192220031%26ref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0' class='nav-action-signin-button' data-nav-role='signin' data-nav-ref='nav_custrec_signin'><span class='nav-action-inner'>Sign in</span></a><div class='nav-signin-tooltip-footer'>New customer? <a href='https://www.amazon.in/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fb%2F%3F_encoding%3DUTF8%26node%3D16192220031%26ref_%3Dnav_custrec_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0' class='nav-a'>Start here.</a></div></div>" },
      "templates": {"itemList":"<# var hasColumns = (function () {  var checkColumns = function (_items) {    if (!_items) {      return false;    }    for (var i=0; i<_items.length; i++) {      if (_items[i].columnBreak || (_items[i].items && checkColumns(_items[i].items))) {        return true;      }    }    return false;  };  return checkColumns(items);}()); #><# if(hasColumns) { #>  <# if(items[0].image && items[0].image.src) { #>    <div class='nav-column nav-column-first nav-column-image'>  <# } else if (items[0].greeting) { #>    <div class='nav-column nav-column-first nav-column-greeting'>  <# } else { #>    <div class='nav-column nav-column-first'>  <# } #><# } #><# var renderItems = function(items) { #>  <# jQuery.each(items, function (i, item) { #>    <# if(hasColumns && item.columnBreak) { #>      <# if(item.image && item.image.src) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-image'>      <# } else if (item.greeting) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-greeting'>      <# } else { #>        </div><div class='nav-column nav-column-notfirst nav-column-break'>      <# } #>    <# } #>    <# if(item.dividerBefore) { #>      <div class='nav-divider'></div>    <# } #>    <# if(item.text || item.content) { #>      <# if(item.url) { #>        <a href='<#=item.url #>' class='nav-link      <# } else {#>        <span class='      <# } #>      <# if(item.panelKey) { #>        nav-hasPanel      <# } #>      <# if(item.items) { #>        nav-title      <# } #>      <# if(item.decorate == 'carat') { #>        nav-carat      <# } #>      <# if(item.decorate == 'nav-action-button') { #>        nav-action-button      <# } #>      nav-item'      <# if(item.extra) { #>        <#=item.extra #>      <# } #>      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      <# if(item.dataNavRole) { #>        data-nav-role='<#=item.dataNavRole #>'      <# } #>      <# if(item.dataNavRef) { #>        data-nav-ref='<#=item.dataNavRef #>'      <# } #>      <# if(item.panelKey) { #>        data-nav-panelkey='<#=item.panelKey #>'        role='navigation'        aria-label='<#=item.text#>'      <# } #>      <# if(item.subtextKey) { #>        data-nav-subtextkey='<#=item.subtextKey #>'      <# } #>      <# if(item.image && item.image.height > 16) { #>        style='line-height:<#=item.image.height #>px;'      <# } #>      >      <# if(item.decorate == 'carat') { #>        <i class='nav-icon'></i>      <# } #>      <# if(item.image && item.image.src) { #>        <img class='nav-image' src='<#=item.image.src #>' style='height:<#=item.image.height #>px; width:<#=item.image.width #>px;' />      <# } #>      <# if(item.text) { #>        <span class='nav-text<# if(item.classname) { #> <#=item.classname #><# } #>'><#=item.text#><# if(item.badgeText) { #>          <span class='nav-badge'><#=item.badgeText#></span>        <# } #></span>      <# } else if (item.content) { #>        <span class='nav-content'><# jQuery.each(item.content, function (j, cItem) { #><# if(cItem.url && cItem.text) { #><a href='<#=cItem.url #>' class='nav-a'><#=cItem.text #></a><# } else if (cItem.text) { #><#=cItem.text#><# } #><# }); #></span>      <# } #>      <# if(item.subtext) { #>        <span class='nav-subtext'><#=item.subtext #></span>      <# } #>      <# if(item.url) { #>        </a>      <# } else {#>        </span>      <# } #>    <# } #>    <# if(item.image && item.image.src) { #>      <# if(item.url) { #>        <a href='<#=item.url #>'>       <# } #>      <img class='nav-image'      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      src='<#=item.image.src #>' <# if (item.alt) { #> alt='<#= item.alt #>'<# } #>/>      <# if(item.url) { #>        </a>       <# } #>    <# } #>    <# if(item.items) { #>      <div class='nav-panel'> <# renderItems(item.items); #> </div>    <# } #>  <# }); #><# }; #><# renderItems(items); #><# if(hasColumns) { #>  </div><# } #>","subnav":"<# if (obj && obj.type === 'vertical') { #>  <# jQuery.each(obj.rows, function (i, row) { #>    <# if (row.flyoutElement === 'button') { #>      <div class='nav_sv_fo_v_button'        <# if (row.elementStyle) { #>          style='<#= row.elementStyle #>'        <# } #>      >        <a href='<#=row.url #>' class='nav-action-button nav-sprite'>          <#=row.text #>        </a>      </div>    <# } else if (row.flyoutElement === 'list' && row.list) { #>      <# jQuery.each(row.list, function (j, list) { #>        <div class='nav_sv_fo_v_column <#=(j === 0) ? 'nav_sv_fo_v_first' : '' #>'>          <ul class='<#=list.elementClass #>'>          <# jQuery.each(list.linkList, function (k, link) { #>            <# if (k === 0) { link.elementClass += ' nav_sv_fo_v_first'; } #>            <li class='<#=link.elementClass #>'>              <# if (link.url) { #>                <a href='<#=link.url #>' class='nav_a'><#=link.text #></a>              <# } else { #>                <span class='nav_sv_fo_v_span'><#=link.text #></span>              <# } #>            </li>          <# }); #>          </ul>        </div>      <# }); #>    <# } else if (row.flyoutElement === 'link') { #>      <# if (row.topSpacer) { #>        <div class='nav_sv_fo_v_clear'></div>      <# } #>      <div class='<#=row.elementClass #>'>        <a href='<#=row.url #>' class='nav_sv_fo_v_lmargin nav_a'>          <#=row.text #>        </a>      </div>    <# } #>  <# }); #><# } else if (obj) { #>  <div class='nav_sv_fo_scheduled'>    <#= obj #>  </div><# } #>","htmlList":"<# jQuery.each(items, function (i, item) { #>  <div class='nav-item'>    <#=item #>  </div><# }); #>"}
    })
  })
</script>

<script type="text/javascript">
  window.$Nav && $Nav.declare('config.flyoutURL', null);
  window.$Nav && $Nav.declare('btf.lite');
  window.$Nav && $Nav.declare('btf.full');
  window.$Nav && $Nav.declare('btf.exists');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).register('navCF');
</script>

<!-- NAVYAAN BTF END -->
<!-- sp:end-feature:nav-btf -->
<!-- sp:feature:host-btf -->
<!-- sp:end-feature:host-btf -->
<!-- sp:feature:aui-preload -->
<!-- sp:end-feature:aui-preload -->
<!-- sp:feature:nav-footer -->

  <!-- NAVYAAN FOOTER START -->
  <!-- WITH MOZART -->

<div id='rhf' class='copilot-secure-display' style='clear: both;' role='complementary' aria-label='Your recently viewed items and featured recommendations'> <div class='rhf-frame' style='display: none;'> <br> <div id='rhf-container'> <div class='rhf-loading-outer'> <table class='rhf-loading-middle'> <tr> <td class='rhf-loading-inner'> <img src='https://m.media-amazon.com/images/G/31/personalization/ybh/loading-4x-gray._CB485916689_.gif'> </td> </tr> </table> </div> <div id='rhf-context'> <script type='application/json'> { "rhfHandlerParams":{"currentPageType":"APBBrowse","currentSubPageType":"","excludeAsin":"","fieldKeywords":"","k":"","keywords":"","search":"","auditEnabled":"","previewCampaigns":"","forceWidgets":"","searchAlias":""} } </script> </div> </div> <noscript> <div class='rhf-border'> <div class='rhf-header'> Your recently viewed items and featured recommendations </div> <div class='rhf-footer'> <div class='rvi-container'> <div class='ybh-edit'> <div class='ybh-edit-arrow'> &#8250; </div> <div class='ybh-edit-link'> <a href='/gp/history'> View or edit your browsing history </a> </div> </div> <span class='no-rvi-message'> After viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in. </span> </div> </div> </div> </noscript> <div id='rhf-error' style='display: none;'> <div class='rhf-border'> <div class='rhf-header'> Your recently viewed items and featured recommendations </div> <div class='rhf-footer'> <div class='rvi-container'> <div class='ybh-edit'> <div class='ybh-edit-arrow'> &#8250; </div> <div class='ybh-edit-link'> <a href='/gp/history'> View or edit your browsing history </a> </div> </div> <span class='no-rvi-message'> After viewing product detail pages, look here to find an easy way to navigate back to pages you are interested in. </span> </div> </div> </div> </div> <br> </div> </div>
<div class="navLeftFooter nav-sprite-v1" id="navFooter">
  
<a href="javascript:void(0)" id="navBackToTop" aria-label="Back to top" >
  <div class="navFooterBackToTop">
  <span class="navFooterBackToTopText">
    Back to top
  </span>
  </div>
</a>

  
<div class="navFooterVerticalColumn navAccessibility" role="presentation">
  <div class="navFooterVerticalRow navAccessibility" style="display: table-row;">
        <div class="navFooterLinkCol navAccessibility">
          <div class="navFooterColHead">Get to Know Us</div>
        <ul>
            <li class="nav_first">
              <a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer" class="nav_a">About Us</a>
            </li>
            <li >
              <a href="https://amazon.jobs" class="nav_a">Careers</a>
            </li>
            <li >
              <a href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer" class="nav_a">Press Releases</a>
            </li>
            <li class="nav_last ">
              <a href="https://www.amazon.science" class="nav_a">Amazon Science</a>
            </li>
        </ul>
      </div>
        <div class="navFooterColSpacerInner navAccessibility"></div>
        <div class="navFooterLinkCol navAccessibility">
          <div class="navFooterColHead">Connect with Us</div>
        <ul>
            <li class="nav_first">
              <a href="https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6" class="nav_a">Facebook</a>
            </li>
            <li >
              <a href="https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6" class="nav_a">Twitter</a>
            </li>
            <li class="nav_last ">
              <a href="https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards" class="nav_a">Instagram</a>
            </li>
        </ul>
      </div>
        <div class="navFooterColSpacerInner navAccessibility"></div>
        <div class="navFooterLinkCol navAccessibility">
          <div class="navFooterColHead">Make Money with Us</div>
        <ul>
            <li class="nav_first">
              <a href="/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C" class="nav_a">Sell on Amazon</a>
            </li>
            <li >
              <a href="https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT" class="nav_a">Sell under Amazon Accelerator</a>
            </li>
            <li >
              <a href="https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT" class="nav_a">Protect and Build Your Brand</a>
            </li>
            <li >
              <a href="https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1" class="nav_a">Amazon Global Selling</a>
            </li>
            <li >
              <a href="https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc" class="nav_a">Become an Affiliate</a>
            </li>
            <li >
              <a href="https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter" class="nav_a">Fulfilment by Amazon</a>
            </li>
            <li >
              <a href="https://advertising.amazon.in/?ref=Amz.in" class="nav_a">Advertise Your Products</a>
            </li>
            <li class="nav_last ">
              <a href="https://www.amazonpay.in/merchant" class="nav_a">Amazon Pay on Merchants</a>
            </li>
        </ul>
      </div>
        <div class="navFooterColSpacerInner navAccessibility"></div>
        <div class="navFooterLinkCol navAccessibility">
          <div class="navFooterColHead">Let Us Help You</div>
        <ul>
            <li class="nav_first">
              <a href="/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid" class="nav_a">COVID-19 and Amazon</a>
            </li>
            <li >
              <a href="/gp/css/homepage.html?ref_=footer_ya" class="nav_a">Your Account</a>
            </li>
            <li >
              <a href="/gp/css/returns/homepage.html?ref_=footer_hy_f_4" class="nav_a">Returns Centre</a>
            </li>
            <li >
              <a href="/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc" class="nav_a">100% Purchase Protection</a>
            </li>
            <li >
              <a href="/gp/browse.html?node=6967393031&ref_=footer_mobapp" class="nav_a">Amazon App Download</a>
            </li>
            <li class="nav_last ">
              <a href="/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he" class="nav_a">Help</a>
            </li>
        </ul>
      </div>
  </div>
</div>
<div class="nav-footer-line"></div>

  <div class="navFooterLine navFooterLinkLine navFooterPadItemLine">
    <span>
      <div class="navFooterLine navFooterLogoLine">
        <a  aria-label="Amazon India Home"  href="/ref=footer_logo">
        <div class="nav-logo-base nav-sprite"></div>
        </a>
      </div>
</span>
    
      <span class="icp-container-desktop"><div
          class="navFooterLine">
<style type="text/css">
  #icp-touch-link-language { display: none; }
</style>


<a href="/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang" aria-label="Choose a language for shopping." class="icp-button" id="icp-touch-link-language">
  <div class="icp-nav-globe-img-2 icp-button-globe-2"></div><span class="icp-color-base">English</span><span class="nav-arrow icp-up-down-arrow"></span>
</a>


</div></span>
    
  </div>
  
<div class="navFooterLine navFooterLinkLine navFooterPadItemLine">
  <ul><li class="nav_first"><a href="https://www.amazon.com.au/ref=footer_au" class="nav_a">Australia</a></li><li><a href="https://www.amazon.com.br/ref=footer_br" class="nav_a">Brazil</a></li><li><a href="https://www.amazon.ca/ref=footer_ca" class="nav_a">Canada</a></li><li><a href="https://www.amazon.cn/ref=footer_cn" class="nav_a">China</a></li><li><a href="https://www.amazon.fr/ref=footer_fr" class="nav_a">France</a></li><li><a href="https://www.amazon.de/ref=footer_de" class="nav_a">Germany</a></li><li><a href="https://www.amazon.it/ref=footer_it" class="nav_a">Italy</a></li><li><a href="https://www.amazon.co.jp/ref=footer_jp" class="nav_a">Japan</a></li><li><a href="https://www.amazon.com.mx/ref=footer_mx" class="nav_a">Mexico</a></li><li><a href="https://www.amazon.nl/ref=footer_nl" class="nav_a">Netherlands</a></li><li><a href="https://www.amazon.pl/ref=footer_pl" class="nav_a">Poland</a></li><li><a href="https://www.amazon.sg/ref=footer_sg" class="nav_a">Singapore</a></li><li><a href="https://www.amazon.es/ref=footer_es" class="nav_a">Spain</a></li><li><a href="https://www.amazon.com.tr/ref=footer_tr" class="nav_a">Turkey</a></li><li><a href="https://www.amazon.ae/ref=footer_ae" class="nav_a">United Arab Emirates</a></li><li><a href="https://www.amazon.co.uk/ref=footer_uk" class="nav_a">United Kingdom</a></li><li class="nav_last"><a href="https://www.amazon.com/ref=footer_us" class="nav_a">United States</a></li></ul>
  
</div>

  
  <div class="navFooterLine navFooterLinkLine navFooterDescLine"  aria-label="More on Amazon">
    <table class="navFooterMoreOnAmazon" cellspacing="0" summary="More on Amazon">
      <tr>
<td class="navFooterDescItem"><a href=https://www.abebooks.com/ class="nav_a">AbeBooks<br><span class="navFooterDescText">Books, art<br>& collectibles</span></a></td><td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href=https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter class="nav_a">Amazon Web Services<br><span class="navFooterDescText">Scalable Cloud<br>Computing Services</span></a></td><td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href=https://www.audible.in/ class="nav_a">Audible<br><span class="navFooterDescText">Download<br>Audio Books</span></a></td><td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href=https://www.imdb.com/ class="nav_a">IMDb<br><span class="navFooterDescText">Movies, TV<br>& Celebrities</span></a></td></tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td class="navFooterDescItem"><a href=https://www.shopbop.com/ class="nav_a">Shopbop<br><span class="navFooterDescText">Designer<br>Fashion Brands</span></a></td><td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href=/business?ref=footer_aingw class="nav_a">	
Amazon Business<br><span class="navFooterDescText">Everything For<br>Your Business</span></a></td><td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href=/now?ref=footer_amznow class="nav_a">Prime Now<br><span class="navFooterDescText"> 2-Hour Delivery<br>on Everyday Items</span></a></td><td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href=/music/prime?ref=footer_apm class="nav_a">Amazon Prime Music<br><span class="navFooterDescText">100 million songs, ad-free<br>Over 15 million podcast episodes </span></a></td></tr>

    </table>
  </div>

  
<div class="navFooterLine navFooterLinkLine navFooterPadItemLine navFooterCopyright">
  <ul><li class="nav_first"><a href="/gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou" id="" class="nav_a">Conditions of Use & Sale</a> </li><li ><a href="/gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy" id="" class="nav_a">Privacy Notice</a> </li><li class="nav_last"><a href="/gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba" id="" class="nav_a">Interest-Based Ads</a> </li></ul><span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
</div>

  
</div>
<div id="sis_pixel_r2" aria-hidden="true" style="height:1px; position: absolute; left: -1000000px; top: -1000000px;"></div><script>(function(a,b){a.attachEvent?a.attachEvent("onload",b):a.addEventListener&&a.addEventListener("load",b,!1)})(window,function(){setTimeout(function(){var el=document.getElementById("sis_pixel_r2");el&&(el.innerHTML='<iframe id="DAsis" src="//aax-eu.amazon-adsystem.com/s/iu3?d=amazon.in&slot=navFooter&a2=010139d0000a54b395c2e5c00968320ebeb7a598d4a14aa6da7e03f238e30595490a&old_oo=0&ts=1705484867420&s=AVSu2M0nLnSIXrC5pnJcq48dSGSKKYCA3vsn7OL26va8&gdpr_consent=&gdpr_consent_avl=&cb=1705484867420" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" tabindex="-1" sandbox></iframe>')},300)});</script>

  <!-- NAVYAAN FOOTER END -->

<!-- sp:end-feature:nav-footer -->
<!-- sp:feature:configured-sitewide-assets -->
<script>
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('afterLoad').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/31l-zh+FR2L.js?AUIClients/AmazonLightsaberPageAssets&nlAD/kFw#823762-T1');
});
</script>
<!-- sp:end-feature:configured-sitewide-assets -->
<!-- sp:feature:customer-behavior-js -->
<script type="text/javascript">if (window.ue && ue.tag) { ue.tag('FWCIMEnabled'); }</script>
<script>
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('afterLoad').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/81BKPXF14nL.js?AUIClients/FWCIMAssets');
});
</script>
<!-- sp:end-feature:customer-behavior-js -->
<!-- sp:feature:csm:body-close -->
<div id='be' style="display:none;visibility:hidden;"><form name='ue_backdetect' action="get"><input type="hidden" name='ue_back' value='1' /></form>


<script type="text/javascript">
window.ue_ibe = (window.ue_ibe || 0) + 1;
if (window.ue_ibe === 1) {
(function(e,c){function h(b,a){f.push([b,a])}function g(b,a){if(b){var c=e.head||e.getElementsByTagName("head")[0]||e.documentElement,d=e.createElement("script");d.async="async";d.src=b;d.setAttribute("crossorigin","anonymous");a&&a.onerror&&(d.onerror=a.onerror);a&&a.onload&&(d.onload=a.onload);c.insertBefore(d,c.firstChild)}}function k(){ue.uels=g;for(var b=0;b<f.length;b++){var a=f[b];g(a[0],a[1])}ue.deffered=1}var f=[];c.ue&&(ue.uels=h,c.ue.attach&&c.ue.attach("load",k))})(document,window);


if (window.ue && window.ue.uels) {
        var cel_widgets = [ { "c":"celwidget" },{ "s":"#nav-swmslot > div", "id_gen":function(elem, index){ return 'nav_sitewide_msg'; } } ];

                ue.uels("https://images-eu.ssl-images-amazon.com/images/I/31bJewCvY-L.js");
}
var ue_mbl=ue_csm.ue.exec(function(h,a){function s(c){b=c||{};a.AMZNPerformance=b;b.transition=b.transition||{};b.timing=b.timing||{};if(a.csa){var d;b.timing.transitionStart&&(d=b.timing.transitionStart);b.timing.processStart&&(d=b.timing.processStart);d&&(csa("PageTiming")("mark","nativeTransitionStart",d),csa("PageTiming")("mark","transitionStart",d))}h.ue.exec(t,"csm-android-check")()&&b.tags instanceof Array&&(c=-1!=b.tags.indexOf("usesAppStartTime")||b.transition.type?!b.transition.type&&-1<
b.tags.indexOf("usesAppStartTime")?"warm-start":void 0:"view-transition",c&&(b.transition.type=c));n=null;"reload"===e._nt&&h.ue_orct||"intrapage-transition"===e._nt?u(b):"undefined"===typeof e._nt&&f&&f.timing&&f.timing.navigationStart&&a.history&&"function"===typeof a.History&&"object"===typeof a.history&&a.history.length&&1!=a.history.length&&(b.timing.transitionStart=f.timing.navigationStart);p&&e.ssw(q,""+(b.timing.transitionStart||n||""));c=b.transition;d=e._nt?e._nt:void 0;c.subType=d;a.ue&&
a.ue.tag&&a.ue.tag("has-AMZNPerformance");e.isl&&a.uex&&a.uex("at","csm-timing");v()}function w(c){a.ue&&a.ue.count&&a.ue.count("csm-cordova-plugin-failed",1)}function t(){return a.cordova&&a.cordova.platformId&&"android"==a.cordova.platformId}function u(){if(p){var c=e.ssw(q),a=function(){},x=e.count||a,a=e.tag||a,k=b.timing.transitionStart,g=c&&!c.e&&c.val;n=c=g?+c.val:null;k&&g&&k>c?(x("csm.jumpStart.mtsDiff",k-c||0),a("csm-rld-mts-gt")):k&&g?a("csm-rld-mts-leq"):g?k||a("csm-rld-mts-no-new"):a("csm-rld-mts-no-old")}f&&
f.timing&&f.timing.navigationStart?b.timing.transitionStart=f.timing.navigationStart:delete b.timing.transitionStart}function v(){try{a.P.register("AMZNPerformance",function(){return b})}catch(c){}}function r(){if(!b)return"";ue_mbl.cnt=null;var c=b.timing,d=b.transition,d=["mts",l(c.transitionStart),"mps",l(c.processStart),"mtt",d.type,"mtst",d.subType,"mtlt",d.launchType];a.ue&&a.ue.tag&&(c.fr_ovr&&a.ue.tag("fr_ovr"),c.fcp_ovr&&a.ue.tag("fcp_ovr"),d.push("fr_ovr",l(c.fr_ovr),"fcp_ovr",l(c.fcp_ovr)));
for(var c="",e=0;e<d.length;e+=2){var f=d[e],g=d[e+1];"undefined"!==typeof g&&(c+="&"+f+"="+g)}return c}function l(a){if("undefined"!==typeof a&&"undefined"!==typeof m)return a-m}function y(a,d){b&&(m=d,b.timing.transitionStart=a,b.transition.type="view-transition",b.transition.subType="ajax-transition",b.transition.launchType="normal",ue_mbl.cnt=r)}var e=h.ue||{},m=h.ue_t0,q="csm-last-mts",p=1===h.ue_sswmts,n,f=a.performance,b;if(a.P&&a.P.when&&a.P.register)return 1===a.ue_fnt&&(m=a.aPageStart||
h.ue_t0),a.P.when("CSMPlugin").execute(function(a){a.buildAMZNPerformance&&a.buildAMZNPerformance({successCallback:s,failCallback:w})}),{cnt:r,ajax:y}},"mobile-timing")(ue_csm,ue_csm.window);

(function(d){d._uess=function(){var a="";screen&&screen.width&&screen.height&&(a+="&sw="+screen.width+"&sh="+screen.height);var b=function(a){var b=document.documentElement["client"+a];return"CSS1Compat"===document.compatMode&&b||document.body["client"+a]||b},c=b("Width"),b=b("Height");c&&b&&(a+="&vw="+c+"&vh="+b);return a}})(ue_csm);

(function(a){function c(a){d("log",a)}var d=csa("Errors",{producerId:"csa",logOptions:{ent:"all"}});a.ue_err.buffer&&d&&(a.ue_err.buffer.forEach(c),a.ue_err.buffer.push=c);var b=document.ue_backdetect;b&&b.ue_back&&a.ue&&(a.ue.bfini=b.ue_back.value);a.uet&&a.uet("be");a.onLdEnd&&(window.addEventListener?window.addEventListener("load",a.onLdEnd,!1):window.attachEvent&&window.attachEvent("onload",a.onLdEnd));a.ueh&&a.ueh(0,window,"load",a.onLd,1);a.ue&&a.ue.tag&&(a.ue_furl?(b=a.ue_furl.replace(/\./g,
"-"),a.ue.tag(b)):a.ue.tag("nofls"))})(ue_csm);

(function(g,h){function d(a,d){var b={};if(!e||!f)try{var c=h.sessionStorage;c?a&&("undefined"!==typeof d?c.setItem(a,d):b.val=c.getItem(a)):f=1}catch(g){e=1}e&&(b.e=1);return b}var b=g.ue||{},a="",f,e,c,a=d("csmtid");f?a="NA":a.e?a="ET":(a=a.val,a||(a=b.oid||"NI",d("csmtid",a)),c=d(b.oid),c.e||(c.val=c.val||0,d(b.oid,c.val+1)),b.ssw=d);b.tabid=a})(ue_csm,ue_csm.window);

ue_csm.ue.exec(function(e,f){var a=e.ue||{},b=a._wlo,d;if(a.ssw){d=a.ssw("CSM_previousURL").val;var c=f.location,b=b?b:c&&c.href?c.href.split("#")[0]:void 0;c=(b||"")===a.ssw("CSM_previousURL").val;!c&&b&&a.ssw("CSM_previousURL",b);d=c?"reload":d?"intrapage-transition":"first-view"}else d="unknown";a._nt=d},"NavTypeModule")(ue_csm,window);
ue_csm.ue.exec(function(c,a){function g(a){a.run(function(e){d.tag("csm-feature-"+a.name+":"+e);d.isl&&c.uex("at")})}if(a.addEventListener)for(var d=c.ue||{},f=[{name:"touch-enabled",run:function(b){var e=function(){a.removeEventListener("touchstart",c,!0);a.removeEventListener("mousemove",d,!0)},c=function(){b("true");e()},d=function(){b("false");e()};a.addEventListener("touchstart",c,!0);a.addEventListener("mousemove",d,!0)}}],b=0;b<f.length;b++)g(f[b])},"csm-features")(ue_csm,window);


(function(a,e){function c(a){d("recordCounter",a.c,a.v)}var b=e.images,d=csa("Metrics",{producerId:"csa"});b&&b.length&&a.ue.count("totalImages",b.length);a.ue.cv.buffer&&d&&(a.ue.cv.buffer.forEach(c),a.ue.cv.buffer.push=c)})(ue_csm,document);
(function(b){function c(){var d=[];a.log&&a.log.isStub&&a.log.replay(function(a){e(d,a)});a.clog&&a.clog.isStub&&a.clog.replay(function(a){e(d,a)});d.length&&(a._flhs+=1,n(d),p(d))}function g(){a.log&&a.log.isStub&&(a.onflush&&a.onflush.replay&&a.onflush.replay(function(a){a[0]()}),a.onunload&&a.onunload.replay&&a.onunload.replay(function(a){a[0]()}),c())}function e(d,b){var c=b[1],f=b[0],e={};a._lpn[c]=(a._lpn[c]||0)+1;e[c]=f;d.push(e)}function n(b){q&&(a._lpn.csm=(a._lpn.csm||0)+1,b.push({csm:{k:"chk",
f:a._flhs,l:a._lpn,s:"inln"}}))}function p(a){if(h)a=k(a),b.navigator.sendBeacon(l,a);else{a=k(a);var c=new b[f];c.open("POST",l,!0);c.setRequestHeader&&c.setRequestHeader("Content-type","text/plain");c.send(a)}}function k(a){return JSON.stringify({rid:b.ue_id,sid:b.ue_sid,mid:b.ue_mid,mkt:b.ue_mkt,sn:b.ue_sn,reqs:a})}var f="XMLHttpRequest",q=1===b.ue_ddq,a=b.ue,r=b[f]&&"withCredentials"in new b[f],h=b.navigator&&b.navigator.sendBeacon,l="//"+b.ue_furl+"/1/batch/1/OE/",m=b.ue_fci_ft||5E3;a&&(r||h)&&
(a._flhs=a._flhs||0,a._lpn=a._lpn||{},a.attach&&(a.attach("beforeunload",a.exec(g,"fcli-bfu")),a.attach("pagehide",a.exec(g,"fcli-ph"))),m&&b.setTimeout(a.exec(c,"fcli-t"),m),a._ffci=a.exec(c))})(window);


(function(k,c){function l(a,b){return a.filter(function(a){return a.initiatorType==b})}function f(a,c){if(b.t[a]){var g=b.t[a]-b._t0,e=c.filter(function(a){return 0!==a.responseEnd&&m(a)<g}),f=l(e,"script"),h=l(e,"link"),k=l(e,"img"),n=e.map(function(a){return a.name.split("/")[2]}).filter(function(a,b,c){return a&&c.lastIndexOf(a)==b}),q=e.filter(function(a){return a.duration<p}),s=g-Math.max.apply(null,e.map(m))<r|0;"af"==a&&(b._afjs=f.length);return a+":"+[e[d],f[d],h[d],k[d],n[d],q[d],s].join("-")}}
function m(a){return a.responseEnd-(b._t0-c.timing.navigationStart)}function n(){var a=c[h]("resource"),d=f("cf",a),g=f("af",a),a=f("ld",a);delete b._rt;b._ld=b.t.ld-b._t0;b._art&&b._art();return[d,g,a].join("_")}var p=20,r=50,d="length",b=k.ue,h="getEntriesByType";b._rre=m;b._rt=c&&c.timing&&c[h]&&n})(ue_csm,window.performance);


(function(c,d){var b=c.ue,a=d.navigator;b&&b.tag&&a&&(a=a.connection||a.mozConnection||a.webkitConnection)&&a.type&&b.tag("netInfo:"+a.type)})(ue_csm,window);


(function(c,d){function h(a,b){for(var c=[],d=0;d<a.length;d++){var e=a[d],f=b.encode(e);if(e[k]){var g=b.metaSep,e=e[k],l=b.metaPairSep,h=[],m=void 0;for(m in e)e.hasOwnProperty(m)&&h.push(m+"="+e[m]);e=h.join(l);f+=g+e}c.push(f)}return c.join(b.resourceSep)}function s(a){var b=a[k]=a[k]||{};b[t]||(b[t]=c.ue_mid);b[u]||(b[u]=c.ue_sid);b[f]||(b[f]=c.ue_id);b.csm=1;a="//"+c.ue_furl+"/1/"+a[v]+"/1/OP/"+a[w]+"/"+a[x]+"/"+h([a],y);if(n)try{n.call(d[p],a)}catch(g){c.ue.sbf=1,(new Image).src=a}else(new Image).src=
a}function q(){g&&g.isStub&&g.replay(function(a,b,c){a=a[0];b=a[k]=a[k]||{};b[f]=b[f]||c;s(a)});l.impression=s;g=null}if(!(1<c.ueinit)){var k="metadata",x="impressionType",v="foresterChannel",w="programGroup",t="marketplaceId",u="session",f="requestId",p="navigator",l=c.ue||{},n=d[p]&&d[p].sendBeacon,r=function(a,b,c,d){return{encode:d,resourceSep:a,metaSep:b,metaPairSep:c}},y=r("","?","&",function(a){return h(a.impressionData,z)}),z=r("/",":",",",function(a){return a.featureName+":"+h(a.resources,
A)}),A=r(",","@","|",function(a){return a.id}),g=l.impression;n?q():(l.attach("load",q),l.attach("beforeunload",q));try{d.P&&d.P.register&&d.P.register("impression-client",function(){})}catch(B){c.ueLogError(B,{logLevel:"WARN"})}}})(ue_csm,window);



var ue_pty = "APBBrowse";




var ue_adb = 4;
var ue_adb_rtla = 1;
ue_csm.ue.exec(function(y,a){function t(){if(d&&f){var a;a:{try{a=d.getItem(g);break a}catch(c){}a=void 0}if(a)return b=a,!0}return!1}function u(){if(a.fetch)fetch(m).then(function(a){if(!a.ok)throw Error(a.statusText);return a.text?a.text():null}).then(function(b){b?(-1<b.indexOf("window.ue_adb_chk = 1")&&(a.ue_adb_chk=1),n()):h()})["catch"](h);else e.uels(m,{onerror:h,onload:n})}function h(){b=k;l();if(f)try{d.setItem(g,b)}catch(a){}}function n(){b=1===a.ue_adb_chk?p:k;l();if(f)try{d.setItem(g,
b)}catch(c){}}function q(){a.ue_adb_rtla&&c&&0<c.ec&&!1===r&&(c.elh=null,ueLogError({m:"Hit Info",fromOnError:1},{logLevel:"INFO",adb:b}),r=!0)}function l(){e.tag(b);e.isl&&a.uex&&uex("at",b);s&&s.updateCsmHit("adb",b);c&&0<c.ec?q():a.ue_adb_rtla&&c&&(c.elh=q)}function v(){return b}if(a.ue_adb){a.ue_fadb=a.ue_fadb||10;var e=a.ue,k="adblk_yes",p="adblk_no",m="https://m.media-amazon.com/images/G/01/csm/showads.v2.js?category=ad&adstype=-ad-column-&ad_size=-housead-",b="adblk_unk",d;a:{try{d=a.localStorage;
break a}catch(z){}d=void 0}var g="csm:adb",c=a.ue_err,s=e.cookie,f=void 0!==a.localStorage,w=Math.random()>1-1/a.ue_fadb,r=!1,x=t();w||!x?u():l();a.ue_isAdb=v;a.ue_isAdb.unk="adblk_unk";a.ue_isAdb.no=p;a.ue_isAdb.yes=k}},"adb")(document,window);




(function(c,l,m){function h(a){if(a)try{if(a.id)return"//*[@id='"+a.id+"']";var b,d=1,e;for(e=a.previousSibling;e;e=e.previousSibling)e.nodeName===a.nodeName&&(d+=1);b=d;var c=a.nodeName;1!==b&&(c+="["+b+"]");a.parentNode&&(c=h(a.parentNode)+"/"+c);return c}catch(f){return"DETACHED"}}function f(a){if(a&&a.getAttribute)return a.getAttribute(k)?a.getAttribute(k):f(a.parentElement)}var k="data-cel-widget",g=!1,d=[];(c.ue||{}).isBF=function(){try{var a=JSON.parse(localStorage["csm-bf"]||"[]"),b=0<=a.indexOf(c.ue_id);
a.unshift(c.ue_id);a=a.slice(0,20);localStorage["csm-bf"]=JSON.stringify(a);return b}catch(d){return!1}}();c.ue_utils={getXPath:h,getFirstAscendingWidget:function(a,b){c.ue_cel&&c.ue_fem?!0===g?b(f(a)):d.push({element:a,callback:b}):b()},notifyWidgetsLabeled:function(){if(!1===g){g=!0;for(var a=f,b=0;b<d.length;b++)if(d[b].hasOwnProperty("callback")&&d[b].hasOwnProperty("element")){var c=d[b].callback,e=d[b].element;"function"===typeof c&&"function"===typeof a&&c(a(e))}d=null}},extractStringValue:function(a){if("string"===
typeof a)return a}}})(ue_csm,window,document);


(function(a){a.ue_cel||(a.ue_cel=function(){function m(a,c){c?c.r=v:c={r:v,c:1};!ue_csm.ue_sclog&&c.clog&&b.clog?b.clog(a,c.ns||r,c):c.glog&&b.glog?b.glog(a,c.ns||r,c):b.log(a,c.ns||r,c)}function n(a,b){"function"===typeof k&&k("log",{schemaId:s+".RdCSI.1",eventType:a,clientData:b},{ent:{page:["requestId"]}})}function c(){var a=q.length;if(0<a){for(var c=[],A=0;A<a;A++){var d=q[A].api;d.ready()?(d.on({ts:b.d,ns:r}),f.push(q[A]),m({k:"mso",n:q[A].name,t:b.d()})):c.push(q[A])}q=c}}function g(){if(!g.executed){for(var a=
0;a<f.length;a++)f[a].api.off&&f[a].api.off({ts:b.d,ns:r});y();m({k:"eod",t0:b.t0,t:b.d()},{c:1,il:1});g.executed=1;for(a=0;a<f.length;a++)q.push(f[a]);f=[];d(t);d(z)}}function y(a){m({k:"hrt",t:b.d()},{c:1,il:1,n:a});p=Math.min(w,e*p);x()}function x(){d(z);z=h(function(){y(!0)},p)}function u(){g.executed||y()}var l=a.window,h=l.setTimeout,d=l.clearTimeout,e=1.5,w=l.ue_cel_max_hrt||3E4,s="robotdetection",q=[],f=[],r=a.ue_cel_ns||"cel",t,z,b=a.ue,E=a.uet,B=a.uex,v=b.rid,C=l.csa,k,p=l.ue_cel_hrt_int||
3E3,D=l.requestAnimationFrame||function(a){a()};C&&(k=C("Events",{producerId:s}));if(b.isBF)m({k:"bft",t:b.d()});else{"function"==typeof E&&E("bb","csmCELLSframework",{wb:1});h(c,0);b.onunload(g);if(b.onflush)b.onflush(u);t=h(g,6E5);x();"function"==typeof B&&B("ld","csmCELLSframework",{wb:1});return{registerModule:function(a,d){q.push({name:a,api:d});m({k:"mrg",n:a,t:b.d()});c()},reset:function(a){m({k:"rst",t0:b.t0,t:b.d()});q=q.concat(f);f=[];for(var e=q.length,A=0;A<e;A++)q[A].api.off(),q[A].api.reset();
v=a||b.rid;c();d(t);t=h(g,6E5);g.executed=0},timeout:function(a,b){return h(function(){D(function(){g.executed||a()})},b)},log:m,csaEventLog:n,off:g}}}())})(ue_csm);
(function(a){a.ue_pdm||!a.ue_cel||a.ue.isBF||(a.ue_pdm=function(){function m(){try{var b=d.screen;if(b){var c={w:b.width,aw:b.availWidth,h:b.height,ah:b.availHeight,cd:b.colorDepth,pd:b.pixelDepth};f&&f.w===c.w&&f.h===c.h&&f.aw===c.aw&&f.ah===c.ah&&f.pd===c.pd&&f.cd===c.cd||(f=c,f.t=s(),f.k="sci",E(f),C&&k("sci",{h:(f.h||"0")+""}))}var h=e.body||{},g=e.documentElement||{},n={w:Math.max(h.scrollWidth||0,h.offsetWidth||0,g.clientWidth||0,g.scrollWidth||0,g.offsetWidth||0),h:Math.max(h.scrollHeight||
0,h.offsetHeight||0,g.clientHeight||0,g.scrollHeight||0,g.offsetHeight||0)};r&&r.w===n.w&&r.h===n.h||(r=n,r.t=s(),r.k="doi",E(r));w=a.ue_cel.timeout(m,q);z+=1}catch(p){d.ueLogError&&ueLogError(p,{attribution:"csm-cel-page-module",logLevel:"WARN"})}}function n(){u("ebl","default",!1)}function c(){u("efo","default",!0)}function g(){u("ebl","app",!1)}function y(){u("efo","app",!0)}function x(){d.setTimeout(function(){e[F]?u("ebl","pageviz",!1):u("efo","pageviz",!0)},0)}function u(a,b,c){t!==c&&(E({k:a,
t:s(),s:b},{ff:!0===c?0:1}),C&&k(a,{t:(s()||"0")+"",s:b}));t=c}function l(){b.attach&&(p&&b.attach(D,x,e),H&&P.when("mash").execute(function(a){a&&a.addEventListener&&(a.addEventListener("appPause",g),a.addEventListener("appResume",y))}),b.attach("blur",n,d),b.attach("focus",c,d))}function h(){b.detach&&(p&&b.detach(D,x,e),H&&P.when("mash").execute(function(a){a&&a.removeEventListener&&(a.removeEventListener("appPause",g),a.removeEventListener("appResume",y))}),b.detach("blur",n,d),b.detach("focus",
c,d))}var d=a.window,e=a.document,w,s,q,f,r,t=null,z=0,b=a.ue,E=a.ue_cel.log,B=a.uet,v=a.uex,C=d.csa,k=a.ue_cel.csaEventLog,p=!!b.pageViz,D=p&&b.pageViz.event,F=p&&b.pageViz.propHid,H=d.P&&d.P.when;"function"==typeof B&&B("bb","csmCELLSpdm",{wb:1});return{on:function(a){q=a.timespan||500;s=a.ts;l();a=d.location;E({k:"pmd",o:a.origin,p:a.pathname,t:s()});m();"function"==typeof v&&v("ld","csmCELLSpdm",{wb:1})},off:function(a){clearTimeout(w);h();b.count&&b.count("cel.PDM.TotalExecutions",z)},ready:function(){return e.body&&
a.ue_cel&&a.ue_cel.log},reset:function(){f=r=null}}}(),a.ue_cel&&a.ue_cel.registerModule("page module",a.ue_pdm))})(ue_csm);
(function(a){a.ue_vpm||!a.ue_cel||a.ue.isBF||(a.ue_vpm=function(){function m(){var a=x(),b={w:h.innerWidth,h:h.innerHeight,x:h.pageXOffset,y:h.pageYOffset};c&&c.w==b.w&&c.h==b.h&&c.x==b.x&&c.y==b.y||(b.t=a,b.k="vpi",c=b,e(c,{clog:1}),r&&t("vpi",{t:(c.t||"0")+"",h:(c.h||"0")+"",y:(c.y||"0")+"",w:(c.w||"0")+"",x:(c.x||"0")+""}));g=0;u=x()-a;l+=1}function n(){g||(g=a.ue_cel.timeout(m,y))}var c,g,y,x,u=0,l=0,h=a.window,d=a.ue,e=a.ue_cel.log,w=a.uet,s=a.uex,q=d.attach,f=d.detach,r=h.csa,t=a.ue_cel.csaEventLog;
"function"==typeof w&&w("bb","csmCELLSvpm",{wb:1});return{on:function(a){x=a.ts;y=a.timespan||100;m();q&&(q("scroll",n),q("resize",n));"function"==typeof s&&s("ld","csmCELLSvpm",{wb:1})},off:function(a){clearTimeout(g);f&&(f("scroll",n),f("resize",n));d.count&&(d.count("cel.VPI.TotalExecutions",l),d.count("cel.VPI.TotalExecutionTime",u),d.count("cel.VPI.AverageExecutionTime",u/l))},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){c=void 0},getVpi:function(){return c}}}(),a.ue_cel&&
a.ue_cel.registerModule("viewport module",a.ue_vpm))})(ue_csm);
(function(a){if(!a.ue_fem&&a.ue_cel&&a.ue_utils){var m=a.ue||{},n=a.window,c=n.document;!m.isBF&&!a.ue_fem&&c.querySelector&&n.getComputedStyle&&[].forEach&&(a.ue_fem=function(){function g(a,b){return a>b?3>a-b:3>b-a}function y(a,b){var c=n.pageXOffset,d=n.pageYOffset,h;a:{try{if(a){var f=a.getBoundingClientRect(),e,m=0===a.offsetWidth&&0===a.offsetHeight;c:{for(var k=a.parentNode,p=f.left||0,w=f.top||0,q=f.width||0,r=f.height||0;k&&k!==document.body;){var l;d:{try{var s=void 0;if(k)var G=k.getBoundingClientRect(),
s={x:G.left||0,y:G.top||0,w:G.width||0,h:G.height||0};else s=void 0;l=s;break d}catch(v){}l=void 0}var t=window.getComputedStyle(k),u="hidden"===t.overflow,x=u||"hidden"===t.overflowX,J=u||"hidden"===t.overflowY,y=w+r-1<l.y+1||w+1>l.y+l.h-1;if((p+q-1<l.x+1||p+1>l.x+l.w-1)&&x||y&&J){e=!0;break c}k=k.parentNode}e=!1}h={x:f.left+c||0,y:f.top+d||0,w:f.width||0,h:f.height||0,d:(m||e)|0}}else h=void 0;break a}catch(K){}h=void 0}if(h&&!a.cel_b)a.cel_b=h,C({n:a.getAttribute(z),w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,
x:a.cel_b.x,y:a.cel_b.y,t:b,k:"ewi",cl:a.className},{clog:1});else{if(c=h)c=a.cel_b,d=h,c=d.d===c.d&&1===d.d?!1:!(g(c.x,d.x)&&g(c.y,d.y)&&g(c.w,d.w)&&g(c.h,d.h)&&c.d===d.d);c&&(a.cel_b=h,C({n:a.getAttribute(z),w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,x:a.cel_b.x,y:a.cel_b.y,t:b,k:"ewi"},{clog:1}))}}function x(d,f){var g;g=d.c?c.getElementsByClassName(d.c):d.id?[c.getElementById(d.id)]:c.querySelectorAll(d.s);d.w=[];for(var k=0;k<g.length;k++){var e=g[k];if(e){if(!e.getAttribute(z)){var l=e.getAttribute("cel_widget_id")||
(d.id_gen||v)(e,k)||e.id;e.setAttribute(z,l)}d.w.push(e);h(Q,e,f)}}!1===B&&(E++,E===b.length&&(B=!0,a.ue_utils.notifyWidgetsLabeled()))}function u(a,b){k.contains(a)||C({n:a.getAttribute(z),t:b,k:"ewd"},{clog:1})}function l(a){L.length&&ue_cel.timeout(function(){if(r){for(var b=R(),c=!1;R()-b<f&&!c;){for(c=S;0<c--&&0<L.length;){var d=L.shift();T[d.type](d.elem,d.time)}c=0===L.length}U++;l(a)}},0)}function h(a,b,c){L.push({type:a,elem:b,time:c})}function d(a,c){for(var d=0;d<b.length;d++)for(var e=
b[d].w||[],f=0;f<e.length;f++)h(a,e[f],c)}function e(){M||(M=a.ue_cel.timeout(function(){M=null;var c=t();d(W,c);for(var e=0;e<b.length;e++)h(X,b[e],c);0===b.length&&!1===B&&(B=!0,a.ue_utils.notifyWidgetsLabeled());l(c)},q))}function w(){M||N||(N=a.ue_cel.timeout(function(){N=null;var a=t();d(Q,a);l(a)},q))}function s(){return D&&F&&k&&k.contains&&k.getBoundingClientRect&&t}var q=50,f=4.5,r=!1,t,z="data-cel-widget",b=[],E=0,B=!1,v=function(){},C=a.ue_cel.log,k,p,D,F,H=n.MutationObserver||n.WebKitMutationObserver||
n.MozMutationObserver,A=!!H,I,G,O="DOMAttrModified",K="DOMNodeInserted",J="DOMNodeRemoved",N,M,L=[],U=0,S=null,W="removedWidget",X="updateWidgets",Q="processWidget",T,V=n.performance||{},R=V.now&&function(){return V.now()}||function(){return Date.now()};"function"==typeof uet&&uet("bb","csmCELLSfem",{wb:1});return{on:function(d){function f(){if(s()){T={removedWidget:u,updateWidgets:x,processWidget:y};if(A){var a={attributes:!0,subtree:!0};I=new H(w);G=new H(e);I.observe(k,a);G.observe(k,{childList:!0,
subtree:!0});G.observe(p,a)}else D.call(k,O,w),D.call(k,K,e),D.call(k,J,e),D.call(p,K,w),D.call(p,J,w);e()}}k=c.body;p=c.head;D=k.addEventListener;F=k.removeEventListener;t=d.ts;b=a.cel_widgets||[];S=d.bs||5;m.deffered?f():m.attach&&m.attach("load",f);"function"==typeof uex&&uex("ld","csmCELLSfem",{wb:1});r=!0},off:function(){s()&&(G&&(G.disconnect(),G=null),I&&(I.disconnect(),I=null),F.call(k,O,w),F.call(k,K,e),F.call(k,J,e),F.call(p,K,w),F.call(p,J,w));m.count&&m.count("cel.widgets.batchesProcessed",
U);r=!1},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){b=a.cel_widgets||[]}}}(),a.ue_cel&&a.ue_fem&&a.ue_cel.registerModule("features module",a.ue_fem))}})(ue_csm);
(function(a){!a.ue_mcm&&a.ue_cel&&a.ue_utils&&!a.ue.isBF&&(a.ue_mcm=function(){function m(a,d){var e=a.srcElement||a.target||{},g={k:n,w:(d||{}).ow||(y.body||{}).scrollWidth,h:(d||{}).oh||(y.body||{}).scrollHeight,t:(d||{}).ots||c(),x:a.pageX,y:a.pageY,p:l.getXPath(e),n:e.nodeName};x&&"function"===typeof x.now&&a.timeStamp&&(g.dt=(d||{}).odt||x.now()-a.timeStamp,g.dt=parseFloat(g.dt.toFixed(2)));a.button&&(g.b=a.button);e.href&&(g.r=l.extractStringValue(e.href));e.id&&(g.i=e.id);e.className&&e.className.split&&
(g.c=e.className.split(/\s+/));u(g,{c:1})}var n="mcm",c,g=a.window,y=g.document,x=g.performance,u=a.ue_cel.log,l=a.ue_utils;return{on:function(h){c=h.ts;a.ue_cel_stub&&a.ue_cel_stub.replayModule(n,m);g.addEventListener&&g.addEventListener("mousedown",m,!0)},off:function(a){g.addEventListener&&g.removeEventListener("mousedown",m,!0)},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){}}}(),a.ue_cel&&a.ue_cel.registerModule("mouse click module",a.ue_mcm))})(ue_csm);
(function(a){a.ue_mmm||!a.ue_cel||a.ue.isBF||(a.ue_mmm=function(m){function n(a,c){var b={x:a.pageX||a.x||0,y:a.pageY||a.y||0,t:l()};!c&&p&&(b.t-p.t<y||b.x==p.x&&b.y==p.y)||(p=b,v.push(b))}function c(){if(v.length){E=I.now();for(var a=0;a<v.length;a++){var c=v[a],d=a;D=v[k];F=c;var e=void 0;if(!(e=2>d)){e=void 0;a:if(v[d].t-v[d-1].t>g)e=0;else{for(e=k+1;e<d;e++){var f=D,h=F,l=v[e];H=(h.x-f.x)*(f.y-l.y)-(f.x-l.x)*(h.y-f.y);if(H*H/((h.x-f.x)*(h.x-f.x)+(h.y-f.y)*(h.y-f.y))>x){e=0;break a}}e=1}e=!e}(A=
e)?k=d-1:C.pop();C.push(c)}B=I.now()-E;r=Math.min(r,B);t=Math.max(t,B);z=(z*b+B)/(b+1);b+=1;q({k:u,e:C,min:Math.floor(1E3*r),max:Math.floor(1E3*t),avg:Math.floor(1E3*z)},{c:1});v=[];C=[];k=0}}var g=100,y=20,x=25,u="mmm1",l,h,d=a.window,e=d.document,w=d.setInterval,s=a.ue,q=a.ue_cel.log,f,r=1E3,t=0,z=0,b=0,E,B,v=[],C=[],k=0,p,D,F,H,A,I=m&&m.now&&m||Date.now&&Date||{now:function(){return(new Date).getTime()}};return{on:function(a){l=a.ts;h=a.ns;s.attach&&s.attach("mousemove",n,e);f=w(c,3E3)},off:function(a){h&&
(p&&n(p,!0),c());clearInterval(f);s.detach&&s.detach("mousemove",n,e)},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){v=[];C=[];k=0;p=null}}}(window.performance),a.ue_cel&&a.ue_cel.registerModule("mouse move module",a.ue_mmm))})(ue_csm);



ue_csm.ue.exec(function(b,c){var e=function(){},f=function(){return{send:function(b,d){if(d&&b){var a;if(c.XDomainRequest)a=new XDomainRequest,a.onerror=e,a.ontimeout=e,a.onprogress=e,a.onload=e,a.timeout=0;else if(c.XMLHttpRequest){if(a=new XMLHttpRequest,!("withCredentials"in a))throw"";}else a=void 0;if(!a)throw"";a.open("POST",b,!0);a.setRequestHeader&&a.setRequestHeader("Content-type","text/plain");a.send(d)}},isSupported:!0}}(),g=function(){return{send:function(c,d){if(c&&d)if(navigator.sendBeacon(c,
d))b.ue_sbuimp&&b.ue&&b.ue.ssw&&b.ue.ssw("eelsts","scs");else throw"";},isSupported:!!navigator.sendBeacon&&!(c.cordova&&c.cordova.platformId&&"ios"==c.cordova.platformId)}}();b.ue._ajx=f;b.ue._sBcn=g},"Transportation-clients")(ue_csm,window);
ue_csm.ue.exec(function(b,k){function B(){for(var a=0;a<arguments.length;a++){var c=arguments[a];try{var g;if(c.isSupported){var f=u.buildPayload(l,e);g=c.send(K,f)}else throw dummyException;return g}catch(d){}}a={m:"All supported clients failed",attribution:"CSMSushiClient_TRANSPORTATION_FAIL",f:"sushi-client.js",logLevel:"ERROR"};C(a,k.ue_err_chan||"jserr");b.ue_err.buffer&&b.ue_err.buffer.push(a)}function m(){if(e.length){for(var a=0;a<n.length;a++)n[a]();B(d._sBcn||{},d._ajx||{});e=[];h={};l=
{};v=w=r=x=0}}function L(){var a=new Date,c=function(a){return 10>a?"0"+a:a};return Date.prototype.toISOString?a.toISOString():a.getUTCFullYear()+"-"+c(a.getUTCMonth()+1)+"-"+c(a.getUTCDate())+"T"+c(a.getUTCHours())+":"+c(a.getUTCMinutes())+":"+c(a.getUTCSeconds())+"."+String((a.getUTCMilliseconds()/1E3).toFixed(3)).slice(2,5)+"Z"}function y(a){try{return JSON.stringify(a)}catch(c){}return null}function D(a,c,g,f){var q=!1;f=f||{};s++;if(s==E){var p={m:"Max number of Sushi Logs exceeded",f:"sushi-client.js",
logLevel:"ERROR",attribution:"CSMSushiClient_MAX_CALLS"};C(p,k.ue_err_chan||"jserr");b.ue_err.buffer&&b.ue_err.buffer.push(p)}if(p=!(s>=E))(p=a&&-1<a.constructor.toString().indexOf("Object")&&c&&-1<c.constructor.toString().indexOf("String")&&g&&-1<g.constructor.toString().indexOf("String"))||M++;p&&(d.count&&d.count("Event:"+g,1),a.producerId=a.producerId||c,a.schemaId=a.schemaId||g,a.timestamp=L(),c=Date.now?Date.now():+new Date,g=Math.random().toString().substring(2,12),a.messageId=b.ue_id+"-"+
c+"-"+g,f&&!f.ssd&&(a.sessionId=a.sessionId||b.ue_sid,a.requestId=a.requestId||b.ue_id,a.obfuscatedMarketplaceId=a.obfuscatedMarketplaceId||b.ue_mid),(c=y(a))?(c=c.length,(e.length==N||r+c>O)&&m(),r+=c,a={data:u.compressEvent(a)},e.push(a),(f||{}).n?0===F?m():v||(v=k.setTimeout(m,F)):w||(w=k.setTimeout(m,P)),q=!0):q=!1);!q&&b.ue_int&&console.error("Invalid JS Nexus API call");return q}function G(){if(!H){for(var a=0;a<z.length;a++)z[a]();for(a=0;a<n.length;a++)n[a]();e.length&&(b.ue_sbuimp&&b.ue&&
b.ue.ssw&&(a=y({dct:l,evt:e}),b.ue.ssw("eeldata",a),b.ue.ssw("eelsts","unk")),B(d._sBcn||{}));H=!0}}function I(a){z.push(a)}function J(a){n.push(a)}var E=1E3,N=499,O=524288,t=function(){},d=b.ue||{},C=d.log||t,Q=b.uex||t;(b.uet||t)("bb","ue_sushi_v1",{wb:1});var K=b.ue_surl||"https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",R=["messageId","timestamp"],A="#",e=[],h={},l={},r=0,x=0,M=0,s=0,z=[],n=[],H=!1,v,w,F=void 0===b.ue_hpsi?1E3:b.ue_hpsi,P=void 0===b.ue_lpsi?1E4:b.ue_lpsi,
u=function(){function a(a){h[a]=A+x++;l[h[a]]=a;return h[a]}function c(b){if(!(b instanceof Function)){if(b instanceof Array){for(var f=[],d=b.length,e=0;e<d;e++)f[e]=c(b[e]);return f}if(b instanceof Object){f={};for(d in b)b.hasOwnProperty(d)&&(f[h[d]?h[d]:a(d)]=-1===R.indexOf(d)?c(b[d]):b[d]);return f}return"string"===typeof b&&(b.length>(A+x).length||b.charAt(0)===A)?h[b]?h[b]:a(b):b}}return{compressEvent:c,buildPayload:function(){return y({cs:{dct:l},events:e})}}}();(function(){if(d.event&&d.event.isStub){if(b.ue_sbuimp&&
b.ue&&b.ue.ssw){var a=b.ue.ssw("eelsts").val;if(a&&"unk"===a&&(a=b.ue.ssw("eeldata").val)){var c;a:{try{c=JSON.parse(a);break a}catch(g){}c=null}c&&c.evt instanceof Array&&c.dct instanceof Object&&(e=c.evt,l=c.dct,e&&l&&(m(),b.ue.ssw("eeldata","{}"),b.ue.ssw("eelsts","scs")))}}d.event.replay(function(a){a[3]=a[3]||{};a[3].n=1;D.apply(this,a)});d.onSushiUnload.replay(function(a){I(a[0])});d.onSushiFlush.replay(function(a){J(a[0])})}})();d.attach("beforeunload",G);d.attach("pagehide",G);d._cmps=u;d.event=
D;d.event.reset=function(){s=0};d.onSushiUnload=I;d.onSushiFlush=J;try{k.P&&k.P.register&&k.P.register("sushi-client",t)}catch(S){b.ueLogError(S,{logLevel:"WARN"})}Q("ld","ue_sushi_v1",{wb:1})},"Nxs-JS-Client")(ue_csm,window);


ue_csm.ue_unrt = 1500;
(function(d,b,t){function u(a,g){var c=a.srcElement||a.target||{},b={k:v,t:g.t,dt:g.dt,x:a.pageX,y:a.pageY,p:e.getXPath(c),n:c.nodeName};a.button&&(b.b=a.button);c.type&&(b.ty=c.type);c.href&&(b.r=e.extractStringValue(c.href));c.id&&(b.i=c.id);c.className&&c.className.split&&(b.c=c.className.split(/\s+/));h+=1;e.getFirstAscendingWidget(c,function(a){b.wd=a;d.ue.log(b,r)})}function w(a){if(!x(a.srcElement||a.target)){m+=1;n=!0;var g=f=d.ue.d(),c;p&&"function"===typeof p.now&&a.timeStamp&&(c=p.now()-
a.timeStamp,c=parseFloat(c.toFixed(2)));s=b.setTimeout(function(){u(a,{t:g,dt:c})},y)}}function z(a){if(a){var b=a.filter(A);a.length!==b.length&&(q=!0,k=d.ue.d(),n&&q&&(k&&f&&d.ue.log({k:B,t:f,m:Math.abs(k-f)},r),l(),q=!1,k=0))}}function A(a){if(!a)return!1;var b="characterData"===a.type?a.target.parentElement:a.target;if(!b||!b.hasAttributes||!b.attributes)return!1;var c={"class":"gw-clock gw-clock-aria s-item-container-height-auto feed-carousel using-mouse kfs-inner-container".split(" "),id:["dealClock",
"deal_expiry_timer","timer"],role:["timer"]},d=!1;Object.keys(c).forEach(function(a){var e=b.attributes[a]?b.attributes[a].value:"";(c[a]||"").forEach(function(a){-1!==e.indexOf(a)&&(d=!0)})});return d}function x(a){if(!a)return!1;var b=(e.extractStringValue(a.nodeName)||"").toLowerCase(),c=(e.extractStringValue(a.type)||"").toLowerCase(),d=(e.extractStringValue(a.href)||"").toLowerCase();a=(e.extractStringValue(a.id)||"").toLowerCase();var f="checkbox color date datetime-local email file month number password radio range reset search tel text time url week".split(" ");
if(-1!==["select","textarea","html"].indexOf(b)||"input"===b&&-1!==f.indexOf(c)||"a"===b&&-1!==d.indexOf("http")||-1!==["sitbreaderrightpageturner","sitbreaderleftpageturner","sitbreaderpagecontainer"].indexOf(a))return!0}function l(){n=!1;f=0;b.clearTimeout(s)}function C(){b.ue.onunload(function(){ue.count("armored-cxguardrails.unresponsive-clicks.violations",h);ue.count("armored-cxguardrails.unresponsive-clicks.violationRate",h/m*100||0)})}if(b.MutationObserver&&b.addEventListener&&Object.keys&&
d&&d.ue&&d.ue.log&&d.ue_unrt&&d.ue_utils){var y=d.ue_unrt,r="cel",v="unr_mcm",B="res_mcm",p=b.performance,e=d.ue_utils,n=!1,f=0,s=0,q=!1,k=0,h=0,m=0;b.addEventListener&&(b.addEventListener("mousedown",w,!0),b.addEventListener("beforeunload",l,!0),b.addEventListener("visibilitychange",l,!0),b.addEventListener("pagehide",l,!0));b.ue&&b.ue.event&&b.ue.onSushiUnload&&b.ue.onunload&&C();(new MutationObserver(z)).observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}})(ue_csm,window,document);


ue_csm.ue.exec(function(g,e){if(e.ue_err){var f="";e.ue_err.errorHandlers||(e.ue_err.errorHandlers=[]);e.ue_err.errorHandlers.push({name:"fctx",handler:function(a){if(!a.logLevel||"FATAL"===a.logLevel)if(f=g.getElementsByTagName("html")[0].innerHTML){var b=f.indexOf("var ue_t0=ue_t0||+new Date();");if(-1!==b){var b=f.substr(0,b).split(String.fromCharCode(10)),d=Math.max(b.length-10-1,0),b=b.slice(d,b.length-1);a.fcsmln=d+b.length+1;a.cinfo=a.cinfo||{};for(var c=0;c<b.length;c++)a.cinfo[d+c+1+""]=
b[c]}b=f.split(String.fromCharCode(10));a.cinfo=a.cinfo||{};if(!(a.f||void 0===a.l||a.l in a.cinfo))for(c=+a.l-1,d=Math.max(c-5,0),c=Math.min(c+5,b.length-1);d<=c;d++)a.cinfo[d+1+""]=b[d]}}})}},"fatals-context")(document,window);


(function(m,b){function c(k){function f(a){a&&"string"===typeof a&&(a=(a=a.match(/^(?:https?:)?\/\/(.*?)(\/|$)/i))&&1<a.length?a[1]:null,a&&a&&("number"===typeof e[a]?e[a]++:e[a]=1))}function d(a){var e=10,d=+new Date;a&&a.timeRemaining?e=a.timeRemaining():a={timeRemaining:function(){return Math.max(0,e-(+new Date-d))}};for(var c=b.performance.getEntries(),k=e;g<c.length&&k>n;)c[g].name&&f(c[g].name),g++,k=a.timeRemaining();g>=c.length?h(!0):l()}function h(a){if(!a){a=m.scripts;var c;if(a)for(var d=
0;d<a.length;d++)(c=a[d].getAttribute("src"))&&"undefined"!==c&&f(c)}0<Object.keys(e).length&&(p&&ue_csm.ue&&ue_csm.ue.event&&(a={domains:e,pageType:b.ue_pty||null,subPageType:b.ue_spty||null,pageTypeId:b.ue_pti||null},ue_csm.ue_sjslob&&(a.lob=ue_csm.ue_lob||"0"),ue_csm.ue.event(a,"csm","csm.CrossOriginDomains.2")),b.ue_ext=e)}function l(){!0===k?d():b.requestIdleCallback?b.requestIdleCallback(d):b.requestAnimationFrame?b.requestAnimationFrame(d):b.setTimeout(d,100)}function c(){if(b.performance&&
b.performance.getEntries){var a=b.performance.getEntries();!a||0>=a.length?h(!1):l()}else h(!1)}var e=b.ue_ext||{};b.ue_ext||c();return e}function q(){setTimeout(c,r)}var s=b.ue_dserr||!1,p=!0,n=1,r=2E3,g=0;b.ue_err&&s&&(b.ue_err.errorHandlers||(b.ue_err.errorHandlers=[]),b.ue_err.errorHandlers.push({name:"ext",handler:function(b){if(!b.logLevel||"FATAL"===b.logLevel){var f=c(!0),d=[],h;for(h in f){var f=h,g=f.match(/amazon(\.com?)?\.\w{2,3}$/i);g&&1<g.length||-1!==f.indexOf("amazon-adsystem.com")||
-1!==f.indexOf("amazonpay.com")||-1!==f.indexOf("cloudfront-labs.amazonaws.com")||d.push(h)}b.ext=d}}}));b.ue&&b.ue.isl?c():b.ue&&ue.attach&&ue.attach("load",q)})(document,window);





var ue_wtc_c = 3;
ue_csm.ue.exec(function(b,e){function l(){for(var a=0;a<f.length;a++)a:for(var d=s.replace(A,f[a])+g[f[a]]+t,c=arguments,b=0;b<c.length;b++)try{c[b].send(d);break a}catch(e){}g={};f=[];n=0;k=p}function u(){B?l(q):l(C,q)}function v(a,m,c){r++;if(r>w)d.count&&1==r-w&&(d.count("WeblabTriggerThresholdReached",1),b.ue_int&&console.error("Number of max call reached. Data will no longer be send"));else{var h=c||{};h&&-1<h.constructor.toString().indexOf(D)&&a&&-1<a.constructor.toString().indexOf(x)&&m&&-1<
m.constructor.toString().indexOf(x)?(h=b.ue_id,c&&c.rid&&(h=c.rid),c=h,a=encodeURIComponent(",wl="+a+"/"+m),2E3>a.length+p?(2E3<k+a.length&&u(),void 0===g[c]&&(g[c]="",f.push(c)),g[c]+=a,k+=a.length,n||(n=e.setTimeout(u,E))):b.ue_int&&console.error("Invalid API call. The input provided is over 2000 chars.")):d.count&&(d.count("WeblabTriggerImproperAPICall",1),b.ue_int&&console.error("Invalid API call. The input provided does not match the API protocol i.e ue.trigger(String, String, Object)."))}}function F(){d.trigger&&
d.trigger.isStub&&d.trigger.replay(function(a){v.apply(this,a)})}function y(){z||(f.length&&l(q),z=!0)}var t=":1234",s="//"+b.ue_furl+"/1/remote-weblab-triggers/1/OE/"+b.ue_mid+":"+b.ue_sid+":PLCHLDR_RID$s:wl-client-id%3DCSMTriger",A="PLCHLDR_RID",E=b.wtt||1E4,p=s.length+t.length,w=b.mwtc||2E3,G=1===e.ue_wtc_c,B=3===e.ue_wtc_c,H=e.XMLHttpRequest&&"withCredentials"in new e.XMLHttpRequest,x="String",D="Object",d=b.ue,g={},f=[],k=p,n,z=!1,r=0,C=function(){return{send:function(a){if(H){var b=new e.XMLHttpRequest;
b.open("GET",a,!0);G&&(b.withCredentials=!0);b.send()}else throw"";}}}(),q=function(){return{send:function(a){(new Image).src=a}}}();e.encodeURIComponent&&(d.attach&&(d.attach("beforeunload",y),d.attach("pagehide",y)),F(),d.trigger=v)},"client-wbl-trg")(ue_csm,window);


(function(k,d,h){function f(a,c,b){a&&a.indexOf&&0===a.indexOf("http")&&0!==a.indexOf("https")&&l(s,c,a,b)}function g(a,c,b){a&&a.indexOf&&(location.href.split("#")[0]!=a&&null!==a&&"undefined"!==typeof a||l(t,c,a,b))}function l(a,c,b,e){m[b]||(e=u&&e?n(e):"N/A",d.ueLogError&&d.ueLogError({message:a+c+" : "+b,logLevel:v,stack:"N/A"},{attribution:e}),m[b]=1,p++)}function e(a,c){if(a&&c)for(var b=0;b<a.length;b++)try{c(a[b])}catch(d){}}