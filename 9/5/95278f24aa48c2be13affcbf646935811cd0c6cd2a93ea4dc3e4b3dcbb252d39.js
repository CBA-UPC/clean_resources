/*!
 * version: {"ads":"3.1.226 ver3","pwa":"3.1.226","core":"3.1.226","bundler":"3.1.226"} - env: prod - bundle date: 2024-01-16T18:32:57.360Z
 *
 */(function(){"use strict";var __webpack_modules__={224:307:169:773:242:97:526:579:492:543:956:916:471:528:437:406:938:970:639:617:33:function(e,t,i){i.d(t,{I:function(){return y}});var n=i(334),r=i(437),a=i(97),s=i(242),o=i(492),d=function(){return d=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},d.apply(this,arguments)},c=function(e,t,i,n){return new(i||(i=Promise))((function(r,a){function s(e){try{d(n.next(e))}catch(e){a(e)}}function o(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,o)}d((n=n.apply(e,t||[])).next())}))},l=function(e,t){var i,n,r,a,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(d){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,d])}}},u=function(e,t,i){if(i||2===arguments.length)for(var n,r=0,a=t.length;r<a;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},p="2147483647",_=[[640,360],[320,180]],g=[[640,480],[480,360],[320,240]],f=[[360,640],[180,320]],h=[[480,640],[360,480],[240,320]],b=[[300,300],[250,250]],m=v=new m,y=function(){function e(e){var t=this;this.config=e,this.RENDERED="rendered",this.HIDE="hide",this.executeCallCount=0,this.infinite=!1,this.divId="",this.closeButtonId="",this.wrapperClassName="ats-insert-video-wrapper",this.divClassName="ats-insert-video",this.closeButton=document.createElement("button"),this.wrapperId="",this.originVideoWidth=0,this.videoWrapper=document.createElement("div"),this.videoStickyWrapper=document.createElement("div"),this.videoStickyWrapperId="ats-insert-video-sticky-wrapper",this.initialPlay=!1,this.stickyOrAnchoring=!1,this.observer=null,this.anchoringClass="",this.topStickyClass=this.wrapperClassName+"-top-sticky",this.poster="",this.deviceType=(0,n.j)(),this.isPlaying=!1,this.isFirstPlay=!1,this.testUrl=window.sessionStorage.getItem("ats_test_video_url")||"",this.testAdTagUrl=window.sessionStorage.getItem("ats_test_ad_tag_url")||"",this.linearAdPlaying=!1,this.MAX_RETRY=30,this.counter_retry=1,this.REFRESH_INTERVAL=32e3,this.rssArticleLink=document.createElement("a"),this.rssArticleLinkId="rss-article-link",this.rssFeedArticles=[],this.scrollCallbacks=[],this.onceInView=!1,this.autoplayInNext=!1,this.autoAdUnitPaths=[],this.videoLoadingCount=0,this.userStopAnchor=!1,this.anchorCallbackWhenAdLoaded=null,this.showCloseButton=!1,this.videoLength=0,this.adsManagerLoadedCallback=this.onAdEvent=this.execute=this.workaroundForBFCache=this.findTarget=this.applyInsertVideoCss=this.buildVideo=this.createAdSizes=this.createVastParams=this.refreshAds=this.waitUntilHasFocus=this.waitUntilFP=this.isInView=this.waitUntilInView=this.onAdsErrorCallback=this.multiCallAds=this.invokeVideoPlayer=function(e,i){return c(t,void 0,void 0,(function(){var t,r,a,s,d,c,u,p,_,g,f,h,b,m,y,E,S,A,I,P,D,T,w,C,U,R,O,L,k,x,M=this;return l(this,(function(l){switch(l.label){case 0:return t=window.google,r=this.config,a=r.aspectRatio,s=r.scrollEffect,d=r.youtubeChannelFeedUrl,c=r.videoSource,u=r.selectedYoutubeVideos,p=r.rssFeedJsonUrl,_=r.rssFeedUrl,g=r.rssFeedThumbnail,f=r.rssFeedButtonText,h="",1===c&&d?u.length>0?(this.videoFeedEntry=o.Q.chooseRandomSelectedVideo(i),[3,3]):[3,1]:[3,4];case 1:return b=this,[4,o.Q.chooseLatestUpdatedYTVideoEntry(d)];case 2:b.videoFeedEntry=l.sent(),l.label=3;case 3:return this.videoFeedEntry?(this.videoLength=this.videoFeedEntry.video_length||0,h=this.useMP4?this.videoFeedEntry.mp4.low:this.videoFeedEntry.hls.manifest,this.poster=this.videoFeedEntry.thumbnail,[3,7]):(this.videoWrapper.style.display="none",v.error("iv: fail to download video"),[2]);case 4:return 2!==c?[3,5]:(m=o.Q.chooseAMVideoEntry(this.divId),h=this.useMP4?m.mp4.low:m.hls.manifest,this.poster=o.Q.chooseAMVideoEntry(this.divId).thumbnail,[3,7]);case 5:return 3===c&&_&&p&&g?[4,o.Q.chooseRssFeedVideoEntry(p,_)]:[3,7];case 6:if(!(m=l.sent()))return this.videoWrapper.style.display="none",v.error("iv: fail to download video"),[2];h=this.useMP4?m.mp4.low:m.hls.manifest,this.poster=g,this.rssFeedArticles=m.articles,this.videoLength=30,l.label=7;case 7:return this.videoLength>0&&"vmap"===this.config.adOutputFormat&&((y=new URL(e)).searchParams.get("vid_d")||(y.searchParams.set("vid_d",this.videoLength.toString()),e=y.toString())),E={id:i,adTagUrl:this.testAdTagUrl?this.testAdTagUrl:e,adsManagerLoadedCallback:this.adsManagerLoadedCallback(e),autoPlayAdBreaks:!1},S={aspectRatio:a,controlBar:{pictureInPictureToggle:!1,remainingTimeDisplay:!1},poster:this.poster,html5:{vhs:{overrideNative:!0}}},window.videojs.log.level("off"),window.videojs.Vhs.GOAL_BUFFER_LENGTH=5,window.videojs.Vhs.MAX_GOAL_BUFFER_LENGTH=10,window.videojs.Vhs.BACK_BUFFER_LENGTH=3600,A=new window.videojs(i,S),this.testUrl?A.src(this.testUrl):A.src(h),v.log("div id = ".concat(i)),v.log("request ad url = ".concat(e)),this.player=A,this.config.sound&&(1!==this.config.playerMode||"sp"!=this.deviceType&&!(0,n.i8)())||(v.log("mute video sound"),A.muted(!0),E.adsWillPlayMuted=!1),A.ima(E),A.ima.setAdBreakReadyListener((),"sp"===this.deviceType&&A.ima.initializeAdDisplayContainer(),I=this.videoWrapper.getBoundingClientRect(),P=I.height,D=I.width,this.videoWrapper.style.height=P+"px",this.videoWrapper.style.width=D+"px",this.videoStickyWrapper.style.width=D+"px",this.originVideoWidth=D,this.videoStickyWrapper.id=this.videoStickyWrapperId,T=A.bigPlayButton.contentEl(),A.ready((),A.on("loadedmetadata",(),A.on("pause",(),A.on("ads-manager",(),A.on("play",(),A.on("ads-loader",(),A.on("adsready",(),A.on("ended",(),this.autoplayInNext&&3===s&&this.autoplay(),w=!1,this.isInView(this.videoStickyWrapper)&&(this.onceInView=!0),C=document.addEventListener("scroll",C),this.scrollCallbacks.push(C),this.rssFeedArticles?(this.rssArticleLink.id=this.rssArticleLinkId,this.rssArticleLink.text=f||"Read Article",null===(x=document.getElementById(this.divId))||void 0===x||x.appendChild(this.rssArticleLink),U=this.rssFeedArticles.map((),A.on("timeupdate",()):this.rssArticleLink.style.visibility="hidden",3!==s||this.userStopAnchor?2===s?(L=!1,this.topStickyCallback(),k=function(){L||(window.requestAnimationFrame((function(){M.topStickyCallback(),L=!1})),L=!0)},this.scrollCallbacks.push(k),document.addEventListener("scroll",k)):1===s&&(this.observer=new IntersectionObserver(this.staticCallback,{root:document,rootMargin:"0px",threshold:1}),this.observer.observe(this.videoWrapper)):(R=!1,this.anchorCallback(),O=document.addEventListener("scroll",O),this.scrollCallbacks.push(O),this.closeButton.addEventListener("click",()),[2]}}))}))},this.playAdBreaks=this.startElmAnchoring=this.restartElmAnchoring=this.stopElmAnchoring=this.anchorCallback=this.reAnchorCallback=this.showHideVideoPlayerControlBar=this.topStickyCallback=this.staticCallback=this.autoplay=this.dispose=this.divId=this.config.divIDs[0],this.closeButtonId="".concat(this.divId,"-close-button"),this.wrapperId="".concat(this.divId,"-wrapper");var i=this.config,a=i.sizeMappingGroup,u=i.selectedYoutubeVideos,m=i.anchorPosition,y=void 0===m?1:m,E=i.autoAdUnitPaths,S=void 0===E?[]:E;this.autoAdUnitPaths=S,this.prebidAdUnits=r.k.adUnitsCodeDict[this.divId],this.prebidAdUnit=this.prebidAdUnits?this.prebidAdUnits.prebidAdUnits.filter(()[0]:void 0;var A=a.find(();this.vastSizes=A?A.sizes[0]:[300,250],2===y?this.anchoringClass="".concat(this.wrapperClassName,"-left"):1===y&&(this.anchoringClass="".concat(this.wrapperClassName,"-right")),o.Q.registerSelectedVideos(u,this.divId)}return Object.defineProperty(e.prototype,"useMP4",{get:enumerable:!1,configurable:!0}),e}()},342:,902,483,99,566,730,947,834,334,542DOMContentLoaded\', e);\\n})(er":"3.1.226"}},"amPrn":5,"criteo":17,"ogurwebpack_require__(e){var t=_sSPA?(iterateAndCallQueFunc(que),que.splice(0)):(window.startAnymindTS(),iterateAndCallQueFunc(que),que.splice(0)),[3,6];case 5:_Logger__WEBPACK_IMPORTED_MODULE_1__.kg.error("already ATS is executed"),_a.label=6;case 6:return[3,8];case 7:return e_2=_a.sent(),_Logger__WEBPACK_IMPORTED_MODULE_1__.kg.error(e_2),[3,8];case 8:return[2]}}))}))};try{var config=__webpack_require__(542);run(config)}catch(e){_Logger__WEBPACK_IMPORTED_MODULE_1__.kg.error(e)}}()})();