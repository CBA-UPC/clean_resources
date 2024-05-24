._events[f].fn?this._events[f]=[this._events[f],d]:this._events[f].push(d):(this._events[f]=d,this._eventsCount++),this},f.prototype.once=function(a,b,c){var d=new e(b,c||this,!0),f=h?h+a:a;return this._events[f]?this._events[f].fn?this._events[f]=[this._events[f],d]:this._events[f].push(d):(this._events[f]=d,this._eventsCount++),this},f.prototype.removeListener=function(a,b,c,e){var f=h?h+a:a;if(!this._events[f])return this;if(!b)return 0==--this._eventsCount?this._events=new d:delete this._events[f],this;var g=this._events[f];if(g.fn)g.fn!==b||e&&!g.once||c&&g.context!==c||(0==--this._eventsCount?this._events=new d:delete this._events[f]);else{for(var i=0,j=[],k=g.length;i<k;i++)(g[i].fn!==b||e&&!g[i].once||c&&g[i].context!==c)&&j.push(g[i]);j.length?this._events[f]=1===j.length?j[0]:j:0==--this._eventsCount?this._events=new d:delete this._events[f]}return this},f.prototype.removeAllListeners=function(a){var b;return a?(b=h?h+a:a,this._events[b]&&(0==--this._eventsCount?this._events=new d:delete this._events[b])):(this._events=new d,this._eventsCount=0),this},f.prototype.off=f.prototype.removeListener,f.prototype.addListener=f.prototype.on,f.prototype.setMaxListeners=function(){return this},f.prefixed=h,f.EventEmitter=f,void 0!==b&&(b.exports=f)},{}],2:[function(a,b,c){"use strict";function d(a){function b(a){return function(){}}function c(a){function b(){a.removeEventListener("playing",c),a.removeEventListener("pause",c),a.removeEventListener("abort",c),a.removeEventListener("error",c)}function c(a){b(),"playing"!=a.type&&e('play() was interrupted by a "'+a.type+'" event')}if(a.paused)return void e("video play refused");a.addEventListener("playing",c),a.addEventListener("abort",c),a.addEventListener("error",c),a.addEventListener("pause",c)}function d(){var a=H.play()||c(H);a&&a.catch?a.catch(function(a){e("video_play failed with "+a),console.warn(a),"NotAllowedError"==a.name&&H.hasAttribute("jw-gesture-required")&&(B.trigger("autoplayFailed"),H.setAttribute("autoplay-failed","failed"))}):H.hasAttribute("jw-gesture-required")&&(B.trigger("autoplayFailed"),H.setAttribute("autoplay-failed","failed"))}function e(a){var b;(b=L.debug)&&b.log(a)}function f(){e("hls_play state: "+B.hls_state+" att:"+B.attached),!(B.hls_queued.play="ready"!=B.hls_state)&&B.attached&&(B.hls_restore_pos(),d())}function i(a){a&&("ready"==B.hls_state&&(B.hls_state="idle"),B.level_cb&&D.off(z.Events.LEVEL_LOADED,B.level_cb),B.level_cb=function(){e("hls play queued on level_cb:"+B.hls_queued.play),D.off(z.Events.LEVEL_LOADED,B.level_cb),B.level_cb=void 0,B.hls_state="ready",B.hls_queued.play&&f(),B.trigger(j.JWPLAYER_MEDIA_BUFFER_FULL)},D.on(z.Events.LEVEL_LOADED,B.level_cb),D.loadSource(a),D.media||B.attachMedia())}function k(a){return a&&a.find(function(a){return a.default})||a[0]}function l(a,b){B.hls.holaLog&&B.hls.holaLog[a]&&B.hls.holaLog[a].call(B.hls.holaLog,b)}function m(a){if(B.renderNatively)for(var b=H.textTracks,c=a.tracks[a.track].id,d=0;d<b.length;d++)b[d].mode=b[d]._id==c?"showing":"hidden"}function n(){var a,b,c=H.seekable?H.seekable.length:0;for(b=0,a=0;a<c;a++)b=Math.max(b,H.seekable.end(a));return b}function o(){var a=H.duration,b=n();if(1/0==a&&b){var c=b-H.seekable.start(0);1/0!=c&&c>120&&(a=-c)}return a}function p(){return q()?1/0:o()}function q(){var a,b;try{if(!(b=D.streamController.levels))return;var c=b.find(function(a){return a.details});a=c&&!!c.details.live}catch(a){e("is_live failed with "+a)}return a}function r(){var a=H.buffered,b=H.duration;return!a||!a.length||b<=0||1/0==b?0:Math.min(a.end(a.length-1)/b,1)}function s(a,b,c){a==M&&c==N||(M=a,B.trigger(j.JWPLAYER_MEDIA_BUFFER,{bufferPercent:100*a,position:b,duration:p()}))}function t(){B.setState("complete"),B.trigger(j.JWPLAYER_MEDIA_COMPLETE),B.before_complete=!1}function u(a){if(void 0===a)return"";if(!a)return"0";var b=1024,c=["","K","M","G","T","P"],d=Math.floor(Math.log(a)/Math.log(b));return(a/=Math.pow(b,d))<.001?"0":(a>=b-1&&(a=Math.trunc(a)),a.toFixed(a<1?3:a<10?2:a<100?1:0).replace(/\.0*$/,"")+c[d])}function v(a){return a.height?a.height+"p":a.width?Math.round(9*a.width/16)+"p":a.bitrate?u(a.bitrate)+"bps":0}function w(){var a=D.levels||[],b=[];return a.length>1&&b.push({label:"Auto"}),a.forEach(function(a){b.push({bitrate:a.bitrate,height:a.height,label:v(a),width:a.width})}),b}function x(a){var b=D.levels||[];return a=a||D.currentLevel,{jw:D.manual_level==-1||b.length<2?0:a+1,real:b.length<2?0:a+1}}var y=h.jwplayer||window.jwplayer,z=h.Hls||window.Hls,A=a&&y(a);console.log("init hola/hls provider v"+h.VERSION+" hls v"+z.version+(h.version?" hap v"+h.version:"")),A.provider=this;var B=this;this.hls_restore_pos=function(){var a=this.hls_queued.seek,b=H.currentTime;"STOPPED"==D.streamController.state&&(D.streamController.startPosition=0,D.startLoad(a||0)),a&&(this._in_seek=!0,H.currentTime=a,this.trigger(j.JWPLAYER_MEDIA_SEEK,{position:b,offset:a}),H.readyState||H.dispatchEvent(new Event("seeking")),this.hls_queued.seek=0)},this.events=new g,this.addEventListener=this.on=this.events.on.bind(this.events),this.once=this.events.once.bind(this.events),this.removeEventListener=this.off=this.events.off.bind(this.events),this.trigger=this.emit=function(a){if(B.attached||B.before_complete){var b=[].slice.call(arguments);B.events.emit.apply(this.events,b),"all"!=a&&(b.unshift("all"),B.events.emit.apply(this.events,b))}},this.removeAllListeners=function(a){this.events.removeAllListeners(a)},this.hls_queued={play:!1,seek:0},this.attached=!0,this.hls_state="idle",this.is_mobile=function(){var a,b,c=navigator.userAgent;if((a=/iP(hone|ad|od)/i.test(c))||(b=/Android/i.test(c)))return{is_ios:a,is_android:b}},this.supports_captions=function(){var a=navigator.userAgent;return/(iPhone|iPad|iPod|iPod touch);.*?OS/.test(a)||/ (Chrome|Version)\/\d+(\.\d+)+.* Safari\/\d+(\.\d+)+/.test(a)||/Firefox\/(\d+(?:\.\d+)+)/.test(a)};var C,D,E,F,G=document.getElementById(a),H=G?G.querySelector("video"):void 0,I=this.is_mobile(),J={reason:"initial choice",mode:"auto"};H||(H=document.createElement("video"),I&&H.setAttribute("jw-gesture-required","")),H.className="jw-video jw-reset",H.hola_dm_hls_attached=!0,function(a,b){for(var c=a;c&&!c.hasOwnProperty("src");c=Object.getPrototypeOf(c));if(c){var d=Object.getOwnPropertyDescriptor(c,"src");d.get||d.set||(d.get=function(){var b=a.getAttribute("src");return null!=b?b:""},d.set=function(b){var c=document.createElement("source");c.src=b||"",a.setAttribute("src",c.src)}),Object.defineProperty(a,"src",{configurable:!0,enumerable:!1,set:function(c){b(d.get.call(a),c)&&d.set.call(a,c)},get:d.get})}}(H,function(a,b){return b!=a+"?"});var K,L=h.hls_params||{};this.ad_count=0,A&&(A.on("captionsList",m),A.on("captionsChanged",m),A.on("adImpression",function(){B.ad_count++}),A.on("adComplete",function(){B.ad_count--}),A.on("adSkipped",function(){B.ad_count--}),Object.assign(L,A.hola_config),"undefined"!=L.debug&&(K=L.debug,delete L.debug)),L.debug={},["debug","info","log","warn","error"].forEach(function(a){L.debug[a]=l.bind(null,a)}),this.hls=D=new z(L),D.holaLog=K,A&&(A.hls=D);var M,N,O,P={durationchange:function(){N=o(),s(r(),O,N)},ended:function(){"idle"!=B.state&&"complete"!=B.state&&(B.before_complete=!0,B.trigger(j.JWPLAYER_MEDIA_BEFORECOMPLETE),B.attached&&t())},error:function(){B.trigger(j.JWPLAYER_MEDIA_ERROR,{message:"Error loading media: File could not be played"})},loadstart:function(){H.setAttribute("jw-loaded","started")},loadeddata:function(){H.setAttribute("jw-loaded","data"),B.supports_captions()&&(H.textTracks.onaddtrack=function(){B.renderNatively=!0,B.trigger("subtitlesTracks",{tracks:H.textTracks})},H.textTracks.length&&H.textTracks.onaddtrack())},loadedmetadata:function(){H.muted&&(H.muted=!1,H.muted=!0),H.setAttribute("jw-loaded","meta"),N=o(),B.trigger(j.JWPLAYER_MEDIA_META,{duration:p(),height:H.videoHeight,width:H.videoWidth})},canplay:function(){F=!0,B.trigger(j.JWPLAYER_MEDIA_BUFFER_FULL)},playing:function(){B.setState("playing"),H.hasAttribute("jw-played")||H.setAttribute("jw-played",""),H.hasAttribute("jw-gesture-required")&&(H.removeAttribute("jw-gesture-required"),H.removeAttribute("autoplay-failed")),B.trigger(j.JWPLAYER_PROVIDER_FIRST_FRAME,{})},pause:function(){"complete"!=B.state&&H.currentTime!=H.duration&&B.setState("paused")},seeking:function(){B._in_seek||(B._in_seek=!0,B.trigger(j.JWPLAYER_MEDIA_SEEK,{position:O,offset:H.currentTime}))},seeked:function(){B._in_seek=!1,B.trigger(j.JWPLAYER_MEDIA_SEEKED)},progress:function(){s(r(),O,N)},timeupdate:function(){N=o(),O=N<0?-(n()-H.currentTime):H.currentTime,s(r(),O,N),"playing"==B.state&&B.trigger(j.JWPLAYER_MEDIA_TIME,{position:O,duration:p()})}};for(var Q in P)H.addEventListener(Q,function(a){return function(){B.attached&&P[a]()}}(Q),!1);D.on(z.Events.ERROR,function(a,b){if(b.fatal){var c;switch(b.details){case z.ErrorDetails.MANIFEST_LOAD_ERROR:case z.ErrorDetails.MANIFEST_LOAD_TIMEOUT:c="Cannot load M3U8: "+b.response.statusText;break;default:c="Error loading media: "+b.details}B.trigger(j.JWPLAYER_MEDIA_ERROR,{message:c})}}),D.on(z.Events.MANIFEST_LOADED,function(){B.trigger(j.JWPLAYER_MEDIA_LEVELS,{currentQuality:x().jw,levels:w()});var a,b=0;(a=D.levels)&&(a.forEach(function(a){b+=+!!(a.videoCodec||!a.audioCodec&&(a.bitrate>64e3||a.width||a.height))}),B.trigger(j.JWPLAYER_MEDIA_TYPE,{mediaType:b?"video":"audio"}))}),D.on(z.Events.LEVEL_SWITCH,function(a,b){var c=w(),d=x(b.level);B.trigger(j.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:d.jw,levels:c});var e=c[d.real];J.level=e,J.level.index=d.real,J.level.label=D.manual_level==-1&&c.length>1?"auto":e.label,J.reason=J.reason||"auto",B.trigger("visualQuality",J),J.reason=""}),this.init=function(a){E=!1,H.setAttribute("jw-loaded","init")},this.load=function(a){if(this.attached){var b=k(a.sources).file,c=H.getAttribute("jw-loaded"),e=this.hls_queued,g=H.hasAttribute("jw-played");if(I&&!g||this.setState("loading"),e.seek=Math.max(a.starttime-(e.rw_sec||0),0),"ready"!=this.hls_state||(this.source||"")!=b||["init","started"].includes(c)){E=!1,H.load(),D.stopLoad(D.media&&"ready"==this.hls_state&&"init"==c),i(this.source=b),H.setAttribute("jw-loaded","init")}else f();I&&!g&&(E||I.is_ios&&!F||(E=!0,F=!1,d()),H.paused||"playing"==this.state||this.setState("loading"))}},this.play=function(){f()},this.pause=function(){H.pause(),B.setState("paused")},this.stop=function(){D.stopLoad(),B.setState("idle")},this.volume=function(a){H.volume=Math.min(a/100,1)},this.mute=function(a){H.muted=!!a},this.seek=function(a){if(this._in_seek=!0,"ready"==this.hls_state){var b=H.currentTime;H.currentTime=a,this.trigger(j.JWPLAYER_MEDIA_SEEK,{position:b,offset:a})}else this.hls_queued.seek=a},this.resize=function(a,b,c){},this.remove=function(){this.in_container=!1,D.stopLoad(),this.source=void 0,C===H.parentNode&&C.removeChild(H)},this.destroy=function(){for(var a in P)H.removeEventListener(a,P[a],!1);this.removeAllListeners()},this.setVisibility=function(a){C.style.visibility=a?"visible":"",C.style.opacity=a?1:0},this.setFullscreen=function(){return!1},this.getFullscreen=b("getFullscreen"),this.getContainer=function(){return C},this.setContainer=function(a){C=a,C.appendChild(H),this.in_container=!0},D.manual_level=-1,this.setCurrentQuality=function(a){a!=D.manual_level+1&&(D.manual_level=a-1,D.hola_adaptive||(D.loadLevel=D.manual_level),B.trigger(j.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:a,levels:w()}),J.reason="api")},this.getName=function(){return{name:"hola/hls"}},this.get_position=function(){return H.currentTime},this.getQualityLevels=function(){return w()},this.getCurrentQuality=function(){return x(D.loadLevel).jw},this.getAudioTracks=b("getAudioTracks"),this.getCurrentAudioTrack=b("getCurrentAudioTrack"),this.setCurrentAudioTrack=b("setCurrentAudioTrack"),this.checkComplete=function(){return!!this.before_complete},this.setControls=b("setControls"),this.attachMedia=function(){if(this.before_complete)return t();this.ad_count&&e("jwprovider attach inside ad "+this.ad_count),this.attached=!0,D.attachMedia(H)},this.detachMedia=function(){return D.trigger(z.Events.BUFFER_RESET),D.detachMedia(),this.level_cb&&(D.off(z.Events.LEVEL_LOADED,this.level_cb),this.level_cb=void 0),delete D.bufferController.segments,this.attached=!1,H},this.setState=function(a){var b=this.state||"idle";this.state=a,a!=b&&this.trigger(j.JWPLAYER_PLAYER_STATE,{newstate:a})},this.sendMediaType=function(a){var b=["oga","aac","mp3","mpeg","vorbis"].includes(a[0].type);this.trigger(j.JWPLAYER_MEDIA_TYPE,{mediaType:b?"audio":"video"})}}function e(){for(var a,b=h.jwplayer||window.jwplayer,c=0,d=[];(a=b(c++))&&a.pause;)d.push(a);return d}function f(a){return"hls"==a.type||(a.file||"").match(/\.m3u8$/)}var g=a("eventemitter3"),h=b.exports=d,i=!1,j={JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_SEEKED:"seeked",JWPLAYER_MEDIA_TIME:"time",JWPLAYER_MEDIA_TYPE:"mediaType",JWPLAYER_PLAYER_STATE:"state",JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame"};h.getName=function(){return{name:"hola/hls"}},h.supports=function(a){var b=h.Hls||window.Hls;return!e().every(function(b){var c=b.getPlaylist();return(c.every?c:[{sources:[c]}]).every(function(b){return(b.allSources||b.sources||[{file:b.file}]).every(function(b){return b.file!=a.file})})})&&!h.disabled&&f(a)&&b&&b.isSupported()},h.attach=function(){var a=h.jwplayer||window.jwplayer;h.disabled=!1,i||(i=!0,a.api.registerProvider(this))},h.detach=function(a){h.disabled=!0,a&&a.attached&&(a.setState("idle"),a.detachMedia())},h.reload_jwplayer_instances=function(){e().forEach(function(a){var b=a.getConfig();if(b){if(b.advertising&&!b.advertising.client&&b.plugins)for(var c in b.plugins)if(b.plugins[c]===b.advertising){var d=c.match(/\/(\w+)\.js$/);b.advertising.client=d&&d[1];break}a.setup(b)}})},h.VERSION="0.0.79"},{eventemitter3:1}]},{},[2])(2)});
//# sourceMappingURL=jwplayer.hlsjs.min.js.maption" data-dropdown-hover="1">
<div class="navbar-header">
<button type="button" class="navbar-toggle collapsed pull-left" data-toggle="collapse" data-target="#halim" aria-expanded="false">
<span class="sr-only">Menu</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<button type="button" class="navbar-toggle collapsed pull-right" data-toggle="collapse" data-target="#user-info" aria-expanded="false">
<span class="hl-dot-3 rotate" aria-hidden="true"></span>
</button>
<button type="button" class="navbar-toggle collapsed pull-right expand-search-form" data-toggle="collapse" data-target="#search-form" aria-expanded="false">
<span class="hl-search" aria-hidden="true"></span>
</button>
<button type="button" class="navbar-toggle collapsed pull-right get-bookmark-on-mobile">
<i class="hl-bookmark" aria-hidden="true"></i>
<span class="count">0</span>
</button>
</div>
<div class="collapse navbar-collapse" id="halim">
<div class="menu-menu-123-hd-com-container"><ul id="menu-menu-123-hd-com" class="nav navbar-nav navbar-left"><li><a title="หน้าแรก" href="http://123-hd.com/">หน้าแรก</a></li>
<li class=" dropdown"><a title="หมวดหมู่หนัง" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true">หมวดหมู่หนัง <span class="caret"></span></a>
<ul role="menu" class=" dropdown-menu">
<li><a title="หนังใหม่ 2024" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2024">หนังใหม่ 2024</a></li>
<li><a title="หนังใหม่ 2023" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2023">หนังใหม่ 2023</a></li>
<li><a title="หนังใหม่ 2022" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2022">หนังใหม่ 2022</a></li>
<li><a title="หนังใหม่ 2021" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2021">หนังใหม่ 2021</a></li>
<li><a title="หนังใหม่ 2020" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2020">หนังใหม่ 2020</a></li>
<li><a title="หนังใหม่ 2019" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2019">หนังใหม่ 2019</a></li>
<li><a title="หนังชนโรง" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%8a%e0%b8%99%e0%b9%82%e0%b8%a3%e0%b8%87">หนังชนโรง</a></li>
<li><a title="หนังซูม" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%8b%e0%b8%b9%e0%b8%a1">หนังซูม</a></li>
<li><a title="หนัง Netflix" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87-netflix">หนัง Netflix</a></li>
<li><a title="หนังไทย" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%84%e0%b8%97%e0%b8%a2">หนังไทย</a></li>
<li><a title="หนังจีน" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%88%e0%b8%b5%e0%b8%99">หนังจีน</a></li>
<li><a title="หนังญี่ปุ่น" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%8d%e0%b8%b5%e0%b9%88%e0%b8%9b%e0%b8%b8%e0%b9%88%e0%b8%99">หนังญี่ปุ่น</a></li>
<li><a title="หนังอินเดีย" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%ad%e0%b8%b4%e0%b8%99%e0%b9%80%e0%b8%94%e0%b8%b5%e0%b8%a2">หนังอินเดีย</a></li>
<li><a title="หนังเกาหลี" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%80%e0%b8%81%e0%b8%b2%e0%b8%ab%e0%b8%a5%e0%b8%b5">หนังเกาหลี</a></li>
<li><a title="หนัง HBO" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87-hbo">หนัง HBO</a></li>
<li><a title="หนัง Marvel" href="https://www.123-hd.com/%e0%b8%a3%e0%b8%a7%e0%b8%a1%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87-marvel">หนัง Marvel</a></li>
<li><a title="หนังซอมบี้" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%8b%e0%b8%ad%e0%b8%a1%e0%b8%9a%e0%b8%b5%e0%b9%89">หนังซอมบี้</a></li>
<li><a title="หนังภาคต่อ" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%a0%e0%b8%b2%e0%b8%84%e0%b8%95%e0%b9%88%e0%b8%ad">หนังภาคต่อ</a></li>
<li><a title="หนังซับไทย" href="https://www.123-hd.com/%e0%b8%8b%e0%b8%b1%e0%b8%9a%e0%b9%84%e0%b8%97%e0%b8%a2">หนังซับไทย</a></li>
<li><a title="หนัง 18+" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87-18">หนัง 18+</a></li>
</ul>
</li>
<li class=" dropdown"><a title="ดูซีรี่ย์ออนไลน์" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true">ดูซีรี่ย์ออนไลน์ <span class="caret"></span></a>
<ul role="menu" class=" dropdown-menu">
<li><a title="ซีรี่ย์ใหม่ 2024" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2024">ซีรี่ย์ใหม่ 2024</a></li>
<li><a title="ซีรี่ย์ใหม่ 2023" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2023">ซีรี่ย์ใหม่ 2023</a></li>
<li><a title="ซีรี่ย์ใหม่ 2022" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2022">ซีรี่ย์ใหม่ 2022</a></li>
<li><a title="ซีรี่ย์ใหม่ 2021" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2021">ซีรี่ย์ใหม่ 2021</a></li>
<li><a title="ซีรี่ย์ใหม่ 2020" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2020">ซีรี่ย์ใหม่ 2020</a></li>
<li><a title="ซีรี่ย์พากย์ไทย" href="https://www.123-hd.com/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%9e%e0%b8%b2%e0%b8%81%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%97%e0%b8%a2">ซีรี่ย์พากย์ไทย</a></li>
<li><a title="ซีรี่ย์ซับไทย" href="https://www.123-hd.com/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%8b%e0%b8%b1%e0%b8%9a%e0%b9%84%e0%b8%97%e0%b8%a2">ซีรี่ย์ซับไทย</a></li>
<li><a title="ซีรี่ย์จีน" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%88%e0%b8%b5%e0%b8%99">ซีรี่ย์จีน</a></li>
<li><a title="ซีรี่ย์เกาหลี" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%80%e0%b8%81%e0%b8%b2%e0%b8%ab%e0%b8%a5%e0%b8%b5">ซีรี่ย์เกาหลี</a></li>
<li><a title="ซีรี่ย์ฝรั่ง" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/series-%e0%b8%9d%e0%b8%a3%e0%b8%b1%e0%b9%88%e0%b8%87">ซีรี่ย์ฝรั่ง</a></li>
<li><a title="ซีรี่ย์ญี่ปุ่น" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/series-%e0%b8%8d%e0%b8%b5%e0%b9%88%e0%b8%9b%e0%b8%b8%e0%b9%88%e0%b8%99">ซีรี่ย์ญี่ปุ่น</a></li>
<li><a title="ซีรี่ย์ไทย" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/series-%e0%b9%84%e0%b8%97%e0%b8%a2">ซีรี่ย์ไทย</a></li>
<li><a title="ซีรีย์วาย" href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b9%8c%e0%b8%a7%e0%b8%b2%e0%b8%a2">ซีรีย์วาย</a></li>
</ul>
</li>
<li class=" dropdown"><a title="หนังการ์ตูน" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true">หนังการ์ตูน <span class="caret"></span></a>
<ul role="menu" class=" dropdown-menu">
<li><a title="Anime ดูอนิเมะ" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%8c%e0%b8%95%e0%b8%b9%e0%b8%99/anime-%e0%b8%ad%e0%b8%99%e0%b8%b4%e0%b9%80%e0%b8%a1%e0%b8%b0">Anime ดูอนิเมะ</a></li>
<li><a title="Animation อนิเมชั่น" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%8c%e0%b8%95%e0%b8%b9%e0%b8%99/animation">Animation อนิเมชั่น</a></li>
<li><a title="The Movie เดอะมูฟวี่" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%8c%e0%b8%95%e0%b8%b9%e0%b8%99/the-movie-%e0%b9%80%e0%b8%94%e0%b8%ad%e0%b8%b0%e0%b8%a1%e0%b8%b9%e0%b8%9f%e0%b8%a7%e0%b8%b5%e0%b9%88">The Movie เดอะมูฟวี่</a></li>
</ul>
</li>
<li class=" dropdown"><a title="ประเภทหนัง" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true">ประเภทหนัง <span class="caret"></span></a>
<ul role="menu" class=" dropdown-menu">
<li><a title="Action บู๊" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%9a%e0%b8%b9%e0%b9%8a%e0%b9%81%e0%b8%ad%e0%b9%87%e0%b8%84%e0%b8%8a%e0%b8%b1%e0%b9%88%e0%b8%99">Action บู๊</a></li>
<li><a title="Adventure ผจญภัย" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%81%e0%b8%99%e0%b8%a7%e0%b8%9c%e0%b8%88%e0%b8%8d%e0%b8%a0%e0%b8%b1%e0%b8%a2">Adventure ผจญภัย</a></li>
<li><a title="Biography ชีวิตจริง" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%aa%e0%b8%a3%e0%b9%89%e0%b8%b2%e0%b8%87%e0%b8%88%e0%b8%b2%e0%b8%81%e0%b8%8a%e0%b8%b5%e0%b8%a7%e0%b8%b4%e0%b8%95%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87">Biography ชีวิตจริง</a></li>
<li><a title="Comedy ตลก" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%95%e0%b8%a5%e0%b8%81">Comedy ตลก</a></li>
<li><a title="Crime อาชญากรรม" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%ad%e0%b8%b2%e0%b8%8a%e0%b8%8d%e0%b8%b2%e0%b8%81%e0%b8%a3%e0%b8%a3%e0%b8%a1">Crime อาชญากรรม</a></li>
<li><a title="Documentary สารคดี" href="https://www.123-hd.com/%e0%b8%aa%e0%b8%b2%e0%b8%a3%e0%b8%84%e0%b8%94%e0%b8%b5">Documentary สารคดี</a></li>
<li><a title="Drama ชีวิต" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%81%e0%b8%99%e0%b8%a7%e0%b8%94%e0%b8%a3%e0%b8%b2%e0%b8%a1%e0%b9%88%e0%b8%b2">Drama ชีวิต</a></li>
<li><a title="Family ครอบครัว" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%84%e0%b8%a3%e0%b8%ad%e0%b8%9a%e0%b8%84%e0%b8%a3%e0%b8%b1%e0%b8%a7">Family ครอบครัว</a></li>
<li><a title="Fantasy แฟนตาซี" href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%81%e0%b8%9f%e0%b8%99%e0%b8%95%e0%b8%b2%e0%b8%8b%e0%b8%b5">Fantasy แฟนตาซี</a></li>
</ul>
</li>
</ul></div> </div>

</nav>
<div class="collapse navbar-collapse" id="search-form">
<div id="mobile-search-form" class="halim-search-form"></div>
</div>
<div class="collapse navbar-collapse" id="user-info">
<div id="mobile-user-login"></div>
</div>
</div>
</div>

<div class="container">
<div class="row fullwith-slider">
</div>
</div>
<div class="container-fluid halim-full-player hidden halim-centered">
<div id="halim-full-player" class="container col-md-offset-2s col-md-9"></div>
</div>
<div class="container">
<div class="row container" id="wrapper">
<div class="halim-panel-filter">
<div class="panel-heading">
<div class="row">
<div class="col-xs-8 hidden-xs">
<div class="yoast_breadcrumb"><span><span><a href="https://www.123-hd.com/">Home</a> » <span><a href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c">ดูซีรี่ย์ออนไลน์</a> » <span class="breadcrumb_last" aria-current="page">Our Interpreter (2024) วุ่นรักนักแปล</span></span></span></span></div> </div>
<div class="col-xs-4 text-right">
<a href="javascript:;" id="expand-ajax-filter">Filter movies <i id="ajax-filter-icon" class="hl-angle-down"></i></a>
</div>
<div id="alphabet-filter" style="float: right;display: inline-block;margin-right: 25px;"></div>
</div>
</div>
<div id="ajax-filter" class="panel-collapse collapse" aria-expanded="true" role="menu">
<div class="ajax"></div>
</div>
</div>
<div class="text-center letter-filter" id="letter-filter">
<span class="toggle-pagination"><i class="hl-menu"></i> A-Z list</span>
<ul class="pagination list-letter pagination-lg">
<li><span data-href="https://www.123-hd.com/az-list/0" class data-text="All"></span></li>
<li><span data-href="https://www.123-hd.com/az-list/A" class="letter-item " data-text="A"></span></li><li><span data-href="https://www.123-hd.com/az-list/B" class="letter-item " data-text="B"></span></li><li><span data-href="https://www.123-hd.com/az-list/C" class="letter-item " data-text="C"></span></li><li><span data-href="https://www.123-hd.com/az-list/D" class="letter-item " data-text="D"></span></li><li><span data-href="https://www.123-hd.com/az-list/E" class="letter-item " data-text="E"></span></li><li><span data-href="https://www.123-hd.com/az-list/F" class="letter-item " data-text="F"></span></li><li><span data-href="https://www.123-hd.com/az-list/G" class="letter-item " data-text="G"></span></li><li><span data-href="https://www.123-hd.com/az-list/H" class="letter-item " data-text="H"></span></li><li><span data-href="https://www.123-hd.com/az-list/I" class="letter-item " data-text="I"></span></li><li><span data-href="https://www.123-hd.com/az-list/J" class="letter-item " data-text="J"></span></li><li><span data-href="https://www.123-hd.com/az-list/K" class="letter-item " data-text="K"></span></li><li><span data-href="https://www.123-hd.com/az-list/L" class="letter-item " data-text="L"></span></li><li><span data-href="https://www.123-hd.com/az-list/M" class="letter-item " data-text="M"></span></li><li><span data-href="https://www.123-hd.com/az-list/N" class="letter-item " data-text="N"></span></li><li><span data-href="https://www.123-hd.com/az-list/O" class="letter-item " data-text="O"></span></li><li><span data-href="https://www.123-hd.com/az-list/P" class="letter-item " data-text="P"></span></li><li><span data-href="https://www.123-hd.com/az-list/Q" class="letter-item " data-text="Q"></span></li><li><span data-href="https://www.123-hd.com/az-list/R" class="letter-item " data-text="R"></span></li><li><span data-href="https://www.123-hd.com/az-list/S" class="letter-item " data-text="S"></span></li><li><span data-href="https://www.123-hd.com/az-list/T" class="letter-item " data-text="T"></span></li><li><span data-href="https://www.123-hd.com/az-list/U" class="letter-item " data-text="U"></span></li><li><span data-href="https://www.123-hd.com/az-list/V" class="letter-item " data-text="V"></span></li><li><span data-href="https://www.123-hd.com/az-list/W" class="letter-item " data-text="W"></span></li><li><span data-href="https://www.123-hd.com/az-list/X" class="letter-item " data-text="X"></span></li><li><span data-href="https://www.123-hd.com/az-list/Y" class="letter-item " data-text="Y"></span></li><li><span data-href="https://www.123-hd.com/az-list/Z" class="letter-item " data-text="Z"></span></li> </ul>
</div>
<main id="main-contents" class="col-xs-12 col-sm-12 col-md-8">
<section id="content">
<div class="clearfix wrap-content">
<script>var halim_cfg = {"act":"","post_url":"https:\/\/www.123-hd.com\/watch-our-interpreter","ajax_url":"https:\/\/www.123-hd.com\/wp-content\/themes\/halimmovies_54\/halim-ajax.php","player_url":"https:\/\/www.123-hd.com\/wp-content\/themes\/halimmovies_54\/player.php","loading_img":"https:\/\/www.123-hd.com\/wp-content\/themes\/halimmovies_54\/assets\/images\/ajax-loader.gif","eps_slug":"eps","server_slug":null,"type_slug":"slug-2","post_title":"Our Interpreter (2024) วุ่นรักนักแปล","episode":0,"post_id":128224,"episode_slug":"","server":2,"player_error_detect":"display_modal","paging_episode":"false","episode_display":"show_tab_eps","episode_nav_num":100,"auto_reset_cache":null,"resume_playback":true,"resume_text":"Automatically resumes your videos from where you played them last at","resume_text_2":"Playback from the beginning?","playback":"Playback","continue_watching":"Continue watching","player_reload":"Reload Player","jw_error_msg_0":"We are unable to find the video you are looking for. There could be several reasons for this, for example it got removed by the owner!","jw_error_msg_1":"This video file cannot be played.","jw_error_msg_2":"To continue watching, please click on the \"Reload Player\" button","jw_error_msg_3":"or click on the buttons below","light_on":"Light On","light_off":"Light Off","expand":"Expand","collapse":"Collapse","player_loading":"Loading player, please wait...","player_autonext":"Autoplay next episode, please wait...","is_adult":false,"adult_title":"Adult Content Warning!","adult_content":"This site contains content intended for individuals 18\/21 years of age or older as determined by the local and national laws of the region in which you reside. If you are not yet 18+, leave this website immediately. By entering this website, you agree that you are at least 18 years of age or older. You will not redistribute this material to anyone, nor will you permit any minor to view this material.","show_only_once":"Don't show again","exit_btn":"EXIT","is_18plus":"18+ ENTER","report_lng":{"title":"Our Interpreter (2024) วุ่นรักนักแปล","alert":"Your name and message is required (*)","msg":"Your message","msg_success":"Thank you for sending error messages. We will fix the problem in the shortest time possible.","loading_img":"https:\/\/www.123-hd.com\/wp-content\/plugins\/halim-movie-report\/loading.gif","report_btn":"Report","name_or_email":"Name or Email","close":"Close"}}</script>
<div id="banner_top"> <p style="max-height:200px; margin: 0 0 10px;" align="center"><a href="https://juad888z.com/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/09/juad888-728x200-1.gif" title="banner9" alt="banner9" width="728" height="200" border="0"></a></p> <p style="max-height:200px; margin: 0 0 2px;" align="center"><a href="https://ufafatz.com/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/12/728x200-fat.gif" title="banner1" alt="banner1" width="728" height="200" border="0"></a></p> <p style="max-height:200px; margin: 0 0 2px;" align="center"><a href="https://vip168saa.com/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/11/vip168sav4.gif" title="banner2" alt="banner2" width="728" height="200" border="0"></a></p> <p style="max-height:200px; margin: 0 0 2px;" align="center"><a href="https://hydra888a.com/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/12/hydra888-728x200-1.gif" title="banner3" alt="banner3" width="728" height="90" border="0"></a></p> <p style="max-height:200px; margin: 0 0 2px;" align="center"><a href="https://brazil999.me/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/11/brazil999v4.gif" title="banner3" alt="banner3" width="728" height="90" border="0"></a></p> <p style="max-height:200px; margin: 0 0 2px;" align="center"><a href="https://lotto432.group/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/07/728x200-lotto77.gif" title alt width="728" height="90" border="0"></a></p> <p style="max-height:200px; margin: 0 0 2px;" align="center"><a href="https://panama8888.net/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/11/panama888v4.gif" title alt width="728" height="200" border="0"></a></p> <p style="max-height:200px; margin: 0 0 10px;" align="center"><a href="https://ufazeedz.com/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/12/728x200-ufazeed.gif" title="banner9" alt="banner10" width="728" height="200" border="0"></a></p> </div> <div class="halim-movie-wrapper tpl-2"> <div class="movie_info col-xs-12"> <div class="movie-poster col-md-4"> <img class="movie-thumb" src="/wp-content/uploads/2024/01/Our-Interpreter-2024-วุ่นรักนักแปล-300x450.jpg" alt="Our Interpreter (2024) วุ่นรักนักแปล"> <span id="show-trailer" data-url="https://www.youtube.com/embed/MmLRMWpsVTg" class="btn btn-sm btn-primary show-trailer"> <i class="hl-youtube-play"></i> Trailer</span> <div class="halim-watch-box"> </div> </div> <div class="film-poster col-md-8"> <div class="movie-detail"> <h1 class="entry-title">Our Interpreter (2024) วุ่นรักนักแปล</h1> <p class="category">Genres: <a href="https://www.123-hd.com/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%8b%e0%b8%b1%e0%b8%9a%e0%b9%84%e0%b8%97%e0%b8%a2" rel="category tag">ซีรี่ย์ซับไทย</a>, <a href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88-2024" rel="category tag">ซีรี่ย์ใหม่ 2024</a>, <a href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c/%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%88%e0%b8%b5%e0%b8%99" rel="category tag">ซีรี่ย์จีน</a>, <a href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b9%81%e0%b8%99%e0%b8%a7%e0%b8%94%e0%b8%a3%e0%b8%b2%e0%b8%a1%e0%b9%88%e0%b8%b2" rel="category tag">Drama ชีวิต</a>, <a href="https://www.123-hd.com/%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%a3%e0%b8%b1%e0%b8%81%e0%b9%82%e0%b8%a3%e0%b9%81%e0%b8%a1%e0%b8%99%e0%b8%95%e0%b8%b4%e0%b8%81" rel="category tag">Romance โรแมนติก</a>, <a href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c" rel="category tag">ดูซีรี่ย์ออนไลน์</a>, <a href="https://www.123-hd.com/%e0%b8%95%e0%b8%ad%e0%b8%99%e0%b9%81%e0%b8%a3%e0%b8%81" rel="category tag">ตอนแรก</a>, <a href="https://www.123-hd.com/%e0%b8%8b%e0%b8%b1%e0%b8%9a%e0%b9%84%e0%b8%97%e0%b8%a2" rel="category tag">ซับไทย</a></p> <p class="category">Trailer: <a href="https://www.youtube.com/embed/MmLRMWpsVTg" rel target="_blank">ดูตัวอย่าง </a></p> <div class="ratings_wrapper"> <div class="halim_imdbrating taq-score">
<span class="score">0</span><i>/</i>
<span class="max-ratings">5</span>
<span class="total_votes">0</span><span class="vote-txt"> votes</span>
</div>
<div class="rate-this">
<div data-rate="0" data-id="128224" class="user-rate user-rate-active">
<span class="user-rate-image post-large-rate stars-large">
<span style="width: 0%"></span>
</span>
</div>
</div>
</div> </div> </div> </div> <div class="title-block watch-page"> <a href="javascript:;" data-toggle="tooltip" title="Add to bookmark"> <div id="bookmark" class="bookmark-img-animation primary_ribbon" data-post_id="128224" data-thumbnail="/wp-content/uploads/2024/01/Our-Interpreter-2024-วุ่นรักนักแปล-300x450.jpg" data-href="https://www.123-hd.com/our-interpreter" data-title="Our Interpreter (2024) วุ่นรักนักแปล" data-date>  </div> </a> <div class="title-wrapper full"> <h1 class="entry-title"><a href="https://www.123-hd.com/our-interpreter" title="Our Interpreter (2024) วุ่นรักนักแปล" class="tl">Our Interpreter (2024) วุ่นรักนักแปล</a></h1> <span class="plot-collapse" data-toggle="collapse" data-target="#expand-post-content" aria-expanded="false" aria-controls="expand-post-content" data-text="อ่านเรื่องย่อ"><i class="hl-angle-down"></i></span> </div> <div class="ratings_wrapper"> <div class="halim_imdbrating taq-score">
<span class="score">0</span><i>/</i>
<span class="max-ratings">5</span>
<span class="total_votes">0</span><span class="vote-txt"> votes</span>
</div>
<div class="rate-this">
<div data-rate="0" data-id="128224" class="user-rate user-rate-active">
<span class="user-rate-image post-large-rate stars-large">
<span style="width: 0%"></span>
</span>
</div>
</div>
</div> </div> <div class="entry-content htmlwrap clearfix collapse" id="expand-post-content"> <article id="post-128224" class="item-content post-128224"> <p>เรื่องย่อ Our Interpreter (2024) วุ่นรักนักแปล<br/>
หลินซี แม่มดแห่งวงการล่ามต้องกลับมาร่วมงานกับแฟนเก่า เซียวอี้เฉิง พวกเขาตรากตรำกันจนบรรลุความฝันในการเป็นผู้สื่อสารของประเทศ</p>
</article> </div> </div> <div class="clearfix"></div> <div class="clearfix"></br></div> <div id="banner_pmid"> <p style="max-height:100px; margin: 0 0 2px;" align="center"><a href="https://sexygame1688.live/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/09/1688sexy728x90.gif" title="banner4" alt="banner4" width="728" height="100" border="0"></a></p> <p style="max-height:100px; margin: 0 0 25px;" align="center"><a href="https://16884sagame.com/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/11/1688sagamev4.gif" title="banner5" alt="banner5" width="728" height="100" border="0"></a></p> </div> <div id="halim-list-server" class="list-eps-ajax"> <div id="halim-list-server_n" class="list-eps-ajax movieid2"> <ul class="nav nav-tabs" role="tablist" style="margin-top: -13px;"> <li class="halim-episode"><span class="halim-btn halim-btn-2 active halim-info-2-1 box-shadow" data-post-id="128224" data-server="2" data-episode="0" data-position data-embed="0" data-type="none" data-title="Our Interpreter (2024) วุ่นรักนักแปล"><i class="hl-server"></i> ซับไทย </span></li> <li class="halim-episode"><span class="halim-btn halim-btn-2 halim-info-4-1 box-shadow" data-post-id="128224" data-server="30002" data-episode="0" data-position data-embed="0" data-type="none" data-title="Our Interpreter (2024) วุ่นรักนักแปล"><i class="hl-server"></i> Player2 </span></li> <li class="halim-episode"><span class="halim-btn halim-btn-2 halim-info-4-1 box-shadow" data-post-id="128224" data-server="10002" data-episode="0" data-position data-embed="0" data-type="none" data-title="Our Interpreter (2024) วุ่นรักนักแปล"><i class="hl-server"></i> Player3</span></li>  <li class="halim-episode"><span class="halim-btn halim-btn-2 halim-info-6-1 box-shadow" data-post-id="128224" data-server="20002" data-episode="0" data-position data-embed="0" data-type="none" data-title="Our Interpreter (2024) วุ่นรักนักแปล"><i class="hl-server"></i> Download</span></li> </ul> </ul></div> <script>jQuery.noConflict()(function ($) {	jQuery(document).ready(function(){		jQuery(document).on('click', '.lmselect-1', function () {			 $('.movieid1').show();			$('.movieid2').hide();  		});		jQuery(document).on('click', '.lmselect-2', function () {			 $('.movieid1').hide();			$('.movieid2').show();      		});			$('.movieid2').show();	}); }); </script> <div id="pagination-1"></div> </div> <div id="halim-player-wrapper" class="ajax-player-loading"> <span class="resume"></span> <div id="halim-player-loader"></div> <div id="ajax-player"></div> </div> <div class="clearfix"></div> <div class="collapse" id="moretool"> <ul class="nav nav-pills x-nav-justified"> <li class="fb-like" data-href="https://www.123-hd.com/our-interpreter/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></li> <div class="fb-save" data-uri="https://www.123-hd.com/our-interpreter/" data-size="small"></div> </ul> </div> <table style="width:100%; margin-top: -1px;border: white;border-: dotted;"><tr> <th class="selectmvbutton" style="width: 49.5%; "><a href><span class="halim-btn halim-btn-2 active halim-info-1-1 box-shadow2 " style="cursor: pointer; color: #ffffff;"><i class="hl-server2"></i> < ก่อนหน้า</span></a></th> <th class="selectmvbutton" style="width: 49.5%; "><a href="https://www.123-hd.com/our-interpreter-ep-2"><span class="halim-btn halim-btn-2 active halim-info-1-1 box-shadow2 " style="cursor: pointer; color: #ffffff;"><i class="hl-server2"></i> ถัดไป ></span></a></th></tr></table> <div class="clearfix"></div> <div class="htmlwrap clearfix"> เลือกตอน <select name="Sequel_select" onchange="location = this.value;" style="    position: relative;    width: 90%;    margin: 0;    padding: 6px 8px 6px 10px;    height: 33px;    line-height: 14px;    font-size: 12px;    color: #62717a;     /* background: #f2f2f2; */    background: rgba(218, 25, 25, 0) !important;    border-radius: 0;"><option value="https://www.123-hd.com/our-interpreter">Our Interpreter EP 1</option><option value="https://www.123-hd.com/our-interpreter-ep-2">Our Interpreter EP 2</option><option value="https://www.123-hd.com/our-interpreter-ep-3">Our Interpreter EP 3</option><option value="https://www.123-hd.com/our-interpreter-ep-4">Our Interpreter EP 4</option><option value="https://www.123-hd.com/our-interpreter-ep-5">Our Interpreter EP 5</option><option value="https://www.123-hd.com/our-interpreter-ep-6">Our Interpreter EP 6</option><option value="https://www.123-hd.com/our-interpreter-ep-7">Our Interpreter EP 7</option><option value="https://www.123-hd.com/our-interpreter-ep-8">Our Interpreter EP 8</option><option value="https://www.123-hd.com/our-interpreter-ep-9">Our Interpreter EP 9</option><option value="https://www.123-hd.com/our-interpreter-ep-10">Our Interpreter EP 10</option><option value="https://www.123-hd.com/our-interpreter-ep-11">Our Interpreter EP 11</option><option value="https://www.123-hd.com/our-interpreter-ep-12">Our Interpreter EP 12</option><option value="https://www.123-hd.com/our-interpreter-ep-13">Our Interpreter EP 13</option><option value="https://www.123-hd.com/our-interpreter-ep-14">Our Interpreter EP 14</option><option value="https://www.123-hd.com/our-interpreter-ep-15">Our Interpreter EP 15</option><option value="https://www.123-hd.com/our-interpreter-ep-16">Our Interpreter EP 16</option></select></div> <div class="clearfix"></div> <div class="clearfix"></div> <div class="button-watch"> <ul class="halim-social-plugin col-xs-4" style="margin-top: 2px; line-height: 11px;"> <a href="https://discord.com/invite/3gPGZpRHHH" class="facegroup" target="_blank" rel="nofollow" style="margin-top: 5px;  margin-bottom: 2px;">เข้ากลุ่มดูหนัง</a> <li class="fb-like" data-href="https://www.123-hd.com/our-interpreter/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true" style="margin-top: -25px;margin-left: 130px;"></li> </ul> </div> <div id="banner_plow" style="margin-top: 5px;"> <p style="max-height:100px; margin: 0 0 2px;" align="center"><a href="https://ufanance.co/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/07/728x90-nance.gif" title="banner6" alt="banner6" width="728" height="100" border="0"></a></p> <p style="max-height:100px; margin: 0 0 2px;" align="center"><a href="https://lockdown168a.com/" rel="nofollow noopener" target="_blank"><img class="size-full" src="/wp-content/uploads/2023/07/728x90-lockdown.gif" title="banner7" alt="banner7" width="728" height="100" border="0"></a></p> </div> <div class="htmlwrap clearfix" style="margin-top: 30px;background-color: white;"> <iframe class="fb-comments" src="https://123-hd.com/api/face.php?ver=https://www.123-hd.info/our-interpreter/" title="facebook comment" height="810" width="2" frameBorder="0"></iframe> </div> <div id="lightout"></div> </div>
</section>
<section class="related-movies">
<div class="textwidget custom-html-widget"></div> <div class="clearfix"></div>
<section id="halim-latest-widget-4">
<div class="section-bar clearfix">
<a href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c" title="Movie"><h3 class="section-title"><span>Movie</span></h3></a>
<div class="np-viewall"><a href="https://www.123-hd.com/%e0%b8%94%e0%b8%b9%e0%b8%ab%e0%b8%99%e0%b8%b1%e0%b8%87%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c"><span class="hl-forward"></span> View all</a></div>
</div>
<div class="halim_box">
<article class="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-78908">
<div class="halim-item">
<a class="halim-thumb" href="https://www.123-hd.com/viral" title="Viral (2018) ผีโทรศัพท์">
<figure><img class="lazyload blur-up img-responsive" data-sizes="auto" data-src="/wp-content/uploads/2022/09/Viral-2018-ผีโทรศัพท์-300x450.png" alt="Viral (2018) ผีโทรศัพท์" title="Viral (2018) ผีโทรศัพท์"></figure>
<span class="soundsub">TH </span><span class="status">HD</span>
<div class="icon_overlay">
</div>
<div class="halim-post-title-box">
<div class="halim-post-title title-2-line">
<h2 class="entry-title">Viral (2018) ผีโทรศัพท์</h2> </div>
</div>
</a>
</div>
</article>
<article class="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-73391">
<div class="halim-item">
<a class="halim-thumb" href="https://www.123-hd.com/sabre-dance" title="Sabre Dance (2019) เกิดมาเพื่อบรรเลง">
<figure><img class="lazyload blur-up img-responsive" data-sizes="auto" data-src="/wp-content/uploads/2022/07/Sabre-Dance-2019-เกิดมาเพื่อบรรเลง-300x450.png" alt="Sabre Dance (2019) เกิดมาเพื่อบรรเลง" title="Sabre Dance (2019) เกิดมาเพื่อบรรเลง"></figure>
<span class="soundsub">EN </span><span class="status">HD</span>
<div class="icon_overlay">
</div>
<div class="halim-post-title-box">
<div class="halim-post-title title-2-line">
<h2 class="entry-title">Sabre Dance (2019) เกิดมาเพื่อบรรเลง</h2> </div>
</div>
</a>
</div>
</article>
<article class="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-75651">
<div class="halim-item">
<a class="halim-thumb" href="https://www.123-hd.com/blindspotting" title="Blindspotting (2018) ที่นี่...ประเทศไหน">
<figure><img class="lazyload blur-up img-responsive" data-sizes="auto" data-src="/wp-content/uploads/2022/07/Blindspotting-2018-ที่นี่...ประเทศไหน-300x450.png" alt="Blindspotting (2018) ที่นี่...ประเทศไหน" title="Blindspotting (2018) ที่นี่...ประเทศไหน"></figure>
<span class="soundsub">TH/EN </span><span class="status">HD</span>
<div class="icon_overlay">
</div>
<div class="halim-post-title-box">
<div class="halim-post-title title-2-line">
<h2 class="entry-title">Blindspotting (2018) ที่นี่...ประเทศไหน</h2> </div>
</div>
</a>
</div>
</article>
<article class="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-5942">
<div class="halim-item">
<a class="halim-thumb" href="https://www.123-hd.com/the-young-victoria" title="The Young Victoria (2009) ความรักที่ยิ่งใหญ่ของราชินีวิคตอเรีย">
<figure><img class="lazyload blur-up img-responsive" data-sizes="auto" data-src="/wp-content/uploads/2020/01/The-Young-Victoria-2009-250x350.png" alt="The Young Victoria (2009) ความรักที่ยิ่งใหญ่ของราชินีวิคตอเรีย" title="The Young Victoria (2009) ความรักที่ยิ่งใหญ่ของราชินีวิคตอเรีย"></figure>
<span class="soundsub">EN </span><span class="status">HD</span>
<div class="icon_overlay">
</div>
<div class="halim-post-title-box">
<div class="halim-post-title title-2-line">
<h2 class="entry-title">The Young Victoria (2009) ความรักที่ยิ่งใหญ่ของราชินีวิคตอเรีย</h2> </div>
</div>
</a>
</div>
</article>
</div>
</section>
<div class="clearfix"></div>
</section>
<div class="the_tag_list"><a href="https://www.123-hd.com/tag/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c" title="ดูซีรี่ย์" rel="tag">ดูซีรี่ย์</a><a href="https://www.123-hd.com/tag/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b9%84%e0%b8%a5%e0%b8%99%e0%b9%8c" title="ดูซีรี่ย์ออนไลน์" rel="tag">ดูซีรี่ย์ออนไลน์</a><a href="https://www.123-hd.com/tag/our-interpreter-2024" title="Our Interpreter 2024" rel="tag">Our Interpreter 2024</a><a href="https://www.123-hd.com/tag/our-interpreter-ep-1" title="Our Interpreter EP 1" rel="tag">Our Interpreter EP 1</a><a href="https://www.123-hd.com/tag/our-interpreter-%e0%b8%8b%e0%b8%b1%e0%b8%9a%e0%b9%84%e0%b8%97%e0%b8%a2" title="Our Interpreter ซับไทย" rel="tag">Our Interpreter ซับไทย</a><a href="https://www.123-hd.com/tag/%e0%b8%a7%e0%b8%b8%e0%b9%88%e0%b8%99%e0%b8%a3%e0%b8%b1%e0%b8%81%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b9%81%e0%b8%9b%e0%b8%a5" title="วุ่นรักนักแปล" rel="tag">วุ่นรักนักแปล</a></div></main>
<aside id="sidebar" class="col-xs-12 col-sm-12 col-md-4">
<div id="custom_html-5" class="widget_text widget widget_custom_html"><div class="textwidget custom-html-widget"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100083876220125&tabs&width=300&height=320&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1154081618459942" width="300" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div></div><div id="halim_tab_popular_videos-widget-6" class="widget halim_tab_popular_videos-widget"> <script>
jQuery.noConflict()(function ($) {
	jQuery(document).ready(function($) {
		$( '[role="presentation"]' ).click(function() {
			 $('[role="presentation"]').attr('class', '');
		});	
	});	
});	
	</script>
<div class="section-bar clearfix">
<div class="section-title">
<span>Popular</span>
<ul class="halim-popular-tab" role="tablist">
<li role="presentation" class="active">
<a class="ajax-tab" role="tab" data-toggle="tab" data-toggle="tab" data-showpost="7" data-type="day">Day</a>
</li>
<li role="presentation">
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="week">Week</a>
</li>
<li role="presentation">
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="month">Month</a>
</li>
<li role="presentation">
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="all">All</a>
</li>
</ul>
</div>
</div>
<div class="section-bar clearfix">
<div class="section-title">
<span>MOVIE ยอดนิยม</span>
<ul class="halim-popular-tab" role="tablist">
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="mov_day" aria-expanded="false">Day</a>
</li>
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="mov_week" aria-expanded="false">Week</a>
</li>
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="mov_month" aria-expanded="true">Month</a>
</li>
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="mov_all" aria-expanded="false">All</a>
</li>
</ul>
</div>
</div>
<div class="section-bar clearfix">
<div class="section-title">
<span>SERIES ยอดนิยม</span>
<ul class="halim-popular-tab" role="tablist">
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="ser_day" aria-expanded="false">Day</a>
</li>
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="ser_week" aria-expanded="false">Week</a>
</li>
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="ser_month" aria-expanded="true">Month</a>
</li>
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="ser_all" aria-expanded="false">All</a>
</li>
</ul>
</div>
</div>
<div class="section-bar clearfix">
<div class="section-title">
<span>ANIME ยอดนิยม</span>
<ul class="halim-popular-tab" role="tablist">
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="ani_day" aria-expanded="false">Day</a>
</li>
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="ani_week" aria-expanded="false">Week</a>
</li>
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="ani_month" aria-expanded="true">Month</a>
</li>
<li role="presentation" class>
<a class="ajax-tab" role="tab" data-toggle="tab" data-showpost="7" data-type="ani_all" aria-expanded="false">All</a>
</li>
</ul>
</div>
</div>
<section class="tab-content">
<div role="tabpanel" class="tab-pane active halim-ajax-popular-post">
<div class="halim-ajax-popular-post-loading hidden"></div>
<div id="halim-ajax-popular-post" class="popular-post">
<div class="item post-129043">
<a href="https://www.123-hd.com/my-demon-ep-16" title="My Demon EP 16">
<div class="item-link">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/wp-content/uploads/2023/11/My-Demon-2023-ปีศาจของฉัน-300x450.jpg" class="lazyload blur-up post-thumb" alt="My Demon EP 16" title="My Demon EP 16" />
</div>
<h3 class="title">My Demon EP 16</h3>
</a>
<div class="viewsCount">17K view</div>
</div>
<div class="item post-128656">
<a href="https://www.123-hd.com/marry-my-husband-ep-6" title="Marry My Husband EP 6">
<div class="item-link">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/wp-content/uploads/2024/01/Marry-My-Husband-300x450.jpg" class="lazyload blur-up post-thumb" alt="Marry My Husband EP 6" title="Marry My Husband EP 6" />
</div>
<h3 class="title">Marry My Husband EP 6</h3>
</a>
<div class="viewsCount">15.6K view</div>
</div>
<div class="item post-127540">
<a href="https://www.123-hd.com/marry-my-husband" title="Marry My Husband (2024) สามีคนนี้แจกฟรีให้เธอ">
<div class="item-link">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/wp-content/uploads/2024/01/Marry-My-Husband-300x450.jpg" class="lazyload blur-up post-thumb" alt="Marry My Husband (2024) สามีคนนี้แจกฟรีให้เธอ" title="Marry My Husband (2024) สามีคนนี้แจกฟรีให้เธอ" />
</div>
<h3 class="title">Marry My Husband (2024) สามีคนนี้แจกฟรีให้เธอ</h3>
</a>
<div class="viewsCount">13.5K view</div>
</div>
<div class="item post-124101">
<a href="https://www.123-hd.com/my-demon" title="My Demon (2023) ปีศาจของฉัน">
<div class="item-link">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/wp-content/uploads/2023/11/My-Demon-2023-ปีศาจของฉัน-300x450.jpg" class="lazyload blur-up post-thumb" alt="My Demon (2023) ปีศาจของฉัน" title="My Demon (2023) ปีศาจของฉัน" />
</div>
<h3 class="title">My Demon (2023) ปีศาจของฉัน</h3>
</a>
<div class="viewsCount">11.8K view</div>
</div>
<div class="item post-128971">
<a href="https://www.123-hd.com/my-demon-ep-15" title="My Demon EP 15">
<div class="item-link">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/wp-content/uploads/2023/11/My-Demon-2023-ปีศาจของฉัน-300x450.jpg" class="lazyload blur-up post-thumb" alt="My Demon EP 15" title="My Demon EP 15" />
</div>
<h3 class="title">My Demon EP 15</h3>
</a>
<div class="viewsCount">11.6K view</div>
</div>
<div class="item post-128690">
<a href="https://www.123-hd.com/a-shop-for-killers" title="A Shop for Killers (2024)">
<div class="item-link">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/wp-content/uploads/2024/01/A-Shop-for-Killers-300x450.jpg" class="lazyload blur-up post-thumb" alt="A Shop for Killers (2024)" title="A Shop for Killers (2024)" />
</div>
<h3 class="title">A Shop for Killers (2024)</h3>
</a>
<div class="viewsCount">10.8K view</div>
</div>
<div class="item post-128598">
<a href="https://www.123-hd.com/marry-my-husband-ep-5" title="Marry My Husband EP 5">
<div class="item-link">
<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/wp-content/uploads/2024/01/Marry-My-Husband-300x450.jpg" class="lazyload blur-up post-thumb" alt="Marry My Husband EP 5" title="Marry My Husband EP 5" />
</div>
<h3 class="title">Marry My Husband EP 5</h3>
</a>
<div class="viewsCount">10.1K view</div>
</div>
</div>
</div>
</section>
<div class="clearfix"></div>
</div><div id="media_image-2" class="widget widget_media_image"><div style="width: 310px" class="wp-caption alignnone"><img width="300" height="263" src="/wp-content/uploads/2022/09/ดูหนังออนไลน์-123hd.jpg" class="image wp-image-80860  attachment-full size-full" alt="ดูหนังออนไลน์-123hd" loading="lazy" style="max-width: 100%; height: auto;" /><p class="wp-caption-text">ดูหนังออนไลน์-123hd</p></div></div></aside></div>
</div>
<div class="clearfix"></div>
<footer id="footer" class="clearfix">
<div class="container footer-columns">
<div class="row container">
</div>
</div>
</footer>
<div class="footer-credit">
<div class="container credit">
<div class="row container">
<div class="col-xs-12 col-sm-4 col-md-6">© <a id="halimthemes" href="https://www.123-hd.com/" title="ดูหนังฟรี หนังใหม่ 2023 ดูหนังออนไลน์ 123HD ดูซีรี่ส์ Netflix">เว็บดูหนังออนไลน์ 123-HD.COM</a></div>
<br>
<p style="
    width: 100%;
    text-align: center;
">
เริ่มต้นการดูหนังยุคใหม่ผ่านระบบออนไลน์ กับการ ดูหนังไทย หนังฝรั่ง หนังจีน รวมถึง ซีรี่ย์ต่างๆ (ซีรี่ย์เกาหลี) หมดยุคแล้วสำหรับการดูผ่าน TV Cable ธรรมดา หรือ การดูหนังในโรงภาพยนตร์ ยุคสมัยนี้สามารถ "ดูหนังฟรี" ผ่านออนไลน์ด้วย Smart Phone, Smart TV ดูหนังผ่านมือถือ Tablet
ดูหนังออนไลน์ เว็บเดียวจบทุกการดูหนัง เว็บดูหนังของเรามีครบทุกอย่าง ไม่ว่าจะเป็น หนัง หรือ ซีรี่ย์ , การ์ตูน หรือ อนิเมะ เรามีหมด ซีรี่ย์จีน ซีรี่ย์เกาหลี อัพเดทก่อนใคร เรามีทีมงานแปลซับไทยเอง ทุกเรื่อง รวมถึง การ์ตูนอนิเมะด้วยเช่นกัน ซึ่งเราจะนำมาอัพเดทให้ดูกันฟรีๆ ไม่มีค่าใช้จ่าย</p>
</div>
<div class="col-xs-12 col-sm-4 col-md-6 text-right pull-right">
<p class="blog-info">
ดูหนังฟรี หนังใหม่ 2023 ดูหนังออนไลน์ 123HD ดูซีรี่ส์ Netflix
</p>
</div>
</div>
</div>
</div>
<div id="easy-top"></div>
<script>
		jQuery('body').append('<div id="fb-root"></div>');
		window.fbAsyncInit = function() {
				FB.init({ appId : '1384894948437637', cookie : true, xfbml : true, version : 'v3.0'
			}); };
			_loadFbSDk=function(){ (function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/th/sdk.js"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));
		}
		jQuery(window).load(function(){ setTimeout("_loadFbSDk()",100); });
	</script>
<script type="text/javascript" src="https://www.123-hd.com/wp-content/themes/halimmovies_54/assets/js/lazysizes.min.js?ver=5.5.13" id="lazysizes-js"></script>
<script type="text/javascript" src="https://www.123-hd.com/wp-content/themes/halimmovies_54/assets/js/bootstrap.min.js?ver=5.5.13" id="bootstrap-js"></script>
<script type="text/javascript" src="https://www.123-hd.com/wp-content/themes/halimmovies_54/assets/js/owl.carousel.min.js?ver=5.5.13" id="carousel-js"></script>
<script type="text/javascript" id="halim-init-js-extra">
/* <![CDATA[ */
var halim = {"ajax_url":"https:\/\/www.123-hd.com\/wp-content\/themes\/halimmovies_54\/halim-ajax.php","light_mode":"0","light_mode_btn":"1","ajax_live_search":"1","sync":null,"db_redirect_url":"https:\/\/halimthemes.com"};
var ajax_var = {"url":"https:\/\/www.123-hd.com\/wp-content\/themes\/halimmovies_54\/halim-ajax.php","nonce":"06e263d4c1"};
var halim_rate = {"ajaxurl":"https:\/\/www.123-hd.com\/wp-content\/themes\/halimmovies_54\/halim-ajax.php","nonce":"1d01a734b7","your_rating":"Thank you for rating!"};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.123-hd.com/wp-content/themes/halimmovies_54/assets/js/core.min.js?ver=5.3.5" id="halim-init-js"></script>
<script type="text/javascript" id="ajax-auth-script-js-extra">
/* <![CDATA[ */
var ajax_auth_object = {"ajaxurl":"https:\/\/www.123-hd.com\/wp-content\/themes\/halimmovies_54\/halim-ajax.php","redirecturl":"https:\/\/www.123-hd.com","loadingmessage":"Sending user info, please wait...","sitekey":null,"languages":{"login":"Login","register":"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19","forgotpassword":"\u0e25\u0e37\u0e21\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13?","already_account":"Already have an account?","create_account":"Create account","reset_captcha":"Reset captcha","username":"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49","email":"Email","username_email":"Username or Email","password":"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19","reset_password":"\u0e25\u0e49\u0e32\u0e07\u0e04\u0e48\u0e32\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19","login_with":"Login with","register_with":"Register with","or":"or"}};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.123-hd.com/wp-content/themes/halimmovies_54/assets/js/ajax-auth-script.min.js?ver=5.3.5" id="ajax-auth-script-js"></script>
<script type="text/javascript" src="https://www.123-hd.com/wp-content/themes/halimmovies_54/player/assets/js/jwplayer-8.9.3.js?ver=5.5.13" id="halim-jwplayer-js"></script>
<script type="text/javascript" id="halim-ajax-js-extra">
/* <![CDATA[ */
var ajax_player = {"url":"https:\/\/www.123-hd.com\/wp-content\/themes\/halimmovies_54\/halim-ajax.php","nonce":"67fc1195c5"};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.123-hd.com/wp-content/themes/halimmovies_54/player/assets/js/player.min.js?ver=1" id="halim-ajax-js"></script>
<script>var halim_ajax_login = null</script>
</body>
</html>
