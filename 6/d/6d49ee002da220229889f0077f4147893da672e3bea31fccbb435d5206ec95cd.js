/*!
   JW Player version 8.26.9
   Copyright (c) 2023, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.26.9/notice.txt
*/(()=>{var e,t,n={696:9128:4742:5191:5083:2894:623:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>ne,c2:()=>ee});var r=n(9128),i=n(2445),o=n(2894),s=n(393),a=n(8320),l=n(2963),c=n(670),u=n(4601),d=n(4446),p=n(8348);let h=null;const f=g=m=var y=n(1643),v=n(7263),b=n(676),w=n(8518),k=n(1241),j=n(8381);const C=P=x=var O=n(1918),S=n(6599),E=n(7010);const T=A=Z=_=M=F=I=B=L=N=var D=n(2303),$=n(7411),R=n(9888),q=n(4742);let z={removeItem(e){}};try{z=window.localStorage||z}catch(e){}const U=var H=n(7753),V=n(9918),G=n(328),W=n(4225),K=n(7683),Q=n(4609),X=n(5882);n(4671),n(9926);const J=Y=ee=te=function(e){this._events={},this.modelShim=new H.Z,this.modelShim._qoeItem=new $.Z,this.mediaShim={},this.setup=new N(this.modelShim),this.currentContainer=this.originalContainer=e,this.apiQueue=new r.Z(this,["load","play","pause","seek","stop","playlistItem","playlistNext","playlistPrev","next","preload","setAllowFullscreen","setConfig","setCurrentAudioTrack","setCurrentCaptions","setCurrentQuality","setFullscreen","setPip","requestPip","addButton","removeButton","castToggle","setMute","setVolume","setPlaybackRate","addCues","setCues","getCues","setPlaylistItem","stopCasting","getChapters","getCurrentChapter","setChapter","resize","setCaptions","setControls"],(()=>!0))};Object.assign(te.prototype,{on:G.ZP.on,once:G.ZP.once,off:G.ZP.off,trigger:G.ZP.trigger,initplayerDestroygetContainergetgetItemQoe(){return this.modelShim._qoeItem},getItemPromise:()=>null,setItemCallbackgetConfiggetCurrentCaptions(){return this.get("captionsIndex")},getWidth(){return this.get("containerWidth")},getHeight(){return this.get("containerHeight")},getMute(){return this.get("mute")},getProvider(){return this.get("provider")},getStategetAudioTracks:()=>null,getCaptionsList:()=>null,getQualityLevels:()=>null,getVisualQuality:()=>null,getCurrentQuality:()=>-1,getCurrentAudioTrack:getSafeRegion:isBeforeComplete:()=>!1,isBeforePlay:()=>!1,createInstream:()=>null,skipAd(){},getMediaElement(){},attachMedia(){},detachMedia(){}});const ne=te},4446:6391:7411:4601:8348:1643:(e,t,n)=>{"use strict";n.d(t,{$_:()=>C,$j:()=>_,Ax:()=>P,B1:()=>m,Bs:()=>ve,Ew:()=>N,FU:()=>D,Gj:()=>ge,HH:()=>z,Hy:()=>ne,Ib:()=>pe,Je:()=>R,Jl:()=>F,K5:()=>v,Kb:()=>r,Ms:()=>T,NZ:()=>Z,O1:()=>X,Ow:()=>se,P:()=>g,QF:()=>de,R2:()=>V,RF:()=>ke,Rc:()=>A,Rt:()=>j,SL:()=>he,Sv:()=>h,TJ:()=>G,U3:()=>b,UF:()=>ue,UW:()=>re,UZ:()=>Y,V$:()=>B,Vy:()=>l,WE:()=>x,Wp:()=>d,Z_:()=>fe,_5:()=>s,_B:()=>le,aM:()=>ee,aQ:()=>q,bc:()=>i,cM:()=>k,cq:()=>$,cy:()=>I,gO:()=>oe,gy:()=>Q,h7:()=>be,ik:()=>c,j0:()=>ae,jt:()=>ce,k3:()=>O,l5:()=>ye,nQ:()=>u,nv:()=>p,oZ:()=>W,ot:()=>f,pi:()=>L,pn:()=>w,qG:()=>we,r0:()=>a,rx:()=>J,s$:()=>M,sF:()=>ie,t6:()=>je,tP:()=>y,uL:()=>S,uT:()=>H,uc:()=>U,ug:()=>te,wh:()=>E,xQ:()=>o,xf:()=>me,yH:()=>K});const r="buffering",i="idle",o="complete",s="paused",a="playing",l="error",c="loading",u="stalled",d="drag",p="dragStart",h="dragEnd",f="click",g="doubleClick",m="over",y="move",v="enter",b="out",w=l,k="warning",j="adClick",C="mediaLoaded",P="adPause",x="adPlay",O="adSkipped",S="adTime",E="autostartNotAllowed",T=o,A="ready",Z="seek",_="beforePlay",M="beforeComplete",F="bufferFull",I="displayClick",B="playlistComplete",L="cast",N="mediaError",D="firstFrame",$="playAttempt",R="playAttemptFailed",q="seeked",z="setupError",U="state",H="bufferChange",V="time",G="ratechange",W="mediaType",K="volume",Q="mute",X="metadataCueParsed",J="meta",Y="levels",ee="levelsChanged",te="visualQuality",ne="controls",re="fullscreen",ie="resize",oe="playlistItem",se="playlist",ae="audioTracks",le="audioTrackChanged",ce="subtitlesTracks",ue="subtitlesTrackChanged",de="playbackRateChanged",pe="logoClick",he="captionsList",fe="captionsChanged",ge="providerFirstFrame",me="userAction",ye="instreamClick",ve="breakpoint",be="fullscreenchange",we="bandwidthEstimate",ke="float",je="chapter"},9918:7753:7941:6769:2557:393:7263:8320:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>v,s7:()=>f,T5:()=>y,YF:()=>h,_:()=>g,bx:()=>m});const r={none:!0,metadata:!0,auto:!0},i=var o=n(393),s=n(6053),a=n(2303),l=n(4446);const c=u=d=p=h=(e,t,n)=>{const r=e.getProviders(),o=e.get("preload"),s=e.get("jwStart"),a=Object.assign({},t);if(a.preload=i(t.preload,o),a.allSources=d(a,e),a.sources=p(a.allSources,r),a.sources.length)return a.file=a.sources[0].file,a.feedData=n,a.starttime=-1!==s&&e.get("generateSEOMetadata")?s:a.starttime,((a)},f=g=m=y=v=,6053:4101:1241:7164:(e,t,n)=>{"use strict";n.d(t,{MK:()=>s,Nq:()=>r,bX:()=>o});const r=i=function(e){const t=null==e||null==e.match?void 0:e.match(/\?(.*)/);if(!e||!t||!t[1])return{};const n={};return(t[1].includes("#")?t[1].split("#")[0]:t[1]).split("&").forEach((e=>{const[t,r=""]=e.split("="),i=decodeURIComponent(r);!function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(e),t)}(n,t)?n[t]=i:(Array.isArray(n[t])||(n[t]=[n[t]]),n[t].push(i))})),n},o=s=(e,t,n)=>{const r=e.name,o=Object.assign({},t,i(e.url));const s=document.createElement("div");s.id=`${n.id}_${r}`,s.className="jw-plugin jw-reset";const a=e.getNewInstance(n,o,s);return n.addPlugin(r,a),a}},7683:658:4609:6528:1628:12:670:6593:1384:6875:6886:328:2268:8381:974:5004:2799:4429:7543:8518:},549},126},9888:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getAbsolutePath:()=>s,isAbsolutePath:()=>o,parseDimension:()=>c,parseXML:()=>a,serialize:()=>l,timeFormat:()=>u,timeFormatAria:()=>d});var r=n(7034),i=n(6042);const ),s=(e,t)=>{if(t&&(0,r.exists)(t)||(t=document.location.href),!(0,r.exists)(e))return"";if(o(e))return e;const n=t.substring(0,t.indexOf("://")+3),i=t.substring(n.length,t.indexOf("/",n.length+1));let s;if(0===e.indexOf("/"))s=e.split("/");else{let r=t.split("?")[0];r=r.substring(n.length+i.length+1,r.lastIndexOf("/")),s=r.split("/").concat(e.split("/"))}const a=[];for(let e=0;e<s.length;e++)s[e]&&(0,r.exists)(s[e])&&"."!==s[e]&&(".."===s[e]?a.pop():a.push(s[e]));return`${n}${i}/${a.join("/")}`},},},),},}},156},623},177},67},295},588},6042:(e,t,n)=>{"use strict";n.d(t,{$6:()=>J,Cb:()=>oe,HD:()=>F,Kn:()=>x,P2:()=>Ce,S6:()=>S,UI:()=>L,U_:()=>Pe,Yj:()=>V,ZP:()=>Ae,_e:()=>me,a9:()=>Ee,ar:()=>ge,ce:()=>xe,cq:()=>de,dp:()=>ee,e1:()=>ue,e5:()=>ye,ei:()=>Se,hX:()=>Q,hj:()=>M,i2:()=>B,jn:()=>re,l7:()=>Oe,mf:()=>_,o8:()=>ie,qh:()=>Te,r3:()=>pe,sE:()=>W,u4:()=>q,vM:()=>le,wB:()=>fe,xV:()=>ne,yR:()=>H});var r=n(5004),i=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(e),t)};const o={},s=Array.prototype,a=Object.prototype,l=Function.prototype,c=s.slice,u=s.concat,d=a.toString,p=a.hasOwnProperty,h=s.map,f=s.reduce,g=s.forEach,m=s.filter,y=s.every,v=s.some,b=s.indexOf,w=Array.isArray,k=Object.keys,j=l.bind,C=window.isFinite,},},},},E=S,T=[];S(["Function","String","Number","Date","RegExp"]}));const A=T.Date,Z=T.RegExp,_=T.Function,M=T.Number,F=T.String,I=w},},},N=L,D="Reduce of empty array with no initial value",$=function(){},},},z=q,U=q,},},G=V,},K=W,},X=Q,},Y=J,e},t};T.Functio};const n},r},i},o},s},a},le=ae})),ce=ae})),u},d},p},he=pe,f},ge=function(e,t){return Q(e,fe(t))},me=function(e,t){return W(e,fe(t))},y},v},be=ve(te,2),w},ke=ve(we,{partial:ve},1),je=r.z,C},P},x},Oe=Object.assign},S},E},T),Ae={afte},all:J,any:V,before:te,bind:R,clon},collect:N,compac},constant:Ee,contains:pe,debounc},defaults:xe,defer:ke,delay:we,detect:K,difference:ye,each:S,every:Y,extend:Oe,filter:Q,find:W,findWhere:me,foldl:z,forEach:E,groupBy:le,has:P,identity:H,include:he,indexBy:ce,indexOf:de,inject:U,invert:Pe,isArray:I,isBoolean:re,isDate:A,isFinite:ne,isFunction:_,isNaN:B,isNul},isNumber:M,isObject:x,isRegExp:Z,isString:F,isUndefined:ie,isValidNumber:Te,keys:O,las},map:L,matches:fe,ma},memoiz},now:je,omi},once:be,partial:ve,pick:Se,pluc},property:oe,propertyO},reduce:q,rejec},resul},select:X,size:ee,some:G,sortedIndex:ue,throttle:Ce,where:ge,withou}}},703},902},660},422},992},467},244},576:(e,t,n)=>{"use strict";n.d(t,{default:()=>X});var r=n(1096),i=n.n(r);window.Promise||(window.Promise=i());var o=n(1569),s=n(6391),a=n(2963),l=n(670);const c={availableProviders:a.B,registerProvider:l.Z};var u=n(1241);c.registerPlugi};const d=c;var p=n(6601),h=n(4742),f=n(8348),g=n(623),m=n(1643),y=n(7411),v=n(328),b=n(4429),w=n(6042);let k=0;const },},};function x(e){const t=++k,n=e.id||`player-${t}`,r=new y.Z,i={};let o=j(this,e);r.tick("init"),e.setAttribute("data-jwplayer-id",n),Object.defineProperties(this,{id:{enumerable:!0,get:()=>n},uniqueId:{enumerable:!0,get:()=>t},plugins:{enumerable:!0,get:()=>i},_qoe:{enumerable:!0,get:()=>r},version:{enumerable:!0,get:()=>p.i},Events:{enumerable:!0,get:()=>v.ZP},utils:{enumerable:!0,get:()=>b.Z},_:{enumerable:!0,get:()=>w.ZP}}),Object.assign(this,{_events:{},set},remove(){return this.getPip()&&this.setPip(!1),P(this),o&&C(this,o),Object.keys(i).forEach})),this},q},addCues(e){return Array.isArray(e)&&o.addCues(e),this},getAudioTracks:()=>o.getAudioTracks(),getBuffer:()=>o.get("buffer"),getCaptions:()=>o.get("captions"),getCaptionsList:()=>o.getCaptionsList(),getConfig:()=>o.getConfig(),getContainer:()=>o.getContainer(),getControls:()=>o.get("controls"),getCues:()=>o.getCues(),getCurrentAudioTrack:()=>o.getCurrentAudioTrack(),getCurrentCaptions:()=>o.getCurrentCaptions(),getCurrentQuality:()=>o.getCurrentQuality(),getCurrentTime:()=>o.get("currentTime"),getDuration:()=>o.get("duration"),getEnvironment:()=>f,getFullscreen:()=>o.get("fullscreen"),getHeight:()=>o.getHeight(),getItemMet},getMute:()=>o.getMute(),getPercentViewable:()=>o.get("visibility"),getPip:()=>o.get("pip"),getPlaybackRate:()=>o.get("playbackRate"),getPlaylist:()=>o.get("playlist"),getPlaylistIndex:()=>o.get("item"),getPlaylistIt},getPosition:()=>o.get("position"),getProvider:()=>o.getProvider(),getQualityLevels:()=>o.getQualityLevels(),getSafeRegio),getState:()=>o.getState(),getStretching:()=>o.get("stretching"),getViewable:()=>o.get("viewable"),getVisualQuality:()=>o.getVisualQuality(),getVolum),getWidth:()=>o.getWidth(),setCaptions(e){return o.setCaptions(e),this},setConfig(e){return o.setConfig(e),this},setControls(e){return o.setControls(e),this},setCurrentAudioTrack(e){o.setCurrentAudioTrack(e)},setCurrentCaptions(e){o.setCurrentCaptions(e)},setCurrentQuali},setFullscreen(e){return o.setFullscreen(e),this},setAllowFullscreen(e){return o.setAllowFullscreen(e),this},setMute(e){return o.setMute(e),this},setPip(e){return o.setPip(e),this},setPlaybackRate(e){return o.setPlaybackRate(e),this},setPlaylistItem(e,t){return o.setPlaylistItem(e,t),this},setCu},setVolume(e){return o.setVolume(e),this},load(e,t){return o.load(e,t),this},play(e){return o.play(e),this},pause(e){return o.pause(e),this},playTogg},seek(e,t){return o.seek(e,t),this},playlistItem(e,t){return o.playlistItem(e,t),this},playlistNext(e){return o.playlistNext(e),this},playlistPrev(e){return o.playlistPrev(e),this},next(e){return o.next(e),this},requestPip(e){return o.requestPip(e),this},castToggle(){return o.castToggle(),this},stopCasting(){return o.stopCasting(),this},createInstream:()=>o.createInstream(),stop(){return o.stop(),this},resi},addButt},removeButt},getMediaElement:()=>o.getMediaElement(),attachMedia(){return o.attachMedia(),this},detachMed},isBeforeComplete:()=>o.isBeforeComplete(),isBeforePlay:()=>o.isBeforePlay(),setPlaylistItemCallba},removePlaylistItemCallba},getPlaylistItemPromise:e=>o.getItemPromise(e),getFloatin),setFloati},getChapters:()=>o.getChapters(),getCurrentChapte),setChapter:e=>o.setChapter(e)})}Object.assign(x.prototype,{on(e,t,n){return v.on.call(this,e,t,n)},once(e,t,n){return v.IH.call(this,e,t,n)},o},trigg},getPlugin(e){return this.plugins[e]},addPlug},registerPlug},getAdBlock:()=>!1,playAd(e){},pause},skipAd(){}}),n.p=(0,o.loadFrom)();const },},};E(S);const T=S;var A=n(5882),Z=n(6599),_=n(676),M=n(5592),F=n(6769),I=n(9025);const B=w.ZP.extend,L={};L._=w.ZP,L.utils=Object.assign(b.Z,{key:Z.ZP,extend:B,scriptloader:_.ZP,rssparser:{parse:F.Z},tea:M.p,UI:A.ZP}),L.utils.css.style=L.utils.style,L.vid=I.Z;const N=L;var D=n(7543);const $=/^(?:on(?:ce)?|off|trigger)$/,},},},},H=["getMediaElement"],},},W=window;Object.assign(T,N);const };Object.assign(K,N),E(K),"function"==typeof W.define&&W.define.amd&&W.define([],(function(){return K}));let Q=K;W.jwplayer&&(Q=W.jwplayer);const X=Q},348},191},296},230},514},38},7010:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const r=function(e,t){return e.location!==e.parent.location&&/isAMP/.test(t)}},56},659},6},559},109},956},473}},r={}i.m=n,i.},i.},i.f={},i.),i.),i.),e={},t="jwplayer:",i.},i.},i.nm),i.p=""})();var o=i(576);window.jwplayer=o.default})();