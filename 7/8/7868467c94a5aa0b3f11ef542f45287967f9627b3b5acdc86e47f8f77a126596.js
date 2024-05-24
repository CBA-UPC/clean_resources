/*! This file is s:function(){return k},createHooks:function(){return f},currentAction:function(){return w},currentFilter:function(){return I},defaultHooks:function(){return h},didAction:function(){return O},didFilter:function(){return j},doAction:function(){return b},doingAction:function(){return x},doingFilter:function(){return T},filters:function(){return z},hasAction:function(){return _},hasFilter:function(){return y},removeAction:function(){return A},removeAllActions:function(){return F},removeAllFilters:function(){return g},removeFilter:function(){return v}});var r=function(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var e=function(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var o=function(n,t){return function(o,i,c,s=10){const u=n[t];if(!e(o))return;if(!r(i))return;if("function"!=typeof c)return void console.error("The hook callback must be a function.");if("number"!=typeof s)return void console.error("If specified, the hook priority must be a number.");const l={callback:c,priority:s,namespace:i};if(u[o]){const n=u[o].handlers;let t;for(t=n.length;t>0&&!(s>=n[t-1].priority);t--);t===n.length?n[t]=l:n.splice(t,0,l),u.__current.forEach((n=>{n.name===o&&n.currentIndex>=t&&n.currentIndex++}))}else u[o]={handlers:[l],runs:0};"hookAdded"!==o&&n.doAction("hookAdded",o,i,c,s)}};var i=function(n,t,o=!1){return function(i,c){const s=n[t];if(!e(i))return;if(!o&&!r(c))return;if(!s[i])return 0;let u=0;if(o)u=s[i].handlers.length,s[i]={runs:s[i].runs,handlers:[]};else{const n=s[i].handlers;for(let t=n.length-1;t>=0;t--)n[t].namespace===c&&(n.splice(t,1),u++,s.__current.forEach((n=>{n.name===i&&n.currentIndex>=t&&n.currentIndex--})))}return"hookRemoved"!==i&&n.doAction("hookRemoved",i,c),u}};var c=function(n,t){return function(r,e){const o=n[t];return void 0!==e?r in o&&o[r].handlers.some((n=>n.namespace===e)):r in o}};var s=function(n,t,r=!1){return function(e,...o){const i=n[t];i[e]||(i[e]={handlers:[],runs:0}),i[e].runs++;const c=i[e].handlers;if(!c||!c.length)return r?o[0]:void 0;const s={name:e,currentIndex:0};for(i.__current.push(s);s.currentIndex<c.length;){const n=c[s.currentIndex].callback.apply(null,o);r&&(o[0]=n),s.currentIndex++}return i.__current.pop(),r?o[0]:void 0}};var u=function(n,t){return function(){var r;const e=n[t];return null!==(r=e.__current[e.__current.length-1]?.name)&&void 0!==r?r:null}};var l=function(n,t){return function(r){const e=n[t];return void 0===r?void 0!==e.__current[0]:!!e.__current[0]&&r===e.__current[0].name}};var a=function(n,t){return function(r){const o=n[t];if(e(r))return o[r]&&o[r].runs?o[r].runs:0}};class d{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=o(this,"actions"),this.addFilter=o(this,"filters"),this.removeAction=i(this,"actions"),this.removeFilter=i(this,"filters"),this.hasAction=c(this,"actions"),this.hasFilter=c(this,"filters"),this.removeAllActions=i(this,"actions",!0),this.removeAllFilters=i(this,"filters",!0),this.doAction=s(this,"actions"),this.applyFilters=s(this,"filters",!0),this.currentAction=u(this,"actions"),this.currentFilter=u(this,"filters"),this.doingAction=l(this,"actions"),this.doingFilter=l(this,"filters"),this.didAction=a(this,"actions"),this.didFilter=a(this,"filters")}}var f=function(){return new d};const h=f(),{addAction:m,addFilter:p,removeAction:A,removeFilter:v,hasAction:_,hasFilter:y,removeAllActions:F,removeAllFilters:g,doAction:b,applyFilters:k,currentAction:w,currentFilter:I,doingAction:x,doingFilter:T,didAction:O,didFilter:j,actions:S,filters:z}=h;(window.wp=window.wp||{}).hooks=t}();yfillScriptElement.nextSibling);
            }
        }
    </script> <script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-polyfills.min.ACSHASHf381d5147c85ee687ea8fbef32c83d37.js"></script> <script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-jquery.min.ACSHASH35986a813756f39ab6b922979ffedb03.js"></script> <script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-jquery-cookie.min.ACSHASH20aafdf6904d3dc5db0e0e33abbfc1a4.js"></script> <script type="text/javascript" src="https://az725175.vo.msecnd.net/scripts/jsll-4.js"></script>  <script src="/etc.clientlibs/microsoft/clientlibs/exp-analytics/v1.min.ACSHASH4cffc2c9b55f8bde649e0d2535a1eebd.js"></script> <script type="text/javascript">
                var expToken = {
                    "exp": {
                        "target": {
                            "propertyToken": "3c148cf5-9769-f782-32c4-14f7eba5d269",
                            "visitorJsHash": "30368a72d017e4133bfd3b5d073d06ff",
                            "expJsHash": "895e2a12062f1ee44d7d72d266904bde",
                            "isExpWithoutPersonalizationEnabled": ("false"==="true")
                        }
                    }
                };
                window.cas = expToken;
            </script> <script type="text/javascript" src="/etc.clientlibs/microsoft/clientlibs/exp-cookiecomp/v1.min.ACSHASHc343dfb005ac8c14ae0dd22dd17fb2fc.js" async></script> <meta name="exp-visitor-anchor" content=""/>       <meta name="exp-atjs-anchor" content=""/>  <link id="onecloud-head-style" href="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4OFm4" type="text/css" rel="stylesheet"/> <script id="onecloud-head-script" type="text/javascript" src="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4OxzH" async></script> </head> <body class="page basicpage"> <span style="display:none">   <script>
  	  			window.mscv = 'CASMicrosoftCV21b810bb.0'
  			</script>         <script>
  	  			window.msservercv = 'CASMicrosoftCV21b810bb.0'
  			</script>    Trace Id is missing <script>
					window.traceid = undefined;
				</script>  </span> <script type="text/javascript">
		window.msauthIsPublisher = true;
	</script>        <span aria-hidden="true" class="d-none geo-info" data-continent="EU" data-country_code="ES" data-region_code="CT" data-city="BARCELONA" data-timezone="GMT+1" data-zip="" data-county="" data-areacode=""> </span>  <div id="page-top" tabindex="-1"></div> <div id="modalsRenderedAfterPageLoad"> </div> <div class="root responsivegrid"> <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "> <div class="universalheader aem-GridColumn aem-GridColumn--default--12" data-component-id="cf9a86dceae618e01d6e6399d243873c">         <link rel="stylesheet" href="https://www.microsoft.com/onerfstatics/marketingsites-neu-prod/west-european/shell/_scrf/css/themes=default.device=uplevel_web_pc_webkit_chrome/29-591900/68-c3a397/f4-0855a6/a8-3dc4a6/f1-3221a1/dc-d4cb46/1f-806835/44-c33a61?ver=2.0&amp;_cf=20210618" type="text/css" media="all" />    <div id="headerArea" class="uhf"  data-m='{"cN":"headerArea","cT":"Area_coreuiArea","id":"a1Body","sN":1,"aN":"Body"}'>
                <div id="headerRegion"      data-region-key="headerregion" data-m='{"cN":"headerRegion","cT":"Region_coreui-region","id":"r1a1","sN":1,"aN":"a1"}' >

    <div  id="headerUniversalHeader" data-m='{"cN":"headerUniversalHeader","cT":"Module_coreui-universalheader","id":"m1r1a1","sN":1,"aN":"r1a1"}'  data-module-id="Category|headerRegion|coreui-region|headerUniversalHeader|coreui-universalheader">
        


                        <div data-m='{"cN":"cookiebanner_cont","cT":"Container","id":"c1m1r1a1","sN":1,"aN":"m1r1a1"}'>

<div id="uhfCookieAlert" data-locale="es-es">
    <div id="msccBannerV2"></div>
</div>

                            
                        </div>




        <a id="uhfSkipToMain" class="m-skip-to-main" href="javascript:void(0)" data-href="#mainContent" tabindex="0" data-m='{"cN":"Skip to content_nonnav","id":"nn2m1r1a1","sN":2,"aN":"m1r1a1"}'>Saltar al contenido principal</a>


<header class="c-uhfh context-uhf no-js c-sgl-stck c-category-header " itemscope="itemscope" data-header-footprint="/OfficeProducts/m365-globalnavheader, fromService: True"   data-magict="true"   itemtype="http://schema.org/Organization">
    <div class="theme-light js-global-head f-closed  global-head-cont" data-m='{"cN":"Universal Header_cont","cT":"Container","id":"c3m1r1a1","sN":3,"aN":"m1r1a1"}'>
        <div class="c-uhfh-gcontainer-st">
            <button type="button" class="c-action-trigger c-glyph glyph-global-nav-button" aria-label="All Microsoft expand to see list of Microsoft products and services" initialState-label="All Microsoft expand to see list of Microsoft products and services" toggleState-label="Close All Microsoft list" aria-expanded="false" data-m='{"cN":"Mobile menu button_nonnav","id":"nn1c3m1r1a1","sN":1,"aN":"c3m1r1a1"}'></button>
            <button type="button" class="c-action-trigger c-glyph glyph-arrow-htmllegacy c-close-search" aria-label="Cerrar la b&#250;squeda" aria-expanded="false" data-m='{"cN":"Close Search_nonnav","id":"nn2c3m1r1a1","sN":2,"aN":"c3m1r1a1"}'></button>
                    <a id="uhfLogo" class="c-logo c-sgl-stk-uhfLogo" itemprop="url" href="https://www.microsoft.com" aria-label="Microsoft" data-m='{"cN":"GlobalNav_Logo_cont","cT":"Container","id":"c3c3m1r1a1","sN":3,"aN":"c3m1r1a1"}'>
                        <img alt="" itemprop="logo" class="c-image" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" role="presentation" aria-hidden="true" />
                        <span itemprop="name" role="presentation" aria-hidden="true">Microsoft</span>
                    </a>
            <div class="f-mobile-title">
                <button type="button" class="c-action-trigger c-glyph glyph-chevron-left" aria-label="Ver m&#225;s opciones del men&#250;" data-m='{"cN":"Mobile back button_nonnav","id":"nn4c3m1r1a1","sN":4,"aN":"c3m1r1a1"}'></button>
                <span data-global-title="P&#225;gina principal de Microsoft" class="js-mobile-title">Microsoft 365</span>
                <button type="button" class="c-action-trigger c-glyph glyph-chevron-right" aria-label="Ver m&#225;s opciones del men&#250;" data-m='{"cN":"Mobile forward button_nonnav","id":"nn5c3m1r1a1","sN":5,"aN":"c3m1r1a1"}'></button>
            </div>
                    <div class="c-show-pipe x-hidden-vp-mobile-st">
                        <a id="uhfCatLogo" class="c-logo c-cat-logo" href="https://www.microsoft.com/es-es/microsoft-365" aria-label="Microsoft 365" itemprop="url" data-m='{"cN":"CatNav_Microsoft 365_nav","id":"n6c3m1r1a1","sN":6,"aN":"c3m1r1a1"}'>
                                <span>Microsoft 365</span>
                        </a>
                    </div>
                <div class="cat-logo-button-cont x-hidden">
                        <button type="button" id="uhfCatLogoButton" class="c-cat-logo-button x-hidden" aria-expanded="false" aria-label="Microsoft 365" data-m='{"cN":"Microsoft 365_nonnav","id":"nn7c3m1r1a1","sN":7,"aN":"c3m1r1a1"}'>
                            Microsoft 365
                        </button>
                </div>



                    <nav id="uhf-g-nav" aria-label="Menú contextual" class="c-uhfh-gnav" data-m='{"cN":"Category nav_cont","cT":"Container","id":"c8c3m1r1a1","sN":8,"aN":"c3m1r1a1"}'>
            <ul class="js-paddle-items">
                    <li class="single-link js-nav-menu x-hidden-none-mobile-vp uhf-menu-item">
                        <a class="c-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365" data-m='{"cN":"CatNav_Inicio_nav","id":"n1c8c3m1r1a1","sN":1,"aN":"c8c3m1r1a1"}' > Inicio </a>
                    </li>
                                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_0"  aria-expanded="false" data-m='{"id":"nn2c8c3m1r1a1","sN":2,"aN":"c8c3m1r1a1"}'>Productos</button>

                                <ul class="f-multi-column f-multi-column-6" data-class-idn="f-multi-column f-multi-column-6" aria-hidden="true" data-m='{"cT":"Container","id":"c3c8c3m1r1a1","sN":3,"aN":"c8c3m1r1a1"}'>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c1c3c8c3m1r1a1","sN":1,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_1-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c1c3c8c3m1r1a1","sN":1,"aN":"c1c3c8c3m1r1a1"}'>Para el hogar</span>
    <button id="uhf-navbtn-shellmenu_1-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c1c3c8c3m1r1a1","sN":2,"aN":"c1c3c8c3m1r1a1"}'>Para el hogar</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_1-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c1c3c8c3m1r1a1","sN":3,"aN":"c1c3c8c3m1r1a1"}'>
            <a id="shellmenu_2" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/compare-all-microsoft-365-products?&amp;activetab=tab:primaryr1" data-m='{"id":"n1c3c1c3c8c3m1r1a1","sN":1,"aN":"c3c1c3c8c3m1r1a1"}'>Precios para el hogar</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c1c3c8c3m1r1a1","sN":4,"aN":"c1c3c8c3m1r1a1"}'>
            <a id="shellmenu_3" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/p/microsoft-365-family/cfq7ttc0k5dm" data-m='{"id":"n1c4c1c3c8c3m1r1a1","sN":1,"aN":"c4c1c3c8c3m1r1a1"}'>Para familias</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c1c3c8c3m1r1a1","sN":5,"aN":"c1c3c8c3m1r1a1"}'>
            <a id="shellmenu_4" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf" data-m='{"id":"n1c5c1c3c8c3m1r1a1","sN":1,"aN":"c5c1c3c8c3m1r1a1"}'>Para particulares</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c6c1c3c8c3m1r1a1","sN":6,"aN":"c1c3c8c3m1r1a1"}'>
            <a id="shellmenu_5" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/education/products/office" data-m='{"id":"n1c6c1c3c8c3m1r1a1","sN":1,"aN":"c6c1c3c8c3m1r1a1"}'>Para estudiantes</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c7c1c3c8c3m1r1a1","sN":7,"aN":"c1c3c8c3m1r1a1"}'>
            <a id="shellmenu_6" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/explore-microsoft-365-for-home" data-m='{"id":"n1c7c1c3c8c3m1r1a1","sN":1,"aN":"c7c1c3c8c3m1r1a1"}'>Ver todos los art&#237;culos</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c2c3c8c3m1r1a1","sN":2,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_7-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c2c3c8c3m1r1a1","sN":1,"aN":"c2c3c8c3m1r1a1"}'>Para empresas</span>
    <button id="uhf-navbtn-shellmenu_7-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c2c3c8c3m1r1a1","sN":2,"aN":"c2c3c8c3m1r1a1"}'>Para empresas</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_7-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c2c3c8c3m1r1a1","sN":3,"aN":"c2c3c8c3m1r1a1"}'>
            <a id="shellmenu_8" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/compare-all-microsoft-365-products?&amp;activetab=tab:primaryr2" data-m='{"id":"n1c3c2c3c8c3m1r1a1","sN":1,"aN":"c3c2c3c8c3m1r1a1"}'>Precios para peque&#241;as empresas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c2c3c8c3m1r1a1","sN":4,"aN":"c2c3c8c3m1r1a1"}'>
            <a id="shellmenu_9" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/business" data-m='{"id":"n1c4c2c3c8c3m1r1a1","sN":1,"aN":"c4c2c3c8c3m1r1a1"}'>Para peque&#241;as empresas</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c3c3c8c3m1r1a1","sN":3,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_10-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c3c3c8c3m1r1a1","sN":1,"aN":"c3c3c8c3m1r1a1"}'>Para grandes empresas</span>
    <button id="uhf-navbtn-shellmenu_10-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c3c3c8c3m1r1a1","sN":2,"aN":"c3c3c8c3m1r1a1"}'>Para grandes empresas</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_10-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c3c3c8c3m1r1a1","sN":3,"aN":"c3c3c8c3m1r1a1"}'>
            <a id="shellmenu_11" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/enterprise/microsoft365-plans-and-pricing" data-m='{"id":"n1c3c3c3c8c3m1r1a1","sN":1,"aN":"c3c3c3c8c3m1r1a1"}'>Precios para grandes empresas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c3c3c8c3m1r1a1","sN":4,"aN":"c3c3c8c3m1r1a1"}'>
            <a id="shellmenu_12" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/enterprise" data-m='{"id":"n1c4c3c3c8c3m1r1a1","sN":1,"aN":"c4c3c3c8c3m1r1a1"}'>Para grandes empresas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c3c3c8c3m1r1a1","sN":5,"aN":"c3c3c8c3m1r1a1"}'>
            <a id="shellmenu_13" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/enterprise/frontline" data-m='{"id":"n1c5c3c3c8c3m1r1a1","sN":1,"aN":"c5c3c3c8c3m1r1a1"}'>Para personal de primera l&#237;nea</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c4c3c8c3m1r1a1","sN":4,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_14-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c4c3c8c3m1r1a1","sN":1,"aN":"c4c3c8c3m1r1a1"}'>Aplicaciones y servicios</span>
    <button id="uhf-navbtn-shellmenu_14-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c4c3c8c3m1r1a1","sN":2,"aN":"c4c3c8c3m1r1a1"}'>Aplicaciones y servicios</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_14-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c4c3c8c3m1r1a1","sN":3,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_15" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/excel" data-m='{"id":"n1c3c4c3c8c3m1r1a1","sN":1,"aN":"c3c4c3c8c3m1r1a1"}'>Excel</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c4c3c8c3m1r1a1","sN":4,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_16" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-teams/group-chat-software" data-m='{"id":"n1c4c4c3c8c3m1r1a1","sN":1,"aN":"c4c4c3c8c3m1r1a1"}'>Microsoft Teams</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c4c3c8c3m1r1a1","sN":5,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_17" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/word" data-m='{"id":"n1c5c4c3c8c3m1r1a1","sN":1,"aN":"c5c4c3c8c3m1r1a1"}'>Word</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c6c4c3c8c3m1r1a1","sN":6,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_18" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/onedrive/online-cloud-storage" data-m='{"id":"n1c6c4c3c8c3m1r1a1","sN":1,"aN":"c6c4c3c8c3m1r1a1"}'>OneDrive</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c7c4c3c8c3m1r1a1","sN":7,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_19" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/onenote/digital-note-taking-app" data-m='{"id":"n1c7c4c3c8c3m1r1a1","sN":1,"aN":"c7c4c3c8c3m1r1a1"}'>OneNote</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c8c4c3c8c3m1r1a1","sN":8,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_20" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook" data-m='{"id":"n1c8c4c3c8c3m1r1a1","sN":1,"aN":"c8c4c3c8c3m1r1a1"}'>Outlook</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c9c4c3c8c3m1r1a1","sN":9,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_21" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/powerpoint" data-m='{"id":"n1c9c4c3c8c3m1r1a1","sN":1,"aN":"c9c4c3c8c3m1r1a1"}'>PowerPoint</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c10c4c3c8c3m1r1a1","sN":10,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_22" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/project/project-management-software" data-m='{"id":"n1c10c4c3c8c3m1r1a1","sN":1,"aN":"c10c4c3c8c3m1r1a1"}'>Project</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c11c4c3c8c3m1r1a1","sN":11,"aN":"c4c3c8c3m1r1a1"}'>
            <a id="shellmenu_23" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/products-apps-services" data-m='{"id":"n1c11c4c3c8c3m1r1a1","sN":1,"aN":"c11c4c3c8c3m1r1a1"}'>Ver todas las aplicaciones y servicios</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c5c3c8c3m1r1a1","sN":5,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_24-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c5c3c8c3m1r1a1","sN":1,"aN":"c5c3c8c3m1r1a1"}'>M&#225;s</span>
    <button id="uhf-navbtn-shellmenu_24-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c5c3c8c3m1r1a1","sN":2,"aN":"c5c3c8c3m1r1a1"}'>M&#225;s</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_24-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c5c3c8c3m1r1a1","sN":3,"aN":"c5c3c8c3m1r1a1"}'>
            <a id="shellmenu_25" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/microsoft-office" data-m='{"id":"n1c3c5c3c8c3m1r1a1","sN":1,"aN":"c3c5c3c8c3m1r1a1"}'>Microsoft Office</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c5c3c8c3m1r1a1","sN":4,"aN":"c5c3c8c3m1r1a1"}'>
            <a id="shellmenu_26" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/windows-365" data-m='{"id":"n1c4c5c3c8c3m1r1a1","sN":1,"aN":"c4c5c3c8c3m1r1a1"}'>Windows 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c5c3c8c3m1r1a1","sN":5,"aN":"c5c3c8c3m1r1a1"}'>
            <a id="shellmenu_27" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/security/mobile-authenticator-app" data-m='{"id":"n1c5c5c3c8c3m1r1a1","sN":1,"aN":"c5c5c3c8c3m1r1a1"}'>Microsoft Authenticator</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c6c5c3c8c3m1r1a1","sN":6,"aN":"c5c3c8c3m1r1a1"}'>
            <a id="shellmenu_28" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/enterprise-mobility-security" data-m='{"id":"n1c6c5c3c8c3m1r1a1","sN":1,"aN":"c6c5c3c8c3m1r1a1"}'>Enterprise Mobility + Security</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c7c5c3c8c3m1r1a1","sN":7,"aN":"c5c3c8c3m1r1a1"}'>
            <a id="shellmenu_29" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/edge" data-m='{"id":"n1c7c5c3c8c3m1r1a1","sN":1,"aN":"c7c5c3c8c3m1r1a1"}'>Microsoft Edge</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c8c5c3c8c3m1r1a1","sN":8,"aN":"c5c3c8c3m1r1a1"}'>
            <a id="shellmenu_30" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/nonprofit/plans-and-pricing" data-m='{"id":"n1c8c5c3c8c3m1r1a1","sN":1,"aN":"c8c5c3c8c3m1r1a1"}'>Para organizaciones sin &#225;nimo de lucro</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c9c5c3c8c3m1r1a1","sN":9,"aN":"c5c3c8c3m1r1a1"}'>
            <a id="shellmenu_31" class="js-subm-uhf-nav-link" href="https://go.microsoft.com/fwlink/p/?linkid=864773" data-m='{"id":"n1c9c5c3c8c3m1r1a1","sN":1,"aN":"c9c5c3c8c3m1r1a1"}'>Para centros educativos</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c6c3c8c3m1r1a1","sN":6,"aN":"c3c8c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_32-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c6c3c8c3m1r1a1","sN":1,"aN":"c6c3c8c3m1r1a1"}'>Novedades</span>
    <button id="uhf-navbtn-shellmenu_32-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c6c3c8c3m1r1a1","sN":2,"aN":"c6c3c8c3m1r1a1"}'>Novedades</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_32-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c6c3c8c3m1r1a1","sN":3,"aN":"c6c3c8c3m1r1a1"}'>
            <a id="shellmenu_33" class="js-subm-uhf-nav-link" href="https://go.microsoft.com/fwlink/?linkid=2249278" data-m='{"id":"n1c3c6c3c8c3m1r1a1","sN":1,"aN":"c3c6c3c8c3m1r1a1"}'>Microsoft Copilot para Microsoft 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c6c3c8c3m1r1a1","sN":4,"aN":"c6c3c8c3m1r1a1"}'>
            <a id="shellmenu_34" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/clipchamp" data-m='{"id":"n1c4c6c3c8c3m1r1a1","sN":1,"aN":"c4c6c3c8c3m1r1a1"}'>Clipchamp</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c6c3c8c3m1r1a1","sN":5,"aN":"c6c3c8c3m1r1a1"}'>
            <a id="shellmenu_35" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-viva" data-m='{"id":"n1c5c6c3c8c3m1r1a1","sN":1,"aN":"c5c6c3c8c3m1r1a1"}'>Microsoft Viva</a>
            
        </li>
    </ul>
    
</li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="single-link js-nav-menu uhf-menu-item">
                            <a id="c-shellmenu_36" class="c-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/business/compare-all-microsoft-365-business-products" data-m='{"id":"n4c8c3m1r1a1","sN":4,"aN":"c8c3m1r1a1"}'>Planes y precios</a>
                        </li>
                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_37"  aria-expanded="false" data-m='{"id":"nn5c8c3m1r1a1","sN":5,"aN":"c8c3m1r1a1"}'>Recursos</button>

                                <ul class="" data-class-idn="" aria-hidden="true" data-m='{"cT":"Container","id":"c6c8c3m1r1a1","sN":6,"aN":"c8c3m1r1a1"}'>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c1c6c8c3m1r1a1","sN":1,"aN":"c6c8c3m1r1a1"}'>
            <a id="c-shellmenu_38" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/copilot-for-work" data-m='{"id":"n1c1c6c8c3m1r1a1","sN":1,"aN":"c1c6c8c3m1r1a1"}'>Copilot para el trabajo</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c2c6c8c3m1r1a1","sN":2,"aN":"c6c8c3m1r1a1"}'>
            <a id="c-shellmenu_39" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/cost-savings" data-m='{"id":"n1c2c6c8c3m1r1a1","sN":1,"aN":"c2c6c8c3m1r1a1"}'>Ahorro de costes</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c6c8c3m1r1a1","sN":3,"aN":"c6c8c3m1r1a1"}'>
            <a id="c-shellmenu_40" class="js-subm-uhf-nav-link" href="https://support.office.com/es-es/article/accounts-in-office-628ea040-f265-49de-b986-be09c3ebf8a9" data-m='{"id":"n1c3c6c8c3m1r1a1","sN":1,"aN":"c3c6c8c3m1r1a1"}'>Cuentas y facturaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c6c8c3m1r1a1","sN":4,"aN":"c6c8c3m1r1a1"}'>
            <a id="c-shellmenu_41" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/microsoft-365-for-home-and-school-faq" data-m='{"id":"n1c4c6c8c3m1r1a1","sN":1,"aN":"c4c6c8c3m1r1a1"}'>Preguntas m&#225;s frecuentes</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c6c8c3m1r1a1","sN":5,"aN":"c6c8c3m1r1a1"}'>
            <a id="c-shellmenu_42" class="js-subm-uhf-nav-link" href="https://support.office.com/es-es/article/download-and-install-or-reinstall-office-365-or-office-2016-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658" data-m='{"id":"n1c5c6c8c3m1r1a1","sN":1,"aN":"c5c6c8c3m1r1a1"}'>Configuraci&#243;n e instalaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c6c6c8c3m1r1a1","sN":6,"aN":"c6c8c3m1r1a1"}'>
            <a id="c-shellmenu_43" class="js-subm-uhf-nav-link" href="https://templates.office.com" data-m='{"id":"n1c6c6c8c3m1r1a1","sN":1,"aN":"c6c6c8c3m1r1a1"}'>Plantillas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c7c6c8c3m1r1a1","sN":7,"aN":"c6c8c3m1r1a1"}'>
            <a id="c-shellmenu_44" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/es-es/training" data-m='{"id":"n1c7c6c8c3m1r1a1","sN":1,"aN":"c7c6c8c3m1r1a1"}'>Aprendizaje</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c8c6c8c3m1r1a1","sN":8,"aN":"c6c8c3m1r1a1"}'>
            <a id="c-shellmenu_45" class="js-subm-uhf-nav-link" href="https://support.office.com/es-es/article/what-s-new-in-office-365-95c8d81d-08ba-42c1-914f-bca4603e1426?ui=en-US&amp;rs=en-US&amp;ad=US" data-m='{"id":"n1c8c6c8c3m1r1a1","sN":1,"aN":"c8c6c8c3m1r1a1"}'>Novedades</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c9c6c8c3m1r1a1","sN":9,"aN":"c6c8c3m1r1a1"}'>
            <a id="c-shellmenu_46" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/small-business-resource-center" data-m='{"id":"n1c9c6c8c3m1r1a1","sN":1,"aN":"c9c6c8c3m1r1a1"}'>Centro de recursos para peque&#241;as empresas</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="nested-menu uhf-menu-item">
                            <div class="c-uhf-menu js-nav-menu">
                                <button type="button" id="c-shellmenu_47"  aria-expanded="false" data-m='{"id":"nn7c8c3m1r1a1","sN":7,"aN":"c8c3m1r1a1"}'>Soporte</button>

                                <ul class="" data-class-idn="" aria-hidden="true" data-m='{"cT":"Container","id":"c8c8c3m1r1a1","sN":8,"aN":"c8c3m1r1a1"}'>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c1c8c8c3m1r1a1","sN":1,"aN":"c8c8c3m1r1a1"}'>

    <span id="uhf-navspn-c-shellmenu_48-span" style="display:none"   aria-expanded="false" data-m='{"id":"nn1c1c8c8c3m1r1a1","sN":1,"aN":"c1c8c8c3m1r1a1"}'>Para uso personal y familiar</span>
    <button id="uhf-navbtn-c-shellmenu_48-button" type="button"   aria-expanded="false" data-m='{"id":"nn2c1c8c8c3m1r1a1","sN":2,"aN":"c1c8c8c3m1r1a1"}'>Para uso personal y familiar</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-c-shellmenu_48-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c1c8c8c3m1r1a1","sN":3,"aN":"c1c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_49" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/" data-m='{"id":"n1c3c1c8c8c3m1r1a1","sN":1,"aN":"c3c1c8c8c3m1r1a1"}'>Recursos de ayuda autoguiada</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c1c8c8c3m1r1a1","sN":4,"aN":"c1c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_50" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/es-es/account-and-billing" data-m='{"id":"n1c4c1c8c8c3m1r1a1","sN":1,"aN":"c4c1c8c8c3m1r1a1"}'>Soporte t&#233;cnico para facturaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c1c8c8c3m1r1a1","sN":5,"aN":"c1c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_51" class="js-subm-uhf-nav-link" href="https://answers.microsoft.com/es-es/msoffice/forum/msoffice_OfH" data-m='{"id":"n1c5c1c8c8c3m1r1a1","sN":1,"aN":"c5c1c8c8c3m1r1a1"}'>Comunidad</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c2c8c8c3m1r1a1","sN":2,"aN":"c8c8c3m1r1a1"}'>

    <span id="uhf-navspn-c-shellmenu_52-span" style="display:none"   aria-expanded="false" data-m='{"id":"nn1c2c8c8c3m1r1a1","sN":1,"aN":"c2c8c8c3m1r1a1"}'>Para el trabajo</span>
    <button id="uhf-navbtn-c-shellmenu_52-button" type="button"   aria-expanded="false" data-m='{"id":"nn2c2c8c8c3m1r1a1","sN":2,"aN":"c2c8c8c3m1r1a1"}'>Para el trabajo</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-c-shellmenu_52-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c2c8c8c3m1r1a1","sN":3,"aN":"c2c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_53" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/" data-m='{"id":"n1c3c2c8c8c3m1r1a1","sN":1,"aN":"c3c2c8c8c3m1r1a1"}'>Recursos de ayuda autoguiada</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c2c8c8c3m1r1a1","sN":4,"aN":"c2c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_54" class="js-subm-uhf-nav-link" href="https://docs.microsoft.com/es-es/microsoft-365/?view=o365-worldwide" data-m='{"id":"n1c4c2c8c8c3m1r1a1","sN":1,"aN":"c4c2c8c8c3m1r1a1"}'>Ayuda autoguiada para administradores</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c2c8c8c3m1r1a1","sN":5,"aN":"c2c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_55" class="js-subm-uhf-nav-link" href="https://docs.microsoft.com/es-es/microsoft-365/commerce/?view=o365-worldwide" data-m='{"id":"n1c5c2c8c8c3m1r1a1","sN":1,"aN":"c5c2c8c8c3m1r1a1"}'>Soporte t&#233;cnico para facturaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c6c2c8c8c3m1r1a1","sN":6,"aN":"c2c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_56" class="js-subm-uhf-nav-link" href="https://appsource.microsoft.com/es-es/marketplace/partner-dir?filter=sort%3D0%3BpageSize%3D18%3BonlyThisCountry%3Dtrue%3Bcountry%3DES%3Blocname%3DSpain%3BlocationNotRequired%3Dtrue" data-m='{"id":"n1c6c2c8c8c3m1r1a1","sN":1,"aN":"c6c2c8c8c3m1r1a1"}'>Buscar un partner</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c7c2c8c8c3m1r1a1","sN":7,"aN":"c2c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_57" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/business/sales-support" data-m='{"id":"n1c7c2c8c8c3m1r1a1","sN":1,"aN":"c7c2c8c8c3m1r1a1"}'>Contacto con ventas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c8c2c8c8c3m1r1a1","sN":8,"aN":"c2c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_58" class="js-subm-uhf-nav-link" href="https://answers.microsoft.com/es-es/msoffice/forum/msoffice_OfB" data-m='{"id":"n1c8c2c8c8c3m1r1a1","sN":1,"aN":"c8c2c8c8c3m1r1a1"}'>Comunidad</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c3c8c8c3m1r1a1","sN":3,"aN":"c8c8c3m1r1a1"}'>

    <span id="uhf-navspn-c-shellmenu_59-span" style="display:none"   aria-expanded="false" data-m='{"id":"nn1c3c8c8c3m1r1a1","sN":1,"aN":"c3c8c8c3m1r1a1"}'>Para el &#225;mbito educativo</span>
    <button id="uhf-navbtn-c-shellmenu_59-button" type="button"   aria-expanded="false" data-m='{"id":"nn2c3c8c8c3m1r1a1","sN":2,"aN":"c3c8c8c3m1r1a1"}'>Para el &#225;mbito educativo</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-c-shellmenu_59-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c3c8c8c3m1r1a1","sN":3,"aN":"c3c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_60" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/es-es/education" data-m='{"id":"n1c3c3c8c8c3m1r1a1","sN":1,"aN":"c3c3c8c8c3m1r1a1"}'>Recursos de ayuda autoguiada</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c3c8c8c3m1r1a1","sN":4,"aN":"c3c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_61" class="js-subm-uhf-nav-link" href="https://education.microsoft.com/es-es/" data-m='{"id":"n1c4c3c8c8c3m1r1a1","sN":1,"aN":"c4c3c8c8c3m1r1a1"}'>Centro para formadores</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c3c8c8c3m1r1a1","sN":5,"aN":"c3c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_62" class="js-subm-uhf-nav-link" href="https://aka.ms/edusupport" data-m='{"id":"n1c5c3c8c8c3m1r1a1","sN":1,"aN":"c5c3c8c8c3m1r1a1"}'>Solicitar soporte t&#233;cnico</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c6c3c8c8c3m1r1a1","sN":6,"aN":"c3c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_63" class="js-subm-uhf-nav-link" href="https://answers.microsoft.com/es-es/msoffice/forum/msoffice_OfE" data-m='{"id":"n1c6c3c8c8c3m1r1a1","sN":1,"aN":"c6c3c8c8c3m1r1a1"}'>Comunidad</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c4c8c8c3m1r1a1","sN":4,"aN":"c8c8c3m1r1a1"}'>

    <span id="uhf-navspn-c-shellmenu_64-span" style="display:none"   aria-expanded="false" data-m='{"id":"nn1c4c8c8c3m1r1a1","sN":1,"aN":"c4c8c8c3m1r1a1"}'>Para partners</span>
    <button id="uhf-navbtn-c-shellmenu_64-button" type="button"   aria-expanded="false" data-m='{"id":"nn2c4c8c8c3m1r1a1","sN":2,"aN":"c4c8c8c3m1r1a1"}'>Para partners</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-c-shellmenu_64-span">
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c3c4c8c8c3m1r1a1","sN":3,"aN":"c4c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_65" class="js-subm-uhf-nav-link" href="https://partner.microsoft.com/es-es/" data-m='{"id":"n1c3c4c8c8c3m1r1a1","sN":1,"aN":"c3c4c8c8c3m1r1a1"}'>Convertirse en partner</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c4c4c8c8c3m1r1a1","sN":4,"aN":"c4c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_66" class="js-subm-uhf-nav-link" href="https://partner.microsoft.com/es-es/" data-m='{"id":"n1c4c4c8c8c3m1r1a1","sN":1,"aN":"c4c4c8c8c3m1r1a1"}'>Recursos para partners</a>
            
        </li>
    </ul>
    
</li>
        <li class="js-nav-menu single-link" data-m='{"cT":"Container","id":"c5c8c8c3m1r1a1","sN":5,"aN":"c8c8c3m1r1a1"}'>
            <a id="c-shellmenu_67" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/support" data-m='{"id":"n1c5c8c8c3m1r1a1","sN":1,"aN":"c5c8c8c3m1r1a1"}'>Ver todas las opciones</a>
            
        </li>
                                                    
                                </ul>
                            </div>
                        </li>                        <li class="single-link js-nav-menu uhf-menu-item">
                            <a id="c-shellmenu_custom_button_solid_newtab_trial" class="c-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/try" data-m='{"id":"n9c8c3m1r1a1","sN":9,"aN":"c8c3m1r1a1"}'>Probar gratis</a>
                        </li>


                <li id="overflow-menu" class="overflow-menu x-hidden uhf-menu-item">
                        <div class="c-uhf-menu js-nav-menu">
        <button data-m='{"pid":"Más","id":"nn10c8c3m1r1a1","sN":10,"aN":"c8c3m1r1a1"}' type="button" aria-label="M&#225;s" aria-expanded="false">M&#225;s</button>
        <ul id="overflow-menu-list" aria-hidden="true" class="overflow-menu-list">
        </ul>
    </div>

                </li>
                            </ul>
            
        </nav>


            <div class="c-uhfh-actions" data-m='{"cN":"Header actions_cont","cT":"Container","id":"c9c3m1r1a1","sN":9,"aN":"c3m1r1a1"}'>
                <div class="wf-menu">        <nav id="uhf-c-nav" aria-label="Todo el menú de Microsoft" data-m='{"cN":"GlobalNav_cont","cT":"Container","id":"c1c9c3m1r1a1","sN":1,"aN":"c9c3m1r1a1"}'>
            <ul class="js-paddle-items">
                <li>
                    <div class="c-uhf-menu js-nav-menu">
                        <button type="button" class="c-button-logo all-ms-nav" aria-expanded="false" data-m='{"cN":"GlobalNav_More_nonnav","id":"nn1c1c9c3m1r1a1","sN":1,"aN":"c1c9c3m1r1a1"}'> <span>Todo Microsoft</span></button>
                        <ul class="f-multi-column f-multi-column-6" aria-hidden="true" data-m='{"cN":"More_cont","cT":"Container","id":"c2c1c9c3m1r1a1","sN":2,"aN":"c1c9c3m1r1a1"}'>
                                    <li class="c-w0-contr">
            <h2 class="c-uhf-sronly">Global</h2>
            <ul class="c-w0">
        <li class="js-nav-menu single-link" data-m='{"cN":"M365_cont","cT":"Container","id":"c1c2c1c9c3m1r1a1","sN":1,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_69" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-365" data-m='{"cN":"W0Nav_M365_nav","id":"n1c1c2c1c9c3m1r1a1","sN":1,"aN":"c1c2c1c9c3m1r1a1"}'>Microsoft 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Teams_cont","cT":"Container","id":"c2c2c1c9c3m1r1a1","sN":2,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="l0_Teams" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-teams/group-chat-software" data-m='{"cN":"W0Nav_Teams_nav","id":"n1c2c2c1c9c3m1r1a1","sN":1,"aN":"c2c2c1c9c3m1r1a1"}'>Teams</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Copilot_cont","cT":"Container","id":"c3c2c1c9c3m1r1a1","sN":3,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_71" class="js-subm-uhf-nav-link" href="https://copilot.microsoft.com/" data-m='{"cN":"W0Nav_Copilot_nav","id":"n1c3c2c1c9c3m1r1a1","sN":1,"aN":"c3c2c1c9c3m1r1a1"}'>Copilot</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Windows_cont","cT":"Container","id":"c4c2c1c9c3m1r1a1","sN":4,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_72" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/windows/" data-m='{"cN":"W0Nav_Windows_nav","id":"n1c4c2c1c9c3m1r1a1","sN":1,"aN":"c4c2c1c9c3m1r1a1"}'>Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Surface_cont","cT":"Container","id":"c5c2c1c9c3m1r1a1","sN":5,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_73" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/surface" data-m='{"cN":"W0Nav_Surface_nav","id":"n1c5c2c1c9c3m1r1a1","sN":1,"aN":"c5c2c1c9c3m1r1a1"}'>Surface</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Xbox_cont","cT":"Container","id":"c6c2c1c9c3m1r1a1","sN":6,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_74" class="js-subm-uhf-nav-link" href="https://www.xbox.com/" data-m='{"cN":"W0Nav_Xbox_nav","id":"n1c6c2c1c9c3m1r1a1","sN":1,"aN":"c6c2c1c9c3m1r1a1"}'>Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Deals_cont","cT":"Container","id":"c7c2c1c9c3m1r1a1","sN":7,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_75" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/sale?icid=TopNavDealsSale" data-m='{"cN":"W0Nav_Deals_nav","id":"n1c7c2c1c9c3m1r1a1","sN":1,"aN":"c7c2c1c9c3m1r1a1"}'>Ofertas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Small Business_cont","cT":"Container","id":"c8c2c1c9c3m1r1a1","sN":8,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="l0_SmallBusiness" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/business" data-m='{"cN":"W0Nav_Small Business_nav","id":"n1c8c2c1c9c3m1r1a1","sN":1,"aN":"c8c2c1c9c3m1r1a1"}'>Peque&#241;as empresas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Support_cont","cT":"Container","id":"c9c2c1c9c3m1r1a1","sN":9,"aN":"c2c1c9c3m1r1a1"}'>
            <a id="l1_support" class="js-subm-uhf-nav-link" href="https://support.microsoft.com/es-es" data-m='{"cN":"W0Nav_Support_nav","id":"n1c9c2c1c9c3m1r1a1","sN":1,"aN":"c9c2c1c9c3m1r1a1"}'>Soporte</a>
            
        </li>
            </ul>
        </li>

<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c10c2c1c9c3m1r1a1","sN":10,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_79-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c10c2c1c9c3m1r1a1","sN":1,"aN":"c10c2c1c9c3m1r1a1"}'>Software</span>
    <button id="uhf-navbtn-shellmenu_79-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c10c2c1c9c3m1r1a1","sN":2,"aN":"c10c2c1c9c3m1r1a1"}'>Software</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_79-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_WindowsApps_cont","cT":"Container","id":"c3c10c2c1c9c3m1r1a1","sN":3,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_80" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/apps/windows?icid=CNavAppsWindowsApps" data-m='{"cN":"GlobalNav_More_Software_WindowsApps_nav","id":"n1c3c10c2c1c9c3m1r1a1","sN":1,"aN":"c3c10c2c1c9c3m1r1a1"}'>Aplicaciones Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_AI_cont","cT":"Container","id":"c4c10c2c1c9c3m1r1a1","sN":4,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_81" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/ai" data-m='{"cN":"GlobalNav_More_Software_AI_nav","id":"n1c4c10c2c1c9c3m1r1a1","sN":1,"aN":"c4c10c2c1c9c3m1r1a1"}'>IA</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_OneDrive_cont","cT":"Container","id":"c5c10c2c1c9c3m1r1a1","sN":5,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_82" class="js-subm-uhf-nav-link" href="https://onedrive.live.com/about/es-es/" data-m='{"cN":"GlobalNav_More_Software_OneDrive_nav","id":"n1c5c10c2c1c9c3m1r1a1","sN":1,"aN":"c5c10c2c1c9c3m1r1a1"}'>OneDrive</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Outlook_cont","cT":"Container","id":"c6c10c2c1c9c3m1r1a1","sN":6,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_83" class="js-subm-uhf-nav-link" href="https://outlook.live.com/owa/" data-m='{"cN":"GlobalNav_More_Software_Outlook_nav","id":"n1c6c10c2c1c9c3m1r1a1","sN":1,"aN":"c6c10c2c1c9c3m1r1a1"}'>Outlook</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Skype_cont","cT":"Container","id":"c7c10c2c1c9c3m1r1a1","sN":7,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_84" class="js-subm-uhf-nav-link" href="https://www.skype.com/es/" data-m='{"cN":"GlobalNav_More_Software_Skype_nav","id":"n1c7c10c2c1c9c3m1r1a1","sN":1,"aN":"c7c10c2c1c9c3m1r1a1"}'>Skype</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_OneNote_cont","cT":"Container","id":"c8c10c2c1c9c3m1r1a1","sN":8,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_85" class="js-subm-uhf-nav-link" href="https://www.onenote.com/?omkt=es-ES" data-m='{"cN":"GlobalNav_More_Software_OneNote_nav","id":"n1c8c10c2c1c9c3m1r1a1","sN":1,"aN":"c8c10c2c1c9c3m1r1a1"}'>OneNote</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Software_Microsoft Teams_cont","cT":"Container","id":"c9c10c2c1c9c3m1r1a1","sN":9,"aN":"c10c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_86" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/microsoft-teams/group-chat-software" data-m='{"cN":"GlobalNav_More_Software_Microsoft Teams_nav","id":"n1c9c10c2c1c9c3m1r1a1","sN":1,"aN":"c9c10c2c1c9c3m1r1a1"}'>Microsoft Teams</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cN":"PCsAndDevices_cont","cT":"Container","id":"c11c2c1c9c3m1r1a1","sN":11,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_87-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn1c11c2c1c9c3m1r1a1","sN":1,"aN":"c11c2c1c9c3m1r1a1"}'>PCs y dispositivos</span>
    <button id="uhf-navbtn-shellmenu_87-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"cN":"GlobalNav_PCsAndDevices_nonnav","id":"nn2c11c2c1c9c3m1r1a1","sN":2,"aN":"c11c2c1c9c3m1r1a1"}'>PCs y dispositivos</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_87-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_ShopXbox_cont","cT":"Container","id":"c3c11c2c1c9c3m1r1a1","sN":3,"aN":"c11c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_88" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/xbox?icid=CNavDevicesXbox" data-m='{"cN":"GlobalNav_More_PCsAndDevices_ShopXbox_nav","id":"n1c3c11c2c1c9c3m1r1a1","sN":1,"aN":"c3c11c2c1c9c3m1r1a1"}'>Comprar Xbox</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_PCsAndDevices_Accessories_cont","cT":"Container","id":"c4c11c2c1c9c3m1r1a1","sN":4,"aN":"c11c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_89" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/accessories?icid=CNavDevicesAccessories" data-m='{"cN":"GlobalNav_More_PCsAndDevices_Accessories_nav","id":"n1c4c11c2c1c9c3m1r1a1","sN":1,"aN":"c4c11c2c1c9c3m1r1a1"}'>Accesorios</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c12c2c1c9c3m1r1a1","sN":12,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_90-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c12c2c1c9c3m1r1a1","sN":1,"aN":"c12c2c1c9c3m1r1a1"}'>Entretenimiento</span>
    <button id="uhf-navbtn-shellmenu_90-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c12c2c1c9c3m1r1a1","sN":2,"aN":"c12c2c1c9c3m1r1a1"}'>Entretenimiento</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_90-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_XboxGamePassUltimate_cont","cT":"Container","id":"c3c12c2c1c9c3m1r1a1","sN":3,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_91" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/p/xbox-game-pass-ultimate/cfq7ttc0khs0?WT.mc_id=CNavGamesXboxGamePassUltimate" data-m='{"cN":"GlobalNav_More_Entertainment_XboxGamePassUltimate_nav","id":"n1c3c12c2c1c9c3m1r1a1","sN":1,"aN":"c3c12c2c1c9c3m1r1a1"}'>Xbox Game Pass Ultimate</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"Products_DevicesAndXbox_Xbox Live Gold_cont","cT":"Container","id":"c4c12c2c1c9c3m1r1a1","sN":4,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_92" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/p/xbox-live-gold/cfq7ttc0k5dj?WT.mc_id=CNavGamesXboxLiveGold" data-m='{"cN":"GlobalNav_Products_DevicesAndXbox_Xbox Live Gold_nav","id":"n1c4c12c2c1c9c3m1r1a1","sN":1,"aN":"c4c12c2c1c9c3m1r1a1"}'>Xbox Live Gold</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_XboxGames_cont","cT":"Container","id":"c5c12c2c1c9c3m1r1a1","sN":5,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_93" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/top-paid/games/xbox" data-m='{"cN":"GlobalNav_More_Entertainment_XboxGames_nav","id":"n1c5c12c2c1c9c3m1r1a1","sN":1,"aN":"c5c12c2c1c9c3m1r1a1"}'>Xbox y juegos</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_PCGames_cont","cT":"Container","id":"c6c12c2c1c9c3m1r1a1","sN":6,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_94" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/games/windows?icid=CNavGamesWindowsGames" data-m='{"cN":"GlobalNav_More_Entertainment_PCGames_nav","id":"n1c6c12c2c1c9c3m1r1a1","sN":1,"aN":"c6c12c2c1c9c3m1r1a1"}'>Juegos para PC</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_WindowsDigitalGames_cont","cT":"Container","id":"c7c12c2c1c9c3m1r1a1","sN":7,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_95" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/games/windows?icid=TopNavWindowsGames" data-m='{"cN":"GlobalNav_More_Entertainment_WindowsDigitalGames_nav","id":"n1c7c12c2c1c9c3m1r1a1","sN":1,"aN":"c7c12c2c1c9c3m1r1a1"}'>Juegos para Windows</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Entertainment_MoviesAndTV_cont","cT":"Container","id":"c8c12c2c1c9c3m1r1a1","sN":8,"aN":"c12c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_96" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/movies-and-tv?icid=TopNavMoviesAndTv" data-m='{"cN":"GlobalNav_More_Entertainment_MoviesAndTV_nav","id":"n1c8c12c2c1c9c3m1r1a1","sN":1,"aN":"c8c12c2c1c9c3m1r1a1"}'>Pel&#237;culas y TV</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c13c2c1c9c3m1r1a1","sN":13,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_97-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c13c2c1c9c3m1r1a1","sN":1,"aN":"c13c2c1c9c3m1r1a1"}'>Empresas</span>
    <button id="uhf-navbtn-shellmenu_97-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c13c2c1c9c3m1r1a1","sN":2,"aN":"c13c2c1c9c3m1r1a1"}'>Empresas</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_97-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft_Cloud_cont","cT":"Container","id":"c3c13c2c1c9c3m1r1a1","sN":3,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_98" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-cloud" data-m='{"cN":"GlobalNav_More_Business_Microsoft_Cloud_nav","id":"n1c3c13c2c1c9c3m1r1a1","sN":1,"aN":"c3c13c2c1c9c3m1r1a1"}'>Microsoft Cloud</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft Security_cont","cT":"Container","id":"c4c13c2c1c9c3m1r1a1","sN":4,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_99" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/security" data-m='{"cN":"GlobalNav_More_Business_Microsoft Security_nav","id":"n1c4c13c2c1c9c3m1r1a1","sN":1,"aN":"c4c13c2c1c9c3m1r1a1"}'>Seguridad de Microsoft</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_Azure_cont","cT":"Container","id":"c5c13c2c1c9c3m1r1a1","sN":5,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_100" class="js-subm-uhf-nav-link" href="https://azure.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_Azure_nav","id":"n1c5c13c2c1c9c3m1r1a1","sN":1,"aN":"c5c13c2c1c9c3m1r1a1"}'>Azure</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftDynamics365_cont","cT":"Container","id":"c6c13c2c1c9c3m1r1a1","sN":6,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_101" class="js-subm-uhf-nav-link" href="https://dynamics.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_Business_MicrosoftDynamics365_nav","id":"n1c6c13c2c1c9c3m1r1a1","sN":1,"aN":"c6c13c2c1c9c3m1r1a1"}'>Dynamics 365</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Microsoft365forbusiness_cont","cT":"Container","id":"c7c13c2c1c9c3m1r1a1","sN":7,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_102" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/microsoft-365/business" data-m='{"cN":"GlobalNav_More_Business_Microsoft365forbusiness_nav","id":"n1c7c13c2c1c9c3m1r1a1","sN":1,"aN":"c7c13c2c1c9c3m1r1a1"}'>Microsoft 365 para empresas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftIndustry_cont","cT":"Container","id":"c8c13c2c1c9c3m1r1a1","sN":8,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_103" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/industry" data-m='{"cN":"GlobalNav_More_Business_MicrosoftIndustry_nav","id":"n1c8c13c2c1c9c3m1r1a1","sN":1,"aN":"c8c13c2c1c9c3m1r1a1"}'>Microsoft Industry</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_MicrosoftPowerPlatform_cont","cT":"Container","id":"c9c13c2c1c9c3m1r1a1","sN":9,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_104" class="js-subm-uhf-nav-link" href="https://powerplatform.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_Business_MicrosoftPowerPlatform_nav","id":"n1c9c13c2c1c9c3m1r1a1","sN":1,"aN":"c9c13c2c1c9c3m1r1a1"}'>Microsoft Power Platform</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Business_Windows365_cont","cT":"Container","id":"c10c13c2c1c9c3m1r1a1","sN":10,"aN":"c13c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_105" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/windows-365" data-m='{"cN":"GlobalNav_More_Business_Windows365_nav","id":"n1c10c13c2c1c9c3m1r1a1","sN":1,"aN":"c10c13c2c1c9c3m1r1a1"}'>Windows 365</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c14c2c1c9c3m1r1a1","sN":14,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_106-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c14c2c1c9c3m1r1a1","sN":1,"aN":"c14c2c1c9c3m1r1a1"}'>Desarrolladores y TI
</span>
    <button id="uhf-navbtn-shellmenu_106-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c14c2c1c9c3m1r1a1","sN":2,"aN":"c14c2c1c9c3m1r1a1"}'>Desarrolladores y TI
</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_106-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_DeveloperCenter_cont","cT":"Container","id":"c3c14c2c1c9c3m1r1a1","sN":3,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_107" class="js-subm-uhf-nav-link" href="https://developer.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_DeveloperCenter_nav","id":"n1c3c14c2c1c9c3m1r1a1","sN":1,"aN":"c3c14c2c1c9c3m1r1a1"}'>Centro para desarrolladores</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_Documentation_cont","cT":"Container","id":"c4c14c2c1c9c3m1r1a1","sN":4,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_108" class="js-subm-uhf-nav-link" href="https://learn.microsoft.com/docs/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_Documentation_nav","id":"n1c4c14c2c1c9c3m1r1a1","sN":1,"aN":"c4c14c2c1c9c3m1r1a1"}'>Documentaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_MicrosoftLearn_cont","cT":"Container","id":"c5c14c2c1c9c3m1r1a1","sN":5,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_109" class="js-subm-uhf-nav-link" href="https://learn.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_MicrosoftLearn_nav","id":"n1c5c14c2c1c9c3m1r1a1","sN":1,"aN":"c5c14c2c1c9c3m1r1a1"}'>Microsoft Learn</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_MicrosoftTechCommunity_cont","cT":"Container","id":"c6c14c2c1c9c3m1r1a1","sN":6,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_110" class="js-subm-uhf-nav-link" href="https://techcommunity.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_MicrosoftTechCommunity_nav","id":"n1c6c14c2c1c9c3m1r1a1","sN":1,"aN":"c6c14c2c1c9c3m1r1a1"}'>Microsoft Tech Community</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_AzureMarketplace_cont","cT":"Container","id":"c7c14c2c1c9c3m1r1a1","sN":7,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_111" class="js-subm-uhf-nav-link" href="https://azuremarketplace.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_AzureMarketplace_nav","id":"n1c7c14c2c1c9c3m1r1a1","sN":1,"aN":"c7c14c2c1c9c3m1r1a1"}'>Azure Marketplace</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_AppSource_cont","cT":"Container","id":"c8c14c2c1c9c3m1r1a1","sN":8,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_112" class="js-subm-uhf-nav-link" href="https://appsource.microsoft.com/es-es/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_AppSource_nav","id":"n1c8c14c2c1c9c3m1r1a1","sN":1,"aN":"c8c14c2c1c9c3m1r1a1"}'>AppSource</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_DeveloperAndIT_VisualStudio_cont","cT":"Container","id":"c9c14c2c1c9c3m1r1a1","sN":9,"aN":"c14c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_113" class="js-subm-uhf-nav-link" href="https://visualstudio.microsoft.com/" data-m='{"cN":"GlobalNav_More_DeveloperAndIT_VisualStudio_nav","id":"n1c9c14c2c1c9c3m1r1a1","sN":1,"aN":"c9c14c2c1c9c3m1r1a1"}'>Visual Studio</a>
            
        </li>
    </ul>
    
</li>
<li class="f-sub-menu js-nav-menu nested-menu" data-m='{"cT":"Container","id":"c15c2c1c9c3m1r1a1","sN":15,"aN":"c2c1c9c3m1r1a1"}'>

    <span id="uhf-navspn-shellmenu_114-span" style="display:none"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn1c15c2c1c9c3m1r1a1","sN":1,"aN":"c15c2c1c9c3m1r1a1"}'>Otro</span>
    <button id="uhf-navbtn-shellmenu_114-button" type="button"   f-multi-parent="true" aria-expanded="false" data-m='{"id":"nn2c15c2c1c9c3m1r1a1","sN":2,"aN":"c15c2c1c9c3m1r1a1"}'>Otro</button>
    <ul aria-hidden="true" aria-labelledby="uhf-navspn-shellmenu_114-span">
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Microsoft Rewards_cont","cT":"Container","id":"c3c15c2c1c9c3m1r1a1","sN":3,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_115" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/rewards" data-m='{"cN":"GlobalNav_More_Other_Microsoft Rewards_nav","id":"n1c3c15c2c1c9c3m1r1a1","sN":1,"aN":"c3c15c2c1c9c3m1r1a1"}'>Microsoft Rewards </a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_FreeDownloadsAndSecurity_cont","cT":"Container","id":"c4c15c2c1c9c3m1r1a1","sN":4,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_116" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/download" data-m='{"cN":"GlobalNav_More_Other_FreeDownloadsAndSecurity_nav","id":"n1c4c15c2c1c9c3m1r1a1","sN":1,"aN":"c4c15c2c1c9c3m1r1a1"}'>Seguridad y descargas gratuitas</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Education_cont","cT":"Container","id":"c5c15c2c1c9c3m1r1a1","sN":5,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_117" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/education?icid=CNavMSCOML0_Studentsandeducation" data-m='{"cN":"GlobalNav_More_Other_Education_nav","id":"n1c5c15c2c1c9c3m1r1a1","sN":1,"aN":"c5c15c2c1c9c3m1r1a1"}'>Educaci&#243;n</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_GiftCards_cont","cT":"Container","id":"c6c15c2c1c9c3m1r1a1","sN":6,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="shellmenu_118" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/es-es/store/b/gift-cards" data-m='{"cN":"GlobalNav_More_Other_GiftCards_nav","id":"n1c6c15c2c1c9c3m1r1a1","sN":1,"aN":"c6c15c2c1c9c3m1r1a1"}'>Tarjetas regalo</a>
            
        </li>
        <li class="js-nav-menu single-link" data-m='{"cN":"More_Other_Licensing_cont","cT":"Container","id":"c7c15c2c1c9c3m1r1a1","sN":7,"aN":"c15c2c1c9c3m1r1a1"}'>
            <a id="Licensing" class="js-subm-uhf-nav-link" href="https://www.microsoft.com/licensing/" data-m='{"cN":"GlobalNav_More_Other_Licensing_nav","id":"n1c7c15c2c1c9c3m1r1a1","sN":1,"aN":"c7c15c2c1c9c3m1r1a1"}'>Licenciamiento</a>
            
        </li>
    </ul>
    
</li>
                                                            <li class="f-multi-column-info">
                                    <a data-m='{"id":"n16c2c1c9c3m1r1a1","sN":16,"aN":"c2c1c9c3m1r1a1"}' href="https://www.microsoft.com/es-es/sitemap.aspx" aria-label="" class="c-glyph">Ver mapa del sitio</a>
                                </li>
                            
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
</div>
                            <form class="c-search" autocomplete="off" id="searchForm" name="searchForm" role="search" action="https://www.microsoft.com/es-es/microsoft-365/site-search" method="GET" data-seAutoSuggest='' data-seautosuggestapi="https://www.microsoft.com/msstoreapiprod/api/autosuggest" data-m='{"cN":"GlobalNav_Search_cont","cT":"Container","id":"c3c1c9c3m1r1a1","sN":3,"aN":"c1c9c3m1r1a1"}' aria-expanded="false">
                                <input  id="cli_shellHeaderSearchInput" aria-label="B&#250;squeda ampliada" aria-autocomplete="list" aria-expanded="false" aria-controls="universal-header-search-auto-suggest-transparent" aria-owns="universal-header-search-auto-suggest-ul" type="search" name="q" role="combobox" placeholder="Buscar en Microsoft 365" data-m='{"cN":"SearchBox_nav","id":"n1c3c1c9c3m1r1a1","sN":1,"aN":"c3c1c9c3m1r1a1"}' data-toggle="tooltip" data-placement="right" title="Buscar en Microsoft 365" />
                                    <button id="search" aria-label="Buscar en Microsoft 365" class="c-glyph" data-m='{"cN":"Search_nav","id":"n2c3c1c9c3m1r1a1","sN":2,"aN":"c3c1c9c3m1r1a1"}' data-bi-mto="true" aria-expanded="false" disabled="disabled">
                                        <span role="presentation">Buscar</span>
                                        <span role="tooltip" class="c-uhf-tooltip c-uhf-search-tooltip">Buscar en Microsoft 365</span>
                                    </button>
                                <div class="m-auto-suggest" id="universal-header-search-auto-suggest-transparent" role="group">
                                    <ul class="c-menu" id="universal-header-search-auto-suggest-ul" aria-label="Sugerencias de b&#250;squeda" aria-hidden="true" data-bi-dnt="true" data-bi-mto="true" data-js-auto-suggest-position="default" role="listbox" data-tel="jsll" data-m='{"cN":"search suggestions_cont","cT":"Container","id":"c3c3c1c9c3m1r1a1","sN":3,"aN":"c3c1c9c3m1r1a1"}'></ul>
                                    <ul class="c-menu f-auto-suggest-no-results" aria-hidden="true" data-js-auto-suggest-postion="default" data-js-auto-suggest-position="default" role="listbox">
                                        <li class="c-menu-item"> <span tabindex="-1">Sin resultados</span></li>
                                    </ul>
                                </div>
                                
                            </form>
                        <button data-m='{"cN":"cancel-search","pid":"Cancelar Buscar","id":"nn4c1c9c3m1r1a1","sN":4,"aN":"c1c9c3m1r1a1"}' id="cancel-search" class="cancel-search" aria-label="Cancelar Buscar">
                            <span>Cancelar</span>
                        </button>
                        <div id="meControl" class="c-me"  data-signinsettings='{"containerId":"meControl","enabled":true,"headerHeight":48,"debug":false,"extensibleLinks":[{"string":"Para el hogar","url":"https://www.office.com/?auth=1","id":"global-office-account-personal"},{"string":"Trabajo, centro educativo o universidad","url":"https://www.office.com/?auth=2","id":"global-office-account-commercial"}],"userData":{"idp":"msa","firstName":"","lastName":"","memberName":"","cid":"","authenticatedState":"3"},"rpData":{"preferredIdp":"msa","msaInfo":{"signInUrl":"","signOutUrl":"","meUrl":"https://login.live.com/me.srf?wa=wsignin1.0"},"aadInfo":{"signOutUrl":"","appId":"","siteUrl":"","blockMsaFed":true}}}' data-m='{"cN":"GlobalNav_Account_cont","cT":"Container","id":"c5c1c9c3m1r1a1","sN":5,"aN":"c1c9c3m1r1a1"}'>
                            <div class="msame_Header">
                                <div class="msame_Header_name st_msame_placeholder">Iniciar sesi&#243;n</div>
                            </div>
                            
                        </div>
                
            </div>
        </div>
        
        
    </div>
    
</header>




    </div>
        </div>

    </div>
  <div class='meControl-configInfo' data-isenabled='true' data-preferredidp='aad' data-signinurl='/rpsauth/v2/account/aad/signin?ruoverride=https%3A%2F%2Fwww.office.com%3Fauthtypeparamname%3Dauth' data-msasignouturl='/rpsauth/v2/account/msa/signout' data-aadsignouturl='/rpsauth/v2/account/aad/signout' data-convergedstack='false' data-accountconstraint='0' data-apigeneration='GEN1' data-silentauthrequirereload='false' data-silentauthaction='none'></div> <div class='userInfo-config' data-userInfoUrl='/rpsauth/v2/api/account/aad/userinfo' data-userInfoTimeoutMS='1000' data-retryDelayMS='2000' data-maxRetryAttempt='3'></div> <script src="/etc.clientlibs/microsoft/components/content/universalheader/v1/universalheader/clientlibs/site.min.ACSHASHd01b887060eeda8457a067614f5353bb.js"></script> </div> <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="28134f1ee1370eee417bc52d1ed0a717"> <main class="microsoft-template-layout-container" tabindex="-1"> <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "> <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12"> <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "> <div class="layout-container responsivegrid mt-5 pb-4 pt-2 aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7"> <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 grid-image-layout-container-uid65bb heading-bg-color-layout-container-uid65bb" data-automation-test-id="layout-container-uid65bb"> <style data-automation-test-id="headingColor-layout-container-uid65bb">
                    .heading-bg-color-layout-container-uid65bb{
                         background-color:  !important;
                    }
          </style> <div class="container" id="layout-container-uid65bb" data-componentName="layout-container-uid65bb"> <div class="heading aem-GridColumn aem-GridColumn--default--12" data-component-id="9b992e252846bf14b532f40bd58c2fbf" oc-component-name="heading"> <section data-oc="oc6997" id="heading-oc6997"> <h1 class="mt-3 "> Elige tu país o región e idioma de preferencia: </h1> </section> </div> </div> </div></div> <div class="layout-container responsivegrid aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e9"> <div id="layout-container-uida77d" data-componentName="layout-container-uida77d" class="default " data-automation-test-id="picture-layout-container-uida77d"> <div class="container"> <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 depth-0 default row-bg-color-layout-container-uida77d" data-automation-test-id="mainContainer-layout-container-uida77d"> <style data-automation-test-id="bgcolorPicker-layout-container-uida77d">
                .row-bg-color-layout-container-uida77d{
                    background-color:  !important;
                }
                
            </style> <div class="col text-md-left no-gutters mb-4 mb-lg-0 " data-automation-test-id="column-layout-container-uida77d"> <div class="richtext text aem-GridColumn aem-GridColumn--default--12" data-component-id="aca330e78c05fd9ffbcf8222be356f7b"> <div class="cmp-text text-break" data-automation-test-id="RichTextV1Div-"> <p><a href="https://www.microsoft.com/cs-cz/microsoft-365/" class="ms-rte-link">Čeština (Česká republika)</a></p> <p><a href="https://www.microsoft.com/da-dk/microsoft-365/" class="ms-rte-link">Dansk (Danmark)</a></p> <p><a href="https://www.microsoft.com/de-de/microsoft-365/" class="ms-rte-link">Deutsch (Deutschland)</a></p> <p><a href="https://www.microsoft.com/de-at/microsoft-365/" class="ms-rte-link">Deutsch (Österreich)</a></p> <p><a href="https://www.microsoft.com/de-ch/microsoft-365/" class="ms-rte-link">Deutsch (Schweiz)</a></p> <p><a href="https://www.microsoft.com/et-ee/microsoft-365/" class="ms-rte-link">Eesti (Eesti)</a></p> <p><a href="https://www.microsoft.com/en-au/microsoft-365/" class="ms-rte-link">English (Australia)</a></p> <p><a href="https://www.microsoft.com/en-ca/microsoft-365/" class="ms-rte-link">English (Canada)</a></p> <p><a href="https://www.microsoft.com/en-in/microsoft-365/" class="ms-rte-link">English (India)</a></p> <p><a href="https://www.microsoft.com/en/microsoft-365/" class="ms-rte-link">English (International)</a></p> <p><a href="https://www.microsoft.com/en-ie/microsoft-365/" class="ms-rte-link">English (Ireland)</a></p> <p><a href="https://www.microsoft.com/en-my/microsoft-365/" class="ms-rte-link">English (Malaysia)</a></p> <p><a href="https://www.microsoft.com/en-nz/microsoft-365/" class="ms-rte-link">English (New Zealand)</a></p> <p><a href="https://www.microsoft.com/en-sg/microsoft-365/" class="ms-rte-link">English (Singapore)</a></p> <p><a href="https://www.microsoft.com/en-za/microsoft-365/" class="ms-rte-link">English (South Africa)</a></p> </div> </div> </div> <div class="col text-md-left no-gutters mb-4 mb-lg-0 " data-automation-test-id="column-layout-container-uida77d"> <div class="richtext text aem-GridColumn aem-GridColumn--default--12" data-component-id="aca330e78c05fd9ffbcf8222be356f7b"> <div class="cmp-text text-break" data-automation-test-id="RichTextV1Div-"> <p><a href="https://www.microsoft.com/en-gb/microsoft-365/" class="ms-rte-link">English (United Kingdom)</a></p> <p><a href="https://www.microsoft.com/en-us/microsoft-365/" class="ms-rte-link">English (United States)</a></p> <p><a href="https://www.microsoft.com/es-ar/microsoft-365/" class="ms-rte-link">Español (Argentina)</a></p> <p><a href="https://www.microsoft.com/es-cl/microsoft-365/" class="ms-rte-link">Español (Chile)</a></p> <p><a href="https://www.microsoft.com/es-co/microsoft-365/" class="ms-rte-link">Español (Colombia)</a></p> <p><a href="https://www.microsoft.com/es-es/microsoft-365/" class="ms-rte-link">Español (España)</a></p> <p><a href="https://www.microsoft.com/es/microsoft-365/" class="ms-rte-link">Español (Latinoamérica)</a></p> <p><a href="https://www.microsoft.com/es-mx/microsoft-365/" class="ms-rte-link">Español (México)</a></p> <p><a href="https://www.microsoft.com/fr-be/microsoft-365/" class="ms-rte-link">Français (Belgique)</a></p> <p><a href="https://www.microsoft.com/fr-ca/microsoft-365/" class="ms-rte-link">Français (Canada)</a></p> <p><a href="https://www.microsoft.com/fr-fr/microsoft-365/" class="ms-rte-link">Français (France)</a></p> <p><a href="https://www.microsoft.com/fr/microsoft-365/" class="ms-rte-link">Français (International)</a></p> <p><a href="https://www.microsoft.com/fr-ch/microsoft-365/" class="ms-rte-link">Français (Suisse)</a></p> <p><a href="https://www.microsoft.com/hr-hr/microsoft-365/" class="ms-rte-link">Hrvatski (Hrvatska)</a></p> <p><a href="https://www.microsoft.com/id-id/microsoft-365/" class="ms-rte-link">Indonesia (Indonesia)</a></p> </div> </div> </div> <div class="col text-md-left no-gutters mb-4-mb-sm-0 " data-automation-test-id="column-layout-container-uida77d"> <div class="richtext text aem-GridColumn aem-GridColumn--default--12" data-component-id="aca330e78c05fd9ffbcf8222be356f7b"> <div class="cmp-text text-break" data-automation-test-id="RichTextV1Div-"> <p><a href="https://www.microsoft.com/it-it/microsoft-365/" class="ms-rte-link">Italiano (Italia)</a></p> <p><a href="https://www.microsoft.com/lv-lv/microsoft-365/" class="ms-rte-link">Latviešu (Latvija)</a></p> <p><a href="https://www.microsoft.com/lt-lt/microsoft-365/" class="ms-rte-link">Lietuvių (Lietuva)</a></p> <p><a href="https://www.microsoft.com/hu-hu/microsoft-365/" class="ms-rte-link">Magyar (Magyarország)</a></p> <p><a href="https://www.microsoft.com/nl-be/microsoft-365/" class="ms-rte-link">Nederlands (België)</a></p> <p><a href="https://www.microsoft.com/nl-nl/microsoft-365/" class="ms-rte-link">Nederlands (Nederland)</a></p> <p><a href="https://www.microsoft.com/nb-no/microsoft-365/" class="ms-rte-link">Norsk (Norge)</a></p> <p><a href="https://www.microsoft.com/pl-pl/microsoft-365/" class="ms-rte-link">Polski (Polska)</a></p> <p><a href="https://www.microsoft.com/pt-br/microsoft-365/" class="ms-rte-link">Português (Brasil)</a></p> <p><a href="https://www.microsoft.com/pt-pt/microsoft-365/" class="ms-rte-link">Português (Portugal)</a></p> <p><a href="https://www.microsoft.com/ro-ro/microsoft-365/" class="ms-rte-link">Română (România)</a></p> <p><a href="https://www.microsoft.com/sk-sk/microsoft-365/" class="ms-rte-link">Slovenčina (Slovenská republika)</a></p> <p><a href="https://www.microsoft.com/sl-si/microsoft-365/" class="ms-rte-link">Slovenski (Slovenija)</a></p> <p><a href="https://www.microsoft.com/sr-latn-rs/microsoft-365/" class="ms-rte-link">Srpski (Rep. Srbija i Rep. Crna Gora)</a></p> <p><a href="https://www.microsoft.com/fi-fi/microsoft-365/" class="ms-rte-link">Suomi (Suomi)</a></p> </div> </div> </div> <div class="col text-md-left no-gutters " data-automation-test-id="column-layout-container-uida77d"> <div class="richtext text aem-GridColumn aem-GridColumn--default--12" data-component-id="aca330e78c05fd9ffbcf8222be356f7b"> <div class="cmp-text text-break" data-automation-test-id="RichTextV1Div-"> <p><a href="https://www.microsoft.com/sv-se/microsoft-365/" class="ms-rte-link">Svenska (Sverige)</a></p> <p><a href="https://www.microsoft.com/vi-vn/microsoft-365/" class="ms-rte-link">Tiếng Việt (Việt Nam)</a></p> <p><a href="https://www.microsoft.com/tr-tr/microsoft-365/" class="ms-rte-link">Türkçe (Türkiye)</a></p> <p><a href="https://www.microsoft.com/el-gr/microsoft-365/" class="ms-rte-link">Ελληνικά (Ελλάδα)</a></p> <p><a href="https://www.microsoft.com/bg-bg/microsoft-365/" class="ms-rte-link">Български (България)</a></p> <p><a href="https://www.microsoft.com/ru-ru/microsoft-365/" class="ms-rte-link">Русский (Россия)</a></p> <p><a href="https://www.microsoft.com/uk-ua/microsoft-365/" class="ms-rte-link">Українська (Україна)</a></p> <p><a href="https://www.microsoft.com/he-il/microsoft-365/" class="ms-rte-link">עברית (ישראל)</a></p> <p><a href="https://www.microsoft.com/ar/microsoft-365/" class="ms-rte-link">عربي (المنطقة العربية)</a></p> <p><a href="https://www.microsoft.com/th-th/microsoft-365/" class="ms-rte-link">ไทย (ไทย)</a></p> <p><a href="https://www.microsoft.com/ko-kr/microsoft-365/" class="ms-rte-link">한국어 (대한민국)</a></p> <p><a href="https://www.microsoft.com/zh-cn/microsoft-365/" class="ms-rte-link">中文(中国)</a></p> <p><a href="https://www.microsoft.com/ja-jp/microsoft-365/" class="ms-rte-link">日本語 (日本)</a></p> <p><a href="https://www.microsoft.com/zh-tw/microsoft-365/" class="ms-rte-link">繁體中文 (台灣)</a></p> <p><a href="https://www.microsoft.com/zh-hk/microsoft-365/" class="ms-rte-link">繁體中文 (香港特別行政區)</a></p> </div> </div> </div> </div> </div> </div></div> <div class="layout-container responsivegrid mb-7 aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7"> <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 grid-image-layout-container-uid3454 heading-bg-color-layout-container-uid3454" data-automation-test-id="layout-container-uid3454"> <style data-automation-test-id="headingColor-layout-container-uid3454">
                    .heading-bg-color-layout-container-uid3454{
                         background-color:  !important;
                    }
          </style> <div class="container" id="layout-container-uid3454" data-componentName="layout-container-uid3454"> </div> </div></div> <div class="divider-component aem-GridColumn aem-GridColumn--default--12" data-component-id="596e5fa739d15607c6adc6715f1e064e"> <div class="divider border-neutral-200"></div> </div> <div class="layout-container responsivegrid mt-5 aem-GridColumn aem-GridColumn--default--12" data-component-id="51e927945f39700e952adb9bd3dc97e7"> <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 grid-image-layout-container-uidd8cc heading-bg-color-layout-container-uidd8cc" data-automation-test-id="layout-container-uidd8cc"> <style data-automation-test-id="headingColor-layout-container-uidd8cc">
                    .heading-bg-color-layout-container-uidd8cc{
                         background-color:  !important;
                    }
          </style> <div class="container" id="layout-container-uidd8cc" data-componentName="layout-container-uidd8cc"> <div class="experiencefragment aem-GridColumn aem-GridColumn--default--12" data-component-id="581db1ec198007e2a00cbac3e44e3de9" oc-component-name="experiencefragment"><div class="cmp-experiencefragment"> <div class="xf-content-height"> <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "> <div class="responsivegrid aem-GridColumn aem-GridColumn--default--12"> <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "> <div class="socialfollow aem-GridColumn aem-GridColumn--default--12" data-component-id="8750c09f740a85b8d0b862206e9781be" oc-component-name="socialfollow"> <div class="col"> <div class="d-flex justify-content-between flex-wrap" data-oc="oc67cf" id="socialfollow-uid8c4b"> <div class="row"> <section class="col-12" role="region" aria-label="Vínculos de seguimiento de Microsoft"> <h2 class=" base font-weight-normal align-middle mr-g d-inline"> Sigue a Microsoft 365. </h2> <ul class="list-inline d-inline-block align-middle my-2"> <li data-m='{"bhvr": 126, "cN": "LinkedIn", "ecn": "LinkedIn", "socchn": "LinkedIn", "cT": "Social Button", "pa": "body", "compnm": "Social Follow - horizontal"}' class="list-inline-item mr-g"> <a class="d-inline-block" aria-label="Ir a la página de LinkedIn de Seguridad de Microsoft" href="https://go.microsoft.com/fwlink/?linkid=2144764" target="_blank"> <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/LinkedIn-29?scl=1" class="" alt="Logotipo de LinkedIn" title="LinkedIn" width="32" height="32"/> </a> </li> <li data-m='{"bhvr": 126, "cN": "Twitter", "ecn": "Twitter", "socchn": "Twitter", "cT": "Social Button", "pa": "body", "compnm": "Social Follow - horizontal"}' class="list-inline-item mr-g"> <a class="d-inline-block" aria-label="Sigue a Microsoft 365 en Twitter." href="https://go.microsoft.com/fwlink/p/?LinkId=2000804" target="_blank"> <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Twitter-34?scl=1" class="" alt="Logotipo de Twitter" title="Twitter" width="32" height="32"/> </a> </li> <li data-m='{"bhvr": 126, "cN": "Blog", "ecn": "Blog", "socchn": "Blog", "cT": "Social Button", "pa": "body", "compnm": "Social Follow - horizontal"}' class="list-inline-item mr-g"> <a class="d-inline-block" aria-label="Ve al blog de Microsoft 365." href="https://go.microsoft.com/fwlink/p/?LinkID=2000803" target="_blank"> <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blog-1?scl=1" class="" alt="Logotipo del blog de Microsoft 365" title="Blog" width="32" height="32"/> </a> </li> </ul> </section> </div> <div class="row"> </div> </div> </div> </div> </div> </div> </div> </div></div> <span style="display:none">       </span></div> </div> </div></div> </div> </div> </div> </main></div> <div class="universalfooter aem-GridColumn aem-GridColumn--default--12" data-component-id="873fa1f863becf63b38092282d4ea0b1">             <div id="footerArea" class="uhf"  data-m='{"cN":"footerArea","cT":"Area_coreuiArea","id":"a2Body","sN":2,"aN":"Body"}'>
                <div id="footerRegion"      data-region-key="footerregion" data-m='{"cN":"footerRegion","cT":"Region_coreui-region","id":"r1a2","sN":1,"aN":"a2"}' >

    <div  id="footerUniversalFooter" data-m='{"cN":"footerUniversalFooter","cT":"Module_coreui-universalfooter","id":"m1r1a2","sN":1,"aN":"r1a2"}'  data-module-id="Category|footerRegion|coreui-region|footerUniversalFooter|coreui-universalfooter">
        



<footer id="uhf-footer" class="c-uhff context-uhf"  data-uhf-mscc-rq="false" data-footer-footprint="/OfficeProducts/SPEFooter, fromService: True" data-m='{"cN":"Uhf footer_cont","cT":"Container","id":"c1m1r1a2","sN":1,"aN":"m1r1a2"}'>
        <nav class="c-uhff-nav" aria-label="V&#237;nculos de recursos de pie de p&#225;gina" data-m='{"cN":"Footer nav_cont","cT":"Container","id":"c1c1m1r1a2","sN":1,"aN":"c1m1r1a2"}'>
            
                <div class="c-uhff-nav-row">
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn1_cont","cT":"Container","id":"c1c1c1m1r1a2","sN":1,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Novedades</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Surface Laptop Studio 2 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/Surface-Laptop-Studio-2/8rqr54krf1dz" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptopStudio2_nav","id":"n1c1c1c1m1r1a2","sN":1,"aN":"c1c1c1m1r1a2"}'>Surface Laptop Studio 2</a>
                            </li>
                            <li>
                                <a aria-label="Surface Laptop Go 3 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/Surface-Laptop-Go-3/8p0wwgj6c6l2" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptopGo3_nav","id":"n2c1c1c1m1r1a2","sN":2,"aN":"c1c1c1m1r1a2"}'>Surface Laptop Go 3</a>
                            </li>
                            <li>
                                <a aria-label="Surface Pro 9 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/surface-pro-9/93VKD8NP4FVK" data-m='{"cN":"Footer_WhatsNew_NewSurfacePro8_nav","id":"n3c1c1c1m1r1a2","sN":3,"aN":"c1c1c1m1r1a2"}'>Surface Pro 9</a>
                            </li>
                            <li>
                                <a aria-label="Surface Laptop 5 Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/surface-laptop-5/8XN49V61S1BN" data-m='{"cN":"Footer_WhatsNew_SurfaceLaptop2_nav","id":"n4c1c1c1m1r1a2","sN":4,"aN":"c1c1c1m1r1a2"}'>Surface Laptop 5</a>
                            </li>
                            <li>
                                <a aria-label="Surface Studio 2+ Novedades" class="c-uhff-link" href="https://www.microsoft.com/es-es/d/surface-studio-2plus/8VLFQC3597K4" data-m='{"cN":"Footer_WhatsNew_SurfaceStudio_nav","id":"n5c1c1c1m1r1a2","sN":5,"aN":"c1c1c1m1r1a2"}'>Surface Studio 2+</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Novedades" class="c-uhff-link" href="https://www.microsoft.com/microsoft-365" data-m='{"cN":"Footer_WhatsNew_Microsoft365_nav","id":"n6c1c1c1m1r1a2","sN":6,"aN":"c1c1c1m1r1a2"}'>Microsoft 365</a>
                            </li>
                            <li>
                                <a aria-label="Aplicaciones de Windows 11 Novedades" class="c-uhff-link" href="https://www.microsoft.com/windows/windows-11-apps" data-m='{"cN":"Footer_WhatsNew_Windows_11_apps_nav","id":"n7c1c1c1m1r1a2","sN":7,"aN":"c1c1c1m1r1a2"}'>Aplicaciones de Windows 11</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn2_cont","cT":"Container","id":"c2c1c1m1r1a2","sN":2,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Microsoft Store</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Perfil de la cuenta Microsoft Store" class="c-uhff-link" href="https://account.microsoft.com/" data-m='{"cN":"Footer_StoreandSupport_AccountProfile_nav","id":"n1c2c1c1m1r1a2","sN":1,"aN":"c2c1c1m1r1a2"}'>Perfil de la cuenta</a>
                            </li>
                            <li>
                                <a aria-label="Centro de descarga Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/es-es/download" data-m='{"cN":"Footer_StoreandSupport_DownloadCenter_nav","id":"n2c2c1c1m1r1a2","sN":2,"aN":"c2c1c1m1r1a2"}'>Centro de descarga</a>
                            </li>
                            <li>
                                <a aria-label="Soporte de Microsoft Store Microsoft Store" class="c-uhff-link" href="https://go.microsoft.com/fwlink/?linkid=2139749" data-m='{"cN":"Footer_StoreandSupport_SalesAndSupport_nav","id":"n3c2c1c1m1r1a2","sN":3,"aN":"c2c1c1m1r1a2"}'>Soporte de Microsoft Store</a>
                            </li>
                            <li>
                                <a aria-label="Devoluciones Microsoft Store" class="c-uhff-link" href="https://support.microsoft.com/es-es/help/10558/microsoft-store-returning-items-bought-for-exchange-refund" data-m='{"cN":"Footer_StoreandSupport_Returns_nav","id":"n4c2c1c1m1r1a2","sN":4,"aN":"c2c1c1m1r1a2"}'>Devoluciones</a>
                            </li>
                            <li>
                                <a aria-label="Seguimiento de pedidos Microsoft Store" class="c-uhff-link" href="https://account.microsoft.com/orders" data-m='{"cN":"Footer_StoreandSupport_OrderTracking_nav","id":"n5c2c1c1m1r1a2","sN":5,"aN":"c2c1c1m1r1a2"}'>Seguimiento de pedidos</a>
                            </li>
                            <li>
                                <a aria-label="Reciclar  Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/recycling?icid=GlobalFooterNav" data-m='{"cN":"Footer_Recyclying_nav","id":"n6c2c1c1m1r1a2","sN":6,"aN":"c2c1c1m1r1a2"}'>Reciclar </a>
                            </li>
                            <li>
                                <a aria-label="Garant&#237;as comerciales Microsoft Store" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/aboutwarranties?icid=GlobalFooterNav" data-m='{"cN":"Footer_Warranties_nav","id":"n7c2c1c1m1r1a2","sN":7,"aN":"c2c1c1m1r1a2"}'>Garant&#237;as comerciales</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn3_cont","cT":"Container","id":"c3c1c1m1r1a2","sN":3,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Educaci&#243;n</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Microsoft Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education" data-m='{"cN":"Footer_Education_MicrosoftInEducation_nav","id":"n1c3c1c1m1r1a2","sN":1,"aN":"c3c1c1m1r1a2"}'>Microsoft Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Dispositivos para educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/devices/overview" data-m='{"cN":"Footer_Education_DevicesforEducation_nav","id":"n2c3c1c1m1r1a2","sN":2,"aN":"c3c1c1m1r1a2"}'>Dispositivos para educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Teams para Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/products/teams" data-m='{"cN":"Footer_Education_MicrosoftTeamsforEducation_nav","id":"n3c3c1c1m1r1a2","sN":3,"aN":"c3c1c1m1r1a2"}'>Microsoft Teams para Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/buy-license/microsoft365" data-m='{"cN":"Footer_Education_Microsoft365Education_nav","id":"n4c3c1c1m1r1a2","sN":4,"aN":"c3c1c1m1r1a2"}'>Microsoft 365 Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Office Educaci&#243;n Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/education/products/office" data-m='{"cN":"Footer_Education_Office Education_nav","id":"n5c3c1c1m1r1a2","sN":5,"aN":"c3c1c1m1r1a2"}'>Office Educaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Formaci&#243;n y desarrollo de educadores Educaci&#243;n" class="c-uhff-link" href="https://education.microsoft.com/" data-m='{"cN":"Footer_Education_EducatorTrainingDevelopment_nav","id":"n6c3c1c1m1r1a2","sN":6,"aN":"c3c1c1m1r1a2"}'>Formaci&#243;n y desarrollo de educadores</a>
                            </li>
                            <li>
                                <a aria-label="Ofertas para estudiantes y padres Educaci&#243;n" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/student" data-m='{"cN":"Footer_Education_DealsForStudentsandParents_nav","id":"n7c3c1c1m1r1a2","sN":7,"aN":"c3c1c1m1r1a2"}'>Ofertas para estudiantes y padres</a>
                            </li>
                            <li>
                                <a aria-label="Azure para estudiantes Educaci&#243;n" class="c-uhff-link" href="https://azure.microsoft.com/es-es/free/students/" data-m='{"cN":"Footer_Education_Azureforstudents_nav","id":"n8c3c1c1m1r1a2","sN":8,"aN":"c3c1c1m1r1a2"}'>Azure para estudiantes</a>
                            </li>

                        </ul>
                        
                    </div>
                </div>
                <div class="c-uhff-nav-row">
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn4_cont","cT":"Container","id":"c4c1c1m1r1a2","sN":4,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Empresas
</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Microsoft Cloud Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/microsoft-cloud" data-m='{"cN":"Footer_Business_Microsoft_Cloud_nav","id":"n1c4c1c1m1r1a2","sN":1,"aN":"c4c1c1m1r1a2"}'>Microsoft Cloud</a>
                            </li>
                            <li>
                                <a aria-label="Seguridad de Microsoft Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/security" data-m='{"cN":"Footer_Business_Microsoft Security_nav","id":"n2c4c1c1m1r1a2","sN":2,"aN":"c4c1c1m1r1a2"}'>Seguridad de Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Azure Empresas
" class="c-uhff-link" href="https://azure.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftAzure_nav","id":"n3c4c1c1m1r1a2","sN":3,"aN":"c4c1c1m1r1a2"}'>Azure</a>
                            </li>
                            <li>
                                <a aria-label="Dynamics 365 Empresas
" class="c-uhff-link" href="https://dynamics.microsoft.com/es-es/" data-m='{"cN":"Footer_Business_MicrosoftDynamics365_nav","id":"n4c4c1c1m1r1a2","sN":4,"aN":"c4c1c1m1r1a2"}'>Dynamics 365</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft 365 Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/microsoft-365/business/" data-m='{"cN":"Footer_Business_M365_nav","id":"n5c4c1c1m1r1a2","sN":5,"aN":"c4c1c1m1r1a2"}'>Microsoft 365</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Industry Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/industry" data-m='{"cN":"Footer_Business_MicrosoftIndustry_nav","id":"n6c4c1c1m1r1a2","sN":6,"aN":"c4c1c1m1r1a2"}'>Microsoft Industry</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Teams Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/microsoft-teams/group-chat-software" data-m='{"cN":"Footer_Business_Microsoft365_nav","id":"n7c4c1c1m1r1a2","sN":7,"aN":"c4c1c1m1r1a2"}'>Microsoft Teams</a>
                            </li>
                            <li>
                                <a aria-label="Peque&#241;as empresas Empresas
" class="c-uhff-link" href="https://www.microsoft.com/es-es/store/b/business" data-m='{"cN":"Footer_Business-SmallBusiness_nav","id":"n8c4c1c1m1r1a2","sN":8,"aN":"c4c1c1m1r1a2"}'>Peque&#241;as empresas</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn5_cont","cT":"Container","id":"c5c1c1m1r1a2","sN":5,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Desarrolladores y TI</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Centro para desarrolladores Desarrolladores y TI" class="c-uhff-link" href="https://developer.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_DeveloperCenter_nav","id":"n1c5c1c1m1r1a2","sN":1,"aN":"c5c1c1m1r1a2"}'>Centro para desarrolladores</a>
                            </li>
                            <li>
                                <a aria-label="Documentaci&#243;n Desarrolladores y TI" class="c-uhff-link" href="https://learn.microsoft.com/docs/" data-m='{"cN":"Footer_DeveloperAndIT_Documentation_nav","id":"n2c5c1c1m1r1a2","sN":2,"aN":"c5c1c1m1r1a2"}'>Documentaci&#243;n</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Learn Desarrolladores y TI" class="c-uhff-link" href="https://learn.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftLearn_nav","id":"n3c5c1c1m1r1a2","sN":3,"aN":"c5c1c1m1r1a2"}'>Microsoft Learn</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Tech Community Desarrolladores y TI" class="c-uhff-link" href="https://techcommunity.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftTechCommunity_nav","id":"n4c5c1c1m1r1a2","sN":4,"aN":"c5c1c1m1r1a2"}'>Microsoft Tech Community</a>
                            </li>
                            <li>
                                <a aria-label="Azure Marketplace Desarrolladores y TI" class="c-uhff-link" href="https://azuremarketplace.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_AzureMarketplace_nav","id":"n5c5c1c1m1r1a2","sN":5,"aN":"c5c1c1m1r1a2"}'>Azure Marketplace</a>
                            </li>
                            <li>
                                <a aria-label="AppSource Desarrolladores y TI" class="c-uhff-link" href="https://appsource.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_AppSource_nav","id":"n6c5c1c1m1r1a2","sN":6,"aN":"c5c1c1m1r1a2"}'>AppSource</a>
                            </li>
                            <li>
                                <a aria-label="Microsoft Power Platform Desarrolladores y TI" class="c-uhff-link" href="https://powerplatform.microsoft.com/es-es/" data-m='{"cN":"Footer_DeveloperAndIT_Power Platform_nav","id":"n7c5c1c1m1r1a2","sN":7,"aN":"c5c1c1m1r1a2"}'>Microsoft Power Platform</a>
                            </li>
                            <li>
                                <a aria-label="Visual Studio Desarrolladores y TI" class="c-uhff-link" href="https://visualstudio.microsoft.com/" data-m='{"cN":"Footer_DeveloperAndIT_MicrosoftVisualStudio_nav","id":"n8c5c1c1m1r1a2","sN":8,"aN":"c5c1c1m1r1a2"}'>Visual Studio</a>
                            </li>

                        </ul>
                        
                    </div>
                    <div class="c-uhff-nav-group" data-m='{"cN":"footerNavColumn6_cont","cT":"Container","id":"c6c1c1m1r1a2","sN":6,"aN":"c1c1m1r1a2"}'>
                        <div class="c-heading-4" role="heading" aria-level="2">Compa&#241;&#237;a
</div>
                        <ul class="c-list f-bare">
                            <li>
                                <a aria-label="Oportunidades de empleo Compa&#241;&#237;a
" class="c-uhff-link" href="https://careers.microsoft.com/" data-m='{"cN":"Footer_Company_Careers_nav","id":"n1c6c1c1m1r1a2","sN":1,"aN":"c6c1c1m1r1a2"}'>Oportunidades de empleo</a>
                            </li>
                            <li>
                                <a aria-label="Acerca de Microsoft Compa&#241;&#237;a
" class="c-uhff-link" href="https://www.microsoft.com/es-es/about" data-m='{"cN":"Footer_Company_AboutMicrosoft_nav","id":"n2c6c1c1m1r1a2","sN":2,"aN":"c6c1c1m1r1a2"}'>Acerca de Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Noticias de la compa&#241;&#237;a Compa&#241;&#237;a
" class="c-uhff-link" href="https://news.microsoft.com/es-es" data-m='{"cN":"Footer_Company_CompanyNews_nav","id":"n3c6c1c1m1r1a2","sN":3,"aN":"c6c1c1m1r1a2"}'>Noticias de la compa&#241;&#237;a</a>
                            </li>
                            <li>
                                <a aria-label="Privacidad en Microsoft Compa&#241;&#237;a
" class="c-uhff-link" href="https://privacy.microsoft.com/es-es" data-m='{"cN":"Footer_Company_PrivacyAtMicrosoft_nav","id":"n4c6c1c1m1r1a2","sN":4,"aN":"c6c1c1m1r1a2"}'>Privacidad en Microsoft</a>
                            </li>
                            <li>
                                <a aria-label="Inversores Compa&#241;&#237;a
" class="c-uhff-link" href="https://www.microsoft.com/investor/default.aspx" data-m='{"cN":"Footer_Company_Investors_nav","id":"n5c6c1c1m1r1a2","sN":5,"aN":"c6c1c1m1r1a2"}'>Inversores</a>
                            </li>
                            <li>
                                <a aria-label="Sostenibilidad  Compa&#241;&#237;a
" class="c-uhff-link" href="https://www.microsoft.com/es-es/sustainability/" data-m='{"cN":"Footer_Company_Sustainability_nav","id":"n6c6c1c1m1r1a2","sN":6,"aN":"c6c1c1m1r1a2"}'>Sostenibilidad </a>
                            </li>

                        </ul>
                        
                    </div>
                </div>
        </nav>
    <div class="c-uhff-base">
                <a id="locale-picker-link" aria-label="Selector de idiomas del contenido. Actualmente definido en Espa&#241;ol (Espa&#241;a, alfabetizaci&#243;n internacional)" class="c-uhff-link c-uhff-lang-selector c-glyph glyph-world" href="https://www.microsoft.com/es-ES/microsoft-365/locale" data-m='{"cN":"locale_picker(ES)_nav","id":"n7c1c1m1r1a2","sN":7,"aN":"c1c1m1r1a2"}'>Espa&#241;ol (Espa&#241;a, alfabetizaci&#243;n internacional)</a>

            <a data-m='{"id":"n8c1c1m1r1a2","sN":8,"aN":"c1c1m1r1a2"}' href="https://aka.ms/yourcaliforniaprivacychoices" class='c-uhff-link c-uhff-ccpa'>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xml:space="preserve" height="16" width="43">
            <title>Icono de exclusi&#243;n de la Ley de privacidad de los consumidores de California (CCPA)</title>
            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/>
            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"/>
            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"/>
            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"/>
        </svg>
        <span>Tus opciones de privacidad</span>
    </a>

        <noscript>
                <a data-m='{"id":"n9c1c1m1r1a2","sN":9,"aN":"c1c1m1r1a2"}' href="https://aka.ms/yourcaliforniaprivacychoices" class='c-uhff-link c-uhff-ccpa'>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 14" xml:space="preserve" height="16" width="43">
            <title>Icono de exclusi&#243;n de la Ley de privacidad de los consumidores de California (CCPA)</title>
            <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#fff"/>
            <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#06f"/>
            <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style="fill:#fff"/>
            <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style="fill:#06f"/>
        </svg>
        <span>Tus opciones de privacidad</span>
    </a>

        </noscript>
        <nav aria-label="V&#237;nculos corporativos de Microsoft">
            <ul class="c-list f-bare" data-m='{"cN":"Corp links_cont","cT":"Container","id":"c10c1c1m1r1a2","sN":10,"aN":"c1c1m1r1a2"}'>
                                <li  id="c-uhff-footer_contactus">
                    <a class="c-uhff-link" href="https://support.microsoft.com/contactus" data-mscc-ic="false" data-m='{"cN":"Footer_ContactUs_nav","id":"n1c10c1c1m1r1a2","sN":1,"aN":"c10c1c1m1r1a2"}'>Ponte en contacto con Microsoft</a>
                </li>
                <li  id="c-uhff-footer_privacyandcookies">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?LinkId=521839" data-mscc-ic="false" data-m='{"cN":"Footer_PrivacyandCookies_nav","id":"n2c10c1c1m1r1a2","sN":2,"aN":"c10c1c1m1r1a2"}'>Privacidad</a>
                </li>
                <li class=" x-hidden" id="c-uhff-footer_managecookies">
                    <a class="c-uhff-link" href="#" data-mscc-ic="false" data-m='{"cN":"Footer_ManageCookies_nav","id":"n3c10c1c1m1r1a2","sN":3,"aN":"c10c1c1m1r1a2"}'>Gestionar cookies</a>
                </li>
                <li  id="c-uhff-footer_termsofuse">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?LinkID=206977" data-mscc-ic="false" data-m='{"cN":"Footer_TermsOfUse_nav","id":"n4c10c1c1m1r1a2","sN":4,"aN":"c10c1c1m1r1a2"}'>Condiciones de uso </a>
                </li>
                <li  id="c-uhff-footer_trademarks">
                    <a class="c-uhff-link" href="https://go.microsoft.com/fwlink/?linkid=2196228" data-mscc-ic="false" data-m='{"cN":"Footer_Trademarks_nav","id":"n5c10c1c1m1r1a2","sN":5,"aN":"c10c1c1m1r1a2"}'>Marcas registradas</a>
                </li>
                <li  id="c-uhff-footer_aboutourads">
                    <a class="c-uhff-link" href="https://choice.microsoft.com/" data-mscc-ic="false" data-m='{"cN":"Footer_AboutourAds_nav","id":"n6c10c1c1m1r1a2","sN":6,"aN":"c10c1c1m1r1a2"}'>Sobre nuestra publicidad</a>
                </li>
                <li  id="c-uhff-footer_eucompliancedocs">
                    <a class="c-uhff-link" href="https://www.microsoft.com/en-ie/eucompliancedoc/default.aspx" data-mscc-ic="false" data-m='{"cN":"Footer_EUComplianceDoCs_nav","id":"n7c10c1c1m1r1a2","sN":7,"aN":"c10c1c1m1r1a2"}'>Docs de cumplimiento de la UE</a>
                </li>

                <li>&#169; Microsoft 2024</li>
                
            </ul>
        </nav>
    </div>
    
</footer>

<script id="uhf-footer-ccpa">
    const globalPrivacyControlEnabled = navigator.globalPrivacyControl;

    const GPC_DataSharingOptIn = (globalPrivacyControlEnabled) ? false : checkThirdPartyAdsOptOutCookie();

    function checkThirdPartyAdsOptOutCookie() {
        try {
            const ThirdPartyAdsOptOutCookieName = '3PAdsOptOut';
            var cookieValue = getCookie(ThirdPartyAdsOptOutCookieName);
            return cookieValue != 1;
        } catch {
            return true;
        }
    }

    function getCookie(cookieName) {
        var cookieValue = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
        return (cookieValue) ? cookieValue[2] : '';
    }
</script>





    </div>
        </div>

    </div>
<script src="https://wcpstatic.microsoft.com/mscc/lib/v2/wcp-consent.js"></script><script src="https://www.microsoft.com/onerfstatics/marketingsites-neu-prod/shell/_scrf/js/themes=default/d6-d6e6df/89-746ba4/df-3feeb0/f5-14aef8/bd-f5f332/27-13b2c3/e9-07937b/33-b505e5/fa-7a47db/6e-e2d05f/74-0b2d48/88-5b9b75/1b-240b37/4e-8e1a50/c2-370434/6f-bf5d0f/ea-315ddf/2e-e273bf/17-02d9ee/cf-2a93c7/c0-2ffa80/77-785548/48-4f52bb/3c-6c8ad0/3a-0d7cd3/5f-7d882b/c1-621df2/38-e8e647/17-c82a09/85-bd536d/44-776362/f8-86938e/61-951d1b/39-3d9dc2/81-96da47/ec-e44e19/6c-7627b9?ver=2.0&_cf=20210618&iife=1"></script><script src="https://mem.gfx.ms/meversion?partner=OfficeProducts&market=es-es&uhf=1" defer></script>  </div> </div> </div> <script src="/etc.clientlibs/onecloud/clientlibs/clientlib-mwf-new/main-light.min.ACSHASH1315b52070fe169b25b7b0a6e3667170.js"></script> <script src="/etc.clientlibs/onecloud/clientlibs/clientlib-mwf-ext/main-light.min.ACSHASH047629f1c6b2ab96b4ce7161994ed8d6.js"></script> <script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-base.min.ACSHASH29c191223ce5765badcd0207f7ce847c.js"></script> <script src="/etc.clientlibs/onecloud/components/content/form-container/v1/form-container/clientlibs/redirect-clientlibs/isv-redirect.min.ACSHASHefef867208187ea8fa5f04d6cf75c050.js"></script> <script src="/etc.clientlibs/onecloud/clientlibs/clientlib-site.min.ACSHASH87b8f0e23485bbb3b4ecade3d42aed38.js"></script> <script src="/etc.clientlibs/microsoft/clientlibs/clientlib-httpclient.min.ACSHASH65e4c1ea0ef81dd1058e657727914791.js"></script> <script src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-cookieconsent.min.ACSHASH96f0c5b1219e39b8788028f5c17a5ad9.js"></script> <script src="/etc.clientlibs/onecloud/clientlibs/clientlib-cookievalidator.min.ACSHASH3db5cf9fd3fab92b3889302c8de78d1b.js"></script> <script src="/etc.clientlibs/microsoft/components/structure/page/clientlibs/featurecontrol.min.ACSHASHc22ea5b46f3fcad90da0abcc0a3f73d4.js"></script> <div id='customFeatureControl' enabledFeatures="contentbackfillgenerate,esiproductcards,uhf-ms-io-endpoint,uhf-esi-cv,uhf-esi-cache,fraud-greenid,contentsquare,mediapixel,holiday-themer,lazyload-static-components,clientlibDefer,upsellEnabled,contentbackfillpkgdelete,healthcheck,demo-feature,contentbackfillhttpgenerate,perf-tracker-1ds,dynamic-bundle,cvIncrementer,tentingEnabled,chatCookiesImplemented,alertCountDownWithoutServerTime,pdpDynamicRendering,bundlesDynamicRendering,contentbackfillmetadatachangesvideo,contentbackfillmetadatachangesnonvideo,listDynamicRendering,experimentation-without-personalization,generic-list-importer,combinedUHF,cvCallEnabled,m365ProductCatalog,support-unsupported-locales,deferClickTale,videoLazyLoad,prefetchFontsEnabled,enable-code-isolation,imageLinkTag,fetchPriority,contentIngestionAgent,enableClickgroupTelemetry,imageLazyLoad,contentIngestionAgent-dispatcher2westus2Agent,isCacheControlFeatureEnabled,feature-controlled-content-card,lcpPrioritizationPhase1,ocReimagineTelemetry,deferScriptsEnabled,lcpPrioritizationPhase2,ocReimagineSlotNumberTelemetry,contentIngestionAgent-dispatcher1westus2Agent,ocReimagineComponentNameTelemetry,ocReimagineTemplateNameTelemetry,extended-html-minification-sites,dynamicPrice,gl-auto-config,displayV35Toggle"></div> <div class='oneds-config' data-instrumentationkey='1cfc1aff02e4437889594f14c4cad289-5bf9ec06-73a3-4827-a5e7-d709ff3d3b12-6941' data-isenabled='true' data-env='prod' data-market='es-es' data-pageName='Microsoft 365: elección de la configuración regional' data-urlCollectQuery='true' data-urlCollectHash='false' data-autoCapturelineage='false' data-autoCaptureresize='false' data-autoCapturescroll='false' data-initialize1DSEventName="none" data-tenantName='bade' data-tenantTitle='Brand, Advocacy, Digital and Experiences' data-tenantDomain='microsoft' data-tenantSiteName='microsoft' data-tenantNameProperty='tenantName' data-tenantTitleProperty='tenantTitle' data-tenantDomainProperty='tenantDomain' data-tenantSiteNameProperty='tenantSiteName' data-max1DSInitializeDelayInSeconds='1'> </div> <script src="/etc.clientlibs/microsoft/components/structure/page/clientlibs/custom-oneds.min.ACSHASHb4f0b5100b03a879dd5d2e97636efc37.js"></script> <script id="onecloud-body-script" type="text/javascript" src="https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RE4OCI2" async></script> <link rel="stylesheet" href="/etc.clientlibs/onecloud/clientlibs/clientlib-chat.min.ACSHASHfa6f56b2d3037982772378233706c9af.css" type="text/css"> <meta name="chat-default-config" value='{&#34;checkForAgentAvailability&#34;:&#34;false&#34;,&#34;srcFmt&#34;:&#34;https://publisher.liveperson.net/iframe-le-tag/iframe-cs.html?lpsite={0}&amp;lpsection={1}&amp;buttons=hiddenchat&#34;,&#34;innerContainerId&#34;:&#34;lp-iframe-container&#34;,&#34;siteId&#34;:&#34;60270350&#34;,&#34;topic&#34;:&#34;Office365&#34;,&#34;suppressProactive&#34;:&#34;false&#34;,&#34;domainUrl&#34;:&#34;https://publisher.liveperson.net&#34;}'/> <meta name="chat-default-locale-chat" value="{&#34;market&#34;:&#34;es-es&#34;,&#34;checkForAgentAvailability&#34;:&#34;false&#34;,&#34;suppressProactive&#34;:&#34;false&#34;}"/> <meta name="chat-default-site-type-chat"/> <meta name="chat-specific-site-type-locale-chat"/> <meta name="chat-oc-opts" value='{"chatDialogDescription": "chat with sales window", "isChatDisabled": "", "siteType": "", "disableProactiveChat": "false", "debugHostNames": ["localhost", "sites-author.adobeppe.microsoft.com"]}'/> <script src="/etc.clientlibs/onecloud/clientlibs/clientlib-chat.min.ACSHASH34e3440e73ee943fc9802fcad4720cba.js"></script> <script src="/etc.clientlibs/onecloud/clientlibs/clientlib-market-layer.min.ACSHASH551a5d1b5ebf715e3f78c311a57fa1d7.js"></script> <script type="text/javascript" src="/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-greenid.min.ACSHASH383b23d12df0d9265d7569a7102c2f96.js" async></script> </body> </html>