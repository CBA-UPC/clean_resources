.datagrid-footer{flex:0 0 auto;display:flex;flex-flow:row nowrap;justify-content:flex-end!important;align-items:stretch;height:1.5rem;padding:0 .5rem;line-height:calc(1.5rem - 3px);font-size:.458333rem;background-color:#fafafa;border:1px solid #ccc;border-radius:0 0 .125rem .125rem;width:100%}.crl-page-size-select{font-size:100%;margin-left:.5rem;height:1rem;line-height:1rem;vertical-align:middle}.pagination{display:flex}.pagination-list{margin:0 .5rem;height:calc(1.5rem - 2px);display:flex;align-items:center}.pagination-list>button:disabled{cursor:default}input.pagination-current{border:1px solid #ccc;border-radius:.125rem;line-height:1rem;height:1rem;min-width:1rem;text-align:center;transition:none!important;margin:0;padding:0 .25rem;display:inline-block;width:1.5rem}input.pagination-current::-webkit-inner-spin-button,input.pagination-current::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
/*# sourceMappingURL=55.2a143648.chunk.css.map */nction(e){return e[1]}));a.push([e.i,"/** highlight element style for inspector */\n.inspector-element {\n    position: absolute;\n    pointer-events: none;\n    border: 2px solid tomato;\n    transition: all 200ms;\n    background-color: rgba(180, 187, 105, 0.2);\n    z-index: 2147483647; /* set z-indx the max value */\n}\n",""]),t.a=a},function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_SHA256_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_SHA256_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__(6),ARRAY_BUFFER=!root.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],K=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[];!root.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e,t){return function(n){return new Sha256(t,!0).update(n)[e]()}},createMethod=function(e){var t=createOutputMethod("hex",e);NODE_JS&&(t=nodeWrap(t,e)),t.create=function(){return new Sha256(e)},t.update=function(e){return t.create().update(e)};for(var n=0;n<OUTPUT_TYPES.length;++n){var r=OUTPUT_TYPES[n];t[r]=createOutputMethod(r,e)}return t},nodeWrap=function(method,is224){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),algorithm=is224?"sha224":"sha256",nodeMethod=function(e){if("string"==typeof e)return crypto.createHash(algorithm).update(e,"utf8").digest("hex");if(null==e)throw new Error(ERROR);return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash(as/content/header/clientlibs.min.js">-->
    <link rel="preload" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-dependencies/resources/fonts/fontawesome-webfont.woff2" as="font" type="font/woff2" crossorigin/>
    <link rel="preload" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-dependencies/resources/fonts/metropolis-light-webfont.woff2" as="font" type="font/woff2" crossorigin/>
    <link rel="preload" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-dependencies.min.css" as="style"/>
    <link rel="preload" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-base.min.css" as="style"/>
    <link rel="preload" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs-site/vmware.min.css" as="style"/>
	
	
	
    <link rel="preload" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/components/content/header-redesign/clientlibs.min.css" as="style"/>
	
    <!--<link rel="preload" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/components/content/footer/clientlibs.min.css" as="style">-->


    
        <style id="prehide-first">
	        .banner-promo-area,.column-cards .componentBody .horizontalcard , .column-cards .componentBody .standardcard , .footer-content-area { opacity: 0; }
            @media (min-width:992px){.header-redesign-container .hdr-bottom-nav .header-menu .menu-item { opacity: 0; }
        }
        </style>
    

    <style>
	body.fallback{font-family: Arial;font-size: 16px;line-height: 1.6;visibility: visible;letter-spacing: 0.55px;word-spacing: -0.1px;}
	#ot-sdk-btn{position:fixed!important;}
    #ot-sdk-btn{bottom:0!important;}
    #ot-sdk-btn{right:0!important;}
    #ot-sdk-btn{z-index:999999!important;}
    #ot-sdk-btn{color:#ffffff!important;}
    #ot-sdk-btn{border:2px solid #1d428a!important;}
    #ot-sdk-btn{padding:6px!important;}
    #ot-sdk-btn{display:inline-block!important;}
    #ot-sdk-btn{margin:-8px 0 1.2px -82px!important;}
    #ot-sdk-btn{background-color:#1d428a!important;}
    #ot-sdk-btn{cursor:pointer!important;}
    #ot-sdk-btn{border-radius:2.75rem!important;}
    #ot-sdk-btn{font-size:13px!important;}
    #ot-sdk-btn{min-width:200px!important;}
    #ot-sdk-btn{height:40px!important;}
    #ot-sdk-btn{font-weight:bold!important;}
    #ot-sdk-btn{opacity:1!important;}
	#onetrust-banner-sdk #onetrust-close-btn-container .banner-close-button.ot-close-icon {background-image: url('https://www.vmware.com/content/dam/digitalmarketing/onetrust/assets/icons/Close-256.png') !important;}

    </style>


    

        <!-- OneTrust Cookies Consent Notice start -->
        <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="b9242434-9feb-47be-a894-3a9e658fdd50" async></script>
        <script type="text/javascript">
              function OptanonWrapper() {
                  {
                      window.dataLayer.push({
                          event: 'OneTrustGroupsUpdated'
                      });
                  }
              }
        </script>
        <!-- OneTrust Cookies Consent Notice end -->
        <meta name="aem-utag" content="//tags.tiqcdn.com/utag/vmware/aem-privacy/prod/utag.js"/>
        <meta name="aem-cn-utag" content="//tags.tiqcdn.com/utag/vmware/aem-privacy/prod/utag.js"/>
    

    
    
        <title>VMware ONE Contract Center</title>
    
    <link rel="canonical" href="https://www.vmware.com/agreements.html"/>
    
        <meta name="keywords" content="VMware ONE Contract Center, VMware General Terms"/>
    

    <meta name="title" content="VMware ONE Contract Center"/>

    <meta/>


    

    
        <meta property="og:title" content="VMware ONE Contract Center"/>
    


    
    
    
        <meta property="og:type" content="Website"/>
    


    
        <meta property="og:url" content="https://www.vmware.com/agreements.html"/>
    
    
        <meta property="og:image" content="https://www.vmware.com/content/dam/digitalmarketing/vmware/en/images/icons/vmw-avatar-corporate.png"/>
    

    <meta property="og:site_name" content="VMware"/>
    
    
    
        <meta property="og:description" content="The new VMware General Terms is a unified agreement with simple, customer-friendly terms that enables you to buy VMware software and services."/>
    
    
    
    
    
    <meta name="referrer" content="origin-when-cross-origin"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="VMware"/>
    
        <meta name="twitter:creator"/>
    
    
        <meta property="twitter:title" content="VMware ONE Contract Center"/>
    
    
        <meta property="twitter:description" content="The new VMware General Terms is a unified agreement with simple, customer-friendly terms that enables you to buy VMware software and services."/>
    
    
        <meta property="twitter:image" content="https://www.vmware.com/content/dam/digitalmarketing/vmware/en/images/icons/vmw-avatar-corporate.png"/>
    
    
    
    
    
    
    
    
    
        <meta name="description" content="The new VMware General Terms is a unified agreement with simple, customer-friendly terms that enables you to buy VMware software and services."/>
    
    
    
        <meta name="date" content="2023-12-06"/>
    

    
	
    <script type="text/javascript" src="/etc.clientlibs/clientlibs/granite/jquery.min.js"></script>
    
    
<script type="text/javascript" src="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-dependencies.min.js"></script>



    
        
        
            <script type="text/javascript" src="https://api.company-target.com/api/v2/ip.js?key=yhM3aXuMmXqyt2Dy5b4prrxMmug10POPRguNDfMk&var=db" async></script>
            <script type='text/javascript' src="//tags.tiqcdn.com/utag/vmware/aem-privacy/prod/utag.sync.js" async></script>
        
    

	 

    
    
    
<link rel="stylesheet" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-dependencies.min.css" type="text/css">



    
    
<link rel="stylesheet" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-base.min.css" type="text/css">




   

	
    
    
<link rel="stylesheet" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/components/content/header-redesign/clientlibs.min.css" type="text/css">



	

    
    
<link rel="stylesheet" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs-site/vmware.min.css" type="text/css">





    <script>
      window.digitalData={version:"1.0",pageInstanceID:"",tagnamespace:"",page:{attributes:{pageContentType:"non-form",designVersion:"AEM 6.5",journeyStage:"",internalEngagementChannel:"none",score:"1",personas:"",entitlementType:"",formType:"",aemPageName:"agreements",isLoggedIn:"",accumulatedScore:""},pageInfo:{destinationURL:"",referringURL:"",SysEnv:"",variant:"",version:"",breadCrumbs:"",issueDate:"",effectiveDate:"",language:"",geoRegion:"",industryCodes:"",publisher:"",pageID:"eac20597-2c1a-4a73-b72d-dba8344c7e73"},category:{primaryCategory:"",pageSubCategory:"",pageSubSubCategory:"",pageSubSubSubCategory:"",pageSubSubSubSubCategory:"",pageSubSubSubSubSubCategory:"",pageSubDetail:"",pageDetail:"VMware ONE Contract Center"},category2:{primaryCategory:"",pageSubCategory:"",pageSubSubCategory:"",pageSubSubSubCategory:"",pageSubSubSubSubCategory:"",pageSubSubSubSubSubCategory:"",pageSubDetail:"",pageDetail:"VMware ONE Contract Center"}}};
   </script>
    <script>
      digitalData.page.pageInfo.version="";digitalData.page.pageInfo.issueDate="2023-12-06T22:19:31.072-08:00".substring(0,10);digitalData.page.pageInfo.effectiveDate="".substring(0,10);digitalData.tagnamespace="";var y= digitalData.tagnamespace.split(','); var journeystage=[]; var entitlement=[]; var persona=[]; var formtype=[]; var strategicpriority=[];var itinitiative=[];y.forEach(function(value){ if(value.split('/')[0]=="vmware:journeystage"){journeystage.push(value.split('/')[1]); }else if(value.split('/')[0]=="vmware:entitlementtype"){ entitlement.push(value.split('/')[1]); }else if(value.split('/')[0]=="vmware:persona"){ persona.push(value.split('/')[1]); } else if(value.split('/')[0]=="vmware:strategic-priority"){ strategicpriority.push(value.split('/')[1]); } else if(value.split('/')[0]=="vmware:formtype"){ formtype.push(value.split('/')[1]); } else if(value.split('/')[0]=="vmware:it-initiatives"){ itinitiative.push(value.split('/')[1]); }});digitalData.page.attributes.personas =persona.toString();digitalData.page.attributes.entitlementType=entitlement.toString();digitalData.page.attributes.journeyStage=journeystage.toString();digitalData.page.attributes.formtype=formtype.toString();digitalData.page.attributes.strategicpriority=strategicpriority.toString();digitalData.page.attributes.itinitiative=itinitiative.toString();if(digitalData.tagnamespace.indexOf('vmware:thankyoupage')!=-1){digitalData.page.attributes.gatedThankyouPage='Yes';}
   </script>
    <span style="display:none">
	    
    </span>
    

    <a name="pagePath" content="/content/vmware/vmware-published-sites/us/agreements" rel="nofollow" style="display:none;"></a>
     <a name="originalPath" content="/content/vmware/vmware-published-sites/us/agreements" rel="nofollow" style="display:none;"></a>

    
    
        <script type="text/javascript">
            var utag_data = digitalData;
        </script>
    

    
        
    

	<script type='text/javascript' defer></script>




    
<script type="text/javascript" src="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-vmware-datalayer.min.js" defer></script>




    
    
        

                              <script>!function(e){var n="https://s.go-mpulse.net/boomerang/";if("False"=="True")e.BOOMR_config=e.BOOMR_config||{},e.BOOMR_config.PageParams=e.BOOMR_config.PageParams||{},e.BOOMR_config.PageParams.pci=!0,n="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="ZT6AS-VNWGR-9HQZU-MKQFP-XPYSE",function(){function e(){if(!r){var e=document.createElement("script");e.id="boomr-scr-as",e.src=window.BOOMR.url,e.async=!0,o.appendChild(e),r=!0}}function t(e){r=!0;var n,t,a,i,d=document,O=window;if(window.BOOMR.snippetMethod=e?"if":"i",t=function(e,n){var t=d.createElement("script");t.id=n||"boomr-if-as",t.src=window.BOOMR.url,BOOMR_lstart=(new Date).getTime(),e=e||d.body,e.appendChild(t)},!window.addEventListener&&window.attachEvent&&navigator.userAgent.match(/MSIE [67]\./))return window.BOOMR.snippetMethod="s",void t(o,"boomr-async");a=document.createElement("IFRAME"),a.src="about:blank",a.title="",a.role="presentation",a.loading="eager",i=(a.frameElement||a).style,i.width=0,i.height=0,i.border=0,i.display="none",o.appendChild(a);try{O=a.contentWindow,d=O.document.open()}catch(_){n=document.domain,a.src="javascript:var d=document.open();d.domain='"+n+"';void 0;",O=a.contentWindow,d=O.document.open()}if(n)d._boomrl=function(){this.domain=n,t()},d.write("<bo"+"dy onload='document._boomrl();'>");else if(O._boomrl=function(){t()},O.addEventListener)O.addEventListener("load",O._boomrl,!1);else if(O.attachEvent)O.attachEvent("onload",O._boomrl);d.close()}function a(e){window.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!window.BOOMR||!window.BOOMR.version&&!window.BOOMR.snippetExecuted){window.BOOMR=window.BOOMR||{},window.BOOMR.snippetStart=(new Date).getTime(),window.BOOMR.snippetExecuted=!0,window.BOOMR.snippetVersion=14,window.BOOMR.url=n+"ZT6AS-VNWGR-9HQZU-MKQFP-XPYSE";var i=document.currentScript||document.getElementsByTagName("script")[0],o=i.parentNode,r=!1,d=document.createElement("link");if(d.relList&&"function"==typeof d.relList.supports&&d.relList.supports("preload")&&"as"in d)window.BOOMR.snippetMethod="p",d.href=window.BOOMR.url,d.rel="preload",d.as="script",d.addEventListener("load",e),d.addEventListener("error",function(){t(!0)}),setTimeout(function(){if(!r)t(!0)},3e3),BOOMR_lstart=(new Date).getTime(),o.appendChild(d);else t(!1);if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a)}}(),"".length>0)if(e&&"performance"in e&&e.performance&&"function"==typeof e.performance.setResourceTimingBufferSize)e.performance.setResourceTimingBufferSize();!function(){if(BOOMR=e.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var n=""=="true"?1:0,t="",a="snjyegycc3ocsznhyr2a-f-424eca75a-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,o={"ak.v":"36","ak.cp":"39349","ak.ai":parseInt("174300",10),"ak.ol":"0","ak.cr":4,"ak.ipv":4,"ak.proto":"http/1.1","ak.rid":"340518f","ak.r":47740,"ak.a2":n,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"147.83.130.0","ak.cport":44962,"ak.gh":"23.33.143.159","ak.quicv":"","ak.tlsv":"tls1.2","ak.0rtt":"","ak.csrc":"-","ak.acc":"reno","ak.t":"1705493620","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==OIXfhFY2fdZn3LJPHkYfONwX4LKrxfmDr7S+qq7wGsGU0dxIa3UpwTWNfW9oCT3zRxzze3iI6X5G/K7L+8jRjOjWm5uY6IapKpUzQLCXuJf2l7EsatXZ0qglPAZGhQQ8hekAmgPix2ApyIDkYFGviNkixcn31dcj+3Hrv8LF0LI8zp4zccEtI1/cTRthtEAFizFl3RCDms2sB8sGQ6Lm8FvmTMADWosGbFfK9JxybmGCF142mhZ52NOSRAOJd8RJEqsryIHOaEAaIWpn6aP3z3MW6Va8y/wyVoQeLkcGbPHWwAORg0npR5DfHufSx76Tffq4lDw1bCccZQflqlkj3A6mG8GsSJikAC6LTNMcCwjkp9RMFm2BxDeU58nbzt8vs9gq1R4UkG62mNxzSdOT6Zot/DGvDNUZeQU+N2rulnE=","ak.pv":"166","ak.dpoabenc":"","ak.tf":i};if(""!==t)o["ak.ruds"]=t;var r={i:!1,av:function(n){var t="http.initiator";if(n&&(!n[t]||"spa_hard"===n[t]))o["ak.feo"]=void 0!==e.aFeoApplied?1:0,BOOMR.addVar(o)},rv:function(){var e=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(e)}};BOOMR.plugins.AK={akVars:o,akDNSPreFetchDomain:a,init:function(){if(!r.i){var e=BOOMR.subscribe;e("before_beacon",r.av,null,null),e("onbeacon",r.rv,null,null),r.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script></head>
     
    
    <input type="hidden" name="orgLang" value="en-US"/>
    
    <body class="base page basicpage   ">
	<script>
       var is_chrome=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;if(is_chrome) document.getElementsByTagName("body")[0].classList.add("fallback");
    </script>
    
    
        



        

    <script defer type="text/javascript" src="/etc.clientlibs/vmware-modernize-cms/componentlibrary/components/structure/base/clientlibs/socialshare.js"></script>

    <div data-share-properties data-linkedin-app-key="75zt75mybtix3y" data-facebook-app-id="189215431793398" data-facebook-app-version="v2.7" data-twitter-via="VMware" data-twitter-cid="70134000001YTvO" data-twitter-src="so_5b27ee4a667bd" data-facebook-cid="70134000001YTvE" data-facebook-src="so_5b27ea6d62306" data-linkedin-cid="70134000001YTvJ" data-linkedin-src="so_5b27edd3cc9a9" data-google-cid="70134000001YTvT" data-google-src="so_5b27ec8762d35">
    </div>


 
	
		
		<!-- SDI include (path: /content/vmware/vmware-published-sites/us/config-pages/modernize/dalmore-header/_jcr_content/root/header_redesign.nocache.html, resourceType: vmware-modernize-cms/componentlibrary/components/content/header-redesign) -->


    






<div id="utiltybarheader">
<div id="nav-pzn" class="dalmore-header">
<header class="header-component header-redesign-container">
   <div class="hdr-wrapper">
      <div class="hdr-top">
         <div class="container">
            <div class="content">
               <div class="row">
                  <div class="col-md-12">
                     <div class="header">
                        <a class="promo-skip-link d-none" href="#promo-content-skip" title="Skip to Promo" tabindex="0" name="nav_utility : Promo">Skip to Promo</a>
					 	<a class="skip-link" href="#main-content-skip" title="Skip to main content" tabindex="0" name="nav_utility : Skip">Skip to main content</a>
                        <div class="top-nav">
						   
						   <!--<a class="skip-link" role="link" href="#main-content-skip" tabindex="0" name="&amp;lpos=vmworld : 0">Skip to Main Content</a>-->
                           <div class="hdr-search d-none">
								
							  <label for="ub-search" class="sr-only">Global Search</label>
							  <form action="//www.vmware.com/search.html" id="globalsearch" class="wrapperSearch">
								 <input type="text" name="q" id="ub-search" class="d-none" placeholder="Search" title="Search" aria-role="searchbox" role="searchbox"/>
								 <a href="javascript:void(0);" aria-label="Search vmware.com" class="search-icon ml-lg-3" name="nav_utility : Search">
								 	
									<i class="fa fa-search text-indigo mr-2 mr-lg-0" aria-hidden="true"></i>
								 </a>
								 <input type="hidden" name="num" value="20"/>
								 <input type="hidden" name="filter" value="0"/>
								 <input type="hidden" name="ie" value="UTF-8"/>
								 <input type="hidden" name="oe" value="UTF-8"/>
								 <input type="hidden" name="entqr" value="0"/>
								 <input type="hidden" name="start" value="0"/>
								 <input type="hidden" name="sort" value=""/>
								 <input type="hidden" name="tlen" value="200"/>
								 <input type="hidden" name="numgm" value="3"/>
								 <input type="hidden" name="cn" value="vmware"/>
								 <input type="hidden" name="cid" value=""/>
								 <input type="hidden" name="tid" value=""/>
								 <input type="hidden" name="getfields" value="*"/>
								 <input type="hidden" name="partialfields" value=""/>
								 <input type="hidden" name="requiredfields" value=""/>
								 <input type="hidden" name="place" value="top"/>
								 <input type="hidden" name="client" value="VMware_Site_1"/>
								 <input type="hidden" name="site" value="VMware_Site_1"/>
								 <input type="hidden" name="cc" value="en"/>
								 <input type="hidden" name="stype" value="main"/>
							  </form>
                           </div>
						   

						   
                           <div class="utility-menu hide-block-mobile">
								
							  
							  
                              <a href="/worldwide.html" name="nav_utility : Worldwide" aria-label="US" title="US" class="ml-lg-3">
                                 <span>
										<picture>
										
										<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/globe-icon.png.imgo.jpeg"/>
										<img width="17" height="17" loading="lazy" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/globe-icon.png" alt="US" aria-label="Language by Region" title="Language by Region" aria-hidden="true"/>
                                 	</picture>
                                 	<span class="align-middle">US</span>
								 </span>                                 
                              </a>
							  
							 
							  
							  							  
							  
								
									
								   <a href="https://store-us.vmware.com/" role="link" name="nav_utility : Store" target="_blank" class="ml-lg-3" aria-label="Store" title="Store"><span>Store</span></a>
								
							  
							  
							  
							  
                              <div class="hdr-login">
                                   
								 <a aria-label="Login" class="login-link ml-lg-3" name="nav_utility : Log In" href="javascript:void(0);" aria-expanded="false" title="Login " aria-describedby="">Login
										<i class="fa fa-chevron-right right-arrow ml-1 text-indigo d-none d-lg-block login-arrow" aria-hidden="true"></i>
									
                                 </a>
								 
								 <div class="hdr-login-menu d-none">
									
                                    <a href="https://console.cloud.vmware.com/" name="nav_utility : Cloud Services Console" title="Cloud Services Console" target="_blank" class="d-block text-indigo pt-2" aria-label="Cloud Services Console"><span>Cloud Services Console</span></a>
                                 
									
                                    <a href="https://customerconnect.vmware.com/login" name="nav_utility : Customer Connect" title="Customer Connect" target="_blank" class="d-block text-indigo pt-2" aria-label="Customer Connect"><span>Customer Connect</span></a>
                                 
									
                                    <a href="/go/partnerconnect" name="nav_utility : Partner Connect" title="Partner Connect " target="_blank" class="d-block text-indigo pt-2" aria-label="Partner Connect"><span>Partner Connect</span></a>
                                 </div>
                              </div>
							  
							  
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="hdr-bottom-nav">
         <div class="container">
            <div class="content">
               <div class="row">
                  <div class="col-md-12">
                     <div class="header">
                        <nav class="header-menu pt-30 pb-30">

						   
						   	
						   
						   <a class="header-vmware-logo" role="link" href="/" name="nav_topbar : VMware Logo" title="VMware" aria-label="VMware">
							   <picture class="float-left mr-lg-5">
								  <source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/company/vmware-logo-grey.svg.imgo.jpeg"/>
								  <img width="140" height="42" loading="lazy" src="/content/dam/digitalmarketing/vmware/en/images/company/vmware-logo-grey.svg" alt="VMware" title="VMware" class="vmware-logo"/>
							   </picture>
						    </a>
						   



						   
						   
							
    							
							
    							
							
    							
							
    							
							
    							
							
						   <ul class="menu-item mb-lg-0 hide-block-mobile  ">
							   

							   <li class="" data-value="multicloudenvironments">
								  
								  <a href="javascript:void(0);" name="nav_topbar : Multi-Cloud Services" role="tab" title="Multi-Cloud Services" aria-expanded="false">
								  Multi-Cloud Services
									<i class="fa fa-chevron-right float-right d-lg-none" aria-hidden="true"></i>
								  </a>

							   </li>

							
							   

							   <li class="" data-value="products">
								  
								  <a href="javascript:void(0);" name="nav_topbar : Products" role="tab" title="Products" aria-expanded="false">
								  Products
									<i class="fa fa-chevron-right float-right d-lg-none" aria-hidden="true"></i>
								  </a>

							   </li>

							
							   

							   <li class="" data-value="solutions">
								  
								  <a href="javascript:void(0);" name="nav_topbar : Solutions" role="tab" title="Solutions" aria-expanded="false">
								  Solutions
									<i class="fa fa-chevron-right float-right d-lg-none" aria-hidden="true"></i>
								  </a>

							   </li>

							
							   

							   <li class="" data-value="partner">
								  
								  <a href="javascript:void(0);" name="nav_topbar : Partners" role="tab" title="Partners" aria-expanded="false">
								  Partners
									<i class="fa fa-chevron-right float-right d-lg-none" aria-hidden="true"></i>
								  </a>

							   </li>

							
							   

							   <li class="" data-value="resources">
								  
								  <a href="javascript:void(0);" name="nav_topbar : Resources" role="tab" title="Resources" aria-expanded="false">
								  Resources
									<i class="fa fa-chevron-right float-right d-lg-none" aria-hidden="true"></i>
								  </a>

							   </li>

							</ul>
							
								<a href="javascript:void(0);" aria-label="Search vmware.com" class="search-icon hide-mobile-view-new-header ml-lg-3" name="nav_utility : Search">
									<!--<i class="fa fa-search text-indigo mr-2 mr-lg-0" aria-hidden="true"></i>-->
								 </a>
							

                            
                            <div class="container-rightbtn">
                            
                                  <a aria-label="" class="btn btn " href="/get-started.html" name="nav_utility : Get Started" title="GET STARTED" target="_self">GET STARTED</a>
                            </div>
                             
							
                           <span class="d-lg-none float-left">
								<i class="fa fa-bars fa-3x text-indigo header-menu-icon" aria-hidden="true" tabindex="0"></i>
								<i class="fa fa-times fa-3x text-indigo header-menu-cross-icon d-none" aria-hidden="true" tabindex="0"></i>
                           </span>
						   	
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
	  <!-- <div id="main-content-skip"></div> -->
   </div>
   <div class="search-bar-comp d-none">
	<div class="container">
<div class="hdr-search">

   <label for="ub-search" class="sr-only">Global Search</label>
   <form action="//www.vmware.com/search.html" id="globalsearch" class="wrapperSearch">
      <a href="javascript:void(0);" tabindex="-1" class="search-icon ml-lg-3" name="nav_utility : Search">						 
      </a>
      <input type="text" name="q" id="ub-search" placeholder="Search" title="Search" role="searchbox"/>
      
      <input type="hidden" name="num" value="20"/>
      <input type="hidden" name="filter" value="0"/>
      <input type="hidden" name="ie" value="UTF-8"/>
      <input type="hidden" name="oe" value="UTF-8"/>
      <input type="hidden" name="entqr" value="0"/>
      <input type="hidden" name="start" value="0"/>
      <input type="hidden" name="sort" value=""/>
      <input type="hidden" name="tlen" value="200"/>
      <input type="hidden" name="numgm" value="3"/>
      <input type="hidden" name="cn" value="vmware"/>
      <input type="hidden" name="cid" value=""/>
      <input type="hidden" name="tid" value=""/>
      <input type="hidden" name="getfields" value="*"/>
      <input type="hidden" name="partialfields" value=""/>
      <input type="hidden" name="requiredfields" value=""/>
      <input type="hidden" name="place" value="top"/>
      <input type="hidden" name="client" value="VMware_Site_1"/>
      <input type="hidden" name="site" value="VMware_Site_1"/>
      <input type="hidden" name="cc" value="en"/>
      <input type="hidden" name="stype" value="main"/>
   </form>
   <a href="javascript:void(0);" aria-label="Close Search" class="close-icon closeIconSearchComp ml-lg-3" name="nav_utility : Close" link-name="Close">
   </a>
   </div>
</div>
	</div>
</header>

 	
	
		<section class="aem-col-container submenu-component d-none submenu-redesign-container" id="multicloudenvironments">
			<div class="container">
				<div class="row d-lg-none back-icon pb-4 pt-3 bg-lightgray">
					<div class="col-md-12">
						<span class="submenu-back-text"><i class="fa fa-chevron-left d-lg-none" aria-hidden="true"></i>Main Menu<span>
					</div>
				</div>
			</div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                     <div class="col-md-12 mt-3 cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-none" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container-fluid">
            <div class="content px-3">
               <div class="row container-comp-wrapper">
                  
                  
                     
					 
                     
                     
                        <div class="col-md-5 col-sm-12 mt-3 cont-columns  px-0">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concolumn_container">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container  ">
	
	
	
	<div class="container noPadding dark-background  ">
		
		
		
		
			

			
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-custom-container-configcolumn_containercard">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody " data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box   no-padding     standardcard  height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class="card-image-center picture   ">
				
				
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/thumbnails/vmw-illu-cross-cloud-services.jpg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/thumbnails/vmw-illu-cross-cloud-services.jpg" alt="" role="presentation" class="Image full-width-img   "/>
							
						</picture>
					
					
				
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h5 class="card-title  text-left">

						

						


						
							
							
								Today’s Multi-Cloud Reality: Cloud Chaos
							
						
						
					</h5>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<h6>87% of enterprises use two or more cloud environments to run their applications. Multi-cloud accelerates digital transformation, but also introduces complexity and risk, resulting in a chaotic reality for many organizations.</h6>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="LEARN ABOUT MULTI-CLOUD" aria-label="Today’s Multi-Cloud Reality: Cloud Chaos LEARN ABOUT MULTI-CLOUD" role="link" href="/multi-cloud.html" class="linkdisplay mb-2 btn" target="_self">
								
								LEARN ABOUT MULTI-CLOUD<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>

			
			
				
				
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>

    
</div>
</div>
                        </div>
                        <div class="col-md-7 col-sm-12 mt-3 cont-columns px-0">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concolumn_container_cop">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container bg-lightblue ">
	
	
	
	<div class="container noPadding dark-background  ">
		
		<div class="row ">
			<div class="col-md-12 ">
				<div class="container-title  text-gray " data-aos="fade-up" data-aos-delay="500">
					

					<h5 class="col-title-img text-s text-left">
						
						
						
						
							 Conquer Cloud Chaos with VMware Cross-Cloud services
					</h5>

					
					
				</div>

				<!--Added split view cta-->
				
				<!--ends here split view-->
			</div>
		</div>
		
		
			

			<div class="row text-gray">
				<div class="col-md-12">
					<div class="container-footer mt-2 mb-3 text-left" data-aos="fade-up" data-aos-delay="500">
						
						
						
						
						
						
					</div>
				</div>
			</div>
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="text aem-GridColumn aem-GridColumn--default--12">


<div class="cmp-text     ">
    
    

    <div class="nested-filtered-table active">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    

                    <input type="hidden" class="ExpandLabel"/>
                    <input type="hidden" class="CollapseLabel"/>
                    <input type="hidden" class="BrightcoveAccountID"/>
                    <div class="container text-container" data-aos="fade-up" data-aos-delay="500">
                        <div class="row">
                            <div class="col-md-12 no-padd " data-aos="fade-up" data-aos-delay="500">
                                <p>VMware is addressing cloud chaos with our portfolio of multi-cloud services, VMware Cross-Cloud services, which enable you to build, run, manage, secure, and access applications consistently across cloud environments.<br />
<br />
With VMware Cross-Cloud services, you can address cloud chaos and shift to a cloud smart approach – one where you can choose the best environment for every application, without multiplying your complexity.<br />
</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


    
</div>

    
</div>

			
			
				
				<div class="row text-gray">
					<div class="col-md-12">
						<div class="container-footer mt-4 mb-2 text-left" data-aos="fade-up" data-aos-delay="500">
							
							
								
								<a role="button" href="/cross-cloud-services.html" class="btn btn btn-blue-outline" aria-label=" Conquer Cloud Chaos with VMware Cross-Cloud services LEARN HOW CROSS-CLOUD SERVICES CAN HELP ">LEARN HOW CROSS-CLOUD SERVICES CAN HELP<i class="fa fa-chevron-right ml-1"></i></a>
							
							
							
							
							
						</div>
					</div>
				</div>
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>

    
</div>
</div>
                        </div>
                     
                     
                     
					 
                  
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>
<div class="divider aem-GridColumn aem-GridColumn--default--12">





    <div class="divider  gray-line " role="separator" style="height: 1px; border-top: 1px solid;" data-aos="fade-up" data-aos-delay="500"></div>
 
</div>

    
</div>
</div>
                     </div>
                  
                  
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>

    
</div>

		</section>
	
 	
	
		<section class="aem-col-container submenu-component d-none submenu-redesign-container" id="products">
			<div class="container">
				<div class="row d-lg-none back-icon pb-4 pt-3 bg-lightgray">
					<div class="col-md-12">
						<span class="submenu-back-text"><i class="fa fa-chevron-left d-lg-none" aria-hidden="true"></i>Main Menu<span>
					</div>
				</div>
			</div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                     <div class="col-md-12 mt-3 cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                  
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Anywhere Workspace
                
   			</h5>
		
		
            <p class="submenu-header-desc text-black text-xxs">Access Any App on Any Device Securely</p>
        
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
					
				
			
		

		
		
			</h6>
		
		
			
			<ul>
				
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/horizon.html" alt="Horizon " aria-label="Horizon  1 of 4" name="nav_topbar_Products_Anywhere-Workspace : Horizon">
					
					
						Horizon 
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/horizon-cloud.html" alt="Horizon Cloud " aria-label="Horizon Cloud  2 of 4" name="nav_topbar_Products_Anywhere-Workspace : Horizon Cloud ">
					
					
						Horizon Cloud 
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="test" title="test"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/workspace-one.html" alt="Workspace ONE " aria-label="Workspace ONE  3 of 4" name="nav_topbar_Products_Anywhere-Workspace : Workspace ONE ">
					
					
						Workspace ONE 
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/workspace-one/unified-endpoint-management.html" alt="Workspace ONE UEM" aria-label="Workspace ONE UEM 4 of 4" name="nav_topbar_Products_Anywhere-Workspace : Workspace ONE UEM">
					
					
						Workspace ONE UEM
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>
<div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        App Platform
                
   			</h5>
		
		
            <p class="submenu-header-desc text-black text-xxs">Build and Operate Cloud Native Apps</p>
        
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
					
				
			
		

		
		
			</h6>
		
		
			
			<ul>
				
			
		
		<li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://tanzu.vmware.com/products" alt="Tanzu" aria-label="Tanzu 1 of 1" name="nav_topbar_Products_App-Platform : Tanzu ">
					
					
						 Tanzu
						
						
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>
<div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Cloud &amp; Edge Infrastructure
                
   			</h5>
		
		
            <p class="submenu-header-desc text-black text-xxs">Run Enterprise Apps Anywhere</p>
        
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
					
				
			
		

		
		
			</h6>
		
		
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/cloud-foundation.html" alt="Cloud Foundation" aria-label="Cloud Foundation 1 of 6" name="nav_topbar_Products_Cloud-Edge-Infrastructure : Cloud Foundation">
					
					
						Cloud Foundation
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/sd-wan.html" alt="SD-WAN/SASE" aria-label="SD-WAN/SASE 2 of 6" name="nav_topbar_Products_Cloud-Edge-Infrastructure : SD-WAN/SASE">
					
					
						SD-WAN/SASE
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="Cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://telco.vmware.com/" alt="Telco Cloud" aria-label="Telco Cloud 3 of 6" name="nav_topbar_Products_Cloud-Edge-Infrastructure : Telco Cloud">
					
					
						Telco Cloud
						
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/vsan.html" alt="vSAN" aria-label="vSAN 4 of 6" name="nav_topbar_Products_Cloud-Edge-Infrastructure : vSAN">
					
					
						vSAN
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/vsphere.html" alt="vSphere" aria-label="vSphere 5 of 6" name="nav_topbar_Products_Cloud-Edge-Infrastructure : vSphere">
					
					
						vSphere
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/cloud-disaster-recovery.html" alt="VMware Cloud Disaster Recovery " aria-label="VMware Cloud Disaster Recovery  6 of 6" name="nav_topbar_Products_Cloud-Edge-Infrastructure : VMware Cloud Disaster Recovery ">
					
					
						VMware Cloud Disaster Recovery 
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Cloud Management
                
   			</h5>
		
		
            <p class="submenu-header-desc text-black text-xxs">Automate and Optimize Apps and Clouds</p>
        
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
					
				
			
		

		
		
			</h6>
		
		
			
			<ul>
				
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/aria.html" alt="VMware Aria " aria-label="VMware Aria  1 of 3" name="nav_topbar_Products_Cloud-Management : VMware Aria ">
					
					
						VMware Aria 
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://cloudhealth.vmware.com/products/cloudhealth.html" alt="CloudHealth " aria-label="CloudHealth  2 of 3" name="nav_topbar_Products_Cloud-Management : CloudHealth">
					
					
						CloudHealth 
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/support/services/skyline.html" alt="Skyline" aria-label="Skyline 3 of 3" name="nav_topbar_Products_Cloud-Management : Skyline">
					
					
						Skyline
						
						
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>
<div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Desktop Hypervisor
                
   			</h5>
		
		
            <p class="submenu-header-desc text-black text-xxs">Manage apps in a local virtualization sandbox</p>
        
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
					
				
			
		

		
		
			</h6>
		
		
			
			<ul>
				
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/fusion.html" alt="Fusion for Mac" aria-label="Fusion for Mac 1 of 3" name="nav_topbar_Products_Desktop-Hypervisor : Fusion for Mac">
					
					
						Fusion for Mac
						
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/workstation-player.html" alt="Workstation Player" aria-label="Workstation Player 2 of 3" name="nav_topbar_Products_Desktop-Hypervisor : Workstation Player">
					
					
						Workstation Player
						
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/workstation-pro.html" alt="Workstation Pro" aria-label="Workstation Pro 3 of 3" name="nav_topbar_Products_Desktop-Hypervisor : Workstation Pro">
					
					
						Workstation Pro
						
						
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>
<div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Security &amp; Networking
                
   			</h5>
		
		
            <p class="submenu-header-desc text-black text-xxs">Connect and Secure Apps and Clouds</p>
        
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
					
				
			
		

		
		
			</h6>
		
		
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/carbon-black-cloud.html" alt="Carbon Black Cloud " aria-label="Carbon Black Cloud  1 of 5" name="nav_topbar_Products_Security-Networking : Carbon Black Cloud ">
					
					
						Carbon Black Cloud 
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/carbon-black-endpoint.html" alt="Carbon Black Endpoint" aria-label="Carbon Black Endpoint 2 of 5" name="nav_topbar_Products_Security-Networking : Carbon Black Endpoint ">
					
					
						Carbon Black Endpoint 
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/nsx.html" alt="NSX" aria-label="NSX 3 of 5" name="nav_topbar_Products_Security-Networking : NSX">
					
					
						NSX
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud " title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/nsx-advanced-load-balancer.html" alt="NSX Advanced Load Balancer" aria-label="NSX Advanced Load Balancer 4 of 5" name="nav_topbar_Products_Security-Networking : NSX Advanced Load Balancer">
					
					
						NSX Advanced Load Balancer
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="cloud" title="cloud"/>
							
						
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 img-right solid-cloud-hover text-xxss text-black mb-20 d-lg-flex d-block" href="/products/nsx-distributed-firewall.html" alt="NSX Distributed Firewall " aria-label="NSX Distributed Firewall  5 of 5" name="nav_topbar_Products_Security-Networking : NSX Distributed Firewall ">
					
					
						NSX Distributed Firewall 
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="Cloud" title="Cloud"/>
							
						
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-3-par-3custom_container_concolumn_container">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container bg-lightgray hover-remove-gray">
	
	
	
	<div class="container noPadding dark-background  ">
		
		<div class="row ">
			<div class="col-md-12 ">
				<div class="container-title  text-gray " data-aos="fade-up" data-aos-delay="500">
					

					<h6 class="col-title-img text-s text-left">
						
						
						
						
							Run VMware on any Cloud. Any Environment. Anywhere.
					</h6>

					
					
				</div>

				<!--Added split view cta-->
				
				<!--ends here split view-->
			</div>
		</div>
		
		
			

			
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
		
				
			<div class="submenu-container-title header-margin"></div>
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			<h6 class="mb-20 text-black text-xxs">
		


		
		
			
			
				On Public &amp; Hybrid Clouds
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/cloud-solutions/alibaba-cloud.html" alt="Alibaba Cloud VMware Service" aria-label="Alibaba Cloud VMware Service 1 of 7" name="nav_topbar_products_On-Public-Hybrid-Clouds : Alibaba Cloud VMware Service">
					
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/vmware-logo-Alibaba.png" alt="alibaba" title="alibab"/>
							
						
						<span>Alibaba Cloud VMware Service </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/cloud-solutions/azure.html" alt="Azure VMware Solution" aria-label="Azure VMware Solution 2 of 7" name="nav_topbar_products_On-Public-Hybrid-Clouds : Azure VMware Solution">
					
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/vmware-Logo-Azure.png" alt="Azure" title="Azure"/>
							
						
						<span>Azure VMware Solution </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/cloud-solutions/google-cloud.html" alt="Google Cloud VMware Engine" aria-label="Google Cloud VMware Engine 3 of 7" name="nav_topbar_products_On-Public-Hybrid-Clouds : Google Cloud VMware Engine">
					
						<i class="fa fa-car d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/vmware-Logo-Google.png" alt="Google Cloud " title="Google Cloud"/>
							
						
						<span>Google Cloud VMware Engine </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/cloud-solutions/ibm-cloud.html" alt="IBM Cloud for VMware Solutions" aria-label="IBM Cloud for VMware Solutions 4 of 7" name="nav_topbar_products_On-Public-Hybrid-Clouds : IBM Cloud for VMware Solutions">
					
						<i class="fa fa-comments d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/Logo-IBM.png" alt="aws" title="aws"/>
							
						
						<span>IBM Cloud for VMware Solutions </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/cloud-solutions/oracle-cloud.html" alt="Oracle Cloud VMware Solutions" aria-label="Oracle Cloud VMware Solutions 5 of 7" name="nav_topbar_products_On-Public-Hybrid-Clouds : Oracle Cloud VMware Solutions">
					
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/vmware-logo-oracle.png" alt="Oracle Cloud" title="Oracle cloud"/>
							
						
						<span>Oracle Cloud VMware Solutions </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/vmc-on-aws.html" alt="VMware Cloud on AWS" aria-label="VMware Cloud on AWS 6 of 7" name="nav_topbar_products_On-Public-Hybrid-Clouds : VMware Cloud on AWS">
					
						<i class="fa fa-warning d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/Logo-AWS.png" alt="AWS" title="AWS"/>
							
						
						<span>VMware Cloud on AWS </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/vmc-on-aws/govcloud.html" alt="VMware Cloud on AWS GovCloud (US)" aria-label="VMware Cloud on AWS GovCloud (US) 7 of 7" name="nav_topbar_products_On-Public-Hybrid-Clouds : VMware Cloud on AWS GovCloud (US)">
					
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/Logo-AWS.png" alt="aws" title="aws"/>
							
						
						<span>VMware Cloud on AWS GovCloud (US) </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>
<div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			<h6 class="mb-20 text-black text-xxs">
		


		
		
			
			
				On Private &amp; Local Clouds
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/hyper-converged-infrastructure/dell-emc-vxrail.html" alt="Dell EMC VxRail" aria-label="Dell EMC VxRail 1 of 4" name="nav_topbar_products_On-Private-&amp;-Local-Clouds : Dell EMC VxRail">
					
						<i class="fa fa-comments d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/Logo-DellEMC.png" alt="emc" title="emc"/>
							
						
						<span>Dell EMC VxRail </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/vmc-equinix-metal.html" alt="VMware Cloud on Equinix Metal" aria-label="VMware Cloud on Equinix Metal 2 of 4" name="nav_topbar_products_On-Private-&amp;-Local-Clouds : VMware Cloud on Equinix Metal">
					
						
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/vmware-logo-equinix-metal.png" alt="VMware Cloud" title="VMware Cloud"/>
							
						
						<span>VMware Cloud on Equinix Metal </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/vmc-on-aws/outposts.html" alt="VMware on AWS Outposts" aria-label="VMware on AWS Outposts 3 of 4" name="nav_topbar_products_On-Private-&amp;-Local-Clouds : VMware on AWS Outposts">
					
						<i class="fa fa-dollar d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/Logo-AWS.png" alt="aws" title="aws"/>
							
						
						<span>VMware on AWS Outposts </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size14 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://cloud.vmware.com/providers" alt="VMware Verified Cloud Providers" aria-label="VMware Verified Cloud Providers 4 of 4" name="nav_topbar_products_On-Private-&amp;-Local-Clouds : VMware Verified Cloud Providers">
					
						<i class="fa fa-warning d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/Logo-vmware.png" alt="cloud" title="cloud"/>
							
						
						<span>VMware Verified Cloud Providers </span>
					
					
				</a>
			
		</li></ul>
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



 
</div></div>

    
</div>
</div>
                     </div>
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>
<div class="divider aem-GridColumn aem-GridColumn--default--12">





    <div class="divider  gray-line " role="separator" style="height: 1px; border-top: 1px solid;" data-aos="fade-up" data-aos-delay="500"></div>
 
</div>
<div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                     
					 
                     
                     
                     
                     
                        <div class="col-md-8 col-sm-12 mt-3 cont-columns  ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_con_1223527760column_container">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container  ">
	
	
	
	<div class="container noPadding dark-background  ">
		
		
		
		
			

			<div class="row text-gray">
				<div class="col-md-12">
					<div class="container-footer mt-2 mb-3 text-center" data-aos="fade-up" data-aos-delay="500">
						
						
						
						
						
						
					
						
						
						
						
						
						
					</div>
				</div>
			</div>
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>

			
			
				
				<div class="row text-gray">
					<div class="col-md-12">
						<div class="container-footer mt-4 mb-2 text-left" data-aos="fade-up" data-aos-delay="500">
							
							
								
								<a role="button" href="/products.html" name="nav_topbar_Products : see all products" class="btn btn" aria-label=" SEE ALL PRODUCTS ">SEE ALL PRODUCTS<i class="fa fa-chevron-right ml-1"></i></a>
							
							
							
							
							
						
							
							
								
								<a role="button" href="/products/pricing.html" class="btn btn btn-blue-outline" aria-label=" SEE PRICING ">SEE PRICING<i class="fa fa-chevron-right ml-1"></i></a>
							
							
							
							
							
						</div>
					</div>
				</div>
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>

    
</div>
</div>
                        </div>
                        <div class="col-md-4 col-sm-12 mt-3 cont-columns ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
		
				
			<div class="submenu-container-title header-margin"></div>
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 noPadding">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
		<li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" alt="SaaS (Subscription) product version available" aria-label="SaaS (Subscription) product version available 1 of 1" name="nav_topbar_products : SaaS (Subscription) product version available">
					
						<i class="fa fa-cloud d-none text-indigo pr-4" aria-hidden="true"></i>
						
							
								<img src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/cloud-default-state.svg" alt="SaaS (Subscription) product version available" title="SaaS (Subscription) product version available"/>
							
						
						<span>SaaS (Subscription) product version available </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
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
   </div>
</div>

</div>

    
</div>

		</section>
	
 	
	
		<section class="aem-col-container submenu-component d-none submenu-redesign-container" id="solutions">
			<div class="container">
				<div class="row d-lg-none back-icon pb-4 pt-3 bg-lightgray">
					<div class="col-md-12">
						<span class="submenu-back-text"><i class="fa fa-chevron-left d-lg-none" aria-hidden="true"></i>Main Menu<span>
					</div>
				</div>
			</div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                     <div class="col-md-12 mt-3 cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                  
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Solutions
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div tabindex="0" class="submenu-links-footer">
		
		
			<h6 class="mb-20 text-black text-xxs">
		


		
		<a name="nav_topbar_Solutions  : Anywhere Workspace" title="Anywhere Workspace 1" href="/solutions/anywhere-workspace.html" role="menu item" tabindex="-1" target="_self">
			
			
				Anywhere Workspace
			
			
				
					<p><span class="text-xxss">Access Any App on Any Device Securely</span></p>

				
			
		</a>

		
		
			</h6>
		
		
			
			<ul>
				
		</ul>
	</div>
</div>
</div>
<div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div tabindex="0" class="submenu-links-footer">
		
		
			<h6 class="mb-20 text-black text-xxs">
		


		
		<a name="nav_topbar_Solutions : App Platform" title="App Platform 1" href="/cloud-solutions/app-platform.html" role="menu item" tabindex="-1" target="_self">
			
			
				App Platform
			
			
				
					<p><span class="text-xxss">Build and Operate Cloud Native Apps</span></p>

				
			
		</a>

		
		
			</h6>
		
		
			
			<ul>
				
		</ul>
	</div>
</div>
</div>
<div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div tabindex="0" class="submenu-links-footer">
		
		
			<h6 class="mb-20 text-black text-xxs">
		


		
		<a name="nav_topbar_Solutions : Cloud Infrastructure" title="Cloud Infrastructure 1" href="/cloud-solutions/cloud-infrastructure.html" role="menu item" tabindex="-1" target="_self">
			
			
				Cloud Infrastructure
			
			
				
					<p><span class="text-xxss">Run Enterprise Apps Anywhere</span></p>

				
			
		</a>

		
		
			</h6>
		
		
			
			<ul>
				
		</ul>
	</div>
</div>
</div>
<div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div tabindex="0" class="submenu-links-footer">
		
		
			<h6 class="mb-20 text-black text-xxs">
		


		
		<a name="nav_topbar_Solutions : Cloud Management" title="Cloud Management 1" href="/solutions/cloud-management.html" role="menu item" tabindex="-1" target="_self">
			
			
				Cloud Management
			
			
				
					<p><span class="text-xxss">Automate and Optimize Apps and Clouds</span></p>

				
			
		</a>

		
		
			</h6>
		
		
			
			<ul>
				
		</ul>
	</div>
</div>
</div>
<div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div tabindex="0" class="submenu-links-footer">
		
		
			<h6 class="mb-20 text-black text-xxs">
		


		
		<a name="nav_topbar_Solutions : Edge Infrastructure" title="Edge Infrastructure 1" href="/products/secure-access-service-edge-sase.html" role="menu item" tabindex="-1" target="_self">
			
			
				Edge Infrastructure
			
			
				
					<p><span class="text-xxss">Enable the Multi-Cloud Edge</span></p>

				
			
		</a>

		
		
			</h6>
		
		
			
			<ul>
				
		</ul>
	</div>
</div>
</div>
<div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div tabindex="0" class="submenu-links-footer">
		
		
			<h6 class="mb-20 text-black text-xxs">
		


		
		<a name="nav_topbar_Solutions : Networking" title="Networking 1" href="/networking.html" role="menu item" tabindex="-1" target="_self">
			
			
				Networking
			
			
				
					<p><span class="text-xxss">Enable Connectivity for Apps and Clouds</span></p>

				
			
		</a>

		
		
			</h6>
		
		
			
			<ul>
				
		</ul>
	</div>
</div>
</div>
<div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div tabindex="0" class="submenu-links-footer">
		
		
			<h6 class="mb-20 text-black text-xxs">
		


		
		<a name="nav_topbar_Solutions : Security" title="Security 1" href="/security.html" role="menu item" tabindex="-1" target="_self">
			
			
				Security
			
			
				
					<p><span class="text-xxss">Secure Apps and Clouds</span></p>

				
			
		</a>

		
		
			</h6>
		
		
			
			<ul>
				
		</ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        By Industry
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://telco.vmware.com/" alt="Communications Service Providers" aria-label="Communications Service Providers 1 of 6" name="nav_topbar_Solutions_By-Industry : Communications Service Providers">
					
						
						
						<span>Communications Service Providers </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/solutions/industry/federal-government-dod-solutions.html" alt="Department of Defense" aria-label="Department of Defense 2 of 6" name="nav_topbar_Solutions_By-Industry : Department of Defense">
					
						
						
						<span>Department of Defense </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/solutions/industry/federal-government-it-solutions.html" alt="Federal Government" aria-label="Federal Government 3 of 6" name="nav_topbar_Solutions_By-Industry : Federal Government">
					
						
						
						<span>Federal Government </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/solutions/industry/financial-it-services.html" alt="Financial Services" aria-label="Financial Services 4 of 6" name="nav_topbar_Solutions_By-Industry : Financial Services">
					
						
						
						<span>Financial Services </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/solutions/industry/healthcare-it-solutions.html" alt="Healthcare Providers" aria-label="Healthcare Providers 5 of 6" name="nav_topbar_Solutions_By-Industry : Healthcare Providers">
					
						
						
						<span>Healthcare Providers </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/solutions/industry/state-local-government-it-solutions.html" alt="State and Local Government" aria-label="State and Local Government 6 of 6" name="nav_topbar_Solutions_By-Industry : State and Local Government">
					
						
						
						<span>State and Local Government </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-3-par-3custom_container_concard_copy_copy_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody " data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box      shadow  textcard bg-lightgray height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h6 class="card-title  text-left">

						

						


						
							
							
								VMware AI Solutions
							
						
						
					</h6>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description text-xxs text-left">
						

						
							<p>Accelerate and ensure the success of your generative AI initiatives with multi-cloud flexibility, choice, privacy and control.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					<div class="actionicon">
						
						
							<a title="LEARN MORE" name="nav_topbar_Solutions_VMware-AI-Solutions : Learn More" aria-label="VMware AI Solutions LEARN MORE" role="link" href="/artificial-intelligence.html" class="linkdisplay mb-2 " target="_self">
								
								LEARN MORE<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					</div>
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                     </div>
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>
<div class="divider aem-GridColumn aem-GridColumn--default--12">





    <div class="divider  gray-line " role="separator" style="height: 1px; border-top: 1px solid;" data-aos="fade-up" data-aos-delay="500"></div>
 
</div>
<div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_con_509675969column_container_cop">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container  ">
	
	
	
	<div class="container noPadding dark-background  ">
		
		
		
		
			

			<div class="row text-gray">
				<div class="col-md-12">
					<div class="container-footer mt-2 mb-3 text-center" data-aos="fade-up" data-aos-delay="500">
						
						
						
						
						
						
					
						
						
						
						
						
						
					</div>
				</div>
			</div>
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>

			
			
				
				<div class="row text-gray">
					<div class="col-md-12">
						<div class="container-footer mt-4 mb-2 text-left" data-aos="fade-up" data-aos-delay="500">
							
							
								
								<a role="button" href="/solutions.html" name="nav_topbar_Solutions : See All Solutions" class="btn btn btn-blue-outline" aria-label=" SEE ALL SOLUTIONS ">SEE ALL SOLUTIONS<i class="fa fa-chevron-right ml-1"></i></a>
							
							
							
							
							
						
							
							
								
								<a role="button" href="/solutions/industry.html" name="nav_topbar_Solutions : See All Industries" class="btn btn btn-blue-outline" aria-label=" SEE ALL INDUSTRIES ">SEE ALL INDUSTRIES<i class="fa fa-chevron-right ml-1"></i></a>
							
							
							
							
							
						</div>
					</div>
				</div>
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>

    
</div>
</div>
                     </div>
                  
                  
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>

    
</div>

		</section>
	
 	
	
		<section class="aem-col-container submenu-component d-none submenu-redesign-container" id="partner">
			<div class="container">
				<div class="row d-lg-none back-icon pb-4 pt-3 bg-lightgray">
					<div class="col-md-12">
						<span class="submenu-back-text"><i class="fa fa-chevron-left d-lg-none" aria-hidden="true"></i>Main Menu<span>
					</div>
				</div>
			</div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                     <div class="col-md-12 mt-3 cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                  
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        For Customers
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://cloud.vmware.com/providers" alt="Find a Cloud Provider" aria-label="Find a Cloud Provider 1 of 4" name="nav_topbar_Partners_For-Customers : Find a Cloud Provider">
					
						
						
						<span>Find a Cloud Provider </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://partnerlocator.vmware.com/" alt="Find a Partner" aria-label="Find a Partner 2 of 4" name="nav_topbar_Partners_For-Customers : Find a Partner">
					
						
						
						<span>Find a Partner </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/vmware-marketplace.html" alt="VMware Marketplace" aria-label="VMware Marketplace 3 of 4" name="nav_topbar_Partners_For-Customers : VMware Marketplace">
					
						
						
						<span>VMware Marketplace </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/partners/work-with-partners.html" alt="Work with a Partner" aria-label="Work with a Partner 4 of 4" name="nav_topbar_Partners_For-Customers : Work with a Partner">
					
						
						
						<span>Work with a Partner </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        For Partners
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://cloudsolutions.vmware.com/" alt="Become a Cloud Provider" aria-label="Become a Cloud Provider 1 of 8" name="nav_topbar_Partners_For-Partners : Become a Cloud Provider">
					
						
						
						<span>Become a Cloud Provider </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/cloud-partner-navigator.html" alt="Cloud Partner Navigator" aria-label="Cloud Partner Navigator 2 of 8" name="nav_topbar_Partners_For-Partners : Cloud Partner Navigator">
					
						
						
						<span>Cloud Partner Navigator </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://cloud.vmware.com/providervalidation" alt="Get Cloud Verified" aria-label="Get Cloud Verified 3 of 8" name="nav_topbar_Partners_For-Partners : Get Cloud Verified">
					
						
						
						<span>Get Cloud Verified </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/partners/partner-resources.html" alt="Learning and Selling Resources" aria-label="Learning and Selling Resources 4 of 8" name="nav_topbar_Partners_For-Partners : Learning and Selling Resources">
					
						
						
						<span>Learning and Selling Resources </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://www.vmware.com/go/partnerconnect" alt="Partner Connect Login" aria-label="Partner Connect Login 5 of 8" name="nav_topbar_Partners_For-Partners : Partner Connect Login">
					
						
						
						<span>Partner Connect Login </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/partners/partner-executive-edge.html" alt="Partner Executive Edge" aria-label="Partner Executive Edge 6 of 8" name="nav_topbar_Partners_For-Partners : Partner Executive Edge">
					
						
						
						<span>Partner Executive Edge </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://techpartnerhub.vmware.com/" alt="Technology Partner Hub" aria-label="Technology Partner Hub 7 of 8" name="nav_topbar_Partners_For-Partners : Technology Partner Hub">
					
						
						
						<span>Technology Partner Hub </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/partners/work-with-vmware.html" alt="Work with VMware" aria-label="Work with VMware 8 of 8" name="nav_topbar_Partners_For-Partners : Work with Vmware">
					
						
						
						<span>Work with VMware </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-3-par-3custom_container_concard">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody " data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box        textcard bg-lightgray height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h6 class="card-title  text-left">

						

						


						
							
							
								Working Together with Partners for Customer Success
							
						
						
					</h6>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description text-xxs text-left">
						

						
							<p>See how we work with a global partner to help companies prepare for multi-cloud.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					<div class="actionicon">
						
						
							<a title="VIEW PARTNER STORY" name="nav_topbar_Partners : View Partner Story" aria-label="Working Together with Partners for Customer Success VIEW PARTNER STORY" role="link" href="/partners/partner-executive-edge/hpe-taking-an-award-winning-approach-to-overcoming-customer-modernization-challenges.html" class="linkdisplay mb-2 " target="_self">
								
								VIEW PARTNER STORY<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					</div>
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-3-par-3custom_container_concard_copy_copy">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody " data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box   no-padding     standardcard  height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class="card-image-center picture   ">
				
				
					
					
				
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description text-xxs text-center">
						

						
							
						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                     </div>
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
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
   </div>
</div>

</div>

    
</div>

		</section>
	
 	
	
		<section class="aem-col-container submenu-component d-none submenu-redesign-container" id="resources">
			<div class="container">
				<div class="row d-lg-none back-icon pb-4 pt-3 bg-lightgray">
					<div class="col-md-12">
						<span class="submenu-back-text"><i class="fa fa-chevron-left d-lg-none" aria-hidden="true"></i>Main Menu<span>
					</div>
				</div>
			</div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                     <div class="col-md-12 mt-3 cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                  
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Tools &amp; Training
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://www.vmware.com/go/customerconnect" alt="VMware Customer Connect" aria-label="VMware Customer Connect 1 of 8" name="nav_topbar_Resources_Tools-Training : VMware Customer Connect">
					
						
						
						<span>VMware Customer Connect </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/trust-center.html" alt="VMware Trust Center" aria-label="VMware Trust Center 2 of 8" name="nav_topbar_Resources_Tools-Training : VMware Trust Center">
					
						
						
						<span>VMware Trust Center </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/learning.html" alt="Learning &amp; Certification" aria-label="Learning &amp; Certification 3 of 8" name="nav_topbar_Resources_Tools-Training : Learning and Certification">
					
						
						
						<span>Learning &amp; Certification </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://go.techzone.vmware.com/" alt="Tech Zone" aria-label="Tech Zone 4 of 8" name="nav_topbar_Resources_Tools-Training : Tech Zone">
					
						
						
						<span>Tech Zone </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://customerconnect.vmware.com/en/downloads" alt="Product Downloads" aria-label="Product Downloads 5 of 8" name="nav_topbar_Resources_Tools-Training : Product Downloads">
					
						
						
						<span>Product Downloads </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/trials-test-drives.html" alt="Product Trials" aria-label="Product Trials 6 of 8" name="nav_topbar_Resources_Tools-Training : Product Trials ">
					
						
						
						<span>Product Trials </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/cloud-services/engagement-platform.html" alt="Cloud Services Engagement Platform" aria-label="Cloud Services Engagement Platform 7 of 8" name="nav_topbar_Resources_Tools-Training : Cloud Services Engagement Platform">
					
						
						
						<span>Cloud Services Engagement Platform </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/trials-test-drives.html" alt="Hands-on Labs" aria-label="Hands-on Labs 8 of 8" name="nav_topbar_Resources_Tools-Training : Hands-on Labs">
					
						
						
						<span>Hands-on Labs </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>
<div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Services
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/professional-services.html" alt="Professional Services" aria-label="Professional Services 1 of 2" name="nav_topbar_Resources_Services : Professional Services">
					
						
						
						<span>Professional Services </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/customer-success.html" alt="Customer Success" aria-label="Customer Success 2 of 2" name="nav_topbar_Resources_Services : Customer Success">
					
						
						
						<span>Customer Success </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Support
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://customerconnect.vmware.com/home" alt="VMware Customer Connect" aria-label="VMware Customer Connect 1 of 4" name="nav_topbar_Resources_Support : VMware Customer Connect">
					
						
						
						<span>VMware Customer Connect </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/support/services.html" alt="Support Offerings" aria-label="Support Offerings 2 of 4" name="nav_topbar_Resources_Support : Support Offerings">
					
						
						
						<span>Support Offerings </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/support/services/skyline.html" alt="Skyline" aria-label="Skyline 3 of 4" name="nav_topbar_Resources_Support : Skyline">
					
						
						
						<span>Skyline </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/support/welcome-center.html" alt="Support Customer Welcome Center" aria-label="Support Customer Welcome Center 4 of 4" name="nav_topbar_Resources_Support : Support Customer Welcome Center">
					
						
						
						<span>Support Customer Welcome Center </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>
<div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Marketplace
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://marketplace.cloud.vmware.com/" alt="Cloud Marketplace" aria-label="Cloud Marketplace 1 of 2" name="nav_topbar_Resources_Marketplace : Cloud Marketplace">
					
						
						
						<span>Cloud Marketplace </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/vmware-marketplace.html" alt="VMware Marketplace" aria-label="VMware Marketplace 2 of 2" name="nav_topbar_Resources_Marketplace : VMware Marketplace">
					
						
						
						<span>VMware Marketplace </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>
<div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Videos
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://videos.vmware.com/" alt="VMware Video Library" aria-label="VMware Video Library 1 of 2" name="nav_topbar_resources_videos : VMware Video Library">
					
						
						
						<span>VMware Video Library </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://www.vmware.com/explore/video-library.html" alt="VMware Explore Video Library" aria-label="VMware Explore Video Library 2 of 2" name="nav_topbar_resources_videos : VMware Explore Video Library">
					
						
						
						<span>VMware Explore Video Library </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-4 mt-3 mx-auto cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Blogs &amp; Communities
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://blogs.vmware.com/" alt="Blogs" aria-label="Blogs 1 of 4" name="nav_topbar_Resources_Blogs-Communities : Blogs">
					
						
						
						<span>Blogs </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://podcasts.vmware.com/" alt="Podcasts" aria-label="Podcasts 2 of 4" name="nav_topbar_Resources_Blogs-Communities : Podcasts">
					
						
						
						<span>Podcasts </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://news.vmware.com/" alt="News &amp; Stories" aria-label="News &amp; Stories 3 of 4" name="nav_topbar_Resources_Blogs-Communities : News and Stories">
					
						
						
						<span>News &amp; Stories </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://communities.vmware.com/" alt="Communities" aria-label="Communities 4 of 4" name="nav_topbar_Resources_Blogs-Communities : Communities">
					
						
						
						<span>Communities </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>
<div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Customers
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company/customers.html" alt="Customer Stories" aria-label="Customer Stories 1 of 1" name="nav_topbar_Resouces_Customers : Customer Stories">
					
						
						
						<span>Customer Stories </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>
<div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
   			<h5 class="submenu-container-title">
   				
                
                        Events
                
   			</h5>
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
		<li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://www.vmware.com/explore.html?src=WWW_us_VMW_r9l88ts9qlc6b&int_cid=7012H000000wuPMQAY" alt="VMware Explore" aria-label="VMware Explore 1 of 3" name="nav_topbar_Resources_Events : VMware Explore">
					
						
						
						<span>VMware Explore </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://springone.io/" alt="SpringOne" aria-label="SpringOne 2 of 3" name="nav_topbar_Resources_Events : SpringOne">
					
						
						
						<span>SpringOne </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class="font-size16 dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company/events.html" alt="All Events &amp; Webcasts" aria-label="All Events &amp; Webcasts 3 of 3" name="nav_topbar_Resources_Events : All Events and Webcasts">
					
						
						
						<span>All Events &amp; Webcasts </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
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
   </div>
</div>

</div>
<div class="divider aem-GridColumn aem-GridColumn--default--12">





    <div class="divider  gray-line " role="separator" style="height: 1px; border-top: 1px solid;" data-aos="fade-up" data-aos-delay="500"></div>
 
</div>
<div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_con_1676716421column_container_cop">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container  ">
	
	
	
	<div class="container noPadding dark-background  ">
		
		
		
		
			

			<div class="row text-gray">
				<div class="col-md-12">
					<div class="container-footer mt-2 mb-3 text-center" data-aos="fade-up" data-aos-delay="500">
						
						
						
						
						
						
					</div>
				</div>
			</div>
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>

			
			
				
				<div class="row text-gray">
					<div class="col-md-12">
						<div class="container-footer mt-4 mb-2 text-left" data-aos="fade-up" data-aos-delay="500">
							
							
								
								<a role="button" href="/resources.html" name="nav_topbar_Resources : See All Resources" class="btn btn btn-blue-outline" aria-label=" SEE ALL RESOURCES ">SEE ALL RESOURCES<i class="fa fa-chevron-right ml-1"></i></a>
							
							
							
							
							
						</div>
					</div>
				</div>
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>

    
</div>
</div>
                     </div>
                  
                  
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>

    
</div>

		</section>
	
 
 </div>
 </div>

 
		
		
	


	<div class="container trigger-menu">
	  <div class="breadCrumb" role="navigation" aria-label="breadcrumb">
		<ul>
	<div class="toggle-dropdown">
		<a href="javascript:void(0)"> <i class="fa fa-ellipsis-h"> </i>
		<span class="sr-only">Ellipsis</span>
		</a>
		<div class="dd-con">
			<input type="hidden" id="relPathCount" value="1"/>
			<li class=" hide-mobile-breadcrumb" >
                   <a aria-label="ONE Contract Center " aria-current="page" class="active" href="/agreements.html"> <span> ONE Contract Center</span>
    				</a> 
				</li>
			</div>
	</div>
</ul>
<div class="social-links">
	<div class="overlay-con">
                </div>
		</div>
	
	  </div>
	</div>

<div role="main">
<div class="root responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="banner common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-rootjcr_contentbanner">
    
    
    








    
        <section class="banner    content-banner">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 no-padd">
                        <div class="content">
                            <div class="item">
                                <div class="bg-people">
                                    <div class="banner-image banner-video">
                                        <!--Overlay Starts here-->
                                        
                                        
                                        
                                        
                                            <picture>
                                                <source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/banners/content/hero-security-video-1400x350.png.imgo.jpeg"/>
                                                <img loading="eager" class="pic banner-auto" src="/content/dam/digitalmarketing/vmware/en/images/gallery/banners/content/hero-security-video-1400x350.png" alt role="presentation"/>
                                            </picture>
                                        
                                    </div>
                                    <div class="text-content start-alignment ">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12 col-lg-6 ">

                                                    <div class="banner-left-block text-gray" data-aos="fade-up" data-aos-delay="500" data-aos-offset="0">
                                                        <h1 class="banner-title text-xl">
                                                            
                                                            VMware ONE Contract Center
                                                        </h1>
                                                        
                                                        <div class="banner-description text-s"><p>The new VMware General Terms is a unified agreement with simple, customer-friendly terms that enables you to buy across VMware’s entire portfolio of software, cloud services, support services, and professional services.</p>
</div>

                                                        <div class="footer-content-area">

                                                            

                                                                
                                                                
                                                                    
                                                                    <a href="/agreements/understanding.html" name="LEARN MORE" title="LEARN MORE" class="btn btn btn-blue-ocean" aria-label="LEARN MORE">LEARN MORE <i class="fa fa-chevron-right ml-1"></i></a>
                                                                
                                                                
                                                                
                                                                
                                                                
                                                            

                                                            <!--Logo Starts here-->
                                                            
                                                            <!--Logo Ends here-->
                                                        </div>
                                                    </div>
                                                </div>
                                                
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


    
    

 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-rootjcr_contentcolumn_container">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container  ">
	
	
	
	<div class="container noPadding dark-background  ">
		
		
		
		
			

			
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                     <div class="col-md-12 mt-3 cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard" class="noPadding  ">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box        fullwidthcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture   ">
				
				
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/illustrations/illu-mcld-datacenter-two-whtbg.png.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/illustrations/illu-mcld-datacenter-two-whtbg.png" alt="" role="presentation" class="Image full-width-img   "/>
							
						</picture>
					
					
				
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-l text-left">

						

						


						
							
							
								VMware General Terms
							
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The VMware General Terms is the foundational agreement with our customers. This one set of essential terms applies to purchases all VMware software and services.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="VIEW OUR GENERAL TERMS" name="VIEW OUR GENERAL TERMS" aria-label="VMware General Terms VIEW OUR GENERAL TERMS" role="link" href="/vmware-general-terms.html" class="linkdisplay mb-2 btn" target="_self">
								
								VIEW OUR GENERAL TERMS<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                     </div>
                  
                  
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>

    
</div>

			
			
				
				
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>
<div class="we-tabs aem-GridColumn aem-GridColumn--default--12">







<div id="root-tabs-82126" class="cmp-tabs   text-gray tab  stickyTab      
  " data-cmp-is="tabs" data-aos="fade-up" data-aos-delay="500">
    <div class="container  ">
        <div class="row">
            <div class="content">
                <div class="col-md-12">
                    
                        <div class="tab-heading">
                        
                        <div class="tab-desc tab-padding text-xxs  alignmidd" data-aos="fade-up" data-aos-delay="500">
                            
                        </div>
                        </div>
                    
                    <div id="root-tabs-119032" class="hidden-data-wrapper">
                        

						<a class="d-none analytics-input"></a>

                    
                        

						<a class="d-none analytics-input"></a>

                    
                        

						<a class="d-none analytics-input"></a>

                    
                        

						<a class="d-none analytics-input"></a>

                    
                        

						<a class="d-none analytics-input"></a>

                    </div>

                    <div class="tab-Wrapper    ">
                        <div class="tab-horizontal ">
                            <div class="desc-content">
                                
                                <div class="tab-desc text-xxs  alignmidd" data-aos="fade-up" data-aos-delay="500">
                                    
                                </div>
                            </div>
                            <div class="dropdown visible-sm">
                                <!-- <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                                   Menu
                                <label for="select-boxhorizontal" class="sr-only">Horizontal Box for Tabs</label>-->
                                <select id="select-boxhorizontal" class="drop selectpicker show-tick" tabindex="0">
                                    <option value="663570535-1">Exhibits</option>
<option value="663570535-2">Offering-Specific Terms</option>
<option value="663570535-3">Commercial Programs</option>
<option value="663570535-4">Resources</option>

                                </select>
                                <span class="caret"></span>
                            </div>
                            <!--  <sly data-sly-test="false">
                                  <div class="tab-content" id="myTabContent">
                                      <div data-sly-repeat.item=",,,"
                                           id="panel_663570535-"
                                           aria-labelledby="663570535-"
                                           tabindex="0"
                                           data-sly-resource=""
                                           role="tabpanel"
                                           class="cmp-tabs__tabpanel cmp-tabs__tabpanel--active"
                                           data-cmp-hook-tabs="tabpanel"></div>
                                      <sly data-sly-resource="/content/vmware/vmware-published-sites/us/agreements/jcr:content/root/tabs/*"
                                           data-sly-test="false"></sly>
                                  </div>
                                  <sly  data-sly-test ="true">
                                      <!-- /* CTA Button with URL  */-->
                            <!-- <div class ="cta-wrapper visible-sm visible-md" data-sly-test =",,,," data-sly-list.ctaListObj=",,,," data-aos="fade-up" data-aos-delay="500">
                                 <div class="btn-wrap text-gray" data-aos="fade-up" data-aos-delay="500">
                                     <sly data-sly-test ="">
                                         <a href="" name="" target="_blank" class="" aria-label=""></a>
                                     </sly> -->
                            
                            <!--<sly data-sly-test ="">
                                <div data-sly-call="" data-sly-unwrap></div>
                            </sly>
                        </div>
                    </div>
                </sly>
                <div class="tabs tab-list-wrapper  bg-white visible-md">
                    <sly  data-sly-test="false">
                        <h5 data-sly-test="" data-sly-element="h5"
                            class="text-m  alignmidd mt-15"  data-aos="fade-up" data-aos-delay="500">
                            <sly data-sly-test="">
                                <span class="text-xxs eyebrow-text"  data-aos="fade-up" data-aos-delay="500"></span>
                            </sly>
                            
                        </h5>
                        <div class="tab-desc text-xxs  alignmidd"  data-aos="fade-up" data-aos-delay="500">
                            <p data-sly-test=""  data-aos="fade-up" data-aos-delay="500"></p>
                        </div>
                    </sly>
                    <ol data-sly-test="true"
                        role="tablist"
                        id="myTabhorizontal"
                        tabindex="0"
                        class=" middlealign cmp-tabs__tablist"
                        aria-multiselectable="false">
                        <li data-sly-repeat.item=",,,"
                            aria-controls="panel_663570535-"
                            id="663570535-"
                            class="cmp-tabs__tab cmp-tabs__tab--active tab-content-divider"
                            data-cmp-hook-tabs="tab" data-aos="fade-up" data-aos-delay="500"><a href="javascript:void(0)" role="tab" class="linkcolor"></a> <sly data-sly-test="false">
                            <div class="triangle-bg-color"></div></sly></li>
                        <sly data-sly-list.item=",,," data-sly-test ="true"> -->
                            
                            <!--  <li data-sly-test ="false" data-sly-list.ctaListObj=",,,," data-aos="fade-up" data-aos-delay="500">
                                  <div class="btn-wrap text-gray">
                                      <sly data-sly-test ="">
                                          <a href="" name="" target="_blank" class="" aria-label=""></a>
                                      </sly> -->
                            
                            <!-- <sly data-sly-test ="">
                                 <div data-sly-call="" data-sly-unwrap></div>
                             </sly>
                         </div>
                     </li>
                 </sly>
             </ol>
             <sly   data-sly-test ="false">
                 <div class="paddles">
                     <button class="left-paddle paddle hidden">
                         <i class="fas fa-chevron-left size-3x"></i>
                     </button>
                     <button class="right-paddle paddle">
                         <i class="fas fa-chevron-right size-3x"></i>
                     </button>
                 </div>

         </sly>
     </div>
  <div data-sly-test = "false" class = "tab-accordion-wrap visible-sm">
  <sly data-sly-test="true">

             <div class="tab-item" data-sly-repeat.tabitem=",,,">
                <div class="accordion"></div>

                     <sly data-sly-list.item=",,,">
                         <div data-sly-test = "true"
                              id="Accordian_663570535-"
                              aria-labelledby="663570535-"
                              tabindex="0"
                              data-sly-resource=""
                              role="tabpanel"
                              class="panel"></div>
                     </sly>
                 </div>

                 <sly data-sly-resource="/content/vmware/vmware-published-sites/us/agreements/jcr:content/root/tabs/*"
                      data-sly-test="false"></sly>
             </sly>
         </div>
     </sly>   -->
                            <!--    <sly data-sly-test="true"> -->
                            <div class="tabs tab-list-wrapper  bg-white visible-md ">
                                
                                <ol role="tablist" id="myTabhorizontal" class=" middlealign cmp-tabs__tablist" aria-multiselectable="false">
                                    <li aria-controls="panel_663570535-1" id="663570535-1" class="cmp-tabs__tab tab-content-divider" data-cmp-hook-tabs="tab" data-aos="fade-up" data-aos-delay="500"><a href="javascript:void(0)" role="tab" class="linkcolor">Exhibits</a> </li>
<li aria-controls="panel_663570535-2" id="663570535-2" class="cmp-tabs__tab tab-content-divider" data-cmp-hook-tabs="tab" data-aos="fade-up" data-aos-delay="500"><a href="javascript:void(0)" role="tab" class="linkcolor">Offering-Specific Terms</a> </li>
<li aria-controls="panel_663570535-3" id="663570535-3" class="cmp-tabs__tab tab-content-divider" data-cmp-hook-tabs="tab" data-aos="fade-up" data-aos-delay="500"><a href="javascript:void(0)" role="tab" class="linkcolor">Commercial Programs</a> </li>
<li aria-controls="panel_663570535-4" id="663570535-4" class="cmp-tabs__tab tab-content-divider" data-cmp-hook-tabs="tab" data-aos="fade-up" data-aos-delay="500"><a href="javascript:void(0)" role="tab" class="linkcolor">Resources</a> </li>

                                        
                                            
                                            
                                    
                                            
                                            
                                    
                                            
                                            
                                    
                                            
                                            
                                                
                                            
                                                
                                            
                                                
                                            
                                                
                                            
                                                
                                            
                                    </ol>
                                    
                                </div>
                                
                                    
                                    <div class="cta-wrapper visible-sm visible-md" data-aos="fade-up" data-aos-delay="500">
                                        <div class="btn-wrap text-gray" data-aos="fade-up" data-aos-delay="500">
                                            
                                            
                                            
                                        </div>
                                    
                                        <div class="btn-wrap text-gray" data-aos="fade-up" data-aos-delay="500">
                                            
                                            
                                            
                                        </div>
                                    
                                        <div class="btn-wrap text-gray" data-aos="fade-up" data-aos-delay="500">
                                            
                                            
                                            
                                        </div>
                                    
                                        <div class="btn-wrap text-gray" data-aos="fade-up" data-aos-delay="500">
                                            
                                            
                                            
                                        </div>
                                    
                                        <div class="btn-wrap text-gray" data-aos="fade-up" data-aos-delay="500">
                                            
                                            
                                            
                                        </div>
                                    </div>
                                
                                <div class="tab-content" id="myTabContent">
                                    <div id="panel_663570535-1" aria-labelledby="663570535-1" role="tabpanel" class="cmp-tabs__tabpanel cmp-tabs__tabpanel--active" data-cmp-hook-tabs="tabpanel" tabindex="0"><div class="tabs-layout responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-item_1653901766804tabscolumn_container">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container bg-lightblue ">
	
	
	
	<div class="container pt-100 pb-100 dark-background  ">
		
		<div class="row ">
			<div class="col-md-12 ">
				<div class="container-title  text-gray " data-aos="fade-up" data-aos-delay="500">
					

					<h2 class="col-title-img text-l text-center">
						
						
						
						
							Exhibits to the VMware General Terms
					</h2>

					
					<div class="mb-3 text-xxs body-lineheight text-center"> The Exhibits to the VMware General Terms apply for certain categories of VMware offerings, but don’t apply to all offerings.</div>
				</div>

				<!--Added split view cta-->
				
				<!--ends here split view-->
			</div>
		</div>
		
		
			

			
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                     
                        <div class="col-md-6 col-sm-12 mt-3 cont-columns  ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-cloud-services-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="6abcdd6f-dab2-4cf2-9d5f-64e0a86ad358">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-clouds-hybrid-cloud-ops-2-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-clouds-hybrid-cloud-ops-2-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Cloud Services Exhibit" title="Cloud Services Exhibit" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-cloud-services-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="6abcdd6f-dab2-4cf2-9d5f-64e0a86ad358">
								Cloud Services Exhibit
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The Cloud Services Exhibit to the General Terms applies to purchases of Cloud Services.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Cloud Services Exhibit DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-cloud-services-exhibit.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="6abcdd6f-dab2-4cf2-9d5f-64e0a86ad358">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-professional-services-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="1d45be45-cef1-4510-b047-9c0590bb7ebb">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-endpoint-management-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-endpoint-management-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Professional Services Exhibit" title="Professional Services Exhibit" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-professional-services-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="1d45be45-cef1-4510-b047-9c0590bb7ebb">
								Professional Services Exhibit
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The Professional Services Exhibit to the General Terms applies to purchases of Professional Services.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Professional Services Exhibit DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-professional-services-exhibit.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="1d45be45-cef1-4510-b047-9c0590bb7ebb">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_copy_copy_817605446" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-us-public-sector-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="dcb5b9b1-1ce4-43fb-ad9b-25c7fe6f4c85">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Public Sector Exhibit" title="Public Sector Exhibit" href="/content/dam/digitalmarketing/vmware/en/pdf/docs/vmware-public-sector-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="7b9d5061-aa24-49a6-9bb8-8500c0db27cd">
								Public Sector Exhibit
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The Public Sector Exhibit applies to certain public sector customers.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Public Sector Exhibit DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/docs/vmware-public-sector-exhibit.pdf" class="linkdisplay mb-2 " target="_blank" asset-type="application/pdf" asset-id="7b9d5061-aa24-49a6-9bb8-8500c0db27cd">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_copy_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-entities-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="d8bb6625-4bce-40ca-8078-08710aa412e0">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-applications-apps-as-a-service-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-applications-apps-as-a-service-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Entities Exhibit" title="VMware Entities Exhibit" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-entities-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="d8bb6625-4bce-40ca-8078-08710aa412e0">
								VMware Entities Exhibit
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The VMware Entities Exhibit applies to certain international customers and explains when local VMware companies are involved in transactions.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="VMware Entities Exhibit DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-entities-exhibit.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="d8bb6625-4bce-40ca-8078-08710aa412e0">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                        </div>
                        <div class="col-md-6 col-sm-12 mt-3 cont-columns ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-software-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="306dc60d-9722-482b-b882-0e2cd9dd525e">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-data-centers-endpoint-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-data-centers-endpoint-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Software Exhibit" title="Software Exhibit" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-software-exhibit.pdf" target="_blank" asset-type="application/pdf" asset-id="306dc60d-9722-482b-b882-0e2cd9dd525e">
								Software Exhibit
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The Software Exhibit to the General Terms applies to purchases of Software.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Software Exhibit DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-software-exhibit.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="306dc60d-9722-482b-b882-0e2cd9dd525e">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_copy_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/downloads/eula/vmware-data-processing-addendum.pdf" target="_blank" asset-type="application/pdf" asset-id="1751f4ab-faab-4440-845e-486e37223952">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-container-service-extension-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-container-service-extension-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Data Processing Addendum" title="Data Processing Addendum" href="/content/dam/digitalmarketing/vmware/en/pdf/downloads/eula/vmware-data-processing-addendum.pdf" target="_blank" asset-type="application/pdf" asset-id="1751f4ab-faab-4440-845e-486e37223952">
								Data Processing Addendum
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The Data Processing Addendum applies where VMware acts as a Processor (or Sub-Processor) of Personal Data.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Data Processing Addendum DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/downloads/eula/vmware-data-processing-addendum.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="1751f4ab-faab-4440-845e-486e37223952">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_copy_copy_" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/downloads/eula/vmware-data-processing-addendum.pdf" target="_blank" asset-type="application/pdf" asset-id="1751f4ab-faab-4440-845e-486e37223952">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-container-service-extension-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-container-service-extension-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Data Processing Addendum Amendment" title="Data Processing Addendum Amendment" href="/content/dam/digitalmarketing/vmware/en/pdf/docs/vmware-dpa-amendment-eu-standard-contractual-clauses-and-uk-idt.pdf" target="_blank" asset-type="application/pdf" asset-id="27ebe72e-0cd4-4c99-99b2-8b263bfc91f5" asset-score="1">
								Data Processing Addendum Amendment
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>This Data Processing Addendum applies to customers who have accepted VMware’s Data Processing Addendum prior to November 22, 2023.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Data Processing Addendum Amendment DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/docs/vmware-dpa-amendment-eu-standard-contractual-clauses-and-uk-idt.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="27ebe72e-0cd4-4c99-99b2-8b263bfc91f5" asset-score="1">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                        </div>
                     
					 
                     
                     
                     
                     
					 
                  
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>

    
</div>

			
			
				
				
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>

    
</div>
</div>
</div>
<div id="panel_663570535-2" aria-labelledby="663570535-2" role="tabpanel" class="cmp-tabs__tabpanel" data-cmp-hook-tabs="tabpanel" tabindex="0"><div class="tabs-layout responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-item_1653901775479tabscolumn_container">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container bg-lightblue ">
	
	
	
	<div class="container pt-100 pb-100 dark-background  ">
		
		<div class="row ">
			<div class="col-md-12 ">
				<div class="container-title  text-gray " data-aos="fade-up" data-aos-delay="500">
					

					<h2 class="col-title-img text-l text-center">
						
						
						
						
							Offering-Specific Terms
					</h2>

					
					<div class="mb-3 text-xxs body-lineheight text-center"> Some of VMware’s offerings have additional terms that apply only to that specific offering. These terms plug into the VMware General Terms where needed.
</div>
				</div>

				<!--Added split view cta-->
				
				<!--ends here split view-->
			</div>
		</div>
		
		
			

			
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                     
                        <div class="col-md-6 col-sm-12 mt-3 cont-columns  ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-cloud-services-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="aa7d8932-7b56-487b-a042-8b6203fbabd3">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-vcloud-availability-dr2c-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-vcloud-availability-dr2c-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Cloud Services Guide" title="Cloud Services Guide" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-cloud-services-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="aa7d8932-7b56-487b-a042-8b6203fbabd3">
								Cloud Services Guide
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The Cloud Services Guide contains service-specific notes for VMware Cloud Services.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Cloud Services Guide DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-cloud-services-guide.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="aa7d8932-7b56-487b-a042-8b6203fbabd3">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/agreements/sub-processors.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-clouds-iaas-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-clouds-iaas-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Sub-Processors" title="Sub-Processors" href="/agreements/sub-processors.html" target="_self">
								Sub-Processors
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Find service-specific sub-processor information for VMware Cloud Services and VMware Support Services.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="LEARN MORE" name="LEARN MORE" aria-label="Sub-Processors LEARN MORE" role="link" href="/agreements/sub-processors.html" class="linkdisplay mb-2 plain-text" target="_self">
								
								LEARN MORE<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_copy_281400374" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-support-services-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="12266832-f8d5-4d84-bde6-e5047714e827" asset-score="1">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-cloud-provider-pod-2-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-cloud-provider-cloud-provider-pod-2-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Support Services Guide" title="Support Services Guide" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-support-services-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="12266832-f8d5-4d84-bde6-e5047714e827" asset-score="1">
								Support Services Guide
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The Support Services Guide contains service-specific notes for purchases of Support Services for VMware Software.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Support Services Guide DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-support-services-guide.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="12266832-f8d5-4d84-bde6-e5047714e827" asset-score="1">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_copy_107408857" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/support/policies.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-people-customer-service-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-people-customer-service-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Support Services Policies" title="Support Services Policies" href="/support/policies.html" target="_self">
								Support Services Policies
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Find the policies for VMware Support Services.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="LEARN MORE" name="LEARN MORE" aria-label="Support Services Policies LEARN MORE" role="link" href="/support/policies.html" class="linkdisplay mb-2 plain-text" target="_self">
								
								LEARN MORE<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_copy_453066085" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/professional-services/sku-services.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-endpoint-desktop-shield-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-endpoint-desktop-shield-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Packaged Services" title="VMware Packaged Services" href="/professional-services/sku-services.html" target="_self">
								VMware Packaged Services
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Find information about VMware packaged professional services.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="LEARN MORE" name="LEARN MORE" aria-label="VMware Packaged Services LEARN MORE" role="link" href="/professional-services/sku-services.html" class="linkdisplay mb-2 plain-text" target="_self">
								
								LEARN MORE<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                        </div>
                        <div class="col-md-6 col-sm-12 mt-3 cont-columns ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-service-level-agreements-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="acdc8c11-c95a-4f9f-962c-6d2aff611726">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-clouds-horizon-air-hybrid-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-clouds-horizon-air-hybrid-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Service Level Agreements" title="Service Level Agreements" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-service-level-agreements-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="acdc8c11-c95a-4f9f-962c-6d2aff611726">
								Service Level Agreements
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Find service-specific service level agreements for VMware Cloud Services.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Service Level Agreements DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/agreements/vmware-service-level-agreements-guide.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="acdc8c11-c95a-4f9f-962c-6d2aff611726">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_copy_863773858" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/download/eula/product-guides.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-server-main-data-center-2-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-server-main-data-center-2-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Product Guide" title="Product Guide" href="/download/eula/product-guides.html" target="_self">
								Product Guide
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>The Product Guide contains product-specific notes for VMware Software.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="LEARN MORE" name="LEARN MORE" aria-label="Product Guide LEARN MORE" role="link" href="/download/eula/product-guides.html" class="linkdisplay mb-2 plain-text" target="_self">
								
								LEARN MORE<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_copy_1564603874" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/downloads/eula/vmw-equipment-terms-for-vmware-sd-wan.pdf" target="_blank" asset-type="application/pdf" asset-id="41afd013-bd9e-401a-8ca2-4082f9b8b2d2">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-data-centers-hci-appliance-turnkey-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-data-centers-hci-appliance-turnkey-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Equipment Terms" title="Equipment Terms" href="/content/dam/digitalmarketing/vmware/en/pdf/downloads/eula/vmw-equipment-terms-for-vmware-sd-wan.pdf" target="_blank" asset-type="application/pdf" asset-id="41afd013-bd9e-401a-8ca2-4082f9b8b2d2">
								Equipment Terms
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Find the terms applicable to purchases of Equipment from VMware.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="DOWNLOAD PDF" name="DOWNLOAD PDF" aria-label="Equipment Terms DOWNLOAD PDF" role="link" href="/content/dam/digitalmarketing/vmware/en/pdf/downloads/eula/vmw-equipment-terms-for-vmware-sd-wan.pdf" class="linkdisplay mb-2 plain-text" target="_blank" asset-type="application/pdf" asset-id="41afd013-bd9e-401a-8ca2-4082f9b8b2d2">
								
								DOWNLOAD PDF<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_copy_438327771" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/customer-success/success-360.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-industries-global-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-industries-global-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Success 360" title="VMware Success 360" href="/customer-success/success-360.html" target="_self">
								VMware Success 360
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Find information about VMware Success 360.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="LEARN MORE" name="LEARN MORE" aria-label="VMware Success 360 LEARN MORE" role="link" href="/customer-success/success-360.html" class="linkdisplay mb-2 plain-text" target="_self">
								
								LEARN MORE<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_copy_186876328" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-top" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/customer-success/technical-adoption-management-services.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-people-customer-service-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-people-customer-service-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  pin-to-bottom">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware TAM" title="VMware TAM" href="/customer-success/technical-adoption-management-services.html" target="_self">
								VMware TAM
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Find information about the VMware Technical Account Manager offering.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				<div class="cards-footer  ">
					
					
						
						
							<a title="LEARN MORE" name="LEARN MORE" aria-label="VMware TAM LEARN MORE" role="link" href="/customer-success/technical-adoption-management-services.html" class="linkdisplay mb-2 plain-text" target="_self">
								
								LEARN MORE<i class="fa fa-chevron-right ml-1"></i>
							</a>
						

						
						
					
					
					

					
					

				</div>
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                        </div>
                     
					 
                     
                     
                     
                     
					 
                  
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>

    
</div>

			
			
				
				
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>

    
</div>
</div>
</div>
<div id="panel_663570535-3" aria-labelledby="663570535-3" role="tabpanel" class="cmp-tabs__tabpanel" data-cmp-hook-tabs="tabpanel" tabindex="0"><div class="tabs-layout responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-item_1653901777609tabscolumn_container">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container bg-lightblue ">
	
	
	
	<div class="container pt-100 pb-100 dark-background  ">
		
		<div class="row ">
			<div class="col-md-12 ">
				<div class="container-title  text-gray " data-aos="fade-up" data-aos-delay="500">
					

					<h2 class="col-title-img text-l text-center">
						
						
						
						
							Commercial Programs
					</h2>

					
					<div class="mb-3 text-xxs body-lineheight text-center"> VMware commercial programs provide flexibility in the way customers purchase VMware offerings. These terms apply to our commercial programs.
</div>
				</div>

				<!--Added split view cta-->
				
				<!--ends here split view-->
			</div>
		</div>
		
		
			

			
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                     
                        <div class="col-md-6 col-sm-12 mt-3 cont-columns  ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/solutions/vmware-spp-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="4091820d-a60f-44f8-8d2d-487fca548efb">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="SPP Program Guide" title="SPP Program Guide" href="/content/dam/digitalmarketing/vmware/en/pdf/solutions/vmware-spp-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="4091820d-a60f-44f8-8d2d-487fca548efb">
								SPP Program Guide
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-center">
						

						
							
						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/products/vmware-subscription-upgrade-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="f107c722-4249-41d1-a53f-c61026295395" asset-score="1">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Subscription Upgrade Program" title="VMware Subscription Upgrade Program" href="/content/dam/digitalmarketing/vmware/en/pdf/products/vmware-subscription-upgrade-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="f107c722-4249-41d1-a53f-c61026295395" asset-score="1">
								VMware Subscription Upgrade Program
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-center">
						

						
							
						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/products/vmware-cloud-universal-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="d8a0c34a-52d6-411d-8bc9-dd6de97f2165">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Cloud Universal Program Guide" title="VMware Cloud Universal Program Guide" href="/content/dam/digitalmarketing/vmware/en/pdf/products/vmware-cloud-universal-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="d8a0c34a-52d6-411d-8bc9-dd6de97f2165">
								VMware Cloud Universal Program Guide
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-center">
						

						
							
						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_2050618522" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/solutions/vmware-cbc-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="f87d6a74-206f-4447-9d91-be18717a9540">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Commitment-Based Contracting Program Guide" title="Commitment-Based Contracting Program Guide" href="/content/dam/digitalmarketing/vmware/en/pdf/solutions/vmware-cbc-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="f87d6a74-206f-4447-9d91-be18717a9540">
								Commitment-Based Contracting Program Guide
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-center">
						

						
							
						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                        </div>
                        <div class="col-md-6 col-sm-12 mt-3 cont-columns ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/files/pdf/solutions/vmware-hpp-program-guide.pdf" target="_blank">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="HPP Program Guide" title="HPP Program Guide" href="/files/pdf/solutions/vmware-hpp-program-guide.pdf" target="_blank">
								HPP Program Guide
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-center">
						

						
							
						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_1940959550" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/products/vmware-cloud-acceleration-benefit-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="c8814a86-a384-46ed-be3a-8fa3403d33a8" asset-score="1">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Cloud Acceleration Benefits Program Guide" title="VMware Cloud Acceleration Benefits Program Guide" href="/content/dam/digitalmarketing/vmware/en/pdf/products/vmware-cloud-acceleration-benefit-program-guide.pdf" target="_blank" asset-type="application/pdf" asset-id="c8814a86-a384-46ed-be3a-8fa3403d33a8" asset-score="1">
								VMware Cloud Acceleration Benefits Program Guide
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-center">
						

						
							
						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_2050618522" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/services/consserv-pso-credits-datasheet.pdf" target="_blank" asset-type="application/pdf" asset-id="064e9fe9-b271-4cfd-a6f6-0885e083246a">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Consulting Credits" title="VMware Consulting Credits" href="/content/dam/digitalmarketing/vmware/en/pdf/company/vmware-consulting-credits-datasheet.pdf" target="_blank" asset-type="application/pdf" asset-id="9b281969-3096-449e-b959-dd84664510b5" asset-score="1">
								VMware Consulting Credits
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-center">
						

						
							
						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_426484576" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/content/dam/digitalmarketing/vmware/en/pdf/company/vmw-learning-credits-brief.pdf" target="_blank" asset-type="application/pdf" asset-id="4109c5fc-786c-4e63-afa0-e007dbadf7be" asset-score="1">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-business-dashboard-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Learning Credits" title="VMware Learning Credits" href="/content/dam/digitalmarketing/vmware/en/pdf/company/vmw-learning-credits-brief.pdf" target="_blank" asset-type="application/pdf" asset-id="4109c5fc-786c-4e63-afa0-e007dbadf7be" asset-score="1">
								VMware Learning Credits
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-center">
						

						
							
						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                        </div>
                     
					 
                     
                     
                     
                     
					 
                  
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>

    
</div>

			
			
				
				
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>

    
</div>
</div>
</div>
<div id="panel_663570535-4" aria-labelledby="663570535-4" role="tabpanel" class="cmp-tabs__tabpanel" data-cmp-hook-tabs="tabpanel" tabindex="0"><div class="tabs-layout responsivegrid">


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-item_1653901779482tabscolumn_container">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container bg-lightblue ">
	
	
	
	<div class="container pt-100 pb-100 dark-background  ">
		
		<div class="row ">
			<div class="col-md-12 ">
				<div class="container-title  text-gray " data-aos="fade-up" data-aos-delay="500">
					

					<h3 class="col-title-img text-l text-center">
						
						
						
						
							Resources
					</h3>

					
					<div class="mb-3 text-xxs body-lineheight text-center"> Need help finding more information about VMware Offerings?  These resources may be useful.</div>
				</div>

				<!--Added split view cta-->
				
				<!--ends here split view-->
			</div>
		</div>
		
		
			

			
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                     
                        <div class="col-md-6 col-sm-12 mt-3 cont-columns  ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/products/trust-center.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-cloud-secure-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-cloud-secure-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Cloud Trust Center" title="VMware Cloud Trust Center" href="/products/trust-center.html" target="_self">
								VMware Cloud Trust Center
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Visit VMware Cloud Trust Center to access up-to-date information on how VMware integrates security, privacy, compliance and resiliency into every one of our solutions to minimize your risk in the cloud.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_72032289" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/help/privacy.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-data-science-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-data-science-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="VMware Global Privacy Notice" title="VMware Global Privacy Notice" href="/help/privacy.html" target="_self">
								VMware Global Privacy Notice
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>VMware’s Privacy Notices describe how VMware may collect, use, share, and stores personal information.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-1-par-1custom_container_concard_copy_1369419289" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/download/open_source.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-endpoint-prevention-2-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-endpoint-prevention-2-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Open Source Software" title="Open Source Software" href="/download/open_source.html" target="_self">
								Open Source Software
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Find information on the open source software included with VMware Offerings.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                        </div>
                        <div class="col-md-6 col-sm-12 mt-3 cont-columns ">
                           <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_387278894" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/help/export-control.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-industries-travel-2-2clr-lghtbg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-industries-travel-2-2clr-lghtbg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Export Control Information" title="Export Control Information" href="/help/export-control.html" target="_self">
								Export Control Information
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>Find information about the export and re-export of VMware’s products, services, or technical data.</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>
<div class="card common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-column-2-par-2custom_container_concard_copy_1369419289" class="mt-3 mb-3  ">
    
    
    


<input type="hidden" id="hideDescription" value="false"/>
<input type="hidden" id="showMore" value="See More"/>
<input type="hidden" id="showMoreAnalytics"/>
<input type="hidden" id="showLess" value="See Less"/>
<input type="hidden" id="showLessAnalytics"/>
<input type="hidden" id="productEdition" value=""/>






	<div class="componentBody card-content-vertical-center" data-aos="fade-up" data-aos-delay="500">












<input type="hidden" id="hideCompMobile" value="false"/>
<div class="card-box      shadow  horizontalcard bg-white height text-gray">
	
	<div class="card no-gutter container height">

		


		<div class="item height  ">

			<div class=" picture svg-img  ">
				
				<a aria-label="card image" href="/download/open_source.html" target="_self">
					
						<picture>
							<source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-endpoint-prevention-2-2color-light-bg.svg.imgo.jpeg"/>
							
							
								<img loading="eager" src="/content/dam/digitalmarketing/vmware/en/images/gallery/icons/icon-security-endpoint-prevention-2-2color-light-bg.svg" alt="" role="presentation" class="Image full-width-img card-svg-img  "/>
							
						</picture>
					
					
				</a>
			</div>

			

			

			
			<div class="content  cta-auto">

				<div class="card-body container text-gray">

                    

					<h3 class="card-title text-s text-left">

						

						


						
							
							<a name="Termination for Convenience" title="Termination for Convenience" href="/content/dam/digitalmarketing/vmware/en/pdf/docs/vmware-termination-for-convenience.pdf" target="_blank" asset-type="application/pdf" asset-id="4575c203-29bf-485b-8e39-ac9361ccc7d7">
								Termination for Convenience
							</a>
						
						
					</h3>
					<!--adding Cloud Icon for Feature comparison card -->
					

					<!--add new text field for job/title/role -->
					

					
					
					<div class="card-description  text-left">
						

						
							<p>View information about Termination for Convenience</p>

						
						
						
						
					</div>
					
					
					

				</div>

				

				

				

				
				
				
				
				
			</div>
		</div>
	</div>
</div>
</div> 
 	<input type="hidden" id="promotionalContent" value="false"/>
 	<input type="hidden" id="promoposition" value="select"/>
    <input type="hidden" name="localeVal" value="us"/>
    
    
    	
        
    		<input type="hidden" name="isauthor" value="false"/>
       
     
</div></div>

    
</div>
</div>
                        </div>
                     
					 
                     
                     
                     
                     
					 
                  
                  
                  
                  
               </div>
            </div>
         </div>
      </section>
   </div>
</div>

</div>

    
</div>

			
			
				
				
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>

    
</div>
</div>
</div>

                                    
                                </div>
                                
                            <!--    </sly> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></div>
<div class="column-container common aem-GridColumn aem-GridColumn--default--12">

<div id="analytics-rootjcr_contentcolumn_container_638">
    








<input type="hidden" value="expandableNo" class="isExpandible"/>
<input type="hidden" value="Auto" class="itemLimit"/>

<span></span>


<section class="aem-col-container bg-darkmode ">
	
	
	
	<div class="container pt-100 pb-100 light-background  ">
		
		<div class="row ">
			<div class="col-md-12 ">
				<div class="container-title  text-white " data-aos="fade-up" data-aos-delay="500">
					

					<h2 class="col-title-img text-xl text-center">
						
						
						
						
							Looking for our Legacy Terms?
					</h2>

					
					<div class="mb-3 text-xxs body-lineheight text-center"> Find the older version of our terms by year.</div>
				</div>

				<!--Added split view cta-->
				
				<!--ends here split view-->
			</div>
		</div>
		
		
			

			<div class="row text-white">
				<div class="col-md-12">
					<div class="container-footer mt-2 mb-3 text-center" data-aos="fade-up" data-aos-delay="500">
						
						
						
						
						
						
					</div>
				</div>
			</div>
		
		
		<div>
			


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    
    
</div>

			
			
				
				<div class="row text-white">
					<div class="col-md-12">
						<div class="container-footer mt-4 mb-2 text-center" data-aos="fade-up" data-aos-delay="500">
							
							
								
								<a role="button" href="/agreements/legacy-terms.html" name="SEE LEGACY TERMS" class="btn btn btn-white-outline" aria-label="Looking for our Legacy Terms? SEE LEGACY TERMS ">SEE LEGACY TERMS<i class="fa fa-chevron-right ml-1"></i></a>
							
							
							
							
							
						</div>
					</div>
				</div>
				
			
			
			
			


			
		</div>
	</div>
</section>



 
</div></div>
<div class="text aem-GridColumn aem-GridColumn--default--12">


<div class="cmp-text   text-gray pt-100 pb-100 ">
    
    

    <div class="nested-filtered-table active">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    

                    <input type="hidden" class="ExpandLabel"/>
                    <input type="hidden" class="CollapseLabel"/>
                    <input type="hidden" class="BrightcoveAccountID" value="1534342432001-Byh3doRJx"/>
                    <div class="container text-container" data-aos="fade-up" data-aos-delay="500">
                        <div class="row">
                            <div class="col-md-12 no-padd " data-aos="fade-up" data-aos-delay="500">
                                <p>Notification of Copyright Infringement.</p>
<p>If you believe that your copyrighted work has been copied and is accessible in a way that constitutes copyright infringement you may send a notice to our copyright agent, providing the following information: (a) a description of the copyrighted work that you claim has been infringed and a description of the infringing activity; (b) thelocation of the material that you claim is infringing, such as the URL where it is posted; (c) your name, address, telephone number, and email address; (d) a statement byyou that you have a good faith belief that the disputed use of the material is not authorized by the copyright owner, its agent, or the law; (e) your statement underpenalty of perjury that the information in your notice of infringement concern is accurate, and that you are the copyright owner or are authorized to act on the copyrightowner’s behalf; and (f) your electronic or physical signature, as the copyright owner or as the person authorized to act on the copyright owner’s behalf.</p>
<p><b>Contact VMware's copyright agent as follows:</b></p>
<p>VMware, Inc.</p>
<p>Intellectual Property Counsel</p>
<p>3401 Hillview Avenue</p>
<p>Palo Alto, California 94304</p>
<p>United States of America</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


    
</div>

    
</div>
</div>



    
</div>
<div role="contentinfo">
<!--  BrightEdge Implementation Start-->
    
<!--  BrightEdge Implementation End-->

    
    <!-- hebrew language-->
    
    
    <input name="languageVal" value="en" type="hidden"/>
     
        
            <!-- SDI include (path: /content/vmware/vmware-published-sites/us/config-pages/modernize/footer/_jcr_content/root/footer.nocache.html, resourceType: vmware-modernize-cms/componentlibrary/components/content/footer) -->


<section class="footer-component footer-container ">
   <div class="personalization_div_1" style="min-height: 1px;"></div>
   <div class="personalization_div_2" style="min-height: 1px;"></div>
   <div class="personalization_div_3" style="min-height: 1px;"></div>
   <div class="personalization_div_4" style="min-height: 1px;"></div>
   <div class="container ">
      <div class="content">
         <div class="row">
            <div class="col-lg-12 col-md-12">
               <footer class="footer">				  
                  <div class="row">
					 
                     <div class="col-lg-2 col-md-12 mb-40 mt-3">
                     	
                     	<a class="footer-vmware-logo" href="/" name="nav_footer : VMware Logo">
                     		<picture class="float-lg-left">
	                           <source media="(max-width:800px)" srcset="/content/dam/digitalmarketing/vmware/en/images/company/vmware-logo-grey.svg.imgo.jpeg"/>
	                           <img width="140" height="22" loading="lazy" class="vmware-logo" src="/content/dam/digitalmarketing/vmware/en/images/company/vmware-logo-grey.svg" alt="VMware" title="VMware"/>
	                        </picture>
                     	</a>                        
                     </div>
					 
					 
                     <div class="col-lg-10 col-md-12">
                        


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="custom-container-config aem-GridColumn aem-GridColumn--default--12">

 


<input type="hidden" value="column-gap-auto" class="column-gap"/>
<input type="hidden" value="column-height-auto" class="column-height"/>
<div class="row   ">
   <div class="col-md-12 px-0">
      <section class="column-cards">
         <div class="container">
            <div class="content ">
               <div class="row container-comp-wrapper">
                  
                  
                  
                  
                     <div class="col-md-6 col-lg-3 mt-3 cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
   			<p class="mb-20 text-black text-s">
   				
                
                        Company
                
   			</p>
		
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company.html" alt="About Us" aria-label="About Us 1 of 8" name="nav_footer_company : About Us">
					
						
						
						<span>About Us </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company.html" alt="Executive Leadership" aria-label="Executive Leadership 2 of 8" name="nav_footer_company : Executive Leadership">
					
						
						
						<span>Executive Leadership </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://news.vmware.com" alt="News &amp; Stories" aria-label="News &amp; Stories 3 of 8" name="nav_footer_company : News &amp; Stories">
					
						
						
						<span>News &amp; Stories </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://investors.broadcom.com" alt="Investor Relations" aria-label="Investor Relations 4 of 8" name="nav_footer_company : Investor Relations">
					
						
						
						<span>Investor Relations </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company/customers.html" alt="Customer Stories" aria-label="Customer Stories 5 of 8" name="nav_footer_company : Customer Stories">
					
						
						
						<span>Customer Stories </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company.html" alt="Diversity, Equity &amp; Inclusion" aria-label="Diversity, Equity &amp; Inclusion 6 of 8" name="nav_footer_company : Diversity, Equity &amp; Inclusion">
					
						
						
						<span>Diversity, Equity &amp; Inclusion </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company.html" alt="Environment, Social &amp; Governance" aria-label="Environment, Social &amp; Governance 7 of 8" name="nav_footer_company : Environment, Social &amp; Governance">
					
						
						
						<span>Environment, Social &amp; Governance </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/artificial-intelligence.html" alt="AI at VMware" aria-label="AI at VMware 8 of 8" name="nav_footer_company : AI at VMware">
					
						
						
						<span>AI at VMware </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-3 mt-3 cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
		
				
			<div class="submenu-container-title header-margin"></div>
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				 
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://careers.vmware.com/careers-home/" alt="Careers" aria-label="Careers 1 of 7" name="nav_footer_company : Careers">
					
						
						
						<span>Careers </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://blogs.vmware.com/" alt="Blogs" aria-label="Blogs 2 of 7" name="nav_footer_company : Blogs">
					
						
						
						<span>Blogs </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://communities.vmware.com/" alt="Communities" aria-label="Communities 3 of 7" name="nav_footer_company : Communities">
					
						
						
						<span>Communities </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company/acquisitions.html" alt="Acquisitions" aria-label="Acquisitions 4 of 7" name="nav_footer_company : Acquisitions">
					
						
						
						<span>Acquisitions </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company/office_locations.html" alt="Office Locations" aria-label="Office Locations 5 of 7" name="nav_footer_company : Office Locations">
					
						
						
						<span>Office Locations </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/products/trust-center.html" alt="VMware Cloud Trust Center" aria-label="VMware Cloud Trust Center 6 of 7" name="nav_footer_company : VMware Cloud Trust Center">
					
						
						
						<span>VMware Cloud Trust Center </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://news.vmware.com/vmware-global-response-to-covid-19-2" alt="COVID-19 Resources" aria-label="COVID-19 Resources 7 of 7" name="nav_footer_company : COVID-19 Resources">
					
						
						
						<span>COVID-19 Resources </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-3 mt-3 cont-columns  ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
   			<p class="mb-20 text-black text-s">
   				
                
                        Support
                
   			</p>
		
		
		
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="/go/customerconnect" alt="VMware Customer Connect" aria-label="VMware Customer Connect 1 of 7" name="nav_footer_support : VMware Customer Connect">
					
						
						
						<span>VMware Customer Connect </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/support/policies.html" alt="Support Policies" aria-label="Support Policies 2 of 7" name="nav_footer_support : Support Policies">
					
						
						
						<span>Support Policies </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://docs.vmware.com" alt="Product Documentation" aria-label="Product Documentation 3 of 7" name="nav_footer_support : Product Documentation">
					
						
						
						<span>Product Documentation </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="https://www.vmware.com/resources/compatibility/search.php" alt="Compatibility Guide" aria-label="Compatibility Guide 4 of 7" name="nav_footer_support : Compatibility Guide">
					
						
						
						<span>Compatibility Guide </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/agreements.html" alt="Terms &amp; Conditions" aria-label="Terms &amp; Conditions 5 of 7" name="nav_footer_support : Terms &amp; Conditions">
					
						
						
						<span>Terms &amp; Conditions </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="/content/dam/digitalmarketing/vmware/en/pdf/company/vmw-modern-slavery-california-statement-2021.pdf" alt="California Transparency Act Statement" aria-label="California Transparency Act Statement 6 of 7" name="nav_footer_support : California Transparency Act Statement" asset-type="application/pdf" asset-id="d0cadf21-4f73-49a5-a0fe-9cc186c13ede" asset-score="1">
					
						
						
						<span>California Transparency Act Statement </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/trials-test-drives.html" alt=" Hands-on Labs &amp; Trials " aria-label=" Hands-on Labs &amp; Trials  7 of 7" name="nav_footer_support :  Hands-on Labs &amp; Trials ">
					
						
						
						<span> Hands-on Labs &amp; Trials  </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
</div>

   

   
   
   
   	
   
</div>

</div>

    
</div>
</div>
                     </div>
                     <div class="col-md-6 col-lg-3 mt-3 cont-columns ">
                        <div>


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="linksContainer aem-GridColumn aem-GridColumn--default--12">

    










<div class="submenu-container">

   		
		
		
				
			<div class="submenu-container-title header-margin"></div>
		
   
       


<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
    
    <div class="links aem-GridColumn aem-GridColumn--default--12">

    





<div class="mb-40 ">
	<div class="submenu-links-footer">
		
		
			


		
		
			
			
				
			
			
				
			
		

		
		
			</h6>
		
		
			
				
			
			<ul>
				
			
		
			
		
			
		
			
		
			
		
		<li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://twitter.com/VMware" alt="Twitter" aria-label="Twitter 1 of 5" name="nav_footer_social : Twitter">
					
						<i class="fa fa-twitter  text-indigo pr-4" aria-hidden="true"></i>
						
						<span>Twitter </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://www.youtube.com/user/vmwaretv" alt="YouTube" aria-label="YouTube 2 of 5" name="nav_footer_social : YouTube">
					
						<i class="fa fa-youtube  text-indigo pr-4" aria-hidden="true"></i>
						
						<span>YouTube </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://www.facebook.com/vmware" alt="Facebook" aria-label="Facebook 3 of 5" name="nav_footer_social : Facebook">
					
						<i class="fa fa-facebook  text-indigo pr-4" aria-hidden="true"></i>
						
						<span>Facebook </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" target="_blank" href="https://www.linkedin.com/company/vmware/mycompany/" alt="LinkedIn" aria-label="LinkedIn 4 of 5" name="nav_footer_social : LinkedIn">
					
						<i class="fa fa-linkedin  text-indigo pr-4" aria-hidden="true"></i>
						
						<span>LinkedIn </span>
					
					
				</a>
			
		</li><li>
			
			
			
				<a class=" dalmore-img-left  text-xxss text-black mb-20 d-lg-flex d-block" href="/company/contact_sales.html" alt="Contact Sales" aria-label="Contact Sales 5 of 5" name="nav_footer_company : Contact Sales">
					
						<i class="fa fa-envelope  text-indigo pr-4" aria-hidden="true"></i>
						
						<span>Contact Sales </span>
					
					
				</a>
			
		</li></ul>
	</div>
</div>
</div>

    
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
   </div>
</div>

</div>

    
</div>

                     </div>
					 
                  </div>
				   
				  
                  <div class="row">
                     <div class="col-lg-12 col-md-12 footer-links-wrapper">
                        <hr class="br-black mb-20"/>
                        <div class="footer-links mt-3">
                           <span class="mb-3">Copyright © 2005-{year} Broadcom. All Rights Reserved. The term “Broadcom” refers to Broadcom Inc. and/or its subsidiaries.</span>
						   
						   		
								<a href="/help/legal.html" class="text-xxss text-black mb-3 ml-lg-3" aria-label="Terms of Use" title="Terms of Use" name="nav_footer_bottom : Terms of Use">Terms of Use</a> 
						   
						   		
								<a href="/help/privacy/california-privacy-rights.html" class="text-xxss text-black mb-3 ml-lg-3" aria-label="Your California Privacy Rights" title="Your California Privacy Rights" name="nav_footer_bottom : Your California Privacy Rights">Your California Privacy Rights</a> 
						   
						   		
								<a href="https://www.broadcom.com/privacy" class="text-xxss text-black mb-3 ml-lg-3" aria-label="Privacy" title="Privacy" name="nav_footer_bottom : Privacy">Privacy</a> 
						   
						   		
								<a href="/help/accessibility.html" class="text-xxss text-black mb-3 ml-lg-3" aria-label="Accessibility" title="Accessibility" name="nav_footer_bottom : Accessibility">Accessibility</a> 
						   
						   		
								<a href="/help/trademarks.html" class="text-xxss text-black mb-3 ml-lg-3" aria-label="Trademarks" title="Trademarks" name="nav_footer_bottom : Trademarks">Trademarks</a> 
						   
						   		
								<a href="/topics/glossary.html" class="text-xxss text-black mb-3 ml-lg-3" aria-label="Glossary" title="Glossary" name="nav_footer_bottom : Glossary">Glossary</a> 
						   
						   		
								<a href="/help.html" class="text-xxss text-black mb-3 ml-lg-3" aria-label="Help" title="Help" name="nav_footer_bottom : Help">Help</a> 
						   
						   <span id="SiteFeedback" class="SiteFeedback"></span>
                        </div>
                     </div>
                  </div>
				  
               </footer>
            </div>
         </div>
      </div>
   </div>
</section>
        
    
    

    <button id="ot-sdk-btn" class="ot-sdk-show-settings"> Cookie Settings</button>

    

    <div class="popup-modal">
        <div class="modal-overlay" style="display: none;"></div>
        <div class="modal-container" style="display: none;">
            <div class="container">
                <div class="content">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="video-container">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        <button type="button" role="button" id="close-video-btn" aria-label="close video popup"> <span id="close-video" class="text-l"><i class="fa fa-close"></i></span></button>
        </div>
    </div>

    <input type="hidden" id="runmode"/>


     



</div>

        
    
     


     
     
	 
    
<script type="text/javascript" src="/etc.clientlibs/vmware-modernize-cms/componentlibrary/components/content/header-redesign/clientlibs.min.js" defer></script>


	 
	 



    
<script type="text/javascript" src="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-plugins.min.js" defer></script>



    
<script type="text/javascript" src="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs/clientlib-base.min.js" defer></script>



    
<link rel="stylesheet" href="/etc.clientlibs/vmware-modernize-cms/componentlibrary/components/content/footer/clientlibs.min.css" type="text/css">




    
<script type="text/javascript" src="/etc.clientlibs/vmware-modernize-cms/componentlibrary/components/content/footer/clientlibs.min.js" defer></script>



<script type="text/javascript" src="/etc.clientlibs/core/wcm/components/commons/site/clientlibs/container.min.js" defer></script>


    
<script type="text/javascript" src="/etc.clientlibs/vmware-modernize-cms/componentlibrary/clientlibs-site/vmware.min.js" defer></script>





    <div class="cloudservice sitecatalyst"></div>


    


        

    

    



  

    <input type="hidden" id="opentab" value="opens in a new tab"/>
    <input class="sr-only" id="successMsg" aria-live="assertive"/>

    <script type="text/javascript"  src="/Qh5dal/J-uthZ/5gYp/rzV4U7/UT/O97LhtQGmV/UApRcXVcJg/FR/9bS1Mwd10"></script></body>


</html>


