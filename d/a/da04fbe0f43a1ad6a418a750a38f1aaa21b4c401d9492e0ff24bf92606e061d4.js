(function(e){var t; o,s="function"==typeof Object.create?Object.create:a="function"==typeof Object.defineProperties?Object.defineProperty:u=this);f("function"==typeof Object.setPrototypeOf)o=Object.setPrototypeOf;else{var h;e:{var l={};try{l.__proto__={a:!0},h=l.a;break e}catch(gt){}h=!1}o=h?null}var f=o; p="function"==typeof Object.assign?Object.assign:"Object.assign",(),c("Symbol",(),c("Symbol.iterator",(),c("WeakMap",(),c("Map",(),c("Object.values",(),c("Array.prototype.keys",(),c("Set",(),c("Object.is",(),c("Array.prototype.includes",(),c("String.prototype.includes",(function(e){return e||)),c("Array.prototype.values",();var b={ma:"loaded",sa:"start",ja:"firstQuartile",na:"midpoint",ta:"thirdQuartile",ha:"complete",oa:"pause",qa:"resume",ga:"bufferStart",fa:"bufferFinish",ra:"skipped",ua:"volumeChange",pa:"playerStateChange",ea:"adUserInteraction"},x={ka:"full",ia:"domain",la:"limited"};function w(e,t){this.x=null!=e.x?e.x:e.left,this.y=null!=e.y?e.y:e.top,this.width=e.width,this.height=e.height,this.I=this.x+this.width,this.J=this.y+this.height,this.G=e.G||void 0,this.V=e.V||[],this.h=e.friendlyObstructionClass||void 0,this.i=e.friendlyObstructionPurpose||void 0,this.j=e.friendlyObstructionReason||void 0,this.O=void 0===e.O||!0===e.O,this.l=void 0===e.hasWindowFocus||!0===e.hasWindowFocus,this.D=e.D||void 0,this.$=e.$||void 0,this.N=e.N||[],this.P=e.P||!1,this.g=t} C(e){var t=[],n=[],i={viewport:e.m,adView:{percentageInView:e.u,pixelsInView:e.A,reasons:e.l},declaredFriendlyObstructions:e.o.length};if(void 0!==e.g){i.adView.geometry=S(e.g),i.adView.geometry.pixels=E(e.g),i.adView.onScreenGeometry=S(e.h),i.adView.onScreenGeometry.pixels=L(e);for(var r=0;r<e.j.length;r++)t.push(S(e.j[r]));for(r=0;r<e.B.length;r++){var o=e.B[r],s=o,a={};s.h&&(a.obstructionClass=s.h),s.i&&(a.obstructionPurpose=s.i),s.j&&(a.obstructionReason=s.j),o=M(e.g,o),n.push(Object.assign({},{x:o.x,y:o.y,width:o.I-o.x,height:o.J-o.y},a))}i.adView.onScreenGeometry.obstructions=t,i.adView.onScreenGeometry.friendlyObstructions=n}return i}ction A(e){if(-1!==e.l.indexOf("backgrounded"))e.u=0,e.A=0;else{var t=E(e.g);if(0!==t){var n=L(e);e.u=Math.round(n/t*100),e.A=n}}}nction L(e){var t=Math,n=t.max,i=E(e.h),r=e.j,o=0;if(0<r.length){var s=e.h,r);e=s.ca,s=s.da;for(var a=0;a<e.length-1;a++)for(var u=(e[a]+(e[a]+1))/2,c=e[a+1]-e[a],h=0;h<s.length-1;h++){for(var l=(s[h]+(s[h]+1))/2,f=s[h+1]-s[h],d=!1,v=0;v<r.length;v++){var g=S(r[v]);if(g.x<u&&g.x+g.width>u&&g.y<l&&g.y+g.height>l){d=!0;break}}d&&(o+=Math.round(c)*Math.round(f))}}return n.call(t,0,i-o)}function U(){}unction F(e,t,n,i){var r=!!t.P||t.G===i;if(r){n.g=t;var o=O(n.g);e=V(n.i,o);var s=n.g;"notAttached"===s.D||"noWindowFocus"===s.D||"noAdView"===s.D?(R(n,"notFound"),n.h=new w({x:0,y:0,endX:0,endY:0,width:0,height:0},!1)):"viewInvisible"===(s=n.g).D||"viewGone"===s.D||"viewNotVisible"===s.D||"viewAlphaZero"===s.D||"viewHidden"===s.D||void 0!==n.g.D||k(n.g)?(R(n,"hidden"),n.h=new w({x:0,y:0,endX:0,endY:0,width:0,height:0},!1)):(n.g.l||(R(n,"backgrounded"),R(n,"noWindowFocus")),N(e,o)&&R(n,"clipped"),n.h=new w(e,!1))}else if(o=!0,t.g&&(o=-1===t.V.indexOf(i)&&!1===t.O),o){s=t.N;for(var a=0;a<s.length;a++)o=void 0!==n.g,F(e,new w(s[a],o),n,i)}r||void 0===n.g||(t.g?-1!==t.V.indexOf(i)?n.o.push(t):n.s.push(t):(r=O(t),i=O(n.h),S(n.h),!k(n.h)&&t.O&&N(t=V(i,r),i)&&(R(n,"clipped"),n.h=new w(t,!1))))}prototype.T=I.prototype.T=var z=null;unction G(){this.G=null,this.i={apiVersion:"1.0",accessMode:"limited",environment:"web",omidJsInfo:{omidImplementer:"omsdk",serviceVersion:"1.4.8-iab4174"},adSessionType:"html",supports:["clid","vlid"]},this.B=null,this.A="foregrounded",this.o=this.u="none",this.m=this.l=this.j=this.C=this.h=this.g=this.M=this.S=null,this.s=new Map}var H=);function Y(e){if(e===H)return!1;try{if(void 0===e.location.hostname)return!0}catch(e){return!0}return!1}function X(){var t=e;if(null==t||void 0===t.top||null==t.top)return null;try{var n=t.top;return Y(n)?null:n.location.href}catch(e){return null}}function K(e,t){this.g=e,this.h=t}ction q(e){this.g=e,this.l=[],this.i=[],this.j=[],this.m=[],this.o={}}function ee(e,t){e.l.push(t),function(e,t){if(void 0!==e.g&&e.g.G&&!1!==ne(e,t)){var n=t.event;e.j.filter(().forEach((function(t){e.h(t.H,n)}))}}(e,t)}function te(e,t,n){void 0!==e.g&&e.g.G&&e.l.filter(().map(().forEach(()}function ne(e,t){var n=t.event.type,i=-1!==Object.values(b).indexOf(n)&&"volumeChange"!==n;return"impression"===n||"loaded"===n&&e.g.h?t.origin===e.g.o:!i||t.origin===e.g.u}ction se(e){var t=e.g.o;return"none"==t||"javascript"==t||(Q("Impression event is owned by "+e.g.o+", not javascript."),!1)}tion le(e){var t=(e=e.event).data?Object.assign({},e.data):void 0;return"sessionStart"===e.type&&(t.context=Object.assign({},t.context)),{adSessionId:e.adSessionId,timestamp:e.timestamp,type:e.type,data:t}}function fe(e,t){this.h=e,this.g=t}ion ye(e,t,n,i,r){this.j=e,this.ba=t,this.W=n,this.i=i,this.Z=r,this.h=null,this.g=this.l=this.M=void 0,this.Y=!0,this.o=void 0,be(this)}ion Oe(e,t,n,i,r,o){ye.call(this,e,n,i,r,o),this.u=t,this.m=void 0}nction Me(e,t,n,i,r,o){ye.call(this,e,n,i,r,o),this.C=this.u=this.A=this.m=void 0,this.X=!1,this.L=void 0}on Ae(e,t){var n=void 0===n?H:n;this.i=e,this.g=n,this.j=t,this.h=[]}function Pe(e){if(!e.g||!e.g.document)throw Error("OMID Service Script is not running within a window.");var t=e.h;e.h=[],t.forEach((function(t){try{var n=t.accessMode,i=("string"==typeof n&&-1!==Object.values(x).indexOf(n)?t.accessMode:null)||"limited";t.accessMode=i;e:{var r=t.resourceUrl,o=e.g.location.origin;try{var s=new URL(r,o);break e}catch(e){}try{s=new URL(r);break e}catch(e){}s=null}if(n=s){var a=Ne(),u=e.g.document,c=u.createElement("iframe");c.id="omid-verification-script-frame-"+a,c.style.display="none",["full","limited"].includes(i)?c.srcdoc="<html><head>\n<script type=\"text/javascript\">window['omidVerificationProperties'] = {\n'serviceWindow': window.parent,\n'injectionSource': 'web',\n'injectionId': '"+a+'\',\n};<\/script>\n<script type="text/javascript" src="'+n.href+'"><\/script>\n</head><body></body></html>':"domain"==i&&(c.src=e,a,n).href),["domain","limited"].includes(i)&&(c.sandbox="allow-scripts"),u.body.appendChild(c),J().g.set(a,c);var h=t.vendorKey,l=t.verificationParameters;l=void 0===l?"":l,(h=void 0===h?"":h)&&"string"==typeof h&&""!==h&&l&&"string"==typeof l&&""!==l&&(e.i.o[h]=l),e.j.s.set(a,t)}}catch(e){Z("OMID verification script "+t.resourceUrl+" failed to load: "+e)}}))}function Re(e,t,n,i){var r=this;this.g=e,this.i=t,this.h=n,this.l=i,this.j=!1,Le(this,(function(e){if("sessionStart"===e.type){r.j=!0;try{Pe(r.l)}catch(e){Q(e.message)}}"sessionFinish"===e.type&&(r.j=!1)}))}function Le(e,t,n,i){!function(e,t,n,i){var r={aa:n,U:i,H:t};e.m.push(r),e.i.forEach((function(t){var n=le(t);"sessionStart"===t.event.type&&re(e,n,r),e.h(r.H,n)}))}(e.i,t,n,i)}function Ue(e,t){if(!t)return e.g;for(var n=i(e.h.values()),r=n.next();!r.done;r=n.next())if((r=r.value).g.s.has(t))return r;return e.g}function Be(e,t){return null==t?e.g:e.h.get(t)||e.g}function Fe(t){var n=new G,i=new q(n),r=new U,o=new B,s=new fe(i,n);t=t.i;var a=e;return new Re(n,i,r=a?a.IntersectionObserver&&(a.MutationObserver||a.ResizeObserver)?new Me(a,r,s,i,n,t):new Oe(a,o,s,i,n,t):null,new Ae(i,n))}ction We(e){var t={};return t.omid_message_guid=e.h,t.omid_message_method=e.method,t.omid_message_version=e.version,void 0!==e.g&&(t.omid_message_args=e.g),t} qe(e,t,n,i){if(e=Be(e.g,t),"impression"==n)se(e.i)&&(ee(n=e.i,he(n,"impression","javascript",i=ue(n,ce(n,i=(i=n.g.L)?C(i):null)))),e.h&&be(e.h));else{if("loaded"==n)t=void 0===(t=i)?null:t,ae(e.i)&&((i=e.i).g.h||"display"!=i.g.g)&&ee(i,t=he(i,"loaded","javascript",ue(i,ce(i,void 0===t?null:t))));else if(ae(e.i)){if(t=e.i,"start"!==n&&"volumeChange"!==n||null!=(i&&i.deviceVolume)||(i.deviceVolume=t.g.S),i&&("start"===n||"volumeChange"===n)){var r=i.videoPlayerVolume,o=i.mediaPlayerVolume;null!=r?(Object.assign(i,{mediaPlayerVolume:r}),t.g.M=r):null!=o&&(Object.assign(i,{videoPlayerVolume:o}),t.g.M=o)}ee(t,he(t,n,"javascript",i))}["loaded","start"].includes(n)&&e.h&&be(e.h)}}nction nt(e,t){return/\d+\.\d+\.\d+(-.*)?/.test(e)&&et(e)?t||[]:t&&"string"==typeof t?JSON.parse(t):[]}u.Object.defineProperties(K.prototype,{event:{configurable:!0,enumerable:!0,get:function(){return this.g}},origin:{configurable:!0,enumerable:!0,get:}),q.prototype.h=ye.prototype.B=ye.prototype.s=function(){var e=this;this.o||(this.o=this.j.document.addEventListener("visibilitychange",this.o),this.o())},d(Oe,ye),Oe.prototype.B=Oe.prototype.s=Oe.prototype.S=function(){if(this.l){var e=Se(this);if(e){this.g.P=!1,e.P=!0;for(var t=!1,n=0;n<this.g.N.length;n++)if(this.g.N[n].P){this.g.N[n]=e,t=!0;break}t||this.g.N.push(e)}else this.g.P=!0;t=this.u,n=this.i.A;var i=this.i.G,r=this.R();e=new I;var o=new w(this.l,!1);if(T(e,o),F(t,o,e,i),r)if(o.$&&(R(e,"backgrounded"),R(e,"noOutputDevice")),"backgrounded"===n)R(e,"backgrounded");else if(void 0!==e.g){for(t=0;t<e.o.length;t++)P(e,e.o[t])&&e.B.push(e.o[t]);for(t=0;t<e.s.length;t++){if(n=P(e,e.s[t])){e:{for(n=e.s[t],i=0;i<e.j.length;i++)if(e.j[i].T(n)){n=!0;break e}n=!1}n=!n}n&&(R(e,"obstructed"),e.j.push(e.s[t]))}A(e)}else R(e,"notFound");else e.l=["unmeasurable"],e.m=void 0,e.u=0,e.j=[],e.g&&(t=e.g,t=new w(((n={}).x=0,n.y=0,n.width=t.width,n.height=t.height,n),t.g),e.g=t),e.h={x:0,y:0,endX:0,endY:0,width:0,height:0};this.M=e}},Oe.prototype.R=d(Me,ye),Me.prototype.B=Me.prototype.s=function(){if(ye.prototype.s.call(this),this.h&&(this.m||(this.m=function(e){return new e.j.IntersectionObserver((,{root:null,rootMargin:"0px",threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})}(this)),Ie(this),Ce(this.h)&&this),"backgrounded"===this.i.A)){var e=Ve(new W(0,0));this.L=this.g=this.l=e,we(this)}},Me.prototype.S=Me.prototype.R=(t=Re.prototype).setSlotElement=t.setElementBounds=t.error=t.injectVerificationScriptResources=t.setCreativeType=t.setImpressionType=t.setClientInfo=d(He,Ge),He.prototype.h=He.prototype.j=Ke.prototype.g=function(e){var t=v.apply(1,arguments);if("registerSessionObserver"===e)var n=t.slice(1);else n=t;return this.h("SessionService."+e,this.j.bind(this,e,t),n)},Ke.prototype.j=d(Ze,Ge),Ze.prototype.h=(t=$e.prototype).registerSessionObserver=function(e,t){Le(Be(this.g,e),t)},t.setSlotElement=function(e,t){Be(this.g,e).setSlotElement(t)},t.setElementBounds=function(e,t){Be(this.g,e).setElementBounds(t)},t.error=function(e,t,n){Be(this.g,e).error(t,n)},t.injectVerificationScriptResources=function(e,t){Be(this.g,e).injectVerificationScriptResources(t)},t.setCreativeType=function(e,t,n){n=void 0===n?null:n,Be(this.g,e).setCreativeType(t,n)},t.setImpressionType=t.setClientInfo=function(e,t,n,i){var o=this.g;if(null==e)e=o.g;else{var s=[].concat(r(o.h.values())).includes(o.g)?Fe(o):o.g;o.h.set(e,s),e=s}return e.setClientInfo(t,n,i)};var it=new function(){};function rt(){var t=bt,n=this,i=void 0===i?e:i;this.g=t,this.i=i,this.l=new He,this.i.omid=this.i.omid||{},this.i.omid.v1_SessionServiceCommunication=this.l,this.h=i&&i.addEventListener&&i.postMessage?new Ze(i):null,this.j=null,this.l.g=this.m.bind(this),this.h&&(this.h.g=this.o.bind(this)),this.s=new Ke((,(),function(e,t){null==(t=void 0===t?H:t).omidSessionInterface&&((e={setSessionClientWindow:e.i,setClientInfo:Qe(e,"setClientInfo"),registerSessionObserver:Qe(e,"registerSessionObserver"),startAdSession:Qe(e,"startSession"),finishAdSession:Qe(e,"finishSession"),reportError:Qe(e,"sessionError"),registerAdEvents:Qe(e,"registerAdEvents"),registerMediaEvents:Qe(e,"registerMediaEvents"),injectVerificationScriptResources:Qe(e,"injectVerificationScriptResources"),setSlotElement:Qe(e,"setSlotElement"),setVideoElement:Qe(e,"setVideoElement"),setElementBounds:Qe(e,"setElementBounds"),setCreativeType:Qe(e,"setCreativeType"),setImpressionType:Qe(e,"setImpressionType"),setContentUrl:Qe(e,"setContentUrl"),adEvents:{impressionOccurred:Qe(e,"impressionOccurred"),loaded:Qe(e,"loaded")},mediaEvents:{start:Qe(e,"start"),firstQuartile:Qe(e,"firstQuartile"),midpoint:Qe(e,"midpoint"),thirdQuartile:Qe(e,"thirdQuartile"),complete:Qe(e,"complete"),pause:Qe(e,"pause"),resume:Qe(e,"resume"),bufferStart:Qe(e,"bufferStart"),bufferFinish:Qe(e,"bufferFinish"),skipped:Qe(e,"skipped"),volumeChange:Qe(e,"volumeChange"),playerStateChange:Qe(e,"playerStateChange"),adUserInteraction:Qe(e,"adUserInteraction")}}).mediaEvents.loaded=e.adEvents.loaded,e.videoEvents=e.mediaEvents,Object.freeze(e),Object.defineProperty(t,"omidSessionInterface",{value:e,writable:!1}))}(this.s,this.i)}unction st(e,t,n,i){var r=t.h,o=t.method,s=t.version;t=nt(s,t.g);try{at(e,o,(function(){var e=new De(r,"response",s,tt(s,v.apply(0,arguments)));i.h(e,n)}),t)}catch(e){i.h(new De(r,"error",s,ut(e)),n)}}function at(e,t,n,r){if(null!=Ye(t))switch(Ye(t)){case"registerAdEvents":var o=i(r).next().value;oe(e=Be(e.g.g,o).i,["impression"])&&se(e)&&(e.g.o="javascript");break;case"registerMediaEvents":o=i(r).next().value,oe(e=Be(e.g.g,o).i,Object.values(b))&&ae(e)&&(e.g.u="javascript");break;case"registerSessionObserver":o=i(r).next().value,e.g.registerSessionObserver(o,n);break;case"setSlotElement":o=(n=i(r)).next().value,n=n.next().value,e.g.setSlotElement(n,o);break;case"setVideoElement":o=(n=i(r)).next().value,n=n.next().value,e=Be(e.g.g,n),o&&o.tagName&&"video"===o.tagName.toLowerCase()?(e.g.l=o,e.h&&xe(e.h)):Q("setVideoElement called with a non-HTMLVideoElement. It will be ignored.");break;case"setElementBounds":o=(n=i(r)).next().value,n=n.next().value,e.g.setElementBounds(n,o);break;case"startSession":if(t=(n=i(r)).next().value,n=n.next().value,null!=t&&"object"==typeof t?("string"==typeof(r=t.customReferenceData)||(r=void 0),"boolean"==typeof(t=t.underEvaluation)||(t=!1),t={customReferenceData:r,underEvaluation:t}):t=null,null==t)break;r=e.g,e=t,o=void 0===o?null:o,t=n||Ne(),(n=Be(r.g,t)).g.G=t,e.canMeasureVisibility=n.h.R(),t=n.g,void 0!==e.contentUrl&&(t.B=e.contentUrl,e.contentUrl=void 0),r=t.i||{},e.omidJsInfo=Object.assign({},r.omidJsInfo||{},e.omidJsInfo||{}),e=Object.assign({},r,e),t.i=e,function(e,t){if(e.o=Object.assign(e.o,t),void 0!==(t=e.g.i)){t=Object.assign({},function(e){var t=J().h;return t?Object.assign({},e,{lastActivity:t}):e}(ue(e,ce(e,{context:t}),!0)),{supportsLoadedEvent:!!e.g.h||"video"==e.g.g}),Object.assign(t,{pageUrl:X(),contentUrl:e.g.B});var n=he(e,"sessionStart","native",t);e.i.push(n),e.m.forEach((function(t){var i=le(n);re(e,i,t),e.h(t.H,i)}),e),e)}}(n.i,o),n.h&&be(n.h);break;case"finishSession":o=i(r).next().value,o=Be((e=e.g).g,o),(e=e.g).g=Fe(e),function(e){var t=he(e,"sessionFinish","native");e.i.push(t),e.m.forEach((function(n){e.h(n.H,t.event)}))}(o.i),o.h.B();break;case"impressionOccurred":o=i(r).next().value,qe(e.g,o,"impression");break;case"loaded":o=(n=i(r)).next().value,n=n.next().value,o?(t={skippable:o.isSkippable,autoPlay:o.isAutoPlay,position:o.position},o.isSkippable&&(t.skipOffset=o.skipOffset),qe(e.g,n,"loaded",t)):qe(e.g,n,"loaded");break;case"start":o=(t=i(r)).next().value,n=t.next().value,t=t.next().value,qe(e.g,t,"start",{duration:o,mediaPlayerVolume:n});break;case"firstQuartile":o=i(r).next().value,qe(e.g,o,"firstQuartile");break;case"midpoint":o=i(r).next().value,qe(e.g,o,"midpoint");break;case"thirdQuartile":o=i(r).next().value,qe(e.g,o,"thirdQuartile");break;case"complete":o=i(r).next().value,qe(e.g,o,"complete");break;case"pause":o=i(r).next().value,qe(e.g,o,"pause");break;case"resume":o=i(r).next().value,qe(e.g,o,"resume");break;case"bufferStart":o=i(r).next().value,qe(e.g,o,"bufferStart");break;case"bufferFinish":o=i(r).next().value,qe(e.g,o,"bufferFinish");break;case"skipped":o=i(r).next().value,qe(e.g,o,"skipped");break;case"volumeChange":o=(n=i(r)).next().value,n=n.next().value,qe(e.g,n,"volumeChange",{mediaPlayerVolume:o});break;case"playerStateChange":o=(n=i(r)).next().value,n=n.next().value,qe(e.g,n,"playerStateChange",{state:o});break;case"adUserInteraction":o=(n=i(r)).next().value,n=n.next().value,qe(e.g,n,"adUserInteraction",{interactionType:o});break;case"setClientInfo":var s=i(r);o=s.next().value,t=s.next().value,r=s.next().value,s=s.next().value,n(e=e.g.setClientInfo(s,o,t,r));break;case"injectVerificationScriptResources":o=(n=i(r)).next().value,n=n.next().value,e.g.injectVerificationScriptResources(n,o);break;case"setCreativeType":o=(n=i(r)).next().value,n=n.next().value,e.g.setCreativeType(n,o);break;case"setImpressionType":o=(n=i(r)).next().value,n=n.next().value,e.g.setImpressionType(n,o);break;case"setContentUrl":o=(n=i(r)).next().value,n=n.next().value,Be(e.g.g,n).g.B=o;break;case"sessionError":o=(t=i(r)).next().value,n=t.next().value,t=t.next().value,e.g.error(t,o,n)}}unction ct(e){e({adSessionId:"",timestamp:(new Date).getTime(),type:"sessionError",data:{errorType:"generic",message:"Registration to session events is only allowed for verification clients injected by the OM-SDK service itself. Please note that in a future release registration in this manner will be rejected."}})}function ht(e,t,n,r){ar s=t.h,a=t.method,u=t.version;if(t=nt(u,t.g),null!=Xe(a,"VerificationService.")){a=Xe(a,"VerificationService.");try{switch(a){case"addEventListener":var c=i(t);!function(e,t,n,i){e=Ue(e.j,i),void 0!==i&&e.g.s.has(i)||ct(n),e=e.i,"media"===t||"video"===t?function(e,t,n){Object.keys(b).forEach((function(i){var r={type:i=b[i],U:n,H:t};e.j.push(r),te(e,i,r)}))}(e,n,i):(n={type:t,U:i,H:n},e.j.push(n),te(e,t,n))}(e,c.next().value,o,c.next().value||lt(n));break;case"addSessionListener":var h=i(t);!function(e,t,n,i){e=Ue(e.j,i),void 0!==i&&e.g.s.has(i)||ct(t),Le(e,t,n,i)}(e,o,h.next().value,h.next().value||lt(n));break;case"sendUrl":!function(e,t,n,i){!e.g,t,n,i)}(e,i(t).next().value,(function(){return o(!0)}),(function(){return o(!1)}));break;case"setTimeout":var l=i(t),f=l.next().value,d=l.next().value;e.m[f]=ge(e.g,"setTimeout")(o,d);break;case"clearTimeout":var g=i(t).next().value;!e.g,e.m[g]);break;case"setInterval":var p=i(t),m=p.next().value,y=p.next().value;e.l[m]=de(e.g,o,y);break;case"clearInterval":var x=i(t).next().value;ve(e.g,e.l[x]);break;case"injectJavaScriptResource":!e,i(t).next().value);break;case"getVersion":o("1.4.8-iab4174")}}catch(e){r.h(new De(s,"error",u,"\n              name: "+e.name+"\n              message: "+e.message+"\n              filename: "+e.filename+"\n              lineNumber: "+e.lineNumber+"\n              columnNumber: "+e.columnNumber+"\n              stack: "+e.stack+"\n              toString(): "+e.toString()+"\n          "),n)}}}unction ft(e){var t={};return(t.app="omid_v1_present_app",t.web="omid_v1_present_web",t)[e]}function dt(e,t){e.document.write('<iframe style="display:none" id="'+t+'" name="'+t+'" sandbox></iframe>')}function vt(e,t){var n=e.document.createElement("iframe");n.id=t,n.name=t,n.style.display="none",n.sandbox="",e.document.body.appendChild(n)}rt.prototype.m=function(e,t){null!=Ye(e.method)&&ot(this,it)&&st(this,e,t,this.l)},rt.prototype.o=var gt,pt,mt=new yt=new function(){this.i=mt,this.h=new Map,this.g=Fe(this)},bt=new $e;new function(){var e=yt,t=this,n=void 0===n?H:n;this.j=e,this.g=mt,this.m={},this.l={},this.i=new He,n.omid=n.omid||{},n.omid.v1_VerificationServiceCommunication=this.i,this.h=null,n&&n.addEventListener&&n.postMessage&&(this.h=new Ze(n)),this.i.g=this.h&&(this.h.g=},new rt,pt="web",(gt=H).frames&&gt.document&&!["omid_v1_present","omid_v1_present_web","omid_v1_present_app"].some(()&&(null==gt.document.body&&"MutationObserver"in gt?function(e,t){var n=new MutationObserver((function(i){i.forEach((function(i){"BODY"===i.addedNodes[0].nodeName&&(i=ft(t),vt(e,"omid_v1_present"),vt(e,i),n.disconnect())}))}));n.observe(e.document.documentElement,{childList:!0})}(gt,pt):(pt=ft(pt),gt.document.body?(vt(gt,"omid_v1_present"),vt(gt,pt)):(dt(gt,"omid_v1_present"),dt(gt,pt))))}).call(this,this);