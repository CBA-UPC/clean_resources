!function(){var t={33726:function(t){!function(e){const o={};let i,a=!1;function n(t,e){const o=e?t.parents(".safari-ios-decoration-fix"):t.parents(".safari-ios-decoration-fix-none");t.toggleClass("tcb-no-perspective",e),o.toggleClass("safari-ios-decoration-fix",!e).toggleClass("safari-ios-decoration-fix-none",e)}function r(t,e){const o=t.parents(".tve_ea_thrive_animation");o.length&&o.toggleClass("tcb-no-transform",e)}o.init=function(){i=o.videoScrolled.bind(this),document.addEventListener("scroll",i),e(".tcb-float-close-button").each(((t,e)=>{e.addEventListener("click",o.closeFloatVideo.bind(this,e),!1)}))},o.destroyFloating=function(){document.removeEventListener("scroll",i),e(".tcb-float-close-button").each(((t,e)=>{e.removeEventListener("click",o.closeFloatVideo.bind(this,e))}))},o.closeFloatVideo=function(t){e(t).parent(".tcb-video-float-container").addClass("tcb-float-closed"),o.videoScrolled()},o.videoScrolled=function(){e('.thrv_responsive_video[data-float="true"] .tcb-video-float-container iframe, .thrv_responsive_video[data-float="true"] .tcb-video-float-container video, .thrv_responsive_video[data-float="true"] .tcb-video-float-container .tve_responsive_video-no_video').each(((t,o)=>{const i=e(o),s=i.parents(".tcb-video-float-container"),d=i.parents(".thrv_responsive_video"),c=d.attr("data-float-position"),l=d.find(".video_overlay_image").attr("style")||"";let u=TCB_Front.getDisplayType()[0],p=parseInt(e("#wpadminbar").height());if(s.hasClass("tcb-float-closed")||!function(t){if(t.parents(".tcb-post-list").length)return!1;const e="true"===t.attr("data-float"),o=t.attr("data-float-visibility");if(e&&!o)return!0;const i=TCB_Front.getDisplayType();return-1===o.indexOf(i)}(d)||TCB_Front.isInViewport(i.parents(".thrv_responsive_video"),parseInt(i.width))){if(s.removeClass(c).css({width:"",height:"","margin-top":""}).parents(".tcb-col,.thrv-content-box,.thrv-page-section,#content,.theme-section").css("z-index",""),d.find(".video_overlay_image").removeClass(c).css({cssText:l,height:"",width:""}),!a){const t=d.position().left,e={left:t,right:t+d.width()};c.includes("top")||c.includes("keep")?(e.top=-parseInt(d.attr(`data-float-width-${u}`)),s.css(e)):c.includes("bottom")&&(e.bottom=parseInt(TCB_Front.Utils.windowWidth()),s.css(e)),d.find(".video_overlay_image").css({top:"",left:"",bottom:"",right:"","margin-top":""}),a=!0}n(d,!1),r(d,!1)}else{void 0===d.attr(`data-float-width-${u}`)&&("m"===u&&(d.attr("data-float-width-m",TCB_Front.$window.width()+"px;"),d.attr("data-float-padding1-m",0),d.attr("data-float-padding2-m",0),p=0),"t"===u&&(u="d"));const t="height: "+function(t){const e=parseFloat(t.height()/t.width()).toFixed(2),o=TCB_Front.getDisplayType()[0],i=t.attr(`data-float-width-${o}`)||t.attr("data-float-width-d"),a=parseInt(i)*e;return i.includes("px")?a+"px":a*TCB_Front.$body.width()/100+"px"}(d)+" !important;",e="width: "+d.attr(`data-float-width-${u}`)+" !important;";let o="";if(c.includes("keep-original")){const t=d.attr(`data-float-padding1-${u}`);TCB_Front.Utils.hasAdminBar()&&p&&(o+=`margin-top: ${p}px;`),o+=`top: ${t} !important; `}else c.split("-").forEach(((t,e)=>{const i=d.attr(`data-float-padding${e+1}-${u}`);TCB_Front.Utils.hasAdminBar()&&t.includes("top")&&p&&(o+=`margin-top: ${p}px;`),o+=`${t}: ${i} !important; `}));c&&(s.addClass(c).css({cssText:e+t+o}).parents(".tcb-col,.thrv-content-box,.thrv-page-section,#content,.theme-section").css("z-index",(TCB_Front.highestZIndex||0)+10),i.css("height",""),d.find("video").length&&d),d.find(".video_overlay_image").addClass(c).css({cssText:l+e+t+"z-index:100000 !important; top:inherit; left:inherit; bottom:inherit; right: inherit; margin-top: inherit;"}),n(d,!0),r(s,!0),a=!1)}}))},o.restoreFloatingVideos=function(){e(".thrv_responsive_video").each(((t,o)=>{const i=e(o),a=i.find(".tcb-video-float-container"),n=i.attr("data-float-position"),r=i.find(".video_overlay_image").attr("style")||"";a.removeClass(n).css({width:"",height:""}),i.find(".video_overlay_image").removeClass(n).css({cssText:r,height:"",width:"",top:"",left:"",bottom:"",right:"","margin-top":""})}))},t.exports=o}(ThriveGlobal.$j)},98071:function(t,e,o){t.exports=(t,e)=>{const i='.tcb-video-cover:not([data-preload="1"]) .tcb-video-cover-image',a=o(58647)(t,e),n=o(48042),r=[];class s{static initVideoLazyLoad(e){const o=e.find(".thrv_responsive_video.tcb-lazy-load");0!==o.length&&(TCB_Front.add_scroll_callback((e=>{e>0&&o.each(((e,o)=>{const a=t(o);if(s.hasVideoCover(a)){const t=a.find(i);t.length>0&&s.lazyLoadThumbnail(t)}else s.lazyLoadVideo(a,"external"===o.dataset.type)}))})),o.each(((e,o)=>{const i=t(o);i.off("click").on("pointerover",(()=>s.preconnectAssets(i))).on("click",(()=>s.lazyLoadVideo(i,"external"===o.dataset.type,!0)))})))}static preventIframeLoad(e,o,i){const a=t(o).closest(".thrv_responsive_video");return i&&!TCB_Front.Utils.isEditorPage()&&s.shouldLazyLoad(a)&&(e=!0),e}static shouldLazyLoad(t){return t.hasClass("tcb-lazy-load")&&(s.hasVideoCover(t)||!TCB_Front.isInViewport(t,-150)||s.isInsideScreenFiller(t))}static isInsideScreenFilleratic lazyLoadVideo(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const a=e.find(o?"source":"iframe"),n=a.attr("src");if(a.hasClass("tcb-video-lazy-loaded")||n&&n.length>0||!e.is(":visible")||s.isInsideScreenFiller(a)||!TCB_Front.isInViewport(e,-150)&&!i)return;a.hasClass("vooplayer")&&!TCB_Front.vooplayerScriptsLoaded&&(t.getScript("https://s3.spotlightr.com/assets/vooplayer.js"),TCB_Front.vooplayerScriptsLoaded=1);let r=a.attr("data-src");r&&"null"!==r&&(r=TCB_Front.Hooks.applyFilters("tcb.video.lazy_load.src",r,e),a.attr("src",r),o&&a.closest("video")[0].load()),a.removeAttr("data-src").addClass("tcb-dr-done tcb-video-lazy-loaded"),i&&TCB_Front.onVideoClick(e)}static lazyLoadThumbnails(e){e.find(i).each(((e,o)=>{const i=t(o);i.closest(".tcb-lazy-load").length>0&&s.lazyLoadThumbnail(i)}))}static lazyLoadThumbnail(t){if(!TCB_Front.Utils.isEditorPage()&&(t.hasClass("tcb-src-loaded")||!t.is(":visible")||!TCB_Front.isInViewport(t.closest(".thrv_responsive_video"),-250)))return;const e=t.attr("data-src");e&&"null"!==e&&t.attr("src",e),t.removeAttr("data-src"),TCB_Front.Utils.isEditorPage()||t.addClass("tcb-src-loaded")}static preconnectAssets(t){const e=t.attr("data-type");if(r.includes(e))return;let o=[];switch(e){case"youtube":o=a.getAssetsToPreconnect();break;case"vimeo":o=s.getVimeoAssetsToPreconnect();break;case"wistia":o=s.getWistiaAssetsToPreconnect();break;case"external":const e=t.find("source").attr("data-src");void 0!==e&&(o=[new URL(e).origin]);break;case"vooplayer":o=n.getAssetsToPreconnect()}o.forEach((t=>s.addPreconnectLink(t))),r.push(e)}atic getWistiaAssetsToPreconnect(){return["https://fast.wistia.net"]}}return s}},82215:function(t,e,o){t.exports=(t,e)=>{const i=o(60232),a=o(58647)(t,e),n=o(48042),r=o(30530)(t,e),s=o(98071)(t,e);class d{static get identifier(){return".thrv_responsive_video"}static init(){d.initHooks()}static initHooks(){t(e).on("tcb_after_dom_ready",().on("tcb_after_lightbox_open",((e,o)=>{t(o).find(`${d.identifier}:not([data-type="dynamic"])`).each(((e,o)=>d.autoplayVideo(t(o))))})).on("tcb_before_lightbox_close",((e,o)=>d.pauseVideos(t(o)))).on("tcb_on_content_hide",((e,o)=>d.pauseVideos(t(o)))).on("tve-content-revealed",((e,o)=>d.maybeAutoplayVideo(t(o)))).on("tcb_toggle_open",((e,o)=>d.maybeAutoplayVideo(t(o)))).on("tcb_toggle_close",((e,o)=>d.pauseVideos(t(o)))).on("tcb_on_content_show",((e,o)=>d.maybeAutoplayVideo(t(o)))).on("tve_after_content_toggle",(),TCB_Front.Hooks.addFilter("tcb.is_iframe_load_prevented",s.preventIframeLoad)}static onDomReady(){const e=t("body");d.pauseVideos(t(".tve_p_lb_content")),d.pauseVideos(t(`${d.identifier}:hidden`)),a.onDomReady(),TCB_Front.Utils.isEditorPage()||(r.init(),d.maybeAutoplayVideo(e),d.initOnClickEvent(),s.initVideoLazyLoad(e)),n.onDOMReady(),t(".tcb-video-background-el").each(((t,e)=>e.parentNode.classList.add("tcb-video-background-parent")))}static initOnClickEvent(){t(d.identifier).off("click.thumbnail").on("click.thumbnail",()}static onClick(t,e){const o=t.find(".video_overlay_image, .tcb-video-cover"),n=t.find(".tcb-video-float-container.tcb-float-closed").length>0;let r=t.find(".tcb-responsive-video").attr("data-provider");if(r||(r=t.attr("data-type")),TCB_Front.Hooks.doAction("tcb.video.before_autoplay",t,r),i.isCustomProvider(r)){if(!n)switch(r){case"youtube":a.play(t);break;case"vimeo":i.playIframeVideo(t,o,d.vimeoAutoplayString);break;case"wistia":i.playIframeVideo(t,o,d.wistiaAutoplayString)}}else i.isSelfHosted(r)&&d.toggleHtmlVideoPlay(t,e);o.length>0&&o.fadeOut()}static toggleHtmlVideoPlay(e,o){if((e.find(".tcb-video-cover:visible").length>0||!TCB_Front.browser.safari)&&(void 0===o||0===t(o.target).closest(".tcb-float-close-button").length)){const t=e.find("video").get(0);function o(e){setTimeout((function(){t[e]()}))}o(t.paused?"play":"pause")}}static maybeAutoplayVideo(e){let o;o=void 0===e?t(`${d.identifier}:not([data-type="dynamic"])`):e.find(`${d.identifier}:not([data-type="dynamic"])`),o.each(((e,o)=>{const i=t(o);0===i.parents(".tve_p_lb_content").length&&d.autoplayVideo(i)}))}static autoplayVideo(t){if(1!==parseInt(t.attr("data-autoplay")))return;const e=t.attr("data-type");let o="";switch(e){case"youtube":o=`&${a.autoplayString}&${a.mutedString}`;break;case"vimeo":o=`&${d.vimeoAutoplayString}&${d.vimeoMutedString}`;break;case"wistia":o=`&${d.wistiaAutoplayString}&${d.wistiaMutedString}`}if(i.isCustomProvider(e)){const e=t.find("iframe");let i=e.attr("src")||e.attr("data-src");i&&0!==i.length&&-1===i.indexOf(o)&&(i.includes("?")?"?"===i.slice(-1)&&(o=o.substring(1)):o=`?${o.substring(1)}`,i+=o,e.attr({src:i,"data-src":i}))}else if(i.isSelfHosted(e)){const e=t.find("video").get(0);e&&(e.muted=!0,e.paused&&e.play())}}static pauseVideos(t){t.find("video").each(()}static get vimeoAutoplayString(){return"autoplay=1"}static get vimeoMutedString(){return"muted=1"}static get wistiaAutoplayString(){return"autoPlay=true"}static get wistiaMutedString(){return"muted=true"}}return window.TCB_Front.playBackgroundYoutube=a.playBackgroundVideos,window.TCB_Front.refreshBackgroundYoutube=a.refreshBackgroundVideos,window.TCB_Front.onVideoClick=d.onClick,window.TCB_Front.changeAutoplayVideo=d.maybeAutoplayVideo,window.TCB_Front.makeAutoplayVideo=d.autoplayVideo,window.TCB_Front.Video=d,window.TCB_Front.floating=o(33726),d}},30530:function(t,e,o){t.exports=(t,e)=>{const i=o(58647)(t,e);class a{static init(){t('div[data-reporting-enabled="1"], iframe[data-reporting-enabled="1"]').each((),TCB_Front.Hooks.addAction("tcb.video.init_reporting",(t=>a.initVideo(t)))}static initVideo(t){const e=t.attr("data-type");let o,n=0,r=0,s=["custom","external"].includes(e)?t.find("source").attr("src"):t.attr("data-url");s=s.replace("#t=0.1","");const d=()=>(a.saveRange(n,n+5,s),n+=5,n),c={onPlay:t=>{r||(r=1,a.triggerVideoStart(s)),n=t,clearInterval(o),o=setInterval(d,5e3)},onPause:t=>{clearInterval(o),0!==t&&n<t&&Math.abs(t-n)<5&&a.saveRange(n,t,s)},onEnd:t=>{a.saveRange(n,t,s),clearInterval(o),TCB_Front.Hooks.doAction("tcb.video.on_end")},onBuffer:;switch(e){case"youtube":i.initReportingEvents(t,c);break;case"vimeo":a.initVimeoEvents(t,c);break;case"wistia":a.initWistiaEvents(t,c);break;case"custom":case"external":a.initHtmlEvents(t,c)}}static initVimeoEvents(o,i){if(void 0===e.Vimeo)return void t.getScript("https://player.vimeo.com/api/player.js",(()=>a.initVimeoEvents(o,i)));const n=0===o.find("iframe").length?o:o.find("iframe"),r=new e.Vimeo.Player(n);r.on("play",(()=>r.getCurrentTime().then(i.onPlay))),r.on("pause",(()=>r.getCurrentTime().then(i.onPause))),r.on("ended",(()=>r.getCurrentTime().then(i.onEnd))),r.on("seeking",()}static initWistiaEvents(o,i){const n=o.find("iframe");let r=n.attr("data-code");if(0!==n.length)n.addClass("wistia_embed");else{const t=o.attr("data-url");r=t.substring(t.lastIndexOf("/")+1)}void 0!==e._wq?e._wq.push({id:r,onReady(t){t.bind("play",(()=>i.onPlay(t.time()))).bind("pause",(()=>i.onPause(t.time()))).bind("end",(()=>i.onEnd(t.time()))).bind("seek",()}}):t.getScript("//fast.wistia.com/assets/external/E-v1.js",(()=>a.initWistiaEvents(o,i)))}static initHtmlEvents(t,e){const o=t.find("video"),i=o.on("play",(()=>e.onPlay(i()))).on("pause",(()=>e.onPause(i()))).on("ended",()}static triggerVideoStart(t){TCB_Front.Utils.restAjax({route:tve_frontend_options.routes.video_reporting+"/video_started",data:{video_url:t,user_id:tve_frontend_options.current_user.id,post_id:tve_frontend_options.post_id}})}static saveRange(t,e,o){TCB_Front.Utils.restAjax({route:tve_frontend_options.routes.video_reporting+"/save_range",data:{video_url:o,user_id:tve_frontend_options.current_user.id,post_id:tve_frontend_options.post_id,range_start:Math.round(t),range_end:Math.round(e)}}).done(()}}return a}},60232:function(t){const e=["youtube","vimeo","wistia"],o=["self","external","custom"];t.exports=class{static isCustomProvider(t){return e.includes(t)}tatic playIframeVideo(t,e,o){const i=t.find("iframe"),a=document.createElement("iframe"),n=TCB_Front.Utils.getAttr(i);i.remove(),n.allow="autoplay",n.src=`${n.src}${n.src.includes("?")?"&":"?"}${o}`;for(const t in n)try{a.setAttribute(t,n[t])}catch(e){console.warn(`${t} is an invalid attribute name`)}e.replaceWith(a),a.focus()}}},48042:function(t){(e=>{class o{static onDOMReady(){document.addEventListener("vooPlayerReady",o.playBackgroundVoo,!1),document.addEventListener("vooPlayerReady",o.changeVooOnPlay,!1),TCB_Front.Utils.isEditorPage()?e(".tcb-video-background-el iframe.tcb-voo-bg").each((function(){const t=TVE.inner_$(this),e=t.attr("src");t.attr("src",e)})):(e('.thrv_responsive_video[data-type="vooplayer"]').each(((t,o)=>{const i=e(o),a=i.outerHeight(),n=i.find(".tcb-video-cover,.video_overlay_image"),r=i.find("iframe");n.length>0&&r.length>0&&(i.find(".video-skin-player").css("z-index","-1"),r.before(n.css({height:r.height(),"max-height":a})),r.css("max-height",a))})),TCB_Front.floating.init()),TCB_Front.Hooks.addAction("tcb.video.before_autoplay",((t,e)=>{"vooplayer"===e&&t.find(".video-skin-player").css("z-index","")}))}static playBackgroundVoo(){e("iframe.tcb-voo-bg").each(((t,e)=>{const o=()=>{vooAPI(e.dataset.playerid,"onEnded",null,o),vooAPI(e.dataset.playerid,"play"),vooAPI(e.dataset.playerid,"volume",[0])};o()}))}static changeVooOnPlay(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:TCB_Front.$body;t&&t.jquery||(t=TCB_Front.$body),t.find("iframe.video-player-container").each(((t,o)=>{const i=()=>{e(o).css("pointer-events",""),e(o).parent().find("#theImg").remove()};o.src?i():vooAPI(o.dataset.playerid,"onPlay",null,()}))}t.exports=o,window.TCB_Front.changeVooOnPlay=o.changeVooOnPlay})(ThriveGlobal.$j)},26380:function(t){t.exports=(t,e)=>{class o{static initialize(t){e.onYouTubeIframeAPIReady=o.fetchIframeApi()}static isApiInitialized(){return 1===TCB_Front.youtubeApiFetched||void 0!==e.YT&&void 0!==e.YT.Player}static fetchIframeApi(){t.ajax({url:"https://www.youtube.com/iframe_api",type:"get",crossDomain:!0,cache:!0,dataType:"script"})}static getDefaultPlayerParameters(t){const e={autoplay:1,cc_load_policy:0,controls:0,disablekb:1,fs:0,iv_load_policy:0,modestbranding:1,playsinline:1,rel:0,showinfo:0,playlist:t};return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(e.loop=1,e.listType="playlist"),e}eturn o}},47101:function(t,e,o){t.exports=(t,e)=>{const i=o(26380)(t,e),a=".tcb-yt-bg";class n{static resetVideo(t){const e=t.find(a);if(e.length>0){const t=e.closest(".tcb-video-background-el"),o=TVE.Components.background.controls.video.video_settings.get_embed_code("background");t.html(o),n.play(t.find(a))}}static play(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t("div.tcb-yt-bg:visible");e.length&&(i.isApiInitialized()?e.each(((e,o)=>{const a=o.getAttribute("data-yt-id");let n;n=i.isPlaylist(a)?new YT.Player(o.id,{playerVars:i.getDefaultPlayerParameters(a,!0),events:{onReady:t=>t.target.mute(),onStateChange:t=>t.target.mute()}}):new YT.Player(o.id,{videoId:a,playerVars:i.getDefaultPlayerParameters(a),events:{onReady:onStateChange:t=>{t.target&&t.target.mute&&t.target.mute(),t.data===(YT.PlayerState.ENDED||0)&&t.target.playVideo()}}}),TCB_Front.latestYoutubeBackgroundPlayerInstance=n,t(n.getIframe()).data("tcb-yt-player",n)})):i.initialize((()=>n.play(e))))}static refreshVideos(){e.YT&&e.YT.Player&&t("iframe.tcb-yt-bg").each(((e,o)=>{const i=t(o);i.data("tcb-yt-player")||n.play(i)}))}}return n}},58647:function(t,e,o){t.exports=(t,e)=>{const i=o(47101)(t,e),a=o(26380)(t,e);class n{tatic initHooks(){TCB_Front.Utils.isEditorPage()?(TVE.add_action("tcb.element.duplicate",(),["sync","activate","create_display"].forEach((t=>TVE.add_action(`tve.conditional_display.${t}`,(t=>i.resetVideo(t)))))):(TCB_Front.Hooks.addFilter("tcb.video.lazy_load.src",((t,e)=>(t.includes("&enablejsapi=1")||"youtube"!==e.attr("data-type")||(t+="&enablejsapi=1"),t))),TCB_Front.Hooks.addAction("tcb.video.before_autoplay",((e,o)=>{if("youtube"!==o)return;const i=e.find("iframe")[0];t.each(i.attributes,((t,e)=>{let o=!1;e&&e.name.includes("data-gtm-yt-inspected")&&(i.removeAttribute(e.name),o=!0),o&&i.removeAttribute("id")}))})))}static play(e){if(!a.isApiInitialized())return void a.initialize(();const o=e.find("iframe"),i=t("<div>"),r=TCB_Front.Utils.getAttr(o),s=new URL(TCB_Front.Utils.addHttp(o.attr("src"))),d=o.attr("data-code")?o.attr("data-code"):s.pathname.replace("/embed/",""),c=Object.fromEntries(s.searchParams.entries());c.autoplay=1,o.remove(),e.find(".video_overlay_image, .tcb-video-cover").replaceWith(i),1===parseInt(e.attr("data-reporting-enabled"))&&TCB_Front.Hooks.doAction("tcb.video.init_reporting",e),TCB_Front.latestYoutubePlayerInstance=n.initYoutubePlayer(i,d,c),delete r.src;const l=e.find("iframe")[0];for(const t in r)try{l.setAttribute(t,r[t])}catch(e){console.warn(`${t} is an invalid attribute name`)}}static initYoutubePlayer(t,e,o){return new YT.Player(t[0],{videoId:e,playerVars:o,width:"100%",events:{onReady:onError:})}static initReportingEvents(t,e){if(!a.isApiInitialized())return void a.initialize(();let o=t.find("iframe")[0];if(0===t.find("iframe").length){const e=t.attr("src")+"&enablejsapi=1";t.attr("src",e),o=t[0]}new YT.Player(o,{events:{onStateChange:t=>{var o,i;const a=t.data,n=(null==t||null===(o=t.target)||void 0===o||null===(i=o.playerInfo)||void 0===i?void 0:i.currentTime)||0;switch(a){case YT.PlayerState.PLAYING:e.onPlay(n);break;case YT.PlayerState.PAUSED:e.onPause(n);break;case YT.PlayerState.ENDED:e.onEnd(n);break;case YT.PlayerState.BUFFERING:e.onBuffer(n)}}}})}tic get autoplayString(){return"autoplay=1"}return window.TCB_Front.Youtube=n,n}}},e={};oid 0===TCB_Front.js_modules.video&&TCB_Front.setModuleLoadedStatus("video",!1),(t=>{if(TCB_Front.isModuleLoaded("video"))return;const e=o(82215)(t,window);e.init(),window.TCB_Front.video=e,TCB_Front.setModuleLoadedStatus("video",!0)})(ThriveGlobal.$j)}();