(("undefined"!==typeof window?window:this,function(k,G){{for(var c,e,f=[],g=0,l=a.length;g<l;g++)if(e=a[g],e.style)if(c=e.style.display,b){if("none"===c&&(f[g]=w.get(e,"display")||null,f[g]||(e.style.display="")),""===e.style.display&&Ua(e)){c=g;var m;m=e.ownerDocument;
e=e.nodeName;var n=nb[e];n||(m=m.body.appendChild(m.createElement(e)),n=d.css(m,"display"),m.parentNode.removeChild(m),"none"===n&&(n="block"),nb[e]=n);m=n;f[c]=m}}else"none"!==c&&(f[g]="none",w.set(e,"display",c));for(g=0;g<l;g++)null!=f[g]&&(a[g].style.display=f[g]);return a}ction X(){return!0}ction Aa(a,b,c){c?(w.set(a,b,!1),d.event.add(a,b,{namespace:!1,handler:function(a){var e,g,l=w.get(this,b);if(a.isTrigger&1&&this[b])if(l.length)(d.event.special[b]||{}).delegateType&&a.stopPropagation();else{if(l=na.call(arguments),w.set(this,
b,l),e=c(this,b),this[b](),g=w.get(this,b),l!==g||e?w.set(this,b,!1):g={},l!==g)return a.stopImmediatePropagation(),a.preventDefault(),g&&g.value}else l.length&&(w.set(this,b,{value:d.event.trigger(d.extend(l[0],d.Event.prototype),l.slice(1),this)}),a.stopImmediatePropagation())}})):void 0===w.get(a,b)&&d.event.add(a,b,X)}ion da(a,b,c){var e,f,g=a.style;if(c=c||$a(a))f=c.getPropertyValue(b)||c[b],""!==f||za(a)||(f=d.style(a,b)),!D.pixelBoxStyles()&&eb.test(f)&&Yb.test(b)&&(a=g.width,b=g.minWidth,e=g.maxWidth,g.minWidth=g.maxWidth=g.width=f,f=c.width,g.width=
a,g.minWidth=b,g.maxWidth=e);return void 0!==f?f+"":f}a,b,c){var e,f=0,g=y.prefilters.length,l=d.Deferred().always(,m=n=l.promise({elem:a,props:d.extend({},b),opts:d.extend(!0,{specialEasing:{},easing:d.easing._default},c),originalProperties:b,originalOptions:c,startTime:oa||h(),duration:c.duration,tweens:[],createTween:stop:);
c=n.props;for(t(c,n.opts.specialEasing);f<g;f++)if(b=y.prefilters[f].call(n,a,c,n.opts))return v(b.stop)&&(d._queueHooks(n.elem,n.opts.queue).stop=b.stop.bind(b)),b;d.map(c,r,n);v(n.opts.start)&&n.opts.start.call(a,n);n.progress(n.opts.progress).done(n.opts.done,n.opts.complete).fail(n.opts.fail).always(n.opts.always);d.fx.timer(d.extend(m,{elem:a,anim:n,queue:n.opts.queue}));return n},vb=Object.getPrototypeOf,na=fa.slice,qb=fa.flat?hb=fa.push,Qa=fa.indexOf,Pa={},mb=Pa.toString,db=Pa.hasOwnProperty,wb=db.toString,bc=wb.call(Object),
D={},v=wa=function(a){return null!=a&&a===a.window},u=k.document,Pb={type:!0,src:!0,nonce:!0,noModule:!0},d=d.fn=d.prototype={jquery:"3.6.0",constructor:d,length:0,toArray:get:pushStack:
each:map:slice:first:last:even:odd:eq:end:push:hb,sort:fa.sort,splice:fa.splice};d.extend=d.fn.extend=function(){var a,b,c,e,f,g=arguments[0]||{},l=1,m=arguments.length,n=!1;"boolean"===typeof g&&(n=g,g=arguments[l]||{},l++);"object"===typeof g||v(g)||(g={});l===m&&(g=this,l--);for(;l<m;l++)if(null!=(a=arguments[l]))for(b in a)e=a[b],"__proto__"!==b&&g!==e&&(n&&e&&(d.isPlainObject(e)||(f=Array.isArray(e)))?(c=g[b],c=f&&!Array.isArray(c)?[]:f||d.isPlainObject(c)?
c:{},f=!1,g[b]=d.extend(n,c,e)):void 0!==e&&(g[b]=e));return g};d.extend({expando:"jQuery"+("3.6.0"+Math.random()).replace(/\D/g,""),isReady:!0,error:noop:function(){},isPlainObject:isEmptyObject:globalEval:each:makeArray:inArray:merge:grep:
map:guid:1,support:D});"function"===typeof Symbol&&(d.fn[Symbol.iterator]=fa[Symbol.iterator]);d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){Pa["[object "+b+"]"]=b.toLowerCase()});var ta=function(a){P,Q,K,O,M,F,R,J,U,T,Y,W,L="sizzle"+1*new Date,ja=a.document,S=0,ia=0,ea=c(),fa=c(),ga=c(),aa=c(),ba=la={}.hasOwnProperty,X=[],ma=X.pop,na=X.push,V=X.push,ka=X.slice,Z=qa=/[\x20\t\r\n\f]+/g,da=/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,Ia=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,Ja=/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
ta=/[\x20\t\r\n\f]|>/,va=/:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,wa=/^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+$/,
ha={ID:/^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,CLASS:/^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)/,TAG:/^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+|[*])/,ATTR:/^\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\]/,
PSEUDO:/^:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\x00-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},ya=/HTML$/i,za=/^(?:input|select|textarea|button)$/i,Aa=/^h\d$/i,ca=/^[^{]+\{\s*\[native \w/,Ba=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,oa=/[+~]/,ra=/\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\([^\r\n\f])/g,sa=Ea=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ua=},x},Ca=},{dir:"parentNode",next:"legend"});try{V.apply(X=ka.call(ja.childNodes),ja.childNodes),X[ja.childNodes.length].nodeType}catch(z){V={apply:X.length}}}A=b.support={};D=b.isXM};M=b.setDocument=function(a){var b;a=a?a.ownerDocument||a:ja;if(a==F||9!==a.nodeType||!a.documentElement)return F;F=a;R=F.documentElement;J=!D(F);ja!=F&&(b=F.defaultView)&&b.top!==b&&(b.addEventListener?b.addEventListener("unload",xa,!1):b.attachEvent&&b.attachEvent("onunload",
xa));A.scope=});A.attributes=});A.getElementsByTagName=});A.getElementsByClassName=ca.test(F.getElementsByClassName);A.getById=});A.getById?(E.filter.I},E.find.I}):(E.filter.I},E.find.I});E.find.TAG=A.getElementsByTagNam};E.find.CLASS=A.getElementsByClassName&};T=[];U=[];if(A.qsa=ca.test(F.querySelectorAll))}),});(A.matchesSelector=ca.test(Y=R.matches||R.webkitMatchesSelector||R.mozMatchesSelector||
R.oMatchesSelector||R.msMatchesSelector))&&});
U=U.length&&new RegExp(U.join("|"));T=T.length&&new RegExp(T.join("|"));W=(b=ca.test(R.compareDocumentPosition))||ca.test(R.contains};ba=};return F};b.matche};b.matchesSelecto};b.contain};b.att};b.escap};b.erro};b.uniqueSor};N=b.getText};E=b.selectors={cacheLength:50,createPseudo:d,match:ha,attrHandle:{},find:{},relative:{"\x3e":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATT},CHIL},PSEUD}},filter:{TA},CLAS},ATT},CHIL},PSEUD}},pseudos:{not:}),has:}),contains:}),lang:}),targe},roo},focu},enabled:k(!1),
disabled:k(!0),checke},selecte},empt},paren},header:function(a){return Aa.test(a.nodeName)},inpu},butto},tex},first:}),last:}),eq:}),even:h(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:}),lt:}),gt:})}};E.pseudos.nth=E.pseudos.eq;for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})E.pseudos[C]=m(C);for(C in{submit:!0,reset:!0})E.pseudos[C]=n(C);p.prototype=E.filters=E.pseudos;E.setFilters=new p;x=b.tokeniz};G=b.compil};P=b.selec};A.sortStable=L.split("").sort(ba).join("")===L;A.detectDuplicates=!!O;M();A.sortDetached=});})||g("type|href|height|width});A.attributes&&})||g("value});})||g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped});return b}(k);d.find=ta;d.expr=ta.selectors;d.expr[":"]=d.expr.pseudos;d.uniqueSort=
d.unique=ta.uniqueSort;d.text=ta.getText;d.isXMLDoc=ta.isXML;d.contains=ta.contains;d.escapeSelector=ta.escape;var u},y},zb=d.expr.match.needsContext,Ab=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;d.filte};d.fn.extend({fin},filter:function(a){return this.pushStack(x(this,a||[],!1))},no},
i}});var Bb,cc=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(d.fn.init=function(a,b,c){var e;if(!a)return this;c=c||Bb;if("string"===typeof a){e="\x3c"===a[0]&&"\x3e"===a[a.length-1]&&3<=a.length?[null,a,null]:cc.exec(a);if(!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof d?b[0]:b,d.merge(this,d.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:u,!0)),Ab.test(e[1])&&d.isPlainObject(b))for(e in b)if(v(this[e]))this[e](b[e]);
else this.attr(e,b[e])}else if(a=u.getElementById(e[2]))this[0]=a,this.length=1;return this}return a.nodeType?(this[0]=a,this.length=1,this):v(a)?void 0!==c.ready?c.ready(a):a(d):d.makeArray(a,this)}).prototype=d.fn;Bb=d(u);var dc=/^(?:parents|prev(?:Until|All))/,ec={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({ha},closes},inde},ad},addBac}});d.each({paren},parents:function(a){return ua(a,"parentNode")},parentsUntil:function(a,b,c){return ua(a,"parentNode",c)},next:function(a){return P(a,"nextSibling")},prev:function(a){return P(a,"previousSibling")},nextAll:function(a){return ua(a,"nextSibling")},prevAl},nextUntil:function(a,b,c){return ua(a,"nextSibling",c)},prevUnti},sibling},childre},content}});
var W=/[^\x20\t\r\n\f]+/g;d.Callback};d.extend({Deferre},whe}});var fc=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;d.Deferred.exceptionHoo};d.readyExceptio};var ib=d.Deferred();d.fn.read};d.extend({isReady:!1,readyWait:1,read}});d.ready.then=ib.then;"complete"===u.readyState||"loading"!==u.readyState&&!u.documentElement.doScroll?k.setTimeout(d.ready):(u.addEventListener("DOMContentLoaded",ia),k.addEventListener("load",ia));var g},Qb=/^-ms-/,Rb=/-([a-z])/g,K};S.uid=1;S.prototype={cach},se},ge},acces},remov},hasDat}};var w=new S,M=new S,Tb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Sb=/[A-Z]/g;d.extend({hasDat},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_dat},_removeDat}});d.fn.extend({dat},removeData:function(a){return this.each(function(){M.remove(this,a)})}});d.extend({queu},dequeu},_queueHook}});d.fn.extend({queu},dequeu},clearQueu},promis}});var Cb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ca=new RegExp("^(?:([+-])\x3d|)("+Cb+")([a-z%]*)$","i"),ea=["Top","Right","Bottom","Left"],va=u.documentElement,z},gc={composed:!0};va.getRootNode&&(z});var U},nb={};d.fn.extend({sho},hid},toggl}});var La=/^(?:checkbox|radio)$/i,
ob=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,pb=/^$|^module$|\/(?:java|ecma)script/i})();var T={thead:[1,"\x3ctable\x3e","\x3c/table\x3e"],col:[2,"\x3ctable\x3e\x3ccolgroup\x3e","\x3c/colgroup\x3e\x3c/table\x3e"],tr:[2,"\x3ctable\x3e\x3ctbody\x3e","\x3c/tbody\x3e\x3c/table\x3e"],td:[3,"\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e","\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],_default:[0,"",""]};T.tbody=T.tfoot=T.colgroup=T.caption=T.thead;T.th=T.td;D.option||(T.optgroup=T.option=[1,"\x3cselect multiple\x3d'multiple'\x3e","\x3c/select\x3e"]);var Vb=/<|&#?\w+;/,Db=/^([^.]*)(?:\.(.+)|)/;
d.event={global:{},add:function(a,b,c,e,f){var g,l,m,n,k,h,q,p,r;k=w.get(a);if(Ka(a))for(c.handler&&(g=c,c=g.handler,f=g.selector),f&&d.find.matchesSelector(va,f),c.guid||(c.guid=d.guid++),(n=k.events)||(n=k.events=Object.create(null)),(l=k.handle)||(l=k.handl}),b=(b||"").match(W)||[""],k=b.length;k--;)m=Db.exec(b[k])||[],p=h=m[1],r=(m[2]||"").split(".").sort(),p&&(m=d.event.special[p]||
{},p=(f?m.delegateType:m.bindType)||p,m=d.event.special[p]||{},h=d.extend({type:p,origType:h,data:e,handler:c,guid:c.guid,selector:f,needsContext:f&&d.expr.match.needsContext.test(f),namespace:r.join(".")},g),(q=n[p])||(q=n[p]=[],q.delegateCount=0,m.setup&&!1!==m.setup.call(a,e,r,l)||a.addEventListener&&a.addEventListener(p,l)),m.add&&(m.add.call(a,h),h.handler.guid||(h.handler.guid=c.guid)),f?q.splice(q.delegateCount++,0,h):q.push(h),d.event.global[p]=!0)},remov},dispatch:function(a){var b,c,e,f,g,l=Array(arguments.length),m=d.event.fix(a);c=(w.get(this,"events")||Object.create(null))[m.type]||[];var k=d.event.special[m.type]||{};l[0]=m;for(b=1;b<arguments.length;b++)l[b]=arguments[b];m.delegateTarget=this;if(!k.preDispatch||!1!==k.preDispatch.call(this,
m)){g=d.event.handlers.call(this,m,c);for(b=0;(f=g[b++])&&!m.isPropagationStopped();)for(m.currentTarget=f.elem,c=0;(e=f.handlers[c++])&&!m.isImmediatePropagationStopped();)if(!m.rnamespace||!1===e.namespace||m.rnamespace.test(e.namespace))m.handleObj=e,m.data=e.data,e=((d.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,l),void 0!==e&&!1===(m.result=e)&&(m.preventDefault(),m.stopPropagation());k.postDispatch&&k.postDispatch.call(this,m);return m.result}},handlers:function(a,b){var c,
e,f,g,l,m=[],k=b.delegateCount,h=a.target;if(k&&h.nodeType&&!("click"===a.type&&1<=a.button))for(;h!==this;h=h.parentNode||this)if(1===h.nodeType&&("click"!==a.type||!0!==h.disabled)){g=[];l={};for(c=0;c<k;c++)e=b[c],f=e.selector+" ",void 0===l[f]&&(l[f]=e.needsContext?-1<d(f,this).index(h):d.find(f,this,null,[h]).length),l[f]&&g.push(e);g.length&&m.push({elem:h,handlers:g})}k<b.length&&m.push({elem:this,handlers:b.slice(k)});return m},addPro},fi},special:{load:{noBubble:!0},click:{setu},trigge},_defaul}},beforeunload:{postDispatc}}}};d.removeEven};d.Even};d.Event.prototype={constructor:d.Event,isDefaultPrevented:ma,isPropagationStopped:ma,isImmediatePropagationStopped:ma,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=X;
a&&!this.isSimulated&&a.preventDefault()},stopPropagatio},stopImmediatePropagatio}};d.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,
charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},d.event.addProp);d.each({focus:"focusin",blur:"focusout"});d.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"}});d.fn.extend({o},on},of}});var hc=/<script|<style|<link/i,Wb=/checked\s*(?:[^=]|=\s*.checked.)/i,Xb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;d.extend({htmlPrefilter:function(a){return a},clon},cleanDat}});d.fn.extend({detac},remov},tex},appen},prepen},befor},afte},empt},clon},htm},replaceWit}});d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"});var eb=new RegExp("^("+Cb+")(?!px)[a-z%]+$",
"i"),$},E},Yb=new RegExp(ea.join("|"),"i");(function(}var b,c,e,f,g,l,m=u.createElement("div"),h=u.createElement("div");h.style&&(h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",D.clearCloneStyle="content-box"===
h.style.backgroundClip,d.extend(D,{boxSizingReliable:function(){a();return c},pixelBoxStyles:function(){a();return f},pixelPosition:function(){a();return b},reliableMarginLeft:function(){a();return l},scrollboxSiz},reliableTrDimensions:function(){var a,b,c;null==g&&(a=u.createElement("table"),b=u.createElement("tr"),c=u.createElement("div"),a.style.cssText="position:absolute;left:-11111px;border-collapse:separate",b.style.cssText="border:1px solid",b.style.height="1px",c.style.height=
"9px",c.style.display="block",va.appendChild(a).appendChild(b).appendChild(c),c=k.getComputedStyle(b),g=parseInt(c.height,10)+parseInt(c.borderTopWidth,10)+parseInt(c.borderBottomWidth,10)===b.offsetHeight,va.removeChild(a));return g}}))})();var tb=["Webkit","Moz","ms"],sb=u.createElement("div").style,rb={},ic=/^(none|table(?!-c[ea]).+)/,Fb=/^--/,jc={position:"absolute",visibility:"hidden",display:"block"},Gb={letterSpacing:"0",fontWeight:"400"};d.extend({cssHooks:{opacity:{ge}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(a,b,c,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g,l,k=J(b),h=Fb.test(b),p=a.style;h||(b=Ba(k));l=d.cssHooks[b]||d.cssHooks[k];if(void 0!==c)g=typeof c,
"string"===g&&(f=Ca.exec(c))&&f[1]&&(c=Ta(a,b,f),g="number"),null!=c&&c===c&&("number"!==g||h||(c+=f&&f[3]||(d.cssNumber[k]?"":"px")),D.clearCloneStyle||""!==c||0!==b.indexOf("background")||(p[b]="inherit"),l&&"set"in l&&void 0===(c=l.set(a,c,e))||(h?p.setProperty(b,c):p[b]=c));else return l&&"get"in l&&void 0!==(f=l.get(a,!1,e))?f:p[b]}},cs}});d.each(["height","width"});d.cssHooks.marginLeft=ab(D.reliableMarginLef});d.each({margin:"",padding:"",border:"Width"});d.fn.extend({cs}});d.Tween=Q;Q.prototype={constructor:Q,ini},cu},ru}};Q.prototype.init.prototype=
Q.prototype;Q.propHooks={_default:{ge},se}}};Q.propHooks.scrollTop=Q.propHooks.scrollLeft={se}};
d.easing={linear:function(a){return a},swin},_default:"swing"};d.fx=Q.prototype.init;d.fx.step={};var oa,cb,kc=/^(?:toggle|show|hide)$/,lc=/queueHooks$/;d.Animation=d.extend(y,{tweeners:{"*"}]},tweene},prefilters:[function(a,b,c){var e,
f,g,l,k,h,p;p="width"in b||"height"in b;var t=this,q={},y=a.style,v=a.nodeType&&Ua(a),u=w.get(a,"fxshow");c.queue||(l=d._queueHooks(a,"fx"),null==l.unqueued&&(l.unqueued=0,k=l.empty.fire,l.empty.fir}),l.unqueued++,t.alway}));for(e in b)if(f=b[e],kc.test(f)){delete b[e];g=g||"toggle"===f;if(f===(v?"hide":"show"))if("show"===f&&u&&void 0!==u[e])v=!0;else continue;q[e]=u&&u[e]||d.style(a,
e)}if((b=!d.isEmptyObject(b))||!d.isEmptyObject(q))for(e in p&&1===a.nodeType&&(c.overflow=[y.overflow,y.overflowX,y.overflowY],h=u&&u.display,null==h&&(h=w.get(a,"display")),p=d.css(a,"display"),"none"===p&&(h?p=h:(la([a],!0),h=a.style.display||h,p=d.css(a,"display"),la([a]))),("inline"===p||"inline-block"===p&&null!=h)&&"none"===d.css(a,"float")&&(b||(t.don}),null==h&&(p=y.display,h="none"===p?"":p)),y.display="inline-block")),c.overflow&&(y.overflow="hidden",t.alway})),b=!1,q)b||(u?"hidden"in u&&(v=u.hidden):u=w.access(a,"fxshow",{display:h}),g&&(u.hidden=!v),v&&la([a],!0),t.don})),b=r(v?u[e]:0,e,t),e in u||(u[e]=b.start,v&&(b.end=b.start,b.start=0))}],prefilte}});d.spee};d.fn.extend({fadeT},animat},sto},finis}});d.each(["toggle","show","hide"]});d.each({slideDown:p("show"),slideUp:p("hide"),slideToggle:p("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}});d.timers=[];d.fx.tic};d.fx.time};d.fx.interval=13;d.fx.star};d.fx.sto};d.fx.speeds={slow:600,fast:200,_default:400};d.fn.dela}})();var Hb,Ma=d.expr.attrHandle;d.fn.extend({attr:function(a,b){return ga(this,d.attr,a,b,1<arguments.length)},removeAttr:function(a){return this.each(function(){d.removeAttr(this,a)})}});d.extend({att},attrHooks:{type:{se}}},removeAtt}});Hb=
{se}};d.each(d.expr.match.bool.source.match(/\w+/g});var mc=/^(?:input|select|textarea|button)$/i,nc=/^(?:a|area)$/i;d.fn.extend({pro},removePro}});
d.extend({pro},propHooks:{tabIndex:{ge}}},propFix:{"for":"htmlFor","class":"className"}});D.optSelected||(d.propHooks.selected={ge},se}});d.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "});d.fn.extend({addClas},removeClas},toggleClass:function(a,b){var c=typeof a,e="string"===c||Array.isArray(a);return"boolean"===typeof b&&e?b?this.addClass(a):this.removeClass(a):v(a)?this.eac}):this.each(function(){var b,g,l,h;if(e)for(g=0,l=d(this),h=Ea(a);b=h[g++];)l.hasClass(b)?l.removeClass(b):l.addClass(b);else if(void 0===a||"boolean"===c)(b=R(this))&&w.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||!1===a?"":w.get(this,
"__className__")||"")})},hasClas}});var oc=/\r/g;d.fn.extend({val:function(a){var b,c,e,f=this[0];if(arguments.length)return e=v(a),this.eac});if(f){if((b=d.valHooks[f.type]||d.valHooks[f.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(f,"value")))return c;c=f.value;return"string"===typeof c?c.replace(oc,""):null==c?"":c}}});d.extend({valHooks:{option:{ge}},select:{ge},se}}}});d.each(["radio","checkbox"});D.focusin="onfocusin"in k;var Ib=/^(?:focusinfocus|focusoutblur)$/,J};d.extend(d.event,{trigger:function(a,b,c,e){var f,g,l,h,n,p,r,q=[c||u],t=db.call(a,"type")?a.type:a;p=db.call(a,"namespace")?a.namespace.split("."):[];g=r=f=c=c||u;if(3!==c.nodeType&&8!==c.nodeType&&!Ib.test(t+d.event.triggered)&&(-1<t.indexOf(".")&&(p=t.split("."),t=p.shift(),p.sort()),h=0>t.indexOf(":")&&"on"+t,a=a[d.expando]?a:new d.Event(t,"object"===
typeof a&&a),a.isTrigger=e?2:3,a.namespace=p.join("."),a.rnamespace=a.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=c),b=null==b?[a]:d.makeArray(b,[a]),p=d.event.special[t]||{},e||!p.trigger||!1!==p.trigger.apply(c,b))){if(!e&&!p.noBubble&&!wa(c)){l=p.delegateType||t;Ib.test(l+t)||(g=g.parentNode);for(;g;g=g.parentNode)q.push(g),f=g;f===(c.ownerDocument||u)&&q.push(f.defaultView||f.parentWindow||k)}for(f=0;(g=q[f++])&&!a.isPropagationStopped();)r=
g,a.type=1<f?l:p.bindType||t,(n=(w.get(g,"events")||Object.create(null))[a.type]&&w.get(g,"handle"))&&n.apply(g,b),(n=h&&g[h])&&n.apply&&Ka(g)&&(a.result=n.apply(g,b),!1===a.result&&a.preventDefault());a.type=t;e||a.isDefaultPrevented()||p._default&&!1!==p._default.apply(q.pop(),b)||!Ka(c)||!h||!v(c[t])||wa(c)||((f=c[h])&&(c[h]=null),d.event.triggered=t,a.isPropagationStopped()&&r.addEventListener(t,Jb),c[t](),a.isPropagationStopped()&&r.removeEventListener(t,Jb),d.event.triggered=void 0,f&&(c[h]=
f));return a.result}},simulat}});d.fn.extend({trigge},triggerHandle}});D.focusin||d.each({focus:"focusin",blur:"focusout"});var Na=k.location,Kb=Date.now(),jb=/\?/;d.parseXM};var Zb=/\[\]$/,Lb=/\r?\n/g,pc=/^(?:submit|button|image|reset|file)$/i,qc=/^(?:input|select|textarea|keygen)/i;d.para};d.fn.extend({serializ},
serializeArra}});var rc=/%20/g,sc=/#.*$/,tc=/([?&])_=[^&]*/,uc=/^(.*?):[ \t]*([^\r\n]*)$/mg,
vc=/^(?:GET|HEAD)$/,wc=/^\/\//,Mb={},fb={},Nb="*/".concat("*"),kb=u.createElement("a");kb.href=Na.href;d.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Na.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Na.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset\x3dUTF-8",accepts:{"*":Nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,
html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":d.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetu},ajaxPrefilter:Ja(Mb),ajaxTransport:Ja(fb),ajax:function(a,b){function c(a,b,c,l){var m,r,u,A=b;if(!n){n=!0;h&&k.clearTimeout(h);e=void 0;g=l||"";C.readyState=0<a?4:0;l=200<=a&&300>a||304===a;
c&&(u=$b(q,C,c));!l&&-1<d.inArray("script",q.dataTypes)&&0>d.inArray("json",q.dataTypes)&&(q.converters["text script"]=function(){});u=ac(q,u,C,l);if(l)q.ifModified&&((c=C.getResponseHeader("Last-Modified"))&&(d.lastModified[f]=c),(c=C.getResponseHeader("etag"))&&(d.etag[f]=c)),204===a||"HEAD"===q.type?A="nocontent":304===a?A="notmodified":(A=u.state,m=u.data,r=u.error,l=!r);else if(r=A,a||!A)A="error",0>a&&(a=0);C.status=a;C.statusText=(b||A)+"";l?v.resolveWith(t,[m,A,C]):v.rejectWith(t,[C,A,r]);
C.statusCode(N);N=void 0;p&&y.trigger(l?"ajaxSuccess":"ajaxError",[C,q,l?m:r]);w.fireWith(t,[C,A]);p&&(y.trigger("ajaxComplete",[C,q]),--d.active||d.event.trigger("ajaxStop"))}}"object"===typeof a&&(b=a,a=void 0);b=b||{};var e,f,g,l,h,n,p,r,q=d.ajaxSetup({},b),t=q.context||q,y=q.context&&(t.nodeType||t.jquery)?d(t):d.event,v=d.Deferred(),w=d.Callbacks("once memory"),N=q.statusCode||{},B={},x={},D="canceled",C={readyState:0,getResponseHeade},getAllResponseHeader},setRequestHeade},overrideMimeTyp},statusCod},abor}};v.promise(C);
q.url=((a||q.url||Na.href)+"").replace(wc,Na.protocol+"//");q.type=b.method||b.type||q.method||q.type;q.dataTypes=(q.dataType||"*").toLowerCase().match(W)||[""];if(null==q.crossDomain){a=u.createElement("a");try{a.href=q.url,a.href=a.href,q.crossDomain=kb.protocol+"//"+kb.host!==a.protocol+"//"+a.host}catch(A){q.crossDomain=!0}}q.data&&q.processData&&"string"!==typeof q.data&&(q.data=d.param(q.data,q.traditional));ub(Mb,q,b,C);if(n)return C;(p=d.event&&q.global)&&0===d.active++&&d.event.trigger("ajaxStart");
q.type=q.type.toUpperCase();q.hasContent=!vc.test(q.type);f=q.url.replace(sc,"");q.hasContent?q.data&&q.processData&&0===(q.contentType||"").indexOf("application/x-www-form-urlencoded")&&(q.data=q.data.replace(rc,"+")):(a=q.url.slice(f.length),q.data&&(q.processData||"string"===typeof q.data)&&(f+=(jb.test(f)?"\x26":"?")+q.data,delete q.data),!1===q.cache&&(f=f.replace(tc,"$1"),a=(jb.test(f)?"\x26":"?")+"_\x3d"+Kb++ +a),q.url=f+a);q.ifModified&&(d.lastModified[f]&&C.setRequestHeader("If-Modified-Since",
d.lastModified[f]),d.etag[f]&&C.setRequestHeader("If-None-Match",d.etag[f]));(q.data&&q.hasContent&&!1!==q.contentType||b.contentType)&&C.setRequestHeader("Content-Type",q.contentType);C.setRequestHeader("Accept",q.dataTypes[0]&&q.accepts[q.dataTypes[0]]?q.accepts[q.dataTypes[0]]+("*"!==q.dataTypes[0]?", "+Nb+"; q\x3d0.01":""):q.accepts["*"]);for(r in q.headers)C.setRequestHeader(r,q.headers[r]);if(q.beforeSend&&(!1===q.beforeSend.call(t,C,q)||n))return C.abort();D="abort";w.add(q.complete);C.done(q.success);
C.fail(q.error);if(e=ub(fb,q,b,C)){C.readyState=1;p&&y.trigger("ajaxSend",[C,q]);if(n)return C;q.async&&0<q.timeout&&(h=k.setTimeout(function(){C.abort("timeout")},q.timeout));try{n=!1,e.send(B,c)}catch(A){if(n)throw A;c(-1,A)}}else c(-1,"No Transport");return C},getJSO},getScrip}});d.each(["get","post"});d.ajaxPrefilte});d._evalUr};d.fn.extend({wrapAl},wrapInne},wra},unwra}});d.expr.pseudos.hidde};d.expr.pseudos.visibl};d.ajaxSettings.xh};var xc={0:200,1223:204},Oa=d.ajaxSettings.xhr();D.cors=!!Oa&&"withCredentials"in Oa;D.ajax=Oa=!!Oa;d.ajaxTranspor});d.ajaxPrefilte});d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script}}});d.ajaxPrefilter("script});d.ajaxTransport("script});var Ob=[],lb=/(=)\?(?=&|$)|\?\?/;d.ajaxSetup({jsonp:"callback",jsonpCallbac}});d.ajaxPrefilter("json jsonp});D.createHTMLDocumen}();d.parseHTM};d.fn.loa};d.expr.pseudos.animate};d.offset={setOffse}};d.fn.extend({offse},positio},offsetParen}});d.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;d.fn[a]=function(d){return ga(thi},a,d,arguments.length)}});d.each(["top","left"});d.each({Height:"height",Width:"width"});d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "});d.fn.extend({bind:function(a,b,c){return this.on(a,null,
b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},hove}});d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "});var yc=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;d.prox};d.holdRead};d.isArray=Array.isArray;d.parseJSON=JSON.parse;d.nodeName=O;d.isFunction=v;d.isWindow=wa;d.camelCase=J;d.type=B;d.now=Date.now;d.isNumeric};d.trim=function(a){return null==a?"":(a+"").replace(yc,"")};"function"===typeof define&&define.amd&&define("jquery",[],function(){return d});var zc=k.jQuery,Ac=k.$;d.noConflic};"undefined"===typeof G&&(k.jQuery=k.$=d);return d});
(function(k){"function"===typeof define&&define.amd?define(["jquery"}):"object"===typeof module&&module.exports?module.exports=k(require("jquery"),window):k(jQuery,window)})(function(k,G){function Y(h){var p;a:{var r=/^(\d+)\.(\d+)\.(\d+)/;p=r.exec(k.fn.jquery)||[];r=r.exec(h)||[];for(h=1;3>=h;h++){if(+p[h]>+r[h]){p=1;break a}if(+p[h]<+r[h]){p=-1;break a}}p=0}return 0<=}function ka(h,k,r,t,y){Object.defineProperty(h,k,{configurable:!0,enumerable:!0,ge},se}})}function O(h,p,r,t,y){var N,x=h[p];h[p]=function(){y&&B(t,y);N=k.migrateIsPatchEnabled(t)?r:x||k.noop;return N.apply(this,arguments)}}function x(h,k,r,t,y){if(!y)throw Error("No warning message provided");return O(h,k,r,t,y).migrateVersion="3.4.0";var ba=Object.create(null);k.migrateDisablePatche};k.migrateEnablePatche};k.migrateIsPatchEnable};G.console&&G.console.log&&
(k&&Y("3.0.0")||G.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),k.migrateWarnings&&G.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),G.console.log("JQMIGRATE: Migrate is installed"+(k.migrateMute?"":" with logging active")+", version "+k.migrateVersion));var ha={};k.migrateDeduplicateWarnings=!0;k.migrateWarnings=[];void 0===k.migrateTrace&&(k.migrateTrace=!0);k.migrateRese};"BackCompat"===G.document.compatMode&&B("quirks","jQuery is not compatible with Quirks Mode");
var ia,Ra={},J=k.fn.init,S=k.find,Sa=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,Ta=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,la=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;P(k.fn,"init",function(h){var p=Array.prototype.slice.call(arguments);k.migrateIsPatchEnabled("selector-empty-id")&&"string"===typeof h&&"#"===h&&(B("selector-empty-id","jQuery( '#' ) is not a valid selector"),p[0]=[]);return J.apply(this,p)},"selector-empty-id");k.fn.init.prototype=k.fn;P(k,"find",function(h){var k=
Array.prototype.slice.call(arguments);if("string"===typeof h&&Sa.test(h))try{G.document.querySelector(h)}catch(r){h=h.replace(T});try{G.document.querySelector(h),B("selector-hash","Attribute selector with '#' must be quoted: "+k[0]),k[0]=h}catch(t){B("selector-hash","Attribute selector with '#' was not fixed: "+k[0])}}return S.apply(this,k)},"selector-hash");for(ia in S)Object.prototype.hasOwnProperty.call(S,ia)&&(k.find[ia]=S[ia]);x(k.fn,"size},
"size","jQuery.fn.size() is deprecated and removed; use the .length property");x(k,"parseJSON},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse");x(k,"holdReady",k.holdReady,"holdReady","jQuery.holdReady is deprecated");x(k,"unique",k.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort");ka(k.expr,"filters",k.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos");ka(k.expr,":",
k.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");Y("3.1.1")&&x(k,"trim},"trim","jQuery.trim is deprecated; use String.prototype.trim");Y("3.2.0")&&(x(k,"nodeName},"nodeName","jQuery.nodeName is deprecated"),x(k,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray"));Y("3.3.0")&&(x(k,"isNumeric},"isNumeric","jQuery.isNumeric() is deprecated"),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "}),x(k,"type},"type","jQuery.type is deprecated"),x(k,"isFunction},"isFunction",
"jQuery.isFunction() is deprecated"),x(k,"isWindow},"isWindow","jQuery.isWindow() is deprecated"));if(k.ajax){var K=k.ajax,ya=/(=)\?(?=&|$)|\?\?/;P(k,"ajax",function(){var h=K.apply(this,arguments);h.promise&&(x(h,"success",h.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),x(h,"error",h.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),x(h,"complete",h.always,"jqXHR-methods","jQXHR.complete is deprecated and removed"));return h},
"jqXHR-methods");Y("4.0.0")||k.ajaxPrefilter("+json",function(h){!1!==h.jsonp&&(ya.test(h.url)||"string"===typeof h.data&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&ya.test(h.data))&&B("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")})}var Va=k.fn.removeAttr,X=k.fn.toggleClass,ma=/\S+/g;P(k.fn,"removeAttr",function(h){var p=this;k.each(h.match(ma});return Va.apply(this,arguments)},"removeAttr-bool");P(k.fn,"toggleClass",function(h){if(void 0!==h&&"boolean"!==typeof h)return X.apply(this,arguments);B("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated");return this.eac})},"toggleClass-bool");var Wa,Z=!1,Aa=/^[a-z]/,Xa=
/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;k.swap&&k.each(["height","width","reliableMarginRight"],function(h,p){var r=k.cssHooks[p]&&k.cssHooks[p].get;r&&(k.cssHooks[p].ge})});P(k,"swap",function(h,k,r,t){var p,N={};Z||B("swap","jQuery.swap() is undocumented and deprecated");for(p in k)N[p]=h.style[p],h.style[p]=k[p];r=r.apply(h,t||[]);for(p in k)h.style[p]=
N[p];return r},"swap");Y("3.4.0")&&"undefined"!==typeof Proxy&&(k.cssProps=new Proxy(k.cssProps||{},{set:function(){B("cssProps","jQuery.cssProps is deprecated");return Reflect.set.apply(this,arguments)}}));Y("4.0.0")&&"undefined"!==typeof Proxy&&(k.cssNumber=new Proxy({animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,
orphans:!0,widows:!0,zIndex:!0,zoom:!0},{get:function(){B("css-number","jQuery.cssNumber is deprecated");return Reflect.get.apply(this,arguments)},se}}));Wa=k.fn.css;P(k.fn,"css",function(h,p){var r,t=this;if(h&&"object"===typeof h&&!Array.isArray(h))return k.each(}),this;"number"===typeof p&&(r=xa(h),aa(r)||k.cssNumber[r]||B("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+
h+'", value )'));return Wa.apply(this,arguments)},"css-number");var ca=k.data;P(k,"data",function(h,p,r){var t,y,x;if(p&&"object"===typeof p&&2===arguments.length){t=k.hasData(h)&&ca.call(this,h);y={};for(x in p)x!==xa(x)?(B("data-camelCase","jQuery.data() always sets/gets camelCased names: "+x),t[x]=p[x]):y[x]=p[x];ca.call(this,h,y);return p}return p&&"string"===typeof p&&p!==xa(p)&&(t=k.hasData(h)&&ca.call(this,h))&&p in t?(B("data-camelCase","jQuery.data() always sets/gets camelCased names: "+
p),2<arguments.length&&(t[p]=r),t[p]):ca.apply(this,arguments)},"data-camelCase");if(k.fx){var qa,Ya=k.Tween.prototype.run,};P(k.Tween.prototype,"run",function(){1<k.easing[this.easing].length&&(B("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),k.easing[this.easing]=V);Ya.apply(this,arguments)},"easing-one-arg");qa=k.fx.interval;G.requestAnimationFrame&&Object.defineProperty(k.fx,"interval",{configurable:!0,enumerable:!0,get:function(){G.document.hidden||
B("fx-interval","jQuery.fx.interval is deprecated");return k.migrateIsPatchEnabled("fx-interval")?void 0===qa?13:qa:qa},set:function(h){B("fx-interval","jQuery.fx.interval is deprecated");qa=h}})}var Za=k.fn.load,da=k.event.add,ab=k.event.fix;k.event.props=[];k.event.fixHooks={};ka(k.event.props,"concat",k.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed");P(k.event,"fix",function(h){var p;p=h.type;var r=this.fixHooks[p],t=k.event.props;if(t.length)for(B("event-old-patch",
"jQuery.event.props are deprecated and removed: "+t.join());t.length;)k.event.addProp(t.pop());if(r&&!r._migrated_&&(r._migrated_=!0,B("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+p),(t=r.props)&&t.length))for(;t.length;)k.event.addProp(t.pop());p=ab.call(this,h);return r&&r.filter?r.filter(p,h):p},"event-old-patch");P(k.event,"add",function(h,k){h===G&&"load"===k&&"complete"===G.document.readyState&&B("load-after-event","jQuery(window).on('load'...) called after load event occurred");
return da.apply(this,arguments)},"load-after-event");k.each(["load","unload","error"],function(h,p){P(k.fn,p,function(){var h=Array.prototype.slice.call(arguments,0);if("load"===p&&"string"===typeof h[0])return Za.apply(this,h);B("shorthand-removed-v3","jQuery.fn."+p+"() is deprecated");h.splice(0,0,p);if(arguments.length)return this.on.apply(this,h);this.triggerHandler.apply(this,h);return this},"shorthand-removed-v3")});k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" ")});});k.event.special.ready={setu}};x(k.fn,"bind},"pre-on-methods","jQuery.fn.bind() is deprecated");x(k.fn,"unbind},"pre-on-methods","jQuery.fn.unbind() is deprecated");x(k.fn,"delegate},"pre-on-methods","jQuery.fn.delegate() is deprecated");x(k.fn,"undelegate},"pre-on-methods","jQuery.fn.undelegate() is deprecated");x(k.fn,"hover},"pre-on-methods","jQuery.fn.hover() is deprecated");var Ba=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
F};k.UNSAFE_restoreLegacyHtmlPrefilte};P(k,"htmlPrefilter",function(h){var k=h.replace(Ba,"\x3c$1\x3e\x3c/$2\x3e");k!==h&&Fa(h)!==Fa(k)&&B("self-closed-tags","HTML tags must be properly nested and closed: "+h);return h.replace(Ba,"\x3c$1\x3e\x3c/$2\x3e")},"self-closed-tags");k.migrateDisablePatches("self-closed-tags");var Ga=
k.fn.offset;P(k.fn,"offset},"offset-valid-elem");if(k.ajax){var bb=k.param;P(k,"param",function(h,p){var r=k.ajaxSettings&&k.ajaxSettings.traditional;void 0===p&&r&&(B("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),p=r);return bb.call(this,h,p)},"param-ajax-traditional")}x(k.fn,
"andSelf",k.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()");if(k.Deferred){var Q=k.Deferred,Ha=[["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),"rejected"],["notify","progress",k.Callbacks("memory"),k.Callbacks("memory")]];P(k,"Deferred",function(h){function p(){var h=arguments;return k.Deferre}).promise()}var r=Q(),t=r.promise();x(r,"pipe",p,"deferred-pipe","deferred.pipe() is deprecated");x(t,"pipe",p,"deferred-pipe","deferred.pipe() is deprecated");h&&h.call(r,r);return r},"deferred-pipe");k.Deferred.exceptionHook=Q.exceptionHook}return k});
//# sourceMappingURL=jquery-3.6.0.min.js.map