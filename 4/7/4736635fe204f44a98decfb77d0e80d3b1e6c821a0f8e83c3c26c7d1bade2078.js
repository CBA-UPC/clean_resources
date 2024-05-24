if (window.Evergage && window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    try {
        window.SalesforceInteractions.log.warn("Aborting SDK load since the SalesforceInteractions SDK was already found on this page.");
    } catch(e) {}
} else {
window.evergageBeaconParseTimeStart = (new Date().getTime());
'use strict';var Evergage=function(m){unction ha(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function");}function sc(d,c){for(var a=0;a<c.length;a++){var b=c[a];b.enumerable=b.enumerable||!1;b.configurable=!0;"value"in b&&(b.writable=!0);Object.defineProperty(d,
b.key,b)}}function ia(d,c,a){c&&sc(d.prototype,c);a&&sc(d,a);return d}function L(d,c,a){c in d?Object.defineProperty(d,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):d[c]=a;return d}function tc(d,c){var a=Object.keys(d);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(d);c&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}));a.push.apply(a,b)}return a}function y(d){for(var c=1;c<arguments.length;c++){var a=null!=arguments[c]?arguments[c]:{};
c%2?tc(a,!0).forEach(function(b){L(d,b,a[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(a)):tc(a).forEach(function(b){Object.defineProperty(d,b,Object.getOwnPropertyDescriptor(a,b))})}return d}function Na(d,c){if("function"!==typeof c&&null!==c)throw new TypeError("Super expression must either be null or a function");d.prototype=Object.create(c&&c.prototype,{constructor:{value:d,writable:!0,configurable:!0}});c&&nb(d,c)}function I(d){I=Object.setPrototypeOf?
Object.getPrototypeOf:function(c){return c.__proto__||Object.getPrototypeOf(c)};return I(d)}function nb(d,c){nb=Object.setPrototypeOf||function(a,b){a.__proto__=b;return a};return nb(d,c)}nction ja(d,c,a){ja="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(a,c,d){for(;!Object.prototype.hasOwnProperty.call(a,c)&&(a=I(a),null!==a););if(a)return c=Object.getOwnPropertyDescriptor(a,c),c.get?c.get.call(d):c.value};return ja(d,c,a||d)}unction ob(d){if(Array.isArray(d)){var c=0;for(var a=Array(d.length);c<d.length;c++)a[c]=d[c];c=a}else c=void 0;c||(c=Symbol.iterator in Object(d)||"[object Arguments]"===
Object.prototype.toString.call(d)?Array.from(d):void 0);if(!(d=c))throw new TypeError("Invalid attempt to spread non-iterable instance");return d}ion ka(d){return"function"===typeof d}nction"===typeof Symbol&&"symbol"===z(Symbol.iterator)?function(c){return z(c)}:return J(d)}b){return d.addEventListener?(d.addEventListener(c,a,b),!0):!1}Kb(d){try{r.trace("Evergage: window blurred"),Xa()}catch(c){w(c,"windowBlurFunction")}}M=,R=document,za=window,yb=R.documentElement,ma=R.createElement.bind(R),Rc=ma("div"),Nb=ma("table"),Ie=ma("tbody"),Sc=ma("tr"),Ob=
Array.isArray,ea=Array.prototype,tb=ea.filter,vc=ea.indexOf,Je=ea.map,pe=ea.push,Tc=ea.slice,wb=ea.some,Ke=ea.splice,Le=/^#[\w-]*$/,le=/^\.[\w-]*$/,Me=/<.+>/,me=/^\w+$/,Pa=),l=Pa.prototype,q=l.init;q.fn=q.prototype=l;l.length=0;l.splice=Ke;"function"===typeof Symbol&&(l[Symbol.iterator]=ea[Symbol.iterator]);l.map=l.slice=var ne=/-([a-z])/g;q.camelCase=ya;q.each=B;l.each=l.removeProp=q.extend=l.extend=q.guid=1;q.matches=qb;q.isWindow=rb;q.isFunction=ka;q.isString=F;q.isNumeric=uc;q.isArray=Ob;l.prop=
l.get=l.eq=l.first=l.last=l.filter=var oe=/\S+/g;l.hasClass=l.removeAttr=
l.attr=l.toggleClass=l.addClass=function(d){return this.toggleClass(d,!0)};
l.removeClass=q.unique=S;l.add=var ub=/^--/,vb={},re=Rc.style,qe=["webkit","moz","ms"];q.prefixedProp=wc;var se={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};l.css=l.data=B([!0,!1],;B(["width","height"],;var Pb={};l.toggle=l.hide=function(){return this.toggle(!1)};l.show=var Qb={focus:"focusin",blur:"focusout"},Uc={mouseenter:"mouseover",mouseleave:"mouseout"},Ne=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;l.off=l.on=l.one=l.ready=l.trigger=var Oe=/%20/g,Pe=/file|reset|submit|button|image/i,Qe=/radio|checkbox/i;l.serialize=l.val=
l.clone=l.detach=var ve=/^\s*<(\w+)[^>]*>/,ue=/^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/,Dc={"*":Rc,tr:Ie,td:Sc,th:Sc,thead:Nb,tbody:Nb,
tfoot:Nb};q.parseHTML=Cc;l.empty=l.html=l.remove=l.text=l.unwrap=l.offset=
l.offsetParent=l.position=l.children=l.contents=l.find=
var ye=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,xe=/^$|^module$|\/(java|ecma)script/i,ze=["type","src","nonce","noModule"];l.after=function(){return ba(arguments,this,!1,!1,!1,!0,!0)};l.append=l.appendTo=l.before=l.insertAfter=function(d){return ba(arguments,this,!0,!1,!1,!1,!1,!0)};l.insertBefore=
l.prepend=l.prependTo=l.replaceWith=l.replaceAll=l.wrapAll=l.wrap=l.wrapInner=l.has=l.is=l.next=function(d,c){return qa(q(S(V(this,"nextElementSibling",c))),d)};l.nextAll=function(d){return this.next(d,!0)};l.not=l.parent=l.index=l.closest=l.parents=l.prev=l.prevAll=l.siblings=
var Rb=["error","warn","info","debug","trace"],r=new ()),v;((v||(v={}));var Ba=Ab.default?Ab.default:Ab,Vc,oa=window.location.hostname,Sb=Wc=Ea=Xc;document.addEventListener(v.OnClearCookie,
;var Tb=Yc=Zc=function(d){ta.write(D({},Tb(),{consents:d}),730)},ta={read:Tb,write:
remove:Yc},Re=[/bot/i,/spider/i,/facebookexternalhit/i,/simplepie/i,/yahooseeker/i,/embedly/i,/quora link preview/i,/outbrain/i,/vkshare/i,/monit/i,/Pingability/i,/Monitoring/i,/WinHttpRequest/i,/Apache-HttpClient/i,/getprismatic.com/i,/python-requests/i,/Twurly/i,/yandex/i,/browserproxy/i,/crawler/i,/Qwantify/i,/Yahoo! Slurp/i,/pinterest/i,/Tumblr\/14.0.835.186/i,/Tumblr Agent 14.0/i],Se=Te=navigator.vendor&&-1<navigator.vendor.indexOf("Apple")&&
navigator.userAgent&&-1==navigator.userAgent.indexOf("CriOS")&&-1==navigator.userAgent.indexOf("FxiOS"),U="";document.addEventListener(v.OnResetAnonymousId,;document.addEventListener(v.OnSetAnonymousId,function(d){d.detail&&d.detail.newAnonymousId&&(d=d.detail.newAnonymousId,ta.write(D({},Tb(),{anonymousId:d}),730))});var Ya=
$c=ad=Za=),Ue=u=u.onEventSend=new Za;u.onFireException=new Za;u.onPageMatchStatusUpdated=new Za;u.onInitSitemap=new Za;u.unbindAll=function(){Ue(u)};var t={currentPage:null,matchedConfig:null,matchStatus:null},N={pageTypes:[]},E=null,O;(function(c){c.Pending="pending";c.Running="running";c.Selected="selected";c.Matched="matched";c.Rejected=
"rejected"})(O||(O={}));var $a=cd=Ve=Ub=bd=Xe=We=Fa=
na;(function(c){c.ViewCatalogObject="View Catalog Object";c.ViewCatalogObjectDetail="View Catalog Object Detail";c.QuickViewCatalogObject="Quick View Catalog Object";c.ShareCatalogObject="Share Catalog Object";c.ReviewCatalogObject="Review Catalog Object";c.CommentCatalogObject="Comment Catalog Object";c.FavoriteCatalogObject="Favorite Catalog Object"})(na||(na={}));var Vb;((Vb||(Vb={}));var Wb;
((Wb||(Wb={}));var ua;(ua||(ua={})).MetadataUpdate="MetadataUpdate";var dd;(dd||(dd={})).Tracking="Tracking";(function(c){c.OptIn="Opt In";c.OptOut="Opt Out"})(m.ConsentStatus||(m.ConsentStatus={}));var w=P=[],ed=function(){return P},fd=Xb=gd=hd=id=Ye=$e=Ze=af=bf=jd=function(c){c.source=c.source||{};var a=c.source||{},b;(b=c.source.pageType)||(b=t.currentPage&&t.currentPage.source?t.currentPage.source.pageType:void 0);c.source=D({},a,{pageType:b,url:c.source.url||window.location.href,urlReferrer:c.source.urlReferrer||document.referrer,channel:c.source.channel||"Web"});c.user=D({},c.user||
{},{anonymousId:U});cf(c)},cf=document.addEventListener(v.OnConsentRevoke,;var ld=df=kd=ef=md=ff=ab,gf=function(){Yb();nd()&&(ab=setInterval(function(){var c=!1,a=(new Date).getTime(),b=t.matchedConfig.listeners.map(function(a){if(a.selectorFound)return a;a=bb(a);c=a.selectorFound||c;return a});c&&Object.assign(t.matchedConfig,D({},t.matchedConfig,{listeners:b}));(50<(new Date).getTime()-a||!nd())&&Yb()},1E3))},nd=Yb=function(){"number"===
typeof ab&&clearInterval(ab);ab=null},bb=function(c){var a=q(c.selector),b=D({},c,{selectorFound:0<a.length});a.on(b.bind,;return b},hf=
od=pd=function(c){jf(c);return!0},qd=function(c){t.matchedConfig=D({},c,{listeners:kf(c)});t.currentPage=D({},t.currentPage||{},{source:{pageType:c.name,locale:lf(c)},user:{anonymousId:null},interaction:null,pageView:!0});return c.interaction?ef(c).then(:Promise.resolve()},kf=function(c){return(c.listeners||[]).map(function(a){return bb(a)})},lf=mf=function a(){for(var b=arguments.length,e=Array(b),f=0;f<b;f++)e[f]=arguments[f];return e.reduce(function(b,e){Object.keys(e).forEach(function(f){var h=b[f],g=e[f];Array.isArray(h)&&Array.isArray(g)?Object.assign(b,Ta({},f,h.concat.apply(h,Gc(g)))):h&&"object"===J(h)&&g&&"object"===J(g)?Object.assign(b,Ta({},f,a(h,g))):Object.assign(b,
Ta({},f,g))});return b},{})},rd=nf=of=jf=H=Zb=function(a,b){b=b||window;a=a.split(".");var e=!0,f=!1,g=void 0;try{for(var h=a[Symbol.iterator](),n;!(e=(n=h.next()).done);e=!0){var k=n.value;var l=/(\w+)\[([0-9]+)\]/.exec(k);
if(b[k])b=b[k];else if(l){if(b[l[1]]&&(b=b[l[1]][parseInt(l[2],10)],!b))return null}else return null}}catch(T){f=!0,g=T}finally{try{e||null==h.return||h.return()}finally{if(f)throw g;}}return b},sd={fromSelector:fromSelectorAttribute:fromSelectorMultiple:fromSelectorAttributeMultiple:fromItemProp:fromMeta:fromWindow:fromJsonLd:fromCanonical:fromHref:buildCategoryId:buildCategoryIdAttribute:,A=q,fa={},Ga=function(a){if(!a||"string"!==typeof a||"function"!==typeof fa[a])return null;fa[a]();delete fa[a]},td={resolveWhenTrue:{bind:unbind:Ga,getBindings:function(){return fa},clearBindings:};var Fb="shutDown";var cb={cookieDomain:null,consents:null},ud=function(){unction b(b,f){return{pageElementLoaded:function(h,n){if("string"!==typeof n||""===n)n=0<A("body").length?"body":"html";if("string"!==typeof h||""===h)throw Error("[pageElementLoaded] Invalid arguments");return new Promise(function(k){var l=A(h);if(0<l.length)k(l[0]);
else{l=A(n)[0];if(!l)throw Error("pageElementLoaded cannot be bound. observerSelector ".concat(n," is not on the page"));var m=new MutationObserver(function(a,e){var f=!0,n=!1,l=void 0;try{for(var m=a[Symbol.iterator](),q;!(f=(q=m.next()).done);f=!0){var p=q.value;if(p.addedNodes&&0<p.addedNodes.length){a=!0;var ca=!1,r=void 0;try{for(var T=p.addedNodes[Symbol.iterator](),t;!(a=(t=T.next()).done);a=!0){var u=t.value,v=A(u).is(h)?u:A(u).find(h).get(0);if(v){b?g.unbind(b):e.disconnect();k(v);return}}}catch($b){ca=
!0,r=$b}finally{try{a||null==T.return||T.return()}finally{if(ca)throw r;}}}}}catch($b){n=!0,l=$b}finally{try{f||null==m.return||m.return()}finally{if(n)throw l;}}});m.observe(l,{childList:!0,subtree:!0})}b=a(b,"<pageElementLoaded>"+h,f);e[b]=)},pageElementVisible:pageExit:pageInactive:pageScroll:}var e={},f=b(null,!0),g=);return Object.assign(f,g)}(),db=function(){a(a,[{key:"resetCounters",value:,{key:"isTriggerLimitExceeded",
value:function(a){var b=Date.now();a=D({},a,{time:b});this.sentEvents.push(a);this.removeOldEvents(b);this.resetCounters();for(b=this.sentEvents.length-1;0<=b;b--)if(this.checkLimits(b,a))return!0;return!1}}]);return a}(),pf=function(a){function b(a){Aa(this,b);var e=De(this,sa(b).call(this,a));e.getTimeRangeMax=function(){return e.eventRateLimiterConfig.perInteractionTimeRange?Math.max(e.eventRateLimiterConfig.globalTimeRange,e.eventRateLimiterConfig.perInteractionTimeRange):e.eventRateLimiterConfig.globalTimeRange};
e.checkInteractionLimits=e.checkLimits=return e}Ce(b,a);Sa(b,[{key:"resetCounters",value:,{key:"isTriggerLimitExceeded",value:function(a){return Ua(sa(b.prototype),"isTriggerLimitExceeded",this).call(this,a)}}]);return b}(db),Bb,Cb,Db,Eb,ac=function(){var a=0<
arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!(Se(window.navigator.userAgent||"")?W("You are a robot."):"prerender"===document.visibilityState&&Te?W("Page is pre-rendered and loaded in Safari."):1))return Promise.reject();"initialized"==Fb&&W("reinitializing Web SDK");a.cookieDomain&&Sb(a.cookieDomain);Wc();cb=D({},cb,{},a);document.dispatchEvent(new CustomEvent(v.OnBeforeInit));Ee();$c();Fb="initialized";document.dispatchEvent(new CustomEvent(v.OnInit,{detail:{sdkConfig:cb}}));$e(a.consents);
return Promise.resolve()};window.SalesforceInteractions={init:ac,reinit:function(){var a=P.map(function(a){return a.consent});ac(D({},cb,{consents:a})).then(function(){pd(N)})},sendEvent:ld,sendException:w,getAnonymousId:function(){return U},setAnonymousId:Ya,getCookieDomain:function(){return oa},setCookieDomain:Sb,updateConsents:Xb,getConsents:ed,ConsentStatus:m.ConsentStatus,log:r,getLoggingLevel:Ic,setLoggingLevel:Hc,initSitemap:pd,getSitemapConfig:function(){return N},getSitemapResult:function(){return t},
CatalogObjectInteractionName:na,CartInteractionName:Vb,OrderInteractionName:Wb,listener:Kc,build:cashDom:A,resolvers:sd,util:td,DisplayUtils:ud,CustomEvents:v};var qf="cdn.".concat("evergage.com"),bc;(function(a){a.Impression="i";a.Clickthrough="c";a.Dismissal="d";a.Unsubscribe="u";a.Send="s"})(bc||(bc={}));((m.ItemType||(m.ItemType={}));var Ca;(Ca||(Ca={})).StopQuickViewCatalogObject="Stop Quick View Catalog Object";var cc={Personalization:"Personalization"},dc;((dc||(dc={}));((m.CustomEvents||(m.CustomEvents={}));var pa;((pa||(pa=
{}));var p={endpointConfig:{},beaconConfig:{sendEvents:!0,minimumActivityTimeToRegister:300,timeOnPageTimerLengthMillis:6E4,trackAnonymousVisitors:!0,corsAllowedOrigins:["*"],identityAttributes:[],rememberMeUserIdsMillis:63072E6,actionRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3,perActionLimit:5,perActionTimeRange:2E3},pingRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3},campaignStatRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3,perExperienceLimit:5,perExperienceTimeRange:2E3},
errorRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3}},beaconState:null},ec=vd=wd;document.addEventListener(v.OnClearCookie,;var Ha=fc=Q={setCookieHash:read:write:remove:fc},xd=Z=gc=yd=hc=K=rf=k={result:y({},t,{backgroundPage:null}),config:y({},N,{settings:{canonicalizeIds:!1,runOnTranslatedPage:!1,setDefaultListPrice:!1,truncateTranslated:!0},currentKey:null}),campaignResponses:[]},Oc=eb=zd=function(){return eb().result||null},Ad=Bd=Ia,Ja,ic=jc=Ka=Cd=sf=(Ia={},L(Ia,".eu","sourceURL"),
L(Ia,".el","line"),L(Ia,".ec","column"),Ia),tf=(Ja={},L(Ja,".eu","fileName"),L(Ja,".el","lineNumber"),L(Ja,".ec","columnNumber"),Ja),Dd=uf=wf=vf=xf=yf=zf=Af=Bf=Object.prototype.hasOwnProperty,Cf=db),kc=),Ef=function(a){function b(a,f){ha(this,b);a=Oa(this,I(b).call(this,a));a.eventRateLimiter=f||new db({globalLimit:p.beaconConfig.errorRateLimiterConfig.globalLimit,
globalTimeRange:p.beaconConfig.errorRateLimiterConfig.globalTimeRange});return a}Na(b,a);ia(b,[{key:"send",value:function(a){if(this.eventRateLimiter.isTriggerLimitExceeded())r.warn("Error event rate limiter triggered.");else return ja(I(b.prototype),"send",this).call(this,a)}}]);return b}(kc),Ff=kc),Gf=kc),Df=fb,gb,hb,Ed=!1,Fd=!1,Gd=!1,x={sdkLoadTime:null,sdkParseTime:null,sdkDnsTime:null,pageLoadTime:null,domLoadTime:null,networkTime:null,eventDnsTime:null},Hd=
Id=Jd=Nc=Qc=Kd=lc=Ld=Md=mc=ib=Nd=Hf=va={extractFirstGroup:Ld,getLastPathComponent:Md,getLastPathComponentWithoutExtension:getParameterByName:lc,
getPathname:Kd,qualifyUrl:mc,removeQueryString:getFloatValue:ib,getIntegerValue:Nd,getUtagFirstForField:getValueFromNestedObject:Zb,buildLineItemFromPageState:resolveWhenTrue:td.resolveWhenTrue,cookie:M},If=aa=
Od=Lf=Mf=Jf=Pc=Kf=oc=Nf=Of=Pd=nc=Pf=La=C=0,G=-1,X,Y,Ge=Qf={setupActivityTimers:Wa,activityRegistered:Da,setUserInactive:Xa};((m.ItemAction||(m.ItemAction={}));var Rf=),Ma,Qd=Rd=pc=Sd=jb,Ud=Td=kb=Sf=Vd={_id:!0,id:!0,currency:!0,inventoryCount:!0,price:!0,tagType:!0,type:!0},qc=Tf=Uf=Wd=Xd=
Vf=Yd=Xf=Wf=Yf=lb=mb=Zd=$d=ae=be=ce=de=Zf=rc=$f=ee=ge=he=ag=bg=cg=dg=eg=fg=ie=jg=hg=gg=ig=kg=fe=document.addEventListener(v.OnInit,;document.addEventListener(v.OnShutDown,;document.addEventListener(v.OnBeforeInit,;var je=
ke=window.SalesforceInteractions&&(window.SalesforceInteractions.mcis=
{extractFirstGroup:va.extractFirstGroup,getLastPathComponentWithoutExtension:va.getLastPathComponentWithoutExtension,getParameterByName:va.getParameterByName,getValueFromNestedObject:va.getValueFromNestedObject,buildLineItemFromPageState:Hf,cookie:va.cookie,sendStat:ke,getContentZoneSelector:Sd,getSdkConfig:vd,getSitemapConfig:Ad,getSitemapResult:zd,getCampaignResponses:Bd,CustomEvents:pa,ConsentPurpose:cc,CatalogObjectInteractionName:Ca});m.ConsentPurpose=cc;m.DisplayUtils=ud;m.addEventListener=
function(b){r.warn("Evergage.addEventListener is deprecated. Use the Evergage.CustomEvents.OnEventSend event instead.");return null};m.addResponseListener=m.build=m.cashDom=A;m.configure=m.getCampaignResponses=Bd;m.getConfig=ec;m.getConsents=ed;m.getContentZoneSelector=Sd;m.getCurrentPage=Oc;m.getLoggingLevel=Ic;m.getSitemapConfig=
Ad;m.getSitemapResult=zd;m.getState=eb;m.getVersion=m.init=je;m.initSitemap=ge;m.listener=m.log=r;m.reinit=m.removeCookies=m.resolvers=sd;m.runSpecificConfig=m.sendEvent=mb;m.sendException=w;m.sendStat=ke;m.setConfig=ee;m.setLoggingLevel=Hc;m.shutDown=W;m.updateConsents=Xb;m.util=va;return m}({});
window.evergageBeaconParseTimeEnd = (new Date().getTime());

(();


try {
    const CAMPAIGN_STAT_ATTRIBUTE = {
    CAMPAIGN: "data-evg-campaign-id",
    EXPERIENCE: "data-evg-experience-id",
    USER_GROUP: "data-evg-user-group",
    CLICKTHROUGH: "data-evg-clickthrough",
    IGNORE_CLICKTHROUGH: "data-evg-ignore-clickthrough",
    DISMISSAL: "data-evg-dismissal",
    ITEM: "data-evg-item-id",
    ITEM_TYPE: "data-evg-item-type"
};

const CAMPAIGN_STAT_TYPE = {
    IMPRESSION: "Impression",
    CLICKTHROUGH: "Clickthrough",
    DISMISSAL: "Dismissal"
};

const CAMPAIGN_STAT_USER_GROUP = {
    TEST: "Test",
    CONTROL: "Control"
};

document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, ;

const sendImpression = 

const generateItemStats = 
const buildCampaignSelector = 
const getCampaignElementFromPayload = 

const getCampaignClickthroughAndDismissalElements = 

const sendClickthroughOrDismissal = 

const generateItemClickthroughStats = 
const bindCampaignClickthroughsAndDismissals = 

const validateOnTemplateDisplayEndEvent = 

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Campaign Stats Tracking:campaignStatsTracking.js");
    }
};


try {
    /**
 *  Personalization Flicker Defense
 */
Evergage.FlickerDefender = Evergage.FlickerDefender || (();

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.FlickerDefender = Evergage.FlickerDefender;
}

if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
    Evergage.FlickerDefender.init();
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !window,[));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
// syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';

var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';


var eventLinkId = null;

if (Evergage !== null) {
    document.addEventListener(Evergage.CustomEvents.OnInit, ;

    document.addEventListener(Evergage.CustomEvents.OnEventSend, ;

    document.addEventListener(Evergage.CustomEvents.OnEventResponse, ;
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: System Tools:interactionStudioTools.js");
    }
};


try {
    Evergage.Surveys = Evergage.Surveys || ((window);

if (window.SalesforceInteractions && window.SalesforceInteractions.mcis) {
    window.SalesforceInteractions.mcis.Surveys = Evergage.Surveys;
}
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Surveys:SurveyJS.js");
    }
};


try {
    (();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
var evgr = Evergage.resolvers;
const fireISSitemap  = () => {

  // event called when Add To Cart button is pressed
  /*const addToCartCustomCallback = () => { 

    console.log("add to cart!")
    let lineItem = SalesforceInteractions.mcis.buildLineItemFromPageState(".pdp-product-quantity",);
    lineItem.catalogObjectType = "Product";
    lineItem.catalogObjectId = SalesforceInteractions.cashDom("#addToBagSkuId").attr("value") 
                              || SalesforceInteractions.resolvers.fromSelector("#skuProductDetails")().substring(5);
    lineItem.price = parseFloat(SalesforceInteractions.cashDom(".pdpprice-row2-main-text.pdpprice-row2-main-text-purple").text().trim().substring(1))
                    || parseFloat(SalesforceInteractions.cashDom(".pdpprice-row2-main-text").text().trim().substring(1));

    SalesforceInteractions.sendEvent({

      interaction: {

        name: SalesforceInteractions.CartInteractionName.AddToCart,

        lineItem: lineItem

      }

    });

  }; 

  // mutation observer function to wait for certain DOM elements to appear on page (add to cart, change product color/size, etc.)
  function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
  }

  // wait on Add To Cart selector to then attach a listener and track event
  waitForElm('#atc-confirm').then((elm) => {
    console.log('atc-confirm element is ready');
    addToCartCustomCallback();
    SalesforceInteractions.reinit();
  });*/


  SalesforceInteractions.init({
    // Initializes the Personalization module of the Salesforce Interactions SDK
    cookieDomain: "kohls.com", // Optional tracking cookie domain configuration (overrides default)
  }).then(() => {

    // Sitemap configuration object
    const sitemapConfig = {
      
      // Object used to contain Global site object configuration
      global: {

        // On page load, collect the SFMC Subscriber ID from the URLs when user has clicked an email
        onActionEvent: (actionEvent) => {
          actionEvent.user = actionEvent.user || {};
          actionEvent.user.identities = actionEvent.user.identities || {};

          const sfmc_subid = SalesforceInteractions.mcis.getParameterByName('mi_u');
          if (sfmc_subid) {
            actionEvent.user.identities.sfmcSubscriberId = sfmc_subid;
          }

          const atgId = window.pageData && window.pageData.customerDetails && window.pageData.customerDetails.customerID;
          if (atgId && atgId.length === 16)  {
            actionEvent.user.identities.atgId = atgId;
          }

          return actionEvent;
        },

      }, 

      pageTypeDefault: { // Object used to capture any pages we are not explicitly capturing in the pageTypes config
        name: "default",
        interaction: {
          name: "Default"
        }
      },

      pageTypes: [

        {
          name: "homepage",
          interaction: { 
            name: "Homepage"
          },
          isMatch: () => new Promise((resolve, reject) => {
              let isMatchCat = setTimeout(() => {
                resolve(false);
              }, 2000);
              if (window.pageData && window.pageData.pageDetails && window.pageData.pageDetails.pageType === 'homepage') {
                clearTimeout(isMatchCat);
                resolve(true);
              }
            })
        },
        {
          name: "signin",
          interaction: { 
            name: "SignIn"
          },
          isMatch: () => new Promise((resolve, reject) => {
              let isMatchCat = setTimeout(() => {
                resolve(false);
              }, 2000);
              if (window.pageData && window.pageData.page_details && window.pageData.page_details.pageName === 'redesignSignIn') {
                clearTimeout(isMatchCat);
                resolve(true);
              }
          }),

          listeners: [

            // listener for the Continue button to ensure we can pick up the email on the next page
            SalesforceInteractions.listener("click", "#button-panel1013", ,

            // listens for sigin event to capture email address
            SalesforceInteractions.listener("click", "#button-panel1017", () => {

              let emailAddress = SalesforceInteractions.cashDom('.signin-enterpw-text.body-01').text();

              if (emailAddress) {

                SalesforceInteractions.sendEvent({

                  interaction: {

                      name: "Sign In Account",

                  },
                  user: {

                    identities: {

                      emailAddress: emailAddress
                      
                    }
                  },

                });
              }
            }),

          ]
        },
        {
          name: "salealert",
          interaction: { 
            name: "SaleAlert"
          },
          isMatch: () => new Promise((resolve, reject) => {
              let isMatchCat = setTimeout(() => {
                resolve(false);
              }, 2000);
              if (window.pageData && window.pageData.Page_Details && window.pageData.Page_Details.pageName === 'Sale Alert') {
                clearTimeout(isMatchCat);
                resolve(true);
              }
          }),

          listeners: [
          // listens for signup event to collect email
            SalesforceInteractions.listener("click", ".addtoList", () => {

              let emailAddress = SalesforceInteractions.cashDom('#enterEmail').val();

              if (emailAddress) {

                SalesforceInteractions.sendEvent({

                  interaction: {

                      name: "Sales Alert Sign Up",

                  },
                  user: {

                    identities: {

                      emailAddress: emailAddress
                      
                    }
                  },

                });
              }
              
            }),
          ]

        },
        {
          name: "category",
          interaction: { 
            name: "Category", //SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
            /*catalogObject: {
              type: "Category",
              id: () => {
                  const category = window.pageData && window.pageData.pmpDetails && window.pageData.pmpDetails.categoryName;
                  if (category) {
                    return category;
                  }
                  else { return '' }
              },
            },*/
          },
          isMatch: () => new Promise((resolve, reject) => {
              let isMatchCat = setTimeout(() => {
                resolve(false);
              }, 2000);
              if (window.pageData && window.pageData.pageDetails && window.pageData.pageDetails.pageType === 'product matrix') {
                clearTimeout(isMatchCat);
                resolve(true);
              }
          })
        },
        {
          name: "pdp",
          interaction: { 
            name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
            catalogObject: {
              type: "Product",
              id: () => {

                return SalesforceInteractions.util.resolveWhenTrue.bind(() => {
                    let productId = SalesforceInteractions.resolvers.fromSelector("#skuProductDetails")().substring(5)
                    if (productId) {
                        return productId;
                    } else {
                        return false;
                    }
                });

              }

            },
          },
          isMatch: () => new Promise((resolve, reject) => {
              let isMatchCat = setTimeout(() => {
                resolve(false);
              }, 2000);
              if (window.pageData && window.pageData.pageDetails && window.pageData.pageDetails.pageType === 'Product Detail Page') {
                clearTimeout(isMatchCat);
                resolve(true);
              }
            }),

          listeners: [

            // listens for add to cart event
            SalesforceInteractions.listener("click", "#addtobagID", () => {
               // We need to check if the item is not available to ship online when adding to cart (i.e. only in store pickup)
               // to ensure the event does not fire

                const addItemToCart = () => {
                  let shipNotAvailable = SalesforceInteractions.cashDom("#atc-confirm");
                  if (shipNotAvailable && shipNotAvailable.length !== 0 && shipNotAvailable.attr("style").indexOf('none') < 0) {
                    clearInterval(addtoCart);
                    let lineItem = SalesforceInteractions.mcis.buildLineItemFromPageState(".pdp-product-quantity",);
                    lineItem.catalogObjectType = "Product";
                    lineItem.catalogObjectId = SalesforceInteractions.cashDom("#addToBagSkuId").attr("value") 
                                               || SalesforceInteractions.resolvers.fromSelector("#skuProductDetails")().substring(5);
                    lineItem.price = parseFloat(SalesforceInteractions.cashDom(".pdpprice-row2-main-text.pdpprice-row2-main-text-purple").text().trim().substring(1))
                                      || parseFloat(SalesforceInteractions.cashDom(".pdpprice-row2-main-text").text().trim().substring(1));

                    SalesforceInteractions.sendEvent({

                      interaction: {

                          name: SalesforceInteractions.CartInteractionName.AddToCart,

                          lineItem: lineItem

                      }

                    });
                    SalesforceInteractions.reinit();
                  }
                }

                let addtoCart = setInterval(addItemToCart, 1000);  
            }),

            // listens for switching size on a pdp page to get new sku
            SalesforceInteractions.listener("click", ".pdp-size-swatch", () => {
              
              setTimeout(function() {
               SalesforceInteractions.sendEvent({
                interaction: {
                  name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                  catalogObject: {
                    type: "Product",
                    id: SalesforceInteractions.resolvers.fromSelector("#skuProductDetails")().substring(5),
                  }
                }
              });

              }, 2000);

              setTimeout(function() {
                SalesforceInteractions.reinit();
              }, 3000);

            }),

            // listens for switching color on a pdp page to get new sku
            SalesforceInteractions.listener("click", ".color-swatch", () => {

              setTimeout(function() {
               SalesforceInteractions.sendEvent({
                interaction: {
                  name: SalesforceInteractions.CatalogObjectInteractionName.ViewCatalogObject,
                  catalogObject: {
                    type: "Product",
                    id: SalesforceInteractions.resolvers.fromSelector("#skuProductDetails")().substring(5),
                  }
                }
              });

              }, 2000);

              setTimeout(function() {
                SalesforceInteractions.reinit();
              }, 3000);

            }),

          ]

        },
        {
          name: "shoppingcart",
          interaction: { 
            name: SalesforceInteractions.CartInteractionName.ReplaceCart,
            lineItems: () => {

              // capturing line item info of sku ID, price, and quantity.
              // For price, we have to retrieve from a different DOM element when it is on sale

                let cartLineItems = [];
                SalesforceInteractions.cashDom(".cart-item-panel-item").each((index, ele) => {
                  let itemQuantity = parseInt(
                    SalesforceInteractions.cashDom(ele).find(".product-delete-icon").attr("data-quantityid"),
                  );
                  if (itemQuantity && itemQuantity > 0) {
                    let lineItem = {
                      catalogObjectType: "Product",
                      catalogObjectId: SalesforceInteractions.cashDom(ele)
                        .find(".product-delete-icon")
                        .attr("data-skuid"),
                      price: parseFloat((SalesforceInteractions.cashDom(ele)
                          .find("span.product-footer-block-price-list-sale-price.black-color").text().substring(1) / itemQuantity).toFixed(2)) ||
                          parseFloat((SalesforceInteractions.cashDom(ele)
                          .find("span.product-footer-block-price-list-sale-price.red-color").text().substring(1) / itemQuantity).toFixed(2)),
                      quantity: itemQuantity,
                    };
                    cartLineItems.push(lineItem);
                  }
                });

              return cartLineItems;
              
            },
          },
          isMatch: () => 
            new Promise((resolve, reject) => {
              let isMatchCat = setTimeout(() => {
                resolve(false);
              }, 2000);
              if (window.pageData && window.pageData.pageDetails && window.pageData.pageDetails.pageType === 'Shopping cart') {
                clearTimeout(isMatchCat);
                resolve(true);
              }
            }),

          listeners: [

            // listener for removing items from cart
            SalesforceInteractions.listener("click", "button.product-delete-icon", (e) => {

              let sku = SalesforceInteractions.cashDom(e.target).closest("button.product-delete-icon").attr("data-skuid");
              let skuQuantity = SalesforceInteractions.cashDom(e.target).closest("button.product-delete-icon").attr("data-quantityid");;
              let skuPrice = SalesforceInteractions.cashDom(".cart-item-panel-item")
                          .find("span.product-footer-block-price-list-sale-price.black-color").text().substring(1) ||
                          SalesforceInteractions.cashDom(".cart-item-panel-item")
                          .find("span.product-footer-block-price-list-sale-price.red-color").text().substring(1);

              SalesforceInteractions.sendEvent({
                interaction: {
                    name: SalesforceInteractions.CartInteractionName.RemoveFromCart,
                    lineItem: {
                      catalogObjectId: sku,
                      catalogObjectType: "Product",
                      price: skuPrice, //1.0,
                      quantity: skuQuantity //parseInt(SalesforceInteractions.resolvers.fromSelectorAttribute("button.product-delete-icon","data-quantityid")())
                  }
                }

              });

              setTimeout(function() {
                SalesforceInteractions.reinit();
              }, 2000);
              

            }),

            // listener for when increasing quantity on an item - will recall beacon to recall ReplaceCart action
            SalesforceInteractions.listener("click", "button.add-product.change-qty-btn", (e) => {

              setTimeout(function() {
                SalesforceInteractions.reinit();
              }, 2000);         

            }),

            // listener for when decreasing quantity on an item - will recall beacon to recall ReplaceCart action
            SalesforceInteractions.listener("click", "button.minus-product.change-qty-btn", (e) => {

              setTimeout(function() {
                SalesforceInteractions.reinit();
              }, 2000);         

            }),

          ],
        },
        {
          name: "orderconfirmation",
          interaction: { 
            name: SalesforceInteractions.OrderInteractionName.Purchase,
            order: {
              id: window.pageData && window.pageData.orderConfirmation && window.pageData.orderConfirmation.orderID,
              totalValue: window.pageData && window.pageData.orderConfirmation && window.pageData.orderConfirmation.orderTotalValue,
              lineItems: () => {
                let purchaseLineItems = [];
                let orderDetails = window.pageData && window.pageData.orderConfirmation 
                                   && window.pageData.orderConfirmation.shipments && window.pageData.orderConfirmation.shipments[0]
                                   && window.pageData.orderConfirmation.shipments[0].shipmentItems;

                for (let i = 0; i < orderDetails.length; i++) {

                  let lineItem = {
                    catalogObjectType: "Product",
                    catalogObjectId: orderDetails[i].productSKU,
                    price: parseFloat(orderDetails[i].finalPrice),
                    quantity: parseInt(orderDetails[i].quantity)
                  };
                  
                  purchaseLineItems.push(lineItem);

                }

                return purchaseLineItems;
              }
            }
          },
          isMatch: () => 
            new Promise((resolve, reject) => {
              let isMatchCat = setTimeout(() => {
                resolve(false);
              }, 2000);
              if (window.pageData && window.pageData.pageDetails && window.pageData.pageDetails.pageType === 'order confirm') {
                clearTimeout(isMatchCat);
                resolve(true);
              }
            })
        },
        {
          name: "checkout",
          interaction: { 
            name: "CheckOut"
          },
          isMatch: () => new Promise((resolve, reject) => {
              let isMatchCat = setTimeout( 2000);
              if (window.pageData && window.pageData.pageDetails && window.pageData.pageDetails.pageType === 'Review') {
                clearTimeout(isMatchCat);
                resolve(true);
              }
            })
        },

      ], // Array used to contain the page type object configurations
    };

    SalesforceInteractions.initSitemap(sitemapConfig); // Initializes the Sitemap

    });
};


const ISSitemap = () => {
  let pd = pageData;
  if (pd) {
    clearInterval(sitemap);
    fireISSitemap();
  }
} 

let sitemap = setInterval(ISSitemap, 3500);
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};


}