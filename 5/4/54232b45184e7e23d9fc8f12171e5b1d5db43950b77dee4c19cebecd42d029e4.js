var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.Aunction"==typeof Object.defineProperties?Object.defineProperty:function(c,d,e){c!=Array.prototype&&c!=Object.prototype&&(c[d]=e.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(c,d,e,h){if(d){e=$jscomp.global;c=c.split(".");for(h=0;h<c.length-1;h++){var a=c[h];a in e||(e[a]={});e=e[a]}c=c[c.length-1];h=e[c];d=d(h);d!=h&&null!=d&&$jscomp.defineProperty(e,c,{configurable:!0,writable:!0,value:d})}};$jscomp.underscoreProtoCanBeSet=function(){var c={a:!0},d={};try{return d.__proto__=c,d.a}catch(e){}return!1};
$jscomp.setPrototypeOf="function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(c,d){c.__proto__=d;if(c.__proto__!==d)throw new TypeError(c+" is not extensible");return c}:null;$jscomp.polyfill("Object.setPrototypeOf",function(c){return c||$jscomp.setPrototypeOf},"es6","es5");
var __extends=this&&this.__extends||function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,c){d.__proto__=c}||function(c,e){for(var d in e)e.hasOwnProperty(d)&&(c[d]=e[d])};return function(d,e){function h(){this.constructor=d}c(d,e);d.prototype=null===e?Object.create(e):(h.prototype=e.prototype,new h)}}(),Horizon;
(function(c){var d=window,e=encodeURIComponent,h=function(){function a(b){void 0===b&&(b=!1);this.navigator=d.navigator;this.imgArray=[];this.horizonUrl="//horizon.globo.com/auth-session/stream";this.horizonActivity="//horizon.globo.com/auth-session/activity";this.hasFullUrl=b;this.intervalID=d.setInterval(this.proxy(this.cleanImg,this,{}),1E5)}a.prototype.cleanImg=function(){this.imgArray=[]};a.prototype.ajaxPost=function(b,f){if(void 0===this.navigator.sendBeacon||!1===this.navigator.sendBeacon(this.horizonUrl,
b)){var a=new XMLHttpRequest;a.open("POST",this.horizonUrl,"boolean"===typeof f.sendDelay?f.sendDelay:void 0===f.sendDelay?!0:!1);a.setRequestHeader("Content-Type","application/json");a.withCredentials=!0;f.callbackError&&(a.addEventListener("error",f.callbackError),a.addEventListener("abort",f.callbackError),a.addEventListener("load",function(){a.readyState===XMLHttpRequest.DONE&&400<=a.status&&f.callbackError(b)}));a.send(b)}};a.prototype.encodeQueryData=function(b){var a=[],c;for(c in b)a.push(e(c)+
"="+e(b[c]));return a.join("&")};a.prototype.ajaxImg=function(b){var a=new Image(1,1);this.imgArray.push(a);b=this.horizonActivity+"/"+b.product+"/"+b.operation+"?object="+b.object+"&"+this.encodeQueryData(b.attributes);a.src=b};a.prototype.proxy=function(b,a,c){return function(){b.apply(a,[c])}};a.prototype.getMeta=function(b){b=document.querySelector('meta[property="'+b+'"]')||{};return void 0===b.content?"":b.content};a.prototype.getUrl=function(b){return this.hasFullUrl?e(b):e(b&&b.split("#")[0])};
return a}();c.Utils=h})(Horizon||(Horizon={}));
(function(c){var d=window,e=console;c.send=function(a,b){a.notifySubscribers("collect");if("number"===typeof a.intervalID&&0<a.signalBuffer.length){var c=JSON.stringify(a.signalBuffer);a.clearSignalBuffer();b.callbackError=a.utils.proxy(a.restoreBuffer,a,c);a.utils.ajaxPost(c,b)}};var h=function(){function a(){this.clientVersion="0.3.11";this.subscribers={};this.utils=new c.Utils;void 0===a.instance&&(a.instance=this,this.subscribers.collect={},this.subscribers.focus={},this.subscribers.blur={},this.intervalID=
d.setInterval(c.send,1E4,this,{callbackError:void 0,sendDelay:!0}),this.signalBuffer=[],d.addEventListener("beforeunload",this.utils.proxy(this.forceSend,this,{})),d.addEventListener("unload",this.utils.proxy(this.forceSend,this,{})));return a.instance}a.prototype.subscribe=function(b,a,c){try{this.subscribers[b][a]=c}catch(m){e.log(m.message)}};a.prototype.unsubscribe=function(b,a){try{delete this.subscribers[b][a]}catch(l){e.log(l.message)}};a.prototype.notifySubscribers=function(b){b=this.subscribers[b];
for(var a in b)if(b.hasOwnProperty(a))try{b[a]()}catch(l){e.log(l.message)}};a.prototype.clearSignalBuffer=function(){this.signalBuffer=[]};a.prototype.forceSend=function(){c.send(this,{callbackError:void 0,sendDelay:!1})};a.prototype.sendPostView=function(b){this.sendWithQueue(b,"post-view")};a.prototype.sendPostClick=function(b){this.sendWithQueue(b,"post-click")};a.prototype.sendTrack=function(b){this.sendWithImage(b,"track")};a.prototype.sendPageView=function(b){this.sendWithImage(b,"horizon-pageview")};
a.prototype.sendClick=function(b){this.sendWithImage(b,"click")};a.prototype.sendVideoWatch=function(b){this.sendWithImage(b,"watch")};a.prototype.sendVideoWatchLive=function(b){this.sendWithImage(b,"watchlive")};a.prototype.restoreBuffer=function(b){this.signalBuffer=JSON.parse(b).concat(this.signalBuffer).slice(0,200)};a.prototype.sendWithImage=function(b,a){try{b=this.addDefaultParams(b,a),this.utils.ajaxImg(b)}catch(l){e.log(l.message)}};a.prototype.addDefaultParams=function(a,c){a.operation=
c;"object"===typeof a.attributes&&(a.attributes.client_version=this.clientVersion);return a};a.prototype.sendLater=function(a){this.signalBuffer.push(a)};a.prototype.sendWithQueue=function(a,c){try{a=this.addDefaultParams(a,c),this.sendLater(a)}catch(l){e.log(l.message)}};a.instance=void 0;return a}();c.Client=h})(Horizon||(Horizon={}));
(function(c){var d=window,e=encodeURIComponent,h=location,a=document.body,b=document.documentElement,f=d.glb_realtime_map||{},l=function(){function a(){f=d.glb_realtime_map||{};void 0!==d.pvm&&void 0===a.instance&&(a.instance=d.pvm);void 0===a.instance&&(a.instance=this,f.hasFullUrl=f.hasFullUrl||!1,f.categories=f.categories||[],this.utils=new c.Utils(f.hasFullUrl),f.site=f.site||this.getSite(),f.url=f.url||this.getUrl(),d.glb_realtime_map=f,this.pageview=new m(this.utils),this.track=new p(this.utils),
this.click=new n(this.utils));return a.instance}a.prototype.getUrl=function(){var a=f?f.url:void 0;this.utils.hasFullUrl&&(a=h.href);a||(a=h.protocol+"//"+h.hostname+(h.port?":"+h.port:"")+h.pathname);return a};a.prototype.getSite=function(){var a=f?f.site:void 0;if(!a){try{a=this.getUrl().split("//")[1].replace("www.","").split(".")[0]}catch(k){a=void 0}a||(a=h.hostname.replace(".globo.com","").replace(".globoi.com","").replace("www.",""))}return a};a.prototype.nextPage=function(a){try{var b=e(a);
this.track.reloadTrack(b);this.click.reloadClick(b);this.pageview.sendVirtual(b)}catch(q){console.log(q.message)}};a.instance=void 0;return a}();c.Tracker=l;l=function(){function a(a){this.client=new c.Client;this.utils=a}a.prototype.makeDefaultParams=function(){return{object:this.object||this.utils.getUrl(f.url),product:e(f.site)}};a.prototype.listen=function(a,b){for(var k=0,c=a.length;k<c;k++)document.addEventListener(a[k],b,!1)};a.prototype.handleClickListener=function(a){this.listen(["click",
"touchstart"],a)};return a}();var m=function(a){function b(k){k=a.call(this,k)||this;void 0===b.instance&&(b.instance=k,f.noAutoStartTracker||k.client.sendPageView(k.makeParams()));return b.instance}__extends(b,a);b.prototype.inArray=function(a,b){if(b.indexOf)return b.indexOf(a);for(var k=0,c=b.length;k<c;k++)if(b[k]===a)return k;return-1};b.prototype.getCategories=function(){var a=f.categories;if(d.REALTIME&&d.REALTIME.categories)for(var b=d.REALTIME.categories(),c=b.length,e=0;e<c;e++)-1==this.inArray(b[e],
a)&&(a+=b[e])};b.prototype.makeParams=function(){var a=this.makeDefaultParams();a.attributes={Referrer:e(document.referrer),tags:e((f.categories||[]).join(","))};return a};b.prototype.sendVirtual=function(a){this.object=a;a=this.makeParams();this.client.sendPageView(a)};b.instance=void 0;return b}(l),p=function(c){function g(a){var b=c.call(this,a)||this;b.totalTime=0;b.click=void 0;b.objectType=void 0;b.maxScroll=0;void 0===g.instance&&(g.instance=b,b.handleVisibility(),b.handleSendActions(),f.noAutoStartTracker||
b.startTrack(),b.getMetaType(),b.click=new n(a));return g.instance}__extends(g,c);g.prototype.handleScrollListener=function(a){this.listen(["scroll","touchmove"],a)};g.prototype.handleFocusListener=function(a){this.listen(["focus","focusin","pageshow","mousemove"],a)};g.prototype.handleBlurListener=function(a){this.listen(["blur","focusout","pagehide"],a)};g.prototype.handleSendActions=function(){var a=this.utils.proxy,b=a(this.handleSend,this,{});this.handleFocusListener(b);this.handleBlurListener(b);
this.handleClickListener(b);this.handleScrollListener(b);d.addEventListener("beforeunload",a(this.sendTrack,this,{}),!0)};g.prototype.makeVisibilityListener=function(a,b){var c=this.utils.proxy;this.listen([b],c(this.handleVisibilityChange,this,a));this.listen([b],c(this.handleSend,this,{}))};g.prototype.handleVisibility=function(){var a=this.utils.proxy;document.visibilityState?(this.makeVisibilityListener("hidden","visibilitychange"),this.makeVisibilityListener("msHidden","msvisibilitychange"),
this.makeVisibilityListener("webkitHidden","webkitvisibilitychange")):(this.handleFocusListener(a(this.startTrack,this,"")),this.handleBlurListener(a(this.stopTrack,this,"")))};g.prototype.getAbsScroll=function(){return d.pageYOffset||a.scrollTop||b.scrollTop||0};g.prototype.getTotalHeight=function(){return Math.max(a.scrollHeight||0,b.scrollHeight||0,a.offsetHeight||0,b.offsetHeight||0,a.clientHeight||0,b.clientHeight||0)};g.prototype.getClientHeight=function(){return d.innerHeight||b.clientHeight||
a.clientHeight||0};g.prototype.getScroll=function(){var a=this.getTotalHeight();if(0==a)return 0;a=(this.getAbsScroll()+this.getClientHeight())/a*100;this.maxScroll=this.maxScroll>a?this.maxScroll:a;return parseFloat(this.maxScroll.toString()).toFixed(2)};g.prototype.getMetaType=function(){this.objectType=this.utils.getMeta("metrics:type")||this.utils.getMeta("og:type")||""};g.prototype.makeParams=function(){var a=this.makeDefaultParams();a.attributes={time:this.totalTime,clicks:this.click.number,
scroll:this.getScroll(),scrollabs:this.getAbsScroll(),objecttype:e(this.objectType)};return a};g.prototype.calcTime=function(){var a=new Date,b=0;try{b=a.getTime()-this.lastSentDate.getTime()}catch(r){}return b};g.prototype.shouldSend=function(){return 1E4<this.calcTime()?!0:!1};g.prototype.sendTrack=function(){this.stopTrack();this.client.sendTrack(this.makeParams());this.startTrack()};g.prototype.handleVisibilityChange=function(a){document[a]?this.stopTrack():this.startTrack()};g.prototype.handleSend=
function(){this.shouldSend()&&this.sendTrack()};g.prototype.stopTrack=function(){this.client.notifySubscribers("blur");this.totalTime+=this.calcTime()};g.prototype.startTrack=function(){this.client.notifySubscribers("focus");this.lastSentDate=new Date};g.prototype.reloadTrack=function(a){this.sendTrack();this.object=a;this.getMetaType();this.maxScroll=this.totalTime=0;this.click.number=0};g.instance=void 0;return g}(l),n=function(a){function b(c){c=a.call(this,c)||this;c.number=0;void 0===b.instance&&
(b.instance=c,c.startListen());return b.instance}__extends(b,a);b.prototype.startListen=function(){var a=this.utils.proxy;this.handleClickListener(a(this.handleClick,this,{}))};b.prototype.handleClick=function(){this.number++};b.prototype.reloadClick=function(a){this.object=a;this.number=0};b.instance=void 0;return b}(l)})(Horizon||(Horizon={}));window.pvm=new Horizon.Tracker;.filter(e=>!b.get(e))
return r.length?Promise.reject(Error(`[global-webdeps] Unknown dependency(ies): ${r}`)):Promise.all(t.map(e=>{const t=b.get(e)
return t?t.request():Promise.reject()}))}),i.then(()=>globalWebdeps(...e.im.map(([e])=>e)))})()
)({"ex":[["globoid-js","https://s3.glbimg.com/v1/AUTH_3ed1877db4dd4c6b9b8f505e9d4fab03/globoid-js/v1.12.1/globoid-js.min.js","window.glb != null && window.glb.globoIdClientMap != null"],["globo-ab-sdk","https://s3.glbimg.com/v1/AUTH_da787d4f4e8d46e3ad76d5fa568fe786/globo-ab/latest/globo-ab-sdk.min.js","typeof window.GloboAbSdk !== 'undefined'"],["clappr-detach-plugin","https://s3.glbimg.com/v1/AUTH_ba8e460c944543468c3c80cb9675751f/plugins/clappr-detach-plugin.js","window.ClapprDetachPlugin && typeof window.ClapprDetachPlugin === 'function'"],["globo-ab-v4","https://s3.glbimg.com/v1/AUTH_da787d4f4e8d46e3ad76d5fa568fe786/globo-ab/latest/globo-ab.min.js","typeof window.GloboAB !== 'undefined'"],["clappr","https://s3.glbimg.com/v1/AUTH_e1b09a2d222b4900a437a46914be81e5/web/player/stable/player.min.js","typeof WP3 !== undefined && typeof Clappr !== undefined"],["player-plugin-viewport","https://s3.glbimg.com/v1/AUTH_05f06ca986b54d6e9c5df94927ccf7fc/libs/clappr-plugins/viewport-play/v1.1.4/viewport-play-plugin.js","window.ViewportPlayPlugin && typeof ViewportPlayPlugin.default() === 'function'"],["lightbox","https://s3.glbimg.com/cdn/libs/gui-lightbox/1.6.3/js/gui.lightbox.min.js","window.gui !== undefined "],["video-player-abstractor","https://s3.glbimg.com/v1/AUTH_448612afd5444aab9ff73ea54413fbd1/js/video-player-abstractor.umd.js","typeof window.videoPlayer() !== undefined"],["chartbeat","https://s3.glbimg.com/v1/AUTH_ba8e460c944543468c3c80cb9675751f/plugins/chartbeat/chartbeat-plugin.min.js","window.ChartbeatPlugin && typeof window.ChartbeatPlugin === 'function'"],["video-recommendation-plugin","https://s3.glbimg.com/v1/AUTH_05f06ca986b54d6e9c5df94927ccf7fc/libs/clappr-plugins/video-recommendation/v2.2.1/video-recommendation-plugin.js","window.VideoRecommendationPlugin && typeof window.VideoRecommendationPlugin === 'function'"],["globo-rec","https://s3.glbimg.com/v1/AUTH_448612afd5444aab9ff73ea54413fbd1/js/rec-lib.min.js","typeof window.GloboRec !== \"undefined\""],["entretenimento-ui-beta","https://s3.glbimg.qa.globoi.com/v1/AUTH_9a61668712cd4619a591f7d7f06a8c47/libs/entretenimento-ui.js","window.EntretenimentoUI !== undefined"],["receitas-ui","https://s3.glbimg.com/v1/AUTH_dc78b47e64fc4dbc9bbcfa54b0888117/libs/receitas-ui.js","window.ReceitasUI !== undefined"],["horizon-client-v1","https://s3.glbimg.com/v1/AUTH_ba8e460c944543468c3c80cb9675751f/libs/horizon/1.10.0/globocom-horizon.min.js","!!window.horizon"],["raven","https://cdn.ravenjs.com/3.19.1/raven.min.js","typeof window.Raven === 'function'"],["player","https://s3.glbimg.com/v1/AUTH_e1b09a2d222b4900a437a46914be81e5/api/stable/web/api.min.js","window.WM && typeof WM.Player === 'function'"],["preact","https://s3.glbimg.com/v1/AUTH_47600d3497184478b773a886f1305b22/libs/preact.js","window.Preact !== undefined"],["entretenimento-ui","https://s3.glbimg.com/v1/AUTH_47600d3497184478b773a886f1305b22/libs/entretenimento-ui.js","window.EntretenimentoUI !== undefined"],["pow","https://royale.globo.com/assets/pow/3.0.0/bundle.js","window.pow !== undefined"],["hcaptcha","https://hcaptcha.com/1/api.js?hl=pt-BR&render=explicit&onload=hcaptchaLoad","window.hcaptcha !== undefined"],["globo-captcha","https://captcha.globo.com/widget.js","window.GloboCaptcha !== undefined"],["amp-social-share","https://cdn.ampproject.org/v0/amp-social-share-0.1.js","window.__AMP_SERVICES[\"amp-social-share\"] !== undefined"],["amp","https://cdn.ampproject.org/v0.js","window.AMP !== undefined"],["recaptcha","https://www.google.com/recaptcha/api.js?render=explicit","window.grecaptcha !== undefined"],["cadun","https://s.glbimg.com/pc/ca/cadun.js","window.Cadun !== undefined || window.Cadun.user !== undefined || window.Cadun.user.me !== undefined"]],"im":[["globo-ab-34","https://s3.glbimg.com/v1/AUTH_da787d4f4e8d46e3ad76d5fa568fe786/globo-ab/3.4.0/globo-ab.min.js","typeof window.GloboAB34 === 'function'"],["globo-ab-v2","https://s3.glbimg.com/v1/AUTH_da787d4f4e8d46e3ad76d5fa568fe786/globo-ab/globo-ab-v2.min.js","typeof window.globoAB !== 'undefined'"],["globo-ab","https://s3.glbimg.com/v1/AUTH_da787d4f4e8d46e3ad76d5fa568fe786/globo-ab/3.0/globo-ab.min.js","typeof window.GloboAB === 'function'"]]})</script><script type="text/javascript" id="SETTINGS">
    window.glb = window.glb || {};
    window.glb.barra = {"exibeAssineJa": true, "exibeCentral": true, "incluirSawpf": true};
    window.glb.getCurrentEnv = () => "prod";

    window.cdaaas = window.cdaaas || {};
    window.cdaaas.SETTINGS = {
        MOBILE_GROUP: "desktop",
        ENV: "prod",
        CHANNEL: "desktop",
        CANONICAL_URL: "https://ge.globo.com/sp/santos-e-regiao/futebol/times/santos/",
        TEMPLATE_TYPE: "home-template",
        TITLE: "Santos | Últimas notícias, resultados e próximos jogos | ge",
        SITE_ID: "ge",
        SITE_NAME: "ge",
        COR: "#06AA48",
        WEBMEDIA_ENV: "prod",
        CATEGORIAS: [
                "materia",
                "multi-content",
                "sp/santos-e-regiao/futebol/times/santos",
        ],

        PRODUCT_UA: "UA-296593-9",
        TAG_MANAGER_STRUCTURE_TREE: '["globoesporte", "sp", "santos e região", "futebol", "times", "santos"]',
        TAG_MANAGER_PAGE_NAME: "materia",
        TAG_MANAGER_SITE_PAGE: 'globoesporte.com/futebol/times/materias',
        TAG_MANAGER_AD_UNIT: 'tvg_GE/Futebol/Times/Santos',
        TAG_MANAGER_AD_CUSTOM_DATA: "tvg_pgStr=globoesporte/sp/santos e região/futebol/times/santos",
        TAG_MANAGER_AD_EXTRAS: null,        BRANDED_CONTENT: false,        ZONE_ID: "-",        VIEW_COMMENTS: true,
        HOST_COMENTARIOS: "https://comentarios.globo.com",
        COMENTARIOS_URI: "esportes/sp/santos-e-regiao/futebol/times/santos",COMENTARIOS_IDEXTERNO: "multi-content/c4a79ec0-4dd7-4737-8be7-1a5eede52532",        HOST_WEBMEDIA: "https://s.videos.globo.com",
        AB_VERSION: "",
        AB_ROUTE_PAGEVIEW: "https://globo-ab.globo.com/ab/",
        AB_TEST_NAME: "",
        AB_ROUTE_CONVERT: "https://globo-ab.globo.com/convert/",
        FACEBOOK_APP_ID: "289255557788943",
        REALTIME_PAGEVIEW: "https://s.glbimg.com/bu/rt/js/glb%2Dpv%2Dmin.js",
        PLAYER: {
            OPTIONS : {
                adUnit: "tvg_GE\/Futebol\/Times\/Santos",
                adCmsId: "11413",
                adAccountId: "95377733",
                adCustomData: "tvg_pgStr=globoesporte\/sp\/santos e regi\u00e3o\/futebol\/times\/santos" + "&ambient=web",
                daxExtras: { ambient: "web" }
            },
            ASYNC_OPTIONS: {
                adCustomData: undefined,
            }
        },
        RESOURCE_ID: "c4a79ec0-4dd7-4737-8be7-1a5eede52532",
        OIDC: {
            CLIENT_ID: "",
            REDIRECT_URL: "",
            URL: "",
            REALM: ""
        },
        CHARTBEAT: {
            ACCOUNT_ID: "29079",
            DOMAIN: "globoesporte.globo.com"
        }
    };
</script><script id="SETTINGS_EXTENSION">
      window.cdaaas = window.cdaaas || {};
      window.cdaaas.SETTINGS = window.cdaaas.SETTINGS || {}
      window.cdaaas.SETTINGS.SERVICE_WORKER = {
          url: "https://ge.globo.com/sw.js",
          active: true
      };
      window.cdaaas.SETTINGS.fullHomeSSR = true;
  </script><script>
      window.SETTINGS = window.SETTINGS || {};
      window.SETTINGS.adAccountId = "95377733" || '';
      window.SETTINGS.adCmsId = "11413" || '';
      window.SETTINGS.adCustomData = "tvg_pgStr=globoesporte\/sp\/santos e regi\u00e3o\/futebol\/times\/santos" || '';
      window.SETTINGS.adUnit = "tvg_GE\/Futebol\/Times\/Santos" || '';
      window.SETTINGS.zoneId = "-" || '';
      window.SETTINGS.ambient = window.utag_data.ambient || 'web';
  </script><script>
          var glb = glb || {};
          glb.fnBuscaUrl = "globoesporte.globo.com/busca";
        </script><script id="SETTINGS">
   cdaaas = window.cdaaas || {};
   cdaaas.SETTINGS = {
    HAS_GLOBOPAGE: true,
    HAS_SCROLLSPY: true,
    HAS_FEATURE_FLAG_SECTION: true,
    ...cdaaas.SETTINGS,
     SERVICE_WORKER: {
        url: "https://ge.globo.com/sw.js",
        active: true
    }
  }
</script><style>

:root {
  --glb-primary-color: #000000;
  --glb-secondary-color: #000000;
  --glb-hiperlink-color: #000000;
  --glb-hiperlink-hover-color: #000000;
  --glb-contrast-primary-color: #ffffff;
  --glb-background-color: #fff;
  --glb-base-text-color: #333;
  --glb-title-color: #111;
  --glb-aux-text-color: #555;
}

.theme-color-primary{
  color: #000000;
  fill: currentColor;
}

.theme-border-color-primary,
.theme-border-color-primary-before::before,
.theme-border-color-primary-after::after {
  border-color: #000000;
}

.theme-bg-color-primary {
  background-color: #000000;
}

.theme a {
  color: #000000;
}

.theme a:hover,
.theme-hover a:hover {
  color: #000000;
}

.theme-ordered-list-color-primary li::before {
  color: #000000;
  fill: currentColor;
}
  body *::selection, body *::-moz-selection {
    background: rgba(0, 0, 0, 0.2);
  }

  body {
    color: #333;
    background-color: #fff;
  }

  .gui-color-primary-bg {
    background-color: #000000;
  }

</style><!-- show-skeletons --><script>
  (function() {
    const glbCodex = { is_available: true };
    window.glbCodex = glbCodex;
  })();
</script><!-- codex-v0 --><style>
    @font-face {
  font-family: glbOpenSans;
  font-weight: 700;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-bold-normal.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-bold-normal.woff2)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: glbOpenSans;
  font-style: italic;
  font-weight: 700;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-bold-italic.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-bold-italic.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: glbOpenSans;
  font-style: italic;
  font-weight: 400;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-regular-italic.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-regular-italic.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: glbOpenSans;
  font-weight: 300;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-light-normal.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-light-normal.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: glbOpenSans;
  font-style: italic;
  font-weight: 300;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-light-italic.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-light-italic.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: glbOpenSans;
  font-weight: 400;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-regular-normal.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-regular-normal.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: glbOpenSans;
  font-weight: 600;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-semibold-normal.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-semibold-normal.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: glbOpenSans;
  font-style: italic;
  font-weight: 600;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-semibold-italic.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-semibold-italic.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: "Open Sans";
  font-weight: 700;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-bold-normal.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-bold-normal.woff2)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 700;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-bold-italic.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-bold-italic.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 400;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-regular-italic.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-regular-italic.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: "Open Sans";
  font-weight: 300;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-light-normal.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-light-normal.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 300;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-light-italic.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-light-italic.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: "Open Sans";
  font-weight: 400;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-regular-normal.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-regular-normal.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: "Open Sans";
  font-weight: 600;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-semibold-normal.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-semibold-normal.woff)
      format('woff');
  font-display: swap;
}

@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 600;
  src: url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-semibold-italic.woff2)
      format('woff2'),
    url(https://s3.glbimg.com/v1/AUTH_b922f1376f6c452e9bb337cc7d996a6e/codex/foundation/typefaces/opensans-semibold-italic.woff)
      format('woff');
  font-display: swap;
}

    /**
 * Do not edit directly
 * Generated on Mon, 22 Nov 2021 14:53:28 GMT
 */

:root {
  --spacing-10: 4px;
  --spacing-20: 8px;
  --spacing-30: 16px;
  --spacing-40: 24px;
  --spacing-50: 40px;
  --spacing-60: 64px;
  --spacing-70: 104px;
  --font-line-height-spaced: 150%;
  --font-line-height-compact: 120%;
  --font-variation-settings-display-condensed-italic: initial;
  --font-variation-settings-display-condensed-roman: initial;
  --font-variation-settings-display-normal-italic: initial;
  --font-variation-settings-display-normal-roman: initial;
  --font-variation-settings-book-condensed-italic: initial;
  --font-variation-settings-book-condensed-roman: initial;
  --font-variation-settings-book-normal-italic: initial;
  --font-variation-settings-book-normal-roman: initial;
  --font-feature-settings-display-italic: initial;
  --font-feature-settings-display-roman: initial;
  --font-feature-settings-book-italic: initial;
  --font-feature-settings-book-roman: initial;
  --font-size-10-responsive-book-letter-spacing: 0.005em;
  --font-size-10-responsive-book: 10px;
  --font-size-20-responsive-book-letter-spacing: -0.01em;
  --font-size-20-responsive-book: 12px;
  --font-size-30-responsive-book-letter-spacing: -0.015em;
  --font-size-30-responsive-book: 14px;
  --font-size-40-responsive-book-letter-spacing: -0.02em;
  --font-size-40-responsive-book: 16px;
  --font-size-50-responsive-book-letter-spacing: -0.025em;
  --font-size-50-responsive-book: 18px;
  --font-size-60-responsive-book-letter-spacing: -0.03em;
  --font-size-60-responsive-book: 20px;
  --font-size-70-responsive-display-letter-spacing: -0.035em;
  --font-size-70-responsive-display: 24px;
  --font-size-80-responsive-display-letter-spacing: -0.04em;
  --font-size-80-responsive-display: 32px;
  --font-size-90-responsive-display-letter-spacing: -0.045em;
  --font-size-90-responsive-display: 40px;
  --font-size-100-responsive-display-letter-spacing: -0.05em;
  --font-size-100-responsive-display: 48px;
  --font-size-110-responsive-display-letter-spacing: -0.055em;
  --font-size-110-responsive-display: 56px;
  --font-size-120-responsive-display-letter-spacing: -0.06em;
  --font-size-120-responsive-display: 64px;
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-regular: 400;
  --font-weight-light: 300;
  --font-family-monospaced-fallback: "JetBrains Mono", 'Lucida Console', Monaco, monospace;
  --font-family-monospaced: "JetBrains Mono";
  --font-family-display-fallback: "Avenir Next", Avenir, Inter, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, Noto, Ubuntu, "Segoe UI", sans-serif;
  --font-family-display: "glbOpenSans", "Open Sans";
  --font-family-book-fallback: Inter, -apple-system, BlinkMacSystemFont, "Avenir Next", Avenir, "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
  --font-family-book: "glbOpenSans", "Open Sans";
}
