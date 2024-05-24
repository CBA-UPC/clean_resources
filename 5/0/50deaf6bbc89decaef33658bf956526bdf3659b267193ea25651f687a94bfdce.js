/*! 20240121-21_b6-PR-66446-DEV-151801-carousel-poc-in-rbox-rbox-side-9810aef8e6a */

(()=>{const e=2e3;let t=!1;class n{static isInterruptionReported(){return t}static detectCardInterrupted(t){if(t)try{n.checkForClashAndReport(t),setTimeout(()=>{n.checkForClashAndReport(t)},e)}catch(e){__trcError(`error in detectCardInterrupted: ${e}`,e)}}static checkForClashAndReport(e){if(n.isInterruptionReported())return;const t=n.getClashingElement(e);t&&n.report(t,e)}static getClashingElement(e){const t=e.getBoundingClientRect(),r=TRC.intersections.getPointsOnElement(t,["lt","mt","rt","lm","mm","rm","lb","mb","rb"]);let s=null;return Object.keys(r).some(t=>{const o=r[t],c=document.elementFromPoint(o.targetElementCenterX,o.targetElementCenterY),l=c&&n.isClashingElement(e,c);return l&&(s=c),l}),s}static isClashingElement(e,t){return!n.isRelativeElement(e,t)&&!n.isExcludedElement(t,e)&&n.areOverlapping(e,t)}static isRelativeElement(e,t){return e===t||e.contains(t)||t.contains(e)}static areOverlapping(e,t){const n=t.getBoundingClientRect(),r=e.getBoundingClientRect();if(m(n,r))return!1;const s=50*50,o=Math.max(n.top,r.top),c=Math.min(n.bottom,r.bottom),l=Math.max(n.left,r.left),a=Math.min(n.right,r.right),i=c-o,d=a-l,u=i*d;return Math.abs(u)>=s;function m(e,t){return e.bottom<t.top||t.bottom<e.top||e.right<t.left||t.right<e.left}}static report(e,n){const r=TRC.dom.closest(n,"[data-placement-name]"),s={publisher:{id:TRC.publisherId,type:TRC.listOrigin.getSource(),pageUrl:location.href},page:{scrollY:TRC.dom.getPageVerticalScroll(),viewportWidth:TRC.dom.getWindowWidth()},clashItem:{placement:r&&r.getAttribute("data-placement-name"),id:e.id,class:e.className,xpath:d.xPath(e,!1),url:e.src||e.querySelector("iframe")&&e.querySelector("iframe").src}},o={event_type:"OVERLAY_MEASUREMENT",event_state:"REPORTED",event_value:JSON.stringify(s)};TRCImpl.sendEvent("supply-feature",{d:JSON.stringify(o)},{}),TRC.util.isPercentEnabled(TRCImpl.global,"take-screenshot-on-violation")&&TRC.ModuleLoader.load("screenshot-capture",TRC.screenshotCaputre,function(){TRC.screenshotCaputre.init(document.body,{keepImages:!0})}.trcBind(this)),t=!0}static isExcludedElement(e,t){const n={element:e,rect:e.getBoundingClientRect(),cardRect:t.getBoundingClientRect()};return a.some(e=>{const t=i[e];return t.shouldExclude(n)})}}TRC.CardInterferenceDetector=n;class r{shouldExclude(){return!0}combine(e){return new r.LambdaExcluder(t=>this.shouldExclude(t)||e.shouldExclude(t))}}r.LambdaExcluder=class e extends r{constructor(e){super(),this.lambda=e}shouldExclude(e){return this.lambda(e)}};class s extends r{constructor(e){super(),this.selectors=e}shouldExclude({element:e}){return this.selectors.some(t=>null!==TRC.dom.closest(e,t))}}class o extends r{constructor(e){super(),this.patterns=e}shouldExclude({element:e}){return!!e.classList.toString()&&this.patterns.some(t=>e.classList.toString().search(t)>=0)}}class c extends r{constructor(e){super(),this.selectors=e}shouldExclude({element:e}){return this.selectors.some(t=>null!==e.querySelector(t))}}class l extends r{constructor(e){super(),this.pattern=e}shouldExclude({element:e}){return e.textContent.search(this.pattern)>=0}}const a=["exclude-taboola-elements","exclude-website-elements","exclude-sticky-classnames","exclude-social-buttons","exclude-privacy-banners"],i={"exclude-website-elements":new s(["header","footer",'[class*="header"]:not(body)','[class*="footer"]:not(body)',"nav"]),"exclude-taboola-elements":new s(["[class*=trc_]","[class*=tbl-]","[class*=cm-]"]),"exclude-sticky-classnames":new o(["sticky"]).combine(new s([".sticky-header"])),"exclude-social-buttons":new s([".sticky-social",'[class*="social"]:not(body)','[class*="share"]:not(body)']).combine(new c(['[class*="facebook"]','[class*="twitter"]'])).combine(new l(/share/i)),"exclude-privacy-banners":new l(/cookies|privacy/i).combine(new o(["qc-cmp"])),"exclude-zero-height":new r.LambdaExcluder(({rect:e})=>0===e.height)},d={xPath:function(e,t){if(e.nodeType===Node.DOCUMENT_NODE)return"/";const n=[];let r=e;for(;r;){const e=d._xPathValue(r,t);if(!e)break;if(n.push(e),e.optimized)break;r=r.parentNode}return n.reverse(),(n.length&&n[0].optimized?"":"/")+n.join("/")},_xPathValue:function(e,t){let n;const r=d._xPathIndex(e);if(-1===r)return null;switch(e.nodeType){case Node.ELEMENT_NODE:if(t&&e.getAttribute("id"))return new d.Step(`//*[@id="${e.getAttribute("id")}"]`,!0);n=e.localName;break;case Node.ATTRIBUTE_NODE:n=`@${e.nodeName}`;break;case Node.TEXT_NODE:case Node.CDATA_SECTION_NODE:n="text()";break;case Node.PROCESSING_INSTRUCTION_NODE:n="processing-instruction()";break;case Node.COMMENT_NODE:n="comment()";break;case Node.DOCUMENT_NODE:default:n=""}return r>0&&(n+=`[${r}]`),new d.Step(n,e.nodeType===Node.DOCUMENT_NODE)},_xPathIndex:function(e){function t(e,t){if(e===t)return!0;if(e.nodeType===Node.ELEMENT_NODE&&t.nodeType===Node.ELEMENT_NODE)return e.localName===t.localName;if(e.nodeType===t.nodeType)return!0;const n=e.nodeType===Node.CDATA_SECTION_NODE?Node.TEXT_NODE:e.nodeType,r=t.nodeType===Node.CDATA_SECTION_NODE?Node.TEXT_NODE:t.nodeType;return n===r}const n=e.parentNode?e.parentNode.children:null;if(!n)return 0;let r;for(let o=0;o<n.length;++o)if(t(e,n[o])&&n[o]!==e){r=!0;break}if(!r)return 0;let s=1;for(let o=0;o<n.length;++o)if(t(e,n[o])){if(n[o]===e)return s;++s}return-1},Step:class{constructor(e,t){this.value=e,this.optimized=t||!1}toString(){return this.value}}}})();type.pendMetric=function(e,t){var i=this;console.log("[FPBLOCK] pending Metric",e),i.pending[e]=window.setTimeout(function(){console.log("[FPBLOCK] Metric deadline Reached",e),i.signal(e),i.pending[e]=void 0},t),i.initOnFirstCheck(e,t)},c.prototype.clearMetric=function(e){if(e in this.pending&&this.pending[e])try{window.clearTimeout(this.pending[e]),console.log("[FPBLOCK] CLEAR For",e)}catch(t){console.log("[FPBLOCK] error clearing timeout on flag",e,t)}else console.log("[FPBLOCK] clearing a missing flag from timeout",e)},c.prototype.adsBlocked=function(){this.signal(r)},c.prototype.trackingBlocked=function(){this.signal(n)},c.prototype.nielsenBlocked=function(){this.signal(a)},c.prototype.checkAdsBlocked=function(){this.pendMetric(r,25e3)},c.prototype.checkAnalyticsBlocked=function(){this.pendMetric(n,25e3)},c.prototype.clearAds=function(){this.clearMetric(r)},c.prototype.clearAnalytics=function(){this.clearMetric(n)},c.prototype.track=function(){var t=void 0;if(r in this.mask&&(n in this.mask||a in this.mask)?t="ANB":r in this.mask?t="ADB":(n in this.mask||a in this.mask)&&(t="ADB_ANB"),t){console.log("[FPBLOCK] Tracking Metric "+t+"_"+e);var c=[{id:i.generate(),l:t+"_"+e,src:"fanpage",ts:(new Date).getTime()}],l="https:"==document.location.protocol,h=uaDetect();if(h&&h.platform&&h.browser){var d=void 0,p=void 0,g=void 0;if(h.platform.android?d=h.browser.chrome?h.browser.webview?"AWV":"ACH":h.browser.stock?"AST":"AOT":h.platform.ios&&(d=h.browser.safari?h.browser.webview?"IWV":"ISA":"IOT"),h.platform.android&&h.browser.chrome&&h.browser.webview&&h.extra){var m=s(h.extra.androidVersion),f=s(h.extra.webkitVersion),u=s(h.extra.chromeVersion),w="NA",v="NA",k="NA";if(m&&m.length>0){var b=parseInt(m[0]);console.log("[FPBLOCK] iver: "+b,m[0]),w=b<=4?m.slice(0,3).join("."):m[0]}f&&f.length>0&&(v=f.slice(0,2).join(".")),u&&u.length>0&&(k=u.slice(0,3).join(".")),p=w+"_"+v,g=w+"_"+k}if(d&&(console.log("[FPBLOCK] Tracking Also "+t+"_"+d),c.push({id:i.generate(),l:t+"_"+d,src:"fanpage",ts:(new Date).getTime()})),p&&(console.log("[FPBLOCK] Tracking ExtraMetric "+t+"_WVD_"+p),c.push({id:i.generate(),l:t+"_WVD_"+p,src:"fanpage",ts:(new Date).getTime()})),g){var C=document.location.host.match(/([^.]+)\.fanpage\.it/),B=C&&C.length>1?"youmedia"==C[1]?"YM":"FP":"EE";console.log("[FPBLOCK] Tracking ExtraMetric "+t+"_WV3_"+B+"_"+g),c.push({id:i.generate(),l:t+"_WV3_"+B+"_"+g,src:"fanpage",ts:(new Date).getTime()})}}for(var _=0;_<c.length;_++){var F=c[_];o.getImage((l?"https:":"http:")+"//youmedia.fanpage.it/s.gif?id="+encodeURIComponent(F.id)+"&l="+encodeURIComponent(F.l)+"&src=fanpage&ts="+F.ts)}}else console.log("[FPBLOCK] GOOD No Metric To Track")};var l={ads_blocked:!0,tracking_blocked:!0};window.FpBlock=new c(l)}();
</script>

<link rel="preload" href="https://static-cmp22.ciaopeople.it/assets/geo/2.0.52/sdk-gdpr.min.js" as="script" >
<script type="text/javascript">
  var gdprSrc = 'https://static-cmp22.ciaopeople.it/assets/geo/2.0.52/sdk-gdpr.min.js';
  
              window.__abtestEnable = window.__abtestEnable || {};
            window.__abtestEnable.gdpr = true;
          window._gdprDebug = false;
  window._gdprLazy = false;
  window._gdprForceSelection = document.location.hash === '#consenso';

  
  window._fpcmp = window._fpcmp || [];
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = gdprSrc;
    if(fjs && fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
    else document.head.appendChild(js);
  }(document, 'script', 'gdpr-sdk'));
</script>
<script type="text/javascript">
    window._fpIsMobile = 
        /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || 
        /(Android)/i.test(navigator.userAgent) ||
        'ontouchstart' in document.documentElement ||
        /mobi/i.test(navigator.userAgent);
</script><script type="text/javascript">window.domReadyCallbacks = window.domReadyCallbacks || [];</script>
<script type="application/ld+json">{"@context":"http://schema.org","@type":"NewsArticle","articleSection":["Fanpage"],"headline":"Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social","datePublished":"2024-01-22T19:01:00+01:00","dateModified":"2024-01-22T19:01:00+01:00","description":"L\u2019ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl\u00ec. Il video \u00e8 stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico.","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/"},"author":{"@type":"Person","name":"Biagio Chiariello","url":"https://www.fanpage.it/author/biagio-chiariello/"},"publisher":{"@type":"Organization","name":"Fanpage","logo":{"@type":"ImageObject","url":"https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/img/wordpress/fp_logo.png?v=0.1","width":211,"height":60}},"image":{"@type":"ImageObject","url":"https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/savignano-vandali-outlet.jpg","width":921,"height":517}}</script>
<meta property="og:title" content="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" />
<meta property="og:description" content="L’ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forlì" />
<meta property="og:image" content="https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/savignano-vandali-outlet.jpg" />
<meta property="og:image:width" content="921" />
<meta property="og:image:height" content="517" />
<meta property="og:site_name" content="Fanpage" />
<meta property="fb:app_id" content="1080631611998596" />
<meta property="fb:admins" content="1169898145" />
<meta property="fb:pages" content="161253243918043" />
<meta property="fb:pages" content="271946231233" />
<meta property="fb:pages" content="433480505540" />
<meta property="fb:pages" content="135117519925526" />
<meta property="fb:pages" content="666321606794487" />
<meta property="fb:pages" content="254166891443342" />
<meta property="fb:pages" content="277280360740" />
<meta property="fb:pages" content="1501552800110615" />
<meta property="fb:pages" content="319388858186974" />
<meta property="fb:pages" content="184431874142" />
<meta property="fb:pages" content="191402287633674" />
<meta property="fb:pages" content="1548862515332110" />
<meta property="fb:pages" content="126881400674472" />
<meta property="fb:pages" content="107309452648576" />
<meta property="fb:pages" content="1491189894514919" />
<meta property="fb:pages" content="1443975585873617" />
<meta property="fb:pages" content="169992733022409" />
<meta property="fb:pages" content="119000911471062" />
<meta property="fb:pages" content="107588721035835" />
<meta property="fb:pages" content="945643162308886" />
<meta property="fb:pages" content="1580821342180338" />
<meta property="fb:pages" content="102641991710178" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" />
<meta name="twitter:title" content="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" />
<meta name="twitter:description" content="L’ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forlì. Il video è stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." />
<meta name="twitter:image" content="https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/savignano-vandali-outlet.jpg" />
<meta name="twitter:site" content="@fanpage" />
<meta name="twitter:creator" content="@BiagioChiariell" />
<meta name="apple-itunes-app" content="app-id=536492568, app-argument=https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social">
<script type="text/javascript">

(function() {
    var NativeAppRegex = /it\.(fanpage|cookist|cookist_it|cookist_com|kodami|geopop|ohga|lexplain_it|wamily_it)\.rn\.(android|ios)\/([0-9.]+)/i
    function detect(ua_string) {
        var ua = ua_string?ua_string:window.navigator.userAgent;
        var nativeAppMatch = ua.match(NativeAppRegex);
        if(nativeAppMatch && nativeAppMatch.length > 3) {
            var eprod = nativeAppMatch[1];
            var sop = nativeAppMatch[2];
            var ver = nativeAppMatch[3];
            var platObj = sop == "android"?{android:true}:{ios: true};
            var brObj = {webview: true, native_app: true};
            if(sop == "android") {
                brObj.chrome = true;
            }
            else brObj.safari = true;
            return {
                platform: platObj,
                browser: brObj,
                native_app: true,
                extra: {
                    nativeAppVersion: ver,
                    product: eprod
                }
            };
        }
        else return null;
    }

    window._nativeAppDetect = detect(window.navigator.userAgent);
})();

</script>
<!-- [google_analytics] -->
<script type="text/javascript">
  if(typeof FpBlock !== 'undefined') {
    FpBlock.checkAnalyticsBlocked();
  }

  (function(i, s, o, g, r, id) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    if(!document.getElementById(id)) {
      var a = s.createElement(o);
      var m = s.getElementsByTagName(o)[0];
      a.id = id;
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    }
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga', "cp-analyitics-js");

  var paramsBlacklist = ['fbclid', 'ref','usqp','amp_lite'],
      page = '';
  var blacklistedRemoved = false;

  if(window.location.search.length > 0) {
    page = window.location.pathname;
    var queryParams = window.location.search.replace('?', '').split('&'),
        cleanQueryParams = [];

    for(var i = 0; i < queryParams.length; i++) {
      var paramParts = queryParams[i].split('=');
      if(paramsBlacklist.indexOf(paramParts[0]) === -1) {
        cleanQueryParams.push(queryParams[i]);
      }
      else {
        blacklistedRemoved = true;
      }
    }

    if(cleanQueryParams.length > 0) {
      page += '?' + cleanQueryParams.join('&');
    }
  }

  if(typeof FpBlock !== 'undefined') {
    ga(function () {
      FpBlock.clearAnalytics();
    });
  }

  var useAppName = undefined;
  var useAppVersion = undefined;

  if(window._nativeAppDetect &&
      window._nativeAppDetect.extra &&
        window._nativeAppDetect.extra.product) {

          useAppName = window._nativeAppDetect.extra.product + " " +
             (window._nativeAppDetect.platform.android?"android":"ios") + " native";
      if(window._nativeAppDetect.extra.nativeAppVersion) {
        useAppVersion = "" + window._nativeAppDetect.extra.nativeAppVersion;
      }
  }
      
    ga('create', 'UA-18802610-1', 'auto', { 'name': 'fanpage', 
        'useAmpClientId': true,'cookieDomain': '.fanpage.it',
          'allowLinker':  true });
          ga('fanpage.require', 'linker');    
                ga('fanpage.linker:autoLink', ['www.fanpage.it','cmp22.fanpage.it','youmedia.fanpage.it','job.fanpage.it','music.fanpage.it','www-fanpage-it.cdn.ampproject.org']);
             ga('fanpage.set', 'anonymizeIp', true);
    

          ga('fanpage.set', 'dimension1', 'Biagio Chiariello');
          ga('fanpage.set', 'dimension2', '20240122');
          ga('fanpage.set', 'dimension3', /\[FB_IAB\/FB4A;FB[AD]V\/|\[FBAN\/FBIOS;FB[AD]V\/|Instagram/i.test(navigator.userAgent) ? 'true' : 'false');
          ga('fanpage.set', 'dimension5', '8');
          ga('fanpage.set', 'dimension6', 'fanplayer');
          ga('fanpage.set', 'dimension13', 'articolo_standard');
    
    if(page.length > 0) {
      ga('fanpage.set', 'page', page);
      if (blacklistedRemoved) {
          history.replaceState(null, '', page);
      }
    }

    if(useAppName) {
      ga('fanpage.set', 'appName', useAppName);
      if(useAppVersion) {
        ga('fanpage.set', 'appVersion', useAppVersion);
      }
    }
    ga('fanpage.send', 'pageview');

  
  // outbound
  



  window.gatools = {
      DEFAULT_CALLBACK_TIMEOUT: 800,
      evtWithCallbackAndTimeout: function(trackerName,evtParams, timeout, callback) {
        var closureCallback = callback?(function() {
            var called = false;
            return function() {
                if(!called) {
                    callback();
                    called = true;
                }
            }
        })():null;
        if(closureCallback) evtParams['hitCallback'] = closureCallback;
        ga(trackerName + '.send','event',evtParams);
        if(closureCallback) {
          var parsed = timeout?parseInt(timeout):0;
          window.setTimeout(closureCallback, !isNaN(parsed) && parsed > 0?parsed:window.gatools.DEFAULT_CALLBACK_TIMEOUT);
        }
      },
      evtCallbackPromise: function(trackerName, evtParams, timeout) {
        return new Promise((resolve) => {
           window.gatools.evtWithCallbackAndTimeout(trackerName,evtParams,timeout,resolve);
        });
      },

      evtBeacon: function(trackerName,evtParams) {
        var uparams = evtParams || {};
        uparams["transport_type"] = "beacon";
        ga(trackerName + ".send", "event", uparams);
      },

      multipleTrackersCallbackPromise: function(trackerNames,evtParams,timeout) {
          return Promise.all(trackerNames.map(tracker => {
            return window.gatools.evtCallbackPromise(tracker,evtParams,timeout);
          }));
      },
      multipleTrackersSyncBeacons: function(trackerNames,evtParams) {
        trackerNames.forEach(tracker => {
          window.gatools.evtBeacon(tracker,evtParams);
        })
      }
  }
  

  

  
    //check ClickEventsHandler.ts for more information on how it works
    //when the refactoring will be completed this snippet will be part
    //of StatsModule.ts
    

            const allInTrackers = ["fanpage"];
      const allOutTrackers = ["fanpage"];


      function trackEvents(evt) {
        var evtParams = null;
        var useTrackers = [];
        if(evt && evt.classification == 1) {
          evtParams = {
            eventCategory: 'internal link',
            eventAction: evt.info && evt.info.sourceElement?evt.info.sourceElement:"click",
            eventLabel: evt.url
          };
          useTrackers = allInTrackers;
        }
        else if (evt && evt.classification == 2) {
          evtParams = {
            eventCategory: 'outbound link',
            eventAction: 'click',
            eventLabel: evt.url
          };
          useTrackers = allOutTrackers;
        }

        if(evtParams) {
          window.gatools.multipleTrackersSyncBeacons(useTrackers,evtParams);
        }
      }

      window.internalLinkHandlers = window.internalLinkHandlers || [];
      window.internalLinkHandlers.push(trackEvents);

      window.outboundLinkHandlers = window.outboundLinkHandlers || [];
      window.outboundLinkHandlers.push(trackEvents);

    

  </script>

<!-- [/google_analytics] -->
<!-- [ga4] -->
  <!-- injs support -->

<meta name="robots" content="max-image-preview:large" />
<style type="text/css" id="critical-css">.fp_icon{display:-webkit-box;display:-ms-flexbox;display:flex}.fp_icon--size-8x8 svg{width:8px;height:8px}.fp_icon--size-9x9 svg{width:9px;height:9px}.fp_icon--size-10x10 svg{width:10px;height:10px}.fp_icon--size-11x11 svg{width:11px;height:11px}.fp_icon--size-12x12 svg{width:12px;height:12px}.fp_icon--size-13x13 svg{width:13px;height:13px}.fp_icon--size-14x14 svg{width:14px;height:14px}.fp_icon--size-15x15 svg{width:15px;height:15px}.fp_icon--size-16x16 svg{width:16px;height:16px}.fp_icon--size-17x17 svg{width:17px;height:17px}.fp_icon--size-18x18 svg{width:18px;height:18px}.fp_icon--size-19x19 svg{width:19px;height:19px}.fp_icon--size-20x20 svg{width:20px;height:20px}.fp_icon--size-21x21 svg{width:21px;height:21px}.fp_icon--size-22x22 svg{width:22px;height:22px}.fp_icon--size-23x23 svg{width:23px;height:23px}.fp_icon--size-24x24 svg{width:24px;height:24px}.fp_icon--size-25x25 svg{width:25px;height:25px}.fp_icon--size-26x26 svg{width:26px;height:26px}.fp_icon--size-27x27 svg{width:27px;height:27px}.fp_icon--size-28x28 svg{width:28px;height:28px}.fp_icon--size-29x29 svg{width:29px;height:29px}.fp_icon--size-30x30 svg{width:30px;height:30px}.fp_icon--size-31x31 svg{width:31px;height:31px}.fp_icon--size-32x32 svg{width:32px;height:32px}.fp_icon--size-33x33 svg{width:33px;height:33px}.fp_icon--size-34x34 svg{width:34px;height:34px}.fp_icon--size-35x35 svg{width:35px;height:35px}.fp_icon--size-36x36 svg{width:36px;height:36px}.fp_icon--size-37x37 svg{width:37px;height:37px}.fp_icon--size-38x38 svg{width:38px;height:38px}.fp_icon--size-39x39 svg{width:39px;height:39px}.fp_icon--size-40x40 svg{width:40px;height:40px}.fp_icon--size-41x41 svg{width:41px;height:41px}.fp_icon--size-42x42 svg{width:42px;height:42px}.fp_icon--size-43x43 svg{width:43px;height:43px}.fp_icon--size-44x44 svg{width:44px;height:44px}.fp_icon--size-45x45 svg{width:45px;height:45px}.fp_icon--size-46x46 svg{width:46px;height:46px}.fp_icon--size-47x47 svg{width:47px;height:47px}.fp_icon--size-48x48 svg{width:48px;height:48px}.fp_icon--size-49x49 svg{width:49px;height:49px}.fp_icon--size-50x50 svg{width:50px;height:50px}.fp_icon--color-fill-white g,.fp_icon--color-fill-white g path,.fp_icon--color-fill-white path,.fp_icon--color-fill-white use{fill:#fff}.fp_icon--color-fill-green1 g .fp_icon--color-fill-green1 path,.fp_icon--color-fill-green1 g path,.fp_icon--color-fill-green1 use{fill:#77b340}.fp_icon--color-fill-yellow1 g .fp_icon--color-fill-yellow1 path,.fp_icon--color-fill-yellow1 g path,.fp_icon--color-fill-yellow1 use{fill:#ffce00}.fp_icon--color-fill-red1 g .fp_icon--color-fill-red1 path,.fp_icon--color-fill-red1 g path,.fp_icon--color-fill-red1 use{fill:#dd3737}.fp_icon--color-fill-grey1 g .fp_icon--color-fill-grey1 path,.fp_icon--color-fill-grey1 g path,.fp_icon--color-fill-grey1 use{fill:#939393}.fp_icon--color-fill-grey2 g .fp_icon--color-fill-grey2 path,.fp_icon--color-fill-grey2 g path,.fp_icon--color-fill-grey2 use{fill:#999}.fp_icon--color-fill-grey3 g .fp_icon--color-fill-grey3 path,.fp_icon--color-fill-grey3 g path,.fp_icon--color-fill-grey3 use{fill:#eee}.fp_icon--color-fill-orange1 g .fp_icon--color-fill-orange1 path,.fp_icon--color-fill-orange1 g path,.fp_icon--color-fill-orange1 use{fill:#ff4900}.fp_icon--color-fill-blue1 g,.fp_icon--color-fill-blue1 g path,.fp_icon--color-fill-blue1 path,.fp_icon--color-fill-blue1 use{fill:#3d7eff}.fp_icon--color-fill-transparent g .fp_icon--color-fill-transparent path,.fp_icon--color-fill-transparent g path,.fp_icon--color-fill-transparent use{fill:transparent}.fp_icon--color-fill-dark-grey g,.fp_icon--color-fill-dark-grey g path,.fp_icon--color-fill-dark-grey path,.fp_icon--color-fill-dark-grey use{fill:#666}.fp_icon--color-stroke-black g,.fp_icon--color-stroke-black g path,.fp_icon--color-stroke-black path,.fp_icon--color-stroke-black use{stroke:#000}.fp_icon--color-stroke-white g,.fp_icon--color-stroke-white g path,.fp_icon--color-stroke-white path,.fp_icon--color-stroke-white use{stroke:#fff}.fp_icon--color-stroke-orange1 g .fp_icon--color-stroke-orange1 path,.fp_icon--color-stroke-orange1 g path,.fp_icon--color-stroke-orange1 use{stroke:#ff4900}.fp_icon--color-stroke-dark-grey g,.fp_icon--color-stroke-dark-grey g path,.fp_icon--color-stroke-dark-grey path,.fp_icon--color-stroke-dark-grey use{stroke:#333}.fp_icon--no-color g,.fp_icon--no-color g path,.fp_icon--no-color path,.fp_icon--no-color rect,.fp_icon--no-color use{fill:none}.fp_icon--color-inside g,.fp_icon--color-inside g path,.fp_icon--color-inside path,.fp_icon--color-inside use{fill:#fff}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}html{background-color:#fff}body{line-height:1;background-color:#171717;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body.fp_branded{background-color:transparent;padding-top:0}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@media(hover:hover){a:hover{-webkit-text-decoration:none;text-decoration:none;opacity:.7}}#cp_fanplayer--m-placeholder{margin-bottom:40px}.fp_underline-label{display:inline-block;position:relative;padding:0 0 4px;letter-spacing:-.01em;font-family:Helvetica,Arial,sans-serif;font-size:18px;line-height:21px;font-weight:400;color:#000;text-transform:uppercase;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_underline-label:after{content:"";display:inline-block;position:absolute;left:0;bottom:0;width:100%;height:3px;background:#ccc}.fp_underline-label--menu{font-family:Lato,sans-serif;font-size:17px;line-height:21px;font-weight:400;color:#000;text-transform:uppercase;font-style:normal;-webkit-text-decoration:none;text-decoration:none;padding-bottom:8px}.fp_underline-label--area-innovazione:after,.fp_underline-label--area-tecnologia:after{background:#207aff}.fp_underline-label--area-donna:after,.fp_underline-label--area-stile-e-trend:after{background:#ad49d1}.fp_underline-label--area-motori:after{background:#ff5900}.fp_underline-label--area-spettacolo:after{background:#f70000}.fp_underline-label--area-news:after{background:#dbdad3}.fp_underline-label--area-sport:after{background:#a6d91e}.fp_underline-label--area-lavoro:after{background:#5368bf}.fp_underline-label--area-musica:after{background:#ff1286}.fp_underline-label--area-scienze:after{background:#3f5c58}.fp_underline-label--area-viaggi:after{background:#0bcec0}.fp_underline-label--area-design:after{background:#f5df34}.fp_underline-label--area-cucina:after{background:#ffa090}.fp_underline-label--area-sondaggi:after{background:#fef4b0}.fp_underline-label--area-natale:after{background:#fb3413}.fp_underline-label--area-backstair:after{background:#ff4900}.fp_underline-label--theme-text-black{color:#000}.fp_underline-label--theme-text-white{color:#fff;width:-webkit-max-content;width:-moz-max-content;width:max-content}.fp_header{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#161616;border-bottom:4px solid #dbdad3;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;height:60px;padding:0 20px;position:relative;z-index:1}@media(min-width:768px){.fp_header{border:0;height:225px;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;margin:0 0 12px;padding:0}}.fp_header:not(.fp_header--menu-category) .fp_header__menu>ul li{margin-right:18px}.fp_header .fp_button__icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#282828;border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:8px;height:32px;width:32px}.fp_header .fp_header__action-item{margin-right:8px}.fp_header .fp_header__action-item .fp_button__icon{margin-right:0}.fp_header .fp_header__action-item .fp_button__icon:hover{background-color:#282828}.fp_header--category .fp_header__logo{left:60px;-webkit-transform:none;transform:none}@media(min-width:768px){.fp_header--category .fp_header__logo{margin-left:50px;padding-top:0}}@media(max-width:1023px){.fp_header--category .fp_header__social{display:none}}@media(min-width:1024px){.fp_header--category .fp_header__social{border-right:1px solid #707070;left:calc(100% - 298px);padding-right:15px;top:50%;-webkit-transform:translateY(calc(-50% - 25px));transform:translateY(calc(-50% - 25px))}.fp_header--category .fp_header__social .fp_button__icon{background-color:transparent;height:26px;margin-right:8px;width:auto}.fp_header--category .fp_header__social .fp_button__icon:hover{background-color:#161616}.fp_header--category .fp_header__social .fp_button__icon:last-child{margin:0}}@media(min-width:768px)and (max-width:1023px){.fp_header--category .fp_header__social.is-ios{left:calc(100% - 236px)}}@media(min-width:768px){.fp_header--category .fp_header__action{right:62px;top:50%;-webkit-transform:translateY(calc(-50% - 25px));transform:translateY(calc(-50% - 25px))}}.fp_header--category .fp_button__icon{height:42px;width:42px}.fp_header--category+.fp_header__notification-container{-webkit-transform:translateY(-32px);transform:translateY(-32px)}@media(min-width:768px){.fp_header--category+.fp_header__notification-container{-webkit-transform:translateY(-170px);transform:translateY(-170px);width:42px}}@media(min-width:1024px){.fp_header--category+.fp_header__notification-container{position:absolute;right:20px}}@media(min-width:768px)and (max-width:1023px){.fp_header--category+.fp_header__notification-container.is-zoomed .fp_header__notification{-webkit-transform:translateY(-50%) scale(1.15);transform:translateY(-50%) scale(1.15)}}@media(min-width:768px){.fp_header--category+.fp_header__notification-container .fp_header__notification{height:42px;width:42px}.fp_header--category+.fp_header__notification-container .fp_header__notification svg{height:24px;width:24px}}@media(max-width:767px){.skin-loaded .fp_header--category+.fp_header__notification-container{-webkit-transform:translateY(-52px);transform:translateY(-52px)}}.fp_header__search-desktop{background-color:#282828;border:0;border-radius:20px 0 0 20px;color:#fff;height:32px;padding:0;position:absolute;right:64px;top:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;width:0}.fp_header--category .fp_header__search-desktop{height:42px;right:82px}.search-active .fp_header__search-desktop{padding:0 20px;width:160px}.fp_header__search-desktop:focus{outline:none}.fp_header--area-innovazione,.fp_header--area-tecnologia{border-color:#207aff}.fp_header--area-donna,.fp_header--area-stile-e-trend{border-color:#ad49d1}.fp_header--area-motori{border-color:#ff5900}.fp_header--area-spettacolo{border-color:#f70000}.fp_header--area-news{border-color:#dbdad3}.fp_header--area-sport{border-color:#a6d91e}.fp_header--area-lavoro{border-color:#5368bf}.fp_header--area-musica{border-color:#ff1286}.fp_header--area-scienze{border-color:#3f5c58}.fp_header--area-viaggi{border-color:#0bcec0}.fp_header--area-design{border-color:#f5df34}.fp_header--area-cucina{border-color:#ffa090}.fp_header--area-sondaggi{border-color:#fef4b0}.fp_header--area-natale{border-color:#fb3413}.fp_header--area-backstair{border-color:#ff4900}.fp_header .fp_header__menu-label{display:none}@media(min-width:768px){.fp_header .fp_header__menu-label{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;height:50px;padding:0 20px;position:relative}.fp_header .fp_header__menu-label:after{background-color:#000;content:"";height:18px;position:absolute;right:-2px;top:calc(50% - 2px);-webkit-transform:rotate(45deg) translateY(-50%);transform:rotate(45deg) translateY(-50%);width:18px}}.fp_header__logo{left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:109px}@media(min-width:768px){.fp_header__logo{left:auto;margin:auto;position:static;-webkit-transform:none;transform:none;width:285px}}@media(min-width:1024px){.fp_header__logo{padding-top:10px;width:315px}}.fp_header__logo:hover{opacity:1}.fp_header__logo img{height:100%;vertical-align:bottom;width:100%}.fp_header__notification-container{display:none;height:auto;left:0;margin-left:auto;-webkit-transform:translateY(-32px);transform:translateY(-32px);width:32px;z-index:101}@media(max-width:767px){.fp_header__notification-container{position:sticky}}@media(max-width:1023px){.fp_header__notification-container{top:60px}.home .fp_header__notification-container{top:80px}}@media(max-width:1023px){.fp_header__notification-container{-webkit-transform:translateY(-52px);transform:translateY(-52px)}}@media(max-width:767px){.home.leadeaboard_adv--filled .fp_header__notification-container{top:60px;-webkit-transform:translateY(-32px);transform:translateY(-32px)}}@media(max-width:767px){.home.skin-loaded.leadeaboard_adv--filled .fp_header__notification-container{top:185px}}.header-sticky .fp_header__notification-container{z-index:101}.single-video .fp_header__notification-container.is-zoomed{z-index:100}@media(max-width:767px){.skin-loaded .fp_header__notification-container{top:205px}}@media(min-width:768px)and (max-width:1023px){.skin-loaded .fp_header__notification-container{top:330px}}@media(min-width:768px)and (max-width:1023px){.home.skin-loaded .fp_header__notification-container{top:0}}@media(min-width:768px)and (max-width:1023px){.skin-loaded.header-sticky .fp_header__notification-container{z-index:100}}.fp_header__notification-container--0 .fp_header2__notification-count,.fp_header__notification-container--0 .fp_header__notification-tooltip{display:none}@media(min-width:768px){.fp_header__notification-container{height:auto;-webkit-transform:translateY(-221px);transform:translateY(-221px);top:225px}}@media(min-width:768px)and (max-width:1023px){.fp_header__notification-container{height:0;position:sticky}.home .fp_header__notification-container{position:relative;top:0}}@media(min-width:1024px){.fp_header__notification-container{position:absolute;top:238px;right:20px}}.fp_header__notification-container.is-visible{display:block}@media(min-width:768px){.fp_header__notification-container.is-visible{display:-webkit-box;display:-ms-flexbox;display:flex}}.fp_header__notification{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ff401d;border-radius:50%;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.35);box-shadow:0 3px 6px rgba(0,0,0,.35);cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;position:relative;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;-webkit-transform-origin:26px 0;transform-origin:26px 0;width:32px}.fp_header__notification:hover{opacity:1}.fp_header__notification svg{fill:#fff;height:18px;width:18px}@media(max-width:767px){.fp_header__notification{position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}@media(min-width:768px){.fp_header__notification{right:20px;-webkit-transform-origin:26px -48px;transform-origin:26px -48px;top:0}}@media(min-width:1024px){.fp_header__notification{right:0}}@media(max-width:1023px){.is-zoomed .fp_header__notification{-webkit-transform:translateY(-50%) scale(1.5);transform:translateY(-50%) scale(1.5)}}@media(max-width:1023px){.skin-loaded .is-zoomed .fp_header__notification{-webkit-transform:translateY(0) scale(1.5);transform:translateY(0) scale(1.5)}}.fp_header__notification-count{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:50%;bottom:-2px;color:#000;font-family:Lato,sans-serif;font-size:7px;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:12px;position:absolute;right:-2px;width:12px}@media(min-width:768px){.fp_header__notification-count{bottom:-4px;height:18px;right:-4px;width:18px}}.fp_header__notification-count--is-hidden{display:none}.is-zoomed .fp_header__notification-count{background-color:#000;color:#fff}.fp_header__icon-notification.is-animated{-webkit-animation:animaNotify 1.75s linear 0s infinite;animation:animaNotify 1.75s linear 0s infinite}@media(min-width:768px){.fp_header__menu{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#282828;display:-webkit-box;display:-ms-flexbox;display:flex;height:50px;overflow:hidden;width:100%}}.fp_header__menu ul{display:none}@media(min-width:768px){.fp_header__menu ul{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:100%;padding-left:22px}.fp_header--menu-category .fp_header__menu ul{-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:36px}}.fp_header__menu ul li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;line-height:16px;margin-right:18px}.fp_header__menu ul li a{border-bottom:2px solid transparent;color:#fff;font-family:Lato,Helvetica,Arial,sans-serif;font-size:13px;font-weight:400;line-height:17px;padding-bottom:2px;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;-webkit-transform:translateY(2px);transform:translateY(2px);-webkit-transition:border-color .1s, -webkit-transform .1s;transition:border-color .1s, -webkit-transform .1s;transition:transform .1s, border-color .1s;transition:transform .1s, border-color .1s, -webkit-transform .1s}.fp_header--menu-category .fp_header__menu ul li a{color:#333}.fp_header__menu ul li a:hover{border-color:#dbdad3;opacity:1;-webkit-transform:translateY(-1px);transform:translateY(-1px)}.fp_header--menu-category .fp_header__menu ul li a:hover{border-color:#161616}.fp_header__menu ul li.current-menu-item a{border-color:#161616;-webkit-transform:translateY(-1px);transform:translateY(-1px)}@media(min-width:768px){.fp_header--menu-category .fp_header__menu{background-color:#f4f4f2}}.fp_header__btn-menu{cursor:pointer}@media(min-width:768px){.fp_header__btn-menu{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#333;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;padding-left:16px;padding-right:16px}}.fp_header .fp_header__menu-cities{display:none}@media(min-width:1024px){.fp_header .fp_header__menu-cities{display:block;margin-left:auto}}.fp_header .fp_header__menu-cities ul{padding-right:10px}.fp_header .fp_header__menu-cities ul li{margin-right:6px}.fp_header .fp_header__menu-cities ul li:last-child{margin:0}.fp_header .fp_header__menu-cities ul li a{background-color:#333;border:0;border-radius:20px;color:#ccc;font-size:11px;line-height:15px;padding:4px 12px;-webkit-transform:none;transform:none;-webkit-transition:all .1s;transition:all .1s}.fp_header .fp_header__menu-cities ul li a:hover{background-color:transparent;-webkit-box-shadow:inset 0 0 0 1px #666;box-shadow:inset 0 0 0 1px #666;color:#fff}.fp_header__social{display:none}@media(min-width:768px){.fp_header__social{display:-webkit-box;display:-ms-flexbox;display:flex;left:20px;position:absolute;top:15px}}.fp_header__social .fp_button__icon:hover{background-color:#333}.fp_header__action{display:none}@media(min-width:768px){.fp_header__action{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:15px;right:52px}}.fp_header__action .fp_button__icon:hover{background-color:#333}.fp_header__action.search-active .fp_button__icon:hover{background-color:#282828}@media(min-width:768px){.fp_header__action.is-ios{right:12px}}.fp_header__action-item.search-active .fp_icon{z-index:1}@media(max-width:767px){.home .fp_header{margin-bottom:20px}}@media(max-width:767px){.home.leadeaboard_adv--filled .fp_header{margin-bottom:0}}@media(max-width:767px){.header-sticky .fp_header{position:sticky;top:0;z-index:101}}@media(max-width:767px){.header-sticky.skin-loaded .fp_header{position:sticky;top:125px;z-index:101}}@media(min-width:768px)and (max-width:1023px){.header-sticky .fp_header--category+.fp_header__notification-container{position:absolute;right:0;top:238px}}@media(min-width:768px)and (max-width:1023px){.skin-loaded .fp_header--category+.fp_header__notification-container.is-zoomed .fp_header__notification{-webkit-transform:translateY(0) scale(1.15);transform:translateY(0) scale(1.15)}}.fp_header__notification-tooltip{display:none}.is-hidden{display:none!important}@-webkit-keyframes bounce{0%{-webkit-transform:translateY(0);transform:translateY(0)}60%{-webkit-transform:translateY(0);transform:translateY(0)}70%{-webkit-transform:translateY(6px);transform:translateY(6px)}80%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(6px);transform:translateY(6px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes bounce{0%{-webkit-transform:translateY(0);transform:translateY(0)}60%{-webkit-transform:translateY(0);transform:translateY(0)}70%{-webkit-transform:translateY(6px);transform:translateY(6px)}80%{-webkit-transform:translateY(0);transform:translateY(0)}90%{-webkit-transform:translateY(6px);transform:translateY(6px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.fp_modal{position:fixed;top:0;left:0;height:100%;background:rgba(0,0,0,.6);padding:0 15px;z-index:1000000}.fp_modal,.fp_modal__box{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box}.fp_modal__box{position:relative;max-width:500px;height:300px;background:#fff;border-radius:20px;-webkit-box-shadow:0 5px 20px rgba(0,0,0,.2);box-shadow:0 5px 20px rgba(0,0,0,.2);-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:center;padding:0 30px}.fp_modal__box-close{position:absolute;top:10px;right:10px;cursor:pointer}.fp_modal__box-intro{letter-spacing:-.02em;font-family:Helvetica,Arial,sans-serif;font-size:24px;line-height:28px;font-weight:400;color:#0f0f0f;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_modal__box-actions{display:-webkit-box;display:-ms-flexbox;display:flex;padding:40px 0}@media(max-width:767px){.fp_modal__box-actions{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:15px 0}}.fp_modal__box-btn{-webkit-box-sizing:border-box;box-sizing:border-box;width:170px;height:36px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:40px;cursor:pointer}.fp_modal__box-btn:first-child{margin:0 15px 0 0}@media(max-width:767px){.fp_modal__box-btn:first-child{margin:0 0 10px}}.fp_modal__box-btn--bordered-grey{background:#fff;border:1px solid #e0e0e0;color:#666}.fp_modal__box-btn--blue,.fp_modal__box-btn--bordered-grey{letter-spacing:0;font-family:Lato,sans-serif;font-size:12px;line-height:12px;font-weight:700;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_modal__box-btn--blue{background:#07b5ff;color:#fff}.fp_modal__box-link{letter-spacing:0;font-family:Lato,sans-serif;font-size:10px;line-height:10px;font-weight:400;color:#666;text-transform:none;font-style:normal;text-decoration:none;-webkit-text-decoration:underline;text-decoration:underline}.fp_modal a:hover{opacity:1}@media(max-width:767px){body.fp_backstair-home .fp_header{margin-bottom:0}}body.menu-open{overflow:hidden}body{background:#171717}@media(min-width:1024px){body{padding:75px 0 0}}.fp_content-wrapper{max-width:994px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;background-color:#fff;position:relative}@media(min-width:768px){.fp_content-wrapper{padding:2px}}.fp_content-wrapper .fp_underfollow{bottom:-165px;left:50%;position:fixed;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;z-index:9999}@media(min-width:1024px){.fp_content-wrapper .fp_underfollow{left:20px;-webkit-transform:translateX(0);transform:translateX(0)}}.fp_content-wrapper .fp_underfollow--active{bottom:75px}@media(min-width:1024px){.fp_content-wrapper .fp_underfollow--active{bottom:20px}}.fp_content-wrapper .fp_underfollow--closed{bottom:-200px}.fp_bg-wrapper{background-color:#171717}.fp_bg-wrapper+footer{display:none;position:relative}@media(min-width:1024px){.fp_bg-wrapper+footer{display:block}}.fp_single-article__widget-election{margin-bottom:20px}.fp_single-article__wrap{padding:15px 20px 0;-webkit-box-sizing:border-box;box-sizing:border-box}@media(min-width:768px){.fp_single-article__wrap{max-width:718px;margin:0 auto;padding:0}}@media(min-width:1024px){.fp_single-article__wrap{max-width:910px;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}}@media(max-width:767px){.fp_single-article__wrap>.fp_newsbox{margin-left:-10px;margin-right:-10px}}.fp_single-article__head-content{padding:15px 20px 0;-webkit-box-sizing:border-box;box-sizing:border-box}@media(min-width:768px){.fp_single-article__head-content{max-width:638px;margin:0 auto;padding:0}}@media(min-width:1024px){.fp_single-article__head-content{max-width:910px}}.fp_single-article__head+.fp_single-article__wrap{padding-top:0}@media(min-width:1024px){.fp_single-article__content{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}}.fp_single-article__col-sx{word-wrap:break-word}@media(min-width:768px){.fp_single-article__col-sx{padding:0}}@media(min-width:768px)and (max-width:1023px){.fp_single-article__col-sx{max-width:638px;margin:0 auto}}@media(min-width:1024px){.fp_single-article__col-sx{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;width:570px}}@media(min-width:1024px){.fp_single-article__col-dx{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;width:300px}}@media(max-width:767px){.fp_single-article__col-dx .fp_article-grid-external,.fp_single-article__col-dx .fp_newsbox{margin-left:-10px;margin-right:-10px}}@media(min-width:768px){.fp_single-article__col-dx .fp_preview-article__block,.fp_single-article__col-dx .fp_preview-article__block__external{margin:0}}@media(min-width:1024px){.fp_single-article__col-dx .fp_preview-article__block>div{margin-bottom:100px}}@media(min-width:1024px){.fp_single-article__col-dx .fp_newsbox,.fp_single-article__col-dx .fp_story_box{margin:0 0 100px}}.fp_single-article__col-dx .fp_single-article__fanplayer{letter-spacing:-.02em;font-family:Helvetica,Arial,sans-serif;font-size:30px;line-height:30px;font-weight:700;color:#fff;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none;margin:0 auto 30px;position:relative;top:0;z-index:99;background-color:#eee}@media(min-width:1024px){.fp_single-article__col-dx .fp_single-article__fanplayer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:40px}}@media(min-width:1024px){.fp_single-article__col-dx .fb_iframe_widget{margin-bottom:30px}}.fp_single-article--live .fp_single-article__head{background-color:#f2f2f0;margin:20px 0}@media(min-width:768px){.fp_single-article--live .fp_single-article__head{margin:20px auto;padding:15px 0 0}}@media(max-width:767px){.fp_single-article--live .fp_info__label-wrap{display:block;width:100%}}.fp_single-article .cp_disclaimer,.fp_single-article .cp_disclaimer-info,.fp_single-article .cp_disclaimer-medical{margin:0 0 30px}.fp_single-article.fp_single-article-video .fp_video-featured--full-screen{margin-bottom:20px}.fp_single-article.fp_single-article-video .fp_video-featured-square .fp_video-featured--full-screen,.fp_single-article.fp_single-article-video .fp_video-featured-wide .fp_video-featured--full-screen{display:block}.fp_single-article.fp_single-article-video .fp_video-featured-square .fp_video-featured--full-column,.fp_single-article.fp_single-article-video .fp_video-featured-wide .fp_video-featured--full-column{margin-bottom:20px}@media(min-width:1024px){.fp_single-article.fp_single-article-video .fp_video-featured-square .fp_video-featured--full-column,.fp_single-article.fp_single-article-video .fp_video-featured-wide .fp_video-featured--full-column{display:block}}.single-video .fp_header{margin-bottom:0}@media(min-width:768px){.single-video .fp_header{margin-bottom:5px}}@media(min-width:768px){.single-video .cp_video-featured--full-screen{margin-bottom:20px}}.single-video-square .fp_header,.single-video-wide .fp_header{margin-bottom:0}@media(min-width:768px){.single-video-square .fp_header,.single-video-wide .fp_header{margin-bottom:5px}}.single-video-square .cp_video-featured--full-screen,.single-video-wide .cp_video-featured--full-screen{display:block}.single-video-square .cp_video-featured--full-column,.single-video-wide .cp_video-featured--full-column{margin-bottom:20px}@media(min-width:768px){.single-video-square .cp_video-featured--full-column .fp_video__bar,.single-video-wide .cp_video-featured--full-column .fp_video__bar{padding-left:20px;padding-right:20px}}@media(min-width:768px)and (max-width:1024px){.single-video-square .cp_video-featured--full-column,.single-video-wide .cp_video-featured--full-column{background:#f2f2f0;border-bottom:1px solid #f2f2f0}.single-video-square .cp_video-featured--full-column .fp_video__bar,.single-video-wide .cp_video-featured--full-column .fp_video__bar{max-width:638px;margin:0 auto;background:transparent}}@media(min-width:1024px){.single-video-square .cp_video-featured--full-column,.single-video-wide .cp_video-featured--full-column{display:block}}@media(min-width:768px){.single-video .featured-video--anchorage-placeholder{margin:0 auto;max-width:638px}}@media(min-width:1024px){.single-video .featured-video--anchorage-placeholder{margin:0;position:relative;left:113px;max-width:424px}}@media(min-width:1024px){.single-video .cp_wrapper--fw-video .featured-video--anchorage-placeholder{left:73px}}.cp_wrapper--fw{margin-left:-20px;margin-right:-20px}@media(min-width:768px)and (max-width:1023px){.cp_wrapper--fw\@tablet{margin-left:-40px;margin-right:-40px}}@media(min-width:1024px){.cp_wrapper--fw{margin-left:0;margin-right:0}}@media(min-width:768px)and (max-width:1023px){.cp_wrapper--fw-video{margin-left:calc(-49.7vw + 315px);margin-right:calc(-51vw + 319px);width:100vw}}@media(min-width:768px)and (max-width:1023px){.single-video .fp_single-article--editorial .cp_wrapper--fw-video,.single-video .fp_single-article--rubric .cp_wrapper--fw-video{margin-left:auto;margin-right:auto;width:auto}}@media(max-width:767px){.single-video-square .fp_single-article__wrap,.single-video-wide .fp_single-article__wrap{padding-top:0}}@media(min-width:768px)and (max-width:1023px){.single-video-square .fp_single-article__wrap .fp_header,.single-video-wide .fp_single-article__wrap .fp_header{margin-bottom:0}}.fp_adv-box{background-position:50%;background-size:cover;background-repeat:repeat;background-image:url(https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/css/wordpress/fanpage/images/default.png);position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto 30px;z-index:0}.fp_adv-box>div{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.fp_adv-box iframe{vertical-align:middle}@media(min-width:1024px){.fp_adv-box{margin:0 auto 15px}}.fp_adv-box--affiliation{margin:0 0 40px}.fp_adv-box--overlayer{height:0;margin-bottom:0}.fp_adv-box--skin{background-image:none;margin-bottom:0;width:100%;z-index:101}@media(min-width:1024px){.fp_adv-box--skin{height:0;z-index:auto;z-index:initial}}@media(max-width:1023px){.fp_adv-box--autopromo{height:125px}}.fp_adv-box--leadeboard{max-width:970px;z-index:1001}.fp_adv-box--leadeboard>div{-ms-flex-item-align:center;align-self:center}.fp_adv-box--fpmobile_leadeboard{min-width:300px;min-height:60px;margin:0 auto 12px;z-index:auto;z-index:initial}@media(max-width:359px){.fp_adv-box--fpmobile_leadeboard{margin-left:-10px}}@media(max-width:374px){.fp_adv-box--fpmobile_leadeboard{margin-left:-20px}}@media(min-width:768px){.fp_adv-box--fpmobile_leadeboard{max-width:728px}}@media(min-width:1024px){.fp_adv-box--fpmobile_leadeboard{background-image:url(https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/css/wordpress/fanpage/images/default--leaderboard.jpg);min-height:120px;max-width:980px}}@media(min-width:1024px){.fp_adv-box--fpmobile_leadeboard.fp_adv-box--both,.fp_adv-box--fpmobile_leadeboard.fp_adv-box--desk{display:-webkit-box;display:-ms-flexbox;display:flex;margin:12px 10px}}.fp_adv-box--fpmobile_leadeboard>div{-ms-flex-item-align:center;align-self:center}.fp_adv-box--fpmobile_300x250_top{height:335px;min-width:300px;max-width:336px}@media(max-width:359px){.fp_adv-box--fpmobile_300x250_top{margin-left:-10px}}@media(min-width:1024px){.fp_adv-box--fpmobile_300x250_top{height:600px}}.fp_adv-box--fpmobile_300x250,.fp_adv-box--fpmobile_fplayer{height:600px;min-width:300px;max-width:336px}@media(max-width:359px){.fp_adv-box--fpmobile_300x250,.fp_adv-box--fpmobile_fplayer{margin-left:-10px}}.fp_adv-box--fpmobile_300x250_bottom{height:600px;max-width:336px;min-width:300px}@media(max-width:359px){.fp_adv-box--fpmobile_300x250_bottom{margin-left:-10px}}.fp_adv-box--fpmobile_300x600{min-height:250px;max-height:600px;min-width:300px;max-width:336px;height:100%}@media(max-width:359px){.fp_adv-box--fpmobile_300x600{margin-left:-10px}}.fp_adv-box--fix-h250{height:250px}@media(min-width:1024px){.fp_adv-box--fix-h250-desktop{height:250px}}.fp_adv-box--smart-feed{width:100%;height:400px;margin:0 0 40px}@media(min-width:768px){.fp_adv-box--only-mobile{display:none}}.fp_adv-box--from-tablet{display:none}@media(min-width:768px){.fp_adv-box--from-tablet{display:-webkit-box;display:-ms-flexbox;display:flex}}@media(min-width:1024px){.fp_adv-box--to-tablet{display:none}}.fp_adv-box--only-tablet{display:none}@media(min-width:768px)and (max-width:1023px){.fp_adv-box--only-tablet{display:-webkit-box;display:-ms-flexbox;display:flex}}.fp_adv-box--only-desktop{display:none}@media(min-width:1024px){.fp_adv-box--only-desktop{display:-webkit-box;display:-ms-flexbox;display:flex}}@media(min-width:1024px){.fp_adv-box--even,.fp_adv-box--odd{float:right;margin:0 0 20px 40px}}@media(min-width:768px)and (max-width:1023px){.fp_adv-box--even{float:left;margin:0 0 20px;right:40px}}@media(min-width:768px)and (max-width:1023px){.fp_adv-box--odd{float:right;margin:0 0 20px;left:40px}}.fp_adv-box--vertical-align-mid{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.fp_featured-videos .fp_adv-box{margin:0}.fp_single-article__col-sx>blockquote,.fp_single-article__col-sx>ol:after,.fp_single-article__col-sx>p:after,.fp_single-article__col-sx>ul:after{content:"";clear:both;display:block}.fp_single-article__col-dx .fp_adv-box--fpmobile_300x250_top{display:none}@media(min-width:1024px){.fp_single-article__col-dx .fp_adv-box--fpmobile_300x250_top{margin:0 0 100px;display:-webkit-box;display:-ms-flexbox;display:flex}}.fp_single-article--live .fp_adv-box--fpmobile_leadeboard{margin-bottom:0}@media(min-width:768px){.fp_single-article--live .fp_adv-box--fpmobile_leadeboard{margin-bottom:24px}}.fp_live-box-all--adv-mode .fp_live-box-all__single-box--adv-mode{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@media(max-width:360px){.fp_live-box-all--adv-mode .fp_live-box-all__single-box:first-child:after,.fp_live-box-all--adv-mode .fp_live-box-all__single-box:nth-child(6n):after{margin:10px 5px}}.fp_live-box-all--adv-mode .fp_adv-box{margin:10px auto}body.skin-loaded{background-color:#171717}@media(min-width:1024px){body.skin-loaded .fp_content-wrapper{z-index:2}}@media(max-width:767px){body.skin-loaded .fp_ads--skin{height:125px;margin:0;overflow:hidden;position:sticky;top:0;left:0;z-index:1001;width:100%}}body.skin-loaded .fp_ads--skin body{margin:0}body.skin-loaded .fp_bg-wrapper{background-color:transparent}@media(max-width:767px){body.skin-loaded iframe{max-width:100%}}body.skin-loaded .fp_adv-box--skin{background-image:none;top:0}@media(max-width:1023px){body.skin-loaded .fp_adv-box--skin{position:sticky}}.fp_fanplayer-wrapper{z-index:10000;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media(min-width:1024px){.fp_fanplayer-wrapper{position:sticky}}@media(max-width:767px){.ob-smartfeed-wrapper{margin:0 -20px 30px}}@media(min-width:768px){.ob-smartfeed-wrapper{max-width:none!important}.ob-smartfeed-wrapper{margin:0 calc(-50vw + 359px) 40px}}@media(min-width:1024px){.ob-smartfeed-wrapper{margin:0 -40px}}.teads-inread{margin:0 auto 30px}@media(min-width:1024px){.teads-inread{margin:0 auto 40px}}.cp_recommendations--relateds-box{margin:0 0 30px}@media(min-width:1024px){.cp_recommendations--relateds-box{-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;margin:0 0 40px;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}}@media(max-width:767px){.cp_recommendations--relateds-box{margin:0 -20px 30px}}body.scrollBlock{overflow:hidden}.intStWrap{position:fixed;top:0;bottom:0;left:0;right:0;background:#fff;z-index:900}.intSt{width:100%;text-align:center;z-index:901;position:fixed;margin:0 auto}@media(min-width:1024px){.intSt{position:relative;width:1000px}}.intSt a{font-family:Helvetica,Arial,sans-serif;color:#000;-webkit-text-decoration:none;text-decoration:none}.intSt .content{text-align:center;margin-top:10px;margin-bottom:10px}@media(min-width:1024px){.intSt .content{margin-top:80px}}.intSt-head{width:100%;position:fixed;top:0}.intSt-head .head{-webkit-box-shadow:none;box-shadow:none}.intSt-head .head .logo{height:100%!important}.intSt-head .head .logo{margin:0 auto}@media(min-width:1024px){.intSt-head .logo{float:left}}@media(min-width:1024px){.intSt-head{margin-bottom:20px;padding:15px 0;width:1000px}}.intSt-head a{color:#333;font-weight:700;font-size:14px;line-height:16px;position:relative}@media(min-width:1024px){.intSt-head a{float:right;font-size:12px;top:10px}}.intSt-headWall{height:58px;background:#fff;position:absolute;z-index:-1;left:-100px;right:-100px;bottom:22px}@media(min-width:1024px){.intSt-headWall{bottom:0;height:90px;left:-4500px;width:9000px}}@media(min-width:767px){.interstitial{position:fixed;top:20px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:100001}.overlay-interstitial{position:fixed;top:0;bottom:0;left:0;right:0;background-color:#fff;z-index:100000;text-align:center}.overlay-interstitial .interstitial-link{margin-top:520px;display:block}}.fp_label{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:20px;letter-spacing:0;font-family:Lato,sans-serif;font-size:12px;line-height:12px;font-weight:400;color:#fff;text-transform:uppercase;font-style:normal;-webkit-text-decoration:none;text-decoration:none;background-color:#ff4900;padding:0 7px}@media(min-width:768px){.fp_label{font-size:14px;line-height:14px;letter-spacing:-.01em;font-family:Lato,sans-serif}}@media(min-width:1024px){.fp_label{font-size:16px;line-height:16px;letter-spacing:-.01em;font-family:Lato,sans-serif}}.fp_label .fp_icon svg{height:16px;margin-right:6px;width:16px}@media(min-width:768px){.fp_label .fp_icon svg{height:18px;width:18px}}@media(min-width:1024px){.fp_label .fp_icon svg{height:20px;width:20px}}@media(min-width:768px){.fp_label{height:24px}}@media(min-width:1024px){.fp_label{height:30px}}.fp_label--icon-type-opinion{background-color:#f4f4f2;color:#000}.fp_label--row-block{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ff4900;display:-webkit-box;display:-ms-flexbox;display:flex;height:24px;padding:0 7px}@media(max-width:767px){.fp_label--row-block{margin-bottom:15px}}.fp_info--updated .fp_label{height:22px}.fp_video{position:relative;z-index:100}.fp_video iframe{display:block}@media(min-width:1024px){.fp_video--mobile{display:none}}.fp_video--desktop{display:none}@media(min-width:1024px){.fp_video--desktop{display:block}}.fp_video__placeholder{position:relative;overflow:hidden;width:100%;padding-top:56.25%;background:#000}.fp_video__placeholder .cp_video-featured--container,.fp_video__placeholder .ymv-featured,.fp_video__placeholder iframe,.fp_video__placeholder video{position:absolute;top:0;bottom:0;right:0;left:0;width:100%;height:100%}@media screen and (min-width:345px)and (max-width:1023px){.fp_video__placeholder{padding-top:56.19%}}.fp_video--square .fp_video__placeholder{padding-top:0}.fp_video--square .fp_video__placeholder:after{content:"";display:block;padding-bottom:100%}.fp_video__bar{font-family:Helvetica,Arial,sans-serif;font-size:18px;line-height:19px;letter-spacing:-.01em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px;background-color:#f2f2f0}@media(min-width:345px){.fp_video__bar{padding:10px 20px}}@media(min-width:768px){.fp_video__bar{padding:10px 25px}}@media(min-width:1024px){.fp_video__bar{padding:10px 40px}}.fp_video__bar .fp_icon{width:22px;height:22px;margin-right:5px}.fp_video__views{font-family:Lato,sans-serif}.fp_video__views strong{font-weight:700}.fp_video__author,.fp_video__views{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media(min-width:1024px){.fp_video .js-featured-video .cp_video__bar{padding:10px 40px}}.fp_video__author{margin-left:10px;font-size:14px;line-height:18px;gap:4px}.fp_video__author a,.fp_video__author strong{color:#000;margin-left:2px;-webkit-text-decoration:none;text-decoration:none}.fp_video__author a,.fp_video__author span:last-child{font-weight:700}@media(min-width:768px)and (max-width:1024px){.fp_video{background:#f2f2f0;border-bottom:1px solid #f2f2f0}.fp_video .fp_video__bar{max-width:638px;margin:0 auto;background:transparent}}.fp_main-media{margin:0 0 30px}.fp_main-media.fp_main-media--rubric{margin:0 0 20px}.fp_main-media img{display:block;height:auto;margin:0 auto;width:100%}@media(min-width:768px){.fp_main-media{max-width:718px}.fp_main-media.fp_main-media--live{max-width:638px}}@media(min-width:1024px){.fp_main-media{max-width:570px}.fp_main-media,.fp_main-media.fp_main-media--rubric{margin:0 0 40px}}.fp_main-media__container{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 36 32%27%3E%3Cpath d=%27M34 4h-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v24c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6v20H2.004L2 25.996V2.003l.004-.004h27.993l.004.004v1.996h-24c-1.1 0-2 .9-2 2zm30 23.996l-.004.004H6.003l-.004-.004V6.003l.004-.004h27.993l.004.004v23.993z%27/%3E%3Cpath d=%27M30 11a3 3 0 11-6 0 3 3 0 016 0zM32 28H8v-4l7-12 8 10h2l7-6z%27/%3E%3C/svg%3E");background-color:#eee;background-size:32px;background-position:50%;background-repeat:no-repeat;margin:0 -20px 8px;position:relative}@media(min-width:768px){.fp_main-media__container{margin:0 0 8px}}@media(min-width:768px)and (max-width:1023px){.fp_main-media__container{margin:0 -40px;text-align:center}}.fp_main-media__trigger{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.5);border-radius:50%;display:none;height:46px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;right:10px;position:absolute;bottom:10px;width:46px}@media(min-width:768px){.fp_main-media__trigger{height:40px;width:40px}}@media(min-width:1024px){.fp_main-media__trigger{cursor:pointer}}.fp_main-media--video .fp_main-media__trigger{bottom:auto;left:50%;right:auto;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.fp_main-media__figcaption-content{margin-top:8px;letter-spacing:-.01em;font-family:Lato,sans-serif;font-size:14px;line-height:18px;font-weight:400;color:#666;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_main-media__figcaption-content:after{background-color:#333;content:"";display:block;height:2px;width:20px;margin-top:8px}@media(min-width:768px){.fp_main-media__figcaption-content{padding:0}}.fp_main-media__figcaption-content a{color:#000;font-weight:700;-webkit-text-decoration:none;text-decoration:none}.fp_main-media__figcaption-content a:hover{color:#000;-webkit-text-decoration:underline;text-decoration:underline}@media(min-width:768px){.fp_main-media--float{float:left;margin:0;max-width:300px}.fp_main-media--float .fp_main-media__container{margin:0 30px 0 -40px}.fp_main-media--float:before{content:"";height:20px;width:100%}}@media(min-width:1024px){.fp_main-media--float{margin:0 20px 0 0}.fp_main-media--float .fp_main-media__container{margin:0}}@media(min-width:768px){.fp_main-media-spacer{height:20px}}.fp_underfollow--default{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:335px;height:165px;overflow:hidden;border-radius:10px;border:3px solid #07b5ff;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.5);box-shadow:0 3px 6px rgba(0,0,0,.5)}@media(min-width:768px){.fp_underfollow--default{width:300px;height:140px}}.fp_underfollow--default:before{content:"";display:block;position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.5);z-index:9}.fp_underfollow--default.fp_underfollow--no-media:before{background-color:#161616}.fp_underfollow--default .fp_underfollow__img-wrap{position:relative;overflow:hidden;height:100%}.fp_underfollow--default .fp_underfollow__img-content{position:absolute;top:0;right:0;bottom:0;left:0}.fp_underfollow--default .fp_underfollow__img-content img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.fp_underfollow--default .fp_underfollow__intro{letter-spacing:0;font-size:12px;line-height:12px;font-weight:400;letter-spacing:-.02rem}.fp_underfollow--default .fp_underfollow__intro,.fp_underfollow--default .fp_underfollow__title{font-family:Helvetica,Arial,sans-serif;color:#fff;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_underfollow--default .fp_underfollow__title{letter-spacing:-.01em;font-size:18px;line-height:22px;font-weight:700;height:72px;overflow:hidden;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}@media(min-width:768px){.fp_underfollow--default .fp_underfollow__title{height:56px}}.fp_underfollow--default .fp_underfollow__title span{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;max-height:44px;overflow:hidden}.fp_underfollow--default .fp_underfollow__title.fp_underfollow__title--alternative{letter-spacing:-.01em;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:22px;font-weight:700;color:#fff;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none;height:66px;margin:0 0 4px}.fp_underfollow--default .fp_underfollow__title.fp_underfollow__title--alternative span{display:block;max-height:none;max-height:initial}.fp_underfollow--default .fp_underfollow__content{height:calc(100% - 46px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;z-index:99;padding:22px 12px;text-align:center}.fp_underfollow--default .fp_underfollow__content .fp_button{padding:0 15px}.fp_underfollow--default .fp_underfollow__content .fp_button .fp_icon{margin-left:12px}@media(min-width:768px){.fp_underfollow--default .fp_underfollow__content{padding:17px 7px;height:calc(100% - 34px)}}.fp_underfollow--default.fp_underfollow--area-backstair .fp_underfollow__logo{height:20px;width:68px}.fp_underfollow--default.fp_underfollow--area-backstair .fp_underfollow__logo img{width:100%}.fp_underfollow--last-hour{background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.25);box-shadow:0 5px 10px rgba(0,0,0,.25);max-width:335px;width:100%;min-height:165px;border:5px solid #ff4900;margin-top:9px;padding:20px 20px 15px;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.fp_underfollow--last-hour:before{content:"ULTIMA ORA";display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:78px;height:18px;background-color:#ff4900;letter-spacing:0;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:12px;font-weight:400;color:#fff;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none;position:absolute;left:20px;top:-11px;z-index:2}.fp_underfollow--last-hour:after{content:"";background:#fff;width:98px;height:5px;position:absolute;top:-5px;left:10px;z-index:1}.fp_underfollow--last-hour .fp_underfollow__title{letter-spacing:-.04em;font-family:Tolyer,sans-serif;font-size:28px;line-height:28px;font-weight:400;color:#333;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow:hidden;min-height:83px}.fp_underfollow--last-hour .fp_underfollow__button-wrap{text-align:right}.fp_underfollow--last-hour .fp_underfollow__button-wrap .fp_button{color:#333!important}.fp_underfollow--last-hour .fp_underfollow__button-wrap .fp_button{height:24px;padding:0 10px;letter-spacing:0;font-family:Lato,sans-serif;font-size:10px;line-height:10px;font-weight:700;color:#333;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_underfollow--last-hour .fp_underfollow__button-wrap .fp_button .fp_icon{margin:0 0 0 10px}.fp_underfollow--last-hour .fp_underfollow__button-wrap .fp_button .fp_icon svg{width:8px;height:8px}.fp_underfollow--last-hour .fp_underfollow__button-wrap .fp_button .fp_icon g,.fp_underfollow--last-hour .fp_underfollow__button-wrap .fp_button .fp_icon path,.fp_underfollow--last-hour .fp_underfollow__button-wrap .fp_button .fp_icon use{fill:#333!important}.fp_underfollow .fp_underfollow__close{position:absolute;top:0;right:0;padding:10px;cursor:pointer}@media(min-width:768px){.fp_underfollow .fp_underfollow__close{padding:7px}}.fp_info{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 0 15px;letter-spacing:0;font-family:Lato,sans-serif;font-size:10px;line-height:16px;font-weight:400;color:#666;text-transform:uppercase;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_info__date{margin:0 10px 0 0}.fp_info__date,.fp_info__time{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.fp_info__date svg,.fp_info__time svg{margin:0 4px 0 0}.fp_info__label-wrap{margin-right:10px}.fp_info--updated .fp_info__label-wrap{margin-bottom:0}.fp_info__date-updated{-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-ms-flexbox;display:flex}.fp_info__prefix{margin-right:10px}@media(min-width:768px){.fp_info__story:after{content:"";display:inline-block;width:4px;height:4px;border-radius:50%;background-color:#e0e0e0;margin:0 6px}}@media(max-width:767px){.fp_info__story+.fp_info__date-updated{-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;margin-top:10px}}@media(max-width:768px){.fp_info--label .fp_info__date-updated .fp_info__date:before{display:none}}@media(max-width:767px){.fp_info--label .fp_info__story+.fp_info__date-updated{-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;margin-top:10px}}.fp_info--label .fp_info__story+.fp_info__date-updated .fp_info__date:before{display:none}.fp_info__label-wrap+.fp_info__date-updated .fp_info__date:before{display:none;visibility:hidden}.fp_info--rubric{-ms-flex-wrap:wrap;flex-wrap:wrap}@media(min-width:768px){.fp_info--rubric{padding-top:3px}}.fp_info--rubric .fp_info__rubric{border-radius:6px;display:block;height:36px;margin:0 0 15px;overflow:hidden;position:relative;width:230px}.fp_info--rubric .fp_info__rubric-wrap{height:36px;margin:0 0 15px;width:100%}.fp_info--rubric .fp_info__rubric-content{position:absolute;top:0;left:0;right:0;bottom:0}.fp_info--rubric .fp_info__rubric-img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.fp_info--story .fp_info__story{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.fp_info--story .fp_info__story .fp_icon{margin-top:-4px}.fp_info--story .fp_info__story a,.fp_info--story .fp_info__story span{display:inline-block;margin:0 0 0 5px;-webkit-text-decoration:none;text-decoration:none;color:#333}.fp_info--updated{-ms-flex-wrap:wrap;flex-wrap:wrap}.fp_info--updated .fp_info__label{margin:0 0 15px;width:100%}@media(min-width:768px){.fp_info--updated .fp_info__label{width:auto;margin:0}}.fp_info--updated .fp_info__updated{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.fp_info--updated .fp_info__updated:before{content:"";display:inline-block;width:4px;height:4px;border-radius:50%;background-color:#e0e0e0;margin:0 6px}.fp_info--updated .fp_info__updated span{display:inline-block;color:#333;font-weight:700;margin:0 0 0 4px}@font-face{font-display:swap;font-family:Lato;font-style:normal;font-weight:300;src:local("Lato Light"),local("Lato-Light"),url(https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/css/wordpress/fanpage/fonts/lato-light.woff2) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2212,U+2215}@font-face{font-display:swap;font-family:Lato;font-style:normal;font-weight:400;src:local("Lato Regular"),local("Lato-Regular"),url(https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/css/wordpress/fanpage/fonts/lato-regular.woff2) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2212,U+2215}@font-face{font-display:swap;font-family:Lato;font-style:normal;font-weight:700;src:local("Lato Bold"),local("Lato-Bold"),url(https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/css/wordpress/fanpage/fonts/lato-bold.woff2) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2212,U+2215}@font-face{font-display:swap;font-family:Merriweather;font-style:italic;font-weight:300;src:local("Merriweather Light Italic"),local("Merriweather-Light-Italic"),url(https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/css/wordpress/fanpage/fonts/merriweather-light-italic.woff2) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2212,U+2215}@font-face{font-display:swap;font-family:Merriweather;font-style:italic;font-weight:700;src:local("Merriweather Bold Italic"),local("Merriweather-Bold-Italic"),url(https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/css/wordpress/fanpage/fonts/merriweather-bold-italic.woff2) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2212,U+2215}@font-face{font-display:swap;font-family:Tolyer;font-style:normal;font-weight:400;src:local("Tolyer-Regular"),local("Tolyer-Regular"),url(https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/css/wordpress/fanpage/fonts/tolyer.woff2) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2212,U+2215}.fp_social-entry{width:100%}.fp_social-entry>a{display:-webkit-box;display:-ms-flexbox;display:flex;gap:10px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-text-decoration:none;text-decoration:none;color:inherit;font-family:inherit;font-weight:inherit;padding-top:15px}@media(min-width:1024px){.fp_social-entry{display:none}}.fp_social-entry--type-whatsapp .fp_social-entry__icon-type{background-color:#17f80d}.fp_social-entry--type-whatsapp .fp_social-entry__icon-type .cp_icon svg{fill:#fff}.fp_social-entry .cp_icon{display:block}.fp_social-entry__icon-type{-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:10px;border-radius:50px}.fp_social-entry__icon-type .cp_icon,.fp_social-entry__icon-type .cp_icon svg{width:22px;height:22px}.fp_social-entry__icon-next{-ms-flex-negative:0;flex-shrink:0}.fp_social-entry__icon-next .cp_icon,.fp_social-entry__icon-next .cp_icon svg{fill:#17f80d;width:13px;height:24px}.fp_social-entry__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;color:#666;font-family:Merriweather,Georgia,serif;font-weight:300;font-style:italic;font-size:20px;line-height:30px;letter-spacing:-.02em}.fp_social-entry__content>span{color:#000;-webkit-text-decoration:underline;text-decoration:underline;text-decoration-thickness:2px;text-underline-offset:2px;text-decoration-color:#17f80d;font-family:Merriweather,Georgia,serif;font-weight:700}.fp_intro{margin:0 0 15px}@media(min-width:768px){.fp_intro{margin:0 0 20px}}.fp_intro__abstract,.fp_intro__title{display:block}.fp_intro__title{margin:0 0 10px;letter-spacing:-.02em;font-family:Helvetica,Arial,sans-serif;font-size:32px;line-height:38px;font-weight:700;color:#000;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none}@media(min-width:768px){.fp_intro__title{font-size:42px;line-height:48px;letter-spacing:-.03em;font-family:Helvetica,Arial,sans-serif}}.fp_single-article--live-football .fp_intro__title{margin:0 0 15px}@media(min-width:768px){.fp_single-article--live-football .fp_intro__title{margin:0 0 30px}}.fp_intro__title span{display:none}.fp_intro__abstract{margin:10px 0 0;letter-spacing:-.02em;font-family:Merriweather,Georgia,serif;font-size:20px;line-height:30px;font-weight:300;color:#666;font-style:italic;-webkit-text-decoration:none;text-decoration:none}@media(min-width:768px){.fp_intro__abstract{margin:15px 0 0}}.fp_intro__banner-native{display:block;padding:20px 0 0}.fp_intro__banner-native img{max-width:100%}.fp_button{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:none;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap}.fp_button .fp_icon{margin-left:6px}.fp_button--rounded{border-radius:35px}.fp_button--show-more-small{min-width:140px;height:26px;padding:0 4px;font-size:10px;line-height:10px}.fp_button--show-more-big,.fp_button--show-more-small{letter-spacing:0;font-family:Lato,sans-serif;font-weight:400;text-transform:uppercase;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_button--show-more-big{min-width:164px;height:32px;padding:0 8px;font-size:12px;line-height:12px}.fp_button--follow-1-big:hover,.fp_button--follow-1-extra-small:hover,.fp_button--follow-1-small:hover,.fp_button--follow-2:hover{opacity:1}.fp_button--follow-1-extra-small{height:26px;padding:0 20px;letter-spacing:0;font-family:Lato,sans-serif;font-size:12px;line-height:12px;font-weight:700;color:#fff;text-transform:uppercase;font-style:normal;-webkit-text-decoration:none;text-decoration:none}@media(min-width:768px){.fp_button--follow-1-extra-small{font-size:11px;line-height:11px;letter-spacing:0;font-family:Lato,sans-serif}}.fp_button--follow-1-extra-small .fp_icon{margin-left:10px}.fp_button--follow-1-extra-small .fp_icon svg,.fp_button--follow-1-extra-small .fp_icon use{width:11px;height:11px;margin-top:1px}@media(min-width:768px){.fp_button--follow-1-extra-small{height:20px;padding:0 10px}}.fp_button--follow-1-small{height:26px;padding:0 10px 0 20px;letter-spacing:0;font-family:Lato,sans-serif;font-size:12px;line-height:12px;font-weight:700;color:#fff;text-transform:uppercase;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_button--follow-1-small .fp_icon{margin:0 0 0 10px}.fp_button--follow-1-small .fp_icon svg,.fp_button--follow-1-small .fp_icon use{width:16px;height:16px}.fp_button--follow-1-small .fp_icon--type-icon_follow{margin-top:-2px}.fp_button--follow-1-big{height:32px;padding:0 15px;letter-spacing:0;font-family:Lato,sans-serif;font-size:12px;line-height:12px;font-weight:700;color:#fff;text-transform:uppercase;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_button--follow-1-big .fp_icon{margin-left:10px}.fp_button--follow-2{height:36px;padding:0 10px;letter-spacing:0;font-family:Lato,sans-serif;font-size:12px;line-height:12px;font-weight:700;color:#333;text-transform:uppercase;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_button--follow-2 .fp_icon{margin-left:8px}@media(min-width:768px){.fp_button--follow-2{height:32px;padding:0 12px}}.fp_button.fp_button—follow-btn .fp_icon--type-icon_check,.fp_button .fp_icon--follow-active{display:none}.fp_button.fp_button—follow-btn.fp_button—follow-btn-followed{background:#e1e1dd}.fp_button.fp_button—follow-btn.fp_button—follow-btn-followed span{color:#666}.fp_button.fp_button—follow-btn.fp_button—follow-btn-followed svg,.fp_button.fp_button—follow-btn.fp_button—follow-btn-followed use{fill:#666!important}.fp_button.fp_button—follow-btn.fp_button—follow-btn-followed .fp_icon--type-icon_belt,.fp_button.fp_button—follow-btn.fp_button—follow-btn-followed .fp_icon--type-icon_belt_outline,.fp_button.fp_button—follow-btn.fp_button—follow-btn-followed .fp_icon--type-icon_follow{display:none}.fp_button.fp_button—follow-btn.fp_button—follow-btn-followed .fp_icon--type-icon_check{display:inline-block}.fp_button--admin-edit{height:20px;padding:0 5px;letter-spacing:0;font-family:Lato,sans-serif;font-size:12px;line-height:12px;font-weight:400;color:#333;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_button--theme-light-grey{color:#4f4f4f!important}.fp_button--theme-light-grey{background-color:#f2f2f0;-webkit-transition:all .1s linear;transition:all .1s linear}@media(hover:hover){.fp_button--theme-light-grey:hover{color:#666!important}.fp_button--theme-light-grey:hover{background-color:#e0e0e0}}.fp_button--theme-white{background-color:#fff;color:#666}.fp_button--theme-dark-grey,.fp_button--theme-dark-grey-with-shadow{color:#ccc!important}.fp_button--theme-dark-grey,.fp_button--theme-dark-grey-with-shadow{background-color:#333}.fp_button--theme-dark-grey-with-shadow{-webkit-box-shadow:0 2px 15px rgba(15,15,15,.2);box-shadow:0 2px 15px rgba(15,15,15,.2);-webkit-transition:all .1s linear;transition:all .1s linear}@media(hover:hover){.fp_button--theme-dark-grey-with-shadow:hover{background-color:#0f0f0f}}.fp_button--theme-dark-grey2{color:#ccc!important}.fp_button--theme-dark-grey2{background-color:#222}.fp_button--theme-bordered-orange{background-color:#fff;color:#000;border:1px solid #ff4900;-webkit-transition:all .1s linear;transition:all .1s linear}.fp_button--theme-bordered-orange .fp_icon svg,.fp_button--theme-bordered-orange .fp_icon use{-webkit-transition:all .07s linear;transition:all .07s linear}@media(hover:hover){.fp_button--theme-bordered-orange:hover{background-color:#ff4900;color:#fff;opacity:1}.fp_button--theme-bordered-orange:hover .fp_icon svg,.fp_button--theme-bordered-orange:hover .fp_icon use{fill:#fff}}.fp_button--theme-bordered-blue{border:1px solid #3d7eff;background-color:#fff;color:#000}.fp_button--theme-bordered-grey{background-color:transparent;color:#333;border:1px solid #f2f2f0;-webkit-transition:all .1s linear;transition:all .1s linear}@media(hover:hover){.fp_button--theme-bordered-grey:hover{background-color:#f2f2f0;color:#000}}.fp_button--theme-bordered-blue-with-shadow{border:1px solid #3d7eff;background-color:#fff;color:#000;-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25);-webkit-transition:all .1s linear;transition:all .1s linear}@media(hover:hover){.fp_button--theme-bordered-blue-with-shadow:hover{background-color:#eee}}.fp_button--theme-full-orange{color:#fff!important}.fp_button--theme-full-orange{background-color:#ff4900}.fp_button--theme-full-blue{color:#fff!important}.fp_button--theme-full-blue{background-color:#00b5ff;-webkit-transition:all .1s linear;transition:all .1s linear}.fp_button--theme-full-blue .fp_icon svg path{fill:#fff}@media(hover:hover){.fp_button--theme-full-blue:hover{background-color:#07ceff}}.fp_button--theme-facebook{color:#fff!important}.fp_button--theme-facebook{background-color:#416dff}.fp_button--size-10{font-size:10px}.fp_button--size-10,.fp_button--size-11{letter-spacing:0;font-family:Lato,sans-serif;line-height:26px;font-weight:400;color:#000;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;padding:0 10px}.fp_button--size-11{font-size:11px}.fp_button--size-12{letter-spacing:0;font-family:Lato,sans-serif;font-size:12px;line-height:32px;font-weight:400;color:#000;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;padding:0 10px}.fp_button--size-12 .fp_icon{width:13px;height:13px}.fp_button--size-12 .fp_icon svg{width:100%;height:100%}.fp_button--size-13{font-size:13px;line-height:32px;padding:0 10px}.fp_button--size-13,.fp_button--size-14{letter-spacing:-.01em;font-family:Lato,sans-serif;font-weight:400;color:#000;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none}.fp_button--size-14{font-size:14px;line-height:36px;padding:0 15px}.fp_button--size-14 .fp_icon{width:15px;height:15px}.fp_button--size-14 .fp_icon svg{width:100%;height:100%}.fp_button--size-20{letter-spacing:-.02em;font-family:Lato,sans-serif;font-size:20px;line-height:42px;font-weight:700;color:#000;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;padding:0 20px}.fp_button-wrap{margin:0 0 20px}.fp_button-wrap--sticky{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;position:sticky;top:150px;z-index:3}.fp_button-wrap--hidden{display:none}.fp_button-wrap--centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.fp_author{letter-spacing:-.01em;font-family:Lato,sans-serif;font-size:14px;line-height:14px;font-weight:400;color:#666;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 0 15px}@media(min-width:768px){.fp_author{margin:0 0 20px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.fp_author .fp_icon{margin-bottom:1px}.fp_live-box .fp_author{padding:0}.fp_author__name a{display:inline-block}.fp_author__name a,.fp_author__name span{font-weight:700;color:#000;-webkit-text-decoration:none;text-decoration:none}.fp_live-box .fp_author__name a,.fp_live-box .fp_author__name span{color:#666;font-weight:400}.fp_author__name--break span{display:block;margin:0 0 6px;padding-top:2px}.fp_author__link{margin:0 0 0 10px}.fp_button__icon{width:32px;height:32px;border-radius:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;-webkit-transition:all .1s linear;transition:all .1s linear;overflow:hidden}.fp_button__icon--login .fp_button__icon-img-wrap{position:relative;overflow:hidden;display:none}.fp_button__icon--login .fp_button__icon-img-content{position:absolute;top:0;bottom:0;left:0;right:0}.fp_button__icon--login .fp_button__icon-img-content img{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.fp_button__icon--login .fp_icon--type-icon_person{display:-webkit-box;display:-ms-flexbox;display:flex}.fp_button__icon--login.fp_button__icon--logged .fp_button__icon-img-wrap{display:inline-block;width:100%;height:100%}.fp_button__icon--login.fp_button__icon--logged .fp_icon--type-icon_person{display:none}.fp_button__icon:hover{opacity:1}.fp_button__icon--copy-btn .fp_icon--type-icon_check{display:none}.fp_button__icon--copy-btn-copied{background:transparent!important;border:2px solid #f2f2f0!important}.fp_button__icon--copy-btn-copied .fp_icon--type-icon_check{display:inline-block}.fp_button__icon--copy-btn-copied .fp_icon--type-icon_copy_outline{display:none}.fp_button__icon--with-tooltip:hover .icon-notification-tooltip{display:block}.fp_button__icon--with-tooltip .fp_icon{-webkit-animation-duration:2.5s;animation-duration:2.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-delay:1s;animation-delay:1s;-webkit-animation-name:animaNotify;animation-name:animaNotify;background-color:#ff1a1a;border-radius:50%}.fp_button__icon--with-tooltip .icon-notification-counter{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-radius:50%;bottom:0;color:#000;font-family:Lato,Helvetica,Arial,sans-serif;font-size:8px;height:10px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;right:0;width:10px;z-index:2}.fp_button__icon--with-tooltip .icon-notification-tooltip{-webkit-animation:bounceTooltip 3s ease-in-out 1s infinite;animation:bounceTooltip 3s ease-in-out 1s infinite;background-color:#ff1a1a;border-radius:4px;color:#fff;display:none;font-family:Lato,Helvetica,Arial,sans-serif;font-size:16px;left:0;letter-spacing:-.6px;padding:20px 30px;position:absolute;right:auto;top:54px;-webkit-transform:translateX(calc(-100% + 32px));transform:translateX(calc(-100% + 32px));width:auto;white-space:nowrap}.fp_button__icon--with-tooltip .icon-notification-tooltip:before{content:"";width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #ff1a1a;position:absolute;right:12px;top:-6px}.fp_button__icon--size-42x42{width:42px;height:42px}.fp_button__icon--size-46x46{width:46px;height:46px}.fp_button__icon--theme-red2{background-color:#ff1a1a}.fp_button__icon--theme-orange-bordered{background-color:#fff;border:1px solid #ff4900}.fp_button__icon--theme-orange-bordered-dark{background-color:#151515;border:1px solid #ff4900}.fp_button__icon--theme-dark-grey{background:#282828}.fp_button__icon--theme-dark-grey-2{background:#333}.fp_button__icon--theme-dark-grey-3{background:#999}.fp_button__icon--theme-green{background:#6ae500}.fp_button__icon--theme-green-2{background:#77bc3b}.fp_button__icon--theme-light-grey{background:#dcdcdc}.fp_button__icon--theme-light-grey:hover{background:#ccc}.fp_button__icon--theme-light-grey-2{background:#f4f4f4}.fp_button__icon--theme-light-grey-3{background:#f4f4f2}.fp_button__icon--theme-orange{background:#ff401d}.fp_button__icon--theme-orange:not(.fp_button__icon--copy-btn):hover svg,.fp_button__icon--theme-orange:not(.fp_button__icon--copy-btn):hover use{fill:#000!important}.fp_button__icon--theme-orange svg,.fp_button__icon--theme-orange use{-webkit-transition:fill .1s linear;transition:fill .1s linear}.fp_button__icon--theme-orange:hover{background:#ccc}.fp_button__icon--theme-x{background-color:#000}.fp_button__icon--theme-x .fp_icon path,.fp_button__icon--theme-x .fp_icon svg,.fp_button__icon--theme-x .fp_icon use{fill:#fff;stroke:none}.fp_button__icon--theme-x:hover{background:#333}.fp_button__icon--theme-twitter{background:#3cc5ef}.fp_button__icon--theme-twitter:hover{background:#2c9fea}.fp_button__icon--theme-facebook{background:#416dff}.fp_button__icon--theme-facebook:hover{background:#365cd9}.fp_button__icon--theme-telegram{background:#229ed9}.fp_button__icon--theme-telegram:hover{background:#1c81b0}.fp_button__icon--theme-skype{background:#00aef7}.fp_button__icon--theme-skype:hover{background:#009bde}.fp_button__icon--theme-linkedin{background:#117bb8}.fp_button__icon--theme-linkedin:hover{background:#015a82}.fp_button__icon--theme-pinterest{background:#cd2129}.fp_button__icon--theme-pinterest:hover{background:#a61b1f}.fp_button__icon--theme-whatsapp{background:#5dd008}.fp_button__icon--theme-whatsapp:hover{background:#51b807}.fp_button__icon--theme-tiktok{background:#f4f4f2}.fp_button__icon--theme-tiktok:hover{background:#ccc}.fp_button__icon--theme-youtube{background:red}.fp_button__icon--theme-youtube:hover{background:#d10000}.fp_button__icon--theme-light-orange{background:#ffce00}.fp_button__icon--theme-red{background:#dd3737}.fp_button__icon--theme-instagram{background:linear-gradient(45deg,#f40003 50%,#b90db2)}.fp_button__icon--theme-instagram:hover{background:linear-gradient(45deg,#b8075d 50%,#b8075d)}.fp_button__icon--brand-copy,.fp_button__icon--brand-follow{background:#ff401d}.fp_button__icon--brand-mail{background:#dcdcdc}.fp_button__icon--brand-twitter{background:#3cc5ef}.fp_button__icon--brand-x{background:#000}.fp_button__icon--brand-facebook{background:#416dff}.fp_button__icon--brand-skype{background:#00aef7}.fp_button__icon--brand-linkedin{background:#117bb8}.fp_button__icon--brand-pinterest{background:#cd2129}.fp_button__icon--brand-whatsapp{background:#5dd008}.fp_button__icon--brand-instagram{background:linear-gradient(45deg,#f40003 50%,#b90db2)}@-webkit-keyframes animaNotify{0%{-webkit-transform:scale(1);transform:scale(1)}5%{-webkit-transform:scale(1.05);transform:scale(1.05)}10%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(-6deg);transform:rotate(-6deg)}12%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(0);transform:rotate(0)}14%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(6deg);transform:rotate(6deg)}16%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(0);transform:rotate(0)}18%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(-6deg);transform:rotate(-6deg)}20%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animaNotify{0%{-webkit-transform:scale(1);transform:scale(1)}5%{-webkit-transform:scale(1.05);transform:scale(1.05)}10%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(-6deg);transform:rotate(-6deg)}12%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(0);transform:rotate(0)}14%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(6deg);transform:rotate(6deg)}16%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(0);transform:rotate(0)}18%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(-6deg);transform:rotate(-6deg)}20%{-webkit-transform:scale(1.05);transform:scale(1.05);-webkit-transform:rotate(0);transform:rotate(0)}25%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1);transform:scale(1)}}.fp_share{position:relative;overflow:hidden;padding:20px 0;background-color:#fff;z-index:99}@media(min-width:1024px){.fp_share{padding:15px 0}}.fp_share__content{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out}@media(min-width:768px){.fp_share__content{height:32px}}.fp_share--hide-counter .fp_share__counter{visibility:hidden}.fp_share--fixed-mode{position:fixed;display:none;z-index:100000;width:100%;-webkit-box-shadow:0 -3px 6px rgba(0,0,0,.2);box-shadow:0 -3px 6px rgba(0,0,0,.2);padding:12px 0}.fp_share--fixed-mode .fp_share__content{margin:0 10px}@media(min-width:768px)and (max-width:1023px){.fp_share--fixed-mode .fp_share__active-panel-content,.fp_share--fixed-mode .fp_share__content{position:relative;left:-2px}}@media(min-width:768px){.fp_share--fixed-mode .fp_share__active-panel-content,.fp_share--fixed-mode .fp_share__content{width:638px;margin:0 auto}.fp_share--fixed-mode .fp_share__active-panel-content{height:52px}}@media(min-width:1024px){.fp_share--fixed-mode{width:650px;-webkit-box-shadow:0 8px 8px -8px rgba(0,0,0,.25);box-shadow:0 8px 8px -8px rgba(0,0,0,.25)}.fp_share--fixed-mode .fp_share__active-panel-content,.fp_share--fixed-mode .fp_share__content{width:570px}}.fp_share--fixed-mode.fp_share--fixed-mode-active{bottom:0;display:block}@media(max-width:767px){.fp_share--fixed-mode.fp_share--fixed-mode-active{-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px 10px}}@media(min-width:1024px){.fp_share--fixed-mode.fp_share--fixed-mode-active{top:0;bottom:auto;bottom:initial}}.fp_share--fixed-mode.fp_share--fixed-mode-active.no-sticky{display:none}@media(max-width:1023px){.fp_share--fixed-mode.fp_share--hidden{display:none}}.fp_share--theme-light-grey{background-color:#f2f2f0}.fp_share--opened .fp_share__active-panel{opacity:1;visibility:visible}.fp_share--opened .fp_share__content{opacity:0}.fp_share--opened.fp_share--border-top .fp_share__active-panel{opacity:1;visibility:visible}@media(max-width:1023px){.fp_share--opened .js_close-panel{font-size:0}.fp_share--opened .js_close-panel .fp_icon{margin:0}}.fp_share__counter{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;letter-spacing:0;font-size:10px;font-weight:400;color:#666}.fp_share__counter,.fp_share__counter span{font-family:Lato,sans-serif;line-height:16px;text-transform:none;font-style:normal;-webkit-text-decoration:none;text-decoration:none}.fp_share__counter span{display:block;letter-spacing:-.01em;font-size:16px;font-weight:700;color:#ff401d}.fp_share__actions{width:237px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media(max-width:344px){.fp_share__actions{width:240px}}@media(max-width:359px){.fp_share__actions{width:155px}}@media(min-width:768px){.fp_share__actions{width:246px}}@media(max-width:359px){.fp_share__actions .js_scroll-to-comments span{display:none}}@media(max-width:359px){.fp_share__actions .js_scroll-to-comments .fp_icon{margin:0}}@media(max-width:359px){.fp_share__actions .js_scroll-to-comments{width:36px;height:36px;padding:0}}.fp_share__social-channels{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.fp_share__social-channels a{margin:0 5px 0 0}.fp_share__close-wrap .fp_button{color:#666;line-height:30px}.fp_share__close-wrap .fp_button g,.fp_share__close-wrap .fp_button path,.fp_share__close-wrap .fp_button svg{fill:#999}.fp_share__active-panel{width:100%;position:absolute;left:0;top:22px;opacity:0;visibility:hidden;-webkit-transition:all .2s ease-out;transition:all .2s ease-out}@media(min-width:768px){.fp_share__active-panel{top:20px}}@media(min-width:1024px){.fp_share__active-panel{top:15px}}@media(min-width:1024px){.fp_branded .fp_share__active-panel{top:20px}}.fp_share--fixed-mode-active .fp_share__active-panel{top:15px}@media(min-width:768px){.fp_share--fixed-mode-active .fp_share__active-panel{top:0}}.fp_branded-page .fp_share__active-panel{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;top:0;height:100%}.fp_share__active-panel-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0}@media(min-width:1024px){.fp_branded .fp_share__active-panel-content{background-color:#fff;margin-left:auto}}@media(max-width:767px){.fp_branded .fp_share__active-panel-content{width:calc(100% - 40px)}}@media(max-width:359px){.fp_share__active-panel-content{max-width:calc(100% - 42px);overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}.fp_share__active-panel-content::-webkit-scrollbar{display:none}}@media(min-width:768px){.fp_branded-page .fp_share__active-panel-content{width:638px}}@media(min-width:1024px){.fp_branded-page .fp_share__active-panel-content{max-width:none;width:100%}}@media(max-width:359px){.fp_share .fp_share__close-wrap{position:absolute;right:0}}.fp_share--border-top{border-top:1px solid #e1e1dd}.fp_share--border-bottom{border-bottom:1px solid #e1e1dd}.fp_share--branded{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.fp_share--branded .fp_share__actions{width:auto}.fp_share--branded .fp_share__social-channels{margin-right:15px}@media(min-width:768px){.fp_share--branded .fp_share__social-channels{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}}.fp_share--branded .fp_share__active-panel-content{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}@media(min-width:768px){.fp_share--branded .fp_share__active-panel-content{width:638px}}@media(min-width:1024px){.fp_share--branded .fp_share__active-panel-content{width:100%}}.fp_share--branded.fp_share--opened .fp_share__active-panel-content{width:100%}@media(max-width:767px){.fp_share--branded.fp_share--opened .fp_share__active-panel-content{width:calc(100% - 40px)}}@media(min-width:768px){.fp_share--branded.fp_share--opened .fp_share__active-panel-content{background-color:transparent}}@media(min-width:768px){.fp_share--branded .fp_share__active-panel{background-color:transparent;left:auto;right:0;width:auto}}.fp_share__logo img{width:100%}.fp_share__logo-no-sticky,.fp_share__logo-sticky{height:32px;width:140px}@media(min-width:768px){.fp_share__logo-no-sticky{height:42px;width:183px}}@media(min-width:1024px){.fp_single-article__head .fp_share{padding:20px 0}}.fp_election-widget{background-color:#f2f2f2;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto 20px;max-width:990px;overflow:hidden}@media(min-width:1024px){.fp_election-widget{padding:20px}}.single .fp_election-widget{margin-bottom:20px}.fp_election-widget .fp_button--show-more-big{letter-spacing:-.03em;padding-left:17px;padding-right:17px}@media(min-width:768px){.fp_single-article__widget-election .fp_election-widget{padding:20px 25px}}@media(min-width:1024px){.fp_single-article__widget-election .fp_election-widget{padding:20px 15px}}.fp_election-widget--story{margin:0 auto 30px}@media(min-width:1024px){.fp_election-widget--story{margin:0 auto 40px}}.fp_election-widget--referendum,.fp_election-widget--story{border-radius:0;padding:30px 10px}@media(min-width:360px){.fp_election-widget--referendum,.fp_election-widget--story{padding:30px 20px}}@media(min-width:768px){.fp_election-widget--referendum,.fp_election-widget--story{padding:30px 25px}}@media(min-width:1024px){.fp_election-widget--referendum,.fp_election-widget--story{padding:40px}}.fp_election-widget__head{margin-bottom:20px;padding:20px 10px 15px;position:relative}@media(min-width:360px){.fp_election-widget__head{padding:20px 20px 15px}}@media(min-width:1024px){.fp_election-widget__head{padding:0 0 15px}}.fp_election-widget__head:after{background-color:hsla(0,0%,40%,.2);content:"";display:block;height:1px;-webkit-transform:translateY(15px);transform:translateY(15px);width:100%}.fp_election-widget--sidebar .fp_election-widget__head:after{-webkit-transform:translateY(25px);transform:translateY(25px)}.fp_election-widget__head .fp_button{height:26px;position:absolute;right:10px;bottom:15px}@media(min-width:360px){.fp_election-widget__head .fp_button{right:20px}}@media(min-width:1024px){.fp_election-widget__head .fp_button{bottom:auto;right:0;top:0}}.fp_election-widget--referendum .fp_election-widget__head,.fp_election-widget--story .fp_election-widget__head{background-color:#fff;border:0;border-radius:12px 12px 0 0;margin-bottom:0;padding:25px 10px 0}@media(min-width:360px){.fp_election-widget--referendum .fp_election-widget__head,.fp_election-widget--story .fp_election-widget__head{padding:25px 20px 0}}@media(min-width:1024px){.fp_election-widget--referendum .fp_election-widget__head,.fp_election-widget--story .fp_election-widget__head{padding:25px 25px 0}}.fp_election-widget--referendum .fp_election-widget__head:after,.fp_election-widget--story .fp_election-widget__head:after{background-color:hsla(0,0%,40%,.2);content:"";display:block;height:1px;margin-top:20px;-webkit-transform:translateY(0);transform:translateY(0);width:100%}.fp_election-widget--sidebar .fp_election-widget__head{padding:30px 0 25px}.fp_election-widget__title{color:#000;display:inline-block;font-family:Tolyer,sans-serif;font-size:32px;line-height:1;letter-spacing:-.05em;-webkit-text-decoration:none;text-decoration:none;margin-bottom:20px}.fp_election-widget__tabs-container{max-width:calc(100% - 140px);overflow:hidden;position:relative}@media(max-width:767px){.fp_election-widget--referendum .fp_election-widget__tabs-container,.fp_election-widget--story .fp_election-widget__tabs-container{max-width:none}}.fp_election-widget--sidebar .fp_election-widget__tabs-container{max-width:none}.fp_election-widget__tabs{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-overflow-style:none;scrollbar-width:none;overflow-x:scroll}.fp_election-widget__tabs::-webkit-scrollbar{display:none}.fp_election-widget__tabs--with-controls{overflow:hidden}.fp_election-widget__tab{color:#000;cursor:pointer;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;font-family:Lato,sans-serif;font-size:16px;line-height:22px;letter-spacing:-.03em;margin-right:20px;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;overflow:hidden;padding-bottom:3px;position:relative;top:3px;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}.fp_election-widget__tab:after{background-color:#ff4900;bottom:0;content:"";left:0;height:3px;position:absolute;-webkit-transform:translateY(3px);transform:translateY(3px);-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;width:100%}.fp_election-widget--sidebar .fp_election-widget__tab{color:#999}.fp_election-widget__tab--active{-webkit-transform:translateY(0);transform:translateY(0);top:0}.fp_election-widget__tab--active:after{-webkit-transform:translateY(0);transform:translateY(0)}.fp_election-widget--sidebar .fp_election-widget__tab--active{color:#000}.fp_election-widget__tab:last-child{margin-right:0}.fp_election-widget__tabs-control{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:-webkit-gradient(linear,right top, left top,from(#f2f2f2),color-stop(20%, #f2f2f2),color-stop(40%, #f2f2f2),color-stop(60%, hsla(0,0%,94.9%,.9)),color-stop(90%, hsla(0,0%,94.9%,.8)),to(hsla(0,0%,94.9%,0)));background:linear-gradient(-90deg,#f2f2f2,#f2f2f2 20%,#f2f2f2 40%,hsla(0,0%,94.9%,.9) 60%,hsla(0,0%,94.9%,.8) 90%,hsla(0,0%,94.9%,0));cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;height:32px;left:0;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;top:-5px;width:42px}.fp_election-widget__tabs-control--next{display:-webkit-box;display:-ms-flexbox;display:flex;left:auto;right:0}.end .fp_election-widget__tabs-control--next{display:none}.fp_election-widget__tabs-control--prev{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.start .fp_election-widget__tabs-control--prev{display:none}.fp_election-widget__tabs-control>*{pointer-events:none}.fp_election-widget--sidebar .fp_election-widget__tabs-control{top:-3px}.fp_election-widget__tab-content{overflow:hidden;position:relative}.fp_election-widget--story .fp_election-widget__tab-content{background-color:#fff;padding:20px 20px 10px}@media(min-width:1024px){.fp_election-widget--story .fp_election-widget__tab-content{padding:20px 25px}}.fp_election-widget--referendum .fp_election-widget__tab-content{background-color:#fff;padding:20px 20px 25px}@media(min-width:1024px){.fp_election-widget--referendum .fp_election-widget__tab-content{padding:20px 25px}}.fp_election-widget__card-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:0;opacity:0;overflow:hidden;-webkit-transition:all .35s ease-in-out .05s, height .1s linear;transition:all .35s ease-in-out .05s, height .1s linear;visibility:hidden;width:100%}.fp_election-widget__card-list--selected{height:auto;opacity:1;visibility:visible;-webkit-transition:all .35s ease-in-out .05s, height .1s linear;transition:all .35s ease-in-out .05s, height .1s linear}.fp_election-widget--referendum .fp_election-widget__card-list,.fp_election-widget--sidebar .fp_election-widget__card-list,.fp_election-widget--story .fp_election-widget__card-list{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.fp_election-widget__card-list-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-overflow-style:none;margin-bottom:20px;overflow-x:scroll;scrollbar-width:none;-ms-flex-wrap:wrap;flex-wrap:wrap}.fp_election-widget--home .fp_election-widget__card-list-inner{padding:0 20px}@media(min-width:1024px){.fp_election-widget--home .fp_election-widget__card-list-inner{padding:0}}.fp_election-widget--scrollable .fp_election-widget__card-list-inner{-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow-x:scroll}@media(min-width:1024px){.fp_election-widget__card-list-inner{overflow-x:hidden}}.fp_election-widget__card-list-inner::-webkit-scrollbar{display:none}.fp_election-widget__card-list-inner:before{content:"";height:100%;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;max-width:10px;min-width:10px}@media(min-width:360px){.fp_election-widget__card-list-inner:before{max-width:20px;min-width:20px}}@media(min-width:1024px){.fp_election-widget__card-list-inner:before{display:none}}.fp_election-widget__card-list-inner:after{content:"";height:100%;position:absolute;pointer-events:none;right:0;top:0;width:60px}@media(min-width:1024px){.fp_election-widget__card-list-inner:after{display:none}}.fp_election-widget--scrollable .fp_election-widget__card-list-inner:after{background:#f2f2f2;background:-webkit-gradient(linear,right top, left top,from(#f2f2f2),to(hsla(0,0%,94.9%,.05)));background:linear-gradient(-90deg,#f2f2f2,hsla(0,0%,94.9%,.05))}.fp_election-widget__card-list-inner .fp_election-widget__card{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}.fp_election-widget--referendum .fp_election-widget__card-list-inner,.fp_election-widget--story .fp_election-widget__card-list-inner{margin-bottom:0}.fp_election-widget--referendum .fp_election-widget__card-list-inner:before,.fp_election-widget--story .fp_election-widget__card-list-inner:before{display:none}.fp_election-widget--referendum .fp_election-widget__card-list-inner{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}@media(min-width:1024px){.fp_election-widget--referendum .fp_election-widget__card-list-inner{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.fp_election-widget--referendum .fp_election-widget__card-list-inner:after{display:none}.fp_election-widget__card-list--expandable .fp_election-widget__card-list-inner{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media(min-width:1024px){.fp_election-widget__card-list--expandable .fp_election-widget__card-list-inner{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}}.fp_election-widget__card-list--expandable .fp_election-widget__card-list-inner:after{display:none}.fp_election-widget--sidebar .fp_election-widget__card-list-inner{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media(min-width:1024px){.fp_election-widget--sidebar .fp_election-widget__card-list-inner{overflow-x:scroll}}.fp_election-widget--sidebar .fp_election-widget__card-list-inner:after{content:"";display:none}.fp_election-widget--sidebar .fp_election-widget__card-list-inner{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.fp_election-widget--scrollable .fp_election-widget__card-list-inner:before{display:none}.fp_election-widget__card{background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #e0e0e0;box-shadow:inset 0 0 0 1px #e0e0e0;border-radius:5px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:10px;padding:15px;width:100%}@media(min-width:1024px){.fp_election-widget__card{margin-bottom:10px;margin-right:20px;max-width:200px;min-width:200px}.fp_election-widget__card:nth-child(4n){margin-right:0}.fp_election-widget__card:nth-child(n+5){margin-top:20px}.fp_election-widget--sidebar .fp_election-widget__card{max-width:none;min-width:0;min-width:initial}}.fp_election-widget__card:not(div.fp_election-widget__card--expandable) .fp_election-widget__card-content-percentage{color:#000;letter-spacing:-.04em;margin-left:auto}.fp_election-widget__card:not(div.fp_election-widget__card--expandable):last-child{margin-right:20px}@media(min-width:1024px){.fp_election-widget__card:not(div.fp_election-widget__card--expandable):last-child{margin-right:0}}.fp_election-widget--scrollable .fp_election-widget__card{margin-bottom:0;margin-right:10px;min-width:140px;max-width:140px;padding:10px 10px 15px}@media(min-width:1024px){.fp_election-widget--scrollable .fp_election-widget__card{margin-right:14px;min-width:150px;max-width:150px}}.fp_election-widget--scrollable .fp_election-widget__card:nth-child(4n){margin-right:20px}.fp_election-widget--scrollable .fp_election-widget__card:nth-child(n+5){margin-top:0}.fp_election-widget--scrollable .fp_election-widget__card:nth-child(n+7){display:block}.fp_election-widget--scrollable.fp_election-widget--sidebar .fp_election-widget__card{min-width:200px;max-width:200px}.fp_election-widget__card--evidence{-webkit-box-shadow:inset 0 0 0 2px #fb4900;box-shadow:inset 0 0 0 2px #fb4900}.fp_election-widget__card--referendum:not(div.fp_election-widget__card--expandable){margin-right:0;max-width:none;min-width:0;min-width:initial}@media(min-width:1024px){.fp_election-widget__card--referendum:not(div.fp_election-widget__card--expandable){max-width:calc(50% - 10px);min-width:calc(50% - 10px)}}.fp_election-widget__card--referendum:not(div.fp_election-widget__card--expandable):first-child{margin-bottom:10px}@media(min-width:1024px){.fp_election-widget__card--referendum:not(div.fp_election-widget__card--expandable):first-child{margin-bottom:0;margin-right:10px}}.fp_election-widget__card--sidebar.fp_election-widget__card--expandable{margin-right:0}.fp_election-widget__card--sidebar.fp_election-widget__card--expandable:last-child{margin:0}@media(max-width:1023px){.fp_election-widget__card.is-overflow:nth-child(n+5){display:none}}@media(min-width:1024px){.fp_election-widget__card.is-overflow:nth-child(n+5){display:none}}.fp_election-widget__card:last-child{margin-right:0}.fp_election-widget__card-icon{opacity:.15;position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out}@media(min-width:1024px){.fp_election-widget__card-icon{display:none}}.fp_election-widget__card--expandable.is-opened .fp_election-widget__card-icon{-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg)}.fp_election-widget__card-summary{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:100px;position:relative}@media(max-width:1023px){.fp_election-widget--story .fp_election-widget__card-summary{min-height:auto}}.fp_election-widget__card--expandable.is-opened .fp_election-widget__card-summary{margin-bottom:15px}@media(min-width:768px){.fp_election-widget__card--expandable.is-opened .fp_election-widget__card-summary{margin-bottom:20px}}.fp_election-widget__card--with-avatar .fp_election-widget__card-summary,.fp_election-widget__card-summary .fp_election-widget__card--referendum{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;min-height:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.fp_election-widget__card-summary>*{pointer-events:none}.fp_election-widget__card-summary img{margin-right:15px}.fp_election-widget__card-name{letter-spacing:0;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:14px;font-weight:700;color:#000;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;letter-spacing:-.02em;margin-bottom:15px}@media(min-width:768px){.fp_election-widget__card-name{font-size:12px;line-height:14px;letter-spacing:0;font-family:Helvetica,Arial,sans-serif}}@media(min-width:1024px){.fp_election-widget__card-name{font-size:14px;line-height:20px;font-family:Helvetica,Arial,sans-serif}}.fp_election-widget__card--expandable .fp_election-widget__card-name{font-size:14px;line-height:20px}@media(min-width:1024px){.fp_election-widget__card--expandable .fp_election-widget__card-name{font-size:16px;line-height:20px;max-width:none}}.fp_election-widget__card--with-avatar .fp_election-widget__card-name{margin-bottom:0;font-weight:700;text-transform:capitalize;word-break:break-all}.fp_election-widget__card-avatar{border-radius:50%;height:60px;overflow:hidden;margin-right:10px;max-width:60px;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}@media(min-width:768px){.fp_election-widget__card-avatar{margin-right:15px}}.fp_election-widget__card-avatar img{-o-object-fit:contain;object-fit:contain;max-width:100%}.fp_election-widget--sidebar .fp_election-widget__card-avatar{-webkit-box-flex:1;-ms-flex:1 0 60px;flex:1 0 60px}.fp_election-widget__card-percentage{letter-spacing:-.01em;font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:16px;font-weight:700;color:#fb4900;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;letter-spacing:-.02em}@media(min-width:768px){.fp_election-widget__card-percentage{font-size:16px;line-height:16px;letter-spacing:-.01em;font-family:Helvetica,Arial,sans-serif}}@media(min-width:1024px){.fp_election-widget__card-percentage{font-size:16px;line-height:16px;letter-spacing:-.01em;font-family:Helvetica,Arial,sans-serif}}.fp_election-widget__card--evidence .fp_election-widget__card-percentage{font-size:20px;line-height:20px}.fp_election-widget__card--expandable .fp_election-widget__card-percentage{font-size:18px;line-height:18px}.fp_election-widget__card--expandable.fp_election-widget__card--evidence .fp_election-widget__card-percentage{font-size:26px;line-height:26px}.fp_election-widget__card-percentage+span{display:block;margin-top:5px}.fp_election-widget__card--with-avatar .fp_election-widget__card-percentage{margin-bottom:5px}.fp_election-widget__card-info{font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:14px;font-weight:400;color:#000;-webkit-text-decoration:none;text-decoration:none;letter-spacing:-.02em}@media(min-width:768px){.fp_election-widget__card-info{font-size:14px;line-height:14px;font-family:Helvetica,Arial,sans-serif}}@media(min-width:1024px){.fp_election-widget__card-info{font-size:14px;line-height:14px;font-family:Helvetica,Arial,sans-serif}}.fp_election-widget__card--with-avatar .fp_election-widget__card-info{font-weight:700}.fp_election-widget__card-content{-webkit-box-shadow:inset 0 1px 0 0 #eee;box-shadow:inset 0 1px 0 0 #eee;margin-top:15px;padding-top:15px}@media(max-width:1023px){.fp_election-widget__card--expandable .fp_election-widget__card-content{border:0;margin-top:0;padding-top:0;height:0;opacity:0;overflow:hidden;visibility:hidden;-webkit-transition:all .25s ease-in-out .05s, height .2s ease-in-out;transition:all .25s ease-in-out .05s, height .2s ease-in-out}}.fp_election-widget__card--expandable.is-opened .fp_election-widget__card-content{-webkit-box-shadow:inset 0 1px 0 0 #eee;box-shadow:inset 0 1px 0 0 #eee;padding-top:15px}@media(min-width:768px){.fp_election-widget__card--expandable.is-opened .fp_election-widget__card-content{padding-top:20px}}@media(max-width:1023px){.fp_election-widget__card--expandable.is-opened .fp_election-widget__card-content{-webkit-box-shadow:inset 0 1px 0 0 #eee;box-shadow:inset 0 1px 0 0 #eee;margin-top:15px;height:auto;opacity:1;overflow:visible;padding-top:15px;visibility:visible}}.fp_election-widget__card-content-row{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:10px}.fp_election-widget__card-content-row:last-child{margin-bottom:0}.fp_election-widget__card-content-logo{border-radius:50%;margin-right:10px;height:26px;-o-object-fit:cover;object-fit:cover;width:26px}.fp_election-widget__card-content-name{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;letter-spacing:0;font-family:Helvetica,Arial,sans-serif;font-size:10px;line-height:12px;font-weight:400;color:#666;-webkit-text-decoration:none;text-decoration:none;letter-spacing:-.04em;word-break:break-all}@media(min-width:768px){.fp_election-widget__card-content-name{font-size:10px;line-height:12px;letter-spacing:0;font-family:Helvetica,Arial,sans-serif}}@media(min-width:1024px){.fp_election-widget__card-content-name{font-size:10px;line-height:12px;letter-spacing:0;font-family:Helvetica,Arial,sans-serif}}.fp_election-widget__card-content-percentage{color:#fb4900;font-family:Helvetica,Arial,sans-serif;font-size:10px;letter-spacing:-.02em;line-height:1;margin-left:10px;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.fp_election-widget__credit-info{padding:0 10px 20px}@media(min-width:360px){.fp_election-widget__credit-info{padding:0 20px 20px}}@media(min-width:768px){.fp_election-widget__credit-info{display:-webkit-box;display:-ms-flexbox;display:flex}}@media(min-width:1024px){.fp_election-widget__credit-info{padding:0}}@media(min-width:768px){.fp_election-widget__credit-info .fp_election-widget__credit{margin-bottom:0}}.fp_election-widget__credit-info .fp_election-widget__update{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}@media(min-width:768px){.fp_election-widget__credit-info .fp_election-widget__update:before{background-color:#000;border-radius:50%;content:"";height:4px;margin:0 10px;width:4px}}.fp_election-widget--sidebar .fp_election-widget__credit-info .fp_election-widget__update:before{display:none}.fp_election-widget--referendum .fp_election-widget__credit-info,.fp_election-widget--story .fp_election-widget__credit-info{margin-bottom:20px;padding:0}.fp_election-widget--sidebar .fp_election-widget__credit-info{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0 0 20px}.fp_election-widget__credit{font-family:Helvetica,Arial,sans-serif;font-size:12px;font-style:italic;line-height:14px;margin-bottom:10px}.fp_election-widget--sidebar .fp_election-widget__credit{margin-bottom:0}.fp_election-widget__update{font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:14px}.fp_election-widget__update span{margin-left:4px;font-weight:700}.fp_election-widget__show-more{border-top:1px solid #eee;display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:20px}@media(max-width:767px){.fp_election-widget__show-more{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.fp_election-widget--referendum .fp_election-widget__show-more,.fp_election-widget--story .fp_election-widget__show-more{background-color:#fff;border:0;border-radius:0 0 12px 12px;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 20px 20px}@media(min-width:1024px){.fp_election-widget--referendum .fp_election-widget__show-more,.fp_election-widget--story .fp_election-widget__show-more{padding:0 25px 20px}}.fp_election-widget--referendum .fp_election-widget__show-more:before,.fp_election-widget--story .fp_election-widget__show-more:before{background-color:#eee;content:"";display:block;height:1px;margin-bottom:20px;width:100%}.fp_election-widget--sidebar .fp_election-widget__show-more{border-color:#ccc;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.fp_election-widget--sidebar{padding-left:20px;padding-right:20px;padding-bottom:30px}
</style><link href="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/css/wordpress/fanpage/deferred/fanpage-article.css" rel="preload" as="style" onload="this.rel='stylesheet'"/><link rel="shortcut icon" href="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/img/wordpress/favicon/extra/news/favicon-96x96.png" />
<link rel="icon" type="image/png" href="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/img/wordpress/favicon/extra/news/favicon-96x96.png" sizes="96x96" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/img/wordpress/favicon/extra/news/apple-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/img/wordpress/favicon/extra/news/apple-icon-180x180.png" />
<meta name="application-name" content="Fanpage"/>
<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/img/wordpress/favicon/extra/news/ms-icon-144x144.png" />
<meta name="msapplication-square70x70logo" content="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/img/wordpress/favicon/extra/news/ms-icon-70x70.png" />
<meta name="msapplication-square150x150logo" content="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/img/wordpress/favicon/extra/news/ms-icon-150x150.png" />
<meta name="msapplication-square310x310logo" content="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/img/wordpress/favicon/extra/news/ms-icon-310x310.png" />
<script type="text/javascript">
    Fanpage = window.Fanpage || {};

    Fanpage.Config = {
        STATIC_URL: "https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2",
        API_USER_URL: "https://api.fanpage.it/user/",
        WSLIVE_URL: "//wslive.fanpage.it",
        SDK_SRC: "https://d2kujwgapv5t1y.cloudfront.net/static/1705320158/v7/fanpage-autoloader-prod.js",
        NAME_FANPAGE: "socialmedia",
        AREA_FANPAGE: "news",
        SITE_URL: "https://www.fanpage.it",
        FACEBOOK_PAGE: "https://www.facebook.com/pages/fanpageit/169992733022409",
        COOKIE_DOMAIN: ".fanpage.it",
        LOCALE: 'it_IT',
        FB: { appId: "1080631611998596", version: 'v4.0', autoLogAppEvents: true },
        LOG: 0,
        DEBUG: false,
        UTILITIES: {
          customAutopromo : {
            enable : true,
            link: 'https://fanpa.ge/YAh9M'
          }
        },
                GA4: {
          properties: 'G-QE4WQDQJ7S',
          trackQC: true,
          trackInternalLinks: true
        },        
                QC: {
            amzUrlPrefix: "https://amz.fanpage.it",            ebayUrlPrefix: "https://www.ebay.it",            subtagParamName: "ascsubtag",
            tagParamName: "tag"        }
    };

    Fanpage.TemplateInfo = {"template":"articolo_standard","info":{"authorName":"Biagio Chiariello","publishDate":"20240122","nParag":8,"videoType":"fanplayer","recirculation_widget":"taboola"}};
    
    Fanpage.Story = Fanpage.Story || {};
    Fanpage.Story.is_story = '';

    Fanpage.Post = Fanpage.Post || { };
    
    
        
     
      Fanpage.Post.is_post = true;
      Fanpage.Post.ID = "2012938";
      Fanpage.Post.permalink = "https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/";
      Fanpage.Post.title = "Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social";
      Fanpage.Post.is_general = false;
      Fanpage.Post.is_editoriale = false;
      Fanpage.Post.is_rubrica = false;
      Fanpage.Post.is_native = false;
      Fanpage.Post.is_native_plus = false;
      Fanpage.Post.is_hot = false;
      Fanpage.Post.is_live = false;
      Fanpage.Post.has_story_associated = false;

      Fanpage.Post.has_twitter = false;
      Fanpage.Post.has_instagram = false;

      
      
      
              Fanpage.SuggestedFollows = [{"url":"https:\/\/www.fanpage.it\/attualita\/","label":"Attualit\u00e0","kind":"category"}]          
    Fanpage.Live = Fanpage.Live || {};
    
    Fanpage.Home = Fanpage.Home || {};
    
    Fanpage.Search = Fanpage.Search || {};
    
    Fanpage.Category = Fanpage.Category || {};
    </script>
<meta property="al:android:package" content="com.ciaopeople.fanpage" />
<meta property="al:android:app_name" content="Fanpage" />
<meta property="al:android:url" content="fanpage://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" />
<link rel="alternate" href="android-app://com.ciaopeople.fanpage/fanpage/www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" />

<script type="text/javascript">
  window._fpcmp.push(function(gdpr){
    (function() {
      /** CONFIGURATION START **/
      var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
      _sf_async_config.uid = 66110;
      _sf_async_config.domain = 'fanpage.it';
      _sf_async_config.flickerControl = false;
      _sf_async_config.useCanonical = true;
      _sf_async_config.useCanonicalDomain = true;
      _sf_async_config.sections = 'news';
      _sf_async_config.authors = "Biagio Chiariello";
      /** CONFIGURATION END **/
      function loadChartbeat() {
        var e = document.createElement('script');
        var n = document.getElementsByTagName('script')[0];
        e.type = 'text/javascript';
        e.defer = true;
        e.src = '//static.chartbeat.com/js/chartbeat.js';;
        n.parentNode.insertBefore(e, n);
      }
      loadChartbeat();
    })();
  })
  window._fpcmp.push(function(gdpr){
      var e = document.createElement('script');
      var n = document.getElementsByTagName('script')[0];
      e.type = 'text/javascript';
      e.defer = true;
      e.src = '//static.chartbeat.com/js/chartbeat_mab.js';;
      n.parentNode.insertBefore(e, n);
  })

</script>
<script type="text/javascript">

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

/**
  * Interface for vendors.
  *
  * @interface Vendor
  *
  * @property {string} id
  *
  * @function
  * @name Vendor#loadSlots
  * @param {Object[]} slots
  * @param {function} callback
  */
  
  window.HbWrapper = {
    /**
     * @property {Vendor[]}
    */
    vendors: [],
    bidden: 0,

    log: function()
    {
      var data = ["[HBW]"].concat(Array.prototype.slice.call(arguments));
      return typeof console !== "undefined" && console !== null ? console.log.apply(console,data) : void 0;
    },

    addVendor: function(vendor)
    {
      //TODO: duck test  
      this.vendors.push(vendor);
      this.log('Added ' + vendor.id + ' vendor');
    },

    vendorBidden: function(vendorId, slotsToRefresh)
    {
      this.log('End bids request for ' + vendorId);
      this.bidden++;
      if(this.vendors.length === this.bidden) {
        this.log('All bids request done, calling refresh');
        this.callRefresh(slotsToRefresh);
        this.bidden = 0;
      }
    },

    callRefresh: function(slotsToRefresh)
    {
      slotsToRefresh = slotsToRefresh || null;
      googletag.cmd.push(function ()
      {
        googletag.pubads().refresh(slotsToRefresh);
      });
    },

    /**
    * @param {Array} slots
    */
    loadSlots: function(slots)
    {
      if(this.vendors.length === 0) {
        this.log('No vendors added, calling refresh');
        this.callRefresh(slots);
        return;
      }

      var self = this;
      for(var i in this.vendors) {
        var vendor = this.vendors[i];
        this.log('Start bids request for ' + vendor.id);
        vendor.loadSlots(slots, function() 
        {
          self.vendorBidden(vendor.id, slots);
        });
      }
    }
  };
</script>
<link rel="preconnect" href="https://c.amazon-adsystem.com" crossorigin>
<script async src="https://c.amazon-adsystem.com/aax2/apstag.js"></script>
<script type="text/javascript">

window._fpcmp.push(function(gdprsdk)
{
  (function(gdprsdk,enab,pubId,btimeout)
  {
    var debugEnabled = window && window._fp_a9_debug === true;
    var exportGlobal = true;

    function log() {
      var data = ["[FPA9]"].concat(Array.prototype.slice.call(arguments));
      return typeof console !== "undefined" && console !== null ? console.log.apply(console,data) : void 0;

    }
    function debug() {
      if(debugEnabled) {
        var data = ["[FPA9]"].concat(Array.prototype.slice.call(arguments));
        return typeof console !== "undefined" && console !== null ? console.debug.apply(console,data) : void 0;
      }
    }

    function S4() {
      return Math.floor(Math.random() * 0x10000 /* 65536 */).toString(16);
    }

    function GUID() {
      return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
    }

    function FPA9(enabled,publisherId,bidTimeout) {
      this.id = 'A9';
      this.enabled = enabled;
      this.bidTimeout = bidTimeout;
      this.videoBid = false;
      this.loadingVideoBid = false;
      this.excludeFromBid = [
        '/1010633/overlayer',
        '/1010633/skin',
        '/1010633/skin_youmedia',
        '/1010633/youmedia_overlayer',
        '/1010633/ck_leg_overlayer',
        '/1010633/cookist_overlayer',
        '/1010633/cookist_skin',
        '/1010633/ck_skin',
        '/1010633/cookist_leg_skin',
        '/1010633/ck_overlayer',
        '/1010633/Ohga_display/ohga_overlayer',
        '/1010633/Ohga_display/ohga_skin',
        '/1010633/ck_it_overlayer',
        '/1010633/ck_it_skin',
        '/1010633/cookist_it_skin',
        '/1010633/cookist_it_overlayer',
        '/1010633/geopop_skin',
        '/1010633/geopop_overlayer',
        '/1010633/wamily_skin',
        '/1010633/wamily_overlayer',
        '/1010633/lexplain_skin',
        '/1010633/lexplain_overlayer',
        '/1010633/fp_QCintro',
        '/1010633/fp_QCclassifica'
      ];
      if(exportGlobal) {
        //variabili per il riutilizzo delle bid video
        //richieste in pagina prima dell'inizializzazione
        //del player - per guadagnare tempo
        log("Exporting Global Variables");
        window._fp_amz_scp = null;
        window._fp_amz_enabled = this.enabled;
        window._fp_amz_page_load = this.enabled;
      }
      if(enabled) {
        log("Loading APSTAG");
        ! function(a9, a, p, s, t, A, g) {
            if (a[a9]) return;

            function q(c, r) {
                a[a9]._Q.push([c, r])
            }
            a[a9] = {
                init: function() {
                    q("i", arguments)
                },
                fetchBids: function() {
                    q("f", arguments)
                },
                setDisplayBids: function() {},
                targetingKeys: function() {
                    return []
                },
                dpa: function() {
                    q("di", arguments)
                },
                rpa: function() {
                    q("ri", arguments)
                },
                upa: function() {
                    q("ui", arguments)
                },
                _Q: []
            };
        }("apstag", window);
        apstag.init({
          pubID: publisherId,
          adServer: 'googletag',
          videoAdServer: 'DFP',
          bidTimeout: bidTimeout,
          deals: true // required for deals
        });
        var apat = document.cookie.split(';').filter(function(el, idx){return el.indexOf('apat') > -1}).map(function(el, idx){return el.trim().split('=')})
        if (apat.length > 0 && apat[0].length === 2) {
            log("Setting Amazon Publisher Audiences token", apat[0][1]);
            apstag.rpa({
                hashedRecords: [{type:"email", record:apat[0][1]}],
                optOut: !gdprsdk.amazon.allowPersonalizedAds()
            }, function () {
                log("Apstag renew token loded")
            })
        }
      } else {
        log("Not Enabled");
      }
    }

    FPA9.prototype.loadSlots = function(slotsToRefresh,callback)
    {
      var fetchSlots = this.prepareSlots(slotsToRefresh);
      log("Load called for", fetchSlots);
      var safeState = false;
      var gptRefreshCalled = false;
      var self = this;
      var gid = GUID();
      var slots = {
        slots: fetchSlots.filter(function (slot) { return !slot.slotName || (this.excludeFromBid.indexOf(slot.slotName) === -1) }, this)
      };
      self.loadingVideoBid = fetchSlots.filter(function (bid)
      {
        return bid.mediaType === 'video'
      }).length > 0;

      var callRefresh = function() {
        if (gptRefreshCalled) {
          log("Refresh Already Called",gid);
        }
        else {
          gptRefreshCalled = true;
          debug('Enqueue refresh', gid);
          log("Calling Refresh",gid,"Refreshing " + (slotsToRefresh && slotsToRefresh.length > 0?slotsToRefresh.length:"all") + " slots");
          callback();
        }
      };

      // check enabled
      if(!this.enabled) {
        callRefresh();
        return;
      }

      // check slots
      if(slots.slots.length === 0) {
        log("No Bids To Ask");
        callRefresh();
        return;
      }

      log("Asked Display Bids", gid, slots.slots);

      apstag.fetchBids(slots, function (bids) {
        log("Received bids",gid,bids,arguments);

        if(bids && bids.length > 0) {

          if(self.loadingVideoBid) {
            var videoBid = bids.filter(function (bid) {
              return bid.mediaType === 'video'
            })[0];
            if (videoBid) {
              var encodedQsParams = videoBid.encodedQsParams || (videoBid.helpers && videoBid.helpers.encodedQsParams && videoBid.helpers.encodedQsParams());
              log("encodedQS", gid, encodedQsParams, videoBid);
              self.videoBid = encodedQsParams
              if(exportGlobal) window._fp_amz_scp = encodedQsParams;
            }
            else {
              log("No Video BID",gid);
              self.videoBid = "_fp_invalid";
              if(exportGlobal) window._fp_amz_scp = "_fp_invalid";
            }
          }

        }
        else log("no bids received",gid);
        self.loadingVideoBid = false;
        if(exportGlobal) window._fp_amz_page_load = false;
        log("Displaying bids",gid)
        apstag.setDisplayBids();
        if(safeState)  {
          debug("clearing safe state",gid);
          window.clearTimeout(safeState);
          safeState = false;
        }
        else {
          log("state was already cleared ... lost bids",gid);
        }
        callRefresh();
      });
      safeState = window.setTimeout(function() {
        log("Manual Clean by Timeout [SafeState]",gid);
        safeState = false;
        self.loadingVideoBid = false;
        if(exportGlobal) window._fp_amz_page_load = false;
        callRefresh();
      },this.bidTimeout + 1);
    };

    FPA9.prototype.prepareSlots = function(slots)
    {
      // esclusione slots che hanno "fluid" come unica dimensione 
      slots = slots.filter(function(slot) {

        if(slot === 'video') {
          return true;
        }

        var sizes = slot.getSizes();
        return sizes.length > 1 || (sizes[0].getWidth && sizes[0].getHeight);
      });

      // formattazione
      a9Slots = slots.map(function(slot)
      {
        // slot video
        if(slot === 'video') {
          return {
            'slotID'    : 'video',
            'mediaType' : 'video'
          };
        }

        // esclusione "fluid" tra le sizes
        var sizes = slot.getSizes(), filteredSizes = [];
        for(var i in sizes) {
          if(sizes[i].getWidth && sizes[i].getHeight) {
            filteredSizes.push([sizes[i].getWidth(), sizes[i].getHeight()]);
          }
        }

        return {
          'slotID'    : slot.getSlotElementId(),
          'slotName'  : slot.getAdUnitPath(),
          'sizes'     : filteredSizes
        }
      });

      return a9Slots;
    }

    if(typeof window.FPA9 === "undefined" ) {
      if(gdprsdk) {
        var gdprAllow = gdprsdk.amazon.allowHeaderBidding();
        debug("Is Gdpr Allow?",gdprAllow);
        window.FPA9 = new FPA9(enab && gdprAllow,
          pubId,
          btimeout
        );
      }
      else {
        log("NO GDPRSDK Defined - loading disabled");
        window.FPA9 = new FPA9(false,pubId,btimeout,false);
      }
    }

    window.HbWrapper.addVendor(window.FPA9);

  })(gdprsdk,true,"3597",1000);
});
</script>
<script type="text/javascript">

var __iasPET = __iasPET || {};
__iasPET.queue = __iasPET.queue || []; 
__iasPET.pubId = '930840';

window._fpcmp.push(function(gdprsdk)
{
  function CPIAS(enabled, timeout) {
    this.id = 'IAS';
    this.enabled = enabled;
    window._fp_ias_enabled = this.enabled;
    window._fp_ias_page_load = this.enabled;
    this.debugEnabled = false;
    this.timeout = timeout;
    this.enabledSizes = [
      [1, 1],
      [375, 125],
      [970, 250],
      [300, 250],
      [300, 600]
    ];

    if(enabled) {
      this.log('Loading IAS');
      (function(d, s, u) {
        var js, fjs = d.getElementsByTagName(s)[0];
        js = d.createElement(s);
        js.src = u;
        js.async = true;
        js.onload = function() {
          window._fp_ias_page_load = false;
        };
        if(fjs && fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
        else document.head.appendChild(js);
      }(document, 'script', 'https://cdn.adsafeprotected.com/iasPET.1.js'));
    }
  }

  CPIAS.prototype.loadSlots = function(slotsToRefresh, callback)
  {
    if(!this.enabled) {
      callback();
      return;
    }

    var fetchSlots = this.prepareSlots(slotsToRefresh);
    
    if(fetchSlots.length === 0) {
      this.log("No ads to check");
      callback();
      return;
    }

    var self = this;
    var __iasPETTimeoutRequestAds = setTimeout(function() {
      self.log('Manual Clean by Timeout');
    }, this.timeout);

    this.log('Asked ads to check', fetchSlots);
    __iasPET.queue.push({
      adSlots:      fetchSlots,
      dataHandler:  function(adSlotData)
      {
        clearTimeout(__iasPETTimeoutRequestAds);
        self.log('Check done', adSlotData);
        __iasPET.setTargetingForGPT();
        callback();
      }
    });
  };

  CPIAS.prototype.prepareSlots = function(slots)
  {
    var iasPETSlots = [], slotSizes, iasPetSizes, found = false, k = 0;
    for(var i = 0; i < slots.length; i++) {
      this.debug('check slot', slots[i]);
      iasPetSizes = [];
      if(slots[i] !== 'video') {
        slotSizes = slots[i].getSizes();
        this.debug('slot sizes', slotSizes);
        for(var j = 0; j < slotSizes.length; j++) {
          if(slotSizes[j].getWidth && slotSizes[j].getHeight) {
            found = false, k = 0;
            while(!found & k < this.enabledSizes.length) {
              if(slotSizes[j].getWidth() === this.enabledSizes[k][0] && slotSizes[j].getHeight() === this.enabledSizes[k][1]) {
                found = true;
              }
              k++;
            }

            if(found) {
              this.debug('slot allowed');
              iasPetSizes.push([slotSizes[j].getWidth(), slotSizes[j].getHeight()]);
            }
          }
        }
      }

      if(iasPetSizes.length > 0) {
        iasPETSlots.push({
          adSlotId:   slots[i].getSlotElementId(),
          size:       iasPetSizes,
          adUnitPath: slots[i].getAdUnitPath()
        });
      }
    }

    return iasPETSlots;
  }

  CPIAS.prototype.log = function() {
    var data = ["[CPIAS]"].concat(Array.prototype.slice.call(arguments));
    return typeof console !== "undefined" && console !== null ? console.log.apply(console,data) : void 0;
  }

  CPIAS.prototype.debug = function() {
    if(this.debugEnabled) {
      var data = ["[CPIAS]"].concat(Array.prototype.slice.call(arguments));
      return typeof console !== "undefined" && console !== null ? console.log.apply(console,data) : void 0;
    }
  }

  if(typeof window.CPIAS === "undefined" ) {
    window.CPIAS = new CPIAS(true, 2000);
  }

  window.HbWrapper.addVendor(window.CPIAS);
});
</script>
<script type="text/javascript">
    
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];


    var resizeOffset = 0;


    function collapseMobile() {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return windowWidth <= 768;
    }

    function collapseDesk() {
        return !collapseMobile();
    }


    function additionalSelectorForDevice(mainSelector) {
        if(collapseMobile()) return mainSelector + "-mobile";
        else return mainSelector + "-desk";
    }

    function defineInterceptor() {
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var isMobile = window._fpIsMobile || windowWidth < 1024;
        var useMargin = isMobile? Math.ceil(windowHeight / 8): Math.ceil(windowHeight / 10);
        

        return new IntersectionObserver(function(entries,observer){

            entries.forEach(function(entry) {
                if(entry.isIntersecting) {
                    console.debug("[ADS] smart collapse element intercepted",entry.target);
                    entry.target.dataset.scinterc = 1;
                    observer.unobserve(entry.target);
                }
            });
        },{
            root: null,
            threshold: 0,
            rootMargin: useMargin + 'px'
        });
    }

    var scInterceptor = defineInterceptor();
    var jsSmartCollapseClass = 'js-smart-collapse';
    var jsSmartCollapseDeviceClass = additionalSelectorForDevice(jsSmartCollapseClass);
    var jsCollapseAnywaysClass = 'js-collapse-anyways';
    var jsCollapseAnywaysDeviceClass = additionalSelectorForDevice(jsCollapseAnywaysClass);


    function registerEvents() {

        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


        var elIsAbove = function(element) {
            var rect = element.getBoundingClientRect();
            return rect.top <= 0;

        };


        window._fpcmp.push(function(gdpr) {

            googletag.cmd.push(function () {
                googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                    
                    var id = event.slot.getSlotId().getDomId();
                    var domEl = document.getElementById(id);
                    if(domEl) {
                        var slotParent = domEl.parentElement;
                        if(domEl.classList.contains(jsCollapseAnywaysClass) ||
                            domEl.classList.contains(jsCollapseAnywaysDeviceClass)) slotParent = domEl;  
                        if(slotParent && 
                            (slotParent.classList.contains(jsCollapseAnywaysClass) ||
                                slotParent.classList.contains(jsCollapseAnywaysDeviceClass)) && slotParent.dataset.scparsed == 1) {
                            
                            if(event.isEmpty) {
                                console.debug("[ADS] Collapsing Anyways",id );
                                slotParent.style.height = "0px";
                                slotParent.style['min-height'] = "auto";
                                slotParent.dataset.scops = "collapse";
                            }
                            slotParent.style.background = "transparent";
                        }
                        
                    }

                    
                    
                });

                googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                    

                    var id = event.slot.getSlotId().getDomId();
                    var domEl = document.getElementById(id);
                    if(domEl) {
                        var slotParent = domEl.parentElement;
                        if(domEl.classList.contains(jsSmartCollapseClass) || 
                            domEl.classList.contains(jsSmartCollapseDeviceClass)) slotParent = domEl;
                        
                        if(slotParent && 
                                (slotParent.classList.contains(jsSmartCollapseClass) || 
                                    slotParent.classList.contains(jsSmartCollapseDeviceClass)) &&
                                        slotParent.dataset.scparsed == 1) {
                            var isNotCollapsable =  slotParent.dataset.scinterc == 1 || elIsAbove(slotParent);
                            var sizes = event.size;
                            
                            if(!isNotCollapsable) {
                                
                                var currsizes = [slotParent.dataset.origwidth?
                                slotParent.dataset.origwidth:0,slotParent.dataset.origheight?
                                slotParent.dataset.origheight:0];
                                
                                if(event.isEmpty) {
                                    console.debug("[ADS] Smart Collapsing",id );
                                    slotParent.style.display = "none";
                                    slotParent.dataset.scops = "collapse";
                                }
                                else if(sizes && sizes.length >= 2 && sizes[1] < currsizes[1]) {
                                    var useSize = sizes[1];
                                    if(sizes[0] == 0 && sizes[1] == 0) {
                                        useSize = 250; 
                                    }
                                    useSize = useSize + resizeOffset;
                                    console.debug("[ADS] smart resizing " + id + " on native");
                                    slotParent.dataset.scops = "resize";
                                    slotParent.style.height = "auto";
                                    slotParent.style["min-height"] = useSize + "px";
                                    slotParent.style.background = "transparent";                                   
                                }
                                else {
                                    slotParent.style.background = "transparent";
                                }
                            }
                            else if(!event.isEmpty) {
                                    slotParent.style.background = "transparent"
                            }
                            else if(event.isEmpty) {
                                domEl.classList.remove("ad-frame");
                                if(slotParent.dataset && slotParent.dataset['rmbkg']) slotParent.style.background = "transparent";
                            }
                            
                        }
                    }                
                });
            });
        });
    }


    


    function parseForCollapseAnyways() {

        
        console.debug("[ADS] Checking collapse anyways",jsCollapseAnywaysClass,jsCollapseAnywaysDeviceClass);
        window._fpcmp.push(function(gdpr) {

            googletag.cmd.push(function () {

                var carr = document.querySelectorAll('.' + jsCollapseAnywaysClass + ', .' + jsCollapseAnywaysDeviceClass);
                if(carr.length <= 0)  {
                    console.debug("[ADS] collapse anyways list empty");
                    return;
                }
                carr.forEach(function(target){
                    if(target.dataset.scparsed != 1) {
                        console.debug("[ADS] Attaching collapse Anyways on dom element",target);
                        target.dataset.scparsed = 1;
                    }                   
                });
            });
        });
    }


    function parseForSmartCollapse(interceptor){

        console.debug("[ADS] Checking smart collapse",jsSmartCollapseClass,jsSmartCollapseDeviceClass);
        
    
        
        window._fpcmp.push(function(gdpr) {

            googletag.cmd.push(function () {
                
                var carr = document.querySelectorAll('.' + jsSmartCollapseClass + ', .' + jsSmartCollapseDeviceClass);
                if(carr.length <= 0) {
                    console.debug("[ADS] smart collapse list empty");
                    return;
                }
                carr.forEach(function(target){
                    if(target.dataset.scparsed != 1) {
                        console.debug("[ADS] Attaching smart collapse on dom element",target);
                        target.dataset.scinterc = 0;
                        target.dataset.scparsed = 1;
                        interceptor.observe(target);
                        var brect = target.getBoundingClientRect();
                        target.dataset.origheight = brect.height;
                        target.dataset.origwidth = brect.width;
                    }
                   
                   
                });
                

            });
        });
        
    };

    registerEvents();

    if(window.fp_endOfBody) {
        console.log("[ADS] parsing on already ended body");
        parseForCollapseAnyways();
        parseForSmartCollapse(scInterceptor);
    }
    else {
        console.log("[ADS] waiting endof body");
        window.document.addEventListener("end_of_body",function() {
            console.log("[ADS] parsing on endof body");
            parseForCollapseAnyways();
            parseForSmartCollapse(scInterceptor);
        });
    }
    
    window.document.addEventListener("cp_paginator_paged",function(){
        parseForCollapseAnyways();
        parseForSmartCollapse(scInterceptor);
    });
    
    


</script>
<script type="text/javascript">
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  var definedSlots = {};


  function _gptDeviceType() {
    var ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
  };

  window._fpcmp.push(function(gdpr)
  {
        if(typeof FpBlock !== 'undefined') {
          FpBlock.checkAdsBlocked();
        }

      var cons1 = gdpr.purposeConsent(1).cons;
      var cons3 = gdpr.purposeConsent(3).cons;
      var cons4 = gdpr.purposeConsent(4).cons;
      var p2 = gdpr.purposeConsent(2);
      var p7 = gdpr.purposeConsent(7);
      var p9 = gdpr.purposeConsent(9);
      var p10 = gdpr.purposeConsent(10);

      var cons2 = p2.cons || p2.legInt;
      var cons7 = p7.cons || p7.legInt;
      var cons9 = p9.cons || p9.legInt;
      var cons10 = p10.cons || p10.legInt;

      var legIntBasis = cons2 && cons7 && cons9 && cons10;

      var _ppa = cons1 && cons3 && cons4 && legIntBasis;
      var _npa = !_ppa && cons1 && legIntBasis;
      var _ltd = !_ppa && !_npa && legIntBasis;
        
      console.log("[ADS] ppa / npa / ltd", _ppa,_npa,_ltd);
    
      var gads = document.createElement('script');
      gads.async = true;
      gads.type = 'text/javascript';
      var useSSL = 'https:' == document.location.protocol;
      gads.onerror = function () { if ( typeof FpBlock !== 'undefined' ) { FpBlock.adsBlocked ( ) ; } };
      gads.src = (useSSL ? 'https:' : 'http:') +
        '//securepubads.g.doubleclick.net/tag/js/gpt.js';
      var node = document.getElementsByTagName('script')[0];
      node.parentNode.insertBefore(gads, node);

      googletag.cmd.push(function ()
      {
        
        var privacySettings = null;
        
        if(_ltd) privacySettings = {limitedAds: true};
        else if(_npa) privacySettings = {nonPersonalizedAds: true};

        if(privacySettings) {
            console.log("[ADS] setting privacy to",privacySettings);
            googletag.pubads().setPrivacySettings(privacySettings);
        }
        
        googletag.pubads().addEventListener('slotRenderEnded', function (event)
        {
          // ads not blocked
          if(typeof FpBlock !== 'undefined') {
            FpBlock.clearAds();
          }

          var $banner = document.getElementById(event.slot.getSlotId().getDomId());
          if(!$banner) {
            return;
          }

          
          // append comscore tracking
          var comScoreTrack = $banner.dataset.csTracking;
          if (comScoreTrack) {
            var cts = document.createElement('script');
            cts.async = true;
            cts.type = 'text/javascript';
            cts.src = comScoreTrack;
            $banner.append(cts);
            $banner.removeAttribute('data-cs-tracking');
          }
        });

        var deviceInfo  = uaDetect(),
    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var desktopWidth = 1024;

googletag.pubads().addEventListener('impressionViewable', function (event)
{
  console.log('[FP][ADS] impression viewable', { 
    domId: event.slot.getSlotId().getDomId(),
    path: event.slot.getAdUnitPath()
  });

  // skin
  if(event.slot.getAdUnitPath() == "/1010633/skin") {
    if(window.slotSkinSizes && window.slotSkinSizes[0] == 320 && window.slotSkinSizes[1] == 100) {
      window.document.body.classList.add('skin-viewed');
    }
  }

  // header
  if(event.slot.getAdUnitPath() == "/1010633/fpmobile_leadeboard") {
    window.MastheadViewability = window.MastheadViewability || [];
    window.MastheadViewability.push(function(controller)
    {
      controller.view(null);
    });
  }
});

googletag.pubads().addEventListener('slotResponseReceived', function (event)
{
  console.log('[FP][ADS] response received', { 
    domId: event.slot.getSlotId().getDomId(),
    path: event.slot.getAdUnitPath(),
    info: event.slot.getResponseInformation()
  });
});

googletag.pubads().addEventListener('slotRenderEnded', function (event)
{
  if(!event.slot.getOutOfPage()){
    var banner =  window.document.getElementById(event.slot.getSlotId().getDomId());

    console.log('[FP][ADS] render ended', {
      domId: event.slot.getSlotId().getDomId(),
      path: event.slot.getAdUnitPath(),
      empty: event.isEmpty,
      sizes: event.size
    });

    if(banner.length == 0) {
      console.log('[FP][ADS] dom element not found');
      return;
    }

    // header
    if(event.slot.getAdUnitPath() == "/1010633/fpmobile_leadeboard") {

      if (event.isEmpty) {
        return;
      } else if(event.size[0] > 728 && event.size[1] > 90) {
        window.MastheadViewability = window.MastheadViewability || [];
        window.MastheadViewability.push(function(controller)
        {
          controller.parentSelector = '.fp_adv-box';
          controller.start(event);
        });
      }

      document.body.classList.add('leadeaboard_adv--filled');

      return;
    }


    // skin mobile
    if(event.slot.getAdUnitPath() == "/1010633/skin") {

      if(event.isEmpty) {
        return;
      }

      document.body.classList.add('skin-loaded');

      const oldSkinCloser = document.getElementById('fp-header-skin-close');
      if(oldSkinCloser) {
        oldSkinCloser.addEventListener('click', function() {
          document.getElementById('cp-header-skin').remove();
        })
      }

      if (windowWidth < desktopWidth) {
        window.slotSkinSizes = event.size;
      }
    }

    // overlayer
    if(event.slot.getAdUnitPath() == "/1010633/overlayer") {

      if(event.isEmpty) {
        return;
      }
    } 
  }
});

        var deviceInfo  = uaDetect(),
            windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            slotSizes;

        // setting PPID    
        var apat = document.cookie.split(';').filter(function(el, idx){return el.indexOf('apat') > -1}).map(function(el, idx){return el.trim().split('=')})
        if (apat.length > 0 && apat[0].length === 2) {
            console.log("Google ad Manager setting Ppid on GoogleTag ", apat[0][1]);
            googletag.pubads().setPublisherProvidedId(apat[0][1]);
        }    

        // slots defining
                                            slotSizes = windowWidth < 1024 ? [375,125] : [[1,1],[1800,1000]];
                definedSlots['div-banner-0'] = googletag.defineSlot('/1010633/skin', slotSizes, 'div-banner-0').addService(googletag.pubads());
                                                slotSizes = (windowWidth < 1024 ? (windowWidth < 768 ?[[320,50],[320,100],[300,50],"fluid"] : [[320,50],[320,100],[300,50],[728,90],"fluid"]) : [[970,250],[970,90],[960,90],[960,250],[728,90],"fluid"]);
                definedSlots['div-banner-1'] = googletag.defineSlot('/1010633/fpmobile_leadeboard', slotSizes, 'div-banner-1').addService(googletag.pubads());
                                                slotSizes = windowWidth < 1024 ? [[300,250],[300,600],[336,280],"fluid"] : [[638,250],[336,280],[300,250],"fluid"];
                definedSlots['div-banner-6'] = googletag.defineSlot('/1010633/fpmobile_300x250_bottom', slotSizes, 'div-banner-6').addService(googletag.pubads());
                                                slotSizes = windowWidth < 1024 ? [[300,250],[336,280],"fluid"] : [[300,250],[300,600],"fluid"];
                definedSlots['div-banner-2'] = googletag.defineSlot('/1010633/fpmobile_300x250_top', slotSizes, 'div-banner-2').addService(googletag.pubads());
                                                slotSizes = windowWidth < 1024 ? [[300,250],[336,280],[300,600],"fluid"] : [[300,250],[336,280],[300,600],"fluid"];
                definedSlots['div-banner-3'] = googletag.defineSlot('/1010633/fpmobile_300x250', slotSizes, 'div-banner-3').addService(googletag.pubads());
                                                slotSizes = windowWidth < 1024 ? [[1,1],[320,480],"fluid"] : [[1,1],"fluid"];
                definedSlots['div-banner-4'] = googletag.defineSlot('/1010633/overlayer', slotSizes, 'div-banner-4').addService(googletag.pubads());
                                                slotSizes = windowWidth < 1024 ? [[300,250],[336,280],"fluid"] : [[300,250],[300,600],"fluid"];
                definedSlots['div-banner-5'] = googletag.defineSlot('/1010633/fpmobile_fplayer', slotSizes, 'div-banner-5').addService(googletag.pubads());
                              
        // targeting
                              googletag.pubads().setTargeting("n_parag", "8");
                                        googletag.pubads().setTargeting("fanpage", "www");
                                        googletag.pubads().setTargeting("url", "savignano-sul-rubicone-giovanissimi-tepp");
                                        googletag.pubads().setTargeting("site", "fanpage");
                                        googletag.pubads().setTargeting("category", "attualità");
                                        googletag.pubads().setTargeting("pagina", "articolo_standard");
                                        googletag.pubads().setTargeting("type", "fanplayer");
                  
        // cookie targeting
        var setCookie = function(cname, cvalue, exseconds, domain)
        {
          var d = new Date();
          d.setTime(d.getTime() + (exseconds * 1000));
          var expires = "expires="+d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=" + domain + ";path=/;Secure;SameSite=Strict";
        },
          getCookie = function(cname)
        {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }
          return "";
        };

        // fp_ad
        if(gdpr.google.allowPersonalizedAds()) {
          var fp_ad = getCookie('fp_ad');
          if(fp_ad.length > 0) {
            var splitted = fp_ad.split('.');
            if (splitted[0] != '') googletag.pubads().setTargeting("fp_e", splitted[0])
            if (splitted[1] != '') googletag.pubads().setTargeting("fp_s", splitted[1] == '1' ? 'm' : 'f')
          }
        }

        googletag.pubads().setTargeting("device_category",_gptDeviceType());
        
        const params = new URLSearchParams(window.location.search)
                if(params.get("utm_campaign") != null){
          googletag.pubads().setTargeting("utm_campaign", params.get("utm_campaign")) 
        }
                if(params.get("utm_medium") != null){
          googletag.pubads().setTargeting("utm_medium", params.get("utm_medium")) 
        }
        
        // n_pv_session
        var n_pv = getCookie('fp_npv'),
            host = document.location.host,
            hostParts = host.split('.');

        n_pv = n_pv.length === 0 ? 1 : (parseInt(n_pv) + 1);
        if(hostParts.length > 2) {
          hostParts.shift(1);
          host = '.' + hostParts.join('.');
        }
        setCookie('fp_npv', n_pv, (20 * 60), host);
        googletag.pubads().setTargeting("n_pv_session", n_pv.toString());

        // webview targeting
        var inappbrowser = 'no';


        if(window._nativeAppDetect &&
            window._nativeAppDetect.extra &&
              window._nativeAppDetect.extra.product) {
            
            var prod = window._nativeAppDetect.extra.product;
            if(prod == "fanpage") inappbrowser = "fanpageapp";
            else if (prod == "cookist_it") inappbrowser = "cookist_itapp";
            else if (prod == "cookist_com") inappbrowser = "cookist_wowapp";
            
        }
        if(inappbrowser == "no" && (deviceInfo.device.tablet || deviceInfo.device.phone)) {
          if(deviceInfo.browser.safari && deviceInfo.browser.webview) {
            inappbrowser = 'safari';
          } else if(deviceInfo.browser.webview && deviceInfo.platform.android) {
            inappbrowser = 'webview';
          }

        }

        if(inappbrowser != "no" || deviceInfo.device.tablet || deviceInfo.device.phone) googletag.pubads().setTargeting("inappbrowser", inappbrowser);

        // other configs
        googletag.pubads().enableSingleRequest();

                  googletag.pubads().disableInitialLoad();
        
                  googletag.pubads().enableLazyLoad({
            fetchMarginPercent  : -1,   // Fetch slots within 5 viewports.
            renderMarginPercent : 50,   // Render slots within 2 viewports.
            mobileScaling       : 2.0   // Double the above values on mobile.
          });
        
        googletag.enableServices();

                  var fetchSlots = googletag.pubads().getSlots();

                      fetchSlots.push('video');
          
          window.HbWrapper.loadSlots(fetchSlots);
              });
  });
</script>

<script type="text/javascript">
  (function() {
    const windowWidth = window.innerWidth 
      || document.documentElement.clientWidth 
      || document.body.clientWidth;
    const isMobile = window._fpIsMobile 
      || windowWidth < 1024;
    
    if (isMobile) {
      const replacementSlotClass = 'teads-replaced';
      const adUnitsCodeRef = {"fpmobile_300x250_top":"top"};
      if (typeof adUnitsCodeRef == 'object') {
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
          
          googletag.pubads().addEventListener('slotRenderEnded', function (event) {
            const currAdUnitCode = event.slot.getAdUnitPath().replace('/1010633/', '');
            if(event.isEmpty && Object.keys(adUnitsCodeRef).includes(currAdUnitCode)) {

              const currSlotId = event.slot.getSlotElementId();
              if (!currSlotId) return;

              const currSlotElm = document.getElementById(currSlotId);
              if (!currSlotElm) return;

              const slotWrapper = currSlotElm.parentElement;
              if (slotWrapper.classList.contains(replacementSlotClass)) return;

              const inReadName = adUnitsCodeRef[currAdUnitCode];
              if (!inReadName) return;

              const inreadElm = document.createElement('div');
              let inreadElmClass = currAdUnitCode.split('_');
              inreadElmClass = ('inread-placeholder--' + inReadName.toLowerCase());
              inreadElm.classList.add(inreadElmClass);
              
              slotWrapper.style.display = 'none';
              slotWrapper.before(inreadElm);
              slotWrapper.classList.add(replacementSlotClass);
            }
          });
        });
      }
    }
  })();
</script>
    <script type="text/javascript" src="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/js/dist/fanpage.js" async></script>
  </head>

    <body class="post-template-default single single-post postid-2012938 single-format-standard responsive-theme">
    <div id="fb-root"></div>
        
      
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--skin fp_adv-box--both fp_adv-box--autopromo whatsapp" id="cp-header-skin" >
      
    
    <!-- banner skin -->
        <div
      id="widget-banner-1"
      class="js-fp-noremove"
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
        
                      document.getElementById('widget-banner-1').id = 'div-banner-0';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-0");
                                  });

                        });

        
      </script>
    </div>

        

              <div id="fp-header-skin" class="js-fp-noremove"></div>
      
      <div id="taboola-div-banner-0-0"></div>
    </div>

      <div class="cp-general-wrapper">
        <div class="fp_bg-wrapper">
          <div class="fp_content-wrapper">
                        
<header class="fp_header fp_header--area-news fp_header--category fp_header--menu-category">
	<nav class="fp_header__menu">
		<div class="fp_header__btn-menu js_open-burger" data-anact="header/burger">
			<svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="14.5">
				<g data-name="Raggruppa 1475" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2">
					<path data-name="Linea 12" d="M1 1h17.5"/><path data-name="Linea 120" d="M1 13.5h17.13"/><path data-name="Linea 13" d="M1 7.25h17.5"/>
				</g>
			</svg>
		</div>
					<div class="fp_header__menu-label">
				
    <a class="fp_underline-label fp_underline-label--area-news fp_underline-label--menu fp_underline-label--theme-text-white" href="https://www.fanpage.it/attualita/" data-anact="header/menu">
        Attualità
    </a>
			</div>
			<ul id="menu-attualita" class="menu"><li id="menu-item-1043394" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043394"><a href="https://www.fanpage.it/attualita/violenza-italia/" data-anact="menu/sezione">Cronaca nera</a></li>
<li id="menu-item-1043399" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043399"><a href="https://www.fanpage.it/attualita/meteo-news/" data-anact="menu/sezione">Meteo</a></li>
<li id="menu-item-1865727" class="menu-item menu-item-type-story menu-item-object-cambiamento-climatico menu-item-1865727"><a href="https://www.fanpage.it/story/cambiamento-climatico/" data-anact="menu/sezione">Cambiamenti climatici</a></li>
<li id="menu-item-1657644" class="menu-item menu-item-type-story menu-item-object-emergenza-lavoro menu-item-has-children menu-item-1657644"><a href="https://www.fanpage.it/story/emergenza-lavoro/" data-anact="menu/sezione">Emergenza lavoro</a></li>
</ul>
			</nav>

	<a class="fp_header__logo" href="https://www.fanpage.it" data-anact="header/logo" title="Fanpage logo">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.903 35.568">
			<g fill="#fff" data-name="Raggruppa 1533">
			<path d="M11.737 4.227h-1.383a3.694 3.694 0 0 0-1.941.353 1.846 1.846 0 0 0-.589 1.618V8.08h3.324v4.03H7.824v12.708h2.118v4.03H.824v-4.059h2V12.081H0v-4.03h2.794V5.462a11.192 11.192 0 0 1 .265-3.118A2.749 2.749 0 0 1 4.589.638a9.361 9.361 0 0 1 4-.618 15.756 15.756 0 0 1 3.118.265v3.942h.029Z" data-name="Tracciato 32"/>
			<path d="M31.357 28.538h-6.325v-2.442a13.126 13.126 0 0 1-2.118 1.706 5.944 5.944 0 0 1-1.912.882 8.476 8.476 0 0 1-2.294.324 7.712 7.712 0 0 1-3.706-.853 6.723 6.723 0 0 1-2.618-2.353 5.893 5.893 0 0 1-.941-3.295 5.387 5.387 0 0 1 1.824-4.236 10.263 10.263 0 0 1 4.5-2.118 72.082 72.082 0 0 1 7.089-.971 8.652 8.652 0 0 0-.353-2.471 1.97 1.97 0 0 0-1.152-1.176 6.2 6.2 0 0 0-2.324-.353 3.925 3.925 0 0 0-2.589.853 3.2 3.2 0 0 0-1.118 2.324l-5-.147a6.838 6.838 0 0 1 1.235-3.589 6.923 6.923 0 0 1 2.971-2.383 10.362 10.362 0 0 1 4.236-.824 9.931 9.931 0 0 1 6.56 1.883 6.628 6.628 0 0 1 2.27 5.384v9.854h1.794Zm-6.589-7.766v-2a41.187 41.187 0 0 0-4.471.588 5.9 5.9 0 0 0-2.589 1.059 2.754 2.754 0 0 0-.353 3.883l.353.353a3.915 3.915 0 0 0 2.471.765 4.665 4.665 0 0 0 4-2.294 4.984 4.984 0 0 0 .588-2.353" data-name="Tracciato 33"/>
			<path d="M53.579 28.368h-6.942V14.779a2.75 2.75 0 0 0-3.059-3.036 4.065 4.065 0 0 0-2.294.723 4.956 4.956 0 0 0-1.706 1.937 5.427 5.427 0 0 0-.647 2.515v7.517h1.912v3.963h-8.884v-3.962H33.9V11.975h-1.941V8.043h7v2.6a15.1 15.1 0 0 1 2.677-2.226 7.486 7.486 0 0 1 6.913 0 6.146 6.146 0 0 1 2.294 2.2 5.656 5.656 0 0 1 .824 3.065v10.816h1.883v3.961Z" data-name="Tracciato 34"/>
			<path d="M75.638 18.129a13.868 13.868 0 0 1-.677 4.236 10.906 10.906 0 0 1-1.883 3.442 8.461 8.461 0 0 1-2.853 2.236 8.275 8.275 0 0 1-3.559.794 8.7 8.7 0 0 1-2.118-.265 6.723 6.723 0 0 1-1.912-.912 11.673 11.673 0 0 1-1.912-1.706v5.06h2v4.03h-8.912v-4.03h1.824v-19.3h-1.824v-4.03h6.942v2.118a8.3 8.3 0 0 1 9.648-1.883 8.25 8.25 0 0 1 2.794 2.236 10.767 10.767 0 0 1 1.824 3.5 16.561 16.561 0 0 1 .618 4.474m-5.326 0a10.045 10.045 0 0 0-.588-3.618 5.189 5.189 0 0 0-1.677-2.353 4.22 4.22 0 0 0-2.589-.794 4.439 4.439 0 0 0-3.265 1.5 4.507 4.507 0 0 0-1.118 1.912 12.578 12.578 0 0 0-.324 3.148 12.9 12.9 0 0 0 .327 3.205 4.587 4.587 0 0 0 1.177 2.118 4.369 4.369 0 0 0 3.177 1.412 4.108 4.108 0 0 0 2.53-.794 4.941 4.941 0 0 0 1.677-2.265 9.432 9.432 0 0 0 .646-3.471Z" data-name="Tracciato 35"/>
			<path d="M96.346 28.537h-6.324v-2.44a13.129 13.129 0 0 1-2.118 1.706 5.944 5.944 0 0 1-1.912.882 9.012 9.012 0 0 1-6-.588 6.723 6.723 0 0 1-2.618-2.353 5.893 5.893 0 0 1-.941-3.295 5.386 5.386 0 0 1 1.824-4.236 10.263 10.263 0 0 1 4.5-2.118 72.082 72.082 0 0 1 7.089-.971 8.652 8.652 0 0 0-.353-2.471 1.913 1.913 0 0 0-1.059-1.177 6.2 6.2 0 0 0-2.324-.353 3.925 3.925 0 0 0-2.588.853 3.107 3.107 0 0 0-1.088 2.294l-5.059-.118a6.838 6.838 0 0 1 1.235-3.589 7.032 7.032 0 0 1 2.971-2.353 10.362 10.362 0 0 1 4.236-.824 10.1 10.1 0 0 1 6.56 1.883 6.625 6.625 0 0 1 2.236 5.413v9.855h1.794v4.03Zm-6.589-7.766v-2a41.186 41.186 0 0 0-4.471.588 5.9 5.9 0 0 0-2.589 1.059 2.754 2.754 0 0 0-.353 3.883l.353.353a3.915 3.915 0 0 0 2.471.765 4.609 4.609 0 0 0 2.324-.647 4.426 4.426 0 0 0 1.647-1.647 4.159 4.159 0 0 0 .618-2.353" data-name="Tracciato 36"/>
			<path d="M117.88 11.719h-1.824v15.912a7.133 7.133 0 0 1-4.5 6.972 14.167 14.167 0 0 1-5.295.941 10.519 10.519 0 0 1-7.06-2.118 6.289 6.289 0 0 1-1.471-1.707 14.357 14.357 0 0 1-1.088-2.824h4.971a3.879 3.879 0 0 0 1.618 2.118 6.611 6.611 0 0 0 6.442-.412 3.362 3.362 0 0 0 1.353-2.795v-3.382a10.021 10.021 0 0 1-1.353 1.383 7.11 7.11 0 0 1-2.118 1.177 8.04 8.04 0 0 1-2.883.5 7.558 7.558 0 0 1-4.232-1.295 8.588 8.588 0 0 1-2.941-3.677 12.229 12.229 0 0 1-1.059-5.207 12.3 12.3 0 0 1 1.088-5.236 8.436 8.436 0 0 1 3.059-3.589 8.148 8.148 0 0 1 4.5-1.265 6.692 6.692 0 0 1 2.824.618 12.92 12.92 0 0 1 3.059 2.118V7.719h6.942v4h-.029Zm-6.913 5.619a7.3 7.3 0 0 0-.588-2.942 5.114 5.114 0 0 0-1.588-2.118 3.665 3.665 0 0 0-2.265-.735 4.642 4.642 0 0 0-4.236 2.765 7.207 7.207 0 0 0-.618 3.118 8.392 8.392 0 0 0 .529 3.177 4 4 0 0 0 4.03 2.647 4.135 4.135 0 0 0 2.471-.735 4.806 4.806 0 0 0 1.706-2.118 7.273 7.273 0 0 0 .588-3.059Z" data-name="Tracciato 37"/>
			<path d="M138.225 19.184h-14.8a5.983 5.983 0 0 0 1.912 4.56 5.355 5.355 0 0 0 2.971 1.059 4.265 4.265 0 0 0 4.236-3.059h5.353a8.691 8.691 0 0 1-5.177 6.354 10.807 10.807 0 0 1-4.412.941 10.29 10.29 0 0 1-3.971-.794 9.492 9.492 0 0 1-3.206-2.265 10.035 10.035 0 0 1-2.118-3.471 12.336 12.336 0 0 1 .029-8.472 10.675 10.675 0 0 1 2.118-3.442 9.165 9.165 0 0 1 3.118-2.5 9.486 9.486 0 0 1 4.03-.794 9.286 9.286 0 0 1 4.53 1.088 9.146 9.146 0 0 1 3.412 3.118 10.673 10.673 0 0 1 1.618 3.648 30.616 30.616 0 0 1 .353 4.03m-5.707-3.53a4.759 4.759 0 0 0-1.383-3 4.223 4.223 0 0 0-2.971-1.03 4.379 4.379 0 0 0-2 .5 4.786 4.786 0 0 0-1.588 1.383 6.367 6.367 0 0 0-1 2.118h8.913v.029Z" data-name="Tracciato 38"/>
			<path d="M140.636 26.006h2.118v2.118h-2.118z" data-name="Rettangolo 86"/>
			<path d="M149.284 28.17h-4.236v-1.592h1.206v-6.942h-1.265v-1.56h3.147v8.472h1.147Zm-1.147-11.678h-2.118V14.37h2.118Z" data-name="Tracciato 39"/>
			<path d="M155.756 28.191h-1.559a3.169 3.169 0 0 1-2.118-.5 2.108 2.108 0 0 1-.647-1.618v-6.442h-1.265v-1.588h1.353v-2.942h2.118v2.942h2.118v1.618h-2.118v5.824a1.452 1.452 0 0 0 .147.706 1.149 1.149 0 0 0 .5.412 2.287 2.287 0 0 0 .883.118h.735v1.53Z" data-name="Tracciato 40"/>
			</g>
		</svg>
	</a>

	<div class="fp_header__social">
            

    <a href="https://www.facebook.com/pages/fanpageit/169992733022409" title="icona facebook_small"  target="_blank" data-anact="rib" class="fp_button__icon     "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white   fp_icon--type-icon_facebook_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_facebook_small"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11536"> <path d="M17.48 13.59v3.19h-3.73v4.27h3.73V32h4.42V21.05h3.65l.54-4.27h-4.2v-2.72c0-1.24.31-2.1 2.1-2.1h2.25v-3.8A24.82 24.82 0 0022.9 8a5.06 5.06 0 00-5.44 4.66 4.73 4.73 0 00.02.93z" data-name="Tracciato 462" style="isolation: isolate" /> </g></svg>
  </span>
  
            </a>



            

    <a href="https://www.instagram.com/fanpage.it/" title="icona instagram_small"  target="_blank" data-anact="rib" class="fp_button__icon     "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white   fp_icon--type-icon_instagram_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_instagram_small"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11535"> <g data-name="Raggruppa 2139"> <path d="M24.42 8h-8.81A7.6 7.6 0 008 15.59v8.76a7.52 7.52 0 002.21 5.39A7.64 7.64 0 0015.62 32h8.78a7.59 7.59 0 007.6-7.59v-8.8A7.61 7.61 0 0024.42 8zm0 21.88h-8.8a5.51 5.51 0 01-5.52-5.5v-8.76a5.52 5.52 0 015.52-5.52h8.76a5.52 5.52 0 015.52 5.51v8.76a5.51 5.51 0 01-5.51 5.51z" data-name="Tracciato 26826" /> <path d="M20.05 14.48a5.57 5.57 0 105.57 5.57 5.57 5.57 0 00-5.57-5.57zm0 8.87a3.31 3.31 0 113.31-3.3 3.32 3.32 0 01-3.31 3.3z" data-name="Tracciato 26827" /> <circle cx="26.32" cy="13.72" r="1.42" data-name="Ellisse 303" /> </g> </g></svg>
  </span>
  
            </a>



            

    <a href="https://twitter.com/fanpage" title="icona x_small"  target="_blank" data-anact="rib" class="fp_button__icon     "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white   fp_icon--type-icon_x_small">
    <svg class="  fp_icon-symbol-icon_x_small" viewBox="0 0 20 20"> <g data-name="Raggruppa 54998" transform="translate(-1443 7797)" > <path  d="M6.988,5.081,11.359,0H10.323l-3.8,4.412L3.5,0H0L4.584,6.672,0,12H1.036L5.044,7.341,8.246,12h3.5L6.988,5.081ZM5.569,6.73,5.1,6.066,1.409.78H3L5.983,5.046l.464.664,3.877,5.545H8.733L5.569,6.731Z" transform="translate(1447 -7793)" /> </g></svg>
  </span>
  
            </a>



            

    <a href="https://www.youtube.com/user/FanpageMedia" title="icona youtube_small"  target="_blank" data-anact="rib" class="fp_button__icon     "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white   fp_icon--type-icon_youtube_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_youtube_small"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11534"> <path d="M29.34 10.6a73 73 0 00-18.68 0 3.48 3.48 0 00-2.16 2.57A44.57 44.57 0 008 20a44.7 44.7 0 00.5 6.84 3.43 3.43 0 002.16 2.56A58.39 58.39 0 0020 30a58.39 58.39 0 009.34-.6 3.43 3.43 0 002.16-2.56A44.7 44.7 0 0032 20a44.57 44.57 0 00-.5-6.83 3.33 3.33 0 00-2.16-2.57zM17.63 24.28v-8.55L23.88 20z" data-name="Tracciato 468" style="isolation: isolate" /> </g></svg>
  </span>
  
            </a>



    </div>	<div class="fp_header__action js_action-container">
                      <div class="fp_header__action-item js_active-search">
            <form method="GET" action="https://www.fanpage.it">
              <input
                class="fp_header__search-desktop"
                name="s"
                placeholder="cerca..."
                title="Cerca"
                type="text"
              />
              

    <a href="#" title="icona search"  target="_self" data-anact="header/search" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white   fp_icon--type-icon_search">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_search"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11544"> <g data-name="Raggruppa 11509"> <g data-name="Tracciato 457"> <path d="M37.05 35.81a1.18 1.18 0 00-.36-.85l-9.51-9.38.1-.11a13.79 13.79 0 10-1.93 1.9l.11-.09 9.54 9.4a1.2 1.2 0 00.86.34 1.07 1.07 0 00.85-.36 1.18 1.18 0 00.34-.85zM16.68 28a11.11 11.11 0 01-2.87-.35 11.35 11.35 0 01-8.45-10.92 11 11 0 01.37-2.92A11.31 11.31 0 1116.68 28z" data-name="Tracciato 12" /> </g> </g> </g></svg>
  </span>
  
            </a>



            </form>
          </div>
                              
        
    <a href="https://api.fanpage.it/user/login?utm_source=fanpage&amp;utm_medium=userbutton" title="icona person"  target="_blank" data-anact="header/user" class="fp_button__icon  fp_button__icon--theme-dark-grey  js_gosettings  fp_button__icon--login js_login-cta"     data-umedium="userbutton" data-settingsurl="login" >
                    <span class="fp_button__icon-img-wrap">
                <span class="fp_button__icon-img-content"></span>
            </span>
                          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white   fp_icon--type-icon_person">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_person"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11680"> <g data-name="Raggruppa 9003"> <g data-name="Raggruppa 4081"> <g data-name="Tracciato 7603"> <path d="M23.65.79a10.13 10.13 0 00-11 2.13 10 10 0 00-2.23 10.94 10.16 10.16 0 005.5 5.45A10 10 0 1023.65.79zM17 16.47a7.06 7.06 0 01-4.34-6.4v-.36A7 7 0 0117 3.58a7.08 7.08 0 017.73 1.48 6.92 6.92 0 011.55 7.63A7.06 7.06 0 0117 16.47z" data-name="Tracciato 27795" /> </g> <g data-name="Tracciato 7604"> <path d="M36.15 33.79c-3.14-7.4-9.31-12-16.15-12a17.92 17.92 0 00-16.15 12v.05A4.5 4.5 0 004.27 38 4.58 4.58 0 008 40h24a4.56 4.56 0 003.75-2 4.46 4.46 0 00.4-4.21zm-2.89 2.55A1.4 1.4 0 0132 37H8a1.32 1.32 0 01-1.16-.64A1.41 1.41 0 016.67 35a15.11 15.11 0 0113-10.17H20c5.6 0 10.71 3.9 13.36 10.17a1.54 1.54 0 01-.11 1.37z" data-name="Tracciato 27796" /> </g> </g> </g> </g></svg>
  </span>
  
            </a>



            </div>
</header>

<div class="fp_header__notification-container js_notification-container">
	<a class="fp_header__notification js_gosettings js_notification-cta" title="Guarda le notifiche" href="https://api.fanpage.it/user/login?utm_source=fanpage&amp;utm_medium=bell" target="_blank" data-umedium="bell" data-settingsurl="notifications" data-anact="header/bell">
				
<span class="fp_icon     fp_icon--type-icon_belt_outline">
    <svg class="fp_header__icon-notification fp_icon-symbol fp_icon-symbol-icon_belt_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11575"> <g data-name="Raggruppa 11576"> <path d="M33.64 8c-.25-.29-.52-.58-.79-.85l.22-.32a4.43 4.43 0 00.44-3.41A4.57 4.57 0 0031.3.58a4.35 4.35 0 00-3.38-.41 4.47 4.47 0 00-2.73 2.08c-.07.12-.12.25-.17.34-.39-.09-.75-.17-1.18-.25-6.38-.85-10 3.86-13.29 8.1a37.39 37.39 0 01-3.38 4.05 5.6 5.6 0 01-2.85 1.1 5 5 0 00-4 3.05v.09A3.88 3.88 0 002 23.56l24.24 14a4 4 0 002 .52 3.63 3.63 0 002.92-1.38l.25-.25a4.85 4.85 0 00.56-4.9 5.49 5.49 0 01-.46-3 37.7 37.7 0 011.83-5.06c2-4.89 4.25-10.39.3-15.49zm-3.18 14.32a36.54 36.54 0 00-1.91 5.47l-.05.21a8.52 8.52 0 00.71 4.75 1.93 1.93 0 01-.12 1.75l-.14.1a1 1 0 01-1.18.25L3.54 20.93a1 1 0 01-.37-1.15v-.17a1.81 1.81 0 011.42-1 8.59 8.59 0 004.5-1.76l.17-.18A32 32 0 0013 12.3c2.89-3.75 5.84-7.56 10.5-7a11.56 11.56 0 012.2.7 1.57 1.57 0 001.47-.2 1.42 1.42 0 00.59-1.37 2 2 0 01.17-.64 1.73 1.73 0 01.91-.66 1.25 1.25 0 011.06.15 1.34 1.34 0 01.66.83 1.49 1.49 0 01-.15 1.13 1.35 1.35 0 01-.46.46 1.44 1.44 0 00-.89 1.2 1.63 1.63 0 00.57 1.37 11.88 11.88 0 011.62 1.55c2.83 3.72 1 8.18-.78 12.54z" data-name="Tracciato 26837" /> <path d="M6.84 29.42L6.29 31a6.71 6.71 0 003 8.08 6.59 6.59 0 003.38.93 6.68 6.68 0 005.11-2.45l1-1.23zm3.8 7.32a4.07 4.07 0 01-2-3.07l5.63 3.21a4 4 0 01-3.64-.14z" data-name="Tracciato 26838" /> </g> </g></svg>
  </span>
  
		<span class="fp_header__notification-count is-hidden"></span>
	</a>

	</div>
    



<div class="fp_single-article">
  
      
<div class="fp_share  fp_share--fixed-mode   fp_share--hide-counter">
            <div class="fp_share__content">
                <div class="fp_share__counter">
        <span>0</span>
        CONDIVISIONI
    </div>
            <div class="fp_share__actions">
            

    <a href="#commenta"  target="_self" data-anact="" class="fp_button fp_button--theme-bordered-orange  fp_button--rounded js_scroll-to-comments fp_button--follow-2  "  >
        <span>commenta</span>
        
                    
<span class="fp_icon fp_icon--size-16x16 fp_icon--color-fill-black   fp_icon--type-icon_comment_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_comment_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11546"> <g data-name="Raggruppa 7557"> <g data-name="Raggruppa 7556"> <g data-name="Tracciato 22976"> <path d="M9.5 37.21A2.48 2.48 0 017 34.73v-5.82A4.94 4.94 0 012.28 24V7.7a4.93 4.93 0 014.93-4.93h25.58a4.93 4.93 0 014.93 4.92V24a4.93 4.93 0 01-4.92 5H20.87l-9.75 7.66a1.88 1.88 0 01-1.62.55zm.86-9.11V33L19 26.22a2.31 2.31 0 011.59-.59H32.8A1.6 1.6 0 0034.39 24V7.7a1.59 1.59 0 00-1.59-1.59H7.21a1.6 1.6 0 00-1.6 1.59V24a1.6 1.6 0 001.58 1.6h.77a2.48 2.48 0 012.4 2.49z" data-name="Tracciato 2" /> </g> </g> </g> </g></svg>
  </span>
  
            </a>


        

    <button class="fp_button fp_button--theme-bordered-orange  fp_button--rounded js_open-panel fp_button--follow-2  " >
        <span>condividi</span>
        
                    
<span class="fp_icon fp_icon--size-16x16 fp_icon--color-fill-black   fp_icon--type-icon_right_arrow_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_right_arrow_outline fp_icon-symbol--no-color"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11550"> <g data-name="Tracciato 26819"> <path fill="none" d="M39.58 19.38L25.21 34.06a1.45 1.45 0 01-2.06 0 1.48 1.48 0 01-.44-1.06v-7.41c-14.16.54-20 9.46-20 9.57a1.46 1.46 0 01-1.23.67 1.62 1.62 0 01-.48-.07 1.46 1.46 0 01-1-1.46c0-.22 1.5-21.36 22.7-23V3.69a1.46 1.46 0 012.5-1l14.39 14.66a1.46 1.46 0 01-.01 2.03z" data-name="Tracciato 3" /> <path d="M26 28.45l9.87-10.09L26 8.28v6.08l-3 .24a19.53 19.53 0 00-16.47 10 24.82 24.82 0 00-1.71 3.7l.68-.5a31.49 31.49 0 0117.11-5.57l3.39-.11v6.32M1.46 35.83a1.33 1.33 0 01-.46-.07 1.47 1.47 0 01-1-1.46c0-.22 1.5-21.36 22.7-23V3.69a1.47 1.47 0 011.46-1.46 1.49 1.49 0 011 .44l14.42 14.68a1.45 1.45 0 010 2L25.21 34.07a1.5 1.5 0 01-1 .45 1.47 1.47 0 01-1.46-1.46V25.6c-14.15.54-20 9.47-20 9.58a1.47 1.47 0 01-1.23.66z" data-name="Tracciato 4" /> </g> </g></svg>
  </span>
  
            </button>


</div>
        </div>

        <div class="fp_share__active-panel">
    <div class="fp_share__active-panel-content">

        
<div class="fp_share__social-channels">
    
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona copy_outline"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-orange  js_action-copy_outline js_share-button fp_button__icon--copy-btn "     data-share-button-provider="copy_outline" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_copy_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_copy_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11539"> <path d="M30.12 6H15.87a2 2 0 00-2 2v4h-4a2 2 0 00-2 2v18a1.94 1.94 0 001.92 2h14.34a2 2 0 002-2v-4h4a1.94 1.94 0 002-1.93V8a2 2 0 00-1.95-2zm-6.4 25.64H10.28V14.29h13.44zm6-5.93H26.1V13.89a2 2 0 00-2-2h-7.81V8.35h13.44z" data-name="Tracciato 26828" /> </g></svg>
  </span>
  
                    
<span class="fp_icon fp_icon--size-14x14 fp_icon--color-fill-orange1   fp_icon--type-icon_check">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_check"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11590"> <g data-name="icon check"> <path d="M37 10.28L14.85 32.47 3 20.62a1.62 1.62 0 011.15-2.77 1.65 1.65 0 011.15.47l9.58 9.58L34.8 8A1.62 1.62 0 0137 8a1.61 1.61 0 010 2.28z" data-name="Tracciato 26851" /> </g> </g></svg>
  </span>
   
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona mail_outline"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-light-grey  js_action-mail_outline js_share-button  "     data-share-button-provider="mail_outline" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-black   fp_icon--type-icon_mail_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_mail_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 4817"> <path d="M32.07 10H7.93a1.84 1.84 0 00-1.8 1.86v16.3A1.84 1.84 0 007.94 30h24.13a1.84 1.84 0 001.8-1.86v-16.3a1.84 1.84 0 00-1.8-1.84zm-2 2.41L20.17 22a.5.5 0 01-.38 0c-.45-.52-2.32-2.34-9.82-9.58zM8.51 14.29l6.09 5.9-6.09 5.86zm1.79 13.3l6-5.76 2 1.9a2.44 2.44 0 003.48 0l2-1.92 6 5.76zm21.21-1.54l-6.09-5.86 6.09-5.9z" data-name="Tracciato 26829" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona x"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-x  js_action-x js_share-button  "     data-share-button-provider="x" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_x">
    <svg class="  fp_icon-symbol-icon_x" viewBox="0 0 20 20"> <g data-name="Raggruppa 54998" transform="translate(-1443 7797)" > <path  d="M6.988,5.081,11.359,0H10.323l-3.8,4.412L3.5,0H0L4.584,6.672,0,12H1.036L5.044,7.341,8.246,12h3.5ZM5.569,6.73,5.1,6.066,1.409.78H3L5.983,5.046l.464.664,3.877,5.545H8.733L5.569,6.731Z" transform="translate(1447 -7793)" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona facebook"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-facebook  js_action-facebook js_share-button  "     data-share-button-provider="facebook" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_facebook">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_facebook"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11538"> <path d="M16.82 11.93v4h-4.69v5.38h4.69V35.1h5.58V21.32H27l.68-5.38H22.4v-3.42c0-1.56.4-2.64 2.64-2.64h2.83V5.09a34.64 34.64 0 00-4.2-.2 6.37 6.37 0 00-6.86 5.85 5.91 5.91 0 00.01 1.19z" data-name="Tracciato 1734" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona skype"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-skype  js_action-skype js_share-button  "     data-share-button-provider="skype" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_skype">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_skype"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11542"> <path d="M5.06 20A14.91 14.91 0 0020 34.94a15.63 15.63 0 002.81-.26 8.71 8.71 0 0011.9-12.06 15.14 15.14 0 00.23-2.6 14.91 14.91 0 00-17.7-14.68 8.71 8.71 0 00-11.94 12A14.67 14.67 0 005.06 20zM20.15 9.41c4.81.28 7.63 2.4 7.91 4.38a2 2 0 01-1.73 2.29 2.68 2.68 0 01-.49 0c-2.18 0-2.4-2.91-6.15-2.91-1.69 0-3.12.71-3.12 2.23 0 3.19 12 1.34 12 8.36 0 4.05-3.24 6.7-8.07 6.7-4.26 0-8.53-1.93-8.51-5.25a1.86 1.86 0 011.75-1.92c2.5 0 2.48 3.72 6.47 3.72C23 27 24 25.5 24 24.43c0-3.84-12.09-1.48-12.09-8.71 0-3.92 3.21-6.61 8.26-6.32z" data-name="Tracciato 26825" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona linkedin"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-linkedin  js_action-linkedin js_share-button  "     data-share-button-provider="linkedin" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_linkedin">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_linkedin"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11541"> <g data-name="Raggruppa 11531"> <path d="M8.39 15.97h4.99V32.1H8.39z" data-name="Rettangolo 5930" /> <path d="M10.86 13.86a3 3 0 10-2.95-3 3 3 0 002.95 3z" data-name="Tracciato 26821" /> <path d="M21.36 23.63c0-2.27 1.05-3.62 3-3.62s2.72 1.3 2.72 3.62v8.47h5V21.89c0-4.32-2.45-6.4-5.87-6.4a5.62 5.62 0 00-4.86 2.66V16h-4.78v16.09h4.79z" data-name="Tracciato 26822" /> </g> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona pinterest"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-pinterest  js_action-pinterest js_share-button  "     data-share-button-provider="pinterest" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_pinterest">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_pinterest"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11545"> <path d="M11.68 22.42a.6.6 0 00.88-.45c.09-.31.28-1.09.37-1.42a.87.87 0 00-.26-1 5.1 5.1 0 01-1.17-3.48 8.4 8.4 0 018.29-8.51h.45c4.76 0 7.38 2.91 7.38 6.8 0 5.12-2.26 9.44-5.62 9.44a2.74 2.74 0 01-2.88-2.61 2.46 2.46 0 01.08-.81 37.91 37.91 0 001.56-6.3 2.38 2.38 0 00-2.07-2.65 1.82 1.82 0 00-.33 0c-1.9 0-3.42 2-3.42 4.6a6.93 6.93 0 00.56 2.8l-2.28 9.67a19.81 19.81 0 00-.05 6.74.22.22 0 00.27.19.24.24 0 00.15-.09 18.92 18.92 0 003.2-5.8C17 28.76 18 24.67 18 24.67a5.1 5.1 0 004.33 2.22c5.71 0 9.58-5.2 9.58-12.17A10.59 10.59 0 0021 4.54h-.22c-8.43 0-12.68 6-12.68 11.08a6.84 6.84 0 003.58 6.8z" data-name="Tracciato 26824" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona whatsapp"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-whatsapp  js_action-whatsapp js_share-button  "     data-share-button-provider="whatsapp" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_whatsapp">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_whatsapp"  viewBox="0 0 40 40"> <path d="M38 19.52A17.6 17.6 0 0120.32 37a17.79 17.79 0 01-8.56-2.2L2 38l3.2-9.4A17.63 17.63 0 1138 19.52zM20.32 4.8A14.79 14.79 0 005.48 19.52a14.45 14.45 0 002.84 8.64l-1.84 5.48 5.72-1.8a14.77 14.77 0 108.12-27zm8.92 18.76a3 3 0 00-.84-.56c-.44-.2-2.56-1.24-3-1.4s-.68-.2-1 .2-1.12 1.4-1.36 1.68a.67.67 0 01-.92.12 11.62 11.62 0 01-3.48-2.12 12.93 12.93 0 01-2.4-3 .61.61 0 01.16-.85c.2-.2.44-.52.64-.76a4.48 4.48 0 00.44-.72.74.74 0 000-.76c-.12-.2-1-2.32-1.32-3.2s-.72-.72-1-.72h-.84a1.75 1.75 0 00-1.16.52 4.84 4.84 0 00-1.52 3.6A8.4 8.4 0 0013.52 20a17.65 17.65 0 007.4 6.48c4.4 1.72 4.4 1.16 5.2 1.08a4.4 4.4 0 002.92-2 3.51 3.51 0 00.2-2z" data-name="Raggruppa 11548" /></svg>
  </span>
  
            </a>



            </div>

        <div class="fp_share__close-wrap">
            

    <button class="fp_button fp_button--theme-bordered-grey fp_button--size-13 fp_button--rounded js_close-panel  " >
        <span>chiudi</span>
        
                    
<span class="fp_icon fp_icon--size-13x13 fp_icon--color-fill-black   fp_icon--type-icon_close">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_close"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11582"> <path d="M4.52 37.5a1.69 1.69 0 01-1.69-1.69 1.65 1.65 0 01.49-1.19l14.3-14.45L3 5.38A1.69 1.69 0 015.4 3L20 17.75 34.6 3A1.69 1.69 0 0137 5.38L22.38 20.17l14.3 14.45A1.69 1.69 0 0134.27 37L20 22.58 5.73 37a1.7 1.7 0 01-1.21.5z" data-name="Tracciato 27723" /> </g></svg>
  </span>
  
            </button>


        </div>
    </div>
</div>
    </div>

  
  
  
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--fpmobile_leadeboard fp_adv-box--only-desktop js-collapse-anyways"  >
      
    
    <!-- banner fpmobile_leadeboard -->
        <div
      id="widget-banner-2"
      class=""
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
                              if(windowWidth >= 1024) {
                  
                      document.getElementById('widget-banner-2').id = 'div-banner-1';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-1");
                                  });

                        });

                  } else {
            document.getElementById('widget-banner-2').style.display = 'none';
          }
        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-1-1"></div>
    </div>

  
  <div class="fp_single-article__wrap">
    <div class="fp_single-article__content">
      <div class="fp_single-article__col-sx" data-anpos="colonna-articolo">
        
        
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--overlayer fp_adv-box--both fp_adv-box--overlayer js-smart-collapse"  >
      
    
    <!-- banner overlayer -->
        <div
      id="widget-banner-3"
      class=""
      style="width:1px;height:1px;position:fixed;top:0;"          >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
        
                      document.getElementById('widget-banner-3').id = 'div-banner-4';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-4");
                                  });

                        });

        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-4-0"></div>
    </div>

                          
                          
<div class="fp_info    ">

	
	
	

						<time class="fp_info__date-updated" datetime="2024-01-22T19:01:00+01:00">
		
		
		<span class="fp_info__date">
						
<span class="fp_icon fp_icon--size-12x12 fp_icon--color-fill-grey2   fp_icon--type-icon_date_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_date_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11579"> <g data-name="Raggruppa 4160"> <g data-name="Tracciato 25"> <path d="M31.82 6.52H28V4.73a1.47 1.47 0 00-1.49-1.45A1.4 1.4 0 0025 4.58v1.86H15V4.75a1.46 1.46 0 00-2.91-.12v1.81H8.25A3.28 3.28 0 005 9.69v23.75a3.22 3.22 0 003.08 3.28h23.75A3.21 3.21 0 0035 33.54V9.7a3.18 3.18 0 00-3.19-3.18zm0 27.2H8.2a.19.19 0 01-.2-.17V18.9h24v14.64a.18.18 0 01-.17.18zM8 9.7a.21.21 0 01.21-.21H12v2.58a1.45 1.45 0 002.9.12v-2.7h9.89v2.58a1.45 1.45 0 102.9 0V9.49h3.84a.2.2 0 01.2.2v6.23H8z" data-name="Tracciato 5" /> </g> </g> </g></svg>
  </span>
  
			22 Gennaio 2024
		</span>

		<span class="fp_info__time">
						
<span class="fp_icon fp_icon--size-12x12 fp_icon--color-fill-grey2   fp_icon--type-icon_watch">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_watch"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11580"> <g data-name="Raggruppa 4159"> <g data-name="Tracciato 26"> <path d="M30.61 9.35a15 15 0 100 21.26 15 15 0 000-21.26zm-2.18 19a11.87 11.87 0 110-16.8 11.87 11.87 0 010 16.8z" data-name="Tracciato 6" /> </g> <g data-name="Tracciato 27"> <path d="M21.31 13.28v7a1.47 1.47 0 01-.4 1l-4.85 5.28a1.59 1.59 0 01-1.16.5 1.74 1.74 0 01-1-.36l-.13-.1a1.68 1.68 0 010-2.08l4.5-4.83v-6.41a1.54 1.54 0 113.08 0z" data-name="Tracciato 7" /> </g> </g> </g></svg>
  </span>
  
			19:01
		</span>

					</time>
		
		 	
</div>
          
<div class="fp_intro">
            <h1 class="fp_intro__title">Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social <span class="cp-ext_semaphore"></span></h1>
    
            <div class="fp_intro__abstract">L’ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forlì. Il video è stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico.</div>
    
              

  

  

  
  

<div class="fp_social-entry fp_social-entry--type-whatsapp" data-nosnippet="true">
  <a href="https://fanpa.ge/fanpage-wa" target="_blank" >
        <div class="fp_social-entry__content">Entra nel nuovo <span>canale WhatsApp</span> di Fanpage.it</div>
    <div class="fp_social-entry__icon-next">
      <span class="cp_icon"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="24" viewBox="0 0 13 24">
        <path id="Icon_ionic-ios-arrow-back_-_Contorno" data-name="Icon ionic-ios-arrow-back - Contorno" d="M12.069,19.531,22.618,30.325a1.233,1.233,0,0,0,1.759,0,1.275,1.275,0,0,0,.365-.9,1.256,1.256,0,0,0-.363-.887L14.744,18.69l9.641-9.837a1.275,1.275,0,0,0,.365-.9,1.256,1.256,0,0,0-.363-.887,1.22,1.22,0,0,0-.878-.372,1.238,1.238,0,0,0-.885.372L12.111,17.792A1.281,1.281,0,0,0,12.069,19.531Z" transform="translate(24.749 30.694) rotate(180)" fill="#17f80d"/>
      </svg>
      </span>
    </div>
  </a>
</div>

    
    </div>
          
                      
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--fpmobile_leadeboard fp_adv-box--to-tablet js-collapse-anyways"  >
      
    
    <!-- banner fpmobile_leadeboard -->
        <div
      id="widget-banner-4"
      class=""
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
                              if(windowWidth >= 0 && windowWidth <= 1023) {
                  
                      document.getElementById('widget-banner-4').id = 'div-banner-1';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-1");
                                  });

                        });

                  } else {
            document.getElementById('widget-banner-4').style.display = 'none';
          }
        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-1-5"></div>
    </div>
          
                  
          
<div class="fp_author">
  <div class="fp_author__name">
     A cura di 
            <a href="https://www.fanpage.it/author/biagio-chiariello/" target="_self" data-anact="autore">Biagio Chiariello</a>
      </div>
  </div>

        
                  
<div class="fp_share fp_share--border-top    fp_share--hide-counter">
            <div class="fp_share__content">
                <div class="fp_share__counter">
        <span>0</span>
        CONDIVISIONI
    </div>
            <div class="fp_share__actions">
            

    <a href="#commenta"  target="_self" data-anact="" class="fp_button fp_button--theme-bordered-orange  fp_button--rounded js_scroll-to-comments fp_button--follow-2  "  >
        <span>commenta</span>
        
                    
<span class="fp_icon fp_icon--size-16x16 fp_icon--color-fill-black   fp_icon--type-icon_comment_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_comment_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11546"> <g data-name="Raggruppa 7557"> <g data-name="Raggruppa 7556"> <g data-name="Tracciato 22976"> <path d="M9.5 37.21A2.48 2.48 0 017 34.73v-5.82A4.94 4.94 0 012.28 24V7.7a4.93 4.93 0 014.93-4.93h25.58a4.93 4.93 0 014.93 4.92V24a4.93 4.93 0 01-4.92 5H20.87l-9.75 7.66a1.88 1.88 0 01-1.62.55zm.86-9.11V33L19 26.22a2.31 2.31 0 011.59-.59H32.8A1.6 1.6 0 0034.39 24V7.7a1.59 1.59 0 00-1.59-1.59H7.21a1.6 1.6 0 00-1.6 1.59V24a1.6 1.6 0 001.58 1.6h.77a2.48 2.48 0 012.4 2.49z" data-name="Tracciato 2" /> </g> </g> </g> </g></svg>
  </span>
  
            </a>


        

    <button class="fp_button fp_button--theme-bordered-orange  fp_button--rounded js_open-panel fp_button--follow-2  " >
        <span>condividi</span>
        
                    
<span class="fp_icon fp_icon--size-16x16 fp_icon--color-fill-black   fp_icon--type-icon_right_arrow_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_right_arrow_outline fp_icon-symbol--no-color"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11550"> <g data-name="Tracciato 26819"> <path fill="none" d="M39.58 19.38L25.21 34.06a1.45 1.45 0 01-2.06 0 1.48 1.48 0 01-.44-1.06v-7.41c-14.16.54-20 9.46-20 9.57a1.46 1.46 0 01-1.23.67 1.62 1.62 0 01-.48-.07 1.46 1.46 0 01-1-1.46c0-.22 1.5-21.36 22.7-23V3.69a1.46 1.46 0 012.5-1l14.39 14.66a1.46 1.46 0 01-.01 2.03z" data-name="Tracciato 3" /> <path d="M26 28.45l9.87-10.09L26 8.28v6.08l-3 .24a19.53 19.53 0 00-16.47 10 24.82 24.82 0 00-1.71 3.7l.68-.5a31.49 31.49 0 0117.11-5.57l3.39-.11v6.32M1.46 35.83a1.33 1.33 0 01-.46-.07 1.47 1.47 0 01-1-1.46c0-.22 1.5-21.36 22.7-23V3.69a1.47 1.47 0 011.46-1.46 1.49 1.49 0 011 .44l14.42 14.68a1.45 1.45 0 010 2L25.21 34.07a1.5 1.5 0 01-1 .45 1.47 1.47 0 01-1.46-1.46V25.6c-14.15.54-20 9.47-20 9.58a1.47 1.47 0 01-1.23.66z" data-name="Tracciato 4" /> </g> </g></svg>
  </span>
  
            </button>


</div>
        </div>

        <div class="fp_share__active-panel">
    <div class="fp_share__active-panel-content">

        
<div class="fp_share__social-channels">
    
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona copy_outline"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-orange  js_action-copy_outline js_share-button fp_button__icon--copy-btn "     data-share-button-provider="copy_outline" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_copy_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_copy_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11539"> <path d="M30.12 6H15.87a2 2 0 00-2 2v4h-4a2 2 0 00-2 2v18a1.94 1.94 0 001.92 2h14.34a2 2 0 002-2v-4h4a1.94 1.94 0 002-1.93V8a2 2 0 00-1.95-2zm-6.4 25.64H10.28V14.29h13.44zm6-5.93H26.1V13.89a2 2 0 00-2-2h-7.81V8.35h13.44z" data-name="Tracciato 26828" /> </g></svg>
  </span>
  
                    
<span class="fp_icon fp_icon--size-14x14 fp_icon--color-fill-orange1   fp_icon--type-icon_check">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_check"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11590"> <g data-name="icon check"> <path d="M37 10.28L14.85 32.47 3 20.62a1.62 1.62 0 011.15-2.77 1.65 1.65 0 011.15.47l9.58 9.58L34.8 8A1.62 1.62 0 0137 8a1.61 1.61 0 010 2.28z" data-name="Tracciato 26851" /> </g> </g></svg>
  </span>
   
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona mail_outline"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-light-grey  js_action-mail_outline js_share-button  "     data-share-button-provider="mail_outline" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-black   fp_icon--type-icon_mail_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_mail_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 4817"> <path d="M32.07 10H7.93a1.84 1.84 0 00-1.8 1.86v16.3A1.84 1.84 0 007.94 30h24.13a1.84 1.84 0 001.8-1.86v-16.3a1.84 1.84 0 00-1.8-1.84zm-2 2.41L20.17 22a.5.5 0 01-.38 0c-.45-.52-2.32-2.34-9.82-9.58zM8.51 14.29l6.09 5.9-6.09 5.86zm1.79 13.3l6-5.76 2 1.9a2.44 2.44 0 003.48 0l2-1.92 6 5.76zm21.21-1.54l-6.09-5.86 6.09-5.9z" data-name="Tracciato 26829" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona x"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-x  js_action-x js_share-button  "     data-share-button-provider="x" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_x">
    <svg class="  fp_icon-symbol-icon_x" viewBox="0 0 20 20"> <g data-name="Raggruppa 54998" transform="translate(-1443 7797)" > <path  d="M6.988,5.081,11.359,0H10.323l-3.8,4.412L3.5,0H0L4.584,6.672,0,12H1.036L5.044,7.341,8.246,12h3.5ZM5.569,6.73,5.1,6.066,1.409.78H3L5.983,5.046l.464.664,3.877,5.545H8.733L5.569,6.731Z" transform="translate(1447 -7793)" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona facebook"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-facebook  js_action-facebook js_share-button  "     data-share-button-provider="facebook" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_facebook">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_facebook"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11538"> <path d="M16.82 11.93v4h-4.69v5.38h4.69V35.1h5.58V21.32H27l.68-5.38H22.4v-3.42c0-1.56.4-2.64 2.64-2.64h2.83V5.09a34.64 34.64 0 00-4.2-.2 6.37 6.37 0 00-6.86 5.85 5.91 5.91 0 00.01 1.19z" data-name="Tracciato 1734" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona skype"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-skype  js_action-skype js_share-button  "     data-share-button-provider="skype" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_skype">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_skype"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11542"> <path d="M5.06 20A14.91 14.91 0 0020 34.94a15.63 15.63 0 002.81-.26 8.71 8.71 0 0011.9-12.06 15.14 15.14 0 00.23-2.6 14.91 14.91 0 00-17.7-14.68 8.71 8.71 0 00-11.94 12A14.67 14.67 0 005.06 20zM20.15 9.41c4.81.28 7.63 2.4 7.91 4.38a2 2 0 01-1.73 2.29 2.68 2.68 0 01-.49 0c-2.18 0-2.4-2.91-6.15-2.91-1.69 0-3.12.71-3.12 2.23 0 3.19 12 1.34 12 8.36 0 4.05-3.24 6.7-8.07 6.7-4.26 0-8.53-1.93-8.51-5.25a1.86 1.86 0 011.75-1.92c2.5 0 2.48 3.72 6.47 3.72C23 27 24 25.5 24 24.43c0-3.84-12.09-1.48-12.09-8.71 0-3.92 3.21-6.61 8.26-6.32z" data-name="Tracciato 26825" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona linkedin"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-linkedin  js_action-linkedin js_share-button  "     data-share-button-provider="linkedin" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_linkedin">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_linkedin"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11541"> <g data-name="Raggruppa 11531"> <path d="M8.39 15.97h4.99V32.1H8.39z" data-name="Rettangolo 5930" /> <path d="M10.86 13.86a3 3 0 10-2.95-3 3 3 0 002.95 3z" data-name="Tracciato 26821" /> <path d="M21.36 23.63c0-2.27 1.05-3.62 3-3.62s2.72 1.3 2.72 3.62v8.47h5V21.89c0-4.32-2.45-6.4-5.87-6.4a5.62 5.62 0 00-4.86 2.66V16h-4.78v16.09h4.79z" data-name="Tracciato 26822" /> </g> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona pinterest"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-pinterest  js_action-pinterest js_share-button  "     data-share-button-provider="pinterest" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_pinterest">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_pinterest"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11545"> <path d="M11.68 22.42a.6.6 0 00.88-.45c.09-.31.28-1.09.37-1.42a.87.87 0 00-.26-1 5.1 5.1 0 01-1.17-3.48 8.4 8.4 0 018.29-8.51h.45c4.76 0 7.38 2.91 7.38 6.8 0 5.12-2.26 9.44-5.62 9.44a2.74 2.74 0 01-2.88-2.61 2.46 2.46 0 01.08-.81 37.91 37.91 0 001.56-6.3 2.38 2.38 0 00-2.07-2.65 1.82 1.82 0 00-.33 0c-1.9 0-3.42 2-3.42 4.6a6.93 6.93 0 00.56 2.8l-2.28 9.67a19.81 19.81 0 00-.05 6.74.22.22 0 00.27.19.24.24 0 00.15-.09 18.92 18.92 0 003.2-5.8C17 28.76 18 24.67 18 24.67a5.1 5.1 0 004.33 2.22c5.71 0 9.58-5.2 9.58-12.17A10.59 10.59 0 0021 4.54h-.22c-8.43 0-12.68 6-12.68 11.08a6.84 6.84 0 003.58 6.8z" data-name="Tracciato 26824" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona whatsapp"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-whatsapp  js_action-whatsapp js_share-button  "     data-share-button-provider="whatsapp" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_whatsapp">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_whatsapp"  viewBox="0 0 40 40"> <path d="M38 19.52A17.6 17.6 0 0120.32 37a17.79 17.79 0 01-8.56-2.2L2 38l3.2-9.4A17.63 17.63 0 1138 19.52zM20.32 4.8A14.79 14.79 0 005.48 19.52a14.45 14.45 0 002.84 8.64l-1.84 5.48 5.72-1.8a14.77 14.77 0 108.12-27zm8.92 18.76a3 3 0 00-.84-.56c-.44-.2-2.56-1.24-3-1.4s-.68-.2-1 .2-1.12 1.4-1.36 1.68a.67.67 0 01-.92.12 11.62 11.62 0 01-3.48-2.12 12.93 12.93 0 01-2.4-3 .61.61 0 01.16-.85c.2-.2.44-.52.64-.76a4.48 4.48 0 00.44-.72.74.74 0 000-.76c-.12-.2-1-2.32-1.32-3.2s-.72-.72-1-.72h-.84a1.75 1.75 0 00-1.16.52 4.84 4.84 0 00-1.52 3.6A8.4 8.4 0 0013.52 20a17.65 17.65 0 007.4 6.48c4.4 1.72 4.4 1.16 5.2 1.08a4.4 4.4 0 002.92-2 3.51 3.51 0 00.2-2z" data-name="Raggruppa 11548" /></svg>
  </span>
  
            </a>



            </div>

        <div class="fp_share__close-wrap">
            

    <button class="fp_button fp_button--theme-bordered-grey fp_button--size-13 fp_button--rounded js_close-panel  " >
        <span>chiudi</span>
        
                    
<span class="fp_icon fp_icon--size-13x13 fp_icon--color-fill-black   fp_icon--type-icon_close">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_close"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11582"> <path d="M4.52 37.5a1.69 1.69 0 01-1.69-1.69 1.65 1.65 0 01.49-1.19l14.3-14.45L3 5.38A1.69 1.69 0 015.4 3L20 17.75 34.6 3A1.69 1.69 0 0137 5.38L22.38 20.17l14.3 14.45A1.69 1.69 0 0134.27 37L20 22.58 5.73 37a1.7 1.7 0 01-1.21.5z" data-name="Tracciato 27723" /> </g></svg>
  </span>
  
            </button>


        </div>
    </div>
</div>
    </div>
        
        
        <div class="fp_main-media"> <figure class="fp_main-media__container"><img   src="https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/savignano-vandali-outlet-1200x675.jpg"   class="fp_img fp_live-box__media-image" alt="Immagine"  width="1200"  height="675" /></figure> </div>
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--fpmobile_300x250_top fp_adv-box--to-tablet fp_adv-box--odd js-smart-collapse"  >
      
    
    <!-- banner fpmobile_300x250_top -->
        <div
      id="widget-banner-5"
      class=""
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
                              if(windowWidth >= 0 && windowWidth <= 1023) {
                  
                      document.getElementById('widget-banner-5').id = 'div-banner-2';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-2");
                                  });

                        });

                  } else {
            document.getElementById('widget-banner-5').style.display = 'none';
          }
        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-2-5"></div>
    </div>
 <p>Non è un semplice <strong>atto vandalico</strong> quello compiuto da un <strong>branco di ragazzini</strong> sabato sera all'Outlet Rubicone Fashion che si trova all'interno del complesso del <strong>Romagna Shopping Valley</strong>, a <strong>Savignano</strong>, in provincia di<strong> Forlì</strong>.</p>
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--fpmobile_300x250 fp_adv-box--only-mobile js-smart-collapse"  >
      
    
    <!-- banner fpmobile_300x250 -->
        <div
      id="widget-banner-6"
      class=""
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
                              if(windowWidth >= 0 && windowWidth <= 767) {
                  
                      document.getElementById('widget-banner-6').id = 'div-banner-3';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-3");
                                  });

                        });

                  } else {
            document.getElementById('widget-banner-6').style.display = 'none';
          }
        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-3-2"></div>
    </div>
 
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--fpmobile_300x250 fp_adv-box--from-tablet fp_adv-box--even js-smart-collapse"  >
      
    
    <!-- banner fpmobile_300x250 -->
        <div
      id="widget-banner-7"
      class=""
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
                              if(windowWidth >= 768) {
                  
                      document.getElementById('widget-banner-7').id = 'div-banner-3';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-3");
                                  });

                        });

                  } else {
            document.getElementById('widget-banner-7').style.display = 'none';
          }
        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-3-4"></div>
    </div>
<p>Il gesto insensato è stato <strong>filmato</strong> dagli stessi balordi e caricato online, quasi certamente con l'obiettivo di finire sui<strong> social</strong> come effettivamente è accaduto. Il video della malefatta è infatti rimbalzato sulla pagina Facebook di &#8216;Romagnoli popolo eletto' e poi su altre più o meno note di Instagram e TikTok, diventando <strong>virale</strong> e suscitando vari commenti di sdegno.</p><div id="inread-placeholder"></div>
 <p>Dunque sabato sera, 20 gennaio, all'esterno del complesso sorto come store di alta moda è andata in scena lo scempio del nutrito <strong>gruppo di giovanissimi</strong>, tutti incappucciati, che si sono a loro modo divertiti a <strong>distruggere</strong> a suon di colpi con bastoni e calci la <strong>vetrata</strong> di una porta di ingresso di uno dei corridoi che porta nei vari negozi.</p>

<div class="fp_read-also fp_read-also--with-post fp_read-also--broken">
  <div class="fp_read-also__content">
                    <div class="fp_read-also__label ">
        <div class="fp_read-also__label-content">
          Leggi anche
        </div>
      </div>
    
          <a href="https://www.fanpage.it/attualita/lo-youtuber-loris-sabatucci-morto-nello-schianto-dellaereo-che-pilotava/?ref=leggianche" target="_self" data-anact="leggi-anche" class="fp_read-also__post-title">
        <span class="fp_read-also__inner-title">Lo youtuber Loris Sabatucci morto nello schianto dell’aereo che pilotava</span>
      </a>
      </div>
</div>
 <p>Prima di fuggire hanno utilizzato l<strong>’idrante</strong> dell’impianto antincendio per <strong>allagare uno spazio comune</strong> al coperto, dove si trovano i bidoni dei rifiuti e le uscite di sicurezza. Rovesciati anche alcuni cassonetti.</p>  <p>A intervenire sul posto è stata la compagna dei <strong>carabinieri di Cesenatico</strong>. I militari dell'Arma, dopo aver acquisito la denuncia, hanno avviato le <strong>indagini</strong> per risalire ai giovani responsabili dell'accaduto visionando anche le telecamere di video-sorveglianza della struttura. Pare che non ci siano stati furti all'interno dei negozi dell'outlet.</p>
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--fpmobile_fplayer fp_adv-box--only-mobile js-smart-collapse"  >
      
    
    <!-- banner fpmobile_fplayer -->
        <div
      id="widget-banner-8"
      class=""
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
                              if(windowWidth >= 0 && windowWidth <= 767) {
                  
                      document.getElementById('widget-banner-8').id = 'div-banner-5';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-5");
                                  });

                        });

                  } else {
            document.getElementById('widget-banner-8').style.display = 'none';
          }
        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-5-2"></div>
    </div>
 
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--fpmobile_fplayer fp_adv-box--from-tablet fp_adv-box--odd js-smart-collapse"  >
      
    
    <!-- banner fpmobile_fplayer -->
        <div
      id="widget-banner-9"
      class=""
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
                              if(windowWidth >= 768) {
                  
                      document.getElementById('widget-banner-9').id = 'div-banner-5';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-5");
                                  });

                        });

                  } else {
            document.getElementById('widget-banner-9').style.display = 'none';
          }
        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-5-4"></div>
    </div>
<p>L'obiettivo delle forze dell'ordine ora è quello <strong>identificare gli autori</strong> di questo ennesimo episodio di <strong>vandalismo&nbsp;</strong>a danno di attività commerciali.</p> <div class="embed-container"> <div class="lazyjs" data-type="fb-video" data-href="https://www.facebook.com/RomagnoliPopoloEletto/videos/1437814033490567/"> 		<a target="_blank" href="https://www.facebook.com/RomagnoliPopoloEletto/videos/1437814033490567/" rel="nofollow"><i class="icon facebook">&nbsp;</i></a> 	</div> </div> <p>Il <strong>sindaco di Savignano, Filippo Giovannini,</strong> ha parlato di "un atto spropositato". Mentre <strong>Kitty Montemaggi,</strong> coordinatore comunale di Fratelli d'Italia, riflette: “Siamo arrivati a quello che mai ci potevamo aspettare in un piccolo paese, quello che vediamo sempre in televisione e che ci sembra così lontano dalla nostra realtà o dai nostri giovani. Quello che è successo sabato scorso non è solo un <strong>episodio sgradevole</strong> ma <strong>è molto preoccupante</strong> perché denota un <strong>disagio sociale</strong> che in Romagna non dovrebbe essere presente".</p> 
        <div class="fp_summary-button-wrap fp_summary-button-wrap--hidden"></div>

        
        
        
<div class="fp_continue-read">
  <div class="fp_continue-read__decoration"></div>
  <div>
    <a href="https://www.fanpage.it/?ref=continua" target="_self" data-anact="continua-a-leggere" class="fp_continue-read__label">
    Continua a leggere su Fanpage.it
    </a>
  </div>
</div>

        
        
        
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--fpmobile_300x250_bottom fp_adv-box--both js-smart-collapse"  >
      
    
    <!-- banner fpmobile_300x250_bottom -->
        <div
      id="widget-banner-10"
      class=""
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
        
                      document.getElementById('widget-banner-10').id = 'div-banner-6';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-6");
                                  });

                        });

        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-6-0"></div>
    </div>

        
<div class="fp_categories">
        <div class="fp_categories__item">
        <a class="fp_categories__link" href="https://www.fanpage.it/attualita/" target="_self" data-anact="categorie">Attualità</a>
      </div>
  </div>

                  
<div class="fp_share fp_share--border-top    fp_share--hide-counter">
            <div class="fp_share__content">
                <div class="fp_share__counter">
        <span>0</span>
        CONDIVISIONI
    </div>
            <div class="fp_share__actions">
            

    <a href="#commenta"  target="_self" data-anact="" class="fp_button fp_button--theme-bordered-orange  fp_button--rounded js_scroll-to-comments fp_button--follow-2  "  >
        <span>commenta</span>
        
                    
<span class="fp_icon fp_icon--size-16x16 fp_icon--color-fill-black   fp_icon--type-icon_comment_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_comment_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11546"> <g data-name="Raggruppa 7557"> <g data-name="Raggruppa 7556"> <g data-name="Tracciato 22976"> <path d="M9.5 37.21A2.48 2.48 0 017 34.73v-5.82A4.94 4.94 0 012.28 24V7.7a4.93 4.93 0 014.93-4.93h25.58a4.93 4.93 0 014.93 4.92V24a4.93 4.93 0 01-4.92 5H20.87l-9.75 7.66a1.88 1.88 0 01-1.62.55zm.86-9.11V33L19 26.22a2.31 2.31 0 011.59-.59H32.8A1.6 1.6 0 0034.39 24V7.7a1.59 1.59 0 00-1.59-1.59H7.21a1.6 1.6 0 00-1.6 1.59V24a1.6 1.6 0 001.58 1.6h.77a2.48 2.48 0 012.4 2.49z" data-name="Tracciato 2" /> </g> </g> </g> </g></svg>
  </span>
  
            </a>


        

    <button class="fp_button fp_button--theme-bordered-orange  fp_button--rounded js_open-panel fp_button--follow-2  " >
        <span>condividi</span>
        
                    
<span class="fp_icon fp_icon--size-16x16 fp_icon--color-fill-black   fp_icon--type-icon_right_arrow_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_right_arrow_outline fp_icon-symbol--no-color"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11550"> <g data-name="Tracciato 26819"> <path fill="none" d="M39.58 19.38L25.21 34.06a1.45 1.45 0 01-2.06 0 1.48 1.48 0 01-.44-1.06v-7.41c-14.16.54-20 9.46-20 9.57a1.46 1.46 0 01-1.23.67 1.62 1.62 0 01-.48-.07 1.46 1.46 0 01-1-1.46c0-.22 1.5-21.36 22.7-23V3.69a1.46 1.46 0 012.5-1l14.39 14.66a1.46 1.46 0 01-.01 2.03z" data-name="Tracciato 3" /> <path d="M26 28.45l9.87-10.09L26 8.28v6.08l-3 .24a19.53 19.53 0 00-16.47 10 24.82 24.82 0 00-1.71 3.7l.68-.5a31.49 31.49 0 0117.11-5.57l3.39-.11v6.32M1.46 35.83a1.33 1.33 0 01-.46-.07 1.47 1.47 0 01-1-1.46c0-.22 1.5-21.36 22.7-23V3.69a1.47 1.47 0 011.46-1.46 1.49 1.49 0 011 .44l14.42 14.68a1.45 1.45 0 010 2L25.21 34.07a1.5 1.5 0 01-1 .45 1.47 1.47 0 01-1.46-1.46V25.6c-14.15.54-20 9.47-20 9.58a1.47 1.47 0 01-1.23.66z" data-name="Tracciato 4" /> </g> </g></svg>
  </span>
  
            </button>


</div>
        </div>

        <div class="fp_share__active-panel">
    <div class="fp_share__active-panel-content">

        
<div class="fp_share__social-channels">
    
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona copy_outline"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-orange  js_action-copy_outline js_share-button fp_button__icon--copy-btn "     data-share-button-provider="copy_outline" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_copy_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_copy_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11539"> <path d="M30.12 6H15.87a2 2 0 00-2 2v4h-4a2 2 0 00-2 2v18a1.94 1.94 0 001.92 2h14.34a2 2 0 002-2v-4h4a1.94 1.94 0 002-1.93V8a2 2 0 00-1.95-2zm-6.4 25.64H10.28V14.29h13.44zm6-5.93H26.1V13.89a2 2 0 00-2-2h-7.81V8.35h13.44z" data-name="Tracciato 26828" /> </g></svg>
  </span>
  
                    
<span class="fp_icon fp_icon--size-14x14 fp_icon--color-fill-orange1   fp_icon--type-icon_check">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_check"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11590"> <g data-name="icon check"> <path d="M37 10.28L14.85 32.47 3 20.62a1.62 1.62 0 011.15-2.77 1.65 1.65 0 011.15.47l9.58 9.58L34.8 8A1.62 1.62 0 0137 8a1.61 1.61 0 010 2.28z" data-name="Tracciato 26851" /> </g> </g></svg>
  </span>
   
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona mail_outline"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-light-grey  js_action-mail_outline js_share-button  "     data-share-button-provider="mail_outline" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-black   fp_icon--type-icon_mail_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_mail_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 4817"> <path d="M32.07 10H7.93a1.84 1.84 0 00-1.8 1.86v16.3A1.84 1.84 0 007.94 30h24.13a1.84 1.84 0 001.8-1.86v-16.3a1.84 1.84 0 00-1.8-1.84zm-2 2.41L20.17 22a.5.5 0 01-.38 0c-.45-.52-2.32-2.34-9.82-9.58zM8.51 14.29l6.09 5.9-6.09 5.86zm1.79 13.3l6-5.76 2 1.9a2.44 2.44 0 003.48 0l2-1.92 6 5.76zm21.21-1.54l-6.09-5.86 6.09-5.9z" data-name="Tracciato 26829" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona x"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-x  js_action-x js_share-button  "     data-share-button-provider="x" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_x">
    <svg class="  fp_icon-symbol-icon_x" viewBox="0 0 20 20"> <g data-name="Raggruppa 54998" transform="translate(-1443 7797)" > <path  d="M6.988,5.081,11.359,0H10.323l-3.8,4.412L3.5,0H0L4.584,6.672,0,12H1.036L5.044,7.341,8.246,12h3.5ZM5.569,6.73,5.1,6.066,1.409.78H3L5.983,5.046l.464.664,3.877,5.545H8.733L5.569,6.731Z" transform="translate(1447 -7793)" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona facebook"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-facebook  js_action-facebook js_share-button  "     data-share-button-provider="facebook" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_facebook">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_facebook"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11538"> <path d="M16.82 11.93v4h-4.69v5.38h4.69V35.1h5.58V21.32H27l.68-5.38H22.4v-3.42c0-1.56.4-2.64 2.64-2.64h2.83V5.09a34.64 34.64 0 00-4.2-.2 6.37 6.37 0 00-6.86 5.85 5.91 5.91 0 00.01 1.19z" data-name="Tracciato 1734" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona skype"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-skype  js_action-skype js_share-button  "     data-share-button-provider="skype" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_skype">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_skype"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11542"> <path d="M5.06 20A14.91 14.91 0 0020 34.94a15.63 15.63 0 002.81-.26 8.71 8.71 0 0011.9-12.06 15.14 15.14 0 00.23-2.6 14.91 14.91 0 00-17.7-14.68 8.71 8.71 0 00-11.94 12A14.67 14.67 0 005.06 20zM20.15 9.41c4.81.28 7.63 2.4 7.91 4.38a2 2 0 01-1.73 2.29 2.68 2.68 0 01-.49 0c-2.18 0-2.4-2.91-6.15-2.91-1.69 0-3.12.71-3.12 2.23 0 3.19 12 1.34 12 8.36 0 4.05-3.24 6.7-8.07 6.7-4.26 0-8.53-1.93-8.51-5.25a1.86 1.86 0 011.75-1.92c2.5 0 2.48 3.72 6.47 3.72C23 27 24 25.5 24 24.43c0-3.84-12.09-1.48-12.09-8.71 0-3.92 3.21-6.61 8.26-6.32z" data-name="Tracciato 26825" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona linkedin"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-linkedin  js_action-linkedin js_share-button  "     data-share-button-provider="linkedin" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_linkedin">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_linkedin"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11541"> <g data-name="Raggruppa 11531"> <path d="M8.39 15.97h4.99V32.1H8.39z" data-name="Rettangolo 5930" /> <path d="M10.86 13.86a3 3 0 10-2.95-3 3 3 0 002.95 3z" data-name="Tracciato 26821" /> <path d="M21.36 23.63c0-2.27 1.05-3.62 3-3.62s2.72 1.3 2.72 3.62v8.47h5V21.89c0-4.32-2.45-6.4-5.87-6.4a5.62 5.62 0 00-4.86 2.66V16h-4.78v16.09h4.79z" data-name="Tracciato 26822" /> </g> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona pinterest"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-pinterest  js_action-pinterest js_share-button  "     data-share-button-provider="pinterest" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_pinterest">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_pinterest"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11545"> <path d="M11.68 22.42a.6.6 0 00.88-.45c.09-.31.28-1.09.37-1.42a.87.87 0 00-.26-1 5.1 5.1 0 01-1.17-3.48 8.4 8.4 0 018.29-8.51h.45c4.76 0 7.38 2.91 7.38 6.8 0 5.12-2.26 9.44-5.62 9.44a2.74 2.74 0 01-2.88-2.61 2.46 2.46 0 01.08-.81 37.91 37.91 0 001.56-6.3 2.38 2.38 0 00-2.07-2.65 1.82 1.82 0 00-.33 0c-1.9 0-3.42 2-3.42 4.6a6.93 6.93 0 00.56 2.8l-2.28 9.67a19.81 19.81 0 00-.05 6.74.22.22 0 00.27.19.24.24 0 00.15-.09 18.92 18.92 0 003.2-5.8C17 28.76 18 24.67 18 24.67a5.1 5.1 0 004.33 2.22c5.71 0 9.58-5.2 9.58-12.17A10.59 10.59 0 0021 4.54h-.22c-8.43 0-12.68 6-12.68 11.08a6.84 6.84 0 003.58 6.8z" data-name="Tracciato 26824" /> </g></svg>
  </span>
  
            </a>



            
                            
                    
                
    <a href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" title="icona whatsapp"  target="_self" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-whatsapp  js_action-whatsapp js_share-button  "     data-share-button-provider="whatsapp" data-share-button-text="L&rsquo;ignobile atto vandalico sabato sera al Romagna Shopping Valley di Savignano, in provincia di Forl&igrave;. Il video &egrave; stato ripreso dagli stessi ragazzini e poi fatto circolare sulle chat social. Indagano i carabinieri di Cesenatico." data-share-button-title="Savignano sul Rubicone, giovanissimi teppisti scatenati: devastano un outlet. Video sui social" data-share-button-url="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" >
         
          
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_whatsapp">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_whatsapp"  viewBox="0 0 40 40"> <path d="M38 19.52A17.6 17.6 0 0120.32 37a17.79 17.79 0 01-8.56-2.2L2 38l3.2-9.4A17.63 17.63 0 1138 19.52zM20.32 4.8A14.79 14.79 0 005.48 19.52a14.45 14.45 0 002.84 8.64l-1.84 5.48 5.72-1.8a14.77 14.77 0 108.12-27zm8.92 18.76a3 3 0 00-.84-.56c-.44-.2-2.56-1.24-3-1.4s-.68-.2-1 .2-1.12 1.4-1.36 1.68a.67.67 0 01-.92.12 11.62 11.62 0 01-3.48-2.12 12.93 12.93 0 01-2.4-3 .61.61 0 01.16-.85c.2-.2.44-.52.64-.76a4.48 4.48 0 00.44-.72.74.74 0 000-.76c-.12-.2-1-2.32-1.32-3.2s-.72-.72-1-.72h-.84a1.75 1.75 0 00-1.16.52 4.84 4.84 0 00-1.52 3.6A8.4 8.4 0 0013.52 20a17.65 17.65 0 007.4 6.48c4.4 1.72 4.4 1.16 5.2 1.08a4.4 4.4 0 002.92-2 3.51 3.51 0 00.2-2z" data-name="Raggruppa 11548" /></svg>
  </span>
  
            </a>



            </div>

        <div class="fp_share__close-wrap">
            

    <button class="fp_button fp_button--theme-bordered-grey fp_button--size-13 fp_button--rounded js_close-panel  " >
        <span>chiudi</span>
        
                    
<span class="fp_icon fp_icon--size-13x13 fp_icon--color-fill-black   fp_icon--type-icon_close">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_close"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11582"> <path d="M4.52 37.5a1.69 1.69 0 01-1.69-1.69 1.65 1.65 0 01.49-1.19l14.3-14.45L3 5.38A1.69 1.69 0 015.4 3L20 17.75 34.6 3A1.69 1.69 0 0137 5.38L22.38 20.17l14.3 14.45A1.69 1.69 0 0134.27 37L20 22.58 5.73 37a1.7 1.7 0 01-1.21.5z" data-name="Tracciato 27723" /> </g></svg>
  </span>
  
            </button>


        </div>
    </div>
</div>
    </div>
        
        
      </div>
      
      
<!-- RECOMMENDATIONS-BOX -->
<div 
    class="cp_recommendations cp_recommendations--relateds-box" 
    data-provider-id="taboola"
>
    
<div id="taboola-below-article-thumbnails">
  <script>
    (function() {
      const windowWidth = window.innerWidth 
        || document.documentElement.clientWidth 
        || document.body.clientWidth;

      const isMobile = window._fpIsMobile || windowWidth < 1024;
      const mobMode = 'thumbnails-a';
      const deskMode = 'thumbnails-a';

      window._taboola = window._taboola || [];
      _taboola.push({
        mode: isMobile?mobMode:deskMode,
        container: 'taboola-below-article-thumbnails',
        placement: 'Below Article Thumbnails',
        target_type: 'mix'
      });
    })();
  </script>
</div></div>      
      <div class="fp_single-article__col-dx" data-anpos="sidebar">
                  <!-- VIDEO-PLAYER ANCHORAGE-PLACEHOLDER -->
<div class="ym-player-sidebar"></div>          
<!-- FANPLAYER-PLACEHOLDER-D -->
<div 
    id="cp_fanplayer--d-placeholder"
    class="ymv-fanplayer-wrap"
    data-nosnippet="true"
></div>        
        
    <!-- WP VERSION -->
                
    <div class="fp_adv-box fp_adv-box--fpmobile_300x250_top fp_adv-box--only-desktop js-smart-collapse"  >
      
    
    <!-- banner fpmobile_300x250_top -->
        <div
      id="widget-banner-11"
      class=""
                >
      <script type="text/javascript">
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  
                              if(windowWidth >= 1024) {
                  
                      document.getElementById('widget-banner-11').id = 'div-banner-2';
          
            window._fpcmp.push(function (gdpr) {
              
                googletag.cmd.push(function () {
                                    googletag.display("div-banner-2");
                                  });

                        });

                  } else {
            document.getElementById('widget-banner-11').style.display = 'none';
          }
        
      </script>
    </div>

        

      
      <div id="taboola-div-banner-2-1"></div>
    </div>

                
        
  
  <div class="fp_article-grid-external">

    
    <div class="fp_article-grid fp_article-grid--3    fp_article-grid--mobile-mode-desk"
      
      
    >
                        
  
                                        
  
  

  <div class="fp_article-card-image fp_article-card-image--medium     " 
    
    
  >
      <a href="https://www.fanpage.it/attualita/gattino-trovato-morto-congelato-e-zuppo-ragazzina-lo-aveva-spinto-nella-fontana-per-video-social/" target="_self" data-anact="correlati" class="fp_article-card-image__img-wrap">
        <div class="fp_article-card-image__img-content">
          

<img  loading="lazy"  srcset="https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/gatto-alberobello.jpg 735w, https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/gatto-alberobello-300x225.jpg 300w" src="https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/gatto-alberobello.jpg"   class=""  alt="Gattino trovato morto congelato e zuppo: ragazzina lo aveva spinto nella fontana per video social"  width="735"  height="554" />
        </div>
              </a>

      <div class="fp_article-card-image__content-wrap">
        <a href="https://www.fanpage.it/attualita/gattino-trovato-morto-congelato-e-zuppo-ragazzina-lo-aveva-spinto-nella-fontana-per-video-social/" target="_self" data-anact="correlati" class="fp_article-card-image__title"
          
        >Gattino trovato morto congelato e zuppo: ragazzina lo aveva spinto nella fontana per video social</a>
              </div>
  </div>
                                
  
                                                        
  
  

  <div class="fp_article-card-image fp_article-card-image--small fp_article-card-image--reverse     " 
    
    
  >
      <a href="https://www.fanpage.it/attualita/calcio-al-gattino-che-muore-per-il-freddo-denunciata-la-16enne-del-video-social-ora-basta-gogna/" target="_self" data-anact="correlati" class="fp_article-card-image__img-wrap">
        <div class="fp_article-card-image__img-content">
          

<img  loading="lazy"  srcset=" https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/alberobello-gatto-300x178.jpg 300w, https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/alberobello-gatto-768x455.jpg 768w" src="https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/alberobello-gatto.jpg"   class=""  alt="Calcio al gattino che muore per il freddo, denunciata la 16enne del video social: “Ora basta gogna”"  width="1040"  height="616" />
        </div>
              </a>

      <div class="fp_article-card-image__content-wrap">
        <a href="https://www.fanpage.it/attualita/calcio-al-gattino-che-muore-per-il-freddo-denunciata-la-16enne-del-video-social-ora-basta-gogna/" target="_self" data-anact="correlati" class="fp_article-card-image__title"
          
        >Calcio al gattino che muore per il freddo, denunciata la 16enne del video social: “Ora basta gogna”</a>
              </div>
  </div>
                                
  
                                        
  
  

  <div class="fp_article-card-image fp_article-card-image--small     " 
    
    
  >
      <a href="https://www.fanpage.it/attualita/aggredito-con-spray-urticante-il-marito-di-monica-poli-nota-per-i-video-social-attenzione-pickpockets/" target="_self" data-anact="correlati" class="fp_article-card-image__img-wrap">
        <div class="fp_article-card-image__img-content">
          

<img  loading="lazy"  srcset="https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/monica-poli.jpg 562w, https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/monica-poli-300x166.jpg 300w" src="https://staticfanpage.akamaized.net/wp-content/uploads/2024/01/monica-poli.jpg"   class=""  alt="Aggredito con spray urticante il marito di Monica Poli, nota per i video social: "Attenzione pickpockets""  width="562"  height="311" />
        </div>
              </a>

      <div class="fp_article-card-image__content-wrap">
        <a href="https://www.fanpage.it/attualita/aggredito-con-spray-urticante-il-marito-di-monica-poli-nota-per-i-video-social-attenzione-pickpockets/" target="_self" data-anact="correlati" class="fp_article-card-image__title"
          
        >Aggredito con spray urticante il marito di Monica Poli, nota per i video social: &quot;Attenzione pickpockets&quot;</a>
              </div>
  </div>
                  </div>
  </div>

        
      </div>
    </div>

    
    <div class="fp_newsbox   fp_newsbox--in-article  fp_newsbox--align-image-center">
        
<div class="fp_newsbox__head fp_newsbox__head--image  ">
                <a href="https://www.fanpage.it/milano/caso-balocco-chiara-ferragni-indagata-per-truffa-anche-per-le-uova-di-pasqua-dolci-preziosi-e-la-bambola-trudi/" data-anact="newsbox/titolo" class="fp_newsbox__head-img-wrap">
        <div class="fp_newsbox__head-img-content">
            

<img  loading="lazy"  srcset="https://staticfanpage.akamaized.net/wp-content/uploads/sites/29/2024/01/ferragni-balocco-uova-1024x512.jpg 1024w, https://staticfanpage.akamaized.net/wp-content/uploads/sites/29/2024/01/ferragni-balocco-uova-300x150.jpg 300w, https://staticfanpage.akamaized.net/wp-content/uploads/sites/29/2024/01/ferragni-balocco-uova-768x384.jpg 768w" src="https://staticfanpage.akamaized.net/wp-content/uploads/sites/29/2024/01/ferragni-balocco-uova-1024x512.jpg"  sizes="(max-width: 767px) 100vw, 50vw"  class="" alt="Immagine"  width="1024"  height="512" />
        </div>

        
            <div class="fp_newsbox__claim">
                    <div class="fp_newsbox__claim-row-wrap fp_newsbox__claim-row-wrap-1">
                <div class="fp_newsbox__claim-row-1" >crisi</div>
            </div>
        
                    <div class="fp_newsbox__claim-row-wrap fp_newsbox__claim-row-wrap-2">
                <div class="fp_newsbox__claim-row-2" >Ferragni</div>
            </div>
            </div>

    </a>

    <div class="fp_newsbox__title-wrap">
        <a href="https://www.fanpage.it/milano/caso-balocco-chiara-ferragni-indagata-per-truffa-anche-per-le-uova-di-pasqua-dolci-preziosi-e-la-bambola-trudi/" data-anact="newsbox/titolo" class="fp_newsbox__title" >Chiara Ferragni indagata per truffa anche per le uova di Pasqua Dolci Preziosi e la bambola Trudi</a>
    </div>
    </div>
        <div class="fp_newsbox__link-groups">
                            <div class="fp_newsbox__evidence-links-wrap" >
                    
                                                              <div class="fp_newsbox__evidence-links fp_newsbox__evidence-links--5  " >
                                    
    
<a href="https://www.fanpage.it/spettacolo/personaggi/chiara-ferragni-e-fedez-la-smentita-sullavvocato-divorzista-poi-la-foto-per-fermare-le-notizie/" data-anact="newsbox/link-in-evidenza" class="fp_newsbox-card     fp_newsbox-card--vertical"  >

   

    <div class="fp_newsbox-card__title">
        <div >
            La notizia sull&#039;avvocato divorzista, poi la foto per smentire la crisi
        </div>
            </div>
</a>                                                    
    
<a href="https://www.fanpage.it/spettacolo/personaggi/chiara-ferragni-e-fedez-in-crisi-il-patrimonio-la-fuga-dei-brand-e-la-fiducia-minata-dei-followers/" data-anact="newsbox/link-in-evidenza" class="fp_newsbox-card     fp_newsbox-card--vertical"  >

   

    <div class="fp_newsbox-card__title">
        <div >
            &quot;Ferragni e Fedez in crisi&quot;: la fuga di brand e la fiducia dei followers
        </div>
            </div>
</a>                                                    
    
<a href="https://www.fanpage.it/milano/codacons-presenta-un-nuovo-esposto-su-chiara-ferragni-dubbi-sulla-collaborazione-con-oreo/" data-anact="newsbox/link-in-evidenza" class="fp_newsbox-card     fp_newsbox-card--vertical"  >

   

    <div class="fp_newsbox-card__title">
        <div >
            Nuovo esposto del Codacons: dubbi sulla collaborazione con Oreo
        </div>
            </div>
</a>                                                    
    
<a href="https://www.fanpage.it/innovazione/tecnologia/cosa-ce-di-vero-nella-storia-dei-12-milioni-di-follower-falsi-di-chiara-ferragni/" data-anact="newsbox/link-in-evidenza" class="fp_newsbox-card     fp_newsbox-card--vertical"  >

   

    <div class="fp_newsbox-card__title">
        <div >
            Cosa c’è di vero nella storia dei 12 milioni di follower falsi di Chiara Ferragni
        </div>
            </div>
</a>                                                    
    
<a href="https://www.fanpage.it/milano/sono-pronta-a-chiarire-tutto-ma-solo-con-le-autorita-chiara-ferragni-sul-caso-pandoro-balocco/" data-anact="newsbox/link-in-evidenza" class="fp_newsbox-card     fp_newsbox-card--vertical"  >

   

    <div class="fp_newsbox-card__title">
        <div >
            &quot;Pronta a chiarire ma solo con le autorità&quot;: Ferragni sul caso Balocco
        </div>
            </div>
</a>                            </div>
                </div>
                                    <div class="fp_newsbox__links-wrap fp_newsbox__links-wrap--collapsed" >
                
                    <div class="fp_newsbox__story-btn-wrap fp_newsbox__story-btn-wrap--show-more">
                        

    <button class="fp_button fp_button--theme-light-grey fp_button--size-12 fp_button--rounded js_show-more-btn fp_button--show-more-big  " >
        <span>mostra altro</span>
        
            </button>


                    </div>

                                    <div class="fp_newsbox__story-btn-wrap fp_newsbox__story-btn-wrap--read-all">
                        

    <a href="https://www.fanpage.it/spettacolo/story/chiara-ferragni-e-fedez/"  target="_self" data-anact="newsbox/bottone-cta" class="fp_button fp_button--theme-light-grey  fp_button--rounded fp_button--show-more-big  "  >
        <span>leggi tutta la storia</span>
        
            </a>


                    </div>
                            </div>
        </div>
    </div>

      </div>

  
      <div class="follow-slider slider-placeholder" data-slider-name="closeup"></div>
  
      <div class="fp_single-article__leave-comment" id="commenta">
      <div class="fp_leave-comment">
  <div class="fp_comment" id="leave-comment">
    <div class="fb-comments" data-width="100%" data-href="https://www.fanpage.it/attualita/savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social/" data-colorscheme="light" data-numposts="6" data-lazy="1"></div>
  </div>
</div>    </div>
  
      
<!-- FANPLAYER-PLACEHOLDER-M -->
<div 
    id="cp_fanplayer--m-placeholder"
    class="ymv-fanplayer-wrap"
    data-nosnippet="true"
></div>    

<script type="text/javascript">
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var isMobile = window._fpIsMobile || windowWidth < 1024;
  var fanplayerConfig = {"channel":1,"ap":1,"pt":2,"hot":"0","n-parag":8,"site-page":"articolo_standard","site":"fanpage","categories":"www"};
  var fanplayerDeskPlaceholderId = 'cp_fanplayer--d-placeholder';
  var fanplayerMobilePlaceholderId = 'cp_fanplayer--m-placeholder';

  var insertFanplayer = function (config, className, style)
  {
    var deskPlaceholderContainer = document.createElement('div');
    deskPlaceholderContainer.className = 'fp_single-article__fanplayer';
    var deskPlaceholder = document.createElement('div');
    deskPlaceholder.id = 'fanplayer-placeholder';
    deskPlaceholder.classList.add('fp_fanplayer-wrapper');
    deskPlaceholderContainer.appendChild(deskPlaceholder);

    var mobilePlaceholderContainer = document.createElement('div');
    mobilePlaceholderContainer.className = 'fp_single-article__fanplayer';
    var mobilePlaceholder = document.createElement('div');
    mobilePlaceholder.id = 'fanplayer-placeholder-mobile';
    mobilePlaceholder.classList.add('fp_fanplayer-wrapper');
    mobilePlaceholderContainer.appendChild(mobilePlaceholder);
    
    var deskContainer = document.getElementById(fanplayerDeskPlaceholderId);
    var mobileContainer = document.getElementById(fanplayerMobilePlaceholderId);
    
    
    var fanplayer = document.createElement('div');
    fanplayer.className = className;

    if(style) {
      fanplayer.style = style;
    }

    fanplayer.setAttribute('data-nosnippet', 'true');
    for(var attributeName in config) {
      if(config.hasOwnProperty(attributeName)) {
        fanplayer.setAttribute('data-' + attributeName, config[attributeName]);
      }
    }

    if(!isMobile) {
      deskContainer.append(deskPlaceholderContainer)
      document.getElementById('fanplayer-placeholder').appendChild(fanplayer);
    }
    else{
      mobileContainer.append(mobilePlaceholderContainer)
      document.getElementById('fanplayer-placeholder-mobile').appendChild(fanplayer);
    }

    if(typeof window.YM !== 'undefined') {
      window.YM && window.YM.parse();
    }
  };
  
  window.domReadyCallbacks.push(function()
  {
    var className, style;
    if(!isMobile) {
      fanplayerConfig.anchorage = 'fp_sideplayer';
      fanplayerConfig['anchorage-stickycontainer-id'] = fanplayerDeskPlaceholderId;
      fanplayerConfig.volume = '50';
      className = 'ym-sideplayer';
      style = 'width:100%;height:280px';
    } else {
      fanplayerConfig.anchorage = 'fp2_mobile_fanplayer';
      fanplayerConfig['anchorage-stickycontainer-id'] = fanplayerMobilePlaceholderId;
      className = 'ym-embed';
      style = 'min-height:284px;height:284px;';
    }

    insertFanplayer(fanplayerConfig, className, style);
  });
</script>
  
  <div class="fp_banner">
  
  <picture class="fp_banner__cover">
    <source srcset="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/shared/autopromo_desk-tablet.png" media="(min-width: 480px)">
    <img alt="autopromo immagine" class="js-lazy" data-src="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/shared/autopromo_mobile.jpeg" src="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/shared/autopromo_mobile.jpeg" width="840" height="460" loading="lazy">
  </picture>

  <div class="fp_banner__content">
    <div class="fp_banner__tagline">Più che un giornale</div>
    <div class="fp_banner__text">Il media che racconta il tempo in cui viviamo con occhi moderni</div>

    <div class="fp_banner__social">
          
                        
    

    <a href="https://www.tiktok.com/@fanpage.it" title="icona tiktok"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-tiktok    "  aria-label=&quot;tiktok&quot; rel=&quot;noopener&quot;  >
         
          
<span class="fp_icon  fp_icon--color-fill-black fp_icon--color-stroke-  fp_icon--type-icon_tiktok">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_tiktok"  viewBox="0 0 40 40"> <g data-name="icon tiktok"> <path d="M33.59 15.94A1.12 1.12 0 0132.48 17h-.11a12.6 12.6 0 01-6-2.16v10.84a10 10 0 01-10 10 10 10 0 01-1.07-19.89 1.08 1.08 0 01.84.25 1.09 1.09 0 01.4.84v3.27a1.12 1.12 0 01-.93 1.11 4.5 4.5 0 00-3.67 5.2 4.48 4.48 0 001.84 2.92 4.41 4.41 0 003.36.75 4.49 4.49 0 003.74-4.44V5.46A1.12 1.12 0 0122 4.35h3.29a1.12 1.12 0 011.1 1 7.11 7.11 0 006.21 6.24 1.11 1.11 0 011 1.1z" data-name="Tracciato 27807" /> </g></svg>
  </span>
  
            </a>



    
                        
    

    <a href="https://www.instagram.com/fanpage.it/" title="icona instagram"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-instagram    "  aria-label=&quot;instagram&quot; rel=&quot;noopener&quot;  >
         
          
<span class="fp_icon  fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_instagram">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_instagram"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11540"> <g data-name="Raggruppa 9486"> <path d="M26.27 3h-12.5A10.79 10.79 0 003 13.78V26.2A10.79 10.79 0 0013.79 37h12.44A10.75 10.75 0 0037 26.29V13.8A10.78 10.78 0 0026.27 3zm-.06 31H13.79A7.82 7.82 0 016 26.22V13.8A7.82 7.82 0 0113.79 6h12.42A7.82 7.82 0 0134 13.8v12.42A7.82 7.82 0 0126.21 34z" data-name="Tracciato 26826" /> <path d="M20.07 12.17a7.9 7.9 0 107.93 7.9 7.9 7.9 0 00-7.89-7.9zm0 12.59a4.69 4.69 0 114.69-4.69 4.73 4.73 0 01-4.69 4.69z" data-name="Tracciato 26827" /> <circle cx="28.97" cy="11.09" r="2.02" data-name="Ellisse 303" /> </g> </g></svg>
  </span>
  
            </a>



    
                        
    

    <a href="https://www.youtube.com/user/FanpageMedia" title="icona youtube"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-youtube    "  aria-label=&quot;youtube&quot; rel=&quot;noopener&quot;  >
         
          
<span class="fp_icon  fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_youtube">
    <svg class="  fp_icon-symbol-icon_youtube fp_icon-symbol"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11534"> <path d="M31.94 8.06a93.56 93.56 0 00-23.88 0 4.41 4.41 0 00-2.76 3.28 55.53 55.53 0 00-.64 8.74 55.49 55.49 0 00.64 8.73 4.41 4.41 0 002.76 3.28 75.71 75.71 0 0011.94.77 75.71 75.71 0 0011.94-.77 4.39 4.39 0 002.76-3.28 55.49 55.49 0 00.64-8.73 55.53 55.53 0 00-.64-8.74 4.23 4.23 0 00-2.76-3.28zM17 25.54V14.61l8 5.47z" data-name="Tracciato 468" style="isolation: isolate" /> </g></svg>
  </span>
  
            </a>



    
    
    

    <a href="https://twitter.com/fanpage" title="icona x"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-x    "  aria-label=&quot;x&quot; rel=&quot;noopener&quot;  >
         
          
<span class="fp_icon  fp_icon--color-fill- fp_icon--color-stroke-  fp_icon--type-icon_x">
    <svg class="  fp_icon-symbol-icon_x" viewBox="0 0 20 20"> <g data-name="Raggruppa 54998" transform="translate(-1443 7797)" > <path  d="M6.988,5.081,11.359,0H10.323l-3.8,4.412L3.5,0H0L4.584,6.672,0,12H1.036L5.044,7.341,8.246,12h3.5ZM5.569,6.73,5.1,6.066,1.409.78H3L5.983,5.046l.464.664,3.877,5.545H8.733L5.569,6.731Z" transform="translate(1447 -7793)" /> </g></svg>
  </span>
  
            </a>



    
                        
    

    <a href="https://www.facebook.com/pages/fanpageit/169992733022409" title="icona facebook"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-facebook    "  aria-label=&quot;facebook&quot; rel=&quot;noopener&quot;  >
         
          
<span class="fp_icon  fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_facebook">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_facebook"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11538"> <path d="M16.82 11.93v4h-4.69v5.38h4.69V35.1h5.58V21.32H27l.68-5.38H22.4v-3.42c0-1.56.4-2.64 2.64-2.64h2.83V5.09a34.64 34.64 0 00-4.2-.2 6.37 6.37 0 00-6.86 5.85 5.91 5.91 0 00.01 1.19z" data-name="Tracciato 1734" /> </g></svg>
  </span>
  
            </a>



    
                        
    

    <a href="https://t.me/fanpageit_official" title="icona telegram"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-telegram    "  aria-label=&quot;telegram&quot; rel=&quot;noopener&quot;  >
         
          
<span class="fp_icon  fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_telegram">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_telegram"  viewBox="0 0 40 40"> <path d="M7.718 18.452L24.4 11.328c1.646-.742 7.23-3.116 7.23-3.116s2.57-1.04 2.358 1.484c-.072 1.038-.644 4.676-1.216 8.6l-1.79 11.65s-.144 1.706-1.362 2c-1.218.294-3.22-1.038-3.578-1.336-.286-.222-5.368-3.562-7.23-5.2a1.433 1.433 0 01.072-2.374c2.576-2.436 5.654-5.476 7.516-7.404.858-.89 1.718-2.968-1.86-.446l-10.094 7.05a4.076 4.076 0 01-3.292.074C9 21.642 6.5 20.752 6.5 20.752s-1.718-1.114 1.216-2.3h.002z" /></svg>
  </span>
  
            </a>



    </div>
  </div>
</div>

</div>

        </div>
      </div>

    
    <!-- END FOOTER -->
    
<footer>
  <div class="fp_footer">
    <div class="fp_footer__block fp_footer__block--1">
      <div class="fp_footer__list">
                    
                <a href="https://youmedia.fanpage.it/" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Youmedia
        </a>
                    
                <a href="https://www.fanpage.it/segnalazioni" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Segnalazioni
        </a>
                    
                <a href="https://www.fanpage.it/privacy-policy/" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Privacy Policy
        </a>
                    
                <a href="https://www.fanpage.it/cookie-policy/" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Cookie Policy
        </a>
                    
                <a href="https://www.fanpage.it/redazione" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Redazione
        </a>
                    
                <a href="javascript:_fpGDPR.configure();" data-anact="footer/link"  target="_self" rel="noreferrer" class="fp_footer__list-item"
        > Modifica consenso
        </a>
    </div>
    </div>

    <div class="fp_footer__block fp_footer__block--2">
      <div class="fp_footer__links">
    <a class="fp_footer__link-item fp_footer__link-item--notify js_gosettings" data-anact="footer/link" target="_blank" href="https://api.fanpage.it/user/notifications?utm_source=fanpage&amp;utm_medium=footer" data-umedium="footer" data-settingsurl="notifications">
                
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white   fp_icon--type-icon_belt_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_belt_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11575"> <g data-name="Raggruppa 11576"> <path d="M33.64 8c-.25-.29-.52-.58-.79-.85l.22-.32a4.43 4.43 0 00.44-3.41A4.57 4.57 0 0031.3.58a4.35 4.35 0 00-3.38-.41 4.47 4.47 0 00-2.73 2.08c-.07.12-.12.25-.17.34-.39-.09-.75-.17-1.18-.25-6.38-.85-10 3.86-13.29 8.1a37.39 37.39 0 01-3.38 4.05 5.6 5.6 0 01-2.85 1.1 5 5 0 00-4 3.05v.09A3.88 3.88 0 002 23.56l24.24 14a4 4 0 002 .52 3.63 3.63 0 002.92-1.38l.25-.25a4.85 4.85 0 00.56-4.9 5.49 5.49 0 01-.46-3 37.7 37.7 0 011.83-5.06c2-4.89 4.25-10.39.3-15.49zm-3.18 14.32a36.54 36.54 0 00-1.91 5.47l-.05.21a8.52 8.52 0 00.71 4.75 1.93 1.93 0 01-.12 1.75l-.14.1a1 1 0 01-1.18.25L3.54 20.93a1 1 0 01-.37-1.15v-.17a1.81 1.81 0 011.42-1 8.59 8.59 0 004.5-1.76l.17-.18A32 32 0 0013 12.3c2.89-3.75 5.84-7.56 10.5-7a11.56 11.56 0 012.2.7 1.57 1.57 0 001.47-.2 1.42 1.42 0 00.59-1.37 2 2 0 01.17-.64 1.73 1.73 0 01.91-.66 1.25 1.25 0 011.06.15 1.34 1.34 0 01.66.83 1.49 1.49 0 01-.15 1.13 1.35 1.35 0 01-.46.46 1.44 1.44 0 00-.89 1.2 1.63 1.63 0 00.57 1.37 11.88 11.88 0 011.62 1.55c2.83 3.72 1 8.18-.78 12.54z" data-name="Tracciato 26837" /> <path d="M6.84 29.42L6.29 31a6.71 6.71 0 003 8.08 6.59 6.59 0 003.38.93 6.68 6.68 0 005.11-2.45l1-1.23zm3.8 7.32a4.07 4.07 0 01-2-3.07l5.63 3.21a4 4 0 01-3.64-.14z" data-name="Tracciato 26838" /> </g> </g></svg>
  </span>
  
        <span>NOTIFICHE</span>
    </a>
    <a class="fp_footer__link-item fp_footer__link-item--settings js_gosettings" data-anact="footer/link" target="_blank" href="https://api.fanpage.it/user/settings?utm_source=fanpage&amp;utm_medium=footer" data-umedium="footer" data-settingsurl="settings">
                
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white   fp_icon--type-icon_settings_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_settings_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11573"> <g data-name="Raggruppa 11574"> <path d="M20 11.81a8.11 8.11 0 108.09 8.12A8.12 8.12 0 0020 11.81zM20 25a5.12 5.12 0 115.11-5.13A5.11 5.11 0 0120 25z" data-name="Tracciato 26835" /> <path d="M34.86 20.62v-1.14l1.4-1.27a3.7 3.7 0 001-4.16l-.78-1.92a3.71 3.71 0 00-3.62-2.29l-1.89.09-.75-.75.09-1.91A3.81 3.81 0 0028 3.59l-1.92-.79a3.71 3.71 0 00-4.18.91l-1.29 1.41h-1.25l-1.29-1.41a3.71 3.71 0 00-4.18-.91L12 3.59a3.83 3.83 0 00-2.31 3.68l.1 1.91-.79.75-1.9-.09a3.69 3.69 0 00-3.62 2.29l-.78 1.92a3.7 3.7 0 001 4.16l1.4 1.27v1.14l-1.37 1.25a3.71 3.71 0 00-1 4.2l.83 2a3.8 3.8 0 003.63 2.22l1.94-.1.75.77-.1 1.94a3.7 3.7 0 002.31 3.56l1.92.79a3.76 3.76 0 004.2-1l1.26-1.41h.93l1.27 1.41a3.78 3.78 0 002.76 1.25 4 4 0 001.44-.27l1.91-.79a3.72 3.72 0 002.31-3.56L30 30.94l.75-.77 1.94.1A3.79 3.79 0 0036.36 28l.83-2a3.71 3.71 0 00-.95-4.2zm-2.06 2l1.6 1.43a.82.82 0 01.18.88l-.83 1.92a.72.72 0 01-.75.49l-2.14-.12h-.14a2.54 2.54 0 00-1.69.69L27.93 29a2.37 2.37 0 00-.72 1.81l.12 2.19a.74.74 0 01-.49.79l-1.91.76a.8.8 0 01-.88-.23L22.6 32.7a2.32 2.32 0 00-1.75-.81h-1.67a2.32 2.32 0 00-1.75.81L16 34.27a.79.79 0 01-.88.23l-1.91-.76a.77.77 0 01-.51-.74l.12-2.12A2.36 2.36 0 0012.1 29L11 27.91a2.52 2.52 0 00-1.69-.69h-.14L7 27.34a.72.72 0 01-.75-.49l-.83-1.92a.82.82 0 01.18-.88l1.6-1.43a2.48 2.48 0 00.8-1.78v-1.57a2.58 2.58 0 00-.81-1.8L5.61 16a.79.79 0 01-.21-.88l.75-1.92a.81.81 0 01.79-.48l2.12.12a2.3 2.3 0 001.8-.7L12 11.06a2.39 2.39 0 00.71-1.82l-.11-2.15a.73.73 0 01.48-.75L15 5.53a.75.75 0 01.88.18l1.42 1.58a2.36 2.36 0 001.75.78H21a2.38 2.38 0 001.75-.78l1.45-1.58a.77.77 0 01.88-.18l1.92.81a.72.72 0 01.49.75l-.12 2.15a2.4 2.4 0 00.72 1.82l1.1 1.11a2.31 2.31 0 001.81.7l2.12-.12a.8.8 0 01.78.48l.75 1.92a.79.79 0 01-.21.88l-1.59 1.44a2.58 2.58 0 00-.81 1.8v1.57a2.56 2.56 0 00.78 1.77z" data-name="Tracciato 26836" /> </g> </g></svg>
  </span>
  
        <span>IMPOSTAZIONI</span>
    </a>
</div>
    </div>

    <div class="fp_footer__block fp_footer__block--3">
      <div class="fp_footer__identities">
    <div class="fp_footer__social-channels">
                        

    <a href="https://www.facebook.com/pages/fanpageit/169992733022409" title="icona facebook_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_facebook_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_facebook_small"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11536"> <path d="M17.48 13.59v3.19h-3.73v4.27h3.73V32h4.42V21.05h3.65l.54-4.27h-4.2v-2.72c0-1.24.31-2.1 2.1-2.1h2.25v-3.8A24.82 24.82 0 0022.9 8a5.06 5.06 0 00-5.44 4.66 4.73 4.73 0 00.02.93z" data-name="Tracciato 462" style="isolation: isolate" /> </g></svg>
  </span>
  
            </a>



                                

    <a href="https://www.instagram.com/fanpage.it/" title="icona instagram_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_instagram_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_instagram_small"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11535"> <g data-name="Raggruppa 2139"> <path d="M24.42 8h-8.81A7.6 7.6 0 008 15.59v8.76a7.52 7.52 0 002.21 5.39A7.64 7.64 0 0015.62 32h8.78a7.59 7.59 0 007.6-7.59v-8.8A7.61 7.61 0 0024.42 8zm0 21.88h-8.8a5.51 5.51 0 01-5.52-5.5v-8.76a5.52 5.52 0 015.52-5.52h8.76a5.52 5.52 0 015.52 5.51v8.76a5.51 5.51 0 01-5.51 5.51z" data-name="Tracciato 26826" /> <path d="M20.05 14.48a5.57 5.57 0 105.57 5.57 5.57 5.57 0 00-5.57-5.57zm0 8.87a3.31 3.31 0 113.31-3.3 3.32 3.32 0 01-3.31 3.3z" data-name="Tracciato 26827" /> <circle cx="26.32" cy="13.72" r="1.42" data-name="Ellisse 303" /> </g> </g></svg>
  </span>
  
            </a>



                                

    <a href="https://twitter.com/fanpage" title="icona x_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_x_small">
    <svg class="  fp_icon-symbol-icon_x_small" viewBox="0 0 20 20"> <g data-name="Raggruppa 54998" transform="translate(-1443 7797)" > <path  d="M6.988,5.081,11.359,0H10.323l-3.8,4.412L3.5,0H0L4.584,6.672,0,12H1.036L5.044,7.341,8.246,12h3.5L6.988,5.081ZM5.569,6.73,5.1,6.066,1.409.78H3L5.983,5.046l.464.664,3.877,5.545H8.733L5.569,6.731Z" transform="translate(1447 -7793)" /> </g></svg>
  </span>
  
            </a>



                                

    <a href="https://www.youtube.com/user/FanpageMedia" title="icona youtube_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_youtube_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_youtube_small"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11534"> <path d="M29.34 10.6a73 73 0 00-18.68 0 3.48 3.48 0 00-2.16 2.57A44.57 44.57 0 008 20a44.7 44.7 0 00.5 6.84 3.43 3.43 0 002.16 2.56A58.39 58.39 0 0020 30a58.39 58.39 0 009.34-.6 3.43 3.43 0 002.16-2.56A44.7 44.7 0 0032 20a44.57 44.57 0 00-.5-6.83 3.33 3.33 0 00-2.16-2.57zM17.63 24.28v-8.55L23.88 20z" data-name="Tracciato 468" style="isolation: isolate" /> </g></svg>
  </span>
  
            </a>



                                

    <a href="https://t.me/fanpageit_official" title="icona telegram_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_telegram_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_telegram_small"  viewBox="0 0 40 40"> <path d="M7.718 18.452L24.4 11.328c1.646-.742 7.23-3.116 7.23-3.116s2.57-1.04 2.358 1.484c-.072 1.038-.644 4.676-1.216 8.6l-1.79 11.65s-.144 1.706-1.362 2c-1.218.294-3.22-1.038-3.578-1.336-.286-.222-5.368-3.562-7.23-5.2a1.433 1.433 0 01.072-2.374c2.576-2.436 5.654-5.476 7.516-7.404.858-.89 1.718-2.968-1.86-.446l-10.094 7.05a4.076 4.076 0 01-3.292.074C9 21.642 6.5 20.752 6.5 20.752s-1.718-1.114 1.216-2.3h.002z" /></svg>
  </span>
  
            </a>



            </div>
    <a href="https://www.fanpage.it" data-anact="footer/logo" class="fp_footer__brand-logo fp_footer__brand-logo--fanpage" aria-label="Fanpage">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.903 35.568">
    <g fill="#fff" data-name="Raggruppa 1533">
      <path d="M11.737 4.227h-1.383a3.694 3.694 0 0 0-1.941.353 1.846 1.846 0 0 0-.589 1.618V8.08h3.324v4.03H7.824v12.708h2.118v4.03H.824v-4.059h2V12.081H0v-4.03h2.794V5.462a11.192 11.192 0 0 1 .265-3.118A2.749 2.749 0 0 1 4.589.638a9.361 9.361 0 0 1 4-.618 15.756 15.756 0 0 1 3.118.265v3.942h.029Z" data-name="Tracciato 32"/>
      <path d="M31.357 28.538h-6.325v-2.442a13.126 13.126 0 0 1-2.118 1.706 5.944 5.944 0 0 1-1.912.882 8.476 8.476 0 0 1-2.294.324 7.712 7.712 0 0 1-3.706-.853 6.723 6.723 0 0 1-2.618-2.353 5.893 5.893 0 0 1-.941-3.295 5.387 5.387 0 0 1 1.824-4.236 10.263 10.263 0 0 1 4.5-2.118 72.082 72.082 0 0 1 7.089-.971 8.652 8.652 0 0 0-.353-2.471 1.97 1.97 0 0 0-1.152-1.176 6.2 6.2 0 0 0-2.324-.353 3.925 3.925 0 0 0-2.589.853 3.2 3.2 0 0 0-1.118 2.324l-5-.147a6.838 6.838 0 0 1 1.235-3.589 6.923 6.923 0 0 1 2.971-2.383 10.362 10.362 0 0 1 4.236-.824 9.931 9.931 0 0 1 6.56 1.883 6.628 6.628 0 0 1 2.27 5.384v9.854h1.794Zm-6.589-7.766v-2a41.187 41.187 0 0 0-4.471.588 5.9 5.9 0 0 0-2.589 1.059 2.754 2.754 0 0 0-.353 3.883l.353.353a3.915 3.915 0 0 0 2.471.765 4.665 4.665 0 0 0 4-2.294 4.984 4.984 0 0 0 .588-2.353" data-name="Tracciato 33"/>
      <path d="M53.579 28.368h-6.942V14.779a2.75 2.75 0 0 0-3.059-3.036 4.065 4.065 0 0 0-2.294.723 4.956 4.956 0 0 0-1.706 1.937 5.427 5.427 0 0 0-.647 2.515v7.517h1.912v3.963h-8.884v-3.962H33.9V11.975h-1.941V8.043h7v2.6a15.1 15.1 0 0 1 2.677-2.226 7.486 7.486 0 0 1 6.913 0 6.146 6.146 0 0 1 2.294 2.2 5.656 5.656 0 0 1 .824 3.065v10.816h1.883v3.961Z" data-name="Tracciato 34"/>
      <path d="M75.638 18.129a13.868 13.868 0 0 1-.677 4.236 10.906 10.906 0 0 1-1.883 3.442 8.461 8.461 0 0 1-2.853 2.236 8.275 8.275 0 0 1-3.559.794 8.7 8.7 0 0 1-2.118-.265 6.723 6.723 0 0 1-1.912-.912 11.673 11.673 0 0 1-1.912-1.706v5.06h2v4.03h-8.912v-4.03h1.824v-19.3h-1.824v-4.03h6.942v2.118a8.3 8.3 0 0 1 9.648-1.883 8.25 8.25 0 0 1 2.794 2.236 10.767 10.767 0 0 1 1.824 3.5 16.561 16.561 0 0 1 .618 4.474m-5.326 0a10.045 10.045 0 0 0-.588-3.618 5.189 5.189 0 0 0-1.677-2.353 4.22 4.22 0 0 0-2.589-.794 4.439 4.439 0 0 0-3.265 1.5 4.507 4.507 0 0 0-1.118 1.912 12.578 12.578 0 0 0-.324 3.148 12.9 12.9 0 0 0 .327 3.205 4.587 4.587 0 0 0 1.177 2.118 4.369 4.369 0 0 0 3.177 1.412 4.108 4.108 0 0 0 2.53-.794 4.941 4.941 0 0 0 1.677-2.265 9.432 9.432 0 0 0 .646-3.471Z" data-name="Tracciato 35"/>
      <path d="M96.346 28.537h-6.324v-2.44a13.129 13.129 0 0 1-2.118 1.706 5.944 5.944 0 0 1-1.912.882 9.012 9.012 0 0 1-6-.588 6.723 6.723 0 0 1-2.618-2.353 5.893 5.893 0 0 1-.941-3.295 5.386 5.386 0 0 1 1.824-4.236 10.263 10.263 0 0 1 4.5-2.118 72.082 72.082 0 0 1 7.089-.971 8.652 8.652 0 0 0-.353-2.471 1.913 1.913 0 0 0-1.059-1.177 6.2 6.2 0 0 0-2.324-.353 3.925 3.925 0 0 0-2.588.853 3.107 3.107 0 0 0-1.088 2.294l-5.059-.118a6.838 6.838 0 0 1 1.235-3.589 7.032 7.032 0 0 1 2.971-2.353 10.362 10.362 0 0 1 4.236-.824 10.1 10.1 0 0 1 6.56 1.883 6.625 6.625 0 0 1 2.236 5.413v9.855h1.794v4.03Zm-6.589-7.766v-2a41.186 41.186 0 0 0-4.471.588 5.9 5.9 0 0 0-2.589 1.059 2.754 2.754 0 0 0-.353 3.883l.353.353a3.915 3.915 0 0 0 2.471.765 4.609 4.609 0 0 0 2.324-.647 4.426 4.426 0 0 0 1.647-1.647 4.159 4.159 0 0 0 .618-2.353" data-name="Tracciato 36"/>
      <path d="M117.88 11.719h-1.824v15.912a7.133 7.133 0 0 1-4.5 6.972 14.167 14.167 0 0 1-5.295.941 10.519 10.519 0 0 1-7.06-2.118 6.289 6.289 0 0 1-1.471-1.707 14.357 14.357 0 0 1-1.088-2.824h4.971a3.879 3.879 0 0 0 1.618 2.118 6.611 6.611 0 0 0 6.442-.412 3.362 3.362 0 0 0 1.353-2.795v-3.382a10.021 10.021 0 0 1-1.353 1.383 7.11 7.11 0 0 1-2.118 1.177 8.04 8.04 0 0 1-2.883.5 7.558 7.558 0 0 1-4.232-1.295 8.588 8.588 0 0 1-2.941-3.677 12.229 12.229 0 0 1-1.059-5.207 12.3 12.3 0 0 1 1.088-5.236 8.436 8.436 0 0 1 3.059-3.589 8.148 8.148 0 0 1 4.5-1.265 6.692 6.692 0 0 1 2.824.618 12.92 12.92 0 0 1 3.059 2.118V7.719h6.942v4h-.029Zm-6.913 5.619a7.3 7.3 0 0 0-.588-2.942 5.114 5.114 0 0 0-1.588-2.118 3.665 3.665 0 0 0-2.265-.735 4.642 4.642 0 0 0-4.236 2.765 7.207 7.207 0 0 0-.618 3.118 8.392 8.392 0 0 0 .529 3.177 4 4 0 0 0 4.03 2.647 4.135 4.135 0 0 0 2.471-.735 4.806 4.806 0 0 0 1.706-2.118 7.273 7.273 0 0 0 .588-3.059Z" data-name="Tracciato 37"/>
      <path d="M138.225 19.184h-14.8a5.983 5.983 0 0 0 1.912 4.56 5.355 5.355 0 0 0 2.971 1.059 4.265 4.265 0 0 0 4.236-3.059h5.353a8.691 8.691 0 0 1-5.177 6.354 10.807 10.807 0 0 1-4.412.941 10.29 10.29 0 0 1-3.971-.794 9.492 9.492 0 0 1-3.206-2.265 10.035 10.035 0 0 1-2.118-3.471 12.336 12.336 0 0 1 .029-8.472 10.675 10.675 0 0 1 2.118-3.442 9.165 9.165 0 0 1 3.118-2.5 9.486 9.486 0 0 1 4.03-.794 9.286 9.286 0 0 1 4.53 1.088 9.146 9.146 0 0 1 3.412 3.118 10.673 10.673 0 0 1 1.618 3.648 30.616 30.616 0 0 1 .353 4.03m-5.707-3.53a4.759 4.759 0 0 0-1.383-3 4.223 4.223 0 0 0-2.971-1.03 4.379 4.379 0 0 0-2 .5 4.786 4.786 0 0 0-1.588 1.383 6.367 6.367 0 0 0-1 2.118h8.913v.029Z" data-name="Tracciato 38"/>
      <path d="M140.636 26.006h2.118v2.118h-2.118z" data-name="Rettangolo 86"/>
      <path d="M149.284 28.17h-4.236v-1.592h1.206v-6.942h-1.265v-1.56h3.147v8.472h1.147Zm-1.147-11.678h-2.118V14.37h2.118Z" data-name="Tracciato 39"/>
      <path d="M155.756 28.191h-1.559a3.169 3.169 0 0 1-2.118-.5 2.108 2.108 0 0 1-.647-1.618v-6.442h-1.265v-1.588h1.353v-2.942h2.118v2.942h2.118v1.618h-2.118v5.824a1.452 1.452 0 0 0 .147.706 1.149 1.149 0 0 0 .5.412 2.287 2.287 0 0 0 .883.118h.735v1.53Z" data-name="Tracciato 40"/>
    </g>
  </svg>
    </a>
</div>
    </div>

    <div class="fp_footer__block fp_footer__block--4">
      <div class="fp_footer__contacts-box">
    <div class="fp_footer__contacts-description">Per inviarci segnalazioni, foto e video puoi contattarci tramite:</div>
    <div class="fp_footer__contacts-buttons">
        <a href="mailto:segnalazioni@fanpage.it" target="_blank" class="fp_footer__button-item fp_footer__button-item--mail"
        >
                        
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white   fp_icon--type-icon_mail_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_mail_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 4817"> <path d="M32.07 10H7.93a1.84 1.84 0 00-1.8 1.86v16.3A1.84 1.84 0 007.94 30h24.13a1.84 1.84 0 001.8-1.86v-16.3a1.84 1.84 0 00-1.8-1.84zm-2 2.41L20.17 22a.5.5 0 01-.38 0c-.45-.52-2.32-2.34-9.82-9.58zM8.51 14.29l6.09 5.9-6.09 5.86zm1.79 13.3l6-5.76 2 1.9a2.44 2.44 0 003.48 0l2-1.92 6 5.76zm21.21-1.54l-6.09-5.86 6.09-5.9z" data-name="Tracciato 26829" /> </g></svg>
  </span>
  
            <span>MAIL</span>
        </a>
        <a href="https://m.me/169992733022409" target="_blank" rel="noreferrer" class="fp_footer__button-item fp_footer__button-item--messenger"
        >
                        
<span class="fp_icon fp_icon--size-14x14 fp_icon--color-fill-white   fp_icon--type-icon_messenger">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_messenger"  viewBox="0 0 40 40"> <g data-name="icon messenger"> <path d="M20 .26C9 .26 0 8.44 0 18.53a17.67 17.67 0 007.43 14.21v7L14.25 36a21.47 21.47 0 005.75.76c11 0 20-8.17 20-18.26S31.05.26 20 .26zm2.11 24.5l-5.18-5.25L7 24.89l10.89-11.32 5.17 5.26 10-5.39z" data-name="Tracciato 27788" /> </g></svg>
  </span>
  
            <span>FACEBOOK</span>
        </a>
    </div>
</div>    </div>

    <div class="fp_footer__block fp_footer__block--5">
      <div class="fp_footer__pie">
            <div class="fp_footer__pie-paragraph">Fanpage.it è una testata giornalistica registrata presso il Tribunale di Napoli n. 57 del 26/07/2011.</div>
            <div class="fp_footer__pie-paragraph">Ove non espressamente indicato, tutti i diritti di sfruttamento ed utilizzazione economica del materiale fotografico presente sul sito Fanpage.it sono da intendersi di proprietà dei fornitori, LaPresse e Getty Images.</div>
    </div>    </div>

    <div class="fp_footer__block fp_footer__block--6">
      <div class="fp_footer__apps">
    <div class="fp_footer__apps-badges">
                    <a
                href="http://fanpa.ge/fanpage_ios"
                target="_blank"
                class="fp_footer__badge-item fp_footer__badge-item--app-store" rel="noreferrer" aria-label="AppStore"
            >
              

<img  loading="lazy"  src="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/shared/logo-apple.svg"   class="" alt="Immagine"  width="111"  height="29" />
            </a>
                            <a
                href="http://fanpa.ge/fanpage_android"
                target="_blank"
                class="fp_footer__badge-item fp_footer__badge-item--google-play" rel="noreferrer" aria-label="Google Play"
            >
              

<img  loading="lazy"  src="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/shared/logo-google.svg"   class="" alt="Immagine"  width="115"  height="26" />
            </a>
            </div>
    <div class="fp_footer__bottom-logo">
      <a href="https://www.ciaopeople.it" target="_blank" class="fp_footer__apps-by" rel="noreferrer" aria-label="Ciaopeople">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="24" viewBox="0 0 136 34" fill="#FF4900">
          <path  d="M88.24,34V16.665h3.1v.988a5.578,5.578,0,0,1,3.4-1.307,6.66,6.66,0,0,1,4.659,2,6.464,6.464,0,0,1,1.844,4.666,6.584,6.584,0,0,1-6.5,6.667,5.527,5.527,0,0,1-3.4-1.307V34Zm3.1-12.31c-.032.1-.066.217-.1.318v.017c-.016.1-.05.2-.066.3,0,.032-.016.066-.016.1a1.015,1.015,0,0,0-.032.234,3.778,3.778,0,0,0,0,.7,1.316,1.316,0,0,0,.032.234c0,.034.016.067.016.1a1.973,1.973,0,0,0,.066.3v.017c.032.118.066.217.1.318a3.65,3.65,0,0,0,3.4,2.412,3.736,3.736,0,0,0,0-7.47,3.65,3.65,0,0,0-3.4,2.42ZM46.1,34V16.665H49.2v.988a5.585,5.585,0,0,1,3.4-1.307,6.668,6.668,0,0,1,0,13.332,5.527,5.527,0,0,1-3.4-1.307V34ZM49.2,21.656c-.032.1-.066.217-.1.318v.017c-.016.1-.05.2-.066.3a.124.124,0,0,0-.016.083,1.458,1.458,0,0,0-.031.252,2.505,2.505,0,0,0-.016.35v.034a2.517,2.517,0,0,0,.016.352,1.423,1.423,0,0,0,.031.251.745.745,0,0,1,.016.084,1.976,1.976,0,0,0,.066.3v.017c.032.118.066.217.1.318a3.65,3.65,0,0,0,3.4,2.412,3.753,3.753,0,0,0,0-7.5,3.65,3.65,0,0,0-3.4,2.412ZM61.835,27.82A6.484,6.484,0,0,1,60.008,23.1a6.664,6.664,0,0,1,1.827-4.823,6.013,6.013,0,0,1,4.576-1.926,6.32,6.32,0,0,1,4.77,1.926,7.055,7.055,0,0,1,1.827,5.074l-.016.6H63.012a3.387,3.387,0,0,0,3.56,2.953,4.071,4.071,0,0,0,2.99-1.256L72.177,26.9a6.159,6.159,0,0,1-2.351,2.11,7.257,7.257,0,0,1-3.248.687,6.331,6.331,0,0,1-4.743-1.877Zm2.451-8.02a4.013,4.013,0,0,0-1.145,1.64H69.89a3.123,3.123,0,0,0-1.21-1.724,3.413,3.413,0,0,0-2.108-.67,3.648,3.648,0,0,0-2.287.754ZM17.749,23.029a6.582,6.582,0,0,1,6.508-6.666,5.514,5.514,0,0,1,3.4,1.307v-.988h3.1v12.7H27.647v-.988a5.587,5.587,0,0,1-3.39,1.306,6.584,6.584,0,0,1-6.5-6.671Zm2.86-.017a3.692,3.692,0,0,0,3.648,3.735,3.64,3.64,0,0,0,3.4-2.378c.032-.1.066-.217.1-.318v-.017c.016-.1.05-.2.066-.3,0-.034.016-.067.016-.1a.986.986,0,0,0,.032-.234,2.517,2.517,0,0,0,.016-.352v-.034a2.506,2.506,0,0,0-.016-.35,1.351,1.351,0,0,0-.032-.236c0-.034-.016-.067-.016-.1a1.94,1.94,0,0,0-.066-.3v-.017c-.032-.118-.066-.219-.1-.318a3.65,3.65,0,0,0-3.4-2.415,3.692,3.692,0,0,0-3.645,3.734ZM0,22.761a6.662,6.662,0,0,1,6.355-6.414,6.5,6.5,0,0,1,5.785,3.333L9.629,21.1a3.611,3.611,0,0,0-3.12-1.81,3.766,3.766,0,0,0-2.86,1.417,3.681,3.681,0,1,0,5.929,4.332L11.951,26.7a6.484,6.484,0,0,1-5.441,3,6.7,6.7,0,0,1-4.752-2.106A6.5,6.5,0,0,1,0,22.761ZM108.337,27.8a6.484,6.484,0,0,1-1.827-4.724,6.664,6.664,0,0,1,1.827-4.823,6.013,6.013,0,0,1,4.576-1.926,6.32,6.32,0,0,1,4.755,1.926,7.053,7.053,0,0,1,1.827,5.074l-.016.6H109.5a3.387,3.387,0,0,0,3.562,2.949,4.075,4.075,0,0,0,2.992-1.256l2.614,1.256a6.022,6.022,0,0,1-2.334,2.11,7.264,7.264,0,0,1-3.248.687,6.333,6.333,0,0,1-4.744-1.873Zm2.451-8a4.012,4.012,0,0,0-1.144,1.64h6.747a3.123,3.123,0,0,0-1.21-1.724,3.41,3.41,0,0,0-2.108-.67,3.652,3.652,0,0,0-2.287.754ZM74.122,23.012a6.39,6.39,0,0,1,3.184-5.741,6.591,6.591,0,0,1,6.64,0,6.39,6.39,0,0,1,3.184,5.741,6.39,6.39,0,0,1-3.184,5.741,6.591,6.591,0,0,1-6.64,0,6.39,6.39,0,0,1-3.184-5.741Zm2.859,0a3.646,3.646,0,1,0,3.645-3.735,3.693,3.693,0,0,0-3.646,3.735Zm-45.016,0a6.39,6.39,0,0,1,3.184-5.741,6.591,6.591,0,0,1,6.64,0,6.39,6.39,0,0,1,3.184,5.741,6.39,6.39,0,0,1-3.184,5.741,6.591,6.591,0,0,1-6.64,0,6.39,6.39,0,0,1-3.184-5.741Zm2.86,0a3.646,3.646,0,1,0,3.641-3.735,3.692,3.692,0,0,0-3.644,3.735ZM13.453,29.377v-12.7h3.1v12.7Zm88.821-.017V11.775h3.106V29.361Zm20.49-8.476a1.708,1.708,0,0,1,.115-2.4l1.878-1.91a9.255,9.255,0,0,1-6.338-2.445A8.177,8.177,0,0,1,116.179,8.3a8.15,8.15,0,0,1,2.239-5.828C120.573.3,123.5,0,126.082,0s5.506.3,7.664,2.479a8.21,8.21,0,0,1,2.241,5.828,8.231,8.231,0,0,1-2.233,5.828,7.808,7.808,0,0,1-3.958,2.127l-4.562,4.623a.767.767,0,0,1-.115.118,1.627,1.627,0,0,1-1.116.44,1.672,1.672,0,0,1-1.233-.558ZM120.836,4.771a4.985,4.985,0,0,0-1.357,3.535,4.93,4.93,0,0,0,1.357,3.535c1.29,1.322,3.654,1.49,5.227,1.49s3.922-.168,5.213-1.49a4.929,4.929,0,0,0,1.361-3.534,4.958,4.958,0,0,0-1.356-3.535c-1.308-1.3-3.645-1.49-5.213-1.49s-3.941.168-5.23,1.491Zm5.669,3.385a1.7,1.7,0,0,1,.854-1.513,1.755,1.755,0,0,1,1.757,0,1.767,1.767,0,0,1,0,3.025,1.755,1.755,0,0,1-1.757,0A1.7,1.7,0,0,1,126.505,8.156Zm-4.413,0a1.7,1.7,0,0,1,.849-1.528,1.756,1.756,0,0,1,1.768,0,1.7,1.7,0,0,1,.849,1.528,1.7,1.7,0,0,1-.849,1.528,1.756,1.756,0,0,1-1.768,0,1.7,1.7,0,0,1-.849-1.528Z" transform="translate(0.011)"/>
        </svg>
      </a>
    </div>
</div>
    </div>
  </div>
</footer>

              </div>
      
      <!-- BURGER-MENU -->
      
<div class="fp_burger-menu" data-anpos="burger">
  <div class="fp_burger-menu__content">
    <div class="fp_burger-menu__head">
  <div class="fp_burger-menu__btn-close js_close-burger">
        
<span class="fp_icon     fp_icon--type-icon_close">
    <svg class="fp_icon-close fp_icon-symbol fp_icon-symbol-icon_close"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11582"> <path d="M4.52 37.5a1.69 1.69 0 01-1.69-1.69 1.65 1.65 0 01.49-1.19l14.3-14.45L3 5.38A1.69 1.69 0 015.4 3L20 17.75 34.6 3A1.69 1.69 0 0137 5.38L22.38 20.17l14.3 14.45A1.69 1.69 0 0134.27 37L20 22.58 5.73 37a1.7 1.7 0 01-1.21.5z" data-name="Tracciato 27723" /> </g></svg>
  </span>
  
  </div>
  <div class="fp_burger-menu__notification js_notification-cta">
        
<span class="fp_icon     fp_icon--type-icon_belt_outline">
    <svg class="fp_icon-bell fp_icon-symbol fp_icon-symbol-icon_belt_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11575"> <g data-name="Raggruppa 11576"> <path d="M33.64 8c-.25-.29-.52-.58-.79-.85l.22-.32a4.43 4.43 0 00.44-3.41A4.57 4.57 0 0031.3.58a4.35 4.35 0 00-3.38-.41 4.47 4.47 0 00-2.73 2.08c-.07.12-.12.25-.17.34-.39-.09-.75-.17-1.18-.25-6.38-.85-10 3.86-13.29 8.1a37.39 37.39 0 01-3.38 4.05 5.6 5.6 0 01-2.85 1.1 5 5 0 00-4 3.05v.09A3.88 3.88 0 002 23.56l24.24 14a4 4 0 002 .52 3.63 3.63 0 002.92-1.38l.25-.25a4.85 4.85 0 00.56-4.9 5.49 5.49 0 01-.46-3 37.7 37.7 0 011.83-5.06c2-4.89 4.25-10.39.3-15.49zm-3.18 14.32a36.54 36.54 0 00-1.91 5.47l-.05.21a8.52 8.52 0 00.71 4.75 1.93 1.93 0 01-.12 1.75l-.14.1a1 1 0 01-1.18.25L3.54 20.93a1 1 0 01-.37-1.15v-.17a1.81 1.81 0 011.42-1 8.59 8.59 0 004.5-1.76l.17-.18A32 32 0 0013 12.3c2.89-3.75 5.84-7.56 10.5-7a11.56 11.56 0 012.2.7 1.57 1.57 0 001.47-.2 1.42 1.42 0 00.59-1.37 2 2 0 01.17-.64 1.73 1.73 0 01.91-.66 1.25 1.25 0 011.06.15 1.34 1.34 0 01.66.83 1.49 1.49 0 01-.15 1.13 1.35 1.35 0 01-.46.46 1.44 1.44 0 00-.89 1.2 1.63 1.63 0 00.57 1.37 11.88 11.88 0 011.62 1.55c2.83 3.72 1 8.18-.78 12.54z" data-name="Tracciato 26837" /> <path d="M6.84 29.42L6.29 31a6.71 6.71 0 003 8.08 6.59 6.59 0 003.38.93 6.68 6.68 0 005.11-2.45l1-1.23zm3.8 7.32a4.07 4.07 0 01-2-3.07l5.63 3.21a4 4 0 01-3.64-.14z" data-name="Tracciato 26838" /> </g> </g></svg>
  </span>
  
    <a class="fp_burger-menu__notification-label js_gosettings" href="https://api.fanpage.it/user/login?utm_source=fanpage&amp;utm_medium=burger" target="_blank" data-umedium="burger" data-settingsurl="notifications">
      Notifiche
          
    </a>
    <span class="fp_burger-menu__notification-count is-hidden"></span>
  </div>
  <div class="fp_burger-menu__profile">
    
        
    <a href="https://api.fanpage.it/user/login?utm_source=fanpage&amp;utm_medium=burger" title="icona person"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey  js_gosettings  fp_button__icon--login js_login-cta"     data-umedium="burger" data-settingsurl="login" >
                    <span class="fp_button__icon-img-wrap">
                <span class="fp_button__icon-img-content"></span>
            </span>
                          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white   fp_icon--type-icon_person">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_person"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11680"> <g data-name="Raggruppa 9003"> <g data-name="Raggruppa 4081"> <g data-name="Tracciato 7603"> <path d="M23.65.79a10.13 10.13 0 00-11 2.13 10 10 0 00-2.23 10.94 10.16 10.16 0 005.5 5.45A10 10 0 1023.65.79zM17 16.47a7.06 7.06 0 01-4.34-6.4v-.36A7 7 0 0117 3.58a7.08 7.08 0 017.73 1.48 6.92 6.92 0 011.55 7.63A7.06 7.06 0 0117 16.47z" data-name="Tracciato 27795" /> </g> <g data-name="Tracciato 7604"> <path d="M36.15 33.79c-3.14-7.4-9.31-12-16.15-12a17.92 17.92 0 00-16.15 12v.05A4.5 4.5 0 004.27 38 4.58 4.58 0 008 40h24a4.56 4.56 0 003.75-2 4.46 4.46 0 00.4-4.21zm-2.89 2.55A1.4 1.4 0 0132 37H8a1.32 1.32 0 01-1.16-.64A1.41 1.41 0 016.67 35a15.11 15.11 0 0113-10.17H20c5.6 0 10.71 3.9 13.36 10.17a1.54 1.54 0 01-.11 1.37z" data-name="Tracciato 27796" /> </g> </g> </g> </g></svg>
  </span>
  
            </a>



    <a class="fp_burger-menu__profile-link js_gosettings" data-umedium="burger" data-settingsurl="login" href="https://api.fanpage.it/user/login?utm_source=fanpage&amp;utm_medium=burger" target="_blank">
      Effettua il 
            
      <strong>
        Login
              
      </strong>
    </a>
  </div>
</div>
    <div class="fp_burger-menu__search-container">
  <form class="fp_burger-menu__search-form" action="https://www.fanpage.it">
    <input class="fp_burger-menu__search-input" name="s" placeholder="Cerca" type="text">
            
<span class="fp_icon     fp_icon--type-icon_search">
    <svg class="fp_icon-search fp_icon-symbol fp_icon-symbol-icon_search"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11544"> <g data-name="Raggruppa 11509"> <g data-name="Tracciato 457"> <path d="M37.05 35.81a1.18 1.18 0 00-.36-.85l-9.51-9.38.1-.11a13.79 13.79 0 10-1.93 1.9l.11-.09 9.54 9.4a1.2 1.2 0 00.86.34 1.07 1.07 0 00.85-.36 1.18 1.18 0 00.34-.85zM16.68 28a11.11 11.11 0 01-2.87-.35 11.35 11.35 0 01-8.45-10.92 11 11 0 01.37-2.92A11.31 11.31 0 1116.68 28z" data-name="Tracciato 12" /> </g> </g> </g></svg>
  </span>
  
    </form>
  </div>
            <div class="fp_burger-menu__cities">
            <ul>
            <li><a data-anact="menu/locali" href="https://www.fanpage.it/roma/">Roma</a></li>
            <li><a data-anact="menu/locali" href="https://www.fanpage.it/milano/">Milano</a></li>
            <li><a data-anact="menu/locali" href="https://www.fanpage.it/napoli/">Napoli</a></li>
          </ul>
        
</div>
<div class="fp_burger-menu__areas-category">
  <a class="fp_burger-menu__areas-category-label fp_burger-menu__areas-category-label--area-news" href="https://www.fanpage.it" data-anact="menu/sezione">Attualità</a>
  <ul id="menu-attualita-1" class="menu"><li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043394"><a href="https://www.fanpage.it/attualita/violenza-italia/" data-anact="menu/sezione">Cronaca nera</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043399"><a href="https://www.fanpage.it/attualita/meteo-news/" data-anact="menu/sezione">Meteo</a></li>
<li class="menu-item menu-item-type-story menu-item-object-cambiamento-climatico menu-item-1865727"><a href="https://www.fanpage.it/story/cambiamento-climatico/" data-anact="menu/sezione">Cambiamenti climatici</a></li>
<li class="menu-item menu-item-type-story menu-item-object-emergenza-lavoro menu-item-has-children menu-item-1657644"><a href="https://www.fanpage.it/story/emergenza-lavoro/" data-anact="menu/sezione">Emergenza lavoro</a></li>
<li id="menu-item-1043400" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043400"><a href="https://www.fanpage.it/attualita/terremoti/" data-anact="menu/sezione">Terremoti in Italia</a></li>
<li id="menu-item-1043402" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1043402"><a href="https://www.fanpage.it/story/testimoni-di-geova-il-lato-oscuro-della-fede/" data-anact="menu/sezione">Testimoni di Geova</a></li>
<li id="menu-item-1043403" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1043403"><a href="https://www.fanpage.it/story/divisi-alla-nascita-mamme-e-figli-che-si-cercano/" data-anact="menu/sezione">Divisi alla nascita</a></li>
<li id="menu-item-1043404" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043404"><a href="https://www.fanpage.it/attualita/dottor-cannabis/" data-anact="menu/sezione">Dottor Cannabis</a></li>
<li id="menu-item-1043405" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043405"><a href="https://www.fanpage.it/attualita/la-stanza-di-iacopo/" data-anact="menu/sezione">La stanza di Iacopo</a></li>
<li id="menu-item-1043406" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043406"><a href="https://www.fanpage.it/attualita/violenza-italia/profondo-giallo/" data-anact="menu/sezione">Profondo Giallo</a></li>
<li id="menu-item-1043407" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1043407"><a href="https://www.fanpage.it/story/preti-pedofili/" data-anact="menu/sezione">Sacri Abusi</a></li>
<li id="menu-item-1043398" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043398"><a href="https://www.fanpage.it/attualita/incidenti-stradali/" data-anact="menu/sezione">Traffico e viabilità</a></li>
</ul>
</div>
<div class="fp_burger-menu__areas">
  <ul id="menu-homepage" class="menu"><li id="menu-item-1043321" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-1043321"><a href="https://www.fanpage.it/attualita/" data-anact="menu/principale">Attualità</a></li>
<li id="menu-item-1043322" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1043322"><a href="https://www.fanpage.it/politica/" data-anact="menu/principale">Politica</a></li>
<li id="menu-item-1043327" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1043327"><a href="https://www.fanpage.it/spettacolo/" data-anact="menu/principale">Spettacolo</a></li>
<li id="menu-item-1043329" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1043329"><a href="https://www.fanpage.it/sport/" data-anact="menu/principale">Sport</a></li>
<li id="menu-item-1043330" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1043330"><a href="https://www.fanpage.it/innovazione/" data-anact="menu/principale">Innovazione</a></li>
<li id="menu-item-1725607" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1725607"><a href="https://www.fanpage.it/cultura/" data-anact="menu/principale">Musica e Cultura</a></li>
<li id="menu-item-1043333" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1043333"><a href="https://www.fanpage.it/stile-e-trend/" data-anact="menu/principale">Stile e trend</a></li>
<li id="menu-item-1043347" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1043347"><a href="https://www.fanpage.it/esteri/" data-anact="menu/principale">Esteri</a></li>
<li id="menu-item-1147426" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1147426"><a href="https://www.fanpage.it/backstair/" data-anact="menu/principale">Backstair</a></li>
</ul>
</div>
      </div>

  <div class="fp_burger-menu__rubrics-container" id="fp_burger-menu__stories-of-days">
      </div>
  <div class="fp_burger-menu__card-slider" id="fp_burger-menu__card-slider">
    </div>


<footer>
  <div class="fp_footer">
    <div class="fp_footer__block fp_footer__block--1">
      <div class="fp_footer__list">
                    
                <a href="https://youmedia.fanpage.it/" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Youmedia
        </a>
                    
                <a href="https://www.fanpage.it/segnalazioni" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Segnalazioni
        </a>
                    
                <a href="https://www.fanpage.it/privacy-policy/" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Privacy Policy
        </a>
                    
                <a href="https://www.fanpage.it/cookie-policy/" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Cookie Policy
        </a>
                    
                <a href="https://www.fanpage.it/redazione" data-anact="footer/link"  target="_blank" rel="noreferrer" class="fp_footer__list-item"
        > Redazione
        </a>
                    
                <a href="javascript:_fpGDPR.configure();" data-anact="footer/link"  target="_self" rel="noreferrer" class="fp_footer__list-item"
        > Modifica consenso
        </a>
    </div>
    </div>

    <div class="fp_footer__block fp_footer__block--2">
      <div class="fp_footer__links">
    <a class="fp_footer__link-item fp_footer__link-item--notify js_gosettings" data-anact="footer/link" target="_blank" href="https://api.fanpage.it/user/notifications?utm_source=fanpage&amp;utm_medium=footer" data-umedium="footer" data-settingsurl="notifications">
                
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white   fp_icon--type-icon_belt_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_belt_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11575"> <g data-name="Raggruppa 11576"> <path d="M33.64 8c-.25-.29-.52-.58-.79-.85l.22-.32a4.43 4.43 0 00.44-3.41A4.57 4.57 0 0031.3.58a4.35 4.35 0 00-3.38-.41 4.47 4.47 0 00-2.73 2.08c-.07.12-.12.25-.17.34-.39-.09-.75-.17-1.18-.25-6.38-.85-10 3.86-13.29 8.1a37.39 37.39 0 01-3.38 4.05 5.6 5.6 0 01-2.85 1.1 5 5 0 00-4 3.05v.09A3.88 3.88 0 002 23.56l24.24 14a4 4 0 002 .52 3.63 3.63 0 002.92-1.38l.25-.25a4.85 4.85 0 00.56-4.9 5.49 5.49 0 01-.46-3 37.7 37.7 0 011.83-5.06c2-4.89 4.25-10.39.3-15.49zm-3.18 14.32a36.54 36.54 0 00-1.91 5.47l-.05.21a8.52 8.52 0 00.71 4.75 1.93 1.93 0 01-.12 1.75l-.14.1a1 1 0 01-1.18.25L3.54 20.93a1 1 0 01-.37-1.15v-.17a1.81 1.81 0 011.42-1 8.59 8.59 0 004.5-1.76l.17-.18A32 32 0 0013 12.3c2.89-3.75 5.84-7.56 10.5-7a11.56 11.56 0 012.2.7 1.57 1.57 0 001.47-.2 1.42 1.42 0 00.59-1.37 2 2 0 01.17-.64 1.73 1.73 0 01.91-.66 1.25 1.25 0 011.06.15 1.34 1.34 0 01.66.83 1.49 1.49 0 01-.15 1.13 1.35 1.35 0 01-.46.46 1.44 1.44 0 00-.89 1.2 1.63 1.63 0 00.57 1.37 11.88 11.88 0 011.62 1.55c2.83 3.72 1 8.18-.78 12.54z" data-name="Tracciato 26837" /> <path d="M6.84 29.42L6.29 31a6.71 6.71 0 003 8.08 6.59 6.59 0 003.38.93 6.68 6.68 0 005.11-2.45l1-1.23zm3.8 7.32a4.07 4.07 0 01-2-3.07l5.63 3.21a4 4 0 01-3.64-.14z" data-name="Tracciato 26838" /> </g> </g></svg>
  </span>
  
        <span>NOTIFICHE</span>
    </a>
    <a class="fp_footer__link-item fp_footer__link-item--settings js_gosettings" data-anact="footer/link" target="_blank" href="https://api.fanpage.it/user/settings?utm_source=fanpage&amp;utm_medium=footer" data-umedium="footer" data-settingsurl="settings">
                
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white   fp_icon--type-icon_settings_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_settings_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11573"> <g data-name="Raggruppa 11574"> <path d="M20 11.81a8.11 8.11 0 108.09 8.12A8.12 8.12 0 0020 11.81zM20 25a5.12 5.12 0 115.11-5.13A5.11 5.11 0 0120 25z" data-name="Tracciato 26835" /> <path d="M34.86 20.62v-1.14l1.4-1.27a3.7 3.7 0 001-4.16l-.78-1.92a3.71 3.71 0 00-3.62-2.29l-1.89.09-.75-.75.09-1.91A3.81 3.81 0 0028 3.59l-1.92-.79a3.71 3.71 0 00-4.18.91l-1.29 1.41h-1.25l-1.29-1.41a3.71 3.71 0 00-4.18-.91L12 3.59a3.83 3.83 0 00-2.31 3.68l.1 1.91-.79.75-1.9-.09a3.69 3.69 0 00-3.62 2.29l-.78 1.92a3.7 3.7 0 001 4.16l1.4 1.27v1.14l-1.37 1.25a3.71 3.71 0 00-1 4.2l.83 2a3.8 3.8 0 003.63 2.22l1.94-.1.75.77-.1 1.94a3.7 3.7 0 002.31 3.56l1.92.79a3.76 3.76 0 004.2-1l1.26-1.41h.93l1.27 1.41a3.78 3.78 0 002.76 1.25 4 4 0 001.44-.27l1.91-.79a3.72 3.72 0 002.31-3.56L30 30.94l.75-.77 1.94.1A3.79 3.79 0 0036.36 28l.83-2a3.71 3.71 0 00-.95-4.2zm-2.06 2l1.6 1.43a.82.82 0 01.18.88l-.83 1.92a.72.72 0 01-.75.49l-2.14-.12h-.14a2.54 2.54 0 00-1.69.69L27.93 29a2.37 2.37 0 00-.72 1.81l.12 2.19a.74.74 0 01-.49.79l-1.91.76a.8.8 0 01-.88-.23L22.6 32.7a2.32 2.32 0 00-1.75-.81h-1.67a2.32 2.32 0 00-1.75.81L16 34.27a.79.79 0 01-.88.23l-1.91-.76a.77.77 0 01-.51-.74l.12-2.12A2.36 2.36 0 0012.1 29L11 27.91a2.52 2.52 0 00-1.69-.69h-.14L7 27.34a.72.72 0 01-.75-.49l-.83-1.92a.82.82 0 01.18-.88l1.6-1.43a2.48 2.48 0 00.8-1.78v-1.57a2.58 2.58 0 00-.81-1.8L5.61 16a.79.79 0 01-.21-.88l.75-1.92a.81.81 0 01.79-.48l2.12.12a2.3 2.3 0 001.8-.7L12 11.06a2.39 2.39 0 00.71-1.82l-.11-2.15a.73.73 0 01.48-.75L15 5.53a.75.75 0 01.88.18l1.42 1.58a2.36 2.36 0 001.75.78H21a2.38 2.38 0 001.75-.78l1.45-1.58a.77.77 0 01.88-.18l1.92.81a.72.72 0 01.49.75l-.12 2.15a2.4 2.4 0 00.72 1.82l1.1 1.11a2.31 2.31 0 001.81.7l2.12-.12a.8.8 0 01.78.48l.75 1.92a.79.79 0 01-.21.88l-1.59 1.44a2.58 2.58 0 00-.81 1.8v1.57a2.56 2.56 0 00.78 1.77z" data-name="Tracciato 26836" /> </g> </g></svg>
  </span>
  
        <span>IMPOSTAZIONI</span>
    </a>
</div>
    </div>

    <div class="fp_footer__block fp_footer__block--3">
      <div class="fp_footer__identities">
    <div class="fp_footer__social-channels">
                        

    <a href="https://www.facebook.com/pages/fanpageit/169992733022409" title="icona facebook_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_facebook_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_facebook_small"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11536"> <path d="M17.48 13.59v3.19h-3.73v4.27h3.73V32h4.42V21.05h3.65l.54-4.27h-4.2v-2.72c0-1.24.31-2.1 2.1-2.1h2.25v-3.8A24.82 24.82 0 0022.9 8a5.06 5.06 0 00-5.44 4.66 4.73 4.73 0 00.02.93z" data-name="Tracciato 462" style="isolation: isolate" /> </g></svg>
  </span>
  
            </a>



                                

    <a href="https://www.instagram.com/fanpage.it/" title="icona instagram_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-white  fp_icon--type-icon_instagram_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_instagram_small"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11535"> <g data-name="Raggruppa 2139"> <path d="M24.42 8h-8.81A7.6 7.6 0 008 15.59v8.76a7.52 7.52 0 002.21 5.39A7.64 7.64 0 0015.62 32h8.78a7.59 7.59 0 007.6-7.59v-8.8A7.61 7.61 0 0024.42 8zm0 21.88h-8.8a5.51 5.51 0 01-5.52-5.5v-8.76a5.52 5.52 0 015.52-5.52h8.76a5.52 5.52 0 015.52 5.51v8.76a5.51 5.51 0 01-5.51 5.51z" data-name="Tracciato 26826" /> <path d="M20.05 14.48a5.57 5.57 0 105.57 5.57 5.57 5.57 0 00-5.57-5.57zm0 8.87a3.31 3.31 0 113.31-3.3 3.32 3.32 0 01-3.31 3.3z" data-name="Tracciato 26827" /> <circle cx="26.32" cy="13.72" r="1.42" data-name="Ellisse 303" /> </g> </g></svg>
  </span>
  
            </a>



                                

    <a href="https://twitter.com/fanpage" title="icona x_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_x_small">
    <svg class="  fp_icon-symbol-icon_x_small" viewBox="0 0 20 20"> <g data-name="Raggruppa 54998" transform="translate(-1443 7797)" > <path  d="M6.988,5.081,11.359,0H10.323l-3.8,4.412L3.5,0H0L4.584,6.672,0,12H1.036L5.044,7.341,8.246,12h3.5L6.988,5.081ZM5.569,6.73,5.1,6.066,1.409.78H3L5.983,5.046l.464.664,3.877,5.545H8.733L5.569,6.731Z" transform="translate(1447 -7793)" /> </g></svg>
  </span>
  
            </a>



                                

    <a href="https://www.youtube.com/user/FanpageMedia" title="icona youtube_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_youtube_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_youtube_small"  viewBox="0 0 40 40"> <g data-name="Raggruppa 11534"> <path d="M29.34 10.6a73 73 0 00-18.68 0 3.48 3.48 0 00-2.16 2.57A44.57 44.57 0 008 20a44.7 44.7 0 00.5 6.84 3.43 3.43 0 002.16 2.56A58.39 58.39 0 0020 30a58.39 58.39 0 009.34-.6 3.43 3.43 0 002.16-2.56A44.7 44.7 0 0032 20a44.57 44.57 0 00-.5-6.83 3.33 3.33 0 00-2.16-2.57zM17.63 24.28v-8.55L23.88 20z" data-name="Tracciato 468" style="isolation: isolate" /> </g></svg>
  </span>
  
            </a>



                                

    <a href="https://t.me/fanpageit_official" title="icona telegram_small"  target="_blank" data-anact="rib" class="fp_button__icon  fp_button__icon--theme-dark-grey    "     >
         
          
<span class="fp_icon fp_icon--size-20x20 fp_icon--color-fill-white fp_icon--color-stroke-  fp_icon--type-icon_telegram_small">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_telegram_small"  viewBox="0 0 40 40"> <path d="M7.718 18.452L24.4 11.328c1.646-.742 7.23-3.116 7.23-3.116s2.57-1.04 2.358 1.484c-.072 1.038-.644 4.676-1.216 8.6l-1.79 11.65s-.144 1.706-1.362 2c-1.218.294-3.22-1.038-3.578-1.336-.286-.222-5.368-3.562-7.23-5.2a1.433 1.433 0 01.072-2.374c2.576-2.436 5.654-5.476 7.516-7.404.858-.89 1.718-2.968-1.86-.446l-10.094 7.05a4.076 4.076 0 01-3.292.074C9 21.642 6.5 20.752 6.5 20.752s-1.718-1.114 1.216-2.3h.002z" /></svg>
  </span>
  
            </a>



            </div>
    <a href="https://www.fanpage.it" data-anact="footer/logo" class="fp_footer__brand-logo fp_footer__brand-logo--fanpage" aria-label="Fanpage">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.903 35.568">
    <g fill="#fff" data-name="Raggruppa 1533">
      <path d="M11.737 4.227h-1.383a3.694 3.694 0 0 0-1.941.353 1.846 1.846 0 0 0-.589 1.618V8.08h3.324v4.03H7.824v12.708h2.118v4.03H.824v-4.059h2V12.081H0v-4.03h2.794V5.462a11.192 11.192 0 0 1 .265-3.118A2.749 2.749 0 0 1 4.589.638a9.361 9.361 0 0 1 4-.618 15.756 15.756 0 0 1 3.118.265v3.942h.029Z" data-name="Tracciato 32"/>
      <path d="M31.357 28.538h-6.325v-2.442a13.126 13.126 0 0 1-2.118 1.706 5.944 5.944 0 0 1-1.912.882 8.476 8.476 0 0 1-2.294.324 7.712 7.712 0 0 1-3.706-.853 6.723 6.723 0 0 1-2.618-2.353 5.893 5.893 0 0 1-.941-3.295 5.387 5.387 0 0 1 1.824-4.236 10.263 10.263 0 0 1 4.5-2.118 72.082 72.082 0 0 1 7.089-.971 8.652 8.652 0 0 0-.353-2.471 1.97 1.97 0 0 0-1.152-1.176 6.2 6.2 0 0 0-2.324-.353 3.925 3.925 0 0 0-2.589.853 3.2 3.2 0 0 0-1.118 2.324l-5-.147a6.838 6.838 0 0 1 1.235-3.589 6.923 6.923 0 0 1 2.971-2.383 10.362 10.362 0 0 1 4.236-.824 9.931 9.931 0 0 1 6.56 1.883 6.628 6.628 0 0 1 2.27 5.384v9.854h1.794Zm-6.589-7.766v-2a41.187 41.187 0 0 0-4.471.588 5.9 5.9 0 0 0-2.589 1.059 2.754 2.754 0 0 0-.353 3.883l.353.353a3.915 3.915 0 0 0 2.471.765 4.665 4.665 0 0 0 4-2.294 4.984 4.984 0 0 0 .588-2.353" data-name="Tracciato 33"/>
      <path d="M53.579 28.368h-6.942V14.779a2.75 2.75 0 0 0-3.059-3.036 4.065 4.065 0 0 0-2.294.723 4.956 4.956 0 0 0-1.706 1.937 5.427 5.427 0 0 0-.647 2.515v7.517h1.912v3.963h-8.884v-3.962H33.9V11.975h-1.941V8.043h7v2.6a15.1 15.1 0 0 1 2.677-2.226 7.486 7.486 0 0 1 6.913 0 6.146 6.146 0 0 1 2.294 2.2 5.656 5.656 0 0 1 .824 3.065v10.816h1.883v3.961Z" data-name="Tracciato 34"/>
      <path d="M75.638 18.129a13.868 13.868 0 0 1-.677 4.236 10.906 10.906 0 0 1-1.883 3.442 8.461 8.461 0 0 1-2.853 2.236 8.275 8.275 0 0 1-3.559.794 8.7 8.7 0 0 1-2.118-.265 6.723 6.723 0 0 1-1.912-.912 11.673 11.673 0 0 1-1.912-1.706v5.06h2v4.03h-8.912v-4.03h1.824v-19.3h-1.824v-4.03h6.942v2.118a8.3 8.3 0 0 1 9.648-1.883 8.25 8.25 0 0 1 2.794 2.236 10.767 10.767 0 0 1 1.824 3.5 16.561 16.561 0 0 1 .618 4.474m-5.326 0a10.045 10.045 0 0 0-.588-3.618 5.189 5.189 0 0 0-1.677-2.353 4.22 4.22 0 0 0-2.589-.794 4.439 4.439 0 0 0-3.265 1.5 4.507 4.507 0 0 0-1.118 1.912 12.578 12.578 0 0 0-.324 3.148 12.9 12.9 0 0 0 .327 3.205 4.587 4.587 0 0 0 1.177 2.118 4.369 4.369 0 0 0 3.177 1.412 4.108 4.108 0 0 0 2.53-.794 4.941 4.941 0 0 0 1.677-2.265 9.432 9.432 0 0 0 .646-3.471Z" data-name="Tracciato 35"/>
      <path d="M96.346 28.537h-6.324v-2.44a13.129 13.129 0 0 1-2.118 1.706 5.944 5.944 0 0 1-1.912.882 9.012 9.012 0 0 1-6-.588 6.723 6.723 0 0 1-2.618-2.353 5.893 5.893 0 0 1-.941-3.295 5.386 5.386 0 0 1 1.824-4.236 10.263 10.263 0 0 1 4.5-2.118 72.082 72.082 0 0 1 7.089-.971 8.652 8.652 0 0 0-.353-2.471 1.913 1.913 0 0 0-1.059-1.177 6.2 6.2 0 0 0-2.324-.353 3.925 3.925 0 0 0-2.588.853 3.107 3.107 0 0 0-1.088 2.294l-5.059-.118a6.838 6.838 0 0 1 1.235-3.589 7.032 7.032 0 0 1 2.971-2.353 10.362 10.362 0 0 1 4.236-.824 10.1 10.1 0 0 1 6.56 1.883 6.625 6.625 0 0 1 2.236 5.413v9.855h1.794v4.03Zm-6.589-7.766v-2a41.186 41.186 0 0 0-4.471.588 5.9 5.9 0 0 0-2.589 1.059 2.754 2.754 0 0 0-.353 3.883l.353.353a3.915 3.915 0 0 0 2.471.765 4.609 4.609 0 0 0 2.324-.647 4.426 4.426 0 0 0 1.647-1.647 4.159 4.159 0 0 0 .618-2.353" data-name="Tracciato 36"/>
      <path d="M117.88 11.719h-1.824v15.912a7.133 7.133 0 0 1-4.5 6.972 14.167 14.167 0 0 1-5.295.941 10.519 10.519 0 0 1-7.06-2.118 6.289 6.289 0 0 1-1.471-1.707 14.357 14.357 0 0 1-1.088-2.824h4.971a3.879 3.879 0 0 0 1.618 2.118 6.611 6.611 0 0 0 6.442-.412 3.362 3.362 0 0 0 1.353-2.795v-3.382a10.021 10.021 0 0 1-1.353 1.383 7.11 7.11 0 0 1-2.118 1.177 8.04 8.04 0 0 1-2.883.5 7.558 7.558 0 0 1-4.232-1.295 8.588 8.588 0 0 1-2.941-3.677 12.229 12.229 0 0 1-1.059-5.207 12.3 12.3 0 0 1 1.088-5.236 8.436 8.436 0 0 1 3.059-3.589 8.148 8.148 0 0 1 4.5-1.265 6.692 6.692 0 0 1 2.824.618 12.92 12.92 0 0 1 3.059 2.118V7.719h6.942v4h-.029Zm-6.913 5.619a7.3 7.3 0 0 0-.588-2.942 5.114 5.114 0 0 0-1.588-2.118 3.665 3.665 0 0 0-2.265-.735 4.642 4.642 0 0 0-4.236 2.765 7.207 7.207 0 0 0-.618 3.118 8.392 8.392 0 0 0 .529 3.177 4 4 0 0 0 4.03 2.647 4.135 4.135 0 0 0 2.471-.735 4.806 4.806 0 0 0 1.706-2.118 7.273 7.273 0 0 0 .588-3.059Z" data-name="Tracciato 37"/>
      <path d="M138.225 19.184h-14.8a5.983 5.983 0 0 0 1.912 4.56 5.355 5.355 0 0 0 2.971 1.059 4.265 4.265 0 0 0 4.236-3.059h5.353a8.691 8.691 0 0 1-5.177 6.354 10.807 10.807 0 0 1-4.412.941 10.29 10.29 0 0 1-3.971-.794 9.492 9.492 0 0 1-3.206-2.265 10.035 10.035 0 0 1-2.118-3.471 12.336 12.336 0 0 1 .029-8.472 10.675 10.675 0 0 1 2.118-3.442 9.165 9.165 0 0 1 3.118-2.5 9.486 9.486 0 0 1 4.03-.794 9.286 9.286 0 0 1 4.53 1.088 9.146 9.146 0 0 1 3.412 3.118 10.673 10.673 0 0 1 1.618 3.648 30.616 30.616 0 0 1 .353 4.03m-5.707-3.53a4.759 4.759 0 0 0-1.383-3 4.223 4.223 0 0 0-2.971-1.03 4.379 4.379 0 0 0-2 .5 4.786 4.786 0 0 0-1.588 1.383 6.367 6.367 0 0 0-1 2.118h8.913v.029Z" data-name="Tracciato 38"/>
      <path d="M140.636 26.006h2.118v2.118h-2.118z" data-name="Rettangolo 86"/>
      <path d="M149.284 28.17h-4.236v-1.592h1.206v-6.942h-1.265v-1.56h3.147v8.472h1.147Zm-1.147-11.678h-2.118V14.37h2.118Z" data-name="Tracciato 39"/>
      <path d="M155.756 28.191h-1.559a3.169 3.169 0 0 1-2.118-.5 2.108 2.108 0 0 1-.647-1.618v-6.442h-1.265v-1.588h1.353v-2.942h2.118v2.942h2.118v1.618h-2.118v5.824a1.452 1.452 0 0 0 .147.706 1.149 1.149 0 0 0 .5.412 2.287 2.287 0 0 0 .883.118h.735v1.53Z" data-name="Tracciato 40"/>
    </g>
  </svg>
    </a>
</div>
    </div>

    <div class="fp_footer__block fp_footer__block--4">
      <div class="fp_footer__contacts-box">
    <div class="fp_footer__contacts-description">Per inviarci segnalazioni, foto e video puoi contattarci tramite:</div>
    <div class="fp_footer__contacts-buttons">
        <a href="mailto:segnalazioni@fanpage.it" target="_blank" class="fp_footer__button-item fp_footer__button-item--mail"
        >
                        
<span class="fp_icon fp_icon--size-18x18 fp_icon--color-fill-white   fp_icon--type-icon_mail_outline">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_mail_outline"  viewBox="0 0 40 40"> <g data-name="Raggruppa 4817"> <path d="M32.07 10H7.93a1.84 1.84 0 00-1.8 1.86v16.3A1.84 1.84 0 007.94 30h24.13a1.84 1.84 0 001.8-1.86v-16.3a1.84 1.84 0 00-1.8-1.84zm-2 2.41L20.17 22a.5.5 0 01-.38 0c-.45-.52-2.32-2.34-9.82-9.58zM8.51 14.29l6.09 5.9-6.09 5.86zm1.79 13.3l6-5.76 2 1.9a2.44 2.44 0 003.48 0l2-1.92 6 5.76zm21.21-1.54l-6.09-5.86 6.09-5.9z" data-name="Tracciato 26829" /> </g></svg>
  </span>
  
            <span>MAIL</span>
        </a>
        <a href="https://m.me/169992733022409" target="_blank" rel="noreferrer" class="fp_footer__button-item fp_footer__button-item--messenger"
        >
                        
<span class="fp_icon fp_icon--size-14x14 fp_icon--color-fill-white   fp_icon--type-icon_messenger">
    <svg class=" fp_icon-symbol fp_icon-symbol-icon_messenger"  viewBox="0 0 40 40"> <g data-name="icon messenger"> <path d="M20 .26C9 .26 0 8.44 0 18.53a17.67 17.67 0 007.43 14.21v7L14.25 36a21.47 21.47 0 005.75.76c11 0 20-8.17 20-18.26S31.05.26 20 .26zm2.11 24.5l-5.18-5.25L7 24.89l10.89-11.32 5.17 5.26 10-5.39z" data-name="Tracciato 27788" /> </g></svg>
  </span>
  
            <span>FACEBOOK</span>
        </a>
    </div>
</div>    </div>

    <div class="fp_footer__block fp_footer__block--5">
      <div class="fp_footer__pie">
            <div class="fp_footer__pie-paragraph">Fanpage.it è una testata giornalistica registrata presso il Tribunale di Napoli n. 57 del 26/07/2011.</div>
            <div class="fp_footer__pie-paragraph">Ove non espressamente indicato, tutti i diritti di sfruttamento ed utilizzazione economica del materiale fotografico presente sul sito Fanpage.it sono da intendersi di proprietà dei fornitori, LaPresse e Getty Images.</div>
    </div>    </div>

    <div class="fp_footer__block fp_footer__block--6">
      <div class="fp_footer__apps">
    <div class="fp_footer__apps-badges">
                    <a
                href="http://fanpa.ge/fanpage_ios"
                target="_blank"
                class="fp_footer__badge-item fp_footer__badge-item--app-store" rel="noreferrer" aria-label="AppStore"
            >
              

<img  loading="lazy"  src="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/shared/logo-apple.svg"   class="" alt="Immagine"  width="111"  height="29" />
            </a>
                            <a
                href="http://fanpa.ge/fanpage_android"
                target="_blank"
                class="fp_footer__badge-item fp_footer__badge-item--google-play" rel="noreferrer" aria-label="Google Play"
            >
              

<img  loading="lazy"  src="https://static.fanpage.it/site-cp-wp/23e45391c96db2baa429c7c41323568d6d0f05d2/shared/logo-google.svg"   class="" alt="Immagine"  width="115"  height="26" />
            </a>
            </div>
    <div class="fp_footer__bottom-logo">
      <a href="https://www.ciaopeople.it" target="_blank" class="fp_footer__apps-by" rel="noreferrer" aria-label="Ciaopeople">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="24" viewBox="0 0 136 34" fill="#FF4900">
          <path  d="M88.24,34V16.665h3.1v.988a5.578,5.578,0,0,1,3.4-1.307,6.66,6.66,0,0,1,4.659,2,6.464,6.464,0,0,1,1.844,4.666,6.584,6.584,0,0,1-6.5,6.667,5.527,5.527,0,0,1-3.4-1.307V34Zm3.1-12.31c-.032.1-.066.217-.1.318v.017c-.016.1-.05.2-.066.3,0,.032-.016.066-.016.1a1.015,1.015,0,0,0-.032.234,3.778,3.778,0,0,0,0,.7,1.316,1.316,0,0,0,.032.234c0,.034.016.067.016.1a1.973,1.973,0,0,0,.066.3v.017c.032.118.066.217.1.318a3.65,3.65,0,0,0,3.4,2.412,3.736,3.736,0,0,0,0-7.47,3.65,3.65,0,0,0-3.4,2.42ZM46.1,34V16.665H49.2v.988a5.585,5.585,0,0,1,3.4-1.307,6.668,6.668,0,0,1,0,13.332,5.527,5.527,0,0,1-3.4-1.307V34ZM49.2,21.656c-.032.1-.066.217-.1.318v.017c-.016.1-.05.2-.066.3a.124.124,0,0,0-.016.083,1.458,1.458,0,0,0-.031.252,2.505,2.505,0,0,0-.016.35v.034a2.517,2.517,0,0,0,.016.352,1.423,1.423,0,0,0,.031.251.745.745,0,0,1,.016.084,1.976,1.976,0,0,0,.066.3v.017c.032.118.066.217.1.318a3.65,3.65,0,0,0,3.4,2.412,3.753,3.753,0,0,0,0-7.5,3.65,3.65,0,0,0-3.4,2.412ZM61.835,27.82A6.484,6.484,0,0,1,60.008,23.1a6.664,6.664,0,0,1,1.827-4.823,6.013,6.013,0,0,1,4.576-1.926,6.32,6.32,0,0,1,4.77,1.926,7.055,7.055,0,0,1,1.827,5.074l-.016.6H63.012a3.387,3.387,0,0,0,3.56,2.953,4.071,4.071,0,0,0,2.99-1.256L72.177,26.9a6.159,6.159,0,0,1-2.351,2.11,7.257,7.257,0,0,1-3.248.687,6.331,6.331,0,0,1-4.743-1.877Zm2.451-8.02a4.013,4.013,0,0,0-1.145,1.64H69.89a3.123,3.123,0,0,0-1.21-1.724,3.413,3.413,0,0,0-2.108-.67,3.648,3.648,0,0,0-2.287.754ZM17.749,23.029a6.582,6.582,0,0,1,6.508-6.666,5.514,5.514,0,0,1,3.4,1.307v-.988h3.1v12.7H27.647v-.988a5.587,5.587,0,0,1-3.39,1.306,6.584,6.584,0,0,1-6.5-6.671Zm2.86-.017a3.692,3.692,0,0,0,3.648,3.735,3.64,3.64,0,0,0,3.4-2.378c.032-.1.066-.217.1-.318v-.017c.016-.1.05-.2.066-.3,0-.034.016-.067.016-.1a.986.986,0,0,0,.032-.234,2.517,2.517,0,0,0,.016-.352v-.034a2.506,2.506,0,0,0-.016-.35,1.351,1.351,0,0,0-.032-.236c0-.034-.016-.067-.016-.1a1.94,1.94,0,0,0-.066-.3v-.017c-.032-.118-.066-.219-.1-.318a3.65,3.65,0,0,0-3.4-2.415,3.692,3.692,0,0,0-3.645,3.734ZM0,22.761a6.662,6.662,0,0,1,6.355-6.414,6.5,6.5,0,0,1,5.785,3.333L9.629,21.1a3.611,3.611,0,0,0-3.12-1.81,3.766,3.766,0,0,0-2.86,1.417,3.681,3.681,0,1,0,5.929,4.332L11.951,26.7a6.484,6.484,0,0,1-5.441,3,6.7,6.7,0,0,1-4.752-2.106A6.5,6.5,0,0,1,0,22.761ZM108.337,27.8a6.484,6.484,0,0,1-1.827-4.724,6.664,6.664,0,0,1,1.827-4.823,6.013,6.013,0,0,1,4.576-1.926,6.32,6.32,0,0,1,4.755,1.926,7.053,7.053,0,0,1,1.827,5.074l-.016.6H109.5a3.387,3.387,0,0,0,3.562,2.949,4.075,4.075,0,0,0,2.992-1.256l2.614,1.256a6.022,6.022,0,0,1-2.334,2.11,7.264,7.264,0,0,1-3.248.687,6.333,6.333,0,0,1-4.744-1.873Zm2.451-8a4.012,4.012,0,0,0-1.144,1.64h6.747a3.123,3.123,0,0,0-1.21-1.724,3.41,3.41,0,0,0-2.108-.67,3.652,3.652,0,0,0-2.287.754ZM74.122,23.012a6.39,6.39,0,0,1,3.184-5.741,6.591,6.591,0,0,1,6.64,0,6.39,6.39,0,0,1,3.184,5.741,6.39,6.39,0,0,1-3.184,5.741,6.591,6.591,0,0,1-6.64,0,6.39,6.39,0,0,1-3.184-5.741Zm2.859,0a3.646,3.646,0,1,0,3.645-3.735,3.693,3.693,0,0,0-3.646,3.735Zm-45.016,0a6.39,6.39,0,0,1,3.184-5.741,6.591,6.591,0,0,1,6.64,0,6.39,6.39,0,0,1,3.184,5.741,6.39,6.39,0,0,1-3.184,5.741,6.591,6.591,0,0,1-6.64,0,6.39,6.39,0,0,1-3.184-5.741Zm2.86,0a3.646,3.646,0,1,0,3.641-3.735,3.692,3.692,0,0,0-3.644,3.735ZM13.453,29.377v-12.7h3.1v12.7Zm88.821-.017V11.775h3.106V29.361Zm20.49-8.476a1.708,1.708,0,0,1,.115-2.4l1.878-1.91a9.255,9.255,0,0,1-6.338-2.445A8.177,8.177,0,0,1,116.179,8.3a8.15,8.15,0,0,1,2.239-5.828C120.573.3,123.5,0,126.082,0s5.506.3,7.664,2.479a8.21,8.21,0,0,1,2.241,5.828,8.231,8.231,0,0,1-2.233,5.828,7.808,7.808,0,0,1-3.958,2.127l-4.562,4.623a.767.767,0,0,1-.115.118,1.627,1.627,0,0,1-1.116.44,1.672,1.672,0,0,1-1.233-.558ZM120.836,4.771a4.985,4.985,0,0,0-1.357,3.535,4.93,4.93,0,0,0,1.357,3.535c1.29,1.322,3.654,1.49,5.227,1.49s3.922-.168,5.213-1.49a4.929,4.929,0,0,0,1.361-3.534,4.958,4.958,0,0,0-1.356-3.535c-1.308-1.3-3.645-1.49-5.213-1.49s-3.941.168-5.23,1.491Zm5.669,3.385a1.7,1.7,0,0,1,.854-1.513,1.755,1.755,0,0,1,1.757,0,1.767,1.767,0,0,1,0,3.025,1.755,1.755,0,0,1-1.757,0A1.7,1.7,0,0,1,126.505,8.156Zm-4.413,0a1.7,1.7,0,0,1,.849-1.528,1.756,1.756,0,0,1,1.768,0,1.7,1.7,0,0,1,.849,1.528,1.7,1.7,0,0,1-.849,1.528,1.756,1.756,0,0,1-1.768,0,1.7,1.7,0,0,1-.849-1.528Z" transform="translate(0.011)"/>
        </svg>
      </a>
    </div>
</div>
    </div>
  </div>
</footer>

</div>
    
    
    <script type="text/javascript">
    (function () {
        var fphost = "https://api.fanpage.it/views";
        var fpvw = document.createElement('scr' + 'i' +'pt');
        fpvw.async = true;
        fpvw.type = 'text/javascript';
        fpvw.onerror = function () {
            var elem = document.createElement("img");
            elem.setAttribute("src", fphost + "/s.gif");
            elem.setAttribute("alt", "apitrack");
            elem.setAttribute("style", "display: none;");
            document.body.appendChild(elem);
        };
        fpvw.src = fphost + "/vw.js";
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(fpvw, node);
    })();
</script>
<noscript><img src="https://api.fanpage.it/views/s.gif" alt="api url views" style="display:none"></noscript>

<script type="text/javascript">
  window.setUpAgknTag = function(tag) 
  {
    window._fpcmp.push(function(gdprsdk)
    {
      var getCookie = function(cname) 
      {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      };

      tag.setBpId("ciaopeople");
      tag.setCat("news");

      if(gdprsdk.hasIABIntegration()) {
        tag.setGdpr("1");
        tag.setGdprConsent(gdprsdk.getIABConsentData().consentData);
      } else {
        tag.setGdpr("0");
      }

      var fp_ad = getCookie('fp_ad');
      if(fp_ad.length > 0) {
        var splitted = fp_ad.split('.');
        if(splitted[0] != '') tag.setAge(splitted[0]);
        if(splitted[1] != '') tag.setGen(splitted[1] == '1' ? 'male' : 'female');
      }

              tag.addEchoKeyValue("subcat", "Attualità");  
          });
  }

  window._fpcmp.push(function(gdprsdk)
  {
    if(uaDetect().browser.webview) {
      return;
    }

    (function(d, s, u) {
        var js, fjs = d.getElementsByTagName(s)[0];
        js = d.createElement(s);
        js.src = u;
        js.defer = true;
        if(fjs && fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
        else document.head.appendChild(js);
      }(document, 'script', 'https://js.agkn.com/prod/v0/tag.js'));
  }); 
</script>
<script>
  (function() {
    window._fpcmp = window._fpcmp || [];
    var seedtagIdentifier = '4792-8548-01';
    window._fpcmp.push(function(gdpr)
    {
      var isNoConsent = gdpr.evaluatePurposeConfig() == 'NO';
      
      if(seedtagIdentifier && isNoConsent) {
        console.log("Loading seedtag", seedtagIdentifier, isNoConsent);
        var seedtagLoad = function(sdkIdentifier, d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); 
            js.id = id;
            js.src = "https://t.seedtag.com/t/" + sdkIdentifier + ".js";
            js.async = true;
            if(fjs && fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
            else document.head.appendChild(js);
        };
        seedtagLoad(seedtagIdentifier, document, 'script', 'seedtag-js');
      }
    });
  }())
</script>


<script>
    var windowWidth = window.innerWidth 
        || document.documentElement.clientWidth 
        || document.body.clientWidth;
    var isMobile = window._fpIsMobile 
        || windowWidth < 1024;

    window._fpcmp = window._fpcmp || [];
    window._fpcmp.push(function(gdpr) {
        if (isMobile && gdpr.evaluatePurposeConfig() == 'NO') {
            var teadsTagIdentifier = '147038';
            var teads = document.createElement('script');
            teads.src = '//a.teads.tv/page/' + teadsTagIdentifier + '/tag';
            teads.async = true;
            var node = document.getElementsByTagName('script')[0];
            if (node.parentNode) node.parentNode.insertBefore(teads, node);
            else document.head.appendChild(teads);
        }
    });
</script><script type="text/javascript">
    window.ymAsyncInit = window.ymAsyncInit || [];
    window.ymAsyncInit.push((sdk) => {
        window.addEventListener('reset_anchorage', (e) => {
            sdk.trigger({
                type: "reset_anchorage",
                originalData: e.detail,
            });
        });      
    });
</script>
<!-- Facebook Pixel Code -->
<script>
  (function() {
    var searchParams = new URLSearchParams(location.search);
    if (
      searchParams.get('utm_source') != null || 
      searchParams.get('utm_medium') != null || 
      searchParams.get('utm_campaign') != null
    ) {
      window._fpcmp.push(function(gdpr)
      {
        !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.defer=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2062554930705272');
        fbq('track', 'PageView');

        //send custom checkpoints event
        (function () {
          var checkPoints = [10, 20, 40, 60, 90, 120, 180, 240, 300].sort(function(a, b) {
                  return a - b;
          }); //seconds
          var checkPointIndex = 0;
          var f = function(){
              var data = {
                      instant: checkPoints[checkPointIndex]
              };
              console.log("[FB PIXEL] send custom event ViewContentCheckPoint ", data, " on account " ,"2062554930705272" , " currentTime in seconds ",
                      new Date().getTime() / 1000);
              fbq('trackCustom', 'ViewContentCheckPoint', data);
              checkPointIndex++;
              if(checkPointIndex < checkPoints.length) {
                setTimeout(f, (checkPoints[checkPointIndex] - checkPoints[checkPointIndex-1]) * 1000)
              }
          };
          if(checkPoints.length){
            setTimeout(f, checkPoints[checkPointIndex] * 1000)
          }
        })();
      });
    }
  }());
</script>
<noscript>
  <img height="1" width="1" alt="facebook pixel" style="display:none" src="https://www.facebook.com/tr?id=2062554930705272&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->
<!-- Tiktok Pixel Code -->
<script>
  (function() {
    var searchParams = new URLSearchParams(location.search);
    if (searchParams.get('utm_source') === 'tiktok' && searchParams.get('utm_medium') === 'post_sponsored') {
      window._fpcmp.push(function(gdpr) {
        (function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.defer=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

          ttq.load('C3NGCKFB3D4L4OG52MP0');
          ttq.page();
        })(window, document, 'ttq');
      });
    }
  })();
</script>
<!-- End Tiktok Pixel Code -->

<script>


  const allQCTrackers = ["fanpage"];
  //check file ClickEventsHandler.ts
  //this is handled as Fire and Forget because these links are in target _blank
  //anyways it would be much more correct to handle these with UA3 `hitCallback` feature
  window.qualeComproLinkHandlers = window.qualeComproLinkHandlers || [];


  if(window.gatools) {
  window.qualeComproLinkHandlers.push((evt) => {


      function amzAnalytics(outboundUrl,eventAction) {

        window.gatools.multipleTrackersSyncBeacons(allQCTrackers,{
          eventCategory: "qualecompro",
          eventAction: eventAction,
          eventLabel: outboundUrl
        });

      }

      function ebayAnalytics(outboundUrl,eventAction) {
        window.gatools.multipleTrackersSyncBeacons(allQCTrackers,{
          eventCategory: "qualecomproebay",
          eventAction: eventAction,
          eventLabel: outboundUrl
        });
      }

      if(evt && evt.classification == 3 && evt.info && 
        evt.info.partner && evt.info.subtag) {
          // var evtParams = {
          //   transport: 'beacon'
          // };
          if(evt.info.partner == "ebay") ebayAnalytics(evt.url,evt.info.subtag);
          else amzAnalytics(evt.url,evt.info.subtag);
          
      }
      else {
        console.log("Ga discarding QC event", evt);
      }

      
     
  });
 }
  
</script>
<script type="text/javascript">
    window._fpcmp.push(function(gdpr)
    {
        var bmUrl = 'https://cdn.brandmetrics.com/tag/49d08631b9b344d889476705d638a5fc/fanpage.js';
    (function (d) {
        var js, id = 'brandmetrics-js';
        if (d.getElementById(id)) {
        return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = bmUrl;
        //js.src = "//192.168.3.157:9000/js/sdk.js";
        d.getElementsByTagName('head')[0].appendChild(js);
    }(document));
    });
</script><script type="text/javascript">
  (function() {
    window.ymSdkQueue = window.ymSdkQueue || [];

    const megarideAvailable = 0;
    if (megarideAvailable) {
      enqueueYmSkdScript(document);
    }
    else {
      window._fpcmp =window._fpcmp || [];
      _fpcmp.push(function() {
        enqueueYmSkdScript(document);
      });
    }

    function enqueueYmSkdScript(d) {
      var js, id = 'youmedia-sdk';
      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement('script');
      js.id = id;
      js.src = "https://youmedia.fanpage.it/js/sdk.js";
      js.async = true;

      d.getElementsByTagName('head')[0].appendChild(js);
    }
  }())
</script> 
<!-- start dmp tracking code -->
<script type="text/javascript">
  var _omgDmp = _omgDmp || [];
  _omgDmp.push(["S",["_adv","124"]]);
  _omgDmp.push(["S",["_tagId","35"]]);
  _omgDmp.push(["S",["_provider","omg"]]);

  window._fpcmp.push(function(gdpr)
  {
    (function ($n, e, o, d, a, t, $a) {
      var x = $n.createElement(e), s = $n.getElementsByTagName(e)[0];
      x.src = (('https:' == t.protocol) ? 'https://js' : 'http://js') + o + d;
      x.defer = a;
      s.parentNode.insertBefore(x, s);
    }(document, "script", ".omg.neodatagroup.com/", "omg.js", 1, location, 1));
  });
</script>
<!-- end dmp tracking code -->


<script>
    (function() {
        const relatedsBoxInPage = 1;
        const windowWidth = window.innerWidth 
            || document.documentElement.clientWidth 
            || document.body.clientWidth;
        const isMobile = window._fpIsMobile || windowWidth < 1024;

        if (isMobile || relatedsBoxInPage) {
            window._fpcmp = window._fpcmp || [];
            _fpcmp.push(function() {
                (function (e, f, u, i) {
                    if (!document.getElementById(i)){
                        e.defer = 1;
                        e.src = u;
                        e.id = i;
                        f.parentNode.insertBefore(e, f);
                    }
                }(
                    document.createElement('script'),
                    document.getElementsByTagName('script')[0],
                    'https://cdn.taboola.com/libtrc/ciaopeoplenetwork-fanpageit/loader.js',
                    'tb_loader_script'
                ));

                if(window.performance && typeof window.performance.mark == 'function') {
                    window.performance.mark('tbl_ic');
                }

                window._taboola = window._taboola || [];
                _taboola.push({article:'auto'});
                _taboola.push({flush: true});
            });
        }
    }());
</script><script type="text/javascript">
    

    window.fp_endOfBody = true;
    console.log("[ADS] Endof body reach");
    (function clo_event() {
        var n_eve = "end_of_body";
        var event; // The custom event that will be created
        if(document.createEvent){
            event = document.createEvent("HTMLEvents");
            event.initEvent(n_eve, true, true);
            event.eventName = n_eve;
            window.document.dispatchEvent(event);
        } else {
            event = document.createEventObject();
            event.eventName = n_eve;
            event.eventType = n_eve;
            window.document.fireEvent("on" + event.eventType, event);
        }
    })();

</script><!-- Begin comScore Tag -->
<script>
  var _comscore = _comscore || [];
  window._fpcmp.push(function(gdpr)
  {
    _comscore.push({c1: "2", c2: "18904044", cs_ucfr: gdpr.comscore.generalEnable() ? "1" : "0" });
    (function () {
      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0];
      s.defer = true;
      s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/cs/18904044/beacon.js";
      el.parentNode.insertBefore(s, el);
    })();
  });
</script>
<noscript>
<img alt="score-card-search" src="https://b.scorecardresearch.com/p?c1=2&c2=18904044&cv=2.0&cj=1" />
</noscript>
<!-- End comScore Tag -->
<script>
  (function() {
    window._fpcmp = window._fpcmp || [];
    var seedtagIdentifier = '1044-6008-01';
    window._fpcmp.push(function(gdpr)
    {
      setTimeout(() => {
        var isConsent = !['NO','NO_BACK'].includes(gdpr.evaluatePurposeConfig());
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var isMobile = windowWidth <= 768;

        if(seedtagIdentifier && isConsent && isMobile) {
          console.log("Loading seedtag consent", seedtagIdentifier, isConsent);
          var seedtagLoad = function(sdkIdentifier, d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s);
            js.id = id;
            js.src = "https://t.seedtag.com/t/" + sdkIdentifier + ".js";
            js.async = true;
            if(fjs && fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
            else document.head.appendChild(js);
          };
          seedtagLoad(seedtagIdentifier, document, 'script', 'seedtag-js-consent');
        }
      },0)
    });
  }())
</script>


  <script>

    if(window._nativeAppDetect &&
        window._nativeAppDetect.extra &&
          window._nativeAppDetect.extra.product) {
            console.log("[Nielsen] Not triggering --- it's native app", window._nativeAppDetect);
    }
    else {
      console.log("[Nielsen] Triggering");
    // Static Queue Snippet
      !function(t,n){t[n]=t[n]||{nlsQ:function(e,o,c,r,s,i){return s=t.document,r=s.createElement("script"),r.async=1,r.src=("http:"===t.location.protocol?"http:":"https:")+"//cdn-gl.imrworldwide.com/conf/"+e+".js#name="+o+"&ns="+n,i=s.getElementsByTagName("script")[0],i.parentNode.insertBefore(r,i),t[n][o]=t[n][o]||{g:c||{},ggPM:function(e,c,r,s,i){(t[n][o].q=t[n][o].q||[]).push([e,c,r,s,i])}},t[n][o]}}}(window,"NOLBUNDLE");

          // SDK Initialization
      var nSdkInstance = NOLBUNDLE.nlsQ("PCFA92EC0-DDFA-4956-A696-54D1417AD1E5","nlsnInstance");

      // Content Metadata
      var nielsenMetadata = {
      type: 'static',
      assetid: '1__attualita_savignano-sul-rubicone-giovanissimi-teppisti-scatenati-devastano-un-outlet-video-sui-social_',
      section: 'FanpageCronacaePolitica_BRW'
      };

      // Event 'staticstart' Call
      nSdkInstance.ggPM("staticstart", nielsenMetadata);
    }
  </script>
<script type="text/javascript">
    window.domReadyCallbacks = window.domReadyCallbacks || [];

    const domReadyStack = 
    {
        init: function() {
            this.consume();

            // faccio in modo di gestire push futuri
            window.domReadyCallbacks = this.getPushManager();
        },

        consume: function() {
            window.domReadyCallbacks = window.domReadyCallbacks || [];

            while (window.domReadyCallbacks.length > 0) {
                var item = window.domReadyCallbacks.shift();
                if (typeof item === 'function') {
                    item();
                }
            }
        },

        getPushManager: function() {
            return {
                push: function(item) {
                    if (typeof item === 'function') {
                        item();
                    }
                }
            }
        },
    }
    
    domReadyStack.init();
</script>
  </body>
</html>