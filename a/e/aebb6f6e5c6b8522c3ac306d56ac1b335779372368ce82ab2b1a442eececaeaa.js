/*
Linkback.js v2.1.0
Updated : 2023-03-24
*/
![function(e,t,n){n(1),n(30),n(42),n(44);var o,r,i,a,c,s,u,l,f=n(48),d=n(50),g=n(119),h=n(159),p=n(197),v=(n(209),n(240)),m=n(243),y=n(244),_=n(245),b=(n(246),n(247)),E=(n(241),n(217)),A=(n(248),n(249),n(250),n(251),n(316)),S=n(317),k=n(198),x=k.LB_SERVER.NOR,T=k.OBJECT_TYPE.UNDEFINED,N=null,w=null,C=p.getOgUrl(),O="",I=0,R=0,L=!1,D=h.getUUID();linkback=("undefined"==typeof linkback?"undefined":g(linkback))!==T?linkback:{};var P=[];linkback.send=function(){P.push(arguments)};var M=[];linkback.track=function(){M.push(arguments)},linkback.checkInf=!1,linkback.debug=linkback.debug||!1,linkback.sht_link,linkback.sht_genkey,linkback.sht_yn=!0,linkback.getA1gid=function(){return c},linkback.setA1gid=function(e){c=e},linkback.getContents=function(){return s},linkback.setContents=function(e){s=e},linkback.getContentsTitle=function(){return u},linkback.setContentsTitle=function(e){u=e},linkback.getContentsId=function(){return l},linkback.setContentsId=function(e){l=e},linkback.getSNSUrl=linkback.enableDebug=linkback.disableDebug=linkback.getip=linkback.getVersion=function(){return"20230324"},linkback.getOgUrl=function(){return C},linkback.getAccId=function(){return 41},linkback.getAdnxsId=function(){return o},linkback.getAoneId=function(){},linkback.getLastHighlightUpdatedAt=function(){return N},linkback.setLastHighlightUpdatedAt=function(e){N=e},linkback.getLastHighlightContent=function(){return w},linkback.setLastHighlightContent=function(e){w=e},linkback.setCopyText=function(e){O=e},linkback.getCopyText=function(){return O},linkback.getSendServer=function(){return x},linkback.getVisitId=function(){return D},linkback.setViewTime=function(e){R=e,h.logInfo("viewtime = "+R)},linkback.getViewTime=function(){return R},linkback.setViewStart=function(e){r=e,h.logInfo("viewstart = "+r)},linkback.getViewStart=function(){return r},linkback.setFocusStart=function(e){i=e,h.logInfo("focusstart = "+i)},linkback.getFocusStart=function(){return i},linkback.setFocused=function(e){L=e,h.logInfo("setFocused = "+L)},linkback.getFocused=function(){return L},linkback.requestAone=function(){requestAone()},linkback.setIntervalVal=linkback.getIntervalVal=function(){return a},linkback.getShowing=function(){return I},linkback.setShowing=linkback.getAdId=function(){};for(var B=U=E.getExceptUrls(),G=location.hostname+location.pathname,j=!0,K=0;K<U.length;K++)-1<G.search(U[K])&&(j=!1);var F=),H=function(){var e=d(f.mark(function r(){var t,n;return f.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.lbFetch(k.ADNXS.JSON,1e3);case 3:return t=e.sent,e.next=6,JSON.parse(t).uid;case 6:n=e.sent,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),n="",h.debugTurnedOn()&&linkback.send("ERROR",e.t0);case 13:h.logInfo("adnxs = "+n),o=n;case 15:case"end":return e.stop()}},r,null,[[0,9]])}));return ();&&(h.fetchSetView(k.TIME),h.loadPixelUrl(window,k.ADNXS.NB+k.LB_SERVER.COOKIE+k.ADNXS.ES_ID+"=$UID",(new Date).getTime()),F().then(function(){}),H(),"loading"!==document.readyState?(h.logInfo("LB4 : document is already ready."),W()):document.addEventListener("DOMContentLoaded",)},function(e,t,n){e.exports=n(2)},function(e,t,n){n(3);var r=n(22);e.exports=r.setInterval},function(e,t){e.exports={}},function(e,t,n){e.exports=n(31)},function(e,t,n){var r=n(32);e.exports=r},function(e,t,n){var r=n(33),o=Array.prototype;e.exports=function(e){var t=e.indexOf;return e===o||e instanceof Array&&t===o.indexOf?r:t}},function(e,t,n){n(34);var r=n(41);e.exports=r("Array").indexOf},function(e,t,n){e.exports=n(43)},function(e,t,n){n(3);var r=n(22);e.exports=r.setTimeout},function(e,t,n){e.exports=n(45)},function(e,t,n){var r=n(46);e.exports=r},function(e,t,n){n(47);var r=n(22);e.exports=r.Date.now},function(e,t,n){e.exports=n(49)},function(e,t,n){e.exports=n(52)},function(e,t){},,function(e,t){e.exports={}},function(e,t,n){n(113)},function(t,e,n){var r=n(120),o=n(126);function i(e){return t.exports=i="function"==typeof o&&"symbol"==typeof r,i(e)}t.exports=i},function(e,t,n){e.exports=n(121)},function(e,t,n){var r=n(122);e.exports=r},function(e,t,n){n(124)("iterator")},function(e,t,n){var r=n(73);t.f=r},function(e,t,n){e.exports=n(127)},function(e,t,n){n(124)("asyncIterator")},function(e,t,n){n(124)("hasInstance")},function(e,t,n){n(124)("isConcatSpreadable")},function(e,t,n){n(124)("match")},function(e,t,n){n(124)("matchAll")},function(e,t,n){n(124)("replace")},function(e,t,n){n(124)("search")},function(e,t,n){n(124)("species")},function(e,t,n){n(124)("split")},function(e,t,n){n(124)("toPrimitive")},function(e,t,n){n(124)("toStringTag")},function(e,t,n){n(124)("unscopables")},function(e,t,n){n(124)("asyncDispose")},function(e,t,n){n(124)("dispose")},function(e,t,n){n(124)("observable")},function(e,t,n){n(124)("patternMatch")},function(module,exports,__webpack_require__){var _spliceInstanceProperty=__webpack_require__(160),_Promise=__webpack_require__(165),_Object$keys=__webpack_require__(167),_sliceInstanceProperty=__webpack_require__(171),_JSON$stringify=__webpack_require__(176),_mapInstanceProperty=__webpack_require__(180),_indexOfInstanceProperty=__webpack_require__(30),_forEachInstanceProperty=__webpack_require__(185),_bindInstanceProperty=__webpack_require__(191),_typeof=__webpack_require__(119),urls=__webpack_require__(197),LB_CONSTANTS=__webpack_require__(198),murmur=__webpack_require__(199),t_Arr="Array",t_Str="String",t_Fn="Function",t_Numb="Number",hasOwnProperty=Object.prototype.hasOwnProperty,_loggingChecked=!1,DEBUG_MODE="lb_debug",UNDEFINED="undefined",infoLogger=null;try{var _context,infoLogger="object"===_typeof(console.info)?console.info:_bindInstanceProperty(_context=console.info).call(_context,window.console)}catch(e){}exports.addEventHandler,exports.isA,exports.isFn=function(e){return this.isA(e,t_Fn)},exports.isStr=function(e){return this.isA(e,t_Str)},exports.isArray=function(e){return this.isA(e,t_Arr)},exports.isNumber,exports.isEmpty,exports.logMessage=logMessage;var logMessageports.logWarn,exports.logError=logError,exports.logTimestamp,exports.logInfo=logInfo,exports.loadScript=loadScript,exports.getUUID,exports.loadPixelUrl,exports._each,exports.contains=function(e,t){if(this.isEmpty(e))return!1;for(var n=e.length;n--;)if(e[n]===t)return!0;return!1};var hasConsoleLogger,debugTurnedOn;exports.debugTurnedOn=debugTurnedOn,exports.stringContains,exports.hasOwn;var getConsoleDate;exports._map,exports.getBrowserType;var getUAexports.getMatch=getMatch,exports.getOs,exports.getUserAgent,exports.isIOS,exports.isMobile,exports.isMobileForCategory;var getCookie,setCookie,setCookieBySec,setSessionCookie,xmlHttpxports.setA1SegCookie=function(e,t,n){setCookieBySec(LB_CONSTANTS.COOKIE.A1_KWG_SEGMENT,e,n,t)},exports.getA1SegCookie=function(){return getCookie(LB_CONSTANTS.COOKIE.A1_KWG_SEGMENT)},exports.getGoogleSyncCookie=function(){return getCookie(LB_CONSTANTS.COOKIE.SYNC_TD_GOOGLE)},exports.setGoogleSyncCookie,exports.getA1GidCookie=function(){return getCookie(LB_CONSTANTS.COOKIE.A1_GID)},exports.setA1GidCookie,exports.setA1InflowCookie,exports.setA1RevisitCookie,exports.getA1InfSessionCookie=function(){return getCookie(LB_CONSTANTS.COOKIE.A1_INFLOW_SESSION)},exports.getA1InfRevisitCookie=function(){return getCookie(LB_CONSTANTS.COOKIE.A1_INFLOW_REVISIT)},exports.setA1MediaTypeCookie=function(e,t,n){setCookie(LB_CONSTANTS.COOKIE.A1_MEDIA_TYPE,e,n,t)},exports.setA1InflowTypeCookie,exports.getA1MediaTypeCookie=function(){return getCookie(LB_CONSTANTS.COOKIE.A1_MEDIA_TYPE)},exports.getA1InflowTypeCookie,exports.getLocalStorage=getLocalStorage,exports.getOAXCookie,exports.trimText,exports.countWord=function(e){return e?e.split(/\s+/i).length:0},exports.request,exports.loadJSONP=loadJSONP,exports.serverTime,exports.Base64={b64c:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64u:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",b64pad:"=",base64_encode_data,base64_encode:function(e){var t=unescape(encodeURIComponent(e));return this.base64_encode_data(t,t.length,this.b64c)},base64url_encode,base64_charIndex,base64_decode,base64url_sniff},exports.isContainKeywords,exports.removeJsonEscape,exports.existOAXCookie,exports.fetchSetView,exports.isCheckedContents,exports.postRequest,exports.makeContentId,exports.getAllUrlParams,exports.getCountryCode=function(){return"KR"},exports.allTrim,exports.convertParamObjectToQueryString,exports.convertUrlToParamObject,exports.date_to_str,exports.lbFetch,exports.extractRootDomain},function(e,t,n){e.exports=n(161)},function(e,t,n){var r=n(162);e.exports=r},function(e,t,n){var r=n(163),o=Array.prototype;e.exports=function(e){var t=e.splice;return e===o||e instanceof Array&&t===o.splice?r:t}},function(e,t,n){n(164);var r=n(41);e.exports=r("Array").splice},function(e,t,n){e.exports=n(166)},function(e,t,n){var r=n(53);e.exports=r},function(e,t,n){e.exports=n(168)},function(e,t,n){var r=n(169);e.exports=r},function(e,t,n){n(170);var r=n(22);e.exports=r.Object.keys},function(e,t,n){e.exports=n(172)},function(e,t,n){var r=n(173);e.exports=r},function(e,t,n){var r=n(174),o=Array.prototype;e.exports=function(e){var t=e.slice;return e===o||e instanceof Array&&t===o.slice?r:t}},function(e,t,n){n(175);var r=n(41);e.exports=r("Array").slice},function(e,t,n){e.exports=n(177)},function(e,t,n){var r=n(178);e.exports=r},function(e,t,n){e.exports=n(181)},function(e,t,n){var r=n(182);e.exports=r},function(e,t,n){var r=n(183),o=Array.prototype;e.exports=function(e){var t=e.map;return e===o||e instanceof Array&&t===o.map?r:t}},function(e,t,n){n(184);var r=n(41);e.exports=r("Array").map},function(e,t,n){e.exports=n(186)},function(e,t,n){var r=n(188);e.exports=r},function(e,t,n){n(189);var r=n(41);e.exports=r("Array").forEach},function(e,t,n){e.exports=n(192)},function(e,t,n){var r=n(193);e.exports=r},function(e,t,n){var r=n(194),o=Function.prototype;e.exports=function(e){var t=e.bind;return e===o||e instanceof Function&&t===o.bind?r:t}},function(e,t,n){n(195);var r=n(41);e.exports=r("Function").bind},function(e,t){e.exports={SNS:{PARAM_PREFIX:"lb",FACEBOOK:"FB",TWITTER:"TW",NAVER_BAND:"NB",KAKAO_STORY:"KS",GOOGLE_PLUS:"GP",NAVERBLOG:"NBL",KAKAOTALK:"KT",LINE:"LINE"},ANCHOR_PREFIX:"csidx",URL_SHARE_PREFIX:"lbus",COPY_RIGHT_TEXT:"LinkBack",RANDOM_CHAR:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",OBJECT_TYPE:{UNDEFINED:"undefined",OBJECT:"object",STRING:"string",NUMBER:"number"},LB_SERVER:{NOR:"https://gold.contentsfeed.com/lb/sd/nw",ECOM:"https://gold.contentsfeed.com/lb/sd/ec",COOKIE:"https://gold.contentsfeed.com/lb/syncuid?",GET_COOKIE:"https://gold.contentsfeed.com/lb/getuid",CONTENTS:"https://gold.contentsfeed.com/lb/cc?",DMP:"https://gold.contentsfeed.com/lb/segprovider?"},ADNXS:{JSON:"https://ib.adnxs.com/getuidj",JSONP:"https://ib.adnxs.com/getuidp?callback=linkback.adnxs",NB:"https://ib.adnxs.com/getuid?",NBD:"https://gold.contentsfeed.com?adnxs_uid=$UID",ES_ID:"adnxs.com-uuid2"},AONE:{JSON:"https://aw.dw.impact-ad.jp/c/u",JSONP:"https://aw.dw.impact-ad.jp/c/u/?callback=linkback.aoneId",OIDHASH:"7d77ae3e9eb9881e",AUDIENCE_ONE:"aoneId",ES_ID:"impact.ad.jp-tuuid"},TREASURE_DATE:{URL:"https://in.treasuredata.com/postback/v3/event/integration_base/oax_td_mapping",TD_GLOBAL_ID:"?td_global_id=td_global_id",TD_WRITE_KEY:"10446/c1a7d9ddc7feba2ae54255e62072605c6dba0dba"},COOKIE:{A1_GID:"a1_gid",SYNC_TD_GOOGLE:"_linkback_tdg",SYNC_TD_GOOGLE_EXPTIME:1,SYNC_OAX_TD:"_linkback_sot",SYNC_OAX_TD_EXPTIME:30,A1_INFLOW_SESSION:"a1_sid",A1_INFLOW_REVISIT:"a1_rid",A1_INFLOW_TYPE:"a1_ity",A1_KWG_SEGMENT:"__a1tg",A1_MEDIA_TYPE:"a1_ss_mty"},MEDIA_CATEGORY:{BEAUTY:"BEAUTY",COOKING:"COOKING",ENTERTAINMENT:"ENTERTAINMENT",HEALTH:"HEALTH",HUMAN_RESOURCE:"HUMAN_RESOURCE",LIFESTYLE:"LIFESTYLE",MONEY:"MONEY",NEWSPAPER:"NEWSPAPER",NEWS:"NEWS",MOTHER:"MOTHER",MAN:"MAN",WOMAN:"WOMAN",OTHERS:"ETC",PET:"PET",REAL_ESTATE:"REAL_ESTATE",SENIOR:"SENIOR",SPORTS:"SPORTS",STUDENT:"STUDENT",TRIP:"TRIP",IT_BUSINESS:"IT_BUSINESS",ECOMMERCE:"ECOMMERCE",OUTDOOR:"OUTDOOR"},TIME:"https://gold.contentsfeed.com/lb/tm?jsoncallback=linkback.setViewStart",ADIZ_INFLOW_KEY:"mac_ad_key",A1_INFLOW_KEY:"_a1_kad",TRACK:{GGLE_KEY:"gclid",KKO_KWD:"k_keyword",KKO_KID:"k_keyword_id",KKO_CID:"k_creative",NVR_KWD:"n_keyword",NVR_KID:"n_keyword_id",NVR_CID:"n_ad"},AD_MEDIA:{NAVER_SHOPPING:"NBRND",GOOGLE_ADWORDS:"GADWP",KAKAO_MOMENT:"KKMMM"},INFLOW_TYPE:{KEYWORD:"ks",SHOPPING:"ss"},RETARGETING_KEYWORD_HS_BRAND:["한샘","hanssem","키친","바스","바흐","리하우스","리모델링","인테리어"],RETARGETING_KEYWORD_HS_COMPETE:["리바트","livart","오늘의집","ohou","집닥","zipdoc","까사미아","casamia","자코모","jakomo","wishhome","하우시스","housys","이케아","ikea"],RETARGETING_KEYWORD_HS_GENERAL:["+)t+=_[e[n]];return t}(new Uint8Array(m.buffer))};var _=o({length:256},funct,g):c[g],_(n,g,a);else for(i=(o=d.call(c)).next,n=new s;!(r=i.call(o)).done;e(c,l,u),""==y.getA1SegCookie()&&(l=window.location.hostname,y.setA1SegCookin&&(t=t.replace(a,"")),t}};e.exports={start:c(1),end:c(2),trim:c(3)}},function(e,t){e.exports="\t\n\x0B\f\r                　\u2028\u2ction(e,t,n){n(210),n(167),nt=u.prototype.getOgTitle.getOgTitle=function(){for(var e="",t=document.getElementsByTagName("meta"),n=0;n<t.length;n++){if("og:title"===t[n].getAttribute("property")){e=t[n].content;break}}return e},u.prototype.getCategoryotype.getArtId=function(){return""},u.prototype.getNickname=functotype.getViewCon=function(){return document.body?document.body:document.documentElement},u.prototype.getProduct=function(){return""},u.prototype.getArea=function(e){return""},u.prototype.getMaker=function(){return""},u.prototype.getEcShop=function(){return""},u.prototype.getHashTag=function(){returngElements=function(){return[]},u.prototype.getCheckUrl=function(){return[]},u.prototype.getAdClickElements=function(){return""},u.nction(){for(var e=document.getElementsByTagName("meta"),t="",n=0;n<e.lengtname")){t=e[n].content;bre["|']/g,"")},u.prototype.getMediaCategory=function(){return""},u.prototype.omain()},u.prototype.getExrototype.getCheckInterval=function(){return 1},u.prototype.setOriginLoc=function(){linkback.originLoc=location.href},u.prototype.getCurrentLoc=function(){return location.href},u.prototype.getPrice=function(){return""},u.prototype.getDeliveryFee=function(){return""},u.prototype.getShippingArea=function(){return""},u.prototype.getRevisitExpire=function(){return 7},(r=new u).getCategory=function(){var e=c.getParameterByName("b",location.search),t="";return"news"==e?t=null!=document.querySelector("div.text1 > span.nick")?e+"^"+document.querySelector("div.text1 > span.nick").innerText:e:""!=e&&(t=null!=document.querySelector("span.word")?e+"^"+document.querySelector("span.word").innerText:e),t},r.getArtId=function(){try{return c.getParameterByName("id",location.search)}catch(e){return""}},r.getArtDate=function(){var e="";return null!=document.querySelector("div.titles > span.date")?e=document.querySelector("div.titles > span.date").innerText.replace(/-/g,"."):null!=document.querySelector("div.text3 > span.val")&&(e=document.querySelector("div.text3 > span.val").innerText.replace(/-/g,".")),e},r.getNickname=function(){var e="";return null!=document.querySelector("div.text1 > span.nick")&&(e=document.querySelector("div.text1 > span.nick").innerText),e},r.getViewCon=function(){var e=null!=document.querySelector("#container > elector("#container > div.contents"):null!=document.getElementById("wrap")?document.getEln){var r=n(220);e.exports=r},function(e,t,n){var r=n(221),o=Array.pro.apply(this,arguments)||0;var t=o(this),n=a(t.length),r=n-1;for(1<arguments.String.prototype;e.exports=function(e){var t=e.includes;return e==(92);r({target:"Array",proto:!0,forced:!n(40)("indexOf",{ACCESSORS:"trim")},{trim:function(){return o(this)}})},function(e,t,n){var r=n(9),o=n(216);e.exports=function(e){return r(function(){return!!o[e]()||"​᠎"!="​᠎"[e]()||o[e].name!==e})}},function(e,t,n){n(30),n(119);var r=n(42),k=n(159),o=n(19,w=i.RETARGETINtion()gInfo(e),window.getSelection?0<(t=window.getSelection()).rangeCount&&(t.getRangeAt?t.getRangeAt(0):t.duplicate(),s(t,n)):document.selection&&(t=d{var n,r=e.getRangeAt?(n=e.getRangeAt(0),k.trimText(e.toString())):(n=e,k.trimText(n.text));k.countWord(r)<5||window.setTimeout(function(){O(t,o.getPureLink(),r.substring(0,1e3),"","")},0)},O=function O(e,t,n,r,o){var i=linkback.getVersion(),a=linkback.getAccId(),c=k.getOAXCookie(),s=k.getUserAgent(),u=linkback.getOgUrl(),l=x.getSearchKeywords(),f=k.getCountryCode(),d=x.getMediaCategory(),g=linkback.getA1gid(),h=k.getA1InfRevisitCookie(),p=x.getHashTag(),v=x.getDocumentTitle(n),m="",y="",_=x.getCategory(),m=x.getArtId(),y=x.getArtDate(),b=x.getNickname(),E=['{"l":"',t,'","t":"',k.removeJsonEscape(n),'","uu":"',c,'","ua":"',s,'","aid":"',a,'","ogu":"',u,'","adnxs":"',linkback.getAdnxsId(),'","aoid":"',linkback.getAoneId(),'","countryCode":"',f,'","sKeyword":"',k.removeJsonEscape(l),'","mcate":"',d,'","a1gid":"',g,'","cate":"',k.removeJsonEscape(_),'","dt":"',k.removeJsonEscape(v),'","arid":"',m,'","ardt":"',y,'","img":"',o,'","etc":"',k.removeJsonEscape(b),'","adid":"',linkback.getAdId(),'","inf":"',h,'","hasht":"',k.removeJsonEscape(p),'"}'].join(""),A=k.Base64.base64url_encode(E),S=[linkback.getSendServer(),"?c=c&id=",e,"&lb_data=",A,"&version=",i].join("");k.logInfo("[sendServer] "+S),(new Image).src=S,null!=n&&k.isContainKeywords(n,N)&&(T.executeGoogleRemarketing_hs_brandK(),T.executeFacebookRemarketing_hs_brandK()),null!=n&&k.isContainKeywords(n,w)&&(T.executeGoogleRemarken 8!==e&&100!==e&&101!==e&&103!==e},n.getEmptyImage=function(){var e=("https:"===document.location.protocol?"https":"http")+"://gold.contentsfeed.com";return e+="/images/onebyone.gif"}},function(e,t,n){n(176),n(159),n(217);var r=t;r.executeGoogleRemarketing_hs_brandK=function(){try{gtag("event","conversion",{send_to:"AW-680374453/wF28CLT-gqoDELXhtsQC",value:1,currency:"KRW",aw_remarketing_only:!0})}catch(e){}},r.executeGoogleRemarketing_hs_competeK=function(){try{gtag("event","conversion",{send_to:"AW-680374453/LvWsCOqyyqkDELXhtsQC",value:1,currency:"KRW",aw_remarketing_only:!0})}catch(e){}},r.executeGoogleRemarketing_hs_generalK=function(){try{gtag("event","conversion",{send_to:"AW-680374453/LQ7-CP3bgKoDELXhtsQC",value:1,currency:"KRW",aw_remarketing_only:!0})}catch(e){}},r.executeFacebookRemarketing_hs_brandK=function(){try{fbq("trackCustom","brand")}catch(e){}},r.executeFacebookRemarketing_hs_competeK=function(){try{fbq("trackCustom","compete")}catch(e){}},r.executeFacebookRemarketing_hs_generalK=function(){try{fbq("trackCustom","general")}catch(e){}}},function(e,t,n){n(119);var c=n(30),r=n(stHighlightContent();return-1<o&&(r=!0),r||null===i||a!==e||(t=n-i,A.logInfo("sub_sec : "+t),t<=6e5&&(r=!0)),linkback.setLastHighlightUpdatedAt(n),linkback.setLastHighlightContent(e),r},o.registerHighlightServer=function(e,t,n,r){var o=linkback.getVersion(),i=A.getOAXCookie(),a=A.getUserAgent(),c=S.getCategory(),s=S.getSearchKeywords(),u=A.getCountryCode(),l=S.getMediaCategory(),f=linkback.getA1gid(),d=A.getA1InfRevisitCookie(),g=S.getHashTag(),h=S.getDocumentTitle(n),p=linkback.getOgUrl(),v=S.getArtId(),m=S.getArtDate(),y=S.getNickname(),_=['{"l":"',t,'","aoid":"',linkback.getAoneId(),'","t":"',A.removeJsonEscape(n),'","dt":"',A.removeJsonEscape(h),'","uu":"',i,'","ua":"',a,'","aid":"',linkback.getAccId(),'","adnxs":"',linkback.getAdnxsId(),'","cate":"',A.removeJsonEscape(c),'","ogu":"',p,'","arid":"',v,'","ardt":"',m,'","etc":"',A.removeJsonEscape(y),'","adid":"',linkback.getAdId(),'","countryCode":"',u,'","sKeyword":"',A.removeJsonEscape(s),'","mcate":"',l,'","a1gid":"',f,'","inf":"',d,'","hasht":"',A.removeJsonEscape(g),'"}'].join("");A.logInfo("sended Data(Before encode) :"+_);var b=A.Base64.base64url_encode(_),E=[linkback.getSendServer(),"?c=h&id=",e,"&lb_data=",b,"&version=",o].join("");A.logInfo("[sendServer] "+E),(new Image).src=E,null!=n&&A.isContainKeywords(n,x)&&(k.executeGoogleRemarketing_hs_brandK(),k.executeFacebookRemarketing_hs_brandK()),null!=n&&A.isContainKeywords(n,T)&&(k.executeGoogleRemarketing_hs_competeK(),k.executeFacebookRemarketing_hs_competeK()),null!=n&&A.isContainKeywords(n,N)&&(k.executeGoogleRemarketing_hs_generalK(),k.executeFacebookRemarketing_hs_generalK())}},function(e,t,n){var N,r,w,C,O,o=n(30),iindow.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)+(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)},s=[3,15,30,180],u=location.href,l=window.attachEvent?"onfocus":"focus",f=window.attachEventlinkban(+wtaht.logInfo("showing= "+linkback.getShowing())},m=function m(){-1<o(s).call(s,linkback.getIntervalVal())&&G(linkback.getIntervalVal()),linkback.setIntervalVal(linkback.getIntervalVal()+3)},G=function G(e){try{var t,n;0<e&&(w=D.getViewCon(),C=w.offsetTop,O=C+w.offsetHeight),180<=e&&clearInterval(N),linkback.getFocused()&&(t=(new Date).getTime()-linkback.getFocusStart(),n=linkback.getViewTime(),linkback.setViewTime(n+t));var r,o,i,a,c,s,u,l,f,d,g,h,p,v,m,y,_,b,E,A,S,k,x=linkback.getViewTime();0<=x&&x<864e5&&((r=0)===(o=linkback.getShowing())&&(o=U()),o<C?r=0:C<=o&&o<=O?r=(o-C)/(O-C)*100:O<o&&(r=100),r=r.toFixed(2),i=D.getCategory(),a=D.getArtId(),c=D.getNickname(),s=linkback.getOgUrl(),u=D.getProduct(),I.logInfo("vRate = "+r),I.logInfo("sub = "+x),I.logInfo("bbsidx = "+a),l=D.getDocumentTitle(""),f=I.getOAXCookie(),d=I.getUserAgent(),g=R.getPureLink(),h=linkback.getVisitId(),p=D.getSearchKeywords(),v=I.getCountryCode(),m=D.getMediaCategory(),y=linkback.getA1gid(),_=I.getA1InfRevisitCookie(),b=document.referrer,E=D.getHashTag(),A=['{"l":"',g,'","aoid":"',linkback.getAoneId(),'","dt":"',I.removeJsonEscape(l),'","uu":"',f,'","ua":"',d,'","aid":"',linkback.getAccId(),'","s":"',x,'","adnxs":"',linkback.getAdnxsId(),'","cate":"',I.removeJsonEscape(i),'","p":"',I.removeJsonEscape(u),'","ogu":"',s,'","vt":"',linkback.getViewStart(),'","r":"',r,'","arid":"',a,'","ref":"',b,'","vte":"',e,'","etc":"',I.removeJsonEscape(c),'","adid":"',linkback.getAdId(),'","countryCode":"',v,'","sKeyword":"',I.removeJsonEscape(p),'","mcate":"',m,'","a1gid":"',y,'","inf":"',_,'","hasht":"',I.removeJsonEscape(E),'"}'].join(""),S=I.Base64.base64url_encode(A),k=[linkback.getSendServer(),"?c=ve&id=",h,"&lb_data=",S,"&version=",linkback.getVersion()].join(""),I.logInfo("[sendServer] "+k),(new Image).src=k,null!=l&&I.isContainKeywords(l,P)&&50<=r&&(L.executeGoogleRemarketing_hs_brandK(),L.executeFacebookRemarketing_hs_brandK()),null!=l&&I.isContainKeywords(l,M)&&50<=r&&(L.executeGoogleRemarketing_hs_competeK(),L.executeFac!==s+n&&(r=new RegExp("\\b("+s+n+"=).*?(&|$)"),0<=e.search(r)&&(e=e.replace(r,"$1$2"))),e}},function(e,t,n){n(119);var r=n(198);n(197),n(159),r.OBJECT_TYPE.UNDEFINED,r.URL_SHARE_PREFIX},function(e,t,n){var y=n(30),r=n(198),A=n(159),S=n(197),k=n(217),_=(n(242),n(241),r.SNS.PARAM_PREFIX),b=r.SNS.FAC="nave).","inf":"',y,'"}'].join(""),b=A.Base64.base64url_encode(_),E=[linkback.getSendServer(),"?c=t&id=",e,"&lb_data=",b,"&version=",l].join("");A.logInfo("[sendServer] "+E),(new Image).src=E},P=function P(e,t,n,r,o,i){var a=linkback.getVersion(),c=A.getOAXCookie(),s=A.getUserAgent(),u=linkback.getOgUrl(),l=S.extractDomain(u),f=linkback.getVisitId(),d=k.getSearchKeywords(),g=A.getCountryCode(),h=k.getMediaCategory(),p=linkback.getA1gid(),v=A.getA1InfRevisitCookie(),m=k.getHashTag(),y=['{"uu":"',c,'","aoid":"',linkback.getAoneId(),'","ua":"',s,'","aid":"',linkback.getAccId(),'","do":"',l,'","adnxs":"',linkback.getAdnxsId(),'","dt":"',A.removeJsonEscape(e),'","cate":"',A.removeJsonEscape(t),'","arid":"',n,'","ardt":"',r,'","ogu":"',u,'","l":"',S.getPureLink(),'","r":"',o,'","vt":"',linkback.getViewStart(),'","etc":"',A.removeJsonEscape(i),'","adid":"',linkback.getAdId(),'","countryCode":"',g,'","sKeyword":"',A.removeJsonEscape(d),'","mcate":"',h,'","a1gid":"',p,'","inf":"',v,'","hasht":"',A.removeJson9);var r=n(198);n(159),n(197),n(217),n(242),r.OBJECT_TYPE.UNDEFINED},function(e,t,n){n(30),n(1),n(119);var r=n(198);n(159),n(197),n(217),r.OBJECT_TYPE.UNDEFINED},function(e,t,n){n(159)},function(e,t,n){var v=n(167),m=n(119),y=n(198),_=n(159),b=n(197),E=n(217),A=(n(252),y.OBJECT_TYPE.UNDEFINED);t.registerCrawlerEvent=function(e,t){if(m(document.getElementsByClassName)!=A)try{var n=linkback.getVersion(),r=linkback.getContents(),o=linkback.getContentsId(),i=b.getPureLink(),a=E.getDocumentTitle(),c=E.getCategory(),s=E.getProduct(),u=E.getArtDate(),l=E.getArtId(),f=E.getHashTag(),d=E.getSearchKeywords(),g=linkback.getOgUrl(),h=S(o,r,i,a,c,s,l,u,f,g,e,d,n);0<v(h).length&&_.postRequest(y.LB_SERVER.CONTENTS,h)}catch(p){_.logInfo(p)}};var S=function S(e,t,n,r,o,i,a,c,s,u,l,f,d){var g,h={};return t&&e&&(t=t.replace(/[\r\n\{\}\[\]\/?.,;:|\)*~'"`“”‘’!^\-_+<>@\#$%&=(▲]/g,""),g=['{"l":"',n,'","dt":"',_.removeJsonEscape(r),'","t":"',t,'","aid":"',l,'","cate":"',_.removeJsonEscape(o),'","p":"',_.removeJsonEscape(i),'","og,e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:functio,n){n(90),n(55);var r=n(256);e.exp=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},function(e,t,n){e.exports=n(258)},function(e,t,n){n(90),n(55);var r=n(101);e.exports=r},function(e,t,n){e.exports=n(260)},function(e,t,n){var r=n(128);e.exports=r},function(e,t,n){e.exports=n(262)},function(e,t,n){var r=n(263);e.ext,l=a(function(){s.sort(undefined)}),f=a(function(){s.sort(null)}),d=c("sort");r({target:"Array",proto:!0,forced:l||!f||!d},{sort:function(e){return e===undefined?u.call(i(this)):u.call(i(this),o(e))}})},function(e,t,n){e.exports=n(267)},function(e,t,n){var r=n(268);e.exports=r},function(e,t,n){var r=n(269),o=th"))||r.writable))&&!g},{startsWith:function(e){var t=String(s(this));c(e);s("content-type")||r.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=m(t,{body:y(0,String(n)),headers:y(0,r)}))),o.push(t)),A.apply(this,o)}}),e.exports={URLSearchParams:F,getState:w}},function(e,t){},function(e,t,n){e.exports=n(281)},function(e,t,n){var r=n(282);e.exports=r},function(e,t,n){var r=n(283),o=Array.prototype;e.exports=function(e){var t=e.filter;return e===o||e instanceof Array&&t===o.filter?r:t}},function(e,t,n){n(284);var r=n(41);e.exports=r("Array").filter},function(e,t,n){"use strict";var r=n(4),o=n(138).filter,i=n(133),a=n(40),c=i("filter"),s=a("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(e){return o(this,e,1<arguments.length?arguments[1]:undefined)}})},function(e,t,n){e.exports=n(286)},function(e,t,n){var r=n(287);e.exports=r},function(e,t,n){n(288);var r=n(22);e.exports=r.Array.isArray},function(e,t,n){n(4)({target:"Array",stat:!0},{isArray:n(130)})},function(e,t,n){e.exports=n(290)},function(e,t,n){var r=n(291);e.exports=r},function(e,t,n){var r=n(292),o=Array.prototype;e.exports=function(e){var t=e.every;return e===o||e instanceof Array&&t===o.every?r:t}},function(e,t,n){n(293);var r=n(41);e.exports=r("Array").every},function(e,t,n){"use strict";var r=n(4),o=n(138).every,i=n(39),a=n(40),c=i("every"),s=a("every");r({target:"Array",proto:!0,forced:!c||!s},{every:function(e){return o(this,e,1<arguments.length?arguments[1]:undefined)}})},function(e,t,n){e.exports=n(295)},function(e,t,n){var r=n(296);e.exports=r},function(e,t,n){var r=n(297),o=Array.prototype;e.exports=function(e){var t=e.some;return e===o||e instanceof Array&&t===o.some?r:t}},function(e,t,n){n(298);var r=n(41);e.exports=r("Array").some},function(e,t,n){"use strict";var r=n(4),o=n(138).some,i=n(39),a=n(40),c=i("some"),s=a("some");r({target:"Array",proto:!0,forced:!c||!s},{some:function(e){return o(this,e,1<arguments.length?arguments[1]:undefined)}})},function(e,t,n){e.exports=n(300)},function(e,t,n){var r=n(301)find,i=n(92),a=n(40),c="find",s=!0,u=a(c);c in[]&&Array(1).find(function(){s=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=undefined,{value:undefined,done:!0})},n?"entries":"values",!n,!0),c(t)}}},function(e,t,n){e.exports=n(313)},function(e,t,n){var r=n(314);e.exports=r},function(e,t,n){var r=n(315),o=Array.prototype;e.exports=function(e){var t=e.con'","mcate":"',d,'","a1gid":"',g,'"}'].join(""),w=D.Base64.base64url_encode(N),C=[linkback.getSendServer(),"?c=",_,"&id=",h,"&lb_data=",w,"&version=",n].join("")}D.logInfo("[sendServer] "+C),(new Image).src=C},r.sendTrack=function(e,t){if("conversion"===e||"inflow"===e){var n,r="",o="scv",i="";if("inflow"===e){if(linkback.checkInf)return;if(""===(i=function(){var e="",t="",n=window.location.search;-1<O(n).call(n,L.TRACK.NVR_CID)||-1<O(n).call(n,L.TRACK.NVR_KID)?(t=1<(t=P.getParameterByName(L.TRACK.NVR_KWD)+"||"+P.getParameterByName(L.TRACK.NVR_CID)+"||"+P.getParameterByName(L.TRACK.NVR_KID)).length?t:"",e=L.AD_MEDIA.NAVER_SHOPPING):-1<O(n).call(n,L.TRACK.KKO_CID)||-1<O(n).call(n,L.TRACK.KKO_KID)?(t=1<(t=P.getParameterByName(L.TRACK.KKO_KWD)+"||"+P.getParameterByName(L.TRACK.KKO_CID)+"||"+P.getParameterByName(L.TRACK.KKO_KID)).length?t:"",e=L.AD_MEDIA.KAKAO_MOMENT):-1<O(n).call(n,L.TRACK.GGLE_KEY)&&(t="||"+(t=P.getParameterByName(L.TRACK.GGLE_KEY))+"||",e=L.AD_MEDIA.GOOGLE_ADWORDS);if(""===t)return"";t=t.split("?")[0];var r=(new Date).getTime(),o=linkback.getA1gid(),i=M.getOgnDomain(),a=M.getRevisitExpire(),c=encodeURIComponent([o,t,r].join("||"));return D.setA1InflowCookie(c,i,a),D.setA1InflowTypeCookie(L.INFLOW_TYPE.SHOPPING,i,a),D.setA1MediaTypeCookie(e,i,a),e}()))return;n=D.getA1InfRevisitCookie(),o="sinf"}else{if(D.getA1InflowTypeCookie()!==L.INFLOW_TYPE.SHOPPING)return;if(n=D.getA1InfRevisitCookie(),i=D.getA1MediaTypeCookie(),""!==D.getA1InfSessionCookie())r="session",n=D.getA1InfSessionCookie();else{if(""===n)return;r="revisit"}}var a=linkback.getVersion(),c=P.getPureLink(),s=D.getOAXCookie(),u=D.getUserAgent(),l=linkback.getAccId(),f=linkback.getOgUrl(),d=M.getCategory(),g=linkback.getAdnxsId(),h=D.getCountryCode(),p=M.getSearchKeywords(),v=M.getMediaCategory(),m=linkback.getA1gid(),y=D.getUUID(),_=R(t),b=M.getProduct(),E=M.getEcShop(),A=M.getMaker(),S=M.getHashTag(),k=M.getPrice(),x=M.getShippingArea(),T=M.getDeliveryFee(),N=['{"l":"',c,'","t":"',D.removeJsonEscape(_),'","uu":"',s,'","ua":"',u,'","aid":"',l,'","ogu":"',f,'","c1":"',D.removeJsonEscape(d),'","adnxs":"',g,'","p":"',D.removeJsonEscape(b),'","ec_shop":"',D.removeJsonEscape(E),'","m1":"',D.removeJsonEscape(A),'","hasht":"',D.removeJsonEscape(S),'","countryCode":"',h,'","sKeyword":"',D.removeJsonEscape(p),'","mcate":"',v,'","a1gid":"',m,'","pr":"',k,'","ship":"',x,'","dpr":"',T,'","inf":"',n,'","cr":"',r,'","mt":"',i,'"}'].join(""),w=D.Base64.base64url_encode(N),C=[linkback.getSendServer(),"?c=",o,"&id=",y,"&lb_data=",w,"&version=",a].join("");D.logInfo("[sendServer] "+C),(new Image).src=C}}},function(e,t,n){n(234),n(318),n(42),n(30);var a=n(159),r=(n(197),n(217),t);r.execute=function(){var e,t,n,r,o;try{"function"!=typeof window.gtag&&(a.loadScript(window,"https://www.googletagmanager.com/gtag/js?id=AW-680374453"),window.dataLayer=window.dataLayer||[],window.gtag374453"),a.logInfo("Google Remarketing is called.")}catch(i){a.logError(i)}try{window.fbq||(e=window,t=document,e.fbq||(n=e.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)},e._fbq||(e._fbq=n),(n.push=n).loaded=!0,n.version="2.0",n.queue=[],(r=t.createElement("script")).async=!0,r.src="https://connect.facebook.net/en_US/fbevents.js",(o=t.getElementsByTagName("script")[0]).parentNode.insertBefore(r,o))),fbq("init","330594855567035"),fbq("init","271464224900171"),fbq("track","PageView"),a.logInfo("Facebook Remarketing is called.")}catch(i){a.logError(i)}},r.reset=function(){}},function(e,t,nt(n)?i(e,t):t(null)};o.adId=function(t){a("getADID",function(e){t(e)})},o.packageName=function(t){a("getPackageName",function(e){t(e)})},o.packageVersion=function(t){a("getPackageVersion",function(e){t(e)})}}]);