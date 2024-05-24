!function(c,l,a,r,i,t,y){function sync(){(new Image).src="https://c.clarity.ms/c.gif"}"complete"==document.readyState?sync():window.addEventListener("load",sync);if(a[c].v||a[c].t)return a[c]("event",c,"dup."+i.projectId);a[c].t=!0,(t=l.createElement(r)).async=!0,t.src="https://www.clarity.ms/s/0.7.20/clarity.js",(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y),a[c]("start",i),a[c].q.unshift(a[c].q.pop()),a[c]("set","C_IS","0")}("clarity",document,window,"script",{"projectId":"i469i4og4h","upload":"https://d.clarity.ms/collect","expire":365,"cookies":["_uetmsclkid","_uetvid"],"track":true,"lean":true,"content":true,"dob":1479});5535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function f(n, t, r, e, o, u) { return d((u = d(d(t, n), d(e, u))) << o | u >>> 32 - o, r) } function l(n, t, r, e, o, u, c) { return f(t & r | ~t & e, n, t, o, u, c) } function g(n, t, r, e, o, u, c) { return f(t & e | r & ~e, n, t, o, u, c) } function v(n, t, r, e, o, u, c) { return f(t ^ r ^ e, n, t, o, u, c) } function m(n, t, r, e, o, u, c) { return f(r ^ (t | ~e), n, t, o, u, c) } function c(n, t) { var r, e, o, u; n[t >> 5] |= 128 << t % 32, n[14 + (t + 64 >>> 9 << 4)] = t; for (var c = 1732584193, f = -271733879, i = -1732584194, a = 271733878, h = 0; h < n.length; h += 16)c = l(r = c, e = f, o = i, u = a, n[h], 7, -680876936), a = l(a, c, f, i, n[h + 1], 12, -389564586), i = l(i, a, c, f, n[h + 2], 17, 606105819), f = l(f, i, a, c, n[h + 3], 22, -1044525330), c = l(c, f, i, a, n[h + 4], 7, -176418897), a = l(a, c, f, i, n[h + 5], 12, 1200080426), i = l(i, a, c, f, n[h + 6], 17, -1473231341), f = l(f, i, a, c, n[h + 7], 22, -45705983), c = l(c, f, i, a, n[h + 8], 7, 1770035416), a = l(a, c, f, i, n[h + 9], 12, -1958414417), i = l(i, a, c, f, n[h + 10], 17, -42063), f = l(f, i, a, c, n[h + 11], 22, -1990404162), c = l(c, f, i, a, n[h + 12], 7, 1804603682), a = l(a, c, f, i, n[h + 13], 12, -40341101), i = l(i, a, c, f, n[h + 14], 17, -1502002290), c = g(c, f = l(f, i, a, c, n[h + 15], 22, 1236535329), i, a, n[h + 1], 5, -165796510), a = g(a, c, f, i, n[h + 6], 9, -1069501632), i = g(i, a, c, f, n[h + 11], 14, 643717713), f = g(f, i, a, c, n[h], 20, -373897302), c = g(c, f, i, a, n[h + 5], 5, -701558691), a = g(a, c, f, i, n[h + 10], 9, 38016083), i = g(i, a, c, f, n[h + 15], 14, -660478335), f = g(f, i, a, c, n[h + 4], 20, -405537848), c = g(c, f, i, a, n[h + 9], 5, 568446438), a = g(a, c, f, i, n[h + 14], 9, -1019803690), i = g(i, a, c, f, n[h + 3], 14, -187363961), f = g(f, i, a, c, n[h + 8], 20, 1163531501), c = g(c, f, i, a, n[h + 13], 5, -1444681467), a = g(a, c, f, i, n[h + 2], 9, -51403784), i = g(i, a, c, f, n[h + 7], 14, 1735328473), c = v(c, f = g(f, i, a, c, n[h + 12], 20, -1926607734), i, a, n[h + 5], 4, -378558), a = v(a, c, f, i, n[h + 8], 11, -2022574463), i = v(i, a, c, f, n[h + 11], 16, 1839030562), f = v(f, i, a, c, n[h + 14], 23, -35309556), c = v(c, f, i, a, n[h + 1], 4, -1530992060), a = v(a, c, f, i, n[h + 4], 11, 1272893353), i = v(i, a, c, f, n[h + 7], 16, -155497632), f = v(f, i, a, c, n[h + 10], 23, -1094730640), c = v(c, f, i, a, n[h + 13], 4, 681279174), a = v(a, c, f, i, n[h], 11, -358537222), i = v(i, a, c, f, n[h + 3], 16, -722521979), f = v(f, i, a, c, n[h + 6], 23, 76029189), c = v(c, f, i, a, n[h + 9], 4, -640364487), a = v(a, c, f, i, n[h + 12], 11, -421815835), i = v(i, a, c, f, n[h + 15], 16, 530742520), c = m(c, f = v(f, i, a, c, n[h + 2], 23, -995338651), i, a, n[h], 6, -198630844), a = m(a, c, f, i, n[h + 7], 10, 1126891415), i = m(i, a, c, f, n[h + 14], 15, -1416354905), f = m(f, i, a, c, n[h + 5], 21, -57434055), c = m(c, f, i, a, n[h + 12], 6, 1700485571), a = m(a, c, f, i, n[h + 3], 10, -1894986606), i = m(i, a, c, f, n[h + 10], 15, -1051523), f = m(f, i, a, c, n[h + 1], 21, -2054922799), c = m(c, f, i, a, n[h + 8], 6, 1873313359), a = m(a, c, f, i, n[h + 15], 10, -30611744), i = m(i, a, c, f, n[h + 6], 15, -1560198380), f = m(f, i, a, c, n[h + 13], 21, 1309151649), c = m(c, f, i, a, n[h + 4], 6, -145523070), a = m(a, c, f, i, n[h + 11], 10, -1120210379), i = m(i, a, c, f, n[h + 2], 15, 718787259), f = m(f, i, a, c, n[h + 9], 21, -343485551), c = d(c, r), f = d(f, e), i = d(i, o), a = d(a, u); return [c, f, i, a] } function i(n) { for (var t = "", r = 32 * n.length, e = 0; e < r; e += 8)t += String.fromCharCode(n[e >> 5] >>> e % 32 & 255); return t } function a(n) { var t = []; for (t[(n.length >> 2) - 1] = void 0, e = 0; e < t.length; e += 1)t[e] = 0; for (var r = 8 * n.length, e = 0; e < r; e += 8)t[e >> 5] |= (255 & n.charCodeAt(e / 8)) << e % 32; return t } function e(n) { for (var t, r = "0123456789abcdef", e = "", o = 0; o < n.length; o += 1)t = n.charCodeAt(o), e += r.charAt(t >>> 4 & 15) + r.charAt(15 & t); return e } function r(n) { return unescape(encodeURIComponent(n)) } function o(n) { return i(c(a(n = r(n)), 8 * n.length)) } function u(n, t) { return function (n, t) { var r, e = a(n), o = [], u = []; for (o[15] = u[15] = void 0, 16 < e.length && (e = c(e, 8 * n.length)), r = 0; r < 16; r += 1)o[r] = 909522486 ^ e[r], u[r] = 1549556828 ^ e[r]; return t = c(o.concat(a(t)), 512 + 8 * t.length), i(c(u.concat(t), 640)) }(r(n), r(t)) } function t(n, t, r) { return t ? r ? u(t, n) : e(u(t, n)) : r ? o(n) : e(o(n)) } "function" == typeof define && define.amd ? define(function () { return t }) : "object" == typeof module && module.exports ? module.exports = t : n.md5 = t }(this);
    //# sourceMappingURL=md5.min.js.map
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    function setPPIDCookie() {
        document.cookie = "_ppid=" + md5(uuidv4()) + ";path=/";
    }
    function clearPPIDCookie() {
        document.cookie = "_ppid=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
    function getPPIDCookie() {
        let name = "_ppid=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    googletag.cmd.push(function () {
        if (typeof __tcfapi !== 'undefined') {
            __tcfapi('getTCData', 2, function (tcData, success) {
                if (success && tcData) {
                    var purposeConsents = tcData.purpose.consents;
                    if (purposeConsents[1] && purposeConsents[3]) {
                        quantcastTrackEvent('Personalized Ad Consent Given');
                    }
                    else {
                        clearPPIDCookie();
                    }
                }
            });
        }
        function quantcastTrackEvent(eventName) {
            var ppid = getPPIDCookie();
            if (ppid == "") {
                setPPIDCookie();
            }
            if (typeof __qc !== 'undefined') {
                __qc.event({
                    type: 'custom',
                    eventType: eventName
                });
            }
        }
    });
    

    googletag.cmd.push(function () {
        var pubads = googletag.pubads();
           
        pubads.collapseEmptyDivs(true);

        for (var key in adContext) {
            pubads.setTargeting(key, adContext[key]);
        }

            
        googletag.pubads().enableLazyLoad({
            fetchMarginPercent: 650,
            renderMarginPercent: 350,
            mobileScaling: 1,
        });
            

        googletag.pubads().enableSingleRequest();

            
        var ppid = getPPIDCookie();
        if (ppid != "") {
            googletag.pubads().setPublisherProvidedId(ppid);
        }
        googletag.enableServices();
            
    });

</script>
<script>
    function getSizeMapping(googletag, sizes) {
        var mapping = googletag.sizeMapping();
        var groups = {};
        for (var i = 0; i < sizes.length; i++) {
            var key = sizes[i].ScreenWidth + 'x' + sizes[i].ScreenHeight;
            var group = groups[key];
            if (!group) {
                group = groups[key] = {
                    ScreenWidth: sizes[i].ScreenWidth,
                    ScreenHeight: sizes[i].ScreenHeight,
                    Banners: []
                };
            }
            if (sizes[i].BannerWidth != null && sizes[i].BannerHeight != null) {
                group.Banners.push([sizes[i].BannerWidth, sizes[i].BannerHeight]);
            }
        }
        for (var k in groups) {
            var group = groups[k];
            mapping = mapping.addSize([group.ScreenWidth, group.ScreenHeight], group.Banners);
        }
        return mapping.build();
    }
</script>

    
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style>
    .lazyload:after {
        content: '';
        height: 100%;
        width: 100%;
        background: #f0eeef url(/Content/Media/loader.svg) no-repeat center;
        background-size: 50px;
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
    }
</style>
<link rel="stylesheet" href="https://www.protothema.gr/Content/Css/CombinedPrint.css?v=67" media="print">

<link rel="icon" href="https://www.protothema.gr/favicon.ico?v=1.2" type="image/x-icon" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://www.protothema.gr/apple-touch-icon-76x76.png?v=1.2" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://www.protothema.gr/apple-touch-icon-120x120.png?v=1.2" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://www.protothema.gr/apple-touch-icon-152x152.png?v=1.2" />
<link rel="apple-touch-icon-precomposed" sizes="167x167" href="https://www.protothema.gr/apple-touch-icon-167x167.png?v=1.2" />
<link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://www.protothema.gr/apple-touch-icon-180x180.png?v=1.2" />
<link rel="icon" sizes="128x128" type="image/png" href="https://www.protothema.gr/favicon-128x128.png?v=1.2" />
<link rel="icon" sizes="192x192" type="image/png" href="https://www.protothema.gr/favicon-192x192.png?v=1.2" />

<link rel="preload" href="/Content/Css/Fonts/cfasty/cfastystd-black-webfont.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/Content/Css/Fonts/cfasty/cfastystd-bold-webfont.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/Content/Css/Fonts/cfasty/cfastystd-book-webfont.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/Content/Css/Fonts/cfasty/cfastystd-extrabold-webfont.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/Content/Css/Fonts/cfasty/cfastystd-medium-webfont.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/Content/Css/Fonts/icomoon.woff?5e1fnlc" as="font" type="font/woff" crossorigin />

<link href="https://www.protothema.gr/Content/Css/Scss/main.css?v=67" rel="stylesheet">
<script>
    if (typeof (window.jsReqVersion) == 'undefined') {
		window.jsReqVersion = "385";
	}
</script>

<script async src="https://www.protothema.gr/Scripts/Libraries/js-timeago.js?v=385" type="text/javascript"></script>

        <script>
            window.ptScriptManager = new function () {
                var actionsOnLoad = [];
                function scriptDelayed(delay, callback, inId) {
                    if (!callback) {
                        return;
                    }
                    setTimeout(function () {
                        var code = callback().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
                        if (inId) {
                            $('#' + inId).replaceWith($(code));
                        }
                        else {
                            $(code).appendTo($('head'));
                        }
                    }, delay);
                }
                this.addOnLoadDelayed = function (delay, callback, inId) {
                    actionsOnLoad.push(() => scriptDelayed(delay, callback, inId));
                }

                window.addEventListener('load', function () {
                    for (var i = 0; i < actionsOnLoad.length; i++) {
                        actionsOnLoad[i]();
                    }
                });
            };
        </script>



<script>window.ptScriptManager.addOnLoadDelayed(2300, function() {  return `
&lt;!-- Consent --&gt;&lt;!-- IMPORTANT: Respect the order of the scripts below --&gt;
&lt;script src="//cdn.orangeclickmedia.com/tech/libs/js.cookie.min.js"&gt;&lt;/script&gt;
&lt;script&gt;// &lt;![CDATA[
var reconsent = window.localStorage.getItem('reconsent');
if (!reconsent) {
  Cookies.remove('euconsent-v2', { path: '/', domain: '.www.protothema.gr/' });
  Cookies.remove('euconsent', { path: '/', domain: '.www.protothema.gr/' });
  window.localStorage.clear();
  window.localStorage.setItem('reconsent', 'enforced');
}
// ]]&gt;&lt;/script&gt;


&lt;!-- InMobi Choice. Consent Manager Tag v3.0 (for TCF 2.2) --&gt;
&lt;script type="text/javascript" async=true&gt;
(function() {
  var host = window.location.hostname;
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://cmp.inmobi.com'
    .concat('/choice/', 'mU8cqPf6UBZHQ', '/', host, '/choice.js?tag_version=V3');
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length &gt; 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        if(args[0] === 'init' && typeof args[3] === 'object') {
          args[3] = Object.assign(args[3], { tag_version: 'V3' });
        }
        queue.push(args);
      }
    }

    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};

      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}

      var payload = json.__tcfapiCall;

      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            if (event && event.source && event.source.postMessage) {
              event.source.postMessage(returnMsg, '*');
            }
          },
          payload.parameter
        );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  makeStub();

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries &lt; uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
&lt;/script&gt;
&lt;!-- End InMobi Choice. Consent Manager Tag v3.0 (for TCF 2.2) --&gt;

&lt;script async="async" src="//cdn.orangeclickmedia.com/tech/libs/ocm_iab_compliance.js"&gt;&lt;/script&gt;`; });</script>


<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- DFP --&gt;
&lt;script async="async" data-cmp-src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"&gt;&lt;/script&gt;`; });</script>


<!-- Google Analytics -->
<script >
// <![CDATA[
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-3455889-1', 'auto');
  ga('send', 'pageview');
// ]]>
</script>


<!-- Custom head code --><!-- Start ahref Manager -->
<meta name="ahrefs-site-verification" content="3df0f651b70b3d008473ebfc4b520c409fb16e3fa8aa3604b4b0bee599304025">
<!-- END ahref Manager -->

    <style>
        .bannerWrp.bannerWrp--withoutitle:before 
        {
            content:none!important;
        }
        .bannerWrp__inner>.bannerWrp.bannerWrp--withoutitle 
        {
            margin: 0;
            background: #fff;
        }
        .qc-cmp-button.qc-cmp-secondary-button {
         border-color: #eee !important;
          background-color: #eee !important;
        }
        .cookies {display:none !important;} /* display:none because default cookie snippet was disabled by PT in favor to quantcast script and there was a white ribbon showing all the time over the footer*/

        


    </style>


<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- appocalypsis --&gt;
&lt;script &gt;
// &lt;![CDATA[
var appoInit=document.createElement('script');
var appoS=document.getElementsByTagName('script')[0];
appoInit.type='text/javascript';
appoInit.src='https://www.appocalypsis.com/loader/init/J5PFFP.js';
appoInit.async=true;
appoS.parentNode.insertBefore(appoInit, appoS);
// ]]&gt;
&lt;/script&gt;`; });</script>


<!-- OneSignal Manifest Tag --><link rel="manifest" href="/manifest.json" />


<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- OneSignal --&gt;
&lt;script async="async" data-cmp-src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"&gt;&lt;/script&gt;
&lt;script &gt;

    var OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
    OneSignal.init({
	    appId: "2f0963df-5d5e-4964-a251-1052be231710",
	    safari_web_id: "web.onesignal.auto.50fac9c2-9f7f-49e4-88a1-4637f1759b35"
    });
});
&lt;/script&gt;`; });</script>


<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- Second inRead Vidverto Script --&gt;&lt;script async="async" src="https://ad.vidverto.io/vidverto/js/aries/v1/invocation.js" fetchpriority="high"&gt;&lt;/script&gt;
&lt;script&gt;
  (() =&gt; {
    window.aries = window.aries || {};
    window.aries.v1 = window.aries.v1 || {commands: []};
    const aries = window.aries.v1;
    aries.commands.push(() =&gt; {
      const zoneId = '6968';
      const anchor = document.getElementById('_vidverto-152ee7f95301ddebf283eee62cb8f9d6');
      if (anchor) {
		anchor.removeAttribute('id');

	    aries.mount(zoneId, anchor, {
		  width: 720,
		  height: 405,
	    });
	  }
    });
  })();
&lt;/script&gt;`; });</script>


<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- Facebook Pixel --&gt;&lt;!-- Facebook Pixel Code --&gt;
&lt;script&gt;
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1778319055733085');
fbq('track', 'PageView');
&lt;/script&gt;
&lt;noscript&gt;&lt;img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1778319055733085&ev=PageView&noscript=1"
/&gt;&lt;/noscript&gt;
&lt;!-- End Facebook Pixel Code --&gt;`; });</script>


<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- Ads Squirrel --&gt;&lt;script src="//cdn.adsquirrel.ai/protothema.gr/chirp.js"&gt;&lt;/script&gt;`; });</script>


<!-- Echobox Web Tag --><!-- Echobox Web Tag -->
<script async id="ebx" src="//applets.ebxcdn.com/ebx.js"></script>



<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- Facebook --&gt;
&lt;script async="async" data-cmp-src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&amp;version=v3.2"&gt;&lt;/script&gt;`; });</script>


<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- Taboola --&gt;
&lt;script async="async" data-cmp-src="//agorahtag.tech/c/protothema.js"&gt;&lt;/script&gt;`; });</script>
        <meta name="keywords" content="ΣΥΡΙΖΑ, Νίκος Καρανίκας, Έλενα Ακρίτα, Πολιτική, Ειδήσεις" />
            <meta name="news_keywords" content="ΣΥΡΙΖΑ, Νίκος Καρανίκας, Έλενα Ακρίτα, Πολιτική, Ειδήσεις" />
            <meta name="description" content="&#171;Ο Κασσελάκης δεν σας καλεί για τούφα όπως έχετε συνηθίσει, αλλά για εργασία&#187; είχε αναφέρει νωρίτερα ο Καρανίκας για όσους αντιδρούν για τις Σπέτσες" />
            <link rel="canonical" href="https://www.protothema.gr/politics/article/1457197/akrita-den-mas-paratas-re-karanika-asapera-agori-mou/" />
    

        <link rel="amphtml" href="https://www.protothema.gr/politics/article/1457197/akrita-den-mas-paratas-re-karanika-asapera-agori-mou/AMP/" />
    
    
    

<meta name="smartbanner:enabled-platforms" content="none">
<!--meta name="smartbanner:title" content="Πρώτο ΘΕΜΑ">
<meta name="smartbanner:author" content="Κατεβάστε την ανανεωμένη εφαρμογή">
<meta name="smartbanner:price" content="ΔΩΡΕΑΝ">
<meta name="smartbanner:price-suffix-apple" content=" από το App Store">
<meta name="smartbanner:price-suffix-google" content=" - Στο Google Play">
<meta name="smartbanner:icon-apple" content="/files/system/default.jpg">
<meta name="smartbanner:icon-google" content="/files/system/default.jpg">
<meta name="smartbanner:button" content="ΚΑΤΕΒΑΣΤΕ">
<meta name="smartbanner:button-url-apple" content="https://itunes.apple.com/gr/app/%CF%80%CF%81%CF%89%CF%84%CE%BF-%CE%B8%CE%B5%CE%BC%CE%B1/id368742081?mt=8">
<meta name="smartbanner:button-url-google" content="https://play.google.com/store/apps/details?id=gr.atcom.protothema">
<meta name="smartbanner:enabled-platforms" content="ios,android">
<meta name="smartbanner:hide-ttl" content="864000000"--> <!-- ten days in milliseconds --><meta name="taboolaimage" content="https://i1.prth.gr/images/640x360/files/2024-01-19/akrita-karanikas-m.jpg" /><meta property="article:publisher" content="https://www.facebook.com/protothemagr" /><meta property="article:section" content="Πολιτική" /><meta property="article:published_time" content="2024-01-19T00:20:00+02:00" /><meta property="og:updated_time" content="2024-01-19T00:20:00+02:00" /><meta property="article:published_time" content="2024-01-19T00:20:00+02:00" /><meta property="article:modified_time" content="2024-01-19T00:20:00+02:00" /><meta content="index, follow, max-image-preview:large" name="robots" />
<script data-schema="NewsArticle" type="application/ld+json">{"@context":"http://schema.org","@type":"NewsArticle","description":"«Ο Κασσελάκης δεν σας καλεί για τούφα όπως έχετε συνηθίσει, αλλά για εργασία» είχε αναφέρει νωρίτερα ο Καρανίκας για όσους αντιδρούν για τις Σπέτσες | ΣΥΡΙΖΑ | Νίκος Καρανίκας | Έλενα Ακρίτα | Πολιτική","image":"https://i1.prth.gr/images/963x541/files/2024-01-19/akrita-karanikas-m.jpg","mainEntityOfPage":{"@type":"WebPage","url":"https://www.protothema.gr/politics/article/1457197/akrita-den-mas-paratas-re-karanika-asapera-agori-mou/"},"url":"https://www.protothema.gr/politics/article/1457197/akrita-den-mas-paratas-re-karanika-asapera-agori-mou/","about":[{"@type":"Thing","name":"ΣΥΡΙΖΑ"},{"@type":"Thing","name":"Νίκος Καρανίκας"},{"@type":"Thing","name":"Έλενα Ακρίτα"},{"@type":"Thing","name":"Πολιτική"}],"alternativeHeadline":"Ακρίτα: «Δεν μας παρατάς ρε Καρανίκα… ασαπέρα αγόρι μου»","dateCreated":"2024-01-19T00:20:00+02:00","dateModified":"2024-01-19T00:20:00+02:00","datePublished":"2024-01-19T00:20:00+02:00","headline":"Ακρίτα: «Δεν μας παρατάς ρε Καρανίκα… ασαπέρα αγόρι μου»","isAccessibleForFree":true,"keywords":"ΣΥΡΙΖΑ, Νίκος Καρανίκας, Έλενα Ακρίτα, Πολιτική, Ειδήσεις","publisher":{"@type":"Organization","name":"Πρώτο Θέμα","url":"https://www.protothema.gr","address":[{"@type":"PostalAddress","addressCountry":"Greece","addressLocality":"Αθήνα","addressRegion":"GR","postalCode":"151 23","streetAddress":"Αγράφων 5, Μαρούσι"}],"contactPoint":[{"@type":"ContactPoint","areaServed":"GR","contactType":"customer service","telephone":"+30-210-6880700"}],"logo":{"@type":"ImageObject","url":"https://i2.prth.gr/files/protothema-logo2.png","height":60,"width":238}},"articleBody":"","articleSection":"Πολιτική"}</script><meta content="el_GR" property="og:locale" />
<meta content="article" property="og:type" />
<meta content="Ακρίτα: «Δεν μας παρατάς ρε Καρανίκα… ασαπέρα αγόρι μου»" property="og:title" />
<meta content="«Ο Κασσελάκης δεν σας καλεί για τούφα όπως έχετε συνηθίσει, αλλά για εργασία» είχε αναφέρει νωρίτερα ο Καρανίκας για όσους αντιδρούν για τις Σπέτσες" property="og:description" />
<meta content="https://www.protothema.gr/politics/article/1457197/akrita-den-mas-paratas-re-karanika-asapera-agori-mou/" property="og:url" />
<meta content="ProtoThema" property="og:site_name" />
<meta content="ΣΥΡΙΖΑ" property="og:tag" />
<meta content="Νίκος Καρανίκας" property="og:tag" />
<meta content="Έλενα Ακρίτα" property="og:tag" />
<meta content="https://i1.prth.gr/images/640x360share/files/2024-01-19/akrita-karanikas-m.jpg" property="og:image" />
<meta content="640" property="og:image:width" />
<meta content="360" property="og:image:height" />
<meta content="summary_large_image" name="twitter:card" />
<meta content="«Ο Κασσελάκης δεν σας καλεί για τούφα όπως έχετε συνηθίσει, αλλά για εργασία» είχε αναφέρει νωρίτερα ο Καρανίκας για όσους αντιδρούν για τις Σπέτσες" name="twitter:description" />
<meta content="Ακρίτα: «Δεν μας παρατάς ρε Καρανίκα… ασαπέρα αγόρι μου»" name="twitter:title" />
<meta content="@protothema" name="twitter:site" />
<meta content="https://i1.prth.gr/images/640x360share/files/2024-01-19/akrita-karanikas-m.jpg" name="twitter:image" />
<script data-schema="NewsMediaOrganization" type="application/ld+json">{"@context":"http://schema.org","@type":"NewsMediaOrganization","name":"Πρώτο Θέμα","url":"https://www.protothema.gr","address":[{"@type":"PostalAddress","addressCountry":"Greece","addressLocality":"Αθήνα","addressRegion":"GR","postalCode":"151 23","streetAddress":"Αγράφων 5, Μαρούσι"}],"contactPoint":[{"@type":"ContactPoint","areaServed":"GR","contactType":"customer service","telephone":"+30-210-6880700"}],"logo":{"@type":"ImageObject","url":"https://i2.prth.gr/files/protothema-logo2.png","height":60,"width":238}}</script>    
    

    <!-- chartbeat -->
<script type='text/javascript'>
(function() {
    /** CONFIGURATION START **/
    var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
    _sf_async_config.uid = 64216; //CHANGE THIS TO YOUR ACCOUNT ID
    _sf_async_config.domain = 'protothema.gr'; //CHANGE THIS TO YOUR SITE ID
    _sf_async_config.useCanonical = true;
    _sf_async_config.useCanonicalDomain = true;
    _sf_async_config.sections = 'Πολιτική'; //SET PAGE SECTION(S)
    _sf_async_config.authors = ''; //SET PAGE AUTHOR(S)
    /** CONFIGURATION END **/
    function loadChartbeat() {
        var e = document.createElement('script');
        var n = document.getElementsByTagName('script')[0];
        e.type = 'text/javascript';
        e.async = true;
        e.src = '//static.chartbeat.com/js/chartbeat.js';
        n.parentNode.insertBefore(e, n);
    }
    loadChartbeat();
 })();
</script>


    <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=642ee8cafaaa470019ff1b99&product=inline-share-buttons' async='async'></script>
</head>
<body class="specialHeader" data-designmode="false" data-mgmt="false" data-plugin-viewportheight data-plugin-lazyload>
    



<!-- Analytics G4 - Google Tag Manager -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9ZNLVC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>



<span id='eb04f068-012d-463e-bee3-976f6720636e' style='display:none'></span>
<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- Google Tag Manager (noscript) --&gt;&lt;noscript&gt;&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCT5PH9" height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;&lt;/noscript&gt;
`; }, 'eb04f068-012d-463e-bee3-976f6720636e');</script>


<span id='dc59157e-20c3-4560-926c-befe5a3affe2' style='display:none'></span>
<script>window.ptScriptManager.addOnLoadDelayed(2000, function() {  return `
&lt;!-- phaistos adman --&gt;
&lt;script data-cmp-src="https://static.adman.gr/adman.js"&gt;&lt;/script&gt;
&lt;script &gt;
// &lt;![CDATA[
window.AdmanQueue=window.AdmanQueue||[];AdmanQueue.push(function(){Adman.adunit({id:313,h:'https://x.grxchange.gr',inline:true})});
// ]]&gt;
&lt;/script&gt;`; }, 'dc59157e-20c3-4560-926c-befe5a3affe2');</script>

    
    

<div class="outer">
    <div class="backToTop icon-arrow-up" data-plugin-gototop></div>



    


    <header class="header" data-plugin-stickit='{ "element": "this", "bottoming": false }'>
        <div class="menuOverlay"></div>
        <div class="top">
                <h2 class="logo">
                    <figure>
                        <a href="/">
                            <picture>
                                <img src="https://s.prth.gr/assets/Media/logo-main.svg?v=3" width="177" height="60" alt="ProtoThema.gr">
                            </picture>
                        </a>
                    </figure>
                </h2>
            <div class="leftSect">


<div class="trigMenu" data-plugin-menu>
    <div class="burgerIcon">
        <i class="burger"></i>
    </div>
</div>
<nav class="nav mhidden">
    <ul>
        

            <li>        <a href="https://www.protothema.gr/oles-oi-eidiseis/" title="Όλες οι Ειδήσεις">Όλες οι Ειδήσεις</a>
</li>
            <li class="thidden">        <a href="https://www.protothema.gr/sunday-editions/" title="Έκδοση Κυριακής">Έκδοση Κυριακής</a>
</li>
            <li class="thidden">        <a href="https://www.protothema.gr/frontpages/" title="Πρωτοσέλιδα">Πρωτοσέλιδα</a>
</li>
    </ul>
</nav>
<div class="navWrp">
    <div class="grayRow">
        <div class="social">
                <a href="https://twitter.com/protothema" target="_blank" class="icon-twitter"></a>
    <a href="https://www.facebook.com/protothemagr/?ref=ts" target="_blank" class="icon-facebook"></a>
    <a href="https://www.instagram.com/protothema.gr/" target="_blank" class="icon-instagram"></a>
    <a href="https://www.linkedin.com/company/protothema-gr/" target="_blank" class="icon-linkedin"></a>
    <a href="https://www.protothema.gr/rss" target="_blank" class="icon-rss"></a>

        </div>
        
    </div>
    <div class="topNav">
        <nav class="mainNav">
            <ul>
                        <li>
            <div class="title">        <a href="https://www.protothema.gr/tag/ekloges-2023/" title="Εκλογές 2023">Εκλογές 2023</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
        </li>
        <li class="hasSub">
            <div class="title">        <a href="https://www.protothema.gr/greece/" title="Ελλάδα">Ελλάδα</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
                <ul class="cnt tagsUl">
                            <li>        <a href="https://www.protothema.gr/tag/Seismos/" title="Σεισμός">Σεισμός</a>
</li>
        <li>        <a href="https://www.protothema.gr/tag/kairos/" title="Καιρός">Καιρός</a>
</li>
        <li>        <a href="https://www.protothema.gr/tag/kinisi-stoys-dromoys/" title="Κίνηση στους δρόμους">Κίνηση στους δρόμους</a>
</li>

                </ul>
        </li>
        <li>
            <div class="title">        <a href="https://www.protothema.gr/koronoios-live/" title="Κορωνοϊός LIVE">Κορωνοϊός LIVE</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
        </li>
        <li class="hasSub">
            <div class="title">        <a href="https://www.protothema.gr/economy/" title="Οικονομία">Οικονομία</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
                <ul class="cnt tagsUl">
                            <li>        <a href="https://www.protothema.gr/tag/sudaxeis/" title="Συντάξεις">Συντάξεις</a>
</li>

                </ul>
        </li>
        <li class="hasSub">
            <div class="title">        <a href="https://www.protothema.gr/politics/" title="Πολιτική">Πολιτική</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
                <ul class="cnt tagsUl">
                            <li>        <a href="https://www.protothema.gr/tag/kyriakos-mitsotakis/" title="Κυριάκος Μητσοτάκης">Κυριάκος Μητσοτάκης</a>
</li>
        <li>        <a href="https://www.protothema.gr/tag/-stefanos-kasselakis/" title="΄Στέφανος Κασσελάκης">΄Στέφανος Κασσελάκης</a>
</li>

                </ul>
        </li>
        <li>
            <div class="title">        <a href="https://www.protothema.gr/world/" title="Κόσμος">Κόσμος</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
        </li>
        <li class="hasSub">
            <div class="title">        <a href="https://www.protothema.gr/sports/" title="Σπορ">Σπορ</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
                <ul class="cnt tagsUl">
                            <li>        <a href="https://www.protothema.gr/tag/super-league-1/" title="Super League 1">Super League 1</a>
</li>
        <li>        <a href="https://www.protothema.gr/tag/champions-league/" title="Champions League">Champions League</a>
</li>
        <li>        <a href="https://www.protothema.gr/tag/europa-league/" title="Europa League">Europa League</a>
</li>
        <li>        <a href="https://www.protothema.gr/tag/euro-2024/" title="Euro 2024">Euro 2024</a>
</li>

                </ul>
        </li>
        <li>
            <div class="title">        <a href="https://www.protothema.gr/ellada-2040/" title="Ελλάδα 2040">Ελλάδα 2040</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
        </li>
        <li class="hasSub">
            <div class="title">        <a href="https://www.protothema.gr/car-and-speed/" title="Car">Car</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
                <ul class="cnt">
                            <li>        <a href="https://www.protothema.gr/car-and-speed/news/" title="News">News</a>
</li>
        <li>        <a href="https://www.protothema.gr/car-and-speed/preview/" title="Preview">Preview</a>
</li>
        <li>        <a href="https://www.protothema.gr/car-and-speed/video/" title="Video">Video</a>
</li>
        <li>        <a href="https://www.protothema.gr/car-and-speed/tech/" title="Tech">Tech</a>
</li>
        <li>        <a href="https://www.protothema.gr/car-and-speed/racing/" title="Αγωνες">Αγωνες</a>
</li>
        <li>        <a href="https://www.protothema.gr/car-and-speed/formula-1/" title="Formula 1">Formula 1</a>
</li>
        <li>        <a href="https://www.protothema.gr/car-and-speed/pisokinisi/" title="Πισω Κινηση">Πισω Κινηση</a>
</li>
        <li>        <a href="https://www.protothema.gr/car-and-speed/newsauto-times-technika-charaktiristika/" title="Τιμες Αυτοκινητων">Τιμες Αυτοκινητων</a>
</li>
        <li>        <a href="https://www.protothema.gr/car-and-speed/moto/" title="Moto">Moto</a>
</li>

                </ul>
        </li>
        <li class="hasSub">
            <div class="title">        <a href="https://www.protothema.gr/life-style/" title="Gala">Gala</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
                <ul class="cnt">
                            <li>        <a href="https://www.protothema.gr/life-style/Hollywood/" title="Hollywood">Hollywood</a>
</li>
        <li>        <a href="https://www.protothema.gr/life-style/Gossip/" title="Gossip">Gossip</a>
</li>
        <li>        <a href="https://www.protothema.gr/tag/master-chef/" title="Master Chef">Master Chef</a>
</li>
        <li>        <a href="https://www.protothema.gr/tag/survivor/" title="Survivor">Survivor</a>
</li>
        <li>        <a href="https://www.protothema.gr/life-style/tileorasi/" title="Τηλεοραση">Τηλεοραση</a>
</li>

                </ul>
        </li>
        <li class="hasSub">
            <div class="title">        <a href="https://www.protothema.gr/culture/" title="Πολιτισμός">Πολιτισμός</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
                <ul class="cnt">
                            <li>        <a href="https://www.protothema.gr/culture/theater/" title="Θεατρο">Θεατρο</a>
</li>
        <li>        <a href="https://www.protothema.gr/culture/cinema/" title="Σινεμα">Σινεμα</a>
</li>
        <li>        <a href="https://www.protothema.gr/culture/music/" title="Μουσικη">Μουσικη</a>
</li>
        <li>        <a href="https://www.protothema.gr/culture/books/" title="Βιβλιο">Βιβλιο</a>
</li>

                </ul>
        </li>
        <li class="hasSub">
            <div class="title">        <a href="https://www.protothema.gr/technology/" title="Τεχνολογία">Τεχνολογία</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
                <ul class="cnt tagsUl">
                            <li>        <a href="https://www.protothema.gr/tag/facebook/" title="Facebook">Facebook</a>
</li>

                </ul>
        </li>
        <li>
            <div class="title">        <a href="https://www.protothema.gr/environment/" title="Περιβάλλον">Περιβάλλον</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
        </li>
        <li>
            <div class="title">        <a href="https://www.protothema.gr/frontpages/" title="Πρωτοσέλιδα">Πρωτοσέλιδα</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
        </li>
        <li>
            <div class="title">        <a href="https://www.protothema.gr/sunday-editions/" title="Έκδοση Κυριακής">Έκδοση Κυριακής</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
        </li>
        <li>
            <div class="title">        <a href="https://www.protothema.gr/thema-insights/" title="Thema Insights" target="_blank">Thema Insights</a>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
        </li>

            </ul>
        </nav>
        <div class="rightColmn">
            <nav class="navMore">
                <ul>
                            <li class="hasSub">
            <div class="title">        <span>Περισσότερα</span>
 <div class="openSub" data-plugin-toggleclass='{ "target": ".title", "class": "opened", "slideItem": ".cnt" }'></div></div>
                <ul class="cnt">
                            <li>        <a href="https://www.protothema.gr/stories/" title="Stories">Stories</a>
</li>
        <li>        <a href="https://www.protothema.gr/travelling/" title="Τουρισμος">Τουρισμος</a>
</li>
        <li>        <a href="https://www.protothema.gr/recipes/" title="Συνταγες">Συνταγες</a>
</li>
        <li>        <a href="https://www.protothema.gr/afieromata/" title="Αφιερωματα">Αφιερωματα</a>
</li>
        <li>        <a href="https://www.protothema.gr/ugeia/" title="Ζωη">Ζωη</a>
</li>
        <li>        <a href="https://www.protothema.gr/zoi/" title="ygeiamou.gr">ygeiamou.gr</a>
</li>
        <li>        <a href="https://www.protothema.gr/paidi/" title="Παιδι">Παιδι</a>
</li>
        <li>        <a href="https://www.protothema.gr/english-news/" title="English News">English News</a>
</li>
        <li>        <a href="https://www.protothema.gr/advertorial/" title="Advertorial">Advertorial</a>
</li>

                </ul>
        </li>

                </ul>
            </nav>
        </div>
    </div>
    <div class="grayRow mobileOnly">
        <nav class="nav">
            <ul>
                

                    <li class="hidden mblock">        <a href="https://www.protothema.gr/oles-oi-eidiseis/" title="Όλες οι Ειδήσεις">Όλες οι Ειδήσεις</a>
</li>
                    <li class="hidden tblock">        <a href="https://www.protothema.gr/sunday-editions/" title="Έκδοση Κυριακής">Έκδοση Κυριακής</a>
</li>
                    <li class="hidden tblock">        <a href="https://www.protothema.gr/frontpages/" title="Πρωτοσέλιδα">Πρωτοσέλιδα</a>
</li>
            </ul>
        </nav>

    </div>

</div>            </div>
            <div class="rightSect">
                <div class="opts">
                    


                    <div class="dhidden">
                        

                    </div>
                    
                    <div class="mhidden rel weatherItem">
                        <div data-plugin-weather='{&quot;DefaultDKID&quot;:&quot;5804&quot;,&quot;Url&quot;:&quot;https://www.protothema.gr/ajax/Atcom.Sites.ProtoThema.Components.Weather.PointWeather/&quot;,&quot;CurrentView&quot;:&quot;Current&quot;,&quot;DetailsView&quot;:&quot;Details&quot;}'>
  
</div>
                    </div>
                    <div class="itm openSearch" data-plugin-searchtrigger='{ "open": true }'><i class="icon-search inl"></i></div>
                </div>
                
<div class="searchWrp" data-plugin-autocomplete='{&quot;targetSelector&quot;:&quot;.searchContent&quot;,&quot;url&quot;:&quot;https://www.protothema.gr/ajax/Atcom.Sites.ProtoThema.Components.Search.Autocomplete/&quot;}'>
    <div class="searchInp">
        <form action="https://www.protothema.gr/anazitisi/" method="get">
            <div class="submit">
                <i class="icon-search inl"></i>
                <input type="submit" />
            </div>
            <div class="input">
                <div class="searchSubmit">
                    <input type="submit" value="Αναζήτηση">
                </div>
                <input id="mainSearch" type="search" name="q" placeholder="Αναζήτηση στο protothema.gr..." />
            </div>
        </form>
        <i data-plugin-searchtrigger='{ "open": false }' class="icon-close closeSearch"></i>
    </div>
    <div class="searchContent">

    </div>
    
</div>
            </div>
        </div>
    </header>








    <main class="inner">
        
        




<div class="headerArticleInfo">
    <div class="headerArticleInfo__title">
        <span>Ακρίτα: &#171;Δεν μας παρατάς ρε Καρανίκα… ασαπέρα αγόρι μου&#187;</span>
    </div>
    <div class="headerArticleInfo__social">
        <!-- ShareThis BEGIN --><div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->
    </div>
</div>
<section class="section mainSection" data-plugin-articlehit="{&quot;id&quot;:1457197,&quot;languageId&quot;:1}">
    <div class="wrapper">



<div class="articleTopInfo ">
        <div class="tagsCnt">
            <a href="https://www.protothema.gr/politics/" class="categ">
        ΠΟΛΙΤΙΚΗ
    </a>
        <div class="tags">
            <div class="cnt">
                    <a href="https://www.protothema.gr/tag/syriza/" data-plugin-fits='{ "parent": ".tags", "child": ".cnt", "window": 639}'>ΣΥΡΙΖΑ</a>
                    <a href="https://www.protothema.gr/tag/nikos-karanikas/" data-plugin-fits='{ "parent": ".tags", "child": ".cnt", "window": 639}'>Νίκος Καρανίκας</a>
                    <a href="https://www.protothema.gr/tag/elena-akrita/" data-plugin-fits='{ "parent": ".tags", "child": ".cnt", "window": 639}'>Έλενα Ακρίτα</a>
            </div>
        </div>

    </div>

    <div class="title title--noDot">
        <h1>
    Ακρίτα: &#171;Δεν μας παρατάς ρε Καρανίκα… ασαπέρα αγόρι μου&#187;
</h1>

    </div>
</div>



        <div class="articleContainer" data-plugin-checkfix>
            <div class="articleTopInfo">
                    <h3>«Ο Κασσελάκης δεν σας καλεί για τούφα όπως έχετε συνηθίσει, αλλά για εργασία» είχε αναφέρει νωρίτερα ο Καρανίκας για όσους αντιδρούν για τις Σπέτσες</h3>

                

            </div>
            <div class="articleContainer__media">
                <div class="shareButtons lgHidden">
                    <!-- ShareThis BEGIN --><div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->
                </div>
                            <div class="imgWrp">
                                <div class="topImg mainVideo" data-plugin-stickit='{ "element": "this", "child": ".video", "bottoming": true, "offTop": ".header", "class":".mainSection", "fixedvideo": true,"window": 1023  }'>
                                        <div class="item">
        <div class="itemInner withZoom" data-original="https://i1.prth.gr/images/w1360/files/2024-01-19/akrita-karanikas-m.jpg" data-caption="" data-plugin-zoom>
            

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source srcset="https://i1.prth.gr/images/640x360/_webp/files/2024-01-19/akrita-karanikas-m.jpg" type="image/webp" media="(max-width: 640px)" />
            <source srcset="https://i1.prth.gr/images/640x360/_jp2/files/2024-01-19/akrita-karanikas-m.jpg" type="image/jp2" media="(max-width: 640px)" />
            <source srcset="https://i1.prth.gr/images/640x360/files/2024-01-19/akrita-karanikas-m.jpg" type="image/jpeg" media="(max-width: 640px)" />
            <source srcset="https://i1.prth.gr/images/1168x656/_webp/files/2024-01-19/akrita-karanikas-m.jpg" type="image/webp" media="(min-width: 641px)" />
            <source srcset="https://i1.prth.gr/images/1168x656/_jp2/files/2024-01-19/akrita-karanikas-m.jpg" type="image/jp2" media="(min-width: 641px)" />
            <source srcset="https://i1.prth.gr/images/1168x656/files/2024-01-19/akrita-karanikas-m.jpg" type="image/jpeg" media="(min-width: 641px)" />
    <!--[if IE 9]></video><![endif]-->
        <img src="https://i1.prth.gr/images/1168x656/files/2024-01-19/akrita-karanikas-m.jpg" fetchpriority="high" alt="akrita-karanikas-m" class="" />
</picture>
        </div>
    </div>

                                </div>
                            </div>
                            </div>
            <div class="articleContainer__tools">
                

<div class="articleInfo">
    <div class="wrp">
        <time data-timeago="" datetime="2024-01-19T00:20:00+02:00">19.01.2024, 00:20</time>
                    <a href="https://www.protothema.gr/politics/article/1457197/akrita-den-mas-paratas-re-karanika-asapera-agori-mou/#Comments" class="comment">139 ΣΧΟΛΙΑ</a>
    </div>
</div>
            </div>
            <div class="articleContainer__main" data-plugin-checkbanner>


<div class="cnt">
Η <a href="https://www.protothema.gr/tag/elena-akrita/" target="_blank" rel="noopener noreferrer">Έλενα Ακρίτα</a> θέλησε να απαντήσει στον <a href="https://www.protothema.gr/politics/article/1457109/karanikas-kata-oson-adidroun-gia-tis-spetses-den-sas-kalei-gia-toufa-opos-ehete-sunithisei-alla-gia-ergasia/" target="_blank" rel="noopener noreferrer">Νίκο Καρανίκα μετά τις βολές που εξαπέλυσε</a> κατά των βουλευτών του ΣΥΡΙΖΑ Προοδευτική Συμμαχία, παραμονή της τριήμερης συνεδρίασης της ΚΟ του κόμματος, στις Σπέτσες.<br>
 <br>
 «Δε μάς παρατάς ρε Καρανίκα. Ασχολήσου με τα πόδια της <a href="https://www.protothema.gr/tag/eleni-menegaki/" target="_blank" rel="noopener noreferrer">Μενεγάκη </a>κι άσε μας ήσυχους. Που τόσους μήνες με τη διάσπαση, έχουμε ξεσκιστεί στη δουλειά και θα μας την πεις κι από πάνω. Ασαπέρα αγόρι μου», έγραψε σε ανάρτησή της στο Facebook.<br>
 <br>

<div class="bannerWrp stickyBanner configurable-element mceNonEditable server-side-component"
     data-component="Atcom.Sites.ProtoThema.Components.HtmlSnippets.Banner"
     data-configuration-type="Atcom.Sites.ProtoThema.Models.Banners.BannerConfiguration, Atcom.Sites.ProtoThema" data-plugin-mobsticky>
    <div class="bannerCnt bannerWrp__inner">
       

    <div id="banner-div-7cc7fb88-5725-4895-aa69-29873454d9c9" class="banner-container b300x250">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Mobile_Article_1";
            var size = [[300,250],[300,600],[336,280]];
            var divId = "banner-div-7cc7fb88-5725-4895-aa69-29873454d9c9";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":600},{"ScreenWidth":480,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":1024,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":336,"BannerHeight":280},{"ScreenWidth":480,"ScreenHeight":0,"BannerWidth":336,"BannerHeight":280}];

            var refreshIntervalInSec = 31;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-7cc7fb88-5725-4895-aa69-29873454d9c9");
            })
        }, 1000);
    </script>
    </div>
</div>
<figure class="center mceNonEditable server-side-component withZoom" data-component="Atcom.Sites.ProtoThema.Components.HtmlSnippets.Image" data-configuration-type="Atcom.Sites.ProtoThema.Models.HtmlSnippets.ImageConfiguration, Atcom.Sites.ProtoThema" data-original="https://i1.prth.gr/images/w1360/files/2024-01-19/akrita.png" data-caption="" data-plugin-zoom>
    

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/w640/_webp/files/2024-01-19/akrita.png" type="image/webp" media="(max-width: 639px)" />
            <source data-srcset="https://i1.prth.gr/images/w640/_jp2/files/2024-01-19/akrita.png" type="image/jp2" media="(max-width: 639px)" />
            <source data-srcset="https://i1.prth.gr/images/w640/files/2024-01-19/akrita.png" type="image/png" media="(max-width: 639px)" />
            <source data-srcset="https://i1.prth.gr/images/w880/_webp/files/2024-01-19/akrita.png" type="image/webp" media="(min-width: 640px)" />
            <source data-srcset="https://i1.prth.gr/images/w880/_jp2/files/2024-01-19/akrita.png" type="image/jp2" media="(min-width: 640px)" />
            <source data-srcset="https://i1.prth.gr/images/w880/files/2024-01-19/akrita.png" type="image/png" media="(min-width: 640px)" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/w880/files/2024-01-19/akrita.png" fetchpriority="" alt="akrita" class="lazyload" />
</picture>
</figure>
<div class="bannerWrp stickyBanner configurable-element mceNonEditable server-side-component"
     data-component="Atcom.Sites.ProtoThema.Components.HtmlSnippets.Banner"
     data-configuration-type="Atcom.Sites.ProtoThema.Models.Banners.BannerConfiguration, Atcom.Sites.ProtoThema" data-plugin-mobsticky>
    <div class="bannerCnt bannerWrp__inner">
       
<div class="bannerWrp">
<div class="inReadVideo">
<div id="_vidverto-152ee7f95301ddebf283eee62cb8f9d6"></div>
</div>
</div>    </div>
</div>
<br>
 <br>
 Νωρίτερα ο Νίκος Καρανίκας απευθυνόμενος προς τα μέλη της ΚΟ του ΣΥΡΙΖΑ ΠΣ, «καλοί μου άνθρωποι, ο πρόεδρος σας καλεί για να κάνετε αυτό που κάνει κάθε μεγάλος σοβαρός ζωντανός οργανισμός όταν θέλει να υπάρχει σύσφιξη και όσμωση σχέσεων και ιδεών και γι αυτό δεν σας καλεί για να περάσετε τούφα όπως έχετε συνηθίσει προφανώς για να αντιδράτε έτσι, αλλά για εργασία με ευθύνες και χρεώσεις σε ωραίο περιβάλλον».<br>
 <br>
<div class="bannerWrp stickyBanner configurable-element mceNonEditable server-side-component"
     data-component="Atcom.Sites.ProtoThema.Components.HtmlSnippets.Banner"
     data-configuration-type="Atcom.Sites.ProtoThema.Models.Banners.BannerConfiguration, Atcom.Sites.ProtoThema" data-plugin-mobsticky>
    <div class="bannerCnt bannerWrp__inner">
       

    <div id="banner-div-65d49440-edd6-4324-8b7a-7ba0763fc730" class="banner-container b300x250">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Mobile_Article_2";
            var size = [[300,250],[300,600],[336,280]];
            var divId = "banner-div-65d49440-edd6-4324-8b7a-7ba0763fc730";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":600},{"ScreenWidth":480,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":1024,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":336,"BannerHeight":280},{"ScreenWidth":480,"ScreenHeight":0,"BannerWidth":336,"BannerHeight":280}];

            var refreshIntervalInSec = 0;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-65d49440-edd6-4324-8b7a-7ba0763fc730");
            })
        }, 1000);
    </script>
    </div>
</div>
 Ακόμη, ο κ. Καρανίκας ασκεί κριτική και σε όσους βουλευτές επιθυμούσαν η συνεδρίαση να λάβει χώρα σε μέρος με έντονο πολιτικό συμβολισμό, λέγοντας πως «κακώς ξεστομίστηκαν τέτοιοι τυχοδιωκτισμοί από στελέχη μας που προτρέπουν σε δημοσιότητες και φανφάρες με πρόσχημα την καταστροφή των χωριών και οχι την ανάγκη για συλλογική εργασία».<br>
 <br>
 <strong>Αναλυτικά, η ανάρτηση:</strong><br>
 <br>
<div class="bannerWrp  configurable-element mceNonEditable server-side-component"
     data-component="Atcom.Sites.ProtoThema.Components.HtmlSnippets.Banner"
     data-configuration-type="Atcom.Sites.ProtoThema.Models.Banners.BannerConfiguration, Atcom.Sites.ProtoThema" data-plugin-mobsticky>
    <div class="bannerCnt bannerWrp__inner">
       

    <div id="banner-div-78d69794-3159-484a-8aa7-2394b5133b65" class="banner-container b560x320">

    </div>
        <div class="bannerWrp__close" data-plugin-closebanner="">Κλείσιμο<i class="icon-close"></i></div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/In_read_Video";
            var size = [[560,320],[310,180]];
            var divId = "banner-div-78d69794-3159-484a-8aa7-2394b5133b65";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":310,"BannerHeight":180},{"ScreenWidth":1200,"ScreenHeight":0,"BannerWidth":560,"BannerHeight":320}];

            var refreshIntervalInSec = 31;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-78d69794-3159-484a-8aa7-2394b5133b65");
            })
        }, 1000);
    </script>
    </div>
</div>
 Στις Σπέτσες με τον καλύτερο τρόπο. Οι συναντήσεις εργασίας στις Σπέτσες που πρότεινε ο σύντροφος πρόεδρος Κασσελακης γίνονται για την ουσία της πολιτικής κομματικής σχέσης της Κ.Ο και οχι για τα μάτια του κόσμου και τα ΜΜΕ.<br>
 <br>
 Αυτό σημαίνει ότι δεν είναι βιώσιμη η πρόταση εντυπωσιασμού των συντρόφων για ανάλογες συσκέψεις εργασιών σε χωριά κατεστραμμένα από τις θεομηνίες που είναι αδύνατον να προσφέρουν το περιβάλλον εργασίας που απαιτείται. <br>
 <br>
<div class="bannerWrp stickyBanner configurable-element mceNonEditable server-side-component"
     data-component="Atcom.Sites.ProtoThema.Components.HtmlSnippets.Banner"
     data-configuration-type="Atcom.Sites.ProtoThema.Models.Banners.BannerConfiguration, Atcom.Sites.ProtoThema" data-plugin-mobsticky>
    <div class="bannerCnt bannerWrp__inner">
       

    <div id="banner-div-2bcd4387-9984-461f-8f95-3b59cd2d7cbb" class="banner-container b300x250">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Mobile_Article_3";
            var size = [[300,250],[300,600],[336,280]];
            var divId = "banner-div-2bcd4387-9984-461f-8f95-3b59cd2d7cbb";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":600},{"ScreenWidth":480,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":1024,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":336,"BannerHeight":280},{"ScreenWidth":480,"ScreenHeight":0,"BannerWidth":336,"BannerHeight":280}];

            var refreshIntervalInSec = 0;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-2bcd4387-9984-461f-8f95-3b59cd2d7cbb");
            })
        }, 1000);
    </script>
    </div>
</div>
 Κακώς ξεστομίστηκαν τέτοιοι τυχοδιωκτισμοί από στελέχη μας που προτρέπουν σε δημοσιότητες και φανφάρες με πρόσχημα την καταστροφή των χωριών και οχι την ανάγκη για συλλογική εργασία. Πολύ κακώς που δόθηκε πολιτική διάσταση ενώ πρόκειται απλά για αντιδραστικότητα που χρίζει ψυχολογικής υποστήριξης και οχι πολιτικής.<br>
</div>


<div class="cnt">

<div class="bannerWrp stickyBanner configurable-element mceNonEditable server-side-component"
     data-component="Atcom.Sites.ProtoThema.Components.HtmlSnippets.Banner"
     data-configuration-type="Atcom.Sites.ProtoThema.Models.Banners.BannerConfiguration, Atcom.Sites.ProtoThema" data-plugin-mobsticky>
    <div class="bannerCnt bannerWrp__inner">
       

    <div id="banner-div-5b135c16-a8cd-4ea7-adcd-b137126d688a" class="banner-container b728x90">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Headbanner";
            var size = [[728,90],[970,90],[970,200],[970,250]];
            var divId = "banner-div-5b135c16-a8cd-4ea7-adcd-b137126d688a";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":728,"BannerHeight":90},{"ScreenWidth":1280,"ScreenHeight":500,"BannerWidth":970,"BannerHeight":90},{"ScreenWidth":1280,"ScreenHeight":500,"BannerWidth":970,"BannerHeight":200},{"ScreenWidth":1280,"ScreenHeight":500,"BannerWidth":970,"BannerHeight":250},{"ScreenWidth":1280,"ScreenHeight":500,"BannerWidth":1,"BannerHeight":1},{"ScreenWidth":1280,"ScreenHeight":500,"BannerWidth":728,"BannerHeight":90}];

            var refreshIntervalInSec = 35;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-5b135c16-a8cd-4ea7-adcd-b137126d688a");
            })
        }, 1000);
    </script>
    </div>
</div></div>


<div class="cnt">


<div class="configurable-element server-side-component mceNonEditable"
     data-component="Atcom.Sites.ProtoThema.Components.HtmlSnippets.Facebook"
     data-configuration-type="Atcom.Sites.ProtoThema.Models.HtmlSnippets.FacebookConfiguration, Atcom.Sites.ProtoThema">
    <div id="fb-root"></div>
    <div class="fb-post" data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid02VCbt5HCqHvtZgD1yyfBDbovgXcWHq5c7qpEDYNX1RectqrFszZNHBa2dLzNXMkrxl&amp;id=100010733509218" data-width="552"
         data-show-captions="False.ToString().ToLower()" data-show-text="false"
         data-allowfullscreen="true">
        <blockquote cite="https://graph.facebook.com/100010733509218/posts/2002622676772163/" class="fb-xfbml-parse-ignore"><p>Στις Σπέτσες με τον καλύτερο τρόπο.

Οι συναντήσεις εργασίας στις Σπέτσες που πρότεινε ο σύντροφος πρόεδρος Κασσελακης...</p>Posted by <a href="#" role="button">Νίκος Καρανίκας</a> on&nbsp;<a href="https://graph.facebook.com/100010733509218/posts/2002622676772163/">Thursday, January 18, 2024</a></blockquote>
    </div>
</div>

Καλοί μου άνθρωποι, ο πρόεδρος σας καλεί για να κάνετε αυτό που κάνει κάθε μεγάλος σοβαρός ζωντανός οργανισμός όταν θέλει να υπάρχει σύσφιξη και όσμωση σχέσεων και ιδεών και γι αυτό δεν σας καλεί για να περάσετε τούφα όπως έχετε συνηθίσει προφανώς για να αντιδράτε έτσι, αλλά για εργασία με ευθύνες και χρεώσεις σε ωραίο περιβάλλον. Γιαυτο και θέλει να είστε προετοιμασμένοι με κείμενα και Power point…όσο άγνωστο και αν είναι. <br>
 <br>
 Είμαστε στο 2024 και καλό είναι να μαθαίνουμε από την εποχή μας και οχι από το ξεπερασμένο παρελθόν με τα άχρηστα τοτέμ και τα ανούσια ιερά. Είμαστε κόμμα σύγχρονο της αριστεράς και οχι το ντουλάπι του αναχρονισμού λόγω ιδεολογικής οικειότητας και συνήθειας.<br>
 <br>
<div class="bannerWrp stickyBanner configurable-element mceNonEditable server-side-component"
     data-component="Atcom.Sites.ProtoThema.Components.HtmlSnippets.Banner"
     data-configuration-type="Atcom.Sites.ProtoThema.Models.Banners.BannerConfiguration, Atcom.Sites.ProtoThema" data-plugin-mobsticky>
    <div class="bannerCnt bannerWrp__inner">
       

    <div id="banner-div-147278f6-54e8-4a4f-a69c-9a5baf3d7d41" class="banner-container b300x250">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Mobile_Article_4";
            var size = [[300,250],[300,600],[336,280]];
            var divId = "banner-div-147278f6-54e8-4a4f-a69c-9a5baf3d7d41";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":600},{"ScreenWidth":480,"ScreenHeight":0,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":1024,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":336,"BannerHeight":280},{"ScreenWidth":480,"ScreenHeight":0,"BannerWidth":336,"BannerHeight":280}];

            var refreshIntervalInSec = 0;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-147278f6-54e8-4a4f-a69c-9a5baf3d7d41");
            })
        }, 1000);
    </script>
    </div>
</div>
 Οι τομές του συντρόφου Κασσελακη προφανώς δεν ενοχλούν μόνο την αντιδραστική Δεξιά και ας είναι για το κοινό καλό. Ο συντροφος πρόεδρος αρχικά ανακάτεψε φέρνοντας σε δύσκολη θέση από την αρχή την Βαλτωμένη αναχρονιστική αριστερά των δογμάτων και στην πορεία όλη την κοινωνία των ξεπερασμένων απόψεων. Ο ΣΥΡΙΖΑ ΠΣ αποτελει την λύση για τα ζητήματα που προκύπτουν και έχουν στον πυρήνα τους τον άνθρωπο και την κοινωνία όλη.<br>
 <br>
 <br>
 <br>
 <strong><a href="https://www.protothema.gr/oles-oi-eidiseis/" target="_blank" rel="noopener noreferrer">Ειδήσεις σήμερα:</a></strong><br>
 <br>
 <strong><a href="https://www.protothema.gr/greece/article/1457047/video-xanahtupise-melos-summorias-se-polukatoikia-sto-peristeri-gia-na-klepsei-halkosolines/" target="_blank" rel="noopener noreferrer">Βίντεο: Πήγε δεύτερη φορά για να κλέψει χαλκοσωλήνες στην ίδια πολυκατοικία - Αυτή τη φορά τα κατάφερε</a></strong><br>
 <br>
 <strong><a href="https://www.protothema.gr/world/article/1457051/germania-ta-kapsonia-pou-ekanan-oi-mousoulmanoi-mathites-pou-ithelan-na-epivalloun-ti-saria-se-sholeio/" target="_blank" rel="noopener noreferrer">Γερμανία: Τα καψόνια που έκαναν οι μουσουλμάνοι μαθητές που ήθελαν να επιβάλλουν τη Σαρία σε σχολείο</a></strong><br>
 <br>
 <strong><a href="https://www.protothema.gr/world/article/1457036/keit-midleton-giati-tha-kathisei-sto-nosokomeio-duo-evdomades/" target="_blank" rel="noopener noreferrer">Κέιτ Μίντλετον: Πόσο σοβαρό είναι το πρόβλημά της για να χρειάζεται δύο εβδομάδες νοσηλεία; - Τι λέει Βρετανίδα γιατρός</a></strong></div>
                <div class="articleContainer__mainLeft">
                    

<div class="articleInfo">
    <div class="wrp">
        <time data-timeago="" datetime="2024-01-19T00:20:00+02:00">19.01.2024, 00:20</time>
                    <a href="https://www.protothema.gr/politics/article/1457197/akrita-den-mas-paratas-re-karanika-asapera-agori-mou/#Comments" class="comment">139 ΣΧΟΛΙΑ</a>
    </div>
</div>

                    <div class="shareButtons mobileHidden">
                        <div class="cnt">
                            <!-- ShareThis BEGIN --><div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->
                        </div>
                    </div>


                        <div class="leftArticles">
<div class="related">
    <h4>Σχετικά Άρθρα</h4>
    <div class="articles">
        

<article>
        <a href="https://www.protothema.gr/politics/article/1457109/karanikas-kata-oson-adidroun-gia-tis-spetses-den-sas-kalei-gia-toufa-opos-ehete-sunithisei-alla-gia-ergasia/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457109/karanikas-kata-oson-adidroun-gia-tis-spetses-den-sas-kalei-gia-toufa-opos-ehete-sunithisei-alla-gia-ergasia/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/360x203/_webp/files/2023-10-22/KARANIKAS_SURIZA_SXOLIASMOS.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/360x203/_jp2/files/2023-10-22/KARANIKAS_SURIZA_SXOLIASMOS.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/360x203/files/2023-10-22/KARANIKAS_SURIZA_SXOLIASMOS.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/360x203/files/2023-10-22/KARANIKAS_SURIZA_SXOLIASMOS.jpg" fetchpriority="" alt="Καρανίκας κατά όσων αντιδρούν για τις Σπέτσες: Ο Κασσελάκης δεν σας καλεί για τούφα όπως έχετε συνηθίσει αλλά για εργασία" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457109/karanikas-kata-oson-adidroun-gia-tis-spetses-den-sas-kalei-gia-toufa-opos-ehete-sunithisei-alla-gia-ergasia/">Καρανίκας κατά όσων αντιδρούν για τις Σπέτσες: Ο Κασσελάκης δεν σας καλεί για τούφα όπως έχετε συνηθίσει αλλά για εργασία</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-18T17:56:00+02:00">18.01.2024, 17:56</time>                                    </span>
            </div>
            </div>
</article>


    </div>
</div>
                                                    </div>
                </div>
                <div class="multipleBanners">
                    
<div class="asideSection fixedElem">
    <div class="cnt">
        

<div class="bannerWrp">
    <div class="bannerWrp__inner">
        
    <div id="banner-div-d83ef151-41c1-4548-8943-48ad49abafce" class="banner-container b300x250">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Side_1";
            var size = [[300,250],[300,600]];
            var divId = "banner-div-d83ef151-41c1-4548-8943-48ad49abafce";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":300,"BannerHeight":600}];

            var refreshIntervalInSec = 31;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-d83ef151-41c1-4548-8943-48ad49abafce");
            })
        }, 1000);
    </script>

    </div>
</div>

    </div>
</div>


<div class="asideSection fixedElem">
    <div class="cnt">
        

<div class="bannerWrp">
    <div class="bannerWrp__inner">
        
    <div id="banner-div-078ac57b-2ccc-4592-8f34-59f2c437b84f" class="banner-container b300x250">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Side_2";
            var size = [[300,250]];
            var divId = "banner-div-078ac57b-2ccc-4592-8f34-59f2c437b84f";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":300,"BannerHeight":250}];

            var refreshIntervalInSec = 31;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-078ac57b-2ccc-4592-8f34-59f2c437b84f");
            })
        }, 1000);
    </script>

    </div>
</div>

    </div>
</div>

                </div>

                    <div class="infoContent">
                        <div style="padding-top: 20px; font-size: 16px;"><span>Ακολουθήστε το <a href="https://news.google.com/publications/CAAqBwgKMKPEiAswlKKHAw?hl=el&amp;gl=GR&amp;ceid=GR:el&amp;fbclid=IwAR34LutBkQmMZWiDyYKly_KEN1dHH3lO3QzXjUhYbu9NSI9TlSOTGGmWi-g" target="_blank" rel="noopener noreferrer">protothema.gr στο Google News</a> και μάθετε πρώτοι όλες τις ειδήσεις<br>
 <br>
 Δείτε όλες τις τελευταίες <a href="/oles-oi-eidiseis/" target="_blank" rel="noopener noreferrer">Ειδήσεις</a> από την Ελλάδα και τον Κόσμο, τη στιγμή που συμβαίνουν, στο <a href="/" target="_blank" rel="noopener noreferrer">Protothema.gr</a></span></div>
                    </div>
                <div class="bottomComponents">
                    <aside class="aside bottomAside fixedElem">
                        <div class="cnt">
                            
<div class="asideSection fixedElem">
    <div class="cnt">
        

<div class="bannerWrp">
    <div class="bannerWrp__inner">
        
    <div id="banner-div-182a5eb0-a280-4e19-b8ed-13e0ee55dc3b" class="banner-container b300x250">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Side_comments";
            var size = [[300,250],[300,600]];
            var divId = "banner-div-182a5eb0-a280-4e19-b8ed-13e0ee55dc3b";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":300,"BannerHeight":600}];

            var refreshIntervalInSec = 31;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-182a5eb0-a280-4e19-b8ed-13e0ee55dc3b");
            })
        }, 1000);
    </script>

    </div>
</div>

    </div>
</div>

                        </div>
                    </aside>
                    <div id="Comments" class="section comSectionWrapper">
                        <a name="Comments"></a>
                        
    <div data-plugin-lazycontent="{&quot;Url&quot;:&quot;https://www.protothema.gr/ajax/Atcom.Sites.ProtoThema.Components.ArticleDetail.Comments/?articleID=1457197&amp;articleCategoryID=2&amp;excludeBanners=False&quot;}"></div>

                    </div>

                    <div id="PA-Taboola"></div>

                    

<div class="newsFeedSection">
    <div class="title brd">
        <h2><span>ΡΟΗ ΕΙΔΗΣΕΩΝ</span></h2>
    </div>
    <div data-plugin-tabs="">
        <div class="tabsHeader">
                <span class="active" data-tab="articles1">Ειδήσεις</span>
                <span data-tab="articles2">Δημοφιλή</span>
                <span data-tab="articles3">Σχολιασμένα</span>
        </div>
        <div class="articlesWrp">
                <div class="articles tabsCnt active">
                    <div id="articles1" class="tblMax">


<article>
        <a href="https://www.protothema.gr/sports/article/1457490/eftase-stin-ellada-o-dragofski-thelo-titlous-me-ton-panathinaiko-metrise-i-parousia-terim-video/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/sports/article/1457490/eftase-stin-ellada-o-dragofski-thelo-titlous-me-ton-panathinaiko-metrise-i-parousia-terim-video/">Έφτασε στην Ελλάδα ο Ντραγκόφσκι: &#171;Θέλω τίτλους με τον Παναθηναϊκό, μέτρησε η παρουσία Τερίμ&#187; - Βίντεο </a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:40:00+02:00">19.01.2024, 16:40</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/greece/article/1457489/kukloma-mastropeias-eleutheroi-me-orous-duo-katigoroumenoi-meta-tis-apologies-tous-pithani-i-ekdosi-neon-edalmaton/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/greece/article/1457489/kukloma-mastropeias-eleutheroi-me-orous-duo-katigoroumenoi-meta-tis-apologies-tous-pithani-i-ekdosi-neon-edalmaton/">Ελεύθεροι με όρους δύο κατηγορούμενοι για το κύκλωμα μαστροπείας μετά τις απολογίες τους - Πιθανή η έκδοση νέων ενταλμάτων</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:36:00+02:00">19.01.2024, 16:36</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/life-style/article/1457487/mariska-hartzitei-leei-oti-aisthanetai-kalutera-apo-otan-milise-gia-ton-viasmo-tis/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/life-style/article/1457487/mariska-hartzitei-leei-oti-aisthanetai-kalutera-apo-otan-milise-gia-ton-viasmo-tis/">Η Μαρίσκα Χάρτζιτεϊ λέει ότι αισθάνεται καλύτερα από όταν μίλησε για τον βιασμό της</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:35:04+02:00">19.01.2024, 16:35</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/greece/article/1457483/ede-diatahthike-gia-ton-astunomiko-pou-sunelifthi-gia-upexairesi-upiresiakon-oplon/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/greece/article/1457483/ede-diatahthike-gia-ton-astunomiko-pou-sunelifthi-gia-upexairesi-upiresiakon-oplon/">ΕΔΕ διατάχθηκε για τον αστυνομικό που συνελήφθη για υπεξαίρεση υπηρεσιακών όπλων</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:30:53+02:00">19.01.2024, 16:30</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.marieclaire.gr/sex/o-tempelis-gios-tou-sintrofou-mou-katastrefi-ti-sexoualiki-mas-zoi-o-provlimatismos-mias-ginekas-ke-i-apantisi-tis-idikou-gia-ta-oria-pou-prepi-na-thetoume-stis-schesis/" target="_blank" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.marieclaire.gr/sex/o-tempelis-gios-tou-sintrofou-mou-katastrefi-ti-sexoualiki-mas-zoi-o-provlimatismos-mias-ginekas-ke-i-apantisi-tis-idikou-gia-ta-oria-pou-prepi-na-thetoume-stis-schesis/" target="_blank">&#171;Ο τεμπέλης γιος του συντρόφου μου καταστρέφει τη σεξουαλική μας ζωή&#187;: Η ειδικός απαντά για τα όρια στις σχέσεις</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:30:00+02:00">19.01.2024, 16:30</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.marieclaire.gr/art-lifestyle/erchete-sintoma-i-nea-sira-gia-ti-schesi-ton-christian-dior-ke-coco-chanel/" target="_blank" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.marieclaire.gr/art-lifestyle/erchete-sintoma-i-nea-sira-gia-ti-schesi-ton-christian-dior-ke-coco-chanel/" target="_blank">Η σειρά για τη σχέση των Christian Dior και Coco Chanel που για κανένα λόγο δεν θα χάσουμε </a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:28:00+02:00">19.01.2024, 16:28</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/life-style/article/1457481/nikos-surigos-ta-lefta-pou-vgazoun-apo-tin-trap-einai-lefta-vammena-me-aima/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/life-style/article/1457481/nikos-surigos-ta-lefta-pou-vgazoun-apo-tin-trap-einai-lefta-vammena-me-aima/">Νίκος Συρίγος: Τα λεφτά που βγάζουν από την τραπ, είναι λεφτά βαμμένα με αίμα</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:22:48+02:00">19.01.2024, 16:22</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/greece/article/1457480/alert-seismos-46-rihter-anoihta-tis-kumis-aisthitos-stin-attiki/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/greece/article/1457480/alert-seismos-46-rihter-anoihta-tis-kumis-aisthitos-stin-attiki/">Σεισμός 4,8 Ρίχτερ ανοιχτά της Κύμης - Αισθητός στην Αττική</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:17:00+02:00">19.01.2024, 16:17</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/greece/article/1457472/greek-mafia-oi-ektelestes-akolouthisan-me-autokinito-ena-apo-ta-thumata-deite-fotografies-tis-diadromis-tous/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/greece/article/1457472/greek-mafia-oi-ektelestes-akolouthisan-me-autokinito-ena-apo-ta-thumata-deite-fotografies-tis-diadromis-tous/">Οι εκτελεστές της Greek Mafia ακολούθησαν με αυτοκίνητο ένα από τα θύματα - Δείτε φωτογραφίες της διαδρομής τους</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:13:21+02:00">19.01.2024, 16:13</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/politics/article/1457479/xekina-i-sunedriasi-ton-spetson-me-van-eftasan-stin-oikia-kasselaki-oi-vouleutes-tou-suriza/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457479/xekina-i-sunedriasi-ton-spetson-me-van-eftasan-stin-oikia-kasselaki-oi-vouleutes-tou-suriza/">Ξεκινά η &#171;συνεδρίαση των Σπετσών&#187;: Με βαν έφτασαν στην οικία Κασσελάκη οι βουλευτές του ΣΥΡΙΖΑ</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:12:00+02:00">19.01.2024, 16:12</time>                                    </span>
            </div>
            </div>
</article>


                    </div>
                        <a href="/oles-oi-eidiseis/" class="linkButton">ΔΕΙΤΕ ΟΛΕΣ ΤΙΣ ΕΙΔΗΣΕΙΣ<span class="icon-arrow-right--small"></span></a>
                </div>
                <div class="articles tabsCnt">
                    <div id="articles2" class="tblMax">


<article>
        <a href="https://www.protothema.gr/stories/article/1457228/enoples-dunameis-i-aktinografia-tis-diavolovdomadas-ton-ouk-oi-paraisthiseis-oi-anakriseis-kai-i-roza/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/stories/article/1457228/enoples-dunameis-i-aktinografia-tis-diavolovdomadas-ton-ouk-oi-paraisthiseis-oi-anakriseis-kai-i-roza/">Η αποκάλυψη της διαβολοβδομάδας των ΟΥΚ: Οι παραισθήσεις, οι ανακρίσεις και η... Ρόζα - Δείτε βίντεο</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T07:57:00+02:00">19.01.2024, 07:57</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/politics/article/1457220/epeisodiaka-xekina-i-sunedriasi-ton-spetson-to-epeisodio-akrita-karanika-kai-oi-epitheseis-sta-social-media/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457220/epeisodiaka-xekina-i-sunedriasi-ton-spetson-to-epeisodio-akrita-karanika-kai-oi-epitheseis-sta-social-media/">Επεισοδιακά ξεκινά η συνεδρίαση των Σπετσών: Το σκηνικό Ακρίτα - Καρανίκα και οι επιθέσεις στα social media</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T08:15:00+02:00">19.01.2024, 08:15</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/life-style/article/1457294/vensan-kasel-i-proti-dimosia-emfanisi-me-tin-kata-30-hronia-neoteri-sudrofo-tou/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/life-style/article/1457294/vensan-kasel-i-proti-dimosia-emfanisi-me-tin-kata-30-hronia-neoteri-sudrofo-tou/">Η πρώτη δημόσια εμφάνιση του Βενσάν Κασέλ με την κατά 30 χρόνια νεότερη σύντροφό του</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T10:13:00+02:00">19.01.2024, 10:13</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/life-style/article/1457354/giorgos-labatos-hrostaei-12000-euro-ston-marko-seferli-meta-apo-dikastiki-tous-diamahi/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/life-style/article/1457354/giorgos-labatos-hrostaei-12000-euro-ston-marko-seferli-meta-apo-dikastiki-tous-diamahi/">Ο Γιώργος Λαμπάτος χρωστάει ακόμη τα 12.000 ευρώ στον Μάρκο Σεφερλή μετά από δικαστική τους διαμάχη</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T11:52:00+02:00">19.01.2024, 11:52</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/life-style/article/1457283/katerina-peftitsi-horise-apo-ton-queer-suzugo-tis-o-gamos-mas-kratise-5-mines-eipe/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/life-style/article/1457283/katerina-peftitsi-horise-apo-ton-queer-suzugo-tis-o-gamos-mas-kratise-5-mines-eipe/">Χώρισε από τον queer σύζυγό της η Κατερίνα Πεφτίτση - Ο γάμος μας κράτησε 5 μήνες, είπε</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T09:53:43+02:00">19.01.2024, 09:53</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/greece/article/1457222/trohaio-dustuhima-sti-suggrou-nekros-anavatis-motosikletas-traumatias-i-sunepivatis/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/greece/article/1457222/trohaio-dustuhima-sti-suggrou-nekros-anavatis-motosikletas-traumatias-i-sunepivatis/">Τραγωδία στη Συγγρού: Νεκρός αναβάτης μοτοσικλέτας, τραυματίας η συνεπιβάτης - Η μηχανή τους πήρε φωτιά</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T06:50:00+02:00">19.01.2024, 06:50</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/environment/article/1457225/klimatiki-allagi-poies-periohes-tis-elladas-tha-plirosoun-to-megalutero-kostos-an-anevei-i-stathmi-tis-thalassas/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/environment/article/1457225/klimatiki-allagi-poies-periohes-tis-elladas-tha-plirosoun-to-megalutero-kostos-an-anevei-i-stathmi-tis-thalassas/">Ποιες περιοχές της Ελλάδας θα πληρώσουν το μεγαλύτερο κόστος αν ανέβει η στάθμη της θάλασσας</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T07:23:00+02:00">19.01.2024, 07:23</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/world/article/1457243/agia-sofia-estrosan-me-parke-ta-istorika-skalia-grafei-i-cumhuriyet/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/world/article/1457243/agia-sofia-estrosan-me-parke-ta-istorika-skalia-grafei-i-cumhuriyet/">&#171;Έστρωσαν με παρκέ τα ιστορικά σκαλιά της Αγίας Σοφίας&#187; γράφει η Cumhuriyet - Δείτε φωτογραφίες</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T08:44:00+02:00">19.01.2024, 08:44</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/world/article/1457241/keit-midleton-me-to-stagonometro-oi-plirofories-gia-tin-ugeia-tis-sto-pleuro-tis-o-gouiliam/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/world/article/1457241/keit-midleton-me-to-stagonometro-oi-plirofories-gia-tin-ugeia-tis-sto-pleuro-tis-o-gouiliam/">Με το σταγονόμετρο οι πληροφορίες για Κέιτ Μίντλετον - Αναβλήθηκε περιοδεία της τον Μάρτιο</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T08:41:00+02:00">19.01.2024, 08:41</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/greece/article/1457240/megara-sunelifthi-o-24hronos-roma-patrios-pou-xulokopise-agria-ton-4hrono/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/greece/article/1457240/megara-sunelifthi-o-24hronos-roma-patrios-pou-xulokopise-agria-ton-4hrono/">Συνελήφθη ο 24χρονος Ρομά που ξυλοκόπησε άγρια τον 4χρονο στα Μεγάρα</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T08:39:00+02:00">19.01.2024, 08:39</time>                                    </span>
            </div>
            </div>
</article>


                    </div>
                </div>
                <div class="articles tabsCnt">
                    <div id="articles3" class="tblMax">


<article>
        <a href="https://www.protothema.gr/greece/article/1457310/arhiepiskopos-ieronumos-tha-borouse-na-ginei-dimopsifisma-gia-ta-omofula-zeugaria/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/greece/article/1457310/arhiepiskopos-ieronumos-tha-borouse-na-ginei-dimopsifisma-gia-ta-omofula-zeugaria/">Αρχιεπίσκοπος Ιερώνυμος:  Θα μπορούσε να γίνει δημοψήφισμα για τα ομόφυλα ζευγάρια</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T10:41:00+02:00">19.01.2024, 10:41</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/">Απάντηση της κυβέρνησης στον Ιερώνυμο για τα ομόφυλα: Στην Ελλάδα τα ζητήματα δικαιωμάτων δεν λύνονται με δημοψηφίσματα</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:39:00+02:00">19.01.2024, 13:39</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/politics/article/1457286/kuriakos-mitsotakis-live-i-sunedeuxi-sto-bloomberg-apo-to-davos/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457286/kuriakos-mitsotakis-live-i-sunedeuxi-sto-bloomberg-apo-to-davos/">Μητσοτάκης στο Bloomberg: Την ερχομένη εβδομάδα τα ομόφυλα στο υπουργικό - Νόμος του κράτους τον Φεβρουάριο</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T10:14:00+02:00">19.01.2024, 10:14</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/stories/article/1457228/enoples-dunameis-i-aktinografia-tis-diavolovdomadas-ton-ouk-oi-paraisthiseis-oi-anakriseis-kai-i-roza/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/stories/article/1457228/enoples-dunameis-i-aktinografia-tis-diavolovdomadas-ton-ouk-oi-paraisthiseis-oi-anakriseis-kai-i-roza/">Η αποκάλυψη της διαβολοβδομάδας των ΟΥΚ: Οι παραισθήσεις, οι ανακρίσεις και η... Ρόζα - Δείτε βίντεο</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T07:57:00+02:00">19.01.2024, 07:57</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/politics/article/1457197/akrita-den-mas-paratas-re-karanika-asapera-agori-mou/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457197/akrita-den-mas-paratas-re-karanika-asapera-agori-mou/">Ακρίτα: &#171;Δεν μας παρατάς ρε Καρανίκα… ασαπέρα αγόρι μου&#187;</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T00:20:00+02:00">19.01.2024, 00:20</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/politics/article/1457220/epeisodiaka-xekina-i-sunedriasi-ton-spetson-to-epeisodio-akrita-karanika-kai-oi-epitheseis-sta-social-media/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457220/epeisodiaka-xekina-i-sunedriasi-ton-spetson-to-epeisodio-akrita-karanika-kai-oi-epitheseis-sta-social-media/">Επεισοδιακά ξεκινά η συνεδρίαση των Σπετσών: Το σκηνικό Ακρίτα - Καρανίκα και οι επιθέσεις στα social media</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T08:15:00+02:00">19.01.2024, 08:15</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/life-style/article/1457354/giorgos-labatos-hrostaei-12000-euro-ston-marko-seferli-meta-apo-dikastiki-tous-diamahi/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/life-style/article/1457354/giorgos-labatos-hrostaei-12000-euro-ston-marko-seferli-meta-apo-dikastiki-tous-diamahi/">Ο Γιώργος Λαμπάτος χρωστάει ακόμη τα 12.000 ευρώ στον Μάρκο Σεφερλή μετά από δικαστική τους διαμάχη</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T11:52:00+02:00">19.01.2024, 11:52</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/politics/article/1457385/suriza-stis-spetses-oi-vouleutes-tou-suriza-i-mustiki-afixi-kasselaki-sto-nisi/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457385/suriza-stis-spetses-oi-vouleutes-tou-suriza-i-mustiki-afixi-kasselaki-sto-nisi/">Στις Σπέτσες οι βουλευτές του ΣΥΡΙΖΑ - Η νυχτερινή άφιξη Κασσελάκη και η συνεδρίαση στο σπίτι του</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T12:39:00+02:00">19.01.2024, 12:39</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/greece/article/1457086/pispirigou-akomi-ki-an-allaxa-apo-lathos-ti-dosologia-farmakou-to-paidi-den-pethane-sta-heria-mou/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/greece/article/1457086/pispirigou-akomi-ki-an-allaxa-apo-lathos-ti-dosologia-farmakou-to-paidi-den-pethane-sta-heria-mou/">Πισπιρίγκου: Ακόμη κι αν άλλαξα από λάθος τη δοσολογία φαρμάκου, το παιδί δεν πέθανε στα χέρια μου</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-18T17:01:00+02:00">18.01.2024, 17:01</time>                                    </span>
            </div>
            </div>
</article>



<article>
        <a href="https://www.protothema.gr/greece/article/1456951/epesan-molotof-stin-patision-meta-to-panekpaideutiko-sullalitirio/" class="mainLink"></a>
            <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/greece/article/1456951/epesan-molotof-stin-patision-meta-to-panekpaideutiko-sullalitirio/">Έπεσαν μολότοφ στην Πατησίων μετά το πανεκπαιδευτικό συλλαλητήριο</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-18T16:57:00+02:00">18.01.2024, 16:57</time>                                    </span>
            </div>
            </div>
</article>


                    </div>
                </div>
        </div>
    </div>
</div>
                </div>
            </div>
        </div>
    </div>
</section>




<section class="section grayBg whiteColors">
    <div class="wrapper">
        <div class="title brd">
            <h2><span>BEST OF NETWORK</span></h2>
        </div>
        <div class="main">
            <div class="gridBox gridBox--cols3">
                <div class="article large">
                    

<article>
        <a href="https://www.newsauto.gr/news/o-ronalnto-zilepse-ton-zlatan-ke-agorase-to-idio-aftokinito/" target="_blank" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.newsauto.gr/news/o-ronalnto-zilepse-ton-zlatan-ke-agorase-to-idio-aftokinito/" target="_blank" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/488x275/_webp/files/2024-01-19/Ronaldo-1000-1.jpeg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/488x275/_jp2/files/2024-01-19/Ronaldo-1000-1.jpeg" type="image/jp2" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/488x275/files/2024-01-19/Ronaldo-1000-1.jpeg" fetchpriority="" alt="Ο Ρονάλντο ζήλεψε τον Ζλάταν και αγόρασε το ίδιο αυτοκίνητο" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.newsauto.gr/news/o-ronalnto-zilepse-ton-zlatan-ke-agorase-to-idio-aftokinito/" target="_blank">Ο Ρονάλντο ζήλεψε τον Ζλάταν και αγόρασε το ίδιο αυτοκίνητο</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:45:07+02:00">19.01.2024, 13:45</time>                                    </span>
            </div>
            </div>
</article>


                </div>
                <div class="article large">
                    

<article>
        <a href="https://www.olivemagazine.gr/magazia/cheiropoiites-pites-etoimes-gia-psisimo-22-pentanostimes-epiloges-apo-oli-tin-ellada/" target="_blank" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.olivemagazine.gr/magazia/cheiropoiites-pites-etoimes-gia-psisimo-22-pentanostimes-epiloges-apo-oli-tin-ellada/" target="_blank" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/488x275/_webp/files/2024-01-19/choriatiki_pita_spanaki_net.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/488x275/_jp2/files/2024-01-19/choriatiki_pita_spanaki_net.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/488x275/files/2024-01-19/choriatiki_pita_spanaki_net.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/488x275/files/2024-01-19/choriatiki_pita_spanaki_net.jpg" fetchpriority="" alt="Χειροποίητες πίτες, έτοιμες για ψήσιμο: 22 πεντανόστιμες επιλογές από όλη την Ελλάδα" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.olivemagazine.gr/magazia/cheiropoiites-pites-etoimes-gia-psisimo-22-pentanostimes-epiloges-apo-oli-tin-ellada/" target="_blank">Χειροποίητες πίτες, έτοιμες για ψήσιμο: 22 πεντανόστιμες επιλογές από όλη την Ελλάδα</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T09:50:00+02:00">19.01.2024, 09:50</time>                                    </span>
            </div>
            </div>
</article>


                </div>
                <div class="article large">
                    

<article>
        <a href="https://www.marieclaire.gr/horoscope/ta-zodia-pou-tha-ine-apistefta-tichera-ston-erota-to-2024/" target="_blank" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.marieclaire.gr/horoscope/ta-zodia-pou-tha-ine-apistefta-tichera-ston-erota-to-2024/" target="_blank" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/488x275/_webp/files/2024-01-19/lovingcouplezodiac.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/488x275/_jp2/files/2024-01-19/lovingcouplezodiac.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/488x275/files/2024-01-19/lovingcouplezodiac.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/488x275/files/2024-01-19/lovingcouplezodiac.jpg" fetchpriority="" alt="Τα ζώδια που θα είναι απίστευτα τυχερά στον έρωτα το 2024" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.marieclaire.gr/horoscope/ta-zodia-pou-tha-ine-apistefta-tichera-ston-erota-to-2024/" target="_blank">Τα ζώδια που θα είναι απίστευτα τυχερά στον έρωτα το 2024</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T12:30:00+02:00">19.01.2024, 12:30</time>                                    </span>
            </div>
            </div>
</article>


                </div>
                    <div class="article typeWide inlineContent mobInlineContent">
                        

<article>
        <a href="https://www.olivemagazine.gr/prosopa/paragogoi/mia-amazona-ston-elaiona-tis-chalkidikis/" target="_blank" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.olivemagazine.gr/prosopa/paragogoi/mia-amazona-ston-elaiona-tis-chalkidikis/" target="_blank" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/488x275/_webp/files/2024-01-19/amazona_elaionas_net.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/488x275/_jp2/files/2024-01-19/amazona_elaionas_net.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/488x275/files/2024-01-19/amazona_elaionas_net.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/488x275/files/2024-01-19/amazona_elaionas_net.jpg" fetchpriority="" alt="7000 ελαιόδεντρα, 5 διαφορετικές ποικιλίες ελιάς και μία «Αμαζόνα» από τη Χαλκιδική " class="lazyload" />
</picture>
            </a>
                    </figure>
            <div class="wrp wrp--mobile">
            <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:37:00+02:00">19.01.2024, 13:37</time>                            </span>
        </div>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.olivemagazine.gr/prosopa/paragogoi/mia-amazona-ston-elaiona-tis-chalkidikis/" target="_blank">7000 ελαιόδεντρα, 5 διαφορετικές ποικιλίες ελιάς και μία &#171;Αμαζόνα&#187; από τη Χαλκιδική </a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:37:00+02:00">19.01.2024, 13:37</time>                                    </span>
            </div>
            </div>
</article>


                    </div>
                    <div class="article typeWide inlineContent mobInlineContent">
                        

<article>
        <a href="https://bs.serving-sys.com/Serving/adServer.bs?cn=trd&amp;pli=1079990342&amp;gdpr=${GDPR}&amp;gdpr_consent=${GDPR_CONSENT_68}&amp;us_privacy=${US_PRIVACY}&amp;adid=1092471622&amp;ord=[timestamp]" target="_blank" class="mainLink"></a>
    <script>

var img = new Image();

img.src = 'https://bs.serving-sys.com/Serving/adServer.bs?cn=display&c=19&pli=1079990342&gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_68}&us_privacy=${US_PRIVACY}&adid=1092471622&ord=' + (new Date()).getTime();

img.style.display = 'none';

</script>
            <figure data-image-mode="article">
            <a href="https://bs.serving-sys.com/Serving/adServer.bs?cn=trd&amp;pli=1079990342&amp;gdpr=${GDPR}&amp;gdpr_consent=${GDPR_CONSENT_68}&amp;us_privacy=${US_PRIVACY}&amp;adid=1092471622&amp;ord=[timestamp]" target="_blank" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/488x275/_webp/files/2024-01-16/truehead.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/488x275/_jp2/files/2024-01-16/truehead.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/488x275/files/2024-01-16/truehead.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/488x275/files/2024-01-16/truehead.jpg" fetchpriority="" alt="Στο πολυαναμενόμενο «True Detective: Night Country», οι φόνοι στην πολική νύχτα έρχονται αποκλειστικά στα Novacinema! " class="lazyload" />
</picture>
            </a>
                    </figure>
            <div class="wrp wrp--mobile">
            <span class="update_well">
<time data-timeago="" datetime="2024-01-19T11:21:00+02:00">19.01.2024, 11:21</time>                            </span>
        </div>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://bs.serving-sys.com/Serving/adServer.bs?cn=trd&amp;pli=1079990342&amp;gdpr=${GDPR}&amp;gdpr_consent=${GDPR_CONSENT_68}&amp;us_privacy=${US_PRIVACY}&amp;adid=1092471622&amp;ord=[timestamp]" target="_blank">Στο πολυαναμενόμενο &#171;True Detective: Night Country&#187;, οι φόνοι στην πολική νύχτα έρχονται αποκλειστικά στα Novacinema! </a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T11:21:00+02:00">19.01.2024, 11:21</time>                                    </span>
            </div>
            </div>
</article>


                    </div>
                    <div class="article typeWide inlineContent mobInlineContent">
                        

<article>
        <a href="https://www.gazzetta.gr/plus/2295929/ellinas-tiktoker-katanalonei-terasties-posotites-fagitoy-kai-kanei-thraysi-vid" target="_blank" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.gazzetta.gr/plus/2295929/ellinas-tiktoker-katanalonei-terasties-posotites-fagitoy-kai-kanei-thraysi-vid" target="_blank" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/488x275/_webp/files/2024-01-19/ellinas-tiktoker-arthrou.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/488x275/_jp2/files/2024-01-19/ellinas-tiktoker-arthrou.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/488x275/files/2024-01-19/ellinas-tiktoker-arthrou.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/488x275/files/2024-01-19/ellinas-tiktoker-arthrou.jpg" fetchpriority="" alt="Έλληνας TikToker καταναλώνει τεράστιες ποσότητες φαγητού και κάνει θραύση (vid)" class="lazyload" />
</picture>
            </a>
                    </figure>
            <div class="wrp wrp--mobile">
            <span class="update_well">
<time data-timeago="" datetime="2024-01-19T15:27:00+02:00">19.01.2024, 15:27</time>                            </span>
        </div>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.gazzetta.gr/plus/2295929/ellinas-tiktoker-katanalonei-terasties-posotites-fagitoy-kai-kanei-thraysi-vid" target="_blank">Έλληνας TikToker καταναλώνει τεράστιες ποσότητες φαγητού και κάνει θραύση (vid)</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T15:27:00+02:00">19.01.2024, 15:27</time>                                    </span>
            </div>
            </div>
</article>


                    </div>
                    <div class="article typeWide inlineContent mobInlineContent">
                        

<article>
        <a href="https://www.travel.gr/best-of/6-exairetikes-tavernes-sta-voyna-tis-el/" target="_blank" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.travel.gr/best-of/6-exairetikes-tavernes-sta-voyna-tis-el/" target="_blank" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/488x275/_webp/files/2022-10-12/taverna-ellada.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/488x275/_jp2/files/2022-10-12/taverna-ellada.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/488x275/files/2022-10-12/taverna-ellada.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/488x275/files/2022-10-12/taverna-ellada.jpg" fetchpriority="" alt=" 6 εξαιρετικές ταβέρνες στα βουνά της Ελλάδας" class="lazyload" />
</picture>
            </a>
                    </figure>
            <div class="wrp wrp--mobile">
            <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:27:00+02:00">19.01.2024, 13:27</time>                            </span>
        </div>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.travel.gr/best-of/6-exairetikes-tavernes-sta-voyna-tis-el/" target="_blank"> 6 εξαιρετικές ταβέρνες στα βουνά της Ελλάδας</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:27:00+02:00">19.01.2024, 13:27</time>                                    </span>
            </div>
            </div>
</article>


                    </div>
                    <div class="article typeWide inlineContent mobInlineContent">
                        

<article>
        <a href="https://www.newsauto.gr/fleet-cars/vrochi-ta-prostima/" target="_blank" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.newsauto.gr/fleet-cars/vrochi-ta-prostima/" target="_blank" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/488x275/_webp/files/2022-08-17/Στιγμιοτυπο_2022-08-17__8_57_02_πμ.png" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/488x275/_jp2/files/2022-08-17/Στιγμιοτυπο_2022-08-17__8_57_02_πμ.png" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/488x275/files/2022-08-17/Στιγμιοτυπο_2022-08-17__8_57_02_πμ.png" type="image/png" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/488x275/files/2022-08-17/Στιγμιοτυπο_2022-08-17__8_57_02_πμ.png" fetchpriority="" alt="Ελλάδα: Βροχή πέφτουν τα πρόστιμα των 6.000 ευρώ σε κατόχους οχημάτων" class="lazyload" />
</picture>
            </a>
                    </figure>
            <div class="wrp wrp--mobile">
            <span class="update_well">
<time data-timeago="" datetime="2024-01-19T11:58:43+02:00">19.01.2024, 11:58</time>                            </span>
        </div>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.newsauto.gr/fleet-cars/vrochi-ta-prostima/" target="_blank">Ελλάδα: Βροχή πέφτουν τα πρόστιμα των 6.000 ευρώ σε κατόχους οχημάτων</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T11:58:43+02:00">19.01.2024, 11:58</time>                                    </span>
            </div>
            </div>
</article>


                    </div>
                    <div class="article typeWide inlineContent mobInlineContent">
                        

<article>
        <a href="https://www.marieclaire.gr/horoscope/afto-ine-to-pio-antikinoniko-zodio-apo-ola/" target="_blank" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.marieclaire.gr/horoscope/afto-ine-to-pio-antikinoniko-zodio-apo-ola/" target="_blank" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/488x275/_webp/files/2024-01-18/antisocialsigns.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/488x275/_jp2/files/2024-01-18/antisocialsigns.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/488x275/files/2024-01-18/antisocialsigns.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/488x275/files/2024-01-18/antisocialsigns.jpg" fetchpriority="" alt="Αυτό είναι το πιο αντικοινωνικό ζώδιο από όλα" class="lazyload" />
</picture>
            </a>
                    </figure>
            <div class="wrp wrp--mobile">
            <span class="update_well">
<time data-timeago="" datetime="2024-01-19T11:45:00+02:00">19.01.2024, 11:45</time>                            </span>
        </div>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.marieclaire.gr/horoscope/afto-ine-to-pio-antikinoniko-zodio-apo-ola/" target="_blank">Αυτό είναι το πιο αντικοινωνικό ζώδιο από όλα</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T11:45:00+02:00">19.01.2024, 11:45</time>                                    </span>
            </div>
            </div>
</article>


                    </div>
            </div>
        </div>
    </div>
</section>







<section class="section maxWidthSection articleGrid">
    <div class="wrapper">
            <div class="title brd">
                <h2>
                    <span>Δείτε Επίσης</span>
                </h2>
            </div>
        <div class="main">
                <div class="gridBox gridBox--cols2">
                    <div class="article fullWidth">
                        

<article>
        <a href="https://www.protothema.gr/politics/article/1457479/xekina-i-sunedriasi-ton-spetson-me-van-eftasan-stin-oikia-kasselaki-oi-vouleutes-tou-suriza/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457479/xekina-i-sunedriasi-ton-spetson-me-van-eftasan-stin-oikia-kasselaki-oi-vouleutes-tou-suriza/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/640x360/_webp/files/2024-01-19/oikeia-kasselaki-arthrou_2.jpg" type="image/webp" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/_jp2/files/2024-01-19/oikeia-kasselaki-arthrou_2.jpg" type="image/jp2" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/files/2024-01-19/oikeia-kasselaki-arthrou_2.jpg" type="image/jpeg" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_webp/files/2024-01-19/oikeia-kasselaki-arthrou_2.jpg" type="image/webp" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_jp2/files/2024-01-19/oikeia-kasselaki-arthrou_2.jpg" type="image/jp2" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/files/2024-01-19/oikeia-kasselaki-arthrou_2.jpg" type="image/jpeg" media="(min-width: 1280px)" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/750x422/files/2024-01-19/oikeia-kasselaki-arthrou_2.jpg" fetchpriority="" alt="Ξεκινά η «συνεδρίαση των Σπετσών»: Με βαν έφτασαν στην οικία Κασσελάκη οι βουλευτές του ΣΥΡΙΖΑ" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457479/xekina-i-sunedriasi-ton-spetson-me-van-eftasan-stin-oikia-kasselaki-oi-vouleutes-tou-suriza/">Ξεκινά η &#171;συνεδρίαση των Σπετσών&#187;: Με βαν έφτασαν στην οικία Κασσελάκη οι βουλευτές του ΣΥΡΙΖΑ</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T16:12:00+02:00">19.01.2024, 16:12</time>                                            <a href="https://www.protothema.gr/politics/article/1457479/xekina-i-sunedriasi-ton-spetson-me-van-eftasan-stin-oikia-kasselaki-oi-vouleutes-tou-suriza/" class="comment">
                            4
                        </a>
                </span>
            </div>
            </div>
</article>


                    </div>
                    <div class="article fullWidth">
                        

<article>
        <a href="https://www.protothema.gr/politics/article/1457459/androulakis-na-xanaginei-i-kede-to-organo-ton-autodioikitikon-kai-ohi-to-organo-tou-k-mitsotaki-gia-na-tous-eleghei/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457459/androulakis-na-xanaginei-i-kede-to-organo-ton-autodioikitikon-kai-ohi-to-organo-tou-k-mitsotaki-gia-na-tous-eleghei/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/640x360/_webp/files/2024-01-19/androulakis.jpg" type="image/webp" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/_jp2/files/2024-01-19/androulakis.jpg" type="image/jp2" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/files/2024-01-19/androulakis.jpg" type="image/jpeg" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_webp/files/2024-01-19/androulakis.jpg" type="image/webp" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_jp2/files/2024-01-19/androulakis.jpg" type="image/jp2" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/files/2024-01-19/androulakis.jpg" type="image/jpeg" media="(min-width: 1280px)" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/750x422/files/2024-01-19/androulakis.jpg" fetchpriority="" alt="Ανδρουλάκης: «Να ξαναγίνει η ΚΕΔΕ το όργανο των αυτοδιοικητικών και  όχι το όργανο του κ. Μητσοτάκη για να τους ελέγχει»" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457459/androulakis-na-xanaginei-i-kede-to-organo-ton-autodioikitikon-kai-ohi-to-organo-tou-k-mitsotaki-gia-na-tous-eleghei/">&#171;Να ξαναγίνει η ΚΕΔΕ το όργανο των αυτοδιοικητικών και  όχι το όργανο του κ. Μητσοτάκη για να τους ελέγχει&#187;, λέει ο Ανδρουλάκης</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T15:26:54+02:00">19.01.2024, 15:26</time>                                            <a href="https://www.protothema.gr/politics/article/1457459/androulakis-na-xanaginei-i-kede-to-organo-ton-autodioikitikon-kai-ohi-to-organo-tou-k-mitsotaki-gia-na-tous-eleghei/" class="comment">
                            1
                        </a>
                </span>
            </div>
            </div>
</article>


                    </div>
                    <div class="article fullWidth">
                        

<article>
        <a href="https://www.protothema.gr/politics/article/1457432/upourgeio-paideias-ta-epta-simeia-tou-nomoshediou-ti-allazei-se-iek-epal-erhodai-ta-keek/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457432/upourgeio-paideias-ta-epta-simeia-tou-nomoshediou-ti-allazei-se-iek-epal-erhodai-ta-keek/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/640x360/_webp/files/2024-01-18/pierrakakis.jpg" type="image/webp" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/_jp2/files/2024-01-18/pierrakakis.jpg" type="image/jp2" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/files/2024-01-18/pierrakakis.jpg" type="image/jpeg" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_webp/files/2024-01-18/pierrakakis.jpg" type="image/webp" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_jp2/files/2024-01-18/pierrakakis.jpg" type="image/jp2" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/files/2024-01-18/pierrakakis.jpg" type="image/jpeg" media="(min-width: 1280px)" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/750x422/files/2024-01-18/pierrakakis.jpg" fetchpriority="" alt="Υπουργείο Παιδείας: Τα επτά σημεία του νομοσχεδίου -  Τι αλλάζει σε ΙΕΚ, ΕΠΑΛ, έρχονται τα ΚΕΕΚ" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457432/upourgeio-paideias-ta-epta-simeia-tou-nomoshediou-ti-allazei-se-iek-epal-erhodai-ta-keek/">Τα επτά σημεία του νομοσχεδίου για την Παιδεία -  Τι αλλάζει σε ΙΕΚ, ΕΠΑΛ, έρχονται τα ΚΕΕΚ</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T14:48:00+02:00">19.01.2024, 14:48</time>                                            <a href="https://www.protothema.gr/politics/article/1457432/upourgeio-paideias-ta-epta-simeia-tou-nomoshediou-ti-allazei-se-iek-epal-erhodai-ta-keek/" class="comment">
                            3
                        </a>
                </span>
            </div>
            </div>
</article>


                    </div>
                    <div class="article fullWidth">
                        

<article>
        <a href="https://www.protothema.gr/politics/article/1457431/androulakis-einai-epitaktiki-anagi-na-katastisoume-ti-hora-mas-anthektiki-stis-sunepeies-tis-klimatikis-allagis/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457431/androulakis-einai-epitaktiki-anagi-na-katastisoume-ti-hora-mas-anthektiki-stis-sunepeies-tis-klimatikis-allagis/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/640x360/_webp/files/2024-01-19/NIKOS_O.jpg" type="image/webp" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/_jp2/files/2024-01-19/NIKOS_O.jpg" type="image/jp2" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/files/2024-01-19/NIKOS_O.jpg" type="image/jpeg" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_webp/files/2024-01-19/NIKOS_O.jpg" type="image/webp" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_jp2/files/2024-01-19/NIKOS_O.jpg" type="image/jp2" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/files/2024-01-19/NIKOS_O.jpg" type="image/jpeg" media="(min-width: 1280px)" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/750x422/files/2024-01-19/NIKOS_O.jpg" fetchpriority="" alt="Ανδρουλάκης: Είναι επιτακτική ανάγκη να καταστήσουμε τη χώρα μας ανθεκτική στις συνέπειες της κλιματικής αλλαγής" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457431/androulakis-einai-epitaktiki-anagi-na-katastisoume-ti-hora-mas-anthektiki-stis-sunepeies-tis-klimatikis-allagis/">Ανδρουλάκης: Είναι επιτακτική ανάγκη να καταστήσουμε τη χώρα μας ανθεκτική στις συνέπειες της κλιματικής αλλαγής</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T14:38:05+02:00">19.01.2024, 14:38</time>                                            <a href="https://www.protothema.gr/politics/article/1457431/androulakis-einai-epitaktiki-anagi-na-katastisoume-ti-hora-mas-anthektiki-stis-sunepeies-tis-klimatikis-allagis/" class="comment">
                            1
                        </a>
                </span>
            </div>
            </div>
</article>


                    </div>
                </div>

            <div class="mainWrp">
    <aside class="aside">
        <div class="asideSection fixedElem fullHeight">
            <div class="cnt">
                <div class="bannerWrp">
                    <div class="bannerWrp__inner">
                        
    <div id="banner-div-3759bd49-75fa-4348-a3cb-c9f75e8bfc71" class="banner-container b300x250">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Side_infinite";
            var size = [[300,250],[300,600]];
            var divId = "banner-div-3759bd49-75fa-4348-a3cb-c9f75e8bfc71";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":300,"BannerHeight":600}];

            var refreshIntervalInSec = 31;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-3759bd49-75fa-4348-a3cb-c9f75e8bfc71");
            })
        }, 1000);
    </script>

                    </div>
                </div>
            </div>
        </div>
    </aside>

                <div class="main">
                    <div class="gridBox gridBox--cols1">
                                <div class="article inlineContent medium">
            

<article>
        <a href="https://www.protothema.gr/politics/article/1457425/papastaurou-i-stirixi-tis-ellinikis-oikogeneias-kedriki-proteraiotita-tis-kuvernisis/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457425/papastaurou-i-stirixi-tis-ellinikis-oikogeneias-kedriki-proteraiotita-tis-kuvernisis/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/360x203/_webp/files/2024-01-19/papastavrou.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/360x203/_jp2/files/2024-01-19/papastavrou.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/360x203/files/2024-01-19/papastavrou.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/360x203/files/2024-01-19/papastavrou.jpg" fetchpriority="" alt="Παπασταύρου: Η στήριξη της ελληνικής οικογένειας κεντρική προτεραιότητα της Κυβέρνησης" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457425/papastaurou-i-stirixi-tis-ellinikis-oikogeneias-kedriki-proteraiotita-tis-kuvernisis/">Παπασταύρου: Η στήριξη της ελληνικής οικογένειας κεντρική προτεραιότητα της Κυβέρνησης</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T14:20:00+02:00">19.01.2024, 14:20</time>                                            <a href="https://www.protothema.gr/politics/article/1457425/papastaurou-i-stirixi-tis-ellinikis-oikogeneias-kedriki-proteraiotita-tis-kuvernisis/" class="comment">
                            5
                        </a>
                </span>
            </div>
            </div>
</article>


        </div>
        <div class="article inlineContent medium">
            

<article>
        <a href="https://www.protothema.gr/politics/article/1457423/leodaridis-nd-tha-katapsifiso-ton-gamo-ton-omofulon-zeugarion/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457423/leodaridis-nd-tha-katapsifiso-ton-gamo-ton-omofulon-zeugarion/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/360x203/_webp/files/2024-01-19/leontaridis_nd.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/360x203/_jp2/files/2024-01-19/leontaridis_nd.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/360x203/files/2024-01-19/leontaridis_nd.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/360x203/files/2024-01-19/leontaridis_nd.jpg" fetchpriority="" alt="Λεονταρίδης (ΝΔ): θα καταψηφίσω τον γάμο των ομόφυλων ζευγαριών " class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457423/leodaridis-nd-tha-katapsifiso-ton-gamo-ton-omofulon-zeugarion/">Λεονταρίδης (ΝΔ): θα καταψηφίσω τον γάμο των ομόφυλων ζευγαριών </a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T14:15:30+02:00">19.01.2024, 14:15</time>                                            <a href="https://www.protothema.gr/politics/article/1457423/leodaridis-nd-tha-katapsifiso-ton-gamo-ton-omofulon-zeugarion/" class="comment">
                            2
                        </a>
                </span>
            </div>
            </div>
</article>


        </div>
        <div class="article inlineContent medium">
            

<article>
        <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/360x203/_webp/files/2024-01-19/paylos_marinakis_arthro.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/360x203/_jp2/files/2024-01-19/paylos_marinakis_arthro.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/360x203/files/2024-01-19/paylos_marinakis_arthro.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/360x203/files/2024-01-19/paylos_marinakis_arthro.jpg" fetchpriority="" alt="Απάντηση της κυβέρνησης στον Ιερώνυμο για τα ομόφυλα: Στην Ελλάδα τα ζητήματα δικαιωμάτων δεν λύνονται με δημοψηφίσματα" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/">Απάντηση της κυβέρνησης στον Ιερώνυμο για τα ομόφυλα: Στην Ελλάδα τα ζητήματα δικαιωμάτων δεν λύνονται με δημοψηφίσματα</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:39:00+02:00">19.01.2024, 13:39</time>                                            <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/" class="comment">
                            222
                        </a>
                </span>
            </div>
            </div>
</article>


        </div>
        <div class="article inlineContent medium">
            

<article>
        <a href="https://www.protothema.gr/politics/article/1457408/mitsotakis-sunadithike-me-ton-proedro-tis-microsoft-sto-davos/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457408/mitsotakis-sunadithike-me-ton-proedro-tis-microsoft-sto-davos/" class="playVideo">
                    <i class="icon-play videoIcon sml"></i>
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/360x203/_webp/files/2024-01-19/mitsotakis-forum-arthrou.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/360x203/_jp2/files/2024-01-19/mitsotakis-forum-arthrou.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/360x203/files/2024-01-19/mitsotakis-forum-arthrou.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/360x203/files/2024-01-19/mitsotakis-forum-arthrou.jpg" fetchpriority="" alt="Μητσοτάκης: Συναντήθηκε με τον πρόεδρο της Microsoft στο Νταβός" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457408/mitsotakis-sunadithike-me-ton-proedro-tis-microsoft-sto-davos/">Με τον πρόεδρο της Microsoft συναντήθηκε ο Μητσοτάκης στο Νταβός</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:34:00+02:00">19.01.2024, 13:34</time>                                            <a href="https://www.protothema.gr/politics/article/1457408/mitsotakis-sunadithike-me-ton-proedro-tis-microsoft-sto-davos/" class="comment">
                            1
                        </a>
                </span>
            </div>
            </div>
</article>


        </div>

                                <div class="loader" data-plugin-endlessscroll="{&quot;Url&quot;:&quot;https://www.protothema.gr/politics/?pg=2\u0026$component=BelowArticle[0]\u0026Template=Override\u0026areaName=BelowArticle&quot;}">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
</section>
    <script type="text/javascript">
        window._taboola = window._taboola || [];
        _taboola.push({ flush: true });
    </script>

    </main>
    <div class="cookies" style="display:none;" data-plugin-cookie="">
        <div class="inner">
            <p>Content snippet: <b>CookieBar</b></p>
        </div>
    </div>
<footer class="footer">
    <div class="footer__top">
        <div class="wrapper">
            <div class="footer__topInner">
                <figure class="footer__logo">
                    <a href="/">
                        <picture>
                            <img class="lazyload" data-src="https://s.prth.gr/assets/Media/logo-main.svg?v=3" width="177" height="81" />
                        </picture>
                    </a>
                </figure>
                <div class="footer__social social">
                        <a href="https://twitter.com/protothema" target="_blank" class="icon-twitter"></a>
    <a href="https://www.facebook.com/protothemagr/?ref=ts" target="_blank" class="icon-facebook"></a>
    <a href="https://www.instagram.com/protothema.gr/" target="_blank" class="icon-instagram"></a>
    <a href="https://www.linkedin.com/company/protothema-gr/" target="_blank" class="icon-linkedin"></a>
    <a href="https://www.protothema.gr/rss" target="_blank" class="icon-rss"></a>

                </div>
            </div>
        </div>
    </div>
    <div class="wrapper">
        <div class="footer__bottom">
            <nav class="footer__menu">
                <ul>
        <li>
            <a href="https://www.protothema.gr/digital-growth-strategy-by-cloudevo/" target="_blank">Digital Growth Strategy by Cloudevo</a>
        </li>
        <li>
            <a href="https://www.protothema.gr/politiki-prostasias-prosopikon-dedomenon/">Πολιτικη προστασιας προσωπικων δεδομενων</a>
        </li>
        <li>
            <a href="https://www.protothema.gr/politiki-cookies/">Πολιτικη Cookies</a>
        </li>
        <li>
            <a href="https://www.protothema.gr/oroi-hrisis/">ΟΡΟΙ ΧΡΗΣΗΣ</a>
        </li>
        <li>
            <a href="https://www.protothema.gr/epikoinonia/">Επικοινωνια</a>
        </li>
</ul>
            </nav>
            <div class="footer__infoBar">
                <figure class="atcom">
                    <a href="https://www.atcom.gr" target="_blank">
                        <picture>
                            <img class="lazyload" data-src="https://s.prth.gr/assets/Media/atcom.svg" width="169" height="12" />
                        </picture>
                    </a>
                </figure>
                <div class="copyright">Copyright © 2024 Πρώτο Θέμα</div>
            </div>
        </div>
    </div>
</footer></div>

    

    <script async src="https://www.protothema.gr/Scripts/Common/DC912A253D1E9BA40E2C597ED2376640/Combined.js"></script>




<!-- GA4 - Additional Google tag --><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-B3L5NF4TWY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B3L5NF4TWY');
</script>


<!-- Analytics G4 - Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M9ZNLVC');</script>

    
</body>
</html>limatikis-allagis/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457431/androulakis-einai-epitaktiki-anagi-na-katastisoume-ti-hora-mas-anthektiki-stis-sunepeies-tis-klimatikis-allagis/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/640x360/_webp/files/2024-01-19/NIKOS_O.jpg" type="image/webp" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/_jp2/files/2024-01-19/NIKOS_O.jpg" type="image/jp2" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/640x360/files/2024-01-19/NIKOS_O.jpg" type="image/jpeg" media="(max-width: 1279px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_webp/files/2024-01-19/NIKOS_O.jpg" type="image/webp" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/_jp2/files/2024-01-19/NIKOS_O.jpg" type="image/jp2" media="(min-width: 1280px)" />
            <source data-srcset="https://i1.prth.gr/images/750x422/files/2024-01-19/NIKOS_O.jpg" type="image/jpeg" media="(min-width: 1280px)" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/750x422/files/2024-01-19/NIKOS_O.jpg" fetchpriority="" alt="Ανδρουλάκης: Είναι επιτακτική ανάγκη να καταστήσουμε τη χώρα μας ανθεκτική στις συνέπειες της κλιματικής αλλαγής" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457431/androulakis-einai-epitaktiki-anagi-na-katastisoume-ti-hora-mas-anthektiki-stis-sunepeies-tis-klimatikis-allagis/">Ανδρουλάκης: Είναι επιτακτική ανάγκη να καταστήσουμε τη χώρα μας ανθεκτική στις συνέπειες της κλιματικής αλλαγής</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T14:38:05+02:00">19.01.2024, 14:38</time>                                            <a href="https://www.protothema.gr/politics/article/1457431/androulakis-einai-epitaktiki-anagi-na-katastisoume-ti-hora-mas-anthektiki-stis-sunepeies-tis-klimatikis-allagis/" class="comment">
                            1
                        </a>
                </span>
            </div>
            </div>
</article>


                    </div>
                </div>

            <div class="mainWrp">
    <aside class="aside">
        <div class="asideSection fixedElem fullHeight">
            <div class="cnt">
                <div class="bannerWrp">
                    <div class="bannerWrp__inner">
                        
    <div id="banner-div-3759bd49-75fa-4348-a3cb-c9f75e8bfc71" class="banner-container b300x250">

    </div>
    <script type="text/javascript">
        googletag.cmd.push(function () {

            var definedSlot;
            var code = "/1050137/Side_infinite";
            var size = [[300,250],[300,600]];
            var divId = "banner-div-3759bd49-75fa-4348-a3cb-c9f75e8bfc71";
            var sizes = [{"ScreenWidth":0,"ScreenHeight":0,"BannerWidth":null,"BannerHeight":null},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":300,"BannerHeight":250},{"ScreenWidth":1024,"ScreenHeight":500,"BannerWidth":300,"BannerHeight":600}];

            var refreshIntervalInSec = 31;
            var autoRefresh = refreshIntervalInSec > 30 ? true : false;
            var REFRESH_KEY = 'refreshOnView';
            var REFRESH_VALUE = autoRefresh ? 'yes' : 'no';

			if (sizes) {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads())
                    .defineSizeMapping(getSizeMapping(googletag, sizes));
            }
            else {
                definedSlot = googletag.defineSlot(code, size, divId)
                    .setTargeting(REFRESH_KEY, REFRESH_VALUE)
                    .addService(googletag.pubads());
            }

            if (autoRefresh) {
                console.log(`refresh of ${code} registered. Will trigger once in viewport `)
                googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (event.slot === definedSlot) {
                        console.log(event.slot, event.slot.getSlotElementId())
                        if ((event.slot.getTargeting(REFRESH_KEY) || '').indexOf('yes') > -1) {
                            console.log(`${code} viewable. Refreshing in ${refreshIntervalInSec} seconds. `, event.slot.getTargeting(REFRESH_KEY))
                            setTimeout(function () {
                                definedSlot.clearTargeting(REFRESH_KEY);
                                console.log('refreshing', code, definedSlot.getTargeting(REFRESH_KEY))
                                googletag.pubads().refresh([definedSlot]);
                                console.log('refreshed', code, definedSlot.getTargeting(REFRESH_KEY))
                            }, refreshIntervalInSec * 1000);
                        } else {
                            console.log(`refresh of ${code} ignored. Already refreshed. `, event.slot.getTargeting(REFRESH_KEY))
                        }
                    }
                });
            } else {
                console.log(`refresh of ${code} ignored. `)
            }
        });

        setTimeout(() => {
            googletag.cmd.push(function () {
                googletag.display("banner-div-3759bd49-75fa-4348-a3cb-c9f75e8bfc71");
            })
        }, 1000);
    </script>

                    </div>
                </div>
            </div>
        </div>
    </aside>

                <div class="main">
                    <div class="gridBox gridBox--cols1">
                                <div class="article inlineContent medium">
            

<article>
        <a href="https://www.protothema.gr/politics/article/1457425/papastaurou-i-stirixi-tis-ellinikis-oikogeneias-kedriki-proteraiotita-tis-kuvernisis/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457425/papastaurou-i-stirixi-tis-ellinikis-oikogeneias-kedriki-proteraiotita-tis-kuvernisis/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/360x203/_webp/files/2024-01-19/papastavrou.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/360x203/_jp2/files/2024-01-19/papastavrou.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/360x203/files/2024-01-19/papastavrou.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/360x203/files/2024-01-19/papastavrou.jpg" fetchpriority="" alt="Παπασταύρου: Η στήριξη της ελληνικής οικογένειας κεντρική προτεραιότητα της Κυβέρνησης" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457425/papastaurou-i-stirixi-tis-ellinikis-oikogeneias-kedriki-proteraiotita-tis-kuvernisis/">Παπασταύρου: Η στήριξη της ελληνικής οικογένειας κεντρική προτεραιότητα της Κυβέρνησης</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T14:20:00+02:00">19.01.2024, 14:20</time>                                            <a href="https://www.protothema.gr/politics/article/1457425/papastaurou-i-stirixi-tis-ellinikis-oikogeneias-kedriki-proteraiotita-tis-kuvernisis/" class="comment">
                            5
                        </a>
                </span>
            </div>
            </div>
</article>


        </div>
        <div class="article inlineContent medium">
            

<article>
        <a href="https://www.protothema.gr/politics/article/1457423/leodaridis-nd-tha-katapsifiso-ton-gamo-ton-omofulon-zeugarion/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457423/leodaridis-nd-tha-katapsifiso-ton-gamo-ton-omofulon-zeugarion/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/360x203/_webp/files/2024-01-19/leontaridis_nd.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/360x203/_jp2/files/2024-01-19/leontaridis_nd.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/360x203/files/2024-01-19/leontaridis_nd.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/360x203/files/2024-01-19/leontaridis_nd.jpg" fetchpriority="" alt="Λεονταρίδης (ΝΔ): θα καταψηφίσω τον γάμο των ομόφυλων ζευγαριών " class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457423/leodaridis-nd-tha-katapsifiso-ton-gamo-ton-omofulon-zeugarion/">Λεονταρίδης (ΝΔ): θα καταψηφίσω τον γάμο των ομόφυλων ζευγαριών </a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T14:15:30+02:00">19.01.2024, 14:15</time>                                            <a href="https://www.protothema.gr/politics/article/1457423/leodaridis-nd-tha-katapsifiso-ton-gamo-ton-omofulon-zeugarion/" class="comment">
                            2
                        </a>
                </span>
            </div>
            </div>
</article>


        </div>
        <div class="article inlineContent medium">
            

<article>
        <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/" class="">
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/360x203/_webp/files/2024-01-19/paylos_marinakis_arthro.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/360x203/_jp2/files/2024-01-19/paylos_marinakis_arthro.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/360x203/files/2024-01-19/paylos_marinakis_arthro.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/360x203/files/2024-01-19/paylos_marinakis_arthro.jpg" fetchpriority="" alt="Απάντηση της κυβέρνησης στον Ιερώνυμο για τα ομόφυλα: Στην Ελλάδα τα ζητήματα δικαιωμάτων δεν λύνονται με δημοψηφίσματα" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/">Απάντηση της κυβέρνησης στον Ιερώνυμο για τα ομόφυλα: Στην Ελλάδα τα ζητήματα δικαιωμάτων δεν λύνονται με δημοψηφίσματα</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:39:00+02:00">19.01.2024, 13:39</time>                                            <a href="https://www.protothema.gr/politics/article/1457400/paulos-marinakis-stin-ellada-ta-zitimata-dikaiomaton-den-lunodai-me-dimopsifismata/" class="comment">
                            222
                        </a>
                </span>
            </div>
            </div>
</article>


        </div>
        <div class="article inlineContent medium">
            

<article>
        <a href="https://www.protothema.gr/politics/article/1457408/mitsotakis-sunadithike-me-ton-proedro-tis-microsoft-sto-davos/" class="mainLink"></a>
                <figure data-image-mode="article">
            <a href="https://www.protothema.gr/politics/article/1457408/mitsotakis-sunadithike-me-ton-proedro-tis-microsoft-sto-davos/" class="playVideo">
                    <i class="icon-play videoIcon sml"></i>
                

<picture >

    <!--[if IE 9]><video style="display: none;"><![endif]-->
            <source data-srcset="https://i1.prth.gr/images/360x203/_webp/files/2024-01-19/mitsotakis-forum-arthrou.jpg" type="image/webp" />
            <source data-srcset="https://i1.prth.gr/images/360x203/_jp2/files/2024-01-19/mitsotakis-forum-arthrou.jpg" type="image/jp2" />
            <source data-srcset="https://i1.prth.gr/images/360x203/files/2024-01-19/mitsotakis-forum-arthrou.jpg" type="image/jpeg" />
    <!--[if IE 9]></video><![endif]-->
        <img data-src="https://i1.prth.gr/images/360x203/files/2024-01-19/mitsotakis-forum-arthrou.jpg" fetchpriority="" alt="Μητσοτάκης: Συναντήθηκε με τον πρόεδρο της Microsoft στο Νταβός" class="lazyload" />
</picture>
            </a>
                    </figure>
    <div class="desc">
                <div class="heading">
            <h3>
                <a href="https://www.protothema.gr/politics/article/1457408/mitsotakis-sunadithike-me-ton-proedro-tis-microsoft-sto-davos/">Με τον πρόεδρο της Microsoft συναντήθηκε ο Μητσοτάκης στο Νταβός</a>
            </h3>
        </div>
                    <div class="wrp">
                
                <span class="update_well">
<time data-timeago="" datetime="2024-01-19T13:34:00+02:00">19.01.2024, 13:34</time>                                            <a href="https://www.protothema.gr/politics/article/1457408/mitsotakis-sunadithike-me-ton-proedro-tis-microsoft-sto-davos/" class="comment">
                            1
                        </a>
                </span>
            </div>
            </div>
</article>


        </div>

                                <div class="loader" data-plugin-endlessscroll="{&quot;Url&quot;:&quot;https://www.protothema.gr/politics/?pg=2\u0026$component=BelowArticle[0]\u0026Template=Override\u0026areaName=BelowArticle&quot;}">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
            <div class="bar4"></div>
            <div class="bar5"></div>
            <div class="bar6"></div>
        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
</section>
    <script type="text/javascript">
        window._taboola = window._taboola || [];
        _taboola.push({ flush: true });
    </script>

    </main>
    <div class="cookies" style="display:none;" data-plugin-cookie="">
        <div class="inner">
            <p>Content snippet: <b>CookieBar</b></p>
        </div>
    </div>
<footer class="footer">
    <div class="footer__top">
        <div class="wrapper">
            <div class="footer__topInner">
                <figure class="footer__logo">
                    <a href="/">
                        <picture>
                            <img class="lazyload" data-src="https://s.prth.gr/assets/Media/logo-main.svg?v=3" width="177" height="81" />
                        </picture>
                    </a>
                </figure>
                <div class="footer__social social">
                        <a href="https://twitter.com/protothema" target="_blank" class="icon-twitter"></a>
    <a href="https://www.facebook.com/protothemagr/?ref=ts" target="_blank" class="icon-facebook"></a>
    <a href="https://www.instagram.com/protothema.gr/" target="_blank" class="icon-instagram"></a>
    <a href="https://www.linkedin.com/company/protothema-gr/" target="_blank" class="icon-linkedin"></a>
    <a href="https://www.protothema.gr/rss" target="_blank" class="icon-rss"></a>

                </div>
            </div>
        </div>
    </div>
    <div class="wrapper">
        <div class="footer__bottom">
            <nav class="footer__menu">
                <ul>
        <li>
            <a href="https://www.protothema.gr/digital-growth-strategy-by-cloudevo/" target="_blank">Digital Growth Strategy by Cloudevo</a>
        </li>
        <li>
            <a href="https://www.protothema.gr/politiki-prostasias-prosopikon-dedomenon/">Πολιτικη προστασιας προσωπικων δεδομενων</a>
        </li>
        <li>
            <a href="https://www.protothema.gr/politiki-cookies/">Πολιτικη Cookies</a>
        </li>
        <li>
            <a href="https://www.protothema.gr/oroi-hrisis/">ΟΡΟΙ ΧΡΗΣΗΣ</a>
        </li>
        <li>
            <a href="https://www.protothema.gr/epikoinonia/">Επικοινωνια</a>
        </li>
</ul>
            </nav>
            <div class="footer__infoBar">
                <figure class="atcom">
                    <a href="https://www.atcom.gr" target="_blank">
                        <picture>
                            <img class="lazyload" data-src="https://s.prth.gr/assets/Media/atcom.svg" width="169" height="12" />
                        </picture>
                    </a>
                </figure>
                <div class="copyright">Copyright © 2024 Πρώτο Θέμα</div>
            </div>
        </div>
    </div>
</footer></div>

    

    <script async src="https://www.protothema.gr/Scripts/Common/DC912A253D1E9BA40E2C597ED2376640/Combined.js"></script>




<!-- GA4 - Additional Google tag --><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-B3L5NF4TWY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B3L5NF4TWY');
</script>


<!-- Analytics G4 - Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M9ZNLVC');</script>

    
</body>
</html>