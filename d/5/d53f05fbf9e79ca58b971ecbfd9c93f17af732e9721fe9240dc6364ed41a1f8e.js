"object"==typeof navigator&&this,(function(){"use strict";{addCSS:!0,thumbWidth:15,watch:!0};function o(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}var l=function(e){return null!=e?e.constructor:null},c=function(e,t){return Boolean(e&&t&&e instanceof t)},u=function(e){return null==e},d=function(e){return l(e)===Object},h=function(e){return l(e)===String},m=function(e){return Array.isArray(e)},p=function(e){return c(e,NodeList)},f={nullOrUndefined:u,object:d,number:function(e){return l(e)===Number&&!Number.isNaN(e)},string:h,boolean:function(e){return l(e)===Boolean},function:function(e){return l(e)===Function},array:m,nodeList:p,element:function(e){return c(e,Element)},event:function(e){return c(e,Event)},empty:function(e){return u(e)||(h(e)||m(e)||p(e))&&!e.length||d(e)&&!Object.keys(e).length}};ar y,v,b,k=function(){eturn n(t,[{key:"init",value:,{key:"destroy",value:,{key:"listeners",value:,{key:"get",value:,{key:"set",value:],[{key:"setup",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;if(f.empty(e)||f.string(e)?i=Array.from(document.querySelectorAll(f.string(e)?e:'input[type="range"]')):f.element(e)?i=[e]:f.nodeList(e)?i=Array.from(e):f.array(e)&&(i=e.filter(f.element)),f.empty(i))return null;var a=Object.assign({},r,n);if(f.string(e)&&a.watch){var s=new MutationObserver((function(n){Array.from(n).forEach((function(n){Array.from(n.addedNodes).forEach((function(n){if(f.element(n)&&o(n,e))new t(n,a)}))}))}));s.observe(document.body,{childList:!0,subtree:!0})}return i.map((function(e){return new t(e,n)}))}},{key:"enabled",get:]),t}(),w=T=C=A=function(e){return w(e)===Object},E=function(e){return w(e)===String},S=function(e){return Array.isArray(e)},P=function(e){return T(e,NodeList)},N=M={nullOrUndefined:C,object:A,number:string:E,boolean:function(e){return w(e)===Boolean},function:function(e){return w(e)===Function},array:S,weakMap:function(e){return T(e,WeakMap)},nodeList:P,element:function(e){return T(e,Element)},textNode:event:function(e){return T(e,Event)},keyboardEvent:function(e){return T(e,KeyboardEvent)},cue:track:promise:url:empty:N},x=(y=document.createElement("span"),v={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},b=Object.keys(v).find((),!!M.string(b)&&v[b]);ar I={isIE:
/* @cc_on!@ */
!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)},_=);unction j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];O.call(this,e,t,n,!0,i,a)}rn this.elements.container.querySelectorAll(e)}unction ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(M.element(e)){var n=te.call(this,"button:not(:disabled), input:not(:disabled), [tabindex]"),i=n[0],a=n[n.length-1];O.call(this,this.elements.container,"keydown",(,t,!1)}}ar se,re={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},oe={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:pip:!(I.isIPhone||!M.function(z("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||z("video").disablePictureInPicture)),airplay:M.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:textTracks:"textTracks"in document.createElement("video"),rangeInput:(se=document.createElement("input"),se.type="range","range"===se.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==x,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches};he={getSources:getQualityOptions:extend:function(){if(this.isHTML5){var e=this;M.empty(this.config.ratio)||de.call(e),Object.defineProperty(e.media,"quality",{get:set:)}},cancelRequests:;={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},ke=we=);r Ae=Ee=Se=ar Ne={getIconUrl:findElements:createIcon:createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=ke(e,this.config),i=Object.assign({},t,{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")});return z("span",i,n)},createBadge:createButton:createRange:createProgress:createTime:bindMenuItemShortcuts:function(e,t){var n=this;j(e,"keydown keyup",(,!1),j(e,"keyup",()},createMenuItem:formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!M.number(e))return e;var n=Ae(this.duration)>0;return Pe(e,n,t)},updateTimeDisplay:updateVolume:setRange:updateProgress:updateRangeFill:updateSeekTooltip:timeUpdate:durationUpdate:toggleMenuButton:updateSetting:getLabel:setQualityMenu:setCaptionsMenu:setSpeedMenu:checkMenu:focusFirstMenuItem:toggleMenu:getMenuSize:showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(M.element(i)){var a=i.parentNode,s=Array.from(a.children).find(();if(oe.transitions&&!oe.reducedMotion){a.style.width="".concat(s.scrollWidth,"px"),a.style.height="".concat(s.scrollHeight,"px");var r=Ne.getMenuSize.call(this,i),o=j.call(this,a,x,o),a.style.width="".concat(r.width,"px"),a.style.height="".concat(r.height,"px")}$(s,!0),$(i,!1),Ne.focusFirstMenuItem.call(this,i,n)}},setDownloadUrl:create:inject:function(){var e=this;if(this.config.loadSprite){var t=Ne.getIconUrl.call(this);t.cors&&Ce(t.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var n=null;this.elements.controls=null;var i={id:this.id,seektime:this.config.seekTime,title:this.config.title},s=!0;M.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,i)),this.config.controls||(this.config.controls=[]),M.element(this.config.controls)||M.string(this.config.controls)?n=this.config.controls:(n=Ne.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Le.getLabel.call(this)}),s=!1);var r,o=if(s&&(M.string(this.config.controls)?n=o(n):M.element(n)&&(n.innerHTML=o(n.innerHTML))),M.string(this.config.selectors.controls.container)&&(r=document.querySelector(this.config.selectors.controls.container)),M.element(r)||(r=this.elements.container),r[M.element(n)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",n),M.element(this.elements.controls)||Ne.findElements.call(this),!M.empty(this.elements.buttons)){var l=Object.values(this.elements.buttons).filter(Boolean).forEach(()}if(I.isEdge&&L(r),this.config.tooltips.controls){var c=this.config,u=c.classNames,d=c.selectors,h="".concat(d.controls.wrapper," ").concat(d.labels," .").concat(u.hidden),m=te.call(this,h);Array.from(m).forEach(()}}};r Le={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!oe.textTracks)M.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&Ne.setCaptionsMenu.call(this);else{if(M.element(this.elements.captions)||(this.elements.captions=z("div",J(this.config.selectors.captions)),this.elements.captions,this.elements.wrapper)),I.isIE&&window.URL){var e=this.media.querySelectorAll("track");Array.from(e).forEach(()}var t=me((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map(()),n=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===n)n=a(t,1)[0];var i=this.storage.get("captions");if(M.boolean(i)||(i=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:i,language:n,languages:t}),this.isHTML5){var s=this.config.captions.update?"addtrack removetrack":"removetrack";j.call(this,this.media.textTracks,s,Le.update.bind(this))}setTimeout(Le.update.bind(this),0)}},update:toggle:set:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Le.getTracks.call(this);if(-1!==e)if(M.number(e))if(e in n){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;var i=n[e],a=i||{},s=a.language;this.captions.currentTrackNode=i,Ne.updateSetting.call(this,"captions"),t||(this.captions.language=s,this.storage.set({language:s})),this.isVimeo&&this.embed.enableTextTrack(s),D.call(this,this.media,"languagechange")}Le.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&Le.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else Le.toggle.call(this,!1,t)},setLanguage:getTracks:findTrack:getCurrentTrack:getLabel:updateCues:,Ie={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.6/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240]},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},_e="picture-in-picture",Oe="inline",je={html5:"html5",youtube:"youtube",vimeo:"vimeo"},qe={audio:"audio",video:"video"};var He=function(){},De=);function Fe(){if(this.enabled){var e=this.player.elements.buttons.fullscreen;M.element(e)&&(e.pressed=this.active),D.call(this.player,this.target,this.active?"enterfullscreen":"exitfullscreen",!0),I.isIos||ie.call(this.player,this.target,this.active)}}function Re(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e?this.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",G(this.target,this.player.config.classNames.fullscreen.fallback,e),I.isIos){var t=document.head.querySelector('meta[name="viewport"]'),n="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var i=M.string(t.content)&&t.content.includes(n);e?(this.cleanupViewport=!i,i||(t.content+=",".concat(n))):this.cleanupViewport&&(t.content=t.content.split(",").filter(().join(","))}Fe.call(this)}var Ve=function(){eturn n(t,[{key:"update",value:,{key:"enter",value:,{key:"exit",value:,{key:"toggle",value:,{key:"usingNative",get:,{key:"enabled",get:,{key:"active",get:,{key:"target",get:],[{key:"native",get:,{key:"prefix",get:,{key:"property",get:]),t}();ar Ue={addStyleHook:toggleNativeControls:build:setTitle:togglePoster:setPoster:checkPlaying:function(e){var t=this;G(this.elements.container,this.config.classNames.playing,this.playing),G(this.elements.container,this.config.classNames.paused,this.paused),G(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach((),M.event(e)&&"timeupdate"===e.type||Ue.toggleControls.call(this)},checkLoading:toggleControls:,We=function(){eturn n(t,[{key:"handleKey",value:function(e){var t=this.player,n=t.elements,i=e.keyCode?e.keyCode:e.which,a="keydown"===e.type,s=a&&i===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&M.number(i)){if(a){var r=document.activeElement;if(M.element(r)){var o=t.config.selectors.editable;if(r!==n.inputs.seek&&ee(r,o))return;if(32===e.which&&ee(r,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:s||(t.currentTime=t.duration/10*(i-48));break;case 32:case 75:s||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:s||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:s||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}}},{key:"toggleMenu",value:,{key:"firstTouch",value:,{key:"setTabFocus",value:,{key:"global",value:,{key:"container",value:function(){var e=this.player,t=e.config,n=e.elements,i=e.timers;!t.keyboard.global&&t.keyboard.focused&&j.call(e,n.container,"keydown keyup",this.handleKey,!1),j.call(e,n.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",();var s=r=j.call(e,n.container,"enterfullscreen exitfullscreen",(function(t){var i=e.fullscreen,o=i.target,l=i.usingNative;if(o===n.container&&(e.isEmbed||!M.empty(e.config.ratio))){var c="enterfullscreen"===t.type,u=s(c);u.padding;!u.ratio,0,c),l||(c?j.call(e,window,"resize",r):q.call(e,window,"resize",r))}}))}},{key:"media",value:,{key:"proxy",value:,{key:"bind",value:,{key:"controls",value:function(){var e=this,t=this.player,n=t.elements,i=I.isIE?"change":"input";if(n.buttons.play&&Array.from(n.buttons.play).forEach((),this.bind(n.buttons.restart,"click",t.restart,"restart"),this.bind(n.buttons.rewind,"click",t.rewind,"rewind"),this.bind(n.buttons.fastForward,"click",t.forward,"fastForward"),this.bind(n.buttons.mute,"click",(,"mute"),this.bind(n.buttons.captions,"click",(function(){return t.toggleCaptions()})),this.bind(n.buttons.download,"click",(function(){D.call(t,t.media,"download")}),"download"),this.bind(n.buttons.fullscreen,"click",(function(){t.fullscreen.toggle()}),"fullscreen"),this.bind(n.buttons.pip,"click",(,"pip"),this.bind(n.buttons.airplay,"click",t.airplay,"airplay"),this.bind(n.buttons.settings,"click",(),this.bind(n.buttons.settings,"keyup",(,null,!1),this.bind(n.settings.menu,"keydown",(),this.bind(n.inputs.seek,"mousedown mousemove",(),this.bind(n.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",(),I.isIos){var s=te.call(t,'input[type="range"]');Array.from(s).forEach(()}this.bind(n.inputs.seek,i,(,"seek"),this.bind(n.progress,"mouseenter mouseleave mousemove",(),this.bind(n.progress,"mousemove touchmove",(function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startMove(e)})),this.bind(n.progress,"mouseleave click",(),this.bind(n.progress,"mousedown touchstart",(function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startScrubbing(e)})),this.bind(n.progress,"mouseup touchend",(),I.isWebkit&&Array.from(te.call(t,'input[type="range"]')).forEach((),t.config.toggleInvert&&!M.element(n.display.duration)&&this.bind(n.display.currentTime,"click",(),this.bind(n.inputs.volume,i,(,"volume"),this.bind(n.controls,"mouseenter mouseleave",(),this.bind(n.controls,"mousedown mouseup touchstart touchend touchcancel",(),this.bind(n.controls,"focusin",(),this.bind(n.inputs.volume,"wheel",(,"volume",!1)}}]),t}();"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var ze=(function(e,t){e.exports=)}));unction Ye(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,D.call(this,this.media,e?"play":"pause"))}var Qe={setup:ready:function(){var e=this,t=this,n=t.config.vimeo,i=xe(B({},{loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},n)),s=t.media.getAttribute("src");M.empty(s)&&(s=t.media.getAttribute(t.config.attributes.embed.id));var r,o=(r=s,M.empty(r)?null:M.number(Number(r))?r:r.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:r),l=z("iframe"),c=pe(t.config.urls.vimeo.iframe,o,i);l.setAttribute("src",c),l.setAttribute("allowfullscreen",""),l.setAttribute("allowtransparency",""),l.setAttribute("allow","autoplay");var u=z("div",{poster:t.poster,class:t.config.classNames.embedContainer});u.appendChild(l),t.media=X(u,t.media),Te(pe(t.config.urls.vimeo.api,o),"json").then((),t.embed=new window.Vimeo.Player(l,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return Ye.call(t,!0),t.embed.play()},t.media.pause=t.media.stop=var d=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return d},set:);var h=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return h},set:);var m=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return m},set:);var p=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return p},set:);var f,g=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return g},set:),t.embed.getVideoUrl().then(().catch((),Object.defineProperty(t.media,"currentSrc",{get:function(){return f}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then((),t.embed.setAutopause(t.config.autopause).then((),t.embed.getVideoTitle().then((function(n){t.config.title=n,Ue.setTitle.call(e)})),t.embed.getCurrentTime().then((),t.embed.getDuration().then((function(e){t.media.duration=e,D.call(t,t.media,"durationchange")})),t.embed.getTextTracks().then((),t.embed.on("cuechange",(),t.embed.on("loaded",(),t.embed.on("play",(),t.embed.on("pause",(),t.embed.on("timeupdate",(),t.embed.on("progress",(),t.embed.on("seeked",(function(){t.media.seeking=!1,D.call(t,t.media,"seeked")})),t.embed.on("ended",(),t.embed.on("error",(),setTimeout((function(){return Ue.build.call(t)}),0)}};r $e={setup:getTitle:ready:function(){var e=this,t=e.media&&e.media.getAttribute("id");if(M.empty(t)||!t.startsWith("youtube-")){var n=e.media.getAttribute("src");M.empty(n)&&(n=e.media.getAttribute(this.config.attributes.embed.id));var i,a,s=(i=n,M.empty(i)?null:i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:i),r=(a=e.provider,"".concat(a,"-").concat(Math.floor(1e4*Math.random()))),o=z("div",{id:r,poster:e.poster});e.media=X(o,e.media);var l=Be(l("maxres"),121).catch(().catch(().then(().then(().catch((function(){}));var c=e.config.youtube;e.embed=new window.YT.Player(r,{videoId:s,host:Je(c),playerVars:B({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},c),events:{onError:onPlaybackRateChange:onReady:onStateChange:})}}},Ge={setup:,Ze=function(){eturn n(t,[{key:"load",value:,{key:"ready",value:,{key:"setupIMA",value:,{key:"requestAds",value:,{key:"pollCountdown",value:,{key:"onAdsManagerLoaded",value:,{key:"addCuePoints",value:,{key:"onAdEvent",value:,{key:"onAdError",value:,{key:"listeners",value:,{key:"play",value:,{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play()}},{key:"pauseContent",value:,{key:"cancel",value:,{key:"loadAds",value:,{key:"trigger",value:,{key:"on",value:,{key:"startSafetyTimer",value:,{key:"clearSafetyTimer",value:,{key:"enabled",get:,{key:"tagUrl",get:]),t}(),et=function(){eturn n(t,[{key:"load",value:,{key:"getThumbnails",value:,{key:"getThumbnail",value:,{key:"startMove",value:,{key:"endMove",value:,{key:"startScrubbing",value:,{key:"endScrubbing",value:,{key:"listeners",value:,{key:"render",value:,{key:"showImageAtCurrentTime",value:,{key:"loadImage",value:,{key:"showImage",value:,{key:"removeOldImages",value:,{key:"preloadNearby",value:,{key:"getHigherQuality",value:,{key:"toggleThumbContainer",value:,{key:"toggleScrubbingContainer",value:,{key:"determineContainerAutoSizing",value:,{key:"setThumbContainerSizeAndPos",value:,{key:"setThumbContainerPos",value:,{key:"setScrubbingContainerSize",value:,{key:"setImageSizeAndOffset",value:,{key:"enabled",get:,{key:"currentImageContainer",get:,{key:"usingSprites",get:,{key:"thumbAspectRatio",get:,{key:"thumbContainerHeight",get:,{key:"currentImageElement",get:set:]),t}(),tt={insertElements:change:;var nt,it=function(){eturn n(t,[{key:"play",value:,{key:"pause",value:,{key:"togglePlay",value:,{key:"stop",value:,{key:"restart",value:,{key:"rewind",value:,{key:"forward",value:,{key:"increaseVolume",value:,{key:"decreaseVolume",value:,{key:"toggleCaptions",value:function(e){Le.toggle.call(this,e,!1)}},{key:"airplay",value:,{key:"toggleControls",value:,{key:"on",value:function(e,t){j.call(this,this.elements.container,e,t)}},{key:"once",value:,{key:"off",value:,{key:"destroy",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.ready){var i=function(){document.body.style.overflow="",t.embed=null,n?(Object.keys(t.elements).length&&(Y(t.elements.buttons.play),Y(t.elements.captions),Y(t.elements.controls),Y(t.elements.wrapper),t.elements.buttons.play=null,t.elements.captions=null,t.elements.controls=null,t.elements.wrapper=null),M.function(e)&&e()):(F.call(t),X(t.elements.original,t.elements.container),D.call(t,t.elements.original,"destroyed",!0),M.function(e)&&e.call(t.elements.original),t.ready=!1,setTimeout((,200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(Ue.toggleNativeControls.call(this,!0),i()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&M.function(this.embed.destroy)&&this.embed.destroy(),i()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(i),setTimeout(i,200))}}},{key:"supports",value:,{key:"isHTML5",get:function(){return this.provider===je.html5}},{key:"isEmbed",get:,{key:"isYouTube",get:function(){return this.provider===je.youtube}},{key:"isVimeo",get:function(){return this.provider===je.vimeo}},{key:"isVideo",get:function(){return this.type===qe.video}},{key:"isAudio",get:,{key:"playing",get:,{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:,{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:,{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:,{key:"volume",set:get:function(){return Number(this.media.volume)}},{key:"muted",set:get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:,{key:"speed",set:get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,s(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:,{key:"quality",set:get:function(){return this.media.quality}},{key:"loop",set:get:function(){return Boolean(this.media.loop)}},{key:"source",set:get:,{key:"download",get:set:,{key:"poster",set:get:,{key:"ratio",get:set:,{key:"autoplay",set:get:,{key:"currentTrack",set:function(e){Le.set.call(this,e,!1)},get:,{key:"language",set:get:,{key:"pip",set:get:],[{key:"supported",value:,{key:"loadSprite",value:,{key:"setup",value:]),t}();return it.defaults=(nt=Ie,JSON.parse(JSON.stringify(nt))),it}));
