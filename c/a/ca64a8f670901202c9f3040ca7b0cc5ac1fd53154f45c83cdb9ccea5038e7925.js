// Build version: v1.63.15 - Thu, 08 Feb 2024 11:37:32 GMT 
 "use strict";(self.webpackJsonpViP=self.webpackJsonpViP||[]).push([["va"],{7955:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(4146),s=i(6145),n=i.n(s),a=i(2193),d=i(9351),o=i(9523);class h extends r.v{constructor(e,t,i,r,s,n,a,d,o,h,l){super(),this.waterfallId=e,this.runNumber=t,this.adSource=i,this.container=r,this.originalWidth=s,this.originalHeight=n,this.environment=a,this.macros=d,this.video=o,this.gdprConsent=h,this.schain=l,this.disposed=!1,this.cleaners=[()=>{var e;this._adPlayer?this._adPlayer.dispose():(this.container.innerHTML="",null===(e=this.container.parentNode)||void 0===e||e.removeChild(this.container))},()=>this.removeAllListeners()]}get width(){return Math.round(this.originalWidth)}set width(e){this.originalWidth=e}get height(){return Math.round(this.originalHeight)}ause(){this._adPlayer&&this._adPlayer.pause()}play(){return this._adPlayer?this._adPlayer.play():n().reject(new Error("player isn't initialized yet, there is no adPlayer"))}resize(e,t){this.width=e,this.height=t,this._adPlayer&&this._adPlayer.resize(e,t)}et adSourceHash(){var e;return(null===(e=this._adPlayer)||void 0===e?void 0:e.adSourceHash)||""}get acu(){var e;return(null===(e=this._adPlayer)||void 0===e?void 0:e.acu)||0}get acid(){var e;return(null===(e=this._adPlayer)||void 0===e?void 0:e.acid)||""}et ptf(){var e;return(null===(e=this._adPlayer)||void 0===e?void 0:e.ptf)||0}get bidCpm(){var e;return(null===(e=this._adPlayer)||void 0===e?void 0:e.bidCpm)||0}get netCpm(){var e;return(null===(e=this._adPlayer)||void 0===e?void 0:e.netCpm)||0}et demandPartnerId(){var e;return this.adSource.techFee?(null===(e=this.adSource.trackingParams)||void 0===e?void 0:e.ssp_partner_id)||"":"vi-marketplace"}get sspPartnerId(){var e;return(null===(e=this.adSource.trackingParams)||void 0===e?void 0:e.ssp_partner_id)||""}t currentTime(){return this._adPlayer?this._adPlayer.currentTime:0}set currentTime(e){this._adPlayer&&(this._adPlayer.currentTime=e)}get duration(){return this._adPlayer?this._adPlayer.duration:0}et volume(e){this._adPlayer&&(this._adPlayer.volume=e)}et muted(e){this._adPlayer&&(this._adPlayer.muted=e)}get fullscreenose(){this.disposed||(this.disposed=!0,this._adPlayer||this.emit(d.B.disposed),this.cleaners.forEach((e=>{try{e()}catch(e){}})))}get adPlayer(){return this._adPlayer}set adPlayer(e){e!==this.adPlayer&&(this.unproxy&&this.unproxy(),this.unproxy=void 0,this._adPlayer=e,this._adPlayer&&(this.unproxy=(0,o.Z)(this._adPlayer,this,Object.keys(Object.assign(Object.assign({},a.e),d.B)))))}}const l=h},7775:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ee});var r=i(3414),s=i.n(r),n=i(6145),a=i.n(n),d=i(4363),o=i(2193),h=i(4593),l=i(9351),c=i(8034),u=i(3764),m=i(3935),v=i(7955),p=i(7875),g=i(4455),f=i(6735),P=i(5158),A=i(461);class y extends P.Z{constructor(e,t,i){var r;super(e,Object.assign(t,{autoplay:!1,preload:"auto",muted:!0,forbidRewind:!0}),i),this.container=e,this.config=t,this.impressionFired=!1,this.waterfallId=t.waterfallId,this.runNumber=t.runNumber,this.adSource=t.adSource,this.bidCPM=null===(r=t.odbExtensionManager)||void 0===r?void 0:r.getBidCPM(),this.omsdkManager=t.omsdkManager,i&&this.createClickZone(),this.once(l.B.playing,(()=>{this.emit(o.e.impression),this.impressionFired=!0}))}init(){return this.on(l.B.click,(()=>{var e;const t=this.adSource.clickthroughUrl||(null===(e=this.config.creative.videoClickThroughURLTemplate)||void 0===e?void 0:e.url)||"";t&&(this.pause(),window.open(t))})),a().resolve()}reached2sEvent(){this.emit(o.e.viewableImpression)}get trackingParams(){return this.bidCPM?Object.assign(Object.assign({},this.adSource.trackingParams),{bid_cpm:(0,p.FH)(this.bidCPM,5),sell_cpm:(0,p.FH)((0,A.PM)(this.adSource,this.bidCPM),5)}):Object.assign(Object.assign({},this.adSource.trackingParams),{sell_cpm:(0,p.FH)(this.adSource.trackingParams.sell_cpm,5)})}get adSourceHash(){return this.adSource.adSourceHash||""}get acu(){return this.bidCPM?(0,p.FH)((0,A.Ak)(this.adSource,this.bidCPM),5):this.adSource.acu||0}get acid(){return this.adSource.acid||""}get iod(){var e;return(null===(e=this.adSource.trackingParams)||void 0===e?void 0:e.iod)||!1}get ptf(){var e;return(null===(e=this.adSource.trackingParams)||void 0===e?void 0:e.ptf)||0}get bidCpm(){return this.bidCPM||0}get netCpm(){return this.pubNetCpm}get pubNetCpm(){return this.iod?0:this.bidCPM?(0,p.FH)((0,A.ZT)(this.adSource,this.bidCPM),5):this.adSource.pn||0}get demandPartnerId(){var e;return this.adSource.techFee?(null===(e=this.adSource.trackingParams)||void 0===e?void 0:e.ssp_partner_id)||"":"vi-marketplace"}get sspPartnerId(){var e;return(null===(e=this.adSource.trackingParams)||void 0===e?void 0:e.ssp_partner_id)||""}get odbParams(){var e;return null===(e=this.config.odbExtensionManager)||void 0===e?void 0:e.getOdbParams()}play(e=g.N){var t;return this.omsdkManager?null===(t=this.omsdkManager)||void 0===t?void 0:t.startAdSession(this.video).then(():super.play(e)}get fullscreen(){return this._fullscreen}set fullscreen(e){var t;e!==this._fullscreen&&(this._fullscreen=e,e?(0,f.SI)(this.container,window.screen.width,window.screen.height,!1,!0):(0,f.SI)(this.container,this.width||0,this.height||0),null===(t=this.omsdkManager)||void 0===t||t.fullscreenChange())}dispose(){var e,t;const i=null===(e=this.omsdkManager)||void 0===e?void 0:e.started();null===(t=this.omsdkManager)||void 0===t||t.dispose(),i?setTimeout((,3e3):super.dispose()}createClickZone(){const e=document.createElement("div");e.style.cssText=Object.entries({border:"0",cursor:"pointer",padding:"0",position:"absolute",left:"0",top:"0",right:"0",bottom:"0",margin:"0"}).reduce((,""),e.addEventListener("click",(),this.container.appendChild(e)}}function E(e){return"string"==typeof(null==e?void 0:e.mimeType)?null==e?void 0:e.mimeType:""}function b(e){return"application/javascript"===e||"application/x-javascript"===e||"text/javascript"===e}unction S(e,t){return["","maybe","probably"].indexOf(t(e))}ar k=i(4146);const M={OB_VIDEO_DATA:{name:"ObVideoData",param:"videoData"},ODB_BID_CPM:{name:"BidCPM",param:"bidCPM"},ODB_CAMPAIGN_ID:{name:"CampaignId",param:"campaignId"},ODB_MARKETER_ID:{name:"MarketerId",param:"marketerId"},ODB_SEC_REQ_ID:{name:"SecReqId",param:"secReqId"},OPA_AD_ID:{name:"OpaAdId",param:"opaAdId"},OPA_PARTNER_ID:{name:"PartnerId",param:"partnerId"},DEAL_ID:{name:"DealId",param:"dealId"}};class C extends k.v{constructor(e){if(super(),this.odbParams={},this.readExtensions(e),void 0===this.bidCPM)throw new Error("Odb bid cpm not found");if(this.bidCPM<=0||this.bidCPM>30)throw new Error(`Odb bid cpm invalid value: ${this.bidCPM}`)}getBidCPM(){return this.bidCPM}getOdbParams(){return this.odbParams.secReqId||this.emit(l.B.log,"Odb secondary request ID not found"),this.odbParams}readExtensions(e){var t;(null===(t=null==e?void 0:e.extensions)||void 0===t?void 0:t.length)>0&&e.extensions.forEach((e=>{var t;const i=null===(t=e.attributes)||void 0===t?void 0:t.type;if(i&&Object.keys(M).includes(i)&&e.children.length>0){const t=e.children.filter(();if("ODB_BID_CPM"===i)this.bidCPM=(0,p.ZQ)(t[0].value);else if("OB_VIDEO_DATA"===i)try{const e=M[i].param;this.odbParams[e]=JSON.parse(t[0].value)}catch(e){}else{const e=M[i].param;this.odbParams[e]=t[0].value}}}))}}var V,_,D,T,O,L,F,B=i(9306);!function(e){e.FULL="full",e.DOMAIN="domain",e.LIMITED="limited"}(V||(V={})),_||(_={})),D||(D={})),T||(T={})),function(e){e.DEFINED_BY_JAVASCRIPT="definedByJavaScript",e.HTML_DISPLAY="htmlDisplay",e.NATIVE_DISPLAY="nativeDisplay",e.VIDEO="video",e.AUDIO="audio"}(O||(O={})),L||(L={})),F||(F={}));const R=["error","loadeddata","timeupdate","volumechange","click","pause","play","fullscreenchange","webkitfullscreenchange","mozfullscreenchange","msfullscreenchange"];class N extends k.v{constructor(e,t){super(),this.container=e,this.config=t,this.disposed=!1,this.lastVideoTime=-1,this.boundVideoElementEventHandler=this.videoElementEventHandler.bind(this),this.emitError=(0,c.m)(this)}dispose(){this.adSession?(this.adSession.finish(),setTimeout((,3e3)):this.clean()}startAdSession(e){return this.initPromise||(this.initPromise=this.loadSDK().then((()=>{var t,i;if(!e)throw new Error("omsdk: no videoElement");if(!this.omsdk)throw new Error("omsdk: no session client");this.videoElement=e,R.forEach((e=>{var t;null===(t=this.videoElement)||void 0===t||t.addEventListener(e,this.boundVideoElementEventHandler)}));const r=new this.omsdk.Partner(this.config.omidPartnerName,this.config.omidPartnerVersion),s=[];for(let e=0;e<this.config.verifications.length;e++){const t=this.config.verifications[e],i=new this.omsdk.VerificationScriptResource(t.resource||"",t.vendor,t.parameters,this.config.accessMode||V.FULL);s.push(i)}const n=new this.omsdk.Context(r,s,this.config.contentUrl||null,this.config.customReferenceData||null);n.underEvaluation=!0,(0,f.gX)(this.videoElement)&&n.setVideoElement(this.videoElement),(null===(t=this.omsdkIframe)||void 0===t?void 0:t.contentWindow)&&n.setServiceWindow(null===(i=this.omsdkIframe)||void 0===i?void 0:i.contentWindow),this.adSession=new this.omsdk.AdSession(n),this.adSession.setCreativeType(O.VIDEO),this.adSession.setImpressionType(_.BEGIN_TO_RENDER),this.adEvents=new this.omsdk.AdEvents(this.adSession),this.mediaEvents=new this.omsdk.MediaEvents(this.adSession),this.adSession.start()})),this.initPromise.catch(this.emitError)),this.initPromise}ullscreenChange(){var e;null===(e=this.mediaEvents)||void 0===e||e.playerStateChange(null!==document.fullscreenElement?F.FULLSCREEN:F.NORMAL)}loadSDK(){return B.NQ(this.container,'<script src="https://libs.outbrain.com/s-vi-serve/current/omweb/omweb-v1.js"><\/script>\n        <script src="https://libs.outbrain.com/s-vi-serve/current/omweb/omid-session-client-v1.js"><\/script>').then((e=>{if(e.style.display="none",!e.contentWindow)throw new Error("omsdk: no iframe window");if(this.omsdkIframe=e,this.omsdk=s()(e,"contentWindow.OmidSessionClient.default"),!this.omsdk)throw new Error("omsdk: no session client")}))}clean(){R.forEach((e=>{var t;null===(t=this.videoElement)||void 0===t||t.removeEventListener(e,this.boundVideoElementEventHandler)})),this.omsdkIframe&&this.omsdkIframe.parentElement&&this.omsdkIframe.parentElement.removeChild(this.omsdkIframe)}videoElementEventHandler(e){var t,i,r,s,n,a;if(this.adSession&&this.adEvents&&this.mediaEvents)switch(e.type){case"error":this.adSession.error(D.VIDEO,(null===(i=null===(t=this.videoElement)||void 0===t?void 0:t.error)||void 0===i?void 0:i.message)||"");break;case"loadeddata":if(this.omsdk){const e=new this.omsdk.VastProperties(!1,0,!this.config.adPlayer.startedByClick,"preroll"===this.config.adPlayer.adBreakType?L.PREROLL:"midroll"===this.config.adPlayer.adBreakType?L.MIDROLL:"postroll"===this.config.adPlayer.adBreakType?L.POSTROLL:L.STANDALONE);this.adEvents.loaded(e)}break;case"timeupdate":this.videoElementTimeUpdate();break;case"click":this.mediaEvents.adUserInteraction(T.CLICK);break;case"pause":(null===(r=this.videoElement)||void 0===r?void 0:r.ended)||this.mediaEvents.pause();break;case"play":0!==(null===(s=this.videoElement)||void 0===s?void 0:s.currentTime)&&this.mediaEvents.resume();break;case"volumechange":this.mediaEvents.volumeChange((null===(n=this.videoElement)||void 0===n?void 0:n.muted)?0:(null===(a=this.videoElement)||void 0===a?void 0:a.volume)||0)}}videoElementTimeUpdate(){var e,t,i;if(!this.videoElement||!this.adEvents||!this.mediaEvents||0===(null===(e=this.videoElement)||void 0===e?void 0:e.playbackRate))return;const r=this.videoElement.currentTime/this.videoElement.duration;this.lastVideoTime<0&&r>=0?(this.adEvents.impressionOccurred(),this.mediaEvents.start(this.videoElement.duration,(null===(t=this.videoElement)||void 0===t?void 0:t.muted)?0:(null===(i=this.videoElement)||void 0===i?void 0:i.volume)||0)):this.lastVideoTime<.25&&r>=.25?this.mediaEvents.firstQuartile():this.lastVideoTime<.5&&r>=.5?this.mediaEvents.midpoint():this.lastVideoTime<.75&&r>=.75?this.mediaEvents.thirdQuartile():this.lastVideoTime<1&&r>=1&&this.mediaEvents.complete(),this.lastVideoTime=r}}var x,H=i(4866);!x||(x={}));class U extends k.v{constructor(){super(...arguments),this.get=(e,t,i)=>{try{"https:"===window.location.protocol&&0===e.indexOf("http://")&&(e=e.replace("http","https")),this.createRequest(e,t).then((e=>i(null,e)),(r=>{t.withCredentials?this.createRequest(e,{timeout:t.timeout,withCredentials:!1}).then((,i):i(r)}))}catch(e){i(new Error("XHRURLHandler: Unexpected error"))}}}createRequest(e,t){let i=a().resolve((0,H.he)(e,{credentials:t.withCredentials?"include":"omit"}));return t.timeout>0&&(i=m.Vs(i,t.timeout)),i.then((e=>e.text().then((e=>(this.emit(x.response,e),(new DOMParser).parseFromString(e,"application/xml"))))))}}U.Events=x;const j=new U;var q=i(923),z=i.n(q),W=i(4952),Q=i(7688),Z=i(6062),X=i(5186),J=i(605),$=i(3736);var K;!K||(K={}));class G extends k.v{constructor(e,t,i){var r;super(),this.container=e,this.config=t,this.impressionFired=!1,this.disposed=!1,this.width=this.config.width,this.height=this.config.height,this._playbackState=l.q.notstarted,this._fullscreen=!1,this.VPAIDAdEmitter=new k.v,this.clickFired=!1,this.started=!1,this.videoProvided=!1,this.cleaners=[()=>this.forceMuteIntervalCleaner(),()=>this.removeAllListeners(),()=>setTimeout((()=>{var e;try{this.VPAIDAd&&this.VPAIDAd.stopAd()}catch(e){}this.VPAIDAdEmitter.removeAllListeners(),this.container.innerHTML="",null===(e=this.container.parentNode)||void 0===e||e.removeChild(this.container)}),500)],this.forceMuteIntervalCleaner=z(),this.emitError=(0,c.m)(this),this.volumeManager=new $.Z({getVolume:setVolume:e=>{this.video&&(this.video.muted=!e,this.video.volume=e),this.VPAIDAd&&this.VPAIDAd.setAdVolume(e)}},{forciblyMaintainMute:!1}),this.waterfallId=t.waterfallId,this.runNumber=t.runNumber,this.adSource=t.adSource,this.bidCPM=null===(r=t.odbExtensionManager)||void 0===r?void 0:r.getBidCPM(),this.omsdkManager=t.omsdkManager,this.container.innerHTML="<div></div> ";const s=this.container.querySelector("div");if(!s)throw new Error("slot element not found");(0,X.r)(s),this.slot=s,i?this.videoProvided=!0:(i=document.createElement("video"),this.container.insertBefore(i,this.slot),(0,X.F)(i,(()=>!this.volumeManager.desiredVolume))),this.video=i}init(){return this.initPromise||(this.initPromise=this.loadIframe().then((()=>this.loadScript())).then((),this.initPromise.catch(()),this.initPromise}et trackingParams(){return this.bidCPM?Object.assign(Object.assign({},this.adSource.trackingParams),{bid_cpm:(0,p.FH)(this.bidCPM,5),sell_cpm:(0,p.FH)((0,A.PM)(this.adSource,this.bidCPM),5)}):Object.assign(Object.assign({},this.adSource.trackingParams),{sell_cpm:(0,p.FH)(this.adSource.trackingParams.sell_cpm,5)})}get adSourceHash(){return this.adSource.adSourceHash||""}get acu(){return this.bidCPM?(0,p.FH)((0,A.Ak)(this.adSource,this.bidCPM),5):this.adSource.acu||0}et iodet ptf(){var e;return(null===(e=this.adSource.trackingParams)||void 0===e?void 0:e.ptf)||0}et netCpm(){return this.pubNetCpm}get pubNetCpm(){return this.iod?0:this.bidCPM?(0,p.FH)((0,A.ZT)(this.adSource,this.bidCPM),5):this.adSource.pn||0}get demandPartnerId(){var e;return this.adSource.techFee?(null===(e=this.adSource.trackingParams)||void 0===e?void 0:e.ssp_partner_id)||"":"vi-marketplace"}ay(e=g.N){var t;let i=a().resolve();return this.playbackState===l.q.playing?i:(this.started||(null===(t=this.omsdkManager)||void 0===t||t.startAdSession(this.video),this.preloadVpaid()||(i=this.initAd())),i.then((()=>{var t;if((0,h.n)(this),!this.VPAIDAd)throw new Error("no VPAIDAd");const i=this.started?K.AdPlaying:K.AdStarted,r=m.Vs((0,W.yM)(this.VPAIDAdEmitter,i,{rejectionEvents:[K.AdError]}),e,"VPAIDAdPlayer.play").catch((e=>(0,Z.I6)(e,"play() failed")));if(r.then((,this.emitError),this.started)this.VPAIDAd.resumeAd();else{-1===(null===(t=this.adSource.url)||void 0===t?void 0:t.indexOf("adsafeprotected.com"))&&(this.volumeManager.forciblyMaintainMute=!0),this.VPAIDAd.startAd();const e=this.video.startAd;"function"==typeof e&&e.call(e)}return r})))}esize(e,t){if(e&&t){if(e===this.width&&t===this.height)return;this.width=e,this.height=t,this.VPAIDAd&&this.VPAIDAd.resizeAd(e,t,"normal")}}get volume(){return this.volumeManager.volume}set volume(e){this.volumeManager.volume=e}t fullscreen(){return this._fullscreen}set fullscreen(e){var t;e!==this._fullscreen&&(this._fullscreen=e,this.VPAIDAd&&(e?this.VPAIDAd.resizeAd(window.screen.width,window.screen.height,"fullscreen"):this.VPAIDAd.resizeAd(this.width,this.height,"normal")),null===(t=this.omsdkManager)||void 0===t||t.fullscreenChange())}et playbackState(e){e!==this._playbackState&&(this._playbackState=e,this.emit(l.B.playbackstatechange))}et currentTime(){if(this.VPAIDAd){const e=this.VPAIDAd.getAdDuration(),t=this.VPAIDAd.getAdRemainingTime();if(e>=0&&t>=0&&e>=t)return e-t}return 0}serEvent(e){this.emit(e)}dispose(){this.disposed||(this.disposed=!0,this.emit(l.B.disposed),this.cleaners.forEach(())}loadIframe(){const e=B.NQ(this.container,"<style>body{margin:0;padding:0}iframe{border-width:0}</style> ",!0);return e.then((e=>{this.iframe=e,this.iframe.contentWindow&&(0,Q.$)(this.iframe.contentWindow,()})),e}loadScript(){return a().resolve().then((()=>{(0,h.n)(this);const e=this.iframe&&(this.iframe.contentWindow&&this.iframe.contentWindow.document||this.iframe.contentDocument);if(!e)throw new Error("no iframe.contentDocument");const t=document.createElement("script"),i=(0,W.yM)(t,"load",{rejectionEvents:["error",l.B.disposed]}).catch((e=>(0,Z.I6)(e,"error event on script element")));return t.src=this.config.src,e.body.appendChild(t),i}))}preloadVpaid(){var e,t;return!(null===(t=null===(e=this.adSource)||void 0===e?void 0:e.trackingParams)||void 0===t?void 0:t.io_id)&&!this.videoProvided}resolveAd(){return this.preloadVpaid()?this.initAd():a().resolve()}initAd(){return a().resolve().then((()=>{if((0,h.n)(this),!this.iframe)throw new Error("no iframe");const e=this.iframe.contentWindow&&this.iframe.contentWindow.getVPAIDAd();if(!e)throw new Error("no VPAIDAd");this.VPAIDAd=e;const t={};return Object.keys(K).forEach((i=>{const r=(...e)=>this.VPAIDAdEmitter.emit(i,...e);e.subscribe(r,i),t[i]=r})),this.cleaners.push((()=>Object.keys(t).forEach(())),setTimeout((()=>{this.handleEvents(),e.initAd(this.width,this.height,"normal",this.config.bitrate||null,{AdParameters:this.config.adParameters},{slot:this.slot,videoSlot:this.video,videoSlotCanAutoPlay:!0})})),(0,W.yM)(this.VPAIDAdEmitter,K.AdLoaded,{rejectionEvents:[K.AdError,l.B.disposed]}).then((()=>this.iframe&&(this.iframe.style.opacity="1")),()}))}handleEvents(){this.VPAIDAdEmitter.on(K.AdStarted,(()=>{this.emit(l.B.started),this.emit(l.B.playing),this.playbackState=l.q.playing})),this.VPAIDAdEmitter.on(K.AdPlaying,(()=>{this.emit(l.B.playing),this.playbackState=l.q.playing})),this.VPAIDAdEmitter.on(K.AdImpression,(()=>{this.emit(o.e.impression),this.video&&(0,f.gX)(this.video)&&(0,f.uu)(this.video)&&(this.video.style&&(this.video.style.zIndex="-1"),this.iframe&&(this.iframe.style.zIndex="-1")),this.impressionFired=!0})),this.VPAIDAdEmitter.on(K.AdClickThru,((e,t,i)=>{var r;e=e||(null===(r=this.config.creative.videoClickThroughURLTemplate)||void 0===r?void 0:r.url)||"";const s=this.adSource.clickthroughUrl||i&&e;s&&window.open(s),this.clickFired=!0,this.emit(l.B.click)})),this.VPAIDAdEmitter.on(K.AdPaused,(()=>{this.emit(l.B.pause),this.playbackState=l.q.paused})),this.VPAIDAdEmitter.on(K.AdError,(e=>{this.emitError(e,"AdError event: "),this.playbackState=l.q.notstarted})),this.VPAIDAdEmitter.once(K.AdVideoFirstQuartile,(()=>this.emit(l.B.firstquartile))),this.VPAIDAdEmitter.once(K.AdVideoMidpoint,(()=>this.emit(l.B.midpoint))),this.VPAIDAdEmitter.once(K.AdVideoThirdQuartile,(()=>this.emit(l.B.thirdquartile))),this.VPAIDAdEmitter.once(K.AdStopped,(()=>{this.emit(o.e.stopped),this.playbackState=l.q.ended})),this.VPAIDAdEmitter.once(K.AdVideoComplete,(()=>{this.emit(l.B.ended),this.playbackState=l.q.ended})),(0,W.yM)(this.VPAIDAdEmitter,[K.AdUserClose]).then((()=>{this.emit(o.e.closed),this.playbackState=l.q.ended})),(0,W.yM)(this.VPAIDAdEmitter,K.AdSkipped).then((()=>{this.emit(o.e.skipped),this.playbackState=l.q.ended})),this.VPAIDAdEmitter.on(K.AdSizeChange,(()=>this.emit(l.B.sizechange))),this.VPAIDAdEmitter.on(K.AdDurationChange,(()=>this.emit(l.B.durationchange)));let e=!0;try{this.currentTime}catch(t){e=!1}if(e){let e=this.currentTime;this.cleaners.push((0,J.F)((()=>{e!==this.currentTime&&(e=this.currentTime,this.emit(l.B.timeupdate))}),200))}else if(this.video){const e=this.video.addEventListener("timeupdate",e),this.cleaners.push(()}const t=()=>{try{const e=document.createEvent("HTMLEvents");e.initEvent("click",!0,!0),this.video.dispatchEvent(e)}catch(e){}};this.iframe&&this.iframe.contentDocument?this.iframe.contentDocument.body.addEventListener("click",t):this.iframe&&this.iframe.contentWindow&&this.iframe.contentWindow.addEventListener("click",t),this.container.addEventListener("click",(()=>{this.adSource.clickthroughUrl&&!this.clickFired&&(this.pause(),window.open(this.adSource.clickthroughUrl),this.emit(l.B.click))}))}}const Y=G;class ee extends v.Z{constructor(){super(...arguments),this.adBreakType="preroll",this.startedByClick=!1,this.client=new d.VASTClient(0,0,{data:{},length:0,getItemsetItemremoveItemclear),this.emitError=(0,c.m)(this),this.reached2SEventFlag=!1,this.reached2sEvent=()=>{var e;if(!this.reached2SEventFlag){if(this.reached2SEventFlag=!0,(null===(e=this.adPlayer)||void 0===e?void 0:e.reached2sEvent)&&this.adPlayer.reached2sEvent(),!this.tracker)throw new Error("tracker isn't initialized yet");this.tracker.trackViewableImpression()}}}static isValidMediaFile({fileURL:e,mimeType:t}){return!("string"!=typeof e||!e.length||"string"!=typeof t||!t.length)}init(){return this.initPromise||(this.initPromise=a().resolve().then((()=>this.fetchLinearCreativeComponents(1e4,s()(this.adSource,"withCredentials",!0)).then((e=>((0,h.n)(this),this.adComponents=e,this.adPlayer=this.resolveAdapter(e),this.tracker=new d.VASTTracker(null,this.adComponents.ad,this.adComponents.creative),this.tracker.setMuted(this.adPlayer.muted),this.handleTracking(this.adPlayer),this.adPlayer.init().then((()=>{this.emit(o.e.bid),(0,h.n)(this)}))))))),this.initPromise.catch(()),this.initPromise}etchLinearCreativeComponents(e,t=!0){return(0,h.n)(this),j.once(U.Events.response,(),m.Vs(this.getVASTResponse(t),e,"VASTAdPlayer.getVASTResponse").then((e=>((0,h.n)(this),this.componentsFromResponse(e))))}getVASTResponse(e){return a().resolve().then((()=>{if((0,h.n)(this),this.adSource.vastXML)return(new d.VASTParser).parseVAST((new DOMParser).parseFromString(this.adSource.vastXML,"text/xml"));if(this.adSource.url)return this.client.get(this.adSource.url,{withCredentials:e,urlHandler:j}).catch((t=>{if(e)return this.client.get(this.adSource.url,{withCredentials:!1,urlHandler:j});throw t}));throw new Error("neither url nor vastXML is present on the adSource")}))}componentsFromResponse(e){const t=s()(e,"ads[0]");if(!t)throw new Error("no ad found");const i=s()(t,"creatives[0]");if(!i)throw new Error("no creative found");const r=i.mediaFiles;if(!Array.isArray(r))throw new Error(`mediaFiles ${r} isn't an array`);const n=r.filter((({mimeType:e})=>I("string"==typeof e?e:""))).sort(((e,t)=>S(E(t),w)-S(E(e),w)));if(n.length&&(this.adSource.mediafilePriority&&"vpaid"!==this.adSource.mediafilePriority||!this.adSource.mediafilePriority)){const e=E(n[0]),r=n.filter(();let s;if((0,u.t)())s=r.reduce((,r[0]);else{const e=r.reduce((,0)/r.length;r.sort((),s=r.reduce(()}return{ad:t,creative:i,mediaFile:s}}const a=r.filter((e=>ee.isValidMediaFile(e)&&b("string"==typeof e.mimeType?e.mimeType:"")));if(a.length)return{ad:t,creative:i,mediaFile:a[0]};throw new Error("no relevant media files")}getOdbExtensionManager(e){if(this.adSource.isOpaDemand){const t=new C(e);return t.once(l.B.log,(),t}}getOmsdkManager(e){var t,i;if((null===(t=null==e?void 0:e.adVerifications)||void 0===t?void 0:t.length)>0&&this.environment.enableOmSdk)return new N(this.container,{adPlayer:this,contentUrl:null===(i=this.environment)||void 0===i?void 0:i.pageUrl,omidPartnerName:"Outbrain",omidPartnerVersion:"1.0.0",verifications:e.adVerifications})}resolveAdapter({ad:e,creative:t,mediaFile:i}){const r=this.getOdbExtensionManager(e),s=this.getOmsdkManager(e);if(b(i.mimeType))return new Y(this.container,{waterfallId:this.waterfallId,runNumber:this.runNumber,adSource:this.adSource,ad:e,creative:t,src:i.fileURL||"",width:this.width,height:this.height,bitrate:i.bitrate,adParameters:t.adParameters||"",odbExtensionManager:r,omsdkManager:s},this.video);if(I(i.mimeType))return new y(this.container,{waterfallId:this.waterfallId,runNumber:this.runNumber,adSource:this.adSource,ad:e,creative:t,src:i.fileURL||"",width:this.width,height:this.height,odbExtensionManager:r,omsdkManager:s},this.video);throw new Error(`unsupported mediaFile.mimeType: ${i.mimeType}`)}handleTracking(e){if(!this.adComponents)throw new Error("no adComponents");if(!this.tracker)throw new Error("tracker isn't initialized yet");const t=this.tracker;t.setMuted(e.muted);[[l.B.durationchange,()=>{var i,r;const s=e.duration||(null===(r=null===(i=this.adComponents)||void 0===i?void 0:i.creative)||void 0===r?void 0:r.duration)||0;t.setDuration(s)}],[l.B.timeupdate,()=>t.setProgress(e.currentTime)],[l.B.ended,()=>{t.complete(),this.reached2SEventFlag||t.trackNotViewableImpression()}],[l.B.click,()=>t.click()],[o.e.skipped,()=>t.skip()],[o.e.closed,()=>t.close()],[l.B.sizechange,()=>t.setFullscreen(!!s()(window,"document.fullscreenElement"))],[l.B.volumechange,,[l.B.pause,()=>t.setPaused(!0)],[l.B.started,,[l.B.playing,,[o.e.impression,].forEach((([t,i])=>e.on(t,(()=>{try{i()}catch(e){}}))))}}},3736:(e,t,i)=>{i.d(t,{Z:()=>s});var r=i(605);class s{static mutedToVolume(e){return+!e}onstructor(e,t={}){this.target=e,this.desiredVolume=0,this.disposed=!1,this.clearMuteInterval=const{initialVolume:i=0,forciblyMaintainMute:r=!0,muteInterval:s=150}=t;this._forciblyMaintainMute=r,this.muteInterval=s,this.setVolume(i)}tartMuteInterval(){this.desiredVolume||!this._forciblyMaintainMute||this.forcibleMuteIntervalCleaner||(this.forcibleMuteIntervalCleaner=(0,r.F)((()=>{if(this.desiredVolume||!this._forciblyMaintainMute)return this.clearMuteInterval();this.target.setVolume(0)}),this.muteInterval))}},4593:(e,t,i)=>{function r(e,t="already disposed"){if(e.disposed)throw new Error(t)}i.d(t,{n:()=>r})},5186:(e,t,i)=>{i.d(t,{F:()=>d,r:()=>a});var r=i(923),s=i.n(r),n=i(7688);function a(e){e.style.width="100%",e.style.height="100%",e.scrollIntoView=s()}function d(e,t){e.style.display="block",e.style.width="100%",e.style.height="100%",e.style.objectFit="contain",e.style.position="absolute",e.style.top="0px",e.setAttribute("playsinline","true"),e.setAttribute("webkit-playsinline","true"),(0,n.X)(e,t),e.muted=!0,e.volume=0,e.scrollIntoView=s()}},461:(e,t,i)=>{i.d(t,{Ak:()=>d,PM:()=>h,ZT:()=>o});var r=i(5051),s=i.n(r),n=i(7875);function a(e,t){let i;return i=e.techFee?t:e.prebidFixedCPM>0?e.prebidFixedCPM:t*(e.prebidFactor/100),i}function d(e,t){const i=(0,n.ZQ)((e.apu||0).toString().substring(3)),r=a(e,t)*i;return(0,n.ZQ)(`${s()(100,999)}${r}`)}function o(e,t){return a(e,t)*(e.x||0)-(e.y||0)}function h(e,t){return e.techFee?function(e,t){let i=e.techFeeCPM;return!e.techFeeCPM&&e.techFeeRevShare&&e.techFeeRevShare>0&&(i=t*e.techFeeRevShare),i}(e,t):e.prebidFixedCPM>0?e.prebidFixedCPM:t*(e.prebidFactor/100)}},9306:(e,t,i)=>{i.d(t,{Me:()=>l,NQ:()=>h});var r=i(923),s=i.n(r),n=i(6145),a=i.n(n),d=i(3935);const o='<script>!function(){let t,a=window;const n={};for(;a;){try{if(a.frames.__tcfapiLocator){t=a;break}}catch(t){}if(a===window.top)break;a=a.parent}window.__tcfapi=function(a,e,c,o){if(t){const i=Math.random()+"",r={__tcfapiCall:{command:a,parameter:o,version:e,callId:i}};n[i]=c,t.postMessage(r,"*")}else c({msg:"CMP not found"},!1)},window.addEventListener("message",(function(t){let a={};try{a="string"==typeof t.data?JSON.parse(t.data):t.data}catch(t){}const e=a.__tcfapiReturn;e&&"function"==typeof n[e.callId]&&(n[e.callId](e.returnValue,e.success),n[e.callId]=null)}),!1)}()<\/script>';function h(e,t="",i=!1,r=!1,n=3,h=100){return new(a())((a=>{const c=document.createElement("iframe");!function(e){e.src="about:blank",e.style.width="100%",e.style.height="100%",e.style.display="block",e.style.opacity="0",e.style.position="absolute",e.style.top="0px",e.style.border="none",e.scrolling="no",e.scrollIntoView=s()}(c),i?e.insertBefore(c,e.firstChild):e.appendChild(c),d.XD((()=>{const e=l(c);if(e)return e;throw new Error("no iframe document")}),n,h).then((e=>{e.open().write('<body onload="frameElement.__onload();"><style>iframe {border-width: 0;}</style>'+t+(r?o:"")+"</body>"),c.__onload=e.close()}))}))}function l(e){return e.contentWindow&&e.contentWindow.document||e.contentDocument}},605:(e,t,i)=>{function r(e,t){const i=setInterval(e,t);let r=!1;returni.d(t,{F:)}}]); 