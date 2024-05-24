/*!
 * VERSION: 0.17.1
 * DATE: 2019-02-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(a,b,c){var d,e,f,g,h,i,j,k,l,m={css:{},data:"_draggable"},n={css:{},data:"_draggable"},o={css:{},data:"_draggable"},p={css:{}},q=_gsScope._gsDefine.globals,r={},s=function(){return!1},t={style:{},appendChild:s,removeChild:s},u=_gsScope.document||{createElement:function(){return t}},v=u.documentElement||{},w=function(a){return u.createElementNS?u.createElementNS("http://www.w3.org/1999/xhtml",a):u.createElement(a)},x=w("div"),y=[],z=180/Math.PI,A=999999999999999,B=Date.now||function(){return(new Date).getTime()},C=!(u.addEventListener||!u.all),D=u.createElement("div"),E=[],F={},G=0,H=/^(?:a|input|textarea|button|select)$/i,I=0,J=_gsScope.navigator&&-1!==_gsScope.navigator.userAgent.toLowerCase().indexOf("android"),K=0,L={},M={},N=function(a){if("string"==typeof a&&(a=b.selector(a)),!a||a.nodeType)return[a];var c,d=[],e=a.length;for(c=0;c!==e;d.push(a[c++]));return d},O=function(a,b){var c,d={};if(b)for(c in a)d[c]=a[c]*b;else for(c in a)d[c]=a[c];return d},P=function(){for(var a=E.length;--a>-1;)E[a]()},Q=function(a){E.push(a),1===E.length&&b.ticker.addEventListener("tick",P,this,!1,1)},R=function(a){for(var c=E.length;--c>-1;)E[c]===a&&E.splice(c,1);b.to(S,0,{overwrite:"all",delay:15,onComplete:S,data:"_draggable"})},S=function(){E.length||b.ticker.removeEventListener("tick",P)},T=function(a,b){var c;for(c in b)void 0===a[c]&&(a[c]=b[c]);return a},U=function(){return null!=window.pageYOffset?window.pageYOffset:null!=u.scrollTop?u.scrollTop:v.scrollTop||u.body.scrollTop||0},V=function(){return null!=window.pageXOffset?window.pageXOffset:null!=u.scrollLeft?u.scrollLeft:v.scrollLeft||u.body.scrollLeft||0},W=function(a,b){Ka(a,"scroll",b),Y(a.parentNode)||W(a.parentNode,b)},X=function(a,b){La(a,"scroll",b),Y(a.parentNode)||X(a.parentNode,b)},Y=function(a){return!(a&&a!==v&&a!==u&&a!==u.body&&a!==window&&a.nodeType&&a.parentNode)},Z=function(a,b){var c="x"===b?"Width":"Height",d="scroll"+c,e="client"+c,f=u.body;return Math.max(0,Y(a)?Math.max(v[d],f[d])-(window["inner"+c]||v[e]||f[e]):a[d]-a[e])},$=function(a){var b=Y(a),c=Z(a,"x"),d=Z(a,"y");b?a=M:$(a.parentNode),a._gsMaxScrollX=c,a._gsMaxScrollY=d,a._gsScrollX=a.scrollLeft||0,a._gsScrollY=a.scrollTop||0},_=function(a,b){return a=a||window.event,r.pageX=a.clientX+u.body.scrollLeft+v.scrollLeft,r.pageY=a.clientY+u.body.scrollTop+v.scrollTop,b&&(a.returnValue=!1),r},aa=function(a){return a?("string"==typeof a&&(a=b.selector(a)),a.length&&a!==window&&a[0]&&a[0].style&&!a.nodeType&&(a=a[0]),a===window||a.nodeType&&a.style?a:null):a},ba=function(a,b){var c,e,f,g=a.style;if(void 0===g[b]){for(f=["O","Moz","ms","Ms","Webkit"],e=5,c=b.charAt(0).toUpperCase()+b.substr(1);--e>-1&&void 0===g[f[e]+c];);if(0>e)return"";d=3===e?"ms":f[e],b=d+c}return b},ca=function(a,b,c){var d=a.style;d&&(void 0===d[b]&&(b=ba(a,b)),null==c?d.removeProperty?d.removeProperty(b.replace(/([A-Z])/g,"-$1").toLowerCase()):d.removeAttribute(b):void 0!==d[b]&&(d[b]=c))},da="undefined"!=typeof window?window:u.defaultView||{getComputedStyle:function(){}},ea=function(a,b){return da.getComputedStyle(a instanceof Element?a:a.host||(a.parentNode||{}).host||a,b)},fa=/(?:Left|Right|Width)/i,ga=/(?:\d|\-|\+|=|#|\.)*/g,ha=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var f,g=fa.test(b),h=a,i=x.style,j=0>c;return j&&(c=-c),"%"===d&&-1!==b.indexOf("border")?f=c/100*(g?a.clientWidth:a.clientHeight):(i.cssText="border:0 solid red;position:"+ja(a,"position",!0)+";line-height:0;","%"!==d&&h.appendChild?i[g?"borderLeftWidth":"borderTopWidth"]=c+d:(h=a.parentNode||u.body,i[g?"width":"height"]=c+d),h.appendChild(x),f=parseFloat(x[g?"offsetWidth":"offsetHeight"]),h.removeChild(x),0!==f||e||(f=ha(a,b,c,d,!0))),j?-f:f},ia=function(a,b){if("absolute"!==ja(a,"position",!0))return 0;var c="left"===b?"Left":"Top",d=ja(a,"margin"+c,!0);return a["offset"+c]-(ha(a,b,parseFloat(d),(d+"").replace(ga,""))||0)},ja=function(a,b,c){var d,e=(a._gsTransform||{})[b];return e||0===e?e:(a.style&&a.style[b]?e=a.style[b]:(d=ea(a))?(e=d.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()),e=e||d.length?e:d[b]):a.currentStyle&&(e=a.currentStyle[b]),"auto"!==e||"top"!==b&&"left"!==b||(e=ia(a,b)),c?e:parseFloat(e)||0)},ka=function(a,b,c){var d=a.vars,e=d[c],f=a._listeners[b];"function"==typeof e&&e.apply(d[c+"Scope"]||d.callbackScope||a,d[c+"Params"]||[a.pointerEvent]),f&&a.dispatchEvent(b)},la=function(a,b){var c,d,e,f=aa(a);return f?Fa(f,b):void 0!==a.left?(e=za(b),{left:a.left-e.x,top:a.top-e.y,width:a.width,height:a.height}):(d=a.min||a.minX||a.minRotation||0,c=a.min||a.minY||0,{left:d,top:c,width:(a.max||a.maxX||a.maxRotation||0)-d,height:(a.max||a.maxY||0)-c})},ma=function(){if(!u.createElementNS)return h=0,void(i=!1);var a,b,c,d,e=w("div"),f=u.createElementNS("http://www.w3.org/2000/svg","svg"),g=w("div"),m=e.style,n=u.body||v,o="flex"===ja(n,"display",!0);u.body&&pa&&(m.position="absolute",n.appendChild(g),g.appendChild(e),d=e.offsetParent,g.style[pa]="rotate(1deg)",l=e.offsetParent===d,g.style.position="absolute",m.height="10px",d=e.offsetTop,g.style.border="5px solid red",k=d!==e.offsetTop,n.removeChild(g)),m=f.style,f.setAttributeNS(null,"width","400px"),f.setAttributeNS(null,"height","400px"),f.setAttributeNS(null,"viewBox","0 0 400 400"),m.display="block",m.boxSizing="border-box",m.border="0px solid red",m.transform="none",e.style.cssText="width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",n.appendChild(e),e.appendChild(f),c=f.createSVGPoint().matrixTransform(f.getScreenCTM()),b=c.y,e.scrollTop=100,c.x=c.y=0,c=c.matrixTransform(f.getScreenCTM()),j=b-c.y<100.1?0:b-c.y-150,e.removeChild(f),n.removeChild(e),n.appendChild(f),o&&(n.style.display="block"),a=f.getScreenCTM(),b=a.e,m.border="50px solid red",a=f.getScreenCTM(),0===b&&0===a.e&&0===a.f&&1===a.a?(h=1,i=!0):(h=b!==a.e?1:0,i=1!==a.a),o&&(n.style.display="flex"),n.removeChild(f)},na=""!==ba(x,"perspective"),oa=ba(x,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),pa=ba(x,"transform"),qa=pa.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),ra={},sa={},ta=_gsScope.SVGElement,ua=function(a){return!!(ta&&"function"==typeof a.getBBox&&a.getCTM&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},va=_gsScope.navigator&&(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_gsScope.navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_gsScope.navigator.userAgent))&&parseFloat(RegExp.$1)<11,wa=[],xa=[],ya=function(a){if(!a.getBoundingClientRect||!a.parentNode||!pa)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:v};if(Ua.cacheSVGData!==!1&&a._dCache&&a._dCache.lastUpdate===b.ticker.frame)return a._dCache;var c,d,e,f,g,k,l,m,n,o,p,q,r=a,s=Aa(a);if(s.lastUpdate=b.ticker.frame,a.getBBox&&!s.isSVGRoot){for(r=a.parentNode,c=a.getBBox();r&&"svg"!==(r.nodeName+"").toLowerCase();)r=r.parentNode;return f=ya(r),s.offsetTop=c.y*f.scaleY,s.offsetLeft=c.x*f.scaleX,s.scaleX=f.scaleX,s.scaleY=f.scaleY,s.offsetParent=r||v,s}for(e=s.offsetParent,e===u.body&&(e=v),xa.length=wa.length=0;r&&r.parentNode;)g=ja(r,pa,!0),"matrix(1, 0, 0, 1, 0, 0)"!==g&&"none"!==g&&"translate3d(0px, 0px, 0px)"!==g&&(xa.push(r),wa.push(r.style[pa]),r.style[pa]="none"),r=r.parentNode;for(d=e.getBoundingClientRect(),g=a.getScreenCTM(),m=a.createSVGPoint(),l=m.matrixTransform(g),s.scaleX=Math.sqrt(g.a*g.a+g.b*g.b),s.scaleY=Math.sqrt(g.d*g.d+g.c*g.c),void 0===h&&ma(),s.borderBox&&!i&&a.getAttribute("width")&&(f=ea(a)||{},n=parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth)||0,o=parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth)||0,p=parseFloat(f.width)||0,q=parseFloat(f.height)||0,s.scaleX*=(p-n)/p,s.scaleY*=(q-o)/q),j?(c=a.getBoundingClientRect(),s.offsetLeft=c.left-d.left,s.offsetTop=c.top-d.top):(s.offsetLeft=l.x-d.left,s.offsetTop=l.y-d.top),s.offsetParent=e,k=xa.length;--k>-1;)xa[k].style[pa]=wa[k];return s},za=function(a,c){if(c=c||{},!a||a===v||!a.parentNode||a===window)return{x:0,y:0};var d=ea(a),e=oa&&d?d.getPropertyValue(oa):"50% 50%",f=e.split(" "),g=-1!==e.indexOf("left")?"0%":-1!==e.indexOf("right")?"100%":f[0],h=-1!==e.indexOf("top")?"0%":-1!==e.indexOf("bottom")?"100%":f[1];return("center"===h||null==h)&&(h="50%"),("center"===g||isNaN(parseFloat(g)))&&(g="50%"),a.getBBox&&ua(a)?(a._gsTransform||(b.set(a,{x:"+=0",overwrite:!1}),void 0===a._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),e=a.getBBox(),c.x=a._gsTransform.xOrigin-e.x,c.y=a._gsTransform.yOrigin-e.y):(a.getBBox&&-1!==(g+h).indexOf("%")&&(a=a.getBBox(),a={offsetWidth:a.width,offsetHeight:a.height}),c.x=-1!==g.indexOf("%")?a.offsetWidth*parseFloat(g)/100:parseFloat(g),c.y=-1!==h.indexOf("%")?a.offsetHeight*parseFloat(h)/100:parseFloat(h)),c},Aa=function(a){if(Ua.cacheSVGData!==!1&&a._dCache&&a._dCache.lastUpdate===b.ticker.frame)return a._dCache;var c,d=a._dCache=a._dCache||{},e=ea(a),f=a.getBBox&&ua(a),g="svg"===(a.nodeName+"").toLowerCase();if(d.isSVG=f,d.isSVGRoot=g,d.borderBox="border-box"===e.boxSizing,d.computedStyle=e,g)c=a.parentNode||v,c.insertBefore(x,a),d.offsetParent=x.offsetParent||v,c.removeChild(x);else if(f){for(c=a.parentNode;c&&"svg"!==(c.nodeName+"").toLowerCase();)c=c.parentNode;d.offsetParent=c}else d.offsetParent=a.offsetParent;return d},Ba=function(a,b,c,d,e){if(a===window||!a||!a.style||!a.parentNode)return[1,0,0,1,0,0];var f,g,i,j,m,n,o,p,q,r,s,t,w,x,y=a._dCache||Aa(a),z=a.parentNode,A=z._dCache||Aa(z),B=y.computedStyle,C=y.isSVG?A.offsetParent:z.offsetParent;if(f=y.isSVG&&-1!==(a.style[pa]+"").indexOf("matrix")?a.style[pa]:B?B.getPropertyValue(qa):a.currentStyle?a.currentStyle[pa]:"1,0,0,1,0,0",a.getBBox&&-1!==(a.getAttribute("transform")+"").indexOf("matrix")&&(f=a.getAttribute("transform")),f=(f+"").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g)||[1,0,0,1,0,0],f.length>6&&(f=[f[0],f[1],f[4],f[5],f[12],f[13]]),d?f[4]=f[5]=0:y.isSVG&&(m=a._gsTransform)&&(m.xOrigin||m.yOrigin)&&(f[0]=parseFloat(f[0]),f[1]=parseFloat(f[1]),f[2]=parseFloat(f[2]),f[3]=parseFloat(f[3]),f[4]=parseFloat(f[4])-(m.xOrigin-(m.xOrigin*f[0]+m.yOrigin*f[2])),f[5]=parseFloat(f[5])-(m.yOrigin-(m.xOrigin*f[1]+m.yOrigin*f[3]))),b)if(void 0===h&&ma(),i=y.isSVG||y.isSVGRoot?ya(a):a,y.isSVG?(j=a.getBBox(),r=A.isSVGRoot?{x:0,y:0}:z.getBBox(),i={offsetLeft:j.x-r.x,offsetTop:j.y-r.y,offsetParent:y.offsetParent}):y.isSVGRoot?(s=parseInt(B.borderTopWidth,10)||0,t=parseInt(B.borderLeftWidth,10)||0,w=(f[0]-h)*t+f[2]*s,x=f[1]*t+(f[3]-h)*s,n=b.x,o=b.y,p=n-(n*f[0]+o*f[2]),q=o-(n*f[1]+o*f[3]),f[4]=parseFloat(f[4])+p,f[5]=parseFloat(f[5])+q,b.x-=p,b.y-=q,n=i.scaleX,o=i.scaleY,e||(b.x*=n,b.y*=o),f[0]*=n,f[1]*=o,f[2]*=n,f[3]*=o,va||(b.x+=w,b.y+=x),C===u.body&&i.offsetParent===v&&(C=v)):!k&&a.offsetParent&&(b.x+=parseInt(ja(a.offsetParent,"borderLeftWidth"),10)||0,b.y+=parseInt(ja(a.offsetParent,"borderTopWidth"),10)||0),g=z===v||z===u.body,f[4]=Number(f[4])+b.x+(i.offsetLeft||0)-c.x-(g?0:z.scrollLeft||0),f[5]=Number(f[5])+b.y+(i.offsetTop||0)-c.y-(g?0:z.scrollTop||0),z&&"fixed"===ja(a,"position",!0))for(f[4]+=V(),f[5]+=U(),z=z.offsetParent;z;)f[4]-=z.offsetLeft,f[5]-=z.offsetTop,z=z.offsetParent;else!z||z===v||C!==i.offsetParent||A.isSVG||l&&"100100"!==Ba(z).join("")||(i=A.isSVGRoot?ya(z):z,f[4]-=i.offsetLeft||0,f[5]-=i.offsetTop||0,k||!A.offsetParent||y.isSVG||y.isSVGRoot||(f[4]-=parseInt(ja(A.offsetParent,"borderLeftWidth"),10)||0,f[5]-=parseInt(ja(A.offsetParent,"borderTopWidth"),10)||0));return f},Ca=function(a,b){if(!a||a===window||!a.parentNode)return[1,0,0,1,0,0];for(var c,d,e,f,g,h,i,j,k=za(a,ra),l=za(a.parentNode,sa),m=Ba(a,k,l,!1,!b);(a=a.parentNode)&&a.parentNode&&a!==v;)k=l,l=za(a.parentNode,k===ra?sa:ra),i=Ba(a,k,l),c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],m[0]=c*i[0]+d*i[2],m[1]=c*i[1]+d*i[3],m[2]=e*i[0]+f*i[2],m[3]=e*i[1]+f*i[3],m[4]=g*i[0]+h*i[2]+i[4],m[5]=g*i[1]+h*i[3]+i[5];return b&&(c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],j=c*f-d*e,m[0]=f/j,m[1]=-d/j,m[2]=-e/j,m[3]=c/j,m[4]=(e*h-f*g)/j,m[5]=-(c*h-d*g)/j),m},Da=function(a,b,c,d){a=aa(a);var e=Ca(a,!1),f=b.x,g=b.y;return c&&(za(a,b),f-=b.x,g-=b.y),d=d===!0?b:d||{},d.x=f*e[0]+g*e[2]+e[4],d.y=f*e[1]+g*e[3]+e[5],d},Ea=function(a,b,c){var d=a.x*b[0]+a.y*b[2]+b[4],e=a.x*b[1]+a.y*b[3]+b[5];return a.x=d*c[0]+e*c[2]+c[4],a.y=d*c[1]+e*c[3]+c[5],a},Fa=function(a,b,c){if(!(a=aa(a)))return null;b=aa(b);var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,w,x,y,z,A,B=a.getBBox&&ua(a);if(a===window)g=U(),e=V(),f=e+(v.clientWidth||a.innerWidth||u.body.clientWidth||0),h=g+((a.innerHeight||0)-20<v.clientHeight?v.clientHeight:a.innerHeight||u.body.clientHeight||0);else{if(void 0===b||b===window)return a.getBoundingClientRect();d=za(a),e=-d.x,g=-d.y,B?(o=a.getBBox(),p=o.width,q=o.height):"svg"!==(a.nodeName+"").toLowerCase()&&a.offsetWidth?(p=a.offsetWidth,q=a.offsetHeight):(z=ea(a),p=parseFloat(z.width),q=parseFloat(z.height)),f=e+p,h=g+q,"svg"!==a.nodeName.toLowerCase()||C||(r=ya(a),A=r.computedStyle||{},w=(a.getAttribute("viewBox")||"0 0").split(" "),x=parseFloat(w[0]),y=parseFloat(w[1]),s=parseFloat(A.borderLeftWidth)||0,t=parseFloat(A.borderTopWidth)||0,e/=r.scaleX,g/=r.scaleY,f=e+p-(p-(p-s)/r.scaleX-x),h=g+q-(q-(q-t)/r.scaleY-y),e-=s/r.scaleX-x,g-=t/r.scaleY-y,z&&(f+=(parseFloat(A.borderRightWidth)+s)/r.scaleX,h+=(t+parseFloat(A.borderBottomWidth))/r.scaleY))}return a===b?{left:e,top:g,width:f-e,height:h-g}:(i=Ca(a),j=Ca(b,!0),k=Ea({x:e,y:g},i,j),l=Ea({x:f,y:g},i,j),m=Ea({x:f,y:h},i,j),n=Ea({x:e,y:h},i,j),e=Math.min(k.x,l.x,m.x,n.x),g=Math.min(k.y,l.y,m.y,n.y),L.x=L.y=0,c&&za(b,L),{left:e+L.x,top:g+L.y,width:Math.max(k.x,l.x,m.x,n.x)-e,height:Math.max(k.y,l.y,m.y,n.y)-g})},Ga=function(a){return a&&a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},Ha=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],Ga(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else c&&0!==c.length&&e.push(c);return e},Ia="undefined"!=typeof window&&"ontouchstart"in v&&"orientation"in window,Ja=function(a){for(var b=a.split(","),c=(void 0!==x.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==x.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":a).split(","),d={},e=4;--e>-1;)d[b[e]]=c[e],d[c[e]]=b[e];try{v.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){f=1}}))}catch(g){}return d}("touchstart,touchmove,touchend,touchcancel"),Ka=function(a,b,c,d){if(a.addEventListener){var e=Ja[b];d=d||(f?{passive:!1}:null),a.addEventListener(e||b,c,d),e&&b!==e&&a.addEventListener(b,c,d)}else a.attachEvent&&a.attachEvent("on"+b,c)},La=function(a,b,c){if(a.removeEventListener){var d=Ja[b];a.removeEventListener(d||b,c),d&&b!==d&&a.removeEventListener(b,c)}else a.detachEvent&&a.detachEvent("on"+b,c)},Ma=function(a,b){for(var c=a.length;--c>-1;)if(a[c].identifier===b)return!0;return!1},Na=function(a){e=a.touches&&I<a.touches.length,La(a.target,"touchend",Na)},Oa=function(a){e=a.touches&&I<a.touches.length,Ka(a.target,"touchend",Na)},Pa=function(a,b,c,d,e,f){var g,h,i,j={};if(b)if(1!==e&&b instanceof Array){if(j.end=g=[],i=b.length,"object"==typeof b[0])for(h=0;i>h;h++)g[h]=O(b[h],e);else for(h=0;i>h;h++)g[h]=b[h]*e;c+=1.1,d-=1.1}else"function"==typeof b?j.end=function(c){var d,f,g=b.call(a,c);if(1!==e)if("object"==typeof g){d={};for(f in g)d[f]=g[f]*e;g=d}else g*=e;return g}:j.end=b;return(c||0===c)&&(j.max=c),(d||0===d)&&(j.min=d),f&&(j.velocity=0),j},Qa=function(a){var b;return a&&a.getAttribute&&"BODY"!==a.nodeName?"true"===(b=a.getAttribute("data-clickable"))||"false"!==b&&(a.onclick||H.test(a.nodeName+"")||"true"===a.getAttribute("contentEditable"))?!0:Qa(a.parentNode):!1},Ra=function(a,b){for(var c,d=a.length;--d>-1;)c=a[d],c.ondragstart=c.onselectstart=b?null:s,ca(c,"userSelect",b?"text":"none")},Sa=function(){var a,b=u.createElement("div"),c=u.createElement("div"),d=c.style,e=u.body||x;return d.display="inline-block",d.position="relative",b.style.cssText=c.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",b.appendChild(c),e.appendChild(b),a=c.offsetHeight+18>b.scrollHeight,e.removeChild(b),a}(),Ta=function(a,c){a=aa(a),c=c||{};var d,e,f,g,h,i,j=u.createElement("div"),k=j.style,l=a.firstChild,m=0,n=0,o=a.scrollTop,p=a.scrollLeft,q=a.scrollWidth,r=a.scrollHeight,s=0,t=0,v=0;na&&c.force3D!==!1?(h="translate3d(",i="px,0px)"):pa&&(h="translate(",i="px)"),this.scrollTop=function(a,b){return arguments.length?void this.top(-a,b):-this.top()},this.scrollLeft=function(a,b){return arguments.length?void this.left(-a,b):-this.left()},this.left=function(d,e){if(!arguments.length)return-(a.scrollLeft+n);var f=a.scrollLeft-p,g=n;return(f>2||-2>f)&&!e?(p=a.scrollLeft,b.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-p),void(c.onKill&&c.onKill())):(d=-d,0>d?(n=d-.5|0,d=0):d>t?(n=d-t|0,d=t):n=0,(n||g)&&(h?this._suspendTransforms||(k[pa]=h+-n+"px,"+-m+i):k.left=-n+"px",n+s>=0&&(k.paddingRight=n+s+"px")),a.scrollLeft=0|d,void(p=a.scrollLeft))},this.top=function(d,e){if(!arguments.length)return-(a.scrollTop+m);var f=a.scrollTop-o,g=m;return(f>2||-2>f)&&!e?(o=a.scrollTop,b.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-o),void(c.onKill&&c.onKill())):(d=-d,0>d?(m=d-.5|0,d=0):d>v?(m=d-v|0,d=v):m=0,(m||g)&&(h?this._suspendTransforms||(k[pa]=h+-n+"px,"+-m+i):k.top=-m+"px"),a.scrollTop=0|d,void(o=a.scrollTop))},this.maxScrollTop=function(){return v},this.maxScrollLeft=function(){return t},this.disable=function(){for(l=j.firstChild;l;)g=l.nextSibling,a.appendChild(l),l=g;a===j.parentNode&&a.removeChild(j)},this.enable=function(){if(l=a.firstChild,l!==j){for(;l;)g=l.nextSibling,j.appendChild(l),l=g;a.appendChild(j),this.calibrate()}},this.calibrate=function(b){var c,g,h=a.clientWidth===d;o=a.scrollTop,p=a.scrollLeft,(!h||a.clientHeight!==e||j.offsetHeight!==f||q!==a.scrollWidth||r!==a.scrollHeight||b)&&((m||n)&&(c=this.left(),g=this.top(),this.left(-a.scrollLeft),this.top(-a.scrollTop)),(!h||b)&&(k.display="block",k.width="auto",k.paddingRight="0px",s=Math.max(0,a.scrollWidth-a.clientWidth),s&&(s+=ja(a,"paddingLeft")+(Sa?ja(a,"paddingRight"):0))),k.display="inline-block",k.position="relative",k.overflow="visible",k.verticalAlign="top",k.width="100%",k.paddingRight=s+"px",Sa&&(k.paddingBottom=ja(a,"paddingBottom",!0)),C&&(k.zoom="1"),d=a.clientWidth,e=a.clientHeight,q=a.scrollWidth,r=a.scrollHeight,t=a.scrollWidth-d,v=a.scrollHeight-e,f=j.offsetHeight,k.display="block",(c||g)&&(this.left(c),this.top(g)))},this.content=j,this.element=a,this._suspendTransforms=!1,this.enable()},Ua=function(d,f){a.call(this,d),d=aa(d),g||(g=q.com.greensock.plugins.ThrowPropsPlugin),this.vars=f=O(f||{}),this.target=d,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(f.dragResistance)||0,this.edgeResistance=isNaN(f.edgeResistance)?1:parseFloat(f.edgeResistance)||0,this.lockAxis=f.lockAxis,this.autoScroll=f.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!f.allowEventDefault;var h,i,j,k,l,r,s,t,w,x,E,H,P,S,U,V,Z,ba,da,ea,fa,ga,ha,ia,ma,na,oa,pa,qa,ra,sa,ta,va,wa,xa=(f.type||(C?"top,left":"x,y")).toLowerCase(),ya=-1!==xa.indexOf("x")||-1!==xa.indexOf("y"),za=-1!==xa.indexOf("rotation"),Aa=za?"rotation":ya?"x":"left",Ba=ya?"y":"top",Ea=-1!==xa.indexOf("x")||-1!==xa.indexOf("left")||"scroll"===xa,Fa=-1!==xa.indexOf("y")||-1!==xa.indexOf("top")||"scroll"===xa,Ga=f.minimumMovement||2,Ha=this,Na=N(f.trigger||f.handle||d),Sa={},Va=0,Wa=!1,Xa=f.autoScrollMarginTop||40,Za=f.autoScrollMarginRight||40,$a=f.autoScrollMarginBottom||40,_a=f.autoScrollMarginLeft||40,ab=f.clickableTest||Qa,bb=0,cb=function(a){return Ha.isPressed&&a.which<2?void Ha.endDrag():(a.preventDefault(),a.stopPropagation(),!1)},db=function(a){if(Ha.autoScroll&&Ha.isDragging&&(Wa||ba)){var b,c,e,f,g,h,j,k,l=d,m=15*Ha.autoScroll;for(Wa=!1,M.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=v.scrollTop?v.scrollTop:u.body.scrollTop,M.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=v.scrollLeft?v.scrollLeft:u.body.scrollLeft,f=Ha.pointerX-M.scrollLeft,g=Ha.pointerY-M.scrollTop;l&&!c;)c=Y(l.parentNode),b=c?M:l.parentNode,e=c?{bottom:Math.max(v.clientHeight,window.innerHeight||0),right:Math.max(v.clientWidth,window.innerWidth||0),left:0,top:0}:b.getBoundingClientRect(),h=j=0,Fa&&(k=b._gsMaxScrollY-b.scrollTop,0>k?j=k:g>e.bottom-$a&&k?(Wa=!0,j=Math.min(k,m*(1-Math.max(0,e.bottom-g)/$a)|0)):g<e.top+Xa&&b.scrollTop&&(Wa=!0,j=-Math.min(b.scrollTop,m*(1-Math.max(0,g-e.top)/Xa)|0)),j&&(b.scrollTop+=j)),Ea&&(k=b._gsMaxScrollX-b.scrollLeft,0>k?h=k:f>e.right-Za&&k?(Wa=!0,h=Math.min(k,m*(1-Math.max(0,e.right-f)/Za)|0)):f<e.left+_a&&b.scrollLeft&&(Wa=!0,h=-Math.min(b.scrollLeft,m*(1-Math.max(0,f-e.left)/_a)|0)),h&&(b.scrollLeft+=h)),c&&(h||j)&&(window.scrollTo(b.scrollLeft,b.scrollTop),rb(Ha.pointerX+h,Ha.pointerY+j)),l=b}if(ba){var n=Ha.x,o=Ha.y,p=1e-6;p>n&&n>-p&&(n=0),p>o&&o>-p&&(o=0),za?(Ha.deltaX=n-qa.data.rotation,qa.data.rotation=Ha.rotation=n,qa.setRatio(1)):i?(Fa&&(Ha.deltaY=o-i.top(),i.top(o)),Ea&&(Ha.deltaX=n-i.left(),i.left(n))):ya?(Fa&&(Ha.deltaY=o-qa.data.y,qa.data.y=o),Ea&&(Ha.deltaX=n-qa.data.x,qa.data.x=n),qa.setRatio(1)):(Fa&&(Ha.deltaY=o-parseFloat(d.style.top||0),d.style.top=o+"px"),Ea&&(Ha.deltaY=n-parseFloat(d.style.left||0),d.style.left=n+"px")),!t||a||ta||(ta=!0,ka(Ha,"drag","onDrag"),ta=!1)}ba=!1},eb=function(a,c){var e,f=Ha.x,g=Ha.y;d._gsTransform||!ya&&!za||b.set(d,{x:"+=0",overwrite:!1,data:"_draggable"}),ya?(Ha.y=d._gsTransform.y,Ha.x=d._gsTransform.x):za?Ha.x=Ha.rotation=d._gsTransform.rotation:i?(Ha.y=i.top(),Ha.x=i.left()):(Ha.y=parseInt(d.style.top,10)||0,Ha.x=parseInt(d.style.left,10)||0),(ea||fa||ga)&&!c&&(Ha.isDragging||Ha.isThrowing)&&(ga&&(L.x=Ha.x,L.y=Ha.y,e=ga(L),e.x!==Ha.x&&(Ha.x=e.x,ba=!0),e.y!==Ha.y&&(Ha.y=e.y,ba=!0)),ea&&(e=ea(Ha.x),e!==Ha.x&&(Ha.x=e,za&&(Ha.rotation=e),ba=!0)),fa&&(e=fa(Ha.y),e!==Ha.y&&(Ha.y=e),ba=!0)),ba&&db(!0),a||(Ha.deltaX=Ha.x-f,Ha.deltaY=Ha.y-g,ka(Ha,"throwupdate","onThrowUpdate"))},fb=function(){var a,b,c,e;s=!1,i?(i.calibrate(),Ha.minX=x=-i.maxScrollLeft(),Ha.minY=H=-i.maxScrollTop(),Ha.maxX=w=Ha.maxY=E=0,s=!0):f.bounds&&(a=la(f.bounds,d.parentNode),za?(Ha.minX=x=a.left,Ha.maxX=w=a.left+a.width,Ha.minY=H=Ha.maxY=E=0):void 0!==f.bounds.maxX||void 0!==f.bounds.maxY?(a=f.bounds,Ha.minX=x=a.minX,Ha.minY=H=a.minY,Ha.maxX=w=a.maxX,Ha.maxY=E=a.maxY):(b=la(d,d.parentNode),Ha.minX=x=ja(d,Aa)+a.left-b.left,Ha.minY=H=ja(d,Ba)+a.top-b.top,Ha.maxX=w=x+(a.width-b.width),Ha.maxY=E=H+(a.height-b.height)),x>w&&(Ha.minX=w,Ha.maxX=w=x,x=Ha.minX),H>E&&(Ha.minY=E,Ha.maxY=E=H,H=Ha.minY),za&&(Ha.minRotation=x,Ha.maxRotation=w),s=!0),f.liveSnap&&(c=f.liveSnap===!0?f.snap||{}:f.liveSnap,e=c instanceof Array||"function"==typeof c,za?(ea=nb(e?c:c.rotation,x,w,1),fa=null):c.points?ga=ob(e?c:c.points,x,w,H,E,c.radius,i?-1:1):(Ea&&(ea=nb(e?c:c.x||c.left||c.scrollLeft,x,w,i?-1:1)),Fa&&(fa=nb(e?c:c.y||c.top||c.scrollTop,H,E,i?-1:1))))},gb=function(){Ha.isThrowing=!1,ka(Ha,"throwcomplete","onThrowComplete")},hb=function(){Ha.isThrowing=!1},ib=function(a,b){var c,e,h,j;a&&g?(a===!0&&(c=f.snap||f.liveSnap||{},e=c instanceof Array||"function"==typeof c,a={resistance:(f.throwResistance||f.resistance||1e3)/(za?10:1)},za?a.rotation=Pa(Ha,e?c:c.rotation,w,x,1,b):(Ea&&(a[Aa]=Pa(Ha,e?c:c.points||c.x||c.left||c.scrollLeft,w,x,i?-1:1,b||"x"===Ha.lockedAxis)),Fa&&(a[Ba]=Pa(Ha,e?c:c.points||c.y||c.top||c.scrollTop,E,H,i?-1:1,b||"y"===Ha.lockedAxis)),(c.points||c instanceof Array&&"object"==typeof c[0])&&(a.linkedProps=Aa+","+Ba,a.radius=c.radius))),Ha.isThrowing=!0,j=isNaN(f.overshootTolerance)?1===f.edgeResistance?0:1-Ha.edgeResistance+.2:f.overshootTolerance,Ha.tween=h=g.to(i||d,{throwProps:a,data:"_draggable",ease:f.ease||q.Power3.easeOut,onComplete:gb,onOverwrite:hb,onUpdate:f.fastMode?ka:eb,onUpdateParams:f.fastMode?[Ha,"onthrowupdate","onThrowUpdate"]:c&&c.radius?[!1,!0]:y},Math.max(f.minDuration||0,f.maxDuration||0)||2,isNaN(f.minDuration)?0===j||"object"==typeof a&&a.resistance>1e3?0:.5:f.minDuration,j),f.fastMode||(i&&(i._suspendTransforms=!0),h.render(h.duration(),!0,!0),eb(!0,!0),Ha.endX=Ha.x,Ha.endY=Ha.y,za&&(Ha.endRotation=Ha.x),h.play(0),eb(!0,!0),i&&(i._suspendTransforms=!1))):s&&Ha.applyBounds()},jb=function(a){var b,c,e,f,g,h,i,l,m,n=ma||[1,0,0,1,0,0];ma=Ca(d.parentNode,!0),a&&Ha.isPressed&&n.join(",")!==ma.join(",")&&(b=n[0],c=n[1],e=n[2],f=n[3],g=n[4],h=n[5],i=b*f-c*e,l=j*(f/i)+k*(-e/i)+(e*h-f*g)/i,m=j*(-c/i)+k*(b/i)+-(b*h-c*g)/i,k=l*ma[1]+m*ma[3]+ma[5],j=l*ma[0]+m*ma[2]+ma[4]),ma[1]||ma[2]||1!=ma[0]||1!=ma[3]||0!=ma[4]||0!=ma[5]||(ma=null)},kb=function(){var a=1-Ha.edgeResistance;jb(!1),ma&&(j=Ha.pointerX*ma[0]+Ha.pointerY*ma[2]+ma[4],k=Ha.pointerX*ma[1]+Ha.pointerY*ma[3]+ma[5]),ba&&(rb(Ha.pointerX,Ha.pointerY),db(!0)),i?(fb(),r=i.top(),l=i.left()):(lb()?(eb(!0,!0),fb()):Ha.applyBounds(),za?(Z=Ha.rotationOrigin=Da(d,{x:0,y:0}),eb(!0,!0),l=Ha.x,r=Ha.y=Math.atan2(Z.y-Ha.pointerY,Ha.pointerX-Z.x)*z):(oa=d.parentNode?d.parentNode.scrollTop||0:0,pa=d.parentNode?d.parentNode.scrollLeft||0:0,r=ja(d,Ba),l=ja(d,Aa))),s&&a&&(l>w?l=w+(l-w)/a:x>l&&(l=x-(x-l)/a),za||(r>E?r=E+(r-E)/a:H>r&&(r=H-(H-r)/a))),Ha.startX=l,Ha.startY=r},lb=function(){return Ha.tween&&Ha.tween.isActive()},mb=function(){!D.parentNode||lb()||Ha.isDragging||D.parentNode.removeChild(D)},nb=function(a,b,c,d){return null==b&&(b=-A),null==c&&(c=A),"function"==typeof a?function(e){var f=Ha.isPressed?1-Ha.edgeResistance:1;return a.call(Ha,e>c?c+(e-c)*f:b>e?b+(e-b)*f:e)*d}:a instanceof Array?function(d){for(var e,f,g=a.length,h=0,i=A;--g>-1;)e=a[g],f=e-d,0>f&&(f=-f),i>f&&e>=b&&c>=e&&(h=g,i=f);return a[h]}:isNaN(a)?function(a){return a}:function(){return a*d}},ob=function(a,b,c,d,e,f,g){return f=f&&A>f?f*f:A,"function"==typeof a?function(h){var i,j,k,l=Ha.isPressed?1-Ha.edgeResistance:1,m=h.x,n=h.y;return h.x=m=m>c?c+(m-c)*l:b>m?b+(m-b)*l:m,h.y=n=n>e?e+(n-e)*l:d>n?d+(n-d)*l:n,i=a.call(Ha,h),i!==h&&(h.x=i.x,h.y=i.y),1!==g&&(h.x*=g,h.y*=g),A>f&&(j=h.x-m,k=h.y-n,j*j+k*k>f&&(h.x=m,h.y=n)),h}:a instanceof Array?function(b){for(var c,d,e,g,h=a.length,i=0,j=A;--h>-1;)e=a[h],c=e.x-b.x,d=e.y-b.y,g=c*c+d*d,j>g&&(i=h,j=g);return f>=j?a[i]:b}:function(a){return a}},pb=function(a,c){var e;if(h&&!Ha.isPressed&&a&&("mousedown"!==a.type&&"pointerdown"!==a.type||c||!(B()-bb<30)||!Ja[Ha.pointerEvent.type])){if(na=lb(),Ha.pointerEvent=a,Ja[a.type]?(ia=-1!==a.type.indexOf("touch")?a.currentTarget||a.target:u,Ka(ia,"touchend",sb),Ka(ia,"touchmove",qb),Ka(ia,"touchcancel",sb),Ka(u,"touchstart",Oa)):(ia=null,Ka(u,"mousemove",qb)),sa=null,Ka(u,"mouseup",sb),a&&a.target&&Ka(a.target,"mouseup",sb),ha=ab.call(Ha,a.target)&&f.dragClickables===!1&&!c)return Ka(a.target,"change",sb),ka(Ha,"pressInit","onPressInit"),ka(Ha,"press","onPress"),void Ra(Na,!0);if(ra=!ia||Ea===Fa||Ha.vars.allowNativeTouchScrolling===!1||Ha.vars.allowContextMenu&&a&&(a.ctrlKey||a.which>2)?!1:Ea?"y":"x",C?a=_(a,!0):ra||Ha.allowEventDefault||(a.preventDefault(),a.preventManipulation&&a.preventManipulation()),a.changedTouches?(a=U=a.changedTouches[0],V=a.identifier):a.pointerId?V=a.pointerId:U=V=null,I++,Q(db),k=Ha.pointerY=a.pageY,j=Ha.pointerX=a.pageX,ka(Ha,"pressInit","onPressInit"),(ra||Ha.autoScroll)&&$(d.parentNode),!d.parentNode||!Ha.autoScroll||i||za||!d.parentNode._gsMaxScrollX||D.parentNode||d.getBBox||(D.style.width=d.parentNode.scrollWidth+"px",d.parentNode.appendChild(D)),kb(),Ha.tween&&Ha.tween.kill(),Ha.isThrowing=!1,b.killTweensOf(i||d,!0,Sa),i&&b.killTweensOf(d,!0,{scrollTo:1}),Ha.tween=Ha.lockedAxis=null,(f.zIndexBoost||!za&&!i&&f.zIndexBoost!==!1)&&(d.style.zIndex=Ua.zIndex++),Ha.isPressed=!0,t=!(!f.onDrag&&!Ha._listeners.drag),!za&&(f.cursor!==!1||f.activeCursor))for(e=Na.length;--e>-1;)ca(Na[e],"cursor",f.activeCursor||f.cursor||"move");ka(Ha,"press","onPress")}},qb=function(a){var b,c,d,f,g,i,l=a;if(h&&!e&&Ha.isPressed&&a){if(Ha.pointerEvent=a,b=a.changedTouches){if(a=b[0],a!==U&&a.identifier!==V){for(f=b.length;--f>-1&&(a=b[f]).identifier!==V;);if(0>f)return}}else if(a.pointerId&&V&&a.pointerId!==V)return;if(C)a=_(a,!0);else{if(ia&&ra&&!sa&&(c=a.pageX,d=a.pageY,ma&&(f=c*ma[0]+d*ma[2]+ma[4],d=c*ma[1]+d*ma[3]+ma[5],c=f),g=Math.abs(c-j),i=Math.abs(d-k),(g!==i&&(g>Ga||i>Ga)||J&&ra===sa)&&(sa=g>i&&Ea?"x":"y",Ha.vars.lockAxisOnTouchScroll!==!1&&(Ha.lockedAxis="x"===sa?"y":"x","function"==typeof Ha.vars.onLockAxis&&Ha.vars.onLockAxis.call(Ha,l)),J&&ra===sa)))return void sb(l);Ha.allowEventDefault||ra&&(!sa||ra===sa)||l.cancelable===!1||(l.preventDefault(),l.preventManipulation&&l.preventManipulation())}Ha.autoScroll&&(Wa=!0),rb(a.pageX,a.pageY)}},rb=function(a,b){var c,d,e,f,g,h,i=1-Ha.dragResistance,m=1-Ha.edgeResistance;Ha.pointerX=a,Ha.pointerY=b,za?(f=Math.atan2(Z.y-b,a-Z.x)*z,g=Ha.y-f,g>180?(r-=360,Ha.y=f):-180>g&&(r+=360,Ha.y=f),Ha.x!==l||Math.abs(r-f)>Ga?(Ha.y=f,e=l+(r-f)*i):e=l):(ma&&(h=a*ma[0]+b*ma[2]+ma[4],b=a*ma[1]+b*ma[3]+ma[5],a=h),d=b-k,c=a-j,Ga>d&&d>-Ga&&(d=0),Ga>c&&c>-Ga&&(c=0),(Ha.lockAxis||Ha.lockedAxis)&&(c||d)&&(h=Ha.lockedAxis,h||(Ha.lockedAxis=h=Ea&&Math.abs(c)>Math.abs(d)?"y":Fa?"x":null,h&&"function"==typeof Ha.vars.onLockAxis&&Ha.vars.onLockAxis.call(Ha,Ha.pointerEvent)),"y"===h?d=0:"x"===h&&(c=0)),e=l+c*i,f=r+d*i),(ea||fa||ga)&&(Ha.x!==e||Ha.y!==f&&!za)?(ga&&(L.x=e,L.y=f,h=ga(L),e=h.x,f=h.y),ea&&(e=ea(e)),fa&&(f=fa(f))):s&&(e>w?e=w+(e-w)*m:x>e&&(e=x+(e-x)*m),za||(f>E?f=E+(f-E)*m:H>f&&(f=H+(f-H)*m))),za||ma||(e=Math.round(e),f=Math.round(f)),(Ha.x!==e||Ha.y!==f&&!za)&&(za?(Ha.endRotation=Ha.x=Ha.endX=e,ba=!0):(Fa&&(Ha.y=Ha.endY=f,ba=!0),Ea&&(Ha.x=Ha.endX=e,ba=!0)),!Ha.isDragging&&Ha.isPressed&&(Ha.isDragging=!0,ka(Ha,"dragstart","onDragStart")))},sb=function(a,c){if(h&&Ha.isPressed&&(!a||null==V||c||!(a.pointerId&&a.pointerId!==V||a.changedTouches&&!Ma(a.changedTouches,V)))){Ha.isPressed=!1;var e,g,i,j,k,l=a,m=Ha.isDragging,n=Ha.vars.allowContextMenu&&a&&(a.ctrlKey||a.which>2),o=b.delayedCall(.001,mb);if(ia?(La(ia,"touchend",sb),La(ia,"touchmove",qb),La(ia,"touchcancel",sb),La(u,"touchstart",Oa)):La(u,"mousemove",qb),La(u,"mouseup",sb),a&&a.target&&La(a.target,"mouseup",sb),ba=!1,ha&&!n)return a&&(La(a.target,"change",sb),Ha.pointerEvent=l),Ra(Na,!1),ka(Ha,"release","onRelease"),ka(Ha,"click","onClick"),void(ha=!1);if(R(db),!za)for(g=Na.length;--g>-1;)ca(Na[g],"cursor",f.cursor||(f.cursor!==!1?"move":null));if(m&&(Va=K=B(),Ha.isDragging=!1),I--,a){if(C&&(a=_(a,!1)),e=a.changedTouches,e&&(a=e[0],a!==U&&a.identifier!==V)){for(g=e.length;--g>-1&&(a=e[g]).identifier!==V;);if(0>g)return}Ha.pointerEvent=l,Ha.pointerX=a.pageX,Ha.pointerY=a.pageY}return n&&l?(l.preventDefault(),l.preventManipulation&&l.preventManipulation(),ka(Ha,"release","onRelease")):l&&!m?(na&&(f.snap||f.bounds)&&ib(f.throwProps),ka(Ha,"release","onRelease"),J&&"touchmove"===l.type||-1!==l.type.indexOf("cancel")||(ka(Ha,"click","onClick"),B()-bb<300&&ka(Ha,"doubleclick","onDoubleClick"),j=l.target||l.srcElement||d,bb=B(),k=function(){bb!==va&&Ha.enabled()&&!Ha.isPressed&&(j.click?j.click():u.createEvent&&(i=u.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,window,1,Ha.pointerEvent.screenX,Ha.pointerEvent.screenY,Ha.pointerX,Ha.pointerY,!1,!1,!1,!1,0,null),j.dispatchEvent(i)))},J||l.defaultPrevented||b.delayedCall(1e-5,k))):(ib(f.throwProps),C||Ha.allowEventDefault||!l||f.dragClickables===!1&&ab.call(Ha,l.target)||!m||ra&&(!sa||ra!==sa)||l.cancelable===!1||(l.preventDefault(),l.preventManipulation&&l.preventManipulation()),ka(Ha,"release","onRelease")),lb()&&o.duration(Ha.tween.duration()),m&&ka(Ha,"dragend","onDragEnd"),!0}},tb=function(a){if(a&&Ha.isDragging&&!i){var b=a.target||a.srcElement||d.parentNode,c=b.scrollLeft-b._gsScrollX,e=b.scrollTop-b._gsScrollY;(c||e)&&(ma?(j-=c*ma[0]+e*ma[2],k-=e*ma[3]+c*ma[1]):(j-=c,k-=e),b._gsScrollX+=c,b._gsScrollY+=e,rb(Ha.pointerX,Ha.pointerY))}},ub=function(a){var b=B(),c=40>b-bb,d=40>b-Va,e=c&&va===bb,f=!!a.preventDefault,g=Ha.pointerEvent&&Ha.pointerEvent.defaultPrevented,h=c&&wa===bb,i=a.isTrusted||null==a.isTrusted&&c&&e;
return f&&(e||d&&Ha.vars.suppressClickOnDrag!==!1)&&a.stopImmediatePropagation(),!c||Ha.pointerEvent&&Ha.pointerEvent.defaultPrevented||e&&i===h?void((Ha.isPressed||d||c)&&(f?i&&a.detail&&c&&!g||(a.preventDefault(),a.preventManipulation&&a.preventManipulation()):a.returnValue=!1)):(i&&e&&(wa=bb),void(va=bb))},vb=function(a){return ma?{x:a.x*ma[0]+a.y*ma[2]+ma[4],y:a.x*ma[1]+a.y*ma[3]+ma[5]}:{x:a.x,y:a.y}};da=Ua.get(this.target),da&&da.kill(),this.startDrag=function(a,b){var c,e,f,g;pb(a||Ha.pointerEvent,!0),b&&!Ha.hitTest(a||Ha.pointerEvent)&&(c=Ya(a||Ha.pointerEvent),e=Ya(d),f=vb({x:c.left+c.width/2,y:c.top+c.height/2}),g=vb({x:e.left+e.width/2,y:e.top+e.height/2}),j-=f.x-g.x,k-=f.y-g.y),Ha.isDragging||(Ha.isDragging=!0,ka(Ha,"dragstart","onDragStart"))},this.drag=qb,this.endDrag=function(a){sb(a||Ha.pointerEvent,!0)},this.timeSinceDrag=function(){return Ha.isDragging?0:(B()-Va)/1e3},this.timeSinceClick=function(){return(B()-bb)/1e3},this.hitTest=function(a,b){return Ua.hitTest(Ha.target,a,b)},this.getDirection=function(a,b){var c,d,e,f,h,i,j="velocity"===a&&g?a:"object"!=typeof a||za?"start":"element";return"element"===j&&(h=Ya(Ha.target),i=Ya(a)),c="start"===j?Ha.x-l:"velocity"===j?g.getVelocity(this.target,Aa):h.left+h.width/2-(i.left+i.width/2),za?0>c?"counter-clockwise":"clockwise":(b=b||2,d="start"===j?Ha.y-r:"velocity"===j?g.getVelocity(this.target,Ba):h.top+h.height/2-(i.top+i.height/2),e=Math.abs(c/d),f=1/b>e?"":0>c?"left":"right",b>e&&(""!==f&&(f+="-"),f+=0>d?"up":"down"),f)},this.applyBounds=function(a){var b,c,e,g,h,i;if(a&&f.bounds!==a)return f.bounds=a,Ha.update(!0);if(eb(!0),fb(),s){if(b=Ha.x,c=Ha.y,b>w?b=w:x>b&&(b=x),c>E?c=E:H>c&&(c=H),(Ha.x!==b||Ha.y!==c)&&(e=!0,Ha.x=Ha.endX=b,za?Ha.endRotation=b:Ha.y=Ha.endY=c,ba=!0,db(!0),Ha.autoScroll&&!Ha.isDragging))for($(d.parentNode),g=d,M.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=v.scrollTop?v.scrollTop:u.body.scrollTop,M.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=v.scrollLeft?v.scrollLeft:u.body.scrollLeft;g&&!i;)i=Y(g.parentNode),h=i?M:g.parentNode,Fa&&h.scrollTop>h._gsMaxScrollY&&(h.scrollTop=h._gsMaxScrollY),Ea&&h.scrollLeft>h._gsMaxScrollX&&(h.scrollLeft=h._gsMaxScrollX),g=h;Ha.isThrowing&&(e||Ha.endX>w||Ha.endX<x||Ha.endY>E||Ha.endY<H)&&ib(f.throwProps,e)}return Ha},this.update=function(a,b,c){var e=Ha.x,f=Ha.y;return jb(!b),a?Ha.applyBounds():(ba&&c&&db(!0),eb(!0)),b&&(rb(Ha.pointerX,Ha.pointerY),ba&&db(!0)),Ha.isPressed&&!b&&(Ea&&Math.abs(e-Ha.x)>.01||Fa&&Math.abs(f-Ha.y)>.01&&!za)&&kb(),Ha.autoScroll&&($(d.parentNode),Wa=Ha.isDragging,db(!0)),Ha.autoScroll&&(X(d,tb),W(d,tb)),Ha},this.enable=function(a){var e,j,k;if("soft"!==a){for(j=Na.length;--j>-1;)k=Na[j],Ka(k,"mousedown",pb),Ka(k,"touchstart",pb),Ka(k,"click",ub,!0),za||f.cursor===!1||ca(k,"cursor",f.cursor||"move"),ca(k,"touchCallout","none"),ca(k,"touchAction",Ea===Fa?"none":Ea?"pan-y":"pan-x"),ua(k)&&ca(k.ownerSVGElement||k,"touchAction",Ea===Fa?"none":Ea?"pan-y":"pan-x"),this.vars.allowContextMenu||Ka(k,"contextmenu",cb);Ra(Na,!1)}return W(d,tb),h=!0,g&&"soft"!==a&&g.track(i||d,ya?"x,y":za?"rotation":"top,left"),i&&i.enable(),d._gsDragID=e="d"+G++,F[e]=this,i&&(i.element._gsDragID=e),b.set(d,{x:"+=0",overwrite:!1,data:"_draggable"}),qa={t:d,data:C?S:d._gsTransform,tween:{},setRatio:C?function(){b.set(d,P)}:c._internals.setTransformRatio||c._internals.set3DTransformRatio},kb(),Ha.update(!0),Ha},this.disable=function(a){var b,c,e=Ha.isDragging;if(!za)for(b=Na.length;--b>-1;)ca(Na[b],"cursor",null);if("soft"!==a){for(b=Na.length;--b>-1;)c=Na[b],ca(c,"touchCallout",null),ca(c,"touchAction",null),La(c,"mousedown",pb),La(c,"touchstart",pb),La(c,"click",ub),La(c,"contextmenu",cb);Ra(Na,!0),ia&&(La(ia,"touchcancel",sb),La(ia,"touchend",sb),La(ia,"touchmove",qb)),La(u,"mouseup",sb),La(u,"mousemove",qb)}return X(d,tb),h=!1,g&&"soft"!==a&&g.untrack(i||d,ya?"x,y":za?"rotation":"top,left"),i&&i.disable(),R(db),Ha.isDragging=Ha.isPressed=ha=!1,e&&ka(Ha,"dragend","onDragEnd"),Ha},this.enabled=function(a,b){return arguments.length?a?Ha.enable(b):Ha.disable(b):h},this.kill=function(){return Ha.isThrowing=!1,b.killTweensOf(i||d,!0,Sa),Ha.disable(),b.set(Na,{clearProps:"userSelect"}),delete F[d._gsDragID],Ha},-1!==xa.indexOf("scroll")&&(i=this.scrollProxy=new Ta(d,T({onKill:function(){Ha.isPressed&&sb(null)}},f)),d.style.overflowY=Fa&&!Ia?"auto":"hidden",d.style.overflowX=Ea&&!Ia?"auto":"hidden",d=i.content),f.force3D!==!1&&b.set(d,{force3D:!0}),za?Sa.rotation=1:(Ea&&(Sa[Aa]=1),Fa&&(Sa[Ba]=1)),za?(P=p,S=P.css,P.overwrite=!1):ya&&(P=Ea&&Fa?m:Ea?n:o,S=P.css,P.overwrite=!1),this.enable()},Va=Ua.prototype=new a;Va.constructor=Ua,Va.pointerX=Va.pointerY=Va.startX=Va.startY=Va.deltaX=Va.deltaY=0,Va.isDragging=Va.isPressed=!1,Ua.version="0.17.1",Ua.zIndex=1e3,Ka(u,"touchcancel",function(){}),Ka(u,"contextmenu",function(a){var b;for(b in F)F[b].isPressed&&F[b].endDrag()}),Ua.create=function(a,c){"string"==typeof a&&(a=b.selector(a));for(var d=a&&0!==a.length?Ga(a)?Ha(a):[a]:[],e=d.length;--e>-1;)d[e]=new Ua(d[e],c);return d},Ua.get=function(a){return F[(aa(a)||{})._gsDragID]},Ua.timeSinceDrag=function(){return(B()-K)/1e3};var Wa={},Xa=function(a){var b,c,d=0,e=0;for(a=aa(a),b=a.offsetWidth,c=a.offsetHeight;a;)d+=a.offsetTop,e+=a.offsetLeft,a=a.offsetParent;return{top:d,left:e,width:b,height:c}},Ya=function(a,b){if(a===window)return Wa.left=Wa.top=0,Wa.width=Wa.right=v.clientWidth||a.innerWidth||u.body.clientWidth||0,Wa.height=Wa.bottom=(a.innerHeight||0)-20<v.clientHeight?v.clientHeight:a.innerHeight||u.body.clientHeight||0,Wa;var c=a.pageX!==b?{left:a.pageX-V(),top:a.pageY-U(),right:a.pageX-V()+1,bottom:a.pageY-U()+1}:a.nodeType||a.left===b||a.top===b?C?Xa(a):aa(a).getBoundingClientRect():a;return c.right===b&&c.width!==b?(c.right=c.left+c.width,c.bottom=c.top+c.height):c.width===b&&(c={width:c.right-c.left,height:c.bottom-c.top,right:c.right,left:c.left,bottom:c.bottom,top:c.top}),c};return Ua.hitTest=function(a,b,c){if(a===b)return!1;var d,e,f,g=Ya(a),h=Ya(b),i=h.left>g.right||h.right<g.left||h.top>g.bottom||h.bottom<g.top;return i||!c?!i:(f=-1!==(c+"").indexOf("%"),c=parseFloat(c)||0,d={left:Math.max(g.left,h.left),top:Math.max(g.top,h.top)},d.width=Math.min(g.right,h.right)-d.left,d.height=Math.min(g.bottom,h.bottom)-d.top,d.width<0||d.height<0?!1:f?(c*=.01,e=d.width*d.height,e>=g.width*g.height*c||e>=h.width*h.height*c):d.width>c&&d.height>c)},D.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",Ua},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),require("../plugins/CSSPlugin.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite","CSSPlugin"],b)}("Draggable"); <div class="oembed"><a href="?innerWidth=200&innerHeight=113&inline=true#embed-colorbox-973994" class="colorbox-inline" target="_top"><img width="100" src="https://i.ytimg.com/vi/MPy8GS4O5PM/hqdefault.jpg" height="360" alt="Restoring Blaschka Sea Creatures in Glass on YouTube" title="Restoring Blaschka Sea Creatures in Glass" /><span class="video-indicator"> </span></a></div><div style="display:none;"><div id="embed-colorbox-973994" style="overflow: hidden !important"><iframe class='youtube-video' src='https://www.youtube.com/embed/MPy8GS4O5PM?feature=oembed' width='200' height='113' scrolling='no' title='Restoring Blaschka Sea Creatures in Glass' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen='1'></iframe></div></div><div class="file-info"><a href="https://mcz.harvard.edu/file/973994"  class="entity-link" target="_top">Restoring Blaschka Sea Creatures in Glass</a></div>  </div>

  
</div>
<div id="file-973992" class="file file-video file-video-oembed oembed-video oembed-default oembed-youtube">

          <h2 class="element-invisible oembed-title"><a href="https://www.youtube.com/playlist?list=PLL8_5VpX9TxrP35cKyS8M6GVykLkb9BrW#mcz" target="_top">The Origin of Mammal Movement</a></h2>
      
  
  <div class="content" class="oembed-content">
    <div class="oembed"><a href="?innerWidth=200&innerHeight=113&inline=true#embed-colorbox-973992" class="colorbox-inline" target="_top"><img width="100" src="https://i.ytimg.com/vi/opBalCaq5m8/hqdefault.jpg" height="360" alt="Harvard Adventures! on YouTube" title="Harvard Adventures!" /><span class="video-indicator"> </span></a></div><div style="display:none;"><div id="embed-colorbox-973992" style="overflow: hidden !important"><iframe class='youtube-video' src='https://www.youtube.com/embed/videoseries?list=PLL8_5VpX9TxrP35cKyS8M6GVykLkb9BrW' width='200' height='113' scrolling='no' title='Harvard Adventures!' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen='1'></iframe></div></div><div class="file-info"><a href="https://mcz.harvard.edu/file/973992"  class="entity-link" target="_top">The Origin of Mammal Movement</a></div>  </div>

  
</div>
</div></div></div></div>
  </div></section><section id="block-boxes-1633552051" class="block block-boxes block-boxes-os_boxes_html"  module="boxes" delta="1633552051"><div class="block-inner clearfix">  
      <h2 class="block-title" ng-non-bindable="">Research publications based on MCZ specimens</h2>
  
  <div class="block-content content" ng-non-bindable=""><div id='boxes-box-1633552051' class='boxes-box'><div class="boxes-box-content"><div class="media media-element-container media-default"><div class="field field-name-field-html-code field-type-text-long field-label-hidden view-mode-default"><div class="field-items"><div class="field-item even"><iframe allowfullscreen="false" allowtransparency="true" frameborder="0" scrolling="no" src="https://www.gbif.org/api/widgets/literature/latest?gbifDatasetKey=4bfac3ea-8763-4f4b-a71a-76a6f5f243d3" style="width: 100%; height: 350px;"></iframe></div></div></div></div></div></div></div>
  </div></section></div></div>																																			</div>
								<!--front panel regions end-->
													
											</div>
				</div>

				
				
			</div>
		</div>
		<!--footer region beg-->
		<footer id="footer" class="clearfix" role="contentinfo">
		<!-- Three column 3x33 Gpanel -->
		
			<div class="at-panel gpanel panel-display footer clearfix">
								<div class="region region-footer-first"><div class="region-inner clearfix"><div id="block-boxes-1470838049" class="block block-boxes block-boxes-os_boxes_html no-title"  module="boxes" delta="1470838049"><div class="block-inner clearfix">  
  
  <div class="block-content content" ng-non-bindable=""><div id='boxes-box-1470838049' class='boxes-box'><div class="boxes-box-content"><p>
	<img height="86" width="400" alt="Harvard Museum of Comparative Zoology Logo" title="Harvard Museum of Comparative Zoology Logo" class="media-element file-default file-os-files-medium" src="https://mcz.harvard.edu/sites/hwpi.harvard.edu/files/styles/os_files_medium/public/mcz/files/harvard_museum_of_comparative_zoology_horizontal_rgb.png?m=1516205069&amp;itok=tLv4Qc4t" />
</p>

<p style="width:390px; text-align:right; margin-top:-2em">
	<a href="https://mcz.harvard.edu/privacy-policy" style="color:#215990">Privacy |</a> <a href="https://mcz.harvard.edu/user-agreement" style="color:#215990">User Agreement</a>
</p>
</div></div></div>
  </div></div></div></div>				<div class="region region-footer"><div class="region-inner clearfix"><div id="block-os-footer" class="block block-os os-custom-menu no-title"  module="os" delta="footer"><div class="block-inner clearfix">  
  
  <div class="block-content content" ng-non-bindable=""><ul class="menu clearfix"><li class="first leaf menu-depth-1 menu-item-122225"><a href="https://hmsc.harvard.edu/"  title="">Harvard Museums of Science &amp; Culture</a></li><li class="last leaf menu-depth-1 menu-item-122230"><a href="https://oeb.harvard.edu/" >Organismic and Evolutionary Biology</a></li></ul></div>
  </div></div><div id="block-boxes-1504190738" class="block block-boxes block-boxes-os_boxes_follow no-title"  module="boxes" delta="1504190738"><div class="block-inner clearfix">  
  
  <div class="block-content content" ng-non-bindable=""><div id='boxes-box-1504190738' class='boxes-box'><div class="boxes-box-content"><div class="item-list"><ul class="follow-me-links"><li><a href="https://www.instagram.com/mczharvard/"  class="follow-icon" style="background-position: -630px 0px" target="_blank">https://www.instagram.com/mczharvard/</a></li><li><a href="https://twitter.com/MCZHarvard"  class="follow-icon" style="background-position: -189px 0px" target="_blank">https://twitter.com/MCZHarvard</a></li><li><a href="https://www.facebook.com/MCZHarvard/"  class="follow-icon" style="background-position: -531px 0px" target="_blank">https://www.facebook.com/MCZHarvard/</a></li></ul></div></div></div></div>
  </div></div></div></div>								<div class="region region-footer-bottom"><div class="region-inner clearfix"><div id="block-boxes-1522347740" class="block block-boxes block-boxes-os_boxes_media no-title"  module="boxes" delta="1522347740"><div class="block-inner clearfix">  
  
  <div class="block-content content"><div id='boxes-box-1522347740' class='boxes-box'><div class="boxes-box-content"><div id="file-973429" class="file file-html file-html-embed">

          <h2 class="element-invisible"><a href="">d327872e00f44e2d502b313399641a26</a></h2>
      
  
  <div class="content">
    <div class="file-info"></div><div class="field field-name-field-html-code field-type-text-long field-label-hidden view-mode-full"><div class="field-items"><div class="field-item even"><style>
a:link, a:visited, a:hover, a:focus {
    font-weight: 600;
}
#menu-bar ul.nice-menu li a {
    font-weight: 300!important;
}
#menu-bar ul.nice-menu .menuparent a, #menu-bar ul.nice-menu a.active {
    font-weight: 300;
}

.cards a:link, .cards a:visited, .cards a:hover, .cards a:focus {
    font-weight: 300;
}

.os-swipe-large, .os-swipe-small {font-weight: 300!important;}

div#block-boxes-os-pages-section-nav ul li a {
    font-weight: 300;
}


.landing .breadcrumb {
    display: none;
}
div#boxes-box-1364321266  h2 {
    font-size: 20px;
    line-height: 28px;
}
div#boxes-box-1364321266 {
    padding: 0 35px;
}
.cards img.media-element.file-default {
    padding-right: 0;
}
.region.region-sidebar-first.sidebar a.os-swipe-large {
    background: #6C7A88;
}
.cards h3 {
    margin-top: 25px;
}
a.os-swipe-small, a.os-swipe-large {
    background:  #333;
    font-size:  110%;
}

.contactband {
    border-top: 2px dotted #ccc;
    background: #6C7A88;
    padding-top: 0!important;
    margin-bottom: -35px!important;
    color: #fff;
}
#layout_16_9_side .slide {
    background: #495059;
}
.landing .block-boxes-os_slideshow_box {
   border:4px solid #f4f4f4;
margin-bottom:45px!important;
}
.band h1 {
    text-transform: uppercase;
    letter-spacing: .5px;
    margin-bottom: 35px;
    border-bottom: 2px dotted #ccc!important;
    padding-bottom: 35px;
}
.page-node.landing #content-column .content-inner {
    padding: 0;
}
.landing .content-left.content-right .region-content-first .region-inner, 
.landing .content-left.content-bottom .region-content-first .region-inner{
padding-right:0!important;
}
.landing #columns .region-inner {
    padding-top: 0;
    margin-bottom: 0;
}
.cards .block-boxes h3 {
    border-bottom: dotted 2px #c3bdbd;
    padding-bottom: 25px;
    text-transform: uppercase;
    letter-spacing: .5px;
    margin-bottom: 35px;
}
.landing div#block-os-pages-main-content h2 {
    font-size: 24px!important;
    font-weight: 300;
    font-family: "Montserrat",sans-serif!important;
}


.landing .region.region-content-top .region-inner,
.landing .region.region-content-first .region-inner
.landing .region.region-content-second .region-inner
.landing .region.region-content-bottom .region-inner {
    max-width: 1170px;
    margin: auto;
}


.landing div#columns {
    width: 100%;
}
.landing div#block-os-pages-main-content {

    padding-bottom: 35px;
}
.band.gray article {
    font-size: 18px;
    line-height: 38px;
    font-weight: 300!important;
    font-family: "Montserrat",sans-serif;
}
.band.gray {
    background-image: url(https://hwpi.harvard.edu/files/mcz/files/debut_light.png?m=1525966283);
}
.band, .cards {
    padding: 75px 0;
}
.band .block-inner,
.cards .block-inner {
    margin: auto!important;
    max-width: 980px;
}
.landing h1#page-title {
    text-align: center;
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 300!important;
    font-family: 'Montserrat',sans-serif !important;
    margin-bottom: 65px;
    background: url(https://chge.hsph.harvard.edu/files/chge/files/titlebot.png?m=1493830200);
    background-repeat: no-repeat;
    background-position: center bottom;
    padding-bottom: 55px;
}

.landing #content-column .region.region-content-top {
    text-align: center;
}

.landing #content-column .region.region-content-first {
    width:  100%;
    text-align: center;
}

.landing #content-column .region.region-content-second {
    width:  100%;
}

.landing #content-column .region.region-content-bottom {
    width:  100%;
    text-align:  center;
}

.hideimage img.image-style-profile-thumbnail {
    display:  none;
}
.hideimage article.node-person.node-teaser {
    margin-left: -13px;
}
.block-boxes-os_boxes_manual_list article.node-teaser {
     margin-bottom: -25px!important;
}
/*
.block .node:only-child {
    margin-bottom: -29px;
} */

div#menu-bar {
    background: #eee;
    border-top: none;
}
nav#block-os-primary-menu {
   display: flex;
   justify-content: center;
}
.block-boxes-os_boxes_manual_list .person-teaser-wrapper .field.field-name-field-website.field-type-link-field.field-label-hidden.view-mode-teaser,
.block-boxes-os_boxes_manual_list .person-teaser-wrapper .field.field-name-field-address.field-type-text-long.field-label-hidden.view-mode-teaser,
.block-boxes-os_boxes_manual_list .person-teaser-wrapper .field.field-name-field-email.field-type-text.field-label-hidden.view-mode-teaser,
.block-boxes-os_boxes_manual_list .person-teaser-wrapper .field.field-name-field-phone.field-type-text.field-label-hidden.view-mode-teaser,
.block-boxes-os_boxes_manual_list .person-teaser-wrapper .field.field-name-body.field-type-text-with-summary.field-label-hidden.view-mode-teaser {
   display: none;
}

.front #layout_3_1_overlay .slide-copy {
    margin: 15% 0 0 0;
}
div#box-os_news_latest-page {
    margin-bottom: -40px;
}
/*
#menu-bar ul.nice-menu a {
    font-size: 1.2em;
    font-weight: bold;
    font-family: Verdana,sans-serif!important;
    letter-spacing: 1.5px;
}
#menu-bar {
    background: #EEEEEE!important;
    border-bottom: 1px solid #eee!important;
    border-top: 0;
}
*/
div#block-boxes-1364321266 {
    margin-top: 55px;
}
section#block-boxes-1522346369 {
    margin-bottom: 85px!important;
}
div#header-container {
    width: 95%;
    max-width: 1350px;
}
div#boxes-box-1468330714 img {
    max-width: 700px;
    margin-top: -15px;
    padding: 0;
}
.callout p {
    font-size: 18px;
    color: #666;
    line-height: 28px;
    letter-spacing: 1px;
}
a.more-link:hover {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #ccc;
    color: #fff;
}
.front article {
    margin-bottom: 55px;
}
a.more-link {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    border: 1px solid #ccc;
    padding: 10px;
}
.landing .more-link:after{
display:none;
}
h2.block-title {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 18px;
    margin-top: 35px;
}
.front h1.node-title {
    font-size: 24px;
    line-height: normal;
    letter-spacing: 1px;
    margin-bottom: 15px;
}
a.node-readmore {
    display: none;
}
#layout_3_1_overlay .slide-copy h2 + p {
    margin-top: 3%;
    font-size: 18px;
    letter-spacing: .5px;
}
.front #layout_3_1_overlay .slide-copy h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 28px;
    line-height: 35px;
}
.front .block.block-boxes-os_slideshow_box #layout_3_1_overlay, .front .block.block-boxes-os_slideshow_box #layout_3_1_overlay img {
  filter: brightness(90%);
    -webkit-filter: brightness(90%);
}
a.rslides_nav {
    background-color: transparent;
}
.rslides_tabs li {
    background: transparent!important;
}
a.rslides_nav.prev {
    background-position: center;
    background-image: url(https://hwpi.harvard.edu/files/mcz/files/arrow_left_w.png?m=1523390410);
}
a.rslides_nav.next {
    background-position: center;
    background-image: url(https://hwpi.harvard.edu/files/mcz/files/arrow_right_wh.png?m=1523390409);
}
.front h2.block-title {
margin-bottom:45px!important;
    text-align: center!important;
    border-bottom: dotted 2px #c3bdbd;
    margin-bottom: 20px;
    padding-bottom: 15px;
}
.oembed img[src*="vimeo"] {
    padding: 22px 0;
    background: black;
}

header#header, footer#footer  {
    background-color: #eee
}
.front .block-boxes-os_sv_list_file {
    width: 980px;
    margin-left: auto;
    margin-right: auto;
}

#menu-bar ul.nice-menu .menuparent > a:before {
    display: none;
}
body, #page-title, .node-title, .page-search .title a, #content-column .block.block-boxes-os_boxes_manual_list .links.inline a, .more-link, .links a, #footer ul.menu a, .boxes-box-content h2, #content-column h2, #content-column h3, #content-column h4, .block-boxes-os_taxonomy_fbt.navigation, .block-boxes-os_boxes_facetapi_vocabulary.navigation, #footer ul.menu li ul li a, #layout_16_9_side .slide-copy h2, #layout_3_1_overlay .slide-copy h2, #layout_16_9_below .slide-copy h2, #layout_16_9_overlay .slide-copy h2, h2.block-title, #boxes-box-site_info, #boxes-box-site_info a, .date-nav h3, .cke_editable * {
    font-family: Verdana, Arial, Helvetica, sans-serif!important;
}

.callout {
    background: #ededed;
    border-left: 5px solid gray;
    margin: 14px;
    font-size: 1.1em;
    text-align: center;
}
.callout .boxes-box {
    padding: 37px;
}

#columns .block-boxes-os_boxes_html a, #columns .field-name-body a {
    text-decoration: none!important;
}
@media (max-width:1008px){
.block-boxes-os_slideshow_box {
    background: #42484F !important;
}


#menu-bar #block-os-primary-menu a.active {
    color: #000 !important;
}
#menu-bar #block-os-primary-menu ul ul li {
    padding-left: 20px!important;
}
.nav li a, .nav .menu li a {
    display: block;
    white-space: pre-wrap;
    padding: 0 10px;
}
#menu-bar #block-os-primary-menu a:hover,
#menu-bar #block-os-primary-menu a:focus{
background-color:#ccc!important;
}
#menu-bar #block-os-primary-menu ul ul li a{
font-size:14px;
}

#layout_16_9_overlay .rslides_tabs, #layout_16_9_below .rslides_tabs, #layout_16_9_side .rslides_tabs, #layout_3_1_overlay .rslides_tabs {
    background: #495059 !important;
}
#layout_16_9_overlay .slide-copy, #layout_16_9_side .slide-copy, #layout_16_9_below .slide-copy, #layout_3_1_overlay .slide-copy {

    background: #495059 !important;

}
div#box-os_news_latest-page {
    margin-bottom: 0px;
}

}
@media(max-width:768px){
a.rslides_nav.prev, a.rslides_nav.next {
    display: none;
}
}

</style></div></div></div>  </div>

  
</div>
</div></div></div>
  </div></div></div></div>			</div>

		<!--footer region end-->
    <div id="powerby-login">
  	<a href="/user?destination=home%3Fadmin_panel%3D1%26login%3D1"  class="footer-login">Admin Login</a>    </div>
  </footer>
  </div>
</div><!--page area ends-->

<div id="extradiv"></div>

  <!--FLEXIBLE ADMIN FOOTER FOR USE BY SELECT GROUPS USING OS-->
  <div id="branding_footer">
		<div class="branding-container">
	    <div class="copyright"><span class="harvard-copyright">Copyright &copy; 2024 The President and Fellows of Harvard College</span>  | <a href="https://accessibility.harvard.edu/" >Accessibility</a> | <a href="https://accessibility.huit.harvard.edu/digital-accessibility-policy" >Digital Accessibility</a> | <a href="https://www.harvard.edu/copyright-issue/" >Report Copyright Infringement</a></div>		</div>
  </div>

</div><!-- /page_wrap -->

  <script src="https://mcz.harvard.edu/profiles/openscholar/libraries/respondjs/respond.min.js?s3r20q"></script>
<script src="https://mcz.harvard.edu/sites/hwpi.harvard.edu/files/js/js_s7yA-hwRxnKty__ED6DuqmTMKG39xvpRyrtyCrbWH4M.js?m=1705438328"></script>
<script>jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","setHasJsCookie":0,"ajaxPageState":{"theme":"hwpi_onepage","theme_token":"2HveYe1e34k5yesh6KVIPIVKS2tZjOD2p2DE-Gs9-AI","jquery_version":"1.8"},"colorbox":{"opacity":"0.85","current":"{current} of {total}","previous":"\u00ab Prev","next":"Next \u00bb","close":"Close","maxWidth":"98%","maxHeight":"98%","fixed":true,"mobiledetect":true,"mobiledevicewidth":"480px","file_public_path":"\/sites\/hwpi.harvard.edu\/files","specificPagesDefaultValue":"admin*\nimagebrowser*\nimg_assist*\nimce*\nnode\/add\/*\nnode\/*\/edit\nprint\/*\nprintpdf\/*\nsystem\/ajax\nsystem\/ajax\/*"},"jcarousel":{"ajaxPath":"https:\/\/mcz.harvard.edu\/jcarousel\/ajax\/views"},"urlIsAjaxTrusted":{"\/":true,"https:\/\/mcz.harvard.edu\/search\/site":true},"spaces":{"id":"739281","path":"Museum of Comparative Zoology"},"os_ga":{"trackOutbound":1,"trackMailto":1,"trackDownload":1,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|docx?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xlsx?|xml|z|zip","trackNavigation":1},"nice_menus_options":{"delay":800,"speed":"slow"},"ogContext":{"groupType":"node","gid":"739281"},"password":{"strengthTitle":"Password compliance:"},"type":"setting"});</script>
<script src="https://mcz.harvard.edu/sites/hwpi.harvard.edu/files/js/js_jF6uxbohhL4_Fcv1HF_x4nOLPXOHbpe4-Ay_GR-XpHk.js?m=1705438328"></script>
<script src="https://mcz.harvard.edu/sites/hwpi.harvard.edu/files/js/js_lMPTHw408CGo3CyVCoa_lm8oqelfUEN78pGfVS4_RU0.js?m=1705438328"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script>
<script>window.CKEDITOR_BASEPATH = '/profiles/openscholar/libraries/ckeditor/'</script>
<script src="https://mcz.harvard.edu/sites/hwpi.harvard.edu/files/js/js_m8W9j5mk_o1fsce_xOklmQzGwmm18egNianAerGjceY.js?m=1698650351"></script>
<script src="https://mcz.harvard.edu/sites/hwpi.harvard.edu/files/js/js_-kTpqHN97mqO-XWl0FI9xTBL2ydac9GGZb9MOdN47HA.js?m=1705438328"></script>
<script src="https://mcz.harvard.edu/sites/hwpi.harvard.edu/files/js/js_qluyoBMkmyevXrrhnKB_2ie6cLJ7DL5g_0nHm6hyXwA.js?m=1705438328"></script>
<script src="https://mcz.harvard.edu/profiles/openscholar/themes/hwpi_onepage/flavors/mather/mather.js?s3r20q"></script>
</body>
</html>