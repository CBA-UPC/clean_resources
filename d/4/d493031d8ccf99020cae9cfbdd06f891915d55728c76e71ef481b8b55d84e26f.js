/*! 20240201-14-RELEASE */

(e=>{const t=/^(\/react)((\.|-)(.)+)*\.js/;class r{constructor(e){this.trcManager=e}static getInstance(e){return r.instance||(r.instance=new r(e)),r.instance}static detectSpa(){const e=r.detectAngular(),t=r.detectAngularJs(),n=r.detectReact(),a=r.detectVue();return{isSpa:t||e||n||a,isAngularJs:t,isAngular:e,isReact:n,isVue:a}}sendSpaData(){if(!TRC.SpaDetector.dataSent){const e=r.detectSpa();this.sendGenericEvent(e)}}sendGenericEvent(e){if(!this.checkSessionAndUser())return;const t={data:JSON.stringify(e),type:"spa-measurements"};this.trcManager.sendEvent("pubs-generic",{d:JSON.stringify(t)},{}),TRC.SpaDetector.dataSent=!0}checkSessionAndUser(){const e=this.trcManager.response&&this.trcManager.response.trc?this.trcManager.response.trc["session-data"]:null;return TRC.pageManager.getUserId()&&this.trcManager.getSessionData(e)}static detectReact(){return!!(e.React||document.querySelector("[data-react], [data-reactroot], [data-reactid]")||r());function r(){const e=document.querySelectorAll('script[src*="/react"]');if(!e)return!1;const r=Array.prototype.slice.call(e).map(e=>e.src).map(e=>e.substring(e.indexOf("/react"))).filter(e=>t.test(e));return r.length>0}}static detectVue(){return!!(e.Vue||document.querySelector("[v-for], [v-bind], [v-once], [v-on]")||document.querySelector('script[src*="vue.js"]'))}static detectAngularJs(){return!!(e.angular||document.querySelector(".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]")||document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]'))}static detectAngular(){return!!(e.getAllAngularRootElements||document.querySelector("[ng-version]")&&document.querySelector("[ng-version]").getAttribute("ng-version")[0]>=2)}}TRC.SpaDetector=r})(window);00-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/sites/all/themes/eluniversal/fonts/work-sans.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/sites/all/themes/eluniversal/fonts/work-sans.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/sites/all/themes/eluniversal/fonts/work-sans.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/sites/all/themes/eluniversal/fonts/work-sans.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/sites/all/themes/eluniversal/fonts/work-sans.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('/sites/all/themes/eluniversal/fonts/work-sans.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url('/sites/all/themes/eluniversal/fonts/work-sans.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
<!--[if IE]><![endif]-->
<link rel="dns-prefetch" href="//b.scorecardresearch.com" />
<link rel="preconnect" href="http://b.scorecardresearch.com" />
<link rel="dns-prefetch" href="//www.gstatic.com" />
<link rel="preconnect" href="https://www.gstatic.com" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="https://oaxaca.eluniversal.com.mx/sites/all/themes/eluniversal/favicon.ico" type="image/vnd.microsoft.icon" />
<script src="//cdn.tinypass.com/api/tinypass.min.js" type="application/javascript" async="async"></script>
<script type="application/ld+json">{
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Oaxaca",
            "item": "https://oaxaca.eluniversal.com.mx"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "error-404",
            "item": "https://oaxaca.eluniversal.com.mx/error-404"
        }
    ]
}</script>
<meta name="description" content="El periódico de México líder en noticias y clasificados" />
<meta name="generator" content="Drupal 7 (http://drupal.org)" />
<link rel="canonical" href="https://oaxaca.eluniversal.com.mx/error-404" />
<link rel="shortlink" href="https://oaxaca.eluniversal.com.mx/error-404" />
<meta property="fb:app_id" content="692084394291709" />
<meta property="og:site_name" content="Oaxaca" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://oaxaca.eluniversal.com.mx/error-404" />
<meta property="og:title" content="Error 404" />
<meta property="og:image" content="http://oaxaca.eluniversal.com.mx/sites/all/themes/universal/images/default.jpg" />
<meta property="og:image:width" content="600" />
<meta property="og:image:height" content="315" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@ElUniversalOax" />
<meta name="twitter:creator" content="@ElUniversalOax" />
<meta name="twitter:description" content="El periódico de México líder en noticias y clasificados" />
<meta name="twitter:image" content="http://oaxaca.eluniversal.com.mx/sites/all/themes/universal/images/default.jpg" />
<meta name="twitter:image:width" content="600" />
<meta name="twitter:image:height" content="315" />
<script type="text/javascript" src="/sites/default/files/advagg_js/js__QiwM6cSq0DaYqPC4zeZRumUXOhQRoAdSRwD0yAGZTxM__vwq-cWICiPTEiMXk1sTm4cVMzwriAB7gvOrfZXHObfU__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
tp = window.tp || [];tp.push(["setAid", "1mRHNNtApu"]);tp.push(["setEndpoint", "https://buy.tinypass.com/api/v3"]);tp.push(["setUseTinypassAccounts", false]);tp.push(["setUsePianoIdUserProvider", true]);tp.push(["setCxenseSiteId", "1140858904933788909"])
//--><!]]>
</script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
tp = window.tp || [];tp.push(["init", function () {    tp.experience.init();}])
//--><!]]>
</script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
window.googletag = window.googletag || { cmd: [] };
//--><!]]>
</script>
<script type="text/javascript" defer="defer" src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script type="text/javascript" defer="defer" src="https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js"></script>
<script type="text/javascript" src="/sites/default/files/advagg_js/js__Jdn2128ZZo_Ku3aOJ9OlrRCmrXithCbEtZWfK2wADjo__RkKY4EoZjDma2MJcz7mQmWPJUSWNp0CApHPZ96bJsDA__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.js" defer="defer"></script>
<script type="text/javascript" src="/sites/default/files/advagg_js/js__9ici6QMeDS-cROq8R0RhuICsMGMP2wcJZNQQFsqQi44__X4Rruq2pzP-lYa7ohNqzXAw4U4QfJhhTFBE7GZ5LUcg__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.js"></script>
<script type="text/javascript" src="/sites/default/files/advagg_js/js__BHZM8xdf9Btwi-s2HhpgWwqZ7rGPCxydbTlaYzsd1uk__nmgsk7h-jv9Q_K-BwFH5yy_sNm_-tYrTDXTAQqJzlos__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
googletag.cmd.push(function() {
  googletag.pubads().enableAsyncRendering();
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
});

googletag.cmd.push(function () {
  googletag.enableServices();
});
//--><!]]>
</script>
<script type="text/javascript" src="/sites/default/files/advagg_js/js__3_jveF_KAIqcqVM7yTmKKmB3z_80GlfXQJ4LX6L0V28__hvXuXX9eIcY5tXt24dnFKO9cT0PdgWbxe2xUJa0kgZc__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--

  (function() {
    var gptAsync = document.createElement("script"), gptElement = document.getElementsByTagName("script")[0]; gptAsync.async = true;
    gptAsync.src = (document.location.protocol == "https:" ? "https://" : "http://") + "securepubads.g.doubleclick.net/tag/js/gpt.js";
    gptElement.parentNode.insertBefore(gptAsync, gptElement);
  })();
  
//--><!]]>
</script>
<script type="text/javascript" src="/sites/default/files/advagg_js/js__fLEThR6QYRebooYKmc3OP4vJizQMr31Ziz-SZcwa8Us__tXtaJ-Q2o8XjKHxrXJAS3VqO9V9SeyYVixy7eL97O1c__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","setHasJsCookie":0,"ajaxPageState":{"theme":"eluniversal","theme_token":"gjhWsSAzwQI87QNwCdoSot1XKmnizieGiBF14n0S8GA","css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"sites\/all\/modules\/date\/date_api\/date.css":1,"sites\/all\/modules\/date\/date_popup\/themes\/datepicker.1.7.css":1,"modules\/field\/theme\/field.css":1,"modules\/node\/node.css":1,"modules\/search\/search.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/views\/css\/views.css":1,"sites\/all\/modules\/lazyloader\/lazyloader.css":1,"sites\/all\/modules\/ckeditor\/css\/ckeditor.css":1,"sites\/all\/modules\/ctools\/css\/ctools.css":1,"sites\/all\/modules\/panels\/css\/panels.css":1,"sites\/all\/libraries\/superfish\/css\/superfish.css":1,"sites\/all\/libraries\/superfish\/css\/superfish-vertical.css":1,"sites\/all\/libraries\/superfish\/css\/superfish-navbar.css":1,"sites\/all\/modules\/views_slideshow\/views_slideshow.css":1,"sites\/all\/themes\/eluniversal\/panels\/portada-seccion\/portada\/..\/portada.css":1,"sites\/all\/modules\/node_embed\/plugins\/node_embed\/node_embed.css":1,"sites\/all\/themes\/eluniversal\/css\/grid.css":1,"sites\/all\/themes\/eluniversal\/css\/widgets.css":1,"sites\/all\/modules\/eluniversalv2\/node_components\/css\/erro404.css":1,"sites\/all\/modules\/eluniversalv2\/block_main_hiperlocales\/css\/3col-directorio.css":1},"js":{"http:\/\/b.scorecardresearch.com\/c2\/6906641\/cs.js":1,"sites\/all\/modules\/jquery_update\/replace\/jquery\/1.7\/jquery.js":1,"misc\/jquery-extend-3.4.0.js":1,"misc\/jquery-html-prefilter-3.5.0-backport.js":1,"misc\/jquery.once.js":1,"https:\/\/www.gstatic.com\/firebasejs\/8.2.1\/firebase-app.js":1,"https:\/\/www.gstatic.com\/firebasejs\/8.2.1\/firebase-messaging.js":1,"\/sites\/default\/files\/firebase.js":1,"misc\/drupal.js":1,"sites\/all\/modules\/lazyloader\/jquery.lazyloader.js":1,"public:\/\/languages\/es_W11tvXIWWh7fT-xdh8aQisPbtItXpwp55MEPwZlmU0I.js":1,"sites\/all\/libraries\/superfish\/jquery.hoverIntent.minified.js":1,"sites\/all\/libraries\/superfish\/jquery.bgiframe.min.js":1,"sites\/all\/libraries\/superfish\/superfish.js":1,"sites\/all\/libraries\/superfish\/supersubs.js":1,"sites\/all\/libraries\/superfish\/supposition.js":1,"sites\/all\/libraries\/superfish\/sftouchscreen.js":1,"sites\/all\/modules\/views_slideshow\/js\/views_slideshow.js":1,"sites\/all\/themes\/eluniversal\/javascript\/menu-navegacion.min.js":1,"sites\/all\/themes\/eluniversal\/javascript\/script-helpers.js":1,"sites\/all\/themes\/eluniversal\/javascript\/jquery.easyModal.js":1,"sites\/all\/themes\/eluniversal\/javascript\/script-block_mainXc_con_widget.js":1}},"jcarousel":{"ajaxPath":"\/jcarousel\/ajax\/views"},"lazyloader":{"loadImageDelay":"0"}});
//--><!]]>
</script>
<title>Error 404 | Oaxaca</title>
<link rel="stylesheet" type="text/css" href="/sites/all/themes/eluniversal/scss/all.css" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__BJ6Ou6QsBRtnFTmxaakamOIS8n4QswDP2XnnZ1sxtaM__NBuvkP6eInGIkb1aJvUHx5PX79XApuxBDkk_77W5tYk__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__IRepMQrCME81Kxw38_VlblRzgyR0H0FcLEIYNt4vy4w__fvqnE3eOqE3Le0v5wzBcRXa7pOAXaGbT9JkgV9eV2RE__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__8h7Sw6nNM7XSrGZ7yhbKd-UhkKAPGj4v8BRJ04w8VTs__SW47uVHxkEMI76xmhhQyObdQplp8Nj3J7tmOyZlxuuQ__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__bQ2MmWyQR5bgPsmj6B9XCRAIADXA1UsaupGqi0R1YTY__TDfHotbbWVTv829i1O033uK7_ZHbMRFhXqh8fDkq21k__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__eFKSCujfWyJYO8J-qSi6T_n29lROS8isvrxzANeHaAY__D_EUHDAfEQdxcLiSDY7hREUWkG1Ge56_h2z3Er8V188__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__EY-I7f2t8K5oHyEMc0rXvcwTYhyyON5VfMtsFtqsF0g__MHoTlVly8JD5aw6vSmAUuG04fhj_tNz7kiTDxs3gH7E__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__ucqYRqql06xzRvAJy6P7MWuAUwNLqA2hnAPjXv8nGYM__nno7r3sSMuJv6oca6cmF4h4wMfCZM4nh6AQq1bR708A__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__HFARGKIxz2mJ7tlKKEf9Y6EvY7tn4ekMgKPLaY6PWwU__0mHCytuGQddUHtdmAnJO1MCqrewyKjgw-XSjfvTWQm4__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__AKnvegiOIagElcZyPQqmQnp_viTPhwr5Y69uv5o24eM__Ht5P5q7Pfdc1dKWmQEp867U8lhyabPw4v88PqueVKWY__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__DAQqjw6nNXRzQcMYbwsvG868muoiBRuD6u9Rj7_hi9c__WskuvLdtKuAo1Gx-H0CN5hGwBCV2gm7eJEvjjd3hAEI__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<link type="text/css" rel="stylesheet" href="/sites/default/files/advagg_css/css__9woFLFXaK4F0mRwW799nJpPQB2x8cb4MFtuPLyQzMMc__LyLKLA0-O0i6hkNuKEJdZaMOrqT1WqV2pJ844v57nzE__CbTuJQdmcfOriY0sgnUDzVlguOXiBl7CMPRmxFgIKpA.css" media="all" />
<meta name="viewport" content="initial-scale=1" />

<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-K4KWTPH');</script>

<script type="text/javascript">
  window._taboola = window._taboola || [];
  _taboola.push({article:'auto'});
  !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.async = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
  }(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/eluniversal-oaxaca/loader.js',
  'tb_loader_script');
  if(window.performance && typeof window.performance.mark == 'function')
    {window.performance.mark('tbl_ic');}
</script>
</head>
<body class="html not-front not-logged-in no-sidebars page-error-404  ">

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4KWTPH"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<div id="skip-link">
<a href="#main-content" class="element-invisible element-focusable">Pasar al contenido principal</a>
</div>
<div class="region region-page-top">




<script>
  var _comscore = _comscore || [];
  _comscore.push({
    c1: "2", c2: "6906641", 
    options: {
        enableFirstPartyCookie: true,
        bypassUserConsentRequirementFor1PCookie: true
        }
    });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = "https://sb.scorecardresearch.com/cs/6906641/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
</script>
<noscript>
  <img src="https://sb.scorecardresearch.com/p?c1=2&amp;c2=6906641&amp;cv=4.4.0&amp;cj=1">
</noscript>

</div>
<div id="contenedor">
<header>
<nav id="topnav">
<div id="menu-desplegable"><i class="fa fa-bars" id="simbolo_boton"></i></div>
<a href="https://oaxaca.eluniversal.com.mx">

<img data-src="/sites/all/themes/eluniversal/images/logo-oaxaca.svg" alt="Logo Oaxaca El Universal" class="logo" border="0" src="/sites/all/themes/eluniversal/images/pixel.png" />
</a>
<ul id="main-menu" class="links inline">
<li><a href="/minuto-x-minuto">MxM</a></li>
<li><a href="/videos">Videos</a></li>
<li><a href="/galerias" rel="nofollow">Fotos</a></li>
</ul>
<a target="_blank" href="https://www.eluniversal.com.mx/" alt="Logo El Universal">

<img data-src="/sites/all/themes/eluniversal/images/logo-el-universal-blanco.svg" alt="Logo Oaxaca El Universal" class="logo-uni-header" border="0" src="/sites/all/themes/eluniversal/images/pixel.png" />
</a>
</nav>
<nav id="bottom-nav">
<a class="suscribete" href="https://crm.eluniversal.com.mx/Suscripciones/" target="_blank" rel="nofollow">Suscríbete</a>
<ul class="menu">
<li class="first leaf"><a href="https://www.avisooportuno.mx/" target=" _blank">Aviso Oportuno</a></li>
<li class="leaf"><a href="http://agenciaeluniversal.mx/" target=" _blank">Agencia de Noticias</a></li>
<li class="last leaf"><a href="/edicion-impresa/" target=" _blank">Primera Plana</a></li>
</ul>

<div class="sm-menu menu_3">
<a href="https://www.facebook.com/eluniversaloaxaca" target=" _blank" title="Facebook El Universal Oaxaca" rel="nofollow"><i class="fab fa-facebook"></i></a>
<a href="https://twitter.com/ElUniversalOax" target=" _blank" title="Twitter El Universal Oaxaca" rel="nofollow"><i class="fab fa-twitter"></i></a>
<a href="https://www.youtube.com/channel/UCdzvUD7eu_EZb2338f0XuIg" target=" _blank" title="Youtube El Universal Oaxaca" rel="nofollow"><i class="fab fa-youtube"></i></a>
<a href="https://www.instagram.com/eluniversalmx" target=" _blank" title="Instagram El Universal Oaxaca" rel="nofollow"><i class="fab fa-instagram"></i></a>
</div>

<div class="regio region-search">
<div id="block-search-form" class="block block-search">
<div class="content">
 <form action="/busca" method="get" id="search-block-form" accept-charset="UTF-8" class="ng-pristine ng-valid" rel="search"> <div> <div class="container-inline"> <div class="form-item form-type-textfield form-item-search-block-form"> <label class="element-invisible" for="edit-search-block-form--2">Término de búsqueda </label> <input title="Escriba lo que quiere buscar." placeholder="Término de búsqueda" class="universal-header-buscador form-text" type="search" id="edit-search-block-form--2" name="search_block_form" value size="18" maxlength="128"> </div> <div class="form-actions form-wrapper" id="edit-actions"><input alt="Búscar" type="image" src="/sites/all/themes/universal/images/buscar.png" class="form-submit"></div> <input type="hidden" name="form_id" value="search_block_form"> </div> </div></form> </div>
</div>
</div>
</nav>
<nav id="menu-navegacion">
<form action="#" id="activeMenu">
<input type="hidden" id="activeMenuName" />
</form>
<div class="menu-navegacion responsivemenu">
<a class="suscribete" href="https://crm.eluniversal.com.mx/Suscripciones/" target="_blank">Suscríbete</a>
<a target="_blank" href="https://www.eluniversal.com.mx/" alt="Logo El Universal" class="logo-uni-header-link">

<img data-src="/sites/all/themes/eluniversal/images/logo-el-universal-blanco.svg" alt="Logo Oaxaca El Universal" border="0" src="/sites/all/themes/eluniversal/images/pixel.png" />
</a>
</div>
<a class="isearch" href="/resultados-busqueda/">
<i class="fas fa-search"></i>
</a>
<div id="menu-navegacion_Noticias" class="menu-navegacion">
<div class="menu-navegacion_Titulo">Secciones</div>
<ul>
<li><a href="/secciones/estatal">Estatal</a></li>
<li><a href="/secciones/metropoli">Metrópoli</a></li>
<li><a href="/secciones/sociedad">Sociedad</a></li>
<li><a href="/secciones/municipios">Municipios</a></li>
<li><a href="/secciones/politica">Política</a></li>
<li><a href="/secciones/mas-de-oaxaca">Más de Oaxaca</a></li>
<li><a href="/opinion">Opinión</a></li>
</ul>
</div>
<div id="menu-navegacion_Multi" class="menu-navegacion" onclick="activateMenu(this, this.id);">
<div class="menu-navegacion_Titulo"><i id="icon-multi" class="fas fa-angle-right"></i> Multimedia</div>
<ul>
<li><a href="/galerias" rel="nofollow">Fotogalerías</a></li>
<li><a href="/videos">Videos</a></li>
</ul>
</div>
<div id="menu-navegacion_Locales" class="menu-navegacion" onclick="activateMenu(this, this.id);">
<div class="menu-navegacion_Titulo"><i id="icon-local" class="fas fa-angle-right"></i> Locales</div>
<ul>
<li><a href="https://sanluis.eluniversal.com.mx" target=" _blank">San Luis Potosí</a></li>
<li><a href="https://www.eluniversalqueretaro.mx/" target=" _blank">Querétaro</a></li>
<li><a href="https://www.eluniversalpuebla.com.mx/" target=" _blank">Puebla</a></li>
</ul>
</div>
<div id="menu-navegacion_Aviso" class="menu-navegacion" onclick="activateMenu(this, this.id);">
<div class="menu-navegacion_Titulo"><i id="icon-aviso" class="fas fa-angle-right"></i> Aviso Oportuno</div>
<ul>
<li><a href="https://www.avisooportuno.mx/inmuebles" rel="nofollow" target=" _blank">Inmuebles</a></li>
<li><a href="https://www.avisooportuno.mx/empleos" target=" _blank">Empleos</a></li>
<li><a href="https://www.avisooportuno.mx/vehiculos" target=" _blank">Vehículos</a></li>
<li><a href="https://www.avisooportuno.mx/varios" target=" _blank">Varios</a></li>
</ul>
</div>
<div id="menu-navegacion_Multimedia" class="menu-navegacion" onclick="activateMenu(this, this.id);">
<div class="menu-navegacion_Titulo"><i id="icon-vert" class="fas fa-angle-right"></i> Verticales</div>
<ul>
<li><a href="https://www.elgrafico.mx/" target=" _blank">El Gráfico</a></li>
<li><a href="https://de10.com.mx/" target=" _blank">De10.mx</a></li>
<li><a href="https://www.revistaclase.mx/" target="_blank">Clase</a></li>
<li><a href="https://www.viveusa.mx/" target=" _blank">ViveUSA</a></li>
<li><a href="https://www.unioncdmx.mx" target=" _blank">UN1ÓN</a></li>
<li><a href="https://confabulario.eluniversal.com.mx/" target=" _blank">Confabulario</a></li>
<li><a href="https://www.sumedico.com/" target=" _blank">SuMédico</a></li>
<li><a href="https://www.avisooportuno.mx/" target=" _blank">Aviso Oportuno</a></li>
</ul>
</div>

<div class="menu-navegacion socialmediamenu">
<div class="sm-menu">
<a href="https://www.facebook.com/eluniversaloaxaca" target=" _blank"><i class="fab fa-facebook"></i></a>
<a href="https://twitter.com/ElUniversalOax" target=" _blank"><i class="fab fa-twitter"></i></a>
<a href="https://www.youtube.com/channel/UCdzvUD7eu_EZb2338f0XuIg" target=" _blank"><i class="fab fa-youtube"></i></a>
<a href="https://www.instagram.com/eluniversalmx" target=" _blank"><i class="fab fa-instagram"></i></a>
</div>
</div>

</nav>
</header>
<div class="tabs">
</div>
<div class="contenido-principal">
<div class="region region-content">
<div id="block-system-main" class="block block-system">
<div class="content">
<div class="panel-display panel-2col clearfix">
<div class="panel-panel panel-col-first">
<div class="gl-Grid_12">
<div class="gl-Error404">
<img class="gl-error404_Imagen" typeof="foaf:Image" data-src="/sites/all/themes/eluniversal/images/logo-el-universal-publicidad.png" src="https://oaxaca.eluniversal.com.mx/sites/all/modules/lazyloader/image_placeholder.gif" alt /><noscript><img class="gl-error404_Imagen" typeof="foaf:Image" src="/sites/all/themes/eluniversal/images/logo-el-universal-publicidad.png" alt="" /></noscript> <h3 class="gl-Error404_Titulo">Error 404</h3>
<p class="gl-Error404_Texto">
Lo sentimos, no hemos encontrado la página, <a href="/" class="gl-Error404_Link">haz clic aquí</a> para regresar
al inicio, o bien te podría interesar el siguiente contenido.
</p>
<form id="universal-search404" action class="footer_optin-form mt-20" _lpchecked="1" onsubmit="return search404Submit()" method="POST">
<input name="search" type="search" placeholder="Buscar en El Universal" class="footer_optin-input">
<input type="submit" value=">" class="footer_optin-submit">
</form>
</div>
</div>
</div>
<div class="panel-panel">
<div class="gl-Grid_9"></div>
<div class="gl-Grid_3"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_3"></div>
<div class="gl-Grid_9"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_12"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_9"></div>
<div class="gl-Grid_3"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_3"></div>
<div class="gl-Grid_9"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_12"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_9"></div>
<div class="gl-Grid_3"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_3"></div>
<div class="gl-Grid_9"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_12"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_9"></div>
<div class="gl-Grid_3"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_3"></div>
<div class="gl-Grid_9"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_12"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_9"></div>
<div class="gl-Grid_3"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_3"></div>
<div class="gl-Grid_9"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_12"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_9"></div>
<div class="gl-Grid_3"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_12"></div>
</div>
<div class="panel-panel">
<div class="gl-Grid_12"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="fondofooter">
<footer>
<div id="footer_main">
<div class="footer_main-columna footer_secciones">
<span class="footer_main-titulo">
Secciones
</span>
<ul>
<li class="footer_main-link"><a href="/secciones/estatal">Estatal</a></li>
<li class="footer_main-link"><a href="/secciones/metropoli">Metrópoli</a></li>
<li class="footer_main-link"><a href="/secciones/sociedad">Sociedad</a></li>
<li class="footer_main-link"><a href="/secciones/municipios">Municipios</a></li>
<li class="footer_main-link"><a href="/secciones/politica">Política</a></li>
<li class="footer_main-link"><a href="/secciones/mas-de-oaxaca">Más de Oaxaca</a></li>
<li class="footer_main-link"><a href="/opinion">Opinión</a></li>
</ul>
</div>
<div class="footer_main-columna footer_secciones">
<span class="footer_main-titulo">
&nbsp;
</span>
<ul class="multimobile">
<li class="footer_main-link"><b>Multimedia</b></li>
<li class="footer_main-link"><a href="/galerias">Fotogalerías</a></li>
<li class="footer_main-link"><a href="/videos">Videos</a></li>
</ul>
</div>
<div class="footer_main-columna" id="footer_locales">
<span class="footer_main-titulo">
Locales
</span>
<ul>
<li class="footer_main-link"><a href="https://sanluis.eluniversal.com.mx/" target="_blank">San Luis Potosí</a></li>
<li class="footer_main-link"><a href="https://www.eluniversalqueretaro.mx/" target="_blank">Querétaro</a></li>
<li class="footer_main-link"><a href="https://www.eluniversalpuebla.com.mx/" target="_blank">Puebla</a></li>
</ul>
<span class="footer_main-titulo">
&nbsp;
</span>
<span class="footer_main-titulo">Aviso Oportuno</span>
<ul>
<li class="footer_main-link"><a href="https://www.avisooportuno.mx/inmuebles/" rel="nofollow">Inmuebles</a></li>
<li class="footer_main-link"><a href="https://www.avisooportuno.mx/empleos/">Empleos</a></li>
<li class="footer_main-link"><a href="https://www.avisooportuno.mx/vehiculos/">Vehículos</a></li>
<li class="footer_main-link"><a href="https://www.avisooportuno.mx/varios/">Varios</a></li>
</ul>
</div>
<div class="footer_main-columna" id="footer_verticales">
<span class="footer_main-titulo">
Verticales
</span>
<ul>
<li class="footer_main-link"><a href="https://www.elgrafico.mx/" target="_blank">El Gráfico</a></li>
<li class="footer_main-link"><a href="https://de10.com.mx/" target="_blank">De10.mx</a></li>
<li class="footer_main-link"><a href="https://www.revistaclase.mx/" target="_blank">Clase</a></li>
<li class="footer_main-link"><a href="https://www.viveusa.mx/" target="_blank">ViveUSA</a></li>
<li class="footer_main-link"><a href="http://www.unioncdmx.mx/" target="_blank">UN1ÓN</a></li>
<li class="footer_main-link"><a href="https://confabulario.eluniversal.com.mx/" target="_blank">Confabulario</a></li>
<li class="footer_main-link"><a href="https://www.sumedico.com/" target="_blank">SuMédico</a></li>
<li class="footer_main-link"><a href="https://www.avisooportuno.mx/" target="_blank">Aviso Oportuno</a></li>
<li class="footer_main-link"><a href="https://obituarios.eluniversal.com.mx/" target="_blank">Obituarios</a></li>
<li class="footer_main-link"><a href="https://www.eluniversal.com.mx/descuentos/" target="_blank">Descuentos</a></li>
</ul>
</div>
<div class="footer_main-columna" id="footer_publicidad">
<a target="_blank" href="https://www.eluniversal.com.mx/" alt="Logo El Universal">

<img loading="lazy" data-src="/sites/all/themes/eluniversal/images/logo-el-universal-blanco.svg" class="logo lazyload" alt="Logo Oaxaca El Universal" border="0" src="/sites/all/modules/lazyloader/image_placeholder.gif" />
</a>
</div>
<div id="footer_social">
<p>Síguenos</p>
<a rel="nofollow" href="https://www.facebook.com/eluniversaloaxaca" target="_blank" title="Facebook El Universal Oaxaca"><i class="fab fa-facebook"></i></a>
<a rel="nofollow" href="https://twitter.com/ElUniversalOax" target="_blank" title="Twitter El Universal Oaxaca"><i class="fab fa-twitter"></i></a>
<a rel="nofollow" href="https://www.youtube.com/channel/UCdzvUD7eu_EZb2338f0XuIg" target="_blank" title="Youtube El Universal Oaxaca"><i class="fab fa-youtube"></i></a>
<a rel="nofollow" href="https://www.instagram.com/eluniversalmx" target="_blank" title="Instagram El Universal Oaxaca"><i class="fab fa-instagram"></i></a>
</div>
</div>
<div id="footer_inferior">
<ul class="footer_inferior-links">
<li><a rel="nofollow" href="/directorio">Directorio</a></li>
<li><a rel="nofollow" href="/contacto">Contáctanos</a></li>
<li><a rel="nofollow" href="/codigo-de-etica">Código de Ética</a></li>
<li><a rel="nofollow" href="/criterios-ante-violencia">Violencia</a></li>
<li><a rel="nofollow" href="/publicidad-oaxaca">Publicidad</a></li>
<li><a rel="nofollow" href="/politicas-de-privacidad">Aviso Legal</a></li>
<li><a rel="nofollow" href="/aviso-de-privacidad">Aviso Privacidad</a></li>
<li><a rel="nofollow" href="/historia-breve">Historia</a></li>
<li><a rel="nofollow" href="/declaracion-accesibilidad">Declaración de accesibilidad</a></li>
</ul>
<p class="footer_inferior-copyright">
Copyright © Todos los derechos reservados | EL UNIVERSAL, Compañía Periodística Nacional. De no existir previa autorización, queda expresamente prohibida la Publicación, retransmisión, edición y cualquier otro uso de los contenidos
</p>
</div>
</footer>
</div>
</div>
<div class="region region-page-bottom">
<noscript>
        <style type="text/css" media="all">
          img[data-src] { display: none !important; }
        </style>
      </noscript> </div>
<script type="text/javascript" src="//b.scorecardresearch.com/c2/6906641/cs.js"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
      (function ($) {
        Drupal.behaviors.lazyloader = {
          attach: function (context, settings) {
            $("img[data-src]").lazyloader({distance: 0, icon: "" });
          }
        };
      }(jQuery));
//--><!]]>
</script>
<script type="text/javascript">
  window._taboola = window._taboola || [];
  _taboola.push({article:'auto'});
  !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.async = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
  }(document.createElement('script'),
  document.getElementsByTagName('script')[0],
  '//cdn.taboola.com/libtrc/eluniversal-oaxaca/loader.js',
  'tb_loader_script');
  if(window.performance && typeof window.performance.mark == 'function')
    {window.performance.mark('tbl_ic');}
</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"850a9248aea2384e","b":1,"version":"2024.2.0","token":"32e44599df0d455392e28a002c5d8989"}' crossorigin="anonymous"></script>
</body>
</html>
