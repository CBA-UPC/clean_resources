"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4610],{14610:(e,a,t)=>{t.d(a,{DsaModal:()=>ee});var s=t(50959),i=t(29132),n=t(69736),l=t(27563),d=t(7863),r=t(33837),o=t(85648),c=t(94948),m=t(40537),g=t(24071),u=(t(80378),t(46758),t(86277),t(39301),t(63852)),v=t(80956),E=t(52696),h=t(36353),N=t(10306);let x=function(e){return e[e.UNKNOWN=0]="UNKNOWN",e[e.AGE=1]="AGE",e[e.GEO=2]="GEO",e[e.GENDER=3]="GENDER",e[e.INTEREST=4]="INTEREST",e[e.UNRECOGNIZED=-1]="UNRECOGNIZED",e}({});const f={fromJSON:e=>({targetingTypes:globalThis.Array.isArray(null==e?void 0:e.targetingTypes)?e.targetingTypes.map((e=>function(e){switch(e){case 0:case"UNKNOWN":return x.UNKNOWN;case 1:case"AGE":return x.AGE;case 2:case"GEO":return x.GEO;case 3:case"GENDER":return x.GENDER;case 4:case"INTEREST":return x.INTEREST;default:return x.UNRECOGNIZED}}(e))):[],legalEntityName:T(e.legalEntityName)?globalThis.String(e.legalEntityName):"",showTailoredAdsSection:T(e.showTailoredAdsSection)?Boolean(e.showTailoredAdsSection):void 0}),toJSON(e){var a;const t={};return null!==(a=e.targetingTypes)&&void 0!==a&&a.length&&(t.targetingTypes=e.targetingTypes.map((e=>function(e){switch(e){case x.UNKNOWN:return"UNKNOWN";case x.AGE:return"AGE";case x.GEO:return"GEO";case x.GENDER:return"GENDER";case x.INTEREST:return"INTEREST";case x.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(e)))),""!==e.legalEntityName&&(t.legalEntityName=e.legalEntityName),void 0!==e.showTailoredAdsSection&&(t.showTailoredAdsSection=e.showTailoredAdsSection),t},create:e=>f.fromPartial(e??{}),fromPartial(e){var a;const t={targetingTypes:[],legalEntityName:"",showTailoredAdsSection:void 0};return t.targetingTypes=(null===(a=e.targetingTypes)||void 0===a?void 0:a.map((e=>e)))||[],t.legalEntityName=e.legalEntityName??"",t.showTailoredAdsSection=e.showTailoredAdsSection??void 0,t}};function T(e){return null!=e}var y=t(77725),b=t(81995),j=t(86337);const p="khENZvA4G9EjpLQiINss",A="Fu87PEr0tL6oDjmw_X2H";var _=t(11527);const w=e=>{let{title:a,showTitle:t,children:s}=e;return(0,_.jsxs)("section",{className:p,children:[t&&(0,_.jsx)(n.x,{className:A,variant:"bodyMediumBold",as:"h3","aria-label":a,children:a}),s]})};var G=t(82647);const S="P9gpV_sgryfUERYOdfor",R=e=>{let{text:a,icon:t}=e;return(0,_.jsxs)(G.n,{className:S,condensed:!0,children:[t,(0,_.jsx)(n.x,{variant:"bodyMedium","aria-label":a,as:"h4",children:a})]})},I="FB2PxTNhkGbwFwYI2ufG",O="gZYgXNWbFSAAjLzGhOI9",k="eYxzC4s3Nw68RcbK7xzl",C="QrelMvam4WOTMVaO28Rl",D="_EaBFRLKy0nZJXkiRwlx",B="N77hKGzNc_lKQ5OG1EBN",U="JceC3xibcl3MHVULIK0b",M="Uk72m6OFBBdTZ3RJb0K_",F="IFqCps3krPbH25azco3F";const K=e=>{let{activeTargetingTypes:a,item:t}=e;const s=(0,g.s4)(),{openURLWithSessionTransfer:i}=(0,j.e)();return[x.AGE,x.GENDER].some((e=>a.includes(e)))?(0,_.jsxs)(w,{title:o.ag.get("ad-formats.dsa.modal.profileInfo"),showTitle:!0,children:[(0,_.jsx)(E.d,{className:F,condensedAll:!0,style:{marginBlockEnd:h.o7},children:a.map((e=>{const a=function(e){switch(e){case x.AGE:return{icon:(0,_.jsx)(u.p,{}),text:o.ag.get("ad-formats.dsa.modal.targeting.age")};case x.GENDER:return{icon:(0,_.jsx)(v.f,{}),text:o.ag.get("ad-formats.dsa.modal.targeting.gender")};default:return null}}(e);return a?(0,_.jsx)(R,{icon:a.icon,text:a.text},e):null}))}),(0,_.jsx)(n.x,{variant:"bodyMedium",semanticColor:"textSubdued","aria-label":o.ag.get("ad-formats.dsa.modal.adRelevancyAction"),children:o.ag.get("ad-formats.dsa.modal.adRelevancyAction")}),(0,_.jsxs)(N.h,{component:"button","aria-label":"Edit your Spotify profile, link",className:B,semanticColor:"textBrightAccent",onClick:()=>{var e,a;i(b.VF),s.send((0,r.u)({ad_id:t.adId,lineitem_id:null===(e=t.metadata)||void 0===e?void 0:e.lineitem_id,creative_id:null===(a=t.metadata)||void 0===a?void 0:a.creative_id,slot:t.slot,event:"event_clicked",reason:"edit_profile",surface:"ad_dsa_view"}))},standalone:!0,children:[(0,_.jsx)(n.x,{variant:"bodyMediumBold",as:"h2",children:o.ag.get("ad-formats.dsa.modal.editProfile")}),(0,_.jsx)(y.h,{semanticColor:"textBrightAccent"})]})]}):null};var W=t(80524),Z=t(53213);const z=e=>{let{activeTargetingTypes:a}=e;const t=[x.GEO,x.INTEREST].some((e=>a.includes(e)));if(!t)return null;const s=t&&a.some((e=>e===x.AGE||e===x.GENDER));return(0,_.jsx)(w,{title:o.ag.get("ad-formats.dsa.modal.otherInfo"),showTitle:s,children:(0,_.jsx)(E.d,{className:F,condensedAll:!0,children:a.map((e=>{const a=function(e){switch(e){case x.GEO:return{icon:(0,_.jsx)(W.n,{}),text:o.ag.get("ad-formats.dsa.modal.targeting.location")};case x.INTEREST:return{icon:(0,_.jsx)(Z.a,{}),text:o.ag.get("ad-formats.dsa.modal.targeting.interests")};default:return null}}(e);return a?(0,_.jsx)(R,{icon:a.icon,text:a.text},e):null}))})})},L=e=>{let{item:a}=e;const t=(0,g.s4)(),{openURLWithSessionTransfer:s}=(0,j.e)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("hr",{className:U}),(0,_.jsx)(n.x,{className:M,variant:"titleSmall","aria-label":o.ag.get("ad-formats.dsa.modal.aboutTailoredAds"),as:"h2",children:o.ag.get("ad-formats.dsa.modal.aboutTailoredAds")}),(0,_.jsx)(n.x,{variant:"bodyMedium",semanticColor:"textSubdued","aria-label":o.ag.get("ad-formats.dsa.modal.tailoredAds"),children:o.ag.get("ad-formats.dsa.modal.tailoredAds")}),(0,_.jsxs)(N.h,{component:"button","aria-label":"Visit your privacy settings, link",className:B,semanticColor:"textBrightAccent",onClick:()=>{var e,i;s(`${b.Vx}/#tailored-ads`),t.send((0,r.u)({ad_id:a.adId,creative_id:null===(e=a.metadata)||void 0===e?void 0:e.creative_id,event:"event_clicked",lineitem_id:null===(i=a.metadata)||void 0===i?void 0:i.lineitem_id,reason:"change_preferences",request_id:a.requestId,slot:a.slot,surface:"ad_dsa_view"}))},standalone:!0,children:[(0,_.jsx)(n.x,{variant:"bodyMediumBold",as:"h2",children:o.ag.get("ad-formats.dsa.modal.privacySetting")}),(0,_.jsx)(y.h,{semanticColor:"textBrightAccent"})]})]})};var J=t(87562),P=t(85039),V=t(95812),q=t(5380);const Q="vkMQw77rXE4cp8xsAdzl",X="emw6kR941D2wReukhCAJ",Y=e=>{let{advertiser:a,legalEntityName:t}=e;const{item:s}=(0,J.x)()||{item:null},i=s&&(0,V.k6)(s)?null==s?void 0:s.images:void 0,l=(0,q.o)(i);return(0,_.jsxs)("div",{className:Q,children:[l&&(0,_.jsx)(P.Ee,{className:X,src:l,loading:"lazy"}),(0,_.jsx)(n.x,{variant:"bodyMediumBold","aria-label":a,children:a}),t&&(0,_.jsx)(n.x,{variant:"bodySmall",semanticColor:"textSubdued","aria-label":t,children:t})]})};var H=t(67204);const $=e=>{const[a,t]=(0,s.useState)(null),[i,n]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{var a;null!=e&&null!==(a=e.metadata)&&void 0!==a&&a.lineitem_id&&e.adId&&(async e=>{try{n(!0);const a=await H.fi.getDsaAdMetadata(e);t(f.fromJSON(a)),n(!1)}catch(a){n(!1)}})({lineitemId:e.metadata.lineitem_id,adId:e.adId})}),[e]),{data:a,loading:i}},ee=e=>{let{item:a}=e;const t=(0,g.s4)(),u=(0,i.I0)(),{isOpen:v}=(0,i.v9)((e=>e.ui.dsaDialog)),{data:E,loading:h}=$(a);return(0,s.useEffect)((()=>{var e,s;t.send((0,r.u)({ad_id:a.adId,creative_id:null===(e=a.metadata)||void 0===e?void 0:e.creative_id,event:"event_viewed",lineitem_id:null===(s=a.metadata)||void 0===s?void 0:s.lineitem_id,reason:"ad_dsa_view",request_id:a.requestId,slot:a.slot,surface:"ad_dsa_view"}))}),[]),(0,_.jsxs)(m.Z,{className:I,isOpen:v,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,contentLabel:o.ag.get("ad-formats.dsa.aboutThisAd"),children:[(0,_.jsx)("div",{className:k,children:(0,_.jsx)(n.x,{"aria-label":o.ag.get("ad-formats.dsa.aboutThisAd"),variant:"titleMedium",as:"h1",children:o.ag.get("ad-formats.dsa.aboutThisAd")})}),(0,_.jsx)("hr",{className:U}),(0,_.jsx)("div",{className:O,children:h?(0,_.jsx)("div",{className:C,"data-testid":"loading-indicator",children:(0,_.jsx)(l.T,{size:"large"})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(Y,{advertiser:a.metadata.advertiser,legalEntityName:null==E?void 0:E.legalEntityName}),null!=E&&E.targetingTypes.length?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(n.x,{className:M,variant:"titleSmall",as:"h2","aria-label":o.ag.get("ad-formats.dsa.modal.adBasedInfoExplanation"),children:o.ag.get("ad-formats.dsa.modal.adBasedInfoExplanation")}),(0,_.jsx)(K,{item:a,activeTargetingTypes:null==E?void 0:E.targetingTypes}),(0,_.jsx)(z,{item:a,activeTargetingTypes:null==E?void 0:E.targetingTypes})]}):(0,_.jsx)(n.x,{className:M,as:"h2","aria-label":o.ag.get("ad-formats.dsa.modal.targeting.unknown"),tabIndex:0,children:o.ag.get("ad-formats.dsa.modal.targeting.unknown")}),(null==E?void 0:E.showTailoredAdsSection)&&(0,_.jsx)(L,{item:a})]})}),(0,_.jsx)("button",{"aria-label":o.ag.get("close_button_action"),className:D,onClick:()=>{u((0,c.ni)())},children:(0,_.jsx)(d.k,{size:"medium",semanticColor:"textBase"})})]})}}}]);
//# sourceMappingURL=4610.458e7adb.js.map62' ,
'articleType' : 'free',
'authorName' : 'Ishita Mishra|Ziya Us Salam' ,
'publishDate' : '2024-01-31' ,
'publishTime' : '16:11' ,
'hoursSincePublished' : '6',
'contentCategory' : 'news','contentSubCategory' : 'national','featureType' : 'storyline Commentary' ,
'articleTags' : 'Breaking news|religion and belief|laws|Push notification|Varanasi|TH-Daily Hunt' // when available
} });

	</script><script>
	var dataLayer = window.dataLayer || [];
tp = window["tp"] || [];
tp.push(["init", function () {
if (tp.user.isUserValid()) {
dataLayer.push({
'data' : {
'email': tp.pianoId.getUser().email,
'uid': tp.pianoId.getUser().uid,
'platform': thgpiplatform()
} });
}
}]);
</script><link rel="preload" as="style" href="https://www.thehindu.com/theme/css/th-online/bootstrap.min.css?ver=1706695152" as="style"><link rel="stylesheet" type="text/css" href="https://www.thehindu.com/theme/css/th-online/bootstrap.min.css?ver=1706695152" /><link rel="preload" href="https://www.thehindu.com/theme/css/th-online.min.css?ver=1706695322" as="style"><link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" crossorigin="anonymous"><link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&display=swap" crossorigin="anonymous"><noscript><link  rel="stylesheet"href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"  crossorigin="anonymous"><link  rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&display=swap" crossorigin="anonymous"></noscript><link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Faustina:wght@300;400;500;600;700;800&display=swap" crossorigin="anonymous"><noscript><link rel="stylesheet"  href="https://fonts.googleapis.com/css2?family=Faustina:wght@300;400;500;600;700;800&display=swap" crossorigin="anonymous"></noscript><link rel="stylesheet" type="text/css" href="https://www.thehindu.com/theme/css/th-online.min.css?ver=1706695322" /><link rel="preload" href="https://www.thehindu.com/theme/js/require.min.js?ver=1706695080" as="script"><script src="https://www.thehindu.com/theme/js/require.min.js?ver=1706695080" data-cfasync="false"></script><script data-cfasync="false">
    require.config({
    // Local Directory
    baseUrl: "https://www.thehindu.com/theme/js",
    // Script Locations
    paths: {
    "jquery":"3.4.1/jquery.min",
    "slick": "th-online/slick.min",
    "jplayer": "th-online/jquery.jplayer.min",
    "jplayerlist": "th-online/jplayer.playlist.min",
    "marquee": "th-online/jquery.marquee.min",
    "bootstrap": "th-online/bootstrap.min",
    "bootstrap-datepicker": "th-online/bootstrap-datepicker.min",
    "iframeResizer": "iframeResizer.min",
    "iframecontent": "iframeResizer.contentWindow.min",
    "moment": "moment.min",
    "crypto": "crypto-js.min",
    "jquery-ui":"jquery-ui-1.13.2.min",
    "ua-parser": "ua-parser.min","count":"count.min","owlCarousel":"th-online/owl.carousel.min","custom":"https://www.thehindu.com/theme/js/th-online/custom.min.js?ver=1706695620",},
    shim: {	
    'slick': ['jquery'],
    'owlCarousel': ['jquery'],
    'jplayerlist': ['jquery','jplayer']
    },
    waitSeconds:0
    });
</script><script data-cfasync="false">
require(['jquery','bootstrap','custom']);
</script><script type="text/javascript">
(function(w,d,s,r,k,h,m){
    if(w.performance && w.performance.timing && w.performance.navigation) {
        w[r] = w[r] || function(){(w[r].q = w[r].q || []).push(arguments)};
        (w[r].q = w[r].q || []).push(['trackConsoleEvents',true]);
        (w[r].q = w[r].q || []).push(['addBreadCrumbs',"setTimeoutFunction"]);
        tp = window["tp"] || [];
        tp.push(["init", function () {
			if (tp.user.isUserValid()) {
          	  (w[r].q = w[r].q || []).push(['userId',tp.pianoId.getUser().email]);
			}
        }]);
        h=d.createElement('script');h.async=true;h.setAttribute('src',s+k);
        d.getElementsByTagName('head')[0].appendChild(h);
        (m = window.onerror),(window.onerror = function (b, c, d, f, g) {
        m && m(b, c, d, f, g),g || (g = new Error(b)),(w[r].q = w[r].q || []).push(["captureException",g]);})
    }
})(window,document,'//static.site24x7rum.in/beacon/site24x7rum-min.js?appKey=','s247r','b8eb5ce1271ee86c501613f5d0cb5745');
</script><script data-cfasync="false">
if(!(window.fetch&&window.Promise&&[].includes&&Object.assign&&window.Map)){
	document.write('<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch"></scr'+'ipt>');
}
</script><script type="text/javascript" data-cfasync="false">
!function(){const e=()=>{const e="__tcfapiLocator",t=[],n=window;let o,s,a=n;for(;a;){try{if(a.frames[e]){o=a;break}}catch(c){}if(a===n.top)break;a=a.parent}o||(!function t(){const o=n.document,s=!!n.frames[e];if(!s)if(o.body){const t=o.createElement("iframe");t.style.cssText="display:none",t.name=e,o.body.appendChild(t)}else setTimeout(t,5);return!s}(),n.__tcfapi=function(...e){if(!e.length)return t;"setGdprApplies"===e[0]?e.length>3&&2===parseInt(e[1],10)&&"boolean"==typeof e[3]&&(s=e[3],"function"==typeof e[2]&&e[2]("set",!0)):"ping"===e[0]?"function"==typeof e[2]&&e[2]({gdprApplies:s,cmpLoaded:!1,cmpStatus:"stub"}):t.push(e)},n.addEventListener("message",(function(e){const t="string"==typeof e.data;let n={};if(t)try{n=JSON.parse(e.data)}catch(c){}else n=e.data;const o="object"==typeof n&&null!==n?n.__tcfapiCall:null;o&&window.__tcfapi(o.command,o.version,(function(n,s){let a={__tcfapiReturn:{returnValue:n,success:s,callId:o.callId}};e&&e.source&&e.source.postMessage&&e.source.postMessage(t?JSON.stringify(a):a,"*")}),o.parameter)}),!1))};"undefined"!=typeof module?module.exports=e:e()}();
</script><script type="text/javascript" data-cfasync="false">
var thgCookieConsent = new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = "https://consent.truste.com/notice?domain=thehindugroup.com&c=teconsent&gtm=1&pcookie&js=nj&noticeType=bb&gtm=1&text=true";
    script.async = true;
    script.onload = function(){
    	 resolve(script);
    }
    script.onerror =function(){
   		 resolve(script);
   	}
    document.head.append(script);
  });
</script><script type="text/javascript" data-cfasync="false">
function appURL(){	
	return "https://www.thehindu.com/";
}
function pageType(){	return "art";
}
function pageTypeName(){return "Article";
	}
var DevIdf = {
	isMobile: false,
	isTablet: false,
	isDesktop: false,
	isMobileAndroid: false,
	isMobileIos: false,
	isLargeDesktop: false
};
var ClientdeviceType = {
	"xlarge": "(min-width: 1600px)",
	"large": "(min-width: 1024px) and (max-width: 1599px)",
	"small": "(max-width: 767px)",
	"medium": "(min-width: 768px) and (max-width: 1023px)"
};

var userAgent = navigator.userAgent || navigator.vendor || window.opera;    


function isDeviceEnabled(DeviceValue) {if (DeviceValue == "large" && (DevIdf.isDesktop || DevIdf.isLargeDesktop || DevIdf.isTablet)) {
		return true;
	}else if (DeviceValue == "medium" && DevIdf.isTablet) {
		return true;
	} else if (DeviceValue == "small" && DevIdf.isMobile) {
		return true;
	} else if (DeviceValue == "twa" && (DevIdf.isMobileAndroid || DevIdf.isMobileIos)) {
		return true;	
	}
	else if (DeviceValue == "all") {
		return true;	
	}
	return false;
}
for (var type in ClientdeviceType) {
	if (window.matchMedia(ClientdeviceType[type]).matches) {
		switch (type) {
			case "xlarge":
				DevIdf.isLargeDesktop = true;
				break;
			case "large":
				DevIdf.isDesktop = true;
				break;
			case "medium":
				DevIdf.isTablet = true;
				break;
			case "small":
				DevIdf.isMobile = true;
				if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
					DevIdf.isMobileIos = true;
				}else{
					DevIdf.isMobileAndroid = true;
				}
				break;
		}
		break;
	}
}
function loadScript(url) {
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.src = url;
		var x = document.getElementsByTagName('script')[0];
		x.appendChild(s);
}

function loadCSS(url) {
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = url;
		link.type = 'text/css';
		var el = document.getElementsByTagName('link')[0];
		el.parentNode.insertBefore(link, el);
} 
function getUrlParameter( name, url ) {
if (!url) url = location.href;
name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
var regexS = "[\\?&]"+name+"=([^&#]*)";
var regex = new RegExp(regexS,"i");
var results = regex.exec( url );
return results == null ? null : results[1];
}
function createCookie(name,value,days) { if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}
function eraseCookie(name) {
createCookie(name,"",-1);
}
function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
function deleteCookie(name) {
createCookiewithdomain(name,null,-1);
}
function createCookiewithdomain(name,value,days) {
if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; domain="+document.location.host.match(/\.[.\w]*/)+";path=/";
}
function getStorage(name){	if(typeof(Storage) !== "undefined" && 'localStorage' in window && window.localStorage !== null) {	if (localStorage.getItem(name)){	cookieObj = JSON.parse(localStorage.getItem(name));
if (cookieObj !== undefined && (cookieObj.e == null || cookieObj.e > new Date())){return cookieObj.v === undefined ? null : cookieObj.v ; }	else{localStorage.removeItem(name);}	}
return null;	} else {return readCookie(name);}	}
function setStorage(name,value,days){
if(typeof(Storage) !== "undefined" && 'localStorage' in window && window.localStorage !== null) {
var date = new Date();	localStorage.setItem(name,JSON.stringify({"v":value, "e":date.setTime(date.getTime()+(days*24*60*60*1000))}))
} else {createCookie(name,value,days);}	}
function eraseStorage(name){ if(typeof(Storage) !== "undefined" && 'localStorage' in window && window.localStorage !== null) {localStorage.removeItem(name);}
else{eraseCookie(name)}
}
var isNonSubcribed = true;function isNonSubcribedUser(){return isNonSubcribed;}
var myUserStatus = "anon";function UserCurrentStatus(){return myUserStatus;}var imageSizes = [80, 100, 115, 140, 155 ,170, 215, 230, 240, 300, 320, 355,385, 435, 460, 480,560, 615, 660, 730, 810, 960, 1080, 1140, 1200];function imglazyload(selector){
	var lazyImages = [];
   if(typeof selector !== 'undefined' && selector){
	lazyImages = [].slice.call(document.querySelectorAll(selector +" img.lazy"));
   }
   else{
	lazyImages = [].slice.call(document.querySelectorAll("img.lazy"))
   }

 if ("IntersectionObserver" in window) {
   let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
	 entries.forEach(function(entry) {
	   if (entry.isIntersecting) {
		 let lazyImage = entry.target
		 lazyImageloader(lazyImage);
		 lazyImageObserver.unobserve(lazyImage);
	   }
	 });
   });

   lazyImages.forEach(function(lazyImage) {
	 lazyImageObserver.observe(lazyImage);
   });
 } else {
	lazyImages.forEach(function(lazyImage) {
	 lazyImageloader(lazyImage);
	});
 }
	window.__thgimgloaded = true;
 }
function lazyImageloader(lazyImage){
	let variant = lazyImage.dataset.deviceVariant;
	let imagesrc =  lazyImage.dataset.srcTemplate;
	if(typeof imagesrc !="undefined" && imagesrc != ""){
	if(typeof variant !="undefined" && variant != ""){
	let position = 0;
	if(DevIdf.isDesktop){
	  position = 1;
	}
	else if(DevIdf.isTablet){
		 position = 2;
	}
	else if(DevIdf.isMobile){
		 position = 3;
	}
	variant = variant.split("~")[position];
	var selected = Math.max.apply(null, imageSizes);
	for (var i = 0; i < imageSizes.length; i++) {
	  if (lazyImage.offsetWidth <= imageSizes[i]) {
		selected = imageSizes[i];
		break;
	  }
	}
	 var alterRegEx = new RegExp("alternates\/[a-z0-9_]*", "ig");
	 imagesrc = imagesrc.replace(alterRegEx,"alternates/"+variant + "_" + selected);
	
	 lazyImage.src = imagesrc;
	}
	else{
	  lazyImage.src = imagesrc;
	}
	}
	lazyImage.classList.remove("lazy");
}var promiseResolve, promiseReject;userIdentify = new Promise(function(resolve, reject){promiseResolve = resolve;promiseReject = reject;});var thg={required:!0,functional:!1,advertising:!1,requiredCookie:function(){return thg.required},functionalCookie:function(){return thg.functional},advertisingCookie:function(){return thg.advertising}};thgCookieConsent.then(function(){var constentbehavior=readCookie("notice_behavior"),cookieconsent=readCookie("cmapi_cookie_privacy");null==cookieconsent&&null!=constentbehavior&&-1==constentbehavior.indexOf("eu")?(thg.functional=!0,thg.advertising=!0):null!==cookieconsent?(cookieconsent.indexOf("permit")>-1&&cookieconsent.indexOf("2")>-1&&(thg.functional=!0),cookieconsent.indexOf("permit")>-1&&cookieconsent.indexOf("3")>-1&&(thg.advertising=!0)):null==constentbehavior&&(thg.functional=!0,thg.advertising=!0);});
</script><script data-cfasync="false">
var _paq = window._paq || [];
var _thg_config = window["_thg_config"] || {};
window._thg_config.ufenpoint = "https://uf.thehindu.com/";
window._thg_config.ufsiteId= "th"
</script><script data-cfasync="false">
    document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    var setNptTechAdblockerCookie = function(adblocker) {
        var d = new Date();
        d.setTime(d.getTime() + 60 * 5 * 1000);
        document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
    };
    var script = document.createElement("script");
    script.setAttribute("async", true);
    script.setAttribute("src", "//www.npttech.com/advertising.js");
    script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
    document.getElementsByTagName("head")[0].appendChild(script);
</script><script type="text/javascript" data-cfasync="false" src="https://cdn.cxense.com/cx.cce.js" async></script><script data-cfasync="false" type="text/javascript"> 
var cX = window.cX = window.cX || { callQueue: [], options: { dataLayer: { cookie: { domain: '.www.thehindu.com' } }}}; 
cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || []; 
cX.callQueue.push(["setSiteId","1129576936026899562"]); 
cX.CCE.callQueue.push(["sendPageViewEvent", "thg", "6ccaf530673bc21409a43a45300ef01e63095338"]); 
</script><script data-cfasync="false">(function(src) { var a = document.createElement("script"); a.type = "text/javascript"; a.async = true; a.src = src; var b = document.getElementsByTagName("script")[0]; b.parentNode.insertBefore(a, b) })("https://experience.tinypass.com/xbuilder/experience/load?aid=DC3REpZYpu"); 
tp = window["tp"] || [];tp.push(["setContentCreated", "2024-01-31T10:41:02+0530"]); 
tp.push(["setContentAuthor", "Ishita Mishra & Ziya Us Salam"]);
tp.push(["setContentSection", "India"]);
tp.push(["setTags", ["Breaking news","religion and belief","laws","Push notification","Varanasi","TH-Daily Hunt"]]); 
tp.push(["setContentIsNative", false]); 
tp.push(["setZone", (DevIdf.isMobile === true ? 'MobileWeb' : 'Web')]);</script><script>
window.adfiller = window.adfiller || [];
window.googletag = window.googletag || {cmd: []};
window.PWT = window.PWT || {};
</script><script>
function loadGptScript(){
	var gads = document.createElement('script');
	var useSSL = 'https:' == document.location.protocol;
	gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(gads, node);
}function loadPWTScript(){
	window.PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
		loadGptScript();
	};
	(function() {
		var purl = window.location.href;
		var url = '//ads.pubmatic.com/AdServer/js/pwt/159088/2116';var profileVersionId = '';
		if(purl.indexOf('pwtv=')>0){
		var regexp = /pwtv=(.*?)(&|$)/g;
		var matches = regexp.exec(purl);
		if(matches.length >= 2 && matches[1].length > 0){
		profileVersionId = '/'+matches[1];
		}
		}
		var wtads = document.createElement('script');
		wtads.async = true;
		wtads.type = 'text/javascript';
		wtads.src = url+profileVersionId+'/pwt.js';
		var node = document.getElementsByTagName('script')[0];
		node.parentNode.insertBefore(wtads, node);
	})();
}function getSlotsViewPort(abovefold){
	var googletagslots = googletag.pubads().getSlots();
	var slots = [];
	googletagslots.forEach(function(slot) {
	if(abovefold && slot.getSlotId().toString(2).toLowerCase().match(/(TH_MWeb_AT_Top|TH_MWeb_HP_Top|TH_Desktop_HP_Billboard_Top|TH_Desktop_Topic_Billboard_Top|TH_MWeb_Topic_Top|TH_Desktop_Masthead_970x50|TH_MWeb_Masthead_320x50|TH_Mweb_Brandhub_Visit-Dubai_300x250|TH_Desktop_AT_Billboard_Top|TH_Desktop_Topic_RT)/i) === null){
	slots.push(slot);
	}else if(!abovefold && slot.getSlotId().toString(2).toLowerCase().match(/(TH_MWeb_AT_Top|TH_MWeb_HP_Top|TH_Desktop_HP_Billboard_Top|TH_Desktop_Topic_Billboard_Top|TH_MWeb_Topic_Top|TH_Desktop_Masthead_970x50|TH_MWeb_Masthead_320x50|TH_Mweb_Brandhub_Visit-Dubai_300x250|TH_Desktop_AT_Billboard_Top|TH_Desktop_Topic_RT)/i) != null){
	slots.push(slot);
	}
	});
	return slots;
}Promise.all([userIdentify, thgCookieConsent]).then(function() {
if(isNonSubcribedUser() && thg.advertisingCookie()){loadPWTScript();}
});  
</script><script>
googletag.cmd.push(function () {if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Interstitial', [1, 1], 'div-gpt-ad-1690551415981-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Interstitial', [1, 1], 'div-gpt-ad-1690530073969-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Masthead_970x50', [970, 50], 'div-gpt-ad-1674804175530-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Masthead_320x50', [320, 50], 'div-gpt-ad-1674803841262-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_AT_Sticky', [320, 50], 'articledivsticky').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_AT_Bottom', [[300, 250], [336, 280]], 'div-gpt-ad-1666088474834-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_AT_Top', [[336, 280], [300, 250]], 'div-gpt-ad-1666087964951-12').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_Mweb_Inarticle_1x1', [1, 1], 'mobileinlinead1').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_AT_Middle02', [[336, 280], [300, 250]], 'div-gpt-ad-1666088319758-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_AT_Billboard_Bottom', [[970, 90], [728, 90], [970, 250]], 'div-gpt-ad-1666172717509-12').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_AT_Mid04', [300, 250], 'dynamicadwidget').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_AT_Billboard', [[728, 90], [970, 90], [970, 250]], 'div-gpt-ad-1666172717509-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_AT_Billboard_Top', [[970, 250], [728, 90], [970, 90]], 'div-gpt-ad-1670328596883-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_AT_RT', [[300, 600], [300, 250]], 'articledivsub').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/Hindu_Desktop_Inarticle_1x1', [1, 1], 'desktopinlinead1').addService(googletag.pubads());
	 			
		}googletag.pubads().enableSingleRequest();
googletag.pubads().setTargeting('Section', ['national']);googletag.pubads().setTargeting('articleid', ['67796162']);googletag.pubads().setTargeting('keywords', ['who']);googletag.pubads().enableLazyLoad();googletag.pubads().disableInitialLoad();googletag.enableServices();
});googletag.cmd.push(function() {    
		googletag.pubads().refresh(getSlotsViewPort(false));
	});var isScrolled = false;
	window.addEventListener('scroll', function() {
		if (!isScrolled) {
			googletag.cmd.push(function () {
			googletag.pubads().refresh(getSlotsViewPort(true));
			});
		}
		isScrolled = true;
	},true);</script><script>
	window._taboola = window._taboola || [];
	function taboolainit(){
	Promise.all([userIdentify, thgCookieConsent]).then(function() {
	if(isNonSubcribedUser() && thg.advertisingCookie()){ _taboola.push({article:'auto', tracking:'utm_source=taboola'});
	_taboola.push({article :'auto'});
	!function (e, f, u, i) {
	if (!document.getElementById(i)){
	e.async = 1;
	e.src = u;
	e.id = i;
	f.parentNode.insertBefore(e, f);
	e.onload = function() {
	window['__thtaboola'] = true;
	}
	window['__thtaboola'] = true;
	}
	}(document.createElement('script'),
	document.getElementsByTagName('script')[0],
	'//cdn.taboola.com/libtrc/thehindu-hindunews/loader.js',
	'tb_loader_script');
	if(window.performance && typeof window.performance.mark == 'function')
	{window.performance.mark('tbl_ic');}
	}
	});
	}window.addEventListener('scroll', function() {
		if (window.__thtaboola == undefined) {
		taboolainit();
		}
		});
	</script><script>
var dataLayer = window.dataLayer || [];
</script><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W5VV9N');
</script><script>
thgCookieConsent.then(function() {
if(thg.functionalCookie()){
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-10158580-1', 'auto');}
});
</script><script type="text/javascript">thgCookieConsent.then(function() {if(thg.functionalCookie()){var userconsent = 1 ;var _comscore = _comscore || [];  _comscore.push({ c1: "2", c2: "11398210",cs_ucfr: userconsent});  (function() {    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;s.src=(document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";    el.parentNode.insertBefore(s, el);  })();}});</script><noscript><img src="https://sb.scorecardresearch.com/p?c1=2&c2=123456&cs_ucfr=1&cv=2.0&cj=1" /></noscript><style>.featured .content h3{
    font-weight: 500 !important;
    text-align: left !important;
    margin: 0 !important;
    margin-bottom: 0.5rem !important;
}
.elections a img {
    max-width: 100% !important;
}
.myaccount div#sectiondivicymi {
    display: none;
}

.sportstar-section div>section {
    margin: 0;
}
.article-section .article-picture .picture.lead-img-verticle {
    background: #f1f1f1;
}
.dfp-ad.removeadvt:after {
display:none;
}
section.black-bg.featured .author .content{
display:none;
}
.cue-live-event li:before {
    content: none !important;
}
ol.article-body.article-number-list li:before {
    content: none !important;
}
.timeline li a {
    display: block;
}
#entryList.timeline li a {
    display: inline;
}
 .btns .read-in-app {
 z-index: 9999999999;
  }
.articlebodycontent  #div-gpt-ad-1666088319758-0:after{
display:block;
}
.articlebodycontent #div-gpt-ad-1666088319758-0 {
min-height:250px
}

.art .article-section >.row.justify-content-end {
    justify-content: unset !important;
}
.articlebodycontent {
    max-width: 100%;
}
.artinrstl-ad .dfp-ad:after{
display: none !important;
}

@media screen and (max-width: 570px){
.gsiOverlay{ z-index: 9999 !important;}
#artmeterpvcr {
    bottom: 85px;
}
.subscribed #artmeterpvcr {
    bottom: 0;
}
.myaccountlogincontainer {
    width: 100% !important;
}
#articledivtrendM {
    min-height: auto !important;
}
.small-banner img {
    content: url(https://www.thehindu.com/theme/images/th-online/election-23.png) !important;
}
.article-section p b,
.article-section p strong,
.article-section p i {
  font-family: inherit;
}
.article-section .article-ad {
    clear: both;
}
.articlepaywall div[id^="content-body"] #articlediv4{
display:none !important;
}
.box-line-title h3, .box-line-title h1, .box-line-title h2
{
    max-width: 90%;
}
@media screen and (max-width: 767px) {
  .oTO-Text-points {
    display: none;
  }
}

</style></head><body class="  art"><meta itemprop="headline" content="Varanasi court permits Hindu worship inside sealed basement of Gyanvapi mosque; masjid committee to appeal" /><meta itemprop="description" content="Varanasi court grants Hindus rights to offer prayers in Gyanvapi mosque cellar, allowing priest&#039;s kin to worship deities." /><meta itemprop="datePublished" content="2024-01-31T16:11:02+05:30" /><meta itemprop="dateModified" content="2024-01-31T23:06:45+05:30" /><meta itemprop="url" content="https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece" /><meta itemprop="keywords" content="varanasi court,Vyas Ka Tekhana,Gyanvapi mosque,hindu worship,Vishnu Shankar Jain,hindus can worship in gyanvapi mosque,gyanvapi mosque hindus worship,Gyanvapi news,Gyanvapi case,Gyanvapi masjid" /><meta itemprop="articleSection" content="India" /><span itemscope="itemscope" itemprop="author" itemtype="https://schema.org/Person" /><meta content="Ishita Mishra" itemprop="name" /><meta itemprop="url" content="https://www.thehindu.com/profile/author/Ishita-Mishra-4635/" /></span><span itemscope="itemscope" itemprop="author" itemtype="https://schema.org/Person" /><meta content=" Ziya Us Salam" itemprop="name" /><meta itemprop="url" content="https://www.thehindu.com/profile/author/Ziya-Us-Salam-606/" /></span><span itemtype="https://schema.org/ImageObject" itemscope="itemscope" itemprop="image" /><meta itemprop="url" content="https://th-i.thgim.com/public/todays-paper/lukgr9/article67784915.ece/alternates/LANDSCAPE_1200/INSIDE1_INTLP1_%2BG21CB33V6.3.jpg.jpg" /><meta content="1200" itemprop="width" /><meta content="675" itemprop="height" /></span><span itemtype="https://schema.org/Organization" itemscope="itemscope" itemprop="publisher" /><span itemtype="https://schema.org/ImageObject" itemscope="itemscope" itemprop="logo" /><meta content="https://www.thehindu.com/theme/images/th-online/thfooterlogo.png" itemprop="url" /><meta content="600" itemprop="width" /><meta content="60" itemprop="height" /></span><meta content="The Hindu" itemprop="name" /><meta content="https://www.thehindu.com/" itemprop="url" /></span><span itemprop="mainEntityOfPage" itemscope="itemscope" itemtype="https://schema.org/WebPage" /><meta content="https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece" itemprop="url" /></span><meta itemprop="isAccessibleForFree" content="false" /><div itemprop="isPartOf" itemscope itemtype="http://schema.org/CreativeWork http://schema.org/Product"><meta itemprop="name" content="The Hindu" /><meta itemprop="productID" content="thehindu.com:showcase" /></div><span itemscope itemtype="https://schema.org/Organization"><meta itemprop="name" content="The Hindu" /><meta itemprop="url" content="https://www.thehindu.com/" /><meta itemprop="logo" content="https://www.thehindu.com/theme/images/th-online/thfooterlogo.png" /><span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress"><meta itemprop="streetAddress" content="Kasturi Building, Anna Salai, 859-860, Mount Road" /><meta itemprop="addressLocality" content="Chennai" /><meta itemprop="addressRegion" content="Tamil Nadu" /><meta itemprop="postalCode" content="600002" /><meta itemprop="Telephone" content="+91-44-2857 6300" /></span><meta itemprop="sameAs" content="https://www.facebook.com/thehindu" /><meta itemprop="sameAs" content="https://twitter.com/The_Hindu" /><meta itemprop="sameAs" content="https://instagram.com/the_hindu/?ref=badge" /><meta itemprop="sameAs" content="https://www.youtube.com/user/The1878Hindu" /></span><span itemscope itemtype="https://schema.org/NewsMediaOrganization"><meta itemprop="name" content="The Hindu" /><meta itemprop="url" content="https://www.thehindu.com/" /><meta itemprop="logo" content="https://www.thehindu.com/theme/images/th-online/thfooterlogo.png" /><span itemtype="https://schema.org/ImageObject" itemscope="itemscope" itemprop="logo" /><meta content="https://www.thehindu.com/theme/images/th-online/thfooterlogo.png" itemprop="url" /><meta content="278" itemprop="width" /><meta content="49" itemprop="height" /></span><meta itemprop="sameAs" content="https://www.facebook.com/thehindu" /><meta itemprop="sameAs" content="https://twitter.com/The_Hindu" /><meta itemprop="sameAs" content="https://instagram.com/the_hindu/?ref=badge" /><meta itemprop="sameAs" content="https://www.youtube.com/user/The1878Hindu" /></span><noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-W5VV9N" height="0" width="0"
			style="display:none;visibility:hidden"></iframe></noscript><script data-cfasync="false">
	if(readCookie("_pc_thgpremiumexp") == "true"){
		var element = document.getElementsByTagName("body")
		element[0].classList.add('subscribed');
	}
</script><header class="header logout  on-scroll article-menu"><div class="header-menu desktop"><div class="navmenu-container main-menu"><nav id="navbar_top " class="navbar navbar-expand-lg navbar-light navbar-inverse"><div class>
<ul class="navbar-nav me-auto mb-lg-0" id="navbar_top_innermenu">
<li class="nav-item scroll-logo">
<a class="nav-link" aria-current="page" href="https://www.thehindu.com/">
<img src="https://www.thehindu.com/theme/images/th-online/h-circle-black-white-new.svg" alt="The Hindu Logo" width="59" height="59">
</a>
</li>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/news/national/">
India
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/news/international/">
World
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/opinion/">
Opinion
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/sport/">
Sports
</a>
<li class="nav-item ">
<a class="nav-link " href="https://epaper.thehindu.com/?utm_source=Hindu&amp;utm_medium=Menu&amp;utm_campaign=Header" target="_blank">
e-Paper
</a>
<li class="nav-item more-link">
<a class="nav-link more-search-btn">
<span class="text">Menu</span>
<img class="more-search" src="https://www.thehindu.com/theme/images/th-online/more-search.svg" /></a>
</li>
</ul>
<div class="scroll-outer">
<ol class="breadcrumb">
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/business/budget/" class="secondary_menu_topic_1">
Budget 2024
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/data/" class="secondary_menu_topic_2">
Data
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/sci-tech/health/" class="secondary_menu_topic_3">
Health
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/opinion/editorial/" class="secondary_menu_topic_4">
Editorial
</a>
</li>
<li class="breadcrumb-item nonsubscriberonly sponsored housing">
<a href="https://housing.com/?utm_source=Hindudirect&amp;utm_medium=Affiliate&amp;utm_campaign=Hindudirect_Traffic" class="secondary_menu_topic_5" target="_blank">
<img src="https://www.thehindu.com/theme/images/th-online/housing.svg" alt="housing.com" class="nonsubscriberonly sponsored housing">
</a>
</li>
<li class="breadcrumb-item search-link">
<a href="https://www.thehindu.com/search/">SEARCH
<img class="treanding" src="https://www.thehindu.com/theme/images/th-online/search-gray-icon.svg" alt="Icon" title="Icon" /></a></li>
</ol>
</div>
<div class="btns menuuserdetect"><a href="/subscription/freetrial/?utm_source=TheHindu&utm_medium=article&utm_campaign=FTbutton"><button type="button" class="btn btn-free-trial">FREE TRIAL<span class="slider"></span></button></a><a href="/subscription/gift/?tpcc=giftasubs" class="btn btn-gift-subscription"><span>GIFT a Subscription</span><img src="https://www.thehindu.com/theme/images/th-online/myaccount-gift-black-icon.svg" alt="Gift" title="Icon" /></a><a href="https://www.thehindu.com/subscription/"><button type="button" class="btn btn-subscribe">
Subscribe
</button></a><button type="button" class="btn btn-signup thgsignin">LOGIN</button><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account">
ACCOUNT
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account with-premium">
PREMIUM
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a></div><div class="menu-btn"><img class="menu-hamber" src="https://www.thehindu.com/theme/images/th-online/menu-hamber-icon.svg" alt="HamberMenu"></div><script>
userIdentify.then(function() {
if(!isNonSubcribedUser()) {
	document.querySelector(".btn-title").innerText ="Make most of your subscription";
}});
</script></div></nav></div></div><div class="container mobile"><div class="top-bar"><button type="button" class="btn read-in-app readinapp-mob"><a rel="nofollow"><span style="display:none">
Open in The Hindu App<img src="https://www.thehindu.com/theme/images/th-online/open-app-arrow.svg" alt="Open Arrow" title /></span></a></button><div class="top-bar-btns"><div class="menuuserdetect"><a href="/subscription/freetrial/?utm_source=TheHindu&utm_medium=&utm_campaign=FTbutton"><button type="button" class="btn btn-free-trial">FREE TRIAL</button></a><button type="button" class="btn btn-signup thgsignin">LOGIN</button><a href="/subscription/gift/?tpcc=giftasubs" class="btn btn-gift-subscription"><span>GIFT a Subscription</span><img src="https://www.thehindu.com/theme/images/th-online/myaccount-gift-black-icon.svg" alt="Gift" title="Icon" /></a><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account">
ACCOUNT
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account with-premium">
PREMIUM
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a></div></div></div><div class="header-logo-cont"><a href="https://www.thehindu.com/"><img src="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg" class="img-fluid mobile-logo" alt="Return to frontpage"></a></div><div class="btns menuuserdetect"><a href="https://www.thehindu.com/subscription/"><button type="button" class="btn btn-subscribe">Subscribe</button></a><button type="button" class="btn share-article"><img alt="Share Article" src="https://www.thehindu.com/theme/images/th-online/share-page-icon.svg" /></button></div><div class="menu-btn"><img class="menu-hamber" src="https://www.thehindu.com/theme/images/th-online/menu-hamber-icon.svg" alt="HamberMenu"></div> <div class="scroll-outer">
<ol class="breadcrumb">
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/business/budget/" class="secondary_menu_topic_1">
Budget 2024
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/data/" class="secondary_menu_topic_2">
Data
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/sci-tech/health/" class="secondary_menu_topic_3">
Health
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/opinion/editorial/" class="secondary_menu_topic_4">
Editorial
</a>
</li>
<li class="breadcrumb-item nonsubscriberonly sponsored housing">
<a href="https://housing.com/?utm_source=Hindudirect&amp;utm_medium=Affiliate&amp;utm_campaign=Hindudirect_Traffic" class="secondary_menu_topic_5" target="_blank">
<img src="https://www.thehindu.com/theme/images/th-online/housing.svg" alt="housing.com" class="nonsubscriberonly sponsored housing">
</a>
</li>
<li class="breadcrumb-item search-link">
<a href="https://www.thehindu.com/search/">SEARCH
<img class="treanding" src="https://www.thehindu.com/theme/images/th-online/search-gray-icon.svg" alt="Icon" title="Icon" /></a></li>
</ol>
</div>
</div><div class="dropdown" role><div class="row navmenu-container xs-reverse-dropdown"><div class="col-xl-8 col-lg-8 col-md-12"><div class="mani-menu"> <ul class="navbar-nav me-auto mb-lg-0" id="navbar_top_innermenu">
<li class="nav-item scroll-logo">
<a class="nav-link" aria-current="page" href="https://www.thehindu.com/">
<img class="lazy" data-src-template="https://www.thehindu.com/theme/images/th-online/h-circle-black-white-new.svg" alt="The Hindu Logo" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png">
</a>
</li>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/news/national/">
India
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/news/international/">
World
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/opinion/">
Opinion
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/sport/">
Sports
</a>
<li class="nav-item ">
<a class="nav-link " href="https://epaper.thehindu.com/?utm_source=Hindu&amp;utm_medium=Menu&amp;utm_campaign=Header" target="_blank">
e-Paper
</a>
</ul>
</div> <div class="scroll-outer">
<ol class="breadcrumb">
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/business/budget/" class="secondary_menu_topic_1">
Budget 2024
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/data/" class="secondary_menu_topic_2">
Data
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/sci-tech/health/" class="secondary_menu_topic_3">
Health
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/opinion/editorial/" class="secondary_menu_topic_4">
Editorial
</a>
</li>
<li class="breadcrumb-item nonsubscriberonly sponsored housing">
<a href="https://housing.com/?utm_source=Hindudirect&amp;utm_medium=Affiliate&amp;utm_campaign=Hindudirect_Traffic" class="secondary_menu_topic_5" target="_blank">
<img src="https://www.thehindu.com/theme/images/th-online/housing.svg" alt="housing.com" class="nonsubscriberonly sponsored housing">
</a>
</li>
<li class="breadcrumb-item search-link">
<a href="https://www.thehindu.com/search/">SEARCH
<img class="treanding" src="https://www.thehindu.com/theme/images/th-online/search-gray-icon.svg" alt="Icon" title="Icon" /></a></li>
</ol>
</div>
<div class="fixed-menu">
<ul class="menu-list">
<li class>
<a href="https://www.thehindu.com/news/">
News
</a>
</li>
<li class>
<a href="https://www.thehindu.com/business/">
Business
</a>
</li>
<li class>
<a href="https://www.thehindu.com/entertainment/">
Entertainment
</a>
</li>
<li class>
<a href="https://www.thehindu.com/life-and-style/">
Life &amp; Style
</a>
</li>
<li class>
<a href="https://www.thehindu.com/society/">
Society
</a>
</li>
<li class>
<a href="https://www.thehindu.com/sci-tech/technology/">
Technology
</a>
</li>
<li class>
<a href="https://www.thehindu.com/videos/">
Videos
</a>
</li>
<li class>
<a href="https://www.thehindu.com/podcast/">
Podcast
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/">
Cities
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/states/">
States
</a>
</li>
<li class>
<a href="https://www.thehindu.com/sci-tech/science/">
Science
</a>
</li>
<li>
<a class="see-all">
<span class="text">Show More</span>
<span class="arrow"><img class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/show-more-arrow.svg"></span>
</a>
</li>
</ul>
<ul class="menu-list more">
<li class>
<a href="https://www.thehindu.com/news/cities/chennai/">
Chennai
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/Delhi/">
Delhi
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/bangalore/">
Bengaluru
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/Hyderabad/">
Hyderabad
</a>
</li>
<li class>
<a href="https://www.thehindu.com/entertainment/movies/">
Movies
</a>
</li>
<li class>
<a href="https://www.thehindu.com/food/">
Food
</a>
</li>
<li class>
<a href="https://www.thehindu.com/children/">
Children
</a>
</li>
<li class>
<a href="https://www.thehindu.com/data/">
Data
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/Kochi/">
Kochi
</a>
</li>
<li class>
<a href="https://www.thehindu.com/books/">
Books
</a>
</li>
<li class="nonsubscriberonly sponsored">
<a href="https://www.thehindu.com/brandhub/">
Brandhub
</a>
</li>
<li class="nonsubscriberonly sponsored">
<a href="https://www.thehindu.com/coupons/" target="_blank">
Coupons
</a>
</li>
<li class="subscriberonly">
<a href="https://www.thehindu.com/education/">
Education
</a>
</li>
</ul>
</div>
</div><div class="col-xl-4 col-lg-4 col-md-12"><div class="dropdown-logo"><a href="https://www.thehindu.com/" class="logo"><img class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg" alt="Return to frontpage"></a></div><div class="btns menuuserdetect"><p class="btn-title">To enjoy additional benefits</p><a href="/subscription/freetrial/?utm_source=TheHindu&utm_medium=article&utm_campaign=FTbutton"><button type="button" class="btn btn-free-trial">FREE TRIAL<span class="slider"></span></button></a><a href="/subscription/gift/?tpcc=giftasubs" class="btn btn-gift-subscription"><span>GIFT a Subscription</span><img src="https://www.thehindu.com/theme/images/th-online/myaccount-gift-black-icon.svg" alt="Gift" title="Icon" /></a><a href="https://www.thehindu.com/subscription/"><button type="button" class="btn btn-subscribe">
Subscribe
</button></a><button type="button" class="btn btn-signup thgsignin">LOGIN</button><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account">
ACCOUNT
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account with-premium">
PREMIUM
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a></div><script>
userIdentify.then(function() {
if(!isNonSubcribedUser()) {
	document.querySelector(".btn-title").innerText ="Make most of your subscription";
}});
</script><div class="menu-todays-paper hide-mobile"></div></div></div><div class="row align-items-end navmenu-container pb-2 pt-2"><div class="menu-todays-paper hide-system"></div><div class="col-md-12"><div class="header-link"><a class="showcase" href="https://www.thehindu.com/showcase/">Showcase<span class="slider"></span></a><a class="newsletter" href="https://www.thehindu.com/newsletter-subscription/?utm_source=site_menu&utm_medium=website&utm_campaign=newsletter_signup">Subscribe to Newsletters<span class="slider"></span></a><a class="paper" href="https://crossword.thehindu.com/?utm_source=thehindu&utm_medium=mainmenu">Crossword+<span class="slider"></span></a></div><p class="connect-us">CONNECT WITH US</p><ul class="social-icons"><li><a href="https://whatsapp.com/channel/0029VaAvwQJ90x34WZ6FDg36" target="_blank" rel="nofollow" title="WhatsApp"><img alt="Whatsapp" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/whatsapp-header-icon.svg"></a></li><li><a href="https://twitter.com/The_Hindu" target="_blank" rel="nofollow" title="Twitter"><img alt="Twitter" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/twitter-x.svg"></a></li><li><a href="https://www.facebook.com/thehindu" target="_blank" rel="nofollow" title="Facebook"><img alt="Facebook" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/fb-icon-new.svg"></a></li><li><a href="https://www.instagram.com/the_hindu/?ref=badge" target="_blank" rel="nofollow" title="Instagram"><img alt="Instagram" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/insta-icon-new.svg"></a></li><li><a href="https://www.linkedin.com/school/the-hindu/" target="_blank" rel="nofollow" title="Linkedin"><img alt="Linkedin" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/in-icon-new.svg"></a></li><li><a href="https://www.youtube.com/user/The1878Hindu" target="_blank" rel="nofollow" title="Youtube"><img alt="Youtube" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/youtube-icon-new.svg"></a></li><li><a href="https://open.spotify.com/show/5yESTCj0iikA81EP3uXkQC" target="_blank" rel="nofollow" title="Spotify"><img alt="Spotify" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/spotify-icon.svg"></a></li><li><a href="https://t.me/THnewsupdates" target="_blank" rel="nofollow" title="Telegram"><img alt="Telegram" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/telegram-icon.svg"></a></li></ul></div></div></div></header><div class="header-end"></div><div id="artmeterpvcr"></div><script>
	tp = window["tp"] || [];
	tp.push(['init', function () {
		tp.pianoId.init({
		loggedIn: function (data) {
		thgloggedIn(data)
		},
		loggedOut: function () {
		location.reload();
		}
		});
	}
	]);
	function thgloggedIn(data) {
		if(document.getElementsByTagName("header").length > 0) {
			document.getElementsByTagName("header")[0].classList.remove("logout");
			document.getElementsByTagName("header")[0].classList.add("login");
		}
	}
	function thgLogout() {
	typeof __thg_event != "undefined" ?  __thg_event.triggerLogOut(tp.pianoId.getUser()): null;
	   tp.push(["init", function () {
	        tp = window.tp || [];
	        tp.pianoId.logout()
	        location.reload();
	   }]);
    }
userIdentify.then(function() {
	var list = document.querySelectorAll(".menuuserdetect");
		for (var i = 0; i < list.length; ++i) {
			list[i].style.display = "block" ;
		}
		if(isNonSubcribedUser()){
			var housing = document.querySelectorAll(".housing-img");
			for (var j = 0; j < housing.length; ++j) {
				housing[j].style.display = "inline-block" ;
			}
		}
		
});
</script><div id="subscriber-top-billboard"></div><section class="mb-0 mt-0"><div class="container"><div class="d-none d-sm-block d-lg-block d-xl-block"><div id="div-gpt-ad-1674804175530-0" class="dfp-ad mastheAdTop " style="min-width: 970px; min-height: 50px;margin-bottom:0px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1674804175530-0'); });
    }});
</script></div></div><div class="d-block d-sm-none "><div id="div-gpt-ad-1674803841262-0" class="dfp-ad mastheAdTop " style="min-width: 320px; min-height: 50px; margin-bottom:0px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1674803841262-0'); });
    }});
</script></div></div><div class="d-none d-sm-block d-lg-block d-xl-block"></div><div class="d-block d-sm-none "></div><div class="d-none d-sm-block d-lg-block d-xl-block"><div id="div-gpt-ad-1670328596883-0" class="dfp-ad flexdfpad " style="min-height: 280px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1670328596883-0'); });
    }});
</script></div></div><div class="d-block d-sm-none "><div id="div-gpt-ad-1666087964951-12" class="dfp-ad flexdfpad " style="min-height: 280px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1666087964951-12'); });
    }});
</script></div></div></div></section><div class="flooting-ad"><div id="articledivsticky" class="dfp-ad  " style="min-width: 320px; min-height: 50px;margin-bottom: 15px;margin-top: 0;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('articledivsticky'); });
    }});
</script></div></div><script type="text/javascript" data-cfasync="false">
	require(['jquery'], function($) {fetch(`https://www.thehindu.com/getapplink?ref=${encodeURIComponent("https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece")}`).then((response) => {
				if(response.ok) {
					return response.json();
				} 
			}).then((res) => {
				if(typeof res.shortLink != 'undefined'){
					$(".read-in-app a").attr("href", res.shortLink)
					$(".read-in-app a > span").show();
					var userAgent = navigator.userAgent || navigator.vendor || window.opera;    
					if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
					$(".read-in-app-floating-btn a > span").hide();
					}else{
					$(".read-in-app-floating-btn a").attr("href", res.shortLink)
					$(".read-in-app-floating-btn a > span").show();
					}
				}			
			});
	});
	function addnewclass(){
		require(['jquery'], function($) {	
			setTimeout(function(){
				$(".read-in-app").addClass("nohover")
				$(".read-in-app-floating-btn").addClass("nohover")
			}, 1000);
			
		});
	}
</script><script>
fetch("https://www.thehindu.com/fragment/todays-paper-img").then(function(response) {
	if(response.ok && (response.status >= 200 &&  response.status < 400)) {          
		return response.text();
	}
}).then(function(respone) {
	var tpimage = document.querySelectorAll(".menu-todays-paper")
	for (var j = 0; j < tpimage.length; ++j) {
		tpimage[j].innerHTML = respone;
	}
}).catch(function(error) {
});
		
</script><link rel="stylesheet" type="text/css" href="https://www.thehindu.com/theme/css/THRX/article.min.css?ver=1706695489" /><section class="mt-4"><div class="container article-section "><div class="row"><nav aria-label="breadcrumb"><ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList"><li class="breadcrumb-item " itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="https://www.thehindu.com/" itemtype="https://schema.org/Thing" itemprop="item">
Home
</a><meta itemprop="name" content="Home"><meta itemprop="position" content="1"></li><li class="breadcrumb-item " itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="https://www.thehindu.com/news/" itemtype="https://schema.org/Thing" itemprop="item">
News
</a><meta itemprop="name" content="News"><meta itemprop="position" content="2"></li><li class="breadcrumb-item active" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="https://www.thehindu.com/news/national/" itemtype="https://schema.org/Thing" itemprop="item">
India
</a><meta itemprop="name" content="India"><meta itemprop="position" content="3"></li></ol></nav><div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 storyline" data-id="67796162" data-url="https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece" data-title="Varanasi court permits Hindu worship inside sealed basement of Gyanvapi mosque; masjid committee to appeal"><div class="d-none d-sm-block d-lg-block d-xl-block artinrstl-ad"><div id="div-gpt-ad-1690551415981-0" class="dfp-ad  " style><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1690551415981-0'); });
    }});
</script></div></div><div class="d-block d-sm-none artinrstl-ad"><div id="div-gpt-ad-1690530073969-0" class="dfp-ad  " style><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1690530073969-0'); });
    }});
</script></div></div><h1 itemprop="name" class="title">
Varanasi court permits Hindu worship inside sealed basement of Gyanvapi mosque; masjid committee to appeal
</h1><h3 class="sub-title">Judge directs district administration to make arrangement for puja within seven days; AIMPLB says verdict is “unacceptable”, draws parallel to opening of Babri Masjid locks in 1986</h3><p class="publish-time"> January 31, 2024 04:11 pm | Updated 11:06 pm IST - New Delhi </p><div class="author"><div class="author-name"><a href="https://www.thehindu.com/profile/author/Ishita-Mishra-4635/" class="person-name lnk">Ishita Mishra,</a><a href="https://www.thehindu.com/profile/author/Ziya-Us-Salam-606/" class="person-name lnk lnk">Ziya Us Salam</a></div></div><div class="comments-shares share-page" data-artid="67796162" data-title="Varanasi court permits Hindu worship inside sealed basement of Gyanvapi mosque; masjid committee to appeal" data-url="https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece"><p class="comments"><span class="coral-count" data-coral-url="https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece" data-coral-id="67796162" data-coral-notext="true"></span>
COMMents
</p><p class="share share-text"> SHARE
</p><ul class="share-list" style="display: none;"><li class="copy-link" onclick="copytext('https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece');">
Copy link
</li><li class="email"><a href="mailto:?subject=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal&amp;amp;body=Check%20out%20this%20link%20https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece" target="_self">
Email
</a></li><li class="facebook" onclick="openShareLink('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;t=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
Facebook
</li><li class="twitter" onclick="openShareLink('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;text=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
Twitter
</li><li class="telegram" onclick="openShareLink('https://t.me/share/url?url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;text=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
Telegram
</li><li class="in" onclick="openShareLink('https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;title=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
LinkedIn
</li><li class="whatsapp" onclick="openShareLink('https://api.whatsapp.com//send?text=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal%20-%20https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece')">
WhatsApp
</li><li class="reddit" onclick="openShareLink('https://reddit.com/submit?url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;title=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
Reddit
</li></ul><p class="read-later" data-articleId="67796162" style="display:none">
READ LATER
</p><div class="delete-tool-tip" style="display: none;"><a class="delete bookmarkdelete">
Remove
</a><a class="cancel" href="https://www.thehindu.com/myaccount/?tab=bookmarks">
SEE ALL
</a></div></div><div class="article-picture top-pic "><div class="picture verticle"><picture><!--[if IE 9]><video style="display: none;"><![endif]--><source media="(min-width: 1600px)" sizes="960px" srcset="https://th-i.thgim.com/public/todays-paper/lukgr9/article67784915.ece/alternates/LANDSCAPE_1200/INSIDE1_INTLP1_%2BG21CB33V6.3.jpg.jpg" /><source media="(min-width: 768px) and (max-width: 1599px)" sizes="640px" srcset="https://th-i.thgim.com/public/todays-paper/lukgr9/article67784915.ece/alternates/LANDSCAPE_1200/INSIDE1_INTLP1_%2BG21CB33V6.3.jpg.jpg" /><source media="(min-width: 321px) and (max-width: 767px)" sizes="400px" srcset="https://th-i.thgim.com/public/todays-paper/lukgr9/article67784915.ece/alternates/LANDSCAPE_660/INSIDE1_INTLP1_%2BG21CB33V6.3.jpg.jpg" /><source media="(max-width: 320px)" sizes="320px" srcset="https://th-i.thgim.com/public/todays-paper/lukgr9/article67784915.ece/alternates/LANDSCAPE_320/INSIDE1_INTLP1_%2BG21CB33V6.3.jpg.jpg" /><!--[if IE 9]></video><![endif]--><img src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" alt="The Gyanvapi Mosque as seen from the Kashi Vishwanath Temple, in Varanasi. File" title="The Gyanvapi Mosque as seen from the Kashi Vishwanath Temple, in Varanasi. File" data-original="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" class="lead-img" /></picture></div><p class="caption">
The Gyanvapi Mosque as seen from the Kashi Vishwanath Temple, in Varanasi. File
| Photo Credit: PTI
</p></div><div id="content-body-67796162" class="articlebodycontent col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12" itemprop="articleBody"><p></p><p>The Varanasi District Court on Wednesday allowed Hindu prayers to be offered inside the <i>Vyas Ka Tekhana</i> (sealed basement area) of the Gyanvapi mosque complex. The court directed the district administration to make arrangements to start the <i>puja</i> within seven days.  </p><p>The Anjuman Intezamia Committee of Gyanvapi Masjid will challenge the order in the Allahabad High Court, according to the committee’s counsel Merajuddin Siddiqui. The All India Muslim Personal Law Board (AIMPLB), which is advising the committee, called the district court’s decision “totally unacceptable”, drawing parallels to the opening of the locks at the Babri Masjid in 1986. “It seems after establishment of Ram Mandir at the site of the Babri Masjid, many other mosques are being targeted, no matter how old they might be,” AIMPLB spokesman S.Q.R. Ilyas told<i> The Hindu</i>.</p><p>According to the petitioner, Hindu priests appointed by the Vyas family had performed daily rituals in the temple at this spot within the complex before 1993, till it was stopped on the orders of the State government. However, an Anjuman Intezamia committee member, who did not wish to be named, contested the claim. “There has never been any puja conducted there. It is a baseless contention,” he said.</p><h4 class="sub_head">Puja arrangements in seven days</h4><p>The order permitting prayers to resume came on the last working day of district judge Ajay Krishna Vishwesha, who has been hearing multiple pleas related to worship rights in the Gyanvapi mosque. In this particular case, a September 2023 application filed by Shailendra Kumar Pathak, priest of the Acharya Ved Vyas Peeth temple, had sought worship of the visible and invisible deities in the basement of the mosque. </p><div class="position-relative"><div class="also-read"><a class="element" href="https://www.thehindu.com/news/national/watch-asi-report-on-gyanvapi-what-are-the-political-and-legal-implications/article67785792.ece"><div class="label">
ALSO READ
</div><div class="picture"><img src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://th-i.thgim.com/public/incoming/rr5a4v/article67785787.ece/alternates/SQUARE_80/Nistula%20Thumb.jpg" data-original="https://th-i.thgim.com/public/incoming/rr5a4v/article67785787.ece/alternates/SQUARE_80/Nistula%20Thumb.jpg" alt data-device-variant="LANDSCAPE~LANDSCAPE~LANDSCAPE~SQUARE" class="media-object lazy adaptive placeholder lazy" width="100%" height="100%" /></div><div class="title">
Watch | ASI report on Gyanvapi | What are the political and legal implications?
</div></a></div></div><p>“District Magistrate, Varanasi is directed to get puja, raga-bhog performed of idols located in the southern cellar of Gyanvapi Mosque. This would be done through a priest nominated by Kashi Vishwanath Trust Board and plaintiff. Make proper arrangements of iron fencing etc. in 7 days for the same,” reads the court order, of which a copy is available with <i>The Hindu. </i>On January 24, this court had ordered the Varanasi district administration to take over the possession of the southern cellar within the Gyanvapi mosque complex.</p><p>The next date of hearing in the matter is February 8, when the defendants, including the Anjuman Intejamia Masajid Committee that manages the Gyanvapi mosque, can file their objections.</p><p>The AIMPLB said that the mosque committee was approaching the High Court with its appeal. “The case is likely to be listed tomorrow. The Muslim side was not given the chance to present its viewpoint by the district court. The judge gave the verdict on his last day in service,” Mr. Ilyas said.</p><h4 class="sub_head">VHP welcomes order</h4><p>Reacting to the court’s order allowing Hindus to worship in the basement of the Gyanvapi mosque, the Vishwa Hindu Parishad’s international working president Alok Kumar said that the judgement was significant and has brought happiness for the Hindu community. </p><p>“In the basement of the Gyanvapi structure on the southern side is a Temple and in this Temple the regular Puja Archna of the Deities was going on till the year 1993. In 1993, the administration had, in an arbitrary action, barricaded the area, prohibited the Hindus from going to the Temple and had stopped the Puja Archna,” he said in a statement. Mr. Kumar also expressed his hope that this order would be a precursor to an expeditious decision on the main suit as well. </p><h4 class="sub_head">‘History is being repeated’</h4><p>The AIMPLB, however, is drawing parallels between the decision to permit <i>puja</i> in the Gyanvapi mosque basement and the opening of the locks of the Babri Masjid in 1986. </p><p>“They are moving in the same direction. There is reason to draw parallels and we fear history is being repeated. Here, in Gyanvapi, five Hindu women sought right to worship a deity here. Then claims were made about a <i>shivling</i> in the <i>wuzukhana</i>. Then the <i>wuzukhana</i> was sealed. Following that, the Archaeological Survey of India was asked to conduct a survey of the mosque. Soon its report was leaked to press after the court gave a copy to the two parties. Now, permission for <i>puja</i> has been granted. Nobody bothered to find out if this case could even be listed after the Places of Worship Act came into force in 1991,” said Mr. Ilyas. </p><h4 class="sub_head">Notice on ASI survey</h4><p>In another important order pertaining to the Gyanvapi mosque, the Allahabad High Court has issued a notice to the mosque committee on a revision application filed to challenge the Varanasi district judge’s order refusing to direct the Archeological Survey of India (ASI) to conduct a scientific survey of the <i>wazukhana</i> area of mosque. </p><p>The revision plea has been moved by Rakhi Singh, one of the Hindu plaintiffs in the main suit pertaining to the Gyanvapi mosque which demands the removal of the mosque itself and seeks rights for Hindus to worship Shringar Gauri there. Advocate Saurabh Tiwari, appearing for Ms. Singh, told <i>The Hindu</i> that the single judge Bench of Justice Rohit Ranjan Agarwal has issued a notice in the matter of the revision plea.</p><p>The ASI has already conducted a scientific survey of the Gyanvapi complex in 2023, in accordance with the Varanasi district judge’s order, to determine whether the mosque was constructed over the pre-existing structure of a Hindu temple. In its report, the ASI maintained that a large Hindu temple existed at the spot before the construction of the existing structure, that is, the Gyanvapi mosque. </p><div class="articleblock-container" id="arthardpv"></div><div class="article-ad two-side text-ad"><div class="ad-text" id="artproduct2"></div></div><div class="comments-shares share-page" data-artid="67796162" data-title="Varanasi court permits Hindu worship inside sealed basement of Gyanvapi mosque; masjid committee to appeal" data-url="https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece"><p class="comments"><span class="coral-count" data-coral-url="https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece" data-coral-id="67796162" data-coral-notext="true"></span>
COMMents
</p><p class="share share-text"> SHARE
</p><ul class="share-list" style="display: none;"><li class="copy-link" onclick="copytext('https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece');">
Copy link
</li><li class="email"><a href="mailto:?subject=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal&amp;amp;body=Check%20out%20this%20link%20https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece" target="_self">
Email
</a></li><li class="facebook" onclick="openShareLink('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;t=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
Facebook
</li><li class="twitter" onclick="openShareLink('https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;text=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
Twitter
</li><li class="telegram" onclick="openShareLink('https://t.me/share/url?url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;text=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
Telegram
</li><li class="in" onclick="openShareLink('https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;title=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
LinkedIn
</li><li class="whatsapp" onclick="openShareLink('https://api.whatsapp.com//send?text=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal%20-%20https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece')">
WhatsApp
</li><li class="reddit" onclick="openShareLink('https://reddit.com/submit?url=https%3A%2F%2Fwww.thehindu.com%2Fnews%2Fnational%2Fvaranasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex%2Farticle67796162.ece&amp;title=Varanasi%20court%20permits%20Hindu%20worship%20inside%20sealed%20basement%20of%20Gyanvapi%20mosque%3B%20masjid%20committee%20to%20appeal')">
Reddit
</li></ul></div><div class="spliter pt-0 mb-0"></div><script data-cfasync="false">
function createElementScript(element, className, id = null) {
var el = document.createElement(element);
el.className = className;
if(className == "dfp-ad"){
    el.style.minHeight= "250px";
}
if (id != null) {
el.id = id;
}
return el;
}

function insertElementbegin(selector,insertelement){
    selector.insertAdjacentElement('afterbegin',insertelement)
}
function insertElementEnd(selector,insertelement){
    selector.insertAdjacentElement('afterend',insertelement)
}var totalPcount = document.querySelectorAll(".articlebodycontent>p")
if(totalPcount.length > 1){
    
    insertElementEnd(totalPcount[0],createElementScript("div","","artmeterpv"))
}
else{
    insertElementbegin(document.querySelector(".articlebodycontent"),createElementScript("div","","artmeterpv"))
}
if(totalPcount.length > 3 && DevIdf.isMobile){
    insertElementEnd(totalPcount[2],createElementScript("div","","articledivtrendM"))
}
if(totalPcount.length > 4){
    if(DevIdf.isMobile){
        var container = document.createElement("div");
         container.className = "article-ad";
         container.appendChild(createElementScript("div","dfp-ad","mobileinlinead1"));
        insertElementEnd(totalPcount[3],container)
    }
    else{
         var container = document.createElement("div");
         container.className = "article-ad";
         container.appendChild(createElementScript("div","dfp-ad","desktopinlinead1"));

        insertElementEnd(totalPcount[3],container)
    }
}
if(totalPcount.length > 6 && DevIdf.isMobile){
    insertElementEnd(totalPcount[5],createElementScript("div","","latest_news_module_mobile"))
}
if(totalPcount.length > 8){
    insertElementEnd(totalPcount[7],createElementScript("div","","artproduct1"))
}
</script><div class="related-topics"><h5>
Related Topics
</h5><p class="related-topics-list"><a href="https://www.thehindu.com/tag/1432/" class=" txt">
religion and belief
</a><span>
/
</span><a href="https://www.thehindu.com/tag/629-600/" class=" txt">
laws
</a><span>
/
</span><a href="https://www.thehindu.com/tag/227-217-81/" class=" txt">
Varanasi
</a></p></div></div></div><div class=" col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 hide-mobile"><div id="latest_news_module_desktop"><script>
		setTimeout(function () {
if (DevIdf.isMobile) {
latest_news_module_Url = "fragment/latestnews?count=4&variant=latestnewsmobile";
} else {
latest_news_module_Url = "fragment/latestnews?count=4";
}

fetch("https://www.thehindu.com/" + latest_news_module_Url).then(function (response) {
if (response.ok && (response.status >= 200 && response.status < 400)) {
return response.text();
}
}).then(function (respone) {
if (DevIdf.isMobile) {
document.querySelector("#latest_news_module_mobile").innerHTML = respone;
} else {
document.querySelector("#latest_news_module_desktop").innerHTML = respone;
}

$('.timePublished[data-published]').each(function () {
var time = $(this).data('published');
if (time) {
$(this).html(timeSince(new Date(time)));
}
});
}).catch(function (error) {});
}, 2000);
	</script></div><div class="d-none d-sm-block d-lg-block d-xl-block right-sticky ad-sticky"><div class="adbg"><div id="articledivsub" class="dfp-ad flexdfpad " style="min-width: 300px; min-height: 600px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('articledivsub'); });
    }});
</script></div><div class="  " style><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('desktopinlinead1'); });
    }});
</script></div></div><div id="articledivtrendD"></div></div><div class="d-block d-sm-none "><div class="  " style><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('mobileinlinead1'); });
    }});
</script></div></div></div></div></div></section><div class="d-none d-lg-block d-xl-block"><div id="div-gpt-ad-1666172717509-12" class="dfp-ad flexdfpad " style="min-height: 250px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1666172717509-12'); });
    }});
</script></div></div><div class="d-block d-sm-none "><div id="div-gpt-ad-1666088319758-0" class="dfp-ad flexdfpad " style="min-width: 300px;min-height:280px"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1666088319758-0'); });
    }});
</script></div></div><section class><div class="container discover taboo"><div class="row xs-reverse nowarp two-thr-one tab equal-height"><div class=" col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 after-border-right"><div id="taboola-left-rail-thumbnails"></div></div><div class=" col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12"><div id="taboola-mid-article-thumbnails"></div></div><div class=" col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12  after-border-left tab-no-side-border"><div id="taboola-right-rail-thumbnails"></div></div></div><div class="row xs-reverse nowarp two-thr-one tab equal-height"><div id="taboola-below-article-thumbnails"></div></div><script type="text/javascript">
				userIdentify.then(function () {
					if (isNonSubcribedUser()) {
					window._taboola = window._taboola || [];
					_taboola.push({mode: 'alternatiing-thumbnails-a', container: 'taboola-below-article-thumbnails', placement: 'Below Article Thumbnails', target_type: 'mix'});						_taboola.push({mode: 'thumbnails-1x1', container: 'taboola-mid-article-thumbnails', placement: 'Mid Article Thumbnails', target_type: 'mix'});
						_taboola.push({mode: 'Left-Rail-Thumbnails', container: 'taboola-left-rail-thumbnails', placement: 'Left Rail Thumbnails', target_type: 'mix'});
						_taboola.push({mode: 'Right-Rail-Thumbnails', container: 'taboola-right-rail-thumbnails', placement: 'Right Rail Thumbnails', target_type: 'mix'});}
					});
			</script></div></section><section class><div class="container discover"><div id="articledivrec"></div></div></section><section class><div class="container discover topnewstoday"><div class="box-line-title"><h2 class="black-text"><span class="sub-title">
Top News Today
</span></h2></div> <nav class="tab-nav">
<div class="nav nav-tabs" id="nav-tab" role="tablist">
<button class="nav-link active sectiondynamicContent" type="button" data-link-url="https://www.thehindu.com/news/" data-fragment-url="https://www.thehindu.com/news/fragment/topstory?count=8">
Top News
</button>
<button class="nav-link  sectiondynamicContent" type="button" data-link-url="https://www.thehindu.com/news/national/" data-fragment-url="https://www.thehindu.com/news/national/fragment/topstory?count=8">
India
</button>
<button class="nav-link  sectiondynamicContent" type="button" data-link-url="https://www.thehindu.com/news/international/" data-fragment-url="https://www.thehindu.com/news/international/fragment/topstory?count=8">
World
</button>
<button class="nav-link  sectiondynamicContent" type="button" data-link-url="https://www.thehindu.com/sport/" data-fragment-url="https://www.thehindu.com/sport/fragment/topstory?count=8">
Sports
</button>
<button class="nav-link  sectiondynamicContent" type="button" data-link-url="https://www.thehindu.com/business/" data-fragment-url="https://www.thehindu.com/business/fragment/topstory?count=8">
Business
</button>
<button class="nav-link  sectiondynamicContent" type="button" data-link-url="https://www.thehindu.com/sci-tech/science/" data-fragment-url="https://www.thehindu.com/sci-tech/science/fragment/topstory?count=8">
Science
</button>
<button class="nav-link  sectiondynamicContent" type="button" data-link-url="https://www.thehindu.com/sci-tech/technology/" data-fragment-url="https://www.thehindu.com/sci-tech/technology/fragment/topstory?count=8">
Technology
</button>
<button class="nav-link  sectiondynamicContent" type="button" data-link-url="https://www.thehindu.com/entertainment/" data-fragment-url="https://www.thehindu.com/entertainment/fragment/topstory?count=8">
Entertainment
</button>
<button class="nav-link  sectiondynamicContent" type="button" data-link-url="https://www.thehindu.com/life-and-style/" data-fragment-url="https://www.thehindu.com/life-and-style/fragment/topstory?count=8">
Life &amp; Style
</button>
</div>
</nav>
<div class="th-loader" style="display:none;"><div class="center-load"></div><div class="center-icon"><img class="lazy" data-src-template="https://www.thehindu.com/theme/images/th-online/h-circle-black-white-new.svg" alt="The Hindu Logo" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" /></div></div><div class="tab-content" id="nav-tabContent" data-advt-slotId="/22390678/TH_Desktop_AT_Mid04"></div><a id="discoverwidget1" style="display:none;" class="small-link see-more center-align-load-more"><span class="text">SEE MORE<span class="slider"></span></span></a></div></section><script>
        var dynamiccontnetScrolled = false;
         window.addEventListener('scroll', function() {
        if (!dynamiccontnetScrolled) {
            dynamiccontnetScrolled = true; 
            var activeDynamicUrl = document.querySelector(".sectiondynamicContent.active").getAttribute('data-fragment-url') || '';
            var linkUrl = document.querySelector(".sectiondynamicContent.active").getAttribute('data-link-url') || '';
            if(typeof activeDynamicUrl !="undefined" && activeDynamicUrl.length > 0){
            fetch(activeDynamicUrl).then(function(response) {
                if(response.ok && (response.status >= 200 &&  response.status < 400)) {     
                    dynamiccontnetScrolled = true;     
                    return response.text();
                }
                else{
                    dynamiccontnetScrolled = false;
                }
            }).then(function(respone) {
                document.querySelector("#nav-tabContent").innerHTML = respone;
                imglazyload("#nav-tabContent");
                dynamicadwidgetdisplay("dynamicadwidget");
                if(typeof linkUrl !="undefined" && linkUrl.length > 0 && linkUrl != '' && linkUrl != '#'){
                    document.querySelector("#discoverwidget1").href = linkUrl;
                    document.querySelector("#discoverwidget1").style.display= "block";
                }
               
            }).catch(function(error) {
                dynamiccontnetScrolled = false;
            });
            }
         }
            });
            var myFunction = function() {
               
                var hasactive = $(this).hasClass('active');
                $(this).parent().children().removeClass("active")
                this.classList.add("active")
                var fragmentUrl = this.getAttribute("data-fragment-url");
                var linkUrlnew = this.getAttribute("data-link-url");
                if(!hasactive){

                if(fragmentUrl){
                    showLoader(".topnewstoday .th-loader")
                    $("#discoverwidget3").hide();
                fetch(fragmentUrl).then(function(response) {
             if(response.ok && (response.status >= 200 &&  response.status < 400)) {    
                      
                    return response.text();
                }
                else{
                    
                }
            }).then(function(respone) {
                hideLoader(".topnewstoday .th-loader")
                document.querySelector("#nav-tabContent").innerHTML = respone;
                imglazyload("#nav-tabContent");
                dynamicadwidgetdisplay("dynamicadwidget");
                if(typeof linkUrlnew !="undefined" && linkUrlnew.length > 0 && linkUrlnew != '' && linkUrlnew != '#'){
                    document.querySelector("#discoverwidget1").href = linkUrlnew;
                    document.querySelector("#discoverwidget1").style.display= "block";
                }
            }).catch(function(error) {
               
            });
                }
                }
            };
            setTimeout(function(){
            var elements = document.getElementsByClassName("sectiondynamicContent");
            

            for (var i = 0; i < elements.length; i++) {
                
                elements[i].addEventListener('click', myFunction, false);
            }
            }, 500);
            function dynamicadwidgetdisplay(selector){
                userIdentify.then(function() {
                    if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {
                     googletag.cmd.push(function() { googletag.display(selector); });
                        var googletagslots = googletag.pubads().getSlots();
                        var refreshslots = googletagslots.find(element => element.getSlotId().toString().indexOf("/22390678/TH_Desktop_AT_Mid04") > -1);
                        if (typeof refreshslots !="undefined"){
                            googletag.cmd.push(function() {
                                googletag.pubads().refresh([refreshslots]);
                            });
                        }
                    }
                });
            }

    </script><div class="d-none d-lg-block d-xl-block"><div id="div-gpt-ad-1666172717509-0" class="dfp-ad  " style="min-width: 728px; min-height: 90px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1666172717509-0'); });
    }});
</script></div></div><div class="d-block d-sm-none "><div id="div-gpt-ad-1666088474834-0" class="dfp-ad flexdfpad " style="min-width: 300px; min-height: 280px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1666088474834-0'); });
    }});
</script></div></div><div class="read-in-app-floating-btn"><a rel="nofollow"><span class="rna-btn" style="display:none">
Read in App
</span></a></div><section><div class="container"><div class="d-none d-sm-block d-lg-block d-xl-block"></div></div></section><script type="text/javascript">
userIdentify.then(function () {
	if (isNonSubcribedUser()) {
  window._taboola = window._taboola || [];
  _taboola.push({flush: true});
 
  }
  });
</script><script type="text/javascript">
require(["jquery"], function ($) {
	$(this).scroll(function() {
		if ($(this).scrollTop() > 300) {
			if($( window ).width() > 1200){
				$("#left-bottom-sticky-container").css("bottom", "30px");
				return 0;
			}
			if($( window ).width() > 1000 && $( window ).width() < 1200){
				$("#left-bottom-sticky-container").css("bottom", "12px");
				return 0;
			}
			if($( window ).width() > 600 && $( window ).width() < 1000){
				$("#left-bottom-sticky-container").css("bottom", "0px");
				return 0;
			}
			if($( window ).width() <= 600){
				if($(".flooting-ad").css("display") == "block"){
					
					$("#left-bottom-sticky-container").css("bottom", "95px");
					return 0;
				}
				$("#left-bottom-sticky-container").css("bottom", "0px");
				return 0;
			}
			$("#left-bottom-sticky-container").css("bottom", "30px");
		}
		else{
			$("#left-bottom-sticky-container").css("bottom", "-100%");
		}

	});
});
</script><div id="left-bottom-sticky-container"></div><footer><div class="container"><div class="row footer-logo"><div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12"><a href="https://www.thehindu.com/"><img class="lazy img-fluid mobile-logo" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg" alt="Return to frontpage"></a></div><div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12"><div class="app-icon"><a href="https://play.google.com/store/apps/details?id=com.mobstac.thehindu" title="Google Play"><img class="lazy" alt="Google Play" data-src-template="https://www.thehindu.com/theme/images/th-online/google-playstore-icon.svg"></a><a href="https://bit.ly/thiphone" title="Apple Store"><img class="lazy" alt="Apple Store" data-src-template="https://www.thehindu.com/theme/images/th-online//apple-store-icon.svg"></a></div></div></div><div class="row footer-menu"><div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 col-12">
<ul class="footer-list">
<li class="title">
<h5 class>The Hindu</h5>
<ul class="footer-sub-list">
<li>
<a class="about us-menu" href="https://www.thehindu.com/aboutus/">
About Us
</a>
</li>
<li>
<a class="code of editorial values-menu" href="https://www.thehindu.com/values/">
Code of Editorial Values
</a>
</li>
<li>
<a class="news archive-menu" href="https://www.thehindu.com/archive/">
News Archive
</a>
</li>
<li>
<a class="sitemap-menu" href="https://www.thehindu.com/sitemap/">
Sitemap
</a>
</li>
<li>
<a class="print subscription-menu" href="http://www.thehindugroup.in/subscribe/">
Print Subscription
</a>
</li>
<li>
<a class="digital subscription-menu" href="https://www.thehindu.com/subscription/?utm_source=footer&amp;utm_medium=section&amp;utm_caign=website">
Digital Subscription
</a>
</li>
<li>
<a class="subscribe to newsletters-menu" href="https://www.thehindu.com/newsletter-subscription/">
Subscribe to Newsletters
</a>
</li>
<li>
<a class="rss feeds-menu" href="https://www.thehindu.com/rssfeeds/">
Rss Feeds
</a>
</li>
<li>
<a class="readers editor-terms of reference-menu" href="https://www.thehindu.com/readers-editor-terms/">
Readers Editor-Terms of Reference
</a>
</li>
<li>
<a class="authors &amp; contributors-menu" href="https://www.thehindu.com/profile/">
Authors &amp; Contributors
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class>Contact us</h5>
<ul class="footer-sub-list">
<li>
<a class="contact us-menu" href="https://www.thehindu.com/contacts/">
Contact Us
</a>
</li>
<li>
<a class="social media-menu" href="https://www.thehindu.com/social/">
Social Media
</a>
</li>
<li>
<a class="advertise with us-menu" href="https://www.thehindu.com/advertise-with-us/">
Advertise With Us
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class>Group News Sites</h5>
<ul class="footer-sub-list">
<li>
<a class="business line-menu" href="https://www.thehindubusinessline.com/" target="_blank">
Business Line
</a>
</li>
<li>
<a class="bl on campus-menu" href="https://bloncampus.thehindubusinessline.com/" target="_blank">
BL on Campus
</a>
</li>
<li>
<a class="sportstar-menu" href="https://sportstar.thehindu.com/" target="_blank">
Sportstar
</a>
</li>
<li>
<a class="frontline-menu" href="https://frontline.thehindu.com/" target="_blank">
Frontline
</a>
</li>
<li>
<a class="இந்து தமிழ் திசை-menu" href="https://www.hindutamil.in/" target="_blank">
இந்து தமிழ் திசை
</a>
</li>
<li>
<a class="the hindu centre-menu" href="https://www.thehinducentre.com/" target="_blank">
The Hindu Centre
</a>
</li>
<li>
<a class="young world club-menu" href="https://ywc.thehindu.com/" target="_blank">
Young World Club
</a>
</li>
<li>
<a class="the hindu epaper-menu" href="https://epaper.thehindu.com/?utm_source=Hindu&amp;utm_medium=Menu&amp;utm_campaign=Header" target="_blank">
The Hindu ePaper
</a>
</li>
<li>
<a class="business line epaper-menu" href="https://epaper.thehindubusinessline.com/login" target="_blank">
Business Line ePaper
</a>
</li>
<li>
<a class="crossword + free games-menu" href="https://crossword.thehindu.com/?utm_source=thehindu&amp;utm_medium=mainmenu" target="_blank">
Crossword + Free Games
</a>
</li>
</ul>
</li>
</ul>
</div>
<div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 col-12">
<ul class="footer-list">
<li class="title">
<h5 class>Other Products</h5>
<ul class="footer-sub-list">
<li>
<a class="roofandfloor-menu" href="https://roofandfloor.thehindu.com/?utm_source=thehindu&amp;amp;utm_medium=referral&amp;amp;utm_campaign=Internal-Marketing" target="_blank">
RoofandFloor
</a>
</li>
<li>
<a class="step-menu" href="https://step.thehindu.com/" target="_blank">
STEP
</a>
</li>
<li>
<a class="images-menu" href="https://thehinduimages.com/" target="_blank">
Images
</a>
</li>
<li>
<a class="classifieds - print-menu" href="http://www.thehinduclassifieds.in/" target="_blank">
Classifieds - Print
</a>
</li>
<li>
<a class="bookstore &amp; special publications-menu" href="https://publications.thehindugroup.com/bookstore/" target="_blank">
Bookstore &amp; Special Publications
</a>
</li>
</ul>
</li>
<li class="title mt-4">
<h5 class>Popular Sections</h5>
<ul class="footer-sub-list">
<li>
<a class="elections-menu" href="https://www.thehindu.com/elections/">
Elections
</a>
</li>
<li>
<a class="israel hamas war live updates-menu" href="https://www.thehindu.com/news/international/israel-hamas-war-live-updates-truce-ends/article67597057.ece">
Israel Hamas War Live Updates
</a>
</li>
<li>
<a class="israeli–palestinian conflict 2023-menu" href="https://www.thehindu.com/topic/israel-palestine-conflict/">
Israeli–Palestinian conflict 2023
</a>
</li>
<li>
<a class="latest news-menu" href="https://www.thehindu.com/">
Latest News
</a>
</li>
<li>
<a class="national news-menu" href="https://www.thehindu.com/news/national/">
National News
</a>
</li>
<li>
<a class="international news-menu" href="https://www.thehindu.com/news/international/">
International News
</a>
</li>
<li>
<a class="videos-menu" href="https://www.thehindu.com/videos/">
Videos
</a>
</li>
<li>
<a class="life &amp; style-menu" href="https://www.thehindu.com/life-and-style/">
Life &amp; Style
</a>
</li>
<li>
<a class="food-menu" href="https://www.thehindu.com/food/">
Food
</a>
</li>
<li>
<a class="podcast-menu" href="https://www.thehindu.com/podcast/">
Podcast
</a>
</li>
<li>
<a class="showcase-menu" href="https://www.thehindu.com/showcase/">
Showcase
</a>
</li>
</ul>
</li>
<li class="title mt-4">
<h5 class><a href="https://www.thehindu.com/opinion/">
Opinion
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/opinion/editorial/">
Editorial
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/columns/">
Columns
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/op-ed/">
Comment
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/cartoon/">
Cartoon
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/letters/">
Letters
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/interview/">
Interview
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/lead/">
Lead
</a>
</li>
</ul>
</ul>
</div>
<div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 col-12">
<ul class="footer-list">
<li class="title">
<h5 class><a href="https://www.thehindu.com/business/">
Business
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/business/agri-business/">
Agri-Business
</a>
</li>
<li>
<a href="https://www.thehindu.com/business/Industry/">
Industry
</a>
</li>
<li>
<a href="https://www.thehindu.com/business/Economy/">
Economy
</a>
</li>
<li>
<a href="https://www.thehindu.com/business/markets/">
Markets
</a>
</li>
<li>
<a href="https://www.thehindu.com/business/budget/">
Budget
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class><a href="https://www.thehindu.com/sport/">
Sport
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/sport/cricket/">
Cricket
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/football/">
Football
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/hockey/">
Hockey
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/tennis/">
Tennis
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/athletics/">
Athletics
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/motorsport/">
Motorsport
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/races/">
Races
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/other-sports/">
Other Sports
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class><a href="https://www.thehindu.com/sci-tech/">
Sci-Tech
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/sci-tech/science/">
Science
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/technology/">
Technology
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/health/">
Health
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/agriculture/">
Agriculture
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/energy-and-environment/">
Environment
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/technology/gadgets/">
Gadgets
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/technology/internet/">
Internet
</a>
</li>
</ul>
</li>
</ul>
</div>
<div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 col-12">
<ul class="footer-list">
<li class="title">
<h5 class><a href="https://www.thehindu.com/news/states/">
States
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/news/national/andhra-pradesh/">
Andhra Pradesh
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/karnataka/">
Karnataka
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/kerala/">
Kerala
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/tamil-nadu/">
Tamil Nadu
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/telangana/">
Telangana
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/other-states/">
Other States
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class><a href="https://www.thehindu.com/news/cities/">
Cities
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/news/cities/bangalore/">
Bengaluru
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/chennai/">
Chennai
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Coimbatore/">
Coimbatore
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Delhi/">
Delhi
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Hyderabad/">
Hyderabad
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Kochi/">
Kochi
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/kolkata/">
Kolkata
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/kozhikode/">
Kozhikode
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Madurai/">
Madurai
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Mangalore/">
Mangaluru
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/mumbai/">
Mumbai
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/puducherry/">
Puducherry
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Thiruvananthapuram/">
Thiruvananthapuram
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Tiruchirapalli/">
Tiruchirapalli
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Vijayawada/">
Vijayawada
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Visakhapatnam/">
Visakhapatnam
</a>
</li>
</ul>
</li>
</ul>
</div>
<div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 col-12 mobile-footer-pad"><ul class="footer-list"><li class="title"><h5 class="footer-top-border">Trending on The Hindu</h5><ul class="footer-sub-list with-graph-icon"><li><a href="https://www.thehindu.com/business/budget/">
Interim Budget 2024
</a></li><li><a href="https://www.thehindu.com/news/">
Live News
</a></li><li><a href="https://www.thehindu.com/news/national/parliament-budget-session-day-1-live-updates-jan-31-2024/article67795391.ece">
Parliament Budget Session
</a></li><li><a href="https://www.thehindu.com/news/cities/bangalore/bengaluru-ccb-unearths-wfh-scam-freezes-30-accounts-with-transaction-history-of-158-crore/article67792011.ece">
Bengaluru WFH scam
</a></li><li><a href="https://www.thehindu.com/news/national/tamil-nadu/judge-orders-authorities-to-install-boards-indicating-that-non-hindus-are-not-allowed-beyond-kodimaram-of-temples/article67793701.ece">
Non-Hindu Entry in Temples
</a></li><li><a href="https://www.thehindu.com/news/national/ed-raids-in-jk-punjab-up-in-bank-loan-fraud-case/article67795435.ece">
ED raids
</a></li><li><a href="https://www.thehindu.com/latest-news/">
Latest News
</a></li><li><a href="https://www.thehindu.com/news/cities/chennai/">
Chennai News
</a></li><li><a href="https://www.thehindu.com/news/international/">
International News
</a></li><li><a href="https://www.thehindu.com/news/national/tamil-nadu/senthilbalaji-bail-plea-how-can-he-continue-as-minister-asks-justice-anand-venkatesh-of-madras-high-court/article67792294.ece">
Senthilbalaji bail plea
</a></li></ul></li></ul></div><div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 col-12 mobile-footer-pad"><ul class="footer-list"><li class="title"><h5 class="footer-top-border">Trending on Group sites</h5><ul class="footer-sub-list with-graph-icon"><li><a href="https://www.thehindubusinessline.com/economy/budget/">
Budget 2024
</a></li><li><a href="https://www.thehindubusinessline.com/stocks/state-bank-of-india/">
SBI Share Price
</a></li><li><a href="https://www.thehindubusinessline.com/stocks/reliance-industries-ltd/">
Reliance Share Price
</a></li><li><a href="https://www.thehindubusinessline.com/markets/stock-markets/">
Stock Market Today
</a></li><li><a href="https://www.thehindubusinessline.com/gold-rate-today/Chennai/">
Gold Rate Today
</a></li><li><a href="https://www.thehindubusinessline.com/silver-rate-today/">
Silver Rate Today
</a></li><li><a href="https://sportstar.thehindu.com/cricket/">
Cricket News
</a></li><li><a href="https://sportstar.thehindu.com/football/">
Football News
</a></li><li><a href="https://frontline.thehindu.com/politics/">
Politics News
</a></li><li><a href="https://frontline.thehindu.com/current-issue/">
Frontline Current Issue
</a></li></ul></li></ul></div></div><div class="row pb-5"><div class="col-xl-12 col-md-12  col-sm-12 col-xs-12 col-12"><ul class="footer-social-icon"><li><a href="https://whatsapp.com/channel/0029VaAvwQJ90x34WZ6FDg36" target="_blank" rel="nofollow" title="WhatsApp"><img alt="Whatsapp" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/whatsapp-header-icon.svg"></a></li><li><a href="https://twitter.com/The_Hindu" target="_blank" rel="nofollow" title="Twitter"><img class="lazy" alt="Twitter" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/twitter-x.svg"></a></li><li><a href="https://www.facebook.com/thehindu" target="_blank" rel="nofollow" title="Facebook"><img class="lazy" alt="Facebook" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-fb.svg"></a></li><li><a href="https://www.instagram.com/the_hindu/?ref=badge" target="_blank" rel="nofollow" title="Instagram"><img alt="Instagram" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-insta.svg"></a></li><li><a href="https://www.linkedin.com/school/the-hindu/" target="_blank" rel="nofollow" title="Linkedin"><img alt="Linkedin" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-linkedin.svg"></a></li><li><a href="https://www.youtube.com/user/The1878Hindu" target="_blank" rel="nofollow" title="Youtube"><img alt="Youtube" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-youtube.svg"></a></li><li><a href="https://open.spotify.com/show/5yESTCj0iikA81EP3uXkQC" target="_blank" rel="nofollow" title="Spotify"><img alt="Spotify" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-drizzle.svg"></a></li><li><a href="https://t.me/THnewsupdates" target="_blank" rel="nofollow" title="Telegram"><img alt="Telegram" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/telegram-icon.svg"></a></li></ul><ul class="link-list">
<li>
<a class="terms of use-menu" href="https://www.thehindugroup.com/termsofuse.html" target="_blank">
Terms of Use
</a>
</li>
<li>
<a class="privacy policy-menu" href="https://www.thehindugroup.com/privacy.html" target="_blank">
Privacy Policy
</a>
</li>
<li id="teconsent"> </li>
</ul><div class="copyrights"><a>Copyright© 2024, THG PUBLISHING PVT LTD. or its affiliated companies. All rights reserved.</a></div><div class="back-to-top"><p>BACK TO TOP<img alt="Back to Top" class="lazy" data-src-template="https://www.thehindu.com/theme/images/th-online/back-to-top-arrow.svg"></p></div></div></div></div><div id="consent_blackbar"></div></footer><div class="footer-end"></div><script>
  loadCSS("https://www.thehindu.com/theme/css/font-awesome.min.css?ver=1706695152");
</script><script>
    function fragmentlazyload(selector){
      var fragmentcontent = [];
     if(typeof selector !== 'undefined' && selector){
      fragmentcontent = [].slice.call(document.querySelectorAll(selector +" .fragmentcontent.lazy"));
     }
     else{
      fragmentcontent = [].slice.call(document.querySelectorAll(".fragmentcontent.lazy"))
     }
   if ("IntersectionObserver" in window) {
    let optionsItersect = {
  rootMargin: '-400px',
  threshold: 0
}
     let lazyContentObserver = new IntersectionObserver(function(entries, optionsItersect) {
       entries.forEach(function(entry) {
         if (entry.isIntersecting) {
           let lazycontent = entry.target;

           let fragmentUrl =  lazycontent.dataset.fragmentUrl;
           
           fetch(fragmentUrl).then(function(response) {
            if(response.ok && (response.status >= 200 &&  response.status < 400)) {        
                return response.text();
            }
        }).then(function(resp) {
           if(typeof resp !="undefined"){
            
            try{
              $(lazycontent).html(resp);
            }
            catch(e){
              lazycontent.innerHTML = resp;
            }
            
            delete lazycontent.dataset.fragmentUrl;
            imglazyload("#"+lazycontent.id); 
            lazycontent.classList.remove("lazy");
            lazyContentObserver.unobserve(lazycontent);
           }

           
        }).catch(function(error) {
          console.error(error)
        });
           
         }
       });
     });
 
     fragmentcontent.forEach(function(content) {
      lazyContentObserver.observe(content);
     });
   } else {
     fragmentcontent.forEach(function(lazycontent) {
        let fragmentUrl =  lazycontent.dataset.fragmentUrl;
           
        fetch(fragmentUrl).then(function(response) {
         if(response.ok && (response.status >= 200 &&  response.status < 400)) {        
             return response.text();
         }
          }).then(function(resp) {
              if(typeof resp !="undefined"){
              lazycontent.innerHTML = resp;
              delete lazycontent.dataset.fragmentUrl;
              imglazyload("#"+lazycontent.id); 
              lazycontent.classList.remove("lazy");
              }

              
          }).catch(function(error) {
            console.error(error)
          });
      });
   }
   }document.addEventListener("DOMContentLoaded", function (event) {
    imglazyload();
    fragmentlazyload();});</script><script type="text/javascript">
      var _paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        _paq.push(['setTrackerUrl', '//matomo.thehindu.com/matomo.php']);
        _paq.push(['setSiteId', '1']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src='//matomo.thehindu.com/matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    </script><script>
    const _disallow_params = ["gaa_at", "gaa_n", "gaa_ts", "gaa_sig"]
    tp.push(['init', function() {
      const current_url = new URL(window.location.href)
      const matched_params = _disallow_params.filter(el => current_url.searchParams.has(el))

      if (!tp.pianoId.isUserValid() && matched_params.length == 0){
                loadScript("https://accounts.google.com/gsi/client")
              } 
    }])
  </script><div id="g_id_onload" data-client_id="853251516072-1eudfpp9hhjtjp31fpm8g9fus3ig0ec3.apps.googleusercontent.com" data-callback="handleGoogleSignIn" data-skip_prompt_cookie="__utp" data-ux_mode="popup" data-moment_callback="logMomentNotification" data-auto_prompt="false"></div><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Faustina:wght@300;400;500;600;700;800&display=swap" crossorigin="anonymous"><style>
	#gsi_overlay {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
	}
	#oneTapOverlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9998;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.9);
	}
	.oneTapOverlay-inner {
		margin-right: 420px;
		margin-left: auto;
		width: calc(100% - 420px);
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-top: 80px;
	}
	.oTO-Text-Logo img {
		width: 59px;
		height: 59px;
	}
	.oneTapOverlay-text {
		display: flex;
		flex-direction: row;
		margin-top: 57px;
		max-width: 550px;
	}
	.oTO-Text {
		padding: 0 16px;
		color: #FFFFFF;
	}
	.oTO-Text-title {
		font-size: 20px;
		line-height: 28px;
		font-family: "Merriweather", serif;
		font-weight: bold;
		margin: 15px 0;
	}
	.oTO-Text-subtitle {
		font-size: 20px;
		margin: 16px 0 8px;
		font-family: "Merriweather", serif;
		font-weight: bold;
	}
	.oTO-Text-points {
		padding: 0;
		position: absolute;
	}
	.oTO-Text-points li {
		font-size: 16px;
		line-height: 22px;
		margin-bottom: 8px;
		font-family: "Faustina", serif;
		list-style-type: none;
		position: relative;
		display: flex;
		align-items: flex-start;
	}
	.oTO-Text-points li::before {
		content: '';
		display: block;
		padding: 8px 7px;
		background: url('https://www.thehindu.com/theme/images/google-signin/arrow-819.svg') no-repeat center center;
		background-size: contain;
		margin-right: 8px;
		margin-top: 6px;
	}
	.oneTapOverlay-arrow img {
		max-width: 100%;
	}
	@media screen and(max-width: 1250px) {
		.oneTapOverlay-arrow {
			display: none
		}
	}
	@media screen and(max-width: 820px) {
		.oTO-Text-title {
			font-size: 24px;
		}
		.oTO-Text-subtitle {
			font-size: 18px;
		}
		.oTO-Text-points li {
			font-size: 16px;
		}
		.oneTapOverlay-text {
			flex-direction: column;
			align-items: center;
		}
	}

	@media screen and(max-height: 500px) {
		.oneTapOverlay-text {
			margin-top: 0;
		}
		.oTO-Text-title {
			font-size: 24px;
		}
		.oTO-Text-subtitle {
			font-size: 18px;
		}
		.oTO-Text-points li {
			font-size: 16px;
		}
	}

	@media(max-width: 767px) {
		#gsi_overlay {
			z-index: 9999 !important;
		}
		.oTO-Text-points {
			display: none !important;
		}
	}

	body.headersticky iframe#credential_picker_iframe {
		bottom: 85px !important;
	}
	div#credential_picker_container {
		z-index: 99999999999999999999 !important;
	}
</style><div id="gsi_overlay"><div class="oneTapOverlay-inner"><div class="oneTapOverlay-text"><div class="oTO-Text-Logo"><img src="https://www.thehindu.com/theme/images/google-signin/th-online-icon.svg" alt="The Hindu" /></div><div class="oTO-Text"><div class="oTO-Text-title">Sign in to unlock member-only benefits!</div><ul class="oTO-Text-points"><li>Access 10 free stories every month</li><li>Save stories to read later</li><li>Access to comment on every story</li><li>Sign-up/manage your newsletter subscriptions with a single click</li><li>Get notified by email for early access to discounts &amp; offers on our products</li></ul></div></div><div class="oneTapOverlay-arrow"><img src="https://www.thehindu.com/theme/images/google-signin/group-12945.svg" alt="Sign in" /></div></div></div><script>
    const gsi_container = document.getElementById("g_id_onload")
    const auth_ep = "https://madhyama.thehindu.com/api/gni";
    const response_ep = "https://madhyama.thehindu.com/api/sociallogin"
    handleResponseUrl()

    function logMomentNotification(v) {
      const gsi_overlay = document.getElementById("gsi_overlay")
      if(v.g == 'display' && v.h === true) {
        gsi_overlay.style.display = "block";

        dataLayer = window.dataLayer || [];
        dataLayer.push ({
          'event' : 'onetap_signin',
          'data' : {
            'click':'view',
            'click_type' : '',
            'general_placement':'body',
            'detailed_placement':'',
            'goal_type':'onetap_signin_view'
          }
        });
      }
      else gsi_overlay.style.display = "none"
    }

    function loginCallback(res) {
      handleGoogleSignIn()
    }

    function pushLoginEventToDataLayer() {
      dataLayer = window.dataLayer || [];
      dataLayer.push ({
        'event' : 'onetap_signin',
        'data' : {
          'click':'sign_in',
          'click_type' : 'action',
          'general_placement':'body',
          'detailed_placement':'',
          'goal_type':'onetap_signin'
        }
      });
    }

    function handleGoogleSignIn(user) {
      console.log('handleGoogleSignIn');
      const clean_url = cleanArticleUrl();
      const options = {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
          "token": user.credential,
          "article_url": clean_url,
          "pubId": "TH",
        })
      };

      fetch(auth_ep, options)
      .then(function(res) {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(function(res) {
        if (res.redirect_uri) {
          pushLoginEventToDataLayer();
          setTimeout(() => {
            window.location.replace(res.redirect_uri);
          }, 0200);
        }
        else if (!res.token || res.token.trim() === "") return
        else if(res.token && window.tp.pianoId)
          tp.push(['init', function() {
            tp.pianoId.loginByToken(res.token);
            pushLoginEventToDataLayer();
            setTimeout(() => window.location.reload(), 0700);
          }])
        else {
          console.log("Nothing happened...")
        }
      })
      .catch(err => console.error(err));
    }

    function cleanArticleUrl() {
      const params_to_remove = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]

      const url_obj = new URL(`${window.location.href}`)
      url_obj.searchParams.forEach((v, k) =>
        {if (params_to_remove.includes(k)) url_obj.searchParams.delete(k)}
      )

      return url_obj.toString()
    }

    function handleResponseUrl() {
      const url_obj = new URL(window.location.href)
      const response_id = url_obj.searchParams.get("response_id")
      const redirect_uri = url_obj.searchParams.get("internal_redirect_uri")
      if (!response_id || !redirect_uri) {
        gsi_container.setAttribute('data-auto_prompt', "true")
        return
      }
       // If user is already logged in, Do nothing with response_id or redirect_uri
      // else if (window.tp && window.tp.pianoId.isUserValid()) return;

      const options = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            "response_id": response_id,
            "pubId": "TH"
        })
      }

      fetch(response_ep, options)
      .then(function(res) {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(function(res) {
        console.log(res)
        // return if response is not ok OR no access token is present
        if (!res.data.status === "ok" || !res.data.access_token) return
        if(window.tp.pianoId)
          tp.push(['init', function() {
            tp.pianoId.loginByToken(res.data.access_token)
            window.location.replace(res.data.redirect_uri)
          }])
        else window.location.replace(res.data.redirect_uri)
      })
      .catch(err => console.error("Error: ", err));
    }

    function getHeaders() {
      return {
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Basic dGhlaGluZHU6a251cl9DSC1BNVBZVSU4Vw==",
        "Content-Type": "application/json",
      }
    }

  </script><script>
window.tp.push([
  "init",
  function () {
	if (window.tp.pianoId.isUserValid()) loadScript("https://www.thehindu.com/theme/js/vue-petite.min.js?ver=1706695080")
  }
])
</script><style>
	.link a {
		color: white !important;
	}

	.device-info {
		margin-right: 4px;
	}

	.popup-background {
		background: rgba(0, 0, 0, 0.4);
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99999;
	}

	[v-cloak] {
		display: none;
	}

	.popup {
		width: 100%;
		max-width: 800px;
		height: auto;
		background: #000000;
		padding: 50px 100px 50px 150px;
		color: #ffffff;
		position: relative;
	}

	.popup .popup-close {
		color: white;
		border: none;
		background: none;
		padding: 0;
		margin: 0;
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 20px;
		font-weight: 200;
		line-height: 20px;
	}

	.popup .title {
		font-family: "Merriweather", serif;
		font-size: 18px;
		line-height: normal;
		text-align: left;
		display: flex;
		align-items: center;
		position: relative;
		min-height: 50px;
	}

	.popup .title::before {
		content: "";
		width: 50px;
		height: 50px;
		/* background: url("../../public/icons/h-circle-white.svg") no-repeat center; */
		background-size: 50px 50px;
		display: block;
		position: absolute;
		left: -65px;
	}

	.popup .sub-text {
		font-family: "Merriweather", serif;
		font-size: 18px;
		line-height: normal;
		margin: 15px 0;
	}

	.popup .popup-btn {
		background-color: #ffffff !important;
		color: #000000 !important;
		font-weight: bold;
		width: max-content;
		min-width: 130px;
		height: 34px;
		text-align: center;
		box-sizing: border-box;
		border-radius: 4px;
		border: none;
		cursor: pointer;
		font-size: 12px;
		padding: 9px 10px 13px 20px;
		text-transform: uppercase;
		margin: 25px auto;
		display: block;
		font-family: "Merriweather Sans", sans-serif;
		transition: all 0.3s;
	}

	.popup .popup-btn:focus {
		box-shadow: none;
		outline: none;
	}

	.popup .popup-btn:after {
		content: "→";
		position: relative;
		opacity: 0;
		top: -1px;
		right: 15%;
		transition: 0.3s;
	}

	.popup .popup-btn:hover {
		padding-right: 20px;
		padding-left: 10px;
		color: #000000;
		text-decoration: none;
		outline: none;
	}

	.popup .popup-btn:hover::after {
		opacity: 1;
		right: -8px;
	}

	.popup .device-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.popup .device-list li {
		width: 100%;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.popup .device-list li > div {
		display: flex;
		justify-content: left;
		align-items: flex-start;
	}

	.popup .device-list li .s-no {
		font-family: "Merriweather Sans", sans-serif;
		font-size: 16px;
		text-align: right;
		width: 10px;
	}

	.popup .device-list li .icon {
		content: "";
		width: 20px;
		height: 20px;
		/* background: url("../../public/icons/profile-white.svg") no-repeat center; */
		background-size: 20px 20px;
		display: block;
		margin: 4px 10px 0;
	}

	.popup .device-list li .device {
		font-family: "Merriweather Sans", sans-serif;
		font-size: 16px;
		text-align: left;
		line-height: normal;
	}

	.popup .device-list li .device span {
		display: block;
		font-family: inherit;
	}

	.popup .device-list li .popup-btn {
		margin: 0;
	}

	.popup p.link {
		font-family: "Merriweather Sans", sans-serif;
		font-weight: 200;
		text-align: center;
		font-size: 14px;
		margin: 20px auto 0;
	}

	.popup p.link a {
		font-weight: inherit;
		font-family: inherit;
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: all 0.3s;
	}

	.popup p.link a:hover {
		text-decoration: none;
	}

	.popup p.link span {
		color: #555555;
		font-size: 18px;
		line-height: 0;
		position: relative;
		top: 3px;
	}

	@media screen and(max-width: 700px) {
		.popup {
			padding: 40px 40px 40px 90px;
		}
	}

	@media screen and(max-width: 570px) {
		.popup {
			width: 100%;
			max-width: 100%;
			padding: 35px 25px;
		}

		.popup .popup-close {
			font-size: 17px;
			line-height: 17px;
		}

		.popup .title {
			font-size: 14px;
			min-height: auto;
			padding-left: 60px;
			margin-bottom: 25px;
			line-height: 24px;
		}

		.popup .title::before {
			left: 0;
		}

		.popup .sub-text {
			font-size: 14px;
			margin: 15px 0;
			line-height: 24px;
		}

		.popup .popup-btn {
			/* width: 80px; */
			height: 30px;
			font-size: 10px;
			padding: 9px 0 13px 10px;
			margin: 15px auto;
		}

		.popup .popup-btn:hover {
			padding-right: 10px;
			padding-left: 0;
		}

		.popup .device-list {
			list-style: none;
			margin: 0;
			padding: 0;
		}

		.popup .device-list li {
			padding: 7px 0;
		}

		.popup .device-list li .s-no {
			font-size: 13px;
			width: 5px;
		}

		.popup .device-list li .icon {
			width: 15px;
			height: 15px;
			background-size: 15px 15px;
			margin: 2px 7px 0;
		}

		.popup .device-list li .device {
			font-size: 12px;
			font-weight: normal;
		}

		.popup p.link {
			font-size: 12px;
			margin: 15px auto 0;
		}

		.popup p.link a {
			text-underline-offset: 2px;
		}

		.popup p.link span {
			color: #555555;
			font-size: 18px;
			line-height: 0;
			position: relative;
			top: 3px;
		}
	}
</style><div class="popup-background" id="user-session-popup" v-show="store.session_limit_exceeded === true" v-scope v-cloak><div class="popup" style="padding: 25px;"><button class="popup-close" onclick="window.tp.pianoId.logout()">&#10005;</button><div class="title">Looks like you are already logged in from more than 3 devices!</div><div class="sub-text">To continue logging in, remove at least one device from the below list</div><ul class="device-list"><li v-for="device_detail, index in store.device_info" :key="index"><div class="device-info" v-scope="DeviceInfoComponent({index, ...device_detail})"></div><button class="btn popup-btn" @click="sendDeleteRequest([device_detail.payload], 'single')">Log out</button></li></ul><button class="btn popup-btn" @click="sendDeleteRequest(store.device_info.map(di => di.payload), 'all')">Log Out from all devices</button><p class="link"><a href="https://www.thehindugroup.com/privacy.html" target="_blank">Terms & conditions</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="https://forms.office.com/r/tz7UETzxUs" target="_blank">Institutional Subscriber</a></p></div></div><template id="device-info"><span class="s-no">${ ind + 1 }</span><span class="icon"></span><span class="device">
${ device }<span class="duration">Last active - ${ la }</span></span></template><script>const us_api_domain = "/";</script><script src="https://www.thehindu.com/theme/js/user_session.min.js?ver=1706695619"></script><div class="comments-chat"><div class="comments-overlay"></div><div class="comments-box" style="padding:0 10px 0 10px"><button class="comments-close"><img class="menu-hamber lazy" data-src-template="https://www.thehindu.com/theme/images/th-online/menu-close-icon.svg" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png"></button><h3>Comments</h3><p>Comments have to be in English, and in full sentences. They cannot be abusive or personal. Please abide by our <a href="/termsofuse/">community guidelines </a> for posting your comments. </p><p>We have migrated to a new commenting platform. If you are already a registered user of The Hindu and logged in, you may continue to engage with our articles. If you do not have an account please register and login to post comments. Users can access their older comments by logging into their accounts on Vuukle.</p><div id="coral_thread"></div></div></div><script>
		window.coralLoaded = false;
		function loadCoaral(){
			if(!coralLoaded){
			tp = window["tp"] || [];
			tp.push(["init", function () {
				if (!tp.user.isUserValid()) {
					loadcoralEmded()
				}
				else{
					var myHeaders = new Headers();
					myHeaders.append("x-client-auth", tp.pianoId.getToken());
					var requestOptions = {
					  method: 'GET',
					  headers: myHeaders
					};
					fetch("https://thcmt.thehindu.com/gtk?aid=DC3REpZYpu", requestOptions).then(function(response) {
						if(response.ok && (response.status >= 200 &&  response.status < 400)) {     
							return response.json();
						}
					}).then(function(resp) { 
						loadcoralEmded(resp.token)
					}).catch(function(error) {
						console.error("Auth Error", error)
						loadcoralEmded()
					});
				}
				}]);
			
			}
		}
		
		function loadcoralEmded (auth){

			(function() {
				var d = document, s = d.createElement('script');
				s.src = 'https://thcmt.thehindu.com/assets/js/embed.js';
				s.async = false;
				s.defer = true;
				s.onload = function() {
					var embed = Coral.createStreamEmbed({
							id: "coral_thread",
							autoRender: true,
							rootURL: 'https://thcmt.thehindu.com',
							storyID: '67796162',
							storyURL: 'https://www.thehindu.com/news/national/varanasi-court-permits-hindu-side-to-offer-prayers-at-basement-of-gyanvapi-mosque-complex/article67796162.ece',
							events: function (events) {
								events.onAny(function(eventName, data) {
								console.log(eventName, data);
								if(eventName == "signOut.success"){
									tp.pianoId.logout()
								}
								else if(eventName == "loginPrompt"){
									document.querySelector(".thgsignin").click();
									createCookie("commentClick","true",0)
								}
								else if(eventName === 'createComment.success'){
									dataLayer = window.dataLayer || [];
									dataLayer.push ({
										'event': 'PA_click',
										'click':'Article',
										'click_type': 'action',
										'general_placement':'body',
										'detailed_placement':'',
										'goal_type':'Comments'
										})
								 }
								});
							}
						});
						if(auth){
							embed.login(auth);
						}
						window.coralLoaded = true;

				};
				(d.head || d.body).appendChild(s);
				})();
		}
		if(getUrlParameter("commentID") != null){
			document.querySelector(".comments") != null ? document.querySelector(".comments").click() : null
		}
		if(readCookie("commentClick") == "true"){
			eraseCookie('commentClick');
			tp = window["tp"] || [];
			tp.push(["init", function () {
				if (tp.user.isUserValid()) {
				
				require(['jquery','bootstrap','custom'], function ($) {
				imglazyload("comments-close")

				if(typeof loadCoaral == "function"){loadCoaral()}
				$(".comments-chat").addClass("show-comments")
				$("body").addClass("stop-scroll");
			});	
				}
				}]);
		}
</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"84e7383d4da86d93","b":1,"version":"2024.1.0","token":"eaed15cee0874f9fad025889fee44b63"}' crossorigin="anonymous"></script>
</body></html>