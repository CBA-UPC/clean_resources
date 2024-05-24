/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));text--LIGHT: var(--color-primary-text-theme, #000);
    --color-link-text--LIGHT: var(--color-link-text-theme, #146995);
    --color-link-text-hover--LIGHT: var(--color-link-text-hover-theme, #146995);
    --module-title-prompt-border--LIGHT: #ccc;
    --color-byline-authors--LIGHT: #000;

    --color-module-title--LIGHT: #000;
    --color-promo-textAlt--LIGHT: #000;
    --color-promo-text--LIGHT: #000;
    --color-promo-text-hover--LIGHT: #999;
    --color-eyebrow--LIGHT: #146994;
    --color-eyebrow-hover--LIGHT: #1c94d0;
    --color-list-border--LIGHT: var(--color-list-border-theme, var(--color-border));
    --ap-brand-red--LIGHT: #FF322E;

    --color-shadegradient--LIGHT: rgba(255, 255, 255, 0.8);

    --readmore-text--LIGHT: #4b4545;
    --readmore-gradient--LIGHT: #fff;
    --container-title--LIGHT: #000;

    /* DARK COLORS */
    --bgDefault--DARK: #000;
    --color-primary-text--DARK: var(--color-text-inverse);
    --color-link-text--DARK: var(--color-text-inverse);
    --color-link-text-hover--DARK: #999;
    --module-title-prompt-border--DARK: #333;
    --color-byline-authors--DARK: #fff;

    --color-module-title--DARK: #fff;
    --color-promo-textAlt--DARK: #ccc;
    --color-promo-text--DARK: #fff;
    --color-promo-text-hover--DARK: #999;
    --color-eyebrow--DARK: #fff;
    --color-eyebrow-hover--DARK: #999;

    --color-list-border--DARK: #333;

    --color-shadegradient--DARK: rgba(0, 0, 0, 0.8);

    --readmore-text--DARK: #fff;
    --readmore-gradient--DARK: #000;
    --container-title--DARK: #fff;

    
}


    :root {
    --globalColorScheme: 'light';

    /* DEFAULT MODE */
    --bgDefault-DEFAULTMODE: var(--bgDefault--LIGHT);
    --color-primary-text-DEFAULTMODE: var(--color-primary-text--LIGHT);
    --color-link-text-DEFAULTMODE: var(--color-link-text--LIGHT);
    --color-link-text-hover-DEFAULTMODE: var(--color-link-text-hover--LIGHT);
    --module-title-prompt-border-DEFAULTMODE: var(--module-title-prompt-border--LIGHT);
    --color-byline-authors-DEFAULTMODE: var(--color-byline-authors--LIGHT);

    --color-module-title-DEFAULTMODE: var(--color-module-title--LIGHT);
    --color-promo-textAlt-DEFAULTMODE: var(--color-promo-textAlt--LIGHT);
    --color-promo-text-DEFAULTMODE: var(--color-promo-text--LIGHT);
    --color-promo-text-hover-DEFAULTMODE: var(--color-promo-text-hover--LIGHT);
    --color-eyebrow-DEFAULTMODE: var(--color-eyebrow--LIGHT);
    --color-eyebrow-hover-DEFAULTMODE: var(--color-eyebrow-hover--LIGHT);
    --color-list-border-DEFAULTMODE: var(--color-list-border--LIGHT);
    --ap-brand-red-DEFAULTMODE: var(--ap-brand-red--LIGHT);

    --color-shadegradient-DEFAULTMODE: var(--color-shadegradient--LIGHT);

    --readmore-text-DEFAULTMODE: var(--readmore-text--LIGHT);
    --readmore-gradient-DEFAULTMODE: var(--readmore-gradient--LIGHT);
    --container-title-DEFAULTMODE: var(--container-title--LIGHT);

    /* ALT MODE */
    /* DEFAULT MODE */
    --bgDefault-ALTMODE: var(--bgDefault--DARK);
    --color-primary-text-ALTMODE: var(--color-primary-text--DARK);
    --color-link-text-ALTMODE: var(--color-link-text--DARK);
    --color-link-text-hover-ALTMODE: var(--color-link-text-hover--DARK);
    --module-title-prompt-border-ALTMODE: var(--module-title-prompt-border--DARK);
    --color-byline-authors-ALTMODE: var(--color-byline-authors--DARK);

    --color-module-title-ALTMODE: var(--color-module-title--DARK);
    --color-promo-textAlt-ALTMODE: var(--color-promo-textAlt--DARK);
    --color-promo-text-ALTMODE: var(--color-promo-text--DARK);
    --color-promo-text-hover-ALTMODE: var(--color-promo-text-hover--DARK);
    --color-eyebrow-ALTMODE: var(--color-eyebrow--DARK);
    --color-eyebrow-hover-ALTMODE: var(--color-eyebrow-hover--DARK);
    --color-list-border-ALTMODE: var(--color-list-border--DARK);
    --ap-brand-red-ALTMODE: var(--ap-brand-red--DARK);

    --color-shadegradient-ALTMODE: var(--color-shadegradient--DARK);

    --readmore-text-ALTMODE: var(--readmore-text--DARK);
    --readmore-gradient-ALTMODE: var(--readmore-gradient--DARK);
    --container-title-ALTMODE: var(--container-title--DARK);
}



</style>
    <style type="text/css">:root {
        --button-border-radius: 3px;
    </style>
    <style type="text/css">:root {
  --font-1: "Arial";
  --font-2: "Times";
}



@font-face{
  font-family:APVar;
  font-weight: 400;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APVarW05-Regular.3c0c9d016bf55b85d0800dd405b807e3.woff2') format('woff2');
}




@font-face{
  font-family:AP;
  font-weight: 400;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APW05-Regular.554b177de19fb126118d8d529f17aa6b.woff2') format('woff2');
}

@font-face{
  font-family:AP;
  font-weight: 500;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APW05-Medium.af2adfe5cf329805caaecc3469c17ba7.woff2') format('woff2');
}

@font-face{
  font-family:AP;
  font-weight: 700;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APW05-Bold.3be6a0cf2309813e292bcbf849d6fa97.woff2') format('woff2');
}



@font-face{
  font-family:AP;
  font-weight: 400;
  font-stretch: condensed;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APW05-Condensed.a2e7de2f933a2cfb561ebf918445be8c.woff2') format('woff2');
}

@font-face{
  font-family:AP;
  font-weight: 500;
  font-stretch: condensed;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APW05-CondensedMedium.7d3bf8cec74522a6b6277567408b3cac.woff2') format('woff2');
}

@font-face{
  font-family:AP;
  font-weight: 700;
  font-stretch: condensed;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APW05-CondensedBold.6e5f3d10491d025b55a82beebf812af9.woff2') format('woff2');
}




@font-face{
  font-family:AP;
  font-weight: 400;
  font-stretch: semi-condensed;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APW05-SemiCondensed.d6d1dd4cf415654d766572b8828ac316.woff2') format('woff2');
}

@font-face{
  font-family:AP;
  font-weight: 500;
  font-stretch: semi-condensed;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APW05-SemiCondensedMedium.0146527a4261c5e15db1af66f0fc0b28.woff2') format('woff2');
}

@font-face{
  font-family:AP;
  font-weight: 700;
  font-stretch: semi-condensed;
  src:  url('https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APW05-SemiCondensedBold.fcbedb6a106dddd6fdfef5877e011259.woff2') format('woff2');
}


body {
  --font-1: "AP";
  --font-2: "AP";
  --font-page-titles: var(--font-1);
  --font-list-titles: var(--font-1);
  --font-promo-titles: var(--font-1);
  --font-description: var(--font-2);
  --font-quote: var(--font-1);
}
</style>

    
    <link rel="preload" href="https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/assets/fonts/APCustomFont/APVarW05-Regular.3c0c9d016bf55b85d0800dd405b807e3.woff2" as="font" type="font/woff2" crossorigin="">

    
        <link data-bsp-main-css data-cssvarsponyfill="true" class="Webpack-css" rel="stylesheet" href="https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/styles/default/All.min.b883fc70e8912dc4c762b8fcb1bc013e.gz.css">
    <style>@media only screen and (min-width: 768px) {

        .SovrnAd.sovrn-rail {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-sticky {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-home {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-sticky {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-home-sticky {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-hub {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-hub-large {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-hub-sticky {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-story {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-story-sticky {
            min-height: 632px;
        }

        .SovrnAd.sovrn-rail-video {
            min-height: 632px;
        }

        .SovrnAd.sovrn-curated-home {
            min-height: 334px;
        }

        .SovrnAd.sovrn-infeed {
            min-height: 334px;
        }

        .SovrnAd.sovrn-curated-hub {
            min-height: 334px;
        }

        .SovrnAd.sovrn-home-feed {
            min-height: 334px;
        }

        .SovrnAd.sovrn-hub-feed {
            min-height: 334px;
        }

        .SovrnAd.sovrn-story-feed {
            min-height: 334px;
        }

        .SovrnAd.sovrn-home-mobile {
            min-height: 0px;
        }

        .SovrnAd.sovrn-hub-mobile {
            min-height: 0px;
        }

}

@media only screen and (max-width: 767px) {

        .SovrnAd.sovrn-rail {
            min-height: 334px;
        }

        .SovrnAd.sovrn-rail-home {
            min-height: 334px;
        }

    .SovrnAd.sovrn-rail-hub {
            min-height: 334px;
        }

        .SovrnAd.sovrn-rail-hub-large {
            min-height: 334px;
        }

        .SovrnAd.sovrn-curated-home {
            min-height: 334px;
        }

        .SovrnAd.sovrn-infeed {
            min-height: 334px;
        }

        .SovrnAd.sovrn-curated-hub {
            min-height: 334px;
        }

        .SovrnAd.sovrn-home-feed {
            min-height: 334px;
        }

        .SovrnAd.sovrn-hub-feed {
            min-height: 334px;
        }

        .SovrnAd.sovrn-story-feed {
            min-height: 334px;
        }

        .SovrnAd.sovrn-home-mobile {
            min-height: 334px;
        }

        .SovrnAd.sovrn-hub-mobile {
            min-height: 334px;
        }

}</style>
<style> @media only screen and (max-width: 767px) {
     [data-leaderboard-is-fixed='true']:not([data-toggle-header="hamburger-menu"]) {
         --topHeaderPosition: var(--leaderboardAdHeight) !important;
     }
}</style>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">

    <title>Social media | AP News</title><link rel="canonical" href="https://apnews.com/hub/social-media"><meta name="brightspot.contentId" content="00000188-92a0-db7b-a7c8-d7f56f090027"><link rel="apple-touch-icon"sizes="180x180"href="/apple-touch-icon.png"><link rel="icon"type="image/png"href="/favicon-32x32.png"><link rel="icon"type="image/png"href="/favicon-16x16.png"><link type="application/rss+xml" rel="alternate" title="Social media" href="https://apnews.com/hub/social-media.rss"><script type="application/ld+json">{"@context":"http://schema.org","@type":"WebPage","url":"https://apnews.com/hub/social-media","publisher":{"@type":"Organization","name":"AP News","logo":{"@type":"ImageObject","url":"https://assets.apnews.com/fa/ba/9258a7114f5ba5c7202aaa1bdd66/aplogo.svg"}},"name":"Social media | AP News"}</script>

    <!-- this will add webcomponent polyfills based on browsers. As of 04/29/21 still needed for IE11 and Safari -->
    <script src="https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/webcomponents-loader/webcomponents-loader.ce44f83d1399e8dd41e607b70e0642c9.gz.js"></script>

    <script>
        /**
            This allows us to load the IE polyfills via feature detection so that they do not load
            needlessly in the browsers that do not need them. It also ensures they are loaded
            non async so that they load before the rest of our JS.
        */
        var head = document.getElementsByTagName('head')[0];
        if (!window.CSS || !window.CSS.supports || !window.CSS.supports('--fake-var', 0)) {
            var script = document.createElement('script');
            script.setAttribute('src', "https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/util/IEPolyfills.min.5da06518199a7f3c07c59ceef56b2229.gz.js");
            script.setAttribute('type', 'text/javascript');
            script.async = false;
            head.appendChild(script);
        }
    </script>
    
        <script data-bsp-main-js src="https://assets.apnews.com/resource/00000188-2a81-d28a-a1fd-7bfb6ccb0000/styles/default/All.min.a088f3c68ea2e92b8ccff602ce8a1a59.gz.js" async></script>
    <!-- Begin comScore Tag -->
<script type="text/javascript">
    var _comscore = _comscore || [];
    _comscore.push({c1: "2", c2: "3005041"});
    (function () {
        var s = document.createElement("script"), el = document.getElementsByTagName("script")[0];
        s.async = true;
        s.src = "https://sb.scorecardresearch.com/cs/3005041/beacon.js";
        el.parentNode.insertBefore(s, el);
    })();
</script>

<noscript>
    <img src="https://sb.scorecardresearch.com/p?c1=2&;c2=3005041&cv=3.6.0&cj=1">
</noscript>
<!-- End comScore Tag --><script type="text/javascript" id="sovrn-head-data">
    (function (properSpecialOps) {
        window.properSpecialOps = properSpecialOps;
        properSpecialOps.page_meta ={
  "category" : "",
  "dfp_kv" : {
    "environment" : "PRODUCTION",
    "page_type" : "Hub",
    "vnd_prx_segments" : [ "300003", "230141", "230171", "230109", "230139", "230169", "230167", "230166", "230163", "230131", "230161", "230162", "pa_eye107", "pa_tuMA1551", "pa_eye260", "pa_sym0012", "pa_sym0084", "pa_eye177", "pa_g18", "pa_sym0170", "pa_sym0110", "pa_sym0134", "pa_plk0016", "pa_sym0144", "pa_iri2590", "pa_eye112", "pa_eye132", "pa_sym0051", "pa_eye313", "pa_tuMA1628", "pa_sig00020", "pa_eye106", "pa_iri2186", "pa_p1122", "pa_sym0143", "pa_sym0167", "pa_plk0122", "pa_sym0197", "pa_lp1131", "pa_lp1187", "pa_lp1157", "pa_eye164", "pa_sym0049", "pa_eye198", "pa_lp1039", "pa_lp1166", "pa_p1011", "pa_sym0109", "pa_tuMA1549", "pa_sym0077", "pa_p1015", "pa_sym0198", "pa_sig00013", "pa_eye160", "pa_lp1369", "pa_ott3034", "pa_lp1347", "pa_sym0073", "pa_sym0092", "pa_sym0141", "pa_sym0074", "pa_sym0195", "pa_sym0200", "pa_sym0003", "pa_iri2529", "pa_eye134", "pa_eye137", "pa_iri4862", "pa_sym0105", "pa_sym0080", "pa_n5", "pa_sym0156", "pa_eye244", "pa_sym0135", "pa_sym0123", "pa_plk0112", "pa_lp1224", "pa_ott3001", "pa_eye101", "pa_eye252", "pa_eye157", "pa_eye251", "pa_ott3031", "pa_ott3041", "pa_lp1148", "pa_eye322", "pa_lp1145", "pa_eye135", "pa_iri0006", "pa_sym0021", "pa_eye125", "pa_eye83", "pa_sym0057", "pa_sym0146", "pa_sym0106", "pa_eye250", "pa_eye145", "pa_eye140", "pa_ott3037", "pa_lp1238", "pa_sym0168", "pa_p1001", "pa_sym0188", "pa_plk0121", "pa_p1009", "pa_sym0079", "pa_sym0025", "pa_iri3502", "pa_d33", "pa_eye165", "pa_iri5879", "pa_iri2247", "pa_iri2087", "pa_p1115", "pa_iri6082", "pa_tv_heavy", "pa_d23", "pa_iri0036", "pa_ott3005", "pa_eye131", "pa_eye163", "pa_iri6566", "pa_eye166", "pa_iri4845", "pa_sym0180", "pa_plk0073", "pa_eye147", "pa_sym0068", "pa_lp1134", "pa_iri4540", "pa_p1036", "pa_sym0103", "pa_sym0199", "pa_sym0044", "pa_eye110", "pa_lp1320", "pa_eye170", "pa_lp1214", "pa_iri2071", "pa_eye220", "pa_plk0072", "pa_tuMA1563", "pa_ott3020", "pa_tuMA1569", "pa_lp1093", "pa_eye158", "pa_p1128", "pa_eye115", "pa_eye159", "pa_eye162", "pa_sym0054", "pa_sym0001", "pa_sym0099", "pa_sym0125", "pa_sym0002", "pa_sym0104", "pa_ott3044", "pa_sym0101", "pa_sym0081", "pa_lp1373", "pa_eye169", "pa_p1071", "pa_n28", "pa_sym0173", "pa_ott3002", "pa_p1002", "pa_sym0158", "pa_plk0070", "pa_sym0004", "pa_eye202", "pa_sym0102", "pa_ott3004", "pa_m10", "pa_sym0085", "pa_plk0004", "pa_tuMA1557", "pa_eye176", "pa_sym0082", "pa_sym0129", "pa_ott3007", "pa_plk0106", "pa_plk0125", "pa_ott3040", "pa_lp1243", "pa_sym0130", "pa_eye243", "pa_lp1255", "pa_plk0022", "pa_sym0069", "pa_lp1019", "pa_plk0050", "pa_sym0176", "pa_p1025", "pa_iri0732", "pa_sym0006", "pa_eye138", "pa_sym0127", "pa_eye100", "pa_p1007", "pa_iri2127", "pa_sym0177", "pa_plk0064", "pa_sym0015", "pa_lp1121", "pa_lp1046", "pa_sym0174", "pa_plk0124", "pa_eye111", "pa_tuMA1577", "pa_iri4769", "pa_eye172", "pa_sym0014", "pa_spk012", "pa_iri0030", "pa_sym0061", "pa_spk017", "pa_iri4520", "pa_iri0129", "pa_sym0187", "pa_sym0095", "pa_iri4499", "pa_sym0067", "pa_lp1377", "pa_plk0047", "pa_sym0058", "pa_iri3099", "pa_lp1184", "pa_plk0095", "pa_lp1306", "pa_lp1340", "pa_lp1221", "pa_plk0129", "pa_sym0019", "pa_sym0132", "pa_ott3038", "pa_sym0108", "pa_eye142", "pa_sym0100", "pa_sym0064", "pa_iri4863", "pa_plk0074", "pa_sym0190", "pa_eye199", "pa_lp1360", "pa_iri0522", "pa_p1032", "pa_sym0120", "pa_g3", "pa_iri3288", "pa_sym0062", "pa_p1062", "pa_sym0094", "pa_sym0151", "pa_eye153", "pa_p1041", "pa_d34", "pa_eye249", "pa_lp1252", "pa_iri5104", "pa_eye118", "pa_n3", "pa_eye97", "pa_lp1172", "pa_sym0043", "pa_lp1382", "pa_sym0172", "pa_lp1381", "pa_iri6410", "pa_eye114", "pa_lp1359", "pa_ott3013", "pa_eye201", "pa_eye146", "pa_sym0145", "pa_eye141", "pa_sym0163", "pa_plk0101", "pa_eye127", "pa_sym0036", "pa_sym0116", "pa_sym0089", "pa_g9", "pa_lp1061", "pa_sym0065", "pa_sym0048", "pa_ott3010", "pa_sym0007", "pa_plk0105", "pa_eye154", "pa_sym0166", "pa_plk0015", "pa_sym0090", "pa_g25", "pa_sym0113", "pa_lp1281", "pa_m14", "pa_d24", "pa_eye167", "pa_sym0178", "pa_sym0052", "pa_sym0020", "pa_eye247", "pa_plk0087", "pa_ott3028", "pa_ott3016", "pa_sym0142", "pa_iri4519", "pa_eye253", "pa_plk0084", "pa_eye151", "pa_plk0033", "pa_plk0079", "pa_eye168", "pa_iri3453", "pa_plk0081", "pa_lp1179", "pa_iri2588", "pa_lp1386", "pa_plk0055", "pa_lp1190", "pa_g27", "pa_eye224", "pa_iri7770", "pa_sym0191", "pa_iri4636", "pa_ott3043", "pa_iri4724", "pa_sym0078", "pa_sym0087", "pa_lp1297", "pa_n4", "pa_plk0078", "pa_sym0093", "pa_spk007", "pa_sym0181", "pa_lp1364", "pa_sym0011", "pa_eye173", "pa_eye128", "pa_eye139", "pa_lp1195", "pa_iri4860", "pa_eye278", "pa_lp1232", "pa_eye129", "pa_sym0185", "pa_sym0037", "pa_eye227", "pa_ott3025", "pa_lp1268", "pa_m13", "pa_sym0165", "pa_eye148", "pa_sym0152", "pa_eye105", "pa_eye203", "pa_iri0665", "pa_eye126", "pa_eye155", "pa_eye156", "pa_tuMA1571", "pa_sym0059", "pa_sym0155", "pa_eye152", "pa_iri6213", "pa_ott3017", "pa_lp1343", "pa_eye130", "pa_eye255", "pa_sym0088", "pa_lp1235", "pa_ott3019", "pa_iri3457", "pa_g15", "pa_eye200", "pa_iri2088", "pa_sym0150", "pa_eye161", "pa_plk0120", "pa_p1003", "pa_sym0041", "pa_sym0153", "dem2001", "dem3001", "iab2_01530", "iab2_00432", "iab2_00379", "tv_g15", "iab2_00382", "iab2_00385", "iab2_00433", "iab2_00596", "iab2_00599", "iab2_00619", "iab2_00628", "iab2_00338" ]
  },
  "tags" : [ "Social media" ],
  "page_type" : "Hub",
  "publication_date" : "",
  "item_id" : "Socialmedia",
  "headline" : null,
  "authors" : [ ]
};properSpecialOps.post_id = "00000188-92a0-db7b-a7c8-d7f56f090027";})(window.properSpecialOps || {})
</script>

<script type="text/javascript" id="sovrn-head-init"> 
    var propertag = propertag || {};
    propertag.cmd = propertag.cmd || [];
</script>

<link rel='preconnect' href='//global.proper.io'>
<link rel='preload' href='//global.proper.io/apnews.min.js' as='script'>
<link rel='preload' href='//global.proper.io/payloads/latest.js' as='script'>
<link rel='preload' href='//securepubads.g.doubleclick.net/tag/js/gpt.js' as='script'>
<script async type='text/javascript' src='//global.proper.io/apnews.min.js'></script><script src="https://ak.sail-horizon.com/spm/spm.v1.min.js"></script>
<script>Sailthru.init({ customerId: 'c09a19887a0b3e6633179ff11d8d4f04' });</script>
<script>
	(function(d) {
		var e = d.createElement('script');
		e.src = d.location.protocol + '//tag.wknd.ai/5127/i.js';
		e.async = true;
		d.getElementsByTagName("head")[0].appendChild(e);
	}(document));
</script>
<script src="https://507b28fb-2ef1-4c34-8bda-ba32030bb199.edge.permutive.app/507b28fb-2ef1-4c34-8bda-ba32030bb199-web.js" async></script>
<script></script><script src="//tru.am/scripts/custom/associatedpress.js"></script></script>
<script></script><script id="usntA40start" src="https://a40.usablenet.com/pt/c/apnews/ls-start"
type="text/javascript" async></script></script>
<script>((selectors, LogStyle) => {
    document.addEventListener('DOMContentLoaded', () => {
        const ZephrEls = document.querySelectorAll(selectors)
        ZephrEls.forEach(el => {
			console.log('%cZephrElementFound', LogStyle, el.className, el)	
        })
    })
})('.Zephr-bar, .Zephr-donateModule', 'background: #00D2B9;color: black; padding: 4px;')</script>
<script>window.Zephr = window.Zephr || {};
window.Zephr.includeOutcomes = true;
window.Zephr.outcomesAsEvents = true;
window.Zephr.groupFields = false;
(function() {
    console.log('loading blaize...')
    var xhr = new(XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    xhr.open('GET', '/blaize/datalayer', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var response;
            try {
                response = JSON.parse(xhr.response);
            } catch (e) {
                response = xhr.response;
            }
            if (xhr.status === 200) {
                for (var dataLayerFieldName in response) {
                    if (!(dataLayerFieldName in window)) window[dataLayerFieldName] = [];

                    var pageView = response[dataLayerFieldName];
                    var events = [];

                    if (window.Zephr && window.Zephr.includeOutcomes && window.Zephr.outcomes) {
                        pageView.zephrOutcomes = window.Zephr.outcomes;

                        if (window.Zephr.outcomesAsEvents) {
                            Object.keys(window.Zephr.outcomes || []).forEach(function(outcomeKey) {
                                var outcomeEvent = {
                                    event: "zephr-outcome-" + outcomeKey,
                                    featureId: outcomeKey,
                                    featureLabel: window.Zephr.outcomes[outcomeKey].featureLabel,
                                    outcomeId: window.Zephr.outcomes[outcomeKey].outcomeId,
                                    outcomeLabel: window.Zephr.outcomes[outcomeKey].outcomeLabel,
                                };
                                events.push(outcomeEvent);
                            });
                        }
                    }
                    if (window.Zephr && window.Zephr.accessDetails) {
                        Object.keys((window.Zephr.accessDetails.trials || {})).forEach(function(trialId){
                            var trial = window.Zephr.accessDetails.trials[trialId]
                            if(trial.reportInDataLayer){
                                var usedCredits = trial.totalCredits - trial.remainingCredits
                                if (window.Zephr.groupFields && !pageView.zephrTrials) pageView.zephrTrials = {};
                                var target = window.Zephr.groupFields ? pageView.zephrTrials : pageView
                                if (trial.dataLayerCreditsUsedKey) {
                                   target[trial.dataLayerCreditsUsedKey] = usedCredits;
                                }
                                if (trial.dataLayerCreditsRemainingKey) {
                                   target[trial.dataLayerCreditsRemainingKey] = trial.remainingCredits;
                                }
                            }
                        });
                        (window.Zephr.accessDetails.trialTrackingDetails || []).forEach(function(details) {
                            var type = details.entitlementType === 'credits' ? 'credits' : 'meters';
                            var trial = (window.Zephr.accessDetails[type] || {})[details.entitlementId];
                            if (!trial) return;
                            if (window.Zephr.groupFields && !pageView.zephrTrials) pageView.zephrTrials = {};
                            if (details.creditsRemainingKey) {
                                if (window.Zephr.groupFields) {
                                    pageView.zephrTrials[details.creditsRemainingKey] = trial.remainingCredits;
                                } else {
                                    pageView[details.creditsRemainingKey] = trial.remainingCredits;
                                }
                            }
                            if (details.creditsUsedKey) {
                                if (window.Zephr.groupFields) {
                                    pageView.zephrTrials[details.creditsUsedKey] = trial.totalCredits - trial.remainingCredits;
                                } else {
                                    pageView[details.creditsUsedKey] = trial.totalCredits - trial.remainingCredits;
                                }
                            }
                        });
                        try {
                          (Object.keys(window.Zephr.accessDetails.timeTrials || {})).forEach(function(timeTrialId) {
                               var timeTrial = window.Zephr.accessDetails.timeTrials[timeTrialId]
                               if(timeTrial.reportInDataLayer){
                                   if (window.Zephr.groupFields && !pageView.zephrTrials) pageView.zephrTrials = {};
                                   var target = window.Zephr.groupFields ? pageView.zephrTrials : pageView

                                   if (timeTrial.dataLayerTrialDurationKey) {
                                    target[timeTrial.dataLayerTrialDurationKey] = timeTrial.trialDuration;
                                   }
                                   if (timeTrial.dataLayerTrialDurationUnitsKey) {
                                    target[timeTrial.dataLayerTrialDurationUnitsKey] = timeTrial.trialDurationUnits;
                                   }
                                   if (timeTrial.dataLayerTrackerEntryTimeKey) {
                                    target[timeTrial.dataLayerTrackerEntryTimeKey] = timeTrial.entryTime;
                                   }
                                   if (timeTrial.dataLayerTrackerHitsKey) {
                                    target[timeTrial.dataLayerTrackerHitsKey] = timeTrial.trackerHits;
                                   }
                                   if (timeTrial.dataLayerTrialTimeRemainingKey) {
                                    target[timeTrial.dataLayerTrialTimeRemainingKey] = timeTrial.timeRemainingInTrial;
                                   }
                               }
                          });
                        } catch (err) {
                          console.error("Error aggregating Zephr time trials", err);
                        }
                    }
                    if (Object.keys(pageView).length) {
                        pageView.event = "zephr-pageview";
                        events.unshift(pageView);
                    }
                    if (!events.length) continue;

                    events.forEach(function(event) {
                        window[dataLayerFieldName].push(event);
                    });
                }
                var readyEvent = document.createEvent('Event');
                readyEvent.initEvent('zephr.dataLayerReady', true, true);
                document.dispatchEvent(readyEvent);
            }
        }
    }
    xhr.send({});
})();</script>
<script type="text/javascript" src="https://s.ntv.io/serve/load.js" async id="nativo-head"></script>

<script>
    window.ntvConfig = window.ntvConfig || {};
    window.ntvConfig.keyValues = window.ntvConfig.keyValues || {};
    var segs = localStorage.getItem('_pnativo');
    if (segs) {
        window.ntvConfig.keyValues.permutive = JSON.parse(segs).join(",");
    }
</script><link rel="preconnect" href="https://connect.facebook.net">
<script>
  window.fbAsyncInit = function() {
      FB.init({
          
              appId : '2220391788200892',
          
          xfbml : true,
          version : 'v2.9'
      });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
<script id="taboola-newsroom-head" type="text/javascript">
    window._newsroom=window._newsroom||[];window._newsroom.push({pageTemplate:'Social media'});
    window._newsroom.push({pageDashboard:'Social media'});
    window._newsroom.push('auditClicks');
    window._newsroom.push('trackPage');!function(e,f,u){e.async=1;e.src=u;f.parentNode.insertBefore(e,f);}(document.createElement('script'),document.getElementsByTagName('script')[0],'//c2.taboola.com/nr/associatedpress-apnews/newsroom.js');
</script><script id="taboola-recommendation-module-head" type="text/javascript">
  
  window._taboola = window._taboola || [];
  _taboola.push({
    category :'auto'
  });
  !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.async = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
  }(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/associatedpress-apnews/loader.js',
  'tb_loader_script');

  if(window.performance && typeof window.performance.mark == 'function')
    {window.performance.mark('tbl_ic');}
</script><meta name="ga-dataLayer" content="{
  &quot;dimension15&quot; : &quot;&quot;,
  &quot;dimension9&quot; : &quot;&quot;
}">
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-19104461-33"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

         (function () {
            var dataValue = document.head.querySelector('meta[name="ga-dataLayer"]')?.content;
            if (dataValue) {
                dataValue = JSON.parse(dataValue);
                Object.keys(dataValue).forEach(key => {
                    const dimensionConfig = {}
                    dimensionConfig[key] = dataValue[key]
                    console.log('dimensionConfig',dimensionConfig)
                    gtag('set', dimensionConfig);
                })
            }
         })()

        gtag('config', 'UA-19104461-33');
    </script>

<meta name="permutive-dataLayer" content="{
  &quot;category&quot; : &quot;&quot;,
  &quot;dfp_kv&quot; : {
    &quot;page_type&quot; : &quot;Hub&quot;
  },
  &quot;tags&quot; : [ &quot;Social media&quot; ],
  &quot;page_type&quot; : &quot;Hub&quot;,
  &quot;publication_date&quot; : &quot;&quot;,
  &quot;item_id&quot; : &quot;Socialmedia&quot;,
  &quot;headline&quot; : null,
  &quot;authors&quot; : [ ]
}"><script type="text/javascript">
    let dataValue = undefined;
    (function () {
        dataValue = document.head.querySelector('meta[name="permutive-dataLayer"]')?.content;
        if (dataValue) {
            dataValue = JSON.parse(dataValue);
        }
    })();
    if (!dataValue) {
        dataValue = {}
    }

    !function (e, o, n, i) { if (!e) { e = e || {}, window.permutive = e, e.q = []; var t = function () { return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (e) { return (e ^ (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16) }) }; e.config = i || {}, e.config.apiKey = o, e.config.workspaceId = n, e.config.environment = e.config.environment || "production", (window.crypto || window.msCrypto) && (e.config.viewId = t()); for (var g = ["addon", "identify", "track", "trigger", "query", "segment", "segments", "ready", "on", "once", "user", "consent"], r = 0; r < g.length; r++) { var w = g[r]; e[w] = function (o) { return function () { var n = Array.prototype.slice.call(arguments, 0); e.q.push({ functionName: o, arguments: n }) } }(w) } } }(window.permutive, "8dce728a-278c-4ac4-9b6b-884b0190015b", "507b28fb-2ef1-4c34-8bda-ba32030bb199", { "consentRequired": true });
    window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function () {
        if (0 === window.googletag.pubads().getTargeting("permutive").length) {
            var e = window.localStorage.getItem("_pdfps");
            window.googletag.pubads().setTargeting("permutive", e ? JSON.parse(e) : []);
            var o = window.localStorage.getItem("permutive-id");
            o && (window.googletag.pubads().setTargeting("puid", o), window.googletag.pubads().setTargeting("ptime", Date.now().toString())), window.permutive.config.viewId && window.googletag.pubads().setTargeting("prmtvvid", window.permutive.config.viewId), window.permutive.config.workspaceId && window.googletag.pubads().setTargeting("prmtvwid", window.permutive.config.workspaceId)
        }
    });
    permutive.addon('web', {
        "page": {
            "classifications_watson": {
                "categories": "$alchemy_taxonomy",
                "concepts": "$alchemy_concepts",
                "emotion": "$alchemy_document_emotion",
                "entities": "$alchemy_entities",
                "keywords": "$alchemy_keywords",
                "sentiment": "$alchemy_document_sentiment"
            },
            "publishedAt": dataValue.publication_date, // "2021-11-09T16:20:05.063Z"
            "title": dataValue.headline, // "text"
            "page_type": dataValue.page_type, // "text"
            "category": dataValue.category, // "text"
            "authors": dataValue.authors, // ["list", "of", "strings"]
            "tags": dataValue.tags // ["list", "of", "strings"]
        }
    });
</script><link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <script>
        var link = document.createElement('link');
        link.setAttribute('href', '//fonts.googleapis.com/css?family=Roboto:300,400,700|Merriweather:300,400,700&display=swap');
        var relList = link.relList;

        if (relList && relList.supports('preload')) {
            link.setAttribute('as', 'style');
            link.setAttribute('rel', 'preload');
            link.setAttribute('onload', 'this.rel="stylesheet"');
            link.setAttribute('crossorigin', 'anonymous');
        } else {
            link.setAttribute('rel', 'stylesheet');
        }

        head.appendChild(link);
    </script>

    <script src="https://assets.zephr.com/zephr-browser/1.6.0/zephr-browser.umd.js"></script>
        <script>
            let baseUrl = '//ap-prod.apnews.com';
            document.addEventListener('DOMContentLoaded', (event) => {
                zephrBrowser.run(baseUrl);
            });
        </script>
    <meta name="gtm-dataLayer" content="{
  &quot;event&quot; : &quot;Tag&quot;,
  &quot;headline&quot; : &quot;Social media&quot;,
  &quot;publication_date&quot; : &quot;&quot;,
  &quot;page_type&quot; : &quot;Tag&quot;
}"><script>
        window.dataLayer = window.dataLayer || [];
        (function () {
            var dataValue = document.head.querySelector('meta[name="gtm-dataLayer"]')?.content;
            if (dataValue) {
                dataValue = JSON.parse(dataValue);
                
                window.dataLayer.push(dataValue);
            }
        })();
    </script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KT7RHVG');</script>
    <!-- End Google Tag Manager -->
    

    <script>
    window.i18n = {}
    window.i18n.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    window.i18n.monthsFull = ['January','February','March','April','May','June','July','August','September','October','November','December']
</script>
</head>


<body class="Page-body">
    
    
    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KT7RHVG" height="0" width="0" style="display:none;visibility:hidden">
        </iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

<div class="Page-header-stickyWrap">
    

    
        
            <bsp-header-leaderboard class="Page-header-leaderboardAd" data-timeout="2" data-pretimeout="3"><div class="SovrnAd Advertisement sovrn-leaderboard"
    data-module
    
></div>
</bsp-header-leaderboard>
        
    

    <!-- Putting icons here, so we don't have to include in a bunch of -body hbs's -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display:none" id="iconsMap">
    <symbol id="mono-icon-reddit" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"/>
    </symbol>

    <symbol id="mono-icon-flipboard" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z"/>
    </symbol>

    <symbol id="mono-icon-facebook" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
    </symbol>

    <symbol id="transmission-icon" viewBox="0 0 16 16">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill="#FF322E" fill-rule="nonzero">
                <g id="icon/podcast">
                    <path d="M9.60383214,7.99932252 C9.60383214,8.59143443 9.28377164,9.10353122 8.80368091,9.37558264 L8.80368091,15.2006836 C8.80368091,15.6407668 8.44361285,16.0008348 8.00352967,16.0008348 L8.00352967,16.0008348 C7.56344649,16.0008348 7.20337844,15.6407668 7.20337844,15.2006836 L7.20337844,9.37558264 C6.7232877,9.09552971 6.40322721,8.59143443 6.40322721,7.99932252 C6.40322721,7.11915616 7.12336332,6.39902005 8.00352967,6.39902005 C8.88369603,6.39902005 9.60383214,7.11915616 9.60383214,7.99932252 Z M7.00334063,3.30243478 C5.18699733,3.67050435 3.70671755,5.12677959 3.31464345,6.94312289 C2.99458296,8.43140418 3.37065403,9.83967035 4.17880678,10.89587 C4.45885971,11.255938 5.00296255,11.2719411 5.32302304,10.9518806 L5.37903363,10.89587 C5.65108505,10.6238186 5.65108505,10.1997384 5.4270427,9.89568094 C4.88293986,9.17554483 4.6428945,8.21536335 4.89894289,7.19917128 C5.17899582,6.06295653 6.11517276,5.14278262 7.25938903,4.89473573 C9.35578526,4.41464499 11.2041346,5.99094292 11.2041346,7.99932252 C11.2041346,8.69545409 10.9800923,9.33557508 10.5960197,9.85567338 C10.3559743,10.1837354 10.3639758,10.6318201 10.6520303,10.9198745 L10.6520303,10.9198745 C11.0040968,11.2719411 11.5882072,11.2159305 11.8842632,10.8078533 C12.460372,10.0237051 12.8044371,9.04752063 12.8044371,7.99932252 C12.8044371,5.02275993 10.0919244,2.67831682 7.00334063,3.30243478 Z M7.06735273,0.0538207755 C3.44266765,0.461897904 0.490109597,3.39845293 0.0580279314,7.02313801 C-0.222025,9.38358415 0.530117159,11.5599955 1.91437879,13.1843025 C2.21043475,13.5283675 2.73853456,13.5523721 3.05859505,13.2323116 L3.09860262,13.192304 C3.37865555,12.9122511 3.40266008,12.4561649 3.13861018,12.1521074 C1.89037425,10.6878307 1.27425781,8.65544653 1.77835308,6.50303971 C2.33845894,4.0945845 4.322834,2.19022457 6.75529375,1.72613685 C10.8280635,0.941988644 14.4047395,4.06257845 14.4047395,7.99932252 C14.4047395,9.56761893 13.8286306,11.0078912 12.8844522,12.1281029 C12.6124008,12.4481634 12.6364053,12.9122511 12.9244598,13.208307 L12.9244598,13.208307 C13.2605233,13.5443706 13.8126276,13.520366 14.1166851,13.1522965 C15.2929074,11.7600333 16.005042,9.96769455 16.005042,7.99932252 C16.005042,3.27042873 11.9002662,-0.498283575 7.06735273,0.0538207755 Z" id="Shape_icon"></path>
                </g>
            </g>
        </g>
    </symbol>
    <symbol id="author-icon-facebook" viewBox="0 0 9 18">
        <path d="M6 6h3l-.375 3H6v9H2.11V9H0V6h2.11V3.984c0-1.312.327-2.304.984-2.976C3.75.336 4.844 0 6.375 0H9v3H7.406c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V6z" fill-rule="evenodd"/>
    </symbol>

    <symbol id="open-in-new-window" viewBox="0 0 24 24">
        <g id="Radio/icon/open" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M19.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,19.5 C3,20.3284271 3.67157288,21 4.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,4.5 C21,3.67157288 20.3284271,3 19.5,3 Z M19.5,19.5 L4.5,19.5 L4.5,4.5 L19.5,4.5 L19.5,19.5 Z M8.469375,15.530625 C8.32854222,15.3899488 8.24941001,15.1990569 8.24941001,15 C8.24941001,14.8009431 8.32854222,14.6100512 8.469375,14.469375 L13.1896875,9.75 L10.5,9.75 C10.0857864,9.75 9.75,9.41421356 9.75,9 C9.75,8.58578644 10.0857864,8.25 10.5,8.25 L15,8.25 C15.4142136,8.25 15.75,8.58578644 15.75,9 L15.75,13.5 C15.75,13.9142136 15.4142136,14.25 15,14.25 C14.5857864,14.25 14.25,13.9142136 14.25,13.5 L14.25,10.8103125 L9.530625,15.530625 C9.38994881,15.6714578 9.19905694,15.75059 9,15.75059 C8.80094306,15.75059 8.61005119,15.6714578 8.469375,15.530625 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
            <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
        </g>
    </symbol>

    <symbol id="mono-icon-instagram" viewBox="0 0 17 17">
        <g>
            <path fill-rule="evenodd" d="M8.281 4.207c.727 0 1.4.182 2.022.545a4.055 4.055 0 0 1 1.476 1.477c.364.62.545 1.294.545 2.021 0 .727-.181 1.4-.545 2.021a4.055 4.055 0 0 1-1.476 1.477 3.934 3.934 0 0 1-2.022.545c-.726 0-1.4-.182-2.021-.545a4.055 4.055 0 0 1-1.477-1.477 3.934 3.934 0 0 1-.545-2.021c0-.727.182-1.4.545-2.021A4.055 4.055 0 0 1 6.26 4.752a3.934 3.934 0 0 1 2.021-.545zm0 6.68a2.54 2.54 0 0 0 1.864-.774 2.54 2.54 0 0 0 .773-1.863 2.54 2.54 0 0 0-.773-1.863 2.54 2.54 0 0 0-1.864-.774 2.54 2.54 0 0 0-1.863.774 2.54 2.54 0 0 0-.773 1.863c0 .727.257 1.348.773 1.863a2.54 2.54 0 0 0 1.863.774zM13.45 4.03c-.023.258-.123.48-.299.668a.856.856 0 0 1-.65.281.913.913 0 0 1-.668-.28.913.913 0 0 1-.281-.669c0-.258.094-.48.281-.668a.913.913 0 0 1 .668-.28c.258 0 .48.093.668.28.187.188.281.41.281.668zm2.672.95c.023.656.035 1.746.035 3.269 0 1.523-.017 2.62-.053 3.287-.035.668-.134 1.248-.298 1.74a4.098 4.098 0 0 1-.967 1.53 4.098 4.098 0 0 1-1.53.966c-.492.164-1.072.264-1.74.3-.668.034-1.763.052-3.287.052-1.523 0-2.619-.018-3.287-.053-.668-.035-1.248-.146-1.74-.334a3.747 3.747 0 0 1-1.53-.931 4.098 4.098 0 0 1-.966-1.53c-.164-.492-.264-1.072-.299-1.74C.424 10.87.406 9.773.406 8.25S.424 5.63.46 4.963c.035-.668.135-1.248.299-1.74.21-.586.533-1.096.967-1.53A4.098 4.098 0 0 1 3.254.727c.492-.164 1.072-.264 1.74-.3C5.662.394 6.758.376 8.281.376c1.524 0 2.62.018 3.287.053.668.035 1.248.135 1.74.299a4.098 4.098 0 0 1 2.496 2.496c.165.492.27 1.078.317 1.757zm-1.687 7.91c.14-.399.234-1.032.28-1.899.024-.515.036-1.242.036-2.18V7.689c0-.961-.012-1.688-.035-2.18-.047-.89-.14-1.524-.281-1.899a2.537 2.537 0 0 0-1.512-1.511c-.375-.14-1.008-.235-1.899-.282a51.292 51.292 0 0 0-2.18-.035H7.72c-.938 0-1.664.012-2.18.035-.867.047-1.5.141-1.898.282a2.537 2.537 0 0 0-1.512 1.511c-.14.375-.234 1.008-.281 1.899a51.292 51.292 0 0 0-.036 2.18v1.125c0 .937.012 1.664.036 2.18.047.866.14 1.5.28 1.898.306.726.81 1.23 1.513 1.511.398.141 1.03.235 1.898.282.516.023 1.242.035 2.18.035h1.125c.96 0 1.687-.012 2.18-.035.89-.047 1.523-.141 1.898-.282.726-.304 1.23-.808 1.512-1.511z"></path>
        </g>
    </symbol>
    <symbol id="author-icon-instagram" viewBox="0 0 17 17">
        <g>
            <path fill-rule="evenodd" d="M8.281 4.207c.727 0 1.4.182 2.022.545a4.055 4.055 0 0 1 1.476 1.477c.364.62.545 1.294.545 2.021 0 .727-.181 1.4-.545 2.021a4.055 4.055 0 0 1-1.476 1.477 3.934 3.934 0 0 1-2.022.545c-.726 0-1.4-.182-2.021-.545a4.055 4.055 0 0 1-1.477-1.477 3.934 3.934 0 0 1-.545-2.021c0-.727.182-1.4.545-2.021A4.055 4.055 0 0 1 6.26 4.752a3.934 3.934 0 0 1 2.021-.545zm0 6.68a2.54 2.54 0 0 0 1.864-.774 2.54 2.54 0 0 0 .773-1.863 2.54 2.54 0 0 0-.773-1.863 2.54 2.54 0 0 0-1.864-.774 2.54 2.54 0 0 0-1.863.774 2.54 2.54 0 0 0-.773 1.863c0 .727.257 1.348.773 1.863a2.54 2.54 0 0 0 1.863.774zM13.45 4.03c-.023.258-.123.48-.299.668a.856.856 0 0 1-.65.281.913.913 0 0 1-.668-.28.913.913 0 0 1-.281-.669c0-.258.094-.48.281-.668a.913.913 0 0 1 .668-.28c.258 0 .48.093.668.28.187.188.281.41.281.668zm2.672.95c.023.656.035 1.746.035 3.269 0 1.523-.017 2.62-.053 3.287-.035.668-.134 1.248-.298 1.74a4.098 4.098 0 0 1-.967 1.53 4.098 4.098 0 0 1-1.53.966c-.492.164-1.072.264-1.74.3-.668.034-1.763.052-3.287.052-1.523 0-2.619-.018-3.287-.053-.668-.035-1.248-.146-1.74-.334a3.747 3.747 0 0 1-1.53-.931 4.098 4.098 0 0 1-.966-1.53c-.164-.492-.264-1.072-.299-1.74C.424 10.87.406 9.773.406 8.25S.424 5.63.46 4.963c.035-.668.135-1.248.299-1.74.21-.586.533-1.096.967-1.53A4.098 4.098 0 0 1 3.254.727c.492-.164 1.072-.264 1.74-.3C5.662.394 6.758.376 8.281.376c1.524 0 2.62.018 3.287.053.668.035 1.248.135 1.74.299a4.098 4.098 0 0 1 2.496 2.496c.165.492.27 1.078.317 1.757zm-1.687 7.91c.14-.399.234-1.032.28-1.899.024-.515.036-1.242.036-2.18V7.689c0-.961-.012-1.688-.035-2.18-.047-.89-.14-1.524-.281-1.899a2.537 2.537 0 0 0-1.512-1.511c-.375-.14-1.008-.235-1.899-.282a51.292 51.292 0 0 0-2.18-.035H7.72c-.938 0-1.664.012-2.18.035-.867.047-1.5.141-1.898.282a2.537 2.537 0 0 0-1.512 1.511c-.14.375-.234 1.008-.281 1.899a51.292 51.292 0 0 0-.036 2.18v1.125c0 .937.012 1.664.036 2.18.047.866.14 1.5.28 1.898.306.726.81 1.23 1.513 1.511.398.141 1.03.235 1.898.282.516.023 1.242.035 2.18.035h1.125c.96 0 1.687-.012 2.18-.035.89-.047 1.523-.141 1.898-.282.726-.304 1.23-.808 1.512-1.511z"></path>
        </g>
    </symbol>
    <symbol id="mono-icon-mailto" viewBox="0 0 512 512">
        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
    </symbol>

    <symbol id="author-icon-mailto" viewBox="0 0 21 15.556">
        <g stroke="currentColor" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 13.889c0 .92-.672 1.667-1.5 1.667h-18c-.828 0-1.5-.747-1.5-1.667V1.667C0 .746.672 0 1.5 0h18c.828 0 1.5.746 1.5 1.667v12.222h0z"/>
            <path d="m20.5.556-10 8.888L.5.556"/>
        </g>
    </symbol>
    <symbol id="link-caret" viewBox="0 0 24 24">
        <g fill="none" fill-rule="evenodd">
            <path d="M0 0h24v24H0z"/>
            <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="m9 4.5 7.5 7.5L9 19.5"/>
        </g>
    </symbol>
    <symbol id="mono-icon-print" viewBox="0 0 512 512">
        <path d="M112 160V64c0-8.8 7.2-16 16-16H357.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c3 3 4.7 7.1 4.7 11.3V160h48V90.5c0-17-6.7-33.3-18.7-45.3L402.7 18.7C390.7 6.7 374.5 0 357.5 0H128C92.7 0 64 28.7 64 64v96h48zm16 208H384v96H128V368zm-16-48c-17.7 0-32 14.3-32 32H48V256c0-8.8 7.2-16 16-16H448c8.8 0 16 7.2 16 16v96H432c0-17.7-14.3-32-32-32H112zm320 80h48c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64V368c0 17.7 14.3 32 32 32H80v80c0 17.7 14.3 32 32 32H400c17.7 0 32-14.3 32-32V400z"/>
    </symbol>

    <symbol id="mono-icon-copylink" viewBox="0 0 640 512">
        <path d="M580.3 267.2c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6L433.1 346.6c-37.4 37.4-98.2 37.4-135.6 0c-35.7-35.7-37.6-92.9-4.4-130.9l4.7-5.4c8.7-10 7.7-25.1-2.3-33.9s-25.1-7.7-33.9 2.3l-4.7 5.4c-49.8 57-46.9 142.9 6.6 196.4c56.2 56.2 147.3 56.2 203.5 0L580.3 267.2zM59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6L207 165.4c37.4-37.4 98.1-37.4 135.6 0c35.7 35.7 37.6 92.9 4.4 130.9l-5.4 6.1c-8.7 10-7.7 25.1 2.3 33.9s25.1 7.7 33.9-2.3l5.4-6.1c49.9-57 47-142.9-6.5-196.5c-56.2-56.2-147.3-56.2-203.5 0L59.7 244.8z"/>
    </symbol>
    <symbol id="mono-icon-linkedin" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.245 7.318c-.704 0-1.273.57-1.273 1.273v4.454H4.79s.038-7.636 0-8.272h3.182v.945s.985-.919 2.507-.919c1.884 0 3.22 1.364 3.22 4.012v4.234h-3.182V8.591c0-.703-.57-1.273-1.272-1.273zM1.92 3.5h-.018C.94 3.5.318 2.748.318 1.921.318 1.075.96.386 1.94.386s1.583.712 1.603 1.557c0 .828-.622 1.557-1.622 1.557zm1.597 9.545H.336V4.773h3.181v8.272z" fill-rule="evenodd"/>
    </symbol>

    <symbol id="download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
        <g>
            <g>
                <g>
                    <path d="M0 0H24V24H0z" transform="translate(-802.000000, -1914.000000) translate(0.000000, 1756.000000) translate(802.000000, 158.000000)"/>
                    <path fill="currentColor" fill-rule="nonzero" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z" transform="translate(-802.000000, -1914.000000) translate(0.000000, 1756.000000) translate(802.000000, 158.000000)"/>
                </g>
            </g>
        </g>
    </g>
    </symbol>
    <symbol id="mono-icon-pinterest" viewBox="0 0 512 512">
        <g>
            <path d="M256,32C132.3,32,32,132.3,32,256c0,91.7,55.2,170.5,134.1,205.2c-0.6-15.6-0.1-34.4,3.9-51.4
                c4.3-18.2,28.8-122.1,28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2,19.2-58,43.2-58c20.4,0,30.2,15.3,30.2,33.6
                c0,20.5-13.1,51.1-19.8,79.5c-5.6,23.8,11.9,43.1,35.4,43.1c42.4,0,71-54.5,71-119.1c0-49.1-33.1-85.8-93.2-85.8
                c-67.9,0-110.3,50.7-110.3,107.3c0,19.5,5.8,33.3,14.8,43.9c4.1,4.9,4.7,6.9,3.2,12.5c-1.1,4.1-3.5,14-4.6,18
                c-1.5,5.7-6.1,7.7-11.2,5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6,53.7-139.9,160.1-139.9c85.5,0,141.8,61.9,141.8,128.3
                c0,87.9-48.9,153.5-120.9,153.5c-24.2,0-46.9-13.1-54.7-27.9c0,0-13,51.6-15.8,61.6c-4.7,17.3-14,34.5-22.5,48
                c20.1,5.9,41.4,9.2,63.5,9.2c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z"></path>
        </g>
    </symbol>

    <symbol id="icon-fullscreen" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 1024 1024">
       <path d="M290 236.4l43.9-43.9a8.01 8.01 0 0 0-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0 0 13.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 0 0 0 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 0 0-11.3 0l-42.4 42.3a8.03 8.03 0 0 0 0 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 0 0 4.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 0 0-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 0 0-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"/>
    </symbol>
    <symbol id="carousel-icon-fullscreen" viewBox="0 0 35 35">
        <style type="text/css">
            .st0{opacity:0.5;fill:#9B9B9B;}
            .st1{fill:none;stroke:#FFFFFF;stroke-width:1.5;stroke-linecap:round;}
        </style>
        <circle id="Ellipse_4" class="st0" cx="17.5" cy="17.5" r="17.5"/>
        <g id="Group_17" transform="translate(7.042 7.042)">
            <g id="Group_8" transform="translate(0)">
                <path id="Path_1" class="st1" d="M7.2,18.1l-4.9,0.8l0.3-3.1l0.2-2.1"/>
                <path id="Path_3" class="st1" d="M13.7,2.8l4.9-0.8l-0.3,3.1l-0.2,2.1"/>
            </g>
            <path id="Path_4" class="st1" d="M2.7,18.5l5.8-5.8"/>
            <path id="Path_5" class="st1" d="M18.1,2.5l-5.7,5.9"/>
        </g>
    </symbol>
    <symbol id="mono-icon-tumblr" viewBox="0 0 512 512">
        <g>
            <path d="M321.2,396.3c-11.8,0-22.4-2.8-31.5-8.3c-6.9-4.1-11.5-9.6-14-16.4c-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9
                c-2.7,21.5-7.5,44.7-14.5,58.6c-7,13.9-14,25.8-25.6,35.7c-11.6,9.9-25.6,17.9-41.9,23.3V224h48v140.4c0,19,2,33.5,5.9,43.5
                c4,10,11.1,19.5,21.4,28.4c10.3,8.9,22.8,15.7,37.3,20.5c14.6,4.8,31.4,7.2,50.4,7.2c16.7,0,30.3-1.7,44.7-5.1
                c14.4-3.4,30.5-9.3,48.2-17.6v-65.6C363.2,389.4,342.3,396.3,321.2,396.3z"></path>
        </g>
    </symbol>
    <symbol id="mono-icon-twitter" data-name="mono-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500.21 511.42">
        <path d="m484.21,0c-3.86,4.52-7.72,9.05-11.59,13.56-7.8,9.09-15.62,18.17-23.43,27.26-7.76,9.02-15.53,18.03-23.28,27.04-8.86,10.3-17.71,20.61-26.58,30.91-9.35,10.86-18.71,21.71-28.05,32.57-7.76,9.02-15.5,18.05-23.25,27.07-8.3,9.64-16.61,19.27-24.91,28.91-8.13,9.44-16.25,18.89-24.4,28.31-.71.82-.35,1.37.12,2.05,4.97,7.23,9.93,14.46,14.9,21.69,13.75,20,27.51,40,41.26,60,9.47,13.78,18.92,27.57,28.39,41.34,9.98,14.53,19.98,29.05,29.97,43.58,9.44,13.74,18.87,27.49,28.32,41.24,14.61,21.26,29.23,42.51,43.84,63.76,4.72,6.87,9.44,13.75,14.15,20.63.24.35.69.7.5,1.14-.24.55-.84.3-1.29.3-48.77.01-97.54,0-146.31.03-.92,0-1.52-.29-2.04-1.06-10.78-15.72-21.57-31.44-32.37-47.14-9.64-14.03-19.3-28.04-28.94-42.07-12.69-18.47-25.35-36.95-38.04-55.42-11.8-17.18-23.63-34.34-35.42-51.53-.7-1.03-1.05-.85-1.74-.05-6.07,7.09-12.18,14.15-18.26,21.23-7.33,8.52-14.66,17.05-22,25.57-10.02,11.65-20.04,23.31-30.06,34.95-9.88,11.48-19.78,22.96-29.66,34.44-9.31,10.83-18.61,21.68-27.92,32.5-9.97,11.58-19.95,23.15-29.93,34.73-3.48,4.05-6.99,8.07-10.41,12.18-1.01,1.21-2.06,1.69-3.66,1.68-13.38-.06-26.75-.04-40.13-.04-.65,0-1.3-.05-1.95-.08,0-.17,0-.35,0-.52,1.14-.89,1.96-2.08,2.89-3.16,8.76-10.16,17.48-20.35,26.23-30.51,10-11.62,20.01-23.21,30.01-34.83,11.44-13.29,22.86-26.6,34.3-39.9,11.04-12.83,22.1-25.65,33.15-38.48,11.47-13.33,22.92-26.67,34.38-40,11.01-12.8,22.03-25.59,33.08-38.37.79-.91.95-1.55.19-2.65-8.31-11.99-16.54-24.03-24.81-36.06-15.59-22.69-31.2-45.37-46.79-68.05-12.47-18.14-24.92-36.3-37.39-54.44-13.41-19.5-26.83-38.99-40.23-58.49C31.75,46.51,18.49,27.17,5.2,7.86,3.5,5.4,1.94,2.84.02.53.13.36-.23-.03.29,0c.3.02.61,0,.91,0C50.58,0,99.96,0,149.34,0c1.03,1.56,2.03,3.13,3.09,4.67,12.79,18.61,25.58,37.21,38.37,55.81,13.55,19.71,27.1,39.43,40.65,59.14,15.07,21.94,30.14,43.87,45.2,65.81,1.5,2.19,1.53,2.22,3.24.24,8.54-9.89,17.06-19.79,25.59-29.69,7.05-8.19,14.09-16.4,21.14-24.59,7.82-9.08,15.64-18.15,23.46-27.23,7.28-8.45,14.55-16.92,21.82-25.37,7.81-9.08,15.63-18.16,23.44-27.24,7.08-8.23,14.15-16.46,21.22-24.69,7.7-8.95,15.39-17.91,23.09-26.86,14.85,0,29.71,0,44.56,0ZM94.31,33.41c-10.64,0-21.28,0-31.92,0-.35,0-.69,0-1.04,0-.57,0-.7.27-.39.74.28.44.58.87.88,1.29,8.94,12.77,17.88,25.54,26.81,38.31,19.39,27.72,38.77,55.44,58.15,83.17,19.78,28.29,39.57,56.58,59.35,84.87,19.81,28.33,39.62,56.65,59.42,84.98,18.79,26.87,37.57,53.74,56.35,80.61,16.44,23.52,32.89,47.05,49.31,70.59.64.91,1.34,1.31,2.47,1.31,21.37-.03,42.73-.02,64.1-.03.42,0,.99.18,1.23-.21.31-.5-.25-.86-.5-1.22-12.34-17.65-24.69-35.29-37.04-52.95-13.04-18.65-26.06-37.31-39.09-55.96-16.85-24.09-33.71-48.17-50.56-72.26-13.71-19.61-27.41-39.23-41.12-58.83-11.74-16.8-23.51-33.58-35.25-50.38-15.48-22.13-30.96-44.27-46.43-66.4-20.13-28.79-40.26-57.58-60.36-86.39-.65-.93-1.33-1.28-2.45-1.28-10.64.04-21.28.02-31.92.02Z"/>
    </symbol>
    <symbol id="author-icon-twitter" data-name="author-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.58 17.97">
        <defs>
            <path id="kdcb42ubva" d="m.56,17.97c.14-.16.27-.32.41-.48.27-.32.55-.64.82-.96.27-.32.55-.63.82-.95.31-.36.62-.72.93-1.09.33-.38.66-.76.99-1.14.27-.32.54-.63.82-.95.29-.34.58-.68.88-1.02.29-.33.57-.66.86-.99.03-.03.01-.05,0-.07-.17-.25-.35-.51-.52-.76-.48-.7-.97-1.41-1.45-2.11-.33-.48-.66-.97-1-1.45-.35-.51-.7-1.02-1.05-1.53-.33-.48-.66-.97-1-1.45-.51-.75-1.03-1.49-1.54-2.24C.35.54.18.29.02.05.01.04,0,.03,0,.01,0,0,.03,0,.05,0c1.71,0,3.43,0,5.14,0,.03,0,.05.01.07.04.38.55.76,1.1,1.14,1.66.34.49.68.99,1.02,1.48.45.65.89,1.3,1.34,1.95.41.6.83,1.21,1.24,1.81.02.04.04.03.06,0,.21-.25.43-.5.64-.75.26-.3.52-.6.77-.9.35-.41.7-.82,1.06-1.23.35-.4.7-.81,1.04-1.21.33-.38.65-.76.98-1.14.35-.41.7-.81,1.05-1.22.12-.14.25-.28.37-.43.04-.04.07-.06.13-.06.47,0,.94,0,1.41,0,.02,0,.05,0,.07,0,0,0,0,.01,0,.02-.04.03-.07.07-.1.11-.31.36-.61.71-.92,1.07-.35.41-.7.82-1.05,1.22-.4.47-.8.93-1.21,1.4-.39.45-.78.9-1.16,1.35-.4.47-.81.94-1.21,1.41-.39.45-.77.9-1.16,1.35-.03.03-.03.05,0,.09.29.42.58.84.87,1.27.55.8,1.1,1.59,1.64,2.39.44.64.88,1.28,1.31,1.91.47.69.94,1.37,1.41,2.06.47.68.93,1.36,1.4,2.04.06.09.11.18.18.26,0,0,0,.02,0,.02-.01,0-.02,0-.03,0-1.74,0-3.47,0-5.21,0-.04-.05-.07-.11-.11-.16-.45-.65-.9-1.31-1.35-1.96-.48-.69-.95-1.39-1.43-2.08-.53-.77-1.06-1.54-1.59-2.31-.05-.08-.05-.08-.11,0-.3.35-.6.7-.9,1.04-.25.29-.49.58-.74.86-.27.32-.55.64-.82.96-.26.3-.51.59-.77.89-.27.32-.55.64-.82.96-.25.29-.5.58-.75.87-.27.31-.54.63-.81.94-.52,0-1.04,0-1.57,0Zm13.7-1.17c.37,0,.75,0,1.12,0,.01,0,.02,0,.04,0,.02,0,.02,0,.01-.03-.01-.02-.02-.03-.03-.05-.31-.45-.63-.9-.94-1.35-.68-.97-1.36-1.95-2.04-2.92-.7-.99-1.39-1.99-2.09-2.98-.7-1-1.39-1.99-2.09-2.99-.66-.94-1.32-1.89-1.98-2.83-.58-.83-1.16-1.65-1.73-2.48-.02-.03-.05-.05-.09-.05-.75,0-1.5,0-2.25,0-.01,0-.03,0-.04,0-.01.02,0,.03.02.04.43.62.87,1.24,1.3,1.86.46.66.92,1.31,1.37,1.97.59.85,1.18,1.69,1.78,2.54.48.69.96,1.38,1.44,2.07.41.59.83,1.18,1.24,1.77.54.78,1.09,1.56,1.63,2.33.71,1.01,1.41,2.02,2.12,3.04.02.03.05.05.09.04.37,0,.75,0,1.12,0Z"/>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <use fill="currentColor" xlink:href="#kdcb42ubva"/>
        </g>
    </symbol>
    <symbol id="mono-icon-youtube" viewBox="0 0 512 512">
        <g>
            <path fill-rule="evenodd" d="M508.6,148.8c0-45-33.1-81.2-74-81.2C379.2,65,322.7,64,265,64c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,1-169.6,3.6
                c-40.8,0-73.9,36.4-73.9,81.4C1,184.6-0.1,220.2,0,255.8C-0.1,291.4,1,327,3.4,362.7c0,45,33.1,81.5,73.9,81.5
                c58.2,2.7,117.9,3.9,178.6,3.8c60.8,0.2,120.3-1,178.6-3.8c40.9,0,74-36.5,74-81.5c2.4-35.7,3.5-71.3,3.4-107
                C512.1,220.1,511,184.5,508.6,148.8z M207,353.9V157.4l145,98.2L207,353.9z"></path>
        </g>
    </symbol>
    <symbol id="mono-icon-tiktok" viewBox="0 0 512 512">
        <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
    </symbol>
    <symbol id="icon-magnify" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill-rule="evenodd">
            <path d="M0 0h32v32H0z"/>
            <g transform="translate(6 6)" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                <circle cx="8.75" cy="8.75" r="8.75"/>
                <path d="M14.937 14.937 20 20"/>
            </g>
        </g>
    </symbol>
    <symbol id="burger-menu" viewBox="0 0 14 10">
        <g>
            <path fill-rule="evenodd" d="M0 5.5v-1h14v1H0zM0 1V0h14v1H0zm0 9V9h14v1H0z"></path>
        </g>
    </symbol>
    <symbol id="close-x" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" fill-rule="nonzero">
            <path d="M5.96 26.04a.887.887 0 0 1 0-1.256L24.785 5.961a.887.887 0 0 1 1.255 1.255L7.216 26.039a.887.887 0 0 1-1.255 0z"/>
            <path d="m7.216 5.96 18.823 18.824a.887.887 0 0 1-1.255 1.255L5.961 7.216A.887.887 0 0 1 7.216 5.96z"/>
        </g>
    </symbol>
    <symbol id="download-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd">
        <g>
            <g>
                <g>
                    <path d="M0 0H24V24H0z" transform="translate(-802.000000, -1914.000000) translate(0.000000, 1756.000000) translate(802.000000, 158.000000)"/>
                    <path fill="#000" fill-rule="nonzero" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z" transform="translate(-802.000000, -1914.000000) translate(0.000000, 1756.000000) translate(802.000000, 158.000000)"/>
                </g>
            </g>
        </g>
    </g>
    </symbol>

    <symbol id="share" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 17">
        <g fill="none" fill-rule="evenodd">
            <path d="M0 .038h16v16H0z"/>
            <path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M5.375 3.662 8 1.038l2.625 2.624M8.019 8.038V1.04M11 6.038h1.5a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-6.5a.5.5 0 0 1 .5-.5H5"/>
        </g>
    </symbol>

    <symbol id="share-more-arrow" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
        <g>
            <g>
                <path d="M512,241.7L273.643,3.343v156.152c-71.41,3.744-138.015,33.337-188.958,84.28C30.075,298.384,0,370.991,0,448.222v60.436
                    l29.069-52.985c45.354-82.671,132.173-134.027,226.573-134.027c5.986,0,12.004,0.212,18.001,0.632v157.779L512,241.7z
                    M255.642,290.666c-84.543,0-163.661,36.792-217.939,98.885c26.634-114.177,129.256-199.483,251.429-199.483h15.489V78.131
                    l163.568,163.568L304.621,405.267V294.531l-13.585-1.683C279.347,291.401,267.439,290.666,255.642,290.666z"></path>
            </g>
        </g>
    </symbol>
    <symbol id="chevron" viewBox="0 0 100 100">
        <g>
            <path d="M22.4566257,37.2056786 L-21.4456527,71.9511488 C-22.9248661,72.9681457 -24.9073712,72.5311671 -25.8758148,70.9765924 L-26.9788683,69.2027424 C-27.9450684,67.6481676 -27.5292733,65.5646602 -26.0500598,64.5484493 L20.154796,28.2208967 C21.5532435,27.2597011 23.3600078,27.2597011 24.759951,28.2208967 L71.0500598,64.4659264 C72.5292733,65.4829232 72.9450684,67.5672166 71.9788683,69.1217913 L70.8750669,70.8956413 C69.9073712,72.4502161 67.9241183,72.8848368 66.4449048,71.8694118 L22.4566257,37.2056786 Z" id="Transparent-Chevron" transform="translate(22.500000, 50.000000) rotate(90.000000) translate(-22.500000, -50.000000) "></path>
        </g>
    </symbol>
    <symbol id="chevron-down" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.108 4.088L.965.158a.587.587 0 0 0-.8 0 .518.518 0 0 0 0 .758L5.13 5.625 9.845.905a.517.517 0 0 0-.021-.758.588.588 0 0 0-.8.02l-3.916 3.92z" fill-rule="evenodd"/>
    </symbol>
    <symbol id="chevron-up" viewBox="0 0 284.929 284.929" xmlns="http://www.w3.org/2000/svg">
        <path d="M282.082 195.285L149.028 62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665.953-6.567 2.856L2.856 195.285C.95 197.191 0 199.378 0 201.853c0 2.474.953 4.664 2.856 6.566l14.272 14.271c1.903 1.903 4.093 2.854 6.567 2.854s4.664-.951 6.567-2.854l112.204-112.202 112.208 112.209c1.902 1.903 4.093 2.848 6.563 2.848 2.478 0 4.668-.951 6.57-2.848l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.566.001-2.476-.944-4.666-2.846-6.569z"/>
    </symbol>
    <symbol id="icon-arrow-down" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.108 4.088L.965.158a.587.587 0 0 0-.8 0 .518.518 0 0 0 0 .758L5.13 5.625 9.845.905a.517.517 0 0 0-.021-.758.588.588 0 0 0-.8.02l-3.916 3.92z" fill="inherit" fill-rule="evenodd"/>
    </symbol>
    <symbol id="icon-arrow-right" viewBox="0 0 15 11">
        <path d="m9.91.876.088.067 4.5 4 .014.013.044.045-.058-.058a.757.757 0 0 1 .192.266c.039.09.06.19.06.295l-.006.095a.748.748 0 0 1-.169.386l-.019.022a.755.755 0 0 1-.044.045l-.014.012-4.5 4a.75.75 0 0 1-1.074-1.04l.078-.08 3.023-2.69H1A.75.75 0 0 1 .898 4.76L1 4.754h11.026l-3.024-2.69a.75.75 0 0 1-.13-.97l.067-.088a.75.75 0 0 1 .971-.13z" fill-rule="nonzero"/>
    </symbol>
    <symbol id="solid-arrow-down" viewBox="0 0 10 8">
        <g fill-rule="nonzero">
            <path d="M9.92385502,0.822695985 C9.76895807,0.324557277 9.40428207,-0.000135658805 8.99985136,-4.24929687e-08 L0.999819637,-4.24929687e-08 C0.595422136,0.000115177302 0.230882538,0.324981607 0.0761379965,0.823156591 C-0.078606545,1.32133157 0.00690778453,1.8947418 0.292816834,2.27608104 L4.2928327,7.60960417 C4.6833341,8.13013194 5.3163369,8.13013194 5.7068383,7.60960417 L9.70685416,2.27608104 C9.99302057,1.89475341 10.0786736,1.32108388 9.92385502,0.822695985 Z" id="Path"></path>
        </g>
    </symbol>
    <symbol id="play-arrow" viewBox="0 0 30 30">
        <g fill-rule="evenodd">
            <path d="M9 9l12 6-12 6z"></path>
        </g>
    </symbol>
    <symbol id="play-icon" viewBox="0 0 50 50"  xmlns="http://www.w3.org/2000/svg" >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-341.000000, -11574.000000)" fill-rule="nonzero">
                <g transform="translate(320.000000, 11422.000000)">
                    <g transform="translate(21.000000, 152.000000)">
                        <circle id="Oval" fill="#FFFFFF" cx="25" cy="25" r="24"/>
                        <path d="M25,0 C11.2,0 0,11.2 0,25 C0,38.8 11.2,50 25,50 C38.8,50 50,38.8 50,25 C50,11.2 38.8,0 25,0 Z" fill="#EE0120"/>
                        <polygon fill="#FFFFFF" points="18 36.25 18 13.75 33 25"/>
                    </g>
                </g>
            </g>
        </g>
    </symbol>

    <symbol id="play-pause" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg" >
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Radio/elements/pause-small" transform="translate(-52.000000, 0.000000)">
                <g id="Group-51" transform="translate(18.000000, 0.000000)">
                    <g id="button/play/small-red" transform="translate(34.000000, 0.000000)">
                        <circle id="Oval2" fill="#FF322E" cx="20" cy="20" r="20"></circle>
                        <g id="Group" transform="translate(13.750000, 12.500000)" fill="#FFFFFF">
                            <rect id="Rectangle1" x="8.75" y="0" width="3.75" height="15" rx="1"></rect>
                            <rect id="Rectangle2" x="0" y="0" width="3.75" height="15" rx="1"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </symbol>

    <symbol id="audio-play-icon" viewBox="0 0 30 30">
        <g fill="none" fill-rule="evenodd">
            <rect fill="currentColor" width="30" height="30" rx="15" />
            <path
                d="m10.09 9.427 10.262 5.13a.494.494 0 0 1 0 .885l-10.262 5.13a.494.494 0 0 1-.715-.441V9.869a.494.494 0 0 1 .715-.442z"
                fill="#FFF" />
        </g>
    </symbol>
    <symbol id="audio-pause-icon" viewBox="0 0 30 30">
        <g fill="none" fill-rule="evenodd">
            <rect fill="currentColor" width="30" height="30" rx="15" />
            <g transform="translate(10.313 9.375)" fill="#FFF">
                <rect x="6.563" width="2.813" height="11.25" rx="1" />
                <rect width="2.813" height="11.25" rx="1" />
            </g>
        </g>
    </symbol>
    <symbol id="player-play" viewBox="0 0 40 40">
        <path fill="currentColor" d="M17.6 27.8l9.34-7c.54-.4.54-1.2 0-1.6l-9.34-7c-.66-.5-1.6-.02-1.6.8v14c0 .82.94 1.3 1.6.8zM20 0C8.96 0 0 8.96 0 20s8.96 20 20 20 20-8.96 20-20S31.04 0 20 0zm0 38c-9.922 0-18-8.078-18-18S10.078 2 20 2s18 8.078 18 18-8.078 18-18 18z"/>
    </symbol>
    <symbol id="player-pause" viewBox="0 0 40 40">
        <path fill="currentColor" d="M20 0C8.96 0 0 8.96 0 20s8.96 20 20 20 20-8.96 20-20S31.04 0 20 0zm0 38c-9.922 0-18-8.078-18-18S10.078 2 20 2s18 8.078 18 18-8.078 18-18 18zm-4-26c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1s-1-.448-1-1V13c0-.552.448-1 1-1zm8 0c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1s-1-.448-1-1V13c0-.552.448-1 1-1z"/>
    </symbol>
    <symbol id="grid" viewBox="0 0 32 32">
        <g>
            <path d="M6.4,5.7 C6.4,6.166669 6.166669,6.4 5.7,6.4 L0.7,6.4 C0.233331,6.4 0,6.166669 0,5.7 L0,0.7 C0,0.233331 0.233331,0 0.7,0 L5.7,0 C6.166669,0 6.4,0.233331 6.4,0.7 L6.4,5.7 Z M19.2,5.7 C19.2,6.166669 18.966669,6.4 18.5,6.4 L13.5,6.4 C13.033331,6.4 12.8,6.166669 12.8,5.7 L12.8,0.7 C12.8,0.233331 13.033331,0 13.5,0 L18.5,0 C18.966669,0 19.2,0.233331 19.2,0.7 L19.2,5.7 Z M32,5.7 C32,6.166669 31.766669,6.4 31.3,6.4 L26.3,6.4 C25.833331,6.4 25.6,6.166669 25.6,5.7 L25.6,0.7 C25.6,0.233331 25.833331,0 26.3,0 L31.3,0 C31.766669,0 32,0.233331 32,0.7 L32,5.7 Z M6.4,18.5 C6.4,18.966669 6.166669,19.2 5.7,19.2 L0.7,19.2 C0.233331,19.2 0,18.966669 0,18.5 L0,13.5 C0,13.033331 0.233331,12.8 0.7,12.8 L5.7,12.8 C6.166669,12.8 6.4,13.033331 6.4,13.5 L6.4,18.5 Z M19.2,18.5 C19.2,18.966669 18.966669,19.2 18.5,19.2 L13.5,19.2 C13.033331,19.2 12.8,18.966669 12.8,18.5 L12.8,13.5 C12.8,13.033331 13.033331,12.8 13.5,12.8 L18.5,12.8 C18.966669,12.8 19.2,13.033331 19.2,13.5 L19.2,18.5 Z M32,18.5 C32,18.966669 31.766669,19.2 31.3,19.2 L26.3,19.2 C25.833331,19.2 25.6,18.966669 25.6,18.5 L25.6,13.5 C25.6,13.033331 25.833331,12.8 26.3,12.8 L31.3,12.8 C31.766669,12.8 32,13.033331 32,13.5 L32,18.5 Z M6.4,31.3 C6.4,31.766669 6.166669,32 5.7,32 L0.7,32 C0.233331,32 0,31.766669 0,31.3 L0,26.3 C0,25.833331 0.233331,25.6 0.7,25.6 L5.7,25.6 C6.166669,25.6 6.4,25.833331 6.4,26.3 L6.4,31.3 Z M19.2,31.3 C19.2,31.766669 18.966669,32 18.5,32 L13.5,32 C13.033331,32 12.8,31.766669 12.8,31.3 L12.8,26.3 C12.8,25.833331 13.033331,25.6 13.5,25.6 L18.5,25.6 C18.966669,25.6 19.2,25.833331 19.2,26.3 L19.2,31.3 Z M32,31.3 C32,31.766669 31.766669,32 31.3,32 L26.3,32 C25.833331,32 25.6,31.766669 25.6,31.3 L25.6,26.3 C25.6,25.833331 25.833331,25.6 26.3,25.6 L31.3,25.6 C31.766669,25.6 32,25.833331 32,26.3 L32,31.3 Z" id=""></path>
        </g>
    </symbol>
    <symbol id="filter" viewBox="0 0 16 12">
        <path d="M0 2V0h16v2H0zm2.4 5V5h11.2v2H2.4zm2.4 5v-2h6.4v2H4.8z"></path>
    </symbol>
    <symbol id="icon-filter" viewBox="0 0 512 512">
        <path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path>
    </symbol>
    <symbol id="icon-radio-on" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="nonzero" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    </symbol>
    <symbol id="icon-radio-off" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="nonzero" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    </symbol>
    <symbol id="icon-pause" viewBox="0 0 13 16">
        <rect width="4.636" height="16" rx="2.318"/>
        <rect width="4.636" height="16" x="7.727" rx="2.318"/>
    </symbol>
    <symbol id="icon-plus" viewBox="0 0 14 14" height="14px" width="14px">
        <path d="M13, 6H8V1A1, 1, 0, 0, 0, 6, 1V6H1A1, 1, 0, 0, 0, 1, 8H6v5a1, 1, 0, 0, 0, 2, 0V8h5a1, 1, 0, 0, 0, 0-2Z"/>
    </symbol>
    <symbol id="icon-minus" viewBox="0 0 14 14" height="14px" width="14px">
        <path d="M13, 8H1A1, 1, 0, 0, 1, 1, 6H13a1, 1, 0, 0, 1, 0, 2Z"/>
    </symbol>
    <symbol id="amazon-alexa" fill="none" viewBox="0 0 14 14">
        <path clip-rule="evenodd" d="m52.4998 105c-28.9946 0-52.4998-23.5055-52.4998-52.5003 0-26.6214 19.8151-48.61142 45.5003-52.03433v10.57883c0 2.9832-1.8814 5.6636-4.7091 6.6127-14.8197 4.9787-25.4216 19.1433-25.0311 35.7287.4754 20.1911 16.923 36.0663 37.1187 35.8628 20.122-.2035 36.3714-16.5785 36.3714-36.7487 0-.4597-.0113-.9172-.0283-1.3721-.004-.102-.0072-.2048-.0113-.307-.0194-.4228-.0452-.8446-.0784-1.2639-.0097-.1335-.0234-.2666-.0355-.3998-.0259-.2928-.0558-.5837-.0889-.8739-.0372-.3297-.08-.6576-.1261-.9838-.0202-.1492-.0404-.2988-.063-.4467-4.4995-29.6389-43.1025-46.296896-43.3144-46.388077 2.2893-.304462 4.6239-.464423 6.9955-.464423 28.9951 0 52.5002 23.5048 52.5002 52.4997 0 28.9948-23.5051 52.5003-52.5002 52.5003z" fill="#5fcaf4" fill-rule="evenodd" transform="matrix(.133333 0 0 -.133333 0 14)"/>
    </symbol>
    <symbol id="apple" viewBox="0 0 511.86 511.86">
        <rect fill="#822cbe" width="511.86" height="511.86" rx="113.87"/>
        <path fill="#ffffff" d="M240.44,448.26c-15.27-5.46-18.54-12.88-24.81-56.38-7.28-50.55-8.87-81.84-4.65-91.75,5.59-13.14,20.78-20.6,42-20.68,21.07-.09,36.39,7.44,42,20.68,4.24,9.89,2.65,41.2-4.64,91.75-4.95,35.32-7.67,44.25-14.5,50.25-9.38,8.31-22.69,10.61-35.32,6.14Zm-65.22-51.87c-52.73-25.94-86.51-69.82-98.79-128.2-3.07-15.07-3.59-51-.69-64.84,7.68-37.11,22.36-66.13,46.75-91.79,35.15-37.06,80.37-56.65,130.7-56.65,49.82,0,94.86,19.23,129.16,55.18,26.1,27.13,40.77,55.84,48.28,93.67,2.56,12.59,2.56,46.92.17,61.08a181.4,181.4,0,0,1-69.1,113c-13,9.79-44.7,26.89-49.82,26.89-1.88,0-2.05-1.94-1.19-9.81,1.53-12.63,3.07-15.25,10.23-18.26,11.44-4.77,30.89-18.63,42.83-30.61a163,163,0,0,0,42.82-75.41c4.44-17.57,3.93-56.64-1-74.73C390,138.36,343.1,93.66,285.61,81.72c-16.73-3.42-47.1-3.42-64,0-58.18,11.94-106.29,58.86-121,117.89-3.92,16-3.92,55.11,0,71.15,9.73,39.07,35,74.9,68.08,96.23a147.45,147.45,0,0,0,17.58,10.07c7.16,3.07,8.7,5.63,10.06,18.25.85,7.68.68,9.9-1.19,9.9-1.2,0-9.9-3.75-19.11-8.19ZM175.9,327c-17.75-14.16-33.44-39.28-39.93-63.91-3.92-14.88-3.92-43.17.17-58,10.75-40.06,40.27-71.12,81.22-85.71,14-4.94,45-6,62.27-2.25C339,130.33,381.15,189.79,373,248.77c-3.24,23.77-11.43,43.29-25.93,61.42-7.17,9.16-24.57,24.54-27.64,24.54-.51,0-1-5.8-1-12.87V309l8.88-10.58c33.44-40.06,31.05-96-5.46-132.74-14.16-14.29-30.54-22.69-51.7-26.56-13.65-2.53-16.55-2.53-30.88-.17-21.76,3.55-38.61,12-53.58,26.78C148.94,202,146.55,258.29,180,298.38L188.8,309v13c0,7.17-.57,13-1.27,13s-5.63-3.41-10.92-7.68Zm59.2-69.66c-15.18-7.07-23.37-20.39-23.54-37.76,0-15.61,8.7-29.23,23.71-37.2,9.56-5,26.45-5,36,0a46.34,46.34,0,0,1,22.18,26.85c9.9,33.65-25.76,63.13-58,48.07Z" transform="translate(-0.14 -0.14)"/><circle fill="#ffffff" cx="255.74" cy="221.24" r="42.55"/><path fill="#ffffff" d="M260,280.42a83.61,83.61,0,0,1,14.25,2.9,51.55,51.55,0,0,1,14.26,7.13c3.76,2.73,6.49,5.56,8.19,9s2.56,7.54,3.07,14.25c.34,6.72.34,16-1.19,33.44s-4.61,42.79-7,59.08-4.09,23.55-6.31,28.84a25.82,25.82,0,0,1-18.94,16.55,41,41,0,0,1-9.89.85,42.41,42.41,0,0,1-9.9-.85c-3.92-.86-9-2.39-12.8-5.46-3.92-3.07-6.48-7.51-8.53-13.31s-3.58-12.8-5.63-26.79-4.78-34.8-6.48-50.67-2.39-26.79-2.53-34.13.17-11,1-14.5a28.93,28.93,0,0,1,4.09-9.38,31.14,31.14,0,0,1,6.83-7,27.87,27.87,0,0,1,8-4.3A60.8,60.8,0,0,1,241.35,283c4.43-.85,9.55-1.7,12.18-2.05a13.34,13.34,0,0,1,5.56,0Z" transform="translate(-0.14 -0.14)"/>
    </symbol>
    <symbol id="google" fill="none" viewBox="0 0 14 14">
        <path d="m0 0v2.12148.84795 2.12148h1.75v-2.12148-.84795-2.12148z" fill="#fab908" transform="translate(6.125 4.45453)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#0066d9" transform="translate(0 5.64764)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#0066d9" transform="translate(0 6.60236)"/>
        <path d="m1.75 0h-1.75v.954546h1.75z" fill="#0066d9" transform="translate(0 6.52264)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#4285f4" transform="translate(12.25 6.60236)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#4285f4" transform="translate(12.25 5.64764)"/>
        <path d="m1.75 0h-1.75v.954546h1.75z" fill="#4285f4" transform="matrix(-1 0 0 -1 14 7.47736)"/><path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#ea4335" transform="translate(3.02274 8.51141)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#ea4335" transform="translate(3.02274 9.46594)"/>
        <path d="m1.75 0h-1.75v.954546h1.75z" fill="#ea4335" transform="translate(3.02274 9.38641)"/><path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#ea4335" transform="translate(3.02274 2.78406)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#ea4335" transform="translate(3.02274 5.88641)"/>
        <path d="m1.75 0h-1.75v3.12216h1.75z" fill="#ea4335" transform="translate(3.02274 3.65906)"/><path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#34a853" transform="translate(9.22726 3.73859)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#34a853" transform="translate(9.22726 2.78406)"/>
        <path d="m1.75 0h-1.75v.954546h1.75z" fill="#34a853" transform="matrix(-1 0 0 -1 10.9773 4.61359)"/><g fill="#fab908">
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" transform="translate(6.125 .954529)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" transform="translate(6.125)"/>
        <path d="m1.75 0h-1.75v.954546h1.75z" transform="matrix(-1 0 0 -1 7.875 1.82953)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" transform="translate(6.125 12.25)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" transform="translate(6.125 11.2955)"/>
        <path d="m1.75 0h-1.75v.954546h1.75z" transform="matrix(-1 0 0 -1 7.875 13.125)"/></g><path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#34a853" transform="translate(9.22726 9.46594)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#34a853" transform="translate(9.22726 6.36359)"/>
        <path d="m1.75 0h-1.75v3.10227h1.75z" fill="#34a853" transform="matrix(-1 0 0 -1 10.9773 10.3409)"/><path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#fab908" transform="translate(6.125 3.57953)"/>
        <path d="m.875 1.75c.48325 0 .875-.39175.875-.875 0-.483249-.39175-.875-.875-.875-.483249 0-.875.391751-.875.875 0 .48325.391751.875.875.875z" fill="#fab908" transform="translate(6.125 8.67047)"/>
    </symbol>
    <symbol id="npr-one" viewBox="0 0 15 16">
        <g clip-rule="evenodd" fill-rule="evenodd">
            <path d="m-.00000001 3.99903 3.11681001 1.9192c.6747-1.24356 1.93544-2.08032 3.37935-2.08032v-3.83791c-2.77571 0-5.1993 1.60843-6.49616001 3.99903z" fill="#d61900" transform="translate(1.00378)"/>
            <path d="m3.78823 5.28599c-.12325-.40495-.18984-.83705-.18984-1.28579 0-.75804.19011-1.4688.52217-2.081-1.53085-.942623-2.25153-1.386398-3.11681-1.91919993-.638301 1.17671993-1.00375 2.54287993-1.00375 4.00019993 0 1.45723.365449 2.82349 1.00375 4.0002l1.97257-1.21466z" fill="#f30" transform="translate(0 4.00128)"/>
            <path d="m-.00000001 1.21467c1.29686001 2.3906 3.72045001 3.99903 6.49616001 3.99903v-3.83801c-1.15017 0-2.18402-.530854-2.89814-1.37539816h-1.62563l.00018-.00029136z" fill="#83aeed" transform="translate(1.00378 10.7867)"/>
            <path d="m6.49625 1.9192-3.1168-1.91919949c-.67471 1.24355949-1.93535 2.08022949-3.37944981 2.08022949v3.838c2.77589981 0 5.19938981-1.60843 6.49624981-3.99903z" fill="#3266cc" transform="translate(7.50012 10.0768)"/>
            <path d="m.522174 4.0002c0 .75815-.190114 1.46881-.52217447 2.08101l3.11681047 1.91919c.63839-1.17671 1.00375-2.54297 1.00375-4.0002 0-1.45732-.36536-2.82348-1.00375-4.00019993-.86528.53280193-1.58596.97657693-3.11681047 1.91919993.33206047.6122.52217447 1.32296.52217447 2.081z" fill="#3a3a3a" transform="translate(10.8795 4.00128)"/>
            <path d="m.00000019 3.83791c1.44409981 0 2.70473981.83676 3.37944981 2.08032l3.1168-1.9192c-1.29686-2.3906-3.72044-3.99903-6.49624981-3.99903z" fill="#191919" transform="translate(7.50012)"/>
        </g>
    </symbol>
    <symbol id="overcast" viewBox="0 0 365 365" fill="none">
        <g xmlns="http://www.w3.org/2000/svg" id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(96.099854%,49.398804%,12.5%);fill-opacity:1;" d="M 90.179688 274.820313 C 66.550781 251.195313 51.9375 218.554688 51.9375 182.5 C 51.9375 146.445313 66.550781 113.804688 90.179688 90.179688 L 101.789063 101.789063 C 81.136719 122.445313 68.359375 150.980469 68.359375 182.5 C 68.359375 214.019531 81.136719 242.554688 101.789063 263.210938 Z M 125.890625 239.109375 C 111.402344 224.621094 102.441406 204.609375 102.441406 182.5 C 102.441406 160.390625 111.402344 140.378906 125.890625 125.890625 L 137.503906 137.503906 C 125.988281 149.019531 118.863281 164.925781 118.863281 182.5 C 118.863281 200.074219 125.988281 215.980469 137.503906 227.496094 Z M 227.496094 227.496094 C 239.011719 215.980469 246.136719 200.074219 246.136719 182.5 C 246.136719 164.925781 239.011719 149.019531 227.496094 137.503906 L 239.109375 125.890625 C 253.597656 140.378906 262.558594 160.390625 262.558594 182.5 C 262.558594 204.609375 253.597656 224.621094 239.109375 239.109375 Z M 274.820313 274.820313 L 263.210938 263.210938 C 283.863281 242.554688 296.640625 214.019531 296.640625 182.5 C 296.640625 150.980469 283.863281 122.445313 263.210938 101.789063 L 274.820313 90.179688 C 298.449219 113.804688 313.0625 146.445313 313.0625 182.5 C 313.0625 218.554688 298.449219 251.195313 274.820313 274.820313 Z M 182.5 16.640625 C 90.898438 16.640625 16.640625 90.898438 16.640625 182.5 C 16.640625 255.765625 64.148438 317.933594 130.039063 339.886719 L 172.632813 212.101563 C 160.238281 207.972656 151.296875 196.28125 151.296875 182.5 C 151.296875 165.265625 165.265625 151.296875 182.5 151.296875 C 199.734375 151.296875 213.703125 165.265625 213.703125 182.5 C 213.703125 196.28125 204.761719 207.972656 192.367188 212.101563 L 234.960938 339.886719 C 300.851563 317.933594 348.359375 255.765625 348.359375 182.5 C 348.359375 90.898438 274.101563 16.640625 182.5 16.640625 Z M 202.902344 347.109375 C 195.519531 341.375 188.371094 335.058594 181.539063 328.164063 C 174.933594 334.996094 168.046875 341.269531 160.945313 346.96875 C 168 347.882813 175.195313 348.359375 182.5 348.359375 C 189.40625 348.359375 196.214844 347.933594 202.902344 347.109375 Z M 191.792969 316.824219 C 200.890625 327.066406 210.65625 336.113281 220.847656 343.898438 C 221.527344 343.734375 222.203125 343.570313 222.878906 343.402344 L 205.261719 299.355469 C 200.972656 305.472656 196.472656 311.300781 191.792969 316.824219 Z M 182.257813 305.34375 C 187.945313 298.007813 193.300781 290.164063 198.257813 281.84375 L 182.5 242.453125 L 166.550781 282.324219 C 171.425781 290.464844 176.679688 298.148438 182.257813 305.34375 Z M 143.78125 343.804688 C 153.617188 336.28125 163.054688 327.59375 171.875 317.78125 C 167.367188 312.621094 163.03125 307.179688 158.894531 301.46875 L 142.121094 343.402344 C 142.671875 343.539063 143.226563 343.671875 143.78125 343.804688 Z M 182.5 364.796875 C 81.820313 364.796875 0.207031 283.179688 0.207031 182.5 C 0.207031 81.820313 81.820313 0.203125 182.5 0.203125 C 283.179688 0.203125 364.796875 81.820313 364.796875 182.5 C 364.796875 283.179688 283.179688 364.796875 182.5 364.796875 "/>
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 90.179688 274.820313 L 90.324219 274.675781 C 66.734375 251.085938 52.140625 218.496094 52.140625 182.5 C 52.140625 146.503906 66.730469 113.914063 90.324219 90.324219 L 90.179688 90.179688 L 90.03125 90.324219 L 101.644531 101.9375 L 101.789063 101.789063 L 101.644531 101.644531 C 80.953125 122.339844 68.15625 150.925781 68.15625 182.5 C 68.15625 214.074219 80.953125 242.660156 101.644531 263.355469 L 101.789063 263.210938 L 101.644531 263.0625 L 90.03125 274.675781 L 90.179688 274.820313 L 90.324219 274.675781 L 90.179688 274.820313 L 90.324219 274.96875 L 102.082031 263.210938 L 101.9375 263.0625 C 81.316406 242.445313 68.566406 213.964844 68.566406 182.5 C 68.566406 151.035156 81.316406 122.554688 101.9375 101.9375 L 102.082031 101.789063 L 90.179688 89.886719 L 90.03125 90.03125 C 66.367188 113.695313 51.730469 146.390625 51.730469 182.5 C 51.730469 218.609375 66.367188 251.304688 90.03125 274.96875 L 90.179688 275.113281 L 90.324219 274.96875 Z M 125.890625 239.109375 L 126.035156 238.964844 C 111.582031 224.515625 102.644531 204.550781 102.644531 182.5 C 102.644531 160.449219 111.582031 140.484375 126.035156 126.035156 L 125.890625 125.890625 L 125.742188 126.035156 L 137.355469 137.648438 L 137.503906 137.503906 L 137.355469 137.355469 C 125.804688 148.910156 118.660156 164.871094 118.660156 182.5 C 118.660156 200.128906 125.804688 216.089844 137.355469 227.644531 L 137.503906 227.496094 L 137.355469 227.351563 L 125.742188 238.964844 L 125.890625 239.109375 L 126.035156 238.964844 L 125.890625 239.109375 L 126.035156 239.257813 L 137.792969 227.496094 L 137.648438 227.351563 C 126.167969 215.871094 119.070313 200.015625 119.070313 182.5 C 119.070313 164.984375 126.167969 149.128906 137.648438 137.648438 L 137.792969 137.503906 L 125.890625 125.597656 L 125.742188 125.742188 C 111.21875 140.269531 102.234375 160.335938 102.234375 182.5 C 102.234375 204.664063 111.21875 224.730469 125.742188 239.257813 L 125.890625 239.402344 L 126.035156 239.257813 Z M 227.496094 227.496094 L 227.644531 227.644531 C 239.195313 216.089844 246.339844 200.128906 246.339844 182.5 C 246.339844 164.871094 239.195313 148.910156 227.644531 137.355469 L 227.496094 137.503906 L 227.644531 137.648438 L 239.257813 126.035156 L 239.109375 125.890625 L 238.964844 126.035156 C 253.417969 140.484375 262.355469 160.449219 262.355469 182.5 C 262.355469 204.550781 253.417969 224.515625 238.964844 238.964844 L 239.109375 239.109375 L 239.257813 238.964844 L 227.644531 227.351563 L 227.496094 227.496094 L 227.644531 227.644531 L 227.496094 227.496094 L 227.351563 227.644531 L 239.109375 239.402344 L 239.257813 239.257813 C 253.78125 224.730469 262.765625 204.664063 262.765625 182.5 C 262.765625 160.335938 253.78125 140.269531 239.257813 125.742188 L 239.109375 125.597656 L 227.207031 137.503906 L 227.351563 137.648438 C 238.832031 149.128906 245.929688 164.984375 245.929688 182.5 C 245.929688 200.015625 238.832031 215.871094 227.351563 227.351563 L 227.207031 227.496094 L 227.351563 227.644531 Z M 274.820313 274.820313 L 274.96875 274.675781 L 263.355469 263.0625 L 263.210938 263.210938 L 263.355469 263.355469 C 284.046875 242.660156 296.84375 214.074219 296.84375 182.5 C 296.84375 150.925781 284.046875 122.339844 263.355469 101.644531 L 263.210938 101.789063 L 263.355469 101.9375 L 274.96875 90.324219 L 274.820313 90.179688 L 274.675781 90.324219 C 298.265625 113.914063 312.855469 146.503906 312.855469 182.5 C 312.855469 218.496094 298.265625 251.085938 274.675781 274.675781 L 274.820313 274.820313 L 274.96875 274.675781 L 274.820313 274.820313 L 274.96875 274.96875 C 298.632813 251.304688 313.269531 218.609375 313.269531 182.5 C 313.269531 146.390625 298.632813 113.695313 274.96875 90.03125 L 274.820313 89.886719 L 262.917969 101.789063 L 263.0625 101.9375 C 283.683594 122.554688 296.433594 151.035156 296.433594 182.5 C 296.433594 213.964844 283.683594 242.445313 263.0625 263.0625 L 262.917969 263.210938 L 274.820313 275.113281 L 274.96875 274.96875 Z M 182.5 16.640625 L 182.5 16.433594 C 90.785156 16.433594 16.433594 90.785156 16.433594 182.5 C 16.433594 255.859375 64.003906 318.097656 129.972656 340.082031 L 130.167969 340.144531 L 172.894531 211.972656 L 172.699219 211.90625 C 160.382813 207.804688 151.503906 196.191406 151.503906 182.5 C 151.503906 173.941406 154.972656 166.191406 160.582031 160.582031 C 166.191406 154.972656 173.9375 151.503906 182.5 151.503906 C 191.058594 151.503906 198.808594 154.972656 204.417969 160.582031 C 210.027344 166.191406 213.496094 173.9375 213.496094 182.5 C 213.496094 196.191406 204.617188 207.804688 192.300781 211.90625 L 192.105469 211.972656 L 234.832031 340.144531 L 235.027344 340.082031 C 301 318.097656 348.566406 255.859375 348.566406 182.5 C 348.566406 90.785156 274.214844 16.433594 182.5 16.433594 L 182.5 16.84375 C 228.246094 16.84375 269.65625 35.386719 299.636719 65.363281 C 329.613281 95.34375 348.15625 136.753906 348.15625 182.5 C 348.15625 255.675781 300.703125 317.765625 234.898438 339.691406 L 234.960938 339.886719 L 235.15625 339.820313 L 192.5625 212.035156 L 192.367188 212.101563 L 192.433594 212.296875 C 204.910156 208.140625 213.90625 196.375 213.910156 182.5 C 213.90625 165.152344 199.847656 151.09375 182.5 151.089844 C 165.152344 151.09375 151.09375 165.152344 151.089844 182.5 C 151.09375 196.375 160.089844 208.140625 172.566406 212.296875 L 172.632813 212.101563 L 172.4375 212.035156 L 129.84375 339.820313 L 130.039063 339.886719 L 130.101563 339.691406 C 64.296875 317.765625 16.84375 255.675781 16.84375 182.5 C 16.84375 136.753906 35.386719 95.34375 65.363281 65.363281 C 95.34375 35.386719 136.753906 16.84375 182.5 16.84375 Z M 202.902344 347.109375 L 203.027344 346.949219 C 195.652344 341.21875 188.511719 334.90625 181.683594 328.019531 L 181.535156 327.867188 L 181.390625 328.019531 C 174.792969 334.847656 167.910156 341.113281 160.816406 346.808594 L 160.441406 347.109375 L 160.917969 347.171875 C 167.984375 348.089844 175.1875 348.566406 182.5 348.566406 C 189.414063 348.566406 196.230469 348.136719 202.925781 347.316406 L 203.417969 347.253906 L 203.027344 346.949219 L 202.902344 347.109375 L 202.875 346.90625 C 196.199219 347.726563 189.398438 348.15625 182.5 348.15625 C 175.203125 348.15625 168.019531 347.679688 160.972656 346.765625 L 160.945313 346.96875 L 161.074219 347.128906 C 168.179688 341.421875 175.078125 335.144531 181.6875 328.304688 L 181.539063 328.164063 L 181.394531 328.308594 C 188.230469 335.210938 195.386719 341.53125 202.773438 347.273438 L 202.902344 347.109375 L 202.875 346.90625 Z M 191.792969 316.824219 L 191.636719 316.964844 C 200.742188 327.210938 210.519531 336.269531 220.722656 344.058594 L 220.800781 344.117188 L 220.894531 344.097656 C 221.574219 343.9375 222.253906 343.769531 222.929688 343.601563 L 223.15625 343.542969 L 205.3125 298.929688 L 205.09375 299.238281 C 200.808594 305.347656 196.3125 311.171875 191.636719 316.695313 L 191.519531 316.832031 L 191.636719 316.964844 L 191.792969 316.824219 L 191.949219 316.960938 C 196.632813 311.429688 201.136719 305.59375 205.429688 299.472656 L 205.261719 299.355469 L 205.070313 299.433594 L 222.6875 343.476563 L 222.878906 343.402344 L 222.828125 343.203125 C 222.152344 343.371094 221.476563 343.535156 220.800781 343.695313 L 220.847656 343.898438 L 220.972656 343.734375 C 210.789063 335.957031 201.035156 326.917969 191.945313 316.691406 L 191.792969 316.824219 L 191.949219 316.960938 Z M 182.257813 305.34375 L 182.421875 305.46875 C 188.113281 298.128906 193.472656 290.273438 198.433594 281.945313 L 198.484375 281.859375 L 182.5 241.898438 L 166.320313 282.34375 L 166.375 282.429688 C 171.253906 290.578125 176.511719 298.269531 182.097656 305.46875 L 182.257813 305.679688 L 182.421875 305.46875 L 182.257813 305.34375 L 182.421875 305.21875 C 176.847656 298.03125 171.597656 290.351563 166.726563 282.21875 L 166.550781 282.324219 L 166.742188 282.402344 L 182.5 243.003906 L 198.066406 281.917969 L 198.257813 281.84375 L 198.078125 281.738281 C 193.128906 290.050781 187.777344 297.890625 182.097656 305.21875 L 182.257813 305.34375 L 182.421875 305.21875 Z M 143.78125 343.804688 L 143.90625 343.96875 C 153.75 336.4375 163.199219 327.738281 172.027344 317.917969 L 172.152344 317.785156 L 172.03125 317.648438 C 167.527344 312.492188 163.195313 307.054688 159.058594 301.351563 L 158.839844 301.046875 L 141.84375 343.542969 L 142.070313 343.601563 C 142.625 343.738281 143.179688 343.871094 143.734375 344.007813 L 143.828125 344.027344 L 143.90625 343.96875 L 143.78125 343.804688 L 143.828125 343.605469 C 143.273438 343.472656 142.722656 343.339844 142.171875 343.203125 L 142.121094 343.402344 L 142.3125 343.476563 L 159.085938 301.546875 L 158.894531 301.46875 L 158.726563 301.589844 C 162.871094 307.304688 167.207031 312.753906 171.722656 317.917969 L 171.875 317.78125 L 171.722656 317.644531 C 162.910156 327.445313 153.480469 336.128906 143.65625 343.644531 L 143.78125 343.804688 L 143.828125 343.605469 Z M 182.5 364.796875 L 182.5 364.589844 C 132.21875 364.589844 86.695313 344.210938 53.742188 311.257813 C 20.792969 278.304688 0.410156 232.78125 0.410156 182.5 C 0.410156 132.21875 20.792969 86.695313 53.742188 53.742188 C 86.695313 20.789063 132.21875 0.410156 182.5 0.410156 C 232.78125 0.410156 278.304688 20.789063 311.257813 53.742188 C 344.210938 86.695313 364.589844 132.21875 364.589844 182.5 C 364.589844 232.78125 344.210938 278.304688 311.257813 311.257813 C 278.304688 344.210938 232.78125 364.589844 182.5 364.589844 L 182.5 365 C 283.292969 365 365 283.292969 365 182.5 C 365 81.707031 283.292969 0 182.5 0 C 81.707031 0 0 81.707031 0 182.5 C 0 283.292969 81.707031 365 182.5 365 L 182.5 364.796875 "/>
        </g>
    </symbol>
    <symbol id="pandora" viewBox="0 0 180 200">
        <g id="bg">
            <rect fill="#FFFFFF" width="180" height="200"/>
        </g>
        <g id="icons">
            <g>
                <path fill="#019FEE" d="M160.7,74.2c-0.9-8.8-3.4-17.1-8.8-24.4c-4.1-5.6-9.4-9.8-15.6-13c-6-3-12.3-5-19-5.9l0,0
                    c-3.9-0.6-7.8-0.9-11.8-0.9H43.8c-0.4,0-0.7,0.3-0.7,0.7l0,0c0,46.1,0,92.2,0,138.3v0.1c0,0.4,0.3,0.7,0.7,0.7l0,0
                    c12.3,0,24.7,0,37,0c3.3,0,6-2.7,6.1-5.9c0-0.3,0-0.6,0-0.7c0-8.6,0-17.1,0-25.5v-0.3c0-0.4,0.3-0.7,0.7-0.7c0,0,0,0,0.1,0
                    c3.1,0,6.4,0,9.6,0c2.4,0,4.9,0,7.3-0.3c7.8-0.6,15.7-2,23.1-5c2.3-0.9,4.6-2,6.9-3.1c9-4.9,15.8-11.7,20.6-20.8
                    c2.3-4.6,3.9-9.4,4.9-14.6c0.6-2.7,0.9-5.4,1-8.3c0-0.1,0-0.1,0-0.3s0-0.1,0-0.3v-7c0,0,0,0,0-0.1C160.9,76,160.8,75.1,160.7,74.2
                    z"/>
            </g>
        </g>
    </symbol>
    <symbol id="pocket-casts" viewBox="0 0 39 36" style="enable-background:new 0 0 39 36;">
        <g>
            <path fill="#F44336" d="M18,36c9.9,0,18-8,18-18S28,0,18,0S0,8,0,18S8,36,18,36L18,36L18,36z"/>
            <path fill="#FFFFFF" d="M17.8,27.1c-4.8-0.2-8.7-4.1-8.7-9c0-5,4.1-9,9-9s8.9,3.9,9,8.7c0,0.2,0.1,0.3,0.3,0.3H30
                c0.2,0,0.3-0.1,0.3-0.3C30.1,11.2,24.7,5.9,18,5.9c-6.8,0-12.3,5.5-12.3,12.3c0,6.7,5.3,12.1,11.9,12.3c0.2,0,0.3-0.1,0.3-0.3v-2.6
                C18.1,27.2,17.9,27.1,17.8,27.1L17.8,27.1L17.8,27.1z M18.1,11c-3.9,0-7.1,3.2-7.1,7.1c0,3.8,3,6.9,6.8,7.1c0.2,0,0.3-0.1,0.3-0.3
                v-2.1c0-0.2-0.1-0.3-0.3-0.3c-2.3-0.2-4.1-2.1-4.1-4.4c0-2.4,2-4.4,4.4-4.4c2.3,0,4.2,1.8,4.4,4.1c0,0.2,0.2,0.3,0.3,0.3h2.1
                c0.2,0,0.3-0.2,0.3-0.3C25,14,21.9,11,18.1,11L18.1,11L18.1,11z"/>
        </g>
    </symbol>
    <symbol id="rss" viewBox="0 0 12 12">
        <path d="m1.59148 8.7795c-.878186.0032-1.58780186.71645-1.58566708 1.5938.00213478.8773.71521308 1.5871 1.59340708 1.5861.87819-.0011 1.58954-.7126 1.58955-1.59-.0032-.879-.71739-1.58991-1.59729-1.5899zm-1.59147997-4.7118v2.32108c1.48808997.00154 2.91461997.59358 3.96575997 1.64589 1.05115 1.05231 1.64082 2.47873 1.63927 3.96533h2.32333c.00464-2.10318-.82881-4.12172-2.31634-5.60999-1.48753-1.48826-3.5068-2.32386-5.61201997-2.32231zm0-4.06189726v2.32108726c5.33125997.00952 9.65431997 4.31803 9.67666997 9.64411h2.32333c-.0096-6.61422-5.37938-11.97100707-11.99999997-11.9710001z" fill="#257BBC"/>
    </symbol>
    <symbol id="spotify" viewBox="0 0 170.1 170.1" style="enable-background:new 0 0 170.1 170.1;" xml:space="preserve">
        <g>
            <g>
                <g>
                    <path fill="#1ED760" d="M85,1.3C38.8,1.3,1.3,38.8,1.3,85c0,46.3,37.5,83.7,83.7,83.7c46.3,0,83.7-37.5,83.7-83.7
                        C168.8,38.8,131.3,1.3,85,1.3z M123.4,122.1c-1.5,2.5-4.7,3.2-7.2,1.7c-19.7-12-44.4-14.7-73.6-8.1c-2.8,0.6-5.6-1.1-6.2-3.9
                        c-0.6-2.8,1.1-5.6,3.9-6.2c31.9-7.3,59.3-4.2,81.3,9.3C124.2,116.4,124.9,119.6,123.4,122.1z M133.7,99.3c-1.9,3.1-5.9,4-9,2.2
                        c-22.5-13.8-56.8-17.8-83.4-9.8c-3.5,1-7.1-0.9-8.1-4.3c-1-3.5,0.9-7.1,4.4-8.1c30.4-9.2,68.2-4.8,94.1,11.1
                        C134.6,92.2,135.6,96.2,133.7,99.3z M134.6,75.5c-27-16-71.5-17.5-97.3-9.7c-4.1,1.3-8.5-1.1-9.8-5.2c-1.3-4.1,1.1-8.5,5.2-9.8
                        c29.6-9,78.8-7.2,109.8,11.2c3.7,2.2,4.9,7,2.7,10.7C143.1,76.5,138.3,77.7,134.6,75.5z"/>
                </g>
            </g>
        </g>
    </symbol>
    <symbol id="stitcher" viewBox="0 0 122.88 51.61" style="enable-background:new 0 0 122.88 51.61">
        <g>
            <polygon fill="#3590C5" points="0,10.14 21.5,10.14 21.5,49.15 0,49.15 0,10.14"/>
            <polygon fill="#C53827" points="101.38,7.99 122.88,7.99 122.88,43.93 101.38,43.93 101.38,7.99"/>
            <polygon fill="#EC8B24" points="76.19,0 97.69,0 97.69,46.7 76.19,46.7 76.19,0"/>
            <polygon fill="#FBC618" points="51,6.76 72.5,6.76 72.5,51.61 51,51.61 51,6.76"/>
            <polygon fill="#612268" points="25.5,3.07 47,3.07 47,46.39 25.5,46.39 25.5,3.07"/></g>
    </symbol>
    <symbol id="tuneIn" viewBox="56 56 200 88" fill="none">
        <g id="Logos">
            <g id="Logo__x2013__Horizontal_1A_12_">
                <g id="Logo_2_">
                    <path fill="#1C203C" d="M95,96.8v4c0,0.4-0.4,0.8-0.8,0.8h-5c-0.2,0-0.4,0.2-0.4,0.4v21.2c0,0.4-0.4,0.8-0.8,0.8h-4
				c-0.4,0-0.8-0.4-0.8-0.8V102c0-0.2-0.2-0.4-0.4-0.4h-5c-0.4,0-0.8-0.4-0.8-0.8v-4c0-0.4,0.4-0.8,0.8-0.8h16.4
				C94.6,96,95,96.4,95,96.8z M117,96h-4c-0.4,0-0.8,0.4-0.8,0.8v18.8c0,1.8-1.4,3.2-3.9,3.2c-2.4,0-3.8-1.4-3.8-3.2V96.8
				c0-0.4-0.4-0.8-0.8-0.8h-4c-0.4,0-0.8,0.4-0.8,0.8v18.8c0,4.8,4,8.8,9.4,8.8c5.5,0,9.5-4,9.5-8.8V96.8
				C117.8,96.4,117.4,96,117,96z M139.6,96h-4c-0.4,0-0.8,0.4-0.8,0.8v15c0,0.2-0.3,0.3-0.4,0.1l-5.5-15.2c-0.1-0.4-0.4-0.7-1-0.7
				h-4.8c-0.4,0-0.8,0.4-0.8,0.8v26.4c0,0.4,0.4,0.8,0.8,0.8h4c0.4,0,0.8-0.4,0.8-0.8v-13.8c0-0.2,0.3-0.3,0.4-0.1l5.4,14
				c0.1,0.3,0.4,0.7,1.1,0.7h4.7c0.4,0,0.8-0.4,0.8-0.8V96.8C140.4,96.4,140,96,139.6,96z M160.3,118.4h-9.5c-0.2,0-0.4-0.2-0.4-0.4
				v-4.8c0-0.2,0.2-0.4,0.4-0.4h9c0.4,0,0.8-0.4,0.8-0.8v-4c0-0.4-0.4-0.8-0.8-0.8h-9c-0.2,0-0.4-0.2-0.4-0.4V102
				c0-0.2,0.2-0.4,0.4-0.4h9.3c0.4,0,0.8-0.4,0.8-0.8v-4c0-0.4-0.4-0.8-0.8-0.8h-14.5c-0.4,0-0.8,0.4-0.8,0.8v26.4
				c0,0.4,0.4,0.8,0.8,0.8h14.7c0.4,0,0.8-0.4,0.8-0.8v-4C161.1,118.8,160.7,118.4,160.3,118.4z M256,59v62c0,1.7-1.3,3-3,3h-69v17
				c0,1.7-1.3,3-3,3H59c-1.7,0-3-1.3-3-3V79c0-1.7,1.3-3,3-3h119V59c0-1.7,1.3-3,3-3h72C254.7,56,256,57.3,256,59z M178,82H62.5
				c-0.3,0-0.5,0.2-0.5,0.5v55c0,0.3,0.2,0.5,0.5,0.5h115c0.3,0,0.5-0.2,0.5-0.5V82z M213.8,99.4c0-0.4-0.4-0.8-0.8-0.8h-3.4
				c-0.2,0-0.4-0.2-0.4-0.4V81.8c0-0.2,0.2-0.4,0.4-0.4h3c0.4,0,0.8-0.4,0.8-0.8v-3.8c0-0.4-0.4-0.8-0.8-0.8h-12.4
				c-0.4,0-0.8,0.4-0.8,0.8v3.8c0,0.4,0.4,0.8,0.8,0.8h3c0.2,0,0.4,0.2,0.4,0.4v16.4c0,0.2-0.2,0.4-0.4,0.4h-3.4
				c-0.4,0-0.8,0.4-0.8,0.8v3.8c0,0.4,0.4,0.8,0.8,0.8H213c0.4,0,0.8-0.4,0.8-0.8V99.4z M236.2,76.8c0-0.4-0.4-0.8-0.8-0.8h-4
				c-0.4,0-0.8,0.4-0.8,0.8v15c0,0.2-0.3,0.3-0.4,0.1l-5.5-15.2c-0.1-0.4-0.4-0.7-1-0.7H219c-0.4,0-0.8,0.4-0.8,0.8v26.4
				c0,0.4,0.4,0.8,0.8,0.8h4c0.4,0,0.8-0.4,0.8-0.8V89.4c0-0.2,0.3-0.3,0.4-0.1l5.4,14c0.1,0.3,0.4,0.7,1.1,0.7h4.7
				c0.4,0,0.8-0.4,0.8-0.8V76.8z"/>
                </g>
            </g>
        </g>
    </symbol>
    <symbol id="externalLink" width="12px" height="12px" viewBox="0 0 12 12">
        <g id="Symbols2" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="footer/black/1440-2" transform="translate(-569.000000, -101.000000)">
                <g id="Group-3" transform="translate(520.000000, 60.000000)">
                    <g id="Group-29" transform="translate(0.000000, 38.000000)">
                        <g id="ArrowSquareOut" transform="translate(47.000000, 1.000000)">
                            <rect id="Rectangle3" x="0" y="0" width="16" height="16"></rect>
                            <polyline id="Path1" stroke-linecap="round" stroke-linejoin="round" points="13.5 6.25 13.4995 2.5005 9.75 2.5"></polyline>
                            <line x1="8.9982125" y1="7.0017875" x2="13.4982125" y2="2.5017875" id="Path2" stroke-linecap="round" stroke-linejoin="round"></line>
                            <path d="M11.5,9 L11.5,13 C11.5,13.2761424 11.2761424,13.5 11,13.5 L3,13.5 C2.72385763,13.5 2.5,13.2761424 2.5,13 L2.5,5 C2.5,4.72385763 2.72385763,4.5 3,4.5 L7,4.5" id="Path3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </symbol>
</svg>
</svg>
<div class="Zephr Zephr-bar"></div><bsp-header class="Page-header">
        <div class="Page-header-bar">
            <button class="Page-header-menu-trigger mobile-icon" aria-expanded="false"><svg class="burger-menu"><use xlink:href="#burger-menu"></use></svg><svg class="close-x"><use xlink:href="#close-x"></use></svg><span class="label">Menu</span></button>

            
                
                    <div class="Page-header-bar-logo"><a aria-label="home page" href="/"  >
    
        <picture>
            
            
                
                    
                
            

            
            
                
    

    
        <source srcset="https://assets.apnews.com/fa/ba/9258a7114f5ba5c7202aaa1bdd66/aplogo.svg"/>

    

            
            
    <img class="Image" alt="AP Logo" src="https://assets.apnews.com/fa/ba/9258a7114f5ba5c7202aaa1bdd66/aplogo.svg" loading="lazy"
    >

        </picture>
    
    </a>
</div>
                
            

            <button class="Page-header-menu-trigger desktop-icon" aria-expanded="false"><svg class="burger-menu"><use xlink:href="#burger-menu"></use></svg><svg class="close-x"><use xlink:href="#close-x"></use></svg><span class="label">Menu</span></button>

            <div class="Page-header-navigation">
                
                    <bsp-nav class="MainNavigation">
    
        <ul class="MainNavigation-items"><li class="MainNavigation-items-item" data-nav-items-item><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/world-news">World</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/us-news">U.S.</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/hub/election-2024">Election 2024</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/politics">Politics</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/sports">Sports</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/entertainment">Entertainment</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/business">Business</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/science">Science</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/ap-fact-check">Fact Check</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/oddities">Oddities</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/health">Health</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/video">Video</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/climate-and-environment">Climate</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/spotlight">Spotlight</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/photography">Photography </a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/technology">Tech</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/lifestyle">Lifestyle</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/religion">Religion</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-hidden ><div class="MainNavigationItem" >
    <div class="MainNavigationItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/press-releases">Press Releases</a>
        
        
    </div>

    
</div>
</li><li class="MainNavigation-items-item" data-nav-items-item data-morebutton tabindex="0">
                <div class="MainNavigationItem has-menu" >
    <div class="MainNavigationItem-text">
        
            <span>...</span>
        
        
            <div class="MainNavigationItem-more" data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="MainNavigationItem-items" data-nav-moreitems >
            
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem  has-menu" data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/world-news">World</a>
        
        
            <div class="MainNavigationItemItem-more"  data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="MainNavigationItemItem-items" data-nav-moreitems >
            
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/israel-hamas-war" >
    <span class="NavigationLink-text">Israel-Hamas War
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/russia-ukraine" >
    <span class="NavigationLink-text">Russia-Ukraine War
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/latin-america" >
    <span class="NavigationLink-text">Latin America
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/europe" >
    <span class="NavigationLink-text">Europe
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/africa" >
    <span class="NavigationLink-text">Africa
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/middle-east" >
    <span class="NavigationLink-text">Middle East
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/asia-pacific" >
    <span class="NavigationLink-text">Asia Pacific
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/us-news" >
    <span class="NavigationLink-text">U.S. News
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/australia" >
    <span class="NavigationLink-text">Australia
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/china" >
    <span class="NavigationLink-text">China
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/us-news">U.S.</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/hub/election-2024">Election 2024</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem  has-menu" data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/politics">Politics</a>
        
        
            <div class="MainNavigationItemItem-more"  data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="MainNavigationItemItem-items" data-nav-moreitems >
            
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/joe-biden" >
    <span class="NavigationLink-text">Joe Biden
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/election-2024" >
    <span class="NavigationLink-text">Election 2024
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/congress" >
    <span class="NavigationLink-text">Congress
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem  has-menu" data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/sports">Sports</a>
        
        
            <div class="MainNavigationItemItem-more"  data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="MainNavigationItemItem-items" data-nav-moreitems >
            
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/ap-top-25-college-football-poll" >
    <span class="NavigationLink-text">AP Top 25 College Football Poll
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/nfl" >
    <span class="NavigationLink-text">NFL
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/mlb" >
    <span class="NavigationLink-text">MLB
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/nhl" >
    <span class="NavigationLink-text">NHL
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/nba" >
    <span class="NavigationLink-text">NBA
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/wnba-basketball" >
    <span class="NavigationLink-text">WNBA
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/soccer" >
    <span class="NavigationLink-text">Soccer
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/tennis" >
    <span class="NavigationLink-text">Tennis
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/golf" >
    <span class="NavigationLink-text">Golf
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem  has-menu" data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/entertainment">Entertainment</a>
        
        
            <div class="MainNavigationItemItem-more"  data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="MainNavigationItemItem-items" data-nav-moreitems >
            
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/film-reviews" >
    <span class="NavigationLink-text">Movie reviews
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/book-reviews" >
    <span class="NavigationLink-text">Book reviews
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/celebrity" >
    <span class="NavigationLink-text">Celebrity
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/television" >
    <span class="NavigationLink-text">Television
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/music" >
    <span class="NavigationLink-text">Music
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem  has-menu" data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/business">Business</a>
        
        
            <div class="MainNavigationItemItem-more"  data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="MainNavigationItemItem-items" data-nav-moreitems >
            
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/inflation" >
    <span class="NavigationLink-text">Inflation
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/financial-markets" >
    <span class="NavigationLink-text">Financial Markets
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/business-highlights" >
    <span class="NavigationLink-text">Business Highlights
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/financial-wellness" >
    <span class="NavigationLink-text">Financial wellness
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/science">Science</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/ap-fact-check">Fact Check</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/oddities">Oddities</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/health">Health</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/video">Video</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/climate-and-environment">Climate</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/spotlight">Spotlight</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/photography">Photography </a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem  has-menu" data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/technology">Tech</a>
        
        
            <div class="MainNavigationItemItem-more"  data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="MainNavigationItemItem-items" data-nav-moreitems >
            
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/artificial-intelligence" >
    <span class="NavigationLink-text">Artificial Intelligence
    </span></a>
</li>
                
                    <li class="MainNavigationItemItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/social-media" >
    <span class="NavigationLink-text">Social Media
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/lifestyle">Lifestyle</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/religion">Religion</a>
        
        
    </div>

    
</div>
</li>
                
                    <li class="MainNavigationItem-items-item"><div class="MainNavigationItemItem " data-nav-item >
    <div class="MainNavigationItemItem-text">
        
            <a  class="AnClick-MainNav"  href="https://apnews.com/press-releases">Press Releases</a>
        
        
    </div>

    
</div>
</li>
                
            
        </ul>
    
</div>

            </li>
        </ul>
    
</bsp-nav>

                
            </div>

            <div class="Page-header-end">
                
                    <bsp-search-overlay class="SearchOverlay">
    <div class="SearchOverlay-search-overlay">
      <form class="SearchOverlay-search-form" action="https://apnews.com/search#nt=navsearch" novalidate="" autocomplete="off">
          <label class="SearchOverlay-search-label">
              <input placeholder="Keyword Search..." type="text" class="SearchOverlay-search-input" name="q" required="true">
              <span class="sr-only">
                  Search Query
              </span>
            <button type="submit" class="SearchOverlay-search-submit">
                <svg>
                    <use xlink:href="#icon-magnify"></use>
                </svg>
                <span class="sr-only">Submit Search</span>
            </button>
          </label>
      </form>
     </div>
    <button class="SearchOverlay-search-button">
        <svg class="icon-magnify">
            <use xlink:href="#icon-magnify"></use>
        </svg>
        <span class="sr-only">
            Show Search
        </span>
        <svg class="close-x">
            <use xlink:href="#close-x"></use>
        </svg>
    </button>
</bsp-search-overlay>

                
            </div>
        </div>

        <div class="Page-header-hamburger-menu-wrapper">
            <div class="Page-header-hamburger-menu">
                <div class="Page-header-hamburger-menu-content">
                    
                        <nav class="HamburgerNavigation">
    <ul class="HamburgerNavigation-items">
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem  has-menu"  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/world-news">World</a>
        
        
            <div class="HamburgerNavigationItem-more" data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="HamburgerNavigationItem-items" data-nav-moreitems >
            
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/israel-hamas-war" >
    <span class="NavigationLink-text">Israel-Hamas War
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/russia-ukraine" >
    <span class="NavigationLink-text">Russia-Ukraine War
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/latin-america" >
    <span class="NavigationLink-text">Latin America
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/europe" >
    <span class="NavigationLink-text">Europe
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/africa" >
    <span class="NavigationLink-text">Africa
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/middle-east" >
    <span class="NavigationLink-text">Middle East
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/asia-pacific" >
    <span class="NavigationLink-text">Asia Pacific
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/us-news" >
    <span class="NavigationLink-text">U.S. News
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/australia" >
    <span class="NavigationLink-text">Australia
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/china" >
    <span class="NavigationLink-text">China
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/us-news">U.S.</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/hub/election-2024">Election 2024</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem  has-menu"  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/politics">Politics</a>
        
        
            <div class="HamburgerNavigationItem-more" data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="HamburgerNavigationItem-items" data-nav-moreitems >
            
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/joe-biden" >
    <span class="NavigationLink-text">Joe Biden
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/election-2024" >
    <span class="NavigationLink-text">Election 2024
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/congress" >
    <span class="NavigationLink-text">Congress
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem  has-menu"  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/sports">Sports</a>
        
        
            <div class="HamburgerNavigationItem-more" data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="HamburgerNavigationItem-items" data-nav-moreitems >
            
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/ap-top-25-college-football-poll" >
    <span class="NavigationLink-text">AP Top 25 College Football Poll
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/nfl" >
    <span class="NavigationLink-text">NFL
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/mlb" >
    <span class="NavigationLink-text">MLB
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/nhl" >
    <span class="NavigationLink-text">NHL
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/nba" >
    <span class="NavigationLink-text">NBA
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/wnba-basketball" >
    <span class="NavigationLink-text">WNBA
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/soccer" >
    <span class="NavigationLink-text">Soccer
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/tennis" >
    <span class="NavigationLink-text">Tennis
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/golf" >
    <span class="NavigationLink-text">Golf
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem  has-menu"  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/entertainment">Entertainment</a>
        
        
            <div class="HamburgerNavigationItem-more" data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="HamburgerNavigationItem-items" data-nav-moreitems >
            
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/film-reviews" >
    <span class="NavigationLink-text">Movie reviews
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/book-reviews" >
    <span class="NavigationLink-text">Book reviews
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/celebrity" >
    <span class="NavigationLink-text">Celebrity
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/television" >
    <span class="NavigationLink-text">Television
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/music" >
    <span class="NavigationLink-text">Music
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem  has-menu"  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/business">Business</a>
        
        
            <div class="HamburgerNavigationItem-more" data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="HamburgerNavigationItem-items" data-nav-moreitems >
            
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/inflation" >
    <span class="NavigationLink-text">Inflation
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/financial-markets" >
    <span class="NavigationLink-text">Financial Markets
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/business-highlights" >
    <span class="NavigationLink-text">Business Highlights
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/financial-wellness" >
    <span class="NavigationLink-text">Financial wellness
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/science">Science</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/ap-fact-check">Fact Check</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/oddities">Oddities</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/health">Health</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/video">Video</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/climate-and-environment">Climate</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/spotlight">Spotlight</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem-divider"></div>

<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/photography">Photography </a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem  has-menu"  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/technology">Tech</a>
        
        
            <div class="HamburgerNavigationItem-more" data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="HamburgerNavigationItem-items" data-nav-moreitems >
            
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/artificial-intelligence" >
    <span class="NavigationLink-text">Artificial Intelligence
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/hub/social-media" >
    <span class="NavigationLink-text">Social Media
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/lifestyle">Lifestyle</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/religion">Religion</a>
        
        
    </div>

    
</div>
</li>
        
            <li class="HamburgerNavigation-items-item">
<div class="HamburgerNavigationItem "  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <a  class="AnClick-Hamburger-NavItem" href="https://apnews.com/press-releases">Press Releases</a>
        
        
    </div>

    
</div>
</li>
        

        <li class="HamburgerNavigation-items-item">
            <div class="HamburgerNavigationItem-divider-wide"></div>
        </li>

        
            
                
                    <li class="HamburgerNavigation-items-item">
                        <div class="HamburgerNavigationPromo" data-promo="1" data-has-media >

    
        
    <div class="PagePromo-media"><span class="Link"><picture data-crop="footerPromoImage">
    
        <source type="image/webp"  width="320" height="118" srcset="https://dims.apnews.com/dims4/default/6068f11/2147483647/strip/true/crop/640x236+0+0/resize/320x118!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc3%2F4c%2F65482a7b452db66043542c093eaf%2Fpromo-2x.png 1x,https://dims.apnews.com/dims4/default/2afe0e6/2147483647/strip/true/crop/640x236+0+0/resize/640x236!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc3%2F4c%2F65482a7b452db66043542c093eaf%2Fpromo-2x.png 2x" loading="lazy"/>

    

    
        <source width="320" height="118" srcset="https://dims.apnews.com/dims4/default/94c503b/2147483647/strip/true/crop/640x236+0+0/resize/320x118!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc3%2F4c%2F65482a7b452db66043542c093eaf%2Fpromo-2x.png 1x,https://dims.apnews.com/dims4/default/6e4b276/2147483647/strip/true/crop/640x236+0+0/resize/640x236!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc3%2F4c%2F65482a7b452db66043542c093eaf%2Fpromo-2x.png 2x" loading="lazy"/>

    

    <img class="Image" srcset="https://dims.apnews.com/dims4/default/94c503b/2147483647/strip/true/crop/640x236+0+0/resize/320x118!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc3%2F4c%2F65482a7b452db66043542c093eaf%2Fpromo-2x.png 1x,https://dims.apnews.com/dims4/default/6e4b276/2147483647/strip/true/crop/640x236+0+0/resize/640x236!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc3%2F4c%2F65482a7b452db66043542c093eaf%2Fpromo-2x.png 2x" width="320" height="118" src="https://dims.apnews.com/dims4/default/94c503b/2147483647/strip/true/crop/640x236+0+0/resize/320x118!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc3%2F4c%2F65482a7b452db66043542c093eaf%2Fpromo-2x.png" loading="lazy"
    >
</picture>
</span></div>


    

    <div class="HamburgerNavigationPromo-content">
        

        

    <div class="PagePromo-description">
         <span class="Link"><span class="PagePromoContentIcons-text">The Associated Press is an independent global news organization dedicated to factual reporting. Founded in 1846, AP today remains the most trusted source of fast, accurate, unbiased news in all formats and the essential provider of the technology and services vital to the news business. More than half the world’s population sees AP journalism every day.</span></span>
    </div>


        

    </div>
</div>

                        <div class="HamburgerNavigationItem-divider"></div>
                    </li>
                
            
        <li class="HamburgerNavigation-items-item Zephr Zephr-hamburgernav"></li>
            
                <li class="HamburgerNavigation-items-item">
                    <div class="SocialBar">
    
        <ul class="SocialBar-items">
            
                <li class="SocialBar-items-item"><a class="SocialLink" rel="noreferrer" href="https://twitter.com/AP" target="_blank" data-social-service="twitter">
    
    <div class="SocialLink-icon">
        <svg>
            <use xlink:href="#mono-icon-twitter"></use>
        </svg>
    </div>
    <span class="sr-only">
        twitter
    </span>
</a>
</li>
            
                <li class="SocialBar-items-item"><a class="SocialLink" rel="noreferrer" href="https://www.instagram.com/apnews/" target="_blank" data-social-service="instagram">
    
    <div class="SocialLink-icon">
        <svg>
            <use xlink:href="#mono-icon-instagram"></use>
        </svg>
    </div>
    <span class="sr-only">
        instagram
    </span>
</a>
</li>
            
                <li class="SocialBar-items-item"><a class="SocialLink" rel="noreferrer" href="https://www.facebook.com/APNews" target="_blank" data-social-service="facebook">
    
    <div class="SocialLink-icon">
        <svg>
            <use xlink:href="#mono-icon-facebook"></use>
        </svg>
    </div>
    <span class="sr-only">
        facebook
    </span>
</a>
</li>
            
        </ul>
    
</div>

                </li>
            
            <li class="HamburgerNavigation-items-item">
                <div class="HamburgerNavigationItem-divider"></div>
            </li>
        
        
            
                
                    <li class="FooterNavigation-items-item"><div class="FooterNavigationItem">
    <div class="FooterNavigationItem-text">
        
            <span>The Associated Press</span>
        
    </div>

    
        <ul class="FooterNavigationItem-items" data-column-count="8">
            
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://www.ap.org/"  target="_blank"
    >
    <span class="NavigationLink-text">ap.org
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://careers.ap.org/"  target="_blank"
    >
    <span class="NavigationLink-text">Careers
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://contentservices.ap.org"  target="_blank"
    >
    <span class="NavigationLink-text">Advertise with us
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/contact-us" >
    <span class="NavigationLink-text">Contact Us
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/accessibility-statement" >
    <span class="NavigationLink-text">Accessibility Statement
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
                                <button id="ot-sdk-btn" class="ot-sdk-show-settings" data-title="Your Privacy Choices / Do Not Sell or Share My Personal Information">Cookie Settings</button>
                            </li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/termsofservice" >
    <span class="NavigationLink-text">Terms of Use
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/privacystatement" >
    <span class="NavigationLink-text">Privacy Policy
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
                    <li class="HamburgerNavigation-items-item">
                        <div class="HamburgerNavigationItem-divider"></div>
                    </li>
                
            
                
                    <li class="HamburgerNavigation-items-item" data-footer-item="true">
<div class="HamburgerNavigationItem  has-menu"  data-nav-item>
    <div class="HamburgerNavigationItem-text">
        
            <span>More From AP News</span>
        
        
            <div class="HamburgerNavigationItem-more" data-nav-moretrigger>
                <button aria-label="More"><svg class="chevron"><use xlink:href="#chevron-down"></use></svg></button>
            </div>
        
    </div>

    
        <ul class="HamburgerNavigationItem-items" data-nav-moreitems >
            
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://www.ap.org/about"  target="_blank"
    >
    <span class="NavigationLink-text">About
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://www.ap.org/about/news-values-and-principles"  target="_blank"
    >
    <span class="NavigationLink-text">AP News Values and Principles
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://www.ap.org/about/our-role-in-elections"  target="_blank"
    >
    <span class="NavigationLink-text">AP’s Role in Elections
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://leads.ap.org"  target="_blank"
    >
    <span class="NavigationLink-text">AP Leads
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://blog.ap.org/"  target="_blank"
    >
    <span class="NavigationLink-text">AP Definitive Source Blog
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://apimagesblog.com/"  target="_blank"
    >
    <span class="NavigationLink-text">AP Images Spotlight Blog
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="HamburgerNavigationItem-items-item">
<a class="NavigationLink " href="https://www.apstylebook.com/"  target="_blank"
    >
    <span class="NavigationLink-text">AP Stylebook
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
            
        </ul>
    
</div>
</li>
                
            
        
        <li class="HamburgerNavigation-items-item">
            <div class="HamburgerNavigationItem-divider"></div>
        </li>
        
            <li class="HamburgerNavigation-items-item">
                <div class="Page-footer-disclaimer">
                    <p>Copyright 2024 The Associated Press. All Rights Reserved.</p>
                </div>
            </li>
        
    </ul>
</nav>

                    
                </div>
            </div>
        </div>
    </bsp-header>
    <div class="Page-trending"  data-modulewell>
    
<div class="PageListTrending" data-module 
    data-gtm-modulestyle="Trending list"
     data-gtm-region="Top Nav - Trending"
 data-gtm-topic="No Value" data-inverse-colors data-tb-region="Top Nav - Trending" >
    <div class="PageListTrending-contents">
        

    
    <a class="AnchorLink" id="list-module-a90001" name="list-module-a90001"></a>




    <div class="PageList-header"  data-prompt="hidden">
        
        
        
            <bsp-custom-headline custom-headline="div" >
                <div class="PageList-header-title">
                    <div class="PageListTrending-AnimatedIcon" data-pulsing-off></div>
                </div>
            </bsp-custom-headline>
        
        
        
        
    </div>

        
        <div data-scroll-shade-parent>
            <bsp-scroll-shade class="PageList-items" >
                
                    <div class="PageList-items-item">
                        
                            <div class="PagePromoTrending" 
 data-gtm-region="Israel-Hamas war"
 data-gtm-topic="No Value" data-no-media data-tb-region-item  data-gtm-region-item >
    
        <bsp-custom-headline custom-headline="div" >
            <div class="PagePromo-title">
                <a class="Link AnClick-TrendingLink" href="https://apnews.com/hub/israel-hamas-war" target="_blank" rel="noopener"><span class="PagePromoContentIcons-text">Israel-Hamas war</span></a>
            </div>
        </bsp-custom-headline>
    

</div>
                        
                    </div>
                
                    <div class="PageList-items-item">
                        
                            <div class="PagePromoTrending" 
 data-gtm-region="Your campaign coverage"
 data-gtm-topic="No Value" data-no-media data-tb-region-item  data-gtm-region-item >
    
        <bsp-custom-headline custom-headline="div" >
            <div class="PagePromo-title">
                <a class="Link AnClick-TrendingLink" href="https://apnews.com/hub/election-2024"><span class="PagePromoContentIcons-text">Your campaign coverage</span></a>
            </div>
        </bsp-custom-headline>
    

</div>
                        
                    </div>
                
                    <div class="PageList-items-item">
                        
                            <div class="PagePromoTrending" 
 data-gtm-region="US winter storm"
 data-gtm-topic="No Value" data-tb-region-item  data-gtm-region-item >
    
        <bsp-custom-headline custom-headline="div" >
            <div class="PagePromo-title">
                <a class="Link AnClick-TrendingLink" href="https://apnews.com/article/us-winter-weather-snow-freezing-low-temperatures-e4b2f623ff13112ae241b05f3584503e"><span class="PagePromoContentIcons-text">US winter storm</span><span class="PagePromoContentIcons-icon Link-icon" data-type="video"><svg><use xlink:href="#play-icon"></use></svg></span></a>
            </div>
        </bsp-custom-headline>
    

</div>
                        
                    </div>
                
                    <div class="PageList-items-item">
                        
                            <div class="PagePromoTrending" 
 data-gtm-region="Coachella 2024 lineup"
 data-gtm-topic="No Value" data-tb-region-item  data-gtm-region-item >
    
        <bsp-custom-headline custom-headline="div" >
            <div class="PagePromo-title">
                <a class="Link AnClick-TrendingLink" href="https://apnews.com/article/coachella-2024-lineup-6c672b458c151dd142418193d319b9c8"><span class="PagePromoContentIcons-text">Coachella 2024 lineup</span></a>
            </div>
        </bsp-custom-headline>
    

</div>
                        
                    </div>
                
                    <div class="PageList-items-item">
                        
                            <div class="PagePromoTrending" 
 data-gtm-region="Princess of Wales surgery"
 data-gtm-topic="No Value" data-tb-region-item  data-gtm-region-item >
    
        <bsp-custom-headline custom-headline="div" >
            <div class="PagePromo-title">
                <a class="Link AnClick-TrendingLink" href="https://apnews.com/article/kate-princess-of-wales-operation-uk-royals-eea1a111a295152b8820b94fd257c12d"><span class="PagePromoContentIcons-text">Princess of Wales surgery</span></a>
            </div>
        </bsp-custom-headline>
    

</div>
                        
                    </div>
                
            </bsp-scroll-shade>
        </div>
    </div>
</div>



</div></div>

    
    


    <div class="Page-content">
        <div class="Page-pageLead" data-list-heading-style="large" >
    
    
        
                

    



    <div class="PageList-header"  data-prompt="visible">
        
        
        
            <bsp-custom-headline custom-headline="h1" >
                <h1 class="PageList-header-title">
                    Social media
                </h1>
            </bsp-custom-headline>
        
        
        
        
    </div>
       
            
        
    

    

    
        
    
</div>

        
        
        <main class="Page-oneColumn" data-modulewell>
            
            
<div class="PageListStandardH" data-module
    data-gtm-modulestyle="List H"
     data-gtm-region="No Value"
 data-gtm-topic="No Value" data-show-loadmore="true">
    

    
    <a class="AnchorLink" id="list-module-a40000" name="list-module-a40000"></a>




<div class="PageList-header-alternativedivider"></div> 


    <div class="PageList-items">
        <div class="PageList-items-item">
            
                
                    
                        <div class="PagePromo"
 data-gtm-region="Utah Legislature to revise social media limits for youth as it navigates multiple lawsuits"
 data-gtm-topic="No Value">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Utah Legislature to revise social media limits for youth as it navigates multiple lawsuits" href="https://apnews.com/article/social-media-restrictions-utah-legislature-f0e9577de3f1674ed0806a7931522d16" ><picture data-crop="5050-3x2">
    
        <source media="(min-width: 1280px)" type="image/webp"  width="660" height="440" srcset="https://dims.apnews.com/dims4/default/fe129cc/2147483647/strip/true/crop/1920x1280+0+0/resize/660x440!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/8a187cd/2147483647/strip/true/crop/1920x1280+0+0/resize/1320x880!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    
        <source media="(min-width: 1280px)" width="660" height="440" srcset="https://dims.apnews.com/dims4/default/aeda7c9/2147483647/strip/true/crop/1920x1280+0+0/resize/660x440!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/85b0ff1/2147483647/strip/true/crop/1920x1280+0+0/resize/1320x880!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    
        <source media="(min-width: 1024px)" type="image/webp"  width="580" height="386" srcset="https://dims.apnews.com/dims4/default/15acdb2/2147483647/strip/true/crop/1920x1278+0+1/resize/580x386!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/522e073/2147483647/strip/true/crop/1920x1278+0+1/resize/1160x772!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    
        <source media="(min-width: 1024px)" width="580" height="386" srcset="https://dims.apnews.com/dims4/default/1f67b87/2147483647/strip/true/crop/1920x1278+0+1/resize/580x386!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/6e75234/2147483647/strip/true/crop/1920x1278+0+1/resize/1160x772!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" type="image/webp"  width="452" height="301" srcset="https://dims.apnews.com/dims4/default/bde453c/2147483647/strip/true/crop/1920x1279+0+1/resize/452x301!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/1984497/2147483647/strip/true/crop/1920x1279+0+1/resize/904x602!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="452" height="301" srcset="https://dims.apnews.com/dims4/default/701c4dc/2147483647/strip/true/crop/1920x1279+0+1/resize/452x301!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/fe7c8e3/2147483647/strip/true/crop/1920x1279+0+1/resize/904x602!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    
        <source media="(max-width: 599px)" type="image/webp"  width="567" height="378" srcset="https://dims.apnews.com/dims4/default/8cc68d0/2147483647/strip/true/crop/1920x1280+0+0/resize/567x378!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/abf1316/2147483647/strip/true/crop/1920x1280+0+0/resize/1134x756!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    
        <source media="(max-width: 599px)" width="567" height="378" srcset="https://dims.apnews.com/dims4/default/53a0927/2147483647/strip/true/crop/1920x1280+0+0/resize/567x378!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/3d88228/2147483647/strip/true/crop/1920x1280+0+0/resize/1134x756!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="567" height="378" srcset="https://dims.apnews.com/dims4/default/8cc68d0/2147483647/strip/true/crop/1920x1280+0+0/resize/567x378!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/abf1316/2147483647/strip/true/crop/1920x1280+0+0/resize/1134x756!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    
        <source width="567" height="378" srcset="https://dims.apnews.com/dims4/default/53a0927/2147483647/strip/true/crop/1920x1280+0+0/resize/567x378!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/3d88228/2147483647/strip/true/crop/1920x1280+0+0/resize/1134x756!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" loading="lazy"/>

    

    <img class="Image" alt="Utah Senate President Stuart Adams gives his opening speech to kick off the state&#x27;s 2024 legislative session, Tuesday, Jan. 16, 2024, in Salt Lake City. Adams said the Legislature would work this session to strengthen laws governing social media access for minors. (AP Photo/Hannah Schoenbaum)" srcset="https://dims.apnews.com/dims4/default/53a0927/2147483647/strip/true/crop/1920x1280+0+0/resize/567x378!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 1x,https://dims.apnews.com/dims4/default/3d88228/2147483647/strip/true/crop/1920x1280+0+0/resize/1134x756!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474 2x" width="567" height="378" src="https://dims.apnews.com/dims4/default/53a0927/2147483647/strip/true/crop/1920x1280+0+0/resize/567x378!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F65%2F56f1b1f9003605074353002ca956%2Fed7da967fbc9405a8e41245e6c545474" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/social-media-restrictions-utah-legislature-f0e9577de3f1674ed0806a7931522d16"><span class="PagePromoContentIcons-text">Utah Legislature to revise social media limits for youth as it navigates multiple lawsuits</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/social-media-restrictions-utah-legislature-f0e9577de3f1674ed0806a7931522d16"><span class="PagePromoContentIcons-text">Utah’s Republican legislative leaders have pledged to reinforce laws they passed last year requiring parental permission for kids and teens to access social media apps.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1705455721000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                    
                
            
        </div>
        
        
            
        
            
                
                    <div class="PageList-items-item">
                        
                            <div class="PagePromo"
 data-gtm-region="Coco Gauff reiterates USTA image of US players made them look “awful”"
 data-gtm-topic="No Value" data-align-top data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Coco Gauff reiterates USTA image of US players made them look “awful”" href="https://apnews.com/article/coco-gauff-usta-social-media-46d67d98a8b567d0b8847a3d4f13468d" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/3eca08e/2147483647/strip/true/crop/3684x2452+0+2/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 1x,https://dims.apnews.com/dims4/default/d1d0ab7/2147483647/strip/true/crop/3684x2452+0+2/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/95a456c/2147483647/strip/true/crop/3684x2452+0+2/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 1x,https://dims.apnews.com/dims4/default/ac8d26f/2147483647/strip/true/crop/3684x2452+0+2/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/8f56912/2147483647/strip/true/crop/3684x2454+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 1x,https://dims.apnews.com/dims4/default/8396333/2147483647/strip/true/crop/3684x2454+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/49c9489/2147483647/strip/true/crop/3684x2454+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 1x,https://dims.apnews.com/dims4/default/eecaf9c/2147483647/strip/true/crop/3684x2454+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 2x" loading="lazy"/>

    

    <img class="Image" alt="Coco Gauff, right, of the U.S. is congratulated by Anna Karolina Schmiedlova of Slovakia following their first round match at the Australian Open tennis championships at Melbourne Park, Melbourne, Australia, Monday, Jan. 15, 2024. (AP Photo/Asanka Brendon Ratnayake)" srcset="https://dims.apnews.com/dims4/default/49c9489/2147483647/strip/true/crop/3684x2454+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 1x,https://dims.apnews.com/dims4/default/eecaf9c/2147483647/strip/true/crop/3684x2454+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/49c9489/2147483647/strip/true/crop/3684x2454+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Fdd%2Fce217746e8f950953bf19ea5d3c4%2F3e15b2ed8cb842aa94fb9e5518c7fe10" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/coco-gauff-usta-social-media-46d67d98a8b567d0b8847a3d4f13468d"><span class="PagePromoContentIcons-text">Coco Gauff reiterates USTA image of US players made them look “awful”</span></a>
            </h3>
        </bsp-custom-headline>
    



        


        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1705293854000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    </div>
                
            
        
            
                
                    <div class="PageList-items-item">
                        
                            <div class="PagePromo"
 data-gtm-region="NOT REAL NEWS: A look at what didn’t happen this week"
 data-gtm-topic="No Value" data-align-top data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="NOT REAL NEWS: A look at what didn’t happen this week" href="https://apnews.com/article/fact-check-misinformation-0178d231b6374fdb51f4e9922786f1ad" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/0ccd50f/2147483647/strip/true/crop/1200x799+0+71/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 1x,https://dims.apnews.com/dims4/default/27da9f3/2147483647/strip/true/crop/1200x799+0+71/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/b2b1f8a/2147483647/strip/true/crop/1200x799+0+71/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 1x,https://dims.apnews.com/dims4/default/076120f/2147483647/strip/true/crop/1200x799+0+71/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/7f42ece/2147483647/strip/true/crop/1200x799+0+70/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 1x,https://dims.apnews.com/dims4/default/deea27c/2147483647/strip/true/crop/1200x799+0+70/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/7560cc1/2147483647/strip/true/crop/1200x799+0+70/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 1x,https://dims.apnews.com/dims4/default/fc6fbc1/2147483647/strip/true/crop/1200x799+0+70/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - City inspectors and police officers outside the Brooklyn borough, N.Y., headquarters of the Chabad movement, Tuesday, Jan. 9, 2024. On Friday, Jan. 12, The Associated Press reported on stories circulating online incorrectly claiming a secret underground tunnel found connected to the Chabad Lubavitch World Headquarters was used for child sex trafficking or other illicit activities.(AP Photo/Jake Offenhartz)" srcset="https://dims.apnews.com/dims4/default/7560cc1/2147483647/strip/true/crop/1200x799+0+70/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 1x,https://dims.apnews.com/dims4/default/fc6fbc1/2147483647/strip/true/crop/1200x799+0+70/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/7560cc1/2147483647/strip/true/crop/1200x799+0+70/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb8%2Ffb%2Fe83abba5e73ec0bc4f2ff1ff0618%2F6cef322b338a4ae09da890e35d34b1c4" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/fact-check-misinformation-0178d231b6374fdb51f4e9922786f1ad"><span class="PagePromoContentIcons-text">NOT REAL NEWS: A look at what didn’t happen this week</span></a>
            </h3>
        </bsp-custom-headline>
    



        


        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1705074256000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    </div>
                
            
        
            
                
                    <div class="PageList-items-item">
                        
                            <div class="PagePromo"
 data-gtm-region="Meta to hide posts about suicide, eating disorders from teens’ Instagram and Facebook feeds"
 data-gtm-topic="No Value" data-align-top data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Meta to hide posts about suicide, eating disorders from teens’ Instagram and Facebook feeds" href="https://apnews.com/article/meta-facebook-instagram-teens-suicide-eating-disorders-83dce63d9beed0a3ad0c53240077099f" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/0710611/2147483647/strip/true/crop/7000x4660+0+4/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 1x,https://dims.apnews.com/dims4/default/3886941/2147483647/strip/true/crop/7000x4660+0+4/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/8d9889e/2147483647/strip/true/crop/7000x4660+0+4/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 1x,https://dims.apnews.com/dims4/default/cf822e3/2147483647/strip/true/crop/7000x4660+0+4/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/dab7871/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 1x,https://dims.apnews.com/dims4/default/880e95f/2147483647/strip/true/crop/7000x4663+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/e98354f/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 1x,https://dims.apnews.com/dims4/default/3e6a127/2147483647/strip/true/crop/7000x4663+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - The Meta logo is seen at the Vivatech show in Paris, France, June 14, 2023. Meta said in a blog post Tuesday, Jan. 9, 2024, that it will start restricting inappropriate content for teenagers&#x27; accounts on Instagram and Facebook, such as posts about suicide, self-harm and eating disorders. (AP Photo/Thibault Camus, File)" srcset="https://dims.apnews.com/dims4/default/e98354f/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 1x,https://dims.apnews.com/dims4/default/3e6a127/2147483647/strip/true/crop/7000x4663+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/e98354f/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F3e%2F82ab4f98f2145d90840cdbe3d605%2Fd8a50abe662b4f88a9e531b0c1abfaa9" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/meta-facebook-instagram-teens-suicide-eating-disorders-83dce63d9beed0a3ad0c53240077099f"><span class="PagePromoContentIcons-text">Meta to hide posts about suicide, eating disorders from teens’ Instagram and Facebook feeds</span></a>
            </h3>
        </bsp-custom-headline>
    



        


        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1704842005000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    </div>
                
            
        
            
                
                    <div class="PageList-items-item">
                        
                            <div class="PagePromo"
 data-gtm-region="TikTok restricts tool used by researchers - and its critics - to assess content on its platform"
 data-gtm-topic="No Value" data-align-top data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="TikTok restricts tool used by researchers - and its critics - to assess content on its platform" href="https://apnews.com/article/tiktok-china-israel-hamas-war-research-7e94266c51b21f48e21b648463e65b0c" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/c38a5c3/2147483647/strip/true/crop/8640x5752+0+4/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 1x,https://dims.apnews.com/dims4/default/b35680b/2147483647/strip/true/crop/8640x5752+0+4/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/6bdcc9c/2147483647/strip/true/crop/8640x5752+0+4/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 1x,https://dims.apnews.com/dims4/default/bb34256/2147483647/strip/true/crop/8640x5752+0+4/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/3d2723f/2147483647/strip/true/crop/8640x5755+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 1x,https://dims.apnews.com/dims4/default/bf6b217/2147483647/strip/true/crop/8640x5755+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/8a1bd5f/2147483647/strip/true/crop/8640x5755+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 1x,https://dims.apnews.com/dims4/default/1587020/2147483647/strip/true/crop/8640x5755+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - The icon for the video sharing TikTok app is seen on a smartphone, Feb. 28, 2023, in Marple Township, Pa. TikTok has restricted one tool researchers use to analyze popular videos, a move that follows a barrage of criticism directed at the social media platform about content related to the Israel-Hamas war and a study that questioned whether the company was suppressing topics that don’t align with the interests of the Chinese government. (AP Photo/Matt Slocum, File)" srcset="https://dims.apnews.com/dims4/default/8a1bd5f/2147483647/strip/true/crop/8640x5755+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 1x,https://dims.apnews.com/dims4/default/1587020/2147483647/strip/true/crop/8640x5755+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/8a1bd5f/2147483647/strip/true/crop/8640x5755+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe2%2F99%2F3925e19a0cbe5576689329ddc30d%2F57ddd7d1267e4523bb400ef4aa5a920f" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/tiktok-china-israel-hamas-war-research-7e94266c51b21f48e21b648463e65b0c"><span class="PagePromoContentIcons-text">TikTok restricts tool used by researchers - and its critics - to assess content on its platform</span></a>
            </h3>
        </bsp-custom-headline>
    



        


        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1704826751000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    </div>
                
            
        
        
    </div>

    

</div>


            
            <div class="TwoColumnContainer7030" data-module
    data-gtm-modulestyle="Two Column Container 70/30" data-gtm-region="No Value"
 data-gtm-topic="No Value" data-has-background style="--color-module-background:transparent;">
    
    <a class="AnchorLink" id="container-module-2-column-d00000" name="container-module-2-column-d00000"></a>





    <div class="TwoColumnContainer7030-container">
        
            <div class="TwoColumnContainer7030-column" data-modulewell>
                
                    
<bsp-list-loadmore class="PageListStandardD" data-module data-gtm-region="No Value"
 data-gtm-topic="No Value" data-show-loadmore="true" data-gtm-modulestyle="List D">
    

    
    <a class="AnchorLink" id="list-module-d40000" name="list-module-d40000"></a>




<div class="PageList-header-alternativedivider"></div> 


    
        <div class="PageList-items" data-with-borders data-list-loadmore-items>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="CEO of Barstool Sports announces she’s leaving, saying ‘the work I came here to do is done’"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true" data-no-media>

    
        
            

        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/barstool-ceo-portnoy-badan-2555e7b6e281ec1357f1931ce8fb7772"><span class="PagePromoContentIcons-text">CEO of Barstool Sports announces she’s leaving, saying ‘the work I came here to do is done’</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/barstool-ceo-portnoy-badan-2555e7b6e281ec1357f1931ce8fb7772"><span class="PagePromoContentIcons-text">Erika Ayers Badan is stepping down as the CEO of Barstool Sports. Badan said in a video posted to social media on Tuesday she feels like the work she went to the company to perform has been completed.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1705450819000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="A Cambodian critic is charged with defamation over comments on Facebook"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true" data-no-media>

    
        
            

        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/cambodia-facebook-free-speech-83174747a5aab12ec2a1b121b2f8c8b4"><span class="PagePromoContentIcons-text">A Cambodian critic is charged with defamation over comments on Facebook</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/cambodia-facebook-free-speech-83174747a5aab12ec2a1b121b2f8c8b4"><span class="PagePromoContentIcons-text">An outspoken critic of Cambodia’s government who was badly hurt by assailants four months ago has been arrested on a defamation complaint brought by a Cabinet member for comments he posted on Facebook.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1704713696000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="NOT REAL NEWS: A look at what didn’t happen this week"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="NOT REAL NEWS: A look at what didn’t happen this week" href="https://apnews.com/article/fact-check-misinformation-epstein-haley-tmobile-58498098b4dacfa7863b1416fbcac6a6" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/b850afd/2147483647/strip/true/crop/5760x3835+0+3/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 1x,https://dims.apnews.com/dims4/default/99a0cad/2147483647/strip/true/crop/5760x3835+0+3/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/6a04d8c/2147483647/strip/true/crop/5760x3835+0+3/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 1x,https://dims.apnews.com/dims4/default/9f18ce2/2147483647/strip/true/crop/5760x3835+0+3/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/623dd50/2147483647/strip/true/crop/5760x3837+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 1x,https://dims.apnews.com/dims4/default/b6a2ae7/2147483647/strip/true/crop/5760x3837+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/b1142b2/2147483647/strip/true/crop/5760x3837+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 1x,https://dims.apnews.com/dims4/default/1d94f4a/2147483647/strip/true/crop/5760x3837+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - This photo provided by the New York State Sex Offender Registry shows Jeffrey Epstein, March 28, 2017. On Friday, Jan. 5, 2024, The Associated Press reported on stories circulating online incorrectly claiming court documents connected to a lawsuit involving financier Jeffrey Epstein that were released this week include details about theoretical physicist Stephen Hawking, who died in 2018, Hawking’s “proclivities” and a sexual encounter involving late night host Jimmy Kimmel. (New York State Sex Offender Registry via AP, File)" srcset="https://dims.apnews.com/dims4/default/b1142b2/2147483647/strip/true/crop/5760x3837+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 1x,https://dims.apnews.com/dims4/default/1d94f4a/2147483647/strip/true/crop/5760x3837+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/b1142b2/2147483647/strip/true/crop/5760x3837+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb6%2Fa2%2F160afba6e06b452bd7e9e9c6e515%2Feda636aa8e524b07ae644a2904c6cde8" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/fact-check-misinformation-epstein-haley-tmobile-58498098b4dacfa7863b1416fbcac6a6"><span class="PagePromoContentIcons-text">NOT REAL NEWS: A look at what didn’t happen this week</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/fact-check-misinformation-epstein-haley-tmobile-58498098b4dacfa7863b1416fbcac6a6"><span class="PagePromoContentIcons-text">A roundup of some of the most popular but completely untrue stories and visuals of the week. None of these are legit, even though they were shared widely on social media.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1704472797000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Official suggests Polish president check social media security after odd tweet from private account"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Official suggests Polish president check social media security after odd tweet from private account" href="https://apnews.com/article/poland-president-duda-tweet-account-balls-cb633cae159e276c7f2c8b7d7ef8a746" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/72968bd/2147483647/strip/true/crop/3647x2428+0+2/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 1x,https://dims.apnews.com/dims4/default/1b3ed82/2147483647/strip/true/crop/3647x2428+0+2/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/75a5b0d/2147483647/strip/true/crop/3647x2428+0+2/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 1x,https://dims.apnews.com/dims4/default/fd5eb34/2147483647/strip/true/crop/3647x2428+0+2/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/eb7acdc/2147483647/strip/true/crop/3647x2429+0+1/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 1x,https://dims.apnews.com/dims4/default/9113364/2147483647/strip/true/crop/3647x2429+0+1/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/e4b20f3/2147483647/strip/true/crop/3647x2429+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 1x,https://dims.apnews.com/dims4/default/9c67a5a/2147483647/strip/true/crop/3647x2429+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Poland&#x27;s President Andrzej Duda adjusts his headphones during a press conference at the Cotroceni Presidential Palace in Bucharest, Romania, Wednesday, Sept. 6, 2023. Poland&#x27;s minister of digital affairs suggested Friday, Jan. 5, 2024, that President Andrzej Duda check the security of access to his social accounts after a bizarre tweet went out that was almost immediately removed. (AP Photo/Andreea Alexandru, File)" srcset="https://dims.apnews.com/dims4/default/e4b20f3/2147483647/strip/true/crop/3647x2429+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 1x,https://dims.apnews.com/dims4/default/9c67a5a/2147483647/strip/true/crop/3647x2429+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/e4b20f3/2147483647/strip/true/crop/3647x2429+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F29%2F1fc9089faed8b972948d3e02ce84%2Fb82d75e0fba14d63af053c90916df9ac" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/poland-president-duda-tweet-account-balls-cb633cae159e276c7f2c8b7d7ef8a746"><span class="PagePromoContentIcons-text">Official suggests Polish president check social media security after odd tweet from private account</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/poland-president-duda-tweet-account-balls-cb633cae159e276c7f2c8b7d7ef8a746"><span class="PagePromoContentIcons-text">Poland’s minister of digital affairs has suggested that President Andrzej Duda check the security of access to his social accounts after a bizarre tweet went out that was almost immediately removed.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1704464516000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Ariana Grande is coming back with her first album since 2020’s ‘Positions’"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Ariana Grande is coming back with her first album since 2020’s ‘Positions’" href="https://apnews.com/article/ariana-grande-new-album-2024-913c75c72883a6274fd3e95d8a16100e" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/55323be/2147483647/strip/true/crop/2379x1584+0+195/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 1x,https://dims.apnews.com/dims4/default/4684433/2147483647/strip/true/crop/2379x1584+0+195/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/7b0b4df/2147483647/strip/true/crop/2379x1584+0+195/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 1x,https://dims.apnews.com/dims4/default/8cfa97a/2147483647/strip/true/crop/2379x1584+0+195/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/0aa7074/2147483647/strip/true/crop/2379x1585+0+195/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 1x,https://dims.apnews.com/dims4/default/8f533af/2147483647/strip/true/crop/2379x1585+0+195/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/dee9d4f/2147483647/strip/true/crop/2379x1585+0+195/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 1x,https://dims.apnews.com/dims4/default/8668ca2/2147483647/strip/true/crop/2379x1585+0+195/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Ariana Grande attends the 13th annual Billboard Women in Music event on Dec. 6, 2018, in New York. On Wednesday, Dec. 27, 2023, Grande announced that she will release a new album in 2024, her seventh studio album and first since 2020&#x27;s &quot;Positions.&quot; (Photo by Evan Agostini/Invision/AP, File)" srcset="https://dims.apnews.com/dims4/default/dee9d4f/2147483647/strip/true/crop/2379x1585+0+195/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 1x,https://dims.apnews.com/dims4/default/8668ca2/2147483647/strip/true/crop/2379x1585+0+195/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/dee9d4f/2147483647/strip/true/crop/2379x1585+0+195/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2d%2Ffd%2Fad8d42d4b38cf19549c44e943d6a%2F425f1f031678457e9d281493f196fe34" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/ariana-grande-new-album-2024-913c75c72883a6274fd3e95d8a16100e"><span class="PagePromoContentIcons-text">Ariana Grande is coming back with her first album since 2020’s ‘Positions’</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/ariana-grande-new-album-2024-913c75c72883a6274fd3e95d8a16100e"><span class="PagePromoContentIcons-text">Thank you, next! Ariana Grande will release a new album in 2024. On Wednesday, the two-time Grammy award winner teased the future full-length album on her Instagram page.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1703711727000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Social media companies made $11 billion in US ad revenue from minors, Harvard study finds"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Social media companies made $11 billion in US ad revenue from minors, Harvard study finds" href="https://apnews.com/article/tiktok-meta-instagram-revenue-teens-harvard-cc9bf875d6f7259ba2aee8805ccdaf3d" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/b6fd87e/2147483647/strip/true/crop/3748x2495+0+2/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 1x,https://dims.apnews.com/dims4/default/a7adef3/2147483647/strip/true/crop/3748x2495+0+2/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/105c59a/2147483647/strip/true/crop/3748x2495+0+2/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 1x,https://dims.apnews.com/dims4/default/42e4dcc/2147483647/strip/true/crop/3748x2495+0+2/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/c17e854/2147483647/strip/true/crop/3748x2497+0+1/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 1x,https://dims.apnews.com/dims4/default/be23280/2147483647/strip/true/crop/3748x2497+0+1/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/480f963/2147483647/strip/true/crop/3748x2497+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 1x,https://dims.apnews.com/dims4/default/b64c86a/2147483647/strip/true/crop/3748x2497+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - This combination of photos shows logos of X, formerly known as Twitter, top left; Snapchat, top right; Facebook, bottom left; and TikTok, bottom right. Social media companies collectively made over $11 billion in U.S. advertising revenue from minors last year, according to a study from the Harvard T.H. Chan School of Public Health released Wednesday, Dec. 27, 2023. (AP Photo, File)" srcset="https://dims.apnews.com/dims4/default/480f963/2147483647/strip/true/crop/3748x2497+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 1x,https://dims.apnews.com/dims4/default/b64c86a/2147483647/strip/true/crop/3748x2497+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/480f963/2147483647/strip/true/crop/3748x2497+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fcf%2F3f%2F1cb898e4b13f07a1ec6e3a71a769%2F4996f761567f43a1b90b1726a03baba6" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/tiktok-meta-instagram-revenue-teens-harvard-cc9bf875d6f7259ba2aee8805ccdaf3d"><span class="PagePromoContentIcons-text">Social media companies made $11 billion in US ad revenue from minors, Harvard study finds</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/tiktok-meta-instagram-revenue-teens-harvard-cc9bf875d6f7259ba2aee8805ccdaf3d"><span class="PagePromoContentIcons-text">A study from Harvard says social media companies collectively made over $11 billion in U.S. advertising revenue from minors last year.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1703707963000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="The rapper Ye, who has a long history of making antisemitic comments, issues an apology in Hebrew"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="The rapper Ye, who has a long history of making antisemitic comments, issues an apology in Hebrew" href="https://apnews.com/article/ye-kanye-antisemitism-apology-40450fa8868c660d954b672d5dfbcc3a" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/c30929b/2147483647/strip/true/crop/2000x1331+0+33/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 1x,https://dims.apnews.com/dims4/default/556c41d/2147483647/strip/true/crop/2000x1331+0+33/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/1edd243/2147483647/strip/true/crop/2000x1331+0+33/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 1x,https://dims.apnews.com/dims4/default/5fc97d3/2147483647/strip/true/crop/2000x1331+0+33/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/0c00c63/2147483647/strip/true/crop/2000x1332+0+32/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 1x,https://dims.apnews.com/dims4/default/db33936/2147483647/strip/true/crop/2000x1332+0+32/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/a11de06/2147483647/strip/true/crop/2000x1332+0+32/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 1x,https://dims.apnews.com/dims4/default/82a892b/2147483647/strip/true/crop/2000x1332+0+32/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Kanye West arrives at the Vanity Fair Oscar Party, Feb. 9, 2020, in Beverly Hills, Calif. Ye, the rapper formerly known as Kanye West, who has a long history of making antisemitic comments, apologized to the Jewish community in an Instagram post written in Hebrew on Tuesday, Dec. 26, 2023. “I sincerely apologize to the Jewish community for any unintended outburst caused by my words or actions,” Ye wrote. (Photo by Evan Agostini/Invision/AP, File)" srcset="https://dims.apnews.com/dims4/default/a11de06/2147483647/strip/true/crop/2000x1332+0+32/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 1x,https://dims.apnews.com/dims4/default/82a892b/2147483647/strip/true/crop/2000x1332+0+32/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/a11de06/2147483647/strip/true/crop/2000x1332+0+32/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F59%2F14%2Fc421f0951f2d30cfc41c754697fa%2F88169abd7d0f4c58a3762f953b419f47" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/ye-kanye-antisemitism-apology-40450fa8868c660d954b672d5dfbcc3a"><span class="PagePromoContentIcons-text">The rapper Ye, who has a long history of making antisemitic comments, issues an apology in Hebrew</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/ye-kanye-antisemitism-apology-40450fa8868c660d954b672d5dfbcc3a"><span class="PagePromoContentIcons-text">The rapper formerly known as Kanye West has a long history of making antisemitic comments and just apologized to the Jewish community in an Instagram post written in Hebrew.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1703622574000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="As social media guardrails fade and AI deepfakes go mainstream, experts warn of impact on elections"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="As social media guardrails fade and AI deepfakes go mainstream, experts warn of impact on elections" href="https://apnews.com/article/election-2024-misinformation-ai-social-media-trump-6119ee6f498db10603b3664e9ad3e87e" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/87f57a3/2147483647/strip/true/crop/4899x3261+0+2/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 1x,https://dims.apnews.com/dims4/default/a51f00a/2147483647/strip/true/crop/4899x3261+0+2/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/a977e1e/2147483647/strip/true/crop/4899x3261+0+2/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 1x,https://dims.apnews.com/dims4/default/16d7fff/2147483647/strip/true/crop/4899x3261+0+2/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/694b97e/2147483647/strip/true/crop/4899x3263+0+1/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 1x,https://dims.apnews.com/dims4/default/bd21c61/2147483647/strip/true/crop/4899x3263+0+1/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/98c5eee/2147483647/strip/true/crop/4899x3263+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 1x,https://dims.apnews.com/dims4/default/b1e1853/2147483647/strip/true/crop/4899x3263+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 2x" loading="lazy"/>

    

    <img class="Image" alt="Oren Etzioni poses for photos at the Allen Institute for Artificial Intelligence where he serves as advisor &amp; board member, Friday, Dec. 8, 2023, in Seattle. Experts are warning that the spread of misinformation could get worse in the coming presidential election contest. The safeguards that attempted to counter the bogus claims the last time are eroding, while the tools and systems that create and spread them are only getting stronger. (AP Photo/John Froschauer)" srcset="https://dims.apnews.com/dims4/default/98c5eee/2147483647/strip/true/crop/4899x3263+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 1x,https://dims.apnews.com/dims4/default/b1e1853/2147483647/strip/true/crop/4899x3263+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/98c5eee/2147483647/strip/true/crop/4899x3263+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F9b%2F69%2Fdf96c834411ec3dc9804299d3c0a%2Fd2f59635ce6d462294fe62ac34c4afdc" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/election-2024-misinformation-ai-social-media-trump-6119ee6f498db10603b3664e9ad3e87e"><span class="PagePromoContentIcons-text">As social media guardrails fade and AI deepfakes go mainstream, experts warn of impact on elections</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/election-2024-misinformation-ai-social-media-trump-6119ee6f498db10603b3664e9ad3e87e"><span class="PagePromoContentIcons-text">Experts are warning that the spread of misinformation could get worse in the coming presidential election contest.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1703624220000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="The year of social media soul-searching: Twitter dies, X and Threads are born and AI gets personal"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="The year of social media soul-searching: Twitter dies, X and Threads are born and AI gets personal" href="https://apnews.com/article/twitter-x-musk-2023-bluesky-tiktok-98e4905027104347c7fd20fdff1641c8" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/28d6408/2147483647/strip/true/crop/6000x3994+0+3/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 1x,https://dims.apnews.com/dims4/default/b2f6e8b/2147483647/strip/true/crop/6000x3994+0+3/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/620815f/2147483647/strip/true/crop/6000x3994+0+3/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 1x,https://dims.apnews.com/dims4/default/1a5d596/2147483647/strip/true/crop/6000x3994+0+3/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/528ee5e/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 1x,https://dims.apnews.com/dims4/default/c3d173f/2147483647/strip/true/crop/6000x3997+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/ac2dc5f/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 1x,https://dims.apnews.com/dims4/default/a86a12a/2147483647/strip/true/crop/6000x3997+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 2x" loading="lazy"/>

    

    <img class="Image" alt="File - Characters removed from a sign on the Twitter headquarters building are piled on a street in San Francisco on July 24, 2023. A little more than a year ago, Elon Musk walked into Twitter&#x27;s San Francisco headquarters, fired its CEO and other top executives and began transforming the social media platform into what&#x27;s now known as X. (AP Photo/Godofredo A. Vásquez, File)" srcset="https://dims.apnews.com/dims4/default/ac2dc5f/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 1x,https://dims.apnews.com/dims4/default/a86a12a/2147483647/strip/true/crop/6000x3997+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/ac2dc5f/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2Fb2%2Fd7cb1b505ebfe454d931b6f06118%2F51235802a8ab4dbf9155a5d10e2e7b32" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/twitter-x-musk-2023-bluesky-tiktok-98e4905027104347c7fd20fdff1641c8"><span class="PagePromoContentIcons-text">The year of social media soul-searching: Twitter dies, X and Threads are born and AI gets personal</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/twitter-x-musk-2023-bluesky-tiktok-98e4905027104347c7fd20fdff1641c8"><span class="PagePromoContentIcons-text">We lost Twitter and got X. We tried out Bluesky and Mastodon (well, some of us did). We fretted about AI bots and teen mental health.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1703811681000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Right-wing social media platform Parler plans to relaunch early next year"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Right-wing social media platform Parler plans to relaunch early next year" href="https://apnews.com/article/parler-relaunch-insurrection-conservative-24033455bdbadb3c07322bb3129feddb" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/0dd75ab/2147483647/strip/true/crop/4798x3194+101+0/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 1x,https://dims.apnews.com/dims4/default/3f6fce8/2147483647/strip/true/crop/4798x3194+101+0/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/12fdc44/2147483647/strip/true/crop/4798x3194+101+0/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 1x,https://dims.apnews.com/dims4/default/e1fad67/2147483647/strip/true/crop/4798x3194+101+0/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/3cf0035/2147483647/strip/true/crop/4795x3194+102+0/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 1x,https://dims.apnews.com/dims4/default/fc47a3e/2147483647/strip/true/crop/4795x3194+102+0/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/499b184/2147483647/strip/true/crop/4795x3194+102+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 1x,https://dims.apnews.com/dims4/default/17a300a/2147483647/strip/true/crop/4795x3194+102+0/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - The website for the social media platform Parler is seen, Jan. 10, 2021, in Berlin. The social media platform Parler, which caters to right-wing voices and was temporarily booted offline following the Jan. 6, 2021, insurrection, is relaunching ahead of the 2024 presidential elections. (Christophe Gateau/dpa via AP, File)" srcset="https://dims.apnews.com/dims4/default/499b184/2147483647/strip/true/crop/4795x3194+102+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 1x,https://dims.apnews.com/dims4/default/17a300a/2147483647/strip/true/crop/4795x3194+102+0/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/499b184/2147483647/strip/true/crop/4795x3194+102+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F5f%2F4d3c95e59078bbbdb6b7ec231a49%2F5e87b46dce8a4f93af9d65bb5e35ebe8" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/parler-relaunch-insurrection-conservative-24033455bdbadb3c07322bb3129feddb"><span class="PagePromoContentIcons-text">Right-wing social media platform Parler plans to relaunch early next year</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/parler-relaunch-insurrection-conservative-24033455bdbadb3c07322bb3129feddb"><span class="PagePromoContentIcons-text">The social media platform Parler is relaunching ahead of next year’s presidential elections. The right-wing friendly app, which was temporarily booted offline following the Jan. 6 insurrection, has been offline since April after it was purchased by the digital media conglomerate Starboard.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1703101380000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Tennis players to get protection from online abuse through new monitoring service"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Tennis players to get protection from online abuse through new monitoring service" href="https://apnews.com/article/tennis-online-abuse-monitoring-service-59217aaaf3b1e86715c7caf25b0febee" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/875ea8a/2147483647/strip/true/crop/7219x4806+0+4/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 1x,https://dims.apnews.com/dims4/default/2ad02a5/2147483647/strip/true/crop/7219x4806+0+4/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/d741942/2147483647/strip/true/crop/7219x4806+0+4/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 1x,https://dims.apnews.com/dims4/default/3473ad6/2147483647/strip/true/crop/7219x4806+0+4/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/38dee82/2147483647/strip/true/crop/7219x4809+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 1x,https://dims.apnews.com/dims4/default/22b0cf5/2147483647/strip/true/crop/7219x4809+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/ece152f/2147483647/strip/true/crop/7219x4809+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 1x,https://dims.apnews.com/dims4/default/56101ed/2147483647/strip/true/crop/7219x4809+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Spectators shade from the sun under an umbrella on Court 10 on day five of the Wimbledon tennis championships in London, Friday, July 7, 2023. A new monitoring service will help protect tennis players from online abuse and threats. In their joint announcement the International Tennis Federation, U.S. Tennis Association, the All England Club and the women&#x27;s WTA tour say the “Threat Matrix” service will operate in 35 languages when it launches Jan. 1. (AP Photo/Alastair Grant, File)" srcset="https://dims.apnews.com/dims4/default/ece152f/2147483647/strip/true/crop/7219x4809+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 1x,https://dims.apnews.com/dims4/default/56101ed/2147483647/strip/true/crop/7219x4809+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/ece152f/2147483647/strip/true/crop/7219x4809+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F50%2F39%2F40524e7ed41c287c1471087d36d3%2Fff60971d7157405eb9984986cfbeb5bb" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/tennis-online-abuse-monitoring-service-59217aaaf3b1e86715c7caf25b0febee"><span class="PagePromoContentIcons-text">Tennis players to get protection from online abuse through new monitoring service</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/tennis-online-abuse-monitoring-service-59217aaaf3b1e86715c7caf25b0febee"><span class="PagePromoContentIcons-text">A new monitoring service will help protect tennis players from online abuse and threats. In their joint announcement the International Tennis Federation, U.S.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1703096531000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="A group representing TikTok, Meta and X sues Utah over strict new limits on app use for minors"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="A group representing TikTok, Meta and X sues Utah over strict new limits on app use for minors" href="https://apnews.com/article/utah-social-media-teens-tiktok-meta-d11e981a04f38e7c2a96bf44226f991f" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/16520f2/2147483647/strip/true/crop/8640x5752+0+4/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 1x,https://dims.apnews.com/dims4/default/93cf7e2/2147483647/strip/true/crop/8640x5752+0+4/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/6fcc99e/2147483647/strip/true/crop/8640x5752+0+4/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 1x,https://dims.apnews.com/dims4/default/3d7c991/2147483647/strip/true/crop/8640x5752+0+4/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/02bfc6e/2147483647/strip/true/crop/8640x5755+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 1x,https://dims.apnews.com/dims4/default/1c020ed/2147483647/strip/true/crop/8640x5755+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/63319b3/2147483647/strip/true/crop/8640x5755+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 1x,https://dims.apnews.com/dims4/default/083322b/2147483647/strip/true/crop/8640x5755+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - The icon for the video sharing TikTok app is seen on a smartphone, Feb. 28, 2023, in Marple Township, Pa. A trade group that represents TikTok and other major tech companies sued Utah on Monday, Dec. 18, over its first-in-the-nation laws requiring children and teens to obtain parental consent to use social media apps. (AP Photo/Matt Slocum, File)" srcset="https://dims.apnews.com/dims4/default/63319b3/2147483647/strip/true/crop/8640x5755+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 1x,https://dims.apnews.com/dims4/default/083322b/2147483647/strip/true/crop/8640x5755+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/63319b3/2147483647/strip/true/crop/8640x5755+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fc1%2Fbcf41843c271a5aa4e00de452c77%2Fcb7237beec1f4595b9a5953a8632d747" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/utah-social-media-teens-tiktok-meta-d11e981a04f38e7c2a96bf44226f991f"><span class="PagePromoContentIcons-text">A group representing TikTok, Meta and X sues Utah over strict new limits on app use for minors</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/utah-social-media-teens-tiktok-meta-d11e981a04f38e7c2a96bf44226f991f"><span class="PagePromoContentIcons-text">A trade group that represents TikTok and other major tech companies has sued Utah over its first-in-the-nation laws requiring children to get parental consent to use social media apps.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1702948164000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Roughly 1 in 6 teens use YouTube and TikTok almost constantly, survey finds"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Roughly 1 in 6 teens use YouTube and TikTok almost constantly, survey finds" href="https://apnews.com/article/teens-social-media-tiktok-snapchat-17e0ff4dec0f2744674cac4e7ae5b3ca" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/b13ef66/2147483647/strip/true/crop/2000x1331+0+334/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 1x,https://dims.apnews.com/dims4/default/ae015a5/2147483647/strip/true/crop/2000x1331+0+334/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/1d67367/2147483647/strip/true/crop/2000x1331+0+334/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 1x,https://dims.apnews.com/dims4/default/3747bc6/2147483647/strip/true/crop/2000x1331+0+334/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/ffa70bd/2147483647/strip/true/crop/2000x1332+0+334/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 1x,https://dims.apnews.com/dims4/default/a4ae2f5/2147483647/strip/true/crop/2000x1332+0+334/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/6c10b96/2147483647/strip/true/crop/2000x1332+0+334/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 1x,https://dims.apnews.com/dims4/default/83658b0/2147483647/strip/true/crop/2000x1332+0+334/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - This combination of 2017-2022 photos shows the logos of Facebook, YouTube, TikTok and Snapchat on mobile devices. Teen usage of social media hasn’t dropped much despite rising concerns about its effects on the mental health of adolescents. That&#x27;s according to a new survey from the Pew Research Institute. But the data also found that roughly one in six teens describe their use of two platforms — YouTube and TikTok — as “almost constant.” Seventy-one percent of teens said they visit YouTube at least daily; 16% described their usage as “almost constant” according to the survey. A slightly larger group — 17% — said they used TikTok almost constantly. (AP Photo, File)" srcset="https://dims.apnews.com/dims4/default/6c10b96/2147483647/strip/true/crop/2000x1332+0+334/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 1x,https://dims.apnews.com/dims4/default/83658b0/2147483647/strip/true/crop/2000x1332+0+334/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/6c10b96/2147483647/strip/true/crop/2000x1332+0+334/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fb9%2F5392c0d41146d44e17c8f34a5b0f%2Fa477fdff2d9d4a998d5cab9d238c78e5" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/teens-social-media-tiktok-snapchat-17e0ff4dec0f2744674cac4e7ae5b3ca"><span class="PagePromoContentIcons-text">Roughly 1 in 6 teens use YouTube and TikTok almost constantly, survey finds</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/teens-social-media-tiktok-snapchat-17e0ff4dec0f2744674cac4e7ae5b3ca"><span class="PagePromoContentIcons-text">Teen usage of social media hasn’t dropped much, despite rising concerns about its effects on the mental health of adolescents.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1702418833000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Elon Musk restores X account of conspiracy theorist Alex Jones"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Elon Musk restores X account of conspiracy theorist Alex Jones" href="https://apnews.com/article/alex-jones-x-account-elon-musk-90cfc990631dec5e8f337167fbe16372" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/74d66ce/2147483647/strip/true/crop/8070x5372+0+4/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 1x,https://dims.apnews.com/dims4/default/04feb77/2147483647/strip/true/crop/8070x5372+0+4/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/670635f/2147483647/strip/true/crop/8070x5372+0+4/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 1x,https://dims.apnews.com/dims4/default/1c12318/2147483647/strip/true/crop/8070x5372+0+4/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/5600301/2147483647/strip/true/crop/8070x5376+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 1x,https://dims.apnews.com/dims4/default/cd3dea5/2147483647/strip/true/crop/8070x5376+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/d3f166a/2147483647/strip/true/crop/8070x5376+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 1x,https://dims.apnews.com/dims4/default/1c236e4/2147483647/strip/true/crop/8070x5376+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Elon Musk reacts during an in-conversation event with Britain&#x27;s Prime Minister Rishi Sunak in London, on Nov. 2, 2023. Elon Musk has restored the X account of conspiracy theorist Alex Jones following a poll posted on the social media platform formerly known as Twitter on Saturday Dec. 9, 2023 that came out in favor of the Infowars host who repeatedly called the 2012 Sandy Hook school shooting a hoax. (AP Photo/Kirsty Wigglesworth, Pool, File)" srcset="https://dims.apnews.com/dims4/default/d3f166a/2147483647/strip/true/crop/8070x5376+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 1x,https://dims.apnews.com/dims4/default/1c236e4/2147483647/strip/true/crop/8070x5376+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/d3f166a/2147483647/strip/true/crop/8070x5376+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd7%2Fb9%2F8b04aace9ac834636932da10bd33%2F047318e34337459ebc8ea3c1a1b2fbc3" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/alex-jones-x-account-elon-musk-90cfc990631dec5e8f337167fbe16372"><span class="PagePromoContentIcons-text">Elon Musk restores X account of conspiracy theorist Alex Jones</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/alex-jones-x-account-elon-musk-90cfc990631dec5e8f337167fbe16372"><span class="PagePromoContentIcons-text">Elon Musk has restored the X account of conspiracy theorist Alex Jones. It comes after Musk posted a poll this weekend on the social media platform formerly known as Twitter that came out 70% in favor of the Infowars host, who repeatedly has called the 2012 Sandy Hook school shooting a hoax.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1702206499000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="A military-themed brewery wants to open in a big Navy town. An ex-SEAL is getting in the way"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="A military-themed brewery wants to open in a big Navy town. An ex-SEAL is getting in the way" href="https://apnews.com/article/norfolk-virginia-armed-forces-brewing-oneill-permit-6e71e20b0989b8a5ff5c91c76b2bfc95" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/329116c/2147483647/strip/true/crop/3999x2662+1+0/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 1x,https://dims.apnews.com/dims4/default/2d55724/2147483647/strip/true/crop/3999x2662+1+0/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/5fbf087/2147483647/strip/true/crop/3999x2662+1+0/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 1x,https://dims.apnews.com/dims4/default/d7d93a9/2147483647/strip/true/crop/3999x2662+1+0/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/9b1ff11/2147483647/strip/true/crop/3996x2662+2+0/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 1x,https://dims.apnews.com/dims4/default/2a19b82/2147483647/strip/true/crop/3996x2662+2+0/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/758e7cd/2147483647/strip/true/crop/3996x2662+2+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 1x,https://dims.apnews.com/dims4/default/9707e9c/2147483647/strip/true/crop/3996x2662+2+0/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE -- Former Navy SEAL Robert O&#x27;Neill, who claims to have fatally shot Osama Bin Laden, talks about joining the service at the Richard Nixon Presidential Library and Museum in Yorba Linda, Calif., Wednesday, July 26, 2017. O&#x27;Neill has a small ownership stake in Armed Forces Brewing Company and has served as its brand ambassador. His recent social media complaint about a Navy sailor who performs as a drag queen and a police report alleging he used a racial slur are fueling efforts to stop the brewery from opening in military friendly Norfolk, Va. (Matt Masin/The Orange County Register via AP)" srcset="https://dims.apnews.com/dims4/default/758e7cd/2147483647/strip/true/crop/3996x2662+2+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 1x,https://dims.apnews.com/dims4/default/9707e9c/2147483647/strip/true/crop/3996x2662+2+0/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/758e7cd/2147483647/strip/true/crop/3996x2662+2+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fde%2F4f%2F535fe2012d45c628716d5cb26675%2Fd157e8b0e70b48ab9a5a07eb7ea9ecd8" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/norfolk-virginia-armed-forces-brewing-oneill-permit-6e71e20b0989b8a5ff5c91c76b2bfc95"><span class="PagePromoContentIcons-text">A military-themed brewery wants to open in a big Navy town. An ex-SEAL is getting in the way</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/norfolk-virginia-armed-forces-brewing-oneill-permit-6e71e20b0989b8a5ff5c91c76b2bfc95"><span class="PagePromoContentIcons-text">A former U.S. Navy SEAL who says he shot Osama bin Laden is at the center of a much different fight over plans to open a military-themed brewery in Norfolk, Virginia.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1702184601000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Missouri House Democrat is kicked off committees after posting photo with alleged Holocaust denier"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true" data-no-media>

    
        
            

        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/unsicker-missouri-house-democrat-committee-removal-1e41101020ef9e2a13860fdc9cd7459c"><span class="PagePromoContentIcons-text">Missouri House Democrat is kicked off committees after posting photo with alleged Holocaust denier</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/unsicker-missouri-house-democrat-committee-removal-1e41101020ef9e2a13860fdc9cd7459c"><span class="PagePromoContentIcons-text">A Missouri House Democrat has been removed from committee assignments after social media posts showed her with a man cited by the Anti-Defamation League as a Holocaust denier.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1702063285000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Meta makes end-to-end encryption a default on Facebook Messenger"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Meta makes end-to-end encryption a default on Facebook Messenger" href="https://apnews.com/article/meta-messenger-full-encryption-2ab384258750fd83cc3b5d9d8622f0f4" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/162c674/2147483647/strip/true/crop/7000x4660+0+4/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 1x,https://dims.apnews.com/dims4/default/640d236/2147483647/strip/true/crop/7000x4660+0+4/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/9447c5c/2147483647/strip/true/crop/7000x4660+0+4/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 1x,https://dims.apnews.com/dims4/default/212dc46/2147483647/strip/true/crop/7000x4660+0+4/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/ce4bf98/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 1x,https://dims.apnews.com/dims4/default/2600cd3/2147483647/strip/true/crop/7000x4663+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/d0550e6/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 1x,https://dims.apnews.com/dims4/default/bb56d5a/2147483647/strip/true/crop/7000x4663+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 2x" loading="lazy"/>

    

    <img class="Image" alt="File - The META logo is seen at the Vivatech show in Paris in Paris, France on June 14, 2023. Meta is rolling out end-to-end encryption for calls and messages across its Facebook and Messenger platforms, the company announced Thursday.(AP Photo/Thibault Camus, File)" srcset="https://dims.apnews.com/dims4/default/d0550e6/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 1x,https://dims.apnews.com/dims4/default/bb56d5a/2147483647/strip/true/crop/7000x4663+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/d0550e6/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F91%2F59%2Fb214c03d247df17626c056b5e8c5%2F1a7f60e7b5434d809b0891a69bdf1b3f" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/meta-messenger-full-encryption-2ab384258750fd83cc3b5d9d8622f0f4"><span class="PagePromoContentIcons-text">Meta makes end-to-end encryption a default on Facebook Messenger</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/meta-messenger-full-encryption-2ab384258750fd83cc3b5d9d8622f0f4"><span class="PagePromoContentIcons-text">Meta is rolling out end-to-end encryption for calls and messages across its Facebook and Messenger platforms, the company announced Thursday.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1701968984000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Facebook parent sued by New Mexico alleging it has failed to shield children from predators"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Facebook parent sued by New Mexico alleging it has failed to shield children from predators" href="https://apnews.com/article/facebook-instagram-mark-zuckerberg-child-sexual-abuse-lawsuit-7257a60d768f59ce16a4d925b7ebfa40" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/ac9d954/2147483647/strip/true/crop/5370x3575+0+3/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 1x,https://dims.apnews.com/dims4/default/1402ebf/2147483647/strip/true/crop/5370x3575+0+3/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/2857bac/2147483647/strip/true/crop/5370x3575+0+3/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 1x,https://dims.apnews.com/dims4/default/12c45a0/2147483647/strip/true/crop/5370x3575+0+3/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/fb0a1ad/2147483647/strip/true/crop/5370x3577+0+1/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 1x,https://dims.apnews.com/dims4/default/ca0316f/2147483647/strip/true/crop/5370x3577+0+1/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/956cdf7/2147483647/strip/true/crop/5370x3577+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 1x,https://dims.apnews.com/dims4/default/0df9e50/2147483647/strip/true/crop/5370x3577+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Meta&#x27;s logo is seen on a sign, Nov. 9, 2022, at the company&#x27;s headquarters in Menlo Park, Calif. Facebook and Instagram fail to protect underage users from exposure to child sexual abuse material and let adults solicit pornographic imagery from them, New Mexico&#x27;s attorney general alleges in a lawsuit filed Tuesday, Dec. 5, 2023, that follows an undercover online investigation into Meta’s social media platforms. (AP Photo/Godofredo A. Vásquez, File)" srcset="https://dims.apnews.com/dims4/default/956cdf7/2147483647/strip/true/crop/5370x3577+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 1x,https://dims.apnews.com/dims4/default/0df9e50/2147483647/strip/true/crop/5370x3577+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/956cdf7/2147483647/strip/true/crop/5370x3577+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F33%2Fc9%2F47ecb0022e71aa70bec684667089%2F6bb5d90d51914d7f84a04be341396d22" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/facebook-instagram-mark-zuckerberg-child-sexual-abuse-lawsuit-7257a60d768f59ce16a4d925b7ebfa40"><span class="PagePromoContentIcons-text">Facebook parent sued by New Mexico alleging it has failed to shield children from predators</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/facebook-instagram-mark-zuckerberg-child-sexual-abuse-lawsuit-7257a60d768f59ce16a4d925b7ebfa40"><span class="PagePromoContentIcons-text">New Mexico’s attorney general is suing the parent company of Facebook and Instagram claiming it failed to protect underage users from exposure to child sexual abuse material and let adults solicit pornographic imagery from them.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1701893106000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Spanish newspaper association files multimillion-euro suit against Meta over advertising practices"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Spanish newspaper association files multimillion-euro suit against Meta over advertising practices" href="https://apnews.com/article/spain-meta-lawsuit-data-protection-advertising-newspapers-515bccf08cbcbf045be82144a42f7bee" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/238cba3/2147483647/strip/true/crop/7000x4660+0+4/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 1x,https://dims.apnews.com/dims4/default/1d4c0dd/2147483647/strip/true/crop/7000x4660+0+4/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/37fc866/2147483647/strip/true/crop/7000x4660+0+4/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 1x,https://dims.apnews.com/dims4/default/6f3a5c4/2147483647/strip/true/crop/7000x4660+0+4/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/978f9b3/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 1x,https://dims.apnews.com/dims4/default/23dc2ef/2147483647/strip/true/crop/7000x4663+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/3d677b8/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 1x,https://dims.apnews.com/dims4/default/3038995/2147483647/strip/true/crop/7000x4663+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - The Meta logo is seen at the Vivatech show in Paris, June 14, 2023. A Spanish association representing more than 80 newspapers has filed a suit against Facebook parent company META for unfair competition in online advertising by allegedly ignoring European Union rules on data protection. (AP Photo/Thibault Camus, File)" srcset="https://dims.apnews.com/dims4/default/3d677b8/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 1x,https://dims.apnews.com/dims4/default/3038995/2147483647/strip/true/crop/7000x4663+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/3d677b8/2147483647/strip/true/crop/7000x4663+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa9%2F54%2F05996236f6ebca9996826e624d13%2F11852007b7384d1b8507c994aa699ce6" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/spain-meta-lawsuit-data-protection-advertising-newspapers-515bccf08cbcbf045be82144a42f7bee"><span class="PagePromoContentIcons-text">Spanish newspaper association files multimillion-euro suit against Meta over advertising practices</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/spain-meta-lawsuit-data-protection-advertising-newspapers-515bccf08cbcbf045be82144a42f7bee"><span class="PagePromoContentIcons-text">A Spanish association representing more than 80 newspapers has filed a lawsuit against Facebook parent Meta accusing it of unfair competition in online advertising by allegedly ignoring European Union rules on data protection.The Information Media Association says it is demanding 550 million euros (</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1701696824000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Euro 2024 draw ceremony interrupted by noises in German concert hall in claimed social media prank"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true" data-no-media>

    
        
            

        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/euro-2024-draw-noises-1ff87aaf557bb3497a5ead3f2742b972"><span class="PagePromoContentIcons-text">Euro 2024 draw ceremony interrupted by noises in German concert hall in claimed social media prank</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/euro-2024-draw-noises-1ff87aaf557bb3497a5ead3f2742b972"><span class="PagePromoContentIcons-text">The draw ceremony for the European Championship in men’s soccer has been disrupted by unexplained noises that competed for attention with the team names being read out on stage in Hamburg.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1701563242000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Thousands of fake Facebook accounts shut down by Meta were primed to polarize voters ahead of 2024"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Thousands of fake Facebook accounts shut down by Meta were primed to polarize voters ahead of 2024" href="https://apnews.com/article/meta-facebook-2024-election-misinformation-china-956019723463918043e060ac577270f7" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/3ea635d/2147483647/strip/true/crop/6000x3994+0+3/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 1x,https://dims.apnews.com/dims4/default/711efb4/2147483647/strip/true/crop/6000x3994+0+3/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/9fe788b/2147483647/strip/true/crop/6000x3994+0+3/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 1x,https://dims.apnews.com/dims4/default/d06563e/2147483647/strip/true/crop/6000x3994+0+3/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/6b87ddf/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 1x,https://dims.apnews.com/dims4/default/d5576e1/2147483647/strip/true/crop/6000x3997+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/74e0df8/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 1x,https://dims.apnews.com/dims4/default/7d119f0/2147483647/strip/true/crop/6000x3997+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Facebook&#x27;s Meta logo sign is seen at the company headquarters in Menlo Park, Calif., on, Oct. 28, 2021. Officials at Meta say they have found and disabled a network of thousands of fake Facebook accounts linked to China that were used to spread partisan content in the U.S. The accounts disclosed on Nov. 30, 2023, were designed to look like they were run by everyday Americans. (AP Photo/Tony Avelar, File)" srcset="https://dims.apnews.com/dims4/default/74e0df8/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 1x,https://dims.apnews.com/dims4/default/7d119f0/2147483647/strip/true/crop/6000x3997+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/74e0df8/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4f%2Fe9%2F058c4d00419516c5139e313b8140%2F92277d3578a34445b807d37a84736294" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/meta-facebook-2024-election-misinformation-china-956019723463918043e060ac577270f7"><span class="PagePromoContentIcons-text">Thousands of fake Facebook accounts shut down by Meta were primed to polarize voters ahead of 2024</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/meta-facebook-2024-election-misinformation-china-956019723463918043e060ac577270f7"><span class="PagePromoContentIcons-text">Meta says it has found and disabled thousands of fake Facebook accounts linked to China that were used to spread politically partisan content in the United States before next year’s election.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1701353344000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Canada says Google will pay $74 million annually to Canadian news industry under new online law"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Canada says Google will pay $74 million annually to Canadian news industry under new online law" href="https://apnews.com/article/google-news-canada-0c12334603bad9d150e6a7ade7002eb1" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/b59ae27/2147483647/strip/true/crop/7852x5227+381+0/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 1x,https://dims.apnews.com/dims4/default/20428ad/2147483647/strip/true/crop/7852x5227+381+0/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/448d537/2147483647/strip/true/crop/7852x5227+381+0/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 1x,https://dims.apnews.com/dims4/default/eee962f/2147483647/strip/true/crop/7852x5227+381+0/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/582cc0c/2147483647/strip/true/crop/7847x5227+383+0/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 1x,https://dims.apnews.com/dims4/default/491d204/2147483647/strip/true/crop/7847x5227+383+0/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/231d0e4/2147483647/strip/true/crop/7847x5227+383+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 1x,https://dims.apnews.com/dims4/default/1b648f7/2147483647/strip/true/crop/7847x5227+383+0/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 2x" loading="lazy"/>

    

    <img class="Image" alt="Members of Parliament and reporters listen as Canadian Heritage Minister Pascale St-Onge speaks about a deal with Google, Wednesday, Nov. 29, 2023, in the Foyer of the House of Commons in Ottawa, Ontario. Pascale St-Onge said that Google will contribute $100 million Canadian (US$74 million) — indexed to inflation — in financial support annually for a wide range of news businesses across the country. (Adrian Wyld/The Canadian Press via AP)" srcset="https://dims.apnews.com/dims4/default/231d0e4/2147483647/strip/true/crop/7847x5227+383+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 1x,https://dims.apnews.com/dims4/default/1b648f7/2147483647/strip/true/crop/7847x5227+383+0/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/231d0e4/2147483647/strip/true/crop/7847x5227+383+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F97%2F52%2F8412ab045d75696b46a2c5237cbc%2F3df581fbce974df2923ece994f1aeed7" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/google-news-canada-0c12334603bad9d150e6a7ade7002eb1"><span class="PagePromoContentIcons-text">Canada says Google will pay $74 million annually to Canadian news industry under new online law</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/google-news-canada-0c12334603bad9d150e6a7ade7002eb1"><span class="PagePromoContentIcons-text">Canada’s government says it has reached a deal with Google for the company to contribute $100 million Canadian dollars annually to the country’s news industry.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1701288311000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Fake AI-generated woman on tech conference agenda leads Microsoft and Amazon execs to drop out"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true" data-no-media>

    
        
            

        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/tech-conference-fake-women-ai-generated-devternity-98ed551e90ec49e81589cc928715ae3c"><span class="PagePromoContentIcons-text">Fake AI-generated woman on tech conference agenda leads Microsoft and Amazon execs to drop out</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/tech-conference-fake-women-ai-generated-devternity-98ed551e90ec49e81589cc928715ae3c"><span class="PagePromoContentIcons-text">Tech executives at Microsoft and Amazon have dropped out of an upcoming software conference after at least one of the women on the agenda turned out to be fake.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1701207604000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Court document claims Meta knowingly designed its platforms to hook kids, reports say"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Court document claims Meta knowingly designed its platforms to hook kids, reports say" href="https://apnews.com/article/instagram-facebook-underage-users-meta-04c8797da2c7ff2021931536d324faea" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/41bf4d2/2147483647/strip/true/crop/5100x3395+0+2/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 1x,https://dims.apnews.com/dims4/default/dd45822/2147483647/strip/true/crop/5100x3395+0+2/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/82289bb/2147483647/strip/true/crop/5100x3395+0+2/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 1x,https://dims.apnews.com/dims4/default/bc1e412/2147483647/strip/true/crop/5100x3395+0+2/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/c99bdb2/2147483647/strip/true/crop/5100x3397+0+1/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 1x,https://dims.apnews.com/dims4/default/453c262/2147483647/strip/true/crop/5100x3397+0+1/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/c3201a1/2147483647/strip/true/crop/5100x3397+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 1x,https://dims.apnews.com/dims4/default/4b8aee1/2147483647/strip/true/crop/5100x3397+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Attendees visit the Meta booth at the Game Developers Conference 2023 in San Francisco on March 22, 2023. Facebook parent Meta Platforms deliberately engineered its social platforms to hook kids and knew — but never disclosed — that it had received millions of complaints about underage users on Instagram but only disabled a fraction of those accounts, according to a newly unsealed legal complaint described in reports from the Wall Street Journal and the New York Times. (AP Photo/Jeff Chiu, File)" srcset="https://dims.apnews.com/dims4/default/c3201a1/2147483647/strip/true/crop/5100x3397+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 1x,https://dims.apnews.com/dims4/default/4b8aee1/2147483647/strip/true/crop/5100x3397+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/c3201a1/2147483647/strip/true/crop/5100x3397+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F72%2Fd6103c4f37d7a52072df00d3ee6a%2F3de8b461f19c457da58e1f6e2c9039fb" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/instagram-facebook-underage-users-meta-04c8797da2c7ff2021931536d324faea"><span class="PagePromoContentIcons-text">Court document claims Meta knowingly designed its platforms to hook kids, reports say</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/instagram-facebook-underage-users-meta-04c8797da2c7ff2021931536d324faea"><span class="PagePromoContentIcons-text">A newly unsealed legal complaint claims Facebook parent Meta Platforms deliberately engineered its social platforms to hook kids.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1701058446000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Russia puts the spokesman for Facebook owner Meta on a wanted list"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Russia puts the spokesman for Facebook owner Meta on a wanted list" href="https://apnews.com/article/russia-andy-stone-meta-wanted-facebook-instagram-71e9b7b3528af73c65b5c63667bd52ac" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/b1899d3/2147483647/strip/true/crop/5370x3575+0+3/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 1x,https://dims.apnews.com/dims4/default/7bed43c/2147483647/strip/true/crop/5370x3575+0+3/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/8f23eec/2147483647/strip/true/crop/5370x3575+0+3/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 1x,https://dims.apnews.com/dims4/default/89feb46/2147483647/strip/true/crop/5370x3575+0+3/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/a31f9ac/2147483647/strip/true/crop/5370x3577+0+1/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 1x,https://dims.apnews.com/dims4/default/cf188ba/2147483647/strip/true/crop/5370x3577+0+1/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/e08cd46/2147483647/strip/true/crop/5370x3577+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 1x,https://dims.apnews.com/dims4/default/29776b8/2147483647/strip/true/crop/5370x3577+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Meta&#x27;s logo can be seen on a sign at the company&#x27;s headquarters in Menlo Park, Calif., Nov. 9, 2022. Russia has added the spokesman of U.S. tech giant Meta, which owns Facebook and Instagram, to a wanted list, according to an online database maintained by the country’s interior ministry. Russian state agency Tass and independent news outlet Mediazona first reported on Andy Stone’s inclusion on the list on Sunday. (AP Photo/Godofredo A. Vásquez, File)" srcset="https://dims.apnews.com/dims4/default/e08cd46/2147483647/strip/true/crop/5370x3577+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 1x,https://dims.apnews.com/dims4/default/29776b8/2147483647/strip/true/crop/5370x3577+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/e08cd46/2147483647/strip/true/crop/5370x3577+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2Fd8%2F88875f5d3a99cdb724010eec587f%2F9c98fab0651a46b6a79d7138bc872bc7" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/russia-andy-stone-meta-wanted-facebook-instagram-71e9b7b3528af73c65b5c63667bd52ac"><span class="PagePromoContentIcons-text">Russia puts the spokesman for Facebook owner Meta on a wanted list</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/russia-andy-stone-meta-wanted-facebook-instagram-71e9b7b3528af73c65b5c63667bd52ac"><span class="PagePromoContentIcons-text">Russia’s interior ministry has added the spokesman of U.S. technology company Meta to a wanted list according to its online database.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1701031255000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Air Force base defends itself from claims of political bias over conservative rally warning"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true" data-no-media>

    
        
            

        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/minot-air-force-base-rally-turning-point-21913e1e94cd0b4a9ad3f05d6dc407c9"><span class="PagePromoContentIcons-text">Air Force base defends itself from claims of political bias over conservative rally warning</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/minot-air-force-base-rally-turning-point-21913e1e94cd0b4a9ad3f05d6dc407c9"><span class="PagePromoContentIcons-text">The Minot Air Force Base in North Dakota is defending itself from claims of political bias after an unofficial message cautioning airmen to not attend a conservative political rally began circulating on social media.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1700687704000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Maryland hate crime commission member suspended for anti-Israel social media posts"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Maryland hate crime commission member suspended for anti-Israel social media posts" href="https://apnews.com/article/maryland-hate-crime-commission-member-suspended-d0894c2fef238c370403516db5802862" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/8da7903/2147483647/strip/true/crop/4312x2871+0+2/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 1x,https://dims.apnews.com/dims4/default/5f152ff/2147483647/strip/true/crop/4312x2871+0+2/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/c0bbd92/2147483647/strip/true/crop/4312x2871+0+2/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 1x,https://dims.apnews.com/dims4/default/0552e1d/2147483647/strip/true/crop/4312x2871+0+2/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/d060d86/2147483647/strip/true/crop/4312x2872+0+1/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 1x,https://dims.apnews.com/dims4/default/62bb508/2147483647/strip/true/crop/4312x2872+0+1/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/88e42af/2147483647/strip/true/crop/4312x2872+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 1x,https://dims.apnews.com/dims4/default/e3cb44b/2147483647/strip/true/crop/4312x2872+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Zainab Chaudry joins other demonstrators outside the Supreme Court in Washington, Wednesday, Feb. 25, 2015. The Maryland Attorney General this week, Tuesday, Nov. 21, 2023, suspended Chaudry, a member of the state’s new commission aimed at addressing hate crimes, after she posted on social media criticizing the recent actions of Israel in Gaza. (AP Photo/Pablo Martinez Monsivais, File)" srcset="https://dims.apnews.com/dims4/default/88e42af/2147483647/strip/true/crop/4312x2872+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 1x,https://dims.apnews.com/dims4/default/e3cb44b/2147483647/strip/true/crop/4312x2872+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/88e42af/2147483647/strip/true/crop/4312x2872+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F06%2F60%2F612d0873e609ebeba8403ae27835%2Fb0b14c01b98f4e9393751475a728800d" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/maryland-hate-crime-commission-member-suspended-d0894c2fef238c370403516db5802862"><span class="PagePromoContentIcons-text">Maryland hate crime commission member suspended for anti-Israel social media posts</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/maryland-hate-crime-commission-member-suspended-d0894c2fef238c370403516db5802862"><span class="PagePromoContentIcons-text">The Maryland Attorney General has suspended a member of the state’s new commission aimed at addressing hate crimes after she posted on social media criticizing the recent actions of Israel in Gaza.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1700676997000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="OpenAI’s unusual nonprofit structure led to dramatic ouster of sought-after CEO"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="OpenAI’s unusual nonprofit structure led to dramatic ouster of sought-after CEO" href="https://apnews.com/article/openai-chatgpt-board-fired-sam-altman-dd6a15228fd11aa3b9bec2914c095271" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/84df5fa/2147483647/strip/true/crop/3803x2532+0+2/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 1x,https://dims.apnews.com/dims4/default/4ddead1/2147483647/strip/true/crop/3803x2532+0+2/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/5a636a3/2147483647/strip/true/crop/3803x2532+0+2/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 1x,https://dims.apnews.com/dims4/default/eafaca6/2147483647/strip/true/crop/3803x2532+0+2/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/2d3bf51/2147483647/strip/true/crop/3803x2533+0+1/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 1x,https://dims.apnews.com/dims4/default/7cb105d/2147483647/strip/true/crop/3803x2533+0+1/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/3b5f5ed/2147483647/strip/true/crop/3803x2533+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 1x,https://dims.apnews.com/dims4/default/6188b75/2147483647/strip/true/crop/3803x2533+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 2x" loading="lazy"/>

    

    <img class="Image" alt="The OpenAI logo appears on a mobile phone in front of a screen showing a portion of the company website in this photo taken on Tuesday, Nov. 21, 2023 in New York. (AP Photo/Peter Morgan)" srcset="https://dims.apnews.com/dims4/default/3b5f5ed/2147483647/strip/true/crop/3803x2533+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 1x,https://dims.apnews.com/dims4/default/6188b75/2147483647/strip/true/crop/3803x2533+0+1/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/3b5f5ed/2147483647/strip/true/crop/3803x2533+0+1/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F55%2F8e%2F53efefdf4e701f72183291f66776%2F0e5b134fc8314222a46ec37c516f248f" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/openai-chatgpt-board-fired-sam-altman-dd6a15228fd11aa3b9bec2914c095271"><span class="PagePromoContentIcons-text">OpenAI’s unusual nonprofit structure led to dramatic ouster of sought-after CEO</span><span class="PagePromoContentIcons-icon Link-icon" data-type="video"><svg><use xlink:href="#play-icon"></use></svg></span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/openai-chatgpt-board-fired-sam-altman-dd6a15228fd11aa3b9bec2914c095271"><span class="PagePromoContentIcons-text">Unlike Google, Facebook and countless other tech giants, the company behind ChatGPT was not created to be a business.</span><span class="PagePromoContentIcons-icon Link-icon" data-type="video"><svg><use xlink:href="#play-icon"></use></svg></span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1700606660000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="Taylor Swift postpones Rio de Janeiro show, citing record heat a day after fan dies during concert"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="Taylor Swift postpones Rio de Janeiro show, citing record heat a day after fan dies during concert" href="https://apnews.com/article/taylor-swift-rio-fan-dies-water-b69ad355301a7ae6edebd3255c94a167" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/16408dc/2147483647/strip/true/crop/4781x3183+0+12/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 1x,https://dims.apnews.com/dims4/default/9cad84d/2147483647/strip/true/crop/4781x3183+0+12/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/8c11254/2147483647/strip/true/crop/4781x3183+0+12/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 1x,https://dims.apnews.com/dims4/default/fd7ab33/2147483647/strip/true/crop/4781x3183+0+12/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/e485672/2147483647/strip/true/crop/4781x3185+0+11/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 1x,https://dims.apnews.com/dims4/default/27bf914/2147483647/strip/true/crop/4781x3185+0+11/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/81109b0/2147483647/strip/true/crop/4781x3185+0+11/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 1x,https://dims.apnews.com/dims4/default/54d951d/2147483647/strip/true/crop/4781x3185+0+11/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 2x" loading="lazy"/>

    

    <img class="Image" alt="Taylor Swift fans wait for the doors of Nilton Santos Olympic stadium to open for her Eras Tour concert amid a heat wave in Rio de Janeiro, Brazil, Saturday, Nov. 18, 2023. A 23-year-old Taylor Swift fan died at the singer&#x27;s Eras Tour concert in Rio de Janeiro Friday night, according to a statement from the show&#x27;s organizers in Brazil. (AP Photo/Silvia Izquierdo)" srcset="https://dims.apnews.com/dims4/default/81109b0/2147483647/strip/true/crop/4781x3185+0+11/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 1x,https://dims.apnews.com/dims4/default/54d951d/2147483647/strip/true/crop/4781x3185+0+11/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/81109b0/2147483647/strip/true/crop/4781x3185+0+11/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F20%2Fd3dddbb113a3039fd7524670d974%2F6e90221c76a34bdb9c96d46bfb9b5ae9" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/taylor-swift-rio-fan-dies-water-b69ad355301a7ae6edebd3255c94a167"><span class="PagePromoContentIcons-text">Taylor Swift postpones Rio de Janeiro show, citing record heat a day after fan dies during concert</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/taylor-swift-rio-fan-dies-water-b69ad355301a7ae6edebd3255c94a167"><span class="PagePromoContentIcons-text">Taylor Swift has postponed a concert in Rio de Janeiro after a 23-year-old fan died during her Friday night show.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1700346377000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
                <div class="PageList-items-item">
                    
                        
                            <div class="PagePromo"
 data-gtm-region="NFL host Charissa Thompson says on social media she didn’t fabricate quotes by players or coaches"
 data-gtm-topic="No Value" data-origintemplate="PagePromo" data-mobile-alt-layout="true">

    
        
            
    <div class="PagePromo-media"><a class="Link" aria-label="NFL host Charissa Thompson says on social media she didn’t fabricate quotes by players or coaches" href="https://apnews.com/article/charissa-thompson-nfl-sideline-reports-47757f5ce4e80fc208f63acec7bfd9bf" ><picture data-crop="imgEn-small-3x2">
    
        <source media="(min-width: 768px)" type="image/webp"  width="350" height="233" srcset="https://dims.apnews.com/dims4/default/11ff647/2147483647/strip/true/crop/6000x3994+0+3/resize/350x233!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 1x,https://dims.apnews.com/dims4/default/9f081e9/2147483647/strip/true/crop/6000x3994+0+3/resize/700x466!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 2x" loading="lazy"/>

    

    
        <source media="(min-width: 768px)" width="350" height="233" srcset="https://dims.apnews.com/dims4/default/abb1db6/2147483647/strip/true/crop/6000x3994+0+3/resize/350x233!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 1x,https://dims.apnews.com/dims4/default/3a123de/2147483647/strip/true/crop/6000x3994+0+3/resize/700x466!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 2x" loading="lazy"/>

    

    
        <source type="image/webp"  width="599" height="399" srcset="https://dims.apnews.com/dims4/default/5c05270/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 1x,https://dims.apnews.com/dims4/default/7b5073b/2147483647/strip/true/crop/6000x3997+0+2/resize/1198x798!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 2x" loading="lazy"/>

    

    
        <source width="599" height="399" srcset="https://dims.apnews.com/dims4/default/6f9bff7/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 1x,https://dims.apnews.com/dims4/default/3c5b725/2147483647/strip/true/crop/6000x3997+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 2x" loading="lazy"/>

    

    <img class="Image" alt="FILE - Amazon Prime Thursday Night Football commentator Charissa Thompson speaks before an NFL football game between the New Orleans Saints and the Jacksonville Jaguars, Oct. 19, 2023, in New Orleans. Fox Sports and Amazon host Thompson took to social media on Friday, Nov. 17, to clarify remarks she had made on a podcast earlier this week when she said “she made up” sideline reports on NFL games. Thompson, who hosts Fox&#x27;s NFL Kickoff Sunday show and Amazon Prime Video&#x27;s “Thursday Night Football” coverage, said in a post Friday that she did not make up quotes from players or coaches, and that what she would report were her observations on the sidelines. (AP Photo/Tyler Kaufman, File)" srcset="https://dims.apnews.com/dims4/default/6f9bff7/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 1x,https://dims.apnews.com/dims4/default/3c5b725/2147483647/strip/true/crop/6000x3997+0+2/resize/1198x798!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c 2x" width="599" height="399" src="https://dims.apnews.com/dims4/default/6f9bff7/2147483647/strip/true/crop/6000x3997+0+2/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F88%2Fbb%2F7c3b62fb5380e076d6c93957718c%2F5a852cc4fdf647359aeddc3e80c0cc4c" loading="lazy"
    >
</picture>
</a></div>


        
    

    <div class="PagePromo-content">
        
        
        

        
    
        <bsp-custom-headline custom-headline="h3" >
            <h3 class="PagePromo-title">
                <a class="Link " href="https://apnews.com/article/charissa-thompson-nfl-sideline-reports-47757f5ce4e80fc208f63acec7bfd9bf"><span class="PagePromoContentIcons-text">NFL host Charissa Thompson says on social media she didn’t fabricate quotes by players or coaches</span></a>
            </h3>
        </bsp-custom-headline>
    



        
    <div class="PagePromo-description">
         <a class="Link " href="https://apnews.com/article/charissa-thompson-nfl-sideline-reports-47757f5ce4e80fc208f63acec7bfd9bf"><span class="PagePromoContentIcons-text">Fox Sports and Amazon host Charissa Thompson has taken to social media to clarify her comments on a podcast earlier this week that she “would make up” sideline reports during NFL games.</span></a>
    </div>



        
    
    
        <div class="PagePromo-byline">
            <div class="PagePromo-date">
                <bsp-timestamp data-timestamp="1700272424000" data-recent-thresholdinhours="1">
                    
                        <template data-date-tpl>Updated [hour]:[minute] [AMPM] [timezone], [monthFull] [day], [year]</template>
                    
                    <template data-date-tpl-minago><span class="Timestamp-minago">[deltaMinutes] mins ago</span></template>
                    <template data-date-tpl-now><span class="Timestamp-minago">Now</span></template>
                    <span data-date>&nbsp;</span>
                </bsp-timestamp>
            </div>
            </div>
    
    



        


        

        
    </div>

    
</div>
                        
                    
                </div>
            
        </div>
    


    <template data-injectedmodule
    data-injectedmodule-startsat="3.0"
    data-injectedmodule-repetition=""
    data-injectedmodule-maxinjections="5.0"><div class="SovrnAd Advertisement sovrn-hub-feed"
    data-module
    
></div>
</template><template data-injectedmodule-alt
    data-injectedmodule-alt-startsat="6.0"
    data-injectedmodule-alt-repetition="5.0"
    data-injectedmodule-alt-maxinjections="">
<bsp-nativo-ad
    data-nativo-class="Advertisement nativo-sf-mw" data-module></bsp-nativo-ad>

</template>

    

</bsp-list-loadmore>



                
            </div>
        
        
            <div class="TwoColumnContainer7030-column" data-modulewell="narrow">
                
                    <div class="SovrnAd Advertisement sovrn-rail-hub-sticky"
    data-module data-sticky
    
></div>

                
            </div>
        
    </div>
</div>
            
        </main>
        
        
    </div>

    

    
    <footer class="Page-footer">
    <div class="Page-footer-container">
        <div class="Page-footer-columns">
            <div class="Page-footer-column">
                
                    
                        <div class="Page-footer-logo"><a aria-label="home page" href="/"  >
    
        <picture>
            
            
                
                    
                
            

            
            
                
    
        <source type="image/webp"  width="225" height="140" srcset="https://dims.apnews.com/dims4/default/deb77e2/2147483647/strip/true/crop/992x617+0+0/resize/225x140!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffc%2F24%2F7ff11448446fb8500bc984551325%2Faplogo-with-tagline.png 1x,https://dims.apnews.com/dims4/default/a3178ca/2147483647/strip/true/crop/992x617+0+0/resize/450x280!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffc%2F24%2F7ff11448446fb8500bc984551325%2Faplogo-with-tagline.png 2x"/>

    

    
        <source width="225" height="140" srcset="https://dims.apnews.com/dims4/default/8650001/2147483647/strip/true/crop/992x617+0+0/resize/225x140!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffc%2F24%2F7ff11448446fb8500bc984551325%2Faplogo-with-tagline.png 1x,https://dims.apnews.com/dims4/default/6669a9d/2147483647/strip/true/crop/992x617+0+0/resize/450x280!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffc%2F24%2F7ff11448446fb8500bc984551325%2Faplogo-with-tagline.png 2x"/>

    

            
            
    <img class="Image" srcset="https://dims.apnews.com/dims4/default/8650001/2147483647/strip/true/crop/992x617+0+0/resize/225x140!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffc%2F24%2F7ff11448446fb8500bc984551325%2Faplogo-with-tagline.png 1x,https://dims.apnews.com/dims4/default/6669a9d/2147483647/strip/true/crop/992x617+0+0/resize/450x280!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffc%2F24%2F7ff11448446fb8500bc984551325%2Faplogo-with-tagline.png 2x" width="225" height="140" src="https://dims.apnews.com/dims4/default/8650001/2147483647/strip/true/crop/992x617+0+0/resize/225x140!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ffc%2F24%2F7ff11448446fb8500bc984551325%2Faplogo-with-tagline.png" loading="lazy"
    >

        </picture>
    
    </a>
</div>
                    
                
                
                    <div class="Page-footer-content">
                        
                            <div class="PagePromoFooter"
 data-gtm-region="No Value"
 data-gtm-topic="No Value">
    <div class="PagePromoFooter-content">
        

        
    <div class="PagePromo-description">
         <span class="Link"><span class="PagePromoContentIcons-text">The Associated Press is an independent global news organization dedicated to factual reporting. Founded in 1846, AP today remains the most trusted source of fast, accurate, unbiased news in all formats and the essential provider of the technology and services vital to the news business. More than half the world’s population sees AP journalism every day.</span></span>
    </div>



        
    </div>
</div>

                        
                    </div>
                
            </div>

            <div class="Page-footer-column">
                
                    <div class="Page-footer-navigation" >
                        <nav class="FooterNavigation">
    
        <ul class="FooterNavigation-items" data-column-count="2">
            
                <li class="FooterNavigation-items-item">
                    <div class="FooterNavigationItem">
    <div class="FooterNavigationItem-text">
        
            <span>The Associated Press</span>
        
    </div>

    
        <ul class="FooterNavigationItem-items" data-column-count="8">
            
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://www.ap.org/"  target="_blank"
    >
    <span class="NavigationLink-text">ap.org
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://careers.ap.org/"  target="_blank"
    >
    <span class="NavigationLink-text">Careers
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://contentservices.ap.org"  target="_blank"
    >
    <span class="NavigationLink-text">Advertise with us
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/contact-us" >
    <span class="NavigationLink-text">Contact Us
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/accessibility-statement" >
    <span class="NavigationLink-text">Accessibility Statement
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
                                <button id="ot-sdk-btn" class="ot-sdk-show-settings" data-title="Your Privacy Choices / Do Not Sell or Share My Personal Information">Cookie Settings</button>
                            </li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/termsofservice" >
    <span class="NavigationLink-text">Terms of Use
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://apnews.com/privacystatement" >
    <span class="NavigationLink-text">Privacy Policy
    </span></a>
</li>
                
            
        </ul>
    
</div>

                </li>
            
                <li class="FooterNavigation-items-item">
                    <div class="FooterNavigationItem">
    <div class="FooterNavigationItem-text">
        
            <span>More From AP News</span>
        
    </div>

    
        <ul class="FooterNavigationItem-items" data-column-count="7">
            
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://www.ap.org/about"  target="_blank"
    >
    <span class="NavigationLink-text">About
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://www.ap.org/about/news-values-and-principles"  target="_blank"
    >
    <span class="NavigationLink-text">AP News Values and Principles
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://www.ap.org/about/our-role-in-elections"  target="_blank"
    >
    <span class="NavigationLink-text">AP’s Role in Elections
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://leads.ap.org"  target="_blank"
    >
    <span class="NavigationLink-text">AP Leads
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://blog.ap.org/"  target="_blank"
    >
    <span class="NavigationLink-text">AP Definitive Source Blog
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://apimagesblog.com/"  target="_blank"
    >
    <span class="NavigationLink-text">AP Images Spotlight Blog
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
                    <li class="FooterNavigationItem-items-item">
<a class="NavigationLink " href="https://www.apstylebook.com/"  target="_blank"
    >
    <span class="NavigationLink-text">AP Stylebook
        <svg class="NavigationLink-external-icon">
            <use xlink:href="#externalLink"></use>
        </svg>
        
    </span></a>
</li>
                
            
        </ul>
    
</div>

                </li>
            
        </ul>
    
</nav>

                    </div>
                
            </div>
            <div class="Page-footer-column">
                
                    <div class="Page-footer-content">
                        
                    </div>
                
            </div>
        </div>
        
            <div class="Page-footer-bottom">
                
                    <div class="Page-footer-disclaimer"><p>Copyright 2024 The Associated Press. All Rights Reserved.</p></div>
                

                
                    <div class="SocialBar">
    
        <ul class="SocialBar-items">
            
                <li class="SocialBar-items-item"><a class="SocialLink" rel="noreferrer" href="https://twitter.com/AP" target="_blank" data-social-service="twitter">
    
    <div class="SocialLink-icon">
        <svg>
            <use xlink:href="#mono-icon-twitter"></use>
        </svg>
    </div>
    <span class="sr-only">
        twitter
    </span>
</a>
</li>
            
                <li class="SocialBar-items-item"><a class="SocialLink" rel="noreferrer" href="https://www.instagram.com/apnews/" target="_blank" data-social-service="instagram">
    
    <div class="SocialLink-icon">
        <svg>
            <use xlink:href="#mono-icon-instagram"></use>
        </svg>
    </div>
    <span class="sr-only">
        instagram
    </span>
</a>
</li>
            
                <li class="SocialBar-items-item"><a class="SocialLink" rel="noreferrer" href="https://www.facebook.com/APNews" target="_blank" data-social-service="facebook">
    
    <div class="SocialLink-icon">
        <svg>
            <use xlink:href="#mono-icon-facebook"></use>
        </svg>
    </div>
    <span class="sr-only">
        facebook
    </span>
</a>
</li>
            
        </ul>
    
</div>

                
            </div>
        
    </div>
</footer>

    
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDF5H9V"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<script>function optanCheck () {
     
	var onCookie = document.cookie
    try {
        var theCookie = onCookie.match(/(OptanonConsent=.*;?)/)[0]
        if (typeof OnetrustActiveGroups === 'string' && OnetrustActiveGroups.split(',').indexOf('4') > 0) {
			var consentId = theCookie.match(/(consentId.*?&)/)[0].replace('&','')
            permutive.consent({"opt_in":true,"token": consentId})
        } else {
            permutive.consent({"opt_in":false})
        }
    } catch(err) {
        console.error('oncookieerror', err)
    }
}</script>

</body>

</html>