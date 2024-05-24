!function(e){e,t){var n=0,o=t.length>0,i=e.length>0,a=function(r,a,u,s,c){var l,d,p,h=0,f="0",g=r&&[],m=[],y=x,w=r||i&&v.find.TAG("*",c),k=O+=null==y?1:Math.random()||.1,N=w.length
for(c&&(x=a!==E&&a,C=n);f!==N&&null!=(l=w[f]);f++){if(i&&l){for(d=0;p=e[d++];)if(p(l,a,u)){s.push(l)
break}c&&(O=k,C=++n)}o&&((l=!p&&l)&&h--,r&&g.push(l))}if(h+=f,o&&f!==h){for(d=0;p=t[d++];)p(g,m,a,u)
if(r){if(h>0)for(;f--;)g[f]||m[f]||(m[f]=_.call(s))
m=we(m)}W.apply(s,m),c&&!r&&m.length>0&&h+t.length>1&&Ce.uniqueSort(s)}return c&&(O=k,x=y),g}
return o?r(a):a}r g,m,C,v,y,w,k,x,N,L,b,E,I,D,S,T,R,A,B="sizzle"+-new Date,P=e.document,O=0,U=0,q=t(),M=t(),j=t(),z=H="undefined",$=1<<31,Q={}.hasOwnProperty,F=[],_=F.pop,G=F.push,W=F.push,J=F.slice,V=F.indexOf||X="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",Y="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Z=Y.replace("w","w#"),ee="\\["+K+"*("+Y+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+Z+")|)|)"+K+"*\\]",te=":("+Y+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ee.replace(3,8)+")*)|.*)\\)|)",re=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),ne=new RegExp("^"+K+"*,"+K+"*"),oe=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),ie=new RegExp("="+K+"*([^\\]'\"]*)"+K+"*\\]","g"),ae=new RegExp(te),ue=new RegExp("^"+Z+"$"),se={ID:new RegExp("^#("+Y+")"),CLASS:new RegExp("^\\.("+Y+")"),TAG:new RegExp("^("+Y.replace("w","w*")+")"),ATTR:new RegExp("^"+ee),PSEUDO:new RegExp("^"+te),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+X+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},ce=/^(?:input|select|textarea|button)$/i,le=/^h\d$/i,de=/^[^{]+\{\s*\[native \w/,pe=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,he=/[+~]/,fe=/'|\\/g,ge=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),me=try{W.apply(F=J.call(P.childNodes),P.childNodes),F[P.childNodes.length].nodeType}catch(e){W={apply:F.length?}var Ce=function(e,t,r,n){var o,i,a,s,l,d,p,h,g,C
if((t?t.ownerDocument||t:P)!==E&&b(t),t=t||E,r=r||[],!e||"string"!=typeof e)return r
if(1!==(s=t.nodeType)&&9!==s)return[]
if(D&&!n){if(o=pe.exec(e))if(a=o[1]){if(9===s){if(!(i=t.getElementById(a))||!i.parentNode)return r
if(i.id===a)return r.push(i),r}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&A(t,i)&&i.id===a)return r.push(i),r}else{if(o[2])return W.apply(r,t.getElementsByTagName(e)),r
if((a=o[3])&&m.getElementsByClassName&&t.getElementsByClassName)return W.apply(r,t.getElementsByClassName(a)),r}if(m.qsa&&(!S||!S.test(e))){if(h=p=B,g=t,C=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(d=ve(e),(p=t.getAttribute("id"))?h=p.replace(fe,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",l=d.length;l--;)d[l]=h+c(d[l])
g=he.test(e)&&u(t.parentNode)||t,C=d.join(",")}if(C)try{return W.apply(r,g.querySelectorAll(C)),r}catch(e){}finally{p||t.removeAttribute("id")}}}return f(e.replace(re,"$1"),t,r,n)}
m=Ce.support={},w=Ce.isXML=b=Ce.setDocument=function(e){var t,r=e?e.ownerDocument||e:P,o=r.defaultView
return r!==E&&9===r.nodeType&&r.documentElement?(E=r,I=r.documentElement,D=!w(r),o&&o!==o.top&&(o.addEventListener?o.addEventListener("unload",function(){b()},!1):o.attachEvent&&o.attachEvent("onunload",),m.attributes=n(,m.getElementsByTagName=n(,m.getElementsByClassName=de.test(r.getElementsByClassName)&&n(,m.getById=n(,m.getById?(v.find.ID=v.filter.ID=:(delete v.find.ID,v.filter.ID=,v.find.TAG=m.getElementsByTagName?v.find.CLASS=m.getElementsByClassName&&T=[],S=[],(m.qsa=de.test(r.querySelectorAll))&&(n(,n(),(m.matchesSelector=de.test(R=I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&n(,S=S.length&&new RegExp(S.join("|")),T=T.length&&new RegExp(T.join("|")),t=de.test(I.compareDocumentPosition),A=t||de.test(I.contains)?z=t?r):E},Ce.matches=Ce.matchesSelector=Ce.contains=Ce.attr=Ce.error=Ce.uniqueSort=y=Ce.getText=v=Ce.selectors={cacheLength:50,createPseudo:r,match:se,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:CHILD:PSEUDO:,filter:{TAG:CLASS:ATTR:CHILD:PSEUDO:,pseudos:{not:r(,has:r(,contains:r(,lang:r(,target:root:focus:enabled:function(e){return!1===e.disabled},disabled:checked:selected:empty:parent:header:function(e){return le.test(e.nodeName)},input:button:text:first:a(,last:a(,eq:a(,even:a(function(e,t){for(var r=0;r<t;r+=2)e.push(r)
return e}),odd:a(,lt:a(,gt:a(}},v.pseudos.nth=v.pseudos.eq
for(g in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})v.pseudos[g]=g)
for(g in{submit:!0,reset:!0})v.pseudos[g]=g)
s.prototype=v.filters=v.pseudos,v.setFilters=new s
var ve=ye=function(e,t,r){var n=t.dir,o=r&&"parentNode"===n,i=U++
return t.first?,we=function(e,t,r,n,o){for(var i,a=[],u=0,s=e.length,c=null!=t;u<s;u++)(i=e[u])&&(r&&!r(i,n,o)||(a.push(i),c&&t.push(u)))
return a},ke=function(e,t,n,o,i,a){return o&&!o[B]&&(o=ke(o)),i&&!i[B]&&(i=ke(i,a)),r(}
k=Ce.compile=m.sortStable=B.split("").sort(z).join("")===B,m.detectDuplicates=!!L,b(),m.sortDetached=n(,n(||o("type|href|height|width",,m.attributes&&n(||o("value",,n(||o(X,,e.Sizzle=Ce}(window)
var Raptor=function(){function e(e){this.jsonpCallbacks={cntr:0},this.handClickEvents=function(e,t,r,n){for(var o=this,i=0;i<e.length;i++){var a=e[i]
this.raptorLog("Adding clickhandler for element",a),a.addEventListener("click",function(e){e.preventDefault()
var i=this,a=r?"":i.getAttribute("href")
o.raptorLog("Parsing arguments from attribute")
var u=o.parseFromAttribute(i,"data-raptorrecommendation")
o.raptorLog("Parsed arguments from attribute",u)
var s=[]
return s[o.raptorConfiguration.productIdParamIndex-1]=u.productId,s[o.raptorConfiguration.eventTypeParamIndex-1]=u.eventType||"itemClick",o.raptorLog("Tracking event",s),o.trackClickEvent(t,s,a),n&&n(u.productId),!1})}},this.raptorLog("Creating new Raptor object"),this.localWindow=e||window,this.topDomain=this.getTopDomain()}return e.prototype.getTopDomain=function(){var e=new Date
e.setTime(e.getTime()+1e3)
var t="expires="+e.toUTCString(),r=document.location.hostname.split("."),n=""
if(1===r.length)return"."
for(var o=1;o<r.length;++o){n=r.slice(r.length-o-1,r.length).join(".")
var i="domain="+n,a="rsadt=domaintest;"+t+";"+i+";path=/"
document.cookie=a
if(this.readCookie("rsadt",!1)){this.deleteCookiedomain("rsadt",n)
break}}return n?(this.raptorLog("Using domain:"+n),n):(this.raptorLog("Using toplevel:"+document.location.hostname),document.location.hostname)},e.prototype.parse=function(e){var t={}
if(e)for(var r=e.split(/\s*,\s*/),n=0;n<r.length;n++){var o=r[n].split(/\s*:\s*/)
2===o.length&&(t[o[0]]=o[1])}return t},e.prototype.parseFromAttribute=e.prototype.addClickHandlers=function(e,t,r,n){n||(n=!1),this.raptorLog("addClickHandlers with scope"+e)
var o=e?Sizzle(e):[null]
this.raptorLog("Found "+o.length,o)
for(var i=0;i<o.length;i++){var a=o[i]
this.raptorLog("Adding clickhandler for scope",a),this.raptorLog("Adding click handlers for a tags"),this.handClickEvents(Sizzle("a[data-raptorrecommendation]",a),t,n,r),this.raptorLog("Adding click handlers for input tags"),this.handClickEvents(Sizzle("input[data-raptorrecommendation]",a),t,n,r)}return this},e.prototype.addUser=function(e){if(this.raptorLog("add user called",e),e){this.raptorLog("fetching from cookie")
try{""===this.exRuid&&this.raptorConfiguration.useCookies&&(this.exRuid=this.readCookie("rsaRuid",!1)||this.readCookie(this.raptorConfiguration.customerID+"rsaRuid",!1)),this.raptorLog("Found existing id:",this.exRuid)
var t=new raptorBase64,r=t.encode(e)
this.exRuid!==r&&(this.raptorLog("Theres an update",this.exRuid,r),this.exRuid=r,this.raptorConfiguration.useCookies&&(this.createCookie("rsaRuid",this.exRuid,365,!1),this.createCookie(this.raptorConfiguration.customerID+"rsaRuid",this.exRuid,365,!1)))}catch(e){this.raptorLog("error adding user",e),this.exRuid=""}}},e.prototype.raptorLog=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
if(this.raptorConfiguration&&this.raptorConfiguration.useDebugLogging)try{window.console&&(window.console.debug?window.console.debug("raptor "+e,t):window.console.log("raptor "+e,t))}catch(e){console.log("raptor error logging",e)}},e.prototype.generateGuidMethod=function(){var e,t,r
for(e="",r=0;r<32;r++)8!=r&&12!=r&&16!=r&&20!=r||(e+="-"),t=Math.floor(16*Math.random()).toString(16).toUpperCase(),e+=t
return e},e.prototype.createCookie=function(e,t,r,n){var o=new Date
o.setTime(o.getTime()+864e5*r)
var i="expires="+o.toUTCString(),t=n?encodeURIComponent(t):t,a="domain="+this.topDomain,u=e+"="+t+";"+i+";"+a+";path=/;samesite=lax"
document.cookie=u,this.raptorLog("Cookie created:"+e+" expires:"+i)},e.prototype.readCookie=function(e,t){for(var r=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var i=n[o];" "==i.charAt(0);)i=i.substring(1,i.length)
if(0==i.indexOf(r)){var a=i.substring(r.length,i.length)
return t&&a?decodeURIComponent(a):a}}return null},e.prototype.deleteCookie=function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;"+this.topDomain+";path=/"},e.prototype.deleteCookiedomain=e.prototype.create=e.prototype.getOrCreateCookie=function(e,t,r,n){try{var o=r
if(this.raptorConfiguration.useCookies){this.raptorLog("Cookie reading.",e)
var i=this.readCookie(e,!1)
this.raptorLog("Cookie read.",e,i),i?(o=i,n&&this.createCookie(e,o,t,!1)):(o=this.generateGuidMethod(),this.raptorLog("Cookie created.",o),this.createCookie(e,o,t,!1))}return this.raptorLog("returning cookieValue:",o),o}catch(t){return this.raptorLog("error creating cookie",e,t),r}},e.prototype.getQorC=function(e,t,r,n){try{var o=t[e]?t[e]:""
this.raptorLog("getQorC- got from querystring",e,o)
var i=this.readCookie(r,!0)||this.readCookie(this.raptorConfiguration.customerID+""+r,!0)
return this.raptorLog("getQorC- got from cookie:",i),""==o?i&&(o=i,this.createCookie(r,o,n,!0),this.createCookie(this.raptorConfiguration.customerID+""+r,o,n,!0)):i!=o&&this.raptorConfiguration.useCookies&&(this.createCookie(r,o,n,!0),this.createCookie(this.raptorConfiguration.customerID+""+r,o,n,!0)),o}catch(e){return""}},e.prototype.initialize=function(e){if(!e)return void console.error("No configuration!!")
if(void 0===e.useCookies&&(e.useCookies=!0),this.raptorConfiguration=e,this.raptorLog("Raptor initialize called",e),this.topDomain||(this.topDomain=this.getTopDomain()),this.raptorConfiguration.productIdParamIndex||(this.raptorConfiguration.productIdParamIndex=2),this.raptorConfiguration.eventTypeParamIndex||(this.raptorConfiguration.eventTypeParamIndex=1),null==this.raptorConfiguration.useCookies&&(this.raptorConfiguration.useCookies=!0),this.raptorConfiguration.include&&this.raptorConfiguration.include.length>0)for(var t=0;t<4&&t<this.raptorConfiguration.include.length;t++)this["oc"+(t+1)]=this.raptorConfiguration.include[t]
this.cookieID=this.getOrCreateCookie(this.raptorConfiguration.customerID+"rsa",365,"",!0),this.sessionID=this.getOrCreateCookie(this.raptorConfiguration.customerID+"rsaSession",.015,null,!1)
var r=this.qasObj()
this.exUid=this.getQorC("xuid",r,"rsaXuid",365),this.reaId=this.getQorC("reaid",r,"rsaReaId",365),this.rchSource=r.rchsource,this.rchModule=r.rchmodule,this.rchItemId=r.rchitemid
try{this.raptorLog("trying to set ruid")
var n="ruid"
this.raptorConfiguration.userQueryParamName&&(n=this.raptorConfiguration.userQueryParamName.toLocaleLowerCase()),this.exRuid=r[n]?r[n]:"",this.raptorLog("Ruid fetched from querystring:",this.exRuid)
var o=this.readCookie("rsaRuid",!1)||this.readCookie(this.raptorConfiguration.customerID+"rsaRuid",!1)
if(this.raptorLog("Ruid fetched from cookie:",o),""==this.exRuid)o&&(this.createCookie(this.raptorConfiguration.customerID+"rsaRuid",o,365,!1),this.createCookie("rsaRuid",o,365,!1),this.exRuid=o)
else{var i=new raptorBase64
this.exRuid=i.encode(this.exRuid),o!=this.exRuid&&this.raptorConfiguration.useCookies&&(this.createCookie(this.raptorConfiguration.customerID+"rsaRuid",this.exRuid,365,!1),this.createCookie("rsaRuid",this.exRuid,365,!1))}}catch(e){this.raptorLog("Error when setting ruid",e),this.exRuid=""}this.trackChannelSourceEvent()},e.prototype.doJSONP=function(e,t){var r=document.createElement("script")
r.src=e+"&callback="+t,document.getElementsByTagName("head")[0].appendChild(r)},e.prototype.callService=function(e,t,r,n){var o=this,i="fn"+this.jsonpCallbacks.cntr++
this.jsonpCallbacks[i]=function(){delete o.jsonpCallbacks[i]
for(var e=[t,r],a=0;a<arguments.length;a++)e[a+2]=arguments[a]
n.apply(o,e)},this.doJSONP(e,"window.raptor.jsonpCallbacks."+i)},e.prototype.getQueryParameterByName=function(e){var t=this.qasObj(),r=t[e.toLocaleLowerCase()]
return r||""},e.prototype.qasObj=function(){var e=this.localWindow.location.search
if(e=e.substring(1),!this.localWindow.location.search){if(!this.localWindow.location.hash)return{}
var t=this.localWindow.location.hash.split("?")
if(!(t.length>1))return{}
e=t[1]}for(var r=e.split("&"),n={},o=0;o<r.length;o++)if(""!=r[o]){var i=r[o].split("=")
n[i[0].toLocaleLowerCase()]||(n[i[0].toLocaleLowerCase()]=this.tryDecodeUri(i[1]||""))}return n},e.prototype.tryDecodeUri=function(e){if(e)try{return decodeURIComponent(e)}catch(t){this.raptorLog("Could not decode url",e,t)}return""},e.prototype.encode=e.prototype.serializeArguments=function(e){for(var t="?",r=0;r<e.length;r++)t+=r>0?"&":"",t+="p"+(r+1)+"="+this.encode(e[r]||"")
return t},e.prototype.trackEvent=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
this.trackClickEvent({methodName:"",customerId:""},e,"")},e.prototype.trackCustomerEvent=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
this.trackClickEvent({methodName:"",customerId:e},t,"")},e.prototype.trackClickEvent=function(e,t,r){if(!this.raptorConfiguration)return void this.raptorLog("No configuration found when tracking Clickevent")
this.raptorLog("Executing trackClickEvent")
var n=this.create("img")
if(n.style.display="none",this.raptorConfiguration.customerID){var o=e.customerId||this.raptorConfiguration.customerID,i=this.serializeArguments(t),a=this.qasObj(),u=String(Math.random()).substr(2,5),s=this.cookieID?this.cookieID:"",c=this.sessionID?this.sessionID:"none",l="https:"==document.location.protocol?"https://":"http://",d=l+"t.raptorsmartadvisor.com/"+o+".rsa"+i+"&sid="+c+"&coid="+s+"&am="+e.methodName+"&v=2.1.20&xuid="+encodeURIComponent(this.exUid)+"&ruid="+encodeURIComponent(this.exRuid)+"&reaid="+encodeURIComponent(this.reaId)+"&ts="+u
d=this.appQv(a,"utm_source",d),d=this.appQv(a,"utm_campaign",d),d=this.appQv(a,"utm_term",d),d=this.appQv(a,"utm_medium",d),d=this.appQv(a,"utm_content",d),d+=this.appOc(1),d+=this.appOc(2),d+=this.appOc(3),d+=this.appOc(4),n.src=d,n.height=1,n.width=1,n.className="raptor_tracking_image",r&&(n.onload=n.onerror=,document.getElementsByTagName("body")[0].appendChild(n)}},e.prototype.trackChannelSourceEvent=function(){if(this.rchSource){this.raptorLog("Found rchSource")
for(var e=[],t=Math.max(this.raptorConfiguration.eventTypeParamIndex,this.raptorConfiguration.productIdParamIndex),r=0;r<t;r++)this.raptorConfiguration.eventTypeParamIndex===r+1?e[r]=(this.rchSource+"click").toLowerCase():this.raptorConfiguration.productIdParamIndex===r+1?e[r]=this.rchItemId:e[r]=""
this.trackClickEvent({methodName:this.rchModule,customerId:""},e,null)}},e.prototype.appQv=function(e,t,r){var n=e[t]||null
return n&&(r+="&"+t+"="+n),r},e.prototype.appOc=function(e){var t=this["oc"+e]
if(t){var r=this.readCookie(t,!1)
if(r)return"&oc"+e+"="+encodeURIComponent(r)}return""},e}(),raptorBase64=function(){eturn e.prototype.encode=e.prototype.utf8Encode=e}()
window.raptor=new Raptor(window),"undefined"!=typeof raptorLoaded&&raptorLoaded(window.raptor)
