/*!
   JW Player version 8.26.1
   Copyright (c) 2022, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.26.1/notice.txt
*/!function(){var t,e,n={696:9128:function(t,e,n){"use strict";function r(t,e,n){var r=[],i={},o=function(){for(;r.length>0;){var e=r.shift(),n=e.command,o=e.args;(i[n]||t[n]).apply(t,o)}};e.forEach((),Object.defineProperty(this,"queue",{enumerable:!0,get:function(){return r}}),this.flush=o,this.empty=this.off=this.destroy=n.d(e,{Z:function(){return r}})},4742:5191:function(t,e,n){"use strict";n.d(e,{R:function(){return i},a:function(){return r}});var r=i=,5083:function(t,e,n){"use strict";n.d(e,{G0:function(){return d},ke:function(){return f}});var r=n(7462),i=n(5191),o=n(1569),u=n(9888),a=n(6042),c=n(8348),s=n(696),l=n(8518),f={autoPause:{viewability:!1,pauseAds:!1},autostart:!1,allowFullscreen:!0,bandwidthEstimate:null,bitrateSelection:null,castAvailable:!1,controls:!0,cues:[],defaultPlaybackRate:1,displaydescription:!0,displaytitle:!0,displayPlaybackLabel:!1,enableShortcuts:!0,height:360,intl:{},item:0,language:"en",liveTimeout:null,localization:s.Z,mute:!1,nextUpDisplay:!0,playbackRateControls:!1,playbackRates:[.5,1,1.25,1.5,2],renderCaptionsNatively:!1,repeat:!1,stretching:"uniform",timeSlider:{legacy:!0,showKnob:!0,preferChapterImages:!1},volume:90,width:640},d=e.ZP=function(t,e){var p=(0,r.Z)({},(window.jwplayer||{}).defaults,e,t);!p);var h=p.forceLocalizationDefaults?f.language:(0,l.G3)(),v=(0,l.tK)(p.intl);p.localization=(0,l.Mh)(s.Z,(0,l.Pm)(p,v,h));var g=(0,r.Z)({},f,p);"."===g.base&&(g.base=(0,o.getScriptPath)("jwplayer.js")),g.base=(g.base||(0,o.loadFrom)()).replace(/\/?$/,"/"),n.p=g.base,g.width=(0,i.a)(g.width),g.height=(0,i.a)(g.height),g.aspectratio=(0,i.R)(g.aspectratio,g.width),"string"==typeof g.volume&&(g.volume=parseFloat(g.volume)),g.volume=(0,a.qh)(g.volume)?Math.min(Math.max(0,g.volume),100):f.volume,g.mute=Boolean(g.mute),g.language=h,g.intl=v;var m=g.playlistIndex;m&&(g.item=m),(0,a.hj)(g.item)||(g.item=0);var y=p.autoPause;y&&(g.autoPause.viewability=!("viewability"in y)||Boolean(y.viewability));var w=g.playbackRateControls;if(w){var b=g.playbackRates;Array.isArray(w)&&(b=w),(b=b.filter(().map(()).indexOf(1)<0&&b.push(1),b.sort(),g.playbackRateControls=!0,g.playbackRates=b}(!g.playbackRateControls||g.playbackRates.indexOf(g.defaultPlaybackRate)<0)&&(g.defaultPlaybackRate=1),g.playbackRate=g.defaultPlaybackRate,g.aspectratio||delete g.aspectratio;var k=g.playlist;if(k)Array.isArray(k.playlist)&&(g.feedData=k,g.playlist=k.playlist);else{var C=(0,a.ei)(g,["title","description","type","mediaid","image","images","file","sources","tracks","preload","duration","chapters"]);g.playlist=[C]}g.qualityLabels=g.qualityLabels||g.hlslabels,delete g.duration;var P=g.liveTimeout;null!==P&&((0,a.qh)(P)?0!==P&&(P=Math.max(30,P)):P=null,g.liveTimeout=P);var j,x,S=parseFloat(g.bandwidthEstimate),E=parseFloat(g.bitrateSelection);return g.bandwidthEstimate=(0,a.qh)(S)?S:(j=g.defaultBandwidthEstimate,x=parseFloat(j),(0,a.qh)(x)?Math.max(x,1):f.bandwidthEstimate),g.bitrateSelection=(0,a.qh)(E)?E:f.bitrateSelection,g.liveSyncDuration=d(g.liveSyncDuration),g.backgroundLoading=(0,a.jn)(g.backgroundLoading)?g.backgroundLoading:c.Features.backgroundLoading,g}},2894:function(t,e,n){"use strict";n.d(e,{Ep:function(){return o},Jt:function(){return u},Tr:function(){return i},Zq:function(){return a}});var r=n(4446),i={},o=u=a=,623:function(t,e,n){"use strict";n.d(e,{ZP:function(){return rt},c2:function(){return et}});var r=n(7462),i=n(9128),o=n(2445),u=n(2894),a=n(393),c=n(8320),s=n(2963),l=n(670),f=n(4601),d=n(4446),p=n(8348),h=null,v=g=m=function(t){var e,r=t.get("controls"),i=v(),o=t,"html5");return p.OS.tizen?g():r&&i&&o?(e=n.e(605).then(bind(null,n)).catch((0,u.Ep)(d.fU+105)),u.Tr.html5=e,e):r&&o?):r&&i?n.e(493).then(bind(null,n)).catch((0,u.Ep)(d.fU+103)):r?n.e(581).then(bind(null,n)).catch((0,u.Ep)(d.fU+102)):g()},y=n(1643),w=n(7263),b=n(676),k=n(8518),C=n(1241),P=n(8381),j=x=S=var E=n(1918),T=n(6599),Z=n(7010),O=A=_=M=F=I=B=L=D=N=function(t){var e;this.start=function(n){var r,i=B(t,n),o=Promise.all([(r=t,h||(h=m(r)),h),D(t),i,_(t),F(t),O(t),L(t)]),u=new Promise(();return Promise.race([o,u]).catch(().then(()},this.destroy=,R=n(2303),q=n(7411),z=n(9888),U=n(4742),H={removeItem:function(t){}};try{H=window.localStorage||H}catch(t){}var V=),G=n(7753),W=n(9918),K=n(328),Q=n(4225),X=n(7683),J=n(4609),$=n(5882),Y=(n(4671),n(9926),,tt=et=nt=(0,r.Z)(nt.prototype,{on:K.ZP.on,once:K.ZP.once,off:K.ZP.off,trigger:K.ZP.trigger,init:playerDestroy:getContainer:get:getItemQoe:function(){return this.modelShim._qoeItem},getItemPromise:function(){return null},setItemCallback:getConfig:getCurrentCaptions:function(){return this.get("captionsIndex")},getWidth:function(){return this.get("containerWidth")},getHeight:function(){return this.get("containerHeight")},getMute:function(){return this.get("mute")},getProvider:function(){return this.get("provider")},getState:getAudioTracks:function(){return null},getCaptionsList:function(){return null},getQualityLevels:function(){return null},getVisualQuality:function(){return null},getCurrentQuality:function(){return-1},getCurrentAudioTrack:getSafeRegion:isBeforeComplete:function(){return!1},isBeforePlay:function(){return!1},createInstream:function(){return null},skipAd:function(){},attachMedia:function(){},detachMedia:function(){}});var rt=nt},4446:function(t,e,n){"use strict";n.d(e,{A6:function(){return b},DD:function(){return f},EY:function(){return g},H4:function(){return E},IB:function(){return s},MD:function(){return P},Mm:function(){return O},Sp:function(){return S},T6:function(){return o},Y7:function(){return w},YQ:function(){return l},_M:function(){return v},aD:function(){return y},fU:function(){return a},l9:function(){return A},nk:function(){return i},nm:function(){return _},o2:function(){return h},pJ:function(){return j},rG:function(){return Z},tJ:function(){return p},ud:function(){return T},ul:function(){return C},wH:function(){return k},wM:function(){return m},xk:function(){return c},y4:function(){return d},y7:function(){return u},zO:function(){return x}});var r=n(6042),i=1e5,o=100001,u=100002,a=101e3,c=102e3,s=102700,l=200001,f=202e3,d=104e3,p=203e3,h=203640,v=203700,g=204e3,m=300100,y=300200,w=306e3,b=308e3,k=308640,C="cantPlayVideo",P="badConnection",j="cantLoadPlayer",x="cantPlayInBrowser",S="liveStreamDown",E="protectedContent",T="technicalError",Z=function(){function t(t,e,n){this.code=(0,r.qh)(e)?e:0,this.sourceError=n||null,t?this.key=t:delete this.key}return t.logMessage=t}(),O=A=_=,6391:7411:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(7462),i=n(5004),o=window.performance||{timing:{}},u=o.timing.navigationStart||(0,i.z)();now"in o||(o.now=;var c=s=function(){ar e=t.prototype;return e.start=e.end=e.dump=function(){var t=(0,r.Z)({},this.sum);for(var e in this.startTimes)if(c(this.startTimes,e)){var n=a()-this.startTimes[e];t[e]=t[e]+n||n}return{counts:(0,r.Z)({},this.counts),sums:t,events:(0,r.Z)({},this.ticks)}},e.tick=e.clear=e.between=t}()},4601:function(t,e,n){"use strict";n.d(e,{v:function(){return u},z:function(){return a}});var r=n(2894),i=n(8348),o=null,u={},a=,8348:function(t,e,n){"use strict";n.r(e),n.d(e,{Browser:function(){return a},Features:function(){return s},OS:function(){return c}});var r=n(2268),i=o=navigator.userAgent,u=function(){},a={get androidNative(){return(0,r.O7)()},get chrome(){return(0,r.i7)()},get edge(){return(0,r.un)()},get facebook(){return(0,r.DF)()},get firefox(){return(0,r.pZ)()},get ie(){return(0,r.w1)()},get msie(){return(0,r.A)()},get safari(){return(0,r.G6)()},get version,c={get android(){return(0,r.Dt)()},get iOS(){return(0,r.gn)()},get mobile(){return(0,r.tq)()},get mac(){return(0,r.id)()},get iPad(){return(0,r.zc)()},get iPhone(){return(0,r.xb)()},get windowsget tizen(){return(0,r.yS)()},get tizenApp(){return(0,r.Q6)()},get version,s={get flash(){return(0,r.NO)()},get flashVersion(){return(0,r.dI)()},get iframeget passiveEventsget backgroundLoading},1643:9918:7753:7941:function(t,e,n){"use strict";n.d(e,{dZ:function(){return o},my:function(){return a},qk:function(){return u},r1:function(){return i}});var r=n(2957),i=o=function(t){var e="";return t&&(t.textContent?e=(0,r.fy)(t.textContent):t.text&&(e=(0,r.fy)(t.text))),e},u=a=,6769:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(7941),i=n(2957),o=u=function t(e,n){for(var u,a,c=[],s=0;s<(0,r.my)(e);s++){var l=e.childNodes[s];if("media"===l.prefix){if(!(0,r.r1)(l))continue;switch((0,r.r1)(l).toLowerCase()){case"content":if((0,i.Dc)(l,"duration")&&(n.duration=(0,i.m9)((0,i.Dc)(l,"duration"))),(0,i.Dc)(l,"url")){n.sources||(n.sources=[]);var f={file:(0,i.Dc)(l,"url"),type:(0,i.Dc)(l,"type"),width:(0,i.Dc)(l,"width"),label:(0,i.Dc)(l,"label")},d=o(l);d.length&&(f.mediaTypes=d),n.sources.push(f)}(0,r.my)(l)>0&&(n=t(l,n));break;case"title":n.title=(0,r.dZ)(l);break;case"description":n.description=(0,r.dZ)(l);break;case"guid":n.mediaid=(0,r.dZ)(l);break;case"thumbnail":n.image||(n.image=(0,i.Dc)(l,"url"));break;case"group":t(l,n);break;case"subtitle":var p={file:(0,i.Dc)(l,"url"),kind:"captions"};(0,i.Dc)(l,"lang").length>0&&(p.label=(u=(0,i.Dc)(l,"lang"),a=void 0,(a={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"})[u]?a[u]:u)),c.push(p)}}}n.tracks||(n.tracks=[]);for(var h=0;h<c.length;h++)n.tracks.push(c[h]);return n},a=n(9888),c=s=n(393),l=,2557:393:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(7462),i=n(6053),o=["captions","metadata","thumbnails","chapters"],u=function(t){if(t&&t.file){var e,n=(0,r.Z)({},{kind:"captions",default:!1},t);return n.kind=(e=n.kind,-1!==o.indexOf(e)?n.kind:"captions"),n.default=Boolean(n.default),n}},a=n(9918),c=Array.isArray,s=function(t){c((t=t||{}).tracks)||delete t.tracks;var e=(0,r.Z)({},{sources:[],tracks:[],minDvrWindow:a.ni},t);e.sources!==Object(e.sources)||c(e.sources)||(e.sources=[(0,i.Z)(e.sources)]),c(e.sources)&&0!==e.sources.length||(t.levels?e.sources=t.levels:e.sources=[(0,i.Z)(t)]);for(var n=0;n<e.sources.length;n++){var o=e.sources[n];if(o){var s=o.default;o.default=!!s&&"true"===s.toString(),e.sources[n].label||(e.sources[n].label=n.toString()),e.sources[n]=(0,i.Z)(e.sources[n])}}return e.sources=e.sources.filter(Boolean),c(e.tracks)||(e.tracks=[]),c(e.captions)&&(e.tracks=e.tracks.concat(e.captions),delete e.captions),e.tracks=e.tracks.map(u).filter(Boolean),e}},7263:function(t,e,n){"use strict";var r=n(7462),i=n(1643),o=n(7941),u=n(6769),a=n(6886),c=n(328),s=n(4446);e.Z=function(){var t=(0,r.Z)(this,c.ZP),e=n=function(n){try{var a,c=n.responseXML?n.responseXML.childNodes:null,l=null;if(c){for(var f=0;f<c.length&&8===(l=c[f]).nodeType;f++);if(l&&"xml"===(0,o.r1)(l)&&(l=l.nextSibling),l&&"rss"===(0,o.r1)(l)){var d=(0,u.Z)(l);a=(0,r.Z)({playlist:d},d.feedData)}}if(!a)try{var p=JSON.parse(n.responseText);if(Array.isArray(p))a={playlist:p};else{if(!Array.isArray(p.playlist))throw Error("Playlist is not an array");a=p}}catch(t){throw new s.rG(s.ul,621,t)}t.trigger(i.Ow,a)}catch(t){e(t)}};this.load=this.destroy=},8320:function(t,e,n){"use strict";n.d(e,{ZP:function(){return w},s7:function(){return v},T5:function(){return y},YF:function(){return h},_:function(){return g},bx:function(){return m}});var r=n(7462),i={none:!0,metadata:!0,auto:!0},o=u=n(393),a=n(6053),c=n(2303),s=n(4446),l=f=d=function(t,e){var n=e.attributes,r=t.sources,i=t.allSources,u=t.preload,c=t.drm,s=l(t.withCredentials,n.withCredentials);return(i||r).map((function(e){if(e!==Object(e))return null;f(e,n,"androidhls"),f(e,n,"hlsjsdefault"),f(e,n,"safarihlsjs"),e,t,n),f(e,n,"_hlsjsProgressive"),e.preload=o(e.preload,u);var r=e.drm||c||n.drm;r&&(e.drm=r);var i=l(e.withCredentials,s);return void 0!==i&&(e.withCredentials=i),(0,a.Z)(e)})).filter(Boolean)},p=h=function(t,e,n){var i=t.getProviders(),u=t.get("preload"),a=t.get("jwStart"),c=(0,r.Z)({},e);if(c.preload=o(e.preload,u),c.allSources=d(c,t),c.sources=p(c.allSources,i),c.sources.length)return c.file=c.sources[0].file,c.feedData=n,c.starttime=-1!==a&&t.get("generateSEOMetadata")?a:c.starttime,c)},v=function(t,e,n){var i=(0,r.Z)({},n);return delete i.playlist,t.map((function(t){return h(e,t,i)})).filter(Boolean)},g=function(t){if(!Array.isArray(t)||0===t.length)throw new s.rG(s.ul,630)},m=y=w=,6053:4101:1241:7164:function(t,e,n){"use strict";n.d(e,{MK:function(){return a},Nq:function(){return i},bX:function(){return u}});var r=n(7462),i=o=function(t){var e=t&&t.match(/\?(.*)/);if(!t||!e||!e[1])return{};var n={};return(e[1].includes("#")?e[1].split("#")[0]:e[1]).split("&").forEach((function(t){var e=t.split("="),r=e[0],i=e[1],o=decodeURIComponent(void 0===i?"":i);!function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(t),e)}(n,r)?n[r]=o:(Array.isArray(n[r])||(n[r]=[n[r]]),n[r].push(o))})),n},u=a=function(t,e,n){var i=t.name,u=(0,r.Z)({},e,o(t.url)),a=document.createElement("div");a.id=n.id+"_"+i,a.className="jw-plugin jw-reset";var c=t.getNewInstance(n,u,a);return n.addPlugin(i,c),c}},7683:function(t,e,n){"use strict";n.d(e,{V:function(){return o},Z:function(){return u}});var r=n(658),i=o=,658:4609:6528:1628:function(t,e,n){"use strict";n.d(e,{V:function(){return i}});var r=n(8348),i=function(t){return"hls"===t.type&&r.OS.android?!1!==t.androidhls&&(!r.Browser.firefox&&parseFloat(r.OS.version.version||"0")>=4.4):null}},12:670:6593:function(t,e,n){"use strict";n.d(e,{B:function(){return c},H:function(){return a}});var r=n(1628),i=n(7034),o=n(9025),u={aac:"audio/mp4",mp4:"video/mp4",f4v:"video/mp4",m4v:"video/mp4",mov:"video/mp4",mp3:"audio/mpeg",mpeg:"audio/mpeg",ogv:"video/ogg",ogg:"video/ogg",oga:"video/ogg",vorbis:"video/ogg",webm:"video/webm",f4a:"video/aac",m3u8:"application/vnd.apple.mpegurl",m3u:"application/vnd.apple.mpegurl",hls:"application/vnd.apple.mpegurl"},a=function(t){if(!o.Z||!o.Z.canPlayType)return!1;if(!1===(0,r.V)(t))return!1;var e=t.file,n=t.type;if((0,i.isRtmp)(e,n))return!1;var a=t.mimeType||u[n];if(!a)return!1;var c=t.mediaTypes;return c&&c.length&&(a=[a].concat(c.slice()).join("; ")),Boolean(o.Z.canPlayType(a))},c=[{name:"html5",supports:a}]},1384:function(t,e,n){"use strict";n.d(e,{CX:function(){return c},IP:function(){return f},If:function(){return a},Nm:function(){return l}});var r,i,o=n(1643),u=!1,a=function(){return u},c=s=l=function(t,e){r=function(e){return s(t,e,!0)},i=e.addEventListener("webkitbeginfullscreen",r),e.addEventListener("webkitendfullscreen",i)},f=,6875:6886:328:2268:8381:function(t,e,n){"use strict";n.d(e,{$W:function(){return a},Mf:function(){return s},T2:function(){return l},_b:function(){return c}});var r=n(8518),i=n(2557),o=n(4446),u=a=function(t,e){var n=[];if(!t||!t.timestamps||!t.timestamps.length)return n;var i=t.timestamps.sort(();return i.forEach((function(o,a){var c=function(t,e){void 0===e&&(e="en");for(var n=(0,r.G3)(),i=Object.keys(t.title),o=i[0];!t.title[n];){var a=i.find(u(n));if(a){n=a;break}var c=n.lastIndexOf("-");if(c<=0){n=null;break}n=n.slice(0,c)}return n||(i.indexOf(e)>=0?e:o)}(o,t.defaultLanguage),s=o.title[c],l=o.time,f=o.image,d=e;a+1<i.length&&(d=i[a+1].time);var p={begin:l,end:d,text:s,cueType:"chapters"};f&&(p.image=f),n.push(p)})),n},c=s=l=,974:5004:2799:function(t,e,n){"use strict";n.d(e,{A8:function(){return Z},AH:function(){return A},EU:function(){return S},FK:function(){return m},IV:function(){return C},L_:function(){return P},P$:function(){return x},SH:function(){return O},UM:function(){return F},Ww:function(){return I},az:function(){return f},bJ:function(){return p},cS:function(){return T},cn:function(){return k},gB:function(){return g},i3:function(){return _},kq:function(){return E},nG:function(){return M},nh:function(){return d},oH:function(){return h},og:function(){return j},pv:function(){return l},s1:function(){return b}});var r,i=n(7462),o=n(2957),u=n(6042),a=n(8348),c=window.DOMParser,s=!0;=new RegExp(/^((((https?):\/\/)|(mailto:))(%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@&=+$,A-Za-z0-9])+)([).!';/?:,][[:blank:|:blank:]])?$/);eturn t.nextElementSibling}29:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var r=n(7462),i=n(1569),o=n(7034),u=n(9888),a=n(2957),c=n(7411),s=n(4742);ar f=n(6042),d=n(2268),p=n(2799),h=n(974),v=n(6886),g=n(1261),m=n(5499),y=n(6234);var w=(0,r.Z)({},u,o,i,{addClass:p.cn,hasClass:p.pv,removeClass:p.IV,replaceClass:p.L_,toggleClass:p.og,classList:p.s1,styleDimension:p.FK,createElement:p.az,emptyElement:p.EU,addStyleSheet:p.kq,bounds:p.A8,openLink:p.nG,replaceInnerHtml:p.nh,css:h.iv,clearCss:h.oI,style:h.oB,transform:h.vs,getRgba:h.HY,ajax:v.h,crossdomain:tryCatch:Error:l,Timer:c.Z,log:m.c,genId:y.B,between:g.v,foreach:flashVersion:d.dI,isIframe:d.cL,indexOf:f.cq,trim:a.fy,pad:a.vk,extension:a.AO,hms:a.WZ,seconds:a.m9,prefix:a.O4,suffix:a.uA,noop:function(){}})},7543:8518:function(t,e,n){"use strict";n.d(e,{Cq:function(){return g},Dq:function(){return x},G3:function(){return y},Mh:function(){return S},Pm:function(){return C},dl:function(){return j},id:function(){return v},q2:function(){return k},t6:function(){return b},tK:function(){return h}});var r=n(7462),i=n(6042),o=n(2268),u=n(6886),a=n(7034),c=n(696),s={},l={aa:"Afar",ab:"Abkhazian",ae:"Avestan",af:"Afrikaans",ak:"Akan",am:"Amharic",ar:"Arabic",an:"Aragonese",as:"Assamese",av:"Avaric",ay:"Aymara",az:"Azerbaijani",ba:"Bashkir",be:"Belarusian",bg:"Bulgarian",bh:"Bihari languages",bi:"Bislama",bm:"Bambara",bn:"Bengali",bo:"Tibetan",br:"Breton",bs:"Bosnian",ca:"Catalan",ce:"Chechen",ch:"Chamorro",co:"Corsican",cr:"Cree",cs:"Czech",cu:"Church Slavic",cv:"Chuvash",cy:"Welsh",da:"Danish",de:"German",dv:"Divehi",dz:"Dzongkha",ee:"Ewe",el:"Greek",en:"English",eo:"Esperanto",es:"Spanish",et:"Estonian",eu:"Basque",fa:"Persian",ff:"Fulah",fi:"Finnish",fj:"Fijian",fo:"Faroese",fr:"French",fy:"Western Frisian",ga:"Irish",gd:"Gaelic",gl:"Galician",gn:"Guarani",gu:"Gujarati",gv:"Manx",ha:"Hausa",he:"Hebrew",hi:"Hindi",ho:"Hiri Motu",hr:"Croatian",ht:"Haitian",hu:"Hungarian",hy:"Armenian",hz:"Herero",ia:"Interlingua",id:"Indonesian",ie:"Interlingue",ig:"Igbo",ii:"Sichuan Yi",ik:"Inupiaq",io:"Ido",is:"Icelandic",it:"Italian",iu:"Inuktitut",ja:"Japanese",jv:"Javanese",ka:"Georgian",kg:"Kongo",ki:"Kikuyu",kj:"Kuanyama",kk:"Kazakh",kl:"Kalaallisut",km:"Central Khmer",kn:"Kannada",ko:"Korean",kr:"Kanuri",ks:"Kashmiri",ku:"Kurdish",kv:"Komi",kw:"Cornish",ky:"Kirghiz",la:"Latin",lb:"Luxembourgish",lg:"Ganda",li:"Limburgan",lo:"Lao",ln:"Lingala",lt:"Lithuanian",lu:"Luba-Katanga",lv:"Latvian",mg:"Malagasy",mh:"Marshallese",mi:"Maori",mk:"Macedonian",ml:"Malayalam",mn:"Mongolian",mr:"Marathi",ms:"Malay",mt:"Maltese",my:"Burmese",na:"Nauru",nb:"Bokmål",nd:"Ndebele",ne:"Nepali",ng:"Ndonga",nl:"Dutch",nn:"Norwegian Nynorsk",no:"Norwegian",nr:"Ndebele",nv:"Navajo",ny:"Chichewa",oc:"Occitan",oj:"Ojibwa",om:"Oromo",or:"Oriya",os:"Ossetian",pa:"Panjabi",pi:"Pali",pl:"Polish",pt:"Portuguese",ps:"Pushto",qu:"Quechua",rm:"Romansh",rn:"Rundi",ro:"Romanian",ru:"Russian",rw:"Kinyarwanda",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",se:"Northern Sami",sg:"Sango",si:"Sinhala",sk:"Slovak",sl:"Slovenian",sm:"Samoan",sn:"Shona",so:"Somali",sq:"Albanian",sr:"Serbian",ss:"Swati",st:"Sotho",su:"Sundanese",sw:"Swahili",sv:"Swedish",ta:"Tamil",te:"Telugu",tg:"Tajik",th:"Thai",ti:"Tigrinya",tk:"Turkmen",tl:"Tagalog",tn:"Tswana",to:"Tonga",tr:"Turkish",ts:"Tsonga",tt:"Tatar",tw:"Twi",ty:"Tahitian",ug:"Uighur",uk:"Ukrainian",ur:"Urdu",uz:"Uzbek",ve:"Venda",vi:"Vietnamese",vo:"Volapük",wa:"Walloon",wo:"Wolof",xh:"Xhosa",yi:"Yiddish",yo:"Yoruba",za:"Zhuang",zh:"Chinese",zu:"Zulu"},f=(0,i.U_)(l};y.mock_=null;var w=["ar","da","de","el","es","fi","fr","he","id","it","ja","ko","nb","nl","nn","no","oc","pt","ro","ru","sl","sv","th","tr","vi","zh"}var k.mock_=null;var };j.mock_=null;var x.mock_=null},549},126},988},156},623},177},67},295},5882:function(t,e,n){"use strict";n.d(e,{GU:function(){return E},ZP:function(){return b},dO:function(){return F}});var r,i,o=n(4578),u=n(8348),a=n(1643),c=n(328),s=n(5004),l=n(2799),f="ontouchstart"in window,d="PointerEvent"in window&&!u.OS.android,p=!(d||f&&u.OS.mobile),h="window",v="init",g="select",m="keydown",y=u.Features.passiveEvents,w=!!y&&{passive:!0},}(c.ZP),k=/\s+r S={drag:function(t){P(t)},dragStart:function(t){P(t)},dragEnd:function(t){P(t)},click:function(t){j(t)},doubleClic},longPres},focus:function(t){var e="focus";T(t,e,e,(function(n){A(t,e,n)}))},blu},over:function(t){(d||p)&&T(t,a.B1,d?"pointerover":"mouseover",(function(e){"touch"!==e.pointerType&&_(t,a.B1,e)}))},ou},mov},ente},keydow},gestur},interactio},tap:function(){},doubleTap:function(){}function(t,e,n){"use strict";n.d(e,{$6:function(){return I},Cb:function(){return St},HD:function(){return yt},Kn:function(){return dt},P2:function(){return it},S6:function(){return P},UI:function(){return x},U_:function(){return at},Yj:function(){return L},_e:function(){return Q},a9:function(){return xt},ar:function(){return K},ce:function(){return ct},cq:function(){return J},dp:function(){return N},e1:function(){return V},e5:function(){return X},ei:function(){return lt},hX:function(){return M},hj:function(){return mt},i2:function(){return bt},jn:function(){return kt},l7:function(){return st},mf:function(){return gt},o8:function(){return Ct},qh:function(){return Zt},r3:function(){return G},sE:function(){return A},u4:function(){return T},vM:function(){return U},wB:function(){return Et},xV:function(){return wt},yR:function(){return jt}});var r=n(5004),i={},o=Array.prototype,u=Object.prototype,a=Function.prototype,c=o.slice,s=o.concat,l=u.toString,f=u.hasOwnProperty,d=o.map,p=o.reduce,h=o.forEach,v=o.filter,g=o.every,m=o.some,y=o.indexOf,w=Array.isArray,b=Object.keys,k=a.bind,C=window.isFinite,},j=P,},S=x,E="Reduce of empty array with no initial value",},Z=T,O=T,},_=A,},F=M,},B=I,},D=L,},},},},U=z})),H=z})),},},W=G,K=function(t,e){return M(t,Et(e))},Q=function(t,e){return A(t,Et(e))},},},$=function(){},},t},et=tt(R,2),n},rt=tt(nt,{partial:tt},1),i},o},u},a},c},st=Object.assign},l},ft=w},d},pt=[];P(["Function","String","Number","Date","RegExp"]})),pt.Functio};var ht=pt.Date,vt=pt.RegExp,gt=pt.Function,mt=pt.Number,yt=pt.String,w},b},k},C},P},j},x},S},E},Tt=r.z,Z};e.ZP={afte},all:I,any:L,before:R,bind:Y,clon},collect:S,compac},constant:xt,contains:G,debounc},defaults:ct,defer:rt,delay:nt,detect:_,difference:X,each:P,every:B,extend:st,filter:M,find:A,findWhere:Q,foldl:Z,forEach:j,groupBy:U,has:Pt,identity:jt,include:W,indexBy:H,indexOf:J,inject:O,invert:at,isArray:ft,isBoolean:kt,isDate:ht,isFinite:wt,isFunction:gt,isNaN:bt,isNul},isNumber:mt,isObject:dt,isRegExp:vt,isString:yt,isUndefined:Ct,isValidNumber:Zt,keys:ot,las},map:x,matches:Et,ma},memoiz},now:Tt,omi},once:et,partial:tt,pick:lt,pluc},property:St,propertyO},reduce:T,rejec},resul},select:F,size:N,some:D,sortedIndex:V,throttle:it,where:K,withou}}},703},902},660},422},9926:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(7462),i=n(1776),o=n(2799),u=n(974),a=[],c=-1,s=function(){(0,i.W)(c),c=(0,i.U)}))},}()},4671:function(t,e,n){"use strict";var r,i=n(6875),o=n(8348),u=n(2799),a=[],c=[],s=[],l={},f="screen"in window&&"orientation"in window.screen,d=o.OS.android&&o.Browser.chrome,p=!1,},v=function(){a.forEach}))},g=function(){a.forEach}))},},};document.addEventListener("visibilitychange",g),document.addEventListener("webkitvisibilitychange",g),d&&f&&window.screen.orientation.addEventListener("change",v),window.addEventListener("beforeunload"})),e.Z={add:function(t){a.push(t)},remov},addScrollHandle},removeScrollHandle},addWidge},removeWidget:function(t){m(t,c)},size:function(){return a.length},observ},unobserv}}},2445:function(t,e,n){"use strict";n.d(e,{ZP:function(){return C},qG:function(){return k}});var r=n(7462),i=n(5083),o=n(1569),u=n(6042),a=n(7034),c=n(576),s=n(6599),l=n(386),f="__CONTEXTUAL__",},p=n(4737),h=n.n(p),v=n(67),},},},},},k=function(t){var e=(0,r.Z)({},t.plugins),n=(0,l.Z)(t.edition);if(n("ads")){var i=(0,r.Z)({},t.advertising),o=i.client;if(o)e[w(o)||o]=i,delete i.client;i.bids&&b(e,i.bids,"bidding")}if(n("jwpsrv")){var u=t.analytics;u!==Object(u)&&(u={}),b(e,u,"jwpsrv")}return b(e,t.ga,"gapro"),e},C=function(t,e){var l,p,w,b=(0,i.ZP)(t,e),C=b.key||c.default.key,P=new s.ZP(C),j=P.edition();if("free"===P.edition()&&(b=(0,r.Z)({skin:{active:"#ff0046",timeslider:{progress:"none"}},logo:{position:"control-bar",file:h()}},i.ke,(0,u.ei)(b,["analytics","aspectratio","base","file","height","playlist","sources","timeSlider","width"]))),b.key=C,b.edition=j,b.error=P.error(),b.generateSEOMetadata=b.generateSEOMetadata||!1,"unlimited"===j){var x=(0,o.getScriptPath)("jwplayer.js");if(!x)throw new Error("Error setting up player: Could not locate jwplayer.js script tag");n.p=x}if(b.related=y(b),b.ab&&(b.a}(b)),b.plugins=k(b),l=b.playlist,(0,u.HD)(l)&&l.indexOf(f)>-1&&(b.playlis}(document,b.playlist),b.contextual=!0),(0,a.isFileProtocol)()){var S=b,E=S.playlist,T=S.related;g(E)&&(b.playlist=m(E)),T&&g(T.file)&&(T.file=m(T.file))}return b.__abSendDomainToFeeds&&(w=b.playlist,/\.jwplatform.com|\.jwplayer.com/.test(w))&&(b.playlist=(p=b.playlist)+(-1!==p.indexOf("?")?"&":"?")+"page_domain="+encodeURIComponent((0,v.X)())),b}},576:function(t,e,n){"use strict";n.d(e,{default:function(){return $}});var r=n(7462),i=n(1096),o=n.n(i);window.Promise||(window.Promise=o());var u=n(1569),a=n(6391),c=n(2963),s=n(670),l={availableProviders:c.B,registerProvider:s.Z},f=n(1241);l.registerPlugi};var d=l,p=n(6601),h=n(4742),v=n(8348),g=n(623),m=n(1643),y=n(7411),w=n(328),b=n(4429),k=n(6042),C=0,},};function x(t){var e=++C,n=t.id||"player-"+e,i=new y.Z,o={},u=P(this,t);i.tick("init"),t.setAttribute("data-jwplayer-id",n),Object.defineProperties(this,{id:{enumerable:!0,get:function(){return n}},uniqueId:{enumerable:!0,get:function(){return e}},plugins:{enumerable:!0,get:function(){return o}},_qoe:{enumerable:!0,get:function(){return i}},version:{enumerable:!0,get:function(){return p.i}},Events:{enumerable:!0,get:function(){return w.ZP}},utils:{enumerable:!0,get:function(){return b.Z}},_:{enumerable:!0,get:function(){return k.ZP}}}),(0,r.Z)(this,{_events:{},setu},remov},qo},addCues:function(t){return Array.isArray(t)&&u.addCues(t),this},getAudioTracks:function(){return u.getAudioTracks()},getBuffer:function(){return u.get("buffer")},getCaptions:function(){return u.get("captions")},getCaptionsList:function(){return u.getCaptionsList()},getConfig:function(){return u.getConfig()},getContainer:function(){return u.getContainer()},getControls:function(){return u.get("controls")},getCues:function(){return u.getCues()},getCurrentAudioTrack:function(){return u.getCurrentAudioTrack()},getCurrentCaptions:function(){return u.getCurrentCaptions()},getCurrentQuality:function(){return u.getCurrentQuality()},getCurrentTime:function(){return u.get("currentTime")},getDuration:function(){return u.get("duration")},getEnvironment:function(){return v},getFullscreen:function(){return u.get("fullscreen")},getHeight:function(){return u.getHeight()},getItemMet},getMute:function(){return u.getMute()},getPercentViewable:function(){return u.get("visibility")},getPip:function(){return u.get("pip")},getPlaybackRate:function(){return u.get("playbackRate")},getPlaylist:function(){return u.get("playlist")},getPlaylistIndex:function(){return u.get("item")},getPlaylistIte},getPosition:function(){return u.get("position")},getProvider:function(){return u.getProvider()},getQualityLevels:function(){return u.getQualityLevels()},getSafeRegio},getState:function(){return u.getState()},getStretching:function(){return u.get("stretching")},getViewable:function(){return u.get("viewable")},getVisualQuality:function(){return u.getVisualQuality()},getVolum},getWidth:function(){return u.getWidth()},setCaptions:function(t){return u.setCaptions(t),this},setConfig:function(t){return u.setConfig(t),this},setControls:function(t){return u.setControls(t),this},setCurrentAudioTrack:function(t){u.setCurrentAudioTrack(t)},setCurrentCaptions:function(t){u.setCurrentCaptions(t)},setCurrentQuality:function(t){u.setCurrentQuality(t)},setFullscreen:function(t){return u.setFullscreen(t),this},setAllowFullscreen:function(t){return u.setAllowFullscreen(t),this},setMute:function(t){return u.setMute(t),this},setPip:function(t){return u.setPip(t),this},setPlaybackRate:function(t){return u.setPlaybackRate(t),this},setPlaylistItem:function(t,e){return u.setPlaylistItem(t,e),this},setCue},setVolume:function(t){return u.setVolume(t),this},load:function(t,e){return u.load(t,e),this},play:function(t){return u.play(t),this},pause:function(t){return u.pause(t),this},playToggl},seek:function(t,e){return u.seek(t,e),this},playlistItem:function(t,e){return u.playlistItem(t,e),this},playlistNext:function(t){return u.playlistNext(t),this},playlistPrev:function(t){return u.playlistPrev(t),this},next:function(t){return u.next(t),this},requestPip:function(t){return u.requestPip(t),this},castToggle:function(){return u.castToggle(),this},stopCasting:function(){return u.stopCasting(),this},createInstream:function(){return u.createInstream()},stop:function(){return u.stop(),this},resiz},addButto},removeButto},attachMedia:function(){return u.attachMedia(),this},detachMedi},isBeforeComplete:function(){return u.isBeforeComplete()},isBeforePlay:function(){return u.isBeforePlay()},setPlaylistItemCallbac},removePlaylistItemCallbac},getPlaylistItemPromise:function(t){return u.getItemPromise(t)},getFloatin},setFloatin},getChapters:function(){return u.getChapters()},getCurrentChapte},setChapter:function(t){return u.setChapter(t)}})}(0,r.Z)(x.prototype,{on:function(t,e,n){return w.on.call(this,t,e,n)},once:function(t,e,n){return w.IH.call(this,t,e,n)},of},trigge},getPlugi},addPlugi},registerPlugi},getAdBlock:function(){return!1},playAd:function(t){},pauseA},skipAd:function(){}}),n.p=(0,u.loadFrom)();var T(S);var Z=S,O=n(5882),A=n(6599),_=n(676),M=n(5592),F=n(6769),I=n(9025),B=k.ZP.extend,L={};L._=k.ZP,L.utils=(0,r.Z)(b.Z,{key:A.ZP,extend:B,scriptloader:_.ZP,rssparser:{parse:F.Z},tea:M.p,UI:O.ZP}),L.utils.css.style=L.utils.style,L.vid=I.Z;var D=L,N=n(7543),R=/^(?:on(?:ce)?|off|trigger)$/,},},},},},},},},Q=window;(0,r.Z)(Z,D);var };(0,r.Z)(X,D),T(X),"function"==typeof Q.define&&Q.define.amd&&Q.define([],(function(){return X}));var J=X;Q.jwplayer&&(J=Q.jwplayer);var $=J},348},1918:function(t,e,n){"use strict";n.d(e,{Gb:function(){return l},d3:function(){return f},lD:function(){return s},w0:function(){return c}});var r,i=n(386),o=[{configName:"clearkey",keyName:"org.w3.clearkey"},{configName:"widevine",keyName:"com.widevine.alpha"},{configName:"playready",keyName:"com.microsoft.playready"}],u=[],a={},c=function(t){return t.some((function(t){return Boolean(t.drm)||t.sources.some}))}))},s=function(t){return r||((Boolean(navigator.requestMediaKeySystemAccess)&&Boolean(window.MediaKeySystemAccess.prototype.getConfiguration)||Boolean(window.MSMediaKeys))&&(0,i.Z)(t)("drm")?(o.forEach})),r=Promise.all(u)):Promise.resolve())},l=function(t){return a[t]},}},2963:function(t,e,n){"use strict";n.d(e,{B:function(){return d}});var r=n(6593),i=n(8348),o=n(386),u=n(6042),a=n(1918),c=n(9025),s=function(t){void 0===t&&(t=['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']);var e=window.MediaSource;return!(!e||!e.isTypeSupported)&&(0,u.$6)(t}))},l=(0,u.sE)(r.B,(0,u.wB)({name:"html5"})),f=l.supports;l.supports=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0],i=e[1],u=f.apply(this,e);if(u&&r.drm&&"hls"===r.type){var a=(0,o.Z)(i),c=a("drm");if(c&&r.drm.fairplay){var s=window.WebKitMediaKeys;return s&&s.isTypeSupported&&s.isTypeSupported("com.apple.fps.1_0","video/mp4")}return c}return u},r.B.push({name:"shaka",support}}),r.B.unshift({name:"hlsjs",supports:function(t){return function(t){if(t.drm)return!1;var e=t.file.indexOf(".m3u8")>-1,n="hls"===t.type||"m3u8"===t.type;if(!e&&!n)return!1;var r=i.Browser.chrome||i.Browser.firefox||i.Browser.edge||i.Browser.ie&&11===i.Browser.version.major||i.OS.tizen,o=i.Browser.safari&&(!c.Z.canPlayType||!c.Z.canPlayType("application/vnd.apple.mpegURL")),u=i.OS.android&&!1===t.hlsjsdefault,a=i.Browser.safari&&Boolean(t.safarihlsjs);return s(t.mediaTypes||['video/mp4;codecs="avc1.4d400d,mp4a.40.2"'])&&(r||a||o)&&!u}(t)}});var d=r.B},2303:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r=n(7462),i=n(2963),o=n(12),u=n(670),a=n(2894),c={html5:function(){return n.e(250).then(function(t){var e=n(9181).default;return(0,u.Z)(e),e}.bind(null,n)).catch((0,a.Ep)(152))}};(0,r.Z)(c,{shaka:function(){return n.e(371).then(function(t){var e=n(9738).default;return(0,u.Z)(e),e}.bind(null,n)).catch((0,a.Ep)(154))},hlsj}});var s=c,};(0,r.Z)(l.prototype,{loa},providerSupport},choos}});var f=l;f.prototype.providerSupport};var d=f},514},38},701},56},659},6},559},109},956},473},746},457},961}},r={}i.m=n,i.},i.},i.f={},i.},i.},i.},t={},e="jwplayer:",i.},i.},i.nm},i.p="}();var o=i(576);window.jwplayer=o.default}();