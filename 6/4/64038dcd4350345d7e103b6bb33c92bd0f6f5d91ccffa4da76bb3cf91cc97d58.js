;
(self.AMP=self.AMP||[]).push({m:0,v:"2401191523000",n:"amp-video-iframe",ev:"0.1",l:!0,f:function(n,t){!function(){o=Array.isArray; f,c=Object.prototype,h=c.hasOwnProperty,l=c.toString;ction p(n,t,i,r,e,o,u,a,s,f,c){return n}ar b=ar g="registered",k="load",x="playing",j="pause",S="ended",q="muted",O="unmuted",P="ad_start",M="ad_end",T="amp:video:tick",R="playing_manual",A="paused",E="video-play",Y="user-interacted";ar I=[x,j,S,q,O,P,M];r _,N,L,W={bubbles:!0,cancelable:!0};it","webkit","Moz","moz","ms","O","o"],rn={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};ar on=/vertical/,un=new WeakMap,an=new WeakMap,sn=new WeakMap; ln=);lf.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var mn=self.__AMP_LOG;unction(n){return xn(n,"action")},Yn=function(n){return gn(n,"platform")},zn=function(n){return On(n,"timer")},In=Un=function(n){return xn(n,"url")},Cn=function _n(n){return null==n.__AMP_AUTOPLAY&&(n.__AMP_AUTOPLAY=function(n){var t,i=n.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),t=i,w((function(){return t.play()})).catch((function(){})),Promise.resolve(!i.paused)}(n)),n.__AMP_AUTOPLAY}'<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Zn=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];ar Gn=),Kn=),Qn={"title":"","artist":"","album":"","artwork":[{"src":""}]},Xn="video-manager",nt=),tt=it=function(){function n(n,t){var i=this;this.$w=n,this.wi=n.ampdoc,this.video=t,this.Gw=!0,this.Kw=!1,this.ob=!1,this.Qw=!1,this.Fi=!1,this.Xw=new Kn,this.Xw.onSessionEnd((function(){return st(i,"video-session")})),this.tx=new Kn,this.tx.onSessionEnd((),this.nx=vn((),this.ix=!1,this.ox=!1,this.ux=null,this.G=!1,this.sx=!1,this.hasAutoplay=t.element.hasAttribute("autoplay"),this.hasAutoplay&&this.$w.installAutoplayStyles(),this.hx=Qn,this.lx=this.vx=Dn(t.element,k,(function(){return i.videoLoaded()})),Dn(t.element,j,(function(){return i.mx()})),Dn(t.element,"play",(),Dn(t.element,x,(function(){return i.yx()})),Dn(t.element,q,(),Dn(t.element,O,(),Dn(t.element,T,(),Dn(t.element,S,(function(){i.Qw=!1,st(i,"video-ended")})),Dn(t.element,P,(function(){i.Qw=!0,st(i,"video-ad-start")})),Dn(t.element,M,(),t.signals().whenSignal(g).then((function(){return i.wx()})),this.gx=vn((),this.xx()}var t=n.prototype;return t.dispose=t.bx=t.xx=t.isMuted=function(){return this.G},t.isPlaybackManaged=function(){return this.Gw},t.wx=t.qx=t.yx=t.mx=t.videoLoaded=t.jx=t.Ox=t.Sx=t.kx=t.Tx=t.Mx=t.Px=t.updateVisibility=t.getPlayingState=t.isRollingAd=t.userInteracted=t.getAnalyticsDetails=n}(),rt=);r ut=at=);ar ft=["<iframe frameborder=0 allowfullscreen></iframe>"],ct="amp-video-iframe",ht="video-custom-",lt=["allow-scripts","allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-top-navigation-by-user-activation"],vt=vn((function(){return new RegExp("^".concat(ht))})),dt=function(n,t){return n,t))},mt=function(n){!f,n);var r,o,a=(r=f,o=),;function f(n){var t;return(t=a.call(this,n)).fb=null,t.fk=null,t.ck=null,t.hk=!1,t.lk=t.Rb=new ln(t.element),t}var c=f.prototype;return c.isLayoutSupported=c.buildCallback=function(){var n,t,i,r;n=this.element,t="video-manager",i=nt,qn(r=Sn(n)),r,t,i)},c.layoutCallback=function(){var n,t,i,r=this;this.user().assert((i=(t=(n=this.element).getLayoutSize()).height,!!(t.width>10||i>10||n))),"<amp-video-iframe> does not allow tracking iframes. Please use amp-analytics instead.");var e,o=JSON.stringify(this.vk());return this.fb=(e=function(n,t,i,r){var e=n.element,o=Bn(e)(ft);return i&&o.setAttribute("name",i),r&&o.setAttribute("sandbox",r.join(" ")),function(n,t,i,r){for(var e,o=s(u(["referrerpolicy"]),!0);!(e=o()).done;){var a=e.value,f=t.getAttribute(a);null!==f&&i.setAttribute(a,f)}}(0,n.element,o),o.src=Un(e).assertHttpsUrl(t,e),V(o),e.appendChild(o),o}(this,this.Tw(),o,lt),{"scrolling":"no"}),en(e,"overflow","hidden"),e),this.fk=Dn(this.win,"message",this.lk),this.dk().then(()},c.mutatedAttributesCallback=c.mk=function(){var n=this.fb;n&&n.src!=this.Tw()&&(n.src=this.Tw())},c.vk=function(){var n,t,i=kn(this.element,"documentInfo").get(),r=i.canonicalUrl,e=i.sourceUrl,o=this.getAmpDoc().getRootNode(),u=o.documentElement;return{"sourceUrl":e,"canonicalUrl":r,"title":o.title||null,"lang":(null==u?void 0:u.lang)||null,"jsonLd":(n=o,t=n.querySelector('script[type="application/ld+json"]'),t&&U(t.textContent))}},c.rk=function(){var n,t=this.element;(n=t,kn(n,"video-manager")).register(this),B(t,k)},c.createPlaceholderCallback=function(){var n=this.element,t=n.getAttribute("poster");if(!t)return null;var i=new Image;return i.src=dt(t,n),i.setAttribute("loading","lazy"),i.setAttribute("placeholder",""),V(i),i},c.unlayoutCallback=function(){return this.hk=!1,this.pk(),this.Rb.updatePlaying(!1),!0},c.pk=function(){this.hk=!1,this.fb&&(J(this.fb),this.fb=null),this.fk&&(this.fk(),this.fk=null)},c.Tw=function(){var n=this.element,t=Un(n),i=n.getAttribute("src");return t.getSourceOrigin(i)===t.getWinOrigin(this.win)&&pn().warn(ct,"Origins of document inside amp-video-iframe and the host are the same, which allows for same-origin behavior. However in AMP cache, origins won't match. Please ensure you do not rely on any same-origin privileges.",n),function(n){return n.indexOf("#")>-1?n:"".concat(n,"#amp=1")}(dt(i,n))},c.dk=function(){return this.ck=new b,this.ck.promise},c.yk=function(n){return function(n,t,i){return!(!t||n.source!=t.contentWindow)&&("string"==typeof i?i==n.origin:i.test(n.origin))}(n,this.fb,/.*/)},c.B=function(n){var t=this;if(this.fb&&this.yk(n)){var i=Fn(n);if((r=i)&&(v(r)||r.startsWith("{"))){var r,e,o=v(e=i)?e:U(e);if(null!=o){var u=o.method;if(u){var a=o.id;return"getIntersection"==u?Z(this.element).then(():"getConsentData"===u?void this.wk(a):void wn(!1,"Unknown method `%s`.",u)}var s=o.event,f="canplay"==s;this.hk=this.hk||f;var c=bn(this.ck),h=c.reject,l=c.resolve;if(f)return l();if("error"==s&&!this.hk)return h("Received `error` event.");if("analytics"!=s){switch(s){case"playing":this.Rb.updatePlaying(!0);break;case"pause":case"ended":this.Rb.updatePlaying(!1)}I.indexOf(s)>-1&&B(this.element,s)}else{var d=bn(o.analytics);this.gk(d.eventType,d.vars)}}}}},c.gk=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};pn().assertString(n,"`eventType` missing in analytics event"),wn(vt().test(n),"Invalid analytics `eventType`. Value must start with `%s`.",ht),B(this.element,T,{"eventType":n,"vars":t})},c.bk=function(n,t){var i=t.intersectionRatio,r=t.time,e=i<.5?0:i;this.Qb({"id":n,"args":{"intersectionRatio":e,"time":r}})},c.wk=function(n){var t,i,r=this;(t=this.element,i=this.getConsentPolicy(),In(t).then(()).then((function(t){r.Qb({"id":n,"args":t})}))},c.kk=function(n){var t=this,i=(this.ck||{}).promise;i&&i.then((function(){t.Qb({"event":"method","method":n})}))},c.Qb=function(n){this.fb&&this.fb.contentWindow&&this.fb.contentWindow.postMessage(JSON.stringify(n),"*")},c.pauseCallback=c.pause=function(){this.kk("pause")},c.play=function(){this.kk("play")},c.mute=function(){this.kk("mute")},c.unmute=function(){this.kk("unmute")},c.isInteractive=function(){return!0},c.supportsPlatform=c.preimplementsMediaSessionAPI=function(){return this.element.hasAttribute("implements-media-session")},c.preimplementsAutoFullscreen=c.fullscreenEnter=function(){this.kk("fullscreenenter")},c.fullscreenExit=function(){this.kk("fullscreenexit")},c.isFullscreen=c.showControls=function(){this.kk("showcontrols")},c.hideControls=c.getMetadata=c.getDuration=function(){return 0},c.getCurrentTime=c.getPlayedRanges=c.seekTo=f}(n.BaseElement);n.registerElement(ct,mt)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-video-iframe-0.1.js.map