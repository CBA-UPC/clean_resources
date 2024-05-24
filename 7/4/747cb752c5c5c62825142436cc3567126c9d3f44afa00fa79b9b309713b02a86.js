!{"../../../../templates-handlebars/raiplay/assets-src/js/webcomponents/src/rai-player/player-events.js":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={openPlayerRequest:"rai:player-openPlayerRequest",changeVideoRequest:"rai:player-changeVideoRequest",firstPlay:"player:rai:firstplay",opened:"rai:player-opened",closed:"rai:player-closed",connected:"rai:player-connected",ready:"rai:player-ready",urlChanged:"rai:player-url-changed",videoItemJsonReady:"rai:player-video-json-ready",media:{CREATION:"CREATION_EVENT",READY:"READY_EVENT",REPLAY:"REPLAY",PLAY:"PLAY_MEDIA",RATECHANGE:"RATECHANGE",PLAYBACK_STARTED:"PLAYBACK_STARTED",FIRSTPLAY:"tracking:firstplay",AUDIO_CHANGED:"AUDIO_CHANGED",SUBTITLE_CHANGED:"SUBTITLE_CHANGED",DOWNLOAD_DATA_START:"DOWNLOAD_DATA_START",DOWNLOAD_DATA_END:"DOWNLOAD_DATA_END",NETWORK_ERROR:"NETWORK_ERROR",BUTTON_BACK_CLICKED:"BUTTON_BACK_CLICKED",ENDED:"ENDED_EVENT",ERROR:"ERROR_EVENT",LOADED:"LOADDATA_EVENT",LOADMETADATA:"LOADED_METADATA_EVENT",TIMEUPDATE:"TIMEUPDATE_EVENT",USERACTIVE:"USERACTIVE_EVENT",USERINACTIVE:"USERINACTIVE_EVENT",VOLUMECHANGE:"VOLUME_CHANGED",MUTE_CHANGE:"MUTE_CHANGE",FULLSCREEN_EVENT:"FULLSCREEN_CHANGE",CONTAINER_READY:"CONTAINER_READY",MEDIAPOLIS_PARSE_END:"MEDIAPOLIS_PARSE_END",MEDIAPOLIS_PARSE_ERROR:"MEDIAPOLIS_PARSE_ERROR",NOT_SUPPORTED_MEDIA_TYPE:"NOT_SUPPORTED_MEDIA_TYPE",AUTOPLAY_BLOCKED:"AUTOPLAY_BLOCKED",HEARTBEAT:"HEARTBEAT",PERCENTILE:"PERCENTILE",BUFFER_STALLED:"BUFFER_STALLED",BUFFER_STALLED_ERROR:"BUFFER_STALLED_ERROR",BUFFER_FULL:"BUFFER_FULL",DECILE:"DECILE",FIRST_QUARTILE:"FIRST_QUARTILE",MIDPOINT:"MIDPOINT",THIRD_QUARTILE:"THIRD_QUARTILE",SEEK:"SEEK_EVENT",SEEKING:"SEEKING_EVENT",SEEK_START:"SEEK_START",SEEK_END:"SEEK_END",RESTART_BUTTON_CLICKED:"RESTART_BUTTON_CLICKED",LOAD_START:"LOADSTART_EVENT",PAUSE:"PAUSE_EVENT",PLAYING:"PLAYING_EVENTS",BUFFERING_END:"buffering_end",BUFFERING_STARTED:"buffering_started",STOP:"STOP_EVENT",PLAYLIST_END:"PLAYLIST_END",RESIZE:"PLAYER_RESIZE",PIP_START:"PIP_START",PIP_STOP:"PIP_STOP",LICENSE_REQUEST_ATTEMPT:"LICENSE_REQUEST_ATTEMPT",DRM_LICENSE_USABLE:"DRM_LICENSE_USABLE",DRM_LICENSE_OUTPUT_RESTRICTED:"DRM_LICENSE_OUTPUT_RESTRICTED",DRM_LICENSE_STATUS_INTERNAL_ERROR:"DRM_LICENSE_STATUS_INTERNAL_ERROR",KEYSTATUSCHANGE:"KEY_STATUS_CHANGE",CHROMECAST_START:"CHROMECAST_START",CHROMECAST_STOP:"CHROMECAST_STOP",GO_NEXT_EPISODE:"GO_NEXT_EPISODE",QUALITY_CHANGE:"QUALITY_CHANGE",DISPOSE:"PLAYER_DISPOSE",DISPOSED:"PLAYER_DISPOSED",READY_FOR_POSTROLL:"READY_FOR_POSTROLL",READY_FOR_PREROLL:"READY_FOR_PREROLL",BUTTON_PANLEL_CLICKED:"BUTTON_PANLEL_CLICKED",TRACKS_CREATED:"TRACKS_CREATED",EPISODE_ITEM_CLICK:"EPISODE_ITEM_CLICK",ONAIR_ITEM_CLICK:"ONAIR_ITEM_CLICK",LINK_PROGRAM_BUTTON_CLICKED:"LINK_PROGRAM_BUTTON_CLICKED",PROGRAM_INFO_UPDATED:"PROGRAM_INFO_UPDATED",WATCH_ON_CLICKED:"WATCH_ON_CLICKED",TECH_REF_READY:"TECH_REF_READY",ADS:{ADSERROR:"ADSERROR",ADS_REQUEST:"adsrequest",ADBUFFERING:"adBuffering",ADBUFFERINGEND:"adBufferingEnd",ADS_BIND_ERROR:"ADS_BIND_ERROR",CONTENT_RESUME_REQUESTED:"contentResumeRequested",CONTENT_PAUSE_REQUESTED:"contentPauseRequested",CLICK:"adsclick",DURATION_CHANGE:"durationChange",EXPANDED_CHANGED:"expandedChanged",STARTED:"start",IMPRESSION:"impression",PAUSED:"pause",RESUMED:"resume",AD_PROGRESS:"adProgress",FIRST_QUARTILE:"firstquartile",MIDPOINT:"midpoint",THIRD_QUARTILE:"thirdquartile",COMPLETE:"complete",USER_CLOSE:"userClose",LINEAR_CHANGED:"linearChanged",LOADED:"loaded",AD_CAN_PLAY:"adCanPlay",AD_METADATA:"adMetadata",AD_BREAK_READY:"adBreakReady",INTERACTION:"interaction",ALL_ADS_COMPLETED:"allAdsCompleted",SKIPPED:"skip",SKIPPABLE_STATE_CHANGED:"skippableStateChanged",LOG:"log",VIEWABLE_IMPRESSION:"viewable_impression",VOLUME_CHANGED:"volumeChange",VOLUME_MUTED:"mute",AD_BLOCK_DETECTED:"adBlockDetected"}}}},"../libraries/node_modules/es-cookie/src/es-cookie.js":"../libraries/packages/rai-adv/src/functions.js":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a}));n("../libraries/node_modules/es-cookie/src/es-cookie.js");var i=n("../utilities/utils.js");const s=navigator&&navigator.userAgent&&"string"==typeof navigator.userAgent?navigator.userAgent.match(/android/gi)&&navigator.userAgent.match(/rai24/gi)?"android":navigator.userAgent.match(/ios/gi)&&navigator.userAgent.match(/rai24/gi)?"ios":"browser":"browser";function r(t){let e=!!function(){const t=window.location.pathname.match(/(?:.*?tgr\/)([^\/?]+)(?:.*)/m);let e=null!=t&&t.length?t[1]:null;if(e)switch(e){case"fvg":e="friuliveneziagiulia";break;case"vda":e="valledaosta";break;case"fjk":e="furlanijajulijskakrajina"}return e}();switch(a()){case"raiplaysound":case"raiplay":return window.rai_adv&&window.rai_adv.adv_label?window.rai_adv.adv_label:window.rai_adv&&window.rai_adv.dfp&&window.rai_adv.dfp.label?window.rai_adv.dfp.label:Object(i.e)()||document.body.classList.contains("rai-native")?"hompg":document.body.classList.contains("my-list-page")?"lmlst":"genrc/"+o();case"rainews":case"rai24":return window.rai_adv&&window.rai_adv.adv_label?"google"==t?"sezio/"+window.rai_adv.adv_label:window.rai_adv.adv_label:"google"!==t&&e?"teleg":c("pageType","notiziario")?"google"==t?"sezio/teleg":"teleg":c("pageType","homepage")?"google"==t?"sezio/hpage":"hpage":"google"==t?"sezio/newsx":"newsx"}}function o(){let t="rplyw";switch(a()){case"raiplaysound":t="rplsw";break;case"raiplay":t="rplyw";break;case"rainews":t="browser"!=s?"rnwsa":"rnwsm";break;case"rai":t=Object(i.f)()&&document.referrer.indexOf("msn.com")>-1?"rplyw":"raitw";break;case"raisport":t="rsptw"}return t}function a(){let t=document.domain.indexOf("www.")>-1?document.domain.split(".")[1]:document.domain.split(".")[0];return t=t.split("-")[0],t}function c(t,e){for(var n=document.getElementsByTagName("meta"),i=0;i<n.length;i++)if((n[i].getAttribute("name")==t||n[i].getAttribute("property")==t)&&n[i].getAttribute("content")==e)return n[i].getAttribute("content");return!1}},"../utilities/utils.js":function(t,e,n){"use strict";ction o(t){const e=window.location.search.substring(1).split("&");let n,i;for(i=0;i<e.length;i++)if(n=e[i].split("="),n[0]===t)return void 0===n[1]||decodeURIComponent(n[1]);return null}n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"g",(function(){return c})),n.d(e,"a",(function(){return l}));function a(t,e){const n=document.createElement("script");n.type="text/javascript",n.src=t,"function"==typeof e&&(n.onload=e,n.onreadystatechange=function(){if("complete"===this.readyState)try{e()}catch(t){console.error(t)}}),document.getElementsByTagName("head")[0].appendChild(n)}function c(t,e){if("string"==typeof t)return window.Rai=window.Rai||{},window.Rai[t]=e,e}function l(t){return"string"!=typeof t?null:window.Rai?window.Rai[t]:null}},"./node_modules/lit-element/lit-element.js":function(t,e,n){"use strict";n.d(e,"c",(),n.d(e,"d",(function(){return w})),n.d(e,"b",(function(){return I})),n.d(e,"a",(function(){return T}));var i=n("./node_modules/lit-html/lib/dom.js"),s=n("./node_modules/lit-html/lib/template.js");onst o=a=var c=n("./node_modules/lit-html/lib/render.js"),l=n("./node_modules/lit-html/lib/template-factory.js"),u=n("./node_modules/lit-html/lib/template-instance.js"),d=n("./node_modules/lit-html/lit-html.js");const p=let h=!0;void 0===window.ShadyCSS?h=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),h=!1);const m=_=["html","svg"],f=new Set,b=window.JSCompiler_renameProperty=const E={toAttributefromAttribute,y=D={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:y};.finalized=!0;const g=Element.prototype;g.msMatchesSelector||g.webkitMatchesSelector;const A=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol();onst w=I=(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const P={};.finalized=!0,T.render=T.shadowRootOptions={mode:"open"}},"./node_modules/lit-html/lib/directive.js":"./node_modules/lit-html/lib/dom.js":"./node_modules/lit-html/lib/part.js":"./node_modules/lit-html/lib/parts.js":function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"e",(function(){return _})),n.d(e,"c",(function(){return E}));var i=n("./node_modules/lit-html/lib/directive.js"),s=n("./node_modules/lit-html/lib/dom.js"),r=n("./node_modules/lit-html/lib/part.js"),o=n("./node_modules/lit-html/lib/template-instance.js"),a=n("./node_modules/lit-html/lib/template-result.js"),c=n("./node_modules/lit-html/lib/template.js");const l=u=!1;(();onst y=,"./node_modules/lit-html/lib/render.js":"./node_modules/lit-html/lib/template-factory.js":"./node_modules/lit-html/lib/template-instance.js":"./node_modules/lit-html/lib/template-result.js":"./node_modules/lit-html/lib/template.js":"./node_modules/lit-html/lit-html.js":function(t,e,n){"use strict";n.d(e,"a",(function(){return o.a})),n.d(e,"c",(function(){return a.a})),n.d(e,"d",(function(){return c.b})),n.d(e,"b",(function(){return l}));var i=n("./node_modules/lit-html/lib/parts.js");const s=new var r=n("./node_modules/lit-html/lib/template-result.js"),o=n("./node_modules/lit-html/lib/directive.js"),a=(n("./node_modules/lit-html/lib/dom.js"),n("./node_modules/lit-html/lib/part.js")),c=n("./node_modules/lit-html/lib/render.js");n("./node_modules/lit-html/lib/template-factory.js"),n("./node_modules/lit-html/lib/template-instance.js"),n("./node_modules/lit-html/lib/template.js");"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const l=,"./node_modules/rxjs/_esm5/internal/Observable.js":"./node_modules/rxjs/_esm5/internal/Observer.js":"./node_modules/rxjs/_esm5/internal/Subject.js":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("./node_modules/rxjs/node_modules/tslib/tslib.es6.js"),s=n("./node_modules/rxjs/_esm5/internal/Observable.js"),r=n("./node_modules/rxjs/_esm5/internal/Subscriber.js"),o=n("./node_modules/rxjs/_esm5/internal/Subscription.js"),a=n("./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js"),c=n("./node_modules/rxjs/_esm5/internal/SubjectSubscription.js"),l=n("./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js"),u=r.a),d=s.a),p=d)},"./node_modules/rxjs/_esm5/internal/SubjectSubscription.js":"./node_modules/rxjs/_esm5/internal/Subscriber.js":"./node_modules/rxjs/_esm5/internal/Subscription.js":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=),s=n("./node_modules/rxjs/_esm5/internal/util/isObject.js"),r=n("./node_modules/rxjs/_esm5/internal/util/isFunction.js"),o=),a=function(){ar e;return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this._parentOrParents,a=this._ctorUnsubscribe,l=this._unsubscribe,u=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var d=0;d<n.length;++d){n[d].remove(this)}if(Object(r.a)(l)){a&&(this._unsubscribe=void 0);try{l.call(this)}catch(t){e=t instanceof o?c(t.errors):[t]}}if(i(u)){d=-1;for(var p=u.length;++d<p;){var h=u[d];if(Object(s.a)(h))try{h.unsubscribe()}catch(t){e=e||[],t instanceof o?e=e.concat(c(t.errors)):e.push(t)}}}if(e)throw new o(e)}},t.prototype.add=t.prototype.remove=t.EMPTY=((e=new t).closed=!0,e),t}();,"./node_modules/rxjs/_esm5/internal/config.js":"./node_modules/rxjs/_esm5/internal/observable/empty.js":"./node_modules/rxjs/_esm5/internal/operators/filter.js":"./node_modules/rxjs/_esm5/internal/operators/first.js":function(t,e,n){"use strict";n.d(e,"a",(function(){return D}));var i=function(){function t(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return t.prototype=Object.create(Error.prototype),t}(),s=n("./node_modules/rxjs/_esm5/internal/operators/filter.js"),r=n("./node_modules/rxjs/node_modules/tslib/tslib.es6.js"),o=n("./node_modules/rxjs/_esm5/internal/Subscriber.js"),a=function(){function t(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return t.prototype=Object.create(Error.prototype),t}(),c=n("./node_modules/rxjs/_esm5/internal/observable/empty.js");ar u=),d=o.a);ar h=function(){function t(t){this.defaultValue=t}return t.prototype.call=function(t,e){return e.subscribe(new m(t,this.defaultValue))},t}(),m=o.a);ar f=),b=o.a);ar y=n("./node_modules/rxjs/_esm5/internal/util/identity.js");,"./node_modules/rxjs/_esm5/internal/operators/takeUntil.js":function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var i=n("./node_modules/rxjs/node_modules/tslib/tslib.es6.js"),s=n("./node_modules/rxjs/_esm5/internal/Subscriber.js"),r=n("./node_modules/rxjs/_esm5/internal/Observable.js"),o=n("./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js"),a=n("./node_modules/rxjs/_esm5/internal/util/hostReportError.js");ar l=c(),u=n("./node_modules/rxjs/_esm5/internal/symbol/observable.js");var d=n("./node_modules/rxjs/_esm5/internal/util/isObject.js"),p=function(t){if(t&&"function"==typeof t[u.a])return s=t,if((i=t)&&"number"==typeof i.length&&"function"!=typeof i)return Object(o.a)(t);if(t))return n=t,if(t&&"function"==typeof t[l])return e=t,var e,n,i,s,r=Object(d.a)(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+r+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")},h=s.a),m=(s.a,s.a));s.a;ar f=function(){eturn t.prototype.call=function(t,e){var n=new b(t),i=function(t,e){if(!e.closed){if(t instanceof r.a)return t.subscribe(e);var n;try{n=p(t)(e)}catch(t){e.error(t)}return n}}(this.notifier,new h(n));return i&&!n.seenValue?(n.add(i),e.subscribe(n)):n},t}(),b=m)},"./node_modules/rxjs/_esm5/internal/symbol/observable.js":"./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":"./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":"./node_modules/rxjs/_esm5/internal/util/hostReportError.js":"./node_modules/rxjs/_esm5/internal/util/identity.js":"./node_modules/rxjs/_esm5/internal/util/isFunction.js":"./node_modules/rxjs/_esm5/internal/util/isObject.js":"./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":"./node_modules/rxjs/node_modules/tslib/tslib.es6.js":"./src/rai-tracker/nielsen/rai-nielsen.js":function(t,e,n){"use strict";n.r(e);var i=n("./node_modules/lit-element/lit-element.js"),s=(n("../utilities/utils.js"),n("../../../../templates-handlebars/raiplay/assets-src/js/webcomponents/src/rai-player/player-events.js")),r=n("./node_modules/rxjs/_esm5/internal/Subject.js"),o=n("./node_modules/rxjs/_esm5/internal/operators/filter.js"),a=n("./node_modules/rxjs/_esm5/internal/operators/first.js"),c=n("./node_modules/rxjs/_esm5/internal/operators/takeUntil.js"),l=n("../libraries/packages/rai-adv/src/functions.js");const u=new r.a,d=window.Rai._trackEnqueue,p="P8BE1A60C-9250-4B16-8FBD-3BB359E44CB3",h="PA6C62438-C296-4984-8B10-B30636C39D4E",m="PED6B31DD-946B-4428-8DE3-7208DB939CAF",_="PC0E30EC8-D666-4D7A-A048-966116AEC89D",f="PDEB67730-FD77-4E17-8650-3CFBFB44C447",b="PCEDC92C0-AECF-4A44-8BF6-BE8C06BCB8A8",E="PE4AF27A2-2F19-4608-9611-CAF74AFE73E6",y="PF589024B-256A-49B1-AF84-FB15F2FC355B",D="PEA515014-1E4C-47CE-8135-AF53DD26E171";class S extends i.a{dated(t){this.mediaInfo&&!this.handledEvents&&this.initMediaTrack()}irstUpdated(){d.pageQueue.pipe(Object(o.a)(Boolean),Object(a.a)(),Object(c.a)(u)).subscribe(t=>{var e,n;if(this.pageInfo=t,(e=window)[n="NOLBUNDLE"]=e[n]||{nlsQ:function(t,i,s,r,o,a){return(r=(o=e.document).createElement("script")).async=1,r.src=("http:"===e.location.protocol?"http:":"https:")+"//cdn-gl.imrworldwide.com/conf/"+t+".js#name="+i+"&ns="+n,(a=o.getElementsByTagName("script")[0]).parentNode.insertBefore(r,a),e[i]=e[i]||{g:s,ggPM:,e[i]}},!this.staticLoaded){let e=window.self.location.href,n=document.referrer;window.self!==window.top&&n.split(".it/")[0]==e.split(".it/")[0]||(this.nSdkPageInstance=NOLBUNDLE.nlsQ(this.staticInfo.appID,"raiStatic_"+Date.now(),this.DEBUG?{nol_sdkDebug:"debug"}:{}),"action"!=t.mode&&"extendInfoByComponent"==this.mode&&Object.assign(t,this.pageInfoBaseData),this.pageInfo=t,this.trackPage(),this.staticLoaded=!0)}})}connectedCallback(){super.connectedCallback(),this.initMediaTrack=this.initMediaTrack.bind(this),this.trackPage=this.trackPage.bind(this),this.DEBUG="?trackDebug"==document.location.search,this.staticInfo=function(){var t;let e,n={raiplaysound:{"^\\/$":{appID:"P21B94238-2422-4499-BCFE-5278F756C743",section:"RaiPlaySoundHomePage_BRW"},"^\\/dirette":{appID:"P75D2F3EE-B308-4505-BED5-A2542635E7D6",section:"RaiPlaySoundDirette_BRW"},"^\\/playlist":{appID:m,section:"RaiPlaySoundOnDemand_BRW"},"^\\/audio/":{appID:m,section:"RaiPlaySoundOnDemand_BRW"},"^\\/generi":{appID:m,section:"RaiPlaySoundOnDemand_BRW"},"^\\/i-miei-podcast":{appID:m,section:"RaiPlaySoundOnDemand_BRW"},"^\\/ricerca":{appID:m,section:"RaiPlaySoundOnDemand_BRW"},"^\\/programmi":{appID:m,section:"RaiPlaySoundOnDemand_BRW"},"^\\/programmi\\/adaltavoce":{appID:"P6B615D9A-188E-4F8C-A68C-8AFDB1068880",section:"RaiPlaySoundAudiolibri_BRW"}},raiplay:{"^\\/$":{appID:"PCC76C7AE-27C0-4992-80EC-485231C1A71D",section:"RaiplayHomepage_BRW"},"^\\/programmi":{appID:"P38834CE7-345B-4B99-8229-B9D62965F2BD",section:"RaiplayProgrammi_BRW"},"^\\/euro2020":{appID:"P38834CE7-345B-4B99-8229-B9D62965F2BD",section:"RaiplayProgrammi_BRW"},"^\\/dirette":{appID:"P2C6F76BF-6988-4A03-BF36-C5E2409A3475",section:"RaiplayDirette_BRW"},"^\\/dirette\\/raiyoyo":{appID:E,section:"RaiplayYoyo_BRW"},"^\\/bambini":{appID:b,section:"RaiplayVOD_BRW"},"^\\/documentari":{appID:b,section:"RaiplayVOD_BRW"},"^\\/fiction":{appID:b,section:"RaiplayVOD_BRW"},"^\\/film":{appID:b,section:"RaiplayVOD_BRW"},"^\\/genere":{appID:b,section:"RaiplayVOD_BRW"},"^\\/performing-arts":{appID:b,section:"RaiplayVOD_BRW"},"^\\/programmi\\/quellicheilcalcio":{appID:b,section:"RaiplayVOD_BRW"},"^\\/serietv":{appID:b,section:"RaiplayVOD_BRW"},"^\\/techerai":{appID:b,section:"RaiplayVOD_BRW"},"^\\/video":{appID:b,section:"RaiplayVOD_BRW"},"^\\/guidatv":{appID:b,section:"RaiplayVOD_BRW"},"^\\/teen":{appID:b,section:"RaiplayVOD_BRW"},"^\\/sport":{appID:b,section:"RaiplayVOD_BRW"},"^\\/learning":{appID:b,section:"RaiplayVOD_BRW"},"^\\/musica-e-teatro":{appID:b,section:"RaiplayVOD_BRW"},"^\\/ricerca.html":{appID:b,section:"RaiplayVOD_BRW"},"^\\/account":{appID:y,section:"RaiPlayPagineAccount_BRW"},"^\\/scrivici":{appID:y,section:"RaiPlayPagineAccount_BRW"},"^\\/associa":{appID:y,section:"RaiPlayPagineAccount_BRW"},"^\\/la-mia-lista":{appID:y,section:"RaiPlayPagineAccount_BRW"},"^\\/lucca-comics-and-games":{appID:"PCEDC92C0-AECF-4A44-8BF6-BE8C06BCB8A8",section:"RaiplayVOD_BRW"},"^\\/sport\\/":{appID:"PCEDC92C0-AECF-4A44-8BF6-BE8C06BCB8A8",section:"RaiplayVOD_BRW"},"^\\/serieitaliane":{appID:b,section:"RaiplayVOD_BRW"},"^\\/serieinternazionali":{appID:b,section:"RaiplayVOD_BRW"},"^\\/iframe\\/video\\/2018\\/04\\/Promo-Raiplay-Yoyo-da3036bd-6e65-46a9-a5b2-e728747ad484.html":{appID:E,section:"RaiplayYoyo_BRW"}},rai:{"^\\/$":{appID:h,section:"Rai.itHomePage_BRW",mediaAppID:h},"^\\/presentazionepalinsesti":{appID:h,section:"Rai.itHomePage_BRW",mediaAppID:h},"^\\/smartcard":{appID:D,section:"Smartcard_BRW",mediaAppID:D},"^\\/bilanciodisostenibilita":{appID:D,section:"Smartcard_BRW",mediaAppID:D},"^\\/milluminodimeno":{appID:"PEA515014-1E4C-47CE-8135-AF53DD26E171",section:"raicorporate_BRW",mediaAppID:"PEA515014-1E4C-47CE-8135-AF53DD26E171"}},rainews:{"^\\/$":{appID:"PEDD54F7A-4198-4630-91F0-AB6D24EADFCE",section:"RaiNewsHomePage_BRW"},"^\\/rubriche\\/":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/video\\/":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/maratona":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/audio\\/":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/articoli\\/":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/dossier\\/":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/ambiente":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/artiespettacolo":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/cronaca":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/economiaefinanza":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/esteri":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/politica":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/salute":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/scienzaetecnologia":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/societa":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/sport":{appID:"P1644FE75-760E-4005-9022-225556964485",section:"RaiNewsAttualitaSportiva_BRW"},"^\\/stilidivitaetempolibero":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/viaggieturismo":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/storie":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/ricerca":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/tag?":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/archivio":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/archivio\\/sport":{appID:"P1644FE75-760E-4005-9022-225556964485",section:"RaiNewsAttualitaSportiva_BRW"},"^\\/dirette\\/":{appID:"PFA00B8E1-9A3E-4B77-9B61-E6EC01C04FBE",section:"RaiNewsAttualitaNazionale_BRW"},"^\\/notiziari\\/":{appID:"PFA00B8E1-9A3E-4B77-9B61-E6EC01C04FBE",section:"RaiNewsAttualitaNazionale_BRW"},"^\\/tgr":{appID:"P3FE314A3-85D5-4F6A-BED8-C2305E8FC0B0",section:"RaiNewsAttualitaRegionale_BRW"},"^\\/archivio-rainews\\/":{appID:"P628A27F0-B2A3-4304-A340-73D522AEDFAD",section:"RaiNewsArchivio_BRW"},"^\\//dl\\/rainews\\/speciali-portale\\/manipulite2022\\/":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\//dl\\/rainews\\/speciali-portale\\/manipulite\\/":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/speciali\\/manipulite2022":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/dl\\/rainews\\/speciali-portale\\/giornatadellamemoria2022\\/":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/speciali\\/giornatadellamemoria2022":{appID:_,section:"RaiNewsApprofondimenti_BRW"},"^\\/ran24\\/speciali\\/2020\\/covid19\\/":{appID:_,section:"RaiNewsApprofondimenti_BRW"}},raisport:{"^\\/$":{appID:"PBB19E3EF-A821-4700-A5DE-E109F942107D",section:"RaiSportHomepage_BRW"},"^\\/dl\\/raiSport\\/speciali(\\/live)?\\/calcio":{appID:f,section:"RaiSportArticoli_BRW"},"^\\/articoli\\/":{appID:f,section:"RaiSportArticoli_BRW"},"^\\/dirette.html":{appID:"PDAF54851-CBD9-4057-95DB-3EA04FBC9955",section:"RaiSportVideo_BRW"},"^\\/video\\/":{appID:"PDAF54851-CBD9-4057-95DB-3EA04FBC9955",section:"RaiSportVideo_BRW"},"^\\/foto\\/":{appID:f,section:"RaiALTRISPORT_BRW"},"^\\/archivio.html":{appID:f,section:"RaiSportArticoli_BRW"},"^\\/archivio.html\\?tematica=calcio":{appID:f,section:"RaiCALCIO_BRW"},"^\\/speciali\\/":{appID:f,section:"RaiSportArticoli_BRW"},"^\\/dl/rai24/assets/template/iframe.html":{appID:f,section:"RaiALTRISPORT_BRW"},"^\\/approfondimenti\\/calcio-euro-2020":{appID:f,section:"RaiSportArticoli_BRW"}},raiplayyoyo:{"^\\/$":{appID:E,section:"RaiplayYoyo_BRW"}}};switch(Object(l.c)()){case"raiplaysound":e={appID:"P9585DD50-2F01-4F67-B5D7-1B91483865EA",section:"RaiPlaySound_BRW"};let i=null!==(t=document.querySelector('meta[name="pageType"]'))&&void 0!==t?t:void 0;i&&"canale"===i.content?e={appID:"P75D2F3EE-B308-4505-BED5-A2542635E7D6",section:"RaiPlaySoundDirette_BRW"}:-1!==document.location.pathname.toLocaleLowerCase().indexOf("audiolibri")?e={appID:"P6B615D9A-188E-4F8C-A68C-8AFDB1068880",section:"RaiPlaySoundAudiolibri_BRW"}:Object.entries(n.raiplaysound).forEach(t=>{new RegExp(t[0]).test(document.location.pathname)&&(e.appID=t[1].appID,e.section=t[1].section)});break;case"raiplay":e={appID:"PC991BBA3-EAB0-4C17-8448-538B71E10785",section:"Raiplay_BRW",mediaAppID:"P05460EF0-1432-44AB-9989-0792142743FB"},Object.entries(n.raiplay).forEach(t=>{new RegExp(t[0]).test(document.location.pathname)&&(e.appID=t[1].appID,e.section=t[1].section)});break;case"raiscuola":e={appID:"P496900DB-A5B0-4D70-99C4-0C8A7EC76F34",section:"Raiscuola_BRW",mediaAppID:"P496900DB-A5B0-4D70-99C4-0C8A7EC76F34"};break;case"raicultura":e={appID:"P26486DDA-2174-4C0A-9DB2-932D4B55BDE8",section:"RaiCultura_BRW",mediaAppID:"P26486DDA-2174-4C0A-9DB2-932D4B55BDE8"};break;case"memo":e={appID:p,section:"Memo_BRW",mediaAppID:p};break;case"rainews":e={appID:"P1BB3E6ED-1B4A-4FC0-AB2B-134D4A9989DE",section:"RaiNews_BRW",mediaAppID:"P29DA9F4E-28A5-40D2-8A85-480C18518450"},Object.entries(n.rainews).forEach(t=>{new RegExp(t[0]).test(document.location.pathname)&&(e.appID=t[1].appID,e.section=t[1].section)});break;case"rai":e={appID:h,section:'Rai.itHomePage_BRW"',mediaAppID:h},Object.entries(n.rai).forEach(t=>{new RegExp(t[0]).test(document.location.pathname)&&(e.appID=t[1].appID,e.section=t[1].section,e.mediaAppID=t[1].mediaAppID?t[1].mediaAppID:e.mediaAppID)});break;case"raisport":e={appID:"P1644FE75-760E-4005-9022-225556964485",section:"RaiSport_BRW",mediaAppID:"P66ABF4FE-3398-461B-AB04-29E3597E628A"},Object.entries(n.raisport).forEach(t=>{new RegExp(t[0]).test(document.location.pathname+document.location.search)&&(e.appID=t[1].appID,e.section=t[1].section)});break;case"servizitelevideo":case"televideo":case"origintelevideo":e={appID:"P1BB3E6ED-1B4A-4FC0-AB2B-134D4A9989DE",section:"RaiNews_BRW",mediaAppID:"P29DA9F4E-28A5-40D2-8A85-480C18518450"};break;case"raiplayyoyo":e={appID:E,section:"RaiplayYoyo_BRW",mediaAppID:E}}return e}()}disconnectedCallback(){super.disconnectedCallback(),u.next(),u.complete()}initMediaTrack(){this.hbStarted=!1,this.stopHeartbeat=t=>{let e=!0===t?this.lastContentTime:this.time;window.clearInterval(this.hbIntervall),this.hbStarted=!1,this.lastPlayheadPosition>e&&(e=this.lastPlayheadPosition,!0===t?this.lastContentTime=this.lastPlayheadPosition:this.time=this.lastPlayheadPosition);let n=this.lastPlayheadPosition;for(;n<=e-1&&n>e-3;)n++,this.nSdkInstance.ggPM("setPlayheadPosition",n);this.DEBUG&&console.log("rai test: stopplayheadposition ")},this.startHeartbeat=t=>{this.hbStarted||("number"!=typeof t&&(t=0),this.hbStarted=!0,this.DEBUG&&console.log("rai test: startplayheadposition "),this.hbIntervall=window.setInterval(()=>{if(!this.mediaInfo.is_live&&t>=this.contentLength)return this.sendStreamEnd(this.contentLength),!1;this.lastPlayheadPosition=t,this.nSdkInstance.ggPM("setPlayheadPosition",t),t++},1e3))},this.sendStreamEnd=()=>{this.streamEndFired||(this.streamEndFired=!0,this.stopHeartbeat(),this.nSdkInstance.ggPM("end",this.time))},this.closePlayer=()=>{!this.playerClosed&&this.playerCreated&&(this.playerClosed=!0,this.hbStarted&&this.stopHeartbeat(!this.isInAdv),this.isInAdv&&this.nSdkInstance.ggPM("stop",this.time),console.log("test: stop sended"),this.nSdkInstance.ggPM("end",this.lastContentTime),console.log("test: end sended"))};let t=s.a.media,e=[t.LOADMETADATA,t.PLAYBACK_STARTED,t.REPLAY,t.READY,t.FIRSTPLAY,t.ADS.LOADED,t.ADS.STARTED,t.PLAYING,t.ADS.RESUMED,t.PAUSE,t.BUFFERING_STARTED,t.BUFFERING_END,t.SEEK_START,t.SEEK_END,t.READY_FOR_POSTROLL,t.ENDED,t.DISPOSE,t.ADS.COMPLETE,t.ADS.SKIPPED,t.ADS.ADBUFFERING,t.ADS.ADBUFFERINGEND,t.NETWORK_ERROR,t.ADS.ERROR];this.handledEvents=t,d.mediaQueue.pipe(Object(o.a)(,Object(c.a)(u)).subscribe(t=>{try{this.trackMedia(t.detail.eventData)}catch(t){console.error(t)}})}trackPage(){var t,e;let n=new URL(document.location.href),i=document.location.hostname,s={type:"static",assetid:function(t){switch(!0){case i.includes("raiplay")&&"/guidatv"==document.location.pathname:return"guidatv_"+n.searchParams.get("channel")+"_"+n.searchParams.get("date");case i.includes("raisport")&&"/archivio.html"==document.location.pathname:return"archivio_"+n.searchParams.get("tematica");default:return t.pageInfo.id||document.location.pathname.replace(/[^\w\s\/-]/gi,"").replace(/\//gi,"__")}}(this),section:this.staticInfo.section};i.includes("rainews")&&document.location.pathname.includes("/webview")||null!==(t=navigator)&&void 0!==t&&null!==(e=t.userAgent)&&void 0!==e&&e.includes("Rai24")||this.nSdkPageInstance.ggPM("staticstart",s)}trackMedia(t){let e=this.handledEvents,n=this.mediaInfo,i=this.mediaInfo.track_info;this.time=n.is_live&&"content"==t.mediaType?parseInt(Date.now()/1e3):parseInt(t.currentTime);let s=e=>{this.nSdkInstance&&!e||(this.playerClosed||(this.nSdkInstance=NOLBUNDLE.nlsQ(this.staticInfo.mediaAppID,"raiPlayer_"+Date.now(),this.DEBUG?{nol_sdkDebug:"debug"}:{})),this.contentMetadataObject={type:"content",assetid:i.id.slice(12),program:n.is_live?i.title.substring(0,100):i.program_title?i.program_title.substring(0,100):i.id,title:n.is_live?"la diretta di "+i.channel+" in streaming live":i.title.substring(0,100),length:n.is_live?"86400":t.mediaDuration.toString(),airdate:n.is_live?"19700101 00:00:00":n.date_published.split("-").reverse().join("")+" 00:00:00",isfullepisode:n.is_live||"Integrale"==n.form?"y":"n",adloadtype:"2"},this.adMetadataObject={assetid:"AD-GENERAL",type:"preroll"},this.contentLength=n.is_live?86400:t.mediaDuration,this.lastContentTime=n.is_live?parseInt(Date.now()/1e3):0,this.playerCreated=!0,this.playerClosed=!1,this.streamEndFired=!1)};if(t.eventName!=e.READY&&t.eventName!=e.REPLAY&&t.eventName!=e.ADS.STARTED||(s(t.eventName==e.REPLAY||t.eventName==e.READY),this.DEBUG&&console.log("Nielsen asset ready")),t.eventName==e.PLAYBACK_STARTED&&(this.playbackStarted=!0),!this.playerClosed&&this.playbackStarted)switch(t.eventName){case e.ADS.LOADED:break;case e.ADS.STARTED:switch(this.isSeeking=!1,this.contentBuffering=!1,this.contentDownloading=!1,t.mediaType){case"preroll":this.hbStarted?(this.stopHeartbeat(!0),this.DEBUG&&console.log("rai test: action stop "+t.mediaType),this.nSdkInstance.ggPM("stop",this.lastContentTime)):(this.DEBUG&&console.log("rai test: action loadmeta "+t.eventName),this.nSdkInstance.ggPM("loadMetadata",this.contentMetadataObject));break;case"midroll":this.hbStarted&&(this.stopHeartbeat(!0),this.nSdkInstance.ggPM("stop",this.lastContentTime))}this.adMetadataObject.assetid=t.creativeId?t.creativeId:Date.now().toString(),this.adMetadataObject.type=t.mediaType,this.isInAdv=!0,this.DEBUG&&console.log("rai test: action loadmeta adv "+t.mediaType),this.nSdkInstance.ggPM("loadMetadata",this.adMetadataObject),this.startHeartbeat(0);break;case e.ADS.ADBUFFERING:if(!this.isInAdv)break;this.stopHeartbeat(),this.DEBUG&&console.log("rai test: action stop adv "+t.eventName),this.nSdkInstance.ggPM("stop",this.time);break;case e.ADS.ADBUFFERINGEND:case e.ADS.RESUMED:if(this.hbStarted||!this.isInAdv)break;this.DEBUG&&console.log("rai test: action loadmeta adv "+t.mediaType),this.nSdkInstance.ggPM("loadMetadata",this.adMetadataObject),this.startHeartbeat(this.time);break;case e.FIRSTPLAY:this.hbStarted||(this.contentPaused=!1,this.contentBuffering=!1,this.contentDownloading=!1,this.isInAdv=!1,this.DEBUG&&console.log("rai test: action loadmeta "+t.eventName),this.nSdkInstance.ggPM("loadMetadata",this.contentMetadataObject),this.startHeartbeat(this.time));break;case e.PLAYING:if(this.contentPaused=!1,this.isSeeking||this.contentBuffering)return;if(this.contentBuffering=!1,this.contentDownloading=!1,this.hbStarted){if(!this.isInAdv)break;this.stopHeartbeat()}this.isInAdv=!1,this.DEBUG&&console.log("rai test: action loadmeta "+t.eventName),this.nSdkInstance.ggPM("loadMetadata",this.contentMetadataObject),this.startHeartbeat(this.time);break;case e.PAUSE:if(this.contentPaused=!0,t.mediaDuration<=2&&!n.is_live||!this.hbStarted)break;this.stopHeartbeat(),this.DEBUG&&console.log("rai test: action stop "+t.eventName),this.nSdkInstance.ggPM("stop",this.time);break;case e.SEEK_START:if(this.isSeeking=!0,!this.hbStarted)break;n.is_live||(this.time=parseInt(t.additionalData.startSeekTime)),this.stopHeartbeat(),this.DEBUG&&console.log("rai test: action stop "+t.eventName),this.nSdkInstance.ggPM("stop",this.time);break;case e.SEEK_END:if(this.isSeeking=!1,this.hbStarted||this.contentPaused||this.contentBuffering||this.contentDownloading)return;this.isInAdv=!1,this.DEBUG&&console.log("rai test: action loadmeta "+t.eventName),this.nSdkInstance.ggPM("loadMetadata",this.contentMetadataObject),this.startHeartbeat(this.time);break;case e.DOWNLOAD_DATA_START:if(this.isInAdv)return;if(this.contentDownloading=!0,!this.hbStarted)return;this.stopHeartbeat(),this.DEBUG&&console.log("rai test: action stop "+t.eventName),this.nSdkInstance.ggPM("stop",this.time);break;case e.DOWNLOAD_DATA_END:if(this.contentDownloading=!1,this.hbStarted||this.contentPaused)return;this.isInAdv=!1,this.DEBUG&&console.log("rai test: action loadmeta "+t.eventName),this.nSdkInstance.ggPM("loadMetadata",this.contentMetadataObject),this.startHeartbeat(this.time);break;case e.BUFFERING_STARTED:if(this.isInAdv)return;if(this.contentBuffering=!0,!this.hbStarted)return;this.stopHeartbeat(),this.DEBUG&&console.log("buffering"),this.DEBUG&&console.log("rai test: action stop "+t.eventName),this.nSdkInstance.ggPM("stop",this.time);break;case e.BUFFERING_END:if(this.contentBuffering=!1,this.hbStarted||this.contentPaused)return;this.isInAdv=!1,this.DEBUG&&console.log("rai test: action loadmeta "+t.eventName),this.nSdkInstance.ggPM("loadMetadata",this.contentMetadataObject),this.startHeartbeat(this.time);break;case e.READY_FOR_POSTROLL:n.is_live||this.sendStreamEnd(this.time);break;case e.DISPOSE:console.log("test: closePlayer"),this.closePlayer();break;case e.ENDED:if(n.is_live)break;this.playerClosed=!0,this.sendStreamEnd(this.time);break;case e.ADS.SKIPPED:case e.ADS.COMPLETE:this.stopHeartbeat(),this.DEBUG&&console.log("rai test: action stop adv "+t.eventName),this.nSdkInstance.ggPM("stop",this.time);break;case e.NETWORK_ERROR:this.stopHeartbeat(),this.DEBUG&&console.log("rai test: action stop "+t.eventName),this.nSdkInstance.ggPM("stop",this.time);break;case e.ADS.ERROR:this.hbStarted&&this.isInAdv&&(this.stopHeartbeat(),this.DEBUG&&console.log("rai test: action stop "+t.eventName),nSdkInstance.ggPM("stop",this.time));break;default:this.DEBUG&&console.log("Nielsen evento non gestito:"+t.eventName)}}}customElements.define("rai-nielsen",S)}});
//# sourceMappingURL=rai-nielsen.js.map