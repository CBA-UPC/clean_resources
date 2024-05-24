/*!
 * Sc.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(){return we||"undefined"!=typeof window&&(we=window.gsap)&&we.registerPlugin&&we}function y(e,t){return~Le.indexOf(e)&&Le[Le.indexOf(e)+1][t]}function z(e){return!!~t.indexOf(e)}function A(e,t,r,n,i){return e.addEventListener(t,r,{passive:!n,capture:!!i})}function B(e,t,r,n){return e.removeEventListener(t,r,!!n)}function E(){return De&&De.isPressed||T.cache++}function F(r,n){function Uc(e){if(e||0===e){i&&(Me.history.scrollRestoration="manual");var t=De&&De.isPressed;e=Uc.v=Math.round(e)||(De&&De.iOS?1:0),r(e),Uc.cacheID=T.cache,t&&o("ss",e)}else(n||T.cache!==Uc.cacheID||o("ref"))&&(Uc.cacheID=T.cache,Uc.v=r());return Uc.v+Uc.offset}return Uc.offset=0,r&&Uc}function I(e){return we.utils.toArray(e)[0]||("string"==typeof e&&!1!==we.config().nullTargetWarn?console.warn("Element not found:",e):null)}function J(t,e){var r=e.s,n=e.sc,i=T.indexOf(t),o=n===Ne.sc?1:2;return~i||(i=T.push(t)-1),T[i+o]||(T[i+o]=F(y(t,r),!0)||(z(t)?n:F(function(e){return arguments.length?t[r]=e:t[r]})))}function K(e,t,i){function od(e,t){var r=He();t||n<r-s?(a=o,o=e,l=s,s=r):i?o+=e:o=a+(e-a)/(r-l)*(s-l)}var o=e,a=e,s=He(),l=s,n=t||50,c=Math.max(500,3*n);return{update:od,reset:function reset(){a=o=i?0:o,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=He();return!e&&0!==e||e===o||od(e),s===l||c<n-l?0:(o+(i?r:-r))/((i?n:s)-t)*1e3}}}function L(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function M(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function N(){(Be=we.core.globals().ScrollTrigger)&&Be.core&&function _integrate(){var e=Be.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,T),n.push.apply(n,Le),T=t,Le=n,o=function _bridge(e,t){return r[e](t)}}()}function O(e){return(we=e||q())&&"undefined"!=typeof document&&document.body&&(Me=window,Ce=(Ae=document).documentElement,Oe=Ae.body,t=[Me,Ae,Ce,Oe],we.utils.clamp,Ie="onpointerenter"in Oe?"pointer":"mouse",Ee=k.isTouch=Me.matchMedia&&Me.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Me||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,ze=k.eventTypes=("ontouchstart"in Ce?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ce?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return i=0},500),N(),ke=1),ke}var we,ke,Me,Ae,Ce,Oe,Ee,Ie,Be,t,De,ze,i=1,Fe=[],T=[],Le=[],He=Date.now,o=function _bridge(e,t){return t},r="scrollLeft",n="scrollTop",Re={s:r,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:F(function(e){return arguments.length?Me.scrollTo(e,Ne.sc()):Me.pageXOffset||Ae[r]||Ce[r]||Oe[r]||0})},Ne={s:n,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Re,sc:F(function(e){return arguments.length?Me.scrollTo(Re.sc(),e):Me.pageYOffset||Ae[n]||Ce[n]||Oe[n]||0})};Re.op=Ne,T.cache=0;var k=(Observer.prototype.init=function init(e){ke||O(we)||console.warn("Please gsap.registerPlugin(Observer)"),Be||N();var i=e.tolerance,a=e.dragMinimum,t=e.type,n=e.target,r=e.lineHeight,o=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,d=e.event,p=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,S=e.onChangeX,_=e.onChangeY,T=e.onChange,k=e.onToggleX,C=e.onToggleY,P=e.onHover,D=e.onHoverEnd,Y=e.onMove,X=e.ignoreCheck,F=e.isNormalizer,H=e.onGestureStart,R=e.onGestureEnd,U=e.onWheel,V=e.onEnable,W=e.onDisable,j=e.onClick,Q=e.scrollSpeed,q=e.capture,G=e.allowClicks,Z=e.lockAxis,$=e.onLockAxis;function Pe(){return ye=He()}function Qe(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&ge&&"touch"!==e.pointerType||X&&X(e,t)}function Se(){var e=se.deltaX=M(be),t=se.deltaY=M(me),r=Math.abs(e)>=i,n=Math.abs(t)>=i;T&&(r||n)&&T(se,e,t,be,me),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),S&&S(se),k&&se.deltaX<0!=le<0&&k(se),le=se.deltaX,be[0]=be[1]=be[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),_&&_(se),C&&se.deltaY<0!=ce<0&&C(se),ce=se.deltaY,me[0]=me[1]=me[2]=0),(ne||re)&&(Y&&Y(se),$&&oe&&$(se),re&&(h(se),re=!1),ne=oe=!1),ie&&(U(se),ie=!1),ee=0}function Te(e,t,r){be[r]+=e,me[r]+=t,se._vx.update(e),se._vy.update(t),o?ee=ee||requestAnimationFrame(Se):Se()}function Ue(e,t){"y"!==ae&&(be[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(me[2]+=t,se._vy.update(t,!0)),Z&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",oe=!0),o?ee=ee||requestAnimationFrame(Se):Se()}function Ve(e){if(!Qe(e,1)){var t=(e=L(e,s)).clientX,r=e.clientY,n=t-se.x,i=r-se.y,o=se.isDragging;se.x=t,se.y=r,(o||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),o||(se.isDragging=!0),Ue(n,i),o||p&&p(se))}}function Xe(t){if(!Qe(t,1)){B(F?n:ve,ze[1],Ve,!0);var e=se.isDragging&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),r=L(t);e||(se._vx.reset(),se._vy.reset(),s&&G&&we.delayedCall(.08,function(){if(300<He()-ye&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(ve.createEvent){var e=ve.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,Me,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&!F&&te.restart(!0),g&&e&&g(se),b&&b(se,e)}}function Ye(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&H(e,se.isDragging)}function Ze(){return(se.isGesturing=!1)||R(se)}function $e(e){if(!Qe(e)){var t=ue(),r=fe();Te((t-de)*Q,(r-pe)*Q,1),de=t,pe=r,l&&te.restart(!0)}}function _e(e){if(!Qe(e)){e=L(e,s),U&&(ie=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?Me.innerHeight:1)*f;Te(e.deltaX*t,e.deltaY*t,0),l&&!F&&te.restart(!0)}}function af(e){if(!Qe(e)){var t=e.clientX,r=e.clientY,n=t-se.x,i=r-se.y;se.x=t,se.y=r,ne=!0,(n||i)&&Ue(n,i)}}function bf(e){se.event=e,P(se)}function cf(e){se.event=e,D(se)}function df(e){return Qe(e)||L(e,s)&&j(se)}this.target=n=I(n)||Ce,this.vars=e,u=u&&we.utils.toArray(u),i=i||0,a=a||0,f=f||1,Q=Q||1,t=t||"wheel,touch,pointer",o=!1!==o,r=r||parseFloat(Me.getComputedStyle(Oe).lineHeight)||22;var ee,te,re,ne,ie,oe,ae,se=this,le=0,ce=0,ue=J(n,Re),fe=J(n,Ne),de=ue(),pe=fe(),ge=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===ze[0],he=z(n),ve=n.ownerDocument||Ae,be=[0,0,0],me=[0,0,0],ye=0,xe=se.onPress=function(e){Qe(e,1)||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=L(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),A(F?n:ve,ze[1],Ve,s,!0),se.deltaX=se.deltaY=0,v&&v(se))};te=se._dc=we.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=K(0,50,!0),se._vy=K(0,50,!0),se.scrollX=ue,se.scrollY=fe,se.isDragging=se.isGesturing=se.isPressed=!1,se.enable=function(e){return se.isEnabled||(A(he?ve:n,"scroll",E),0<=t.indexOf("scroll")&&A(he?ve:n,"scroll",$e,s,q),0<=t.indexOf("wheel")&&A(n,"wheel",_e,s,q),(0<=t.indexOf("touch")&&Ee||0<=t.indexOf("pointer"))&&(A(n,ze[0],xe,s,q),A(ve,ze[2],Xe),A(ve,ze[3],Xe),G&&A(n,"click",Pe,!1,!0),j&&A(n,"click",df),H&&A(ve,"gesturestart",Ye),R&&A(ve,"gestureend",Ze),P&&A(n,Ie+"enter",bf),D&&A(n,Ie+"leave",cf),Y&&A(n,Ie+"move",af)),se.isEnabled=!0,e&&e.type&&xe(e),V&&V(se)),se},se.disable=function(){se.isEnabled&&(Fe.filter(function(e){return e!==se&&z(e.target)}).length||B(he?ve:n,"scroll",E),se.isPressed&&(se._vx.reset(),se._vy.reset(),B(F?n:ve,ze[1],Ve,!0)),B(he?ve:n,"scroll",$e,q),B(n,"wheel",_e,q),B(n,ze[0],xe,q),B(ve,ze[2],Xe),B(ve,ze[3],Xe),B(n,"click",Pe,!0),B(n,"click",df),B(ve,"gesturestart",Ye),B(ve,"gestureend",Ze),B(n,Ie+"enter",bf),B(n,Ie+"leave",cf),B(n,Ie+"move",af),se.isEnabled=se.isPressed=se.isDragging=!1,W&&W(se))},se.kill=function(){se.disable();var e=Fe.indexOf(se);0<=e&&Fe.splice(e,1),De===se&&(De=0)},Fe.push(se),F&&z(n)&&(De=se),se.enable(d)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}k.version="3.10.4",k.create=function(e){return new k(e)},k.register=O,k.getAll=function(){return Fe.slice()},k.getById=function(t){return Fe.filter(function(e){return e.vars.id===t})[0]},q()&&we.registerPlugin(k);function va(){return nt=1}function wa(){return nt=0}function xa(e){return e}function ya(e){return Math.round(1e5*e)/1e5||0}function za(){return"undefined"!=typeof window}function Aa(){return We||za()&&(We=window.gsap)&&We.registerPlugin&&We}function Ba(e){return!!~s.indexOf(e)}function Ca(e){return y(e,"getBoundingClientRect")||(Ba(e)?function(){return Bt.width=je.innerWidth,Bt.height=je.innerHeight,Bt}:function(){return Mt(e)})}function Fa(e,t){var r=t.s,n=t.d2,i=t.d,o=t.a;return(r="scroll"+n)&&(o=y(e,r))?o()-Ca(e)()[i]:Ba(e)?(qe[r]||Ge[r])-(je["inner"+n]||qe["client"+n]||Ge["client"+n]):e[r]-e["offset"+n]}function Ga(e,t){for(var r=0;r<p.length;r+=3)t&&!~t.indexOf(p[r+1])||e(p[r],p[r+1],p[r+2])}function Ha(e){return"string"==typeof e}function Ia(e){return"function"==typeof e}function Ja(e){return"number"==typeof e}function Ka(e){return"object"==typeof e}function La(e){return Ia(e)&&e()}function Ma(r,n){return function(){var e=La(r),t=La(n);return function(){La(e),La(t)}}}function Na(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Oa(e,t){if(e.enabled){var r=t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function db(e){return je.getComputedStyle(e)}function fb(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function hb(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function ib(e){var t,r=[],n=e.labels,i=e.duration();for(t in n)r.push(n[t]/i);return r}function kb(i){var o=We.utils.snap(i),a=Array.isArray(i)&&i.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return o(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=o(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:o(t<0?e-i:e+i)}}function mb(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function nb(e,t,r,n,i){return e.addEventListener(t,r,{passive:!n,capture:!!i})}function ob(e,t,r,n){return e.removeEventListener(t,r,!!n)}function pb(e,t,r){return r&&r.wheelHandler&&e(t,"wheel",r)}function tb(e,t){if(Ha(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in Y?Y[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function ub(e,t,r,n,i,o,a,s){var l=i.startColor,c=i.endColor,u=i.fontSize,f=i.indent,d=i.fontWeight,p=Je.createElement("div"),g=Ba(r)||"fixed"===y(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?Ge:r,b=-1!==e.indexOf("start"),m=b?l:c,x="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(x+=(n===Ne?_:P)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=b,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=x,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+n.op.d2],X(p,0,n,b),p}function zb(){return 34<dt()-pt&&ee()}function Ab(){h&&h.isPressed&&!(h.startX>Ge.clientWidth)||(T.cache++,x=x||requestAnimationFrame(ee),pt||V("scrollStart"),pt=dt())}function Bb(){m=je.innerWidth,b=je.innerHeight}function Cb(){T.cache++,rt||g||Je.fullscreenElement||Je.webkitFullscreenElement||v&&m===je.innerWidth&&!(Math.abs(je.innerHeight-b)>.25*je.innerHeight)||l.restart(!0)}function Ib(e){var t,r=We.ticker.frame,n=[],i=0;if(w!==r||ft){for(Q();i<U.length;i+=4)(t=je.matchMedia(U[i]).matches)!==U[i+3]&&((U[i+3]=t)?n.push(i):Q(1,U[i])||Ia(U[i+2])&&U[i+2]());for(j(),i=0;i<n.length;i++)t=n[i],lt=U[t],U[t+2]=U[t+1](e);lt=0,a&&Z(0,1),w=r,V("matchMedia")}}function Jb(){return ob(oe,"scrollEnd",Jb)||Z(!0)}function Ob(){return T.cache++&&T.forEach(function(e){return"function"==typeof e&&(e.rec=0)})}function Zb(e,t,r,n){if(e.parentNode!==t){for(var i,o=te.length,a=t.style,s=e.style;o--;)a[i=te[o]]=r[i];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[P]=s[_]=a.flexBasis="auto",a.overflow="visible",a.boxSizing="border-box",a[vt]=hb(e,Re)+kt,a[bt]=hb(e,Ne)+kt,a[St]=s[_t]=s.top=s.left="0",It(n),s[vt]=s.maxWidth=r[vt],s[bt]=s.maxHeight=r[bt],s[St]=r[St],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function ac(e){for(var t=re.length,r=e.style,n=[],i=0;i<t;i++)n.push(re[i],r[re[i]]);return n.t=e,n}function dc(e,t,r,n,i,o,a,s,l,c,u,f,d){Ia(e)&&(e=e(s)),Ha(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?tb("0"+e.substr(3),r):0));var p,g,h,v=d?d.time():0;if(d&&d.seek(0),Ja(e))a&&X(a,r,n,!0);else{Ia(t)&&(t=t(s));var b,m,y,x,w=e.split(" ");h=I(t)||Ge,(b=Mt(h)||{})&&(b.left||b.top)||"none"!==db(h).display||(x=h.style.display,h.style.display="block",b=Mt(h),x?h.style.display=x:h.style.removeProperty("display")),m=tb(w[0],b[n.d]),y=tb(w[1]||"0",r),e=b[n.p]-l[n.p]-c+m+i-y,a&&X(a,y,n,r-y<20||a._isStart&&20<y),r-=r-y}if(o){var S=e+r,_=o._isStart;p="scroll"+n.d2,X(o,S,n,_&&20<S||!_&&(u?Math.max(Ge[p],qe[p]):o.parentNode[p])<=S+1),u&&(l=Mt(a),u&&(o.style[n.op.p]=l[n.op.p]-n.op.m-o._offset+kt))}return d&&h&&(p=Mt(h),d.seek(f),g=Mt(h),d._caScrollDist=p[n.p]-g[n.p],e=e/d._caScrollDist*f),d&&d.seek(v),d?e:Math.round(e)}function fc(e,t,r,n){if(e.parentNode!==t){var i,o,a=e.style;if(t===Ge){for(i in e._stOrig=a.cssText,o=db(e))+i||ie.test(i)||!o[i]||"string"!=typeof a[i]||"0"===i||(a[i]=o[i]);a.top=r,a.left=n}else a.cssText=e._stOrig;We.core.getCache(e).uncache=1,t.appendChild(e)}}function gc(l,e){function Qj(e,t,r,n,i){var o=Qj.tween,a=t.onComplete,s={};return r=r||f(),i=n&&i||0,n=n||e-r,o&&o.kill(),c=Math.round(r),t[d]=e,(t.modifiers=s)[d]=function(e){return(e=ya(f()))!==c&&e!==u&&2<Math.abs(e-c)&&2<Math.abs(e-u)?(o.kill(),Qj.tween=0):e=r+n*o.ratio+i*o.ratio*o.ratio,u=c,c=ya(e)},t.onComplete=function(){Qj.tween=0,a&&a.call(o)},o=Qj.tween=We.to(l,t)}var c,u,f=J(l,e),d="_scroll"+e.p2;return(l[d]=f).wheelHandler=function(){return Qj.tween&&Qj.tween.kill()&&(Qj.tween=0)},nb(l,"wheel",f.wheelHandler),Qj}var We,a,je,Je,qe,Ge,s,l,Ke,et,tt,c,rt,nt,u,it,f,d,p,ot,at,g,h,v,b,m,C,st,x,lt,w,ct,ut,ft=1,dt=Date.now,S=dt(),pt=0,gt=0,ht=Math.abs,_="right",P="bottom",vt="width",bt="height",mt="Right",yt="Left",xt="Top",wt="Bottom",St="padding",_t="margin",Tt="Width",D="Height",kt="px",Mt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==db(e)[u]&&We.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},At={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ct={toggleActions:"play",anticipatePin:0},Y={top:0,left:0,center:.5,bottom:1,right:1},X=function _positionMarker(e,t,r,n){var i={display:"block"},o=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,i[r.a+"Percent"]=n?-100:0,i[r.a]=n?"1px":0,i["border"+o+Tt]=1,i["border"+a+Tt]=0,i[r.p]=t+"px",We.set(e,i)},Ot=[],Pt={},H={},R=[],U=[],V=function _dispatch(e){return H[e]&&H[e].map(function(e){return e()})||R},W=[],j=function _revertRecorded(e){for(var t=0;t<W.length;t+=5)e&&W[t+4]!==e||(W[t].style.cssText=W[t+1],W[t].getBBox&&W[t].setAttribute("transform",W[t+2]||""),W[t+3].uncache=1)},Q=function _revertAll(e,t){var r;for(it=0;it<Ot.length;it++)r=Ot[it],t&&r.media!==t||(e?r.kill(1):r.revert());t&&j(t),t||V("revert")},G=0,Z=function _refreshAll(e,t){if(!pt||e){ct=!0;var r=V("refreshInit");ot&&oe.sort(),t||Q(),Ot.slice(0).forEach(function(e){return e.refresh()}),Ot.forEach(function(e){return"max"===e.vars.end&&e.setPositions(e.start,Fa(e.scroller,e._dir))}),r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ob(),l.pause(),G++,ct=!1,V("refresh")}else nb(oe,"scrollEnd",Jb)},$=0,Et=1,ee=function _updateAll(){if(!ct){oe.isUpdating=!0,ut&&ut.update(0);var e=Ot.length,t=dt(),r=50<=t-S,n=e&&Ot[0].scroll();if(Et=n<$?-1:1,$=n,r&&(pt&&!nt&&200<t-pt&&(pt=0,V("scrollEnd")),tt=S,S=t),Et<0){for(it=e;0<it--;)Ot[it]&&Ot[it].update(0,r);Et=1}else for(it=0;it<e;it++)Ot[it]&&Ot[it].update(0,r);oe.isUpdating=!1}x=0},te=["left","top",P,_,_t+wt,_t+mt,_t+xt,_t+yt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],re=te.concat([vt,bt,"boxSizing","max"+Tt,"max"+D,"position",_t,St,St+xt,St+mt,St+wt,St+yt]),ne=/([A-Z])/g,It=function _setState(e){if(e){var t,r,n=e.t.style,i=e.length,o=0;for((e.t._gsap||We.core.getCache(e.t)).uncache=1;o<i;o+=2)r=e[o+1],t=e[o],r?n[t]=r:n[t]&&n.removeProperty(t.replace(ne,"-$1").toLowerCase())}},Bt={left:0,top:0},ie=/(webkit|moz|length|cssText|inset)/i,oe=(ScrollTrigger.prototype.init=function init(_,T){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),gt){var k,n,p,M,A,C,O,P,E,B,D,e,z,Y,X,F,L,t,H,b,R,N,m,U,x,w,r,S,V,W,i,g,j,Q,q,G,K,o,Z=(_=fb(Ha(_)||Ja(_)||_.nodeType?{trigger:_}:_,Ct)).onUpdate,$=_.toggleClass,a=_.id,ee=_.onToggle,te=_.onRefresh,re=_.scrub,ne=_.trigger,ie=_.pin,oe=_.pinSpacing,ae=_.invalidateOnRefresh,se=_.anticipatePin,s=_.onScrubComplete,h=_.onSnapComplete,le=_.once,ce=_.snap,ue=_.pinReparent,l=_.pinSpacer,fe=_.containerAnimation,de=_.fastScrollEnd,pe=_.preventOverlaps,ge=_.horizontal||_.containerAnimation&&!1!==_.horizontal?Re:Ne,he=!re&&0!==re,ve=I(_.scroller||je),c=We.core.getCache(ve),be=Ba(ve),me="fixed"===("pinType"in _?_.pinType:y(ve,"pinType")||be&&"fixed"),ye=[_.onEnter,_.onLeave,_.onEnterBack,_.onLeaveBack],xe=he&&_.toggleActions.split(" "),u="markers"in _?_.markers:Ct.markers,we=be?0:parseFloat(db(ve)["border"+ge.p2+Tt])||0,Se=this,_e=_.onRefreshInit&&function(){return _.onRefreshInit(Se)},Te=function _getSizeFunc(e,t,r){var n=r.d,i=r.d2,o=r.a;return(o=y(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?je["inner"+i]:e["client"+i])||0}}(ve,be,ge),ke=function _getOffsetsFunc(e,t){return!t||~Le.indexOf(e)?Ca(e):function(){return Bt}}(ve,be),Me=0,Ae=0,Ce=J(ve,ge);if(Se.media=lt,Se._dir=ge,se*=45,Se.scroller=ve,Se.scroll=fe?fe.time.bind(fe):Ce,M=Ce(),Se.vars=_,T=T||_.animation,"refreshPriority"in _&&(ot=1,-9999===_.refreshPriority&&(ut=Se)),c.tweenScroll=c.tweenScroll||{top:gc(ve,Ne),left:gc(ve,Re)},Se.tweenTo=k=c.tweenScroll[ge.p],Se.scrubDuration=function(e){(i=Ja(e)&&e)?W?W.duration(e):W=We.to(T,{ease:"expo",totalProgress:"+=0.001",duration:i,paused:!0,onComplete:function onComplete(){return s&&s(Se)}}):(W&&W.progress(1).kill(),W=0)},T&&(T.vars.lazy=!1,T._initted||!1!==T.vars.immediateRender&&!1!==_.immediateRender&&T.render(0,!0,!0),Se.animation=T.pause(),(T.scrollTrigger=Se).scrubDuration(re),S=0,a=a||T.vars.id),Ot.push(Se),ce&&(Ka(ce)&&!ce.push||(ce={snapTo:ce}),"scrollBehavior"in Ge.style&&We.set(be?[Ge,qe]:ve,{scrollBehavior:"auto"}),p=Ia(ce.snapTo)?ce.snapTo:"labels"===ce.snapTo?function _getClosestLabel(t){return function(e){return We.utils.snap(ib(t),e)}}(T):"labelsDirectional"===ce.snapTo?function _getLabelAtDirection(r){return function(e,t){return kb(ib(r))(e,t.direction)}}(T):!1!==ce.directional?function(e,t){return kb(ce.snapTo)(e,dt()-Ae<500?0:t.direction)}:We.utils.snap(ce.snapTo),g=ce.duration||{min:.1,max:2},g=Ka(g)?et(g.min,g.max):et(g,g),j=We.delayedCall(ce.delay||i/2||.1,function(){var e=Ce(),t=dt()-Ae<500,r=k.tween;if(!(t||Math.abs(Se.getVelocity())<10)||r||nt||Me===e)Se.isActive&&Me!==e&&j.restart(!0);else{var n=(e-C)/z,i=T&&!he?T.totalProgress():n,o=t?0:(i-V)/(dt()-tt)*1e3||0,a=We.utils.clamp(-n,1-n,ht(o/2)*o/.185),s=n+(!1===ce.inertia?0:a),l=et(0,1,p(s,Se)),c=Math.round(C+l*z),u=ce.onStart,f=ce.onInterrupt,d=ce.onComplete;if(e<=O&&C<=e&&c!==e){if(r&&!r._initted&&r.data<=ht(c-e))return;!1===ce.inertia&&(a=l-n),k(c,{duration:g(ht(.185*Math.max(ht(s-i),ht(l-i))/o/.05||0)),ease:ce.ease||"power3",data:ht(c-e),onInterrupt:function onInterrupt(){return j.restart(!0)&&f&&f(Se)},onComplete:function onComplete(){Se.update(),Me=Ce(),S=V=T&&!he?T.totalProgress():Se.progress,h&&h(Se),d&&d(Se)}},e,a*z,c-e-a*z),u&&u(Se,k.tween)}}}).pause()),a&&(Pt[a]=Se),o=(o=(ne=Se.trigger=I(ne||ie))&&ne._gsap&&ne._gsap.stRevert)&&o(Se),ie=!0===ie?ne:I(ie),Ha($)&&($={targets:ne,className:$}),ie&&(!1===oe||oe===_t||(oe=!(!oe&&"flex"===db(ie.parentNode).display)&&St),Se.pin=ie,!1!==_.force3D&&We.set(ie,{force3D:!0}),(n=We.core.getCache(ie)).spacer?Y=n.pinState:(l&&((l=I(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=ac(l))),n.spacer=L=l||Je.createElement("div"),L.classList.add("pin-spacer"),a&&L.classList.add("pin-spacer-"+a),n.pinState=Y=ac(ie)),Se.spacer=L=n.spacer,r=db(ie),m=r[oe+ge.os2],H=We.getProperty(ie),b=We.quickSetter(ie,ge.a,kt),Zb(ie,L,r),F=ac(ie)),u){e=Ka(u)?fb(u,At):At,B=ub("scroller-start",a,ve,ge,e,0),D=ub("scroller-end",a,ve,ge,e,0,B),t=B["offset"+ge.op.d2];var f=I(y(ve,"content")||ve);P=this.markerStart=ub("start",a,f,ge,e,t,0,fe),E=this.markerEnd=ub("end",a,f,ge,e,t,0,fe),fe&&(K=We.quickSetter([P,E],ge.a,kt)),me||Le.length&&!0===y(ve,"fixedMarkers")||(function _makePositionable(e){var t=db(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(be?Ge:ve),We.set([B,D],{force3D:!0}),x=We.quickSetter(B,ge.a,kt),w=We.quickSetter(D,ge.a,kt))}if(fe){var d=fe.vars.onUpdate,v=fe.vars.onUpdateParams;fe.eventCallback("onUpdate",function(){Se.update(0,0,1),d&&d.apply(v||[])})}Se.previous=function(){return Ot[Ot.indexOf(Se)-1]},Se.next=function(){return Ot[Ot.indexOf(Se)+1]},Se.revert=function(e){var t=!1!==e||!Se.enabled,r=rt;t!==Se.isReverted&&(t&&(!Se.scroll.rec&&rt&&ct&&(Se.scroll.rec=Ce()),q=Math.max(Ce(),Se.scroll.rec||0),Q=Se.progress,G=T&&T.progress()),P&&[P,E,B,D].forEach(function(e){return e.style.display=t?"none":"block"}),t&&(rt=1),Se.update(t),rt=r,ie&&(t?function _swapPinOut(e,t,r){It(r);var n=e._gsap;if(n.spacerIsNative)It(n.spacerState);else if(e.parentNode===t){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}}(ie,L,Y):ue&&Se.isActive||Zb(ie,L,db(ie),U)),Se.isReverted=t)},Se.refresh=function(e,t){if(!rt&&Se.enabled||t)if(ie&&e&&pt)nb(ScrollTrigger,"scrollEnd",Jb);else{!ct&&_e&&_e(Se),rt=1,Ae=dt(),k.tween&&(k.tween.kill(),k.tween=0),W&&W.pause(),ae&&T&&T.time(-.01,!0).invalidate(),Se.isReverted||Se.revert();for(var r,n,i,o,a,s,l,c,u,f,d=Te(),p=ke(),g=fe?fe.duration():Fa(ve,ge),h=0,v=0,b=_.end,m=_.endTrigger||ne,y=_.start||(0!==_.start&&ne?ie?"0 0":"0 100%":0),x=Se.pinnedContainer=_.pinnedContainer&&I(_.pinnedContainer),w=ne&&Math.max(0,Ot.indexOf(Se))||0,S=w;S--;)(s=Ot[S]).end||s.refresh(0,1)||(rt=1),!(l=s.pin)||l!==ne&&l!==ie||s.isReverted||((f=f||[]).unshift(s),s.revert()),s!==Ot[S]&&(w--,S--);for(Ia(y)&&(y=y(Se)),C=dc(y,ne,d,ge,Ce(),P,B,Se,p,we,me,g,fe)||(ie?-.001:0),Ia(b)&&(b=b(Se)),Ha(b)&&!b.indexOf("+=")&&(~b.indexOf(" ")?b=(Ha(y)?y.split(" ")[0]:"")+b:(h=tb(b.substr(2),d),b=Ha(y)?y:C+h,m=ne)),O=Math.max(C,dc(b||(m?"100% 0":g),m,d,ge,Ce()+h,E,D,Se,p,we,me,g,fe))||-.001,z=O-C||(C-=.01)&&.001,h=0,S=w;S--;)(l=(s=Ot[S]).pin)&&s.start-s._pinPush<C&&!fe&&0<s.end&&(r=s.end-s.start,l!==ne&&l!==x||Ja(y)||(h+=r*(1-s.progress)),l===ie&&(v+=r));if(C+=h,O+=h,Se._pinPush=v,P&&h&&((r={})[ge.a]="+="+h,x&&(r[ge.p]="-="+Ce()),We.set([P,E],r)),ie)r=db(ie),o=ge===Ne,i=Ce(),R=parseFloat(H(ge.a))+v,!g&&1<O&&((be?Ge:ve).style["overflow-"+ge.a]="scroll"),Zb(ie,L,r),F=ac(ie),n=Mt(ie,!0),c=me&&J(ve,o?Re:Ne)(),oe&&((U=[oe+ge.os2,z+v+kt]).t=L,(S=oe===St?hb(ie,ge)+z+v:0)&&U.push(ge.d,S+kt),It(U),me&&Ce(q)),me&&((a={top:n.top+(o?i-C:c)+kt,left:n.left+(o?c:i-C)+kt,boxSizing:"border-box",position:"fixed"})[vt]=a.maxWidth=Math.ceil(n.width)+kt,a[bt]=a.maxHeight=Math.ceil(n.height)+kt,a[_t]=a[_t+xt]=a[_t+mt]=a[_t+wt]=a[_t+yt]="0",a[St]=r[St],a[St+xt]=r[St+xt],a[St+mt]=r[St+mt],a[St+wt]=r[St+wt],a[St+yt]=r[St+yt],X=function _copyState(e,t,r){for(var n,i=[],o=e.length,a=r?8:0;a<o;a+=2)n=e[a],i.push(n,n in t?t[n]:e[a+1]);return i.t=e.t,i}(Y,a,ue)),T?(u=T._initted,at(1),T.render(T.duration(),!0,!0),N=H(ge.a)-R+z+v,z!==N&&me&&X.splice(X.length-2,2),T.render(0,!0,!0),u||T.invalidate(),at(0)):N=z;else if(ne&&Ce()&&!fe)for(n=ne.parentNode;n&&n!==Ge;)n._pinOffset&&(C-=n._pinOffset,O-=n._pinOffset),n=n.parentNode;f&&f.forEach(function(e){return e.revert(!1)}),Se.start=C,Se.end=O,M=A=Ce(),fe||(M<q&&Ce(q),Se.scroll.rec=0),Se.revert(!1),j&&(Me=-1,Se.isActive&&Ce(C+z*Q),j.restart(!0)),rt=0,T&&he&&(T._initted||G)&&T.progress()!==G&&T.progress(G,!0).render(T.time(),!0,!0),Q===Se.progress&&!fe||(T&&!he&&T.totalProgress(Q,!0),Se.progress=Q,Se.update(0,0,1)),ie&&oe&&(L._pinOffset=Math.round(Se.progress*N)),te&&te(Se)}},Se.getVelocity=function(){return(Ce()-A)/(dt()-tt)*1e3||0},Se.endAnimation=function(){Na(Se.callbackAnimation),T&&(W?W.progress(1):T.paused()?he||Na(T,Se.direction<0,1):Na(T,T.reversed()))},Se.labelToScroll=function(e){return T&&T.labels&&(C||Se.refresh()||C)+T.labels[e]/T.duration()*z||0},Se.getTrailing=function(t){var e=Ot.indexOf(Se),r=0<Se.direction?Ot.slice(0,e).reverse():Ot.slice(e+1);return(Ha(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<Se.direction?e.end<=C:e.start>=O})},Se.update=function(e,t,r){if(!fe||r||e){var n,i,o,a,s,l,c,u=Se.scroll(),f=e?0:(u-C)/z,d=f<0?0:1<f?1:f||0,p=Se.progress;if(t&&(A=M,M=fe?Ce():u,ce&&(V=S,S=T&&!he?T.totalProgress():d)),se&&!d&&ie&&!rt&&!ft&&pt&&C<u+(u-A)/(dt()-tt)*se&&(d=1e-4),d!==p&&Se.enabled){if(a=(s=(n=Se.isActive=!!d&&d<1)!=(!!p&&p<1))||!!d!=!!p,Se.direction=p<d?1:-1,Se.progress=d,a&&!rt&&(i=d&&!p?0:1===d?1:1===p?2:3,he&&(o=!s&&"none"!==xe[i+1]&&xe[i+1]||xe[i],c=T&&("complete"===o||"reset"===o||o in T))),pe&&(s||c)&&(c||re||!T)&&(Ia(pe)?pe(Se):Se.getTrailing(pe).forEach(function(e){return e.endAnimation()})),he||(!W||rt||ft?T&&T.totalProgress(d,!!rt):((fe||ut&&ut!==Se)&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",d,T._tTime/T._tDur):(W.vars.totalProgress=d,W.invalidate().restart()))),ie)if(e&&oe&&(L.style[oe+ge.os2]=m),me){if(a){if(l=!e&&p<d&&u<O+1&&u+1>=Fa(ve,ge),ue)if(e||!n&&!l)fc(ie,L);else{var g=Mt(ie,!0),h=u-C;fc(ie,Ge,g.top+(ge===Ne?h:0)+kt,g.left+(ge===Ne?0:h)+kt)}It(n||l?X:F),N!==z&&d<1&&n||b(R+(1!==d||l?0:N))}}else b(ya(R+N*d));!ce||k.tween||rt||ft||j.restart(!0),$&&(s||le&&d&&(d<1||!st))&&Ke($.targets).forEach(function(e){return e.classList[n||le?"add":"remove"]($.className)}),!Z||he||e||Z(Se),a&&!rt?(he&&(c&&("complete"===o?T.pause().totalProgress(1):"reset"===o?T.restart(!0).pause():"restart"===o?T.restart(!0):T[o]()),Z&&Z(Se)),!s&&st||(ee&&s&&Oa(Se,ee),ye[i]&&Oa(Se,ye[i]),le&&(1===d?Se.kill(!1,1):ye[i]=0),s||ye[i=1===d?1:3]&&Oa(Se,ye[i])),de&&!n&&Math.abs(Se.getVelocity())>(Ja(de)?de:2500)&&(Na(Se.callbackAnimation),W?W.progress(1):Na(T,!d,1))):he&&Z&&!rt&&Z(Se)}if(w){var v=fe?u/fe.duration()*(fe._caScrollDist||0):u;x(v+(B._isFlipped?1:0)),w(v)}K&&K(-u/fe.duration()*(fe._caScrollDist||0))}},Se.enable=function(e,t){Se.enabled||(Se.enabled=!0,nb(ve,"resize",Cb),nb(be?Je:ve,"scroll",Ab),_e&&nb(ScrollTrigger,"refreshInit",_e),!1!==e&&(Se.progress=Q=0,M=A=Me=Ce()),!1!==t&&Se.refresh())},Se.getTween=function(e){return e&&k?k.tween:W},Se.setPositions=function(e,t){ie&&(R+=e-C,N+=t-e-z),Se.start=C=e,Se.end=O=t,z=t-e,Se.update()},Se.disable=function(e,t){if(Se.enabled&&(!1!==e&&Se.revert(),Se.enabled=Se.isActive=!1,t||W&&W.pause(),q=0,n&&(n.uncache=1),_e&&ob(ScrollTrigger,"refreshInit",_e),j&&(j.pause(),k.tween&&k.tween.kill()&&(k.tween=0)),!be)){for(var r=Ot.length;r--;)if(Ot[r].scroller===ve&&Ot[r]!==Se)return;ob(ve,"resize",Cb),ob(ve,"scroll",Ab)}},Se.kill=function(e,t){Se.disable(e,t),W&&!t&&W.kill(),a&&delete Pt[a];var r=Ot.indexOf(Se);0<=r&&Ot.splice(r,1),r===it&&0<Et&&it--,r=0,Ot.forEach(function(e){return e.scroller===Se.scroller&&(r=1)}),r||(Se.scroll.rec=0),T&&(T.scrollTrigger=null,e&&T.render(-1),t||T.kill()),P&&[P,E,B,D].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ut===Se&&(ut=0),ie&&(n&&(n.uncache=1),r=0,Ot.forEach(function(e){return e.pin===ie&&r++}),r||(n.spacer=0)),_.onKill&&_.onKill(Se)},Se.enable(!1,!1),o&&o(Se),T&&T.add&&!z?We.delayedCall(.01,function(){return C||O||Se.refresh()})&&(z=.01)&&(C=O=0):Se.refresh()}else this.update=this.refresh=this.kill=xa},ScrollTrigger.register=function register(e){return a||(We=e||Aa(),za()&&window.document&&ScrollTrigger.enable(),a=gt),a},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Ct[t]=e[t];return Ct},ScrollTrigger.disable=function disable(t,r){gt=0,Ot.forEach(function(e){return e[r?"kill":"disable"](t)}),ob(je,"wheel",Ab),ob(Je,"scroll",Ab),clearInterval(c),ob(Je,"touchcancel",xa),ob(Ge,"touchstart",xa),mb(ob,Je,"pointerdown,touchstart,mousedown",va),mb(ob,Je,"pointerup,touchend,mouseup",wa),l.kill(),Ga(ob);for(var e=0;e<T.length;e+=3)pb(ob,T[e],T[e+1]),pb(ob,T[e],T[e+2])},ScrollTrigger.enable=function enable(){if(je=window,Je=document,qe=Je.documentElement,Ge=Je.body,We&&(Ke=We.utils.toArray,et=We.utils.clamp,at=We.core.suppressOverwrites||xa,We.core.globals("ScrollTrigger",ScrollTrigger),Ge)){gt=1,k.register(We),ScrollTrigger.isTouch=k.isTouch,C=k.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nb(je,"wheel",Ab),s=[je,Je,qe,Ge],ScrollTrigger.matchMedia({"(orientation: portrait)":function orientationPortrait(){return Bb(),Bb}}),nb(Je,"scroll",Ab);var e,t,r=Ge.style,n=r.borderTopStyle;for(r.borderTopStyle="solid",e=Mt(Ge),Ne.m=Math.round(e.top+Ne.sc())||0,Re.m=Math.round(e.left+Re.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),c=setInterval(zb,250),We.delayedCall(.5,function(){return ft=0}),nb(Je,"touchcancel",xa),nb(Ge,"touchstart",xa),mb(nb,Je,"pointerdown,touchstart,mousedown",va),mb(nb,Je,"pointerup,touchend,mouseup",wa),u=We.utils.checkPrefix("transform"),re.push(u),a=dt(),l=We.delayedCall(.2,Z).pause(),p=[Je,"visibilitychange",function(){var e=je.innerWidth,t=je.innerHeight;Je.hidden?(f=e,d=t):f===e&&d===t||Cb()},Je,"DOMContentLoaded",Z,je,"load",Z,je,"resize",Cb],Ga(nb),Ot.forEach(function(e){return e.enable(0,1)}),t=0;t<T.length;t+=3)pb(ob,T[t],T[t+1]),pb(ob,T[t],T[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(st=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(zb,t),"ignoreMobileResize"in e&&(v=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ga(ob)||Ga(nb,e.autoRefreshEvents||"none"),g=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=I(e),n=T.indexOf(r),i=Ba(r);~n&&T.splice(n,i?6:2),t&&(i?Le.unshift(je,t,Ge,t,qe,t):Le.unshift(r,t))},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,i,o;for(r in e)n=U.indexOf(r),i=e[r],"all"===(lt=r)?i():(t=je.matchMedia(r))&&(t.matches&&(o=i()),~n?(U[n+1]=Ma(U[n+1],i),U[n+2]=Ma(U[n+2],o)):(n=U.length,U.push(r,i,o),t.addListener?t.addListener(Ib):t.addEventListener("change",Ib)),U[n+3]=t.matches),lt=0;return U},ScrollTrigger.clearMatchMedia=function clearMatchMedia(e){e||(U.length=0),0<=(e=U.indexOf(e))&&U.splice(e,4)},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(Ha(e)?I(e):e).getBoundingClientRect(),i=n[r?vt:bt]*t||0;return r?0<n.right-i&&n.left+i<je.innerWidth:0<n.bottom-i&&n.top+i<je.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){Ha(e)&&(e=I(e));var n=e.getBoundingClientRect(),i=n[r?vt:bt],o=null==t?i/2:t in Y?Y[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0;return r?(n.left+o)/je.innerWidth:(n.top+o)/je.innerHeight},ScrollTrigger);function ScrollTrigger(e,t){a||ScrollTrigger.register(We)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}oe.version="3.10.4",oe.saveStyles=function(e){return e?Ke(e).forEach(function(e){if(e&&e.style){var t=W.indexOf(e);0<=t&&W.splice(t,5),W.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),We.core.getCache(e),lt)}}):W},oe.revert=function(e,t){return Q(!e,t)},oe.create=function(e,t){return new oe(e,t)},oe.refresh=function(e){return e?Cb():(a||oe.register())&&Z(!0)},oe.update=ee,oe.clearScrollMemory=Ob,oe.maxScroll=function(e,t){return Fa(e,t?Re:Ne)},oe.getScrollFunc=function(e,t){return J(I(e),t?Re:Ne)},oe.getById=function(e){return Pt[e]},oe.getAll=function(){return Ot.filter(function(e){return"ScrollSmoother"!==e.vars.id})},oe.isScrolling=function(){return!!pt},oe.snapDirectional=kb,oe.addEventListener=function(e,t){var r=H[e]||(H[e]=[]);~r.indexOf(t)||r.push(t)},oe.removeEventListener=function(e,t){var r=H[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},oe.batch=function(e,t){function to(e,t){var r=[],n=[],i=We.delayedCall(o,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||i.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&i.progress(1)}}var r,n=[],i={},o=t.interval||.016,a=t.batchMax||1e9;for(r in t)i[r]="on"===r.substr(0,2)&&Ia(t[r])&&"onRefreshInit"!==r?to(0,t[r]):t[r];return Ia(a)&&(a=a(),nb(oe,"refresh",function(){return a=t.batchMax()})),Ke(e).forEach(function(e){var t={};for(r in i)t[r]=i[r];t.trigger=e,n.push(oe.create(t))}),n};function ic(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function jc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(k.isTouch?" pinch-zoom":""):"none",e===qe&&jc(Ge,t)}function lc(e){var t,r=e.event,n=e.target,i=e.axis,o=(r.changedTouches?r.changedTouches[0]:r).target,a=o._gsap||We.core.getCache(o),s=dt();if(!a._isScrollT||2e3<s-a._isScrollT){for(;o&&o.scrollHeight<=o.clientHeight;)o=o.parentNode;a._isScroll=o&&!Ba(o)&&o!==n&&(se[(t=db(o)).overflowY]||se[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==i||(r._gsapAllow=!0)}function mc(e,t,r,n){return k.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&lc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&nb(Je,k.eventTypes[0],ce,!1,!0)},onDisable:function onDisable(){return ob(Je,k.eventTypes[0],ce,!0)}})}function qc(e){function op(){return n=!1}function rp(){o=Fa(d,Ne),_=et(C?1:0,o),f&&(S=et(0,Fa(d,Re))),a=G}function xp(){rp(),s.isActive()&&s.vars.scrollY>o&&(h()>o?s.progress(1)&&h(o):s.resetTo("scrollY",o))}Ka(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r,o,n,a,s,l,c,u,f=e.normalizeScrollX,t=e.momentum,i=e.allowNestedScroll,d=I(e.target)||qe,p=We.core.globals().ScrollSmoother,g=C&&(e.content&&I(e.content)||p&&p.get()&&p.get().content()),h=J(d,Ne),v=J(d,Re),b=1,m=(k.isTouch&&je.visualViewport?je.visualViewport.scale*je.visualViewport.width:je.outerWidth)/je.innerWidth,y=0,x=Ia(t)?function(){return t(r)}:function(){return t||2.8},w=mc(d,e.type,!0,i),S=xa,_=xa;return e.ignoreCheck=function(e){return C&&"touchmove"===e.type&&function ignoreDrag(){if(n){requestAnimationFrame(op);var e=ya(r.deltaY/2),t=_(h.v-e);return g&&t!==h.v+h.offset&&(h.offset=t-h.v,g.style.transform="translateY("+-h.offset+"px)",g._gsap&&(g._gsap.y=-h.offset+"px"),h.cacheID=T.cache,ee()),!0}g&&(g.style.transform="translateY(0px)",h.offset=h.cacheID=0,g._gsap&&(g._gsap.y="0px")),n=!0}()||1.05<b&&"touchstart"!==e.type||r.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){var e=b;b=ya((je.visualViewport&&je.visualViewport.scale||1)/m),s.pause(),e!==b&&jc(d,1.01<b||!f&&"x"),n=!1,l=v(),c=h(),rp(),a=G},e.onRelease=e.onGestureStart=function(e,t){if(g&&(g.style.transform="translateY(0px)",h.offset=h.cacheID=0,g._gsap&&(g._gsap.y="0px")),t){T.cache++;var r,n,i=x();f&&(n=(r=v())+.05*i*-e.velocityX/.227,i*=ic(v,r,n,Fa(d,Re)),s.vars.scrollX=S(n)),n=(r=h())+.05*i*-e.velocityY/.227,i*=ic(h,r,n,Fa(d,Ne)),s.vars.scrollY=_(n),s.invalidate().duration(i).play(.01),(C&&s.vars.scrollY>=o||o-1<=r)&&We.to({},{onUpdate:xp,duration:i})}else u.restart(!0)},e.onWheel=function(){s._ts&&s.pause(),1e3<dt()-y&&(a=0,y=dt())},e.onChange=function(e,t,r,n,i){G!==a&&rp(),t&&f&&v(S(n[2]===t?l+(e.startX-e.x):v()+t-n[1])),r&&h(_(i[2]===r?c+(e.startY-e.y):h()+r-i[1])),ee()},e.onEnable=function(){jc(d,!f&&"x"),nb(je,"resize",xp),w.enable()},e.onDisable=function(){jc(d,!0),ob(je,"resize",xp),w.kill()},((r=new k(e)).iOS=C)&&!h()&&h(1),u=r._dc,s=We.to(r,{ease:"power4",paused:!0,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:u.vars.onComplete}),r}var ae,se={auto:1,scroll:1},le=/(input|label|select|textarea)/i,ce=function _captureInputs(e){var t=le.test(e.target.tagName);(t||ae)&&(e._gsapAllow=!0,ae=t)};oe.sort=function(e){return Ot.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},oe.observe=function(e){return new k(e)},oe.normalizeScroll=function(e){if(void 0===e)return h;if(!0===e&&h)return h.enable();if(!1===e)return h&&h.kill();var t=e instanceof k?e:qc(e);return h&&h.target===t.target&&h.kill(),Ba(t.target)&&(h=t),t},oe.core={_getVelocityProp:K,_inputObserver:mc,_scrollers:T,_proxies:Le,bridge:{ss:function ss(){pt||V("scrollStart"),pt=dt()},ref:function ref(){return rt}}},Aa()&&We.registerPlugin(oe),e.ScrollTrigger=oe,e.default=oe;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

 d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/shopping/">
                                                                                                                <span class="d-block pb-2">Shopping</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/finance/">
                                                                                                                <span class="d-block pb-2">Finance</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/food-drink/">
                                                                                                                <span class="d-block pb-2">Food & drink</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/entertainment-music/">
                                                                                                                <span class="d-block pb-2">Entertainment & music</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/health-fitness/">
                                                                                                                <span class="d-block pb-2">Health & fitness</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/travel/">
                                                                                                                <span class="d-block pb-2">Travel</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                            </ul>
                            </div>
                    <div class="mega-menu__col mega-menu__col--layout-2 col-sm flex-column pt-md-55 pb-md-40 order-0 order-md-1 ">
                                    <span class="navbar-nav__title d-none d-md-block pt-0 pb-3">
                        Platform                    </span>
                                                    <ul itemscope itemtype="https://schema.org/SiteNavigationElement" role="menu"
                        class="navbar-nav list-style-none flex-column">
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/ios/">
                                                                                                                <span class="d-block pb-2">iOS</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/android/">
                                                                                                                <span class="d-block pb-2">Android</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/pc-console-measurement/">
                                                                                                                <span class="d-block pb-2">PC & console</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/ctv-ott/">
                                                                                                                <span class="d-block pb-2">CTV & OTT</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/web-measurement/">
                                                                                                                <span class="d-block pb-2">Web</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/mobile-measurement/">
                                                                                                                <span class="d-block pb-2">Mobile</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/web3/">
                                                                                                                <span class="d-block pb-2">Web3</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                            </ul>
                            </div>
                    <div class="mega-menu__col mega-menu__col--layout-2 col-sm flex-column pt-md-55 pb-md-40 order-0 order-md-1 ">
                                    <span class="navbar-nav__title d-none d-md-block pt-0 pb-3">
                        Partnerships                    </span>
                                                    <ul itemscope itemtype="https://schema.org/SiteNavigationElement" role="menu"
                        class="navbar-nav list-style-none flex-column">
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/partners/">
                                                                                                                <span class="d-block pb-2">Partners</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/solutions/agencies/">
                                                                                                                <span class="d-block pb-2">Agencies</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                            </ul>
                            </div>
            </div>
                        <div class="row mx-0 d-md-flex w-100 ml-md-0 theme-borders--sm theme-borders--top theme-borders--color-1">
        <ul data-parent-id="solutions"
            class="mega-menu__col--main-links flex-column flex-md-row col align-items-md-center list-style-none d-flex order-1 order-sm-0 ml-md-0 px-0 pt-md-20 pb-25">
                            <li class="pr-sm-40">
                    <a class="btn-arrow d-inline-block" href="https://www.appsflyer.com/customers/"
                       data-aft="internal-link" data-aft-block="main-nav"
                       id=""
                       target="_self">
                        Customer stories                    </a>
                </li>
                            <li class="pr-sm-40">
                    <a class="btn-arrow d-inline-block" href="https://www.appsflyer.com/appsflyer-advantage/"
                       data-aft="internal-link" data-aft-block="main-nav"
                       id=""
                       target="_self">
                        The AppsFlyer difference                    </a>
                </li>
                    </ul>
    </div>

                            </div>
                    </div>
    </nav>
    </li>
<li itemprop="name" role="menuitem"  id="menu-item-15" class="mega-parent menu-item menu-item-type-custom menu-item-object-custom  mega-parent menu-item-15 nav-item"><a itemprop="url" title="Why AppsFlyer" itemprop="url" rel="why-appsflyer" itemprop="url" id="1" itemprop="url" href="#" itemprop="url" class="nav-link">Why AppsFlyer</a>    <nav class="mega-menu flex-column fixed-top pb-20 pb-md-0 px-20" data-mega-nav-id="">
        <div class="container-fluid pl-40 pl-md-20 ml-md-auto pt-sm-20 pt-md-0 px-md-0 align-items-stretch d-md-block">
            <div class="row mx-0">
                            </div>
                    </div>
    </nav>
    </li>
<li itemprop="name" role="menuitem"  id="menu-item-16" class="menu-item menu-item-type-custom menu-item-object-custom  mega-parent menu-item-16 nav-item"><a itemprop="url" title="Learn" itemprop="url" id="1" itemprop="url" href="#" itemprop="url" class="nav-link">Learn</a>    <nav class="mega-menu flex-column fixed-top pb-20 pb-md-0 px-20" data-mega-nav-id="resources">
        <div class="container-fluid pl-40 pl-md-20 ml-md-auto pt-sm-20 pt-md-0 px-md-0 align-items-stretch d-md-block">
            <div class="row mx-0">
                                    <div class="mega-menu__col mega-menu__col--layout-1 mega-menu__col--main col-md-3 d-none d-md-flex flex-column px-0 pl-sm-0 pt-20 pt-sm-50 pb-0 pb-sm-40 pr-40">
    <span class="h4 mb-3 d-none d-sm-block">
        Resources    </span>
    <p>Stay informed with industry insights, the latest trends, original content, and all things AppsFlyer</p>
</div>                        <div class="mega-menu__cols mega-menu__cols--columns mega-menu__cols--layout-1 row w-100 flex-column flex-md-row justify-content-md-between pl-0 pt-30 pt-sm-0 col pl-md-70 pr-md-80">
                    <div class="mega-menu__col mega-menu__col--layout-1 col-sm flex-column pt-md-55 pb-md-40 order-0 order-md-1 pl-md-30">
                                    <span class="navbar-nav__title d-none d-md-block pt-0 pb-3">
                        Ecosystem                    </span>
                                                    <ul itemscope itemtype="https://schema.org/SiteNavigationElement" role="menu"
                        class="navbar-nav list-style-none flex-column">
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/blog/">
                                                                                                                <span class="d-block pb-2">Blog</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/resources/">
                                                                                                                <span class="d-block pb-2">Reports & guides</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/resources/templates/">
                                                                                                                <span class="d-block pb-2">Tools & templates</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_blank" title="" id=""
                                   href="https://www.appsflyer.com/benchmarks/">
                                                                                                                <span class="d-block pb-2">Industry benchmarks<span class="d-inline d-sm-none tag-new">NEW!</span></span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/events/">
                                                                                                                <span class="d-block pb-2">Events & webinars</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/blog/videos/">
                                                                                                                <span class="d-block pb-2">Videos</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/blog/podcasts/">
                                                                                                                <span class="d-block pb-2">Podcasts</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/glossary/">
                                                                                                                <span class="d-block pb-2">Glossary</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                            </ul>
                            </div>
                    <div class="mega-menu__col mega-menu__col--layout-1 col-sm flex-column pt-md-55 pb-md-40 order-0 order-md-1 pl-md-30">
                                    <span class="navbar-nav__title d-none d-md-block pt-0 pb-3">
                        Customers                    </span>
                                                    <ul itemscope itemtype="https://schema.org/SiteNavigationElement" role="menu"
                        class="navbar-nav list-style-none flex-column">
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/product-news/">
                                                                                                                <span class="d-block pb-2">Product news</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_blank" title="" id=""
                                   href="https://support.appsflyer.com/hc/en-us">
                                                                                                                <span class="d-block pb-2">Help center</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/use-cases/">
                                                                                                                <span class="d-block pb-2">Use cases</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_blank" title="" id=""
                                   href="https://dev.appsflyer.com/">
                                                                                                                <span class="d-block pb-2">Developer Hub</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                            </ul>
                            </div>
            </div>
                        <div class="mega-menu__col mega-menu__col--featured theme-borders--md theme-borders--color-1 theme-borders--left col-md-3 d-md-flex flex-column pt-md-55 pl-0 pl-md-50 pr-0 pb-md-40 order-0 order-md-1 ">
                    <div class="d-none d-sm-block">
    <strong class="navbar-nav__title pb-4 d-block">Introducing: AppsFlyer for games marketing hub</strong>
    <a href="https://www.appsflyer.com/hubs/gaming/">
        <img src="https://www.appsflyer.com/wp-content/uploads/2023/07/gaming-learn.png" loading="lazy" width="266px" height="145px" /></a>
    <div class="d-block">
        <a href="https://www.appsflyer.com/hubs/gaming/" class="btn btn-arrow d-inline-block">
Explore the hub
        </a>
    </div>
</div>            </div>
                            </div>
            
        </div>
    </nav>
    </li>
<li itemprop="name" role="menuitem"  id="menu-item-17" class="menu-item menu-item-type-custom menu-item-object-custom  mega-parent menu-item-17 nav-item"><a itemprop="url" title="Company" itemprop="url" id="1" itemprop="url" href="#" itemprop="url" class="nav-link">Company</a>    <nav class="mega-menu flex-column fixed-top pb-20 pb-md-0 px-20" data-mega-nav-id="about-us">
        <div class="container-fluid pl-40 pl-md-20 ml-md-auto pt-sm-20 pt-md-0 px-md-0 align-items-stretch d-md-block">
            <div class="row mx-0">
                                    <div class="mega-menu__col mega-menu__col--layout-1 mega-menu__col--main col-md-3 d-none d-md-flex flex-column px-0 pl-sm-0 pt-20 pt-sm-50 pb-0 pb-sm-40 pr-40">
    <span class="h4 mb-3 d-none d-sm-block">
        Who we are    </span>
    <p>Find out more about our history, our team, what we stand for, and why we do what we do</p>
</div>                        <div class="mega-menu__cols mega-menu__cols--columns mega-menu__cols--layout-1 row w-100 flex-column flex-md-row justify-content-md-between pl-0 pt-30 pt-sm-0 col pl-md-70 pr-md-80">
                    <div class="mega-menu__col mega-menu__col--layout-1 col-sm flex-column pt-md-55 pb-md-40 order-0 order-md-1 pl-md-30">
                                                    <ul itemscope itemtype="https://schema.org/SiteNavigationElement" role="menu"
                        class="navbar-nav list-style-none flex-column">
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/company/about/">
                                                                                                                <span class="d-block pb-2">About us</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/company/newsroom/">
                                                                                                                <span class="d-block pb-2">Newsroom</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/blog/ceo/">
                                                                                                                <span class="d-block pb-2">CEO blog spot</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/trust/">
                                                                                                                <span class="d-block pb-2">Trust hub</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                            </ul>
                            </div>
                    <div class="mega-menu__col mega-menu__col--layout-1 col-sm flex-column pt-md-55 pb-md-40 order-0 order-md-1 pl-md-30">
                                                    <ul itemscope itemtype="https://schema.org/SiteNavigationElement" role="menu"
                        class="navbar-nav list-style-none flex-column">
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://careers.appsflyer.com/">
                                                                                                                <span class="d-block pb-2">Careers</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/company/social-impact/">
                                                                                                                <span class="d-block pb-2">Social impact</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                                                                <li itemprop="name" role="menuitem" class="py-4 py-md-2">
                                <a itemprop="url" data-aft="internal-link" data-aft-block="main-nav" target="_self" title="" id=""
                                   href="https://www.appsflyer.com/company/contact/">
                                                                                                                <span class="d-block pb-2">Contact</span>
                                                                        <span class="d-none d-md-block navbar-nav__item-text">
                                                                            </span>
                                </a>
                            </li>
                                            </ul>
                            </div>
            </div>
                        <div class="mega-menu__col mega-menu__col--featured theme-borders--md theme-borders--color-1 theme-borders--left col-md-3 d-md-flex flex-column pt-md-55 pl-0 pl-md-50 pr-0 pb-md-40 order-0 order-md-1 ">
                                    <a href="https://www.appsflyer.com/blog/ceo/" class="navbar-nav__title d-none d-sm-block pb-2" data-aft="internal-link" data-aft-block="main-nav">From our CEO</a>
                        <div>
                                    <li class="py-4 py-md-2">
                        <a class="" data-aft="internal-link" data-aft-block="main-nav" href="https://www.appsflyer.com/blog/ceo/unbiased-independent-ecosystem-future/" target="_self">
                            The future of our ecosystem and web                        </a>
                    </li>
                                    <li class="py-4 py-md-2">
                        <a class="" data-aft="internal-link" data-aft-block="main-nav" href="https://www.appsflyer.com/blog/ceo/user-privacy-ios-14-idfa/" target="_self">
                            On privacy and user experience                        </a>
                    </li>
                                    <li class="py-4 py-md-2">
                        <a class="" data-aft="internal-link" data-aft-block="main-nav" href="https://www.appsflyer.com/blog/ceo/aggregated-advanced-privacy/" target="_self">
                            Aggregated advanced privacy                        </a>
                    </li>
                            </div>
            </div>
                            </div>
            
        </div>
    </nav>
    </li>
</ul>            <div class="secondary-nav mb-60 mb-md-0 my-md-0 d-flex flex-column flex-md-row align-items-md-center">
                <ul class="navbar-nav lang-switcher list-style-none">
    <li class="has-children mega-parent">
        <span class="nav-link">
            <i class="icon-globe"></i>
            English        </span>
        <ul class="sub-menu list-style-none">
                                    <li class="px-30" data-in-array="1">
                <a data-aft="internal-link" data-aft-block="languge-switcher" target="_self"
                    href="https://www.appsflyer.com/fr/solutions/regain-ios-visibility/">Français</a>
            </li>
                                    <li class="px-30" data-in-array="1">
                <a data-aft="internal-link" data-aft-block="languge-switcher" target="_self"
                    href="https://www.appsflyer.com/ja">日本語</a>
            </li>
                                    <li class="px-30" data-in-array="1">
                <a data-aft="internal-link" data-aft-block="languge-switcher" target="_self"
                    href="https://www.appsflyer.com/ru/solutions/regain-ios-visibility/">Русский</a>
            </li>
                                    <li class="px-30" data-in-array="1">
                <a data-aft="internal-link" data-aft-block="languge-switcher" target="_self"
                    href="https://www.appsflyer.com/es/solutions/regain-ios-visibility/">Español</a>
            </li>
                                    <li class="px-30" data-in-array="">
                <a data-aft="internal-link" data-aft-block="languge-switcher" target="_blank"
                    href="https://www.appsflyer.com/cn/">简体中文</a>
            </li>
                                    <li class="px-30" data-in-array="1">
                <a data-aft="internal-link" data-aft-block="languge-switcher" target="_self"
                    href="https://www.appsflyer.com/ko/solutions/egain-ios-visibility/">한국어</a>
            </li>
                                    <li class="px-30" data-in-array="1">
                <a data-aft="internal-link" data-aft-block="languge-switcher" target="_self"
                    href="https://www.appsflyer.com/de/solutions/regain-ios-visibility/">Deutsch</a>
            </li>
                                    <li class="px-30" data-in-array="1">
                <a data-aft="internal-link" data-aft-block="languge-switcher" target="_self"
                    href="https://www.appsflyer.com/pt/solutions/regain-ios-visibility/">Portuguese</a>
            </li>
                                    <li class="px-30" data-in-array="1">
                <a data-aft="internal-link" data-aft-block="languge-switcher" target="_self"
                    href="https://www.appsflyer.com/vi/solutions/regain-ios-visibility/">Tiếng Việt</a>
            </li>
                                </ul>
    </li>
</ul>
                                    <ul class="navbar-nav d-sm-flex flex-sm-row justify-content-sm-between align-items-sm-center list-style-none px-20 px-md-0 mt-auto mb-0 mr-md-auto" itemscope itemtype="https://schema.org/SiteNavigationElement" role="menu">
                                                    <li class="secondary-nav__cta mr-sm-3 mr-md-auto my-20 py my-sm-0 d-none d-sm-flex flex-column flex-md-row" itemprop="name" role="menuitem">
                                <a itemprop="url" class="nav-link d-flex nav-link--login justify-content-center"
                                   href="https://hq1.appsflyer.com/auth/login"
                                   id=""
                                   data-aft="login"
                                   data-aft-block="main-nav"
                                   target="_blank">
                                    <i class="icon-login"></i>
                                    Login                                </a>
                            </li>
                                                                            <li class="secondary-nav__cta ml-sm-3 ml-md-20 d-flex align-items-end align-items-sm-start align-items-md-center mt-30 mt-sm-0 ml-lg-20" itemprop="name"
                                role="menuitem">
                                <a itemprop="url" class="btn btn-primary btn-primary--transparent font-weight-bold btn-sm" href="https://www.appsflyer.com/start/"
                                   id=""
                                   target="_self"
                                   data-aft="book-demo"
                                   data-aft-block="main-nav">
                                    Sign up free                                </a>
                            </li>
                                                                            <li class="secondary-nav__cta ml-sm-3 d-flex align-items-end align-items-sm-start align-items-md-center mt-sm-0 ml-lg-20" itemprop="name"
                                role="menuitem">
                                <a itemprop="url" class="btn btn-primary btn-primary--no-line btn-sm" href="https://www.appsflyer.com/start/demo/"
                                   id=""
                                   target="_self"
                                   data-aft="book-demo"
                                   data-aft-block="main-nav">
                                    Contact sales                                </a>
                            </li>
                                            </ul>
                            </div>
        </div>
                <button id="navbar-toggler" class="navbar-toggler hamburger" type="button" data-toggle="on"
                data-target="nav-holder main-nav"
                aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</nav>
    <main class="main">
        
<section class="wp-block-appsflyer-block-product-hero-banner-video solution-product-hero-banner solution-product-hero-banner--video section-bg section-bg--product-hero section-bg--wbg-dark-text text-dark pt-100 pt-md-140 pt-lg-180 pb-20"><div class="container"><div class="row align-items-md-center justify-content-md-between"><div class="col-md-6 pl-lg-30 order-1 order-md-2 video-container"><div class="solution-product-hero-banner--video__video"><div class="customers-video"><div class="falsept-40 container"><div id="customers-video__player-2-47c1tvuhbo" class="customers-video__player wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%"><button data-aft="play-video" data-aft-block="customers-video" data-vid-id="47c1tvuhbo" class="customers-video__btn-vid-play-toggle on"></button><div class="wistia_embed wistia_async_47c1tvuhbo mute=true playerColor=00b2eb controlsVisibleOnLoad=false playButton=false videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%"><img decoding="async" src="https://fast.wistia.com/embed/medias/47c1tvuhbo/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%" alt="" aria-hidden="true"/></div></div></div></div></div></div></div></div><header class="col-md-6 col-xl-5 pr-md-0 pt-4 pt-sm-40 pt-md-0 pb-50 pb-md-2 order-2 order-md-1 text-center text-md-left"><h1 class="mb-20 mb-sm-0 text-dark">Regain iOS visibility</h1><p class="has-mlarge-font-size text-dark">Discover how to get actionable insights and optimize performance with a SKAN solution that provides accurate, granular measurement while keeping you compliant and your customers&#8217; data private</p><div class="hero-banner__buttons d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-md-start pt-20 text-dark"><a href="https://www.appsflyer.com/start/demo/" data-aft="book-demo" data-aft-block="hero-banner-products-solutions" rel="noopener" role="button" class="hero-banner__button btn btn-lg btn btn-primary btn-lg ">Contact sales</a><a href="https://www.appsflyer.com/start/" data-aft="sign-up-free" data-aft-block="hero-banner-products-solutions" rel="noopener" role="button" class="hero-banner__button mt-20 mt-sm-0     ml-sm-40 btn btn-lg btn-text btn-arrow ">Sign up free</a></div></header></div></div></section>



<section class="wp-block-appsflyer-block-tabbed-testimonials block-tabs block-testimonial-tabs violet"><div class="container-fluid px-xl-0"><div class="block-testimonial-tabs__content-tabs"><div class="row"><div class="col-12"><div class="row justify-content-start justify-content-md-end align-items-start"><div class="col-xl-5 offset-xl-1 col-lg-6 col-md-12 order-lg-1 order-2 mt-n150 mt-lg-0 pr-0 pt-xl-140 pt-lg-160 "></div><div class="col-lg-6 p-0 order-lg-2 order-1 block-testimonial-tabs__main-holder"><figure class="block-testimonial-tabs__image active" id="block-image__tab_0"><img decoding="async" class="" src="https://www.appsflyer.com/wp-content/uploads/2023/02/Socialpoint-5.png" alt="" title="Socialpoint (5)"/></figure><figure class="block-testimonial-tabs__image " id="block-image__tab_1"><img decoding="async" class="" src="https://www.appsflyer.com/wp-content/uploads/2023/02/recargapay-1.png" alt="" title="recargapay (1)"/></figure><figure class="block-testimonial-tabs__image " id="block-image__tab_2"><img decoding="async" class="" src="https://www.appsflyer.com/wp-content/uploads/2023/02/Linxo-1.png" alt="" title="Linxo (1)"/></figure><figure class="block-testimonial-tabs__image " id="block-image__tab_3"><img decoding="async" class="" src="https://www.appsflyer.com/wp-content/uploads/2023/02/fondeadora-1.png" alt="" title="fondeadora (1)"/></figure><div class="block-testimonial-tabs__inner-block bg-dark pl-xl-200 pl-lg-70 ml-xl-n100 ml-lg-n90 pl-0 pt-30 px-20 px-md-0 pb-xl-140 pb-lg-70 pb-140"><div class="block-tabs__header block-testimonial-tabs__header mb-xl-100 mb-70 ml-xl-n100 pl-lg-0"><ul class="slider" id="block-testimonial-tabs__slider" data-slides-to-show="4" data-slides-to-show-md="4" data-slides-to-show-sm="1" data-center-mode="true" data-arrows="true" data-dots="false" data-fade="false" data-equal-height="true" data-infinite="false" data-infinite-md="false" data-variable-width="true" data-custom-arrows="true" data-destroy-on="desktop" data-tabbed-slider="true"><li class="block-tabs__link-wrapper"><button class="block-tabs__link active" data-index="0" data-content="tab_0"><img decoding="async" src="https://www.appsflyer.com/wp-content/uploads/2023/02/ABI-1.png"/></button></li><li class="block-tabs__link-wrapper"><button class="block-tabs__link " data-index="1" data-content="tab_1"><img decoding="async" src="https://www.appsflyer.com/wp-content/uploads/2023/01/step.png"/></button></li><li class="block-tabs__link-wrapper"><button class="block-tabs__link " data-index="2" data-content="tab_2"><img decoding="async" src="https://www.appsflyer.com/wp-content/uploads/2023/01/Gismart.png"/></button></li><li class="block-tabs__link-wrapper"><button class="block-tabs__link " data-index="3" data-content="tab_3"><img decoding="async" src="https://www.appsflyer.com/wp-content/uploads/2023/01/Frame-3228.png"/></button></li></ul></div><div class="block-tabs__body"><div id="tab_0" class="block-tabs__single active"><div class="row flex-column-reverse flex-md-row align-items-center"><div class="col-12 pr-xl-280 pr-lg-150 pl-40 pr-40 pl-xl-0 pl-lg-150"><div class="block-tabs__content-title text-light">ABI Games studio boosted ROAS and cut eCPI by 40%</div><div class="block-tabs__content text-light">ABI Studio needed a partner that could provide an iOS solution to overcome data discrepancies and delays. Partnering with AppsFlyer gave ABI the ability to get timely and accurate campaign measurement from all sources.</div><div class="block-tabs__content-url pb-24"><a href="https://www.appsflyer.com/customers/abi-game-studio/ " class="btn btn--white btn-arrow">Read the full story</a></div></div></div></div><div id="tab_1" class="block-tabs__single "><div class="row flex-column-reverse flex-md-row align-items-center"><div class="col-12 pr-xl-280 pr-lg-150 pl-40 pr-40 pl-xl-0 pl-lg-150"><div class="block-tabs__content-title text-light">Step Mobile achieved 50% more visibility into SKAN conversions</div><div class="block-tabs__content text-light">After the roll-out of SKAN, Step couldn’t reconcile attribution and cost aggregation AppsFlyer’s iOS solutions solved this, providing the team a full picture of their performance and freed up significant time for optimization. 
</div><div class="block-tabs__content-url pb-24"><a href="https://www.appsflyer.com/customers/step/ " class="btn btn--white btn-arrow">Read the full story</a></div></div></div></div><div id="tab_2" class="block-tabs__single "><div class="row flex-column-reverse flex-md-row align-items-center"><div class="col-12 pr-xl-280 pr-lg-150 pl-40 pr-40 pl-xl-0 pl-lg-150"><div class="block-tabs__content-title text-light">Gismart boosted performance modeling by 20% with AppsFlyer</div><div class="block-tabs__content text-light">Post-SKAN, Gismart was stuck piecing together their attribution data. After implementing AppsFlyer’s iOS  solution, they once again had full-funnel performance which helped them dramatically  increase in UA performance.
</div><div class="block-tabs__content-url pb-24"><a href="https://www.appsflyer.com/customers/gismart-2/ " class="btn btn--white btn-arrow">Read the full story</a></div></div></div></div><div id="tab_3" class="block-tabs__single "><div class="row flex-column-reverse flex-md-row align-items-center"><div class="col-12 pr-xl-280 pr-lg-150 pl-40 pr-40 pl-xl-0 pl-lg-150"><div class="block-tabs__content-title text-light">Halfbrick Studios doubled conversions while putting privacy first</div><div class="block-tabs__content text-light">Halfbrick Studios needed an MMP to maintain privacy while still delivering on insights. With AppsFlyer, they had visibility into their most profitable campaigns on both a ROAS and ROI perspective which lead to a huge increase in conversions.</div><div class="block-tabs__content-url pb-24"><a href=" https://www.appsflyer.com/customers/halfbrick/ " class="btn btn--white btn-arrow">Read the full story</a></div></div></div></div></div></div></div></div></div></div></div></div></section>



<div style="height:170px" aria-hidden="true" class="wp-block-spacer d-none d-sm-none d-md-block"></div>



<section class="wp-block-appsflyer-block-text-image-columns text-image-columns"><div class="container"><div class="row align-items-sm-center justify-content-sm-between"><figure class="col-md-6 order-md-2 text-right order-2 text-image-columns__image"><img decoding="async" loading="lazy" title="Frame-3326" alt="" width="684" height="462" class="" src="https://www.appsflyer.com/wp-content/uploads/2023/02/Frame-3326.png"/></figure><article class="col-md-5 pt-20 pt-sm-20 order-md-1 text-center text-md-left order-1"><header class="text-image-columns__header"><h2 class="h2">The most trusted mobile measurement partner in the world</h2></header><div class="text-image-columns__text pt-20"><p>Tens of thousands of apps big and small choose AppsFlyer as their source of truth for insights into what’s working (and what’s not), to spend their budget smarter, to give users exceptional experiences, and to preserve customer privacy.</p></div></article></div></div></section>



<div style="height:100px" aria-hidden="true" class="wp-block-spacer d-none d-md-block"></div>



<section class="wp-block-appsflyer-block-company-stats company-stats"><div class="container"><div class="company-stats__items align-items-start row col-xl-10 px-0 px-sm-20 m-auto justify-content-center justify-content-lg-between d-flex flex-wrap flex-lg-nowrap"><div class="company-stats__item col-6 col-sm-4 col-md justify-content-center d-flex flex-wrap flex-lg-nowrap py-20 px-20 px-md-45 px-xl-30 d-flex flex-column text-center align-items-center"><h3 class="h2">10K+</h3><p class="text-secondary">Partners</p></div><div class="company-stats__item col-6 col-sm-4 col-md justify-content-center d-flex flex-wrap flex-lg-nowrap py-20 px-20 px-md-45 px-xl-30 d-flex flex-column text-center align-items-center"><h3 class="h2">14K+</h3><p class="text-secondary">Customers</p></div><div class="company-stats__item col-6 col-sm-4 col-md justify-content-center d-flex flex-wrap flex-lg-nowrap py-20 px-20 px-md-45 px-xl-30 d-flex flex-column text-center align-items-center"><h3 class="h2">$28B+</h3><p class="text-secondary">Ad spend measured per year</p></div><div class="company-stats__item col-6 col-sm-4 col-md justify-content-center d-flex flex-wrap flex-lg-nowrap py-20 px-20 px-md-45 px-xl-30 d-flex flex-column text-center align-items-center"><h3 class="h2">$11M</h3><p class="text-secondary">Fraud blocked per day</p></div><div class="company-stats__item col-6 col-sm-4 col-md justify-content-center d-flex flex-wrap flex-lg-nowrap py-20 px-20 px-md-45 px-xl-30 d-flex flex-column text-center align-items-center"><h3 class="h2">99.9%</h3><p class="text-secondary">Uptime</p></div></div></div></section>



<div style="height:40px" aria-hidden="true" class="wp-block-spacer d-block d-md-none"></div>



<div style="height:60px" aria-hidden="true" class="wp-block-spacer d-none d-md-block d-xl-none"></div>



<div style="height:80px" aria-hidden="true" class="wp-block-spacer d-none d-xl-block"></div>


    <section class="content-gallery pb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <ul class="nav list-style-none nav-pills flex-column my-0" id="tabs-holder" role="tablist">
                                                    <li class="nav-item position-relative m-0 py-4 active">
                                <span class="nav-link px-0 py-3 d-flex flex-column align-items-start" id="id1-tab"
                                      data-aft="platform-category-toggle" data-aft-block="content-gallery" data-toggle="tab"
                                      href="#id1" role="tab"
                                      aria-controls="id1" aria-selected="true">
                                                                            <span class="content-gallery__tab-title w-100 mb-3 h5 d-block">
                                            Regain iOS visibility                                        </span>
                                                                                                                <span class="content-gallery__tab-text pt-3 pr-30">
                                            <p class="mb-0">Get a full view of performance with a SKAN solution that provides accurate, granular measurement while keeping you compliant and your customers’ data private</p>
                                                                                            <a href="https://www.appsflyer.com/solutions/regain-ios-visibility/" class="btn-arrow d-inline-block">
                                                    See how                                                </a>
                                                                                    </span>
                                                                    </span>
                            </li>
                                                    <li class="nav-item position-relative m-0 py-4 ">
                                <span class="nav-link px-0 py-3 d-flex flex-column align-items-start" id="id2-tab"
                                      data-aft="platform-category-toggle" data-aft-block="content-gallery" data-toggle="tab"
                                      href="#id2" role="tab"
                                      aria-controls="id2" aria-selected="true">
                                                                            <span class="content-gallery__tab-title w-100 mb-3 h5 d-block">
                                            Kickstart app growth                                        </span>
                                                                                                                <span class="content-gallery__tab-text pt-3 pr-30">
                                            <p class="mb-0">Land your first installs and boost app marketing ROI backed by powerful attribution and deep links and intuitive reporting and analytics</p>
                                                                                            <a href="https://www.appsflyer.com/solutions/kickstart-app-growth/" class="btn-arrow d-inline-block">
                                                    See how                                                </a>
                                                                                    </span>
                                                                    </span>
                            </li>
                                                    <li class="nav-item position-relative m-0 py-4 ">
                                <span class="nav-link px-0 py-3 d-flex flex-column align-items-start" id="id3-tab"
                                      data-aft="platform-category-toggle" data-aft-block="content-gallery" data-toggle="tab"
                                      href="#id3" role="tab"
                                      aria-controls="id3" aria-selected="true">
                                                                            <span class="content-gallery__tab-title w-100 mb-3 h5 d-block">
                                            Scale UA campaigns                                        </span>
                                                                                                                <span class="content-gallery__tab-text pt-3 pr-30">
                                            <p class="mb-0">Achieve industry-leading ROAS and LTV with the deepest toolset on the market, full-funnel, cross-device measurement, and thousands of integrations</p>
                                                                                            <a href="https://www.appsflyer.com/solutions/scale-ua-campaigns/" class="btn-arrow d-inline-block">
                                                    See how                                                </a>
                                                                                    </span>
                                                                    </span>
                            </li>
                                                    <li class="nav-item position-relative m-0 py-4 ">
                                <span class="nav-link px-0 py-3 d-flex flex-column align-items-start" id="id4-tab"
                                      data-aft="platform-category-toggle" data-aft-block="content-gallery" data-toggle="tab"
                                      href="#id4" role="tab"
                                      aria-controls="id4" aria-selected="true">
                                                                            <span class="content-gallery__tab-title w-100 mb-3 h5 d-block">
                                            Maximize user LTV                                        </span>
                                                                                                                <span class="content-gallery__tab-text pt-3 pr-30">
                                            <p class="mb-0">Increase conversions and revenue with personalized journeys that’ll keep users coming back for more, from any device to your app</p>
                                                                                            <a href="https://www.appsflyer.com/solutions/maximize-user-ltv/" class="btn-arrow d-inline-block">
                                                    See how                                                </a>
                                                                                    </span>
                                                                    </span>
                            </li>
                                            </ul>
                </div>
                <div class="col-sm-7 d-none d-md-block">
                    <div class="tab-content content-gallery__images d-flex justify-content-between h-100" id="tab-content-holder">
                                                    <div class="tab-pane tab-pane--items-4 position-relative show d-block overflow-hidden border-radius--type-2 active in" id="id1"
                                 role="tabpanel" aria-labelledby="id1-tab">
                                                                    <picture>
                                        <img decoding="async" width="505" height="491" class="" src="https://www.appsflyer.com/wp-content/uploads/2024/01/content-gallery-1.jpg" alt="Regain iOS visibility" loading="lazy" />
                                    </picture>
                                                            </div>
                                                    <div class="tab-pane tab-pane--items-4 position-relative show d-block overflow-hidden border-radius--type-2 " id="id2"
                                 role="tabpanel" aria-labelledby="id2-tab">
                                                                    <picture>
                                        <img decoding="async" width="505" height="491" class="" src="https://www.appsflyer.com/wp-content/uploads/2024/01/content-gallery-2.jpg" alt="Kickstart app growth" loading="lazy" />
                                    </picture>
                                                            </div>
                                                    <div class="tab-pane tab-pane--items-4 position-relative show d-block overflow-hidden border-radius--type-2 " id="id3"
                                 role="tabpanel" aria-labelledby="id3-tab">
                                                                    <picture>
                                        <img decoding="async" width="505" height="491" class="" src="https://www.appsflyer.com/wp-content/uploads/2024/01/content-gallery-3.jpg" alt="Scale UA campaigns" loading="lazy" />
                                    </picture>
                                                            </div>
                                                    <div class="tab-pane tab-pane--items-4 position-relative show d-block overflow-hidden border-radius--type-2 " id="id4"
                                 role="tabpanel" aria-labelledby="id4-tab">
                                                                    <picture>
                                        <img decoding="async" width="505" height="491" class="" src="https://www.appsflyer.com/wp-content/uploads/2024/01/content-gallery-4-1.jpg" alt="Maximize user LTV" loading="lazy" />
                                    </picture>
                                                            </div>
                                            </div>
                </div>
            </div>
        </div>
    </section>


    <script>
        const images = document.querySelectorAll('.tab-pane')
        images.forEach( (e) => {
        e.addEventListener('click', function (e){
            const tabId = e.target.closest('.tab-pane').id
                document.getElementById(`${tabId}-tab`).click()
            })
        })
    </script>


<section class="cta-banner cta-banner--type-1 text-light pt-70 pt-sm-0 d-flex">
    <div class="container">
        <div class="row flex-column flex-md-row position-relative mx-auto section-bg section-bg--no-shape section-bg--blue-dark-1 border-radius border-radius--type-2 py-40 overflow-hidden">
            <img decoding="async" class="cta-banner__bg bg-image position-absolute" src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/images/img-cta-banner-bg.webp" alt="Background">
            <div class="cta-banner__content col-12 col-md-7 mx-auto d-flex flex-column justify-content-md-center align-items-md-center text-center">
                <header>
                                            <span class="text-light h1">
                            Ready to start making good choices?                        </span>
                                                        </header>
                                    <footer class="cta-banner__buttons d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-md-start pt-20 pb-md-20">
                        <a href="https://www.appsflyer.com/start/demo/" class="btn btn-primary btn-primary--white" target="" id="btn_xWFBGB" data-aft="book-demo" data-aft-block="cta-banner">
    Contact sales</a>
                        <a href="https://www.appsflyer.com/start/" class="btn-text btn-arrow text-light btn-arrow--white mt-20 mt-sm-0 ml-sm-50" target="" id="btn_TdnsZ8" data-aft="sign-up-free" data-aft-block="cta-banner">
    Sign up free</a>
                    </footer>
                            </div>
        </div>
    </div>
</section>
    </main>
<footer class="footer pt-60 pt-sm-90 container" role="complementary" itemscope="" itemtype="https://schema.org/WPFooter">
    <div class="row footer__top pb-40 pb-sm-20 d-flex flex-column flex-sm-row flex-wrap justify-content-between">
                    <div class="footer__col col-12 col-md">
                                    <h3 class="mb-0 pb-20 pb-md-3 pt-20 pt-md-0 d-flex justify-content-between">Platform</h3>
                
                                                                                    <ul id="footer" class="pb-3 pb-sm-30 list-style-none d-none d-md-block"><li itemprop="name" role="menuitem"  id="menu-item-1713" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1713 nav-item"><a itemprop="url" title="Measurement suite" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/measurement/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Measurement suite</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-283135" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-283135 nav-item"><a itemprop="url" title="ROI Measurement" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/roi-measurement/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>ROI Measurement</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-1718" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1718 nav-item"><a itemprop="url" title="Marketing analytics" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/marketing-analytics/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Marketing analytics</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-18417" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-18417 nav-item"><a itemprop="url" title="Incrementality" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/incrementality/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Incrementality</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-1715" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1715 nav-item"><a itemprop="url" title="CX &amp; deep linking" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/customer-experience-deep-linking/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>CX &amp; deep linking</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-1716" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1716 nav-item"><a itemprop="url" title="Audience segmentation" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/audiences/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Audience segmentation</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-1714" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-1714 nav-item"><a itemprop="url" title="Fraud protection" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/fraud-protection/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Fraud protection</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-2869" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-2869 nav-item"><a itemprop="url" title="Raw data &#038; APIs" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/apis/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Raw data &#038; APIs</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-273959" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-273959 nav-item"><a itemprop="url" title="Partner marketplace" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/integrations/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Partner marketplace</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-30092" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-30092 nav-item"><a itemprop="url" title="AppsFlyer for iOS" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/ios/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>AppsFlyer for iOS</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-51237" class="menu-item menu-item-type-post_type menu-item-object-products menu-item-51237 nav-item"><a itemprop="url" title="Privacy Cloud" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/products/privacy-cloud/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Privacy Cloud</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-275065" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-275065 nav-item"><a itemprop="url" title="Pricing" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/pricing/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Pricing</span></a></li>
</ul>                                                </div>
                    <div class="footer__col col-12 col-md">
                                    <h3 class="mb-0 pb-20 pb-md-3 pt-20 pt-md-0 d-flex justify-content-between">Solutions</h3>
                
                                                                                    <ul id="footer" class="pb-3 pb-sm-30 list-style-none d-none d-md-block"><li itemprop="name" role="menuitem"  id="menu-item-375768" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-375768 nav-item"><a itemprop="url" title="Gaming" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/games/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Gaming</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20285" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-20285 nav-item"><a itemprop="url" title="Shopping" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/shopping/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Shopping</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20284" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-20284 nav-item"><a itemprop="url" title="Food &#038; drink" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/food-drink/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Food &#038; drink</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20283" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-20283 nav-item"><a itemprop="url" title="Entertainment &#038; music" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/entertainment-music/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Entertainment &#038; music</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20282" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-20282 nav-item"><a itemprop="url" title="Finance" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/finance/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Finance</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-18576" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-18576 nav-item"><a itemprop="url" title="Health &#038; fitness" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/health-fitness/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Health &#038; fitness</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-3790" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-3790 nav-item"><a itemprop="url" title="Travel" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/travel/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Travel</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-3793" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-3793 nav-item"><a itemprop="url" title="Integrated partners" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/partners/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Integrated partners</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-362861" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-362861 nav-item"><a itemprop="url" title="Partner Program" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/partner-program/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Partner Program</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-3792" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-3792 nav-item"><a itemprop="url" title="Agencies" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/agencies/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Agencies</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-18575" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-18575 nav-item"><a itemprop="url" title="Zero budget marketing" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/zero-budget-marketing/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Zero budget marketing</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-28625" class="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-28625 nav-item"><a itemprop="url" title="AWS" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/solutions/aws/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>AWS</span></a></li>
</ul>                                                </div>
                    <div class="footer__col col-12 col-md">
                                    <h3 class="mb-0 pb-20 pb-md-3 pt-20 pt-md-0 d-flex justify-content-between">Why AppsFlyer</h3>
                
                                                                                    <ul id="footer" class="pb-3 pb-sm-30 list-style-none d-none d-md-block"><li itemprop="name" role="menuitem"  id="menu-item-381996" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-381996 nav-item"><a itemprop="url" title="Customers success stories" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/customers/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Customers success stories</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-29680" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29680 nav-item"><a itemprop="url" title="The AppsFlyer difference" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/appsflyer-advantage/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>The AppsFlyer difference</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20286" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20286 nav-item"><a itemprop="url" title="Trust hub" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/trust/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Trust hub</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20287" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20287 nav-item"><a itemprop="url" title="Security" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/trust/security/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Security</span></a></li>
</ul>                                                </div>
                    <div class="footer__col col-12 col-md">
                                    <h3 class="mb-0 pb-20 pb-md-3 pt-20 pt-md-0 d-flex justify-content-between">Learn</h3>
                
                                                                                    <ul id="footer" class="pb-3 pb-sm-30 list-style-none d-none d-md-block"><li itemprop="name" role="menuitem"  id="menu-item-716" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-716 nav-item"><a itemprop="url" title="Blog" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/blog/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Blog</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20291" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20291 nav-item"><a itemprop="url" title="Videos" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/blog/videos/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Videos</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20292" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20292 nav-item"><a itemprop="url" title="Podcast" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/blog/podcasts/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Podcast</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20293" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20293 nav-item"><a itemprop="url" title="Reports &amp; guides" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/resources/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Reports &amp; guides</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-278735" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-278735 nav-item"><a itemprop="url" title="Webinars on-demand" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/resources/webinars/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Webinars on-demand</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-721" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-721 nav-item"><a itemprop="url" title="Glossary" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/glossary/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Glossary</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20294" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20294 nav-item"><a itemprop="url" title="Product news" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/product-news/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Product news</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20295 nav-item"><a itemprop="url" title="Use cases" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/use-cases/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Use cases</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20297" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20297 nav-item"><a itemprop="url" title="Help center" itemprop="url" target="_blank" itemprop="url" id="1" itemprop="url" href="https://support.appsflyer.com/hc/en-us" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Help center</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-362032" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-362032 nav-item"><a itemprop="url" title="Sitemap" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/sitemap/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Sitemap</span></a></li>
</ul>                                                </div>
                    <div class="footer__col col-12 col-md">
                                    <h3 class="mb-0 pb-20 pb-md-3 pt-20 pt-md-0 d-flex justify-content-between">Company</h3>
                
                                                                                    <ul id="footer" class="pb-3 pb-sm-30 list-style-none d-none d-md-block"><li itemprop="name" role="menuitem"  id="menu-item-29683" class="menu-item menu-item-type-post_type menu-item-object-company menu-item-29683 nav-item"><a itemprop="url" title="About" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/company/about/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>About</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-737" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-737 nav-item"><a itemprop="url" title="Newsroom" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/company/newsroom/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Newsroom</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-30093" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-30093 nav-item"><a itemprop="url" title="Press releases" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/company/newsroom/pr/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Press releases</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-30094" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-30094 nav-item"><a itemprop="url" title="Media coverage" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/company/newsroom/coverage/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Media coverage</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-20298" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-20298 nav-item"><a itemprop="url" title="CEO blog spot" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/blog/ceo/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>CEO blog spot</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-738" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-738 nav-item"><a itemprop="url" title="Careers" itemprop="url" target="_blank" itemprop="url" id="1" itemprop="url" href="https://careers.appsflyer.com/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Careers</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-736" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-736 nav-item"><a itemprop="url" title="Social impact" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/company/social-impact/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Social impact</span></a></li>
<li itemprop="name" role="menuitem"  id="menu-item-12250" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12250 nav-item"><a itemprop="url" title="Contact" itemprop="url" id="1" itemprop="url" href="https://www.appsflyer.com/company/contact/" itemprop="url" class="nav-link" itemprop="url" data-aft="internal-link" itemprop="url" data-aft-block="main-footer"><span>Contact</span></a></li>
</ul>                                                </div>
            </div>
    <div class="footer__middle row">
                <div class="col mx-20 py-20 d-flex align-items-md-center justify-content-md-center justify-content-md-between px-0">
            <nav class="footer__social social-sharing social-sharing--footer">
                <ul class="d-flex flex-row flex-wrap list-style-none align-items-center justify-content-start justify-content-md-start">
                                                                        <li class="pl-0 pr-md-10 pb-4 pb-sm-0">
                                <a href="https://www.facebook.com/AppsFlyer" target="_blank" data-aft="social-link" data-aft-block="main-footer">
                                    <i class="icon-facebook"></i>
                                </a>
                            </li>
                                                                                                <li class="pl-0 pr-md-10 pb-4 pb-sm-0">
                                <a href="https://www.linkedin.com/company/appsflyer/" target="_blank" data-aft="social-link" data-aft-block="main-footer">
                                    <i class="icon-linkedin"></i>
                                </a>
                            </li>
                                                                                                <li class="pl-0 pr-md-10 pb-4 pb-sm-0">
                                <a href="https://twitter.com/AppsFlyer" target="_blank" data-aft="social-link" data-aft-block="main-footer">
                                    <i class="icon-twitter"></i>
                                </a>
                            </li>
                                                                                                <li class="pl-0 pr-md-10 pb-4 pb-sm-0">
                                <a href="https://www.instagram.com/appsflyer_hq/" target="_blank" data-aft="social-link" data-aft-block="main-footer">
                                    <i class="icon-instagram"></i>
                                </a>
                            </li>
                                                                                                <li class="pl-0 pr-md-10 pb-4 pb-sm-0">
                                <a href="https://www.youtube.com/c/Appsflyer" target="_blank" data-aft="social-link" data-aft-block="main-footer">
                                    <i class="icon-youtube"></i>
                                </a>
                            </li>
                                                                                                <li class="pl-0 pr-md-10 pb-4 pb-sm-0">
                                <a href="https://medium.com/appsflyer" target="_blank" data-aft="social-link" data-aft-block="main-footer">
                                    <i class="icon-medium"></i>
                                </a>
                            </li>
                                                            </ul>
            </nav>
                                        <figure class="footer__logo d-none d-md-block">
                                        <a href="https://www.appsflyer.com" data-aft="internal-link" data-aft-block="main-footer">
                        <img width="116"
                             height="33"
                             src="https://www.appsflyer.com/wp-content/uploads/2021/04/appsflyer-dark-logo.svg"
                             alt=""
                             title="appsflyer-dark-logo"
                             loading="lazy"
                        />
                    </a>
                </figure>
                    </div>
    </div>
    <div class="row footer__bottom">
        <div class="col py-30 px-0 px-sm-20 d-flex flex-wrap flex-column flex-sm-row justify-content-sm-between">
                            <nav class="footer__links">
                    <ul class="d-flex list-style-none">
                                                    <li class="px-20 px-sm-0 pr-sm-40">
                                <a href="https://www.appsflyer.com/legal/terms-of-use/" target="_self" data-aft="internal-link" data-aft-block="main-footer">
                                    Terms                                </a>
                            </li>
                                                    <li class="px-20 px-sm-0 pr-sm-40">
                                <a href="https://www.appsflyer.com/legal/privacy-policy/" target="_self" data-aft="internal-link" data-aft-block="main-footer">
                                    Privacy policy                                </a>
                            </li>
                                            </ul>
                </nav>
                                        <div class="footer__copyrights pl-20 pl-md-0 pt-20 pt-sm-0">
                    ©2024 AppsFlyer Ltd. All right reserved.                </div>
                    </div>
    </div>
</footer><script type="text/javascript" src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/js/vendors/js.cookie.js?ver=1.651" id="js-cookie-js"></script>
<script type="text/javascript" src="//go.appsflyer.com/js/forms2/js/forms2.min.js?ver=6.4.2" id="marketo-js-js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js?ver=6.4.2" id="crypto-js-js"></script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/js/vendors/select2.min.js?ver=1.651" id="select2-js"></script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/js/vendors/intlTelInput.min.js?ver=1.651" id="intl-phone-input-js"></script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/js/vendors/slick.min.js?ver=1.651" id="slick-js"></script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/js/vendors/isotope.pkgd.min.js?ver=1.651" id="isotope-js"></script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-includes/js/clipboard.min.js?ver=2.0.11" id="clipboard-js"></script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/js/vendors/scrollPosStyler.min.js?ver=1.651" id="pos-styler-js"></script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/js/vendors/jquery.magnific-popup.min.js?ver=1.651" id="magnific-popup-js"></script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/js/app.js?ver=1.651" id="af-js-js"></script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-content/plugins/highlighting-code-block/assets/js/prism.js?ver=2.0.1" id="hcb-prism-js"></script>
<script type="text/javascript" id="hcb-script-js-extra">
/* <![CDATA[ */
var hcbVars = {"showCopyBtn":"1","copyBtnLabel":"Copy code to clipboard"};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.appsflyer.com/wp-content/plugins/highlighting-code-block/build/js/hcb_script.js?ver=2.0.1" id="hcb-script-js"></script>


            <script src="https://www.appsflyer.com/wp-content/themes/AF2020/node_modules/@zerobounce/zero-bounce-sdk/dist/zeroBounceSDK.js"></script>
            <script typeof="text/javascript">
                const zeroBounce = new ZeroBounceSDK();
                zeroBounce.init('8ffba165c69c4803adae07e5367df81b');
            </script>

</body>
</html>
