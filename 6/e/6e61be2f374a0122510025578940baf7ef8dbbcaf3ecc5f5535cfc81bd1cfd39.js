/*! lazysizes - v5.3.1 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='normalize-css-css' href='https://www.bookingholdings.com/wp-content/themes/booking-group/css/lib/normalize-7.0.css?ver=20230727' type='text/css' media='all' />
<link rel='stylesheet' id='bootstrap-css-css' href='https://www.bookingholdings.com/wp-content/themes/booking-group/css/lib/bootstrap-4.0.min.css?ver=20230727' type='text/css' media='all' />
<link rel='stylesheet' id='hamburger-css' href='https://www.bookingholdings.com/wp-content/themes/booking-group/css/lib/hamburger.css?ver=20230727' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css' href='https://www.bookingholdings.com/wp-content/themes/booking-group/css/lib/font-awesome/font-awesome.min.css?ver=20230727' type='text/css' media='all' />
<link rel='stylesheet' id='slick-css-css' href='https://www.bookingholdings.com/wp-content/themes/booking-group/css/lib/slick/slick.css?ver=20230727' type='text/css' media='all' />
<link rel='stylesheet' id='slick-theme-css' href='https://www.bookingholdings.com/wp-content/themes/booking-group/css/lib/slick/slick-theme.css?ver=20230727' type='text/css' media='all' />
<link rel='stylesheet' id='main-style-css' href='https://www.bookingholdings.com/wp-content/themes/booking-group/css/main.css?ver=20230727' type='text/css' media='all' />
<link rel='stylesheet' id='new-cr-style-css' href='https://www.bookingholdings.com/wp-content/themes/booking-group/css/app.css?ver=20230727' type='text/css' media='all' />
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/jquery-3.2.1.min.js?ver=6.2.3' id='jquery-3.2.1-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/popper.min.js?ver=6.2.3' id='popper-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/bootstrap.min.js?ver=6.2.3' id='bootstrap-js-js'></script>
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.bookingholdings.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.bookingholdings.com/wp-includes/wlwmanifest.xml" />
<link rel="canonical" href="https://www.bookingholdings.com/about/compliance-and-ethics/" />
<link rel='shortlink' href='https://www.bookingholdings.com/?p=10273' />
<link rel="icon" href="https://www.bookingholdings.com/wp-content/uploads/2018/02/cropped-b-favicon-32x32.png" sizes="32x32" />
<link rel="icon" href="https://www.bookingholdings.com/wp-content/uploads/2018/02/cropped-b-favicon-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.bookingholdings.com/wp-content/uploads/2018/02/cropped-b-favicon-180x180.png" />
<meta name="msapplication-TileImage" content="https://www.bookingholdings.com/wp-content/uploads/2018/02/cropped-b-favicon-270x270.png" />
	
    <!--[if lt IE 9]>
        <script src="https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/ie-html5shiv-printshiv-3.7.0.min.js"></script>
        <script src="https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/ie-selectivizr-1.0.2.min.js"></script>
    <![endif]-->	
    
        	
</head>

<body class="page-template page-template-templates page-template-t_sustainability page-template-templatest_sustainability-php page page-id-10273 page-parent page-child parent-pageid-13">

<div id="wrapper">
  <header id="header" class="header hide header--white">
    <div class="header-container">
    <div class="header-bg"></div>
    <nav class="navbar navbar-default" role="navigation">
      <ul class="nav navbar-nav navbar-left">
        <li class="logo-wrapper">
          <a href="/" class="">
            <img class="logo-main logo-main--white" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng_global-desktop-logowhite.svg">
            <img class="logo-main logo-main--black" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng_global-desktop-logoblack.svg">
            <img class="logo-mobile logo-mobile--white" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng-mobile-logo.svg">
            <img class="logo-mobile logo-mobile--black" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng-mobile-blacklogo-01.svg">
          </a>
        </li>
        
        <span class="dividier"></span>
        <li class="btn-menu">
           
            <a class="btn-menu__link" href="#">
              <span>About</span>
              <span>Compliance &#038; Ethics  </span>
            </a>
                   </li>
          <div class="menu-main-menu-container"><ul id="menu-main-menu" class="main-menu"><li id="menu-item-257" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-257"><a href="https://www.bookingholdings.com/">Home</a></li>
<li id="menu-item-7422" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-7422"><a>About</a>
<ul class="sub-menu">
	<li id="menu-item-7464" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7464"><a href="https://www.bookingholdings.com/about/factsheet/">Factsheet</a></li>
	<li id="menu-item-10774" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10774"><a href="https://www.bookingholdings.com/about/leadership/">Leadership</a></li>
	<li id="menu-item-7492" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7492"><a href="https://www.bookingholdings.com/about/history/">History</a></li>
	<li id="menu-item-264" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-264"><a href="https://www.bookingholdings.com/media-room/">Media Room</a></li>
	<li id="menu-item-10285" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-10273 current_page_item menu-item-10285"><a href="https://www.bookingholdings.com/about/compliance-and-ethics/" aria-current="page">Compliance &#038; Ethics</a></li>
</ul>
</li>
<li id="menu-item-258" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-258"><a>Brands</a>
<ul class="sub-menu">
	<li id="menu-item-259" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-259"><a href="https://www.bookingholdings.com/brands/booking/">Booking.com</a></li>
	<li id="menu-item-260" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-260"><a href="https://www.bookingholdings.com/brands/priceline/">Priceline</a></li>
	<li id="menu-item-261" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-261"><a href="https://www.bookingholdings.com/brands/agoda/">agoda</a></li>
	<li id="menu-item-263" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-263"><a href="https://www.bookingholdings.com/brands/rentalcars/">Rentalcars.com</a></li>
	<li id="menu-item-262" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a href="https://www.bookingholdings.com/brands/kayak/">KAYAK</a></li>
	<li id="menu-item-2375" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2375"><a href="https://www.bookingholdings.com/brands/opentable/">OpenTable</a></li>
	<li id="menu-item-9954" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9954"><a href="https://www.rocketmiles.com/">Rocketmiles</a></li>
	<li id="menu-item-9955" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9955"><a href="https://fareharbor.com/">FareHarbor</a></li>
	<li id="menu-item-9956" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9956"><a href="https://www.hotelscombined.com/">HotelsCombined</a></li>
	<li id="menu-item-9957" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9957"><a href="https://www.cheapflights.com/">Cheapflights</a></li>
	<li id="menu-item-9958" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9958"><a href="https://www.momondo.com/">momondo</a></li>
</ul>
</li>
<li id="menu-item-10198" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-10198"><a href="https://www.bookingholdings.com/sustainability/">Sustainability</a>
<ul class="sub-menu">
	<li id="menu-item-10203" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10203"><a href="https://www.bookingholdings.com/sustainability/">Overview</a></li>
	<li id="menu-item-10202" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10202"><a href="https://www.bookingholdings.com/sustainability/sustainable-travel/">Sustainable Travel</a></li>
	<li id="menu-item-10201" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10201"><a href="https://www.bookingholdings.com/sustainability/sustainable-operations/">Sustainable Operations</a></li>
	<li id="menu-item-10200" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10200"><a href="https://www.bookingholdings.com/sustainability/taking-care-of-our-people/">Taking Care of Our People</a></li>
	<li id="menu-item-10199" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10199"><a href="https://www.bookingholdings.com/sustainability/business-excellence/">Business Excellence</a></li>
</ul>
</li>
<li id="menu-item-7483" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7483"><a>For Investors</a>
<ul class="sub-menu">
	<li id="menu-item-7484" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7484"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/overview/default.aspx">Overview</a></li>
	<li id="menu-item-10431" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10431"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/news/default.aspx">News</a></li>
	<li id="menu-item-7542" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7542"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/events/default.aspx">Events</a></li>
	<li id="menu-item-7488" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7488"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/stock-info/default.aspx">Stock Information</a></li>
	<li id="menu-item-7487" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7487"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/overview/financials/quarterly-results/default.aspx">Financials</a></li>
	<li id="menu-item-7486" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7486"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/governance/governance-documents/default.aspx">Governance</a></li>
	<li id="menu-item-10432" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10432"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/overview/resources/investor-faqs/default.aspx">Resources</a></li>
</ul>
</li>
<li id="menu-item-8744" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8744"><a href="https://www.bookingholdings.com/careers/careers/">Careers</a>
<ul class="sub-menu">
	<li id="menu-item-8740" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8740"><a href="https://www.bookingholdings.com/careers/careers/">Careers @ BKNG</a></li>
	<li id="menu-item-8743" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8743"><a href="https://www.bookingholdings.com/careers/why-booking-holdings/">Why BKNG</a></li>
	<li id="menu-item-8742" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8742"><a href="https://www.bookingholdings.com/careers/working-bkng/">Working @ BKNG</a></li>
	<li id="menu-item-10488" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10488"><a target="_blank" rel="noopener" href="https://bookingholdings-coe.com/">Careers @ Our Centers Of Excellence</a></li>
	<li id="menu-item-8741" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8741"><a href="https://www.bookingholdings.com/careers/careers-at-our-brands/">Careers @ our brands</a></li>
</ul>
</li>
</ul></div> 
      </ul>
      
      <ul class="nav navbar-nav navbar-right">
      	<li><a href="https://www.bookingholdings.com/privacy-notice/"><span class="privacy-header-text">PRIVACY</span></a></li>
        <span class="dividier"></span>
        <li class="btn-globe">
          <a href="https://www.bookingholdings.com/global-view/">
          <div class="text-wrapper">
            <span class="btn-globe__text">Global View</span>
          </div>
          <div class="globe-wrapper">
            <img src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng_globe-icon.svg" class="globe-icon globe-icon--white"></img>
            <img src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng_globe-icon-rollover.svg" class="globe-icon globe-icon--blue"></img>
            <img src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng_globe-icon-black.svg" class="globe-icon globe-icon--black"></img>
          </div>
        </a></li>
      </ul>
      
      <div class="mobile-nav">
       <!--<div class="mobile-globe">
          <a href="https://www.bookingholdings.com/global-view/">
            <img src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng_globe-icon.svg" class="mobile-globe globe-icon globe-icon--white"></img>
            <img src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng_globe-icon-black.svg" class="mobile-globe globe-icon globe-icon--black"></img>
          </a>
        </div>--> 
        <div class="burger-menu">
          <button class="hamburger hamburger--squeeze" type="button" aria-label="Menu" aria-controls="navigation">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <nav class="mobile-navbar">
          <div class="menu-main-menu-container"><ul id="menu-main-menu-1" class="mobile-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-257"><a href="https://www.bookingholdings.com/">Home</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-7422"><a>About</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7464"><a href="https://www.bookingholdings.com/about/factsheet/">Factsheet</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10774"><a href="https://www.bookingholdings.com/about/leadership/">Leadership</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7492"><a href="https://www.bookingholdings.com/about/history/">History</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-264"><a href="https://www.bookingholdings.com/media-room/">Media Room</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-10273 current_page_item menu-item-10285"><a href="https://www.bookingholdings.com/about/compliance-and-ethics/" aria-current="page">Compliance &#038; Ethics</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-258"><a>Brands</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-259"><a href="https://www.bookingholdings.com/brands/booking/">Booking.com</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-260"><a href="https://www.bookingholdings.com/brands/priceline/">Priceline</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-261"><a href="https://www.bookingholdings.com/brands/agoda/">agoda</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-263"><a href="https://www.bookingholdings.com/brands/rentalcars/">Rentalcars.com</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a href="https://www.bookingholdings.com/brands/kayak/">KAYAK</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2375"><a href="https://www.bookingholdings.com/brands/opentable/">OpenTable</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9954"><a href="https://www.rocketmiles.com/">Rocketmiles</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9955"><a href="https://fareharbor.com/">FareHarbor</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9956"><a href="https://www.hotelscombined.com/">HotelsCombined</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9957"><a href="https://www.cheapflights.com/">Cheapflights</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9958"><a href="https://www.momondo.com/">momondo</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-10198"><a href="https://www.bookingholdings.com/sustainability/">Sustainability</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10203"><a href="https://www.bookingholdings.com/sustainability/">Overview</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10202"><a href="https://www.bookingholdings.com/sustainability/sustainable-travel/">Sustainable Travel</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10201"><a href="https://www.bookingholdings.com/sustainability/sustainable-operations/">Sustainable Operations</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10200"><a href="https://www.bookingholdings.com/sustainability/taking-care-of-our-people/">Taking Care of Our People</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10199"><a href="https://www.bookingholdings.com/sustainability/business-excellence/">Business Excellence</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7483"><a>For Investors</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7484"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/overview/default.aspx">Overview</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10431"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/news/default.aspx">News</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7542"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/events/default.aspx">Events</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7488"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/stock-info/default.aspx">Stock Information</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7487"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/overview/financials/quarterly-results/default.aspx">Financials</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7486"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/governance/governance-documents/default.aspx">Governance</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10432"><a target="_blank" rel="noopener" href="https://ir.bookingholdings.com/overview/resources/investor-faqs/default.aspx">Resources</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8744"><a href="https://www.bookingholdings.com/careers/careers/">Careers</a>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8740"><a href="https://www.bookingholdings.com/careers/careers/">Careers @ BKNG</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8743"><a href="https://www.bookingholdings.com/careers/why-booking-holdings/">Why BKNG</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8742"><a href="https://www.bookingholdings.com/careers/working-bkng/">Working @ BKNG</a></li>
	<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10488"><a target="_blank" rel="noopener" href="https://bookingholdings-coe.com/">Careers @ Our Centers Of Excellence</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8741"><a href="https://www.bookingholdings.com/careers/careers-at-our-brands/">Careers @ our brands</a></li>
</ul>
</li>
</ul></div> 
		  <div class="mobile-nav-bottom clearfix">
			<div class="mobile-nav-bottom-item"><a href="https://www.bookingholdings.com/privacy-notice/"><span class="privacy-header-text">PRIVACY</span></a></div>
			<div class="mobile-nav-bottom-item clearfix">
				<div class="mobile-globe-col-1">      			
					<a href="https://www.bookingholdings.com/global-view/"><span class="privacy-header-text">GLOBAL VIEW</span></a>
				</div>
				<div class="mobile-globe-col-2">
					<img src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng_globe-icon.svg" class="mobile-globe globe-icon globe-icon--white"></img>
					<img src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/svg/bkng_globe-icon-black.svg" class="mobile-globe globe-icon globe-icon--black"></img>      	
				</div>
			</div>
		  </div>          
      </nav>      
    </nav>
    </div>
  </header>


              
<div class="page-sustainability page-scroll">

  <div class="page-head--fullsize white" id="page-head-full" style="background-image: url('https://www.bookingholdings.com/wp-content/uploads/2022/05/rocky-coastline.jpg')">
  <div class="container">
    <div class="page-head__body">
      <div class="row">
        <div class="col-12 col-lg-8 head-left-section">
          <h1>Compliance &#038; Ethics</h1>
                      <p><!-- wp:paragraph --></p>
<h2>The Right Results, The Right Way.</h2>
<p><!-- /wp:paragraph --> <!-- wp:paragraph --></p>
<p>Booking Holdings’ story has been defined by the Company’s outstanding growth, execution, financial discipline, and innovation. We strive to have a Compliance &amp; Ethics function that is as worthy, high-performing, and efficient as the highly talented professionals and companies that have built this great story.</p>
<p>Our Compliance &amp; Ethics function strives to achieve lasting value for the Company and its stakeholders by fostering an organizational culture built on a collective commitment to our value of Absolute Integrity and providing robust processes and systems to prevent, detect, and respond to violations of law and other misconduct.</p>
<p><!-- /wp:paragraph --></p>
                    
                      <div class="bottom-head-content">
              <a href="#overview"><span>Read more</span>
                <img class="arrow-down arrow-down--white" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-down--white.png">
                <img class="arrow-down arrow-down--black" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-down--black.png">
              </a>
            </div>
                                  <section class="section-share">
    <span class="share-span">SHARE</span>
    
    <ul class="share-links-wrapper">
      <li>
        <a class="email-share" href="mailto:?subject=Booking Holdings | Compliance &#038; Ethics&body=https://www.bookingholdings.com/about/compliance-and-ethics/">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </li> 
      <li>
        <a href="" class="facebook-share" onclick="facebook_share('https://www.bookingholdings.com/about/compliance-and-ethics/');return false;">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="" class="twitter-share" onclick="twitter_share('https://www.bookingholdings.com/about/compliance-and-ethics/', 'Check out Booking Holdings Compliance &#038; Ethics section'); return false;">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </li> 
      <li>
        <a href="" class="linkedin-share" onclick="popUp=window.open('https://www.linkedin.com/shareArticle?mini=true&url=https://www.bookingholdings.com/about/compliance-and-ethics/&title=', 'popupwindow', 'scrollbars=yes,width=800,height=400');popUp.focus();return false">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </li> 
    </ul>
    
</section>        </div>
         
        <div class="col-12 col-lg-4">
			<ul class="right-nav__list ">
			  										<li class="right-nav__item factsheet">
						  <a href="https://www.bookingholdings.com/about/factsheet/">
							<div class="rollover-img" style="background-image: url('https://www.bookingholdings.com/wp-content/uploads/2018/01/head-full-factsheet.png')"></div>
							<span>FACTSHEET</span>
							<div class="arrow-wrapper">
							  <img class="arrow-right" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-right-white.png">
							</div>
						  </a>
						</li>
						<li class="right-nav__item leadership">
						  <a href="https://www.bookingholdings.com/about/leadership/">
							<div class="rollover-img" style="background-image: url('https://www.bookingholdings.com/wp-content/uploads/2018/01/head-full-leadership.png')"></div>
							<span>LEADERSHIP</span>
							<div class="arrow-wrapper">
							  <img class="arrow-right" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-right-white.png">
							</div>
						  </a>
						</li>
						<li class="right-nav__item history">
						  <a href="https://www.bookingholdings.com/about/history/">
							<div class="rollover-img" style="background-image: url('https://www.bookingholdings.com/wp-content/uploads/2018/01/head-full-history.png')"></div>
							<span>HISTORY</span>
							<div class="arrow-wrapper">
							  <img class="arrow-right" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-right-white.png">
							</div>
						  </a>
						</li>		
						<li class="right-nav__item media-room"> 
						  <a href="https://www.bookingholdings.com/media-room/">
							<div class="rollover-img" style="background-image: url('https://www.bookingholdings.com/wp-content/uploads/2022/05/mediaRoomThumbnail@2x.png')"></div>
							<span>MEDIA ROOM</span>
							<div class="arrow-wrapper">
							  <img class="arrow-right" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-right-white.png">
							</div>
						  </a>
						</li>   						
						<li class="right-nav__item compliance">
						  <a href="https://www.bookingholdings.com/about/compliance-and-ethics/">
							<div class="rollover-img" style="background-image: url('https://www.bookingholdings.com/wp-content/uploads/2022/05/Compliance-Thumbnail@2x.png')"></div>
							<span>COMPLIANCE & ETHICS</span>
							<div class="arrow-wrapper">
							  <img class="arrow-right" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-right-white.png">
							</div>
						  </a>
						</li>			
							  			</ul>
        </div>          
      </div>
    </div>
  </div>
</div>
  
  <div class="container" id="overview">
    <div class="row">
		<nav class="col-2 col-left side-nav">
			<div class="side-nav-wrap">
				<ul id="menu-compliance-menu" class="compliance-nav clearfix"><li id="menu-item-10280" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10280"><a href="https://www.bookingholdings.com/code-of-conduct/">Code of Conduct</a></li>
<li id="menu-item-10281" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10281"><a href="https://www.bookingholdings.com/supplier-code-of-conduct/">Supplier Code of Conduct</a></li>
<li id="menu-item-10458" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10458"><a href="https://www.bookingholdings.com/about/compliance-and-ethics/human-rights/">Human Rights</a></li>
<li id="menu-item-10283" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10283"><a target="_blank" rel="noopener" href="https://www.bookingholdings.com/wp-content/uploads/2022/05/BHI-Modern-Slavery-Statement-2022.04.21-2.pdf">Modern Slavery Statement</a></li>
</ul> 			</div>
		</nav>

		<div class="col-12 col-xl-10 col-right">
			<div class="chart-0" id="operations">

			  	
				
				  
<div class="content-module scroll-section no-top-border">
	<div class="page-header">
					<div class="section-label" id=""> </div>
						<h2 class="section-header">Code of Conduct</h2>
			
	</div>	
	<div class="page-content single-column-module">
		<div class="row columns clearfix">			
			<p>Our Code of Conduct embodies our collective commitment to our value of Absolute Integrity, which is the bond that unites us and is woven into everything we do. All directors, officers, and employees of the Company, wherever they are located, are expected to adhere to the Code and espouse the principles and values it embodies at all times.</p>
<p><a class="single-column-link" href="https://bookingholdings.com/code-of-conduct/"><span class="compliance-link-text" style="display:inline-block; margin-right:15px;">Learn more</span><img class="link-arrow" style="height:12px; width:12px; margin-bottom:3px;" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-right-black.svg" alt="Link arrow"></a></p>						
		</div>		
	</div>
</div>


				 
				  
<div class="content-module scroll-section no-top-border">
	<div class="page-header">
					<h2 class="section-header">Supplier Code of Conduct</h2>
			
	</div>	
	<div class="page-content single-column-module">
		<div class="row columns clearfix">			
			<p>We expect our Suppliers to share our commitment to our value of Absolute Integrity and adhere to the highest ethical standards, all applicable laws, and the requirements established in our Supplier Code of Conduct when doing business with us.</p>
<p><a class="single-column-link" href="https://bookingholdings.com/supplier-code-of-conduct/"><span class="compliance-link-text" style="display:inline-block; margin-right:15px;">Learn more</span><img class="link-arrow" style="height:12px; width:12px; margin-bottom:3px;" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-right-black.svg" alt="Link arrow"></a></p>						
		</div>		
	</div>
</div>


				 
				  
<div class="content-module scroll-section no-top-border">
	<div class="page-header">
					<h2 class="section-header">Human Rights</h2>
			
	</div>	
	<div class="page-content single-column-module">
		<div class="row columns clearfix">			
			<p>We are committed to respecting and promoting human rights wherever we do business. Our Human Rights Statement articulates our approach to respecting and promoting human rights so that travel can bring out the best in humanity.</p>
<p><a class="single-column-link" href="https://bookingholdings.com/about/compliance-and-ethics/human-rights/" target="_blank"><span class="compliance-link-text" style="display:inline-block; margin-right:15px;">Learn more</span><img class="link-arrow" style="height:12px; width:12px; margin-bottom:3px;" src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-right-black.svg" alt="Link arrow"></a></p>						
		</div>		
	</div>
</div>


				 
				  
<div class="content-module scroll-section no-top-border">
	<div class="page-header">
					<h2 class="section-header">Modern Slavery Statement</h2>
			
	</div>	
	<div class="page-content single-column-module">
		<div class="row columns clearfix">			
			<p>We recognize that Modern Slavery in all its forms, including slavery, human trafficking, forced labor, debt bondage, descent-based slavery, servitude, child slavery, and forced and early marriage, is a global issue and an increasing problem. We have a zero-tolerance approach to Modern Slavery within our own Company, as well as our supply chain, contractors, and our partners and affiliates. Our Modern Slavery Statement sets out the actions taken by the Company to prevent Modern Slavery.</p>
<p><a class="single-column-link" href="https://www.bookingholdings.com/wp-content/uploads/2023/05/BHI-Modern-Slavery-Statement-2023.04.20.pdf" target="_blank"><span class="compliance-link-text" style="display:inline-block; margin-right:15px;">Learn more</span><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.58004 19.07H17.4335C17.7981 19.07 18.0935 18.7745 18.0935 18.41C18.0935 18.0455 17.7981 17.75 17.4335 17.75H1.58004C1.21556 17.75 0.920044 18.0455 0.920044 18.41C0.920044 18.7745 1.21556 19.07 1.58004 19.07Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5882 11.335C13.3259 11.0819 12.9078 11.0895 12.6549 11.3519L10.1598 13.9394V0.919766C10.1598 0.555501 9.86455 0.259766 9.49985 0.259766C9.13558 0.259766 8.83985 0.555501 8.83985 0.919766V13.9394L6.34508 11.3519C6.09199 11.0895 5.67413 11.0819 5.41178 11.335C5.14946 11.5881 5.14183 12.0056 5.39492 12.2682L9.02492 16.0327C9.02631 16.0343 9.02825 16.0353 9.02954 16.0367L9.03813 16.0453C9.03953 16.0465 9.04049 16.0482 9.04178 16.0494C9.05231 16.0594 9.06423 16.0666 9.07508 16.0755C9.08142 16.0811 9.08733 16.0861 9.09356 16.0911C9.1058 16.1007 9.11708 16.1122 9.12954 16.1208C9.13287 16.1227 9.13653 16.1244 9.13986 16.1267C9.15629 16.1376 9.17412 16.1452 9.19131 16.1544C9.2085 16.1636 9.22429 16.1746 9.24212 16.1821C9.24578 16.1835 9.25007 16.1845 9.25362 16.1858C9.27242 16.1937 9.29165 16.198 9.31109 16.2039C9.32892 16.2095 9.34643 16.2165 9.36416 16.2205C9.36845 16.2214 9.37275 16.2214 9.37672 16.2221C9.3966 16.2257 9.41636 16.2264 9.43645 16.2283C9.456 16.2303 9.4748 16.234 9.49425 16.234C9.49618 16.234 9.4979 16.2346 9.49983 16.2346C9.50187 16.2346 9.5038 16.234 9.50574 16.234C9.52497 16.234 9.54409 16.2303 9.56353 16.2283C9.5833 16.2264 9.60349 16.2257 9.62326 16.2221C9.62723 16.2214 9.63153 16.2211 9.63551 16.2205C9.65366 16.2165 9.67074 16.2095 9.68857 16.2039C9.70812 16.198 9.72757 16.1937 9.74637 16.1858C9.75034 16.1841 9.75432 16.1835 9.75786 16.1821C9.77505 16.1749 9.79095 16.164 9.80738 16.155C9.82554 16.1455 9.84337 16.1376 9.86056 16.1264C9.86378 16.1244 9.86743 16.1227 9.87012 16.1208C9.88269 16.1122 9.89418 16.1007 9.9061 16.0911C9.91137 16.0868 9.91663 16.0828 9.92157 16.0782C9.93382 16.0683 9.94703 16.0604 9.9582 16.0494C9.95981 16.0482 9.96089 16.0462 9.96218 16.0448L9.97045 16.0367C9.97174 16.0353 9.97367 16.0343 9.97507 16.0327L13.6051 12.2682C13.8582 12.0056 13.8505 11.5881 13.5882 11.335" fill="black"/></svg></a></p>						
		</div>		
	</div>
</div>


				 		 	  			</div>
		</div>
    </div>




    <footer class="footer">
      <a href="#" class="back-top-top" onclick="scrollToTop();return false;">Back to top</a>
      <div class="row">
          
        <div class="col-left col-12 col-sm-6">
          <div class="menu-footer-menu-container"><ul id="menu-footer-menu" class="footer-menu"><li id="menu-item-292" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-292"><a href="https://www.bookingholdings.com/">Home</a></li>
<li id="menu-item-7554" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7554"><a href="https://www.bookingholdings.com/about/factsheet/">About</a></li>
<li id="menu-item-295" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-295"><a href="https://www.bookingholdings.com/brands/booking/">Brands</a></li>
<li id="menu-item-10215" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10215"><a href="https://www.bookingholdings.com/sustainability/">Sustainability</a></li>
<li id="menu-item-294" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-294"><a href="https://www.bookingholdings.com/media-room/">Media Room</a></li>
<li id="menu-item-7343" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7343"><a href="https://www.bookingholdings.com/code-of-conduct/">Code of Conduct</a></li>
<li id="menu-item-9243" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9243"><a href="https://www.bookingholdings.com/careers/careers/">Careers</a></li>
<li id="menu-item-296" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-296"><a href="https://ir.bookingholdings.com/">For Investors</a></li>
<li id="menu-item-7308" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7308"><a href="https://www.bookingholdings.com/global-view/">Global View</a></li>
</ul></div> 
        </div>
        <div class="col-right col-12 col-sm-6">
          <div class="col-right__content row">
      		<div class="privacy-policy col-sm-12 col-12" style="max-width:370px;">
    	        <p>Booking Holdings is a registered service mark and BOOKING HOLDINGS is a service mark. | All material herein © 2024 Booking Holdings, all rights reserved. <a href="https://www.bookingholdings.com/privacy-notice/">Privacy Notice.</a></p>
<p></p>                    	  
            </div>
           <!-- <div class="footer-social col-sm-4 col-12">-->
              <!--<div class="social-wrapper">-->
              <!--  <div class="social-title">Follow Us</div>-->
              <!--      -->
              <!--        -->
              <!--          <a class="social-item" href="https://www.linkedin.com/company/the-priceline-group">-->
              <!--            <img class="footer__social-icon" src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_footer-linkedin.svg"></img>-->
              <!--            <img class="footer__social-icon--rollover" src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_footer-linkedin-rollove.svg"></img>-->
              <!--          </a>-->
              <!--        -->
              <!--          <a class="social-item" href="https://twitter.com/PricelineGroup">-->
              <!--            <img class="footer__social-icon" src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_footer-twitter.svg"></img>-->
              <!--            <img class="footer__social-icon--rollover" src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_footer-twitter-rollover.svg"></img>-->
              <!--          </a>-->
              <!--        -->
              <!--      -->
              <!--</div>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </footer>
    </div>
  </div>
</div>
  <div class="brands-bottom">
  <div class="brands container-fluid">
          <ul class="brands-wrapper row">
                                      <li class="col-2 booking">
            <div class="hover-me"></div>
            <div class="row partially-open">
              <div class="wrapper-partially">
              <img src="https://www.bookingholdings.com/wp-content/uploads/2020/11/bkng_brands-partialopen-booking.com_-1.svg"></img>
              </div>
            </div>
            <div class="row full-open">
              <a href="https://www.bookingholdings.com/brands/booking/">
                <div class="wrapper-img__full-open">
                  <img src="https://www.bookingholdings.com/wp-content/uploads/2020/11/bkng_brands-fullyopen-booking.com_-1.svg"></img>
                </div>
                <div class="description">
                  <div class="content">
                    <h5>Booking.com</h5>
                    Booking.com is a global online leader in connecting travelers with the widest choice of incredible places to stay.                   </div>
                  <div class="arrow"><span></span></div>
                </div>
              </a>
            </div>
          </li>
                            <li class="col-2 priceline">
            <div class="hover-me"></div>
            <div class="row partially-open">
              <div class="wrapper-partially">
              <img src="https://www.bookingholdings.com/wp-content/uploads/2018/05/brands-partialopen-priceline.svg"></img>
              </div>
            </div>
            <div class="row full-open">
              <a href="https://www.bookingholdings.com/brands/priceline/">
                <div class="wrapper-img__full-open">
                  <img src="https://www.bookingholdings.com/wp-content/uploads/2018/05/brands-fullyopen-priceline.svg"></img>
                </div>
                <div class="description">
                  <div class="content">
                    <h5>Priceline</h5>
                    Priceline is a leader in online discount travel.  <br />
<br />
                  </div>
                  <div class="arrow"><span></span></div>
                </div>
              </a>
            </div>
          </li>
                            <li class="col-2 agoda">
            <div class="hover-me"></div>
            <div class="row partially-open">
              <div class="wrapper-partially">
              <img src="https://www.bookingholdings.com/wp-content/uploads/2019/10/bkng_brands-partialopen-agoda.svg"></img>
              </div>
            </div>
            <div class="row full-open">
              <a href="https://www.bookingholdings.com/brands/agoda/">
                <div class="wrapper-img__full-open">
                  <img src="https://www.bookingholdings.com/wp-content/uploads/2019/10/bkng_brands-fullyopen-agoda-1.svg"></img>
                </div>
                <div class="description">
                  <div class="content">
                    <h5>Agoda</h5>
                    Agoda is a leading global online accommodations provider based in the heart of Asia.                   </div>
                  <div class="arrow"><span></span></div>
                </div>
              </a>
            </div>
          </li>
                            <li class="col-2 rentalcars">
            <div class="hover-me"></div>
            <div class="row partially-open">
              <div class="wrapper-partially">
              <img src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-partialopen-rentalcars.svg"></img>
              </div>
            </div>
            <div class="row full-open">
              <a href="https://www.bookingholdings.com/brands/rentalcars/">
                <div class="wrapper-img__full-open">
                  <img src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-fullyopen-rentalcars.com_.svg"></img>
                </div>
                <div class="description">
                  <div class="content">
                    <h5>Rentalcars.com</h5>
                    Rentalcars.com is operated as part of Booking.com and offers online rental car reservation services.                  </div>
                  <div class="arrow"><span></span></div>
                </div>
              </a>
            </div>
          </li>
                            <li class="col-2 kayak">
            <div class="hover-me"></div>
            <div class="row partially-open">
              <div class="wrapper-partially">
              <img src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-partialopen-kayak.svg"></img>
              </div>
            </div>
            <div class="row full-open">
              <a href="https://www.bookingholdings.com/brands/kayak/">
                <div class="wrapper-img__full-open">
                  <img src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-fullyopen-kayak-1.svg"></img>
                </div>
                <div class="description">
                  <div class="content">
                    <h5>KAYAK</h5>
                    KAYAK provides an online price comparison service that allows consumers to easily search travel itineraries and prices.                  </div>
                  <div class="arrow"><span></span></div>
                </div>
              </a>
            </div>
          </li>
                            <li class="col-2 opentable">
            <div class="hover-me"></div>
            <div class="row partially-open">
              <div class="wrapper-partially">
              <img src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-partialopen-opentable.svg"></img>
              </div>
            </div>
            <div class="row full-open">
              <a href="https://www.bookingholdings.com/brands/opentable/">
                <div class="wrapper-img__full-open">
                  <img src="https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-fullyopen-opentable.svg"></img>
                </div>
                <div class="description">
                  <div class="content">
                    <h5>OpenTable</h5>
                    OpenTable is a leading brand for booking online restaurant reservations.<br />
<br />
                  </div>
                  <div class="arrow"><span></span></div>
                </div>
              </a>
            </div>
          </li>
              </ul>
      </div>
  
  <div class="brands-mobile">
    <div class="brands-mobile__open">
      <span class="brands-mobile__title">Our Brands</span>
                  <ul class="brands-mobile__list row">
                                                      <li class="brands-mobile__list-item col-4 col-sm-2">
                <a href="https://www.bookingholdings.com/brands/booking/">
                  <img src=" https://www.bookingholdings.com/wp-content/uploads/2020/11/bkng_brands-mobile-booking.com_-1.svg"></img>
                </a>
              </li>
                                        <li class="brands-mobile__list-item col-4 col-sm-2">
                <a href="https://www.bookingholdings.com/brands/priceline/">
                  <img src=" https://www.bookingholdings.com/wp-content/uploads/2018/05/brands-mobile-priceline.com_.svg"></img>
                </a>
              </li>
                                        <li class="brands-mobile__list-item col-4 col-sm-2">
                <a href="https://www.bookingholdings.com/brands/agoda/">
                  <img src=" https://www.bookingholdings.com/wp-content/uploads/2019/10/bkng_brands-fullyopen-agoda-1.svg"></img>
                </a>
              </li>
                                        <li class="brands-mobile__list-item col-4 col-sm-2">
                <a href="https://www.bookingholdings.com/brands/rentalcars/">
                  <img src=" https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-mobile-rentalcars.svg"></img>
                </a>
              </li>
                                        <li class="brands-mobile__list-item col-4 col-sm-2">
                <a href="https://www.bookingholdings.com/brands/kayak/">
                  <img src=" https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-mobile-kayak.svg"></img>
                </a>
              </li>
                                        <li class="brands-mobile__list-item col-4 col-sm-2">
                <a href="https://www.bookingholdings.com/brands/opentable/">
                  <img src=" https://www.bookingholdings.com/wp-content/uploads/2018/02/bkng_brands-mobile-opentable.svg"></img>
                </a>
              </li>
                      </ul>
              <div class="arrow arrow-down">
        <img src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-down--white.png"></img></div>
    </div>
    <div class="brands-mobile__close">
      <a class="arrow arrow-up"><img src="https://www.bookingholdings.com/wp-content/themes/booking-group/img/arrow-up.png"></img></a>
    </div>
  </div>
  <div class="colorful-border">
    <ul class="row">
      <li class="booking-color col-2"></li>
      <li class="priceline-color col-2"></li>
      <li class="agoda-color col-2"></li>
      <li class="rentalcars-color col-2"></li>
      <li class="kayak-color col-2"></li>
      <li class="opentable-color col-2"></li>
    </ul>
  </div>
</div>	<div id="su-footer-links" style="text-align: center;"></div><script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/slick.js?ver=20230727' id='slick-js-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/jquery.scrollify.js?ver=20230727' id='scrollify-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/jquery.easing.1.3.js?ver=20230727' id='jquery-easing-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/header.js?ver=20230727' id='header-js-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/home.js?ver=20230727' id='home-js-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/main.js?ver=20230727' id='main-js-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/fullscreenParallax.js?ver=20230727' id='fullscreen-parallax-js-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/amcharts-3.21.12/amcharts.js?ver=20230727' id='amcharts-js'></script>
<script type='text/javascript' src='https://www.bookingholdings.com/wp-content/themes/booking-group/js/lib/amcharts-3.21.12/serial.js?ver=20230727' id='amcharts-serial-js'></script>

</body>
</html>