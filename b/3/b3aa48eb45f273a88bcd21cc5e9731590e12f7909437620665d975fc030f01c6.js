google.maps.__gjsload__('marker', function(_){var bHa=function(a,b){const c=_.na(b);a.g.set(c,b);.fh(b,"UPDATE_MARKER_COLLISION");_.fh(b,"REMOVE_COLLISION");a.h.delete(b);var c=a.i;const d=_.na(b);c.g.has(d)&&(c.g.delete(d),b.gh=!1,_.rj(c.h));_.qda(a.g,b)}},dHa=function(a,b){a.h.has(b)||(a.h.add(b),_.bh(b,"UPDATE_BASEMAP_COLLISION",()=>{a.l.add(b);a.m.Sc()}),_.bh(b,"UPDATE_MARKER_COLLISION",()=>{a.m.Sc()}),_.bh(b,"REMOVE_COLLISION",()=>{cHa(a,b)}),bHa(a.i,b),_.pda(a.g,
b))},eHa=function(a,b){b=(a=a.__e3_)&&a[b];return!!b&&Object.values(b).so}${"_added"}`,c,0,!1)},XJ=function(a,b){customElements.get(a)?console.warn(`Element with name "${a}" already defined. Ignored Element redefinition.`):customElements.define(a,b)},YJ=function(a){if(a){if(a instanceof _.Dg)return`${a.lat()},${a.lng()}`;let b=`${a.lat},${a.lng}`;void 0!==a.altitude&&0!==a.altitude&&
(b+=`,${a.altitude}`);return b}return null},hHa=function(a,b){a=new _.Nl(a,!0);b=new _.Nl(b,!0);return a.equals(b)},iHa=function(a){var b=1;return()=>{--b||a()}},jHa=function(a,b){_.Iz().Kp.load(new _.LE(a),c=>{b(c&&c.size)})},kHa=function(a,b){a=a.getBoundingClientRect();b=b instanceof Element?b.getBoundingClientRect():a;return{offset:new _.oi(b.x-a.x,b.y-a.y),size:new _.qi(b.width,b.height)}},lHa=function(a){a=new DOMMatrixReadOnly(a.transform);return{offsetX:a.m41,offsetY:a.m42}},ZJ=function(a){const b=
window.devicePixelRatio||1;return Math.round(a*b)/b},mHa=function(a,{clientX:b,clientY:c}){const {height:d,left:e,top:f,width:g}=a.getBoundingClientRect();return{aa:ZJ(b-(e+g/2)),ca:ZJ(c-(f+d/2))}},nHa=function(a,b){if(!a||!b)return null;a=a.getProjection();return _.qo(b,a)},$J=function(a){return a.type.startsWith("touch")?(a=(a=a.changedTouches)&&a[0])?{clientX:a.clientX,clientY:a.clientY}:null:{clientX:a.clientX,clientY:a.clientY}},oHa=function(a,b){const c=$J(a);if(!b||!c)return!1;a=Math.abs(c.clientX-
b.clientX);b=Math.abs(c.clientY-b.clientY);return 4<=a*a+b*b},aK=function(a){this.h=a;this.g=!1},pHa=function(a,b){const c=[];c.push("@-webkit-keyframes ",b," {\n");_.yb(a.frames,d=>{c.push(100*d.time+"% { ");c.push("-webkit-transform: translate3d("+d.translate[0]+"px,",d.translate[1]+"px,0); ");c.push("-webkit-animation-timing-function: ",d.Cf,"; ");c.push("}\n")});c.push("}\n");return c.join("")},qHa=function(a,b){for(let c=0;c<a.frames.length-1;c++){const d=a.frames[c+1];if(b>=a.frames[c].time&&
b<d.time)return c}return a.frames.length-1},rHa=function(a){if(a.g)return a.g;a.g="_gm"+Math.round(1E4*Math.random());var b=pHa(a,a.g);if(!bK){bK=_.Yd("style");bK.type="text/css";var c=document.querySelectorAll&&document.querySelector?document.querySelectorAll("HEAD"):document.getElementsByTagName("HEAD");c[0].appendChild(bK)}b=bK.textContent+b;b=_.Lg(b);bK.textContent=_.Gm(new _.il(b,_.hl));return a.g},cK=function(a){switch(a){case 1:_.hi(window,"Pegh");_.fi(window,160667);break;case 2:_.hi(window,
"Psgh");_.fi(window,160666);break;case 3:_.hi(window,"Pugh");_.fi(window,160668);break;default:_.hi(window,"Pdgh"),_.fi(window,160665)}},gK=function(a="DEFAULT"){const b=document.createElementNS("http://www.w3.org/2000/svg","svg");b.setAttribute("xmlns","http://www.w3.org/2000/svg");const c=document.createElementNS("http://www.w3.org/2000/svg","g");c.setAttribute("fill","none");c.setAttribute("fill-rule","evenodd");b.appendChild(c);var d=document.createElementNS("http://www.w3.org/2000/svg","path");
d.classList.add(dK);const e=document.createElementNS("http://www.w3.org/2000/svg","path");e.classList.add(eK);e.setAttribute("fill","#EA4335");switch(a){case "PIN":b.setAttribute("width","27");b.setAttribute("height","43");b.setAttribute("viewBox","0 0 27 43");c.setAttribute("transform","translate(1 1)");e.setAttribute("d","M12.5 0C5.596 0 0 5.596 0 12.5c0 1.886.543 3.746 1.441 5.462 3.425 6.615 10.216 13.566 10.216 22.195a.843.843 0 101.686 0c0-8.63 6.79-15.58 10.216-22.195.899-1.716 1.442-3.576 1.442-5.462C25 5.596 19.405 0 12.5 0z");
d.setAttribute("d","M12.5-.5c7.18 0 13 5.82 13 13 0 1.9-.524 3.833-1.497 5.692-.916 1.768-1.018 1.93-4.17 6.779-4.257 6.55-5.99 10.447-5.99 15.187a1.343 1.343 0 11-2.686 0c0-4.74-1.733-8.636-5.99-15.188-3.152-4.848-3.254-5.01-4.169-6.776C.024 16.333-.5 14.4-.5 12.5c0-7.18 5.82-13 13-13z");d.setAttribute("stroke","#fff");c.append(e,d);break;case "PINLET":b.setAttribute("width","19");b.setAttribute("height","26");b.setAttribute("viewBox","0 0 19 26");e.setAttribute("d","M18.998 9.5c0 1.415-.24 2.819-.988 4.3-2.619 5.186-7.482 6.3-7.87 11.567-.025.348-.286.633-.642.633-.354 0-.616-.285-.641-.633C8.469 20.1 3.607 18.986.987 13.8.24 12.319 0 10.915 0 9.5 0 4.24 4.25 0 9.5 0a9.49 9.49 0 019.498 9.5z");
d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d","M-1-1h21v30H-1z");c.append(e,d);break;default:b.setAttribute("width","26"),b.setAttribute("height","37"),b.setAttribute("viewBox","0 0 26 37"),d.setAttribute("d","M13 0C5.8175 0 0 5.77328 0 12.9181C0 20.5733 5.59 23.444 9.55499 30.0784C12.09 34.3207 11.3425 37 13 37C14.7225 37 13.975 34.2569 16.445 30.1422C20.085 23.8586 26 20.6052 26 12.9181C26 5.77328 20.1825 0 13 0Z"),d.setAttribute("fill","#C5221F"),e.setAttribute("d",
"M13.0167 35C12.7836 35 12.7171 34.9346 12.3176 33.725C11.9848 32.6789 11.4854 31.0769 10.1873 29.1154C8.92233 27.1866 7.59085 25.6173 6.32594 24.1135C3.36339 20.5174 1 17.7057 1 12.6385C1.03329 6.19808 6.39251 1 13.0167 1C19.6408 1 25 6.23078 25 12.6385C25 17.7057 22.6699 20.55 19.6741 24.1462C18.4425 25.65 17.1443 27.2193 15.8793 29.1154C14.6144 31.0442 14.0818 32.6135 13.749 33.6596C13.3495 34.9346 13.2497 35 13.0167 35Z"),a=document.createElementNS("http://www.w3.org/2000/svg","path"),a.classList.add(fK),
a.setAttribute("d","M13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13C8 15.7614 10.2386 18 13 18Z"),a.setAttribute("fill","#B31412"),c.append(d,e,a)}return b},sHa=function(a){a.mq&&a.mq.setAttribute("fill",a.fn||a.Vw);a.xf.style.color=a.glyphColor||"";if(a.glyph instanceof URL){var b=a.Nh.toString();a.xf.textContent="";if(a.glyphColor){var c=document.createElement("div");c.style.width="100%";c.style.height="100%";b=`url("${b}")`;c.style.setProperty("mask-image",
b);c.style.setProperty("mask-repeat","no-repeat");c.style.setProperty("mask-position","center");c.style.setProperty("mask-size","contain");c.style.setProperty("-webkit-mask-image",b);c.style.setProperty("-webkit-mask-repeat","no-repeat");c.style.setProperty("-webkit-mask-position","center");c.style.setProperty("-webkit-mask-size","contain");c.style.backgroundColor=a.glyphColor;a.xf.appendChild(c)}else c=document.createElement("img"),c.style.width="100%",c.style.height="100%",c.style.objectFit="contain",
c.src=b,a.xf.appendChild(c)}},iK=function(a){return a instanceof hK},tHa=function(a){a=a.get("collisionBehavior");return"REQUIRED_AND_HIDES_OPTIONAL"===a||"OPTIONAL_AND_HIDES_LOWER_PRIORITY"===a},uHa=function(a,b,c=!1){if(!b.get("pegmanMarker")){_.hi(a,"Om");_.fi(a,149055);c?(_.hi(a,"Wgmk"),_.fi(a,149060)):a instanceof _.yh?(_.hi(a,"Ramk"),_.fi(a,149057)):a instanceof _.Di&&(_.hi(a,"Svmk"),_.fi(a,149059),a.get("standAlone")&&(_.hi(a,"Ssvmk"),_.fi(a,149058)));c=a.get("styles")||[];Array.isArray(c)&&
c.some(e=>"stylers"in e)&&(_.hi(a,"Csmm"),_.fi(a,174113));tHa(b)&&(_.hi(a,"Mocb"),_.fi(a,149062));b.get("anchorPoint")&&(_.hi(a,"Moap"),_.fi(a,149064));c=b.get("animation");1===c&&(_.hi(a,"Moab"),_.fi(a,149065));2===c&&(_.hi(a,"Moad"),_.fi(a,149066));!1===b.get("clickable")&&(_.hi(a,"Ucmk"),_.fi(a,149091),b.get("title")&&(_.hi(a,"Uctmk"),_.fi(a,149063)));b.get("draggable")&&(_.hi(a,"Drmk"),_.fi(a,149069),!1===b.get("clickable")&&(_.hi(a,"Dumk"),_.fi(a,149070)));!1===b.get("visible")&&(_.hi(a,"Ivmk"),
_.fi(a,149081));b.get("crossOnDrag")&&(_.hi(a,"Mocd"),_.fi(a,149067));b.get("cursor")&&(_.hi(a,"Mocr"),_.fi(a,149068));b.get("label")&&(_.hi(a,"Molb"),_.fi(a,149080));b.get("title")&&(_.hi(a,"Moti"),_.fi(a,149090));null!=b.get("opacity")&&(_.hi(a,"Moop"),_.fi(a,149082));!0===b.get("optimized")?(_.hi(a,"Most"),_.fi(a,149085)):!1===b.get("optimized")&&(_.hi(a,"Mody"),_.fi(a,149071));null!=b.get("zIndex")&&(_.hi(a,"Mozi"),_.fi(a,149092));c=b.get("icon");var d=new jK;(d=!c||c===d.icon.url||c.url===d.icon.url)?
(_.hi(a,"Dmii"),_.fi(a,173084)):(_.hi(a,"Cmii"),_.fi(a,173083));"string"===typeof c?(_.hi(a,"Mosi"),_.fi(a,149079)):c&&null!=c.url?(c.anchor&&(_.hi(a,"Moia"),_.fi(a,149074)),c.labelOrigin&&(_.hi(a,"Moil"),_.fi(a,149075)),c.origin&&(_.hi(a,"Moio"),_.fi(a,149076)),c.scaledSize&&(_.hi(a,"Mois"),_.fi(a,149077)),c.size&&(_.hi(a,"Moiz"),_.fi(a,149078))):c&&null!=c.path?(c=c.path,0===c?(_.hi(a,"Mosc"),_.fi(a,149088)):1===c?(_.hi(a,"Mosfc"),_.fi(a,149072)):2===c?(_.hi(a,"Mosfo"),_.fi(a,149073)):3===c?(_.hi(a,
"Mosbc"),_.fi(a,149086)):4===c?(_.hi(a,"Mosbo"),_.fi(a,149087)):(_.hi(a,"Mosbu"),_.fi(a,149089))):iK(c)&&(_.hi(a,"Mpin"),_.fi(a,149083));b.get("shape")&&(_.hi(a,"Mosp"),_.fi(a,149084),d&&(_.hi(a,"Dismk"),_.fi(a,162762)));if(c=b.get("place"))c.placeId?(_.hi(a,"Smpi"),_.fi(a,149093)):(_.hi(a,"Smpq"),_.fi(a,149094)),b.get("attribution")&&(_.hi(a,"Sma"),_.fi(a,149061))}},kK=function(a){return iK(a)?a.getSize():a.size},vHa=function(a,b){if(!(a&&b&&a.isConnected&&b.isConnected))return!1;a=a.getBoundingClientRect();
b=b.getBoundingClientRect();return b.x+b.width<a.x-0||b.x>a.x+a.width+0||b.y+b.height<a.y-0||b.y>a.y+a.height+0?!1:!0},mK=function(a,b){this.h=a;this.g=b;lK||(lK=new jK)},xHa=function(a,b,c){wHa(a,c,d=>{a.set(b,d);const e=d?kK(d):null;"viewIcon"===b&&d&&e&&a.g&&a.g(e,d.anchor,d.labelOrigin);d=a.get("modelLabel");a.set("viewLabel",d?{text:d.text||d,color:_.dg(d.color,"#000000"),fontWeight:_.dg(d.fontWeight,""),fontSize:_.dg(d.fontSize,"14px"),fontFamily:_.dg(d.fontFamily,"Roboto,Arial,sans-serif"),
className:d.className||""}:null)})},wHa=function(a,b,c){b?iK(b)?c(b):null!=b.path?c(a.h(b)):(_.eg(b)||(b.size=b.size||b.scaledSize),b.size?c(b):(b.url||(b={url:b}),jHa(b.url,function(d){b.size=d||new _.qi(24,24);c(b)}))):c(null)},nK=function(){this.g=yHa(this);this.set("shouldRender",this.g);this.h=!1},yHa=function(a){const b=a.get("mapPixelBoundsQ");var c=a.get("icon");const d=a.get("position");if(!b||!c||!d)return 0!=a.get("visible");const e=c.anchor||_.Gi,f=c.size.width+Math.abs(e.x);c=c.size.height+
Math.abs(e.y);return d.x>b.xa-f&&d.y>b.pa-c&&d.x<b.Da+f&&d.y<b.Ba+c?0!=a.get("visible"):!1},oK=function(a){this.h=a;this.g=!1},zHa=function(a,b){a.origin=b;_.rj(a.h)},pK=function(a){a.g&&(_.Oo(a.g),a.g=null)},qK=function(a,b,c){b.textContent="";const d=_.Jk(),e=qK.ownerDocument(b).createElement("canvas");e.width=c.size.width*d;e.height=c.size.height*d;e.style.width=_.eo(c.size.width);e.style.height=_.eo(c.size.height);_.Mj(b,c.size);b.appendChild(e);_.Fo(e,_.Gi);qK.GC(e);b=e.getContext("2d");b.lineCap=
b.lineJoin="round";b.scale(d,d);a=a(b);b.beginPath();a.jc(c.su,c.anchor.x,c.anchor.y,c.rotation||0,c.scale);c.fillOpacity&&(b.fillStyle=c.fillColor,b.globalAlpha=c.fillOpacity,b.fill());c.strokeWeight&&(b.lineWidth=c.strokeWeight,b.strokeStyle=c.strokeColor,b.globalAlpha=c.strokeOpacity,b.stroke())},AHa=function(a,b,c){_.co(()=>{a.style.webkitAnimationDuration=c.duration?c.duration+"ms":"";a.style.webkitAnimationIterationCount=`${c.zf}`;a.style.webkitAnimationName=b||""})},BHa=function(){const a=
[];for(let b=0;b<rK.length;b++){const c=rK[b];c.Oc();c.g||a.push(c)}rK=a;0===rK.length&&(window.clearInterval(sK),sK=null)},tK=function(a){return a?a.__gm_at||_.Gi:null},DHa=function(a,b){var c=1,d=a.animation;var e=d.frames[qHa(d,b)];var f;d=a.animation;(f=d.frames[qHa(d,b)+1])&&(c=(b-e.time)/(f.time-e.time));b=tK(a.element);d=a.element;f?(c=(0,CHa[e.Cf||"linear"])(c),e=e.translate,f=f.translate,c=new _.oi(Math.round(c*f[0]-c*e[0]+e[0]),Math.round(c*f[1]-c*e[1]+e[1]))):c=new _.oi(e.translate[0],
e.translate[1]);c=d.__gm_at=c;d=c.x-b.x;b=c.y-b.y;if(0!==d||0!==b)c=a.element,e=new _.oi(_.Hz(c.style.left)||0,_.Hz(c.style.top)||0),e.x+=d,e.y+=b,_.Fo(c,e);_.mh(a,"tick")},GHa=function(a,b,c){let d;var e;if(e=!1!==c.gz)e=_.yo(),e=e.g.s||e.g.o&&_.dn(e.g.version,7);e?d=new EHa(a,b,c):d=new FHa(a,b,c);d.start();return d},wK=function(a){a.m&&(uK(a.Za),a.m.release(),a.m=null);a.h&&_.Oo(a.h);a.h=null;a.l&&_.Oo(a.l);a.l=null;vK(a,!0);a.s=[]},vK=function(a,b=!1){a.J?a.V=!0:(_.mh(a,b?"ELEMENTS_REMOVED":"CLEAR_TARGET"),
a.targetElement&&_.Oo(a.targetElement),a.targetElement=null,a.o&&(a.o.unbindAll(),a.o.release(),a.o=null,uK(a.M),a.M=null),a.C&&a.C.remove(),a.D&&a.D.remove())},IHa=function(a,b){const c=a.X();if(c){var d=null!=c.url;a.h&&a.Ja==d&&(_.Oo(a.h),a.h=null);a.Ja=!d;var e=null;d&&(e={ql:()=>{}});a.h=xK(a,b,a.h,c,e);HHa(a,c,yK(a))}},MHa=function(a){var b=a.ea();if(b){if(!a.m){const e=a.m=new JHa(a.getPanes(),b,a.get("opacity"),a.get("visible"),a.ac);a.Za=[_.bh(a,"label_changed",function(){e.setLabel(this.get("label"))}),
_.bh(a,"opacity_changed",function(){e.setOpacity(this.get("opacity"))}),_.bh(a,"panes_changed",function(){var f=this.get("panes");e.Ye=f;pK(e);_.rj(e.h)}),_.bh(a,"visible_changed",function(){e.setVisible(this.get("visible"))})]}if(b=a.X()){var c=a.h,d=yK(a);c=KHa(a,b,d,tK(c)||_.Gi);d=kK(b);d=b.labelOrigin||new _.oi(d.width/2,d.height/2);iK(b)&&(b=b.getSize().width,d=new _.oi(b/2,b/2));zHa(a.m,new _.oi(c.x+d.x,c.y+d.y));a.m.setZIndex(LHa(a));a.m.h.Sc()}}},OHa=function(a){if(!a.T){a.i&&(a.F&&_.dh(a.F),
a.i.cancel(),a.i=null);var b=a.get("animation");if(b=NHa[b]){var c=b.options;a.h&&(a.T=!0,a.set("animating",!0),b=GHa(a.h,b.icon,c),a.i=b,a.F=_.kh(b,"done",function(){a.set("animating",!1);a.i=null;a.set("animation",null)}))}}},uK=function(a){if(a)for(let b=0,c=a.length;b<c;b++)_.dh(a[b])},yK=function(a){return _.yo().transform?Math.min(1,a.get("scale")||1):1},KHa=function(a,b,c,d){const e=a.getPosition(),f=kK(b);var g=(b=zK(b))?b.x:f.width/2;a.ia.x=e.x+d.x-Math.round(g-(g-f.width/2)*(1-c));b=b?b.y:
f.height;a.ia.y=e.y+d.y-Math.round(b-(b-f.height/2)*(1-c));return a.ia},LHa=function(a){let b=a.get("zIndex");a.lh&&(b=1E6);_.bg(b)||(b=Math.min(a.getPosition().y,999999));return b},zK=function(a){return iK(a)?a.getAnchor():a.anchor},HHa=function(a,b,c){const d=kK(b);a.O.width=c*d.width;a.O.height=c*d.height;a.set("size",a.O);const e=a.get("anchorPoint");if(!e||e.g)b=zK(b),a.K.x=c*(b?d.width/2-b.x:0),a.K.y=-c*(b?b.y:d.height),a.K.g=!0,a.set("anchorPoint",a.K)},xK=function(a,b,c,d,e){if(iK(d))b=PHa(a,
b,c,d);else if(null!=d.url){const f=d.origin||_.Gi;a=a.get("opacity");const g=_.dg(a,1);c?(c.firstChild.__src__!=d.url&&_.NE(c.firstChild,d.url),_.PE(c,d.size,f,d.scaledSize),c.firstChild.style.opacity=`${g}`):(e=e||{},e.Ss=!_.Lj.se,e.alpha=!0,e.opacity=a,c=_.OE(d.url,null,f,d.size,null,d.scaledSize,e),_.Qz(c),b.appendChild(c));b=c}else b=c||_.Go("div",b),QHa(b,d),a=a.get("opacity"),_.Sz(b,_.dg(a,1));c=b;c.h=d;return c},RHa=function(a,b){a.C&&a.D&&a.oa==b||(a.oa=b,a.C&&a.C.remove(),a.D&&a.D.remove(),
a.C=_.np(b,{zd:function(c){a.J++;_.$o(c);_.mh(a,"mousedown",c.La)},Rd:function(c){a.J--;!a.J&&a.V&&_.Jz(this,function(){a.V=!1;vK(a);a.Ea.Sc()},0);_.bp(c);_.mh(a,"mouseup",c.La)},Ue:({event:c,Kj:d})=>{_.fo(c.La);3==c.button?d||3==c.button&&_.mh(a,"rightclick",c.La):d?_.mh(a,"dblclick",c.La):(_.mh(a,"click",c.La),_.hi(window,"Mmi"),_.fi(window,171150))},Dm:c=>{_.cp(c);_.mh(a,"contextmenu",c.La)}}),a.D=new _.Ht(b,b,{Ko:function(c){_.mh(a,"mouseout",c)},Lo:function(c){_.mh(a,"mouseover",c)}}))},PHa=
function(a,b,c,d){c=c||_.Go("div",b);_.ik(c);b===a.getPanes().overlayMouseTarget?(b=d.element.cloneNode(!0),_.Sz(b,0),c.appendChild(b)):c.appendChild(d.element);b=d.getSize();c.style.width=b.width+(b.h||"px");c.style.height=b.height+(b.g||"px");c.style.pointerEvents="none";c.style.userSelect="none";_.kh(d,"changed",()=>{a.g()});return c},AK=function(a){const b=a.h.get("place");a=a.h.get("position");return b&&b.location||a},BK=function(a,b){a.l&&a.l.has(b)&&({marker:a}=a.l.get(b),b.zg=SHa(a),b.zg&&
(b=a.getMap()))&&(_.hi(b,"Mwfl"),_.fi(b,184438))},UHa=function(a,b){if(a.l){var {px:c,marker:d}=a.l.get(b);for(const e of THa)c.push(gHa(d,e,()=>{BK(a,b)})),c.push(fHa(d,e,()=>{!SHa(d)&&b.zg&&BK(a,b)}))}},VHa=function(a){const b=a.i.__gm;a.g.bindTo("mapPixelBounds",b,"pixelBounds");a.g.bindTo("panningEnabled",a.i,"draggable");a.g.bindTo("panes",b)},WHa=function(a){const b=a.i.__gm;_.bh(a.D,"dragging_changed",()=>{b.set("markerDragging",a.h.get("dragging"))});b.set("markerDragging",b.get("markerDragging")||
a.h.get("dragging"))},YHa=function(a){a.o.push(_.lh(a.g,"panbynow",a.i.__gm));_.yb(XHa,b=>{a.o.push(_.bh(a.g,b,c=>{const d=a.F?AK(a):a.h.get("internalPosition");c=new _.It(d,c,a.g.get("position"));_.mh(a.h,b,c)}))})},ZHa=function(a){const b=()=>{a.h.get("place")?a.g.set("draggable",!1):a.g.set("draggable",!!a.h.get("draggable"))};a.o.push(_.bh(a.D,"draggable_changed",b));a.o.push(_.bh(a.D,"place_changed",b));b()},$Ha=function(a){a.o.push(_.bh(a.i,"projection_changed",()=>CK(a)));a.o.push(_.bh(a.D,
"position_changed",()=>CK(a)));a.o.push(_.bh(a.D,"place_changed",()=>CK(a)))},bIa=function(a){a.o.push(_.bh(a.g,"dragging_changed",()=>{if(a.g.get("dragging"))a.M=a.m.Ag(),a.M&&_.xF(a.m,a.M);else{a.M=null;a.K=null;var b=a.m.getPosition();if(b&&(b=_.ro(b,a.i.get("projection")),b=aIa(a,b))){const c=_.qo(b,a.i.get("projection"));a.h.get("place")||(a.J=!1,a.h.set("position",b),a.J=!0);a.m.setPosition(c)}}}));a.o.push(_.bh(a.g,"deltaclientposition_changed",()=>{var b=a.g.get("deltaClientPosition");if(b&&
(a.M||a.K)){var c=a.K||a.M;a.K={clientX:c.clientX+b.clientX,clientY:c.clientY+b.clientY};b=a.N.Ge(a.K);b=_.ro(b,a.i.get("projection"));c=a.K;var d=aIa(a,b);d&&(a.h.get("place")||(a.J=!1,a.h.set("position",d),a.J=!0),d.equals(b)||(b=_.qo(d,a.i.get("projection")),c=a.m.Ag(b)));c&&_.xF(a.m,c)}}))},cIa=function(a){if(a.sb){a.g.bindTo("scale",a.sb);a.g.bindTo("position",a.sb,"pixelPosition");const b=a.i.__gm;a.sb.bindTo("latLngPosition",a.h,"internalPosition");a.sb.bindTo("focus",a.i,"position");a.sb.bindTo("zoom",
b);a.sb.bindTo("offset",b);a.sb.bindTo("center",b,"projectionCenterQ");a.sb.bindTo("projection",a.i)}},dIa=function(a){if(a.sb){const b=new oK(a.i instanceof _.Di);b.bindTo("internalPosition",a.sb,"latLngPosition");b.bindTo("place",a.h);b.bindTo("position",a.h);b.bindTo("draggable",a.h);a.g.bindTo("draggable",b,"actuallyDraggable")}},CK=function(a){if(a.J){var b=AK(a);b&&a.m.setPosition(_.qo(b,a.i.get("projection")))}},aIa=function(a,b){const c=a.i.__gm.get("snappingCallback");return c&&(a=c({latLng:b,
overlay:a.h}))?a:b},SHa=function(a){return THa.some(b=>eHa(a,b))},fIa=function(a,b,c){if(b instanceof _.yh){const d=b.__gm;Promise.all([d.vb,d.i]).then(([{fa:e},f])=>{eIa(a,b,c,e,f)})}else eIa(a,b,c,null)},eIa=function(a,b,c,d,e=!1){const f=new Map,g=k=>{var m=b instanceof _.yh;const q=m?k.__gm.Tj.map:k.__gm.Tj.streetView,t=q&&q.i==b,v=t!=a.contains(k);q&&v&&(m?(k.__gm.Tj.map.dispose(),k.__gm.Tj.map=null):(k.__gm.Tj.streetView.dispose(),k.__gm.Tj.streetView=null));!a.contains(k)||!m&&k.get("mapOnly")||
t||(b instanceof _.yh?(m=b.__gm,k.__gm.Tj.map=new gIa(k,b,c,_.nF(m,k),d,m.K,f)):k.__gm.Tj.streetView=new gIa(k,b,c,_.ed,null,null,null),uHa(b,k,e))};_.bh(a,"insert",g);_.bh(a,"remove",g);a.forEach(g)},DK=function(a,b,c,d){this.i=a;this.l=b;this.m=c;this.h=d},hIa=function(a){if(!a.g){const b=a.i,c=b.ownerDocument.createElement("canvas");_.Io(c);c.style.position="absolute";c.style.top=c.style.left="0";const d=c.getContext("2d"),e=EK(d),f=a.h.size;c.width=Math.ceil(f.aa*e);c.height=Math.ceil(f.ca*e);
c.style.width=_.eo(f.aa);c.style.height=_.eo(f.ca);b.appendChild(c);a.g=c.context=d}return a.g},EK=function(a){return _.Jk()/(a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1)},iIa=function(a,b,c){a=a.m;a.width=b;a.height=c;return a},kIa=function(a){const b=jIa(a),c=hIa(a),d=EK(c);a=a.h.size;c.clearRect(0,0,Math.ceil(a.aa*d),Math.ceil(a.ca*d));b.forEach(function(e){c.globalAlpha=_.dg(e.opacity,1);c.drawImage(e.image,
e.Qm,e.Rm,e.xp,e.op,Math.round(e.dx*d),Math.round(e.dy*d),e.Ai*d,e.yi*d)})},jIa=function(a){const b=[];a.l.forEach(function(c){b.push(c)});b.sort(function(c,d){return c.zIndex-d.zIndex});return b},FK=function(a,b,c,d){this.l=c;this.m=new _.DG(a,d,c);this.g=b},GK=function(a,b,c,d){var e=b.ob,f=a.l.get();if(!f)return null;f=f.tb.size;c=_.yF(a.m,e,new _.oi(c,d));if(!c)return null;a=new _.oi(c.lm.la*f.aa,c.lm.na*f.ca);const g=[];c.nd.oc.forEach(function(k){g.push(k)});g.sort(function(k,m){return m.zIndex-
k.zIndex});c=null;for(e=0;d=g[e];++e)if(f=d.Do,0!=f.clickable&&(f=f.l,lIa(a.x,a.y,d))){c=f;break}c&&(b.kc=d);return c},lIa=function(a,b,c){if(c.dx>a||c.dy>b||c.dx+c.Ai<a||c.dy+c.yi<b)a=!1;else a:{var d=c.Do.shape;a-=c.dx;b-=c.dy;if(!d)throw Error("Shape cannot be null.");c=d.coords||[];switch(d.type.toLowerCase()){case "rect":a=c[0]<=a&&a<=c[2]&&c[1]<=b&&b<=c[3];break a;case "circle":d=c[2];a-=c[0];b-=c[1];a=a*a+b*b<=d*d;break a;default:d=c.length,c[0]==c[d-2]&&c[1]==c[d-1]||c.push(c[0],c[1]),a=0!=
_.Fwa(a,b,c)}}return a},nIa=function(a,b){if(!b.h){b.h=!0;var c=_.po(a.get("projection")),d=b.g;-64>d.dx||-64>d.dy||64<d.dx+d.Ai||64<d.dy+d.yi?(_.uj(a.i,b),d=a.h.search(_.Xl)):(d=b.latLng,d=new _.oi(d.lat(),d.lng()),b.ob=d,_.sF(a.l,{ob:d,marker:b}),d=_.Cwa(a.h,d));for(let f=0,g=d.length;f<g;++f){var e=d[f];const k=e.nd||null;if(e=mIa(a,k,e.Vy||null,b,c))b.oc[_.oh(e)]=e,_.uj(k.oc,e)}}},oIa=function(a,b){b.h&&(b.h=!1,a.i.contains(b)?a.i.remove(b):a.l.remove({ob:b.ob,marker:b}),_.Wf(b.oc,(c,d)=>{delete b.oc[c];
d.nd.oc.remove(d)}))},pIa=function(a,b){a.m[_.oh(b)]=b;var c={la:b.nb.x,na:b.nb.y,za:b.zoom};const d=_.po(a.get("projection"));var e=_.up(a.g,c);e=new _.oi(e.g,e.h);const {min:f,max:g}=_.Ny(a.g,c,64/a.g.size.aa);c=_.$i(f.g,f.h,g.g,g.h);_.Ewa(c,d,e,(k,m)=>{k.Vy=m;k.nd=b;b.ki[_.oh(k)]=k;_.pF(a.h,k);m=_.ag(a.l.search(k),q=>q.marker);a.i.forEach((0,_.pa)(m.push,m));for(let q=0,t=m.length;q<t;++q){const v=m[q],w=mIa(a,b,k.Vy,v,d);w&&(v.oc[_.oh(w)]=w,_.uj(b.oc,w))}});b.va&&b.oc&&a.s(b.va,b.oc)},qIa=function(a,
b){b&&(delete a.m[_.oh(b)],b.oc.forEach(function(c){b.oc.remove(c);delete c.Do.oc[_.oh(c)]}),_.Wf(b.ki,(c,d)=>{a.h.remove(d)}))},mIa=function(a,b,c,d,e){if(!e||!c||!d.latLng)return null;var f=e.fromLatLngToPoint(c);c=e.fromLatLngToPoint(d.latLng);e=a.g.size;a=_.pqa(a.g,new _.hj(c.x,c.y),new _.hj(f.x,f.y),b.zoom);c.x=a.la*e.aa;c.y=a.na*e.ca;a=d.zIndex;_.bg(a)||(a=c.y);a=Math.round(1E3*a)+_.oh(d)%1E3;f=d.g;b={image:f.image,Qm:f.Qm,Rm:f.Rm,xp:f.xp,op:f.op,dx:f.dx+c.x,dy:f.dy+c.y,Ai:f.Ai,yi:f.yi,zIndex:a,
opacity:d.opacity,nd:b,Do:d};return b.dx>e.aa||b.dy>e.ca||0>b.dx+b.Ai||0>b.dy+b.yi?null:b},HK=function(a,b,c){this.h=b;const d=this;a.g=function(e){d.ee(e)};a.onRemove=function(e){d.cg(e)};this.ye=null;this.g=!1;this.l=0;this.m=c;a.getSize()?(this.g=!0,this.i()):_.je(_.Cm(_.mh,c,"load"))},rIa=function(a,b,c){4>a.l++?c?a.h.ow(b):a.h.dM(b):a.g=!0;a.ye||(a.ye=_.co((0,_.pa)(a.i,a)))},IK=function(a,b,c,d,e){var f=sIa;const g=this;a.g=function(k){g.ee(k)};a.onRemove=function(k){g.cg(k)};this.h=b;this.g=
c;this.m=f;this.l=d;this.i=e},sIa=function(a){return"string"===typeof a?(JK.has(a)||JK.set(a,{url:a}),JK.get(a)):a},vIa=function(a,b,c){const d=new _.tj,e=new _.tj,f=new tIa;new IK(a,d,new jK,f,c);const g=_.Bo(b.getDiv()).createElement("canvas"),k={};a=_.$i(-100,-300,100,300);const m=new _.oF(a);a=_.$i(-90,-180,90,180);const q=_.Dwa(a,(B,C)=>B.marker==C.marker);let t=null,v=null;const w=new _.Bi(null),y=b.__gm;y.vb.then(function(B){y.m.register(new FK(k,y,w,B.fa.Pc));_.Xm(B.zk,function(C){if(C&&t!=
C.tb){v&&v.unbindAll();var F=t=C.tb;v=new uIa(k,d,e,function(E,J){return new HK(J,new DK(E,J,g,F),E)},m,q,t);v.bindTo("projection",b);w.set(v.ce())}})});_.zF(b,w,"markerLayer",-1)},xIa=function(a){a.ye||(a.ye=_.co(()=>{a.ye=0;const b=a.Gn;a.Gn={};const c=a.Ro;for(const d of Object.values(b))wIa(a,d);c&&!a.Ro&&a.km.forEach(d=>{wIa(a,d)})}))},wIa=function(a,b){var c=b.get("place");c=c?c.location:b.get("position");b.set("internalPosition",c);b.changed=a.ju;if(!b.get("animating"))if(a.zv.remove(b),!c||
0==b.get("visible")||b.__gm&&b.__gm.gh)a.km.remove(b);else{a.Ro&&!a.qx&&256<=a.km.getSize()&&(a.Ro=!1);c=b.get("optimized");const e=b.get("draggable"),f=!!b.get("animation");var d=b.get("icon");const g=!!d&&null!=d.path;d=iK(d);const k=null!=b.get("label");a.qx||0==c||e||f||g||d||k||!c&&a.Ro?_.uj(a.km,b):(a.km.remove(b),_.uj(a.zv,b))}},yIa=function(a,b){const c=new _.Ck;c.onAdd=()=>{};c.onContextLost=()=>{};c.onRemove=()=>{};c.onContextRestored=()=>{};c.onDraw=({transformer:d})=>{a.onDraw(d)};c.setMap(b);
return c},zIa=function(a){a.C||(a.C=setTimeout(()=>{const b=[...a.l].filter(c=>!c.ro).length;0<b&&a.bc.V(a.map,b);a.C=0},0))},AIa=function(a,b){a.m.has(b)||(a.m.add(b),_.ir(_.hr(),()=>{if(a.map){var c=[];for(const d of a.m){if(!d.map)continue;const e=d.targetElement;e.parentNode||c.push(d);d.gh||d.so?a.i.append(e):a.s.append(e)}a.m.clear();for(const d of c)d.ir(!0)}}))},BIa=function(a){KK||(KK=new ResizeObserver(b=>{for(const c of b)c.target.dispatchEvent(new CustomEvent("resize",{detail:c.contentRect}))}));
KK.observe(a)},EIa=function(a,b){const c=_.na(b);let d=LK.get(c);d||(d=new CIa(b),LK.set(c,d));b=d;DIa(a,b.F);b.l.add(a);zIa(b)},FIa=function(a){a=_.na(a);(a=LK.get(a))&&a.requestRedraw()},GIa=function(a){let b=0,c=0;for(const d of a)switch(d){case "ArrowLeft":--b;break;case "ArrowRight":b+=1;break;case "ArrowDown":c+=1;break;case "ArrowUp":--c}return{deltaX:b,deltaY:c}},NK=function(a,b){a.g.position=a.J;MK(a,b)},MK=function(a,b){b.preventDefault();b.stopImmediatePropagation();OK(a);HIa(a);a.l&&(a.l.release(),
a.l=null);PK(a.g,"dragend",b)},KIa=function(a){a.h.style.display="none";a.h.style.opacity="0.5";a.h.style.position="absolute";a.h.style.left="50%";a.h.style.transform="translate(-50%, -50%)";a.h.style.zIndex="-1";IIa(a);const b=a.g.Vg;b.addEventListener("pointerenter",a.R);b.addEventListener("pointerleave",a.T);b.addEventListener("focus",a.R);b.addEventListener("blur",a.T);JIa(a)},LIa=function(a,b=!1){return a.i?_.rr:b?"pointer":_.Zja},JIa=function(a){a.g.Vg.appendChild(a.h)},IIa=function(a){a.h.children[0]?.remove();
const b=a.g.dragIndicator;b&&a.h.appendChild(b)},NIa=function(a){if(!a.g.ax){a.l=new _.ZE((c,d)=>{var e=a.g;e.cc&&_.mh(e.cc,"panbynow",c,d)});_.YE(a.l,!0);var b=MIa(a.g);_.XE(a.l,b);a.l.s=a.m}},OIa=function(a,b){OK(a);a.m=!1;a.l&&(a.l.s=!1);a.o=a.g.Ag();a.F=$J(b)},QIa=function(a,b){var c=$J(b);if(c){b=c.clientX;c=c.clientY;var d=b-a.F.clientX,e=c-a.F.clientY;a.F={clientX:b,clientY:c};b={clientX:a.o.clientX+d,clientY:a.o.clientY+e};a.o=b;PIa(a.g,b)}},RIa=function(a,b){a.o=a.g.Ag();a.J=a.g.position;
a.F=$J(b);a.i=!0;NIa(a);a.g.Vg.setAttribute("aria-grabbed","true");QK(a.g);a.g.Vg.style.zIndex="2147483647";a.h.style.opacity="1";a.h.style.display="";PK(a.g,"dragstart",b)},SIa=function(a){a.m&&(a.o=a.g.Ag())},RK=function(a){2!==_.mp?(document.removeEventListener("pointermove",a.M),document.removeEventListener("pointerup",a.C),document.removeEventListener("pointercancel",a.C)):(document.removeEventListener("touchmove",a.M,{passive:!1}),document.removeEventListener("touchend",a.C),document.removeEventListener("touchcancel",
a.C));OK(a);HIa(a);a.l&&(a.l.release(),a.l=null)},OK=function(a){const b=a.g.Vg;b.removeEventListener("keydown",a.oa);b.removeEventListener("keyup",a.Ca);b.removeEventListener("blur",a.ka)},TIa=function(a){if(0===a.K.size)a.V=0;else{var {deltaX:b,deltaY:c}=GIa(a.K),d=1;_.TE(a.W)&&(d=a.W.next());var e=Math.round(3*d*b);d=Math.round(3*d*c);0===e&&(e=b);0===d&&(d=c);e={clientX:a.o.clientX+e,clientY:a.o.clientY+d};a.o=e;PIa(a.g,e);a.V=window.setTimeout(()=>{TIa(a)},10)}},HIa=function(a){a.i=!1;a.m=!1;
a.F=null;a.o=null;a.J=null;a.O=null;a.D=null;const b=a.g.Vg,c=a.g.zIndex;a.h.style.opacity="0.5";b.setAttribute("aria-grabbed","false");b.style.zIndex=null==c?"":`${c}`;UIa(a.g)},DIa=function(a,b){a.Js=b;if(a.gn){var c=a.element.getAttribute("aria-describedby");c=c?c.split(" "):[];c.push(b);a.element.setAttribute("aria-describedby",c.join(" "))}},MIa=function(a){return a.cc?a.cc.get("pixelBounds"):null},PK=function(a,b,c){a.kf(b,new _.It(a.Qi,c,a.zo?new _.oi(a.zo.aa,a.zo.ca):null))},PIa=function(a,
b){{const d=a.cc?.get("projectionController");if(a.cc&&b&&d){var c=a.cc.pm.getBoundingClientRect();b=d.fromContainerPixelToLatLng(new _.oi(b.clientX-c.left,b.clientY-c.top))}else b=null}b&&(a.position=b)},QK=function(a){a.kf("REMOVE_COLLISION")},UIa=function(a){a.element.style.cursor=a.Vb?LIa(a.Vb,a.oo):a.oo?"pointer":""},TK=function(a,b=!1){SK(a)&&(a.cc&&dHa(a.cc.O,a),a.kf("UPDATE_MARKER_COLLISION"),b&&a.Fp&&a.kf("UPDATE_BASEMAP_COLLISION"))},UK=function(a){a.Rb.style.pointerEvents="none";a.Kx?(_.Wm(a.Rb,
"interactive"),a.element.style.pointerEvents="none",a.content&&a.content.nodeType===Node.TEXT_NODE&&(a.Rb.style.pointerEvents="auto")):(a.Rb.classList.remove(...["interactive"].map(_.zi)),a.element.style.pointerEvents=a.uo?"none":"")},VK=function(a){a.zg=a.oo||!!a.gn},VIa=function(a,b){var c;if(c=a.Vb)c=a.Vb,c=c.D&&500<=b.timeStamp-c.D?!0:c.s;!c&&a.Qi&&(a.gmpDraggable||a.element.focus(),PK(a,"click",b),a.bc.C(b))},WIa=function(a){a.Xd||(a.Xd=_.np(a.element,{Ue:({event:b,Kj:c})=>{a.Kx?(_.fo(b.La),
3===b.button||c||VIa(a,b.La)):a.element===b.La.target||a.uo||(console.debug('To make AdvancedMarkerElement clickable and provide better accessible experiences, use addListener() to register a "click" event on the AdvancedMarkerElement instance.'),a.bc.F(a.map))}}))},SK=function(a){return"REQUIRED"!==a.collisionBehavior&&!a.lh&&!!a.map&&!!a.position},XIa=function(a,b,c){if(b&&c&&({altitude:b}=new _.Nl(b),0<b||0>b))throw a.bc.J(window),_.mg("Draggable AdvancedMarkerElement with non-zero altitude is not supported");
},WK=function(a){if(a.cc&&!a.lh){var b=a.cc.K;b&&(a.zg&&a.Sj&&!a.gh?b.R(a):a.kf("REMOVE_FOCUS"))}},YIa=function(a){if(!a.ro){var b=a.cc.g;b.s.then(()=>{const c=_.kj(b,"ADVANCED_MARKERS");if(!c.isAvailable){a.dispose();a.cc&&a.cc.oa();for(const d of c.g)b.log(d);a.bc.D(a.map)}})}},ZIa=function(a){a.bc.T(a.map);a.bc.K(a.map,a.rK);a.bc.l(a.map,a.uo);if(a.oo){const b=_.ch(a,"gmp-click");a.bc.h(a.map,b)}a.gmpDraggable&&a.bc.m(a.map);a.title&&a.bc.o(a.map);null!==a.zIndex&&a.bc.s(a.map);0<a.Jf()&&a.bc.g(a.map);
a.bc.i(a.map,a.collisionBehavior)},$Ia=function(a){var b=nHa(a.Gd,a.Qi);a.sd?a.sd.setPosition(b,a.Jf()):a.fa&&(b=new _.CG(a.fa.Pc,a,b,a.fa,null,a.Jf(),a.wJ),a.fa.Qb(b),a.sd=b)},aJa=function(a,b){a.Sj=b;a.Vb&&SIa(a.Vb);a.xm.set("pixelPosition",b);if(b){a.element.style.transform=`translate(-50%, -100%) translate(${b.x}px, ${b.y}px)`;const c=a.element.style.willChange?a.element.style.willChange.replace(/\s+/g,"").split(","):[];c.includes("transform")||_.ir(_.hr(),()=>{c.push("transform");a.element.style.willChange=
c.join(",")},a,a)}WK(a)},THa=["click","dblclick","rightclick","contextmenu"],bJa={Ei:function(a){if(!a)return null;try{const b=_.Sca(a);if(2>b.length)throw Error("too few values");if(3<b.length)throw Error("too many values");const [c,d,e]=b;return new _.Nl({lat:c,lng:d,altitude:e})}catch(b){return console.error(`Could not interpret "${a}" as a LatLngAltitude: `+`${b instanceof Error?b.message:b}`),null}},Vm:YJ};_.ua(aK,_.ph);
aK.prototype.position_changed=function(){this.g||(this.g=!0,this.set("rawPosition",this.get("position")),this.g=!1)};aK.prototype.rawPosition_changed=function(){if(!this.g){this.g=!0;var a=this.set,b;var c=this.get("rawPosition");if(c){(b=this.get("snappingCallback"))&&(c=b(c));b=c.x;c=c.y;var d=this.get("referencePosition");d&&(2==this.h?b=d.x:1==this.h&&(c=d.y));b=new _.oi(b,c)}else b=null;a.call(this,"position",b);this.g=!1}};
var cJa=class{constructor(a,b,c,d,e=0,f=0){this.width=c;this.height=d;this.offsetX=e;this.offsetY=f;this.g=new Float64Array(2);this.g[0]=a;this.g[1]=b;this.h=new Float32Array(2)}transform(a){a.Wm(1,this.g,this.h,0,0,0);this.h[0]+=this.offsetX;this.h[1]+=this.offsetY}isVisible(a){return this.h[0]>=-this.width&&this.h[0]<=a.width+this.width&&this.h[1]>=-this.height&&this.h[1]<=a.height+this.height}equals(a){return this.g[0]===a.g[0]&&this.g[1]===a.g[1]&&this.width===a.width&&this.height===a.height&&
this.offsetX===a.offsetX&&this.offsetY===a.offsetY}i(a){return this.h[0]>a.right||this.h[0]+this.width<a.left||this.h[1]>a.bottom||this.h[1]+this.height<a.top?!1:!0}};var CHa={linear:a=>a,["ease-out"]:a=>1-Math.pow(a-1,2),["ease-in"]:a=>Math.pow(a,2)},XK=class{constructor(a){this.frames=a;this.g=""}},bK;var NHa={[1]:{options:{duration:700,zf:"infinite"},icon:new XK([{time:0,translate:[0,0],Cf:"ease-out"},{time:.5,translate:[0,-20],Cf:"ease-in"},{time:1,translate:[0,0],Cf:"ease-out"}])},[2]:{options:{duration:500,zf:1},icon:new XK([{time:0,translate:[0,-500],Cf:"ease-in"},{time:.5,translate:[0,0],Cf:"ease-out"},{time:.75,translate:[0,-20],Cf:"ease-in"},{time:1,translate:[0,0],Cf:"ease-out"}])},[3]:{options:{duration:200,Co:20,zf:1,gz:!1},icon:new XK([{time:0,translate:[0,0],Cf:"ease-in"},{time:1,
translate:[0,-20],Cf:"ease-out"}])},[4]:{options:{duration:500,Co:20,zf:1,gz:!1},icon:new XK([{time:0,translate:[0,-20],Cf:"ease-in"},{time:.5,translate:[0,0],Cf:"ease-out"},{time:.75,translate:[0,-10],Cf:"ease-in"},{time:1,translate:[0,0],Cf:"ease-out"}])}};var jK=class{constructor(){this.icon={url:_.Kk("api-3/images/spotlight-poi3",!0),scaledSize:new _.qi(26,37),origin:new _.oi(0,0),anchor:new _.oi(13,37),labelOrigin:new _.oi(13,14)};this.h={url:_.Kk("api-3/images/spotlight-poi-dotless3",!0),scaledSize:new _.qi(26,37),origin:new _.oi(0,0),anchor:new _.oi(13,37),labelOrigin:new _.oi(13,14)};this.g={url:_.Kk("api-3/images/drag-cross",!0),scaledSize:new _.qi(13,11),origin:new _.oi(0,0),anchor:new _.oi(7,6)};this.shape={coords:[13,0,4,3.5,0,12,2.75,21,
13,37,23.5,21,26,12,22,3.5],type:"poly"}}};var dJa={DEFAULT:"DEFAULT",FO:"PIN",GO:"PINLET"};var eK=_.zi("maps-pin-view-background"),dK=_.zi("maps-pin-view-border"),fK=_.zi("maps-pin-view-default-glyph");var hK=class extends _.Wl{constructor(a={}){super();this.fn=this.Nh=this.en=this.Ip=void 0;this.tj=null;this.Vr=document.createElement("div");_.Wm(this.element,"maps-pin-view");this.shape=this.Df("shape",()=>_.zg(_.qg(dJa))(a.shape)||"DEFAULT");this.Fs("shape");let b=15,c=5.5;switch(this.shape){case "PIN":YK||(YK=gK("PIN"));var d=YK;b=13;c=7;break;case "PINLET":ZK||(ZK=gK("PINLET"));d=ZK;b=9;c=5;break;default:$K||($K=gK("DEFAULT")),d=$K,b=15,c=5.5}this.element.style.display="grid";this.element.style.setProperty("grid-template-columns",
"auto");this.element.style.setProperty("grid-template-rows",`${c}px auto`);this.element.style.setProperty("gap","0px");this.element.style.setProperty("justify-items","center");this.element.style.pointerEvents="none";this.element.style.userSelect="none";this.Ze=d.cloneNode(!0);this.Ze.style.display="block";this.Ze.style.overflow="visible";this.Ze.style.gridArea="1";this.wC=Number(this.Ze.getAttribute("width"));this.vC=Number(this.Ze.getAttribute("height"));this.Ze.querySelector("g").style.pointerEvents=
"auto";this.Tw=this.Ze.querySelector(`.${eK}`).getAttribute("fill")||"";d=void 0;const e=this.Ze.querySelector(`.${dK}`);e&&("DEFAULT"===this.shape?d=e.getAttribute("fill"):"PIN"===this.shape&&(d=e.getAttribute("stroke")));this.Uw=d||"";d=void 0;(this.mq=this.Ze.querySelector(`.${fK}`))&&(d=this.mq.getAttribute("fill"));this.Vw=d||"";this.element.appendChild(this.Ze);this.xf=document.createElement("div");this.PJ=b;this.QJ=c;this.xf.style.setProperty("grid-area","2");this.xf.style.display="flex";this.xf.style.alignItems=
"center";this.xf.style.justifyContent="center";this.element.appendChild(this.xf);this.background=a.background;this.borderColor=a.borderColor;this.glyph=a.glyph;this.glyphColor=a.glyphColor;this.scale=a.scale;_.hi(window,"Pin");_.fi(window,149597);this.Lh(a,hK,"PinElement")}get element(){return this.Vr}get background(){return this.Ip}set background(a){a=this.Df("background",()=>(0,_.Gl)(a))||this.Tw;this.Ip!==a&&(this.Ip=a,this.Ze.querySelector(`.${eK}`).setAttribute("fill",this.Ip),this.kf("changed"),
this.Ip===this.Tw?(_.hi(window,"Pdbk"),_.fi(window,160660)):(_.hi(window,"Pvcb"),_.fi(window,160662)))}get borderColor(){return this.en}set borderColor(a){a=this.Df("borderColor",()=>(0,_.Gl)(a))||this.Uw;if(this.en!==a){this.en=a;var b=this.Ze.querySelector(`.${dK}`);b&&("DEFAULT"===this.shape?b.setAttribute("fill",this.en):b.setAttribute("stroke",this.en));this.kf("changed");this.en===this.Uw?(_.hi(window,"Pdbc"),_.fi(window,160663)):(_.hi(window,"Pcbc"),_.fi(window,160664))}}get glyph(){return this.Nh}set glyph(a){var b=
this.Df("glyph",()=>_.zg(_.tg([_.Dl,_.pg(Element,"Element"),_.pg(URL,"URL")]))(a));b=null==b?null:b;if(this.Nh!==b){this.Nh=b;if(b=this.Ze.querySelector(`.${fK}`))b.style.display=null==this.Nh?"":"none";null==this.Nh&&cK(0);this.xf.textContent="";this.Nh instanceof Element?(this.xf.appendChild(this.Nh),cK(1)):"string"===typeof this.Nh?(this.xf.appendChild(document.createTextNode(this.Nh)),cK(2)):this.Nh instanceof URL&&cK(3);sHa(this);this.kf("changed")}}get glyphColor(){return this.fn}set glyphColor(a){const b=
this.Df("glyphColor",()=>(0,_.Gl)(a))||null;this.fn!==b&&(this.fn=b,sHa(this),this.kf("changed"),null==this.fn||this.fn===this.Vw?(_.hi(window,"Pdgc"),_.fi(window,160669)):(_.hi(window,"Pcgc"),_.fi(window,160670)))}get scale(){return this.tj}set scale(a){a=this.Df("scale",()=>_.zg(_.yg(_.Cl,_.Bl))(a));null==a&&(a=1);if(this.tj!==a){this.tj=a;var b=this.getSize();this.Ze.setAttribute("width",`${b.width}px`);this.Ze.setAttribute("height",`${b.height}px`);this.element.style.width=`${b.width}px`;this.element.style.height=
`${b.height}px`;b=Math.round(this.PJ*this.tj);this.xf.style.width=`${b}px`;this.xf.style.height=`${b}px`;this.element.style.setProperty("grid-template-rows",`${this.QJ*this.tj}px auto`);this.kf("changed");1===this.tj?(_.hi(window,"Pds"),_.fi(window,160671)):(_.hi(window,"Pcs"),_.fi(window,160672))}}getAnchor(){return new _.oi(this.getSize().width/2,this.getSize().height-1*this.tj)}getSize(){return new _.qi(2*Math.round(this.wC*this.tj/2),2*Math.round(this.vC*this.tj/2))}Df(a,b){return _.Bg("PinElement",
a,b)}addListener(a,b){return _.bh(this,a,b)}addEventListener(){throw Error(`<${this.localName}>: ${"addEventListener is unavailable in this version."}`);}};hK.prototype.addEventListener=hK.prototype.addEventListener;hK.prototype.constructor=hK.prototype.constructor;hK.Os={rt:182482,As:182481};var $K=null,ZK=null,YK=null;XJ("gmp-internal-pin",hK);var lK;_.ua(mK,_.ph);mK.prototype.changed=function(a){"modelIcon"!==a&&"modelShape"!==a&&"modelCross"!==a&&"modelLabel"!==a||_.ir(_.hr(),this.i,this,this)};mK.prototype.i=function(){const a=this.get("modelIcon");var b=this.get("modelLabel");xHa(this,"viewIcon",a||b&&lK.h||lK.icon);xHa(this,"viewCross",lK.g);b=this.get("useDefaults");let c=this.get("modelShape");c||a&&!b||(c=lK.shape);this.get("viewShape")!=c&&this.set("viewShape",c)};_.ua(nK,_.ph);nK.prototype.changed=function(){if(!this.h){var a=yHa(this);this.g!=a&&(this.g=a,this.h=!0,this.set("shouldRender",this.g),this.h=!1)}};_.ua(oK,_.ph);oK.prototype.internalPosition_changed=function(){if(!this.g){this.g=!0;var a=this.get("position"),b=this.get("internalPosition");a&&b&&!a.equals(b)&&this.set("position",this.get("internalPosition"));this.g=!1}};
oK.prototype.place_changed=oK.prototype.position_changed=oK.prototype.draggable_changed=function(){if(!this.g){this.g=!0;if(this.h){const a=this.get("place");a?this.set("internalPosition",a.location):this.set("internalPosition",this.get("position"))}this.get("place")?this.set("actuallyDraggable",!1):this.set("actuallyDraggable",this.get("draggable"));this.g=!1}};var JHa=class{constructor(a,b,c,d,e){this.opacity=c;this.origin=void 0;this.Ye=a;this.label=b;this.visible=d;this.zIndex=0;this.g=null;this.h=new _.qj(this.o,0,this);this.l=e;this.i=this.m=null}setOpacity(a){this.opacity=a;_.rj(this.h)}setLabel(a){this.label=a;_.rj(this.h)}setVisible(a){this.visible=a;_.rj(this.h)}setZIndex(a){this.zIndex=a;_.rj(this.h)}release(){this.Ye=null;pK(this)}o(){if(this.Ye&&this.label&&0!=this.visible){var a=this.Ye.markerLayer,b=this.label;this.g?a.appendChild(this.g):
(this.g=_.Go("div",a),this.g.style.transform="translateZ(0)");a=this.g;this.origin&&_.Fo(a,this.origin);var c=a.firstElementChild;c||(c=_.Go("div",a),c.style.height="100px",c.style.transform="translate(-50%, -50px)",c.style.display="table",c.style.borderSpacing="0");let d=c.firstElementChild;d||(d=_.Go("div",c),d.style.display="table-cell",d.style.verticalAlign="middle",d.style.whiteSpace="nowrap",d.style.textAlign="center");c=d.firstElementChild||_.Go("div",d);c.textContent=b.text;c.style.color=
b.color;c.style.fontSize=b.fontSize;c.style.fontWeight=b.fontWeight;c.style.fontFamily=b.fontFamily;c.className=b.className;c.setAttribute("aria-hidden","true");if(this.l&&b!==this.i){this.i=b;const {width:e,height:f}=c.getBoundingClientRect();b=new _.qi(e,f);b.equals(this.m)||(this.m=b,this.l(b))}_.Sz(c,_.dg(this.opacity,1));_.Ho(a,this.zIndex)}else pK(this)}};qK.GC=_.Io;qK.ownerDocument=_.Bo;var QHa=(0,_.pa)(qK,null,function(a){return new _.wF(a)});var EHa=class{constructor(a,b,c){this.element=a;this.animation=b;this.options=c;this.h=!1;this.g=null}start(){this.options.zf=this.options.zf||1;this.options.duration=this.options.duration||1;_.ih(this.element,"webkitAnimationEnd",()=>{this.h=!0;_.mh(this,"done")});AHa(this.element,rHa(this.animation),this.options)}cancel(){this.g&&(this.g.remove(),this.g=null);AHa(this.element,null,{});_.mh(this,"done")}stop(){this.h||(this.g=_.ih(this.element,"webkitAnimationIteration",()=>{this.cancel()}))}};var rK=[],sK=null,FHa=class{constructor(a,b,c){this.element=a;this.animation=b;this.zf=-1;this.g=!1;this.startTime=0;"infinity"!==c.zf&&(this.zf=c.zf||1);this.duration=c.duration||1E3}start(){rK.push(this);sK||(sK=window.setInterval(BHa,10));this.startTime=Date.now();this.Oc()}cancel(){this.g||(this.g=!0,DHa(this,1),_.mh(this,"done"))}stop(){this.g||(this.zf=1)}Oc(){if(!this.g){var a=Date.now();DHa(this,(a-this.startTime)/this.duration);a>=this.startTime+this.duration&&(this.startTime=Date.now(),
"infinite"!==this.zf&&(this.zf--,this.zf||this.cancel()))}}};var eJa=_.ia.DEF_DEBUG_MARKERS,aL=class extends _.ph{constructor(a,b,c){super();this.Ea=new _.qj(()=>{var d=this.get("panes"),e=this.get("scale");if(!d||!this.getPosition()||0==this.Ab()||_.bg(e)&&.1>e&&!this.lh)wK(this);else{IHa(this,d.markerLayer);if(!this.J){var f=this.X();if(f){var g=f.url;e=0!=this.get("clickable");var k=this.getDraggable(),m=this.get("title")||"",q=m;q||(q=(q=this.ea())?q.text:"");if(e||k||q){var t=!e&&!k&&!m,v=iK(f),w=zK(f),y=this.get("shape"),B=kK(f),C={};if(_.Lo())f=B.width,
B=B.height,v=new _.qi(f+16,B+16),f={url:_.Dt,size:v,anchor:w?new _.oi(w.x+8,w.y+8):new _.oi(Math.round(f/2)+8,B+8),scaledSize:v};else{const E=f.scaledSize||B;(_.Lj.h||_.Lj.g)&&y&&(C.shape=y,B=E);if(!v||y)f={url:_.Dt,size:B,anchor:w,scaledSize:E}}w=null!=f.url;this.Ya===w&&vK(this);this.Ya=!w;C=this.targetElement=xK(this,this.getPanes().overlayMouseTarget,this.targetElement,f,C);this.targetElement.style.pointerEvents=t?"none":"";if(t=C.querySelector("img"))t.style.removeProperty("position"),t.style.removeProperty("opacity"),
t.style.removeProperty("left"),t.style.removeProperty("top");t=C;if((w=t.getAttribute("usemap")||t.firstChild&&t.firstChild.getAttribute("usemap"))&&w.length&&(t=_.Bo(t).getElementById(w.substr(1))))var F=t.firstChild;F&&(F.tabIndex=-1,F.style.display="inline",F.style.position="absolute",F.style.left="0px",F.style.top="0px");eJa&&(C.dataset.debugMarkerImage=g);C=F||C;C.title=m;q&&this.Gi().setAttribute("aria-label",q);this.mp();k&&!this.o&&(g=this.o=new _.$E(C,this.R,this.targetElement),this.R?(g.bindTo("deltaClientPosition",
this),g.bindTo("position",this)):g.bindTo("position",this.N,"rawPosition"),g.bindTo("containerPixelBounds",this,"mapPixelBounds"),g.bindTo("anchorPoint",this),g.bindTo("size",this),g.bindTo("panningEnabled",this),this.M||(this.M=[_.lh(g,"dragstart",this),_.lh(g,"drag",this),_.lh(g,"dragend",this),_.lh(g,"panbynow",this)]));g=this.get("cursor")||"pointer";k?this.o.set("draggableCursor",g):C.style.cursor=e?g:"";RHa(this,C)}}}d=d.overlayLayer;if(k=e=this.get("cross"))k=this.get("crossOnDrag"),void 0===
k&&(k=this.get("raiseOnDrag")),k=0!=k&&this.getDraggable()&&this.lh;k?this.l=xK(this,d,this.l,e):(this.l&&_.Oo(this.l),this.l=null);this.s=[this.h,this.l,this.targetElement];MHa(this);for(d=0;d<this.s.length;++d)if(e=this.s[d])g=e.h,m=tK(e)||_.Gi,k=yK(this),g=KHa(this,g,k,m),_.Fo(e,g),(g=_.yo().transform)&&(e.style[g]=1!=k?"scale("+k+") ":""),e&&_.Ho(e,LHa(this));OHa(this);for(d=0;d<this.s.length;++d)(e=this.s[d])&&_.Rz(e);_.mh(this,"UPDATE_FOCUS")}},0);this.Jc=a;this.ac=c;this.R=b||!1;this.N=new aK(0);
this.N.bindTo("position",this);this.m=this.h=null;this.Za=[];this.Ja=!1;this.targetElement=null;this.Ya=!1;this.l=null;this.s=[];this.ia=new _.oi(0,0);this.O=new _.qi(0,0);this.K=new _.oi(0,0);this.T=!0;this.J=0;this.i=this.Fa=this.ub=this.jb=null;this.V=!1;this.Ca=[_.bh(this,"dragstart",this.Zb),_.bh(this,"dragend",this.Bb),_.bh(this,"panbynow",()=>this.Ea.Sc())];this.oa=this.D=this.C=this.o=this.F=this.M=null;this.W=!1;this.getPosition=_.Sh("position");this.getPanes=_.Sh("panes");this.Ab=_.Sh("visible");
this.X=_.Sh("icon");this.ea=_.Sh("label");this.Di=null}Ay(){}get zg(){return this.W}set zg(a){this.W!==a&&(this.W=a,_.mh(this,"UPDATE_FOCUS"))}get lh(){return this.get("dragging")}panes_changed(){wK(this);_.rj(this.Ea)}Ah(a){this.set("position",a&&new _.oi(a.aa,a.ca))}yl(){this.unbindAll();this.set("panes",null);this.i&&this.i.stop();this.F&&(_.dh(this.F),this.F=null);this.i=null;uK(this.Ca);this.Ca=[];wK(this);_.mh(this,"RELEASED")}ka(){var a;if(!(a=this.jb!=(0!=this.get("clickable"))||this.ub!=
this.getDraggable())){a=this.Fa;var b=this.get("shape");a=!(null==a||null==b?a==b:a.type==b.type&&_.Ry(a.coords,b.coords))}a&&(this.jb=0!=this.get("clickable"),this.ub=this.getDraggable(),this.Fa=this.get("shape"),vK(this),_.rj(this.Ea))}g(){_.rj(this.Ea)}position_changed(){this.R?this.Ea.Sc():_.rj(this.Ea)}Gi(){return this.targetElement}mp(){const a=this.Gi();if(a){var b=!!this.get("title");b||(b=(b=this.ea())?!!b.text:!1);this.zg?a.setAttribute("role","button"):b?a.setAttribute("role","img"):a.removeAttribute("role")}}Dq(a){_.mh(this,
"click",a);_.hi(window,"Mki");_.fi(window,171149)}sp(){}Dx(a){_.fo(a);_.mh(this,"click",a);_.hi(window,"Mmi");_.fi(window,171150)}Cq(){}getDraggable(){return!!this.get("draggable")}Zb(){this.set("dragging",!0);this.N.set("snappingCallback",this.Jc)}Bb(){this.N.set("snappingCallback",null);this.set("dragging",!1)}animation_changed(){this.T=!1;this.get("animation")?OHa(this):(this.set("animating",!1),this.i&&this.i.stop())}Jx(a){const b=this.get("markerPosition");return this.Di&&b&&this.Di.size?vHa(a,
this.targetElement):!1}};_.G=aL.prototype;_.G.shape_changed=aL.prototype.ka;_.G.clickable_changed=aL.prototype.ka;_.G.draggable_changed=aL.prototype.ka;_.G.cursor_changed=aL.prototype.g;_.G.scale_changed=aL.prototype.g;_.G.raiseOnDrag_changed=aL.prototype.g;_.G.crossOnDrag_changed=aL.prototype.g;_.G.zIndex_changed=aL.prototype.g;_.G.opacity_changed=aL.prototype.g;_.G.title_changed=aL.prototype.g;_.G.cross_changed=aL.prototype.g;_.G.icon_changed=aL.prototype.g;_.G.visible_changed=aL.prototype.g;
_.G.dragging_changed=aL.prototype.g;var XHa="click dblclick mouseup mousedown mouseover mouseout rightclick dragstart drag dragend contextmenu".split(" "),gIa=class{constructor(a,b,c,d,e,f,g){this.i=b;this.h=a;this.N=e;this.F=b instanceof _.yh;this.R=f;this.l=g;f=AK(this);b=this.F&&f?_.qo(f,b.getProjection()):null;this.g=new aL(d,!!this.F,k=>{this.g.Di=a.__gm.Di={...a.__gm.Di,nQ:k};a.__gm.rq&&a.__gm.rq()});_.bh(this.g,"RELEASED",()=>{var k=this.g;if(this.l&&this.l.has(k)){({px:k}=this.l.get(k));for(const m of k)m.remove()}this.l&&this.l.delete(this.g)});
this.R&&this.l&&!this.l.has(this.g)&&(this.l.set(this.g,{marker:this.h,px:[]}),this.R.C(this.g),BK(this,this.g),UHa(this,this.g));this.J=!0;this.K=this.M=null;(this.m=this.F?new _.CG(e.Pc,this.g,b,e,()=>{if(this.g.get("dragging")&&!this.h.get("place")){var k=this.m.getPosition();k&&(k=_.ro(k,this.i.get("projection")),this.J=!1,this.h.set("position",k),this.J=!0)}}):null)&&e.Qb(this.m);this.s=new mK(c,(k,m,q)=>{this.g.Di=a.__gm.Di={...a.__gm.Di,size:k,anchor:m,labelOrigin:q};a.__gm.rq&&a.__gm.rq()});
this.sb=this.F?null:new _.QE;this.C=this.F?null:new nK;this.D=new _.ph;this.D.bindTo("position",this.h);this.D.bindTo("place",this.h);this.D.bindTo("draggable",this.h);this.D.bindTo("dragging",this.h);this.s.bindTo("modelIcon",this.h,"icon");this.s.bindTo("modelLabel",this.h,"label");this.s.bindTo("modelCross",this.h,"cross");this.s.bindTo("modelShape",this.h,"shape");this.s.bindTo("useDefaults",this.h,"useDefaults");this.g.bindTo("icon",this.s,"viewIcon");this.g.bindTo("label",this.s,"viewLabel");
this.g.bindTo("cross",this.s,"viewCross");this.g.bindTo("shape",this.s,"viewShape");this.g.bindTo("title",this.h);this.g.bindTo("cursor",this.h);this.g.bindTo("dragging",this.h);this.g.bindTo("clickable",this.h);this.g.bindTo("zIndex",this.h);this.g.bindTo("opacity",this.h);this.g.bindTo("anchorPoint",this.h);this.g.bindTo("markerPosition",this.h,"position");this.g.bindTo("animation",this.h);this.g.bindTo("crossOnDrag",this.h);this.g.bindTo("raiseOnDrag",this.h);this.g.bindTo("animating",this.h);
this.C||this.g.bindTo("visible",this.h);VHa(this);WHa(this);this.o=[];YHa(this);this.F?(ZHa(this),$Ha(this),bIa(this)):(cIa(this),this.sb&&(this.C.bindTo("visible",this.h),this.C.bindTo("cursor",this.h),this.C.bindTo("icon",this.h),this.C.bindTo("icon",this.s,"viewIcon"),this.C.bindTo("mapPixelBoundsQ",this.i.__gm,"pixelBoundsQ"),this.C.bindTo("position",this.sb,"pixelPosition"),this.g.bindTo("visible",this.C,"shouldRender")),dIa(this))}dispose(){this.g.set("animation",null);this.g.yl();this.N&&this.m?
this.N.Gg(this.m):this.g.yl();this.C&&this.C.unbindAll();this.sb&&this.sb.unbindAll();this.s.unbindAll();this.D.unbindAll();_.yb(this.o,_.dh);this.o.length=0}};DK.prototype.ow=function(a){const b=jIa(this),c=hIa(this),d=EK(c),e=Math.round(a.dx*d),f=Math.round(a.dy*d),g=Math.ceil(a.Ai*d);a=Math.ceil(a.yi*d);const k=iIa(this,g,a),m=k.getContext("2d");m.translate(-e,-f);b.forEach(function(q){m.globalAlpha=_.dg(q.opacity,1);m.drawImage(q.image,q.Qm,q.Rm,q.xp,q.op,Math.round(q.dx*d),Math.round(q.dy*d),q.Ai*d,q.yi*d)});c.clearRect(e,f,g,a);c.globalAlpha=1;c.drawImage(k,e,f)};DK.prototype.dM=DK.prototype.ow;var tIa=class{constructor(){this.g=_.Iz().Kp}load(a,b){return this.g.load(new _.LE(a.url),function(c){if(c){var d=c.size,e=a.size||a.scaledSize||d;a.size=e;var f=a.anchor||new _.oi(e.width/2,e.height),g={};g.image=c;c=a.scaledSize||d;var k=c.width/d.width,m=c.height/d.height;g.Qm=a.origin?a.origin.x/k:0;g.Rm=a.origin?a.origin.y/m:0;g.dx=-f.x;g.dy=-f.y;g.Qm*k+e.width>c.width?(g.xp=d.width-g.Qm*k,g.Ai=c.width):(g.xp=e.width/k,g.Ai=e.width);g.Rm*m+e.height>c.height?(g.op=d.height-g.Rm*m,g.yi=c.height):
(g.op=e.height/m,g.yi=e.height);b(g)}else b(null)})}cancel(a){this.g.cancel(a)}};FK.prototype.h=function(a){return"dragstart"!==a&&"drag"!==a&&"dragend"!==a};FK.prototype.i=function(a,b){return b?GK(this,a,-8,0)||GK(this,a,0,-8)||GK(this,a,8,0)||GK(this,a,0,8):GK(this,a,0,0)};
FK.prototype.handleEvent=function(a,b,c){const d=b.kc;if("mouseout"===a)this.g.set("cursor",""),this.g.set("title",null);else if("mouseover"===a){var e=d.Do;this.g.set("cursor",e.cursor);(e=e.title)&&this.g.set("title",e)}let f;d&&"mouseout"!==a?f=d.Do.latLng:f=b.latLng;"dblclick"===a&&_.$g(b.domEvent);_.mh(c,a,new _.It(f,b.domEvent))};FK.prototype.zIndex=40;var uIa=class extends _.Ak{constructor(a,b,c,d,e,f,g){super();this.m=a;this.s=d;this.i=c;this.h=e;this.l=f;this.g=g||_.Qt;b.g=k=>{nIa(this,k)};b.onRemove=k=>{oIa(this,k)};b.forEach(k=>{nIa(this,k)})}ce(){return{tb:this.g,ue:2,Vd:this.o.bind(this)}}o(a,b={}){const c=document.createElement("div"),d=this.g.size;c.style.width=`${d.aa}px`;c.style.height=`${d.ca}px`;c.style.overflow="hidden";a={va:c,zoom:a.za,nb:new _.oi(a.la,a.na),ki:{},oc:new _.tj};c.nd=a;pIa(this,a);let e=!1;return{Ib:()=>c,yf:()=>e,
loaded:new Promise(f=>{_.kh(c,"load",()=>{e=!0;f()})}),release:()=>{const f=c.nd;c.nd=null;qIa(this,f);c.textContent="";b.Kc&&b.Kc()}}}};HK.prototype.ee=function(a){rIa(this,a,!0)};HK.prototype.cg=function(a){rIa(this,a,!1)};HK.prototype.i=function(){this.g&&kIa(this.h);this.g=!1;this.ye=null;this.l=0;_.je(_.Cm(_.mh,this.m,"load"))};IK.prototype.ee=function(a){var b=a.get("internalPosition"),c=a.get("zIndex");const d=a.get("opacity"),e=a.__gm.Gq={l:a,latLng:b,zIndex:c,opacity:d,oc:{}};b=a.get("useDefaults");c=a.get("icon");let f=a.get("shape");f||c&&!b||(f=this.g.shape);const g=c?this.m(c):this.g.icon,k=this,m=iHa(function(){if(e==a.__gm.Gq&&(e.g||e.i)){var q=f;if(e.g){var t=g.size;var v=a.get("anchorPoint");if(!v||v.g)v=new _.oi(e.g.dx+t.width/2,e.g.dy),v.g=!0,a.set("anchorPoint",v)}else t=e.i.size;q?q.coords=q.coords||q.coord:
q={type:"rect",coords:[0,0,t.width,t.height]};e.shape=q;e.clickable=a.get("clickable");e.title=a.get("title")||null;e.cursor=a.get("cursor")||"pointer";_.uj(k.h,e)}});g.url?this.l.load(g,function(q){e.g=q;m()}):(e.i=this.i(g),m())};IK.prototype.cg=function(a){this.h.remove(a.__gm.Gq);delete a.__gm.Gq};var JK=new Map;var fJa=class{constructor(a,b,c,d){this.Gn={};this.ye=0;this.Ro=!0;const e=this;this.zv=b;this.km=c;this.qx=d;const f={animating:1,animation:1,attribution:1,clickable:1,cursor:1,draggable:1,flat:1,icon:1,label:1,opacity:1,optimized:1,place:1,position:1,shape:1,__gmHiddenByCollision:1,title:1,visible:1,zIndex:1};this.ju=function(g){g in f&&(delete this.changed,e.Gn[_.oh(this)]=this,xIa(e))};a.g=g=>{e.ee(g)};a.onRemove=g=>{e.cg(g)};a=a.h;for(const g of Object.values(a))this.ee(g)}ee(a){this.Gn[_.oh(a)]=
a;xIa(this)}cg(a){delete a.changed;delete this.Gn[_.oh(a)];this.zv.remove(a);this.km.remove(a)}};var gJa=class{T(){}N(){}h(){}i(){}K(){}l(){}D(){}J(){}s(){}m(){}o(){}F(){}M(){}g(){}R(){}O(){}W(){}V(){}C(){}};var hJa=(0,_.Im)`.yNHHyP-marker-view .IPAZAH-content-container\u003e*{pointer-events:none}.yNHHyP-marker-view .IPAZAH-content-container.HJDHPx-interactive\u003e*{pointer-events:auto}\n`;var CIa=class{constructor(a){this.bc=iJa;this.g=null;this.D=!1;this.C=0;this.map=a;this.l=new Set;this.m=new Set;this.F=`maps-aria-${_.Gk()}`;this.h=document.createElement("span");this.h.id=this.F;this.h.textContent="Para activar la funci\u00f3n de arrastre con el teclado, pulsa Alt + Intro o Alt + Espacio. Cuando hayas habilitado esa opci\u00f3n, utiliza las teclas de flecha para mover el marcador. Para completar el arrastre, pulsa Intro o Espacio. Para cancelar el arrastre y volver a la posici\u00f3n original, pulsa Alt + Intro, Alt + Espacio o Escape";
this.h.style.display="none";this.s=document.createElement("div");this.i=document.createElement("div");CSS.supports("content-visibility: hidden")?this.i.style.contentVisibility="hidden":this.i.style.visibility="hidden";this.o=document.createElement("div");this.o.append(this.s,this.i);const b=a.__gm;this.K=b.pm;this.J=new Promise(c=>{b.i.then(d=>{this.map&&(d&&(this.g=yIa(this,a)),this.D=!0);c()})});_.br(hJa,this.map.getDiv());Promise.all([b.vb,this.J]).then(([{Ye:c}])=>{this.map&&c.overlayMouseTarget.append(this.h,
this.o);b.addListener("panes_changed",d=>{this.map&&d.overlayMouseTarget.append(this.h,this.o)})})}dispose(){this.g&&(this.g.setMap(null),this.g=null);this.h.remove();this.i.remove();this.s.remove();this.o.remove();this.i.textContent="";this.s.textContent="";this.l.clear();this.m.clear();this.map=null}isEmpty(){return 0===this.l.size}requestRedraw(){this.D?this.g&&this.g.requestRedraw():this.J.then(()=>{this.g&&this.g.requestRedraw()})}onDraw(a){if(this.map){var b=this.K.offsetWidth,c=this.K.offsetHeight,
d=_.gj(this.map.getZoom()||1,this.map.getTilt()||0,this.map.getHeading()||0);for(const k of this.l.values()){var e=k.vK;var f=this.map.getCenter();if(e&&f){f=_.Zf(f.lng(),-180,180);var g=_.Zf(e.lng,-180,180);0<f&&g<f-180?g+=360:0>f&&g>f+180&&(g-=360);e=new _.Nl({altitude:e.altitude,lat:e.lat,lng:g},!0)}else e=null;if(!e){k.Ah(null,d);continue}e=a.fromLatLngAltitude(e);f=Array.from(e);e=g=[0,0,0];const m=e[0],q=e[1],t=e[2],v=1/(f[3]*m+f[7]*q+f[11]*t+f[15]);e[0]=(f[0]*m+f[4]*q+f[8]*t+f[12])*v;e[1]=
(f[1]*m+f[5]*q+f[9]*t+f[13])*v;e[2]=(f[2]*m+f[6]*q+f[10]*t+f[14])*v;const {nK:w,tN:y}={nK:0>f[14]&&0>f[15],tN:g};w?k.Ah(null,d):k.Ah({aa:ZJ(y[0]/2*b),ca:ZJ(-y[1]/2*c)},d,{aa:b,ca:c})}}}};var LK=new Map,iJa=new class extends gJa{T(a){a&&this.Kb(a,181191,"Acamk")}N(a){if(a){var b=a.getRenderingType();"UNINITIALIZED"!==b&&this.Kb(a,159713,"Mlamk");"RASTER"===b?this.Kb(a,157416,"Raamk"):"VECTOR"===b&&this.Kb(a,157417,"Veamk")}}h(a,b=!1){this.Kb(a,158896,"Camk");b&&this.Kb(a,185214,"Cgmk")}i(a,b){b&&("REQUIRED"!==b&&this.Kb(a,160097,"Csamk"),"REQUIRED_AND_HIDES_OPTIONAL"===b?this.Kb(a,160098,"Cramk"):"OPTIONAL_AND_HIDES_LOWER_PRIORITY"===b&&this.Kb(a,160099,"Cpamk"))}l(a,b){b?this.Kb(a,
159404,"Dcamk"):this.Kb(a,159405,"Ccamk")}K(a,b){b?this.Kb(a,174401,"Dwamk"):this.Kb(a,174398,"Cwamk")}D(a){this.Kb(a,159484,"Ceamk")}J(a){this.Kb(a,160438,"Dwaamk")}s(a){this.Kb(a,159521,"Ziamk")}m(a){this.Kb(a,160103,"Dgamk")}o(a){this.Kb(a,159805,"Tiamk")}F(a){this.Kb(a,159490,"Ckamk")}M(a){this.Kb(a,159812,"Fcamk")}g(a){this.Kb(a,159609,"Atamk")}R(a){this.Kb(a,160122,"Kdamk")}O(a){this.Kb(a,160106,"Ldamk")}W(a){this.Kb(a,160478,"pdamk")}V(a,b){const c=[{threshold:1E4,Uh:160636,ii:"Amk10K"},{threshold:5E3,
Uh:160635,ii:"Amk5K"},{threshold:2E3,Uh:160634,ii:"Amk2K"},{threshold:1E3,Uh:160633,ii:"Amk1K"},{threshold:500,Uh:160632,ii:"Amk500"},{threshold:200,Uh:160631,ii:"Amk200"},{threshold:100,Uh:160630,ii:"Amk100"},{threshold:50,Uh:159732,ii:"Amk50"},{threshold:10,Uh:160629,ii:"Amk10"},{threshold:1,Uh:160628,ii:"Amk1"}];for(const {threshold:d,Uh:e,ii:f}of c)if(b>=d){this.Kb(a,e,f);break}}C(a){a=a instanceof KeyboardEvent;this.Kb(window,a?171152:171153,a?"Amki":"Ammi")}Kb(a,b,c){a&&(_.fi(a,b),_.hi(a,c))}},
jJa=new gJa,KK=null;var kJa=class{constructor(a){this.g=a;this.m=this.i=!1;this.D=this.l=this.o=this.F=this.J=this.O=null;this.V=0;this.W=null;this.ea=b=>{this.rp(b)};this.ia=b=>{this.rp(b)};this.X=b=>{b.preventDefault();b.stopImmediatePropagation()};this.N=b=>{if(this.m||this.s||oHa(b,this.O))this.s=!0};a=this.g.Vg;2!==_.mp?(a.addEventListener("pointerdown",this.ea),a.addEventListener("pointermove",this.N)):(a.addEventListener("touchstart",this.ia),a.addEventListener("touchmove",this.N));a.addEventListener("mousedown",
this.X);this.M=b=>{b.preventDefault();b.stopImmediatePropagation();this.m?OIa(this,b):this.i?(QIa(this,b),PK(this.g,"drag",b)):(RIa(this,b),b=this.g,b.bc.W(b.map))};this.C=b=>{this.D&&500<=b.timeStamp-this.D&&(!this.i||this.m)?(this.m?OIa(this,b):(RIa(this,b),b=this.g,b.bc.O(b.map)),this.s=!0):(this.i&&(this.m||this.s||oHa(b,this.O))&&(this.s=!0),this.m&&MK(this,b),"touchend"===b.type&&(this.h.style.display="none"),this.i?(b.stopImmediatePropagation(),QIa(this,b),RK(this),TK(this.g,!0),PK(this.g,
"dragend",b)):RK(this))};this.oa=b=>{this.Ja(b)};this.Ca=b=>{this.Fa(b)};this.ka=b=>{NK(this,b)};this.Ja=b=>{if(b.altKey&&(_.cr(b)||b.key===_.Dla))NK(this,b);else if(!b.altKey&&_.cr(b))this.s=!0,MK(this,b);else if(_.dr(b)||_.fr(b)||_.er(b)||_.gr(b))b.preventDefault(),this.K.add(b.key),this.V||(this.W=new _.UE(100),TIa(this)),PK(this.g,"drag",b);else if("Equal"===b.code||"Minus"===b.code){var c=this.g;b="Equal"===b.code?1:-1;const d=nHa(c.Gd,c.Qi);d&&c.fa.uz(b,d)}};this.Fa=b=>{(_.dr(b)||_.fr(b)||_.er(b)||
_.gr(b))&&this.K.delete(b.key)};this.R=()=>{this.h.style.display=""};this.T=()=>{this.i||(this.h.style.display="none")};this.h=document.createElement("div");KIa(this);this.s=!1;this.K=new Set}ir(a){this.l&&_.VE(this.l,a)}rp(a){this.s=!1;if(this.g.gmpDraggable&&(0===a.button||"touchstart"===a.type)){const b=this.g.Vg;b.focus();const c=document;2!==_.mp||a.preventDefault();a.stopImmediatePropagation();this.D=a.timeStamp;2!==_.mp?(c.addEventListener("pointermove",this.M),c.addEventListener("pointerup",
this.C),c.addEventListener("pointercancel",this.C)):(c.addEventListener("touchmove",this.M,{passive:!1}),c.addEventListener("touchend",this.C),c.addEventListener("touchcancel",this.C));this.i||(this.O=$J(a));b.style.cursor=_.rr}}Dq(){this.i||(this.s=!1)}sp(a){if(this.g.gmpDraggable&&!this.m&&!this.i){var b=this.g.Vg;b.addEventListener("keydown",this.oa);b.addEventListener("keyup",this.Ca);b.addEventListener("blur",this.ka);this.o=this.g.Ag();this.J=this.g.position;this.m=this.i=!0;NIa(this);b=this.g.Vg;
b.setAttribute("aria-grabbed","true");QK(this.g);b.style.zIndex="2147483647";this.h.style.opacity="1";PK(this.g,"dragstart",a);a=this.g;a.bc.R(a.map)}}Cq(a){this.m?NK(this,a):this.i&&(this.g.position=this.J,a.stopImmediatePropagation(),RK(this),PK(this.g,"dragend",a))}lh(){return this.i}dispose(){RK(this);const a=this.g.Vg;2!==_.mp?(a.removeEventListener("pointerdown",this.ea),a.removeEventListener("pointermove",this.N)):(a.removeEventListener("touchstart",this.ia),a.removeEventListener("touchmove",
this.N));a.removeEventListener("mousedown",this.X);a.removeEventListener("pointerenter",this.R);a.removeEventListener("pointerleave",this.T);a.removeEventListener("focus",this.R);a.removeEventListener("blur",this.T);this.h.remove()}};var bL=class extends _.Wl{constructor(a={}){super(a);this.Xd=this.Vb=null;this.Js="";this.Bs=null;this.uo=!1;this.Oo=this.zo=this.Sj=this.fa=this.sd=null;this.yu=this.lr=this.jr=this.dw=!1;this.cc=this.Fp=null;this.sz=this.cw=void 0;this.gn=!1;this.Qi=this.hn=null;this.ew="";this.Gd=this.mr=void 0;this.rK=this.ds=this.fq=!0;this.Vr=document.createElement("div");_.Wm(this.element,"marker-view");this.element.style.position="absolute";this.element.style.left="0px";this.Vg=this.targetElement=this.element;
const {url:b,scaledSize:c}=(new jK).g;this.uC=new Image(c.width,c.height);this.uC.src=b;this.ro=!1;Object.defineProperties(this,{ro:{value:!1,writable:!1}});this.bc=this.ro?jJa:iJa;this.element.addEventListener("focus",g=>{this.it(g)},!0);this.element.addEventListener("resize",g=>{this.xm.set("anchorPoint",new _.oi(0,-g.detail.height))});BIa(this.element);this.Rb=document.createElement("div");_.Wm(this.Rb,"content-container");this.element.appendChild(this.Rb);this.Kw=getComputedStyle(this.element);
this.wJ=(g,k,m)=>this.yq(g,k,m);const d=()=>{UK(this);VK(this);const g=_.ch(this,"gmp-click");this.bc.h(this.map,g)},e=()=>{UK(this);VK(this)},f=["click"];for(const g of f)gHa(this,g,d),fHa(this,g,e);this.xm=new _.ph;this.collisionBehavior=a.collisionBehavior;this.content=a.content;this.ax=!!a.ax;this.gmpDraggable=a.gmpDraggable;this.position=a.position;this.title=a.title??"";this.zIndex=a.zIndex;this.map=a.map;this.Lh(a,bL,"AdvancedMarkerElement")}Df(a,b){return _.Bg("AdvancedMarkerElement",a,b)}addEventListener(){throw Error(`<${this.localName}>: ${"addEventListener is unavailable in this version."}`);
}addListener(a,b){return _.bh(this,a,b)}it(a){var b=a.target,c=a.relatedTarget;if(this.element!==b)if(a.stopPropagation(),a.stopImmediatePropagation(),console.debug('Focusable child elements in AdvancedMarkerElement are not supported. To make AdvancedMarkerElement focusable, use addListener() to register a "click" event on the AdvancedMarkerElement instance.'),this.bc.M(this.map),a=[document.body,..._.Mo(document.body)],b=a.indexOf(b),c=a.indexOf(c),-1===b||-1===c)this.element.focus();else for(c=
b>c?1:-1,b+=c;0<=b&&b<a.length;b+=c){const d=a[b];if(this.zg&&d===this.element||!this.element.contains(d)){(d instanceof HTMLElement||d instanceof SVGElement)&&d.focus();break}}}Dq(a){this.Vb&&this.Vb.Dq();VIa(this,a)}sp(a){this.Vb&&this.Vb.sp(a)}rp(a){this.Vb&&this.Vb.rp(a)}Dx(){}Cq(a){this.Vb&&this.Vb.Cq(a)}get collisionBehavior(){return this.cw}set collisionBehavior(a){const b=this.Df("collisionBehavior",()=>_.zg(_.qg(_.Ol))(a))||"REQUIRED";this.collisionBehavior!==b&&(this.cw=b,this.bc.i(this.map,
this.cw),this.map&&(!SK(this)&&this.cc?cHa(this.cc.O,this):TK(this,!0)))}get element(){return this.Vr}get content(){return this.sz}set content(a){if(a instanceof hK)throw _.mg("AdvancedMarkerElement: `content` invalid: PinElement must currently be assigned as `pinElement.element`.");let b=this.Df("content",()=>_.zg(_.pg(Node,"Node"))(a));this.uo=!b;b||(b=this.Bs=this.Bs||(new hK).element);this.content!==b&&(this.content&&this.Rb.removeChild(this.content),this.Oo=null,this.sz=b,this.Rb.appendChild(this.content),
this.Vb&&JIa(this.Vb),TK(this,!0),UK(this),this.bc.l(this.map,this.uo))}get dragIndicator(){}set dragIndicator(a){}get gmpDraggable(){return this.gn}set gmpDraggable(a){const b=this.Df("gmpDraggable",()=>(0,_.Hl)(a))||!1;XIa(this,this.position,b);this.gn!==b&&((this.gn=b)?(this.bc.m(this.map),this.element.setAttribute("aria-grabbed","false"),DIa(this,this.Js),this.Vb=new kJa(this),IIa(this.Vb)):(this.element.removeAttribute("aria-grabbed"),this.Ay(this.Js),this.Vb.dispose(),this.Vb=null),UK(this),
VK(this))}Ay(a){var b=this.element.getAttribute("aria-describedby");b=(b?b.split(" "):[]).filter(c=>c!==a);0<b.length?this.element.setAttribute("aria-describedby",b.join(" ")):this.element.removeAttribute("aria-describedby")}get map(){return this.Gd}set map(a){this.setMap(a)}setMap(a,b=!1){if(b||this.Gd!==a)this.dispose(),this.Gd=this.Df("map",()=>_.zg(_.pg(_.yh,"MapsApiMap"))(a)),this.Gd instanceof _.yh&&(this.Gd=this.Gd.h),this.xm.set("map",this.Gd),this.Gd instanceof _.yh?(WIa(this),this.Gd&&EIa(this,
this.Gd),this.cc=this.Gd.__gm,this.Gd.addListener("bounds_changed",()=>{WK(this)}),this.Gd.addListener("zoom_changed",()=>{WK(this)}),this.Gd.addListener("projection_changed",()=>{WK(this)}),Promise.all([this.cc.vb,this.cc.i]).then(([c,d])=>{if(this.Gd===c.map){this.bc.N(c.map);var e=this.cc.g;if(this.ro||_.kj(e,"ADVANCED_MARKERS").isAvailable)this.fa=c.fa,c=(c=this.cc.get("baseMapType"))&&(!c.mapTypeId||!Object.values(_.xl).includes(c.mapTypeId)),this.Fp=d&&!c,this.position&&(this.Fp?FIa(this.map):
$Ia(this))}}),YIa(this),ZIa(this)):this.cc=null}get position(){return this.hn}set position(a){let b=this.Df("position",()=>_.zg(_.xxa)(a))||null;b=b&&new _.Nl(b);const c=this.hn;XIa(this,b,this.gmpDraggable);(c&&b?hHa(c,b):c===b)||(this.Qi=(this.hn=b)?new _.Dg(b):null,this.yu=!0,this.xm.set("position",this.Qi),this.Fp?FIa(this.map):$Ia(this),0<this.Jf()&&this.bc.g(this.map),_.Oi(this,"position",c))}get vK(){return this.hn}get title(){return this.ew}set title(a){const b=this.Df("title",()=>(0,_.Dl)(a)),
c=this.ew;b!==this.title&&(this.ew=b,this.title&&this.bc.o(this.map),""===this.title?(this.element.removeAttribute("aria-label"),this.element.removeAttribute("title")):(this.element.setAttribute("aria-label",this.title),this.element.setAttribute("title",this.title)),this.mp(),_.Oi(this,"title",c))}get zIndex(){return this.mr}set zIndex(a){const b=this.Df("zIndex",()=>_.zg(_.Bl)(a));this.mr=null==b?null:b;this.element.style.zIndex=null==this.mr?"":`${this.mr}`;null!==this.zIndex&&this.bc.s(this.map);
TK(this)}get oo(){return _.ch(this,"click")||!1}get Kx(){return this.oo||!!this.gmpDraggable}get zg(){return this.dw}set zg(a){UIa(this);this.dw!==a&&(this.dw=a,WK(this))}get so(){return this.lr}set so(a){a!==this.lr&&(this.lr=a)&&(this.ds=this.fq=!1,this.fq=!this.position,this.cf())}get gh(){return this.jr}set gh(a){a!==this.jr&&(this.jr=a,this.map&&(a=_.na(this.map),(a=LK.get(a))&&AIa(a,this)),WK(this),this.kf("UPDATE_BASEMAP_COLLISION"))}Zn(){if(!this.Sj||!this.content)return null;if(!this.Oo){var a=
this.Kw;const {offset:c,size:d}=kHa(this.element,this.content);var b=lHa(a);a=b.offsetY+c.y;b=b.offsetX+c.x;this.Oo=_.$i(b,a,b+d.width,a+d.height)}return this.Oo}Jf(){return this.hn?this.hn.altitude:0}yq(a,b,c){return this.Gd?(c=_.Ata(this.Gd.getProjection(),this.Qi,c))?a/c*Math.sin(b*Math.PI/180):0:0}Ah(a,b,c){if(a){if(this.Vb){b=this.Vb;var d=b.g;b=(d=d.map?d.map.getDiv():null)&&b.o&&b.i&&!b.m?mHa(d,b.o):null}else b=null;b&&(a=b);this.zo=a;this.so=!(!c||!(Math.abs(a.aa)>c.aa/2+512||Math.abs(a.ca)>
c.ca/2+512));this.so||(!this.element.parentNode&&this.map&&(c=_.na(this.map),(c=LK.get(c))&&AIa(c,this)),(new _.oi(a.aa,a.ca)).equals(this.Sj)||(aJa(this,new _.oi(a.aa,a.ca)),this.ir(this.yu)),this.yu=!1,this.ds=this.fq=!0)}else this.so=!0,this.zo=null}ir(a){this.Oo=null;this.Vb&&this.Vb.l&&this.Vb.ir(this.Zn());TK(this,a)}EJ(){if(!SK(this)||this.gh||!this.content)return null;var a=this.map.getProjection();if(!a)return null;a=a.fromLatLngToPoint(this.Qi);var b=this.Sj;var c=this.Kw;if(b){var {size:d,
offset:e}=kHa(this.element,this.content);c=lHa(c);b={size:d,offset:new _.oi(c.offsetX-b.x+e.x,c.offsetY-b.y+e.y)}}else b={size:new _.qi(0,0),offset:new _.oi(0,0)};const {size:f,offset:g}=b;return new cJa(a.x,a.y,f.width,f.height,g.x,g.y)}yl(){}Gi(){return this.element}Jx(a){return!this.position||this.jr?!1:vHa(a,this.element)}mp(){const a=this.Gi();this.zg?a.setAttribute("role","button"):this.title?a.setAttribute("role","img"):a.removeAttribute("role")}get lh(){return this.Vb?this.Vb.lh():!1}cf(){aJa(this,
null);QK(this);this.fq&&this.fa&&this.sd&&(this.fa.Gg(this.sd),this.sd=null);_.Oo(this.element)}dispose(){if(this.map){const a=_.na(this.map),b=LK.get(a);b&&(b.l.delete(this),b.isEmpty()&&(b.dispose(),LK.delete(a)));this.cf();this.Fp=null;this.fa&&(this.fa=null);this.Vb&&RK(this.Vb);this.Xd&&(this.Xd.remove(),this.Xd=null)}}Ag(){var a=this.cc?.get("projectionController");if(!this.cc||!a)return null;a=a.fromLatLngToContainerPixel(this.Qi);const b=this.cc.pm.getBoundingClientRect();return{clientX:a.x+
b.left,clientY:a.y+b.top}}connectedCallback(){super.connectedCallback();console.error("AdvancedMarkerElement: direct DOM insertion is not supported.")}disconnectedCallback(){!this.isConnected&&this.ds&&(this.map=null);super.disconnectedCallback()}};bL.prototype.addListener=bL.prototype.addListener;bL.prototype.addEventListener=bL.prototype.addEventListener;bL.prototype.constructor=bL.prototype.constructor;bL.Os={rt:181576,As:181577};
_.Na([_.pk({Pg:bJa,tm:function(a,b){try{return YJ(a)!==YJ(b)}catch{return a!==b}},Vj:!0}),_.Ra("design:type",Object),_.Ra("design:paramtypes",[Object])],bL.prototype,"position",null);_.Na([_.pk({Pg:{Ei:a=>a||"",Vm:a=>a||null},Vj:!0}),_.Ra("design:type",String),_.Ra("design:paramtypes",[String])],bL.prototype,"title",null);var lJa=!1,mJa=class extends bL{};XJ("gmp-internal-use-am",mJa);var cL={Marker:_.Ei,CollisionBehavior:_.Ol,Animation:_.Sga,kC:()=>{},Xr:function(a,b,c){const d=_.Swa();if(b instanceof _.Di)fIa(a,b,d);else{const e=new _.tj;fIa(e,b,d);const f=new _.tj;c||vIa(f,b,d);new fJa(a,f,e,c)}},mC:()=>{},AdvancedMarkerElement:bL,PinElement:hK,AdvancedMarkerClickEvent:void 0,AdvancedMarkerView:void 0,PinView:void 0,Lw:()=>{const a={AdvancedMarkerElement:bL,PinElement:hK,AdvancedMarkerClickEvent:void 0,AdvancedMarkerView:void 0,PinView:void 0};_.jg(a);_.ia.google.maps.marker=
a;lJa||(lJa=!0,XJ("gmp-internal-am",bL))}},nJa=["kC","Xr","mC","Lw"];for(const a of nJa)Object.defineProperty(cL,a,{value:cL[a],enumerable:!1});_.jg(cL);_.Vg("marker",cL);});
rta</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/ventas-corporativas" title="Ventas corporativas" data-link-type="e_linkClick" data-link-id="1000442" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Ventas corporativas</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    </ul>
                                                </div>
                                            </div>
                                        
                                            <div class="wpr-submenu-item-mobile">
                                                <div class="wpr-submenu-heading">
                                                    <div class="wpr-row">
                                                        <li class="headind_content" role="menuitem">
                                                            <label>Cómputo</label>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="sub-submenu-data-mobile">
                                                    <ul role="menu">
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/notebooks.html" title="Notebooks" data-link-type="e_linkClick" data-link-id="1000443" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Notebooks</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/notebooks/notebooks-personales.html" title="Notebooks personales" data-link-type="e_linkClick" data-link-id="1000012" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Notebooks personales</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/notebooks.html?hp_facet_formfactor=Convertible" title="Notebooks 2 en 1" data-link-type="e_linkClick" data-link-id="1000012" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Notebooks 2 en 1</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/desktops.html" title="Desktops" data-link-type="e_linkClick" data-link-id="1000403" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Desktops</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/desktops.html?hp_facet_formfactor=Todos-en-one" title="Desktops all-in-one" data-link-type="e_linkClick" data-link-id="1000444" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Desktops all-in-one</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    </ul>
                                                </div>
                                            </div>
                                        
                                            <div class="wpr-submenu-item-mobile">
                                                <div class="wpr-submenu-heading">
                                                    <div class="wpr-row">
                                                        <li class="headind_content" role="menuitem">
                                                            <label>Impresión</label>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="sub-submenu-data-mobile">
                                                    <ul role="menu">
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/impresoras.html" title="Impresoras" data-link-type="e_linkClick" data-link-id="1000053" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Impresoras</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/impresoras/impresoras-personal-hogar.html" title="Impresoras para el hogar" data-link-type="e_linkClick" data-link-id="1000015" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Impresoras para el hogar</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/impresoras/impresoras-empresariales.html" title="Impresoras empresariales" data-link-type="e_linkClick" data-link-id="1000019" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Impresoras empresariales</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/impresoras.html?hp_facet_prodtype=Impresoras+L%C3%A1ser" title="Impresoras láser" data-link-type="e_linkClick" data-link-id="1000448" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Impresoras láser</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/impresoras.html?hp_facet_prodtype=Impresoras+Inkjet" title="Impresoras de tinta" data-link-type="e_linkClick" data-link-id="1000448" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Impresoras de tinta</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/impresoras/impresoras-empresariales/designjet.html" title="Impresoras de gran formato" data-link-type="e_linkClick" data-link-id="1000449" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Impresoras de gran formato</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/tinta-toner.html" title="Tinta y tóner" data-link-type="e_linkClick" data-link-id="1000450" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Tinta y tóner</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/tinta-toner/tinta.html" title="Cartuchos de tinta" data-link-type="e_linkClick" data-link-id="1000330" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Cartuchos de tinta</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/tinta-toner/toner.html" title="Cartuchos de tóner" data-link-type="e_linkClick" data-link-id="1000341" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Cartuchos de tóner</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    </ul>
                                                </div>
                                            </div>
                                        
                                            <div class="wpr-submenu-item-mobile">
                                                <div class="wpr-submenu-heading">
                                                    <div class="wpr-row">
                                                        <li class="headind_content" role="menuitem">
                                                            <label>Accesorios</label>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="sub-submenu-data-mobile">
                                                    <ul role="menu">
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/monitores.html" title="Monitores para computadora" data-link-type="e_linkClick" data-link-id="1000412" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Monitores para computadora</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/accesorios/accesorios-de-computadora.html" title="Accesorios para computadora" data-link-type="e_linkClick" data-link-id="1000451" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Accesorios para computadora</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/accesorios/mouse-teclados.html" title="Mouse y teclados" data-link-type="e_linkClick" data-link-id="1000333" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Mouse y teclados</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/accesorios/maletines-y-fundas.html" title="Mochilas y fundas para notebook" data-link-type="e_linkClick" data-link-id="1000414" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Mochilas y fundas para notebook</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="4" class="link_metrics" href="https://www.hp.com/ar-es/shop/accesorios/bocinas-audio.html" title="Auriculares y parlantes" data-link-type="e_linkClick" data-link-id="1000414" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Auriculares y parlantes</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    </ul>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            
                            
                                <div class="wpr-side-nav-submenu" id="menuitemThree_sub">
                                    <div class="wpr-side-nav-row">
                                        <div class="header-submenu">
                                            <a tabindex="5" class="back_icon" title="Back to Main menu"></a>
                                            <label>Soporte</label>
                                        </div>
                                        <div class="wpr-close-button-L2" id="wpr-close-button">
                                            <a class="close_icon_desk" title="Close Menu"></a>
                                        </div>
                                    </div>
                                    <div class="mobile-submenu-items">
                                        <ul role="menu">
                                            <div class="wpr-submenu-item-mobile">
                                                <div class="wpr-submenu-heading">
                                                    <div class="wpr-row">
                                                        <li class="headind_content" role="menuitem">
                                                            <label>Solución de problemas</label>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="sub-submenu-data-mobile">
                                                    <ul role="menu">
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es" title="Soporte y solución de problemas" data-link-type="e_linkClick" data-link-id="1000048" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Soporte y solución de problemas</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es/drivers" title="Software y controladores" data-link-type="e_linkClick" data-link-id="1000049" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Software y controladores</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es/topic/diagnostics" title="Herramientas de diagnóstico" data-link-type="e_linkClick" data-link-id="1000050" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Herramientas de diagnóstico</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://h30467.www3.hp.com/" title="Comunidad" data-link-type="e_linkClick" data-link-id="1000051" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Comunidad</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    </ul>
                                                </div>
                                            </div>
                                        
                                            <div class="wpr-submenu-item-mobile">
                                                <div class="wpr-submenu-heading">
                                                    <div class="wpr-row">
                                                        <li class="headind_content" role="menuitem">
                                                            <label>Asistencia técnica por producto</label>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="sub-submenu-data-mobile">
                                                    <ul role="menu">
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es/printer" title="Impresoras" data-link-type="e_linkClick" data-link-id="1000053" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Impresoras</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es/computer" title="PCs" data-link-type="e_linkClick" data-link-id="1000054" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>PCs</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es/poly" title="Dispositivos de colaboración de Poly" data-link-type="e_linkClick" data-link-id="1001286" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Dispositivos de colaboración de Poly</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es/products" title="Otros productos" data-link-type="e_linkClick" data-link-id="1000056" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Otros productos</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    </ul>
                                                </div>
                                            </div>
                                        
                                            <div class="wpr-submenu-item-mobile">
                                                <div class="wpr-submenu-heading">
                                                    <div class="wpr-row">
                                                        <li class="headind_content" role="menuitem">
                                                            <label>Recursos de soporte</label>
                                                        </li>
                                                    </div>
                                                </div>
                                                <div class="sub-submenu-data-mobile">
                                                    <ul role="menu">
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://www.hp.com/ar-es/contact-hp/contact.html" title="Contacto con HP" data-link-type="e_linkClick" data-link-id="1000190" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Contacto con HP</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es/checkwarranty" title="Comprobar el estado de la reparación" data-link-type="e_linkClick" data-link-id="1000058" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Comprobar el estado de la reparación</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es/service-center" title="Proveedores de servicios autorizados" data-link-type="e_linkClick" data-link-id="1000059" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Proveedores de servicios autorizados</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://support.hp.com/ar-es/security-bulletins" title="Tablón de anuncios de seguridad" data-link-type="e_linkClick" data-link-id="1000060" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Tablón de anuncios de seguridad</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://parts.hp.com/hpparts/countrychoice.aspx" title="Tienda de repuestos" data-link-type="e_linkClick" data-link-id="1000061" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Tienda de repuestos</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    
                                                        <!-- single menu item mobile-->
                                                        <a tabindex="5" class="link_metrics" href="https://register.hp.com/americas/flowPage/registration/index.do?execution=e1s1&cc=ar&lang=es" title="Registre su producto" data-link-type="e_linkClick" data-link-id="1000064" target="_self">
                                                            <div class="Rectangle-505">
                                                                <div class="wpr-row">
                                                                    <li class="menu_content" role="menuitem">
                                                                        <label>Registre su producto</label>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div class="Line-208"></div>
                                                        <!-- single menu item mobile-->
                                                    </ul>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                    <!--sidebar container-->
                    <!--search-->
                    <div id="countryCode" style="display:none">ar</div>
                    <div id="languageCode" style="display:none">es</div>
                    <div id="languageRTL" style="display:none">false</div>
                    <div id="privacyURL" style="display:none">https://www.hp.com/cma/ng/lib/exceptions/privacy-banner.js</div>
                    <div id="hpCaasServer" style="display:none">https://www8.hp.com</div>
                    <div id="hsEndpointTracking" style="display:none">https://tracking-na.hawksearch.com/api/trackevent</div>
                <div class="wpr-search-container" data-search-result-url="https://www.hp.com/ar-es/search.html" data-search-analytics-link-id="1000185" data-search-analytics-explore-link-placement="explore" data-search-analytics-shop-link-placement="shop" data-search-analytics-support-link-placement="support ">
                    <div class="wpr-search-bar">
                        <div class="Rectangle-426">
                            <input id="search_focus_mobile" title="Buscar" tabindex="1" type="text" class="search-bar link_metrics" name="search-bar" value="" placeholder="Buscar" autocomplete="off" autocorrect="off" aria-autocomplete="both" role="combobox" maxlength="100" data-link-type="e_linkClick" data-link-placement="globalsearch" data-link-id="1000185"/>
                            <span class="clear-search">
                                <a tabindex="1" href="javascript:void(0)" class="wpr-clear-icon-logo" title="Borrar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                                        <path d="m6 7.5-6-6L1.5 0l6 6 6-6L15 1.5l-6 6 6 6-1.5 1.5-6-6-6 6L0 13.5z" style="fill:#767676"/>
                                    </svg>
                                </a>
                                <span class="screenReadingText">Borrar</span>
                            </span>
                            <a tabindex="1" href="javascript:void(0)" class="wpr-search-icon-logo search_trigger link_metrics" title="Buscar" data-link-placement="globalsearch" data-link-id="1000185"></a>
                        </div>
                        <a href="javascript:void(0)" class="cancel" target="_self" tabindex="1"></a>
                    </div>
                </div>
                    <!--search-->
                </nav>
            </div>
        <!-- Mobile View ends-->
        <!-- Tablet & desktop View -->
        <div class="wps-tablet" style="display:none;">
            <!--navbar header  -->
            <nav>
                <div class="wpr-header-tab">
                    <!-- header -->
                    <div class="wpr-row header_container">
                        
                        <div class="wpr-logo-header-holder">
                            <div class="wpr-logo-headers unselectable  ">
                                <span class="wpr-skip-links">
                                    <a tabindex="1" class="js-skip-link" href="#skiptobody" title="Skip to Content">Skip to
                                        Content</a>
                                    <a tabindex="1" class="js-skip-link" href="#skiptofooter" title="Skip to Footer">Skip to
                                        Footer</a>
                                </span>
                                <!-- HP's logo -->
                                
                                    <a tabindex="1" href="https://www.hp.com/ar-es/home.html" class="wpr-main-logo-svg unselectable link_metrics" title="HP® Argentina Sitio oficial HP® | Laptops, Equipos, Desktops, Impresoras y más" data-link-id="1000184"></a>
                                
                                
                                <!-- HP's logo -->

                                <!-- header Links -->
                                <div class="wpr-link-container unselectable ">
                                    
                                        <div tabindex="1" class="navbar-header-links unselectable" id="menuitemOne_tab" aria-haspopup="true" aria-expanded="false">
                                            <span class="font-style-h5 ">Explorar</span>
                                            <span class="screenReadingText">Open
                                                Explorar</span>
                                        </div>
                                    
                                    
                                        <div tabindex="2" class="navbar-header-links unselectable" id="menuitemTwo_tab" aria-haspopup="true" aria-expanded="false">
                                            <span class="font-style-h5 ">Comprar</span>
                                            <span class="screenReadingText">Open
                                                Comprar</span>
                                        </div>
                                    
                                    
                                        <div tabindex="3" class="navbar-header-links unselectable" id="menuitemThree_tab" aria-haspopup="true" aria-expanded="false">
                                            <span class="font-style-h5 ">Soporte</span>
                                            <span class="screenReadingText">Open
                                                Soporte</span>
                                        </div>
                                    
                                </div>
                                <!-- header Links ends hello -->
                            </div>
                        </div>

                        <div class="wpr-icons-holder">
                            <div class="Rectangle-426 ">
                                <input id="search_focus_desktop" title="Buscar" aria-labelledby="toolTip1" tabindex="4" type="text" class="search_trigger_onenter search-bar tab-search link_metrics" name="search-bar" value="" placeholder="Buscar" autocomplete="off" autocorrect="off" aria-autocomplete="both" role="combobox" maxlength="100" data-link-type="e_linkClick" data-link-placement="globalsearch" data-link-id="1000185"/>
                                <span class="clear-search">
                                    <a tabindex="4" href="javascript:void(0)" class="wpr-backspace-icon" title="Borrar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41.139" height="31" viewBox="0 0 41.139 31"><g transform="translate(0.639)"><path d="M-555.727,111.89h-25.087a2.013,2.013,0,0,1-1.58-.771L-593.686,96.89-582.4,82.662a2.015,2.015,0,0,1,1.581-.772h25.087a2.076,2.076,0,0,1,2.041,2.1h0c0,.076,0,.169,0,.29v25.5A2.076,2.076,0,0,1-555.727,111.89Z" transform="translate(593.686 -81.39)" fill="none" stroke="#ccc" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(12.5 3)"><rect width="25" height="25" fill="none"/><path d="M13.264,11.5l5.375-5.362a1.255,1.255,0,0,0-1.775-1.775L11.5,9.738,6.139,4.364A1.255,1.255,0,1,0,4.364,6.138L9.739,11.5,4.364,16.863a1.255,1.255,0,1,0,1.775,1.775L11.5,13.263l5.362,5.375a1.255,1.255,0,1,0,1.775-1.775Z" transform="translate(0.998 0.999)"/></g></g></svg>
                                    </a>
                                    <span class="screenReadingText">Borrar</span>
                                </span>
                                <a tabindex="4" href="javascript:void(0)" class="wpr-search-icon-logo search_trigger link_metrics" title="Buscar" data-link-type="e_linkClick" data-link-placement="globalsearch" data-link-id="1000185"></a>
                            </div>
                            <a tabindex="4" href="javascript:void(0)" class="wpr-close-autocomplete" title="Cerca">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" stroke="#ccc" stroke-width="1"><circle cx="20" cy="20" r="20" stroke="none"/><circle cx="20" cy="20" r="19.5" fill="none"/></g><g transform="translate(7.5 7.5)"><rect width="25" height="25" fill="none"/><path d="M13.514,11.751l6.625-6.613a1.255,1.255,0,0,0-1.775-1.775L11.751,9.989,5.139,3.364A1.255,1.255,0,0,0,3.364,5.139l6.625,6.613L3.364,18.364a1.255,1.255,0,1,0,1.775,1.775l6.612-6.625,6.612,6.625a1.255,1.255,0,1,0,1.775-1.775Z" transform="translate(0.749 0.749)" fill="#2c3038"/></g></svg>
                            </a>
                            
                                <div id="serviceUrlTablet" style="display: none;">https://hotfix.store.hp.com/webapp/wcs/stores/servlet/HPHeaderServices?storeId=10151&amp;cb=cartStatus&amp;callback=jQuery18308251954314816363_1459802963388&amp;_=1459802965974</div>
                                <!-- NEW CART FOR INTRGRATION -->
                                <div id="widget_menu" class="hdr_widgets " style="width: auto;margin-right: auto;float: none;display: flex;z-index: auto;justify-content: center;align-items: center;">
                                    <div class="hdr_buttons" style=" float: unset; ">
                                        <ul class="nav_buttons js_nav_buttons" id="nav_buttons" style="margin: 0;padding: 0;">
                                            <li class="wpr-cart-icon  wpr-icon-center  js_shopping_widget nav_button shopping_widget" style="list-style-type: none;">
                                                <a tabindex="5" id="shop_widget" class="wpr-hpcart link_metrics js_shopping_trigger" href="https://store.hp.com/webapp/wcs/stores/servlet/AjaxOrderItemDisplayView?langId=-1&catalogId=10051&storeId=10151" title="Shopping Cart" data-link-id="1000186">
                                                    <span class="screenReadingText js_screen_reading">Shopping Cart</span>
                                                </a>
                                                <span id="counterDesktop" class="item_count unselectable wpr-cart-count">
                                                </span>
                                                <div class="js_shopping_target shop_widget" style="display: none;">
                                                    <div class="top_corner">&nbsp;</div>
                                                    <div class="left_corner">&nbsp;</div>
                                                    <div id="sw_spooler" class="js_spooler wait_class " rel="">
                                                        <div>&nbsp;</div>
                                                    </div>
                                                    <div class="shopping_container">
                                                        <div class="shadow_cover_top">&nbsp;</div>
                                                        <a href="javascript:void(0);" title="Close" class="hf_close_btn">
                                                            <span class="screenReadingText">Close Shopping Cart popup</span>
                                                        </a>
                                                        <div class="widget_content">&nbsp;</div>
                                                        <div class="shadow_cover_bottom">&nbsp;</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- NEW CART FOR INTRGRATION -->
                            
                            <!--Sign in tablet-desktop start-->
                            
                                <div id="data-sso" data-sso-url="https://global-navbar-backend.id.hp.com/api/v1/session/sso_check" signin-visible="visible-true"></div>
                                <div id="wpr-signin-tablet" class="wpr-signin">
                                    <div class="signin-loader"></div>
                                    <span id="signin-profile-image" class="signin-profile-image"></span>
                                    <a tabindex="6" class="signin-button  hidden" href="https://global-navbar-backend.id.hp.com/api/v1/session/login?final_redirect_url=" aria-expanded="false" data-link-placement="signInPL" data-link-id="signInID" title="Iniciar sesión" signouttitle="Cerrar sesión">
                                        <span>
                                            <p>Iniciar sesión</p>
                                        </span>
                                    </a>
                                    <div class="wpr-signin-arrows">
                                        <div class="top_arrow"></div>
                                        <div class="bottom_arrow"></div>
                                    </div>

                                    <div class="wpr-signin-menu">
                                        <div class="wpr-signin-menu-item signed-menu-item user-info link_metrics" title="HP Store Account">
                                            <div class="wpr-row">
                                                <span id="signin-profile-image" class="signin-profile-image">
                                                <p class="first-letter"></p>
                                                </span>
                                                <div class="menu_content">
                                                    <span id="signin-profile-name" class="signin-profile-name"></span>
                                                    <span id="signin-profile-email" class="signin-profile-email"></span>
                                                    <span id="signin-profile-settings" class="signin-profile-settings">
                                                    <a class="myAccount link_metrics" data-link-placement="signInPL" data-link-id="My-HP-Account" title="Mi cuenta HP" tabindex="6" href="https://account.id.hp.com/" target="_blank">Mi cuenta HP</a></span>
                                                </div>
                                            </div>
                                        </div>

                                        
                                            <a tabindex="6" class="link_metrics" href="https://support.hp.com/dashboard" target="_self" alt="Panel de soporte" data-link-type="e_linkClick" data-link-placement="signInPl" data-link-id="signInSupportDashboard" title="Panel de soporte">
                                                <div class="wpr-signin-menu-item " title="Panel de soporte">
                                                    <div class="wpr-row">
                                                        <div class="menu_content">
                                                        Panel de soporte
                                                            <span class="screenReadingText" style="display:none;">Panel de soporte</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        

                                        <a tabindex="6" id="signoutButton" class="signoutButton link_metrics" href="https://global-navbar-backend.id.hp.com/api/v1/session/logout?final_redirect_url=" data-link-placement="signInPL" data-link-id="signInID-LogOut" title=" Cerrar sesión">
                                            <div class="wpr-signin-menu-item signed-menu-item " title=" Cerrar sesión">
                                                <div class="wpr-row">
                                                    <div class="menu_content">
                                                        Cerrar sesión
                                                        <span class="screenReadingText" style="display:none;">
                                                            Cerrar sesión</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            
                            <!--Sign in tablet-desktop end-->
                        </div>
                    </div>
                </div>
                <!-- navbar header -->
                <!-- navbar container -->
                <div class="wpr-dropdown-container">
                    <div class="wpr-closing-overlay"></div>
                    <div class="dropdowns_insert">
                        
                            <div class="wpr-dropdown-nav wpr-show" id="menuitemOne_tab_drop">

                                <div class="submenu_data" style="display: inherit">
                                    <ul class="wpr-submenu-container" role="menu">
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Destacados</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/printers/refillable-tanks.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001242" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">HP Tanks</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/solutions/hybrid-work.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001239" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Trabaja a tu manera</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://printables.hp.com/ar/es" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001255" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Imprimibles</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/hp-information/sustainable-impact.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001169" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impacto sustentable</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">PCs</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/laptops-and-2-in-1s.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000443" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Laptops</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/desktops-and-all-in-ones.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001171" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Desktops</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/gaming.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000008" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Gaming</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/monitors-accessories/computer-monitors.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001148" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Monitores</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/monitors-accessories/computer-accessories.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000374" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Accesorios</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/laptops/business-laptops-and-2-in-1s.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000012" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Laptops para negocios</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/desktops/business-desktops.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000013" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Desktops para negocios</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/workstations/workstation-pcs.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001187" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Workstation Z by HP</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Impresoras</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/cartridge/ink-toner-paper.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000005" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Tinta y tóner</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/printers/home-printers.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001164" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras para la casa y para estudiar</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/printers/business-printers.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001236" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras para negocios y oficina en casa</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/printers/enterprise-printers.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001237" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras empresariales</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/printers/scanners.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001143" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Escáners</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/printers/large-format.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001117" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras de gran formato y plotters</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/services/managed-print-services.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000028" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Servicios Gestionados de Impresión</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Soluciones</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/security/pc-security.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001189" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Seguridad</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/solutions/presence.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001215" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Tecnología de colaboración</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/solutions/digital-workspaces.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001234" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Espacios de trabajo digitales</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/services.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000025" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Servicios comerciales</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/solutions/business-solutions.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000030" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Explorar todos los servicios</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="1" href="https://www.hp.com/ar-es/solutions/pos-systems.html#All-in-OneSystems" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001188" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Soluciones para minoristas</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div tabindex="1" class="wpr-close-submenu-desk">
                                    <a class="close_icon_desk" title="Close Menu"></a>
                                </div>
                            </div>
                        
                        
                            <div class="wpr-dropdown-nav wpr-show" id="menuitemTwo_tab_drop">

                                <div class="submenu_data" style="display: inherit">
                                    <ul class="wpr-submenu-container" role="menu">
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Destacados</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000033" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Tienda HP.com</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/notebooks/promociones-notebooks.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000437" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Notebooks en oferta</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/desktops/promociones-desktops.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000438" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Desktops en oferta</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/tinta-toner/promociones-tinta-toner.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000440" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Cartuchos en oferta</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/accesorios/promociones-de-accesorios.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000441" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Accesorios en oferta</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/ventas-corporativas" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000442" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Ventas corporativas</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Cómputo</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/notebooks.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000443" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Notebooks</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/notebooks/notebooks-personales.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000012" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Notebooks personales</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/notebooks.html?hp_facet_formfactor=Convertible" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000012" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Notebooks 2 en 1</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/desktops.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000403" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Desktops</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/desktops.html?hp_facet_formfactor=Todos-en-one" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000444" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Desktops all-in-one</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Impresión</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/impresoras.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000053" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/impresoras/impresoras-personal-hogar.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000015" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras para el hogar</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/impresoras/impresoras-empresariales.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000019" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras empresariales</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/impresoras.html?hp_facet_prodtype=Impresoras+L%C3%A1ser" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000448" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras láser</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/impresoras.html?hp_facet_prodtype=Impresoras+Inkjet" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000448" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras de tinta</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/impresoras/impresoras-empresariales/designjet.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000449" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras de gran formato</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/tinta-toner.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000450" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Tinta y tóner</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/tinta-toner/tinta.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000330" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Cartuchos de tinta</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/tinta-toner/toner.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000341" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Cartuchos de tóner</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Accesorios</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/monitores.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000412" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Monitores para computadora</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/accesorios/accesorios-de-computadora.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000451" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Accesorios para computadora</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/accesorios/mouse-teclados.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000333" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Mouse y teclados</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/accesorios/maletines-y-fundas.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000414" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Mochilas y fundas para notebook</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="2" href="https://www.hp.com/ar-es/shop/accesorios/bocinas-audio.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000414" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Auriculares y parlantes</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div tabindex="2" class="wpr-close-submenu-desk">
                                    <a class="close_icon_desk" title="Close Menu"></a>
                                </div>
                            </div>
                        
                        
                            <div class="wpr-dropdown-nav wpr-show" id="menuitemThree_tab_drop">

                                <div class="submenu_data" style="display: inherit">
                                    <ul class="wpr-submenu-container" role="menu">
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Solución de problemas</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000048" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Soporte y solución de problemas</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es/drivers" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000049" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Software y controladores</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es/topic/diagnostics" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000050" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Herramientas de diagnóstico</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://h30467.www3.hp.com/" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000051" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Comunidad</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Asistencia técnica por producto</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es/printer" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000053" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Impresoras</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es/computer" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000054" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">PCs</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es/poly" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001286" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Dispositivos de colaboración de Poly</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es/products" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000056" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Otros productos</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    
                                        <div class="wpr-submenu-item">
                                            <div class="wpr-submenu-heading">
                                                <div class="wpr-row">
                                                    <li class="headind_content" role="menuitem">
                                                        <label class="unselectable">Recursos de soporte</label>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="sub-submenu-data">
                                                <ul role="menu">
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://www.hp.com/ar-es/contact-hp/contact.html" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000190" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Contacto con HP</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es/checkwarranty" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000058" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Comprobar el estado de la reparación</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es/service-center" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000059" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Proveedores de servicios autorizados</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://support.hp.com/ar-es/security-bulletins" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000060" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Tablón de anuncios de seguridad</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://parts.hp.com/hpparts/countrychoice.aspx" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000061" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Tienda de repuestos</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                
                                                    <!-- single menu item -->
                                                    <a tabindex="3" href="https://register.hp.com/americas/flowPage/registration/index.do?execution=e1s1&cc=ar&lang=es" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000064" target="_self">
                                                        <div class="Rectangle-505">
                                                            <div class="wpr-row">
                                                                <li class="menu_content" role="menuitem">
                                                                    <label class="unselectable">Registre su producto</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div tabindex="3" class="wpr-close-submenu-desk">
                                    <a class="close_icon_desk" title="Close Menu"></a>
                                </div>
                            </div>
                        
                    </div>

                </div>
                <!-- navbar container -->
            </nav>
        </div>
        <!-- Tablet & desktop View ends -->
        <div class="target_block_src_data" style="display: none"></div>
        <!-- Data Timestamp 06-01-2024 01:36:41 -->
    </div>

    
  <!-- autocomplete -->
  <div class="autocomplete-wrapper main" style="display:none" data-store-autocomplete-endpoint="https://essearchapi-na.hawksearch.com/api/v2/autocomplete" data-store-client-guid="91b05c8aabbf491a9e02eea822f40e21" data-store-query-param="store_id.keyword: 0 OR store_id.keyword: 1" data-us-store-autocomplete-endpoint="https://essearchapi-na.hawksearch.com/api/v2/autocomplete" data-us-store-client-guid="bdeebee3d2b74c8ea58522bb1db61f8e" data-us-store-hs-services-endpoint="/us-en/shop/HPServices?action=p&langId=-1&storeId=10151&catalogId=10051" data-us-store-default-private-price-msg="PRIVATE STORE EXCLUSIVE PRICE" data-us-store-suggestions-title="Top Suggestions" data-us-store-categories-title="Suggested categories" data-us-store-shop-section-title="Shop" data-us-store-explore-section-title="Explore" data-us-store-search-results-label="See all results" data-main-autocomplete-endpoint="https://essearchapi-na.hawksearch.com/api/v2/autocomplete" data-main-client-guid="838c440a9f4a443e9ca1bc3001f1d223" data-suggestions-section-title="Principales sugerencias" data-categories-section-title="Categorías sugeridas" data-explore-section-title="Explorar" data-shop-section-title="Comprar" data-see-all-results-label="Ver todos los resultados" data-starting-at-label="A partir de" data-rating-at-label="Clasificación [ProductRating]" data-default-explore-card-image-path="/content/dam/sites/brand-central/home/images/Slide_Logo-100.jpg" data-default-shop-card-image-path="/content/dam/sites/brand-central/home/images/Slide_Logo-100.jpg" data-result-url-shop="https://www.hp.com/ar-es/shop/catalogsearch/result/?q=[query]" data-result-url-support="https://support.hp.com/ar-es/search?q=[query]" data-see-all-label="Ver todo" data-no-results-msg="No se encontraron sugerencias, intente &#39;Ver todos los resultados&#39;" data-store-autocomplete-enabled>

    

    <div id="ac-support-section" style="display:none" data-search-category="Soporte">
      <div class="title">
        Soporte
        <a href="#" class="see-link" tabindex="4">Ver todo</a>
      </div>
      
    </div>


    <div class="autocomplete-header">
      <nav>
        <div class="autocomplete-header__body">
          <div class="autocomplete-header__container">
            <div class="autocomplete-header__logo-holder">
              
                <a tabindex="1" href="https://www.hp.com/ar-es/home.html" class="wpr-main-logo-svg unselectable link_metrics" title="HP® Argentina Sitio oficial HP® | Laptops, Equipos, Desktops, Impresoras y más" data-link-id="1000184"></a>
              
              
              <!-- HP's logo -->
              <span class="wpr-skip-links">
                <a tabindex="1" class="js-skip-link" href="#skiptobody" title="Skip to Content">Skip to
                    Content</a>
                <a tabindex="1" class="js-skip-link" href="#skiptofooter" title="Skip to Footer">Skip to
                    Footer</a>
              </span>
            </div>
            <div class="autocomplete-header__input-holder">
              <div class="input-wrapper">
                <input title="Buscar" aria-labelledby="toolTip1" tabindex="4" type="text" class="search_trigger_onenter search-bar tab-search link_metrics" name="search-bar" value="" placeholder="Buscar" autocomplete="off" autocorrect="off" aria-autocomplete="both" role="combobox" maxlength="100" data-link-id="" data-search-category=""/>
                <a tabindex="4" href="javascript:void(0)" class="wpr-backspace-icon" title="Clear Button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="41.139" height="31" viewBox="0 0 41.139 31"><g transform="translate(0.639)"><path d="M-555.727,111.89h-25.087a2.013,2.013,0,0,1-1.58-.771L-593.686,96.89-582.4,82.662a2.015,2.015,0,0,1,1.581-.772h25.087a2.076,2.076,0,0,1,2.041,2.1h0c0,.076,0,.169,0,.29v25.5A2.076,2.076,0,0,1-555.727,111.89Z" transform="translate(593.686 -81.39)" fill="none" stroke="#ccc" stroke-miterlimit="10" stroke-width="1"/><g transform="translate(12.5 3)"><rect width="25" height="25" fill="none"/><path d="M13.264,11.5l5.375-5.362a1.255,1.255,0,0,0-1.775-1.775L11.5,9.738,6.139,4.364A1.255,1.255,0,1,0,4.364,6.138L9.739,11.5,4.364,16.863a1.255,1.255,0,1,0,1.775,1.775L11.5,13.263l5.362,5.375a1.255,1.255,0,1,0,1.775-1.775Z" transform="translate(0.998 0.999)"/></g></g></svg>
                </a>
              </div>
              <a tabindex="4" href="javascript:void(0)" class="wpr-close-autocomplete">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" stroke="#ccc" stroke-width="1"><circle cx="20" cy="20" r="20" stroke="none"/><circle cx="20" cy="20" r="19.5" fill="none"/></g><g transform="translate(7.5 7.5)"><rect width="25" height="25" fill="none"/><path d="M13.514,11.751l6.625-6.613a1.255,1.255,0,0,0-1.775-1.775L11.751,9.989,5.139,3.364A1.255,1.255,0,0,0,3.364,5.139l6.625,6.613L3.364,18.364a1.255,1.255,0,1,0,1.775,1.775l6.612-6.625,6.612,6.625a1.255,1.255,0,1,0,1.775-1.775Z" transform="translate(0.749 0.749)" fill="#2c3038"/></g></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="wpr-autocomplete" data-link-placement="globalsearch">
      <div class="result">
        <div class="container">
          <div class="result__error message">
            <!-- Here will be inserted corresponding section with JS -->
          </div>
          <div class="result__row">
            <div class="result__left">
              <div id="suggestion-section">
                <!-- Here will be inserted corresponding section with JS -->
              </div>
              <div id="category-section">
                <!-- Here will be inserted corresponding section with JS -->
              </div>
              <div id="see-all-results" class="see-all">
                <!-- Here will be inserted corresponding section with JS -->
              </div>
            </div>
            <div class="result__right product">
              <!-- Here will be inserted corresponding section with JS -->
            </div>
          </div>
        </div>
      </div>
      <div class="ac-background"></div>
    </div>
  </div>

    <div id="skiptobody"></div>

   </div>
   
   
</section>

          
              
          

          <div id="body" class="body">
            
            
              <link class="standalone" href="/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-basic-banner.4ec7a134.css" rel="stylesheet" onload="this.classList.add('loaded'); this.dispatchEvent(new Event('loaded', { bubbles: true }));"/> <link class="standalone" href="/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-custom-info-banner-v2.4ec7a134.css" rel="stylesheet" onload="this.classList.add('loaded'); this.dispatchEvent(new Event('loaded', { bubbles: true }));"/> <link class="standalone" href="/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-column-control.4ec7a134.css" rel="stylesheet" onload="this.classList.add('loaded'); this.dispatchEvent(new Event('loaded', { bubbles: true }));"/> <link class="standalone" href="/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-generic-carousel.4ec7a134.css" rel="stylesheet" onload="this.classList.add('loaded'); this.dispatchEvent(new Event('loaded', { bubbles: true }));"/> <link class="standalone" href="/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-media-content.4ec7a134.css" rel="stylesheet" onload="this.classList.add('loaded'); this.dispatchEvent(new Event('loaded', { bubbles: true }));"/> <link class="standalone" href="/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-visual-tabs.4ec7a134.css" rel="stylesheet" onload="this.classList.add('loaded'); this.dispatchEvent(new Event('loaded', { bubbles: true }));"/>
            
            
<div class="root responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="ghost aem-GridColumn aem-GridColumn--default--12">

</div>
<div class="ghost aem-GridColumn aem-GridColumn--default--12">

</div>
<div class="genericcarousel aem-GridColumn aem-GridColumn--default--12">

<!-- CSSLoadingService: CSS "/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-generic-carousel.4ec7a134.css" already injected -->





<hp-generic-carousel-slider class="js-hp-component c-generic-carousel-slider no-top-spacing-only
                                    
                                     
                                    
                                    " id="id33da2d7f4ce015dcefbf818bd06878f912848e7ba0504c8fe956b6512873eb0c" arrows-style="default" carousel-loop="true" auto-rotate="8000" space-between="10" slide-width="0" slides-per-group="one">
    <style>
        
            

            
            
                #id33da2d7f4ce015dcefbf818bd06878f912848e7ba0504c8fe956b6512873eb0c {
                    background: #F5F5F5;
                }
            
        

        

        
            #id33da2d7f4ce015dcefbf818bd06878f912848e7ba0504c8fe956b6512873eb0c.c-generic-carousel-slider .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
                background: padding-box #626262;
            }
        

        
            #id33da2d7f4ce015dcefbf818bd06878f912848e7ba0504c8fe956b6512873eb0c.c-generic-carousel-slider .swiper-pagination-bullet:not(.swiper-pagination-bullet-active):hover,
            #id33da2d7f4ce015dcefbf818bd06878f912848e7ba0504c8fe956b6512873eb0c.c-generic-carousel-slider .swiper-pagination-bullet.swiper-pagination-bullet-active {
                background: padding-box #56585A;
            }
        

        
    </style>
    <div class="c-generic-carousel-slider__slides swiper-container">
      <div class="swiper-wrapper">
        
            <div class="c-generic-carousel-slider__slide swiper-slide">
                <hp-generic-card class="c-generic-card" data-metrics-customhandler data-metrics-event="e_linkClick" data-metrics-link-placement="slide-arrow" data-metrics-link-id="slide-01-generation-impact">
                    <div class="c-generic-card__image c-video-container--container-fit">
                        
                            
                            <div>




    
    
    <div class="customInfoBanner">

<!-- CSSLoadingService: CSS "/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-custom-info-banner-v2.4ec7a134.css" already injected -->


    <link rel="preload" as="script" href="/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-custom-info-banner-v2.4ec7a134.js"/>


<hp-custom-info-banner-v2 class="js-hp-component c-custom-info-banner-v2 ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e    media-position-top title-on-side     
         
        ">

    

    <style>
        .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 {
            background: rgba(255,225,55,0.7);
        }
    </style>

    <style>
        .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__header--title-wrapper {
            
                color: #000;
            
            
                background: #ffe137;
            
        }
        .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__header--subtitle-wrapper {
            
                color: #000;
            
            
        }

        

        

        

        

        @media screen and (min-width: 1920px) {
            
                .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__container:before {
                    background: rgba(255,225,55,0.7);
                }
            

            
                .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__container,
                .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__content,
                .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__content .c-custom-info-banner-v2__content--inner {
                    min-height: 600px;
                }
            

            
        }

        @media screen and (min-width: 1280px) and (max-width: 1919.98px) {
            
                .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__container,
                .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__content,
                .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__content .c-custom-info-banner-v2__content--inner {
                    min-height: 600px;
                }
            
            
        }
        
            @media screen and (min-width: 720px) and (max-width: 1279.98px) {
                
                    .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__media {
                        height: 400px;
                        min-height: 400px;
                    }
                
                
            }

            @media screen and (max-width: 719.98px) {
                
                    .ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e.c-custom-info-banner-v2 .c-custom-info-banner-v2__media {
                        height: 260px;
                            min-height: 260px;
                        }
                
                
            }
        
    </style>

    
    
    
    <div class="c-custom-info-banner-v2__media c-custom-info-banner-v2__media--cloned ">
        <div class="c-image-container">
            <hp-image lazy mode="cover" alt="hp-tank" tabindex="100" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/banners/VISID-LATAM-smart-tank-mobile_2x-2023.jpg | @+md => /content/dam/sites/worldwide/homepage/images/banners/VISID-LATAM-smart-tank-tablet_2x-2023.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/banners/VISID-LATAM-smart-tank-desktop_2x-2023.jpg | @+xl => /content/dam/sites/worldwide/homepage/images/banners/VISID-LATAM-smart-tank-desktop_2x-2023.jpg">
            </hp-image>
        </div>
        
        
        
    </div>
    <div class="c-custom-info-banner-v2__header  ">
        <div class="c-custom-info-banner-v2__header--title-wrapper  ">
            
            <div class="container">
                <h2 class="c-custom-info-banner-v2__header--title xxl">
                    Impresoras de Tanques de Tinta HP

                </h2>
                
            </div>
        </div>
        <div class="c-custom-info-banner-v2__header--subtitle-wrapper  ">
            
            <div class="container">
                <h2 class="c-custom-info-banner-v2__header--subtitle h1">
                    Imprimir se hizo más fácil

                </h2>
                
            </div>
        </div>
    </div>

    <div class="c-custom-info-banner-v2__container">
        <div class="c-custom-info-banner-v2__content container">
            <div class="c-custom-info-banner-v2__content--inner ">
                <div class="c-custom-info-banner-v2__header--title-wrapper">
                    <p class="c-custom-info-banner-v2__header--title xxl">
                        Impresoras de Tanques de Tinta HP

                    </p>
                </div>
                <div class="c-custom-info-banner-v2__header--subtitle-wrapper">
                    <p class="c-custom-info-banner-v2__header--subtitle h1">
                        Imprimir se hizo más fácil

                    </p>
                </div>
                <div class="c-custom-info-banner-v2__content--components-list">
                    




    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #id4b0973f28347867995c6c806a27f10911bb38c5695a6c34b761a5e838064318a{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id4b0973f28347867995c6c806a27f10911bb38c5695a6c34b761a5e838064318a:focus,
            #id4b0973f28347867995c6c806a27f10911bb38c5695a6c34b761a5e838064318a:hover,
            #id4b0973f28347867995c6c806a27f10911bb38c5695a6c34b761a5e838064318a.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/printers/smart-tank.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id4b0973f28347867995c6c806a27f10911bb38c5695a6c34b761a5e838064318a" data-link-type="e_learnClick" data-link-placement="b-aem1" data-link-id="print_b-aem1_2023-10-27_prod_comm_smart-tank-printers_s1.1_Learn">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
            
            
            
                
    <style type="text/css">
        
            #idca25e9d88e2112eadbd0ce68ad5b0d74bf86f4272bba27ae003dc73462e6285a{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #idca25e9d88e2112eadbd0ce68ad5b0d74bf86f4272bba27ae003dc73462e6285a:focus,
            #idca25e9d88e2112eadbd0ce68ad5b0d74bf86f4272bba27ae003dc73462e6285a:hover,
            #idca25e9d88e2112eadbd0ce68ad5b0d74bf86f4272bba27ae003dc73462e6285a.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/smart-tank-hp#comprarImpresorasSmartTank" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="idca25e9d88e2112eadbd0ce68ad5b0d74bf86f4272bba27ae003dc73462e6285a" data-link-type="e_buyClick" data-link-placement="b-aem1" data-link-id="print_b-aem1_2023-10-27_prod_comm_smart-tank-printers_s1.1_Shop">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                </div>
                
            </div>
        </div>
        <div class="c-custom-info-banner-v2__media ">
            <div class="c-image-container">
                <hp-image lazy mode="cover" alt="hp-tank" tabindex="100" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/banners/VISID-LATAM-smart-tank-mobile_2x-2023.jpg | @+md => /content/dam/sites/worldwide/homepage/images/banners/VISID-LATAM-smart-tank-tablet_2x-2023.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/banners/VISID-LATAM-smart-tank-desktop_2x-2023.jpg | @+xl => /content/dam/sites/worldwide/homepage/images/banners/VISID-LATAM-smart-tank-desktop_2x-2023.jpg">
                </hp-image>
            </div>
            
            
            
        </div>
    </div>
</hp-custom-info-banner-v2>

<script>
    (function (customInfoBannerV2) {
        if (!customInfoBannerV2) return;
        const c = function (v) {
          return '.c-custom-info-banner-v2' + v + ' ';
        };

        //AEM-6457 - moveBadgesToMedia() fn moved to inline script to prevent performance issues
        const badgesWrapper = customInfoBannerV2.querySelector(c('__content .badges-section'));
        if (badgesWrapper && !customInfoBannerV2.classList.contains('edit-mode') && customInfoBannerV2.classList.contains('badges-inside-media')) {
          const allMedias = customInfoBannerV2.querySelectorAll(c('__media'));
          allMedias.forEach((media) => {
            const badges = badgesWrapper.cloneNode(true);
            media.appendChild(badges);
          });
          badgesWrapper.remove();
        }
      })(document.querySelector('hp-custom-info-banner-v2.ida762bd900f0e3a7680d75c5c38673e721c83992bd997f137f27a86dd42962b0e'));
</script>
</div>


</div>
                        
                    </div>
                </hp-generic-card>
            </div>
        
            <div class="c-generic-carousel-slider__slide swiper-slide">
                <hp-generic-card class="c-generic-card" data-metrics-customhandler data-metrics-event="e_linkClick" data-metrics-link-placement="slide-arrow" data-metrics-link-id="slide-02-plant-a-tree">
                    <div class="c-generic-card__image c-video-container--container-fit">
                        
                            
                            <div>




    
    
    <div class="customInfoBanner">

<!-- CSSLoadingService: CSS "/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-custom-info-banner-v2.4ec7a134.css" already injected -->


    <link rel="preload" as="script" href="/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-custom-info-banner-v2.4ec7a134.js"/>


<hp-custom-info-banner-v2 class="js-hp-component c-custom-info-banner-v2 id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9   reverse-order media-position-top title-on-side     
         
        ">

    

    <style>
        .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 {
            background: #87bbfa;
        }
    </style>

    <style>
        .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__header--title-wrapper {
            
                color: #000;
            
            
                background: #549ef8;
            
        }
        .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__header--subtitle-wrapper {
            
                color: #000;
            
            
                background: #87bbfa;
            
        }

        

        

        

        

        @media screen and (min-width: 1920px) {
            
                .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__container:before {
                    background: #87bbfa;
                }
            

            
                .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__container,
                .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__content,
                .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__content .c-custom-info-banner-v2__content--inner {
                    min-height: 600px;
                }
            

            
        }

        @media screen and (min-width: 1280px) and (max-width: 1919.98px) {
            
                .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__container,
                .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__content,
                .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__content .c-custom-info-banner-v2__content--inner {
                    min-height: 600px;
                }
            
            
        }
        
            @media screen and (min-width: 720px) and (max-width: 1279.98px) {
                
                    .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__media {
                        height: 400px;
                        min-height: 400px;
                    }
                
                
            }

            @media screen and (max-width: 719.98px) {
                
                    .id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9.c-custom-info-banner-v2 .c-custom-info-banner-v2__media {
                        height: 260px;
                            min-height: 260px;
                        }
                
                
            }
        
    </style>

    
    
    
    <div class="c-custom-info-banner-v2__media c-custom-info-banner-v2__media--cloned focal-point--right">
        <div class="c-image-container">
            <hp-image lazy mode="cover" alt="gaming-laptops-victus" tabindex="100" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/banners/omen-laptops-VISID-mobile-2x.png | @+md => /content/dam/sites/worldwide/homepage/images/banners/omen-laptops-VISID-tablet-2x.png.png | @+lg => /content/dam/sites/worldwide/homepage/images/banners/omen-laptops-VISID-desktop-2x.png.png | @+xl => /content/dam/sites/worldwide/homepage/images/banners/omen-laptops-VISID-desktop-2x.png.png">
            </hp-image>
        </div>
        
        
        
    </div>
    <div class="c-custom-info-banner-v2__header  ">
        <div class="c-custom-info-banner-v2__header--title-wrapper  ">
            
            <div class="container">
                <h2 class="c-custom-info-banner-v2__header--title xxl">
                    Notebooks de Gaming

                </h2>
                
            </div>
        </div>
        <div class="c-custom-info-banner-v2__header--subtitle-wrapper  ">
            
            <div class="container">
                <h2 class="c-custom-info-banner-v2__header--subtitle h1">
                    Eleva tu nivel de juego.

                </h2>
                
            </div>
        </div>
    </div>

    <div class="c-custom-info-banner-v2__container">
        <div class="c-custom-info-banner-v2__content container">
            <div class="c-custom-info-banner-v2__content--inner ">
                <div class="c-custom-info-banner-v2__header--title-wrapper">
                    <p class="c-custom-info-banner-v2__header--title xxl">
                        Notebooks de Gaming

                    </p>
                </div>
                <div class="c-custom-info-banner-v2__header--subtitle-wrapper">
                    <p class="c-custom-info-banner-v2__header--subtitle h1">
                        Eleva tu nivel de juego.

                    </p>
                </div>
                <div class="c-custom-info-banner-v2__content--components-list">
                    




    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #ide0eefb47ab8a177d24612f091080fd3d27a7b90b240d3fb10c1237a2d601256b{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #ide0eefb47ab8a177d24612f091080fd3d27a7b90b240d3fb10c1237a2d601256b:focus,
            #ide0eefb47ab8a177d24612f091080fd3d27a7b90b240d3fb10c1237a2d601256b:hover,
            #ide0eefb47ab8a177d24612f091080fd3d27a7b90b240d3fb10c1237a2d601256b.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/gaming/laptops/2021-victus-16-1-intel.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="ide0eefb47ab8a177d24612f091080fd3d27a7b90b240d3fb10c1237a2d601256b" data-link-type="e_learnClick" data-link-placement="b-aem1" data-link-id="ps_b-aem1_2022-09-12_prod_cons_gaming-laptops-victus_s1.2_Learn">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
            
            
            
                
    <style type="text/css">
        
            #id36ac02c0a773b3febeae0f72d60fcec1d7186dcef51455082997a36a9bf51b3f{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id36ac02c0a773b3febeae0f72d60fcec1d7186dcef51455082997a36a9bf51b3f:focus,
            #id36ac02c0a773b3febeae0f72d60fcec1d7186dcef51455082997a36a9bf51b3f:hover,
            #id36ac02c0a773b3febeae0f72d60fcec1d7186dcef51455082997a36a9bf51b3f.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/notebooks/notebooks-personales/notebooks-omen.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id36ac02c0a773b3febeae0f72d60fcec1d7186dcef51455082997a36a9bf51b3f" data-link-type="e_buyClick" data-link-placement="b-aem1" data-link-id="ps_b-aem1_2022-09-12_prod_cons_gaming-laptops-victus_s1.2_Shop">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                </div>
                
            </div>
        </div>
        <div class="c-custom-info-banner-v2__media focal-point--right">
            <div class="c-image-container">
                <hp-image lazy mode="cover" alt="gaming-laptops-victus" tabindex="100" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/banners/omen-laptops-VISID-mobile-2x.png | @+md => /content/dam/sites/worldwide/homepage/images/banners/omen-laptops-VISID-tablet-2x.png.png | @+lg => /content/dam/sites/worldwide/homepage/images/banners/omen-laptops-VISID-desktop-2x.png.png | @+xl => /content/dam/sites/worldwide/homepage/images/banners/omen-laptops-VISID-desktop-2x.png.png">
                </hp-image>
            </div>
            
            
            
        </div>
    </div>
</hp-custom-info-banner-v2>

<script>
    (function (customInfoBannerV2) {
        if (!customInfoBannerV2) return;
        const c = function (v) {
          return '.c-custom-info-banner-v2' + v + ' ';
        };

        //AEM-6457 - moveBadgesToMedia() fn moved to inline script to prevent performance issues
        const badgesWrapper = customInfoBannerV2.querySelector(c('__content .badges-section'));
        if (badgesWrapper && !customInfoBannerV2.classList.contains('edit-mode') && customInfoBannerV2.classList.contains('badges-inside-media')) {
          const allMedias = customInfoBannerV2.querySelectorAll(c('__media'));
          allMedias.forEach((media) => {
            const badges = badgesWrapper.cloneNode(true);
            media.appendChild(badges);
          });
          badgesWrapper.remove();
        }
      })(document.querySelector('hp-custom-info-banner-v2.id53706eaa7694c31e63ecfa92b8974e336e4311c004c21c4100a475448257afe9'));
</script>
</div>


</div>
                        
                    </div>
                </hp-generic-card>
            </div>
        
            <div class="c-generic-carousel-slider__slide swiper-slide">
                <hp-generic-card class="c-generic-card" data-metrics-customhandler data-metrics-event="e_linkClick" data-metrics-link-placement="slide-arrow" data-metrics-link-id="slide-03-smart-printing">
                    <div class="c-generic-card__image c-video-container--container-fit">
                        
                            
                            <div>




    
    
    <div class="customInfoBanner">

<!-- CSSLoadingService: CSS "/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-custom-info-banner-v2.4ec7a134.css" already injected -->


    <link rel="preload" as="script" href="/etc.clientlibs/hp-com/clientlibs/clientlib-components/resources/hp-components-custom-info-banner-v2.4ec7a134.js"/>


<hp-custom-info-banner-v2 class="js-hp-component c-custom-info-banner-v2 id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba    media-position-top title-on-side     
         
        ">

    

    <style>
        .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 {
            background: #FFF;
        }
    </style>

    <style>
        .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__header--title-wrapper {
            
                color: #000;
            
            
                background: #549ef8;
            
        }
        .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__header--subtitle-wrapper {
            
                color: #000;
            
            
                background: #FFF;
            
        }

        

        

        

        

        @media screen and (min-width: 1920px) {
            
                .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__container:before {
                    background: #FFF;
                }
            

            
                .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__container,
                .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__content,
                .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__content .c-custom-info-banner-v2__content--inner {
                    min-height: 600px;
                }
            

            
        }

        @media screen and (min-width: 1280px) and (max-width: 1919.98px) {
            
                .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__container,
                .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__content,
                .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__content .c-custom-info-banner-v2__content--inner {
                    min-height: 600px;
                }
            
            
        }
        
            @media screen and (min-width: 720px) and (max-width: 1279.98px) {
                
                    .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__media {
                        height: 400px;
                        min-height: 400px;
                    }
                
                
            }

            @media screen and (max-width: 719.98px) {
                
                    .id52fee4db8c5b841735ff8892dbb2e151b8f5291ae152373be6ea9378e2d826ba.c-custom-info-banner-v2 .c-custom-info-banner-v2__media {
                        height: 260px;
                            min-height: 260px;
                        }
                
                
            }
        
    </style>

    
    
    
    <div class="c-custom-info-banner-v2__media c-custom-info-banner-v2__media--cloned ">
        <div class="c-image-container">
            <hp-image lazy mode="cover" alt="laserjet-tank" tabindex="100" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/banners/VISID-laserjet-tank-mobile_2x.jpg | @+md => /content/dam/sites/worldwide/homepage/images/banners/VISID-laserjet-tank-tablet_2x.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/banners/VISID-laserjet-tank-desktop_2x.jpg | @+xl => /content/dam/sites/worldwide/homepage/images/banners/VISID-laserjet-tank-desktop_2x.jpg">
            </hp-image>
        </div>
        
        
        
    </div>
    <div class="c-custom-info-banner-v2__header  ">
        <div class="c-custom-info-banner-v2__header--title-wrapper  ">
            
            <div class="container">
                <h1 class="c-custom-info-banner-v2__header--title xxl">
                    HP LaserJet Tank

                </h1>
                
            </div>
        </div>
        <div class="c-custom-info-banner-v2__header--subtitle-wrapper  ">
            
            <div class="container">
                <h2 class="c-custom-info-banner-v2__header--subtitle h1">
                    Productividad poderosa a bajo costo

                </h2>
                
            </div>
        </div>
    </div>

    <div class="c-custom-info-banner-v2__container">
        <div class="c-custom-info-banner-v2__content container">
            <div class="c-custom-info-banner-v2__content--inner ">
                <div class="c-custom-info-banner-v2__header--title-wrapper">
                    <p class="c-custom-info-banner-v2__header--title xxl">
                        HP LaserJet Tank

                    </p>
                </div>
                <div class="c-custom-info-banner-v2__header--subtitle-wrapper">
                    <p class="c-custom-info-banner-v2__header--subtitle h1">
                        Productividad poderosa a bajo costo

                    </p>
                </div>
                <div class="c-custom-info-banner-v2__content--components-list">
                    




    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #id3173a163e5185afa85347c9da1af9f66ad1d511070ba261c7c69e767b8115bf7{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id3173a163e5185afa85347c9da1af9f66ad1d511070ba261c7c69e767b8115bf7:focus,
            #id3173a163e5185afa85347c9da1af9f66ad1d511070ba261c7c69e767b8115bf7:hover,
            #id3173a163e5185afa85347c9da1af9f66ad1d511070ba261c7c69e767b8115bf7.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/printers/laserjet-tank.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id3173a163e5185afa85347c9da1af9f66ad1d511070ba261c7c69e767b8115bf7" data-link-type="e_learnClick" data-link-placement="b-aem1" data-link-id="print_b-aem1_2023-10-27_prod_cons_laserjet-tank_s1.3_Learn">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                </div>
                
            </div>
        </div>
        <div class="c-custom-info-banner-v2__media ">
            <div class="c-image-container">
                <hp-image lazy mode="cover" alt="laserjet-tank" tabindex="100" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/banners/VISID-laserjet-tank-mobile_2x.jpg | @+md => /content/dam/sites/worldwide/homepage/images/banners/VISID-laserjet-tank-tablet_2x.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/banners/VISID-laserjet-tank-desktop_2x.jpg | @+xl => /content/dam/sites/worldwide/homepage/images/banners/VISID-laserjet-tank-desktop_2x.jpg">
                </hp-image>
            </div>
            
            
            
        </div>
    </div>
</hp-custom-info-banner-v2>

<script>
    (function (customInfoBannerV2) {
        if (!customInf
                    c-2.398,0-4.351,1.951-4.351,4.349v26.301c0,1.632-1.324,2.956-2.956,2.956c-1.63,0-2.956-1.325-2.956-2.956V4.349
                    C10.17,1.951,8.219,0,5.82,0c-2.397,0-4.35,1.951-4.35,4.349v19.007H0v5.846c0,0.807,0.655,1.461,1.462,1.461h2.922v-5.846
                    c0-0.807-0.655-1.461-1.461-1.461H2.864V4.349c0-1.631,1.325-2.958,2.956-2.958c1.63,0,2.956,1.327,2.956,2.958v26.301
                    c0,2.397,1.952,4.352,4.351,4.352c2.397,0,4.35-1.953,4.35-4.352V4.349c0-1.631,1.325-2.958,2.956-2.958s2.956,1.327,2.956,2.958
                    v26.301c0,2.397,1.952,4.352,4.35,4.352c2.398,0,4.352-1.953,4.352-4.352V11.647h1.493V5.802L33.583,5.802z M2.923,29.2H1.462
                    v-4.385h1.461V29.2z M32.122,10.185h-1.461V5.801h1.461V10.185z"/></symbol><symbol id="i-global-workspaces"><!-- viewBox="0 0 38.5 35" --><path stroke="none" d="M38.5,14H28v-1.75h5.25V2.625C33.25,1.178,32.072,0,30.625,0H15.75v9.625c0,1.446,1.179,2.625,2.625,2.625
                    H21V14H0v5.25h1.75V35H3.5v-1.75h12.25v-14H35V35h1.75V19.25h1.75V14z M17.5,9.625V1.75h13.125c0.481,0,0.875,0.392,0.875,0.875
                    V10.5H18.375C17.895,10.5,17.5,10.107,17.5,9.625z M22.75,12.25h3.5V14h-3.5V12.25z M3.5,31.5v-5.25H14v5.25H3.5z M14,24.5H3.5
                    v-5.25H14V24.5z M36.75,17.5h-35v-1.75h35V17.5z"/><rect stroke="none" x="7.22" y="20.835" width="3.5" height="2.079"/><rect stroke="none" x="7.22" y="27.835" width="3.5" height="2.079"/></symbol><symbol id="i-global-bags"><!-- viewBox="0 0 40.848 35" --><path stroke="none" d="M30.793,4.367l-1.57-3.153C28.829,0.465,28.063,0,27.218,0h-6.32c-0.845,0-1.612,0.465-2.011,1.226
                    l-1.565,3.141H7.269v10.225H8.75V5.847h30.618v17.488h-7.285v1.479h8.765V4.367H30.793L30.793,4.367z M20.186,1.889
                    c0.139-0.266,0.41-0.431,0.711-0.431h6.32c0.301,0,0.572,0.165,0.703,0.419l1.239,2.489H18.95L20.186,1.889z"/><path stroke="none" d="M3.631,20.426v1.459h0.729v1.567c0,0.402,0.327,0.729,0.729,0.729c0.401,0,0.729-0.326,0.729-0.729v-1.567
                    h21.156v-1.459H3.631z"/><path stroke="none" d="M28.434,16.067H0v16.762C0,34.024,0.973,35,2.171,35h28.434V18.238
                    C30.604,17.04,29.633,16.067,28.434,16.067z M29.182,33.575H2.172c-0.412,0-0.747-0.334-0.747-0.747V17.49h27.01
                    c0.412,0,0.747,0.334,0.747,0.747V33.575z"/></symbol><symbol id="i-global-contact-store"><path d="M77.15,43.28a5.35,5.35,0,0,0-1.17.14c0.14-4.76-.08-22.56-10.54-31.89C60,6.7,52.76,5,43.82,6.38A8.75,8.75,0,0,0,40,1.22c-3-1.78-7.13-1.6-12.13.48-0.33.09-32.48,9-22.92,48l2.38-.58C-1.65,12.52,27.26,4.39,28.65,4,33,2.2,36.43,2,38.73,3.31a6.72,6.72,0,0,1,2.93,4.6L41.8,9.22,43.09,9c8.68-1.6,15.65-.13,20.7,4.37,11,9.79,9.7,30.86,9.7,30.91a93.92,93.92,0,0,1-1.79,11.29,4.65,4.65,0,0,1-3.64-1c-1.73-1.54-1.92-4.38-1.94-5,2.61-10.76.17-13-.65-13.46l-0.44-.14c-5.77-.68-10.46-5.78-11.3-6.75-1.3-3.77-3.1-5.85-5.36-6.19-3.43-.5-6.21,3.21-6.51,3.64-8.26,11.48-25.41,6.93-25.46,6.93a2.86,2.86,0,0,0-3,.12c-1.37,1-1.21,3.17-1.17,3.46L12.21,51.61c-1.77-1.27-4.37-2.63-6.9-2S1.08,52.55.06,56.44L0,56.68l0,0.24c0,0.26,1,6.32,10,10.53,1.47,4,11.31,28.78,27.88,32.15H38c1,0,11.76,2.14,20.86-12.78,0.7-1.69-.66-2.41-2.09-1.28-8.54,14-18.66,11.61-18.56,11.64-16.06-3.29-25.93-30.76-26-31L12,65.64l-0.48-.21c-7.31-3.24-8.78-7.62-9-8.63C3.28,54,4.43,52.38,5.91,52c2.43-.64,5.65,2.06,6.69,3.14l0.3-.29,1.81,1.89V37a2.82,2.82,0,0,1,.16-1.34,1.77,1.77,0,0,1,.75.2c0.77,0.21,19,5.08,28.26-7.81,0.55-.77,2.48-2.89,4.16-2.64,1.3,0.2,2.51,1.84,3.48,4.77l0.21,0.39c0.22,0.28,5.48,6.66,12.6,7.73,0.36,0.6,1.3,3.07-.6,10.8l0,0.28c0,0.18,0,4.49,2.75,7A6.79,6.79,0,0,0,71.1,58C68,69.88,63.57,73.47,63.51,73.52s-0.31,1.41.72,1.54,2.2-1.65,2.2-1.65c0.63-.5,4.33-6.49,7-15.28v6.5c-1.06,5.53-3.48,9.61-7.25,12.13-6.25,4.18-14.52,3-17.08,2.48-0.66-2.94-4.13-5.11-8.45-5.11-4.81,0-8.57,2.69-8.57,6.12s3.76,6.12,8.57,6.12c4.09,0,7.42-2,8.32-4.66a32.13,32.13,0,0,0,5.87.54A22.81,22.81,0,0,0,67.49,78.8a19.31,19.31,0,0,0,7.76-11.37,5.86,5.86,0,0,0,1.91.35c4.81,0,8.57-5.38,8.57-12.24S82,43.28,77.15,43.28ZM40.62,83.92c-3.32,0-6.12-1.68-6.12-3.67s2.8-3.67,6.12-3.67,6.12,1.68,6.12,3.67S43.93,83.92,40.62,83.92Zm36.54-18.6a3.64,3.64,0,0,1-1-.16V45.89a3.65,3.65,0,0,1,1-.16c3.32,0,6.12,4.49,6.12,9.79S80.47,65.32,77.15,65.32Z"></path></symbol><symbol id="i-global-faq"><path d="M6.16,100.09c-0.55,0-.88,0-1,0-1.06-.14-3.93-0.56-4.31-2.59s2.5-4,3.77-4.76c6.13-4.24,9.21-8.88,10.51-12.93,0.89-2.8-.17-4-0.23-4.06l0.87-2.6A6.64,6.64,0,0,1,18.15,80C16.83,84.89,12.9,90,6,94.84a7.07,7.07,0,0,0-2.62,2.21,7,7,0,0,0,2.08.53h0A56,56,0,0,0,39.52,85.33l1.56,2A58,58,0,0,1,6.16,100.09Z"></path><path d="M48,56.56q0-1,0-1.45a13.55,13.55,0,0,1,.81-4.92A11.2,11.2,0,0,1,50.68,47a36.49,36.49,0,0,1,3.48-3.38,16.43,16.43,0,0,0,3.27-3.54,5.71,5.71,0,0,0,.75-2.88,6.71,6.71,0,0,0-2.21-5,7.46,7.46,0,0,0-5.41-2.14,7.27,7.27,0,0,0-5.16,1.94,10.2,10.2,0,0,0-2.72,6.05l-5-.59a12.85,12.85,0,0,1,4-8.45,12.79,12.79,0,0,1,8.78-2.93q5.78,0,9.23,3.15a9.94,9.94,0,0,1,3.44,7.61A9.64,9.64,0,0,1,62,41.69,22.59,22.59,0,0,1,57.22,47a24,24,0,0,0-3.09,3.09A6.87,6.87,0,0,0,53,52.37a19.1,19.1,0,0,0-.4,4.2H48Zm-0.3,9.71V60.76h5.51v5.51H47.7Z"></path><path d="M50.08,1C22.42,1,0,20.61,0,44.81c0,13.57,7.06,25.7,18.13,33.74a11.91,11.91,0,0,0-.72-3.75C8.24,67.26,2.5,56.61,2.5,44.81,2.5,22,23.85,3.49,50.08,3.49S97.65,22,97.65,44.81,76.31,86.12,50.08,86.12a54.58,54.58,0,0,1-9.6-.85c-1.64-.08-2.87,1.12-3.9,2a50.82,50.82,0,0,0,13.5,1.34c27.66,0,50.08-19.62,50.08-43.82S77.73,1,50.08,1Z"></path></symbol><symbol id="i-track-order"><!-- viewBox="0 -4 30 36" --><path d="M15,0A11,11,0,0,0,4,11c0,6.3,6.1,14.5,10.2,18.8a1,1,0,0,0,1.4,0C20,25.4,26,17.2,26,11A11,11,0,0,0,15,0Zm.4,29.4c-.1.1-.2.1-.4.1s-.3-.1-.4-.1C9.8,24.4,4.5,16.6,4.5,11a10.5,10.5,0,0,1,21,0C25.5,16.6,20.3,24.5,15.4,29.4Z"/><path d="M9.2,7.7v5.8l5.9,2.9,5.8-3V7.6L15,4.7Zm10.86,0L15,10.22,9.94,7.83,15,5.3ZM9.6,8.22l5.15,2.44v5L9.6,13.2Zm5.65,7.45v-5L20.4,8.13v5Z"/></symbol><symbol id="i-global-forum-chat"><!-- viewBox="0 0 50.333 34.835" --><polyline fill="none" stroke-width="1.5" stroke-miterlimit="10" points="30.667,4.583 30.667,0.75 0.75,0.75
                        0.75,22.5 7.583,22.5 7.667,28.333 15,22.583 15.708,22.5 "></polyline><polygon fill="none" stroke-width="1.5" stroke-miterlimit="10" points="19.75,7.667 48.75,7.667 48.75,8.583
                        49.583,8.583 49.583,27.417 42.917,27.417 42.75,33.333 35.583,27.75 19.75,27.583 "></polygon><line fill="none" stroke-width="1.5" stroke-miterlimit="10" x1="25.256" y1="22.667" x2="43" y2="22.667"></line><line fill="none" stroke-width="1.5" stroke-miterlimit="10" x1="25.25" y1="17.587" x2="43" y2="17.587"></line><line fill="none" stroke-width="1.5" stroke-miterlimit="10" x1="25.25" y1="12.5" x2="43" y2="12.5"></line><path d="M0.75,23.583"></path></symbol><symbol id="i-global-screwdriver-and-wrench"><!-- viewBox="0 0 36.904 35.925" --><path fill="none" stroke-width="1.5" stroke-miterlimit="10" d="M2.061,29.958"></path><path fill="none" stroke-width="1.5" stroke-miterlimit="10" d="M1.436,29.333"></path><polygon fill="none" stroke-width="1.5" stroke-miterlimit="10" points="13.186,19.396 12.217,18.427
                        10.623,20.021 10.623,21.646 4.436,27.833 3.186,27.833 1.779,29.239 1.061,29.958 5.967,34.864 8.279,32.552 8.279,30.958
                        14.701,24.536 16.373,24.536 17.475,23.435 "></polygon><polygon fill="none" stroke-width="1.5" stroke-miterlimit="10" points="13.88,20.05 28.017,5.914 28.017,5.021
                        30.727,2.311 33.061,4.646 30.311,7.396 29.623,7.396 15.479,21.54 "></polygon><path fill="none" stroke-width="1.5" stroke-miterlimit="10" d="M36.154,26.974c0,4.357-3.533,7.891-7.891,7.891
                        l0,0c-4.357,0-7.891-3.533-7.891-7.891l0,0c0-4.357,3.533-7.891,7.891-7.891l0,0C32.621,19.083,36.154,22.616,36.154,26.974
                        L36.154,26.974z"></path><path fill="none" stroke-miterlimit="10" d="M144.436,74.333"></path><path fill="none" stroke-width="1.5" stroke-miterlimit="10" d="M23.793,24.745"></path><line fill="none" stroke-width="1.5" stroke-miterlimit="10" x1="18.212" y1="19.164" x2="21.938" y2="22.89"></line><path fill="none" stroke-width="1.5" stroke-miterlimit="10" d="M19.518,14.05l-0.837-0.837l-2.763-2.763
                        c0.334-0.792,0.519-1.662,0.519-2.575v-0.5c0-3.659-2.966-6.625-6.625-6.625l0,0c-0.741,0-1.453,0.121-2.118,0.346l2.699,2.699
                        l0.958,0.958v1.414v1.458l-1.062,1.062H8.602H6.936L3.491,5.381C3.292,6.01,3.186,6.68,3.186,7.375v0.5
                        c0,3.659,2.966,6.625,6.625,6.625l0,0c1.085,0,2.109-0.261,3.014-0.724l2.771,2.771l0.673,0.673"></path><path fill="none" stroke-width="1.5" stroke-miterlimit="10" d="M19.518,14.05"></path><line fill="none" stroke-width="1.5" stroke-miterlimit="10" x1="25.369" y1="19.903" x2="21.426" y2="15.958"></line><text transform="matrix(1 0 0 1 26.623 31.083)" fill="none" font-size="11">?</text></symbol><symbol id="i-global-software-and-driver"><!-- viewBox="0 0 33.675 34.563" --><ellipse transform="matrix(0.891 0.454 -0.454 0.891 11.8939 -1.4038)" fill="none" stroke-width="1.5" stroke-miterlimit="10" cx="8.871" cy="24.068" rx="7.468" ry="10.25"></ellipse><path fill="none" stroke-width="1.5" stroke-miterlimit="10" d="M28.05,10.78"></path><path fill="none" stroke-width="1.5" stroke-miterlimit="10" d="M28.05,33.029l4.875-1.75V7.732
                        c0,0-1.146-10.474-23-5.766v11.938"></path><ellipse fill="none" stroke-miterlimit="10" cx="8.55" cy="24.092" rx="1.875" ry="2.063"></ellipse><path fill="none" stroke-width="1.5" stroke-miterlimit="10" d="M10.113,4.134c0,0,17.938-2.553,17.938,7.661
                        v0.313v0.672v20.25l-13.188-3.438"></path><path fill="none" stroke-miterlimit="10" d="M13.488,25.759c0,0,3-5.993-2.667-7.663"></path></symbol><symbol id="i-global-question-circle"><g><path d="M206.5,0C92.453,0,0,92.454,0,206.5C0,320.548,92.453,413,206.5,413C320.546,413,413,320.548,413,206.5 C413,92.454,320.546,0,206.5,0z M205.75,392C103.439,392,20.5,308.726,20.5,206c0-102.725,82.939-186,185.25-186 C308.06,20,391,103.275,391,206C391,308.726,308.06,392,205.75,392z"></path></g><g><path d="M171,171h-26c0,0,0.5-11,2.25-22.75s12.25-30.125,28.25-38.125s33.75-10.313,45.25-7.813s33,4.469,46.25,29.969 s4.75,46.984-3.5,56.734s-24,24.242-30.75,32.492S219.5,240,219.75,262H194c0,0-0.25-17.25,3.5-30s18-25.875,25-33.875 s20-17.813,21.75-27.563s3-16.531-1.75-28.531s-13.5-18.016-31-18.016s-31.75,7.242-36.5,21.242S171,171,171,171z"></path><rect x="192" y="286" width="29" height="31"></rect></g></symbol><symbol id="i-global-price-match"><!-- viewBox="0 0 30.375 31.813" --><polyline fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" points="17.563,29.625 23.625,31.063 26.688,19.75 "></polyline><path fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M16.625,1.063l-15.875,16 l12.625,12.563l16.25-15.938V0.75L16.625,1.063z M22.708,11.074c-1.916,0-3.469-1.553-3.469-3.469s1.553-3.469,3.469-3.469 s3.469,1.553,3.469,3.469S24.624,11.074,22.708,11.074z"></path></symbol><symbol id="i-global-return-cart"><!-- viewBox="0 0 30.784 33.797" --><g><path fill="none" stroke-width="1.5" stroke-linecap="round" d="M8.314,5.406 c2.084-1.132,4.473-1.775,7.011-1.775c8.124,0,14.709,6.585,14.709,14.708c0,8.123-6.585,14.708-14.709,14.708 c-7.45,0-13.605-5.538-14.575-12.722"></path><polyline fill="none" stroke-width="1.5" stroke-linecap="round" points="12.957,7.233 8.305,5.402 10.136,0.75"></polyline></g><g><polyline fill="none" stroke-width="1.5" stroke-linecap="round" points="4.146,10.239 8.396,10.239 9.729,15.447 21.98,15.447 20.355,22.697 11.159,22.697 9.729,15.447        "></polyline><circle fill="none" stroke-width="1.5" stroke-linecap="round" cx="12.611" cy="26.108" r="1.452"></circle><circle fill="none" stroke-width="1.5" stroke-linecap="round" cx="18.628" cy="26.091" r="1.452"></circle></g></symbol><symbol id="i-global-wearable-accessory"><!-- viewBox="0 0 29.54 35" --><path stroke="none" d="M18.538,3.328l-0.978,0.97c1.832,1.849,5.3,6.985,5.3,13.201c0,5.82-2.736,10.635-5.299,13.197l0.977,0.977
                    c2.756-2.759,5.698-7.932,5.698-14.173C24.236,10.849,20.654,5.463,18.538,3.328z"/><path stroke="none" d="M20.146,0c-0.153,0-0.311,0.028-0.464,0.042C19.616,0.021,19.547,0,19.474,0h-6.721
                    c-4.26,0-7.905,4.567-9.404,11.008C1.336,12.675,0,15.563,0,18.845c0,3.834,1.821,7.133,4.418,8.573
                    C6.248,31.988,9.298,35,12.754,35h6.722c0.072,0,0.141-0.021,0.207-0.042C19.836,34.972,19.993,35,20.148,35
                    c5.266,0,9.392-7.688,9.392-17.501C29.539,7.687,25.411,0,20.146,0z M12.753,1.357h3.537c-2.439,1.701-4.632,4.914-5.855,9.033
                    C9.489,9.825,8.44,9.499,7.33,9.499c-0.816,0-1.6,0.179-2.333,0.494C6.469,4.867,9.388,1.357,12.753,1.357z M1.2,18.845
                    c0-4.492,2.75-8.146,6.128-8.146s6.128,3.654,6.128,8.146s-2.749,8.146-6.128,8.146S1.2,23.338,1.2,18.845z M12.753,33.641
                    c-2.64,0-4.997-2.179-6.606-5.582c0.386,0.08,0.778,0.133,1.183,0.133c1.419,0,2.744-0.525,3.867-1.422
                    c1.271,3.076,3.098,5.479,5.093,6.871H12.753L12.753,33.641z M20.146,33.641c-2.888,0-6.076-3.129-7.893-7.896
                    c1.473-1.71,2.403-4.166,2.403-6.9c0-3.115-1.206-5.873-3.049-7.571c1.604-5.883,5.263-9.917,8.538-9.917
                    c4.354,0,8.034,7.392,8.034,16.143C28.181,26.249,24.502,33.641,20.146,33.641z"/><path stroke="none" d="M8.001,18.845v-6.056c0-0.372-0.302-0.673-0.673-0.673c-0.372,0-0.673,0.301-0.673,0.673V18.5l-2.639,1.9
                    c-0.303,0.218-0.37,0.639-0.152,0.938c0.132,0.183,0.336,0.279,0.545,0.279c0.137,0,0.274-0.04,0.394-0.129l2.918-2.102
                    C7.898,19.265,8.001,19.062,8.001,18.845z"/></symbol><symbol id="i-global-kakao"><!-- viewBox="0 0 52.566 48.772" --><g><polygon points="18.546,22.455 22.125,22.455 20.334,18.432   "></polygon><path d="M26.282,0C11.766,0,0,9.373,0,20.934c0,7.35,4.758,13.811,11.952,17.546L9.966,48.772l11.366-7.281
                            c1.604,0.244,3.257,0.376,4.95,0.376c14.517,0,26.284-9.372,26.284-20.934C52.566,9.373,40.799,0,26.282,0z M12.793,25.688
                            c0,0.703-0.523,1.278-1.168,1.278c-0.646,0-1.174-0.575-1.174-1.278v-9.077H7.712c-0.618,0-1.123-0.484-1.123-1.075
                            c0-0.592,0.505-1.072,1.123-1.072h7.731c0.622,0,1.127,0.48,1.127,1.072c0,0.591-0.505,1.075-1.127,1.075h-2.65V25.688z
                             M25.986,26.146c-0.108,0.313-0.324,0.559-0.617,0.688c-0.143,0.063-0.294,0.095-0.451,0.095c-0.489,0-0.944-0.311-1.157-0.788
                            l-0.797-1.795h-5.116h-0.142l-0.798,1.795c-0.21,0.478-0.665,0.788-1.153,0.788c-0.157,0-0.311-0.031-0.452-0.095
                            c-0.293-0.129-0.512-0.374-0.616-0.688c-0.109-0.311-0.09-0.658,0.051-0.971l4.409-9.927c0.055-0.126,0.3-0.426,0.548-0.604
                            c0.003-0.002,0.005-0.002,0.007-0.006c0.061-0.041,0.122-0.079,0.181-0.103c0.002-0.002,0.002,0,0.003-0.002
                            c0.006-0.004,0.009-0.005,0.014-0.009c0.139-0.061,0.287-0.092,0.437-0.095c0.15,0.003,0.298,0.034,0.435,0.095
                            c0.007,0.004,0.01,0.005,0.017,0.009c0,0.002,0,0,0.004,0.002c0.058,0.023,0.119,0.061,0.179,0.103
                            c0.002,0.004,0.006,0.004,0.008,0.006c0.249,0.181,0.493,0.479,0.549,0.604c0,0.002,0.002,0.003,0.002,0.003l4.407,9.924
                            C26.076,25.487,26.091,25.835,25.986,26.146z M34.581,27.028h-6.426c-0.77,0-1.14-0.357-1.181-1.137h-0.01v-9.97
                            c0-0.717,0.533-1.296,1.19-1.296c0.658,0,1.194,0.579,1.194,1.296v9.016h5.232c0.549,0,0.995,0.47,0.995,1.044
                            C35.576,26.559,35.13,27.028,34.581,27.028z M45.573,26.678c-0.185,0.146-0.415,0.226-0.668,0.226
                            c-0.445,0-0.903-0.243-1.221-0.643l-3.622-4.572l-1.142,1.159v2.706c0,0.85-0.586,1.539-1.302,1.539
                            c-0.717,0-1.302-0.689-1.302-1.539v-9.503c0-0.846,0.585-1.537,1.302-1.537c0.716,0,1.302,0.691,1.302,1.537v3.465l4.146-4.187
                            c0.354-0.362,0.819-0.579,1.245-0.579c0.279,0,0.521,0.092,0.697,0.266c0.455,0.449,0.327,1.323-0.29,1.946l-2.929,2.975
                            l3.812,4.808c0.247,0.315,0.38,0.693,0.375,1.06C45.968,26.166,45.826,26.479,45.573,26.678z"></path></g></symbol><symbol id="i-global-instagram"><!-- viewBox="0 0 512 512" --><g><path d="M256,49.471c67.266,0,75.233,0.256,101.797,1.468c24.563,1.121,37.901,5.225,46.778,8.674
                        c11.759,4.57,20.151,10.03,28.967,18.845c8.815,8.815,14.274,17.208,18.845,28.966c3.449,8.877,7.554,22.217,8.674,46.778
                        c1.212,26.564,1.469,34.532,1.469,101.798s-0.257,75.233-1.469,101.797c-1.12,24.563-5.225,37.901-8.674,46.778
                        c-4.57,11.759-10.029,20.151-18.845,28.967s-17.208,14.274-28.967,18.845c-8.877,3.449-22.216,7.554-46.778,8.674
                        c-26.56,1.212-34.526,1.469-101.797,1.469s-75.237-0.257-101.797-1.469c-24.562-1.12-37.901-5.225-46.778-8.674
                        c-11.759-4.57-20.151-10.029-28.966-18.845c-8.815-8.815-14.275-17.208-18.845-28.967c-3.45-8.877-7.553-22.216-8.674-46.777
                        c-1.212-26.564-1.468-34.532-1.468-101.798s0.256-75.233,1.468-101.797c1.121-24.562,5.225-37.901,8.674-46.778
                        c4.57-11.759,10.03-20.151,18.845-28.966c8.815-8.815,17.208-14.275,28.966-18.845c8.877-3.45,22.217-7.553,46.778-8.674
                        C180.767,49.727,188.734,49.471,256,49.471 M256,4.08c-68.417,0-76.997,0.29-103.866,1.516
                        c-26.814,1.224-45.127,5.482-61.151,11.71c-16.566,6.438-30.615,15.051-44.621,29.057S23.743,74.417,17.305,90.982
                        c-6.228,16.024-10.486,34.337-11.71,61.151C4.369,179.003,4.08,187.582,4.08,256s0.29,76.996,1.516,103.866
                        c1.224,26.814,5.482,45.127,11.71,61.151c6.438,16.565,15.051,30.615,29.057,44.621c14.005,14.005,28.055,22.618,44.621,29.057
                        c16.024,6.228,34.337,10.486,61.151,11.709c26.87,1.227,35.449,1.517,103.866,1.517c68.418,0,76.996-0.29,103.866-1.517
                        c26.814-1.223,45.127-5.481,61.151-11.709c16.566-6.438,30.615-15.052,44.621-29.057c14.005-14.006,22.618-28.055,29.057-44.621
                        c6.228-16.024,10.486-34.337,11.709-61.151c1.227-26.87,1.517-35.448,1.517-103.866c0-68.417-0.29-76.997-1.517-103.866
                        c-1.223-26.814-5.481-45.127-11.709-61.151c-6.438-16.566-15.052-30.615-29.057-44.621c-14.006-14.005-28.055-22.619-44.621-29.057
                        c-16.024-6.228-34.337-10.486-61.151-11.71C332.996,4.369,324.418,4.08,256,4.08L256,4.08z"/><path d="M256,126.635c-71.446,0-129.365,57.918-129.365,129.365S184.554,385.364,256,385.364S385.364,327.446,385.364,256
                        S327.446,126.635,256,126.635z M256,339.974c-46.377,0-83.974-37.597-83.974-83.974c0-46.377,37.596-83.974,83.974-83.974
                        c46.377,0,83.974,37.596,83.974,83.974C339.974,302.377,302.377,339.974,256,339.974z"/><circle cx="390.476" cy="121.524" r="30.23"/></g></symbol><symbol id="i-global-linkedin"><!-- viewBox="0 0 155.16 144" --><g><g><path d="M133.343,0H10.629C4.765,0,0,4.648,0,10.379v123.23C0,139.345,4.765,144,10.629,144h122.714
                            c5.874,0,10.659-4.655,10.659-10.391V10.379C144.002,4.648,139.217,0,133.343,0z M42.709,122.707H21.35V53.986h21.359V122.707z
                             M32.034,44.592c-6.846,0-12.387-5.55-12.387-12.387c0-6.83,5.541-12.379,12.387-12.379c6.828,0,12.377,5.549,12.377,12.379
                            C44.411,39.042,38.862,44.592,32.034,44.592z M122.706,122.707h-21.344V89.288c0-7.973-0.146-18.223-11.099-18.223
                            c-11.114,0-12.816,8.682-12.816,17.646v33.996H56.104V53.986h20.488v9.389h0.284c2.85-5.403,9.817-11.1,20.208-11.1
                            c21.628,0,25.621,14.233,25.621,32.736V122.707z"/></g><g><path d="M151.939,119.989c0.681-0.084,1.036-0.458,1.036-1.089c0-0.77-0.464-1.143-1.42-1.143h-1.54v4.043h0.579v-1.76h0.715
                            l0.017,0.021l1.106,1.739h0.62l-1.19-1.802L151.939,119.989z M151.269,119.584h-0.674v-1.366h0.854
                            c0.44,0,0.945,0.072,0.945,0.649C152.395,119.531,151.886,119.584,151.269,119.584z"/><path d="M151.335,115.96c-2.147,0-3.83,1.681-3.83,3.823c0,2.147,1.683,3.824,3.83,3.824c2.146,0,3.825-1.677,3.825-3.824
                            C155.16,117.641,153.48,115.96,151.335,115.96z M151.335,123.107c-1.832,0-3.267-1.445-3.267-3.324c0-1.874,1.435-3.32,3.267-3.32
                            c1.83,0,3.265,1.446,3.265,3.32C154.6,121.662,153.165,123.107,151.335,123.107z"/></g></g></symbol><symbol id="i-global-inks"><!-- viewBox="0 0 66.401 79.724" --><path stroke="none" d="M45.527,33.409c-0.576-1.461-1.944-2.405-3.486-2.405c-1.537,0-2.905,0.939-3.49,2.401
                    c-1.758,4.407-3.467,7.879-6.09,12.38c-1.962,3.379-1.997,7.369-0.088,10.688c1.971,3.414,5.674,5.535,9.668,5.535
                    c3.991,0,7.689-2.121,9.651-5.535c1.909-3.318,1.874-7.313-0.089-10.688C48.972,41.244,47.267,37.776,45.527,33.409z
                     M47.857,54.265c-1.179,2.043-3.406,3.314-5.816,3.314c-2.418,0-4.65-1.271-5.824-3.314c-1.125-1.953-1.098-4.238,0.08-6.254
                    c2.428-4.172,4.105-7.499,5.744-11.426c1.621,3.893,3.301,7.223,5.736,11.426C48.951,50.026,48.982,52.312,47.857,54.265z"/><path stroke="none" d="M63.65,14.576c-0.03-0.022-0.044-0.058-0.074-0.084L47.223,2.215C45.318,0.784,42.958,0,40.58,0H0v25.272
                    l4.394,4.429v28.899c0,2.752,1.12,5.436,3.078,7.367l11.737,11.59c0.222,0.217,0.474,0.377,0.744,0.482
                    c1.174,1.037,2.693,1.684,4.372,1.684h42.076V19.931C66.401,17.725,65.312,15.785,63.65,14.576z M44.561,5.758l10.032,7.53H20.586
                    L8.832,4.429h31.743C42.005,4.429,43.423,4.899,44.561,5.758z M8.823,58.601V27.873l-4.394-4.429V6.657l13.252,9.987v53.185
                    l-7.096-7.006C9.465,61.716,8.823,60.179,8.823,58.601z M61.972,75.294H24.325c-1.223,0-2.215-0.996-2.215-2.213V17.716h37.647
                    c1.223,0,2.215,0.992,2.215,2.215V75.294z"/></symbol><symbol id="i-global-toners"><!-- viewBox="0 0 437.5 191.17" --><path stroke="none" d="M411.25,16.17H385V0H52.5v16.17H0v61.25v8.75v78.75c0,14.473,11.778,26.25,26.25,26.25H437.5v-105v-8.75v-35
                    C437.5,27.947,425.722,16.17,411.25,16.17z M411.25,33.67c4.813,0,8.75,3.92,8.75,8.75v26.25h-35v-35H411.25z M367.5,17.5v51.17H70
                    V17.5H367.5z M17.5,33.67h35v35h-35V33.67z M420,173.67H26.25c-4.813,0-8.75-3.938-8.75-8.75V86.17H420V173.67z"/></symbol><symbol id="i-global-papers"><!-- viewBox="0 0 262.5 350" --><path stroke="none" d="M152.372,0H0v323.75C0,338.223,11.777,350,26.25,350H262.5V110.127L152.372,0z M157.5,29.873L232.628,105
                    H166.25c-4.83,0-8.75-3.92-8.75-8.75V29.873z M245,332.5H26.25c-4.83,0-8.75-3.938-8.75-8.75V17.5H140v78.75
                    c0,14.473,11.777,26.25,26.25,26.25H245V332.5z"/></symbol><symbol id="i-global-sprocket-papers"><!-- viewBox="0 0 93.800003 93.800003" --><path d="M 58,-6.1035156e-6 H 14 V 87.299994 c 0,3.6 2.9,6.5 6.5,6.5 h 59.7 v -70.8 z M 58.9,5.1999938 75.2,22.099994 H 62.4 c -1.9,0 -3.5,-1.6 -3.5,-3.5 z M 20.5,90.799994 c -1.9,0 -3.5,-1.6 -3.5,-3.5 V 2.9999938 H 55.9 V 18.599994 c 0,3.6 2.9,6.5 6.5,6.5 h 14.8 v 65.7 z"/><path d="m 52.9,45.599994 -5.8,-13.2 -5.8,13 -13.1,5.9 12.9,5.9 6,13 5.9,-13 13,-5.9 z m -1.1,9 -1,0.5 -0.5,1 -3.2,7.1 -3.3,-7.1 -0.5,-1 -1,-0.5 -6.9,-3.2 7.1,-3.2 1,-0.5 0.5,-1 3.1,-6.9 3.1,7 0.5,1.1 1.1,0.5 7,3 z"/></symbol><symbol id="i-global-instant-ink"><!-- viewBox="0 0 127.548 47.371" --><g transform="translate(-3.112 -2.842)"><g transform="translate(3.112 2.842)"><path fill="#000000" d="M167.449 77.453h-2.3c-.478 0-.716-.269-.716-.774v-35.5h2.3c.476 0 .716.235.716.774z" transform="translate(-117.733 -30.083)"/><path d="M186.955 55.813a.635.635 0 0 1-.715-.712V40.05h1.819a.75.75 0 0 1 .537.154c.179.093.268.31.3.62l.12.96a6.09 6.09 0 0 1 4.743-2.074 3.924 3.924 
                        0 0 1 3.49 1.455 6.547 6.547 0 0 1 1.044 3.934v10.714h-2.3a.74.74 0 0 1-.508-.186.757.757 0 0 1-.208-.527v-9.755a3.191 3.191 0 0 0-.657-2.291 2.366 2.366 
                        0 0 0-1.909-.712 3.812 3.812 0 0 0-2.088.5 6.575 6.575 0 0 0-1.373 1.052v11.919z" transform="translate(-133.225 -29.037)"/><path fill="#000000" d="M236.448 53.222c.655.062 1.342.124 2.117.217.776.062 1.551.124 2.268.124a4.732 4.732 0 0 0 2.655-.527 1.972 1.972 0 0 0 .686-1.673 
                        1.907 1.907 0 0 0-.119-.867 1.42 1.42 0 0 0-.508-.62 2.828 2.828 0 0 0-.955-.5 13.131 13.131 0 0 0-1.581-.464c-.686-.186-1.312-.372-1.909-.557a6.019 6.019 
                        0 0 1-1.521-.805 3.5 3.5 0 0 1-.954-1.239 4.771 4.771 0 0 1-.359-1.982 4.216 4.216 0 0 1 1.4-3.561 6.255 6.255 0 0 1 3.938-1.083 6.629 6.629 0 0 1 
                        1.1.031c.417.031.805.061 1.164.124a9.246 9.246 0 0 1 1.043.186 3.53 3.53 0 0 1 .836.247.929.929 0 0 1 .448.342.807.807 0 0 
                        1 .15.588v1.331c-.9-.123-1.641-.154-2.327-.216-.657-.062-1.283-.093-1.821-.093a4.4 4.4 0 0 0-2.356.465 1.685 1.685 0 0 0-.686 1.486 2.012 2.012 0 0 
                        0 .179.9 1.851 1.851 0 0 0 .567.619 6.9 6.9 0 0 0 1.014.434c.419.124.925.279 1.492.434.686.186 1.312.34 1.879.557a4.332 4.332 0 0 1 1.492.774 2.942 2.942 0 
                        0 1 .955 1.27 5 5 0 0 1 .358 2.044 5.42 5.42 0 0 1-.388 2.292 3.979 3.979 0 0 1-1.163 1.548 4.732 4.732 0 0 1-1.761.836 10.5 10.5 0 
                        0 1-2.3.248c-.357 0-.715 0-1.163-.031-.417-.063-.865-.094-1.281-.155s-.807-.124-1.163-.186c-.359-.093-.628-.186-.837-.248a1.046 1.046 0 0 1-.476-.372 1.847 
                        1.847 0 0 1-.12-.588z" transform="translate(-168.77 -29.016)"/><path fill="#000000" d="M286.876 46.521a10.774 10.774 0 0 1-1.283.278 8.7 8.7 0 0 1-1.283.093 4.238 4.238 0 0 1-3.1-.991 4.328 4.328 0 0 
                        1-.984-3.127v-9.446h-1.046a.635.635 0 0 1-.716-.712v-1.765h1.819l.149-4.088h2.089a.623.623 0 0 1 .716.712v3.376h2.924a.647.647 0 0 
                        1 .508.186.613.613 0 0 1 .208.527v1.765h-3.64v9.291a2.628 2.628 0 0 0 .268 1.3 1.137 1.137 0 0 0 1.075.464h.834a5.027 5.027 0 0 1 .657-.032c.538 
                        0 .805.216.805.712z" transform="translate(-198.75 -19.838)"/><path fill="#000000" d="M319.512 48.285a4.281 4.281 0 0 0-1.492.186 2.156 2.156 0 0 0-.925.558 2.218 2.218 0 0 0-.478.866 3.991 3.991 0 0 0-.148 1.084 2.945 
                        2.945 0 0 0 .656 2.074 2.747 2.747 0 0 0 2 .651 4.239 4.239 0 0 0 2.058-.465 7.415 7.415 0 0 0 1.492-1.115v-3.839zm-1.164 7.8a4.388 4.388 0 0 1-3.46-1.332 
                        5.619 5.619 0 0 1-1.134-3.685 5.622 5.622 0 0 1 .419-2.416 3.571 3.571 0 0 1 1.223-1.518 4.728 4.728 0 0 1 1.879-.8 9.23 9.23 0 0 1 2.327-.248h3.072v-1.053a2.527 
                        2.527 0 0 0-.805-2.2 4.685 4.685 0 0 0-2.744-.588 14.143 14.143 0 0 0-2.357.124c-.685.093-1.134.155-1.372.155a.716.716 0 0 1-.538-.186.869.869 0 
                        0 1-.179-.527v-1.33a12.684 12.684 0 0 1 2.358-.556 15.652 15.652 0 0 1 2.685-.217 8.311 8.311 0 0 1 2.832.372 4.025 4.025 0 0 1 1.821 1.115 3.629 3.629 0 0 
                        1 .954 1.734 7.652 7.652 0 0 1 .3 2.261v10.621h-1.821c-.328 0-.537-.062-.626-.216l-.18-.558-.12-.929a9.174 9.174 0 0 1-1.849 1.363 5.413 5.413 0 
                        0 1-2.685.62" transform="translate(-223.824 -29.035)"/><path fill="#000000" d="M366.149 55.813a.635.635 0 0 1-.715-.712V40.05h1.819a.751.751 0 0 1 .537.154c.179.093.268.31.3.62l.12.96a6.09 6.09 0 0 1 4.743-2.074 
                        3.925 3.925 0 0 1 3.49 1.455 6.545 6.545 0 0 1 1.045 3.934v10.714h-2.3a.74.74 0 0 1-.508-.186.76.76 0 0 1-.208-.527v-9.755a3.2 3.2 0 0 0-.657-2.291 2.366 
                        2.366 0 0 0-1.909-.712 3.807 3.807 0 0 0-2.087.5 6.56 6.56 0 0 0-1.373 1.052v11.919z" transform="translate(-260.542 -29.037)"/><path fill="#000000" d="M423.049 46.521a10.774 10.774 0 0 1-1.283.278 8.7 8.7 0 0 1-1.283.093 4.238 4.238 0 0 1-3.1-.991 4.328 4.328 0 0 
                        1-.984-3.127v-9.446h-1.043a.635.635 0 0 1-.716-.712v-1.765h1.819l.149-4.088h2.089a.623.623 0 0 1 .716.712v3.376h2.924a.647.647 0 0 1 .508.186.613.613 0 
                        0 1 .208.527v1.765h-3.64v9.291a2.624 2.624 0 0 0 .268 1.3 1.137 1.137 0 0 0 1.075.464h.835a5.007 5.007 0 0 1 .657-.032c.538 0 .805.216.805.712z" transform="translate(-295.501 -19.838)"/><path fill="#000000" d="M187.934 126.951a.635.635 0 0 1-.715-.712v-15.05h1.819a.748.748 0 0 1 .538.155c.179.093.268.31.3.62l.12.959a6.09 6.09 0 0 1 
                        4.744-2.074 3.924 3.924 0 0 1 3.49 1.455 6.547 6.547 0 0 1 1.044 3.934v10.714h-2.3a.741.741 0 0 1-.508-.186.758.758 0 0 1-.208-.527v-9.755a3.2 3.2 0 
                        0 0-.657-2.292 2.367 2.367 0 0 0-1.909-.712 3.813 3.813 0 0 0-2.088.5 6.538 6.538 0 0 0-1.372 1.053v11.922z" transform="translate(-133.92 -79.58)"/><path fill="#000000" d="M241.231 109.443h2.3a.636.636 0 0 1 .506.186.609.609 0 0 1 .209.527v6.538a25.677 25.677 0 0 0 3.371-3.376c.9-1.115 1.7-2.167 
                        2.357-3.127h2.238c.358 0 .507.186.507.558a1.427 1.427 0 0 1-.3.774c-.15.248-.417.588-.776 1.084-.358.465-.776.99-1.283 1.549-.476.557-1.044 1.115-1.64 
                        1.734a22.541 22.541 0 0 1-1.821 1.641 19.976 19.976 0 0 1 2 1.858 21.481 21.481 0 0 1 1.731 1.982 22.711 22.711 0 0 1 1.521 2.137c.506.744.984 1.58 
                        1.461 2.447h-2.774a.866.866 0 0 1-.6-.186 2.5 2.5 0 0 1-.358-.526c-.358-.62-.717-1.146-1.1-1.7a12.58 12.58 0 
                        0 0-1.252-1.641c-.448-.558-.956-1.084-1.492-1.642s-1.135-1.146-1.791-1.734v7.432h-2.3a.634.634 0 0 1-.715-.712z" transform="translate(-172.296 -78.582)"/><path fill="#000000" d="M160.784 9.343a3.25 3.25 0 1 0-3.3-3.25 3.276 3.276 0 0 0 3.3 3.25" transform="translate(-112.793 -2.843)"/><path fill="#0096d6" d="M190.53 9.343a3.25 3.25 0 1 0-3.3-3.25 3.276 3.276 0 0 0 3.3 3.25" class="cls-3" transform="translate(-133.927 -2.843)"/><path fill="#d60080" d="M220.275 9.343a3.25 3.25 0 1 0-3.3-3.25 3.276 3.276 0 0 0 3.3 3.25" transform="translate(-155.061 -2.843)"/><path fill="#eedc00" d="M250.019 9.343a3.25 3.25 0 1 0-3.3-3.25 3.276 3.276 0 0 0 3.3 3.25" transform="translate(-176.194 -2.843)"/><path fill="#0096d6" d="M34.085 41.792h-3.073l-4.3 12.257h3.072zM22.409 67.95c-.192 0-.383 0-.573-.009l3.943-11.251h5.427A2.666 2.666 0 0 
                        0 33.53 55l4.278-12.2c.7-2-.4-3.631-2.449-3.631H27.83L21.513 57.19l-3.584 10.216A19.9 19.9 0 0 1 3.113 47.919 19.939 19.939 0 0 1 17.2 28.626l-3.7 
                        10.545L7.36 56.69h4.09l5.224-14.89h3.073l-5.224 14.89h4.088L23.48 42.8c.7-2-.4-3.631-2.448-3.631h-3.437l3.947-11.262c.288-.013.577-.021.868-.021 10.657 
                        0 19.3 8.968 19.3 20.032s-8.64 20.031-19.3 20.031" class="cls-3" transform="translate(-3.113 -20.636)"/></g></g></symbol><symbol id="i-cross-close"><polygon points="101.06 4.4 96.66 0 51.08 45.59 5.49 0 1.09 4.4 46.67 49.99 1.09 95.58 5.49 99.98 51.08 54.39 96.66 99.98 101.06 95.58 55.48 49.99 101.06 4.4"/></symbol><symbol id="i-global-burder"><rect width="100.3" height="11.8"/><rect y="23.6" width="100.3" height="11.8"/><rect y="47.201" width="100.3" height="11.801"/></symbol><symbol id="i-global-email"><!-- viewBox="0 0 24 16" --><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.5,0.5h-23
                    c0,0,8.875,8.875,11.5,8.875S23.5,0.5,23.5,0.5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M12,9.375
                    C9.375,9.375,0.5,0.5,0.5,0.5v15L9.113,8L0.5,15.5h23L14.888,8l8.612,7.5v-15C23.5,0.5,14.625,9.375,12,9.375z"/></symbol><symbol id="i-global-angle-left"><circle cx="553" cy="364" r="18.0278" transform="translate(-534 -345)" style="fill: rgb(0, 150, 214);"></circle><path d="M-3.7024859639509486,-4.293997501896918v8h8Z" transform="translate(-534 -345) matrix(1.69 1.13 -1.69 1.2 557 364)" style="fill: white; stroke: rgb(0, 150, 214);"></path></symbol></defs></svg><!-- END: footer sprite--><!-- START: footer--><div class="sm15"><footer class="s-f"><!-- START: sticky footer--><div class="s-f__sticky"><!-- START: site switch--><div class="s-f-mobile-btn visible-xs"><button class="js-s-f-site-switch-btn s-f-mobile-btn__link" data-browser="mobile" onclick="merchAllPages.gaEv('UI-Prefooter', 'SwitchToMobile', '')">Versión móvil</button></div><!-- END: site switch--></div><!-- END: sticky footer--><!-- START: footer menu--><div class="s-f__menu"><div class="s-f__menu--row"><div class="r-container"><div class="r-gr s-f__menu--flex"><div class="r-gr__col r-gr__col--md-8 s-f__menu--flex-basis"><div class="s-f-menu js-s-f-menu"><h5 class="s-f-menu__title">NOVEDADES &amp; OFERTAS</h5><ul class="s-f-menu__list"><li><a href="https://www.hp.com/es-es/shop/list.aspx?sel=NTB&ctrl=f&fc_lt_latest=1" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link1-nuevos-portatiles-hp', 'footer', 'e_globalNavigation', 'trackUDL');">Nuevos Portátiles</a></li><li><a href="https://www.hp.com/es-es/shop/list.aspx?sel=DTP&ctrl=f&fc_lt_latest=1" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link2-nuevos-sobremesas-hp', 'footer', 'e_globalNavigation', 'trackUDL');">Nuevos Sobremesas</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=ofertas" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link3-c-ofertas-portatiles', 'footer', 'e_globalNavigation', 'trackUDL');">Ofertas Portátiles</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=c-ofertas-pcs" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link4-c-ofertas-pcs', 'footer', 'e_globalNavigation', 'trackUDL');">Ofertas Sobremesas</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=c-ofertas-impresoras" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link5-c-ofertas-impresoras', 'footer', 'e_globalNavigation', 'trackUDL');">Ofertas Impresoras</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=smb-pyme" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link8-smb_videos', 'footer', 'e_globalNavigation', 'trackUDL');">Videos para PYMES y empresas</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=gaming-setup" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link9-gaming_videos', 'footer', 'e_globalNavigation', 'trackUDL');">Videos para gaming y jugadores</a></li><li><a href0 0 1-1.163 1.548 4.732 4.732 0 0 1-1.761.836 10.5 10.5 0 
                        0 1-2.3.248c-.357 0-.715 0-1.163-.031-.417-.063-.865-.094-1.281-.155s-.807-.124-1.163-.186c-.359-.093-.628-.186-.837-.248a1.046 1.046 0 0 1-.476-.372 1.847 
                        1.847 0 0 1-.12-.588z" transform="translate(-168.77 -29.016)"/><path fill="#000000" d="M286.876 46.521a10.774 10.774 0 0 1-1.283.278 8.7 8.7 0 0 1-1.283.093 4.238 4.238 0 0 1-3.1-.991 4.328 4.328 0 0 
                        1-.984-3.127v-9.446h-1.046a.635.635 0 0 1-.716-.712v-1.765h1.819l.149-4.088h2.089a.623.623 0 0 1 .716.712v3.376h2.924a.647.647 0 0 
                        1 .508.186.613.613 0 0 1 .208.527v1.765h-3.64v9.291a2.628 2.628 0 0 0 .268 1.3 1.137 1.137 0 0 0 1.075.464h.834a5.027 5.027 0 0 1 .657-.032c.538 
                        0 .805.216.805.712z" transform="translate(-198.75 -19.838)"/><path fill="#000000" d="M319.512 48.285a4.281 4.281 0 0 0-1.492.186 2.156 2.156 0 0 0-.925.558 2.218 2.218 0 0 0-.478.866 3.991 3.991 0 0 0-.148 1.084 2.945 
                        2.945 0 0 0 .656 2.074 2.747 2.747 0 0 0 2 .651 4.239 4.239 0 0 0 2.058-.465 7.415 7.415 0 0 0 1.492-1.115v-3.839zm-1.164 7.8a4.388 4.388 0 0 1-3.46-1.332 
                        5.619 5.619 0 0 1-1.134-3.685 5.622 5.622 0 0 1 .419-2.416 3.571 3.571 0 0 1 1.223-1.518 4.728 4.728 0 0 1 1.879-.8 9.23 9.23 0 0 1 2.327-.248h3.072v-1.053a2.527 
                        2.527 0 0 0-.805-2.2 4.685 4.685 0 0 0-2.744-.588 14.143 14.143 0 0 0-2.357.124c-.685.093-1.134.155-1.372.155a.716.716 0 0 1-.538-.186.869.869 0 
                        0 1-.179-.527v-1.33a12.684 12.684 0 0 1 2.358-.556 15.652 15.652 0 0 1 2.685-.217 8.311 8.311 0 0 1 2.832.372 4.025 4.025 0 0 1 1.821 1.115 3.629 3.629 0 0 
                        1 .954 1.734 7.652 7.652 0 0 1 .3 2.261v10.621h-1.821c-.328 0-.537-.062-.626-.216l-.18-.558-.12-.929a9.174 9.174 0 0 1-1.849 1.363 5.413 5.413 0 
                        0 1-2.685.62" transform="translate(-223.824 -29.035)"/><path fill="#000000" d="M366.149 55.813a.635.635 0 0 1-.715-.712V40.05h1.819a.751.751 0 0 1 .537.154c.179.093.268.31.3.62l.12.96a6.09 6.09 0 0 1 4.743-2.074 
                        3.925 3.925 0 0 1 3.49 1.455 6.545 6.545 0 0 1 1.045 3.934v10.714h-2.3a.74.74 0 0 1-.508-.186.76.76 0 0 1-.208-.527v-9.755a3.2 3.2 0 0 0-.657-2.291 2.366 
                        2.366 0 0 0-1.909-.712 3.807 3.807 0 0 0-2.087.5 6.56 6.56 0 0 0-1.373 1.052v11.919z" transform="translate(-260.542 -29.037)"/><path fill="#000000" d="M423.049 46.521a10.774 10.774 0 0 1-1.283.278 8.7 8.7 0 0 1-1.283.093 4.238 4.238 0 0 1-3.1-.991 4.328 4.328 0 0 
                        1-.984-3.127v-9.446h-1.043a.635.635 0 0 1-.716-.712v-1.765h1.819l.149-4.088h2.089a.623.623 0 0 1 .716.712v3.376h2.924a.647.647 0 0 1 .508.186.613.613 0 
                        0 1 .208.527v1.765h-3.64v9.291a2.624 2.624 0 0 0 .268 1.3 1.137 1.137 0 0 0 1.075.464h.835a5.007 5.007 0 0 1 .657-.032c.538 0 .805.216.805.712z" transform="translate(-295.501 -19.838)"/><path fill="#000000" d="M187.934 126.951a.635.635 0 0 1-.715-.712v-15.05h1.819a.748.748 0 0 1 .538.155c.179.093.268.31.3.62l.12.959a6.09 6.09 0 0 1 
                        4.744-2.074 3.924 3.924 0 0 1 3.49 1.455 6.547 6.547 0 0 1 1.044 3.934v10.714h-2.3a.741.741 0 0 1-.508-.186.758.758 0 0 1-.208-.527v-9.755a3.2 3.2 0 
                        0 0-.657-2.292 2.367 2.367 0 0 0-1.909-.712 3.813 3.813 0 0 0-2.088.5 6.538 6.538 0 0 0-1.372 1.053v11.922z" transform="translate(-133.92 -79.58)"/><path fill="#000000" d="M241.231 109.443h2.3a.636.636 0 0 1 .506.186.609.609 0 0 1 .209.527v6.538a25.677 25.677 0 0 0 3.371-3.376c.9-1.115 1.7-2.167 
                        2.357-3.127h2.238c.358 0 .507.186.507.558a1.427 1.427 0 0 1-.3.774c-.15.248-.417.588-.776 1.084-.358.465-.776.99-1.283 1.549-.476.557-1.044 1.115-1.64 
                        1.734a22.541 22.541 0 0 1-1.821 1.641 19.976 19.976 0 0 1 2 1.858 21.481 21.481 0 0 1 1.731 1.982 22.711 22.711 0 0 1 1.521 2.137c.506.744.984 1.58 
                        1.461 2.447h-2.774a.866.866 0 0 1-.6-.186 2.5 2.5 0 0 1-.358-.526c-.358-.62-.717-1.146-1.1-1.7a12.58 12.58 0 
                        0 0-1.252-1.641c-.448-.558-.956-1.084-1.492-1.642s-1.135-1.146-1.791-1.734v7.432h-2.3a.634.634 0 0 1-.715-.712z" transform="translate(-172.296 -78.582)"/><path fill="#000000" d="M160.784 9.343a3.25 3.25 0 1 0-3.3-3.25 3.276 3.276 0 0 0 3.3 3.25" transform="translate(-112.793 -2.843)"/><path fill="#0096d6" d="M190.53 9.343a3.25 3.25 0 1 0-3.3-3.25 3.276 3.276 0 0 0 3.3 3.25" class="cls-3" transform="translate(-133.927 -2.843)"/><path fill="#d60080" d="M220.275 9.343a3.25 3.25 0 1 0-3.3-3.25 3.276 3.276 0 0 0 3.3 3.25" transform="translate(-155.061 -2.843)"/><path fill="#eedc00" d="M250.019 9.343a3.25 3.25 0 1 0-3.3-3.25 3.276 3.276 0 0 0 3.3 3.25" transform="translate(-176.194 -2.843)"/><path fill="#0096d6" d="M34.085 41.792h-3.073l-4.3 12.257h3.072zM22.409 67.95c-.192 0-.383 0-.573-.009l3.943-11.251h5.427A2.666 2.666 0 0 
                        0 33.53 55l4.278-12.2c.7-2-.4-3.631-2.449-3.631H27.83L21.513 57.19l-3.584 10.216A19.9 19.9 0 0 1 3.113 47.919 19.939 19.939 0 0 1 17.2 28.626l-3.7 
                        10.545L7.36 56.69h4.09l5.224-14.89h3.073l-5.224 14.89h4.088L23.48 42.8c.7-2-.4-3.631-2.448-3.631h-3.437l3.947-11.262c.288-.013.577-.021.868-.021 10.657 
                        0 19.3 8.968 19.3 20.032s-8.64 20.031-19.3 20.031" class="cls-3" transform="translate(-3.113 -20.636)"/></g></g></symbol><symbol id="i-cross-close"><polygon points="101.06 4.4 96.66 0 51.08 45.59 5.49 0 1.09 4.4 46.67 49.99 1.09 95.58 5.49 99.98 51.08 54.39 96.66 99.98 101.06 95.58 55.48 49.99 101.06 4.4"/></symbol><symbol id="i-global-burder"><rect width="100.3" height="11.8"/><rect y="23.6" width="100.3" height="11.8"/><rect y="47.201" width="100.3" height="11.801"/></symbol><symbol id="i-global-email"><!-- viewBox="0 0 24 16" --><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.5,0.5h-23
                    c0,0,8.875,8.875,11.5,8.875S23.5,0.5,23.5,0.5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M12,9.375
                    C9.375,9.375,0.5,0.5,0.5,0.5v15L9.113,8L0.5,15.5h23L14.888,8l8.612,7.5v-15C23.5,0.5,14.625,9.375,12,9.375z"/></symbol><symbol id="i-global-angle-left"><circle cx="553" cy="364" r="18.0278" transform="translate(-534 -345)" style="fill: rgb(0, 150, 214);"></circle><path d="M-3.7024859639509486,-4.293997501896918v8h8Z" transform="translate(-534 -345) matrix(1.69 1.13 -1.69 1.2 557 364)" style="fill: white; stroke: rgb(0, 150, 214);"></path></symbol></defs></svg><!-- END: footer sprite--><!-- START: footer--><div class="sm15"><footer class="s-f"><!-- START: sticky footer--><div class="s-f__sticky"><!-- START: site switch--><div class="s-f-mobile-btn visible-xs"><button class="js-s-f-site-switch-btn s-f-mobile-btn__link" data-browser="mobile" onclick="merchAllPages.gaEv('UI-Prefooter', 'SwitchToMobile', '')">Versión móvil</button></div><!-- END: site switch--></div><!-- END: sticky footer--><!-- START: footer menu--><div class="s-f__menu"><div class="s-f__menu--row"><div class="r-container"><div class="r-gr s-f__menu--flex"><div class="r-gr__col r-gr__col--md-8 s-f__menu--flex-basis"><div class="s-f-menu js-s-f-menu"><h5 class="s-f-menu__title">NOVEDADES &amp; OFERTAS</h5><ul class="s-f-menu__list"><li><a href="https://www.hp.com/es-es/shop/list.aspx?sel=NTB&ctrl=f&fc_lt_latest=1" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link1-nuevos-portatiles-hp', 'footer', 'e_globalNavigation', 'trackUDL');">Nuevos Portátiles</a></li><li><a href="https://www.hp.com/es-es/shop/list.aspx?sel=DTP&ctrl=f&fc_lt_latest=1" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link2-nuevos-sobremesas-hp', 'footer', 'e_globalNavigation', 'trackUDL');">Nuevos Sobremesas</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=ofertas" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link3-c-ofertas-portatiles', 'footer', 'e_globalNavigation', 'trackUDL');">Ofertas Portátiles</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=c-ofertas-pcs" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link4-c-ofertas-pcs', 'footer', 'e_globalNavigation', 'trackUDL');">Ofertas Sobremesas</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=c-ofertas-impresoras" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link5-c-ofertas-impresoras', 'footer', 'e_globalNavigation', 'trackUDL');">Ofertas Impresoras</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=smb-pyme" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link8-smb_videos', 'footer', 'e_globalNavigation', 'trackUDL');">Videos para PYMES y empresas</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=gaming-setup" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link9-gaming_videos', 'footer', 'e_globalNavigation', 'trackUDL');">Videos para gaming y jugadores</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=newsletter-ofertas-noticias" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Link6-Sign_up_for_our_latest_news', 'footer', 'e_globalNavigation', 'trackUDL');">Suscríbete para recibir nuestras últimas noticias</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=c-black-friday" onclick="merchAllPages.gaEv('UI-Footer', 'Latest', 'Black_Friday', 'footer', 'e_globalNavigation', 'trackUDL');">Black Friday 2024</a></li></ul></div></div><div class="r-gr__col r-gr__col--md-8 s-f__menu--flex-basis"><div class="s-f-menu js-s-f-menu"><h5 class="s-f-menu__title">PREGUNTAS FRECUENTES</h5><ul class="s-f-menu__list"><li><a href="https://www.hp.com/es-es/shop/faq.aspx" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-FAQs', 'Link1-FAQ', 'footer', 'e_globalNavigation', 'trackUDL');">Preguntas Frecuentes</a></li><li><a href="https://www.hp.com/es-es/shop/faq.aspx?p=my-orders-my-account#how-to-track-my-order" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-FAQs', 'Link2-How_to_track_my_order', 'footer', 'e_globalNavigation', 'trackUDL');">Seguimiento de pedido</a></li><li><a href="https://www.hp.com/es-es/shop/faq.aspx?p=deliveries#delivery-information" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-FAQs', 'Link3-Delivery_information', 'footer', 'e_globalNavigation', 'trackUDL');">Información de entrega</a></li><li><a href="https://www.hp.com/es-es/shop/faq.aspx?p=returns#how-to-return-and-request-refund-or-replacement" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-FAQs', 'Link4-Returns_and_refunds', 'footer', 'e_globalNavigation', 'trackUDL');">Cómo devolver y solicitar un reembolso o reemplazo</a></li><li><a href="https://www.hp.com/es-es/shop/faq.aspx?p=promotions#promotions" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-FAQs', 'Link5-Promotions', 'footer', 'e_globalNavigation', 'trackUDL');">Canjea tu promoción o reembolso</a></li><li><a href="https://www.hp.com/es-es/shop/faq.aspx?p=promotions#instant-ink" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-FAQs', 'Link6-Instantink', 'footer', 'e_globalNavigation', 'trackUDL');">HP Instant Ink</a></li></ul></div></div><div class="r-gr__col r-gr__col--md-8 s-f__menu--flex-basis"><div class="s-f-menu js-s-f-menu"><h5 class="s-f-menu__title">ENLACES ÚTILES</h5><ul class="s-f-menu__list"><li><a href="https://www.hp.com/es-es/shop/Html/terms_ES.pdf" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-Useful-Links', 'Link1-Terms_&amp;_Conditions', 'footer', 'e_globalNavigation', 'trackUDL');">Términos y Condiciones</a></li><li><a href="https://support.hp.com/es-es/drivers" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-Useful-Links', 'Link2-Drivers_&amp;_Software', 'footer', 'e_globalNavigation', 'trackUDL');">Drivers y Software</a></li><li><a href="https://support.hp.com/es-es" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-Useful-Links', 'Link3-Support_&amp;_Troubleshooting', 'footer', 'e_globalNavigation', 'trackUDL');">Soporte Técnico</a></li><li><a href="https://parts.hp.com/hpparts/default.aspx?cc=ES&lang=ES" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-Useful-Links', 'Link4-HP_Replacement_Parts', 'footer', 'e_globalNavigation', 'trackUDL');">Repuestos de HP</a></li><li><a href="https://www.hp.com/es-es/shop/faq.aspx?p=care-packs#services-for-hp-products" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-Useful-Links', 'Link5-Activate_carepack', 'footer', 'e_globalNavigation', 'trackUDL');">Activa tu Carepack</a></li><li><a href="https://hardware-recycle.ext.hp.com/ui/DeepLink.html?langCode=es&country=ES&onlineStoreCustomer=YES" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-Useful-Links', 'Link6-Free_Recycling_For_Consumers', 'footer', 'e_globalNavigation', 'trackUDL');">Devolución gratuita de aparatos usados para consumidores</a></li></ul></div></div><div class="r-gr__col r-gr__col--md-8 s-f__menu--flex-basis"><div class="s-f-menu js-s-f-menu"><h5 class="s-f-menu__title">ENLACES HP STORE</h5><ul class="s-f-menu__list"><li><a href="https://www.hp.com/es-es/shop/register.aspx?tab=eppe&returnurl=https://www.hp.com/es-es/shop/" onclick="merchAllPages.gaEv('UI-Footer', 'HP-Store-Links', 'Link1-HP_Corporate_Benefits_Store', 'footer', 'e_globalNavigation', 'trackUDL');" data-update-returnurl="data-update-returnurl">Regístrate en HP Store para Empleados</a></li><li><a href="https://www.hp.com/es-es/shop/register.aspx?tab=epps&returnurl=https://www.hp.com/es-es/shop/" onclick="merchAllPages.gaEv('UI-Footer', 'HP-Store-Links', 'Link2-HP_Student_Store', 'footer', 'e_globalNavigation', 'trackUDL');" data-update-returnurl="data-update-returnurl">Regístrate en HP Store para Estudiantes</a></li><li><a href="https://www.hp.com/es-es/shop/register.aspx?tab=ff&returnurl=https://www.hp.com/es-es/shop/" onclick="merchAllPages.gaEv('UI-Footer', 'HP-Store-Links', 'Link3-HP_Friends_&amp;_Family_Store', 'footer', 'e_globalNavigation', 'trackUDL');" data-update-returnurl="data-update-returnurl">Regístrate en HP para Amigos y Familiares</a></li><li><a href="https://www.hp.com/es-es/shop/register.aspx?tab=eppi&returnurl=https://www.hp.com/es-es/shop/" onclick="merchAllPages.gaEv('UI-Footer', 'HP-Store-Links', 'Link4-HP_Employees_Store', 'footer', 'e_globalNavigation', 'trackUDL');" data-update-returnurl="data-update-returnurl">Regístrate en HP Store para Empleados HP</a></li><li><a href="https://www.hp.com/es-es/shop/BusinessClub.aspx" onclick="merchAllPages.gaEv('UI-Footer', 'HP-Store-Links', 'Link5-HP_Business_Club', 'footer', 'e_globalNavigation', 'trackUDL');">HP Business Club</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=b-hp-business" onclick="merchAllPages.gaEv('UI-Footer', 'HP-Store-Links', 'Link8-HP_for_Business', 'footer', 'e_globalNavigation', 'trackUDL');">HP para empresas</a></li></ul></div></div><div class="r-gr__col r-gr__col--md-8 s-f__menu--flex-basis"><div class="s-f-menu js-s-f-menu"><h5 class="s-f-menu__title">MI HP</h5><ul class="s-f-menu__list"><li><a href="https://www.hp.com/es-es/shop/prerouter.aspx?act=login&key=public&returnurl=https://www.hp.com/es-es/shop/" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-MyHp', 'Link1-Registration_/_Sign_In', 'footer', 'e_globalNavigation', 'trackUDL');" data-update-returnurl="data-update-returnurl">Registro / Inicio de sesión</a></li><li><a href="https://www.hp.com/es-es/shop/account.aspx" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-MyHp', 'Link2-My_Account', 'footer', 'e_globalNavigation', 'trackUDL');">Mi Cuenta</a></li><li><a href="https://www.hp.com/es-es/shop/order.aspx" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-MyHp', 'Link3-My_Orders', 'footer', 'e_globalNavigation', 'trackUDL');">Mis Pedidos</a></li><li><a href="https://www.hp.com/es-es/shop/account.aspx?view=Address" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-MyHp', 'Link4-My_Addresses', 'footer', 'e_globalNavigation', 'trackUDL');">Mis Direcciones</a></li><li><a href="https://www.hp.com/es-es/shop/account.aspx?view=Quote" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-MyHp', 'Link5-My_Quotes', 'footer', 'e_globalNavigation', 'trackUDL');">Mis Presupuestos</a></li><li><a href="https://myaccount.id.hp.com/uaa/change-password" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-MyHp', 'Link6-Reset_your_password', 'footer', 'e_globalNavigation', 'trackUDL');">Restablece tu contraseña</a></li></ul></div></div><div class="r-gr__col r-gr__col--md-8 s-f__menu--flex-basis"><div class="s-f-menu js-s-f-menu"><h5 class="s-f-menu__title">ACERCA DE HP</h5><ul class="s-f-menu__list"><li><a href="https://www.hp.com/es-es/home.html" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-About-HP', 'Link1-About_HP', 'footer', 'e_globalNavigation', 'trackUDL');">Acerca de HP</a></li><li><a href="https://www.hp.com/es-es/hp-information/sustainable-impact.html" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-About-HP', 'Link2-HP_&amp;_Environment', 'footer', 'e_globalNavigation', 'trackUDL');">HP y el medio ambiente</a></li><li><a href="https://www.hp.com/es-es/hp-labs.html" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-About-HP', 'Link3-HP_Labs', 'footer', 'e_globalNavigation', 'trackUDL');">HP Labs</a></li><li><a href="https://www.hp.com/es-es/hp-information/sustainable-impact/planet-product-recycling.html" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-About-HP', 'Link4-Recycling', 'footer', 'e_globalNavigation', 'trackUDL');">Reciclaje</a></li></ul></div></div></div></div></div></div><!-- END: footer menu--><!-- START: social-links--><div class="s-f__social"><div class="r-container"><div class="r-gr"><div class="r-gr__col r-gr__col--md-24"><div class="s-f-social"><ul class="s-f-social__list s-f-social__list--3"><li><a class="s-f-social__link" href="https://twitter.com/hpespana" target="_blank" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-Social', 'Link1-Twitter');"><svg viewbox="0 0 123.673 100"><use xlink:href="#i-global-twitter"></use></svg>Twitter</a></li><li><a class="s-f-social__link" href="https://www.youtube.com/user/HPEspana" target="_blank" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-Social', 'Link2-YouTube');"><svg viewbox="0 0 380.92 85.04"><use xlink:href="#i-global-youtube"></use></svg>YouTube</a></li><li><a class="s-f-social__link" href="https://www.facebook.com/HPEspana" target="_blank" onclick="merchAllPages.gaEv('UI-Footer', 'Footer-Social', 'Link3-Facebook');"><svg viewbox="0 0 46.781 100"><use xlink:href="#i-global-facebook"></use></svg>Facebook</a></li></ul></div></div></div></div></div><!-- END: social-links--><!-- START: footer terms--><div class="s-f__terms"><div class="r-container"><div class="r-gr"><div class="r-gr__col r-gr__col--md-24"><ul class="s-f-terms"><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=es-aviso-legal">Aviso legal</a></li><li><a href="https://www8.hp.com/es/es/privacy/privacy.html">Declaración de privacidad</a></li><li><a href="https://www8.hp.com/es/es/personal-data-rights.html">Aviso de Protección de Datos de Carácter Personal</a></li><li><a href="https://www8.hp.com/es/es/terms-of-use.html">El uso de este sitio implica la aceptación de sus términos de uso</a></li><li><a href="https://www.hp.com/es-es/shop/Html/terms_ES.pdf">Términos y condiciones de venta y servicios</a></li><li><a href="https://support.hp.com/es-es/document/c03805198">Garantía legal de los bienes de consumo</a></li><li><a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage">Resolución de Conflictos en línea</a></li><li><a href="https://www8.hp.com/es/es/privacy/limited_warranty.html">Declaración de garantía limitada</a></li><li><a href="https://www.hp.com/es-es/shop/offer.aspx?p=sitemap">Mapa de sitio web</a></li></ul></div></div></div></div><!-- END: footer terms--><!-- START: copyright--><div class="s-f__copy"><div class="r-container"><div class="r-gr"><div class="r-gr__col r-gr__col--md-24"><p class="s-f-copy">© Copyright 2024 HP Development Company, L.P.</p></div></div></div></div><!-- END: copyright--><!-- START: footnotes--><div class="s-f__footnotes"><div class="r-container"><div class="r-gr"><div class="r-gr__col r-gr__col--md-24"><div class="s-f-footnotes-btn hidden-sm"><a class="js-s-f-footnotes-btn s-f-footnotes-btn__link" href="#s-f-footnotes">Disclaimers</a></div><ul class="js-s-f-footnotes-body s-f-footnotes-body"><li class="js-cw-pre-event bf-pre-event is-hidden">*Términos y Condiciones: Promoción no acumulable con otras ofertas. Descuento ya aplicado en el precio. Para cliente final no para distribución con un límite de 5 unidades o 3.000€ máximo por cliente. En periodo promocional los pedidos pueden sufrir retrasos en las entregas. HP se reserva el derecho de cancelación o modificación de la oferta en cualquier momento. Promoción válida hasta el 27 de Noviembre a las 23.59h o hasta fin de existencias.</li><li class="js-cw-main-event bf-main-event is-hidden">*Términos y Condiciones: Promoción no acumulable con otras ofertas. Descuento ya aplicado en el precio. Para cliente final no para distribución con un límite de 5 unidades o 3.000€ máximo por cliente. En periodo promocional los pedidos pueden sufrir retrasos en las entregas. HP se reserva el derecho de cancelación o modificación de la oferta en cualquier momento. Promoción válida hasta el 30 de Noviembre a las 23.59h o hasta fin de existencias.</li><li>* En pedidos menores de 25€ se cargarán 5€ de gastos de envío. Los precios y la disponibilidad de productos están sujetos a cambio sin previo aviso. Consulte las especificaciones del producto en las fichas técnicas. Si el producto cumple la norma EN 55032 Clase A, pueden producirse interferencias en la recepción de televisión o radio cuando se utiliza en zonas residenciales (en condiciones desfavorables). Tenga en cuenta que actualmente no enviamos a Islas Canarias, Ceuta y Melilla, internacionalmente o a apartados de correos.</li><li>*Los productos HP están sujetos a compensación equitativa por copia privada si ésta fuera de aplicación (Real Decreto 209/2023 BOE 29 de marzo 2023: PC Sobremesa y portátil: 5,33€ (con IVA 6,40€); Tablet Android / IOS / HarmonyOS: 3,75€ (con IVA 4,50€); Teléfono inteligente Android / IOS / HarmonyOS: 3,25€ (con IVA 3,90€); Disco duro periférico HDD hasta 6 TB: 4,00€ (con IVA 4,80€); Disco duro periférico HDD más de 6,01 TB: 6,45€ (con IVA 7.74€); Disco estado sólido periférico SSD hasta 1 TB: : 4,00€ (con IVA 4,80€); Disco estado sólido periférico SSD más de 1,01 TB: 6,45€ (con IVA 7.74€); Impresora multifunción: 5,25€ (con IVA 6,3€); Impresora mono-función hasta 39 copias: 4,00€ (con IVA 4.80€); Scanner con pantalla de exposición hasta 29 ppm: 3,00€ (con IVA, 3.60€); Grabadora externa y para integrar CD-DVD: 1,00€ (con IVA 1,20€)). <strong>El comprador tiene derecho al reembolso de la compensación por copia privada si cumple los requisitos del artículo 25, apartados 7 y 8, del Texto Refundido de la Ley de Propiedad Intelectual.</strong> El reembolso se gestiona por la persona jurídica creada por las entidades de gestión de derechos de propiedad intelectual.</li><li>No todas las características están disponibles en todas las ediciones o versiones de Windows. Los sistemas pueden requerir la actualización o la compra por separado de hardware, controladores o software para sacar el máximo partido de la funcionalidad Windows. Consulte <a href="https://www.microsoft.com/es-es/">https://www.microsoft.com</a></li><li>** El coste de la llamada varía en función de las tarifas contratadas con tu operador. Infórmate del coste de la llamada desde un teléfono fijo preguntando a tu operador. © Copyright 2024 HP Development Company, L.P.</li><li><a href="//www8.hp.com/es/es/contact-hp/office-locations.html">Contactar con HP en España</a></li></ul></div></div></div></div><!-- END: footnotes--></footer></div><!-- END: footer--><!-- START: vat dialog--><!-- START: vat dialog--><div class="focus-box-template" id="js-s-h-vat-dialog-template"><div class="s-h-vat-dialog"><svg class="s-h-vat-dialog__close" viewbox="0 0 101 100"><use xlink:href="#i-global-cross-close"></use></svg><div class="s-h-vat-dialog__header"><div class="s-h-vat-dialog-header"><p class="s-h-vat-dialog-header__title">Ver productos con o sin IVA</p><p class="s-h-vat-dialog-header__lede">Elige si quieres ver los precios de los productos con IVA o sin IVA</p></div></div><div class="s-h-vat-dialog__body"><div class="r-gr"><div class="r-gr__col r-gr__col--md-11"><div class="s-h-vat-dialog-opt"><p class="s-h-vat-dialog-opt__label">Si eres un particular</p><button class="js-s-h-vat-btn s-h-vat-dialog-opt__btn" data-vat="inc">Mostrar precios con el IVA incluido</button></div></div><div class="r-gr__col r-gr__col--md-2"><span class="s-h-vat-dialog-opt-div">O</span></div><div class="r-gr__col r-gr__col--md-11"><div class="s-h-vat-dialog-opt"><p class="s-h-vat-dialog-opt__label">Si eres un cliente profesional</p><button class="js-s-h-vat-btn s-h-vat-dialog-opt__btn" data-vat="exc">Mostrar precios sin el IVA incluido</button></div></div></div></div><div class="s-h-vat-dialog__footer"><div class="s-h-vat-dialog-footer"><p class="s-h-vat-dialog-footer__txt">Cambia tu opción haciendo clic en el enlace del IVA del menú</p><p class="s-h-vat-dialog-footer__txt">Los productos HP incluyen como parte del precio de venta la compensación por copia privada, si ésta fuera de aplicación según el TRLPI – RD ley 12/2017 BOE 4 julio 2017. El comprador tiene derecho al reembolso de la compensación por copia privada si cumple los requisitos del artículo 25.8 del TRLPI.</p><p class="s-h-vat-dialog-footer__txt">Si perteneces a una PYME o eres autónomo, los especialistas de HP pueden ayudarte a crear la solución perfecta que tu negocio necesita. - <a href="https://www.hp.com/es-es/shop/BusinessClub.aspx">Más información</a></p></div></div></div></div><!-- END: vat dialog--><!-- END: vat dialog--><!-- START: logout popup--><div class="focus-box-template" id="js-logout-popup-template"><div class="logout-popup js-session-warning"><div class="logout-popup__content"><h6>AVISO DE INACTIVIDAD</h6><p>Por tu seguridad, vamos a interrumpir tu sesión de usuario en los próximos 5 minutos, a menos que hagas clic en continuar tu sesión.</p></div><div class="logout-popup__timer"><span class="logout-time" data-time="5:00"></span></div><div class="logout-popup-cta"><a class="logout-popup-btn logout-popup-btn--color-1 js-keep-me" href="#">Continuar mi sesión</a><a class="logout-popup-btn logout-popup-btn--color-2 js-log-out" href="#">Finalizar mi sesión</a></div></div><div class="logout-popup js-session-end"><div class="logout-popup__content"><h6>TU SESIÓN HA FINALIZADO</h6><p>Por tu seguridad, hemos interrumpido tu sesión de usuario en HP Online Store. Para volver a entrar, haz clic en el botón de abajo.</p></div><br><div class="logout-popup-cta"><a class="logout-popup-btn logout-popup-btn--color-3 js-login-back" href="#">Volver a conectar</a></div></div></div><!-- END: logout popup--><!-- START: affiliate banner--><!-- END: affiliate banner--><script>var s_channel="";

  window.merchSFCountryCode = 'es';
  window.merchSFLanguageCode = 'es';

  var merchjson = {
    'order':{
      'tooltip':{
        'title':'',
        'content':'La fecha estimada de entrega indica cuando consideramos que los productos serán entregados. Puede haber alguna diferencia debido a imprevistos o circunstancias ajenas a nosotros.'
      }
    }
  };
  var merchFacetSubmit = 'Submit this';

  var XML = { CartEmpty:'Tu carrito está vacío',RemoveItm:'Remove Item',RemItm:'Remove Item',PriceFormat:'# ###,00€',RemoveECoupon:'Quitar cupón',Surcharge:'Surcharge',VATexcl:'Sin IVA, precio con tarifas aplicables.*',VATincl:'Precio con IVA y tarifas aplicables*',MinCartVal:'25',DateHolidays:'01/01/2014|01/06/2014|04/18/2014|05/01/2014|06/09/2014|06/24/2014|08/15/2014|09/11/2014|09/24/2014|12/08/2014|12/25/2014|12/26/2014',DaysVar1:'0|2',DaysVar2:'0|2',DaysVar3:'5|10',DaysVar4:'15|20',DeskTime:'14:30',ESDMsg:'Fecha de entrega no estimada',ShippingDefaultFlag:'Es la dirección principal de entrega',BillingDefaultFlag:'Direccion de facturación principal',SoldtoDefaultFlag:'Dirección de envío principal',RemQbtn:'Remove this Address?',BillTxt:'Dirección de facturación ',SoldtoTxt:'Dirección de envío',TDEvent_Consumer_Public:'24266',TDEvent_Business_Public:'22599',TDEvent_Consumer_Student:'288673',TDEvent_Consumer_ExternalEPP:'274912',TDEvent_Business_ExternalEPP:'274912',TDEvent_Consumer_FriendsAndFamily:'305697',BRbFree:'Gratis',PaypalErrMsg:'Tu transacción con PayPal™ ha sido cancelada. Por favor, elige otra forma de pago.',PayType:'0|Check|Credit Card|Lease|PO|Transfer|Display|Finance|DirectDeposit|OperatorCredit|PayrollDeduction|CreditCardInstallments|PostPayment|PayPal|OpenInvoice|Ideal',PaySubType:'0|Visa|MasterCard|AmericanExpress|Discover|CarteBlanche|DinersClub|JCL|Maestro',ExclamationIMG:'/shop/Html/HeaderMenus/images/v3/checkout/Exclamation.gif',NoCheckout:'No Checkout ...',ReqErrMsg:'Please fill all required fields',IsEmployeeEmailRequired:'true',IsEmployeeNoRequired:'false',HPPReg:'Registrar usuario',HPPTxt:'Registrarse con correo electrónico corporativo',PrivateReg:'Registrar un usuario #TYP#',ComplProfile:'Completar perfil para #TYP#',pInternalEPP:'EPP Interno',pExternalEPP:'EPP Externo',pStudent:'Estudiante',pFriendsAndFamily:'Amigos y Familiares',PaymentPreselected:'0',SelectBank:'Selecteer uw bank',btnOK:'OK',btnCancel:'Cancelar',POAcc:'Ya tienes una cuenta configurada para tu negocio, por favor selecciona una de las direcciones pre-definidas.',POUsr:'Has decidido cambiar el forma de pago, vas a ser redirigido  a otra pantalla. Por favor, elige una dirección de la lista.',SubTotal:'Subtotal',Discount:'Descuento',Delivery:'Entrega',Tax:'Total IVA',Total:'Total',Added:' Un nuevo artículo ha sido añadido a su carrito',BCShowBClub:'Want to switch to Bussiness Club ?',BCDisableContextRefresh:'false',BCWlctxt:'You are now in Bussiness Club!',VATexclCA:'',TotalSurcharge:'Total des Contributions <br/> environnementales',XSellCartAcc:'<div class="js-basket-confirm basket-confirm"><div class="basket-confirm-acc"><h3 class="basket-confirm-acc__title">Accesorios Recomendados</h3><ul class="basket-confirm-acc-list">#ACC#</ul></div><div class="basket-confirm-footer"><div class="basket-confirm-footer__cancel"><button type="button" class="basket-cancel-btn" onclick="getShopLink()">Continuar comprando</button></div><div class="basket-confirm-footer__confirm"><a href="#cart" class="basket-confirm-btn" onClick="XSellCart.Close()">Ir al Carrito</a></div></div></div>',XSellCartAccItm:'<li class="basket-confirm-acc-item"><img src="#IMG#" width="120" height="145" alt="" class="basket-confirm-acc-item__img"><p class="basket-confirm-acc-item__name">#NME#</p><div class="basket-confirm-acc-item__price">#WAS#<div class="merch-product-price-now"><nobr>#PRC#</nobr><span>#VAT#</span></div></div><input type="button" value="Añadir al Carrito"  id="MyAddToCart" onclick="XSellCart.AddtoCart(this,\'#SKU#\')" class="AddToCart basket-confirm-acc-item__cart-btn"></li>',XSellCartAccWas:'<div class="merch-product-price-was"><span class="product-price__pre-was">IVA incl</span><span class="product-price__was"><nobr>#WPRC#</nobr></span><span class="product-price__post-was"></span></div>',ImpulseBuy:'<div id="merch-overlay-content" class="merch-overlay-content"><div class="js-impulse-confirm impulse-confirm"><div class="impulse-confirm-msg"><h2 class="impulse-confirm-msg__thank-you">Gracias por tu pedido, en breve te llevaremos a la página de confirmación.</h2><p class="impulse-confirm-msg-total clearfix"><span class="impulse-confirm-msg-total__cart-icon"></span><span class="impulse-confirm-msg-total__checked-icon"></span><span class="impulse-confirm-msg-total__label">Total de tu pedido confirmado</span><span class="impulse-confirm-msg-total-price"><span class="impulse-confirm-msg-total-price__nr">#ORD#</span><span class="impulse-confirm-msg-total-price__vat">#VAT#</span></span></p></div><div class="impulse-confirm-footer"><div class="impulse-confirm-footer__confirm"><a href="#cart" class="impulse-confirm-btn" onClick="GobackToOrder(\'#SKU#\')">No gracias, continuar y confirmar la compra</a></div></div><div class="impulse-confirm-offer"><div class="impulse-confirm-offer-msg"><span class="impulse-confirm-offer-msg-ribbon"><span class="impulse-confirm-offer-msg-ribbon__label">AHORRO DE</span><span class="impulse-confirm-offer-msg-ribbon__percentage"> #PER#</span></span><p class="impulse-confirm-offer-msg__cta">Última oportunidad: oferta exclusiva</p></div><div class="impulse-confirm-product"><div class="impulse-confirm-product__image"><img src="#IMG#" width="120" height="145" alt=""></div><div class="impulse-confirm-product__body"><h3 class="impulse-confirm-product__name">#NME#<div class="impulse-confirm-product-details"><div class="impulse-confirm-product-details__price"><div class="merch-product-price-was" style="display:#W01#"><span class="product-price__pre-was">IVA incl</span><span class="product-price__was"><nobr>#W02#</nobr></span><span class="product-price__post-was"></span></div><div class="merch-product-price-now"><nobr>#PRC#</nobr><span>#VAT#</span></div></div><div class="impulse-confirm-product-details__cta"><button type="button" class="impulse-basket-btn" onclick="AddToCartImpulseBuy(\'#SKU#\',\'#IMG#\',\'#NME#\')">Añadir al carrito y confirmar la compra</button><p class="impulse-confirm-product-total">Total del pedido con oferta: <b>#TTL#</b><br/>#VAT#</p></div></div></div></div></div></div></div>',XSellAcc:'<div class="js-basket-confirm basket-confirm" style=""><p class="basket-confirm__label">#ADDED#</p><div class="basket-confirm-product"><div class="basket-confirm-product__image"><img src="#IMG#" width="209" height="189" alt=""></div><div class="basket-confirm-product__body"><h2 class="basket-confirm-product__name">#NME#</h2><div class="basket-confirm-product-summary"><div class="basket-confirm-product-summary__price"><div class="merch-product-price-now"><nobr>#PRC#</nobr><span>#VAT#</span></div></div></div></div></div><div class="basket-confirm-footer"><div class="basket-confirm-footer__cancel"><button type="button" class="basket-cancel-btn">#CSH#</button></div><div class="basket-confirm-footer__confirm"><a href="#cart" class="basket-confirm-btn">#CNC#</a></div></div></div>',ItemAdded:'1 producto ha sido añadido a tu carrito',ItemsAdded:'#NO# productos han sido añadidos a tu carrito',Continue:'Continuar comprando',ContToCart:'Ir al Carrito',OmniTrk:'true',GACurrency:'UK|GBP#GB|GBP#DE|EUR#FR|EUR#ES|EUR#IT|EUR#NL|EUR#CH|CHF#SE|SEK#CA|CAD', ExpireErrMsg: 'Tu login ha caducado por razones de seguridad. Si quieres recuperar tu carrito de la compra anterior, por favor identifícate de nuevo haciendo <a href="https://www.hp.com/es-es/shop/prerouter.aspx?act=login&key=public&returnurl=https://www.hp.com/es-es/shop/">clic aquí</a>.' };

  var merchSuppliesAutocompleteLabels = {
    'es' : {
      'es' : {
        'Ink' : 'Tinta',
        'Laser' : 'Tóner'
      }
    }
  };

  var MERCH_CURRENCY_FORMAT_CONFIG = {
      symbol : '€',
      decimal : ',',
      thousand: ' ',
      precision : 2,
      format: '%v%s' //controls output: %s = symbol, %v = value/number
  };

  var MERCH_STOCK_ACCEL_CONFIG = {
      LEVEL_1 : { MSG : 'Total disponibilidad', START_PC : 80 },
      LEVEL_2 : { MSG : 'Disponible', START_PC : 51 },
      LEVEL_3 : { MSG : '¡Date prisa que se agotan!', START_PC : 21 },
      LEVEL_4 : { MSG : '¡Date prisa, quedan pocas unidades!', START_PC : 1 },
      LEVEL_5 : { MSG : 'Últimas unidades disponibles', START_PC : 0 }
  };

  var SERVICE_FAIL_MSG = 'Estamos teniendo dificultades con esta petición. Por favor inténtalo más tarde.';
  var RESEND_EMAIL_SUCCESS_MSG = 'Email de verificación enviado.';</script><script>
            $(function() {
              window.s_eVar1 = mTag('target_country')+"|"+mTag('language')+"|"+mTag('segment');
            });
            function mTag(z) {
              return $("meta[name='"+z+"']").attr("content").toLowerCase();
            }
          </script><script src="/es-es/shop/js/webapijs/hpapi.min.js"></script><script>
            // caching control for application.js when loading page specific scripts
            var merchJSV = 20240110101741;
          </script><script src="/es-es/shop/html/headermenus/js/application.js?ver=20240110101741"></script><script async src="//www.hp.com/cma/ng/lib/exceptions/privacy-banner.js"></script><script data-cookie-consent-index="1" data-cookie-consent-script="//cdn.jsdelivr.net/npm/doofinder@latest/dist/doofinder.min.js"></script><!-- content from aspx below --><script type="text/javascript">
                $(".merchEzb").each(function(idx, itm) { merchEzbSet(itm); });
            </script><script type="text/javascript">
                var merchTrckVer='v5.9';
                var merchTrckSer='PRO-EMEA2-VM7';
                var merchTrckPerf='ApPool:194MB|';
            </script><!-- RD:'20231011191336dyn'--><script type="text/javascript"  src="/P6LVa5VKe/X0v0Ww/MEm/qoBU-kKQ8/aYiQw8DJSQ1D/ChhnPnsWAg/GTRAS/htrJgUB"></script></body></html>
 43549117ba8731423f6 {
                color: #000
            }

            #ide736089fa0690153957b042877449dcc13808a548705843549117ba8731423f6 svg.link-arrow-svg {
                fill: #000
            }

            body:not(.c-mouse-event) #ide736089fa0690153957b042877449dcc13808a548705843549117ba8731423f6:focus,
            #ide736089fa0690153957b042877449dcc13808a548705843549117ba8731423f6:hover,
            #ide736089fa0690153957b042877449dcc13808a548705843549117ba8731423f6.hover {
                color: #000000;
            }

            body:not(.c-mouse-event) #ide736089fa0690153957b042877449dcc13808a548705843549117ba8731423f6:focus svg.link-arrow-svg,
            #ide736089fa0690153957b042877449dcc13808a548705843549117ba8731423f6:hover svg.link-arrow-svg,
            #ide736089fa0690153957b042877449dcc13808a548705843549117ba8731423f6.hover svg.link-arrow-svg {
                fill: #000000;
            }
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/impresoras/impresoras-empresariales.html" target="_self" class="c-button-link-with-arrow  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="ide736089fa0690153957b042877449dcc13808a548705843549117ba8731423f6" data-link-type="e_buyClick" data-link-placement="products" data-link-id="printers-entrepreneurs">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" class="link-arrow-svg">
                                    <path d="m455.465 769.707-1.847-.974 3.478-5.054-3.475-4.989 1.841-.983 4.156 5.966z" transform="translate(-453.618 -757.707)"/>
                                </svg>
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell7520910e087a7df5669436cf46858775cdb30aa46f45cc307df69f168361d397 ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id7475c1dc693106f5918efaf5e48d7656a9eed0d029ed69fee6fb46c9a62fa388.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP LaserJet Managed MFP" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/LaserJetManagedMFP1.jpg | @+md => /content/dam/sites/worldwide/homepage/images/LaserJetManagedMFP1.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/LaserJetManagedMFP1.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_id4d065db2b7d586530ac76343e86e741d211c564608da8d6f903e650b2965fc45" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Servicios gestionados de impresión

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #id5615ad76683af7c0dd901ed4929b203fd63e636f16d9a21db9d611474cfc804e{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id5615ad76683af7c0dd901ed4929b203fd63e636f16d9a21db9d611474cfc804e:focus,
            #id5615ad76683af7c0dd901ed4929b203fd63e636f16d9a21db9d611474cfc804e:hover,
            #id5615ad76683af7c0dd901ed4929b203fd63e636f16d9a21db9d611474cfc804e.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/services/managed-print-services.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id5615ad76683af7c0dd901ed4929b203fd63e636f16d9a21db9d611474cfc804e" data-link-type="e_learnClick" data-link-placement="products" data-link-id="printers-laser">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell01e333da4bd71b3e988847178aa57fede855950d18413f2c3551e1486e2f224b ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id26d6fd189ae06e3746625db76a29fdfefd5c5c48dcf3ce03e619aaa8e0cdc5c7.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP 664 Tri-color Ink Cartridge" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/664cartridge1.jpg | @+md => /content/dam/sites/worldwide/homepage/images/664cartridge1.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/664cartridge1.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_id40ac364219e80fccb3701780a11c72705e7cf616a64db55db1a628a8a2da5ea8" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Tinta y tóner

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #idabfe602a3268bd3a68af09c05c7cc1737d338e043c29968a2400a66ef9ec6b68{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #idabfe602a3268bd3a68af09c05c7cc1737d338e043c29968a2400a66ef9ec6b68:focus,
            #idabfe602a3268bd3a68af09c05c7cc1737d338e043c29968a2400a66ef9ec6b68:hover,
            #idabfe602a3268bd3a68af09c05c7cc1737d338e043c29968a2400a66ef9ec6b68.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/cartridge/ink-toner-paper.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="idabfe602a3268bd3a68af09c05c7cc1737d338e043c29968a2400a66ef9ec6b68" data-link-type="e_learnClick" data-link-placement="products" data-link-id="printers-ink-and-toner">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
            
            
            
                
    <style type="text/css">
        
        

        
        

        
        
        
            #id0be22ddd9d834d7af3b9a98baac530d80b91e3b4881097b9ffffcb5a63b1276d {
                color: #000
            }

            #id0be22ddd9d834d7af3b9a98baac530d80b91e3b4881097b9ffffcb5a63b1276d svg.link-arrow-svg {
                fill: #000
            }

            body:not(.c-mouse-event) #id0be22ddd9d834d7af3b9a98baac530d80b91e3b4881097b9ffffcb5a63b1276d:focus,
            #id0be22ddd9d834d7af3b9a98baac530d80b91e3b4881097b9ffffcb5a63b1276d:hover,
            #id0be22ddd9d834d7af3b9a98baac530d80b91e3b4881097b9ffffcb5a63b1276d.hover {
                color: #000000;
            }

            body:not(.c-mouse-event) #id0be22ddd9d834d7af3b9a98baac530d80b91e3b4881097b9ffffcb5a63b1276d:focus svg.link-arrow-svg,
            #id0be22ddd9d834d7af3b9a98baac530d80b91e3b4881097b9ffffcb5a63b1276d:hover svg.link-arrow-svg,
            #id0be22ddd9d834d7af3b9a98baac530d80b91e3b4881097b9ffffcb5a63b1276d.hover svg.link-arrow-svg {
                fill: #000000;
            }
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/printers/large-format.html" target="_self" class="c-button-link-with-arrow  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id0be22ddd9d834d7af3b9a98baac530d80b91e3b4881097b9ffffcb5a63b1276d" data-link-type="e_buyClick" data-link-placement="products" data-link-id="printers-ink-and-toner">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" class="link-arrow-svg">
                                    <path d="m455.465 769.707-1.847-.974 3.478-5.054-3.475-4.989 1.841-.983 4.156 5.966z" transform="translate(-453.618 -757.707)"/>
                                </svg>
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell019cf35c4a0a842f662eaf3e5d1d8eba4dbf45a1589b653a8f68b39e0ee974dc ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id5ad069f05296492c02b7dfdddaef121dc068589c0ebea08474ad3034ff9d1b55.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="DesignJet-T250" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/DesignJet-T2501.jpg | @+md => /content/dam/sites/worldwide/homepage/images/DesignJet-T2501.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/DesignJet-T2501.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_id1058cd19d064c3c76d610e2c4667cb521f28ca72e5bf1f3f24b99640f792b18f" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Impresoras de gran formato

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #id725c448fc6f6fd6caffad3dbde4e2b95f32964f34983cab23b3df0b5a2d89e96{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id725c448fc6f6fd6caffad3dbde4e2b95f32964f34983cab23b3df0b5a2d89e96:focus,
            #id725c448fc6f6fd6caffad3dbde4e2b95f32964f34983cab23b3df0b5a2d89e96:hover,
            #id725c448fc6f6fd6caffad3dbde4e2b95f32964f34983cab23b3df0b5a2d89e96.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/printers/large-format.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id725c448fc6f6fd6caffad3dbde4e2b95f32964f34983cab23b3df0b5a2d89e96" data-link-type="e_learnClick" data-link-placement="products" data-link-id="printers-large-format">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                

                
            
        </div>
        
    </div>
</hp-grid>
</div>



    </div>
</hp-visual-tabs-item>

                </div>
            
                <div class="c-grid-cell col-md-4 c-card-carousel-slide c-visual-tabs__grid-cell">
                    
<div>
    
</div>
<hp-visual-tabs-item class="c-visual-tabs-item">
    <div class="c-visual-tabs-item__trigger hover-play" data-metrics-customhandler data-metrics-event="e_linkClick" data-metrics-link-placement="filters" data-metrics-link-id="pcs">
        <div class="c-visual-tabs-item__img">
            <div class="c-image-container cmp-image c-image-container--align-center" id="id_image_id69084b5449ee49fe02a7a336c152a8bcb324061ed04a2ea8bd99d4210f86ab6f" style="margin-left: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
	
		#id_image_id69084b5449ee49fe02a7a336c152a8bcb324061ed04a2ea8bd99d4210f86ab6f hp-image {
			
			
		}
		
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
	
		#id_image_id69084b5449ee49fe02a7a336c152a8bcb324061ed04a2ea8bd99d4210f86ab6f hp-image {
			
			
		}
		
	


        }
        @media (max-width: 719.98px){
            
	
	
		#id_image_id69084b5449ee49fe02a7a336c152a8bcb324061ed04a2ea8bd99d4210f86ab6f hp-image {
			
			
		}
		
	


        }
        
	

    </style>

    
        <hp-image alt="PCs" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/Mask-Group-279@2x.png | @+md => /content/dam/sites/worldwide/homepage/images/Mask-Group-279@2x.png | @+lg => /content/dam/sites/worldwide/homepage/images/Mask-Group-279@2x.png">
            
            
        </hp-image>
    
</div>

    


        </div>
        <div class="c-visual-tabs-item__desc">
            <h3 class="h3">PCs</h3>
        </div>
    </div>
    <div class="c-visual-tabs-item__content ">
        




    
    
    <div class="grid">


<hp-grid class="js-hp-component hp-grid id_grid520253c415de4c3daec3ce42532bdd0c 
                
                 
                 
                 
                 
                 
                " data-metrics-link-placement="Printer Tab" data-metrics-event="e_linkClick" data-metrics-customhandler="true">
    <div class="container id_grid_container2d259f961dc9439e872e5badff668ac6  ">
        <style type="text/css">
            

            

            

            
            
            

            
                .container.id_grid_container2d259f961dc9439e872e5badff668ac6 {
                    max-width: 100%;
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .container.id_grid_container2d259f961dc9439e872e5badff668ac6 {
                        max-width: 100%;
                    }
                }
            
            
                @media (max-width: 719.98px) {
                    .container.id_grid_container2d259f961dc9439e872e5badff668ac6 {
                        max-width: 100%;;
                    }
                }
            

            
            
            @media (min-width: 720px) and (max-width: 1279.98px) {
                .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row {
                    margin-left: -0px;
                    margin-right: -0px;
                }
                .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row > [class*="col"],
                .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row > .c-grid__header [class*="col"],
                .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row > .swiper-wrapper > [class*="col"] {
                    padding-left: 0px;
                    padding-right: 0px;
                }
            }
            
            

            
                .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row > [class*="col"],
                .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row > .c-grid__header [class*="col"],
                .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row > .swiper-wrapper > [class*="col"] {
                   padding-top: 50px;
                   padding-bottom: 50px;
               }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row > [class*="col"],
                    .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row > .c-grid__header [class*="col"],
                    .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row > .swiper-wrapper > [class*="col"] {
                        padding-top: 0px;
                        padding-bottom: 0px;
                    }
                }
            
            

            
                .id_grid_container2d259f961dc9439e872e5badff668ac6 {
                    padding-top: 0px;
                }
            
            
                .id_grid_container2d259f961dc9439e872e5badff668ac6 {
                    padding-bottom: 40px;
                }
            
            
                hp-grid.hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 {
                    padding-left: 0px;
                    padding-right: 0px;
                }
            
            
                .id_grid520253c415de4c3daec3ce42532bdd0c {
                    margin-top: 0px;
                }
            
            
                .id_grid520253c415de4c3daec3ce42532bdd0c {
                    margin-bottom: 0px;
                }
            

            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid_container2d259f961dc9439e872e5badff668ac6 {
                        padding-top: 0px;
                    }
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid_container2d259f961dc9439e872e5badff668ac6 {
                        padding-bottom: 0px;
                    }
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    hp-grid.hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 {
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid520253c415de4c3daec3ce42532bdd0c {
                        margin-top: 0px;
                    }
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid520253c415de4c3daec3ce42532bdd0c {
                        margin-bottom: 0px;
                    }
                }
            

            
            
            
            
            
            
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell9f56ceea1f165ded8fbd078b5a4a346f686116fe7bdd3e94f57dc2b676c8a3ba {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell9f56ceea1f165ded8fbd078b5a4a346f686116fe7bdd3e94f57dc2b676c8a3ba {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell9f56ceea1f165ded8fbd078b5a4a346f686116fe7bdd3e94f57dc2b676c8a3ba {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_cell9f56ceea1f165ded8fbd078b5a4a346f686116fe7bdd3e94f57dc2b676c8a3ba {
                            height: 1px;
                        }
                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell7c98be9a524e8d597d4b8336cfe722ba591e0cd6f963ebad424722eb819bd7c4 {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell7c98be9a524e8d597d4b8336cfe722ba591e0cd6f963ebad424722eb819bd7c4 {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell7c98be9a524e8d597d4b8336cfe722ba591e0cd6f963ebad424722eb819bd7c4 {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_cell7c98be9a524e8d597d4b8336cfe722ba591e0cd6f963ebad424722eb819bd7c4 {
                            height: 1px;
                        }
                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell1f35a4fb2a0186de4056cb85a3cf9dff5c3cc6ca865bf5dbaec63ec53581eca6 {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell1f35a4fb2a0186de4056cb85a3cf9dff5c3cc6ca865bf5dbaec63ec53581eca6 {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell1f35a4fb2a0186de4056cb85a3cf9dff5c3cc6ca865bf5dbaec63ec53581eca6 {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_cell1f35a4fb2a0186de4056cb85a3cf9dff5c3cc6ca865bf5dbaec63ec53581eca6 {
                            height: 1px;
                        }
                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell8eeafd6efb127478ea08cd75dfc178f59e22875372b060815c52d54226a9e580 {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell8eeafd6efb127478ea08cd75dfc178f59e22875372b060815c52d54226a9e580 {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell8eeafd6efb127478ea08cd75dfc178f59e22875372b060815c52d54226a9e580 {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_cell8eeafd6efb127478ea08cd75dfc178f59e22875372b060815c52d54226a9e580 {
                            height: 1px;
                        }
                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_celldc42f911c011162d5fd87daa0963ed33b671250b984c9712258837be0307a835 {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_celldc42f911c011162d5fd87daa0963ed33b671250b984c9712258837be0307a835 {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_celldc42f911c011162d5fd87daa0963ed33b671250b984c9712258837be0307a835 {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_celldc42f911c011162d5fd87daa0963ed33b671250b984c9712258837be0307a835 {
                            height: 1px;
                        }
                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell0a19261551d91845cdb421b85574e6deb0e4ac63eabd42d9cd81ed0472920df8 {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell0a19261551d91845cdb421b85574e6deb0e4ac63eabd42d9cd81ed0472920df8 {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_container2d259f961dc9439e872e5badff668ac6 > .row .cell-id_grid_cell0a19261551d91845cdb421b85574e6deb0e4ac63eabd42d9cd81ed0472920df8 {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_cell0a19261551d91845cdb421b85574e6deb0e4ac63eabd42d9cd81ed0472920df8 {
                            height: 1px;
                        }
                    
                    
                    
                
            
        </style>
        
        <div class="row justify-content-center justify-content-lg-center justify-content-md-center     ">
            
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell9f56ceea1f165ded8fbd078b5a4a346f686116fe7bdd3e94f57dc2b676c8a3ba ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id55d6236fb3b4a18494670fc0c1280c6fa19fa8de88d740d67596e5e08d93ef2d.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP Pavilion 14 (Trixie)" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/Pavilion14-Trixie.png | @+md => /content/dam/sites/worldwide/homepage/images/Pavilion14-Trixie.png | @+lg => /content/dam/sites/worldwide/homepage/images/Pavilion14-Trixie.png" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_id07b9e6ccc9fec887624f26023a2ad77f1b72188e5776769a9e58a76fda48c478" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Hogar y Escuela

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #idcfb4bc49e2159aa836f9b66db6d4c28414c2b7cb2c957c016fd4cf4e6f090027{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #idcfb4bc49e2159aa836f9b66db6d4c28414c2b7cb2c957c016fd4cf4e6f090027:focus,
            #idcfb4bc49e2159aa836f9b66db6d4c28414c2b7cb2c957c016fd4cf4e6f090027:hover,
            #idcfb4bc49e2159aa836f9b66db6d4c28414c2b7cb2c957c016fd4cf4e6f090027.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/pavilion.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="idcfb4bc49e2159aa836f9b66db6d4c28414c2b7cb2c957c016fd4cf4e6f090027" data-link-type="e_learnClick" data-link-placement="products" data-link-id="pcs-laptops">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
            
            
            
                
    <style type="text/css">
        
        

        
        

        
        
        
            #id4a235fe22ba2c0b23ae089abc37a3849607035cb2b3634cfe4f75d914c9de46f {
                color: #000
            }

            #id4a235fe22ba2c0b23ae089abc37a3849607035cb2b3634cfe4f75d914c9de46f svg.link-arrow-svg {
                fill: #000
            }

            body:not(.c-mouse-event) #id4a235fe22ba2c0b23ae089abc37a3849607035cb2b3634cfe4f75d914c9de46f:focus,
            #id4a235fe22ba2c0b23ae089abc37a3849607035cb2b3634cfe4f75d914c9de46f:hover,
            #id4a235fe22ba2c0b23ae089abc37a3849607035cb2b3634cfe4f75d914c9de46f.hover {
                color: #000000;
            }

            body:not(.c-mouse-event) #id4a235fe22ba2c0b23ae089abc37a3849607035cb2b3634cfe4f75d914c9de46f:focus svg.link-arrow-svg,
            #id4a235fe22ba2c0b23ae089abc37a3849607035cb2b3634cfe4f75d914c9de46f:hover svg.link-arrow-svg,
            #id4a235fe22ba2c0b23ae089abc37a3849607035cb2b3634cfe4f75d914c9de46f.hover svg.link-arrow-svg {
                fill: #000000;
            }
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/notebooks/notebooks-personales.html" target="_self" class="c-button-link-with-arrow  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id4a235fe22ba2c0b23ae089abc37a3849607035cb2b3634cfe4f75d914c9de46f" data-link-type="e_buyClick" data-link-placement="products" data-link-id="pcs-laptops">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" class="link-arrow-svg">
                                    <path d="m455.465 769.707-1.847-.974 3.478-5.054-3.475-4.989 1.841-.983 4.156 5.966z" transform="translate(-453.618 -757.707)"/>
                                </svg>
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell7c98be9a524e8d597d4b8336cfe722ba591e0cd6f963ebad424722eb819bd7c4 ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idc721431c35a3e956e0c386281e0b7febce9c10ea6bb5a4366c6972c80eb6ab68.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP Envy 17 (Cernan)" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/Envy17-Cernan (1).jpg | @+md => /content/dam/sites/worldwide/homepage/images/Envy17-Cernan (1).jpg | @+lg => /content/dam/sites/worldwide/homepage/images/Envy17-Cernan (1).jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_ide4940ba6c7f5bb497e10d831b029ea3a32070e962ccc80038bfc6d6063c9c7b3" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Creatividad

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #idef2a6731c58b2b4c7296c6031d44ada5a2f1fce0cdf32d2a0dc71770db484756{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #idef2a6731c58b2b4c7296c6031d44ada5a2f1fce0cdf32d2a0dc71770db484756:focus,
            #idef2a6731c58b2b4c7296c6031d44ada5a2f1fce0cdf32d2a0dc71770db484756:hover,
            #idef2a6731c58b2b4c7296c6031d44ada5a2f1fce0cdf32d2a0dc71770db484756.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/laptops/premium-high-performance-laptops.html#tab=crear" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="idef2a6731c58b2b4c7296c6031d44ada5a2f1fce0cdf32d2a0dc71770db484756" data-link-type="e_learnClick" data-link-placement="products" data-link-id="pcs-desktops">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
            
            
            
                
    <style type="text/css">
        
        

        
        

        
        
        
            #id9c4429a41be33aaa69d0c364319729d43be3b45edac89b6e83df1cd1aa0910c2 {
                color: #000
            }

            #id9c4429a41be33aaa69d0c364319729d43be3b45edac89b6e83df1cd1aa0910c2 svg.link-arrow-svg {
                fill: #000
            }

            body:not(.c-mouse-event) #id9c4429a41be33aaa69d0c364319729d43be3b45edac89b6e83df1cd1aa0910c2:focus,
            #id9c4429a41be33aaa69d0c364319729d43be3b45edac89b6e83df1cd1aa0910c2:hover,
            #id9c4429a41be33aaa69d0c364319729d43be3b45edac89b6e83df1cd1aa0910c2.hover {
                color: #000000;
            }

            body:not(.c-mouse-event) #id9c4429a41be33aaa69d0c364319729d43be3b45edac89b6e83df1cd1aa0910c2:focus svg.link-arrow-svg,
            #id9c4429a41be33aaa69d0c364319729d43be3b45edac89b6e83df1cd1aa0910c2:hover svg.link-arrow-svg,
            #id9c4429a41be33aaa69d0c364319729d43be3b45edac89b6e83df1cd1aa0910c2.hover svg.link-arrow-svg {
                fill: #000000;
            }
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/notebooks/notebooks-premium.html" target="_self" class="c-button-link-with-arrow  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id9c4429a41be33aaa69d0c364319729d43be3b45edac89b6e83df1cd1aa0910c2" data-link-type="e_buyClick" data-link-placement="products" data-link-id="pcs-desktops">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" class="link-arrow-svg">
                                    <path d="m455.465 769.707-1.847-.974 3.478-5.054-3.475-4.989 1.841-.983 4.156 5.966z" transform="translate(-453.618 -757.707)"/>
                                </svg>
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell1f35a4fb2a0186de4056cb85a3cf9dff5c3cc6ca865bf5dbaec63ec53581eca6 ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idf445004580348c2b8bfc99dbda398e1badc2dbc9812a8dd62ca06f61279ee895.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="OMEN 16 (Intel)" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/Group-6707@2x.jpg | @+md => /content/dam/sites/worldwide/homepage/images/Group-6707@2x.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/Group-6707@2x.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_id60478a65a7be9c9bb670aff5dd7e11fa765ec8de56a96d31140465ef729c4813" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Gaming

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #idc681ca149536a167f159a63a5cf5c01f6e5b52976c09d8550a5e0b1333c463f3{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #idc681ca149536a167f159a63a5cf5c01f6e5b52976c09d8550a5e0b1333c463f3:focus,
            #idc681ca149536a167f159a63a5cf5c01f6e5b52976c09d8550a5e0b1333c463f3:hover,
            #idc681ca149536a167f159a63a5cf5c01f6e5b52976c09d8550a5e0b1333c463f3.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/gaming/omen.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="idc681ca149536a167f159a63a5cf5c01f6e5b52976c09d8550a5e0b1333c463f3" data-link-type="e_learnClick" data-link-placement="products" data-link-id="pcs-gaming">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
            
            
            
                
    <style type="text/css">
        
        

        
        

        
        
        
            #ide6f1f3e2e0623ba22df42983f3c70f6b04c6d1d7f2a88ccd7d1d5b7656fddb8d {
                color: #000
            }

            #ide6f1f3e2e0623ba22df42983f3c70f6b04c6d1d7f2a88ccd7d1d5b7656fddb8d svg.link-arrow-svg {
                fill: #000
            }

            body:not(.c-mouse-event) #ide6f1f3e2e0623ba22df42983f3c70f6b04c6d1d7f2a88ccd7d1d5b7656fddb8d:focus,
            #ide6f1f3e2e0623ba22df42983f3c70f6b04c6d1d7f2a88ccd7d1d5b7656fddb8d:hover,
            #ide6f1f3e2e0623ba22df42983f3c70f6b04c6d1d7f2a88ccd7d1d5b7656fddb8d.hover {
                color: #000000;
            }

            body:not(.c-mouse-event) #ide6f1f3e2e0623ba22df42983f3c70f6b04c6d1d7f2a88ccd7d1d5b7656fddb8d:focus svg.link-arrow-svg,
            #ide6f1f3e2e0623ba22df42983f3c70f6b04c6d1d7f2a88ccd7d1d5b7656fddb8d:hover svg.link-arrow-svg,
            #ide6f1f3e2e0623ba22df42983f3c70f6b04c6d1d7f2a88ccd7d1d5b7656fddb8d.hover svg.link-arrow-svg {
                fill: #000000;
            }
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/notebooks/notebooks-personales/notebooks-omen.html" target="_self" class="c-button-link-with-arrow  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="ide6f1f3e2e0623ba22df42983f3c70f6b04c6d1d7f2a88ccd7d1d5b7656fddb8d" data-link-type="e_buyClick" data-link-placement="products" data-link-id="pcs-gaming">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" class="link-arrow-svg">
                                    <path d="m455.465 769.707-1.847-.974 3.478-5.054-3.475-4.989 1.841-.983 4.156 5.966z" transform="translate(-453.618 -757.707)"/>
                                </svg>
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell8eeafd6efb127478ea08cd75dfc178f59e22875372b060815c52d54226a9e580 ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.76%;
		}
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42 hp-image {
			max-width: 100%;
			 width: 660px; 
			
		}
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id75a1ad1924ffade13c211854392662e7631c9fe58b13526b9391963bae86ad42.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP Elite Dragonfly" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/elite-dragonfly1.jpg | @+md => /content/dam/sites/worldwide/homepage/images/elite-dragonfly1.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/elite-dragonfly1.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_id1cedbc4ef2d2df56c6313bf939281912b39e345873420d9819cde5e44586bcb0" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Notebooks empresariales

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #id85abc846d560e178f32ded548f34f776f8d47cc0086dbfb499948adb990a8598{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id85abc846d560e178f32ded548f34f776f8d47cc0086dbfb499948adb990a8598:focus,
            #id85abc846d560e178f32ded548f34f776f8d47cc0086dbfb499948adb990a8598:hover,
            #id85abc846d560e178f32ded548f34f776f8d47cc0086dbfb499948adb990a8598.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/laptops/business-laptops-and-2-in-1s.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id85abc846d560e178f32ded548f34f776f8d47cc0086dbfb499948adb990a8598" data-link-type="e_learnClick" data-link-placement="products" data-link-id="pcs-business-laptops">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
            
            
            
                
    <style type="text/css">
        
        

        
        

        
        
        
            #id73c1bb9294160b8b3501f2d8444277b48dc406d7fa7ff160f4bc07cd05200648 {
                color: #000
            }

            #id73c1bb9294160b8b3501f2d8444277b48dc406d7fa7ff160f4bc07cd05200648 svg.link-arrow-svg {
                fill: #000
            }

            body:not(.c-mouse-event) #id73c1bb9294160b8b3501f2d8444277b48dc406d7fa7ff160f4bc07cd05200648:focus,
            #id73c1bb9294160b8b3501f2d8444277b48dc406d7fa7ff160f4bc07cd05200648:hover,
            #id73c1bb9294160b8b3501f2d8444277b48dc406d7fa7ff160f4bc07cd05200648.hover {
                color: #000000;
            }

            body:not(.c-mouse-event) #id73c1bb9294160b8b3501f2d8444277b48dc406d7fa7ff160f4bc07cd05200648:focus svg.link-arrow-svg,
            #id73c1bb9294160b8b3501f2d8444277b48dc406d7fa7ff160f4bc07cd05200648:hover svg.link-arrow-svg,
            #id73c1bb9294160b8b3501f2d8444277b48dc406d7fa7ff160f4bc07cd05200648.hover svg.link-arrow-svg {
                fill: #000000;
            }
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/notebooks/notebooks-empresariales.html" target="_self" class="c-button-link-with-arrow  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id73c1bb9294160b8b3501f2d8444277b48dc406d7fa7ff160f4bc07cd05200648" data-link-type="e_buyClick" data-link-placement="products" data-link-id="pcs-business-laptops">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" class="link-arrow-svg">
                                    <path d="m455.465 769.707-1.847-.974 3.478-5.054-3.475-4.989 1.841-.983 4.156 5.966z" transform="translate(-453.618 -757.707)"/>
                                </svg>
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_celldc42f911c011162d5fd87daa0963ed33b671250b984c9712258837be0307a835 ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.83%;
		}
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.83%;
		}
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.83%;
		}
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id3337a23ceab0b237f7e2984c8bac280a317d931d13c53772a926aa92b64daf35.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP EliteOne 800 G8 All-in-One PC" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/EliteOne-800-G8-All-in-One@2x.jpg | @+md => /content/dam/sites/worldwide/homepage/images/EliteOne-800-G8-All-in-One@2x.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/EliteOne-800-G8-All-in-One@2x.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_id284c04d3a9fe4a0549892af93cf62c5d2b9dda7ca7d35455f1d7a2c199efd1ba" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Desktops empresariales

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #id3c8033275b26e6e73681ac30da28602ce24d0eae088ee26b74a12137d11b59af{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id3c8033275b26e6e73681ac30da28602ce24d0eae088ee26b74a12137d11b59af:focus,
            #id3c8033275b26e6e73681ac30da28602ce24d0eae088ee26b74a12137d11b59af:hover,
            #id3c8033275b26e6e73681ac30da28602ce24d0eae088ee26b74a12137d11b59af.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/desktops/business-desktops.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id3c8033275b26e6e73681ac30da28602ce24d0eae088ee26b74a12137d11b59af" data-link-type="e_learnClick" data-link-placement="products" data-link-id="pcs-business-desktops">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
            
            
            
                
    <style type="text/css">
        
        

        
        

        
        
        
            #id644ab28f11f18cb7765729de62617636a010cd51735a04facbc9dfbb07624734 {
                color: #000
            }

            #id644ab28f11f18cb7765729de62617636a010cd51735a04facbc9dfbb07624734 svg.link-arrow-svg {
                fill: #000
            }

            body:not(.c-mouse-event) #id644ab28f11f18cb7765729de62617636a010cd51735a04facbc9dfbb07624734:focus,
            #id644ab28f11f18cb7765729de62617636a010cd51735a04facbc9dfbb07624734:hover,
            #id644ab28f11f18cb7765729de62617636a010cd51735a04facbc9dfbb07624734.hover {
                color: #000000;
            }

            body:not(.c-mouse-event) #id644ab28f11f18cb7765729de62617636a010cd51735a04facbc9dfbb07624734:focus svg.link-arrow-svg,
            #id644ab28f11f18cb7765729de62617636a010cd51735a04facbc9dfbb07624734:hover svg.link-arrow-svg,
            #id644ab28f11f18cb7765729de62617636a010cd51735a04facbc9dfbb07624734.hover svg.link-arrow-svg {
                fill: #000000;
            }
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/desktops/desktops-empresariales.html" target="_self" class="c-button-link-with-arrow  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id644ab28f11f18cb7765729de62617636a010cd51735a04facbc9dfbb07624734" data-link-type="e_buyClick" data-link-placement="products" data-link-id="pcs-business-desktops">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" class="link-arrow-svg">
                                    <path d="m455.465 769.707-1.847-.974 3.478-5.054-3.475-4.989 1.841-.983 4.156 5.966z" transform="translate(-453.618 -757.707)"/>
                                </svg>
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell0a19261551d91845cdb421b85574e6deb0e4ac63eabd42d9cd81ed0472920df8 ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.83%;
		}
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754 hp-image {
			max-width: 100%;
			 width: 642px; 
			
		}
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.83%;
		}
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754 hp-image {
			max-width: 100%;
			 width: 642px; 
			
		}
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.83%;
		}
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754 hp-image {
			max-width: 100%;
			 width: 642px; 
			
		}
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_ida3f733fd598c88b5c0b83c1a55c3ddc8a6a30342b52e41729551870ee801b754.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP ZBook Firefly 15 G8 Mobile Workstation" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/zbook-firefly-15-G8.jpg | @+md => /content/dam/sites/worldwide/homepage/images/zbook-firefly-15-G8.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/zbook-firefly-15-G8.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_idf4a48604ed4f1e27e4221de559076b3d432e8156b2d2ba23eca40602d9bd4f17" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Workstations

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #idcb7179e5cbebba3dc2daeea76de9830e5a45551464627fa2f963601d975fa666{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #idcb7179e5cbebba3dc2daeea76de9830e5a45551464627fa2f963601d975fa666:focus,
            #idcb7179e5cbebba3dc2daeea76de9830e5a45551464627fa2f963601d975fa666:hover,
            #idcb7179e5cbebba3dc2daeea76de9830e5a45551464627fa2f963601d975fa666.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/workstations/workstation-pcs.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="idcb7179e5cbebba3dc2daeea76de9830e5a45551464627fa2f963601d975fa666" data-link-type="e_learnClick" data-link-placement="products" data-link-id="pcs-workstations">
                            
                            
                            <span class="c-button__text"><p>Información</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
            
            
            
                
    <style type="text/css">
        
        

        
        

        
        
        
            #idd952cd01be0e87b53ea7f0aa557eeab23eb233bf21c27ae442247da6f4b6596e {
                color: #000
            }

            #idd952cd01be0e87b53ea7f0aa557eeab23eb233bf21c27ae442247da6f4b6596e svg.link-arrow-svg {
                fill: #000
            }

            body:not(.c-mouse-event) #idd952cd01be0e87b53ea7f0aa557eeab23eb233bf21c27ae442247da6f4b6596e:focus,
            #idd952cd01be0e87b53ea7f0aa557eeab23eb233bf21c27ae442247da6f4b6596e:hover,
            #idd952cd01be0e87b53ea7f0aa557eeab23eb233bf21c27ae442247da6f4b6596e.hover {
                color: #000000;
            }

            body:not(.c-mouse-event) #idd952cd01be0e87b53ea7f0aa557eeab23eb233bf21c27ae442247da6f4b6596e:focus svg.link-arrow-svg,
            #idd952cd01be0e87b53ea7f0aa557eeab23eb233bf21c27ae442247da6f4b6596e:hover svg.link-arrow-svg,
            #idd952cd01be0e87b53ea7f0aa557eeab23eb233bf21c27ae442247da6f4b6596e.hover svg.link-arrow-svg {
                fill: #000000;
            }
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/notebooks/notebooks-empresariales/notebooks-zbook.html" target="_self" class="c-button-link-with-arrow  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="idd952cd01be0e87b53ea7f0aa557eeab23eb233bf21c27ae442247da6f4b6596e" data-link-type="e_buyClick" data-link-placement="products" data-link-id="pcs-workstations">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" class="link-arrow-svg">
                                    <path d="m455.465 769.707-1.847-.974 3.478-5.054-3.475-4.989 1.841-.983 4.156 5.966z" transform="translate(-453.618 -757.707)"/>
                                </svg>
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                

                
            
        </div>
        
    </div>
</hp-grid>
</div>



    </div>
</hp-visual-tabs-item>

                </div>
            
                <div class="c-grid-cell col-md-4 c-card-carousel-slide c-visual-tabs__grid-cell">
                    
<div>
    
</div>
<hp-visual-tabs-item class="c-visual-tabs-item">
    <div class="c-visual-tabs-item__trigger hover-play" data-metrics-customhandler data-metrics-event="e_linkClick" data-metrics-link-placement="filters" data-metrics-link-id="monitors-and-accs">
        <div class="c-visual-tabs-item__img">
            <div class="c-image-container cmp-image c-image-container--align-center" id="id_image_idbb14209f52fdc37af02be8e387b2b873d34ccd004b30cd780ec2eef10e91dadb" style="margin-left: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
	
		#id_image_idbb14209f52fdc37af02be8e387b2b873d34ccd004b30cd780ec2eef10e91dadb hp-image {
			
			
		}
		
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
	
		#id_image_idbb14209f52fdc37af02be8e387b2b873d34ccd004b30cd780ec2eef10e91dadb hp-image {
			
			
		}
		
	


        }
        @media (max-width: 719.98px){
            
	
	
		#id_image_idbb14209f52fdc37af02be8e387b2b873d34ccd004b30cd780ec2eef10e91dadb hp-image {
			
			
		}
		
	


        }
        
	

    </style>

    
        <hp-image alt="Monitors and Accessories" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/Mask-Group-277@2x.png | @+md => /content/dam/sites/worldwide/homepage/images/Mask-Group-277@2x.png | @+lg => /content/dam/sites/worldwide/homepage/images/Mask-Group-277@2x.png">
            
            
        </hp-image>
    
</div>

    


        </div>
        <div class="c-visual-tabs-item__desc">
            <h3 class="h3">Monitores y Accesorios</h3>
        </div>
    </div>
    <div class="c-visual-tabs-item__content ">
        




    
    
    <div class="grid">


<hp-grid class="js-hp-component hp-grid id_grid36ae0b70adc94194ac9cd9444a8dcd76 
                
                 
                 
                 
                 
                 
                " data-metrics-link-placement="Printer Tab" data-metrics-event="e_linkClick" data-metrics-customhandler="true">
    <div class="container id_grid_containerd14b92549273451e96aeb32e15b55966  ">
        <style type="text/css">
            

            

            

            
            
            

            
                .container.id_grid_containerd14b92549273451e96aeb32e15b55966 {
                    max-width: 100%;
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .container.id_grid_containerd14b92549273451e96aeb32e15b55966 {
                        max-width: 100%;
                    }
                }
            
            
                @media (max-width: 719.98px) {
                    .container.id_grid_containerd14b92549273451e96aeb32e15b55966 {
                        max-width: 100%;;
                    }
                }
            

            
            
            @media (min-width: 720px) and (max-width: 1279.98px) {
                .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row {
                    margin-left: -0px;
                    margin-right: -0px;
                }
                .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row > [class*="col"],
                .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row > .c-grid__header [class*="col"],
                .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row > .swiper-wrapper > [class*="col"] {
                    padding-left: 0px;
                    padding-right: 0px;
                }
            }
            
            

            
                .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row > [class*="col"],
                .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row > .c-grid__header [class*="col"],
                .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row > .swiper-wrapper > [class*="col"] {
                   padding-top: 50px;
                   padding-bottom: 50px;
               }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row > [class*="col"],
                    .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row > .c-grid__header [class*="col"],
                    .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row > .swiper-wrapper > [class*="col"] {
                        padding-top: 0px;
                        padding-bottom: 0px;
                    }
                }
            
            

            
                .id_grid_containerd14b92549273451e96aeb32e15b55966 {
                    padding-top: 0px;
                }
            
            
                .id_grid_containerd14b92549273451e96aeb32e15b55966 {
                    padding-bottom: 0px;
                }
            
            
                hp-grid.hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 {
                    padding-left: 0px;
                    padding-right: 0px;
                }
            
            
                .id_grid36ae0b70adc94194ac9cd9444a8dcd76 {
                    margin-top: 0px;
                }
            
            
                .id_grid36ae0b70adc94194ac9cd9444a8dcd76 {
                    margin-bottom: 0px;
                }
            

            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid_containerd14b92549273451e96aeb32e15b55966 {
                        padding-top: 0px;
                    }
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid_containerd14b92549273451e96aeb32e15b55966 {
                        padding-bottom: 0px;
                    }
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    hp-grid.hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 {
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid36ae0b70adc94194ac9cd9444a8dcd76 {
                        margin-top: 0px;
                    }
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid36ae0b70adc94194ac9cd9444a8dcd76 {
                        margin-bottom: 0px;
                    }
                }
            

            
            
            
            
            
            
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cell4d38f3a229d695eb4351ce242aba054415b4cc08fe50a98dd4210a77fa3610cb {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cell4d38f3a229d695eb4351ce242aba054415b4cc08fe50a98dd4210a77fa3610cb {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cell4d38f3a229d695eb4351ce242aba054415b4cc08fe50a98dd4210a77fa3610cb {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_cell4d38f3a229d695eb4351ce242aba054415b4cc08fe50a98dd4210a77fa3610cb {
                            height: 1px;
                        }
                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cellbadad271fc32c673b17a990bd9f4d9772a53f3a7b0685c29d893545c8bd66fb2 {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cellbadad271fc32c673b17a990bd9f4d9772a53f3a7b0685c29d893545c8bd66fb2 {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cellbadad271fc32c673b17a990bd9f4d9772a53f3a7b0685c29d893545c8bd66fb2 {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_cellbadad271fc32c673b17a990bd9f4d9772a53f3a7b0685c29d893545c8bd66fb2 {
                            height: 1px;
                        }
                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cellf8c46f7d8a0b1a350725ecd5b5fcc837e73e4d3380d88fe479424908ae64dec9 {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cellf8c46f7d8a0b1a350725ecd5b5fcc837e73e4d3380d88fe479424908ae64dec9 {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cellf8c46f7d8a0b1a350725ecd5b5fcc837e73e4d3380d88fe479424908ae64dec9 {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_cellf8c46f7d8a0b1a350725ecd5b5fcc837e73e4d3380d88fe479424908ae64dec9 {
                            height: 1px;
                        }
                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cell9a933e30a7317e6651a5d325c3d1660b4665b8ce77d81395977d21561d29a851 {
                            
                                padding-top: 10px;
                            
                            
                                padding-bottom: 10px;
                            
                            
                                padding-left: 10px;
                            
                            
                                padding-right: 10px;
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cell9a933e30a7317e6651a5d325c3d1660b4665b8ce77d81395977d21561d29a851 {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_containerd14b92549273451e96aeb32e15b55966 > .row .cell-id_grid_cell9a933e30a7317e6651a5d325c3d1660b4665b8ce77d81395977d21561d29a851 {
                                
                                
                                
                                
                            }
                        }
                    
                    

                    
                        .cell-break-id_grid_cell9a933e30a7317e6651a5d325c3d1660b4665b8ce77d81395977d21561d29a851 {
                            height: 1px;
                        }
                    
                    
                    
                
            
        </style>
        
        <div class="row justify-content-center justify-content-lg-center justify-content-md-center     ">
            
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell4d38f3a229d695eb4351ce242aba054415b4cc08fe50a98dd4210a77fa3610cb ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id9115cf5778c89418f093551eff1b06f0473e9616db317bae9deb1899dba2e004.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP M34d WQHD Curved Monitor" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/Group-6679@2x.jpg | @+md => /content/dam/sites/worldwide/homepage/images/Group-6679@2x.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/Group-6679@2x.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_idf096956d5e906257e62c25edf29e6ec0c7f71b9768e113308b3919cb258d9c87" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Monitores

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #idc745031c493846ce777ef871cd618a6f543aa061c0711cbb34e2f32c05acb2e0{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #idc745031c493846ce777ef871cd618a6f543aa061c0711cbb34e2f32c05acb2e0:focus,
            #idc745031c493846ce777ef871cd618a6f543aa061c0711cbb34e2f32c05acb2e0:hover,
            #idc745031c493846ce777ef871cd618a6f543aa061c0711cbb34e2f32c05acb2e0.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/monitores.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="idc745031c493846ce777ef871cd618a6f543aa061c0711cbb34e2f32c05acb2e0" data-link-type="e_buyClick" data-link-placement="products" data-link-id="monitors-and-accs-monitors">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cellbadad271fc32c673b17a990bd9f4d9772a53f3a7b0685c29d893545c8bd66fb2 ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idf52e27022751f5be249629cbeeed8cdc3da63e42e124c8752ad7468aa58677fc.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP 930 Creator Wireless Mouse" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/Group-6683@2x.jpg | @+md => /content/dam/sites/worldwide/homepage/images/Group-6683@2x.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/Group-6683@2x.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_id43ba0dca542e2bb9d025e7c5bf23ec4593ece78f2d7a92584994da17da0edbea" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Mouse

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #id876f0dd932c4d5dd6d1d41969ee9738e443b3dda78a97a65c4f8821d85c215f4{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id876f0dd932c4d5dd6d1d41969ee9738e443b3dda78a97a65c4f8821d85c215f4:focus,
            #id876f0dd932c4d5dd6d1d41969ee9738e443b3dda78a97a65c4f8821d85c215f4:hover,
            #id876f0dd932c4d5dd6d1d41969ee9738e443b3dda78a97a65c4f8821d85c215f4.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/accesorios/mouse-teclados/mouse.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id876f0dd932c4d5dd6d1d41969ee9738e443b3dda78a97a65c4f8821d85c215f4" data-link-type="e_buyClick" data-link-placement="products" data-link-id="monitors-and-accs-mice">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    <div class="c-grid-cell-break cell-break-lg  cell-break-id_grid_cellf8c46f7d8a0b1a350725ecd5b5fcc837e73e4d3380d88fe479424908ae64dec9"></div>
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cellf8c46f7d8a0b1a350725ecd5b5fcc837e73e4d3380d88fe479424908ae64dec9 ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_id7302a49a4031ef2348997bd8e5224d1defdfba5d55a3df83e0e1a38a46085f6a.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP 975 Dual-Mode Wireless Keyboard" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/Ivy_Commercial_NightfallBlack_CoreSet_TopDown@2x.jpg | @+md => /content/dam/sites/worldwide/homepage/images/Ivy_Commercial_NightfallBlack_CoreSet_TopDown@2x.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/Ivy_Commercial_NightfallBlack_CoreSet_TopDown@2x.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_id16f34494d38b0ac3e4b62f2a7435bea802733be621fbf51710b3ad3c0c1cec6d" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Teclados

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #id2c2631e7586d462712e8b07135d75d4ebf6a26a62a4264142a68bfdecd153a09{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id2c2631e7586d462712e8b07135d75d4ebf6a26a62a4264142a68bfdecd153a09:focus,
            #id2c2631e7586d462712e8b07135d75d4ebf6a26a62a4264142a68bfdecd153a09:hover,
            #id2c2631e7586d462712e8b07135d75d4ebf6a26a62a4264142a68bfdecd153a09.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/accesorios/mouse-teclados/teclados.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id2c2631e7586d462712e8b07135d75d4ebf6a26a62a4264142a68bfdecd153a09" data-link-type="e_buyClick" data-link-placement="products" data-link-id="monitors-and-accs-keyboards">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-4 col-md-6 col-sm-12  cell-id_grid_cell9a933e30a7317e6651a5d325c3d1660b4665b8ce77d81395977d21561d29a851 ">
                        




    
    
    <div class="image"><div class="c-image-container cmp-image c-image-container--align-left" id="id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996" style="margin-left: 0px; margin-top: 0px; margin-bottom: 20px; margin-right: 0px;">

    <style>
        @media (min-width: 1280px){
            
	
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (min-width: 720px) and (max-width: 1279.98px){
            
	
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        @media (max-width: 719.98px){
            
	
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996 hp-image:after {
			content: " " !important;
			display: block !important;
			padding-bottom: 85.24000000000001%;
		}
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996 hp-image {
			max-width: 100%;
			 width: 840px; 
			
		}
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996 hp-image .inner-image { position: absolute; left: 0; top: 0; bottom: 0; right: 0; }
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996.c-image-container--align-right hp-image .inner-image { left: auto; }
		#id_image_idb6e3e02f60f666b8cbb8ed9eaf26855864b6bdafce4d6b15e19821bb0811a996.c-image-container--align-center hp-image .inner-image { margin-left: auto; margin-right: auto }
	
	


        }
        
	

    </style>

    
        <hp-image alt="HP USB-C Dock G5" tabindex="100" mode="fit" touch-content="videoAutoplay" data-src="@+xs => /content/dam/sites/worldwide/homepage/images/Group-6744@2x.jpg | @+md => /content/dam/sites/worldwide/homepage/images/Group-6744@2x.jpg | @+lg => /content/dam/sites/worldwide/homepage/images/Group-6744@2x.jpg" lazy="lazy">
            
            
        </hp-image>
    
</div>

    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-black
         id_text_title_idfd126ca2c719e495b898f561f208df76f27f30b10809e1acec73b3304a05297c" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 8px;">
            <h4 class="h4">
                Bases y adaptadores

            </h4>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>


    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-left inline-container ">
        
            
            
            
                
    <style type="text/css">
        
            #idfd63f24e5a67a07643bbf4bae42e541940dcb338e0daad321863c48f9f29ee8f{
                color: #fff;
                background: #000;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #idfd63f24e5a67a07643bbf4bae42e541940dcb338e0daad321863c48f9f29ee8f:focus,
            #idfd63f24e5a67a07643bbf4bae42e541940dcb338e0daad321863c48f9f29ee8f:hover,
            #idfd63f24e5a67a07643bbf4bae42e541940dcb338e0daad321863c48f9f29ee8f.hover {
                 color: #fff;
                 background: #5a5a5a;
                 border-color: transparent;
                 background-origin: border-box;
             }
        
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/accesorios/baterias-cargadores-adaptadores.html" target="_self" class="c-button  
                                    
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="idfd63f24e5a67a07643bbf4bae42e541940dcb338e0daad321863c48f9f29ee8f" data-link-type="e_buyClick" data-link-placement="products" data-link-id="monitors-and-accs-docks-and-hubs">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                

                
            
        </div>
        
    </div>
</hp-grid>
</div>



    </div>
</hp-visual-tabs-item>

                </div>
            </div>
        </div>
    </hp-grid>
    <div class="c-visual-tabs__content container"></div>
    
</hp-visual-tabs>
</div>
<div class="ghost aem-GridColumn aem-GridColumn--default--12">

</div>
<div class="backgroundContainer aem-GridColumn aem-GridColumn--default--12">



<section class="c-bg-container   
     
     
    " style="margin: 0px
        0px
        0px
        0px;
        padding: 0px 0
         0px 0;" id="id_1887066821">

        <style>
            


            
            
                #id_1887066821 { min-height: 50px; }
            
            
            
                @media (min-width: 720px) and (max-width: 1279.98px){
                    #id_1887066821 { min-height: 50px; }
                }
            
            
            
        </style>

        <div class="c-bg-container__media-wrapper
            c-video-container--align-center  ">
            
            
                <style>
                    #id_1887066821 .c-bg-container__media-wrapper {
                        background: #f5f5f5;
                    }
                </style>
            
            

            
        </div>
        <div class="c-bg-container__content  full-width">
             <div class="c-bg-container__content-holder">
                 





            </div>
        </div>
    </section>

</div>
<div class="grid aem-GridColumn aem-GridColumn--default--12">


<hp-grid class="js-hp-component hp-grid id_gridd7659aee61fa4973aa053976c6e63149 
                
                 
                 
                 
                 
                 
                ">
    <div class="container id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 container-fluid stick-to-edges stick-to-edges-md stick-to-edges-sm">
        <style type="text/css">
            
                .id_gridd7659aee61fa4973aa053976c6e63149 {
                    background: #000;
                }
            

            

            

            
            
            

            
            
            

            
            
            

            
            
            

            
            
                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 {
                    padding-bottom: 0px;
                }
            
            
            
            

            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 {
                        padding-bottom: 0px;
                    }
                }
            
            
                @media (min-width: 720px) and (max-width: 1279.98px) {
                    hp-grid.hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 {
                        padding-left: 0px;
                        padding-right: 0px;
                    }
                }
            
            
            

            
                @media (max-width: 719.98px) {
                    .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 {
                        padding-top: 25px;
                    }
                }
            
            
                @media (max-width: 719.98px) {
                    .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 {
                        padding-bottom: 0px;
                    }
                }
            
            
            
            
            
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cell60208139c8db0d6bc58917804098b85a46ab3610784706167a3c884a68c47d85 {
                            
                            
                                padding-bottom: 0px;
                            
                            
                                padding-left: 100px;
                            
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cell60208139c8db0d6bc58917804098b85a46ab3610784706167a3c884a68c47d85 {
                                
                                
                                    padding-bottom: 0px;
                                
                                
                                    padding-left: 30px;
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cell60208139c8db0d6bc58917804098b85a46ab3610784706167a3c884a68c47d85 {
                                
                                
                                
                                    padding-left: 10px;
                                
                                
                            }
                        }
                    
                    

                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellec3e82f86a62acc0dcd4362850dc5ad1cb6f7a8ecaf05313cbf70fbdb0fdec5f {
                            
                            
                            
                                padding-left: 0px;
                            
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellec3e82f86a62acc0dcd4362850dc5ad1cb6f7a8ecaf05313cbf70fbdb0fdec5f {
                                
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellec3e82f86a62acc0dcd4362850dc5ad1cb6f7a8ecaf05313cbf70fbdb0fdec5f {
                                
                                
                                
                                    padding-left: 10px;
                                
                                
                            }
                        }
                    
                    

                    
                    
                    
                
            
                
                    
                    
                    

                    
                        .hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 {
                            
                                padding-top: 0px;
                            
                            
                                padding-bottom: 0px;
                            
                            
                            
                        }

                        @media (min-width: 720px) and (max-width: 1279.98px) {
                            .hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 {
                                
                                    padding-top: 0px;
                                
                                
                                    padding-bottom: 0px;
                                
                                
                                
                            }
                        }

                        @media (max-width: 719.98px) {
                            .hp-grid .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 {
                                
                                    padding-top: 0px;
                                
                                
                                    padding-bottom: 0px;
                                
                                
                                
                            }
                        }
                    
                    
                        
                            @media (min-width: 1280px){
                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9.cell-with-borders:after {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9.cell-with-borders.sticky-column.sticked:after {
                                    border-right-color: #FFF;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 .sticky-header-cell .cell-backdrop {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                    border-bottom: none;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 .top-cell .cell-backdrop {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 .bottom-cell .cell-backdrop {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                    border-top: none;
                                    border-left: none;
                                    border-right: none;
                                }
                            }
                        
                        
                            @media (min-width: 720px) and (max-width: 1279.98px) {
                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9.cell-with-borders:after {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9.cell-with-borders.sticky-column.sticked:after {
                                    border-right-color: #FFF;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 .sticky-header-cell .cell-backdrop {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                    border-bottom: none;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 .top-cell .cell-backdrop {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 .bottom-cell .cell-backdrop {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                    border-top: none;
                                    border-left: none;
                                    border-right: none;
                                }
                            }
                        
                        
                            @media (max-width: 719.98px) {
                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9.cell-with-borders:after {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9.cell-with-borders.sticky-column.sticked:after {
                                    border-right-color: #FFF;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 .sticky-header-cell .cell-backdrop {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                    border-bottom: none;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 .top-cell .cell-backdrop {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                    border-bottom: none;
                                    border-left: none;
                                    border-right: none;
                                }

                                .id_grid_container0ebcafb811144eccaaace2a58ff5c5a8 > .row .cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 .bottom-cell .cell-backdrop {
                                    border-width: 0 0 2px 0;
                                    border-style: solid;
                                    border-color: #FFF;
                                    border-top: none;
                                    border-left: none;
                                    border-right: none;
                                }
                            }
                        
                    

                    
                    
                    
                
            
        </style>
        
        <div class="row justify-content-center justify-content-lg-center justify-content-sm-start    ">
            
                
                    
                    <div class="c-grid-cell  col-lg-10 col-md-10 col-sm-12  cell-id_grid_cell60208139c8db0d6bc58917804098b85a46ab3610784706167a3c884a68c47d85 align-items-sm-start">
                        




    
    
    <div class="spacing">



<div>
    <div class="spacing-20 d-none d-md-block"><span class="d-none"></span></div>
    <div class="spacing-0 d-sm-block d-md-none"><span class="d-none"></span></div>
</div>




    

</div>


    
    
    <div class="titleAndText">

<hp-title-and-text class="c-title-and-text__wrapper font- " style="color: inherit">
    <div class="c-title-and-text c-title-and-text--text-left bg-  font-white
         id_text_title_id122477184a9f3bf7f3cac98da82f3a64ec15d22d7f4016aa350580967e181f31" style="margin-left: 0px; padding-top: 0px; padding-left: 0px; padding-bottom: 0px; margin-top: 0px; margin-bottom: 0px; margin-right: 0px; padding-right: 0px;">
        
        
        
        
        <div class="c-title-and-text__title" style="padding-top: 0px; padding-bottom: 0px;">
            <h3 class="h3">
                ¿Sabes exactamente lo que quieres? Pasa directamente a la tienda HP.com.

            </h3>
        </div>
        
    </div>
</hp-title-and-text>

    

</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-2 col-md-2 col-sm-12  cell-id_grid_cellec3e82f86a62acc0dcd4362850dc5ad1cb6f7a8ecaf05313cbf70fbdb0fdec5f align-items-sm-start">
                        




    
    
    <div class="ctadropdownbutton">



    
    <div class="cta-dropdown-button text-center stack-container ">
        
            
            
            
                
    <style type="text/css">
        
        
            #id2ffbc97a2bbaed1ddca85d1f335cf7fc49e2b2cd442178f11d4bc6f010c00666{
                color: #000;
                background: #FFF;
                border-color: transparent;
                background-origin: border-box;
            }

            body:not(.c-mouse-event) #id2ffbc97a2bbaed1ddca85d1f335cf7fc49e2b2cd442178f11d4bc6f010c00666:focus,
            #id2ffbc97a2bbaed1ddca85d1f335cf7fc49e2b2cd442178f11d4bc6f010c00666:hover,
            #id2ffbc97a2bbaed1ddca85d1f335cf7fc49e2b2cd442178f11d4bc6f010c00666.hover {
                 color: #000;
                 background: #cccccc;
                 border-color: transparent;
                 background-origin: border-box;
            }
        

        
        

        
        
        
        
        
        
    </style>

                
                
                    
                    
                    
                        <a href="https://www.hp.com/ar-es/shop/" target="_self" class="c-button c-button--large  
                                    stack
                                    append-misc-url-params
                                    
                                    
                                    " tabindex="0" id="id2ffbc97a2bbaed1ddca85d1f335cf7fc49e2b2cd442178f11d4bc6f010c00666" data-link-type="e_buyClick" data-link-placement="ribbon" data-link-id="straight-to-hp-store">
                            
                            
                            <span class="c-button__text"><p>Comprar</p>
</span>
                            
                            
                            
                            
                            
                            
                        </a>
                    
                

                
            
        
    </div>



    
</div>



                    </div>
                
                    
                    <div class="c-grid-cell  col-lg-12 cell-with-borders  cell-id_grid_cellfaef1868ab2c5ae3457c4b4c1b64cb39955f79295c99f402c1715cd91be2f4b9 align-items-sm-start">
                        





                    </div>
                

                
            
        </div>
        
    </div>
</hp-grid>
</div>
<div class="ghost aem-GridColumn aem-GridColumn--default--12">

</div>
<div class="ghost aem-GridColumn aem-GridColumn--default--12">

</div>

    
</div>
</div>


          </div>
          
          <section>





                
                	 
                

   
    
   
   
   <div id="footer" class="footer">
      <!-- Separator for header and footer -->
<div class="aem_country_selection_wrapper" style="display:none">
   

   
      <div class="aem_footer_language_selection_container">
         <div class="aem_closing_overlay_mobile"></div>
         <!-- sidebar country selector mobile -->
         
         <div id="test_sidebar" class="aem_test_sidebar">
            <!-- header country -->
            <div class="aem_mobile_country_header">
               <h2>Seleccione su país/región e idioma</h2>
               <a tabindex="-1" href="javascript:void(0);" title="Close" class="aem_close_btn_mobile_countries">
               <span class="aem_screenReadingText">Close Country/Region Selector Dialog</span></a>
            </div>
            <!-- header country -->
            <!-- Country Option -->
            
            
               <div class="aem_country_options">
                  <div class="aem_country_sel_cont" id="id_acc_0">
                     <!-- accordion Header -->
                      
                     	
                           
                              <a tabindex="-1" class="aem_country_sel_cont_header unselectable" href="javascript:void(0);" role="button" aria-expanded="false" title="Americas">
                              <span class="aem_accordion-header">Americas</span>
                              <span class="aem_accordian_arrow_icon_country">
                              </span>
                              </a>
                              <!-- accordion Header close -->
                              <!-- options accordion close-->
                              <ul class="aem_tab_list_country_selec">
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000122" href="https://www.hp.com/lamerica_nsc_cnt_amer-es/home.html" title="América Central" lang="es" hreflang="es-lamerica_nsc_cnt_amer">América Central</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000110" href="https://www.hp.com/ar-es/home.html" title="Argentina" lang="es" hreflang="es-ar">Argentina</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000116" href="https://www.hp.com/bo-es/home.html" title="Bolivia" lang="es" hreflang="es-bo">Bolivia</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000117" href="https://www.hp.com/br-pt/home.html" title="Brasil" lang="pt" hreflang="pt-br">Brasil</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000119" href="https://www.hp.com/ca-en/home.html" title="Canada" lang="en" hreflang="en-ca">Canada</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000120" href="https://www.hp.com/ca-fr/home.html" title="Canada - Français" lang="fr" hreflang="fr-ca">Canada - Français</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000121" href="https://www.hp.com/lamerica_nsc_carib-en/home.html" title="Caribbean" lang="en" hreflang="en-lamerica_nsc_carib">Caribbean</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000123" href="https://www.hp.com/cl-es/home.html" title="Chile" lang="es" hreflang="es-cl">Chile</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000125" href="https://www.hp.com/co-es/home.html" title="Colombia" lang="es" hreflang="es-co">Colombia</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000129" href="https://www.hp.com/ec-es/home.html" title="Ecuador" lang="es" hreflang="es-ec">Ecuador</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000150" href="https://www.hp.com/mx-es/home.html" title="México" lang="es" hreflang="es-mx">México</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000156" href="https://www.hp.com/py-es/home.html" title="Paraguay" lang="es" hreflang="es-py">Paraguay</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000157" href="https://www.hp.com/pe-es/home.html" title="Perú" lang="es" hreflang="es-pe">Perú</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000161" href="https://www.hp.com/pr-es/home.html" title="Puerto Rico" lang="es" hreflang="es-pr">Puerto Rico</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000181" href="https://www.hp.com/us-en/home.html" title="United States" lang="en" hreflang="en-us">United States</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000180" href="https://www.hp.com/uy-es/home.html" title="Uruguay" lang="es" hreflang="es-uy">Uruguay</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="1">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000182" href="https://www.hp.com/ve-es/home.html" title="Venezuela" lang="es" hreflang="es-ve">Venezuela</a>
                                       </li>
                                    
                                 
                              </ul>
                              <!-- options accordion close-->
                           
                        
                     
                     	
                           
                        
                     
                     	
                           
                        
                     
                  </div>
               </div>
               <!-- Country Option close -->
            
               <div class="aem_country_options">
                  <div class="aem_country_sel_cont" id="id_acc_1">
                     <!-- accordion Header -->
                      
                     	
                           
                        
                     
                     	
                           
                              <a tabindex="-1" class="aem_country_sel_cont_header unselectable" href="javascript:void(0);" role="button" aria-expanded="false" title="Asia and Oceania">
                              <span class="aem_accordion-header">Asia and Oceania</span>
                              <span class="aem_accordian_arrow_icon_country">
                              </span>
                              </a>
                              <!-- accordion Header close -->
                              <!-- options accordion close-->
                              <ul class="aem_tab_list_country_selec">
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000109" href="https://www.hp.com/asia_pac-en/default.html" title="Asia Pacific" lang="en" hreflang="en-asiapac">Asia Pacific</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000111" href="https://www.hp.com/au-en/home.html" title="Australia" lang="en" hreflang="en-au">Australia</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1001216" href="https://www.hp.com/bd-en/home.html" title="Bangladesh" lang="bn" hreflang="bn-bd">Bangladesh</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000137" href="https://www.hp.com/hk-en/home.html" title="Hong Kong SAR" lang="en" hreflang="en-hk">Hong Kong SAR</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000139" href="https://www.hp.com/in-en/home.html" title="India" lang="en" hreflang="en-in">India</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000140" href="https://www.hp.com/id-id/home.html" title="Indonesia" lang="id" hreflang="id-id">Indonesia</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000149" href="https://www.hp.com/my-en/home.html" title="Malaysia" lang="en" hreflang="en-my">Malaysia</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000154" href="https://www.hp.com/nz-en/home.html" title="New Zealand" lang="en" hreflang="en-nz">New Zealand</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000309" href="https://www.hp.com/asia_pac-en/default.html" title="Pakistan" lang="en" hreflang="en-pk">Pakistan</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000158" href="https://www.hp.com/ph-en/home.html" title="Philippines" lang="en" hreflang="en-ph">Philippines</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000167" href="https://www.hp.com/sg-en/home.html" title="Singapore" lang="en" hreflang="en-sg">Singapore</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1001217" href="https://www.hp.com/lk-en/home.html" title="Sri Lanka" lang="en" hreflang="en-lk">Sri Lanka</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000183" href="https://www.hp.com/vn-vi/home.html" title="Việt Nam" lang="en" hreflang="en-vn">Việt Nam</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000176" href="https://www.hp.com/th-th/home.html" title="ไทย" lang="en" hreflang="en-th">ไทย</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000124" href="https://www.hp.com/cn-zh/home.html" title="中华人民共和国" lang="zh" hreflang="zh-cn">中华人民共和国</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000136" href="https://www.hp.com/hk-zh/home.html" title="中國香港 - 繁體中文" lang="zh" hreflang="zh-hk">中國香港 - 繁體中文</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000175" href="https://www.hp.com/tw-zh/home.html" title="臺灣 地區" lang="zh" hreflang="zh-tw">臺灣 地區</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000144" href="https://www.hp.com/jp-ja/home.html" title="日本" lang="ja" hreflang="ja-jp">日本</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="2">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000146" href="https://www.hp.com/kr-ko/home.html" title="한국" lang="ko" hreflang="ko-kr">한국</a>
                                       </li>
                                    
                                 
                              </ul>
                              <!-- options accordion close-->
                           
                        
                     
                     	
                           
                        
                     
                  </div>
               </div>
               <!-- Country Option close -->
            
               <div class="aem_country_options">
                  <div class="aem_country_sel_cont" id="id_acc_2">
                     <!-- accordion Header -->
                      
                     	
                           
                        
                     
                     	
                           
                        
                     
                     	
                           
                              <a tabindex="-1" class="aem_country_sel_cont_header unselectable" href="javascript:void(0);" role="button" aria-expanded="false" title="Europe, Middle East and Africa">
                              <span class="aem_accordion-header">Europe, Middle East and Africa</span>
                              <span class="aem_accordian_arrow_icon_country">
                              </span>
                              </a>
                              <!-- accordion Header close -->
                              <!-- options accordion close-->
                              <ul class="aem_tab_list_country_selec">
                                 
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000107" href="https://www.hp.com/emea_africa-en/home.html" title="Africa" lang="en" hreflang="en-emea_africa">Africa</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000108" href="https://www.hp.com/emea_africa-fr/home.html" title="Afrique" lang="fr" hreflang="fr-emea_africa">Afrique</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000114" href="https://www.hp.com/be-nl/home.html" title="België" lang="nl" hreflang="nl-be">België</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000115" href="https://www.hp.com/be-fr/home.html" title="Belgique" lang="fr" hreflang="fr-be">Belgique</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000127" href="https://www.hp.com/cz-cs/home.html" title="Česká republika" lang="cs" hreflang="cs-cz">Česká republika</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000128" href="https://www.hp.com/dk-da/home.html" title="Danmark" lang="da" hreflang="da-dk">Danmark</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000134" href="https://www.hp.com/de-de/home.html" title="Deutschland" lang="de" hreflang="de-de">Deutschland</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000131" href="https://www.hp.com/ee-et/home.html" title="Eesti" lang="et" hreflang="et-ee">Eesti</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000171" href="https://www.hp.com/es-es/home.html" title="España" lang="es" hreflang="es-es">España</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000133" href="https://www.hp.com/fr-fr/home.html" title="France" lang="fr" hreflang="fr-fr">France</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000126" href="https://www.hp.com/hr-hr/home.html" title="Hrvatska" lang="hr" hreflang="hr-hr">Hrvatska</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000141" href="https://www.hp.com/ie-en/home.html" title="Ireland" lang="en" hreflang="en-ie">Ireland</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000143" href="https://www.hp.com/it-it/home.html" title="Italia" lang="it" hreflang="it-it">Italia</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000147" href="https://www.hp.com/lv-lv/home.html" title="Latvija" lang="lv" hreflang="lv-lv">Latvija</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000148" href="https://www.hp.com/lt-lt/home.html" title="Lietuva" lang="lt" hreflang="lt-lt">Lietuva</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000138" href="https://www.hp.com/hu-hu/home.html" title="Magyarország" lang="hu" hreflang="hu-hu">Magyarország</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000152" href="https://www.hp.com/emea_middle_east-en/home.html" title="Middle East" lang="en" hreflang="en-emea_middle_east">Middle East</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000153" href="https://www.hp.com/nl-nl/home.html" title="Nederland" lang="nl" hreflang="nl-nl">Nederland</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000155" href="https://www.hp.com/no-no/home.html" title="Norge" lang="no" hreflang="no-no">Norge</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000112" href="https://www.hp.com/at-de/home.html" title="Österreich" lang="de" hreflang="de-at">Österreich</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000159" href="https://www.hp.com/pl-pl/home.html" title="Polska" lang="pl" hreflang="pl-pl">Polska</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000160" href="https://www.hp.com/pt-pt/home.html" title="Portugal" lang="pt" hreflang="pt-pt">Portugal</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000162" href="https://www.hp.com/ro-ro/home.html" title="România" lang="ro" hreflang="ro-ro">România</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000165" href="https://www.hp.com/sa-en/home.html" title="Saudi Arabia" lang="en" hreflang="en-sa">Saudi Arabia</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000169" href="https://www.hp.com/si-sl/home.html" title="Slovenija" lang="sl" hreflang="sl-si">Slovenija</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000168" href="https://www.hp.com/sk-sk/home.html" title="Slovensko" lang="sk" hreflang="sk-sk">Slovensko</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000170" href="https://www.hp.com/za-en/home.html" title="South Africa" lang="en" hreflang="en-za">South Africa</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000173" href="https://www.hp.com/ch-fr/home.html" title="Suisse" lang="fr" hreflang="fr-ch">Suisse</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000132" href="https://www.hp.com/fi-fi/home.html" title="Suomi" lang="fi" hreflang="fi-fi">Suomi</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000172" href="https://www.hp.com/se-sv/home.html" title="Sverige" lang="sv" hreflang="sv-se">Sverige</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000174" href="https://www.hp.com/ch-de/home.html" title="Switzerland" lang="de" hreflang="de-ch">Switzerland</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000177" href="https://www.hp.com/tr-tr/home.html" title="Türkiye" lang="tr" hreflang="tr-tr">Türkiye</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000178" href="https://www.hp.com/gb-en/home.html" title="United Kingdom" lang="en" hreflang="en-gb">United Kingdom</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000135" href="https://www.hp.com/gr-el/home.html" title="Ελλάδα" lang="el" hreflang="el-gr">Ελλάδα</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000118" href="https://www.hp.com/bg-bg/home.html" title="България" lang="bg" hreflang="bg-bg">България</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000145" href="https://www.hp.com/kz-ru/home.html" title="Казахстан" lang="ru" hreflang="ru-kz">Казахстан</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000166" href="https://www.hp.com/rs-sr/home.html" title="Србија" lang="sr" hreflang="sr-rs">Србија</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000179" href="https://www.hp.com/ua-uk/home.html" title="Україна" lang="uk" hreflang="uk-ua">Україна</a>
                                       </li>
                                    
                                 
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000142" href="https://www.hp.com/il-he/home.html" title="ישראל" lang="he" hreflang="he-il">ישראל</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000151" href="https://www.hp.com/emea_middle_east-ar/home.html" title="الشرق الأوسط" lang="ar" hreflang="ar-emea_middle_east">الشرق الأوسط</a>
                                       </li>
                                    
                                 
                                    
                                       <li data-region="0">
                                             <a tabindex="-1" class="aem_link_country_selec no-outline unselectable" data-link-type="e_linkClick" data-link-id="1000164" href="https://www.hp.com/sa-ar/home.html" title="المملكة العربية السعودية" lang="ar" hreflang="ar-sa">المملكة العربية السعودية</a>
                                       </li>
                                    
                                 
                                    
                                 
                              </ul>
                              <!-- options accordion close-->
                           
                        
                     
                  </div>
               </div>
               <!-- Country Option close -->
            
         </div>
         
         <!-- sidebar country selector mobile close -->
         <a name="skiptofooter">
         <span class="aem_screenReadingText">End of content</span>
         </a>
         <div class="aem_footer_language_selection_section aem_hf_clf">
            <div class="aem_right_corner"></div>
            
               <div class="aem_country_selctor_container">
                  <div class="aem_js_cselector aem_country_selector_wrapper">
                     <a tabindex="800" class="aem_js_cselector_trigger aem_country_selector aem_country_selected" rel="js_cselector_target" href="https://www.hp.com/ar-es/home.html" title="Cerrar Selector de país/región">
                     <span class="aem_countryRegionLabel">País/Región :</span>
                     <span class="aem_screenReadingText aem_js_screen_reading">Close Country/Region Selector</span>
                     <span class="aem_flag" style="background:url('https://www8.hp.com/content/dam/hpit-aem-globalnav/flags/argentina.gif') transparent no-repeat left center; ">&nbsp;</span>
                     <span class="aem_selCountry">
                     <span class="aem_screenReadingText">Selected</span>Argentina</span>
                     </a>
                     <div class="aem_worldmap_container">
                        <div class="aem_world_map aem_js_cselector_target">
                           <div class="aem_shadow_cover_top">&nbsp;</div>
                           <h4 class="aem_screenReadingText">HP Worldwide</h4>
                           <div class="aem_js_worldmap_container">
                              <div class="aem_div_worldmap w-flag" style="background: url('https://www8.hp.com/content/dam/hpit-aem-globalnav/worldmap_old.jpg'); background-position: center;background-repeat: no-repeat;background-size: cover;position: relative; ">
                                 <div class="aem_popup_b_corner">&nbsp;</div>
                                 <span class="aem_screenReadingText">popUpSRBeginingLabelString</span>
                                 <h2>Seleccione su país/región e idioma</h2>
                                 <div class="aem_countries_div">
                                    <span class="aem_screenReadingText">Click or use the tab key to select your country</span>
                                    <ul id='countrylist' class="aem_countrylist">
                                       
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000107" href="https://www.hp.com/emea_africa-en/home.html" title="Africa" lang="en" hreflang="en-emea_africa">Africa</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000108" href="https://www.hp.com/emea_africa-fr/home.html" title="Afrique" lang="fr" hreflang="fr-emea_africa">Afrique</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000122" href="https://www.hp.com/lamerica_nsc_cnt_amer-es/home.html" title="América Central" lang="es" hreflang="es-lamerica_nsc_cnt_amer">América Central</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000110" href="https://www.hp.com/ar-es/home.html" title="Argentina" lang="es" hreflang="es-ar">Argentina</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000109" href="https://www.hp.com/asia_pac-en/default.html" title="Asia Pacific" lang="en" hreflang="en-asiapac">Asia Pacific</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000111" href="https://www.hp.com/au-en/home.html" title="Australia" lang="en" hreflang="en-au">Australia</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001216" href="https://www.hp.com/bd-en/home.html" title="Bangladesh" lang="bn" hreflang="bn-bd">Bangladesh</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000114" href="https://www.hp.com/be-nl/home.html" title="België" lang="nl" hreflang="nl-be">België</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000115" href="https://www.hp.com/be-fr/home.html" title="Belgique" lang="fr" hreflang="fr-be">Belgique</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000116" href="https://www.hp.com/bo-es/home.html" title="Bolivia" lang="es" hreflang="es-bo">Bolivia</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000117" href="https://www.hp.com/br-pt/home.html" title="Brasil" lang="pt" hreflang="pt-br">Brasil</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000119" href="https://www.hp.com/ca-en/home.html" title="Canada" lang="en" hreflang="en-ca">Canada</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000120" href="https://www.hp.com/ca-fr/home.html" title="Canada - Français" lang="fr" hreflang="fr-ca">Canada - Français</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000121" href="https://www.hp.com/lamerica_nsc_carib-en/home.html" title="Caribbean" lang="en" hreflang="en-lamerica_nsc_carib">Caribbean</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000127" href="https://www.hp.com/cz-cs/home.html" title="Česká republika" lang="cs" hreflang="cs-cz">Česká republika</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000123" href="https://www.hp.com/cl-es/home.html" title="Chile" lang="es" hreflang="es-cl">Chile</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000125" href="https://www.hp.com/co-es/home.html" title="Colombia" lang="es" hreflang="es-co">Colombia</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000128" href="https://www.hp.com/dk-da/home.html" title="Danmark" lang="da" hreflang="da-dk">Danmark</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000134" href="https://www.hp.com/de-de/home.html" title="Deutschland" lang="de" hreflang="de-de">Deutschland</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000129" href="https://www.hp.com/ec-es/home.html" title="Ecuador" lang="es" hreflang="es-ec">Ecuador</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000131" href="https://www.hp.com/ee-et/home.html" title="Eesti" lang="et" hreflang="et-ee">Eesti</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000171" href="https://www.hp.com/es-es/home.html" title="España" lang="es" hreflang="es-es">España</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000133" href="https://www.hp.com/fr-fr/home.html" title="France" lang="fr" hreflang="fr-fr">France</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000137" href="https://www.hp.com/hk-en/home.html" title="Hong Kong SAR" lang="en" hreflang="en-hk">Hong Kong SAR</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000126" href="https://www.hp.com/hr-hr/home.html" title="Hrvatska" lang="hr" hreflang="hr-hr">Hrvatska</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000139" href="https://www.hp.com/in-en/home.html" title="India" lang="en" hreflang="en-in">India</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000140" href="https://www.hp.com/id-id/home.html" title="Indonesia" lang="id" hreflang="id-id">Indonesia</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000141" href="https://www.hp.com/ie-en/home.html" title="Ireland" lang="en" hreflang="en-ie">Ireland</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000143" href="https://www.hp.com/it-it/home.html" title="Italia" lang="it" hreflang="it-it">Italia</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000147" href="https://www.hp.com/lv-lv/home.html" title="Latvija" lang="lv" hreflang="lv-lv">Latvija</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000148" href="https://www.hp.com/lt-lt/home.html" title="Lietuva" lang="lt" hreflang="lt-lt">Lietuva</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000138" href="https://www.hp.com/hu-hu/home.html" title="Magyarország" lang="hu" hreflang="hu-hu">Magyarország</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000149" href="https://www.hp.com/my-en/home.html" title="Malaysia" lang="en" hreflang="en-my">Malaysia</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000150" href="https://www.hp.com/mx-es/home.html" title="México" lang="es" hreflang="es-mx">México</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000152" href="https://www.hp.com/emea_middle_east-en/home.html" title="Middle East" lang="en" hreflang="en-emea_middle_east">Middle East</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000153" href="https://www.hp.com/nl-nl/home.html" title="Nederland" lang="nl" hreflang="nl-nl">Nederland</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000154" href="https://www.hp.com/nz-en/home.html" title="New Zealand" lang="en" hreflang="en-nz">New Zealand</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000155" href="https://www.hp.com/no-no/home.html" title="Norge" lang="no" hreflang="no-no">Norge</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000112" href="https://www.hp.com/at-de/home.html" title="Österreich" lang="de" hreflang="de-at">Österreich</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000309" href="https://www.hp.com/asia_pac-en/default.html" title="Pakistan" lang="en" hreflang="en-pk">Pakistan</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000156" href="https://www.hp.com/py-es/home.html" title="Paraguay" lang="es" hreflang="es-py">Paraguay</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000157" href="https://www.hp.com/pe-es/home.html" title="Perú" lang="es" hreflang="es-pe">Perú</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000158" href="https://www.hp.com/ph-en/home.html" title="Philippines" lang="en" hreflang="en-ph">Philippines</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000159" href="https://www.hp.com/pl-pl/home.html" title="Polska" lang="pl" hreflang="pl-pl">Polska</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000160" href="https://www.hp.com/pt-pt/home.html" title="Portugal" lang="pt" hreflang="pt-pt">Portugal</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000161" href="https://www.hp.com/pr-es/home.html" title="Puerto Rico" lang="es" hreflang="es-pr">Puerto Rico</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000162" href="https://www.hp.com/ro-ro/home.html" title="România" lang="ro" hreflang="ro-ro">România</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000165" href="https://www.hp.com/sa-en/home.html" title="Saudi Arabia" lang="en" hreflang="en-sa">Saudi Arabia</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000167" href="https://www.hp.com/sg-en/home.html" title="Singapore" lang="en" hreflang="en-sg">Singapore</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000169" href="https://www.hp.com/si-sl/home.html" title="Slovenija" lang="sl" hreflang="sl-si">Slovenija</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000168" href="https://www.hp.com/sk-sk/home.html" title="Slovensko" lang="sk" hreflang="sk-sk">Slovensko</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000170" href="https://www.hp.com/za-en/home.html" title="South Africa" lang="en" hreflang="en-za">South Africa</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1001217" href="https://www.hp.com/lk-en/home.html" title="Sri Lanka" lang="en" hreflang="en-lk">Sri Lanka</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000173" href="https://www.hp.com/ch-fr/home.html" title="Suisse" lang="fr" hreflang="fr-ch">Suisse</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000132" href="https://www.hp.com/fi-fi/home.html" title="Suomi" lang="fi" hreflang="fi-fi">Suomi</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000172" href="https://www.hp.com/se-sv/home.html" title="Sverige" lang="sv" hreflang="sv-se">Sverige</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000174" href="https://www.hp.com/ch-de/home.html" title="Switzerland" lang="de" hreflang="de-ch">Switzerland</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000177" href="https://www.hp.com/tr-tr/home.html" title="Türkiye" lang="tr" hreflang="tr-tr">Türkiye</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000178" href="https://www.hp.com/gb-en/home.html" title="United Kingdom" lang="en" hreflang="en-gb">United Kingdom</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000181" href="https://www.hp.com/us-en/home.html" title="United States" lang="en" hreflang="en-us">United States</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000180" href="https://www.hp.com/uy-es/home.html" title="Uruguay" lang="es" hreflang="es-uy">Uruguay</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="1">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000182" href="https://www.hp.com/ve-es/home.html" title="Venezuela" lang="es" hreflang="es-ve">Venezuela</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000183" href="https://www.hp.com/vn-vi/home.html" title="Việt Nam" lang="en" hreflang="en-vn">Việt Nam</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000135" href="https://www.hp.com/gr-el/home.html" title="Ελλάδα" lang="el" hreflang="el-gr">Ελλάδα</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000118" href="https://www.hp.com/bg-bg/home.html" title="България" lang="bg" hreflang="bg-bg">България</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000145" href="https://www.hp.com/kz-ru/home.html" title="Казахстан" lang="ru" hreflang="ru-kz">Казахстан</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000166" href="https://www.hp.com/rs-sr/home.html" title="Србија" lang="sr" hreflang="sr-rs">Србија</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000179" href="https://www.hp.com/ua-uk/home.html" title="Україна" lang="uk" hreflang="uk-ua">Україна</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000142" href="https://www.hp.com/il-he/home.html" title="ישראל" lang="he" hreflang="he-il">ישראל</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000151" href="https://www.hp.com/emea_middle_east-ar/home.html" title="الشرق الأوسط" lang="ar" hreflang="ar-emea_middle_east">الشرق الأوسط</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="0">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000164" href="https://www.hp.com/sa-ar/home.html" title="المملكة العربية السعودية" lang="ar" hreflang="ar-sa">المملكة العربية السعودية</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000176" href="https://www.hp.com/th-th/home.html" title="ไทย" lang="en" hreflang="en-th">ไทย</a>
                                             </li>
                                          
                                       
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000124" href="https://www.hp.com/cn-zh/home.html" title="中华人民共和国" lang="zh" hreflang="zh-cn">中华人民共和国</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000136" href="https://www.hp.com/hk-zh/home.html" title="中國香港 - 繁體中文" lang="zh" hreflang="zh-hk">中國香港 - 繁體中文</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000175" href="https://www.hp.com/tw-zh/home.html" title="臺灣 地區" lang="zh" hreflang="zh-tw">臺灣 地區</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000144" href="https://www.hp.com/jp-ja/home.html" title="日本" lang="ja" hreflang="ja-jp">日本</a>
                                             </li>
                                          
                                       
                                          
                                             <li data-region="2">
                                                   <a tabindex="801" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000146" href="https://www.hp.com/kr-ko/home.html" title="한국" lang="ko" hreflang="ko-kr">한국</a>
                                             </li>
                                          
                                       
                                    </ul>
                                    <span class="aem_screenReadingText">popUpSREndingLabelString</span>
                                 </div>
                                 <a tabindex="801" href="javascript:void(0);" title="Close" class="aem_cselectorbtn">
                                 <span class="aem_screenReadingText">Close Country/Region Selector Dialog</span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aem_wrapper_right_corner">&nbsp;</div>
                  </div>
               </div>
            
          <div class="aem_left_corner"></div>
         </div>
      </div>
   

</div>


   
      <div class="footer_links_container_wrapper" style="display:none">
         <div class="footer_links_container">
            <div class="footer_links">
            
               <div class="footer_links_list_container firstchild" id="id_1">
                  <a tabindex="901" class="link_metrics ul_site_link_header" data-link-type="e_linkClick" data-link-id="1000076" href="javascript:void(0);" role="button" aria-expanded="false"> <span class="accordion-header">Acerca de nosotros</span> <span class="accordian_arrow_icon"> 
                  </span>
                  </a>
                  <ul class="tab_list">
                     <li class="first_li"><span> <a tabindex="901" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000076" href="https://www.hp.com/ar-es/hp-information.html" target="_self">Acerca de nosotros</a>
                        </span>
                     </li>
                     
                        <li class="wpr-desktop-hide"><a tabindex="901" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000076" href="https://www.hp.com/ar-es/hp-information.html" target="_self">Acerca de nosotros</a>
                        </li>
                     
                     
                        <li><a tabindex="901" class="link_metrics no-outline" data-link-type="e_linkClick" data-link-id="1000077" href="https://www.hp.com/ar-es/contact-hp/contact.html" rel="noopener noreferrer" target="_blank">Contáctese con HP </a>
                        </li>
                     
                        <li><a tabindex="901" class="link_metrics no-outline" data-link-type="e_linkClick" data-link-id="1000078" href="https://jobs.hp.com/en-us/" target="_self">Carreras </a>
                        </li>
                     
                        <li><a tabindex="901" class="link_metrics no-outline" data-link-type="e_linkClick" data-link-id="1000079" href="https://investor.hp.com/home/default.aspx" target="_self">Relaciones con inversores </a>
                        </li>
                     
                        <li><a tabindex="901" class="link_metrics no-outline" data-link-type="e_linkClick" data-link-id="1000080" href="https://www.hp.com/ar-es/hp-information/sustainable-impact.html" target="_self">Impacto sustentable </a>
                        </li>
                     
                        <li><a tabindex="901" class="link_metrics no-outline" data-link-type="e_linkClick" data-link-id="1000081" href="https://press.hp.com/us/en.html" target="_self">Centro de prensa </a>
                        </li>
                     
                        <li><a tabindex="901" class="link_metrics no-outline" data-link-type="e_linkClick" data-link-id="1000082" href="https://garage.hp.com/us/en.html" target="_self">El Garaje </a>
                        </li>
                     
                  </ul>
               </div>
		 
            
               <div class="footer_links_list_container" id="id_2">
                  <a tabindex="902" class="ul_site_link_header link_metrics" data-link-type="e_linkClick" data-link-id="1000083" href="javascript:void(0);" role="button" aria-expanded="false"> <span class="accordion-header">Cómo comprar</span> <span class="accordian_arrow_icon"> 
                  </span>
                  </a>
                  <ul class="tab_list">
                     <li class="first_li"><span class="no-underline"> <a tabindex="-1" class="link_metrics column_no_link link_metrics" target="_self">Cómo comprar </a>
                        </span>
                     </li>
                     
                     
                        <li><a tabindex="902" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="1000084" href="https://www.hp.com/ar-es/shop/" target="_self">Tienda en linea </a>
                        </li>
                     
                        <li><a tabindex="902" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="1000085" href="https://www.hp.com/ar-es/contact-hp/shopping.html" target="_self">Llamar a un representante de HP </a>
                        </li>
                     
                        <li><a tabindex="902" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="1000086" href="https://locator.hp.com/ar/es/?ml___lang=es-MX%20(1)&ml___region=ar&ml___cont=LAR" target="_self">Buscar un revendedor </a>
                        </li>
                     
                        <li><a tabindex="902" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="1000338" href="https://www.hp.com/ar-es/shop/promociones.html" target="_self">HP Promociones </a>
                        </li>
                     
                  </ul>
               </div>
            
            
               <div class="footer_links_list_container" id="id_3">
                  <a tabindex="903" class="ul_site_link_header link_metrics" data-link-id="1000089" href="javascript:void(0);" role="button" aria-expanded="false"> <span class="accordion-header">Soporte</span> <span class="accordian_arrow_icon"> 
                  </span>
                  </a>
                  <ul class="tab_list">
                     <li class="first_li"><span><a tabindex="903" class="link_metrics no-outline link_metrics" data-link-id="1000089" href="https://support.hp.com/ar-es/" target="_self">Soporte</a>
                        </span>
                     </li>
                     
                        <li class="wpr-desktop-hide"><a tabindex="903" class="link_metrics" data-link-id="1000089" href="https://support.hp.com/ar-es/" target="_self">Soporte</a>
                        </li>
                     
                     
                        <li><a tabindex="903" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="1000090" href="https://support.hp.com/ar-es/drivers" target="_self">Descargar controladores </a>
                        </li>
                     
                        <li><a tabindex="903" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="1000091" href="https://support.hp.com/ar-es/" target="_self">Soporte y solución de problemas </a>
                        </li>
                     
                        <li><a tabindex="903" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="1000092" href="http://h30467.www3.hp.com/" target="_self">Comunidad </a>
                        </li>
                     
                        <li><a tabindex="903" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="1000093" href="https://register.hp.com/americas/flowPage/registration/index.do?execution=e1s1&cc=ar&lang=es" target="_self">Registre su producto </a>
                        </li>
                     
                        <li><a tabindex="903" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="1000095" href="https://h20212.www2.hp.com/Cso_Status/CsoStatus.aspx?lc=es&cc=ar" target="_self">Comprobar el estado de la reparación </a>
                        </li>
                     
                  </ul>
               </div>
            
            
            	<div class="footer_links_list_container" id="id_4">
                  <a tabindex="904" class="ul_site_link_header link_metrics" data-link-id="1000098" href="javascript:void(0);" role="button" aria-expanded="false"> <span class="accordion-header">HP Partners</span> <span class="accordian_arrow_icon"> 
                  </span>
                  </a>
                  <ul class="tab_list">
                     <li class="first_li"><span class="no-underline"> <a tabindex="-1" data-link-id="1000098" class="link_metrics column_no_link no_link link_metrics" target="_self">HP Partners</a>
                        </span>
                     </li>
                     
                     
                        <li><a tabindex="904" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="10000100" href="https://partner.hp.com/login" target="_self">Portal HP Partner First </a>
                        </li>
                     
                        <li><a tabindex="904" class="link_metrics no-outline link_metrics" data-link-type="e_linkClick" data-link-id="10000101" href="https://developers.hp.com/" target="_self">Desarrolladores </a>
                        </li>
                     
                  </ul>
               </div>
            
           
           
            <div class="WprColumnSingle"> <!-- This makes social media icons and signup come in one coloum -->
            
               <div class="footer_links_list_container" id="id_5">
                  <a tabindex="905" class="ul_site_link_header link_metrics" href="javascript:void(0);" role="button" aria-expanded="false"> <span class="accordion-header">Permanezca conectado</span> <span class="accordian_arrow_icon">
                  </span>
                  </a>
                  <ul class="tab_list">
                     <li class="first_li"><span class="no-underline"> <a tabindex="-1" class="link_metrics column_no_link link_metrics" target="_self">Permanezca conectado</a>
                        </span>
                     </li>
                     
                     
                     
                        <style>
                        
                        .footer_links_container_wrapper .ul_media_links .aem-facebook:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/facebook.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-hp-logo:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/hp-logo.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-hpcommunities:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/hpcommunities.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-instagram:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/instagram.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-line:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/line.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-linkedin:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/linkedin.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-talk:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/talk.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-tiktok:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/tiktok.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-twitter:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/twitter.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-vk:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/vk.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-wechat:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/wechat.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-weibo:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/weibo.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-x:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/x.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-youku:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/youku.svg) center center no-repeat;
                              }
                              
                        .footer_links_container_wrapper .ul_media_links .aem-youtube:before{
                              content: '';
                              background: url(//www.hp.com/content/dam/sites/worldwide/dems/global_nav_icons/youtube.svg) center center no-repeat;
                              }
                              

                              @media (max-width: 1279.98px){
                                 
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-facebook] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-hp-logo] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-hpcommunities] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-instagram] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-line] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-linkedin] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-talk] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-tiktok] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-twitter] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-vk] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-wechat] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-weibo] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-x] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-youku] {
                                    filter: invert(1);
                                 }
                              
                                 .footer_links_container_wrapper .ul_media_links li a[class*=aem-youtube] {
                                    filter: invert(1);
                                 }
                              
                                 
                              }

                              
                        </style>
                     

                     <li>
	                     
							<ul class="ul_media_links">
								<li><a tabindex="906" href="https://www.facebook.com/HPArgentina" class="aem-facebook link_metrics" target="_self" data-link-type="e_linkClick" data-link-id="1000103"> </a></li>
							
								<li><a tabindex="906" href="https://www.instagram.com/hp/" class="aem-instagram link_metrics" rel="noopener noreferrer" target="_blank" data-link-type="e_linkClick" data-link-id="1001001" aria-label="Instagram"> </a></li>
							
								<li><a tabindex="906" href="http://twitter.com/HPArgentina" class="aem-twitter link_metrics" target="_self" data-link-type="e_linkClick" data-link-id="1000105"> </a></li>
							
								<li><a tabindex="906" href="http://www.youtube.com/hp" class="aem-youtube link_metrics" target="_self" data-link-type="e_linkClick" data-link-id="1000106"> </a></li>
							</ul>
						
					</li>
                  </ul>
               </div>
               
            
            </div>
            </div>
            
            <!-- Footer Links Close -->
            <div class="footer_privacy_block">
               <ul class="footer_privacy_links">
                  
                     <li><a tabindex="909" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000065" href="https://www.hp.com/ar-es/hp-information/recalls.html" target="_self">Retiro de productos</a><span class="horizontal_sep">|</span></li>
                  
                     <li><a tabindex="909" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000066" href="https://www.hp.com/mx-es/hp-information/sustainable-impact/planet-product-recycling.html#filters_product_recycling=region-south_america|country-argentina" target="_self">Reciclaje de productos</a><span class="horizontal_sep">|</span></li>
                  
                     <li><a tabindex="909" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000067" href="https://www.hp.com/us-en/hp-information/accessibility-aging.html" target="_self">Accesibilidad</a><span class="horizontal_sep">|</span></li>
                  
                     <li><a tabindex="909" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000070" href="http://www.hp.com/ar-es/privacy/privacy-central.html" target="_self">Privacidad</a><span class="horizontal_sep">|</span></li>
                  
                     <li><a tabindex="909" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000073" href="https://www.hp.com/ar-es/terms-of-use.html" target="_self">Términos de uso</a><span class="horizontal_sep">|</span></li>
                  
                     <li><a tabindex="909" class="link_metrics" data-link-type="e_linkClick" data-link-id="1000071" href="https://www.hp.com/ar-es/privacy/use-of-cookies.html" target="_self">Opciones de cookies y publicidad</a><span class="horizontal_sep">|</span></li>
                  
               </ul>
               <div class="copy-right-section">
                  <p class="copyright_mark">©2024 HP Development Company, L.P. La información que contiene este documento está sujeta a cambios sin previo aviso. </p>
                  <p class="mobile_view"></p>
               </div>
            </div>
         </div>
      </div>
   
   <!-- Data Timestamp 06-01-2024 01:36:41 -->

   </div>
   
   




      <meta name="hp_inav_version" content="ihfcaas.5.r"/>
      
      
      		
      
      		
      
      		
            
            
            
            
            
            
            
            
                  <script type="text/javascript" src="https://www8.hp.com/etc.clientlibs/HPIT-AEM-GLOBALNAV/clientlibs-globalnav/clientlib-hf-js.c437dde4ac1e6b85d1da8b2da6621a18.js" xml:space="preserve"></script>
            

      <!-- Data Timestamp head-script 06-01-2024 01:36:42 -->

   
   
</section>
        </div>
      </div>
      <hp-modal class="js-hp-component modal fade iframe-modal" role="dialog" tabindex="-1" aria-describedby="modal-body" aria-modal="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <button type="button" class="c-icon close" data-icon="close-modal/light" data-dismiss="modal" aria-label="close">
                <span class="c-icon-regular-state">
                    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMinYMin">
                        <use xlink:href="#img-close-icon-light"></use>
                    </svg>
                </span>
                <span class="c-icon-hover-state">
                    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMinYMin">
                        <use xlink:href="#img-close-icon-light-hover"></use>
                    </svg>
                </span>
            </button>
            <div class="modal-body" tabindex="0" id="modal-body">
                <div class="loader loader--blue"></div>
                <iframe width="100%" height="100%" id="iframe-container">
                    <p>Your browser does not support iframes.</p>
                </iframe>
            </div>
        </div>
    </div>
</hp-modal>
      <svg display="none"><defs><g id="chevron-bg-1-left"><rect width="100%" height="100%" fill="#f6f6f6" rx="15"/><path fill="#767676" d="M-371 2074.89a1 1 0 0 0 .514-.143 1 1 0 0 0 .342-1.372l-2.691-4.485 2.691-4.486a1 1 0 0 0-.342-1.372 1 1 0 0 0-1.372.343l-3 5a1 1 0 0 0 0 1.029l3 5a1 1 0 0 0 .858.486z" transform="translate(387 -2053.887)"/></g><g id="chevron-bg-1-left-hover"><rect width="100%" height="100%" fill="rgba(163,163,163,0.4)" rx="15"/><path fill="#000" d="M-371 2074.89a1 1 0 0 0 .514-.143 1 1 0 0 0 .342-1.372l-2.691-4.485 2.691-4.486a1 1 0 0 0-.342-1.372 1 1 0 0 0-1.372.343l-3 5a1 1 0 0 0 0 1.029l3 5a1 1 0 0 0 .858.486z" transform="translate(387 -2053.887)"/></g><g id="chevron-bg-2-left"><rect width="100%" height="100%" fill="rgba(0,0,0,0.4)" rx="15"/><path fill="#fff" d="M-371 2074.89a1 1 0 0 0 .514-.143 1 1 0 0 0 .342-1.372l-2.691-4.485 2.691-4.486a1 1 0 0 0-.342-1.372 1 1 0 0 0-1.372.343l-3 5a1 1 0 0 0 0 1.029l3 5a1 1 0 0 0 .858.486z" transform="translate(387 -2053.887)"/></g><g id="chevron-bg-2-left-hover"><rect width="100%" height="100%" fill="rgba(0,0,0,0.6)" rx="15"/><path fill="#fff" d="M-371 2074.89a1 1 0 0 0 .514-.143 1 1 0 0 0 .342-1.372l-2.691-4.485 2.691-4.486a1 1 0 0 0-.342-1.372 1 1 0 0 0-1.372.343l-3 5a1 1 0 0 0 0 1.029l3 5a1 1 0 0 0 .858.486z" transform="translate(387 -2053.887)"/></g><g id="chevron-bg-3-left"><rect width="100%" height="100%" fill="rgba(255,255,255,0.4)" rx="15"/><path fill="#fff" d="M-371 2074.89a1 1 0 0 0 .514-.143 1 1 0 0 0 .342-1.372l-2.691-4.485 2.691-4.486a1 1 0 0 0-.342-1.372 1 1 0 0 0-1.372.343l-3 5a1 1 0 0 0 0 1.029l3 5a1 1 0 0 0 .858.486z" transform="translate(387 -2053.887)"/></g><g id="chevron-bg-3-left-hover"><rect width="100%" height="100%" fill="rgba(255,255,255,0.6)" rx="15"/><path fill="#fff" d="M-371 2074.89a1 1 0 0 0 .514-.143 1 1 0 0 0 .342-1.372l-2.691-4.485 2.691-4.486a1 1 0 0 0-.342-1.372 1 1 0 0 0-1.372.343l-3 5a1 1 0 0 0 0 1.029l3 5a1 1 0 0 0 .858.486z" transform="translate(387 -2053.887)"/></g><g id="chevron-1"><g transform="translate(-1590 -2804)"><path fill="#165DBA" d="M7 1052.89a1 1 0 0 1-.856-1.515l5.691-9.485-5.692-9.49a1 1 0 1 1 1.714-1.029l6 10a1 1 0 0 1 0 1.029l-6 10a1 1 0 0 1-.857.49z" transform="translate(1601 1783)"></path></g><g><rect width="100%" height="100%" fill="rgba(0,0,0,0.05)" rx="20"/></g></g><g id="chevron-1-hover"><g transform="translate(-1590 -2804)"><path fill="#1967b1" d="M7 1052.89a1 1 0 0 1-.856-1.515l5.691-9.485-5.692-9.49a1 1 0 1 1 1.714-1.029l6 10a1 1 0 0 1 0 1.029l-6 10a1 1 0 0 1-.857.49z" transform="translate(1601 1783)"></path></g><g><rect width="100%" height="100%" fill="rgba(0,0,0,0.05)" rx="20"/></g></g><g id="chevron-2"><path d="m7.601 21 2.4-1.8-6.3-8.7 6.3-8.709-2.4-1.795-7.6 10.5.65.9z"/></g><g id="chevron-2-hover"><path d="m7.601 21 2.4-1.8-6.3-8.7 6.3-8.709-2.4-1.795-7.6 10.5.65.9z"/></g><g id="chevron-3"><path d="m7.601 21 2.4-1.8-6.3-8.7 6.3-8.709-2.4-1.795-7.6 10.5.65.9z" fill="#fff"/></g><g id="chevron-3-hover"><path d="m7.601 21 2.4-1.8-6.3-8.7 6.3-8.709-2.4-1.795-7.6 10.5.65.9z" fill="#fff"/></g><g id="img-arrow-dark-down" transform="rotate(90 1334.5 859.5)"><rect width="100%" height="100%" fill="rgba(0,0,0,0.3)" rx="15" transform="translate(475 2164)"/><path fill="#fff" d="M-374 2074.89a1 1 0 0 1-.514-.143 1 1 0 0 1-.342-1.372l2.691-4.485-2.691-4.486a1 1 0 0 1 .342-1.372 1 1 0 0 1 1.372.343l3 5a1 1 0 0 1 0 1.029l-3 5a1 1 0 0 1-.858.486z" transform="translate(863 110.113)"/></g><g id="img-arrow-dark-down-hover" transform="rotate(90 1334.5 859.5)"><rect width="100%" height="100%" fill="rgba(0,0,0,0.4)" rx="15" transform="translate(475 2164)"/><path fill="#fff" d="M-374 2074.89a1 1 0 0 1-.514-.143 1 1 0 0 1-.342-1.372l2.691-4.485-2.691-4.486a1 1 0 0 1 .342-1.372 1 1 0 0 1 1.372.343l3 5a1 1 0 0 1 0 1.029l-3 5a1 1 0 0 1-.858.486z" transform="translate(863 110.113)"/></g><g id="img-arrow-3-down" transform="rotate(90 1334.5 859.5)"><rect width="100%" height="100%" fill="rgba(255,255,255,0.2)" rx="15" transform="translate(475 2164)"/><path fill="#fff" d="M-374 2074.89a1 1 0 0 1-.514-.143 1 1 0 0 1-.342-1.372l2.691-4.485-2.691-4.486a1 1 0 0 1 .342-1.372 1 1 0 0 1 1.372.343l3 5a1 1 0 0 1 0 1.029l-3 5a1 1 0 0 1-.858.486z" transform="translate(863 110.113)"/></g><g id="img-arrow-3-down-hover" transform="rotate(90 1334.5 859.5)"><rect width="100%" height="100%" fill="rgba(255,255,255,0.4)" rx="15" transform="translate(475 2164)"/><path fill="#fff" d="M-374 2074.89a1 1 0 0 1-.514-.143 1 1 0 0 1-.342-1.372l2.691-4.485-2.691-4.486a1 1 0 0 1 .342-1.372 1 1 0 0 1 1.372.343l3 5a1 1 0 0 1 0 1.029l-3 5a1 1 0 0 1-.858.486z" transform="translate(863 110.113)"/></g><g id="img-arrow-light-down" transform="rotate(90 1334.5 859.5)"><rect width="100%" height="100%" fill="#f6f6f6" rx="15" transform="translate(475 2164)"/><path fill="#767676" d="M-374 2074.89a1 1 0 0 1-.514-.143 1 1 0 0 1-.342-1.372l2.691-4.485-2.691-4.486a1 1 0 0 1 .342-1.372 1 1 0 0 1 1.372.343l3 5a1 1 0 0 1 0 1.029l-3 5a1 1 0 0 1-.858.486z" transform="translate(863 110.113)"/></g><g id="img-arrow-light-down-hover" transform="rotate(90 1334.5 859.5)"><rect width="100%" height="100%" fill="rgba(163, 163, 163, 0.4)" rx="15" transform="translate(475 2164)"/><path fill="#000" d="M-374 2074.89a1 1 0 0 1-.514-.143 1 1 0 0 1-.342-1.372l2.691-4.485-2.691-4.486a1 1 0 0 1 .342-1.372 1 1 0 0 1 1.372.343l3 5a1 1 0 0 1 0 1.029l-3 5a1 1 0 0 1-.858.486z" transform="translate(863 110.113)"/></g><g id="arrow-right"><path d="m455.465 769.707-1.847-.974 3.478-5.054-3.475-4.989 1.841-.983 4.156 5.966z" transform="translate(-453.618 -757.707)"></path></g><g id="indicator-dark"><path fill="#165DBA" d="M4 0h52a4 4 0 0 1 4 4H0a4 4 0 0 1 4-4z"/></g><g id="indicator-light"><path fill="#fff" d="M4 0h52a4 4 0 0 1 4 4H0a4 4 0 0 1 4-4z"/></g><g id="img-close-icon-dark"><path transform="translate(0 .002)" style="fill:rgba(0,0,0,.4)" d="M0 0h30v30H0z"/><path d="M21715 22391h-30v-30h30v30zm-29-29v28h28v-28h-28z" transform="translate(-21685 -22360.998)" style="fill:#fff"/><path d="m21668.006 22186.668-5.334 5.328-.668-.668 5.334-5.332-5.334-5.332.668-.668 5.334 5.332 5.33-5.328.668.668-5.33 5.328 5.33 5.332-.668.668z" transform="translate(-21653.002 -22170.996)" style="fill:#fff"/></g><g id="img-close-icon-dark-hover"><path transform="translate(0 .002)" style="fill:rgba(0,0,0,.6)" d="M0 0h30v30H0z"/><path d="M21715 22391h-30v-30h30v30zm-29-29v28h28v-28h-28z" transform="translate(-21685 -22360.998)" style="fill:#fff"/><path d="m21668.006 22186.668-5.334 5.328-.668-.668 5.334-5.332-5.334-5.332.668-.668 5.334 5.332 5.33-5.328.668.668-5.33 5.328 5.33 5.332-.668.668z" transform="translate(-21653.002 -22170.996)" style="fill:#fff"/></g><g id="img-close-icon-light"><path transform="translate(0 .002)" style="fill:rgba(255,255,255,.95)" d="M0 0h30v30H0z"/><path d="M30 30.002H0v-30h30v30zm-29-29v28h28v-28H1z"/><path d="M15.002 15.672 9.668 21 9 20.332 14.334 15 9 9.668 9.668 9l5.334 5.332 5.33-5.328.668.668L15.67 15 21 20.332l-.668.668z"/></g><g id="img-close-icon-light-hover"><path transform="translate(0 .002)" style="fill:rgba(255,255,255,.9)" d="M0 0h30v30H0z"/><path d="M30 30.002H0v-30h30v30zm-29-29v28h28v-28H1z"/><path d="M15.002 15.672 9.668 21 9 20.332 14.334 15 9 9.668 9.668 9l5.334 5.332 5.33-5.328.668.668L15.67 15 21 20.332l-.668.668z"/><path data-name="close-icon" d="M15.002 15.672 9.668 21 9 20.332 14.334 15 9 9.668 9.668 9l5.334 5.332 5.33-5.328.668.668L15.67 15 21 20.332l-.668.668z"/></g><g id="img-play-btn-large-light"><path fill="rgba(0,0,0,.4)" d="M0 0h70v70H0z"/><path d="M69.995 70H0V0h69.995v69.995zM2.909 2.915V67.08h64.164V2.915z" transform="translate(.006 .004)" fill="#fff"/><path d="M1.506 26.116A1 1 0 0 1 0 25.254V1.746A1 1 0 0 1 1.506.884l20.025 11.754a1 1 0 0 1 0 1.725z" transform="translate(26 21.5)" fill="#fff"/></g><g id="img-play-btn-large-light-hover"><rect id="fill" fill="rgba(0,0,0,0.6)" width="70" height="70"/><path id="border" fill="#fff" d="M69.995,70H0V0H69.995V69.995ZM2.909,2.915V67.08H67.073V2.915Z" transform="translate(0.006 0.004)"/><path id="play-large" fill="#fff" d="M1.506,26.116A1,1,0,0,1,0,25.254V1.746A1,1,0,0,1,1.506.884L21.531,12.638a1,1,0,0,1,0,1.725Z" transform="translate(26 21.5)"/></g><g id="img-collapsible-downarrow"><path xmlns="http://www.w3.org/2000/svg" d="M0 1A1 1 0 0 1 1.515.144L6 2.834 10.485.143a1 1 0 1 1 1.029 1.714l-5 3a1 1 0 0 1-1.029 0l-5-3A1 1 0 0 1 0 1z"/></g><g id="img-warning-icon"><defs xmlns="http://www.w3.org/2000/svg"></defs><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></g><g xmlns="http://www.w3.org/2000/svg" id="slider-arrow-dark" transform="translate(-9 19.561)"><path id="Path_1" data-name="Path 1" d="M9,0H22.5" transform="translate(0.75 -12)" fill="none" stroke="#000e1f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path id="Path_2" data-name="Path 2" d="M4,17l6.5-6.5L4,4" transform="translate(12.75 -22.5)" fill="none" stroke="#000e1f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></g><g xmlns="http://www.w3.org/2000/svg" id="slider-arrow-white" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group" transform="translate(0.000000, -0.000250)" fill="#ffffff" fill-rule="nonzero"><path d="M14.25,7.99975 L0.75,7.99975 C0.336,7.99975 0,7.66475 0,7.24975 C0,6.83575 0.336,6.49975 0.75,6.49975 L14.25,6.49975 C14.664,6.49975 15,6.83575 15,7.24975 C15,7.66475 14.664,7.99975 14.25,7.99975" id="Fill-1"/><path d="M7.75,14.50075 C7.558,14.50075 7.366,14.42775 7.22,14.28075 C6.927,13.98775 6.927,13.51375 7.22,13.22075 L13.189,7.25075 L7.22,1.28075 C6.927,0.98775 6.927,0.51275 7.22,0.21975 C7.513,-0.07325 7.987,-0.07325 8.28,0.21975 L14.78,6.71975 C15.073,7.01275 15.073,7.48775 14.78,7.78075 L8.28,14.28075 C8.134,14.42775 7.942,14.50075 7.75,14.50075" id="Fill-3"/></g></g><g id="arrow-right-blue"><path id="Chevron-1-2" fill="#187de6" d="M7 1052.89a1 1 0 0 1-.856-1.515l5.691-9.485-5.692-9.49a1 1 0 1 1 1.714-1.029l6 10a1 1 0 0 1 0 1.029l-6 10a1 1 0 0 1-.857.49z" data-name="arrow-right-blue" transform="translate(-6 -1030.889)"/></g><g id="arrow-right-white"><path id="Chevron-1-2" fill="#ffffff" d="M7 1052.89a1 1 0 0 1-.856-1.515l5.691-9.485-5.692-9.49a1 1 0 1 1 1.714-1.029l6 10a1 1 0 0 1 0 1.029l-6 10a1 1 0 0 1-.857.49z" data-name="arrow-right-white" transform="translate(-6 -1030.889)"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-chevron-bg-1-left"><path transform="translate(0 .002)" style="fill:rgba(0,0,0,.05)" d="M0 0h30v30H0z"/><path d="M30 30.002H0v-30h30v30zm-29-29v28h28v-28H1z"/><path d="m7.062 15.004 6.072-6.068.705.709-4.857 4.857h13.254v1H8.982l4.857 4.857-.705.709z"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-chevron-bg-1-left-hover"><path transform="translate(0 .002)" style="fill:rgba(0,0,0,.1)" d="M0 0h30v30H0z"/><path d="M30 30.002H0v-30h30v30zm-29-29v28h28v-28H1z"/><path d="m7.062 15.004 6.072-6.068.705.709-4.857 4.857h13.254v1H8.982l4.857 4.857-.705.709z"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-chevron-bg-2-left"><path transform="translate(0 .002)" style="fill:rgba(0,0,0,.4)" d="M0 0h30v30H0z"/><path d="M21715 22391h-30v-30h30v30zm-29-29v28h28v-28h-28z" transform="translate(-21685 -22360.998)" style="fill:#fff"/><path d="m21228 19286.07 6.072-6.072.705.709-4.854 4.857h13.25v1h-13.26l4.863 4.861-.705.709z" transform="translate(-21220.941 -19271.066)" style="fill:#fff"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-chevron-bg-2-left-hover"><path transform="translate(0 .002)" style="fill:rgba(0,0,0,.6)" d="M0 0h30v30H0z"/><path d="M21715 22391h-30v-30h30v30zm-29-29v28h28v-28h-28z" transform="translate(-21685 -22360.998)" style="fill:#fff"/><path d="m21228 19286.07 6.072-6.072.705.709-4.854 4.857h13.25v1h-13.26l4.863 4.861-.705.709z" transform="translate(-21220.941 -19271.066)" style="fill:#fff"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-chevron-bg-3-left"><path style="fill:rgba(255,255,255,.3)" d="M0 0h30.008v30.008H0z"/><path d="M21715 22391h-30v-30h30v30zm-29-29v28h28v-28h-28z" transform="translate(-21684.996 -22360.996)" style="fill:#fff"/><path d="m21228 19155.068 6.066-6.066.709.7-4.861 4.861h13.258v1h-13.264l4.867 4.861-.709.705z" transform="translate(-21220.934 -19140.064)" style="fill:#fff"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-chevron-bg-3-left-hover"><path style="fill:rgba(255,255,255,.5)" d="M0 0h30.008v30.008H0z"/><path d="M21715 22391h-30v-30h30v30zm-29-29v28h28v-28h-28z" transform="translate(-21684.996 -22360.996)" style="fill:#fff"/><path d="m21228 19155.068 6.066-6.066.709.7-4.861 4.861h13.258v1h-13.264l4.867 4.861-.709.705z" transform="translate(-21220.934 -19140.064)" style="fill:#fff"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-horizontal-arrow-1-left"><path d="M30 30.002H0v-30h30v30zm-29-29v28h28v-28H1z"/><path d="m7.062 15.002 6.072-6.068.705.709-4.863 4.863h13.26v1H8.982l4.857 4.863-.705.7z"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-horizontal-arrow-1-left-hover"><path d="M0 0h30v30H0z"/><path d="m21228 19024.068 6.072-6.068.705.709-4.863 4.863h13.26v1h-13.254l4.857 4.863-.705.7z" transform="translate(-21220.938 -19009.068)" style="fill:#fff"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-horizontal-arrow-2-left"><g style="stroke:#fff;fill:none"><path style="stroke:none" d="M0 0h30v30H0z"/><path style="fill:none" d="M.5.5h29v29H.5z"/></g><path d="m21228 18893.066 6.072-6.068.705.709-4.857 4.857h13.254v1h-13.254l4.857 4.857-.705.709z" transform="translate(-21220.938 -18878.066)" style="fill:#fff"/></g><g xmlns="http://www.w3.org/2000/svg" id="square-horizontal-arrow-2-left-hover"><g style="fill:#fff;stroke:#fff"><path style="stroke:none" d="M0 0h30v30H0z"/><path style="fill:none" d="M.5.5h29v29H.5z"/></g><path d="m7.062 15 6.072-6.068.705.709-4.857 4.857h13.254v1H8.982l4.857 4.857-.705.709z"/></g><g xmlns="http://www.w3.org/2000/svg" id="z-logo"><g fill="none" fill-rule="evenodd"><g fill="#FFF"><g><g><path d="M10 0c-.15 0-.3.005-.45.011L7.505 5.633h1.782c1.06 0 1.63.816 1.269 1.812L8.032 14.38H5.913l2.708-7.434H7.027L4.321 14.38H2.2L7.3.37C3.088 1.547 0 5.413 0 10c0 4.724 3.275 8.681 7.679 9.728l5.13-14.095h3.902c1.061 0 1.632.816 1.27 1.812l-2.218 6.09c-.169.464-.71.844-1.204.844h-2.813l-2.043 5.615c.099.003.197.006.297.006 5.523 0 10-4.478 10-10S15.523 0 10 0" transform="translate(-30.000000, -300.000000) translate(30.000000, 300.000000) translate(73.000000, 0.000000)"/><path d="M16.274 6.921L14.686 6.921 12.463 13.021 14.051 13.021z" transform="translate(-30.000000, -300.000000) translate(30.000000, 300.000000) translate(73.000000, 0.000000)"/></g><path d="M15.344.006c-.118 0-.213.095-.213.213v6.43c0 .119.095.214.213.214H36.71c1.527 0 2.293 1.846 1.213 2.925L.062 47.636c-.133.136-.039.364.152.364h66.142c.12 0 .213-.095.213-.212v-6.431c0-.117-.094-.212-.213-.212H34.702c-1.527 0-2.292-1.847-1.212-2.927L71.35.37c.134-.134.04-.364-.15-.364H15.344z" transform="translate(-30.000000, -300.000000) translate(30.000000, 300.000000)"/></g></g></g></g><g xmlns="http://www.w3.org/2000/svg" id="z-play"><g fill="none" fill-rule="evenodd"><g fill="#FFF"><g><path d="M2.071 4.814L12.071 2.899 10.156 12.899z" transform="translate(-76.000000, -132.000000) translate(74.828427, 132.000000) translate(7.071068, 7.899495) rotate(-315.000000) translate(-7.071068, -7.899495)"/></g></g></g></g><g xmlns="http://www.w3.org/2000/svg" id="z-plus"><g fill="none" fill-rule="evenodd"><g fill="#FFF"><g><path d="M7 1H9V15H7z" transform="translate(-122.000000, -132.000000) translate(122.000000, 132.000000)"/><path d="M1 7H15V9H1z" transform="translate(-122.000000, -132.000000) translate(122.000000, 132.000000)"/></g></g></g></g><g xmlns="http://www.w3.org/2000/svg" id="z-minus"><g fill="none" fill-rule="evenodd"><g fill="#FFF"><g><path d="M1 7H15V9H1z" transform="translate(-168.000000, -132.000000) translate(168.000000, 132.000000)"/></g></g></g></g><g xmlns="http://www.w3.org/2000/svg" id="z-chevron"><g fill="none" fill-rule="evenodd"><g stroke="#FFF" stroke-width="2"><g><g><path d="M10 0L9.293 9.293 0 10" transform="translate(-214.000000, -132.000000) translate(214.000000, 130.707107) translate(8.071068, 7.071068) rotate(-315.000000) translate(-8.071068, -7.071068) translate(3.071068, 2.071068)"/></g></g></g></g></g><g xmlns="http://www.w3.org/2000/svg" id="z-arrow-16"><g fill="none" fill-rule="evenodd"><g stroke-width="2"><g><g><path d="M14 0L19.247 4.664M0 7h18.673c.69 0 1.25.56 1.25 1.25 0 .36-.155.703-.427.94L14 14h0" transform="translate(-30.000000, -132.000000) translate(30.000000, 132.000000) translate(0.000000, 1.000000)"/></g></g></g></g></g><g xmlns="http://www.w3.org/2000/svg" id="z-arrow"><defs><filter id="l0iz88j6za" color-interpolation-filters="auto"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/></filter></defs><g fill="none" fill-rule="evenodd"><g><g filter="url(#l0iz88j6za)" transform="translate(-30.000000, -208.000000) translate(30.000000, 208.000000)"><g><path stroke-width="2" d="M14 0L24.495 9.329M0 14h23.346c1.381 0 2.5 1.12 2.5 2.5 0 .72-.31 1.407-.853 1.881L14 28h0" transform="translate(1.000000, 2.000000)"/></g></g></g></g></g></defs></svg>
      <div id="hp-translations-map" style="display: none">
        <span data-key="Show Next Slide">Mostrar diapositiva siguiente</span>
        <span data-key="Show Previous Slide">Mostrar diapositiva anterior</span>
        <span data-key="Go to slide %{i}">Ir a diapositiva %{i}</span>
        <span data-key="Close">Сerrar</span>
        <span data-key="Clear">Eliminar</span>
        <span data-key="Play?">Botón de reproducción</span>
      </div>
    <script type="text/javascript"  src="/P6LVa5VKe/X0v0Ww/MEm/qoBU-kKQ8/aYiQw8DJSQ1D/ChhnPnsWAg/GTRAS/htrJgUB"></script></body>



    
      
        <script src="/etc.clientlibs/hp-com/clientlibs/clientlib-core/resources/js/pl-script.4ec7a134.js" defer></script>
      

      
    
  
</html>
