// Pendo Agent Wrapper
// Copyright 2024 Pendo.io, Inc.
// Environment:    production
// Agent Version:  2.215.0
// Installed:      2024-01-18T19:12:25Z
(function (PendoConfig) {
/*
@license https://agent.pendo.io/licenses
*/
!function(ky,My,Py){!function(){var A=Array.prototype.slice;try{A.call(My.documentElement)}catch(Ut){Array.prototype.slice=String.prototype.trim||(String.prototype.trim=;var R=),Gt="undefined"!=typeof globalThis?globalThis:void 0!==ky?ky:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};ar n={exports:{}},i=(!n),n.exports),O=e(i),r,o={createScriptURL:function(e){return e},createHTML:function(e){return e}};ar L="stagingServerHashes",S,a={};function N(e){return e.loadAsModule}unction M(e){return"staging"===e.environmentName}n H(e){return e&&e.stagingAgentUrl&&e[L]}ar W=["initialize","identify","updateOptions","pageLoad","track","clearSession"];n le(e){a=e}function fe(){return a}r ge={exports:{}},me=(!),ge.exports),J=e(me),ve;r m=),be="prod",we="extension",Ie="native";function Se(){return m.get("installType")||Ie}r _e=u,Te;ar Re=r Ne=u=Ne(Le()),ke=ar Te=ke(Le(),u),Pe={},Fe=Ae((/android (\d+)/.exec(Re(Le()))||[])[1]),De=/Boxee/i.test(Le()),Ue=ky.document||{},Ge=Ue.documentMode,Be,ze=/^(Moz|webkit|O|ms)(?=[A-Z])/,He=Ue.body&&Ue.body.style,je=!1,We=!1,Ke;if(He){for(var qe in He)if(Ke=ze.exec(qe),Ke){Be=Ke[0],Be=Be.substr(0,1).toUpperCase()+Be.substr(1);break}Be=Be||"WebkitOpacity"in He&&"webkit",je=!!("transition"in He||Be+"Transition"in He),We=!!("animation"in He||Be+"Animation"in He),!Fe||je&&We||(je=J.isString(Ue.body.style.webkitTransition),We=J.isString(Ue.body.style.webkitAnimation))}var Je=J.memoize(;r g={supportsHistoryApi:Je,supportsHashChange:Ve,hasEvent:vendorPrefix:Be,transitions:je,animations:We,android:Fe,msie:u,msieDocumentMode:Ge,safari:/apple/i.test(navigator.vendor),sri:"integrity"in My.createElement("script"),addEventListener:J.isFunction(ky.addEventListener),MutationObserver:Me(ky.MutationObserver),isMinimumIEVersion:Oe,isMobileUserAgent:J.memoize($e)},Ze=Ye=Xe="prod",Qe="https://app.pendo.io",et="cdn.pendo.io",tt="agent/releases/2.215.0",nt="prod",it="2.215.0_prod",rt="2.215.0",ot=at=r y=ky.JSON,dt=(y&&"function"==typeof y.stringify&&'{"props":{}}'===y.stringify({props:{}})||(y={}),!),/^\s+|\s+$/g),ct=String.prototype.trim;ar ct=ct||ft={exports:{}},pt=(!call(ft.exports),ft.exports),ht=e(pt),gt={Deflate:ht.Zlib.Deflate},mt={base64Url:"base64url",binary:"binary"};ar yt={exports:{}},bt=(!call(yt.exports),yt.exports),wt=e(bt),It={CRC32:wt.Zlib.CRC32},St=Et=xt=r Tt=Lt=Ot(ky);r Mt=ar Ft=J.isFunction(ky.decodeURIComponent)?ky.decodeURIComponent:J.identity,Dt=J.isFunction(ky.encodeURIComponent)?ky.encodeURIComponent:J.identity,Bt={},zt,Ht=!0,jt=function(){return m.get("localStorageOnly")},Wt=function Kt(e){Ht=e}var qt=Jt=unction $t(){return zt}ar Yt=Xt=Qt=864e7,en=c=),tn=ky.Promise,tn=,nn=),V;,fe())&&g.isMinimumIEVersion(11)?V={all:reject:function(){return tn.reject.apply(tn,arguments)},resolve:defer::(V=nn,V.all=rn,V.reject=function(e){var t=V.defer();return t.reject(e),t.promise},V.resolve=;var dn=un(function(){return ky.localStorage}),cn=un(;ar fn=ln(ky);n.clear=var b=);r $=gn(),mn=($.subscribe(,;ar yn=bn=),wn=),In,Sn=(!In=In||{}),bn)),Z=new Sn,En="_PENDO_T_",xn=11,Cn=ar Tn=An=Rn=function(){return!m.get("disablePersistence")},On=Ln="VISITOR-UNIQUE-ID",Nn=function(e){return Ln===e},kn="::",Mn=Pn=Fn=Y=Dn=Un=Gn=n=ar Jn=qn);function Vn(e){return e&&J.isFunction(e.composedPath)}unction Zn(e){return e.shadowRoot}r w=),Qn={exports:{}},ei=(!}(Qn),Qn.exports),ti=e(ei}var s=ni(tiJ.extend(ii.prototype,{cach},se},ge},remov}});var ri=new ii,oi=1,ai=2,si=3;function ui(e){return J.isNumber(e.eventPhase)&&e.eventPhase===oar l},fi={ad},dispatc},remov},trigge},clon},$:{o}}},p}(),h},g},mi=function(){return ky.process.env.PWD||""},vi=function(){return ky.process.env.HOME||""},y},b},w},I},S},E},x},Ci,_i=50}var A},Ri=[],Oi=!1,Li=nul}var k},M},Pi="queryStringWhitelistr B},z},H},j},d={watch:ki,get:Ai,externalizeURL:Bi,startPoller:Ti,getWindowLocation:wi,clear:Mi,isElectron:hi,electronUserDirectory:mi,electronAppName:yi,electronUserHomeDirectory:vi,electronResourcesPath:gi},W Zi=3,Yi=1,Xi=9,Qi=11,er=unction ir(e){var t=(e=e||ky).document.documentElement;return e.pageYOffset||t.scrollTo=lr(),p}var g.supporte},br.supporte};var wr=!1,I},S},E},x},C},_},T},A},R},Or={columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},L},N},k},M},Pvar Dr=function(e,t){var n;"string"==typeof e?(n=X(e),J.map(n,function(e){_r(e,t)})):_r(e,t)},U},G},Br=J.compos}),z},Har n},qvar $}var l={X:"x",Y:"y",BOTH:"both",NONE:"none".$={findOrCreat},fin},eac},htm},tex},addClass:function(e){return e=e.split(/\s+/),this.each(function(t){J.each(e,function(e){Cr(t,e)})})},removeClas},hasClas},toggleClas},cs},appendTo:function(e){return X(e).append(this),this},appen},prependT},prepen},getParen},insertBefor},remov},att},closes},e},height:function(e){if(this.length)return e===Py?this[0].offsetHeight:(this[0].style.height=e+"px",this)},widt},focu}},J.extend(X,{data:ri,event:fi,removeNode:Gr,getClass:Ar,hasClass:xr,addClass:Ur,removeClass:Dr,getBody:Hr,getComputedStyle:ee,getClientRect:ne,intersectRect:qr,getScrollParent:$r,isElementVisible:ro,scrollIntoView:ao,getRootNode:to}),J.extend(X.prototype,fi.$,so.$);var p},h},g},m},v},y},b},wvar E},xo=function(e){Ho(vo)},Co={disconnec},module:Eo,debug:xo},_},T},A},Ro={},O},L},N},ko=[],Mvar D},U},G},B},z},H},jo=J.memoiz}),Wo=[],Ko=[],qo=12e4,Jo=16,Vo=1900,$o=65536,Z},Y},Xo={flush:J.noop,flushBy:J.noop,flushEvents:na,flushTrackEvents:na,flushSilos:na,flushTrackEventSilos:na,flushBeacons:na,flushNow:na,flushLater:ia,flushEvery:ra,flushStop:oa,beacons:[],silos:[],trackEventSilos:[],lock:Ir,unlock:sa},Qo=[(),da="_PENDO_UNNAMED_",ca=}var fa=Xo.events=Wo,pa=Xo.trackEvents=Ko,ha=ns({cache:fa,silos:Xo.silos,apiKey:hr,beacon:"ptm",allowPost:!0}),ga=ns({cache:pa,silos:Xo.trackEventSilos,apiKey:hr,beacon:"ptm",allowPost:!0,params:{type:"track"}}ea(ha),ea(ga);var ya=["load","meta","identify"function(){is.lastUrl=null},"visibilitychange"),os="pagehide",as="unloadtend(us.prototype,{ad},remov},serializ}});var ps=256,hs=64,gs={a:{events:["click"],attr:["href"]},button:{events:["click"],attr:["value","name"]},img:{events:["click"],attr:["src","alt"]},select:{events:["mouseup"],attr:["name","type","selectedIndex"]},textarea:{events:["mouseup"],attr:["name"]},'input[type="submit"]':{events:["click"],attr:["name","type","value"]},'input[type="button"]':{events:["click"],attr:["name","type","value"]},'input[type="radio"]':{events:["click"],attr:["name","type"]},'input[type="checkbox"]':{events:["click"],attr:["name","type"]},'input[type="password"]':{events:["click"],attr:["name","type"]},'input[type="text"]':{events:["click"],attr:["name","type"]}},m}var yCs=xs(),_},Ts="pendo-ignore",As="pendo-analytics-ignore",R},Os=["","left","right","middle"],Ls=function(e,t){return Os[t]},Ns=function(){return!0},k},Ms=function(e){return e},P},Fs=[["button",ks,Ns,Ls],["altKey",Ps,Ms,Ms],["ctrlKey",Ps,Ms,Ms],["metaKey",Ps,Ms,Ms],["shiftKey",Ps,Ms,Ms]],D},Us={click:Ds},G},Bvar j},Ws=5e3,Ks=J.debounce(Bs,Ws,!0),q},Q},eu=[],tu=[],nu={};function iu(e){nu=e}function f(){return ear s}(}function I(e){return uu("id",evar lu="_pendo-guide-tt_",fu="_pendo-guide-mobile-tt_",p},har v},y},bnction xu(){return $.getters["frames/isLeader"]()}function Cu(){return $.getters["frames/leaderExists"](}var T}(}var Ru={post:Au,loa},endpoint:function(){return"guide.js"},usesXhr:function(){return!1}}var L}(),N}(viors=[],Pu.behaviors=[];var H}(),j}(),W}(r $}(),Z}(),Y},Xu=J.negate(Yuod=null,ad=function(e){var t=!J.isEqual(e,od);return od=e,t},sd=null,ud=function(e){var t=!J.isEqual(e,sd);return sd=e,t},dd=null,cd=function(e){var t=!J.isEqual(e,dd);return dd=e,t},l vd="top",yd="bottom",bd="left",wd="right",Id="center";function Sd(e,t,n){return n===wd||n===bd?n:(n=e.left,(t=(e=t.width)/3)<n&&n<2*t?Id:n<e/2?wd:bd}var x}(F="meta",Z},Yd=J.compose(y.parse,y.stringify),X},Q},e},t},nc=K}),ic=K}),r},o},a};function sc(){return $.getters["metadata/metadata"](b.identify.on(dc);var cc={Launcher:{addBehavior:J.noop},Metadata:{getMetadata:sc},Util:{documentScrollTop:ir,documentScrollLeft:rr,getOffsetPosition:te},Events:b,JWT:{getJWT:ua.get}}var fc={},p}(fc),o}(),hc=1e4,gc="lastStepAdvancedfunction yc(){$.dispatch("guideState/regainFocus"}var wc={actions:{ini},loa},forceExpir},expir},appl},receiveLastGuideStepSee},updateLastGuideStepSee},writ},storageChange},regainFocu}},mutations:{expireStepStat},setStepStat},setScopedStorageKey:function(e,t){e.scopedStorageKey=t},setLastGuideStepSeen:function(e,t){e.lastGuideStepSeen=t},setReceivedLastGuideStepSeen:function(e,t){e.receivedLastGuideStepSeen=t},setReceivedStateChange:function(e,t){e.receivedStateChangeAt=t},setLastGuideRequestAt:function(e,t){e.lastGuideRequestAt=t}},state:{steps:{},expired:{},ttl:hc,storageKey:gc,guideRequestExpiration:36e5,scopedStorageKey:null,receivedStateChangeAt:null,receivedLastGuideStepSeen:null,lastGuideStepSeen:null,lastGuideRequestAt:null},getters:{now:function(){return v()},storage:function(){return c},guideList:function(){return f()},tabLostFocus:function(e){return!!e.receivedStateChangeAt},isGuideRequestStal},storageChangedInOtherTa},visitorId:function(){return Y()}}},I}(}var Ec=J.memoiz}}var C}(),_c=null,Tc=500,A},R},O},L}var k},M},P}(var U}(r j}(),W}(),Kc=new Wc([new Uc,new Pc("resourceCenter",function(){Hc(oe.getResourceCenter())}),new Pc("frameVisibility",function(){$.dispatch("frames/checkFrameVisibility")}),new Pc("guideShowing",Fc),new Cc]);function qc(){Kc.addPhase.apply(Kc,argumentsvar $c="debug-enabledvar Xc="_pendo-badge_,il.findSte},il.behaviors=[Vc,il,rl,ol,al,sl,ul,dl];var c},l},f},p},h},gl="pendo-preview",ml="current-guide-preview",ion xl(){return $.getters["preview/isInPreviewMode"](return $}var Hl=J.partial(Bl,zl,"state.preview.preview"),jl=J.partial(Bl,zl,"state.preview.designerPreview"}var K},ql={loa},pos},endpoint:function(){return""},usesXhr:function(){return!0}ar Z}(),}(),Y}(ar tf=J.wrap(J.once(J.wrap(Xl,Ql)),ef),nf={initializeWatermar},buildWatermar}},rf=1e}var af="frames/removeFrameextend(cf.prototype,{ini},_fireMessageListener},_controlMessageHandle},_topMessageHandle},_connectToTo},_addControlMessageHandle},_frameConnectHandle},addEventListene},postMessag},clos}});var lf={_frameConnectHandler:function(e){J.isFunction(this.onconnect)&&this.onconnect(this._parseMessage(e))},_messageReceived:function(e){J.isFunction(this.onmessage)&&this.onmessage(this._parseMessage(e))},_relayMessag},_parseMessag}extend(pf.prototype,lf,{connectToTo},frameConnec},frameDisconnect:function(e){delete this._ports[e.data.frameId]},connectSucces},broadcas},postMessag},clos},_openChanne},_closeChanne}}),J.extend(hf.prototype,lf,{connectToTo},frameConnec},frameDisconnec},connectSucces},broadcas},postMessag},clos}});var mf=gf(ky,uoar wf="eJwFwIEIAAAAwDDQd3-N1QABFQC5",If="guides_blocked",Sf=18e5,Ef=144e5,xf="1",Cf="0",_f="Guides disabled: unreachable endpoint guide.gifvar Rf=[],Of="Guide was not shown because this visitor is in a control group of an active experiment for the guide";function Lf(){var e=m.get("guideCssAssetPath");return e||$i("guide.css"}var kf="_pendo-guide_",Mf="_pendo_g_",Pf=0;function Ff(e){Pf=e}function Df(){return Pf}var U},G]},)},)},)}var )}var 0},)}var }},)},)},)},)},)},)},}var op={STEP_DISMISSED_UNTIL_RELOAD:"Step is dismissed until reload",STEP_TRIGGER_ELEMENT_NOT_VISIBLE:"Trigger element is not visible",STEP_TARGET_ELEMENT_NOT_VISIBLE:"Target element does not match contains rules",STEP_NON_TOOLTIP_ELEMENT_NOT_VISIBLE:"For Non Tooltip Step the Element is not visible",STEP_TOOLTIP_ELEMENT_NOT_VISIBLE:"For Tooltip Step the Element is not visible",STEP_TARGET_ELEMENT_NOT_VISIBLE_AFTER_SCROLL:"For Tooltip Step the Element is not visible after auto scroll"},t},var d},)},pp=function(){return!1},hp=J.partial(J.get,J,"attributes.resourceCenter"),)},)},t}var )}function Ip(e,t,n,i,r,o){e=Ap({type:"guideSnoozed",guideId:e,stepId:t,visitorId:n,seen_reason:i,language:r,snooze_duration:o});Lp(e),b.guideSnoozed.trigger(var Cp={DISMISSED:"latestDismissedAutoAt",SNOOZED:"latestSnoozedAutoAt",ADVANCED:"finalAdvancedAutoAtvar Rp=null,)},)},)},)},}},)},Fp=function(e,t){e=du(e);return!!e&&(!(t=mp(J.first(e.steps),t||"api"))&&e.control&&Z.info(Of),t)},t}var )},var )},Kp=Ru;function qp(e){Kpvar )},l}var )}var th=)}function ih(e){th.push(}var ah=J.memoize(s}var dh="_pendo-default-css_",ch="_pendo-css)}var fh=function(e){gh.flush(e)},ph=function(){return R}}var gh=hh({cache:Rf,apiKey:function(){return S.apiKey},beacon:"guide",allowPost:!0,preferFetch:g.safari}),mh=hh({cache:[],apiKey:function(){return S.apiKey},beacon:"poll",allowPost:!0,preferFetch:g.safari}),vh=function(e){return oe.initializeResourceCenter(e)},_={postMessage:J.noop,close:J.noop},)}var }},r},)},Eh=function(e){var t=m.getLocalConfig();t.disableGuides=e,m.setLocalConfig(t)},)},Ch=}}),t},)},)},)},}},}kh.res)};var .res)};var s},zh=(Object.defineProperty(Bh.prototype,"registeredActions",{value:{}}),Bh.registerActi)},Bh.deregisterActi)},[]),Hh=!1,jh={agent:{getJwtInfoCopy:ua.get},agentStorage:c,analytics:{ptm:ha},attachEvent:p,ConfigReader:m,Events:b,EventTracer:fn,EventRouter:Bh,Extensions:{API:{addTopic:lc}},getAssetUrl:$i,GlobalRuntime:{addGlobalScript:Wu.addGlobalScript,removeGlobalScript:Wu.removeGlobalScript},GuideLoop:{addUpdatePhase:qc,removeUpdatePhase:Jc},NodeSerializer:Cs,q:V,sessionStorage:cn,store:$,transmit:{fetchKeepalive:yr,sendBeacon:br},log:Z,util:{trim:ctregisterExtensionsByUse("plugin",Vh,$h);var Zh=!1,)},)}var }}(),}})}var ig=0,rg="initializeImmediately",og=[],ag=)ar var )},)},)},)},bg={getActiveGuide:Fh,smartNextStep:gg,smartFirstStep:vg,advanceOn:mg,renderStepPosition:yg},T={renderGuideFromJSo},autofocusSt)},trapFocusSt)},addAriaHiddenOutsideGuin},renderResourceCenterModule:oe.renderResourceCenterModule,buildNodeFromJSON:zd,attachImgLoadHandlers:Hd,recalculateGuideHeightOnImgLoad:jd,buildStyleStrin},buildStyleTagContent:qd,bindActionToNode:Wd,recalculateGuideHeight:_d,recalculateGuideWidth:Td,adjustGuideContentWidth:Ad,findDomBlockInDomJson:qu,isElementHiddenInGuide:re.isElementHiddenInGuide,positionStepForTooltip:xd.positionStepForTooltip,flexAllThings:re.flexAllThings,flexElement:re.flexElement,findTopLevelContainy},updateBackdrop:fd,buildNodesFromJSON:Ud,findGuideContainerJSON:Ku,maintainAspectRatios:re.maintainAspectRatios,sizeElement:Cd,getAllowedAttributes:Bd,repositionFlexElementsInFullWidthGuides:function(){},isBuildingBlockGuideRelativeToElement:xd.isBuildingBlockGuideRelativeToElement,updateAriaLabelledbyForActiveFollowupQuestion:Uh,addVideoLoadListen)}},wg,}function xg(e){return 55296<=e&&e<=563}var Tg=100,Ag=[],Rg=[],)},]},"},)}var )},)},)},var )},)},)},Kg=function(){return wg},)},g.init=Mg,Ug.enableLogging=Ng,Ug.disableLogging=kg,Ug.getActiveContexts=Kg,Ug.setActiveContexts=qg,Ug.showLogHistory=jg,Ug.getLoggedContexts=Wg;var )},)},}},)},}},)},)},om={BuildingBlockGuides:T,BuildingBlockResourceCenter:oe,BuildingBlockTemplates:$u,BuildingBlockTooltips:xd,BuildingBlockSvgs:Z)}am.prototype.sta)},am.prototype.st1};var sm=pi.urlF}um.prototype.applyToU)},um.prototype.toStri)},um.fromJS)};var }})}J.extend(lm,{getHr)},clearTransfor)},addTransforms:function(e){$.dispatch("location/addTransforms",e)},setU)},useBrowserU)}});var fm=1m}var }}var vm="is going away",ym="is gone",bm=J.memoier .MAX_ERRORS_PER_MINUTE=30;var }}Nm.isGuideSt)};var Pm={state:{errorCount:0,errors:{}},actions:{wri}},upda)}},mutations:{addErr}},incrementErr+}},getters:{hasLogg}}}},e}(),Dm=new var zm=["unknown","hidden","visibley}var }}ar Vm={startObserver:Jm,foundShadowRoots:!1,stoppedSearchEarly:!1},}}(),}}(),Ym={state:{lastFlush:v(),flushInterval:3e5,counters:{ptmGifFailures:0,guideGifFailures:0}},actions:{flu)}},mutations:{setLastFlush:function(e,t){e.lastFlush=t},incrementCount+},resetCount)}},getters:{shouldFlul},paylo)},now:function(){return v()}}},Xm={state:{visitor:{},account:{},parentAccount:{},date:null,version:null,selfHosted:null},actions:{},mutations:{setMetada)},clearAccou}},resl}},getters:{metadae},selfHosted:function(e){return e.selfHosted}}},Qm="pendo-preview",ev="current-guide-preview",tv={state:{preview:null,designerPreview:null},actions:{sta)},resta)},upda)},lo}},wri}},ex)},exitDesignerPrevi)},launchInAppDesigner:function(e,t){C.launchInAppDesigner(t)}},mutations:{updatePrevi)},setPreview:function(e,t){e.preview=t},setDesignerPreview:function(e,t){e.designerPreview=t}},getters:{isInPreviewMode:function(e){return!!e.preview},isInDesignerPreviewMo)},storage:function(){return dn}}},}})}var }})}var e}(),}}(),}}var )},)},}}(),}})}hv.prototype.a)},hv.prototype.remo)},hv.prototype.setupElementEve)},hv.prototype.teardownElementEve)},hv.shouldAttachHandlr},hv.atta}};var gv=430,mv=200,vv=15,yv=null,u},d},)},)},)},xv=null,Cv=function(e){var t=!J.isEqual(e,xv);return xv=e,t},_v=null,Tv=function(e){var t=!J.isEqual(e,_v);return _v=e,l}var Rv=null,t},Lv={top:"north",left:"east",bottom:"south",right:"west"},}},)},)},t},)},)},e},e},)},zv=function(){return S.TOOLTIP_ARROW_SIZE},Hv={width:gv,height:mv,arrowSize:vs}var Wv=500,Kv=500,qv="_pendo-guide-lb_",v},)},)},Zv="_pendo-guide-mobile-lb_",)},e}var e0=500,t0="_pendo-guide-banner}var r0="_pendo-launcher-searching_",o0="._pendo-launcher-search-box_ inpu}var )},r )},m0=330,v0=310,y0=null,b0=null,w0=!1,I0="_pendo-launcher-active_",S0=null,R0.behaviors=[Vc,R0,Nu.Launcher,a0,O0,L0];var )},)},)},)},)},)},)}var t},q0=J.compose()}),0},)},h},)},)},)}var }},0},)},)},ry=function(){ey()},oy=function(){ny(S)},ay=function(){iy(S)},)},)},)}var }}(),}}(),}}e}var }}(),extend(Vg,my);var }}Oy=pe(),Ly=k(Oy);_y(Ly,Oy)&&Ry()}()}(window,document),pendo.defaultLauncher&&pendo.defaultLauncher('<div class="_pendo-launcher-content_" style="border-color:<%= data.color %>">\n    <div class="_pendo-launcher-header_">\n        <img src="<%= data.launcherBadgeUrl %>"/>\n        <div class="_pendo-launcher-title_"><%= data.title %></div>\n        <% if (data.enableSearch) { %>\n        <div class="_pendo-launcher-search-box_">\n        <input type="text" placeholder="Type here to start looking..." />\n        </div>\n        <% } %>\n    </div>\n    <div class="_pendo-launcher-guide-listing_">\n    <% _.each(guides, function(guide) { %>\n        <div class="_pendo-launcher-item_" id="launcher-<%= guide.id %>">\n            <a href="javascript:void(0);"><%= guide.name %></a>\n        </div>\n    <% }) %>\n    </div>\n    <% if (hidePoweredBy) { %>\n    <div class="_pendo-launcher-footer_"></div>\n    <% } else { %>\n    <div class="_pendo-launcher-footer_ _pendo-launcher-footer-credits_">\n        <span>powered by pendo</span>\n    </div>\n    <% } %>\n</div>\n});
})({
  environmentName: "production",
  blockAgentMetadata: false,




  dataHost: "data.pendo.io",


  stagingServers: [],
  stagingAgentUrl: "https://pendo-io-static.storage.googleapis.com/agent/static/65460ef3-56d0-45a3-7b3b-fe1ec0463054/pendo-staging.js",

  allowedOriginServers: ["https://pendo-static-5076075756650496.storage.googleapis.com"],


  adoptPrioritizeAdoptGuides: false,
  allowCrossOriginFrames: false,
  cookieDomain: "",
  disableCookies: false,
  disableDesignerKeyboardShortcut: false,
  disableFeedbackAutoInit: false,
  disableGlobalCSS: false,
  disableGuidePseudoStyles: false,
  disablePendo: false,
  disablePersistence: false,
  enableDebugEvents: false,
  enableGuideTimeout: true,
  enableSignedMetadata: false,
  eventPropertyConfigurations: [],
  excludeAllText: false,
  extensionPersistLocalStorage: false,
  frameIdentitySync: false,
  freeNPSData: false,
  guideMarkdown: false,
  guideValidation: false,
  identityStorageSuffix: "",
  interceptElementRemoval: false,
  isPendoFree: false,
  localStorageOnly: false,
  observeShadowRoots: false,
  pendoCore: true,
  pendoFeedback: false,
  plgChatbot: false,
  preferBroadcastChannel: false,
  preferMutationObserver: false,
  preventCodeInjection: false,
  preventUnloadListener: false,
  promotedAgentMetadataConfigurations: [],
  recording: {"enabled":false},
  requireHTTPS: true,
  requireSignedMetadata: false,
  restrictP1Access: false,
  sendEventsWithPostOnly: false,
  siblingSelectors: false,
  trainingPartner: false,
  guideSeenTimeoutLength: 0,
  xhrTimings: false,
  xhrWhitelist: null,
  htmlAttributeBlacklist: null,
  htmlAttributes: /^(tabindex|data-.*|data-stat-type)$/i,
  apiKey: "65460ef3-56d0-45a3-7b3b-fe1ec0463054"
}))})();(function() { "undefined" != typeof pendo.addExtension &&(function() { pendo.addExtension({"displayName":"","environment":"production","minAgentVersion":"2.13.0","name":"helpcenter","options":{"resultCount":10,"labels":{"title":"Issuer Help Center","description":"How do I?"},"suggestions":{"enabled":true,"path":3,"combineSuggestionPaths":true,"defaultQuery":"How do I?","popularTopics":"issue badges in bulk, find an earner, update a badge"},"classes":{"menu":"_pendo-launcher-menu_","body":"_pendo-launcher-body_","menuItem":"_pendo-launcher-menu-item_","button":"_pendo-launcher-menu-item-button_","buttonTitle":"_pendo-launcher-menu-item-title_","buttonDescription":"_pendo-launcher-menu-item-description_","section":"_pendo-launcher-section-content_","sectionHeader":"_pendo-launcher-section-header_","sectionTitle":"_pendo-launcher-section-title_","sectionBody":"_pendo-launcher-section-body_","sectionBackButton":"_pendo-launcher-section-back-button_"},"stylesheet":""},"provider":{"name":"zendesk","options":{"subdomain":"credlyissuer","token":"fe23cd9d-5fbb-4099-70f9-465d1860e950.us"}},"type":"agent","use":"launcher","uri":"https://pendo-io-extensions.storage.googleapis.com/extensions/helpcenter/latest/index.html","version":"1.4.4"})}());}());)}();
;