"object"==typeof navigator&&this,(function(){"use strict";ddCSS:!0,thumbWidth:15,watch:!0};function c(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}var u=function(e){return null!=e?e.constructor:null},d=function(e,t){return Boolean(e&&t&&e instanceof t)},h=function(e){return null==e},p=function(e){return u(e)===Object},m=function(e){return u(e)===String},f=function(e){return Array.isArray(e)},g=function(e){return d(e,NodeList)},y=m,v=f,b=g,w=function(e){return d(e,Element)},k=function(e){return d(e,Event)},T=function(e){return h(e)||(m(e)||f(e)||g(e))&&!e.length||p(e)&&!Object.keys(e).length};ar A,E,S,P=function(){function t(i,n){e(this,t),w(i)?this.element=i:y(i)&&(this.element=document.querySelector(i)),w(this.element)&&T(this.element.rangeTouch)&&(this.config=Object.assign({},l,n),this.init())}return i(t,[{key:"init",value:,{key:"destroy",value:,{key:"listeners",value:,{key:"get",value:function(e){if(!t.enabled||!k(e))return null;var i,n=e.target,a=e.changedTouches[0],s=parseFloat(n.getAttribute("min"))||0,r=parseFloat(n.getAttribute("max"))||100,o=parseFloat(n.getAttribute("step"))||1,l=r-s,c=n.getBoundingClientRect(),u=100/c.width*(this.config.thumbWidth/2)/100;return(i=100/c.width*(a.clientX-c.left))<0?i=0:i>100&&(i=100),i<50?i-=(100-2*i)*u:i>50&&(i+=2*(i-50)*u),s+C(l*(i/100),o)}},{key:"set",value:function(e){t.enabled&&k(e)&&!e.target.disabled&&(e.preventDefault(),e.target.value=this.get(e),e.target,"touchend"===e.type?"change":"input"))}}],[{key:"setup",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(T(e)||y(e)?n=Array.from(document.querySelectorAll(y(e)?e:'input[type="range"]')):w(e)?n=[e]:b(e)?n=Array.from(e):v(e)&&(n=e.filter(w)),T(n))return null;var a=Object.assign({},l,i);if(y(e)&&a.watch){var s=new MutationObserver((function(i){Array.from(i).forEach((function(i){Array.from(i.addedNodes).forEach((function(i){if(w(i)&&c(i,e))new t(i,a)}))}))}));s.observe(document.body,{childList:!0,subtree:!0})}return n.map((function(e){return new t(e,i)}))}},{key:"enabled",get:]),t}(),M=N=x=I=function(e){return M(e)===Object},L=function(e){return M(e)===String},_=function(e){return Array.isArray(e)},O=function(e){return N(e,NodeList)},j=q=x,H=I,D=F=L,R=function(e){return M(e)===Boolean},V=B=_,U=O,W=function(e){return N(e,Element)},z=function(e){return N(e,Event)},K=Y=Q=X=j,J=(A=document.createElement("span"),E={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},S=Object.keys(E).find((),!!F(S)&&E[S]);ar G={isIE:
/* @cc_on!@ */
!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)};{return this.elements.container.querySelectorAll(e)}r ge,ye={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},ve={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:pip:!(G.isIPhone||!V(ne("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||ne("video").disablePictureInPicture)),airplay:V(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:textTracks:"textTracks"in document.createElement("video"),rangeInput:(ge=document.createElement("input"),ge.type="range","range"===ge.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==J,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},be=);unction ke(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];we.call(this,e,t,i,!0,n,a)}nction Ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(W(e)&&!X(t)){var a=new CustomEvent(t,{bubbles:i,detail:s({},n,{plyr:this})});e.dispatchEvent(a)}}ion xe(e){if(!this.isVideo)return{};var t=this.elements.wrapper,i=Ne.call(this,e),n=r(B(i)?i:[0,0],2),a=100/n[0]*n[1];if(t.style.paddingBottom="".concat(a,"%"),this.isVimeo&&this.supported.ui){var s=(240-a)/4.8;this.media.style.transform="translateY(-".concat(s,"%)")}else this.isHTML5&&t.classList.toggle(this.config.classNames.videoFixedRatio,null!==i);return{padding:a,ratio:i}}var Ie={getSources:getQualityOptions:setup:function(){if(this.isHTML5){var e=this;e.options.speed=e.config.speed.options,X(this.config.ratio)||xe.call(e),Object.defineProperty(e.media,"quality",{get:set:function(t){if(e.quality!==t){if(e.config.quality.forced&&V(e.config.quality.onChange))e.config.quality.onChange(t);else{var i=Ie.getSources.call(e).find(();if(!i)return;var n=e.media,a=n.currentTime,s=n.paused,r=n.preload,o=n.readyState,l=n.playbackRate;e.media.src=i.getAttribute("src"),("none"!==r||o)&&(e.once("loadedmetadata",(function(){e.speed=l,e.currentTime=a,s||e.play()})),e.media.load())}Ae.call(e,e.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:;ction je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.toString().replace(/\w\S*/g,()}function qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toString();return t=Oe(t,"-"," "),t=Oe(t,"_"," "),Oe(t=je(t)," ","")}ar De={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},Fe=Re=);r Ue=We=ze=ar Ye={getIconUrl:findElements:createIcon:createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=Fe(e,this.config),n=s({},t,{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")});return ne("span",n,i)},createBadge:createButton:createRange:createProgress:createTime:bindMenuItemShortcuts:createMenuItem:formatTime:updateTimeDisplay:updateVolume:setRange:updateProgress:updateRangeFill:updateSeekTooltip:timeUpdate:durationUpdate:toggleMenuButton:updateSetting:getLabel:setQualityMenu:setCaptionsMenu:setSpeedMenu:checkMenu:focusFirstMenuItem:toggleMenu:getMenuSize:showMenuPanel:setDownloadUrl:create:function(e){var t=this,i=Ye.bindMenuItemShortcuts,n=Ye.createButton,a=Ye.createProgress,s=Ye.createRange,r=Ye.createTime,o=Ye.setQualityMenu,l=Ye.setSpeedMenu,c=Ye.showMenuPanel;this.elements.controls=null,this.config.controls.includes("play-large")&&this.elements.container.appendChild(n.call(this,"play-large"));var u=ne("div",le(this.config.selectors.controls.wrapper));this.elements.controls=u;var d={class:"plyr__controls__item"};return Le(this.config.controls).forEach((),this.isHTML5&&o.call(this,Ie.getQualityOptions.call(this)),l.call(this),u},inject:function(){var e=this;if(this.config.loadSprite){var t=Ye.getIconUrl.call(this);t.cors&&Be(t.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var i=null;this.elements.controls=null;var n={id:this.id,seektime:this.config.seekTime,title:this.config.title},a=!0;V(this.config.controls)&&(this.config.controls=this.config.controls.call(this,n)),this.config.controls||(this.config.controls=[]),W(this.config.controls)||F(this.config.controls)?i=this.config.controls:(i=Ye.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Je.getLabel.call(this)}),a=!1);var s,o=if(a&&(F(this.config.controls)?i=o(i):W(i)&&(i.innerHTML=o(i.innerHTML))),F(this.config.selectors.controls.container)&&(s=document.querySelector(this.config.selectors.controls.container)),W(s)||(s=this.elements.container),s[W(i)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",i),W(this.elements.controls)||Ye.findElements.call(this),!X(this.elements.buttons)){var l=Object.values(this.elements.buttons).filter(Boolean).forEach(()}if(G.isEdge&&$(s),this.config.tooltips.controls){var c=this.config,u=c.classNames,d=c.selectors,h="".concat(d.controls.wrapper," ").concat(d.labels," .").concat(u.hidden),p=pe.call(this,h);Array.from(p).forEach(()}}};r Je={setup:update:function(){var e=this,t=Je.getTracks.call(this,!0),i=this.captions,n=i.active,a=i.language,s=i.meta,r=i.currentTrackNode,o=Boolean(t.find((function(e){return e.language===a})));this.isHTML5&&this.isVideo&&t.filter(().forEach((),(o&&this.language!==a||!t.includes(r))&&(Je.setLanguage.call(this,a),Je.toggle.call(this,n&&o)),ue(this.elements.container,this.config.classNames.captions.enabled,!X(t)),(this.config.controls||[]).includes("settings")&&this.config.settings.includes("captions")&&Ye.setCaptionsMenu.call(this)},toggle:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.supported.ui){var i=this.captions.toggled,n=this.config.classNames.captions.active,a=q(e)?!i:e;if(a!==i){if(t||(this.captions.active=a,this.storage.set({captions:a})),!this.language&&a&&!t){var s=Je.getTracks.call(this),r=Je.findTrack.call(this,[this.captions.language].concat(o(this.captions.languages)),!0);return this.captions.language=r.language,void Je.set.call(this,s.indexOf(r))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=a),ue(this.elements.container,n,a),this.captions.toggled=a,Ye.updateSetting.call(this,"captions"),Ae.call(this,this.media,a?"captionsenabled":"captionsdisabled")}}},set:setLanguage:getTracks:findTrack:getCurrentTrack:getLabel:updateCues:,$e={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.10/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,sidedock:!1,controls:!1,referrerPolicy:null},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},Ge="picture-in-picture",Ze="inline",et={html5:"html5",youtube:"youtube",vimeo:"vimeo"},tt="audio",it="video";var nt=function(){},at=),st=function(){function t(i){var n=this;e(this,t),this.player=i,this.prefix=t.prefix,this.property=t.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===i.config.fullscreen.fallback,ke.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),(function(){n.onChange()})),ke.call(this.player,this.player.elements.container,"dblclick",(),ke.call(this,this.player.elements.container,"keydown",(function(e){return n.trapFocus(e)})),this.update()}return i(t,[{key:"onChange",value:,{key:"toggleFallback",value:,{key:"trapFocus",value:,{key:"update",value:,{key:"enter",value:,{key:"exit",value:function(){if(this.enabled)if(G.isIos&&this.player.config.fullscreen.iosNative)this.target.webkitExitFullscreen(),this.player.play();else if(!t.native||this.forceFallback)this.toggleFallback(!1);else if(this.prefix){if(!X(this.prefix)){var e="moz"===this.prefix?"Cancel":"Exit";document["".concat(this.prefix).concat(e).concat(this.property)]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}},{key:"toggle",value:,{key:"usingNative",get:,{key:"enabled",get:,{key:"active",get:,{key:"target",get:],[{key:"native",get:,{key:"prefix",get:,{key:"property",get:]),t}();ar ot={addStyleHook:toggleNativeControls:build:setTitle:togglePoster:setPoster:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return i&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("poster",e),this.isHTML5?Promise.resolve(e):Se.call(this).then(().catch(().then(().then(())},checkPlaying:checkLoading:toggleControls:,lt=function(){eturn i(t,[{key:"handleKey",value:function(e){var t=this.player,i=t.elements,n=e.keyCode?e.keyCode:e.which,a="keydown"===e.type,s=a&&n===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&D(n)){if(a){var r=document.activeElement;if(W(r)){var o=t.config.selectors.editable;if(r!==i.inputs.seek&&he(r,o))return;if(32===e.which&&he(r,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(n)&&(e.preventDefault(),e.stopPropagation()),n){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:s||(t.currentTime=t.duration/10*(n-48));break;case 32:case 75:s||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:s||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:s||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===n&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=n}else this.lastKey=null}}},{key:"toggleMenu",value:,{key:"firstTouch",value:,{key:"setTabFocus",value:,{key:"global",value:,{key:"container",value:function(){var e=this.player,t=e.config,i=e.elements,n=e.timers;!t.keyboard.global&&t.keyboard.focused&&ke.call(e,i.container,"keydown keyup",this.handleKey,!1),ke.call(e,i.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",();var a=s=ke.call(e,i.container,"enterfullscreen exitfullscreen",(function(t){var n=e.fullscreen,o=n.target,l=n.usingNative;if(o===i.container&&(e.isEmbed||!X(e.config.ratio))){var c="enterfullscreen"===t.type,u=a(c);u.padding;!u.ratio,0,c),l||(c?ke.call(e,window,"resize",s):Te.call(e,window,"resize",s))}}))}},{key:"media",value:function(){var e=this,t=this.player,i=t.elements;if(ke.call(t,t.media,"timeupdate seeking seeked",(function(e){return Ye.timeUpdate.call(t,e)})),ke.call(t,t.media,"durationchange loadeddata loadedmetadata",(function(e){return Ye.durationUpdate.call(t,e)})),ke.call(t,t.media,"ended",(),ke.call(t,t.media,"progress playing seeking seeked",(function(e){return Ye.updateProgress.call(t,e)})),ke.call(t,t.media,"volumechange",(function(e){return Ye.updateVolume.call(t,e)})),ke.call(t,t.media,"playing play pause ended emptied timeupdate",(function(e){return ot.checkPlaying.call(t,e)})),ke.call(t,t.media,"waiting canplay seeked playing",(function(e){return ot.checkLoading.call(t,e)})),t.supported.ui&&t.config.clickToPlay&&!t.isAudio){var n=me.call(t,".".concat(t.config.classNames.video));if(!W(n))return;ke.call(t,i.container,"click",()}t.supported.ui&&t.config.disableContextMenu&&ke.call(t,i.wrapper,"contextmenu",(,!1),ke.call(t,t.media,"volumechange",(),ke.call(t,t.media,"ratechange",(),ke.call(t,t.media,"qualitychange",(),ke.call(t,t.media,"ready qualitychange",(function(){Ye.setDownloadUrl.call(t)}));var a=t.config.events.concat(["keyup","keydown"]).join(" ");ke.call(t,t.media,a,()}},{key:"proxy",value:,{key:"bind",value:,{key:"controls",value:function(){var e=this,t=this.player,i=t.elements,n=G.isIE?"change":"input";if(i.buttons.play&&Array.from(i.buttons.play).forEach((),this.bind(i.buttons.restart,"click",t.restart,"restart"),this.bind(i.buttons.rewind,"click",t.rewind,"rewind"),this.bind(i.buttons.fastForward,"click",t.forward,"fastForward"),this.bind(i.buttons.mute,"click",(,"mute"),this.bind(i.buttons.captions,"click",(function(){return t.toggleCaptions()})),this.bind(i.buttons.download,"click",(function(){Ae.call(t,t.media,"download")}),"download"),this.bind(i.buttons.fullscreen,"click",(function(){t.fullscreen.toggle()}),"fullscreen"),this.bind(i.buttons.pip,"click",(,"pip"),this.bind(i.buttons.airplay,"click",t.airplay,"airplay"),this.bind(i.buttons.settings,"click",(,null,!1),this.bind(i.buttons.settings,"keyup",(,null,!1),this.bind(i.settings.menu,"keydown",(),this.bind(i.inputs.seek,"mousedown mousemove",(),this.bind(i.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",(function(e){var i=e.currentTarget,n=e.keyCode?e.keyCode:e.which;if(!K(e)||39===n||37===n){t.lastSeekTime=Date.now();var a=i.hasAttribute("play-on-seeked"),s=["mouseup","touchend","keyup"].includes(e.type);a&&s?(i.removeAttribute("play-on-seeked"),t.play()):!s&&t.playing&&(i.setAttribute("play-on-seeked",""),t.pause())}})),G.isIos){var a=pe.call(t,'input[type="range"]');Array.from(a).forEach(()}this.bind(i.inputs.seek,n,(,"seek"),this.bind(i.progress,"mouseenter mouseleave mousemove",(),this.bind(i.progress,"mousemove touchmove",(function(e){var i=t.previewThumbnails;i&&i.loaded&&i.startMove(e)})),this.bind(i.progress,"mouseleave touchend click",(),this.bind(i.progress,"mousedown touchstart",(function(e){var i=t.previewThumbnails;i&&i.loaded&&i.startScrubbing(e)})),this.bind(i.progress,"mouseup touchend",(),G.isWebkit&&Array.from(pe.call(t,'input[type="range"]')).forEach((),t.config.toggleInvert&&!W(i.display.duration)&&this.bind(i.display.currentTime,"click",(),this.bind(i.inputs.volume,n,(,"volume"),this.bind(i.controls,"mouseenter mouseleave",(),this.bind(i.controls,"mousedown mouseup touchstart touchend touchcancel",(),this.bind(i.controls,"focusin",(),this.bind(i.inputs.volume,"wheel",(,"volume",!1)}}]),t}();"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var ct=();unction dt(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,Ae.call(this,this.media,e?"play":"pause"))}var ht={setup:ready:function(){var e=this,t=this,i=t.config.vimeo,n=Xe(ee({},{loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},i)),a=t.media.getAttribute("src");X(a)&&(a=t.media.getAttribute(t.config.attributes.embed.id));var s,o=X(s=a)?null:D(Number(s))?s:s.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:s,l=ne("iframe"),c=_e(t.config.urls.vimeo.iframe,o,n);l.setAttribute("src",c),l.setAttribute("allowfullscreen",""),l.setAttribute("allowtransparency",""),l.setAttribute("allow","autoplay"),X(i.referrerPolicy)||l.setAttribute("referrerPolicy",i.referrerPolicy);var u=ne("div",{poster:t.poster,class:t.config.classNames.embedContainer});u.appendChild(l),t.media=oe(u,t.media),Ve(_e(t.config.urls.vimeo.api,o),"json").then((),t.embed=new window.Vimeo.Player(l,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return dt.call(t,!0),t.embed.play()},t.media.pause=t.media.stop=var d=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return d},set:);var h=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return h},set:function(e){t.embed.setPlaybackRate(e).then((function(){h=e,Ae.call(t,t.media,"ratechange")}))}});var p=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return p},set:);var m=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return m},set:);var f,g=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return g},set:),t.embed.getVideoUrl().then(().catch((),Object.defineProperty(t.media,"currentSrc",{get:function(){return f}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then((),t.embed.setAutopause(t.config.autopause).then((),t.embed.getVideoTitle().then((function(i){t.config.title=i,ot.setTitle.call(e)})),t.embed.getCurrentTime().then((),t.embed.getDuration().then((function(e){t.media.duration=e,Ae.call(t,t.media,"durationchange")})),t.embed.getTextTracks().then((),t.embed.on("cuechange",(),t.embed.on("loaded",(),t.embed.on("bufferstart",(function(){Ae.call(t,t.media,"waiting")})),t.embed.on("bufferend",(function(){Ae.call(t,t.media,"playing")})),t.embed.on("play",(),t.embed.on("pause",(),t.embed.on("timeupdate",(),t.embed.on("progress",(),t.embed.on("seeked",(function(){t.media.seeking=!1,Ae.call(t,t.media,"seeked")})),t.embed.on("ended",(),t.embed.on("error",(),setTimeout((function(){return ot.build.call(t)}),0)}};r ft={setup:getTitle:ready:function(){var e=this,t=e.media&&e.media.getAttribute("id");if(X(t)||!t.startsWith("youtube-")){var i=e.media.getAttribute("src");X(i)&&(i=e.media.getAttribute(this.config.attributes.embed.id));var n,a,s=X(n=i)?null:n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:n,r=(a=e.provider,"".concat(a,"-").concat(Math.floor(1e4*Math.random()))),o=ne("div",{id:r,poster:e.poster});e.media=oe(o,e.media);var l=rt(l("maxres"),121).catch(().catch(().then(().then(().catch((function(){}));var c=e.config.youtube;e.embed=new window.YT.Player(r,{videoId:s,host:mt(c),playerVars:ee({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},c),events:{onError:onPlaybackRateChange:onReady:onStateChange:})}}},gt={setup:function(){this.media?(ue(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),ue(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&ue(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=ne("div",{class:this.config.classNames.video}),te(this.media,this.elements.wrapper),this.isEmbed&&(this.elements.poster=ne("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster))),this.isHTML5?Ie.setup.call(this):this.isYouTube?ft.setup.call(this):this.isVimeo&&ht.setup.call(this)):this.debug.warn("No media element found!")}},yt=function(){eturn i(t,[{key:"load",value:,{key:"ready",value:,{key:"setupIMA",value:,{key:"requestAds",value:,{key:"pollCountdown",value:,{key:"onAdsManagerLoaded",value:,{key:"addCuePoints",value:,{key:"onAdEvent",value:,{key:"onAdError",value:,{key:"listeners",value:,{key:"play",value:,{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play()}},{key:"pauseContent",value:,{key:"cancel",value:,{key:"loadAds",value:,{key:"trigger",value:,{key:"on",value:,{key:"startSafetyTimer",value:,{key:"clearSafetyTimer",value:,{key:"enabled",get:,{key:"tagUrl",get:]),t}(),vt=bt=function(){eturn i(t,[{key:"load",value:,{key:"getThumbnails",value:function(){var e=this;return new Promise((function(t){var i=e.player.config.previewThumbnails.src;if(X(i))throw new Error("Missing previewThumbnails.src config attribute");var n=(F(i)?[i]:i).map(();Promise.all(n).then(()}))}},{key:"getThumbnail",value:,{key:"startMove",value:,{key:"endMove",value:,{key:"startScrubbing",value:,{key:"endScrubbing",value:,{key:"listeners",value:,{key:"render",value:,{key:"destroy",value:,{key:"showImageAtCurrentTime",value:,{key:"loadImage",value:,{key:"showImage",value:,{key:"removeOldImages",value:,{key:"preloadNearby",value:,{key:"getHigherQuality",value:,{key:"toggleThumbContainer",value:,{key:"toggleScrubbingContainer",value:,{key:"determineContainerAutoSizing",value:,{key:"setThumbContainerSizeAndPos",value:,{key:"setThumbContainerPos",value:,{key:"setScrubbingContainerSize",value:,{key:"setImageSizeAndOffset",value:,{key:"enabled",get:,{key:"currentImageContainer",get:,{key:"usingSprites",get:,{key:"thumbAspectRatio",get:,{key:"thumbContainerHeight",get:,{key:"currentImageElement",get:set:]),t}(),wt={insertElements:change:;var kt,Tt=function(){function t(i,n){var a=this;if(e(this,t),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=ve.touch,this.media=i,F(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||U(this.media)||B(this.media))&&(this.media=this.media[0]),this.config=ee({},$e,t.defaults,n||{},)),this.elements={container:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new at(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",ve),!q(this.media)&&W(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(ve.check().api){var s=this.media.cloneNode(!0);s.autoplay=!1,this.elements.original=s;var r=this.media.tagName.toLowerCase(),o=null,l=null;switch(r){case"div":if(o=this.media.querySelector("iframe"),W(o)){if(l=Qe(o.getAttribute("src")),this.provider=l.toString()),this.elements.container=this.media,this.media=o,this.elements.container.className="",l.search.length){var c=["1","true"];c.includes(l.searchParams.get("autoplay"))&&(this.config.autoplay=!0),c.includes(l.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=c.includes(l.searchParams.get("playsinline")),this.config.youtube.hl=l.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(X(this.provider)||!Object.keys(et).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=it;break;case"video":case"audio":this.type=r,this.provider=et.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=ve.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new lt(this),this.storage=new Re(this),this.media.plyr=this,W(this.elements.container)||(this.elements.container=ne("div",{tabindex:0}),te(this.media,this.elements.container)),ot.addStyleHook.call(this),gt.setup.call(this),this.config.debug&&ke.call(this,this.elements.container,this.config.events.join(" "),(),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&ot.build.call(this),this.listeners.container(),this.listeners.global(),this.fullscreen=new st(this),this.config.ads.enabled&&(this.ads=new yt(this)),this.isHTML5&&this.config.autoplay&&setTimeout((,10),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new bt(this))):this.debug.error("Setup failed: no support")}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed")}return i(t,[{key:"play",value:function(){var e=this;return V(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then((function(){return e.ads.play()})).catch((),this.media.play()):null}},{key:"pause",value:,{key:"togglePlay",value:,{key:"stop",value:,{key:"restart",value:,{key:"rewind",value:,{key:"forward",value:,{key:"increaseVolume",value:,{key:"decreaseVolume",value:,{key:"toggleCaptions",value:function(e){Je.toggle.call(this,e,!1)}},{key:"airplay",value:,{key:"toggleControls",value:function(e){if(this.supported.ui&&!this.isAudio){var t=de(this.elements.container,this.config.classNames.hideControls),i=void 0===e?void 0:!e,n=ue(this.elements.container,this.config.classNames.hideControls,i);if(n&&this.config.controls.includes("settings")&&!X(this.config.settings)&&Ye.toggleMenu.call(this,!1),n!==t){var a=n?"controlshidden":"controlsshown";Ae.call(this,this.media,a)}return!n}return!1}},{key:"on",value:function(e,t){ke.call(this,this.elements.container,e,t)}},{key:"once",value:,{key:"off",value:,{key:"destroy",value:,{key:"supports",value:,{key:"isHTML5",get:function(){return this.provider===et.html5}},{key:"isEmbed",get:,{key:"isYouTube",get:function(){return this.provider===et.youtube}},{key:"isVimeo",get:,{key:"isVideo",get:function(){return this.type===it}},{key:"isAudio",get:,{key:"playing",get:,{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:,{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:,{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:,{key:"volume",set:get:function(){return Number(this.media.volume)}},{key:"muted",set:get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:,{key:"speed",set:get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,o(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:,{key:"quality",set:get:function(){return this.media.quality}},{key:"loop",set:get:function(){return Boolean(this.media.loop)}},{key:"source",set:get:,{key:"download",get:set:,{key:"poster",set:get:,{key:"ratio",get:set:,{key:"autoplay",set:get:,{key:"currentTrack",set:function(e){Je.set.call(this,e,!1)},get:,{key:"language",set:get:,{key:"pip",set:get:],[{key:"supported",value:,{key:"loadSprite",value:,{key:"setup",value:]),t}();return Tt.defaults=(kt=$e,JSON.parse(JSON.stringify(kt))),Tt}));
//# sourceMappingURL=plyr.min.js.map