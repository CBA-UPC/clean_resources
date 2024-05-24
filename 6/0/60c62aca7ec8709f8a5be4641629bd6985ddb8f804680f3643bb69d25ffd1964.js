(()=>{const e="when-viewable",t="no-lazy-load",s="play-when-visible",i=e=>null===e,a=e=>i(e)||(e=>void 0===e)(e),r=e=>!a(e),o=e=>"boolean"==typeof e,A=e=>"number"==typeof e&&!isNaN(e),n=e=>"string"==typeof e,l=e=>Array.isArray(e),d=e=>"function"==typeof e,h="debug",p="info",u="table",g="warn",c="error";class y{#e;#t;#s;constructor(e,t,s){this.#e=e,this.#t=t,this.#s=s}#i=(e,t,s="",i)=>{const a={name:this.#e,tag:this.#t,level:e,type:t,ts:Date.now()/1e3,message:s,metadata:i};for(const e of this.#s)e(a)};debug=(e,...t)=>this.#i(20,h,e,t);info=(e,...t)=>this.#i(30,p,e,t);table=(e,...t)=>this.#i(30,u,void 0,[e,...t]);warn=(e,...t)=>this.#i(40,g,e,t);error=(e,...t)=>this.#i(50,c,e,t);tag=e=>new y(this.#e,e,this.#s)}class m{error;value;constructor(e,t){this.value=e,this.error=t}static value(e){return new m(e,void 0)}static error(e){return new m(void 0,e)}static tryCatch(e){try{return m.value(e())}catch(e){return m.error(e)}}get isError(){return!!this.error}get isSuccess(){return!this.error}onError=e=>(this.isError&&e(this.error),this);or=e=>this.isError?e:this.value;get=()=>{if(this.isError)throw this.error;return this.value}}const v=e=>e?e.split("&").reduce(((e,t)=>{try{const[s,i]=t.split("=").map(decodeURIComponent);s&&(e[s]=i)}catch{}return e}),{}):{},b=()=>m.tryCatch((()=>v(location.hash.replace(/^#/,"")))).value??{};m.tryCatch((()=>v(location.search.replace(/^\?/,"")))).value;let w=b();addEventListener("hashchange",(()=>{w=b()}));const f=(e,t)=>{const s=w,i=`hbv-${e}`;return Object.prototype.hasOwnProperty.call(s,i)?{found:!0,value:t(s[i]??"")}:{found:!1}},E=(e,t)=>{const s=((e,t)=>{try{return((e,t)=>e.getItem(t))(localStorage,t)}catch(e){return null}})(0,`hbv:${e}`);return i(s)?{found:!1}:{found:!0,value:t(s)}},M=e=>{const t=e=>""===e||(e=>!!["yes","true","1"].some((t=>0===t.localeCompare(e,void 0,{sensitivity:"accent"})))||!["no","false","0"].some((t=>0===t.localeCompare(e,void 0,{sensitivity:"accent"})))&&void 0)(e),s=e=>{const s=t(e);if(r(s))return!s};return((...e)=>{for(const t of e){const{found:e,value:s}=t();if(e)return s}})((()=>f(e,t)),(()=>f(`no-${e}`,s)),(()=>E(e,t)),(()=>E(`no-${e}`,s)))},C=(["prv","beta"].reduce(((e,t)=>M(t)??e),void 0),["prv","peek","gravity"].reduce(((e,t)=>M(t)??e),void 0)??!1),S={[h]:"#9C27B0",[p]:"#4CAF50",[g]:"#FF9800",[c]:"#F44336"},x=e=>{if(e.type===u&&console.table)console.table(...e.metadata);else{const t=(({type:e,name:t,tag:s})=>{const i=(e=>{if(!e)return"#607D8B";const t=Math.PI;return`hsl(${(e=>{let t=0;for(let s=0;s<e.length;s++)t=(t<<5)-t+e.charCodeAt(s),t|=0;return t})(e)*t%360}, 70%, 53%)`})(s);return{text:`%c${t}%c${e}%c${s}`,arguments:["background: linear-gradient(#4D4D4D, #5D5D5D); color: #fff; padding: 2px 4px; border-top-left-radius: 4px; border-bottom-left-radius: 4px;",`background: ${S[e]??"#000"}; color: #fff; padding: 2px 4px;`,`background: ${i}; color: #fff; padding: 2px 2px; border-top-right-radius: 4px; border-bottom-right-radius: 4px;`]}})({type:e.type,name:e.name,tag:e.tag});e.type===h?console.debug(t.text,...t.arguments,e.message,...e.metadata):console.log(t.text,...t.arguments,e.message,...e.metadata)}},B=e=>{let t;return(...s)=>(t??=m.tryCatch((()=>e(...s))),t.get())},R=(new class{#a;provide=B((e=>{this.#a=e}));get value(){return this.#a}}).value,H=new y("HUBVISOR","wrapper",(()=>{const e=[];return R&&e.push(R),C&&e.push(x),e})());class L{#r=[];#o=!1;get disposed(){return this.#o}constructor(e=[]){this.#r.push(...e)}push=(e,...t)=>{this.#o?this.#A([e,...t]):this.#r.push(e,...t)};dispose=()=>{this.#o||(this.#o=!0,this.#A(this.#r),this.#r.length=0)};#A=e=>{for(let t=e.length-1;t>=0;--t)try{e[t]()}catch{}}}const I=()=>{let e,t;return{promise:new Promise(((s,i)=>{e=s,t=i})),resolve:e,reject:t}},{debug:W,error:N}=H.tag("outstream-player:ad-controller"),k=B((()=>((e,t=document)=>new Promise(((s,i)=>{const a=t.createElement("script");a.async=!0,a.src=e,a.addEventListener("load",(()=>s())),a.addEventListener("error",(e=>i(e))),t.head.append(a)})))("https://imasdk.googleapis.com/js/sdkloader/ima3.js")));class P{container;adDisplayContainer;isAdDisplayContainerInitialized=!1;adsLoader;adsManager;whenAdsManagerReady=I();_muted=!0;disposables=new L;options;delegate;constructor(e,t){this.container=e,this.options=t,this.disposables.push((()=>W("disposed"))),this._setupIfNeeded()}dispose=()=>{this._destroyAdsManagerIfNeeded(),this.disposables.dispose()};get muted(){return this._muted}set muted(e){this._muted!==e&&(this._muted=e,this._updateVolume())}requestAds=e=>{if(this.adsManager)throw new Error("An ads manager is already available");if(!this.adsLoader)throw new Error("Impossible to request ads on disposed ad controller");W("ads requested",e),this._muted=e.willPlayMuted??!0;const t=this._buildAdsRequest(e);this.adsLoader.requestAds(t)};start=async(e,t)=>{if(this._initializeAdDisplayContainerIfNeeded(),await this.whenAdsManagerReady.promise,!this.adsManager)return N("cannot start without ads manager");this.adsManager.init(e,t,google.ima.ViewMode.NORMAL),this.adsManager.start()};resize=(e,t)=>{this.adsManager?.resize(e,t,google.ima.ViewMode.NORMAL)};notifyContentComplete(){this.adsLoader?.contentComplete()}_updateVolume=()=>{this.adsManager?.setVolume(this._muted?0:1)};_setupIfNeeded=()=>{this.adDisplayContainer||(W("creating ad container"),google.ima.settings.setLocale(this.options?.locale??document.documentElement.lang),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setNumRedirects(10),this.isAdDisplayContainerInitialized=!1,this.adDisplayContainer=new google.ima.AdDisplayContainer(this.container),this.disposables.push((()=>{this.adDisplayContainer?.destroy(),this.adDisplayContainer=void 0})),W("ad container ready")),this.adsLoader||(W("creating ads loader"),this.adsLoader=new google.ima.AdsLoader(this.adDisplayContainer),this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,this.onAdsManagedLoaded,!1),this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,this.onAdsLoaderError,!1),this.disposables.push((()=>{this.adsLoader?.destroy(),this.adsLoader=void 0})),W("ads loader ready"))};_initializeAdDisplayContainerIfNeeded=()=>{this.adDisplayContainer&&!this.isAdDisplayContainerInitialized&&(W("initializing ads display container"),this.isAdDisplayContainerInitialized=!0,this.adDisplayContainer.initialize(),W("ads display container initialized"))};_destroyAdsManagerIfNeeded=()=>{this.adsManager&&(this.adsManager.destroy(),this.adsManager=void 0,W("ads manager released"))};_buildAdsRequest=({vastUrl:e,vastXml:t,willAutoplay:s,willPlayMuted:i,targetWidth:a,targetHeight:o})=>{const A=new google.ima.AdsRequest;return r(s)&&A.setAdWillAutoPlay(s),r(i)&&A.setAdWillPlayMuted(i),t?A.adsResponse=t:e&&(A.adTagUrl=e),A.linearAdSlotWidth=a,A.linearAdSlotHeight=o,A};onAdsManagedLoaded=e=>{this.adsManager=e.getAdsManager({get currentTime(){return 0},set currentTime(e){},get duration(){return 0},set duration(e){}}),this._updateVolume(),this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,this.onAdsManagerError),this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,this.onAdsManagedContentPauseRequested),this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,this.onAdsManagerContentResumeRequested),this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,this.onAdsManagerAllAdsCompleted),this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS,this.onAdsManagerProgress),this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION,this.onAdsManagerImpression),this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE,this.onAdsManagerFirstQuartile),this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT,this.onAdsManagerMidpoint),this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE,this.onAdsManagerThirdQuartile),this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE,this.onAdsManagerComplete),this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED,this.onAdsManagerAdPaused),this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED,this.onAdsManagerAdStarted),W("ads manager ready"),this.delegate?.adControllerAdLoadComplete?.(this,null),this.whenAdsManagerReady.resolve()};onAdsLoaderError=e=>{const t=e.getError();N("ads loader error",t),this._destroyAdsManagerIfNeeded(),this.delegate?.adControllerAdLoadComplete?.(this,t)};onAdsManagerError=e=>{const t=e.getError();N("ads manager error",t),this._destroyAdsManagerIfNeeded(),this.delegate?.adControllerAdLoadComplete?.(this,t)};onAdsManagedContentPauseRequested=()=>{W("content pause requested"),this.delegate?.adControllerAdWillStart?.(this)};onAdsManagerContentResumeRequested=()=>{W("content resume requested"),this.delegate?.adControllerAdDidStop?.(this)};onAdsManagerAllAdsCompleted=()=>{W("all ads completed"),this._destroyAdsManagerIfNeeded(),this.delegate?.adControllerAdsComplete?.(this)};onAdsManagerProgress=e=>{const{currentTime:t,duration:s}=e.getAdData(),i=Math.min(100*t/s,100),a=isNaN(i)?100:i;this.delegate?.adControllerAdProgress?.(this,a)};onAdsManagerImpression=()=>{this.delegate?.adControllerEvent?.(this,"impression",void 0)};onAdsManagerFirstQuartile=()=>{this.delegate?.adControllerEvent?.(this,"first-quartile",void 0)};onAdsManagerMidpoint=()=>{this.delegate?.adControllerEvent?.(this,"midpoint",void 0)};onAdsManagerThirdQuartile=()=>{this.delegate?.adControllerEvent?.(this,"third-quartile",void 0)};onAdsManagerComplete=()=>{this.delegate?.adControllerEvent?.(this,"complete",void 0)};onAdsManagerAdStarted=()=>{this.delegate?.adControllerAdStarted?.(this)};onAdsManagerAdPaused=()=>{W("ad has been paused"),this.muted||(this.muted=!0,this.adsManager?.resume(),this.delegate?.adPausedWithVolume?.(this))}}const D="autoplay-policy:no-autoplay",V="autoplay-policy:autoplay-with-sound",{debug:z}=H.tag("outstream-player:autoplay"),T=async(e,t)=>{z(`start testing ${t}...`,e);try{return await e.play(),z(`${t} success!`),e.pause(),t}catch(e){throw z(`${t} failed`,e),e}},Z=(e,t,s)=>{const i=e.getElementById(t)??((e,t)=>{const s=e.createElement("style");return s.id=t,e.head.append(s),s})(e,t);return(e=>{for(;e.firstChild;)e.firstChild.remove()})(i),i.append(document.createTextNode(s)),i},O=(B(Z),e=>{const t=e?.ownerDocument.defaultView;return!!t&&e instanceof t.HTMLElement}),G=(/Firefox\//i.test(navigator.userAgent),(e,t,s,i)=>(e.addEventListener(t,s,i),B((()=>e.removeEventListener(t,s,i))))),_=(e,t,s,i)=>{const a=G(e,t,(e=>{a(),s(e)}),i);return a},Q="http://www.w3.org/2000/svg",F=(e,t,s)=>{const i=document.createDocumentFragment();for(const e of t){if(a(e)||""===e)continue;if(n(e)||A(e)||o(e)){i.append(document.createTextNode(`${e}`));continue}if(l(e)){F(i,e,s);continue}if(e instanceof Element){i.append(e);continue}const t=j(e,s);t&&i.append(t)}e.appendChild(i)},j=(e,t)=>{if(n(e.type)){"svg"===e.type.toLowerCase()&&(t={...t,ns:Q});const{children:s,...i}=e.props,a=((e,t)=>t.ns?document.createElementNS(t.ns,e):document.createElement(e))(e.type,t);return((e,t)=>{for(const[s,i]of Object.entries(t))e.setAttribute("className"===s?"class":s,i)})(a,i),F(a,s,t),a}{const s=e.type(e.props);return j(s,t)}},U=(e,t,...s)=>({type:e,props:{...t,children:s}}),Y=e=>{const t=j(e,{ns:void 0});if(O(t))return t;throw new Error("vnode does not render to HTMLElement")},{debug:X,warn:$}=H.tag("outstream-player:video-player"),q="video-player-state:stopped",J="video-player-state:playing";class K{_progress=0;disposables=new L;playerElements;state=q;delegate;constructor(e){this._setupStyles(e),this.disposables.push((()=>X("disposed"))),X("creating player elements"),this.playerElements=(()=>{const e=Y(U("div",{class:"ad-container"})),t=Y(U("div",{class:"progress"})),s=Y(U("div",{class:"btn-play hidden"},U("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},U("g",null,U("path",{d:"M6,4l12,8L6,20V4z"}))),U("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},U("path",{d:"M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38 C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74C3,7.65,3.03,7.57,3.07,7.49 C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"})))),i=Y(U("div",{class:"btn-volume on hidden"},U("svg",{class:"on",xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"},U("path",{d:"M126,192H56a8,8,0,0,0-8,8V312a8,8,0,0,0,8,8h69.65a15.93,15.93,0,0,1,10.14,3.54l91.47,74.89A8,8,0,0,0,240,392V120a8,8,0,0,0-12.74-6.43l-91.47,74.89A15,15,0,0,1,126,192Z",style:"fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"}),U("path",{d:"M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64",style:"fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"}),U("path",{d:"M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112",style:"fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"}),U("path",{d:"M416,416c30-46,48-91.43,48-160S446,143,416,96",style:"fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"})),U("svg",{class:"off",xmlns:"http://www.w3.org/2000/svg",width:"512",height:"512",viewBox:"0 0 512 512"},U("line",{x1:"416",y1:"432",x2:"64",y2:"80",style:"fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"}),U("path",{d:"M224,136.92v33.8a4,4,0,0,0,1.17,2.82l24,24a4,4,0,0,0,6.83-2.82V120.57a24.53,24.53,0,0,0-12.67-21.72,23.91,23.91,0,0,0-25.55,1.83,8.27,8.27,0,0,0-.66.51l-31.94,26.15a4,4,0,0,0-.29,5.92l17.05,17.06a4,4,0,0,0,5.37.26Z"}),U("path",{d:"M224,375.08l-78.07-63.92A32,32,0,0,0,125.65,304H64V208h50.72a4,4,0,0,0,2.82-6.83l-24-24A4,4,0,0,0,90.72,176H56a24,24,0,0,0-24,24V312a24,24,0,0,0,24,24h69.76l91.36,74.8a8.27,8.27,0,0,0,.66.51A23.93,23.93,0,0,0,243.63,413,24.49,24.49,0,0,0,256,391.45V341.28a4,4,0,0,0-1.17-2.82l-24-24a4,4,0,0,0-6.83,2.82ZM125.82,336Z"}),U("path",{d:"M352,256c0-24.56-5.81-47.88-17.75-71.27a16,16,0,0,0-28.5,14.54C315.34,218.06,320,236.62,320,256q0,4-.31,8.13a8,8,0,0,0,2.32,6.25l19.66,19.67a4,4,0,0,0,6.75-2A146.89,146.89,0,0,0,352,256Z"}),U("path",{d:"M416,256c0-51.19-13.08-83.89-34.18-120.06a16,16,0,0,0-27.64,16.12C373.07,184.44,384,211.83,384,256c0,23.83-3.29,42.88-9.37,60.65a8,8,0,0,0,1.9,8.26l16.77,16.76a4,4,0,0,0,6.52-1.27C410.09,315.88,416,289.91,416,256Z"}),U("path",{d:"M480,256c0-74.26-20.19-121.11-50.51-168.61a16,16,0,1,0-27,17.22C429.82,147.38,448,189.5,448,256c0,47.45-8.9,82.12-23.59,113a4,4,0,0,0,.77,4.55L443,391.39a4,4,0,0,0,6.4-1C470.88,348.22,480,307,480,256Z"})))),a=(e=>{const t=j(e,{ns:Q});if(t instanceof SVGElement)return t;throw new Error("vnode does not render to SVGElement")})(U("svg",{class:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 540.06 540.06"},U("path",{d:"M277.75,563.63,380.9,460.48l18.7-18.69,57.73-57.74,53.12-53.12,41.94,41.94-52.48,52.49-19.69,19.69,74,74,22.24-22.24L679.64,393.54a281.27,281.27,0,0,1,35.24-29.86l12.63-9C679.53,279.69,595.6,230,500,230c-149.13,0-270,120.9-270,270a269.52,269.52,0,0,0,15.75,91A269.15,269.15,0,0,0,277.75,563.63Z",transform:"translate(-229.97 -229.97)"}),U("path",{d:"M722.25,434.82,620.91,536.16,488,669.07l-41.94-41.94,69.31-69.32-74-74-22.26,22.27h0l-98.79,98.8a281.27,281.27,0,0,1-35.24,29.86l-13.31,9.52C319.68,719.84,404,770,500,770c149.13,0,270-120.9,270-270a269.54,269.54,0,0,0-16.16-92.2A269.58,269.58,0,0,0,722.25,434.82Z",transform:"translate(-229.97 -229.97)"}))),r=Y(U("div",{class:"hbv-player"},e,s,t,a,i));return t.style.transition="width 0.3s linear",{player:r,adContainer:e,playButton:s,progress:t,volumeButton:i,logo:a}})(),e.append(this.playerElements.player),this.disposables.push((()=>this.playerElements.player.remove()),G(this.playerElements.volumeButton,"click",(()=>{this.delegate?.videoPlayerVolumeClicked?.(this)})),G(this.playerElements.playButton,"click",(()=>{this.delegate?.videoPlayerPlayClicked?.(this)})),(()=>this.stop())),X("player elements ready")}_setupStyles=e=>{X("inserting player styles");const t=e.ownerDocument;if(!t)throw new Error("player container must be part of a document in order for player to work");Z(t,"hbv-outstream-styles",".hbv-player{background:#000;height:100%;overflow:hidden;position:relative}.hbv-player .hidden{display:none}.hbv-player .progress{background:#09c;bottom:0;height:4px;left:0;margin-bottom:0;position:absolute;width:0}.hbv-player .logo{bottom:12px;display:none;height:24px;position:absolute;right:8px;width:24px}.hbv-player .logo path{fill:#09c}.hbv-player .btn-volume{border:2px solid #09c;border-radius:50%;bottom:8px;font-size:0;height:16px;padding:2px;position:absolute;right:0;transition:transform .2s ease,background .2s ease;width:16px}.hbv-player .btn-volume:hover{background:hsla(0,0%,100%,.3);transform:scale(1.05)}.hbv-player .btn-volume:active{transform:scale(.95)}.hbv-player .btn-volume svg{height:100%;width:100%}.hbv-player .btn-volume svg.on *{stroke:#09c!important}.hbv-player .btn-volume svg.off *{stroke:#09c!important;fill:#09c!important}.hbv-player .btn-volume.off>.on,.hbv-player .btn-volume.on>.off{display:none}@media screen and (min-width:481px){.hbv-player .btn-volume{bottom:auto;height:32px;right:8px;top:8px;width:32px}}.hbv-player .btn-play,.hbv-player .btn-replay{height:112px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:transform .2s ease;width:112px}.hbv-player .btn-play svg,.hbv-player .btn-replay svg{height:100%;width:100%}.hbv-player .btn-play svg path,.hbv-player .btn-replay svg path{fill:#fff!important;transition:fill .2s ease}.hbv-player .btn-play>svg:nth-child(2),.hbv-player .btn-replay>svg:first-child{display:none}@media screen and (min-width:481px){.hbv-player .btn-play:hover{transform:scale(1.02) translate(-50%,-50%)}.hbv-player .btn-play:hover svg path{fill:#09c!important}.hbv-player .btn-play:active{transform:scale(.99) translate(-50%,-50%)}.hbv-player .btn-play:active svg path{fill:#006080!important}}"),X("player styles ready")};get adContainer(){return this.playerElements.adContainer}get rootElement(){return this.playerElements.player}get progress(){return this._progress}set progress(e){this._progress=e,this.playerElements.progress.style.width=`${e}%`}get showMuted(){return this.playerElements.volumeButton.classList.contains("off")}set showMuted(e){this.playerElements.volumeButton.classList.toggle("off",e),this.playerElements.volumeButton.classList.toggle("on",!e)}get volumeButtonHidden(){return!this.playerElements.volumeButton.classList.contains("hidden")}set volumeButtonHidden(e){this.playerElements.volumeButton.classList.toggle("hidden",e)}get playButtonHidden(){return!this.playerElements.playButton.classList.contains("hidden")}set playButtonHidden(e){this.playerElements.playButton.classList.toggle("hidden",e)}get playButtonStyle(){return this.playerElements.playButton.classList.contains("btn-play")?"btn-play":"btn-replay"}set playButtonStyle(e){const t="btn-play"===e;this.playerElements.playButton.classList.toggle("btn-play",t),this.playerElements.playButton.classList.toggle("btn-replay",!t)}start=()=>{this._ensureReady("start"),this.state!==q&&($("playback session is already in progress; stopping it first before starting"),this.stop()),X("start playback"),this.state=J,this.delegate?.videoPlayerResumed?.(this),this.stop()};stop=()=>{this._ensureReady("stop"),this.state!==q&&(X("stop playback"),this.state=q,this.delegate?.videoPlayerStopped?.(this))};pause=()=>{this._ensureReady("pause"),this.state===J&&(X("pause playback"),this.state="video-player-state:paused",this.delegate?.videoPlayerPaused?.(this))};resume=()=>{this._ensureReady("resume"),this.state!==q&&this.state!==J&&(X("resume playback"),this.state=J,this.delegate?.videoPlayerResumed?.(this))};dispose=()=>{this.disposables.dispose()};_ensureReady=e=>{this.disposables.disposed&&$(`${e} was called and VideoPlayer was disposed`)}}const ee=(e,t,s)=>{let i,a=e.clientWidth,r=e.clientHeight;const o=new ResizeObserver((()=>{let o=!1;a!==e.clientWidth&&(a=e.clientWidth,o=!0),s.handleHeightResize&&r!==e.clientHeight&&(r=e.clientHeight,o=!0),o&&(i||(i=requestAnimationFrame((()=>{i=void 0,t(e.clientWidth,e.clientHeight)}))))}));return o.observe(e),()=>{o.disconnect(),i&&(cancelAnimationFrame(i),i=void 0)}},te=e=>{const t=B((()=>{e.duration&&e.element.style.removeProperty("transition"),e.done?.()}));if(e.duration){const s=Object.keys(e.properties).map((t=>`${t} ${e.duration}s ease`)).join(",");e.element.style.setProperty("transition",s),_(e.element,"transitionend",t),_(e.element,"transitioncancel",t)}for(const[t,s]of Object.entries(e.properties))e.element.style.setProperty(t,s);e.duration||t()};class se{vastUrl;vastXml;isReplayable;result=I();willAutoplay=!1;muted=!0;isAdLoaded=!1;isVisible=!1;adStarted=!1;isContentComplete=!1;isAdsComplete=!1;isReplaying=!1;error;constructor(e,t,s=!1){this.vastUrl=e,this.vastXml=t,this.isReplayable=s}restartSession=()=>{this.isAdLoaded=!1,this.isVisible=!1,this.adStarted=!1,this.isContentComplete=!1,this.isAdsComplete=!1};get isComplete(){return this.isContentComplete&&this.isAdsComplete}finalize=()=>{this.error?this.result.reject(this.error):this.result.resolve()}}const ie=(()=>{if(window.ontouchstart)return!0;const e=["-webkit-","-moz-","-o-","-ms-",""].map((e=>`(${e}touch-enabled)`)).join(", ");return matchMedia(e).matches})(),{debug:ae,warn:re,error:oe}=H.tag("outstream-player:player-controller"),Ae=[0,1,2];class ne{container;adController;options;player;currentSession;disposables=new L;isMouseOver=!1;volumeStrategy=0;autoplayPolicy=D;isExpanded=!1;transitionDuration=.4;intersectionObserver;defaultMaxWidth=602;constructor(t,i){if(i.targetWidth<=0)throw new Error("PlayerControllerOptions.targetWidth must be greater than zero");if(i.targetHeight<=0)throw new Error("PlayerControllerOptions.targetHeight must be greater than zero");this.disposables.push((()=>ae("disposed"))),this.container=t,this.options=i,this.volumeStrategy=i.volumeStrategy??this.volumeStrategy,this.player=new K(t),this.player.delegate=this,this.adController=new P(this.player.adContainer,i),this.adController.delegate=this,this.player.rootElement.style.opacity="0";const{outerContainer:a}=this;a.style.width="100%",a.style.height="0px",a.style.display="block",a.removeAttribute("width"),a.removeAttribute("height");const r=this.options.expand===e||this.options.expand===s?`-${this.targetSize.height/2}px`:"0px";this.intersectionObserver=new IntersectionObserver(this.onVisibilityChanged,{rootMargin:`0px 0px ${r} 0px`}),this.setupEventListeners()}dispose=()=>{this.adController.dispose(),this.player.dispose(),this.disposables.dispose(),this.intersectionObserver?.disconnect(),this.intersectionObserver=void 0};retrieveFitHeight=()=>{if(!d(this.options.fitHeight))return this.options.fitHeight;try{return this.options.fitHeight()}catch(e){ae("Failed to dynamically retrieve fitHeight",e)}};get targetSize(){const e=this.options.maxWidth??this.defaultMaxWidth,t=e&&this.container.clientWidth>e?e:this.container.clientWidth,s=this.options.targetRatio??16/9,i=this.retrieveFitHeight();return{width:t,height:Math.min(t/s,i??Number.MAX_VALUE)}}get outerContainer(){const e=this.container.ownerDocument?.defaultView?.frameElement;return e||this.container}get shouldExpandOnceVisible(){return(this.options.expand&&this.options.expand!==t)??!0}isBodyElement=e=>{const t=e.ownerDocument.defaultView;return!!t&&e instanceof t.HTMLBodyElement};setExpanded=(e,t)=>{const s=this.targetSize,i=this.options.maxWidth??this.defaultMaxWidth;if((i&&this.container.clientWidth>i||this.isBodyElement(this.container))&&(this.container.style.height=`${s.height}px`,this.container.style.width=`${s.width}px`,this.container.style.marginLeft="auto",this.container.style.marginRight="auto"),ae(e?`expanding (${s.width}x${s.height})`:"collapsing"),this.isExpanded===e)return ae(`Already ${e?"expanded":"collapsed"}, skipping transition`),t?.();this.isExpanded=e;const a=e?"1":"0",r=e?`${s.height}px`:"0px";te({element:this.player.rootElement,properties:{opacity:a},duration:this.transitionDuration,done:()=>{ae((e?"expand":"collapse")+" transition is over"),t?.()}}),te({element:this.outerContainer,duration:this.transitionDuration,properties:{height:r}})};expandIfNeeded=e=>this.setExpanded(!0,e);collapseIfNeeded=e=>this.setExpanded(!1,e);finalizeSessionIfNeeded=()=>{if(!this.currentSession?.isComplete)return;ae("finalizing current session");const e=this.currentSession;this.collapseIfNeeded((()=>{this._tryCallEventListener((e=>e("playbackComplete",void 0))),e.finalize()})),this.currentSession=void 0};setupEventListeners=()=>{this.disposables.push(ee(this.player.rootElement,((e,t)=>{this.isExpanded&&this.adController.resize(e,t)}),{handleHeightResize:!1}),ee(this.container,(()=>{this.isExpanded&&this.resizeIfNeeded()}),{handleHeightResize:!!this.options.hasDynamicHeight}),G(this.container,"mouseenter",(()=>{this.isMouseOver=!0,this.updateVolumeIfNeeded()})),G(this.container,"mouseleave",(()=>{this.isMouseOver=!1,this.updateVolumeIfNeeded()})))};markVisible=()=>{if(!this.currentSession)return this.currentSessionMustBeAvailable();ae("player is visible, starting if needed"),this.intersectionObserver?.unobserve(this.outerContainer),this.currentSession.isVisible=!0,this.startIfNeeded()};onVisibilityChanged=e=>{e.some((e=>e.target===this.outerContainer&&e.isIntersecting))&&(this.markVisible(),this.options.expand===s&&this.play())};setupVisibilityObserverIfNeeded=()=>{if(!this.shouldExpandOnceVisible)return;const{intersectionObserver:e,outerContainer:t}=this;if(!e)return this.markVisible();ae("Waiting for player visibility before starting player"),e.observe(t),this.disposables.push((()=>e.unobserve(t)))};resizeIfNeeded=()=>{const{width:e,height:t}=this.targetSize;this.outerContainer.style.height=`${t}px`,this.adController.resize(e,t)};get shouldMuteAd(){switch(this.volumeStrategy){case 0:return!0;case 1:return!(!ie&&this.isMouseOver&&this.options.hasRollover);case 2:return!1}}get shouldShowMuted(){switch(this.volumeStrategy){case 0:case 1:return!0;case 2:return!1}}updateVolumeIfNeeded=()=>{this.adController.muted=this.shouldMuteAd,this.player.showMuted=this.shouldShowMuted};currentSessionMustBeAvailable=()=>{re("Can't play while session is unavailable")};startIfNeeded=()=>{if(!this.currentSession)return this.currentSessionMustBeAvailable();if(!this.currentSession.isAdLoaded)return;if(this.options.expand!==s&&this.shouldExpandOnceVisible&&!this.currentSession.isVisible)return;const e=this.autoplayPolicy!==D;if(this.isMouseOver=!1,this.player.playButtonStyle="btn-play",this.player.playButtonHidden=e,this.currentSession.isReplaying)return this.play();this.options.expand===s?this.expandIfNeeded():this.expandIfNeeded((()=>{e&&this.play()}))};retrieveVolumeStrategy=()=>this.options.hasRollover&&this.autoplayPolicy===V&&!ie&&this.currentSession?.adStarted?1:2===this.volumeStrategy&&this.autoplayPolicy===V||this.autoplayPolicy===D?2:0;play=()=>{if(!this.currentSession)return this.currentSessionMustBeAvailable();const{width:e,height:t}=this.targetSize;this.player.volumeButtonHidden=!1,this.player.playButtonHidden=!0,this.volumeStrategy=this.retrieveVolumeStrategy(),this.updateVolumeIfNeeded(),this.player.start(),this.adController.start(e,t)};_tryCallEventListener=e=>{if(this.options.onEvent)try{e(this.options.onEvent)}catch(e){oe("failed to call delegate",e)}};playOutstream=async({vastUrl:e,vastXml:t})=>{if(this.currentSession)throw new Error("multiple playback sessions cannnot be started at the same time on the same player");if(!e&&!t)throw new Error("Either vastUrl or vastXml is expected to be defined");ae("outstream session will start",this.options),this.currentSession=new se(e,t,this.options.isReplayable),this.autoplayPolicy=await(async()=>{const e=(()=>{const e=document.createElement("video"),t=document.createElement("source");return t.src="data:video/mp4;base64,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",e.setAttribute("playsinline","true"),e.append(t),e})();try{return await T(e,V)}catch{e.volume=0,e.muted=!0}try{return await T(e,"autoplay-policy:autoplay-muted")}catch{}return D})();const s=this.autoplayPolicy!==D,i=this.shouldMuteAd,{targetWidth:a,targetHeight:r}=this.options;return this.currentSession.willAutoplay=s,this.adController.requestAds({vastUrl:e,vastXml:t,willAutoplay:s,willPlayMuted:i,targetWidth:a,targetHeight:r}),this.setupVisibilityObserverIfNeeded(),this.currentSession.result.promise};replayOutstream=()=>{if(!this.currentSession)return;ae("outstream session will replay");const e=this.shouldMuteAd,{targetWidth:t,targetHeight:s}=this.options,{willAutoplay:i,vastUrl:a,vastXml:r}=this.currentSession;this.adController.requestAds({vastUrl:a,vastXml:r,willAutoplay:i,willPlayMuted:e,targetWidth:t,targetHeight:s})};adControllerAdLoadComplete=(e,t)=>{t?(ae("ads failed to load",t),this.currentSession&&(this.currentSession.isAdsComplete=!0,this.currentSession.isContentComplete=!0,this.currentSession.error=t),this.finalizeSessionIfNeeded(),this._tryCallEventListener((e=>e("error",t)))):(ae("ads ready"),this.currentSession&&(this.currentSession.isAdLoaded=!0),this.startIfNeeded())};adControllerAdWillStart=()=>{this.player.pause()};adControllerAdDidStop=()=>{this.player.resume()};adControllerAdProgress=(e,t)=>{this.player.progress=t};adControllerAdStarted=()=>{this.currentSession&&(this.currentSession.adStarted=!0)};adPausedWithVolume=()=>{this.volumeStrategy=0};adControllerAdsComplete=()=>{ae("all ads completed"),this.currentSession&&(this.currentSession.isAdsComplete=!0,this.currentSession.isReplaying=!1,this.currentSession.isReplayable?(this.player.playButtonStyle="btn-replay",this.player.playButtonHidden=!1,this.player.progress=0):this.finalizeSessionIfNeeded())};adControllerEvent=(e,t)=>{this._tryCallEventListener((e=>e(t,void 0)))};videoPlayerPlayClicked=()=>{this.currentSession?.isAdsComplete&&this.currentSession.isReplayable?(this.currentSession.restartSession(),this.currentSession.isReplaying=!0,this.replayOutstream()):this.play()};videoPlayerStopped=()=>{ae("content will stop"),this.adController.notifyContentComplete(),this.currentSession&&(this.currentSession.isContentComplete=!0,this.finalizeSessionIfNeeded())};videoPlayerVolumeClicked=()=>{ae("volume was toggled"),0===this.volumeStrategy||1===this.volumeStrategy?this.volumeStrategy=2:2===this.volumeStrategy&&(ie?this.volumeStrategy=0:this.options.hasRollover?this.volumeStrategy=1:this.volumeStrategy=0),this.updateVolumeIfNeeded()}}const le=new DOMParser;window.HbvPlayer={playOutstream:async(a,r)=>{if(!O(a))throw new Error("container must be an HTMLElement");const h=(a=>{if(!(e=>"object"==typeof e&&!l(e)&&!i(e))(a))throw new Error("Expected PlayerOptions to be an object");const r=n(a.vastUrl)?a.vastUrl:void 0,h=n(a.vastXml)?a.vastXml:void 0;if(!r&&!h)throw new Error("PlayerOptions should contain either vastUrl or vastXml");const p=A(a.targetWidth)?a.targetWidth:640,u=A(a.targetHeight)?a.targetHeight:360,g=A(a.fitHeight)||d(a.fitHeight)?a.fitHeight:void 0,c=o(a.hasDynamicHeight)?a.hasDynamicHeight:void 0,y=!o(a.hasRollover)||a.hasRollover;return{vastUrl:r,vastXml:h,targetWidth:p,targetHeight:u,maxWidth:A(a.maxWidth)?a.maxWidth:void 0,targetRatio:A(a.targetRatio)?a.targetRatio:void 0,fitHeight:g,hasDynamicHeight:c,expand:(i=>i===t||i===e||"when-visible"===i||i===s)(a.expand)?a.expand:void 0,onEvent:(e=>d(e))(a.onEvent)?a.onEvent:void 0,dealId:A(a.dealId)||n(a.dealId)?a.dealId:"no_dealId",seatId:A(a.seatId)||n(a.seatId)?a.seatId:"",advertiserId:n(a.advertiserId)?a.advertiserId:"",isReplayable:!!o(a.isReplayable)&&a.isReplayable,volumeStrategy:(e=>Ae.includes(e))(a.volumeStrategy)?a.volumeStrategy:void 0,hasRollover:y,locale:n(a.locale)?a.locale:void 0}})(r),{vastUrl:p,vastXml:u,maxWidth:g,targetRatio:c,fitHeight:y,hasDynamicHeight:m,expand:v,onEvent:b,isReplayable:w,volumeStrategy:f,hasRollover:E,locale:M}=h;let{targetWidth:C,targetHeight:S}=h;await k();try{if(u&&S<10&&C<10){const e=le.parseFromString(u,"text/xml").querySelector("MediaFile"),t=e?.getAttribute("height")??"0",s=e?.getAttribute("width")??"0";S=parseInt(t,10)||S,C=parseInt(s,10)||C}}catch{}const x=new ne(a,{maxWidth:g,targetRatio:c,targetWidth:C,targetHeight:S,fitHeight:y,hasDynamicHeight:m,expand:v,onEvent:b,isReplayable:w,volumeStrategy:f,hasRollover:E,locale:M});return x.playOutstream({vastUrl:p,vastXml:u}).finally((()=>x.dispose()))}}})();