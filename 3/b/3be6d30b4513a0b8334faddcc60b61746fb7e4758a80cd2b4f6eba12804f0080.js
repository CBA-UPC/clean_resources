(self.webpackChunk_twitter_responsive_web=self.webpackChunk_twitter_responsive_web||[]).push([["shared~loader.WideLayout~loader.ProfileClusterFollow"],{268755:e=>{e.exports={queryId:"T81EidSxlvKI93iGKiDrLw",operationName:"SidebarUserRecommendations",operationType:"query",metadata:{featureSwitches:["responsive_web_graphql_exclude_directive_enabled","verified_phone_label_enabled","responsive_web_graphql_skip_user_profile_image_extensions_enabled","responsive_web_graphql_timeline_navigation_enabled"],fieldToggles:["withAuxiliaryUserLabels"]}}},724710:(e,r,t)=>{"use strict";t.d(r,{C:()=>a});var i=t(256666),n=t(801206),o=t(663140),a=(0,i.Z)({},o.ZP.ResourceNotFound,{customAction:n.Z})},321292:(e,r,t)=>{"use strict";t.d(r,{yY:()=>R,UD:()=>A,Ic:()=>F});var i=t(256666),n=t(133028),o=(t(73439),t(360917)),a=t.n(o),s=t(506899),d=t(17360),u=t(290650);const c=new s.fK.Entity("recommendations",{user:u.Z},{idAttribute:function(e){var r;return null===(r=e.user)||void 0===r?void 0:r.rest_id}});var l=t(268755),m=t.n(l),_=t(513239);const p=new s.fK.Entity("recommendations",{user:_.Z},{idAttribute:function(e){var r;return null===(r=e.user)||void 0===r?void 0:r.id_str}});var f=t(806623),v=t(755371);const Z=function(e){var r=e.apiClient,t=e.featureSwitches;return{fetch:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(0,n.Z)((0,n.Z)((0,n.Z)({},function(e){return(0,n.Z)((0,n.Z)({},v.k(e)),{},{excluded:[],pc:!0})}(t)),e),(0,f.Y)(t));return r.get("users/recommendations",o,i).then((function(e){return(0,s.Fv)(e,[p])}))},fetchSidebarUserRecommendations:function(e){return r.graphQL(m(),{profileUserId:e.user_id},(0,d.kj)((function(e){return!e.sidebar_user_recommendations}),"GQL Sidebar User Recommendations: Failed to render Sidebar User Recommendations")).then((function(e){var r,t=null!==(r=e.sidebar_user_recommendations)&&void 0!==r?r:[];return(0,s.Fv)(t.map((function(e){var r=e.token,t=e.user_results.result;return{token:r,user:t,user_id:null==t?void 0:t.rest_id}})).filter((function(e){return e.user})),[c])}))}}};var h=t(526853),b=t(753392),y=t(823803),w=t(851670),U="recommendations",E="rweb/recommendations/FETCH_REQUEST",S="rweb/recommendations/FETCH_SUCCESS",T="rweb/recommendations/FETCH_FAILURE",I={},L=function(e){var r=e.displayLocation,t=e.similarToUserId;return r+(t?"_".concat(t):"")};h.Z.register((0,i.Z)({},U,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,r=arguments.length>1?arguments[1]:void 0;if(null==r||!r.meta)return e;switch(r.type){case E:var t=L(r.meta);return(0,n.Z)((0,n.Z)({},e),{},(0,i.Z)({},t,(0,n.Z)((0,n.Z)({},e[t]),{},{fetchStatus:y.ZP.LOADING})));case T:var o=L(r.meta);return(0,n.Z)((0,n.Z)({},e),{},(0,i.Z)({},o,(0,n.Z)((0,n.Z)({},e[o]),{},{fetchStatus:y.ZP.FAILED})));case S:var s=L(r.meta),d=r.payload&&r.payload.entities?r.payload.entities:{recommendations:a()},u=(r.payload&&r.payload.result?r.payload.result:C).map((function(e){return d.recommendations[e]}));return(0,n.Z)((0,n.Z)({},e),{},(0,i.Z)({},s,(0,n.Z)((0,n.Z)({},e[s]),{},{fetchStatus:y.ZP.LOADED,recommendations:u})));default:return e}})));var g=[],C=[],F=function(e,r){var t=r.displayLocation,i=r.similarToUserId,n=e[U][L({displayLocation:t,similarToUserId:i})];return n&&n.recommendations?n.recommendations:g},A=function(e,r){var t=r.displayLocation,i=r.similarToUserId,n=e[U][L({displayLocation:t,similarToUserId:i})];return n?n.fetchStatus:y.ZP.NONE},R=function(e){return function(r,t,i){var n=t(),o=e.displayLocation,s=e.similarToUserId,d=F(n,{displayLocation:o,similarToUserId:s}),u=A(n,{displayLocation:o,similarToUserId:s})===y.ZP.LOADED;return d&&u?Promise.resolve(a()):r(function(e){return function(r,t,i){var n=i.api,o=i.featureSwitches,a=e.displayLocation,s=e.itsInterests,d=e.limit,u=void 0===d?30:d,c=e.similarToUserId,l="profile_accounts_sidebar"===a&&o.isTrue("rweb_recommendations_sidebar_graphql_enabled");return(0,b._O)(r,{request:l?n.withEndpoint(Z).fetchSidebarUserRecommendations:n.withEndpoint(Z).fetch,params:{display_location:a,itsInterests:s,limit:u,user_id:c}})({actionTypes:{REQUEST:E,SUCCESS:S,FAILURE:T},context:"FETCH_RECOMMENDATIONS",meta:{displayLocation:a,similarToUserId:c}},(function(e){if(e&&e.entities)return[(0,w.dP)(e.entities)]}))}}(e))}}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web-legacy/shared~loader.WideLayout~loader.ProfileClusterFollow.7578394a.js.map", "button");
        if(frcanada != -1){
          document.getElementsByClassName("msame_Header_name")[0].innerHTML ="Connexion";
         }else{         
            document.getElementsByClassName("msame_Header_name")[0].innerHTML ="Sign in";
         }
      }

    }, 100);

    var tiMeControl = setInterval(function () {
      console.log("waiting to initialize MeControl.")
      if (isUhfLoaded && (uhfJSCount == uhfJSCounter)) {
        console.log("MeControl ready to initialze..")
        clearInterval(tiMeControl);
        initializeMeControl();
        renderL2Header(); //this needs for rendering footer

      }

    }, 100);

  }
}
/* load UHF CSS files */
const loadStyle = function (url) {
  const link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = url;
  link.setAttribute("data-category", "uhf");
  const headScript = document.querySelector("script");



  if (link.addEventListener) {

    link.addEventListener('load', function () {
      uhfCSSCounter++;
    }, false);
  };


  /* inject CSS to DOM */
  if (headScript?.parentNode) {
    headScript.parentNode.insertBefore(link, headScript);
  }
};

/* load UHF jS and CSS */
function loadJSDependenciesHeader(jsIncludes, cssIncludes, headerHtml) {
  var dummyElement = document.createElement("div");
  dummyElement.innerHTML = cssIncludes;
  const linkArr = dummyElement.getElementsByTagName("link");
  let link;
  for (link of linkArr) {
    uhfCSSCount++;
    loadStyle(link.getAttribute("href"));
  }

  var uhfCssCount = document.querySelectorAll("link[data-category=uhf]")

  var ti = setInterval(function () {
    if (uhfCSSCounter == uhfCSSCount) {
      // needs more work when you load a bunch of CSS files quickly
      // e.g. loop from cssnum to the new length, looking
      // for the document.styleSheets[n].href === url
      // ...

      // FF changes the length prematurely :(
      document.getElementById("uhfheader").innerHTML = headerHtml;
      isUhfLoaded = true;
      clearInterval(ti);
      //initlaizeMeControl();
      const signInBtn = document.querySelector('div.msame_Header');
      signInBtn.addEventListener("click", function () {
        window.location.href = loginBtnUrl;
      })

    }
  }, 10);

  var ti2 = setInterval(function () {
    var profileLink = document.querySelector("a#mectrl_");
    if (isUhfLoaded && profileLink) {
      clearInterval(ti2);
      profileLink.setAttribute("target", "_self");
    }
  }, 500);

  /*############# load UHF js files #######################*/

}
function loadUHFJsIncludes(jsIncludes) {
  dummyElement = document.createElement("div");
  dummyElement.innerHTML = jsIncludes;
  const scriptArr = dummyElement.getElementsByTagName("script");
  let script; //tslint-ignore
  for (script of scriptArr) {
    const scriptTag = document.createElement("script");
    scriptTag.src = script.getAttribute("src");
    scriptTag.addEventListener("load", function () {
      uhfJSCounter++;
    })
    document.getElementsByTagName("body")[0].appendChild(scriptTag);
    uhfJSCount++;
  }
}
xhr.send();

/* ########### render L2 Header  ################*/
function renderL2Header() {

  if (window.LoggedInUserAuthConext.emailparsed) //user logged in
  {
    document.getElementById('sub-nav').setAttribute('data-isauthenticated', "true");
  }

  if (window.LoggedInUserAuthConext && window.LoggedInUserAuthConext.userType == "internal") {
    document.getElementById('sub-nav').setAttribute('data-isexternal', "false");
  }

  var l2NavJsUrl = document.getElementById("careers-feedbackUrlId").innerHTML;
  var xhrl2 = new XMLHttpRequest();
  xhrl2.open('GET', l2NavJsUrl);
  xhrl2.onload = function () {
    l2NavJsUrl = l2NavJsUrl.replace("asset-manifest.json", "");
    var l2Url = xhrl2.responseText;
    var l2url2 = JSON.parse(l2Url);
    for (let key in l2url2) {
      var forl2urlKeys = l2url2[key];
      var forl2urlSrc = l2NavJsUrl + forl2urlKeys;
      var forl2urlScript = document.createElement("script");
      forl2urlScript.src = forl2urlSrc;
      document.head.appendChild(forl2urlScript);
    }
    loadRecommendBundle();
    loadFreBundle();
    loadWcpBundle();
    loadSupportBundle();
  }
  xhrl2.send();

}

function Encodeinitialize(encodeuserProfileCookieString) {
  
  var encodeuserProfileCookieStringParsed;
  window.LoggedInUserAuthConext = {};
  encodeuserProfileCookieStringParsed = JSON.parse(encodeuserProfileCookieString);
  var encodeFirstname = (encodeuserProfileCookieStringParsed && (encodeuserProfileCookieStringParsed.firstName || encodeuserProfileCookieStringParsed.name)) || "";
  var encodelastName = (encodeuserProfileCookieStringParsed && encodeuserProfileCookieStringParsed.lastName) || "";
  var encodegiven_name = (encodeuserProfileCookieStringParsed && encodeuserProfileCookieStringParsed.given_name) || ""; 
  var encodelegalFirstName = (encodeuserProfileCookieStringParsed && encodeuserProfileCookieStringParsed.legalFirstName) || "";  
  var encodefamily_name = (encodeuserProfileCookieStringParsed && encodeuserProfileCookieStringParsed.family_name) || "";
  var encodeemail = (encodeuserProfileCookieStringParsed && encodeuserProfileCookieStringParsed.email) || "";
  var idp = (encodeuserProfileCookieStringParsed && encodeuserProfileCookieStringParsed.idp) || "";
  

  var emailparsed =encodeemail;
  if(encodeemail != ""){
    emailparsed =atob(encodeemail);
  }
  
  var profileName;
  if (encodelegalFirstName != "") { 
    profileName = encodelegalFirstName;
  }
  else if (encodeFirstname != "") {  
    profileName = encodeFirstname;
  }
  else if (encodegiven_name != "") { 
    profileName = encodegiven_name;
  } else {   
    profileName = "";
  }
  

  window.LoggedInUserAuthConext.given_nameparsed = atob(encodegiven_name);
  window.LoggedInUserAuthConext.family_nameparsed = atob(encodefamily_name);
  window.LoggedInUserAuthConext.lastNameparsed = atob(encodelastName);
  window.LoggedInUserAuthConext.legalFirstNameparsed = atob(encodelegalFirstName);
  window.LoggedInUserAuthConext.nameparsed = atob(encodeFirstname);
  window.LoggedInUserAuthConext.emailparsed = emailparsed;
  window.LoggedInUserAuthConext.idp = idp;
  window.LoggedInUserAuthConext.profileName =atob(profileName);



  var msftemail = emailparsed.indexOf("microsoft.com");
  if (msftemail >=0) {
    window.LoggedInUserAuthConext.userType = "internal";
    //set this to show internal employee links in the L2 header
  }
  else{
    window.LoggedInUserAuthConext.userType = "external";
  }

}


function initializeMeControl() {

  var userProfileCookieStringParsed;
  var encodeuserProfileCookieString = getProfileCookie("EncodedUserProfile");
  var encodeuserProfileCookieString = encodeuserProfileCookieString.replaceAll("'", "\"");

  function getUserAuthDetailsFromCookie() {
    var userProfileCookieString = getProfileCookie("UserProfile");
    var userProfileCookieString = userProfileCookieString.replaceAll("'", "\"");
    window.LoggedInUserAuthConext = {};
    if (userProfileCookieString && userProfileCookieString.length != 0) {

      userProfileCookieStringParsed = JSON.parse(userProfileCookieString);
      var nameparsed = (userProfileCookieStringParsed && (userProfileCookieStringParsed.firstName || userProfileCookieStringParsed.name)) || "NA";
      var given_nameparsed = (userProfileCookieStringParsed && userProfileCookieStringParsed.given_name) || "NA";
      var family_nameparsed = (userProfileCookieStringParsed && userProfileCookieStringParsed.family_name) || "NA";
      var lastNameparsed = (userProfileCookieStringParsed && userProfileCookieStringParsed.lastName);
      var legalFirstNameparsed = (userProfileCookieStringParsed && userProfileCookieStringParsed.legalFirstName) || "NA";
      var emailparsed = (userProfileCookieStringParsed && userProfileCookieStringParsed.email) || "NA";
      var idp = (userProfileCookieStringParsed && userProfileCookieStringParsed.idp) || "NA";

      window.LoggedInUserAuthConext.nameparsed = nameparsed;
      window.LoggedInUserAuthConext.given_nameparsed = given_nameparsed;
      window.LoggedInUserAuthConext.family_nameparsed = family_nameparsed;
      window.LoggedInUserAuthConext.lastNameparsed = lastNameparsed;
      window.LoggedInUserAuthConext.legalFirstNameparsed = legalFirstNameparsed;
      window.LoggedInUserAuthConext.emailparsed = emailparsed;
      window.LoggedInUserAuthConext.idp = idp;

      var profileName;
      if (legalFirstNameparsed != "NA") {
        profileName = legalFirstNameparsed;
      }
      else if (nameparsed != "NA") {
        profileName = nameparsed;
      }
      else if (given_nameparsed != "NA") {
        profileName = given_nameparsed;
      } else {
        profileName = "NA";
      }
      window.LoggedInUserAuthConext.profileName = profileName;

      if (lastNameparsed != '') {
        var lastNamefinal = ',' + lastNameparsed;
      }

      var msftemail = emailparsed.indexOf("microsoft.com");
      var msftidp = idp.indexOf("microsoft.com");
      if (msftemail >=0) {
        window.LoggedInUserAuthConext.userType = "internal";
        //set this to show internal employee links in the L2 header
      }
      else{
        window.LoggedInUserAuthConext.userType = "external";
      }

    } // end of cookie parsing;
  } //getUserAuthDetailsFromCookie() end

  if (encodeuserProfileCookieString && encodeuserProfileCookieString.length != 0) {
   
    Encodeinitialize(encodeuserProfileCookieString);
  } else {
    
    getUserAuthDetailsFromCookie();
  }

  //initialize MeControl object
  var mecontrolShellOptions;

  if (userProfileCookieStringParsed || encodeuserProfileCookieString) {
    mecontrolShellOptions = {

      meControlOptions: {
        apiGeneration: 'GEN2',
        authProviderConfig: {
          type: 'partnerManaged',
          appSignInUrl: 'https://publish-p57652-e456038.adobeaemcloud.com/content/microsoftcareersvnext/us/en/signIn.html',
          appSignInToUrl: 'https://publish-p57652-e456038.adobeaemcloud.com/content/microsoftcareersvnext/us/en/signIn.html',
          appSignOutUrl: 'https://publish-p57652-e456038.adobeaemcloud.com/content/microsoftcareersvnext/us/en/signout',
          appSwitchUrl: '',
          appSwitchToUrl: '',
          signOutFromApp: signOutFromApp,
          signIn: signIn,
          msa: {

          },
          aad: {

          }
        },
        currentAccount: {
          type: 'msa',
          authenticatedState: (encodeuserProfileCookieString && 'signedIn') || "notSignedIn",
          memberName: window.LoggedInUserAuthConext.emailparsed || "",
          firstName: decodeBase64String(window.LoggedInUserAuthConext.profileName) || "",
          lastName: decodeBase64String(window.LoggedInUserAuthConext.lastNameparsed) || "",
          displayName: window.LoggedInUserAuthConext.emailparsed || ""
        }
      }

    };
    if (window.msCommonShell) {
      window.msCommonShell.load(mecontrolShellOptions);
      isMeControlLoaded = true;

    }

    // If msCommonShell doesn't yet exist...
    else {

      // Load the me control once msCommonShell is ready
      window.onShellReadyToLoad = function () {
        window.onShellReadyToLoad = null;
        window.msCommonShell.load(mecontrolShellOptions);
        isMeControlLoaded = true;
      };
    }

  }
  if (window.msCommonShell != undefined && mecontrolShellOptions != undefined) {

    isMeControlLoaded = true;

  }

}

//function to parse user profile cookie from cookie collection
function getProfileCookie(cName) {


  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split('; ');
  let res = "";
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);

  })
  return res;
}

//sogn out event handler from MeControl
function signOutFromApp() {

  window.location.href = "/bin/msft/externalsignout"

}
function signIn() {


  window.location.href = "/bin/msft/externalsignin"

}


function loadSupportBundle() {
  var supportUrl = document.getElementById("careers-supportUrlId").innerHTML;
  var xhrsupport = new XMLHttpRequest();
  xhrsupport.open('GET', supportUrl);
  xhrsupport.onload = function () {
    supportUrl = supportUrl.replace("asset-manifest.json", "");
    var sup1 = xhrsupport.responseText;
    var sup2 = JSON.parse(sup1);
    for (let key in sup2) {
      var forsup2Keys = sup2[key];
      var forsup2Src = supportUrl + forsup2Keys;
      var forsup2Script = document.createElement("script");
      forsup2Script.src = forsup2Src;
      document.head.appendChild(forsup2Script);
    }
  }
  xhrsupport.setRequestHeader('x-forward-module', 'support');
  xhrsupport.send();
}

function loadFreBundle() {
  var fedBackFre = document.getElementById("careers-feedbackUrlId").innerHTML;
  var freUrl = fedBackFre.replace("aem", "fre")
  var xhrfre = new XMLHttpRequest();
  xhrfre.open('GET', freUrl);
  xhrfre.onload = function () {
    freUrl = freUrl.replace("asset-manifest.json", "");
    var fre1 = xhrfre.responseText;
    var fre2 = JSON.parse(fre1);
    for (let key in fre2) {
      var forfre2Keys = fre2[key];
      if (forfre2Keys.slice(forfre2Keys.length - 2, forfre2Keys.length) == "js") {
        var forfre2Src = freUrl + forfre2Keys;
        var forfre2Script = document.createElement("script");
        forfre2Script.src = forfre2Src;
        document.head.appendChild(forfre2Script);
      }
    }
  }
  xhrfre.send();
}
/*load Recommend Jobs Js*/
function loadRecommendBundle() {
  var recommendBaseUrl = document.getElementById("careers-feedbackUrlId").innerHTML;
  var recommendJsUrl = recommendBaseUrl.replace("aem", "dist_widget_aem")
  recommendBaseUrl = recommendBaseUrl.replace("aem", "dist_widget_aem")
  var xhrrecommend = new XMLHttpRequest();
  xhrrecommend.open('GET', recommendBaseUrl);
  xhrrecommend.onload = function () {
  recommendJsUrl = recommendJsUrl.replace("asset-manifest.json", "");
    var recommendTextRespone = xhrrecommend.responseText;
    var recommendJson = JSON.parse(recommendTextRespone);
    for (let key in recommendJson) {
      var forRecommend2Keys = recommendJson[key];
      if (forRecommend2Keys.slice(forRecommend2Keys.length - 2, forRecommend2Keys.length) == "js") {
        var forRecommend2Src = recommendJsUrl+ forRecommend2Keys;
        var forRecommend2Script = document.createElement("script");
        forRecommend2Script.src = forRecommend2Src;
        document.head.appendChild(forRecommend2Script);
      }
    }
  }
  xhrrecommend.send();
}

function loadWcpBundle() {
  var fedBackWcp = document.getElementById("careers-feedbackUrlId").innerHTML;
  var wcpUrl = fedBackWcp.replace("aem", "wcp")
  var xhrwcp = new XMLHttpRequest();
  xhrwcp.open('GET', wcpUrl);
  xhrwcp.onload = function () {
    wcpUrl = wcpUrl.replace("asset-manifest.json", "");
    var wcp1 = xhrwcp.responseText;
    var wcp2 = JSON.parse(wcp1);
    for (let key in wcp2) {
      var forwcp2Keys = wcp2[key];
      var forwcp2Src = wcpUrl + forwcp2Keys;
      var forwcp2Script = document.createElement("script");
      forwcp2Script.src = forwcp2Src;
      document.head.appendChild(forwcp2Script);
    }
  }
  xhrwcp.send();
}

function decodeBase64String(base64String) {
  var decodedString= new TextDecoder().decode(Uint8Array.from(base64String, c=>c.charCodeAt(0)));
  return decodedString;
 }

 var ti3 = setInterval(function () {
 if (document.getElementById("mectrl_currentAccount_picture")){
  clearInterval(ti3);
  if(window.LoggedInUserAuthConext.userType!="internal"){
   document.getElementById("mectrl_currentAccount_picture").setAttribute("tabindex","-1");
   document.getElementById("mectrl_currentAccount_picture").setAttribute("href","");
 }
}
 },500);
var instrument_key = document.getElementById("careers-analyticskey").innerHTML;
var propertyconfig = document.getElementById("careers-propertyconfig").innerHTML;
var config = {
  instrumentationKey: instrument_key,
  channelConfiguration:{ // Post channel configuration
      eventsLimitInMem: 50
  },
  propertyConfiguration: { // Properties Plugin configuration 
  env: propertyconfig // Environment can be set to PPE or PROD as needed. 
  },
  webAnalyticsConfiguration:{ // Web Analytics Plugin configuration

    //urlCollectQuery:true,

      autoCapture: {

        scroll: false,

        pageView: false,

        onLoad: true,

        onUnload: true,

        click: true,

        resize: false,

        jsError: false

      }

  }
}; 

function audienceInterval() {

  var audience;
  if (document.cookie.indexOf("UserProfile") < 0) {
    audience = "anonymous";
    isAnonymous = true;
    clearInterval(intevalTime);
  }
  else {
     isAnonymous = false;
  }

  if (!isAnonymous &&  window.LoggedInUserAuthConext) {
    clearInterval(intevalTime);
  }
  if (!isAnonymous && window.LoggedInUserAuthConext && window.LoggedInUserAuthConext.idp == "microsoft.onmicrosoft.com") {
    audience = "internal"
	clearInterval(intevalTime);
  }
  else if (!isAnonymous && window.LoggedInUserAuthConext && window.LoggedInUserAuthConext.idp != "microsoft.onmicrosoft.com") {
    audience = "external"
	clearInterval(intevalTime);
  }
  else {
    audience = "anonymous"
  }

  if (isAnonymous || window.LoggedInUserAuthConext) {
    var uri = document.URL;
    var overrideValues = {
      isAuto: false,
      //isLoggedIn : window.sessionStorage.getItem() we may need session key for this state
      behavior: 14,
      uri: uri,
      referrerUri: document.referrer || window.location.hostname,
      pageName: uri.split("?")[0].substring(uri.lastIndexOf("/")).split(".")[0],
      pageType: "AEM",
      pageTags: { aud: audience }
    }
    trackAnalyticsEvent("PageView", audience, overrideValues);
  }
}
 const awaanalytics = new oneDS.ApplicationInsights;
    function intializeAdobeAnalytics(config) {
      console.log("intializeAdobeAnalytics");
      //Initialize SDK
      awaanalytics.initialize(config, []);
      console.log("intializeAdobeAnalytics completed.");
      //log cutom event on load
      /*var uri = document.URL;
      var overrideValues = {
        isAuto: false,
        //isLoggedIn : window.sessionStorage.getItem() we may need session key for this state
        behavior: 14,
        uri: uri,
        referrerUri: document.referrer || window.location.hostname,
        pageName: uri.split("?")[0].substring(uri.lastIndexOf("/")),
        pageType: "AEM",
        pageTags: { aud: audience}
      }*/

      //console.log(overrideValues);
      //awaanalytics.capturePageView(overrideValues);
      //trackAnalyticsEvent("PageView",audience,overrideValues);
    };

intializeAdobeAnalytics(config);
var intevalTime = false;
var isAnonymous = false;
intevalTime = setInterval(audienceInterval,500);


function trackAnalyticsEvent(eventType, userType, overrideValues) {

        try {
            if(eventType && eventType == "PageAction") {
                //call adobe analytics function
             awaanalytics.capturePageAction(null, overrideValues);
            }
            else{
                //call adobe analytics function
                awaanalytics.capturePageView(overrideValues);
            }
        }
catch (e) {
            console.log("Adobe Analytics event firing failed");
        }


}