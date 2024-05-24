var IASFreewheelExtension=function(){var E=function(v){var y=function(){var a,b=function(){var b=function(b){return"undefined"!==typeof b},a=function(){var a="u";try{b(window.opera)&&b(window.opera.buildNumber)?a="o":b(window.mozInnerScreenY)?a="g":b(window.chrome)&&b(window.chrome.csi)?a="c":b(window.msWriteProfilerMark)&&b(window.crypto)?a="e":b(window.attachEvent)||b(window.msCrypto)?a="i":b(window.WebKitPoint)&&(a="w")}catch(e){}return a}(),e=function(){var a=function(a){for(var e in a)if(a.hasOwnProperty(e)){var c=
a[e];""!==c&&"null"!==c&&"undefined"!==c&&null!==c&&b(c)||delete a[e]}return a},e=function(a){var e={},c,p;for(p in a)a.hasOwnProperty(p)&&(c=a[p],b(e[c])?e[c]+=p:e[c]=p);a={};for(p in e)e.hasOwnProperty(p)&&(c=e[p],a[c]=p);return a};return function(){var c=function(){var a={g:"",q:""};try{a.q=window.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(e){var c=e.message,c=c.substring(c.lastIndexOf("<")+1,c.lastIndexOf(">")),p;if(p=b(c))if(p=!1,b(window.navigator)&&
b(window.navigator.userAgent)){var d=window.navigator.userAgent.match(/Firefox\/([\.0-9]+)/);null!==d&&2==d.length&&(d=d[1].split("."),3==parseInt(d[0],10)&&6>=parseInt(d[1],10)&&(3==d.length?13>=parseInt(d[2],10)&&(p=!0):p=!0))}p&&(a.g=c)}return a},d={};try{d.a=encodeURIComponent(top.location.href)}catch(w){}try{d.b=encodeURIComponent(parent.location.href)}catch(r){}if(window!=top){try{d.c=encodeURIComponent(parent.document.referrer)}catch(g){}try{d.e=encodeURIComponent(window.document.referrer)}catch(k){}}try{d.d=
encodeURIComponent(window.location.href)}catch(f){}try{var l=c();d.g=encodeURIComponent(l.g);d.q=encodeURIComponent(l.q)}catch(m){}var d=a(d),d=e(d),c=[],n;for(n in d)d.hasOwnProperty(n)&&c.push({key:n,val:d[n]});c.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c}()}();return{br:a,urls:e}},c=function(a,b,c){var e=["//"+g.getFwServerDomain(),"/db2/video/",b+"/",c+"/","skeleton.js?videoId=",q.getVideoId()].join("");b=function(a){e=[e,"&adsafe_url=",a.val,
"&adsafe_type=",a.key].join("")};try{a.urls.forEach(b),e=[e,"&adsafe_jsinfo=br:",a.br].join("")}catch(p){n.report(d.DIAGNOSTIC.BUILD_VIDEOAPI_URL,p)}return e},e=function(){if(this.readyState==d.XHR.READY_STATE.DONE)if(this.status==d.HTTP.STATUS_CODE.OK)try{a("failed"===JSON.parse(this.responseText).action?d.BLOCKING_RESPONSE.BLOCK:d.BLOCKING_RESPONSE.SAFE)}catch(b){n.report(d.DIAGNOSTIC.BLOCK_AD,b)}else n.report(d.DIAGNOSTIC.BLOCKING_URL_REQUEST_ERR,{message:this.status})};return{init:function(d,
w,r){var k=b();d=c(k,d,w);a=r;g.sendUrlRequest(d,e)}}}(),x=function(){var a=[];return{addCallback:function(b,c){var e=0;c=c||Number.MAX_VALUE;a.push(function(){e<c&&(e++,b.apply({},arguments))})},executeCallbacks:function(){var b=arguments;a.forEach(function(a){a.apply({},b)})}}},l=function(){var a=window;return{getWin:function(){return a},setWin:function(b){(b=b&&b.ownerDocument)&&b.defaultView?a=b.defaultView:b&&b.parentWindow?a=b.parentWindow:n.report(d.DIAGNOSTIC.SET_CONTEXT,{message:""})},getDoc:function(){return a.document}}}(),
f=function(){var a,b=[],c=!1,e=function(a){var b="";Object.keys(a).forEach(function(e){-1===["advEntityId","pubEntityId","partner","debug"].indexOf(e)&&(b+="&"+e+"="+a[e])});return b},h=function(c){if(q.isEstablished()){var h;try{if(h=g.stringify(c))if("AdImpression"===c.messageType)g.getWindow()[a](h);else g.getWindow().postMessage(h,"*")}catch(w){n.report(d.DIAGNOSTIC.DISPATCH_MESSAGE,w)}}else if(q.canNeverBeEstablished()){h=g.getFwServerDomain();var r=f.config;try{"AdImpression"===c.messageType&&
(f.isCmTag?g.sendUrlRequest(["//"+h,"/mon?",e(r)].join("")):f.isFwTag&&g.sendUrlRequest(["//"+h,"/rfw/st/",r.advEntityId+"/"+r.pubEntityId,"/skeleton.js"].join("")))}catch(k){n.report(d.DIAGNOSTIC.DISPATCH_MESSAGE,k)}}else try{b.push(c)}catch(l){n.report(d.DIAGNOSTIC.CACHE_MESSAGE,l)}},w=function(a,b){g.sendMonitoringDebugPixel(d.MONITORING.AD_STOPPED,f.monitoringQS());r(a,b)},r=function(a,b){try{h({messageType:a,id:q.getVideoId(),time:g.now(),partner:s.getPartnerCode(),eventData:b})}catch(e){n.report(d.DIAGNOSTIC.SEND_EVENT,
e)}},k={AdImpression:function(a,b){var e=m.getInjector();c||(b&&(b.ext_passthrough=f.passThroughObj),c=!0,g.sendMonitoringDebugPixel(d.MONITORING.AD_IMPRESSION,f.monitoringQS()),e.onInjectionResolution(function(){r(a,b)}),e.resolveInjection())},AdStopped:w,AdVideoComplete:w,AdError:function(a,b){g.sendMonitoringDebugPixel(d.MONITORING.AD_ERROR,f.monitoringQS());r(a,b)}};return{sendEvent:function(a,b){var e=k[a]||r;m.vans.hasBegun()&&e(a,b)},setImpressionCallback:function(b){a=b},flushUnsentEvents:function(){try{b.forEach(h)}catch(a){n.report(d.DIAGNOSTIC.FLUSH_UNSENT_EVENTS,
a)}},passThroughObj:{},monitoringQS:function(){},clearSessionState:function(){c=!1;b.length=0}}}(),n=function(){var a={};return{report:function(b,c,e){if(!a[b])try{a[b]=!0;var d="//"+g.getFwServerDomain()+"/jsdiagnostic?code:vans-js_"+encodeURIComponent(s.getPartnerCode())+"_"+b+"&err:"+encodeURIComponent(c.message);e&&(d+="&config:"+encodeURIComponent(JSON.stringify(e)));g.sendUrlRequest(d)}catch(k){}}}}(),s=function(){return{initCM:function(a,b){z.initCM(a,b)},initFW:function(a,b,c){z.initFW(a,
b,c)},getPartnerCode:function(){return m.get().partnerCode},getPassThroughObj:function(){return m.get().passThroughObj},getAltMonDomain:function(){return m.get().monDomain},hasDebugEnabled:function(){return m.get().debugEnabled}}}(),q=function(){var a,b=!1,c=!1,e=function(a,e){a==h()&&(b=!0,f.setImpressionCallback(e),g.sendMonitoringDebugPixel(d.MONITORING.HANDSHAKE_SUCCESS,f.monitoringQS()),f.flushUnsentEvents());return b?d.VIDEO_CHANNEL:null},h=function(){a||(a=g.generateUID());return a};return{getVideoId:h,
setNodeInterface:function(a){var b,c,p,k=h();try{b="IASid"+k,c="blockAd"+k,p="getIasVidBridgeVersion"+k,a.className+=" integral-vid-"+k,a[c]=g.noop,a[b]=e,a[p]=function(){return"2"},a.getVersion=function(){return d.INTERNAL_VERSION}}catch(f){n.report(d.DIAGNOSTIC.SET_NODE_INTERFACE,f)}},isEstablished:function(){return b},canNeverBeEstablished:function(){return c},giveUpOnHandshaking:function(){c=!0;f.flushUnsentEvents()},resetHandshake:function(){c=b=!1}}}(),t=function(){var a=x();return{addCallback:function(b){a.addCallback(b,
1)},executeCallbacks:a.executeCallbacks}},A=function(a){var b=!1,c=!1,e=new t,h=!1,w=function(a,b){var e,c=g.getFwServerDomain(),h=function(a){var b="";Object.keys(a).forEach(function(e){"advEntityId"!=e&&"pubEntityId"!=e&&"partner"!=e&&(b+="&"+e+"="+a[e])});return b};try{e=["//",c,a,"?videoId=",q.getVideoId(),h(b)].join("")}catch(k){n.report(d.DIAGNOSTIC.BUILD_SRC_URL,k)}return e},r=function(p){var r,w=function(){!b&&a.parentNode?(a.parentNode.appendChild(p),clearInterval(r),c=b=!0,g.sendMonitoringDebugPixel(d.MONITORING.FWJS_INJECTED,
k.buildMonitoringQS())):h&&(c=!0,clearInterval(r),q.giveUpOnHandshaking());c&&e.executeCallbacks()};w();b||(r=setInterval(w,200))},f=function(){var b=a&&a.ownerDocument,e=b&&b.parentWindow;return!!(b&&b.defaultView||e)};return{injectTagScript:function(a,b){var e,h=g.getDocument();if(f()){var l=function(a){g.sendMonitoringDebugPixel(d.MONITORING.FWJS_LOAD_SUCCESS,k.buildMonitoringQS())},n=function(a){q.giveUpOnHandshaking();g.sendMonitoringDebugPixel(d.MONITORING.FWJS_LOAD_ERROR,k.buildMonitoringQS())};
try{e=h.createElement("script"),e.src=w(a,b),e.addEventListener("load",l),e.addEventListener("error",n),r(e)}catch(m){q.giveUpOnHandshaking(),g.sendMonitoringPixel(d.MONITORING.INJECTION_ERR)}}else c=!0,q.giveUpOnHandshaking()},sendInjectionDiagnostics:function(){var b=a&&a.ownerDocument,e=a&&a.parentNode,c=b&&(b.defaultView||b.parentWindow),h=d.MONITORING.AD_NODE_TYPE+"_"+(a?a.constructor.name||a.nodeName||typeof a:"null");a||g.sendMonitoringDebugPixel(d.MONITORING.AD_NODE_NULL,k.buildMonitoringQS());
a&&!e&&g.sendMonitoringDebugPixel(d.MONITORING.AD_NODE_DETACHED,k.buildMonitoringQS());a&&!b&&g.sendMonitoringDebugPixel(d.MONITORING.AD_NODE_NO_DOC,k.buildMonitoringQS());b&&!c&&g.sendMonitoringDebugPixel(d.MONITORING.AD_NODE_NO_WINDOW,k.buildMonitoringQS());g.sendMonitoringDebugPixel(h,k.buildMonitoringQS())},onInjectionResolution:function(a){e.addCallback(a);c&&e.executeCallbacks()},resolveInjection:function(){h=!0}}},u=function(){var a,b=!1,c=function(b){var d,k=!1;try{d=JSON.parse(b.data),k=
"unloadComplete"===d.msg&&d.id==q.getVideoId()}catch(r){}k&&(a(),g.getWindow().removeEventListener("message",c))};return{registerMeasurementCompleteHandler:function(e){a=e;b||(g.getWindow().addEventListener("message",c),b=!0)}}},d={INTERNAL_VERSION:"3.6.0",VIDEO_CHANNEL:"jv3",PROD_DOMAIN:"pixel.adsafeprotected.com",DIAGNOSTIC_MONITORING_DOMAIN:"spixel.adsafeprotected.com",S4_ITERATIONS:8,EVENTS:{AD_IMPRESSION:"AdImpression"},PSUEDO_IMPRESSION_ID_PREFIX:"vidId_",DIAGNOSTIC:{INIT_FW:"ifw",INIT_CM:"icm",
FLUSH_UNSENT_EVENTS:"fue",CACHE_MESSAGE:"cm",SEND_EVENT:"se",BLOCK_AD:"ba",SEND_MONITORING_PIXEL:"smp",SET_NODE_INTERFACE:"sni",BUILD_SRC_URL:"bsurl",BUILD_VIDEOAPI_URL:"bvu",BLOCKING_URL_REQUEST_ERR:"blk_url_req_err",DISPATCH_MESSAGE:"dm",SET_CONTEXT:"sc",STRINGIFY_EVENT_ERROR:"ser"},MONITORING:{INJECTION_ERR:"inj_err",VANS_INITIALIZED:"init",HANDSHAKE_SUCCESS:"hs",AD_IMPRESSION:"ai",DEFERRED_INTERFACE:"vans_defer",AD_STOPPED:"adstop",AD_ERROR:"aderr",AD_NODE_NULL:"adnode_null",AD_NODE_DETACHED:"adnode_detached",
AD_NODE_NO_DOC:"adnode_nodoc",AD_NODE_NO_WINDOW:"adnode_nowin",AD_NODE_TYPE:"adnode_type",FWJS_INJECTED:"fwjsinj",FWJS_LOAD_SUCCESS:"fwjsload",FWJS_LOAD_ERROR:"fwjsload_err",IMPRESSION_DOMAIN_BLOCKING:"impblock"},HTTP:{VERBS:{GET:"GET"},STATUS_CODE:{OK:200}},BLOCKING_RESPONSE:{BLOCK:"block",SAFE:"safe"},XHR:{READY_STATE:{DONE:4}}},z=function(){var a=function(a,c,e,d){q.setNodeInterface(e);"function"===typeof c.onMeasurementComplete&&(new u).registerMeasurementCompleteHandler(c.onMeasurementComplete);
var k={};Object.getOwnPropertyNames(c).forEach(function(a){"debug"!==a&&"onMeasurementComplete"!==a&&(k[a]=c[a])});d.injectTagScript(a,k)};return{initCM:function(b,c){var e;if(!m.vans.hasBegun()){if(!b||!b.partner)throw Error("Missing partner code");l.setWin(c);m.setPreErrorConfig(b,"cm");try{if(!b.anId)throw Error("Missing anId");m.vans.begin();e=new A(c);m.setInjector(e);m.setConfig(b);g.sendMonitoringDebugPixel(d.MONITORING.VANS_INITIALIZED,k.buildMonitoringQS());g.sendMonitoringDebugPixel(d.MONITORING.IMPRESSION_DOMAIN_BLOCKING,
k.buildMonitoringQS(),g.getFwServerDomain());e.sendInjectionDiagnostics();a("/jsvid",b,c,e)}catch(h){n.report(d.DIAGNOSTIC.INIT_CM,h)}}},initFW:function(b,c,e){var h,f;if(!m.vans.hasBegun()){if(!b||!b.partner)throw Error("Missing partner code");l.setWin(c);m.setPreErrorConfig(b,"fw");try{if(!b.advEntityId||!b.pubEntityId)throw Error("Missing client id: advEntityId: "+b.advEntityId+" ,pubEntityId: "+b.pubEntityId);m.vans.begin();f=new A(c);m.setInjector(f);m.setConfig(b);g.sendMonitoringDebugPixel(d.MONITORING.VANS_INITIALIZED,
k.buildMonitoringQS());g.sendMonitoringDebugPixel(d.MONITORING.IMPRESSION_DOMAIN_BLOCKING,k.buildMonitoringQS(),g.getFwServerDomain());f.sendInjectionDiagnostics();e&&y.init(b.advEntityId,b.pubEntityId,e);h="/fwjsvid/st/"+b.advEntityId+"/"+b.pubEntityId+"/skeleton.js";a(h,b,c,f)}catch(r){n.report(d.DIAGNOSTIC.INIT_FW,r)}}}}}(),k={buildMonitoringQS:function(){var a=d.PSUEDO_IMPRESSION_ID_PREFIX+q.getVideoId(),b=m.getInfoParams();return["&chanId="+b.anId,"planId="+b.advEntityId,"placementId="+b.pubEntityId,
"advId="+b.campId,"pubOrder="+b.placementId,"pubCreative="+b.creativeId,"impId="+(b.impId||a),"ts="+Date.now(),"custom="+d.INTERNAL_VERSION,"custom2=jv3&custom3="+m.get().tagType,"adsafe_par"].join("&")}},m=function(){var a={},b=!1,c={},e,h=function(b){"impId creativeId campId placementId advEntityId pubEntityId anId".split(" ").forEach(function(a){c[a]=b[a]});c.monDomain=a.monDomain},g=function(b){f.monitoringQS=k.buildMonitoringQS;f.passThroughObj=a.passThroughObj;Object.keys(b).forEach(function(a){f[a]=
b[a]})};return{vans:{hasBegun:function(){return b},begin:function(){b=!0}},setInjector:function(a){e=a},getInjector:function(){return e},setPreErrorConfig:function(b,e){a.tagType=e;var c;c=b.partner;var d=/[^\w-.]/g;c="string"===typeof c?c.replace(d,""):c;a.partnerCode=c;a.debugEnabled=b.debug&&b.debug.enabled;a.debugEnabled&&(a.monDomain=b.debug.monDomain)},setConfig:function(b){h(b);a.passThroughObj={vv:d.INTERNAL_VERSION,vanstag:a.tagType,xcamp:c.campId,xplac:c.placementId,xcreat:c.creativeId,
ximp:c.impId,xpc:a.partnerCode};a.config=b;g({isFwTag:"fw"===a.tagType,isCmTag:"cm"===a.tagType,config:b})},getInfoParams:function(){return c},get:function(){return a}}}(),g={now:function(){return(new Date).getTime()},sendMonitoringPixel:function(a){try{this.sendUrlRequest(["//"+g.getFwServerDomain(),"/mon?anId=10173&campId=",encodeURIComponent(s.getPartnerCode()),"&pubId=",encodeURIComponent("vans-js_"+a)].join(""))}catch(b){n.report(d.DIAGNOSTIC.SEND_MONITORING_PIXEL,b)}},sendMonitoringDebugPixel:function(){var a=
[d.MONITORING.AD_STOPPED],b={};return function(c,e,h){var k=s.hasDebugEnabled(),f=-1<a.indexOf(c)&&b[c];if(k&&!f)try{var l=d.DIAGNOSTIC_MONITORING_DOMAIN,p=s.getAltMonDomain();h=h||p||l;var p=h===p?"925116":"10173",m=g.addProtocolToDomain(h),q=encodeURIComponent(c),u=encodeURIComponent(s.getPartnerCode()),t;t=e.replace(/=undefined&/g,"=&");g.sendUrlRequest(m+"/mon?anId="+p+"&campId="+u+"&pubId="+q+t);b[c]=!0}catch(v){n.report(d.DIAGNOSTIC.SEND_MONITORING_PIXEL,v)}}}(),sendUrlRequest:function(a,b){var c,
e;if(a){c=this.getWindow();try{e=new c.XMLHttpRequest,b&&(e.onreadystatechange=b),e.open(d.HTTP.VERBS.GET,a),e.send()}catch(h){}}},stringify:function(a){if("AdImpression"!==a.messageType)return JSON.stringify(a);var b={};b.passthroughObj=s.getPassThroughObj();var c="";try{c=JSON.stringify(a)}catch(e){n.report(d.DIAGNOSTIC.STRINGIFY_EVENT_ERROR,e,b);return}return c},addProtocolToDomain:function(a){return a.match(/^[a-zA-Z]+:\/\//)?a:"https://"+a},getWindow:function(){return l.getWin()},getDocument:function(){return l.getDoc()},
generateUID:function(){var a,b="";try{for(a=0;a<d.S4_ITERATIONS;a++)b=[b,Math.floor(65536*(1+Math.random())).toString(16).substring(1)].join("")}catch(c){}return b},getFwServerDomain:function(){return v||d.PROD_DOMAIN},noop:function(){}};return{initFW:s.initFW,initCM:s.initCM,sendEvent:f.sendEvent}},D=function(){var v=function(){c({subType:"fullscreenchange"})},y=function(a){return function(b,c){u.sendEvent(a,c);B.reset()}},x={anId:"anID",pubId:"advertiserId",campId:"timePositionClass",pubOrder:"campaignId",
pubCreative:"creativeId",placementId:"placementId",chanId:"sectionId",custom:"custom",custom2:"custom2",custom3:"custom3",fwServerDomain:"fwServerDomain"},l={monDomain:"monDomain"},f={EVENT_ERROR:function(a,b){b.errorCode=a.errorCode;b.errorModule=a.errorModule;b.errorInfo=a.errorInfo;u.sendEvent("AdError",b);B.reset()},EVENT_AD_CLICK:"AdClickThru",EVENT_AD_CLOSE:y("AdStopped"),EVENT_AD_COLLAPSE:"resizeAd",EVENT_AD_COMPLETE:y("AdVideoComplete"),EVENT_AD_EXPAND:"resizeAd",EVENT_AD_FIRST_QUARTILE:"AdVideoFirstQuartile",
EVENT_AD_IMPRESSION_END:y("AdStopped"),EVENT_AD_IMPRESSION:function(a,b){u.sendEvent("AdStarted",b);u.sendEvent("AdVideoStart",b);u.sendEvent("AdImpression",b)},EVENT_AD_MIDPOINT:"AdVideoMidpoint",EVENT_AD_THIRD_QUARTILE:"AdVideoThirdQuartile",EVENT_AD_MINIMIZE:"resizeAd",EVENT_AD_MUTE:"AdVolumeChange",EVENT_AD_UNMUTE:"AdVolumeChange",EVENT_AD_PAUSE:"AdPaused",EVENT_AD_RESUME:"AdPlaying",EVENT_AD_SKIPPED:y("AdSkipped"),EVENT_AD_VOLUME_CHANGE:"AdVolumeChange",EVENT_AD_BUFFERING_END:"AdLoaded"},n=["preroll",
"midroll","postroll"],s=!1,q,t,A,u,d,z,k,m=function(a){d=a.slot;if(z!==a.adInstance){z=a.adInstance;var h=z.getRendererController().getParameter("ias_parameters");k=C.createObjFromParams(h);u=void 0}if(-1<n.indexOf(k.timePositionClass)){var f;if(void 0===u)try{f=d.getBase();var l,m;try{l=k.fwServerDomain,u=new E(l),m=g(),u.initCM(m,f)}catch(p){}}catch(q){}h=z;!s&&0<h.getDuration()&&u&&(h=b(h),s=!0,u.sendEvent("AdDurationChange",h),u.sendEvent("AdVolumeChange",h));c(a)}},g=function(){var b={},c="true"===
k.debug;Object.keys(x).forEach(function(a){var c=k[x[a]];C.isValidParamValue(c)&&(b[a]=c)});c&&(b.debug=a());b.partner="freewheel";return b},a=function(){var a={enabled:!0};Object.keys(l).forEach(function(b){var c=k[l[b]];C.isValidParamValue(c)&&(a[b]=c)});return a},b=function(a){var b=d.getVideoDisplaySize();return{volume:A.volume,ad_duration:a.getDuration(),width:b.width,height:b.height,viewMode:B.getViewMode()}},c=function(a){var c=q[a.subType],d=b(z);"function"===typeof c?c(a,d):"string"===typeof c&&
u.sendEvent(c,d)};return{init:function(a){if(a){t=a;A=t.getContentVideoElement();t.addEventListener(tv.freewheel.SDK.EVENT_AD,m);if(void 0===q){a={fullscreenchange:"resizeAd"};for(var b in f)a[tv.freewheel.SDK[b]]=f[b];q=a}B.init({videoElement:A,doc:window.document},v)}},dispose:function(){t&&(t.removeEventListener(tv.freewheel.SDK.EVENT_AD,m),t=null,B.reset())}}};D.prototype.constructor=D;var B=function(){var v=["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","msfullscreenchange",
"MSFullscreenChange"],y=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement","webkitCurrentFullScreenElement"],x="normal",l,f,n,s,q=function(){return-1<y.map(function(d){return!!l[d]}).indexOf(!0)},t=function(d){x=-1<"webkitbeginfullscreenwebkitendfullscreen".indexOf(d.type||"")?"webkitbeginfullscreen"===d?"fullscreen":"normal":q(l)?"fullscreen":"normal";n()},A=function(){s=l.onmsfullscreenchange;l.onmsfullscreenchange=function(d){t(d);if("function"===typeof s)try{s(d)}catch(f){}}},
u=function(){"function"===typeof l.addEventListener&&v.forEach(function(d){"on"+d in l&&("msfullscreenchange"===d?A():l.addEventListener(d,t))});"function"===typeof f.addEventListener&&(f.addEventListener("webkitbeginfullscreen",t),f.addEventListener("webkitendfullscreen",t))},d=function(){l&&"function"===typeof l.removeEventListener&&v.forEach(function(d){"on"+d in l&&("msfullscreenchange"===d?"function"===typeof s?l.onmsfullscreenchange=s:"function"===typeof l.onmsfullscreenchange&&(l.onmsfullscreenchange=
null):l.removeEventListener(d,t))});f&&"function"===typeof f.removeEventListener&&(f.removeEventListener("webkitbeginfullscreen",t),f.removeEventListener("webkitendfullscreen",t))},z=function(){d();x="normal";s=n=f=l=void 0};return{getViewMode:function(){return x},reset:z,init:function(d,m){d.doc&&d.videoElement&&m?(z(),l=d.doc,f=d.videoElement,n=m,u()):console.error("FullscreenAdapter received invalid arguments - FullscreenAdapter.init(context{ doc, videoElement }, onFullscreenChangeCallback)")}}}(),
C=function(){return{createObjFromParams:function(v){v=v.replace(/ /g,"").split(";");for(var y={},x=0,l=v.length;x<l;x++){var f=v[x].split("=");y[f[0]]=f[1]}return y},isValidParamValue:function(v){return!!(v&&0<v.length)}}}();return D}();
ion:opacity .15s ease-in-out;margin-bottom:30px}body:not(.gz-status2) .amePlaceholderBox~.gz-sidebar-promo{margin-top:30px}.gz-status2 .gz-sidebar-promo{padding:20px;border-radius:10px;border:2px solid var(--form-border-color);background-color:var(--form-bg-color)}.gz-sidebar-promo-title-cnt{display:grid;grid-auto-flow:column;grid-template-columns:1fr min-content;grid-template-areas:"title club";align-items:center;margin-bottom:20px}.gz-sidebar-promo-title{grid-area:title;text-transform:uppercase;font-size:.813rem;font-weight:600;line-height:20px;color:rgb(var(--grigio-02))}.gz-sidebar-promo-club{grid-area:club;border-radius:4px;box-sizing:border-box;padding:0 4px;height:16px;background:var(--gz-club-bg);background:var(--gz-club-gradient)}.gz-sidebar-promo-club:before{content:"Club";display:block;font-size:.563rem;font-weight:800;line-height:16px;color:var(--bianco)}.gz-sidebar-promo-list{display:grid;grid-auto-flow:row;row-gap:10px}.gz-sidebar-promo-list .gz-btn-link{background-color:var(--bianco);border-radius:5px;padding:10px 8px;grid-template-columns:min-content 1fr min-content;column-gap:10px}.gz-sidebar-promo-list .gz-btn-label{font-size:.813rem;font-weight:700}.gz-sidebar-promo-list .gz-btn-icon{height:40px;width:40px}.gz-sidebar-promo-list .gz-btn-more{width:30px;height:30px;--icon-color: rgb(var(--giallo-01));transform:rotate(180deg)}.gz-sidebar-promo-banner{display:grid;grid-template-areas:"image desc";grid-template-columns:120px 1fr;height:100px;column-gap:15px}.gz-sidebar-promo-banner:hover{opacity:1}.gz-sidebar-promo-image{grid-area:image;position:relative;display:grid;justify-content:center;align-items:center;border-radius:5px;background:#a05dc1;background:linear-gradient(270deg,#a05dc1 0,#d25eac 100%)}.gz-sidebar-promo-image:after{content:"Novità";display:block;position:absolute;z-index:1;top:5px;right:5px;height:14px;background-color:var(--bianco);color:#000;mix-blend-mode:lighten;text-align:center;text-transform:uppercase;font-size:.5rem;line-height:14px;font-weight:800;border-radius:2px;padding:0 5px}.gz-sidebar-promo-image .gz-icon{width:84px}.gz-sidebar-promo-desc{display:grid;grid-auto-flow:row;justify-items:start}.gz-sidebar-promo-desc .gz-promo-title{color:rgb(var(--viola-03));font-size:.875rem;font-weight:800;line-height:15px}.gz-sidebar-promo-desc .gz-promo-content{color:rgb(var(--nero-01));font-size:.75rem;font-weight:500;line-height:15px}.gz-sidebar-promo-desc .gz-promo-cta{position:relative;margin-top:auto;padding-left:15px}.gz-sidebar-promo-desc .gz-promo-cta .gz-icon{position:absolute;right:0;width:30px;height:30px;--icon-color: var(--bianco);transform:rotate(180deg)}.gz-sidebar .gz-sidebar-promo{margin-bottom:0}.gz-sidebar-promo.processed{opacity:1}.gz-status2 .amePlaceholderBox,.gz-status2 .gz-cabin-elevator-obstacle{display:none}.gz-title-section{color:var(--nero-01);font-size:1.25rem;font-weight:600;letter-spacing:.22px;line-height:1em;padding:0;position:relative}.gz-title-section small{color:var(--nero-01);font-size:.875rem;font-weight:400}.gz-title-section strong{font-weight:600}.gz-title-section a{color:var(--nero-01);text-decoration:none}.gz-title-section span,.gz-title-section a span{color:rgb(var(--giallo-01));text-transform:initial}.gz-count{background-color:rgb(var(--giallo-01));color:var(--bianco);font-size:.625rem;font-weight:700;line-height:10px;padding:2px 5px;border-radius:1px}.gz-title-section span.gz-count{position:relative;color:var(--bianco);margin-left:5px;top:-3px;display:inline-block}.gz-title-smallsection{color:var(--nero-01);font-size:.875rem;font-weight:600;text-transform:uppercase}.gz-underline:after{content:"";display:block;width:50px;height:3px;border-radius:2px;background-color:rgb(var(--giallo-01));margin-top:10px}.gz-underline.gz-text-center:after{position:relative;left:50%;margin-left:-25px}.gz-uppercase{text-transform:uppercase}.gz-text-center{text-align:center}.gz-button{display:inline-block;padding:10px 15px;border-radius:25px;border:1px solid var(--form-border-color);background-color:var(--bianco);text-align:center;color:#444;font-size:.8125rem;font-weight:700;line-height:18px;letter-spacing:1px;text-decoration:none;font-family:'MontserratGZ'}.gz-button-small{padding:5px 15px;letter-spacing:0}.gz-button-with-icon{padding:10px 20px}.gz-button-with-icon span{vertical-align:middle}.gz-button-with-icon .gz-icon{height:20px;margin-right:5px}.gz-button-with-icon .gz-icon svg{height:100%;width:auto}.gz-button-override{display:flex;align-items:center;box-sizing:border-box;padding:0 30px;border-radius:20px;height:40px;line-height:1em;font-size:.875rem;letter-spacing:0;border:0;cursor:pointer}.gz-button-override.small{height:30px;border-radius:15px;font-size:.75rem}.gz-button-override.medium-small{height:45px;border-radius:25px;font-size:.875rem}.gz-button-override.medium{height:50px;border-radius:25px;font-size:1rem}.gz-button-override.big{height:60px;border-radius:30px;font-size:1.25rem}.gz-button-override.gz-button-orange{background-color:rgb(var(--giallo-01));color:var(--bianco)}.gz-button-override.gz-button-grey{background-color:rgb(var(--bianco-03));color:rgb(var(--grigio-01))}.gz-button-override.gz-centered{justify-content:center}.gz-opening-nav{max-height:40px;margin-bottom:25px}.gz-opening-nav ul{display:grid;grid-auto-flow:column;justify-content:start;gap:20px;padding:0 0 0 5vw;width:95vw;max-width:95vw;margin:0 -5vw;scroll-padding:0 0 0 5vw;scroll-snap-type:x mandatory;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-ms-overflow-style:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;transform:translateZ(0);will-change:transform}.gz-opening-nav ul::-webkit-scrollbar{display:none}.gz-opening-nav ul .gz-btn-link{white-space:nowrap;height:40px;padding:0 20px;background-color:rgb(var(--bianco-03));border-radius:5px}.gz-opening-nav ul .gz-btn-link-selected{border:2px solid rgb(var(--giallo-01));box-sizing:border-box}.gz-opening-nav ul .gz-btn-label{font-size:.75rem;font-weight:600;color:var(--link-color);text-transform:uppercase}.gz-opening-nav ul li:last-child{padding-right:5vw}.gz-description-with-more{margin:10px 0 30px;padding:0;line-height:1.4em;height:auto;max-height:7em;overflow:hidden;position:relative;transition:max-height .8s linear}.gz-description-with-more.collapsible:before{content:"";position:absolute;bottom:0;right:0;height:2.8em;width:100%;pointer-events:none;background:#fff;background:-webkit-linear-gradient(top,rgba(255,255,255,0) 0,#fff 90%,#fff 100%);background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(90%,#fff),to(#fff));background:-o-linear-gradient(top,rgba(255,255,255,0) 0,#fff 90%,#fff 100%);background:linear-gradient(to bottom,rgba(255,255,255,0) 0,#fff 90%,#fff 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='var(--bianco)',GradientType=0 );transition:background 0s linear}.gz-description-with-more .read-more{position:absolute;bottom:0;right:0;height:1.4em;width:100%;text-align:right}.gz-description-with-more .read-more a{background:#fff;padding:0 0 0 10px}.gz-author-card{text-align:center}.gz-author-card .gz-subtitle-section a{color:rgb(var(--giallo-01));font-weight:600;text-decoration:underline}.gz-author-card,.gz-author-card>a{overflow:hidden;display:flex;flex-direction:column;align-items:center}.gz-author-card>a{height:100%}.gz-author-image{position:relative}.gz-author-card .gz-author-image:after{border-radius:50%}.gz-author-image picture img{display:block;width:100%;border-radius:50%;height:auto;background-color:rgb(var(--bianco-03))}.gz-author-card-content{position:relative;display:flex;flex-direction:column;height:100%;padding:10px 0}.gz-author-card-content .gz-title{color:var(--nero-01);overflow:visible;font-size:.875rem;font-weight:800;line-height:1.25em}.gz-author-card-content .gz-description{color:#615c5c;font-size:15px;font-weight:400;line-height:1.6em;padding:5px 10px 0}.gz-row{display:flex;justify-content:space-between;flex-direction:row;align-items:flex-start}.gz-row-center-vertical{align-items:center}.gz-row-center-horizontal{justify-content:center;flex-direction:column}.gz-row.gz-1col,.gz-row.gz-2col,.gz-row.gz-3col{flex-wrap:wrap}.gz-row.gz-1col .gz-col{width:100%}.gz-row.gz-2col .gz-col{width:48%}.gz-row.gz-3col .gz-col{width:31%}.gz-add-preferiti{cursor:initial;pointer-events:none}.gz-add-preferiti-processed{cursor:pointer;pointer-events:initial}.gz-add-preferiti .gz-btn-icon{position:relative;width:40px;height:40px;background:url(/style/images/icon-like-foto-off.svg) 0 0 no-repeat;background-size:40px 40px}.gz-add-preferiti .gz-btn-icon:before{z-index:10;top:0;left:0;width:40px;height:40px;background-image:url(/style/images/icon-like-foto-on.svg);background-size:40px 40px}.gz-add-preferiti .gz-btn-icon:after{z-index:20;top:9px;left:14px;width:32px;height:32px;background-image:url(/style/images/icon-check-like.svg)}.gz-add-preferiti .gz-btn-icon:before,.gz-add-preferiti .gz-btn-icon:after{content:"";display:block;position:absolute;background-repeat:no-repeat;background-size:100% 100%;opacity:0;transform:scale(.1)}.gz-add-preferiti.added .gz-btn-icon:before{animation:heart-pulse .3s ease-in;animation-fill-mode:forwards}.gz-add-preferiti.added .gz-btn-icon:after{animation:heart-pulse .3s ease-in;animation-delay:.3s;animation-fill-mode:forwards}.gz-add-preferiti.removed .gz-btn-icon:before,.gz-add-preferiti.removed .gz-btn-icon:after{opacity:1;transform:scale(1)}.gz-add-preferiti.removed .gz-btn-icon:before{animation:heart-pulse-inverted .3s ease-in;animation-delay:.3s;animation-fill-mode:forwards}.gz-add-preferiti.removed .gz-btn-icon:after{animation:heart-pulse-inverted .3s ease-in;animation-fill-mode:forwards}.gz-form,.gz-form form,.gz-form-content{overflow:hidden;display:grid;grid-auto-flow:row;row-gap:20px}.gz-form fieldset{position:relative}.gz-form-text,.gz-form-label,.gz-form-error{font-size:.75rem;font-weight:700;line-height:20px;display:block}.gz-form-text{line-height:15px;font-weight:600;color:var(--text-light-color)}.gz-form-label{color:rgb(var(--viola-03))}.gz-form-error{color:rgb(var(--rosso-01))}.gz-form-error a{color:rgb(var(--rosso-01));text-decoration:underline}.gz-form-error-hidden{display:none}.gz-form-input,.gz-form-textarea{color:rgb(var(--grigio-02));font-family:"MontserratGZ",sans-serif;font-size:.875rem;font-weight:600;border:2px solid var(--form-border-color);background-color:var(--form-bg-color);border-radius:4px;width:100%;box-sizing:border-box;appearance:none;-moz-appearance:none;-webkit-appearance:none}.gz-form-input{padding:0 10px;height:34px;line-height:30px}.gz-form-textarea{padding:10px;line-height:20px}.gz-form-textarea-limit-char{position:absolute;top:0;right:0;font-size:.688rem;font-weight:700;line-height:20px;color:var(--text-light-color)}.gz-form-input:not([type=password]){font-family:"MontserratGZ",sans-serif;letter-spacing:0}.gz-form-input[type=password]{font-family:Verdana,sans-serif;letter-spacing:.125em}.gz-form-input-password{padding-right:44px}.gz-form-input-active,.gz-form-textarea-active{background-color:var(--bianco)}.gz-form-input::-webkit-input-placeholder{color:rgb(var(--bianco-06))}.gz-form-input:-ms-input-placeholder{color:rgb(var(--bianco-06))}.gz-form-input::-ms-input-placeholder{color:rgb(var(--bianco-06))}.gz-form-input::placeholder{color:rgb(var(--bianco-06))}.gz-form-input:focus::-webkit-input-placeholder{color:var(--text-light-color)}.gz-form-input:focus:-ms-input-placeholder{color:var(--text-light-color)}.gz-form-input:focus::-ms-input-placeholder{color:var(--text-light-color)}.gz-form-input:focus::placeholder{color:var(--text-light-color)}.gz-form-input[type=password]::-webkit-input-placeholder{font-family:Verdana,sans-serif;letter-spacing:.125em}.gz-form-input[type=password]:-ms-input-placeholder{font-family:Verdana,sans-serif;letter-spacing:.125em}.gz-form-input[type=password]::-ms-input-placeholder{font-family:Verdana,sans-serif;letter-spacing:.125em}.gz-form-input[type=password]::placeholder{font-family:Verdana,sans-serif;letter-spacing:.125em}.gz-form-input~.gz-form-show-password{position:absolute;bottom:2px;right:12px;z-index:1;display:flex;justify-content:center;align-items:center;width:30px;height:30px;cursor:pointer;background:0 0;--icon-color: rgb(var(--grigio-01));--icon-fill-opacity: 1}.gz-form-show-password svg{width:24px;height:24px}.gz-form-input~.gz-form-show-password .gz-icon-show,.gz-form-input~.gz-form-show-password.hide .gz-icon-hide{display:block}.gz-form-input~.gz-form-show-password.hide .gz-icon-show,.gz-form-input~.gz-form-show-password .gz-icon-hide{display:none}.gz-form-input-active~.gz-form-show-password{background-color:var(--bianco)}.gz-form-input~.gz-form-link{position:absolute;right:0;top:2px;cursor:pointer}.gz-form-link{font-size:.75rem;font-weight:600;line-height:15px;color:rgb(var(--grigio-02));text-decoration:underline}.gz-form-input:read-only{background-color:var(--bianco);color:rgb(var(--bianco-06));cursor:default}.gz-form-checkbox,.gz-form-radio{position:relative;--icon-color: rgb(var(--giallo-01));--icon-border-color: transparent}.gz-form-checkbox .gz-form-checkbox-label,.gz-form-radio .gz-form-radio-label{display:grid;grid-auto-flow:column;grid-template-columns:40px auto;grid-template-areas:"icon label";align-items:center}.gz-form-checkbox .gz-icon,.gz-form-radio .gz-icon{align-self:start;grid-area:icon;width:40px;height:40px;cursor:pointer;margin-left:-4px}.gz-form-checkbox [type=checkbox],.gz-form-radio [type=radio]{height:40px;opacity:0;display:block;position:absolute;appearance:auto;-webkit-appearance:auto}.gz-form-checkbox .gz-icon{--icon-stroke-width: 2.5}.gz-form-checkbox [type=checkbox]:checked~.gz-form-checkbox-label .gz-icon,.gz-form-radio [type=radio]:checked~.gz-form-radio-label .gz-icon{--icon-fill-opacity: .2;--icon-border-color: rgb(var(--giallo-01))}.gz-form-checkbox-label .gz-checkbox-label,.gz-form-radio-label .gz-radio-label{grid-area:label;margin-left:1px;font-size:.813rem;font-weight:600;color:rgb(var(--grigio-02));cursor:pointer}.gz-form-checkbox-label .gz-checkbox-label a,.gz-form-radio-label .gz-radio-label a{color:rgb(var(--grigio-02));text-decoration:underline}.gz-user-offer-choice .gz-form-radio-label{box-sizing:border-box;padding:15px 25px;height:100%;grid-auto-flow:row;grid-template-columns:none;grid-template-rows:1fr 35px auto auto;grid-template-areas:"label" "price" "offer" "discount";align-items:inherit;justify-items:center;text-align:center;border-radius:15px;background-color:rgb(var(--bianco-01));border:2px solid rgb(var(--bianco-01))}.gz-user-offer-choice .gz-radio-label{margin-left:0;align-self:center;font-size:.875rem;font-weight:700;color:rgb(var(--giallo-01))}.gz-user-offer-choice .gz-radio-price{font-size:1.75rem;font-weight:700;color:var(--link-color);line-height:35px}.gz-user-offer-choice .gz-radio-price:before{content:attr(data-currency);font-size:1.25rem;vertical-align:baseline}.gz-user-offer-choice .gz-radio-offer{line-height:20px;font-size:.688rem;font-weight:600;color:var(--link-color);margin-bottom:5px}.gz-user-offer-choice .gz-radio-offer span{text-decoration:line-through}.gz-user-offer-discount{height:20px;border-radius:10px;background-color:rgba(var(--viola-02),.22);line-height:20px;font-size:.688rem;font-weight:700;color:rgb(var(--viola-01));padding:0 10px;overflow:hidden;text-overflow:ellipsis}.gz-separator-text{height:20px;line-height:20px;font-size:.813rem;font-weight:600;color:var(--text-light-color);display:grid;grid-template-columns:1fr max-content 1fr;align-items:center;gap:10px}.gz-separator-text:before,.gz-separator-text:after{content:'';height:1px;background-color:rgb(var(--bianco-03))}.gz-overlay-modal{visibility:hidden;opacity:0;display:flex;justify-content:center;align-items:center;z-index:999999;padding:0;position:fixed;left:0;top:0;width:100vw;height:100vh;overflow:auto;background-color:rgb(var(--viola-03));background-color:rgba(var(--viola-03),.95);transition:visibility .3s ease-in-out,opacity .3s ease-in-out;text-align:center}.gz-modal-container{position:fixed;top:0;right:0;bottom:0;left:0;height:100%;z-index:1000000;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0;opacity:0;transition:opacity .15s linear}.gz-survey{box-sizing:border-box;display:grid;grid-auto-flow:column;grid-template-columns:min-content 1fr min-content;grid-template-areas:"icon text cta";align-items:center;background:#a053c1;background:linear-gradient(270deg,#a053c1 0,#d25eac 100%);padding:13px calc(5vw - 8px) 12px calc(5vw - 6px);margin:10px 10px 0;min-height:70px;max-height:70px;opacity:0;overflow:hidden;transition:max-height .3s linear,opacity .15s linear;border-radius:10px}.gz-survey.processed{opacity:1}.gz-survey>.gz-icon{grid-area:icon;--icon-color: var(--bianco);--icon-fill-opacity: .3;width:40px;height:40px;margin-right:10px}.gz-survey-text{grid-area:text;font-size:.75rem;font-weight:700;line-height:15px;color:var(--bianco)}.gz-survey>.gz-btn-link{margin-left:5px;box-sizing:border-box;height:45px;border-radius:23px;border:2px solid var(--bianco);background-color:rgb(var(--giallo-01));color:var(--bianco);padding:0 3px 0 13px;grid-template-areas:"label icon";grid-template-columns:auto min-content}.gz-survey>.gz-btn-link .gz-btn-label{order:-1;font-size:.688rem;font-weight:800;line-height:13px;text-transform:uppercase;white-space:nowrap}.gz-survey>.gz-btn-link .gz-btn-icon{width:24px;height:24px;--icon-color: var(--bianco);transform:rotate(180deg)}body.gz-en .gz-header-container{grid-template-columns:188px auto 1fr}body.gz-en .gz-header-logo{background-size:122px 100%;position:relative}body.gz-en .gz-header-logo a{display:block;width:100%;height:100%}body.gz-en .gz-header-logo:after{content:"";box-sizing:border-box;position:absolute;top:2px;right:0;height:30px;border-left:1px solid var(--gz-brand-giallo-color);width:60px;padding-left:6px;pointer-events:none;background:url(/style/images/payoff-italian-recipes.svg) right 5px no-repeat;background-size:54px auto}body.gz-en .gz-header-overlay-social:before{content:'FOLLOW US'}body.gz-en .gz-card .gz-podcast-btn:after{content:"Listen"}body.gz-benessere .gz-underline:after{background-color:var(--benessere-color)}.gz-mBottom1x{margin-bottom:6px}.gz-mBottom2x{margin-bottom:12px}.gz-mBottom3x{margin-bottom:18px}.gz-mBottom4x{margin-bottom:24px}.gz-mBottom5x{margin-bottom:30px}.gz-mTop1x{margin-top:6px}.gz-mTop2x{margin-top:12px}.gz-mTop3x{margin-top:18px}.gz-mTop4x{margin-top:24px}.gz-mTop5x{margin-top:30px}.gz-pTop1x{padding-top:6px}.gz-pTop2x{padding-top:12px}.gz-pTop3x{padding-top:18px}.gz-pTop4x{padding-top:24px}.gz-pTop5x{padding-top:30px}.gz-pBottom1x{padding-bottom:6px}.gz-pBottom2x{padding-bottom:12px}.gz-pBottom3x{padding-bottom:18px}.gz-pBottom4x{padding-bottom:24px}.gz-pBottom5x{padding-bottom:30px}.gz-noMargin{margin:0}.gz-hide-mobile{display:none}.gz-hide-icons{visibility:hidden;overflow:hidden;position:relative;z-index:-1;height:0}div.gz-hide-form{display:none;height:0;width:0;overflow:hidden}@media all and (max-width:480px){.gz-row.gz-2col-mobile .gz-col{width:48%}}@media all and (max-width:999px){.gz-row.gz-1col-mobile .gz-col{flex:0 0 100%}}@media all and (min-width:360px){.gz-header{gap:13px}.gz-header-actions{gap:10px}.gz-survey>.gz-icon{margin-right:14px}.gz-survey-text{font-size:.875rem}.gz-survey>.gz-btn-link{padding:0 8px 0 20px}}@media all and (min-width:480px){.gz-grid-structure{grid-auto-flow:initial;grid-template-columns:1fr 1fr;row-gap:0;gap:20px}}@media only screen and (min-width:768px){.gz-user-overlay-container{position:absolute;right:-30px;width:300px}}@media all and (min-width:1000px){a:hover{opacity:.8}.gz-btn-icon{width:50px;height:50px;line-height:50px}.gz-header{top:0;gap:15px;width:100%;height:70px;transition:height .15s}.gz-header a:hover,.gz-header-overlay a:hover{opacity:1}.gz-header-container{max-width:none;grid-template-columns:168px auto 1fr;align-items:center}.gz-header-actions{gap:15px;margin:0 25px 0 0;height:50px}.gz-header-hamburger{margin:0 0 0 20px;cursor:pointer}.gz-header-logo{margin-top:-2px;height:44px}.gz-header-nav{display:grid;overflow-y:visible;position:relative;margin-left:15px}.gz-header-top-menu{white-space:nowrap;text-align:left;float:left;overflow-x:hidden;width:auto}.gz-header-top-menu .gz-header-menu{position:absolute;top:auto;left:auto;min-width:220px;margin-bottom:0;max-height:0;overflow:hidden;opacity:0;background-color:var(--bianco);border:1px solid rgba(var(--viola-03),.1);border-radius:0 0 10px 10px;box-shadow:var(--box-shadow);transition:max-height .3s ease-in-out,opacity .3s ease-in-out,padding 0s ease-in-out .3s}.gz-header-top-menu-item{height:55px;margin-top:15px}.gz-header-top-menu-item>.gz-btn-link{height:40px;padding:0 10px 0 20px;margin-bottom:15px;border-radius:20px;background-color:rgba(var(--viola-01),.1)}.gz-header-top-menu-item>.gz-btn-link .gz-btn-label{font-size:1rem;font-weight:600}.gz-header-top-menu-item>.gz-btn-link .gz-btn-label a{color:var(--link-color)}.gz-header-top-menu-item>.gz-btn-link .gz-btn-more{width:34px;height:34px;--icon-color: var(--link-color)}.gz-header-search-container .gz-header-container,body:not(.gz-index) .gz-header-search-container .gz-header-container,body.gz-it:not(.gz-index) .gz-header-search-container.gz-header-search-active .gz-header-container{max-width:none}.gz-header-search-container,.gz-index .gz-header-search-container{grid-area:search;background-color:var(--bianco);border:2px solid rgb(var(--bianco-04));width:auto;max-width:none;position:relative;top:auto;left:auto;opacity:1;height:40px;transition:top 0s,opacity 0s;border-radius:20px;margin-left:20px}.gz-header-search-form,.gz-index .gz-header-search-form{grid-template-columns:1fr 64px;margin:5px 3px 5px 20px;gap:20px;width:auto;overflow:hidden}.gz-header-search-container .gz-header-search{display:block;height:34px;border-radius:17px;background-color:rgba(var(--viola-01),.1)}.gz-header-search-container .gz-header-search .gz-btn-icon{--icon-fill-color: transparent;width:37px;height:37px;line-height:37px;margin:-2px auto 0}.gz-header-search-container .gz-header-search-close{display:none}.gz-header-flags{display:block;width:39px;height:34px;position:relative;align-self:center}.gz-header-flags .gz-header-flag{position:absolute}.gz-header-flags .gz-header-flag{bottom:0;right:0}.gz-header-flags .gz-header-flag:first-of-type{top:0;left:0}.gz-user-login.gz-btn-link{cursor:pointer;height:40px;width:108px;border-radius:20px}.gz-user-login.gz-btn-link .gz-user-icon{top:5px}.gz-user-login.gz-btn-link .gz-btn-label{font-size:.938rem;line-height:40px;padding-left:14px}.gz-user-login.gz-btn-link .gz-btn-more{--icon-color: var(--bianco);width:40px;height:40px;right:5px}.gz-user-login.gz-btn-link .gz-btn-more .gz-header-icon-arrow{width:32px;height:32px;top:4px;right:-1px}.gz-user-icon{margin-left:4px;width:30px;height:30px;box-shadow:0 0 0 2.5px var(--bianco)}.gz-status1 .gz-user-login.gz-btn-link{width:70px}.gz-status1.gz-status2 .gz-user-login.gz-btn-link{padding-right:55px}.gz-status1.gz-status2 .gz-user-login .gz-user-icon:before{font-size:.938rem;line-height:40px;height:40px;margin-top:-5px;padding-left:38px;letter-spacing:-.5}.gz-user-icon:after{top:-5px;left:-5px;width:40px;height:40px}.gz-header-overlay{top:0;left:0}.gz-header-overlay-container{transform:translateX(-30px)}.gz-header-search{display:none}.gz-header-search,.gz-header-search-input{position:relative;z-index:1}.gz-index .gz-header{height:70px;align-items:center}.gz-index .gz-header .gz-header-hamburger,.gz-index .gz-header .gz-header-actions{margin-top:0}.gz-index .gz-header .gz-header-logo{margin-top:-2px}.gz-innerwrapper,.gz-content,.gz-column,.gz-footer{transition:width .3s}.gz-content,.gz-column,.gz-footer{transform-origin:center}.gz-sitewidth{max-width:950px}.gz-footer{padding-bottom:50px}.gz-wrapper,.gz-innerwrapper{display:flex;flex-wrap:wrap;align-content:flex-start;flex-direction:row;justify-content:space-between;align-items:inherit}.gz-wrapper{padding:0 25px;transition:max-width .3s,margin-top 0s}body:not([class^=gz-index]) .gz-wrapper{padding-top:25px}.gz-column{width:300px}.gz-content{width:625px}.gz-content.gz-contentwrapper{justify-content:space-between;display:flex;flex-direction:row;flex-wrap:wrap;align-content:flex-start;flex:0 0 auto}.gz-content+.gz-sidebar.gz-column{margin:0}.gz-sidebar.gz-sidebar-infinite .gz-adv-slot{margin-bottom:20px}.gz-cabin-elevator-obstacle{margin-top:1400px}.gz-elevator{position:-webkit-sticky;position:sticky;top:95px}.gz-outerwrapper{flex:1 1 auto;margin-left:calc(-50vw + 50%);margin-right:calc(-50vw + 50%)}.gz-inner,.gz-innerdesktop{margin:0 25px}.gz-outer{margin:0 -25px}.gz-grid-structure{grid-auto-flow:initial;grid-template-columns:1fr 1fr 1fr 1fr;gap:var(--h-gap)}.gz-status2 .gz-index .gz-sidebar .gz-adv-slot{margin-bottom:24px}.gz-adv-slot{width:auto;margin-left:0;margin-right:0}.gz-adv-slot.gz-adv-slot-adsense{width:100%}.gz-adv-slot .gz-adv-adsense{width:100%;max-width:none;max-height:none;margin-left:0;margin-right:0}.gz-title-section{font-size:1.625rem;font-weight:500;letter-spacing:.29px}.gz-title-section small{font-size:1rem}.gz-title-smallsection{font-size:1rem}.gz-title-section span.gz-count{font-size:.875rem;line-height:14px;padding:3px 5px;top:-4px;margin-left:5px}.gz-text-center-desktop{text-align:center}.gz-title-section.gz-text-center-desktop{align-self:center}.gz-underline.gz-text-center-desktop:after{position:relative;left:50%;margin-left:-25px}.gz-opening-nav{margin-bottom:30px}.gz-opening-nav ul{width:100%;padding:0;margin:0;scroll-padding:0;scroll-snap-type:x mandatory;overflow:hidden;scrollbar-width:none;-ms-overflow-style:none;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;max-width:none;transform:none;will-change:auto}.gz-opening-nav ul li:last-child{padding-right:0}.gz-opening-nav ul a.gz-btn-link:hover{opacity:1}.gz-description-with-more{line-height:1.8em;max-height:9em}.gz-description-with-more.collapsible:before{height:3.6em}.gz-description-with-more .read-more{height:1.8em}.gz-author-card-content .gz-title{font-size:1rem}.gz-author-card-content .gz-description{padding:5px 25px 0}.gz-author-card-content .gz-author-info{padding:0 20px 15px}.gz-row.gz-2col-desktop .gz-col{flex:0 0 48%}.gz-row.gz-3col-desktop .gz-col{flex:0 0 31%}.gz-survey{display:none}body.gz-en .gz-header-container{grid-template-columns:245px auto 1fr}body.gz-en .gz-header-logo{width:245px;background-size:168px 44px;position:relative;background-position:left center}body.gz-en .gz-header-logo:after{background:url(/style/images/payoff-best-italian-recipes.svg) right center no-repeat;background-size:62px auto;height:44px;width:68px;top:2px}}@media all and (min-width:1200px){.gz-sitewidth{max-width:1140px}.gz-wrapper{padding:0 30px}body:not([class^=gz-index]) .gz-wrapper{padding-top:30px}body.gz-ricetta .gz-wrapper{padding-top:25px}.gz-column{width:360px}.gz-column.gz-fullwidth{margin:0}.gz-content{width:750px}.gz-elevator{top:100px}.gz-inner,.gz-innerdesktop{margin:0 30px}.gz-outer{margin:0 -30px}.gz-author-card-content .gz-description{padding:5px 30px 0}.gz-header-switch-language{margin-right:30px}}@media all and (min-width:1000px){.gz-mBottom1x{margin-bottom:10px}.gz-mBottom2x{margin-bottom:20px}.gz-mBottom3x{margin-bottom:30px}.gz-mBottom4x{margin-bottom:40px}.gz-mBottom5x{margin-bottom:50px}.gz-mTop1x{margin-top:10px}.gz-mTop2x{margin-top:20px}.gz-mTop3x{margin-top:30px}.gz-mTop4x{margin-top:40px}.gz-mTop5x{margin-top:50px}.gz-pTop1x{padding-top:10px}.gz-pTop2x{padding-top:20px}.gz-pTop3x{padding-top:30px}.gz-pTop4x{padding-top:40px}.gz-pTop5x{padding-top:50px}.gz-pBottom1x{padding-bottom:20px}.gz-pBottom2x{padding-bottom:20px}.gz-pBottom3x{padding-bottom:30px}.gz-pBottom4x{padding-bottom:40px}.gz-pBottom5x{padding-bottom:50px}.gz-hide-mobile{display:inline-block}.gz-hide-desktop{display:none!important}}
        .gz-label{border-radius:3px;padding:0 10px;color:var(--bianco);text-transform:uppercase}.gz-label.gz-orange{background-color:rgb(var(--giallo-01))}.gz-label .gz-btn-icon{--icon-color: var(--bianco);margin-left:-5px;width:20px;height:20px;display:none}.gz-label .gz-btn-label{font-size:.563rem;font-weight:700;line-height:20px}.gz-card.gz-card-horizontal .gz-label{border-bottom-left-radius:5px}.gz-card{box-shadow:var(--box-shadow);border-radius:5px;background-color:var(--bianco);overflow:hidden}.gz-card.gz-card-fake{background-color:rgba(var(--grigio-01),.08);box-shadow:none}.gz-card,.gz-card>a{position:relative;display:grid;grid-auto-flow:row;grid-template-areas:"card-image" "card-data";grid-template-rows:auto 1fr}.gz-card>a{height:100%;grid-area:card-data}.gz-card a{text-decoration:none}.gz-card a:hover{opacity:1}.gz-card-image{position:relative;height:auto;width:100%;overflow:hidden}.gz-card-image:before,.gz-card-course-lesson .gz-card-content .gz-image:before{content:"";display:block;position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background-color:rgba(var(--viola-03),.1);pointer-events:none}.gz-card-image.gz-card-image-with-data:after{content:"";display:block;position:absolute;z-index:2;top:0;left:0;width:100%;height:100%;background:rgb(var(--viola-03));background:linear-gradient(180deg,rgba(var(--viola-03),0) 0%,rgba(var(--viola-03),1) 100%);opacity:.5;pointer-events:none}.gz-card-image .gz-label{position:absolute;bottom:0;left:0;pointer-events:none;border-radius:0;z-index:10}.gz-card-image .gz-label.gz-top{top:0;bottom:auto;border-radius:5px 0 0}.gz-card-image .gz-label.gz-centered{left:50%;transform:translateX(-50%)}.gz-card-image img,.gz-card-course-lesson .gz-card-content .gz-image img{display:block;width:calc(100% + 1px);height:100%;object-fit:cover}.gz-card-image[data-image-count]:before{display:none}.gz-action-icon{--icon-color: var(--bianco);position:absolute;z-index:10;left:5px;top:5px;pointer-events:none}.gz-action-icon.gz-centered{top:50%;left:50%;transform:translate(-50%,-50%)}.gz-btn-icon.gz-action-icon{width:50px;height:50px}.gz-btn-icon.gz-action-icon-play:not(.gz-centered){top:10px;left:10px;width:25px;height:25px;--icon-fill-opacity: 1}.gz-card .gz-add-preferiti{position:absolute;top:5px;right:8px;z-index:10}.gz-card-content{position:relative;display:grid;grid-auto-flow:row;padding:10px 15px}.gz-card .gz-category{color:rgb(var(--giallo-01));font-size:.688rem;font-weight:600;line-height:20px;text-transform:uppercase}.gz-card .gz-category a{color:rgb(var(--giallo-01))}.gz-card .gz-title{color:var(--link-color);font-size:1rem;font-weight:800;line-height:20px;margin-bottom:5px}.gz-card .gz-title a{color:var(--link-color)}.gz-card .gz-description{color:var(--text-light-color);font-size:.75rem;font-weight:400;line-height:20px}.gz-card .gz-description a{color:var(--text-light-color)}.gz-description strong,.gz-description b{font-weight:600}.gz-card .gz-description .cta-orange{color:rgb(var(--giallo-01));font-weight:600;text-decoration:underline}.gz-card-content .gz-card-data{display:grid;grid-auto-flow:column;justify-content:start;align-items:center;gap:10px;white-space:nowrap;margin-top:auto;min-width:0;font-size:.75rem;font-weight:600;color:var(--text-light-color)}.gz-card-content .gz-card-data a{color:var(--text-light-color)}.gz-card-content .gz-card-data .gz-single-data-recipe{position:relative;display:grid;grid-auto-flow:column;align-items:center;justify-content:start;color:var(--text-light-color);height:25px;line-height:25px}.gz-card-content .gz-card-data .gz-single-data-recipe a{display:grid;grid-auto-flow:column;align-items:center;justify-content:start}.gz-card-content .gz-card-data .gz-single-data-recipe.gz-btn-link .gz-btn-icon{--icon-color: var(--text-light-color);height:25px;width:35px;margin-left:-5px}.gz-card-content .gz-card-data .gz-single-data-recipe.gz-btn-link .gz-icon.gz-btn-icon.gz-btn-icon-playinline{margin-left:-10px}.gz-card-content .gz-card-data .gz-single-data-recipe.gz-btn-link .gz-icon.gz-btn-icon.gz-btn-icon-lessons{position:relative;margin-left:-5px}.gz-card-content .gz-card-data .gz-single-data-recipe.gz-btn-link .gz-icon.gz-btn-icon.gz-btn-icon-lessons span{position:absolute;color:var(--bianco);font-size:.625rem;font-weight:600;top:2px;left:6px;width:20px;height:15px;line-height:18px}.gz-card-content .gz-card-data .gz-single-data-recipe.gz-btn-link .gz-btn-icon svg{height:35px;width:35px}.gz-card-content .gz-card-data .gz-single-data-recipe.gz-btn-link .gz-btn-label{font-size:.75rem;font-weight:600;color:var(--text-light-color)}.gz-card-content .gz-card-data .gz-card-info{white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden}.gz-card-content .gz-card-data .gz-card-info:before{content:attr(data-label);margin-right:4px;display:inline-block}.gz-card-data .gz-icon:not(.gz-btn-icon){height:18px;margin-right:5px}.gz-card-data .gz-icon.gz-icon-likesocial{height:15px}.gz-card-data .gz-icon.gz-icon-view{height:12px}.gz-card-data .gz-icon svg{height:100%;width:auto}.gz-card-data .gz-single-data-recipe.gz-blue{color:#528aff}.gz-card-data .gz-single-data-recipe.gz-orange{color:rgb(var(--giallo-01))}.gz-card-content.gz-centered{justify-content:center;text-align:center}.gz-card-content.gz-centered .gz-card-data{justify-content:center}.gz-card-data.gz-spaced{justify-content:inherit;grid-template-columns:min-content}.gz-card-data.gz-spaced .gz-single-data-recipe.gz-action-link{margin-left:auto;cursor:pointer;margin-right:-10px}.gz-card-vertical{height:230px}.gz-card-vertical .gz-card-content{min-height:70px;align-content:space-between;grid-template-rows:40px 25px}.gz-card-vertical .gz-card-image{height:140px}.gz-card-vertical .gz-title{max-height:40px;margin-bottom:0;align-self:center}.gz-card-vertical .gz-card-content-nodata{min-height:none;grid-template-rows:1fr}.gz-card-vertical .gz-card-content-nodata .gz-title{max-height:60px;-webkit-line-clamp:3}.gz-card .gz-author-info{position:absolute;left:15px;bottom:15px;right:15px;display:grid;grid-auto-flow:column;grid-template-columns:30px 1fr;grid-template-areas:"image content";align-items:center;column-gap:10px;z-index:10}.gz-card .gz-author-info .gz-author-image{grid-area:image;height:30px;border-radius:50%;box-shadow:0 0 0 1px var(--bianco);overflow:hidden;align-self:end}.gz-card .gz-author-info .gz-author-content{grid-area:content;display:grid;grid-auto-flow:row;align-content:center;font-size:.813rem;font-weight:700;line-height:13px;color:var(--bianco)}.gz-card .gz-author-info .gz-author-content:before{content:attr(data-label);font-size:.625rem;font-weight:600}.gz-card .gz-author-info .gz-author-content~.gz-label{display:none}.gz-card .gz-author-info~.gz-label{top:0;bottom:auto}.gz-card-type{position:absolute;top:8px;left:15px;z-index:10;color:var(--bianco)}.gz-card-type .gz-btn-icon{--icon-color: var(--bianco);margin-left:-8px;width:20px;height:20px}.gz-card-type .gz-btn-label{text-transform:uppercase;font-size:.563rem;font-weight:800;line-height:20px}.gz-card-type+.gz-author-info~.gz-label{display:none}.gz-card-type.gz-card-red-type{background-color:rgb(var(--rosso-01));border-radius:13px;padding:0 8px;left:8px}.gz-card-horizontal,.gz-card-horizontal>a{overflow:auto;grid-auto-flow:column;grid-template-areas:"card-image card-data";grid-template-columns:auto 1fr;grid-template-rows:none}.gz-card-horizontal>a{grid-area:card-data}.gz-card-horizontal{transition:box-shadow .3s ease-in-out}.gz-card-horizontal .gz-card-image:after,.gz-card-horizontal .gz-card-image img{border-radius:5px 0 0 5px}.gz-card-horizontal .gz-card-image{width:138px;height:auto}.gz-card-horizontal .gz-card-content{display:grid;grid-auto-flow:column;grid-template-columns:1fr 1fr;grid-template-rows:min-content min-content min-content;align-content:start;position:relative;padding:10px 15px 0;height:105px;max-height:105px;overflow:hidden}.gz-card-horizontal .gz-category{order:0;line-height:18px}.gz-card-horizontal .gz-title{order:2;grid-column:1/span 2;line-height:18px;height:100px;max-height:100px;overflow:hidden}.gz-card-horizontal .gz-description{order:3;font-size:.8125rem;line-height:18px}.gz-card-horizontal .gz-category,.gz-card-horizontal .gz-title,.gz-card-horizontal .gz-description{grid-column:1/span 2}.gz-card-horizontal .gz-category{grid-row:1}.gz-card-horizontal .gz-title{grid-row:2;margin-bottom:5px}.gz-card-horizontal .gz-description{grid-row:3}.gz-card-horizontal .gz-card-data.top{order:1;padding:4px 0 6px;background:var(--bianco);position:absolute;bottom:0;left:15px;right:15px;width:auto}.gz-card-horizontal .gz-card-data.bottom{order:4;display:none}.gz-card-horizontal .gz-link-more-recipe{order:5;height:24px;line-height:24px;background:var(--bianco);padding:4px 0 6px;width:60px;position:absolute;bottom:0;right:15px;text-align:right;display:none}.gz-card-horizontal .gz-link-more-recipe a{color:rgb(var(--giallo-01));font-size:.688rem;font-weight:700;padding-right:14px;position:relative;display:block}.gz-card-horizontal .gz-link-more-recipe a span{display:none}.gz-card-horizontal .gz-link-more-recipe a:after{content:"";display:inline-block;position:absolute;right:0;top:7px;border:solid rgb(var(--giallo-01));border-width:0 2px 2px 0;width:8px;height:8px;transform:rotate(-45deg)}.gz-card-horizontal .gz-iteration{position:absolute;display:block;width:24px;height:24px;border-radius:3px;background-color:rgb(var(--giallo-01));color:var(--bianco);font-size:.875rem;font-weight:600;line-height:24px;top:10px;left:126px;text-align:center;z-index:10}.gz-card-horizontal.gz-card-horizontal-small{transition:none;border:1px solid rgba(123,105,162,.15);box-sizing:border-box;max-height:60px;overflow:hidden}.gz-card-horizontal.gz-card-horizontal-small .gz-card-content{height:auto;padding:0 15px;align-self:center}.gz-card-horizontal.gz-card-horizontal-small .gz-card-content .gz-title{height:auto;margin-bottom:0;font-size:.875rem}.gz-card-horizontal.gz-card-horizontal-small .gz-card-image{width:72px;flex-shrink:0;overflow:hidden}.gz-card-full{position:relative;min-height:100px}.gz-card-full,.gz-card-full>a{grid-template-areas:"card-data";grid-template-rows:1fr}.gz-card-full .gz-card-image{position:absolute;top:0;left:0;width:100%;height:100%}.gz-card-full .gz-card-image:before{background:rgb(var(--viola-03));background:linear-gradient(180deg,rgba(var(--viola-03),.1) 30%,rgba(var(--viola-03),.8) 100%)}.gz-card-full .gz-card-image[data-image-count]:before{display:block}.gz-card-full .gz-card-content{position:relative;z-index:10;grid-area:inherit;align-self:end}.gz-card-full .gz-title{text-shadow:0 2x 10px rgb(var(--viola-03))}.gz-card-full .gz-title,.gz-card-full .gz-title a,.gz-card-full .gz-description,.gz-card-full .gz-description a,.gz-card-full .gz-card-data,.gz-card-full .gz-card-data a,.gz-card-full .gz-card-data .gz-single-data-recipe,.gz-card-full .gz-card-data .gz-single-data-recipe.gz-btn-link .gz-btn-label{color:var(--bianco)}.gz-card-full .gz-card-data .gz-single-data-recipe.gz-btn-link .gz-btn-icon{--icon-color: var(--bianco)}.gz-card-full-item .gz-card-content{min-height:50px;grid-template-rows:min-content auto 25px;grid-template-areas:"author" "title" "data"}.gz-card-full-item .gz-author-name{grid-area:author;margin-bottom:5px;font-size:.625rem;font-weight:600;line-height:15px;color:var(--bianco)}.gz-card-full-item .gz-title{grid-area:title;align-self:end;margin-bottom:5px}.gz-card-full-item .gz-card-data{grid-area:data}.gz-card-full-item .gz-card-image:after{content:"";display:block;position:absolute;z-index:2;top:0;left:0;width:100%;height:100%;background:rgb(var(--giallo-01));background:linear-gradient(270deg,rgba(var(--giallo-01),.2) 0%,rgba(var(--giallo-01),0) 100%);pointer-events:none}.gz-card-full-item .gz-author-info{top:initial;left:0;right:0;bottom:85px;grid-template-columns:none;grid-template-areas:none;column-gap:inherit;align-items:initial;justify-content:center}.gz-card-full-item .gz-author-info .gz-author-image{height:90px;width:90px;box-shadow:none}.gz-card-full-item .gz-author-image picture:after,#gz-past-live-list-swiper .gz-author-image picture:after,.gz-modal-live-ambassador .gz-author-card picture:after{content:"";display:inline-block;position:absolute;bottom:0;left:0;z-index:0;height:100%;width:100%;background:linear-gradient(180deg,rgba(var(--viola-03),0) 66%,rgba(var(--viola-03),.92) 100%);border-radius:50%}.gz-card-full-item.gz-live-mainevent .gz-author-info .gz-author-image{height:120px;width:120px}.gz-card-full-item .gz-author-info .gz-author-content{position:absolute;display:block;font-family:'zooja-pro',sans-serif;font-size:2.5rem;font-weight:400;line-height:45px;height:45px;overflow:hidden;color:rgb(var(--giallo-01));text-shadow:2px 6px 7px rgba(var(--viola-03),.2);bottom:-10px;left:50%;transform:translateX(-50%);text-align:center}.gz-card-full-item .gz-author-info .gz-author-content:before{display:none}.gz-card-school-feed{width:130px;margin:0 auto}.gz-card-school-feed .gz-author-image{margin-bottom:15px;border-radius:50%;overflow:hidden}.gz-card-school-feed .gz-author-image img{width:130px;height:130px}.gz-card-school-feed .gz-author-content{color:rgb(var(--viola-03));font-weight:800;font-size:.875rem;line-height:20px;text-align:center}.gz-card-school-feed .gz-btn-icon.gz-action-icon{width:40px;height:40px;top:0;left:calc(50% + 30px)}.gz-card-school-feed.gz-highlight .gz-author-image:after{content:"Corso in arrivo";position:absolute;left:0;right:0;bottom:0;font-size:.563rem;font-weight:700;line-height:10px;color:var(--bianco);text-transform:uppercase;text-align:center;padding:7px 30px 8px;background:linear-gradient(270deg,#8a209d 0,#cf43a2 100%)}.gz-card-rivista,.gz-card-rivista>a,.gz-card-pdf,.gz-card-pdf>a{grid-template-rows:1fr;grid-template-areas:"card-data"}.gz-card-rivista,.gz-card-pdf{box-sizing:border-box;box-shadow:none;background-color:rgb(var(--bianco-02));border:2px solid rgb(var(--bianco-03))}.gz-card-rivista .gz-card-image,.gz-card-pdf .gz-card-image{position:absolute;top:20px;left:50%;transform:translateX(-50%);width:calc(100% - 60px);height:auto;box-shadow:0 5px 20px rgba(var(--viola-03),.2)}.gz-card-pdf .gz-card-image{background-color:var(--bianco);padding-bottom:calc((4/5*(100% - 60px)) + 50px)}.gz-card-pdf .gz-card-image picture{height:0;width:100%;position:absolute;display:flex;justify-content:center;align-items:center;padding-bottom:calc((4/5*100%));overflow:hidden}.gz-card-pdf .gz-card-image picture:before{content:"";display:block;position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;background-color:rgba(var(--viola-03),.1);pointer-events:none}.gz-card-pdf .gz-card-image picture:after{content:"";display:block;position:absolute;z-index:2;top:0;left:0;width:100%;height:100%;background:#4e3969;background:linear-gradient(90deg,rgba(var(--viola-03),0) 0%,rgba(var(--viola-03),.75) 100%);opacity:.5;pointer-events:none}.gz-card-pdf .gz-card-image picture img{position:absolute;top:50%;transform:translateY(-50%)}.gz-card-pdf .gz-card-image .gz-icon{position:absolute;display:block;width:40px;height:40px;right:0;top:0;z-index:10;--icon-color: var(--bianco)}.gz-card-pdf .gz-card-image-info{position:absolute;width:100%;height:50px;box-sizing:border-box;padding:10px 15px;left:0;bottom:0;display:flex;align-content:center}.gz-card-pdf .gz-card-image-info .gz-title{font-size:.813rem;text-align:center;max-height:30px;line-height:15px;width:100%}.gz-card-rivista .gz-card-image:before,.gz-card-pdf .gz-card-image:before{display:none}.gz-card-rivista .gz-card-content,.gz-card-pdf .gz-card-content{align-self:end;grid-template-rows:1fr;min-height:auto;padding-bottom:10px}.gz-card-rivista .gz-title,.gz-card-pdf .gz-subtitle{font-size:.813rem;font-weight:700;-webkit-line-clamp:1;max-height:20px;text-transform:uppercase}.gz-card-pdf .gz-subtitle{line-height:20px}.gz-card-rivista .gz-title,.gz-card-rivista .gz-title a,.gz-card-pdf .gz-subtitle,.gz-card-pdf .gz-subtitle a{color:rgb(var(--grigio-01))}.gz-card-course-lesson .gz-card-title{position:absolute;top:15px;left:20px;font-size:.813rem;font-weight:600;color:var(--bianco);z-index:1;text-shadow:0 2px 10px rgb(var(--viola-03))}.gz-card-course-lesson .gz-card-image:after{content:"";display:block;position:absolute;z-index:2;top:0;left:0;width:100%;height:100%;background:rgb(var(--giallo-01));background:linear-gradient(270deg,rgba(var(--giallo-01),.2) 0%,rgba(var(--giallo-01),0) 100%);pointer-events:none}.gz-card-course-lesson .gz-card-content{display:grid;box-sizing:border-box;background-color:var(--bianco);grid-auto-flow:column;grid-template-columns:70px 1fr min-content;grid-template-rows:auto;grid-template-areas:"image name new";height:70px;padding:10px;border-radius:5px;box-shadow:var(--box-shadow);margin:auto 20px 20px}.gz-card-course-lesson .gz-card-content .gz-image{grid-area:image;width:100%;height:50px;border-radius:3px;position:relative;overflow:hidden}.gz-card-course-lesson .gz-card-content .gz-title{color:var(--link-color);font-size:.813rem;font-weight:700;line-height:15px;margin:0 0 0 15px;max-height:45px;-webkit-line-clamp:3}.gz-card-course-lesson .gz-card-content .gz-card-type{position:relative;height:20px;top:auto;left:auto;margin-left:15px;align-self:center}.gz-card-soon,.gz-card-soon:after{position:absolute;top:0;left:0;height:100%;width:100%}.gz-card-soon{content:"";background-color:rgba(149,31,181,.15);z-index:20}.gz-card-soon:after{font-size:.625rem;font-weight:800;line-height:16px;color:var(--bianco);box-sizing:border-box;content:"PROSSIMAMENTE";display:flex;justify-content:center;align-items:center;background-color:rgba(var(--nero-01),.45);pointer-events:none}.gz-card-soon~a{pointer-events:none}@media all and (max-width:480px){.gz-grid-item .gz-card-vertical{height:320px}.gz-grid-item .gz-card-vertical .gz-card-image{height:230px}}@media all and (max-width:999px){.gz-card-horizontal.gz-vertical-view,.gz-card-horizontal.gz-vertical-view>a{grid-auto-flow:row;grid-template-columns:none;grid-template-areas:"card-image" "card-data";grid-template-rows:auto 1fr}.gz-card-horizontal.gz-vertical-view .gz-card-image{width:100%}.gz-card-horizontal.gz-vertical-view .gz-card-image:after,.gz-card-horizontal.gz-vertical-view .gz-card-image img{border-radius:5px 5px 0 0}.gz-card-horizontal.gz-vertical-view .gz-card-content{height:135px;max-height:none}.gz-card-horizontal.gz-vertical-view .gz-category{line-height:20px;height:20px}.gz-card-horizontal.gz-vertical-view .gz-title{line-height:20px;height:auto;max-height:none;margin-bottom:0}.gz-card-horizontal.gz-vertical-view .gz-description{line-height:20px;margin:0}.gz-card-horizontal.gz-vertical-view .gz-card-data.top{width:calc(100% - 30px - 60px);bottom:0;left:15px}}@media all and (min-width:375px){.gz-card-horizontal .gz-link-more-recipe{display:inline-block}}@media only screen and (min-width:768px){.gz-card-content .gz-card-data{left:20px;right:20px}}@media all and (min-width:1000px){.gz-label .gz-btn-icon{width:25px;height:25px}.gz-label .gz-btn-label{font-size:.688rem;line-height:25px}.gz-card .gz-title{font-size:1.125rem;line-height:25px}.gz-card-vertical{height:250px}.gz-card-vertical .gz-card-image{height:150px}.gz-card-vertical .gz-card-content{min-height:80px;grid-template-rows:50px 25px;padding:10px 20px}.gz-card-vertical .gz-title{max-height:50px}.gz-card-vertical .gz-card-content-nodata{min-height:none;grid-template-rows:1fr}.gz-card-vertical .gz-card-content-nodata .gz-title{max-height:75px}.gz-user-sidebar+.gz-user-content .gz-card-vertical{height:240px}.gz-user-sidebar+.gz-user-content .gz-card-vertical:not(.gz-card-full):not(.gz-card-rivista):not(.gz-card-pdf):not(.gz-card-photocomments):not(.gz-card-course-lesson) .gz-card-image{height:150px}.gz-user-sidebar+.gz-user-content .gz-card-vertical:not(.gz-card-rivista):not(.gz-card-pdf):not(.gz-card-photocomments):not(.gz-card-course-lesson):not(.gz-card-full-item) .gz-card-content{min-height:70px;grid-template-rows:40px 25px;padding:10px 20px}.gz-user-sidebar+.gz-user-content .gz-card-vertical:not(.gz-card-rivista):not(.gz-card-pdf):not(.gz-card-photocomments):not(.gz-card-course-lesson) .gz-title{font-size:1rem;line-height:20px;max-height:40px}.gz-card .gz-author-info{position:absolute;left:20px;right:20px;grid-template-columns:40px 1fr}.gz-card .gz-author-info .gz-author-image{height:40px}.gz-card .gz-author-info .gz-author-content{font-size:.938rem;line-height:15px}.gz-card .gz-author-info .gz-author-content:before{font-size:.75rem}.gz-card-vertical.gz-card-rivista,.gz-card-vertical.gz-card-pdf,.gz-rivista .gz-card-vertical.gz-card-fake,.gz-contenuti-sfogliabili .gz-card-vertical.gz-card-fake{height:260px}.gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-rivista,.gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-pdf,[class^=gz-index] .gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-fake,.gz-rivista .gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-fake,.gz-contenuti-sfogliabili .gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-fake{height:210px}.gz-card-rivista .gz-card-image,.gz-user-sidebar+.gz-user-content .gz-card-rivista .gz-card-image,.gz-card-pdf .gz-card-image,.gz-user-sidebar+.gz-user-content .gz-card-pdf .gz-card-image{width:calc(100% - 60px);height:auto}.gz-card-pdf .gz-card-image{padding-bottom:calc((4/5*(100% - 60px)) + 50px)}.gz-card-rivista .gz-card-content,.gz-card-pdf .gz-card-content{grid-template-rows:1fr;min-height:auto;padding-bottom:10px}.gz-card-rivista .gz-title,.gz-card-pdf .gz-title{font-size:.813rem}.gz-card-pdf .gz-subtitle{line-height:25px;max-height:25px}.gz-card-full .gz-card-image{position:absolute;top:0;left:0;width:100%;height:100%}.gz-card-full-item .gz-card-content{min-height:55px;grid-template-rows:min-content auto 25px}.gz-card-full-item .gz-author-name{font-size:.75rem}.gz-card-full-item .gz-author-info{top:initial;left:0;right:0;bottom:100px;grid-template-columns:none}.gz-card-full-item .gz-author-info .gz-author-image{height:100px;width:100px}.gz-card-full-item.gz-live-mainevent .gz-author-info .gz-author-image{height:140px;width:140px}.gz-card-full-item .gz-author-info .gz-author-content{position:absolute;display:block;text-align:center;font-family:'zooja-pro',sans-serif;font-size:2.5rem;font-weight:400;line-height:45px;height:45px;overflow:hidden;color:rgb(var(--giallo-01));text-shadow:2px 6px 7px rgba(var(--viola-03),.2);bottom:-10px;left:50%;transform:translateX(-50%)}.gz-card-full-item .gz-author-info .gz-author-content:before{display:none}.gz-card-course-lesson .gz-card-content{grid-template-rows:auto;min-height:70px;padding:10px}.gz-card-horizontal .gz-card-image{width:285px;height:auto}.gz-card-horizontal .gz-card-content{padding:15px 20px;height:198px;max-height:198px;overflow:hidden}.gz-card-horizontal .gz-category{font-size:.75rem;height:24px;line-height:24px;grid-column:1;margin-bottom:10px}.gz-card-horizontal .gz-title{font-size:1.875rem;line-height:32px;margin-bottom:10px;height:auto;max-height:none}.gz-card-horizontal .gz-title a:hover{text-decoration:underline}.gz-card-horizontal .gz-description{font-size:.875rem;line-height:20px;margin-top:auto}.gz-card-horizontal .gz-card-data.top{padding:0;left:auto;right:auto;position:relative;justify-self:end;margin-bottom:10px;grid-column:2;grid-row:1}.gz-card-horizontal .gz-card-data.bottom{display:grid;background:var(--bianco);position:absolute;bottom:0;left:20px;right:20px;padding:15px 0 0}.gz-card-horizontal .gz-link-more-recipe{right:20px;padding:15px 0 0}.gz-card-horizontal .gz-iteration{width:28px;height:28px;font-size:1.125rem;line-height:28px;top:15px;left:271px}.gz-card-horizontal.gz-card-horizontal-small{max-height:70px}.gz-card-horizontal.gz-card-horizontal-small .gz-card-content .gz-title{line-height:20px}.gz-card-horizontal.gz-card-horizontal-small .gz-card-image{width:80px}}@media all and (min-width:1200px){.gz-card-vertical{height:280px}.gz-card-vertical .gz-card-image{height:180px}.gz-user-sidebar+.gz-user-content .gz-card-vertical{height:250px}.gz-user-sidebar+.gz-user-content .gz-card-vertical:not(.gz-card-full):not(.gz-card-rivista):not(.gz-card-pdf):not(.gz-card-photocomments):not(.gz-card-course-lesson) .gz-card-image{height:150px}.gz-user-sidebar+.gz-user-content .gz-card-vertical:not(.gz-card-rivista):not(.gz-card-pdf):not(.gz-card-photocomments):not(.gz-card-course-lesson):not(.gz-card-full-item) .gz-card-content{min-height:80px;grid-template-rows:50px 25px;padding:10px 20px}.gz-user-sidebar+.gz-user-content .gz-card-vertical:not(.gz-card-rivista):not(.gz-card-pdf):not(.gz-card-photocomments):not(.gz-card-course-lesson) .gz-title{font-size:1.125rem;line-height:25px;max-height:50px}.gz-card-vertical.gz-card-rivista,.gz-card-vertical.gz-card-pdf,.gz-rivista .gz-card-vertical.gz-card-fake,.gz-contenuti-sfogliabili .gz-card-vertical.gz-card-fake{height:290px}.gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-rivista,.gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-pdf,[class^=gz-index] .gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-fake,.gz-rivista .gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-fake,.gz-contenuti-sfogliabili .gz-user-sidebar+.gz-user-content .gz-card-vertical.gz-card-fake{height:250px}.gz-card-rivista .gz-card-image,.gz-user-sidebar+.gz-user-content .gz-card-rivista .gz-card-image,.gz-card-pdf .gz-card-image,.gz-user-sidebar+.gz-user-content .gz-card-pdf .gz-card-image{width:calc(100% - 80px);height:auto}.gz-card-pdf .gz-card-image{padding-bottom:calc((4/5*(100% - 80px)) + 60px)}.gz-card-pdf .gz-card-image-info{bottom:5px}.gz-card-rivista .gz-card-content,.gz-card-pdf .gz-card-content{grid-template-rows:1fr;min-height:auto;padding-bottom:10px}.gz-card-rivista .gz-title,.gz-card-pdf .gz-title{font-size:.813rem}.gz-card-full .gz-card-image{position:absolute;top:0;left:0;width:100%;height:100%}.gz-card-horizontal .gz-card-image{height:auto}.gz-card-horizontal .gz-card-content{padding:15px 30px}.gz-card-horizontal .gz-card-data.bottom{left:30px;right:30px}.gz-card-horizontal .gz-link-more-recipe{right:30px}.gz-card-horizontal .gz-card-content .gz-link-more-recipe{width:130px}.gz-card-horizontal .gz-card-content .gz-link-more-recipe a span{display:inline}}@supports (-webkit-line-clamp:3){.gz-card .gz-title,.gz-card .gz-title a,.gz-card .gz-subtitle,.gz-card .gz-subtitle a{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.gz-card-horizontal .gz-title,.gz-card-horizontal .gz-title a{-webkit-line-clamp:3}.gz-line-clamp{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.gz-line-clamp-3{-webkit-line-clamp:3}.gz-line-clamp-2{-webkit-line-clamp:2}.gz-line-clamp-1{-webkit-line-clamp:1}@media all and (min-width:1000px){.gz-card-horizontal .gz-title,.gz-card-horizontal .gz-title a{-webkit-line-clamp:2}.gz-card-horizontal:not(.gz-card-generic_adv):not(.gz-card-simple_content) .gz-description{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.gz-card-horizontal:not(.gz-card-generic_adv) .gz-title,.gz-card-horizontal:not(.gz-card-generic_adv) .gz-title a{-webkit-line-clamp:2}.gz-line-clamp-3-desktop{-webkit-line-clamp:3}.gz-line-clamp-2-desktop{-webkit-line-clamp:2}}}
        
	.gz-link-back{font-weight:600;color:var(--nero-01);text-transform:uppercase;font-size:.875rem;letter-spacing:1px;display:block;margin:0 0 20px;line-height:20px}.gz-link-back .gz-arrow-wrap{display:inline-block;width:20px;height:20px;line-height:20px;text-align:center;position:relative;top:-1px}.gz-title-cnt{display:flex;justify-content:space-between;align-content:flex-start}.gz-custom-title{color:var(--nero-01);font-size:1rem;font-weight:600;letter-spacing:.18px;line-height:1.1em}.gz-custom-title span.orange{color:rgb(var(--giallo-01))}.gz-filters-selected ul{font-size:0}.gz-filters-selected ul li{display:inline-block;margin-right:15px}.gz-filters-selected ul li a{color:var(--nero-01);font-size:.75rem;font-weight:500}.gz-filters-selected ul li a span{vertical-align:middle}.gz-filters-selected ul li a .gz-icon{border:2px solid #a8a7a6;border-radius:50%;width:12px;height:12px;background-color:#a8a7a6;-webkit-transition:transform .2s ease-in-out;-o-transition:transform .2s ease-in-out;-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out}.gz-filters-selected ul li a .gz-value-filter{margin-left:1px}.gz-filters-selected ul li a:hover .gz-icon{background-color:rgb(var(--giallo-01));border-color:rgb(var(--giallo-01));-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.gz-filters-selected ul li a:hover .gz-icon:after{display:none}.gz-description-listing{width:100%;font-size:1rem;font-weight:400;color:#444}.gz-description-listing a{color:rgb(var(--giallo-01));font-weight:600;text-decoration:underline}.gz-description-listing p,.gz-description-listing strong{font-size:100%}.gz-description-listing strong{font-weight:600}.gz-description-listing p{color:#0a0a0a;margin:0;padding:0 0 20px}.gz-description-listing p:last-child{padding:0}.gz-description-listing h2,.gz-description-listing h2 a,.gz-description-listing h3{color:var(--nero-01);font-weight:600}.gz-description-listing h2{font-size:16px;margin-bottom:5px}.gz-description-listing h3{font-size:14px;margin-bottom:5px}.gz-description-listing ul{padding:0 0 0 13px}.gz-description-listing ul li:before{content:'\2022';display:block;position:relative;max-width:0;max-height:0;left:-10px;top:0;color:#3d3364;font-size:20px}.gz-description-with-more.collapsible:before{background-color:var(--body-bg-color);background:-webkit-linear-gradient(top,rgba(247,246,248,0) 0,#f7f6f8 90%,#f7f6f8 100%);background:-webkit-gradient(linear,left top,left bottom,from(rgba(247,246,248,0)),color-stop(90%,#f7f6f8),to(#f7f6f8));background:-o-linear-gradient(top,rgba(247,246,248,0) 0,#f7f6f8 90%,#f7f6f8 100%);background:linear-gradient(to bottom,rgba(247,246,248,0) 0,#f7f6f8 90%,#f7f6f8 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00F7F6F8', endColorstr='#F7F6F8',GradientType=0 )}.gz-description-listing .read-more a{font-weight:400;color:#444;background:var(--body-bg-color)}@media all and (max-width:375px){.row a[data-modaltoopen]{padding:10px 10px}.row a[data-modaltoopen] .gz-icon{height:16px;margin-right:0}}@media all and (max-width:767px){main.gz-wrapper .gz-inner{margin-left:0;margin-right:0}}@media all and (min-width:1000px){.gz-custom-title{font-size:1.625rem;font-weight:500;letter-spacing:.29px}}

    </style>
    <link rel="preload" href="https://www.giallozafferano.it/style/min/common.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" as="style">
    <link rel="preload" href="https://www.giallozafferano.it/style/min/common-desktop.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" as="style">
    
	<link rel="preload" href="https://www.giallozafferano.it/style/min/listing.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" as='style'>
	<link rel="preload" href="https://www.giallozafferano.it/style/min/listing-desktop.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" as='style'>

    <link rel="preload" href="https://www.giallozafferano.it/js/min/common.min.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" as="script">
    <link rel="preload" href="https://www.giallozafferano.it/js/min/gzheader.min.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" as="script">
    <link rel="preload" href="https://cdn.adsafeprotected.com/iasPET.1.js" as="script">
    <link rel="preload" href="https://c.amazon-adsystem.com/aax2/apstag.js" as="script">
    <link rel="preload" href="https://securepubads.g.doubleclick.net/tag/js/gpt.js" as="script">
    <link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=UA-678608-2" as="script">
    <link rel="preload" href="https://dafne.sirio.stbm.it/utility-fe/prod/general/network.common.v3.js" as="script">
    <link rel="stylesheet" href="https://www.giallozafferano.it/style/min/common.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" type="text/css" media="print" data-media="all" onload="this.media = this.getAttribute('data-media')" />
    <noscript><link rel="stylesheet" media="all" href="https://www.giallozafferano.it/style/min/common.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379"></noscript>    
    <link rel="stylesheet" href="https://dafne.sirio.stbm.it/native-prod/gz/css/nativeRichPage.css" type="text/css" media="print" data-media="all" onload="this.media = this.getAttribute('data-media')" class="nativeRichPageCss"/>
    <noscript><link rel="stylesheet" media="all" href="https://dafne.sirio.stbm.it/native-prod/gz/css/nativeRichPage.css" class="nativeRichPageCss"></noscript>
    <link rel="stylesheet" href="https://www.giallozafferano.it/style/min/common-desktop.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" type="text/css" media="print" data-media="(min-width: 1000px)" onload="this.media = this.getAttribute('data-media')" />
    <noscript><link rel="stylesheet" media="all" href="https://www.giallozafferano.it/style/min/common-desktop.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379"></noscript>
    
	<link rel="stylesheet" href="https://www.giallozafferano.it/style/min/listing.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" type="text/css" media="print" data-media="all" onload="this.media = this.getAttribute('data-media')" />
	<noscript><link rel="stylesheet" media="all" href="https://www.giallozafferano.it/style/min/listing.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379"></noscript>
	<link rel="stylesheet" href="https://www.giallozafferano.it/style/min/listing-desktop.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" type="text/css" media="print" data-media="(min-width: 1000px)" onload="this.media = this.getAttribute('data-media')" />
	<noscript><link rel="stylesheet" media="all" href="https://www.giallozafferano.it/style/min/listing-desktop.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379"></noscript>

    
    <link rel="apple-touch-icon" href="https://www.giallozafferano.it/apple-touch-icon.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" href="https://www.giallozafferano.it/apple-touch-icon-precomposed.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" sizes="60x60" href="https://www.giallozafferano.it/style/images/icons/apple-icon-60x60.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" sizes="72x72" href="https://www.giallozafferano.it/style/images/icons/apple-icon-72x72.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" sizes="76x76" href="https://www.giallozafferano.it/style/images/icons/apple-icon-76x76.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" sizes="114x114" href="https://www.giallozafferano.it/style/images/icons/apple-icon-114x114.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" sizes="120x120" href="https://www.giallozafferano.it/style/images/icons/apple-icon-120x120.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" sizes="144x144" href="https://www.giallozafferano.it/style/images/icons/apple-icon-144x144.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" sizes="152x152" href="https://www.giallozafferano.it/style/images/icons/apple-icon-152x152.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" sizes="180x180" href="https://www.giallozafferano.it/style/images/icons/apple-icon-180x180.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="apple-touch-icon" href="https://www.giallozafferano.it/style/images/icons/favicon-512x512.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="icon" type="image/png" sizes="512x512"  href="https://www.giallozafferano.it/style/images/icons/favicon-512x512.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="icon" type="image/png" sizes="192x192"  href="https://www.giallozafferano.it/style/images/icons/android-icon-192x192.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="icon" type="image/png" sizes="32x32" href="https://www.giallozafferano.it/style/images/icons/favicon-32x32.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="icon" type="image/png" sizes="96x96" href="https://www.giallozafferano.it/style/images/icons/favicon-96x96.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="icon" type="image/png" sizes="16x16" href="https://www.giallozafferano.it/style/images/icons/favicon-16x16.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <link rel="manifest" href="/style/images/icons/manifest.json?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="https://www.giallozafferano.it/style/images/icons/ms-icon-144x144.png?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379">
    <meta name="theme-color" content="#ffffff">
    <link rel="shortcut icon" href="https://www.giallozafferano.it/favicon.ico?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" type="image/ico" />
    <script>var inSpecial=null</script>
						<script type="application/ld+json">
				{"@context":"https:\/\/schema.org","@type":"ItemList","itemListElement":[{"@type":"ListItem","position":1,"url":"http:\/\/ricette.giallozafferano.it\/Patate-al-forno.html"},{"@type":"ListItem","position":2,"url":"http:\/\/ricette.giallozafferano.it\/Gateau-di-patate.html"},{"@type":"ListItem","position":3,"url":"http:\/\/ricette.giallozafferano.it\/Pure-di-patate.html"},{"@type":"ListItem","position":4,"url":"http:\/\/ricette.giallozafferano.it\/Cavolfiori-gratinati.html"},{"@type":"ListItem","position":5,"url":"http:\/\/ricette.giallozafferano.it\/Sformatini-di-spinaci.html"},{"@type":"ListItem","position":6,"url":"http:\/\/ricette.giallozafferano.it\/rosti.html"},{"@type":"ListItem","position":7,"url":"http:\/\/ricette.giallozafferano.it\/Insalata-di-finocchi-e-arance.html"},{"@type":"ListItem","position":8,"url":"http:\/\/ricette.giallozafferano.it\/Sformato-di-verdure.html"},{"@type":"ListItem","position":9,"url":"http:\/\/ricette.giallozafferano.it\/Broccoli-gratinati.html"},{"@type":"ListItem","position":10,"url":"http:\/\/ricette.giallozafferano.it\/Melanzane-a-funghetto.html"},{"@type":"ListItem","position":11,"url":"http:\/\/ricette.giallozafferano.it\/Caponata.html"},{"@type":"ListItem","position":12,"url":"http:\/\/ricette.giallozafferano.it\/Cavoletti-di-Bruxelles-in-padella.html"},{"@type":"ListItem","position":13,"url":"http:\/\/ricette.giallozafferano.it\/Carciofi-alla-romana.html"},{"@type":"ListItem","position":14,"url":"http:\/\/ricette.giallozafferano.it\/Cipolline-in-agrodolce.html"},{"@type":"ListItem","position":15,"url":"http:\/\/ricette.giallozafferano.it\/Verdure-al-forno.html"}]}
			</script>
					<script type="application/ld+json">
				{"@context":"https:\/\/schema.org","@type":"Recipe","@id":"https:\/\/www.giallozafferano.it\/ricette-cat\/Contorni\/","name":"Contorni - Le ricette di GialloZafferano","image":"https:\/\/www.giallozafferano.it\/images\/242-24202\/Patate-al-forno_600x500.jpg"}
			</script>
					<script type="application/ld+json">
				{"@context":"http:\/\/schema.org","@type":"Organization","name":"GialloZafferano","url":"https:\/\/www.giallozafferano.it\/","logo":"https:\/\/www.giallozafferano.it\/style\/images\/logo-giallozafferano.svg","sameAs":["https:\/\/www.facebook.com\/GialloZafferanolive\/","https:\/\/www.instagram.com\/giallozafferano\/","https:\/\/www.youtube.com\/user\/GialloZafferanoTV","https:\/\/twitter.com\/giallozafferano"]}
			</script>
			
	
    </head>
<body class="gz-ricette-cat gz-it"  data-pageaction="ricette-cat"  >
    <div id="fb-root"></div>
    <ame-mh selector-wrapper=".gz-page" bg-mh="#4E3969"></ame-mh>
    <div class="gz-page">
        <header class="gz-header" id="gz-header">
    <div class="gz-header-hamburger gz-btn-link" id="gz-header-hamburger">
        <span class="gz-icon gz-btn-icon">
            <svg viewBox="0 0 50 50">
                <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-burger" />
            </svg>
        </span>
    </div>
    <div class="gz-header-container">
                <div class="gz-header-logo">
                    <a href="https://www.giallozafferano.it/" title="Le Ricette di GialloZafferano.it">Le Ricette di GialloZafferano.it</a>
                </div>
                <nav class="gz-header-nav" id="gz-header-nav">
            <ul class="gz-header-top-menu">
                <li class="gz-header-top-menu-item">
                    <div class="gz-btn-link">
                        <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/" title="Ricette">Ricette</a></div>
                        <span class="gz-icon gz-btn-more">
                            <svg viewBox="0 0 40 40">
                                <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-arrow" />
                            </svg>
                        </span>
                    </div>
                    <ul class="gz-header-menu gz-header-mainmenu">
                <li class="gz-header-menu-item">    
        <input class="gz-header-menu-input" type="checkbox" id="ricette" checked>
        <label class="gz-btn-link" for="ricette">
            <span class="gz-icon gz-btn-icon">
                <svg viewBox="0 0 50 50">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-ricette" />
                </svg>
            </span>
            <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/" title="Tutte le ricette">Tutte le ricette</a></div>
                    </label>
        <ul class="gz-header-submenu">
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Antipasti/" title="Antipasti">Antipasti</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Primi/" title="Primi piatti">Primi piatti</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Secondi-piatti/" title="Secondi piatti">Secondi piatti</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Dolci-e-Desserts/" title="Dolci">Dolci</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Lievitati/" title="Lievitati">Lievitati</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Piatti-Unici/" title="Piatti unici">Piatti unici</a></div>
            </li>
                    </ul>
    </li>
                                                                                                                
</ul>

                </li>
            </ul>
        </nav>
        <div class="gz-header-search-container">
            <form class="gz-header-search-form">
                <input type="text" class="gz-header-search-input" autocomplete="off" name="search" id="gz-header-search-input">
                <button type="submit" value="" class="gz-header-search" name="submit" id="gz-header-search-submit">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-lens" />
                        </svg>
                    </span>
                </button>
                <div class="gz-tendina"></div>
            </form>
            <div class="gz-header-search-close gz-btn-link" id="gz-header-search-close">
                <span class="gz-icon gz-btn-icon">
                    <svg viewBox="0 0 50 50">
                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-lens" />
                    </svg>
                </span>
            </div>
        </div>
    </div>

    <div class="gz-header-actions">
        <div class="gz-header-search gz-btn-link" id="gz-header-search">
            <span class="gz-icon gz-btn-icon">
                <svg viewBox="0 0 50 50">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-lens" />
                </svg>
            </span>
        </div>
        <a href="https://www.giallozafferano.com/" class="gz-header-flags" id="gz-header-translation-link" title="Original Italian Recipes - GialloZafferano Recipes">
            <div class="gz-header-flag gz-btn-link">
                <span class="gz-icon gz-btn-icon">
                    <svg viewBox="0 0 32 32">
                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-flag-usa" />
                    </svg>
                </span>
            </div>
            <div class="gz-header-flag gz-btn-link selected">
                <span class="gz-icon gz-btn-icon">
                    <svg viewBox="0 0 32 32">
                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-flag-ita" />
                    </svg>
                </span>
            </div>
        </a>
        <div class="gz-user-login gz-btn-link" id="gz-user-login">
            <span class="gz-btn-label">Accedi</span>
            <div class="gz-user-icon"></div>
            <span class="gz-icon gz-btn-more">
                <svg class="gz-header-icon-goto" viewBox="0 0 50 50">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-accedi-3px" />
                </svg>
                <svg class="gz-header-icon-arrow" viewBox="0 0 40 40">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-arrow" />
                </svg>
            </span>
        </div>
    </div>
</header>
<div class="gz-header-overlay" id="gz-header-overlay">
    <div class="gz-header-overlay-top">
        <div class="gz-header-overlay-close gz-btn-link" id="gz-header-overlay-close">
            <span class="gz-icon gz-btn-icon">
                <svg viewBox="0 0 50 50">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-burger-close" />
                </svg>
            </span>
        </div>
        <div class="gz-header-overlay-flags">
            <div class="gz-header-flag gz-btn-link selected">
                <span class="gz-icon gz-btn-icon">
                    <svg viewBox="0 0 32 32">
                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-flag-ita" />
                    </svg>
                </span>
            </div>
            <a href="https://www.giallozafferano.com/" class="gz-header-flag gz-btn-link" title="Original Italian Recipes - GialloZafferano Recipes">
                <span class="gz-icon gz-btn-icon">
                    <svg viewBox="0 0 32 32">
                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-flag-usa" />
                    </svg>
                </span>
            </a>
        </div>
    </div>
    
    <div class="gz-header-overlay-container" id="gz-header-overlay-container">
        <nav class="gz-header-overlay-nav">
            <ul class="gz-header-menu">
                <li class="gz-header-menu-item gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-home" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it" title="Homepage">Home</a></div>
                </li>
            </ul>
            <ul class="gz-header-menu gz-header-mainmenu">
                <li class="gz-header-menu-item">    
        <input class="gz-header-menu-input" type="checkbox" id="overlay-ricette" checked>
        <label class="gz-btn-link gz-btn-collapsible" for="overlay-ricette">
            <span class="gz-icon gz-btn-icon">
                <svg viewBox="0 0 50 50">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-ricette" />
                </svg>
            </span>
            <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/" title="Ricette">Ricette</a></div>
                        <span class="gz-icon gz-btn-more">
                <svg viewBox="0 0 40 40">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-arrow" />
                </svg>
            </span>
                    </label>
        <ul class="gz-header-submenu">
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Antipasti/" title="Antipasti">Antipasti</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Primi/" title="Primi piatti">Primi piatti</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Secondi-piatti/" title="Secondi piatti">Secondi piatti</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Dolci-e-Desserts/" title="Dolci">Dolci</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Lievitati/" title="Lievitati">Lievitati</a></div>
            </li>
                        <li class="gz-header-submenu-item gz-btn-link">
                <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/Piatti-Unici/" title="Piatti unici">Piatti unici</a></div>
            </li>
                    </ul>
    </li>
                                                                                                                
</ul>

                        <ul class="gz-header-menu">
                                                    <li class="gz-header-menu-title">Scopri anche</li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-ultime" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/Ultime-ricette/"  title="Ultime ricette">Ultime ricette</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-benessere" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/benessere/"  title="Benessere">Benessere</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-veloci" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-cat/facili-e-veloci/"  title="Ricette veloci">Ricette veloci</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-other" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/cucina-cinese-le-migliori-ricette"  title="Cucina cinese">Cucina cinese</a></div>
                </li>
                                                                        <li class="gz-header-menu-title">Le ricette di</li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-chef" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/le-ricette-degli-chef/"  title="Chef">Chef</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-creators" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/creators/"  title="Creators">Creators</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-topblogger" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/ricette-top-blogger/"  title="Top blogger">Top blogger</a></div>
                </li>
                                                                        <li class="gz-header-menu-title">Collaborazioni</li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-other" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/speciale/tutta-la-bonta-del-riso"  title="Idee con Curtiriso">Idee con Curtiriso</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-other" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/speciale/dolci-con-nutella"  title="Dolci con Nutella®">Dolci con Nutella®</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-other" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/mozzarella"  title="Mozzarella con Galbani">Mozzarella con Galbani</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-other" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/speciale/creazioni-convenienti"  title="In cucina con Paneangeli">In cucina con Paneangeli</a></div>
                </li>
                                                                        <li class="gz-header-menu-title">Servizi</li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-blog" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://blog.giallozafferano.it/community/"  title="Crea il tuo blog">Crea il tuo blog</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-shopping" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://shopping.giallozafferano.it/"  title="Shopping">Shopping</a></div>
                </li>
                                                                        <li class="gz-header-menu-title">Magazine</li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-news" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://magazine.giallozafferano.it/"  title="Novità">Novità</a></div>
                </li>
                                                                        <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-other" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/in-edicola"  title="In edicola">In edicola</a></div>
                </li>
                                                </ul>
                        
        </nav>
        <ul class="gz-header-overlay-store" id="gz-header-overlay-store">
            <li>
                <a href="https://apps.apple.com/it/app/giallozafferano-le-ricette/id384387249" class="gz-store-download-button" title="Apple Store">
                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20280%2080'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/style/images/apple-store.png" width="280" height="80" class="lazyload" loading="lazy" alt="Apple Store" />
                </a>
            </li>
            <li>
                <a href="https://play.google.com/store/apps/details?id=it.banzai.media.gzricette&hl=it&gl=US" class="gz-store-download-button" title="Google Play">
                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20280%2080'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/style/images/google-play.png" width="280" height="80" class="lazyload" loading="lazy" alt="Google Play" />
                </a>
            </li>
        </ul>
        <ul class="gz-header-overlay-social" id="gz-header-overlay-social">
            <li>
                <a href="https://www.facebook.com/GialloZafferanolive" target="_blank" rel="nofollow" class="gz-btn-link" title="Facebook">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 40 40">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-fb" />
                        </svg>
                    </span>
                    <span class="gz-btn-label">Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://it.pinterest.com/GialloZafferano/" target="_blank" rel="nofollow" class="gz-btn-link" title="Pinterest">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 40 40">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-pi" />
                        </svg>
                    </span>
                    <span class="gz-btn-label">Pinterest</span>
                </a>
            </li>
            <li>
                <a href="https://instagram.com/giallozafferano/" target="_blank" rel="nofollow" class="gz-btn-link" title="Instagram">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 40 40">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-ig" />
                        </svg>
                    </span>
                    <span class="gz-btn-label">Instagram</span>
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@giallozafferano" target="_blank" rel="nofollow" class="gz-btn-link" title="TikTok">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 40 40">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-tt" />
                        </svg>
                    </span>
                    <span class="gz-btn-label">TikTok</span>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/user/GialloZafferanoTV" target="_blank" rel="nofollow" class="gz-btn-link" title="YouTube">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 40 40">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-yt" />
                        </svg>
                    </span>
                    <span class="gz-btn-label">YouTube</span>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/GialloZafferano" target="_blank" rel="nofollow" class="gz-btn-link" title="X">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-x" />
                        </svg>
                    </span>
                    <span class="gz-btn-label">X</span>
                </a>
            </li>
        </ul>
    </div>
    <div class="gz-header-overlay-close-panel" id="gz-header-overlay-close-panel"></div>
</div>
<!-- div class="gz-user-overlay" id="gz-user-overlay">
    <div class="gz-user-overlay-container" id="gz-user-overlay-container">
        <div class="gz-user-profile" id="gz-user-profile">
            <div class="gz-user-icon" id="gz-user-profile-icon"></div>
            <div class="gz-user-profile-info" id="gz-user-profile-info"></div>
        </div>
        <nav class="gz-user-overlay-nav">
            <ul class="gz-header-menu" id="gz-user-header-menu">
                <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-ricettari" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/utente/ricettari.php" title="I tuoi ricettari" class="gz-open-modal-login" data-infoaction="ricettari" data-vars-action="I tuoi ricettari">I tuoi ricettari</a></div>
                </li>
                <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-fattedate" />
                        </svg>
                    </span>
                    <div class="gz-btn-label"><a href="https://www.giallozafferano.it/utente/fatte-da-me.php" title="Fatte da te" class="gz-open-modal-login" data-infoaction="fotocommenti" data-vars-action="Fatte da te">Fatte da te</a></div>
                </li>
                <li class="gz-btn-link">
                    <span class="gz-icon gz-btn-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-spesa" />
                        </svg>
                    </span>
                    <div class="gz-btn-label">
                        <a href="https://www.giallozafferano.it/utente/lista-della-spesa-dettaglio.php" title="Lista della spesa" class="gz-open-modal-login" data-infoaction="listaspesa" data-vars-action="Lista della spesa">Lista della spesa</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="gz-user-profile-logout" id="gz-user-profile-logout"></div>
    </div>
    <div class="gz-user-overlay-close-panel" id="gz-user-overlay-close-panel"></div>
</div -->
<script>
var GZheaderOptions = {
    topstrip: true,
    search: {
        visible: true,
        placeholder: "Cerca una ricetta",
        submitCallback: "doSubmit"
    }
};
</script>





        
        
        <div id="header_mediamond"></div>

        
<main class="gz-wrapper gz-sitewidth">
<div class="gz-innerwrapper">

	<div class="gz-content">


		<div class="gz-inner">

			<h1 class="gz-title-section gz-underline gz-mBottom4x">Ricette contorni</h1>

						<div class="gz-description-listing gz-description-with-more">
				<div class="inner">
					<h2><a title="Contorni sfiziosi" href="https://www.giallozafferano.it/ricette-cat/Contorni/Sfiziosi/">Contorni sfiziosi</a></h2>
<p>Vi vengono sempre in mente i soliti banali contorni? Scatenate la fantasia per dare alle <a title="Ricette con verdure" href="https://www.giallozafferano.it/ricette-cat/Verdura/">verdure</a> uno sprint in pi&ugrave;! Se vi piace giocare con le spezie, per esempio, la <a title="Zucca allo zenzero" href="https://ricette.giallozafferano.it/Zucca-allo-zenzero.html">zucca allo zenzero</a> vi conquister&agrave; con il suo retrogusto agrodolce e lievemente piccante. Se amate mangiare sano, l&rsquo;<a title="Insalata con avocado" href="https://ricette.giallozafferano.it/Insalata-con-avocado.html">insalata di avocado</a> vi sazier&agrave; con gusto e leggerezza, grazie alla nota croccante dei semi di zucca. Se siete dei fan dello street food, infine, concedetevi uno sfizio irresistibile come le <a title="Patate americane con cheddar e bacon" href="https://ricette.giallozafferano.it/Patate-americane-con-cheddar-e-bacon.html">patate americane con cheddar e bacon</a>, cos&igrave; ricche e sostanziose da poter essere gustate anche come piatto unico!</p>
<h2><a title="Contorni veloci" href="https://www.giallozafferano.it/ricette-cat/Contorni/facili-e-veloci/">Contorni veloci</a></h2>
<p>Anche quando siete di fretta, non accontentatevi della solita lattuga con i pomodori&hellip; l&rsquo;<a title="Insalata di arance" href="https://ricette.giallozafferano.it/Insalata-di-arance.html">insalata di arance</a> &egrave; una squisita variante invernale che vi permetter&agrave; di portare in tavola senza grandi sforzi tutto il gusto del mediterraneo! Anche i finocchi sono ottimi da gustare crudi in insalata, ma avete mai provato a cucinarli? I <a title="Finocchi in padella" href="https://ricette.giallozafferano.it/Finocchi-in-padella.html">finocchi in padella</a>, impreziositi con grani di pepe rosa e sale dell&rsquo;Himalaya, mantengono intatti sapore e croccantezza anche in questa versione! Per una cena autunnale a base di carne, invece, affidatevi ai <a title="Pleurotus alla griglia" href="https://ricette.giallozafferano.it/Pleurotus-alla-griglia.html">pleurotus alla griglia</a>, una variet&agrave; di funghi caratterizzata da una consistenza particolarmente soda e carnosa, conditi con una fresca emulsione al profumo di menta.</p>
<h2><a title="Contorni di verdure" href="https://www.giallozafferano.it/ricette-cat/Contorni/Verdura/">Contorni di verdure</a></h2>
<p>Fibre, vitamine, sali minerali, sono nutrienti preziosi per il nostro corpo e seguire una dieta ricca di verdura &egrave; un ottimo modo per farne una bella scorta! Per questo non rinunciate mai al contorno, ma rendetelo sempre diverso e appetitoso&hellip; gli <a title="Spinaci sfiziosi" href="https://ricette.giallozafferano.it/Spinaci-sfiziosi.html">spinaci sfiziosi</a>, per esempio, sono ancora pi&ugrave; invitanti grazie all&rsquo;aggiunta di besciamella fatta in casa e faranno venire l&rsquo;acquolina in bocca a grandi e bambini! Le <a title="Verdure gratinate al forno" href="https://ricette.giallozafferano.it/Verdure-gratinate-al-forno.html">verdure gratinate al forno</a> si distinguono per una saporita panatura a base di pangrattato, parmigiano e origano che conferisce un&rsquo;irresistibile nota croccante. Se invece siete fra coloro che amano assaporare la verdura in purezza, non perdetevi i <a title="Friggitelli in padella" href="https://ricette.giallozafferano.it/Friggitelli-in-padella.html">friggitelli in padella</a>, una tradizionale ricetta di stagione che esalta il gusto deciso di questa particolare variet&agrave; di peperoni!</p>
<h2><a title="Contorni per pesce" href="https://www.giallozafferano.it/ricette-cat/Contorni/Pesce/">Contorni per il pesce</a></h2>
<p>Quali sono i contorni migliori per accompagnare una portata di pesce? La scelta &egrave; ampia e, ovviamente, varia in base alla stagione: i <a title="Carciofi in padella" href="https://ricette.giallozafferano.it/Carciofi-in-padella.html">carciofi in padella</a> sono ideali da abbinare a molluschi e crostacei, ma vi consigliamo di provarli anche insieme al pesce azzurro, povero ma ricco di sapore! I <a title="Peperoni coi capperi" href="https://ricette.giallozafferano.it/Peperoni-coi-capperi.html">peperoni al forno coi capperi</a>, con la loro spiccata sapidit&agrave;, si sposano meravigliosamente con i semplici piatti di mare del nostro Mediterraneo, ravvivando la tavola con i colori allegri dell&rsquo;estate! Se siete indecisi e volete andare sul sicuro, la scelta non potr&agrave; che ricadere sull&rsquo;<a title="Insalata di patate al verde" href="https://ricette.giallozafferano.it/Insalata-di-patate-al-verde.html">insalata di patate al verde</a>, ottima sia calda che fredda e insaporita con un condimento a base di acciughe, prezzemolo e basilico.</p>
<ul>
<li><strong>Da non perdere</strong>: <a title="Contorni estivi" href="https://www.giallozafferano.it/contorni-estivi">Contorni estivi</a></li>
</ul>
				</div>
			</div>
			
			<div class="row">

				<a class="gz-button gz-button-light gz-button-with-icon gz-button-white gz-open-modal gz-mBottom3x" href="#" data-modaltoopen="categorie-listing">
				    <span class="gz-icon">
				    	<svg viewBox="0 0 27 27">
							<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#portate-orange"></use>
						</svg>
				    </span>
				    <span>PORTATE</span>
				</a>

				<a class="gz-button gz-button-light gz-button-with-icon gz-button-white gz-open-modal gz-mBottom3x" href="#" data-modaltoopen="filtri-listing">
				    <span class="gz-icon">
				    	<svg viewBox="0 0 30 29">
							<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#filtra-orange"></use>
						</svg>
				    </span>
				    <span>FILTRA</span>
				</a>

			</div>

		
		</div>

	    	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Patate-al-forno.html" title="Patate al forno">
								<picture>
					<img src="https://www.giallozafferano.it/images/242-24202/Patate-al-forno_360x300.jpg" width="360" height="300" alt="Patate al forno" fetchpriority="high" />
				</picture>
												<div class="gz-label gz-btn-link gz-benessere">
					<span class="gz-icon gz-btn-icon">
						<svg viewBox="0 0 50 50">
							<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-benessere" />
						</svg>
					</span>
					<span class="gz-btn-label">Benessere</span>
				</div>
												<span class="gz-icon gz-btn-icon gz-action-icon gz-action-icon-play">
					<svg viewBox="0 0 50 50">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-playbutton" />
					</svg>
				</span>
							</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="24202">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Patate-al-forno.html" title="Patate al forno">Patate al forno</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Patate-al-forno.html" title="Patate al forno">Come si fanno le patate al forno perfette? Grazie alla nostra ricetta passo passo cucinerai anche tu queste buonissime patate al forno croccanti!</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Patate-al-forno.html#anchor=gz-comments-anchor" title="Patate al forno">
												<span class="gz-icon">
							<svg viewBox="0 0 17 18">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-orange" />
							</svg>
						</span>
												320
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Patate-al-forno.html" title="Patate al forno">
												<span class="gz-icon">
							<svg viewBox="0 0 21 20">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-grey" />
							</svg>
						</span>
												4,2
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															1 h 10 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 261
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Patate-al-forno.html" title="Patate al forno">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Gateau-di-patate.html" title="Gateau di patate">
								<picture>
					<img src="https://www.giallozafferano.it/images/165-16591/Gateau-di-patate_360x300.jpg" width="360" height="300" alt="Gateau di patate" />
				</picture>
																<span class="gz-icon gz-btn-icon gz-action-icon gz-action-icon-play">
					<svg viewBox="0 0 50 50">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-playbutton" />
					</svg>
				</span>
							</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="16591">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Gateau-di-patate.html" title="Gateau di patate">Gateau di patate</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Gateau-di-patate.html" title="Gateau di patate">Come creare la croccante crosticina del gateau di patate ? Lo Chef Roberto Di Pinto vi guida nella realizzazione di questo piatto tradizionale!</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Gateau-di-patate.html#anchor=gz-comments-anchor" title="Gateau di patate">
												<span class="gz-icon">
							<svg viewBox="0 0 17 18">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-orange" />
							</svg>
						</span>
												657
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Gateau-di-patate.html" title="Gateau di patate">
												<span class="gz-icon">
							<svg viewBox="0 0 21 20">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-grey" />
							</svg>
						</span>
												4,2
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															1 h 40 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 317
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Gateau-di-patate.html" title="Gateau di patate">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Pure-di-patate.html" title="Purè di patate">
								<picture>
					<img src="https://www.giallozafferano.it/images/241-24127/Pure-di-patate_360x300.jpg" width="360" height="300" alt="Purè di patate" />
				</picture>
																<span class="gz-icon gz-btn-icon gz-action-icon gz-action-icon-play">
					<svg viewBox="0 0 50 50">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-playbutton" />
					</svg>
				</span>
							</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="24127">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Pure-di-patate.html" title="Purè di patate">Purè di patate</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Pure-di-patate.html" title="Purè di patate">Il purè di patate è una ricetta gustosa, molto diffusa anche all'estero, che può fare da contorno a diversi piatti di carne, di pesce o vegetariani.</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Pure-di-patate.html#anchor=gz-comments-anchor" title="Purè di patate">
												<span class="gz-icon">
							<svg viewBox="0 0 17 18">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-orange" />
							</svg>
						</span>
												205
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Pure-di-patate.html" title="Purè di patate">
												<span class="gz-icon">
							<svg viewBox="0 0 21 20">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-grey" />
							</svg>
						</span>
												4
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															1 h 20 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 356
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Pure-di-patate.html" title="Purè di patate">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
		<div class="gz-adv" id="gpt_native1"></div>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Cavolfiori-gratinati.html" title="Cavolfiori gratinati">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/184-18420/Cavolfiori-gratinati_360x300.jpg" width="360" height="300" alt="Cavolfiori gratinati" class="lazyload" loading="lazy" />
				</picture>
																<span class="gz-icon gz-btn-icon gz-action-icon gz-action-icon-play">
					<svg viewBox="0 0 50 50">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-playbutton" />
					</svg>
				</span>
							</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="18420">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Cavolfiori-gratinati.html" title="Cavolfiori gratinati">Cavolfiori gratinati</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Cavolfiori-gratinati.html" title="Cavolfiori gratinati">I cavolfiori gratinati sono un contorno ricco e gustoso: passati al forno con formaggio e besciamella verranno apprezzati anche dai più piccoli.</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Cavolfiori-gratinati.html#anchor=gz-comments-anchor" title="Cavolfiori gratinati">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												102
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Cavolfiori-gratinati.html" title="Cavolfiori gratinati">
												<span class="gz-icon">
							<svg viewBox="0 0 18 16">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-orange" />
							</svg>
						</span>
												4,3
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															50 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 209
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Cavolfiori-gratinati.html" title="Cavolfiori gratinati">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Sformatini-di-spinaci.html" title="Sformatini di spinaci">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/18-1869/Sformatini-di-spinaci_360x300.jpg" width="360" height="300" alt="Sformatini di spinaci" class="lazyload" loading="lazy" />
				</picture>
															</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="1869">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Sformatini-di-spinaci.html" title="Sformatini di spinaci">Sformatini di spinaci</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Sformatini-di-spinaci.html" title="Sformatini di spinaci">Gli sformatini di spinaci sono delicati e squisiti antipasti, serviti insieme ad una gustosa crema al parmigiano.</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Sformatini-di-spinaci.html#anchor=gz-comments-anchor" title="Sformatini di spinaci">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												178
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Sformatini-di-spinaci.html" title="Sformatini di spinaci">
												<span class="gz-icon">
							<svg viewBox="0 0 18 16">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-orange" />
							</svg>
						</span>
												4,6
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															45 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 460
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Sformatini-di-spinaci.html" title="Sformatini di spinaci">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/rosti.html" title="Rosti">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/230-23088/rosti_360x300.jpg" width="360" height="300" alt="Rosti" class="lazyload" loading="lazy" />
				</picture>
																<span class="gz-icon gz-btn-icon gz-action-icon gz-action-icon-play">
					<svg viewBox="0 0 50 50">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-playbutton" />
					</svg>
				</span>
							</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="23088">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/rosti.html" title="Rosti">Rosti</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/rosti.html" title="Rosti">Il rosti è una tipica ricetta svizzera a base di patate grattugiate che vengono cotte in padella fino a formare una croccante crosticina dorata!</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/rosti.html#anchor=gz-comments-anchor" title="Rosti">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												116
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/rosti.html" title="Rosti">
												<span class="gz-icon">
							<svg viewBox="0 0 18 16">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-orange" />
							</svg>
						</span>
												4,7
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															45 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 274
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/rosti.html" title="Rosti">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
		<div class="gz-adv-slot gz-adv-mobile gz-hide-desktop gz-mBottom5x">
		<div class="amePlaceholderBox">
    <div class="gz-adv-gpt" id="adv-gpt-box-mobile-container1"></div>
</div>
	</div>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Insalata-di-finocchi-e-arance.html" title="Insalata di finocchi e arance">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/11-1151/Insalata-di-finocchi-e-arance_360x300.jpg" width="360" height="300" alt="Insalata di finocchi e arance" class="lazyload" loading="lazy" />
				</picture>
												<div class="gz-label gz-btn-link gz-benessere">
					<span class="gz-icon gz-btn-icon">
						<svg viewBox="0 0 50 50">
							<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-benessere" />
						</svg>
					</span>
					<span class="gz-btn-label">Benessere</span>
				</div>
											</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="1151">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Insalata-di-finocchi-e-arance.html" title="Insalata di finocchi e arance">Insalata di finocchi e arance</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Insalata-di-finocchi-e-arance.html" title="Insalata di finocchi e arance">L'insalata di finocchi e arance è un contorno leggero e rinfrescante, facile da preparare, a base di frutta e verdura invernale.</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Insalata-di-finocchi-e-arance.html#anchor=gz-comments-anchor" title="Insalata di finocchi e arance">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												88
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Insalata-di-finocchi-e-arance.html" title="Insalata di finocchi e arance">
												<span class="gz-icon">
							<svg viewBox="0 0 18 16">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-orange" />
							</svg>
						</span>
												4,3
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					1
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															23 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 245
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Insalata-di-finocchi-e-arance.html" title="Insalata di finocchi e arance">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Sformato-di-verdure.html" title="Sformato di verdure">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/187-18705/Sformato-di-verdure_360x300.jpg" width="360" height="300" alt="Sformato di verdure" class="lazyload" loading="lazy" />
				</picture>
															</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="18705">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Sformato-di-verdure.html" title="Sformato di verdure">Sformato di verdure</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Sformato-di-verdure.html" title="Sformato di verdure">Lo sformato di verdure è un piatto semplice e sfizioso da preparare, con tante verdure e formaggio che si trasformano in un piatto golosissimo!</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Sformato-di-verdure.html#anchor=gz-comments-anchor" title="Sformato di verdure">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												188
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Sformato-di-verdure.html" title="Sformato di verdure">
												<span class="gz-icon">
							<svg viewBox="0 0 18 16">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-orange" />
							</svg>
						</span>
												4,4
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															1 h 30 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 531
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Sformato-di-verdure.html" title="Sformato di verdure">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Broccoli-gratinati.html" title="Broccoli gratinati">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/241-24110/Broccoli-gratinati_360x300.jpg" width="360" height="300" alt="Broccoli gratinati" class="lazyload" loading="lazy" />
				</picture>
															</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="24110">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Broccoli-gratinati.html" title="Broccoli gratinati">Broccoli gratinati</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Broccoli-gratinati.html" title="Broccoli gratinati">I broccoli gratinati sono un gustoso contorno invernale, una ricetta semplice per cucinare i broccoli in modo appetitoso. Scopri qui dosi e consigli!</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Broccoli-gratinati.html#anchor=gz-comments-anchor" title="Broccoli gratinati">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												56
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Broccoli-gratinati.html" title="Broccoli gratinati">
												<span class="gz-icon">
							<svg viewBox="0 0 18 16">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-orange" />
							</svg>
						</span>
												4,3
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															40 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 221
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Broccoli-gratinati.html" title="Broccoli gratinati">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
		<div class="gz-adv" id="gpt_native2"></div>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Melanzane-a-funghetto.html" title="Melanzane a funghetto">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/31-3123/Melanzane-a-funghetto_360x300.jpg" width="360" height="300" alt="Melanzane a funghetto" class="lazyload" loading="lazy" />
				</picture>
												<div class="gz-label gz-btn-link gz-benessere">
					<span class="gz-icon gz-btn-icon">
						<svg viewBox="0 0 50 50">
							<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-benessere" />
						</svg>
					</span>
					<span class="gz-btn-label">Benessere</span>
				</div>
											</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="3123">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Melanzane-a-funghetto.html" title="Melanzane a funghetto">Melanzane a funghetto</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Melanzane-a-funghetto.html" title="Melanzane a funghetto">Le melanzane a funghetto sono un contorto campano classico e gustoso a base di melanzane fritte e pomodori ramati, ottime anche per condire la pasta.</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Melanzane-a-funghetto.html#anchor=gz-comments-anchor" title="Melanzane a funghetto">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												60
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Melanzane-a-funghetto.html" title="Melanzane a funghetto">
												<span class="gz-icon">
							<svg viewBox="0 0 18 16">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-orange" />
							</svg>
						</span>
												4,5
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					1
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															40 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 104
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Melanzane-a-funghetto.html" title="Melanzane a funghetto">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Caponata.html" title="Caponata">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/196-19625/Caponata_360x300.jpg" width="360" height="300" alt="Caponata" class="lazyload" loading="lazy" />
				</picture>
																<span class="gz-icon gz-btn-icon gz-action-icon gz-action-icon-play">
					<svg viewBox="0 0 50 50">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-playbutton" />
					</svg>
				</span>
							</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="19625">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Caponata.html" title="Caponata">Caponata</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Caponata.html" title="Caponata">La caponata è uno dei più noti contorni siciliani, composto da melanzane fritte, sedano, pomodori, olive e la tipica salsa agrodolce che la&hellip;</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Caponata.html#anchor=gz-comments-anchor" title="Caponata">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												198
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Caponata.html" title="Caponata">
												<span class="gz-icon">
							<svg viewBox="0 0 21 20">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-grey" />
							</svg>
						</span>
												4
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															1 h 20 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 553
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Caponata.html" title="Caponata">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Cavoletti-di-Bruxelles-in-padella.html" title="Cavoletti di Bruxelles in padella">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/165-16511/Cavoletti-di-Bruxelles-in-padella_360x300.jpg" width="360" height="300" alt="Cavoletti di Bruxelles in padella" class="lazyload" loading="lazy" />
				</picture>
												<div class="gz-label gz-btn-link gz-benessere">
					<span class="gz-icon gz-btn-icon">
						<svg viewBox="0 0 50 50">
							<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-benessere" />
						</svg>
					</span>
					<span class="gz-btn-label">Benessere</span>
				</div>
											</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="16511">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Cavoletti-di-Bruxelles-in-padella.html" title="Cavoletti di Bruxelles in padella">Cavoletti di Bruxelles in padella</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Cavoletti-di-Bruxelles-in-padella.html" title="Cavoletti di Bruxelles in padella">I cavoletti di bruxelles in padella sono un contorno semplice e gustoso, arricchiti con speck che rende questo piatto ancora più sfizioso.</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Cavoletti-di-Bruxelles-in-padella.html#anchor=gz-comments-anchor" title="Cavoletti di Bruxelles in padella">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												55
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Cavoletti-di-Bruxelles-in-padella.html" title="Cavoletti di Bruxelles in padella">
												<span class="gz-icon">
							<svg viewBox="0 0 21 20">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-grey" />
							</svg>
						</span>
												3,9
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					1
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															25 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 244
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Cavoletti-di-Bruxelles-in-padella.html" title="Cavoletti di Bruxelles in padella">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
		<div class="gz-adv" id="gpt_native3"></div>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Carciofi-alla-romana.html" title="Carciofi alla romana">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/175-17517/Carciofi-alla-romana_360x300.jpg" width="360" height="300" alt="Carciofi alla romana" class="lazyload" loading="lazy" />
				</picture>
												<div class="gz-label gz-btn-link gz-benessere">
					<span class="gz-icon gz-btn-icon">
						<svg viewBox="0 0 50 50">
							<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-benessere" />
						</svg>
					</span>
					<span class="gz-btn-label">Benessere</span>
				</div>
												<span class="gz-icon gz-btn-icon gz-action-icon gz-action-icon-play">
					<svg viewBox="0 0 50 50">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-playbutton" />
					</svg>
				</span>
							</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="17517">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Carciofi-alla-romana.html" title="Carciofi alla romana">Carciofi alla romana</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Carciofi-alla-romana.html" title="Carciofi alla romana">I carciofi alla romana sono un tipico contorno della tradizione laziale: mammole ripiene con un trito di erbe  aromatiche.</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Carciofi-alla-romana.html#anchor=gz-comments-anchor" title="Carciofi alla romana">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												63
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Carciofi-alla-romana.html" title="Carciofi alla romana">
												<span class="gz-icon">
							<svg viewBox="0 0 21 20">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-grey" />
							</svg>
						</span>
												4
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															50 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 205
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Carciofi-alla-romana.html" title="Carciofi alla romana">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Cipolline-in-agrodolce.html" title="Cipolline in agrodolce">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/240-24029/Cipolline-in-agrodolce_360x300.jpg" width="360" height="300" alt="Cipolline in agrodolce" class="lazyload" loading="lazy" />
				</picture>
																<span class="gz-icon gz-btn-icon gz-action-icon gz-action-icon-play">
					<svg viewBox="0 0 50 50">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-playbutton" />
					</svg>
				</span>
							</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="24029">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Cipolline-in-agrodolce.html" title="Cipolline in agrodolce">Cipolline in agrodolce</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Cipolline-in-agrodolce.html" title="Cipolline in agrodolce">Le cipolline in agrodolce con cipolle borettane sono ottime da gustare tiepide o fredde come contorno o antipasto. Scopri la ricetta per prepararle!</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Cipolline-in-agrodolce.html#anchor=gz-comments-anchor" title="Cipolline in agrodolce">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												90
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Cipolline-in-agrodolce.html" title="Cipolline in agrodolce">
												<span class="gz-icon">
							<svg viewBox="0 0 21 20">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-grey" />
							</svg>
						</span>
												4,1
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					1
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															45 min
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 143
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Cipolline-in-agrodolce.html" title="Cipolline in agrodolce">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>
	

	<article class="gz-card gz-card-horizontal gz-mBottom3x">
		<div class="gz-card-image">
			<a href="https://ricette.giallozafferano.it/Verdure-al-forno.html" title="Verdure al forno">
								<picture>
					<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%206%205'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/images/196-19631/Verdure-al-forno_360x300.jpg" width="360" height="300" alt="Verdure al forno" class="lazyload" loading="lazy" />
				</picture>
																<span class="gz-icon gz-btn-icon gz-action-icon gz-action-icon-play">
					<svg viewBox="0 0 50 50">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-playbutton" />
					</svg>
				</span>
							</a>
						<div class="gz-btn-link gz-add-preferiti" data-recipeid="19631">
    <span class="gz-btn-icon gz-icon"></span>
</div>
					</div>
		<div class="gz-card-content">
			<div class="gz-category"></div>
			<h2 class="gz-title"><a href="https://ricette.giallozafferano.it/Verdure-al-forno.html" title="Verdure al forno">Verdure al forno</a></h2>
			<div class="gz-description"><a href="https://ricette.giallozafferano.it/Verdure-al-forno.html" title="Verdure al forno">Le verdure al forno sono un contorno molto gustoso e semplice da realizzare, ideale per accompagnare ogni tipo di secondo piatto.</a></div>
						<ul class="gz-card-data top">
								<li class="gz-single-data-recipe">
					<a rel="nofollow" href="https://ricette.giallozafferano.it/Verdure-al-forno.html#anchor=gz-comments-anchor" title="Verdure al forno">
												<span class="gz-icon">
							<svg viewBox="0 0 24 25">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#commento-grey" />
							</svg>
						</span>
												97
					</a>
				</li>
												<li class="gz-single-data-recipe">
					<a href="https://ricette.giallozafferano.it/Verdure-al-forno.html" title="Verdure al forno">
												<span class="gz-icon">
							<svg viewBox="0 0 18 16">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#voto-orange" />
							</svg>
						</span>
												4,4
					</a>
				</li>
							</ul>
						<ul class="gz-card-data bottom">
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#difficolta-grey" />
					</svg>
					</span>
					2
				</li>
							<li class="gz-single-data-recipe">
										<span class="gz-icon">
						<svg viewBox="0 0 20 19">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tempo-grey" />
						</svg>
					</span>
															2 h
									</li>
							<li class="gz-single-data-recipe">
					<span class="gz-icon">
					<svg viewBox="0 0 19 20">
						<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#kcal-grey" />
					</svg>
					</span>
					Kcal 173
				</li>
						</ul>
			<div class="gz-link-more-recipe">
				<a href="https://ricette.giallozafferano.it/Verdure-al-forno.html" title="Verdure al forno">
					LEGGI <span>RICETTA</span>
				</a>
			</div>
		</div>
	</article>


	    <div class="gz-pagination gz-mBottom5x">
		<div class="gz-nums">

	
	<div class="gz-pages">
									<a href="https://www.giallozafferano.it/ricette-cat/Contorni/" class="page cur">1</a>
												<a href="https://www.giallozafferano.it/ricette-cat/page2/Contorni/" class="page">2</a>
												<a href="https://www.giallozafferano.it/ricette-cat/page3/Contorni/" class="page">3</a>
												<a href="https://www.giallozafferano.it/ricette-cat/page4/Contorni/" class="page">4</a>
												<a href="https://www.giallozafferano.it/ricette-cat/page5/Contorni/" class="page">5</a>
												<a href="https://www.giallozafferano.it/ricette-cat/page6/Contorni/" class="page">6</a>
												<a href="https://www.giallozafferano.it/ricette-cat/page7/Contorni/" class="page">7</a>
						</div>

	
		<span class="disabled three-dots second">...</span>


		

			<span class="disabled total-pages">21</span>

		

	
	</div>

						<a class="gz-arrow next" href="https://www.giallozafferano.it/ricette-cat/page2/Contorni/" title="Pagina successiva">
				<span class="gz-text">Pagina successiva</span>
				<span class="gz-icon gz-icon-arrow-right gz-icon-arrow-white"></span>
			</a>
			</div>


	</div>

		<aside class="gz-sidebar gz-column" id="gz-sidebar">
    <div class="gz-cabin-elevator-wrapper">
        <div class="gz-adv-slot gz-hide-mobile gz-cabin-elevator">
            <div class="amePlaceholderBox">
    <div class="gz-adv-gpt" id="adv-gpt-box-container1"></div>
</div>

                    </div>
    </div>

        <div class="gz-cabin-elevator-obstacle" id="gz-cabin-elevator-obstacle">

                <div class="gz-adv" id="gpt_native_sidebar1"></div>
        <div class="gz-adv" id="gpt_native_sidebar2"></div>
        <div class="gz-adv" id="gpt_native_sidebar3"></div>
        
                <div id="promobox_mediamond"></div>
        
        <div id="flyfirst-placement"></div>

            </div>
    
</aside>

		
</div>
</main>


        	<div id="flyfirst-mobile-placement"></div>
	<div id="flyfirst-slot"></div>

<footer class="gz-footer gz-elevator-ame-base" id="gz-footer">
    <div class="gz-sitewidth gz-footer-grid">

				<div class="gz-footer-newsletter">
			<div class="gz-footer-download">
				<h4 class="gz-footer-title">Scarica l'App</h4>
				<div class="gz-footer-download-buttons">
					<a href="https://apps.apple.com/it/app/giallozafferano-le-ricette/id384387249" class="gz-store-download-button" data-store="Apple Store" title="Apple Store">
						<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20280%2080'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/style/images/apple-store.png" width="280" height="80" class="lazyload" loading="lazy" alt="Apple Store" />
					</a>
					<a href="https://play.google.com/store/apps/details?id=it.banzai.media.gzricette&hl=it&gl=US" class="gz-store-download-button" data-store="Google Play" title="Google Play">
						<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20280%2080'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/style/images/google-play.png" width="280" height="80" class="lazyload" loading="lazy" alt="Google Play" />
					</a>
				</div>
			</div>
						<div class="gz-footer-newsletter-form">
				<h4 class="gz-footer-title">Iscriviti alla Newsletter</h4>
				<form class="gz-newsletter-form-container" id="gz-newsletter-form">
	<span class="gz-icon">
		<svg viewBox="0 0 50 50">
			<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-email" />
		</svg>
	</span>
	<input class="gz-newsletter-email" type="email" name="email" value="" placeholder="Inserisci la tua email" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$" required />
	<button class="gz-button gz-button-orange gz-newsletter-button gz-btn-link" id="gz-newsletter-button" type="submit">
		<span class="gz-icon gz-btn-icon">
			<svg viewBox="0 0 40 40">
				<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-arrow-go" />
			</svg>
		</span>
		<span class="gz-btn-label">Iscriviti</span>
	</button>
</form>
			</div>
					</div>
		<div class="gz-footer-brand">
			<a class="gz-footer-logo" href="https://www.giallozafferano.it/" title="Ricette di cucina - Le ricette di GialloZafferano">GialloZafferano</a>
			<ul class="gz-footer-social gz-footer-list">
				<li class="gz-footer-title">Seguici</li>
				<li>
					<a href="https://www.facebook.com/GialloZafferanolive" target="_blank" rel="nofollow" class="gz-btn-link" title="Facebook">
						<span class="gz-icon gz-btn-icon">
							<svg viewBox="0 0 40 40">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-fb" />
							</svg>
						</span>
						<span class="gz-btn-label">Facebook</span>
					</a>
				</li>
				<li>
					<a href="https://instagram.com/giallozafferano/" target="_blank" rel="nofollow" class="gz-btn-link" title="Instagram">
						<span class="gz-icon gz-btn-icon">
							<svg viewBox="0 0 40 40">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-ig" />
							</svg>
						</span>
						<span class="gz-btn-label">Instagram</span>
					</a>
				</li>
				<li>
					<a href="https://www.tiktok.com/@giallozafferano" target="_blank" rel="nofollow" class="gz-btn-link" title="TikTok">
						<span class="gz-icon gz-btn-icon">
							<svg viewBox="0 0 40 40">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-tt" />
							</svg>
						</span>
						<span class="gz-btn-label">TikTok</span>
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/user/GialloZafferanoTV" target="_blank" rel="nofollow" class="gz-btn-link" title="YouTube">
						<span class="gz-icon gz-btn-icon">
							<svg viewBox="0 0 40 40">
								<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-share-yt" />
							</svg>
						</span>
						<span class="gz-btn-label">Youtube</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="gz-footer-menu">
			<ul class="gz-footer-list">
				<li class="gz-footer-title">Info</li>
				<li><a title="Chi siamo" href="https://www.giallozafferano.it/staff/chisiamo.html">Chi siamo</a></li>
				<li><a title="Accedi" class="gz-openlogin-link" href="https://www.giallozafferano.it/utente/index/">Accedi</a></li>
				<li><a title="Registrati" href="https://www.giallozafferano.it/utente/registrazione">Registrati</a></li>
				<li><a title="Gruppo Mondadori" href="https://www.gruppomondadori.it">Gruppo Mondadori</a></li>
			</ul>
			<ul class="gz-footer-list">
				<li class="gz-footer-title">Scopri</li>
				<li><a title="Crea un blog" href="https://blog.giallozafferano.it/community/">Crea un blog</a></li>
				<li><a title="In edicola" href="https://www.giallozafferano.it/in-edicola">In edicola</a></li>
				<li><a title="Shopping" href="https://shopping.giallozafferano.it/">Shopping</a></li>
				<li><a title="Ultime ricette" href="https://www.giallozafferano.it/Ultime-ricette/">Ultime ricette</a></li>
			</ul>
		</div>
		
		<div class="gz-footer-disclaimer">
			<strong class="gz-footer-disclaimer-copy gz-footer-title">&copy; 2024 Mondadori Media S.p.A.</strong>
			<ul class="gz-footer-disclaimer-menu">
				<li>P.IVA 08009080964</li>
				<li><a title="Condizioni di servizio" href="https://privacy.stbm.it/site/giallozafferano/condizioni-generali.html" onclick="footerlinks(this.href,'condizioni'); return false">Condizioni d'uso</a></li>
				<li><a title="Privacy" href="https://digital.mondadori.it/privacy/informativasiti/mondadorimedia.html" onclick="footerlinks(this.href,'informativa'); return false">Privacy</a></li>
				<li><a title="Privacy Policy" href="https://www.gruppomondadori.it/privacy-policy" onclick="footerlinks(this.href,'privacy'); return false">Privacy Policy</a></li>
				<li><a title="Cookie Privacy" href="https://www.iubenda.com/privacy-policy/81919939/cookie-policy" onclick="footerlinks(this.href,'cookiepolicy'); return false">Cookie Policy</a></li>
				<li><a title="Opzioni cookie" href="#" class="iubenda-advertising-preferences-link">Opzioni cookie</a></li>
				<li><a title="Disclaimer" href="https://www.giallozafferano.it/static/disclaimer.html" onclick="footerlinks(this.href,'disclaimer'); return false">Disclaimer</a></li>
				<li><a title="Governance" href="https://digital.mondadori.it/governance/mondadorimedia/index.html">Governance</a></li>
				<li><a title="Gruppo Mondadori" href="https://www.gruppomondadori.it">Gruppo Mondadori</a></li>
			</ul>
			<p class="gz-footer-disclaimer-text">
				Le Condizioni e Termini d'Uso sono state modificate. Le nuove <a href="https://privacy.stbm.it/site/giallozafferano/condizioni-generali.html" title="Condizioni e Termini d'Uso" target="_blank">Condizioni e Termini d'Uso</a> sono entrate in vigore dal 6 Giugno 2022, ti preghiamo di prenderne visione a <a href="https://privacy.stbm.it/site/giallozafferano/condizioni-generali.html" title="Condizioni e Termini d'Uso" target="_blank">questo link</a>. 
			</p>
		</div>
    </div>
</footer>
    </div>

    <div id="adv-gpt-outofpage"></div>
    <div id="gpt_oop2" class="advCollapse"></div>
    <div id="gpt_promobox" class="advCollapse"></div>

    
    <div class="gz-modal-container gz-modal-small gz-modal-newsletter" data-modalname="modal-newsletter">
    <div class="gz-modal">
        <div class="gz-modal-header">
            <div class="gz-modal-title">Newsletter</div>
            <button class="gz-modal-close">Annulla</button>
        </div>
        <div class="gz-modal-content gz-form">
            <form class="gz-form" id="gz-newsletter-form-confirm">
                <fieldset>
                    <label for="gz-newsletter-confirm-email" class="gz-form-label">Email</label>
                    <input class="gz-form-input gz-newsletter-confirm-email" type="email" name="email" value="" id="gz-newsletter-confirm-email" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$" required />
                </fieldset>
                <fieldset>
                    <div class="gz-form-checkbox">
                        <input type="checkbox" name="gz-newsletter-checkbox" id="gz-newsletter-checkbox" value="" required />
                        <label for="gz-newsletter-checkbox" class="gz-form-checkbox-label">
                            <span class="gz-icon">
                                <svg viewBox="0 0 40 40">
                                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-checkbox-button" />
                                </svg>
                            </span>
                            <span class="gz-checkbox-label">Ho letto e compreso la <a href="https://www.gruppomondadori.it/privacy-policy" target="_blank">Privacy Policy</a></span>
                        </label>
                    </div>
                </fieldset>
                <div class="gz-newsletter-form-button-container">
                    <button type="submit" id="gz-newsletter-form-confirm-submit" class="g-recaptcha gz-button gz-button-orange gz-newsletter-button gz-button-override gz-centered" data-callback='newsletterOnSubmit'>Conferma</button>
                </div>
            </form>
        </div>
    </div>
</div>

    <div class="gz-modal-container gz-modal-small gz-modal-login-box" data-modalname="login-box">
    <div class="gz-modal">
        <div class="gz-modal-content gz-modal-content-full">
            <div class="gz-modal-header">
                <a href="#" class="gz-icon gz-btn-icon gz-modal-close">
                    <svg viewBox="0 0 50 50">
                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-close" />
                    </svg>
                </a>
            </div>
            <div class="gz-modal-login-content">
                <div class="gz-modal-login-benefit" id="gz-modal-login-benefit">
                    <div class="gz-modal-benefit-content">
                        <div class="gz-modal-benefit-title">Accedi a servizi<br />e contenuti esclusivi</div>
                        <ul class="gz-modal-benefit-list">
                            <li class="gz-modal-benefit-list-item">
                                <span class="gz-icon">
                                    <svg viewBox="0 0 50 50">
                                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-ricettari" />
                                    </svg>
                                </span>
                                <span class="gz-modal-benefit-list-item-label">Salva le tue <strong>ricette preferite</strong></span>
                            </li>
                            <li class="gz-modal-benefit-list-item">
                                <span class="gz-icon">
                                    <svg viewBox="0 0 50 50">
                                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-spesa" />
                                    </svg>
                                </span>
                                <span class="gz-modal-benefit-list-item-label">Compila la tua <strong>lista della spesa</strong></span>
                            </li>
                            <li class="gz-modal-benefit-list-item">
                                <span class="gz-icon">
                                    <svg viewBox="0 0 50 50">
                                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-commenti" />
                                    </svg>
                                </span>
                                <span class="gz-modal-benefit-list-item-label"><strong>Commenta</strong> e ottieni il nostro aiuto</span>
                            </li>
                            <li class="gz-modal-benefit-list-item">
                                <span class="gz-icon">
                                    <svg viewBox="0 0 50 50">
                                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-fattedate" />
                                    </svg>
                                </span>
                                <span class="gz-modal-benefit-list-item-label"><strong>Condividi</strong> le tue abilità</span>
                            </li>
                            <li class="gz-modal-benefit-list-item">
                                <span class="gz-icon">
                                    <svg viewBox="0 0 50 50">
                                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-school" />
                                    </svg>
                                </span>
                                <span class="gz-modal-benefit-list-item-label">Accedi a <strong>Scuola</strong> e <strong>Corsi di cucina</strong></span>
                            </li>
                            <li class="gz-modal-benefit-list-item">
                                <span class="gz-icon">
                                    <svg viewBox="0 0 50 50">
                                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-rivista" />
                                    </svg>
                                </span>
                                <span class="gz-modal-benefit-list-item-label">Sfoglia le <strong>riviste GialloZafferano</strong></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="gz-modal-login-panel">
                    <div class="gz-modal-login-loading">
                        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E" data-src="https://www.giallozafferano.it/style/images/loading-gz.gif?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379" width="150" height="150" class="gz-spinner-loading lazyload" loading="lazy" />
                    </div>
                    <div class="gz-user-login-box" data-loginpage="check-email-form">
    <div class="gz-user-login-message gz-user-login-box-message">
        <div class="gz-user-login-message-container">
            <span class="gz-icon gz-user-login-message-logo">
                <svg viewBox="0 0 100 100">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#gz-logo-symbol-color" />
                </svg>
            </span>
            <span class="gz-user-login-message-title">Registrati o accedi</span>
            <div class="gz-user-login-message-description noaction">
                <span class="gz-user-login-message-text" data-infoaction="ricettari">per creare i tuoi ricettari personalizzati.</span>
                <span class="gz-user-login-message-text" data-infoaction="fotocommenti">per pubblicare le foto delle tue ricette.</span>
                <span class="gz-user-login-message-text" data-infoaction="listaspesa">per compilare la tua lista della spesa.</span>
                <span class="gz-user-login-message-text" data-infoaction="commenti">per inviare alla redazione i tuoi commenti.</span>
                <span class="gz-user-login-message-discover gz-hide-desktop" id="gz-user-login-message-discover" data-anchor="gz-modal-login-benefit">Altri vantaggi</span>
            </div>
            <div class="gz-disclaimer-container">
                <div class="gz-disclaimer gz-disclaimer-error gz-disclaimer-hide" id="gz-check-email-error-disclaimer">
                    <div class="gz-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-error" />
                        </svg>
                    </div>
                    <span class="gz-disclaimer-text"></span>
                </div>
            </div>
        </div>
    </div>
    <div class="gz-user-login-box-social gz-user-login-box-show">
        <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=43975754916-7be3d2l6omgf8v36uhukdlsq61nslmls.apps.googleusercontent.com&response_type=code&redirect_uri=https%3A%2F%2Fwww.giallozafferano.it%2Futente%2Fregistrazione%3Fwith%3Dgoogle&scope=openid+email+profile" class="gz-btn-link gz-user-login-box-social-btn-google gz-user-login-box-social-btn-show">
            <span class="gz-btn-icon">
                <svg viewBox="0 0 50 50">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-login-google" />
                </svg>
            </span>
            <span class="gz-btn-label">Continua con Google</span>
        </a>
        <a href="https://www.facebook.com/v14.0/dialog/oauth?client_id=372884629400015&redirect_uri=https%3A%2F%2Fwww.giallozafferano.it%2Futente%2Fregistrazione%3Fwith%3Dfacebook&scope=email" class="gz-btn-link gz-user-login-box-social-btn-fb gz-user-login-box-social-btn-show">
            <span class="gz-btn-icon">
                <svg viewBox="0 0 50 50">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-login-facebook" />
                </svg>
            </span>
            <span class="gz-btn-label">Continua con Facebook</span>
        </a>
        <a href="https://appleid.apple.com/auth/authorize?response_type=code+id_token&response_mode=form_post&client_id=it.giallozafferano.gzricette&redirect_uri=https%3A%2F%2Fwww.giallozafferano.it%2Futente%2Fregistrazione%3Fwith%3Dapple&scope=name+email" class="gz-btn-link gz-user-login-box-social-btn-apple gz-user-login-box-social-btn-show">
            <span class="gz-btn-icon">
                <svg viewBox="0 0 50 50">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-login-apple" />
                </svg>
            </span>
            <span class="gz-btn-label">Continua con Apple</span>
        </a>
    </div>
    <div class="gz-separator-text gz-separator-text-show">Oppure</div>
    <div class="gz-form">
        <form id="gz-check-email-form" class="gz-check-email-form">
            <fieldset>
                <input class="gz-form-input" id="gz-check-email" name="email" type="email" placeholder="La tua email" required />
            </fieldset>
            <button type="submit" id="gz-check-email-form-submit" class="g-recaptcha gz-button gz-button-override gz-centered medium-small gz-button-orange gz-login-cta" data-callback="checkEmailOnSubmit">Continua</button>
            <!-- button type="submit" id="gz-check-email-form-submit" class="gz-button gz-button-override gz-centered medium-small gz-button-orange gz-login-cta">Continua</button -->
        </form>
    </div>
</div>
                    <div class="gz-user-login-box" data-loginpage="login-modal-form">
    <div class="gz-user-login-message gz-user-login-box-message">
        <div class="gz-user-login-message-container">
            <span class="gz-icon gz-user-login-message-logo">
                <svg viewBox="0 0 100 100">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#gz-logo-symbol-color" />
                </svg>
            </span>
            <span class="gz-user-login-message-title">Bentornato!</span>
            <div class="gz-user-login-message-description">
                <span class="gz-user-login-message-text selected">Stai accedendo come</span>
            </div>
        </div>
    </div>
    <div class="gz-form">
        <form method="post" action="https://www.giallozafferano.it/utente/login-do.php">
            <input type="hidden" name="redirect" value="https://www.giallozafferano.it/ricette-cat/Contorni/">
                        <fieldset>
                <label for="gz-user-valid-email" class="gz-form-label">La tua email</label>
                <input class="gz-form-input" id="gz-user-valid-email" name="username" type="email" placeholder="" required readonly>
                <span id="gz-login-modify-email" class="gz-form-link">Modifica</span>
            </fieldset>
            <fieldset>
                <label for="gz-user-password" class="gz-form-label">Inserisci password</label>
                <input class="gz-form-input gz-form-input-password" id="gz-user-password" name="password" type="password" placeholder="" required>
                <div class="gz-form-show-password gz-icon">
                    <svg viewBox="0 0 50 50" class="gz-icon-show">
                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-show" />
                    </svg>
                    <svg viewBox="0 0 50 50" class="gz-icon-hide">
                        <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-hide" />
                    </svg>
                </div>
            </fieldset>
            <a href="https://www.giallozafferano.it/utente/recupero-password/" class="gz-form-link gz-user-login-box-recover-pwd" id="gz-user-login-recover-pwd-link">Password dimenticata?</a>
            <button class="gz-button gz-button-override gz-centered medium-small gz-button-orange gz-login-cta">Accedi</button>
        </form>
    </div>
</div>
                    <div class="gz-user-login-box" data-loginpage="recover-pwd-form">
    <div class="gz-user-login-message gz-user-login-box-message">
        <div class="gz-user-login-message-container">
            <span class="gz-icon gz-user-login-message-logo">
                <svg viewBox="0 0 100 100">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#gz-logo-symbol-color" />
                </svg>
            </span>
            <span class="gz-user-login-message-title">Reimposta la password</span>
            <div class="gz-user-login-message-description">
                <span class="gz-user-login-message-text selected">Ti invieremo un'email per reimpostare la tua password.</span>
            </div>
            <div class="gz-disclaimer-container">
                <div class="gz-disclaimer gz-disclaimer-error gz-disclaimer-hide" id="gz-recover-pwd-error-disclaimer">
                    <div class="gz-icon">
                        <svg viewBox="0 0 50 50">
                            <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-error" />
                        </svg>
                    </div>
                    <span class="gz-disclaimer-text"></span>
                </div>
            </div>
        </div>
    </div>
    <div class="gz-form">
        <form id="gz-recover-pwd-form">
            <fieldset>
                <label for="gz-user-recover-pwd-email" class="gz-form-label">Inserisci la tua email</label>
                <input class="gz-form-input" id="gz-user-recover-pwd-email" name="email" type="email" placeholder="" required>
            </fieldset>
            <button id="gz-recover-pwd-form-submit" class="g-recaptcha gz-button gz-button-override gz-centered medium-small gz-button-orange" type="submit" data-callback="recoverPwdOnSubmit">Invia la richiesta</button>
            <a href="#" class="gz-form-link gz-user-login-box-recover-pwd centered" id="gz-recover-pwd-back">Torna ad accedi</a>
        </form>
    </div>
</div>
                    <div class="gz-user-login-box" data-loginpage="recover-pwd-form-success">
    <div class="gz-user-login-message gz-user-login-box-message">
        <div class="gz-user-login-message-container">
            <span class="gz-icon gz-user-login-message-logo">
                <svg viewBox="0 0 100 100">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#gz-logo-symbol-color" />
                </svg>
            </span>
            <span class="gz-user-login-message-title">Ti abbiamo inviato l’email</span>
        </div>
    </div>
    <div class="gz-form">
        <div class="gz-disclaimer gz-disclaimer-hide" id="gz-recover-pwd-success-disclaimer">
            <div class="gz-icon">
                <svg viewBox="0 0 50 50">
                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-email" />
                </svg>
            </div>
            <div class="gz-disclaimer-text">Controlla la tua posta in arrivo, se non la vedi prova in posta indesiderata (Spam) o in “Promozioni”.</div>
        </div>
    </div>
    <a href="#" class="gz-form-link gz-user-login-box-recover-pwd centered gz-modal-close">Chiudi</a>
</div>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="gz-modal-container gz-modal-small gz-modal-tos-box gz-modal-blocked" data-modalname="tos-box">
    <div class="gz-modal">
        <div class="gz-modal-header">
            <div class="gz-modal-title">Aggiornamento Termini e Condizioni</div>
        </div>
        <div class="gz-modal-content gz-form">
            <form id="gz-tos-form">
                <p class="gz-form-text">
                    Gentile Utente,<br />
                    le nostre <a href="https://privacy.stbm.it/site/giallozafferano/condizioni-generali.html" target="_blank">Condizioni e Termini d'Uso</a> del sito sono state modificate. Le nuove Condizioni e Termini d'Uso sono entrate in vigore dal 6 Giugno 2022. Ti preghiamo di prenderne visione a <a href="https://privacy.stbm.it/site/giallozafferano/condizioni-generali.html" target="_blank">questo link</a> ed accettarle per potere proseguire con l'utilizzo del sito e ad usufruire dei servizi offerti.
                </p>
                <fieldset>
                    <!-- span class="gz-form-label">Informativa*</span -->
                    <div class="gz-form-checkbox">
                        <input type="checkbox" name="tos" id="tos-update" value="1" required />
                        <label for="tos-update" class="gz-form-checkbox-label">
                            <span class="gz-icon">
                                <svg viewBox="0 0 40 40">
                                    <use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#icon-checkbox-button" />
                                </svg>
                            </span>
                            <span class="gz-checkbox-label">Dichiaro di aver preso visione delle <a href="https://privacy.stbm.it/site/giallozafferano/condizioni-generali.html" target="_blank">Condizioni e Termini d'Uso</a> del sito</span>
                        </label>
                    </div>
                </fieldset>
                <button type="submit" class="gz-button gz-button-orange gz-button-override gz-centered">Prosegui</button>
            </form>			
        </div>
    </div>
</div> 

    
<div class="gz-modal-container gz-modal-big gz-modal-filtri" data-modalname="filtri-listing">


		<form id="form" action="/ricette-cat/Contorni/">

			<div class="gz-modal">
			<input type="hidden" name="search_query" id="search_query" value="">
			<input type="hidden" name="main_filter" id="main_filter" value="">
			<input type="hidden" name="main_filter_tags" id="main_filter_tags" value="{&quot;tipo-cottura-al-forno&quot;:&quot;Al-forno\/&quot;,&quot;tipo-cucina-grandi-classici&quot;:&quot;grandi-classici\/&quot;,&quot;tipo-ingrediente-pesce&quot;:&quot;Pesce\/&quot;,&quot;tipo-cottura-piatti-freddi&quot;:&quot;Piatti-Freddi\/&quot;,&quot;tipo-cucina-finger-food&quot;:&quot;Finger-food\/&quot;,&quot;tipo-ingrediente-frutta&quot;:&quot;Frutta\/&quot;,&quot;tipo-cottura-fritti&quot;:&quot;Fritti\/&quot;,&quot;tipo-cucina-sfiziosi&quot;:&quot;Sfiziosi\/&quot;,&quot;tipo-ingrediente-uova&quot;:&quot;Uova\/&quot;,&quot;tipo-cottura-al-vapore&quot;:&quot;Al-vapore\/&quot;,&quot;tipo-cucina-facili-e-veloci&quot;:&quot;facili-e-veloci\/&quot;,&quot;tipo-ingrediente-carne&quot;:&quot;Carne\/&quot;,&quot;tipo-cottura-friggitrice-ad-aria&quot;:&quot;Friggitrice-ad-aria\/&quot;,&quot;tipo-cucina-tex-mex&quot;:&quot;Tex-mex\/&quot;,&quot;tipo-ingrediente-al-cioccolato&quot;:&quot;al-cioccolato\/&quot;,&quot;tipo-cucina-vegetariani&quot;:&quot;Vegetariani\/&quot;,&quot;tipo-ingrediente-pollo-tacchino&quot;:&quot;Pollo-tacchino\/&quot;,&quot;tipo-cottura-pentola-a-pressione&quot;:&quot;Pentola-a-pressione\/&quot;,&quot;tipo-cucina-street-food&quot;:&quot;Street-food\/&quot;,&quot;tipo-ingrediente-verdura&quot;:&quot;Verdura\/&quot;,&quot;tipo-ingrediente-al-caffe&quot;:&quot;al-caffe\/&quot;,&quot;tipo-ingrediente-formaggio&quot;:&quot;Formaggio\/&quot;}">
			<input type="hidden" name="cleaned_query" id="cleaned_query" value="">
		
			<div class="gz-modal-header">

				<h3 class="gz-modal-title">
					FILTRA
				</h3>

				<a href="#" id="filtri-reset">
					Annulla
				</a>

				<a href="#" class="gz-modal-close">Chiudi</a>

			</div>

			<div class="gz-modal-content">

				<div class="gz-row">

					<div class="gz-col-left">
						<div class="gz-filtro" id="f-nohide-difficolta">

							<h3 class="gz-title-filtro gz-uppercase">Difficoltà</h3>

							<div class="gz-filtro-content">
								<div class="gz-checkbox-button">
									<input type="checkbox" name="difficolta[facile]" value="1" id="difficolta-facile" />
									<label for="difficolta-facile">Facile</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="difficolta[media]" value="1" id="difficolta-media" />
									<label for="difficolta-media">Media</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="difficolta[difficile]" value="1" id="difficolta-difficile" />
									<label for="difficolta-difficile">Difficile</label>
								</div>
							</div>

						</div>
						<div class="gz-filtro" id="f-tempo_preparazione">

							<h3 class="gz-title-filtro gz-uppercase">Tempo di Preparazione</h3>

							<div class="gz-filtro-content">
								<div class="gz-radio-button">
									<input type="radio" name="tempo_preparazione" value="15" id="tempo_preparazione-15" />
									<label for="tempo_preparazione-15">15'</label>
								</div>
								<div class="gz-radio-button">
									<input type="radio" name="tempo_preparazione" value="30" id="tempo_preparazione-30" />
									<label for="tempo_preparazione-30">30'</label>
								</div>
								<div class="gz-radio-button">
									<input type="radio" name="tempo_preparazione" value="60" id="tempo_preparazione-60" />
									<label for="tempo_preparazione-60">60'</label>
								</div>
							</div>

						</div>
						<div class="gz-filtro" id="f-tempo_totale">

							<h3 class="gz-title-filtro gz-uppercase">Tempo Totale</h3>

							<div class="gz-filtro-content">
								<div class="gz-radio-button">
									<input type="radio" name="tempo_totale" value="15" id="tempo_totale-15" />
									<label for="tempo_totale-15">15'</label>
								</div>
								<div class="gz-radio-button">
									<input type="radio" name="tempo_totale" value="30" id="tempo_totale-30" />
									<label for="tempo_totale-30">30'</label>
								</div>
								<div class="gz-radio-button">
									<input type="radio" name="tempo_totale" value="60" id="tempo_totale-60" />
									<label for="tempo_totale-60">60'</label>
								</div>
							</div>

						</div>
					</div>

					<div class="gz-col-right">
						<div class="gz-filtro" id="f-benessere">

							<h3 class="gz-title-filtro gz-uppercase">Regime alimentare</h3>

							<div class="gz-filtro-content">
								<div class="gz-checkbox-button-benessere gz-input-benessere">
									<input type="checkbox" name="benessere[benessere-light]" value="1" id="benessere-benessere-light" />
									<label for="benessere-benessere-light">
										<span class="gz-icon"><svg viewBox="0 0 100 100"><use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#ben-light" /></svg></span>
										<span class="gz-slug-benessere">Light</span>
									</label>
								</div>
								<div class="gz-checkbox-button-benessere">
									<input type="checkbox" name="benessere[benessere-senza-glutine]" data-label="Senza glutine" value="1" id="benessere-benessere-senza-glutine" />
									<label for="benessere-benessere-senza-glutine">
							            <span class="gz-icon"><svg viewBox="0 0 100 100"><use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#ben-senzaglutine-white" /></svg></span>
							            <span class="gz-slug-benessere">Senza glutine</span>
									</label>
								</div>
								<div class="gz-checkbox-button-benessere">
									<input type="checkbox" name="benessere[benessere-senza-lattosio]" data-label="Senza lattosio" value="1" id="benessere-benessere-senza-lattosio" />
									<label for="benessere-benessere-senza-lattosio">
							            <span class="gz-icon"><svg viewBox="0 0 100 100"><use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#ben-senzalattosio-white" /></svg></span>
							            <span class="gz-slug-benessere">Senza lattosio</span>
									</label>
								</div>
								<div class="gz-checkbox-button-benessere">
									<input type="checkbox" name="benessere[benessere-vegetariane]" data-label="Vegetariano" value="1" id="benessere-benessere-vegetariane" />
									<label for="benessere-benessere-vegetariane">
							            <span class="gz-icon"><svg viewBox="0 0 100 100"><use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#ben-vegetariana-white" /></svg></span>
							            <span class="gz-slug-benessere">Vegetariano</span>
									</label>
								</div>
							</div>

						</div>
						<div class="gz-filtro" id="f-tipo-ingrediente">

							<h3 class="gz-title-filtro gz-uppercase">Ingrediente</h3>

							<div class="gz-filtro-content">
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-ingrediente[pesce]" value="1" id="tipo-ingrediente-pesce" />
									<label for="tipo-ingrediente-pesce">Pesce</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-ingrediente[frutta]" value="1" id="tipo-ingrediente-frutta" />
									<label for="tipo-ingrediente-frutta">Frutta</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-ingrediente[carne]" value="1" id="tipo-ingrediente-carne" />
									<label for="tipo-ingrediente-carne">Carne</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-ingrediente[formaggio]" value="1" id="tipo-ingrediente-formaggio" />
									<label for="tipo-ingrediente-formaggio">Formaggio</label>
								</div>
							</div>

						</div>
						<div class="gz-filtro" id="f-tipo-cottura">

							<h3 class="gz-title-filtro gz-uppercase">Cottura</h3>

							<div class="gz-filtro-content">
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-cottura[al-forno]" value="1" id="tipo-cottura-al-forno" />
									<label for="tipo-cottura-al-forno">Al Forno</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-cottura[piatti-freddi]" value="1" id="tipo-cottura-piatti-freddi" />
									<label for="tipo-cottura-piatti-freddi">Piatti Freddi</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-cottura[fritti]" value="1" id="tipo-cottura-fritti" />
									<label for="tipo-cottura-fritti">Fritti</label>
								</div>
							</div>

						</div>

						<div class="gz-filtro" id="f-tipo-cucina">

							<h3 class="gz-title-filtro gz-uppercase">Le nostre selezioni</h3>

							<div class="gz-filtro-content">
								<div class="gz-checkbox-button gz-input-benessere">
									<input type="checkbox" name="benessere[benessere]" value="1" id="benessere-benessere" />
									<label for="benessere-benessere">Benessere</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-cucina[grandi-classici]" value="1" id="tipo-cucina-grandi-classici" />
									<label for="tipo-cucina-grandi-classici">Grandi Classici</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-cucina[finger-food]" value="1" id="tipo-cucina-finger-food" />
									<label for="tipo-cucina-finger-food">Finger Food</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-cucina[sfiziosi]" value="1" id="tipo-cucina-sfiziosi" />
									<label for="tipo-cucina-sfiziosi">Sfiziosi</label>
								</div>
								<div class="gz-checkbox-button">
									<input type="checkbox" name="tipo-cucina[facili-e-veloci]" value="1" id="tipo-cucina-facili-e-veloci" />
									<label for="tipo-cucina-facili-e-veloci">Facili e Veloci</label>
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>

			<div class="gz-modal-footer">

				<button type="submit" class="gz-uppercase" id="filtri-submit">Guarda i Risultati</button>

			</div>


	</div>
</form>

</div>

<div class="gz-modal-container gz-modal-big gz-modal-categorie" data-modalname="categorie-listing" >

	<form>
		
		<div class="gz-modal">

			<div class="gz-modal-header">

				<h3 class="gz-modal-title">
					SELEZIONA PORTATE
				</h3>

				<a href="#" class="gz-modal-close">Chiudi</a>

			</div>

			<div class="gz-modal-content">

				<ul>

					<li class="all" data-num="314">
						<a class="" href="/ricette-cat/" title="">
							<span class="gz-icon">
								<svg viewBox="0 0 40 27">
									<use xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#tutte-le-ricette"></use>
								</svg>
							</span>
															Tutte le ricette
													</a>
					</li>

												<li id="cat-Antipasti">
						<a class="" href="/ricette-cat/Antipasti/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#antipasti" />
								</svg>
							</span>
							Antipasti
						</a>
						<ul>
													</ul>
					</li>
																<li id="cat-Primi">
						<a class="" href="/ricette-cat/Primi/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#primi" />
								</svg>
							</span>
							Primi piatti
						</a>
						<ul>
																							<li data-num="772" id="cat-Primi-pasta">
									<a class="" href="/ricette-cat/Primi/pasta/">Pasta</a>
								</li>
																															<li data-num="228" id="cat-Primi-Pasta-fresca">
									<a class="" href="/ricette-cat/Primi/Pasta-fresca/">Pasta fresca</a>
								</li>
																															<li data-num="91" id="cat-Primi-Gnocchi">
									<a class="" href="/ricette-cat/Primi/Gnocchi/">Gnocchi</a>
								</li>
																															<li data-num="283" id="cat-Primi-riso-cereali">
									<a class="" href="/ricette-cat/Primi/riso-cereali/">Riso e Cereali</a>
								</li>
																															<li data-num="156" id="cat-Primi-zuppe-minestre-vellutate">
									<a class="" href="/ricette-cat/Primi/zuppe-minestre-vellutate/">Zuppe, minestre e vellutate</a>
								</li>
																					</ul>
					</li>
																<li id="cat-Secondi-piatti">
						<a class="" href="/ricette-cat/Secondi-piatti/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#secondi-piatti" />
								</svg>
							</span>
							Secondi piatti
						</a>
						<ul>
													</ul>
					</li>
																<li id="cat-Piatti-Unici">
						<a class="" href="/ricette-cat/Piatti-Unici/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#piatti-unici" />
								</svg>
							</span>
							Piatti Unici
						</a>
						<ul>
													</ul>
					</li>
																<li id="cat-Dolci-e-Desserts">
						<a class="" href="/ricette-cat/Dolci-e-Desserts/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#dolci-e-desserts" />
								</svg>
							</span>
							Dolci
						</a>
						<ul>
																							<li data-num="722" id="cat-Dolci-e-Desserts-Torte">
									<a class="" href="/ricette-cat/Dolci-e-Desserts/Torte/">Torte</a>
								</li>
																															<li data-num="273" id="cat-Dolci-e-Desserts-Al-cucchiaio">
									<a class="" href="/ricette-cat/Dolci-e-Desserts/Al-cucchiaio/">Al cucchiaio</a>
								</li>
																															<li data-num="188" id="cat-Dolci-e-Desserts-Biscotti">
									<a class="" href="/ricette-cat/Dolci-e-Desserts/Biscotti/">Biscotti</a>
								</li>
																															<li data-num="100" id="cat-Dolci-e-Desserts-Gelati-e-Semifreddi">
									<a class="" href="/ricette-cat/Dolci-e-Desserts/Gelati-e-Semifreddi/">Gelati, sorbetti e  semifreddi</a>
								</li>
																															<li data-num="52" id="cat-Dolci-e-Desserts-Salse-e-Creme">
									<a class="" href="/ricette-cat/Dolci-e-Desserts/Salse-e-Creme/">Salse e Creme</a>
								</li>
																															<li data-num="602" id="cat-Dolci-e-Desserts-piccola-pasticceria">
									<a class="" href="/ricette-cat/Dolci-e-Desserts/piccola-pasticceria/">Piccola pasticceria</a>
								</li>
																															<li data-num="69" id="cat-Dolci-e-Desserts-Cheesecakes">
									<a class="" href="/ricette-cat/Dolci-e-Desserts/Cheesecakes/">Cheesecake</a>
								</li>
																					</ul>
					</li>
																<li id="cat-Contorni">
						<a class="sel" href="/ricette-cat/Contorni/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#contorni" />
								</svg>
							</span>
							Contorni
						</a>
						<ul>
													</ul>
					</li>
																<li id="cat-Insalate">
						<a class="" href="/ricette-cat/Insalate/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#insalate" />
								</svg>
							</span>
							Insalate
						</a>
						<ul>
													</ul>
					</li>
																<li id="cat-Torte-salate">
						<a class="" href="/ricette-cat/Torte-salate/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#torte-salate" />
								</svg>
							</span>
							Torte salate
						</a>
						<ul>
													</ul>
					</li>
																<li id="cat-Lievitati">
						<a class="" href="/ricette-cat/Lievitati/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#lievitati" />
								</svg>
							</span>
							Lievitati
						</a>
						<ul>
																							<li data-num="150" id="cat-Lievitati-Pizze-e-focacce">
									<a class="" href="/ricette-cat/Lievitati/Pizze-e-focacce/">Pizze e Focacce</a>
								</li>
																															<li data-num="115" id="cat-Lievitati-pane">
									<a class="" href="/ricette-cat/Lievitati/pane/">Pane</a>
								</li>
																															<li data-num="121" id="cat-Lievitati-Dolci">
									<a class="" href="/ricette-cat/Lievitati/Dolci/">Lievitati dolci</a>
								</li>
																					</ul>
					</li>
																<li id="cat-Salse-e-Sughi">
						<a class="" href="/ricette-cat/Salse-e-Sughi/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#salse-e-sughi" />
								</svg>
							</span>
							Salse e Sughi
						</a>
						<ul>
																							<li data-num="15" id="cat-Salse-e-Sughi-Sughi">
									<a class="" href="/ricette-cat/Salse-e-Sughi/Sughi/">Sughi</a>
								</li>
																															<li data-num="91" id="cat-Salse-e-Sughi-Salse-e-condimenti">
									<a class="" href="/ricette-cat/Salse-e-Sughi/Salse-e-condimenti/">Salse e condimenti</a>
								</li>
																					</ul>
					</li>
																<li id="cat-Marmellate-e-Conserve">
						<a class="" href="/ricette-cat/Marmellate-e-Conserve/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#marmellate-e-conserve" />
								</svg>
							</span>
							Marmellate e Conserve
						</a>
						<ul>
																							<li data-num="46" id="cat-Marmellate-e-Conserve-Marmellate">
									<a class="" href="/ricette-cat/Marmellate-e-Conserve/Marmellate/">Marmellate</a>
								</li>
																															<li data-num="35" id="cat-Marmellate-e-Conserve-Conserve">
									<a class="" href="/ricette-cat/Marmellate-e-Conserve/Conserve/">Conserve</a>
								</li>
																					</ul>
					</li>
																<li id="cat-Bevande">
						<a class="" href="/ricette-cat/Bevande/">
							<span class="gz-icon">
								<svg viewBox="0 0 100 100">
									<use width="100" height="100" xlink:href="/style/images/icons.svg?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379#bevande" />
								</svg>
							</span>
							Bevande
						</a>
						<ul>
																							<li data-num="18" id="cat-Bevande-Analcolici">
									<a class="" href="/ricette-cat/Bevande/Analcolici/">Analcolici</a>
								</li>
																															<li data-num="54" id="cat-Bevande-Alcolici">
									<a class="" href="/ricette-cat/Bevande/Alcolici/">Alcolici</a>
								</li>
																															<li data-num="12" id="cat-Bevande-frappe-frullati">
									<a class="" href="/ricette-cat/Bevande/frappe-frullati/">Frappè e Frullati</a>
								</li>
																					</ul>
					</li>
							
				</ul>

			</div>
		</div>
	</form>
</div>



    
<script>
var aInfos;function utf8_decode(e){var r=[],t=0,s=0,n=0,a=0,o=0;for(e+="";t<e.length;)(n=e.charCodeAt(t))<128?(r[s++]=String.fromCharCode(n),t++):n>191&&n<224?(a=e.charCodeAt(t+1),r[s++]=String.fromCharCode((31&n)<<6|63&a),t+=2):(a=e.charCodeAt(t+1),o=e.charCodeAt(t+2),r[s++]=String.fromCharCode((15&n)<<12|(63&a)<<6|63&o),t+=3);return r.join("")}function base64_decode(e){var r,t,s,n,a,o,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i=0,d=0,f=[];if(!e)return e;e+="";do{r=(o=u.indexOf(e.charAt(i++))<<18|u.indexOf(e.charAt(i++))<<12|(n=u.indexOf(e.charAt(i++)))<<6|(a=u.indexOf(e.charAt(i++))))>>16&255,t=o>>8&255,s=255&o,f[d++]=64==n?String.fromCharCode(r):64==a?String.fromCharCode(r,t):String.fromCharCode(r,t,s)}while(i<e.length);return utf8_decode(f.join(""))}function getCookie(e){for(var r=document.cookie.split("; "),t=0;t<r.length;t++){var s=r[t].split("=");if(e==s[0])return unescape(s[1])}return""}function userLogged(){var e=base64_decode(getCookie("vb_export"));return""!=e&&(1e3*(aInfos=JSON.parse(e)).expire<(new Date).getTime()&&fetch("/utente/refresh.php"),""!=aInfos&&void 0!=aInfos.userId&&void 0!=aInfos.userName&&void 0!=aInfos.digest)}function userMember(e){return!!e&&aInfos.userMembership}function userData(e){return e?aInfos.userName+"&&_&&"+aInfos.digest:""}function userRetention(e){return!!e&&"retention"==aInfos.userType}function userGP(e){return!!e&&(aInfos.userMembership&&aInfos.userMembershipIsGracePeriod)}function userImage(e){return e?aInfos.userPicture:""}var status1=userLogged(),status2=userMember(status1),status3=userRetention(status1),status4=userGP(status1),uData=userData(status1),uImage=userImage(status1);(handleUser=(()=>{var e=handleUser;e.init=(()=>{status1&&(document.body.classList.add("gz-status1"),status2&&document.body.classList.add("gz-status2"))}),e.init()}))();
</script>

<script>
var registrationUrl="https://www.giallozafferano.it/utente/registrazione?redirect=https%3A%2F%2Fwww.giallozafferano.it%2Fricette-cat%2FContorni%2F",loginUrl="https://www.giallozafferano.it/utente/login-do.php",redirectUrl="https://www.giallozafferano.it/ricette-cat/Contorni/",recoverPwdUrl="https://www.giallozafferano.it/utente/recupero-password/",fbLoginUrl="https://www.facebook.com/v14.0/dialog/oauth?client_id=372884629400015&redirect_uri=https%3A%2F%2Fwww.giallozafferano.it%2Futente%2Fregistrazione%3Fwith%3Dfacebook&scope=email",appleLoginUrl="https://appleid.apple.com/auth/authorize?response_type=code+id_token&response_mode=form_post&client_id=it.giallozafferano.gzricette&redirect_uri=https%3A%2F%2Fwww.giallozafferano.it%2Futente%2Fregistrazione%3Fwith%3Dapple&scope=name+email",googleLoginUrl="https://accounts.google.com/o/oauth2/v2/auth?client_id=43975754916-7be3d2l6omgf8v36uhukdlsq61nslmls.apps.googleusercontent.com&response_type=code&redirect_uri=https%3A%2F%2Fwww.giallozafferano.it%2Futente%2Fregistrazione%3Fwith%3Dgoogle&scope=openid+email+profile";
</script>

    
    
<!-- start Permutive -->
<script>
!function(e,o,n,t){if(!e){e=e||{},window.permutive=e,e.q=[];e.config={consentRequired:!0}||{},e.config.apiKey="4135c4c3-0caf-4f32-8398-66f881bfd4d9",e.config.workspaceId="08cdfe71-67da-407d-b4cc-64aaab77de67",e.config.environment=e.config.environment||"production",(window.crypto||window.msCrypto)&&(e.config.viewId=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}));for(var i=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],g=0;g<i.length;g++){var d=i[g];e[d]=function(o){return function(){var n=Array.prototype.slice.call(arguments,0);e.q.push({functionName:o,arguments:n})}}(d)}}}(window.permutive),"undefined"==typeof status2||status2||(window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting("permutive").length){var e=window.localStorage.getItem("_pdfps");window.googletag.pubads().setTargeting("permutive",e?JSON.parse(e):[]);var o=window.localStorage.getItem("permutive-id");o&&(window.googletag.pubads().setTargeting("puid",o),window.googletag.pubads().setTargeting("ptime",Date.now().toString())),window.permutive.config.viewId&&window.googletag.pubads().setTargeting("prmtvvid",window.permutive.config.viewId),window.permutive.config.workspaceId&&window.googletag.pubads().setTargeting("prmtvwid",window.permutive.config.workspaceId)}})),console.log("[permutive] init script");
</script>
<script async src="https://0801f79c-c3b0-44f6-9f5a-37611e3c986d.edge.permutive.app/08cdfe71-67da-407d-b4cc-64aaab77de67-web.js"></script>
<!-- end Permutive --> 
    
    
    
    <script>
        function isConsentGiven (siteId,cookiePolicyId){
            var cs = document.cookie.split(';');
            for (var i = 0; i < cs.length; i++) {
                while (cs[i].charAt(0) == ' ') cs[i] = cs[i].substring(1);
                if(cs[i].indexOf('_iub_cs-s'+ siteId) == 0||cs[i].indexOf('_iub_cs-'+ cookiePolicyId) == 0) return true;
            }
            return false;
        }
    </script>
    
    
<script>
function postTcfReady(cb) {
    if(typeof tcfIsReady !== 'undefined') {
        console.log('[Ame consent] cb by variable:',cb.name);
        cb();
    } else {
        window.addEventListener('tcf2Ready', function() {
            console.log('[Ame consent] cb by listener:',cb.name);
            cb();
        })
    }
}
</script>


    
<script>
function postConsentRejected(cb) {
    if (typeof window.ameConsentGiven !== 'undefined' && window.ameConsentGiven === false) {
        console.log('[Ame consent rejected] cb by variable:', cb.name);
        cb();
    } else {
        window.addEventListener('consentRejected', function () {
            console.log('[Ame consent rejected] cb by listener:', cb.name);
            cb();
        });
    }
}
</script>


    
    <!-- Configurazioni pushdown (comuni per consent e no consent)-->
<script>
    /* Setta una variabile per inibire la pushdown su HP, hp di categorie e in presenza di altri video */
    let showPushDown = true;
        showPushDown = false;
        
    //Il parametro "website" è differente per desk, mob. android, mob. ios
    let website = 'gzpv';
    if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        website = "gzpm-ios";
    } else if (navigator.userAgent.toLowerCase().indexOf("android") !== -1){
        website = "gzpm-android";
    }
    
    let isMobile =  window.innerWidth < 1000;
    
    //Il parametro "webpushdownTargetElement" indica all'interno di quale ID erogare la push e/o dove riposizionarla (desk/mob) in caso di chiusura
    let targetElementId = 'flyfirst-mobile-placement';
    if(!isMobile) targetElementId = 'flyfirst-placement';
</script>
    

    <script>
    var sw = document.documentElement.clientWidth,
        larghezzaSitoAdv = sw,
        isTouch = "ontouchstart"in window||navigator.msMaxTouchPoints>0,
        device = sw>950&&!isTouch?"desktop":950>sw&&sw>670||sw>950&&isTouch?"tablet":"smartphone",
        isPushing = false,
        is_bnzm_pdown = false;
    var nonce = '15ed5681de07c1bdbde3a94fb99287ee1b2ba379';
    var initAdsenseDone = false;
    var initOutbrainDone = false;
    var force300x250 = false;
    var lang = "it";
    var handleSeedtag = true;
    var gz1333_autorefresh = false;
    </script>
    <script>var dictionary = {moreSimilarRecipes: "GUARDA ALTRE RICETTE SIMILI",leaveComment: "Lascia un commento",commentSuccessMessage: "Grazie per aver commentato!<br/>Il tuo commento &egrave; in attesa di moderazione.<br/>La redazione è sempre attiva e continua a rispondere ai commenti, anche in questi giorni difficili.<br/>I tempi di risposta potrebbero solo essere più lunghi del solito.<br/>Ci scusiamo per il disagio e ringraziamo per la comprensione.",commentErrorMessage: "Si è verificato un errore nell'invio del commento, riprova più tardi.",commentModerationMessage: "I commenti inviati verranno moderati dalla redazione prima di essere pubblicati.<br />Per maggiori informazioni",clickHere: "CLICCA QUI",writeMessage: "Scrivi il tuo messaggio",commentModeration: "Moderazione commenti",send: "INVIA",shoppingListAdded: "Ricetta aggiunta alla lista della spesa",cookbookNotAvailable: "Ricettario non disponibile, riprova più tardi",cookbookCreate: "Crea nuovo ricettario",cookbookRecipeAdded: "Ricetta aggiunta al ricettario",cookbookChoose: "Scegli il ricettario",cookbookNew: "NUOVO RICETTARIO",cookbookName: "Nome ricettario",save: "SALVA",photoRecipeLoad: "Carica la foto della tua ricetta",photoRecipeSuccessMessage: "Grazie per averci inviato la tua versione. La tua versione è in moderazione, controlla lo stato nel tuo",personalSpace: "spazio personale",photoRecipeBigFileMessage: "File troppo grande, massimo",photoRecipeLoading: "Caricamento...",photoRecipeLoadingDone: "Completato",photoRecipeLeaveComment: "Il tuo commento",photoRecipeWriteMessage: "Raccontaci come l'hai fatta...",photoRecipeLimitChars: "ti restano <span>200</span> caratteri",photoRecipeAlreadySent1: "Hai già inviato la tua versione di",photoRecipeAlreadySent2: ", è possibile inviare una sola versione per ricetta.",ok: "Ok",skillDifficulty: "Difficoltà",skillPreparation: "Preparazione",skillCookingTime: "Cottura",skillServes: "Dosi per",skillCost: "Costo",skillNote: "Nota",skillVeryEasy: "Molto facile",skillEasy: "Facile",skillMedium: "Media",skillDifficult: "Difficile",skillVeryDifficult: "Molto difficile",recipesInAMinute: "Ricette in un minuto",goToVideo: "VAI AL VIDEO",readMore: "LEGGI",readModeExtended: "LEGGI TUTTO",readModeExtended1: "Leggi tutto",readHere: "Leggi qui",close: "Chiudi",benessere: "BENESSERE",searchARecipe: "Cerca una ricetta",loginEnter: "Entra",loginRegister: "Registrati",loginNotRegistered: "Non sei iscritto?",loginRegisterNow: "Registrati subito",loginFacebookSignIn: "Accedi con Facebook",loginAppleSignIn: "Accedi con ID Apple",loginUsername: "Nome utente",loginPassword: "Password",loginForgotPassword: "Password dimenticata?",loginRecover: "Recupera",loginSignIn: "Accedi",userMenuTitle: "La tua area riservata",userMenuCookbook: "I miei ricettari",userMenuMadeByMe: "Fatte da me",userMenuShoppingList: "La mia lista della spesa",userMenuEdit: "Modifica dati",userMenuLogOut: "Esci",userMenuLive: "Dirette",loginShoppingListMessage: "Per usare la lista della spesa devi essere registrato.",loginPhotoCommentsMessage: "Per inviare le tue versioni, devi essere registrato.",loginCommentsMessage: "Per commentare devi essere registrato.",loginCookbookMessage: "Per usare i ricettari devi essere registrato.",filterWatchResults: "Guarda",filterResult: "Risultato",filterResults: "Risultati",filterZeroResults: "0 Risultati",podcastReadSteps: "LEGGI I PASSAGGI",podcastContinue: "PROSEGUI",podcastListenEverything: "Ascolta tutto"};</script>


    
<script>
var isLeaf = false,
	leafData = '',
	isCat = true,
	isBenessere = false;
</script>


    
<script>
function mmLoader(objAttr, chainId = null, elementType = "script", target = document.body) {
    return new Promise(function (resolve, reject) {
        let element = document.createElement(elementType);

        for (const property in objAttr) {
            element.setAttribute(property, objAttr[property]);
        }
        let path = objAttr.src || objAttr.href;
        element.onload = () => {
            resolve(element);
            console.log(`[mmLoader] ${path} caricato!`, "chainId_" + chainId + " Time: " + performance.now());
        };
        element.onerror = e => {
            reject(
                new Error(`[mmLoader] Errore sul caricamento di ${path}`)
            );
            console.log(e);
        };

        target.appendChild(element);
    });
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
</script>


                <script>
        var hideRecipeAdv = false;
        var hidePushdown = false;
        var hideIntro = false;
    </script>
            
    

    <script src="https://www.giallozafferano.it/js/min/common.min.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379"></script>
    <script async src="https://www.giallozafferano.it/js/min/gzheader.min.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379"></script>

    
    <script>
    if (!status2) {
        mmLoader({
            src: "https://dafne.sirio.stbm.it/utility-fe/prod/web-components/ame-mh.min.js",
            defer: true
        });
    }  
    </script>
    

    
<script async src="https://www.giallozafferano.it/js/min/listing.min.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379"></script>


            
            
<script>
if(!status2){var PWT={},gslots=[],googletag=googletag||{};googletag.cmd=googletag.cmd||[];var gptRan=!1;function initLibGPT(){console.log("initLibGPT start time",performance.now()-window.startTimeInitLibGPT),setTimeout(function(){PWT.jsLoaded=function(){t()};var t=function(){if(!gptRan){gptRan=!0;var t=document.createElement("script"),e="https:"==document.location.protocol;t.src=(e?"https:":"http:")+"//securepubads.g.doubleclick.net/tag/js/gpt.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),console.log("initLibGPT end time",performance.now()-window.startTimeInitLibGPT),performance.mark("GPT load end"),performance.measure("[BID] GPT loaded end","GPT start loading")}};setTimeout(t,1e3),function(){var t=window.location.href,e="//ads.pubmatic.com/AdServer/js/pwt/76492/"+(sw<1e3?"1305":"745"),n="";if(t.indexOf("pwtv=")>0){var o=/pwtv=(.*?)(&|$)/g.exec(t);o.length>=2&&o[1].length>0&&(n="/"+o[1])}var a=document.createElement("script");a.async=!0,a.type="text/javascript",a.src=e+n+"/pwt.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r)}()},0)}window.startTimeInitLibGPT=performance.now(),performance.mark("GPT start loading")}
</script>


        
        
        

<script class="ame-ets-config" type="application/json">
  {
    "website": "gz-site",
    "context": "list",
    "userVariable": "aInfos.userId"
  }
</script>



        



<script>
force300x250 = true;
var MMsezioneTag = advChannel = "/4758/giallozafferano/ricette";
var gpt_conf = ["gpt_topslot", "gpt_strip", "gpt_stripmobile", "gpt_oop", "gpt_native1", "gpt_native2", "gpt_native3", "gpt_native_sidebar1", "gpt_native_sidebar2", "gpt_native_sidebar3", "gpt_oop2"];
</script>













        
    
<script>
var permutiveEnabled=!1;let token=(document.cookie.match(/(?:iub)?euconsent-v2=([^;]*)/)||[])[1];function setupPermutive(){__tcfapi("getTCData",2,(e,t)=>{t&&e&&(e.purpose.consents[1]&&e.purpose.consents[3]&&e.purpose.consents[5]&&e.purpose.consents[7]&&e.purpose.consents[9]&&e.vendor.consents[361]&&(permutiveEnabled=!0,window._exaudiMediaset=window._exaudiMediaset||[],window._exaudiMediaset.push(["S",["_cm","PERMUTIVE"]])),token||(token=e.tcString))})}postTcfReady(setupPermutive);let adMantxLoaded=!1;function startAdvChain2022(){let e=performance.now();const t=[function(){let e=`{"tag": "top2_120x600","key": "01c696ae4561941bdbe0a8c8369695210c0af159339995163de286cea214b58f","method": "descriptor","filter": "default","decorator": "template.banzai_cooking","type": "URL","mode": "async","body": "${escape(document.location.href)}"}`,t=encodeURI("https://euasync01.admantx.com/admantx/service?request="+e);return mmLoader({src:t,async:!0},"advChain")}(),!!permutiveEnabled&&mmLoader({src:"https://c.neodatagroup.com/mediaset.js",async:!0},"advChain")];Promise.allSettled(t).then(t=>{console.log("[startAdvChain2022] admantx elaborato",performance.now()-e),console.log("[startAdvChain2022]",t),adMantxLoaded=!0;var a=new Event("adMantxReady");window.dispatchEvent(a),"function"!=typeof GPTLoad||status2||GPTLoad()}).then(t=>{"function"!=typeof GPTLoad||status2||console.log("[startAdvChain2022] gpt handler e mm caricati",performance.now()-e);const a=new Event("advChainLoaded");window.dispatchEvent(a)})}postTcfReady(startAdvChain2022);
</script>


    
<script>
var bindResultPromises=[];let GPTHandlerLoad=()=>mmLoader({src:`https://www.giallozafferano.it/js/min/gptHandler.min.js?cb=${nonce}`,async:!0},"advChain").then(n=>{const a=new Event("gptHandlerLoaded");window.dispatchEvent(a)}),GPTLoad=()=>{GPTChain(),setTimeout(()=>{initLibGPT()},10)};
</script>

    

<script>
let adsensePush=()=>{let e=document.querySelectorAll(".adsbygoogle:not(.processed)");if(e.length>0)for(var s=0;s<e.length;s++)e[s].removeAttribute("data-adsbygoogle-status"),e[s].classList.add("processed"),(adsbygoogle=window.adsbygoogle||[]).push({})};function startAdsense(){setTimeout(()=>{mmLoader({"data-ad-client":"ca-pub-7835681492882497",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",async:!0}).then(e=>{initAdsenseDone=!0;let s=document.createEvent("Event");s.initEvent("loadedAdsense",!0,!1),document.dispatchEvent(s)})},6e3)}status2||(adsensePush(),postTcfReady(startAdsense));
</script>



<script>
function AMEETSLoad(){mmLoader({src:"https://dafne.sirio.stbm.it/ame-ets/client/ame-ets-client.js",async:!0})}postTcfReady(AMEETSLoad);
</script>



<script>
function startPermutive(){if(console.log("[permutive] start permutive"),permutiveEnabled){permutive.consent({opt_in:!0,token:token}),console.log("[permutive] setup consent with token",token);let e=[{id:getGaClientId(),tag:"ame_publisher_id",priority:1}];permutive.identify(e),console.log("[permutive] setup user identities",e),adMantxLoaded?addonPermutive():window.addEventListener("adMantxReady",()=>addonPermutive())}}function postPermutiveIdGeneratorReady(){"undefined"!=typeof permutiveIdGeneratorReady?startPermutive():window.addEventListener("permutiveIdGeneratorReady",function(){startPermutive()})}postTcfReady(postPermutiveIdGeneratorReady);
</script>



        
            


<script>function addonPermutive() {const label = !(ADX_label.includes(ADX_lemmas)) ? `${ ADX_label },${ ADX_lemmas },${ ADX_people },${ ADX_categories },${ ADX_places },${ ADX_companies }` : ADX_label;const d = new Date();const hour = new Date().getHours();const weekday = ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];let semantic_label = label.split(',');let day_of_week = weekday[d.getDay()];let time_of_day = (hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : hour < 22 ? 'Evening' : 'Night');let platform = document.documentElement.clientWidth < 480 ? 'giallozafferano-web-mobile' : 'giallozafferano-web-desktop';let addonData = {"page": {semantic_label,"brand": "GialloZafferano","site_name": "giallozafferano","publisher": "Mondadori",platform,time_of_day,day_of_week,"page": {"type": "Categoria"},"article": {"authors": "GialloZafferano","title": "Ricette contorni"},"meta_keywords": ["Contorni","ricette Contorni"],"classifications_watson": {"categories": "$alchemy_taxonomy","keywords": "$alchemy_keywords"}}};permutive.addon('web', addonData);console.log(`[permutive] addon web`, addonData);}</script>
        

        
    <script>
    let GPTChain = () => {
        GPTHandlerLoad();
        mmLoader({
            src: "https://adv.mediamond.it/hp_sponsor_giallozafferano/hpsponsor_giallozafferano.v2.js",
            async: true
        },"mediamondChain").then(
            element => mmLoader({
                src: "https://adv.mediamond.it/hp_sponsor_giallozafferano/300x100_giallozafferano_blocco_new.js",
                async: true
            },"mediamondChain")
        );
    };
    </script>
        
    
    
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-678608-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('set', 'allow_google_signals', isConsentGiven(1779545, 81919939));

                        var dimensionValue = 'Standard';
                    gtag('set', { 'dimension17': dimensionValue });
        
        var userType = status1 ? 'Autenticato' : 'Anonimo';
        gtag('set', { 'dimension19': userType });

    </script>

    
    
    
    

<script>
if (typeof(userType)=== 'undefined') {
	var userType = status1 ? 'Autenticato' : 'Anonimo';
}
gtag('config', 'UA-678608-2', {'anonymize_ip': true});
gtag('config', 'G-BKMXXCDHL5', {
	'anonymize_ip': true,
	'dimension17': 'Standard',
	'dimension19': userType

});
</script>    


    

    <script>
var push_notification_api_data = {
    'ajax_url': 'https://np.altervista.org/',
    'account': 'gz-website',
    'platform': 'gz-website',
    'is_live': true,
    'return_topic': function (arg) {
    	return this.is_live ? arg : arg + '-dev';
	}
};
if (location.host === 'www.giallozafferano.com') {
    push_notification_api_data.account = 'gz-website-en';
    push_notification_api_data.platform = 'gz-website-en';
}
</script>

<script>
setTimeout(function() {
    mmLoader({
        src: "https://www.gstatic.com/firebasejs/4.10.1/firebase-app.js",
        async: true
    }, "pushNotificationChain")
    .then(element => mmLoader({
        src: "https://www.gstatic.com/firebasejs/4.10.1/firebase-messaging.js",
        async: true
    }, "pushNotificationChain"))
    .then(element => mmLoader({
        src: "/js/push/api.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379",
        async: true
    }, "pushNotificationChain"))
    .then(element => mmLoader({
        src: "/js/push/object.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379",
        async: true
    }, "pushNotificationChain"))
    .then(element => mmLoader({
        src: "/js/push/frontend.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379",
        async: true
    }, "pushNotificationChain"))
    .then(element => mmLoader({
        src: "/js/push/client.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379",
        async: true
    }, "pushNotificationChain"));
}, 5000);
</script>



    
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJ59HQLS');</script>
<!-- End Google Tag Manager -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJ59HQLS"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


    

    <script>
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                if(img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        } else {
            // Dynamically import the LazySizes library
            const script = document.createElement('script');
            script.src = '/js/lazysizes.min.js?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379';
            script.async = true;
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    </script>

    <script async src="https://dafne.sirio.stbm.it/utility-fe/prod/general/network.common.v3.js"></script>


    <script>
        let stylePrint = document.createElement('link');
        stylePrint.rel = 'stylesheet';
        stylePrint.href = '/style/min/print.min.css?cb=15ed5681de07c1bdbde3a94fb99287ee1b2ba379';
        stylePrint.media = 'print';
        document.body.appendChild(stylePrint);
    </script>

    
    
    <style>
    .gz-critical ~ * {opacity: 1;}
    .gz-footer {opacity:1;}
    </style>
    
    

    
</body>
</html>
