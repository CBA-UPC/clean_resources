// For license information, see `https://assets.adobedtm.com/92c238f848e3/7634fe33bd4f/ed2152575416/RC622e10283cf14079857536997034ee5f-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/92c238f848e3/7634fe33bd4f/ed2152575416/RC622e10283cf14079857536997034ee5f-source.min.js', "_satellite.getVar(\"d_tracking_enabled\")||(_da_.da_noAutoPageTrack=1);");&&e.forEach===p)e.forEach(o,r);else if(e.length===+e.length){for(var t=0,n=e.length;t<n;t++)if(t in e&&o.call(r,e[t],t,e)===a)return}else for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&o.call(r,e[i],i,e)===a)return}function c(e,o){return-1!==e.indexOf(o)}function t(r){return o(i.call(arguments,1),function(e){for(var o in e)void 0!==e[o]&&(r[o]=e[o])}),r}function r(e){var r={};return o(e,function(e,o){"[object String]"==Object.prototype.toString.call(e)&&0<e.length&&(r[o]=e)}),r}var s,n,a={},p=Array.prototype.forEach,i=Array.prototype.slice,d=(window.console,window.navigator),l=window.document,_=d.userAgent,u="https:"==l.location.protocol?"https://":"http://",g=window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,f=(g||-1!=_.indexOf("MSIE")||_.indexOf("Mozilla"),!!window.XDomainRequest),k={api_host:u+"phenomtrackapi-ca.phenompeople.com",cookie_name:"Per_UniqueID",login_jsession_cookie_name:"PHPPPE_STID",gdpr_cookie_name:"PHPPPE_GCC",secure_cookie:!0,cookie_expiration:365,pt_param_type_create:"pt_param",pt_cookie_type_create:"pt_cookie",uid_map_event:"uid_needs_to_map",session_cookie:["PHPPPE_ACT","JSESSIONID"],initial_ref_cookie:"in_ref",campaign_kwords:"utm_source utm_medium utm_campaign utm_content utm_term gclid gh_src src",in_ref_chng_cookie:"P_REF_CNG",exclusion_domain:"login.microsoftonline.com,secure.indeed.com,onedrive.live.com,account.live.com,signup.live.com,login.live.com,ca-chat-bot-new.phenompeople.com".split(","),coockies_to_delete:["Per_UniqueID","gclid","overlayDismissed","P_REF_CNG"],exclusion_event:"pt_page_view,static_page_view".split(","),exclusion_page:"chatbot".split(","),phenom_app_refNum:"app_refNum"},m=function(e,o){e=decodeURIComponent(e),o=o.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");o=new RegExp("[\\?&]"+o+"=([^&#]*)").exec(e);return null===o||o&&"string"!=typeof o[1]&&o[1].length?"":decodeURIComponent(o[1]).replace(/\+/g," ")},v=function(){var e=(screen.height*screen.width).toString(16);return h()+"-"+e+"-"+Math.floor(65536*(1+Math.random())).toString(16).substring(1)+"-"+h()};function h(){for(var e=+new Date,o=0;e==+new Date;)o++;return e.toString(16)+o.toString(16)}var w={get:function(e){for(var o=e+"=",r=l.cookie.split(";"),t=0;t<r.length;t++){for(var n=r[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return decodeURIComponent(n.substring(o.length,n.length))}return null},set:function(e,o,r,t){var n,i,a;a=e,(E.isEventEnabled?!c(E.oneTrustcookies,a)&&E.cookieEventReceived:("sticky"!==E.stickyCookie()||w.get(k.gdpr_cookie_name))&&"d"!=w.get(k.gdpr_cookie_name)&&"s"!=w.get(k.gdpr_cookie_name)||!c(k.coockies_to_delete,a))&&(n=a="",r&&((i=new Date).setTime(i.getTime()+24*r*60*60*1e3),a="; expires="+i.toGMTString()),t&&"https:"==window.location.protocol&&(n="; secure"),l.cookie=e+"="+o+"; "+a+"; path=/;SameSite=None"+n)},remove:function(e){var o="";k.secure_cookie&&"https:"==window.location.protocol&&(o="; secure"),l.cookie=e+"=; max-age=0; path=/;SameSite=None"+o}},E={setinitialReferral:function(){w.set(k.initial_ref_cookie,encodeURIComponent(l.referrer),0,k.secure_cookie)},getinitialReferral:function(){var e=decodeURIComponent(w.get(k.initial_ref_cookie))?decodeURIComponent(w.get(k.initial_ref_cookie)):"direct";return"null"===e?"direct":e},campaignParams:function(){var r,e=k.campaign_kwords.split(" "),t="",n={};return o(e,function(e){if((t=m(l.URL,e)).length)return E.deletecampaignParams(),!1}),o(e,function(e){var o;(t=m(l.URL,e)).length&&(o=t.split(/[(/?)]/)[0],w.set(e,o,0,k.secure_cookie)),(r=w.get(e))&&(n[e]=r)}),n},deletecampaignParams:function(){var e=k.campaign_kwords.split(" ");o(e,function(e){w.remove(e)})},searchEngine:function(e){return 0===e.search("https?://(.*)google.([^/?]*)")?"google":0===e.search("https?://(.*)bing.com")?"bing":0===e.search("https?://(.*)yahoo.com")?"yahoo":0===e.search("https?://(.*)duckduckgo.com")?"duckduckgo":null},searchInfo:function(e){var o=E.searchEngine(e),r="yahoo"!=o?"q":"p",t={};return null!==o&&(t.pt_search_engine=o,(o=m(e,r)).length)&&(t.pt_keyword=o),t},browser:function(e,o,r){o=o||"";return r||c(e," OPR/")?c(e,"Mini")?"Opera Mini":"Opera":/(BlackBerry|PlayBook|BB10)/i.test(e)?"BlackBerry":c(e,"IEMobile")||c(e,"WPDesktop")?"Internet Explorer Mobile":c(e,"Edge")?"Microsoft Edge":c(e,"FBIOS")?"Facebook Mobile":c(e,"Chrome")?"Chrome":c(e,"CriOS")?"Chrome iOS":c(e,"UCWEB")||c(e,"UCBrowser")?"UC Browser":c(e,"FxiOS")?"Firefox iOS":c(o,"Apple")?c(e,"Mobile")?"Mobile Safari":"Safari":c(e,"Android")?"Android Mobile":c(e,"Konqueror")?"Konqueror":c(e,"Firefox")?"Firefox":c(e,"MSIE")||c(e,"Trident/")?"Internet Explorer":c(e,"Gecko")?"Mozilla":""},browserVersion:function(e,o,r){o={"Internet Explorer Mobile":/rv:(\d+(\.\d+)?)/,"Microsoft Edge":/Edge\/(\d+(\.\d+)?)/,Chrome:/Chrome\/(\d+(\.\d+)?)/,"Chrome iOS":/CriOS\/(\d+(\.\d+)?)/,"UC Browser":/(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,Safari:/Version\/(\d+(\.\d+)?)/,"Mobile Safari":/Version\/(\d+(\.\d+)?)/,Opera:/(Opera|OPR)\/(\d+(\.\d+)?)/,Firefox:/Firefox\/(\d+(\.\d+)?)/,"Firefox iOS":/FxiOS\/(\d+(\.\d+)?)/,Konqueror:/Konqueror:(\d+(\.\d+)?)/,BlackBerry:/BlackBerry (\d+(\.\d+)?)/,"Android Mobile":/android\s(\d+(\.\d+)?)/,"Internet Explorer":/(rv:|MSIE )(\d+(\.\d+)?)/,Mozilla:/rv:(\d+(\.\d+)?)/}[E.browser(e,o,r)];return null!=o&&(r=e.match(o))?parseFloat(r[r.length-2]):null},os:function(){var e=_;return/Windows/i.test(e)?/Phone/.test(e)||/WPDesktop/.test(e)?"Windows Phone":"Windows":/(iPhone|iPad|iPod)/.test(e)?"iOS":/Android/.test(e)?"Android":/(BlackBerry|PlayBook|BB10)/i.test(e)?"BlackBerry":/Mac/i.test(e)?"Mac OS X":/Linux/.test(e)?"Linux":/CrOS/.test(e)?"Chrome OS":""},device:e,referringDomain:function(e){e=e.split("/");return 3<=e.length?e[2]:""},properties:function(){var e=r({os:E.os(),browser:E.browser(_,d.vendor,window.opera),referrer:l.referrer,referring_domain:E.referringDomain(l.referrer),uas:_,device:E.device(_)});return e.current_url=window.location.href,e.browser_version=E.browserVersion(_,d.vendor,window.opera),e.screen_height=screen.height,e.screen_width=screen.width,e.pt_timestamp=Date(),e.pt_UTC_timestamp=(new Date).toUTCString(),e.pt_lib="web",e.lib_version="92",e},pageviewInfo:function(e){return r({pt_page:e,pt_referrer:l.referrer,pt_browser:E.browser(_,d.vendor,window.opera),pt_platform:E.os()})},oneTrustcookies:[],externalscriptload:!1,cookieEventReceived:!1,isEventEnabled:!1,nonTxmEvenListener:!1,stickyCookie:function(){var e;try{e=phApp.ddo.siteConfig.data.siteSettings.gdpr?phApp.ddo.siteConfig.data.siteSettings.gdpr.cookieType:""}catch(e){}return e}};function y(e){this.storage=w;try{0!=(r=phApp.ddo.siteConfig.data.siteSettings.gdpr.cookieMapConfig&&phApp.ddo.siteConfig.data.siteSettings.gdpr.cookieMapConfig.nonEssential?phApp.ddo.siteConfig.data.siteSettings.gdpr.cookieMapConfig.nonEssential:[])&&(k.coockies_to_delete=r)}catch(e){}if("sticky"===E.stickyCookie()&&!w.get(k.gdpr_cookie_name)||"d"==w.get(k.gdpr_cookie_name)||"s"==w.get(k.gdpr_cookie_name))for(var o=0;o<k.coockies_to_delete.length;o++)w.remove(k.coockies_to_delete[o]);else{var r=m(l.URL,"uid");r?this.storage.get(k.cookie_name)&&"null"!=w.get(k.cookie_name)?(n={trait2:e,new_uid:r,ex_uid:w.get(k.cookie_name)},E.token=e,s.track(k.uid_map_event,n)):(E.createType=k.pt_param_type_create,w.set(k.cookie_name,r,k.cookie_expiration,k.secure_cookie)):this.storage.get(k.cookie_name)&&null!=w.get(k.cookie_name)||(E.createType=k.pt_cookie_type_create,w.set(k.cookie_name,v(),k.cookie_expiration,k.secure_cookie))}}function P(){}function S(){P.prototype.persistence=P.prototype.cookie=new y(E.token);var o,e,r,t,n=E.referringDomain(window.location.href),i=E.referringDomain(l.referrer);if(i&&n!=i)if(w.get(k.in_ref_chng_cookie))w.remove(k.in_ref_chng_cookie);else{for(var a=!0,c=0;c<k.exclusion_domain.length;c++)if(new RegExp(k.exclusion_domain[c]).test(i)){a=!1;break}a&&!E.extTrk&&(E.setinitialReferral(),E.deletecampaignParams())}if(E.externalscriptload)s.addCookieTrk();else{E.externalscriptload=!0,s.track_page_view();try{E.extTrk||(o=s.getScriptURL()+"/phenomapptrack.min.js",e=function(){trkApp.init()},r=l.getElementsByTagName("head")[0],(t=l.createElement("script")).type="text/javascript",t.src=o,t.onload=e,t.onerror=function(){var e={};e.error_source=o,e.error_severity="Error",s.track("ResourceErrorTracker",e)},r.appendChild(t))}catch(e){}}}P.prototype.init=function(e,o,r,t){var n,i,a,c;E.isEventEnabled=r,E.token=e,E.extTrk=o,r||t?r?(n=5,i=setInterval(function(){E.cookieEventReceived?clearInterval(i):0==n&&(clearInterval(i),S()),n--},250)):t&&(console.log("came to nonTXM block"),window.parent.postMessage("CookieConsentTXMHandshake","*"),a=5,c=setInterval(function(){E.nonTxmEvenListener?clearInterval(c):0==a&&(clearInterval(c),console.log("updateCookieconsent event is not rised"),w.set(k.gdpr_cookie_name,"d",k.cookie_expiration,k.secure_cookie),S()),a--},250)):S()},window.addEventListener("message",function(e){try{var o;"UpdateCookieConsent"==e.data.eventName&&(console.log("came to updateCookieconsent listener"),E.nonTxmEvenListener=!0,o=e.data.data,console.log("EventDetail : "+o.PHPPPE_GCC),w.set(k.gdpr_cookie_name,o.PHPPPE_GCC,k.cookie_expiration,k.secure_cookie),S())}catch(e){console.log(e)}}),P.prototype.gaEvent=function(e){"function"==typeof ga&&(ga("set","&uid",e),ga("set","dimension2",e),ga("send","event","page","view",{UID:e}))},P.prototype.device=e,P.prototype.send_request=function(e,o){var o=encodeURIComponent(JSON.stringify(o)),r=g?new XMLHttpRequest:f?new XDomainRequest:new ActiveXObject("Microsoft.XMLHTTP");r.open("POST",e,!0),f||r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.send(o)},P.prototype.track=function(e,o){if(function(e,o){{if(!c(k.exclusion_event,e))return 1;for(var r=0;r<k.exclusion_page.length;r++)return!new RegExp(k.exclusion_page[r]).test(o)}}(e,l.location.href)){if("sticky"===E.stickyCookie()&&!w.get(k.gdpr_cookie_name)||"d"==w.get(k.gdpr_cookie_name)||"s"==w.get(k.gdpr_cookie_name))for(var r=0;r<k.coockies_to_delete.length;r++)w.remove(k.coockies_to_delete[r]);else null==w.get(k.cookie_name)&&(E.createType=k.pt_cookie_type_create,w.set(k.cookie_name,v(),k.cookie_expiration,k.secure_cookie));o=o||{},o=t({},E.properties(),E.campaignParams(),E.searchInfo(l.referrer),E.pageviewInfo(l.location.href),o);e={event:e,clientToken:E.token,createType:E.createType,initialReferral:E.getinitialReferral(),uid:w.get(k.cookie_name),pt_session:m(l.URL,"pjid")?m(l.URL,"pjid"):w.get(k.session_cookie[0])?w.get(k.session_cookie[0]):w.get(k.session_cookie[1]),phenomRefnum:m(l.URL,"refNum")?m(l.URL,"refNum"):E.token,properties:o,eventEnabled:E.isEventEnabled,eventTriggered:E.cookieEventReceived};w.get(k.login_jsession_cookie_name)&&(e.PHPPPE_STID=w.get(k.login_jsession_cookie_name)),w.get(k.gdpr_cookie_name)&&(e.PHPPPE_GCC=w.get(k.gdpr_cookie_name)),this.send_request(k.api_host+"/track",e),delete E.createType}},P.prototype.track_page_view=function(e){this.gaEvent(w.get(k.cookie_name)),this.track("pt_page_view")},P.prototype.extend=t,window.phenomevent=s=new P,P.prototype.getScriptURL=function(){var e=l.querySelector('script[src$="phenomtrack.min.js"]')||l.currentScript;return(e=e.src).replace("/"+e.split("/").pop(),"")},P.prototype.timeSpent=function(){function e(){r=+(r=new Date)}function o(){var e={};t=+(t=new Date),r=+r,e.TimeSpent=t-r,r&&s.track("TimeSpentOnPage",e),r=+(r=new Date)}var r,t;window.addEventListener?window.addEventListener("load",e):window.attachEvent("onload",e),window.addEventListener("focus",function(e){r=+(r=new Date)},!1);window.addEventListener("blur",o,!1),window.addEventListener?window.addEventListener("beforeunload",o,!1):window.attachEvent?window.attachEvent("onbeforeunload",o):window.onunload=o},P.prototype.pageResponseTimings=function(){try{var e=performance.timing,o={};o.pageLoadTime=e.loadEventEnd-e.navigationStart,o.connectionTime=e.connectEnd-e.connectStart,o.requestTime=e.responseEnd-e.requestStart,o.fetchTime=e.responseEnd-e.fetchStart,o.ttfbTime=e.responseStart-e.requestStart,s.track("PageResponseTimings",o)}catch(e){}},P.prototype.check_PerformanceEntries=function(){try{var e,o,r,t=window.performance.getEntriesByType("resource"),n={};for(e in Object.keys(t))-1==t[e].name.indexOf("trk.gif")&&-1==t[e].name.indexOf("/track")&&((o={}).url=t[e].name,o.initiatorType=t[e].initiatorType,o.dur=t[e].duration.toFixed(12),r=o.url.substring(o.url.lastIndexOf("/")+1))&&(n[r=r.replace(/[^\w\s]/gi,"_")]=o);s.track("ResourceLoadTimings",{pt_resources:n})}catch(e){}},P.prototype.trackWarn=function(){var o=console.warn;console.warn=function(){var e={};e.error_message=arguments[0],e.error_severity="Warning",s.track("ErrorTrackerWarn",e),o.apply(console,arguments)}},P.prototype.trackError=function(){var o=console.error;console.error=function(){var e={};e.error_message=arguments[0],e.error_severity="Error",s.track("ErrorTracker",e),o.apply(console,arguments)}},P.prototype.trackJSError=function(){try{window.onerror=function(e,o,r,t,n,i){var a={};a.error_message=e+n,-1<e.indexOf("Script")&&(a.error_rootcause="Uncaught error in third party resource file",a.error_source="Third party source file"),a.error_source=a.error_source+" at lineNumber "+r+" in "+o,a.file=window.location.toString,a.error_severity="Error",a.error_file=i,s.track("ErrorTracker",a)}}catch(e){}},l.addEventListener("ph:gdpr:OptanonWrapperUpdated",function(e){try{var o=e.detail;if(E.cookieEventReceived=!0,E.oneTrustcookies.length=0,o.hasOwnProperty("cookieMap")){var r,t=o.disabledCookies;for(r in o.cookieMap)if(c(t,r))for(var n=o.cookieMap[r],i=0;i<n.length;i++)w.remove(n[i]),E.oneTrustcookies.push(n[i])}S()}catch(e){}}),P.prototype.trackNWError=function(){window.addEventListener&&window.addEventListener("error",function(e){try{var o={};e.target.nodeName&&e.target.src?(o.error_message="Resource Load Error",o.error_for=e.target.nodeName,o.error_source=e.target.src,o.error_severity="Error",s.track("ResourceErrorTracker",o)):e.message&&e.target.messageResourcePath&&(o.error_message="Resource Load Error",o.error_for=e.message,o.error_source=e.target.messageResourcePath,o.error_severity="Error",s.track("ResourceErrorTracker",o))}catch(e){}},!0)},P.prototype.addCookieTrk=function(){var e={PHPPPE_ACT:"pjid",JSESSIONID:"pjid",Per_UniqueID:"uid",in_ref:"p_in_ref",gh_src:"gh_src",src:"src",iisn:"iisn",iis:"iis",iisc:"iisc",iisp:"iisp"};try{var o,r,t="",n=encodeURIComponent("=");for(o in e)e.hasOwnProperty(o)&&(r=null!==(r=w.get(o))||null!==(r=m(l.URL,o))&&""!==r?r:function(e,o){if(null!==e)for(var r=o+"=",t=e.split("&"),n=0;n<t.length;n++){var i=t[n];if(0==i.indexOf(r))return decodeURIComponent(i.substring(r.length,i.length))}return null}(w.get("ext_trk"),o))&&(t=t+e[o]+n+r+"&");(t=t+"p_lang"+n+w.get("VISITED_LANG")+"_"+w.get("VISITED_COUNTRY")+"&refNum"+n+E.token)&&w.set("ext_trk",t,!1,k.secure_cookie)}catch(e){}}}();