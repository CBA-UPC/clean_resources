(function(){var DEPS_GRAPH={'dcmenablermodule':[],'$weak$':['dcmenablermodule']};window.STUDIO_SDK_START=+new Date();/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var f,aa=m="function"==typeof Object.defineProperties?Object.defineProperty:ba=ca=ba(this),p=
p("Symbol",;
p("Symbol.iterator",;
var da=r=ea="function"==typeof Object.create?Object.create:fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?null}
var ka=fa,t=la=u=
p("WeakMap",;
p("Map",;var ma=p("Array.prototype.keys",;
p("Array.from",;p("Array.prototype.values",;
p("Object.is",;p("Array.prototype.includes",;
p("String.prototype.includes",;
var v=this||self,w=x=y=var na=function(a){this.g=a};na.prototype.toString=w("studio.common.mde.Direction",na);na.Corner={ra:0,sa:1,ma:2,na:3};var oa=Array.prototype.indexOf?var z=z.prototype.toString=function(){return this.g.toString()};z.prototype.h=!0;var qa=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,ra=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,pa={},sa=new z("about:invalid#zClosurez",pa);var ta,ua;a:{for(var va=["CLOSURE_FLAGS"],wa=v,xa=0;xa<va.length;xa++)if(wa=wa[va[xa]],null==wa){ua=null;break a}ua=wa}var ya=ua&&ua[610401301];ta=null!=ya?ya:!1;ar A,Aa=v.navigator;A=Aa?Aa.userAgentData||null:null;

 SPDX-License-Identifier: Apache-2.0
*/
var Da;try{new URL("s://g"),Da=!0}catch(a){Da=!1}var Ea=Da;var Fa=Fa[" "]=function(){};var Ga=var Ha=B("Gecko")&&!(-1!=za().toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge");!B("Android")||Ca();Ca();B("Safari")&&(Ca()||(C()?0:B("Coast"))||(C()?0:B("Opera"))||(C()?0:B("Edge"))||(C()?Ba("Microsoft Edge"):B("Edg/"))||C()&&Ba("Opera"));var D=function(){},Ja=Ia=G=w("studio.common.Environment",D);D.Type={LIVE:1,LOCAL:2,BROWSER:4,IN_APP:8,LAYOUTS_PREVIEW:16,CREATIVE_TOOLSET:32,RENDERING_STUDIO:64,RENDERING_TEST:128,PREVIEW:256};var E=6;D.addType=D.setType=Ja;D.hasType=D.getValue=var H=H.prototype.aspectRatio=H.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};H.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};H.prototype.round=var Ka=function(){};var I=I.prototype.h=var La=);var J=function(a){I.call(this,a?a.type:"");this.relatedTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;if(a){var b=this.type=a.type,c=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;var d=a.relatedTarget;d?Ha&&(Ga(d,"nodeName")||(d=null)):"mouseover"==b?d=a.fromElement:"mouseout"==
b&&(d=a.toElement);this.relatedTarget=d;c?(this.clientX=void 0!==c.clientX?c.clientX:c.pageX,this.clientY=void 0!==c.clientY?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||
0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ma[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&J.G.h.call(this)}};y(J,I);var Ma={2:"touch",3:"pen",4:"mouse"};J.prototype.h=var K="closure_listenable_"+(1E6*Math.random()|0);var Na=0;var Oa=Pa=var Qa=Qa.prototype.add=
var Sa=Ra=var Ta="closure_lm_"+(1E6*Math.random()|0),Ua={},Va=0,L=Ya=$a=Wa=cb=db=ab=bb=Za=eb="__closure_events_fn_"+(1E9*Math.random()>>>0),Xa=var fb=y(fb,Ka);var gb=[],hb=function(a,b,c){var d=document.body||window,e={capture:!0,passive:!0};Array.isArray(b)||(b&&(gb[0]=b.toString()),b=gb);for(var g=0;g<b.length;g++){var n=L(d,b[g],c||a.handleEvent,e||!1,a.m||a);if(!n)break;a.j[n.key]=n}};fb.prototype.handleEvent=var ib=function(){fb.call(this);this.g=new Map;this.h=!1;this.g.set("nx",null);this.g.set("ny",null);this.g.set("dim",null)};t(ib,fb);ib.prototype.o=ib.prototype.i=function(a){var b=a.clientX,c=a.clientY;a.changedTouches&&a.changedTouches[0]&&(b=a.changedTouches[0].clientX,c=a.changedTouches[0].clientY);this.g.set("nx",Math.round(b));this.g.set("ny",Math.round(c))};var jb={pa:"dcm",qa:"studio",oa:"clicktag"};w("studio.sdk.ContainerState",{COLLAPSING:"collapsing",COLLAPSED:"collapsed",EXPANDING:"expanding",EXPANDED:"expanded",FS_COLLAPSING:"fs_collapsing",FS_EXPANDING:"fs_expanding",FS_EXPANDED:"fs_expanded"});w("studio.sdk.MraidMethod",{GET_CURRENT_POSITION:"getCurrentPosition",GET_DEFAULT_POSITION:"getDefaultPosition",GET_SCREEN_SIZE:"getScreenSize",CREATE_CALENDAR_EVENT:"createCalendarEvent",GET_MAX_SIZE:"getMaxSize",PLAY_VIDEO:"playVideo",STORE_PICTURE:"storePicture",SUPPORTS:"supports",USE_CUSTOM_CLOSE:"useCustomClose"});var kb=function(){};w("studio.sdk.IEnabler",kb);f=kb.prototype;f.ga=function(){};f.ba=function(){};f.aa=function(){};f.ia=function(){};f.ha=function(){};f.isVisible=function(){};f.W=function(){};f.V=function(){};f.U=function(){};f.H=function(){};f.getParameter=function(){};f.C=function(){};f.I=function(){};f.N=function(){};f.counter=function(){};f.ja=function(){};f.ka=function(){};f.O=function(){};f.P=function(){};f.da=function(){};f.K=function(){};f.ca=function(){};f.J=function(){};f.close=function(){};
f.S=function(){};f.X=function(){};f.addEventListener=function(){};f.removeEventListener=function(){};f.Z=function(){};f.Y=function(){};f.fa=function(){};f.M=function(){};f.ea=function(){};f.L=function(){};f.R=function(){};f.T=function(){};var lb=function(){};lb.prototype.log=function(){};lb.prototype.info=function(){};var mb=new lb;w("studio.sdk.logger",mb);w("studio.module.ModuleId",{ENABLER:"enabler",DCM_ENABLER:"dcmenabler",SSR_ENABLER:"ssrenabler",CLICK_TAG_ENABLER:"clicktagenabler",ENABLER_LOADER:"enablerloader",DCM_ENABLER_LOADER:"dcmenablerloader",CLICK_TAG_ENABLER_LOADER:"clicktagenablerloader",VIDEO:"video",CONFIGURABLE:"configurable",CONFIGURABLE_FILLER:"configurablefiller",LAYOUTS:"layouts",FILLER:"layoutsfiller",RAD_VIDEO:"rad_ui_video",GDN:"gdn"});var nb=nb.prototype[Symbol.iterator]=function(){return this};nb.prototype.next=var ob=var pb=function(){};pb.prototype.next=function(){return qb};var qb={done:!0,value:void 0};pb.prototype.v=var rb=M=function(a){this.g=a};M.prototype.v=function(){return new N(this.g())};M.prototype[Symbol.iterator]=function(){return new O(this.g())};M.prototype.h=
var N=t(N,pb);N.prototype.next=function(){return this.g.next()};N.prototype[Symbol.iterator]=function(){return new O(this.g)};N.prototype.h=var O=t(O,M);O.prototype.next=var P=P.prototype.F=P.prototype.D=
P.prototype.has=var sb=f=P.prototype;f.get=
f.set=f.forEach=f.keys=function(){return rb(this.v(!0)).h()};f.values=f.entries=
f.v=var Q=y(Q,Ka);Q.prototype[K]=!0;Q.prototype.addEventListener=function(a,b,c,d){L(this,a,b,c,d)};Q.prototype.removeEventListener=function(a,b,c,d){cb(this,a,b,c,d)};var R=new P;R.set("enabler","enabler");R.set("dcmenabler","dcm");R.set("video","vid");R.set("configurable","cfg");R.set("configurablefiller","cfg_fill");R.set("layouts","lay");R.set("layoutsfiller","lay_fill");R.set("gdn","gdn");R.set("rad_ui_video","rad");w("goog.exportSymbol",this);var tb=w("studioLoader.context.evalInContext",tb);var ub=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),vb=var S=
S.prototype.toString=
S.prototype.resolve=
var wb=xb=yb=T=V=Gb=Ab=/[#\/\?@]/g,Cb=/[#\?:]/g,Bb=/[#\?]/g,Fb=/[#\?@]/g,Db=/#/g,U=W=U.prototype.add=
var Hb=Ib=f=U.prototype;f.forEach=f.D=
f.F=f.set=f.get=
f.toString=
var zb=X=Eb=var Jb=var Y=function(a){L(window,"message",Kb);mb.info("");if(a!=Lb)return!1;Q.call(this);this.h=null;this.h||(this.h=new S((window.STUDIO_ORIGINAL_ASSET_URL?window.STUDIO_ORIGINAL_ASSET_URL:window.location.href).replace(/%(?![A-Fa-f0-9][A-Fa-f0-9])/g,"%25")));(a=this.i=this.h.i)&&(a=a.get("e",null))&&Ja(parseInt(a,10)||0);a=this.j=new ib;a.h=!0;hb(a,"mousedown",a.i);hb(a,"touchstart",a.i)},Mb,Nb;y(Y,Q);w("studio.DcmEnabler",Y);
var Lb=Math.random(),Ob=null,Pb={},Qb=new Map,Rb=!1,Sb=Y.getInstance=Sb;var Kb=function(a){if("string"===typeof a.g.data){try{var b=JSON.parse(a.g.data)}catch(e){return}if(b.isInitClickTag){if(a=b.clickTags)for(var c=0;c<a.length;c++){var d=a[c];Pb[d.name]=d.url;Qb.set(d.name,d.reportingId)}"newtonOt2Token"in b&&Tb(b.newtonOt2Token);Nb=!!b.isTurtleXAdClick;Mb=b.relegateNavigation}}};Y.prototype.ba=function(){};Y.prototype.reportManualClose=Y.prototype.ba;
Y.prototype.aa=function(){};Y.prototype.reportEngagement=Y.prototype.aa;Y.prototype.ga=function(){};Y.prototype.setExpandingPixelOffsets=Y.prototype.ga;Y.prototype.ia=function(){};Y.prototype.setStartExpanded=Y.prototype.ia;Y.prototype.ha=function(){};Y.prototype.setIsMultiDirectional=Y.prototype.ha;Y.prototype.isVisible=function(){return!0};Y.prototype.isVisible=Y.prototype.isVisible;Y.prototype.W=function(){return!0};Y.prototype.isServingInLiveEnvironment=Y.prototype.W;Y.prototype.V=function(){return!0};
Y.prototype.isPageLoaded=Y.prototype.V;Y.prototype.U=Y.prototype.isInitialized=Y.prototype.U;Y.prototype.H=function(){};Y.prototype.callAfterInitialized=Y.prototype.H;Y.prototype.getParameter=Y.prototype.getParameter=Y.prototype.getParameter;
Y.prototype.C=function(a,b){var c=null!=Pb[a]&&"null"!=Pb[a]?Pb[a]:void 0===b?"":b;if(c&&(b=this.j,b.h)){var d=window.document;d="CSS1Compat"==d.compatMode?d.documentElement:d.body;d=new H(d.clientWidth,d.clientHeight);b.g.set("dim",d.width+"x"+d.height);d="";for(var e=r(b.g),g=e.next();!g.done;g=e.next()){var n=r(g.value);g=n.next().value;n=n.next().value;d=null==n?d+"&"+g+"=":d+"&"+g+"="+n}e=c.toLowerCase().indexOf("&adurl=");-1<e&&b.o(c,d)&&(c=c.substr(0,e)+d+c.substr(e))}if("parent"===Mb)window.parent.postMessage(JSON.stringify({clickTag:c,
isPostClickTag:!0}),"*");else{var k;if(Rb&&(null==(k=document.featurePolicy)?0:k.allowedFeatures().includes("attribution-reporting"))){if(c){k=window;b=c;b instanceof z||(b="object"==typeof b&&b.h?b.g.toString():String(b),ra.test(b)?b=new z(b,pa):(b=String(b).replace(/(%0A|%0D)/g,""),b=b.match(qa)?new z(b,pa):null));b=b||sa;if(b instanceof z)var h=b instanceof z&&b.constructor===z?b.g:"type_error:SafeUrl";else{b:if(Ea){try{h=new URL(b)}catch(l){h="https:";break b}h=h.protocol}else c:{h=document.createElement("a");
try{h.href=b}catch(l){h=void 0;break c}h=h.protocol;h=":"===h||""===h?"https:":h}h="javascript:"!==h?b:void 0}void 0!==h&&k.open(h,"_blank","attributionsrc")}}else window.open(c)}Nb&&(a={reportingId:Qb.get(a)},window.parent.postMessage(JSON.stringify(a),"*"))};Y.prototype.exit=Y.prototype.C;Y.prototype.I=Y.prototype.exitOverride=Y.prototype.I;Y.prototype.N=function(a){return a};Y.prototype.formExitUrlFromOverride=Y.prototype.N;Y.prototype.counter=function(){};
Y.prototype.counter=Y.prototype.counter;Y.prototype.ja=function(){};Y.prototype.startTimer=Y.prototype.ja;Y.prototype.ka=function(){};Y.prototype.stopTimer=Y.prototype.ka;Y.prototype.O=function(){return"collapsed"};Y.prototype.getContainerState=Y.prototype.O;Y.prototype.P=Y.prototype.getExpandDirection=Y.prototype.P;Y.prototype.da=function(){};Y.prototype.requestExpand=Y.prototype.da;Y.prototype.K=function(){};Y.prototype.finishExpand=Y.prototype.K;Y.prototype.ca=function(){};
Y.prototype.requestCollapse=Y.prototype.ca;Y.prototype.J=function(){};Y.prototype.finishCollapse=Y.prototype.J;Y.prototype.close=function(){};Y.prototype.close=Y.prototype.close;Y.prototype.S=Y.prototype.getUrl=Y.prototype.S;Y.prototype.X=function(){};Y.prototype.loadModule=Y.prototype.X;Y.prototype.addEventListener=function(a,b,c,d){L(this,a,b,c,d)};Y.prototype.addEventListener=Y.prototype.addEventListener;Y.prototype.removeEventListener=
Y.prototype.removeEventListener=Y.prototype.removeEventListener;Y.prototype.Z=function(){};Y.prototype.queryFullscreenSupport=Y.prototype.Z;Y.prototype.Y=function(){};Y.prototype.queryFullscreenDimensions=Y.prototype.Y;Y.prototype.fa=function(){};Y.prototype.requestFullscreenExpand=Y.prototype.fa;Y.prototype.M=function(){};Y.prototype.finishFullscreenExpand=Y.prototype.M;Y.prototype.ea=function(){};Y.prototype.requestFullscreenCollapse=Y.prototype.ea;Y.prototype.L=function(){};
Y.prototype.finishFullscreenCollapse=Y.prototype.L;Y.prototype.T=Y.prototype.invokeMraidMethod=Y.prototype.T;Y.prototype.R=Y.prototype.getSdk=Y.prototype.R;var Tb=function(a){/Chrome/.test(window.navigator.userAgent)&&(Jb(function(b){b=b.document;if(a&&b.head){var c=void 0===c?document:c;c=c.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a}return!1}),Rb=!0)},Ub=Sb();
w("Enabler",Ub);var Z=t(Z,I);Z.prototype.la=w("studio.events.StudioEvent",Z);Z.prototype.addProperty=Z.prototype.la;Z.INIT="init";Z.VISIBLE="visible";Z.HIDDEN="hidden";Z.VISIBILITY_CHANGE="visibilityChange";Z.VISIBILITY_CHANGE_WITH_INFO="visibilityChangeWithInfo";Z.EXIT="exit";Z.INTERACTION="interaction";Z.PAGE_LOADED="pageLoaded";Z.ORIENTATION="orientation";Z.ABOUT_TO_EXPAND="aboutToExpand";Z.EXPAND_START="expandStart";Z.EXPAND_FAILED="expandFailed";
Z.EXPAND_FINISH="expandFinish";Z.COLLAPSE_START="collapseStart";Z.COLLAPSE_FINISH="collapseFinish";Z.COLLAPSE="collapse";Z.FULLSCREEN_SUPPORT="fullscreenSupport";Z.HOSTPAGE_FEATURES_LOADED="hostpageFeaturesLoaded";Z.FULLSCREEN_DIMENSIONS="fullscreenDimensions";Z.FULLSCREEN_EXPAND_START="fullscreenExpandStart";Z.FULLSCREEN_EXPAND_FINISH="fullscreenExpandFinish";Z.FULLSCREEN_COLLAPSE_START="fullscreenCollapseStart";Z.FULLSCREEN_COLLAPSE_FINISH="fullscreenCollapseFinish";Z.HOSTPAGE_SCROLL="hostpageScroll";
Z.OPTIONAL_HOSTPAGE_SCROLL="optHostpageScroll";Z.SCROLL_INTERACTION="scrollInteraction";Z.ENTER_VIEWPORT="enterViewport";Z.OPTIONAL_ENTER_VIEWPORT="optEnterViewport";Z.EXIT_VIEWPORT="exitViewport";Z.OPTIONAL_EXIT_VIEWPORT="optExitViewport";Z.VIDEO_START="videoStart";})();
