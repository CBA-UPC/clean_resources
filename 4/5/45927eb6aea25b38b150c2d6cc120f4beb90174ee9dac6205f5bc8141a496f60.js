/*!
   JW Player version 8.7.6
   Copyright (c) 2019, JW Player, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.7.6/notice.txt
*/
window.jwplayer=[function(t,e,n){"use strict";n.r(e),n.d(e,"exists",function(){return o}),n.d(e,"isHTTPS",function(){return u}),n.d(e,"isFileProtocol",function(){return a}),n.d(e,"isRtmp",function(){return c}),n.d(e,"isYouTube",function(){return s}),n.d(e,"typeOf",function(){return l}),n.d(e,"isDeepKeyCompliant",function(){return f});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=window.location.protocol;unction u(){return"https:"===i}ction(t,e,n){"use strict";n.d(e,"h",function(){return u}),n.d(e,"e",function(){return a}),n.d(e,"o",function(){return c}),n.d(e,"i",function(){return s}),n.d(e,"q",function(){return l}),n.d(e,"p",function(){return f}),n.d(e,"s",function(){return d}),n.d(e,"d",function(){return v}),n.d(e,"a",function(){return g}),n.d(e,"m",function(){return m}),n.d(e,"n",function(){return b}),n.d(e,"t",function(){return y}),n.d(e,"r",function(){return j}),n.d(e,"g",function(){return w}),n.d(e,"b",function(){return O}),n.d(e,"f",function(){return C}),n.d(e,"c",function(){return k}),n.d(e,"k",function(){return x}),n.d(e,"j",function(){return P}),n.d(e,"l",function(){return S});var r=n(2),i=n(0),o=void 0;ction s(t){o||(o=new DOMParser);var e=o.parseFromString(t,"text/html").body;l(e);for(var n=e.querySelectorAll("img,svg"),r=0;r<n.length;r++){f(n[r])}return e}function l(t){for(var e=t.querySelectorAll("script"),n=0;n<e.length;n++){var r=e[n];r.parentNode.removeChild(r)}return t}function f(t){for(var e=t.attributes,n=0;n<e.length;n++){var r=e[n].name;/^on/.test(r)&&t.removeAttribute(r)}return t}return t.nextElementSibling}function S(t){return t.previousElementSibling}},function(t,e,n){"use strict";n.d(e,"j",function(){return p}),n.d(e,"d",function(){return h}),n.d(e,"b",function(){return v}),n.d(e,"e",function(){return m}),n.d(e,"g",function(){return y}),n.d(e,"h",function(){return j}),n.d(e,"c",function(){return w}),n.d(e,"f",function(){return C}),n.d(e,"i",function(){return k}),n.d(e,"a",function(){return x});var r=n(0),i=n(6),o=n(27),u=n(8),a=n(39),c={},s={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish",el:"Greek"},l=Object(r.q)(s);"ar","da","de","es","fr","he","it","ja","nl","no","pt","ro","sv","tr","zh"];on(t,e,n){"use strict";n.d(e,"a",function(){return h});var r="free",i="starter",o="business",u="premium",a="enterprise",c="developer",s="platinum",l="ads",f="unlimited",d="trial",p="invalid";function h(t){var e={setup:[r,i,o,u,a,c,l,f,d,s],drm:[a,c,l,f,d],ads:[l,f,d,s,a,c],jwpsrv:[r,i,o,u,a,c,l,d,s,p],discovery:[l,a,c,d,f]};return },,,function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return d}),n.d(e,"c",function(){return h});var r=n(2),i=n(41),o=n.n(i),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=o.a.clear;=void 0;,function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n(0),i=n(11),o=n(8),u=n(1),a=1,c=2,s=3,l=4,f=5,d=6,p=7,h=601,v=602,g=611,m=function(){};function b(t,e,n,h){t===Object(t)&&(t=(h=t).url);var O=void 0,C=Object(r.j)({xhr:null,url:t,withCredentials:!1,retryWithoutCredentials:!1,timeout:6e4,timeoutId:-1,oncomplete:e||m,onerror:n||m,mimeType:h&&!h.responseType?"text/xml":"",requireValidXML:!1,responseType:h&&h.plainText?"text":"",useDomParser:!1,requestFilter:null},h),k=0,C);if("XMLHttpRequest"in window){if(O=C.xhr=C.xhr||new window.XMLHttpRequest,"function"==typeof C.requestFilter){var x=void 0;try{x=C.requestFilter({url:t,xhr:O})}catch(t){return k(t,f),O}x&&"open"in x&&"send"in x&&(O=C.xhr=x)}O.onreadystatechange=function(t){return function(e){var n=e.currentTarget||t.xhr;if(4===n.readyState){clearTimeout(t.timeoutId);var a=n.status;if(a>=400)return void j(t,u.o,a<600?a:d);if(200===a)return t)(e);0===a&&Object(o.isFileProtocol)()&&!/^[a-z][a-z0-9+.-]*:/.test(t.url)&&j(t,u.o,p)}}}(C),O.onerror=k,"overrideMimeType"in O?C.mimeType&&O.overrideMimeType(C.mimeType):C.useDomParser=!0;try{t=t.replace(/#.*$/,""),O.open("GET",t,!0)}catch(t){return k(t,s),O}if(C.responseType)try{O.responseType=C.responseType}catch(t){}C.timeout&&(C.timeoutId=setTimeout(C.timeout),O.onabort=;try{C.withCredentials&&"withCredentials"in O&&(O.withCredentials=!0),O.send()}catch(t){k(t,l)}return O}j(C,u.r,c)}unction(t,e,n){"use strict";n.d(e,"b",function(){return T});var r=n(7),i=n(3),o=n(51),u=n(17),a=n(9),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),l=var f="ontouchstart"in window,d="PointerEvent"in window&&!r.OS.android,p=!(d||f&&r.OS.mobile),h="window",v="keydown",g=r.Features.passiveEvents,m=!!g&&{passive:!0},b=6,y=300,j=500,w=void 0,O=void 0,C=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),i=!(n=n||{}).preventScrolling;return r.directSelect=!!n.directSelect,r.dragged=!1,r.enableDoubleTap=!1,r.el=t,r.handlers={},r.options={},r.lastClick=0,r.lastStart=0,r.passive=i,r.pointerId=null,r.startX=0,r.startY=0,r.event=null,r}return e,o["a"]),s(e,[{key:"on",value:,{key:"off",value:,{key:"destroy",value:]),e}();e.a=C;var k=/\s+/;unction P(t){if(!t.handlers.init){var e=t.el,n=t.passive,r=!!g&&{passive:n},o=c=s=d?E(t,"init","pointerdown",o,r):(p&&E(t,"init","mousedown",o,r),E(t,"init","touchstart",o,r)),O||(O=new C(document).on("interaction")),E(t,"init","blur",,E(t,"init","focus",}}var S={drag:function(t){P(t)},dragStart:function(t){P(t)},dragEnd:function(t){P(t)},click:function(t){P(t)},tap:function(t){P(t)},doubleTap:function(t){t.enableDoubleTap=!0,P(t)},doubleClick:longPress:focus:function(t){E(t,"focus","focus",function(e){F(t,"focus",e)})},blur:over:function(t){(d||p)&&E(t,i.Z,d?"pointerover":"mouseover",function(e){"touch"!==e.pointerType&&N(t,i.Z,e)})},out:move:enter:keydown:gesture:interaction:;unction E(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:m,o=t.handlers[e],u=t.options[e];if(o||(o=t.handlers[e]={},u=t.options[e]={}),o[n])throw new Error(e+" "+n+" already registered");o[n]=r,u[n]=i;var a=t.el;(e===h?T(a):a).addEventListener(n,r,i)}ction(t,e,n){"use strict";e.a={advertising:{admessage:"This ad will end in xx",cuetext:"Advertisement",displayHeading:"Advertisement",loadingAd:"Loading ad",podmessage:"Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",skipmessage:"Skip ad in xx",skiptext:"Skip"},airplay:"AirPlay",audioTracks:"Audio Tracks",auto:"Auto",buffer:"Loading",cast:"Chromecast",cc:"Closed Captions",close:"Close",errors:{badConnection:"This video cannot be played because of a problem with your internet connection.",cantLoadPlayer:"Sorry, the video player failed to load.",cantPlayInBrowser:"The video cannot be played in this browser.",cantPlayVideo:"This video file cannot be played.",errorCode:"Error Code",liveStreamDown:"The live stream is either down or has ended.",protectedContent:"There was a problem providing access to protected content.",technicalError:"This video cannot be played because of a technical error."},exitFullscreen:"Exit Fullscreen",fullscreen:"Fullscreen",hd:"Quality",liveBroadcast:"Live",logo:"Logo",mute:"Mute",next:"Next",nextUp:"Next Up",notLive:"Not Live",off:"Off",pause:"Pause",play:"Play",playback:"Play",playbackRates:"Playback Rates",player:"Video Player",playlist:"Playlist",poweredBy:"Powered by",prev:"Previous",related:{autoplaymessage:"Next up in xx",heading:"More Videos"},replay:"Replay",rewind:"Rewind 10 Seconds",settings:"Settings",sharing:{copied:"Copied",email:"Email",embed:"Embed",heading:"Share",link:"Link"},slider:"Seek",stop:"Stop",unmute:"Unmute",videoInfo:"About This Video",volume:"Volume",volumeSlider:"Volume"}},function(t,e,n){"use strict";var r=n(0),i=n(54),o=n(19),u=n(11),a=n(7),c=n(39),s=n(13),l={autostart:!1,bandwidthEstimate:null,bitrateSelection:null,castAvailable:!1,controls:!0,defaultPlaybackRate:1,displaydescription:!0,displaytitle:!0,displayPlaybackLabel:!1,height:360,intl:{},language:"en",liveTimeout:null,localization:c.a,mute:!1,nextUpDisplay:!0,playbackRateControls:!1,playbackRates:[.5,1,1.25,1.5,2],renderCaptionsNatively:!1,repeat:!1,stretching:"uniform",volume:90,width:640};ar d=function(t,e){var i=Object(r.j)({},(window.jwplayer||{}).defaults,e,t);!i);var d=i.forceLocalizationDefaults?l.language:Object(s.e)(),p=Object(s.j)(i.intl);i.localization=Object(s.a)(c.a,Object(s.c)(i,p,d));var h=Object(r.j)({},l,i);"."===h.base&&(h.base=Object(o.getScriptPath)("jwplayer.js")),h.base=(h.base||Object(o.loadFrom)()).replace(/\/?$/,"/"),n.p=h.base,h.width=f(h.width),h.height=f(h.height),h.aspectratio=h.aspectratio,h.width),h.volume=Object(r.z)(h.volume)?Math.min(Math.max(0,h.volume),100):l.volume,h.mute=!!h.mute,h.language=d,h.intl=p;var v=h.playbackRateControls;if(v){var g=h.playbackRates;Array.isArray(v)&&(g=v),(g=g.filter(.map().indexOf(1)<0&&g.push(1),g.sort(),h.playbackRateControls=!0,h.playbackRates=g}(!h.playbackRateControls||h.playbackRates.indexOf(h.defaultPlaybackRate)<0)&&(h.defaultPlaybackRate=1),h.playbackRate=h.defaultPlaybackRate,h.aspectratio||delete h.aspectratio;var m=h.playlist;if(m)Array.isArray(m.playlist)&&(h.feedData=m,h.playlist=m.playlist);else{var b=Object(r.D)(h,["title","description","type","mediaid","image","file","sources","tracks","preload","duration"]);h.playlist=[b]}h.qualityLabels=h.qualityLabels||h.hlslabels,delete h.duration;var y=h.liveTimeout;null!==y&&(Object(r.z)(y)?0!==y&&(y=Math.max(30,y)):y=null,h.liveTimeout=y);var j=parseFloat(h.bandwidthEstimate),w=parseFloat(h.bitrateSelection);return h.bandwidthEstimate=Object(r.z)(j)?j:h.defaultBandwidthEstimate),h.bitrateSelection=Object(r.z)(w)?w:l.bitrateSelection,h.backgroundLoading=Object(r.r)(h.backgroundLoading)?h.backgroundLoading:a.Features.backgroundLoading,h},p=n(26),h=n(18),v="__CONTEXTUAL__";r b=y=n(10),j=n(25),w=n(3),O=n(58),C=n(29),k=n(24),x=n(1); E=n(37),_=n(48),A=n(12),F=301129; L=R=var D=B=n(42),z=n(30),q=n(22),Q={removeItem:function(){}};try{Q=window.localStorage||Q}catch(t){}bject(r.j)(V.prototype,{getAllItems:track:clear:);var X=V,W=n(52),U=n(49),H=n(5),Y=n(43),J=n(53);r G=n(57),Z=n(35);n.d(e,"b",function(){return it});var tt=function(){};Object(r.j)(tt.prototype,W.a);var et=ect(r.j)(et.prototype,{on:H.a.on,once:H.a.once,off:H.a.off,trigger:H.a.trigger,init:playerDestroy:getContainer:get:getItemQoe:getConfig:getCurrentCaptions:function(){return this.get("captionsIndex")},getWidth:function(){return this.get("containerWidth")},getHeight:function(){return this.get("containerHeight")},getMute:function(){return this.get("mute")},getProvider:function(){return this.get("provider")},getState:getAudioTracks:function(){return null},getCaptionsList:function(){return null},getQualityLevels:function(){return null},getVisualQuality:function(){return null},getCurrentQuality:function(){return-1},getCurrentAudioTrack:getSafeRegion:isBeforeComplete:function(){return!1},isBeforePlay:function(){return!1},createInstream:function(){return null},skipAd:function(){},attachMedia:function(){},detachMedia:);e.a=et},).default;