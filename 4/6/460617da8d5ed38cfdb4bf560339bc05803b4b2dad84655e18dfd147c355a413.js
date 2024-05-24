var comscoreC2 = '7184769';
var comscoreC1 = '2';

var callComscore = function () {
   var params = { c1: comscoreC1, c2: comscoreC2, cs_ucfr: getCS_UCFR(),
       options: { enableFirstPartyCookie: true}
   };
   if (window.COMSCORE && typeof window.COMSCORE.beacon === 'function') {
       window.COMSCORE.beacon(params);
   } else {
       window._comscore = window._comscore || [];
       window._comscore.push(params);
   }
};

var getCS_UCFR = function () {
   function getResult (knownConsent) {
       switch (knownConsent) {
           case '-1':
           case null:
           case undefined:
              return '';
           case '0':
           case false:
              return 0;
           case '1':
           case true:
              return 1;
           default:
               return '';
}
}

if (window.ueCookiesPolicy && typeof window.ueCookiesPolicy.getUserConsentStatusForVendors === 'function') {
 var policyConsent = window.ueCookiesPolicy.getUserConsentStatusForVendors('comscore'); // true || false || undefined || null
 return getResult(typeof policyConsent === 'object' ? policyConsent.comscore : undefined); // 1 || 0 || ''
} else if (window.localStorage) {
 var storageConsent = localStorage.getItem('ueUserContentComscore'); // '1' || '0' || '-1' || null
 return getResult(storageConsent); // 1 || 0 || ''
} else {
 return getResult(); // ''
}
};


var init = 

var bindCMPEvents = function () {
   window.didomiEventListeners = window.didomiEventListeners || [];
   window.didomiEventListeners.push({
       event: 'consent.changed',
       listener:    });
};

init();

var COMSCORE=function(e){r o="undefined"!=typeof encodeURIComponent?encodeURIComponent:escape,t="undefined"!=typeof decodeURIComponent?decodeURIComponent:unescape,a={};Object.defineProperty(a,"o",{value:!0});var i,c=a.t=x=a.i=void 0,f=[1,7,8,9,10],u=-1,l=!1,s=!1,p=[]; x=a.i=c=a.t=var C=[],w=!1;function _(){if(!w){w=!0;for(var e=0,n=C;e<n.length;e++){(0,n[e])()}C=[],w=!1}}ar y="_scor_uid";nction R(e,r,o){c(_);var t=function(r){!n(r?"https://sb.scorecardresearch.com/b?":"https://sb.scorecardresearch.com/b2?",e,o))},a=k(e,r,document,!1);!a.I||a.m?t(a.P):C.push((function(){var n=k(e,r,document,!1);t(n.P)}))}ar A,D=(A={F:"b9",T:document,U:,,I=D);return"undefined"==typeof _comscore&&(window._comscore=[]),I(),e.beacon=D,e.purge=I,Object.defineProperty(e,"o",{value:!0}),e}({});

