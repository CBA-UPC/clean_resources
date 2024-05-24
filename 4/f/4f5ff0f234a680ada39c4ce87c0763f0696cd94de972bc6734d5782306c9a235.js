"use strict";(self.webpackChunkWPS_Drive=self.webpackChunkWPS_Drive||[]).push([[9309],{47333:function(e,t,n){n.r(t);var r=n(49200),o=n(37311),a=n(2406),c=n.n(a),i=n(20144),s=n(86769),u=n.n(s),p=n(47189),l=n(26743),d=n(423),w=n(19175),f=n(85476),m=n(87389);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n,r){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)(c().mark((function e(t,n,r,o){var a,i,s,u,w,f,b;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/^(\/\/).+$/.test(t)?t="".concat(window.location.protocol).concat(t):/^(\/).+$/.test(t)&&(t=(0,d.BV)(t)),a=(0,l.parseUrl)(t,"strict"),i=a.host,e.prev=2,!window.__UA__.yun||window.__UA__.WPS||!~i.indexOf((0,l.isKaeRelease)("oem")?(0,d.XF)("kdocs"):"wps.cn")&&!~i.indexOf((0,l.isKaeRelease)("oem")?(0,d.XF)("kdocs"):"kdocs.cn")){e.next=7;break}if(!window.__UA__.isTabletClient){e.next=6;break}return e.abrupt("return",window.open(t,{fname:r,ext:o}));case 6:return e.abrupt("return",window.open(t,"_blank"));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:if(!i||!~i.indexOf((0,l.isKaeRelease)("oem")?(0,d.XF)("kdocs"):"wps.cn")){e.next=24;break}return e.prev=13,e.next=16,(0,p.Adq)(t);case 16:s=e.sent,u=s.data,t=u.url,e.next=24;break;case 21:e.prev=21,e.t1=e.catch(13),console.log(e.t1);case 24:if(!window.__UA__.WPS||window.__UA__.wps2016||window.__UA__.wps2018beta){e.next=55;break}return e.prev=25,e.next=28,(0,m.RE)({method:"common.util.support",params:{api:"openFileByCloud"}});case 28:if(w=e.sent,f=w.result,b=w.callstatus,!f||"ok"!==b||!~i.indexOf((0,l.isKaeRelease)("oem")?(0,d.XF)("kdocs"):"kdocs.cn")){e.next=37;break}return e.next=34,(0,m.RE)({method:"openFileByCloud",openUrl:t});case 34:return e.abrupt("return",e.sent);case 37:if(!n){e.next=43;break}return e.next=40,(0,m.RE)({method:"common.util.openInnerUrl",params:{url:t}});case 40:return e.abrupt("return",e.sent);case 43:return e.next=45,(0,m.RE)({method:"common.util.openUrl",params:{url:t}});case 45:return e.abrupt("return",e.sent);case 46:e.next=53;break;case 48:if(e.prev=48,e.t2=e.catch(25),!e.t2.timeout){e.next=52;break}return e.abrupt("return");case 52:return e.abrupt("return",window.open(t,"_blank"));case 53:e.next=65;break;case 55:return e.prev=55,e.next=58,Promise.all([(0,m.RE)({method:"openUrl",url:t}),(0,m.RE)({method:"openUrl",api:"postMessage",params:[t]})]);case 58:e.next=65;break;case 60:if(e.prev=60,e.t3=e.catch(55),!e.t3.timeout){e.next=64;break}return e.abrupt("return");case 64:return e.abrupt("return",window.open(t,"_blank"));case 65:case"end":return e.stop()}}),e,null,[[2,9],[13,21],[25,48],[55,60]])})))).apply(this,arguments)}function k(e){return v.apply(this,arguments)}function v(){return v=(0,o.Z)(c().mark((function e(t){var n,r,a,s,u,f,b,h,k,v,y,g,O,P,E,U,F,R,S,A,W,C,D,j,I;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.fid,r=t.type,a=void 0===r?"":r,s=t.closeCoop,u=void 0!==s&&s,!i.default.prototype.$isServer){e.next=3;break}return e.abrupt("return",Promise.reject(w.E$));case 3:return e.next=5,(0,p.dcl)(n);case 5:if(f=e.sent,b=f.id,h=f.fname,k=f.fileid,v=f.groupid,y=f.storid,g=f.userid,O=b||k,P=(0,l.checkType)(h,["wdoc","wxls","wppt"]),E=(0,l.checkType)(h,"h5"),U=(0,l.checkType)(h,"wpsnote"),F=(0,d.BV)("/h5/".concat(O)),R=(0,d.BV)("/p/".concat(O,"/edit")),!U){e.next=23;break}return S=window.__INITIAL_STATE__.user.userid,A=parseInt(g)===S?"edit":"preview",W="".concat(d.a9,"/").concat(A,"/").concat(g,"/").concat(y,"?groupid=").concat(v,"&parentid=").concat(parent,"&entry=yunweb"),e.abrupt("return",window.open(W,JSON.stringify({fid:y})));case 23:if(!(E&&window.__UA__&&window.__UA__.IS_WPS_DRIVER)){e.next=42;break}return C=!0,e.prev=25,e.next=28,(0,p.u65)(k,{params:{fileid:k,groupid:v,share:!0,recycle:!1}});case 28:e.next=33;break;case 30:e.prev=30,e.t0=e.catch(25),C=!1;case 33:return e.prev=33,e.next=36,(0,m.RE)({method:"gotoH5Page",fileid:"".concat(k),showPublishPanel:C});case 36:return e.abrupt("return",e.sent);case 39:e.prev=39,e.t1=e.catch(33),console.log(e.t1);case 42:if(D=P&&R||E&&F,e.prev=43,!window.__UA__||window.__UA__.WPS||!P&&!E){e.next=46;break}throw new Error(0,"notRedirect");case 46:if(!D){e.next=48;break}return e.abrupt("return",x(D));case 48:e.next=53;break;case 50:return e.prev=50,e.t2=e.catch(43),e.abrupt("return",Promise.reject((0,w.um)({code:(P||E)&&"blank",url:D})));case 53:return j={method:"openFile",fileid:n,openSrc:"myDrive",fileName:h,isCloudFile:!0,keepWait:!0,type:a},console.log("openWpsClient params",j),e.prev=55,e.next=58,(0,m.RE)(j);case 58:e.next=79;break;case 60:if(e.prev=60,e.t3=e.catch(55),console.log("openFile error",e.t3),I=function(){var e=(0,o.Z)(c().mark((function e(){var t,r,o,a,i,s,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.__UA__.isWindows){e.next=25;break}return t=!1,e.prev=2,e.next=5,(0,p.Fr4)({params:{idList:o}});case 5:r=e.sent,o=r.data.data.openWpsLocalserver,t="1"===o,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:if(!(t||window.__UA__.wxpcmini||window.__UA__.isWechat)){e.next=25;break}return a=(0,d.BV)("/public/openapp/wps?fileid=".concat(n||O,"&from=list&useLocalServer=").concat(t)),i=document.getElementById("publicOpenWps"),s=function(e){var t=e.data;"public_show_iframe"===t&&(window.parent.postMessage(JSON.stringify({eventName:"web_iframe_show"}),"*"),u.style.display="block"),"public_hide_iframe"===t&&(window.parent.postMessage(JSON.stringify({eventName:"web_iframe_hide"}),"*"),u.style.display="none")},i&&(document.body.remoner("message",s)),(u=document.createEl%; height: 100%; z-index: 9999; position: fixed; border: none;top:0;",document.body.appendChild(u),window.addEventListener("message",s),e.abrupt("return");case 25:window.location.href="ksoqing://type=open&fileid=".concat(O,"&from=clouddriver");case 26:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),!u){e.next=77;break}return e.prev=65,e.next=68,(0,m.RE)(_(_({},j),{},{method:"common.wpscloud.openFileWithWPS"}));case 68:e.next=75;break;case 70:return e.prev=70,e.t4=e.catch(65),console.log("common.wpscloud.openFileWithWPS error",e.t4),e.next=75,I();case 75:e.next=79;break;case 77:return e.next=79,I();case 79:case"end":return e.stop()}}),e,null,[[25,30],[33,39],[43,50],[55,60],[65,70]])}))),v.apply(this,arguments)}function y(){return(y=(0,o.Z)(c().mark((function e(t){var n,r,o,a,i,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.fileid,r=t.id,o=t.closeCoop,a=n||r,e.prev=2,i=window&&(window.cefQuery||window.wpsQuery),s={fid:a,closeCoop:o},i&&(s.type="web_open_client"),e.next=8,k(s);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),"unsupport"===e.t0.code?u().alert(e.t0.message,"提示"):"redirect"===e.t0.code?window.location.href=e.t0.url:"blank"===e.t0.code?window.open(e.t0.url,"_blank"):(0,f.x2)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}t.default=function(e){return y.apply(this,arguments)}},19175:function(e,t,n){n.d(t,{E$:function(){return i},XR:function(){return s},tB:function(){return c},um:function(){return u}});var r=n(16699),o=n.n(r),a=n(45821),c=[/[!@#$^*<>?,]+/,(0,a.t)("combine.mainEmp.InvalidNickname")],i=o()({type:"wps",message:(0,a.t)("logic.QrCode.txt1"),title:"noy try invoke wps api",code:"ignoreApi"}),s=o()({type:"wps",message:"{title}, code: {code}, result: {msg}",title:(0,a.t)("logic.FileDownload.txt13"),code:null}),u=(o()({type:"docs",message:"{title}, code: {code}, result: {msg}",title:null,code:null}),o()({type:"client",message:(0,a.t)("logic.QrCode.txt3"),title:"wps invoke fail",code:null,url:null})),p=o()({type:"client",title:null,result:null,status:null,code:null,message:"{title} client error, code: {code}, result: {result}, status: {status}"});p({message:(0,a.t)("logic.FileDownload.txt0"),code:"loginRequired"}),p({message:(0,a.t)("logic.FileDownload.txt1"),code:"teamidRequired"}),p({message:(0,a.t)("logic.FileDownload.txt2"),code:"fetchFileDownloadUriFail"}),(0,a.t)("logic.FileDownload.txt3")}}]);
ripts/tnt.ee95c0b6f1daceb31bf5ef84353968c6.js"></script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/shared-content/art/tncms/templates/libraries/flex/components/template/resources/scripts/application.3c64d611e594b45dd35b935162e79d85.js"></script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=default,fetch,IntersectionObserver,NodeList.prototype.@@iterator,Element.prototype.classList|gated" nomodule="nomodule"></script>
<script async="async" src="https://btloader.com/tag?o=5071905434894336&amp;upapi=true&amp;async=true"></script>
<script async="async" src="https://thestar.solutions.cdn.optable.co/public-assets/thestar-sdk.js"></script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/scripts/footer.nav.js?_dc=1706121063"></script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/shared-content/art/tncms/templates/libraries/flex/components/template/resources/scripts/tnt.navigation.accessibility.7a9170240d21440159b9bd59db72933b.js"></script>
<script async="async" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>/*<![CDATA[*/ window.googletag = window.googletag || {cmd: []};
    window.gptAdSlots = window.gptAdSlots || [];

    window.__tnt = window.__tnt || {};
    __tnt.ads = __tnt.ads || {};
    __tnt.ads.dfp = __tnt.ads.dfp || {};
    __tnt.ads.dfp.dmp = __tnt.ads.dfp.dmp || {};
    __tnt.ads.dfp.dmp.audienceCheck = function(settings) {
        if (!__tnt.client.capabilities.supportsLocalStorage() || localStorage.getItem('tncms.dmp.audiences') == null) return false;
        if (settings.block && typeof settings.audience != 'undefined' && settings.audience.length > 0) {
            if (__tnt.compareArray(JSON.parse(localStorage.getItem('tncms.dmp.audiences')), settings.audience.split(','))) return true;
        } else if (typeof __tnt.ads.dfp.dmp.hideAudience != 'undefined' && __tnt.ads.dfp.dmp.hideAudience.length > 0) {
            if (__tnt.compareArray(JSON.parse(localStorage.getItem('tncms.dmp.audiences')), __tnt.ads.dfp.dmp.hideAudience)) return true;
        }
        return false;
    };

    __tnt.ads.dfp.targeting = __tnt.ads.dfp.targeting || {};

    
    __tnt.ads.dfp.targeting.k = ["toronto star"];

    __tnt.ads.dfp.targeting.page = ["index","app-editorial"];
    __tnt.ads.dfp.templates = __tnt.ads.dfp.templates || {};
    __tnt.ads.dfp.templates = {
        cube:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/cube.a023713b7eff47127899286dc36e1970.js",
        interstitial:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/interstitial.df40f87de692498682823c6773da5459.js",
        nativeArticle:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/native-article.9b3cd3bb8591bed71346f4fe429b96dc.js",
        pageCurl:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/page-curl.ca0c1a7372c29272ef1ccf504ced01a9.js",
        parallax:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/parallax.0ce32932f3b4125f930bea8d431f8f03.js",
        paw:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/paw.9ea074ccc913cb273a4b790e1e37460a.js",
        pencil:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/pencil.2662e4159cdac4809283c5399d78644b.js",
        reveal:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/reveal.e5d561a6b71aa2730a07fa90f5f4f6d6.js",
        roller:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/roller.c699c542afb9f08b38613e8473ddf14f.js",
        slider:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/slider.015001bff591d1665c6d0ec2a888b1ca.js",
        stickyAnchor:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/sticky-anchor.fc1a4213adeec354910108f84bf0e732.js",
        video:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/video-inline.d45f12d51e6b121b88d52db2e387136f.js",
        wallpaper:"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/shared-content\/art\/tncms\/templates\/libraries\/flex\/components\/ads\/resources\/scripts\/templates\/wallpaper.dc1c1bace62343a130be3589fe0846f9.js"
    };
        
        __tnt.ads.dfp.targeting.environment='prod';
        
        
        



        
        
        




        var browserWidth = jQuery(window).width();
        var cutpoint="large";
        if(browserWidth>=481 && browserWidth<=1024){
            cutpoint="medium";
        } else if (browserWidth<=480){
            cutpoint="small";
        }
        __tnt.ads.dfp.targeting.cutpoint = cutpoint;
        
        
            function loadGAM(tdata = {}) {
                let googleAdsAttempts = 0;
                let googleAdsInterval = setInterval(function() {
                    if( !window.googletag.pubads && googleAdsAttempts < 100) {
                        googleAdsAttempts++;
                    } else {
                        clearInterval(googleAdsInterval);
                        if( window.googletag.pubads ) {
                            for (const [key, values] of Object.entries(tdata)) {
                                window.googletag.pubads().setTargeting(key, values);
                                __tnt.ads.dfp.targeting[key] = values;
                            }
                        }
                    }          
                 }, 100);
             }
             //////////////////////////////////////////////
    
            let optableTargetingAttempts = 0;
            let interval = setInterval(function() {
                if( !isOptableIdentified && optableTargetingAttempts < 100) {
                    optableTargetingAttempts++;
                } else {
                    clearInterval(interval);
                    if( isOptableIdentified ) {
                        optable.cmd.push(function () {
                            optable.instance
                              .targetingKeyValues()
                              .then((response) => {loadGAM(response)})
                              .catch((err) => {
                                loadGAM();
                              });
                         });
                    }
                }
            }, 100);
        
        
     /*]]>*/</script>
<script>/*<![CDATA[*/ !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","https://c.amazon-adsystem.com/aax2/apstag.js");
    apstag.init({
        pubID: '5028',
        adServer: 'googletag',
        simplerGPT: true
    }); /*]]>*/</script>
<script>/*<![CDATA[*/ 
    googletag.cmd.push(function(){
            var adUnit = (window.frameElement && window.frameElement.getAttribute('data-gam-adunit')) ? window.frameElement.getAttribute('data-gam-adunit') : '/58580620/thestar.com/life/food-and-drink/hub';
            var mapping = googletag.sizeMapping().addSize([320, 0], [1, 2]).addSize([768, 0], []).addSize([992, 0], []).addSize([1200, 0], []).build();
                gptAdSlots['ad-2827029'] = googletag.defineSlot(adUnit, [[1,2]], 'ad-2827029').defineSizeMapping(mapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
                gptAdSlots['ad-2827029'].setTargeting('pos', ['1']);
    });
 /*]]>*/</script>
<script>/*<![CDATA[*/ 
    googletag.cmd.push(function(){
            var adUnit = (window.frameElement && window.frameElement.getAttribute('data-gam-adunit')) ? window.frameElement.getAttribute('data-gam-adunit') : '/58580620/thestar.com/life/food-and-drink/hub';
            var mapping = googletag.sizeMapping().addSize([320, 0], []).addSize([768, 0], []).addSize([992, 0], [728, 90]).addSize([1200, 0], [[728, 90]]).build();
                gptAdSlots['ad-2827824'] = googletag.defineSlot(adUnit, [[728,90]], 'ad-2827824').defineSizeMapping(mapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
                gptAdSlots['ad-2827824'].setTargeting('pos', ['1']);
    });
 /*]]>*/</script>
<script>/*<![CDATA[*/ 
    googletag.cmd.push(function(){
            var adUnit = (window.frameElement && window.frameElement.getAttribute('data-gam-adunit')) ? window.frameElement.getAttribute('data-gam-adunit') : '/58580620/thestar.com/life/food-and-drink/hub';
            
                gptAdSlots['ad-2827002'] = googletag.defineSlot(adUnit, [2, 1], 'ad-2827002').setCollapseEmptyDiv(true).addService(googletag.pubads());
                gptAdSlots['ad-2827002'].setTargeting('pos', ['impact-top']);
    });
 /*]]>*/</script>
<script>/*<![CDATA[*/ 
    googletag.cmd.push(function(){
            var adUnit = (window.frameElement && window.frameElement.getAttribute('data-gam-adunit')) ? window.frameElement.getAttribute('data-gam-adunit') : '/58580620/thestar.com/life/food-and-drink/hub';
            var mapping = googletag.sizeMapping().addSize([320, 0], [[320,50],[300,50]]).addSize([768, 0], []).addSize([992, 0], []).addSize([1200, 0], []).build();
                gptAdSlots['ad-2827920'] = googletag.defineSlot(adUnit, [[320,50],[300,50]], 'ad-2827920').defineSizeMapping(mapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
                gptAdSlots['ad-2827920'].setTargeting('pos', ['1']);
    });
 /*]]>*/</script>
<script>/*<![CDATA[*/ 
    googletag.cmd.push(function(){
            var adUnit = (window.frameElement && window.frameElement.getAttribute('data-gam-adunit')) ? window.frameElement.getAttribute('data-gam-adunit') : '/58580620/thestar.com/life/food-and-drink/hub';
            var mapping = googletag.sizeMapping().addSize([320, 0], [300, 250]).addSize([768, 0], [300, 250]).addSize([992, 0], [[300, 600], [300,250]]).addSize([1200, 0], [[300, 600], [300,250]]).build();
                gptAdSlots['ad-2827005'] = googletag.defineSlot(adUnit, [[300,250],[300,600]], 'ad-2827005').defineSizeMapping(mapping).setCollapseEmptyDiv(true).addService(googletag.pubads());
                gptAdSlots['ad-2827005'].setTargeting('pos', ['1']);
    });
 /*]]>*/</script>
<script>/*<![CDATA[*/ window.promo_design_config || (window.promo_design_config = []); window.promo_design_config.push({"bg_color":"#00548B","border_width":"0","button_size":"btn-lg","button_style":"danger","button_text":"GET THIS OFFER","button_url":"https:\/\/www.thestar.com\/subscribe","card_shadow":"enabled","card_shape":"rectangle","content_text_color":"light","display_again":"0.5","display_timer":"1","display_triggers":"visitor_enter","headline_size":"small","headline_text":"SALE: Save $36 for your first 8 weeks!","headline_text_color":"light","image":{},"image_display":"small","info_text":"Cancel anytime.","info_text_color":"light","overlay_action":"centered","target_anonymous":"include","target_registered":"include","target_subscribers":"exclude","trigger_mode":"any","user_targeting":"1","heading_tag":"h3","heading_bg_color":"","heading_text_color":"inherit","note":"","links_position":"top","display_width":"region","show":"all","modal_size":"standard","outline_color":"#ccc","sticker_shape":"disabled","sticker_color":"#333333","sticker_icon":"exclamation","sticker_icon_color":"white","image_bg_color":"","limit_width":"false","lead_in":"","lead_text_color":"dark","lead_text_shadow":"disabled","headline_shadow":"disabled","content_text":"","content_text_shadow":"disabled","info_text_shadow":"disabled","login_button":"","asset_display":"","assets_bg_color":"#c1eaff","assets_bg_text_color":"#4499ff","assets_text_color":"#000000","assets_content_bg_color":"#ffffff","assets_button_bg":"#0d75f2","assets_button_color":"#ffffff","assets_button_first":"Learn more","assets_button_next":"Next","assets_button_prev":"Previous","assets_button_done":"Done","assets_autoplay":"","assets_interval":"5000","utm_tracking":"0","utm_source":"blox","utm_medium":"utility_promo_designer","utm_campaign":"pop_up","utm_campaign_content":"utility_promo_designer","utm_campaign_name":"utm_campaign_name","show_audience":"","hide_audience":"","dmp_provider":"inherit","block_id":3287617}); /*]]>*/</script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/shared-content/art/tncms/templates/libraries/flex/components/ads/resources/scripts/tnt.ads.adverts.66a3812a7b5c12fde8cd998fd691ad7d.js"></script>
<script src="/shared-content/art/tncms/tracking.js"></script>
<script>/*<![CDATA[*/ 

    googletag.cmd.push(function() {
        googletag.pubads().setTargeting('browser', __tnt.client.browser.name);
        if (__tnt.ads.dfp.targeting) {
            for (var k in __tnt.ads.dfp.targeting) {
                if (__tnt.ads.dfp.targeting.hasOwnProperty(k)) {
                    googletag.pubads().setTargeting(k,__tnt.ads.dfp.targeting[k]);
                }
            }
        }
            googletag.pubads().disableInitialLoad();
            googletag.pubads().addEventListener('impressionViewable', function(event) {
                for (var key in gptAdSlots) {
                    if (gptAdSlots[key] === event.slot && __tnt.ads.slots[key]) {
                        if (!__tnt.ads.slots[key].viewableImpression) __tnt.ads.slots[key].viewableImpression = true;
                    }
                }
            });

        if (window.localStorage) {
            var sID = window.localStorage.getItem('_us_master_id');
            if (sID) {
                if (window.dataLayer) {
                    dataLayer.push({
                        'tncms.ad.userstitch_id': sID
                    });
                }
                googletag.pubads().setPublisherProvidedId(sID);
            }
        }

        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
    });
 /*]]>*/</script>

            
            <title>Food &amp; Restaurant News - Wine, Recipes | The Star</title>
            
    
    
        <link rel="shortcut icon" type="image/x-icon" href="https://www.thestar.com/content/tncms/site/icon.ico" />
    
        <link rel="preconnect" href="//www.googletagmanager.com">
    
        <link rel="preconnect" href="//www.google-analytics.com">
    
        <link rel="preconnect" href="//bcp.crwdcntrl.net">
    
        <link rel="preconnect" href="//tags.crwdcntrl.net">
    <link rel="alternate" type="application/rss+xml" title="Food &amp; Restaurant News - Wine, Recipes | The Star" href="http://www.thestar.com/search/?f=rss&amp;t=article&amp;c=life/food-and-drink&amp;l=50&amp;s=start_time&amp;sd=desc" />
    <link rel="canonical" href="https://www.thestar.com/life/food-and-drink/" />
            <script defer src="https://bloximages.chicago2.vip.townnews.com/thestar.com/shared-content/art/tncms/templates/libraries/flex/components/plugins/resources/scripts/fontawesome.568f3d1ab17b33ce05854081baadadac.js"></script>
            <script>
    function initStarLogo() {
        
        const editionLocations = {"toronto":{"home":"\/","alt":"The Star","logo":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/publication-logos\/Toronto_Star_logo.svg?_dc=1706121064","mobile":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/publication-logos\/Toronto_Star_logo.svg?_dc=1706121064","width":510,"height":81,"mobileWidth":157,"mobileHeight":25},"vancouver":{"home":"\/vancouver\/","alt":"The Star - Vancouver","logo":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/desktop\/star_vancouver.png?_dc=1706121064","mobile":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/mobile\/star_vancouver.png?_dc=1706121064","width":510,"height":81,"mobileWidth":157,"mobileHeight":25},"calgary":{"home":"\/calgary\/","alt":"The Star - Calgary","logo":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/desktop\/star_calgary.png?_dc=1706121064","mobile":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/mobile\/star_calgary.png?_dc=1706121064","width":510,"height":81,"mobileWidth":157,"mobileHeight":25},"edmonton":{"home":"\/edmonton\/","alt":"The Star - Edmonton","logo":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/desktop\/star_edmonton.png?_dc=1706121064","mobile":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/mobile\/star_edmonton.png?_dc=1706121064","width":510,"height":81,"mobileWidth":157,"mobileHeight":25},"winnipeg":{"home":"\/winnipeg\/","alt":"The Star - Winnipeg","logo":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/desktop\/star_winnipeg.png?_dc=1706121064","mobile":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/mobile\/star_winnipeg.png?_dc=1706121064","width":510,"height":81,"mobileWidth":157,"mobileHeight":25},"ottawa":{"home":"\/ottawa\/","alt":"The Star - Ottawa","logo":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/desktop\/star_ottawa.png?_dc=1706121064","mobile":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/mobile\/star_ottawa.png?_dc=1706121064","width":510,"height":81,"mobileWidth":157,"mobileHeight":25},"halifax":{"home":"\/halifax\/","alt":"The Star - Halifax","logo":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/desktop\/star_halifax.png?_dc=1706121064","mobile":"https:\/\/bloximages.chicago2.vip.townnews.com\/thestar.com\/content\/tncms\/live\/libraries\/flex\/components\/torstar_core\/resources\/images\/regional\/mobile\/star_halifax.png?_dc=1706121064","width":510,"height":81,"mobileWidth":157,"mobileHeight":25}};
        const storedLocation = localStorage.getItem('ts_front_location');
        let selectedLocation;
        if(storedLocation !== null)
        {
            selectedLocation = editionLocations[storedLocation];
        } else {
            /*
            * Lets see if we are on one of the edition pages
            */
            let loc = window.location.pathname;
            if (editionLocations.hasOwnProperty(loc))
            {
                selectedLocation = loc;
            }
            selectedLocation = editionLocations.toronto;
        }
        try {
            let root = document.querySelector(":root");
            root.style.setProperty('--site-logo-src', "url('"+selectedLocation.logo+"')");
            root.style.setProperty('--site-logo-width', selectedLocation.width+"px");
            root.style.setProperty('--site-logo-height', selectedLocation.height+"px");
            root.style.setProperty('--site-logo-mobile-src', "url('"+selectedLocation.mobile+"')");
            root.style.setProperty('--site-logo-mobile-width', selectedLocation.mobileWidth+"px");
            root.style.setProperty('--site-logo-mobile-height', selectedLocation.mobileHeight+"px");
            
            let logoDesktopHref = document.getElementById("siteUserHeaderHref-desktop");
            logoDesktopHref.href=selectedLocation.home;
            
            let logoMobileHref = document.getElementById("siteUserHeaderHref-mobile");
            logoMobileHref.href=selectedLocation.home;
        } catch(err){}
        try {
            
        } catch(err){c}
    }
    initStarLogo();
    </script>
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
           <script>
                   const isStar =true;
                   let isOptableIdentified = false;
                   window.optable = window.optable || { cmd: [] };
                   if(isStar) {
                   optable.cmd.push(function() {
                        const isLoggedIn = TNCMS.User.isLoggedIn();
                        if(isLoggedIn) {
                            const userEmail = TNCMS.User.getEmail(); // User Identity
                            optable.instance.identify(optable.SDK.eid(userEmail)).
                                then((data) => { isOptableIdentified = true; }).
                                catch(() => { isOptableIdentified = true; });
                         } else {
                             isOptableIdentified = true;
                         }
                    });
                }
           </script><script>
   if (window.dataLayer!==undefined){
       /* grapeshot */
       'use strict';
       var gs_channels='DEFAULT';
        !function(){var n=window.location!==window.top.location?document.referrer:window.location,o=document.createElement('script');
        o.async=!0,o.onload=function()
        {
        googletag.cmd.push(function()		{
            googletag.pubads().setTargeting('gs_channels',gs_channels)
        })
        },o.src='//torstar.gscontxt.net/main/channels.cgi?url='+encodeURIComponent(n),document.head.appendChild(o)}();
    }
    </script><script type="text/javascript">
        /* Image Resizer */
        window.addEventListener('message', receiveMessage, false)
        function receiveMessage(event) {
            var origin = event.origin || event.originalEvent.origin
            if (origin !== 'https://misc.thestar.com')
                return
            var data = event.data.resize
            if (data) {
                const {height, iframe} = data;
                if (height && iframe) {
                    const iframeElement = document.getElementById(iframe)
                    if (iframeElement) {
                        iframeElement.height = height
                    }
                    var elem = height
                }
            }
        }
    </script><script>
bDebug = false;
if(document.location.hash.includes("swg.debug=1") || document.location.hash.includes("swg.deventitlement=DEV_MODE_SCENARIO_METER_ACCESS_GRANTED") || document.location.hash.includes("swg.deventitlement=DEV_MODE_SCENARIO_METER_ACCESS_DENIED")){ bDebug = true }
if(bDebug){ console.log("SWG+GEA - CS-4864 - 2023/11/10 - 11:54") }

window.__tnt || (window.__tnt = {});
window.__tnt.subscription || (__tnt.subscription = {});
window.__tnt.subscription.bp || (__tnt.subscription.bp = []); // array of functions run before the custom access method promises
window.__tnt.subscription.ap || (__tnt.subscription.ap = []); // array of functions run after custom access method promises
window.__tnt.subscription.d || (__tnt.subscription.d = []); // array of functions run on access denied
window.__tnt.subscription.a || (__tnt.subscription.a = []); // array of functions run on access granted

window.__tnt.subscription.access || (window.__tnt.subscription.access = {});
window.__tnt.subscription.access.promises || (window.__tnt.subscription.access.promises = []);
window.__tnt.subscription.access.promisesStageTwo || (window.__tnt.subscription.access.promisesStageTwo = []);
window.__tnt.subscription.access.manifest || (window.__tnt.subscription.access.manifest = {
    denied: {
        promise: null,
        resolve: function(){ }
    }, 
    granted: {
        promise: null,
        resolve: function(){ }
    }
});
window.__tnt.subscription.offers || (window.__tnt.subscription.offers = {});
window.__tnt.subscription.offers.swgData || (window.__tnt.subscription.offers.swgData = null);

window.userStatus = document.createEvent('Event');
    userStatus.initEvent('tnt-user-status', true, true);
    userStatus.version = 3;
    userStatus.hasAccess = false;
    userStatus.accessMethod = 'none';
    userStatus.accessError = null;

/*
 * SwG Checkout Started
 * 
 * @event #SWGSubscriptionCheckoutStarted
 */
logSWGSubscriptionCheckoutStarted = new CustomEvent('SWGSubscriptionCheckoutStarted', { detail: {} });

/*
 * SwG Checkout Started
 * 
 * @event #SWGSubscriptionOrderCompleted
 */
logSWGSubscriptionOrderCompleted = new CustomEvent('SWGSubscriptionOrderCompleted', { detail: {} });

// Init GEA User State
window.__tnt.subscription.gea || (window.__tnt.subscription.gea = {});
__tnt.subscription.gea.configured = false;
window.userState = { granted: false };window.__tnt.subscription.gea.getUserData = function(){
    try{
        const sJWT = Cookies.get('tncms-user');
        if(sJWT){
            const sBase64URL = sJWT.split('.')[1];
            const sBase64 = sBase64URL.replace(/-/g, '+').replace(/_/g, '/');
            const sJSON = decodeURIComponent(atob(sBase64).split('').map(function(sChar){
                return '%' + ('00' + sChar.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(sJSON);
        }
    }catch(e){ console.log(e) }
};

window.__tnt.googleLogin = function(){
    if(bDebug){ console.log("SWG - Google Login") }
    var googleLoginForm = document.getElementById('tn-google-login'),
        inputReferer = document.createElement('input'),
        inputUsername = document.createElement('input');

    if(!googleLoginForm){
        googleLoginForm = document.createElement('form');
        googleLoginForm.id = "tn-google-login";
        googleLoginForm.action = window.location.origin + "/users/login/";
        googleLoginForm.method = "POST";

        inputReferer.type = 'hidden';
        inputReferer.name = 'referer_url';
        inputReferer.value = "https://thestar.com/subscribe/success/?itm_source=swg";

        inputUsername.type = 'hidden';
        inputUsername.name = 'username';
        inputUsername.value = "provider:google";

        googleLoginForm.appendChild(inputReferer);
        googleLoginForm.appendChild(inputUsername);

        document.body.append(googleLoginForm);
    }

    googleLoginForm.submit();
};/* SwG button experiment */
    (self.SWG = self.SWG || []).push(function(subscriptions) {
        subscriptions.init("thestar.com:basic");

        subscriptions.getEventManager().then(manager => {
            manager.registerEventListener((event) => {
                try{
                    if(!__tnt.subscription.offers.swgData){
                        __tnt.subscription.offers.swgData = JSON.parse(sessionStorage.getItem('__tnt.subscription.offers.swgData'));
                    }
                }catch(error){ console.log("SWG error", error) }

                if(event.eventType == 1007){
                    Object.assign(logSWGSubscriptionCheckoutStarted.detail, __tnt.subscription.offers.swgData);
                    window.dispatchEvent(logSWGSubscriptionCheckoutStarted);
                }
            });
        });

        __tnt.subscription.swg = subscriptions;

        if(window.userStatus){
            window.dispatchEvent(window.userStatus);
        }
    });



var offerData = [
    {
        'blox_id': "80b4e5f6-4806-11ee-9693-ab1cbb2290f2", // id of the blox offer (individual offer, not the offer group)
        'swg_id': "basic" // id of the offer within the SwG setup
    },
    {
        'blox_id': "44992db4-4e57-11ee-abc4-ff7681ffe761",
        'swg_id': "basic_annual"
    },
    {
        'blox_id': "efa61084-4806-11ee-9693-6b4367f71b58",
        'swg_id': "basic_annual"
    },
    {
        'blox_id': "67ed98ba-6eb7-11ee-b04e-4bfdb0aa194b",
        'swg_id': "basic_annual"
    },
    {
        'blox_id': "6061021e-aa6a-11ee-8a91-b7e5ebb0cc5c",
        'swg_id': "basic_annual"
    },
    {
        'blox_id': "17544548-bee4-11ee-9b71-83543e8fdc2e",
        'swg_id': "basic_annual"
    }
];
__tnt.subscription.offers.customizeOffers = function(t, offer){
    var footer = null,
        siteNameEl = document.head.querySelector('meta[property="og:site_name"]'),
        siteName = "";

    if(siteNameEl){ siteName = siteNameEl.content }

    if(t && offer && __tnt.subscription.swg && offerData && offerData.length){
        try{
            footer = t.querySelector('.method-footer');
            offerData.forEach(function(thisOffer){ 
                if(offer.id == thisOffer.blox_id){
                    var buttonArea = document.createElement('div'),
                        orContainer = document.createElement('div'),
                        orEl = document.createElement('span'),
                        textElement = document.createElement('p');

                    buttonArea.classList.add('offer-custom-purchase-container');
                    buttonArea.style = "margin:auto;" // style modification should be moved to site css

                    orEl.innerHTML = "or";
                    orEl.classList.add("user-option-or", "text-muted");
                    orEl.style = "background: #ffffff;padding:0 10px;";
                    
                    orContainer.style = "width: 100%; text-align: center; border-bottom: 1px solid #999; line-height: 0.1em; margin: 30px 0px;";
                    orContainer.appendChild(orEl);

                    textElement.innerHTML = "Pay with Subscribe with Google";
                    textElement.classList.add("swg-text");
                    textElement.style="margin-bottom:20px;";

                    var subscriptions = __tnt.subscription.swg;

                    subscriptions.setOnLoginRequest(function() {
                        __tnt.googleLogin();
                    });

                    subscriptions.setOnPaymentResponse(function(paymentResponse){
                        paymentResponse.then(function(resp){
                            var swgData = null,
                                respRawParsed = null,
                                respPurchaseData = null;

                            try{
                                if(!__tnt.subscription.offers.swgData){ JSON.parse(sessionStorage.getItem('__tnt.subscription.offers.swgData')) }
                            }catch(error){ console.log("SWG error", error) }

                            Object.assign(logSWGSubscriptionOrderCompleted.detail, __tnt.subscription.offers.swgData);

                            if(resp && resp.raw){
                                respRawParse = JSON.parse(resp.raw);
                                if(respRawParse && respRawParse.purchaseData){ respPurchaseData = JSON.parse(respRawParse.purchaseData) }
                                if(respPurchaseData){
                                    logSWGSubscriptionOrderCompleted.detail.order_id = respPurchaseData.orderId;
                                    logSWGSubscriptionOrderCompleted.detail.package_name = respPurchaseData.packageName;
                                }
                            }

                            window.dispatchEvent(logSWGSubscriptionOrderCompleted);

                            resp.complete().then(function(){
                                if(bDebug){ console.log("SWG - logging user in") }
                                __tnt.googleLogin();
                            });
                        });
                    });

                    var swgButton = subscriptions.createButton(function(){
                        var price = Number(offer.rate_price)/100;

                        if(bDebug){ console.log("SWG - offer data", offer) }
                        __tnt.subscription.offers.swgData = {
                            checkout_id: crypto.randomUUID(),
                            products: [{
                                brand: siteName,
                                category: "Subscribe with Google",
                                payment_type: "Subscribe with Google",
                                name: offer.service_name,
                                product_id: offer.service_id,
                                sku: offer.rate_id,
                                price: price,
                                position: 1,
                                swg_product_id: thisOffer.swg_id,
                                quantity: 1,
                            }]
                        }

                        sessionStorage.setItem('__tnt.subscription.offers.swgData', JSON.stringify(__tnt.subscription.offers.swgData));
                        subscriptions.subscribe(thisOffer.swg_id);
                    });
                    buttonArea.appendChild(swgButton);

                    offerContainer = t.querySelector('.subscription-service');
                    if(offerContainer){ offerContainer.setAttribute('data-swg-id', thisOffer.swg_id) }

                    offerButton = footer.querySelector('.method-link');
                    if(offerButton){ offerButton.setAttribute('data-swg-id', thisOffer.swg_id) }

                    footer.appendChild(orContainer);
                    footer.appendChild(textElement);
                    footer.appendChild(buttonArea);
                }
            });
        } catch(e){ console.log("SwG Button - An error occurred", e) }
    }
}</script>

<script async src="https://accounts.google.com/gsi/client" defer></script>
<script async subscriptions-control="manual" src="https://news.google.com/swg/js/v1/swg.js"></script>
<!-- tsHeadScripts Loader -->
<script language="javascript" type="text/javascript">function initDomLoadedHandler() {
    /* Fix global skyline region */
        
        const isMobile = (window.innerWidth < 992) ? true : false;
        const skylineRegion = document.getElementById('tncms-region-global-skyline');
        const topNavContainer = document.getElementById('site-top-nav-container');
        const navbarContainer = document.getElementById('site-navbar-container');
        const skylineHeight = skylineRegion.clientHeight;
        const closeDelay = 8000;
        if(!isMobile)
        {
            if (skylineRegion && topNavContainer) {           
                skylineRegion.style.position = "fixed";
                skylineRegion.style.top = 0;
                skylineRegion.style.width = "100%";
                skylineRegion.style.backgroundColor = "var(--site-bg-color)";
                skylineRegion.style.marginBottom = 0;
                skylineRegion.style.zIndex = 1050;
                
                let observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutationRecord) {
                        if (mutationRecord.target.className.includes('affix-top')) {
                            navbarContainer.removeAttribute('style');
                        } else if (mutationRecord.target.className.includes('affix')) {
                            navbarContainer.style.paddingTop = `${skylineHeight}px`;
                        };
                    })
                });
                
                topNavContainer.style.paddingTop = `${skylineHeight}px`;
                observer.observe(navbarContainer, {
                    attributes : true,
                    attributeFilter : ['style', 'class']
                });
                
                setTimeout(function() {
                    observer.disconnect();
                    topNavContainer.removeAttribute('style');
                    skylineRegion.removeAttribute('style');
                    navbarContainer.removeAttribute('style');
                }, closeDelay);
            }
        }
    
    
    
if(TNCMS.User.isLoggedIn())
{
    const firstNameHolders = document.querySelectorAll(".tn-user-firstname");
    if(firstNameHolders.length > 0)
    {
        let sName = TNCMS.User.getScreenName();
        sName = sName.split("-");
        let fName = sName[0];
        try{
            fName = TNCMS.User.getFirstName();
        } catch(e)
        {
            fName = "Reader";
        }
        
        for(let i=0;i<firstNameHolders.length;i++)
        {
            firstNameHolders[i].innerHTML = fName;
        }
    }
}

}
if(document.readyState !== 'loading') {
    initDomLoadedHandler();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        initDomLoadedHandler();
    });
}
</script>
<script>
    try {
        authorListJSON = JSON.parse('[]');
        authorProfileName = ' ';
        authorScreenName = '';
        authorProfileTitle = '';
        authorProfileId = '';
        if (authorListJSON.length === 0 && authorProfileName && authorProfileId){
            authorListJSON = [{"author":authorProfileName,"credit":authorProfileTitle,"guid":authorProfileId}];
        }
        else if (authorListJSON.length === 0 && !authorProfileName && authorScreenName && authorProfileId){
            authorListJSON = [{"author":authorScreenName,"credit":authorProfileTitle,"guid":authorProfileId}];
        }        
    }
    catch(e){
    }
    var environment = "live";
    </script>

    <script src="https://resources.thestar.com/cf7f3d5747a0/55637cf57ed4/launch-9387fe3a1e9f.min.js" async></script>

    <script>
    window.adobeTokens = {
        "assetData" : {
            "access" : "",
            "authorList" : authorListJSON ? authorListJSON : "",
            "counts" : {
                "paragraphs" : "",
                "words" : "",
                "wordCount" : ""
            },
            "flags" : "",
            "geo" : "",
            "keywords" : "",
            "hubId" : "",
            "meteringMode" : "",
            "originalUUID" : "",
            "publishInfo" : {
                "startDate" : "",
                "startDateHier" : "",
                "startDateTime" : "",
                "startTime" : ""
            },
            "readTime" : "0",
            "sponsorship" : {
                "adId" : "",
                "advertiserId" : "",
                "orderId" : ""
            },
            "title" : "",
            "uuid" : "",
            "viafouraEnabled" : ""
        },
        "environment" : environment,
        "multimedia" : 
            [],
        "pageType" : "section",
        "presentation" : "flex-editorial",
        "search" : {
            "totalResults" : "0",
            "totalURLResults" : "0"
        },
        "sections" : {
            "allSections" : ["0"],
            "primarySection" : "|life",
            "urlSections" : "|life|food-and-drink",
        },
        "siteDomain" : "thestar.com",
        "statusCode" : "200",
        "subPageType" : "",
        "urls" : {
            "absoluteURL" : "",
            "canonicalURL" : "https://www.thestar.com/life/food-and-drink/"
        }
    }
    </script>

<script>
    !function(n,e,i){if(!n){n=n||{},window.permutive=n,n.q=[],n.config=i||{},n.config.apiKey=e,n.config.environment=n.config.environment||"production";for(var o=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;r<o.length;r++){var t=o[r];n[t]=function(e){return function(){var i=Array.prototype.slice.call(arguments,0);n.q.push({functionName:e,arguments:i})}}(t)}}}(window.permutive,"025ad678-bf0a-4fe2-b383-8487592159bc",{});
    window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting("permutive").length){var g=window.localStorage.getItem("_pdfps");window.googletag.pubads().setTargeting("permutive",g?JSON.parse(g):[])}});
    var userEntitlementStatus = "anonymous";
    if (__tnt.user.loggedIn == 'true' && __tnt.user.screenName != null) {  
        window.permutive.identify([
            {
                id: __tnt.user.uuid,
                tag: 'tnuser',
                priority:0
            }
        ])
    } else {
       userEntitlementStatus = "registered";
    }
    if(__tnt.user.services != 0 && __tnt.user.services!=null)
    {
        userEntitlementStatus = "subscriber";
    }
    permutive.addon('web', {
        page: {
            user: {
                entitlementstatus: userEntitlementStatus,
                loginstatus: __tnt.user.loggedIn
            },
            site: {
                pagetype: "page",
                name: "www.thestar.com"
                }
        }
    });
</script>
<script async src="https://be54a597-6b6d-4e2d-9d31-642310a8db25.edge.permutive.app/be54a597-6b6d-4e2d-9d31-642310a8db25-web.js"></script>
<!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=74eL4wQLYRNQ18AwQITlNA&gtm_preview=env-1&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WRSZQF8');</script>
    <!-- End Google Tag Manager -->
        <style>
        .stickyMobileAd {
          position: relative;
        }
        .stickyMobileAd.sticky {
          position: fixed;
          top: 49px;
          width:100%;
          background-color:white;
          z-index: 110;
          margin: 0 -15px;
          padding: 10px;
        }
        </style>
        
    
    
    
    
    
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"NewsMediaOrganization","name":"The Toronto Star","logo":{"@context":"http://schema.org","@type":"ImageObject","url":"https://cdn.us-corp-qa-4.vip.tnpreprod.net/thestar.cms.us-corp-qa-4.vip.tnpreprod.net/content/tncms/assets/v3/media/9/f8/9f8708b6-740b-11ee-9769-8f1b8c333da2/653a770879445.image.png?resize=1200%2C1200","height":1200,"width":1200},"url":"www.thestar.com/","@id":"www.thestar.com/"}
    </script>
    <script type="application/ld+json">
    {"@context":"https://schema.org","@type":"WebSite","url":"https://www.thestar.com","potentialAction":{"@type":"SearchAction","target":"https://www.thestar.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
    </script><!-- generics -->
<link rel="icon" type="image/x-icon" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/favicon.ico?_dc=1706121064">
<link rel="icon" type="image/png" sizes="32x32" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/favicon-32x32.png?_dc=1706121064">
<link rel="icon" type="image/png" sizes="96x96" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/favicon-96x96.png?_dc=1706121064">
<link rel="icon" type="image/png" sizes="192x192" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/android-icon-192x192.png?_dc=1706121064">

<!-- Android -->
<link rel="shortcut icon" sizes="192x192" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/android-icon-192x192.png?_dc=1706121064">

<!-- iOS -->
<link rel="apple-touch-icon" sizes="57x57" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/apple-icon-57x57.png?_dc=1706121064">
<link rel="apple-touch-icon" sizes="60x60" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/apple-icon-60x60.png?_dc=1706121064">
<link rel="apple-touch-icon" sizes="72x72" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/apple-icon-72x72.png?_dc=1706121064">
<link rel="apple-touch-icon" sizes="76x76" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/apple-icon-76x76.png?_dc=1706121064">
<link rel="apple-touch-icon" sizes="114x114" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/apple-icon-114x114.png?_dc=1706121064">
<link rel="apple-touch-icon" sizes="120x120" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/apple-icon-120x120.png?_dc=1706121064">
<link rel="apple-touch-icon" sizes="144x144" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/apple-icon-144x144.png?_dc=1706121064">
<link rel="apple-touch-icon" sizes="152x152" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/apple-icon-152x152.png?_dc=1706121064">
<link rel="apple-touch-icon" sizes="180x180" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/apple-icon-180x180.png?_dc=1706121064">


<!-- Windows 8 IE 10-->
<meta name="msapplication-TileColor" content="#FFFFFF">
<meta name="msapplication-TileImage" content="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/ms-icon-144x144.png?_dc=1706121064">

<!— Windows 8.1 + IE11 and above —>
<meta name="msapplication-config" content="none"/>
<meta name="msapplication-TileColor" content="#006ed2" />
<meta name="msapplication-square70x70logo" content="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/ms-icon-70x70.png?_dc=1706121064" />
<meta name="msapplication-square150x150logo" content="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/ms-icon-150x150.png?_dc=1706121064" />
<meta name="msapplication-square310x310logo" content="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/favicons/thestar/ms-icon-310x310.png?_dc=1706121064" />
    
    
        
        <link rel="preconnect" href="https://bloximages.chicago2.vip.townnews.com">
        
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Frank+Ruhl+Libre:wght@300;400;500;600;700;800;900&family=Merriweather+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap">
    
    <style>
    
        
        :root {
          --site-bg-color: #f8f8f8;
          --content-bg-color: #f8f8f8;
          --content-text-color: #333;
          --body-text-color: #333333;
          --link-color: #333;
          --accent-color: #006ed2;
          --accent-color2: #006ed2;     
          --accent-color3: #0065a4;
          --accent-color2-community: #006633;     
          --accent-color3-community: #006633;  
          --nav-bg-color: #F8F8F8;
          --nav-link-color: #333;
          --top-bar-bg-color: #ffffff;
          --top-bar-link-color: #000;
          --masthead-bg-color: #ffffff;
          --footer-bg-color: #333;
          --footer-text-color: #fff; 
          --font-daily-serif: 'Frank Ruhl Libre', Times New Roman,Times,serif;
          --font-daily-serif-semi: 'Frank Ruhl Libre', Times New Roman,Times,serif;
          --font-daily-serif-bold: 'Frank Ruhl Libre', Times New Roman,Times,serif;    
          --font-daily-sans: 'Merriweather Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          --font-daily-text: 'STIX Two Text',serif;      
          --font-daily-text-italic: 'STIX Two Text',serif;         
          --icon-alert-light: #B40404;
          --nav-home-display: none;
          --breaking-news-developing: #016ED2;
          --paywall-offer-bg: #00436a;
          --paywall-offer-bg-gradient: radial-gradient(circle, #00436a 0%, #00436a 100%);
          --site-logo-src: url("https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/publication-logos/Toronto_Star_logo.svg?_dc=1706121064");
          --site-logo-height: 81px;
          --site-logo-width: 501px;
          --site-logo-mobile-src: url("https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/images/publication-logos/Toronto_Star_logo.svg?_dc=1706121064");
          --site-logo-mobile-height: 25px;
          --site-logo-mobile-width: 157px;
        }
        
    </style>
    
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/navigation.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/navigation.css?_dc=1706121065"></noscript>
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/pages.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/pages.css?_dc=1706121065"></noscript>
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/blocks.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/blocks.css?_dc=1706121065"></noscript>
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/utilities.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/utilities.css?_dc=1706121065"></noscript>
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/global.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/global.css?_dc=1706121065"></noscript>
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/stn.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/stn.css?_dc=1706121065"></noscript>
        
        
        
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/storypacks.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/storypacks.css?_dc=1706121065"></noscript>
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/utilities.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/utilities.css?_dc=1706121065"></noscript>
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/user-controls.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/user-controls.css?_dc=1706121065"></noscript>
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/icons.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/common/icons.css?_dc=1706121065"></noscript>
    
    
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/staronly.css?_dc=1706121065" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/styles/daily/staronly.css?_dc=1706121065"></noscript>
    
        <link rel="preload" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/site/resources/styles/site.css?_dc=1671043982" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/site/resources/styles/site.css?_dc=1671043982"></noscript>
    
    
        <style>   
            li.gdpr-removal { display:none; }
        </style>
    
    

        </head>
        <body class="fixed-scroll-nav app-editorial grid-ample  section-life section-food-and-drink" data-path="/life/food-and-drink" >
	<script type='text/javascript' src='/shared-content/art/stats/common/tracker.js'></script>
	<script type='text/javascript'>
	<!--
	if (typeof(TNStats_Tracker) !== 'undefined' && typeof(TNTracker) === 'undefined') { TNTracker = new TNStats_Tracker('www.thestar.com'); TNTracker.trackPageView(); }
	// -->
	</script>
	<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDQV3N&amp;townnews.product.software=BLOX&amp;townnews.product.version=1.73.1&amp;townnews.crm.group_id=848&amp;tncms.template.version=3.155.0&amp;tncms.page.grid=ample&amp;tncms.page.style=none&amp;tncms.page.path=%2Flife%2Ffood-and-drink&amp;tncms.page.app=editorial&amp;tncms.page.theme=flex&amp;tncms.page.skin=flex-editorial&amp;tncms.page.http_status=200&amp;tncms.system.render_time=429&amp;tncms.client.is_bot=no&amp;tncms.client.is_gdpr=yes&amp;tncms.client.noscript=yes" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <a href="#main-page-container" class="sr-only" onclick="document.getElementById('main-page-container').scrollIntoView(); return false">Skip to main content</a>
    
    <!-- Google Tag Manager (noscript) -->
    <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRSZQF8&gtm_auth=74eL4wQLYRNQ18AwQITlNA&gtm_preview=&gtm_cookies_win=x&noscript=true"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    
        
        
        <!-- Google Tag Manager -->
        <script>
            var dataLayer = window.dataLayer || [];
            dataLayer.push(
                {'user_id': __tnt.user.screenName},
                {'user_state': __tnt.user.loggedIn ? 'logged in' : 'anonymous'},
                {'utm_label': __tnt.urlHash('utm_label')}
            );
        </script>
        
        <script>
            $(function(){
                var bloxServiceIDs = [];
                var bloxUserServiceIds = [];
                var dataLayer = window.dataLayer || [];

                
                bloxServiceIDs.push();
                

                if (__tnt.user.services){
                    var bloxUserServiceIDs = __tnt.user.services.replace('%2C',',').split(',');
                }

                // GTM tncms.subscription.paid_access_service_ids
                if(bloxServiceIDs){
                    dataLayer.push({'tncms':{'subscription':{'access_service_ids':bloxServiceIDs.toString()}}});
                }

                // GTM tncms.subscrption.user_service_ids
                if(bloxUserServiceIDs){
                    dataLayer.push({'tncms':{'subscription':{'user_service_ids':bloxUserServiceIDs.toString()}}});
                }
            });
        </script>
        
        <div id="site-container">
    
        
            <aside class="hidden-print offcanvas-drawer offcanvas-drawer-left visible-sm visible-xs" aria-label="Left Main Menu" aria-expanded="false" tabindex="-1" >
                <div id="tncms-region-mobile-nav-top-left-region" class="tncms-region "><div id="tncms-block-3016600" class="tncms-block">
<div class="mobileMenuToolsContainer">
    <div class="mobileMenuTopBar">
        <button aria-label="Close Mobile Menu" role="button" class="mobile-menu-close">
            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 12 12" stroke="currentColor" stroke-width="1" stroke-linecap="round" width="24" height="24">
                <line x1="11" y1="1" x2="1" y2="11"></line>
                <line x1="1" y1="1" x2="11" y2="11"></line>
            </svg>
        </button>
        
        <div class="mobileLoginState">
            <span id='userStateButton' data-status='login'>Log In</span>
        
            <form id="user-mobile-logout-form" method="post" style="display:none" action="https://www.thestar.com/users/logout/" ><input type="hidden" name="referer_url" value="https://www.thestar.com/life/food-and-drink/"><input type="submit" name="logout" value="Logout" class="hide">
            </form>
            <form id="user-mobile-login-form" style="display:none" role="form" method="post" action="https://www.thestar.com/users/login/">
                <input type="hidden" name="referer_url" value="https://www.thestar.com/life/food-and-drink/">
            </form>
            
            
            
            
        </div>
    </div>
    <div class="mobileMenuSearch">
         <div id='site-search-form-3016600' class="user-controls-search">
            <form id="site-search-3016600" aria-label="Site search" action="/search/" method="GET">
                <input type="hidden" name="l" value="25">
                <input type="hidden" name="s" value="">
                <input type="hidden" name="sd" value="desc">
                <input type="hidden" name="f" value="html">
                <input type="hidden" name="t" value="article,video,youtube,collection">
                <input type="hidden" name="app" value="editorial">
                <input type="hidden" name="nsa" value="eedition">
                <div id="site-search-form-3016600" class="site-search-form input-group form-control">
                    <label for="site-search-3016600-term" class="sr-only">Site search</label>
                    <input id="site-search-3016600-term" name="q" title="Site search" type="text" placeholder="Search..." class="form-control" autocomplete="off">
                    <input type="submit" class="hide" value="Search">
                    <span class="input-group-btn">
                        <button id="site-search-3016600-btn" class="btn btn-link" aria-label="Submit Site Search" type="submit">
                            <span class="hidden-xl hidden-lg hidden-md fas tnt-search"></span>
                            <span id="site-search-button-3016600" class="hidden-xs hidden-sm">Search</span>
                        </button>
                    </span>
                </div>
                <div class="user-controls-cancel-button">
                    <span id="search-cancel-3016600" aria-label="Clear Search">
                        <span class="fas tnt-times"></span>
                    </span>
                </div>
            </form>
            
        </div>
        
    </div>
    <div class="mobileMenuLinks">
        
        <div class="mobileMenuLink">
            <a tabindex="1"  href="/newsletters/?itm_source=newsletter-header-link" ><i class='fas tnt-envelope'></i>Newsletters</a>
        </div>
        
        
        <div class="mobileMenuLink">
            <a tabindex="2" class="epaper"  href="https://thestarepaper.pressreader.com/" target="_blank"><i class="fas tnt-file"></i>Today's paper</a>
        </div>
        
        
        <div class="mobileMenuLink">
            <a tabindex="3" href="https://www.northstarbets.ca/page?key=ej0xMzUyNzc3NCZsPTEzNTI3NzcyJnA9MzQ2MQ%3D%3D&ut[%E2%80%A6]hStarBets__&utm_content=custom/tracking_sportsbettinglogo" ><i class="fas tnt-external-link-alt"></i><span class="nav-betting">Betting</span></a>
        </div>
        
    </div>
</div></div></div>
                <div id="tncms-region-nav-mobile-nav-left" class="tncms-region-nav"><div id="mobile-nav-left_menu" class="panel-group nav navbar-nav" role="tablist" aria-hidden="true"><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-1" data-target="#mobile-nav-left_menu-child-1">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/"  class="nav-link tnt-section-home ">Home</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-1" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/real-estate/"  class="nav-link tnt-section-real-estate">Real Estate</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/transit/"  class="nav-link tnt-section-transit">Transit</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/world/israel-hamas/"  class="nav-link tnt-section-israel-hamas-war">Israel-Hamas War</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/hockey/hockey-canada/"  class="nav-link tnt-section-hockey-canada">Hockey Canada</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-2" data-target="#mobile-nav-left_menu-child-2">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/news/gta/"  class="nav-link tnt-section-gta ">GTA</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-2" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/real-estate/"  class="nav-link tnt-section-real-estate">Real Estate</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="https://readerschoice.thestar.com/readerschoice-toronto/"  target="_blank" rel="noopener" class="nav-link tnt-section-readers-choice-awards">Readers’ Choice Awards</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-3" data-target="#mobile-nav-left_menu-child-3">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/news/canada/"  class="nav-link tnt-section-canada ">Canada</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-3" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/ontario/"  class="nav-link tnt-section-ontario">Ontario</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/canada/british-columbia/"  class="nav-link tnt-section-british-columbia">British Columbia</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/canada/alberta/"  class="nav-link tnt-section-alberta">Alberta</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/canada/quebec/"  class="nav-link tnt-section-quebec">Quebec</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/canada/nova-scotia/"  class="nav-link tnt-section-nova-scotia">Nova Scotia</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-4" data-target="#mobile-nav-left_menu-child-4">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/politics/"  class="nav-link tnt-section-politics ">Politics</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-4" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/politics/federal/"  class="nav-link tnt-section-federal-politics">Federal Politics</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/politics/provincial/"  class="nav-link tnt-section-provincial-politics">Provincial Politics</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/politics/political-opinion/"  class="nav-link tnt-section-political-opinion">Political Opinion</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-5" data-target="#mobile-nav-left_menu-child-5">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/news/world/"  class="nav-link tnt-section-world ">World</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-5" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/world/united-states/"  class="nav-link tnt-section-united-states">United States</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/world/americas/"  class="nav-link tnt-section-americas">Americas</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/world/europe/"  class="nav-link tnt-section-europe">Europe</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/world/asia/"  class="nav-link tnt-section-asia">Asia</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/world/africa/"  class="nav-link tnt-section-africa">Africa</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/world/australia/"  class="nav-link tnt-section-australia">Australia</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/news/world/middle-east/"  class="nav-link tnt-section-middle-east">Middle East</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-6" data-target="#mobile-nav-left_menu-child-6">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/opinion/"  class="nav-link tnt-section-opinion ">Opinion</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-6" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/opinion/star-columnists/"  class="nav-link tnt-section-star-columnists">Star Columnists</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/opinion/editorials/"  class="nav-link tnt-section-editorials">Editorials</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/opinion/contributors/"  class="nav-link tnt-section-contributors">Contributors</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/opinion/letters-to-the-editor/"  class="nav-link tnt-section-letters-to-the-editor">Letters To The Editor</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/opinion/editorial-cartoons/"  class="nav-link tnt-section-editorial-cartoons">Editorial Cartoons</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-7" data-target="#mobile-nav-left_menu-child-7">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/life/"  class="nav-link tnt-section-life ">Life</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-7" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/life/relationships/"  class="nav-link tnt-section-relationships">Relationships</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/life/food-and-drink/"  class="nav-link tnt-section-food-and-drink">Food and Drink</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/life/home-and-garden/"  class="nav-link tnt-section-home-and-garden">Home and Garden</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/life/beauty-and-fashion/"  class="nav-link tnt-section-beauty-and-fashion">Beauty and Fashion</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/life/health-wellness/"  class="nav-link tnt-section-health">Health</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/life/together/"  class="nav-link tnt-section-together">Together</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/life/travel/"  class="nav-link tnt-section-travel">Travel</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/life/horoscopes/"  class="nav-link tnt-section-horoscopes">Horoscopes</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="https://obituaries.thestar.com/"  target="_blank" rel="noopener" class="nav-link tnt-section-obituaries">Obituaries</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-8" data-target="#mobile-nav-left_menu-child-8">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/sports/"  class="nav-link tnt-section-sports ">Sports</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-8" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/hockey/"  class="nav-link tnt-section-nhl">NHL</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/basketball/"  class="nav-link tnt-section-nba">NBA</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/baseball/"  class="nav-link tnt-section-mlb">MLB</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/football/"  class="nav-link tnt-section-nfl">NFL</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/sports-betting/"  class="nav-link tnt-section-sports-betting">Sports Betting</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/golf/"  class="nav-link tnt-section-golf">Golf</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/soccer/"  class="nav-link tnt-section-soccer">Soccer</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/tennis/"  class="nav-link tnt-section-tennis">Tennis</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/auto-racing/"  class="nav-link tnt-section-auto-racing">Auto Racing</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/cricket/"  class="nav-link tnt-section-cricket">Cricket</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/sports/olympics-and-paralympics/"  class="nav-link tnt-section-olympics-and-paralympics">Olympics and Paralympics</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-9" data-target="#mobile-nav-left_menu-child-9">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/entertainment/"  class="nav-link tnt-section-entertainment ">Entertainment</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-9" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/entertainment/television/"  class="nav-link tnt-section-television">Television</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/entertainment/music/"  class="nav-link tnt-section-music">Music</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/entertainment/books/"  class="nav-link tnt-section-books">Books</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/entertainment/movies/"  class="nav-link tnt-section-movies">Movies</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/entertainment/stage/"  class="nav-link tnt-section-stage">Stage</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/entertainment/visual-arts/"  class="nav-link tnt-section-visual-arts">Visual Arts</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="https://diversions.thestar.com/"  target="_blank" rel="noopener" class="nav-link tnt-section-fun-games">Fun & Games</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="https://diversions.thestar.com/comics.html"  target="_blank" rel="noopener" class="nav-link tnt-section-comics">Comics</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/entertainment/tv-listings/"  class="nav-link tnt-section-tv-listings">TV Listings</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-10" data-target="#mobile-nav-left_menu-child-10">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/business/"  class="nav-link tnt-section-business ">Business</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-10" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/business/small-business/"  class="nav-link tnt-section-small-business">Small Business</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/business/technology/"  class="nav-link tnt-section-technology">Technology</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/business/personal-finance/"  class="nav-link tnt-section-personal-finance">Personal Finance</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/business/mars/"  class="nav-link tnt-section-innovation">Innovation</a>
                                    
                                </li></ul></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><a tabindex="-1" aria-hidden="true" href="/news/investigations/"  class="nav-link tnt-section-investigations ">Investigations</a>
                        </div>
                    </div></div><div class="panel panel-default">
                    <div class="panel-heading" role="tab">
                        <div class="panel-title"><span tabindex="-1" aria-hidden="true" data-toggle="collapse" class="expand-children collapsed pull-right" aria-expanded="false" aria-controls="mobile-nav-left_menu-child-12" data-target="#mobile-nav-left_menu-child-12">
                                    <i class="fas tnt-chevron-down"></i>
                                </span><a tabindex="-1" aria-hidden="true" href="/podcasts/"  class="nav-link tnt-section-podcasts ">Podcasts</a>
                        </div>
                    </div><ul id="mobile-nav-left_menu-child-12" class="collapse nav navbar-nav"><li>
                                    <a tabindex="-1" aria-hidden="true" href="/podcasts/this-matters/"  class="nav-link tnt-section-this-matters">This Matters</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/podcasts/its-political/"  class="nav-link tnt-section-it-s-political">It’s Political</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/podcasts/billionaire-murders/"  class="nav-link tnt-section-the-billionaire-murders">The Billionaire Murders</a>
                                    
                                </li><li>
                                    <a tabindex="-1" aria-hidden="true" href="/podcasts/deep-left-field/"  class="nav-link tnt-section-deep-left-field">Deep Left Field </a>
                                    
                                </li></ul></div></div></div>
                
                
                <div id="tncms-region-mobile-nav-bottom-left-region" class="tncms-region "></div>
            </aside>
        
        

        <div class="offcanvas-inner">
            <div class="offcanvas-close-btn hidden-md hidden-lg"></div>
    
    
    
    
    <div id="tncms-region-global-skyline" class="tncms-region "><div id="tncms-block-2827029" class="tncms-block"><div class="tnt-ads-container text-center  " >
        <div id="ad-2827029" class="tnt-ads dfp-ad margin-bottom-none" data-lazy="true" data-refresh="true" >
            <script>
                googletag.cmd.push(function() {
                        googletag.display('ad-2827029');
                        
                });
            </script>
        </div>
    </div></div><div id="tncms-block-2827824" class="tncms-block adLabelWrapper hidden-xs hidden-sm force20BottomMargin"><div class="tnt-ads-container text-center  " >
        <div id="ad-2827824" class="tnt-ads dfp-ad margin-bottom-none" data-lazy="true" data-refresh="true" >
            <script>
                googletag.cmd.push(function() {
                        googletag.display('ad-2827824');
                        
                });
            </script>
        </div>
    </div></div><div id="tncms-block-2827002" class="tncms-block"><div class="tnt-ads-container text-center  " >
        <div id="ad-2827002" class="tnt-ads dfp-ad margin-bottom-none" data-lazy="true" data-refresh="true" >
            <script>
                googletag.cmd.push(function() {
                        googletag.display('ad-2827002');
                        
                });
            </script>
        </div>
    </div></div></div>
    

    
        <div id="site-top-nav-container" class="hidden-sm hidden-xs hidden-print">
            <header id="site-top-nav" class="container">
                <div class="row">
                    <div id="topbar-col-one" class="col-md-6 col-sm-6"><div id="tncms-region-topbar-col-one" class="tncms-region "><div id="tncms-block-3140365" class="tncms-block">
<style>
.site-logo-desktop {
    background-image: var(--site-logo-src);
    height: var(--site-logo-height);
    width: var(--site-logo-width);
    background-size:cover;
    display:block;
}
 @media (max-width: 992px) {
    .site-logo-desktop {
        background-image: var(--site-logo-mobile-src);
        height: var(--site-logo-mobile-height);
        width: var(--site-logo-mobile-width);
        background-size:cover;
        display:block;
    } 
 }
</style>
<div class="site-logo-container text-left siteUserHeader-desktop" style="height:81px">
    <div class="logo-middle">
        <a id="siteUserHeaderHref-desktop" href="/" aria-label="Home page" class="site-logo-desktop"></a>
    </div>
</div></div></div></div>
    <div id="topbar-col-two" class="col-md-6 col-sm-6"><div id="tncms-region-topbar-col-two" class="tncms-region "><div id="tncms-block-2841699" class="tncms-block">
<div class="user-controls">
    <div id="user-controls-2841699" class="user-controls-main" style="position:relative;z-index:1010">
        
        
        <div id="user-promo-2841699" class="user-promo">
            
            <div class="user-promo-desktop left">
                
                <div class="anonymous hidden">
                    <div data-type='danon' class="user-promo-button">
                        <a href="https://www.thestar.com/subscribe">
                        <div class="line1">SALE: Only $0.50/week!</div>
                        
                        </a>
                    </div>
                </div>
                
                
                <div class="registered hidden">
                    <div data-type='dreg' class="user-promo-button">
                        <a href="https://www.thestar.com/subscribe">
                        <div class="line1">SALE: Only $0.50/week!</div>
                        
                        </a>
                    </div>
                </div>
                
                
            </div>
            
        </div>
        
        <div id="user-control-panel-2841699" class="user-login-panel header">
            <button class="btn btn-secondary dropdownMenuButton loggedout" type="button" id="userControlPanel-2841699" 
                data-placement="header" data-status="closed" data-user="loggedout">
                <span class="userName">Sign In</span>
                <span class="userIconSpan icon-guest"></span>
                <i class="userPanelIndicator fas tnt-chevron-down"></i>
            </button>
            <div class="user-controls-menu closed" role="menu" aria-label="User menu">
                    <ul role="group">
                        
                        <li role="menuitem">
                          <div class="panel-group header">
                            <div class="panel panel-default">
                              <div class="panel-heading">
                                <h4 class="panel-title">
                                  <a data-status="closed" id="editionsControlPanel-2841699">
                                    <i class="fas tnt-map-marker-alt"></i><div class="user-edition">The Star Edition<span>Change Location</span></div><i class="editionsIndicator fas tnt-chevron-down"></i>
                                  </a>
                                </h4>
                              </div>
                              <div class="panel closed" id="editionsPanel-2841699">
                                <div class="panel-body">
                                    <ul class="user-locations" role="group">
                                        <li><a class="dropdown-item active" data-location="toronto" role="menuitem" aria-label="Toronto">Toronto</a></li>
                                        <li><a class="dropdown-item" data-location="vancouver" role="menuitem" aria-label="Vancouver">Vancouver</a></li>
                                        <li><a class="dropdown-item" data-location="calgary" role="menuitem" aria-label="Calgary">Calgary</a></li>
                                        <li><a class="dropdown-item" data-location="edmonton" role="menuitem" aria-label="Edmonton">Edmonton</a></li>
                                        <li><a class="dropdown-item" data-location="winnipeg" role="menuitem" aria-label="Winnipeg">Winnipeg</a></li>
                                        <li><a class="dropdown-item" data-location="ottawa" role="menuitem" aria-label="Ottawa">Ottawa</a></li>
                                        <li><a class="dropdown-item" data-location="halifax" role="menuitem" aria-label="Halifax">Halifax</a></li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                         
                        <li><a class="dropdown-item" href="/users/admin/" role="menuitem" aria-label="Manage Profile" rel="nofollow">Manage Profile<i class="fas tnt-chevron-right"></i></a></li>
                        <li><a class="dropdown-item" href="/users/admin/service/" role="menuitem" aria-label="Subscriptions" rel="nofollow">Subscriptions<i class="fas tnt-chevron-right"></i></a></li>
                        <li><a class="dropdown-item" href="/users/admin/service/?view=transactions" role="menuitem" aria-label="Billing Information"  rel="nofollow">Billing Information<i class="fas tnt-chevron-right"></i></a></li>
                        <li><a class="dropdown-item" href="/users/admin/list/" rel="nofollow" role="menuitem" aria-label="Saved Articles">Saved Articles<i class="fas tnt-chevron-right"></i></a></li>
                        
                        <li><a class="dropdown-item" href="/newsletters/" role="menuitem" aria-label="Newsletters" >Newsletters<i class="fas tnt-chevron-right"></i></a></li>
                        
                        <li><a class="dropdown-item" href="/site/notifications/" role="menuitem" aria-label="Notifications" >Notifications<i class="fas tnt-chevron-right"></i></a></li>
                        
                        <li>
                            <a class="dropdown-item logout-btn" id="logout-2841699" onclick="handleUserLogout2841699()" rel="nofollow" role="menuitem" aria-label="Logout" >
                                Sign out
                            </a>
                        </li>
                    </ul>
            </div>
              
              
            <form id="user-login-form-2841699" style="display:none" role="form" method="post" action="https://www.thestar.com/users/login/">
                <input type="hidden" name="x_org_url" value="https://www.thestar.com/life/food-and-drink/">
                <input type="hidden" name="referer_url" value="https://www.thestar.com/life/food-and-drink/">
                <input type="hidden" name="username" value="provider:Metroland Hub">
                <input type="hidden" name="site" value="thestar.com">
            </form>
            
            <form id="user-local-logout-form-2841699" method="post" style="display:block" action="https://www.thestar.com/tncms/auth/logout/?return=https://www.thestar.com/life/food-and-drink/" >
                <input type="hidden" name="referer_url" value="https://www.thestar.com/life/food-and-drink/">
                <input type="submit" name="logout" value="Logout" class="hide">
            </form>
            <form id="user-remote-logout-form-2841699" method="post" action="https://www.thestar.com/tncms/auth/logout/"><input type="hidden" name="return" value="https://www.thestar.com/tncms/auth/logout/?return=https://www.thestar.com/life/food-and-drink/"><input type="submit" name="logout" value="Logout" class="hide">
            </form>
        
        </div><!-- closing user-login-panel -->
        
        
        
        <div class="user-controls-search-button">
            <button id="search-toggle-2841699" aria-label="Search">
                <span class="fas tnt-search"></span>
            </button>
        </div>
        
    </div><!--closing user controls main -->

    

     <div id='site-search-form-2841699' class="user-controls-search" style="display:none";>
        <form id="site-search-header" aria-label="Site search" action="/search/" method="GET" >
            <input type="hidden" name="l" value="25">
                <input type="hidden" name="s" value="start_time">
                <input type="hidden" name="sd" value="desc">
            
            
            
                <input type="hidden" name="d1" value="">
            
            <input type="hidden" name="f" value="html">
            
                <input type="hidden" name="t" value="article,video,youtube,collection">
            
            <input type="hidden" name="app" value="editorial">
            <input type="hidden" name="nsa" value="eedition">
            <div id="site-search-form-2841699" class="site-search-form input-group   ">
                <label for="site-search-2841699-term" class="sr-only">Site search</label>
                <input id="site-search-2841699-term" name="q" title="Site search" type="text" placeholder="Search..." class="form-control" autocomplete="off">
                <input type="submit" class="hide" value="Search">
                <span class="input-group-btn">
                    <button id="site-search-2841699-btn" class="btn btn-primary" aria-label="Submit Site Search" type="submit">
                        <span class="hidden-xl hidden-lg hidden-md fas tnt-search"></span>
                        <span id="site-search-button-2841699" class="hidden-xs hidden-sm">Search</span>
                    </button>
                </span>
            </div>
            <div class="user-controls-cancel-button">
                <span id="search-cancel-2841699" aria-label="Cancel Search">
                    <span class="fas tnt-times"></span>
                </span>
            </div>
        </form>
        
    </div>
    

</div><!-- closing user controls --></div></div><div id="tncms-region-nav-topbar-col-two-nav" class="tncms-region-nav"><ul id="topbar-col-two-nav_menu" class="topNav list-inline nav-list" ><li class=" "  data-cmspath="/life/food-and-drink" data-liurl="/newsletters/?itm_source=newsletter-header-link" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-i-class-fas-tnt-envelope-i-newsletters"  href="/newsletters/?itm_source=newsletter-header-link"  tabindex="0">
                    <span class="nav-label "><i class="fas tnt-envelope"></i> Newsletters</span>
                </a></li><li class=" "  data-cmspath="/life/food-and-drink/" data-liurl="https://torontostar.pressreader.com/" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-i-class-fas-tnt-file-alt-i-today-s-paper"  href="https://torontostar.pressreader.com/"  target="_blank" rel="noopener" tabindex="0">
                    <span class="nav-label "><i class="fas tnt-file-alt"></i> Today’s Paper</span>
                </a></li><li class=" "  data-cmspath="/life/food-and-drink" data-liurl="https://www.northstarbets.ca/page?key=ej0xMzUyNzc3NCZsPTEzNTI3NzcyJnA9MzQ2MQ%3D%3D&ut[%E2%80%A6]hStarBets__&utm_content=custom/tracking_sportsbettinglogo" data-parent="" data-grandparent="">
                
                <a class="nav-link   tnt-section-bettingi-class-fas-tnt-external-link-alt-i"  href="https://www.northstarbets.ca/page?key=ej0xMzUyNzc3NCZsPTEzNTI3NzcyJnA9MzQ2MQ%3D%3D&amp;ut[%E2%80%A6]hStarBets__&amp;utm_content=custom/tracking_sportsbettinglogo"  target="_blank" rel="noopener" tabindex="0">
                    <span class="nav-label ">Betting<i class="fas tnt-external-link-alt"></i></span>
                </a></li></ul><style>
            .affix-top #tncms-region-main-nav-right-region{display: none}
            .affix #tncms-region-main-nav-right-region{display: flex;column-gap:8px}
            @media (max-width: 991px){
            #main-navigation{height: 45px}
            }
            
        </style>
    </div></div>
                </div>
            </header>
        </div>
    

    
        <div id="site-header-container" class="hidden-sm hidden-xs hidden-print">
            <header id="site-header" class="container" role="banner">
                
                <div class="row">
                    <div id="masthead-full-top" class="col-lg-12"><div id="tncms-region-masthead-full-top" class="tncms-region "></div></div>
                </div>
                <div class="row">
                    
                    <div id="masthead-col-one" class="col-md-4 col-sm-4"><div id="tncms-region-masthead-col-one" class="tncms-region "></div></div>
    <div id="masthead-col-two" class="col-md-4 col-sm-4"><div id="tncms-region-masthead-col-two" class="tncms-region "></div></div>
    <div id="masthead-col-three" class="col-md-4 col-sm-4"><div id="tncms-region-masthead-col-three" class="tncms-region "></div></div>
                </div>
                <div class="row">
                    <div id="masthead-full-bottom" class="col-lg-12"><div id="tncms-region-masthead-full-bottom" class="tncms-region "></div></div>
                </div>
                
            </header>
        </div>
    

    
    
        <div id="site-navbar-container" class="hidden-print affix-top">
            <div id="tncms-region-affix-nav-brand" class="tncms-region "><div id="tncms-block-2828682" class="tncms-block sm-brand hidden-sm hidden-xs"><div id="site-logo-2828682" class="site-logo-container text-center" ><div class="logo-middle">
            <a  href="/" aria-label="Home page"><img 
            
            src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/31c48758-8d44-11ed-8c30-0bcb8697ec11.png?resize=200%2C200" 
            srcset="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/custom/image/31c48758-8d44-11ed-8c30-0bcb8697ec11.png"
            sizes="100vw"
            
            class=" img-responsive lazyload tnt-prop-img"
            width="138"
            height="138"
            alt="site-logo"
            ></a>
        </div></div></div></div>
            <nav id="main-navigation" aria-label="Main" class="navbar yamm navbar-default container navbar-static">
                
                
                <div class="navbar-header">
                    
                    
                        <button type="button" class=" visible-sm visible-xs navbar-toggle pull-left" data-toggle="offcanvas" data-target="left" aria-label="Left Main Menu" aria-expanded="false">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            
                        </button>
                         
                    
                    

                    
                        <div class="navbar-brand hidden-md hidden-lg pos_left">
                            
                                <div id="tncms-region-main-nav-brand" class="tncms-region "><div id="tncms-block-3140368" class="tncms-block">
<style>
.site-logo-mobile {
    background-image: var(--site-logo-src);
    height: var(--site-logo-height);
    width: var(--site-logo-width);
    background-size:cover;
    display:block;
}
 @media (max-width: 992px) {
    .site-logo-mobile {
        background-image: var(--site-logo-mobile-src);
        height: var(--site-logo-mobile-height);
        width: var(--site-logo-mobile-width);
        background-size:cover;
        display:block;
    } 
 }
</style>
<div class="site-logo-container text-left siteUserHeader-mobile" style="height:25px">
    <div class="logo-middle">
        <a id="siteUserHeaderHref-mobile" href="/" aria-label="Home page" class="site-logo-mobile"></a>
    </div>
</div></div><div id="tncms-block-2841705" class="tncms-block">
<div class="user-controls">
    <div id="user-controls-2841705" class="user-controls-main" >
        
        
        <div id="user-promo-2841705" class="user-promo">
            
            <div class="user-promo-mobile ">
                
                <div class="anonymous hidden">
                    <div class="user-promo-button">
                        <a href="https://www.thestar.com/subscribe" aria-label="SALE:<br>$0.50/week!">SALE:<br>$0.50/week!</a>
                    </div>
                </div>
                
                
                <div class="registered hidden">
                    <div class=" user-promo-button">
                        <a href="https://www.thestar.com/subscribe" aria-label="SALE:<br>$0.50/week!">SALE:<br>$0.50/week!</a>
                    </div>
                </div>
                
                
            </div>
            
        </div>
        
        <div id="user-control-panel-2841705" class="user-login-panel mobile">
            <button class="btn btn-secondary dropdownMenuButton loggedout" type="button" id="userControlPanel-2841705" 
                data-placement="mobile" data-status="closed" data-user="loggedout">
                <span class="userName">Sign In</span>
                <span class="userIconSpan icon-guest"></span>
                <i class="userPanelIndicator fas tnt-chevron-down"></i>
            </button>
            <div class="user-controls-menu closed" role="menu" aria-label="User menu">
                    <ul role="group">
                        
                        <li role="menuitem">
                          <div class="panel-group mobile">
                            <div class="panel panel-default">
                              <div class="panel-heading">
                                <h4 class="panel-title">
                                  <a data-status="closed" id="editionsControlPanel-2841705">
                                    <i class="fas tnt-map-marker-alt"></i><div class="user-edition">The Star Edition<span>Change Location</span></div><i class="editionsIndicator fas tnt-chevron-down"></i>
                                  </a>
                                </h4>
                              </div>
                              <div class="panel closed" id="editionsPanel-2841705">
                                <div class="panel-body">
                                    <ul class="user-locations" role="group">
                                        <li><a class="dropdown-item active" data-location="toronto" role="menuitem" aria-label="Toronto">Toronto</a></li>
                                        <li><a class="dropdown-item" data-location="vancouver" role="menuitem" aria-label="Vancouver">Vancouver</a></li>
                                        <li><a class="dropdown-item" data-location="calgary" role="menuitem" aria-label="Calgary">Calgary</a></li>
                                        <li><a class="dropdown-item" data-location="edmonton" role="menuitem" aria-label="Edmonton">Edmonton</a></li>
                                        <li><a class="dropdown-item" data-location="winnipeg" role="menuitem" aria-label="Winnipeg">Winnipeg</a></li>
                                        <li><a class="dropdown-item" data-location="ottawa" role="menuitem" aria-label="Ottawa">Ottawa</a></li>
                                        <li><a class="dropdown-item" data-location="halifax" role="menuitem" aria-label="Halifax">Halifax</a></li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                         
                        <li><a class="dropdown-item" href="/users/admin/" role="menuitem" aria-label="Manage Profile" rel="nofollow">Manage Profile<i class="fas tnt-chevron-right"></i></a></li>
                        <li><a class="dropdown-item" href="/users/admin/service/" role="menuitem" aria-label="Subscriptions" rel="nofollow">Subscriptions<i class="fas tnt-chevron-right"></i></a></li>
                        <li><a class="dropdown-item" href="/users/admin/service/?view=transactions" role="menuitem" aria-label="Billing Information"  rel="nofollow">Billing Information<i class="fas tnt-chevron-right"></i></a></li>
                        <li><a class="dropdown-item" href="/users/admin/list/" rel="nofollow" role="menuitem" aria-label="Saved Articles">Saved Articles<i class="fas tnt-chevron-right"></i></a></li>
                        
                        <li><a class="dropdown-item" href="/newsletters/" role="menuitem" aria-label="Newsletters" >Newsletters<i class="fas tnt-chevron-right"></i></a></li>
                        
                        <li><a class="dropdown-item" href="/site/notifications/" role="menuitem" aria-label="Notifications" >Notifications<i class="fas tnt-chevron-right"></i></a></li>
                        
                        <li>
                            <a class="dropdown-item logout-btn" id="logout-2841705" onclick="handleUserLogout2841705()" rel="nofollow" role="menuitem" aria-label="Logout" >
                                Sign out
                            </a>
                        </li>
                    </ul>
            </div>
              
              
            <form id="user-login-form-2841705" style="display:none" role="form" method="post" action="https://www.thestar.com/users/login/">
                <input type="hidden" name="x_org_url" value="https://www.thestar.com/life/food-and-drink/">
                <input type="hidden" name="referer_url" value="https://www.thestar.com/life/food-and-drink/">
                <input type="hidden" name="username" value="provider:Metroland Hub">
                <input type="hidden" name="site" value="thestar.com">
            </form>
            
            <form id="user-local-logout-form-2841705" method="post" style="display:block" action="https://www.thestar.com/tncms/auth/logout/?return=https://www.thestar.com/life/food-and-drink/" >
                <input type="hidden" name="referer_url" value="https://www.thestar.com/life/food-and-drink/">
                <input type="submit" name="logout" value="Logout" class="hide">
            </form>
            <form id="user-remote-logout-form-2841705" method="post" action="https://www.thestar.com/tncms/auth/logout/"><input type="hidden" name="return" value="https://www.thestar.com/tncms/auth/logout/?return=https://www.thestar.com/life/food-and-drink/"><input type="submit" name="logout" value="Logout" class="hide">
            </form>
        
        </div><!-- closing user-login-panel -->
        
        
        
    </div><!--closing user controls main -->

    

</div><!-- closing user controls --></div></div>
                            
                        </div>
                    

                    
                </div>

                
                    <div id="navbar-collapse" class="navbar-collapse collapse">
                        
                            <div class="pull-right">
                                <div id="tncms-region-main-nav-right-region" class="tncms-region "><div id="tncms-block-3118246" class="tncms-block">

</div><div id="tncms-block-2841702" class="tncms-block">
<div class="user-controls">
    <div id="user-controls-2841702" class="user-controls-main" >
        
        <div id="user-control-panel-2841702" class="user-login-panel static">
            <button class="btn btn-secondary dropdownMenuButton loggedout" type="button" id="userControlPanel-2841702" 
                data-placement="static" data-status="closed" data-user="loggedout">
                <span class="userName">Sign In</span>
                <span class="userIconSpan icon-guest"></span>
                <i class="userPanelIndicator fas tnt-chevron-down"></i>
            </button>
            <div class="user-controls-menu closed" role="menu" aria-label="User menu">
                    <ul role="group">
                        
                        <li role="menuitem">
                          <div class="panel-group static">
                            <div class="panel panel-default">
                              <div class="panel-heading">
                                <h4 class="panel-title">
                                  <a data-status="closed" id="editionsControlPanel-2841702">
                                    <i class="fas tnt-map-marker-alt"></i><div class="user-edition">The Star Edition<span>Change Location</span></div><i class="editionsIndicator fas tnt-chevron-down"></i>
                                  </a>
                                </h4>
                              </div>
                              <div class="panel closed" id="editionsPanel-2841702">
                                <div class="panel-body">
                                    <ul class="user-locations" role="group">
                                        <li><a class="dropdown-item active" data-location="toronto" role="menuitem" aria-label="Toronto">Toronto</a></li>
                                        <li><a class="dropdown-item" data-location="vancouver" role="menuitem" aria-label="Vancouver">Vancouver</a></li>
                                        <li><a class="dropdown-item" data-location="calgary" role="menuitem" aria-label="Calgary">Calgary</a></li>
                                        <li><a class="dropdown-item" data-location="edmonton" role="menuitem" aria-label="Edmonton">Edmonton</a></li>
                                        <li><a class="dropdown-item" data-location="winnipeg" role="menuitem" aria-label="Winnipeg">Winnipeg</a></li>
                                        <li><a class="dropdown-item" data-location="ottawa" role="menuitem" aria-label="Ottawa">Ottawa</a></li>
                                        <li><a class="dropdown-item" data-location="halifax" role="menuitem" aria-label="Halifax">Halifax</a></li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                         
                        <li><a class="dropdown-item" href="/users/admin/" role="menuitem" aria-label="Manage Profile" rel="nofollow">Manage Profile<i class="fas tnt-chevron-right"></i></a></li>
                        <li><a class="dropdown-item" href="/users/admin/service/" role="menuitem" aria-label="Subscriptions" rel="nofollow">Subscriptions<i class="fas tnt-chevron-right"></i></a></li>
                        <li><a class="dropdown-item" href="/users/admin/service/?view=transactions" role="menuitem" aria-label="Billing Information"  rel="nofollow">Billing Information<i class="fas tnt-chevron-right"></i></a></li>
                        <li><a class="dropdown-item" href="/users/admin/list/" rel="nofollow" role="menuitem" aria-label="Saved Articles">Saved Articles<i class="fas tnt-chevron-right"></i></a></li>
                        
                        <li><a class="dropdown-item" href="/newsletters/" role="menuitem" aria-label="Newsletters" >Newsletters<i class="fas tnt-chevron-right"></i></a></li>
                        
                        <li><a class="dropdown-item" href="/site/notifications/" role="menuitem" aria-label="Notifications" >Notifications<i class="fas tnt-chevron-right"></i></a></li>
                        
                        <li>
                            <a class="dropdown-item logout-btn" id="logout-2841702" onclick="handleUserLogout2841702()" rel="nofollow" role="menuitem" aria-label="Logout" >
                                Sign out
                            </a>
                        </li>
                    </ul>
            </div>
              
              
            <form id="user-login-form-2841702" style="display:none" role="form" method="post" action="https://www.thestar.com/users/login/">
                <input type="hidden" name="x_org_url" value="https://www.thestar.com/life/food-and-drink/">
                <input type="hidden" name="referer_url" value="https://www.thestar.com/life/food-and-drink/">
                <input type="hidden" name="username" value="provider:Metroland Hub">
                <input type="hidden" name="site" value="thestar.com">
            </form>
            
            <form id="user-local-logout-form-2841702" method="post" style="display:block" action="https://www.thestar.com/tncms/auth/logout/?return=https://www.thestar.com/life/food-and-drink/" >
                <input type="hidden" name="referer_url" value="https://www.thestar.com/life/food-and-drink/">
                <input type="submit" name="logout" value="Logout" class="hide">
            </form>
            <form id="user-remote-logout-form-2841702" method="post" action="https://www.thestar.com/tncms/auth/logout/"><input type="hidden" name="return" value="https://www.thestar.com/tncms/auth/logout/?return=https://www.thestar.com/life/food-and-drink/"><input type="submit" name="logout" value="Logout" class="hide">
            </form>
        
        </div><!-- closing user-login-panel -->
        
        
        <div id="user-promo-2841702" class="user-promo">
            
            <div class="user-promo-desktop right">
                
                
                
                <div class="subscriber hidden">
                    <div data-type='dsub' class="user-promo-button">
                        <a href="/newsletters?itm_source=newsletter-header-button">
                        <div class="line1">Newsletters</div>
                        
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>
        
        
        
    </div><!--closing user controls main -->

    

</div><!-- closing user controls --></div></div>
                                
                            </div>
                        
                        <div class="navbar-left">
                            <div id="tncms-region-nav-main-nav" class="tncms-region-nav"><ul id="main-nav_menu" class="topNav nav navbar-nav" role="navigation" aria-label="Main"><li class=" dropdown " aria-expanded="false" data-cmspath="/life/food-and-drink/" data-liurl="/" data-parent="/life/food-and-drink/" data-grandparent="/life/">
                
                <a class="nav-link  nav-home dropdown-toggle  tnt-section-home"   data-target="#"   href="/"  tabindex="0">
                    <span class="nav-label ">Home</span>
                </a><ul id="main-nav_menu-child-1" class="subNav dropdown">
                        
                        <span class="menuLeftAlign">
                        
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-real-estate"  href="/real-estate/"  tabindex="0">
                                <span class="nav-label">Real Estate</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-transit"  href="/news/transit/"  tabindex="0">
                                <span class="nav-label">Transit</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-israel-hamas-war"  href="/news/world/israel-hamas/"  tabindex="0">
                                <span class="nav-label">Israel-Hamas War</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-hockey-canada"  href="/sports/hockey/hockey-canada/"  tabindex="0">
                                <span class="nav-label">Hockey Canada</span>
                                </a>
                            </li>
                            
                        
                        
                        </span>
                        
                    </ul></li><li class=" dropdown " aria-expanded="false" data-cmspath="/life/food-and-drink/" data-liurl="/news/gta/" data-parent="/life/food-and-drink/" data-grandparent="/life/">
                
                <a class="nav-link  dropdown-toggle  tnt-section-gta"   data-target="#"   href="/news/gta/"  tabindex="0">
                    <span class="nav-label ">GTA</span>
                </a><ul id="main-nav_menu-child-6" class="subNav dropdown">
                        
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-real-estate"  href="/real-estate/"  tabindex="0">
                                <span class="nav-label">Real Estate</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-readers-choice-awards"  href="https://readerschoice.thestar.com/readerschoice-toronto/"  target="_blank" rel="noopener" tabindex="0">
                                <span class="nav-label">Readers’ Choice Awards</span>
                                </a>
                            </li>
                            
                        
                        
                    </ul></li><li class=" dropdown " aria-expanded="false" data-cmspath="/life/food-and-drink/" data-liurl="/news/canada/" data-parent="/life/food-and-drink/" data-grandparent="/life/">
                
                <a class="nav-link  dropdown-toggle  tnt-section-canada"   data-target="#"   href="/news/canada/"  tabindex="0">
                    <span class="nav-label ">Canada</span>
                </a><ul id="main-nav_menu-child-9" class="subNav dropdown">
                        
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-ontario"  href="/news/ontario/"  tabindex="0">
                                <span class="nav-label">Ontario</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-british-columbia"  href="/news/canada/british-columbia/"  tabindex="0">
                                <span class="nav-label">British Columbia</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-alberta"  href="/news/canada/alberta/"  tabindex="0">
                                <span class="nav-label">Alberta</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-quebec"  href="/news/canada/quebec/"  tabindex="0">
                                <span class="nav-label">Quebec</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-nova-scotia"  href="/news/canada/nova-scotia/"  tabindex="0">
                                <span class="nav-label">Nova Scotia</span>
                                </a>
                            </li>
                            
                        
                        
                    </ul></li><li class=" dropdown " aria-expanded="false" data-cmspath="/life/food-and-drink/" data-liurl="/politics/" data-parent="/life/food-and-drink/" data-grandparent="/life/">
                
                <a class="nav-link  dropdown-toggle  tnt-section-politics"   data-target="#"   href="/politics/"  tabindex="0">
                    <span class="nav-label ">Politics</span>
                </a><ul id="main-nav_menu-child-15" class="subNav dropdown">
                        
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-federal-politics"  href="/politics/federal/"  tabindex="0">
                                <span class="nav-label">Federal Politics</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-provincial-politics"  href="/politics/provincial/"  tabindex="0">
                                <span class="nav-label">Provincial Politics</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-political-opinion"  href="/politics/political-opinion/"  tabindex="0">
                                <span class="nav-label">Political Opinion</span>
                                </a>
                            </li>
                            
                        
                        
                    </ul></li><li class=" dropdown " aria-expanded="false" data-cmspath="/life/food-and-drink/" data-liurl="/news/world/" data-parent="/life/food-and-drink/" data-grandparent="/life/">
                
                <a class="nav-link  dropdown-toggle  tnt-section-world"   data-target="#"   href="/news/world/"  tabindex="0">
                    <span class="nav-label ">World</span>
                </a><ul id="main-nav_menu-child-19" class="subNav dropdown">
                        
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-united-states"  href="/news/world/united-states/"  tabindex="0">
                                <span class="nav-label">United States</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-americas"  href="/news/world/americas/"  tabindex="0">
                                <span class="nav-label">Americas</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-europe"  href="/news/world/europe/"  tabindex="0">
                                <span class="nav-label">Europe</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-asia"  href="/news/world/asia/"  tabindex="0">
                                <span class="nav-label">Asia</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-africa"  href="/news/world/africa/"  tabindex="0">
                                <span class="nav-label">Africa</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-australia"  href="/news/world/australia/"  tabindex="0">
                                <span class="nav-label">Australia</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-middle-east"  href="/news/world/middle-east/"  tabindex="0">
                                <span class="nav-label">Middle East</span>
                                </a>
                            </li>
                            
                        
                        
                    </ul></li><li class=" dropdown " aria-expanded="false" data-cmspath="/life/food-and-drink/" data-liurl="/opinion/" data-parent="/life/food-and-drink/" data-grandparent="/life/">
                
                <a class="nav-link  dropdown-toggle  tnt-section-opinion"   data-target="#"   href="/opinion/"  tabindex="0">
                    <span class="nav-label ">Opinion</span>
                </a><ul id="main-nav_menu-child-27" class="subNav dropdown">
                        
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-star-columnists"  href="/opinion/star-columnists/"  tabindex="0">
                                <span class="nav-label">Star Columnists</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-editorials"  href="/opinion/editorials/"  tabindex="0">
                                <span class="nav-label">Editorials</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-contributors"  href="/opinion/contributors/"  tabindex="0">
                                <span class="nav-label">Contributors</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-letters-to-the-editor"  href="/opinion/letters-to-the-editor/"  tabindex="0">
                                <span class="nav-label">Letters To The Editor</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-editorial-cartoons"  href="/opinion/editorial-cartoons/"  tabindex="0">
                                <span class="nav-label">Editorial Cartoons</span>
                                </a>
                            </li>
                            
                        
                        
                    </ul></li><li class=" dropdown active" aria-expanded="false" data-cmspath="/life/food-and-drink/" data-liurl="/life/" data-parent="/life/food-and-drink/" data-grandparent="/life/">
                
                <a class="nav-link  dropdown-toggle  tnt-section-life"   data-target="#"   href="/life/"  tabindex="0">
                    <span class="nav-label ">Life</span>
                </a><ul id="main-nav_menu-child-33" class="subNav dropdown">
                        
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-relationships"  href="/life/relationships/"  tabindex="0">
                                <span class="nav-label">Relationships</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" active" >
                                <a class="nav-link   tnt-section-food-and-drink"  href="/life/food-and-drink/"  tabindex="0">
                                <span class="nav-label">Food and Drink</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-home-and-garden"  href="/life/home-and-garden/"  tabindex="0">
                                <span class="nav-label">Home and Garden</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-beauty-and-fashion"  href="/life/beauty-and-fashion/"  tabindex="0">
                                <span class="nav-label">Beauty and Fashion</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-health"  href="/life/health-wellness/"  tabindex="0">
                                <span class="nav-label">Health</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-together"  href="/life/together/"  tabindex="0">
                                <span class="nav-label">Together</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-travel"  href="/life/travel/"  tabindex="0">
                                <span class="nav-label">Travel</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-horoscopes"  href="/life/horoscopes/"  tabindex="0">
                                <span class="nav-label">Horoscopes</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-obituaries"  href="https://obituaries.thestar.com/"  target="_blank" rel="noopener" tabindex="0">
                                <span class="nav-label">Obituaries</span>
                                </a>
                            </li>
                            
                        
                        
                    </ul></li><li class=" dropdown " aria-expanded="false" data-cmspath="/life/food-and-drink/" data-liurl="/sports/" data-parent="/life/food-and-drink/" data-grandparent="/life/">
                
                <a class="nav-link  dropdown-toggle  tnt-section-sports"   data-target="#"   href="/sports/"  tabindex="0">
                    <span class="nav-label ">Sports</span>
                </a><ul id="main-nav_menu-child-43" class="subNav dropdown">
                        
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-nhl"  href="/sports/hockey/"  tabindex="0">
                                <span class="nav-label">NHL</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-nba"  href="/sports/basketball/"  tabindex="0">
                                <span class="nav-label">NBA</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-mlb"  href="/sports/baseball/"  tabindex="0">
                                <span class="nav-label">MLB</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-nfl"  href="/sports/football/"  tabindex="0">
                                <span class="nav-label">NFL</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-sports-betting"  href="/sports/sports-betting/"  tabindex="0">
                                <span class="nav-label">Sports Betting</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-golf"  href="/sports/golf/"  tabindex="0">
                                <span class="nav-label">Golf</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-soccer"  href="/sports/soccer/"  tabindex="0">
                                <span class="nav-label">Soccer</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-tennis"  href="/sports/tennis/"  tabindex="0">
                                <span class="nav-label">Tennis</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-auto-racing"  href="/sports/auto-racing/"  tabindex="0">
                                <span class="nav-label">Auto Racing</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-cricket"  href="/sports/cricket/"  tabindex="0">
                                <span class="nav-label">Cricket</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-olympics-and-paralympics"  href="/sports/olympics-and-paralympics/"  tabindex="0">
                                <span class="nav-label">Olympics and Paralympics</span>
                                </a>
                            </li>
                            
                        
                        
                    </ul></li><li class=" dropdown " aria-expanded="false" data-cmspath="/life/food-and-drink/" data-liurl="/entertainment/" data-parent="/life/food-and-drink/" data-grandparent="/life/">
                
                <a class="nav-link  dropdown-toggle  tnt-section-entertainment"   data-target="#"   href="/entertainment/"  tabindex="0">
                    <span class="nav-label ">Entertainment</span>
                </a><ul id="main-nav_menu-child-55" class="subNav dropdown">
                        
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-television"  href="/entertainment/television/"  tabindex="0">
                                <span class="nav-label">Television</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-music"  href="/entertainment/music/"  tabindex="0">
                                <span class="nav-label">Music</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-books"  href="/entertainment/books/"  tabindex="0">
                                <span class="nav-label">Books</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-movies"  href="/entertainment/movies/"  tabindex="0">
                                <span class="nav-label">Movies</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-stage"  href="/entertainment/stage/"  tabindex="0">
                                <span class="nav-label">Stage</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-visual-arts"  href="/entertainment/visual-arts/"  tabindex="0">
                                <span class="nav-label">Visual Arts</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-fun-games"  href="https://diversions.thestar.com/"  target="_blank" rel="noopener" tabindex="0">
                                <span class="nav-label">Fun & Games</span>
                                </a>
                            </li>
                            
                        
                            
                            <li class=" " >
                                <a class="nav-link   tnt-section-comics"  href="https://diversions.thestar.com/comics.html"  target="_blank" rel="noopener" tabindex="0">
                                <span class="nav-label">Comics</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ;
           }
       } else {
           userControlPanelButton2841702.addEventListener('click', function(){
                
                window.location = 'https://www.thestar.com/users/login/?referer_url=https%3A%2F%2Fwww.thestar.com%2Flife%2Frelationships%2F';
                
           });
       }
    }
 /*]]>*/</script>
<script>/*<![CDATA[*/ 
                    function getAbsoluteHeight(el) {
                      var styles = window.getComputedStyle(el);
                      var margin = parseFloat(styles['marginTop']) +
                      parseFloat(styles['marginBottom']);

                      return Math.ceil(el.offsetHeight + margin);
                    }
                    var isMobile = __tnt.client.platform.android || __tnt.client.platform.iphone || __tnt.client.platform.ios;
                    
                        !function(t,i,n){var e,a,s,o,c,d={init:function(){a=i.getElementById("site-navbar-container"),isMobile?a.classList.add("affix-sticky"):(e=i.getElementById("main-body-container"),s=getAbsoluteHeight(a),o=!1,c=0,t.addEventListener("scroll",d.navPosition,!1),t.addEventListener("mousewheel",d.navPosition,!1))},navPosition:function(){o||(o=!0,setTimeout(function(){var n=a.getBoundingClientRect(),d=t.pageYOffset||i.documentElement.scrollTop,f=n.top+d;d>=f&&d>c?a.classList.contains("affix")||(c=f,a.classList.add("affix"),a.classList.remove("affix-top"),e.style.marginTop=s+"px"):a.classList.contains("affix-top")||(a.classList.remove("affix"),a.classList.add("affix-top"),e.style.marginTop="0px"),o=!1},25))}};"loading"==i.readyState?i.addEventListener("DOMContentLoaded",d.init,!1):d.init()}(window,document,__tnt);
                    document.addEventListener('DOMContentLoaded', function() {
                        var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                        
                        if (isIOS) {
                            Array.from(document.querySelectorAll('[data-toggle="offcanvas"]')).forEach(function(drawer) {
                                drawer.addEventListener("mouseover", function(e) {
                                    var drawerCls = drawer.dataset.target === 'left' ? 'active-left' : 'active-right';
                                    document.documentElement.classList.add('drawer-open', drawerCls);
                                })
                            })
                        }
                    }); /*]]>*/</script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/shared-content/art/tncms/templates/libraries/flex/components/plugins/resources/scripts/sticky-kit.cd42d35abf643b0a78798fe03bf6bc83.js"></script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/shared-content/art/tncms/templates/libraries/flex/components/template/resources/scripts/tnt.regions.b44801b45845a81b995eeaad12f4f276.js"></script>
<script>/*<![CDATA[*/ (function() {
                    window.addEventListener('load', function() {
                        __tnt.regions.stickySide.init(document.getElementById('sticky-side-primary'), document.getElementById('sticky-side-primary-spacer'), 'siderail', '.row');
                    });
                })(); /*]]>*/</script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/scripts/promo_popup.min.js?_dc=1706121063"></script>
<script>/*<![CDATA[*/ document.addEventListener("DOMContentLoaded", __tnt.deprecatedCheck, false); /*]]>*/</script>
<script>/*<![CDATA[*/ 
            jQuery(document).ready(function($){
                var iqLogin = Cookies.get('tnt-iq-login') || false;
                if (__tnt.user.loggedIn && iqLogin == false) {
                    if (__tnt.user.services) {
                        var userServices = __tnt.user.services.split(',');
                        for (i = 0; i < userServices.length; i++) { 
                            var serviceData = 'has_subservice: ' + userServices[i];
                            
                        }
                    }
                    Cookies.set('tnt-iq-login', 1);
                }
            });
         /*]]>*/</script>
<script src="https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/live/libraries/flex/components/torstar_core/resources/scripts/save.asset.js?_dc=1706121063"></script>
<script src="https://cdn.viafoura.net/vf-v2.js"></script></body>
</html>