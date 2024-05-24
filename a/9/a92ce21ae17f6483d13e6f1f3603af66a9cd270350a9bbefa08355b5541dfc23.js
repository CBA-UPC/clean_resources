!function(t){"use strict";f(!t.jQuery){var c=c.isWindow=c.type=c.isArray=Array.isArray||c.isPlainObject=c.each=c.data=function(e,t,r){if(void 0===r){var n=e[c.expando],i=n&&s[n];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var a=e[c.expando]||(e[c.expando]=++c.uuid);return s[a]=s[a]||{},s[a][t]=r}},c.removeData=c.extend=function(){var e,t,r,n,i,a,o=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[s]||{},s++),"object"!=typeof o&&"function"!==c.type(o)&&(o={}),s===l&&(o=this,s--);s<l;s++)if(i=arguments[s])for(n in i)i.hasOwnProperty(n)&&(e=o[n],o!==(r=i[n])&&(u&&r&&(c.isPlainObject(r)||(t=c.isArray(r)))?(a=t?(t=!1,e&&c.isArray(e)?e:[]):e&&c.isPlainObject(e)?e:{},o[n]=c.extend(u,a,r)):void 0!==r&&(o[n]=r)));return o},c.queue=function(e,t,r){if(e){t=(t||"fx")+"queue";var n=c.data(e,t);return r?(!n||c.isArray(r)?n=c.data(e,t,(a=[],(i=r)&&(o(Object(i))?a,"string"==typeof i?[i]:i):[].push.call(a,i)),a)):n.push(r),n):n||[]}var i,a},c.dequeue=c.fn=c.prototype={init:offset:position:function(){var t=this[0],e=function(){for(var e=t.offsetParent;e&&"html"!==e.nodeName.toLowerCase()&&e.style&&"static"===e.style.position.toLowerCase();)e=e.offsetParent;return e||document}(),r=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:c(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-n.top,left:r.left-n.left}}};var s={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var r={},n=r.hasOwnProperty,i=r.toString,e="Boolean Number String Function Array Date RegExp Object Error".split(" "),a=0;a<e.length;a++)r["[object "+e[a]+"]"]=e[a].toLowerCase();c.fn.init.prototype=c.fn,t.Velocity={Utilities:c}}}(window),function(){"use strict";return function(e,M,B,W){tion n(o,t,s,r){nction l(e,t,r){return((n(t,r)*e+i(t,r))*e+3*t)*e}function u(e,t,r){return 3*n(t,r)*e*e+2*i(t,r)*e+3*t}function a(e){for(var t=0,r=1,n=g-1;r!==n&&v[r]<=e;++r)t+=h;var i=t+(e-v[--r])/(v[r+1]-v[r])*h,a=u(i,o,s);return.001<=a?e,i):0===a?i:e,t,t+h)}ar d=4,p=1e-7,f=10,g=11,h=1/(g-1),e="Float32Array"in M;if(4!==arguments.length)return!1;for(var m=0;m<4;++m)if("number"!=typeof arguments[m]||isNaN(arguments[m])||!isFinite(arguments[m]))return!1;o=Math.min(o,1),s=Math.min(s,1),o=Math.max(o,0),s=Math.max(s,0);ar v=new(e?Float32Array:Array)(g),b=!1;y.getControlPoints=var x="generateBezier("+[o,t,s,r]+")";return y.toString=y}unction U(e){if(e){var t=Y.timestamp&&!0!==e?e:A.now(),r=Y.State.calls.length;1e4<r&&(Y.State.calls=Y.State.calls),r=Y.State.calls.length);for(var n=0;n<r;n++)if(Y.State.calls[n]){var i=Y.State.calls[n],a=i[0],o=i[2],s=!(d=i[3]),l=null,u=i[5],c=i[6],d=d||(Y.State.calls[n][3]=t-16);if(u){if(!0!==u.resume)continue;d=i[3]=Math.round(t-c-16),i[5]=null}c=i[6]=t-d;for(var p=Math.min(c/o.duration,1),f=0,g=a.length;f<g;f++){var h=a[f],m=h.element;if($(m)){var y=!1;for(var v in o.display!==W&&null!==o.display&&"none"!==o.display&&("flex"===o.display&&X.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],,Z.setPropertyValue(m,"display",o.display)),o.visibility!==W&&"hidden"!==o.visibility&&Z.setPropertyValue(m,"visibility",o.visibility),h)if(h.hasOwnProperty(v)&&"element"!==v){var b,x,w,S,P,k,V=h[v],T=Q.isString(V.easing)?Y.Easings[V.easing]:V.easing;if(x=Q.isString(V.pattern)?(b=1===p?V.pattern.replace(/{(\d+)(!)?}/g,b)):1===p?V.endValue:(w=V.endValue-V.startValue,V.startValue+w*T(p,o,w)),!s&&x===V.currentValue)continue;V.currentValue=x,"tween"===v?l=x:(Z.Hooks.registered[v]&&(S=Z.Hooks.getRoot(v),(P=$(m).rootPropertyValueCache[S])&&(V.rootPropertyValue=P)),k=Z.setPropertyValue(m,v,V.currentValue+(C<9&&0===parseFloat(x)?"":V.unitType),V.rootPropertyValue,V.scrollData),Z.Hooks.registered[v]&&(Z.Normalizations.registered[S]?$(m).rootPropertyValueCache[S]=Z.Normalizations.registered[S]("extract",null,k[1]):$(m).rootPropertyValueCache[S]=k[1]),"transform"===k[0]&&(y=!0))}o.mobileHA&&$(m).transformCache.translate3d===W&&($(m).transformCache.translate3d="(0px, 0px, 0px)",y=!0),y&&Z.flushTransformCache(m)}}o.display!==W&&"none"!==o.display&&(Y.State.calls[n][2].display=!1),o.visibility!==W&&"hidden"!==o.visibility&&(Y.State.calls[n][2].visibility=!1),o.progress&&o.progress.call(i[1],i[1],p,Math.max(0,d+o.duration-t),d,l),1===p&&N(n)}}Y.State.isTicking&&E(U)}function N(e,t){if(Y.State.calls[e]){for(var r=Y.State.calls[e][0],n=Y.State.calls[e][1],i=Y.State.calls[e][2],a=Y.State.calls[e][4],o=!1,s=0,l=r.length;s<l;s++){var u=r[s].element;t||i.loop||("none"===i.display&&Z.setPropertyValue(u,"display",i.display),"hidden"===i.visibility&&Z.setPropertyValue(u,"visibility",i.visibility));var c,d=$(u);if(!0===i.loop||X.queue(u)[1]!==W&&/\.velocityQueueEntryFlag/i.test(X.queue(u)[1])||!d||(d.isAnimating=!1,c=!(d.rootPropertyValueCache={}),X.each(Z.Lists.transforms3D,,i.mobileHA&&(c=!0,delete d.transformCache.translate3d),c&&Z.flushTransformCache(u),Z.Values.removeClass(u,"velocity-animating")),!t&&i.complete&&!i.loop&&s===l-1)try{i.complete.call(n,n)}catch(e){setTimeout(function(){throw e},1)}a&&!0!==i.loop&&a(n),d&&!0===i.loop&&!t&&(X.each(d.tweensContainer,function(e,t){var r;/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360==0&&(r=t.startValue,t.startValue=t.endValue,t.endValue=r),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),Y(u,"reverse",{loop:!0,delay:i.delay})),!1!==i.queue&&X.dequeue(u,i.queue)}Y.State.calls[e]=!1;for(var p=0,f=Y.State.calls.length;p<f;p++)if(!1!==Y.State.calls[p]){o=!0;break}!1===o&&(Y.State.isTicking=!1,delete Y.State.calls,Y.State.calls=[])}}function G(){return Array.prototype.includes?Array.prototype.indexOf?var X,t,r,i,C=),a=(i=0,M.webkitRequestAnimationFrame||M.mozRequestAnimationFrame||,A=("function"!=typeof(r=M.performance||{}).now&&(t=r.timing&&r.timing.navigationStart?r.timing.navigationStart:(new Date).getTime(),r.now=,r),o=),Q={isNumber:function(e){return"number"==typeof e},isString:isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:isNode:isWrapped:isSVG:isEmptyObject:,s=!1;if(e.fn&&e.fn.jquery?(X=e,s=!0):X=M.Velocity.Utilities,C<=8&&!s)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(C<=7)){var l="swing",Y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(M.navigator.userAgent),isAndroid:/Android/i.test(M.navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(M.navigator.userAgent),isChrome:M.chrome,isFirefox:/Firefox/i.test(M.navigator.userAgent),prefixElement:B.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:X,Redirects:{},Easings:{},Promise:M.Promise,defaults:{queue:"",duration:400,easing:l,begin:W,complete:W,progress:W,display:W,visibility:W,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:hook:null,mock:!1,version:{major:1,minor:5,patch:2},debug:!1,timestamp:!0,pauseAll:resumeAll:;M.pageYOffset!==W?(Y.State.scrollAnchor=M,Y.State.scrollPropertyLeft="pageXOffset",Y.State.scrollPropertyTop="pageYOffset"):(Y.State.scrollAnchor=B.documentElement||B.body.parentNode||B.body,Y.State.scrollPropertyLeft="scrollLeft",Y.State.scrollPropertyTop="scrollTop");var u=function e(t,r,n){var i,a,o,s,l,u,c,d,p,f,g,h={x:-1,v:0,tension:null,friction:null},m=[0],y=0;for(t=parseFloat(t)||500,r=parseFloat(r)||20,n=n||null,h.tension=t,h.friction=r,a=(i=null!==n)?(y=e(t,r))/n*.016:.016;l=a,u={dx:(s=o||h).v,dv:x(s)},c=w(s,.5*l,u),d=w(s,.5*l,c),p=w(s,l,d),f=1/6*(u.dx+2*(c.dx+d.dx)+p.dx),g=1/6*(u.dv+2*(c.dv+d.dv)+p.dv),s.x=s.x+f*l,s.v=s.v+g*l,o=s,m.push(1+o.x),y+=16,1e-4<Math.abs(o.x)&&1e-4<Math.abs(o.v););return i?y};Y.Easings={linear:swing:spring:,X.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],;var Z=Y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e,t,r,n,i,a=0;a<Z.Lists.colors.length;a++){var o="color"===Z.Lists.colors[a]?"0 0 0 1":"255 255 255 1";Z.Hooks.templates[Z.Lists.colors[a]]=["Red Green Blue Alpha",o]}if(C)for(e in Z.Hooks.templates){Z.Hooks.templates.hasOwnProperty(e)&&(r=(t=Z.Hooks.templates[e])[0].split(" "),n=t[1].match(Z.RegEx.valueSplit),"Color"===r[0]&&(r.push(r.shift()),n.push(n.shift()),Z.Hooks.templates[e]=[r.join(" "),n.join(" ")]))}for(e in Z.Hooks.templates)if(Z.Hooks.templates.hasOwnProperty(e))for(var s in r=(t=Z.Hooks.templates[e])[0].split(" ")){r.hasOwnProperty(s)&&(i=e+r[s],Z.Hooks.registered[i]=[e,s])}},getRoot:getUnit:fixColors:cleanRootPropertyValue:extractValue:injectValue:,Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var n=Z.RegEx.wrappedValueAlreadyExtracted.test(r)?r:(n=r.toString().match(Z.RegEx.valueUnwrap))?n[1].replace(/,(\s+)?/g," "):r;return n;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return Y.State.isFirefox?"filter":"-webkit-filter";case"extract":var n,i=parseFloat(r);return i||0===i||(i=(n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i))?n[1]:0),i;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:,register:function(){function a(e,t,r){if("border-box"===Z.getPropertyValue(t,"boxSizing").toString().toLowerCase()!==(r||!1))return 0;for(var n,i=0,a="width"===e?["Left","Right"]:["Top","Bottom"],o=["padding"+a[0],"padding"+a[1],"border"+a[0]+"Width","border"+a[1]+"Width"],s=0;s<o.length;s++)n=parseFloat(Z.getPropertyValue(t,o[s])),isNaN(n)||(i+=n);return r?-i:i}&&!(9<C)||Y.State.isGingerbread||(Z.Lists.transformsBase=Z.Lists.transformsBase.concat(Z.Lists.transforms3D));for(var t=0;t<Z.Lists.transformsBase.length;t++)!);for(var r=0;r<Z.Lists.colors.length;r++)!function(){var o=Z.Lists.colors[r];Z.Normalizations.registered[o]=function(e,t,r){switch(e){case"name":return o;case"extract":var n,i,a=Z.RegEx.wrappedValueAlreadyExtracted.test(r)?r:(i={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"},/^[A-z]+$/i.test(r)?n=i[r]!==W?i[r]:i.black:Z.RegEx.isHex.test(r)?n="rgb("+Z.Values.hexToRgb(r).join(" ")+")":/^rgba?\(/i.test(r)||(n=i.black),(n||r).toString().match(Z.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," "));return(!C||8<C)&&3===a.split(" ").length&&(a+=" 1"),a;case"inject":return/^rgb/.test(r)?r:(C<=8?4===r.split(" ").length&&(r=r.split(/\s+/).slice(0,3).join(" ")):3===r.split(" ").length&&(r+=" 1"),(C<=8?"rgb":"rgba")+"("+r.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();Z.Normalizations.registered.innerWidth=e("width",!0),Z.Normalizations.registered.innerHeight=e("height",!0),Z.Normalizations.registered.outerWidth=e("width"),Z.Normalizations.registered.outerHeight=e("height")}},Names:{camelCase:SVGAttribute:prefixCheck:,Values:{hexToRgb:isCSSNullValue:getUnitType:getDisplayType:addClass:function(e,t){var r;e&&(e.classList?e.classList.add(t):Q.isString(e.className)?e.className+=(e.className.length?" ":"")+t:(r=e.getAttribute(C<=7?"className":"class")||"",e.setAttribute("class",r+(r?" ":"")+t)))},removeClass:function(e,t){var r;e&&(e.classList?e.classList.remove(t):Q.isString(e.className)?e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," "):(r=e.getAttribute(C<=7?"className":"class")||"",e.setAttribute("class",r.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))))}},getPropertyValue:function(e,t,r,u){function c(e,t){var r,n=0;if(C<=8)n=X.css(e,t);else{var i=!1;/^(width|height)$/.test(t)&&0===Z.getPropertyValue(e,"display")&&(i=!0,Z.setPropertyValue(e,"display",Z.Values.getDisplayType(e)));var a,o=if(!u){if("height"===t&&"border-box"!==Z.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var s=e.offsetHeight-(parseFloat(Z.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(Z.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(Z.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(Z.getPropertyValue(e,"paddingBottom"))||0);return o(),s}if("width"===t&&"border-box"!==Z.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var l=e.offsetWidth-(parseFloat(Z.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(Z.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(Z.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(Z.getPropertyValue(e,"paddingRight"))||0);return o(),l}}a=$(e)===W?M.getComputedStyle(e,null):$(e).computedStyle?$(e).computedStyle:$(e).computedStyle=M.getComputedStyle(e,null),"borderColor"===t&&(t="borderTopColor"),""!==(n=9===C&&"filter"===t?a.getPropertyValue(t):a[t])&&null!==n||(n=e.style[t]),o()}return"auto"!==n||!/^(top|right|bottom|left)$/i.test(t)||("fixed"===(r=c(e,"position"))||"absolute"===r&&/top|left/i.test(t))&&(n=X(e).position()[t]+"px"),n}var n,i,a,o,s;if(Z.Hooks.registered[t]?(i=t,a=Z.Hooks.getRoot(i),r===W&&(r=Z.getPropertyValue(e,Z.Names.prefixCheck(a)[0])),Z.Normalizations.registered[a]&&(r=Z.Normalizations.registered[a]("extract",e,r)),n=Z.Hooks.extractValue(i,r)):Z.Normalizations.registered[t]&&("transform"!==(s=Z.Normalizations.registered[t]("name",e))&&(o=c(e,Z.Names.prefixCheck(s)[0]),Z.Values.isCSSNullValue(o)&&Z.Hooks.templates[t]&&(o=Z.Hooks.templates[t][1])),n=Z.Normalizations.registered[t]("extract",e,o)),!/^[\d-]/.test(n)){var l=$(e);if(l&&l.isSVG&&Z.Names.SVGAttribute(t))if(/^(height|width)$/i.test(t))try{n=e.getBBox()[t]}catch(e){n=0}else n=e.getAttribute(t);else n=c(e,Z.Names.prefixCheck(t)[0])}return Z.Values.isCSSNullValue(n)&&(n=0),2<=Y.debug&&console.log("Get "+t+": "+n),n},setPropertyValue:function(e,t,r,n,i){var a,o,s=t;if("scroll"===t)i.container?i.container["scroll"+i.direction]=r:"Left"===i.direction?M.scrollTo(r,i.alternateValue):M.scrollTo(i.alternateValue,r);else if(Z.Normalizations.registered[t]&&"transform"===Z.Normalizations.registered[t]("name",e))Z.Normalizations.registered[t]("inject",e,r),s="transform",r=$(e).transformCache[t];else{if(Z.Hooks.registered[t]&&(a=t,o=Z.Hooks.getRoot(t),n=n||Z.getPropertyValue(e,o),r=Z.Hooks.injectValue(a,r,n),t=o),Z.Normalizations.registered[t]&&(r=Z.Normalizations.registered[t]("inject",e,r),t=Z.Normalizations.registered[t]("name",e)),s=Z.Names.prefixCheck(t)[0],C<=8)try{e.style[s]=r}catch(e){Y.debug&&console.log("Browser does not support ["+r+"] for ["+s+"]")}else{var l=$(e);l&&l.isSVG&&Z.Names.SVGAttribute(t)?e.setAttribute(t,r):e.style[s]=r}2<=Y.debug&&console.log("Set "+t+" ("+s+"): "+r)}return[s,r]},flushTransformCache:function(t){var e,r,n,i,a="",o=$(t);(C||Y.State.isAndroid&&!Y.State.isChrome)&&o&&o.isSVG?(r={translate:[(e=("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]},X.each($(t).transformCache,):(X.each($(t).transformCache,,i&&(a="perspective"+i+" "+a)),Z.setPropertyValue(t,"transform",a)}};Z.Hooks.register(),Z.Normalizations.register(),Y.hook=function(e,n,i){var a;return e=m(e),X.each(e,function(e,t){var r;$(t)===W&&Y.init(t),i===W?a===W&&(a=Z.getPropertyValue(t,n)):("transform"===(r=Z.setPropertyValue(t,n,i))[0]&&Y.CSS.flushTransformCache(t),a=r)}),a};var b=function(){unction r(H,k){function r(e){var N,L,t,r,n,i,a;if(R.begin&&0===F)try{R.begin.call(V,V)}catch(e){setTimeout(1)}if("scroll"===A){var o,s,l,u=/^x$/i.test(R.axis)?"Left":"Top",c=parseFloat(R.offset)||0;R.container?Q.isWrapped(R.container)||Q.isNode(R.container)?(R.container=R.container[0]||R.container,l=(o=R.container["scroll"+u])+X(H).position()[u.toLowerCase()]+c):R.container=null:(o=Y.State.scrollAnchor[Y.State["scrollProperty"+u]],s=Y.State.scrollAnchor[Y.State["scrollProperty"+("Left"===u?"Top":"Left")]],l=X(H).offset()[u.toLowerCase()]+c),z={scroll:{rootPropertyValue:!1,startValue:o,currentValue:o,endValue:l,unitType:"",easing:R.easing,scrollData:{container:R.container,direction:u,alternateValue:s}},element:H},Y.debug&&console.log("tweensContainer (scroll): ",z.scroll,H)}else if("reverse"===A){if(!(N=$(H)))return;if(!N.tweensContainer)return void X.dequeue(H,R.queue);for(var d in"none"===N.opts.display&&(N.opts.display="auto"),"hidden"===N.opts.visibility&&(N.opts.visibility="visible"),N.opts.loop=!1,N.opts.begin=null,N.opts.complete=null,j.easing||delete R.easing,j.duration||delete R.duration,R=X.extend({},N.opts,R),L=X.extend(!0,{},N?N.tweensContainer:null)){L.hasOwnProperty(d)&&"element"!==d&&(t=L[d].startValue,L[d].startValue=L[d].currentValue=L[d].endValue,L[d].endValue=t,Q.isEmptyObject(j)||(L[d].easing=R.easing),Y.debug&&console.log("reverse tweensContainer ("+d+"): "+JSON.stringify(L[d]),H))}z=L}else if("start"===A){(N=$(H))&&N.tweensContainer&&!0===N.isAnimating&&(L=N.tweensContainer);var p=function(e,t){var r,n=Z.Hooks.getRoot(e),i=!1,a=t[0],o=t[1],s=t[2];if(N&&N.isSVG||"tween"===n||!1!==Z.Names.prefixCheck(n)[1]||Z.Normalizations.registered[n]!==W){(R.display!==W&&null!==R.display&&"none"!==R.display||R.visibility!==W&&"hidden"!==R.visibility)&&/opacity|filter/.test(e)&&!s&&0!==a&&(s=0),R._cacheValues&&L&&L[e]?(s===W&&(s=L[e].endValue+L[e].unitType),i=N.rootPropertyValueCache[n]):Z.Hooks.registered[e]?s===W?(i=Z.getPropertyValue(H,n),s=Z.getPropertyValue(H,e,i)):i=Z.Hooks.templates[n][1]:s===W&&(s=Z.getPropertyValue(H,e));var l,u,c,d=!1,p=function(e,t){var r=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,,n=n||Z.Values.getUnitType(e);return[r,n]};if(s!==a&&Q.isString(s)&&Q.isString(a)){r="";for(var f=0,g=0,h=[],m=[],y=0,v=0,b=0,s=Z.Hooks.fixColors(s),a=Z.Hooks.fixColors(a);f<s.length&&g<a.length;){var x=s[f],w=a[g];if(/[\d\.-]/.test(x)&&/[\d\.-]/.test(w)){for(var S=x,P=w,k=".",V=".";++f<s.length;){if((x=s[f])===k)k="..";else if(!/\d/.test(x))break;S+=x}for(;++g<a.length;){if((w=a[g])===V)V="..";else if(!/\d/.test(w))break;P+=w}var T,C,A=Z.Hooks.getUnit(s,f),E=Z.Hooks.getUnit(a,g);f+=A.length,g+=E.length,A===E?S===P?r+=S+A:(r+="{"+h.length+(v?"!":"")+"}"+A,h.push(parseFloat(S)),m.push(parseFloat(P))):(T=parseFloat(S),C=parseFloat(P),r+=(y<5?"calc":"")+"("+(T?"{"+h.length+(v?"!":"")+"}":"0")+A+" + "+(C?"{"+(h.length+(T?1:0))+(v?"!":"")+"}":"0")+E+")",T&&(h.push(T),m.push(0)),C&&(h.push(0),m.push(C)))}else{if(x!==w){y=0;break}r+=x,f++,g++,0===y&&"c"===x||1===y&&"a"===x||2===y&&"l"===x||3===y&&"c"===x||4<=y&&"("===x?y++:(y&&y<5||4<=y&&")"===x&&--y<5)&&(y=0),0===v&&"r"===x||1===v&&"g"===x||2===v&&"b"===x||3===v&&"a"===x||3<=v&&"("===x?(3===v&&"a"===x&&(b=1),v++):b&&","===x?3<++b&&(v=b=0):(b&&v<(b?5:4)||(b?4:3)<=v&&")"===x&&--v<(b?5:4))&&(v=b=0)}}f===s.length&&g===a.length||(Y.debug&&console.error('Trying to pattern match mis-matched strings ["'+a+'", "'+s+'"]'),r=W),r&&(h.length?(Y.debug&&console.log('Pattern found "'+r+'" -> ',h,m,"["+s+","+a+"]"),s=h,a=m,u=c=""):r=W)}if(r||(s=(l=p(e,s))[0],c=l[1],a=(l=p(e,a))[0].replace(/^([+-\/*])=/,,u=l[1],s=parseFloat(s)||0,a=parseFloat(a)||0,"%"===u&&(/^(fontSize|lineHeight)$/.test(e)?(a/=100,u="em"):/^scale/.test(e)?(a/=100,u=""):/(Red|Green|Blue)$/i.test(e)&&(a=a/100*255,u=""))),/[\/*]/.test(d))u=c;else if(c!==u&&0!==s)if(0===a)u=c;else{O=O||function(){var e={myParent:H.parentNode||B.body,position:Z.getPropertyValue(H,"position"),fontSize:Z.getPropertyValue(H,"fontSize")},t=e.position===q.lastPosition&&e.myParent===q.lastParent,r=e.fontSize===q.lastFontSize;q.lastParent=e.myParent,q.lastPosition=e.position,q.lastFontSize=e.fontSize;var n,i={};return r&&t?(i.emToPx=q.lastEmToPx,i.percentToPxWidth=q.lastPercentToPxWidth,i.percentToPxHeight=q.lastPercentToPxHeight):(n=N&&N.isSVG?B.createElementNS("http://www.w3.org/2000/svg","rect"):B.createElement("div"),Y.init(n),e.myParent.appendChild(n),X.each(["overflow","overflowX","overflowY"],function(e,t){Y.CSS.setPropertyValue(n,t,"hidden")}),Y.CSS.setPropertyValue(n,"position",e.position),Y.CSS.setPropertyValue(n,"fontSize",e.fontSize),Y.CSS.setPropertyValue(n,"boxSizing","content-box"),X.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],,Y.CSS.setPropertyValue(n,"paddingLeft","100em"),i.percentToPxWidth=q.lastPercentToPxWidth=(parseFloat(Z.getPropertyValue(n,"width",null,!0))||1)/100,i.percentToPxHeight=q.lastPercentToPxHeight=(parseFloat(Z.getPropertyValue(n,"height",null,!0))||1)/100,i.emToPx=q.lastEmToPx=(parseFloat(Z.getPropertyValue(n,"paddingLeft"))||1)/100,e.myParent.removeChild(n)),null===q.remToPx&&(q.remToPx=parseFloat(Z.getPropertyValue(B.body,"fontSize"))||16),null===q.vwToPx&&(q.vwToPx=parseFloat(M.innerWidth)/100,q.vhToPx=parseFloat(M.innerHeight)/100),i.remToPx=q.remToPx,i.vwToPx=q.vwToPx,i.vhToPx=q.vhToPx,1<=Y.debug&&console.log("Unit ratios: "+JSON.stringify(i),H),i}();var F=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(c){case"%":s*="x"==F?O.percentToPxWidth:O.percentToPxHeight;break;case"px":break;default:s*=O[c+"ToPx"]}switch(u){case"%":s*=1/("x"==F?O.percentToPxWidth:O.percentToPxHeight);break;case"px":break;default:s*=1/O[u+"ToPx"]}}switch(d){case"+":a=s+a;break;case"-":a=s-a;break;case"*":a*=s;break;case"/":a=s/a}z[e]={rootPropertyValue:i,startValue:s,currentValue:s,endValue:a,unitType:u,easing:o},r&&(z[e].pattern=r),Y.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(z[e]),H)}else Y.debug&&console.log("Skipping ["+n+"] due to a lack of browser support.")};for(var f in T)if(T.hasOwnProperty(f)){var g=Z.Names.camelCase(f),h=(r=T[f],a=i=n=void 0,Q.isFunction(r)&&(r=r.call(H,k,E)),Q.isArray(r)?(n=r[0],a=!Q.isArray(r[1])&&/^[\d-]/.test(r[1])||Q.isFunction(r[1])||Z.RegEx.isHex.test(r[1])?r[1]:Q.isString(r[1])&&!Z.RegEx.isHex.test(r[1])&&Y.Easings[r[1]]||Q.isArray(r[1])?(i=D(r[1],R.duration),r[2]):r[1]||r[2]):n=r,i=i||R.easing,Q.isFunction(n)&&(n=n.call(H,k,E)),Q.isFunction(a)&&(a=a.call(H,k,E)),[n||0,i,a]);if(G(Z.Lists.colors)){var m=h[0],y=h[1],v=h[2];if(Z.RegEx.isHex.test(m)){for(var b=["Red","Green","Blue"],x=Z.Values.hexToRgb(m),w=v?Z.Values.hexToRgb(v):W,S=0;S<b.length;S++){var P=[x[S]];y&&P.push(y),w!==W&&P.push(w[S]),p(g+b[S],P)}continue}}p(g,h)}z.element=H}z.element&&(Z.Values.addClass(H,"velocity-animating"),I.push(z),(N=$(H))&&(""===R.queue&&(N.tweensContainer=z,N.opts=R),N.isAnimating=!0),F===E-1?(Y.State.calls.push([I,V,R,null,C.resolver,null,0]),!1===Y.State.isTicking&&(Y.State.isTicking=!0,U())):F++)}var O,e,t,n,R=X.extend({},Y.defaults,j),z={};switch($(H)===W&&Y.init(H),parseFloat(R.delay)&&!1!==R.queue&&X.queue(H,R.queue,,R.duration.toString().toLowerCase()){case"fast":R.duration=200;break;case"normal":R.duration=400;break;case"slow":R.duration=600;break;default:R.duration=parseFloat(R.duration)||1}!1!==Y.mock&&(!0===Y.mock?R.duration=R.delay=1:(R.duration*=parseFloat(Y.mock)||1,R.delay*=parseFloat(Y.mock)||1)),R.easing=D(R.easing,R.duration),R.begin&&!Q.isFunction(R.begin)&&(R.begin=null),R.progress&&!Q.isFunction(R.progress)&&(R.progress=null),R.complete&&!Q.isFunction(R.complete)&&(R.complete=null),R.display!==W&&null!==R.display&&(R.display=R.display.toString().toLowerCase(),"auto"===R.display&&(R.display=Y.CSS.Values.getDisplayType(H))),R.visibility!==W&&null!==R.visibility&&(R.visibility=R.visibility.toString().toLowerCase()),R.mobileHA=R.mobileHA&&Y.State.isMobile&&!Y.State.isGingerbread,!1===R.queue?R.delay?(e=Y.State.delayedElements.count++,Y.State.delayedElements[e]=H,n=e,t=$(H).delayBegin=(new Date).getTime(),$(H).delay=parseFloat(R.delay),$(H).delayTimer={setTimeout:setTimeout(r,parseFloat(R.delay)),next:t}):r():X.queue(H,R.queue,,""!==R.queue&&"fx"!==R.queue||"inprogress"===X.queue(H)[0]||X.dequeue(H)}var n,t,i,a,V,T,o=arguments[0]&&(arguments[0].p||X.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||Q.isString(arguments[0].properties));Q.isWrapped(this)?(t=!1,a=0,i=V=this):(t=!0,a=1,V=o?arguments[0].elements||arguments[0].e:arguments[0]);var C={promise:null,resolver:null,rejecter:null};if(t&&Y.Promise&&(C.promise=new Y.Promise(),j=o?(T=arguments[0].properties||arguments[0].p,arguments[0].options||arguments[0].o):(T=arguments[a],arguments[a+1]),V=m(V)){var A,E=V.length,F=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(T)&&!X.isPlainObject(j))for(var j={},s=a+1;s<arguments.length;s++)Q.isArray(arguments[s])||!/^(fast|normal|slow)$/i.test(arguments[s])&&!/^\d/.test(arguments[s])?Q.isString(arguments[s])||Q.isArray(arguments[s])?j.easing=arguments[s]:Q.isFunction(arguments[s])&&(j.complete=arguments[s]):j.duration=arguments[s];switch(T){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"pause":var l=(new Date).getTime();return X.each(V,,X.each(Y.State.calls,,e();case"resume":return X.each(V,,X.each(Y.State.calls,function(e,n){var i=!1;n&&X.each(n[1],function(e,r){var t=j===W?"":j;return!0!==t&&n[2].queue!==t&&(j!==W||!1!==n[2].queue)||!n[5]||(X.each(V,,!i&&void 0)})}),e();case"finish":case"finishAll":case"stop":X.each(V,;var u=[];return X.each(Y.State.calls,function(a,o){o&&X.each(o[1],function(e,n){var i=j===W?"":j;if(!0!==i&&o[2].queue!==i&&(j!==W||!1!==o[2].queue))return!0;X.each(V,function(e,t){var r;t===n&&(!0!==j&&!Q.isString(j)||(X.each(X.queue(t,Q.isString(j)?j:""),,X.queue(t,Q.isString(j)?j:"",[])),"stop"===T?((r=$(t))&&r.tweensContainer&&(!0===i||""===i)&&X.each(r.tweensContainer,,u.push(a)):"finish"!==T&&"finishAll"!==T||(o[2].duration=1))})})}),"stop"===T&&(X.each(u,,C.promise&&C.resolver(V)),e();default:if(!X.isPlainObject(T)||Q.isEmptyObject(T)){if(Q.isString(T)&&Y.Redirects[T]){var c=(n=X.extend({},j)).duration,d=n.delay||0;return!0===n.backwards&&(V=X.extend(!0,[],V).reverse()),X.each(V,,e()}var p="Velocity: First argument ("+T+") was not a property map, a known action, or a registered redirect. Aborting.";return C.promise?C.rejecter(new Error(p)):M.console&&console.log(p),e()}A="start"}var q={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},I=[];X.each(V,,(n=X.extend({},Y.defaults,j)).loop=parseInt(n.loop,10);var f=2*n.loop-1;if(n.loop)for(var g=0;g<f;g++){var h={delay:n.delay,progress:n.progress};g===f-1&&(h.display=n.display,h.visibility=n.visibility,h.complete=n.complete),b(V,"reverse",h)}return e()}C.promise&&(T&&j&&!1===j.promiseRejectEmpty?C.resolver():C.rejecter())};(Y=X.extend(b,Y)).animate=b;var c,E=M.requestAnimationFrame||a;return Y.State.isMobile||B.hidden===W||((c=(),B.addEventListener("visibilitychange",c)),e.Velocity=Y,e!==M&&(e.fn.velocity=b,e.fn.velocity.defaults=Y.defaults),X.each(["Down","Up"],function(e,d){Y.Redirects["slide"+d]=function(r,e,n,t,i,a){var o=X.extend({},e),s=o.begin,l=o.complete,u={},c={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};o.display===W&&(o.display="Down"===d?"inline"===Y.CSS.Values.getDisplayType(r)?"inline-block":"block":"none"),o.begin=function(){for(var e in 0===n&&s&&s.call(i,i),c){var t;c.hasOwnProperty(e)&&(u[e]=r.style[e],t=Z.getPropertyValue(r,e),c[e]="Down"===d?[t,0]:[0,t])}u.overflow=r.style.overflow,r.style.overflow="hidden"},o.complete=Y(r,c,o)}}),X.each(["In","Out"],,Y}uery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)}),function(l,u){var c={script:null,host:"//a.ocean-trk.com",pub:"5",site:"58",zone:"278",type:"46",extra:[,settings:{closeOnVideoEnd:"true"===String("true"),noAnimation:"true"===String("false"),width:"35",position:"right",fc:{prefix:"ADN-IMVID-",views:"2",period:"1",isSuccessive:"true"===String("true")}}},d={get:function(i){for(var e=!1,t=[,r=0;r<t.length;r++)if(e=this.safe(t[r]),!d.undefined(e)&&!1!==e)return e;return""},set:function(r,n,i){d.undefined(i)||i<=0||d.safe(function(){var e=new Date;e.setTime(e.getTime()+i);var t=encodeURI(n)+"; expires="+e.toUTCString()+";path=/";u.cookie=r+"="+t})},expiry:function(e,t){return 1e3*Math.floor(3600*parseInt(t)/parseInt(e))},safe:attr:undefined:url:title:viewport:isMobile:function(){var e=!1;return(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&(e=!0),e},isPortrait:isLandscape:adjustWidth:function(e){d.isMobile()?d.isPortrait()?e.style.width="55%":d.isLandscape()&&(e.style.width=c.settings.width+"%"):e.style.width=c.settings.width+"%"}},e={init:function(){var e,t,r,n,i,a,o,s;c.script=u.getElementById("adn-"+c.zone),null!==c.script&&("false"!==(e=d.attr("data-close-on-video-end"))&&"no"!==e||(c.settings.closeOnVideoEnd=!1),"true"!==(t=d.attr("data-no-animation"))&&"yes"!==t||(c.settings.noAnimation=!0),r=parseInt(d.attr("data-width")),isNaN(r)||(c.settings.width=r),"left"!==(n=d.attr("data-position"))&&"right"!==n||(c.settings.position=n),i=parseInt(d.attr("data-fc-views")),isNaN(i)||(c.settings.fc.views=i),a=parseInt(d.attr("data-fc-period")),isNaN(a)||(c.settings.fc.period=a),"false"!==(o=d.attr("data-fc-successive"))&&"no"!==o||(c.settings.fc.isSuccessive=!1),s=parseInt(d.get(c.settings.fc.prefix+c.zone)||0),(!c.settings.fc.isSuccessive&&s<=0||c.settings.fc.isSuccessive&&s+1<=c.settings.fc.views)&&this.request())},loaded:function(){return l.adnIMLoaded=!d.undefined(l.adnIMLoaded),l.adnIMLoaded},src:function(){var e=c.host+"/video?a="+c.zone,r=["t="+c.type,"s="+c.site,"p="+c.pub],t=d.url(!0);0!==t.length&&r.push("url="+t);var n=encodeURIComponent(d.title());return 0!==n.length&&r.push("title="+n),c.extra.forEach(,e+="&"+r.join("&")},request:function(){var i=this,a=new XMLHttpRequest;a.open("GET",this.src()),a.send(null),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status)try{var e=(new DOMParser).parseFromString(a.responseText,"text/xml");if(void 0===e.getElementsByTagName("Impression")[0])return;i.impressionPx=e.getElementsByTagName("Impression")[0].childNodes[0].data,i.clickURL=e.getElementsByTagName("ClickThrough")[0].childNodes[0].data,i.videoURL=e.getElementsByTagName("MediaFile")[0].childNodes[0].data,i.generate();var t=c.settings.fc.prefix+c.zone,r=parseInt(d.get(c.settings.fc.prefix+c.zone)||0),n=d.expiry(c.settings.fc.views,c.settings.fc.period);c.settings.fc.isSuccessive&&(n=d.expiry(1,c.settings.fc.period)),d.set(t,r+1,n)}catch(e){console.log(e)}}},generate:function(){var t=this,r=u.createElement("div"),n=u.createElement("div"),i=u.createElement("video"),e=u.createElement("source"),a=u.createElement("div"),o=u.createElement("img"),s=u.createElement("a");r.id="video-im-slider-outer",r.style.cssText="position:fixed;bottom:-15px;z-index:9999;padding-right:10px;margin:0;opacity:0;",r.style[c.settings.position]="-750px",d.isMobile()||(r.style.width=c.settings.width+"%"),n.id="video-im-container",n.style.cssText="display:block;position:relative;padding:5px;width:100%;height:100%;background:none 0 0 repeat scroll rgb(178,178,178);border:1px solid rgb(204,204,204);border-radius:3px;",i.id="video-im-player",i.setAttribute("autoplay",""),i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.autoplay=i.muted=i.playsinline="true",i.style.cssText="width:100%;height:100%;",e.id="video-im-player-src",e.type="video/mp4",e.src=t.videoURL,a.id="video-im-close-btn",a.textContent="CLOSE",a.style.cssText="position:absolute;top:-25px;right:9px;z-index:9999;background:none 0px 0px repeat scroll rgb(178,178,178);color:white;cursor:pointer;font:13px sans-serif;padding:4px 7px 5px;border:1px solid rgb(204,204,204);border-bottom:0;border-radius:3px 3px 0 0;",o.src=t.impressionPx,o.style.cssText="width:1px;height:1px",s.id="video-im-click-overlay",s.href="https:"+t.clickURL,s.target="_blank",s.style.cssText="display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0);cursor:pointer;",i.appendChild(e),n.appendChild(i),n.appendChild(a),r.appendChild(n),u.body.appendChild(r),i.addEventListener("canplay",,i.addEventListener("playing",,i.addEventListener("ended",,a.addEventListener("click",,l.addEventListener("orientationchange",function(e){setTimeout(500)})},insert:function(){var e={opacity:1};e[c.settings.position]=0;this.render(e,{duration:500})},remove:function(){var e={opacity:0};e[c.settings.position]="-750px";var t={duration:500,complete:;this.render(e,t)},render:function(e,t){var r=u.getElementById("video-im-slider-outer");switch(!0){default:case!0===c.settings.noAnimation:r.style.opacity=e.opacity,r.style[c.settings.position]=e[c.settings.position];break;case"function"==typeof $&&"function"==typeof $.Velocity:$.Velocity(r,e,t);break;case"undefined"!=typeof Velocity:Velocity(r,e,t)}}};e.loaded()||e.init()}(window,document);