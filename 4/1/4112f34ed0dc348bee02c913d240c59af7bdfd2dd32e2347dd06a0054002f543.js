(self.webpackChunk=self.webpackChunk||[]).push([[85060],{13496:(e,t,n)=>{"use strict";n.r(t),n.d(t,{bindElement:()=>re,bindPlayer:()=>de,bindPlayerElement:()=>le,bindPlayerLinks:()=>ce,clearAll:()=>ue,handleLinkElementClick:()=>se});var o=n(62559),i=n(27641),a=n(67367),r=(n(16216),n(49458));const d={name:"VideojsPlayer",components:{VideoPlayer:n(38747).Y7},props:{media:{type:Object,default:void 0},source:{type:String,required:!0},format:{type:String,required:!0},width:{type:[Number,String],required:!1,default:""},autoplay:{type:Boolean,default:!1},poster:{type:String,default:""},fullscreen:{type:Boolean,default:!1}},emits:["ready","playing","loadeddata","canplay","canplaythrough","play","paused","ended","video_tracking"],data:function(){return{player:void 0,states:{loadeddata:"loadeddata",canplay:"canplay",canplaythrough:"canplaythrough",play:"play",playing:"playing",pause:"paused",ended:"ended"},options:{muted:!0,autoplay:this.autoplay,fluid:this.fullscreen,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:this.format,src:this.source}],poster:this.poster||"",html5:{hls:{withCredentials:!1}}}}},methods:{onStateChanged:function(e){var t=this;Object.keys(this.states).forEach((function(n){e[n]&&t.$emit(t.states[n],t.player,{media:t.media,event:e})}))},onReady:function(e){var t,n,o=this;this.player=e.target.player,this.$emit("ready",this.player,{playerId:void 0}),(null===(t=(n=this.player).readyState)||void 0===t?void 0:t.call(n))<1&&this.player.one("loadedmetadata",(function(){e.target.player.tech({IWillNotUseThisInPlugins:!0}).hls})),this.player.on("volumechange",(function(){o.$emit("video_tracking",{event:"video_player.action.volume",value:o.player})})),this.player.on("ratechange",(function(){o.$emit("video_tracking",{event:"video_player.action.speed",value:o.player})}))}}};var l=n(83744);const s=(0,l.Z)(d,[["render",function(e,t,n,o,i,a){var d=(0,r.resolveComponent)("video-player");return(0,r.openBlock)(),(0,r.createBlock)(d,{ref:"videoPlayer",controls:"",class:"video-player-box",options:i.options,playsinline:!0,onStatechanged:t[0]||(t[0]=function(e){return a.onStateChanged(e)}),onReady:a.onReady},null,8,["options","onReady"])}]]);var c=["id"],u=["data-custom-gdpr-compliance-notice"],p={class:"m-em-video__cmp__disclaimer"},y={class:"m-em-video__cmp__disclaimer-wrapper"},h=(0,r.createElementVNode)("span",{class:"a-svg a-svg--picto-play-circle"},null,-1),f=(0,r.createElementVNode)("span",{class:"a-svg a-svg--picto-play-circle"},null,-1);var m=n(50814),v=n(59107),g=n.n(v),b=n(72339);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S="c:youtube";function E(e){return{hl:e,showinfo:0,color:"white",rel:1,enablejsapi:1,origin:window.location.origin}}const C=function(){return S},k=function(e,t){var n={embed_config:t};return w(w({},E(e)),n)},O=function(e,t){var n={listType:"playlist",list:t};return w(w({},E(e)),n)},_=function(e,t,n){var o={listType:"liveStream",channel:t,embed_config:n};return w(w({},E(e)),o)},T=function(){var e;return e={},(0,i.Z)(e,window.YT.PlayerState.UNSTARTED,"canplay"),(0,i.Z)(e,window.YT.PlayerState.PLAYING,"play"),(0,i.Z)(e,window.YT.PlayerState.PAUSED,"paused"),(0,i.Z)(e,window.YT.PlayerState.BUFFERING,"buffering"),(0,i.Z)(e,window.YT.PlayerState.ENDED,"ended"),(0,i.Z)(e,window.YT.PlayerState.CUED,"cued"),e},V=function(){var e=new b.Z;return e.setVendor(S),e.isVendorEnabled(S)},A=function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",e.setAttribute("async","");var t=document.querySelectorAll("script")[0];t?t.parentNode.insertBefore(e,t):document.head.append(e)},I=function(e,t){var n=document.querySelector(e);n&&(n.style.display=t)},Z=function(e,t){t.forEach((function(t){e!==t&&window.YT.get(t).pauseVideo()}))},j={getTCData:(N=(0,m.Z)(g().mark((function e(){var t;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={tcString:"",addtlConsent:""},"undefined"==typeof __tcfapi){e.next=4;break}return e.next=4,__tcfapi("getTCData",2,(function(e,n){n&&(t={tcString:e.tcString,addtlConsent:e.addtlConsent})}));case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),function(){return N.apply(this,arguments)}),getTmsIu:function(){try{return void 0===tms?void 0:tms.tags.ads.youtube.getIu()}catch(e){return""}},getTmsCustParams:function(e){try{return void 0===tms?void 0:tms.tags.ads.youtube.getCustParams(e)}catch(e){return""}}};var N;function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const $={embedConfig:(M=(0,m.Z)(g().mark((function e(t,n,o,i){var a,r,d,l,s;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getTCData();case 2:return a=e.sent,r=j.getTmsIu(),d=j.getTmsCustParams(n),l=JSON.parse(t),s={adsConfig:{nonPersonalizedAd:o,adTagParameters:{cmpGdpr:!1===i?0:1,cmpVcd:a.tcString,cmpGvcd:a.addtlConsent}}},void 0!==r&&(s.adsConfig.adTagParameters.iu=r),void 0!==d&&(s.adsConfig.adTagParameters.cust_params=d),e.abrupt("return",JSON.stringify(D(D({},l),s)));case 10:case"end":return e.stop()}}),e)}))),function(e,t,n,o){return M.apply(this,arguments)})};var M,R=[];const L={name:"YoutubePlayer",props:{media:{type:Object,default:void 0},width:{type:[Number,String],required:!1,default:void 0},height:{type:[Number,String],required:!1,default:void 0},videoId:{type:String,required:!0},playlist:{type:String,required:!1,default:void 0},live:{type:String,required:!1,default:void 0},locale:{type:String,required:!0},autoplay:{type:Boolean,default:!1},type:{type:String,required:!1,default:void 0},embed_config:{type:String,required:!1,default:void 0},playsinline:{type:String,required:!1,default:void 0}},emits:["destroyed","ready","ad_playing","ad_ending","play","paused","ended","cued","buffering","loadeddata","canplay","canplaythrough","playing","video_tracking"],data:function(){return{player:void 0,states:void 0,nonPersonalizedAd:!1}},computed:{playerId:function(){return"player-".concat(this.videoId,"-").concat(this.type)},noticeAttribute:function(){return'[data-custom-gdpr-compliance-notice="'.concat(this.playerId,'"]')},getGdpr:function(){return"undefined"!==window.contextlayer&&window.contextlayer.gdpr_compliance}},mounted:function(){this.reactiveAutoplay=this.autoplay;var e=/bot|google|baidu|bing|msn|teoma|slurp|yandex|crawl|spider/i.test(window.navigator.userAgent);!1===this.getGdpr||this.isConsentedVendor()||e?this.loadVideo():this.loadConsentNotice(),window.addEventListener("message",this.onVolumeChange)},methods:{playVideo:function(){this.player&&this.player.playVideo()},isConsentedVendor:function(){return V()},loadVideo:function(){var e=this;new Promise((function(e){window.YT&&e(),window.onYouTubeIframeAPIReady=e,A()})).then((function(){$.embedConfig(e.embed_config,e.type,e.nonPersonalizedAd,e.getGdpr).then((function(t){e.states=T();var n=k(e.locale,t);e.playlist&&(n=O(e.locale,e.videoId)),e.live&&(n=_(e.locale,e.videoId,t)),e.playsinline&&(n.playsinline=e.playsinline),e.player=new window.YT.Player(e.playerId,{videoId:e.live?"live_stream":e.videoId,height:e.height,width:e.width,playerVars:n,events:{onReady:e.onReady,onStateChange:e.onPlayerStateChange,onAdStart:e.onPlayerAdPlay,onAdEnd:e.onPlayerAdEnd,onPlaybackRateChange:e.onPlaybackRateChange,onPlaybackQualityChange:e.onQualityChange}}),R.push(e.playerId)}))}))},loadConsentNotice:function(){var e=this;return(0,m.Z)(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(e.noticeAttribute,"inline");case 1:case"end":return t.stop()}}),t)})))()},acceptAllConsentForVendor:function(){b.Z.enableAllConsentForVendor(C(),"google"),I(this.noticeAttribute,"none"),this.reactiveAutoplay=!0,this.nonPersonalizedAd=!0,this.loadVideo()},acceptAllConsent:function(){b.Z.enableAllConsent(),I(this.noticeAttribute,"none"),this.reactiveAutoplay=!0,this.nonPersonalizedAd=!1,this.loadVideo()},onReady:function(){(!1===this.getGdpr||this.isConsentedVendor())&&(Z(this.playerId,R),this.$emit("ready",this.player,{playerId:this.playerId}),this.reactiveAutoplay&&this.playVideo())},onVolumeChange:function(e){var t;if(e.source===(null===(t=this.player)||void 0===t?void 0:t.getIframe().contentWindow)){var n,o=JSON.parse(e.data);"infoDelivery"===o.event&&null!==(n=o.info)&&void 0!==n&&n.volume&&this.$emit("video_tracking",{event:"video_player.action.volume",value:this.player})}},onPlaybackRateChange:function(){this.$emit("video_tracking",{event:"video_player.action.speed",value:this.player})},onQualityChange:function(){this.$emit("video_tracking",{event:"video_player.action.quality",value:this.player})},onPlayerStateChange:function(e){e.data===window.YT.PlayerState.PLAYING&&Z(this.playerId,R),"string"==typeof this.states[e.data]&&this.$emit(this.states[e.data],this.player,{playerId:this.playerId,media:this.media,event:e})},onPlayerAdPlay:function(e){this.$emit("ad_playing",this.player,{playerId:this.playerId,event:e})},onPlayerAdEnd:function(e){this.$emit("ad_ending",this.player,{playerId:this.playerId,event:e})}}},B=(0,l.Z)(L,[["render",function(e,t,n,o,i,a){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{id:a.playerId},[a.getGdpr?((0,r.openBlock)(),(0,r.createElementBlock)("figure",{key:0,"data-custom-gdpr-compliance-notice":a.playerId,style:{display:"none"},class:(0,r.normalizeClass)({"m-em-video__cmp":a.getGdpr})},[(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("div",y,[(0,r.renderSlot)(e.$slots,"consent-text",{},(function(){return[(0,r.createElementVNode)("p",null,(0,r.toDisplayString)(e.$translate("custom.youtube.consent.notice.text")),1)]})),(0,r.renderSlot)(e.$slots,"accept-analytics-button",{click:a.acceptAllConsentForVendor},(function(){return[(0,r.createElementVNode)("button",{type:"button",onClick:t[0]||(t[0]=function(){return a.acceptAllConsentForVendor&&a.acceptAllConsentForVendor.apply(a,arguments)})},[h,(0,r.createTextVNode)((0,r.toDisplayString)(e.$translate("custom.youtube.consent.notice.acceptAllConsentForVendor")),1)])]})),(0,r.createElementVNode)("p",null,(0,r.toDisplayString)(e.$translate("custom.youtube.consent.notice.or")),1),(0,r.renderSlot)(e.$slots,"accept-all-consent-button",{click:a.acceptAllConsent},(function(){return[(0,r.createElementVNode)("button",{type:"button",onClick:t[1]||(t[1]=function(){return a.acceptAllConsent&&a.acceptAllConsent.apply(a,arguments)})},[f,(0,r.createTextVNode)((0,r.toDisplayString)(e.$translate("custom.youtube.consent.notice.acceptAllConsent")),1)])]}))])])],10,u)):(0,r.createCommentVNode)("",!0)],8,c)}]]);var Y=["id"],x=["aria-label"],U=[(0,r.createElementVNode)("span",{class:"a-svg a-svg--picto-move"},null,-1)],G={key:0,class:"video__title"};var z=n(19327);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Q={name:"VideoPlayer",components:{YoutubePlayer:B,VideojsPlayer:s},props:{mediaId:{type:String,required:!1,default:void 0},videoType:{type:String,required:!0},source:{type:String,required:!0},title:{type:String,default:void 0},format:{type:String,default:""},width:{type:Number,default:void 0},height:{type:Number,default:void 0},duration:{type:String,default:void 0},autoplay:{type:Boolean,default:!1},videoId:{type:String,default:void 0},playlist:{type:String,default:void 0},live:{type:String,default:void 0},locale:{type:String,required:!0},poster:{type:String,default:""},fullscreen:{type:Boolean,default:!1},type:{type:String,required:!1,default:void 0},embed_config:{type:String,default:void 0},playsinline:{type:String,default:void 0}},emits:["destroyed","ready","ad_playing","ad_ending","play","paused","ended","cued","buffering","loadeddata","canplay","canplaythrough","playing"],data:function(){return{playerId:void 0,isStuck:!1,pipEnabled:!0,player:void 0,mouseDown:!1,pipSpaceMoveSelector:"u-pip-space-move",position:{}}},computed:{selectorId:function(){return"#video-".concat(this.videoType,"-").concat(this.videoId)},isYoutube:function(){return"youtube"===this.videoType},isVideoJs:function(){return"videojs"===this.videoType},isPlaysinline:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream?this.playsinline:"0"},wrapperClasses:function(){return"m-em-video__video-wrapper video-type-".concat(this.videoType)},media:function(){var e=document.querySelector('[data-media-video-id="'.concat(this.mediaId,'"]'));return e?JSON.parse(e.innerHTML):{}}},created:function(){window.addEventListener("scroll",this.handleScroll,{passive:!0}),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("touchstart",this.onMouseMove,!1),document.addEventListener("touchend",this.onMouseUp,!1),document.addEventListener("touchmove",this.onMouseMove,!1)},unmounted:function(){this.$emit("destroyed",{videoType:this.videoType,playerId:this.playerId}),window.removeEventListener("scroll",this.handleScroll),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("touchstart",this.onMouseMove),document.removeEventListener("touchend",this.onMouseUp),document.removeEventListener("touchmove",this.onMouseMove),document.querySelector(".".concat(this.pipSpaceMoveSelector))&&document.querySelector(".".concat(this.pipSpaceMoveSelector)).remove()},methods:{onMouseMove:function(e){if(!this.mouseDown&&document.querySelector(".".concat(this.pipSpaceMoveSelector))&&document.querySelector(".".concat(this.pipSpaceMoveSelector)).remove(),!0===this.mouseDown){if(!document.querySelector(".".concat(this.pipSpaceMoveSelector))){var t=document.querySelector("[data-article-content]"),n=document.createElement("div");n.setAttribute("class",this.pipSpaceMoveSelector),t.append(n)}"touchmove"===e.type?(document.documentElement.style.overflow="hidden",this.position.left="".concat(e.touches[0].clientX-10,"px"),this.position.top="".concat(e.touches[0].clientY-10,"px")):(this.position.left="".concat(e.clientX-10,"px"),this.position.top="".concat(e.clientY-10,"px")),document.querySelector(this.selectorId).style.left=this.position.left,document.querySelector(this.selectorId).style.top=this.position.top}},onMousedown:function(){this.mouseDown=!0},onMouseUp:function(){document.documentElement.style.overflow="auto",this.mouseDown=!1},handleScroll:function(){if(this.pipEnabled){this.isYoutube&&!1===B.methods.isConsentedVendor()&&(this.pipEnabled=!1);var e=document.querySelector("[data-media-video-".concat(this.mediaId,"]")),t=document.querySelector("[data-article-content]"),n=document.querySelector("body"),o=e.offsetTop,i=t.offsetTop+t.offsetHeight;if((document.documentElement.scrollTop>o&&document.documentElement.scrollTop<i||window.scrollY+500<o)&&window.currentVideoPlayingId===this.videoId){var a;null===(a=document.querySelector(this.selectorId))||void 0===a||a.closest(".u-media-video-playing").classList.add("u-pip-active"),n.classList.add("u-pip-activated"),this.isStuck=!0}else{var r,d;if(null===(r=document.querySelector(this.selectorId))||void 0===r||!r.closest(".u-media-video-playing").classList.contains("u-pip-active"))return;null===(d=document.querySelector(this.selectorId))||void 0===d||d.removeAttribute("style"),document.documentElement.scrollTop>i&&(this.isYoutube?this.player.pauseVideo():this.isVideoJs&&this.player.pause()),n.classList.remove("u-pip-activated"),document.querySelector(this.selectorId).closest(".u-media-video-playing").classList.remove("u-pip-active"),this.isStuck=!1}}},disablePip:function(){var e=document.querySelector("body");this.isYoutube?this.player.pauseVideo():this.isVideoJs&&this.player.pause(),document.querySelector(this.selectorId).closest(".u-media-video-playing").classList.remove("u-pip-active"),e.classList.remove("u-pip-activated"),this.isStuck=!1,this.pipEnabled=!1},onPlayerReady:function(e,t){this.playerId=t.playerId,this.$emit("ready",e,J({videoType:this.videoType},t)),this.player=e},onPlayerAdPlay:function(e,t){this.$emit("ad_playing",e,J({videoType:this.videoType},t))},onPlayerAdEnd:function(e,t){this.$emit("ad_ending",e,J({videoType:this.videoType},t))},onPlayerPlay:function(e,t){this.$emit("play",e,J({videoType:this.videoType},t)),this.pipEnabled=!0,window.currentVideoPlayingId=this.videoId},onPlayerPaused:function(e,t){this.$emit("paused",e,J({videoType:this.videoType},t))},onPlayerEnded:function(e,t){this.$emit("ended",e,J({videoType:this.videoType},t))},onPlayerVideoCued:function(e,t){this.$emit("cued",e,J({videoType:this.videoType},t))},onPlayerBuffering:function(e,t){this.$emit("buffering",e,J({videoType:this.videoType},t))},onPlayerLoadedData:function(e,t){this.$emit("loadeddata",e,J({videoType:this.videoType},t))},onPlayerCanPlay:function(e,t){this.$emit("canplay",e,J({videoType:this.videoType},t))},onPlayerCanPlayThrough:function(e,t){this.$emit("canplaythrough",e,J({videoType:this.videoType},t))},onPlayerPlaying:function(e,t){this.$emit("playing",e,J({videoType:this.videoType},t))},onSetTrackingAction:function(e){z.Z.publish(e.event,[e.value])}}},W=(0,l.Z)(Q,[["render",function(e,t,n,o,i,a){var d=(0,r.resolveComponent)("youtube-player"),l=(0,r.resolveComponent)("videojs-player");return(0,r.openBlock)(),(0,r.createElementBlock)("div",{id:"video-".concat(n.videoType,"-").concat(n.videoId),class:(0,r.normalizeClass)(["m-em-video",{"m-em-video--pip":i.isStuck}])},[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(a.wrapperClasses)},[a.isYoutube?((0,r.openBlock)(),(0,r.createBlock)(d,{key:0,autoplay:n.autoplay,media:a.media,width:n.width,height:n.height,"video-id":n.videoId,type:n.type,locale:n.locale,playlist:n.playlist,live:n.live,embed_config:n.embed_config,playsinline:a.isPlaysinline,onReady:a.onPlayerReady,onAd_playing:a.onPlayerAdPlay,onAd_ending:a.onPlayerAdEnd,onPlay:a.onPlayerPlay,onPaused:a.onPlayerPaused,onEnded:a.onPlayerEnded,onCued:a.onPlayerVideoCued,onBuffering:a.onPlayerBuffering,onVideo_tracking:a.onSetTrackingAction},null,8,["autoplay","media","width","height","video-id","type","locale","playlist","live","embed_config","playsinline","onReady","onAd_playing","onAd_ending","onPlay","onPaused","onEnded","onCued","onBuffering","onVideo_tracking"])):(0,r.createCommentVNode)("",!0),a.isVideoJs?((0,r.openBlock)(),(0,r.createBlock)(l,{key:1,autoplay:n.autoplay,media:a.media,source:n.source,format:n.format,width:n.width,poster:n.poster,fullscreen:n.fullscreen,onReady:a.onPlayerReady,onLoadeddata:a.onPlayerLoadedData,onCanplay:a.onPlayerCanPlay,onCanplaythrough:a.onPlayerCanPlayThrough,onPlay:a.onPlayerPlay,onPlaying:a.onPlayerPlaying,onPaused:a.onPlayerPaused,onEnded:a.onPlayerEnded,onVideo_tracking:a.onSetTrackingAction},null,8,["autoplay","media","source","format","width","poster","fullscreen","onReady","onLoadeddata","onCanplay","onCanplaythrough","onPlay","onPlaying","onPaused","onEnded","onVideo_tracking"])):(0,r.createCommentVNode)("",!0),i.isStuck?(0,r.renderSlot)(e.$slots,"closePip",{key:2},(function(){return[(0,r.createElementVNode)("button",{type:"button",class:"m-em-video__close-pip a-close-button","aria-label":e.$translate("modal.close.label"),onClick:t[0]||(t[0]=function(){return a.disablePip&&a.disablePip.apply(a,arguments)})},null,8,x)]})):(0,r.createCommentVNode)("",!0),i.isStuck?(0,r.renderSlot)(e.$slots,"movePip",{key:3},(function(){return[(0,r.createElementVNode)("button",{type:"button",class:"m-em-video__move-pip",onMousedown:t[1]||(t[1]=function(){return a.onMousedown&&a.onMousedown.apply(a,arguments)}),onTouchstart:t[2]||(t[2]=function(){return a.onMousedown&&a.onMousedown.apply(a,arguments)})},U,32)]})):(0,r.createCommentVNode)("",!0)],2),n.title&&!n.fullscreen?((0,r.openBlock)(),(0,r.createElementBlock)("div",G,(0,r.toDisplayString)(n.title),1)):(0,r.createCommentVNode)("",!0),!n.fullscreen&&n.duration?(0,r.renderSlot)(e.$slots,"duration",{key:1,duration:n.duration},(function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(n.duration),1)]})):(0,r.createCommentVNode)("",!0)],10,Y)}]]);var X=n(13308),H=n(96167);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te="data-show-hidden-video-player",ne="data-hidden-video-player",oe="data-video-player-handled",ie="u-media-video-playing",ae=[];function re(e){if(!e.hasAttribute(oe)){e.setAttribute(oe,"");var t=(0,X.ri)({componentToCreate:{name:"VideoPlayerWrapper",components:{VideojsPlayer:s,YoutubePlayer:B,VideoPlayer:W},methods:{onPlayerReady:function(e,t){z.Z.publish(H.Z.ready,ee({state:"ready",player:e},t))},onPlayerPlay:function(e,t){z.Z.publish(H.Z.playing,ee({state:"playing",player:e},t))},onPlayerPaused:function(e,t){z.Z.publish(H.Z.paused,ee({state:"paused",player:e},t))},onPlayerEnded:function(e,t){z.Z.publish(H.Z.ended,ee({state:"ended",player:e},t))},onPlayerBuffering:function(e,t){z.Z.publish(H.Z.buffering,ee({state:"buffering",player:e},t))},onPlayerVideoCued:function(e,t){z.Z.publish(H.Z.cued,ee({state:"cued",player:e},t))},onPlayerDestroyed:function(e){z.Z.publish(H.Z.destroyed,ee({state:"destroyed"},e))},onPlayerAdPlay:function(e,t){z.Z.publish(H.Z.ad_playing,ee({state:"ad_playing",player:e},t))},onPlayerAdEnd:function(e,t){z.Z.publish(H.Z.ad_ending,ee({state:"ad_ending",player:e},t))}}}});ae.push(t),t.mount(e)}}function de(e){(0,o.Z)(document.querySelectorAll(e)).forEach((function(e){return re(e)}))}function le(e){re(e)}function se(e){var t=e.getAttribute(te),n="[".concat(ne,'="').concat(t,'"]');e.classList.add(ie),re(document.querySelector(n))}function ce(e){(0,o.Z)(document.querySelectorAll(e)).forEach((function(e){e.addEventListener("click",(function(e){return se(e.currentTarget)}))}))}function ue(){ae.forEach((function(e){e.unmount()}))}a.Z.registerPlugin("tracking",(function(e){e.debug,this.on("error",(function(){})),this.on("loadeddata",(function(){})),this.on("loadedmetadata",(function(){})),this.on("playing",(function(){})),this.on("timeupdate",(function(){})),this.on("ended",(function(){})),this.on("volumechange",(function(){})),this.on("useractive",(function(){})),this.on("userinactive",(function(){}))}))},57426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={numberify:function(e){return Number.isNaN(Number(e))?e:Number(e)}}},72339:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(56287),i=n(17930),a=n(7830),r=function(){function e(){(0,o.Z)(this,e),window.didomiOnReady=window.didomiOnReady||[],this.showReferenceElement=void 0,this.vendor=void 0}return(0,i.Z)(e,[{key:"setTogglePreferenceElement",value:function(e){this.showReferenceElement=e}},{key:"setVendor",value:function(e){this.vendor=e}},{key:"showReference",value:function(){this.showReferenceElement&&this.showReferenceElement.addEventListener("click",(function(e){e.preventDefault(),a.Z.enablePreferences()}))}},{key:"isVendorEnabled",value:function(){return a.Z.checkVendorStatus(this.vendor)&&a.Z.checkAnalytics()}}],[{key:"enableAllConsent",value:function(){a.Z.enableAllPurposes(),a.Z.enableAllVendors()}},{key:"enableAllConsentForVendor",value:function(e,t){a.Z.enableAllPurposes(),a.Z.enableVendors(e,t)}}]),e}()},7830:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(62559),i=n(57426),a=n(74970);const r={getUserStatus:function(){var e;return window.didomiOnReady.push((function(t){e=t.getUserStatus()})),e},checkVendorStatus:function(e){var t=this.getUserStatus(),n=t?t.vendors.global.enabled:[];return e=i.Z.numberify(e),!!(n&&n.length>0)&&n.includes(e)},checkAnalytics:function(){var e=this.getUserStatus(),t=e?e.purposes.global.enabled:[];if(t&&t.length>0){var n=!1;return a.Uc.forEach((function(e){return n=t.includes(e)})),n}return!1},enableAllPurposes:function(){window.didomiOnReady.push((function(e){var t=e.openTransaction(),n=[].concat((0,o.Z)(a.Uc),(0,o.Z)(a.vi));t.enablePurposes.apply(t,(0,o.Z)(n)),t.commit()}))},enableAllVendors:function(){window.didomiOnReady.push((function(e){e.setUserAgreeToAll()}))},enableVendors:function(e,t){window.didomiOnReady.push((function(n){var o=n.openTransaction();o.enableVendors(e,t),o.commit()}))},enablePreferences:function(){window.didomiOnReady.push((function(e){e.preferences.show("purposes")}))}}},74970:(e,t,n)=>{"use strict";n.d(t,{Uc:()=>r,Xl:()=>i,Yo:()=>a,l0:()=>o,vi:()=>d});var o="cookies",i="create_content_profile",a="measure_content_performance",r=[o,"select_basic_ads","measure_ad_performance",a,"market_research","improve_products"],d=["create_ads_profile","select_personalized_ads",i,"select_personalized_content"]},10526:()=>{}}]);rset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="2179 -3523 24 24"><path fill="%23313131" d="M2190.99-3521a10 10 0 1 0 10.01 10 10 10 0 0 0-10.01-10zm.01 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path fill="%23313131" d="M2191.5-3516h-1.5v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>') no-repeat 50%;background-size:contain;height:20px;width:20px}.a-reading-time .a-svg--picto-clock{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="2179 -3523 24 24"><path fill="%236f6e71" d="M2190.99-3521a10 10 0 1 0 10.01 10 10 10 0 0 0-10.01-10zm.01 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path fill="%236f6e71" d="M2191.5-3516h-1.5v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>') no-repeat 50%;background-size:contain;height:20px;width:20px}.a-svg--picto-close{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><g fill="none" stroke="%23313131" stroke-width="2"><path d="m.707.707 14 14M14.707.707l-14 14"/></g></svg>') no-repeat 50%;background-size:contain;height:15px;width:15px}.a-svg--picto-cookies{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"><path d="M20.422 9.524a2.993 2.993 0 0 1-2.676-4.214A3.978 3.978 0 0 1 12.563.757a9.991 9.991 0 1 0 7.859 8.768Z" fill="none" stroke="%23313131"/><path d="M6.833 13.547a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5M8.833 8.547a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5M13.333 14.547a1 1 0 1 1 1-1 1 1 0 0 1-1 1" fill="%23313131"/></svg>') no-repeat 50%;background-size:contain;height:21px;width:21px}.a-svg--picto-home-empty{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path fill="none" stroke="%23313131" stroke-miterlimit="0" d="M1 12v9h7v-7h6v7h7v-9L11 1 1 12v1"/></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-svg--picto-newsletter-white{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="13"><g fill="none" stroke="%23313131"><path stroke="none" d="M0 0h18v13H0z"/><path d="M.5.5h17v12H.5z"/><path d="m.904.819 8.191 5.733L17.558.819"/></g></svg>') no-repeat 50%;background-size:contain;height:13px;width:18px}.a-svg--picto-notifications{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="19.5"><defs><clipPath id="a"><path fill="none" d="M0 0h16v19.5H0z"/></clipPath></defs><g clip-path="url(%23a)" fill="%23313131"><path d="M8 19.5a2.006 2.006 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1a.5.5 0 0 1 .5.5v1.47l.769.183C11.57 3.7 13 5.749 13 8.5v5.414l.293.293 1.293 1.293H1.414l1.293-1.293.293-.293V8.5c0-2.753 1.429-4.8 3.731-5.347l.769-.182V1.5A.5.5 0 0 1 8 1m0-1a1.5 1.5 0 0 0-1.5 1.5v.68C3.63 2.86 2 5.42 2 8.5v5l-2 2v1h16v-1l-2-2v-5c0-3.07-1.64-5.64-4.5-6.32V1.5A1.5 1.5 0 0 0 8 0"/></g></svg>') no-repeat 50%;background-size:contain;height:19px;width:16px}.a-svg--picto-obs{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><defs><clipPath id="a"><path fill="none" d="M0 0h22v22H0z"/></clipPath></defs><g clip-path="url(%23a)"><path d="M22 11A11 11 0 1 1 11 0a11 11 0 0 1 11 11" fill="%23313131"/><path d="M11.001 1.626A9.374 9.374 0 1 0 20.374 11a9.385 9.385 0 0 0-9.373-9.374m0 1.744a7.643 7.643 0 0 1 7.375 5.677 7.859 7.859 0 0 0-1.932-2.063 9.247 9.247 0 0 0-8.9-1.123 7.534 7.534 0 0 0-2.922 2.152l.47.088a5.013 5.013 0 0 1 2.2-1.286 14.144 14.144 0 0 1 5.057.3 14.235 14.235 0 0 1 4.812 1.535 3.3 3.3 0 0 1 .567.485 13.737 13.737 0 0 0-5.184-1.313 3.121 3.121 0 1 1-3.348.24 13.962 13.962 0 0 0-5.817 2.656 7.639 7.639 0 0 1 7.624-7.349m0 15.26a7.641 7.641 0 0 1-7.6-6.9 13.718 13.718 0 0 0 15.2-.093 7.639 7.639 0 0 1-7.6 6.992" fill="%23fff"/><path d="M12.358 11.381a1.3 1.3 0 1 0-1.3-1.3 1.305 1.305 0 0 0 1.3 1.3" fill="%23fff"/></g></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-svg--picto-play-circled-live{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path fill="none" d="M10.25 0A10.25 10.25 0 1 1 0 10.25 10.25 10.25 0 0 1 10.25 0z"/><path d="M10.25 1C5.15 1 1 5.15 1 10.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25S15.35 1 10.25 1m0-1C15.91 0 20.5 4.59 20.5 10.25S15.91 20.5 10.25 20.5 0 15.91 0 10.25 4.59 0 10.25 0z" fill="%23313131"/><path fill="%23313131" d="M7.99 5.857v9.047l6.786-4.524z"/></svg>') no-repeat 50%;background-size:contain;height:28px;width:28px}.a-svg--picto-pause-circled-live{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M10.25 0A10.25 10.25 0 1 1 0 10.25 10.25 10.25 0 0 1 10.25 0z" fill="none"/><path d="M10.25 1C5.15 1 1 5.15 1 10.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25S15.35 1 10.25 1m0-1C15.91 0 20.5 4.59 20.5 10.25S15.91 20.5 10.25 20.5 0 15.91 0 10.25 4.59 0 10.25 0z" fill="%23e2001a"/><path fill="%23e2001a" d="M7.292 5.727h1.74v9.047h-1.74zm4.176 0h1.74v9.047h-1.74z"/></svg>') no-repeat 50%;background-size:contain;height:28px;width:28px}.a-svg--picto-play-circle{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="61" height="61"><path class="s-bg" d="M30.5 0A30.5 30.5 0 1 1 0 30.5 30.5 30.5 0 0 1 30.5 0Z" fill="%23fff"/><path class="s-circle" d="M30.5 1A29.403 29.403 0 0 0 9.64 9.64 29.403 29.403 0 0 0 1 30.5a29.403 29.403 0 0 0 8.64 20.86A29.403 29.403 0 0 0 30.5 60a29.403 29.403 0 0 0 20.86-8.64A29.403 29.403 0 0 0 60 30.5a29.403 29.403 0 0 0-8.64-20.86A29.403 29.403 0 0 0 30.5 1m0-1C47.345 0 61 13.655 61 30.5S47.345 61 30.5 61 0 47.345 0 30.5 13.655 0 30.5 0Z" fill="%23e2001a"/><path class="s-center" d="M23.43 17.023v27.709l20.785-13.854Z" fill="%23e2001a"/></svg>') no-repeat 50%;background-size:contain;height:61px;width:61px}.m-em-video__cmp__disclaimer-wrapper .a-svg--picto-play-circle{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="61" height="61"><path class="s-bg" d="M30.5 0A30.5 30.5 0 1 1 0 30.5 30.5 30.5 0 0 1 30.5 0Z" fill="%23fff"/><path class="s-circle" d="M30.5 1A29.403 29.403 0 0 0 9.64 9.64 29.403 29.403 0 0 0 1 30.5a29.403 29.403 0 0 0 8.64 20.86A29.403 29.403 0 0 0 30.5 60a29.403 29.403 0 0 0 20.86-8.64A29.403 29.403 0 0 0 60 30.5a29.403 29.403 0 0 0-8.64-20.86A29.403 29.403 0 0 0 30.5 1m0-1C47.345 0 61 13.655 61 30.5S47.345 61 30.5 61 0 47.345 0 30.5 13.655 0 30.5 0Z" fill="%23313131"/><path class="s-center" d="M23.43 17.023v27.709l20.785-13.854Z" fill="%23313131"/></svg>') no-repeat 50%;background-size:contain;height:61px;width:61px}.a-svg--picto-pause-circle{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="61" height="61"><g fill="%23fff"><path class="s-bg" d="M30.5 0A30.5 30.5 0 1 1 0 30.5 30.5 30.5 0 0 1 30.5 0Z"/><path class="s-circle" d="M30.5 1A29.403 29.403 0 0 0 9.64 9.64 29.403 29.403 0 0 0 1 30.5a29.403 29.403 0 0 0 8.64 20.86A29.403 29.403 0 0 0 30.5 60a29.403 29.403 0 0 0 20.86-8.64A29.403 29.403 0 0 0 60 30.5a29.403 29.403 0 0 0-8.64-20.86A29.403 29.403 0 0 0 30.5 1m0-1C47.345 0 61 13.655 61 30.5S47.345 61 30.5 61 0 47.345 0 30.5 13.655 0 30.5 0Z" fill="%23e2001a"/></g><g fill="%23e2001a"><path class="s-center" d="M21.712 17.577h5.169v26.881h-5.169ZM34.119 17.577h5.169v26.881h-5.169z"/></g></svg>') no-repeat 50%;background-size:contain;height:61px;width:61px}.a-svg--picto-play-circle-filled{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-372.5 -3464 28 28"><circle cx="14" cy="14" r="13" transform="translate(-372.5 -3464)" fill="%23e2001a"/><path class="s-center" d="M-361.587-3456v12.356l9.268-6.178z" fill="%23fff"/></svg>') no-repeat 50%;background-size:contain;height:40px;width:40px}.a-svg--picto-pause-circle-filled{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="1485 -3406 35 35"><g fill="%23e2001a"><path d="M1502.5-3406a17.5 17.5 0 1 1-17.5 17.5 17.5 17.5 0 0 1 17.5-17.5z"/><path d="M1502.5-3372a16.39 16.39 0 0 0 11.667-4.833A16.392 16.392 0 0 0 1519-3388.5a16.39 16.39 0 0 0-4.833-11.667A16.392 16.392 0 0 0 1502.5-3405a16.39 16.39 0 0 0-11.667 4.833A16.392 16.392 0 0 0 1486-3388.5a16.39 16.39 0 0 0 4.833 11.667A16.392 16.392 0 0 0 1502.5-3372m0 1c-9.665 0-17.5-7.835-17.5-17.5s7.835-17.5 17.5-17.5 17.5 7.835 17.5 17.5-7.835 17.5-17.5 17.5z"/></g><path fill="%23fff" d="M1497.458-3395.915h2.966v15.424h-2.966zm7.119 0h2.966v15.424h-2.966z"/></svg>') no-repeat 50%;background-size:contain;height:40px;width:40px}.a-svg--picto-play-with-opacity{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M30 0A30 30 0 1 1 0 30 30 30 0 0 1 30 0z" fill="%23fff" opacity=".77"/><path d="M23.417 17.138v26.491l19.861-13.232z"/></svg>') no-repeat 50%;background-size:contain;height:60px;width:60px}.a-svg--picto-podcast-white{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22"><g transform="translate(-20.051 .5)" fill="%23313131"><circle cx="3.121" cy="3.121" r="3.121" transform="translate(26.81 6.693)"/><path d="M27.672 13.845h4.517v7.822h-4.517z"/><g fill="none" stroke="%23313131"><path d="M25.586 13.865a6.223 6.223 0 0 1-1.829-4.417 6.223 6.223 0 0 1 1.829-4.413 6.225 6.225 0 0 1 4.415-1.829 6.225 6.225 0 0 1 4.415 1.829 6.223 6.223 0 0 1 1.828 4.413 6.223 6.223 0 0 1-1.829 4.417"/><path d="M23.319 16.131a9.474 9.474 0 0 1-2.025-3 9.426 9.426 0 0 1-.742-3.678 9.423 9.423 0 0 1 .742-3.678 9.458 9.458 0 0 1 2.025-3 9.454 9.454 0 0 1 3-2.025 9.423 9.423 0 0 1 3.678-.742 9.423 9.423 0 0 1 3.678.742 9.442 9.442 0 0 1 3 2.025 9.448 9.448 0 0 1 2.026 3 9.423 9.423 0 0 1 .742 3.678 9.426 9.426 0 0 1-.742 3.678 9.464 9.464 0 0 1-2.026 3"/></g></g></svg>') no-repeat 50%;background-size:contain;height:20px;width:20px}.m-cta .a-svg--picto-podcast-white:before{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22"><g transform="translate(-20.051 .5)" fill="%23e2001a"><circle cx="3.121" cy="3.121" r="3.121" transform="translate(26.81 6.693)"/><path d="M27.672 13.845h4.517v7.822h-4.517z"/><g fill="none" stroke="%23e2001a"><path d="M25.586 13.865a6.223 6.223 0 0 1-1.829-4.417 6.223 6.223 0 0 1 1.829-4.413 6.225 6.225 0 0 1 4.415-1.829 6.225 6.225 0 0 1 4.415 1.829 6.223 6.223 0 0 1 1.828 4.413 6.223 6.223 0 0 1-1.829 4.417"/><path d="M23.319 16.131a9.474 9.474 0 0 1-2.025-3 9.426 9.426 0 0 1-.742-3.678 9.423 9.423 0 0 1 .742-3.678 9.458 9.458 0 0 1 2.025-3 9.454 9.454 0 0 1 3-2.025 9.423 9.423 0 0 1 3.678-.742 9.423 9.423 0 0 1 3.678.742 9.442 9.442 0 0 1 3 2.025 9.448 9.448 0 0 1 2.026 3 9.423 9.423 0 0 1 .742 3.678 9.426 9.426 0 0 1-.742 3.678 9.464 9.464 0 0 1-2.026 3"/></g></g></svg>') no-repeat 50%;background-size:contain;height:20px;width:20px}@media (hover:hover){.m-cta:hover .a-svg--picto-podcast-white:before{opacity:1}.m-context-menu .m-context-menu__item__btn:hover .a-svg--picto-podcast-white{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22"><g transform="translate(-20.051 .5)" fill="%23e2001a"><circle cx="3.121" cy="3.121" r="3.121" transform="translate(26.81 6.693)"/><path d="M27.672 13.845h4.517v7.822h-4.517z"/><g fill="none" stroke="%23e2001a"><path d="M25.586 13.865a6.223 6.223 0 0 1-1.829-4.417 6.223 6.223 0 0 1 1.829-4.413 6.225 6.225 0 0 1 4.415-1.829 6.225 6.225 0 0 1 4.415 1.829 6.223 6.223 0 0 1 1.828 4.413 6.223 6.223 0 0 1-1.829 4.417"/><path d="M23.319 16.131a9.474 9.474 0 0 1-2.025-3 9.426 9.426 0 0 1-.742-3.678 9.423 9.423 0 0 1 .742-3.678 9.458 9.458 0 0 1 2.025-3 9.454 9.454 0 0 1 3-2.025 9.423 9.423 0 0 1 3.678-.742 9.423 9.423 0 0 1 3.678.742 9.442 9.442 0 0 1 3 2.025 9.448 9.448 0 0 1 2.026 3 9.423 9.423 0 0 1 .742 3.678 9.426 9.426 0 0 1-.742 3.678 9.464 9.464 0 0 1-2.026 3"/></g></g></svg>') no-repeat 50%;background-size:contain;height:20px;width:20px}}.a-svg--picto-settings{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"><path d="M18.183 11.479a7.171 7.171 0 0 0 .064-.979 5.857 5.857 0 0 0-.075-.979l2.174-1.646a.5.5 0 0 0 .129-.635l-2.056-3.459a.53.53 0 0 0-.632-.229l-2.559 1a7.619 7.619 0 0 0-1.735-.979L13.107.927A.514.514 0 0 0 12.593.5H8.481a.5.5 0 0 0-.5.427l-.389 2.646a7.787 7.787 0 0 0-1.735.979l-2.559-1a.518.518 0 0 0-.632.229L.621 7.24a.466.466 0 0 0 .129.635l2.173 1.646a5.639 5.639 0 0 0-.021 1.958L.728 13.125a.5.5 0 0 0-.129.635l2.056 3.458a.53.53 0 0 0 .632.229l2.559-1a7.619 7.619 0 0 0 1.735.979l.386 2.646a.522.522 0 0 0 .514.428h4.112a.5.5 0 0 0 .5-.427l.386-2.646a7.4 7.4 0 0 0 1.735-.979l2.559 1a.518.518 0 0 0 .632-.229l2.056-3.458a.474.474 0 0 0-.129-.635Zm-7.646 2.771a3.815 3.815 0 0 1-3.855-3.75 3.857 3.857 0 0 1 7.71 0 3.815 3.815 0 0 1-3.855 3.75" fill="none" stroke="%23313131"/></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-svg--picto-share-arrow{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18"><path fill="%23313131" d="m22.122 8.6-8.6-8.6v4.916C4.922 6.145 1.232 12.29.003 18.435c3.072-4.3 7.374-6.268 13.519-6.268v5.039z"/></svg>') no-repeat 50%;background-size:contain;height:18px;width:22px}.m-cta .a-svg--picto-share-arrow:before{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18"><path fill="%23e2001a" d="m22.122 8.6-8.6-8.6v4.916C4.922 6.145 1.232 12.29.003 18.435c3.072-4.3 7.374-6.268 13.519-6.268v5.039z"/></svg>') no-repeat 50%;background-size:contain;height:18px;width:22px}@media (hover:hover){.m-cta:hover .a-svg--picto-share-arrow:before{opacity:1}}.a-svg--picto-share-arrow-square{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="489 93 45 45"><path d="M529.517 138h-36.034a4.488 4.488 0 0 1-4.483-4.483V97.483A4.488 4.488 0 0 1 493.483 93h36.034A4.488 4.488 0 0 1 534 97.483v36.034a4.488 4.488 0 0 1-4.483 4.483zm-14.073-36v6.89c-12.894 1.841-17.419 11.317-18.944 18.943 4.281-5.993 10.3-8.783 18.945-8.783v7.062l12.055-12.056z" fill="%239a9a9a"/></svg>') no-repeat 50%;background-size:contain;height:45px;width:45px}.a-svg--picto-translation{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="23.63" height="22.178"><g fill="none" stroke="%23313131"><path d="M0 3.249h17.588M8.794 0v3.249M13.623 3.25s-.03 5.038-11.1 14.682"/><path d="M5.276 6.588a24.885 24.885 0 0 0 7.386 8.809M13.266 22l1.677-4.558 3.182-8.648L23.163 22M21.553 17.406h-6.61"/></g></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-svg--picto-thematic{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="19.996" height="20"><g fill="none" stroke="%23313131"><path d="M0 2h18v18H0z" stroke="none"/><path d="M.5 2.5h17v17H.5z"/><path d="M2.111 1h16.885v16.886M4 6.254h10" stroke-width="2"/></g></svg>') no-repeat 50%;background-size:contain;height:20px;width:19px}.a-a11y-skip-main{background-color:#fff;border:2px solid #000;color:#000;font-size:1.5rem;margin:4px;padding:5px;position:absolute;text-align:center;top:0;width:160px;z-index:-1}.a-a11y-skip-main:active,.a-a11y-skip-main:focus{outline-offset:0;z-index:999999999}.a-bottom-bar-link{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#313131;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:42px;-webkit-justify-content:center;justify-content:center;min-width:30px}.a-bottom-bar-link.a-bottom-bar-link--bordered{border:1px solid #313131;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:3px 2px}.a-bottom-bar-link.a-bottom-bar-link--bordered.a-bottom-bar-link--active{border:1px solid #e2001a}.a-bottom-bar-link .a-bottom-bar-link__svg{-webkit-box-flex:1;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-justify-content:center;justify-content:center;max-height:22px;max-width:26px;pointer-events:none}.a-bottom-bar-link .a-bottom-bar-link__svg.a-svg--picto-close{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><g fill="none" stroke="%23e2001a" stroke-width="2"><path d="m.707.707 14 14M14.707.707l-14 14"/></g></svg>') no-repeat 50%;background-size:contain;height:15px;width:15px}.a-bottom-bar-link .a-bottom-bar-link__label{-webkit-box-flex:0;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 20px;-ms-flex:0 0 20px;flex:0 0 20px;font-size:1.4rem;padding:0 5px;pointer-events:none;white-space:nowrap}.a-bottom-bar-link.a-bottom-bar-link--active{color:#e2001a}.a-bottom-bar-link.a-bottom-bar-link--active .a-bottom-bar-link__svg.a-svg--picto-home-empty{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path fill="none" stroke="%23e2001a" stroke-miterlimit="0" d="M1 12v9h7v-7h6v7h7v-9L11 1 1 12v1"/></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-bottom-bar-link.a-bottom-bar-link--active .a-bottom-bar-link__svg.a-svg--picto-podcast-white{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22"><g transform="translate(-20.051 .5)" fill="%23e2001a"><circle cx="3.121" cy="3.121" r="3.121" transform="translate(26.81 6.693)"/><path d="M27.672 13.845h4.517v7.822h-4.517z"/><g fill="none" stroke="%23e2001a"><path d="M25.586 13.865a6.223 6.223 0 0 1-1.829-4.417 6.223 6.223 0 0 1 1.829-4.413 6.225 6.225 0 0 1 4.415-1.829 6.225 6.225 0 0 1 4.415 1.829 6.223 6.223 0 0 1 1.828 4.413 6.223 6.223 0 0 1-1.829 4.417"/><path d="M23.319 16.131a9.474 9.474 0 0 1-2.025-3 9.426 9.426 0 0 1-.742-3.678 9.423 9.423 0 0 1 .742-3.678 9.458 9.458 0 0 1 2.025-3 9.454 9.454 0 0 1 3-2.025 9.423 9.423 0 0 1 3.678-.742 9.423 9.423 0 0 1 3.678.742 9.442 9.442 0 0 1 3 2.025 9.448 9.448 0 0 1 2.026 3 9.423 9.423 0 0 1 .742 3.678 9.426 9.426 0 0 1-.742 3.678 9.464 9.464 0 0 1-2.026 3"/></g></g></svg>') no-repeat 50%;background-size:contain;height:20px;width:20px}.a-bottom-bar-link.a-bottom-bar-link--active .a-bottom-bar-link__svg.a-svg--picto-thematic{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="19.996" height="20"><g fill="none" stroke="%23e2001a"><path d="M0 2h18v18H0z" stroke="none"/><path d="M.5 2.5h17v17H.5z"/><path d="M2.111 1h16.885v16.886M4 6.254h10" stroke-width="2"/></g></svg>') no-repeat 50%;background-size:contain;height:20px;width:19px}.a-bottom-bar-link.a-bottom-bar-link--active .a-bottom-bar-link__svg.a-svg--picto-actualites{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"><g fill="none" stroke="%23e2001a"><path d="M9.35.5a3.579 3.579 0 0 0 0 2.088c.382.794-.287 1.191-.86 1.093s-.86.4-1.147.993a3.283 3.283 0 0 1-.954 1.492c-.478.3-.956.6-1.434.4a1.349 1.349 0 0 0-1.527.064c-.765.433-.669.83-.574 1.029a3.365 3.365 0 0 1-.064 1.093c-.031.4.254.855 1.02.875s1.432-.576 1.719-.576.669.556 1.241.576a2.835 2.835 0 0 1 1.623.615 7.649 7.649 0 0 1 1.068 1.59c.366.7.557.6.748.7a2.3 2.3 0 0 1-.291 2.386c-.179.279-.633.712-.76.894 0 0 .095.694-.191.894s-.669.5-.669.794-.1.794-.1 1.093.191 1.193-.095 1.193-1.131.1-1.52-1.392a9.185 9.185 0 0 0 0-.982c-.033-.447-.535-1.267-.32-2.013 0 0-1.575-2.013-1.575-3.354s-.072-1.415-.86-1.49a2.916 2.916 0 0 1-1.786-1.271 2.338 2.338 0 0 0-1.217-.671M17.477 2.995a5.106 5.106 0 0 1-.717.5c-.285.143-.43.43 0 1.217s.717 1.432-.43 1.719-1.217 0-1.862.573a2.8 2.8 0 0 0-.86 1.147c-.143.287-.358 1.577.287 1.792a21.562 21.562 0 0 0 2.507.573 1.824 1.824 0 0 1 1.5 1.5c.215.86.287 3.081 1 3.224"/><path d="M20.498 10.5a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z"/></g></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-bottom-bar-link.a-bottom-bar-link--active .a-bottom-bar-link__svg.a-svg--picto-play-circled-live{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path fill="none" d="M10.25 0A10.25 10.25 0 1 1 0 10.25 10.25 10.25 0 0 1 10.25 0z"/><path d="M10.25 1C5.15 1 1 5.15 1 10.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25S15.35 1 10.25 1m0-1C15.91 0 20.5 4.59 20.5 10.25S15.91 20.5 10.25 20.5 0 15.91 0 10.25 4.59 0 10.25 0z" fill="%23e2001a"/><path fill="%23e2001a" d="M7.99 5.857v9.047l6.786-4.524z"/></svg>') no-repeat 50%;background-size:contain;height:28px;width:28px}.a-bottom-bar-link.a-bottom-bar-link--active .a-bottom-bar-link__svg.a-svg--picto-burger{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="12"><g fill="none" stroke="%23e2001a" stroke-width="2"><path d="M0 1h15M0 6h15M0 11h15"/></g></svg>') no-repeat 50%;background-size:contain;height:12px;width:15px}.a-bottom-bar-link.a-bottom-bar-link--active .a-bottom-bar-link__svg.a-svg--picto-settings{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"><path d="M18.183 11.479a7.171 7.171 0 0 0 .064-.979 5.857 5.857 0 0 0-.075-.979l2.174-1.646a.5.5 0 0 0 .129-.635l-2.056-3.459a.53.53 0 0 0-.632-.229l-2.559 1a7.619 7.619 0 0 0-1.735-.979L13.107.927A.514.514 0 0 0 12.593.5H8.481a.5.5 0 0 0-.5.427l-.389 2.646a7.787 7.787 0 0 0-1.735.979l-2.559-1a.518.518 0 0 0-.632.229L.621 7.24a.466.466 0 0 0 .129.635l2.173 1.646a5.639 5.639 0 0 0-.021 1.958L.728 13.125a.5.5 0 0 0-.129.635l2.056 3.458a.53.53 0 0 0 .632.229l2.559-1a7.619 7.619 0 0 0 1.735.979l.386 2.646a.522.522 0 0 0 .514.428h4.112a.5.5 0 0 0 .5-.427l.386-2.646a7.4 7.4 0 0 0 1.735-.979l2.559 1a.518.518 0 0 0 .632-.229l2.056-3.458a.474.474 0 0 0-.129-.635Zm-7.646 2.771a3.815 3.815 0 0 1-3.855-3.75 3.857 3.857 0 0 1 7.71 0 3.815 3.815 0 0 1-3.855 3.75" fill="none" stroke="%23e2001a"/></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-bottom-bar-link.a-bottom-bar-link--active .a-bottom-bar-link__svg.a-svg--picto-translation{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="23.63" height="22.178"><g fill="none" stroke="%23e2001a"><path d="M0 3.249h17.588M8.794 0v3.249M13.623 3.25s-.03 5.038-11.1 14.682"/><path d="M5.276 6.588a24.885 24.885 0 0 0 7.386 8.809M13.266 22l1.677-4.558 3.182-8.648L23.163 22M21.553 17.406h-6.61"/></g></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-bottom-bar-link.a-bottom-bar-link--active .a-bottom-bar-link__svg.a-svg--picto-obs{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><defs><clipPath id="a"><path fill="none" d="M0 0h22v22H0z"/></clipPath></defs><g clip-path="url(%23a)"><path d="M22 11A11 11 0 1 1 11 0a11 11 0 0 1 11 11" fill="%23e2001a"/><path d="M11.001 1.626A9.374 9.374 0 1 0 20.374 11a9.385 9.385 0 0 0-9.373-9.374m0 1.744a7.643 7.643 0 0 1 7.375 5.677 7.859 7.859 0 0 0-1.932-2.063 9.247 9.247 0 0 0-8.9-1.123 7.534 7.534 0 0 0-2.922 2.152l.47.088a5.013 5.013 0 0 1 2.2-1.286 14.144 14.144 0 0 1 5.057.3 14.235 14.235 0 0 1 4.812 1.535 3.3 3.3 0 0 1 .567.485 13.737 13.737 0 0 0-5.184-1.313 3.121 3.121 0 1 1-3.348.24 13.962 13.962 0 0 0-5.817 2.656 7.639 7.639 0 0 1 7.624-7.349m0 15.26a7.641 7.641 0 0 1-7.6-6.9 13.718 13.718 0 0 0 15.2-.093 7.639 7.639 0 0 1-7.6 6.992" fill="%23fff"/><path d="M12.358 11.381a1.3 1.3 0 1 0-1.3-1.3 1.305 1.305 0 0 0 1.3 1.3" fill="%23fff"/></g></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}@media (hover:hover){.a-bottom-bar-link.a-bottom-bar-link--bordered:hover{border:1px solid #e2001a}.a-bottom-bar-link:hover{color:#e2001a}.a-bottom-bar-link:hover .a-bottom-bar-link__svg.a-svg--picto-home-empty{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path fill="none" stroke="%23e2001a" stroke-miterlimit="0" d="M1 12v9h7v-7h6v7h7v-9L11 1 1 12v1"/></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-bottom-bar-link:hover .a-bottom-bar-link__svg.a-svg--picto-podcast-white{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22"><g transform="translate(-20.051 .5)" fill="%23e2001a"><circle cx="3.121" cy="3.121" r="3.121" transform="translate(26.81 6.693)"/><path d="M27.672 13.845h4.517v7.822h-4.517z"/><g fill="none" stroke="%23e2001a"><path d="M25.586 13.865a6.223 6.223 0 0 1-1.829-4.417 6.223 6.223 0 0 1 1.829-4.413 6.225 6.225 0 0 1 4.415-1.829 6.225 6.225 0 0 1 4.415 1.829 6.223 6.223 0 0 1 1.828 4.413 6.223 6.223 0 0 1-1.829 4.417"/><path d="M23.319 16.131a9.474 9.474 0 0 1-2.025-3 9.426 9.426 0 0 1-.742-3.678 9.423 9.423 0 0 1 .742-3.678 9.458 9.458 0 0 1 2.025-3 9.454 9.454 0 0 1 3-2.025 9.423 9.423 0 0 1 3.678-.742 9.423 9.423 0 0 1 3.678.742 9.442 9.442 0 0 1 3 2.025 9.448 9.448 0 0 1 2.026 3 9.423 9.423 0 0 1 .742 3.678 9.426 9.426 0 0 1-.742 3.678 9.464 9.464 0 0 1-2.026 3"/></g></g></svg>') no-repeat 50%;background-size:contain;height:20px;width:20px}.a-bottom-bar-link:hover .a-bottom-bar-link__svg.a-svg--picto-thematic{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="19.996" height="20"><g fill="none" stroke="%23e2001a"><path d="M0 2h18v18H0z" stroke="none"/><path d="M.5 2.5h17v17H.5z"/><path d="M2.111 1h16.885v16.886M4 6.254h10" stroke-width="2"/></g></svg>') no-repeat 50%;background-size:contain;height:20px;width:19px}.a-bottom-bar-link:hover .a-bottom-bar-link__svg.a-svg--picto-actualites{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"><g fill="none" stroke="%23e2001a"><path d="M9.35.5a3.579 3.579 0 0 0 0 2.088c.382.794-.287 1.191-.86 1.093s-.86.4-1.147.993a3.283 3.283 0 0 1-.954 1.492c-.478.3-.956.6-1.434.4a1.349 1.349 0 0 0-1.527.064c-.765.433-.669.83-.574 1.029a3.365 3.365 0 0 1-.064 1.093c-.031.4.254.855 1.02.875s1.432-.576 1.719-.576.669.556 1.241.576a2.835 2.835 0 0 1 1.623.615 7.649 7.649 0 0 1 1.068 1.59c.366.7.557.6.748.7a2.3 2.3 0 0 1-.291 2.386c-.179.279-.633.712-.76.894 0 0 .095.694-.191.894s-.669.5-.669.794-.1.794-.1 1.093.191 1.193-.095 1.193-1.131.1-1.52-1.392a9.185 9.185 0 0 0 0-.982c-.033-.447-.535-1.267-.32-2.013 0 0-1.575-2.013-1.575-3.354s-.072-1.415-.86-1.49a2.916 2.916 0 0 1-1.786-1.271 2.338 2.338 0 0 0-1.217-.671M17.477 2.995a5.106 5.106 0 0 1-.717.5c-.285.143-.43.43 0 1.217s.717 1.432-.43 1.719-1.217 0-1.862.573a2.8 2.8 0 0 0-.86 1.147c-.143.287-.358 1.577.287 1.792a21.562 21.562 0 0 0 2.507.573 1.824 1.824 0 0 1 1.5 1.5c.215.86.287 3.081 1 3.224"/><path d="M20.498 10.5a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z"/></g></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-bottom-bar-link:hover .a-bottom-bar-link__svg.a-svg--picto-play-circled-live{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path fill="none" d="M10.25 0A10.25 10.25 0 1 1 0 10.25 10.25 10.25 0 0 1 10.25 0z"/><path d="M10.25 1C5.15 1 1 5.15 1 10.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25S15.35 1 10.25 1m0-1C15.91 0 20.5 4.59 20.5 10.25S15.91 20.5 10.25 20.5 0 15.91 0 10.25 4.59 0 10.25 0z" fill="%23e2001a"/><path fill="%23e2001a" d="M7.99 5.857v9.047l6.786-4.524z"/></svg>') no-repeat 50%;background-size:contain;height:28px;width:28px}.a-bottom-bar-link:hover .a-bottom-bar-link__svg.a-svg--picto-burger{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="12"><g fill="none" stroke="%23e2001a" stroke-width="2"><path d="M0 1h15M0 6h15M0 11h15"/></g></svg>') no-repeat 50%;background-size:contain;height:12px;width:15px}.a-bottom-bar-link:hover .a-bottom-bar-link__svg.a-svg--picto-settings{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"><path d="M18.183 11.479a7.171 7.171 0 0 0 .064-.979 5.857 5.857 0 0 0-.075-.979l2.174-1.646a.5.5 0 0 0 .129-.635l-2.056-3.459a.53.53 0 0 0-.632-.229l-2.559 1a7.619 7.619 0 0 0-1.735-.979L13.107.927A.514.514 0 0 0 12.593.5H8.481a.5.5 0 0 0-.5.427l-.389 2.646a7.787 7.787 0 0 0-1.735.979l-2.559-1a.518.518 0 0 0-.632.229L.621 7.24a.466.466 0 0 0 .129.635l2.173 1.646a5.639 5.639 0 0 0-.021 1.958L.728 13.125a.5.5 0 0 0-.129.635l2.056 3.458a.53.53 0 0 0 .632.229l2.559-1a7.619 7.619 0 0 0 1.735.979l.386 2.646a.522.522 0 0 0 .514.428h4.112a.5.5 0 0 0 .5-.427l.386-2.646a7.4 7.4 0 0 0 1.735-.979l2.559 1a.518.518 0 0 0 .632-.229l2.056-3.458a.474.474 0 0 0-.129-.635Zm-7.646 2.771a3.815 3.815 0 0 1-3.855-3.75 3.857 3.857 0 0 1 7.71 0 3.815 3.815 0 0 1-3.855 3.75" fill="none" stroke="%23e2001a"/></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-bottom-bar-link:hover .a-bottom-bar-link__svg.a-svg--picto-translation{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="23.63" height="22.178"><g fill="none" stroke="%23e2001a"><path d="M0 3.249h17.588M8.794 0v3.249M13.623 3.25s-.03 5.038-11.1 14.682"/><path d="M5.276 6.588a24.885 24.885 0 0 0 7.386 8.809M13.266 22l1.677-4.558 3.182-8.648L23.163 22M21.553 17.406h-6.61"/></g></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}.a-bottom-bar-link:hover .a-bottom-bar-link__svg.a-svg--picto-obs{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><defs><clipPath id="a"><path fill="none" d="M0 0h22v22H0z"/></clipPath></defs><g clip-path="url(%23a)"><path d="M22 11A11 11 0 1 1 11 0a11 11 0 0 1 11 11" fill="%23e2001a"/><path d="M11.001 1.626A9.374 9.374 0 1 0 20.374 11a9.385 9.385 0 0 0-9.373-9.374m0 1.744a7.643 7.643 0 0 1 7.375 5.677 7.859 7.859 0 0 0-1.932-2.063 9.247 9.247 0 0 0-8.9-1.123 7.534 7.534 0 0 0-2.922 2.152l.47.088a5.013 5.013 0 0 1 2.2-1.286 14.144 14.144 0 0 1 5.057.3 14.235 14.235 0 0 1 4.812 1.535 3.3 3.3 0 0 1 .567.485 13.737 13.737 0 0 0-5.184-1.313 3.121 3.121 0 1 1-3.348.24 13.962 13.962 0 0 0-5.817 2.656 7.639 7.639 0 0 1 7.624-7.349m0 15.26a7.641 7.641 0 0 1-7.6-6.9 13.718 13.718 0 0 0 15.2-.093 7.639 7.639 0 0 1-7.6 6.992" fill="%23fff"/><path d="M12.358 11.381a1.3 1.3 0 1 0-1.3-1.3 1.305 1.305 0 0 0 1.3 1.3" fill="%23fff"/></g></svg>') no-repeat 50%;background-size:contain;height:22px;width:22px}}.a-brand-logo{text-indent:-9999px}.a-hot-tag{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border:1px solid #d4d4d4;border-radius:8px;color:#313131;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.3rem;height:30px;padding:0 12px}@media (hover:hover){.a-hot-tag:active,.a-hot-tag:hover{border:1px solid #e2001a;color:#e2001a}}.a-hot-tag.a-hot-tag--active{border:1px solid #e2001a;color:#e2001a}.o-tag-list-wrapper .a-hot-tag{border:1px solid transparent;font-weight:300;padding:0}@media (hover:hover){.o-tag-list-wrapper .a-hot-tag:active,.o-tag-list-wrapper .a-hot-tag:hover{border:1px solid transparent;color:#e2001a}}.o-tag-list-wrapper .a-hot-tag.a-hot-tag--active{border:1px solid transparent;color:#e2001a}.a-hot-tag:focus-visible{border:1px solid #000;outline:none;outline-offset:0}@media screen and (min-width:1024px){.o-tag-list-wrapper .a-hot-tag{font-weight:400}}.a-logo-infox{text-indent:-9999px}.a-logo-infox.a-logo-infox--france24{background:transparent url(/build/images/logos-infox-x1.f5ab5e8a111d67cc7ad2a499495ed0c0.png) no-repeat 0 0;background-size:920% 100%;height:20px;width:20px}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){.a-logo-infox.a-logo-infox--france24{background:transparent url(/build/images/logos-infox-x2.7ede8dcaa4ac74333c37cb20ecc383e7.png) no-repeat 0 0;background-size:920% 100%}}.a-logo-infox.a-logo-infox--rfi{background:transparent url(/build/images/logos-infox-x1.f5ab5e8a111d67cc7ad2a499495ed0c0.png) no-repeat 18% 0;background-size:920% 100%;height:20px;width:20px}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){.a-logo-infox.a-logo-infox--rfi{background:transparent url(/build/images/logos-infox-x2.7ede8dcaa4ac74333c37cb20ecc383e7.png) no-repeat 18% 0;background-size:920% 100%}}.a-logo-infox.a-logo-infox--mcd{background:transparent url(/build/images/logos-infox-x1.f5ab5e8a111d67cc7ad2a499495ed0c0.png) no-repeat 37% 0;background-size:920% 100%;height:20px;width:20px}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){.a-logo-infox.a-logo-infox--mcd{background:transparent url(/build/images/logos-infox-x2.7ede8dcaa4ac74333c37cb20ecc383e7.png) no-repeat 37% 0;background-size:920% 100%}}.a-logo-infox.a-logo-infox--observer{background:transparent url(/build/images/logos-infox-x1.f5ab5e8a111d67cc7ad2a499495ed0c0.png) no-repeat 55% 0;background-size:920% 100%;height:20px;width:20px}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){.a-logo-infox.a-logo-infox--observer{background:transparent url(/build/images/logos-infox-x2.7ede8dcaa4ac74333c37cb20ecc383e7.png) no-repeat 55% 0;background-size:920% 100%}}.a-logo-infox.a-logo-infox--infomigrants{background:transparent url(/build/images/logos-infox-x1.f5ab5e8a111d67cc7ad2a499495ed0c0.png) no-repeat 101% 0;background-size:271% 167%;height:12px;width:68px}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:1.5dppx){.a-logo-infox.a-logo-infox--infomigrants{background:transparent url(/build/images/logos-infox-x2.7ede8dcaa4ac74333c37cb20ecc383e7.png) no-repeat 100% 0;background-size:271% 167%}}.a-close-button{direction:ltr;height:22px;position:relative;width:22px}.a-close-button:after,.a-close-button:before{background-color:#000;content:"";height:2px;left:50%;position:absolute;top:50%;width:28px}.a-close-button:before{-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg)}.a-close-button:after{-webkit-transform:translate(-50%,-50%) rotate(-45deg);transform:translate(-50%,-50%) rotate(-45deg)}.a-close-button.a-close-button--white:after,.a-close-button.a-close-button--white:before{background-color:#fff}.a-close-button.a-close-button--thin:after,.a-close-button.a-close-button--thin:before{height:1px}.a-media-legend{color:#6f6e71;line-height:1.4}.a-picto-play-pause{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.a-picto-play-pause.a-picto-play-pause--pause .a-picto-play-pause__play,.a-picto-play-pause.a-picto-play-pause--play .a-picto-play-pause__pause{display:none}.a-picto-social .a-svg{height:35px;-webkit-transition:color .3s;transition:color .3s;width:35px}.a-player-links,.a-player-links .a-player-links__link{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.a-player-links .a-player-links__link{-webkit-box-pack:end;-ms-flex-pack:end;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:flex-end;justify-content:flex-end}.a-player-links .a-player-links__link .a-svg{height:22px;width:22px}.a-player-links .a-player-links__link .a-player-links__link__live{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:5px;-webkit-justify-content:flex-start;justify-content:flex-start}.a-player-links .a-player-links__link .a-player-links__link__live:before{background-color:#d90000;border-radius:50%;content:"";height:10px;width:10px}.a-player-links .a-player-links__link .a-player-links__link__live .a-player-links__link__live-name{color:#e2001a}.a-player-links .a-player-links__link .a-player-links__link__live .a-player-links__link__live-name.a-player-links__link__live-name--upper{text-transform:uppercase}@media screen and (min-width:640px){.a-player-links .a-player-links__link{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}}@-webkit-keyframes burger-to-cross{0%{border-bottom:2px solid #313131;height:18px}50%{border-bottom:0 solid #313131;height:2px}to{border-bottom:0 solid #313131;height:28px}}@keyframes burger-to-cross{0%{border-bottom:2px solid #313131;height:18px}50%{border-bottom:0 solid #313131;height:2px}to{border-bottom:0 solid #313131;height:28px}}@-webkit-keyframes burger-to-cross-bottom-bar{0%{top:8px;-webkit-transform:none;transform:none}50%{top:0;-webkit-transform:none;transform:none}to{top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@keyframes burger-to-cross-bottom-bar{0%{top:8px;-webkit-transform:none;transform:none}50%{top:0;-webkit-transform:none;transform:none}to{top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@-webkit-keyframes burger-to-cross-top-bar{0%,50%{top:0;-webkit-transform:none;transform:none}to{top:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}}@keyframes burger-to-cross-top-bar{0%,50%{top:0;-webkit-transform:none;transform:none}to{top:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}}@-webkit-keyframes cross-to-burger{0%{border-bottom:0 solid #313131;height:28px}50%{border-bottom:0 solid #313131;height:2px}to{border-bottom:2px solid #313131;height:18px}}@keyframes cross-to-burger{0%{border-bottom:0 solid #313131;height:28px}50%{border-bottom:0 solid #313131;height:2px}to{border-bottom:2px solid #313131;height:18px}}@-webkit-keyframes cross-to-burger-bottom-bar{0%{top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}50%{top:0;-webkit-transform:none;transform:none}to{top:8px;-webkit-transform:none;transform:none}}@keyframes cross-to-burger-bottom-bar{0%{top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}50%{top:0;-webkit-transform:none;transform:none}to{top:8px;-webkit-transform:none;transform:none}}@-webkit-keyframes cross-to-burger-top-bar{0%{top:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}50%,to{top:0;-webkit-transform:none;transform:none}}@keyframes cross-to-burger-top-bar{0%{top:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}50%,to{top:0;-webkit-transform:none;transform:none}}.a-site-nav-link{border-bottom:2px solid #313131;height:18px;position:relative;width:28px}.a-site-nav-link:after,.a-site-nav-link:before{background-color:#313131;content:"";height:2px;left:0;position:absolute;width:100%}.a-site-nav-link:before{top:0}.a-site-nav-link:after{top:8px}.a-site-nav-link:focus-visible{outline-offset:4px}@media screen and (min-width:640px){@-webkit-keyframes burger-to-cross-bottom-bar{0%{top:9px;-webkit-transform:none;transform:none}50%{top:0;-webkit-transform:none;transform:none}to{top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@keyframes burger-to-cross-bottom-bar{0%{top:9px;-webkit-transform:none;transform:none}50%{top:0;-webkit-transform:none;transform:none}to{top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}@-webkit-keyframes burger-to-cross{0%{border-bottom:4px solid #313131;height:22px}50%{border-bottom:0 solid #313131;height:4px}to{border-bottom:0 solid #313131;height:34px}}@keyframes burger-to-cross{0%{border-bottom:4px solid #313131;height:22px}50%{border-bottom:0 solid #313131;height:4px}to{border-bottom:0 solid #313131;height:34px}}@-webkit-keyframes cross-to-burger{0%{border-bottom:0 solid #313131;height:34px}50%{border-bottom:0 solid #313131;height:4px}to{border-bottom:4px solid #313131;height:22px}}@keyframes cross-to-burger{0%{border-bottom:0 solid #313131;height:34px}50%{border-bottom:0 solid #313131;height:4px}to{border-bottom:4px solid #313131;height:22px}}@-webkit-keyframes cross-to-burger-bottom-bar{0%{top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}50%{top:0;-webkit-transform:none;transform:none}to{top:9px;-webkit-transform:none;transform:none}}@keyframes cross-to-burger-bottom-bar{0%{top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}50%{top:0;-webkit-transform:none;transform:none}to{top:9px;-webkit-transform:none;transform:none}}.a-site-nav-link{border-bottom:4px solid #313131;height:22px;width:34px}.a-site-nav-link:after,.a-site-nav-link:before{height:4px}.a-site-nav-link:after{top:9px}}.m-block-ad{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 16px 36px;min-width:300px}.m-block-ad,.m-block-ad .m-block-ad__label{-webkit-box-flex:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.m-block-ad .m-block-ad__label{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-align-items:center;align-items:center;background-color:#f0f0f0;color:#505050;-webkit-flex:0 0 25px;-ms-flex:0 0 25px;flex:0 0 25px;font-size:1.1rem;-webkit-justify-content:space-between;justify-content:space-between;padding:0 6px;text-transform:uppercase;width:100%}.m-block-ad .m-block-ad__label .m-block-ad__label__text{-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto}.m-block-ad .m-block-ad__label .m-block-ad__label__report-link{display:none}.m-block-ad .m-block-ad__content{-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;max-height:600px;min-height:250px;min-width:300px;overflow:hidden;position:relative}.m-block-ad .m-block-ad__content:before{border:1px dotted #f0f0f0;-webkit-box-sizing:border-box;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;top:0;width:100%}.m-block-ad .m-block-ad__content>div{position:relative}.m-block-ad.m-block-ad--h250 .m-block-ad__content{max-height:250px}.m-block-ad.m-block-ad--h300 .m-block-ad__content{max-height:300px}.m-block-ad[data-tms-ad-status=disabled],.m-block-ad[data-tms-ad-status=empty]{display:none}.m-block-ad[data-tms-ad-status=resized] .m-block-ad__label.m-block-ad__label--report-enabled .m-block-ad__label__report-link{-webkit-box-flex:0;-webkit-box-pack:end;-ms-flex-pack:end;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#777;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 1 38px;-ms-flex:0 1 38px;flex:0 1 38px;-webkit-justify-content:flex-end;justify-content:flex-end}.m-block-ad[data-tms-ad-status=resized] .m-block-ad__content:before{border:0}@media screen and (min-width:640px){.m-block-ad{margin:0 0 36px;max-width:300px}}.m-breadcrumb .m-breadcrumb__list{display:block}.m-breadcrumb .m-breadcrumb__list .m-breadcrumb__list__item{color:#6f6e71;display:inline;font-size:1.2rem}.m-breadcrumb .m-breadcrumb__list .m-breadcrumb__list__item .m-breadcrumb__list__item__separator{padding:0 5px}.m-breadcrumb .m-breadcrumb__list .m-breadcrumb__list__item .m-breadcrumb__list__item__link{text-decoration:underline}@media (hover:hover){.m-breadcrumb .m-breadcrumb__list .m-breadcrumb__list__item .m-breadcrumb__list__item__link:hover{text-decoration:none}}.t-content.t-content--page-builder .m-breadcrumb{margin:22px 16px 0}.t-content.t-content--page-builder.t-content--page-builder--dark-bg .m-breadcrumb{margin:0 22px;padding:16px 0 12px;position:relative}.t-content.t-content--page-builder.t-content--page-builder--dark-bg .m-breadcrumb:before{background-color:#373b4d;bottom:0;content:"";height:100%;left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw;z-index:-1}@media screen and (min-width:640px){.t-content.t-content--page-builder .m-breadcrumb{margin:0 22px}}.m-em-audio{-ms-flex-line-pack:start;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-align-content:flex-start;align-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;justify-content:center;margin:0 auto 28px;max-width:550px}.m-em-audio .m-em-audio__title{font-size:2rem;font-weight:700;line-height:1.5;margin-bottom:15px}.m-em-audio .m-em-audio__content,.m-em-audio .m-em-audio__title{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%}.m-em-audio .m-em-audio__content .m-em-audio__content__sound{background-color:#f0f0f0;border-radius:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:15px;padding:16px}.m-em-audio .u-loading-btn .a-svg{position:relative}.m-em-audio .u-loading-btn .a-svg .a-circle-loader{display:block;height:18px;left:9px;position:absolute;top:9px;width:18px}.m-em-audio .u-loading-btn .a-svg .a-circle-loader__main-circle{border-color:#e2001a transparent transparent #e2001a;border-width:2px}.m-em-audio .u-loading-btn .a-svg .a-circle-loader__bg-circle{border:1px solid #c4c4c4;height:15px;left:1px;top:1px;width:15px}.m-em-audio .u-loading-btn .a-svg .a-circle-loader:after,.m-em-audio .u-loading-btn .a-svg .a-circle-loader:before{background-color:#e2001a;height:2px;top:7px;width:2px}.m-em-audio .a-picto-play-pause{-webkit-box-flex:0;color:#e2001a;-webkit-flex:0 0 36px;-ms-flex:0 0 36px;flex:0 0 36px}.m-em-audio .a-picto-play-pause .a-svg{height:36px;width:36px}.m-em-audio .m-audio-infos{-webkit-box-flex:1;color:#313131;-webkit-flex:1 0 calc(100% - 51px);-ms-flex:1 0 calc(100% - 51px);flex:1 0 calc(100% - 51px);-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.m-em-audio .m-audio-infos .m-audio-infos__title{font-size:1.7rem;font-weight:700;line-height:1.3;margin-bottom:0}.m-em-audio .m-audio-infos .m-audio-infos__title .a-svg{-webkit-margin-end:5px;margin-inline-end:5px}.m-em-audio .m-audio-infos .m-audio-infos__author{color:#6f6e71;font-size:1.4rem}.m-em-audio .m-audio-infos .m-audio-infos__author+.m-audio-infos__author:before{content:"|";margin:0 5px}.m-em-audio.m-em-audio--has-quote .m-em-audio__content{border:1px solid #d4d4d4;border-radius:16px 16px 30px 30px}.m-em-audio.m-em-audio--has-quote .m-em-audio__content .m-em-quote{-webkit-box-sizing:border-box;box-sizing:border-box;color:#313131;margin:0;max-width:none;padding:16px;width:100%}.m-em-audio.m-em-audio--has-quote .m-em-audio__content .m-em-quote .m-em-quote__body{border:none;margin:0;padding:0}.m-em-audio.m-em-audio--has-quote .m-em-audio__content .m-em-audio__content__sound{margin:0 -1px -1px}.m-figure .m-figure__img-wrapper,.m-figure>picture{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;position:relative;width:100%}.m-figure .m-figure__img-wrapper .m-figure__img,.m-figure>picture .m-figure__img{height:100%;overflow:hidden;position:absolute;text-indent:-99999px;-webkit-transition:opacity .15s;transition:opacity .15s;width:100%}.m-figure .m-figure__img-wrapper .m-figure__img[data-lazyloaded],.m-figure>picture .m-figure__img[data-lazyloaded]{opacity:0}.m-figure.m-figure--original .m-figure__img-wrapper,.m-figure.m-figure--original>picture{-webkit-box-pack:center;-ms-flex-pack:center;background-color:transparent;-webkit-justify-content:center;justify-content:center}.m-figure.m-figure--original .m-figure__img-wrapper .m-figure__img,.m-figure.m-figure--original>picture .m-figure__img{-ms-flex-item-align:center;-webkit-align-self:center;align-self:center;height:auto;max-width:100%;position:relative;width:auto}.m-figure.m-figure--16x9 .m-figure__img-wrapper,.m-figure.m-figure--16x9>picture{padding-bottom:56.25%}.m-figure.m-figure--24x9 .m-figure__img-wrapper,.m-figure.m-figure--24x9>picture{padding-bottom:37.5%}.m-figure.m-figure--1x1 .m-figure__img-wrapper,.m-figure.m-figure--1x1>picture{padding-bottom:100%}.m-figure.m-figure--rounded picture{border:1px solid #c4c4c4;border-radius:8px}.m-figure.m-figure--rounded picture img{border-radius:8px}.m-figure picture{background-color:#d4d4d4}@-webkit-keyframes image_loading{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes image_loading{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(100%);transform:translateX(100%)}}.m-figure picture:before{-webkit-animation:image_loading 1s cubic-bezier(.4,0,.2,1) infinite;animation:image_loading 1s cubic-bezier(.4,0,.2,1) infinite;background:linear-gradient(135deg,hsla(0,0%,100%,0) 30%,hsla(0,0%,100%,.1) 35%,hsla(0,0%,100%,.3) 45%,hsla(0,0%,100%,.5) 50%,hsla(0,0%,100%,.3) 55%,hsla(0,0%,100%,.1) 65%,hsla(0,0%,100%,0) 70%);bottom:-20%;content:"";display:block;height:140%;left:0;position:absolute;top:-20%;width:100%}.m-figure.m-figure--disable-loading picture{background-color:transparent}.m-figure.m-figure--disable-loading picture:before{display:none}.o-ad-sponsoring{z-index:1}.o-ad-sponsoring[data-tms-ad-status=disabled]{display:none}@media screen and (min-width:1280px){.o-ad-sponsoring[data-tms-ad-status=enabled]{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:200px;left:50%;margin:0 auto;overflow:visible;position:relative;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:1600px}.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__link{background:top no-repeat #fff;-webkit-box-shadow:0 0 1px #9a9a9a;box-shadow:0 0 1px #9a9a9a;position:relative}.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__link:focus{outline:none}.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__link[href="#"]{cursor:default}.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__end,.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__start{height:960px;width:270px}.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__start{background-position:0 0}.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__end{background-position:100% 0}.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__middle{border-bottom:1px solid #f0f0f0;-webkit-box-shadow:none;box-shadow:none;width:1060px;z-index:1}}@media screen and (min-width:1600px){.o-ad-sponsoring[data-tms-ad-status=enabled]{left:auto;-webkit-transform:none;transform:none}}.o-ad-container{-webkit-box-flex:0;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-justify-content:center;justify-content:center}.o-ad-container.o-ad-container--banner-top{display:none;overflow:hidden}.o-ad-container.o-ad-container--with-background{position:relative}.o-ad-container.o-ad-container--with-background:before{background-color:#f8f8f8;-webkit-box-shadow:inset 0 0 30px 0 #d4d4d4;box-shadow:inset 0 0 30px 0 #d4d4d4;content:"";height:100%;left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:200%}.o-ad-container.o-ad-container--with-background>div,.o-ad-container.o-ad-container--with-background>iframe{position:relative}.o-ad-container .o-ad-container__content{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;width:100%}.o-ad-container .o-ad-container__content .o-ad-container__content__ad{-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto}.o-ad-container .o-ad-container__content .o-ad-container__content__report-link{display:none}.o-ad-container[data-tms-ad-status=resized] .o-ad-container__content.o-ad-container__content--report-enabled:before{content:""}.o-ad-container[data-tms-ad-status=resized] .o-ad-container__content.o-ad-container__content--report-enabled .o-ad-container__content__report-link,.o-ad-container[data-tms-ad-status=resized] .o-ad-container__content.o-ad-container__content--report-enabled:before{-webkit-box-flex:0;-webkit-flex:0 1 38px;-ms-flex:0 1 38px;flex:0 1 38px}.o-ad-container[data-tms-ad-status=resized] .o-ad-container__content.o-ad-container__content--report-enabled .o-ad-container__content__report-link{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;color:#777;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 6px}.o-ad-container[data-tms-ad-type=post-article]>div,.o-ad-container[data-tms-ad-type=post-article]>iframe{margin:0 auto;max-width:850px;width:calc(100vw - 32px)}@media screen and (min-width:640px){.o-ad-container[data-tms-ad-type=post-article]>div,.o-ad-container[data-tms-ad-type=post-article]>iframe{width:calc(100vw - 44px)}}@media screen and (min-width:780px) and (min-height:350px){.o-ad-container.o-ad-container--banner-top{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:120px;padding:15px 0}.o-ad-container.o-ad-container--banner-top[data-tms-ad-status=disabled],.o-ad-container.o-ad-container--banner-top[data-tms-ad-status=empty]{display:none}}@media screen and (min-width:1000px) and (min-height:800px){.o-ad-container.o-ad-container--banner-top{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:280px;padding:15px 0}.o-ad-container.o-ad-container--banner-top[data-tms-ad-status=disabled],.o-ad-container.o-ad-container--banner-top[data-tms-ad-status=empty]{display:none}}.o-breaking-alert{background-color:#a20b0b;-webkit-box-shadow:0 -3px 6px rgba(0,0,0,.16);box-shadow:0 -3px 6px rgba(0,0,0,.16);color:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.o-breaking-alert .o-breaking-alert-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;max-width:1024px;padding:0 0 20px}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow{-webkit-box-flex:1;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:5px;max-width:1024px;padding:0 0 0 16px}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow .o-breaking-alert__toprow__meta{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.2rem}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow .o-breaking-alert__toprow__meta .urgent__tag{margin:0 10px 0 0}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow .a-close-button{height:40px;width:40px}.o-breaking-alert .o-breaking-alert-wrapper .urgent__image{-webkit-box-flex:0;-webkit-flex:0 0 140px;-ms-flex:0 0 140px;flex:0 0 140px;padding:0 0 0 16px}.o-breaking-alert .o-breaking-alert-wrapper .urgent__title{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:1.7rem;font-weight:700;line-height:1.3;padding:0 16px}@media screen and (min-width:640px){.o-breaking-alert .o-breaking-alert-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:120px;padding:22px 0}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow{-webkit-box-flex:0;-webkit-box-ordinal-group:3;-ms-flex-order:2;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex:0 1 48px;-ms-flex:0 1 48px;flex:0 1 48px;height:40px;line-height:1;margin-bottom:0;-webkit-order:2;order:2;padding:0 22px 0 16px;width:calc(100% - 226px)}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow .o-breaking-alert__toprow__meta{-webkit-box-align:start;-ms-flex-align:start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:1.6rem}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow .o-breaking-alert__toprow__meta .urgent__tag{margin-bottom:5px}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow .a-close-button{margin-top:-10px}.o-breaking-alert .o-breaking-alert-wrapper .urgent__image{-webkit-box-ordinal-group:2;-ms-flex-order:1;-webkit-box-flex:1;-webkit-flex:1 0 120px;-ms-flex:1 0 120px;flex:1 0 120px;height:120px;-webkit-order:1;order:1;padding:0 0 0 28px;width:auto}.o-breaking-alert .o-breaking-alert-wrapper .urgent__image .m-figure,.o-breaking-alert .o-breaking-alert-wrapper .urgent__image .m-figure .m-figure__img-wrapper,.o-breaking-alert .o-breaking-alert-wrapper .urgent__image .m-figure>picture{height:100%}.o-breaking-alert .o-breaking-alert-wrapper .urgent__image .m-figure .m-figure__img-wrapper .m-figure__img,.o-breaking-alert .o-breaking-alert-wrapper .urgent__image .m-figure>picture .m-figure__img{height:100%;width:auto}.o-breaking-alert .o-breaking-alert-wrapper .urgent__title{-webkit-box-ordinal-group:4;-ms-flex-order:3;-webkit-box-flex:0;-webkit-flex:0 1 72px;-ms-flex:0 1 72px;flex:0 1 72px;font-size:2.6rem;-webkit-order:3;order:3;padding:0 28px 0 16px;width:calc(100% - 226px)}.o-breaking-alert .o-breaking-alert-wrapper .urgent__title .article__title{font-size:2rem;height:0;line-height:1.2}}@media screen and (min-width:1024px){.o-breaking-alert .urgent__title .article__title{font-size:2.4rem}}.o-header{border-bottom:1px solid #d4d4d4;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;width:100%}.o-header:after,.o-header:before{content:"";height:100%;position:absolute;width:100%}.o-header:before{background-color:#fff;height:65px;z-index:99999995}.o-header:after{bottom:0;-webkit-box-shadow:0 3px 6px rgba(49,49,49,.16);box-shadow:0 3px 6px rgba(49,49,49,.16);left:0;z-index:99999995}.u-header-hide-scroll-down[data-site-nav-state=hidden] .o-header{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.u-header-hide-scroll-down[data-site-nav-state=hidden] .o-header:after{display:none}.o-header .o-header__inner{margin:0 auto;max-width:1024px;position:relative;z-index:99999996}.o-header .o-header__inner .o-header__inner__background{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-align-items:center;align-items:center;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:65px;-webkit-justify-content:space-between;justify-content:space-between;padding:0 16px;position:relative;z-index:99999990}.o-header .o-header__inner .o-header__inner__background:before{background-color:#fff;content:"";height:1000px;left:0;position:absolute;top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%);width:100%}.o-header .o-header__inner .o-header__inner__background .o-header__home-link{-webkit-box-flex:0;-webkit-flex:0 0 45px;-ms-flex:0 0 45px;flex:0 0 45px;height:45px;overflow:hidden}.o-header .o-header__inner .o-header__inner__background .o-header__home-link h1{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.o-header .o-header__inner .o-header__inner__background .o-header__home-link-wrapper{-webkit-box-flex:1;-webkit-box-ordinal-group:2;-ms-flex-order:1;-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-justify-content:center;justify-content:center;-webkit-order:1;order:1}.o-header .o-header__inner .o-header__inner__background .o-header__home-link-wrapper .a-home-link{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-flex:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 1 30px;-ms-flex:0 1 30px;flex:0 1 30px;-webkit-justify-content:center;justify-content:center}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--start{-webkit-box-ordinal-group:1;-ms-flex-order:0;-webkit-order:0;order:0}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--end{-webkit-box-ordinal-group:3;-ms-flex-order:2;-webkit-order:2;order:2}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--placeholder{-webkit-box-flex:0;-webkit-flex:0 0 30px;-ms-flex:0 0 30px;flex:0 0 30px;min-width:30px}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--desktop-only{display:none}@media screen and (min-width:640px){.o-header .o-header__inner .o-header__inner__background{padding:0 22px}}@media screen and (min-width:1024px){.o-header:before{background-color:#fff;border-bottom:8px solid #e2001a;-webkit-box-sizing:border-box;box-sizing:border-box;height:90px;z-index:99999995}.o-header .o-header__inner .o-header__inner__background{gap:30px;height:82px}.o-header .o-header__inner .o-header__inner__background .o-header__home-link-wrapper{-webkit-box-ordinal-group:1;-ms-flex-order:0;-webkit-box-flex:1;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-order:0;order:0}.o-header .o-header__inner .o-header__inner__background .o-header__home-link-wrapper .a-home-link{-webkit-box-flex:0;-webkit-flex:0 0 60px;-ms-flex:0 0 60px;flex:0 0 60px;height:60px}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--mobile-only,.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--placeholder{display:none}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--desktop-only{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--start{-webkit-box-ordinal-group:3;-ms-flex-order:2;-webkit-order:2;order:2}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--end{-webkit-box-ordinal-group:4;-ms-flex-order:3;-webkit-order:3;order:3}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--main{-webkit-box-ordinal-group:5;-ms-flex-order:4;-webkit-order:4;order:4}.o-header .o-header__inner .o-header__inner__background .o-header__site-nav-link.o-header__site-nav-link--main .a-bottom-bar-link .a-svg--picto-burger{height:18px;width:22px}}.o-hot-tags{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:10px;padding:9px 16px;position:relative}.o-hot-tags .o-hot-tags__wrapper{-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;height:22px;margin:0 -2px 0 0;max-width:100%;overflow:hidden}.o-hot-tags .o-hot-tags__wrapper .o-hot-tags__scrollable{-webkit-box-align:baseline;-ms-flex-align:baseline;-webkit-overflow-scrolling:touch;-webkit-align-items:baseline;align-items:baseline;-webkit-box-sizing:content-box;box-sizing:content-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:10px;height:22px;line-height:22px;margin:0 auto;overflow-x:auto;overflow-y:hidden;padding:0 2px 32px}.o-hot-tags .o-hot-tags__wrapper .o-hot-tags__scrollable .o-hot-tags__title{-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;height:22px;white-space:nowrap}.o-hot-tags .o-hot-tags__wrapper .o-hot-tags__scrollable.o-hot-tags__scrollable::-webkit-scrollbar{display:none}.o-hot-tags .o-hot-tags__wrapper .o-hot-tags__scrollable .o-hot-tags__item{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-flex:0;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;height:22px}.o-hot-tags .o-hot-tags__wrapper .o-hot-tags__scrollable .o-hot-tags__item .a-hot-tag{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:22px}.o-hot-tags .o-hot-tags__wrapper .o-hot-tags__scrollable .o-hot-tags__item a:focus-visible{outline:1px solid #313131;outline-offset:0}.o-hot-tags .o-hot-tags__wrapper.o-hot-tags__wrapper:after{background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff);content:"";height:100%;pointer-events:none;position:absolute;right:0;top:0;width:50px}.o-hot-tags.o-hot-tags--border:after{border-bottom:1px solid #c4c4c4;bottom:0;content:"";height:1px;left:50%;position:absolute;top:auto;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw}@media screen and (min-width:640px){.o-hot-tags{padding:9px 22px}.o-hot-tags:after{border-bottom:1px solid #c4c4c4;bottom:0;content:"";height:1px;left:50%;position:absolute;top:auto;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw}}.o-bottom-bar{-ms-flex-pack:distribute;background-color:#fff;border-bottom:6px solid #e2001a;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:60px;-webkit-justify-content:space-around;justify-content:space-around;left:0;position:fixed;width:100%;z-index:99999995}.o-bottom-bar:after{-webkit-box-shadow:0 -3px 6px rgba(49,49,49,.16);box-shadow:0 -3px 6px rgba(49,49,49,.16);content:"";height:100%;left:0;position:absolute;top:0;width:100%}.o-bottom-bar .o-bottom-bar__item{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-flex:0;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;-webkit-flex:0 1 60px;-ms-flex:0 1 60px;flex:0 1 60px;-webkit-justify-content:center;justify-content:center;position:relative;z-index:99999996}.o-bottom-bar .o-bottom-bar__item,.o-bottom-bar .o-bottom-bar__item .o-bottom-bar__item__link--mobile-only{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.o-bottom-bar .o-bottom-bar__item .o-bottom-bar__item__link--desktop-only{display:none}.o-bottom-bar .o-bottom-bar__item.o-bottom-bar__item--live .o-bottom-bar__item__link .a-player-links .a-player-links__link .a-player-links__link__live-name,.o-bottom-bar .o-bottom-bar__item.o-bottom-bar__item--live .o-bottom-bar__item__link .a-player-links .a-player-links__link .a-player-links__link__live-subname{white-space:nowrap}.o-bottom-bar .o-bottom-bar__item.o-bottom-bar__item--live .o-bottom-bar__item__link--mobile-only.o-bottom-bar__item__link--live .a-player-links .a-player-links__link .a-player-links__link__live-name,.o-bottom-bar .o-bottom-bar__item.o-bottom-bar__item--live .o-bottom-bar__item__link--mobile-only.o-bottom-bar__item__link--live .a-player-links .a-player-links__link .a-player-links__link__live-subname{font-size:1.4rem}.o-bottom-bar .o-bottom-bar__item.o-bottom-bar__item--live .a-bottom-bar-link .a-bottom-bar-link__label{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.4rem;gap:3px}.o-bottom-bar .o-bottom-bar__item.o-bottom-bar__item--live .a-bottom-bar-link .a-bottom-bar-link__label:before{background-color:#d90000;border-radius:50%;content:"";height:10px;width:10px}@media screen and (min-width:1024px){.o-bottom-bar{-webkit-box-pack:start;-ms-flex-pack:start;border-bottom:none;bottom:auto;height:82px;-webkit-justify-content:flex-start;justify-content:flex-start;left:calc(50% - 85px);padding:0;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:650px}.o-bottom-bar:after{display:none}.o-bottom-bar .o-bottom-bar__item{margin:0 15px}.o-bottom-bar .o-bottom-bar__item.o-bottom-bar__item--live{-webkit-box-ordinal-group:101;-ms-flex-order:100;border-left:1px solid #d4d4d4;border-right:1px solid #d4d4d4;gap:20px;-webkit-order:100;order:100;padding:0 25px}.o-bottom-bar .o-bottom-bar__item .o-bottom-bar__item__link--mobile-only,.o-bottom-bar .o-bottom-bar__item.o-bottom-bar__item--burger{display:none}.o-bottom-bar .o-bottom-bar__item .o-bottom-bar__item__link--desktop-only{-webkit-box-flex:1;-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 70px;-ms-flex:1 1 70px;flex:1 1 70px;-webkit-justify-content:center;justify-content:center;min-width:70px}}.o-modal-content{-webkit-box-pack:justify;-ms-flex-pack:justify;background-color:#fff;border:1px solid #f0f0f0;-webkit-box-shadow:0 0 8px rgba(0,0,0,.4);box-shadow:0 0 8px rgba(0,0,0,.4);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-between;justify-content:space-between;left:50%;max-width:500px;min-width:300px;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:calc(100% - 20px)}.o-modal-content.o-modal-content--pwa .o-modal-content__header{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:15px 15px 0;text-align:center;width:100%}.o-modal-content.o-modal-content--pwa .o-modal-content__header .a-close-button{-ms-flex-item-align:end;-webkit-align-self:flex-end;align-self:flex-end}.o-modal-content.o-modal-content--pwa .o-modal-content__header .o-modal-content__header__title{font-size:2.4rem}.o-modal-content.o-modal-content--pwa .o-modal-content__header .o-modal-content__header__title strong{font-weight:700}.o-modal-content.o-modal-content--pwa .o-modal-content__body{padding:15px 12px}.o-modal-content.o-modal-content--pwa .o-modal-content__footer{background-color:#c4c4c4;padding:15px 12px;width:100%}.o-nav-bar{background-color:#e2001a;padding:9px 0;position:relative;z-index:99999996}.o-nav-bar .o-nav-bar__wrapper{height:22px;margin:0 auto;max-width:1024px;overflow:hidden;padding:0 14px}.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable{-webkit-box-align:baseline;-ms-flex-align:baseline;-webkit-overflow-scrolling:touch;-webkit-align-items:baseline;align-items:baseline;-webkit-box-sizing:content-box;box-sizing:content-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:22px;margin:0 auto;overflow-x:auto;overflow-y:hidden;padding:0 2px 32px}.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable .o-nav-bar__item{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-flex:0;-webkit-margin-end:10px;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;height:22px;margin:0;margin-inline-end:10px}.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable .o-nav-bar__item.o-nav-bar__item--hot-tag{background-color:hsla(0,0%,100%,.3);border-radius:5px}.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable .o-nav-bar__item.o-nav-bar__item--hot-tag a{color:#fff}.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable .o-nav-bar__item.o-nav-bar__item--hot-tag,.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable .o-nav-bar__item.o-nav-bar__item--thematic-tag{padding:2px 8px}.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable .o-nav-bar__item a{color:#fff;font-size:1.3rem;text-transform:uppercase}.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable .o-nav-bar__item.o-nav-bar__item--active a{font-weight:700}.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable .o-nav-bar__item a:focus-visible{outline:1px solid #313131;outline-offset:0}.o-nav-bar .o-nav-bar__wrapper .o-nav-bar__scrollable.o-nav-bar__scrollable::-webkit-scrollbar{display:none}.o-nav-bar .o-nav-bar__wrapper.o-nav-bar__wrapper:after{background:-webkit-gradient(linear,left top,right top,from(rgba(226,0,26,0)),to(#e2001a));background:linear-gradient(90deg,rgba(226,0,26,0) 0,#e2001a);content:"";height:100%;pointer-events:none;position:absolute;right:0;top:0;width:50px}@media screen and (min-width:640px){.o-nav-bar .o-nav-bar__wrapper{padding:0 20px}}.o-tag-list .o-tag-list__wrapper{-webkit-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;margin:0 auto;max-width:1024px;overflow:hidden;width:100%}.o-tag-list .o-tag-list__wrapper,.o-tag-list .o-tag-list__wrapper .u-horizontal-scroll__scrollable{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:30px;position:relative}.o-tag-list .o-tag-list__wrapper .u-horizontal-scroll__scrollable{-webkit-overflow-scrolling:touch;-webkit-padding-end:50px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;min-width:100%;overflow-x:auto;overflow-y:hidden;padding-inline-end:50px;scrollbar-width:none}.o-tag-list .o-tag-list__wrapper .u-horizontal-scroll__scrollable::-webkit-scrollbar{display:none}.o-tag-list .o-tag-list__wrapper:after{background:-webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff);content:"";height:100%;pointer-events:none;position:absolute;width:50px}.o-tag-list .o-tag-list__wrapper .o-tag-list__scrollable{-webkit-box-align:baseline;-ms-flex-align:baseline;-webkit-align-items:baseline;align-items:baseline;gap:10px}.o-tag-list .o-tag-list__wrapper .o-tag-list__scrollable .o-tag-list__item{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-flex:0;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto}.o-tag-list .o-tag-list__wrapper:after{top:0}.o-tag-list.o-tag-list--no-overflow .o-tag-list__wrapper{height:auto}.o-tag-list.o-tag-list--no-overflow .o-tag-list__wrapper .o-tag-list__scrollable{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:auto}.o-tag-list.o-tag-list--no-overflow .o-tag-list__wrapper:after{display:none}.o-tag-list-wrapper .o-tag-list .o-tag-list__wrapper{padding:8px 0}.o-tag-list-wrapper .o-tag-list .o-tag-list__wrapper .o-tag-list__scrollable{-webkit-padding-start:16px;gap:24px;padding-inline-start:16px}.t-content.t-content--page-builder .o-tag-list{margin:15px 0}.t-content.t-content--page-builder .o-tag-list .o-tag-list__title{font-size:2rem;font-weight:700;margin:0 16px 10px}.t-content.t-content--page-builder .o-tag-list .o-tag-list__wrapper .o-tag-list__scrollable{-webkit-padding-start:16px;padding-inline-start:16px}.u-header-with-tag-list .t-content.t-content--page-builder>.o-tag-list{padding-top:10px}.o-tag-list-wrapper{-webkit-transition:top .3s,-webkit-transform .3s;transition:top .3s,-webkit-transform .3s;transition:transform .3s,top .3s;transition:transform .3s,top .3s,-webkit-transform .3s;width:100%}.o-tag-list-wrapper:before{background-color:#fff;border-top:1px solid #9a9a9a;-webkit-box-sizing:border-box;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;top:0;width:100vw}.o-tag-list-wrapper:after{bottom:0;-webkit-box-shadow:0 3px 6px rgba(49,49,49,.16);box-shadow:0 3px 6px rgba(49,49,49,.16);content:"";height:100%;left:0;position:absolute;width:100%;z-index:99999995}.o-tag-list-wrapper .o-tag-list{margin:0 auto;max-width:1024px;position:relative;z-index:99999996}.u-header-hide-scroll-down[data-site-nav-state=hidden] .o-tag-list-wrapper{top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.u-header-hide-scroll-down[data-site-nav-state=hidden] .o-tag-list-wrapper:after{display:none}@media screen and (min-width:640px){.t-content.t-content--page-builder .o-tag-list{margin:15px 22px 0}.t-content.t-content--page-builder .o-tag-list .o-tag-list__title{margin:0 0 10px}.t-content.t-content--page-builder .o-tag-list .o-tag-list__wrapper .o-tag-list__scrollable{-webkit-padding-start:0;padding-inline-start:0}.o-tag-list-wrapper .o-tag-list .o-tag-list__wrapper{padding:8px 22px}.o-tag-list-wrapper .o-tag-list .o-tag-list__wrapper .o-tag-list__scrollable{-webkit-padding-start:0;padding-inline-start:0}}@media screen and (min-width:1024px){.o-tag-list-wrapper:before{border-top:none}.t-content.t-content--page-builder .o-tag-list{margin:22px 22px 0}.u-header-with-tag-list .t-content.t-content--page-builder .o-tag-list{padding-top:0}.o-tag-list-wrapper .o-tag-list .o-tag-list__wrapper .o-tag-list__scrollable{gap:32px}}.o-site-nav-wrapper{bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:auto;position:fixed;top:65px;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;width:100%;z-index:99999989}.u-header-hide-scroll-down[data-site-nav-state=hidden] .o-site-nav-wrapper{top:0}.o-site-nav-wrapper .o-site-nav__scrollable{background-color:#fff;max-height:100%;overflow-x:hidden;overflow-y:auto}.o-site-nav-wrapper.o-site-nav-wrapper--active{bottom:60px;pointer-events:none;-webkit-transform:translateY(0);transform:translateY(0)}.o-site-nav-wrapper.o-site-nav-wrapper--active .o-site-nav__scrollable{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16);box-shadow:0 3px 6px rgba(0,0,0,.16);pointer-events:auto}.o-site-nav-wrapper.o-site-nav-wrapper--is-bb{-webkit-transform:translateY(calc(100% + 60px));transform:translateY(calc(100% + 60px))}.o-site-nav-wrapper.o-site-nav-wrapper--is-bb .o-site-nav__scrollable{bottom:0;position:absolute;width:100%}.o-site-nav-wrapper.o-site-nav-wrapper--is-bb.o-site-nav-wrapper--active{-webkit-transform:translateY(0);transform:translateY(0)}.o-site-nav-wrapper.o-site-nav-wrapper--is-bb.o-site-nav-wrapper--active .o-site-nav__scrollable{-webkit-box-shadow:0 -3px 6px rgba(0,0,0,.16);box-shadow:0 -3px 6px rgba(0,0,0,.16)}@media screen and (min-width:1024px){.o-site-nav-wrapper{max-width:428px;top:90px;width:auto}.o-site-nav-wrapper .o-site-nav__scrollable{-webkit-box-sizing:border-box;box-sizing:border-box}.o-site-nav-wrapper.o-site-nav-wrapper--is-bb{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.o-site-nav-wrapper.o-site-nav-wrapper--is-bb .o-site-nav__scrollable{bottom:auto;position:static;width:auto}.o-site-nav-wrapper.o-site-nav-wrapper--is-bb.o-site-nav-wrapper--active{-webkit-transform:translateY(0);transform:translateY(0)}.o-site-nav-wrapper.o-site-nav-wrapper--is-bb.o-site-nav-wrapper--active .o-site-nav__scrollable{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16);box-shadow:0 3px 6px rgba(0,0,0,.16)}}.o-special-bar{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.16);box-shadow:0 3px 6px rgba(0,0,0,.16);padding:9px 0}.o-special-bar .o-special-bar__wrapper{-webkit-box-pack:stretch;-ms-flex-pack:stretch;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:stretch;justify-content:stretch;margin:0 auto;max-width:1024px;padding:0 16px}.o-special-bar .o-special-bar__wrapper .o-special-bar__content{color:#fff;line-height:1.2}@media screen and (min-width:640px){.o-special-bar .o-special-bar__wrapper{padding:0 22px}}.o-sticky-wrapper{bottom:60px;left:0;position:fixed;width:100%;z-index:99999985}@media screen and (min-width:1024px){.o-sticky-wrapper{bottom:0}}.t-content{margin:0 auto;max-width:1024px;padding:22px 0 60px}.t-content .m-breadcrumb,.t-content .t-content__authors,.t-content .t-content__authors-tts,.t-content .t-content__body,.t-content .t-content__chapo,.t-content .t-content__chapters,.t-content .t-content__dates,.t-content .t-content__description,.t-content .t-content__page-cta,.t-content .t-content__podcast-about,.t-content .t-content__podcast-header,.t-content .t-content__section,.t-content .t-content__shares,.t-content .t-content__tags,.t-content .t-content__title,.t-content .t-content__transcription{margin-left:16px;margin-right:16px}.t-content .t-content__page-cta{margin-bottom:30px}.t-content .t-content__section{margin-bottom:16px;margin-top:24px}.t-content .m-breadcrumb,.t-content .t-content__authors-tts,.t-content .t-content__body,.t-content .t-content__main-media,.t-content .t-content__related,.t-content .t-content__tags{margin-bottom:14px}.t-content .t-content__authors,.t-content .t-content__dates,.t-content .t-content__shares,.t-content .t-content__title,.t-content .t-content__transcription{margin-bottom:24px}.t-content .t-content__shares.t-content__shares--has-label{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #e0e0e0;border-top:1px solid #e0e0e0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:10px;margin-bottom:50px;margin-top:20px;padding:20px 0}.t-content .t-content__shares.t-content__shares--has-label .a-share-bar-label{-webkit-box-flex:0;color:#6f6e71;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;font-size:1.3rem;white-space:nowrap}.t-content .t-content__shares.t-content__shares--has-label .m-share-bar{-webkit-box-flex:1;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto}.t-content .o-aside-content.o-aside-content--guest-list,.t-content .t-content__chapters,.t-content .t-content__podcast-header{margin-bottom:40px}.t-content .t-content__main-media .m-figure .m-figure__caption{font-size:1.2rem}.t-content .t-content__dates{font-size:1.3rem}.t-content .t-content__section.a-tag,.t-content .t-content__tags .m-tags-list .m-tags-list__tag{font-size:1.4rem}.t-content .t-content__tags .t-content__tags__title{font-size:2rem;font-weight:700;margin:0 0 10px}.t-content .t-content__section.a-tag .a-tag__wrapper{font-weight:700;padding:4px 6px}.t-content .t-content__title.t-content__title--centered{text-align:center}.t-content .m-em-video .m-figure .m-figure__caption,.t-content .t-content__main-media .m-figure .m-figure__caption{padding:4px}.t-content .m-em-video .m-figure .m-figure__media-time,.t-content .t-content__main-media .m-figure .m-figure__media-time{background-color:#313131;border-radius:4px;bottom:10px;color:#fff;font-size:1.3rem;font-weight:700;padding:3px 6px;position:absolute;right:10px}.t-content .em-video-wrapper [data-hidden-video-player],.t-content .t-content__main-media [data-hidden-video-player]{display:none}.t-content .t-content__chapo{font-size:1.8rem;font-weight:300;line-height:1.6;margin-bottom:28px}.t-content .t-content__chapo .t-location{color:#6f6e71;font-size:1.7rem;font-style:italic;font-weight:400}.t-content .t-content__body blockquote,.t-content .t-content__body ol,.t-content .t-content__body p,.t-content .t-content__body ul,.t-content .t-content__body>h3{color:#454545;font-size:1.7rem;line-height:1.7;margin-bottom:28px}.t-content .t-content__body>h2,.t-content .t-content__body>h3{color:#313131;font-weight:700}.t-content .t-content__body>h2{font-size:2.3rem;line-height:1.5;margin-bottom:15px;margin-top:40px}.t-content .t-content__body ol,.t-content .t-content__body ul{padding:0 18px}.t-content .t-content__body ol a,.t-content .t-content__body ul a{color:#e2001a}@media (hover:hover){.t-content .t-content__body ol a:hover,.t-content .t-content__body ul a:hover{text-decoration:underline}}.t-content .t-content__body ol a:visited,.t-content .t-content__body ul a:visited{color:#e2001a}.t-content .t-content__body ul{list-style:disc}.t-content .t-content__body ol{list-style-type:decimal}.t-content .t-content__body .t-copyright,.t-content .t-content__body .t-location{color:#6f6e71}.t-content .t-content__body .t-copyright{margin-bottom:0}.t-content .t-content__body blockquote.quote{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-style:oblique;margin:0 auto 28px;max-width:550px}.t-content .t-content__body blockquote.quote:before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="1953.825 753.831 51.23 39.793"><path fill="%23e2001a" d="M1953.825 778.553q0-17.156 20.552-24.722v2.979a20.992 20.992 0 0 0-9.233 6.612 16.569 16.569 0 0 0-3.932 10.6 3.062 3.062 0 0 0 .357 1.668.537.537 0 0 0 .477.357 2.036 2.036 0 0 0 .953-.477 7.956 7.956 0 0 1 4.766-1.37 7.874 7.874 0 0 1 6.106 2.859 9.8 9.8 0 0 1-.477 13.642 10.093 10.093 0 0 1-7.3 2.919 10.75 10.75 0 0 1-9.233-4.766 17.366 17.366 0 0 1-3.036-10.301zm28.653 0q0-17.156 20.552-24.722v2.979a20.992 20.992 0 0 0-9.23 6.612 16.569 16.569 0 0 0-3.932 10.6 3.062 3.062 0 0 0 .357 1.668.537.537 0 0 0 .477.357 2.036 2.036 0 0 0 .953-.477 7.956 7.956 0 0 1 4.763-1.37 7.874 7.874 0 0 1 6.106 2.859 9.8 9.8 0 0 1-.477 13.642 10.093 10.093 0 0 1-7.3 2.919 10.75 10.75 0 0 1-9.233-4.766 17.366 17.366 0 0 1-3.035-10.301z"/></svg>');margin-bottom:15px}.t-content .t-content__body blockquote.quote:after{-ms-flex-item-align:end;-webkit-align-self:flex-end;align-self:flex-end;content:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="1953.944 772.376 51.23 39.793"><path fill="%23e2001a" d="M2005.175 787.447q0 17.156-20.552 24.722v-2.979a20.992 20.992 0 0 0 9.233-6.612 16.569 16.569 0 0 0 3.932-10.6 3.062 3.062 0 0 0-.357-1.668.537.537 0 0 0-.477-.357 2.036 2.036 0 0 0-.953.477 7.956 7.956 0 0 1-4.766 1.37 7.874 7.874 0 0 1-6.106-2.859 9.8 9.8 0 0 1 .477-13.642 10.093 10.093 0 0 1 7.3-2.919 10.75 10.75 0 0 1 9.233 4.766 17.366 17.366 0 0 1 3.036 10.301zm-28.653 0q0 17.156-20.552 24.722v-2.979a20.992 20.992 0 0 0 9.23-6.612 16.569 16.569 0 0 0 3.932-10.6 3.062 3.062 0 0 0-.357-1.668.537.537 0 0 0-.477-.357 2.036 2.036 0 0 0-.953.477 7.956 7.956 0 0 1-4.763 1.37 7.874 7.874 0 0 1-6.106-2.859 9.8 9.8 0 0 1 .477-13.642 10.093 10.093 0 0 1 7.3-2.919 10.75 10.75 0 0 1 9.233 4.766 17.366 17.366 0 0 1 3.035 10.301z"/></svg>')}.t-content .t-content__body blockquote.quote:after,.t-content .t-content__body blockquote.quote:before{color:#6f6e71;height:40px;width:50px}.t-content .t-content__body blockquote.quote p:last-child{margin-bottom:15px}.t-content .t-content__related{margin-top:50px}.t-content .t-content__list-content{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:40px 0 0}.t-content .t-content__list-content .t-content__list-content__title{-ms-flex-item-align:start;-webkit-align-self:flex-start;align-self:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 16px 20px}.t-content .t-content__list-content .t-content__list-content__title .a-aside-title{color:#fff;font-size:1.9rem;font-weight:400;text-transform:none}.t-content .t-content__list-content .o-layout-list{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%}.t-content .t-content__description ol,.t-content .t-content__description p,.t-content .t-content__description ul{font-size:1.7rem;line-height:1.7;margin-bottom:28px}.t-content .t-content__description ol,.t-content .t-content__description ul{padding:0 18px}.t-content .t-content__description ol a,.t-content .t-content__description ul a{color:#e2001a}@media (hover:hover){.t-content .t-content__description ol a:hover,.t-content .t-content__description ul a:hover{text-decoration:underline}}.t-content .t-content__description ol a:visited,.t-content .t-content__description ul a:visited{color:#e2001a}.t-content .t-content__description ul{list-style:disc}.t-content .t-content__description ol{list-style-type:decimal}.t-content .t-content__body table{border-spacing:0;margin-bottom:28px}.t-content .t-content__body table tr td,.t-content .t-content__body table tr th{font-weight:700;padding:5px 18px}.t-content .t-content__body table tr th{font-size:2rem;text-align:start}.t-content .t-content__body table tr td{font-size:1.7rem;line-height:1.3}.t-content .t-content__body table.m-table-alternate tr td,.t-content .t-content__body table.m-table-alternate tr th{padding:20px 18px}.t-content .t-content__body table.m-table-alternate tr th{background-color:#e2001a;color:#fff}.t-content .t-content__body table.m-table-alternate tr:nth-child(2n){background-color:#f0f0f0}@media screen and (min-width:640px){.t-content .m-breadcrumb,.t-content .t-content__authors,.t-content .t-content__authors-tts,.t-content .t-content__body,.t-content .t-content__chapo,.t-content .t-content__chapters,.t-content .t-content__dates,.t-content .t-content__description,.t-content .t-content__edition-emission,.t-content .t-content__page-cta,.t-content .t-content__podcast-about,.t-content .t-content__podcast-header,.t-content .t-content__section,.t-content .t-content__shares,.t-content .t-content__tags,.t-content .t-content__title,.t-content .t-content__top-articles,.t-content .t-content__transcription{margin-left:22px;margin-right:22px}.t-content .m-breadcrumb,.t-content .t-content__authors-tts,.t-content .t-content__body,.t-content .t-content__edition-emission,.t-content .t-content__main-media,.t-content .t-content__related,.t-content .t-content__title{margin-bottom:20px}.t-content .t-content__authors,.t-content .t-content__tags,.t-content .t-content__transcription{margin-bottom:40px}.t-content .t-content__dates{margin-bottom:32px}.t-content .t-content__section{margin-top:32px}.t-content .t-content__chapo{font-size:2rem;font-weight:500}.t-content .t-content__body>.a-read-more,.t-content .t-content__body>.m-em-audio,.t-content .t-content__body>.m-em-diaporama,.t-content .t-content__body>.m-em-flash,.t-content .t-content__body>.m-em-quote,.t-content .t-content__body>.m-em-textbox,.t-content .t-content__body>.m-em-twitter,.t-content .t-content__body>.m-em-video,.t-content .t-content__body>[data-wrapper-video-player]{clear:both}.t-content .t-content__body>h2{font-size:2.3rem;font-weight:700}.t-content .t-content__section.a-tag,.t-content .t-content__tags .m-tags-list .m-tags-list__tag{font-size:1.7rem}.t-content .t-content__dates,.t-content .t-content__main-media .m-figure .m-figure__caption,.t-content .t-content__tags{font-size:1.5rem}.t-content .m-em-video .m-figure .m-figure__caption,.t-content .t-content__main-media .m-figure .m-figure__caption{padding:4px}.t-content .m-em-video .m-figure .m-figure__media-time,.t-content .t-content__main-media .m-figure .m-figure__media-time{bottom:20px;font-size:1.4rem;padding:4px 8px;right:20px}.t-content .t-content__authors-tts{-webkit-box-pack:start;-ms-flex-pack:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:flex-start;justify-content:flex-start}.t-content .t-content__shares.t-content__shares--has-label{gap:20px}.t-content .t-content__shares.t-content__shares--has-label .a-share-bar-label{font-size:1.5rem}.t-content .t-content__related{margin-top:70px}.t-content .t-content__related .o-aside-content .o-aside-content__title{margin:20px 16px}.t-content .t-content__list-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:70px 6px 0}.t-content .t-content__list-content .t-content__list-content__title{margin:0 16px 35px}.t-content .t-content__list-content .t-content__list-content__title .a-aside-title{font-size:2.4rem}.t-content.t-content--article .t-content__main-media,.t-content.t-content--breaking .t-content__main-media,.t-content.t-content--report .t-content__main-media,.t-content.t-content--video .t-content__main-media{margin-bottom:40px}}@media screen and (min-width:1024px){.t-content .t-content__article-wrapper .t-content__tags,.t-content .t-content__article-wrapper .t-content__top-articles,.t-content .t-content__authors,.t-content .t-content__authors-tts,.t-content .t-content__body,.t-content .t-content__chapo,.t-content .t-content__chapters,.t-content .t-content__description,.t-content .t-content__transcription{margin-left:auto;margin-right:auto;max-width:850px}.t-content .o-aside-content.o-aside-content--guest-list,.t-content .t-content__related{margin-left:auto;margin-right:auto;max-width:882px}.t-content .t-content__main-media{margin-left:22px;margin-right:22px}.t-content .t-content__main-media .m-figure .m-figure__caption{padding:8px 0}.t-content .t-content__main-media .m-figure .m-figure__caption span+span{margin:0 2px}}@media screen and (min-width:1280px){.o-ad-sponsoring[data-tms-ad-status=enabled]{left:auto;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__end{background-position:0 0}.o-ad-sponsoring[data-tms-ad-status=enabled] .o-ad-sponsoring__start{background-position:100% 0}}@media screen and (min-width:1600px){.o-ad-sponsoring[data-tms-ad-status=enabled]{right:auto;-webkit-transform:none;transform:none}}@media screen and (min-width:1024px){.o-bottom-bar{left:auto;right:calc(50% - 85px);-webkit-transform:translateX(50%);transform:translateX(50%)}}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow{padding:0 16px 0 0}.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow .o-breaking-alert__toprow__meta .urgent__tag{margin:0 0 0 10px}.o-breaking-alert .o-breaking-alert-wrapper .urgent__image{padding:0 16px 0 0}@media screen and (min-width:640px){.o-breaking-alert .o-breaking-alert-wrapper .o-breaking-alert__toprow{padding:0 16px 0 22px}.o-breaking-alert .o-breaking-alert-wrapper .urgent__image{padding:0 16px 0 28px}}.o-hot-tags{padding:7px 16px}.o-hot-tags .o-hot-tags__wrapper{height:26px;margin:0 0 0 -2px}.o-hot-tags .o-hot-tags__wrapper .o-hot-tags__scrollable,.o-hot-tags .o-hot-tags__wrapper .o-hot-tags__scrollable .o-hot-tags__item{height:26px}.o-hot-tags .o-hot-tags__wrapper.o-hot-tags__wrapper:after{background:-webkit-gradient(linear,right top,left top,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(270deg,hsla(0,0%,100%,0) 0,#fff);left:0;right:auto}@media screen and (min-width:640px){.o-hot-tags{padding:7px 22px}}.o-nav-bar .o-nav-bar__wrapper.o-nav-bar__wrapper:after{background:-webkit-gradient(linear,right top,left top,from(rgba(226,0,26,0)),to(#e2001a));background:linear-gradient(270deg,rgba(226,0,26,0) 0,#e2001a);left:0;right:auto}.o-tag-list .o-tag-list__wrapper.o-tag-list__wrapper:after{background:-webkit-gradient(linear,right top,left top,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(270deg,hsla(0,0%,100%,0) 0,#fff)}.t-content .t-content__body blockquote.quote:after{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="1953.825 753.831 51.23 39.793"><path fill="%23e2001a" d="M1953.825 778.553q0-17.156 20.552-24.722v2.979a20.992 20.992 0 0 0-9.233 6.612 16.569 16.569 0 0 0-3.932 10.6 3.062 3.062 0 0 0 .357 1.668.537.537 0 0 0 .477.357 2.036 2.036 0 0 0 .953-.477 7.956 7.956 0 0 1 4.766-1.37 7.874 7.874 0 0 1 6.106 2.859 9.8 9.8 0 0 1-.477 13.642 10.093 10.093 0 0 1-7.3 2.919 10.75 10.75 0 0 1-9.233-4.766 17.366 17.366 0 0 1-3.036-10.301zm28.653 0q0-17.156 20.552-24.722v2.979a20.992 20.992 0 0 0-9.23 6.612 16.569 16.569 0 0 0-3.932 10.6 3.062 3.062 0 0 0 .357 1.668.537.537 0 0 0 .477.357 2.036 2.036 0 0 0 .953-.477 7.956 7.956 0 0 1 4.763-1.37 7.874 7.874 0 0 1 6.106 2.859 9.8 9.8 0 0 1-.477 13.642 10.093 10.093 0 0 1-7.3 2.919 10.75 10.75 0 0 1-9.233-4.766 17.366 17.366 0 0 1-3.035-10.301z"/></svg>')}.t-content .t-content__body blockquote.quote:before{content:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="1953.944 772.376 51.23 39.793"><path fill="%23e2001a" d="M2005.175 787.447q0 17.156-20.552 24.722v-2.979a20.992 20.992 0 0 0 9.233-6.612 16.569 16.569 0 0 0 3.932-10.6 3.062 3.062 0 0 0-.357-1.668.537.537 0 0 0-.477-.357 2.036 2.036 0 0 0-.953.477 7.956 7.956 0 0 1-4.766 1.37 7.874 7.874 0 0 1-6.106-2.859 9.8 9.8 0 0 1 .477-13.642 10.093 10.093 0 0 1 7.3-2.919 10.75 10.75 0 0 1 9.233 4.766 17.366 17.366 0 0 1 3.036 10.301zm-28.653 0q0 17.156-20.552 24.722v-2.979a20.992 20.992 0 0 0 9.23-6.612 16.569 16.569 0 0 0 3.932-10.6 3.062 3.062 0 0 0-.357-1.668.537.537 0 0 0-.477-.357 2.036 2.036 0 0 0-.953.477 7.956 7.956 0 0 1-4.763 1.37 7.874 7.874 0 0 1-6.106-2.859 9.8 9.8 0 0 1 .477-13.642 10.093 10.093 0 0 1 7.3-2.919 10.75 10.75 0 0 1 9.233 4.766 17.366 17.366 0 0 1 3.035 10.301z"/></svg>')}@font-face{font-display:swap;font-family:Greta Arabic;font-style:normal;font-weight:400;src:url(/build/fonts/WF_Greta_Regular.96e374da2ee0033463d9b474d6fb45e9.woff2) format("woff2"),url(/build/fonts/WF_Greta_Regular.b4b7916e33d220196cf0357855e7e8e7.woff) format("woff")}@font-face{font-display:swap;font-family:Greta Arabic;font-style:normal;font-weight:700;src:url(/build/fonts/WF_Greta_Bold.e1962dac0a03eecb7ff7fd0864b9bde6.woff2) format("woff2"),url(/build/fonts/WF_Greta_Bold.67788f08750fc1de620fc54ede353973.woff) format("woff")}body,html{font-size:73%}body{direction:rtl;font-family:Greta Arabic,Arial,sans-serif;font-size:1.6rem}.o-header .o-header__inner .o-header__inner__background .o-header__home-link-wrapper .a-brand-logo{display:inline-block}.o-pwa-ah2s{border-radius:7px}.o-pwa-ah2s.o-pwa-ah2s--step-2 .o-modal-content--pwa{bottom:50px;top:unset;-webkit-transform:translate(-50%);transform:translate(-50%)}.o-pwa-ah2s.o-pwa-ah2s--step-2 .o-modal-content--pwa:after{border:30px solid transparent;border-top-color:#fff;bottom:-60px;content:"";display:block;height:0;left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:0}.o-pwa-ah2s .o-modal-content--pwa{-webkit-transition:all 1s cubic-bezier(.18,.89,.32,1.28);transition:all 1s cubic-bezier(.18,.89,.32,1.28)}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content{background-color:#fff;border-radius:13px}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content .o-modal-content__header .a-brand-logo{border-radius:6px;height:60px;width:60px}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content .o-modal-content__header .a-brand-logo--fle{border-radius:0;height:60px;width:152px}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content .o-modal-content__body .m-content-body-item__text-with-icon{-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:25px}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content .o-modal-content__body .m-content-body-item__text-with-icon .a-svg{margin:0 3px}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content .o-modal-content__footer{background:transparent}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content .o-modal-content__footer button{border-radius:7px;border-style:solid;border-width:1px;display:block;font-weight:700;line-height:35px;margin-bottom:15px;text-transform:uppercase;width:100%}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content .o-modal-content__footer button:last-child{margin-bottom:0}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content .o-modal-content__footer button.a-modal-btn__primary{background-color:#e2001a;border-color:#e2001a;color:#fff}.o-pwa-ah2s .o-modal-content--pwa.o-modal-content .o-modal-content__footer button.a-modal-btn__secondary{background-color:#fff;border-color:#c4c4c4;color:#313131}.o-pwa-ah2s.o-pwa-ah2s--offline-banner{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;background-color:rgba(255,0,0,.8);border-radius:7px 7px 0 0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:60px;-webkit-justify-content:center;justify-content:center;position:fixed;width:100%;z-index:99999986}.o-pwa-ah2s.o-pwa-ah2s--offline-banner .o-pwa-ah2s__content{color:#fff;font-size:1.3rem}.o-pwa-body{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.o-pwa-body .a-svg{margin-bottom:20px}.o-pwa-body .o-pwa-body__content{text-align:center}</style>
                <link type="text/css" rel="stylesheet" href="/build/css/root--ar.a068b10d6463c69bb919.css">
                    
            <style rel="stylesheet">.break-words{word-wrap:anywhere;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;-moz-hyphens:none;overflow-wrap:break-word;word-break:break-word}.a-svg--picto-arrow-top{background:url('data:image/svg+xml;charset=utf-8,<svg viewBox="9052.126 -3834.69 11.445 13.407" width="11.445" height="13.407" xmlns="http://www.w3.org/2000/svg"><path d="m9052.51-3828.4 5.553-5.587 5.17 5.587m-5.233-4.9v12" fill="none" stroke="%23313131"/></svg>') no-repeat 50%;background-size:contain;height:12px;width:10px}.a-prev-show-btn .a-svg--picto-arrow-top{background:url('data:image/svg+xml;charset=utf-8,<svg viewBox="9052.126 -3834.69 11.445 13.407" width="11.445" height="13.407" xmlns="http://www.w3.org/2000/svg"><path d="m9052.51-3828.4 5.553-5.587 5.17 5.587m-5.233-4.9v12" fill="none" stroke="%23e2001a"/></svg>') no-repeat 50%;background-size:contain;height:12px;width:10px}.a-svg--picto-camera{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="417 -2708 15 10" preserveAspectRatio="xMinYMin meet"><path fill="%23313131" d="M428.836-2704.2v-2.955a.845.845 0 0 0-.845-.845h-10.146a.845.845 0 0 0-.845.845v8.455a.845.845 0 0 0 .845.845h10.146a.845.845 0 0 0 .845-.845v-2.959l3.382 3.382v-9.3z"/></svg>') no-repeat 50%;background-size:contain;height:10px;width:15px}.article__type.a-svg--picto-camera,.m-item-timeline__infos__titles .a-svg--picto-camera,.news__content__title__type.a-svg--picto-camera{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="417 -2708 15 10" preserveAspectRatio="xMinYMin meet"><path fill="%23e2001a" d="M428.836-2704.2v-2.955a.845.845 0 0 0-.845-.845h-10.146a.845.845 0 0 0-.845.845v8.455a.845.845 0 0 0 .845.845h10.146a.845.845 0 0 0 .845-.845v-2.959l3.382 3.382v-9.3z"/></svg>') no-repeat 50%;background-size:contain;height:10px;width:15px}.m-item-list-article--main-article.m-item-list-article--with-text-over-image .article__type.a-svg--picto-camera,.o-aside-content--darker-background .article__type.a-svg--picto-camera{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="417 -2708 15 10" preserveAspectRatio="xMinYMin meet"><path fill="%23fff" d="M428.836-2704.2v-2.955a.845.845 0 0 0-.845-.845h-10.146a.845.845 0 0 0-.845.845v8.455a.845.845 0 0 0 .845.845h10.146a.845.845 0 0 0 .845-.845v-2.959l3.382 3.382v-9.3z"/></svg>') no-repeat 50%;background-size:contain;height:10px;width:15px}.a-svg--picto-headphones{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="398 -2711 12.772 13.481"><path fill="%23313131" d="M404.386-2711a6.359 6.359 0 0 0-6.386 6.386v4.967a2.126 2.126 0 0 0 2.129 2.129h2.128v-5.677h-2.838v-1.419a4.967 4.967 0 0 1 9.934 0v1.419h-2.838v5.676h2.129a2.126 2.126 0 0 0 2.129-2.129v-4.966a6.373 6.373 0 0 0-6.387-6.386z"/></svg>') no-repeat 50%;background-size:contain;height:14px;width:13px}.article__type.a-svg--picto-headphones,.news__content__title__type.a-svg--picto-headphones{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="398 -2711 12.772 13.481"><path fill="%23e2001a" d="M404.386-2711a6.359 6.359 0 0 0-6.386 6.386v4.967a2.126 2.126 0 0 0 2.129 2.129h2.128v-5.677h-2.838v-1.419a4.967 4.967 0 0 1 9.934 0v1.419h-2.838v5.676h2.129a2.126 2.126 0 0 0 2.129-2.129v-4.966a6.373 6.373 0 0 0-6.387-6.386z"/></svg>') no-repeat 50%;background-size:contain;height:14px;width:13px}.m-item-list-article--main-article.m-item-list-article--with-text-over-image .article__type.a-svg--picto-headphones,.o-aside-content--darker-background .article__type.a-svg--picto-headphones{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="398 -2711 12.772 13.481"><path fill="%23fff" d="M404.386-2711a6.359 6.359 0 0 0-6.386 6.386v4.967a2.126 2.126 0 0 0 2.129 2.129h2.128v-5.677h-2.838v-1.419a4.967 4.967 0 0 1 9.934 0v1.419h-2.838v5.676h2.129a2.126 2.126 0 0 0 2.129-2.129v-4.966a6.373 6.373 0 0 0-6.387-6.386z"/></svg>') no-repeat 50%;background-size:contain;height:14px;width:13px}.m-audio-infos .m-audio-infos__title .a-svg--picto-headphones,.m-item-timeline__infos__titles .a-svg--picto-headphones{background:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="398 -2711 12.772 13.481"><path fill="%23e2001a" d="M404.386-2711a6.359 6.359 0 0 0-6.386 6.386v4.967a2.126 2.126 0 0 0 2.129 2.129h2.128v-5.677h-2.838v-1.419a4.967 4.967 0 0 1 9.934 0v1.419h-2.838v5.676h2.129a2.126 2.126 0 0 0 2.129-2.129v-4.966a6.373 6.373 0 0 0-6.387-6.386z"/></svg>') no-repeat 50%;background-size:contain;height:14px;width:13px}.a-aside-title{background-color:#e2001a;color:#fff;font-size:2.4rem;font-weight:700;line-height:1.5;padding:4px 12px;text-transform:uppercase}@media screen and (min-width:640px){.a-aside-title{font-size:2.4rem;padding:4px 18px}}.a-cartouche-day-wrapper{-webkit-box-flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0 16px;position:relative}.a-cartouche-day-wrapper .a-cartouche-day{background-color:#313131;color:#fff;font-size:1.3rem;padding:3px 6px;text-transform:uppercase}.a-cartouche-day-wrapper:after{-webkit-box-flex:0;background-color:#e2001a;content:"";-webkit-flex:0 0 20px;-ms-flex:0 0 20px;flex:0 0 20px;width:1px}@media screen and (min-width:640px){.a-cartouche-day-wrapper{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;padding:0}.a-cartouche-day-wrapper .a-cartouche-day{font-size:2rem;padding:8px 14px}.a-cartouche-day-wrapper:after{-webkit-box-flex:0;-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px}}.a-page-title{word-wrap:anywhere;font-size:1.9rem;font-weight:700;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;-moz-hyphens:none;line-height:1.35;overflow-wrap:break-word;word-break:break-word}@media screen and (min-width:640px){.a-page-title{font-size:2.75rem}}.a-prev-show-btn{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;color:#e2001a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.5rem;margin:0 auto 22px}.a-prev-show-btn .a-svg{margin:0 8px}@media screen and (min-width:640px){.a-prev-show-btn{font-size:1.9rem;margin-bottom:40px}.a-prev-show-btn .a-svg--picto-arrow-top{height:20px;width:16px}}.a-tag{margin:2px 0 5px;padding:0 5px}.a-tag .a-tag__wrapper{background-color:#e2001a;border:1px solid transparent;border-radius:none;-webkit-box-decoration-break:clone;box-decoration-break:clone;-webkit-box-shadow:.5rem 0 0 #e2001a,-.5rem 0 0 #e2001a;box-shadow:.5rem 0 0 #e2001a,-.5rem 0 0 #e2001a;color:#fff;display:inline;font-size:1.3rem;line-height:1.4;padding:2px;text-transform:uppercase}.a-tag .a-tag__wrapper.a-tag__wrapper--flex,.a-tag.a-tag--exercise{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.a-tag.a-tag--exercise{border-radius:8px;color:#fff;padding:10px 12px}.a-tag.a-tag--exercise-a1{background-color:#a2c100}.a-tag.a-tag--exercise-a2{background-color:#40ab2c}.a-tag.a-tag--exercise-b1{background-color:#00c5e5}.a-tag.a-tag--exercise-b2{background-color:#0038b9}.a-tag.a-tag--exercise-c1,.a-tag.a-tag--exercise-c1c2,.a-tag.a-tag--exercise-c2{background-color:#aa00f1}.a-twitter-follow-button{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;background-color:#313131;border-radius:2px;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.1rem;gap:6px;padding:4px 6px;-webkit-transition:background-color .3s;transition:background-color .3s}.a-twitter-follow-button .a-svg{height:12px;width:11px}@media (hover:hover){.a-twitter-follow-button:hover{background-color:#313131;color:#fff}}.a-twitter-follow-button:active,.a-twitter-follow-button:focus,.a-twitter-follow-button:visited{color:#fff}.m-calendar-date{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center}.m-calendar-date .m-calendar-date__date{color:#e2001a;font-size:2rem;font-weight:700}@media screen and (min-width:640px){.m-calendar-date .m-calendar-date__date{font-size:3rem}.m-calendar-date.m-calendar-date--squared{height:40px;width:40px}}.m-item-brand-content{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:5px}.m-item-brand-content .m-item-brand-content__label{-webkit-padding-end:5px;font-size:1.2rem;padding-inline-end:5px;white-space:nowrap}.m-item-brand-content .m-item-brand-content__image picture{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.m-item-brand-content .m-item-brand-content__image picture img{height:auto;max-height:22px;max-width:100%}.m-item-brand-content .m-item-brand-content__brand-name{font-size:1.2rem;font-weight:700}.m-item-list-article .m-item-list-article__wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative}.m-item-list-article .article__figure-wrapper{-webkit-box-flex:0;-ms-flex-item-align:start;-webkit-align-self:flex-start;align-self:flex-start;-webkit-flex:0 0 37vw;-ms-flex:0 0 37vw;flex:0 0 37vw;position:relative}.m-item-list-article .article__infos{-webkit-box-flex:1;-webkit-padding-start:12px;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding-inline-start:12px;position:relative}.m-item-list-article .article__infos .article__metadata{-webkit-box-align:end;-ms-flex-align:end;-webkit-box-flex:1;-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;margin-bottom:3px}.m-item-list-article .article__infos .article__metadata .article__source{-webkit-margin-end:5px;margin-inline-end:5px}.m-item-list-article .article__infos .article__date{color:#6f6e71;font-size:1.1rem}.m-item-list-article .article__infos .a-tag{font-size:1.1rem}.m-item-list-article .article__infos .article__title{word-wrap:anywhere;font-size:1.5rem;font-weight:700;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;-moz-hyphens:none;line-height:1.4;min-height:75px;overflow-wrap:break-word;word-break:break-word}.m-item-list-article .article__infos .article__title a h2{display:inline;font-size:inherit;font-weight:inherit;line-height:inherit}.m-item-list-article .article__infos .article__title .article__type{display:inline-block}.m-item-list-article .article__infos .article__title .article__type.a-svg{-webkit-margin-end:5px;margin-inline-end:5px}.m-item-list-article .article__infos .article__title .article__type.a-svg.a-svg--picto-camera{height:11px;width:16px}.m-item-list-article .article__infos .article__title .article__type.a-svg.a-svg--picto-headphones{height:14px;width:14px}.m-item-list-article .article__infos .article__title.article__title--big{font-size:2.2rem;text-transform:uppercase}.m-item-list-article .article__infos .article__title.article__title--black{font-size:2.2rem;font-weight:900;text-transform:uppercase}.m-item-list-article .article__infos .article__title.article__title--colored{color:#e2001a}.m-item-list-article.m-item-list-article--exercise .article__infos .a-tag.a-tag--exercise{font-size:1.4rem;margin:0 0 5px}.m-item-list-article.m-item-list-article--hor-to-ver .article__figure-wrapper{-webkit-box-flex:0;-webkit-flex:0 0 42%;-ms-flex:0 0 42%;flex:0 0 42%}.m-item-list-article.m-item-list-article--offline{opacity:.2}.m-item-list-article.m-item-list-article--no-image{padding-bottom:20px;position:relative}.m-item-list-article.m-item-list-article--no-image:after{background-color:#505050;bottom:0;content:"";height:1px;position:absolute;width:35px}.m-item-list-article.m-item-list-article--no-image .article__infos{padding:0}.m-item-list-article.m-item-list-article--no-image .article__infos .article__title{min-height:auto}.m-item-list-article.m-item-list-article--main-article .m-item-list-article__wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.m-item-list-article.m-item-list-article--main-article .article__figure-wrapper{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;margin-bottom:10px}.m-item-list-article.m-item-list-article--main-article .article__figure-wrapper .m-figure .m-figure__caption{-webkit-padding-start:12px;bottom:0;font-size:1.2rem;padding-inline-start:12px;position:absolute;-webkit-transform:translateY(100%);transform:translateY(100%)}.m-item-list-article.m-item-list-article--main-article .article__figure-wrapper .m-figure .m-figure__caption .a-media-legend{line-height:2}.m-item-list-article.m-item-list-article--main-article .article__infos{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 16px 10px}.m-item-list-article.m-item-list-article--main-article .article__infos .a-tag,.m-item-list-article.m-item-list-article--main-article .article__infos .article__title{position:relative}.m-item-list-article.m-item-list-article--main-article .article__infos .a-tag{font-size:1.4rem;margin-bottom:8px}.m-item-list-article.m-item-list-article--main-article .article__infos .article__title{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;font-size:2.4rem;font-weight:700;line-height:1.1;margin-bottom:10px;min-height:auto}.m-item-list-article.m-item-list-article--main-article .article__infos .article__title .article__type.a-svg{-webkit-margin-end:8px;margin-inline-end:8px}.m-item-list-article.m-item-list-article--main-article .article__infos .article__title .article__type.a-svg.a-svg--picto-camera{height:18px;width:26px}.m-item-list-article.m-item-list-article--main-article .article__infos .article__title .article__type.a-svg.a-svg--picto-headphones{height:26px;width:24px}.m-item-list-article.m-item-list-article--main-article .article__infos .article__chapo{font-size:1.7rem;line-height:1.3}.m-item-list-article.m-item-list-article--main-article.m-item-list-article--with-text-over-image .article__figure-wrapper{margin-bottom:0}.m-item-list-article.m-item-list-article--main-article.m-item-list-article--with-text-over-image .article__infos{-webkit-box-align:end;-ms-flex-align:end;-ms-flex-line-pack:end;-webkit-align-content:flex-end;align-content:flex-end;-webkit-align-items:flex-end;align-items:flex-end;bottom:0;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}.m-item-list-article.m-item-list-article--main-article.m-item-list-article--with-text-over-image .article__infos:before{background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.4)));background:linear-gradient(transparent,rgba(0,0,0,.4));bottom:0;content:"";height:70%;left:0;position:absolute;right:0;width:100%}.m-item-list-article.m-item-list-article--main-article.m-item-list-article--with-text-over-image .article__infos .a-tag{left:auto;position:relative;top:auto;-webkit-transform:none;transform:none}.m-item-list-article.m-item-list-article--main-article.m-item-list-article--with-text-over-image .article__infos .article__title{margin-bottom:0}.m-item-list-article.m-item-list-article--main-article.m-item-list-article--with-text-over-image .m-list-main-related{margin-top:12px}.m-item-list-article.m-item-list-article--highlighted-main{-webkit-box-flex:1;-ms-flex-item-align:start;-webkit-align-self:flex-start;align-self:flex-start;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;margin-bottom:26px;padding:0 16px;width:100%}.m-item-list-article.m-item-list-article--highlighted-main .m-item-list-article__wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.m-item-list-article.m-item-list-article--highlighted-main .m-list-main-related{margin-top:22px}.m-item-list-article.m-item-list-article--highlighted-main .article__figure-wrapper{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%}.m-item-list-article.m-item-list-article--highlighted-main .article__infos{padding:12px 0 0}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .a-tag{font-size:1.4rem}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .article__title{font-size:2.4rem;font-weight:700;line-height:1.1;min-height:auto}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .article__title .article__type.a-svg{-webkit-margin-end:8px;margin-inline-end:8px}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .article__title .article__type.a-svg.a-svg--picto-camera{height:18px;width:26px}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .article__title .article__type.a-svg.a-svg--picto-headphones{height:26px;width:24px}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .article__title+.article__chapo{margin-top:10px}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .article__chapo{font-size:1.7rem;line-height:1.3}.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--with-tag-over-image .article__infos .a-tag{left:0;pointer-events:none;position:absolute;top:-4px;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--with-tag-over-image .article__infos .a-tag,.m-item-list-article.m-item-list-article--main-article.m-item-list-article--with-tag-over-image .article__infos .a-tag{left:auto;position:relative;top:auto;-webkit-transform:none;transform:none}.m-item-list-article.m-item-list-article--keep-it-vertical .m-item-list-article__wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.m-item-list-article.m-item-list-article--keep-it-vertical .article__figure-wrapper{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;margin-bottom:10px}.m-item-list-article.m-item-list-article--keep-it-vertical .article__infos{padding:0}.m-item-list-article.m-item-list-article--keep-it-vertical .article__infos .article__title{min-height:auto}.m-item-list-article.m-item-list-article--keep-it-vertical.m-item-list-article--with-tag-over-image .article__infos .a-tag{left:0;pointer-events:none;position:absolute;top:-4px;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-item-list-article.m-item-list-article--with-number .article__infos{-webkit-box-align:start;-ms-flex-align:start;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:91px;-webkit-justify-content:flex-start;justify-content:flex-start;padding:0}.m-item-list-article.m-item-list-article--with-number .article__infos .article__top-number{-webkit-box-flex:1;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #505050;color:#e2001a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;font-size:5rem;font-weight:700;-webkit-justify-content:center;justify-content:center;width:46px}.m-item-list-article.m-item-list-article--with-number .article__infos .article__metadata,.m-item-list-article.m-item-list-article--with-number .article__infos .article__title{-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;padding:0 10px;width:calc(100% - 46px)}.m-item-list-article.m-item-list-article--with-number .article__infos .article__title{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;height:72px;overflow:hidden}@media screen and (min-width:640px){.m-item-list-article .m-item-list-article__wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.m-item-list-article .article__figure-wrapper{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;width:100%}.m-item-list-article .article__infos{padding:12px 0 0}.m-item-list-article .article__infos .a-tag{font-size:1.4rem}.m-item-list-article .article__infos .article__title{font-size:1.5rem}.m-item-list-article .article__infos .article__title.article__title--big{font-size:2.2rem}.m-item-list-article.m-item-list-article--with-tag-over-image .article__infos .a-tag{left:0;pointer-events:none;position:absolute;top:-4px;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.m-item-list-article.m-item-list-article--keep-it-horizontal.m-item-list-article--with-tag-over-image .article__infos .a-tag,.m-item-list-article.m-item-list-article--no-image.m-item-list-article--with-tag-over-image .article__infos .a-tag{left:auto;position:static;top:auto;-webkit-transform:none;transform:none}.m-item-list-article.m-item-list-article--hor-to-ver .article__figure-wrapper{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}.m-item-list-article.m-item-list-article--highlighted-main .m-item-list-article__wrapper,.m-item-list-article.m-item-list-article--keep-it-horizontal .m-item-list-article__wrapper,.m-item-list-article.m-item-list-article--main-article .m-item-list-article__wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.m-item-list-article.m-item-list-article--main-article .article__figure-wrapper{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;margin-bottom:20px}.m-item-list-article.m-item-list-article--main-article .article__figure-wrapper .m-figure .m-figure__caption{font-size:1.5rem;padding:0}.m-item-list-article.m-item-list-article--main-article .article__infos{padding:0 0 10px}.m-item-list-article.m-item-list-article--main-article .article__infos .article__title{font-size:3rem;line-height:1.25}.m-item-list-article.m-item-list-article--main-article .article__infos .article__title .article__type.a-svg.a-svg--picto-headphones{height:26px;width:24px}.m-item-list-article.m-item-list-article--main-article .article__infos .article__title .article__type.a-svg.a-svg--picto-camera{height:18px;width:26px}.m-item-list-article.m-item-list-article--main-article .article__infos .article__chapo{margin-bottom:12px}.m-item-list-article.m-item-list-article--main-article .article__infos .a-tag{font-size:1.75rem}.m-item-list-article.m-item-list-article--main-article.m-item-list-article--with-text-over-image .article__infos{padding:0 15px 10px}.m-item-list-article.m-item-list-article--keep-it-horizontal .article__figure-wrapper{-webkit-box-flex:0;-webkit-flex:0 0 42%;-ms-flex:0 0 42%;flex:0 0 42%}.m-item-list-article.m-item-list-article--keep-it-horizontal .article__infos{-webkit-padding-start:12px;padding:0;padding-inline-start:12px}.m-item-list-article.m-item-list-article--highlighted-main{-webkit-box-flex:0;-webkit-flex:0 1 50%;-ms-flex:0 1 50%;flex:0 1 50%;margin-bottom:34px;padding:0 18px}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .article__title{font-size:3rem}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .article__title .article__type.a-svg.a-svg--picto-headphones{height:26px;width:24px}.m-item-list-article.m-item-list-article--highlighted-main .article__infos .article__title .article__type.a-svg.a-svg--picto-camera{height:18px;width:26px}.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth{-webkit-box-flex:0;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%}.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth .article__figure-wrapper,.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth .article__infos{-webkit-box-flex:1;-webkit-flex:1 1 50%;-ms-flex:1 1 50%;flex:1 1 50%}.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth .article__figure-wrapper{-webkit-padding-end:22px;padding-inline-end:22px}.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth .article__infos{padding:0}.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth .article__infos .a-tag,.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth .article__infos .article__chapo,.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth .article__infos .article__date,.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth .article__infos .article__title{margin-left:16px;margin-right:16px}.m-item-list-article.m-item-list-article--highlighted-main.m-item-list-article--highlighted-fullwidth.m-item-list-article--with-tag-over-image .article__infos .a-tag{position:static;-webkit-transform:none;transform:none}.m-item-list-article.m-item-list-article--keep-it-vertical .m-item-list-article__wrapper{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.m-item-list-article.m-item-list-article--keep-it-vertical .article__figure-wrapper{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%}.m-item-list-article.m-item-list-article--with-number .article__infos .article__top-number{font-size:6.2rem}}.m-item-news-feed,.m-item-news-feed .news__metadata{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.m-item-news-feed .news__metadata{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-flex:0;-webkit-align-items:center;align-items:center;color:#fff;-webkit-flex:0 0 45px;-ms-flex:0 0 45px;flex:0 0 45px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-start;justify-content:flex-start;overflow:hidden}.m-item-news-feed .news__metadata .news__metadata__source,.m-item-news-feed .news__metadata .news__metadata__time{font-size:1.2rem}.m-item-news-feed .news__metadata .news__metadata__time{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-align-items:center;align-items:center;background-color:#e2001a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:26px;-webkit-justify-content:center;justify-content:center;width:45px}.m-item-news-feed .news__metadata .news__metadata__source{color:#000;margin-top:3px}.m-item-news-feed .news__metadata+.news__content{padding:0 10px}.m-item-news-feed .news__content{-webkit-box-flex:1;-webkit-padding-start:25px;-webkit-padding-end:10px;-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;padding-inline-end:10px;padding-inline-start:25px}.m-item-news-feed .news__content .news__content__title .news__content__title__type{-webkit-margin-end:5px;display:inline-block;margin-inline-end:5px}.m-item-news-feed .news__content .news__content__title h2{word-wrap:anywhere;display:inline;font-size:1.5rem;font-weight:700;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;-moz-hyphens:none;line-height:1.4;overflow-wrap:break-word;word-break:break-word}.m-item-program-grid{margin-bottom:5px}.m-item-program-grid .m-item-program-grid__wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline{-webkit-box-flex:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 65px;-ms-flex:0 0 65px;flex:0 0 65px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline .m-item-program-grid__timeline__time{-webkit-box-flex:0;-webkit-flex:0;-ms-flex:0;flex:0;font-size:1.5rem;font-weight:700;margin-bottom:10px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline .m-item-program-grid__timeline__live-wrapper{-webkit-box-flex:1;-webkit-box-align:center;-ms-flex-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-align-items:center;align-items:center;color:#e2001a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline .m-item-program-grid__timeline__live-wrapper:after{-webkit-box-flex:1;background-color:#e2001a;content:"";-webkit-flex:1;-ms-flex:1;flex:1;width:1px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline .m-item-program-grid__timeline__live-wrapper .m-item-program-grid__timeline__live{-webkit-box-flex:0;background-color:#e2001a;color:#fff;-webkit-flex:0;-ms-flex:0;flex:0;font-size:1.2rem;margin-bottom:5px;padding:2px 3px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline .m-item-program-grid__timeline__live-wrapper .m-item-program-grid__timeline__picto{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline .m-item-program-grid__timeline__live-wrapper .m-item-program-grid__timeline__picto .a-svg{-webkit-box-flex:0;-webkit-flex:0 0 35px;-ms-flex:0 0 35px;flex:0 0 35px;height:35px;width:35px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos{-webkit-padding-start:20px;-webkit-box-flex:1;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding-bottom:30px;padding-inline-start:20px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link{-webkit-box-flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__figure-wrapper{-webkit-box-flex:0;-webkit-box-ordinal-group:2;-ms-flex-order:1;-webkit-flex:0 0 140px;-ms-flex:0 0 140px;flex:0 0 140px;margin-bottom:5px;-webkit-order:1;order:1}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__titles{-webkit-box-flex:0;-ms-flex-line-pack:start;-webkit-box-ordinal-group:4;-ms-flex-order:3;-webkit-align-content:flex-start;align-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:5px;-webkit-order:3;order:3}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__titles .m-item-program-grid__infos__program-title{-webkit-box-flex:1;color:#313131;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;font-size:1.8rem;font-weight:700;margin-bottom:5px;text-transform:uppercase}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__titles .m-item-program-grid__infos__edition-title{font-size:1.7rem;font-weight:700;margin-bottom:5px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__titles .m-item-program-grid__infos__edition-authors{font-size:1.2rem}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__podcast{-webkit-box-flex:0;-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 25px;-ms-flex:0 0 25px;flex:0 0 25px;-webkit-justify-content:center;justify-content:center}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__podcast .a-svg--picto-rss{height:20px;width:16px}@media screen and (min-width:640px){.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline{-webkit-box-flex:0;-webkit-flex:0 0 100px;-ms-flex:0 0 100px;flex:0 0 100px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline .m-item-program-grid__timeline__time{font-size:2.2rem}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__timeline .m-item-program-grid__timeline__live{font-size:1.3rem}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos,.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__figure-wrapper{-webkit-box-flex:0;-webkit-flex:0 0 200px;-ms-flex:0 0 200px;flex:0 0 200px;margin-bottom:5px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__figure-wrapper+.m-item-program-grid__infos__titles{-webkit-padding-start:10px;padding-inline-start:10px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__titles{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__titles .m-item-program-grid__infos__program-title{font-size:2.4rem}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__titles .m-item-program-grid__infos__edition-title{font-size:1.7rem}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__titles .m-item-program-grid__infos__edition-authors{font-size:1.5rem}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__podcast{-webkit-box-flex:0;-webkit-flex:0 0 30px;-ms-flex:0 0 30px;flex:0 0 30px}.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__podcast .a-svg--picto-rss{height:22px;width:17px}}@media screen and (min-width:1024px){.m-item-program-grid .m-item-program-grid__wrapper .m-item-program-grid__infos .m-item-program-grid__infos__link .m-item-program-grid__infos__figure-wrapper{-webkit-box-flex:0;-webkit-flex:0 0 300px;-ms-flex:0 0 300px;flex:0 0 300px}}.m-item-twitter{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border:1px solid #c4c4c4;border-radius:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:12px;padding:12px}.m-item-twitter .m-item-twitter__image{border:1px solid #c4c4c4;border-radius:40px;height:80px;width:80px}.m-item-twitter .m-item-twitter__author{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:10px}.m-item-twitter .m-item-twitter__author .m-item-twitter__author__link{color:#e2001a;font-size:1.8rem;font-weight:700}.m-item-twitter .m-item-twitter__author .a-twitter-follow-button{-ms-flex-item-align:start;-webkit-align-self:flex-start;align-self:flex-start}.m-item-twitter .m-item-twitter__content{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;font-size:1.5rem;font-weight:700;overflow:hidden}.m-item-twitter .m-item-twitter__content a{color:#e2001a;word-break:break-all}@media screen and (min-width:640px){.m-item-twitter .m-item-twitter__author .m-item-twitter__author__link{font-size:2rem}.m-item-twitter .m-item-twitter__content{font-size:1.7rem}}.m-list-main-related{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:12px;margin:0 16px;padding-bottom:16px;position:relative}.m-list-main-related,.m-list-main-related .m-list-main-related__article{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.m-list-main-related .m-list-main-related__article{-webkit-box-flex:1;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;gap:5px}.m-list-main-related .m-list-main-related__article .a-svg{-webkit-box-flex:0;-webkit-flex:0 0 12px;-ms-flex:0 0 12px;flex:0 0 12px;margin-top:5px}.m-list-main-related .m-list-main-related__article h2{font-size:1.5rem;font-weight:700;line-height:1.4}.m-list-main-related:after{background-color:#c4c4c4;bottom:0;content:"";height:1px;position:absolute;width:100%}@media screen and (min-width:640px){.m-list-main-related{gap:32px;margin:0 0 16px}.m-list-main-related .m-list-main-related__article{-webkit-box-flex:1;-webkit-flex:1 0 calc(50% - 16px);-ms-flex:1 0 calc(50% - 16px);flex:1 0 calc(50% - 16px)}.m-list-main-related.m-list-main-related--one .m-list-main-related__article{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%}}.m-podcast-links{-webkit-flex:0;-ms-flex:0;flex:0}.m-podcast-links,.m-podcast-links .m-podcast-links__podcast{-webkit-box-flex:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.m-podcast-links .m-podcast-links__podcast{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-flex:0 0 30px;-ms-flex:0 0 30px;flex:0 0 30px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:1.3rem;-webkit-justify-content:center;justify-content:center;margin:0 10px;text-align:center}.m-podcast-links .m-podcast-links__podcast .a-svg{height:30px;margin-bottom:5px;width:30px}@media screen and (min-width:640px){.m-podcast-links .m-podcast-links__podcast{-webkit-box-flex:0;-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px}.m-podcast-links .m-podcast-links__podcast .a-svg{height:40px;width:40px}}.o-layout-list.o-layout-list--news-feed{-webkit-box-flex:0;-webkit-flex:0 1 100%;-ms-flex:0 1 100%;flex:0 1 100%;position:relative}.o-layout-list.o-layout-list--news-feed .o-layout-list__item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 16px;position:relative}.o-layout-list.o-layout-list--news-feed .o-layout-list__item:before{-webkit-box-flex:0;-webkit-box-ordinal-group:1;-ms-flex-order:0;-webkit-margin-start:16px;background-color:#e2001a;content:"";-webkit-flex:0 0 1px;-ms-flex:0 0 1px;flex:0 0 1px;height:100%;margin-inline-start:16px;-webkit-order:0;order:0}.o-layout-list.o-layout-list--news-feed .o-layout-list__item:after{-webkit-box-ordinal-group:2;-ms-flex-order:1;-webkit-box-flex:0;background-color:#e2001a;content:"";-webkit-flex:0 0 15px;-ms-flex:0 0 15px;flex:0 0 15px;height:1px;margin-top:13px;-webkit-order:1;order:1}.o-layout-list.o-layout-list--news-feed .o-layout-list__item .m-item-news-feed{-webkit-box-flex:1;-webkit-box-ordinal-group:3;-ms-flex-order:2;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-left:0;margin-right:0;-webkit-order:2;order:2;padding-bottom:30px}.o-layout-list.o-layout-list--news-feed .o-layout-list__item:first-child:before{height:calc(100% - 13px);margin-top:13px}@media screen and (min-width:640px){.o-layout-list.o-layout-list--news-feed .o-layout-list__item{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%}.o-layout-list.o-layout-list--news-feed .o-layout-list__item:before{-webkit-margin-start:16px;margin-inline-start:16px}}.o-layout-list.o-layout-list--timeline .o-layout-list__item .m-item-news-feed .news__content .m-item-list-article{margin-left:0;margin-right:0}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper{-webkit-box-flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%}.o-layout-list.o-layout-list--timeline.o-layout-list--news-feed .o-layout-list__item-wrapper .o-layout-list__item{margin:0}.o-layout-list.o-layout-list--timeline.o-layout-list--news-feed .o-layout-list__item-wrapper:not(:first-child) .o-layout-list__item:first-child:before{height:100%;margin-top:0}@media screen and (min-width:640px){.o-layout-list.o-layout-list--timeline.o-layout-list--news-feed .a-cartouche-day-wrapper:after{-webkit-border-end:1px solid #e2001a;-ms-flex-item-align:start;-webkit-align-self:flex-start;align-self:flex-start;background-color:transparent;border-inline-end:1px solid #e2001a;-webkit-box-sizing:border-box;box-sizing:border-box;width:50%}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item .m-item-news-feed .news__metadata{-webkit-box-flex:0;-webkit-flex:0 0 60px;-ms-flex:0 0 60px;flex:0 0 60px}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item .m-item-news-feed .news__metadata .news__metadata__time{font-size:1.7rem;font-weight:700;height:30px;width:60px}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item:nth-child(odd):before{-webkit-box-ordinal-group:3;-ms-flex-order:2;-webkit-margin-start:0;margin-inline-start:0;-webkit-order:2;order:2}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item:nth-child(odd):after{-webkit-box-ordinal-group:2;-ms-flex-order:1;-webkit-order:1;order:1}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item:nth-child(odd) .m-item-news-feed{-webkit-box-ordinal-group:1;-ms-flex-order:0;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-order:0;order:0}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item:nth-child(odd) .m-item-news-feed .news__content .m-item-list-article .article__infos{-webkit-box-pack:end;-ms-flex-pack:end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:flex-end;justify-content:flex-end}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item:nth-child(odd) .m-item-news-feed .news__content .m-item-list-article .article__infos .article__date{-webkit-box-flex:1;-webkit-box-pack:end;-ms-flex-pack:end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;-webkit-justify-content:flex-end;justify-content:flex-end}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item:nth-child(odd) .m-item-news-feed .news__content .m-item-list-article .article__infos .article__title{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;text-align:right}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item:nth-child(2n){margin-top:80px}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item:nth-child(2n):before{-webkit-margin-start:-1px;margin-inline-start:-1px}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item:nth-child(2n):after{width:16px}.o-layout-list.o-layout-list--timeline .o-layout-list__item-wrapper .o-layout-list__item .m-item-news-feed .news__metadata{-webkit-padding-start:0;padding-inline-start:0}.o-layout-list.o-layout-list--timeline:before{display:none}}.o-layout-list{-webkit-box-flex:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout-list .o-layout-list__item{margin-bottom:30px}.o-layout-list .o-layout-list__item .m-item-list-article,.o-layout-list .o-layout-list__item .m-item-news-feed{margin-left:16px;margin-right:16px}.o-layout-list .o-layout-list__item.o-layout-list__item--main-item{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;margin-bottom:32px}.o-layout-list .o-layout-list__item.o-layout-list__item--main-item .m-item-list-article{margin-left:0;margin-right:0}.o-layout-list .o-layout-list__item+.o-layout-list__item--with-ad{margin-top:10px}.o-layout-list .o-layout-list__item.o-layout-list__item--with-ad{-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center}.o-layout-list .o-layout-list__item,.o-layout-list.o-layout-list--highlighted{-ms-flex-line-pack:start;-webkit-align-content:flex-start;align-content:flex-start}.o-layout-list.o-layout-list--without-images .m-item-list-article .article__infos{padding:0}.o-layout-list.o-layout-list--main-solo .o-layout-list__item.o-layout-list__item--main-item,.o-layout-list.o-layout-list--main-solo .o-layout-list__item.o-layout-list__item--main-item .m-item-list-article.m-item-list-article--main-article .article__infos .article__title{margin-bottom:0}.o-layout-list.o-layout-list--main-solo .o-layout-list__item.o-layout-list__item--main-item .m-item-list-article.m-item-list-article--main-article .m-list-main-related{margin-top:10px}.o-layout-list.o-layout-list--all-programs{gap:30px}.o-layout-list.o-layout-list--all-programs .o-layout-list__item{-webkit-box-flex:0;-webkit-flex:0 0 calc(50% - 15px);-ms-flex:0 0 calc(50% - 15px);flex:0 0 calc(50% - 15px);margin-bottom:0}.o-layout-list.o-layout-list--all-programs .o-layout-list__item .m-item-list-article{margin:0}.o-layout-list.o-layout-list--all-programs .o-layout-list__item .m-item-list-article .m-item-list-article__wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-layout-list.o-layout-list--all-programs .o-layout-list__item .m-item-list-article .article__figure-wrapper{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;margin-bottom:10px}.o-layout-list.o-layout-list--all-programs .o-layout-list__item .m-item-list-article .article__infos{padding:0}.o-layout-list.o-layout-list--all-programs .o-layout-list__item .m-item-list-article .article__infos .article__title.article__title--big{font-size:1.8rem}.t-content.t-content--page-builder .t-content__section-pb .o-layout-list.o-layout-list--all-programs{margin:0 16px}.t-content.t-content--page-builder .t-content__section-pb .o-tag-list+.o-layout-list.o-layout-list--all-programs{margin:30px 16px 0}.t-content.t-content--page-builder .t-content__section-pb:first-child>.o-layout-list{margin-top:20px}.t-content.t-content--page-builder .t-content__section-pb:first-child>.o-layout-list.o-layout-list--main-solo{margin-top:0}.m-infinite-scroll-loader{height:50px;margin:40px auto;opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s;width:50px}.m-infinite-scroll-loader.u-loading{opacity:1}.m-infinite-scroll-loader.u-loading .a-circle-loader{display:block;height:50px;width:50px}.m-infinite-scroll-loader.u-loading .a-circle-loader__main-circle{border-color:#e2001a transparent transparent #e2001a;border-width:2px}.m-infinite-scroll-loader.u-loading .a-circle-loader__bg-circle{border:1px solid #c4c4c4;height:47px;left:1px;top:1px;width:47px}.m-infinite-scroll-loader.u-loading .a-circle-loader:after,.m-infinite-scroll-loader.u-loading .a-circle-loader:before{background-color:#e2001a;height:2px;top:23px;width:2px}@media screen and (min-width:640px){.o-layout-list.o-layout-list--highlighted{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%}.o-layout-list .o-layout-list__item{margin-bottom:30px}.o-layout-list .o-layout-list__item .m-item-list-article,.o-layout-list .o-layout-list__item .m-item-news-feed,.o-layout-list .o-layout-list__item.o-layout-list__item--main-item .m-item-list-article{margin-left:16px;margin-right:16px}.o-layout-list .o-layout-list__item .m-block-ad{margin-bottom:0}.o-layout-list .o-layout-list__item.o-layout-list__item--with-ad .m-block-ad{margin:0}.o-layout-list .o-layout-list__item+.o-layout-list__item--with-ad{margin-top:0}.o-layout-list.o-layout-list--main-solo .o-layout-list__item.o-layout-list__item--main-item,.o-layout-list.o-layout-list--main-solo .o-layout-list__item.o-layout-list__item--main-item .m-item-list-article.m-item-list-article--main-article .article__infos .article__title{margin-bottom:0}.o-layout-list.o-layout-list--all-programs{gap:30px}.o-layout-list.o-layout-list--all-programs .o-layout-list__item{-webkit-box-flex:0;-webkit-flex:0 0 calc(25% - 22.5px);-ms-flex:0 0 calc(25% - 22.5px);flex:0 0 calc(25% - 22.5px);margin-bottom:0}.o-layout-list.o-layout-list--all-programs .o-layout-list__item .m-item-list-article{margin:0}.t-content.t-content--page-builder .t-content__section-pb .o-layout-list.o-layout-list--all-programs{margin:0 22px;padding:0}.t-content.t-content--page-builder .t-content__section-pb .o-tag-list+.o-layout-list.o-layout-list--all-programs{margin:30px 22px 0}}@media screen and (min-width:1024px){.o-layout-list.o-layout-list--all-programs{gap:30px}.o-layout-list.o-layout-list--all-programs .o-layout-list__item{-webkit-box-flex:0;-webkit-flex:0 0 calc(20% - 24px);-ms-flex:0 0 calc(20% - 24px);flex:0 0 calc(20% - 24px)}}.o-light-calendar{margin-bottom:16px;padding:20px 16px;position:relative}.o-light-calendar .o-light-calendar__list{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;max-width:200px;position:relative}.o-light-calendar .o-light-calendar__list .o-light-calendar__list__item{-webkit-box-flex:0;-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 1 60%;-ms-flex:0 1 60%;flex:0 1 60%;-webkit-justify-content:center;justify-content:center;text-align:center}.o-light-calendar .o-light-calendar__list .o-light-calendar__list__item.o-light-calendar__list__item--squared{-webkit-box-flex:0;-webkit-flex:0 1 20%;-ms-flex:0 1 20%;flex:0 1 20%}.o-light-calendar .o-light-calendar__list .o-light-calendar__list__item.o-light-calendar__list__item--squared .m-calendar-date{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;border:1px solid #e2001a;height:30px;width:30px}.o-light-calendar .o-light-calendar__list.o-light-calendar__list--flex-end{-webkit-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.o-light-calendar:before{background-color:#f0f0f0;bottom:0;content:"";height:100%;left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw}.t-content.t-content--page-builder.t-content--page-builder--dark-bg .o-light-calendar:before{background-color:#373b4d}.t-content.t-content--page-builder.t-content--page-builder--dark-bg .o-light-calendar .m-calendar-date.m-calendar-date--active{color:#e2001a}@media screen and (min-width:640px){.o-light-calendar{margin-bottom:20px}.o-light-calendar .o-light-calendar__list{max-width:300px}}@media screen and (min-width:1024px){.o-light-calendar{margin-bottom:20px;padding:25px 0}.o-light-calendar .o-light-calendar__list{max-width:400px}.o-light-calendar .o-light-calendar__list .o-light-calendar__list__item.o-light-calendar__list__item--squared .m-calendar-date{height:40px;width:40px}}.o-aside-content{color:#313131;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.o-aside-content .o-aside-content__title{margin:16px 16px 30px}.o-aside-content .o-aside-content__see-more{-webkit-box-align:center;-ms-flex-align:center;-ms-flex-item-align:center;-webkit-align-items:center;align-items:center;-webkit-align-self:center;align-self:center;color:#e2001a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:1.2rem;margin:0 16px}.o-aside-content .o-aside-content__see-more .a-svg{-webkit-margin-start:5px;margin-inline-start:5px}.o-aside-content .o-aside-content__row{-webkit-box-align:start;-ms-flex-align:start;-webkit-box-flex:1;-webkit-align-items:flex-start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;position:relative}.o-aside-content .o-aside-content__row.o-aside-content__row--center{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.o-aside-content .o-aside-content__row.o-aside-content__row--center .o-aside-content__subtitle,.o-aside-content .o-aside-content__row.o-aside-content__row--center .o-aside-content__title{text-align:center}.o-aside-content .o-aside-content__row.o-aside-content__row--flex-end{-webkit-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.o-aside-content .o-aside-content__row.o-aside-content__row--flex-end .o-aside-content__see-more{margin:0 16px 15px}.o-aside-content .o-aside-content__row.o-aside-content__row--space-between{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.o-aside-content .o-aside-content__row.o-aside-content__row--space-between .o-aside-content__see-more{margin:0 16px}.o-aside-content .o-aside-content__subtitle{font-size:1.7rem;margin:0 20px 20px}.o-aside-content.o-aside-content--all-podcast{padding-bottom:40px}.o-aside-content.o-aside-content--all-podcast .o-aside-content__title{margin:30px 16px 12px}.o-aside-content.o-aside-content--all-podcast .o-aside-content__row{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-aside-content.o-aside-content--all-podcast .o-aside-content__row p{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;font-size:1.6rem;line-height:1.4;padding:0 16px;text-align:center}.o-aside-content.o-aside-content--all-podcast .o-aside-content__row p:last-child{margin-bottom:20px}.o-aside-content.o-aside-content--all-podcast .m-cta{background-color:#e2001a;border-color:#e2001a;border-radius:25px;color:#fff;padding-left:35px;padding-right:35px;text-align:center}.o-aside-content.o-aside-content--overflow-background{color:inherit}.o-aside-content.o-aside-content--overflow-background:before{background-color:#f0f0f0;bottom:0;content:"";height:100%;left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw}.o-aside-content.o-aside-content--overflow-background.o-aside-content--darker-background{color:#fff}.o-aside-content.o-aside-content--overflow-background.o-aside-content--darker-background:before{background-color:#2f2933}.o-aside-content.o-aside-content--overflow-background.o-aside-content--darker-background .a-tag .a-tag__wrapper{background-color:#fff;-webkit-box-decoration-break:clone;box-decoration-break:clone;-webkit-box-shadow:5px 0 0 #fff,-5px 0 0 #fff;box-shadow:5px 0 0 #fff,-5px 0 0 #fff;color:#313131}.o-aside-content.o-aside-content--overflow-background.o-aside-content--darker-background .article__type,.o-aside-content.o-aside-content--overflow-background.o-aside-content--darker-background .o-aside-content__see-more,.o-aside-content.o-aside-content--overflow-background.o-aside-content--darker-background .o-aside-content__title.a-aside-title{color:#fff}.o-aside-content.o-aside-content--overflow-background.o-aside-content--darker-background .m-item-list-article .article__infos .article__date{color:#c4c4c4}.o-aside-content.o-aside-content--overflow-background.o-aside-content--bordered:before{border-bottom:1px solid #f0f0f0;border-top:1px solid #f0f0f0}.o-aside-content.o-aside-content--overflow-background.o-aside-content--seemore-on-top .o-aside-content__row{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.o-aside-content.o-aside-content--no-title{padding-top:30px}.o-aside-content.o-aside-content--carousel.o-aside-content--overflow-background:before{background-color:#f8f8f8}.o-aside-content.o-aside-content--carousel.o-aside-content--overflow-background.o-aside-content--spotlight{padding-bottom:30px}.o-aside-content.o-aside-content--carousel .o-aside-content__subtitle{margin:0 16px 20px}.o-aside-content.o-aside-content--highlighted-manual{margin:0 16px}@media screen and (min-width:640px){.o-aside-content .o-aside-content__title{margin:20px 16px}.o-aside-content .o-aside-content__title.a-aside-title{font-size:2.4rem}.o-aside-content.o-aside-content--carousel .o-aside-content__title{margin:20px 16px}.o-aside-content.o-aside-content--all-podcast .o-aside-content__title{margin:30px 22px 12px}.o-aside-content.o-aside-content--highlighted-manual{padding:0 6px}}.o-aside-content.o-aside-content--news-feed{-webkit-box-flex:1;background-color:#f0f0f0;color:#313131;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin-bottom:36px;position:relative}.o-aside-content.o-aside-content--news-feed .o-aside-content__see-more{color:#e2001a}@media screen and (min-width:640px){.o-aside-content.o-aside-content--news-feed .o-aside-content__title{margin:20px 16px}}.o-banana-split{-ms-flex-line-pack:start;-webkit-align-content:flex-start;align-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-banana-split .o-banana-split__ad-n-newsfeed{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}.o-banana-split .o-banana-split__ad-n-newsfeed,.o-banana-split .o-banana-split__ad-n-newsfeed+.o-layout-list{margin-top:30px}.o-banana-split.o-banana-split--no-feed .m-item-list-article--main-article{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;margin-bottom:25px}.o-banana-split.o-banana-split--no-feed .o-block-ad-n-layout-list .o-block-ad-n-layout-list__layout-list{-webkit-box-ordinal-group:3;-ms-flex-order:2;-webkit-order:2;order:2}.o-banana-split.o-banana-split--no-feed .o-block-ad-n-layout-list .o-block-ad-n-layout-list__block-ad{-webkit-box-ordinal-group:2;-ms-flex-order:1;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-order:1;order:1}@media screen and (min-width:640px){.o-banana-split{padding:22px 0 0}.o-banana-split.o-banana-split--no-feed .m-item-list-article--main-article{padding:0 16px}}@media screen and (min-width:1024px){.o-banana-split .o-banana-split__main-articles{-webkit-box-flex:0;-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%}.o-banana-split .o-banana-split__ad-n-newsfeed{-webkit-box-flex:0;-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%}.o-banana-split .o-banana-split__ad-n-newsfeed,.o-banana-split .o-banana-split__ad-n-newsfeed+.o-layout-list{margin-top:0}.o-banana-split.o-banana-split--no-feed .m-item-list-article--main-article{-webkit-box-flex:0;-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%}.o-banana-split.o-banana-split--no-feed .m-item-list-article--main-article+.o-layout-list{-webkit-box-flex:0;-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%}.o-banana-split.o-banana-split--no-feed .o-block-ad-n-layout-list .o-block-ad-n-layout-list__layout-list{-webkit-box-flex:0;-webkit-box-ordinal-group:2;-ms-flex-order:1;-webkit-flex:0 0 66.66%;-ms-flex:0 0 66.66%;flex:0 0 66.66%;-webkit-order:1;order:1}.o-banana-split.o-banana-split--no-feed .o-block-ad-n-layout-list .o-block-ad-n-layout-list__block-ad{-webkit-box-flex:0;-webkit-box-ordinal-group:3;-ms-flex-order:2;-webkit-flex:0 0 33.33%;-ms-flex:0 0 33.33%;flex:0 0 33.33%;-webkit-order:2;order:2}}.o-block-ad-n-newsfeed{-ms-flex-line-pack:start;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-content:flex-start;align-content:flex-start;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;justify-content:center;min-width:0}.o-block-ad-n-newsfeed .o-aside-content--news-feed{-webkit-box-flex:1;-ms-flex-item-align:start;-webkit-align-self:flex-start;align-self:flex-start;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%}@media screen and (min-width:640px){.o-block-ad-n-newsfeed .m-block-ad,.o-block-ad-n-newsfeed .o-aside-content--news-feed{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;margin-left:16px;margin-right:16px}.o-block-ad-n-newsfeed .m-block-ad{min-width:300px}}@media screen and (min-width:1024px){.o-block-ad-n-newsfeed{-webkit-box-flex:1;-webkit-flex:1 0 332px;-ms-flex:1 0 332px;flex:1 0 332px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.o-block-ad-n-newsfeed .o-aside-content--news-feed{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%}}.o-live{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:10px;padding-bottom:45px;position:relative}.o-live,.o-live .o-live__tag{-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.o-live .o-live__tag{-webkit-box-flex:0;-webkit-box-ordinal-group:1;-ms-flex-order:0;-webkit-box-align:center;-ms-flex-align:center;border:1px solid #e2001a;color:#e2001a;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;font-size:1.7rem;gap:4px;height:32px;-webkit-order:0;order:0;padding:0 10px}.o-live .o-live__tag:before{background-color:#e2001a;border-radius:50%;content:"";height:8px;width:8px}.o-live .o-live__image{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-order:1;order:1}.o-live .o-live__image .m-figure{-webkit-box-flex:0;-webkit-flex:0 0 224px;-ms-flex:0 0 224px;flex:0 0 224px}.o-live .a-page-title{-webkit-box-ordinal-group:3;-ms-flex-order:2;font-size:2.6rem;font-weight:700;line-height:1.1;margin-bottom:5px;-webkit-order:2;order:2}.o-live .o-live__description{-webkit-box-ordinal-group:5;-ms-flex-order:4;font-size:1.7rem;line-height:1.4;-webkit-order:4;order:4;text-align:center}.o-live .o-live__cta{-webkit-box-ordinal-group:4;-ms-flex-order:3;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:justify;-ms-flex-pack:justify;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:10px;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:10px;max-width:294px;-webkit-order:3;order:3;width:100%}.o-live .o-live__cta .a-audio-player-btn{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%}.o-live .o-live__cta .a-audio-player-btn .a-audio-player-btn__label{-webkit-box-ordinal-group:2;-ms-flex-order:1;-webkit-order:1;order:1;white-space:nowrap}.o-live .o-live__cta .a-audio-player-btn .m-cta{-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;width:100%}.o-live .o-live__cta .a-audio-player-btn .m-cta.m-cta--play-pause{padding-left:45px;padding-right:45px}.o-live .o-live__cta .o-live__cta__podcast-link{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center}.o-live:after{border-bottom:1px solid #c4c4c4;bottom:0;content:"";left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw}.o-live.o-live--no-border{padding-bottom:0}.o-live.o-live--no-border:after{display:none}.t-content.t-content--page-builder .o-live{margin:0 16px}.t-content.t-content--page-builder .m-breadcrumb+.t-content__section-pb .o-live,.t-content.t-content--page-builder .t-content__section-pb:first-child .o-live{margin:34px 16px 0}@media screen and (min-width:640px){.t-content.t-content--page-builder .o-live{margin:0 18px}.t-content.t-content--page-builder .m-breadcrumb+.t-content__section-pb .o-live,.t-content.t-content--page-builder .t-content__section-pb:first-child .o-live{margin:42px 18px 0}}@media screen and (min-width:1024px){.o-live{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:10px;height:323px;-webkit-justify-content:flex-start;justify-content:flex-start;max-height:323px;padding-bottom:75px}.o-live .o-live__tag{-webkit-box-ordinal-group:2;-ms-flex-order:1;margin:0 10px;-webkit-order:1;order:1}.o-live .o-live__image{-webkit-box-ordinal-group:1;-ms-flex-order:0;-webkit-order:0;order:0;width:248px}.o-live .o-live__image,.o-live .o-live__image .m-figure{-webkit-box-flex:0;-webkit-flex:0 0 246px;-ms-flex:0 0 246px;flex:0 0 246px}.o-live .a-page-title{-webkit-box-ordinal-group:3;-ms-flex-order:2;font-size:3.2rem;-webkit-order:2;order:2}.o-live .o-live__description{-webkit-box-ordinal-group:4;-ms-flex-order:3;-webkit-order:3;order:3}.o-live .a-page-title,.o-live .o-live__description{text-align:start}.o-live .a-page-title,.o-live .o-live__cta,.o-live .o-live__description{margin:0 10px;max-width:calc(100% - 278px)}.o-live .o-live__cta{-webkit-box-ordinal-group:5;-ms-flex-order:4;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-align:end;-ms-flex-align:end;-webkit-box-flex:1;-webkit-align-items:flex-end;align-items:flex-end;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:15px;-webkit-justify-content:flex-start;justify-content:flex-start;margin-top:0;-webkit-order:4;order:4}.o-live .o-live__cta .a-audio-player-btn{-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto}.o-live .o-live__cta .a-audio-player-btn--skeleton{-webkit-box-flex:0;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-flex:0 1 270px;-ms-flex:0 1 270px;flex:0 1 270px;-webkit-justify-content:center;justify-content:center}.o-live.o-live--no-border{height:248px;padding-bottom:0}}.o-pb-masterhead{margin:0 16px;padding-bottom:24px}.o-pb-masterhead .o-pb-masterhead__title-wrapper{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;justify-content:space-between}.o-pb-masterhead .m-figure+.o-pb-masterhead__description,.o-pb-masterhead .o-pb-masterhead__title-wrapper+.m-figure,.o-pb-masterhead .o-pb-masterhead__title-wrapper+.o-pb-masterhead__description,.o-pb-masterhead h1+.o-pb-masterhead__description{margin-top:16px}.o-pb-masterhead .m-figure .m-figure__img-wrapper,.o-pb-masterhead .m-figure>picture{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.o-pb-masterhead .o-pb-masterhead__description{font-size:1.7rem;line-height:1.5}.o-pb-masterhead.o-pb-masterhead--title-centered .o-pb-masterhead__title{text-align:center}.o-pb-masterhead.o-pb-masterhead--image-centered .m-figure .m-figure__img-wrapper,.o-pb-masterhead.o-pb-masterhead--image-centered .m-figure>picture{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.m-breadcrumb+.o-pb-masterhead{margin-top:16px}.t-content.t-content--page-builder .o-pb-masterhead:first-child{margin-top:30px}.t-content.t-content--page-builder.t-content--page-builder--dark-bg .o-pb-masterhead{padding-bottom:0;position:relative}.t-content.t-content--page-builder.t-content--page-builder--dark-bg .o-pb-masterhead .o-pb-masterhead__title{color:#fff}.t-content.t-content--page-builder.t-content--page-builder--dark-bg .o-pb-masterhead:before{background-color:#373b4d;bottom:0;content:"";height:100%;left:50%;position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw;z-index:-1}@media screen and (min-width:640px){.o-pb-masterhead{margin:0 22px;padding-bottom:30px}.t-content.t-content--page-builder .o-pb-masterhead:first-child{margin-top:0}.t-content.t-content--page-builder.t-content--page-builder--dark-bg .o-pb-masterhead{padding-bottom:0}}.o-timeline{overflow:hidden;padding:0 10px}.o-timeline .o-layout-list{margin:0 auto;max-width:740px}.o-timeline .o-layout-list .o-layout-list__item{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;margin-bottom:0}.o-timeline .o-timeline__intro-tu{font-size:1.4rem;font-weight:700;line-height:1.4;margin:0 auto 24px;max-width:740px}.o-timeline.o-timeline--bulletins{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%}.o-timeline.o-timeline--bulletins .o-layout-list .o-layout-list__item:last-child .m-item-timeline .m-item-timeline__wrapper .m-item-timeline__timeline .m-item-timeline__timeline__play-button-wrapper:after{display:none}@media screen and (min-width:640px){.o-timeline{padding:0 16px}}@media screen and (min-width:1024px){.o-timeline .o-layout-list,.o-timeline .o-timeline__intro-tu{max-width:940px}}.t-content.t-content--page-builder{padding:0}.t-content.t-content--page-builder .o-hot-tags+.o-pb-masterhead{margin-top:12px}.t-content.t-content--page-builder .t-content__section-pb{margin-bottom:40px}.t-content.t-content--page-builder .t-content__section-pb.t-content__section-pb--spacing-s{padding-bottom:10px;padding-top:10px}.t-content.t-content--page-builder .t-content__section-pb.t-content__section-pb--spacing-m{padding-bottom:20px;padding-top:20px}.t-content.t-content--page-builder .t-content__section-pb.t-content__section-pb--spacing-l{padding-bottom:30px;padding-top:30px}.t-content.t-content--page-builder.t-content--page-builder--spacing-s .t-content__section-pb{margin-bottom:10px}.t-content.t-content--page-builder.t-content--page-builder--spacing-m .t-content__section-pb{margin-bottom:20px}.t-content.t-content--page-builder.t-content--page-builder--spacing-l .t-content__section-pb{margin-bottom:30px}@media screen and (min-width:640px){.t-content.t-content--page-builder .m-breadcrumb:first-child,.t-content.t-content--page-builder .o-hot-tags+.m-breadcrumb,.t-content.t-content--page-builder .o-hot-tags+.o-pb-masterhead,.t-content.t-content--page-builder .o-pb-masterhead:first-child,.t-content.t-content--page-builder .t-content__section-pb:first-child{margin-top:22px}.t-content.t-content--page-builder .t-content__section-pb{margin-bottom:50px;padding-left:4px;padding-right:4px}.t-content.t-content--page-builder .t-content__section-pb .o-layout-list{padding:0 2px}.t-content.t-content--page-builder .t-content__section-pb .o-layout-list.o-layout-list--news-feed,.t-content.t-content--page-builder.t-content--page-builder--dark-bg{padding:0}.t-content.t-content--page-builder.t-content--page-builder--spacing-s .t-content__section-pb{margin-bottom:10px}.t-content.t-content--page-builder.t-content--page-builder--spacing-m .t-content__section-pb{margin-bottom:20px}.t-content.t-content--page-builder.t-content--page-builder--spacing-l .t-content__section-pb{margin-bottom:30px}}.o-aside-content.o-aside-content--overflow-background.o-aside-content--darker-background .a-tag .a-tag__wrapper{-webkit-box-shadow:3px 0 0 #fff,-3px 0 0 #fff;box-shadow:3px 0 0 #fff,-3px 0 0 #fff}.a-carousel-btn{max-width:0}@media screen and (min-width:640px){.a-carousel-btn{position:relative;top:40%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:-webkit-transform .15s;transition:-webkit-transform .15s;transition:transform .15s;transition:transform .15s,-webkit-transform .15s;z-index:1}.a-carousel-btn.a-carousel-btn--show{-webkit-box-flex:0;-webkit-flex:0 0 40px;-ms-flex:0 0 40px;flex:0 0 40px;max-width:none}.a-carousel-btn>span{background-color:#e2001a;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:80px;width:100%}.a-carousel-btn>span .a-svg{-webkit-box-flex:0;-webkit-flex:0 1 16px;-ms-flex:0 1 16px;flex:0 1 16px;height:auto;margin:0 12px}.a-carousel-btn.a-carousel-btn--left>span{border-radius:0 40px 40px 0}.a-carousel-btn.a-carousel-btn--left.a-carousel-btn--hide{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.a-carousel-btn.a-carousel-btn--right>span{border-radius:40px 0 0 40px}.a-carousel-btn.a-carousel-btn--right.a-carousel-btn--hide{-webkit-transform:translateX(100%);transform:translateX(100%)}.o-carousel.o-carousel--spotlight .o-carousel__controls .a-carousel-btn{top:auto;-webkit-transform:none;transform:none}}@media screen and (min-width:640px) and (hover:hover){.a-carousel-btn:hover{-webkit-transform:scale(1.1) translateY(-50%);transform:scale(1.1) translateY(-50%)}.o-carousel.o-carousel--spotlight .o-carousel__controls .a-carousel-btn:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}}.m-carousel-item .m-carousel-item__image{position:relative}.m-carousel-item .m-carousel-item__image+.m-carousel-item__title{margin-top:15px}.m-carousel-item .m-carousel-item__title{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.m-carousel-item .m-carousel-item__title .m-carousel-item__title__article{word-wrap:anywhere;-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;font-size:1.4rem;font-weight:700;height:47px;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;-moz-hyphens:none;line-height:1.1;overflow:hidden;overflow-wrap:break-word;position:relative;word-break:break-word}.m-carousel-item .m-carousel-item__title.m-carousel-item__title--colored{color:#e2001a;text-transform:uppercase}.m-carousel-item .m-carousel-item__title .m-carousel-item__title__program{-webkit-box-flex:1;-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;font-size:1.5rem;font-weight:700;overflow:hidden;text-transform:uppercase}.m-carousel-item .m-carousel-item__title .m-carousel-item__title__program+.m-carousel-item__title__edition{margin-top:5px}.m-carousel-item .m-carousel-item__title .m-carousel-item__title__edition{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;line-height:1.4;overflow:hidden}.m-carousel-item .m-carousel-item__title.m-carousel-item__title--colored .m-carousel-item__title__edition{color:#313131;text-transform:none}.m-carousel-item .m-carousel-item__title-4-lignes .m-carousel-item__title__edition{-webkit-line-clamp:4;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.m-carousel-item.m-carousel-item--16x9{-webkit-box-flex:0;-webkit-flex:0 0 225px;-ms-flex:0 0 225px;flex:0 0 225px}.m-carousel-item.m-carousel-item--1x1{-webkit-box-flex:0;-webkit-flex:0 0 166px;-ms-flex:0 0 166px;flex:0 0 166px}.m-carousel-item.m-carousel-item--text-over-image a{display:block;position:relative}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__title{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-padding-start:20px;-webkit-padding-end:60px;bottom:20px;color:#fff;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:7px;margin:0;padding-inline-end:60px;padding-inline-start:20px;pointer-events:none;position:absolute}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__title .m-carousel-item__title__program{-webkit-box-flex:0;-webkit-flex:0 0 14px;-ms-flex:0 0 14px;flex:0 0 14px;font-size:1.4rem}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__title .m-carousel-item__title__program+.m-carousel-item__title__edition{margin-top:0}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__title .m-carousel-item__title__edition{-webkit-box-flex:0;-webkit-flex:0 0 42px;-ms-flex:0 0 42px;flex:0 0 42px;font-size:1.8rem;line-height:1.2}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__image{-webkit-box-pack:end;-ms-flex-pack:end;-webkit-box-align:end;-ms-flex-align:end;-webkit-align-items:flex-end;align-items:flex-end;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:flex-end;justify-content:flex-end}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__image .m-figure{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;overflow:hidden}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__image .m-figure .m-figure__img-wrapper{background-color:transparent}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__image .m-figure .m-figure__img-wrapper:after{background:-webkit-gradient(linear,left top,left bottom,from(transparent),to(#000));background:linear-gradient(180deg,transparent,#000);bottom:0;content:"";height:65%;position:absolute;width:100%}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__image .a-audio-player-btn .a-picto-play-pause{max-height:36px;max-width:36px}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__image .a-audio-player-btn.a-audio-player-btn--in-list{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;margin:15px}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__image .a-audio-player-btn.a-audio-player-btn--with-duration .a-audio-player-btn__duration{color:#fff;font-size:1.2rem}.m-carousel-item.m-carousel-item--text-over-image.m-carousel-item--16x9{-webkit-box-flex:0;-webkit-flex:0 0 85vw;-ms-flex:0 0 85vw;flex:0 0 85vw;max-width:350px}.m-carousel-item.m-carousel-item--text-over-image.m-carousel-item--1x1{-webkit-box-flex:0;-webkit-flex:0 0 40vw;-ms-flex:0 0 40vw;flex:0 0 40vw;max-width:166px}@media screen and (min-width:640px){.m-carousel-item .m-carousel-item__title{font-size:1.7rem}.m-carousel-item .m-carousel-item__title-4-lignes{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:1.4rem;height:auto}.m-carousel-item.m-carousel-item--16x9{-webkit-box-flex:0;-webkit-flex:0 0 206px;-ms-flex:0 0 206px;flex:0 0 206px}.m-carousel-item.m-carousel-item--text-over-image.m-carousel-item--16x9{-webkit-box-flex:0;-webkit-flex:0 0 85vw;-ms-flex:0 0 85vw;flex:0 0 85vw}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__image .a-audio-player-btn .a-picto-play-pause{max-height:none;max-width:none}.m-carousel-item.m-carousel-item--text-over-image a .m-carousel-item__image .a-audio-player-btn.a-audio-player-btn--with-duration .a-audio-player-btn__duration{font-size:1.3rem}}.o-carousel{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;max-width:calc(100vw - 16px);position:relative}.o-carousel .o-carousel__controls{display:none}.o-carousel .o-carousel__wrapper{-ms-overflow-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:100%;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none}.o-carousel .o-carousel__wrapper::-webkit-scrollbar{display:none}.o-carousel__wrapper__items{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:15px;-webkit-transition:-webkit-transform .3s linear;transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear}[data-root-carousel]:not([data-v-app]) .o-carousel__wrapper__items{overflow:hidden}.a-add-multiple-media-wrapper{min-height:44px}.a-add-multiple-media-wrapper,.m-add-multiple-media{-webkit-box-pack:center;-ms-flex-pack:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center}.m-add-multiple-media{-webkit-box-align:center;-ms-flex-align:center;-webkit-padding-start:45px;-webkit-padding-end:45px;-webkit-align-items:center;align-items:center;background-color:#e2001a;border-radius:6px;color:#fff;font-size:1.6rem;gap:5px;height:44px;padding-inline-end:45px;padding-inline-start:45px}.m-add-multiple-media .a-svg--picto-play-circle{height:28px;width:28px}.o-aside-content .o-carousel{margin:0 16px 15px}.o-aside-content.o-aside-content--spotlight .o-carousel{margin:0 16px}.o-aside-content.o-aside-content--spotlight .a-add-multiple-media-wrapper{margin-top:20px}@media screen and (min-width:640px){.o-carousel{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;max-width:100%}.o-carousel .o-carousel__controls{-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;align-items:flex-start;direction:ltr;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-justify-content:space-between;justify-content:space-between;overflow:hidden;position:absolute;width:100%}.o-carousel.o-carousel--spotlight .o-carousel__controls{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.o-aside-content .o-carousel{margin:0 16px 25px}.o-aside-content .o-carousel.o-carousel--spotlight{margin:0 16px}}@media screen and (min-width:1024px){.o-carousel.o-carousel--no-nav .o-carousel__wrapper .o-carousel__wrapper__items{-webkit-box-flex:1;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto}.o-carousel.o-carousel--no-nav .o-carousel__wrapper .o-carousel__wrapper__items .m-carousel-item{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;max-width:none}.o-carousel.o-carousel--no-nav .o-carousel__controls{display:none}.o-carousel.o-carousel--spotlight .o-carousel__wrapper .o-carousel__wrapper__items .m-carousel-item{max-width:420px}}.o-aside-content .o-aside-content__title{margin:-25px 0 30px}.t-content.t-content--page-builder .t-content__section-pb:first-child>.o-aside-content{margin-top:45px}</style>
        <link type="text/css" rel="stylesheet" href="/build/css/page-builder--ar.5f25e0ee62ce5d2db42e.css">
    
                    </head>

            <body class="u-header-sticky
          u-header-with-tag-list u-playlist-enabled"
                  data-cmp-theme="mcd"
                    data-site-nav-state="hidden" data-share-popin-state="hidden">

        
                    <div data-ah2s-modal>
    <ah2s-modal />
</div>
            <div id="pwa-offline-banner"><pwa-offline-banner></pwa-offline-banner></div>
        
                                                <div
    class="o-site-nav-wrapper o-site-nav-wrapper--is-bb o-site-nav-wrapper--main-menu"
    data-nav-id="menu">
    <div class="o-site-nav__scrollable">
        <nav class="o-site-nav" id="site-nav-menu" role="navigation">
                                    
                        <div class="o-site-nav__wrapper"><div class="o-site-nav__block o-site-nav__block--primary">
                                            <div class="m-nav-list m-nav-list--primary m-nav-list--double-column">
    <div class="m-nav-list__title">الإذاعة</div>    <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A7%D9%84%D8%A8%D8%AB-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B4%D8%B1" class="a-nav-link " tabindex="-1" data-menu-link>البث المباشر</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/" class="a-nav-link " tabindex="-1" data-menu-link>برامج</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA%20%D8%A3%D8%B5%D9%84%D9%8A/" class="a-nav-link " tabindex="-1" data-menu-link>بودكاست</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81-%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/" class="a-nav-link " tabindex="-1" data-menu-link>أرشيف البرامج</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A2%D8%AE%D8%B1-%D9%85%D9%88%D8%AC%D8%B2-%D9%84%D9%84%D8%A3%D9%86%D8%A8%D8%A7%D8%A1" class="a-nav-link " tabindex="-1" data-menu-link>آخر موجز للأنباء</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D9%86%D8%B4%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1/" class="a-nav-link " tabindex="-1" data-menu-link>نشرات الأخبار</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D9%81%D9%8A%D8%AF%D9%8A%D9%88" class="a-nav-link " tabindex="-1" data-menu-link>فيديو</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%B5%D8%AD%D8%A7%D9%81%D9%8A%D9%88%D9%86/" class="a-nav-link " tabindex="-1" data-menu-link>صحافيون</a>
</li>    </ul>
</div>
                                    </div>
            </div>
                                <div class="o-site-nav__wrapper"><div class="o-site-nav__block o-site-nav__block--primary">
                                            <div class="m-nav-list m-nav-list--primary m-nav-list--double-column">
    <div class="m-nav-list__title">ابق على اطلاع</div>    <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A7%D9%84%D8%A3%D9%83%D8%AB%D8%B1-%D9%82%D8%B1%D8%A7%D8%A1%D8%A9/" class="a-nav-link " tabindex="-1" data-menu-link>الأكثر قراءة</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A3%D8%A8%D8%B1%D8%A7%D8%AC/" class="a-nav-link " tabindex="-1" data-menu-link>أبراج</a>
</li>    </ul>
</div>
                                    </div>
            </div>
                                <div class="o-site-nav__wrapper"><div class="o-site-nav__block o-site-nav__block--primary">
                                            <div class="m-nav-list m-nav-list--primary m-nav-list--double-column">
    <div class="m-nav-list__title">موضوعات</div>    <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9/" class="a-nav-link " tabindex="-1" data-menu-link>رياضة</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%B5%D8%AD%D8%A9/" class="a-nav-link " tabindex="-1" data-menu-link>صحة</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%AB%D9%82%D8%A7%D9%81%D8%A9/" class="a-nav-link " tabindex="-1" data-menu-link>ثقافة</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%B9%D9%84%D9%88%D9%85/" class="a-nav-link " tabindex="-1" data-menu-link>علوم</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A3%D8%A8%D8%B1%D8%A7%D8%AC/" class="a-nav-link " tabindex="-1" data-menu-link>أبراج</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A7%D9%84%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%85%D8%B1%D8%A9/" class="a-nav-link " tabindex="-1" data-menu-link>الأخبار المستمرة</a>
</li>    </ul>
</div>
                                    </div>
            </div>
                                <div class="o-site-nav__wrapper"><div class="o-site-nav__block o-site-nav__block--primary">
                                            <div class="m-nav-list m-nav-list--primary m-nav-list--double-column">
    <div class="m-nav-list__title">مناطق العالم</div>    <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/" class="a-nav-link " tabindex="-1" data-menu-link>الشرق الأوسط</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/" class="a-nav-link " tabindex="-1" data-menu-link>المغرب العربي</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/" class="a-nav-link " tabindex="-1" data-menu-link>فرنسا</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/" class="a-nav-link " tabindex="-1" data-menu-link>أفريقيا</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/" class="a-nav-link " tabindex="-1" data-menu-link>أوروبا</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/" class="a-nav-link " tabindex="-1" data-menu-link>أمريكا</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/" class="a-nav-link " tabindex="-1" data-menu-link>آسيا - المحيط الهادئ</a>
</li>    </ul>
</div>
                                    </div>
            </div>
                                <div class="o-site-nav__wrapper"><div class="o-site-nav__block o-site-nav__block--social-links">
                                            <div class="m-nav-list m-nav-list--social-links m-nav-list--rows">
    <div class="m-nav-list__title">شبكات التواصل الاجتماعية</div>    <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">                                    
                                                    
                                                    <a href="https://mc-d.co/FB" class="a-nav-link a-svg a-svg--picto-social-facebook a-picto-social " target="_blank" rel="noopener nofollow" title="&#x0641;&#x064A;&#x0633;&#x20;&#x0628;&#x0648;&#x0643;" aria-label="&#x0641;&#x064A;&#x0633;&#x20;&#x0628;&#x0648;&#x0643;" tabindex="-1" data-menu-link>فيس بوك</a>
</li><li class="m-nav-list__list__item">                                    
                                                    
                                                    <a href="https://mc-d.co/X" class="a-nav-link a-svg a-svg--picto-social-twitter-x a-picto-social " target="_blank" rel="noopener nofollow" title="X&#x20;&#x28;&#x062A;&#x0648;&#x064A;&#x062A;&#x0631;&#x29;" aria-label="X&#x20;&#x28;&#x062A;&#x0648;&#x064A;&#x062A;&#x0631;&#x29;" tabindex="-1" data-menu-link>X (تويتر)</a>
</li><li class="m-nav-list__list__item">                                    
                                                    
                                                    <a href="https://mc-d.co/IG" class="a-nav-link a-svg a-svg--picto-social-instagram a-picto-social " target="_blank" rel="noopener nofollow" title="&#x0623;&#x0646;&#x0633;&#x062A;&#x063A;&#x0631;&#x0627;&#x0645;" aria-label="&#x0623;&#x0646;&#x0633;&#x062A;&#x063A;&#x0631;&#x0627;&#x0645;" tabindex="-1" data-menu-link>أنستغرام</a>
</li><li class="m-nav-list__list__item">                                    
                                                    
                                                    <a href="https://mc-d.co/YT" class="a-nav-link a-svg a-svg--picto-social-youtube a-picto-social " target="_blank" rel="noopener nofollow" title="&#x064A;&#x0648;&#x062A;&#x064A;&#x0648;&#x0628;" aria-label="&#x064A;&#x0648;&#x062A;&#x064A;&#x0648;&#x0628;" tabindex="-1" data-menu-link>يوتيوب</a>
</li><li class="m-nav-list__list__item">                                    
                                                    
                                                    <a href="https://t.me/MC_Doualiya" class="a-nav-link a-svg a-svg--picto-social-telegram a-picto-social " target="_blank" rel="noopener nofollow" title="&#x062A;&#x064A;&#x0644;&#x064A;&#x062C;&#x0631;&#x0627;&#x0645;" aria-label="&#x062A;&#x064A;&#x0644;&#x064A;&#x062C;&#x0631;&#x0627;&#x0645;" tabindex="-1" data-menu-link>تيليجرام</a>
</li><li class="m-nav-list__list__item">                                    
                                                    
                                                    <a href="https://mc-d.co/TI" class="a-nav-link a-svg a-svg--picto-social-tunein a-picto-social " target="_blank" rel="noopener nofollow" title="TuneIn" aria-label="TuneIn" tabindex="-1" data-menu-link>TuneIn</a>
</li><li class="m-nav-list__list__item">                                    
                                                    
                                                    <a href="https://mc-d.co/SC" class="a-nav-link a-svg a-svg--picto-social-soundcloud a-picto-social " target="_blank" rel="noopener nofollow" title="&#x0633;&#x0627;&#x0648;&#x0646;&#x062F;&#x20;&#x0643;&#x0644;&#x0627;&#x0648;&#x062F;" aria-label="&#x0633;&#x0627;&#x0648;&#x0646;&#x062F;&#x20;&#x0643;&#x0644;&#x0627;&#x0648;&#x062F;" tabindex="-1" data-menu-link>ساوند كلاود</a>
</li>    </ul>
</div>
                                    </div>
            </div>
                            <div class="o-site-nav__wrapper o-site-nav__wrapper--openable" data-root-box-expand>
            <box-expand
                :is-content-below="true"
                :content-classes="['o-site-nav__block','o-site-nav__block--secondary']"
                :button-classes="['o-site-nav__title','o-site-nav__title--button']"
                :btn-attr-list="{
                    dataMenuCat: ''
                }"
            >
                <template v-slot:button-collapse>
                    كل خدماتنا<span class="a-svg a-svg--picto-chevron-top"></span>
                </template>
                <template v-slot:button-expand>
                    كل خدماتنا<span class="a-svg a-svg--picto-chevron-bottom"></span>
                </template>
                <template v-slot:box>
                                            <div class="m-nav-list m-nav-list--secondary m-nav-list--double-column">
        <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA" class="a-nav-link " tabindex="-1" data-menu-link-foldable>بودكاست</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%AE%D8%AF%D9%85%D8%A9-RSS" class="a-nav-link " tabindex="-1" data-menu-link-foldable>خدمة RSS</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D9%85%D9%88%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%85%D8%A7%D8%B9" class="a-nav-link " tabindex="-1" data-menu-link-foldable>موجات الاستماع</a>
</li>    </ul>
</div>
                                    </template>
            </box-expand>
        </div>
                            <div class="o-site-nav__wrapper o-site-nav__wrapper--openable" data-root-box-expand>
            <box-expand
                :is-content-below="true"
                :content-classes="['o-site-nav__block','o-site-nav__block--secondary']"
                :button-classes="['o-site-nav__title','o-site-nav__title--button']"
                :btn-attr-list="{
                    dataMenuCat: ''
                }"
            >
                <template v-slot:button-collapse>
                    مونت كارلو الدولية<span class="a-svg a-svg--picto-chevron-top"></span>
                </template>
                <template v-slot:button-expand>
                    مونت كارلو الدولية<span class="a-svg a-svg--picto-chevron-bottom"></span>
                </template>
                <template v-slot:box>
                                            <div class="m-nav-list m-nav-list--secondary m-nav-list--double-column">
        <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="/%D9%85%D9%86-%D9%86%D8%AD%D9%86" class="a-nav-link " tabindex="-1" data-menu-link-foldable>من نحن؟</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/ar/%D9%85%D9%8A%D8%AB%D8%A7%D9%82-%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A3%D8%AE%D9%84%D8%A7%D9%82%D9%8A%D8%A7%D8%AA" class="a-nav-link " tabindex="-1" data-menu-link-foldable>ميثاق القواعد المهنية والأخلاقيات</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://www.francemediasmonde.com/ar/contact" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>اتصل بنا</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%B4%D8%B1%D9%83%D8%A7%D8%A1" class="a-nav-link " tabindex="-1" data-menu-link-foldable>شركاء</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://mc-d.co/PressKit" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>بيانات صحفية</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%A5%D8%B4%D8%B9%D8%A7%D8%B1%D8%A7%D8%AA" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>إدارة الإشعارات</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://fmm.io/jobs" class="a-nav-link " target="_blank" rel="noopener nofollow" tabindex="-1" data-menu-link-foldable>الالتحاق بنا</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://www.francemediasmonde.com/ar/legal-notice" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>تنويهات قانونية</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://www.francemediasmonde.com/ar/privacy" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>البيانات الشخصية</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://www.francemediasmonde.com/ar/cookies" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>كوكيز</a>
</li>    </ul>
</div>
                                    </template>
            </box-expand>
        </div>
                            <div class="o-site-nav__wrapper o-site-nav__wrapper--openable" data-root-box-expand>
            <box-expand
                :is-content-below="true"
                :content-classes="['o-site-nav__block','o-site-nav__block--secondary']"
                :button-classes="['o-site-nav__title','o-site-nav__title--button']"
                :btn-attr-list="{
                    dataMenuCat: ''
                }"
            >
                <template v-slot:button-collapse>
                    مواقع المجموعة<span class="a-svg a-svg--picto-chevron-top"></span>
                </template>
                <template v-slot:button-expand>
                    مواقع المجموعة<span class="a-svg a-svg--picto-chevron-bottom"></span>
                </template>
                <template v-slot:box>
                                            <div class="m-nav-list m-nav-list--secondary m-nav-list--double-column">
        <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="https://www.france24.com/ar/" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>فرانس 24</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://observers.france24.com/ar/" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>مراقبون</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://www.rfi.fr/" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>إذاعة فرنسا الدولية / RFI</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://savoirs.rfi.fr/ar/" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>تعلَّم الفرنسية</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://musique.rfi.fr/" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>RFI موسيقى</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://www.rfi-instrumental.com/en" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>RFI تصميم الصوت</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://mondoblog.org/" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>Mondoblog</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://www.infomigrants.net/ar/" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>مهاجر نيوز</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://www.cfi.fr/en" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>CFI</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://academie.france24-mcd-rfi.com/ar/" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>الأكاديمية</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="https://www.francemediasmonde.com/ar/" class="a-nav-link " target="_blank" rel="noopener" tabindex="-1" data-menu-link-foldable>France Médias Monde</a>
</li>    </ul>
</div>
                                    </template>
            </box-expand>
        </div>
                    </nav>
    </div>
</div>
                <div
    class="o-site-nav-wrapper"
    data-nav-id="language">
    <div class="o-site-nav__scrollable">
        <nav class="o-site-nav" id="site-nav-language" role="navigation">
                <div class="o-site-nav__wrapper">
        <div class="o-site-nav__block">
                                </div>
    </div>
        </nav>
    </div>
</div>
                <div
    class="o-site-nav-wrapper"
    data-nav-id="settings">
    <div class="o-site-nav__scrollable">
        <nav class="o-site-nav" id="site-nav-settings" role="navigation">
                <div class="o-site-nav__wrapper">
        <div class="o-site-nav__block">
            <div class="m-nav-list m-nav-list--single-column">
                <ul class="m-nav-list__list" data-nav-site-settings>

                                                                                                        <li class="m-nav-list__list__item" data-pwa-screen-install-button>
                                    <span class="o-site-setting-pwa-label a-nav-item">
                                                                                    <span class="a-nav-item__svg a-svg a-svg--picto-add-pwa"></span>
                                                                                <span class="a-nav-item__title">تصفح  بدون انترنت</span>
                                    </span>
                                </li>
                                                                                                                        <li class="m-nav-list__list__item">
                            <a href="#" data-gdpr-show-preferences="true"
                               class="a-nav-item"
                            >
                                                                    <span class="a-nav-item__svg a-svg a-svg--picto-cookies"></span>
                                                                <span class="a-nav-item__title">إدارة ملفات تعريف الارتباط</span>
                            </a>
                        </li>
                                            
                </ul>
            </div>
        </div>
    </div>
        </nav>
    </div>
</div>

                                <div
                        class="o-site-nav-wrapper o-site-nav-wrapper--is-bb"
                        data-nav-id="actualites_replays">
                        <div class="o-site-nav__scrollable">
                            <nav class="o-site-nav" id="site-nav-actualites_replays" role="navigation">
                                <div class="o-site-nav__wrapper">
                                    <div class="o-site-nav__block">
                                                                                    <div class="m-nav-list m-nav-list--primary m-nav-list--">
        <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/" class="a-nav-link " tabindex="-1" data-menu-link>برامج</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA%20%D8%A3%D8%B5%D9%84%D9%8A/" class="a-nav-link " tabindex="-1" data-menu-link>بودكاست أصلي</a>
</li>    </ul>
</div>
                                                                            </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                                                    <div
                        class="o-site-nav-wrapper o-site-nav-wrapper--is-bb"
                        data-nav-id="actualites">
                        <div class="o-site-nav__scrollable">
                            <nav class="o-site-nav" id="site-nav-actualites" role="navigation">
                                <div class="o-site-nav__wrapper">
                                    <div class="o-site-nav__block">
                                                                                    <div class="m-nav-list m-nav-list--primary m-nav-list--">
        <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9/" class="a-nav-link " tabindex="-1" data-menu-link>رياضة</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%B5%D8%AD%D8%A9/" class="a-nav-link " tabindex="-1" data-menu-link>صحة</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%AB%D9%82%D8%A7%D9%81%D8%A9/" class="a-nav-link " tabindex="-1" data-menu-link>ثقافة</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%B9%D9%84%D9%88%D9%85/" class="a-nav-link " tabindex="-1" data-menu-link>علوم</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A3%D8%A8%D8%B1%D8%A7%D8%AC/" class="a-nav-link " tabindex="-1" data-menu-link>أبراج</a>
</li>    </ul>
</div>
                                                                            </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                                                
            <a class="a-a11y-skip-main" href="#main-content" tabindex="0">تخطي إلى المحتوى الرئيسي</a>
                <div class="o-header">
    <header class="o-header__inner" role="banner">
        <div class="o-header__inner__background">
                                    <h1 class="o-header__home-link-wrapper" data-home-link-wrapper>
                <a
                    class="a-home-link"
                    href="/"
                    aria-label="مونت كارلو الدولية MCD - أخبار عربية, أبراج, برامج متنوعة: عودة إلى الصفحة الرئيسية"
                    tabindex="0"
                >
                        <span class="a-brand-logo a-svg a-svg--logo-mcd">مونت كارلو الدولية MCD - أخبار عربية, أبراج, برامج متنوعة</span>
                </a>
            </h1>
                                    <div class="o-header__site-nav-link o-header__site-nav-link--placeholder o-header__site-nav-link--start"></div>
            <div data-site-nav-button class="o-header__site-nav-link o-header__site-nav-link--end">
                <site-nav-button nav-id="settings">
                    <template v-slot:svg-active>
                        <span class="a-bottom-bar-link__svg a-svg a-svg--picto-settings"></span>
                    </template>
                    <template v-slot:svg-not-active>
                        <span class="a-bottom-bar-link__svg a-svg a-svg--picto-close"></span>
                    </template>
                </site-nav-button>
            </div>
            <div data-site-nav-button class="o-header__site-nav-link o-header__site-nav-link--main o-header__site-nav-link--desktop-only">
                <site-nav-button
                    nav-id="menu"
                    :allow-active="false"
                >
                    <template v-slot:svg-active>
                        <span class="a-bottom-bar-link__svg a-svg a-svg--picto-burger"></span>
                    </template>
                    <template v-slot:svg-not-active>
                        <span class="a-bottom-bar-link__svg a-svg a-svg--picto-close"></span>
                    </template>
                </site-nav-button>
            </div>
                    </div>
    </header>
</div>
<div class="o-tag-list-wrapper" data-sub-navigation>
        <div class="o-tag-list">
                <nav class="o-tag-list__wrapper u-horizontal-scroll" role="navigation">
            <ul class="o-tag-list__scrollable u-horizontal-scroll__scrollable" data-horizontal-scroll>
                                    <li class="o-tag-list__item"><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/" class="a-hot-tag">الشرق الأوسط</a>
</li>
                                    <li class="o-tag-list__item"><a href="/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A/" class="a-hot-tag">المغرب العربي</a>
</li>
                                    <li class="o-tag-list__item"><a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/" class="a-hot-tag">فرنسا</a>
</li>
                                    <li class="o-tag-list__item"><a href="/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/" class="a-hot-tag">أفريقيا</a>
</li>
                                    <li class="o-tag-list__item"><a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/" class="a-hot-tag">أوروبا</a>
</li>
                                    <li class="o-tag-list__item"><a href="/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/" class="a-hot-tag">أمريكا</a>
</li>
                                    <li class="o-tag-list__item"><a href="/%D8%A2%D8%B3%D9%8A%D8%A7-%D8%A7%D9%84%D9%87%D8%A7%D8%AF%D8%A6/" class="a-hot-tag">آسيا - المحيط الهادئ</a>
</li>
                            </ul>
        </nav>
    </div>
</div>
            

                        <main data-nav-container role="main">
                                            <div data-tms-ad-container class="o-ad-container o-ad-container--banner-top o-ad-container--with-background">
        <div class="o-ad-container__content o-ad-container__content--report-enabled">
            <div class="o-ad-container__content__ad"
                data-tms-ad-type="banner"
                data-tms-ad-status="idle"
                data-tms-ad-pos="1"></div>
                            <button title="الإبلاغ عن هذا الإعلان" class="o-ad-container__content__report-link" rel="noopener" data-tms-ad-report><span class="a-svg a-svg--picto-report-ad-rtl"></span></button>
                    </div>
    </div>
    <div class="o-ad-sponsoring" data-tms-ad-type="sponsoring" data-tms-ad-status="disabled">
    <a class="o-ad-sponsoring__link o-ad-sponsoring__start start_link" href="#"></a>
    <a class="o-ad-sponsoring__link o-ad-sponsoring__middle middle_link" href="#"></a>
    <a class="o-ad-sponsoring__link o-ad-sponsoring__end end_link" href="#"></a>
</div>
                                <div class="t-content t-content--page-builder" id="main-content" tabindex="-1">
                        
                        
    
    
    
            
                    <section class="t-content__section-pb">
                                <div class="o-banana-split ">
                
<div class="o-layout-list o-banana-split__main-articles">
            <div class="o-layout-list__item o-layout-list__item--main-item">
                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--main-article"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%87%D9%84-%D8%AA%D9%86%D9%87%D9%8A-%D9%85%D8%A8%D8%A7%D8%AD%D8%AB%D8%A7%D8%AA-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D8%A7%D9%84%D8%AD%D8%B1%D8%A8-%D9%81%D9%8A-%D8%BA%D8%B2%D8%A9-%D9%88%D9%87%D9%84-%D9%8A%D8%B4%D8%B9%D9%84-%D8%B0%D9%84%D9%83-%D8%AD%D8%B1%D8%A8%D8%A7-%D8%A3%D8%AE%D8%B1%D9%89-%D9%81%D9%8A-%D8%B4%D9%85%D8%A7%D9%84-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/f4941904-ac53-11ee-8a0a-005056a97e36/w:246/p:16x9/131abe906c409eedae9cfd630216204eff89689c-ACI6Hs6s.webp 246w,https://s.mc-doualiya.com/media/display/f4941904-ac53-11ee-8a0a-005056a97e36/w:388/p:16x9/131abe906c409eedae9cfd630216204eff89689c-ACI6Hs6s.webp 388w,https://s.mc-doualiya.com/media/display/f4941904-ac53-11ee-8a0a-005056a97e36/w:720/p:16x9/131abe906c409eedae9cfd630216204eff89689c-ACI6Hs6s.webp 720w,https://s.mc-doualiya.com/media/display/f4941904-ac53-11ee-8a0a-005056a97e36/w:980/p:16x9/131abe906c409eedae9cfd630216204eff89689c-ACI6Hs6s.webp 980w"
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) calc(100vw - 40px), (min-width: 1024px) 642px"
        />
    
    <img
                    fetchpriority="high" src="https://s.mc-doualiya.com/media/display/f4941904-ac53-11ee-8a0a-005056a97e36/w:980/p:16x9/131abe906c409eedae9cfd630216204eff89689c-ACI6Hs6s.jpg" alt="صورة ملتقطة من جنوب إسرائيل تظهر حجم الدمار في قطاع غزة" srcset="https://s.mc-doualiya.com/media/display/f4941904-ac53-11ee-8a0a-005056a97e36/w:246/p:16x9/131abe906c409eedae9cfd630216204eff89689c-ACI6Hs6s.jpg 246w,https://s.mc-doualiya.com/media/display/f4941904-ac53-11ee-8a0a-005056a97e36/w:388/p:16x9/131abe906c409eedae9cfd630216204eff89689c-ACI6Hs6s.jpg 388w,https://s.mc-doualiya.com/media/display/f4941904-ac53-11ee-8a0a-005056a97e36/w:720/p:16x9/131abe906c409eedae9cfd630216204eff89689c-ACI6Hs6s.jpg 720w,https://s.mc-doualiya.com/media/display/f4941904-ac53-11ee-8a0a-005056a97e36/w:980/p:16x9/131abe906c409eedae9cfd630216204eff89689c-ACI6Hs6s.jpg 980w"
         sizes="(max-width: 639px) 100vw, (max-width: 1023px) calc(100vw - 40px), (min-width: 1024px) 642px"
                     width="980"
             height="551"
        
         loading="eager"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-camera"></span><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%87%D9%84-%D8%AA%D9%86%D9%87%D9%8A-%D9%85%D8%A8%D8%A7%D8%AD%D8%AB%D8%A7%D8%AA-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D8%A7%D9%84%D8%AD%D8%B1%D8%A8-%D9%81%D9%8A-%D8%BA%D8%B2%D8%A9-%D9%88%D9%87%D9%84-%D9%8A%D8%B4%D8%B9%D9%84-%D8%B0%D9%84%D9%83-%D8%AD%D8%B1%D8%A8%D8%A7-%D8%A3%D8%AE%D8%B1%D9%89-%D9%81%D9%8A-%D8%B4%D9%85%D8%A7%D9%84-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84" data-article-item-link>
                            <h2>فيديو: هل تنهي مباحثات باريس الحرب في غزة؟ ... وهل يشعل ذلك حربا أخرى في شمال إسرائيل؟</h2>
                        </a></div>
                                </div>
        </div>
            <div class="m-list-main-related">
                                    <a class="m-list-main-related__article" href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%85%D9%82%D8%AA%D9%84-%D8%B9%D8%B4%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D9%8A%D9%86-%D9%81%D9%8A-%D8%BA%D8%B2%D8%A9-%D9%88%D8%AD%D9%85%D8%A7%D8%B3-%D8%AA%D8%AF%D8%B1%D8%B3-%D9%85%D9%82%D8%AA%D8%B1%D8%AD%D8%A7-%D9%84%D9%84%D8%AA%D9%88%D8%B5%D9%84-%D8%A7%D9%84%D9%89-%D9%87%D8%AF%D9%86%D8%A9">
            <span class="a-svg a-svg--picto-left-arrow"></span> 
            <h2>مقتل عشرات الفلسطينيين في غزة وحماس تدرس مقترحا للتوصل الى هدنة</h2>
        </a>
                                    <a class="m-list-main-related__article" href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240130-%D8%BA%D8%B2%D8%A9-%D9%87%D9%84-%D8%AA%D8%AD%D9%82%D9%82-%D9%85%D8%B3%D9%88%D8%AF%D8%A9-%D8%A7%D9%84%D8%A7%D8%AA%D9%81%D8%A7%D9%82-%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D9%8A-%D8%B7%D8%B1%D8%AD%D8%AA-%D9%81%D9%8A-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D8%A7%D8%AE%D8%AA%D8%B1%D8%A7%D9%82%D8%A7">
            <span class="a-svg a-svg--picto-left-arrow"></span> 
            <h2>غزة: هل تحقق مسودة الاتفاق الأمريكية التي طرحت في باريس اختراقا؟</h2>
        </a>
    </div>
    </div>
        </div>
    <div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%86%D8%AA%D8%A7%D9%86%D9%8A%D8%A7%D9%87%D9%88-%D9%88%D9%84%D8%B9%D8%A8%D8%A9-%D8%A7%D9%84%D9%84%D9%81-%D9%88%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D9%86-%D8%A8%D9%8A%D9%86-%D8%B9%D8%AC%D8%B2-%D8%AC%D9%8A%D8%B4%D9%87-%D8%B9%D9%86-%D8%AA%D8%AD%D9%82%D9%8A%D9%82-%D8%A7%D9%86%D8%AA%D8%B5%D8%A7%D8%B1-%D9%88%D9%87%D8%B4%D8%A7%D8%B4%D8%A9-%D8%A7%D8%A6%D8%AA%D9%84%D8%A7%D9%81%D9%87-%D8%A7%D9%84%D8%AD%D8%A7%D9%83%D9%85" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/95796f38-c084-11ee-b85f-005056a97e36/w:177/p:16x9/IMG_0535.webp 177w,https://s.mc-doualiya.com/media/display/95796f38-c084-11ee-b85f-005056a97e36/w:388/p:16x9/IMG_0535.webp 388w,https://s.mc-doualiya.com/media/display/95796f38-c084-11ee-b85f-005056a97e36/w:480/p:16x9/IMG_0535.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/95796f38-c084-11ee-b85f-005056a97e36/w:480/p:16x9/IMG_0535.jpeg" alt="مظاهرات عائلات المحتجزين الإسرائيليين" srcset="https://s.mc-doualiya.com/media/display/95796f38-c084-11ee-b85f-005056a97e36/w:177/p:16x9/IMG_0535.jpeg 177w,https://s.mc-doualiya.com/media/display/95796f38-c084-11ee-b85f-005056a97e36/w:388/p:16x9/IMG_0535.jpeg 388w,https://s.mc-doualiya.com/media/display/95796f38-c084-11ee-b85f-005056a97e36/w:480/p:16x9/IMG_0535.jpeg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="eager"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T23:09:43+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%86%D8%AA%D8%A7%D9%86%D9%8A%D8%A7%D9%87%D9%88-%D9%88%D9%84%D8%B9%D8%A8%D8%A9-%D8%A7%D9%84%D9%84%D9%81-%D9%88%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D9%86-%D8%A8%D9%8A%D9%86-%D8%B9%D8%AC%D8%B2-%D8%AC%D9%8A%D8%B4%D9%87-%D8%B9%D9%86-%D8%AA%D8%AD%D9%82%D9%8A%D9%82-%D8%A7%D9%86%D8%AA%D8%B5%D8%A7%D8%B1-%D9%88%D9%87%D8%B4%D8%A7%D8%B4%D8%A9-%D8%A7%D8%A6%D8%AA%D9%84%D8%A7%D9%81%D9%87-%D8%A7%D9%84%D8%AD%D8%A7%D9%83%D9%85" data-article-item-link>
                            <h2>نتانياهو ولعبة اللف والدوران بين عجز جيشه عن تحقيق انتصار وهشاشة ائتلافه الحاكم</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/20240131-%D9%81%D9%8A%D8%AF%D9%8A%D9%88-%D8%AA%D8%B5%D8%B9%D9%8A%D8%AF-%D8%A7%D9%84%D9%81%D9%84%D8%A7%D8%AD%D9%8A%D9%86-%D9%81%D9%8A-%D9%81%D8%B1%D9%86%D8%B3%D8%A7-%D9%85%D8%B3%D8%AA%D9%85%D8%B1-%D9%88%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9-%D8%AA%D8%AA%D9%88%D8%AC%D9%87-%D8%A5%D9%84%D9%89-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/f6f953e2-c046-11ee-ae28-005056bfb2b6/w:177/p:16x9/000_34HC2Y3.webp 177w,https://s.mc-doualiya.com/media/display/f6f953e2-c046-11ee-ae28-005056bfb2b6/w:388/p:16x9/000_34HC2Y3.webp 388w,https://s.mc-doualiya.com/media/display/f6f953e2-c046-11ee-ae28-005056bfb2b6/w:480/p:16x9/000_34HC2Y3.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/f6f953e2-c046-11ee-ae28-005056bfb2b6/w:480/p:16x9/000_34HC2Y3.jpg" alt="يشارك المزارعون الفرنسيون في احتجاج على الطريق بالقرب من بونت دي شيفير، على المشارف الجنوبية الغربية لمدينة نانت في 31 يناير 2024، بشأن الأجور والضرائب واللوائح." srcset="https://s.mc-doualiya.com/media/display/f6f953e2-c046-11ee-ae28-005056bfb2b6/w:177/p:16x9/000_34HC2Y3.jpg 177w,https://s.mc-doualiya.com/media/display/f6f953e2-c046-11ee-ae28-005056bfb2b6/w:388/p:16x9/000_34HC2Y3.jpg 388w,https://s.mc-doualiya.com/media/display/f6f953e2-c046-11ee-ae28-005056bfb2b6/w:480/p:16x9/000_34HC2Y3.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="eager"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">فيديو</span></div>
                                    
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T17:27:43+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><span class="article__type a-svg a-svg--picto-camera"></span><a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/20240131-%D9%81%D9%8A%D8%AF%D9%8A%D9%88-%D8%AA%D8%B5%D8%B9%D9%8A%D8%AF-%D8%A7%D9%84%D9%81%D9%84%D8%A7%D8%AD%D9%8A%D9%86-%D9%81%D9%8A-%D9%81%D8%B1%D9%86%D8%B3%D8%A7-%D9%85%D8%B3%D8%AA%D9%85%D8%B1-%D9%88%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%D8%A9-%D8%AA%D8%AA%D9%88%D8%AC%D9%87-%D8%A5%D9%84%D9%89-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3" data-article-item-link>
                            <h2>فيديو: تصعيد الفلاحين في فرنسا مستمر والجرارات الزراعية تتوجه إلى باريس</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A8%D9%8A%D9%86%D9%85%D8%A7-%D8%A7%D9%84%D8%AC%D9%8A%D8%B4-%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A-%D9%85%D9%86%D8%BA%D9%85%D8%B3-%D9%81%D9%8A-%D9%85%D8%B9%D8%A7%D8%B1%D9%83-%D8%BA%D8%B2%D8%A9-%D9%86%D8%AA%D9%86%D9%8A%D8%A7%D9%87%D9%88-%D9%85%D9%86%D9%87%D9%85%D9%83-%D9%81%D9%8A-%D8%A5%D8%B5%D9%84%D8%A7%D8%AD-%D8%AD%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%B3%D8%A8%D8%A7%D8%AD%D8%A9-%D9%81%D9%8A-%D9%85%D9%86%D8%B2%D9%84%D9%87" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/a94b1398-5d21-11ee-86f9-005056a90284/w:177/p:16x9/israel_manif1.webp 177w,https://s.mc-doualiya.com/media/display/a94b1398-5d21-11ee-86f9-005056a90284/w:388/p:16x9/israel_manif1.webp 388w,https://s.mc-doualiya.com/media/display/a94b1398-5d21-11ee-86f9-005056a90284/w:480/p:16x9/israel_manif1.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/a94b1398-5d21-11ee-86f9-005056a90284/w:480/p:16x9/israel_manif1.jpg" alt="مظاهرات ضد رئيس الحكومة بينيامين نتنياهو، 27 أيلول 2023 (أرشيف)" srcset="https://s.mc-doualiya.com/media/display/a94b1398-5d21-11ee-86f9-005056a90284/w:177/p:16x9/israel_manif1.jpg 177w,https://s.mc-doualiya.com/media/display/a94b1398-5d21-11ee-86f9-005056a90284/w:388/p:16x9/israel_manif1.jpg 388w,https://s.mc-doualiya.com/media/display/a94b1398-5d21-11ee-86f9-005056a90284/w:480/p:16x9/israel_manif1.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="eager"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T16:36:00+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A8%D9%8A%D9%86%D9%85%D8%A7-%D8%A7%D9%84%D8%AC%D9%8A%D8%B4-%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A-%D9%85%D9%86%D8%BA%D9%85%D8%B3-%D9%81%D9%8A-%D9%85%D8%B9%D8%A7%D8%B1%D9%83-%D8%BA%D8%B2%D8%A9-%D9%86%D8%AA%D9%86%D9%8A%D8%A7%D9%87%D9%88-%D9%85%D9%86%D9%87%D9%85%D9%83-%D9%81%D9%8A-%D8%A5%D8%B5%D9%84%D8%A7%D8%AD-%D8%AD%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%B3%D8%A8%D8%A7%D8%AD%D8%A9-%D9%81%D9%8A-%D9%85%D9%86%D8%B2%D9%84%D9%87" data-article-item-link>
                            <h2>بينما الجيش الإسرائيلي منغمس في معارك غزة ... نتنياهو منهمك في إصلاح حمام السباحة في منزله</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%B9%D9%84%D9%88%D9%85/20240131-%D8%A7%D9%83%D8%AA%D8%B4%D8%A7%D9%81-%D9%85%D8%B0%D9%87%D9%84-%D8%B3%D9%8A%D8%BA%D9%8A%D8%B1-%D9%85%D9%86%D8%B8%D9%88%D8%B1%D9%86%D8%A7-%D9%84%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-%D8%B9%D9%84%D9%85%D8%A7%D8%A1-%D9%8A%D9%88%D8%AB%D9%82%D9%88%D9%86-%D8%AD%D8%AF%D9%8A%D8%AB-%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D9%85%D8%B9-%D8%A8%D8%B9%D8%B6%D9%87%D8%A7" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/017f79be-ec94-11ec-aa5b-005056a90284/w:177/p:16x9/hands-g75caf7b08_1920.webp 177w,https://s.mc-doualiya.com/media/display/017f79be-ec94-11ec-aa5b-005056a90284/w:388/p:16x9/hands-g75caf7b08_1920.webp 388w,https://s.mc-doualiya.com/media/display/017f79be-ec94-11ec-aa5b-005056a90284/w:480/p:16x9/hands-g75caf7b08_1920.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/017f79be-ec94-11ec-aa5b-005056a90284/w:480/p:16x9/hands-g75caf7b08_1920.jpg" alt="نبات" srcset="https://s.mc-doualiya.com/media/display/017f79be-ec94-11ec-aa5b-005056a90284/w:177/p:16x9/hands-g75caf7b08_1920.jpg 177w,https://s.mc-doualiya.com/media/display/017f79be-ec94-11ec-aa5b-005056a90284/w:388/p:16x9/hands-g75caf7b08_1920.jpg 388w,https://s.mc-doualiya.com/media/display/017f79be-ec94-11ec-aa5b-005056a90284/w:480/p:16x9/hands-g75caf7b08_1920.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T17:50:45+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%B9%D9%84%D9%88%D9%85/20240131-%D8%A7%D9%83%D8%AA%D8%B4%D8%A7%D9%81-%D9%85%D8%B0%D9%87%D9%84-%D8%B3%D9%8A%D8%BA%D9%8A%D8%B1-%D9%85%D9%86%D8%B8%D9%88%D8%B1%D9%86%D8%A7-%D9%84%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-%D8%B9%D9%84%D9%85%D8%A7%D8%A1-%D9%8A%D9%88%D8%AB%D9%82%D9%88%D9%86-%D8%AD%D8%AF%D9%8A%D8%AB-%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA-%D9%85%D8%B9-%D8%A8%D8%B9%D8%B6%D9%87%D8%A7" data-article-item-link>
                            <h2>اكتشاف مذهل سيغير منظورنا للحياة..علماء يوثقون &quot;حديث&quot; النباتات مع بعضها</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-30-%D8%AC%D8%AB%D8%A9-%D9%84%D9%85%D8%B9%D8%AA%D9%82%D9%84%D9%8A%D9%86-%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D9%8A%D9%86-%D9%82%D8%AA%D9%84%D9%88%D8%A7-%D8%A8%D8%A7%D9%84%D8%B1%D8%B5%D8%A7%D8%B5-%D9%88%D9%87%D9%85-%D9%85%D8%B9%D8%B5%D9%88%D8%A8%D9%8A-%D8%A7%D9%84%D8%A3%D8%B9%D9%8A%D9%86-%D9%88%D9%85%D8%B1%D8%A8%D9%88%D8%B7%D9%8A-%D8%A7%D9%84%D8%A3%D9%8A%D8%AF%D9%8A-%D9%81%D9%8A-%D8%B4%D9%85%D8%A7%D9%84-%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/0e598fee-bcea-11ee-8042-005056bfb2b6/w:177/p:16x9/2024-01-24T073631Z_982855939_RC27O5AC2IDQ_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA.webp 177w,https://s.mc-doualiya.com/media/display/0e598fee-bcea-11ee-8042-005056bfb2b6/w:388/p:16x9/2024-01-24T073631Z_982855939_RC27O5AC2IDQ_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA.webp 388w,https://s.mc-doualiya.com/media/display/0e598fee-bcea-11ee-8042-005056bfb2b6/w:480/p:16x9/2024-01-24T073631Z_982855939_RC27O5AC2IDQ_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/0e598fee-bcea-11ee-8042-005056bfb2b6/w:480/p:16x9/2024-01-24T073631Z_982855939_RC27O5AC2IDQ_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA.JPG" alt="جنود إسرائيليون في قطاع غزة (24/01/2024)" srcset="https://s.mc-doualiya.com/media/display/0e598fee-bcea-11ee-8042-005056bfb2b6/w:177/p:16x9/2024-01-24T073631Z_982855939_RC27O5AC2IDQ_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA.JPG 177w,https://s.mc-doualiya.com/media/display/0e598fee-bcea-11ee-8042-005056bfb2b6/w:388/p:16x9/2024-01-24T073631Z_982855939_RC27O5AC2IDQ_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA.JPG 388w,https://s.mc-doualiya.com/media/display/0e598fee-bcea-11ee-8042-005056bfb2b6/w:480/p:16x9/2024-01-24T073631Z_982855939_RC27O5AC2IDQ_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA.JPG 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T17:44:25+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-30-%D8%AC%D8%AB%D8%A9-%D9%84%D9%85%D8%B9%D8%AA%D9%82%D9%84%D9%8A%D9%86-%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D9%8A%D9%86-%D9%82%D8%AA%D9%84%D9%88%D8%A7-%D8%A8%D8%A7%D9%84%D8%B1%D8%B5%D8%A7%D8%B5-%D9%88%D9%87%D9%85-%D9%85%D8%B9%D8%B5%D9%88%D8%A8%D9%8A-%D8%A7%D9%84%D8%A3%D8%B9%D9%8A%D9%86-%D9%88%D9%85%D8%B1%D8%A8%D9%88%D8%B7%D9%8A-%D8%A7%D9%84%D8%A3%D9%8A%D8%AF%D9%8A-%D9%81%D9%8A-%D8%B4%D9%85%D8%A7%D9%84-%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9" data-article-item-link>
                            <h2>30 جثة لمعتقلين فلسطينيين قتلوا بالرصاص وهم معصوبي الأعين ومربوطي الأيدي في شمال القطاع</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A3%D8%B3%D8%AA%D8%B1%D8%A7%D9%84%D9%8A%D8%A7/20240131-%D8%A8%D8%B3%D8%A8%D8%A8-%D8%AD%D8%B8%D8%B1-%D8%A7%D9%84%D8%AD%D9%88%D8%AB%D9%8A%D9%8A%D9%86-%D8%B3%D9%81%D9%8A%D9%86%D8%A9-%D8%AA%D8%AD%D9%85%D9%84-%D8%A2%D9%84%D8%A7%D9%81-%D8%B1%D8%A4%D9%88%D8%B3-%D8%A7%D9%84%D9%85%D8%A7%D8%B4%D9%8A%D8%A9-%D9%83%D8%A7%D9%86%D8%AA-%D9%85%D8%AA%D8%AC%D9%87%D8%A9-%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84-%D8%B9%D8%A7%D9%84%D9%82%D8%A9-%D9%82%D8%A8%D8%A7%D9%84%D8%A9-%D8%A3%D8%B3%D8%AA%D8%B1%D8%A7%D9%84%D9%8A%D8%A7" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/10695d46-fba7-11ed-84cd-005056bf30b7/w:177/p:16x9/27913086578_582fd3c42f_k.webp 177w,https://s.mc-doualiya.com/media/display/10695d46-fba7-11ed-84cd-005056bf30b7/w:388/p:16x9/27913086578_582fd3c42f_k.webp 388w,https://s.mc-doualiya.com/media/display/10695d46-fba7-11ed-84cd-005056bf30b7/w:480/p:16x9/27913086578_582fd3c42f_k.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/10695d46-fba7-11ed-84cd-005056bf30b7/w:480/p:16x9/27913086578_582fd3c42f_k.jpg" alt="خراف" srcset="https://s.mc-doualiya.com/media/display/10695d46-fba7-11ed-84cd-005056bf30b7/w:177/p:16x9/27913086578_582fd3c42f_k.jpg 177w,https://s.mc-doualiya.com/media/display/10695d46-fba7-11ed-84cd-005056bf30b7/w:388/p:16x9/27913086578_582fd3c42f_k.jpg 388w,https://s.mc-doualiya.com/media/display/10695d46-fba7-11ed-84cd-005056bf30b7/w:480/p:16x9/27913086578_582fd3c42f_k.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T17:47:50+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A3%D8%B3%D8%AA%D8%B1%D8%A7%D9%84%D9%8A%D8%A7/20240131-%D8%A8%D8%B3%D8%A8%D8%A8-%D8%AD%D8%B8%D8%B1-%D8%A7%D9%84%D8%AD%D9%88%D8%AB%D9%8A%D9%8A%D9%86-%D8%B3%D9%81%D9%8A%D9%86%D8%A9-%D8%AA%D8%AD%D9%85%D9%84-%D8%A2%D9%84%D8%A7%D9%81-%D8%B1%D8%A4%D9%88%D8%B3-%D8%A7%D9%84%D9%85%D8%A7%D8%B4%D9%8A%D8%A9-%D9%83%D8%A7%D9%86%D8%AA-%D9%85%D8%AA%D8%AC%D9%87%D8%A9-%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84-%D8%B9%D8%A7%D9%84%D9%82%D8%A9-%D9%82%D8%A8%D8%A7%D9%84%D8%A9-%D8%A3%D8%B3%D8%AA%D8%B1%D8%A7%D9%84%D9%8A%D8%A7" data-article-item-link>
                            <h2>بسبب حظر الحوثيين..سفينة تحمل آلاف رؤوس الماشية كانت متجهة لإسرائيل عالقة قبالة أستراليا</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>

    <div class="o-block-ad-n-newsfeed o-banana-split__ad-n-newsfeed">
            




<aside
    data-org-name="1bis"
    data-org-type="banana-split--main-with-related"
    class="o-aside-content  o-aside-content--news-feed">
    <div class="o-aside-content__row o-aside-content__row--center">
            <div class="o-aside-content__title a-aside-title"><span class="a-aside-title__content">الأخبار المستمرة</span></div>
                    </div>
                
        <ol class="o-layout-list o-layout-list--news-feed">
        <li class="o-layout-list__item">
                <div class="m-item-news-feed">
        <div class="news__metadata">
                    <div class="news__metadata__time"><time datetime="2024-01-31T23:09:43+01:00">23:09</time></div>    </div>
        <div class="news__content">
        
                
    
    <div class="news__content__title"><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%86%D8%AA%D8%A7%D9%86%D9%8A%D8%A7%D9%87%D9%88-%D9%88%D9%84%D8%B9%D8%A8%D8%A9-%D8%A7%D9%84%D9%84%D9%81-%D9%88%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D8%A7%D9%86-%D8%A8%D9%8A%D9%86-%D8%B9%D8%AC%D8%B2-%D8%AC%D9%8A%D8%B4%D9%87-%D8%B9%D9%86-%D8%AA%D8%AD%D9%82%D9%8A%D9%82-%D8%A7%D9%86%D8%AA%D8%B5%D8%A7%D8%B1-%D9%88%D9%87%D8%B4%D8%A7%D8%B4%D8%A9-%D8%A7%D8%A6%D8%AA%D9%84%D8%A7%D9%81%D9%87-%D8%A7%D9%84%D8%AD%D8%A7%D9%83%D9%85" title="نتانياهو ولعبة اللف والدوران بين عجز جيشه عن تحقيق انتصار وهشاشة ائتلافه الحاكم"><h2>نتانياهو ولعبة اللف والدوران بين عجز جيشه عن تحقيق انتصار وهشاشة ائتلافه الحاكم</h2></a>
    </div>
    </div>
</div>
            </li><li class="o-layout-list__item">
                <div class="m-item-news-feed">
        <div class="news__metadata">
                    <div class="news__metadata__time"><time datetime="2024-01-31T22:52:19+01:00">22:52</time></div><div class="news__metadata__source">أ ف ب</div>    </div>
        <div class="news__content">
        
                
    
    <div class="news__content__title"><a href="/%D8%A7%D9%84%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%85%D8%B1%D8%A9/20240131-%D8%A8%D8%B7%D9%88%D9%84%D8%A9-%D8%A5%D9%86%D9%83%D9%84%D8%AA%D8%B1%D8%A7-%D9%85%D8%A7%D9%86%D8%B4%D8%B3%D8%AA%D8%B1-%D8%B3%D9%8A%D8%AA%D9%8A-%D9%8A%D9%88%D8%A7%D8%B5%D9%84-%D9%86%D8%BA%D9%85%D8%A9-%D8%A7%D9%84%D9%81%D9%88%D8%B2-%D9%88%D8%AA%D9%88%D8%AA%D9%86%D9%87%D8%A7%D9%85-%D8%B1%D8%A7%D8%A8%D8%B9%D9%8B%D8%A7" title="بطولة إنكلترا: مانشستر سيتي يواصل نغمة الفوز وتوتنهام رابعًا"><h2>بطولة إنكلترا: مانشستر سيتي يواصل نغمة الفوز وتوتنهام رابعًا</h2></a>
    </div>
    </div>
</div>
            </li><li class="o-layout-list__item">
                <div class="m-item-news-feed">
        <div class="news__metadata">
                    <div class="news__metadata__time"><time datetime="2024-01-31T22:40:25+01:00">22:40</time></div>    </div>
        <div class="news__content">
        
                
    
    <div class="news__content__title"><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7-%D8%AA%D8%AF%D8%AE%D9%84-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1-%D9%83%D8%AD%D8%A7%D8%B1%D8%B3-%D9%84%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-%D9%85%D8%A7-%D9%87%D9%8A-%D8%A7%D9%84%D8%AA%D8%A8%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%D9%8A%D8%A9" title="أوروبا تدخل البحر الأحمر كحارس للتجارة العالمية … ما هي التبعات الاقتصادية؟"><h2>أوروبا تدخل البحر الأحمر كحارس للتجارة العالمية … ما هي التبعات الاقتصادية؟</h2></a>
    </div>
    </div>
</div>
            </li><li class="o-layout-list__item">
                <div class="m-item-news-feed">
        <div class="news__metadata">
                    <div class="news__metadata__time"><time datetime="2024-01-31T22:04:08+01:00">22:04</time></div><div class="news__metadata__source">أ ف ب</div>    </div>
        <div class="news__content">
        
                
    
    <div class="news__content__title"><a href="/%D8%A7%D9%84%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%85%D8%B1%D8%A9/20240131-%D9%88%D8%A7%D8%B4%D9%86%D8%B7%D9%86-%D8%AA%D8%B9%D9%84%D9%86-%D8%AA%D8%AF%D9%85%D9%8A%D8%B1-%D8%B5%D8%A7%D8%B1%D9%88%D8%AE-%D9%84%D9%84%D8%AD%D9%88%D8%AB%D9%8A%D9%8A%D9%86-%D9%85%D8%AB%D9%91%D9%84-%D8%AA%D9%87%D8%AF%D9%8A%D8%AF%D8%A7-%D9%84%D8%B7%D8%A7%D8%A6%D8%B1%D8%A7%D8%AA-%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9" title="واشنطن تعلن تدمير صاروخ للحوثيين مثّل تهديدا لطائرات أميركية"><h2>واشنطن تعلن تدمير صاروخ للحوثيين مثّل تهديدا لطائرات أميركية</h2></a>
    </div>
    </div>
</div>
            </li><li class="o-layout-list__item">
                <div class="m-item-news-feed">
        <div class="news__metadata">
                    <div class="news__metadata__time"><time datetime="2024-01-31T21:00:09+01:00">21:00</time></div><div class="news__metadata__source">أ ف ب</div>    </div>
        <div class="news__content">
        
                
    
    <div class="news__content__title"><a href="/%D8%A7%D9%84%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%85%D8%B1%D8%A9/20240131-%D8%A8%D8%B7%D9%88%D9%84%D8%A9-%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7-%D9%81%D9%88%D8%B2-%D8%A3%D9%88%D9%84-%D9%84%D8%A8%D8%B1%D8%B4%D9%84%D9%88%D9%86%D8%A9-%D8%A8%D8%B9%D8%AF-%D8%A5%D8%B9%D9%84%D8%A7%D9%86-%D8%AA%D8%B4%D8%A7%D9%81%D9%8A-%D8%A7%D9%84%D8%B1%D8%AD%D9%8A%D9%84-%D9%86%D9%87%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85" title="بطولة إسبانيا: فوز أول لبرشلونة بعد إعلان تشافي الرحيل نهاية الموسم وفوز متأخر لأتلتيكو"><h2>بطولة إسبانيا: فوز أول لبرشلونة بعد إعلان تشافي الرحيل نهاية الموسم وفوز متأخر لأتلتيكو</h2></a>
    </div>
    </div>
</div>
            </li>    </ol>

                                        <div class="o-aside-content__row o-aside-content__row--flex-end">
                    <a class="o-aside-content__see-more" href="/الأخبار-المستمرة">
                        كل الأخبار <span class="a-svg a-svg--picto-left-arrow"></span>
                    </a>
                </div>
                        </aside>
    
        <div
        class="m-block-ad "
        data-tms-ad-type="bigbox"
        data-tms-ad-status="idle"
        data-tms-ad-pos="1"
    >
        <div class="m-block-ad__label m-block-ad__label--report-enabled">
            <span class="m-block-ad__label__text">إعلان</span>
                        <button title="الإبلاغ عن هذا الإعلان" class="m-block-ad__label__report-link" rel="noopener" data-tms-ad-report><span class="a-svg a-svg--picto-report-ad-rtl"></span></button>
                    </div>
        <div class="m-block-ad__content">
        </div>
    </div>
</div>

        </div>
            </section>
        
        
                    
        
        
                    
                    <section class="t-content__section-pb">
                                

                        


<aside
    data-org-name="Revues de Presse"
    data-org-type="aside-content--highlighted"
    class="o-aside-content  o-aside-content--overflow-background o-aside-content--darker-background o-aside-content--highlighted">
    <div class="o-aside-content__row o-aside-content__row--center">
            <div class="o-aside-content__title a-aside-title"><span class="a-aside-title__content">كشك الصحف والمجلات</span></div>
                    </div>
                
        
                                    
                
    <div
        class="m-item-list-article  m-item-list-article--highlighted-main"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9/20240131-%D8%B5%D8%AD%D9%8A%D9%81%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A7%D9%88%D8%B3%D8%B7-%D8%A7%D9%84%D9%81%D8%B1%D9%82-%D8%A8%D9%8A%D9%86-%D9%88%D8%A7%D8%B4%D9%86%D8%B7%D9%86-%D9%88%D8%B7%D9%87%D8%B1%D8%A7%D9%86" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/5140c93a-5606-11ee-901a-005056bfb2b6/w:388/p:16x9/2023-09-18T061642Z_1895919327_RC2TA3A1G7UT_RTRMADP_3_IRAN-USA-DETAINEE%20%281%29.webp 388w,https://s.mc-doualiya.com/media/display/5140c93a-5606-11ee-901a-005056bfb2b6/w:720/p:16x9/2023-09-18T061642Z_1895919327_RC2TA3A1G7UT_RTRMADP_3_IRAN-USA-DETAINEE%20%281%29.webp 720w,https://s.mc-doualiya.com/media/display/5140c93a-5606-11ee-901a-005056bfb2b6/w:980/p:16x9/2023-09-18T061642Z_1895919327_RC2TA3A1G7UT_RTRMADP_3_IRAN-USA-DETAINEE%20%281%29.webp 980w"
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 66px), (min-width: 1024px) 464px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/5140c93a-5606-11ee-901a-005056bfb2b6/w:980/p:16x9/2023-09-18T061642Z_1895919327_RC2TA3A1G7UT_RTRMADP_3_IRAN-USA-DETAINEE%20%281%29.JPG" alt="علما الولايات المتحدة وإيران" srcset="https://s.mc-doualiya.com/media/display/5140c93a-5606-11ee-901a-005056bfb2b6/w:388/p:16x9/2023-09-18T061642Z_1895919327_RC2TA3A1G7UT_RTRMADP_3_IRAN-USA-DETAINEE%20%281%29.JPG 388w,https://s.mc-doualiya.com/media/display/5140c93a-5606-11ee-901a-005056bfb2b6/w:720/p:16x9/2023-09-18T061642Z_1895919327_RC2TA3A1G7UT_RTRMADP_3_IRAN-USA-DETAINEE%20%281%29.JPG 720w,https://s.mc-doualiya.com/media/display/5140c93a-5606-11ee-901a-005056bfb2b6/w:980/p:16x9/2023-09-18T061642Z_1895919327_RC2TA3A1G7UT_RTRMADP_3_IRAN-USA-DETAINEE%20%281%29.JPG 980w"
         sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 66px), (min-width: 1024px) 464px"
                     width="980"
             height="551"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">قراءة في الصحف العربية</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9/20240131-%D8%B5%D8%AD%D9%8A%D9%81%D8%A9-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A7%D9%88%D8%B3%D8%B7-%D8%A7%D9%84%D9%81%D8%B1%D9%82-%D8%A8%D9%8A%D9%86-%D9%88%D8%A7%D8%B4%D9%86%D8%B7%D9%86-%D9%88%D8%B7%D9%87%D8%B1%D8%A7%D9%86" data-article-item-link>
                            <h2>صحيفة الشرق الاوسط: الفرق بين واشنطن وطهران</h2>
                        </a></div>
                                </div>
        </div>
            </div>
        
            
            
<div class="o-layout-list o-layout-list--highlighted">
    
    <div class="o-layout-list__item l-m-100 l-t-100 l-d-100">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9/20240131-%D8%B5%D8%AD%D9%8A%D9%81%D8%A9-%D9%84%D9%88%D9%85%D9%86%D8%AF-%D8%A7%D9%84%D8%B6%D9%81%D8%A9-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%AD%D8%B1%D8%A8-%D8%A7%D9%84%D8%A3%D8%AE%D8%B1%D9%89-%D8%A7%D9%84%D8%AA%D9%8A-%D8%AA%D9%82%D9%88%D8%AF%D9%87%D8%A7-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/9c05c85a-a444-11ec-89bb-005056bf30b7/w:246/p:16x9/2022-02-18T153140Z_12996593.webp 246w,https://s.mc-doualiya.com/media/display/9c05c85a-a444-11ec-89bb-005056bf30b7/w:532/p:16x9/2022-02-18T153140Z_12996593.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/9c05c85a-a444-11ec-89bb-005056bf30b7/w:532/p:16x9/2022-02-18T153140Z_12996593.jpg" alt="عناصر من الجيش الإسرائيلي في الضفة الغربية" srcset="https://s.mc-doualiya.com/media/display/9c05c85a-a444-11ec-89bb-005056bf30b7/w:246/p:16x9/2022-02-18T153140Z_12996593.jpg 246w,https://s.mc-doualiya.com/media/display/9c05c85a-a444-11ec-89bb-005056bf30b7/w:532/p:16x9/2022-02-18T153140Z_12996593.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">قراءة في الصحف الفرنسية‬</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9/20240131-%D8%B5%D8%AD%D9%8A%D9%81%D8%A9-%D9%84%D9%88%D9%85%D9%86%D8%AF-%D8%A7%D9%84%D8%B6%D9%81%D8%A9-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%AD%D8%B1%D8%A8-%D8%A7%D9%84%D8%A3%D8%AE%D8%B1%D9%89-%D8%A7%D9%84%D8%AA%D9%8A-%D8%AA%D9%82%D9%88%D8%AF%D9%87%D8%A7-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84" data-article-item-link>
                            <h2>صحيفة لومند: الضفة الغربية: الحرب الأخرى التي تقودها إسرائيل</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-100 l-d-100">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9/20240130-%D8%B5%D8%AD%D9%8A%D9%81%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8-%D8%A7%D9%84%D9%84%D9%86%D8%AF%D9%86%D9%8A%D8%A9-%D9%85%D9%82%D8%A7%D8%B1%D8%A8%D8%A9-%D9%85%D8%B5%D8%B1%D9%8A%D8%A9-%D9%88%D8%A7%D9%82%D8%B9%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84-%D9%85%D8%B9-%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D9%86" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/aee16f8c-5aca-11ed-9f09-005056bf30b7/w:246/p:16x9/sommet_arabe_algerie.webp 246w,https://s.mc-doualiya.com/media/display/aee16f8c-5aca-11ed-9f09-005056bf30b7/w:532/p:16x9/sommet_arabe_algerie.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/aee16f8c-5aca-11ed-9f09-005056bf30b7/w:532/p:16x9/sommet_arabe_algerie.jpg" alt="الرئيس المصري عبد الفتاح السيسي ووزير خارجية مصر سامح شكري في قمة الجزائر(02/11/2022)" srcset="https://s.mc-doualiya.com/media/display/aee16f8c-5aca-11ed-9f09-005056bf30b7/w:246/p:16x9/sommet_arabe_algerie.jpg 246w,https://s.mc-doualiya.com/media/display/aee16f8c-5aca-11ed-9f09-005056bf30b7/w:532/p:16x9/sommet_arabe_algerie.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">قراءة في الصحف العربية</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9/20240130-%D8%B5%D8%AD%D9%8A%D9%81%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8-%D8%A7%D9%84%D9%84%D9%86%D8%AF%D9%86%D9%8A%D8%A9-%D9%85%D9%82%D8%A7%D8%B1%D8%A8%D8%A9-%D9%85%D8%B5%D8%B1%D9%8A%D8%A9-%D9%88%D8%A7%D9%82%D8%B9%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D8%B9%D8%A7%D9%85%D9%84-%D9%85%D8%B9-%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A7%D9%86" data-article-item-link>
                            <h2>صحيفة العرب اللندنية: مقاربة مصرية واقعية للتعامل مع السودان</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-100 l-d-100">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9/20240130-%D8%B5%D8%AD%D9%8A%D9%81%D8%A9-%D9%84%D9%88%D9%81%D9%8A%D8%BA%D8%A7%D8%B1%D9%88-%D8%A3%D8%B2%D9%85%D8%A9-%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9-%D8%AA%D8%AA%D8%AD%D9%88%D9%84-%D8%A5%D9%84%D9%89-%D9%85%D9%88%D8%A7%D8%AC%D9%87%D8%A9-%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D9%84%D8%A7%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/3f1a36fc-9e80-11ee-8cdb-005056a97e36/w:246/p:16x9/2023-12-18T183306Z_746658081_RC2KZ4AEY3PH_RTRMADP_3_MIGRATION-USA-MEXICO.webp 246w,https://s.mc-doualiya.com/media/display/3f1a36fc-9e80-11ee-8cdb-005056a97e36/w:532/p:16x9/2023-12-18T183306Z_746658081_RC2KZ4AEY3PH_RTRMADP_3_MIGRATION-USA-MEXICO.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/3f1a36fc-9e80-11ee-8cdb-005056a97e36/w:532/p:16x9/2023-12-18T183306Z_746658081_RC2KZ4AEY3PH_RTRMADP_3_MIGRATION-USA-MEXICO.JPG" alt="نهر ريو برافو على الحدود بين الولايات المتحدة و المكسيك" srcset="https://s.mc-doualiya.com/media/display/3f1a36fc-9e80-11ee-8cdb-005056a97e36/w:246/p:16x9/2023-12-18T183306Z_746658081_RC2KZ4AEY3PH_RTRMADP_3_MIGRATION-USA-MEXICO.JPG 246w,https://s.mc-doualiya.com/media/display/3f1a36fc-9e80-11ee-8cdb-005056a97e36/w:532/p:16x9/2023-12-18T183306Z_746658081_RC2KZ4AEY3PH_RTRMADP_3_MIGRATION-USA-MEXICO.JPG 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">قراءة في الصحف الفرنسية‬</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%82%D8%B1%D8%A7%D8%A1%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9/20240130-%D8%B5%D8%AD%D9%8A%D9%81%D8%A9-%D9%84%D9%88%D9%81%D9%8A%D8%BA%D8%A7%D8%B1%D9%88-%D8%A3%D8%B2%D9%85%D8%A9-%D8%A7%D9%84%D9%87%D8%AC%D8%B1%D8%A9-%D8%AA%D8%AA%D8%AD%D9%88%D9%84-%D8%A5%D9%84%D9%89-%D9%85%D9%88%D8%A7%D8%AC%D9%87%D8%A9-%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D9%88%D9%84%D8%A7%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9" data-article-item-link>
                            <h2>صحيفة لوفيغارو: أزمة الهجرة تتحول إلى مواجهة دستورية في الولايات المتحدة</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>
    
    
                                        <div class="o-aside-content__row o-aside-content__row--flex-end">
                    <a class="o-aside-content__see-more" href="/كشك-الصحف-والمجلات/">
                        كل المحتويات <span class="a-svg a-svg--picto-left-arrow"></span>
                    </a>
                </div>
                        </aside>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                
<div class="o-layout-list ">
    
    <div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7-%D8%AA%D8%AF%D8%AE%D9%84-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1-%D9%83%D8%AD%D8%A7%D8%B1%D8%B3-%D9%84%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-%D9%85%D8%A7-%D9%87%D9%8A-%D8%A7%D9%84%D8%AA%D8%A8%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%D9%8A%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/bdccf08a-c080-11ee-b452-005056a97e36/w:177/p:16x9/IMG_0533.webp 177w,https://s.mc-doualiya.com/media/display/bdccf08a-c080-11ee-b452-005056a97e36/w:388/p:16x9/IMG_0533.webp 388w,https://s.mc-doualiya.com/media/display/bdccf08a-c080-11ee-b452-005056a97e36/w:480/p:16x9/IMG_0533.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/bdccf08a-c080-11ee-b452-005056a97e36/w:480/p:16x9/IMG_0533.jpeg" alt="بواخر عسكرية أمريكية ومصرية في البحر الأحمر" srcset="https://s.mc-doualiya.com/media/display/bdccf08a-c080-11ee-b452-005056a97e36/w:177/p:16x9/IMG_0533.jpeg 177w,https://s.mc-doualiya.com/media/display/bdccf08a-c080-11ee-b452-005056a97e36/w:388/p:16x9/IMG_0533.jpeg 388w,https://s.mc-doualiya.com/media/display/bdccf08a-c080-11ee-b452-005056a97e36/w:480/p:16x9/IMG_0533.jpeg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T22:40:25+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7-%D8%AA%D8%AF%D8%AE%D9%84-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1-%D9%83%D8%AD%D8%A7%D8%B1%D8%B3-%D9%84%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-%D9%85%D8%A7-%D9%87%D9%8A-%D8%A7%D9%84%D8%AA%D8%A8%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF%D9%8A%D8%A9" data-article-item-link>
                            <h2>أوروبا تدخل البحر الأحمر كحارس للتجارة العالمية … ما هي التبعات الاقتصادية؟</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/20240131-%D9%87%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D8%B4%D8%AD%D9%8A%D9%86-%D8%AA%D8%B6%D8%B9-%D8%A3%D9%88%D9%83%D8%B1%D8%A7%D9%86%D9%8A%D8%A7-%D9%81%D9%8A-%D9%82%D9%84%D8%A8-%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B1%D9%88%D8%B3%D9%8A%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/341dc3f6-8c32-11ed-b100-005056bfb2b6/w:177/p:16x9/AP22362520287752.webp 177w,https://s.mc-doualiya.com/media/display/341dc3f6-8c32-11ed-b100-005056bfb2b6/w:388/p:16x9/AP22362520287752.webp 388w,https://s.mc-doualiya.com/media/display/341dc3f6-8c32-11ed-b100-005056bfb2b6/w:480/p:16x9/AP22362520287752.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/341dc3f6-8c32-11ed-b100-005056bfb2b6/w:480/p:16x9/AP22362520287752.jpg" alt="الرئيس الروسي فلاديمير بوتين" srcset="https://s.mc-doualiya.com/media/display/341dc3f6-8c32-11ed-b100-005056bfb2b6/w:177/p:16x9/AP22362520287752.jpg 177w,https://s.mc-doualiya.com/media/display/341dc3f6-8c32-11ed-b100-005056bfb2b6/w:388/p:16x9/AP22362520287752.jpg 388w,https://s.mc-doualiya.com/media/display/341dc3f6-8c32-11ed-b100-005056bfb2b6/w:480/p:16x9/AP22362520287752.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T23:34:40+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/20240131-%D9%87%D9%88%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D8%B4%D8%AD%D9%8A%D9%86-%D8%AA%D8%B6%D8%B9-%D8%A3%D9%88%D9%83%D8%B1%D8%A7%D9%86%D9%8A%D8%A7-%D9%81%D9%8A-%D9%82%D9%84%D8%A8-%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%86%D8%AA%D8%AE%D8%A7%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D8%B1%D9%88%D8%B3%D9%8A%D8%A9" data-article-item-link>
                            <h2>هوية المرشحين تضع أوكرانيا في قلب الانتخابات الانتخابية الروسية</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/20240131-%D8%B3%D9%8A%D9%84%D9%8A%D9%86-%D8%AF%D9%8A%D9%88%D9%86-%D9%86%D8%AC%D9%85%D8%A9-%D8%A7%D9%84%D8%A8%D9%88%D8%A8-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-%D8%AA%D8%AD%D9%83%D9%8A-%D9%85%D8%B9%D8%A7%D9%86%D8%A7%D8%AA%D9%87%D8%A7-%D9%85%D8%B9-%D9%85%D8%B1%D8%B6%D9%8D-%D9%86%D8%A7%D8%AF%D8%B1-%D9%81%D9%8A-%D9%81%D9%8A%D9%84%D9%85-%D9%88%D8%AB%D8%A7%D8%A6%D9%82%D9%8A" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/3f7d36c6-c04f-11ee-8fd1-005056bfb2b6/w:177/p:16x9/celine_dion-1.webp 177w,https://s.mc-doualiya.com/media/display/3f7d36c6-c04f-11ee-8fd1-005056bfb2b6/w:388/p:16x9/celine_dion-1.webp 388w,https://s.mc-doualiya.com/media/display/3f7d36c6-c04f-11ee-8fd1-005056bfb2b6/w:480/p:16x9/celine_dion-1.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/3f7d36c6-c04f-11ee-8fd1-005056bfb2b6/w:480/p:16x9/celine_dion-1.jpg" alt="الفنانة سيلين ديون، الكيبيك، عام 2019" srcset="https://s.mc-doualiya.com/media/display/3f7d36c6-c04f-11ee-8fd1-005056bfb2b6/w:177/p:16x9/celine_dion-1.jpg 177w,https://s.mc-doualiya.com/media/display/3f7d36c6-c04f-11ee-8fd1-005056bfb2b6/w:388/p:16x9/celine_dion-1.jpg 388w,https://s.mc-doualiya.com/media/display/3f7d36c6-c04f-11ee-8fd1-005056bfb2b6/w:480/p:16x9/celine_dion-1.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T17:49:35+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D8%A7/20240131-%D8%B3%D9%8A%D9%84%D9%8A%D9%86-%D8%AF%D9%8A%D9%88%D9%86-%D9%86%D8%AC%D9%85%D8%A9-%D8%A7%D9%84%D8%A8%D9%88%D8%A8-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-%D8%AA%D8%AD%D9%83%D9%8A-%D9%85%D8%B9%D8%A7%D9%86%D8%A7%D8%AA%D9%87%D8%A7-%D9%85%D8%B9-%D9%85%D8%B1%D8%B6%D9%8D-%D9%86%D8%A7%D8%AF%D8%B1-%D9%81%D9%8A-%D9%81%D9%8A%D9%84%D9%85-%D9%88%D8%AB%D8%A7%D8%A6%D9%82%D9%8A" data-article-item-link>
                            <h2>سيلين ديون نجمة البوب العالمية تحكي معاناتها مع مرضٍ نادر في فيلم وثائقي</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/20240131-%D8%AF%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8-%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%85%D8%A8%D9%8A%D8%A9-2024-%D9%81%D9%8A-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D9%81%D8%B1%D9%8A%D9%82-%D9%85%D9%86-300-%D8%B7%D8%A7%D9%87%D9%8A-%D9%8A%D8%B3%D8%AA%D8%B9%D8%AF%D9%88%D9%86-%D9%84%D8%A5%D8%B7%D8%B9%D8%A7%D9%85-15-%D8%A3%D9%84%D9%81-%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/97bb82c0-c03b-11ee-8db0-005056a97e36/w:177/p:16x9/Paris%202024%20pigeons.webp 177w,https://s.mc-doualiya.com/media/display/97bb82c0-c03b-11ee-8db0-005056a97e36/w:388/p:16x9/Paris%202024%20pigeons.webp 388w,https://s.mc-doualiya.com/media/display/97bb82c0-c03b-11ee-8db0-005056a97e36/w:480/p:16x9/Paris%202024%20pigeons.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/97bb82c0-c03b-11ee-8db0-005056a97e36/w:480/p:16x9/Paris%202024%20pigeons.jpg" alt="شعار الألعاب الأولمبية باريس 2024 أمام برج إيفل" srcset="https://s.mc-doualiya.com/media/display/97bb82c0-c03b-11ee-8db0-005056a97e36/w:177/p:16x9/Paris%202024%20pigeons.jpg 177w,https://s.mc-doualiya.com/media/display/97bb82c0-c03b-11ee-8db0-005056a97e36/w:388/p:16x9/Paris%202024%20pigeons.jpg 388w,https://s.mc-doualiya.com/media/display/97bb82c0-c03b-11ee-8db0-005056a97e36/w:480/p:16x9/Paris%202024%20pigeons.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T17:18:35+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/20240131-%D8%AF%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8-%D8%A7%D9%84%D8%A3%D9%88%D9%84%D9%85%D8%A8%D9%8A%D8%A9-2024-%D9%81%D9%8A-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D9%81%D8%B1%D9%8A%D9%82-%D9%85%D9%86-300-%D8%B7%D8%A7%D9%87%D9%8A-%D9%8A%D8%B3%D8%AA%D8%B9%D8%AF%D9%88%D9%86-%D9%84%D8%A5%D8%B7%D8%B9%D8%A7%D9%85-15-%D8%A3%D9%84%D9%81-%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A" data-article-item-link>
                            <h2>دورة الألعاب الأولمبية 2024 في باريس: فريق من 300 طاهي يستعدون لإطعام 15 ألف رياضي</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%AC%D9%88%D9%84%D8%AF%D9%85%D8%A7%D9%86-%D8%B3%D8%A7%D9%83%D8%B3-%D9%88%D8%A8%D9%86%D9%83-%D8%A8%D9%8A%D9%83%D8%AA%D9%8A%D8%AA-%D9%8A%D9%86%D8%B5%D8%AD%D8%A7%D9%86-%D8%B9%D9%85%D9%84%D8%A7%D8%A6%D9%87%D9%85-%D8%A8%D8%B4%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D9%86%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/e1f40d16-91a8-11ed-91fe-005056a90284/w:177/p:16x9/000_336E3TA.webp 177w,https://s.mc-doualiya.com/media/display/e1f40d16-91a8-11ed-91fe-005056a90284/w:388/p:16x9/000_336E3TA.webp 388w,https://s.mc-doualiya.com/media/display/e1f40d16-91a8-11ed-91fe-005056a90284/w:480/p:16x9/000_336E3TA.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/e1f40d16-91a8-11ed-91fe-005056a90284/w:480/p:16x9/000_336E3TA.jpg" alt="مجموعة عملات بينها الجنيه المصري والدولار الأمريكي" srcset="https://s.mc-doualiya.com/media/display/e1f40d16-91a8-11ed-91fe-005056a90284/w:177/p:16x9/000_336E3TA.jpg 177w,https://s.mc-doualiya.com/media/display/e1f40d16-91a8-11ed-91fe-005056a90284/w:388/p:16x9/000_336E3TA.jpg 388w,https://s.mc-doualiya.com/media/display/e1f40d16-91a8-11ed-91fe-005056a90284/w:480/p:16x9/000_336E3TA.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T18:24:43+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%AC%D9%88%D9%84%D8%AF%D9%85%D8%A7%D9%86-%D8%B3%D8%A7%D9%83%D8%B3-%D9%88%D8%A8%D9%86%D9%83-%D8%A8%D9%8A%D9%83%D8%AA%D9%8A%D8%AA-%D9%8A%D9%86%D8%B5%D8%AD%D8%A7%D9%86-%D8%B9%D9%85%D9%84%D8%A7%D8%A6%D9%87%D9%85-%D8%A8%D8%B4%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%B3%D9%86%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9" data-article-item-link>
                            <h2>جولدمان ساكس وبنك بيكتيت ينصحان عملائهم بشراء السندات المصرية</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A7%D9%84%D8%AD%D9%88%D8%AB%D9%8A%D9%88%D9%86-%D9%8A%D8%AA%D9%88%D8%B9%D8%AF%D9%88%D9%86-%D8%A8%D8%A7%D9%84%D9%85%D8%B2%D9%8A%D8%AF-%D9%85%D9%86-%D8%A7%D9%84%D9%87%D8%AC%D9%85%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D9%8A%D9%88%D9%86-%D9%8A%D8%B1%D9%8A%D8%AF%D9%88%D9%86-%D8%A5%D8%B7%D9%84%D8%A7%D9%82-%D8%B9%D9%85%D9%84%D9%8A%D8%A9-%D8%A3%D8%B3%D8%A8%D9%8A%D8%AF%D9%8A%D8%B3-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/4629adfe-9cf7-11ee-8ead-005056bfb2b6/w:177/p:16x9/2023-11-20T180024Z_1422471184_RC25H4A5GB05_RTRMADP_3_ISRAEL-PALESTINIANS-YEMEN-HOUTHI.webp 177w,https://s.mc-doualiya.com/media/display/4629adfe-9cf7-11ee-8ead-005056bfb2b6/w:388/p:16x9/2023-11-20T180024Z_1422471184_RC25H4A5GB05_RTRMADP_3_ISRAEL-PALESTINIANS-YEMEN-HOUTHI.webp 388w,https://s.mc-doualiya.com/media/display/4629adfe-9cf7-11ee-8ead-005056bfb2b6/w:480/p:16x9/2023-11-20T180024Z_1422471184_RC25H4A5GB05_RTRMADP_3_ISRAEL-PALESTINIANS-YEMEN-HOUTHI.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/4629adfe-9cf7-11ee-8ead-005056bfb2b6/w:480/p:16x9/2023-11-20T180024Z_1422471184_RC25H4A5GB05_RTRMADP_3_ISRAEL-PALESTINIANS-YEMEN-HOUTHI.JPG" alt="مقاتلون حوثيون يفتحون باب قمرة القيادة على سطح سفينة في البحر الأحمر" srcset="https://s.mc-doualiya.com/media/display/4629adfe-9cf7-11ee-8ead-005056bfb2b6/w:177/p:16x9/2023-11-20T180024Z_1422471184_RC25H4A5GB05_RTRMADP_3_ISRAEL-PALESTINIANS-YEMEN-HOUTHI.JPG 177w,https://s.mc-doualiya.com/media/display/4629adfe-9cf7-11ee-8ead-005056bfb2b6/w:388/p:16x9/2023-11-20T180024Z_1422471184_RC25H4A5GB05_RTRMADP_3_ISRAEL-PALESTINIANS-YEMEN-HOUTHI.JPG 388w,https://s.mc-doualiya.com/media/display/4629adfe-9cf7-11ee-8ead-005056bfb2b6/w:480/p:16x9/2023-11-20T180024Z_1422471184_RC25H4A5GB05_RTRMADP_3_ISRAEL-PALESTINIANS-YEMEN-HOUTHI.JPG 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T17:40:38+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A7%D9%84%D8%AD%D9%88%D8%AB%D9%8A%D9%88%D9%86-%D9%8A%D8%AA%D9%88%D8%B9%D8%AF%D9%88%D9%86-%D8%A8%D8%A7%D9%84%D9%85%D8%B2%D9%8A%D8%AF-%D9%85%D9%86-%D8%A7%D9%84%D9%87%D8%AC%D9%85%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D9%8A%D9%88%D9%86-%D9%8A%D8%B1%D9%8A%D8%AF%D9%88%D9%86-%D8%A5%D8%B7%D9%84%D8%A7%D9%82-%D8%B9%D9%85%D9%84%D9%8A%D8%A9-%D8%A3%D8%B3%D8%A8%D9%8A%D8%AF%D9%8A%D8%B3-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D8%AD%D8%B1-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1" data-article-item-link>
                            <h2>الحوثيون يتوعدون بالمزيد من الهجمات والأوروبيون يريدون إطلاق عملية &quot;أسبيديس&quot; في البحر الأحمر</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%88%D8%A7%D8%B4%D9%86%D8%B7%D9%86-%D8%AA%D8%AA%D9%88%D8%B9%D9%91%D8%AF-%D8%A8%D8%A7%D9%84%D8%B1%D8%AF%D9%91-%D8%B9%D9%84%D9%89-%D9%85%D9%82%D8%AA%D9%84-%D8%AC%D9%86%D9%88%D8%AF%D9%87%D8%A7-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86-%D9%88%D8%AA%D8%AD%D9%85%D9%91%D9%84-%D8%A5%D9%8A%D8%B1%D8%A7%D9%86-%D9%85%D8%B3%D8%A4%D9%88%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D9%87%D8%AC%D9%85%D8%A7%D8%AA-%D8%B9%D9%84%D9%89-%D9%85%D8%B5%D8%A7%D9%84%D8%AD%D9%87%D8%A7" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/ae43c2e0-c041-11ee-8543-005056bfb2b6/w:177/p:16x9/joe_biden-2.webp 177w,https://s.mc-doualiya.com/media/display/ae43c2e0-c041-11ee-8543-005056bfb2b6/w:388/p:16x9/joe_biden-2.webp 388w,https://s.mc-doualiya.com/media/display/ae43c2e0-c041-11ee-8543-005056bfb2b6/w:480/p:16x9/joe_biden-2.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/ae43c2e0-c041-11ee-8543-005056bfb2b6/w:480/p:16x9/joe_biden-2.jpg" alt="الرئيس الأمريكي جو بايدن" srcset="https://s.mc-doualiya.com/media/display/ae43c2e0-c041-11ee-8543-005056bfb2b6/w:177/p:16x9/joe_biden-2.jpg 177w,https://s.mc-doualiya.com/media/display/ae43c2e0-c041-11ee-8543-005056bfb2b6/w:388/p:16x9/joe_biden-2.jpg 388w,https://s.mc-doualiya.com/media/display/ae43c2e0-c041-11ee-8543-005056bfb2b6/w:480/p:16x9/joe_biden-2.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T17:07:43+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%88%D8%A7%D8%B4%D9%86%D8%B7%D9%86-%D8%AA%D8%AA%D9%88%D8%B9%D9%91%D8%AF-%D8%A8%D8%A7%D9%84%D8%B1%D8%AF%D9%91-%D8%B9%D9%84%D9%89-%D9%85%D9%82%D8%AA%D9%84-%D8%AC%D9%86%D9%88%D8%AF%D9%87%D8%A7-%D8%A7%D9%84%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86-%D9%88%D8%AA%D8%AD%D9%85%D9%91%D9%84-%D8%A5%D9%8A%D8%B1%D8%A7%D9%86-%D9%85%D8%B3%D8%A4%D9%88%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D9%87%D8%AC%D9%85%D8%A7%D8%AA-%D8%B9%D9%84%D9%89-%D9%85%D8%B5%D8%A7%D9%84%D8%AD%D9%87%D8%A7" data-article-item-link>
                            <h2>واشنطن تتوعّد بالردّ على مقتل جنودها الثلاثة في الأردن... وتحمّل إيران مسؤولية الهجمات على مصالحها</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D9%88%D9%86-%D9%8A%D8%B9%D9%8A%D8%AF%D9%88%D9%86-%D8%AF%D9%81%D9%86-%D8%AC%D8%AB%D8%AB-%D9%86%D8%A8%D8%B4%D8%AA%D9%87%D8%A7-%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A9-%D8%A3%D8%AB%D9%86%D8%A7%D8%A1-%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D8%AD%D8%AB-%D8%B9%D9%86-%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D8%AC%D8%B2%D9%8A%D9%86-%D9%84%D8%AF%D9%89-%D8%A7%D9%84%D9%81%D8%B5%D8%A7%D8%A6%D9%84" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/8c63c33c-b6be-11ee-a204-005056bf30b7/w:177/p:16x9/000_34FQ2K6.webp 177w,https://s.mc-doualiya.com/media/display/8c63c33c-b6be-11ee-a204-005056bf30b7/w:388/p:16x9/000_34FQ2K6.webp 388w,https://s.mc-doualiya.com/media/display/8c63c33c-b6be-11ee-a204-005056bf30b7/w:480/p:16x9/000_34FQ2K6.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/8c63c33c-b6be-11ee-a204-005056bf30b7/w:480/p:16x9/000_34FQ2K6.jpg" alt="جثث ضحايا القصف الإسرائيلي الفلسطينيين في 18 يناير 2024، في رفح بجنوب قطاع غزة." srcset="https://s.mc-doualiya.com/media/display/8c63c33c-b6be-11ee-a204-005056bf30b7/w:177/p:16x9/000_34FQ2K6.jpg 177w,https://s.mc-doualiya.com/media/display/8c63c33c-b6be-11ee-a204-005056bf30b7/w:388/p:16x9/000_34FQ2K6.jpg 388w,https://s.mc-doualiya.com/media/display/8c63c33c-b6be-11ee-a204-005056bf30b7/w:480/p:16x9/000_34FQ2K6.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T16:41:42+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D9%88%D9%86-%D9%8A%D8%B9%D9%8A%D8%AF%D9%88%D9%86-%D8%AF%D9%81%D9%86-%D8%AC%D8%AB%D8%AB-%D9%86%D8%A8%D8%B4%D8%AA%D9%87%D8%A7-%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A9-%D8%A3%D8%AB%D9%86%D8%A7%D8%A1-%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D8%AD%D8%AB-%D8%B9%D9%86-%D8%A7%D9%84%D9%85%D8%AD%D8%AA%D8%AC%D8%B2%D9%8A%D9%86-%D9%84%D8%AF%D9%89-%D8%A7%D9%84%D9%81%D8%B5%D8%A7%D8%A6%D9%84" data-article-item-link>
                            <h2>الفلسطينيون يعيدون دفن جثث نبشتها القوات الإسرائيلية أثناء عمليات البحث عن المحتجزين لدى الفصائل</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image "
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/20240131-%D9%85%D8%AE%D8%A7%D9%88%D9%81-%D8%B9%D8%AF%D9%8A%D8%AF%D8%A9-%D8%A8%D9%8A%D9%86-%D8%B5%D9%86%D8%A7%D8%B9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89-%D9%85%D9%86-%D8%A7%D8%B3%D8%AA%D9%8A%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D8%B9%D9%84%D9%89-%D9%82%D9%88%D8%AA%D9%87%D9%85-%D9%81%D9%8A-%D8%A7%D9%84%D9%82%D8%B1%D9%8A%D8%A8-%D8%A7%D9%84%D8%B9%D8%A7%D8%AC%D9%84" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/463267e0-c02f-11ee-8489-005056a97e36/w:177/p:16x9/AI%20piano.webp 177w,https://s.mc-doualiya.com/media/display/463267e0-c02f-11ee-8489-005056a97e36/w:388/p:16x9/AI%20piano.webp 388w,https://s.mc-doualiya.com/media/display/463267e0-c02f-11ee-8489-005056a97e36/w:480/p:16x9/AI%20piano.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/463267e0-c02f-11ee-8489-005056a97e36/w:480/p:16x9/AI%20piano.jpg" alt="عازفة البيانو اليابانية هيروكو هيغاشينو التي ولدت بثلاثة أصابع في يدها اليمنى تعزف سينفونية بيتهوفن المقطوعة التاسعة على بيانو معزز بتكنولوجيا الذكاء الاصطناعي بمصاحبة أوركسترا يوكوهاما في طوكيو 20/12/2023" srcset="https://s.mc-doualiya.com/media/display/463267e0-c02f-11ee-8489-005056a97e36/w:177/p:16x9/AI%20piano.jpg 177w,https://s.mc-doualiya.com/media/display/463267e0-c02f-11ee-8489-005056a97e36/w:388/p:16x9/AI%20piano.jpg 388w,https://s.mc-doualiya.com/media/display/463267e0-c02f-11ee-8489-005056a97e36/w:480/p:16x9/AI%20piano.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T16:27:25+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/20240131-%D9%85%D8%AE%D8%A7%D9%88%D9%81-%D8%B9%D8%AF%D9%8A%D8%AF%D8%A9-%D8%A8%D9%8A%D9%86-%D8%B5%D9%86%D8%A7%D8%B9-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89-%D9%85%D9%86-%D8%A7%D8%B3%D8%AA%D9%8A%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D8%B9%D9%84%D9%89-%D9%82%D9%88%D8%AA%D9%87%D9%85-%D9%81%D9%8A-%D8%A7%D9%84%D9%82%D8%B1%D9%8A%D8%A8-%D8%A7%D9%84%D8%B9%D8%A7%D8%AC%D9%84" data-article-item-link>
                            <h2>مخاوف عديدة بين صناع الموسيقى من استيلاء الذكاء الاصطناعي على قوتهم في القريب العاجل</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                

            


<aside
    data-org-name="7"
    data-org-type="aside-content--sponsors"
    class="o-aside-content  o-aside-content--overflow-background">
    <div class="o-aside-content__row o-aside-content__row--center">
            <div class="o-aside-content__title a-aside-title"><span class="a-aside-title__content">بودكاست أصلي</span></div>
                    </div>
                
        
<div class="o-layout-list ">
    
    <div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                        
                
    <div
        class="m-item-list-article  m-item-list-article--hor-to-ver"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A8%D9%8A%D8%A6%D8%A9-%D9%88%D8%B4%D9%8A%D8%A7%D9%83%D8%A9/20231002-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-15-%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%8A%D8%A9-%D9%85%D8%B4-%D8%A8%D9%84%D8%B7%D8%AC%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/ca88fa4c-74b1-11ed-be3d-005056a90284/w:177/p:16x9/main-1920x1080-Environnement.webp 177w,https://s.mc-doualiya.com/media/display/ca88fa4c-74b1-11ed-be3d-005056a90284/w:388/p:16x9/main-1920x1080-Environnement.webp 388w,https://s.mc-doualiya.com/media/display/ca88fa4c-74b1-11ed-be3d-005056a90284/w:480/p:16x9/main-1920x1080-Environnement.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/ca88fa4c-74b1-11ed-be3d-005056a90284/w:480/p:16x9/main-1920x1080-Environnement.jpg" alt="ㅤ" srcset="https://s.mc-doualiya.com/media/display/ca88fa4c-74b1-11ed-be3d-005056a90284/w:177/p:16x9/main-1920x1080-Environnement.jpg 177w,https://s.mc-doualiya.com/media/display/ca88fa4c-74b1-11ed-be3d-005056a90284/w:388/p:16x9/main-1920x1080-Environnement.jpg 388w,https://s.mc-doualiya.com/media/display/ca88fa4c-74b1-11ed-be3d-005056a90284/w:480/p:16x9/main-1920x1080-Environnement.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2023-10-02T17:00:03+02:00">
                                    02/10/2023
                                </time></div></div><div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A8%D9%8A%D8%A6%D8%A9-%D9%88%D8%B4%D9%8A%D8%A7%D9%83%D8%A9/20231002-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-15-%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%8A%D8%A9-%D9%85%D8%B4-%D8%A8%D9%84%D8%B7%D8%AC%D8%A9" data-article-item-link>
                            <h2>الحلقة 15: الحماية مش بلطجة</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                        
                
    <div
        class="m-item-list-article  m-item-list-article--hor-to-ver"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D8%AD%D9%83%D9%8A%D9%84%D9%8A/20230328-%D9%87%D9%84-%D8%B9%D8%AF%D9%85-%D8%A7%D9%84%D9%82%D8%B0%D9%81-%D8%B9%D9%86%D8%AF-%D9%85%D9%85%D8%A7%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%AC%D9%86%D8%B3-%D8%A3%D9%85%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D9%84%D8%AF%D9%89-%D8%A7%D9%84%D8%B4%D8%B1%D9%8A%D9%83" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/8f23983a-4ef1-11ed-844d-005056a90284/w:177/p:16x9/main-1920x1080-pedagogique%20et%20sans%20jugement.webp 177w,https://s.mc-doualiya.com/media/display/8f23983a-4ef1-11ed-844d-005056a90284/w:388/p:16x9/main-1920x1080-pedagogique%20et%20sans%20jugement.webp 388w,https://s.mc-doualiya.com/media/display/8f23983a-4ef1-11ed-844d-005056a90284/w:480/p:16x9/main-1920x1080-pedagogique%20et%20sans%20jugement.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/8f23983a-4ef1-11ed-844d-005056a90284/w:480/p:16x9/main-1920x1080-pedagogique%20et%20sans%20jugement.jpg" alt="ㅤ" srcset="https://s.mc-doualiya.com/media/display/8f23983a-4ef1-11ed-844d-005056a90284/w:177/p:16x9/main-1920x1080-pedagogique%20et%20sans%20jugement.jpg 177w,https://s.mc-doualiya.com/media/display/8f23983a-4ef1-11ed-844d-005056a90284/w:388/p:16x9/main-1920x1080-pedagogique%20et%20sans%20jugement.jpg 388w,https://s.mc-doualiya.com/media/display/8f23983a-4ef1-11ed-844d-005056a90284/w:480/p:16x9/main-1920x1080-pedagogique%20et%20sans%20jugement.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2023-03-28T16:28:07+02:00">
                                    28/03/2023
                                </time></div></div><div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D8%AD%D9%83%D9%8A%D9%84%D9%8A/20230328-%D9%87%D9%84-%D8%B9%D8%AF%D9%85-%D8%A7%D9%84%D9%82%D8%B0%D9%81-%D8%B9%D9%86%D8%AF-%D9%85%D9%85%D8%A7%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%AC%D9%86%D8%B3-%D8%A3%D9%85%D8%B1-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D9%84%D8%AF%D9%89-%D8%A7%D9%84%D8%B4%D8%B1%D9%8A%D9%83" data-article-item-link>
                            <h2>هل عدم القذف عند ممارسة الجنس أمر طبيعي لدى الشريك؟</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                        
                
    <div
        class="m-item-list-article  m-item-list-article--hor-to-ver"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA-%D8%A3%D8%B5%D9%84%D9%8A-%D8%A7%D8%AD%D9%83%D9%8A%D9%84%D9%8A/20220616-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-10-%D9%85%D9%86-10-%D9%88%D9%84%D8%A7%D8%AF%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D8%B9%D9%85%D8%A7%D8%AF-%D8%A3%D9%88%D9%81%D9%82%D9%8A%D8%B1" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/6660f690-81ff-11ed-80a1-005056a90284/w:177/p:16x9/main-1920x1080-racontemoi-non-incarn%C3%A9e.webp 177w,https://s.mc-doualiya.com/media/display/6660f690-81ff-11ed-80a1-005056a90284/w:388/p:16x9/main-1920x1080-racontemoi-non-incarn%C3%A9e.webp 388w,https://s.mc-doualiya.com/media/display/6660f690-81ff-11ed-80a1-005056a90284/w:480/p:16x9/main-1920x1080-racontemoi-non-incarn%C3%A9e.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/6660f690-81ff-11ed-80a1-005056a90284/w:480/p:16x9/main-1920x1080-racontemoi-non-incarn%C3%A9e.jpg" alt="ㅤ" srcset="https://s.mc-doualiya.com/media/display/6660f690-81ff-11ed-80a1-005056a90284/w:177/p:16x9/main-1920x1080-racontemoi-non-incarn%C3%A9e.jpg 177w,https://s.mc-doualiya.com/media/display/6660f690-81ff-11ed-80a1-005056a90284/w:388/p:16x9/main-1920x1080-racontemoi-non-incarn%C3%A9e.jpg 388w,https://s.mc-doualiya.com/media/display/6660f690-81ff-11ed-80a1-005056a90284/w:480/p:16x9/main-1920x1080-racontemoi-non-incarn%C3%A9e.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2022-06-16T13:48:56+02:00">
                                    16/06/2022
                                </time></div></div><div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA-%D8%A3%D8%B5%D9%84%D9%8A-%D8%A7%D8%AD%D9%83%D9%8A%D9%84%D9%8A/20220616-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-10-%D9%85%D9%86-10-%D9%88%D9%84%D8%A7%D8%AF%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D8%B9%D9%85%D8%A7%D8%AF-%D8%A3%D9%88%D9%81%D9%82%D9%8A%D8%B1" data-article-item-link>
                            <h2>الحلقة 10 من 10: &quot;ولادة جديدة&quot;: عماد أوفقير</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>

                                        <div class="o-aside-content__row o-aside-content__row--flex-end">
                    <a class="o-aside-content__see-more" href="/بودكاست أصلي/">
                        كل الحلقات <span class="a-svg a-svg--picto-left-arrow"></span>
                    </a>
                </div>
                        </aside>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                

            


<aside
    data-org-name="3"
    data-org-type="aside-content--highlighted"
    class="o-aside-content  o-aside-content--overflow-background o-aside-content--highlighted">
    <div class="o-aside-content__row o-aside-content__row--center">
            <div class="o-aside-content__title a-aside-title"><span class="a-aside-title__content">برامج</span></div>
                    </div>
                
        
                                    
                
    <div
        class="m-item-list-article  m-item-list-article--highlighted-main"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%85%D8%B1%D8%A7%D8%B3%D9%8A/20240131-%D8%A3%D9%86%D8%B7%D9%88%D8%A7%D9%86-%D8%A7%D9%84%D8%B6%D8%A7%D9%87%D8%B1-%D9%83%D8%AA%D8%A7%D8%A8-%D8%B1%D9%8A%D8%AD-%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84-%D9%81%D9%84%D8%B3%D9%81%D8%A9-%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-%D8%A8%D9%8A%D8%A6%D8%A9-%D9%86%D8%A7%D8%B4%D8%B7-%D8%B7%D8%A8%D9%8A%D8%A8-%D9%85%D9%87%D8%B1%D8%AC%D8%A7%D9%86-%D8%B1%D9%8A%D9%81-%D9%85%D8%B1%D8%A7%D8%B3%D9%8A-%D9%85%D9%8A%D8%B4%D8%A7-%D8%AE%D9%84%D9%8A%D9%84-%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/7b499670-c06a-11ee-86d1-005056bf30b7/w:388/p:16x9/antoine%20daher.webp 388w,https://s.mc-doualiya.com/media/display/7b499670-c06a-11ee-86d1-005056bf30b7/w:720/p:16x9/antoine%20daher.webp 720w,https://s.mc-doualiya.com/media/display/7b499670-c06a-11ee-86d1-005056bf30b7/w:980/p:16x9/antoine%20daher.webp 980w"
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 66px), (min-width: 1024px) 464px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/7b499670-c06a-11ee-86d1-005056bf30b7/w:980/p:16x9/antoine%20daher.jpg" alt="أنطوان الضاهر ضيف برنامج مراسي" srcset="https://s.mc-doualiya.com/media/display/7b499670-c06a-11ee-86d1-005056bf30b7/w:388/p:16x9/antoine%20daher.jpg 388w,https://s.mc-doualiya.com/media/display/7b499670-c06a-11ee-86d1-005056bf30b7/w:720/p:16x9/antoine%20daher.jpg 720w,https://s.mc-doualiya.com/media/display/7b499670-c06a-11ee-86d1-005056bf30b7/w:980/p:16x9/antoine%20daher.jpg 980w"
         sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 66px), (min-width: 1024px) 464px"
                     width="980"
             height="551"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">مراسي</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%85%D8%B1%D8%A7%D8%B3%D9%8A/20240131-%D8%A3%D9%86%D8%B7%D9%88%D8%A7%D9%86-%D8%A7%D9%84%D8%B6%D8%A7%D9%87%D8%B1-%D9%83%D8%AA%D8%A7%D8%A8-%D8%B1%D9%8A%D8%AD-%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84-%D9%81%D9%84%D8%B3%D9%81%D8%A9-%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%A9-%D8%A8%D9%8A%D8%A6%D8%A9-%D9%86%D8%A7%D8%B4%D8%B7-%D8%B7%D8%A8%D9%8A%D8%A8-%D9%85%D9%87%D8%B1%D8%AC%D8%A7%D9%86-%D8%B1%D9%8A%D9%81-%D9%85%D8%B1%D8%A7%D8%B3%D9%8A-%D9%85%D9%8A%D8%B4%D8%A7-%D8%AE%D9%84%D9%8A%D9%84-%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9" data-article-item-link>
                            <h2>الجبل… حين يتكّلم في رواية &quot;ريح الشمال&quot;</h2>
                        </a></div>
                                </div>
        </div>
            </div>
        
            
            
<div class="o-layout-list o-layout-list--highlighted">
    
    <div class="o-layout-list__item l-m-100 l-t-100 l-d-100">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%85%D9%86-%D9%82%D8%A7%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%D9%8A%D8%B1/20240131-%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D9%85%D8%AF%D9%91%D8%AF%D8%AA-%D8%AA%D9%88%D9%86%D8%B3-%D8%AD%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%B1%D8%A6" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">
    

<figure class="m-figure m-figure--16x9 m-figure--disable-loading">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/a704097a-ca22-11ec-82a3-005056bf8594/w:246/p:16x9/bassel_turjuman_tunisie.webp 246w,https://s.mc-doualiya.com/media/display/a704097a-ca22-11ec-82a3-005056bf8594/w:532/p:16x9/bassel_turjuman_tunisie.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/a704097a-ca22-11ec-82a3-005056bf8594/w:532/p:16x9/bassel_turjuman_tunisie.png" alt="باسل ترجمان" srcset="https://s.mc-doualiya.com/media/display/a704097a-ca22-11ec-82a3-005056bf8594/w:246/p:16x9/bassel_turjuman_tunisie.png 246w,https://s.mc-doualiya.com/media/display/a704097a-ca22-11ec-82a3-005056bf8594/w:532/p:16x9/bassel_turjuman_tunisie.png 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">من قاعات التحرير</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%85%D9%86-%D9%82%D8%A7%D8%B9%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%D9%8A%D8%B1/20240131-%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D9%85%D8%AF%D9%91%D8%AF%D8%AA-%D8%AA%D9%88%D9%86%D8%B3-%D8%AD%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%B1%D8%A6" data-article-item-link>
                            <h2>لماذا مدّدت تونس حالة الطوارئ؟</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-100 l-d-100">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%86%D9%82%D8%A7%D8%B4-%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9/20240131-%D8%AA%D8%B9%D9%84%D9%8A%D9%82-%D8%AD%D8%B2%D8%A8-%D8%A7%D9%84%D9%84%D9%87-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82%D9%8A-%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%D9%87-%D8%B6%D8%AF-%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9-%D9%87%D9%84-%D9%87%D9%88-%D9%82%D8%B1%D8%A7%D8%B1-%D8%AE%D8%A7%D8%B6%D8%B9-%D9%84%D8%B6%D8%BA%D9%88%D8%B7" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/6145823e-2f28-11ea-b224-005056bf87d6/w:246/p:16x9/hizboallah-in-iraq.webp 246w,https://s.mc-doualiya.com/media/display/6145823e-2f28-11ea-b224-005056bf87d6/w:532/p:16x9/hizboallah-in-iraq.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/6145823e-2f28-11ea-b224-005056bf87d6/w:532/p:16x9/hizboallah-in-iraq.jpg" alt="علما العراق وحزب الله في العراق" srcset="https://s.mc-doualiya.com/media/display/6145823e-2f28-11ea-b224-005056bf87d6/w:246/p:16x9/hizboallah-in-iraq.jpg 246w,https://s.mc-doualiya.com/media/display/6145823e-2f28-11ea-b224-005056bf87d6/w:532/p:16x9/hizboallah-in-iraq.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">نقاش مونت كارلو</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%86%D9%82%D8%A7%D8%B4-%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9/20240131-%D8%AA%D8%B9%D9%84%D9%8A%D9%82-%D8%AD%D8%B2%D8%A8-%D8%A7%D9%84%D9%84%D9%87-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82%D9%8A-%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%D9%87-%D8%B6%D8%AF-%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D8%A9-%D9%87%D9%84-%D9%87%D9%88-%D9%82%D8%B1%D8%A7%D8%B1-%D8%AE%D8%A7%D8%B6%D8%B9-%D9%84%D8%B6%D8%BA%D9%88%D8%B7" data-article-item-link>
                            <h2>تعليق &quot;حزب الله العراقي&quot; عملياته ضد القوات الأميركية... هل هو قرار خاضع لضغوط؟</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-100 l-d-100">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%AD%D9%88%D8%A7%D8%B1/20240131-%D8%A7%D9%84%D9%83%D8%A7%D8%AA%D8%A8%D8%A9-%D9%86%D8%AF%D9%89-%D8%A8%D8%AC%D8%A7%D9%86%D9%8A-%D8%B1%D8%B9%D8%AF-%D9%84%D9%85-%D9%8A%D8%A8%D9%82-%D9%84%D9%86%D8%A7-%D8%A5%D9%84%D8%A7-%D8%A7%D9%84%D8%A3%D9%85%D9%84-%D9%84%D9%86%D8%B5%D8%B9%D8%AF-%D9%85%D9%86-%D8%A7%D9%84%D9%87%D8%A7%D9%88%D9%8A%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/96c07ffa-c046-11ee-82f7-005056bfb2b6/w:246/p:16x9/nada_raad_roman.webp 246w,https://s.mc-doualiya.com/media/display/96c07ffa-c046-11ee-82f7-005056bfb2b6/w:532/p:16x9/nada_raad_roman.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/96c07ffa-c046-11ee-82f7-005056bfb2b6/w:532/p:16x9/nada_raad_roman.jpg" alt="الكاتبة ندى بجاني رعد وروايتها Plume de sang" srcset="https://s.mc-doualiya.com/media/display/96c07ffa-c046-11ee-82f7-005056bfb2b6/w:246/p:16x9/nada_raad_roman.jpg 246w,https://s.mc-doualiya.com/media/display/96c07ffa-c046-11ee-82f7-005056bfb2b6/w:532/p:16x9/nada_raad_roman.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">حوار</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%AD%D9%88%D8%A7%D8%B1/20240131-%D8%A7%D9%84%D9%83%D8%A7%D8%AA%D8%A8%D8%A9-%D9%86%D8%AF%D9%89-%D8%A8%D8%AC%D8%A7%D9%86%D9%8A-%D8%B1%D8%B9%D8%AF-%D9%84%D9%85-%D9%8A%D8%A8%D9%82-%D9%84%D9%86%D8%A7-%D8%A5%D9%84%D8%A7-%D8%A7%D9%84%D8%A3%D9%85%D9%84-%D9%84%D9%86%D8%B5%D8%B9%D8%AF-%D9%85%D9%86-%D8%A7%D9%84%D9%87%D8%A7%D9%88%D9%8A%D8%A9" data-article-item-link>
                            <h2>الكاتبة ندى بجاني رعد: لم يبق لنا إلا الأمل..لنصعد من الهاوية</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>
    
                                    
<div class="o-layout-list ">
    
    <div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D9%84%D8%A2%D9%86-%D8%BA%D8%AF%D8%A7%D9%8B/20240131-%D8%AA%D8%AD%D8%B0%D9%8A%D8%B1%D8%A7%D8%AA-%D9%85%D9%86-%D8%AA%D8%AF%D8%A7%D8%B9%D9%8A%D8%A7%D8%AA-%D9%83%D8%A7%D8%B1%D8%AB%D9%8A%D8%A9-%D9%84%D9%88%D9%82%D9%81-%D8%AA%D9%85%D9%88%D9%8A%D9%84-%D9%88%D9%83%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D8%A3%D9%88%D9%86%D8%B1%D9%88%D8%A7-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%AF%D9%86-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/6de774ca-c047-11ee-90ce-005056bfb2b6/w:246/p:16x9/palestine-1.webp 246w,https://s.mc-doualiya.com/media/display/6de774ca-c047-11ee-90ce-005056bfb2b6/w:532/p:16x9/palestine-1.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/6de774ca-c047-11ee-90ce-005056bfb2b6/w:532/p:16x9/palestine-1.jpg" alt="وقف تمويل وكالة &quot;الأونروا&quot; في المدن الفلسطينية" srcset="https://s.mc-doualiya.com/media/display/6de774ca-c047-11ee-90ce-005056bfb2b6/w:246/p:16x9/palestine-1.jpg 246w,https://s.mc-doualiya.com/media/display/6de774ca-c047-11ee-90ce-005056bfb2b6/w:532/p:16x9/palestine-1.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">الآن غداً</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D9%84%D8%A2%D9%86-%D8%BA%D8%AF%D8%A7%D9%8B/20240131-%D8%AA%D8%AD%D8%B0%D9%8A%D8%B1%D8%A7%D8%AA-%D9%85%D9%86-%D8%AA%D8%AF%D8%A7%D8%B9%D9%8A%D8%A7%D8%AA-%D9%83%D8%A7%D8%B1%D8%AB%D9%8A%D8%A9-%D9%84%D9%88%D9%82%D9%81-%D8%AA%D9%85%D9%88%D9%8A%D9%84-%D9%88%D9%83%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D8%A3%D9%88%D9%86%D8%B1%D9%88%D8%A7-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%AF%D9%86-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D8%A9" data-article-item-link>
                            <h2>تحذيرات من تداعيات كارثية لوقف تمويل وكالة &quot;الأونروا&quot; في المدن الفلسطينية</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D9%84%D8%A2%D9%86-%D8%BA%D8%AF%D8%A7%D9%8B/20240131-%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA-%D9%88%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84-%D9%81%D9%88%D8%B6%D9%89-%D8%B9%D8%A7%D8%B1%D9%85%D8%A9-%D9%88%D8%AD%D8%A7%D9%84%D8%A7%D8%AA-%D8%AA%D8%B4%D9%88%D9%8A%D9%87-%D9%85%D8%AA%D8%B2%D8%A7%D9%8A%D8%AF%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/d2c8bb7a-c046-11ee-95b6-005056a90284/w:246/p:16x9/operation.webp 246w,https://s.mc-doualiya.com/media/display/d2c8bb7a-c046-11ee-95b6-005056a90284/w:532/p:16x9/operation.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/d2c8bb7a-c046-11ee-95b6-005056a90284/w:532/p:16x9/operation.jpg" alt="عمليات التجميل" srcset="https://s.mc-doualiya.com/media/display/d2c8bb7a-c046-11ee-95b6-005056a90284/w:246/p:16x9/operation.jpg 246w,https://s.mc-doualiya.com/media/display/d2c8bb7a-c046-11ee-95b6-005056a90284/w:532/p:16x9/operation.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">الآن غداً</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D9%84%D8%A2%D9%86-%D8%BA%D8%AF%D8%A7%D9%8B/20240131-%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA-%D9%88%D8%A5%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D9%84-%D9%81%D9%88%D8%B6%D9%89-%D8%B9%D8%A7%D8%B1%D9%85%D8%A9-%D9%88%D8%AD%D8%A7%D9%84%D8%A7%D8%AA-%D8%AA%D8%B4%D9%88%D9%8A%D9%87-%D9%85%D8%AA%D8%B2%D8%A7%D9%8A%D8%AF%D8%A9" data-article-item-link>
                            <h2>عمليات وإجراءات التجميل: &quot;فوضى عارمة وحالات تشويه متزايدة&quot;</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%85%D8%B1%D8%A7%D8%B3%D9%8A/20240131-%D8%AA%D9%8A%D8%A7%D8%B1-%D9%81%D8%B1%D9%82%D8%A9-%D8%A3%D8%AD%D9%85%D8%AF-%D9%81%D8%B1%D8%AD-%D8%A8%D8%AF%D8%B1-%D9%87%D9%84%D8%A7%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D8%B1%D8%B6-%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89-%D8%A8%D8%AF%D9%8A%D9%84%D8%A9-%D9%85%D8%B1%D8%A7%D8%B3%D9%8A-%D9%85%D9%8A%D8%B4%D8%A7-%D8%AE%D9%84%D9%8A%D9%84-%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/aac2ecf2-bf53-11ee-bc0a-005056a90284/w:246/p:16x9/tayar-1.webp 246w,https://s.mc-doualiya.com/media/display/aac2ecf2-bf53-11ee-bc0a-005056a90284/w:532/p:16x9/tayar-1.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/aac2ecf2-bf53-11ee-bc0a-005056a90284/w:532/p:16x9/tayar-1.jpg" alt="ثنائي تيّار: بدر هلالات وأحمد فرح" srcset="https://s.mc-doualiya.com/media/display/aac2ecf2-bf53-11ee-bc0a-005056a90284/w:246/p:16x9/tayar-1.jpg 246w,https://s.mc-doualiya.com/media/display/aac2ecf2-bf53-11ee-bc0a-005056a90284/w:532/p:16x9/tayar-1.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">مراسي</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%85%D8%B1%D8%A7%D8%B3%D9%8A/20240131-%D8%AA%D9%8A%D8%A7%D8%B1-%D9%81%D8%B1%D9%82%D8%A9-%D8%A3%D8%AD%D9%85%D8%AF-%D9%81%D8%B1%D8%AD-%D8%A8%D8%AF%D8%B1-%D9%87%D9%84%D8%A7%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D8%B1%D8%B6-%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89-%D8%A8%D8%AF%D9%8A%D9%84%D8%A9-%D9%85%D8%B1%D8%A7%D8%B3%D9%8A-%D9%85%D9%8A%D8%B4%D8%A7-%D8%AE%D9%84%D9%8A%D9%84-%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9" data-article-item-link>
                            <h2>تيّار... مشروع موسيقي مستقل ينقل الواقع الحياتي بروح شاعرية</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%83%D8%A7%D9%81%D9%8A%D9%87-%D8%B4%D9%88/20240131-%D8%A7%D9%84%D9%83%D8%A7%D8%AA%D8%A8%D8%A9-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9-%D8%AC%D9%8A%D9%87%D8%A7%D9%86-%D8%AC%D9%85%D8%A7%D9%84-%D9%84%D9%8A%D8%B3-%D9%84%D9%84%D9%85%D9%88%D9%87%D8%A8%D8%A9-%D8%B9%D9%85%D8%B1" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/8ccc00d2-c02d-11ee-b70f-005056a90284/w:246/p:16x9/notebook-420011_1280.webp 246w,https://s.mc-doualiya.com/media/display/8ccc00d2-c02d-11ee-b70f-005056a90284/w:532/p:16x9/notebook-420011_1280.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/8ccc00d2-c02d-11ee-b70f-005056a90284/w:532/p:16x9/notebook-420011_1280.jpg" alt="Littérature" srcset="https://s.mc-doualiya.com/media/display/8ccc00d2-c02d-11ee-b70f-005056a90284/w:246/p:16x9/notebook-420011_1280.jpg 246w,https://s.mc-doualiya.com/media/display/8ccc00d2-c02d-11ee-b70f-005056a90284/w:532/p:16x9/notebook-420011_1280.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">كافيه شو</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%83%D8%A7%D9%81%D9%8A%D9%87-%D8%B4%D9%88/20240131-%D8%A7%D9%84%D9%83%D8%A7%D8%AA%D8%A8%D8%A9-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9-%D8%AC%D9%8A%D9%87%D8%A7%D9%86-%D8%AC%D9%85%D8%A7%D9%84-%D9%84%D9%8A%D8%B3-%D9%84%D9%84%D9%85%D9%88%D9%87%D8%A8%D8%A9-%D8%B9%D9%85%D8%B1" data-article-item-link>
                            <h2>الكاتبة المصرية جيهان جمال: &quot;ليس للموهبة عمر&quot;</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>
            
                                        <div class="o-aside-content__row o-aside-content__row--flex-end">
                    <a class="o-aside-content__see-more" href="/آخر-البرامج/">
                        آخر البرامج <span class="a-svg a-svg--picto-left-arrow"></span>
                    </a>
                </div>
                        </aside>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                


<div class="o-block-ad-n-layout-list">
    <div class="o-block-ad-n-layout-list__layout-list">
        
<div class="o-layout-list ">
    
    <div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A7%D9%84%D8%AC%D9%8A%D8%B4-%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A-%D9%8A%D8%AD%D8%A7%D8%B5%D8%B1-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%8A%D8%A7%D8%AA-%D9%88%D9%8A%D8%AD%D8%AA%D8%AC%D8%B2-%D8%A7%D9%84%D8%A3%D8%B7%D8%A8%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D9%85%D8%B1%D8%B6%D9%89-%D9%85%D8%B9-%D8%A7%D8%B3%D8%AA%D9%85%D8%B1%D8%A7%D8%B1-%D8%B4%D9%86-%D8%BA%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AC%D9%88%D9%8A%D8%A9-%D9%85%D9%83%D8%AB%D9%81%D8%A9-%D8%B9%D9%84%D9%89-%D8%BA%D8%B2%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/9d5e79c6-c022-11ee-87cd-005056bfb2b6/w:177/p:16x9/Israel%20Gaza-1.webp 177w,https://s.mc-doualiya.com/media/display/9d5e79c6-c022-11ee-87cd-005056bfb2b6/w:388/p:16x9/Israel%20Gaza-1.webp 388w,https://s.mc-doualiya.com/media/display/9d5e79c6-c022-11ee-87cd-005056bfb2b6/w:480/p:16x9/Israel%20Gaza-1.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/9d5e79c6-c022-11ee-87cd-005056bfb2b6/w:480/p:16x9/Israel%20Gaza-1.jpg" alt="الجيش الإسرائيلي في قطاع غزة 31/01/2024" srcset="https://s.mc-doualiya.com/media/display/9d5e79c6-c022-11ee-87cd-005056bfb2b6/w:177/p:16x9/Israel%20Gaza-1.jpg 177w,https://s.mc-doualiya.com/media/display/9d5e79c6-c022-11ee-87cd-005056bfb2b6/w:388/p:16x9/Israel%20Gaza-1.jpg 388w,https://s.mc-doualiya.com/media/display/9d5e79c6-c022-11ee-87cd-005056bfb2b6/w:480/p:16x9/Israel%20Gaza-1.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T11:25:10+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%A7%D9%84%D8%AC%D9%8A%D8%B4-%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A-%D9%8A%D8%AD%D8%A7%D8%B5%D8%B1-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%8A%D8%A7%D8%AA-%D9%88%D9%8A%D8%AD%D8%AA%D8%AC%D8%B2-%D8%A7%D9%84%D8%A3%D8%B7%D8%A8%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D9%85%D8%B1%D8%B6%D9%89-%D9%85%D8%B9-%D8%A7%D8%B3%D8%AA%D9%85%D8%B1%D8%A7%D8%B1-%D8%B4%D9%86-%D8%BA%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AC%D9%88%D9%8A%D8%A9-%D9%85%D9%83%D8%AB%D9%81%D8%A9-%D8%B9%D9%84%D9%89-%D8%BA%D8%B2%D8%A9" data-article-item-link>
                            <h2>الجيش الإسرائيلي يحاصر المستشفيات ويحتجز الأطباء والمرضى مع استمرار شن غارات جوية مكثفة على غزة</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%85%D9%82%D8%AA%D9%84-%D8%B9%D8%B4%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D9%8A%D9%86-%D9%81%D9%8A-%D8%BA%D8%B2%D8%A9-%D9%88%D8%AD%D9%85%D8%A7%D8%B3-%D8%AA%D8%AF%D8%B1%D8%B3-%D9%85%D9%82%D8%AA%D8%B1%D8%AD%D8%A7-%D9%84%D9%84%D8%AA%D9%88%D8%B5%D9%84-%D8%A7%D9%84%D9%89-%D9%87%D8%AF%D9%86%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/34d96fc4-9bd7-11ee-9a91-005056a90284/w:177/p:16x9/5598.webp 177w,https://s.mc-doualiya.com/media/display/34d96fc4-9bd7-11ee-9a91-005056a90284/w:388/p:16x9/5598.webp 388w,https://s.mc-doualiya.com/media/display/34d96fc4-9bd7-11ee-9a91-005056a90284/w:480/p:16x9/5598.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/34d96fc4-9bd7-11ee-9a91-005056a90284/w:480/p:16x9/5598.jpg" alt="طفل فلسطيني يحمل علمًا أبيض مع والدته نزحا من مدينة غزة وسط القصف الإسرائيلي" srcset="https://s.mc-doualiya.com/media/display/34d96fc4-9bd7-11ee-9a91-005056a90284/w:177/p:16x9/5598.jpg 177w,https://s.mc-doualiya.com/media/display/34d96fc4-9bd7-11ee-9a91-005056a90284/w:388/p:16x9/5598.jpg 388w,https://s.mc-doualiya.com/media/display/34d96fc4-9bd7-11ee-9a91-005056a90284/w:480/p:16x9/5598.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T07:26:50+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D9%85%D9%82%D8%AA%D9%84-%D8%B9%D8%B4%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D9%8A%D9%86-%D9%81%D9%8A-%D8%BA%D8%B2%D8%A9-%D9%88%D8%AD%D9%85%D8%A7%D8%B3-%D8%AA%D8%AF%D8%B1%D8%B3-%D9%85%D9%82%D8%AA%D8%B1%D8%AD%D8%A7-%D9%84%D9%84%D8%AA%D9%88%D8%B5%D9%84-%D8%A7%D9%84%D9%89-%D9%87%D8%AF%D9%86%D8%A9" data-article-item-link>
                            <h2>مقتل عشرات الفلسطينيين في غزة وحماس تدرس مقترحا للتوصل الى هدنة</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%AD%D8%B2%D8%A8-%D8%A7%D9%84%D9%84%D9%87-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82%D9%8A-%D9%8A%D8%B9%D9%84%D9%82-%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%D9%87-%D8%B6%D8%AF-%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9-%D8%A8%D8%B9%D8%AF-%D8%A7%D8%AA%D8%AE%D8%A7%D8%B0-%D8%A8%D8%A7%D9%8A%D8%AF%D9%86-%D9%82%D8%B1%D8%A7%D8%B1-%D8%A7%D9%84%D8%B1%D8%AF-%D8%B9%D9%84%D9%89-%D9%85%D9%82%D8%AA%D9%84-%D8%AC%D9%86%D9%88%D8%AF-%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D9%8A%D9%86" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/698b5c04-bfe6-11ee-bbe6-005056a90284/w:177/p:16x9/2024-01-30t194307z-265723033-rc2is5au2kwy-rtrmadp-3-iraq-usa.webp 177w,https://s.mc-doualiya.com/media/display/698b5c04-bfe6-11ee-bbe6-005056a90284/w:388/p:16x9/2024-01-30t194307z-265723033-rc2is5au2kwy-rtrmadp-3-iraq-usa.webp 388w,https://s.mc-doualiya.com/media/display/698b5c04-bfe6-11ee-bbe6-005056a90284/w:480/p:16x9/2024-01-30t194307z-265723033-rc2is5au2kwy-rtrmadp-3-iraq-usa.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/698b5c04-bfe6-11ee-bbe6-005056a90284/w:480/p:16x9/2024-01-30t194307z-265723033-rc2is5au2kwy-rtrmadp-3-iraq-usa.jpg" alt="علم كتائب حزب الله في احتجاج خارج السفارة الأمريكية في بغداد، العراق، 2019." srcset="https://s.mc-doualiya.com/media/display/698b5c04-bfe6-11ee-bbe6-005056a90284/w:177/p:16x9/2024-01-30t194307z-265723033-rc2is5au2kwy-rtrmadp-3-iraq-usa.jpg 177w,https://s.mc-doualiya.com/media/display/698b5c04-bfe6-11ee-bbe6-005056a90284/w:388/p:16x9/2024-01-30t194307z-265723033-rc2is5au2kwy-rtrmadp-3-iraq-usa.jpg 388w,https://s.mc-doualiya.com/media/display/698b5c04-bfe6-11ee-bbe6-005056a90284/w:480/p:16x9/2024-01-30t194307z-265723033-rc2is5au2kwy-rtrmadp-3-iraq-usa.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T04:12:59+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240131-%D8%AD%D8%B2%D8%A8-%D8%A7%D9%84%D9%84%D9%87-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82%D9%8A-%D9%8A%D8%B9%D9%84%D9%82-%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%D9%87-%D8%B6%D8%AF-%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9-%D8%A8%D8%B9%D8%AF-%D8%A7%D8%AA%D8%AE%D8%A7%D8%B0-%D8%A8%D8%A7%D9%8A%D8%AF%D9%86-%D9%82%D8%B1%D8%A7%D8%B1-%D8%A7%D9%84%D8%B1%D8%AF-%D8%B9%D9%84%D9%89-%D9%85%D9%82%D8%AA%D9%84-%D8%AC%D9%86%D9%88%D8%AF-%D8%A3%D9%85%D9%8A%D8%B1%D9%83%D9%8A%D9%8A%D9%86" data-article-item-link>
                            <h2>حزب الله العراقي يعلّق عملياته ضد القوات الأمريكية بعد اتخاذ بايدن قرار الرد على مقتل جنود أميركيين</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240130-%D8%BA%D8%B2%D8%A9-%D9%87%D9%84-%D8%AA%D8%AD%D9%82%D9%82-%D9%85%D8%B3%D9%88%D8%AF%D8%A9-%D8%A7%D9%84%D8%A7%D8%AA%D9%81%D8%A7%D9%82-%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D9%8A-%D8%B7%D8%B1%D8%AD%D8%AA-%D9%81%D9%8A-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D8%A7%D8%AE%D8%AA%D8%B1%D8%A7%D9%82%D8%A7" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/af6dda68-ada9-11ec-bb16-005056bfb2b6/w:177/p:16x9/2022-03-27T035955Z_108754720_RC249T9FQMRN_RTRMADP_3_USA-MIDEAST-BLINKEN.webp 177w,https://s.mc-doualiya.com/media/display/af6dda68-ada9-11ec-bb16-005056bfb2b6/w:388/p:16x9/2022-03-27T035955Z_108754720_RC249T9FQMRN_RTRMADP_3_USA-MIDEAST-BLINKEN.webp 388w,https://s.mc-doualiya.com/media/display/af6dda68-ada9-11ec-bb16-005056bfb2b6/w:480/p:16x9/2022-03-27T035955Z_108754720_RC249T9FQMRN_RTRMADP_3_USA-MIDEAST-BLINKEN.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/af6dda68-ada9-11ec-bb16-005056bfb2b6/w:480/p:16x9/2022-03-27T035955Z_108754720_RC249T9FQMRN_RTRMADP_3_USA-MIDEAST-BLINKEN.JPG" alt="وزير الخارجية الأمريكي أنتوني بلينكن" srcset="https://s.mc-doualiya.com/media/display/af6dda68-ada9-11ec-bb16-005056bfb2b6/w:177/p:16x9/2022-03-27T035955Z_108754720_RC249T9FQMRN_RTRMADP_3_USA-MIDEAST-BLINKEN.JPG 177w,https://s.mc-doualiya.com/media/display/af6dda68-ada9-11ec-bb16-005056bfb2b6/w:388/p:16x9/2022-03-27T035955Z_108754720_RC249T9FQMRN_RTRMADP_3_USA-MIDEAST-BLINKEN.JPG 388w,https://s.mc-doualiya.com/media/display/af6dda68-ada9-11ec-bb16-005056bfb2b6/w:480/p:16x9/2022-03-27T035955Z_108754720_RC249T9FQMRN_RTRMADP_3_USA-MIDEAST-BLINKEN.JPG 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-30T19:38:50+01:00">
                                    30/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240130-%D8%BA%D8%B2%D8%A9-%D9%87%D9%84-%D8%AA%D8%AD%D9%82%D9%82-%D9%85%D8%B3%D9%88%D8%AF%D8%A9-%D8%A7%D9%84%D8%A7%D8%AA%D9%81%D8%A7%D9%82-%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D9%8A-%D8%B7%D8%B1%D8%AD%D8%AA-%D9%81%D9%8A-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D8%A7%D8%AE%D8%AA%D8%B1%D8%A7%D9%82%D8%A7" data-article-item-link>
                            <h2>غزة: هل تحقق مسودة الاتفاق الأمريكية التي طرحت في باريس اختراقا؟</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/20240131-%D8%AA%D9%88%D9%82%D9%8A%D9%81-%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-%D8%A3%D8%B4%D8%AE%D8%A7%D8%B5-%D8%AD%D8%A7%D9%85%D9%84%D9%8A-%D8%AC%D9%86%D8%B3%D9%8A%D8%A7%D8%AA-%D9%85%D8%B2%D8%AF%D9%88%D8%AC%D8%A9-%D8%AA%D8%B1%D9%83%D9%8A%D8%A9-%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D8%A8%D8%AA%D9%87%D9%85%D8%A9-%D8%AA%D9%87%D8%B1%D9%8A%D8%A8-%D8%A3%D8%B3%D9%84%D8%AD%D8%A9-%D9%88%D8%B0%D8%AE%D8%A7%D8%A6%D8%B1-%D9%81%D9%8A-%D9%81%D8%B1%D9%86%D8%B3%D8%A7" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/55abeb32-c017-11ee-9e7e-005056bf30b7/w:177/p:16x9/GIGN.webp 177w,https://s.mc-doualiya.com/media/display/55abeb32-c017-11ee-9e7e-005056bf30b7/w:388/p:16x9/GIGN.webp 388w,https://s.mc-doualiya.com/media/display/55abeb32-c017-11ee-9e7e-005056bf30b7/w:480/p:16x9/GIGN.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/55abeb32-c017-11ee-9e7e-005056bf30b7/w:480/p:16x9/GIGN.jpg" alt="قوات الشرطة الخاصة GIGN" srcset="https://s.mc-doualiya.com/media/display/55abeb32-c017-11ee-9e7e-005056bf30b7/w:177/p:16x9/GIGN.jpg 177w,https://s.mc-doualiya.com/media/display/55abeb32-c017-11ee-9e7e-005056bf30b7/w:388/p:16x9/GIGN.jpg 388w,https://s.mc-doualiya.com/media/display/55abeb32-c017-11ee-9e7e-005056bf30b7/w:480/p:16x9/GIGN.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-31T10:03:40+01:00">
                                    31/01/2024
                                </time></div></div><div class="article__title "><a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/20240131-%D8%AA%D9%88%D9%82%D9%8A%D9%81-%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-%D8%A3%D8%B4%D8%AE%D8%A7%D8%B5-%D8%AD%D8%A7%D9%85%D9%84%D9%8A-%D8%AC%D9%86%D8%B3%D9%8A%D8%A7%D8%AA-%D9%85%D8%B2%D8%AF%D9%88%D8%AC%D8%A9-%D8%AA%D8%B1%D9%83%D9%8A%D8%A9-%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D8%A8%D8%AA%D9%87%D9%85%D8%A9-%D8%AA%D9%87%D8%B1%D9%8A%D8%A8-%D8%A3%D8%B3%D9%84%D8%AD%D8%A9-%D9%88%D8%B0%D8%AE%D8%A7%D8%A6%D8%B1-%D9%81%D9%8A-%D9%81%D8%B1%D9%86%D8%B3%D8%A7" data-article-item-link>
                            <h2>توقيف ثلاثة أشخاص حاملي جنسيات مزدوجة تركية فرنسية بتهمة تهريب أسلحة وذخائر في فرنسا</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-50">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/20240130-%D9%86%D9%82%D9%84-%D9%85%D9%87%D8%A7%D8%AC%D8%B1%D9%8A%D9%86-%D9%82%D9%88%D8%A7%D8%B1%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D8%AA-%D9%85%D9%86-%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7-%D8%A5%D9%84%D9%89-%D8%A3%D9%84%D8%A8%D8%A7%D9%86%D9%8A%D8%A7-%D8%A3%D8%B5%D8%A8%D8%AD-%D9%85%D9%85%D9%83%D9%86%D8%A7-%D8%A8%D9%85%D9%88%D8%AC%D8%A8-%D9%85%D8%B5%D8%A7%D8%AF%D9%82%D8%A9-%D8%A7%D9%84%D9%85%D8%AD%D9%83%D9%85%D8%A9-%D8%A7%D9%84%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A3%D9%84%D8%A8%D8%A7%D9%86%D9%8A%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/3f375ba2-bf86-11ee-9648-005056a90284/w:177/p:16x9/Italy%20rescue%20ship.webp 177w,https://s.mc-doualiya.com/media/display/3f375ba2-bf86-11ee-9648-005056a90284/w:388/p:16x9/Italy%20rescue%20ship.webp 388w,https://s.mc-doualiya.com/media/display/3f375ba2-bf86-11ee-9648-005056a90284/w:480/p:16x9/Italy%20rescue%20ship.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/3f375ba2-bf86-11ee-9648-005056a90284/w:480/p:16x9/Italy%20rescue%20ship.jpg" alt="سفينة Ocean Viking التي تديرها منظمة غير حكومية SOS Mediterranee لإنقاذ المهاجرين القادمين عبر المتوسط في &quot;قوارب الموت&quot; راسية في ميناء بإيطاليا 14/07/2024" srcset="https://s.mc-doualiya.com/media/display/3f375ba2-bf86-11ee-9648-005056a90284/w:177/p:16x9/Italy%20rescue%20ship.jpg 177w,https://s.mc-doualiya.com/media/display/3f375ba2-bf86-11ee-9648-005056a90284/w:388/p:16x9/Italy%20rescue%20ship.jpg 388w,https://s.mc-doualiya.com/media/display/3f375ba2-bf86-11ee-9648-005056a90284/w:480/p:16x9/Italy%20rescue%20ship.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 128px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-30T18:44:52+01:00">
                                    30/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/20240130-%D9%86%D9%82%D9%84-%D9%85%D9%87%D8%A7%D8%AC%D8%B1%D9%8A%D9%86-%D9%82%D9%88%D8%A7%D8%B1%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D8%AA-%D9%85%D9%86-%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7-%D8%A5%D9%84%D9%89-%D8%A3%D9%84%D8%A8%D8%A7%D9%86%D9%8A%D8%A7-%D8%A3%D8%B5%D8%A8%D8%AD-%D9%85%D9%85%D9%83%D9%86%D8%A7-%D8%A8%D9%85%D9%88%D8%AC%D8%A8-%D9%85%D8%B5%D8%A7%D8%AF%D9%82%D8%A9-%D8%A7%D9%84%D9%85%D8%AD%D9%83%D9%85%D8%A9-%D8%A7%D9%84%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A3%D9%84%D8%A8%D8%A7%D9%86%D9%8A%D8%A9" data-article-item-link>
                            <h2>نقل مهاجري &quot;قوارب الموت&quot; من إيطاليا إلى ألبانيا أصبح ممكنا بموجب مصادقة المحكمة الدستورية الألبانية</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>
    </div>
    <div class="o-block-ad-n-layout-list__block-ad">
            <div
        class="m-block-ad m-block-ad--h300"
        data-tms-ad-type="box"
        data-tms-ad-status="idle"
        data-tms-ad-pos="2"
    >
        <div class="m-block-ad__label m-block-ad__label--report-enabled">
            <span class="m-block-ad__label__text">إعلان</span>
                        <button title="الإبلاغ عن هذا الإعلان" class="m-block-ad__label__report-link" rel="noopener" data-tms-ad-report><span class="a-svg a-svg--picto-report-ad-rtl"></span></button>
                    </div>
        <div class="m-block-ad__content">
        </div>
    </div>
    </div>
</div>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                

            


<aside
    data-org-name="Selection"
    data-org-type="aside-content--highlighted"
    class="o-aside-content  o-aside-content--overflow-background o-aside-content--highlighted">
    <div class="o-aside-content__row o-aside-content__row--center">
            <div class="o-aside-content__title a-aside-title"><span class="a-aside-title__content">اخترنا لكم</span></div>
                    </div>
                
        
                                    
                
    <div
        class="m-item-list-article  m-item-list-article--highlighted-main"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D9%84%D8%A2%D9%86-%D8%BA%D8%AF%D8%A7%D9%8B/20240111-%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8-%D8%A7%D9%84%D8%B4%D8%B9%D8%A8%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D9%84%D8%AF%D8%A7%D9%86-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%85%D9%83%D9%88%D9%86-%D8%AB%D9%82%D8%A7%D9%81%D9%8A-%D9%85%D9%87%D8%AF%D8%AF-%D8%A8%D8%A7%D9%84%D8%AA%D9%84%D8%A7%D8%B4%D9%8A" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/1afa526c-b090-11ee-8ccc-005056a97e36/w:388/p:16x9/000_Nic192304%20%281%29.webp 388w,https://s.mc-doualiya.com/media/display/1afa526c-b090-11ee-8ccc-005056a97e36/w:720/p:16x9/000_Nic192304%20%281%29.webp 720w,https://s.mc-doualiya.com/media/display/1afa526c-b090-11ee-8ccc-005056a97e36/w:980/p:16x9/000_Nic192304%20%281%29.webp 980w"
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 66px), (min-width: 1024px) 464px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/1afa526c-b090-11ee-8ccc-005056a97e36/w:980/p:16x9/000_Nic192304%20%281%29.jpg" alt="الألعاب الشعبية في البلدان العربية" srcset="https://s.mc-doualiya.com/media/display/1afa526c-b090-11ee-8ccc-005056a97e36/w:388/p:16x9/000_Nic192304%20%281%29.jpg 388w,https://s.mc-doualiya.com/media/display/1afa526c-b090-11ee-8ccc-005056a97e36/w:720/p:16x9/000_Nic192304%20%281%29.jpg 720w,https://s.mc-doualiya.com/media/display/1afa526c-b090-11ee-8ccc-005056a97e36/w:980/p:16x9/000_Nic192304%20%281%29.jpg 980w"
         sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 66px), (min-width: 1024px) 464px"
                     width="980"
             height="551"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">الآن غداً</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D9%84%D8%A2%D9%86-%D8%BA%D8%AF%D8%A7%D9%8B/20240111-%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8-%D8%A7%D9%84%D8%B4%D8%B9%D8%A8%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%A8%D9%84%D8%AF%D8%A7%D9%86-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%85%D9%83%D9%88%D9%86-%D8%AB%D9%82%D8%A7%D9%81%D9%8A-%D9%85%D9%87%D8%AF%D8%AF-%D8%A8%D8%A7%D9%84%D8%AA%D9%84%D8%A7%D8%B4%D9%8A" data-article-item-link>
                            <h2>الألعاب الشعبية في البلدان العربية: مكون ثقافي مهدد بالتلاشي؟</h2>
                        </a></div>
                                </div>
        </div>
            </div>
        
            
            
<div class="o-layout-list o-layout-list--highlighted">
    
    <div class="o-layout-list__item l-m-100 l-t-100 l-d-100">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%85%D8%B1%D8%A7%D8%B3%D9%8A/20240104-%D8%AC%D8%B1%D8%B4-%D9%82%D9%84%D8%B9%D8%A9-%D8%B9%D8%AC%D9%84%D9%88%D9%86-%D9%85%D9%88%D9%82%D8%B9-%D8%A3%D8%AB%D8%B1%D9%8A-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86-%D8%AF%D9%84%D9%8A%D9%84-%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A-%D8%B4%D8%A7%D9%87%D8%B1-%D8%A3%D8%A8%D9%88-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%85%D8%B1%D8%A7%D8%B3%D9%8A-%D9%85%D9%8A%D8%B4%D8%A7-%D8%AE%D9%84%D9%8A%D9%84-%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/e2dde1c6-aae7-11ee-ba23-005056bfb2b6/w:246/p:16x9/jerash-1.webp 246w,https://s.mc-doualiya.com/media/display/e2dde1c6-aae7-11ee-ba23-005056bfb2b6/w:532/p:16x9/jerash-1.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/e2dde1c6-aae7-11ee-ba23-005056bfb2b6/w:532/p:16x9/jerash-1.jpg" alt="موقع جرش" srcset="https://s.mc-doualiya.com/media/display/e2dde1c6-aae7-11ee-ba23-005056bfb2b6/w:246/p:16x9/jerash-1.jpg 246w,https://s.mc-doualiya.com/media/display/e2dde1c6-aae7-11ee-ba23-005056bfb2b6/w:532/p:16x9/jerash-1.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">مراسي</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%85%D8%B1%D8%A7%D8%B3%D9%8A/20240104-%D8%AC%D8%B1%D8%B4-%D9%82%D9%84%D8%B9%D8%A9-%D8%B9%D8%AC%D9%84%D9%88%D9%86-%D9%85%D9%88%D9%82%D8%B9-%D8%A3%D8%AB%D8%B1%D9%8A-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86-%D8%AF%D9%84%D9%8A%D9%84-%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A-%D8%B4%D8%A7%D9%87%D8%B1-%D8%A3%D8%A8%D9%88-%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%85%D8%B1%D8%A7%D8%B3%D9%8A-%D9%85%D9%8A%D8%B4%D8%A7-%D8%AE%D9%84%D9%8A%D9%84-%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9" data-article-item-link>
                            <h2>سحر الطبيعة وعبقرية الهندسة المعمارية يجتمعان في جرش وعجلون</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-100 l-d-100">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%83%D8%A7%D9%81%D9%8A%D9%87-%D8%B4%D9%88/20240101-%D9%85%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%B5%D8%B5-%D9%81%D9%8A-%D9%86%D9%88%D9%86-%D8%B1%D9%81%D8%B6-%D9%84%D8%A7%D8%B3%D8%AA%D9%84%D8%A7%D8%A8-%D8%B9%D9%82%D9%84-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/f80edb76-999a-11ee-8429-005056a90284/w:246/p:16x9/WhatsApp%20Image%202023-12-12%20at%2016.55.47.webp 246w,https://s.mc-doualiya.com/media/display/f80edb76-999a-11ee-8429-005056a90284/w:532/p:16x9/WhatsApp%20Image%202023-12-12%20at%2016.55.47.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/f80edb76-999a-11ee-8429-005056a90284/w:532/p:16x9/WhatsApp%20Image%202023-12-12%20at%2016.55.47.jpeg" alt="أيام قرطاج المسرحية" srcset="https://s.mc-doualiya.com/media/display/f80edb76-999a-11ee-8429-005056a90284/w:246/p:16x9/WhatsApp%20Image%202023-12-12%20at%2016.55.47.jpeg 246w,https://s.mc-doualiya.com/media/display/f80edb76-999a-11ee-8429-005056a90284/w:532/p:16x9/WhatsApp%20Image%202023-12-12%20at%2016.55.47.jpeg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">كافيه شو</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D9%83%D8%A7%D9%81%D9%8A%D9%87-%D8%B4%D9%88/20240101-%D9%85%D8%AC%D8%AF-%D8%A7%D9%84%D9%82%D8%B5%D8%B5-%D9%81%D9%8A-%D9%86%D9%88%D9%86-%D8%B1%D9%81%D8%B6-%D9%84%D8%A7%D8%B3%D8%AA%D9%84%D8%A7%D8%A8-%D8%B9%D9%82%D9%84-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9" data-article-item-link>
                            <h2>مجد القصص في &quot;نون&quot;: رفض لاستلاب عقل المرأة</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-100 l-d-100">
                                
                
    <div
        class="m-item-list-article  m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D9%84%D8%B5%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9/20240109-%D9%83%D9%8A%D9%81-%D9%86%D9%85%D9%8A%D9%91%D8%B2-%D8%A8%D9%8A%D9%86-%D8%A3%D9%84%D9%85-%D8%A7%D9%84%D8%A7%D8%B3%D9%86%D8%A7%D9%86-%D9%88%D8%A3%D9%84%D9%85-%D8%A7%D9%84%D9%84%D8%AB%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/0681f2cc-af0a-11ee-8956-005056a97e36/w:246/p:16x9/New%20Project%20%2813%29-1.webp 246w,https://s.mc-doualiya.com/media/display/0681f2cc-af0a-11ee-8956-005056a97e36/w:532/p:16x9/New%20Project%20%2813%29-1.webp 532w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/0681f2cc-af0a-11ee-8956-005056a97e36/w:532/p:16x9/New%20Project%20%2813%29-1.jpg" alt="ضيف مونت كارلو الدولية وبرنامج الصحة المستدامة الدكتور كاظم الحمداني" srcset="https://s.mc-doualiya.com/media/display/0681f2cc-af0a-11ee-8956-005056a97e36/w:246/p:16x9/New%20Project%20%2813%29-1.jpg 246w,https://s.mc-doualiya.com/media/display/0681f2cc-af0a-11ee-8956-005056a97e36/w:532/p:16x9/New%20Project%20%2813%29-1.jpg 532w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(21vw - 36px), (min-width: 1024px) 200px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                <div class="a-tag"><span class="a-tag__wrapper ">الصحة المستدامة</span></div>
                                    
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A7%D9%84%D8%B5%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AF%D8%A7%D9%85%D8%A9/20240109-%D9%83%D9%8A%D9%81-%D9%86%D9%85%D9%8A%D9%91%D8%B2-%D8%A8%D9%8A%D9%86-%D8%A3%D9%84%D9%85-%D8%A7%D9%84%D8%A7%D8%B3%D9%86%D8%A7%D9%86-%D9%88%D8%A3%D9%84%D9%85-%D8%A7%D9%84%D9%84%D8%AB%D8%A9" data-article-item-link>
                            <h2>كيف نميّز بين ألم الاسنان وألم اللثة؟</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>
    
    
                                        <div class="o-aside-content__row o-aside-content__row--flex-end">
                    <a class="o-aside-content__see-more" href="/اخترنا-لكم/">
                        كل الاختيارات <span class="a-svg a-svg--picto-left-arrow"></span>
                    </a>
                </div>
                        </aside>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                
<div class="o-layout-list ">
    
    <div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/20240130-%D8%A7%D9%84%D8%AD%D9%83%D9%88%D9%85%D8%A9-%D8%A7%D9%84%D8%AA%D9%88%D9%86%D8%B3%D9%8A%D8%A9-%D8%AA%D8%B1%D9%8A%D8%AF-%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D9%86%D9%83-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A-%D8%AA%D9%85%D9%88%D9%8A%D9%84-%D9%85%D9%8A%D8%B2%D8%A7%D9%86%D9%8A%D8%AA%D9%87%D8%A7-%D8%A8%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B4%D8%B1-%D9%81%D9%87%D9%84-%D9%87%D9%8A-%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AE%D8%B7%D9%8A%D8%B1%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/0cb1df9a-bfa4-11ee-b811-005056bfb2b6/w:177/p:16x9/gouverneur%20de%20la%20banque%20centrale%20tunisienne.webp 177w,https://s.mc-doualiya.com/media/display/0cb1df9a-bfa4-11ee-b811-005056bfb2b6/w:388/p:16x9/gouverneur%20de%20la%20banque%20centrale%20tunisienne.webp 388w,https://s.mc-doualiya.com/media/display/0cb1df9a-bfa4-11ee-b811-005056bfb2b6/w:480/p:16x9/gouverneur%20de%20la%20banque%20centrale%20tunisienne.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/0cb1df9a-bfa4-11ee-b811-005056bfb2b6/w:480/p:16x9/gouverneur%20de%20la%20banque%20centrale%20tunisienne.jpg" alt="مروان العباسي حاكم البنك المركزي التونسي" srcset="https://s.mc-doualiya.com/media/display/0cb1df9a-bfa4-11ee-b811-005056bfb2b6/w:177/p:16x9/gouverneur%20de%20la%20banque%20centrale%20tunisienne.jpg 177w,https://s.mc-doualiya.com/media/display/0cb1df9a-bfa4-11ee-b811-005056bfb2b6/w:388/p:16x9/gouverneur%20de%20la%20banque%20centrale%20tunisienne.jpg 388w,https://s.mc-doualiya.com/media/display/0cb1df9a-bfa4-11ee-b811-005056bfb2b6/w:480/p:16x9/gouverneur%20de%20la%20banque%20centrale%20tunisienne.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-30T20:18:28+01:00">
                                    30/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A3%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A7/20240130-%D8%A7%D9%84%D8%AD%D9%83%D9%88%D9%85%D8%A9-%D8%A7%D9%84%D8%AA%D9%88%D9%86%D8%B3%D9%8A%D8%A9-%D8%AA%D8%B1%D9%8A%D8%AF-%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D9%86%D9%83-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A-%D8%AA%D9%85%D9%88%D9%8A%D9%84-%D9%85%D9%8A%D8%B2%D8%A7%D9%86%D9%8A%D8%AA%D9%87%D8%A7-%D8%A8%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B1%D8%A7%D8%B6-%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B4%D8%B1-%D9%81%D9%87%D9%84-%D9%87%D9%8A-%D8%B9%D8%A7%D8%AF%D8%A9-%D8%AE%D8%B7%D9%8A%D8%B1%D8%A9" data-article-item-link>
                            <h2>الحكومة التونسية تريد من البنك المركزي تمويل ميزانيتها بالاقتراض المباشر ... فهل هي عادة خطيرة؟</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/20240130-%D8%AB%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D9%81%D9%84%D8%A7%D8%AD%D9%8A%D9%86-%D8%A7%D9%84%D9%85%D8%B2%D8%A7%D8%B1%D8%B9%D9%88%D9%86-%D9%81%D9%8A-%D9%81%D8%B1%D9%86%D8%B3%D8%A7-%D9%8A%D9%88%D8%A7%D8%B5%D9%84%D9%88%D9%86-%D8%A7%D8%AD%D8%AA%D8%AC%D8%A7%D8%AC%D9%87%D9%85-%D9%88%D8%AA%D9%88%D8%B3%D8%B9-%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%D9%83-%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D9%8A-%D8%A5%D9%84%D9%89-%D8%A7%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/cff4bbaa-bf89-11ee-8bc5-005056bf30b7/w:177/p:16x9/2024-01-30T104603Z_1211905794_RC29S5AUJF8S_RTRMADP_3_FRANCE-POLITICS-FARMERS.webp 177w,https://s.mc-doualiya.com/media/display/cff4bbaa-bf89-11ee-8bc5-005056bf30b7/w:388/p:16x9/2024-01-30T104603Z_1211905794_RC29S5AUJF8S_RTRMADP_3_FRANCE-POLITICS-FARMERS.webp 388w,https://s.mc-doualiya.com/media/display/cff4bbaa-bf89-11ee-8bc5-005056bf30b7/w:480/p:16x9/2024-01-30T104603Z_1211905794_RC29S5AUJF8S_RTRMADP_3_FRANCE-POLITICS-FARMERS.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/cff4bbaa-bf89-11ee-8bc5-005056bf30b7/w:480/p:16x9/2024-01-30T104603Z_1211905794_RC29S5AUJF8S_RTRMADP_3_FRANCE-POLITICS-FARMERS.JPG" alt="الحصار الذي فرضه المزارعون على الطريق السريع المؤدية لباريس" srcset="https://s.mc-doualiya.com/media/display/cff4bbaa-bf89-11ee-8bc5-005056bf30b7/w:177/p:16x9/2024-01-30T104603Z_1211905794_RC29S5AUJF8S_RTRMADP_3_FRANCE-POLITICS-FARMERS.JPG 177w,https://s.mc-doualiya.com/media/display/cff4bbaa-bf89-11ee-8bc5-005056bf30b7/w:388/p:16x9/2024-01-30T104603Z_1211905794_RC29S5AUJF8S_RTRMADP_3_FRANCE-POLITICS-FARMERS.JPG 388w,https://s.mc-doualiya.com/media/display/cff4bbaa-bf89-11ee-8bc5-005056bf30b7/w:480/p:16x9/2024-01-30T104603Z_1211905794_RC29S5AUJF8S_RTRMADP_3_FRANCE-POLITICS-FARMERS.JPG 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-30T18:39:47+01:00">
                                    30/01/2024
                                </time></div></div><div class="article__title "><a href="/%D9%81%D8%B1%D9%86%D8%B3%D8%A7/20240130-%D8%AB%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D9%81%D9%84%D8%A7%D8%AD%D9%8A%D9%86-%D8%A7%D9%84%D9%85%D8%B2%D8%A7%D8%B1%D8%B9%D9%88%D9%86-%D9%81%D9%8A-%D9%81%D8%B1%D9%86%D8%B3%D8%A7-%D9%8A%D9%88%D8%A7%D8%B5%D9%84%D9%88%D9%86-%D8%A7%D8%AD%D8%AA%D8%AC%D8%A7%D8%AC%D9%87%D9%85-%D9%88%D8%AA%D9%88%D8%B3%D8%B9-%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%D9%83-%D8%A7%D9%84%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D9%8A-%D8%A5%D9%84%D9%89-%D8%A7%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7" data-article-item-link>
                            <h2>&quot;ثورة الفلاحين&quot;..المزارعون في فرنسا يواصلون احتجاجهم وتوسع التحرك الأوروبي إلى اسبانيا</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240130-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D8%AA%D8%AF%D9%8A%D9%86-%D9%85%D8%A4%D8%AA%D9%85%D8%B1%D8%A7%D9%8B-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A7%D9%8B-%D9%8A%D8%AF%D8%B9%D9%88-%D8%A5%D9%84%D9%89-%D8%A5%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A8%D9%86%D8%A7%D8%A1-%D9%85%D8%B3%D8%AA%D9%88%D8%B7%D9%86%D8%A7%D8%AA-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A9-%D9%81%D9%8A-%D8%BA%D8%B2%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/45fcc46e-bf71-11ee-b27b-005056a90284/w:177/p:16x9/2024-01-28T223429Z_872155030_RC26R5APEIO2_RTRMADP_3_ISRAEL-PALESTINIANS-SETTLERS.webp 177w,https://s.mc-doualiya.com/media/display/45fcc46e-bf71-11ee-b27b-005056a90284/w:388/p:16x9/2024-01-28T223429Z_872155030_RC26R5APEIO2_RTRMADP_3_ISRAEL-PALESTINIANS-SETTLERS.webp 388w,https://s.mc-doualiya.com/media/display/45fcc46e-bf71-11ee-b27b-005056a90284/w:480/p:16x9/2024-01-28T223429Z_872155030_RC26R5APEIO2_RTRMADP_3_ISRAEL-PALESTINIANS-SETTLERS.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/45fcc46e-bf71-11ee-b27b-005056a90284/w:480/p:16x9/2024-01-28T223429Z_872155030_RC26R5APEIO2_RTRMADP_3_ISRAEL-PALESTINIANS-SETTLERS.JPG" alt="وزير الأمن القومي إيتمار بن غفير" srcset="https://s.mc-doualiya.com/media/display/45fcc46e-bf71-11ee-b27b-005056a90284/w:177/p:16x9/2024-01-28T223429Z_872155030_RC26R5APEIO2_RTRMADP_3_ISRAEL-PALESTINIANS-SETTLERS.JPG 177w,https://s.mc-doualiya.com/media/display/45fcc46e-bf71-11ee-b27b-005056a90284/w:388/p:16x9/2024-01-28T223429Z_872155030_RC26R5APEIO2_RTRMADP_3_ISRAEL-PALESTINIANS-SETTLERS.JPG 388w,https://s.mc-doualiya.com/media/display/45fcc46e-bf71-11ee-b27b-005056a90284/w:480/p:16x9/2024-01-28T223429Z_872155030_RC26R5APEIO2_RTRMADP_3_ISRAEL-PALESTINIANS-SETTLERS.JPG 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-30T17:16:15+01:00">
                                    30/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240130-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3-%D8%AA%D8%AF%D9%8A%D9%86-%D9%85%D8%A4%D8%AA%D9%85%D8%B1%D8%A7%D9%8B-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A7%D9%8B-%D9%8A%D8%AF%D8%B9%D9%88-%D8%A5%D9%84%D9%89-%D8%A5%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A8%D9%86%D8%A7%D8%A1-%D9%85%D8%B3%D8%AA%D9%88%D8%B7%D9%86%D8%A7%D8%AA-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A9-%D9%81%D9%8A-%D8%BA%D8%B2%D8%A9" data-article-item-link>
                            <h2>باريس &quot;تدين&quot; مؤتمراً إسرائيلياً يدعو إلى إعادة بناء مستوطنات إسرائيلية في غزة</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/20240130-%D8%A5%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A9-%D9%88%D8%AF%D8%B9%D9%85-%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D9%85%D8%AD%D9%88%D8%B1%D8%A7%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A7%D9%86-%D9%81%D9%8A-%D8%AE%D8%B7%D8%A7%D8%A8-%D8%B1%D8%A6%D9%8A%D8%B3-%D8%A7%D9%84%D8%AD%D9%83%D9%88%D9%85%D8%A9-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D8%A3%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%84%D9%85%D8%A7%D9%86" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/9d962c28-bf95-11ee-bf41-005056bf30b7/w:177/p:16x9/Gabriel%20Attal.webp 177w,https://s.mc-doualiya.com/media/display/9d962c28-bf95-11ee-bf41-005056bf30b7/w:388/p:16x9/Gabriel%20Attal.webp 388w,https://s.mc-doualiya.com/media/display/9d962c28-bf95-11ee-bf41-005056bf30b7/w:480/p:16x9/Gabriel%20Attal.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/9d962c28-bf95-11ee-bf41-005056bf30b7/w:480/p:16x9/Gabriel%20Attal.jpg" alt="خطاب رئيس الحكومة غابرييل آتال حول سياسة حكومته امام البرلمان 30/1/2024" srcset="https://s.mc-doualiya.com/media/display/9d962c28-bf95-11ee-bf41-005056bf30b7/w:177/p:16x9/Gabriel%20Attal.jpg 177w,https://s.mc-doualiya.com/media/display/9d962c28-bf95-11ee-bf41-005056bf30b7/w:388/p:16x9/Gabriel%20Attal.jpg 388w,https://s.mc-doualiya.com/media/display/9d962c28-bf95-11ee-bf41-005056bf30b7/w:480/p:16x9/Gabriel%20Attal.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-30T18:36:55+01:00">
                                    30/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A3%D9%88%D8%B1%D9%88%D8%A8%D8%A7/20240130-%D8%A5%D8%B9%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D8%A9-%D9%88%D8%AF%D8%B9%D9%85-%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D9%85%D8%AD%D9%88%D8%B1%D8%A7%D9%86-%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A7%D9%86-%D9%81%D9%8A-%D8%AE%D8%B7%D8%A7%D8%A8-%D8%B1%D8%A6%D9%8A%D8%B3-%D8%A7%D9%84%D8%AD%D9%83%D9%88%D9%85%D8%A9-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D8%A3%D9%85%D8%A7%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%84%D9%85%D8%A7%D9%86" data-article-item-link>
                            <h2>إعادة الصناعة ودعم الزراعة ... محوران رئيسيان في خطاب رئيس الحكومة الفرنسية أمام البرلمان</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240130-%D9%85%D8%AF%D9%8A%D8%B1-%D8%B9%D8%A7%D9%85-%D8%A7%D9%84%D9%87%D9%84%D8%A7%D9%84-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A-%D9%84%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A3%D8%B1%D8%A8%D8%B9%D8%A9-%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%8A%D8%A7%D8%AA-%D9%85%D8%AD%D8%A7%D8%B5%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84-%D9%81%D9%8A-%D8%AE%D8%A7%D9%86-%D9%8A%D9%88%D9%86%D8%B3" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/59e566c6-bf84-11ee-a561-005056bfb2b6/w:177/p:16x9/croissant%20rouge.webp 177w,https://s.mc-doualiya.com/media/display/59e566c6-bf84-11ee-a561-005056bfb2b6/w:388/p:16x9/croissant%20rouge.webp 388w,https://s.mc-doualiya.com/media/display/59e566c6-bf84-11ee-a561-005056bfb2b6/w:480/p:16x9/croissant%20rouge.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/59e566c6-bf84-11ee-a561-005056bfb2b6/w:480/p:16x9/croissant%20rouge.jpg" alt="الهلال الأحمر الفلسطيني" srcset="https://s.mc-doualiya.com/media/display/59e566c6-bf84-11ee-a561-005056bfb2b6/w:177/p:16x9/croissant%20rouge.jpg 177w,https://s.mc-doualiya.com/media/display/59e566c6-bf84-11ee-a561-005056bfb2b6/w:388/p:16x9/croissant%20rouge.jpg 388w,https://s.mc-doualiya.com/media/display/59e566c6-bf84-11ee-a561-005056bfb2b6/w:480/p:16x9/croissant%20rouge.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-30T16:31:18+01:00">
                                    30/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240130-%D9%85%D8%AF%D9%8A%D8%B1-%D8%B9%D8%A7%D9%85-%D8%A7%D9%84%D9%87%D9%84%D8%A7%D9%84-%D8%A7%D9%84%D8%A3%D8%AD%D9%85%D8%B1-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A-%D9%84%D9%85%D9%88%D9%86%D8%AA-%D9%83%D8%A7%D8%B1%D9%84%D9%88-%D8%A3%D8%B1%D8%A8%D8%B9%D8%A9-%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%8A%D8%A7%D8%AA-%D9%85%D8%AD%D8%A7%D8%B5%D8%B1%D8%A9-%D8%A8%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84-%D9%81%D9%8A-%D8%AE%D8%A7%D9%86-%D9%8A%D9%88%D9%86%D8%B3" data-article-item-link>
                            <h2>مدير عام الهلال الأحمر الفلسطيني لمونت كارلو &quot;أربعة مستشفيات محاصرة بالكامل في خان يونس&quot;</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                
                
    <div
        class="m-item-list-article m-item-list-article--with-tag-over-image m-item-list-article--keep-it-horizontal"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240130-%D9%81%D9%8A%D8%AF%D9%8A%D9%88-%D8%A8%D8%B2%D9%8A-%D8%B7%D9%88%D8%A7%D9%82%D9%85-%D8%B7%D8%A8%D9%8A%D8%A9-%D9%88%D9%85%D9%84%D8%A7%D8%A8%D8%B3-%D9%85%D8%AF%D9%86%D9%8A%D8%A9-%D9%82%D9%88%D8%A9-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A9-%D8%AA%D8%AA%D8%B3%D9%84%D9%84-%D8%A5%D9%84%D9%89-%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D9%81%D9%8A-%D8%A7%D9%84%D8%B6%D9%81%D8%A9-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9-%D9%88%D8%AA%D8%B3%D9%82%D8%B7-%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-%D9%82%D8%AA%D9%84%D9%89" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/7c084920-d819-11ec-82b6-005056bf30b7/w:177/p:16x9/000_329Y36N.webp 177w,https://s.mc-doualiya.com/media/display/7c084920-d819-11ec-82b6-005056bf30b7/w:388/p:16x9/000_329Y36N.webp 388w,https://s.mc-doualiya.com/media/display/7c084920-d819-11ec-82b6-005056bf30b7/w:480/p:16x9/000_329Y36N.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/7c084920-d819-11ec-82b6-005056bf30b7/w:480/p:16x9/000_329Y36N.jpg" alt="في مستشفى بالعاصمة الفرنسية باريس" srcset="https://s.mc-doualiya.com/media/display/7c084920-d819-11ec-82b6-005056bf30b7/w:177/p:16x9/000_329Y36N.jpg 177w,https://s.mc-doualiya.com/media/display/7c084920-d819-11ec-82b6-005056bf30b7/w:388/p:16x9/000_329Y36N.jpg 388w,https://s.mc-doualiya.com/media/display/7c084920-d819-11ec-82b6-005056bf30b7/w:480/p:16x9/000_329Y36N.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__metadata"><div class="article__date"><time datetime="2024-01-30T13:09:12+01:00">
                                    30/01/2024
                                </time></div></div><div class="article__title "><a href="/%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D8%A7%D9%84%D8%A3%D9%88%D8%B3%D8%B7/20240130-%D9%81%D9%8A%D8%AF%D9%8A%D9%88-%D8%A8%D8%B2%D9%8A-%D8%B7%D9%88%D8%A7%D9%82%D9%85-%D8%B7%D8%A8%D9%8A%D8%A9-%D9%88%D9%85%D9%84%D8%A7%D8%A8%D8%B3-%D9%85%D8%AF%D9%86%D9%8A%D8%A9-%D9%82%D9%88%D8%A9-%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A9-%D8%AA%D8%AA%D8%B3%D9%84%D9%84-%D8%A5%D9%84%D9%89-%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89-%D9%81%D9%8A-%D8%A7%D9%84%D8%B6%D9%81%D8%A9-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9-%D9%88%D8%AA%D8%B3%D9%82%D8%B7-%D8%AB%D9%84%D8%A7%D8%AB%D8%A9-%D9%82%D8%AA%D9%84%D9%89" data-article-item-link>
                            <h2>فيديو :&quot;بزي طواقم طبية وملابس مدنية&quot;.. قوة إسرائيلية تتسلل إلى مستشفى في الضفة الغربية وتسقط ثلاثة قتلى</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                

            


<aside
    data-org-name="7"
    data-org-type="aside-content--highlighted-1-plus-4"
    class="o-aside-content  o-aside-content--overflow-background o-aside-content--highlighted">
    <div class="o-aside-content__row o-aside-content__row--center">
            <div class="o-aside-content__title a-aside-title"><span class="a-aside-title__content">أبراج</span></div>
                    </div>
                
                    
                
    <div
        class="m-item-list-article  m-item-list-article--highlighted-main m-item-list-article--highlighted-fullwidth"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A3%D8%A8%D8%B1%D8%A7%D8%AC/20240131-%D8%A3%D8%A8%D8%B1%D8%A7%D8%AC-%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%B9%D8%A7%D8%A1-31-%D9%83%D8%A7%D9%86%D9%88%D9%86-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A-%D9%8A%D9%86%D8%A7%D9%8A%D8%B1-2024" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">
    

<figure class="m-figure m-figure--16x9 m-figure--disable-loading">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/8243adf8-6227-11ea-9751-005056a98db9/w:246/p:16x9/Horoscope-MCD-WB602708-MCD-AR-20100630-podcast.webp 246w,https://s.mc-doualiya.com/media/display/8243adf8-6227-11ea-9751-005056a98db9/w:532/p:16x9/Horoscope-MCD-WB602708-MCD-AR-20100630-podcast.webp 532w"
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 66px), (min-width: 1024px) 464px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/8243adf8-6227-11ea-9751-005056a98db9/w:532/p:16x9/Horoscope-MCD-WB602708-MCD-AR-20100630-podcast.png" alt="Podcast" srcset="https://s.mc-doualiya.com/media/display/8243adf8-6227-11ea-9751-005056a98db9/w:246/p:16x9/Horoscope-MCD-WB602708-MCD-AR-20100630-podcast.png 246w,https://s.mc-doualiya.com/media/display/8243adf8-6227-11ea-9751-005056a98db9/w:532/p:16x9/Horoscope-MCD-WB602708-MCD-AR-20100630-podcast.png 532w"
         sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 66px), (min-width: 1024px) 464px"
                     width="532"
             height="300"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%A3%D8%A8%D8%B1%D8%A7%D8%AC/20240131-%D8%A3%D8%A8%D8%B1%D8%A7%D8%AC-%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%B9%D8%A7%D8%A1-31-%D9%83%D8%A7%D9%86%D9%88%D9%86-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A-%D9%8A%D9%86%D8%A7%D9%8A%D8%B1-2024" data-article-item-link>
                            <h2>أبراج الأربعاء 31 كانون الثاني/ يناير 2024</h2>
                        </a></div>
                            <div class="article__chapo">
            زاوية صباحية يومية يرصد فيها عالم الفلك إبراهيم حزبون حركة الكواكب والنجوم ومواقعها في الأزمان المختلفة ويفسر تأثيرها على الإنسان مستخدماً قواعد التنجيم في توقع الأحداث لكافة الأبراج. 
        </div>
                </div>
        </div>
                </div>

    
    

                </aside>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                




<aside
    data-org-name="bloc les voisins du 12"
    data-org-type="aside-content--sponsors"
    class="o-aside-content ">
    <div class="o-aside-content__row o-aside-content__row--center">
            <div class="o-aside-content__title a-aside-title"><span class="a-aside-title__content">تعلموا الفرنسية مع مسلسل Les voisins du 12 bis</span></div>
                    </div>
                
        
<div class="o-layout-list ">
    
    <div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                            
                
    <div
        class="m-item-list-article  m-item-list-article--hor-to-ver"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%AA%D8%B9%D9%84%D9%85%D9%88%D8%A7-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D9%85%D8%B9-%D9%85%D8%B3%D9%84%D8%B3%D9%84-les-voisins-du-12-bis/20210806-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-13-%D9%85%D9%86-13-%D8%A2%D9%88%D8%A7" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">
    

<figure class="m-figure m-figure--16x9 m-figure--disable-loading">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/1766377e-f69d-11eb-8a77-005056bfb2b6/w:177/p:16x9/episode%20%2813%29.webp 177w,https://s.mc-doualiya.com/media/display/1766377e-f69d-11eb-8a77-005056bfb2b6/w:388/p:16x9/episode%20%2813%29.webp 388w,https://s.mc-doualiya.com/media/display/1766377e-f69d-11eb-8a77-005056bfb2b6/w:480/p:16x9/episode%20%2813%29.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/1766377e-f69d-11eb-8a77-005056bfb2b6/w:480/p:16x9/episode%20%2813%29.png" alt="الحلقة 13 من 13: &quot;آوا&quot;" srcset="https://s.mc-doualiya.com/media/display/1766377e-f69d-11eb-8a77-005056bfb2b6/w:177/p:16x9/episode%20%2813%29.png 177w,https://s.mc-doualiya.com/media/display/1766377e-f69d-11eb-8a77-005056bfb2b6/w:388/p:16x9/episode%20%2813%29.png 388w,https://s.mc-doualiya.com/media/display/1766377e-f69d-11eb-8a77-005056bfb2b6/w:480/p:16x9/episode%20%2813%29.png 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%AA%D8%B9%D9%84%D9%85%D9%88%D8%A7-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D9%85%D8%B9-%D9%85%D8%B3%D9%84%D8%B3%D9%84-les-voisins-du-12-bis/20210806-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-13-%D9%85%D9%86-13-%D8%A2%D9%88%D8%A7" data-article-item-link>
                            <h2>الحلقة 13 من 13: &quot;آوا&quot;</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                            
                
    <div
        class="m-item-list-article  m-item-list-article--hor-to-ver"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%AA%D8%B9%D9%84%D9%85%D9%88%D8%A7-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D9%85%D8%B9-%D9%85%D8%B3%D9%84%D8%B3%D9%84-les-voisins-du-12-bis/20210729-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-12-%D9%85%D9%86-13-%D9%85%D8%A7%D8%B1%D9%83-%D9%83%D9%88%D8%B3%D8%AA%D9%86%D8%AA%D8%A7%D9%86" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">
    

<figure class="m-figure m-figure--16x9 m-figure--disable-loading">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/bcd091d2-ebad-11eb-bfc1-005056a97e36/w:177/p:16x9/episode%20%2812%29.webp 177w,https://s.mc-doualiya.com/media/display/bcd091d2-ebad-11eb-bfc1-005056a97e36/w:388/p:16x9/episode%20%2812%29.webp 388w,https://s.mc-doualiya.com/media/display/bcd091d2-ebad-11eb-bfc1-005056a97e36/w:480/p:16x9/episode%20%2812%29.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/bcd091d2-ebad-11eb-bfc1-005056a97e36/w:480/p:16x9/episode%20%2812%29.png" alt="الحلقة 12 من 13: &quot;مارك كوستنتان&quot;" srcset="https://s.mc-doualiya.com/media/display/bcd091d2-ebad-11eb-bfc1-005056a97e36/w:177/p:16x9/episode%20%2812%29.png 177w,https://s.mc-doualiya.com/media/display/bcd091d2-ebad-11eb-bfc1-005056a97e36/w:388/p:16x9/episode%20%2812%29.png 388w,https://s.mc-doualiya.com/media/display/bcd091d2-ebad-11eb-bfc1-005056a97e36/w:480/p:16x9/episode%20%2812%29.png 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%AA%D8%B9%D9%84%D9%85%D9%88%D8%A7-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D9%85%D8%B9-%D9%85%D8%B3%D9%84%D8%B3%D9%84-les-voisins-du-12-bis/20210729-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-12-%D9%85%D9%86-13-%D9%85%D8%A7%D8%B1%D9%83-%D9%83%D9%88%D8%B3%D8%AA%D9%86%D8%AA%D8%A7%D9%86" data-article-item-link>
                            <h2>الحلقة 12 من 13: &quot;مارك كوستنتان&quot;</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                            
                
    <div
        class="m-item-list-article  m-item-list-article--hor-to-ver"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                    
                                        
                                                                                                                <a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%AA%D8%B9%D9%84%D9%85%D9%88%D8%A7-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D9%85%D8%B9-%D9%85%D8%B3%D9%84%D8%B3%D9%84-les-voisins-du-12-bis/20210723-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-11-%D9%85%D9%86-13-%D9%81%D9%8A-%D9%85%D9%86%D8%AA%D8%AF%D9%89-%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">
    

<figure class="m-figure m-figure--16x9 m-figure--disable-loading">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/90cd695c-ebad-11eb-843c-005056bf30b7/w:177/p:16x9/episode%20%2811%29.webp 177w,https://s.mc-doualiya.com/media/display/90cd695c-ebad-11eb-843c-005056bf30b7/w:388/p:16x9/episode%20%2811%29.webp 388w,https://s.mc-doualiya.com/media/display/90cd695c-ebad-11eb-843c-005056bf30b7/w:480/p:16x9/episode%20%2811%29.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/90cd695c-ebad-11eb-843c-005056bf30b7/w:480/p:16x9/episode%20%2811%29.png" alt="الحلقة 11 من 13: &quot;في منتدى الصورة&quot;" srcset="https://s.mc-doualiya.com/media/display/90cd695c-ebad-11eb-843c-005056bf30b7/w:177/p:16x9/episode%20%2811%29.png 177w,https://s.mc-doualiya.com/media/display/90cd695c-ebad-11eb-843c-005056bf30b7/w:388/p:16x9/episode%20%2811%29.png 388w,https://s.mc-doualiya.com/media/display/90cd695c-ebad-11eb-843c-005056bf30b7/w:480/p:16x9/episode%20%2811%29.png 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__title "><span class="article__type a-svg a-svg--picto-headphones"></span><a href="/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC/%D8%AA%D8%B9%D9%84%D9%85%D9%88%D8%A7-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D9%85%D8%B9-%D9%85%D8%B3%D9%84%D8%B3%D9%84-les-voisins-du-12-bis/20210723-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-11-%D9%85%D9%86-13-%D9%81%D9%8A-%D9%85%D9%86%D8%AA%D8%AF%D9%89-%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9" data-article-item-link>
                            <h2>الحلقة 11 من 13: &quot;في منتدى الصورة&quot;</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>

                                        <div class="o-aside-content__row o-aside-content__row--flex-end">
                    <a class="o-aside-content__see-more" href="/برامج/تعلموا-الفرنسية-مع-مسلسل-les-voisins-du-12-bis/">
                        كل الحلقات <span class="a-svg a-svg--picto-left-arrow"></span>
                    </a>
                </div>
                        </aside>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                

            


<aside
    data-org-name="5"
    data-org-type="aside-content--sponsors"
    class="o-aside-content  o-aside-content--overflow-background">
    <div class="o-aside-content__row o-aside-content__row--center">
            <div class="o-aside-content__title a-aside-title"><span class="a-aside-title__content">شراكة</span></div>
                    </div>
                
        
<div class="o-layout-list ">
    
    <div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                            
                
    <div
        class="m-item-list-article  m-item-list-article--hor-to-ver"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                                                                            
                                        
                                                                                                                <a href="https://www.myfrenchfilmfestival.com/" target="_blank" rel="noopener noreferrer" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/c46d7a6c-b168-11ee-b286-005056a90284/w:177/p:16x9/France24-mcDoualiya-AR%20400x225px.webp 177w,https://s.mc-doualiya.com/media/display/c46d7a6c-b168-11ee-b286-005056a90284/w:388/p:16x9/France24-mcDoualiya-AR%20400x225px.webp 388w,https://s.mc-doualiya.com/media/display/c46d7a6c-b168-11ee-b286-005056a90284/w:480/p:16x9/France24-mcDoualiya-AR%20400x225px.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/c46d7a6c-b168-11ee-b286-005056a90284/w:480/p:16x9/France24-mcDoualiya-AR%20400x225px.jpeg" alt="MyFrenchFilmFestival" srcset="https://s.mc-doualiya.com/media/display/c46d7a6c-b168-11ee-b286-005056a90284/w:177/p:16x9/France24-mcDoualiya-AR%20400x225px.jpeg 177w,https://s.mc-doualiya.com/media/display/c46d7a6c-b168-11ee-b286-005056a90284/w:388/p:16x9/France24-mcDoualiya-AR%20400x225px.jpeg 388w,https://s.mc-doualiya.com/media/display/c46d7a6c-b168-11ee-b286-005056a90284/w:480/p:16x9/France24-mcDoualiya-AR%20400x225px.jpeg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__title "><a href="https://www.myfrenchfilmfestival.com/" target="_blank" rel="noopener noreferrer" data-article-item-link>
                            <h2>MyFrenchFilmFestival</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div><div class="o-layout-list__item l-m-100 l-t-50 l-d-33">
                                            
                
    <div
        class="m-item-list-article  m-item-list-article--hor-to-ver"
        data-article-list
    >
        <div class="m-item-list-article__wrapper">
                                                                                            
                                        
                                                                                                                <a href="https://www.unesco.org/ar" target="_blank" rel="noopener noreferrer" data-article-item-link class="article__figure-wrapper" aria-hidden="true" tabindex="-1">


<figure class="m-figure m-figure--16x9">    
        <picture>
            <source
            type="image/webp"
            srcset="https://s.mc-doualiya.com/media/display/d793d59c-bf7c-11ee-a422-005056a90284/w:177/p:16x9/ArabicV1%20440x225.webp 177w,https://s.mc-doualiya.com/media/display/d793d59c-bf7c-11ee-a422-005056a90284/w:388/p:16x9/ArabicV1%20440x225.webp 388w,https://s.mc-doualiya.com/media/display/d793d59c-bf7c-11ee-a422-005056a90284/w:480/p:16x9/ArabicV1%20440x225.webp 480w"
            sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
        />
    
    <img
        fetchpriority="low" src="https://s.mc-doualiya.com/media/display/d793d59c-bf7c-11ee-a422-005056a90284/w:480/p:16x9/ArabicV1%20440x225.jpg" alt="اليوم العالمي للإذاعة" srcset="https://s.mc-doualiya.com/media/display/d793d59c-bf7c-11ee-a422-005056a90284/w:177/p:16x9/ArabicV1%20440x225.jpg 177w,https://s.mc-doualiya.com/media/display/d793d59c-bf7c-11ee-a422-005056a90284/w:388/p:16x9/ArabicV1%20440x225.jpg 388w,https://s.mc-doualiya.com/media/display/d793d59c-bf7c-11ee-a422-005056a90284/w:480/p:16x9/ArabicV1%20440x225.jpg 480w"
         sizes="(max-width: 639px) calc(37vw - 32px), (max-width: 1023px) calc(50vw - 36px), (min-width: 1024px) 306px"
                     width="480"
             height="270"
        
         loading="lazy"
         class="m-figure__img lazy"
    />
</picture>
    </figure>
                    </a>
                                                            <div class="article__infos">
                                
                                                    <div class="article__title "><a href="https://www.unesco.org/ar" target="_blank" rel="noopener noreferrer" data-article-item-link>
                            <h2>اليوم العالمي للإذاعة</h2>
                        </a></div>
                            </div>
        </div>
            </div>
                    </div>
    </div>

                </aside>
            </section>
        
        
                    
                    <section class="t-content__section-pb">
                                




<aside
    data-org-name="Archive par années"
    data-org-type="aside-content--archive-years"
    class="o-aside-content  o-aside-content--archive-years">
    
                
                <div class="o-aside-content__row o-aside-content__row--center">
            <div class="o-aside-content__title a-aside-title"><span class="a-aside-title__content">أرشيف</span></div>
        </div>
    
            <p class="o-aside-content__description">اطلع على كل أرشيف موقع &quot;مونت كارلو الدولية&quot; منذ عام 2010 (مقالات وبرامج وتسجيلات وفيديوهات وغيرها).</p>
        <ul class="o-aside-content__archive-years">
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2024/">2024</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2023/">2023</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2022/">2022</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2021/">2021</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2020/">2020</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2019/">2019</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2018/">2018</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2017/">2017</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2016/">2016</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2015/">2015</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2014/">2014</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2013/">2013</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2012/">2012</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2011/">2011</a>
        </li>
            <li class="o-aside-content__archive-years__year">
                                                    <a class="a-archive-link" href="/%D8%A3%D8%B1%D8%B4%D9%8A%D9%81/2010/">2010</a>
        </li>
        </ul>

    </aside>
            </section>
        
        
            
                                                <script id="datalayer" type="application/json">
                            {"content_title":"homepage","site_context":"interne","content_type":"section","page_name":"homepage","content_id":null,"publication_date":"2024-01-31","publication_time":"23:37:30","cat1":null,"cat2":null,"cat3":null,"site_brand":"mcd","site_env":"","http_code":200,"site_version":"4.0.1.4","site_locale":"ar"}
                        </script>
                                    </div>
                                            </main>

                            
<div class="o-footer">
    <footer class="o-footer__inner" role="contentinfo">
        <div class="o-footer__block o-footer__block--news" data-root-box-expand>
                            <div class="m-nav-list m-nav-list--primary m-nav-list--rows m-nav-list--tags">
                    <div class="o-site-nav__wrapper">
                        <div class="o-site-nav__block o-site-nav__block--primary">
                            <div class="m-nav-list m-nav-list--primary m-nav-list--rows m-nav-list--tags">
    <div class="m-nav-list__title">ملفات الساعة</div>    <ul class="m-nav-list__list">
        <li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%AA%D8%A7%D8%BA/%D9%85%D9%86%D8%A7%D8%AE/" class="a-nav-link a-hot-tag " data-menu-link>مناخ</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%AA%D8%A7%D8%BA/%D8%AC%D9%84%D9%8A%D8%AF/" class="a-nav-link a-hot-tag " data-menu-link>جليد</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%AA%D8%A7%D8%BA/%D8%A7%D9%84%D9%82%D8%B7%D8%A8-%D8%A7%D9%84%D8%AC%D9%86%D9%88%D8%A8%D9%8A/" class="a-nav-link a-hot-tag " data-menu-link>القطب الجنوبي</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%AA%D8%A7%D8%BA/%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84/" class="a-nav-link a-hot-tag " data-menu-link>إسرائيل</a>
</li><li class="m-nav-list__list__item">
                                                    
                <a href="/%D8%AA%D8%A7%D8%BA/%D9%83%D8%A3%D8%B3-%D8%A7%D9%84%D8%A3%D9%85%D9%85-%D8%A7%D9%84%D8%A5%D9%81%D8%B1%D9%8A%D9%82%D9%8A%D8%A9/" class="a-nav-link a-hot-tag " data-menu-link>كأس الأمم الإفريقية</a>
</li>    </ul>
</div>
                        </div>
                    </div>
                </div>
            
                            <box-expand
                    :is-content-below="true"
                    :is-mobile-only="true"
                    :box-classes="['m-nav-list','m-nav-list--double-column']"
                    :button-classes="['m-nav-list__title']"
                    :btn-attr-list="{
                        dataMenuCat: ''
                    }"
                >
                    <template v-slot:button-collapse>
                        دولي
                        <span class="a-svg a-svg--picto-chevron-top"></span>
                    </template>
                    <template v-slot:button-expand>
                        دولي
                        <span class="a-svg a-svg--picto-chevron-bottom"></span>
                    </template>
                    <template v-slot:box>
                        <ul class="m-nav-list__list">
                                                            <li class="m-nav-list__list__item"><a href="/%D8%AA%D8%A7%D8%BA/%D9%85%D8%B5%D8%B1/">مصر</a>
</li>
                                                            <li class="m-nav-list__list__item"><a href="/%D8%AA%D8%A7%D8%BA/%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1/">الجزائر</a>
</li>
                                                            <li class="m-nav-list__list__item"><a href="/%D8%AA%D8%A7%D8%BA/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8/">المغرب</a>
</li>
                                                            <li class="m-nav-list__list__item"><a href="/%D8%AA%D8%A7%D8%BA/%D8%AA%D9%88%D9%86%D8%B3/">تونس</a>
</li>
                                                            <li class="m-nav-list__list__item"><a href="/%D8%AA%D8%A7%D8%BA/%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82/">العراق</a>
</li>
                                                            <li class="m-nav-list__list__item"><a href="/%D8%AA%D8%A7%D8%BA/%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9/">السعودية</a>
</li>
                                                            <li class="m-nav-list__list__item"><a href="/%D8%AA%D8%A7%D8%BA/%D9%84%D8%A8%D9%86%D8%A7%D9%86/">لبنان</a>
</li>
                                                            <li class="m-nav-list__list__item"><a href="/%D8%AA%D8%A7%D8%BA/%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86-1/">الأردن</a>
</li>
                                                            <li class="m-nav-list__list__item"><a href="/%D8%AA%D8%A7%D8%BA/%D8%A7%D9%84%D9%8A%D9%85%D9%86/">اليمن</a>
</li>
                                                    </ul>
                    </template>
                </box-expand>
                    </div>

                <div class="o-footer__block o-footer__block--secondary" data-root-box-expand>
            <box-expand
                :is-content-below="true"
                :is-mobile-only="true"
                :box-classes="['m-nav-list','m-nav-list--double-column']"
                :button-classes="['m-nav-list__title']"
                :btn-attr-list="{
                    dataMenuCat: ''
                }"
            >
                <template v-slot:button-collapse>
                    مونت كارلو الدولية
                    <span class="a-svg a-svg--picto-chevron-top"></span>
                </template>
                <template v-slot:button-expand>
                    مونت كارلو الدولية
                    <span class="a-svg a-svg--picto-chevron-bottom"></span>
                </template>
                <template v-slot:box>
                    <ul class="m-nav-list__list">
                                                    <li class="m-nav-list__list__item"><a href="/%D9%85%D9%86-%D9%86%D8%AD%D9%86">من نحن؟</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="/ar/%D9%85%D9%8A%D8%AB%D8%A7%D9%82-%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%B9%D8%AF-%D8%A7%D9%84%D9%85%D9%87%D9%86%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%A3%D8%AE%D9%84%D8%A7%D9%82%D9%8A%D8%A7%D8%AA">ميثاق القواعد المهنية والأخلاقيات</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://www.francemediasmonde.com/ar/contact" target="_blank" rel="noopener">اتصل بنا</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="/%D8%B4%D8%B1%D9%83%D8%A7%D8%A1">شركاء</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://mc-d.co/PressKit" target="_blank" rel="noopener">بيانات صحفية</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="/%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%A5%D8%B4%D8%B9%D8%A7%D8%B1%D8%A7%D8%AA" target="_blank" rel="noopener">إدارة الإشعارات</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://fmm.io/jobs" target="_blank" rel="noopener nofollow">الالتحاق بنا</a>
</li>
                                             </ul>
                </template>
            </box-expand>
        </div>
        
                <div class="o-footer__block o-footer__block--secondary o-footer__block--group" data-root-box-expand>
            <box-expand
                :is-content-below="true"
                :is-mobile-only="true"
                :box-classes="['m-nav-list','m-nav-list--double-column']"
                :button-classes="['m-nav-list__title']"
                :btn-attr-list="{
                    dataMenuCat: ''
                }"
            >
                <template v-slot:button-collapse>
                    مواقع المجموعة
                    <span class="a-svg a-svg--picto-chevron-top"></span>
                </template>
                <template v-slot:button-expand>
                    مواقع المجموعة
                    <span class="a-svg a-svg--picto-chevron-bottom"></span>
                </template>
                <template v-slot:box>
                    <ul class="m-nav-list__list">
                                                    <li class="m-nav-list__list__item"><a href="https://www.france24.com/ar/" target="_blank" rel="noopener">فرانس 24</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://observers.france24.com/ar/" target="_blank" rel="noopener">مراقبون</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://www.rfi.fr/" target="_blank" rel="noopener">إذاعة فرنسا الدولية / RFI</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://savoirs.rfi.fr/ar/" target="_blank" rel="noopener">تعلَّم الفرنسية</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://musique.rfi.fr/" target="_blank" rel="noopener">RFI موسيقى</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://www.rfi-instrumental.com/en" target="_blank" rel="noopener">RFI تصميم الصوت</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://mondoblog.org/" target="_blank" rel="noopener">Mondoblog</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://www.infomigrants.net/ar/" target="_blank" rel="noopener">مهاجر نيوز</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://www.cfi.fr/en" target="_blank" rel="noopener">CFI</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://academie.france24-mcd-rfi.com/ar/" target="_blank" rel="noopener">الأكاديمية</a>
</li>
                                                    <li class="m-nav-list__list__item"><a href="https://www.francemediasmonde.com/ar/" target="_blank" rel="noopener">France Médias Monde</a>
</li>
                                            </ul>
                </template>
            </box-expand>
        </div>
        
        
        <div class="o-footer__block o-footer__block--cta" data-root-box-expand>
                        <div class="m-nav-list m-nav-list--bordered m-nav-list--double-column">
                <div class="m-nav-list__title">كل خدماتنا</div>
                <ul class="m-nav-list__list">
                                            <li class="m-nav-list__list__item"><a href="/%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA">بودكاست</a>
</li>
                                            <li class="m-nav-list__list__item"><a href="/%D8%AE%D8%AF%D9%85%D8%A9-RSS">خدمة RSS</a>
</li>
                                            <li class="m-nav-list__list__item"><a href="/%D9%85%D9%88%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%85%D8%A7%D8%B9">موجات الاستماع</a>
</li>
                                    </ul>
            </div>
                                    <div class="m-footer-logos">                <a href="https://www.francemediasmonde.com/ar/" target="_blank" rel="noopener" title="France&#x20;M&#x00E9;dias&#x20;Monde">
                    <span class="a-svg a-svg--logo-rfi"></span><span class="a-svg a-svg--logo-france24"></span><span class="a-svg a-svg--logo-mcd"></span><span class="a-svg a-svg--logo-fmm">France Médias Monde</span>
                </a>
            </div>
        </div>

                <div class="o-footer__block o-footer__block--fullwidth o-footer__block--bordered">
            <div class="m-nav-list  m-nav-list--special-links">
                <ul class="m-nav-list__list">
                                            <li class="m-nav-list__list__item"><a href="https://www.francemediasmonde.com/ar/legal-notice" target="_blank" rel="noopener">تنويهات قانونية</a>
</li>
                                            <li class="m-nav-list__list__item"><a href="https://www.francemediasmonde.com/ar/privacy" target="_blank" rel="noopener">البيانات الشخصية</a>
</li>
                                            <li class="m-nav-list__list__item"><a href="https://www.francemediasmonde.com/ar/cookies" target="_blank" rel="noopener">كوكيز</a>
</li>
                                    </ul>
            </div>
        </div>
        
                <div class="o-footer__block o-footer__block--fullwidth">
            <div class="m-nav-list m-nav-list--social-links">
                <ul class="m-nav-list__list">
                                            <li class="m-nav-list__list__item">
                            <a class="a-nav-link" href="https://mc-d.co/FB" title="فيس بوك" target="_blank" rel="noopener nofollow">
                                <span class="a-svg a-picto-social a-svg--picto-social-facebook"></span>فيس بوك
                            </a>
                        </li>
                                            <li class="m-nav-list__list__item">
                            <a class="a-nav-link" href="https://mc-d.co/X" title="X (تويتر)" target="_blank" rel="noopener nofollow">
                                <span class="a-svg a-picto-social a-svg--picto-social-twitter-x"></span>X (تويتر)
                            </a>
                        </li>
                                            <li class="m-nav-list__list__item">
                            <a class="a-nav-link" href="https://mc-d.co/IG" title="أنستغرام" target="_blank" rel="noopener nofollow">
                                <span class="a-svg a-picto-social a-svg--picto-social-instagram"></span>أنستغرام
                            </a>
                        </li>
                                            <li class="m-nav-list__list__item">
                            <a class="a-nav-link" href="https://mc-d.co/YT" title="يوتيوب" target="_blank" rel="noopener nofollow">
                                <span class="a-svg a-picto-social a-svg--picto-social-youtube"></span>يوتيوب
                            </a>
                        </li>
                                            <li class="m-nav-list__list__item">
                            <a class="a-nav-link" href="https://t.me/MC_Doualiya" title="تيليجرام" target="_blank" rel="noopener nofollow">
                                <span class="a-svg a-picto-social a-svg--picto-social-telegram"></span>تيليجرام
                            </a>
                        </li>
                                            <li class="m-nav-list__list__item">
                            <a class="a-nav-link" href="https://mc-d.co/TI" title="TuneIn" target="_blank" rel="noopener nofollow">
                                <span class="a-svg a-picto-social a-svg--picto-social-tunein"></span>TuneIn
                            </a>
                        </li>
                                            <li class="m-nav-list__list__item">
                            <a class="a-nav-link" href="https://mc-d.co/SC" title="ساوند كلاود" target="_blank" rel="noopener nofollow">
                                <span class="a-svg a-picto-social a-svg--picto-social-soundcloud"></span>ساوند كلاود
                            </a>
                        </li>
                                    </ul>
            </div>
        </div>
        
        <div class="o-footer__block o-footer__block--fullwidth">            <p class="a-footer-credits">
                © 2024 مونت كارلو الدولية - جميع الحقوق محفوظة. لا تتحمل مونت كارلو الدولية مسؤولية ما تتضمنه المواقع الأخرى.<a href="https://www.acpm.fr/Support-Numerique/site/france24-com" class="a-brand-logo a-svg a-svg--logo-acpm" target="_blank" rel="noopener" title="ACPM&#x20;&#x2F;&#x20;OJD">ACPM / OJD</a>
</p>
        </div>
    </footer>
</div>
            
                                                <div back-to-top class="m-back-to-top-wrapper">
    <back-to-top
        class="m-back-to-top"
        title="عودة إلى الأعلى"
    >
        <span class="a-svg a-svg--picto-back-to-top"></span>
            </back-to-top>
</div>
                            
                                                <div data-player-playlist>
    <player-playlist
        :enable-automatic-playlist="false"
    >
    </player-playlist>
</div>
                            
                            <div data-player-audio-panel>
    <player-audio-panel
        :enable-automatic-playlist="false"
    />
</div>
                                    <div data-fov-notify>
    <fov-notify></fov-notify>
</div>
                                <div class="o-sticky-wrapper">
                    <div data-root-urgent-banner></div>
                    <div id="root-audio-player" v-cloak>
    <player-audio
            ref="audioPlayer"
            player-container-id="main-audio-player"
            :default-media-id="mediaId"
            locale="ar"
            :add-editions-automatically="false"
            @metadata_is_loaded="onMetadataIsLoaded"
            @play="onPlayerPlay"
            @pause="onPlayerPause"
            @stop="onPlayerStop"
            @ready="onPlayerReady"
            @time_seek="onTimeSeek"
            @before_time_seek="onBeforeTimeSeek"
            @destroyed="onPlayerDestroyed"
    >
    </player-audio>
</div>                </div>
            
                            <div class="o-bottom-bar">
            <div class="o-bottom-bar__item"><div class="o-bottom-bar__item__link">
                    <a href="/" class="a-bottom-bar-link a-bottom-bar-link--active " data-action="homepage"
                       title="الرئيسية"
                    ><span class="a-bottom-bar-link__svg a-svg a-svg--picto-home-empty"></span><span class="a-bottom-bar-link__label">الرئيسية</span></a>
                </div>
                    </div>
            <div class="o-bottom-bar__item">                                                <div data-site-nav-button class="o-bottom-bar__item__link">
                                            <site-nav-button
                            nav-id="actualites_replays"
                            nav-label="برامج"
                        >
                            <template v-slot:svg-active><span class="a-bottom-bar-link__svg a-svg a-svg--picto-podcast-white"></span><span class="a-bottom-bar-link__label">برامج</span>
                            </template>
                            <template v-slot:svg-not-active>
                            <span class="a-bottom-bar-link__svg a-svg a-svg--picto-close"></span>
                            <span class="a-bottom-bar-link__label">
                                برامج
                            </span>
                            </template>
                        </site-nav-button>
                                    </div>
                    </div>
            <div class="o-bottom-bar__item o-bottom-bar__item--live">                                                                                                        
                            <div class="o-bottom-bar__item__link o-bottom-bar__item__link--desktop-only"><div class="a-player-links" data-site-nav-close>

        <script data-media-id="live_mcd" type="application/json">
        {"mediaId":"live_mcd","sources":[{"name":"live_mcd","url":"https:\/\/montecarlodoualiya128k.ice.infomaniak.ch\/mc-doualiya.mp3"}],"type":"live","emission":{"title":""},"diffusion":{"title":"\u0627\u0644\u0628\u062b \u0627\u0644\u0645\u0628\u0627\u0634\u0631","image":""}}
    </script>
<div
    class="a-audio-player-btn a-audio-player-btn--skeleton "
       data-root-audio-player-button    >
                <a class="a-audio-player-btn__seo-link" href="/البث-المباشر">
            <play-media
            v-bind:current-media="mediaId"
            v-bind:is-player-playing="isPlayerPlaying"
            media-id="live_mcd"
            tabindex="0"            v-on:emitted-click="playOrPause"
            classes=""
            play-class=""
            pause-class=""
            page-url="/البث-المباشر"
            :smaller-icons="true"
            :add-editions-automatically="false"
            :is-live="false"
            data-label="البث   المباشر"
        >
                                <template #play>
            <span
                class="a-player-links__link"
                title="تشغيل"
            >
                                <span class="a-svg a-svg--picto-play-circled-live">
                    <div class="a-circle-loader">
    <div class="a-circle-loader__bg-circle"></div>
    <div class="a-circle-loader__main-circle"></div>
</div>
                </span>
                                <div class="a-player-links__link__live">
                    <span class="a-player-links__link__live-subname">البث </span><span class="a-player-links__link__live-name"> المباشر</span></div>
            </span>
        </template>
                        <template #pause>
            <span
              class="a-player-links__link"
              title="إيقاف مؤقت"
            >
                                <span class="a-svg a-svg--picto-pause-circled-live"></span>
                                <div class="a-player-links__link__live">
                    <span class="a-player-links__link__live-subname a-player-links__link__live-subname">البث </span><span class="a-player-links__link__live-name a-player-links__link__live-name"> المباشر</span></div>
            </span>
        </template>
            </play-media>
                    </a>
    </div>

</div>

</div>
                                                                            <div  class="o-bottom-bar__item__link o-bottom-bar__item__link--mobile-only o-bottom-bar__item__link--live">
                                                                        <div class="a-player-links" data-site-nav-close>

        <script data-media-id="live_mcd" type="application/json">
        {"mediaId":"live_mcd","sources":[{"name":"live_mcd","url":"https:\/\/montecarlodoualiya128k.ice.infomaniak.ch\/mc-doualiya.mp3"}],"type":"live","emission":{"title":""},"diffusion":{"title":"\u0627\u0644\u0628\u062b \u0627\u0644\u0645\u0628\u0627\u0634\u0631","image":""}}
    </script>
<div
    class="a-audio-player-btn a-audio-player-btn--skeleton "
       data-root-audio-player-button    >
                <a class="a-audio-player-btn__seo-link" href="/البث-المباشر">
            <play-media
            v-bind:current-media="mediaId"
            v-bind:is-player-playing="isPlayerPlaying"
            media-id="live_mcd"
            tabindex="0"            v-on:emitted-click="playOrPause"
            classes=""
            play-class=""
            pause-class=""
            page-url="/البث-المباشر"
            :smaller-icons="true"
            :add-editions-automatically="false"
            :is-live="false"
            data-label="البث   المباشر"
        >
                                <template #play>
            <span
                class="a-player-links__link"
                title="تشغيل"
            >
                                <span class="a-svg a-svg--picto-play-circled-live">
                    <div class="a-circle-loader">
    <div class="a-circle-loader__bg-circle"></div>
    <div class="a-circle-loader__main-circle"></div>
</div>
                </span>
                                <div class="a-player-links__link__live">
                    <span class="a-player-links__link__live-subname">البث </span><span class="a-player-links__link__live-name"> المباشر</span></div>
            </span>
        </template>
                        <template #pause>
            <span
              class="a-player-links__link"
              title="إيقاف مؤقت"
            >
                                <span class="a-svg a-svg--picto-pause-circled-live"></span>
                                <div class="a-player-links__link__live">
                    <span class="a-player-links__link__live-subname a-player-links__link__live-subname">البث </span><span class="a-player-links__link__live-name a-player-links__link__live-name"> المباشر</span></div>
            </span>
        </template>
            </play-media>
                    </a>
    </div>

</div>

                                                            </div>
                    </div>
            <div class="o-bottom-bar__item">                                                <div data-site-nav-button class="o-bottom-bar__item__link">
                                            <site-nav-button
                            nav-id="actualites"
                            nav-label="أخبار"
                        >
                            <template v-slot:svg-active><span class="a-bottom-bar-link__svg a-svg a-svg--picto-thematic"></span><span class="a-bottom-bar-link__label">أخبار</span>
                            </template>
                            <template v-slot:svg-not-active>
                            <span class="a-bottom-bar-link__svg a-svg a-svg--picto-close"></span>
                            <span class="a-bottom-bar-link__label">
                                أخبار
                            </span>
                            </template>
                        </site-nav-button>
                                    </div>
                    </div>
        <div class="o-bottom-bar__item o-bottom-bar__item--burger">
        <div data-site-nav-button class="o-bottom-bar__item__link o-bottom-bar__item__link--main o-bottom-bar__item__link--mobile-only">
                        <site-nav-button
                nav-id="menu"
                nav-label="القائمة"
            >
                <template v-slot:svg-active>
                    <span class="a-bottom-bar-link__svg a-svg a-svg--picto-burger"></span>
                    <span class="a-bottom-bar-link__label">القائمة</span>
                </template>
                <template v-slot:svg-not-active>
                    <span class="a-bottom-bar-link__svg a-svg a-svg--picto-close"></span>
                    <span class="a-bottom-bar-link__label">القائمة</span>
                </template>
            </site-nav-button>
        </div>
    </div>
</div>
                    
                    
    
    
    
    

    



    
<script type="text/javascript">
    window.contextlayer = {"semver":"4.0.1.4","lang":"ar","translations":{"modal.close.label":"\u064a\u063a\u0645\u0636","custom.youtube.consent.notice.text":"\u0625\u064a\u062f\u0627\u0639 \u064a\u0648\u062a\u064a\u0648\u0628 \u0644\u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637 \u063a\u064a\u0631 \u0645\u0641\u0639\u0644. \u0644\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0641\u064a\u062f\u064a\u0648:","custom.youtube.consent.notice.or":"\u0623\u0648","custom.youtube.consent.notice.acceptAllConsentForVendor":"\u0623\u0633\u0645\u062d \u0628\u062c\u0645\u0639 \u0646\u0633\u0628 \u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629 \u0648\u0625\u0639\u0644\u0627\u0646\u0627\u062a \u0627\u0644\u064a\u0648\u062a\u064a\u0648\u0628","custom.youtube.consent.notice.acceptAllConsent":"\u0623\u0633\u0645\u062d \u0628\u062c\u0645\u0639 \u0646\u0633\u0628 \u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629 \u0648 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062a \u0644\u062c\u0645\u064a\u0639 \u0627\u0644\u0634\u0631\u0643\u0627\u0621","share.link.copied":"\u062a\u0645 \u0646\u0633\u062e \u0627\u0644\u0631\u0627\u0628\u0637","ad.blocks.label":"\u0625\u0639\u0644\u0627\u0646","playlist.module.label":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631","playlist.auto.show":"playlist.auto.show","playlist.add.cta":"\u0623\u0636\u0641 \u0625\u0644\u0649 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631","playlist.added.confirmation":"\u0623\u0636\u0641 \u0625\u0644\u0649 %start_u%\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631%end_u%","playlist.remove.cta":"\u0627\u062d\u0630\u0641 \u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631","playlist.removed.confirmation":"\u0627\u062d\u0630\u0641 \u0645\u0646 %start_u%\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631%end_u%","playlist.empty.label":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643 \u0641\u0627\u0631\u063a\u0629","playlist.discover.podcasts.cta":"\u0627\u0643\u062a\u0634\u0641 \u0645\u0633\u0644\u0633\u0644\u0627\u062a\u0646\u0627 \u0627\u0644\u0625\u0630\u0627\u0639\u064a\u0629","player.options.chromeCast":"player.options.chromeCast","player.options.download":"\u062a\u062d\u0645\u064a\u0644 \u0645\u0644\u0641 \u0635\u0648\u062a\u064a","player.options.share":"\u0645\u0634\u0627\u0631\u0643\u0629 \u0645\u0644\u0641 \u0635\u0648\u062a\u064a","player.options.playlist":"player.options.playlist","player.transcription.open":"player.transcription.open","player.transcription.close":"player.transcription.close","player.transcription.zoomIn":"player.transcription.zoomIn","player.transcription.zoomOut":"player.transcription.zoomOut","podcasts.show.program":"\u0634\u0627\u0647\u062f \u0627\u0644\u0639\u0631\u0636","podcasts.subscribe.cta":"\u0627\u0634\u062a\u0631\u0643","podcasts.play_button.label":"\u0627\u0633\u062a\u0645\u0639","autoload.panel.cancel":"autoload.panel.cancel","autoload.panel.continues_in":"autoload.panel.continues_in","push.web.alert.text":"\u0644\u0627 \u062a\u0641\u0648\u062a \u0623\u064a \u0634\u064a\u0621 \u0639\u0646 \u0637\u0631\u064a\u0642 \u0627\u0644\u0625\u0634\u062a\u0631\u0627\u0643 \u0625\u0644\u0649 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0628\u0645\u0648\u0646\u062a \u0643\u0627\u0631\u0644\u0648 \u0627\u0644\u062f\u0648\u0644\u064a\u0629","push.web.alert.positiveSubBtnLabel":"\u0627\u0634\u062a\u0631\u0627\u0643","push.web.alert.negativeBtnLabel":"\u0644\u0627 \u0634\u0643\u0631\u0627","push.web.notification.title":"\u0634\u0643\u0631\u0627\u064b \u0644\u0627\u0634\u062a\u0631\u0627\u0643\u0643\u0645 \u0641\u064a \u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0645\u0648\u0646\u062a \u0643\u0627\u0631\u0644\u0648 \u0627\u0644\u062f\u0648\u0644\u064a\u0629!","push.web.notification.message":"\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0647\u0630\u0627 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064a\u062f \u062d\u0648\u0644 \u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0627\u0644\u0648\u064a\u0628","site_setting.notifications.enable":"Activer les notifications","site_setting.notifications.disable":"D\u00e9sactiver les notifications","pwa.button.install":"\u062d\u0645\u0644 \u062a\u0637\u0628\u064a\u0642 \u0645\u0648\u0646\u062a \u0643\u0627\u0631\u0644\u0648 \u0627\u0644\u062f\u0648\u0644\u064a\u0629","pwa.text.default":"\u064a\u0645\u0643\u0646\u0643 \u0628\u0633\u0647\u0648\u0644\u0629 \u0625\u0636\u0627\u0641\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0625\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0641\u0648\u0631\u064a \u0625\u0644\u064a\u0647 \u0648\u0627\u0644\u0627\u0633\u062a\u0645\u062a\u0627\u0639 \u0628\u062a\u062c\u0631\u0628\u0629 \u062a\u0635\u0641\u062d \u0623\u0633\u0631\u0639.","pwa.text.ios_part1":"1. \u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0631\u0645\u0632 %icon% \u0641\u064a Safari","pwa.text.ios_part2":"2. \u062d\u062f\u062f \"\u0639\u0644\u0649 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629\"","pwa.button.ok":"\u064a\u063a\u0645\u0636","pwa.button.continue":"\u062a\u0627\u0628\u0639 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639","pwa.offline.banner.text":"\u064a\u0628\u062f\u0648 \u0623\u0646\u0643 \u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a","pwa.back.button":"pwa.back.button.label","site_setting.install.pwa":"Ajouter \u00e0 l'\u00e9cran d'accueil"},"site_nav":{"burger_button_title":"\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0635\u0641\u062d","site_brand":"mcd"},"playlist":[],"player_audio":{"play_loader":"<div class=\"a-circle-loader\">\n    <div class=\"a-circle-loader__bg-circle\"><\/div>\n    <div class=\"a-circle-loader__main-circle\"><\/div>\n<\/div>","synchro_btn_label":"\u062a\u0632\u0627\u0645\u0646","adstr":"\u0625\u0639\u0644\u0627\u0646","gcast_receiver_application_id":"83CC040A"},"podcast_options":{"arrow_icon":"left-arrow"},"diaporama":{"prev_icon":"chevron-right","next_icon":"chevron-left"},"player":{"broadcasType":"replay","enableTranscription":false,"enableChapter":false,"readingSpeed":[0.5,1,1.5],"currentTime":{"forward":15,"backward":15},"buttons":["playlist","backward","forward"],"options":{"zoom":null,"chromeCast":true,"download":true,"share":true,"playlist":true},"panelImage":[]},"player_configs":[],"gdpr_compliance":true,"ws_urgent":"\/_ws\/urgent","push_notification":true,"progressive_web_app":true,"back_to_top":true,"survey_modal":false,"social_share":{"facebook":{"fb_app_id":"391420110887706"},"twitter":{"twitter_creator":"@MC_Doualiya"}},"play_audio_btn_list":false,"ajax_breaking":true,"config":{"image":{"webp_format":true,"width_dictionnary":[66,70,90,110,130,147,187,195,177,246,255,291,308,345,360,388,407,410,532,600,652,720,1024]}},"redirect_url":[],"batch_push_enabled":true,"batch_push":{"brand_color":"#e20000","html_direction":"rtl","domain":"https:\/\/www.mc-doualiya.com","locale":"ar","api_key":"0E0E09FAEEA84B5CA7CB3E50DAAEAC02","sub_domain":"mcd","auth_key":"2.kN8ptNTz0nZmyTksnSw1EUH\/+MCL82g7LcoQKzOSVbk=","vapid_public_key":"BAMTVLefGyjUjP9DfoUk4xncb\/xxmbVTQa5hCH3LwJ6NY7fJqPaM1\/SNylTTs2mIGu3L5NP8U0nZ3rTmg9xm7dU=","dev":false,"explanation_url":"https:\/\/www.mc-doualiya.com\/%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a5%d8%b4%d8%b9%d8%a7%d8%b1%d8%a7%d8%aa"},"brand":{"currentBrand":"mcd"},"pwa":{"path_locale":"\/"},"programs_page_url":"\/%D8%A8%D8%B1%D8%A7%D9%85%D8%AC\/","playlist_enabled":true}
</script>
        
        
                <script>(()=>{"use strict";var e,t={88254:(e,t,n)=>{n(36147);var r=n(62559),o=n(56287),i=n(17930),a=n(27641),c=n(29909);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=["protocol","hash","host","hostname","href","origin","pathname","search"],d=function(e){var t,n,r=document.createElement("a");return r.href=e,t=r,n=u,"object"!==(0,c.Z)(t)?{}:n.reduce((function(e,n){return n in t&&(e[n]=t[n]),e}),{})},f=function(e){return e.split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1]||"",e}),{})},p=function(e,t){return e.search===t.search||e.search.length===t.search.length&&function(e,t){var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;var o=!0;return n.forEach((function(n){r.includes(n)&&e[n]===t[n]||(o=!1)})),o}(f(e.search.split("?").pop()),f(t.search.split("?").pop()))},h=function(e,t){return e.pathname===t.pathname&&p(e,t)},m=function(e,t){return e.origin===t.origin},v=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1};const w=function(e,t){return v.call(e,t)};const b=function(e){return new Promise((function(e){"complete"===window.document.readyState&&e(),window.document.addEventListener("DOMContentLoaded",(function(){e()}))})).then(e)};var g=n(50814),y=n(59107),S=n.n(y),k=window.PubSub,O="",E="";const L={injectTmsManager:function(e){k=e,O=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",E=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""},isUserOffline:function(){return!!window.navigator&&!window.navigator.onLine},isTmsUnavailable:function(){return!k},publish:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=this.addPrefix(O,e);if(!this.isTmsUnavailable())if(this.isUserOffline()){if(o<=0)return;setTimeout((function(){t.publish(i,n,r,o-1)}),5e3)}else{k[r?"publishSync":"publish"](i,n)}},sendSync:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.addPrefix(O,e);k.publishSync(n,t)},subscribe:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=this.addPrefix(E,e);return k.subscribe(n,t)},subscribeOnce:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=this.addPrefix(E,e);return k.subscribeOnce(n,t)},unsubscribe:function(e){var t=this.addPrefix(E,e);k.unsubscribe(t)},addPrefix:function(e,t){return t.startsWith(e)?t:"".concat(e,".").concat(t)}};var C="",x="",P="",j="",_={},V=!1,N=function(){var e,t,n,r,o,i;e=window,t=document,n="script",e[r="batchSDK"]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},o=t.createElement(n),i=t.getElementsByTagName(n)[0],o.async=1,o.src="https://via.batch.com/v3/bootstrap.min.js",i.parentNode.insertBefore(o,i)},T=function(){var e={native:{}};return(-1!==navigator.userAgent.indexOf("Firefox")||-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome"))&&(e={alert:{autoShow:!1,icon:C,zIndex:99999999,text:_["push.web.alert.text"],positiveSubBtnLabel:_["push.web.alert.positiveSubBtnLabel"],negativeBtnLabel:_["push.web.alert.negativeBtnLabel"],positiveBtnStyle:{backgroundColor:P,hoverBackgroundColor:P,shadow:!0}}}),e},R=function(){var e=(0,g.Z)(S().mark((function e(){var t,n;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(/(?=.*(chrome)).*/i.test(navigator.userAgent)&&navigator.storage&&navigator.storage.estimate)){e.next=7;break}return e.next=4,navigator.storage.estimate();case 4:return t=e.sent,n=t.quota,e.abrupt("return",n<12e7);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=new Promise((function(e){try{e(R())}catch(t){e(!1)}})),q=function(e){var t=document.querySelector(".o-site-setting-push-label");t&&(V=e,t.textContent=e?_["site_setting.notifications.disable"]:_["site_setting.notifications.enable"])},D=function(e){batchSDK((function(e){e.isSubscribed().then((function(e){q(e)}))})),null!=document.querySelector("[data-notification-btn]")&&document.querySelector("[data-notification-btn]").addEventListener("click",(function(){batchSDK((function(e){e[V?"unsubscribe":"subscribe"]().then((function(e){q(e)}))}))})),batchSDK((function(t){t.setUserLanguage(e.locale),t.editUserData((function(t){t.setAttribute("lg",e.locale)})),t.on("subscriptionChanged",(function(e,t){q(t.subscribed),"1"!==localStorage.getItem("com.batch.displayed_onboard_notif")&&!0===t.subscribed&&(localStorage.setItem("com.batch.displayed_onboard_notif","1"),navigator.serviceWorker.ready.then((function(e){e.showNotification(_["push.web.notification.title"],{body:_["push.web.notification.message"],data:{title:" ",alert:" ","com.batch":{da:{a:"batch.deeplink",args:{l:j,newTab:!0}}}}})})))}))}))};function Z(){var e=window.contextlayer.batch_push_enabled||!1,t=window.contextlayer.batch_push||{};return A.then((function(n){if(!0===e&&Object.keys(t).length>0&&!1===n){C="".concat(t.domain,"/android-chrome-192x192.png"),x="".concat(t.domain,"/favicon-mono-96x96.png"),P=t.brand_color,t.html_direction,j=t.explanation_url,_=window.contextlayer.translations||{};var r={};return r[t.domain]="web."+t.sub_domain+".safari",N(),batchSDK("setup",{apiKey:t.api_key,subdomain:t.sub_domain,authKey:t.auth_key,vapidPublicKey:t.vapid_public_key,defaultIcon:C,smallIcon:x,ui:T(),safari:r,dev:t.dev,useExistingServiceWorker:!!window.contextlayer.progressive_web_app}),D(t),L.subscribe("tms.event.marketing.push_subscription",(function(){batchSDK("ui.show","alert",!0)})),!0}return!1}))}const B=function(e){return Number.isNaN(Number(e))?e:Number(e)};var M="cookies",z="create_content_profile",W="measure_content_performance",H=[M,"select_basic_ads","measure_ad_performance",W,"market_research","improve_products"],U=["create_ads_profile","select_personalized_ads",z,"select_personalized_content"];const F={getUserStatus:function(){var e;return window.didomiOnReady.push((function(t){e=t.getUserStatus()})),e},checkVendorStatus:function(e){var t=this.getUserStatus(),n=t?t.vendors.global.enabled:[];return e=B(e),!!(n&&n.length>0)&&n.includes(e)},checkAnalytics:function(){var e=this.getUserStatus(),t=e?e.purposes.global.enabled:[];if(t&&t.length>0){var n=!1;return H.forEach((function(e){return n=t.includes(e)})),n}return!1},enableAllPurposes:function(){window.didomiOnReady.push((function(e){var t=e.openTransaction(),n=[].concat((0,r.Z)(H),(0,r.Z)(U));t.enablePurposes.apply(t,(0,r.Z)(n)),t.commit()}))},enableAllVendors:function(){window.didomiOnReady.push((function(e){e.setUserAgreeToAll()}))},enableVendors:function(e,t){window.didomiOnReady.push((function(n){var r=n.openTransaction();r.enableVendors(e,t),r.commit()}))},enablePreferences:function(){window.didomiOnReady.push((function(e){e.preferences.show("purposes")}))}};var I=function(){function e(){(0,o.Z)(this,e),window.didomiOnReady=window.didomiOnReady||[],this.showReferenceElement=void 0,this.vendor=void 0}return(0,i.Z)(e,[{key:"setTogglePreferenceElement",value:function(e){this.showReferenceElement=e}},{key:"setVendor",value:function(e){this.vendor=e}},{key:"showReference",value:function(){this.showReferenceElement&&this.showReferenceElement.addEventListener("click",(function(e){e.preventDefault(),F.enablePreferences()}))}},{key:"isVendorEnabled",value:function(){return F.checkVendorStatus(this.vendor)&&F.checkAnalytics()}}],[{key:"enableAllConsent",value:function(){F.enableAllPurposes(),F.enableAllVendors()}},{key:"enableAllConsentForVendor",value:function(e,t){F.enableAllPurposes(),F.enableVendors(e,t)}}]),e}(),K=function(){function e(){(0,o.Z)(this,e),window.didomiOnReady=window.didomiOnReady||[],window.didomiEventListeners=window.didomiEventListeners||[],this.flag="rs-script",this.documentBody=document.body,this.deleteRsScripts()}return(0,i.Z)(e,[{key:"generateScript",value:function(e,t){var n=this;(0,r.Z)(this.documentBody.querySelectorAll(e)).forEach((function(){n.createScript(t)}))}},{key:"createTwitterScript",value:function(){this.generateScript('blockquote[class="twitter-tweet"]',"https://platform.twitter.com/widgets.js")}},{key:"createInstagramScript",value:function(){this.generateScript('blockquote[class="instagram-media"]',"//www.instagram.com/embed.js")}},{key:"createTelegramScript",value:function(){this.generateScript("[data-telegram-script]","https://telegram.org/js/telegram-widget.js")}},{key:"createH5pResizerScript",value:function(){this.generateScript("[data-h5p-resizer-script]","https://fle-rfi.h5p.com/js/h5p-resizer.js")}},{key:"createScript",value:function(e){var t=document.createElement("script");t.setAttribute("src",e),t.setAttribute("type","text/javascript"),t.setAttribute("async",""),t.setAttribute("data-".concat(this.flag),""),document.head.append(t)}},{key:"deleteRsScripts",value:function(){var e=document.querySelector("head");(0,r.Z)(e.querySelectorAll("script[data-".concat(this.flag,"]"))).forEach((function(e){e.remove()}))}}],[{key:"getConsentStatus",value:function(e){var t=window.Didomi.getUserStatus();return e=B(e),t.purposes.global.enabled.includes(M)&&t.purposes.global.enabled.includes(W)&&t.purposes.global.enabled.includes(z)&&t.vendors.global.enabled.includes(e)}}]),e}();(0,a.Z)(K,"vendorNames",{twitter:"twitter",instagram:"c:instagram",batch:"c:batch",telegram:"c:telegram",facebook:"c:facebook"});var $=(0,r.Z)(document.querySelectorAll("[".concat("data-gdpr-show-preferences","]")));var X=n(49458),J=function(e,t,n){switch(n){case"success":e.$successCallback=t;break;case"failure":e.$failureCallback=t;break;default:e.$copyValue=t}return e},Q=function(e){return function(e){if(!e)return Promise.resolve("");if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(e).then((function(){return e}));var t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",document.body.append(t),t.focus(),t.select();try{return document.execCommand("copy"),Promise.resolve(e)}catch(e){return Promise.reject(e)}finally{t.remove()}}(e.$copyValue).then((function(t){var n;null===(n=e.$successCallback)||void 0===n||n.call(e)})).catch((function(t){var n;null===(n=e.$failureCallback)||void 0===n||n.call(e)}))};const Y={created:function(e,t){var n=t.value,r=t.arg;if(e=J(e,n,r),void 0===r){var o=Q.bind(void 0,e);e.addEventListener("click",o),e.$destroyCopy=function(){return e.removeEventListener("click",o)}}},unmounted:function(e){var t;null===(t=e.$destroyCopy)||void 0===t||t.call(e)},updated:function(e,t){var n=t.value,r=t.arg;J(e,n,r)}},G={install:function(e){e.config.globalProperties.$translate=function(e){return function(e){var t=window.contextlayer.translations||{};return void 0===t[e]?"":t[e]}(e)}}};var ee=n(51714),te=n(92109),ne=n(14595);const re={install:function(e,t){var n,r,o=t||(r=[te.Z],null!==(n=window.contextlayer)&&void 0!==n&&n.audio_ad_preroll&&r.push(ne.Z),new ee.Q(r));window.RFCorePlayer=window.RFCorePlayer||o,e.config.globalProperties.RFCorePlayer=window.RFCorePlayer}},oe={getSelector:function(e){if(!e)return"";var t=this.getIdSelector(e);return t||(t=this.getDatasetSelector(e)),t||(t=this.getClassesSelector(e)),t||""},getIdSelector:function(e){var t=e.getAttribute("id");return t?"#".concat(t):""},getDatasetSelector:function(e){var t=Object.keys(e.dataset).find((function(e){return"vApp"!==e}));return t?"[data-".concat(t,"]").replace(/[A-Z]/g,(function(e){return"-".concat(e.toLowerCase())})):""},getClassesSelector:function(e){var t=e.classList;return(0,r.Z)(t).map((function(e){return".".concat(e)})).join("")}};var ie,ae,ce,se=(ie=function(){L.publish("fov.render.mounted",(0,r.Z)(window.mountedSelectors)),window.mountedSelectors=new Set},ae=1e3,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];clearTimeout(ce),ce=setTimeout((function(){window.mountedSelectors.size>0&&ie(t)}),ae)});const le={install:function(e){e.mixin({mounted:function(){var e=oe.getSelector(this.$el.parentElement);window.mountedSelectors||(window.mountedSelectors=new Set),e&&window.mountedSelectors.add(e),se()}})}};var ue=n(20771);const de=(0,ue.WB)();var fe=function(e){var t=e.target,n=e.componentToMount,r=void 0===n?{}:n,o=e.plugins,i=void 0===o?[]:o,a=e.filters,c=function(e){var t=e.componentToCreate,n=void 0===t?{}:t,r=e.plugins,o=void 0===r?[]:r,i=e.filters,a=void 0===i?[]:i,c=(0,X.createApp)(n);return o.forEach((function(e){c.use(e)})),a.forEach((function(e){c.filter(e.id,e.filter)})),c.directive("clipboard",Y),c.use(re),c.use(le),c.use(G),c.use(de),c.config.compilerOptions.whitespace="preserve",c}({componentToCreate:r,plugins:i,filters:void 0===a?[]:a});return c.mount(t)},pe=n(23682);const he=(0,ue.Q_)("fmmVersion",{state:function(){return{originalVersion:(0,pe.XsL)("currentSemver",""),otherVersions:(0,pe.XsL)("allSemver",[])}},getters:{hasConflicts:function(){var e=this;return this.otherVersions.some((function(t){return t.semver!==e.originalVersion}))}},actions:{saveOriginalVersion:function(e){this.originalVersion!==e&&this.resetStoredVersions(),this.originalVersion=e},saveNewVersion:function(e){var t=e.url,n=e.headers,r=n["x-fmm-version"];r&&this.otherVersions.push({semver:r,url:t,headers:n})},resetStoredVersions:function(){this.otherVersions=[]}}});var me={class:"fmm-version-container"},ve={key:0},we={class:"a-button"},be={class:"action-container"},ge={class:"a-button"};function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ke={name:"FmmVersion",data:function(){return{isDetailsContainerOpen:!1}},computed:Se({},(0,ue.Kc)(he)),methods:Se(Se({},(0,ue.nv)(he,["resetStoredVersions"])),{},{toggleDetails:function(){this.fmmVersionStore.hasConflicts&&(this.isDetailsContainerOpen=!this.isDetailsContainerOpen)},isDifferentVersion:function(e){return this.fmmVersionStore.originalVersion!==e}})};const Oe=(0,n(83744).Z)(ke,[["render",function(e,t,n,r,o,i){var a=(0,X.resolveDirective)("clipboard");return(0,X.openBlock)(),(0,X.createElementBlock)("div",me,[(0,X.createElementVNode)("span",{class:(0,X.normalizeClass)(["original-semver",{"has-conflicts":e.fmmVersionStore.hasConflicts}]),onClick:t[0]||(t[0]=function(){return i.toggleDetails&&i.toggleDetails.apply(i,arguments)})},[(0,X.createTextVNode)((0,X.toDisplayString)(e.fmmVersionStore.originalVersion)+" ",1),e.fmmVersionStore.hasConflicts?((0,X.openBlock)(),(0,X.createElementBlock)("span",ve,"⚠")):(0,X.createCommentVNode)("",!0)],2),e.fmmVersionStore.hasConflicts?((0,X.openBlock)(),(0,X.createElementBlock)("div",{key:0,class:(0,X.normalizeClass)(["details-container",{open:o.isDetailsContainerOpen}])},[(0,X.createElementVNode)("table",null,[((0,X.openBlock)(!0),(0,X.createElementBlock)(X.Fragment,null,(0,X.renderList)(e.fmmVersionStore.otherVersions,(function(e,t){return(0,X.openBlock)(),(0,X.createElementBlock)("tr",{key:t,class:(0,X.normalizeClass)({"is-different":i.isDifferentVersion(e.semver)})},[(0,X.createElementVNode)("td",null,(0,X.toDisplayString)(e.semver),1),(0,X.createElementVNode)("td",null,(0,X.toDisplayString)(e.url),1),(0,X.createElementVNode)("td",null,[(0,X.withDirectives)(((0,X.openBlock)(),(0,X.createElementBlock)("a",we,[(0,X.createTextVNode)("📋")])),[[a,JSON.stringify(e)]])])],2)})),128))]),(0,X.createElementVNode)("div",be,[(0,X.withDirectives)(((0,X.openBlock)(),(0,X.createElementBlock)("a",ge,[(0,X.createTextVNode)("📋 All to clipboard")])),[[a,JSON.stringify(e.fmmVersionStore.otherVersions)]]),(0,X.createElementVNode)("a",{class:"a-button",onClick:t[1]||(t[1]=function(){return e.resetStoredVersions&&e.resetStoredVersions.apply(e,arguments)})},"🗑 Clear history")])],2)):(0,X.createCommentVNode)("",!0)])}]]),Ee=function(){var e,t=window.contextlayer,n=t.show_semver,r=t.semver;if(n){var o=document.createElement("style");o.innerHTML=".a-fmm-version-wrapper {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 999999999;\n}\n .a-fmm-version-wrapper .original-semver {\n    font-size: 1rem;\n    padding: 4px 10px;\n}\n .a-fmm-version-wrapper .original-semver.has-conflicts {\n    color: red;\n    cursor: pointer;\n}\n .a-fmm-version-wrapper .details-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: -1;\n    padding: 2rem 0;\n    background-color: rgba(0,0,0,0.8);\n    color: white;\n    text-align: left;\n    display: none;\n}\n .a-fmm-version-wrapper .details-container.open {\n    display: block;\n}\n .a-fmm-version-wrapper .details-container .is-different {\n    color: #ffa9a9;\n}\n .a-fmm-version-wrapper .details-container td {\n    padding: 1rem 0.5rem;\n}\n .a-fmm-version-wrapper .details-container .action-container {\n    display: flex;\n    justify-content: space-evenly;\n    margin-top: 2rem;\n}\n .a-fmm-version-wrapper .a-button {\n    font-size: 1em;\n    cursor: pointer;\n}\n ";var i=document.createElement("div"),a=document.createElement("fmm-version");i.append(a),i.classList.add("a-fmm-version-wrapper"),document.body.append(i),document.body.append(o),fe({target:".a-fmm-version-wrapper",componentToMount:{name:"FmmVersionWrapper",components:{FmmVersion:Oe}}}),(e=he()).saveOriginalVersion(r)}return e};var Le=function(){function e(t,n,r,i,a){(0,o.Z)(this,e),this.body=t,this.headers=n,this.from=r,this.to=i,this.originalTo=a,this.navigationCancelled=!1}return(0,i.Z)(e,[{key:"cancelNavigation",value:function(){this.navigationCancelled=!0}},{key:"isCancelled",value:function(){return this.navigationCancelled}}]),e}();const Ce="navigation.init_env",xe="navigation.request.finished",Pe="navigation.request.start",je="navigation.request.process",_e="navigation.request.finished.success",Ve="navigation.request.finished.failure";var Ne=n(15512),Te=n.n(Ne),Re=function(){function e(){(0,o.Z)(this,e),this.xhr=void 0}return(0,i.Z)(e,[{key:"fetch",value:function(e,t){var n=this;return this.xhr&&4!==this.xhr.readyState&&(this.xhr.abort(),this.latestPromise=new Promise((function(e){e()}))),this.latestPromise=new Promise((function(r,o){n.xhr=Te()(e,t,(function(e,t,n){return e?o(e):t.statusCode>=200&&t.statusCode<300?r({response:t,body:n}):((e=new Error("".concat(t.statusCode," - ").concat(t.rawRequest.statusText))).url=t.url,e.referrer=window.location.href,e.httpCode=t.statusCode,e.httpError=t.rawRequest.statusText,o(e))}))})),this.latestPromise}}]),e}();const Ae=function(e,t,n){window.history.replaceState({url:e.href,title:t,hash:e.hash,scrollPosition:"number"==typeof n?n:window.pageYOffset},t,e.href)},qe=function(e,t,n){window.history.pushState({url:e.href,title:t,hash:e.hash,scrollPosition:"number"==typeof n?n:window.pageYOffset},t,e.href)};const De=function(e){return function(t,n){n.blur(),"number"==typeof t.button&&0!==t.button||"string"==typeof n.href&&["","_self"].includes(n.target)&&e(t,n)}};var Ze=function(e,t,n){window.arenaim&&window.arenaim.initializeLiveblog&&window.arenaim.initializeLiveblog(),window.arenaChatCodeLoaded&&(window.arenaChatCodeLoaded=!1),["webpackChunkOptaWidgetsV3","Opta"].forEach((function(e){e in window&&delete window[e]}));var o=document.createElement("div");o.innerHTML=e,(0,r.Z)(o.querySelectorAll("script")).filter((function(e){var t=e.getAttribute("type");return!t||"text/javascript"===t})).forEach((function(e){var o=document.createElement("script");o.innerHTML=e.innerHTML,o.setAttribute("data-".concat(n),""),o.setAttribute("async",""),(0,r.Z)(e.attributes).forEach((function(e){/data-/.test(e.name)||o.setAttribute(e.name,e.value)})),t.append(o)}))};const Be=function(e,t,n,o){!function(e,t){(0,r.Z)(e.querySelectorAll("script[data-".concat(t,"]"))).forEach((function(e){e.remove()}))}(n,o),t.innerHTML=e,Ze(e,n,o)};function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var We={"link-selector":"a","container-selector":"[data-nav-container]","script-container-selector":"head","runtime-flag":"runtime-script","query-parameters":"xmlhttprequest=1","offset-element-top":0},He=ze({redirect_url:[]},window.contextlayer).redirect_url,Ue=function(){function e(t){(0,o.Z)(this,e),this.object=Object,this.options=ze(ze({},We),t),this.fetcher=new Re,this.container=void 0,this.init=!1,this.scriptContainer=void 0,this.lastRecordedLocation=d(window.location.href),this.fmmVersionStore=Ee()}return(0,i.Z)(e,[{key:"recordLocation",value:function(e){this.lastRecordedLocation=d(e)}},{key:"updateReferrer",value:function(e){this.object.defineProperty(window.document,"referrer",{value:e,writable:!0})}},{key:"handleScroll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e){var n=document.querySelector(e);if(n)return void window.scrollTo(0,n.offsetTop+this.options["offset-element-top"]||0)}window.scrollTo(0,t||0)}},{key:"changePage",value:function(t,n){var r=this,o=t.href,i=t.title,a=t.scrollPosition,c=void 0===a?0:a,s=t.hash,u=void 0===s?"":s,f=function(e,t){if("string"!=typeof e)throw new TypeError("href must be a string");if(!t)return e;var n=e.split("#"),r=n[0].includes("?")?"&":"?";return n[0]="".concat(n[0]).concat(r).concat(t),n.join("#")}(o,this.options["query-parameters"]);return window.navAjaxCheck=!0,L.publish(Pe,{url:f,title:i,scrollPosition:c,isPopstate:n}),n||Ae(window.location,window.document.title),this.fetcher.fetch(f,{method:"GET",headers:{"content-type":"text/html","X-Requested-With":"XMLHttpRequest"}}).then((function(t){var a,s=t.body,f=t.response;null===(a=r.fmmVersionStore)||void 0===a||a.saveNewVersion({url:f.url,headers:f.headers});var p,h,m=f.rawRequest&&"string"==typeof f.rawRequest.responseURL?function(e,t){var n=d(e);if(!n.search)return e;var r=t.split("&"),o=n.search.split("?").pop().split("&").filter((function(e){return!r.includes(e)})).join("&");return function(e){var t=e.protocol,n=void 0===t?"":t,r=e.host,o=void 0===r?"":r,i=e.pathname,a=void 0===i?"":i,c=e.search,s=void 0===c?"":c,l=e.hash,u=void 0===l?"":l,d="";return o&&(n&&(d=n.indexOf(":")===n.length-1?n:"".concat(n,":")),d="".concat(d,"//").concat(o)),a&&(d=0===a.indexOf("/")?"".concat(d).concat(a):"".concat(d,"/").concat(a)),s&&(d=0===s.indexOf("?")?"".concat(d).concat(s):"".concat(d,"?").concat(s)),u&&(d=0===u.indexOf("#")?"".concat(d).concat(u):"".concat(d,"#").concat(u)),d}(l(l({},n),{},{search:o?"?".concat(o):""}))}(f.rawRequest.responseURL,r.options["query-parameters"]):o,v=new Le(s,f.headers,window.location.href,m,o);return L.sendSync(je,v),v.isCancelled()||(n||qe({href:u?"".concat(m).concat(u):m,hash:u},i,c),Be(v.body,r.container,r.scriptContainer,r.options["runtime-flag"]),r.handleScroll(u,c),r.recordLocation(),r.updateReferrer(v.from),L.publish(_e),p=new K,h=new I,$.forEach((function(e){h.setTogglePreferenceElement(e),h.showReference()})),window.didomiOnReady=window.didomiOnReady||[],window.didomiOnReady.push((function(){K.getConsentStatus(K.vendorNames.twitter)&&p.createTwitterScript(),K.getConsentStatus(K.vendorNames.instagram)&&p.createInstagramScript(),p.createTelegramScript(),p.createH5pResizerScript()})),window.navAjaxCheck||window.didomiOnReady.push((function(){K.getConsentStatus(K.vendorNames.batch)&&Z()})),window.didomiEventListeners.push({event:"consent.changed",listener:function(){K.getConsentStatus(K.vendorNames.batch)&&Z(),K.getConsentStatus(K.vendorNames.twitter)&&p.createTwitterScript(),K.getConsentStatus(K.vendorNames.instagram)&&p.createInstagramScript(),p.createTelegramScript(),p.createH5pResizerScript()}}),e.replaceH1HtmlTagname(v.to)),t})).catch((function(e){var t={url:e.url,referrer:e.referrer,httpCode:e.httpCode,httpError:e.httpError,stackTrace:e.stack,error:{}};return L.publish(Ve,t),e}))}},{key:"goTo",value:function(t,n){var r=d(t),o=e.redirectUrl(t);m(r,window.location)&&h(r,this.lastRecordedLocation)||(void 0!==o?window.location.assign(o):m(r,window.location)?this.changePage(ze(ze({},r),{},{title:n}),!1):window.location.assign(t))}},{key:"bind",value:function(){var e=this;return b((function(){var t,n,r,o;e.init||(e.container=document.querySelector(e.options["container-selector"]),e.container?(e.init=!0,Ae(window.location,window.document.title),e.lastRecordedLocation.hash&&e.handleScroll(e.lastRecordedLocation.hash),e.scriptContainer=document.querySelector(e.options["script-container-selector"]),e.scriptContainer||(e.scriptContainer=document.querySelector("head")),window.addEventListener("popstate",(function(t){t.state&&t.state.url&&!h(d(t.state.url),e.lastRecordedLocation)?(t.preventDefault(),e.changePage({href:t.state.url,title:t.state.title,scrollPosition:t.state.scrollPosition},!0)):(t.state&&t.state.scrollPosition&&e.handleScroll("",t.state.scrollPosition),e.recordLocation(window.location.href))})),window.addEventListener("beforeunload",(function(){return Ae(window.location,window.document.title)})),t="click",n=e.options["link-selector"],r=De((function(t,n){t.preventDefault(),e.goTo(n.href,n.getAttribute("title"))})),o=function(e){for(var t=e.target;t.parentElement;t=t.parentElement)if(w(t,n))return r(e,t);return!1},window.addEventListener(t,o),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),L.publish(Ce,{options:e.options,error:void 0})):L.publish(Ce,{options:e.options,error:'No container available with "'.concat(e.options["container-selector"],'" selector')}))}))}}],[{key:"redirectUrl",value:function(e){var t;return He.length>0&&He.forEach((function(n){new RegExp("".concat(e)).test(n.from)&&(t=n.to)})),t}},{key:"replaceH1HtmlTagname",value:function(e){var t=document.querySelector("[data-home-link-wrapper] a");if(t&&e){var n=new URL(t.getAttribute("href"),window.location.origin),o=new URL(e),i=n.href===o.href&&0===document.querySelectorAll("h1").length?"h1":"div",a=document.querySelector("[data-home-link-wrapper]");if(a.tagName.toLowerCase()!==i){var c=document.createElement(i);(0,r.Z)(a.attributes).forEach((function(e){c.setAttribute(e.name,e.value)})),c.innerHTML=a.innerHTML,a.replaceWith(c)}}}}]),e}(),Fe=n(83009),Ie=function(e){return function(t){return function(n){t.setAttribute(e,n)}}},Ke=Ie("content"),$e={title:[{selector:"head > title",generator:function(e){return function(t){e.innerHTML=t}}},{selector:'head > meta[property="og:title"]',generator:Ke}],description:[{selector:'head > meta[name="description"]',generator:Ke},{selector:'head > meta[property="og:description"]',generator:Ke}],canonical:[{selector:'head > link[rel="canonical"]',generator:Ie("href")},{selector:'head > meta[property="og:url"]',generator:Ke}],image:[{selector:'head > meta[property="og:image"]',generator:Ke}]},Xe=function(){function e(t){(0,o.Z)(this,e),this.selector=t,this.updaters={}}return(0,i.Z)(e,[{key:"init",value:function(){var e=this;Object.keys($e).forEach((function(t){e.updaters[t]=$e[t].map((function(e){var t=document.querySelector(e.selector);return t?e.generator(t):void 0})).filter((function(e){return!!e}))}))}},{key:"update",value:function(){var e,t,n=this,r=(e=this.selector,(t=document.querySelector(e))?JSON.parse(t.innerHTML):{});!function(e){var t=document.querySelectorAll(e);t.length>0&&t.forEach((function(e){return e.remove()}))}("head > link[hreflang]"),Object.keys(r).forEach((function(e){if(n.updaters[e]&&n.updaters[e].forEach((function(t){return t(r[e])})),"alternate_languages"===e){var t=r[e];void 0!==t&&t.length>0&&t.forEach((function(e){var t,n;t=e,n=document.createElement("link"),Object.entries(t).forEach((function(e){var t=(0,Fe.Z)(e,2),r=t[0],o=t[1];n.setAttribute(r,o)})),document.querySelectorAll("head")[0].append(n)}))}}))}}]),e}(),Je="a-loader-wrapper--show",Qe="a-loader-wrapper--error",Ye="a-loader-wrapper--silenced",Ge=function(){function e(){var t=this;(0,o.Z)(this,e),this.dataLoaderWrapper=document.querySelector("[data-loader-wrapper]"),this.hideErrorAndRemoveEventListener=function(){t.dataLoaderWrapper.classList.remove(Qe),t.dataLoaderWrapper.classList.remove(Je),t.dataLoaderWrapper.classList.add(Ye),document.body.removeEventListener("click",t.hideErrorAndRemoveEventListener,!1)}}return(0,i.Z)(e,[{key:"show",value:function(){this.dataLoaderWrapper.classList.remove(Ye),this.dataLoaderWrapper.classList.add(Je)}},{key:"hide",value:function(){this.dataLoaderWrapper.classList.remove(Je),this.dataLoaderWrapper.classList.add(Ye)}},{key:"showError",value:function(){this.dataLoaderWrapper.classList.remove(Ye),this.dataLoaderWrapper.classList.add(Je),this.dataLoaderWrapper.classList.add(Qe),document.body.addEventListener("click",this.hideErrorAndRemoveEventListener,!1)}}]),e}(),et=function(e){var t=e.replace(/^v/,""),n=t.split("-")[0].split("."),r=t.split("-")[1]||"";return r&&n.push(r),n};const tt=function(e,t){return function(e,t){for(var n,r,o=Math.max(e.length,t.length),i=0;i<o;i+=1){if(n=Number(e[i]),r=Number(t[i]),Number.isNaN(n)&&Number.isNaN(r))return e[i]?t[i]?e[i]===t[i]?0:-1:1:-1;if(Number.isNaN(n)&&!Number.isNaN(r))return-1;if(!Number.isNaN(n)&&Number.isNaN(r))return 1;if(n!==r)return n>r?1:-1}return 0}(et(e),et(t))};var nt,rt=function(){function e(t){(0,o.Z)(this,e),this.version=t}return(0,i.Z)(e,[{key:"checkVersion",value:function(e){return this.version?-1===tt(this.version,e)&&(this.version=e,!0):(this.version=e,!1)}}]),e}();if(window.navigator.onLine){var ot=document.querySelector("header"),it=new Ue({"link-selector":"article a:not([data-load-more]):not(.live-pbp--load-more), header a, [data-nav-container] a:not([data-load-more]):not(.live-pbp--load-more), .o-breaking-alert a, .o-nav-bar__item a, .o-site-nav__block a, .o-bottom-bar__item__link a, a.o-player-panel__label__program, a.m-context-menu__item__btn--podcast-link, [data-sub-navigation] a","offset-element-top":ot?-1*ot.offsetHeight:0});window.nav=it,it.bind();var at,ct=new Ge,st=new Xe("#metadata");b((function(){var e;st.init(),"undefined"!=typeof tms&&void 0!==tms.var&&(e=tms.var("site_version"));var t,n=new rt(e);t=function(e,t){var r=t.headers,o=t.from,i=t.to;r["x-fmm-version"]&&n.checkVersion(r["x-fmm-version"])?(t.cancelNavigation(),window.location.href=i):Object.defineProperty(window.document,"referrer",{value:o,writable:!0})},window.navigator.onLine&&L.subscribe(je,t)})),nt=function(){clearTimeout(at),at=setTimeout((function(){return ct.show()}),100)},window.navigator.onLine&&L.subscribe(Pe,nt),function(e){window.navigator.onLine&&L.subscribe(_e,e)}((function(){st.update()})),function(e){window.navigator.onLine&&L.subscribe(xe,e)}((function(e,t){clearTimeout(at),ct.hide(),t.error&&ct.showError()}))}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.j=4088,(()=>{var e={4088:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,c,s]=n,l=0;if(a.some((t=>0!==e[t]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var u=s(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[8555],(()=>r(88254)));o=r.O(o)})();</script>
        <script defer src="/build/js/vendor.68821f3c90184b9e4e64.js"></script>
        <script defer src="/build/js/main.68821f3c90184b9e4e64.js"></script>
                                                                                                                                <script type="text/javascript" src="https://tms.fmm.io/mcd/ar.js" async></script>
                                        
                            <div class="a-loader-wrapper a-loader-wrapper--silenced" data-loader-wrapper>
    <div class="a-loader">
        <span class="a-loader__logo a-svg"></span>
    </div>
    <div class="a-loader-error">
        <div class="a-loader-error__content">
            <div class="a-loader-error__content__title">الصفحة غير متوفرة</div>
            <button class="a-close-button" aria-label="يغمض"></button>
            <div class="a-loader-error__content__icon">
                <span class="a-svg a-svg--picto-broken-page"></span>
            </div>
            <p class="a-loader-error__content__message">المحتوى الذي تريدون تصفحه لم يعد في الخدمة أو غير متوفر حاليا.</p>
        </div>
    </div>
</div>
            </body>
</html>
