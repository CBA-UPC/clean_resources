if (typeof gemius_hcconn != 'undefined' && typeof gemius_hcconn.fpdata != 'undefined' && (gemius_hcconn.fpdata=='' || gemius_hcconn.fpdata[0]=='-')) {
	gemius_hcconn.fpdata = "UJeHT0tSqvUt4m7OeeoLg9c2SVRpH1PAMYE6g09mWef.T7|1707439008";
	gemius_hcconn.fpcdomain = 'wp.pl';
}
et="true">Kradł smoczki z ust niemowląt. Wpadł w ręce policji - o2</title>
      <script>
	    var wp_abtest = {};
  	  var wp_abtest_programmatic = null;
  	  var wp_abtest_error = null;</script>
      <script>
    // gemius
    var wp_pp_gemius_identifier = 'p9BL_3OK9E4vr2m5Te9oaJdRzQCUwgN8nhzSb4xjE2..P7';
    var wp_pp_gemius_service = 'o2';
    
    // dot
    var wp_dot_type = 'click';
    var appVersion = '0.0.0-subdomain.30';
    var wp_dot_addparams = {"ver":"2016q1","backendVer":"4.5.0","svid":"2816935c-0a60-43f3-819b-fd85912dd1b3","abtest-v2":"__notest","noStatid":true,"cplatform":"o2","frontendVer":"0.0.0-subdomain.30|20240208"};
    
     // wpjslib
    var WP = [];
    var wp_sn = 'o2_o2_pl_informacje';
    var rekid = '236060';
    var wp_ppg_id = '5ca222b62d6769000b55e026';
    var wp_ppg_key = 'BM6C8wwvbc7TZp5444wIhzukaA7rLIzBeWD3rXwd7YCZ-07cR1zQBkLgf5ZUcJp9B7wXB2j8W6FvqnGCAmuHJRA';
    var wp_gtm_id = 'GTM-TBF478J';
    var wp_cookie_info = true;

    //hotjar
    var wp_hj_id = '1218291';

    //facebook pixel
    var wp_fb_id = '933316406876601';
    
    // application
    var o2App = {
      version: '0.0.0-subdomain.30',
      adsFirstCallback: {},
      adsFirstData: {},
    }
    var isLogout = false;
    var wpStadcp = 0.000;
    var cview = "" || undefined;
    
    if (cview) {
      wp_dot_addparams.cview = cview;
    }
    
    var API_DOMAIN = '/';
    var API_WEATHER = '/v1/weather';
    var API_STREAM = '/v1/stream';
    var API_GATEWAY = 'https://data-api.wp.pl/graphql'
    var API_LISTING_POPULAR = '/v1/popular';
    var API_HOST_ONE_LOGIN = 'https://www.o2.pl'
    
    var wp_spa_config = {
      platform: 'desktop',
      desktop :{
        dot: {
          base: 'o2_o2_pl_informacje',
          type: wp_dot_type,
          params: wp_dot_addparams,
          bunches: {"index":"231899","quizindex":"236432","quizone":"236432","quizhistory":"236432","quizcategory":"236432","quote":"236060","short":"233975","article":"236060","gallery":"236062","category":"236064","archive":"236807","logout":"238592","logout_wp":"238595","category_premium":"239549","stream":"242369","article_premium":"239796","index_subdomain":"231899"}
        },
        gemius: {
          hit: {
            index: 'p9BL_3OK9E4vr2m5Te9oaJdRzQCUwgN8nhzSb4xjE2..P7',
            other: 'p9BL_3OK9E4vr2m5Te9oaJdRzQCUwgN8nhzSb4xjE2..P7'
          }
        }
      },
    }
  </script>
      <script>
    var screeningData = {};
    var alternativeData = {};
    
    function wnwgydkzqx(
      selector,
      slotNumber,
      placeholder,
      screeningWallpaperSelector,
      alternativeContainerSelector,
      options,
      doNotRegisterOnLayout
    ) {
      if (doNotRegisterOnLayout && window.applicationSize && window.applicationSize.type === doNotRegisterOnLayout) {
        return;
      }
      WP.push(function() {
        var el = document.querySelector(selector);
        try {
          placeholder &&
          window.WP.gaf.registerPlaceholder(slotNumber, el.parentNode, options);
          window.WP.gaf.registerSlot(slotNumber, el, {
            setNative: function(data, onViewCallback) {
              var slotData = {
                dataNative: data,
                onViewCallback: onViewCallback
              }
              window.o2App.adsFirstData[slotNumber] = slotData;
              var onDataNativeChange = window.o2App.adsFirstCallback[slotNumber];
              if (typeof onDataNativeChange === 'function') {
                onDataNativeChange(slotData);
              }
    
              if (data && data.type === 'alternativeSlot' && alternativeContainerSelector) {
                var alternativeRef = document.querySelector('.' + alternativeContainerSelector);
                if (alternativeRef) {
                  var originSlotEl = placeholder ? el.parentNode : el;
                  if (data.buildPlaceholder) {
                    window.WP.gaf.registerPlaceholder(slotNumber, alternativeRef.parentNode.parentNode, options);
                  }
                  alternativeData[slotNumber] = {
                    element: alternativeRef
                  };
                  onViewCallback({ el: alternativeRef });
                }
              }
              
              if (data && data.type === 'headline' && slotNumber === 6 && window.setPPData) {
                window.setPPData(data || {});
              }
    
              if (data && data.type === 'wallpaper' && screeningWallpaperSelector) {
                wnwgydkzqx.configureScreening(
                  screeningWallpaperSelector,
                  slotNumber,
                  onViewCallback
                );
              }
              if (data && data.type === 'teaserHide') {
                var className = ".teaser-" + slotNumber;
                var teaserRef = document.querySelector(className);
                if (teaserRef) {
                  teaserRef.style.display = 'none';
                }
              }
              if (data && data.type === 'teaserShow') {
                var className = ".teaser-" + slotNumber;
                var teaserRef = document.querySelector(className);
                if (teaserRef) {
                  teaserRef.style.display = 'flex';
                }
              }
            }
          });
        if (!window.registeredSSRSlots) {
            window.registeredSSRSlots = [];
        }
        window.registeredSSRSlots.push(slotNumber);
        } catch (e) {
          console.error(e);
        }
      });
    };
    
    wnwgydkzqx.configureScreening = function(
      screeningWallpaperSelector,
      slotNumber,
      onViewCallback
    ) {
      var screeningElement = document.querySelector('.' + screeningWallpaperSelector);
    
      if (screeningElement && screeningElement.firstChild && screeningData) {
        screeningData[slotNumber] = {
          element: screeningElement.firstChild
        };
        onViewCallback({ el: screeningElement.firstChild });
      }
    };
  </script>
      <script>window.WP.push(function() {
        window.WP.gaf.registerCommercialBreak(2,{
          setNative: function(data) {
            if (data && data.type === 'blockRouting') {
              window.CBDataNative = data
            }
          }
        });
    })</script>
      <script id="hb" src="https://www.o2.pl/ODgxODcxYCUGGjl3TANtMEVCbScTEBA3ExxtaEEnbX5FJxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8J21oRQ1tfkFXLiARVywrDR4mI0gRISgKFiprAx08LxcXP2kISmE0D1YlN0UF"></script>
      <meta name="gaf" content="bKjCgDtB" />
            <script>!function(e,f){try{f.WP=f.WP||[];f.wp_pvid=(function(){var output='';while(output.length<20){output+=Math.random().toString(16).substr(2);output=output.substr(0,20)}return output})(20);var r,s,c=['https://www,o2,pl/YXp5eWVzdjkRVxNkeQF7LFIPRyU9WHV6LxdfdQklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOggJJQYHL2o6CAklBgcvajoICSUGBy9qOnV6WCx6ShdKMDccdzIDChcha0t_KhVeDDMlR2trRgVTZ3AKMSwdWVggIQ13N0IbFTtwKg4ZL1QBNTJHaX4WWRYjNw4wPE0TBDMgKTU3BEZYZ2ZMfygCUAM7L0dofiBiJCUzHGR-FkcKOhEVNj8cUFhncBwrNx1mImpmXCooGVtYNR0QGj80QSdxJRRkN0JqCmUJCjUHGVsDOCQXODsaUEcq'.replace(/,/g, '.'),["pvid="+f.wp_pvid,(s=e.cookie.match(/(^|;)\s*PWA_adbd\s*=\s*([^;]+)/),"PWA_adbd="+(s?s.pop():"2")),location.search.substring(1),(r=e.referrer,r&&"PWAref="+encodeURIComponent(r.replace(/^https?:\/\//,"")))].filter(Boolean).join("&")].join("/?");e.write('<scr'+'ipt src="'+c+'"><\/scr'+'ipt>')}catch(_){console.error(_)}}(document,window);</script>
      <script id="wpjslib" src="https://www.o2.pl/ODgxODcxYCUGGjl3TANtMEVCbScTEBA3ExxtaEEnbX5FJxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4WmNmFlp1ZkgPPy4QFCYmSA8_LhAUJiZKCyglE1YlN0UF" async="async" noModule="noModule" crossorigin="crossorigin"></script>
      <script id="wpjslib6" src="https://www.o2.pl/ODgxODcxYCUGGjl3TANtMEVCbScTEBA3ExxtaEEnbX5FJxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBs4JxAbPCcQGzgnEBs8JxAbOCcQGzwnEBtFVG0xQUJtaxAIJTcPES1ySA8_LhAUJiZKCyglE1YlN0UF" async="async" type="module" crossorigin="crossorigin"></script>
      <script>var onResizeCallback = function(layoutType) {
      window.wp_dot_addparams.layout = layoutType;
    }
    var applicationSize = {};
    (function() {
      function onResize() {
        applicationSize.innerWidth = window.innerWidth;
        applicationSize.type = window.innerWidth <= 1280 ? 'narrow' : 'wide';
        onResizeCallback(applicationSize.type);
      }
      onResize();
      window.addEventListener('resize', onResize);
    })();</script>
      <script>
    var viewPageData = {"page":{"pageviewType":"standard","error404":"","error5XX":""},"site":{"name":"pl.o2","responsiveBreakpoint":"","version":"0.0.0-subdomain.30"},"user":{"type":"guest-pl.o2","loggedIn":"none"},"content":{"author":{"id":"6859728705321089","externalName":"none","internalName":"APOL:coverage"},"firstPublication":{"date":"2024-02-08","quarter":"2024-Q1"},"lastModification":{"date":"2024-02-08","quarter":"2024-Q1"},"category":{"Gemius":"","IAB":"IAB-v3-pg0WhF|IAB25-2"},"publicationVersion":"1","contentPartsCount":"12","lifespan":"news","linkCount":"3","interactiveElement":"video","characterCountBucket":"1","photoCount":"2","isPremium":"false","isPromoted":"false","characterCount":"1817","title":"Kradł smoczki z ust niemowląt. Wpadł w ręce policji","uniqueKey":"6993506659580896-ncr-article","ageRestriction":"none","siteCategory":"","editorialType":"news","internalSuppliers":"o2pl","externalSuppliers":"none","isDrastic":"false","insertCount":"2"}};
    var layout = '';
  
    if (false) {
      layout = 'mobile';
    } else {
      layout =
        window.applicationSize && window.applicationSize.type === 'narrow'
          ? 'desktop-narrow'
          : 'desktop-wide';
    }
    WP.push(function() {
        if (viewPageData) {
          viewPageData.event = 'pageview';
        }
        if (viewPageData && viewPageData.site) {
          viewPageData.site.responsiveBreakpoint = layout;
        }
        WP.pwp.viewPage({ ga: viewPageData || {} });
    });
  </script>
      <script>var loadScript = function () {
    (function (d, t, id) {
      if (d.getElementById(id)) {
        return;
      }
      var hookElement = document.getElementById('root');
      var scriptElement = d.createElement(t);
      scriptElement.id = id;
      scriptElement.src = 'https://www.o2.pl/cC5taW4uTCJUFhdkGw5BHBdOQwhrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBwXWEMiFk9BbFNbU3gEW1NtBVkSIlYRDC5UHQ95B0VMJ1AHCiNbBU0uXBpPPUdXHg';
      hookElement.parentNode.insertBefore(scriptElement, hookElement.nextSibling);
      }(document, 'script', 'desktop'));
    };

    var timeout = setTimeout(function () {
      window.performance && performance.mark && performance.mark('WPJStimeout');
      clearTimeout(timeout);
      loadScript();
    }, 3000);

    var loadBunchCallback = function () {
      clearTimeout(timeout);
      loadScript();
    };</script>
      <script>WP.push(function () {
    WP.gaf.loadBunch(false, loadBunchCallback, true);
  });</script>
      
    <meta name="Expires" content="0"/>
    <meta name="google-site-verification" content="gr6Oz-cFf8D3Na4KDpRzfbjORIJa6Gry8Qts-l0x1U4"/>
    <meta data-react-helmet="true" name="robots" content="max-image-preview:large"/><meta data-react-helmet="true" property="author" content="Grupa Wirtualna Polska"/><meta data-react-helmet="true" property="fb:app_id" content="515698698482164"/><meta data-react-helmet="true" property="fb:pages" content="90593452375"/><meta data-react-helmet="true" property="fb:pages" content="127034117991"/><meta data-react-helmet="true" property="og:title" content="Kradł smoczki z ust niemowląt. Wpadł w ręce policji"/><meta data-react-helmet="true" property="og:type" content="article"/><meta data-react-helmet="true" property="twitter:card" content="summary_large_image"/><meta data-react-helmet="true" property="og:url" content="https://www.o2.pl/informacje/kradl-smoczki-z-ust-niemowlat-wpadl-w-rece-policji-6993506659580896a"/><meta data-react-helmet="true" property="twitter:url" content="https://www.o2.pl/informacje/kradl-smoczki-z-ust-niemowlat-wpadl-w-rece-policji-6993506659580896a"/><meta data-react-helmet="true" property="og:image" content="https://v.wpimg.pl/MWEzYjJmYjYkGC9ZZRZvI2dAewMjT2F1MFhjSGVcf2d1AmFaekIrPikfKw86AmMwNw8pCz0dYycpVTgaI0I7ZmoeMBk6ASwuah80CC8JYm9yQjgIcgl_enVIYF9nWSlidFdhU3xaYG98T2gLeQ9_MXZNO0g3"/><meta data-react-helmet="true" property="twitter:image" content="https://v.wpimg.pl/MWEzYjJmYjYkGC9ZZRZvI2dAewMjT2F1MFhjSGVcf2d1AmFaekIrPikfKw86AmMwNw8pCz0dYycpVTgaI0I7ZmoeMBk6ASwuah80CC8JYm9yQjgIcgl_enVIYF9nWSlidFdhU3xaYG98T2gLeQ9_MXZNO0g3"/><meta data-react-helmet="true" property="og:description" content="Josh Guilder, bezdomny 23-latek, napadał na dzieci, żeby ukraść im... smoczki. Do incydentów dochodziło w Harlow, mieście położonym ok. 40 kilometrów od Londynu. Prawnik 23-latka wyjaśnił, że ten &quot;nigdy nie był odzwyczajany od smoczków&quot;."/><meta data-react-helmet="true" property="twitter:description" content="Josh Guilder, bezdomny 23-latek, napadał na dzieci, żeby ukraść im... smoczki. Do incydentów dochodziło w Harlow, mieście położonym ok. 40 kilometrów od Londynu. Prawnik 23-latka wyjaśnił, że ten &quot;nigdy nie był odzwyczajany od smoczków&quot;."/><meta data-react-helmet="true" name="description" content="Josh Guilder, bezdomny 23-latek, napadał na dzieci, żeby ukraść im... smoczki. Do incydentów dochodziło w Harlow, mieście położonym ok. 40 kilometrów od Londynu. Prawnik 23-latka wyjaśnił, że ten &quot;nigdy nie był..."/><meta data-react-helmet="true" name="article:publisher" content="https://www.facebook.com/portalo2pl"/><meta data-react-helmet="true" name="article:published_time" content="2024-02-08T15:32:37.000Z"/><meta data-react-helmet="true" name="article:modified_time" content="2024-02-08T15:45:11.000Z"/><meta data-react-helmet="true" property="og:locale" content="pl_PL"/><meta data-react-helmet="true" name="twitter:site" content="@O2__PL"/><meta data-react-helmet="true" property="og:site_name" content="o2.pl"/><meta data-react-helmet="true" name="twitter:domain" content="o2.pl"/><link data-react-helmet="true" rel="canonical" href="https://www.o2.pl/informacje/kradl-smoczki-z-ust-niemowlat-wpadl-w-rece-policji-6993506659580896a"/><script data-react-helmet="true" type="application/ld+json">{"@context":"https://schema.org","@type":"NewsArticle","url":"https://www.o2.pl/informacje/kradl-smoczki-z-ust-niemowlat-wpadl-w-rece-policji-6993506659580896a","publisher":{"@type":"Organization","name":"www.o2.pl","logo":{"@type":"ImageObject","url":"https://www.o2.pl/b2dvLnBuTVMFFDpdbQ5AR0ZMbkEkWlAdC0RhAi0SDRwUGCtMPw","width":"303","height":"77"}},"headline":"Kradł smoczki z ust niemowląt. Wpadł w ręce policji","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.o2.pl/informacje/kradl-smoczki-z-ust-niemowlat-wpadl-w-rece-policji-6993506659580896a"},"description":"Josh Guilder, bezdomny 23-latek, napadał na dzieci, żeby ukraść im... smoczki. Do incydentów dochodziło w Harlow, mieście położonym ok. 40 kilometrów od Londynu. Prawnik 23-latka wyjaśnił, że ten 'nigdy nie był odzwyczajany od smoczków'.","image":{"@type":"ImageObject","url":"https://v.wpimg.pl/MWEzYjJmYjYkGC9ZZRZvI2dAewMjT2F1MFhjSGVcf2d1AmFaekIrPikfKw86AmMwNw8pCz0dYycpVTgaI0I7ZmoeMBk6ASwuah80CC8JYm9yQjgIcgl_enVIYF9nWSlidFdhU3xaYG98T2gLeQ9_MXZNO0g3","width":"1200","height":"800"},"datePublished":"2024-02-08T15:32:37.000Z","dateModified":"2024-02-08T15:45:11.000Z","author":[{"@type":"Person","name":"APOL"}]}</script><script data-react-helmet="true" type="text/javascript">
          window.wp_dot_addparams = Object.assign(window.wp_dot_addparams, {"base":"o2_o2_pl_informacje","ctype":"article","canonical":"https://www.o2.pl/informacje/kradl-smoczki-z-ust-niemowlat-wpadl-w-rece-policji-6993506659580896a","ccategory":"informacje","ctags":"kradzież,złodziej,dzieci,świat","csystem":"ncr","cid":"6993506659580896","cpageno":1,"cpagemax":1,"cdate":"2024-02-08","cauthor":"APOL","csource":"o2pl","ciab":"IAB-v3-pg0WhF,IAB25-2","corigin":"","crepub":0,"clength":1817});
        </script><script data-react-helmet="true" type="text/javascript">WP.push(function() {
          WP.gaf.addEnv('hasVideo', 1);
        })</script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
    <meta name="logo" content="https://www.o2.pl/b2dvLnBuTVMFFDpdbQ5AR0ZMbkEkWlAdC0RhAi0SDRwUGCtMPw"/>
    <meta name="msapplication-TileColor" content="#fff"/>
    <meta name="msapplication-TileImage" content="https://www.o2.pl/f/2/mstile-144x144.png"/>
    <link rel="icon" type="image/x-icon" href="https://www.o2.pl/f/2/favicon.ico"/>
    <meta name="breakpoints" content="1281" /><meta name="content-width" content="960,1280" />
    <link rel="icon" type="image/png" href="https://www.o2.pl/f/2/favicon-192x192.png" sizes="192x192"/><link rel="icon" type="image/png" href="https://www.o2.pl/f/2/favicon-160x160.png" sizes="160x160"/><link rel="icon" type="image/png" href="https://www.o2.pl/f/2/favicon-96x96.png" sizes="96x96"/><link rel="icon" type="image/png" href="https://www.o2.pl/f/2/favicon-16x16.png" sizes="16x16"/><link rel="icon" type="image/png" href="https://www.o2.pl/f/2/favicon-32x32.png" sizes="32x32"/>
    <link rel="apple-touch-icon" sizes="57x57" href="https://www.o2.pl/f/2/apple-touch-icon-57x57.png"/><link rel="apple-touch-icon" sizes="114x114" href="https://www.o2.pl/f/2/apple-touch-icon-114x114.png"/><link rel="apple-touch-icon" sizes="72x72" href="https://www.o2.pl/f/2/apple-touch-icon-72x72.png"/><link rel="apple-touch-icon" sizes="144x144" href="https://www.o2.pl/f/2/apple-touch-icon-144x144.png"/><link rel="apple-touch-icon" sizes="60x60" href="https://www.o2.pl/f/2/apple-touch-icon-60x60.png"/><link rel="apple-touch-icon" sizes="120x120" href="https://www.o2.pl/f/2/apple-touch-icon-120x120.png"/><link rel="apple-touch-icon" sizes="76x76" href="https://www.o2.pl/f/2/apple-touch-icon-76x76.png"/><link rel="apple-touch-icon" sizes="152x152" href="https://www.o2.pl/f/2/apple-touch-icon-152x152.png"/><link rel="apple-touch-icon" sizes="180x180" href="https://www.o2.pl/f/2/apple-touch-icon-180x180.png"/>
    <link rel="preconnect" href="https://www.wp.pl"/><link rel="preconnect" href="https://v.wpimg.pl"/><link rel="preconnect" href="https://wp.hit.gemius.pl"/><link rel="preconnect" href="https://ls.hit.gemius.pl"/><link rel="preconnect" href="https://www.googletagservices.com"/><link rel="preconnect" href="https://securepubads.g.doubleclick.net"/><link rel="preconnect" href="https://www.googletagmanager.com"/><link rel="preconnect" href="https://www.google-analytics.com"/><link rel="preconnect" href="https://fonts.wpcdn.pl"/>
    <link rel="dns-prefetch" href="//adservice.google.pl"/><link rel="dns-prefetch" href="//adservice.google.com"/><link rel="dns-prefetch" href="//ad.doubleclick.net"/><link rel="dns-prefetch" href="//pagead2.googlesyndication.com"/><link rel="dns-prefetch" href="//static.criteo.net"/><link rel="dns-prefetch" href="//fonts.googleapis.com"/><link rel="dns-prefetch" href="//fonts.gstatic.com"/><link rel="dns-prefetch" href="//connect.facebook.net"/><link rel="dns-prefetch" href="//cdn.pushpushgo.com"/><link rel="dns-prefetch" href="//c.amazon-adsystem.com"/><link rel="dns-prefetch" href="//bidder.criteo.com"/><link rel="dns-prefetch" href="//adx.adform.net"/><link rel="dns-prefetch" href="//fastlane.rubiconproject.com"/><link rel="dns-prefetch" href="//i.connectad.io"/><link rel="dns-prefetch" href="//hbopenbid.pubmatic.com"/><link rel="dns-prefetch" href="//as-sec.casalemedia.com"/><link rel="dns-prefetch" href="//ib.adnxs.com"/><link rel="dns-prefetch" href="//ads.businessclick.com"/><link rel="dns-prefetch" href="//wirtualn-d.openx.net"/><link rel="dns-prefetch" href="//an.facebook.com"/><link rel="dns-prefetch" href="//a.teads.tv"/><link rel="dns-prefetch" href="//prebid-eu.creativecdn.com"/>
  
      <link rel="manifest" href="https://www.o2.pl/c3QuanNvTFIwFxddYQ1BbHNPQzERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOKj4xESk8bA4qPjERKTxsDio-MREpPGwOV01MO1RZEX4TTlxhRk0Df0VMHTsUB1w8FAgAYEVTHDwUDwcoExBHfx8SASBUHg"/>
      <style>
	    @font-face {
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.wpcdn.pl/roboto/woff2/Roboto-Regular.woff2)
            format('woff2'),
          url(https://fonts.wpcdn.pl/roboto/woff/Roboto-Regular.woff) format('woff');
      }
    
      @font-face {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(https://fonts.wpcdn.pl/roboto/woff2/Roboto-Light.woff2)
            format('woff2'),
          url(https://fonts.wpcdn.pl/roboto/woff/Roboto-Light.woff) format('woff');
      }
    
      @font-face {
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.wpcdn.pl/roboto/woff2/Roboto-Bold.woff2)
            format('woff2'),
          url(https://fonts.wpcdn.pl/roboto/woff/Roboto-Bold.woff) format('woff');
      }
    
      @font-face {
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url(https://fonts.wpcdn.pl/roboto/woff2/Roboto-Black.woff2)
            format('woff2'),
          url(https://fonts.wpcdn.pl/roboto/woff/Roboto-Black.woff) format('woff');
      }</style>
       <link rel="stylesheet" href="https://www.o2.pl/bW9uLmNzTTZYFzpeYQFACBtPbjIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMyESU9CGYqEzIRJT0IZioTMhElPQhmKhMybFZAIhtPbkIoVVB4CVt8Q35XESJbESMALxMMeQpFYw4hFw84V1svHj1YHw"/>
       <link rel="stylesheet" href="https://www.o2.pl/cC5taW4uTCJUFhdkGw5BHBdOQwhrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPBxqKz4Iayo8HGorPghrKjwcais-CGsqPGEZVhR1DldMJRpGTmcaRU1zGAcUNVAaDiJcGk9kBFoHJkYfFThEWw4qW1oCJEdXHg"/>
    
      <style>#noscript {
            display: none;
          }</style>
      <script>setTimeout(function() {
        if (document.querySelector('#root').childElementCount === 0) {
          document.querySelector('#noscript').style.display = 'inline';
        }
      }, 10000);</script>
    
      
      </head>
        <body data-xbal="false">
            <script src="https://www.o2.pl/d2lkZ2V0S1MNCSwBeUtGRk5ReFEmWDtdAg42XTFZChBASQUQbBI7bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtCW87bTM0BW0JbzttMzQFbQlvO20zNAVtdBxGR05ReB05XgFeAwwzXHlfCEUFDz1XIh4OQU4W"></script>
            <div id="fb-root"></div>
            <script>
      window.__PRELOADED_CONFIG__ = {"services":[{"name":"INFORMACJE ZE ŚWIATA","categories":[{"name":"Korea Północna","url":"https://www.o2.pl/tag/Korea-Północna/"},{"name":"Ukraina","url":"https://www.o2.pl/tag/Ukraina/"},{"name":"Turcja","url":"https://www.o2.pl/tag/Turcja/"},{"name":"Rosja","url":"https://www.o2.pl/tag/Rosja/"},{"name":"Włochy","url":"https://www.o2.pl/tag/Włochy/"},{"name":"Syria","url":"https://www.o2.pl/tag/Syria/"},{"name":"Tajwan","url":"https://www.o2.pl/tag/tajwan/"},{"name":"USA","url":"https://www.o2.pl/tag/usa/"},{"name":"Niemcy","url":"https://www.o2.pl/tag/niemcy/"},{"name":"Białoruś","url":"https://www.o2.pl/tag/bia%C5%82oru%C5%9B/"},{"name":"Wielka Brytania","url":"https://www.o2.pl/tag/wielka-brytania/"}]},{"name":"WYDARZENIA","categories":[{"name":"Niedziele handlowe","url":"https://www.o2.pl/tag/Niedziele-handlowe/"},{"name":"Koronawirus","url":"https://www.o2.pl/tag/Koronawirus/"},{"name":"Obwód kaliningradzki","url":"https://www.o2.pl/tag/obw%C3%B3d-kaliningradzki/"},{"name":"Inflacja","url":"https://www.o2.pl/tag/inflacja/"},{"name":"Chiny","url":"https://www.o2.pl/tag/Chiny/"},{"name":"Trybunał Konstytucyjny","url":"https://www.o2.pl/tag/Trybunał-Konstytucyjny/"},{"name":"Wojna w Ukrainie","url":"https://www.o2.pl/tag/wojna-w-Ukrainie/"},{"name":"Wzrost cen","url":"https://www.o2.pl/tag/wzrost-cen/"},{"name":"Wak