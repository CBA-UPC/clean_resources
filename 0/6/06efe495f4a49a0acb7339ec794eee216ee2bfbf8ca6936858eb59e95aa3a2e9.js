;
(self.AMP=self.AMP||[]).push({m:1,v:"2312191621000",n:"amp-youtube",ev:"0.1",l:!0,f:function(t,i){(()=>{var i;ar e=function s(t){return new Promise(()}var{isArray:o}=Array;ar{hasOwnProperty:a,toString:l}=Object.prototype;ction d(t,i,n,e,s,o,r,a,l,h,u){return t}r p,v,_={bubbles:!0,cancelable:!0};unction P(t,i,n,e){const s=n||{};d(t.ownerDocument);const{bubbles:o,cancelable:r}=e||_,a=new MessageEvent(i,{data:s,bubbles:o,cancelable:r});t.dispatchEvent(a)}ction M(t){return function(t,i){if(d(1===i.length),d(Array.isArray(i)||(n=i,a.call(n,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){const n=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:);t.innerHTML=n.createHTML("ignored")}else t.innerHTML=i[0];var n;const e=t.firstElementChild;return d(e),d(!e.nextElementSibling),t.removeChild(e),e}(p,t)}ction R(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=E.apply(null,arguments);setTimeout((()=>{throw I(i),i}))}(t)}}r k=["Webkit","webkit","Moz","moz","ms","O","o"],C={"getPropertyPriority":()=>"","getPropertyValue":;r q=/vertical/,O=new WeakMap,$=new WeakMap,F=new WeakMap;unction U(t){const i=new Set;for(let n=t.length-1;n>=0;n--){const e=t[n],{target:s}=e;if(i.has(s))continue;i.add(s);const o=$.get(s);if(o){F.set(s,e);for(let t=0;t<o.length;t++){const{callback:i,type:n}=o[t];Y(n,i,e)}}}}function Y(t,i,n){if(0==t){const{contentRect:t}=n,{height:e,width:s}=t;R(i,{width:s,height:e})}else if(1==t){const{borderBoxSize:t}=n;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=n,i=m(t),s=q.test(i,t).writingMode),{offsetHeight:o,offsetWidth:r}=t;let a,l;s?(l=r,a=o):(a=r,l=o),e={inlineSize:a,blockSize:l}}R(i,e)}}function z(t){let i=!1,n=null,e=t;return(...t)=>(i||(n=e.apply(self,t),i=!0,e=null),n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var N=self.__AMP_LOG;,st=t=>Z(t,"action"),ot=t=>J(t,"platform"),rt=t=>Q(t,"timer"),at=t=>Z(t,"url"),lt=function ht(t,i,n={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=n,r=function(t){return t.parent&&t.parent!=t}(i)&&(e||s)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function ut(t){var i;let n=null===(i=it)||void 0===i?void 0:i.get(t);if(!n){const i=function(t){it||(it=new WeakMap,nt=new WeakMap),d(nt);let i=nt.get(t);return i||(i=ht((t=>{const n=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];n.has(o)||(n.add(o),d(i),i.unobserve(o),d(it),null===(e=it.get(o))||void 0===e||e.resolve(t[s]),it.delete(o))}}),t,{needsRootBounds:!0}),nt.set(t,i)),i}(m(t));d(it),i.observe(t),n=new e,it.set(t,n)}return n.promise}nction ft(t,i){const n=s((()=>t.play(!!i)));return n.catch((),n}function mt(t,i,n,e){let s=t,o=n,r=const a=),l=!(null==e||!e.capture);return s.addEventListener(i,r,a?e:l),()=>{null==s||s.removeEventListener(i,r,a?e:l),o=null,s=null,r=null}}function pt(t,i,n,e){const s={detail:n};return Object.assign(s,e),new t.CustomEvent(i,s)}r gt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Pt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];r bt=class{constructor(){this.Pv=!1,this.Mv=new class{constructor(){this.Vt=null}add(t){return this.Vt||(this.Vt=[]),this.Vt.push(t),remove(t){this.Vt&&this.Vt,t)}ire(t){if(this.Vt)for(const i of this.Vt.slice())i(t)}}essionActive(){return this.Pv}},Mt={"title":"","artist":"","album":"","artwork":[{"src":""}]},wt="registered",Et="load",It="playing",Rt="pause",Tt="ended",Vt="muted",kt="unmuted",Ct="ad_start",St="ad_end",xt="playing_manual",qt="paused",Ot="video-play",$t="user-interacted";ar jt="video-manager",Ut=(t,i)=>!!t&&(t.video===i||t.video.element===i);r Nt=t=>!!t&&!isNaN(t)&&t>1;function Dt(t,i,n){const{video:e}=t;t.getAnalyticsDetails().then((t=>{n&&Object.assign(t,n),P(e.element,i,t)}))}function Lt(t){!function(t,i,e,s){const r=G(t),a=K(r);!function(t,i,n,e,s,o){const r=X(t);let a=r[n];a||(a=r[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=i,a.sharedInstance=!1,a.resolve&&Q(t,n))}(a,r,i,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=z((()=>function(t){!function(t,i,n,e,s){const o=t.getHeadNode(),r=function(t,i,n,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=u());const o=!n&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,r=n?"amp-runtime":o?`amp-extension=${e}`:null;if(r){const n=yt(t,s,r);if(n)return"STYLE"==n.tagName&&n.textContent!==i&&(n.textContent=i),n}const a=(t.ownerDocument||t).createElement("style");a.textContent=i;let l=null;return n?a.setAttribute("amp-runtime",""):o?(a.setAttribute("amp-extension",e||""),l=yt(t,s,"amp-runtime")):(e&&a.setAttribute(e,""),l=t.lastChild),t,a,l),r&&(s[r]=a),a}(o,o,i),e||!1,s||null);if(n){const i=t.getRootNode();if(At(i,r))return n(r),r;const e=setInterval((()=>{At(i,r)&&(clearInterval(e),n(r))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.Ev=null,this.Rv=null,this.Tv=null,this.Re=rt(t.win),this.Iv=st(t.getHeadNode()),this.Vv=()=>this.kv(),this.Sv=z((()=>new class{constructor(t,i){this.Cv=i,this.Ni=t,this.Ov=null,this.xv=null,this.Ev=[],this.c_=[],this.jv=()=>this.$v(),this.Fv=t=>this.Lv(t)==xt,this.zv=this.Bv(),this.Nv()}egister(t){const{video:i}=t,{element:n}=i;this.Dv(n)&&(this.Ev.push(i),vt(n,Rt,this.jv),vt(n,It,this.jv),vt(n,Tt,this.jv),i.signals().whenSignal($t).then(this.jv),this.$v())}Nv(){const t=this.Ni.getRootNode(),i=()=>this.Yv();this.c_.push(vt(t,"webkitfullscreenchange",i),vt(t,"mozfullscreenchange",i),vt(t,"fullscreenchange",i),vt(t,"MSFullscreenChange",i))}isInLandscapev(){const{win:t}=this.Ni,{screen:i}=t;if(i&&"orientation"in i){const t=i.orientation;this.c_.push(vt(t,"change",(()=>this.Wv())))}this.c_.push(vt(t,"orientationchange",(()=>this.Wv())))}Wvv(t){const i=ot(this.Ni.win);this.Ov=t,i.isAndroid()&&i.isChrome()?t.fullscreenEnter():this.Gv(t).then((()=>t.fullscreenEnter()))}Jv(t){this.Ov=null,this.Gv(t,"center").then((()=>t.fullscreenExit()))}Gv(t,i=null){const{element:e}=t,s=this.Xv();return this.Zv().then((()=>ut(e))).then((({boundingClientRect:t})=>{const{bottom:o,top:r}=t,a=s.getSize().height;if(r>=0&&o<=a)return n();const l=i||(o>a?"bottom":"top");return s.animateScrollIntoView(e,l)}))}(){if(this.isInLandscape())return Promise.resolve(this.xv);this.xv=null;const t=this.Ev.filter(this.Fv).map(();return Promise.all(t).then((t=>{const i=t.sort(this.zv)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then(():this.xv}))}Uv(t,i){const{boundingClientRect:n,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=i,r=e-o;if(Math.abs(r)>.1)return r;const a=lt(this.Ni),l=Yt(a,n),h=Yt(a,s);return l<h||l>h?l-h:n.top-s.top}(this.ampdoc,this))),this.Re.delay(this.Vv,1e3)}disposevv(t){const i="timeUpdate",n=t.video.getCurrentTime(),e=t.video.getDuration();if(c(n)&&c(e)&&e>0){const s=n/e,o=pt(this.ampdoc.win,`${jt}.${i}`,{"time":n,"percent":s});this.Iv.trigger(t.video.element,i,o,1)}}register(t){B(t);const i=t;if(this.Qv(t),!t.supportsPlatform())return;if(this.Y_(t))return;if(!this.Rv){const t=t=>t.forEach(();this.Rv=ht(t,this.ampdoc.win,{threshold:.5})}this.Rv.observe(i.element),vt(i.element,"reloaded",(()=>n.videoLoaded())),this.Ev=this.Ev||[];const n=new class{constructor(t,i){this.Cv=t,this.Ni=t.ampdoc,this.video=i,this.Z_=!0,this.K_=!1,this.Q_=!1,this.tP=!1,this.rs=!1,this.iP=new bt,this.iP.onSessionEnd((()=>Dt(this,"video-session"))),this.nP=new bt,this.nP.onSessionEnd((),this.eP=z((()=>new class{constructor(t,i){this.Re=rt(t),this.sP=i,this.c_=null,this.rP=0,this.oP=0}start(){const{element:t}=this.sP.video;this.stop(),this.c_=this.c_||[],this.cP()?this.aP(this.oP):this.c_.push(function(t,i,n,e){let s=n;const o=mt(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,()),this.c_.push(vt(t,Tt,())}stopP(){const{video:t}=this.sP,i=t.getDuration();if(!Nt(i))return!1;if(zt(i)<250){const i=Math.ceil(5);this.uP("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0}uP(...t){D().warn.apply(D(),[jt].concat(t))}aP(t){if(t!=this.oP)return;const{sP:i,Re:n}=this,{video:e}=i,s=if(i.getPlayingState()==qt)return void n.delay(s,500);const o=e.getDuration();if(!Nt(o))return void n.delay(s,500);const r=(h=zt(o),d(!0),Math.min(Math.max(h,250),4e3)),a=e.getCurrentTime()/o*100,l=5*Math.floor(a/5);var h;B(c(l)),this.hP(l),n.delay(s,r)}hPP(this.Ni.win,this))),this.dP=!1,this.fP=!1,this.pP=null,this.dt=!1,this.mP=!1,this.hasAutoplay=i.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Cv.installAutoplayStyles(),this.vP=Mt,this._P=this.gP=vt(i.element,Et,(()=>this.videoLoaded())),vt(i.element,Rt,(()=>this.PP())),vt(i.element,"play",(()=>{this.mP=!0,Dt(this,Ot)})),vt(i.element,It,(()=>this.AP())),vt(i.element,Vt,(),vt(i.element,kt,(()=>{this.dt=!1,this.Cv.pauseOtherVideos(this)})),vt(i.element,"amp:video:tick",(t=>{const i=_t(t),n=i.eventType;n&&this.bP(n,i.vars)})),vt(i.element,Tt,(()=>{this.tP=!1,Dt(this,"video-ended")})),vt(i.element,Ct,(()=>{this.tP=!0,Dt(this,"video-ad-start")})),vt(i.element,St,(()=>{this.tP=!1,Dt(this,"video-ad-end")})),i.signals().whenSignal(wt).then((),this.MP=z((()=>{const t="firstPlay",i=pt(this.Ni.win,t,{}),{element:n}=this.video;st(n).trigger(n,t,i,1)})),this.EP()}P(t,i){const n={"__amp:eventType":t};Object.keys(i).forEach((),Dt(this,"video-hosted-custom",n)}EP(){this.video.signals().whenSignal("playback-delegated").then(()}isMuted(){return this.dt}isPlaybackManaged(){return this.Z_}yPP(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&W(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}AP(){this.Q_=!0,this.getPlayingState()==xt&&(this.MP(),this.Cv.pauseOtherVideos(this));const{video:t}=this,{element:i}=t;t.preimplementsMediaSessionAPI()||i.classList.contains("i-amphtml-disable-mediasession")||(function(t,i){const n=at(t);if(i&&i.artwork){const{artwork:t}=i;B(o(t)),t.forEach((t=>{if(t){const i=h(t)?t.src:t;W(n.isProtocolValid(i))}}))}}(i,this.vP),function(t,i,n,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(Mt),s.mediaSession.metadata=new t.MediaMetadata(i),s.mediaSession.setActionHandler("play",n),s.mediaSession.setActionHandler("pause",e))}(this.Ni.win,this.vP,this._P,this.gP)),this.iP.beginSession(),this.rs&&this.nP.beginSession(),this.mP||Dt(this,Ot)}PPideoLoadedP(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.vP=u(this.video.getMetadata()));const t=this.Ni.win.document;if(!this.vP.artwork||0==this.vP.artwork.length){const i=function(t){const i=t.querySelector('script[type="application/ld+json"]');if(!i)return;const n=f(i.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}(t)||t)||t);i&&(this.vP.artwork=[{"src":i}])}if(!this.vP.title){const i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.pP.getAttribute("title")||this.pP.getAttribute("aria-label")||t.title;i&&(this.vP.title=i)}}P(){this.Ni.isVisible()&&ct(this.Ni.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.kP():this.SP()}))}TP(){this.video.isInteractive()&&this.video.hideControls(),ct(this.Ni.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.CP()):this.video.showControls()}))}CP(){const{video:t}=this,{element:i,win:n}=this.video;if(i.hasAttribute("noaudio")||i.signals().get($t))return;const e=function(t,i){const n=b(i)(Pt),e=n.firstElementChild;for(let t=0;t<4;t++){const i=e.cloneNode(!0),s=i.children;for(let i=0;i<s.length;i++)s[i].classList.add(`amp-video-eq-${t+1}-${i+1}`);n.appendChild(i)}return g(e),n}(0,i),s=[e];function o(i){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!t,i)}))}))}function r(i){t.mutateElementSkipRemeasure(()}const a=[vt(i,Rt,(()=>r(!1))),vt(i,It,(),vt(i,Ct,(()=>{o(!1),t.showControls()})),vt(i,St,(),vt(i,kt,(()=>Ft(t)))];if(t.isInteractive()){t.hideControls();const n=i,this.vP);s.push(n),a.push(vt(n,"click",())}t.mutateElementSkipRemeasure((),this.tP&&o(!1),t.signals().whenSignal($t).then((()=>{this.MP(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((),t.mutateElementSkipRemeasure(()}))}kPdateVisibilityetPlayingStateerInteractedetAnalyticsDetails(){const{video:t}=this;return Promise.all([ct(this.Ni.win),ut(t.element)]).then((i=>{const n=i[0],e=i[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&n,a=t.getPlayedRanges(),l=a.reduce((,0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.dt,"playedTotal":l,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.Ev.push(n);const{element:e}=n.video;P(e,wt),e),t.signals().signal(wt),e.classList.add("i-amphtml-video-interface")}Qv(t){n("play",(),n("pause",(()=>t.pause())),n("mute",(()=>t.mute())),n("unmute",(()=>t.unmute()));const i=function n(i,n){t.registerAction(i,(,1)}n("fullscreenenter",i),n("fullscreen",i)}Y_ideoStateProperty(t,i){const e=this.ampdoc.getRootNode(),s=D().assertElement(e.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),o=this.X_(s);return(o?o.getAnalyticsDetails():n()).then(()}getPlayingState(t){return this.X_(t).getPlayingState()}isMuted(t){return this.X_(t).isMuted()}userInteracted(t){return this.X_(t).userInteracted()}auseOtherVideos(t){this.Ev.forEach((i=>{i.isPlaybackManaged()&&i!==t&&i.getPlayingState()==xt&&i.video.pause()}))}})}(t,"video-manager")}var Bt=["<iframe frameborder=0 allowfullscreen></iframe>"],Wt=["<img placeholder referrerpolicy=origin>"],Jt="amp-youtube",Ht=class extends t.BaseElement{constructor(t){super(t),this.ty=null,this.xy=null,this.dt=!1,this.$y=!1,this.Fy=!1,this.bv=null,this.Po=null,this.iy=null,this.hy=null,this.my=null,this.qv=null,this.jy=null,this.$P=new this.element)}preconnectCallbacksLayoutSupportedildCallback(){this.ty=this.ny(),this.xy=this.Uy(),this.Yy();const t=new e;this.hy=t.promise,this.my=t.resolve,Lt(this.element)}zy(){return this.Yy(),`https://www.youtube${"omit"===this.Ny()?"-nocookie":""}.com/embed/${this.ty?`${encodeURIComponent(this.ty||"")}?`:`live_stream?channel=${encodeURIComponent(this.xy||"")}&`}enablejsapi=1&amp=1`}tb(){if(this.iy)return this.iy;let t=this.zy();const{element:i}=this,n=function(t,i,n){const{dataset:e}=t,s={},o=/^param(.+)/;for(const t in e){const i=t.match(o);i&&(s[i[1][0].toLowerCase()+i[1].substr(1)]=e[t])}return s}(i);return"autoplay"in n&&(delete n.autoplay,this.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay")),"playsinline"in n||(n.playsinline="1"),i.hasAttribute("autoplay")&&("iv_load_policy"in n||(n.iv_load_policy="3"),n.playsinline="1"),"loop"in n&&this.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop"),this.$y=i.hasAttribute("loop")||"loop"in n&&"1"==n.loop,this.Fy="playlist"in n,this.$y&&(this.Fy?n.loop="1":"loop"in n&&delete n.loop),t=function(t,i){return t,i))}(t,n),this.iy=t}layoutCallback(){const t=function(t,i,n,e){const{element:s}=t,o=b(s)(Bt);return A(["referrerpolicy"],t.element,o),o.src=at(s).assertHttpsUrl(i,s),y(o),s.appendChild(o),o}(this,this.tb());var i;t.title=this.element.title||"YouTube video",t),this.bv=t,(i=this.element,H(i,"video-manager")).register(this),this.qv=vt(this.win,"message",this.Dy.bind(this)),this.$y&&!this.Fy&&(this.jy=vt(this.element,Tt,());const n=this.loadPromise(this.bv).then(().then((()=>{this.Ly(),P(this.element,Et)}));return this.my(n),n}unlayoutCallbacktatedAttributesCallbacky(){return this.element.getAttribute("data-live-channelid")}y(t,i){this.hy.then((()=>{if(this.bv&&this.bv.contentWindow){const n=JSON.stringify({"event":"command","func":t,"args":i||""});this.bv.contentWindow.postMessage(n,"*")}}))}Dy(t){if(!t,this.bv))return;const i=_t(t);if(!(n=i)||!h(n)&&!n.startsWith("{"))return;var n;const e=h(s=i)?s:f(s);var s;if(null==e)return;const r=e.event,a=e.info||{},{element:l}=this,u=a.playerState;if("infoDelivery"==r&&null!=u){switch(u){case 1:this.$P.updatePlaying(!0);break;case 2:case 0:this.$P.updatePlaying(!1)}return void function(t,i,n){if(null==n[i])return!1;const e=n[i];(o(e)?e:[e]).forEach(()}(l,u.toString(),{1:It,2:Rt,0:[Tt,Rt]})}const c=a.muted;if("infoDelivery"==r&&a&&null!=c){if(this.dt==c)return;return this.dt=c,void P(l,(d=this.dt,d?Vt:kt))}var d;if("initialDelivery"==r)return this.Po=a,void P(l,"loadedmetadata");"infoDelivery"!=r||void 0===a.currentTime||(this.Po.currentTime=a.currentTime)}LyreatePlaceholderCallback(){if(!this.ty)return null;const{element:t}=this,i=b(t)(Wt),n=this.ty;return x(i,{"object-fit":"cover","visibility":"hidden"}),A(["aria-label"],this.element,i),i.src=`https://i.ytimg.com/vi/${encodeURIComponent(n)}/sddefault.jpg#404_is_fine`,i.hasAttribute("aria-label")?i.setAttribute("alt","Loading video - "+i.getAttribute("aria-label")):i.setAttribute("alt","Loading video"),y(i),this.loadPromise(i).then((()=>{if(120==i.naturalWidth&&90==i.naturalHeight)throw new Error("sddefault.jpg is not found")})).catch((()=>(i.src=`https://i.ytimg.com/vi/${encodeURIComponent(n)}/hqdefault.jpg`,this.loadPromise(i)))).then((()=>{this.getVsync().mutate((()=>{x(i,{"visibility":""})}))})),i}supportsPlatform(){return!0}isInteractive(){return!0}ause(){this.sy("pauseVideo")}mute(){this.sy("mute")}howControls(){}hideControls(){}fullscreenEnter(){this.bv&&this.bv)}fullscreenExit(){this.bv&&function(t){const i=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(i)return void i.call(t);const{ownerDocument:n}=t;if(!n)return;const e=n.cancelFullScreen||n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen;e&&e.call(n)}(this.bv)}isFullscreen(){return!!this.bv&&function(t){const{webkitDisplayingFullscreen:i}=t;if(void 0!==i)return i;const{ownerDocument:n}=t;return!!n&&(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.webkitCurrentFullScreenElement)==t}(this.bv)}reimplementsMediaSessionAPI(){return!0}etCurrentTime(){return this.Po?this.Po.currentTime:NaN}ekTo;t.registerElement(Jt,Ht)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-youtube-0.1.mjs.map