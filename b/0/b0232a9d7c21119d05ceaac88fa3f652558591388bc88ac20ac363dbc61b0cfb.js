/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!"undefined"!=typeof window?window:this,function(e,t){"use strict";!0}eOf,Z=Y.slice,ee=Y.flat?te=Y.push,ne=Y.indexOf,re={},ie=re.toString,oe=re.hasOwnProperty,ae=oe.toString,se=ae.call(Object),ue={},le=ce=function(e){return null!=e&&e===e.window},fe=e.document,de={type:!0,src:!0,nonce:!0,noModule:!0},pe="3.6.1",he=he.fn=he.prototype={jquery:pe,constructor:he,length:0,toArray:get:pushStack:each:map:slice:first:last:even:odd:eq:end:push:te,sort:Y.sort,splice:Y.splice},he.extend=he.fn.extend=he.extend({expando:"jQuery"+(pe+Math.random()).replace(/\D/g,""),isReady:!0,error:noop:function(){},isPlainObject:isEmptyObject:globalEval:each:makeArray:inArray:merge:grep:map:guid:1,support:ue}),"function"==typeof Symbol&&(he.fn[Symbol.iterator]=Y[Symbol.iterator]),he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){re["[object "+t+"]"]=t.toLowerCase()});var ge=function(e){E,A,S,N,D,q,L,H,R,O,P,M,I="sizzle"+1*new Date,_=e.document,$=0,W=0,F=n(),Q=n(),B=n(),z=n(),U=X={}.hasOwnProperty,V=[],J=V.pop,G=V.push,Y=V.push,K=V.slice,Z=ee="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",te="[\\x20\\t\\r\\n\\f]",ne="(?:\\\\[\\da-fA-F]{1,6}"+te+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",re="\\["+te+"*("+ne+")(?:"+te+"*([*^$|!~]?=)"+te+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ne+"))|)"+te+"*\\]",ie=":("+ne+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+re+")*)|.*)\\)|)",oe=new RegExp(te+"+","g"),ae=new RegExp("^"+te+"+|((?:^|[^\\\\])(?:\\\\.)*)"+te+"+$","g"),se=new RegExp("^"+te+"*,"+te+"*"),ue=new RegExp("^"+te+"*([>+~]|"+te+")"+te+"*"),le=new RegExp(te+"|>"),ce=new RegExp(ie),fe=new RegExp("^"+ne+"$"),de={ID:new RegExp("^#("+ne+")"),CLASS:new RegExp("^\\.("+ne+")"),TAG:new RegExp("^("+ne+"|[*])"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+ie),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+te+"*(even|odd|(([+-]|)(\\d*)n|)"+te+"*(?:([+-]|)"+te+"*(\\d+)|))"+te+"*\\)|)","i"),bool:new RegExp("^(?:"+ee+")$","i"),needsContext:new RegExp("^"+te+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+te+"*((?:-\\d)?\\d*)"+te+"*\\)|)(?=[^-]|$)","i")},pe=/HTML$/i,he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,xe=new RegExp("\\\\[\\da-fA-F]{1,6}"+te+"?|\\\\([^\\r\\n\\f])","g"),be=we=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Te=je=Ce=h({dir:"parentNode",next:"legend"});try{Y.apply(V=K.call(_.childNodes),_.childNodes),V[_.childNodes.length].nodeType}catch(x){Y={apply:V.length?}for(x in b=t.support={},j=t.isXML=D=t.setDocument=t.matches=t.matchesSelector=t.contains=t.attr=t.escape=t.error=t.uniqueSort=T=t.getText=(w=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:CHILD:PSEUDO:,filter:{TAG:CLASS:ATTR:CHILD:PSEUDO:,pseudos:{not:r(,has:r(,contains:r(,lang:r(,target:root:focus:enabled:l(!1),disabled:l(!0),checked:selected:empty:parent:header:function(e){return ge.test(e.nodeName)},input:button:text:first:c(,last:c(,eq:c(,even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(,lt:c(,gt:c(}}).pseudos.nth=w.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})w.pseudos[x]=u(x);return d.prototype=w.filters=w.pseudos,w.setFilters=new d,C=t.tokenize=k=t.compile=E=t.select=b.sortStable=I.split("").sort(U).join("")===I,b.detectDuplicates=!!N,D(),b.sortDetached=i(,i(||o("type|href|height|width",,b.attributes&&i(||o("value",,i(||o(ee,,t}(e);he.find=ge,he.expr=ge.selectors,he.expr[":"]=he.expr.pseudos,he.uniqueSort=he.unique=ge.uniqueSort,he.text=ge.getText,he.isXMLDoc=ge.isXML,he.contains=ge.contains,he.escapeSelector=ge.escape;var me=ye=ve=he.expr.match.needsContext,xe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;he.filter=he.fn.extend({find:filter:function(e){return this.pushStack(a(this,e||[],!1))},not:is:);var be,we=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(he.fn.init=.prototype=he.fn,be=he(fe);var Te=/^(?:parents|prev(?:Until|All))/,je={children:!0,contents:!0,next:!0,prev:!0};he.fn.extend({has:closest:index:add:addBack:),he.each({parent:parents:function(e){return me(e,"parentNode")},parentsUntil:function(e,t,n){return me(e,"parentNode",n)},next:function(e){return s(e,"nextSibling")},prev:function(e){return s(e,"previousSibling")},nextAll:function(e){return me(e,"nextSibling")},prevAll:nextUntil:function(e,t,n){return me(e,"nextSibling",n)},prevUntil:siblings:children:contents:,;var Ce=/[^\x20\t\r\n\f]+/g;he.Callbacks=he.extend({Deferred:when:);var ke=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;he.Deferred.exceptionHook=he.readyException=var Ee=he.Deferred();he.fn.ready=he.extend({isReady:!1,readyWait:1,ready:),he.ready.then=Ee.then,"complete"===fe.readyState||"loading"!==fe.readyState&&!fe.documentElement.doScroll?e.setTimeout(he.ready):(fe.addEventListener("DOMContentLoaded",f),e.addEventListener("load",f));var Ae=Se=/^-ms-/,Ne=/-([a-z])/g,De=h.uid=1,h.prototype={cache:set:get:access:remove:hasData:;var qe=new h,Le=new h,He=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Re=/[A-Z]/g;he.extend({hasData:data:function(e,t,n){return Le.access(e,t,n)},removeData:function(e,t){Le.remove(e,t)},_data:_removeData:),he.fn.extend({data:removeData:function(e){return this.each(function(){Le.remove(this,e)})}}),he.extend({queue:dequeue:_queueHooks:),he.fn.extend({queue:dequeue:function(e){return this.each(function(){he.dequeue(this,e)})},clearQueue:promise:);var Oe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Pe=new RegExp("^(?:([+-])=|)("+Oe+")([a-z%]*)$","i"),Me=["Top","Right","Bottom","Left"],Ie=fe.documentElement,_e=function(e){return he.contains(e.ownerDocument,e)},$e={composed:!0};Ie.getRootNode&&(_e=;var We=Fe={};he.fn.extend({show:hide:toggle:);var Qe,Be,ze=/^(?:checkbox|radio)$/i,Ue=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Xe=/^$|^module$|\/(?:java|ecma)script/i;Qe=fe.createDocumentFragment().appendChild(fe.createElement("div")),(Be=fe.createElement("input")).setAttribute("type","radio"),Be.setAttribute("checked","checked"),Be.setAttribute("name","t"),Qe.appendChild(Be),ue.checkClone=Qe.cloneNode(!0).cloneNode(!0).lastChild.checked,Qe.innerHTML="<textarea>x</textarea>",ue.noCloneChecked=!!Qe.cloneNode(!0).lastChild.defaultValue,Qe.innerHTML="<option></option>",ue.option=!!Qe.lastChild;var Ve={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ve.tbody=Ve.tfoot=Ve.colgroup=Ve.caption=Ve.thead,Ve.th=Ve.td,ue.option||(Ve.optgroup=Ve.option=[1,"<select multiple='multiple'>","</select>"]);var Je=/<|&#?\w+;/,Ge=/^([^.]*)(?:\.(.+)|)/;he.event={global:{},add:remove:dispatch:handlers:addProp:fix:special:{load:{noBubble:!0},click:{setup:trigger:_default:,beforeunload:{postDispatch:}},he.removeEvent=he.Event=he.Event.prototype={constructor:he.Event,isDefaultPrevented:T,isPropagationStopped:T,isImmediatePropagationStopped:T,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=w,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:stopImmediatePropagation:,he.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},he.event.addProp),he.each({focus:"focusin",blur:"focusout"},,he.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},,he.fn.extend({on:one:off:);var Ye=/<script|<style|<link/i,Ke=/checked\s*(?:[^=]|=\s*.checked.)/i,Ze=/^\s*<!\[CDATA\[|\]\]>\s*$/g;he.extend({htmlPrefilter:function(e){return e},clone:cleanData:),he.fn.extend({detach:remove:text:append:prepend:before:after:empty:clone:html:replaceWith:),he.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},;var et=new RegExp("^("+Oe+")(?!px)[a-z%]+$","i"),tt=/^--/,nt=rt=it=new RegExp(Me.join("|"),"i"),ot="[\\x20\\t\\r\\n\\f]",at=new RegExp("^"+ot+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ot+"+$","g");!);var st=["Webkit","Moz","ms"],ut=fe.createElement("div").style,lt={},ct=/^(none|table(?!-c[ea]).+)/,ft={position:"absolute",visibility:"hidden",display:"block"},dt={letterSpacing:"0",fontWeight:"400"};he.extend({cssHooks:{opacity:{get:},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:css:),he.each(["height","width"],,he.cssHooks.marginLeft=H(ue.reliableMarginLeft,,he.each({margin:"",padding:"",border:"Width"},,he.fn.extend({css:),((he.Tween=I).prototype={constructor:I,init:cur:run:).init.prototype=I.prototype,(I.propHooks={_default:{get:set:}).scrollTop=I.propHooks.scrollLeft={set:,he.easing={linear:function(e){return e},swing:_default:"swing"},he.fx=I.prototype.init,he.fx.step={};var pt,ht,gt,mt,yt=/^(?:toggle|show|hide)$/,vt=/queueHooks$/;he.Animation=he.extend(Q,{tweeners:{"*":[},tweener:prefilters:[,prefilter:),he.speed=he.fn.extend({fadeTo:animate:stop:finish:),
he.each(["toggle","show","hide"],,he.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},,he.timers=[],he.fx.tick=he.fx.timer=he.fx.interval=13,he.fx.start=he.fx.stop=he.fx.speeds={slow:600,fast:200,_default:400},he.fn.delay=gt=fe.createElement("input"),mt=fe.createElement("select").appendChild(fe.createElement("option")),gt.type="checkbox",ue.checkOn=""!==gt.value,ue.optSelected=mt.selected,(gt=fe.createElement("input")).value="t",gt.type="radio",ue.radioValue="t"===gt.value;var xt,bt=he.expr.attrHandle;he.fn.extend({attr:function(e,t){return Ae(this,he.attr,e,t,1<arguments.length)},removeAttr:),he.extend({attr:attrHooks:{type:{set:},removeAttr:),xt={set:,he.each(he.expr.match.bool.source.match(/\w+/g),;var wt=/^(?:input|select|textarea|button)$/i,Tt=/^(?:a|area)$/i;he.fn.extend({prop:removeProp:),he.extend({prop:propHooks:{tabIndex:{get:},propFix:{"for":"htmlFor","class":"className"}}),ue.optSelected||(he.propHooks.selected={get:set:),he.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],,he.fn.extend({addClass:removeClass:toggleClass:hasClass:);var jt=/\r/g;he.fn.extend({val:),he.extend({valHooks:{option:{get:,select:{get:set:}}),he.each(["radio","checkbox"],,ue.focusin="onfocusin"in e;var Ct=/^(?:focusinfocus|focusoutblur)$/,kt=he.extend(he.event,{trigger:simulate:),he.fn.extend({trigger:triggerHandler:),ue.focusin||he.each({focus:"focusin",blur:"focusout"},;var Et=e.location,At={guid:Date.now()},St=/\?/;he.parseXML=var Nt=/\[\]$/,Dt=/\r?\n/g,qt=/^(?:submit|button|image|reset|file)$/i,Lt=/^(?:input|select|textarea|keygen)/i;he.param=he.fn.extend({serialize:serializeArray:);var Ht=/%20/g,Rt=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Mt=/^(?:GET|HEAD)$/,It=/^\/\//,_t={},$t={},Wt="*/".concat("*"),Ft=fe.createElement("a");Ft.href=Et.href,he.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":he.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:ajaxPrefilter:V(_t),ajaxTransport:V($t),ajax:getJSON:getScript:),he.each(["get","post"],,he.ajaxPrefilter(,he._evalUrl=he.fn.extend({wrapAll:wrapInner:wrap:unwrap:),he.expr.pseudos.hidden=he.expr.pseudos.visible=he.ajaxSettings.xhr=var Qt={0:200,1223:204},Bt=he.ajaxSettings.xhr();ue.cors=!!Bt&&"withCredentials"in Bt,ue.ajax=Bt=!!Bt,he.ajaxTransport(,he.ajaxPrefilter(,he.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":}),he.ajaxPrefilter("script",,he.ajaxTransport("script",;var zt,Ut=[],Xt=/(=)\?(?=&|$)|\?\?/;he.ajaxSetup({jsonp:"callback",jsonpCallback:),he.ajaxPrefilter("json jsonp",,ue.createHTMLDocument=((zt=fe.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===zt.childNodes.length),he.parseHTML=he.fn.load=he.expr.pseudos.animated=he.offset={setOffset:,he.fn.extend({offset:position:offsetParent:),he.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},,he.each(["top","left"],,he.each({Height:"height",Width:"width"},,he.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],,he.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:),he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),;var Vt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;he.proxy=he.holdReady=he.isArray=Array.isArray,he.parseJSON=JSON.parse,he.nodeName=o,he.isFunction=le,he.isWindow=ce,he.camelCase=p,he.type=r,he.now=Date.now,he.isNumeric=he.trim=function(e){return null==e?"":(e+"").replace(Vt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],;var Jt=e.jQuery,Gt=e.$;return he.noConflict=void 0===t&&(e.jQuery=e.$=he),he}),
/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(e,t){"use strict";eVersion="3.4.0";var c=Object.create(null),f=(e.migrateDisablePatches=e.migrateEnablePatches=e.migrateIsPatchEnabled=t.console&&t.console.log&&(e&&n("3.0.0")||t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),e.migrateWarnings&&t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),t.console.log("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion)),{});e.migrateDeduplicateWarnings=!0,e.migrateWarnings=[],void 0===e.migrateTrace&&(e.migrateTrace=!0),e.migrateReset="BackCompat"===t.document.compatMode&&r("quirks","jQuery is not compatible with Quirks Mode");var d,p,h,g={},m=e.fn.init,y=e.find,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,x=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(d in s(e.fn,"init","selector-empty-id"),e.fn.init.prototype=e.fn,s(e,"find","selector-hash"),y)Object.prototype.hasOwnProperty.call(y,d)&&(e.find[d]=y[d]);a(e.fn,"size","size","jQuery.fn.size() is deprecated and removed; use the .length property"),a(e,"parseJSON","parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),a(e,"holdReady",e.holdReady,"holdReady","jQuery.holdReady is deprecated"),a(e,"unique",e.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),i(e.expr,"filters",e.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),i(e.expr,":",e.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),n("3.1.1")&&a(e,"trim","trim","jQuery.trim is deprecated; use String.prototype.trim"),n("3.2.0")&&(a(e,"nodeName","nodeName","jQuery.nodeName is deprecated"),a(e,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),n("3.3.0")&&(a(e,"isNumeric","isNumeric","jQuery.isNumeric() is deprecated"),e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),,a(e,"type","type","jQuery.type is deprecated"),a(e,"isFunction","isFunction","jQuery.isFunction() is deprecated"),a(e,"isWindow","isWindow","jQuery.isWindow() is deprecated")),e.ajax&&(p=e.ajax,h=/(=)\?(?=&|$)|\?\?/,s(e,"ajax","jqXHR-methods"),n("4.0.0")||e.ajaxPrefilter("+json",);var w=e.fn.removeAttr,T=e.fn.toggleClass,j=/\S+/g;s(e.fn,"removeAttr","removeAttr-bool"),s(e.fn,"toggleClass","toggleClass-bool");var C,k=!1,E=/^[a-z]/,A=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;e.swap&&e.each(["height","width","reliableMarginRight"],,s(e,"swap","swap"),n("3.4.0")&&"undefined"!=typeof Proxy&&(e.cssProps=new Proxy(e.cssProps||{},{set:function(){return r("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),n("4.0.0")&&"undefined"!=typeof Proxy&&(e.cssNumber=new Proxy({animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},{get:function(){return r("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:)),C=e.fn.css,s(e.fn,"css",function(t,n){var i,o=this;return t&&"object"==typeof t&&!Array.isArray(t)?(e.each(t,,this):("number"==typeof n&&(i=n=u(t),E.test(i)&&A.test(i[0].toUpperCase()+i.slice(1))||e.cssNumber[n]||r("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+t+'", value )')),C.apply(this,arguments))},"css-number");var S,N,D,q,L,H,R,O=e.data,P=(s(e,"data","data-camelCase"),e.fx&&(D=e.Tween.prototype.run,q=s(e.Tween.prototype,"run","easing-one-arg"),S=e.fx.interval,N="jQuery.fx.interval is deprecated",t.requestAnimationFrame&&Object.defineProperty(e.fx,"interval",{configurable:!0,enumerable:!0,get:set:)),e.fn.load),M=e.event.add,I=e.event.fix,_=(e.event.props=[],e.event.fixHooks={},i(e.event.props,"concat",e.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),s(e.event,"fix","event-old-patch"),s(e.event,"add","load-after-event"),e.each(["load","unload","error"],,e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),,e(,e.event.special.ready={setup:,a(e.fn,"bind","pre-on-methods","jQuery.fn.bind() is deprecated"),a(e.fn,"unbind","pre-on-methods","jQuery.fn.unbind() is deprecated"),a(e.fn,"delegate","pre-on-methods","jQuery.fn.delegate() is deprecated"),a(e.fn,"undelegate","pre-on-methods","jQuery.fn.undelegate() is deprecated"),a(e.fn,"hover","pre-on-methods","jQuery.fn.hover() is deprecated"),/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),$=(e.UNSAFE_restoreLegacyHtmlPrefilter=function(){e.migrateEnablePatches("self-closed-tags")},s(e,"htmlPrefilter","self-closed-tags"),e.migrateDisablePatches("self-closed-tags"),e.fn.offset);return s(e.fn,"offset","offset-valid-elem"),e.ajax&&(L=e.param,s(e,"param","param-ajax-traditional")),a(e.fn,"andSelf",e.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),e.Deferred&&(H=e.Deferred,R=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]],s(e,"Deferred","deferred-pipe"),e.Deferred.exceptionHook=H.exceptionHook),e}),
/*
 * jQuery Watermark plugin
 * Version 1.2 (7-DEC-2010)
 * @requires jQuery v1.3 or later
 *
 * Examples at: http://mario.ec/static/jq-watermark/
 * Copyright (c) 2010 Mario Estrada
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
function(e){var t=/MSIE [0-7]\./.test(navigator.userAgent),n=4;e.watermarker=function(){},e.extend(e.watermarker,{defaults:{color:"#bbb",left:0,top:0,fallback:!1,animDuration:300,minOpacity:.6},setDefaults:checkVal:function(t,n){return 0==t.length?e(n).show():e(n).hide(),t.length>0},html5_support:),e.fn.watermark=function(r,i){var o;if(i=e.extend(e.watermarker.defaults,i),o=this.filter("textarea, input:not(:checkbox,:radio,:file,:submit,:reset)"),!i.fallback||!e.watermarker.html5_support())return o.each(function(){var o,a,s,u,l,c,f=0;"processed"!=(o=e(this)).attr("data-jq-watermark")&&(a=o.attr("placeholder")!=undefined&&""!=o.attr("placeholder")?"placeholder":"title",s=r===undefined||""===r?e(this).attr(a):r,u=e('<span class="watermark_container"></span>'),l=e('<span class="watermark">'+s+"</span>"),"placeholder"==a&&o.removeAttr("placeholder"),u.css({}),t&&u.css({zoom:1,display:"inline"}),o.wrap(u).attr("data-jq-watermark","processed"),"textarea"==this.nodeName.toLowerCase()?(e_height=o.css("line-height"),e_height="normal"===e_height?parseInt(o.css("font-size")):e_height,f="auto"!=o.css("padding-top")?parseInt(o.css("padding-top")):0):(e_height=o.outerHeight(),e_height<=0&&(e_height="auto"!=o.css("padding-top")?parseInt(o.css("padding-top")):0,e_height+="auto"!=o.css("padding-bottom")?parseInt(o.css("padding-bottom")):0,e_height+="auto"!=o.css("height")?parseInt(o.css("height")):0)),f+="auto"!=o.css("margin-top")?parseInt(o.css("margin-top")):0,c="auto"!=o.css("margin-left")?parseInt(o.css("margin-left")):0,c+="auto"!=o.css("padding-left")?parseInt(o.css("padding-left")):0,l.css({position:"absolute",display:"inline  ",fontFamily:o.css("font-family"),fontSize:o.css("font-size"),color:i.color,left:n+i.left+c,top:i.top+f,height:e_height,lineHeight:e_height+"px",textAlign:"left",pointerEvents:"none",float:"left",width:"350px"}).data("jq_watermark_element",o),e.watermarker.checkVal(o.val(),l),l.click(,o.before(l).bind("focus.jq_watermark",function(){e.watermarker.checkVal(e(this).val(),l)||l.stop().fadeTo(i.animDuration,i.minOpacity)}).bind("blur.jq_watermark change.jq_watermark",function(){e.watermarker.checkVal(e(this).val(),l)||l.stop().fadeTo(i.animDuration,1)}).bind("keydown.jq_watermark",.bind("keyup.jq_watermark",function(){e.watermarker.checkVal(e(this).val(),l)}))}),this},e(document).ready(}(jQuery),this,function(e){"use strict";e.fn.typeWatch=function(t){function n(t,n){var r=e(t.el).val();(r.length>=o.captureLength&&r.toUpperCase()!=t.text||n&&r.length>=o.captureLength||0==r.length&&t.text)&&(t.text=r.toUpperCase(),t.cb.call(t.el,r))}function r(t){var r=t.type.toUpperCase();if(e.inArray(r,o.inputTypes)>=0){var i={timer:null,text:e(t).val().toUpperCase(),cb:o.callback,el:t,wait:o.wait};o.highlight&&e(t).click(;var a=function(t){var r=i.wait,a=!1,s=this.type.toUpperCase();"undefined"!=typeof t.keyCode&&13==t.keyCode&&"TEXTAREA"!=s&&e.inArray(s,o.inputTypes)>=0&&(r=1,a=!0);var u=clearTimeout(i.timer),i.timer=setTimeout(u,r)};e(t).on("keydown paste cut input change",a)}}var i=["TEXT","TEXTAREA","PASSWORD","TEL","SEARCH","URL","EMAIL","DATETIME","DATE","MONTH","WEEK","TIME","DATETIME-LOCAL","NUMBER","RANGE"],o=e.extend({wait:750,callback:highlight:!0,captureLength:2,inputTypes:i},t);return this.each(}}),jQuery(function(e){var t=e("meta[name=csrf-token]").attr("content"),n=e("meta[name=csrf-param]").attr("content");e.fn.extend({triggerAndReturn:function(t,n){var r=new e.Event(t);return this.trigger(r,n),!1!==r.result},callRemote:function(){var t=this,n=t.attr("method")||t.attr("data-method")||"GET",r=t.attr("action")||t.attr("href"),i=t.attr("data-type")||"script";if(r===undefined)throw"No URL specified for remote call (action or href must be present).";if(t.triggerAndReturn("ajax:before")){var o=t.is("form")?t.serializeArray():[];e.ajax({url:r,data:o,dataType:i,type:n.toUpperCase(),beforeSend:function(e){t.trigger("ajax:loading",e)},success:function(e,n,r){t.trigger("ajax:success",[e,n,r])},complete:error:)}t.trigger("ajax:after")}}),e(document).on("click","a[data-confirm],input[data-confirm]",function(){var t=e(this);if(t.triggerAndReturn("confirm")&&!confirm(t.attr("data-confirm")))return!1}),e(document).on("submit","form[data-remote]",function(t){e(this).callRemote(),t.preventDefault()}),e(document).on("click","a[data-remote],input[data-remote]",,e(document).on("click","a[data-method]:not([data-remote])",function(r){var i=e(this),o=i.attr("href"),a=i.attr("data-method"),s=e('<form method="post" action="'+o+'"></form>'),u='<input name="_method" value="'+a+'" type="hidden" />';null!=n&&null!=t&&(u+='<input name="'+n+'" value="'+t+'" type="hidden" />'),s.hide().append(u).appendTo("body"),r.preventDefault(),s.submit()});var r="input[data-disable-with]",i="form[data-remote]:has("+r+")",o="form:not([data-remote]):has("+r+")",a=function(){e(this).find(r).each(function(){var t=e(this);t.data("enable-with",t.val()).attr("value",t.attr("data-disable-with")).attr("disabled","disabled")})};e(document).on("ajax:before",i,a),e(document).on("submit",o,a),e(document).on("ajax:complete",i,function(){e(this).find(r).each(})}),function(){var e,t,n,r,i,o,a,s,u,l,c;o=void 0,a=!1,t="/contact-us",e="",n="",r="",l=function(){var e;e="/questions/",$("#results").load(e)},s=function(e){var t;void 0===e&&(e=$("#instant_search").val()),(e=(e=(e=jQuery.trim(e)).replace("<","")).replace(">","")).length>1?(t=$("#instant_search").attr("get-url"),(a||" "===e.substr(e.length))&&o.abort(),a=!0,$("#results").html(r),o=$.getJSON(t,{query:e},function(t){if(null===t)return i(e),!1;t.length>0?u(t,e):i(e),a=!1})):$("#instant_search").val().length>3&&$("#results").html(r)},c=function(e){return void 0!==e&&(e=e.replace(RegExp(" ","gi"),"-").replace(/\?/gi,"").replace(/\//gi,"").replace(/\./gi,"").replace(/\'/gi,"").replace(/\,/gi,"").replace(/\%/gi,"")),e},u=function(t){var r;r="",r=n,$.each(t,function(e,n){var i;n.question.name.length>0&&(i=t.length,r+=i>1?'<div id="question'+n.question.id+'" class="question passive">':'<div id="question'+n.question.id+'" class="question active">',r+='<h2><a href="/questions/'+n.question.id+"-"+c(n.question.name)+'">'+n.question.name+"</a></h2>",r+="</div>")}),r+=e,$("#results").delay().html(r)},i=function(e){$("#results").load(t+"?contact_query="+encodeURIComponent(e))},r+="<div id='loading'>",r+="Please wait... &nbsp; &nbsp; &nbsp;",r+="<img src='https://static.helpjuice.com/helpjuice_production/loading.gif' />",r+="</div>",$(function(){var e,t;window.location.hash&&"search_query"===(e=window.location.hash.split("#")[1]).split("=")[0]&&(t=e.split("=")[1],t=decodeURIComponent(t),$("#instant_search").val(t),$("#search").val(t),s()),$("#instant_search").keyup(,$("#instant_search").typeWatch({callback:s,wait:250}),$("#initContactForm").click(function(){return $("#results").html(i($("#instant_search").val()))}),$(".feedback").length&&$(".feedback").click(function(e){var t,n,i,o;e.preventDefault(),$(this),i=(t=$(this).parent().parent().find("form")).find("#feedback_score"),o=t.attr("action"),"yes"===$(this).attr("id").toString().toLowerCase()?i.val("1"):i.val("0"),n=t.serialize(),t.html(r),$.post(o,n,})})}.call(this);