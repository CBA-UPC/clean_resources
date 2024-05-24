"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5462],{55462:(r,t,o)=>{var i,a;o.r(t),o.d(t,{EBEnvsEnum:()=>i,addCustomRUMError:()=>E,addCustomRUMEvent:()=>_,initializeRealUserMonitoring:()=>m,realUserMonitoringReduxMiddleware:()=>D,setUser:()=>g,useRealUserMonitoring:),function(r){r.PROD="prod",r.STAGE="stage",r.QA="qa",r.DEV="dev"}(i||(i={})),a||(a={}));var c,d=o(89048),b=o(10980),l=o(43969),u=o(61098);function _defineProperty(r,t,o){return t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}var p=(_defineProperty(c={},a.EVENTBRITE,i.PROD),_defineProperty(c,a.EVBSTAGE,i.STAGE),_defineProperty(c,a.EVBQA,i.QA),_defineProperty(c,a.EVBDEV,i.DEV),c),w=[a.EVENTBRITE,a.EVBSTAGE,a.EVBQA,a.EVBDEV];r v=function getKeyWord(r){var t,o=_createForOfIteratorHelper(w);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(r.includes(i))return i}}catch(r){o.e(r)}finally{o.f()}return null},y=function getCurrentEnv(r){var t=function getDomain(r){var t,o;if(r)return v(r.ebDomain);var i=null===(t=(0,u._)("__SERVER_DATA__"))||void 0===t||null===(o=t.env)||void 0===o?void 0:o.ebDomain;return i?v(i):a.EVENTBRITE}(null==r?void 0:r.env);return t?p[t]:null};function ownKeys(r,t){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.push.apply(o,i)}return o}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach((function(t){rum_defineProperty(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))}))}return r}function rum_defineProperty(r,t,o){return t in r?Object.defineProperty(r,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[t]=o,r}var m=function initializeRealUserMonitoring(r){if(l.v){var t=r.env?r.env:y()||void 0;if(!r.enabledEnvironments||!t||r.enabledEnvironments.includes(t)){var o=r.clientToken||"pubf43fcf8de511ce458f04cbdf8dc2deb6",i=r.applicationId||"1429889f-7c31-4b1d-a280-e94ec0704262",a=r.version||"",c=r.service?"rum-web--".concat(r.service):"rum-web",d=function getSampleRate(r){var t=(null==r?void 0:r.sampleRate)||0;return l.v&&(0,u._)("navigator")&&!r.enableBots&&(t=new RegExp("(googlebot/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)","i").test(navigator.userAgent)?0:t),t}(r);b.v.init(_objectSpread(_objectSpread({},r),{},{applicationId:i,clientToken:o,version:a,service:c,sampleRate:d,site:"datadoghq.com",trackInteractions:!0,env:t})),function addEBSessionId(r){var t,o;if(l.v){var i=r.ebSessionId||(null===(t=window.__SERVER_DATA__)||void 0===t||null===(o=t.request)||void 0===o?void 0:o.session_id);i&&b.v.onReady(()}}(r),function notifyRUMReady(){l.v&&b.v.onReady(()}()}}},_=function addCustomRUMEvent(r,t){"undefined"!=typeof window&&window.DD_RUM&&window.DD_RUM.addAction&&window.DD_RUM.addAction(r,t)},g=b.v.setUser,E=function addCustomRUMError(r,t){"undefined"!=typeof window&&window.DD_RUM&&window.DD_RUM.addError&&window.DD_RUM.addError(r,t)},O=function useRealUserMonitoring(r){(0,d.Z)(()}; D=function realUserMonitoringReduxMiddleware(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:return function(t){var o=t.getState;return function(t){return function(i){var a=t(i),c=i;if(!c.meta||!c.meta.analytics)return a;var d=o(),b=r(d),l=redux_middleware_objectSpread(redux_middleware_objectSpread(redux_middleware_objectSpread({},b),c.meta.analytics),{},{dimensions:redux_middleware_objectSpread(redux_middleware_objectSpread({},b.dimensions||{}),c.meta.analytics.dimensions||{})});return"undefined"!=typeof window&&window.DD_RUM&&window.DD_RUM.addAction&&window.DD_RUM.addAction(l.action,l),a}}}}}}]);
//# sourceMappingURL=5462.39989723dc629a779ed5.async.web.js.map