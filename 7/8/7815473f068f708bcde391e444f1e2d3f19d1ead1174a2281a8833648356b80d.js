![function(e,t,n){"use strict";t.a=function(){var e=document.getElementById("catchscript").getAttribute("data-appid");return void 0!==e&&e}},,,,,function(e,t,n){"use strict";n.r(t);var o=n(1),i=n(0),r=n.n(i);unction c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=["offsetParent","offsetHeight","offsetLeft","offsetTop","offsetWidth","clientHeight","clientWidth"],u=function(){},d=1e3,l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u,i=arguments.length>3?arguments[3]:void 0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.app_id=i,this.onEnabled=n,this.onDisabled=o,this.timeout=t,this.counter=0,this.loadedImg=!0,this.imageDetected=!1,this._insertAd()}var t,n,o;return t=e,(n=[{key:"startChecking",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;this.counter=t+1,this._check()?this.onEnabled():this.onDisabled(),t>0?this._timeoutIdentifier=setTimeout(function(){return e.startChecking(t-1)},this.timeout):this._removeAd()}},{key:"destroy",value:,{key:"checkAttributes",value:function(e,t){e.reduce(function(e,n){return e||void 0!==t[n]&&!t[n]},!1)}},{key:"_check",value:function(){if(this._bait||this._insertAd(),window.document.body.getAttribute("abp")||this.checkAttributes(s,this._bait))return console.log("attributes - detected count: "+this.counter),!0;if("rc-urzre3"===this.app_id&&void 0===window.canRunAds)return console.log("variable detection - detected count: "+this.counter),!0;if(void 0!==window.getComputedStyle){var e=window.getComputedStyle(this._bait,null);if(e&&("none"===e.getPropertyValue("display")||"hidden"===e.getPropertyValue("visibility")))return console.log("display/visibility - detected count: "+this.counter),!0}if(!this.loadedImg){var t=this;if(function(){var e,n=(e=r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tpc.googlesyndication.com/simgad/16020764746327031843",{method:"HEAD",mode:"no-cors"}).then(.catch(function(){t.imageDetected=!0});case 2:case"end":return e.stop()}},e)}),;return ()(),console.log("imdet"),console.log(this.imageDetected),this.imageDetected)return console.log("im - detected count: "+this.counter),!0}return!1}},{key:"_insertAd",value:function(){if(!this._bait){var e=document.createElement("div");e.innerHTML='\n      <div class="google_ads_iframe gpt googlesyndication.com pub300x250 pub300x250m pub728x90 text-ad textAd textad textads text-ads text-ad-links adbanner" \n            style="width: 1000px !important; height: 1000px !important; position: absolute !important; left: -10000px !important; top: -1000px !important; display: block !important" \n            id="google_ads_iframe_/95384/WeatherWidget_0__container__">\n            <a id="aw0" target="_blank" \n                href="https://googleads.g.doubleclick.net/pcs/click?xai=OjssRD2tp9HSl_l0MgYY35bSWKQWzRh-YOBcn7z59UJ7JfAHHXxHlEORhmfA3yi3ycrmW-qWt83Fy-hisfacU1aw0H-ioOhYXc_K-hrZrcquINfabzryZptGraqPH_ema7GDl_5J0lkSUc8SGEKxGaFI7kuwj6TBRJJwxgziDuopCLkYJBvE12K-1kVWBmpSoWvpbLOmpA_2bsK5_YhKzdq1Pg38b0qo_POvqG8C-unT9BKs-FZvTCazKJH5AvycgnGS9fV6ERn3gXINp0Suh6B7UFV7stmVeMQjAhj8kro7InsX2y6wTD4&amp;sai=AMfl-YRnHdvw7amgnFVpsmpXvsIbaJkbTfWVsVGwFFIrKe8uH7XuKGXXYvPlmxO8jdBZgV-R7IPX5zB&amp;sig=Cg0zBOEDlf8FoGB&amp;fbs_aeid=[gw_fbsaed]&amp;adurl=https://www.stgeorgefor.com/&amp;nm=4&amp;nx=11&amp;ny=0&amp;mb=2" \n                onfocus="ss(\'aw0\')" onmousedown="st(\'aw0\')" onmouseover="ss(\'aw0\')" onclick="ha(\'aw0\')">\n              <img id="tpcgsing302" src="https://tpc.googlesyndication.com/simgad/16020764746327031843" border="0" width="100" height="50" alt="" class="img_ad">\n              <script src="https://www.googletagservices.com/activeview/js/current/rx_lidar.js"><\/script>\n              <img src="//www.google.com/ads/measurement/l?ebcid=efmk" style="display:none;" alt="">\n              <div style="bottom:0;right:0;width:100px;height:50px;background:initial !important;position:absolute !important;max-width:100% !important;max-height:100% !important;pointer-events:none !important;image-rendering:pixelated !important;z-index:2147483647;background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAWBAMAAACrl3iAAAAABlBMVEUAAAD+AciWmZzWAAAAAnRSTlMAApidrBQAAACASURBVBjTbZABDsAwCALxB/z/tVsFsUvmkllTxKvAf5TiPaCuCuzb/pOp6iigD6nODaWi1Kpyb/tV25u8qpldozXJBCVfblhvXUWmTLF00zgPc6c1pWHsb91wp3dJZspxD3dh13i9K4/snmxwIDRmN3gyx3/VYfps0OA+XCRA+h4RNwWE2kw3IQAAAABJRU5ErkJggg==\') !important;"></div>\n            </a>\n      </div>\n    ';var t=window.document.getElementsByTagName("body")[0];this._bait=t.appendChild(e);var n=this;document.getElementById("tpcgsing302").onerror=}},{key:"_removeAd",value:function(){}}])&&c(t.prototype,n),o&&c(t,o),e}();function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){},v=1e3,p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.onEnabled=n,this.onDisabled=o,this.test=[],this.servingServices=[],this.timeout=t,this.servicecounter=0}var t,n,o;return t=e,(n=[{key:"startChecking",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;this.servicecounter=t+1,this._check()?this.onEnabled():this.onDisabled(),t>0&&(this._timeoutIdentifier=setTimeout(this.timeout))}},{key:"_check",value:function(){return document.querySelectorAll("script[src*='gpt.js']").length>0&&this.servingServices.push("google"),this.servingServices.includes("google")&&void 0===googletag.content&&"undefined"!=typeof googletag?(console.log("service detection - detected count: "+this.servicecounter),this.test.push(this.servicecounter-1),!0):(console.log("service detection - not detected count: "+this.servicecounter),!1)}}])&&h(t.prototype,n),o&&h(t,o),e}();function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var w=m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.removeModal=t,this.servingServices=[],this.AppID=n,this.reason=o,this.time=0}var t,n,o;return t=e,(n=[{key:"startChecking",value:function(){var e=this,t=this._check();this.time+=1,t?this.removeModal():this._timeoutIdentifier=setTimeout(1e3)}},{key:"_check",value:function(){return document.querySelectorAll("script[src*='gpt.js']").length>0&&this.servingServices.push("google"),!(!this.servingServices.includes("google")||void 0!==googletag.content||"undefined"==typeof googletag)}}])&&g(t.prototype,n),o&&g(t,o),e}();function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.AppID=t,this.ab_present=!1,this.ab_service_present=!1,this.done=!1,this.servicedone=!1,this.servicerunning=!1,window.adblockerfound=new Event("adblockerfound"),window.adblockernotfound=new Event("adblockernotfound"),window.adblockerservicefound=new Event("adblockerservicefound"),window.adblockerservicenotfound=new Event("adblockerservicenotfound");var n=this;window.addEventListener("adblockerfound",function(e){n.ab_present=!0,n.done=!0,window.dispatchEvent(window.catchhoneyevent)},!1),window.addEventListener("adblockernotfound",function(e){n.ab_present=!1,n.done=!0,window.dispatchEvent(window.catchhoneyevent)},!1),window.addEventListener("adblockerservicefound",function(e){n.servicedone=!0,n.ab_service_present=!0,window.dispatchEvent(window.catchhoneyevent)},!1),window.addEventListener("adblockerservicenotfound",function(e){n.ab_service_present=!1,n.servicedone=!0,window.dispatchEvent(window.catchhoneyevent)},!1)}var t,n,o;return t=e,(n=[{key:"onEnabled",value:function(){this.counter=this.counter-1;var e=new CustomEvent("savelog",{detail:"Found adblocker using bait with "+this.counter+" remaining."});window.dispatchEvent(e),0==this.counter&&window.dispatchEvent(window.adblockerfound)}},{key:"onDisabled",value:function(){this.counter=this.counter-1;var e=new CustomEvent("savelog",{detail:"Found NO adblocker using bait with "+this.counter+" remaining."});window.dispatchEvent(e),0==this.counter&&window.dispatchEvent(window.adblockernotfound)}},{key:"onServiceEnabled",value:function(){this.servicecounter=this.servicecounter-1;var e=new CustomEvent("savelog",{detail:"Found adblocker using service with "+this.servicecounter+" remaining."});window.dispatchEvent(e),0==this.servicecounter&&window.dispatchEvent(window.adblockerservicefound)}},{key:"onServiceDisabled",value:function(){this.servicecounter=this.servicecounter-1;var e=new CustomEvent("savelog",{detail:"Found NO adblocker using service with "+this.servicecounter+" remaining."});window.dispatchEvent(e),0==this.servicecounter&&window.dispatchEvent(window.adblockerservicenotfound)}},{key:"removeModal",value:function(){if("rc-HeVxS5"===this.AppID){var e=this.time;"bait"===this.reason?e+=3:"service"===this.reason&&(e+=10);var t=new CustomEvent("savelog",{detail:"Found a false positive on "+this.reason+" after "+e+" seconds"});window.dispatchEvent(t)}window.dispatchEvent(window.removeModal)}},{key:"runChecks",value:function(){new l(500,this.onEnabled,this.onDisabled,this.AppID).startChecking(3)}},{key:"secondCheck",value:function(){this.servicerunning=!0,new p(500,this.onServiceEnabled,this.onServiceDisabled).startChecking(7)}},{key:"unlimitedCheck",value:function(e){new m(this.removeModal,this.AppID,e).startChecking()}}])&&y(t.prototype,n),o&&y(t,o),e}();ar E=function(){ar t,n,o;return t=e,(n=[{key:"tryRequest",value:function(){if(this.servicerunning=!0,this.isFacebookApp())window.dispatchEvent(window.adblockerservicenotfound);else{var e=this;try{fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",{method:"HEAD",mode:"no-cors"}).then(.catch(function(e){console.log(e),window.dispatchEvent(window.adblockerservicefound),console.log("~~~ TRY -- HAS B!")})}catch(e){console.log(e),console.log("~~~ TRY -- HAS B OR ERROR!")}}}},{key:"isFacebookApp",value:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1||e.indexOf("Instagram")>-1||e.indexOf("FB_IAB")>-1}},{key:"whenNoTrackingProtection",value:function(){try{fetch("https://c.amazon-adsystem.com/aax2/apstag.js",{method:"GET",mode:"no-cors"}).then(function(e){console.log(e),window.dispatchEvent(window.adblockerservicenotfound),console.log("~~~ TRY -- NO BK!")}).catch(function(e){console.log(e),window.dispatchEvent(window.adblockerservicefound),console.log("~~~ TRY -- HAS BK!")})}catch(e){console.log(e),console.log("~~~ TRY -- HAS BK OR ERROR!")}}}])&&k(t.prototype,n),o&&k(t,o),e}();window.catchversion=1,window.catchdetectrun=new Event("catchdetectrun"),window.catchhoneyevent=new Event("catchhoneyevent"),console.log("chv: 1");var _=null,A=null,x=null;window.addEventListener("catchdetectrun",function(e){null==A&&(console.log("DRUN"),_=Object(o.a)(),A=new b(_),x=new E,A.runChecks())}),window.addEventListener("catchhoneyevent",function(e){null!=A?!0===A.done&&!0===window.senddone&&(window.ab_present=A.ab_present,window.ab_service_present=A.ab_service_present,!1===x.servicerunning&&x.tryRequest(),!0===A.servicedone&&!1===A.ab_present?(!0,window.dispatchEvent(window.catchsendservice)):!1===A.servicedone&&A.ab_present&&(!0,window.dispatchEvent(window.catchsend))):(window.ab_present=!1,window.ab_service_present=!1,window.jsnoloadcatch=!1,window.dispatchEvent(window.catchdetectrun))},!1)},function(e,t){},,,,,,);