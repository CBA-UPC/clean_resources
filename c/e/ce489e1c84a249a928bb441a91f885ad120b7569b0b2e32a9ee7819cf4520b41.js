"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2530],{7530:function(){var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=l(),r=void 0,i=void 0,o=void 0,c={normal:e.normal||"data-normal",retina:e.retina||"data-retina",srcset:e.srcset||"data-srcset",threshold:e.threshold||0},s=document.body.classList.contains("srcset")||"srcset"in document.createElement("img"),a=window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.create(null);function r(t,e){return n[t]=n[t]||[],n[t].push(e),this}function i(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?n[t].splice(n[t].indexOf(e),1):delete n[t],this}return t({},e,{on:r,once:function(t,e){return e._once=!0,r(t,e),this},off:i,emit:function(t){for(var e=this,r=arguments.length,o=Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];var s=n[t]&&n[t].slice();return s&&s.forEach((function(n){n._once&&i(t,n),n.apply(e,o)})),this}})}({handlers:function(t){var e=t?"addEventListener":"removeEventListener";return["scroll","resize"].forEach((function(t){return window[e](t,f)})),this},check:h,update:v});return u;function l(){return window.scrollY||window.pageYOffset}function f(){n=l(),r||(window.requestAnimationFrame((function(){return h()})),r=!0)}function d(t){var e=n,r=e+o,i=function(t){return t.getBoundingClientRect().top+n}(t),s=i+t.offsetHeight,a=c.threshold/100*o;return s>=e-a&&i<=r+a}function h(){return o=window.innerHeight,i.forEach((function(t){return d(t)&&function(t){if(u.emit("src:before",t),s&&t.hasAttribute(c.srcset))t.setAttribute("srcset",t.getAttribute(c.srcset));else{var e=a>1&&t.getAttribute(c.retina);t.setAttribute("src",e||t.getAttribute(c.normal))}u.emit("src:after",t),[c.normal,c.retina,c.srcset].forEach((function(e){return t.removeAttribute(e)})),v()}(t)})),r=!1,this}function v(){return i=Array.prototype.slice.call(document.querySelectorAll("["+c.normal+"]")),this}};let n;function r(){n.update().check().handlers(!0)}n=e({threshold:100}),r(),document.addEventListener("lazy_images:update",r)}},function(t){var e;e=7530,t(t.s=e)}]);
//# sourceMappingURL=lazy-8356a5b4c1c5b7db4bfc.js.map_gemius_identifier = '1vBLAK_PUFWdbCpo7a3nFaR.7zduKKciRKhJgm8Cw3T..7';
     var pp_gemius_hit_identifier = '1vBLAK_PUFWdbCpo7a3nFaR.7zduKKciRKhJgm8Cw3T..7';

     function gemius_pending(i) {window[i] = window[i] || function() {var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};
     gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_ntsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':'');
         gt.setAttribute('async','async'); gt.setAttribute('defer','defer'); gt.src=l+'://onet.hit.gemius.pl/xgemius.js'; s.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');
    /* ]]> */</script>

        











<script>

  adsNoBanner = false;


  dlApi={
    'async': 1,
    'lazy': 1,
    
    'lazyPercentage': 100,
    'sgn_cookie': 1,
    'cookieInfo': 0,
    'autoslot': 1,
    'keywords': ["turystyka","rozrywka"],
    'target': 'RASP_FAKT/ROZRYWKA',
    'DV': 'RASP_FAKT/ROZRYWKA/TURYSTYKA',
    'no_gemius': 1,
    'kropka' : {"DX":"","PU":""},
    'keyvalues': {
        'ci':'node_fakt.hobby.turystyka',
        'structure': 'lista',
        'layout': '',
        'isArticleClosed': false,
        
    },
    cmd : [],
  };

  
  

  

  

  

  

  dataLayer.push({ ucs_variant: 'fakt_4_1_5' });
  dataLayer.push({ acc_variant: 'PROD_4_1_5' });

  
    
        dlApi.keywords.push('Aureus_ON');
    
        dlApi.keywords.push('screening_general');
    
        dlApi.keywords.push('new_fakt');
    
        dlApi.keywords.push('editorialBookmarkletVariant-fakt_3_3_2');
    
    
    
  

  
    window.fbAppId = '708610235946140';
  

  
  
    
    dlApi.cmd.push(function(dlApi) {
        dlApi.registerTemplate({
            tplCode: '1746213/Teaser-Standard',
            renderAd: function(Ad, dlApi, window) {
                if (Ad.div.indexOf('flat-nin') === -1) {
                    return;
                }

                var el = document.getElementById(Ad.div);
                var title = el.querySelector('[data-teaser-title]'),
                    link = el.querySelector('[data-teaser-url]'),
                    img = el.querySelector('[data-teaser-image]');

                link.href = Ad.meta.adclick + Ad.fields.url;
                title.innerText = Ad.fields.title;

                img.src = Ad.fields.image;
                img.alt = Ad.fields.title;
                img.title = Ad.fields.title;

                if (Ad.fields.adInfo) {
                    var partner = document.createElement('span');
                    partner.className = 'partner-label';
                    if (Ad.fields.partner_logo) {
                        var partnerLogo = document.createElement('img');
                        partnerLogo.className = 'partner-label-img';
                        partnerLogo.src = Ad.fields.partner_logo;
                        partner.append(partnerLogo);
                    }
                    var partnerLabel = document.createElement('span');
                    partnerLabel.className = 'partner-label-text';
                    partnerLabel.innerText = Ad.fields.adInfo;
                    partner.append(partnerLabel);
                    title.append(partner);
                }
            }
        });
    });
  
  
  

  
    const paidData = {
        isLoggedIn: false,
        isPaying: false,
        terms: [],
        resources: [],
        onetPremiumExpireDate: null
    };

    function readCookie(name) {
        // 
        const cookie = document.cookie.split('; ').find(function(row) {
            return row.startsWith(name + '=');
        });
        if (cookie) {
            return decodeURIComponent(cookie.split('=')[1]);
        }

        return undefined;
    }

    try {
        var cookie = readCookie('user_data');
        if (cookie) {
            var userData = JSON.parse(cookie);
            if (userData) {
                paidData.isLoggedIn = true;
                paidData.isPaying = userData.isPaying;
                paidData.terms = userData.termIds;
                paidData.resources = userData.resourceIds;
                paidData.onetPremiumExpireDate = userData.onetPremiumExpireDate;
            }
        }
    } catch(e) {
        console.error(e);
    }

    
    
    dlApi.keyvalues = dlApi.keyvalues || {};
    dlApi.keyvalues.isLoggedIn = paidData.isLoggedIn;
    dlApi.keyvalues.isPaying = paidData.isPaying;
    dlApi.keyvalues.terms = paidData.terms;
    dlApi.keyvalues.resources = paidData.resources;

  
</script>

        <script id="adsinit" data-original="https://sgqcvfjvr.onet.pl/YnVpbGQvezlza2x0MzczfWRsQXBpL2RsLmxpYntOTWFzXzM3M30ubWluLmpz">/* <![CDATA[ */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t){e.exports={check:function(){try{return window.self!==window.top}catch(e){return!0}}}},function(e,t){e.exports=function(e,t){var n=(t=t||document).createElement("style");return n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.innerHTML=e,t.getElementsByTagName("head")[0].appendChild(n),n}},function(e,t){var n={},r=["onet_ad_network"],i=function(e,t){return t?e:decodeURIComponent(e||"")||null};e.exports={get:function(e,t){if(t=t||!1,function(e){return-1!==r.indexOf(e)&&void 0!==n[e]}(e))return i(n[e],t);for(var o=e+"=",a=document.cookie.split(";"),c=0;c<a.length;c++){for(var s=a[c];" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(o)){var l=s.substring(o.length,s.length);return l=i(l,t),n[e]=l,l}}return n[e]=null,null}}},function(e,t){var n="https://sgqcvfjvr.onet.pl/",r=/^(?:\w+:)?\/\//;n="https://"+(r.test(n)?n.replace(r,""):"lib.onet.pl/s.csr/"),e.exports={proto:"https://",base:n}},function(e,t,n){var r=n(5),i=n(6),o=n(1),a=n(19),c="whitelistPremium",s="Reklamy nie są takie złe... To dzięki nim masz darmowy dostęp do naszych najlepszych treści. Prosimy, odblokuj wyświetlanie reklam w naszym serwisie.".split(/\s+/);s.index=0;var l=function(e,t){if(!t.document.referrer||t.document.referrer!=t.location.href&&/^\w+:\/\//i.test(t.document.referrer)){var n=e.baseUrl.replace(/^((?:\w+:)?\/\/[^\/?&#]+).*/,"$1"),r=t.document.createElement("iframe");v(t,"message",(function(r){(r.origin||r.originalEvent.origin)==n&&"noadp"==r.data&&(g(e,"Adblock_whitelist","refresh"),t.location=t.location.href)})),r.width=0,r.height=0,r.frameborder=0,t.document.body.appendChild(r),r.src=[e.baseUrl,"MDI2NjA0MS9idWlsZC9kbEFwaS9kbC53aGwubWlu",".","html","?","v=",parseInt(Date.now()/1e7)].join("")}else h()},d=function(e){o("."+c+",."+c+" *{text-decoration:none !important}");!function t(){for(var n=(r=document.querySelectorAll("."+c+":not([data-"+c+"])")).length-1;n>=0;--n)f(e,r[n]).setAttribute("data-"+c,1);n=0;for(var r=document.querySelectorAll(".whitelistContent");n<r.length;++n)u(e,r[n]);setTimeout(t,5e3)}()},u=function(e,t){t.parentNode&&t.parentNode.removeChild(t)},f=function e(t,n){if(n.hasAttribute("data-"+c))return n;var r=n.nodeName.toLowerCase(),o=n.getAttribute("data-run-module");if(["img","canvas","svg","math","iframe","video","object","embed","audio"].indexOf(r)>=0||"embeddedapp/main.onettvplayer"==o||"local/main.player"==o||"pulsembed/pulsembed.init"==o&&n.innerHTML.indexOf("//onet.tv/")>=0||"embeddedapp/main.app"==o&&(""+n.getAttribute("data-params")).indexOf("//onet.tv/")>=0||/^mvp:/.test(n.id)){for(var a=t.document.createElement("div"),l=i(n),d=0;d<l.length;++d){var u=l[d];a.style[u]=l[u]}if(a.style.display="inline-block",["img","canvas","svg","math"].indexOf(r)>=0)a.style.background="#e2e3e7 url(//mastt.ocdn.eu/MDA_/74f6b5ce7ae8d0bdfce96970fc71bd47.jpg) no-repeat center",a.style.backgroundSize="contain";else{a.style.background="#e2e3e7 url(//mastt.ocdn.eu/MDA_/42f492f4c603c2817813a90dc951904c.jpg) no-repeat center";var f=n.getAttribute("data-height-hint");f&&(a.style.paddingBottom=f)}return n.parentNode.replaceChild(a,n),a}if((a=n.cloneNode(!0)).href){a.removeAttribute("href"),a.onclick=function(){};d=0;for(var p=["addEventListener","attachEvent"];d<p.length;++d){var h=p[d];a[h]&&(a[h]=function(){})}}if(a.attributes){d=0;for(var m=a.attributes;d<m.length;++d)/^data-/i.test(m[d].name)&&a.removeAttribute(m[d].name)}n.parentNode.replaceChild(a,n);for(var v=(n=a).firstChild;v;){switch(v.nodeType){case 1:v=e(t,v);break;case 3:if(/^\s*$/.test(v.nodeValue))break;var g="",b=0,y=i(v.parentNode).color||"#000";do{var w=s[s.index];g+='<span style="display:inline;background:'+y+";color:"+y+'">'+w+"</span> ",b+=w.length+1,s.index=++s.index%s.length}while(b<v.nodeValue.length);(a=t.document.createElement("span")).style.display="inline",a.style.opacity=.3,a.innerHTML=g,v.parentNode.replaceChild(a,v),v=a}v=v.nextSibling}return n},p=function(){return document.querySelectorAll('[href^="abp:"]:not(.whitelistLink)')},h=function(){for(var e=0,t=p();e<t.length;++e){var n=t[e];n.href="http://pomoc.onet.pl/46,4214,faq_serwis.html",n.target="_blank"}},m=function(e,t){e.time.TWHL=t||"default",g(e,"Adblock_info","show")},v=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},g=function(e,t,n){b(e,(function(e){e.isAdblockDetected((function(){var r={event:"ga.send",ga:{hitType:"event",eventCategory:t,eventAction:n,eventLabel:e.time.TWHL,eventValue:void 0,nonInteraction:!0,dimension1:"1",dimension2:"1",dimension99:"0",segRand:e.seg_rand,segAb:a(e),adp:"1",whitelist:"1",whl:"0"}};(window.dataLayer=window.dataLayer||[]).push(r)})),e.on("gaReady",(function(e,r){r.set("dimension1","1"),r.set("dimension2","1"),r.set("dimension99","0"),r.send("event",t,n,this.time.TWHL,{nonInteraction:!0})}))}))},b=function(e,t){(e.cmd=(window.onetAds||window.dlApi).cmd||[]).push(t)};e.exports={onWhitelist:function(e,t,n,r){b(e,(function(e){e.fire("whitelist")})),m(e,n),d(t),e.adsNoBanner=!0,r||l(e,t)},transformContent:d,transformWhitelistLinks:function(e){var t=e.navigator.userAgent.toLowerCase();if(t.indexOf("msie")>=0||t.indexOf("trident")>=0)h();else for(var n,r=p(),i=document.querySelectorAll(".whitelistLink"),o=0,a=Math.min(r.length,i.length);o<a;++o){var c=r[o],s=i[o];for(s.removeAttribute("class"),n=0;n<c.attributes.length;++n){var l=c.attributes[n];s.setAttribute(l.name,l.value)}for(n=0;n<c.childNodes.length;++n)s.appendChild(c.childNodes[n]);c.parentNode.replaceChild(s,c)}},getWhitelistLink:function(e){var t=r(),n="abp:subscribe?location=http%3A%2F%2Flib.onet.pl%2Fs.csr%2Fwhitelist%2F"+encodeURIComponent(t)+".txt";return e&&(n+="%3Ftitle%3D"+encodeURIComponent(e)),n+="&title="+encodeURIComponent(e||t)},isDetectionDisabled:function(e){return e.inframe||1!=e.checkAdBlock},callAsync:b,appendWhitelistChecker:l,reportAdblock:m}},function(e,t){var n={pl:["com","net","org","aid","agro","atm","auto","biz","edu","gmina","gsm","info","mail","miasta","media","mil","nieruchomosci","nom","pc","powiat","priv","realestate","rel","shop","sklep","sos","szkola","targi","tm","tourism","travel","turystyka"],hu:["co","info","org","priv","sport","tm","2000","agrar","bolt","city","film","forum","games","hotel","ingatlan","jogasz","konyvelo","lakas","media","news","reklam","shop","suli","tozsde","utazas","video"],rs:["ac","co","edu","in","org"],gh:["com","edu","org"],ug:["co","or","ac","sc","go","ne","com","org"],ng:["com","edu","i","mobi","name","net","org","sch"]};e.exports=function(e){var t=(e=arguments.length?e.toLowerCase():window.location.hostname).split(".");if(t.length<3)return e;if(4==t.length){for(var r=0,i=!0;r<t.length;++r){var o=parseInt(t[r],10);if(isNaN(o)||""+o!=t[r]||o<0||o>255){i=!1;break}}if(i)return e}var a=t[t.length-1];return a in n&&n[a].indexOf(t[t.length-2])>=0?t.slice(-3).join("."):t.slice(-2).join(".")}},function(e,t){if(window.getComputedStyle)var n=function(e){return window.getComputedStyle(e)};else if(window.document.documentElement.currentStyle)n=function(e){return e.currentStyle};else n=function(){return{length:0}};e.exports=n},function(e,t){e.exports={get:function(){return window.onetAds||window.dlApi}}},function(e,t,n){var r=n(9),i=n(10),o=n(0),a=function(){"use strict";function e(){r(this,e),this.entryTypes=["first-input","largest-contentful-paint","paint","layout-shift","event"],this.stats=[],this.preservedStats=[],this._observer=null,this.collectPerf=!0,this.config_seg_rand=parseInt("44"),this.processStats=this.processStats.bind(this)}return i(e,[{key:"init",value:function(){if(!o.check())try{this._observer=new window.PerformanceObserver(this.processStats),this._observer.observe({entryTypes:this.entryTypes})}catch(e){return}}},{key:"processStats",value:function(e){var t=this;e.getEntries().forEach((function(e){"paint"===e.entryType&&"first-contentful-paint"!==e.name||(t.stats.push(e),t.collectPerf&&t.preservedStats.push(e))}))}},{key:"hasObserver",value:function(){return null!==this._observer}},{key:"getStats",value:function(){var e=this.stats.slice();return this.stats=[],e}},{key:"getPreservedStats",value:function(){return this.preservedStats}},{key:"calculateCLS",value:function(e){var t=this.filterStats(e,"layout-shift").filter((function(e){return!e.hadRecentInput}));return 0===t.length?0:t.map((function(e){return e.value})).reduce((function(e,t){return e+t}))}},{key:"calculateFID",value:function(e){var t=this.filterStats(e,"first-input");return 0===t.length?null:t.map((function(e){return e.processingStart-e.startTime})).reduce(this.getMax)}},{key:"calculateFCP",value:function(e){var t=this.filterStats(e,"paint");return 0===t.length?null:t.map((function(e){return e.startTime})).reduce(this.getMax)}},{key:"calculateLCP",value:function(e){var t=this.filterStats(e,"largest-contentful-paint");return 0===t.length?null:t.map((function(e){return e.renderTime||e.loadTime})).reduce(this.getMax)}},{key:"calculateINP",value:function(e){var t=this.filterStats(e,"first-input");return 0===t.length?null:t.concat(this.getEventsStats(e)).filter((function(e){return e.interactionId>0})).map((function(e){return e.duration})).reduce(this.getMax)}},{key:"getEventsStats",value:function(e){var t=this.filterStats(e,"event");return 0===t.length?[]:(t.length<=10||(t.sort((function(e,t){return t.duration-e.duration})),t.splice(10)),t)}},{key:"getMax",value:function(e,t){return e>t?e:t}},{key:"filterStats",value:function(e,t){return e.filter((function(e){return e.entryType===t}))}},{key:"destroy",value:function(){var e=this.getStats();return this.hasObserver()&&(this._observer.disconnect(),this._observer=null),e}},{key:"destroyPreserved",value:function(){var e=this.getPreservedStats();return this.collectPerf=!1,this.preservedStats=[],e}}]),e}();e.exports=new a},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){(function(e,t){n(14);var r=n(15).prepareDisabledModules;!function(n){var i,o=+new Date,a=function(e,t){return Object.hasOwnProperty.call(t,e)},c=function(t){try{var n=(document.cookie||"").split(/;\s*/).reduce((function(e,t,n,r,i){return(n=t.split("=")).length>1?(r=n[0],i=n.slice(1).join("=")):(r="",i=n[0]),e[decodeURIComponent(r)]=decodeURIComponent(i),e}),{}),r=e.onetAds||e.dlApi||{},i="".concat(n.onet_ad_network||r.tid||1746213).replace(/^EA-/,"");navigator.sendBeacon("https://csr.onet.pl/".concat(i,"/metric/collector"),JSON.stringify({context:{ip:r.pgid,iv:r.iv,dv:r.dv,du:void 0!==r.du?unescape(r.du):window.location.href,dr:void 0!==r.dr?unescape(r.dr):void 0,site:r.site,area:r.area,iver:r.version,seg_ab:r.seg_ab},resources:[{metric:t}]}))}catch(e){}},s=function(){if(!i&&!a("processAsync",e.onetAds||e.dlApi||{})){i=!0;var t=Math.floor((+new Date-o)/1e4);c("fatal_error.".concat(0===t?"":t,"0_").concat(t+1,"0"))}};if(t.env.MINIT&&n.bfCache||window.addEventListener("unload",s),window.addEventListener("pagehide",s),!a("dlApiDefine",e)){var l={},d={},u={},f={},p={},h={artemis:1,aureus:1,clickmap:1,cmp:1,pixel:1},m={},v="[dlApi] ".concat("dlApiDefine"," "),g=!1;n.bootVersion="20240208_1527";try{n.disableModule=r({dlApi:n,modulesConfig:"{\"4178463\":{\"clickmap\":true,\"sites_config\":{\"RASP_FAKT\":{\"aureus\":false,\"clickmap\":false}}},\"test_tid\":{\"clickmap\":false,\"sites_config\":{\"fakt\":{\"aureus\":false}}}}"}),Object.keys(n.disableModule||{}).forEach((function(e){l[e]=n.disableModule[e]}))}catch(e){}e.dlApiRequire=function(e){return a(e,d)?a(e,u)&&(g=!0):(g=!0,console.error(v+e,new Error("Cannot find module"))),d[e]},e.dlApiRequire.isError=function(e){return void 0===e?g:!a(e,d)||a(e,u)},e.dlApiRequire.error=e.dlApiRequire.isError;var b=function(e){var t=e.split("/");return t.length>1&&h[t[0]]&&a(t[0],d)&&a(t[0],u)},y=function(t,n){var r=[t];do{var i=r.shift();if(void 0!==i&&!a(i,d)){var o=m[i],c={exports:{init:function(){}}};if(void 0!==n)u[i]=!0,n=void 0;else{g=!1;try{o&&o.c&&o.c({module:c,exports:c.exports,_require:e.dlApiRequire,error:e.dlApiRequire.isError})}catch(e){console.error(v+i,e)}}o&&o.t||(d[i]=c.exports),delete m[i]}Object.keys(m).forEach((function(e){for(var t=m[e],n=0;n<t.d.length;++n)if(!a(t.d[n],d)&&!b(t.d[n]))return;r.indexOf(e)<0&&r.push(e)}))}while(r.length)},w=function(){var e=document.currentScript;return e&&!e.async&&!e.hasAttribute("async")&&!e.defer&&!e.hasAttribute("defer")&&"loading"===document.readyState};e.dlApiDefine=function(t,r,i){var o=!1;if(t!==""+t&&(t="_".concat(Math.random(),"_").concat(+new Date),o=!0),!a(t,d)){var s=[];Array.isArray(r)?r.forEach((function(e){e===e+""?s.push(e):console.error(v+t,new Error("Skipped non-string module dependency definition"))})):void 0!==r&&console.error(v+t,new Error("Module dependency definition should be an array of strings")),m[t]={d:s,c:i,t:o},s.forEach((function(t){if(!a(t,d))if(l[t])y(t,!0);else if(a(t,p)){if(!f[t]){f[t]=1;var r=document.createElement("script");if(r.src=p[t],(!n.injected||n.injectedSync)&&e.dlApiDefine.documentWriteWasSuccessful&&w())return void document.write(r.outerHTML);r.async=!0,r.onerror=function(e){c("define_src.load_error.".concat(t)),y(t,e)},document.head.appendChild(r)}}else(h[t]||b(t))&&(y(t,!0),c("define_src.unknown.".concat(t)))})),y()}},e.dlApiDefine.mergeSources=function(e){Object.keys(e).forEach((function(t){p[t]!==e[t]&&(p[t]=e[t])}))},e.dlApiExec=e.dlApiDefine.bind(null,null),w()&&document.write(["<script>dlApiDefine.documentWriteWasSuccessful=1<","/script>"].join(""))}try{var k={},x={};try{k=JSON.parse("{\"artemis\":\"https://sgqcvfjvr.onet.pl/simetra/artemis/0.6.2/artemis.min.js?1f79b58f7b6dd00e35ae1c6cd88a09c2\",\"aureus\":\"https://sgqcvfjvr.onet.pl/build/dlApi/dl.aureus.min.js?4&077ac16f633bc13fc61ba37e0e5dadf0\",\"clickmap\":\"https://sgqcvfjvr.onet.pl/simetra/clickmap/5.1.0/clickmap.min.js?d11d55f7ee49bd223b694aa45e565e1b\",\"cmp\":\"https://sgqcvfjvr.onet.pl/build/dlApi/dl.cmp.min.js?4&4986fc16ee0ec0c30d2da92aac5a610a\",\"pixel\":\"https://lib.onet.pl/static/pixel/1.6.12/pixel-module.js?a1c0105d7592675f7f0e669530932881\"}")}catch(e){}try{x=JSON.parse("{\"artemis\":\"https://sgqcvfjvr.onet.pl/simetra/artemis/0.6.2/artemis.min.js\",\"aureus\":\"https://sgqcvfjvr.onet.pl/build/dlApi/dl.aureus.min.js?4\",\"clickmap\":\"https://sgqcvfjvr.onet.pl/simetra/clickmap/5.1.0/clickmap.min.js\",\"cmp\":\"https://sgqcvfjvr.onet.pl/build/dlApi/dl.cmp.min.js?4\",\"pixel\":\"https://lib.onet.pl/static/pixel/1.6.12/pixel-module.js\"}")}catch(e){}e.dlApiDefine.mergeSources(k),Object.keys(x).forEach((function(e){a(e,k)?delete x[e]:(x[e]="".concat(x[e]).concat(x[e].indexOf("?")<0?"?":"&").concat(n.bootVersion),c("define_src.fallback.".concat(e)))})),e.dlApiDefine.mergeSources(x)}catch(e){}}(e.onetAds||e.dlApi||{})}).call(this,n(12),n(13))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,l=[],d=!1,u=-1;function f(){d&&s&&(d=!1,s.length?l=s.concat(l):u=-1,l.length&&p())}function p(){if(!d){var e=c(f);d=!0;for(var t=l.length;t;){for(s=l,l=[];++u<t;)s&&s[u].run();u=-1,t=l.length}s=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||d||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){!function(e){var t=e.getElementsByTagName("script");"currentScript"in e||Object.defineProperty(e,"currentScript",{get:function(){try{throw new Error}catch(r){var e,n=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(e in t)if(t[e].src==n||"interactive"==t[e].readyState)return t[e];return null}}})}(document)},function(e,t,n){var r=n(16),i=function(e){var t={};return Object.keys(e).forEach((function(n){var r=e[n];!1!==r&&"false"!==r?!0!==r&&"true"!==r||(t[n]=!1):t[n]=!0})),t};e.exports={prepareDisabledModules:function(e){var t=e.dlApi,n=e.modulesConfig;try{n=JSON.parse(n)}catch(e){n={}}var o=n[function(e){var t=e&&e.tid;return t?(t+"").replace("EA-",""):void 0}(t)]||{},a=i(o),c=function(e,t){var n=function(e){var t=e.target||e.dv||e.DV||"";return e.site||t.split("/",1)[0]}(t),r=(e.sites_config||{})[n];return r?i(r):{}}(o,t),s=r({},a,c,t.disableModule||{});return"0"!==t.clickmap&&0!==t.clickmap||(s.clickmap=!0),s}}},function(e,t){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(1),i=n(2),o=n(3),a=n(18),c=n(4),s=n(6),l=n(20),d=n(5),u=n(21),f=n(23),p=n(7),h=function(e,t,n){if(!t.targeting){var r,i=e.location.search+e.location.hash,o=/[?&#](?:test_(site|area|kwrd))=([^?&#]+)/g;for(t.targeting={};r=o.exec(i);)t.targeting[r[1]]=r[2]}var a=p.get(),c=(a.target||"").split("/"),s=(a.keywords||[]).join("+");t.targeting.site&&(c[0]=t.targeting.site),t.targeting.area&&(c[1]=t.targeting.area),a.whitelist&&(s+=(s?"+":"")+"whitelist"),t.targeting.kwrd&&(s+=(s?"+":"")+t.targeting.kwrd);try{return new RegExp(n,"i").test(c.join("/")+"/kwrd="+s)}catch(e){return!1}},m=function(e,t,n){if(!t.whitelisted&&(t.whitelisted=!0,!(l(e).width<550||k(e,t)))){var i=p.get(),o=T(e,t);c.onWhitelist(i,e,function(e){var t=p.get();e=e||{};var n=document.createElement("link");n.href="//ocdn.eu/files/mastt/ZmE7MDA_/462db16f872216014458184a85bd38e3.css",n.type="text/css",n.rel="stylesheet",n.onload=function(){setTimeout((function(){var e=s(document.querySelector(".contentInfo .ok")).width;void 0!==e&&(e=parseFloat(e)/2+6,r(".contentInfo .ok.itt{margin-left:-"+e+"px;visibility:visible}.contentInfo .ok.itt a{visibility: visible !important}.contentInfo .ok.itt:hover{margin-left:-"+(e+10)+"px}"))}),700)},document.getElementsByTagName("head")[0].appendChild(n);var i='<div class="headerBar"'+(e.bgColor?' style="background-color:'+e.bgColor+'"':"")+'></div><div class="statementBox"><div class="item"><p class="headline">'+(e.title||"Reklamy<br /> nie są takie złe...")+'</p><p class="text">'+(e.text||"To dzięki nim masz <strong>darmowy</strong> dostęp<br /> do&nbsp;naszych <strong>najlepszych treści</strong>.<br /> Prosimy, <strong>odblokuj wyświetlanie reklam</strong><br /> w&nbsp;naszym serwisie.")+'</p><div class="ok itt"><a class="ok-click" href="'+c.getWhitelistLink()+'">'+(e.clickText||"<strong>OK!</strong>")+'</a></div><div class="info">Kliknij <a href="'+c.getWhitelistLink()+'" class="button">'+(e.clickText||"<strong>OK!</strong>")+'</a> a później odśwież stronę.</div><p class="instructions">Nie działa? Skorzystaj z <a target="_blank" href="'+(e.clickInstruction||"http://pomoc.onet.pl/46,4214,faq_serwis.html")+'">instrukcji</a>.</p></div></div>',o=document.createElement("div");o.className="contentInfo",o.innerHTML=i;var a=document.body;t.whitelistId&&(r(".contentInfo{position:static}.contentInfo .statementBox{background:transparent}.contentInfo .item{margin-top:0}"),(a=document.getElementById(t.whitelistId)).innerHTML=""),a.appendChild(o)}(o.fields),n);e.navigator.userAgent.toLowerCase();c.transformWhitelistLinks(e),c.callAsync(i,(function(e){e.fire("flat-whitelist"," ","",[],{},{})}))}},v=function(e,t,n){if(!t.onDetectedFired&&(t.onDetectedFired=!0,!S())){u.sendBlockedToFrames();var r=T(e,t);if(r){var i=p.get();if(!r.src)return c.callAsync(i,(function(r){r.on("fetchAdsError",(function(r,i,o){o<1e3&&m(e,t,n)})),r.on("fetchTplError",(function(r,i,o,a){a&&"flat-whitelist"==a.slot&&m(e,t,n)})),r.on("fetchOnReady",(function(){this.slot2slot["flat-whitelist"]||m(e,t,n)}))})),void(i.isError&&i.isError((function(r){r&&m(e,t,n)})));var o=function(){var i=p.get();c.callAsync(i,(function(e){e.unblockSlots=r.slots||["top","left"],e.on("beforeAdsFetch",(function(){for(var e=[],t=0;t<this.toFetch.length;++t){var n=this.toFetch[t];this.unblockSlots.indexOf(n.slot)<0&&e.push(n)}this.toFetch=e}))})),document.getElementsByTagName("head")[0].appendChild(_(document.createElement("script"),i.baseUrl+r.src,(function(r){r&&m(e,t,n)})))};i.isError?i.isError((function(r){r?m(e,t,n):o()})):o()}}},g=function(e,t){if(!e||!e.length)return!1;if(-1!=t.indexOf(e))return!0;for(var n in t)if(t.hasOwnProperty(n)){var r="."+t[n],i=e.lastIndexOf(r);if(i>=0&&i==e.length-r.length)return!0}return!1},b=function(){var e=i.get("onet_ad_whl");return e&&(e=parseInt(e,10),!isNaN(e))?e:0},y=function(e){var t=e.document.referrer;return!(!t||!t.length)&&f(t).hostname},w=function(e){var t=e.location.search;return/[?&]utm_source=(fb|onetsg_fb_viasg)([&#]|$)/.test(t)},k=function(e,t){var n=t.noWhitelistConfig;return!(!n||!n.referrers)&&(function(e,t){var n=y(e);return g(n,t)||w(e)}(e,n.referrers)&&function(e,t){if(w(e)&&g(y(e),["facebook.com"]))return!0;var n=b(),r="onet_ad_whl="+(n+1)+"; path=/",i=d(),o=t[i]||t.default||3,a=new Date;return a.setTime(a.getTime()+2592e6),r+="; expires="+a.toUTCString(),i&&(r+="; domain=."+i),!(n>=o)&&(e.document.cookie=r,!0)}(e,n.capping))},x=function(e,t){C(),a.detect(e,(function(n){if(n)v(e,t);else if(t.postdetected)v(e,t,!0);else if(A(e)){t.notDetected=!0;var r=document.createElement("script");r.src="//onet.hit.gemius.pl/xgemius.js",document.getElementsByTagName("head")[0].appendChild(r)}c.callAsync(p.get(),(function(e){e.fire("detectAdblock",n)}))}))},A=function(e){try{if("WebSocket"!==e.WebSocket.name||e.Object.getOwnPropertyDescriptor(e.Element.prototype,"shadowRoot").get.toString().indexOf("[native code]")<0||0===e.RTCPeerConnection.name.indexOf("bound")||0===e.webkitRTCPeerConnection.name.indexOf("bound"))return!0}catch(e){}return!1},E=function(e,t,n){return function(r){if(r){if(void 0===t.blockedResources)t.blockedResources=[n];else{if(!(t.blockedResources.indexOf(n)<0))return;t.blockedResources.push(n)}2==t.blockedResources.length&&(t.postdetected=!0,t.notDetected&&v(e,t,!0),c.callAsync(p.get(),(function(e){e.fire("adblockPostdetected")})))}}},_=function(e,t,n){arguments.length<3&&(n=arguments[arguments.length-1]);var r=!1,i=function(e){r||(r=!0,n(e))},o=function(){i(!1)},a=function(){i(!0)};return e.addEventListener?(e.addEventListener("load",o,!1),e.addEventListener("error",a,!1)):e.attachEvent&&(e.attachEvent("onload",o),e.attachEvent("onerror",a)),setTimeout(o,500),arguments.length>2&&(e.src=t),e},S=function(){var e=p.get();return e.adsNoBanner||!e.whitelistInjected},T=function(e,t){if(!t.hasOwnProperty("currentConfig")){t.currentConfig=null;var n=t.whitelistConfig;if(n)for(var r=0;r<n.length;++r){var i=n[r];if(h(e,t,i.target)){t.currentConfig=i;break}}}return t.currentConfig},C=function(){for(var e=0,t=c.getWhitelistLink();e<2;++e){var n=document.createElement("a");n.className="whitelistLink",n.name="whitelistLink_"+e,n.ariaLabel="Adblock whitelist link (".concat(e,")"),n.href=t,document.body.appendChild(n)}};e.exports=function(e,t,n){var r={whitelistConfig:t,noWhitelistConfig:n};u.init();var i=p.get();i.baseUrl=o.base,void 0===i.checkAdBlock&&(i.checkAdBlock=1),i.time||(i.time={}),document.addEventListener?document.addEventListener("DOMContentLoaded",(function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),x(e,r)}),!1):document.attachEvent&&document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),x(e,r))})),function(e,t){var n=p.get();if(!c.isDetectionDisabled(n)&&A(e)){var r=document.createElement,i=function(n,r){/(^|\.)hit\.gemius\.pl$/i.test(f(r).hostname)&&_(n,E(e,t,"gemius"))};document.createElement=function(e){var t=r.apply(this,arguments);if("script"==(""+e).toLowerCase()){var n=t.setAttribute;try{Object.defineProperty(t,"src",{configurable:!0,enumerable:!0,get:function(){var e=document.createElement("a");return e.href=t.getAttribute("src"),e.href},set:function(e){i(t,e),n.call(t,"src",e)}})}catch(e){return t}t.setAttribute=function(e,r){return"src"==(""+e).toLowerCase()&&i(t,r),n.apply(t,arguments)}}return t},c.callAsync(n,(function(n){n.on("fetchAdsError",(function(n,r,i){i<1e3&&E(e,t,"csr")(!0)}))})),n.isError&&n.isError((function(n,r){n&&r<500&&E(e,t,"init")(!0)}))}}(e,r)}},function(e,t){var n=function(){var e;return document.getElementById("admain")||((e=document.createElement("div")).id="admain",e.setAttribute("style","width:100px !important;height:100px !important;position:absolute !important;left:-10000px !important;top:-1000px !important;display:block;visibility:visible"),e.setAttribute("class","prebid pub_300x250 adsbygoogle pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links onet-ad adsense autopromoapp infoCloud addthis_toolbox miniSlot lazyContent header-adblock onnetwork-video ads sliderads ppa-slot ad linkSponsorowany adform-slot widget-ads-content cg-template reklama ad-"),document.body.appendChild(e)),e};e.exports={createAdblockElement:n,detect:function(e,t){var r=!1,i=5;setTimeout((function o(){var a=n();setTimeout((function(){var n=!1;if(a){if(null!==e.document.body.getAttribute("abp")||null===a.offsetParent||0==a.offsetHeight||0==a.offsetLeft||0==a.offsetTop||0==a.offsetWidth||0==a.clientHeight||0==a.clientWidth)n=!0;else if(void 0!==e.getComputedStyle){var c=e.getComputedStyle(a,null);"none"!=c.getPropertyValue("display")&&"hidden"!=c.getPropertyValue("visibility")||(n=!0)}a.parentNode&&a.parentNode.removeChild(a)}--i,n&&i?setTimeout(o,45):r||(r=!0,t(n))}),5)}),50)}}},function(e,t,n){var r=n(2);e.exports=function(e){var t=parseInt(r.get("adp_test_seg_ab"),10);return isNaN(t)?e.seg_ab:(e.seg_ab=t,t)}},function(e,t){e.exports=function(e){var t=e||window,n=t.document,r=0,i=0;return"number"==typeof t.innerWidth?(r=t.innerWidth,i=t.innerHeight):n.body&&(n.body.clientWidth||n.body.clientHeight)?(r=n.body.clientWidth,i=n.body.clientHeight):n.documentElement&&(n.documentElement.clientWidth||n.documentElement.clientHeight)&&(r=n.documentElement.clientWidth,i=n.documentElement.clientHeight),{width:r||t.screen.width,height:i||t.screen.height}}},function(e,t,n){var r=n(22),i=n(0),o=n(3),a=n(7),c=n(4),s=!1,l=r(),d="https:"===window.location.protocol?"https:":"http:",u=[d+"//onet.tv",d+"//"+window.location.host,d+"//pulsembed.eu"],f=!1,p=function(){var e=v();l.setTargetWindows(e)},h=function(e){u=e,l.setAllowedOrigins(u)},m=function(e,t){return!(!e||!e.src)&&e.src.indexOf(t)>-1},v=function(){var e,t=[],n=null,r=[],i=document.getElementsByTagName("iframe");if(i)for(var o in i)n=i[o],e="mvp-embed",((" "+n.className+" ").indexOf(" "+e+" ")>-1||m(n,"pulsembed.eu")||m(n,"onet.tv"))&&n&&n.contentWindow&&t.push(n.contentWindow);return t.length<=0&&(r=document.querySelectorAll(".mvp"))&&r.length&&t.push(window),t};e.exports={init:function(){h(u),l.setTargetOrigin("*"),l.bind("adblock",(function(e){if(!i.check()){var t=a.get();if(p(),"detect"==e&&s)l.post("adblockApi",JSON.stringify({detected:s}));else if(0===e.indexOf("adblockInfo"))if(0==f){f=!0;var n=document.createElement("script");window.document.getElementsByTagName("head")[0].appendChild(n),n.src=[o.base,"build","/","whl","/","video",".","js"].join("")}else try{t.displayWhitelistVideoBoard()}catch(e){}else if(0===e.indexOf("adblockVideoStart")){var r=e.substr(18,e.length);r&&(c.reportAdblock(t,r),13!=t.time.TADP&&c.appendWhitelistChecker(t,window))}}}))},setAllowedOrigins:h,sendBlockedToFrames:function(){i.check()||(s=!0,p(),l.post("adblockApi",JSON.stringify({detected:!0})))}}},function(e,t){e.exports=function(){var e=[],t="",n=[],r=[],i=function(t){var n=!1,i="",o="";for(var a in e){if("*"==e[a]){n=!0;break}if(t&&t.origin&&t.origin==e[a]){n=!0;break}}return!!n&&(!!t.data&&(void 0!==(i=t.data.toString().split("."))[0]&&(o=i[0]),i=i.splice(1).join("."),void("function"==typeof r[o]&&r[o](i))))};return window.addEventListener?window.addEventListener&&window.addEventListener("message",i):window.attachEvent&&window.attachEvent("onmessage",i),{setAllowedOrigins:function(t){e=t},setTargetOrigin:function(e){t=e},setTargetWindows:function(e){n=e},post:function(e,r){for(var i=0;i<n.length;++i)n[i]&&n[i].postMessage&&n[i].postMessage(e+"."+r,t)},bind:function(e,t){r[e]=t},unbind:function(e){r[e]=!1}}}},function(e,t){e.exports=function(e){var t=document.createElement("a");return t.href=e,t}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r),o=function(e){if(void 0!==e)if(void 0===e.AL){e.disableModule=e.disableModule||{};try{var t=JSON.parse("[\"--enabled--gratka.pl\",\"--enabled--morizon.pl\",\"lamoda.pl\"]");(null==t?void 0:t.some((function(e){return window.top.location.hostname.endsWith(e)})))&&(e.disableModule.pixel=!0)}catch(e){}n(11),e.AL=1,e.coreVitals=i.a,e.coreVitals.init(),e.adbCsrSubdomain="k266d5zsl",e.cmd=e.cmd||[],e.fncs=["addSlot","show","on","$remove","addKeyword","addCss","addCallback"];for(var r=function(t){e[e.fncs[t]]=function(){var n=arguments;e.cmd.push((function(e){e[e.fncs[t]].apply(e,n)}))}},o=0;o<e.fncs.length;o++)r(o);var a,c=document.getElementById("adsinit");c&&(a=c.getAttribute("data-original"));var s=document.createElement("script");s.async=!0,function(e){var t,n=[],r=function(e){var r;if(!t)for(t=[e,Date.now()-i];r=n.shift();)r.apply(null,t)},i=Date.now();e.isError=function(e){t?e.apply(null,t):n.push(e)},e.onload=function(){r(!1)},e.onerror=function(){r(!0)}}(e),s.onload=e.onload,s.onerror=e.onerror,s.src=a||"https://sgqcvfjvr.onet.pl/YnVpbGQvezlza2x0MzczfWRsQXBpL2RsLmxpYntOTWFzXzM3M30ubWluLmpz",document.getElementsByTagName("head")[0].appendChild(s),dlApiDefine("dl.boot",["aureus","clickmap","cmp","artemis","pixel"])}else console.error("dl.boot.min.js is already loaded!");else console.error("dlApi is undefined, Aborted!")},a=n(17);!function(e){if(e)try{"undefined"!=typeof $onet||e.injected||(e.injected=1,e.injectedVersion="20240208_1527",e.whitelistInjected=1,o(e),function(){try{var e=JSON.parse("[{\"fields\":{\"bgColor\":\"#f9b700\"},\"segment\":[0,10],\"target\":\"^BIZNES/\"},{\"fields\":{\"bgColor\":\"#f01616\"},\"segment\":[0,90],\"target\":\"^RASP_FAKT/\"},{\"fields\":{\"bgColor\":\"#f9b700\"},\"segment\":[0,90],\"target\":\"^(WIADOMOSCI|SPORT|MOTO|FILM|MUZYKA|FACET|KOBIETA|URODA|MODA|ZDROWIE|SLUB|DZIECKO|DOM)/\"},{\"fields\":{\"bgColor\":\"#ef1b22\"},\"segment\":[0,90],\"target\":\"^RASP_(AUTOSWIAT|KOMPUTERSWIAT)/\"},{\"fields\":{\"bgColor\":\"#ff035c\"},\"segment\":[0,90],\"target\":\"^PLEJADA/\"},{\"fields\":{\"bgColor\":\"#2fd6ff\"},\"segment\":[0,90],\"target\":\"^VOD/(?!(exclusive:)?PREMIUM).+?/kwrd=(?!(.+?\\\\+)?WHLNOTEST(\\\\+|$))(DETAL|.*\\\\+DETAL)(\\\\+|$)\"},{\"fields\":{\"bgColor\":\"#00f3a3\"},\"segment\":[0,90],\"target\":\"^NOIZZ/\"},{\"target\":\"/kwrd=(WHLTEST|.*\\\\+WHLTEST)(\\\\+|$)\"}]")}catch(e){}try{var t=JSON.parse("{\"capping\":{\"default\":3},\"referrers\":[\"facebook.com\",\"google.com\",\"google.pl\"]}")}catch(e){}a(window,e,t)}(),function(e){e.eventHandler||window.addEventListener("message",(function e(t){try{var n=window.onetAds||window.dlApi;if(n.eventHandler)return void window.removeEventListener("message",e,!1);var r=t&&t.data;"string"==typeof r&&(r=JSON.parse(r)),r&&"__dlApiCall"===r.kind&&(n.cmd=n.cmd||[],n.cmd.push((function(e){e.eventHandler(t)})))}catch(e){}}),!1)}(e))}catch(e){throw e}else console.error("dlApi is undefined, "+location)}(window.onetAds||window.dlApi)}]);
/* ]]> */</script>
        

    <link href="//ocdn.eu/ucs/static/faktnext/6f6fc36969ce681361dcb4af5b49cdec/build/css/main-desktop.css" type="text/css" rel="stylesheet">



<link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Exo+2:wght@700;900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Exo+2:wght@700;900&display=swap" rel="stylesheet"></noscript>
        
    
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name" : "Fakt24.pl",
            "url": "https://www.fakt.pl/",
            "logo": "https://ocdn.eu/faktucs/fakt_pl/fakt_logo.svg",
            "sameAs": ["https://www.facebook.com/fakt24pl","https://twitter.com/fakt24pl","https://plus.google.com/+Fakt"]
        }
    </script>
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.fakt.pl/",
            "name": "Fakt24.pl",
            "alternateName": "Fakt24",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.fakt.pl/szukaj?q={search_query}",
                "query-input": "required name=search_query"
            }
        }
    </script>

        
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{"@type":"ListItem","position":1,"name":"Fakt","item":"https://www.fakt.pl/"},{"@type":"ListItem","position":2,"name":"Hobby","item":"https://www.fakt.pl/hobby"},{"@type":"ListItem","position":3,"name":"Turystyka","item":"https://www.fakt.pl/hobby/turystyka"}]
    }
</script>
        

<script data-static-amd-map="{&quot;adsinit&quot;:&quot;https://ty0lm9uz.onet.pl/e1BrazgzNzN9/build&quot;,&quot;dailyneeds&quot;:&quot;https://ocdn.eu/paas-static/template-engine/fbc3bd59219c65f9c312840c9743c691/build&quot;,&quot;embeddedapp&quot;:&quot;https://ocdn.eu/paas-static/template-engine/162d5140a65ebc0fa2e96da195a4eb9b/build&quot;,&quot;layerglass&quot;:&quot;https://ocdn.eu/paas-static/template-engine/05afb91f43a4cacccad6959d895ac7ed/build&quot;,&quot;local&quot;:&quot;//ocdn.eu/ucs/static/faktnext/6f6fc36969ce681361dcb4af5b49cdec/build/js&quot;,&quot;pulsembed&quot;:&quot;https://pulsembed.eu/amd/1.0.16/build&quot;,&quot;quizapp&quot;:&quot;https://ocdn.eu/paas-static/template-engine/4bf940d37e48f3548c375c519c69e1da/build&quot;,&quot;tabele&quot;:&quot;https://ocdn.eu/paas-static/template-engine/08725d11c5641c65d7f9985ecb7b86c0/build&quot;,&quot;uststd&quot;:&quot;https://ocdn.eu/paas-static/template-engine/f066ddd0af5c65555c5ff1273876e4f9/build&quot;,&quot;vendor&quot;:&quot;https://ocdn.eu/paas-static/template-engine/e664b902675175d7b4ea37dc48134f31/build&quot;}">


(function(){function x(m,l,q,n){Object.defineProperty(m,l,{get:function(){return q},set:function(){},configurable:n})}function w(m,l){A.A(m,l)}function E(m,l,q){if(1===arguments.length)A.define([],m);else if(2===arguments.length)"string"===typeof m&&"function"===typeof l?A.define([],l):A.define(m,l);else if(3===arguments.length)A.define(l,q);else throw Error("Malformed define",arguments);}function H(m){var l=!1,q=!1,n=null,e=null,p=F(!1);return{c:function(d,t){!0!==q&&!1===l&&(l=!0,n=d,setTimeout(function(){A.B(m,
d,function(){var b=Array.prototype.slice.call(arguments,0);try{e=t.apply(null,b)}catch(a){return}p.exec([e])})},0))},l:function(){return!0===l?n:[]},get:function(d){p.add(d)},i:function(){q=!0;!1===l&&(l=!0,p.exec([void 0]))}}}function I(m){function l(e,p){if(!(0<e.length&&"."===e[0])){if("https://"===e.substr(0,8)||"http://"===e.substr(0,7)||"//"===e.substr(0,2))return e;for(var d in m)if(0===e.indexOf(d+"/")){d=e.replace(d,m[d]);if(e!==d)return y(p)?d+"."+p:d;break}}}function q(e,p){function d(){!0!==
t&&(t=!0,p(b))}var t=!1,b=document.createElement("script");b.type="text/javascript";b.src=e;b.onload=d;b.async=!0;b.defer=!0;b.onreadystatechange=function(){"loaded"!==b.readyState&&"complete"!==b.readyState||d()};return b}var n={};return{load:function(e,p){if(y(e)){if(!(e in n)){var d=q(e,function(){n[e].query.exec([])});n[e]={C:d,query:F(!0)};document.getElementsByTagName("head")[0].appendChild(d)}n[e].query.add(p)}},j:function(){for(var e in n)if("interactive"===n[e].C.readyState)return e;return null},
g:l,o:function(e){e=l(e,"js");return y(e)&&e in n?n[e].query.m():!1},F:function(e){e=l(e,"js");return y(e)&&e in n?!0:!1}}}function y(m){return"string"===typeof m&&""!==m}function F(m){function l(){if(!0===n)for(;0<e.length;)!0===m?e.shift().apply(null,p):q(e.shift())}function q(d){setTimeout(function(){d.apply(null,p)},0)}var n=!1,e=[],p=null;return{exec:function(d){Array.isArray(d)&&!1===n&&(n=!0,p=d,l())},add:function(d){"function"===typeof d&&(e.push(d),l())},m:function(){return n}}}function G(){return document.currentScript&&
"function"===typeof document.currentScript.getAttribute?document.currentScript:null}var A=function(){function m(b,a){b=b.split("/");2>b.length||(b.pop(),a(b.join("/")))}function l(b,a){var c=b.split("/"),f=a.split("/");if(0<f.length)if("."===f[0]){var g=[];c.forEach(function(k){g.push(k)});f.forEach(function(k){"."!==k&&g.push(k)});a=g.join("/");if(0===a.indexOf(b))return a}else return a}function q(b,a){function c(){if(!1===f){for(var k=[],h=0;h<b.length;h++){var r=b[h];if(!0===g[r].a)k.push(g[r].value);
else return}f=!0;"function"===typeof a&&a.apply(null,k)}}var f=!1,g={};b.forEach(function(k){k in g||(g[k]={a:!1,value:null},n(k,function(h){var r=g[k];!1===r.a&&(r.a=!0,r.value=h,c())}))});c()}function n(b,a){p=!0;var c=z.g(b,"js");c in d||(d[c]=H(b),z.load(c,function(){if(c in d){for(;0<t.length;){var f=t.pop();if(e(c,f.f))throw Error("circular dependency");d[c].c(f.f,f.define)}d[c].i()}}));d[c].get(a)}function e(b,a){function c(h,r){r.forEach(function(u){h.push(u)})}function f(){var h=k.shift();
h in g||(g[h]=!0,h in d&&c(k,d[h].l()))}var g={},k=[];for(c(k,a);0<k.length;)f();return b in g}var p=!1,d={},t=[];return{B:function(b,a,c){m(b,function(f){for(var g=[],k=0;k<a.length;k++){var h=l(f,a[k]);"string"===typeof h&&""!==h&&g.push(h)}q(g,c)})},A:q,G:n,define:function(b,a){var c=G();if(!0===p){if(null!==c&&(c=c.getAttribute("src"),c in d)){d[c].c(b,a);return}c=z.j();y(c)?c in d&&d[c].c(b,a):t.push({f:b,define:a})}}}}(),z=null;x(window,"require",w,!1);x(window,"define",E,!1);x(w,"runnerBox",
function(m){function l(a){t in a||(a[t]=n());return a[t]}function q(){function a(){if(!0===c)for(;0<f.length;)setTimeout(f.shift(),0)}var c=!1,f=[];return{s:function(g){f.push(g);a()},exec:function(){!1===c&&(c=!0);a()}}}function n(){var a=!1,c=null,f=q();return{u:function(g){f.s(function(){g(c)})},D:function(){!1===a&&(a=!0)},h:function(g){!0===a&&(c=g,f.exec())},b:function(){return a}}}function e(a,c){function f(h){setTimeout(function(){c(h)},0)}for(var g=[],k=0;k<a.length;k++)g.push(a[k]);for(a=
0;a<g.length;a++)f(g[a])}function p(a){function c(){var h=a;h.querySelectorAll?(h===document&&(h=document.documentElement),h=Array.prototype.slice.call(h.querySelectorAll("*[data-run-module]"),0)):h=[];for(var r=[],u,v=0;v<h.length;v++)u=h[v],!0===k(u,g)&&r.push(u);return r}function f(h){if(d(h))return!0===l(h).b()?!0:!1;if("HTML"===h.tagName)return!0}function g(h){if(h===a)return!0;if(d(h))return!1}function k(h,r){function u(B){C++;if(200<C)return v(),!1;var D=r(B);return!0===D||!1===D?D:B.parentNode?
u(B.parentNode):!1}function v(){var B=Error("Too much recursion");setTimeout(function(){throw B;},0)}var C=0;return u(h.parentNode)}return a===document||!0===k(a,f)?("function"!==typeof a.getAttribute?0:y(a.getAttribute("data-run-module")))?!0===l(a).b()?c():[a]:c():[]}function d(a){a=a.getAttribute("data-run-module");return"string"===typeof a&&""!==a}var t="runnerBoxElementProp"+(new Date).getTime(),b=function(){return"function"===typeof window.requestAnimationFrame?window.requestAnimationFrame:
function(a){a()}}();return{runElement:function(a){function c(f){f=f.getAttribute("data-run-module");return"string"===typeof f&&""!==f?f:null}a=p(a);e(a,function(f){var g=c(f),k=g.split(".");if(2!==k.length)throw Error("irregulari contents of the attribute data-run-module: "+g);var h=k[0],r=k[1];m([h],function(u){b(function(){if(d(f)&&!1===l(f).b())if(l(f).D(),u&&"function"===typeof u[r]){f.setAttribute("data-run-module-isrun","1");var v=u[r](f,function(C){l(f).h(C)});"undefined"!==typeof v&&l(f).h(v)}else throw v=
"No function '"+r+"' in module : "+h,f.setAttribute("data-run-module-isrun",v),Error(v);})})})},whenRun:function(a,c){d(a)&&l(a).u(c)}}}(w),!1);x(w.runnerBox,"runElement",w.runnerBox.runElement,!1);x(w.runnerBox,"whenRun",w.runnerBox.whenRun,!1);x(w,"defined",function(m){return null===z?!1:z.o(m)},!1);x(w,"toUrl",function(m){if(y(m))return z.g(m,"",!0)},!0);x(E,"amd",{},!0);(function(m,l){function q(b){function a(){var g=b.getAttribute("data-amd-preload");return y(g)?g.split(","):[]}function c(){var g=
b.getAttribute("data-timeout-start");return 0<g?g:2E3}var f=e(b);return null!==f?(n(m,f,a(),c()),!0):!1}function n(b,a,c,f){function g(){setTimeout(function(){k()},f)}function k(){setTimeout(function(){0<c.length&&l(c,function(){});window.require.runnerBox.runElement(document)},0)}b({v:a});p(window,"load",function(){k();setTimeout(function(){k()},1E4)});"complete"===document.readyState&&k();"loaded"===document.readyState&&g();p(document,"DOMContentLoaded",function(){g();p(document.getElementsByTagName("body")[0],
"pageshow",function(){k()})});p(document,"readystatechange",function(){"complete"!==document.readyState&&"loaded"!==document.readyState||g()})}function e(b){b=b.getAttribute("data-static-amd-map");if("string"===typeof b){if(""===b)return{}}else return null;return JSON.parse(b)}function p(b,a,c){b.addEventListener(a,c,!1)}var d=G();if(null===d||!0!==q(d)){d=document.getElementsByTagName("script");for(var t=0;t<d.length&&!0!==q(d[t]);t++);}})(function(m){null===z&&(z=I(m.v))},w)})();
</script>
        


    
    
    
        <link rel="canonical" href="https://www.fakt.pl/hobby/turystyka">
    
    
        
        
            <link rel="next" href="https://www.fakt.pl/hobby/turystyka?page=2">
        
    

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
<meta property="fb:pages" content="266358044374" />
<style>
  body:not(.placeholders-off):not(.skom) .placeholder.covid { padding-top: 135px; }
  body:not(.placeholders-off):not(.skom) .placeholder.covid:not(.no-info)::after{
    	content: "DANE COVID";
  }
  section.main.simpleAd.covid-meter { margin: 0 0 20px }
  body.mobile .mainPlayer{ display:block; }
  .bottom-bar_link:nth-of-type(1) {
    margin: 0 0 0 4px;
}
</style>
<meta name="robots" content="max-image-preview:large">
<meta name="msvalidate.01" content="8C00DBCC884D856B99AFD2BD7A5E3BEB" />
<script>
window.addEventListener('DOMContentLoaded', function(event) {
  if(document.location.href === 'https://www.fakt.pl/wydarzenia/polska/wroclaw/rudna-wielka-wysypisko-zatruwa-zycie-mieszkancom/02tp8e7' ){
    const lead123 = document.querySelector('.article-lead .article-p');
    if(lead123) {
      lead123.style = 'font:900 62px / 1.2em "Exo 2", Tahoma, sans-serif;';
    }
  }
});
</script>
<script>window.__paywall_paygateway = true;</script></head>
    <body data-fakt-exp-variant="" data-run-module="local/main.desktop">
<!-- Google Tag Manager (noscript) -->
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6TXN4J" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

        
        
        <svg class="svg-icons" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <symbol id="ico-facebook" width="28" height="28" viewBox="-10 -5 28 28">
            <path d="M262.555,703.352h-.115l-.058.058-.115.058-.058.057-.115.115-.058.058-.058.172-.058.058v.115l-.058.115v1.785h2.65v.577l-.058.173v.345l-.058.173v.346l-.058.288v.345l-.058.173v.288l-.058.345h-2.3l-.058,8.641h-3.571L258.234,709l-1.727-.057c-.188-.158-.058-1.187-.058-1.5a6.1,6.1,0,0,1,.058-1.439l1.728-.061.058-2.243v-.346l.058-.115v-.173l.058-.115v-.115l.058-.115V702.6l.058-.057v-.115l.058-.058v-.057l.058-.058.173-.4.058-.058.058-.115.058-.058.058-.115.058-.058.058-.058.058-.058.058-.057.058-.058.058-.058.058-.058.058-.057.115-.058.058-.058.115-.058.058-.058.288-.115.058-.058h.058l.057-.058h.115l.057-.057h.115l.057-.058h.173l.058-.058h.23l.4-.058h3.053v2.937h-1.843Z" transform="translate(-256.405 -700.357)"/>
        </symbol>

        <symbol id="ico-twitter" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="-450 -450 2100 2127">
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
        </symbol>

        <symbol id="ico-yt" width="28" height="28" viewBox="0 0 28 28">
            <g transform="translate(-567.279 -504.708)">
               <g transform="translate(574.183 513.705)">
                    <path d="M586.91,515.125a3.154,3.154,0,0,0-3.153-3.154h-8.179a3.153,3.153,0,0,0-3.153,3.154v3.833a3.153,3.153,0,0,0,3.153,3.153h8.179a3.153,3.153,0,0,0,3.153-3.153Zm-5.16,2.109-3.262,1.789c-.142.077-.269-.026-.269-.187v-3.672c0-.163.131-.266.273-.185l3.284,1.883A.214.214,0,0,1,581.75,517.234Z" transform="translate(-572.425 -511.971)"/>
                </g>
            </g>
        </symbol>

        <symbol id="ico-instagram" width="28" height="28" viewBox="-70 -70 500 500">
            <g transform="translate(-77.12909,-99.75057)">
            <path d="m 257.12909,129.76098 c -40.73362,0 -45.84008,0.25899 -61.83741,0.91733 -15.96445,0.7292 -26.846,3.22727 -36.38561,6.93669 -9.8635,3.83171 -18.26206,8.98306 -26.60017,17.32165 -8.33835,8.33859 -13.44169,16.69125 -17.27412,26.55409 -3.70877,9.54051 -6.25479,20.46653 -6.98302,36.43098 -0.73154,15.99732 -0.91968,21.10396 -0.91968,61.83716 0,40.73554 0.18808,45.83984 0.91968,61.83717 0.72919,15.96445 3.27425,26.84576 6.98302,36.38633 3.83243,9.86278 8.93577,18.21549 17.27412,26.55403 8.33811,8.33859 16.73667,13.48525 26.60017,17.3193 9.53961,3.70708 20.42116,6.25455 36.38561,6.98374 15.99733,0.7292 21.10379,0.87029 61.83741,0.87029 40.73362,0 45.83984,-0.23496 61.8374,-0.87029 15.96422,-0.72919 26.89185,-3.27666 36.43147,-6.98374 9.8635,-3.83405 18.21621,-8.98071 26.55432,-17.3193 8.33835,-8.33854 13.44145,-16.69125 17.27388,-26.55403 3.70876,-9.54057 6.25503,-20.42188 6.98326,-36.38633 0.73154,-15.99733 0.91968,-21.10163 0.91968,-61.83717 0,-40.7332 -0.18808,-45.83984 -0.91968,-61.83716 -0.7292,-15.96445 -3.2745,-26.89047 -6.98326,-36.43098 -3.83243,-9.86284 -8.93553,-18.2155 -17.27388,-26.55409 -8.33811,-8.33859 -16.69082,-13.48994 -26.55432,-17.32165 -9.53962,-3.70942 -20.46725,-6.20749 -36.43147,-6.93669 -15.99732,-0.72919 -21.10378,-0.91733 -61.8374,-0.91733 z m 0,27.01275 c 40.04775,0 44.78087,0.23495 60.59684,0.87028 14.623,0.65865 22.60141,3.13785 27.88658,5.19137 7.00117,2.72149 11.98006,5.96281 17.22809,11.21061 5.24894,5.24779 8.48978,10.2274 11.20964,17.22754 2.05353,5.28542 4.52401,13.26413 5.19155,27.88544 0.71982,15.81622 0.87269,20.5512 0.87269,60.59757 0,40.04865 -0.16464,44.78369 -0.87269,60.59756 -0.66802,14.62366 -3.13802,22.55533 -5.19155,27.84074 -2.71986,7.00014 -5.9607,12.02211 -11.20964,17.27225 -5.24803,5.2478 -10.22692,8.48912 -17.22809,11.2106 -5.28517,2.04643 -13.26358,4.48099 -27.88658,5.14667 -15.81363,0.72913 -20.54555,0.87028 -60.59684,0.87028 -40.0513,0 -44.78322,-0.23495 -60.59684,-0.87028 -14.62301,-0.65865 -22.55557,-3.09321 -27.84074,-5.14667 -7.0011,-2.72148 -12.0259,-5.9628 -17.27394,-11.2106 -5.24773,-5.25014 -8.48863,-10.27211 -11.20964,-17.27225 -2.05352,-5.28541 -4.47792,-13.21708 -5.14546,-27.84074 -0.71982,-15.81387 -0.87269,-20.54891 -0.87269,-60.59756 0,-40.04637 0.16465,-44.78135 0.87269,-60.59757 0.66803,-14.62131 3.09194,-22.60002 5.14546,-27.88544 2.72101,-7.00014 5.96191,-11.97975 11.20964,-17.22754 5.24804,-5.2478 10.27284,-8.48912 17.27394,-11.21061 5.28517,-2.04643 13.21773,-4.52334 27.84074,-5.19137 15.81597,-0.72913 20.54909,-0.87028 60.59684,-0.87028 z m 80.07621,24.90046 c -9.93951,0 -18.0092,8.06807 -18.0092,18.00848 0,9.94042 8.06969,18.00854 18.0092,18.00854 9.94066,0 18.00896,-8.06812 18.00896,-18.00854 0,-9.94041 -8.0683,-18.00848 -18.00896,-18.00848 z m -80.07621,21.04051 c -42.53614,0 -76.99809,34.50924 -76.99809,77.04418 0,42.53735 34.46195,76.99713 76.99809,76.99713 42.53614,0 77.04394,-34.45978 77.04394,-76.99713 0,-42.53494 -34.5078,-77.04418 -77.04394,-77.04418 z m 0,27.0598 c 27.61161,0 49.98438,22.37415 49.98438,49.98438 0,27.61257 -22.37277,49.98438 -49.98438,49.98438 -27.61161,0 -49.98444,-22.37181 -49.98444,-49.98438 0,-27.61023 22.37283,-49.98438 49.98444,-49.98438 z"/>
            </g>
        </symbol>

        <symbol id="ico-mail" width="28" height="28" viewBox="-5 -6 28 28">
            <path d="M18.2,4H3.8A1.8,1.8,0,0,0,2.009,5.8L2,16.6a1.805,1.805,0,0,0,1.8,1.8H18.2A1.805,1.805,0,0,0,20,16.6V5.8A1.805,1.805,0,0,0,18.2,4Zm0,3.6L11,12.1,3.8,7.6V5.8L11,10.3l7.2-4.5Z" transform="translate(-2 -4)"/>
        </symbol>


        <symbol id="ico-link" width="28" height="28" viewBox="-3 -3 28 28">
            <path class="a" d="M3.9,12A3.1,3.1,0,0,1,7,8.9h4V7H7A5,5,0,0,0,7,17h4V15.1H7A3.1,3.1,0,0,1,3.9,12ZM8,13h8V11H8Zm9-6H13V8.9h4a3.1,3.1,0,1,1,0,6.2H13V17h4A5,5,0,0,0,17,7Z" transform="translate(-6.364 10.607) rotate(-45)"/>
        </symbol>

        <symbol id="ico-msg" width="24" height="24" viewBox="-6 -5 28 28">
            <path d="M706.5,708.758a9,9,0,0,0,3.726,7.211V719.5l3.405-1.868a10.75,10.75,0,0,0,2.868.388c5.523,0,10-4.146,10-9.259s-4.477-9.261-10-9.261-10,4.146-10,9.259Zm8.945-2.593,2.608,2.716,4.906-2.716-5.467,5.8-2.546-2.714-4.969,2.715Z" transform="translate(-706.5 -699.499)"/>
        </symbol>

        <symbol id="ico-whatsapp" width="24" height="24" viewBox="-6 -5 28 28">
            <path d="M222.5,611a10.415,10.415,0,0,1-5.776-1.734l-4.036,1.29,1.308-3.9A10.493,10.493,0,0,1,222.5,590H222.5A10.5,10.5,0,0,1,222.5,611Zm6.288-7.628a1.477,1.477,0,0,0-.586-0.359c-0.308-.154-1.808-0.895-2.092-0.993a0.584,0.584,0,0,0-.753.228,13.052,13.052,0,0,1-.82,1.086,0.664,0.664,0,0,1-.741.117,7.717,7.717,0,0,1-2.462-1.518,9.312,9.312,0,0,1-1.7-2.117,0.494,0.494,0,0,1,.123-0.655c0.154-.191.3-0.327,0.457-0.506a1.849,1.849,0,0,0,.339-0.481,0.626,0.626,0,0,0-.043-0.568c-0.074-.155-0.691-1.661-0.944-2.272h0a0.609,0.609,0,0,0-.667-0.518c-0.117-.008-0.234-0.012-0.352-0.012a1.521,1.521,0,0,0-1.073.375,3.353,3.353,0,0,0-1.074,2.556,6,6,0,0,0,1.246,3.167,13.149,13.149,0,0,0,5.227,4.617c2.413,1,3.129.908,3.678,0.79a2.959,2.959,0,0,0,2.061-1.481A2.587,2.587,0,0,0,228.791,603.369Z" transform="translate(-212 -590)"/>
        </symbol>

        <symbol id="ico-trolley" width="20" height="20" viewBox="0 0 20 20">
            <path d="M1307.88,9.479l-3.58,6.49a1.99,1.99,0,0,1-1.75,1.03h-7.45l-.9,1.631-.03.12a.247.247,0,0,0,.25.25H1306v2h-12a2.006,2.006,0,0,1-2-2,1.934,1.934,0,0,1,.25-.96l1.35-2.45L1290,8h-2V6h3.27l.94,2H1307a1,1,0,0,1,1,1A.978.978,0,0,1,1307.88,9.479Zm-14.4.472,2.048,5h7.238l2.381-5ZM1294,22a2,2,0,1,1-1.99,2A2.005,2.005,0,0,1,1294,22Zm10,0a2,2,0,1,1-1.99,2A2.006,2.006,0,0,1,1304,22Z" transform="translate(-1288 -5.999)"/>
        </symbol>

        <symbol id="ico-gratka" width="20" height="20" viewBox="0 0 20 20">
            <g transform="translate(-1186.000000, -135.000000)">
                <path d="M1208,135 C1208.55228,135 1209,135.447715 1209,136 L1209,148 L1207,148 L1207,147 L1206,147 L1206,148 L1204,148 L1204,146 L1203,146 L1203,153 L1198,153 L1198,146 L1197,146 L1197,153 L1192,153 L1192,146 L1191,146 L1191,153 L1186,153 L1186,136 C1186,135.447715 1186.44772,135 1187,135 L1208,135 Z M1201,147 L1200,147 L1200,152 L1201,152 L1201,147 Z M1195,147 L1194,147 L1194,152 L1195,152 L1195,147 Z M1189,147 L1188,147 L1188,152 L1189,152 L1189,147 Z M1204,143 L1196,143 L1196,144 L1204,144 L1204,143 Z M1194,137 L1188,137 L1188,144 L1194,144 L1194,137 Z M1207,140 L1196,140 L1196,141 L1207,141 L1207,140 Z M1207,137 L1196,137 L1196,138 L1207,138 L1207,137 Z" id="Combined-Shape"></path>
            </g>
        </symbol>

        <symbol id="ico-phone" width="20" height="20" viewBox="-5 0 20 20">
            <path d="M1341.6,6.1h-7.2a2.251,2.251,0,0,0-2.25,2.251v15.3a2.251,2.251,0,0,0,2.25,2.25h7.2a2.251,2.251,0,0,0,2.25-2.25V8.35A2.251,2.251,0,0,0,1341.6,6.1ZM1338,25a1.35,1.35,0,1,1,1.35-1.349A1.348,1.348,0,0,1,1338,25Zm4.05-3.079h-8.1V7.967h8.1Z" transform="translate(-1332.15 -6.099)"/>
        </symbol>

        <symbol id="ico-search" width="20" height="20" viewBox="0 0 20 20">
            <path d="M1419.965,18.38h-.834l-.3-.285a6.874,6.874,0,1,0-.739.739l.285.3v.834l5.28,5.269,1.573-1.573Zm-6.336,0a4.752,4.752,0,1,1,4.752-4.752A4.746,4.746,0,0,1,1413.629,18.38Z" transform="translate(-1406.765 -6.764)"/>
        </symbol>

        <symbol id="ico-arrow-right" width="18" height="30" viewBox="0 0 18 30">
            <path d="M12.115,6,8.59,9.525,20.04,21,8.59,32.475,12.115,36l15-15Z" transform="translate(-8.59 -6)"/>
        </symbol>

        <symbol id="ico-share" width="14" height="14" viewBox="0 0 724.18 806.76">
            <g transform="translate(1193.5 499.59)">
                <g transform="matrix(0 -17.254 17.254 0 10443 -2252.9)">
                    <path d="m-134.38 309.5c0 4.1683-3.3791 7.5474-7.5474 7.5474s-7.5474-3.3791-7.5474-7.5474 3.3791-7.5474 7.5474-7.5474 7.5474 3.3791 7.5474 7.5474z" transform="translate(1.1045 -949.48)" />
                    <path d="m-134.38 309.5c0 4.1683-3.3791 7.5474-7.5474 7.5474s-7.5474-3.3791-7.5474-7.5474 3.3791-7.5474 7.5474-7.5474 7.5474 3.3791 7.5474 7.5474z" transform="translate(32.767 -949.48)" />
                    <path d="m-134.38 309.5c0 4.1683-3.3791 7.5474-7.5474 7.5474s-7.5474-3.3791-7.5474-7.5474 3.3791-7.5474 7.5474-7.5474 7.5474 3.3791 7.5474 7.5474z" transform="translate(16.936 -976.35)" />
                    <rect transform="rotate(-60.001)" height="3" width="27.692" y="-443.73" x="488.22" />
                    <rect transform="matrix(-.5 -.86603 -.86603 .5 0 0)" height="3" width="27.692" y="-226.9" x="613.16" />
                </g>
            </g>
        </symbol>

        <symbol id="ico-gallery" width="14" height="14" viewBox="0 0 100 77">
            <path d="m50 32c-7.168 0-13 5.832-13 13s5.832 13 13 13 13-5.832 13-13c0-7.168-5.832-13-13-13z" />
            <path d="m87 13h-15c0-7.18-5.82-13-13-13h-18c-7.18 0-13 5.82-13 13h-15c-7.18 0-13 5.82-13 13v38c0 7.18 5.82 13 13 13h74c7.18 0 13-5.82 13-13v-38c0-7.18-5.82-13-13-13zm-37 55c-12.683 0-23-10.318-23-23s10.317-23 23-23 23 10.318 23 23c0 12.682-10.317 23-23 23z" />
        </symbol>

        <symbol id="ico-video" width="14" height="14" viewBox="0 0 460.5 531.74">
            <polygon stroke="#000000" points="0.5,0.866 459.5,265.87 0.5,530.874 "/>
        </symbol>

        <symbol id="ico-plus" viewBox="0 0 14.5 14.5">
            <g transform="translate(63.501 17.039)">
                <g transform="translate(-63.501 -17.039)">
                    <rect class="a" width="14.5" height="14.5" rx="2" transform="translate(14.5 0) rotate(90)" fill="#e51513"/>
                    <path class="b" d="M46.695,40.3H43.686V37.29a.926.926,0,1,0-1.851,0V40.3H38.827a.926.926,0,1,0,0,1.851h3.008v3.008a.926.926,0,1,0,1.851,0V42.149h3.008a.926.926,0,1,0,0-1.851Z" transform="translate(-35.511 -33.974)"/>
                </g>
            </g>
        </symbol>
        <symbol id="ico-weather" viewBox="0 0 187 187">
            <path transform="translate(97.474 38.423)" d="m53.225 34.864a31.435 31.435 0 1 1-62.87 0 31.435 31.435 0 1 1 62.87 0z" fill="#FF0" stroke="#888" stroke-width="7"/>
            <path d="m118.91 7.5585-0.53125 29.125 0.53125-29.125zm-32.781 8.25s14.406 26.031 14.406 26.031-14.406-26.031-14.406-26.031zm65.344 1-14.656 24.344 14.656-24.344zm-89.624 22.563 25.781 15.5-25.781-15.5zm113.16 1.6875-24.281 13.438 24.281-13.438zm-122.42 30.844s30.062 0.5625 30.062 0.5625-30.062-0.5625-30.062-0.5625zm103.28 1.6562s27.406 0.3125 27.406 0.3125-27.406-0.3125-27.406-0.3125zm-69.094 16.625-25.906 14.531 25.906-14.531zm63.719 2.25 23.531 13.969-23.531-13.969zm-51.25 11.531-14.844 25.031 14.844-25.031zm36.906 1.8125 13.594 24.188-13.594-24.188zm-18.875 4.0625-0.3125 28.375 0.3125-28.375z" stroke="#888" stroke-linejoin="round" stroke-width="7"/>
            <path d="m31.652 78.031c-9.933-0.141-19.172 5.078-24.179 13.657-5.0074 8.5794-5.0074 19.19 0 27.77 5.0074 8.5794 14.246 13.798 24.179 13.658h72.368c9.9328 0.14047 19.172-5.0782 24.179-13.658 5.0074-8.5794 5.0074-19.19 0-27.77-5.0074-8.5794-14.246-13.798-24.179-13.658h-72.368z" fill="#FFF" stroke="#888" stroke-width="7"/>
            <path d="m91.406 80.702c-0.428-16.134-13.638-29.094-29.875-29.094-16.507 0-29.875 13.368-29.875 29.875 1e-6 7.23 2.537 13.89 6.8125 19.062" fill="#FFF" stroke="#888" stroke-linecap="round" stroke-width="7"/>
        </symbol>

        <symbol id="ico-chess" viewBox="0 0 20 20">
            <path d="M14.7,10.3c1.2,0,2.3-1.3,2.3-2.8c0-0.8-0.5-1.3-1.6-2.2c-0.3-0.3-0.8-0.7-1.3-1.1c0,0,0,0,0,0c-0.1-0.3-0.2-1-1.1-1.5
                     l-0.9-0.5V1c0-0.4-0.2-0.7-0.5-0.9c-0.3-0.2-0.7-0.1-1,0.1L8.7,1.4C3.4,4,3,7.7,3,11.9v2.2c0,0.3,0.1,0.5,0.3,0.7l1,1
                     C3.7,16.5,3,17.5,3,19c0,0.6,0.4,1,1,1h10.9c0.6,0,1-0.4,1-1c0-1.5-0.7-2.5-1.3-3.1l0.7-0.7c0.2-0.2,0.3-0.4,0.3-0.7
                     c0-1.5-1.3-2.5-2.4-3.3c-0.6-0.4-1.2-0.9-1.6-1.3c0.4,0.1,0.9,0.1,1.3,0.2C13.8,10.2,14.4,10.3,14.7,10.3z M5.2,18
                     c0.3-0.6,0.7-0.9,0.9-1h6.7c0.2,0.1,0.7,0.4,0.9,1H5.2z M11.9,12.8c0.6,0.5,1.3,1,1.5,1.4L12.6,15H6.3L5,13.7v-1.8
                     c0-4,0.3-6.6,4.7-8.7c0.1,0,0.1-0.1,0.1-0.1l0.3-0.2c0,0.3,0.2,0.6,0.5,0.8l1.5,0.7c0,0,0,0,0,0c0,0.2,0.1,0.7,0.5,1.1
                     c0.6,0.5,1,0.9,1.4,1.3c0.4,0.3,0.8,0.7,0.9,0.8c0,0.4-0.3,0.6-0.3,0.7c-0.2,0-1-0.1-1.6-0.2c-1.2-0.2-2.4-0.4-3.1-0.4
                     c-0.6,0-1,0.4-1,1C9,10.6,10.6,11.8,11.9,12.8z"/>
        </symbol>

        <symbol id="ico-login" viewBox="7 7 33 33">
            <path d="M24 11.8c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2-4.2-1.88-4.2-4.2 1.88-4.2 4.2-4.2m0 18c5.95 0 12.2 2.91 12.2 4.2v2.2h-24.4v-2.2c0-1.29 6.25-4.2 12.2-4.2m0-21.8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 18c-5.33 0-16 2.67-16 8v6h32v-6c0-5.33-10.67-8-16-8z"/>
        </symbol>

        <symbol id="ico-loginbar-profile" viewBox="0 0 18.783 17.699">
            <g transform="translate(-38.838 -40.364)">
                <g transform="translate(39.568 40.964)">
                    <g transform="translate(4.011)">
                        <path class="loginbar-v1" d="M69.355,71.819a3.635,3.635,0,0,1-.515-1.567" transform="translate(-61.403 -58.798)"></path>
                        <path class="loginbar-v1" d="M53.752,69.826a5,5,0,0,1-.48,1.734" transform="translate(-51.923 -58.538)"></path>
                        <path class="loginbar-v2" d="M54.478,53.368h.066a3.45,3.45,0,0,0,2.14-.537A10.548,10.548,0,0,0,59.1,45.4c-.282-3.05-2.228-4.437-4.622-4.437s-4.33,1.382-4.613,4.437a10.548,10.548,0,0,0,2.412,7.43,3.449,3.449,0,0,0,2.14.537h.066" transform="translate(-49.823 -40.964)"></path>
                    </g>
                    <path class="loginbar-v1" d="M75.516,77.607c-.5-1.941-5.359-3.348-5.359-3.348" transform="translate(-58.194 -61.238)"></path>
                    <path class="loginbar-v1" d="M44.927,74.259s-4.861,1.407-5.359,3.348" transform="translate(-39.568 -61.238)"></path>
                </g>
            </g>
        </symbol>

        <symbol id="ico-premium" viewBox="0 0 93.5 24">
			<circle cx="14.9" cy="12" r="7.5" fill="#ffd200"/><path d="M82.5 8.7c-.5-.5-1.3-.8-2-.8-.9 0-1.8.3-2.4 1l-.2-.2c-.2-.3-.5-.4-.9-.6-.4-.1-.7-.2-1.1-.2-.9 0-1.8.3-2.4 1v-.8h-1.7v7.4h1.9v-4.8a1.78 1.78 0 0 1 1.6-1c.4 0 .8.1 1.1.4s.4.7.4 1.1v4.3h1.9V11c0-.2 0-.5-.1-.7.4-.4.9-.6 1.4-.6a1.27 1.27 0 0 1 1.4 1.2v.2 4.3h1.9V11c.1-.9-.2-1.7-.8-2.3zm-16.8-.6v4.3c-.1.7.4 1.4 1.2 1.5h.2a1.78 1.78 0 0 0 1.6-1V8.1h1.9v7.4h-1.7v-.8c-.6.7-1.5 1-2.4 1-.7 0-1.5-.3-2-.8-.6-.6-.9-1.4-.8-2.3V8.1h2zm-7.4.6c-.5-.5-1.3-.8-2-.8-.9 0-1.8.3-2.4 1l-.2-.2c-.2-.3-.5-.4-.9-.6-.4-.1-.7-.2-1.1-.2-.9 0-1.8.3-2.4 1v-.8h-1.7v7.4h1.9v-4.8a1.78 1.78 0 0 1 1.6-1c.4 0 .8.1 1.1.4s.4.7.4 1.1v4.3h1.9V11c0-.2 0-.5-.1-.7.3-.4.8-.6 1.3-.6a1.27 1.27 0 0 1 1.4 1.2v.2 4.3H59V11c.2-.9-.1-1.7-.7-2.3zm-15.5 7c-2.2.1-4-1.6-4-3.8-.1-2.2 1.6-4 3.8-4h.1c2.1 0 3.8 1.7 3.8 3.7v.2c0 .3 0 .5-.1.8h0-5.5c.3.9 1.1 1.4 2 1.3.6 0 1.1-.2 1.6-.6l1.6.9c-.9 1-2.1 1.6-3.3 1.5zm1.6-4.6c-.2-.9-.9-1.5-1.8-1.4-.9-.1-1.7.6-1.9 1.4h3.7zm-15-3.2c-.9 0-1.7.4-2.2 1.1v-.9h-1.8v9.8h1.9v-3.1c.5.6 1.3.9 2.1.9 1 0 1.9-.4 2.5-1.1a4.26 4.26 0 0 0 0-5.6c-.6-.7-1.5-1.1-2.5-1.1zm1.7 3.9c.1 1.1-.7 2-1.8 2.1h-.2c-.7 0-1.4-.4-1.7-1v-2.2c.4-.6 1-1 1.7-1 1.1 0 2 .8 2 1.9v.2zM39 8.1c-.4-.1-.8-.2-1.2-.2-.8 0-1.6.5-2 1.2v-1H34v7.4h1.9v-4.8c.3-.6 1-1 1.6-1h.4 0 0c.3-.6.7-1.1 1.1-1.6h0 0zm22.4-3.6c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2-.1-.6.5-1.2 1.2-1.2zm-1 3.6h1.9v7.4h-1.9V8.1z" fill="#fff"/>
		</symbol>

        
        
			<symbol id="ico-gossip" viewBox="0 0 27 22"> <path d="M261.488,257.952h-3.934v-2.771a3.3,3.3,0,0,0-3.3-3.3H240.09a3.3,3.3,0,0,0-3.3,3.3v9.207a3.3,3.3,0,0,0,3.3,3.3h1.324v2.878a.765.765,0,0,0,.436.688.76.76,0,0,0,.8-.09l4.43-2.914v.065a2.839,2.839,0,0,0,2.836,2.833h5.965l3.425,2.8a.761.761,0,0,0,1.244-.589v-2.213h.943a2.839,2.839,0,0,0,2.835-2.836v-7.524A2.839,2.839,0,0,0,261.488,257.952Zm-14.412,2.836v5.564l-4.14,2.679v-2.1a.762.762,0,0,0-.761-.761H240.09a1.779,1.779,0,0,1-1.777-1.777v-9.207a1.779,1.779,0,0,1,1.777-1.777h14.165a1.779,1.779,0,0,1,1.777,1.777v2.771h-6.12A2.839,2.839,0,0,0,247.076,260.788Zm8.956-1.313v5.379a1.387,1.387,0,0,1-1.387,1.387H248.6v-5.379a1.387,1.387,0,0,1,1.387-1.387h6.047Zm6.769,8.837a1.314,1.314,0,0,1-1.313,1.313h-1.7a.762.762,0,0,0-.761.761v1.368L256.63,269.8a.765.765,0,0,0-.482-.171h-6.236a1.315,1.315,0,0,1-1.313-1.311v-.627h5.657a3.3,3.3,0,0,0,3.3-3.3v-4.913h3.934a1.315,1.315,0,0,1,1.313,1.313Z" transform="translate(-236.791 -251.881)"/> </symbol>
		
			<symbol id="ico-wideo" viewBox="0 0 17 18"> <g transform="translate(20 -2.181) rotate(90)" fill="none"> <path d="M8.9,4.523a3,3,0,0,1,5.2,0L20.415,15.5a3,3,0,0,1-2.6,4.5H5.186a3,3,0,0,1-2.6-4.5Z" stroke="none"/> <path d="M 11.5 4.618406295776367 C 11.2564697265625 4.618406295776367 10.65071964263916 4.686826705932617 10.2863302230835 5.320537567138672 L 3.97191047668457 16.30213737487793 C 3.60862922668457 16.93392753601074 3.852190017700195 17.49091720581055 3.973770141601562 17.7010669708252 C 4.095340728759766 17.91121673583984 4.45680046081543 18.39999771118164 5.185579299926758 18.39999771118164 L 17.81442070007324 18.39999771118164 C 18.54319953918457 18.39999771118164 18.90465927124023 17.91121673583984 19.02622985839844 17.7010669708252 C 19.1478099822998 17.49091720581055 19.39137077331543 16.93392753601074 19.02808952331543 16.30213737487793 L 12.7136697769165 5.320537567138672 C 12.34928035736084 4.686826705932617 11.7435302734375 4.618406295776367 11.5 4.618406295776367 M 11.5 3.018404006958008 C 12.5119800567627 3.018404006958008 13.52396011352539 3.519931793212891 14.10072040557861 4.522987365722656 L 20.41514015197754 15.50458717346191 C 21.56513023376465 17.50457763671875 20.12146949768066 19.99999618530273 17.81442070007324 19.99999618530273 L 5.185579299926758 19.99999618530273 C 2.878530502319336 19.99999618530273 1.434869766235352 17.50457763671875 2.584859848022461 15.50458717346191 L 8.899279594421387 4.522987365722656 C 9.476039886474609 3.519931793212891 10.4880199432373 3.018404006958008 11.5 3.018404006958008 Z" stroke="none" fill="currentColor"/> </g> </symbol>
		
			<symbol id="ico-money" viewBox="0 0 21 17"> <path d="M522.543,241.411v-2.779a.763.763,0,0,0-.764-.764H504.323a.546.546,0,0,1,0-1.091h16.585V235.25H504.322a2.05,2.05,0,0,0-2.072,2.073v12.656a2.051,2.051,0,0,0,2.073,2.073h17.457a.763.763,0,0,0,.764-.764v-3.553a2.068,2.068,0,0,0,.873-1.684V242.56A1.2,1.2,0,0,0,522.543,241.411Zm-.655,1.99v2.651a.546.546,0,0,1-.546.546h-4.8a1.418,1.418,0,1,1,0-2.837h4.364A1.638,1.638,0,0,0,521.889,243.4Zm-17.566,7.124a.522.522,0,0,1-.546-.546V239.326a2.147,2.147,0,0,0,.546.07h16.693v2.716a.336.336,0,0,1-.109.121h-4.364a2.946,2.946,0,1,0,0,5.892h4.473v2.4Z" transform="translate(-502.25 -235.25)"/> </symbol>
		
			<symbol id="ico-newspaper" width="24.939" height="19.9" viewBox="0 0 24.939 23.9"> <g transform="translate(0 0)"> <rect width="5.954" height="1.445" transform="translate(15.71 9.097)" fill="#1e1e1e"/> <rect width="5.954" height="1.445" transform="translate(15.71 6.092)" fill="#1e1e1e"/> <rect width="5.954" height="1.445" transform="translate(15.71 3.085)" fill="#1e1e1e"/> <g transform="translate(0 0)"> <g transform="translate(0 0)"> <path d="M4.639,0V16.884a1.6,1.6,0,0,1-3.194,0V3.43A.723.723,0,1,0,0,3.43V16.884A3.068,3.068,0,0,0,3.038,19.9a1.074,1.074,0,0,0,.146-.006.758.758,0,0,0,.1.006H22.146a2.806,2.806,0,0,0,2.793-2.812V0ZM22.146,18.455H5.624a2.94,2.94,0,0,0,.461-1.571V1.445H23.494V17.089a1.375,1.375,0,0,1-1.347,1.366" fill="#1e1e1e"/> <rect width="13.987" height="1.445" transform="translate(7.677 12.243)" fill="#1e1e1e"/> <rect width="13.987" height="1.445" transform="translate(7.677 15.249)" fill="#1e1e1e"/> <path d="M16.536,4.038H9.669V5.483h5.421v4.526H11.114V6.52H9.669v4.933h6.867Z" transform="translate(-1.992 -0.832)" fill="#1e1e1e"/> </g> </g> </g> </symbol>
		
			<symbol id="ico-pool2023"  width="27.507" height="20.29" viewBox="0 0 27.507 20.29">  <path  d="M4.424,13.038l3.258-.008-.352,2L3,15.043Zm15.613-.073,3.108-.008,1.4,1.976-4.856.02ZM11.23,1.785l8.936,1.576-2.046,11.6L8.9,15.018ZM9.98,0,7.954,11.488,3.626,11.5l-3.6,5.065H.02v.008L0,16.6H.02V20.29H1.775v-3.7l23.963-.125v3.7h1.755V16.455h.014l-3.568-5.043-3.631.011,1.642-9.312Z"/></symbol>
		
    </defs>
</svg>
        <aside id="onet-ad-flat-belkagorna" data-autoslot="0">
            
        </aside>
        <style>#onet-ad-flat-belkagorna:before { content: ''; display: table; padding-top: 7.8125%; width:0; float: left} #onet-ad-flat-belkagorna:after {content: '';display: table;clear: both;}</style><script>(function (o,t,e,r,s){function d(){if(c||!l.meta||"tag"===l.meta.server||l.data&&l.data.meta&&l.data.meta.height){if(!t){var e=document.getElementById(l.id);if(!e)return void console.warn("BackRequest warning: ad container's expected id = "+l.id);e.className+=" dlapi-placeholder"}e=window.onetAds||window.dlApi;e?(e.cmd=e.cmd||[],e.cmd.push(function(a){function e(){if(r)return(t=a.defineSlot(l.slot,l.id)).setCollapseEmpty(!0),t.setProperty("backRender",!0),a.fetch();var t,e={};if((t=a.defineSlot(l.slot,l.id,{ir:a.prepareUniqueId()})).setProperty("backRender",!0),a.toFetch=a.toFetch.filter(function(e){return e!==t}),c)return t.noAd(),e={adserver:"das",slot:l.slot,type:"unfilled"},n(e);var d=a.defineAd(l.adid,t,l.type,l.html,l.js,l.data.meta.width,l.data.meta.height,l.data,l.meta,l.prio,void 0,l.gctx,l.lctx);d.prepareContainer(),t.registerAd(d),a.addLazyAd(d),e={adid:l.adid,adserver:"das",body:o,slot:l.slot,status:200,type:"filled"},n(e)}var t,d,i,n=function(e){var t={adsSlots:{}};t.adsSlots[l.id]=[e],a.fire("backendEmission",t)};a.isReady?e():a.on("onready",function(){e()}),t=s,d=l.id,(i=document.getElementById(d+"-fallback-styles"))||((i=document.createElement("style")).setAttribute("id",d+"-fallback-styles"),document.head.appendChild(i)),i.innerHTML=t})):console.warn("BackRequest warning: dlApi or oneAds object expected. adBody.id= "+l.id)}else console.warn("BackRequest warning: missing height in data.meta section")}var l=JSON.parse(o),c="empty"===l.type;e?d():(window.dlApiBackendRequesting=window.dlApiBackendRequesting||{},window.dlApiBackendRequesting[l.id]=d)}
)('{\"lctx\":\"eJyNUttO4zAQ_Re_klBfcqGVeAjdgkDbmxZeeIncZIi8de3UdgsU8e87IQiK2JX2xdLMOZ45Z2ZeyErVpZMByIif8lxQJkTO8zRNch6RSratMg0ZkVr6iKVZKoZnEUsSShB0IIPaQ6lqJKQiG2Zf0l4dsCphQ06f8vQLom1A5EHLEK9Ar2VjnZHHjD04r6xBEqc8iSmLBbtlYsTpiNIT2r1Ir0HqvjujaXKWYQp8UBu0g6ZgD2aHCugppfybtQfstHNdpypYhyXg5hAObnJTjIvpRT1pLpu8Kcbr-noQFvcwLSY27JPLdFDNpv7n1Xy93c4HTws13z5WRTH-fcWWc7ExtoA7P8SEvZ4tfyyL9Wp2Ul2MH8_PUZzyJWjVqJVGWcHtICJaGVABNu82-gmTo_z_TaJ1qoISX-tUeC49dPP1wVlcXkQ8OCzTb7EL_zX-DuiFWAMhlnX8F86zR1mftd7C_tPxjXycQ2h1Wdn67RLyJONMDH611ngUapr4zqjOoNTk9Q8eR8mK\",\"gctx\":\"eJw9jktuwzAMRO_CtRFbTRsDukpRCGxEt4KsDyg2glLk7qG76I6YmYfHX0DvMkkvHMGCWV8vL-YMEyATasDlzqNH1OSaBayZwNMtXMnJqKQDTy1KqdrTjbI4CYmaYKq6XZf1zSzmolBoLpXPsCuy4d5ogkhDpb6BfQf54dFk_Gn-jR9600ZMrJpvkdrsPPfeTxtGOdV97sMj3ymHA2v0lQ4_Y_YlgT0vmgU5XmRs1R0QPJ4YCFEH\",\"type\":\"tpl\",\"body\":\"\",\"adid\":\"das,1565398,536960\",\"slot\":\"flat-belkagorna\",\"width\":\"1920\",\"height\":\"150\",\"html\":\"\",\"js\":\"\",\"id\":\"onet-ad-flat-belkagorna\",\"prio\":10,\"data\":{\"fields\":{\"actionCountCollapse\":null,\"actionCountExpand\":null,\"collapseButton\":\"https://ocdn.eu/lps/1746213/creative/000/000536/000536960/HVOD_10zl_30dni_Ugotowani_w_parach_022023_zwin%20200x65.png\",\"collapsedClick\":\"https://ad.doubleclick.net/ddm/trackclk/N8765.127443ONET.PL/B27267418.344457809;dc_trk_aid=536020163;dc_trk_cid=207141794;epi=onet;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1\",\"collapsedImage\":\"https://ocdn.eu/lps/1746213/creative/000/000536/000536960/HVOD_10zl_30dni_Krolowa_przetrwania_122023_1920x150.jpg\",\"expandButton\":\"https://ocdn.eu/lps/1746213/creative/000/000536/000536960/HVOD_10zl_30dni_Ugotowani_w_parach_022023_rozwin%20200x65.png\",\"expandedClick1\":\"https://ad.doubleclick.net/ddm/trackclk/N8765.127443ONET.PL/B27267418.344457809;dc_trk_aid=536020163;dc_trk_cid=207478414;epi=onet;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1\",\"expandedHtml\":null,\"expandedImage\":\"https://ocdn.eu/lps/1746213/creative/000/000536/000536960/HVOD_10zl_30dni_Krolowa_przetrwania_122023_1920x500.jpg\",\"gde_fastid\":null,\"gde_id\":null,\"gde_inscreen\":null,\"gde_stparam\":null,\"gde_subdomena\":\"onet\",\"impression1\":\"https://ad.doubleclick.net/ddm/trackimp/N8765.127443ONET.PL/B27267418.344457809;dc_trk_aid=536020163;dc_trk_cid=207478414;epi=onet;ord=1707510161;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=0;gdpr_consent=;ltd=;dc_tdv=1?\",\"impression2\":null,\"impressionActiveview\":null,\"impressionJs\":\"\",\"infoText\":\"SPONSOR SERWISU\",\"infoTextBackground\":\"#02ddff\",\"infoTextColor\":\"#000\",\"infoTextShow\":\"text-all\",\"screeningClick\":null,\"screeningImage\":null,\"separator\":null,\"stickyClick\":\"https://ad.doubleclick.net/ddm/trackclk/N8765.127443ONET.PL/B27267418.344457809;dc_trk_aid=536020163;dc_trk_cid=207478414;epi=onet;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1\",\"stickyImage\":\"https://ocdn.eu/lps/1746213/creative/000/000536/000536960/HVOD_10zl_30dni_Krolowa_przetrwania_122023_1920x75.jpg\"},\"meta\":{\"actioncount\":\"https://csr.onet.pl/eclk/das,1565398,536960/IP=202402092122417205536073/IV=202402092122417205536073/IR=202402092122417205751069/GCTX=eJyrVsouL0pRslIqKS2qLC6pzE7ULsqvKqosz05U0lHKScwqAcoZAJl5BYlQVnFqenxRYh5IkzGYX5wDZBoq1QIAzWYXUg/SLOT=flat-belkagorna/NID=1746213/S=RASP_FAKT/A=ROZRYWKA/SID=onet-ad-flat-belkagorna/DID=105486/\",\"adclick\":\"https://csr.onet.pl/1746213/clk/das,1565398,536960?gctx=eJydUstu4jAU_RdvIcV2EjJE6iK8KkppeJXRdBOZxERugg22eVb997lGVTedmcVsnHvPOfedd5SgGM3T1_mvn-MENVF3jmJ6RyMfE9-PaBSGQUSbqLd4Speg3NTMemteV6xUWjII6I_6KCY4DH60m2g0BQ3FNMAUdyihNCARxWHot3Hkg3g0_yMfhQS3O45f_Tt-vKpOugCNPeiLsZeKNbS66supYje2Zm8WWHxz5I592YaXmWbShfqfiKnBIWAv3AaSxTQbJuOl8wfz1cA1WjDjXDcgUpJbjxXe9wX8dTOsOHJtheE6E1CYtjtNlGue5UpuRHnQzAolM9AY-H7O7WHi-WRJ_JjiGOMGdi_k4saKLbO8yDQ_cnngKMZ3GNNvh-Jnq1lWHQ2K39Faq5MrXzNZHlgJQYhLyLZl8rBhOSyRa8AWO1GA8dFEG84cCE3lVjmKP17tVQ8ek14y6RaDclhGZdKrilHLTl_5JBkoewyGYSt_npinh7Ta79PWeSrS_SlPkt7bA5ml_laqhL-YDgBq9Dzrz5Jq_dzIu73T_T00U4v_2shOi5xn8Cot7CUz3B3eWK1kCawRVzct6VB8jkIHwO_Ct19HtbsaqhY3TRS0KfFbi52SBpLJ0nuRwjXBavTxG2c67Nc&at=1707510161&uuid=6e4e36916ead31f9902772c3a6f42bc3&URL=\",\"adid\":\"das,1565398,536960\",\"autoscale\":1,\"container_wrapper\":\"\",\"height\":\"150\",\"inIFrame\":false,\"slot\":\"flat-belkagorna\",\"width\":\"1920\"},\"tplCode\":\"1746213/Sponsoring-Universal\",\"tplPath\":\"tpl/cf006f28497b3dad6ec60fa8b9e8b6c9.js\"},\"meta\":{\"server\":\"das\",\"async_render\":false,\"mailing_meta\":null,\"set_slot_size\":true,\"viewability_cfg\":null,\"async_viewability\":true,\"viewability\":1},\"bid_rate\":2.273013372755472}',false,true,true,"#onet-ad-flat-belkagorna:before { content: ''; display: table; padding-top: 7.8125%; width:0; float: left} #onet-ad-flat-belkagorna:after {content: '';display: table;clear: both;}")</script>
        

<div data-screening-sticky-start="1" style="position: fixed; top: 0; left: 0;"></div>

<header class="header">
    <div class="header-wrapper">
        
            <div class="header-logo" data-section="header-logo">
                <a href="/" class="header-logo-link">
                    <picture>
                        
                        <img class="header-logo-img" src="https://ocdn.eu/faktucs/fakt_pl/fakt_logo.svg" width="97" height="77" alt="Fakt.pl">
                    </picture>
                </a>
            </div>
        
        <div class="header-right">
            <div class="header-first-line">
                
                <div class="header-first-line-item date">
                    Piątek, 9 lutego 2024r.
                </div>
                <div class="header-first-line-item weather">
                    <a class="header-weather-link" data-section="weather" href="https://pogoda.onet.pl/?utm_source=fakt&utm_medium=menu" target="blank">
                        <svg width="20" height="20" class="header-weather-icon">
                            <use xlink:href="#ico-weather"></use>
                        </svg>
                        więcej &raquo;
                    </a>
                </div>
                <div class="header-first-line-item social">
                    ZNAJDŹ NAS:
                    
                        <a class="facebook ico-social" data-section="find-us-facebook" href="https://www.facebook.com/fakt24pl/" target="_blank" aria-label="icon Facebook">
                            <svg class="share-element" viewBox="0 0 28 28">
                                <use xlink:href="#ico-facebook"></use>
                            </svg>
                        </a>
                    
                        <a class="twitter ico-social" data-section="find-us-twitter" href="https://twitter.com/FAKT24PL" target="_blank" aria-label="icon Twitter">
                            <svg class="share-element" viewBox="0 0 28 28">
                                <use xlink:href="#ico-twitter"></use>
                            </svg>
                        </a>
                    
                        <a class="youtube ico-social" data-section="find-us-youtube" href="https://www.youtube.com/user/eFaktPL" target="_blank" aria-label="icon Youtube">
                            <svg class="share-element" viewBox="0 0 28 28">
                                <use xlink:href="#ico-yt"></use>
                            </svg>
                        </a>
                    
                        <a class="instagram ico-social" data-section="find-us-instagram" href="https://www.instagram.com/fakt24.pl/" target="_blank" aria-label="icon Instagram">
                            <svg class="share-element" viewBox="0 0 28 28">
                                <use xlink:href="#ico-instagram"></use>
                            </svg>
                        </a>
                    
                </div>
            </div>
            <nav class="menu-top topMenu">
                <ul class="mainlevel menu-list">
                    
                    
                    <li class="menu-first-level-item cat-wydarzenia">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="/wydarzenia">
                            Wydarzenia
                            
                                <span class="menu-first-level-arrow"></span>
                            
                        </a>
                        
                            <div class="menu-second-level-container">
                                <ul data-section="menu-second-level" class="menu-second-level">
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska">Polska</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/swiat">Świat</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/bialystok">Białystok</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/krakow">Kraków</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/lublin">Lublin</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/lodz">Łódź</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/poznan">Poznań</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/rzeszow">Rzeszów</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/trojmiasto">Trójmiasto</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/slask">Śląsk</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/szczecin">Szczecin</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/wroclaw">Wrocław</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/polska/warszawa">Warszawa</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/wydarzenia/pogoda">Pogoda</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        
                    </li>
                    
                    
                    <li class="menu-first-level-item cat-polityka">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="/polityka">
                            Polityka
                            
                        </a>
                        
                    </li>
                    
                    
                    <li class="menu-first-level-item cat-">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="https://ludzie.fakt.pl/">
                            Plotki
                            
                                <span class="menu-first-level-arrow"></span>
                            
                        </a>
                        
                            <div class="menu-second-level-container">
                                <ul data-section="menu-second-level" class="menu-second-level">
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/plotki">Więcej plotek</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://ludzie.fakt.pl/seriale">Seriale</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://ludzie.fakt.pl/polscy-celebryci">Polscy celebryci</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://ludzie.fakt.pl/zagraniczni-celebryci">Zagraniczni celebryci</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://ludzie.fakt.pl/rodzina-krolewska">Rodzina królewska</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://ludzie.fakt.pl/wags">WAGS</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://ludzie.fakt.pl/historie-milosci">Historie miłości</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://ludzie.fakt.pl/tiktok-instagram">Instagram</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://ludzie.fakt.pl/zbrodnie-z-przeszlosci">Zbrodnie</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        
                    </li>
                    
                    
                    <li class="menu-first-level-item cat-pieniadze">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="/pieniadze">
                            Pieniądze
                            
                                <span class="menu-first-level-arrow"></span>
                            
                        </a>
                        
                            <div class="menu-second-level-container">
                                <ul data-section="menu-second-level" class="menu-second-level">
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/pieniadze/finanse">Finanse osobiste</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/pieniadze/prawo">Masz prawo</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/pieniadze/zakupy">Zakupy</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/pieniadze/rodzina">Rodzina</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        
                    </li>
                    
                    
                    <li class="menu-first-level-item cat-">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="https://sport.fakt.pl/">
                            Sport
                            
                                <span class="menu-first-level-arrow"></span>
                            
                        </a>
                        
                            <div class="menu-second-level-container">
                                <ul data-section="menu-second-level" class="menu-second-level">
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://sport.fakt.pl/pilka-nozna">Piłka nożna</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://sport.fakt.pl/skoki-narciarskie">Skoki narciarskie</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://sport.fakt.pl/siatkowka">Siatkówka</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://sport.fakt.pl/sporty-walki">Sporty walki</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://sport.fakt.pl/inne-sporty">Inne sporty</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        
                    </li>
                    
                    
                    <li class="menu-first-level-item cat-hobby active">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="/hobby">
                            Hobby
                            
                                <span class="menu-first-level-arrow"></span>
                            
                        </a>
                        
                            <div class="menu-second-level-container">
                                <ul data-section="menu-second-level" class="menu-second-level">
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/facet">Facet</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kobieta">Kobieta</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kodyrabatowe/podkategorie/dom-i-ogrod">Dom i Ogród</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/hobby/filmy">Filmy</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/hobby/gry">Gry</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/hobby/historia">Historia</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/hobby/ksiazki">Książki</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="https://kuchnia.fakt.pl/">Kuchnia</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/pieniadze/motoryzacja">Motoryzacja</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/hobby/muzyka">Muzyka</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem active">
                                        <a class="menu-second-level-link" href="/hobby/turystyka">Turystyka</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        
                    </li>
                    
                    
                    <li class="menu-first-level-item cat-zdrowie">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="/zdrowie">
                            Zdrowie
                            
                                <span class="menu-first-level-arrow"></span>
                            
                        </a>
                        
                            <div class="menu-second-level-container">
                                <ul data-section="menu-second-level" class="menu-second-level">
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kobieta/zdrowie-i-fitness">Fitness</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/zdrowie/dieta">Dieta</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        
                    </li>
                    
                    
                    <li class="menu-first-level-item cat-kodyrabatowe">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="/kodyrabatowe">
                            Rabaty
                            
                                <span class="menu-first-level-arrow"></span>
                            
                        </a>
                        
                            <div class="menu-second-level-container">
                                <ul data-section="menu-second-level" class="menu-second-level">
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kodyrabatowe/black-red-white?utm_source=fakt&amp;utm_medium=navi&amp;utm_campaign=brw">Black Red White</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kodyrabatowe/eobuwie?utm_source=fakt&amp;utm_medium=navi&amp;utm_campaign=eobuwie">E-obuwie</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kodyrabatowe/guess?utm_source=fakt&amp;utm_medium=navi&amp;utm_campaign=guess">GUESS</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kodyrabatowe/leroy-merlin?utm_source=fakt&amp;utm_medium=navi&amp;utm_campaign=leroymerlin">Leroy Merlin</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kodyrabatowe/lidl?utm_source=fakt&amp;utm_medium=navi&amp;utm_campaign=lidl">Lidl</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kodyrabatowe/link4?utm_source=fakt&amp;utm_medium=navi&amp;utm_campaign=link4">Link4</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kodyrabatowe/modivo?utm_source=fakt&amp;utm_medium=navi&amp;utm_campaign=modivo">Modivo</a>
                                    </li>
                                    
                                    
                                    <li class="menu-second-level-elem ">
                                        <a class="menu-second-level-link" href="/kodyrabatowe/obi?utm_source=fakt&amp;utm_medium=navi&amp;utm_campaign=obi">OBI</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        
                    </li>
                    
                    
                    <li class="menu-first-level-item cat-quiz">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="/quiz">
                            Quizy
                            
                        </a>
                        
                    </li>
                    
                    
                    <li class="menu-first-level-item cat-horoskop">
                        <a data-section="menu-first-level" class="menu-first-level-link" href="/horoskop">
                            Horoskopy
                            
                        </a>
                        
                    </li>
                    
                </ul>

                <div class="header-links">
                    <div class="loginbar-icon">
  <button id="loginBar" class="loginbar-icon-people" aria-label="Login button">
      <svg viewBox="0 0 18.783 17.699">
        <use xlink:href="#ico-loginbar-profile"></use>
      </svg>
  </button>
</div>
<script>
  function loadScript(src, callback) {
    let s,r,t;
    r = false;
    s = document.createElement('script');
    s.async = true;
    s.src = src;
    s.onload = s.onreadystatechange = () => {
      if (!r && (!this.readyState || this.readyState == 'complete')){
        r = true;
        callback();
      }
    };
    t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
  }

  window.addEventListener('load', function() {
    var style = document.createElement('link');
    style.href = 'https://ocdn.eu/faktucs/loginbar/5_2_1_loginbar.css';
    style.type = 'text/css';
    style.rel = 'preload';
    style.as = 'style';
    style.onload = function() {
        this.onload = null;
        this.rel = 'stylesheet';
    };
    document.head.appendChild(style);
    loadScript('https://ocdn.eu/faktucs/loginbar/5_2_1_loginbar.js', () => {
      const domElement = document.getElementById('loginBar');
      const loginBar = new LoginBarSdk('https://www.fakt.pl', 'www.fakt.pl.okonto.front.onetapi.pl', false, false, false, true);
      loginBar.setConfiguration({
        initElement: 'avatar',
        defaultAvatarSvg: '<svg viewBox="0 0 18 20"><use xlink:href="#ico-login"></use></svg>',
        modal: {
          logo: 'https://ocdn.eu/faktucs/fakt_pl/fakt_logo.svg',
          links: [
            { icon: 'letter', text: 'Półka wydań PDF', url: 'https://www.fakt.pl/lista-wydan', class: 'full-width bold'},
            { icon: 'letter', text: 'Ustawienia subskrypcji', url: 'https://konto.onet.pl/subscriptions', class: 'full-width bold'},
            { icon: null, text: 'Regulamin', url: 'https://www.fakt.pl/informacyjne/regulamin-korzystania-z-serwisu-fakt24pl/kfntqnx', class: 'half-width centered'},
            { icon: null, text: 'Kontakt', url: 'https://www.fakt.pl/informacyjne/kontakt/ghzdbwk', class: 'half-width centered'},
            { icon: null, text: 'Wyloguj się', url: '', class: 'full-width centered bold', id:'logout'}
          ]
        }
      });
      loginBar.init(domElement);
    });
  });
</script>
                    
                        <a class="header-links-item header-link-shop" data-section="header-link-shop" href="https://literia.pl/literia-poleca/biblioteka-faktu/" aria-label="icon Shop">
                            <svg viewBox="0 0 20 20">
                                <use xlink:href="#ico-trolley"></use>
                            </svg>
                        </a>
                    
                        <a class="header-links-item header-link-gratka" data-section="header-link-gratka" href="https://gratka.pl/?utm_source=rasp&amp;utm_medium=fakt-header-icon&amp;utm_campaign=fakt-icon" aria-label="icon Gratka">
                            <svg viewBox="0 0 20 20">
                                <use xlink:href="#ico-gratka"></use>
                            </svg>
                        </a>
                    
                        <a class="header-links-item header-link-search" data-section="header-link-search" href="/szukaj" aria-label="icon Search">
                            <svg viewBox="0 0 20 20">
                                <use xlink:href="#ico-search"></use>
                            </svg>
                        </a>
                    
                </div>
            </nav>
        </div>
    </div>
    <div class="header-search">
    <form action="/szukaj" method="get" class="header-search-form">
        <label for="inpsearch"></label>
        <input type="text" id="inpsearch" class="header-search-input" placeholder="Szukaj w serwisie..." name="q">
        <button type="submit" class="header-search-submit">Szukaj</button>
    </form>
</div>
</header>
        
        

<div class="grid-container five-columns grid-base-system">
<!-- TODO: change class name "five-columns" (in fakt *.less) to generic "grid-base-system"-->
    
    
        <section class="main htmlbox   ">
            


        <script>window.__paywall_userSessionProxy = { endpoint: '/user-session-proxy' }</script>

        </section>
    
    
</div>
        <section class="wrapper">
            


    


<ul class="breadcrumbs" data-section="breadcrumbs">
    
    
        <li class="breadcrumbs-elem">
            <a class="breadcrumbs-link" href="https://www.fakt.pl/">Fakt</a>
        </li>
    
        <li class="breadcrumbs-elem">
            <a class="breadcrumbs-link" href="https://www.fakt.pl/hobby">Hobby</a>
        </li>
    
        <li class="breadcrumbs-elem">
            <a class="breadcrumbs-link" href="https://www.fakt.pl/hobby/turystyka">Turystyka</a>
        </li>
    
    
</ul>
        </section>
        <div class="tags grid-container five-columns grid-base-system">
            
              
                <aside class="col-start-2 row-start-1">
                    
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.floatingAd"
            data-configuration="{&quot;slotName&quot;:&quot;left-sky&quot;,&quot;position&quot;:&quot;1&quot;,&quot;slotsNumber&quot;:1,&quot;containerHeight&quot;:&quot;MAX&quot;}"
        ></aside>
    

                </aside>
                <aside class="col-start-2 row-start-3">
                    
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.floatingAd"
            data-configuration="{&quot;slotName&quot;:&quot;left-sky&quot;,&quot;position&quot;:&quot;2&quot;,&quot;floatingHeight&quot;:&quot;1500&quot;,&quot;containerHeight&quot;:&quot;MAX&quot;}"
        ></aside>
    

                </aside>
              
            
            <div class="main">
                
                    

                    
                    
                    
                        
                            <h1 class="section-title">Turystyka</h1>
                        
                    
                    
                
                
                
    


<div class="item-list lead" data-section="streamLead-items">
    
        
         
            
        
        
        <div data-section="streamLead-leadItem">
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/ostatnie-wakacje-w-zyciu-10-najniebezpieczniejszych-miast-swiata/e0hctby">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/gT5k9kuTURBXy8yOGNjZDZkZC02MDBhLTQyZWYtYWI3YS01N2UyZjhlOTNiYWEuanBlZ5KVAwAAzQnMzQWDkwXNA0jNAZ7eAAKhMAahMQE" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/DS9k9kuTURBXy8yOGNjZDZkZC02MDBhLTQyZWYtYWI3YS01N2UyZjhlOTNiYWEuanBlZ5OVAwAAzQnMzQWDkwXNA0jNAZ6TBc0DSM0Bnt4AAqEwBaExAQ" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Ostatnie wakacje w życiu? 10 najniebezpieczniejszych miast świata" width="840" height="414" src="https://ocdn.eu/pulscms-transforms/1/kDXk9kuTURBXy8yOGNjZDZkZC02MDBhLTQyZWYtYWI3YS01N2UyZjhlOTNiYWEuanBlZ5SVAwAAzQnMzQWDkwXNA0jNAZ6TBc0DSM0BnpMFzQNIzQGe3gACoTABoTEB">
            </picture>
            



    <div class="teaser-icons-bottom-right">
        <div class="teaser-icon gallery">
            <svg viewBox="0 0 14 14">
                <use xlink:href="#ico-gallery"></use>
            </svg>
        </div>
    </div>

        </div>
        
        <h2 class="list-item-title">Ostatnie wakacje w życiu? 10 najniebezpieczniejszych miast świata</h2>
        <p class="list-item-lead">Są miejsca na świecie, które mają teoretycznie wszystko, co potrzebne przeciętnemu turyście. Ciekawą historię, interesujące zabytki, plaże i restauracje, w których można zjeść coś dobrego. Niestety, są jednocześnie w czołówce najbardziej niebezpiecznych zakątków naszego globu. Ich listę publikuje regularnie numbeo.com, założony w 2009 r. przez serbskiego programistę Mladena Adamovica serwis, który dostarcza dane na temat poziomu życia na całym świecie. Wśród nich jest Crime Index, czyli Indeks Zbrodni. Prezentujemy 10 najbardziej niebezpiecznych miast. Chcesz tam jechać? Jedziesz na własne ryzyko!</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
        </div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/zoo-borysew-jedyny-w-europie-basen-bialych-tygrysow-bengalskich/b1b4e05">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/xPLk9kuTURBXy81ZmNhNGZkZS1kNTJlLTRjNTQtYmQ0Yy00MTZjMWU2MDRlMGUuanBlZ5KVAwAAzQOEzQH4kwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/tGYk9kuTURBXy81ZmNhNGZkZS1kNTJlLTRjNTQtYmQ0Yy00MTZjMWU2MDRlMGUuanBlZ5OVAwAAzQOEzQH4kwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Co tygrysy lubią najbardziej?
Tak wygląda tygrysi raj na Ziemi!" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/GOtk9kuTURBXy81ZmNhNGZkZS1kNTJlLTRjNTQtYmQ0Yy00MTZjMWU2MDRlMGUuanBlZ5SVAwAAzQOEzQH4kwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



    <div class="mPlayerIco-container">
        <svg class="ico-mplayer-large" viewBox="0 0 50 50">
            <path class="ico-mplayer-large_rectangle" fill="#e51513" d="M0 0h50v50H0z"/>
            <path fill="#fff" d="m16.074 38.039-.073-26.041 20 13.135Z"/>
        </svg>
    </div>

        </div>
        
        <h2 class="list-item-title">Co tygrysy lubią najbardziej?
Tak wygląda tygrysi raj na Ziemi!</h2>
        <p class="list-item-lead">Nie do wiary. Takie wielkie, a bawią się jak małe kociaki. Potężne białe tygrysy bengalskie z ZOO w Borysewie dostały basen i... od razu rzuciły się w wir wodnych szaleństw. Pływają, nurkują i wyskakują z wody, aby chwytać podrzucane im smakowite kąski, czy choćby kolorowe zabawki. To jedyny taki tygrysi basen w Europie i drugi na świecie.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/kalwarie-w-polsce-przed-wielkanoca-odbywa-sie-tam-misterium-meki-panskiej/xbjh6we">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/aqpk9kuTURBXy85ZDg2YmE4Yy1lNmQ1LTQ2NjctOTI1Yy00NjBhNjZkNDY1NmEuanBlZ5KVAwAAzRJVzQpSkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/gsKk9kuTURBXy85ZDg2YmE4Yy1lNmQ1LTQ2NjctOTI1Yy00NjBhNjZkNDY1NmEuanBlZ5OVAwAAzRJVzQpSkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Najpiękniejsze kalwarie w Polsce. Kiedy można wziąć tam udział w Misteriach Męki Pańskiej?" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/aZMk9kuTURBXy85ZDg2YmE4Yy1lNmQ1LTQ2NjctOTI1Yy00NjBhNjZkNDY1NmEuanBlZ5SVAwAAzRJVzQpSkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Najpiękniejsze kalwarie w Polsce. Kiedy można wziąć tam udział w Misteriach Męki Pańskiej?</h2>
        <p class="list-item-lead">Kalwaria to nic innego jak Golgota, czyli miejsce męki Chrystusa. To jednocześnie miejsce odzwierciedlające Jerozolimę, często przypominające topografią Święte Miasto. Zwykle na górzystym lub pagórkowatym terenie projektowano zespół kaplic symbolizujących stacje Męki Pańskiej.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
</div>


              </div>
              
              <section class="five-columns-wide">
                  
                    
    
        
        
        
        
        <aside
            class=" collapsed"
            
            data-run-module="local/main.commercialBreak"
            data-configuration="{&quot;slotName&quot;:&quot;layer&quot;,&quot;querySelector&quot;:&quot;.main a&quot;,&quot;blackList&quot;:[],&quot;extraData&quot;:{&quot;layer&quot;:{&quot;lazy&quot;:&quot;0&quot;}}}"
        ></aside>
    
        
        
        
        
        <aside
            class="placeholder screening floating wide top"
            
            data-run-module="local/main.simpleAd"
            data-configuration="{&quot;slotName&quot;:&quot;top&quot;}"
        ></aside>
    

                
              </section>
              
              <div class="main">
                
    


<div class="item-list" data-section="stream-items">
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/daktylowiec-kanaryjski-z-palmiarni-w-lodzi-przebije-sie-przez-dach/gmdcp80">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/fKKk9kuTURBXy8wNjNlMzdlNC1iN2E4LTRiMDgtYjAxMy1hNDRjZWM4NjE4MTQuanBlZ5KVAwAAzRonzQ67kwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/yD7k9kuTURBXy8wNjNlMzdlNC1iN2E4LTRiMDgtYjAxMy1hNDRjZWM4NjE4MTQuanBlZ5OVAwAAzRonzQ67kwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Strach w łódzkiej palmiarni. Jeszcze chwila i stanie się coś, czego wszyscy się boją. Pod szklanym dachem dzieją się rzeczy, które spędzają specjalistom sen z powiek" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/9MJk9kuTURBXy8wNjNlMzdlNC1iN2E4LTRiMDgtYjAxMy1hNDRjZWM4NjE4MTQuanBlZ5SVAwAAzRonzQ67kwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Strach w łódzkiej palmiarni. Jeszcze chwila i stanie się coś, czego wszyscy się boją. Pod szklanym dachem dzieją się rzeczy, które spędzają specjalistom sen z powiek</h2>
        <p class="list-item-lead">Jedna z najstarszych palm w Polsce (liczący ok. 150 lat daktylowiec kanaryjski) swoją koroną już niemal dotyka szklanego dachu łódzkiej palmiarni. Tylko patrzeć jak przebije się przez szybę. Opiekunowie starają się powstrzymać zapędy rośliny. Palma niemal osiągnęła swój maksymalny wiek, ale wciąż ma się świetnie i nadal rośnie. Przeniesienie jej nie wchodzi w grę, gdyż gigant zapuścił korzenie na głębokość nawet do 10 metrów. Jedynym ratunkiem dla cennego unikata byłoby zburzenie hali i wybudowanie nowej, ale z wyższym sklepieniem. Wszystko po to, by łódzki skarb nie podzielił losu &quot;kuzynki&quot; z Gdańska...</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/andrzej-maciata-ratownik-topr-o-lawinach-w-tatrach-i-rozsadku-w-gorach/9vlds8g">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/fuOk9kuTURBXy8yZWNlZWIyZi04NDdjLTQ4MDItOTJhNS00Y2VmZDc1N2Y3NzUuanBlZ5KVAwAAzQSNzQKPkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/dKuk9kuTURBXy8yZWNlZWIyZi04NDdjLTQ4MDItOTJhNS00Y2VmZDc1N2Y3NzUuanBlZ5OVAwAAzQSNzQKPkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Reanimowali dziewczynę wyciągniętą spod lawiny prawie siedem godzin... Ratownik TOPR opowiada o najtrudniejszej akcji życia" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/IoMk9kuTURBXy8yZWNlZWIyZi04NDdjLTQ4MDItOTJhNS00Y2VmZDc1N2Y3NzUuanBlZ5SVAwAAzQSNzQKPkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Reanimowali dziewczynę wyciągniętą spod lawiny prawie siedem godzin... Ratownik TOPR opowiada o najtrudniejszej akcji życia</h2>
        <p class="list-item-lead">— Uratowany człowiek i późniejsze podziękowanie to największa satysfakcja i premia — mówi Andrzej Maciata, ratownik TOPR, i dodaje: ratownictwo to przede wszystkim pasja. Gdyby nie pasja, to żaden z nas by nie pracował.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
            
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/snieg-i-wiatr-w-tatrach-jest-ostrzezenie-topr-z-zakopanego-lawiny/49ybqg2">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/TzWk9kuTURBXy9hNjFiZjJkYS04YTllLTQ2NTEtOTc4YS05OGY1OWZjNmI3OWUuanBlZ5KVAwAAzQPozQIykwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/Y_Pk9kuTURBXy9hNjFiZjJkYS04YTllLTQ2NTEtOTc4YS05OGY1OWZjNmI3OWUuanBlZ5OVAwAAzQPozQIykwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="PILNE! Najnowszy alert TOPR. To czwarty stopień zagrożenia lawinami w Tatrach. Lawina może zejść w każdej chwili. Gdzie jest najgroźniej?" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/CnWk9kuTURBXy9hNjFiZjJkYS04YTllLTQ2NTEtOTc4YS05OGY1OWZjNmI3OWUuanBlZ5SVAwAAzQPozQIykwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">PILNE! Najnowszy alert TOPR. To czwarty stopień zagrożenia lawinami w Tatrach. Lawina może zejść w każdej chwili. Gdzie jest najgroźniej?</h2>
        <p class="list-item-lead">Śnieg i wiatr w Tatrach. Jest najnowsze ostrzeżenie TOPR z Zakopanego. Lawiny mogą zejść nawet przy małym dodatkowym obciążeniu, a nawet samoistnie. — Prosimy o zaniechanie jakiejkolwiek działalności górskiej. Lawiny mogą osiągać z pozoru bezpieczne dna dolin. Prosimy pamiętać, że w obecnych warunkach, oczekiwanie na pomoc w górach może się znacznie wydłużyć!!! — brzmi komunikat Tatrzańskiego Ochotniczego Pogotowia Ratunkowego.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/leniwiec-z-orientarium-w-zoo-w-lodzi-ma-imie-sid-na-czesc-bohatera-filmu-epoka/xm7z4mj">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/LoXk9kuTURBXy81MmVkZmU5MS1jYWY0LTQ5MDktOGM2Yy05MGY4NDgzYTE2NGEuanBlZ5KVAwAAzQZmzQOXkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/-RZk9kuTURBXy81MmVkZmU5MS1jYWY0LTQ5MDktOGM2Yy05MGY4NDgzYTE2NGEuanBlZ5OVAwAAzQZmzQOXkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Leniwiec z Orientarium w zoo w Łodzi ma już imię. Pasuje do tego słodziaka? " width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/7SQk9kuTURBXy81MmVkZmU5MS1jYWY0LTQ5MDktOGM2Yy05MGY4NDgzYTE2NGEuanBlZ5SVAwAAzQZmzQOXkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Leniwiec z Orientarium w zoo w Łodzi ma już imię. Pasuje do tego słodziaka? </h2>
        <p class="list-item-lead">Proszę państwa! Oto Sid. Sid jest leniwcem i mieszka w Orientarium w zoo Łodzi. Sid ma już parę miesięcy, ale dopiero teraz dorósł do tego, by nadać mu imię i... decyzją internautów właśnie je dostał. Pasuje do tego słodziaka? Sami oceńcie.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/betlejem-w-zakoscielu-kolo-tomaszowa-mazowieckiego-na-boze-narodzenie-podroz-do/lkewe41">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/oz8k9kuTURBXy9hYjI2MmZkZi01NzgyLTQyYzktYTMzZi00ZmI4YjNjZDdhMjcuanBlZ5KVAwAAzRhazQ2zkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/DMkk9kuTURBXy9hYjI2MmZkZi01NzgyLTQyYzktYTMzZi00ZmI4YjNjZDdhMjcuanBlZ5OVAwAAzRhazQ2zkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Betlejem jest w Polsce - w Zakościelu koło Tomaszowa Mazowieckiego. Musisz sam przeżyć &quot;Podróż do Betlejem&quot; przed Bożym Narodzeniem. My tam byliśmy" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/iPVk9kuTURBXy9hYjI2MmZkZi01NzgyLTQyYzktYTMzZi00ZmI4YjNjZDdhMjcuanBlZ5SVAwAAzRhazQ2zkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Betlejem jest w Polsce - w Zakościelu koło Tomaszowa Mazowieckiego. Musisz sam przeżyć &quot;Podróż do Betlejem&quot; przed Bożym Narodzeniem. My tam byliśmy</h2>
        <p class="list-item-lead">Myślicie, że Betlejem jest na końcu świata? Otóż nie. Leży niemal dokładnie między Łodzią i Warszawą. W Zakościelu pod Tomaszowem Mazowieckim od dziesięciu lat w czasie przed Bożym Narodzeniem aż po Święto Trzech Króli można przeżyć wzruszającą &quot;Podróż do Betlejem&quot;.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/lodz-port-lotniczy-z-nowymi-polaczeniami-w-rozkladzie-jazdy-alicante-bruksela/tj0k36j">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/40ak9kuTURBXy9mZWExYzFjNi0xNmEyLTRjMjktOTc4OS0wNWZkNzA1ODZmOGYuanBlZ5KVAwAAzRUJzQvVkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/Y1nk9kuTURBXy9mZWExYzFjNi0xNmEyLTRjMjktOTc4OS0wNWZkNzA1ODZmOGYuanBlZ5OVAwAAzRUJzQvVkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Tłok na lotnisku w Łodzi. Tylu samolotów dawno tu nie było. W rozkładzie z Łódź Central Poland trzy nowe kierunki... Który jest dla ciebie?" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/8Kyk9kuTURBXy9mZWExYzFjNi0xNmEyLTRjMjktOTc4OS0wNWZkNzA1ODZmOGYuanBlZ5SVAwAAzRUJzQvVkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Tłok na lotnisku w Łodzi. Tylu samolotów dawno tu nie było. W rozkładzie z Łódź Central Poland trzy nowe kierunki... Który jest dla ciebie?</h2>
        <p class="list-item-lead">Na lotnisku w Łodzi tłok, jakiego dawno nie było. W rozkładzie lotów pojawiły się nowe kierunki do Alicante, Mediolanu. To największy w historii rozkład Ryanaira z łódzkiego lotniska, a już wkrótce na Lublinku wyląduje &quot;różowa landrynka. Od grudnia z Łodzi do Londynu latał będzie WizzAir.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/wyspa-wielkanocna-znane-posagi-glow-uszkodzone-w-pozarze/40efnlb">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/FPlk9kuTURBXy9hYTJjYmI0Yi0xNGIxLTRiNjgtOTk4Ny0yMjRkMTc1OWJjNWEuanBlZ5KVAwAAzQT5zQLLkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/Va7k9kuTURBXy9hYTJjYmI0Yi0xNGIxLTRiNjgtOTk4Ny0yMjRkMTc1OWJjNWEuanBlZ5OVAwAAzQT5zQLLkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Wielka strata dla światowego dziedzictwa kulturowego. Oto, co stało się ze słynnymi głowami z Wyspy Wielkanocnej" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/S5ck9kuTURBXy9hYTJjYmI0Yi0xNGIxLTRiNjgtOTk4Ny0yMjRkMTc1OWJjNWEuanBlZ5SVAwAAzQT5zQLLkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Wielka strata dla światowego dziedzictwa kulturowego. Oto, co stało się ze słynnymi głowami z Wyspy Wielkanocnej</h2>
        <p class="list-item-lead">Moai, czyli słynne wyrzeźbione w kamieniu posągi z Wyspy Wielkanocnej zostały uszkodzone w pożarze. Chilijskie władze twierdzą, że ogień dobrał się do struktury skały wulkanicznej, z której rdzenni Polinezyjczycy zamieszkujący wyspę, wyciosali monumenty. Kamienne twarze sprzed setek lat miały ulec dewastacji. Zostały zwęglone i mogły popękać od środka. Wszystko przez podpalacza.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/korfu-polka-na-wakacjach-trafila-na-zalany-podczas-burzy-hotel/3m23rrk">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/t_Dk9kuTURBXy9iZTYzMTQzMC0wODgxLTRiOTUtOTlmMi02OTgxZTI4MDg5OWIuanBlZ5KVAwAAzQyCzQcJkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/0HIk9kuTURBXy9iZTYzMTQzMC0wODgxLTRiOTUtOTlmMi02OTgxZTI4MDg5OWIuanBlZ5OVAwAAzQyCzQcJkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Koszmar Polki na wakacjach na Korfu. Wynajęty hotel był całkowicie zalany przez burzę. A to tylko początek problemów [WIDEO]" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/aIck9kuTURBXy9iZTYzMTQzMC0wODgxLTRiOTUtOTlmMi02OTgxZTI4MDg5OWIuanBlZ5SVAwAAzQyCzQcJkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Koszmar Polki na wakacjach na Korfu. Wynajęty hotel był całkowicie zalany przez burzę. A to tylko początek problemów [WIDEO]</h2>
        <p class="list-item-lead">Ola prowadzi bloga podróżniczego o nazwie Historian’s Journeys. Dzieli się na nim swoimi doświadczeniami z podróży do egzotycznych miejsc. Ostatnio odwiedziła wyspę Korfu, jednak, jak sama przyznaje, był to jej najgorszy pobyt typu &quot;all inclusive&quot; w życiu. Kobieta trafiła na bardzo niedogodny moment — jej hotel został całkowicie zalany w trakcie burzy. Na tym nie skończyły się problemy turystki. W zasadzie powódź była dopiero początkiem koszmaru...</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/tansze-wakacje-bon-turystyczny-mozna-wykorzystac-do-konca-wrzesnia/wec1s2p">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/qbZk9kuTURBXy8xMDZjY2JjNy1iNTk4LTRmMDgtYWE5Zi0wMTkyMTFjMzFkNWUuanBlZ5KVAwQAzRVTzQv_kwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/g78k9kuTURBXy8xMDZjY2JjNy1iNTk4LTRmMDgtYWE5Zi0wMTkyMTFjMzFkNWUuanBlZ5OVAwQAzRVTzQv_kwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Bon turystyczny. Sposób na tańsze wakacje" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/Egbk9kuTURBXy8xMDZjY2JjNy1iNTk4LTRmMDgtYWE5Zi0wMTkyMTFjMzFkNWUuanBlZ5SVAwQAzRVTzQv_kwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Bon turystyczny. Sposób na tańsze wakacje</h2>
        <p class="list-item-lead">Rosnące ceny niepokoją osoby planujące wakacje. Rodziny, które jeszcze nie wykorzystały bonu turystycznego, mogą dzięki niemu znacząco zmniejszyć wakacyjne wydatki. Na jedno dziecko przypada bon o wartości 500 zł, a na dziecko z orzeczoną niepełnosprawnością 1000 zł. - Za pieniądze z bonu turystycznego wybraliśmy się na trzy dni do Krynicy-Zdroju. Wjechaliśmy na Jaworzynę Krynicką, zwiedziliśmy Dom Zdrojowy i Górę Parkową — mówi Agnieszka Zań ze Stalowej Woli, matka trójki dzieci. Jak dodaje, pieniędzy z bonu starczyło jeszcze na częściowe sfinansowanie weekendowego wyjazdu do aquaparku w Kielcach. - To były dodatkowe wyjazdy, na które nie zdecydowalibyśmy się, gdyby nie było bonu turystycznego - mówi.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/bon-turystyczny-ostatni-dzwonek-by-skorzystac-z-dofinansowania/89mp7xm">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/QVxk9kuTURBXy83NjcwMzI1NS1jYTFjLTQxMGUtYTUwNi1hZWEwOWMwNDJjYjkuanBlZ5KVAwDM0s0T-80LPZMFzQGbzMreAAKhMAahMQE" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/7Upk9kuTURBXy83NjcwMzI1NS1jYTFjLTQxMGUtYTUwNi1hZWEwOWMwNDJjYjkuanBlZ5OVAwDM0s0T-80LPZMFzQGbzMqTBc0Bm8zK3gACoTAFoTEB" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Ostatni dzwonek, by skorzystać z bonu turystycznego!" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/tOqk9kuTURBXy83NjcwMzI1NS1jYTFjLTQxMGUtYTUwNi1hZWEwOWMwNDJjYjkuanBlZ5SVAwDM0s0T-80LPZMFzQGbzMqTBc0Bm8zKkwXNAZvMyt4AAqEwAaExAQ">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Ostatni dzwonek, by skorzystać z bonu turystycznego!</h2>
        <p class="list-item-lead">Rodzice i opiekunowie dzieci aktywowali ponad trzy i pół miliona bonów turystycznych na łączną kwotę prawie 2,5 mld zł. Wciąż jednak pozostało prawie 800 tysięcy bonów nieaktywnych lub wykorzystanych tylko w części. Ich ważność upływa 30 września tego roku.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/fakt-kocham-polske-ruszyl-letni-konkurs-faktu-kupuj-i-wygrywaj-codziennie/hgnzycc">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/MDOk9kuTURBXy81NjJkNTI1Mi03MmQ5LTQyOTQtOTMzOC1iMGY2ZWJkYjAyMDQuanBlZ5KVAwAAzQeAzQQ4kwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/_qSk9kuTURBXy81NjJkNTI1Mi03MmQ5LTQyOTQtOTMzOC1iMGY2ZWJkYjAyMDQuanBlZ5OVAwAAzQeAzQQ4kwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="&quot;FAKT. Kocham Polskę&quot;. Rusza wyjątkowy konkurs!" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/Zqxk9kuTURBXy81NjJkNTI1Mi03MmQ5LTQyOTQtOTMzOC1iMGY2ZWJkYjAyMDQuanBlZ5SVAwAAzQeAzQQ4kwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">&quot;FAKT. Kocham Polskę&quot;. Rusza wyjątkowy konkurs!</h2>
        <p class="list-item-lead">Od 1 sierpnia w FAKCIE cykl „FAKT. Kocham Polskę” - seria przewodników po Polsce.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/lodz-alek-rokosz-artysta-z-krakowa-wystawil-swoj-keloskop-w-palacu-poznanskiego/3eprx23">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/-tzk9kuTURBXy9jOWRlNDk4YS1mMGQzLTQ0MzMtODI0Yi04M2JjM2NkN2ZjZDUuanBlZ5KVAwAAzRYGzQxkkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/QDik9kuTURBXy9jOWRlNDk4YS1mMGQzLTQ0MzMtODI0Yi04M2JjM2NkN2ZjZDUuanBlZ5OVAwAAzRYGzQxkkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Keloskop stanął w ogrodzie Pałacu Poznańskiego w Łodzi. W tym zwierciadle zobaczysz inny świat. Kraków już czeka na to artystyczne lustro ze stali" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/jWVk9kuTURBXy9jOWRlNDk4YS1mMGQzLTQ0MzMtODI0Yi04M2JjM2NkN2ZjZDUuanBlZ5SVAwAAzRYGzQxkkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Keloskop stanął w ogrodzie Pałacu Poznańskiego w Łodzi. W tym zwierciadle zobaczysz inny świat. Kraków już czeka na to artystyczne lustro ze stali</h2>
        <p class="list-item-lead">Stał w Montellier we Francji na dziedzińcu miejscowej szkoły medycznej i odbijał średniowieczne musy w wyszlifowanej na lustro stalowej płycie. Na festiwalu nowej architektury dostał wyróżnienie i w drodze do rodzinnego Krakowa zajrzał do... Łodzi. Co to jest Keloskop i do czego służy? Kiedy spojrzycie na to dzieło sztuki...</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/muzeum-w-lodzi-mozna-zwiedzac-za-darmo-zwiedzajacy-dostaja-bezplatne-bilety/s428c9l">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/no5k9kuTURBXy81YTIyYjAzYy0yNWM0LTQxZWYtODBlYi05MWZjM2M0NTBhYzkuanBlZ5KVAwAAzRhDzQ2nkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/P8Rk9kuTURBXy81YTIyYjAzYy0yNWM0LTQxZWYtODBlYi05MWZjM2M0NTBhYzkuanBlZ5OVAwAAzRhDzQ2nkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Muzeum w Łodzi możesz zwiedzać za darmo. Wiedziałeś o tym? Sprawdź, kiedy dostaniesz bezpłatny bilet" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/eIbk9kuTURBXy81YTIyYjAzYy0yNWM0LTQxZWYtODBlYi05MWZjM2M0NTBhYzkuanBlZ5SVAwAAzRhDzQ2nkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Muzeum w Łodzi możesz zwiedzać za darmo. Wiedziałeś o tym? Sprawdź, kiedy dostaniesz bezpłatny bilet</h2>
        <p class="list-item-lead">Kusi was wyprawa do muzeum, ale nie chcecie za dużo wydać na zwiedzanie? Może nie wiecie, że są dni, kiedy w historii rozkochacie się za darmo? Łódzkie muzea rozdają bezpłatne bilety. Dni darmowego zwiedzania mają przyciągnąć zwiedzających. Oczywiście trzeba się liczyć z koniecznością wykupienia biletów na część wystaw.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/zabytkowe-tramwaje-woza-turystow-po-lodzi-od-3-lipca-az-do-25-wrzesnia/p71t03p">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/UN-k9kuTURBXy85ZDJmZjUyYi03OWE5LTRlN2ItYWJmYy0wN2VlZDQzNmUzMGQuanBlZ5KVAwAAzRB0zQlEkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/h3ek9kuTURBXy85ZDJmZjUyYi03OWE5LTRlN2ItYWJmYy0wN2VlZDQzNmUzMGQuanBlZ5OVAwAAzRB0zQlEkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Wakacyjnym tramwajem po Łodzi już od niedzieli 3 lipca. Zabytkowe tramwaje i autobusy retro będą wozić turystów aż do września. Zobacz trasę" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/6tzk9kuTURBXy85ZDJmZjUyYi03OWE5LTRlN2ItYWJmYy0wN2VlZDQzNmUzMGQuanBlZ5SVAwAAzRB0zQlEkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Wakacyjnym tramwajem po Łodzi już od niedzieli 3 lipca. Zabytkowe tramwaje i autobusy retro będą wozić turystów aż do września. Zobacz trasę</h2>
        <p class="list-item-lead">Legendarne autobusy i tramwaje retro znów w wakacje wyjadą na ulice Łodzi. Od 3 lipca do 25 września w każdy weekend i w święto po Łodzi będą kursować linie wakacyjne: tramwajowa ZERO (O) i autobusowa 100. Tramwaje kursować będą na trasie z placu Niepodległości przez Piotrkowską Centrum na Retkinię.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/quiz-czy-wiesz-z-czego-sa-znane-te-polskie-wsie-sprawdz-swoja-wiedze/ndgyrg6">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/IxWk9kpTURBXy83ZDE5NmZlODBlOWM2MmNlMzg5OGQwZjBlZjg3YTc1NC5qcGeSlQMAzOHND6DNCMqTBc0Bm8zK3gACoTAGoTEB" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/XwWk9kpTURBXy83ZDE5NmZlODBlOWM2MmNlMzg5OGQwZjBlZjg3YTc1NC5qcGeTlQMAzOHND6DNCMqTBc0Bm8zKkwXNAZvMyt4AAqEwBaExAQ" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Znane polskie wsie. Czy wiesz, z czego słyną? Nietypowy, letni QUIZ. Zdobycie 7/10 to nie lada wyzwanie " width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/65rk9kpTURBXy83ZDE5NmZlODBlOWM2MmNlMzg5OGQwZjBlZjg3YTc1NC5qcGeUlQMAzOHND6DNCMqTBc0Bm8zKkwXNAZvMypMFzQGbzMreAAKhMAGhMQE">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Znane polskie wsie. Czy wiesz, z czego słyną? Nietypowy, letni QUIZ. Zdobycie 7/10 to nie lada wyzwanie </h2>
        <p class="list-item-lead">&quot;Wsi spokojna, wsi wesoła...&quot; – wychwalał kiedyś uroki polskiej wsi Jan Kochanowski. Nie wszystkie wsie bywają jednak oazami spokoju. Niektóre słyną na cały kraj jako siedziby znanych firm, muzeów, klubów sportowych czy miejsca urodzenia wielkich postaci. Dziś wybraliśmy 10 takich wsi, o których z różnych względów słyszy się w Polsce częściej niż o innych, podobnych wielkością miejscowościach. Sprawdź, czy wiesz, z czego słyną!</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/przeworska-ciuchcia-znow-na-szlaku-teraz-ma-nowy-dworzec/hnvetjc">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/J-ak9kuTURBXy83MWEyZWEyOC1mMDU5LTQ1ODktYmJhMC1jMmMyMjI5Y2U4NGQuanBlZ5KVAwAAzRQozQtYkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/HWJk9kuTURBXy83MWEyZWEyOC1mMDU5LTQ1ODktYmJhMC1jMmMyMjI5Y2U4NGQuanBlZ5OVAwAAzRQozQtYkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Przeworska ciuchcia znów na szlaku. Teraz robią z niej perełkę" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/1JXk9kuTURBXy83MWEyZWEyOC1mMDU5LTQ1ODktYmJhMC1jMmMyMjI5Y2U4NGQuanBlZ5SVAwAAzRQozQtYkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Przeworska ciuchcia znów na szlaku. Teraz robią z niej perełkę</h2>
        <p class="list-item-lead">Po wąskich torach wagoniki toczą się ospale. Tu nikt nerwowo nie spogląda na zegarek i wcale nie zamierza szybko dojechać do celu. Frajdą jest bowiem sama przejażdżka. Każdy z pasażerów chce się nią delektować jak najdłużej. Poczciwa wąskotorówka z Przeworska znów wróciła na szlak.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/witraz-romana-modzelewskiego-odnaleziony-w-poddebicach-pod-lodzia/fpsjvzl">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/k6vk9kuTURBXy80NWE2MzZiNi02MTU0LTQ5ZmQtOTQzMS01MTBjYzBmZmQ5NTMuanBlZ5KVAwAAzRhazQ2zkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/ncbk9kuTURBXy80NWE2MzZiNi02MTU0LTQ5ZmQtOTQzMS01MTBjYzBmZmQ5NTMuanBlZ5OVAwAAzRhazQ2zkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Bezcenny skarb w Poddębicach.  Witraż Romana Modzelewskiego wisiał w oknach sklepu. Uratowali go pracownicy Muzeum Miasta Łodzi. Kiedy go zobaczymy?" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/TWTk9kuTURBXy80NWE2MzZiNi02MTU0LTQ5ZmQtOTQzMS01MTBjYzBmZmQ5NTMuanBlZ5SVAwAAzRhazQ2zkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Bezcenny skarb w Poddębicach.  Witraż Romana Modzelewskiego wisiał w oknach sklepu. Uratowali go pracownicy Muzeum Miasta Łodzi. Kiedy go zobaczymy?</h2>
        <p class="list-item-lead">Bezcenny skarb odkryto w Poddębicach. Witraż Romana Modzelewskiego wisiał w oknach tzw, Handlowca - sklepu na poddębickim rynku. Uratowali go pracownicy Muzeum Miasta Łodzi. Anna Łagodzińska-Pietras z muzeum mówi: - Mijaliśmy witraż, mieliśmy przed oczami artystyczny unikat i nie zdawaliśmy sobie sprawy.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/otwarcie-orientarium-w-zoo-w-lodzi-29-kwietnia-bilety-nie-beda-tanie/xfyt67g">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/y3Ok9kuTURBXy9kODBiYTYzZS01OTliLTQyZDgtOGUyNC1iMjcwY2U3MDFiNDUuanBlZ5KVAwAAzRdwzQ0xkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/kipk9kuTURBXy9kODBiYTYzZS01OTliLTQyZDgtOGUyNC1iMjcwY2U3MDFiNDUuanBlZ5OVAwAAzRdwzQ0xkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Orientarium w Łodzi - otwarcie za tydzień. W zoo słonie, orangutany i rekiny. Wiemy ile będzie kosztował bilet" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/O0Pk9kuTURBXy9kODBiYTYzZS01OTliLTQyZDgtOGUyNC1iMjcwY2U3MDFiNDUuanBlZ5SVAwAAzRdwzQ0xkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Orientarium w Łodzi - otwarcie za tydzień. W zoo słonie, orangutany i rekiny. Wiemy ile będzie kosztował bilet</h2>
        <p class="list-item-lead">Otwarcie Orientarium w zoo Łodzi w Łodzi zaplanowano na 29 kwietnia. Ma być najnowocześniejsze zoo w Europie. Znów w Łodzi będą słonie, z podwodnego tunelu podziwiać będziemy groźne rekiny pływające nam nad głową. Ulubieńcami dzieci będą pewnie orangutany. Ile zapłacimy za wstęp? Niestety - tanio nie będzie.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/rosjanie-utkneli-na-wakacjach-w-tajlandii-oto-czemu-maja-problemy/pflql88">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/J1Ak9kuTURBXy9jNWQ2MGExYS04MzZiLTQwM2UtYjhiNC1jNjNjMjZkZjhlNjguanBlZ5KVAwAAzQ41zQf_kwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/BKkk9kuTURBXy9jNWQ2MGExYS04MzZiLTQwM2UtYjhiNC1jNjNjMjZkZjhlNjguanBlZ5OVAwAAzQ41zQf_kwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Rosjanie utknęli na wakacjach w Tajlandii! Oto czemu mają problemy" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/EOnk9kuTURBXy9jNWQ2MGExYS04MzZiLTQwM2UtYjhiNC1jNjNjMjZkZjhlNjguanBlZ5SVAwAAzQ41zQf_kwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Rosjanie utknęli na wakacjach w Tajlandii! Oto czemu mają problemy</h2>
        <p class="list-item-lead">Inwazja Rosji na Ukrainę i wojna w tym kraju dla wielu Rosjan najwyraźniej nie była powodem do zrezygnowania z wakacyjnych planów. Teraz mają jednak problem. Jak zauważa Agencja Reutera, tysiące Rosjan utknęły w Tajlandii. Problemem są odwołane loty i sankcje, które sprawiły, że są odcięci od swoich kont lub nie stać ich na powrót z powodu gwałtownego spadku wartości rubla.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/czym-jest-glamping-i-dlaczego-staje-sie-coraz-popularniejszym-zjawiskiem/8qnygq3">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/dQ2k9kuTURBXy9kMGJkZmE4ZC1mZWFiLTRkOGMtODRiMS01YWU1ZjcyZTdiZmIuanBlZ5KVAwDMtM0WgM0MqJMFzQGbzMreAAKhMAahMQE" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/fH0k9kuTURBXy9kMGJkZmE4ZC1mZWFiLTRkOGMtODRiMS01YWU1ZjcyZTdiZmIuanBlZ5OVAwDMtM0WgM0MqJMFzQGbzMqTBc0Bm8zK3gACoTAFoTEB" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Czym jest glamping i dlaczego staje się coraz popularniejszym zjawiskiem?" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/6Iyk9kuTURBXy9kMGJkZmE4ZC1mZWFiLTRkOGMtODRiMS01YWU1ZjcyZTdiZmIuanBlZ5SVAwDMtM0WgM0MqJMFzQGbzMqTBc0Bm8zKkwXNAZvMyt4AAqEwAaExAQ">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Czym jest glamping i dlaczego staje się coraz popularniejszym zjawiskiem?</h2>
        <p class="list-item-lead">Glamping to propozycja dla miłośników podróży, którzy lubią spędzać czas na świeżym powietrzu, ale równocześnie cenią sobie komfortowe warunki. To zjawisko, które staje się coraz bardziej popularne. Czym dokładnie jest glamping i skąd wziął się trend na „luksusowe biwakowanie”? Odpowiadamy!</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/ile-wynosi-populacja-swiata/v50dmxg">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/TFhk9kuTURBXy80YWVmOGYxMy02YTM5LTQ4YWUtOWQ4Mi03YjhmZDhjMTA0MTIuanBlZ5KVAwDMTs0JzM0FgpMFzQGbzMreAAKhMAahMQE" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/FX5k9kuTURBXy80YWVmOGYxMy02YTM5LTQ4YWUtOWQ4Mi03YjhmZDhjMTA0MTIuanBlZ5OVAwDMTs0JzM0FgpMFzQGbzMqTBc0Bm8zK3gACoTAFoTEB" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Ile wynosi populacja świata? Państwa i kontynenty z największą liczbą ludzi" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/Jark9kuTURBXy80YWVmOGYxMy02YTM5LTQ4YWUtOWQ4Mi03YjhmZDhjMTA0MTIuanBlZ5SVAwDMTs0JzM0FgpMFzQGbzMqTBc0Bm8zKkwXNAZvMyt4AAqEwAaExAQ">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Ile wynosi populacja świata? Państwa i kontynenty z największą liczbą ludzi</h2>
        <p class="list-item-lead">Ile ludzi jest na świecie? Które państwo może pochwalić się największą liczbą mieszkańców? Jakie obszary mają sporą populację? Jak wpłynęła pandemia na ilość obywateli Polski? Sprawdź odpowiedzi na te i inne pytania dotyczące liczebności świata.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/jak-i-gdzie-mozna-wyrobic-paszport/tj9rj31">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/4qak9kuTURBXy8wMDRkOWEyMi1iMmRjLTQyNzctYTQ3My1lNGU3MGI5NTAzMmQuanBlZ5KVAwDMXc0LuM0Gl5MFzQGbzMreAAKhMAahMQE" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/U1Ik9kuTURBXy8wMDRkOWEyMi1iMmRjLTQyNzctYTQ3My1lNGU3MGI5NTAzMmQuanBlZ5OVAwDMXc0LuM0Gl5MFzQGbzMqTBc0Bm8zK3gACoTAFoTEB" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Jak i gdzie można wyrobić paszport?" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/fUbk9kuTURBXy8wMDRkOWEyMi1iMmRjLTQyNzctYTQ3My1lNGU3MGI5NTAzMmQuanBlZ5SVAwDMXc0LuM0Gl5MFzQGbzMqTBc0Bm8zKkwXNAZvMyt4AAqEwAaExAQ">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Jak i gdzie można wyrobić paszport?</h2>
        <p class="list-item-lead">Jak wyrobić paszport w Polsce? Gdzie należy udać się po odbiór dokumentów i co należy wcześniej przygotować? Marzą ci się podróże po świecie? Sprawdź, najważniejsze informacje na temat wyrabiania paszportu.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/jak-jezdzic-z-blablacar/l2d7mp1">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/JaJk9kuTURBXy9jZWRkOWFiNi1iZWNjLTQ4YTMtYjk3Ny1lYTI0NjFjNzBmZjguanBlZ5KVAwAAzRMJzQq1kwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/QlIk9kuTURBXy9jZWRkOWFiNi1iZWNjLTQ4YTMtYjk3Ny1lYTI0NjFjNzBmZjguanBlZ5OVAwAAzRMJzQq1kwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Jak korzystać z Blablacar? Sprawdź jak założyć konto" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/Wapk9kuTURBXy9jZWRkOWFiNi1iZWNjLTQ4YTMtYjk3Ny1lYTI0NjFjNzBmZjguanBlZ5SVAwAAzRMJzQq1kwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Jak korzystać z Blablacar? Sprawdź jak założyć konto</h2>
        <p class="list-item-lead">Blablacar to rozwiązanie oparte na idei ridesharingu, a więc współdzielenia przejazdu. W założeniu, dzięki niemu osoby, które nie mają samochodu, mogą skorzystać z okazji podwiezienia, zmniejsza się liczba pojazdów na drogach, a koszty podróży dla wszystkich podróżujących stają się niższe.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/stan-wyjatkowy-czy-nalezy-sie-zwrot-za-wykupione-wakacje/s02ee6r">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/L1kk9kuTURBXy8xMGFmNGRlZS1iMDFiLTQwYTMtOTY5Ni05MWVhODcyZjgyZDUuanBlZ5KVAwAAzRGozQnvkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/lZ-k9kuTURBXy8xMGFmNGRlZS1iMDFiLTQwYTMtOTY5Ni05MWVhODcyZjgyZDUuanBlZ5OVAwAAzRGozQnvkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Stan wyjątkowy uderza w wyjątkowo atrakcyjne turystycznie regiony. Jeśli nasz pobyt tam zostanie odwołany, należy nam się odszkodowanie? Wyjaśniamy" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/1vuk9kuTURBXy8xMGFmNGRlZS1iMDFiLTQwYTMtOTY5Ni05MWVhODcyZjgyZDUuanBlZ5SVAwAAzRGozQnvkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Stan wyjątkowy uderza w wyjątkowo atrakcyjne turystycznie regiony. Jeśli nasz pobyt tam zostanie odwołany, należy nam się odszkodowanie? Wyjaśniamy</h2>
        <p class="list-item-lead">Chociaż w przygranicznych miejscowościach w woj. podlaskim trwa stan wyjątkowy, to realnego zagrożenia (poza ograniczeniami związanymi z jego wprowadzeniem) dla turystów nie ma żadnego. Tak twierdzi wiceprezes Oddziału Podlaskiego Polskiej Izby Turystyki Agnieszka Zyzało. – Jednak mamy teraz urwanie głowy i dalej niestety więcej pytań niż odpowiedzi, co wolno, czego nie wolno. Wiele aktywności turystycznych z dnia na dzień i bez uprzedzenia została praktycznie zabronione na co najmniej jeden miesiąc – zauważa w rozmowie z Fakt.pl Zyzało.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/fakt-na-weekend-poznaj-cuda-pojezierza-drawskiego/jr64h6x">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/j94k9kuTURBXy8wNzVhNjYxYS03MDk3LTRkYWItYTAxMS0yMzVhYmU2NTU5YjUuanBlZ5KVAwAAzQrVzQYXkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/8O9k9kuTURBXy8wNzVhNjYxYS03MDk3LTRkYWItYTAxMS0yMzVhYmU2NTU5YjUuanBlZ5OVAwAAzQrVzQYXkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Poznaj cuda Pojezierza Drawskiego. Dzika rzeka, szlak zwiniętych torów, tajemniczy zamek templariuszy" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/-gLk9kuTURBXy8wNzVhNjYxYS03MDk3LTRkYWItYTAxMS0yMzVhYmU2NTU5YjUuanBlZ5SVAwAAzQrVzQYXkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Poznaj cuda Pojezierza Drawskiego. Dzika rzeka, szlak zwiniętych torów, tajemniczy zamek templariuszy</h2>
        <p class="list-item-lead">Pojezierze Drawskie słynie z pięknych krajobrazów i ukrytych pośród lasów jezior, którymi nie zawładnęła jeszcze komercyjna turystyka. Ponad 250 jezior tego regionu to prawdziwy raj dla wędkarzy, żeglarzy i nurków.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/pkp-intercity-bilet-weekendowy-pan-adrian-przejechal-na-nim-4360-km/86s3s2n">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/IwLk9kuTURBXy9mY2YzYTBkOS1mMDIyLTQ1YmQtODM2Yy04M2VmMDgwMWU3NWQuanBlZ5KVAwAAzQXXzQNJkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/GRdk9kuTURBXy9mY2YzYTBkOS1mMDIyLTQ1YmQtODM2Yy04M2VmMDgwMWU3NWQuanBlZ5OVAwAAzQXXzQNJkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Nowy rekord przejazdu na przejeździe biletem weekendowym! Ile wynosi?" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/iRjk9kuTURBXy9mY2YzYTBkOS1mMDIyLTQ1YmQtODM2Yy04M2VmMDgwMWU3NWQuanBlZ5SVAwAAzQXXzQNJkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Nowy rekord przejazdu na przejeździe biletem weekendowym! Ile wynosi?</h2>
        <p class="list-item-lead">Bilet weekendowy PKP Intercity pozwala na podróże przez trzy dni pociągami bez żadnych ograniczeń z dowolną liczbą przesiadek. Dla zapaleńców to okazja do śrubowania rekordów! Pan Adrian w weekend w trakcie 59-godzinnej podróży przejechał na bilecie weekendowym ponad 4360 km, co jest nowym rekordem Polski.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/jurata-tutaj-zawsze-bylo-elitarnie-i-w-wakacje-2021-tez-jest-drogo/jb1hl10">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/HtDk9kuTURBXy8zYWNjNjJmOS02NGMwLTQ0MjktYWJlOC00Yjk3NWVlZjg1YjcuanBlZ5KVAwAAzQ2BzQeZkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/UCpk9kuTURBXy8zYWNjNjJmOS02NGMwLTQ0MjktYWJlOC00Yjk3NWVlZjg1YjcuanBlZ5OVAwAAzQ2BzQeZkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Jurata - tutaj zawsze było elitarnie! W wakacje 2021 też jest drogo" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/sRYk9kuTURBXy8zYWNjNjJmOS02NGMwLTQ0MjktYWJlOC00Yjk3NWVlZjg1YjcuanBlZ5SVAwAAzQ2BzQeZkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



    <div class="mPlayerIco-container">
        <svg class="ico-mplayer-large" viewBox="0 0 50 50">
            <path class="ico-mplayer-large_rectangle" fill="#e51513" d="M0 0h50v50H0z"/>
            <path fill="#fff" d="m16.074 38.039-.073-26.041 20 13.135Z"/>
        </svg>
    </div>

        </div>
        
        <h2 class="list-item-title">Jurata - tutaj zawsze było elitarnie! W wakacje 2021 też jest drogo</h2>
        <p class="list-item-lead">Obchodząca w tym roku 90-lecie istnienia jako kurort Jurata niezmiennie przyciąga na wakacje zamożnych klientów. – To miejsce, tak jak przed wojną, dla elit. Tutaj mamy luksusowe hotele, korty tenisowe, w miejscu rocka jest jazz, a zamiast barów – restauracje – mówi burmistrz Jastarni Tyberiusz Narkowicz. Chętnych na taki wypoczynek nie brakuje, w przeciwieństwie do wolnych pokojów na najbliższe dwa tygodnie.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/nie-masz-czasu-na-urlop-wyjedz-chociaz-na-weekend-poznaj-skarby-duzych-miast/zn0ebnr">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/O7Gk9kuTURBXy9iMTk2NTVlMi00ODFmLTQ3ZTItODNjMS1mNWRiNjQ1YjJhMWMuanBlZ5KVAwAAzRPazQ08kwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/djWk9kuTURBXy9iMTk2NTVlMi00ODFmLTQ3ZTItODNjMS1mNWRiNjQ1YjJhMWMuanBlZ5OVAwAAzRPazQ08kwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Nie masz czasu na urlop? Wyjedź chociaż na weekend! Poznaj skarby dużych miast" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/6HCk9kuTURBXy9iMTk2NTVlMi00ODFmLTQ3ZTItODNjMS1mNWRiNjQ1YjJhMWMuanBlZ5SVAwAAzRPazQ08kwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



    <div class="teaser-icons-bottom-right">
        <div class="teaser-icon gallery">
            <svg viewBox="0 0 14 14">
                <use xlink:href="#ico-gallery"></use>
            </svg>
        </div>
    </div>

        </div>
        
        <h2 class="list-item-title">Nie masz czasu na urlop? Wyjedź chociaż na weekend! Poznaj skarby dużych miast</h2>
        <p class="list-item-lead">Co to jest city break? Przede wszystkim rewelacyjna alternatywa dla osób, które nie mają czasu pojechać na dłuższy urlop. Specjalnie dla naszych Czytelników przygotowaliśmy gotowy plan do zwiedzania!</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/poznaj-polske-zamki-dolnego-slaska/g3yryd7">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/80pk9kuTURBXy9iODUxYWYyMS01NjY1LTRlNzUtYjc0Zi01NDhkOGQxMmUxYjQuanBlZ5KVAwAAzRAgzQq7kwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/4SEk9kuTURBXy9iODUxYWYyMS01NjY1LTRlNzUtYjc0Zi01NDhkOGQxMmUxYjQuanBlZ5OVAwAAzRAgzQq7kwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Perły Dolnego Śląska na Europejskim Szlaku Zamków. Poznaj historię zaklętą w murach" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/svHk9kuTURBXy9iODUxYWYyMS01NjY1LTRlNzUtYjc0Zi01NDhkOGQxMmUxYjQuanBlZ5SVAwAAzRAgzQq7kwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Perły Dolnego Śląska na Europejskim Szlaku Zamków. Poznaj historię zaklętą w murach</h2>
        <p class="list-item-lead">Zamki Dolnego Śląska to cel wypraw nie tylko polskich, ale i zagranicznych turystów. Nic więc dziwnego, że znalazły się na Europejskim Szlaku Zamków. Nie sposób zobaczyć ich wszystkich na jednej wycieczce, nawet kilkudniowej.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/kreta-wyspa-zaostrza-obostrzenia/qb18nkl">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/WFbk9kuTURBXy80ZTE0OGEzOC0xNGM0LTQ1NTctOTkzYi0zNGQ5ZGJmZWJlY2IuanBlZ5KVAwAAzQnFzQV_kwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/Fp9k9kuTURBXy80ZTE0OGEzOC0xNGM0LTQ1NTctOTkzYi0zNGQ5ZGJmZWJlY2IuanBlZ5OVAwAAzQnFzQV_kwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Wybierasz się na Kretę? Koniecznie przeczytaj" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/PA6k9kuTURBXy80ZTE0OGEzOC0xNGM0LTQ1NTctOTkzYi0zNGQ5ZGJmZWJlY2IuanBlZ5SVAwAAzQnFzQV_kwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Wybierasz się na Kretę? Koniecznie przeczytaj</h2>
        <p class="list-item-lead">Na Krecie, największej greckiej wyspie i popularnym celu wakacyjnych wycieczek z Polski wzrosła liczba zarażeń koronawirusem. W związku z tym rząd wprowadził w kolejnym regionie, Retimno, nocne godziny policyjne. Oznacza to, że obecnie większa część wyspy Kreta objęta jest restrykcjami sanitarnymi.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/wakacje-2021-za-granica-jakie-sa-aktualne-obostrzenia-raport-0908/g4jncye">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/z8Bk9kuTURBXy8zNzM4ZTQyMS1lNDcyLTQ4ZmYtYjM2MS04ZjMzZjkzMWNhMTMuanBlZ5KVAwAAzRIJzQwHkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/1hak9kuTURBXy8zNzM4ZTQyMS1lNDcyLTQ4ZmYtYjM2MS04ZjMzZjkzMWNhMTMuanBlZ5OVAwAAzRIJzQwHkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Uwaga! Jest ostrzeżenie dla podróżnych jadących do Hiszpanii! Wakacje za granicą - jakie są aktualne obostrzenia [RAPORT FAKTU]" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/Za-k9kuTURBXy8zNzM4ZTQyMS1lNDcyLTQ4ZmYtYjM2MS04ZjMzZjkzMWNhMTMuanBlZ5SVAwAAzRIJzQwHkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Uwaga! Jest ostrzeżenie dla podróżnych jadących do Hiszpanii! Wakacje za granicą - jakie są aktualne obostrzenia [RAPORT FAKTU]</h2>
        <p class="list-item-lead">Wakacje 2021 miały być powrotem do normalności, ale koronawirus krzyżuje te plany. Kolejne kraje zmieniają zasady dla podróżnych i wprowadzają nowe obostrzenia. Inne z kolei wycofują się z wcześniej wprowadzonych restrykcji. Należy też pamiętać, że dalej obowiązuje ogólne ostrzeżenie dla podróżnych! Oto jak wygląda aktualna sytuacja epidemiczna w najpopularniejszych wśród Polaków kierunkach wakacyjnych zagranicznych podróży w w poniedziałek 09.08.</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
        
        
            
        
        
        



<div class="list-item">
    <a class="list-item-link" href="https://www.fakt.pl/hobby/turystyka/gdzie-wybrac-sie-nad-polskie-morze-najpiekniejsze-plaze-nad-baltykiem-zdjecia/60y1nkx">
        
        
        
        <div class="list-item-img-wrapper">
            <picture class="list-item-picture">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/kAQk9kuTURBXy9lZWQxZDcwNS05ODYzLTQ4OGMtYmVhNC0wMjNkZTU0ZTI4N2YuanBlZ5KVAwAAzQp4zQXkkwXNAZvMyt4AAqEwBqExAQ" type="image/avif">
                <source srcset="https://ocdn.eu/pulscms-transforms/1/9Mrk9kuTURBXy9lZWQxZDcwNS05ODYzLTQ4OGMtYmVhNC0wMjNkZTU0ZTI4N2YuanBlZ5OVAwAAzQp4zQXkkwXNAZvMypMFzQGbzMreAAKhMAWhMQE" type="image/webp">
                <img class="list-item-img" loading="lazy" alt="Sprawdź, jak dobrze znasz Wybrzeże. Oto 10 naszych najpiękniejszych plaż" width="411" height="202" src="https://ocdn.eu/pulscms-transforms/1/d08k9kuTURBXy9lZWQxZDcwNS05ODYzLTQ4OGMtYmVhNC0wMjNkZTU0ZTI4N2YuanBlZ5SVAwAAzQp4zQXkkwXNAZvMypMFzQGbzMqTBc0Bm8zK3gACoTABoTEB">
            </picture>
            



        </div>
        
        <h2 class="list-item-title">Sprawdź, jak dobrze znasz Wybrzeże. Oto 10 naszych najpiękniejszych plaż</h2>
        <p class="list-item-lead">Cudze chwalimy, swego nie znamy… Tak było jeszcze kilka lat temu. Dziś wakacje nad Bałtykiem przeżywają prawdziwy renesans. Nic dziwnego, chłodna morska toń, piaszczyste, szerokie plaże, klify… Wszystko na wyciągnięcie ręki. Długość polskiego wybrzeża to jednak prawie 500 km! Jak więc wybrać idealny skrawek dla siebie? Sprawdziliśmy, gdzie warto wybrać się nad polskie morze!</p>
        <p class="list-item-tagline"></p>
        
    </a>
</div>
        
    
</div>


    

    
    
    <div class="pagination" data-section="stream-pagination">
        
            
                <a class="pagination-item active" href="?page=1">
                    1
                </a>
            
        
            
                <a class="pagination-item " href="?page=2">
                    2
                </a>
            
        
            
                <a class="pagination-item " href="?page=3">
                    3
                </a>
            
        
            
                <span class="pagination-item pagination-item-separator">...</span>
            
        
            
                <a class="pagination-item " href="?page=7">
                    7
                </a>
            
        
            
                <span class="pagination-item pagination-item-separator">...</span>
            
        
            
                <a class="pagination-item " href="?page=14">
                    14
                </a>
            
        
    </div>

    

                


    <div class="coupons-feed" data-section="coupons-feed-items">
        <a class="coupons-feed-item first" href="https://www.fakt.pl/kodyrabatowe">
            <h2>
                Kupony rabatowe
            </h2>
        </a>

        
            
            
            <a class="coupons-feed-item" href="https://www.fakt.pl/pieniadze/zakupy/przygotuj-dom-na-swieta-sprawdzone-dekoracje/mf2mzx2">
                <picture>
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/Ewkk9kuTURBXy85NDU4OTdkZi01MWQ5LTRjYTgtYWFkNC1kYjM0MzExODliNTUuanBlZ5GTBc0BpMz03gACoTAGoTEB" type="image/avif">
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/Fusk9kuTURBXy85NDU4OTdkZi01MWQ5LTRjYTgtYWFkNC1kYjM0MzExODliNTUuanBlZ5GTBc0BpMz03gACoTAFoTEB" type="image/webp">
                    <img loading="lazy" alt="Przygotuj dom na święta. Sprawdzone dekoracje" src="https://ocdn.eu/pulscms-transforms/1/A64k9kuTURBXy85NDU4OTdkZi01MWQ5LTRjYTgtYWFkNC1kYjM0MzExODliNTUuanBlZ5GTBc0BpMz03gACoTABoTEB">
                </picture>
            </a>
        
            
            
            <a class="coupons-feed-item" href="https://www.fakt.pl/pieniadze/zakupy/zobacz-te-znizki-na-cyber-monday-i-kupuj-taniej/7g05vrc">
                <picture>
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/umkk9kuTURBXy9iNmQxMTNiMy05NjJiLTQ2ZDItYjBjZS01NGZlOGFhOWFmMzAuanBlZ5GTBc0BpMz03gACoTAGoTEB" type="image/avif">
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/zWwk9kuTURBXy9iNmQxMTNiMy05NjJiLTQ2ZDItYjBjZS01NGZlOGFhOWFmMzAuanBlZ5GTBc0BpMz03gACoTAFoTEB" type="image/webp">
                    <img loading="lazy" alt="Zobacz te zniżki na Cyber Monday i kupuj taniej" src="https://ocdn.eu/pulscms-transforms/1/FXak9kuTURBXy9iNmQxMTNiMy05NjJiLTQ2ZDItYjBjZS01NGZlOGFhOWFmMzAuanBlZ5GTBc0BpMz03gACoTABoTEB">
                </picture>
            </a>
        
            
            
            <a class="coupons-feed-item" href="https://www.fakt.pl/pieniadze/zakupy/najciekawsze-znizki-na-black-week-gdzie-zaoszczedzimy/4hzg13g">
                <picture>
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/DFTk9kuTURBXy8yYzU5NjI2NC1hNGQ0LTRkMTMtYTQ1NS1lNzFiOTg5NTQzYWUuanBlZ5GTBc0BpMz03gACoTAGoTEB" type="image/avif">
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/AK-k9kuTURBXy8yYzU5NjI2NC1hNGQ0LTRkMTMtYTQ1NS1lNzFiOTg5NTQzYWUuanBlZ5GTBc0BpMz03gACoTAFoTEB" type="image/webp">
                    <img loading="lazy" alt="Najciekawsze zniżki na Black Week. Gdzie zaoszczędzimy?" src="https://ocdn.eu/pulscms-transforms/1/6HMk9kuTURBXy8yYzU5NjI2NC1hNGQ0LTRkMTMtYTQ1NS1lNzFiOTg5NTQzYWUuanBlZ5GTBc0BpMz03gACoTABoTEB">
                </picture>
            </a>
        
            
            
            <a class="coupons-feed-item" href="https://www.fakt.pl/pieniadze/zakupy/metaliczne-ubrania-robia-furore-warto-miec-je-w-swojej-szafie/wrhyh6j">
                <picture>
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/w9jk9kuTURBXy9kZThkN2EwOC1iNWExLTQ5NDUtYTliZi00YTYzYWRlZWMwNTAuanBlZ5GTBc0BpMz03gACoTAGoTEB" type="image/avif">
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/fNPk9kuTURBXy9kZThkN2EwOC1iNWExLTQ5NDUtYTliZi00YTYzYWRlZWMwNTAuanBlZ5GTBc0BpMz03gACoTAFoTEB" type="image/webp">
                    <img loading="lazy" alt="Metaliczne ubrania robią furorę. Warto mieć je w swojej szafie" src="https://ocdn.eu/pulscms-transforms/1/BIRk9kuTURBXy9kZThkN2EwOC1iNWExLTQ5NDUtYTliZi00YTYzYWRlZWMwNTAuanBlZ5GTBc0BpMz03gACoTABoTEB">
                </picture>
            </a>
        
            
            
            <a class="coupons-feed-item" href="https://www.fakt.pl/pieniadze/zakupy/meskie-plaszcze-na-chlodne-dni/49nerkx">
                <picture>
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/bawk9kuTURBXy9kOGZjNzRmNS00NjY0LTRmNTItYmFhMi0yNjQ1NmU0NWQyNzkuanBlZ5GTBc0BpMz03gACoTAGoTEB" type="image/avif">
                    <source srcset="https://ocdn.eu/pulscms-transforms/1/dbxk9kuTURBXy9kOGZjNzRmNS00NjY0LTRmNTItYmFhMi0yNjQ1NmU0NWQyNzkuanBlZ5GTBc0BpMz03gACoTAFoTEB" type="image/webp">
                    <img loading="lazy" alt="Męskie płaszcze na chłodne dni" src="https://ocdn.eu/pulscms-transforms/1/RdKk9kuTURBXy9kOGZjNzRmNS00NjY0LTRmNTItYmFhMi0yNjQ1NmU0NWQyNzkuanBlZ5GTBc0BpMz03gACoTABoTEB">
                </picture>
            </a>
        
    </div>

            </div>
            
              
                <aside class="col-start-4 row-start-1">
                    
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.floatingAd"
            data-configuration="{&quot;slotName&quot;:&quot;right&quot;,&quot;slotsNumber&quot;:1,&quot;containerHeight&quot;:&quot;MAX&quot;}"
        ></aside>
    

                </aside>
                <aside class="col-start-4 row-start-3">
                    
    
        
        
        
        
        <aside
            class=""
            
            data-run-module="local/main.floatingAd"
            data-configuration="{&quot;slotName&quot;:&quot;right2&quot;,&quot;position&quot;:&quot;1&quot;,&quot;floatingHeight&quot;:1100,&quot;containerHeight&quot;:&quot;MAX&quot;}"
        ></aside>
    

                </aside>
              
            
        </div>
        <footer>
    <div class="footer-wrapper">
        <ul class="footer-list" data-section="footer">
            
            <li class="footer-elem">
                <a class="footer-link" href="/mapa-serwisu">Archiwum</a>
            </li>
            
            <li class="footer-elem">
                <a class="footer-link" href="https://www.fakt.pl/informacyjne/kontakt/ghzdbwk">Kontakt</a>
            </li>
            
            <li class="footer-elem">
                <a class="footer-link" href="/informacyjne/regulamin-korzystania-z-serwisu-fakt24pl/kfntqnx">Regulamin serwisu</a>
            </li>
            
            <li class="footer-elem">
                <a class="footer-link" href="https://www.fakt.pl/informacyjne/regulamin-newslettera-serwisu-wwwfaktpl/b312x6b">Regulamin newslettera</a>
            </li>
            
            <li class="footer-elem">
                <a class="footer-link" href="https://polityka-prywatnosci.onet.pl/">Polityka prywatności</a>
            </li>
            
            <li class="footer-elem">
                <a class="footer-link" href="https://reklama.ringieraxelspringer.pl/brand/fakt?utm_source=fakt&amp;utm_medium=ref&amp;utm_campaign=reklama">Reklama w Fakt.pl</a>
            </li>
            
            <li class="footer-elem">
                <a class="footer-link" href="https://programtv.onet.pl/">Program TV</a>
            </li>
            
            <li class="footer-elem">
                <a class="footer-link" href="/kodyrabatowe">Kupony rabatowe</a>
            </li>
            
            <li class="footer-elem">
                <a class="footer-link" href="https://literia.pl/literia-poleca/biblioteka-faktu/">Sklep Fakt</a>
            </li>
            
        </ul>
        <p class="footer-paragraph">
            &copy; 2023 Ringier Axel Springer Polska sp. z o.o. - Powered by <a href="https://ringpublishing.com/">Ring Publishing</a> | Developed by <a href="https://tech.ringieraxelspringer.com/">RAS Tech</a>
        </p>
        <p class="anti-ai-text">
 Systematyczne pobieranie treści, danych lub informacji z tej strony internetowej (web scraping), jak również eksploracja tekstu i danych (TDM)
 (w tym pobieranie i eksploracyjna analiza danych, indeksowanie stron internetowych, korzystanie z treści lub przeszukiwanie z pobieraniem baz danych),
 czy to przez roboty, web crawlers, oprogramowanie, narzędzia lub dowolną manualną lub zautomatyzowaną metodą, w celu tworzenia lub rozwoju oprogramowania,
 w tym m.in. szkolenia systemów uczenia maszynowego lub sztucznej inteligencji (AI), bez uprzedniej, wyraźnej zgody Ringier Axel Springer Polska sp. z o.o. (RASP)
 jest zabronione.  Wyjątek stanowią sytuacje, w których treści, dane lub informacje są wykorzystywane w celu ułatwienia ich wyszukiwania przez wyszukiwarki internetowe.
</p>
    </div>
</footer>
        
    <section class="htmlbox   ">
        


        <style>.mega-driver-3-7 .l .teaser-image-container::after {content: '';      display: block;      position: absolute;      top: 0;      left: 0;      width: 100%;      height: 100%;      background: rgb(0, 0, 0);      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.3) 100%);} .driver .paddedContainer .list-item.l .item-title {z-index:2}</style>

    </section>

    <section class="htmlbox   ">
        


        <style>body .main .podcast-container .placeholder.embed {padding-top:110px; background:#fff} </style>

    </section>

    <style>
.list-column_2-2 #slot-nativestd {display:block}
</style>
<script>
  //remove in 01/2024
document.cookie = 'prm_no_ads=0; Max-Age=0; path=/; domain=' + location.host;
</script>
<style>
#apologize {
  border:1px solid;
  height: 260px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: Arial;
  font-size: 18px;
  padding: 10px;
  margin-top: 10px;
}
@media(min-width: 767px) {
  #apologize {
    height: 75px;
    border:1px solid;
    margin-left: 13px;
    margin-right: 13px;
    font-family: Arial;
    font-size: 18px;
    padding: 12px;
    margin-top: 10px;
  }
}
</style>
<script>
  window.addEventListener('DOMContentLoaded', function(event) {
    const h = document.location.href.split('?');
    if(h.length >= 1 && h[0] === "https://www.fakt.pl/polityka/w-grupie-azoty-zamiast-prezesa-wojciecha-wardackiego-rzadzi-asystentka/7tgljmx" ) {
      function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }
      const header = document.getElementsByTagName('header');
      const apolo = document.createElement('div');
      apolo.id = 'apologize';
      apolo.innerHTML = "„Ringier Axel Springer Polska sp. z o.o. informuje, że działania zarzucane Wojciechowi Wardackiemu w niniejszej publikacji były przedmiotem procesu o ochronę dóbr osobistych zawisłego przed Sadem Okręgowym w Warszawie. W wyroku wydanym w sprawie stwierdzono naruszenie dóbr osobistych Wojciecha Wardackiego poprzez publikację w niniejszym artykule nieprawdziwych informacji”";
      if(isMobile) {
        header[0].after(apolo);
      } else {
        header[0].appendChild(apolo);
      }
    }
  });
</script>
<script charset="UTF-8" src="https://s-eu-1.pushpushgo.com/js/60cc5d7194edcd1b57f50a7a.js" async="async"></script></body>
</html>