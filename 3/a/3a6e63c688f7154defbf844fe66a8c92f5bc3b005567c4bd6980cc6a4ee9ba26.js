(()=>{var mu=Object.create;var Lo=Object.defineProperty,gu=Object.defineProperties,hu=Object.getOwnPropertyDescriptor,yu=Object.getOwnPropertyDescriptors,Eu=Object.getOwnPropertyNames,Sn=Object.getOwnPropertySymbols,Iu=Object.getPrototypeOf,Fo=Object.prototype.hasOwnProperty,qs=Object.prototype.propertyIsEnumerable;var Mo=X=ve=var Qs=var Zs=var Tu=var ea=var br=$o=var Ie=Re=ke=var tt=var sa=Zs(;var Ua=Zs(;var Vt=window,jt=Vt.pbjs=Vt.pbjs||{};jt.cmd=jt.cmd||[];jt.que=jt.que||[];Vt===window&&(Vt._pbjsGlobals=Vt._pbjsGlobals||[],Vt._pbjsGlobals.push("pbjs"));function K(){return jt}ra=2,Su={buckets:[{max:5,increment:.5}]},Au={buckets:[{max:20,increment:.1}]},_u={buckets:[{max:20,increment:.01}]},vu={buckets:[{max:3,increment:.01},{max:8,increment:.05},{max:20,increment:.5}]},Cu={buckets:[{max:5,increment:.05},{max:10,increment:.1},{max:20,increment:.5}]};N={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",BID_REJECTED:"bidRejected",NO_BID:"noBid",SEAT_NON_BID:"seatNonBid",BID_WON:"bidWon",BIDDER_DONE:"bidderDone",BIDDER_ERROR:"bidderError",SET_TARGETING:"setTargeting",BEFORE_REQUEST_BIDS:"beforeRequestBids",BEFORE_BIDDER_HTTP:"beforeBidderHttp",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits",AD_RENDER_FAILED:"adRenderFailed",AD_RENDER_SUCCEEDED:"adRenderSucceeded",TCF2_ENFORCEMENT:"tcf2Enforcement",AUCTION_DEBUG:"auctionDebug",BID_VIEWABLE:"bidViewable",STALE_RENDER:"staleRender",BILLABLE_EVENT:"billableEvent"},AD_RENDER_FAILED_REASON:{PREVENT_WRITING_ON_MAIN_DOCUMENT:"preventWritingOnMainDocument",NO_AD:"noAd",EXCEPTION:"exception",CANNOT_FIND_AD:"cannotFindAd",MISSING_DOC_OR_ADID:"missingDocOrAdid"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:{BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",SOURCE:"hb_source",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_ID:"hb_cache_id",CACHE_HOST:"hb_cache_host",ADOMAIN:"hb_adomain",ACAT:"hb_acat",CRID:"hb_crid",DSP:"hb_dsp"},DEFAULT_TARGETING_KEYS:{BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_HOST:"hb_cache_host"},NATIVE_KEYS:{title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",privacyIcon:"hb_native_privicon",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice",rendererUrl:"hb_renderer_url",adTemplate:"hb_adTemplate"},S2S:{SRC:"s2s",DEFAULT_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/openrtb2/auction",SYNCED_BIDDERS_KEY:"pbjsSyncs"},BID_STATUS:{BID_TARGETING_SET:"targetingSet",RENDERED:"rendered",BID_REJECTED:"bidRejected"},REJECTION_REASON:{INVALID:"Bid has missing or invalid properties",INVALID_REQUEST_ID:"Invalid request ID",BIDDER_DISALLOWED:"Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes",FLOOR_NOT_MET:"Bid does not meet price floor",CANNOT_CONVERT_CURRENCY:"Unable to convert currency"},PREBID_NATIVE_DATA_KEYS_TO_ORTB:{body:"desc",body2:"desc2",sponsoredBy:"sponsored",cta:"ctatext",rating:"rating",address:"address",downloads:"downloads",likes:"likes",phone:"phone",price:"price",salePrice:"saleprice",displayUrl:"displayurl"},NATIVE_ASSET_TYPES:{sponsored:1,desc:2,rating:3,likes:4,downloads:5,price:6,saleprice:7,phone:8,address:9,desc2:10,displayurl:11,ctatext:12},NATIVE_IMAGE_TYPES:{ICON:1,MAIN:3},NATIVE_KEYS_THAT_ARE_NOT_ASSETS:["privacyIcon","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"],FLOOR_VALUES:{NO_DATA:"noData",AD_UNIT:"adUnit",SET_CONFIG:"setConfig",FETCH:"fetch",SUCCESS:"success"}};var wu=Ct(N.DEBUG_MODE).toUpperCase()==="TRUE",Ou=3e3,Du=!0,Pu=!1,Nu=!1,Bu=!0,Ru=10,ku=400,An="random",Uu="fixed",Go={};Go[An]=!0;Go[Uu]=!0;var Mu=An,wr={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},jo="*";ar x=Lu();var aa=ea(sa());var Or,Dr,zt,_n,zo=q=zo;Or=new WeakMap,Dr=new WeakMap,zt=new WeakSet,_n=Re(q,zt); Fu="String",$u="Function",Vu="Number",ju="Object",Gu="Boolean",zu=Object.prototype.toString,Cn=!!window.console,Hu=!!(Cn&&window.console.log),Yu=!!(Cn&&window.console.info),Wu=!!(Cn&&window.console.warn),Ku=!!(Cn&&window.console.error),Ho,Ju=K();function ca(e){Ho=e}ar at={checkCookieSupport:qo,createTrackPixelIframeHtml:ef,getWindowSelf:Yo,getWindowTop:Wt,getWindowLocation:pa,insertUserSyncIframe:Ko,insertElement:bt,isFn:oe,triggerPixel:Ue,logError:v,logWarn:w,logMessage:Z,logInfo:R,parseQS:_a,formatQS:kn,deepEqual:Rr},Xu={};function da(){return Xu}var qu=);Wt(){return window.top}function Yo(){return window.self}unction Z(){Kt()&&Hu&&console.log.apply(console,bn(arguments,"MESSAGE:"))}unction w(){Kt()&&Wu&&console.warn.apply(console,bn(arguments,"WARNING:")),la(N.EVENTS.AUCTION_DEBUG,{type:"WARNING",arguments})}ction Kt(){return!!x.getConfig("debug")}ction oe(e){return Pr(e,$u)}function M(e){return Pr(e,Fu)}var B=Array.isArray.bind(Array);function le(e){return Pr(e,Vu)}function $(e){return Pr(e,ju)}function xt(e){return Pr(e,Gu)}(e,t)}ar Ye=Number.isInteger.bind(Number);HistoryTTL",Ln=null,ti=Un({monotonic:!0,ttl:()=>Ln});x.getConfig(xa,;var rf=Array.prototype.slice,ba=Array.prototype.push,Mn=Object.values(N.EVENTS),nf=N.EVENT_ID_PATHS,ri=);ca(ri.emit.bind(ri));var{on:ct,off:Fn,get:IS,getEvents:wa,emit:ie,addEvents:TS}=ri;var oi={fetch:window.fetch.bind(window),makeRequest:timeout,ni="GET",of="POST",Da="Content-Type";r=ht(),_S=Pa();var cf=15;i=new WeakMap,ff=["debugging","adloox","criteo","outstream","adagio","spotx","browsi","brandmetrics","justtag","tncId","akamaidap","ftrackId","inskin","hadron","medianet","improvedigital","aaxBlockmeter","confiant","arcspan","airgrid","clean.io","a1Media","geoedge","qortex"];ar pf=K(),mf="outstream";e.install=Te.prototype.getConfig=Te.prototype.setRender=function(e){this._render=e};Te.prototype.setEventHandlers=Te.prototype.handleVideoEvent=Te.prototype.process= Ur,ai,si=Ur=new WeakSet,ai=var ue=new si(N.JSON_MAPPING.BD_SETTING_STANDARD);var jn="prebid",Se="bidder",Le="userId";var ci="analytics";var Mr=ea(Ua());var Q=(0,Mr.default)({ready:Mr.default.SYNC|Mr.default.ASYNC|Mr.default.QUEUE}),Ma=ze();Q.ready=(();var La=Ma.promise,$e=Q.get;var Fa={}; Lr="component",Fr=Lr+"Type",fi=Lr+"Name",pi="adapterCode",mi="storageType",Va="configName",gi="syncType",ja="syncUrl",Ga="_config";ar If=Q("sync",e=>e);ar[Nt,xe]=Tf();var Yn="accessDevice",hi="syncUser";var za="enrichEids",yi="fetchBids",Ha="reportAnalytics",$r="transmitEids",Vr="transmitUfpd",Ei="transmitPreciseGeo",yt="transmitTid"; Et="outstream",Ya="instream";r Af=Q("sync","checkVideoBidSetup");var Ja="performanceMetrics",_f=window.performance&&window.performance.now?vf=new WeakMap;Za=((),Ti=!0;x.getConfig(Ja,;ar Wn=(();ar nt=ec("requestBids.",e=>e.metrics),tc=ec("addBidResponse.",;var lt=Hn(e=>se.resolveAlias(e));var xf=["cpm","ttl","creativeId","netRevenue","currency"],rc=["auctionId","transactionId"]; wf=Q("sync","processBidderRequests"),Of=Q("async","registerSyncs"),Df=Q("sync","addComponentAuction"); jr={};ction kf(e,t){return Ai(e,"requestsCounter",t)}nction Lf(e,t){return I(jr,`${e}.bidders.${t}.requestsCounter`)||0}ar It={incrementRequestsCounter:Rf,incrementBidderRequestsCounter:kf,incrementBidderWinsCounter:Uf,getRequestsCounter:Mf,getBidderRequestsCounter:Lf,getBidderWinsCounter:Ff};t=Vf($f(window));var Kn=Object.freeze({}),Rt,it,Zt,kt,er,zr,Hr,vi,Gr=Rt=new WeakMap,it=new WeakMap,Zt=new WeakMap,kt=new WeakMap,er=new WeakMap,zr=new WeakMap,Hr=new WeakSet,vi=var Ci=xi=bi=ar Ve=new xi,je=new Ci,Ut=new bi,Yr=((),Wr=jf(),Gf={gdpr:Ve,usp:je,gpp:Ut,coppa:Yr};ar Kr=zf();var Hf=["data","ext.data","yob","gender","keywords","kwarray","id","buyeruid","customdata"].map(e=>`user.${e}`),Yf=["user.eids","user.ext.eids"],Wf=["user.geo.lat","user.geo.lon","device.geo.lat","device.geo.lon"];f();Nt(yt,"enableTIDs config",;var dc="pbsBidAdapter",rr={CLIENT:"client",SERVER:"server"},Jn={isAllowed:xe,redact:cc},de={},dt=de.bidderRegistry={},Mt=de.aliasRegistry={},Jr=[];x.getConfig("s2sConfig",;var qn={},Xn=Hn(e=>de.resolveAlias(e));r lc=Q("sync",ep,"getBids");ar uc=Q("sync",tp,"filterBidsForAdUnit");r op=Q("sync","setupAdUnitMediaTypes");r sp=Q("sync",ip,"partitionBidders");de.makeBidRequests=Q("sync","makeBidRequests");de.callBids=e.videoAdapters=[];de.registerBidAdapter=de.aliasBidAdapter=de.resolveAlias=de.registerAnalyticsAdapter=de.enableAnalytics=de.getBidAdapter=function(e){return dt[e]};de.getAnalyticsAdapter=function(e){return qn[e]};callTimedOutBidders=de.callBidWonBidder=de.callBidBillableBidder=de.callSetTargetingBidder=function(e,t){nr(e,"onSetTargeting",t)};de.callBidViewableBidder=de.callBidderError=e.callDataDeletionRequest=Q("sync",;var se=de;var Lt="html5",or="cookie",wi=[];n,"deviceAccess config",lp);t(Yn,"bidderSettings.*.storageAllowed",dp);var up={syncEnabled:!0,filterSettings:{image:{bidders:"*",filter:"include"}},syncsPerBidder:5,syncDelay:3e3,auctionDelay:0};x.setDefaults({userSync:ce(up)});var fp=ir("usersync");ar Bt=pp(Object.defineProperties({config:x.getConfig("userSync"),isAllowed:xe,regRule:Nt},{browserSupportsCookies:{get:}));var fe="native",F="video",Y="banner",ut="adpod";ar{syncUsers:mp}=Bt,gp="started",hp="inProgress",eo="completed";ct(N.EVENTS.BID_ADJUSTMENT,;var yp=4,Oi={},sr={},Zn=[],Ep=K();ar Ip=Q("sync","addBidResponse"),Tp=Q("sync",e=>e,"responsesReady"),Sp=Q("sync","addBidderRequests"),Ap=Q("async","bidsBackCallback"); Cp=xp=Cp,yc,Di;x.getConfig("cache",;var bp=wp=bp(),Op=Q("async","callPrebidCache");Bp=Rp=kp=Up=Mp=Lp=,Tc=[];x.getConfig("ttlBuffer",;unction Sc(e){Tc.push(e)}var Ac="minBidCacheTTL";ar H=Gp();var{AD_RENDER_FAILED:zp,AD_RENDER_SUCCEEDED:Hp}=N.EVENTS;r Yp=N.EVENTS.BID_WON,Wp=N.EVENTS.STALE_RENDER;var _c={"Prebid Request":Xp,"Prebid Event":qp};e.cpm),Cc=Bi(e=>e.responseTimestamp),cr=Ui(ki(Mi,Ri(Bi(e=>e.timeToRespond)))),xc=Ui(ki(Mi,Ri(Cc))),Cv=Ui(ki(Mi,Cc));var Qr=[],no=20,$i="targetingControls.allowTargetingKeys",Vi="targetingControls.addTargetingKeys",bc=`Only one of "${$i}" or "${Vi}" can be set`,Li=Object.keys(N.TARGETING_KEYS).map(e=>N.TARGETING_KEYS[e]),tm=rm=nm={isActualBidisBidNotExpired:tm,isUnusedBid:rm};ar Fi=Q("sync",;r et=om(H);var Oc="__pbjs_debugging__";oo=cm(),Hv=oo.reset;.getConfig("debugging",;var io=ir("fpdEnrichment"),so=Xt(;var lm=1,dm=2;var um=["architecture","bitness","model","platformVersion","fullVersionList"],fm=["brands","mobile","platform"],Pc=pm(),Nc=mm(); Tt=["dooh","app","site"];r lr={getRefererInfo:ot,findRootDomain:so,getWindowTop:Wt,getWindowSelf:Yo,getHighEntropySUA:Nc,getLowEntropySUA:Pc},gm=ao("FPD"),dr=Q("sync",;Em={sitedeviceregs;ar U=K(),{triggerUserSyncs:Tm}=Bt,{ADD_AD_UNITS:Sm,BID_WON:Am,REQUEST_BIDS:_m,SET_TARGETING:Lc,STALE_RENDER:vm}=N.EVENTS,{PREVENT_WRITING_ON_MAIN_DOCUMENT:Cm,NO_AD:xm,EXCEPTION:bm,CANNOT_FIND_AD:wm,MISSING_DOC_OR_ADID:Rc}=N.AD_RENDER_FAILED_REASON,Fc={bidWon:Om};Dc();U.bidderSettings=U.bidderSettings||{};U.libLoaded=!0;U.version="v8.19.0";R("Prebid.js v8.19.0 loaded");U.installedModules=U.installedModules||[];U.adUnits=U.adUnits||[];U.triggerUserSyncs=Tm;{validateAdUnit:Vc,validateBannerMediaType:$c,validateSizes:Wi};Object.assign(Dm,{validateVideoMediaType:Yi});var Pm=Q("sync","checkAdUnitSetup");.getAdserverTargetingForAdUnitCodeStr=U.getHighestUnusedBidResponseForAdUnitCode=U.getAdserverTargetingForAdUnitCode=U.getAdserverTargeting=U.getConsentMetadata=.getNoBids=function(){return R("Invoking pbjs.getNoBids",arguments),jc("getNoBids")};U.getNoBidsForAdUnitCode=function(e){return{bids:H.getNoBids().filter(r=>r.adUnitCode===e)}};U.getBidResponses=U.getBidResponsesForAdUnitCode=U.setTargetingForGPTAsync=U.setTargetingForAst=.renderAd=Q("async",;U.removeAdUnit=U.requestBids=);var Bm=Q("async","startAuction");.requestBids.before(Rm,49);U.addAdUnits=U.onEvent=U.offEvent=U.getEvents=U.registerBidAdapter=U.registerAnalyticsAdapter=U.createBid=var Gc=[],km=Q("async","enableAnalyticsCb");U.enableAnalytics=U.aliasBidder=U.aliasRegistry=se.aliasRegistry;x.getConfig("aliasRegistry",;U.getAllWinningBids=U.getAllPrebidWinningBids=U.getHighestCpmBids=U.markWinningBidAsUsed=var zc=U.getConfig=x.getAnyConfig;U.readConfig=x.readAnyConfig;U.mergeConfig=x.mergeConfig;U.mergeBidderConfig=x.mergeBidderConfig;U.setConfig=x.setConfig;U.setBidderConfig=x.setBidderConfig;U.que.push(()=>vc());U.cmd.push=U.que.push=U.cmd.push;.processQueue=U.triggerBilling=var Hc=U;var Um="GPT Pre-Auction",ur={},Ki=!1,Mm=Lm=Fm=$m=Yc=Wc=x.getConfig("gptPreAuction",e=>Wc(e.gptPreAuction));Wc({});z("gptPreAuction");var fr=new Map; Jc=Q("sync",;var en=["request","imp","bidResponse","response"],jm=["default","pbs"],[Je,St,tn,Xc]=en,[Ji,Xi]=jm,Gm=new Set(en);ar{registerOrtbProcessor:st,getProcessors:qc}=zm();var ft="User ID",rn=or,nn=Lt,Hm=500,Ym=0,Qc="_pbjs_id_optout",lo=ir("userId"),Wm={isAllowed:xe},Zi=!1,Xe=[],gr,es=[],ts={},pr=[],Km,rl,ns,mr,qi,on=(();hr;ar tg=nt("userId",;[nn,rn]);("userId",pg);t({type:Je,name:"userExtEids",fn:gg});z("userId");var ml=0,as=1,hg=2;ar gl="iab",hl=1e4,Il=2,yr,po,cs,Ft,mo,an,yl=!1,El={iab:Eg,static:yg};function yg({onSuccess:e,onError:t}){ls(Ft,{onSuccess:e,onError:t})} Tg=nt("gdpr",;etConfig("consentManagement",e=>Sg(e.consentManagement));r.before(Ag);t({type:Je,name:"gdprAddtlConsent",fn:_g});z("consentManagement");var ds="iab",us=50,vg=1,$t=ds,Er=us,_l,vl,fs=!1,Al={iab:xg,static:Cg}; bg=nt("usp",;tConfig("consentManagement",e=>Og(e.consentManagement));$e("requestBids").before(bg,50);r.before(Dg);z("consentManagementUsp");z("enrichmentFpdModule");var bl=[];function Pg(e){bl.push(e)}ar Bg=nt("fpd",;n("firstPartyData",Pg);Rg();z("fpdModule");var Ol="Invalid schain object found: ",Ir=" should be a string",wl=" should be an Integer",ms=" should be an object",kg=" should be an Array",go={STRICT:"strict",RELAXED:"relaxed",OFF:"off"},Dl=[];rt(go,e=>Dl.push(e));t({type:Je,name:"sourceExtSchain",fn:Vg});z("schain");Fe="Price Floors",zg=ht(1e4),Ts=Symbol(),ys=[Ts,"gptSlot","adUnitCode","size","domain","mediaType"],Tr=!1,ho=!1,we={},ln=[],dn={};ar Yg=(();r Ul={[Ts]:size:mediaType:gptSlot:domain:Yg,adUnitCode:;s={banner:e=>I(e,"mediaTypes.banner.sizes")||[],video:native:;l(e),2:;r Rl=nt("priceFloors",;c("priceFloors",;x.getConfig("floors",;{type:St,name:"bidfloor",fn:gh});st({type:St,name:"extPrebidFloors",fn:hh,dialects:[Xi],priority:-1});st({type:Je,name:"extPrebidFloors",fn:yh,dialects:[Xi]});z("priceFloors");var un="panoramaId",fn=`${un}_expiry`,pn="_cc_id",jl="lotamePanoramaId",Eh=23328e3*1e3,Ih=7,Th=60*60*24*1e3,Sh=111,Ah=95,_h="id.crwdcntrl.net",vh="c.ltmsphrcl.net",pe=he({moduleType:Le,moduleName:jl}),Eo;={name:jl,gvlid:Ah,decodegetIdeids:{lotamePanoramaId:{source:"crwdcntrl.net",atype:1}}};Ke("userId",Gl);z("lotamePanoramaIdSystem");var wh=91,Hl="criteo",At=he({moduleType:Le,moduleName:Hl}),_s="cto_bidid",Yl="cto_bundle",Oh="cto_dna_bundle",Dh=13*30*24*60*60*1e3,Ph=new Date(0).toString(),Nh=new Date(ge()+Dh).toString();ame:Hl,gvlid:wh,decodegetIdeids:{criteoId:{source:"criteo.com",atype:1}}};Ke("userId",Lh);z("criteoIdSystem");ar _t=he({moduleType:Le,moduleName:"sharedId"}),Ql="cookie",Zl="html5",Jl="_pubcid_optout",Xl="PublisherCommonId";$h={name:"sharedId",aliasName:"pubCommonId",gvlid:Kn,decodegetId:extendId:domainOverride:Kl(_t,"sharedId"),eids:{pubcid:{source:"pubcid.org",atype:1}}};Ke("userId",$h);z("sharedIdSystem");var td="idx",rd="_idx",Io=he({moduleType:Le,moduleName:td});function Vh(){return Io.cookiesAreEnabled?Io.getCookie(rd):null}ar Gh={name:td,decodegetIdeids:{idx:{source:"idx.lat",atype:1}}};Ke("userId",Gh);z("idxIdSystem");var od="1.1";ar xs=bs="uid2IdSystem_shared");var sd={uid2:{source:"uidapi.com",atype:3,getValue:getUidExt:};var cd="uid2",Hh=od,Yh="8.19.0",Wh=`PrebidJS-${Yh}-UID2Module-${Hh}`,ld="UID2: ",Kh="__uid2_advertising_token";var Jh="https://prod.uidapi.com",Xh=Jh;ar mn=dd(R,ld),ad=dd(w,ld),qh=he({moduleType:Le,moduleName:cd}),Qh={name:cd,decodegetIdeids:sd};e("userId",Qh);z("uid2IdSystem");var ey="pubProvidedId",ty={name:ey,gvlid:Kn,decodegetId;Ke("userId",ty);z("pubProvidedIdSystem");var gd="amx",hd=he({bidderCode:gd}),ry=/\.com?\.\w{2,4}$/,ny="https://prebid.a-mo.net/a/c",oy="pba1.3.3",iy=/^\s*<\??(?:vast|xml)/i,sy="https://1x1.a-mo.net/hbx/",yd="__amuidpb";ar cy=ar ly=ar fd=ar vt=encodeURIComponent;ws=Ds=0;=1,md=2;vy=Cy={code:gd,gvlid:737,supportedMediaTypes:[Y,F],isBidRequestValidbuildRequestsgetUserSyncsinterpretResponseonSetTargetingonTimeoutonBidWon;be(Cy);z("amxBidAdapter");ar Ps={1:"IAB20-3",2:"IAB18-5",3:"IAB10-1",4:"IAB2-3",5:"IAB19-8",6:"IAB22-1",7:"IAB18-1",8:"IAB12-3",9:"IAB5-1",10:"IAB4-5",11:"IAB13-4",12:"IAB8-7",13:"IAB9-7",14:"IAB7-1",15:"IAB20-18",16:"IAB10-7",17:"IAB19-18",18:"IAB13-6",19:"IAB18-4",20:"IAB1-5",21:"IAB1-6",22:"IAB3-4",23:"IAB19-13",24:"IAB22-2",25:"IAB3-9",26:"IAB17-18",27:"IAB19-6",28:"IAB1-7",29:"IAB9-30",30:"IAB20-7",31:"IAB20-17",32:"IAB7-32",33:"IAB16-5",34:"IAB19-34",35:"IAB11-5",36:"IAB12-3",37:"IAB11-4",38:"IAB12-3",39:"IAB9-30",41:"IAB7-44",42:"IAB7-1",43:"IAB7-30",50:"IAB19-30",51:"IAB17-12",52:"IAB19-30",53:"IAB3-1",55:"IAB13-2",56:"IAB19-30",57:"IAB19-30",58:"IAB7-39",59:"IAB22-1",60:"IAB7-39",61:"IAB21-3",62:"IAB5-1",63:"IAB12-3",64:"IAB20-18",65:"IAB11-2",66:"IAB17-18",67:"IAB9-9",68:"IAB9-5",69:"IAB7-44",71:"IAB22-3",73:"IAB19-30",74:"IAB8-5",78:"IAB22-1",85:"IAB12-2",86:"IAB22-3",87:"IAB11-3",112:"IAB7-32",113:"IAB7-32",114:"IAB7-32",115:"IAB7-32",118:"IAB9-5",119:"IAB9-5",120:"IAB9-5",121:"IAB9-5",122:"IAB9-5",123:"IAB9-5",124:"IAB9-5",125:"IAB9-5",126:"IAB9-5",127:"IAB22-1",132:"IAB1-2",133:"IAB19-30",137:"IAB3-9",138:"IAB19-3",140:"IAB2-3",141:"IAB2-1",142:"IAB2-3",143:"IAB17-13",166:"IAB11-4",175:"IAB3-1",176:"IAB13-4",182:"IAB8-9",183:"IAB3-5"};var xy=["user.keywords"].concat(Tt.flatMap();r wy={526:"1plusX",527:"1plusX",541:"captify_segments",540:"perid"},Oy=["user.data"].concat(Tt.map();xus",By="https://ib.adnxs.com/ut/v3/prebid",Ry="https://ib.adnxs-simple.com/ut/v3/prebid",ky=["id","minduration","maxduration","skippable","playback_method","frameworks","context","skipoffset"],Uy=["minduration","maxduration","skip","skipafter","playbackmethod","api","startdelay"],My=["age","externalUid","external_uid","segments","gender","dnt","language"],Ly=["geo","device_id"],Fy=["enabled","dongle","member_id","debug_timeout"],vd={apn_debug_dongle:"dongle",apn_debug_member_id:"member_id",apn_debug_timeout:"debug_timeout"},Cd={playback_method:{unknown:0,auto_play_sound_on:1,auto_play_sound_off:2,click_to_play:3,mouse_over:4,auto_play_sound_unknown:5},context:{unknown:0,pre_roll:1,mid_roll:2,post_roll:3,outstream:4,"in-banner":5}};var $y="pbjs",xd=15;var Vy=32,jy=he({bidderCode:Od}),Gy={code:Od,gvlid:Vy,aliases:[{code:"appnexusAst",gvlid:32},{code:"emxdigital",gvlid:183},{code:"pagescience",gvlid:32},{code:"gourmetads",gvlid:32},{code:"matomy",gvlid:32},{code:"featureforward",gvlid:32},{code:"oftmedia",gvlid:32},{code:"adasta",gvlid:32},{code:"beintoo",gvlid:618},{code:"projectagora",gvlid:1032},{code:"uol",gvlid:32}],supportedMediaTypes:[Y,F,fe],isBidRequestValid:buildRequests:interpretResponse:getUserSyncs:transformBidParams:;ter");var _r="medianet",Md="trustedstack",fE="https://prebid.media.net/rtb/prebid",pE="https://prebid.trustedstack.com/rtb/trustedstack",mE="https://prebid.media.net/video/bundle.js",Us={NOT_DETERMINED:0,ABOVE_THE_FOLD:1,BELOW_THE_FOLD:2},Dd={TIMEOUT_EVENT_NAME:"client_timeout",BID_WON_EVENT_NAME:"client_bid_won"},gE="qsearch-a.akamaihd.net/log",hE="outstream",Ms=ot(),pt={};window.mnet=window.mnet||{};window.mnet.queue=window.mnet.queue||[];pt.urlData={domain:Ms.domain,page:Ms.page,isTop:Ms.reachedTop};var yE=[{code:Md}];K().medianetGlobals=K().medianetGlobals||{};iases:yE,supportedMediaTypes:[Y,fe,F],isBidRequestValid:buildRequests:interpretResponse:getUserSyncs:onTimeout:onBidWon:clearMnData:UE,getWindowSize:vE};be(Fs);z("medianetBidAdapter");var zd="pubmatic",W="PubMatic: ",FE="https://hbopenbid.pubmatic.com/translator?source=prebid-client",$E="https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=",VE="https://image8.pubmatic.com/AdServer/ImgSync?p=",Vs="USD",jE=1,ae=void 0,GE=0,zE=0,HE="http://prebid.org/dev-docs/show-native-ads.html",YE="pubmatic",WE="https://pubmatic.bbvms.com/r/".concat("$RENDERER",".js"),KE="Video.Placement param missing",Ao={kadpageurl:"",gender:"",yob:"",lat:"",lon:"",wiid:"",profId:"",verId:""},ye={NUMBER:"number",STRING:"string",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"},Ld={mimes:ye.ARRAY,minduration:ye.NUMBER,maxduration:ye.NUMBER,startdelay:ye.NUMBER,playbackmethod:ye.ARRAY,api:ye.ARRAY,protocols:ye.ARRAY,w:ye.NUMBER,h:ye.NUMBER,battr:ye.ARRAY,linearity:ye.NUMBER,placement:ye.NUMBER,plcmt:ye.NUMBER,minbitrate:ye.NUMBER,maxbitrate:ye.NUMBER,skip:ye.NUMBER},Fd={ICON:1,IMAGE:3},JE=!0,XE={1:"PMP",5:"PREF",6:"PMPG"},vo={bootstrapPlayer:newRenderer:outstreamRender:getRendererId:,qE=[Y,F,fe],$d=0,hn=!1,_o=["pubmatic"],Vd=["all"];desc:"desc",desc2:"desc2",body:"desc",body2:"desc2",sponsoredBy:"sponsored",cta:"ctatext",rating:"rating",address:"address",downloads:"downloads",likes:"likes",phone:"phone",price:"price",salePrice:"saleprice",displayUrl:"displayurl",saleprice:"saleprice",displayurl:"displayurl"},{NATIVE_IMAGE_TYPES:jd,NATIVE_KEYS_THAT_ARE_NOT_ASSETS:iI,NATIVE_KEYS:sI,NATIVE_ASSET_TYPES:aI}=N,cI=Object.values($s);:76,supportedMediaTypes:[Y,F,fe],isBidRequestValid:buildRequests:interpretResponse:getUserSyncs:transformBidParams:;be(wI);z("pubmaticBidAdapter");var Wd="teads",OI=132,DI="https://a.teads.tv/hb/bid-request",bo={GDPR_APPLIES_PUBLISHER:12,GDPR_APPLIES_GLOBAL:11,GDPR_DOESNT_APPLY:0,CMP_NOT_FOUND_OR_ERROR:22},PI="_tfpvi",Hd=he({bidderCode:Wd}),NI={code:Wd,gvlid:OI,supportedMediaTypes:["video","banner"],isBidRequestValid:buildRequests:interpretResponse:; VI(e){return Yt(jI(e))}NI);z("teadsBidAdapter");ar zI=28,Kd="triplelift",HI="https://tlx.3lift.com/header/auction?",YI=300,WI=3600,yn=null,wo=null,KI=he({bidderCode:Kd}),JI={gvlid:zI,code:Kd,supportedMediaTypes:[Y,F],isBidRequestValid:buildRequests:interpretResponse:getUserSyncs:;tion ZI(e){return Gs(e)&&e.mediaTypes.video.context.toLowerCase()==="outstream"}sT(e){return Do(e,"tdid","adserver.org","TDID")}function aT(e){return Do(e,"idl_env","liveramp.com","idl")}function cT(e){return Do(e,"criteoId","criteo.com","criteoId")} uT=);z("tripleliftBidAdapter");var yT=[Y,F],ET="rise",Zd="6.0.0",IT=360,zs="USD",TT="https://hb.yellowblue.io/",Xd={PRODUCTION:"hb-multi",TEST:"hb-multi-test"},qd={IFRAME:"iframe",PIXEL:"pixel"},ST={code:ET,gvlid:1043,version:Zd,supportedMediaTypes:yT,isBidRequestValid:buildRequests:interpretResponse:getUserSyncs:onBidWon:;be(ST);apter");var Hs=new WeakMap;NT=new Set(["pos","placement","plcmt","api","mimes","protocols","playbackmethod","minduration","maxduration","w","h","startdelay","placement","linearity","skip","skipmin","skipafter","minbitrate","maxbitrate","delivery","playbackend"]),BT={instream:1};r iu={1:Y,2:F,4:fe};ar No={[Je]:{fpd:{priority:99,fn(e,t){ne(e,t.ortb2)}},onlyOneClient:{priority:-99,fn:ao("ORTB request")},props:{fn},[St]:{fpd:{priority:99,fn,id:{fn,banner:{fn:tu},pbadslot:{fn},[tn]:{mediaType:{priority:99,fn:su},banner:{fn:ru()},props:{fn}};No[St].video={fn:nu},No[tn].video={fn:ou};r RT=Xt(;var Bo="improvedigital",kT=300,UT="https://ad.360yield.com",MT="https://ad.360yield-basic.com",LT="pb",FT="https://pbs.360yield.com/openrtb2/auction",$T="https://hb.360yield.com/prebid-universal-creative/load-cookie.html",cu={DEFAULT_MIMES:["video/mp4"],PLACEMENT_TYPE:{INSTREAM:1,OUTSTREAM:3}},Ro={code:Bo,gvlid:253,aliases:["id"],supportedMediaTypes:[Y,fe,F],syncStore:{extendMode:!1,placementId:null},isBidRequestValidbuildRequestsinterpretResponsegetUserSyncs;be(Ro);var lu=au({context:{ttl:kT,nativeRequest:{eventtrackers:[{event:1,methods:[1,2]}]}},imprequestbidResponseoverrides:{imp:{bannervideo,request:{gdprAddtlConsent}}),Ws={buildServerRequestsisExtendModeEnabledisOutstreamVideo,du={RENDERER_URL:"https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js",createRendererrenderhandleRendererEvents,uu={RENDERER_URL:"https://cdn.360yield.com/razr/tag.js",forwardBidinstallListener;z("improvedigitalBidAdapter");Hc.processQueue();})();
/*! Bundled license information:

fun-hooks/no-eval/index.js:
  (*
  * @license MIT
  * Fun Hooks v0.9.10
  * (c) @snapwich
  *)
*/