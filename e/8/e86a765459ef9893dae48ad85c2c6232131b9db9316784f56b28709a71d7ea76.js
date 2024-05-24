/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!{1:[function(e,r,a){"use strict";mejs.i18n.en["mejs.ad-skip"]="Skip ad",mejs.i18n.en["mejs.ad-skip-info"]=["Skip in 1 second","Skip in %1 seconds"],Object.assign(mejs.MepDefaults,{adsPrerollMediaUrl:[],adsPrerollAdUrl:[],adsPrerollAdEnableSkip:!1,adsPrerollAdSkipSeconds:-1,indexPreroll:0}),Object.assign(MediaElementPlayer.prototype,{adsLoaded:!1,adsDataIsLoading:!1,adsCurrentMediaUrl:"",adsCurrentMediaDuration:0,adsPlayerHasStarted:!1,buildads:function(e,r,a){var s=this;s.adsLoaded||(s.adsLoaded=!0,e.adsLayer=document.createElement("div"),e.adsLayer.className=s.options.classPrefix+"layer "+s.options.classPrefix+"overlay "+s.options.classPrefix+"ads",e.adsLayer.innerHTML='<a href="#" target="_blank"></a><div class="'+s.options.classPrefix+'ads-skip-block"><span class="'+s.options.classPrefix+'ads-skip-message"></span><span class="'+s.options.classPrefix+'ads-skip-button">'+mejs.i18n.t("mejs.ad-skip")+"</span></div>",e.adsLayer.style.display="none",a.insertBefore(e.adsLayer,a.querySelector("."+s.options.classPrefix+"overlay-play")),e.adsLayer.querySelector("a").addEventListener("click",s.adsAdClick.bind(s)),e.adsSkipBlock=e.adsLayer.querySelector("."+s.options.classPrefix+"ads-skip-block"),e.adsSkipBlock.style.display="none",e.adsSkipMessage=e.adsLayer.querySelector("."+s.options.classPrefix+"ads-skip-message"),e.adsSkipMessage.style.display="none",e.adsSkipButton=e.adsLayer.querySelector("."+s.options.classPrefix+"ads-skip-button"),e.adsSkipButton.addEventListener("click",s.adsSkipClick.bind(s)),s.adsMediaTryingToStartProxy=s.adsMediaTryingToStart.bind(s),s.adsPrerollStartedProxy=s.adsPrerollStarted.bind(s),s.adsPrerollMetaProxy=s.adsPrerollMeta.bind(s),s.adsPrerollUpdateProxy=s.adsPrerollUpdate.bind(s),s.adsPrerollVolumeProxy=s.adsPrerollVolume.bind(s),s.adsPrerollEndedProxy=s.adsPrerollEnded.bind(s),s.media.addEventListener("rendererready",function(){var e=s.media.querySelector("iframe");e&&(e.style.display="none")}),s.media.addEventListener("play",s.adsMediaTryingToStartProxy),s.media.addEventListener("playing",s.adsMediaTryingToStartProxy),s.media.addEventListener("canplay",s.adsMediaTryingToStartProxy),s.media.addEventListener("loadedmetadata",s.adsMediaTryingToStartProxy),s.options.indexPreroll<s.options.adsPrerollMediaUrl.length&&s.adsStartPreroll())},adsMediaTryingToStart:function(){var e=this;e.adsDataIsLoading&&!e.paused&&e.options.indexPreroll<e.options.adsPrerollMediaUrl.length&&e.pause(),e.adsPlayerHasStarted=!0},adsStartPreroll:function(){var e=this;e.media.addEventListener("loadedmetadata",e.adsPrerollMetaProxy),e.media.addEventListener("playing",e.adsPrerollStartedProxy),e.media.addEventListener("ended",e.adsPrerollEndedProxy),e.media.addEventListener("timeupdate",e.adsPrerollUpdateProxy),e.media.addEventListener("volumechange",e.adsPrerollVolumeProxy),0===e.options.indexPreroll&&(e.adsCurrentMediaUrl=e.media.originalNode.src,e.adsCurrentMediaDuration=e.duration),e.setSrc(e.options.adsPrerollMediaUrl[e.options.indexPreroll]),e.load();for(var r=e.container.querySelector("."+e.options.classPrefix+"controls").children,a=0,s=r.length;a<s;a++){var t=r[a],o=t.querySelector("button");!o||mejs.Utils.hasClass(t,e.options.classPrefix+"playpause-button")||mejs.Utils.hasClass(t,e.options.classPrefix+"chromecast-button")?t.querySelector("."+e.options.classPrefix+"time-slider")&&(t.querySelector("."+e.options.classPrefix+"time-slider").style.pointerEvents="none"):(o.disabled=!0,t.style.pointerEvents="none")}e.adsPlayerHasStarted&&setTimeout(100)},adsPrerollMeta:function(){var e=this,r=0;e.options.duration>0?r=e.options.duration:isNaN(e.adsCurrentMediaDuration)||(r=e.adsCurrentMediaDuration),e.controls.querySelector("."+e.options.classPrefix+"duration")&&setTimeout(function(){e.controls.querySelector("."+e.options.classPrefix+"duration").innerHTML=mejs.Utils.secondsToTimeCode(r,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength)},250);var a=mejs.Utils.createEvent("mejsprerollinitialized",e.container);e.container.dispatchEvent(a)},adsPrerollStarted:function(){var e=this;e.media.removeEventListener("playing",e.adsPrerollStartedProxy),e.adsLayer.style.display="block",e.options.adsPrerollAdUrl[e.options.indexPreroll]?e.adsLayer.querySelector("a").href=e.options.adsPrerollAdUrl[e.options.indexPreroll]:(e.adsLayer.querySelector("a").href="#",e.adsLayer.querySelector("a").setAttribute("target","")),e.options.adsPrerollAdEnableSkip?(e.adsSkipBlock.style.display="block",e.options.adsPrerollAdSkipSeconds>0?(e.adsSkipMessage.innerHTML=mejs.i18n.t("mejs.ad-skip-info",e.options.adsPrerollAdSkipSeconds),e.adsSkipMessage.style.display="block",e.adsSkipButton.style.display="none"):(e.adsSkipMessage.style.display="none",e.adsSkipButton.style.display="block")):e.adsSkipBlock.style.display="none";var r=mejs.Utils.createEvent("mejsprerollstarted",e.container);e.container.dispatchEvent(r)},adsPrerollUpdate:function(){var e=this;e.options.adsPrerollAdEnableSkip&&e.options.adsPrerollAdSkipSeconds>0&&(e.currentTime>e.options.adsPrerollAdSkipSeconds?(e.adsSkipButton.style.display="block",e.adsSkipMessage.style.display="none"):e.adsSkipMessage.innerHTML=mejs.i18n.t("mejs.ad-skip-info",Math.round(e.options.adsPrerollAdSkipSeconds-e.currentTime)));var r=mejs.Utils.createEvent("mejsprerolltimeupdate",e.container);r.detail.duration=e.duration,r.detail.currentTime=e.currentTime,e.container.dispatchEvent(r)},adsPrerollVolume:function(){var e=this,r=mejs.Utils.createEvent("mejsprerollvolumechanged",e.container);e.container.dispatchEvent(r)},adsPrerollEnded:function(){var e=this;e.media.removeEventListener("ended",e.adsPrerollEndedProxy),setTimeout(function(){++e.options.indexPreroll<e.options.adsPrerollMediaUrl.length?e.adsStartPreroll():e.adRestoreMainMedia();var r=mejs.Utils.createEvent("mejsprerollended",e.container);e.container.dispatchEvent(r)},0)},adRestoreMainMedia:function(){var e=this,r=e.media.querySelector("iframe");r&&(r.style.display=""),e.setSrc(e.adsCurrentMediaUrl),setTimeout(10);for(var a=e.container.querySelector("."+e.options.classPrefix+"controls").children,s=0,t=a.length;s<t;s++){var o=a[s],i=o.querySelector("button");i&&!mejs.Utils.hasClass(o,e.options.classPrefix+"playpause-button")?(o.style.pointerEvents="auto",i.disabled=!1):o.querySelector("."+e.options.classPrefix+"time-slider")&&(o.querySelector("."+e.options.classPrefix+"time-slider").style.pointerEvents="auto")}e.adsSkipBlock&&e.adsSkipBlock.remove(),e.adsLayer.style.display="none",e.media.removeEventListener("ended",e.adsPrerollEndedProxy),e.media.removeEventListener("loadedmetadata",e.adsPrerollMetaProxy),e.media.removeEventListener("timeupdate",e.adsPrerollUpdateProxy);var n=mejs.Utils.createEvent("mejsprerollmainstarted",e.container);e.container.dispatchEvent(n)},adsAdClick:function(){var e=this;e.paused?e.play():e.pause();var r=mejs.Utils.createEvent("mejsprerolladsclicked",e.container);e.container.dispatchEvent(r)},adsSkipClick:function(e){var r=this;r.media.removeEventListener("ended",r.adsPrerollEndedProxy);var a=mejs.Utils.createEvent("mejsprerollskipclicked",r.container);r.container.dispatchEvent(a),a=mejs.Utils.createEvent("mejsprerollended",r.container),r.container.dispatchEvent(a),++r.options.indexPreroll<r.options.adsPrerollMediaUrl.length?r.adsStartPreroll():r.adRestoreMainMedia(),e.preventDefault(),e.stopPropagation()},prerollAdsFinished:function(){var e=this;return e.options.indexPreroll===e.options.adsPrerollMediaUrl.length},adsLoadUrl:function(e){var r=new Image,a=Math.round(1e5*Math.random());r.src=e+(~e.indexOf("?")?"&":"?")+"random"+a+"="+a,r.loaded=})},{}]},{},[1]);