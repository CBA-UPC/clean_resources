<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" ct" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />

     <style>
      @font-face {
        font-family: 'ABC Oracle Plus Variable';
        src: url('https://c5.patreon.com/external/fonts/oracle/PatreonOraclePlusVariable-Regular.woff2') format('woff2'),
          url('https://c5.patreon.com/external/fonts/oracle/PatreonOraclePlusVariable-Regular.woff') format('woff');
        font-weight: 1 999;
        font-display: fallback;
        font-style: oblique 0deg 20deg;
      }
    </style>

    <script>
  !function(){if('PerformanceLongTaskTiming' in window){var g=window.__tti={e:[]};
  g.o=new PerformanceObserver(function(l){g.e=g.e.concat(l.getEntries())});
  g.o.observe({entryTypes:['longtask']})}}();
</script>

<script>
    // https://github.com/GoogleChromeLabs/tti-polyfill
    (function(){var h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,k="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function l(){l=function(){};h.Symbol||(h.Symbol=m)}var n=0;function m(a){return"jscomp_symbol_"+(a||"")+n++}
function p(){l();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=h.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&k(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return q(this)}});p=function(){}}function q(a){var b=0;return r(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function r(a){p();a={next:a};a[h.Symbol.iterator]=function(){return this};return a}function t(a){p();var b=a[Symbol.iterator];return b?b.call(a):q(a)}
function u(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var v=0;function w(a,b){var c=XMLHttpRequest.prototype.send,d=v++;XMLHttpRequest.prototype.send=function(f){for(var e=[],g=0;g<arguments.length;++g)e[g-0]=arguments[g];var E=this;a(d);this.addEventListener("readystatechange",function(){4===E.readyState&&b(d)});return c.apply(this,e)}}
function x(a,b){var c=fetch;fetch=function(d){for(var f=[],e=0;e<arguments.length;++e)f[e-0]=arguments[e];return new Promise(function(d,e){var g=v++;a(g);c.apply(null,[].concat(u(f))).then(function(a){b(g);d(a)},function(a){b(a);e(a)})})}}var y="img script iframe link audio video source".split(" ");function z(a,b){a=t(a);for(var c=a.next();!c.done;c=a.next())if(c=c.value,b.includes(c.nodeName.toLowerCase())||z(c.children,b))return!0;return!1}
function A(a){var b=new MutationObserver(function(c){c=t(c);for(var b=c.next();!b.done;b=c.next())b=b.value,"childList"==b.type&&z(b.addedNodes,y)?a(b):"attributes"==b.type&&y.includes(b.target.tagName.toLowerCase())&&a(b)});b.observe(document,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["href","src"]});return b}
function B(a,b){if(2<a.length)return performance.now();var c=[];b=t(b);for(var d=b.next();!d.done;d=b.next())d=d.value,c.push({timestamp:d.start,type:"requestStart"}),c.push({timestamp:d.end,type:"requestEnd"});b=t(a);for(d=b.next();!d.done;d=b.next())c.push({timestamp:d.value,type:"requestStart"});c.sort(function(a,b){return a.timestamp-b.timestamp});a=a.length;for(b=c.length-1;0<=b;b--)switch(d=c[b],d.type){case "requestStart":a--;break;case "requestEnd":a++;if(2<a)return d.timestamp;break;default:throw Error("Internal Error: This should never happen");
}return 0}function C(a){a=a?a:{};this.w=!!a.useMutationObserver;this.u=a.minValue||null;a=window.__tti&&window.__tti.e;var b=window.__tti&&window.__tti.o;this.a=a?a.map(function(a){return{start:a.startTime,end:a.startTime+a.duration}}):[];b&&b.disconnect();this.b=[];this.f=new Map;this.j=null;this.v=-Infinity;this.i=!1;this.h=this.c=this.s=null;w(this.m.bind(this),this.l.bind(this));x(this.m.bind(this),this.l.bind(this));D(this);this.w&&(this.h=A(this.B.bind(this)))}
C.prototype.getFirstConsistentlyInteractive=function(){var a=this;return new Promise(function(b){a.s=b;"complete"==document.readyState?F(a):window.addEventListener("load",function(){F(a)})})};function F(a){a.i=!0;var b=0<a.a.length?a.a[a.a.length-1].end:0,c=B(a.g,a.b);G(a,Math.max(c+5E3,b))}
function G(a,b){!a.i||a.v>b||(clearTimeout(a.j),a.j=setTimeout(function(){var b=performance.timing.navigationStart,d=B(a.g,a.b),b=(window.a&&window.a.A?1E3*window.a.A().C-b:0)||performance.timing.domContentLoadedEventEnd-b;if(a.u)var f=a.u;else performance.timing.domContentLoadedEventEnd?(f=performance.timing,f=f.domContentLoadedEventEnd-f.navigationStart):f=null;var e=performance.now();null===f&&G(a,Math.max(d+5E3,e+1E3));var g=a.a;5E3>e-d?d=null:(d=g.length?g[g.length-1].end:b,d=5E3>e-d?null:Math.max(d,
f));d&&(a.s(d),clearTimeout(a.j),a.i=!1,a.c&&a.c.disconnect(),a.h&&a.h.disconnect());G(a,performance.now()+1E3)},b-performance.now()),a.v=b)}
function D(a){a.c=new PerformanceObserver(function(b){b=t(b.getEntries());for(var c=b.next();!c.done;c=b.next())if(c=c.value,"resource"===c.entryType&&(a.b.push({start:c.fetchStart,end:c.responseEnd}),G(a,B(a.g,a.b)+5E3)),"longtask"===c.entryType){var d=c.startTime+c.duration;a.a.push({start:c.startTime,end:d});G(a,d+5E3)}});a.c.observe({entryTypes:["longtask","resource"]})}C.prototype.m=function(a){this.f.set(a,performance.now())};C.prototype.l=function(a){this.f.delete(a)};
C.prototype.B=function(){G(this,performance.now()+5E3)};h.Object.defineProperties(C.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return[].concat(u(this.f.values()))}}});var H={getFirstConsistentlyInteractive:function(a){a=a?a:{};return"PerformanceLongTaskTiming"in window?(new C(a)).getFirstConsistentlyInteractive():Promise.resolve(null)}};
"undefined"!=typeof module&&module.exports?module.exports=H:"function"===typeof define&&define.amd?define("ttiPolyfill",[],function(){return H}):window.ttiPolyfill=H;})();
</script>

<script>
 (function(h,o,u,n,d) {
   h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
   d=o.createElement(u);d.async=1;d.src=n
   n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
})(window,document,'script','https://www.datadoghq-browser-agent.com/datadog-rum-us.js','DD_RUM')
  DD_RUM.onReady(function() {
    let lastVisibilityChange = 0;
    let lastFocusChange = 0;

    window.document.addEventListener('visibilitychange', () => {
      lastVisibilityChange = performance.now();
    });

    window.addEventListener('focus', () => {
      lastFocusChange = performance.now();
    });

    window.addEventListener('blur', () => {
      lastFocusChange = performance.now();
    });

    function beforeSend(event, context) {
      maybeAddWindowState(event, context);
    }

    function maybeAddWindowState(event, context) {
      if (context?.performanceEntry?.entryType !== 'longtask') {
        return;
      }

      const startTime = context.performanceEntry.startTime;

      // We consider the window as focused if it is currently focused and a focus change didn't occur since the event.
      event.context.is_focused = lastFocusChange < startTime && window.document.hasFocus();

      // We consider the window as visible if it is currently visible and a visibility change didn't occur since the event.
      event.context.is_visible = lastVisibilityChange < startTime && window.document.visibilityState === 'visible';
    }

    var bundle = "error"
    DD_RUM.addRumGlobalContext('bundle', bundle)
    DD_RUM.init({
        clientToken: 'pub7995ae7540c21b80d212a1606ebaffc5',
        applicationId: 'e5d0bc1b-af04-460d-8347-d414ad7e575d',
        service: 'patreon.app.api',
        allowedTracingOrigins: [/(http?):\/\/(?!datadome)\w+\.patreon\.com/],
        sampleRate: window.location && window.location.search && window.location.search.indexOf('force_rum') !== -1 ? 100 : 1,
        beforeSend
    });

    var rumContext = {"execution_env": "kubernetes", "current_user_id": 0, "is_logged_in": false, "feature_flags": {"rename_explore_on_left_nav": false, "verify_user_location": true, "hide_twitch_social_connect": false, "us_ca_location_capture": true, "pledgeflow_location_modal_cancel": false, "new_creator_edit_page_action_bar": false, "enable_notification_platform": true, "enable_color_scheme_selection": false, "color_scheme_dark_fallback": false, "enable_drops": false, "enable_drops_consumption_web": true, "enable_google_analytics_4": true, "enable_spotify": true, "enable_spotify_for_patrons": true, "log_exposures_once": true, "digital_commerce_purchases_killswitch": false, "digital_commerce_shop_killswitch": false, "include_transcend_manager": true, "enable_ga_fix_and_ga4_migration": true, "enable_video_player_pip": true, "enable_video_player_cast": false, "post_collections_ga": true, "digital_commerce_beta_features": false, "new_change_email": false, "pause_payout_processing": false, "enable_payoneer_payout_processing": true, "enable_dac7_w8_form_changes": true, "enable_mod_hub": false, "enable_edit_settings_idv_self_enrollment": true, "cm_enable_ignore_tpv_for_idv_self_enrollment": true, "enable_bio_editing": false, "gtm2_launch": true, "enable_community_privacy_toggle": true, "digital_commerce_iap_feature": false, "digital_commerce_iap_coming_soon_banner": true, "enable_web_chats": true, "no_bootstrap_in_module": true, "digital_commerce_shop_page_search": false, "nion_disable_default_includes": true, "no_bootstrap_access_in_configure_store": true, "digital_commerce_enable_shop_launch": false, "allow_unlaunched_currencies": false}, "path": "no_url_rule_matched"};
    DD_RUM.addRumGlobalContext('patreon', rumContext);

    if (window && window.fetch) {
      ttiPolyfill.getFirstConsistentlyInteractive()
      .then((tti) => {
          window.DD_RUM && window.DD_RUM.addTiming('tti', tti);
      });
    }
  })
</script> 


    <script
        src="https://browser.sentry-cdn.com/7.77.0/bundle.min.js"
        integrity="sha384-dAz2mzL4LHgP2DydsSr1u5UiBpN3vIvGvvQH/aAFVEEI3+RhedvpjrX2xwXdwNUk"
        crossorigin="anonymous"
    ></script>

    <script
        src="https://browser.sentry-cdn.com/7.77.0/rewriteframes.min.js"
        integrity="sha384-CTWTIpE04D4vKV1lGoGijDt4dYroyyb/omQgfPE7k+bxU0+XgCRHggJUWayddu16"
        crossorigin="anonymous"
    ></script>

    <script>
        let integrations;

        if (Sentry.Integrations.RewriteFrames !== undefined) {
            integrations = [new Sentry.Integrations.RewriteFrames({
                root: 'content-based/'
            })];
        }

        Sentry.init({
            dsn: 'https://9f4cd98136744e53b233bbe399c3a0f1@o83571.ingest.sentry.io/5405162',
            release: '323da3528d5472367e8b9b36f34ba09f9a36f064',
            environment: 'production',
            debug: false,
            allowUrls: ['patreon.com'],
            tracesSampleRate: 0.0,
            maxBreadcrumbs: 10,
            initialScope: {
                tags: {
                    environment: 'production',
                    logger: 'frontend',
                    origin: 'client',
                    source: 'js',
                    nextJs: false,
                },
            },
            integrations: integrations,
            ignoreErrors: [
                'ResizeObserver loop',
                '[avo]',
                'DEPRECATION WARNING',
                'Minified React error #321',
                'top.GLOBALS',
                'originalCreateNotification',
                'canvas.contentDocument',
                'fb_xd_fragment',
            ],
        })
    </script>

     <script type="text/javascript" src="//c1.patreon.com/content-based/error.94a1f5b8b3dee823c541.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/runtime~error.9c66d2d192ab78ff43c0.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.patreon.3ad0c047.510a59732eea0b059590.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.lodash.415c3e9d.36217c24b67ce8e16b7f.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.sentry.153c8f2c.f074a365daf8f4186464.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.sendbird.bc86e0a6.86be8e5a038f87e21d50.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.corejspure.88b4fd967755cb853efc.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.next.55c629ee6a02e5f70466.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/7666.6970ca5e74808a5a5467.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/2777.40fd7d7e9508223f2b18.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/4819.0851894a4526bf639bfc.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.patreon.f1d2c741.f5c8e20a6d49c1615633.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.patreon.aa97671f.74f29d92668d72e4cc5f.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.patreon.5cf13fb7.53a433f23b9d2e28d3a0.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.lodash.1cdde194.d8a422da607037d206cb.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.sentry.f1819489.a387347e832e86abd917.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/defaultVendors.sendbird.24729920.2b507638c42c2eb42e1d.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/7427.acdd78e0128a376ad2ad.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/1997.5029e0895bfcbea0ec1a.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/3642.635e7a749cd6f568d1b1.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/9192.b93a3b80eb730e90c146.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/8536.863531120e2b15874ba0.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/9509.f6a0641c6ea94260e1e9.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/6504.2197fac502ac5f41700e.js" defer></script>
    <script type="text/javascript" src="//c1.patreon.com/content-based/9244.eed5ef0e143b9e952f58.js" defer></script>

    <script>
      window.patreon = window.patreon || {};
      window.patreon.apiServer = "www.patreon.com/api";
      window.patreon.webServer = "www.patreon.com";
      window.patreon.userId = "0";
      window.patreon.csrfSignature = "7VxunEPu0LV_q9_lZXyGbEbFybquQdQNDR5-vI4sKuk";
      window.patreon.requestUUID = "cb12f9ff-19e6-5334-b13b-8ba76444add6";
      window.patreon.fbPixelId = "267568703576098";

      window.patreon.theme = 'america';

      window.patreon.bootstrap = window.patreon.bootstrap || {};
      window.patreon.campaignFeatures = window.patreon.campaignFeatures || {};
      window.patreon.experiments = window.patreon.experiments || {};
      window.patreon.featureFlags = window.patreon.featureFlags || {};
      window.patreon.presets = window.patreon.presets || {};

      Object.assign(window.patreon.bootstrap, {"currency_constants":{"big_money_cents":10000,"default_custom_pledge_cents":500,"default_pledge_amount_cents":100,"max_pledge_cents":1500000,"max_product_variant_cents":500000,"min_pledge_cents":100,"min_product_variant_cents":300,"payout_minimum":100,"recommended_minimum_tier_amount":300,"referral_cents":5000,"tier_minimum_round_to_cents":100,"tier_recommendation_round_to_cents":500},"currentUser":null,"defaultUserCurrency":"EUR","enableAdminSudo":false,"experienceLocationCountryCode":"ES","formattingLocale":"en-US","supported_currencies":[{"available_for_pay_in":true,"available_for_pay_out":true,"code":"AUD","default_locale_code":"en-AU","description":"Austrailian Dollars","is_launched":true,"max_pledge_subunits":1500000,"num_subunits":100,"symbol":"AU$"},{"available_for_pay_in":true,"available_for_pay_out":false,"code":"BRL","default_locale_code":"pt-br","description":"Brazilian Real","is_launched":true,"max_pledge_subunits":6500000,"num_subunits":100,"symbol":"BRL"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"CAD","default_locale_code":"en-CA","description":"Canadian Dollars","is_launched":true,"max_pledge_subunits":1500000,"num_subunits":100,"symbol":"CA$"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"CZK","default_locale_code":"cs-cz","description":"Czech Koruna","is_launched":true,"max_pledge_subunits":35500000,"num_subunits":100,"symbol":"CZK"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"DKK","default_locale_code":"da-DK","description":"Danish Kroner","is_launched":true,"max_pledge_subunits":9500000,"num_subunits":100,"symbol":"DKK"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"EUR","default_locale_code":"en-IE","description":"Euros","is_launched":true,"max_pledge_subunits":1300000,"num_subunits":100,"symbol":"\u20ac"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"GBP","default_locale_code":"en-GB","description":"British Pounds Sterling","is_launched":true,"max_pledge_subunits":1200000,"num_subunits":100,"symbol":"\u00a3"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"HKD","default_locale_code":"zh-hk","description":"Hong Kong Dollar","is_launched":true,"max_pledge_subunits":11500000,"num_subunits":100,"symbol":"HKD"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"HUF","default_locale_code":"hu-hu","description":"Hungarian Forint","is_launched":true,"max_pledge_subunits":516000000,"num_subunits":100,"symbol":"HUF"},{"available_for_pay_in":true,"available_for_pay_out":false,"code":"MXN","default_locale_code":"es-mx","description":"Mexican Peso","is_launched":true,"max_pledge_subunits":35500000,"num_subunits":100,"symbol":"MXN"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"NOK","default_locale_code":"nb-NO","description":"Norwegian Kroner","is_launched":true,"max_pledge_subunits":12500000,"num_subunits":100,"symbol":"NOK"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"NZD","default_locale_code":"en-nz","description":"New Zealand Dollar","is_launched":true,"max_pledge_subunits":2200000,"num_subunits":100,"symbol":"NZD"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"PLN","default_locale_code":"pl-pl","description":"Polish Zloty","is_launched":true,"max_pledge_subunits":6500000,"num_subunits":100,"symbol":"PLN"},{"available_for_pay_in":false,"available_for_pay_out":false,"code":"RON","default_locale_code":"ro-ro","description":"Romanian Leu","is_launched":false,"max_pledge_subunits":6500000,"num_subunits":100,"symbol":"RON"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"SEK","default_locale_code":"sv-SE","description":"Swedish Kronor","is_launched":true,"max_pledge_subunits":13000000,"num_subunits":100,"symbol":"SEK"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"SGD","default_locale_code":"zh-sg","description":"Singapore Dollar","is_launched":true,"max_pledge_subunits":2000000,"num_subunits":100,"symbol":"SGD"},{"available_for_pay_in":true,"available_for_pay_out":true,"code":"USD","default_locale_code":"en-US","description":"US Dollars","is_launched":true,"max_pledge_subunits":1500000,"num_subunits":100,"symbol":"$"}],"translationLocale":"en-US"});
      Object.assign(window.patreon.campaignFeatures, {});
      Object.assign(window.patreon.experiments, {});
      Object.assign(window.patreon.featureFlags, {"allow_unlaunched_currencies":false,"cm_enable_ignore_tpv_for_idv_self_enrollment":true,"color_scheme_dark_fallback":false,"digital_commerce_beta_features":false,"digital_commerce_enable_shop_launch":false,"digital_commerce_iap_coming_soon_banner":true,"digital_commerce_iap_feature":false,"digital_commerce_purchases_killswitch":false,"digital_commerce_shop_killswitch":false,"digital_commerce_shop_page_search":false,"enable_bio_editing":false,"enable_color_scheme_selection":false,"enable_community_privacy_toggle":true,"enable_dac7_w8_form_changes":true,"enable_drops":false,"enable_drops_consumption_web":true,"enable_edit_settings_idv_self_enrollment":true,"enable_ga_fix_and_ga4_migration":true,"enable_google_analytics_4":true,"enable_mod_hub":false,"enable_notification_platform":true,"enable_payoneer_payout_processing":true,"enable_spotify":true,"enable_spotify_for_patrons":true,"enable_video_player_cast":false,"enable_video_player_pip":true,"enable_web_chats":true,"gtm2_launch":true,"hide_twitch_social_connect":false,"include_transcend_manager":true,"log_exposures_once":true,"new_change_email":false,"new_creator_edit_page_action_bar":false,"nion_disable_default_includes":true,"no_bootstrap_access_in_configure_store":true,"no_bootstrap_in_module":true,"pause_payout_processing":false,"pledgeflow_location_modal_cancel":false,"post_collections_ga":true,"rename_explore_on_left_nav":false,"us_ca_location_capture":true,"verify_user_location":true});
      Object.assign(window.patreon.presets, {"additional_banner_data":{"creator_demo":null},"backend_device_id":"1ea28a40-9f96-4a2b-9b36-a49f9437fb0a","backend_device_id_is_new":false,"badges_polling_enabled":true,"badges_polling_interval_in_seconds":60,"campaign_has_any_product_variant":false,"campaign_has_visible_products":false,"campaign_has_visible_shop":false,"campaign_shop_exists":false,"campaign_shop_is_launched":false,"color_scheme_selection":null,"color_scheme_selection_v2":null,"current_banners":["creator_demo"],"current_user_has_purchases_tab":false,"enable_fetching_experiment_api":true,"errorCode":404,"event_logging_platform":"Web","google_app_id":"84775188414-3b1nvt8gl8nnsq5djedm232317js24ej.apps.googleusercontent.com","is_impersonating":false,"is_user_native_video_enabled":false,"is_webview":false,"js_git_sha":"323da3528d5472367e8b9b36f34ba09f9a36f064","notification_platform_killswitch":false,"page_title":"Patreon","public_path":"//c1.patreon.com/content-based","recaptcha_site_key":"6LcGC_olAAAAAIRopsADgTdKS2nm_LSlotn_-m-w","url_rule":"error_page","verify_location":null,"web_chat_enabled_creators":[]});
    </script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-JF55G82FNT"></script>
    <script>
      window.dataLayer = window.dataLayer || [];

      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-JF55G82FNT');


    </script>

       <script type="text/javascript">
      var _sift = (window._sift = window._sift || []);
      _sift.push(["_setAccount", "7848bad5f1"]);
      _sift.push(["_setUserId", ""]);
      _sift.push(["_setSessionId", "58aaf686634ef04244f22ddc27e4488fa0360f46c14159ece612f27e858877d9"]);
      _sift.push(["_trackPageview"]);
      (function() {
        function ls() {
          var e = document.createElement("script");
          e.src = "https://cdn.siftscience.com/s.js";
          e.async = !0;
          document.body.appendChild(e);
        }
        if (window.attachEvent) {
          window.attachEvent("onload", ls);
        } else {
          window.addEventListener("load", ls, false);
        }
      })();
    </script>
       <script async src="https://www.googletagmanager.com/gtag/js?id=None"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'None');


</script>     
    <script type="application/ld+json">
      {
        "@context": "http://schema.org/",
        "@type": "Organization",
        "name": "Patreon",
        "description": "Patreon is the best place for creators to build memberships by providing exclusive access to their work and a deeper connection with their communities.",
        "url": "http://www.patreon.com",
        "logo": "https://c5.patreon.com/external/favicon/android-chrome-512x512.png",
        "sameAs": [
          "https://www.twitter.com/patreon",
          "https://www.facebook.com/patreon",
          "https://www.youtube.com/patreon",
          "https://www.instagram.com/patreon"
        ]
      }
    </script>
    <script>
      function toObject(r) {
        if (null === r || void 0 === r)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(r);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) return !1;
          var r = new String("abc");
          if (((r[5] = "de"), "5" === Object.getOwnPropertyNames(r)[0]))
            return !1;
          for (var e = {}, t = 0; 10 > t; t++)
            e["_" + String.fromCharCode(t)] = t;
          var n = Object.getOwnPropertyNames(e).map(function(r) {
            return e[r];
          });
          if ("0123456789" !== n.join("")) return !1;
          var o = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function(r) {
              o[r] = r;
            }),
            "abcdefghijklmnopqrst" !==
            Object.keys(Object.assign({}, o)).join("")
              ? !1
              : !0
          );
        } catch (a) {
          return !1;
        }
      }
      var getOwnPropertySymbols = Object.getOwnPropertySymbols,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        propIsEnumerable = Object.prototype.propertyIsEnumerable;
      Object.assign = shouldUseNative()
        ? Object.assign
        : function(r) {
            for (var e, t, n = toObject(r), o = 1; o < arguments.length; o++) {
              e = Object(arguments[o]);
              for (var a in e) hasOwnProperty.call(e, a) && (n[a] = e[a]);
              if (getOwnPropertySymbols) {
                t = getOwnPropertySymbols(e);
                for (var s = 0; s < t.length; s++)
                  propIsEnumerable.call(e, t[s]) && (n[t[s]] = e[t[s]]);
              }
            }
            return n;
          };
    </script>
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, shrink-to-fit=no, user-scalable=no, viewport-fit=cover, viewport-fit=cover" />

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta http-equiv="Pragma" content="no-cache" />

<title>Patreon</title>
 <meta name="title" content="Patreon" />
<meta name="description" content="Patreon is empowering a new generation of creators. 
Support and engage with artists and creators as they live out their passions!" />
<meta property="twitter:title" content="Patreon" />
<meta property="twitter:description" content="Patreon is empowering a new generation of creators. 
Support and engage with artists and creators as they live out their passions!" />
<meta prefix="og: http://ogp.me/ns#" property="og:title" content="Patreon" />
<meta prefix="og: http://ogp.me/ns#" property="og:description" content="Patreon is empowering a new generation of creators. 
Support and engage with artists and creators as they live out their passions!" />

<meta property="twitter:site" content="@Patreon" />

<meta property="og:site-name" content="Patreon" />

<meta content="artists, creators, patron, sponsor, music, videos" name="keywords" />
<meta name="apple-mobile-web-app-title" content="Patreon" />
<meta name="application-name" content="Patreon" />

<link rel="apple-touch-icon" sizes="180x180" href="https://c5.patreon.com/external/favicon/rebrand/pwa-192.png?v=af5597c2ef" />
<link rel="icon" type="image/png" sizes="32x32" href="https://c5.patreon.com/external/favicon/rebrand/favicon-32.png?v=af5597c2ef" />
<link rel="icon" type="image/png" sizes="16x16" href="https://c5.patreon.com/external/favicon/rebrand/favicon-16.png?v=af5597c2ef" />
<link rel="manifest" href="https://c5.patreon.com/external/favicon/rebrand/manifest.json?v=af5597c2ef" />
<link rel="icon" type="image/svg+xml" href="https://c5.patreon.com/external/favicon/rebrand/favicon.svg?v=af5597c2ef" />
<link rel="shortcut icon" href="https://c5.patreon.com/external/favicon/rebrand/favicon.ico?v=af5597c2ef" />
<meta name="msapplication-config" content="https://c5.patreon.com/external/favicon/rebrand/browserconfig.xml?v=af5597c2ef" />
<meta name="msapplication-TileColor" content={tokens.global.constant.black.default} />

  <meta name="twitter:card" content="summary_large_image" />
<meta prefix="og: http://ogp.me/ns#" property="og:type" content="article" />
 <link rel="canonical" href="https://www.patreon.com/_assets_patreon_marketing/_next/static/chunks/framework-1b1477f9717fa649.js" />

<meta name="canonicalURL" content="https://www.patreon.com/_assets_patreon_marketing/_next/static/chunks/framework-1b1477f9717fa649.js" />

<meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://www.patreon.com/_assets_patreon_marketing/_next/static/chunks/framework-1b1477f9717fa649.js" />

<meta property="twitter:url" content="https://www.patreon.com/_assets_patreon_marketing/_next/static/chunks/framework-1b1477f9717fa649.js" />
 

<meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="Patreon" />

<meta property="fb:admins" content="201564" />

<meta property="fb:app_id" content="130127590512253" />

<meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <style data-styled="true" data-styled-version="5.3.3">
  .fwHEJz {
    box-sizing: border-box;
    -webkit-transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1);
    padding-top: 0rem;
    padding-right: 0rem;
    padding-bottom: 0rem;
    padding-left: 0rem;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
    margin-left: 0rem;
  }

  /*!sc*/

  data-styled.g36[id="sc-kLwhqv"] {
    content: "fwHEJz,"
  }

  /*!sc*/

  body {
    min-width: 320px;
    background-color: var(--global-bg-base-default);
    font-feature-settings: "ss15" 1;
  }

  /*!sc*/

  #component-playground,
  .reactWrapper {
    color: var(--global-content-regular-default);
    font-family: var(--global-fontStack-body);
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /*!sc*/

  #component-playground ul,
  .reactWrapper ul {
    margin: 0;
  }

  /*!sc*/

  #component-playground p,
  .reactWrapper p {
    margin: 0;
  }

  /*!sc*/

  #component-playground .containerInner,
  .reactWrapper .containerInner {
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    max-width: 71rem;
    padding-left: var(--global-space-16);
    padding-right: var(--global-space-16);
    width: 100%;
  }

  /*!sc*/

  @media (min-width:36.75rem) {
    #component-playground .containerInner .fullWidthMobile,
    .reactWrapper .containerInner .fullWidthMobile {
      padding-left: 0;
      padding-right: 0;
      overflow-x: hidden;
    }
  }

  /*!sc*/

  #component-playground a,
  .reactWrapper a {
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
  }

  /*!sc*/

  #component-playground p,
  .reactWrapper p,
  #component-playground ol,
  .reactWrapper ol {
    font-size: var(--global-fontSizes-body-md);
    line-height: 1.5;
  }

  /*!sc*/

  .mt-xs,
  .reactWrapper .mt-xs {
    margin-top: var(--global-space-4);
  }

  /*!sc*/

  .mr-xs,
  .reactWrapper .mr-xs {
    margin-right: var(--global-space-4);
  }

  /*!sc*/

  .mb-xs,
  .reactWrapper .mb-xs {
    margin-bottom: var(--global-space-4);
  }

  /*!sc*/

  .ml-xs,
  .reactWrapper .ml-xs {
    margin-left: var(--global-space-4);
  }

  /*!sc*/

  .mh-xs,
  .reactWrapper .mh-xs {
    margin-left: var(--global-space-4);
    margin-right: var(--global-space-4);
  }

  /*!sc*/

  .mv-xs,
  .reactWrapper .mv-xs {
    margin-top: var(--global-space-4);
    margin-bottom: var(--global-space-4);
  }

  /*!sc*/

  .m-xs,
  .reactWrapper .m-xs {
    margin: var(--global-space-4);
  }

  /*!sc*/

  .pt-xs {
    padding-top: var(--global-space-4);
  }

  /*!sc*/

  .pr-xs {
    padding-right: var(--global-space-4);
  }

  /*!sc*/

  .pb-xs {
    padding-bottom: var(--global-space-4);
  }

  /*!sc*/

  .pl-xs {
    padding-left: var(--global-space-4);
  }

  /*!sc*/

  .ph-xs {
    padding-right: var(--global-space-4);
    padding-left: var(--global-space-4);
  }

  /*!sc*/

  .pv-xs {
    padding-top: var(--global-space-4);
    padding-bottom: var(--global-space-4);
  }

  /*!sc*/

  .p-xs {
    padding: var(--global-space-4);
  }

  /*!sc*/

  .mt-sm,
  .reactWrapper .mt-sm {
    margin-top: var(--global-space-8);
  }

  /*!sc*/

  .mr-sm,
  .reactWrapper .mr-sm {
    margin-right: var(--global-space-8);
  }

  /*!sc*/

  .mb-sm,
  .reactWrapper .mb-sm {
    margin-bottom: var(--global-space-8);
  }

  /*!sc*/

  .ml-sm,
  .reactWrapper .ml-sm {
    margin-left: var(--global-space-8);
  }

  /*!sc*/

  .mh-sm,
  .reactWrapper .mh-sm {
    margin-left: var(--global-space-8);
    margin-right: var(--global-space-8);
  }

  /*!sc*/

  .mv-sm,
  .reactWrapper .mv-sm {
    margin-top: var(--global-space-8);
    margin-bottom: var(--global-space-8);
  }

  /*!sc*/

  .m-sm,
  .reactWrapper .m-sm {
    margin: var(--global-space-8);
  }

  /*!sc*/

  .pt-sm {
    padding-top: var(--global-space-8);
  }

  /*!sc*/

  .pr-sm {
    padding-right: var(--global-space-8);
  }

  /*!sc*/

  .pb-sm {
    padding-bottom: var(--global-space-8);
  }

  /*!sc*/

  .pl-sm {
    padding-left: var(--global-space-8);
  }

  /*!sc*/

  .ph-sm {
    padding-right: var(--global-space-8);
    padding-left: var(--global-space-8);
  }

  /*!sc*/

  .pv-sm {
    padding-top: var(--global-space-8);
    padding-bottom: var(--global-space-8);
  }

  /*!sc*/

  .p-sm {
    padding: var(--global-space-8);
  }

  /*!sc*/

  .mt-md,
  .reactWrapper .mt-md {
    margin-top: var(--global-space-16);
  }

  /*!sc*/

  .mr-md,
  .reactWrapper .mr-md {
    margin-right: var(--global-space-16);
  }

  /*!sc*/

  .mb-md,
  .reactWrapper .mb-md {
    margin-bottom: var(--global-space-16);
  }

  /*!sc*/

  .ml-md,
  .reactWrapper .ml-md {
    margin-left: var(--global-space-16);
  }

  /*!sc*/

  .mh-md,
  .reactWrapper .mh-md {
    margin-left: var(--global-space-16);
    margin-right: var(--global-space-16);
  }

  /*!sc*/

  .mv-md,
  .reactWrapper .mv-md {
    margin-top: var(--global-space-16);
    margin-bottom: var(--global-space-16);
  }

  /*!sc*/

  .m-md,
  .reactWrapper .m-md {
    margin: var(--global-space-16);
  }

  /*!sc*/

  .pt-md {
    padding-top: var(--global-space-16);
  }

  /*!sc*/

  .pr-md {
    padding-right: var(--global-space-16);
  }

  /*!sc*/

  .pb-md {
    padding-bottom: var(--global-space-16);
  }

  /*!sc*/

  .pl-md {
    padding-left: var(--global-space-16);
  }

  /*!sc*/

  .ph-md {
    padding-right: var(--global-space-16);
    padding-left: var(--global-space-16);
  }

  /*!sc*/

  .pv-md {
    padding-top: var(--global-space-16);
    padding-bottom: var(--global-space-16);
  }

  /*!sc*/

  .p-md {
    padding: var(--global-space-16);
  }

  /*!sc*/

  .mt-lg,
  .reactWrapper .mt-lg {
    margin-top: var(--global-space-24);
  }

  /*!sc*/

  .mr-lg,
  .reactWrapper .mr-lg {
    margin-right: var(--global-space-24);
  }

  /*!sc*/

  .mb-lg,
  .reactWrapper .mb-lg {
    margin-bottom: var(--global-space-24);
  }

  /*!sc*/

  .ml-lg,
  .reactWrapper .ml-lg {
    margin-left: var(--global-space-24);
  }

  /*!sc*/

  .mh-lg,
  .reactWrapper .mh-lg {
    margin-left: var(--global-space-24);
    margin-right: var(--global-space-24);
  }

  /*!sc*/

  .mv-lg,
  .reactWrapper .mv-lg {
    margin-top: var(--global-space-24);
    margin-bottom: var(--global-space-24);
  }

  /*!sc*/

  .m-lg,
  .reactWrapper .m-lg {
    margin: var(--global-space-24);
  }

  /*!sc*/

  .pt-lg {
    padding-top: var(--global-space-24);
  }

  /*!sc*/

  .pr-lg {
    padding-right: var(--global-space-24);
  }

  /*!sc*/

  .pb-lg {
    padding-bottom: var(--global-space-24);
  }

  /*!sc*/

  .pl-lg {
    padding-left: var(--global-space-24);
  }

  /*!sc*/

  .ph-lg {
    padding-right: var(--global-space-24);
    padding-left: var(--global-space-24);
  }

  /*!sc*/

  .pv-lg {
    padding-top: var(--global-space-24);
    padding-bottom: var(--global-space-24);
  }

  /*!sc*/

  .p-lg {
    padding: var(--global-space-24);
  }

  /*!sc*/

  .mt-xl,
  .reactWrapper .mt-xl {
    margin-top: var(--global-space-32);
  }

  /*!sc*/

  .mr-xl,
  .reactWrapper .mr-xl {
    margin-right: var(--global-space-32);
  }

  /*!sc*/

  .mb-xl,
  .reactWrapper .mb-xl {
    margin-bottom: var(--global-space-32);
  }

  /*!sc*/

  .ml-xl,
  .reactWrapper .ml-xl {
    margin-left: var(--global-space-32);
  }

  /*!sc*/

  .mh-xl,
  .reactWrapper .mh-xl {
    margin-left: var(--global-space-32);
    margin-right: var(--global-space-32);
  }

  /*!sc*/

  .mv-xl,
  .reactWrapper .mv-xl {
    margin-top: var(--global-space-32);
    margin-bottom: var(--global-space-32);
  }

  /*!sc*/

  .m-xl,
  .reactWrapper .m-xl {
    margin: var(--global-space-32);
  }

  /*!sc*/

  .pt-xl {
    padding-top: var(--global-space-32);
  }

  /*!sc*/

  .pr-xl {
    padding-right: var(--global-space-32);
  }

  /*!sc*/

  .pb-xl {
    padding-bottom: var(--global-space-32);
  }

  /*!sc*/

  .pl-xl {
    padding-left: var(--global-space-32);
  }

  /*!sc*/

  .ph-xl {
    padding-right: var(--global-space-32);
    padding-left: var(--global-space-32);
  }

  /*!sc*/

  .pv-xl {
    padding-top: var(--global-space-32);
    padding-bottom: var(--global-space-32);
  }

  /*!sc*/

  .p-xl {
    padding: var(--global-space-32);
  }

  /*!sc*/

  .mt-xxl,
  .reactWrapper .mt-xxl {
    margin-top: var(--global-space-48);
  }

  /*!sc*/

  .mr-xxl,
  .reactWrapper .mr-xxl {
    margin-right: var(--global-space-48);
  }

  /*!sc*/

  .mb-xxl,
  .reactWrapper .mb-xxl {
    margin-bottom: var(--global-space-48);
  }

  /*!sc*/

  .ml-xxl,
  .reactWrapper .ml-xxl {
    margin-left: var(--global-space-48);
  }

  /*!sc*/

  .mh-xxl,
  .reactWrapper .mh-xxl {
    margin-left: var(--global-space-48);
    margin-right: var(--global-space-48);
  }

  /*!sc*/

  .mv-xxl,
  .reactWrapper .mv-xxl {
    margin-top: var(--global-space-48);
    margin-bottom: var(--global-space-48);
  }

  /*!sc*/

  .m-xxl,
  .reactWrapper .m-xxl {
    margin: var(--global-space-48);
  }

  /*!sc*/

  .pt-xxl {
    padding-top: var(--global-space-48);
  }

  /*!sc*/

  .pr-xxl {
    padding-right: var(--global-space-48);
  }

  /*!sc*/

  .pb-xxl {
    padding-bottom: var(--global-space-48);
  }

  /*!sc*/

  .pl-xxl {
    padding-left: var(--global-space-48);
  }

  /*!sc*/

  .ph-xxl {
    padding-right: var(--global-space-48);
    padding-left: var(--global-space-48);
  }

  /*!sc*/

  .pv-xxl {
    padding-top: var(--global-space-48);
    padding-bottom: var(--global-space-48);
  }

  /*!sc*/

  .p-xxl {
    padding: var(--global-space-48);
  }

  /*!sc*/

  data-styled.g73[id="sc-global-cFwWCl1"] {
    content: "sc-global-cFwWCl1,"
  }

  /*!sc*/

  .container,
  .container-fluid {
    margin-right: auto;
    margin-left: auto;
  }

  /*!sc*/

  .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }

  /*!sc*/

  .row {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -.5rem;
    margin-left: -.5rem;
  }

  /*!sc*/

  .row.reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  /*!sc*/

  .col.reverse {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  /*!sc*/

  .col-xs,
  .col-xs-1,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-offset-1,
  .col-xs-offset-10,
  .col-xs-offset-11,
  .col-xs-offset-12,
  .col-xs-offset-2,
  .col-xs-offset-3,
  .col-xs-offset-4,
  .col-xs-offset-5,
  .col-xs-offset-6,
  .col-xs-offset-7,
  .col-xs-offset-8,
  .col-xs-offset-9 {
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: .5rem;
    padding-left: .5rem;
  }

  /*!sc*/

  .col-xs {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
  }

  /*!sc*/

  .col-xs-1 {
    -webkit-flex-basis: 8.333%;
    -ms-flex-preferred-size: 8.333%;
    -webkit-flex-basis: 8.333%;
    -ms-flex-preferred-size: 8.333%;
    flex-basis: 8.333%;
    max-width: 8.333%;
  }

  /*!sc*/

  .col-xs-2 {
    -webkit-flex-basis: 16.667%;
    -ms-flex-preferred-size: 16.667%;
    -webkit-flex-basis: 16.667%;
    -ms-flex-preferred-size: 16.667%;
    flex-basis: 16.667%;
    max-width: 16.667%;
  }

  /*!sc*/

  .col-xs-3 {
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }

  /*!sc*/

  .col-xs-4 {
    -webkit-flex-basis: 33.333%;
    -ms-flex-preferred-size: 33.333%;
    -webkit-flex-basis: 33.333%;
    -ms-flex-preferred-size: 33.333%;
    flex-basis: 33.333%;
    max-width: 33.333%;
  }

  /*!sc*/

  .col-xs-5 {
    -webkit-flex-basis: 41.667%;
    -ms-flex-preferred-size: 41.667%;
    -webkit-flex-basis: 41.667%;
    -ms-flex-preferred-size: 41.667%;
    flex-basis: 41.667%;
    max-width: 41.667%;
  }

  /*!sc*/

  .col-xs-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }

  /*!sc*/

  .col-xs-7 {
    -webkit-flex-basis: 58.333%;
    -ms-flex-preferred-size: 58.333%;
    -webkit-flex-basis: 58.333%;
    -ms-flex-preferred-size: 58.333%;
    flex-basis: 58.333%;
    max-width: 58.333%;
  }

  /*!sc*/

  .col-xs-8 {
    -webkit-flex-basis: 66.667%;
    -ms-flex-preferred-size: 66.667%;
    -webkit-flex-basis: 66.667%;
    -ms-flex-preferred-size: 66.667%;
    flex-basis: 66.667%;
    max-width: 66.667%;
  }

  /*!sc*/

  .col-xs-9 {
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }

  /*!sc*/

  .col-xs-10 {
    -webkit-flex-basis: 83.333%;
    -ms-flex-preferred-size: 83.333%;
    -webkit-flex-basis: 83.333%;
    -ms-flex-preferred-size: 83.333%;
    flex-basis: 83.333%;
    max-width: 83.333%;
  }

  /*!sc*/

  .col-xs-11 {
    -webkit-flex-basis: 91.667%;
    -ms-flex-preferred-size: 91.667%;
    -webkit-flex-basis: 91.667%;
    -ms-flex-preferred-size: 91.667%;
    flex-basis: 91.667%;
    max-width: 91.667%;
  }

  /*!sc*/

  .col-xs-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }

  /*!sc*/

  .col-xs-offset-1 {
    margin-left: 8.333%;
  }

  /*!sc*/

  .col-xs-offset-2 {
    margin-left: 16.667%;
  }

  /*!sc*/

  .col-xs-offset-3 {
    margin-left: 25%;
  }

  /*!sc*/

  .col-xs-offset-4 {
    margin-left: 33.333%;
  }

  /*!sc*/

  .col-xs-offset-5 {
    margin-left: 41.667%;
  }

  /*!sc*/

  .col-xs-offset-6 {
    margin-left: 50%;
  }

  /*!sc*/

  .col-xs-offset-7 {
    margin-left: 58.333%;
  }

  /*!sc*/

  .col-xs-offset-8 {
    margin-left: 66.667%;
  }

  /*!sc*/

  .col-xs-offset-9 {
    margin-left: 75%;
  }

  /*!sc*/

  .col-xs-offset-10 {
    margin-left: 83.333%;
  }

  /*!sc*/

  .col-xs-offset-11 {
    margin-left: 91.667%;
  }

  /*!sc*/

  .start-xs {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    text-align: start;
  }

  /*!sc*/

  .center-xs {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }

  /*!sc*/

  .end-xs {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    text-align: end;
  }

  /*!sc*/

  .top-xs {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
  }

  /*!sc*/

  .middle-xs {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  /*!sc*/

  .bottom-xs {
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
  }

  /*!sc*/

  .around-xs {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around;
  }

  /*!sc*/

  .between-xs {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  /*!sc*/

  .first-xs {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
  }

  /*!sc*/

  .last-xs {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }

  /*!sc*/

  @media only screen and (min-width:30em) {
    .container {
      width: 31rem;
    }
    .col-sm,
    .col-sm-1,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-offset-1,
    .col-sm-offset-10,
    .col-sm-offset-11,
    .col-sm-offset-12,
    .col-sm-offset-2,
    .col-sm-offset-3,
    .col-sm-offset-4,
    .col-sm-offset-5,
    .col-sm-offset-6,
    .col-sm-offset-7,
    .col-sm-offset-8,
    .col-sm-offset-9 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: .5rem;
      padding-left: .5rem;
    }
    .col-sm {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }
    .col-sm-1 {
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%;
    }
    .col-sm-2 {
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      flex-basis: 16.667%;
      max-width: 16.667%;
    }
    .col-sm-3 {
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }
    .col-sm-4 {
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%;
    }
    .col-sm-5 {
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%;
    }
    .col-sm-6 {
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }
    .col-sm-7 {
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%;
    }
    .col-sm-8 {
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%;
    }
    .col-sm-9 {
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }
    .col-sm-10 {
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%;
    }
    .col-sm-11 {
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%;
    }
    .col-sm-12 {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }
    .col-sm-offset-1 {
      margin-left: 8.333%;
    }
    .col-sm-offset-2 {
      margin-left: 16.667%;
    }
    .col-sm-offset-3 {
      margin-left: 25%;
    }
    .col-sm-offset-4 {
      margin-left: 33.333%;
    }
    .col-sm-offset-5 {
      margin-left: 41.667%;
    }
    .col-sm-offset-6 {
      margin-left: 50%;
    }
    .col-sm-offset-7 {
      margin-left: 58.333%;
    }
    .col-sm-offset-8 {
      margin-left: 66.667%;
    }
    .col-sm-offset-9 {
      margin-left: 75%;
    }
    .col-sm-offset-10 {
      margin-left: 83.333%;
    }
    .col-sm-offset-11 {
      margin-left: 91.667%;
    }
    .start-sm {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }
    .center-sm {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }
    .end-sm {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }
    .top-sm {
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
    }
    .middle-sm {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .bottom-sm {
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      -webkit-align-items: flex-end;
      -webkit-box-align: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
    }
    .around-sm {
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      -webkit-box-pack: space-around;
      -webkit-justify-content: space-around;
      -ms-flex-pack: space-around;
      justify-content: space-around;
    }
    .between-sm {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    .first-sm {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }
    .last-sm {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  /*!sc*/

  @media only screen and (min-width:48em) {
    .container {
      width: 49rem;
    }
    .col-md,
    .col-md-1,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-offset-1,
    .col-md-offset-10,
    .col-md-offset-11,
    .col-md-offset-12,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: .5rem;
      padding-left: .5rem;
    }
    .col-md {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }
    .col-md-1 {
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%;
    }
    .col-md-2 {
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      flex-basis: 16.667%;
      max-width: 16.667%;
    }
    .col-md-3 {
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }
    .col-md-4 {
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%;
    }
    .col-md-5 {
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%;
    }
    .col-md-6 {
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }
    .col-md-7 {
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%;
    }
    .col-md-8 {
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%;
    }
    .col-md-9 {
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }
    .col-md-10 {
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%;
    }
    .col-md-11 {
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%;
    }
    .col-md-12 {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }
    .col-md-offset-1 {
      margin-left: 8.333%;
    }
    .col-md-offset-2 {
      margin-left: 16.667%;
    }
    .col-md-offset-3 {
      margin-left: 25%;
    }
    .col-md-offset-4 {
      margin-left: 33.333%;
    }
    .col-md-offset-5 {
      margin-left: 41.667%;
    }
    .col-md-offset-6 {
      margin-left: 50%;
    }
    .col-md-offset-7 {
      margin-left: 58.333%;
    }
    .col-md-offset-8 {
      margin-left: 66.667%;
    }
    .col-md-offset-9 {
      margin-left: 75%;
    }
    .col-md-offset-10 {
      margin-left: 83.333%;
    }
    .col-md-offset-11 {
      margin-left: 91.667%;
    }
    .start-md {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }
    .center-md {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }
    .end-md {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }
    .top-md {
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
    }
    .middle-md {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .bottom-md {
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      -webkit-align-items: flex-end;
      -webkit-box-align: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
    }
    .around-md {
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      -webkit-box-pack: space-around;
      -webkit-justify-content: space-around;
      -ms-flex-pack: space-around;
      justify-content: space-around;
    }
    .between-md {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    .first-md {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }
    .last-md {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  /*!sc*/

  @media only screen and (min-width:64em) {
    .container {
      width: 65rem;
    }
    .col-lg,
    .col-lg-1,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-offset-1,
    .col-lg-offset-10,
    .col-lg-offset-11,
    .col-lg-offset-12,
    .col-lg-offset-2,
    .col-lg-offset-3,
    .col-lg-offset-4,
    .col-lg-offset-5,
    .col-lg-offset-6,
    .col-lg-offset-7,
    .col-lg-offset-8,
    .col-lg-offset-9 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: .5rem;
      padding-left: .5rem;
    }
    .col-lg {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }
    .col-lg-1 {
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%;
    }
    .col-lg-2 {
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      flex-basis: 16.667%;
      max-width: 16.667%;
    }
    .col-lg-3 {
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }
    .col-lg-4 {
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%;
    }
    .col-lg-5 {
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%;
    }
    .col-lg-6 {
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }
    .col-lg-7 {
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%;
    }
    .col-lg-8 {
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%;
    }
    .col-lg-9 {
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }
    .col-lg-10 {
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%;
    }
    .col-lg-11 {
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%;
    }
    .col-lg-12 {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }
    .col-lg-offset-1 {
      margin-left: 8.333%;
    }
    .col-lg-offset-2 {
      margin-left: 16.667%;
    }
    .col-lg-offset-3 {
      margin-left: 25%;
    }
    .col-lg-offset-4 {
      margin-left: 33.333%;
    }
    .col-lg-offset-5 {
      margin-left: 41.667%;
    }
    .col-lg-offset-6 {
      margin-left: 50%;
    }
    .col-lg-offset-7 {
      margin-left: 58.333%;
    }
    .col-lg-offset-8 {
      margin-left: 66.667%;
    }
    .col-lg-offset-9 {
      margin-left: 75%;
    }
    .col-lg-offset-10 {
      margin-left: 83.333%;
    }
    .col-lg-offset-11 {
      margin-left: 91.667%;
    }
    .start-lg {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }
    .center-lg {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }
    .end-lg {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }
    .top-lg {
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
    }
    .middle-lg {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .bottom-lg {
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      -webkit-align-items: flex-end;
      -webkit-box-align: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
    }
    .around-lg {
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      -webkit-box-pack: space-around;
      -webkit-justify-content: space-around;
      -ms-flex-pack: space-around;
      justify-content: space-around;
    }
    .between-lg {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    .first-lg {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }
    .last-lg {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  /*!sc*/

  @media only screen and (min-width:85.375rem) {
    .container {
      width: 85.375rem;
    }
    .col-xl,
    .col-xl-1,
    .col-xl-10,
    .col-xl-11,
    .col-xl-12,
    .col-xl-2,
    .col-xl-3,
    .col-xl-4,
    .col-xl-5,
    .col-xl-6,
    .col-xl-7,
    .col-xl-8,
    .col-xl-9,
    .col-xl-offset-1,
    .col-xl-offset-10,
    .col-xl-offset-11,
    .col-xl-offset-12,
    .col-xl-offset-2,
    .col-xl-offset-3,
    .col-xl-offset-4,
    .col-xl-offset-5,
    .col-xl-offset-6,
    .col-xl-offset-7,
    .col-xl-offset-8,
    .col-xl-offset-9 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: .5rem;
      padding-left: .5rem;
    }
    .col-xl {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }
    .col-xl-1 {
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%;
    }
    .col-xl-2 {
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      flex-basis: 16.667%;
      max-width: 16.667%;
    }
    .col-xl-3 {
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }
    .col-xl-4 {
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%;
    }
    .col-xl-5 {
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%;
    }
    .col-xl-6 {
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }
    .col-xl-7 {
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%;
    }
    .col-xl-8 {
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%;
    }
    .col-xl-9 {
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }
    .col-xl-10 {
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%;
    }
    .col-xl-11 {
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%;
    }
    .col-xl-12 {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }
    .col-xl-offset-1 {
      margin-left: 8.333%;
    }
    .col-xl-offset-2 {
      margin-left: 16.667%;
    }
    .col-xl-offset-3 {
      margin-left: 25%;
    }
    .col-xl-offset-4 {
      margin-left: 33.333%;
    }
    .col-xl-offset-5 {
      margin-left: 41.667%;
    }
    .col-xl-offset-6 {
      margin-left: 50%;
    }
    .col-xl-offset-7 {
      margin-left: 58.333%;
    }
    .col-xl-offset-8 {
      margin-left: 66.667%;
    }
    .col-xl-offset-9 {
      margin-left: 75%;
    }
    .col-xl-offset-10 {
      margin-left: 83.333%;
    }
    .col-xl-offset-11 {
      margin-left: 91.667%;
    }
    .start-xl {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }
    .center-xl {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }
    .end-xl {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }
    .top-xl {
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
    }
    .middle-xl {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
    .bottom-xl {
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      -webkit-align-items: flex-end;
      -webkit-box-align: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
    }
    .around-xl {
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      -webkit-box-pack: space-around;
      -webkit-justify-content: space-around;
      -ms-flex-pack: space-around;
      justify-content: space-around;
    }
    .between-xl {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    .first-xl {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }
    .last-xl {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  /*!sc*/

  data-styled.g74[id="sc-global-eKCzMx1"] {
    content: "sc-global-eKCzMx1,"
  }

  /*!sc*/

  .stackable {
    margin-bottom: 1rem;
  }

  /*!sc*/

  data-styled.g75[id="sc-global-cCvgBB1"] {
    content: "sc-global-cCvgBB1,"
  }

  /*!sc*/

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  /*!sc*/

  body {
    margin: 0;
  }

  /*!sc*/

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  /*!sc*/

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  /*!sc*/

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  /*!sc*/

  [hidden],
  template {
    display: none;
  }

  /*!sc*/

  a {
    background-color: transparent;
  }

  /*!sc*/

  a:active,
  a:hover {
    outline: 0;
  }

  /*!sc*/

  abbr[title] {
    border-bottom: 1px dotted;
  }

  /*!sc*/

  b,
  strong {
    font-weight: bold;
  }

  /*!sc*/

  dfn {
    font-style: italic;
  }

  /*!sc*/

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /*!sc*/

  mark {
    background: #ff0;
    color: #000;
  }

  /*!sc*/

  small {
    font-size: 80%;
  }

  /*!sc*/

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  /*!sc*/

  sup {
    top: -0.5em;
  }

  /*!sc*/

  sub {
    bottom: -0.25em;
  }

  /*!sc*/

  img {
    border: 0;
  }

  /*!sc*/

  svg:not(:root) {
    overflow: hidden;
  }

  /*!sc*/

  figure {
    margin: 1em 40px;
  }

  /*!sc*/

  hr {
    box-sizing: content-box;
    height: 0;
  }

  /*!sc*/

  pre {
    overflow: auto;
  }

  /*!sc*/

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  /*!sc*/

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  /*!sc*/

  button {
    overflow: visible;
  }

  /*!sc*/

  button,
  select {
    text-transform: none;
  }

  /*!sc*/

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  /*!sc*/

  html input[disabled] {
    cursor: default;
  }

  /*!sc*/

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  /*!sc*/

  input {
    line-height: normal;
  }

  /*!sc*/

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  /*!sc*/

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /*!sc*/

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*!sc*/

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  /*!sc*/

  legend {
    border: 0;
    padding: 0;
  }

  /*!sc*/

  textarea {
    overflow: auto;
  }

  /*!sc*/

  optgroup {
    font-weight: bold;
  }

  /*!sc*/

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /*!sc*/

  td,
  th {
    padding: 0;
  }

  /*!sc*/

  data-styled.g76[id="sc-global-keqigg1"] {
    content: "sc-global-keqigg1,"
  }

  /*!sc*/

  :root {
    --global-radius-xl: 16px;
    --global-radius-lg: 12px;
    --global-radius-md: 8px;
    --global-radius-smMd: 6px;
    --global-radius-sm: 4px;
    --global-radius-circle: 50%;
    --global-radius-pill: 9999px;
    --global-radius-container: 6px;
    --global-opacity-enabled: 1;
    --global-opacity-disabled: 0.3;
    --global-borderWidth-thin: 1px;
    --global-borderWidth-thick: 2px;
    --global-borderWidth-none: 0px;
    --global-space-4: 4px;
    --global-space-8: 8px;
    --global-space-12: 12px;
    --global-space-16: 16px;
    --global-space-24: 24px;
    --global-space-32: 32px;
    --global-space-40: 40px;
    --global-space-48: 48px;
    --global-space-56: 56px;
    --global-constant-white-default: #ffffff;
    --global-constant-white-hover: rgba(255, 255, 255, 0.96);
    --global-constant-white-pressed: rgba(255, 255, 255, 0.9);
    --global-constant-whiteMuted-default: rgba(255, 255, 255, 0.66);
    --global-constant-whiteMuted-hover: rgba(255, 255, 255, 0.8);
    --global-constant-whiteMuted-pressed: rgba(255, 255, 255, 0.86);
    --global-constant-whiteSubtle-default: rgba(255, 255, 255, 0.18);
    --global-constant-whiteSubtle-hover: rgba(255, 255, 255, 0.34);
    --global-constant-whiteSubtle-pressed: rgba(255, 255, 255, 0.5);
    --global-constant-black-default: #000000;
    --global-constant-black-hover: rgba(0, 0, 0, 0.9);
    --global-constant-black-pressed: rgba(0, 0, 0, 0.82);
    --global-constant-blackMuted-default: rgba(0, 0, 0, 0.5);
    --global-constant-blackMuted-hover: rgba(0, 0, 0, 0.66);
    --global-constant-blackMuted-pressed: rgba(0, 0, 0, 0.82);
    --global-constant-blackSubtle-default: rgba(0, 0, 0, 0.14);
    --global-constant-blackSubtle-hover: rgba(0, 0, 0, 0.2);
    --global-constant-blackSubtle-pressed: rgba(0, 0, 0, 0.34);
    --global-nonSemantic-blueberry: #1a52a7;
    --global-nonSemantic-pumpkin: #fb790e;
    --global-nonSemantic-lollipop: #ea1f44;
    --global-nonSemantic-holly: #0cac7e;
    --global-nonSemantic-honeycomb: #f5b400;
    --global-nonSemantic-ocean: #1d8acb;
    --global-nonSemantic-moonshade: #4f71ba;
    --global-nonSemantic-raspberry: #be2a61;
    --global-nonSemantic-lavender: #6e479d;
    --global-nonSemantic-jasper: #f75058;
    --global-brand-discord: #5865f2;
    --global-brand-facebook: #1877f2;
    --global-brand-google: #d9453d;
    --global-brand-memberful: #de5b38;
    --global-brand-patreon: #f1465a;
    --global-brand-pinterest: #e60023;
    --global-brand-reddit: #ff4500;
    --global-brand-spotify: #00db54;
    --global-brand-tumblr: #35465c;
    --global-brand-twitch: #9046ff;
    --global-brand-twitter: #1da1f2;
    --global-brand-youtube: #ff0000;
    --temp-segmentedControl-radius: 8px;
    --temp-select-radius: 8px;
    --temp-select-horzPadding: 12px;
    --temp-textInput-radius: 8px;
    --temp-textInput-horzPadding: 12px;
    --temp-chip-radius: 4px;
    --temp-chip-padding: 6px;
    --temp-pill-borderWidth: 1px;
    --temp-dialog-radius: 12px;
    --temp-menu-radius: 12px;
  }

  /*!sc*/

  :root {
    --global-fontFamilies-display: system-ui;
    --global-fontFamilies-heading: system-ui;
    --global-fontFamilies-body: system-ui;
    --global-fontFamilies-data: SF Mono;
    --global-lineHeights-display: 1.2;
    --global-lineHeights-heading: 1.2;
    --global-lineHeights-body: 1.3;
    --global-lineHeights-data: 1;
    --global-fontWeights-display-default: 600;
    --global-fontWeights-heading-default: 600;
    --global-fontWeights-body-default: 400;
    --global-fontWeights-body-bold: 700;
    --global-fontWeights-data-default: 400;
    --global-fontSizes-display-xl: 32px;
    --global-fontSizes-display-lg: 28px;
    --global-fontSizes-display-md: 24px;
    --global-fontSizes-heading-xl: 24px;
    --global-fontSizes-heading-lg: 22px;
    --global-fontSizes-heading-md: 18px;
    --global-fontSizes-heading-sm: 16px;
    --global-fontSizes-heading-xs: 12px;
    --global-fontSizes-body-lg: 18px;
    --global-fontSizes-body-md: 16px;
    --global-fontSizes-body-sm: 14px;
    --global-fontSizes-data-md: 12px;
    --global-letterSpacing-display: -2%;
    --global-letterSpacing-heading: -2%;
    --global-letterSpacing-body: -2%;
    --global-letterSpacing-data: 0%;
    --global-paragraphSpacing-none: 0px;
    --global-paragraphSpacing-sm: 16px;
    --global-paragraphSpacing-md: 18px;
    --global-paragraphSpacing-lg: 20px;
    --global-textCase-none: none;
    --global-textCase-uppercase: uppercase;
    --global-textDecoration-none: none;
    --component-fontFamilies-button: system-ui;
    --component-fontWeights-button-default: 500;
    --component-letterSpacing-button: -2%;
    --component-radius-button: 8px;
    --component-fontSizes-button-lg: 18px;
    --component-fontSizes-button-md: 16px;
    --component-fontSizes-button-sm: 14px;
    --component-lineHeights-button: 1;
    --component-data-fontWeights-display-default: 400;
    --component-data-fontWeights-heading-default: 400;
    --component-data-fontWeights-body-default: 400;
    --component-data-fontWeights-body-bold: 700;
    --component-data-letterSpacing-display: 0%;
    --component-data-letterSpacing-heading: -2%;
    --component-data-letterSpacing-body: -2%;
  }

  /*!sc*/

  @media (min-width:36.75rem) {
    :root {
      --global-fontFamilies-display: system-ui;
      --global-fontFamilies-heading: system-ui;
      --global-fontFamilies-body: system-ui;
      --global-fontFamilies-data: SF Mono;
      --global-lineHeights-display: 1.2;
      --global-lineHeights-heading: 1.2;
      --global-lineHeights-body: 1.4;
      --global-lineHeights-data: 1;
      --global-fontWeights-display-default: 600;
      --global-fontWeights-heading-default: 600;
      --global-fontWeights-body-default: 400;
      --global-fontWeights-body-bold: 700;
      --global-fontWeights-data-default: 400;
      --global-fontSizes-display-xxxl: 80px;
      --global-fontSizes-display-xxl: 60px;
      --global-fontSizes-display-xl: 52px;
      --global-fontSizes-display-lg: 40px;
      --global-fontSizes-display-md: 28px;
      --global-fontSizes-heading-xl: 24px;
      --global-fontSizes-heading-lg: 20px;
      --global-fontSizes-heading-md: 16px;
      --global-fontSizes-heading-sm: 14px;
      --global-fontSizes-heading-xs: 12px;
      --global-fontSizes-body-lg: 16px;
      --global-fontSizes-body-md: 14px;
      --global-fontSizes-body-sm: 12px;
      --global-fontSizes-body-xs: 10px;
      --global-fontSizes-data-md: 12px;
      --global-letterSpacing-display: 0%;
      --global-letterSpacing-heading: -2%;
      --global-letterSpacing-body: -2%;
      --global-letterSpacing-data: 0%;
      --global-paragraphSpacing-none: 0px;
      --global-paragraphSpacing-sm: 16px;
      --global-paragraphSpacing-md: 18px;
      --global-paragraphSpacing-lg: 20px;
      --global-textCase-none: none;
      --global-textCase-uppercase: uppercase;
      --global-textDecoration-none: none;
      --component-lineHeights-button: 1;
      --component-fontFamilies-button: system-ui;
      --component-fontWeights-button-default: 500;
      --component-letterSpacing-button: -2%;
      --component-radius-button: 8px;
      --component-fontSizes-button-lg: 16px;
      --component-fontSizes-button-md: 14px;
      --component-fontSizes-button-sm: 12px;
      --component-data-fontWeights-display-default: 400;
      --component-data-fontWeights-heading-default: 400;
      --component-data-fontWeights-body-default: 400;
      --component-data-fontWeights-body-bold: 700;
      --component-data-letterSpacing-display: 0%;
      --component-data-letterSpacing-heading: -2%;
      --component-data-letterSpacing-body: -2%;
    }
  }

  /*!sc*/

  :root {
    --global-bg-page-default: #f6f7fa;
    --global-bg-page-hover: #e6e9f0;
    --global-bg-page-pressed: #d8dce5;
    --global-bg-pageAlt-default: #ffffff;
    --global-bg-pageAlt-hover: #f6f7fa;
    --global-bg-pageAlt-pressed: #e6e9f0;
    --global-bg-base-default: #ffffff;
    --global-bg-base-hover: #f6f7fa;
    --global-bg-base-pressed: #e6e9f0;
    --global-bg-baseAlt-default: #f6f7fa;
    --global-bg-baseAlt-hover: #e6e9f0;
    --global-bg-baseAlt-pressed: #d8dce5;
    --global-bg-elevated-default: #ffffff;
    --global-bg-elevated-hover: #f6f7fa;
    --global-bg-elevated-pressed: #e6e9f0;
    --global-content-regular-default: rgba(11, 12, 15, 0.95);
    --global-content-regular-hover: rgba(8, 10, 18, 0.85);
    --global-content-regular-pressed: rgba(14, 18, 32, 0.7);
    --global-content-muted-default: rgba(14, 18, 32, 0.7);
    --global-content-muted-hover: rgba(8, 10, 18, 0.85);
    --global-content-muted-pressed: rgba(11, 12, 15, 0.95);
    --global-content-inverted-default: rgba(250, 251, 255, 0.98);
    --global-content-inverted-hover: rgba(246, 248, 254, 0.94);
    --global-content-inverted-pressed: rgba(241, 244, 253, 0.9);
    --global-content-invertedMuted-default: rgba(233, 237, 252, 0.7);
    --global-content-invertedMuted-hover: rgba(237, 241, 253, 0.84);
    --global-content-invertedMuted-pressed: rgba(241, 244, 253, 0.9);
    --global-content-invertedSubtle-default: rgba(185, 193, 218, 0.46);
    --global-content-invertedSubtle-hover: rgba(209, 215, 235, 0.6);
    --global-content-invertedSubtle-pressed: rgba(233, 237, 252, 0.7);
    --global-content-subtle-default: rgba(73, 80, 101, 0.5);
    --global-content-subtle-hover: rgba(38, 45, 64, 0.6);
    --global-content-subtle-pressed: rgba(14, 18, 32, 0.7);
    --global-primary-action-default: #22549f;
    --global-primary-action-hover: #183f7b;
    --global-primary-action-pressed: #102a52;
    --global-primary-onAction-default: rgba(255, 255, 255, 0.96);
    --global-primary-onAction-hover: rgba(255, 255, 255, 0.9);
    --global-primary-onAction-pressed: rgba(255, 255, 255, 0.86);
    --global-primary-muted-default: #e2ebf7;
    --global-primary-muted-hover: #ceddf2;
    --global-primary-muted-pressed: #a4c1ed;
    --global-primary-onMuted-default: #000000;
    --global-primary-onMuted-hover: rgba(0, 0, 0, 0.9);
    --global-primary-onMuted-pressed: rgba(0, 0, 0, 0.82);
    --global-primary-subtle-default: rgba(34, 84, 159, 0.05);
    --global-primary-subtle-hover: rgba(34, 84, 159, 0.1);
    --global-primary-subtle-pressed: rgba(34, 84, 159, 0.2);
    --global-primary-onSubtle-default: #000000;
    --global-primary-onSubtle-hover: rgba(0, 0, 0, 0.9);
    --global-primary-onSubtle-pressed: rgba(0, 0, 0, 0.82);
    --global-primary-highlight-default: #22549f;
    --global-primary-highlight-hover: #183f7b;
    --global-primary-highlight-pressed: #102a52;
    --global-primary-highlightBase-default: #22549f;
    --global-primary-highlightBase-hover: #183f7b;
    --global-primary-highlightBase-pressed: #102a52;
    --global-primary-onHighlightBase-default: rgba(255, 255, 255, 0.96);
    --global-primary-onHighlightBase-hover: rgba(255, 255, 255, 0.9);
    --global-primary-onHighlightBase-pressed: rgba(255, 255, 255, 0.86);
    --global-primary-actionBase-default: #22549f;
    --global-primary-actionBase-hover: #183f7b;
    --global-primary-actionBase-pressed: #102a52;
    --global-primary-onActionBase-default: rgba(255, 255, 255, 0.96);
    --global-primary-onActionBase-hover: rgba(255, 255, 255, 0.9);
    --global-primary-onActionBase-pressed: rgba(255, 255, 255, 0.86);
    --global-secondary-action-default: rgba(34, 84, 159, 0.1);
    --global-secondary-action-hover: rgba(34, 84, 159, 0.2);
    --global-secondary-action-pressed: rgba(34, 84, 159, 0.3);
    --global-secondary-onAction-default: #000000;
    --global-secondary-onAction-hover: rgba(0, 0, 0, 0.9);
    --global-secondary-onAction-pressed: rgba(0, 0, 0, 0.82);
    --global-secondary-muted-default: rgba(34, 84, 159, 0.05);
    --global-secondary-muted-hover: rgba(34, 84, 159, 0.1);
    --global-secondary-muted-pressed: rgba(34, 84, 159, 0.2);
    --global-secondary-onMuted-default: #000000;
    --global-secondary-onMuted-hover: rgba(0, 0, 0, 0.9);
    --global-secondary-onMuted-pressed: rgba(0, 0, 0, 0.82);
    --global-success-action-default: #148565;
    --global-success-action-hover: #07694d;
    --global-success-action-pressed: #094e3a;
    --global-success-onAction-default: rgba(255, 255, 255, 0.96);
    --global-success-onAction-hover: rgba(255, 255, 255, 0.9);
    --global-success-onAction-pressed: rgba(255, 255, 255, 0.86);
    --global-success-muted-default: #d9f5e4;
    --global-success-muted-hover: #bcedd5;
    --global-success-muted-pressed: #7be0b1;
    --global-success-onMuted-default: #000000;
    --global-success-onMuted-hover: rgba(0, 0, 0, 0.9);
    --global-success-onMuted-pressed: rgba(0, 0, 0, 0.82);
    --global-warning-action-default: #a83500;
    --global-warning-action-hover: #571900;
    --global-warning-action-pressed: #381000;
    --global-warning-onAction-default: rgba(255, 255, 255, 0.96);
    --global-warning-onAction-hover: rgba(255, 255, 255, 0.9);
    --global-warning-onAction-pressed: rgba(255, 255, 255, 0.86);
    --global-warning-muted-default: #fcefca;
    --global-warning-muted-hover: #fce5a5;
    --global-warning-muted-pressed: #ffda75;
    --global-warning-onMuted-default: #000000;
    --global-warning-onMuted-hover: rgba(0, 0, 0, 0.9);
    --global-warning-onMuted-pressed: rgba(0, 0, 0, 0.82);
    --global-critical-action-default: #e32144;
    --global-critical-action-hover: #be1332;
    --global-critical-action-pressed: #990620;
    --global-critical-onAction-default: rgba(255, 255, 255, 0.96);
    --global-critical-onAction-hover: rgba(255, 255, 255, 0.9);
    --global-critical-onAction-pressed: rgba(255, 255, 255, 0.86);
    --global-critical-muted-default: #f7dee0;
    --global-critical-muted-hover: #ffc2c6;
    --global-critical-muted-pressed: #ff9ea5;
    --global-critical-onMuted-default: #000000;
    --global-critical-onMuted-hover: rgba(0, 0, 0, 0.9);
    --global-critical-onMuted-pressed: rgba(0, 0, 0, 0.82);
    --global-border-action-default: rgba(130, 140, 171, 0.3);
    --global-border-action-hover: rgba(116, 126, 154, 0.4);
    --global-border-action-pressed: rgba(73, 80, 101, 0.5);
    --global-border-muted-default: rgba(141, 152, 185, 0.2);
    --global-border-muted-hover: rgba(130, 140, 171, 0.3);
    --global-border-muted-pressed: rgba(116, 126, 154, 0.4);
    --global-boxShadow-high: 0px 20px 40px 0px rgba(0, 0, 0, 0.04), 0px 6px 15px 0px rgba(0, 0, 0, 0.06), 0px 1px 5px 0px rgba(0, 0, 0, 0.08);
    --global-boxShadow-mid: 0px 0px 20px 0px rgba(0, 0, 0, 0.04), 0px 4px 14px 0px rgba(0, 0, 0, 0.06), 0px 1px 5px 0px rgba(0, 0, 0, 0.08);
    --global-boxShadow-low: 0px 1px 4px 0px rgba(0, 0, 0, 0.1), 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    --global-boxShadow-subtle: 0px 1px 4px 0px rgba(0, 0, 0, 0.04), 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
    --component-dialog-overlay-bg: rgba(38, 45, 64, 0.6);
    --component-takeover-bg: #ffffff;
    --component-button-action-default: #22549f;
    --component-button-action-hover: #183f7b;
    --component-button-action-pressed: #102a52;
    --component-button-onAction-default: rgba(255, 255, 255, 0.96);
    --component-button-onAction-hover: rgba(255, 255, 255, 0.9);
    --component-button-onAction-pressed: rgba(255, 255, 255, 0.86);
    --temp-chip-primaryBackground: #E2EBF7;
  }

  /*!sc*/

  data-styled.g77[id="sc-global-gWmEJC1"] {
    content: "sc-global-gWmEJC1,"
  }

  /*!sc*/

  :root {
    --global-fontStack-fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    --global-fontStack-data-fallback: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", monospace;
    --global-fontStack-display: var(--global-fontFamilies-display), var(--global-fontStack-fallback);
    --global-fontStack-heading: var(--global-fontFamilies-heading), var(--global-fontStack-fallback);
    --global-fontStack-body: var(--global-fontFamilies-body), var(--global-fontStack-fallback);
    --global-fontStack-button: var(--component-fontFamilies-button), var(--global-fontStack-fallback);
    --global-fontStack-data: var(--global-fontFamilies-data), var(--global-fontStack-data-fallback);
  }

  /*!sc*/

  data-styled.g78[id="sc-global-dGmOaz1"] {
    content: "sc-global-dGmOaz1,"
  }

  /*!sc*/

  .bpxeIm {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  /*!sc*/

  .bpxeIm,
  .bpxeIm svg {
    height: var(--global-space-24);
    width: var(--global-space-24);
  }

  /*!sc*/

  .bpxeIm svg {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    fill: transparent;
    stroke-width: 1.2px;
  }

  /*!sc*/

  .bpxeIm svg * {
    -webkit-transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1);
    vector-effect: non-scaling-stroke;
  }

  /*!sc*/

  .bpxeIm svg *[data-color],
  .bpxeIm svg *[data-fill] {
    fill: var(--global-brand-patreon);
  }

  /*!sc*/

  data-styled.g105[id="sc-XxNYO"] {
    content: "bpxeIm,"
  }

  /*!sc*/

  .cikvcG {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    left: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 0;
    padding: var(--global-space-24);
    gap: var(--global-space-12);
    z-index: 2000;
  }

  /*!sc*/

  @media (min-width:49.75rem) {
    .cikvcG {
      -webkit-align-items: flex-end;
      -webkit-box-align: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
    }
  }

  /*!sc*/

  @media (min-width:49.75rem) {
    .cikvcG {
      gap: var(--global-space-16);
    }
  }

  /*!sc*/

  data-styled.g136[id="sc-eWfVMQ"] {
    content: "cikvcG,"
  }

  /*!sc*/

  .VFaya {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /*!sc*/

  data-styled.g147[id="sc-cvZCdy"] {
    content: "VFaya,"
  }

  /*!sc*/

  .euQjyv {
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: var(--global-bg-base-default);
    border-bottom: 1px solid var(--global-bg-baseAlt-default);
    box-sizing: border-box;
    display: grid;
    grid-column-gap: var(--global-space-16);
    grid-template-columns: auto auto;
    grid-template-rows: 64px;
    padding: 0 var(--global-space-16);
    position: fixed;
    width: 100%;
  }

  /*!sc*/

  data-styled.g153[id="sc-bUbRBg"] {
    content: "euQjyv,"
  }

  /*!sc*/

  .fnXXfh {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  /*!sc*/

  data-styled.g154[id="sc-tAExr"] {
    content: "fnXXfh,"
  }

  /*!sc*/

  .NvVJk {
    justify-self: end;
  }

  /*!sc*/

  data-styled.g155[id="sc-dSfdvi"] {
    content: "NvVJk,"
  }

  /*!sc*/

  .eQyEsP {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: var(--global-space-16) var(--global-space-16) var(--global-space-16) 0rem;
  }

  /*!sc*/

  .eQyEsP:hover {
    opacity: 0.8;
  }

  /*!sc*/

  data-styled.g157[id="sc-cHzqoD"] {
    content: "eQyEsP,"
  }

  /*!sc*/

  body {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    background-color: var(--background-color-fill);
    --background-color-mobile-fill: var(--global-bg-pageAlt-default);
    --background-color-mobile-transparent: rgba(255, 255, 255, 0);
    --background-color-desktop-fill: var(--global-bg-page-default);
    --background-color-desktop-transparent: rgba(246, 247, 250, 0);
    --background-color-fill: var(--background-color-mobile-fill);
    --background-color-transparent: var(--background-color-mobile-transparent);
  }

  /*!sc*/

  @media (min-width:36.75rem) {
    body {
      --background-color-fill: var(--background-color-desktop-fill);
      --background-color-transparent: var(--background-color-desktop-transparent);
    }
  }

  /*!sc*/

  data-styled.g205[id="sc-global-dwrsae1"] {
    content: "sc-global-dwrsae1,"
  }

  /*!sc*/

  .jDpuPq {
    z-index: 1100;
    display: none;
  }

  /*!sc*/

  @media (min-width:49.75rem) {
    .jDpuPq {
      display: block;
    }
  }

  /*!sc*/

  @media (min-width:61.125rem) {
    .jDpuPq {
      display: block;
    }
  }

  /*!sc*/

  .jDpuPq header {
    z-index: 1200;
  }

  /*!sc*/

  data-styled.g233[id="sc-nbmdzp-0"] {
    content: "jDpuPq,"
  }

  /*!sc*/

  .gIcKCa {
    z-index: 2147483647;
    padding: var(--global-space-12);
    color: var(--global-content-inverted-default);
    background-color: var(--global-success-action-default);
    font-size: var(--global-fontSizes-body-lg);
    font-weight: var(--global-fontWeights-body-bold);
    position: fixed;
    left: 0;
    top: -9999px;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition: -webkit-transform 0.3s, top 0s 0.3s;
    -webkit-transition: transform 0.3s, top 0s 0.3s;
    transition: transform 0.3s, top 0s 0.3s;
  }

  /*!sc*/

  .gIcKCa:focus {
    top: 0;
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
    -webkit-transition: -webkit-transform 0.3s;
    -webkit-transition: transform 0.3s;
    transition: transform 0.3s;
  }

  /*!sc*/

  data-styled.g240[id="sc-h9yj65-0"] {
    content: "gIcKCa,"
  }

  /*!sc*/

  .kszvge {
    width: 100%;
  }

  /*!sc*/

  data-styled.g321[id="sc-17ntluj-0"] {
    content: "kszvge,"
  }

  /*!sc*/

  .fKueWC {
    width: 100%;
  }

  /*!sc*/

  data-styled.g322[id="sc-17ntluj-1"] {
    content: "fKueWC,"
  }

  /*!sc*/

  .JHlUY {
    margin-top: 64px;
  }

  /*!sc*/

  @media (min-width:61.125rem) {
    .JHlUY {
      margin-top: 64px;
    }
  }

  /*!sc*/

  data-styled.g384[id="sc-e9p4al-0"] {
    content: "JHlUY,"
  }

  /*!sc*/

  .hxBLet {
    background-color: var(--global-bg-base-default);
    box-shadow: 0 1px 0 0 var(--global-constant-blackSubtle-default);
    left: 0;
    position: fixed;
    top: 0;
    z-index: 1100;
    white-space: nowrap;
    width: 100%;
    display: block;
  }

  /*!sc*/

  @media (min-width:49.75rem) {
    .hxBLet {
      display: none;
    }
  }

  /*!sc*/

  @media (min-width:61.125rem) {
    .hxBLet {
      display: none;
    }
  }

  /*!sc*/

  data-styled.g395[id="sc-c4egk9-0"] {
    content: "hxBLet,"
  }

  /*!sc*/

  .iKYwcE>* {
    z-index: 1101;
  }

  /*!sc*/

  data-styled.g396[id="sc-c4egk9-1"] {
    content: "iKYwcE,"
  }

  /*!sc*/

  .mobileNavbar-enter {
    height: 0;
    overflow: hidden;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  /*!sc*/

  .mobileNavbar-enter-active {
    height: 100%;
  }

  /*!sc*/

  .mobileNavbar-exit {
    height: 100%;
    -webkit-transition: all 0.8s ease-in;
    transition: all 0.8s ease-in;
  }

  /*!sc*/

  .mobileNavbar-exit-active {
    height: 0;
    overflow: hidden;
  }

  /*!sc*/

  .mobileNavbar-exit-active form {
    opacity: 0;
  }

  /*!sc*/

  data-styled.g397[id="sc-global-hHPxMq1"] {
    content: "sc-global-hHPxMq1,"
  }

  /*!sc*/

  .ghWJak {
    width: 100%;
    position: fixed;
    z-index: 1200;
    top: 0;
  }

  /*!sc*/

  data-styled.g402[id="sc-qgl8n4-0"] {
    content: "ghWJak,"
  }

  /*!sc*/
</style>    
    <script>(function () {
      self.airgap = {
        readyQueue: [],
        ready(callback) {
          this.readyQueue.push(callback);
        },
        suppressTelemetry: {
          requestConditions: [
            ({ type }) => type === 'DOM:image'
          ],
        }
      };
      })();
    </script>
    <script data-cfasync="false" src="https://cdn.transcend.io/cm/8dec6ba2-a601-4c04-a3ba-e4d5b45000f4/airgap.js" data-backend-sync="on" data-prompt="auto" data-regulate-cookies="on" data-protect="on" data-report-only="off" data-unknown-cookie-policy="block"></script>
    <script>(async function () {
      const transcendToken = '';
      airgap.ready(async (airgap) => {
        await airgap.sync({ auth: transcendToken });
      });
      })();
    </script>


  </head>
  <body >
 <script>
    Object.assign(window.patreon.presets, {"navigation":{"concierge_status":{"finished_at":null,"started_at":null},"has_suspended_posts":false,"has_undelivered_deliverables":false,"impersonation_write_access":false,"is_active_creator":false,"is_admin":false,"is_impersonating":false,"logged_in_become_creator_cta":null,"referer_url":null,"show_referral_program":false,"show_taxes_page":false,"teammate_status":{"is_owner":false,"is_teammate":false},"utm_params":{}}});
</script>        <div id="reactTarget">
 <div class="reactWrapper"><a href="#renderPageContentWrapper" class="sc-h9yj65-0 gIcKCa">Skip navigation</a><div class="sc-qgl8n4-0 ghWJak"><div data-tag="mobile-navbar" class="sc-kLwhqv fwHEJz"><header class="sc-c4egk9-0 hxBLet"><div class="sc-c4egk9-1 iKYwcE"><header class="sc-bUbRBg euQjyv"><div class="sc-tAExr fnXXfh"><a aria-label="Go to home page" href="/" class="sc-cHzqoD eQyEsP"><span class="sc-XxNYO kJEYb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436 476"><path data-fill="1" d="M436 143c-.084-60.778-47.57-110.591-103.285-128.565C263.528-7.884 172.279-4.649 106.214 26.424 26.142 64.089.988 146.596.051 228.883c-.77 67.653 6.004 245.841 106.83 247.11 74.917.948 86.072-95.279 120.737-141.623 24.662-32.972 56.417-42.285 95.507-51.929C390.309 265.865 436.097 213.011 436 143Z"></path></svg></span></a></div><div class="sc-dSfdvi NvVJk"><ul class="sc-cvZCdy VFaya"></ul></div></header></div><div></div></header></div><div data-tag="navbar" class="sc-kLwhqv fwHEJz"><div class="sc-nbmdzp-0 jDpuPq"><header class="sc-bUbRBg euQjyv"><div class="sc-tAExr fnXXfh"><a aria-label="Go to home page" href="/" class="sc-cHzqoD eQyEsP"><span class="sc-XxNYO kJEYb"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 436 476"><path data-fill="1" d="M436 143c-.084-60.778-47.57-110.591-103.285-128.565C263.528-7.884 172.279-4.649 106.214 26.424 26.142 64.089.988 146.596.051 228.883c-.77 67.653 6.004 245.841 106.83 247.11 74.917.948 86.072-95.279 120.737-141.623 24.662-32.972 56.417-42.285 95.507-51.929C390.309 265.865 436.097 213.011 436 143Z"></path></svg></span></a></div><div class="sc-dSfdvi NvVJk"></div></header></div></div></div><div data-tag="navigation-offset-top" class="sc-e9p4al-0 JHlUY"></div><div class="sc-9yv0js-0 kaKZGV"><main role="main" id="renderPageContentWrapper" class="sc-17ntluj-0 sc-17ntluj-1 kszvge fKueWC"><div aria-live="polite" data-tag="toaster" class="sc-eWfVMQ cikvcG"></div></main></div></div>     </div>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-T4J4MKR"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      />
    </noscript>
    <script id="sprig-integration-script">
    (function (l, e, a, p) {
        if (window.Sprig) return;
        window.Sprig = function () { S._queue.push(arguments) }
        var S = window.Sprig; S.appId = a; S._queue = []; window.UserLeap = S;
        a = l.createElement('script');
        a.async = 1; a.src = e + '?id=' + S.appId;
        p = l.getElementsByTagName('script')[0];
        p.parentNode.insertBefore(a, p);
    })(document, 'https://cdn.sprig.com/shim.js', "vk-TL7x4Fg");

        if (Sprig.userId) {
            Sprig("logoutUser")
        }
</script>

  </body>
</html>