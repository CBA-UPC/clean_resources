!function(){"use strict";function t(t,e){for(var i in e)t.style[i]=e[i]}function e(){this.addingToHostAllowed=!1,this.fifDisplayMode=null,this._loadSettings(),this.adArea=new i(this.fifDisplayMode)}function i(t){this.FiFMode=!1,this.FiFDisplayMode=t,this.strCode="",this.iframe=null,this.adDocument=null,this.adWindow=null,this.hostWindow=null,this.origIframe=null,this._findLocationOnHost(),this.hostWindow!==window&&this._hideOriginalIframe()}function n(){this.currentScript=r,this.placementsCollector=new s,this.host=null,this._transportPlacementsHandler=null,this.setTimeoutId=null,this._init()}function s(){this.placements={}}function a(t,e){this.window=null,this.addToHostDirectly=!!e,this.origin="",this.queue=[],this._create(t)}var o={PROTOCOL_ID:"gfb",DOMAIN_REGEXP:/^https?:\/\/([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z0-9]{2,}(:[0-9]+)*/i,DATA_ATTR_REGEXP:/^data-[a-z0-9\-\.\:_]+$/i,HIDDEN:"hidden",CLONE:"clone",CONTAIN:"contain",XGDE_DEFAULT_SUBDOMAIN:"gde-default",XGDE_FULL_URL_REGEXP:/\/\/([a-z0-9\-_]+)\.hit\.gemius\.pl\/gdejs\/xgde\.js$/i,XGDE_SUBDOMAIN_REGEXP:/^[a-z0-9\-_]+$/i,XGDE_MAIN_URL:".hit.gemius.pl/gdejs/xgde.js",GDE_SYNC_SCRIPT_REGEXP:/^<script src="(?:https?:)?\/\/([a-z0-9._]+\.adocean\.(?:pl|lan))\/_[0-9]+\/ad\.js\?id=([a-z0-9_.]+)\/redir=/i,GDE_SYNC_DOMAIN_REGEXP:/^[a-z0-9._]+\.adocean\.(?:pl|lan)$/i},r=document.currentScript||document.querySelector('script[data-name="gfbuster"]');e.prototype={initListener:function(){var t=this;window.addEventListener("message",function e(i){i.source===window.parent&&i.data&&"object"==typeof i.data&&i.data.prot===o.PROTOCOL_ID&&(t.load(i.data.placements,i.data.fif),window.removeEventListener("message",e))})},load:function(t,e){(t.gdeSync||t.gdeAsync)&&(e="boolean"!=typeof e||e||!this.addingToHostAllowed,t.gdeSync&&this._addSyncPlacements(t.gdeSync),this.adArea.create(e),t.gdeAsync&&this._addAsyncPlacements(t.gdeAsync.placements,t.gdeAsync.xgdeSubdomain))},_loadSettings:function(){switch(this.addingToHostAllowed="true"===r.dataset.addingToHostAllowed,r.dataset.displayMode){case o.HIDDEN:case o.CLONE:case o.CONTAIN:this.fifDisplayMode=r.dataset.displayMode;break;default:this.fifDisplayMode=o.CLONE}},_addAsyncPlacements:function(t,e){if(Array.isArray(t)&&t.length){this.adArea.adWindow._gdeaq=this.adArea.adWindow._gdeaq||[];for(var i=0;i<t.length;++i)this._addNewGDEAsyncPlacement(t[i]);var n=o.XGDE_SUBDOMAIN_REGEXP.test(e)?e:o.XGDE_DEFAULT_SUBDOMAIN,s=document.createElement("script");s.src="//"+n+o.XGDE_MAIN_URL,this.adArea.addElement(s)}},_addNewGDEAsyncPlacement:function(t){var e=document.createElement("div");e.className="gdedisplay";for(var i in t)o.DATA_ATTR_REGEXP.test(i)&&e.setAttribute(i,t[i]);this.adArea.addElement(e),this.adArea.adWindow._gdeaq.push(["display"])},_addSyncPlacements:function(t){if(Array.isArray(t)&&t.length)for(var e=0;e<t.length;++e)o.GDE_SYNC_DOMAIN_REGEXP.test(t[e].domain)&&this.adArea.addSyncScript("//"+t[e].domain+"/_"+(new Date).getTime()+"/ad.js?id="+t[e].id)}},i.HTML_TEMPLATE="<!DOCTYPE html><html><head><script>var inDapIF = true;</script></head><body>%b</body></html>",i.prototype={addSyncScript:function(t){this.strCode+='<script src="'+t+'"></script>'},create:function(t){""!==this.strCode||t?(this.FiFMode=!0,this._createFiF()):(this.adWindow=this.hostWindow,this.adDocument=this.adWindow.document)},addElement:function(t){this.FiFMode?this.adDocument.body.appendChild(t):this.origIframe.parentNode.insertBefore(t,this.origIframe)},_createFiF:function(){var t=this.iframe=document.createElement("iframe");t.src="about:blank",this._setDisplayAttributes(),this.origIframe.parentNode.insertBefore(t,this.origIframe);var e=t.contentWindow.document;e.open(),e.write(i.HTML_TEMPLATE.replace("%b",this.strCode)),e.close(),this.adDocument=e,this.adWindow=t.contentWindow},_findLocationOnHost:function(){for(var t=window,e=null,i=window,n=window,s=window;n.self!==n.parent;){s=n,n=n.parent;try{n.document,i=s,t=n}catch(t){}}for(var a=t.document.getElementsByTagName("iframe"),o=0;o<a.length;++o)if(a[o].contentWindow===i){e=a[o];break}if(e)this.hostWindow=t,this.origIframe=e;else{this.hostWindow=window;var r=document.createElement("div");document.body.appendChild(r),this.origIframe=r}},_hideOriginalIframe:function(){t(this.origIframe,{height:"0",border:"none"})},_setDisplayAttributes:function(){this.displayMode===o.CLONE?this._cloneAttributes():(t(this.iframe,{display:"block",width:"100%",padding:"0",border:"none",margin:"0"}),this.iframe.style.height=this.displayMode===o.HIDDEN?"0":"100%")},_cloneAttributes:function(){for(var t=["scrolling","marginwidth","marginheight","width","height","frameborder"],e=0;e<t.length;++e)this.origIframe.hasAttribute(t[e])&&this.iframe.setAttribute(t[e],this.origIframe.getAttribute(t[e]));this.iframe.style.cssText=this.origIframe.style.cssText}},n.MAX_WAIT_TIME=1e4,n.prototype={_init:function(){window.self!==window.parent&&(this._blockEmissions(),"true"===this.currentScript.dataset.gdeSync&&this.placementsCollector.initSyncCollector(),"loading"===document.readyState?(this._transportPlacementsHandler=this._transportPlacements.bind(this),document.addEventListener("DOMContentLoaded",this._transportPlacementsHandler),this.setTimeoutId=setTimeout(this._transportPlacementsHandler,n.MAX_WAIT_TIME)):this._transportPlacements())},_blockEmissions:function(){["gao","_gdeaq"].forEach(function(t){Object.defineProperty(window,t,{value:null,writable:!1})})},_transportPlacements:function(){this._transportPlacementsHandler&&(document.removeEventListener("DOMContentLoaded",this._transportPlacementsHandler),clearTimeout(this.setTimeoutId));var t=this.placementsCollector.getPlacements();if(Object.keys(t).length>0){var e=this.currentScript.dataset;this.host=this.host||new a(e.url,"false"===e.fif),this.host.addPlacements(t)}}},s.prototype={initSyncCollector:function(){var t=document.write;document.write=function(e){var i;"string"==typeof e&&(i=e.match(o.GDE_SYNC_SCRIPT_REGEXP))?(this.placements.hasOwnProperty("gdeSync")||(this.placements.gdeSync=[]),this.placements.gdeSync.push({domain:i[1],id:i[2]})):t.apply(document,arguments)}.bind(this)},getPlacements:function(){return this._collectGDEAsync(),this.placements},_collectGDEAsync:function(){var t,e,i,n,s,a=[],r=document.getElementsByClassName("gdedisplay");for(n=0;n<r.length;++n){for(t={},i=r[n].attributes,s=0;s<i.length;++s)e=i[s],o.DATA_ATTR_REGEXP.test(e.name)&&(t[e.name]=e.value);Object.keys(t).length>0&&a.push(t)}a.length>0&&(this.placements.gdeAsync={placements:a,xgdeSubdomain:this._getXGDESubdomain()})},_getXGDESubdomain:function(){for(var t,e=document.getElementsByTagName("script"),i=o.XGDE_DEFAULT_SUBDOMAIN,n=0,s=e.length;n<s;++n)if(e[n].hasAttribute("src")&&(t=e[n].getAttribute("src").match(o.XGDE_FULL_URL_REGEXP))){i=t[1];break}return i}},a.prototype={addPlacements:function(t){var e={prot:o.PROTOCOL_ID,fif:!this.addToHostDirectly,placements:t};this.window?this._send(e):this.queue.push(e)},_create:function(e){if(e=e||this._determineHostDomain(),this._setOrigin(e)){var i=document.createElement("iframe");i.src=e+("/"===e.slice(-1)?"":"/")+"gfbuster.html",t(i,{display:"block",position:"fixed",top:"0",left:"0",width:"100%",height:"100%",padding:"0",border:"none",margin:"0"}),i.addEventListener("load",this._onLoad.bind(this,i)),document.body.appendChild(i)}},_determineHostDomain:function(){for(var t=window,e=null;t.parent!==t.parent.parent;){try{t.parent.document}catch(t){break}t=t.parent}var i;try{i=t.document.referrer||t.parent.location.href}catch(t){i=null}if("string"==typeof i){var n=decodeURI(i).match(o.DOMAIN_REGEXP);n&&(e=n[0])}return e},_setOrigin:function(t){var e;return!("string"!=typeof t||!(e=t.match(o.DOMAIN_REGEXP)))&&(this.origin=e[0],!0)},_send:function(t){this.window.postMessage(t,this.origin)},_onLoad:function(t){if(this.window=t.contentWindow,this.queue.length>0){for(var e=0;e<this.queue.length;++e)this._send(this.queue[e]);this.queue=[]}}};var d=window.$gfBuster=window.$gfBuster||{plcmtLoader:null,ifrBuster:null},c=window.self!==window.parent;if("host"===r.dataset.type&&c){if(!d.plcmtLoader){var l=new e;l.initListener(),d.plcmtLoader=!0}}else c&&(d.ifrBuster||(new n,d.ifrBuster=!0))}();)}else{if(a[0]==="getTCData"){__cmp.a.push([].slice.apply(a))}else{if(a[0]==="addEventListener"||a[0]==="removeEventListener"){__cmp.a.push([].slice.apply(a))}else{if(a.length==4&&a[3]===false){a[2]({},false)}else{__cmp.a.push([].slice.apply(a))}}}}}}};window.cmp_gpp_ping=function(){return{gppVersion:"1.0",cmpStatus:"stub",cmpDisplayStatus:"hidden",supportedAPIs:["tcfca","usnat","usca","usva","usco","usut","usct"],cmpId:31}};window.cmp_gppstub=function(){var a=arguments;__gpp.q=__gpp.q||[];if(!a.length){return __gpp.q}var g=a[0];var f=a.length>1?a[1]:null;var e=a.length>2?a[2]:null;if(g==="ping"){return window.cmp_gpp_ping()}else{if(g==="addEventListener"){__gpp.e=__gpp.e||[];if(!("lastId" in __gpp)){__gpp.lastId=0}__gpp.lastId++;var c=__gpp.lastId;__gpp.e.push({id:c,callback:f});return{eventName:"listenerRegistered",listenerId:c,data:true,pingData:window.cmp_gpp_ping()}}else{if(g==="removeEventListener"){var h=false;__gpp.e=__gpp.e||[];for(var d=0;d<__gpp.e.length;d++){if(__gpp.e[d].id==e){__gpp.e[d].splice(d,1);h=true;break}}return{eventName:"listenerRemoved",listenerId:e,data:h,pingData:window.cmp_gpp_ping()}}else{if(g==="getGPPData"){return{sectionId:3,gppVersion:1,sectionList:[],applicableSections:[0],gppString:"",pingData:window.cmp_gpp_ping()}}else{if(g==="hasSection"||g==="getSection"||g==="getField"){return null}else{__gpp.q.push([].slice.apply(a))}}}}}};window.cmp_msghandler=function(d){var a=typeof d.data==="string";try{var c=a?JSON.parse(d.data):d.data}catch(f){var c=null}if(typeof(c)==="object"&&c!==null&&"__cmpCall" in c){var b=c.__cmpCall;window.__cmp(b.command,b.parameter,function(h,g){var e={__cmpReturn:{returnValue:h,success:g,callId:b.callId}};d.source.postMessage(a?JSON.stringify(e):e,"*")})}if(typeof(c)==="object"&&c!==null&&"__uspapiCall" in c){var b=c.__uspapiCall;window.__uspapi(b.command,b.version,function(h,g){var e={__uspapiReturn:{returnValue:h,success:g,callId:b.callId}};d.source.postMessage(a?JSON.stringify(e):e,"*")})}if(typeof(c)==="object"&&c!==null&&"__tcfapiCall" in c){var b=c.__tcfapiCall;window.__tcfapi(b.command,b.version,function(h,g){var e={__tcfapiReturn:{returnValue:h,success:g,callId:b.callId}};d.source.postMessage(a?JSON.stringify(e):e,"*")},b.parameter)}if(typeof(c)==="object"&&c!==null&&"__gppCall" in c){var b=c.__gppCall;window.__gpp(b.command,function(h,g){var e={__gppReturn:{returnValue:h,success:g,callId:b.callId}};d.source.postMessage(a?JSON.stringify(e):e,"*")},"parameter" in b?b.parameter:null,"version" in b?b.version:1)}};window.cmp_setStub=function(a){if(!(a in window)||(typeof(window[a])!=="function"&&typeof(window[a])!=="object"&&(typeof(window[a])==="undefined"||window[a]!==null))){window[a]=window.cmp_stub;window[a].msgHandler=window.cmp_msghandler;window.addEventListener("message",window.cmp_msghandler,false)}};window.cmp_setGppStub=function(a){if(!(a in window)||(typeof(window[a])!=="function"&&typeof(window[a])!=="object"&&(typeof(window[a])==="undefined"||window[a]!==null))){window[a]=window.cmp_gppstub;window[a].msgHandler=window.cmp_msghandler;window.addEventListener("message",window.cmp_msghandler,false)}};window.cmp_addFrame("__cmpLocator");if(!("cmp_disableusp" in window)||!window.cmp_disableusp){window.cmp_addFrame("__uspapiLocator")}if(!("cmp_disabletcf" in window)||!window.cmp_disabletcf){window.cmp_addFrame("__tcfapiLocator")}if(!("cmp_disablegpp" in window)||!window.cmp_disablegpp){window.cmp_addFrame("__gppLocator")}window.cmp_setStub("__cmp");if(!("cmp_disabletcf" in window)||!window.cmp_disabletcf){window.cmp_setStub("__tcfapi")}if(!("cmp_disableusp" in window)||!window.cmp_disableusp){window.cmp_setStub("__uspapi")}if(!("cmp_disablegpp" in window)||!window.cmp_disablegpp){window.cmp_setGppStub("__gpp")};</script>
<script>
    __cmp("addEventListener",["consentscreen", initCMP, false],null);
    function initCMP(event, object) {
        setTimeout(function () {
            var text = 'Zatvaranjem prozora klikom na X dajete pristanak na obradu vaših ličnih podataka u vezi sa aktivnošću na Internetu od strane IAB partnera i drugih pouzdanih partnera u marketinške svrhe (personalizaciju oglasa i merenje). ';
            document.getElementsByClassName('cmpboxtxt')[0].innerHTML = text + document.getElementsByClassName('cmpboxtxt')[0].innerHTML;
        }, 50);
        let element = document.createElement('div');
        element.style.width = '30px';
        element.style.height = '30px';
        element.style.cursor = 'pointer';
        element.style.lineHeight = '30px';
        element.style.background = 'black';
        element.style.color = 'white';
        element.style['text-align'] = 'center';
        element.innerHTML = 'X';
        element.style.position = 'absolute';
        element.style.right = '10px';
        element.style.top = '10px';
        element.onclick = function(){
            window.cmpmngr.setConsentViaBtn(1);
            return false;
        };
        setTimeout(function(){
            document.getElementById('cmpbox').appendChild(element);
        }, 1000);
    }
</script>


    
    <script async='async' src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script>

    
        
            <script async src="https://adxbid.info/blic_homepage.js"></script>
        
    

    <script>
        var gptadslots = [];
        var googletag = googletag || {cmd:[]};
    </script>

<script>
    googletag.cmd.push(function() {


        var mapBillboard = googletag.sizeMapping()
            .addSize([1024, 0],    [[970, 400], [728, 90], [970, 90], [970, 445], [990, 250], [970, 250], [970, 66], [970, 600], [1060, 250]])
            .addSize([768, 0],    [[728, 90], [468, 60]])
            .addSize([0, 0],    [[320, 50], [300, 100], [320, 80], [300, 75], [300, 50], [320, 100]])
            .build();

        var mapP = googletag.sizeMapping()
            .addSize([1024, 0],    [[1, 1], [300, 250], [240, 240], [320, 480], [300, 600], [250, 250], [300, 300]])
            .addSize([768, 0],    [[300, 600], [1, 1], [300, 250], [300, 300]])
            .addSize([0, 0],    [[1, 1], [300, 250], [240, 240], [336, 180], [320, 50], [320, 80], [300, 50], [336, 280], [300, 75], [360, 112], [336, 250], [300, 100], [320, 100], [320, 480], [250, 250], [358, 112], [300, 300], [360, 250]])
            .build();

        var mapBranding = googletag.sizeMapping()
            .addSize([1024, 0],    [[470, 1080]])
            .addSize([768, 0],    [])
            .addSize([0, 0],    [])
            .build();

        var mapInFeed = googletag.sizeMapping()
            .addSize([1024, 0],    [[580, 180], [580, 280]])
            .addSize([768, 0],    [])
            .addSize([0, 0],    [])
            .build();

        var mapSticky = googletag.sizeMapping()
            .addSize([1024, 0],    [[750, 200], [750, 250], [728, 90]])
            .addSize([768, 0],    [[750, 200], [728, 90]])
            .addSize([0, 0],    [[320, 100], [320, 50]])
            .build();

        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/Billboard', [[970, 400], [728, 90], [320, 50], [970, 90], [300, 100], [320, 80], [970, 445], [300, 75], [990, 250], [970, 250], [970, 66], [970, 600], [300, 50], [320, 100], [468, 60], [1060, 250]], 'Billboard')
            .defineSizeMapping(mapBillboard).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/P1', [[1, 1], [300, 250], [240, 240], [336, 180], [320, 50], [320, 80], [300, 50], [336, 280], [300, 75], [360, 112], [336, 250], [300, 100], [320, 100], [320, 480], [300, 600], [250, 250], [358, 112], [300, 300], [360, 250]], 'P1')
            .defineSizeMapping(mapP).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/P2', [[1, 1], [300, 250], [240, 240], [336, 180], [320, 50], [320, 80], [300, 50], [336, 280], [300, 75], [360, 112], [336, 250], [300, 100], [320, 100], [320, 480], [300, 600], [250, 250], [358, 112], [300, 300], [360, 250]], 'P2')
            .defineSizeMapping(mapP).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/P3', [[1, 1], [300, 250], [240, 240], [336, 180], [320, 50], [320, 80], [300, 50], [336, 280], [300, 75], [360, 112], [336, 250], [300, 100], [320, 100], [320, 480], [300, 600], [250, 250], [358, 112], [300, 300], [360, 250]], 'P3')
            .defineSizeMapping(mapP).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/P4', [[1, 1], [300, 250], [240, 240], [336, 180], [320, 50], [320, 80], [300, 50], [336, 280], [300, 75], [360, 112], [336, 250], [300, 100], [320, 100], [320, 480], [300, 600], [250, 250], [358, 112], [300, 300], [360, 250]], 'P4')
            .defineSizeMapping(mapP).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/P5', [[1, 1], [300, 250], [240, 240], [336, 180], [320, 50], [320, 80], [300, 50], [336, 280], [300, 75], [360, 112], [336, 250], [300, 100], [320, 100], [320, 480], [300, 600], [250, 250], [358, 112], [300, 300], [360, 250]], 'P5')
            .defineSizeMapping(mapP).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/P6', [[1, 1], [300, 250], [240, 240], [336, 180], [320, 50], [320, 80], [300, 50], [336, 280], [300, 75], [360, 112], [336, 250], [300, 100], [320, 100], [320, 480], [300, 600], [250, 250], [358, 112], [300, 300], [360, 250]], 'P6')
            .defineSizeMapping(mapP).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/P7', [[1, 1], [300, 250], [240, 240], [336, 180], [320, 50], [320, 80], [300, 50], [336, 280], [300, 75], [360, 112], [336, 250], [300, 100], [320, 100], [320, 480], [300, 600], [250, 250], [358, 112], [300, 300], [360, 250]], 'P7')
            .defineSizeMapping(mapP).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/Branding_Left', [[470, 1080]], 'Branding_Left')
            .defineSizeMapping(mapBranding).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/Branding_Right', [[470, 1080]], 'Branding_Right')
            .defineSizeMapping(mapBranding).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/InFeed_1', [[580, 180], [580, 280]], 'InFeed_1')
            .defineSizeMapping(mapInFeed).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/InFeed_2', [[580, 180], [580, 280]], 'InFeed_2')
            .defineSizeMapping(mapInFeed).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/InFeed_3', [[580, 180], [580, 280]], 'InFeed_3')
            .defineSizeMapping(mapInFeed).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/InFeed_4', [[580, 180], [580, 280]], 'InFeed_4')
            .defineSizeMapping(mapInFeed).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/InFeed_5', [[580, 180], [580, 280]], 'InFeed_5')
            .defineSizeMapping(mapInFeed).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));
        gptadslots.push(googletag.defineSlot('/161634325/Blic.rs/Sticky', [[320, 50], [320, 100], [728, 90], [750, 200], [750, 250]], 'Sticky')
            .defineSizeMapping(mapSticky).setTargeting('Gender', ['Male', 'Female']).setTargeting('age', ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74']).addService(googletag.pubads()));


        googletag.pubads().enableSingleRequest();
        googletag.pubads().enableLazyLoad({
            fetchMarginPercent: 50,  //
            renderMarginPercent: 50,  //
            mobileScaling: 0.5  //
        });

        
            googletag.pubads().disableInitialLoad();
        

        googletag.pubads().collapseEmptyDivs(true);
        googletag.enableServices();
        googletag.pubads().setTargeting("kwrds", adsKeywords.category);

    });
</script>

<script type='text/javascript'>
    let axel = Math.random() + '';
    let a = axel * 10000000000000;
    let img1x1 = document.createElement("img");
    img1x1Url = 'https://pubads.g.doubleclick.net/activity;dc_iu=/161634325/;ord=' + a + ';dc_seg=873361257;age=18-24;age=25-34;age=35-44;age=45-54;age=55-64;age=65-74;Gender=Female;Gender=Male?';
    img1x1.setAttribute('src', img1x1Url);
    img1x1.setAttribute('border', "0");
    img1x1.style.cssText = "position:absolute;width:0;height:0;"
    window.onload = function() {
        document.body.insertBefore(img1x1, document.body.childNodes[0])
    }
</script>
<noscript>
    <img src="https://pubads.g.doubleclick.net/activity;dc_iu=/161634325/;ord=1;dc_seg=873361257;age=18-24;age=25-34;age=35-44;age=45-54;age=55-64;age=65-74;Gender=Female;Gender=Male?" width="1" height="1" border="0" style="position:absolute;" />');
</noscript>






<!-- YT verification -->
<meta name="google-site-verification" content="qpSjQeJNq1Eg2OuBfzhuNDt_E7gkdVGrsOuxU22qm84" />

<meta charset="UTF-8">

<meta name="msvalidate.01" content="69B36BCCFFDBC0AB4497FDC4D576B886" />

<link rel="manifest" href="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/manifest/manifest.json">


    <meta name="theme-color" content="#c00">

<meta name="robots" content="max-image-preview:large">
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://gars.hit.gemius.pl" />
<link rel="dns-prefetch" href="https://connect.facebook.net" />

<link rel="preconnect" href="https://connect.facebook.net" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://gars.hit.gemius.pl" crossorigin />


<!-- SGE RSS LINK -->
    <link rel="alternate" type="application/rss+xml" href="https://www.blic.rs/rss/?categoryUuid=23bf4f02-399f-5ae3-a8d7-cfd81e4fc32d" />


<link
    as="style"
    rel="stylesheet preload prefetch"
    href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700;900&family=Roboto:wght@400;500;600;700&display=swap"
    type="text/css"
    crossorigin="anonymous"
/>


    <link rel="apple-touch-icon" sizes="180x180" href="//ocdn.eu/ucs/static/blicperun/6e41097996c2e78dda0fea8f9952b705/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="//ocdn.eu/ucs/static/blicperun/6e41097996c2e78dda0fea8f9952b705/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="//ocdn.eu/ucs/static/blicperun/6e41097996c2e78dda0fea8f9952b705/img/favicon/favicon-16x16.png">




<!-- (C)2000-2017 Gemius SA - gemiusPrism  -->
<script type="text/javascript">
    <!--//--><![CDATA[//><!--
    var pp_gemius_identifier = 'zD3glD.iI8ED_ubbOnh7FcdS7zX8bQLmzZY1_x0bPtn.Z7';
    // lines below shouldn't be edited
    function gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_event');(function(d,t) {try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');gt.setAttribute('defer','defer'); gt.src=l+'://gars.hit.gemius.pl/xgemius.js'; s.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');
    //--><!]]>
</script>
<!-- (C)2000-2017 Gemius SA - gemiusPrism  -->



<!-- ga4 page view event -->
<script>
    const eventData = {};
    eventData.content_id = "23bf4f02-399f-5ae3-a8d7-cfd81e4fc32d";
    eventData.content_type = "category";
    eventData.page_brand = "blic";
    eventData.page_country_code = "RS";
    eventData.page_language = "sr";
    
    eventData.logged_in = null;
    

    

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
</script>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-810384-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-810384-1', {
        'optimize_id': 'GTM-WS79L3D',
        'use_amp_client_id': true,
        'anonymize_ip': true,
        'custom_map': {
            'dimension9': 'User type'
        },
        'User type': 'Guest'
    });
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NDP5BZ7');
</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5R6QFX');</script>
<!-- End Google Tag Manager -->

<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gvn8m45twc");
</script>



<!-- AMD Loader Start -->







<script async type="text/javascript" data-static-amd-map="{&quot;kropka&quot;:&quot;https://ty0lm9uz.onet.pl/e1BrazgzNjV9/build&quot;,&quot;local&quot;:&quot;//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/js&quot;,&quot;libs&quot;:&quot;//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/js&quot;,&quot;staticDesktop&quot;:&quot;//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/desktop&quot;,&quot;staticMobile&quot;:&quot;//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/mobile&quot;}">

    /*
    Available via the MIT or new BSD license.
    see: http://github.com/szagi3891/AMDLoader for details
    version 2.7
    */
    (function(){function d(a,b){C("err",a,b);(function(a,b){var d="amdLoader: errorNumber: "+a;"string"===typeof b&&""!==b&&(d+=": "+b);var l=Error(d);setTimeout(function(){throw l;},0)})(a,b)}function w(a,b){C("warn",a,b)}function v(a,b){C("info",a,b)}function C(a,b,d){a={type:"warn",num:b,caption:d,time:(new Date).getTime()-I};z.push(a)}function t(a,b,g,m,h,l){function e(f){Object.defineProperty(a,b,{get:function(){!0===m&&w(h+"->1",l);return g},set:function(){d(h+"->2",l)},configurable:f})}try{e(!1)}catch(q){try{e(!0)}catch(f){a[b]=
    g}}}function r(a,b){null===s?d(3):A(a,b,24.1)&&(0<a.length?y.requireModules(a,b):d(24.2))}function F(a,b,g){null===s?w(4):1===arguments.length?A([],a,"25.1")&&y.define([],a):2===arguments.length?"string"===typeof a&&"function"===typeof b?(u(a)?w("25.3",a):w("25.3"),y.define([],b)):A(a,b,"25.2")&&y.define(a,b):3===arguments.length?(u(a)?w("25.4",a):w("25.4"),A(b,g,"25.4")&&y.define(b,g)):d("25.5")}function A(a,b,g){if(G(a)){if("function"===typeof b)return!0;d(g+"->1")}else d(g+"->2");return!1}function J(a){var b=
    !1,g=!1,m=null,h=null,l=H(!1);return{isDefine:function(){return b},setDefine:function(e,q){!0===g?d(45,a):!1===b?(b=!0,m=e,setTimeout(function(){y.requireModulesWithModuleBase(a,e,function(){var b=Array.prototype.slice.call(arguments,0);try{h=q.apply(null,b)}catch(e){d(14,a+" -> "+e);return}l.exec([h])})},0)):d(15,a)},getDeps:function(){return!0===b?m:[]},get:function(a){l.add(a)},closeDefine:function(){g=!0;!1===b&&(b=!0,l.exec([void 0]))}}}function K(a){function b(b,e,g){if(0<b.length&&"."===b[0])!0===
    g&&d(16,b);else{if("https://"===b.substr(0,8)||"http://"===b.substr(0,7)||"//"===b.substr(0,2))return b;for(var f in a)if(0===b.indexOf(f+"/")){f=b.replace(f,a[f]);if(b!==f)return u(e)?f+"."+e:f;!0===g&&d(17,b);return}!0===g&&d(18,b)}}function g(b){document.getElementsByTagName("head")[0].appendChild(b)}function m(b,a){function d(){!0!==x&&(!0===f&&(c.readyState=void 0),x=!0,a(c))}var f=!1,x=!1,c=document.createElement("script");c.type="text/javascript";c.src=b;c.onload=d;c.async=!0;c.defer=!0;!0===
    f&&(c.readyState="interactive");c.onreadystatechange=function(){"loaded"!==c.readyState&&"complete"!==c.readyState||d()};return c}var h={};return{load:function(b,a){if(u(b)){if(!(b in h)){var d=m(b,function(){h[b].query.exec([])});h[b]={script:d,query:H(!0)};g(d)}h[b].query.add(a)}},getActialLoading:function(){for(var b in h)if("interactive"===h[b].script.readyState)return b;return null},resolvePath:b,isLoad:function(a){a=b(a,"js",!0);return u(a)&&a in h?h[a].query.isExec():!1},isSpecified:function(a){a=
    b(a,"js",!1);return u(a)&&a in h?!0:!1}}}function B(a,b){for(var d=0;d<a.length;d++)b(a[d])}function u(a){return"string"===typeof a&&""!==a}function H(a){function b(){if(!0===m)for(;0<h.length;)!0===a?h.shift().apply(null,l):g(h.shift())}function g(b){setTimeout(function(){b.apply(null,l)},0)}var m=!1,h=[],l=null;return{exec:function(a){G(a)?!1===m?(m=!0,l=a,b()):d(19):d(20)},add:function(a){"function"===typeof a?(h.push(a),b()):d(21)},isExec:function(){return m}}}function D(){return document.currentScript&&
    "function"===typeof document.currentScript.getAttribute?document.currentScript:null}var G=function(){return"function"===typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"[object Array]"===Object.prototype.toString.call(a)}}(),y=function(){function a(a,b){var c=a.split("/");2>c.length?d(5,a):(c.pop(),b(c.join("/")))}function b(a,b){var c=a.split("/"),n=b.split("/");if(0<n.length)if("."===n[0]){var k=[];B(c,function(a){k.push(a)});B(n,function(a){"."!==a&&k.push(a)});c=k.join("/");
    if(0===c.indexOf(a))return c;d(6,a+" , "+b+" -> "+c)}else return b;else d(7,b)}function g(a,b){function c(){if(!1===n){for(var c=[],E=0;E<a.length;E++){var d=a[E];if(!0===k[d].isInit)c.push(k[d].value);else return}n=!0;"function"===typeof b&&b.apply(null,c)}}var n=!1,k={};B(a,function(a){a in k?d(10,a):(k[a]={isInit:!1,value:null},m(a,function(b){var n=k[a];!1===n.isInit?(n.isInit=!0,n.value=b,c()):d(11,a)}))});c()}function m(a,b){l=!0;var c=s.resolvePath(a,"js",!0);c in e||(e[c]=J(a),s.load(c,function(){if(c in
    e){for(;0<q.length;){var a=q.pop();h(c,a.deps)?d(12.1,c):e[c].setDefine(a.deps,a.define)}e[c].closeDefine()}else d(13,c)}));e[c].get(b)}function h(a,b){function c(a,b){B(b,function(b){a.push(b)})}function n(){var a=p.shift();a in k||(k[a]=!0,a in e&&(a=e[a].getDeps(),c(p,a)))}var k={},p=[];for(c(p,b);0<p.length;)n();return a in k}var l=!1,e={},q=[];return{requireModulesWithModuleBase:function(f,e,c){u(f)?a(f,function(a){for(var k=[],p=0;p<e.length;p++){var f=b(a,e[p]);if("string"===typeof f&&""!==
    f)k.push(f);else{d(8,a+" -> "+e[p]);return}}g(k,c)}):d(9,f)},requireModules:g,requireOne:m,define:function(a,b){var c=D();if(!0!==l)null===c?w(49,""):w(49,D().getAttribute("src"));else{if(null!==c&&(c=c.getAttribute("src"),c in e)){e[c].setDefine(a,b);return}c=s.getActialLoading();u(c)?c in e?e[c].setDefine(a,b):d(46,c):q.push({deps:a,define:b})}}}}(),s=null,z=[],I=(new Date).getTime();t(window,"require",r,!1,27);t(window,"define",F,!1,28);t(r,"runnerBox",function(a){function b(a){x in a||(a[x]=m());
    return a[x]}function g(){function a(){if(!0===b)for(;0<c.length;){var n=c.shift();setTimeout(n,0)}}var b=!1,c=[];return{on:function(b){c.push(b);a()},exec:function(){!1===b?b=!0:d(41);a()}}}function m(){var a=!1,b=null,c=g();return{onReady:function(a){c.on(function(){a(b)})},setAsRun:function(){!1===a?a=!0:d(44)},setValue:function(f){!0===a?(b=f,c.exec()):d(42)},isRun:function(){return a}}}function h(a,b){function c(a){setTimeout(function(){b(a)},0)}for(var d=[],f=0;f<a.length;f++)d.push(a[f]);for(f=
    0;f<d.length;f++)c(d[f])}function l(a){function c(){for(var b=e(a,"*["+f+"]",f),d=[],p=null,k=0;k<b.length;k++)p=b[k],!0===h(p,g)&&d.push(p);return d}function d(a){if(q(a))return!0===b(a).isRun()?!0:!1;if("HTML"===a.tagName)return!0}function g(b){if(b===a)return!0;if(q(b))return!1}function h(a,b){function c(a){f++;if(200<f)return d(),!1;var p=b(a);return!0===p||!1===p?p:a.parentNode?c(a.parentNode):!1}function d(){var a=Error("Too much recursion");setTimeout(function(){throw a;},0)}var f=0;return c(a.parentNode)}
    if(a===document||!0===h(a,d)){var l;l="function"!==typeof a.getAttribute?!1:u(a.getAttribute("data-run-module"));return l?!0===b(a).isRun()?c():[a]:c()}return[]}function e(a,b,c){function d(a){a=a.childNodes;for(var b=0;b<a.length;b++){var f=a[b],k=void 0;if(k=1===f.nodeType)k=f.getAttribute(c),k="string"===typeof k&&""!==k;k?e.push(f):d(f)}}function f(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b}a===document&&(a=document.documentElement);if("function"===typeof a.querySelectorAll)return f(a.querySelectorAll(b));
    var e=[];d(a);return e}function q(a){a=a.getAttribute(f);return"string"===typeof a&&""!==a}var f="data-run-module",x="runnerBoxElementProp"+(new Date).getTime(),c=function(){if("function"===typeof window.requestAnimationFrame)return window.requestAnimationFrame;for(var a=["ms","moz","webkit","o"],b=null,c=0;c<a.length;++c)if(b=window[a[c]+"RequestAnimationFrame"],"function"===typeof b)return b;return function(a){a()}}();return{runElement:function(e){function k(a){a=a.getAttribute(f);return"string"===
    typeof a&&""!==a?a:null}e=l(e);h(e,function(e){var g=k(e),h=g.split(".");if(2!==h.length)throw Error("irregulari contents of the attribute data-run-module: "+g);var n=h[0],l=h[1];a([n],function(a){c(function(){var c;if(q(e)&&!1===b(e).isRun())if(b(e).setAsRun(),a&&"function"===typeof a[l])e.setAttribute(f+"-isrun","1"),c=a[l](e,function(a){b(e).setValue(a)}),"undefined"!==typeof c&&(d(50,g),b(e).setValue(c));else throw c='No function "'+l+'" in module : '+n,e.setAttribute(f+"-isrun",c),Error(c);})})})},
    whenRun:function(a,c){if(q(a))b(a).onReady(c);else d(43)}}}(r),!1,29);t(r.runnerBox,"runElement",r.runnerBox.runElement,!1,30);t(r.runnerBox,"whenRun",r.runnerBox.whenRun,!1,31);t(r,"getLogs",function(a){if(!0===a){window.console.group();for(a=0;a<z.length;a++){var b=z[a];window.console[b.type](b.time,b.num,b.caption)}window.console.groupEnd()}else{a=[];for(b=0;b<z.length;b++)a.push(z[b]);return a}},!1,32);t(r,"defined",function(a){return null===s?!1:s.isLoad(a)},!1,33);t(r,"toUrl",function(a){if(u(a))return s.resolvePath(a,
    "",!0);d(26)},!0,35);t(F,"ring-amd",{},!0,37);t(r,"isBrowser",!0,!0,38);t(r,"specified",function(a){return null!==s&&s.isSpecified?s.isSpecified(a):!1},!0,39);(function(a,b){function d(b){function e(){var a=b.getAttribute("data-amd-preload");return u(a)?a.split(","):[]}function c(){var a=b.getAttribute("data-timeout-start");return 0<a?a:2E3}var g=h(b);return null!==g?(m(a,g,e(),c()),!0):!1}function m(a,d,c,e){function k(){setTimeout(function(){v(48,"run timeout "+e);g()},e)}function g(){setTimeout(function(){0<
    c.length&&b(c,function(){});b.runnerBox.runElement(document)},0)}a({paths:d});l(window,"load",function(){v(48,"window.load");g();setTimeout(function(){v(48,"window.load -> 10s");g()},1E4)});"complete"===document.readyState&&(v(48,"isComplete"),g());"loaded"===document.readyState&&(v(48,"isLoaded"),k());l(document,"DOMContentLoaded",function(){v(48,"DOMContentLoaded");k();l(document.getElementsByTagName("body")[0],"pageshow",function(){v(48,"body pageshow");g()})});l(document,"readystatechange",function(){var a=
    "readystatechange - "+document.readyState;"complete"===document.readyState||"loaded"===document.readyState?(v(48,a+" - exec"),k()):v(48,a+" - noexec")})}function h(a){function b(a){var c=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return"function"===typeof a.trim?a.trim():null===a?"":(a+"").replace(c,"")}var c=a.getAttribute("data-static-amd-map");if("string"===typeof c){if(""===c)return{}}else return null;if("undefined"!==typeof JSON&&"function"===typeof JSON.parse)return JSON.parse(c);a=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    var d,e=null;return(c=b(c+""))&&!b(c.replace(a,function(a,b,c,f){d&&b&&(e=0);if(0===e)return a;d=c||b;e+=!f-!c;return""}))?Function("return "+c)():null}function l(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}var e=D();if(null===e||!0!==d(e))for(var e=document.getElementsByTagName("script"),q=0;q<e.length&&!0!==d(e[q]);q++);})(function(a){null===s?s=K(a.paths):d(2.2)},r)})();

</script>
<!-- AMD Loader End -->


    <script type="application/ld+json">
    {
        "@context":"http://schema.org",
        "@type":"Organization",
        "@id":"https://www.blic.rs/",
        "name":"Ringier",
        "logo":"https://ocdn.eu/blic/static/logo_medium.png",
        "description":"Ringier d.o.o. vodeća je izdavačka kuća na teritoriji Srbije u čijem portfoliu se nalaze brojna visokotiražna štampana izdanja „Blic“, “Blic žena”, “Puls”, NIN i “Auto Bild”.",
        "address":{
            "@type":"PostalAddress",
            "streetAddress":"Kosovska 10, Belgrade",
            "addressLocality":"Belgrade",
            "addressRegion":"SR",
            "postalCode":"11000",
            "addressCountry":"Serbia"
        },
        "contactPoint":{
            "@type":"ContactPoint",
            "contactType":"Customer support",
            "telephone":"+381 11 333 4 646  ",
            "email":"redakcija@blic.rs"
        },
        "sameAs":[
            "https://www.facebook.com/Blic.rs"
        ],
        "url":"/"
    }
</script>


<script>
    window.SSORingierConnect = {
        isUserLoggedIn: false
    }
</script>

<script type="text/javascript" src="//cdn-4.convertexperiments.com/js/10041953-10042375.js"></script>

<script type="module" src="https://marfeelexperimentsexperienceengine.mrf.io/experimentsexperience/render?siteId=891&url=https://www.blic.rs/&experimentType=HeadlineAB&lang=es&version=esnext" async></script>
<script type="application/javascript" src="https://marfeelexperimentsexperienceengine.mrf.io/experimentsexperience/render?siteId=891&url=https://www.blic.rs/&experimentType=HeadlineAB&lang=es&version=legacy" nomodule="" async></script>
        <script>
    if (typeof onetAds === 'undefined') {
        onetAds = {};
    }
    onetAds.target = "VESTI/BEOGRAD";
    onetAds.DV = "BLIC_RS/blic/vesti/beograd";
    onetAds.tid = "EA-5437314";
    onetAds.cookieInfo = 0;
    onetAds.adsNoBanner = 1;
    onetAds.async = 1;
    onetAds.no_gemius = 1;
    onetAds.kropka = {};
    onetAds.kropka.DO = "ras_rs";

    
</script>
<!--Aklamator head -->
<script>var akla_sec="aBliDkat";</script>

        <style>
            body{--site-primary-color: #c00;--site-secondary-color: #bf0000}body.page-biznis{--site-primary-color: #395b4a;--site-secondary-color: #499e4c}body.page-sport{--site-primary-color: #34679b;--site-secondary-color: #4276ab}body.page-weather{--site-primary-color: #001D69;--site-secondary-color: #1488CC}body.dark-theme{--site-primary-color: #000;--site-secondary-color: rgba(0, 0, 0, 0.75)}*{margin:0;padding:0;box-sizing:border-box;border:0}body{overflow-x:hidden}a{text-decoration:none}ul{list-style-type:none}figure{margin:0}.clear{clear:both}fieldset{border:none !important;padding:0 !important;margin:0 !important}textarea:focus,input:focus{outline:none}input,select,textarea{border:0}button{background:rgba(0,0,0,0)}img{width:100%;height:auto;display:block}*:focus{outline:0}input[type=search]::-ms-clear{display:none;width:0;height:0}input[type=search]::-ms-reveal{display:none;width:0;height:0}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{display:none}.hidden{display:none}.hidden.icon{display:none}body{font-family:"Roboto",serif;font-weight:400;color:#303030}a{color:#303030}a:hover{color:var(--site-primary-color)}a:hover svg{color:var(--site-primary-color);fill:var(--site-primary-color)}h1,h2,h3,h4,h5,h6{font-family:"Merriweather",serif;font-weight:500}h1{font-size:2em}h2{font-size:1.5em}h3{font-size:1.17em}h4{font-size:1.12em}h5{font-size:.83em}h6{font-size:.75em}.animation,.page-info__more svg,.page-info__content,.air-pollution__changecity svg,.air-pollution__changecity ul,.air-pollution__info,figure img,.news-box__tabs-more svg,.news__carousel-top--hidden .swiper-button-next,.news__carousel-top--hidden .swiper-button-prev,.news__carousel-top--hidden.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs,.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs,.news-box__header ul li a svg,#bannerStickyBottom,.footer a,.header__menu-more-dropdown,.header__menu nav,.header__back span a,a{-webkit-transition:all 300ms ease;-moz-transition:all 300ms ease;-o-transition:all 300ms ease;transition:all 300ms ease}@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}to{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}/*! HiDPI widgets.0.1 | MIT License | git.io/hidpi */.home-carousel .carousel-item{display:none !important}.home-carousel .carousel-item:first-child{display:block !important}.grid:after{content:"";display:table;clear:both}.grid .grid__item{margin-bottom:10px}.grid .grid__item img{margin:0}@media(min-width: 48em){.grid.col__2 .grid__item{-webkit-column-count:2;-webkit-column-gap:0;-moz-column-count:2;-moz-column-gap:0;column-count:2;grid-column-gap:0;grid-row-gap:0;display:grid}.grid.col__2 .grid__item .photo{margin-bottom:0;padding:0}}@media(min-width: 48em)and (min-width: 0)and (max-width: 29.9375em){.grid.col__2 .grid__item .photo:not(.full-width):last-child{margin-bottom:0}}@media(min-width: 48em){.grid.col__3 .grid__item{-webkit-column-count:3;-webkit-column-gap:0;-moz-column-count:3;-moz-column-gap:0;column-count:3;grid-column-gap:0;grid-row-gap:0;display:grid}.grid.col__3 .grid__item .photo{margin-bottom:0;padding:0}}@media(min-width: 48em)and (min-width: 0)and (max-width: 29.9375em){.grid.col__3 .grid__item .photo:not(.full-width):last-child{margin-bottom:0}}@media(min-width: 48em){.grid.col__4 .grid__item{-webkit-column-count:4;-webkit-column-gap:0;-moz-column-count:4;-moz-column-gap:0;column-count:4;grid-column-gap:0;grid-row-gap:0;display:grid}.grid.col__4 .grid__item .photo{margin-bottom:0;padding:0}}@media(min-width: 48em)and (min-width: 0)and (max-width: 29.9375em){.grid.col__4 .grid__item .photo:not(.full-width):last-child{margin-bottom:0}}@media(min-width: 48em){.grid.col__5 .grid__item{-webkit-column-count:5;-webkit-column-gap:0;-moz-column-count:5;-moz-column-gap:0;column-count:5;grid-column-gap:0;grid-row-gap:0;display:grid}.grid.col__5 .grid__item .photo{margin-bottom:0;padding:0}}@media(min-width: 48em)and (min-width: 0)and (max-width: 29.9375em){.grid.col__5 .grid__item .photo:not(.full-width):last-child{margin-bottom:0}}@media(min-width: 48em){.grid.col__6 .grid__item{-webkit-column-count:6;-webkit-column-gap:0;-moz-column-count:6;-moz-column-gap:0;column-count:6;grid-column-gap:0;grid-row-gap:0;display:grid}.grid.col__6 .grid__item .photo{margin-bottom:0;padding:0}}@media(min-width: 48em)and (min-width: 0)and (max-width: 29.9375em){.grid.col__6 .grid__item .photo:not(.full-width):last-child{margin-bottom:0}}.container{max-width:1060px;margin-left:auto;margin-right:auto;width:1060px;padding:20px 0}.container:after{content:"";display:table;clear:both}.page-good-life .container{max-width:1080px;margin-left:auto;margin-right:auto;width:1080px}body{background:#f1f1f1}.header{box-shadow:0 .3em .6em rgba(0,0,0,.07);margin-bottom:20px}.header .container{padding:0}.header.stuck .header__menu{position:fixed;top:0;width:100%;z-index:10000}.header.stuck .header__sub-menu{margin-top:48px}.header__top{background:var(--site-primary-color)}.header__top .container{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;position:relative}.header__logo{width:80px;margin:5px 0}.header__logo img{position:relative;z-index:1}.header__logo--biznis{width:238px;height:50px;margin-left:52px;overflow:hidden}.header__logo--biznis svg{width:238px;height:50px;left:-30px;position:relative}.header__logo--sport{margin-left:50px}.header__logo--vreme{width:90px;height:60px;margin-left:50px}.header__logo--goodlife{width:193px;height:50px;margin-left:10px}.header__back{display:block;position:absolute;left:-10px;top:0;width:calc((100% - 1060px)/2 + 76px);height:70px;background:var(--site-primary-color);z-index:1;-ms-transform:skew(-8deg);-webkit-transform:skew(-8deg);transform:skew(-8deg)}.header__back span{-ms-transform:skew(8deg);-webkit-transform:skew(8deg);transform:skew(8deg);color:#fff;line-height:70px;float:right;padding-right:24px}.header__back span a{color:#fff;padding:0 10px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;position:relative;left:0}.header__back span a svg{fill:#fff}.header__back:hover span a{left:-5px}.page-weather .header__back{background:#c00}.header__icons{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;margin-left:auto;align-items:center;border-left:1px solid rgba(255,255,255,.3)}.header__icons>div,.header__icons>span{margin-left:10px}.header__icons span{padding:5px;cursor:pointer}.header__icons span>span{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.header__icons .premium-button{font-weight:bold;color:#000;letter-spacing:-0.25px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.header__icons .premium-button a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;height:30px;background:#fed162;background:linear-gradient(90deg, #fed162 40%, #fbaa38 100%);padding:0 10px}.header__icons .premium-button a svg{margin-right:10px;fill:#000}.header__icons svg{color:#fff;fill:#fff}.header__icons .icon-weather a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center}.header__icons .icon-weather svg{width:20px;height:20px;position:relative;top:-1px;margin:0 -6px}.header__icons .icon-user{position:relative}.header__icons .icon-user.logged:hover .header__login--logged{display:block}.header__icons .icon-user.not-logged:hover .header__login--not-logged{display:block}.header__login{position:absolute;top:22px;right:0;width:max-content;display:none;padding-top:20px;z-index:100}.header__login:before{content:"";width:0;height:0;border-left:9px solid rgba(0,0,0,0);border-right:9px solid rgba(0,0,0,0);border-bottom:12px solid #fff;position:absolute;right:5px;top:8px}.header__login h5{font-family:"Roboto",serif;font-size:16px;font-weight:bold;padding:20px 20px 0;color:rgba(48,48,48,.8117647059);cursor:default}.header__login ul{padding:20px}.header__login li{padding-bottom:20px}.header__login li:last-child{padding-bottom:0}.header__login li a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center}.header__login li a span{width:32px;height:32px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;background:var(--site-primary-color);border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;margin-right:10px;color:initial}.header__login-inner{background:#fff;width:200px}.search{position:absolute;top:14px;right:133px;background:rgba(0,0,0,.15);border-radius:6px;-webkit-border-radius:6px;-moz-border-radius:6px;-ms-border-radius:6px;-o-border-radius:6px;overflow:hidden;height:40px;width:300px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.search button{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;height:40px;width:54px;cursor:pointer}.search input{height:40px;width:calc(100% - 54px);padding-left:10px;background:rgba(0,0,0,0);color:#fff;font-size:16px}.search input::placeholder{color:#fff}.header__menu{background:var(--site-primary-color);width:100%;z-index:100;height:48px;padding-top:5px}.header__menu nav{position:relative;top:0}.header__menu nav ul>li:hover{background:rgba(255,255,255,.1)}.header__menu nav ul{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;column-gap:3.5px}.header__menu nav ul>li{font-size:15px;flex-grow:1;text-align:center;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;height:38px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.header__menu nav ul>li.active{position:relative;background:#fff}.header__menu nav ul>li.active a{font-weight:700;color:var(--site-primary-color)}.header__menu nav ul>li.active a .sprite-heart{fill:var(--site-primary-color)}.header__menu a{line-height:50px;color:#fff;font-size:15px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.header__menu a svg{fill:#fff;margin-right:4px}.header__menu nav ul>li.menu-icon--small{background:#231f20}.header__menu nav ul>li.biznis{background:#395b4a}.header__menu nav ul>li.sportal{background:#ff4d00}.header__menu nav ul>li.inmemoriam{background:#161616}.header__menu nav ul>li.active{background:#fff}.header__menu nav ul>li.header__menu-more:hover{background:none}.header__menu .container:first-child{overflow:hidden;height:43px}.header__menu .container:last-child{position:relative}.header__menu-more-dropdown{overflow:hidden;background:#fff;min-width:130px;border-bottom:5px solid var(--site-secondary-color);border-left:1px solid #eaeaea;border-right:1px solid #eaeaea;position:absolute;top:0;right:0;z-index:9;width:auto;flex-direction:column}.header__menu-more-dropdown a{color:initial}.header__menu-more-dropdown a:hover{color:var(--site-primary-color)}.header__menu-more-dropdown:not(.active){display:none}.header__sub-menu{background:#fff}.header__sub-menu li{float:left}.header__sub-menu li.active a{font-weight:bold}.header__sub-menu a{font-size:15px;display:block;height:40px;line-height:40px;padding:0 6px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.menu-icon img{display:block;width:auto;height:50px;margin:0 auto;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px}.menu-icon--dynamic img{display:block;margin:0 auto;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px}.menu-icon--small img{height:20px}.sub-menu-icon__mis img{width:auto}.sub-menu-icon img{height:24px;width:auto}.stories{margin-bottom:20px}.stories.carousel .story{width:60px;max-width:60px !important}.stories.carousel .story[data-id=id-5]>a>.img{background:none !important}.stories.carousel .story[data-id=id-5]>a>.info strong{opacity:.75}.stories.carousel .story>a>.info{margin-top:.2em !important;min-height:32px;line-height:12px !important}.stories.carousel .story>a>.info strong{font-size:12px;white-space:break-spaces;text-overflow:initial}.stories.snapgram .story>a>.img{background:radial-gradient(ellipse at 70% 70%, var(--site-primary-color) 8%, var(--site-primary-color) 42%, #d74b4b 58%) !important;height:60px !important}#zuck-modal-content .story-viewer .slides .item>.media{height:auto !important;top:50%;transform:translate(-50%, -50%) !important}.header--weather .header__top{background:linear-gradient(109.12deg, #1488CC 0%, #2B32B2 100%)}.header--weather .header__menu{background:#001d69}.header--weather .search.active{width:660px}.header--weather .search button{background:#001d69}.page-good-life .header__top,.page-good-life .header__menu{background:#fff}.page-good-life .search{background:rgba(0,0,0,.05)}.page-good-life .search input{color:#000}.page-good-life .search input::placeholder{color:#000}.page-good-life .header__icons{border-color:rgba(0,0,0,.5)}.page-good-life .header__icons svg{color:rgba(0,0,0,.5)}.page-good-life .header__icons .search svg{color:rgba(0,0,0,.75)}.page-good-life .header__login li a span{background:#b98f55}.page-good-life .header__login li a:hover{color:#b98f55}.page-good-life .header__icons .header__login-inner svg{color:#fff}.page-good-life .header__menu a,.page-good-life .header__menu nav ul>li.active a{color:#343660;padding:0 15px}.page-good-life .header__menu nav ul{column-gap:15px}.page-good-life .header__menu li{flex-grow:0}.page-good-life .header__menu li:first-child{margin-left:60px}.page-good-life .header__menu li:first-child a{width:54px;height:40px;background:#b98f55;border-radius:3px}.page-good-life .header__menu li:first-child svg{width:21px;height:21px}.page-good-life .header.stuck .header__sub-menu{margin-top:68px}.page-biznis .header__top{background:#fff}.page-biznis .header__back{background:#fff;transform:none;height:60px;width:calc((100% - 1060px)/2 + 63px)}.page-biznis .header__back span{transform:none;padding-right:11px;line-height:60px}.page-biznis .header__back span a{color:#000}.page-biznis .header__back span a svg{fill:#000}.page-biznis .header__menu{background:#fff}.page-biznis .header__menu a{color:#000}.page-biznis .header__menu nav ul>li.active a{background:var(--site-primary-color);color:#fff;border-radius:3px}.page-biznis .header__icons{width:136px;display:flex;justify-content:space-between;padding:0 5px 0 20px;align-items:center;height:24px;border-left-color:rgba(0,0,0,0);position:relative}.page-biznis .header__icons:before{content:"";height:24px;width:1px;position:absolute;left:0;top:0;background:rgba(0,0,0,.5);border-radius:50%}.page-biznis .header__icons>span{margin-left:0}.page-biznis .header__icons svg{color:rgba(0,0,0,.5);width:18px;height:18px}.page-biznis .search{border:1px solid rgba(0,0,0,.1);background:#fff;top:-8px;right:154px}.page-biznis .search input{color:#000}.page-biznis .search input::placeholder{color:#000}.page-biznis .search .icon-weather svg{width:25px;height:20px}.page-biznis .search #login-button a{display:flex}.page-biznis .search #logged-out-userIcon{width:20px;height:20px}.section{width:1060px;margin:0 auto 20px;display:block}.section:after{content:"";display:table;clear:both}.section.section--article-flex{display:flex;justify-content:space-between;margin-bottom:0}.section.section--article-flex:after{display:none}.section--article{margin-bottom:0}.section__content{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;width:740px;float:left}.section__content.section__content--no-flex{display:block}.section__left{width:140px}.section__right{width:580px;margin-left:auto}.section__aside{width:300px;float:right}.footer{background:#1a1a1a;border-top:5px solid var(--site-primary-color);font-size:14px;padding-bottom:220px}.footer a{color:#999}.footer a:hover{color:#fff}.footer a:hover svg{fill:#fff}.footer svg{fill:#fff;color:#fff}.footer>.container{padding-top:0;position:relative}.footer__logo{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.footer__logo img{height:40px}.footer__top{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:space-between;align-items:center;margin:20px 0}.footer__search{width:calc(100% - 44px - 15px);height:44px;background:rgba(255,255,255,.15);border-radius:6px;-webkit-border-radius:6px;-moz-border-radius:6px;-ms-border-radius:6px;-o-border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:space-between;align-items:center}.footer__search input{background:rgba(0,0,0,0);width:100%;padding-left:20px;color:#fff;font-size:18px}.footer__search input::placeholder{color:#fff}.footer__search button:hover{cursor:pointer}.footer__search svg{color:#fff;width:18px;height:18px;margin:0 20px}.footer__to-top{font-size:24px;width:44px;height:44px;line-height:44px;text-align:center;border-radius:6px;-webkit-border-radius:6px;-moz-border-radius:6px;-ms-border-radius:6px;-o-border-radius:6px;cursor:pointer;background:var(--site-primary-color)}.footer__to-top svg{fill:#fff}.footer__center{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:flex-start;justify-content:space-between;margin:30px 0 10px}.footer__links{width:calc(100% - 256px - 20px);display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-wrap:wrap}.footer__links div{flex:0 0 25%}.footer__links div h4{font-family:"Roboto",serif;font-size:16px;font-weight:bold;text-transform:uppercase;margin-bottom:15px;color:rgba(255,255,255,.75)}.footer__links div h4 a{color:rgba(255,255,255,.75)}.footer__links div li a{display:block;padding-bottom:5px;font-size:16px;color:#fff}.footer__links div.footer__links-full-width{flex:0 0 100%}.footer__links div.footer__links-full-width ul{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-wrap:wrap}.footer__links div.footer__links-full-width li{width:50%}.footer__info{width:256px;padding:20px;background:rgba(255,255,255,.1);color:#fff;border-radius:6px;-webkit-border-radius:6px;-moz-border-radius:6px;-ms-border-radius:6px;-o-border-radius:6px}.footer__info div{margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center}.footer__info div:last-child{margin-bottom:0}.footer__info div.line{height:1px;width:100%;background:rgba(255,255,255,.5)}.footer__info svg{width:18px;height:18px;margin-right:10px;color:#fff}.footer__info a{color:#fff}.footer__info a[href^="mailto:"]{border-bottom:1px solid #fff}.footer__bottom{font-weight:bold;color:#545454;border-top:1px solid rgba(255,255,255,.25);border-bottom:1px solid rgba(255,255,255,.25);padding:10px 0;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between}.footer__social{text-align:center}.footer__social ul{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.footer__social li{display:inline-block;margin:0 10px}.footer__social li:last-child{padding-left:20px;position:relative}.footer__social li:last-child a{background:rgba(0,0,0,0)}.footer__social li:last-child svg{width:36px;height:30px}.footer__social li:last-child:before{content:"";position:absolute;width:1px;height:16px;background:rgba(255,255,255,.25);left:0;top:50%;transform:translateY(-50%)}.footer__social a{display:block;width:36px;height:36px;line-height:38px;text-align:center;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;background:rgba(255,255,255,.25);font-size:20px}.footer__social a:hover{background:var(--site-primary-color)}.footer__social a:hover svg{fill:#fff}.footer__about{margin:0 auto 0 20px}.footer__about li{display:inline-block;position:relative;padding-left:10px;margin-left:6px}.footer__about li:before{content:"";position:absolute;width:1px;height:16px;background:rgba(255,255,255,.5);left:0;top:50%;transform:translateY(-50%)}.footer__about li:first-child{padding:0;margin:0}.footer__about li:first-child:before{display:none}.footer__about a{display:block}.footer__by{font-size:12px;margin:20px 0 0;color:rgba(255,255,255,.5)}.mobile-desktop-switcher{display:block;margin:30px 0 20px}.mobile-desktop-switcher a{color:#fff;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.mobile-desktop-switcher svg{width:32px;height:32px;fill:#fff;margin-right:10px}.footer.footer--weather{border-color:#001d69}.footer.footer--weather .footer__logo a,.footer.footer--weather .footer__to-top{background:#001d69}.page-good-life .footer{border-color:#b98f55}.page-good-life .footer .footer__to-top,.page-good-life .footer .footer__social a:hover{background:#b98f55}.banner{position:relative;background:#f7f7f7}.banner:after{content:attr(data-placeholder-caption) " ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);text-transform:uppercase;color:rgba(98,98,98,.85);font-size:12px}.banner--placeholder{z-index:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.banner--darker{background:#e6e6e6}.banner{width:300px;min-height:250px;margin:15px auto}.banner--top{width:1060px;min-height:250px;max-height:250px;overflow:hidden;margin:20px auto;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.banner--top .banner--placeholder-space{min-height:250px}.banner--sticky{position:sticky;top:65px;margin:0 auto 15px}.sticky-area{height:1200px}.sticky-area--full{height:100%}.section__aside .banner:first-child{margin-top:0}.article__text .banner{margin-top:0}.section--article .section__aside .banner--sticky:last-child{margin-bottom:20px}.news-box .banner:last-child{margin-bottom:0}.latest .banner{transform:translateX(70px)}.banner__brandingLeft,.banner__brandingRight{position:fixed;top:0;width:506px;overflow:hidden;z-index:10000}.banner__brandingLeft{left:50%;margin-left:-1055px;text-align:right}.banner__brandingLeft .banner{text-align:right}.banner__brandingLeft .banner div{margin-right:0 !important}.banner__brandingRight{right:50%;margin-right:-1055px;text-align:left}.banner__brandingRight .banner{text-align:left}.banner__brandingRight .banner div{margin-left:0 !important}#bannerStickyBottom{position:fixed;left:50%;transform:translateX(-50%) translateX(-160px);bottom:-500px;z-index:1000;width:auto;height:auto;min-height:auto;margin:0}#bannerStickyBottom.active{bottom:0}.banner__close{position:absolute;top:-31px;right:-5px;cursor:pointer;padding:5px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;border:1px solid #b8b9be;box-shadow:0 0 3px #b8b9be;background:#fff}.banner__close svg{display:block;width:19px;height:19px;fill:#171929}.banner--in-feed{width:580px;min-height:170px}.banner--parallax{width:740px;min-height:300px;clear:both;margin-bottom:0;position:relative;left:-15px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.banner--article{width:100%;text-align:center}.banner--under-article{width:728px;min-height:90px;position:relative;left:-9px}#widgetiframesidebarobjektiv{min-height:700px;background:#da2c2c;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.banner--aklamator{width:100%;height:auto;padding:20px;margin:0}.banner--space-vertical{margin:15px 0}.aklamator-wrapper--space-vertical{margin:15px 0}#nekretnine-widget{margin-top:20px}.full-page{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;margin-top:-20px}.full-page__left{width:calc((100% - 1100px)/2);background-repeat:no-repeat;background-position:top right}.full-page__right{width:calc((100% - 1100px)/2);background-repeat:no-repeat;background-position:top left}.full-page__center{background-repeat:no-repeat;background-position:top center;background-color:#ccc;width:1060px;padding:300px 20px 60px;margin:auto;box-sizing:initial}.full-page__center .banner{width:1060px;height:250px;margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;text-align:center}.banner--full-width{width:100%;margin:-15px 0 15px}.icon{width:16px;height:16px;display:inline-block}.icon--spin{animation-name:spin;animation-duration:1000ms;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.sprite-spinner{fill:#303030}.news-box{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:space-between;width:100%}.news-box__head-title{width:100%;padding:12px 15px 10px;background:#fff}.news-box__head-title h1{font-family:"Roboto",serif;font-size:20px;font-weight:bold;text-transform:uppercase}.news-box__header{width:100%}.news-box__header h2,.news-box__header h3,.news-box__header h4,.news-box__header span{font-family:"Roboto",serif;font-size:20px;font-weight:bold;text-transform:uppercase}.news-box__header h2 a,.news-box__header h3 a,.news-box__header h4 a,.news-box__header span a{display:block;padding:5px 10px}.news-box__header ul li a{padding:6px 0 6px 3px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;font-size:13px;color:#fff}.news-box__header ul li a svg{margin-right:3px;position:relative;left:0;top:1px;fill:#fff}.news-box__header ul li a:hover svg{left:3px}.news-box__header-horizontal{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;margin-bottom:20px}.news-box__header-horizontal ul{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.news-box__header-horizontal ul li a{font-size:16px;font-weight:bold;padding:5px 15px 5px 5px;margin-right:5px}.news-box__header-horizontal--logo{margin-top:-10px;margin-bottom:10px}.news-box__header-horizontal--logo h1 img,.news-box__header-horizontal--logo h1 svg{width:80px}.news-box__header--logo img{width:100px;margin:-10px 0 -10px}.news-box__header--logo svg{width:100px}.news-box--color .news-box__header h3 a.news-box__logo,.news-box--color .news-box__header span a.news-box__logo{padding:0}.news-box--color .news-box__header h3 a.news-box__logo svg,.news-box--color .news-box__header h3 a.news-box__logo img,.news-box--color .news-box__header span a.news-box__logo svg,.news-box--color .news-box__header span a.news-box__logo img{max-width:120px;height:auto}.news{width:100%;padding:15px;margin-bottom:5px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:space-between;background:#fff}.news:last-child:not(.news--big){margin-bottom:0}.news[data-columns="2"]{width:calc(50% - 7.5px);margin-bottom:15px}.news[data-columns="2"]:nth-last-child(-n+2){margin-bottom:0}.news[data-columns="3"]{width:calc(33.3333333333% - 10px)}.news[data-columns="4"]{width:calc(25% - 11.25px)}.news[data-columns="5"]{width:calc(20% - 12px)}.news__img{width:150px}.news__embed{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%}.news__embed iframe,.news__embed object,.news__embed embed{position:absolute;top:0;left:0;width:100%;height:100%}.news__content{width:calc(100% - 150px - 15px);display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-direction:column;justify-content:space-between}.news__content h2,.news__content h3,.news__content h4,.news__content h5,.news__content>span{font-size:20px;line-height:26px;font-weight:700}.news__content h2 a,.news__content h3 a,.news__content h4 a,.news__content h5 a,.news__content>span a{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;max-height:104px;overflow:hidden;letter-spacing:.5px}.news__content>span a{font-family:"Merriweather",serif}.news__content p{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;max-height:58px;overflow:hidden;margin-top:7px}.news__bottom{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between;padding-top:10px}.news__bottom .category{font-size:14px}.news__bottom .category a,.news__bottom .category span{color:var(--site-primary-color);text-transform:uppercase}.news__bottom .category a:hover,.news__bottom .category span:hover{color:initial}.news__bottom .category--sport a,.news__bottom .category--sport span{color:#34679b}.news__bottom .category--biznis a,.news__bottom .category--biznis span{color:#395b4a}.news__bottom .pr{background:#ffd90b;color:#000;font-size:9px;padding:4px;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px}.news__bottom time{margin-left:auto;font-size:14px}.news__bottom time:after{content:"•";margin:0 5px 0 3px}.news__bottom time+.comments-no{margin-left:initial}.comments-no{color:rgba(48,48,48,.8117647059);font-size:14px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;margin-left:auto}.comments-no a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center}.comments-no a:hover svg{fill:var(--site-primary-color)}.comments-no svg{font-size:12px;margin-left:5px}.news--big{position:relative;padding:0;flex-direction:column;background:rgba(0,0,0,0);margin-bottom:15px}.news--big:not(:first-child){margin-top:15px}.news--big .news__img{width:100%}.news--big .news__icon{left:15px;bottom:15px}.news--big .news__content{position:relative;width:calc(100% - 30px);left:15px;bottom:15px;margin-bottom:-15px;background:#fff;padding:15px 15px 12px}.news--big .news__content h2,.news--big .news__content h4{font-size:28px;line-height:35px}.news--big .news__content h2 a,.news--big .news__content h4 a{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;max-height:140px;overflow:hidden}.news--big .news__content p{margin-bottom:10px;color:#7e7e7e}.news--big .news__embed+.news__content{bottom:0}.news--split{position:relative;padding:0;background:rgba(0,0,0,0);margin-bottom:15px}.news--split .news__img{width:493px}.news--split .news__icon{left:15px;bottom:15px}.news--split .news__content{position:relative;width:248px;background:#fff;padding:10px}.news--split .news__content h2,.news--split .news__content h4{font-size:20px;line-height:25px}.news--split .news__content h2 a,.news--split .news__content h4 a{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;max-height:130px;overflow:hidden;color:#000}.news--split .news__content h2 a:hover,.news--split .news__content h4 a:hover{color:var(--site-primary-color)}.news--split .news__content p{font-size:18px;line-height:27px;margin-bottom:10px;color:#303030;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;max-height:81px;overflow:hidden}.news--split .news__bottom{color:#545454}.news--split .news__bottom .category a,.news--split .news__bottom .category span{font-weight:700}.news--split .news__bottom .comments-no{color:#545454}.news--split .news__bottom .comments-no svg{fill:#545454}.embed-box{background:var(--site-primary-color);padding:15px;margin-bottom:15px}.embed-box h2{text-align:center;padding-top:15px;font-weight:bold}.embed-box h2 a{color:#fff}.embed-box h2:hover a{opacity:.75}.news--medium{position:relative;padding:0;flex-direction:column;background:rgba(0,0,0,0);margin-bottom:0}.news--medium .news__img{width:100%}.news--medium .news__icon{left:15px;bottom:15px}.news--medium .news__content{width:100%;background:#fff;padding:10px 10px 7px}.news--medium .news__content p{margin-bottom:10px;color:#7e7e7e}.news-box--top{margin-bottom:20px}.news-box--top .news-box__header span{font-size:12px;font-weight:normal}.news-box--top .news-box__inner{background:#292929;padding:15px 15px 12px}.news-box--top .news{background:rgba(0,0,0,0);padding:0;margin:0}.news-box--top .news__content span{font-family:"Roboto",serif;font-size:16px;line-height:22px;position:relative;top:-3px}.news-box--top .news__content span a{color:#fff;max-height:88px}.news__breaking{position:absolute;left:15px;top:15px;z-index:1;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;background:#fff;text-transform:uppercase;font-weight:bold}.news__breaking i{background:var(--site-primary-color);color:#fff;padding:10px}.news__breaking span{padding:10px}.news-box__scroll{width:100%;padding:0 15px;margin-bottom:5px;background:#fff;overflow-x:scroll;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:space-between;flex-direction:row;flex-wrap:nowrap}.news-box__scroll .news{flex:0 0 45%;max-width:45%;margin-right:15px;padding:0;flex-direction:column;justify-content:flex-start}.news-box__scroll .news .news__img{width:100%}.news-box__scroll .news .news__content{width:100%;padding:10px 0 0}.news-box__scroll .news:last-child{margin-right:0}.news__horizontal-box{display:flex;column-gap:15px}.news__horizontal-box .news--medium .news__content{height:147px}.news__carousel{margin:-15px 0 -10px;--swiper-theme-color: #fff}.news__carousel .news-box__header{position:absolute;left:0;top:15px;width:100%;z-index:100;background:0;border:0}.news__carousel .news-box__header h1{background:rgba(0,0,0,0)}.news__carousel .news-box__header h1 a{color:#fff}.news__carousel .news{position:relative;flex-direction:column;margin-bottom:0}.news__carousel .news__img{width:100%}.news__carousel .news__content{width:100%;position:absolute;left:0;padding-bottom:30px;background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.001))}.news__carousel .news__content a{color:#fff}.news__carousel .news__content svg{fill:#fff}.news__carousel .news__content h2{font-size:22px;line-height:28px;margin-bottom:10px}.news__carousel .news__content h2 a{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;max-height:114px;overflow:hidden}.news__carousel .news__content p{color:rgba(255,255,255,.75);margin-bottom:20px}.news__carousel .swiper-container-horizontal>.swiper-pagination-bullets{bottom:7px}.news__carousel .news--big .news__icon{left:15px;bottom:auto;top:45px}.news__carousel .news--big .news__bottom{border-color:rgba(255,255,255,.3)}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs{position:absolute;top:0;bottom:auto;left:0;z-index:1;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;overflow-x:scroll;width:auto;min-width:100%;-ms-overflow-style:none;scrollbar-width:none}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs::-webkit-scrollbar{display:none}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs.swiper-tabs--new .swiper-tab{flex:1;background:#000;height:36px;display:grid;place-items:center;color:#fff;text-align:center;font-size:14px;white-space:nowrap;cursor:pointer}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs.swiper-tabs--new .swiper-tab-active{background:#42855b}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs:not(.swiper-tabs--new) .swiper-tab{flex:1;background:rgba(34,34,34,.6);margin-right:2px;padding:9px 10px 8px;color:#fff;text-align:center;text-transform:uppercase;font-size:13px;white-space:nowrap;letter-spacing:1px;cursor:pointer}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs:not(.swiper-tabs--new) .swiper-tab:last-child{margin-right:0}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs:not(.swiper-tabs--new) .swiper-tab-active:after{content:"";background:var(--site-primary-color);width:calc(100% + 20px);height:3px;display:block;position:relative;bottom:-8px;left:-10px;animation:loading;animation-duration:220ms}@keyframes loading{0%{width:0}100%{width:calc(100% + 20px)}}.news__carousel-top .swiper-button-prev,.news__carousel-top .swiper-button-next,.news__carousel-top--no-tabs .swiper-button-prev,.news__carousel-top--no-tabs .swiper-button-next{background:rgba(34,34,34,.6);color:#fff;width:40px;height:40px;padding:10px;top:220px}.news__carousel-top .swiper-button-prev:hover,.news__carousel-top .swiper-button-next:hover,.news__carousel-top--no-tabs .swiper-button-prev:hover,.news__carousel-top--no-tabs .swiper-button-next:hover{background:var(--site-primary-color)}.news__carousel-top .swiper-button-prev,.news__carousel-top--no-tabs .swiper-button-prev{left:15px}.news__carousel-top .swiper-button-next,.news__carousel-top--no-tabs .swiper-button-next{right:15px}.news__carousel-top .swiper-button-next:after,.news__carousel-top .swiper-button-prev:after,.news__carousel-top--no-tabs .swiper-button-next:after,.news__carousel-top--no-tabs .swiper-button-prev:after{font-size:16px}.news__carousel-top--no-tabs.swiper-container-horizontal>.swiper-pagination-bullets{bottom:auto;top:343px}.news__carousel-top--no-tabs .swiper-pagination-bullet{width:15px;height:15px;background:#bababa;border:1px solid #959595;opacity:1}.news__carousel-top--no-tabs .swiper-pagination-bullet.swiper-pagination-bullet-active{background:#f2f2f2}.news__carousel-top--hidden.swiper-container-horizontal>.swiper-pagination-bullets.swiper-tabs{top:-35px}.news__carousel-top--hidden .swiper-button-prev{left:-40px}.news__carousel-top--hidden .swiper-button-next{right:-40px}.news__carousel-box .swiper-button-prev,.news__carousel-box .swiper-button-next{background:rgba(34,34,34,.6);color:#fff;width:40px;height:40px;padding:10px;top:220px}.news__carousel-box .swiper-button-prev:hover,.news__carousel-box .swiper-button-next:hover{background:var(--site-primary-color)}.news__carousel-box .news--medium .news__content{height:147px}.news__carousel-box .news--medium .news__content.news__content--no-bottom{height:131px}.news__carousel-box .top-putovanja:hover{background:#74e5e1}.news__carousel-box .top-poslodavac:hover{background:#5045ce}.news__carousel-box .lookup:hover{background:#48644d}.news__carousel-box .unicredit:hover{background:#bf0000}.news__carousel-box .sportal:hover{background:#ff4c00}.news__carousel-box .ep_basket_2022:hover{background:#0a0060}.news__carousel-box .zdrav_izbor:hover{background:#0b437c}.news__carousel-box .prvi_na_plazi:hover{background:skyblue}.news__carousel-box .grow_up:hover{background:#094335}.news__carousel-box .visa_za_katar:hover{background:#56042c}.news__carousel-box .australian_open:hover{background:#0297db}.news__carousel-box .sp-waterpolo-2022:hover{background:#00a7b1}.news__carousel-box .medijska-pismenost-za-roditelje:hover{background:#e7511e}.news__carousel-box .swiper-button-prev{left:15px}.news__carousel-box .swiper-button-next{right:15px}.news__carousel-box .swiper-button-next:after,.news__carousel-box .swiper-button-prev:after{font-size:16px}.news__carousel-box .news__content h4 a,.news__carousel-box .news__content h5 a,.news__carousel-box .news__content span a{min-height:104px}.news-box--color{padding:20px 0;margin-bottom:20px}.news-box--color .section{margin-bottom:0}.news-box--color .news-box__header h3,.news-box--color .news-box__header h4,.news-box--color .news-box__header>span{background:rgba(0,0,0,0);padding:0}.news-box--color .news-box__header h3 a,.news-box--color .news-box__header h4 a,.news-box--color .news-box__header>span a{color:#fff}.news-box--color .news--big{margin-bottom:0}.news-box--color .news--big figure{height:336px}.news-box--color .news--big .news__content{height:190px}.news-box--color .section__aside .news-box{margin-bottom:0}.news-box--sport{background:linear-gradient(35deg, #4276ab, #34679b)}.news-box--sport .news-box__header li a{background:rgba(255,255,255,.2117647059);color:#fff}.news-box--sport .news-box__header li a svg{fill:#fff}.news-box--sportal{background:#ff4c00}.news-box--sportal .news-box__header li a{background:rgba(255,255,255,.2117647059);color:#fff}.news-box--sportal .news-box__header li a svg{fill:#fff}.news-box--sportal .news-box__header-horizontal--logo{margin-top:0;margin-bottom:15px}.news-box--sportal .news-box__header-horizontal{position:relative}.news-box--sportal .news-box__header-horizontal img{width:200px;position:absolute;top:-14px;left:0}.news-box--sp-waterpolo-2022{background:#00a7b1;padding-top:4px}.news-box--sp-waterpolo-2022 .news-box__header{display:flex;justify-content:space-between;align-items:center}.news-box--sp-waterpolo-2022 .news-box__header h1.sp-waterpolo-2022{font-size:30px}.news-box--sp-waterpolo-2022 .news-box__header h1.sp-waterpolo-2022 a{padding-left:0px}.news-box--sp-waterpolo-2022 .news-box__header svg{width:60px;height:60px}.news-box--biznis{background:#395b4a}.news-box--zena{background:#ef2673}.news-box--zena .news--big .news__content a:hover,.news-box--zena .section__aside .news a:hover{color:#ef2673;fill:#ef2673}.news-box--zena .news-box__header ul li a{color:#fff}.news-box--zena .news-box__header ul li a svg{fill:#fff}.news-box--zena .news__bottom .category a{color:#fff}.news-box--noizz{background:#000}.news-box--noizz .news-box__header-horizontal h1 a{padding:0}.news-box--noizz .news-box__header-horizontal h1 svg{fill:#fff}.news-box--kultura{background:linear-gradient(35deg, #c18402, #ab7605)}.news-box--kultura.news-box--color .news-box__header h3{background:#c18402}.news-box--kultura .news-box__header li a{background:#000;color:#fff}.news-box--kultura .news-box__header li a svg{fill:#fff}.news-box--maxbet{background:linear-gradient(35deg, #024e27, #024e27)}.news-box--povratak-u-skolu{background:linear-gradient(35deg, #f8a530, #f9bd28)}.news-box--povratak-u-skolu .news-box__header h3{background:#303030}.news-box--povratak-u-skolu .news-box__header li a{background:#303030;color:#fff}.news-box--povratak-u-skolu .news-box__header li a svg{fill:#fff}.news-box--video{background:linear-gradient(35deg, var(--site-primary-color), var(--site-primary-color));padding-top:0}.news-box--video .news-box__header-horizontal{margin-bottom:0}.news-box--video .news-box__header-horizontal h3 a,.news-box--video .news-box__header-horizontal>span a{padding:10px 0 8px}.news-box--video .news__bottom{height:26px}.news-box--top-putovanja{background:linear-gradient(35deg, #74E5E1, #74E5E1);padding-top:0}.news-box--top-putovanja .news-box__header-horizontal{margin-bottom:0}.news-box--top-putovanja .news-box__header-horizontal h3 a{padding:10px 0 8px}.news-box--top-putovanja .news__bottom{height:26px}.news-box--top-poslodavac{background:linear-gradient(35deg, #5045ce, #5045ce);padding-top:0}.news-box--top-poslodavac .news-box__header-horizontal{margin-bottom:0}.news-box--top-poslodavac .news-box__header-horizontal h4 a{padding:10px 0 8px;text-transform:none}.news-box--top-poslodavac .news__bottom{height:26px}.news-box--mis-news-portal{background:#3a9277;padding-top:0}.news-box--mis-news-portal .news-box__header-horizontal{margin-bottom:0}.news-box--mis-news-portal .news-box__header-horizontal h4 a{padding:10px 0 8px;text-transform:none}.news-box--mis-news-portal .news__bottom{height:26px}.news-box--mis-news-portal .news-box__header-sponsor{padding:5px 0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center}.news-box--mis-news-portal .news-box__header-sponsor .sponsor-lookup a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:flex-end}.news-box--mis-news-portal .news-box__header-sponsor .sponsor-lookup img{width:82px;height:35px}.news-box--mis-news-portal .news-box__header-sponsor .sponsor-lookup span{text-transform:none;font-size:16px;position:relative;bottom:-4px;left:4px;color:#fff}.news-box--mis-news-portal .news-box__header-sponsor .sponsor-elixir{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center}.news-box--mis-news-portal .news-box__header-sponsor .sponsor-elixir span{margin-right:5px;font-size:11px;font-weight:normal;text-transform:none;color:#fff}.news-box--mis-news-portal .news-box__header-sponsor .sponsor-elixir img{width:75px;height:17px}.news-box--ep_basket_2022{background:linear-gradient(35deg, #0A0060, #0A0060);padding-top:0}.news-box--ep_basket_2022 .news-box__header-horizontal{margin-bottom:0}.news-box--ep_basket_2022 .news-box__header-horizontal h3 a,.news-box--ep_basket_2022 .news-box__header-horizontal>span a{padding:10px 0 8px}.news-box--ep_basket_2022 .news__bottom{height:26px}.news-box--zdrav_izbor{background:linear-gradient(35deg, #0b437c, #0b437c);padding-top:0}.news-box--zdrav_izbor .news-box__header-horizontal{margin-bottom:0}.news-box--zdrav_izbor .news-box__header-horizontal h3 a,.news-box--zdrav_izbor .news-box__header-horizontal>span a{padding:10px 0 8px}.news-box--zdrav_izbor .news__bottom{height:26px}.news-box--prvi_na_plazi{background:linear-gradient(35deg, #87CEEB, #87CEEB);padding-top:0}.news-box--prvi_na_plazi .news-box__header-horizontal{margin-bottom:0}.news-box--prvi_na_plazi .news-box__header-horizontal h3 a,.news-box--prvi_na_plazi .news-box__header-horizontal>span a{padding:10px 0 8px}.news-box--prvi_na_plazi .news__bottom{height:26px}.news-box--grow_up{background:linear-gradient(35deg, #094335, #094335);margin:15px 0;padding-top:0}.news-box--grow_up .news-box__header-horizontal{margin-bottom:0}.news-box--grow_up .news-box__header span{font-size:16px;text-transform:none}.news-box--grow_up .news-box__header span a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;padding:8px 15px;color:#fff}.news-box--grow_up .news-box__header h3 a{padding:5px 0 0}.news-box--grow_up .news-box__header svg{width:100px}.news-box--grow_up .news{flex-direction:column;padding:0}.news-box--grow_up .news__img{width:100%}.news-box--grow_up .news__img figure{margin-bottom:0}.news-box--grow_up .news__content{width:100%;padding:12px 15px}.news-box--grow_up .news__icon{background:#094335}.news-box--phillip_morris{background:#f17809;margin:15px 0;padding-top:0}.news-box--phillip_morris .news-box__header-horizontal{margin-bottom:0}.news-box--phillip_morris .news-box__header span{font-size:16px;text-transform:none}.news-box--phillip_morris .news-box__header span a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;padding:8px 15px;color:#fff}.news-box--phillip_morris .news-box__header h3 a{padding:17px 0 15px;font-size:26px}.news-box--phillip_morris .news{flex-direction:column;padding:0}.news-box--phillip_morris .news__img{width:100%}.news-box--phillip_morris .news__img figure{margin-bottom:0}.news-box--phillip_morris .news__content{width:100%;padding:12px 15px}.news-box--phillip_morris .news__icon{background:#f17809}.news-box--phillip_morris .news__carousel-box .swiper-button-prev:hover,.news-box--phillip_morris .news__carousel-box .swiper-button-next:hover{background:#f17809}.news-box--visa_za_katar{background:linear-gradient(35deg, #56042C, #56042C);padding-top:0}.news-box--visa_za_katar .news-box__header-horizontal{margin-bottom:0;position:relative}.news-box--visa_za_katar .news-box__header-horizontal h3 a,.news-box--visa_za_katar .news-box__header-horizontal>span a{padding:15px 0}.news-box--visa_za_katar .news-box__header-horizontal>a{margin-left:auto}.news-box--visa_za_katar .news-box__header-horizontal>a svg{width:auto;height:28px}.news-box--visa_za_katar .news__bottom{height:26px}.news-box--visa_za_katar .swiper-slide{width:calc(33.3333333333% - 10px);margin-right:15px}.news-box--australian_open{background:linear-gradient(35deg, #0297DB, #0297DB);padding-top:0}.news-box--australian_open .news-box__header-horizontal{margin-bottom:0;position:relative}.news-box--australian_open .news-box__header-horizontal h3 a,.news-box--australian_open .news-box__header-horizontal>span a{padding:15px 0}.news-box--australian_open .news-box__header-horizontal>a{margin-left:auto}.news-box--australian_open .news-box__header-horizontal>a svg{width:auto;height:28px}.news-box--australian_open .news-box__header-horizontal>div{margin-left:auto}.news-box--australian_open .news-box__header-horizontal>div svg{width:auto;height:28px}.news-box--australian_open .news__bottom{height:26px}.news-box--australian_open .swiper-slide{width:calc(33.3333333333% - 10px);margin-right:15px}.news-box--australian_open .news__icon{background:#0297db}.news-box--unicredit{background:linear-gradient(35deg, #bf0000, #bf0000);padding-top:0}.news-box--unicredit .news-box__header-horizontal{margin-bottom:0}.news-box--unicredit .news-box__header-horizontal h3 a{padding:10px 0 8px}.news-box--unicredit .news__bottom{height:26px}.news-box--medijska-pismenost-za-roditelje{background:linear-gradient(35deg, #E7511E, #E7511E);padding-top:0}.news-box--medijska-pismenost-za-roditelje .news-box__header-horizontal{margin-bottom:0}.news-box--medijska-pismenost-za-roditelje .news-box__header-horizontal h3{width:100%}.news-box--medijska-pismenost-za-roditelje .news-box__header-horizontal h3 a{padding:20px 0 10px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between}.news-box--medijska-pismenost-za-roditelje .news-box__header-horizontal h3 a svg{margin-left:10px}.news-box--medijska-pismenost-za-roditelje .news__bottom{height:26px}.news-box--video-carousel{background:linear-gradient(35deg, var(--site-primary-color), var(--site-primary-color));margin:15px 0}.news-box--video-carousel .news-box__header span{font-size:16px;text-transform:none}.news-box--video-carousel .news-box__header span a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;padding:8px 15px;color:#fff}.news-box--video-carousel .news-box__header svg{width:22px;height:22px;margin-right:10px}.news-box--video-carousel .news{flex-direction:column;padding:0}.news-box--video-carousel .news__img{width:100%}.news-box--video-carousel .news__img figure{margin-bottom:0}.news-box--video-carousel .news__content{width:100%;padding:12px 15px}.news-box--video-carousel .news__carousel-box .swiper-button-prev,.news-box--video-carousel .news__carousel-box .swiper-button-next{top:78px}.news-box--video-carousel .news__icon{background:var(--site-primary-color)}.news-box--zenaPromo-carousel{background:#ef2673;margin:15px 0}.news-box--zenaPromo-carousel .news-box__header span{font-size:16px;text-transform:none}.news-box--zenaPromo-carousel .news-box__header span a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;padding:8px 15px;color:#fff}.news-box--zenaPromo-carousel .news-box__header svg{width:22px;height:22px;margin-right:10px}.news-box--zenaPromo-carousel .news{flex-direction:column;padding:0}.news-box--zenaPromo-carousel .news__img{width:100%}.news-box--zenaPromo-carousel .news__img figure{margin-bottom:0}.news-box--zenaPromo-carousel .news__content{width:100%;padding:12px 15px}.news-box--zenaPromo-carousel .news__content a:hover{color:#ef2673}.news-box--zenaPromo-carousel .news__carousel-box .swiper-button-prev,.news-box--zenaPromo-carousel .news__carousel-box .swiper-button-next{top:78px}.news-box--zenaPromo-carousel .news__carousel-box .swiper-button-prev:hover,.news-box--zenaPromo-carousel .news__carousel-box .swiper-button-next:hover{background:#ef2673}.news-box--zenaPromo-carousel .news__icon{background:#ef2673}.news-box--kontikiPromo-carousel{background:#f7941e;margin:15px 0}.news-box--kontikiPromo-carousel .news-box__header{position:relative;height:55px}.news-box--kontikiPromo-carousel .news-box__header span{font-size:16px;text-transform:none;height:55px;display:flex}.news-box--kontikiPromo-carousel .news-box__header span a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;padding:8px 15px;color:#fff}.news-box--kontikiPromo-carousel .news-box__header svg{width:22px;height:22px;margin-right:10px}.news-box--kontikiPromo-carousel .news-box__header-logo{position:absolute;top:5px;left:50%;transform:translateX(-50%);width:88px}.news-box--kontikiPromo-carousel .news-box__inner{background:rgba(0,0,0,0);border:0;padding-top:0}.news-box--kontikiPromo-carousel .news{flex-direction:column;padding:0}.news-box--kontikiPromo-carousel .news__img{width:100%}.news-box--kontikiPromo-carousel .news__img figure{margin-bottom:0}.news-box--kontikiPromo-carousel .news__content{width:100%;padding:5px}.news-box--kontikiPromo-carousel .news__content a:hover{color:#f7941e}.news-box--kontikiPromo-carousel .news__carousel-box .swiper-button-prev,.news-box--kontikiPromo-carousel .news__carousel-box .swiper-button-next{top:70px}.news-box--kontikiPromo-carousel .news__carousel-box .swiper-button-prev:hover,.news-box--kontikiPromo-carousel .news__carousel-box .swiper-button-next:hover{background:#f7941e}.news-box--kontikiPromo-carousel .news__icon{background:#f7941e}.news-box--video-static .news-box__header{background:var(--site-primary-color)}.news-box--video-static .news-box__header span{font-size:16px;text-transform:none}.news-box--video-static .news-box__header span a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;padding:8px 15px;color:#fff}.news-box--video-static .news-box__header svg{width:22px;height:22px;margin-right:10px}.news-box--video-static .news-box__header:hover svg{color:#fff}.news-box--video-static .news-box__inner{padding:15px 2.17px;background:#fff;border:0}.news-box--video-static .news{flex-direction:column;padding:0;width:calc(25% - 11.25px);margin:0}.news-box--video-static .news__img{width:100%}.news-box--video-static .news__img:hover svg{color:#fff}.news-box--video-static .news__content{width:100%;padding:15px 0 0}.section__right .news-box--zenaPromo-carousel .news-box__inner{background:#fff}.section__right .news-box--zenaPromo-carousel .news__content{padding:12px 0 0}.section__right .news-box--zenaPromo-carousel .swiper-button-prev{left:0}.section__right .news-box--zenaPromo-carousel .swiper-button-next{right:0}.section__aside .news-box--color-si{padding:0}.section__aside .news-box--color-si .news-box__header{border-color:#ea1c24}.section__aside .news-box--color-si .news-box__header h1 a{color:#ea1c24;padding:0 15px}.section__aside .news-box--color-si .news-box__header h1 svg{width:150px;position:relative;left:-12px;top:8px}.section__right .news-box--video-carousel .news-box__inner{background:#fff}.section__right .news-box--video-carousel .news__content{padding:12px 0 0}.article .news-box--video{margin-bottom:15px;padding:0;border-bottom:1px solid #eaeaea}.article .news-box--video .news-box__header h3{font-size:16px;text-transform:none}.article .news-box--video .news-box__header h3 a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;padding:8px 15px}.article .news-box--video .news-box__header svg{width:22px;height:22px;margin-right:10px}.article .news-box--video .news{width:50%;margin-bottom:0}.article .news-box--video .news:not(:last-child){border-left:1px solid #eaeaea}.article .news-box--video .news:last-child{border-right:1px solid #eaeaea}.article .news-box--video .news__img{width:120px}.article .news-box--video .news__content{width:calc(100% - 120px - 15px)}.article .news-box--video .news__content h4{font-size:16px;line-height:22px;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;max-height:88px;overflow:hidden}.article .news-box--video figure{margin-bottom:0}.news-box--color2{padding:20px 0;margin-bottom:20px;background:#fff}.news-box--color2 .news{padding:0;margin-bottom:20px}.news-box--color2 .news--big{margin-bottom:0}.news-box--sport2{border-top:5px solid #34679b;border-bottom:5px solid #34679b;background:linear-gradient(35deg, #4276ab 30%, #fff 30%, #fff)}.news-box--sport2 .news-box__header a{color:#34679b}.news-box--sport2 .news-box__header svg{fill:#34679b}.news-box--full{position:relative;overflow:hidden;margin:20px 0}.news-box--full .section{width:calc(100% - 200px);margin-top:20px}.news-box--full .section .section__content{width:calc(100% - 300px - 20px)}.news-box--full .section .section__right{width:calc(100% - 120px - 20px);height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.news-box--full .section__left,.news-box--full .section__aside{position:relative;z-index:1}.news-box--full .section__left{background:rgba(255,255,255,.7803921569)}.news-box--full .news--bg{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-direction:column;justify-content:space-between;padding:0;margin:0 auto}.news-box--full .news--bg figure{position:unset}.news-box--full .news--bg figure .news__icon{position:relative;width:32px}.news-box--full .news--bg figure .news__icon .icon{width:22px;height:22px}.news-box--full .news--bg img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.news-box--full .news--bg .news__content{background:rgba(255,255,255,.1803921569);padding:15px;width:680px;margin:0 auto;position:relative;z-index:1;text-align:center}.news-box--full .news--bg .news__content h4 a{color:#fff;font-size:42px;line-height:52px;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;max-height:208px;overflow:hidden;text-shadow:1px 1px 1px #303030}.news-box--full .news--bg .news__bottom{justify-content:space-evenly}.news-box--full .news--bg .news__bottom .category span,.news-box--full .news--bg .news__bottom .comments-no a{color:#fff}.news-box--full .news--bg .news__bottom .category span svg,.news-box--full .news--bg .news__bottom .comments-no a svg{fill:#fff}.news-box--full .news--bg .comments-no{margin-left:initial}.news-box--full .news{background:rgba(255,255,255,.7803921569);border-bottom:3px solid #34679b}.news-box--full--sport{border-top:5px solid #34679b;border-bottom:5px solid #34679b}.news-box--full--sport .news-box__header h1 a{background:#34679b;color:#fff}.news-box--full--sport .news-box__header a{color:#34679b}.news-box--full--sport .news-box__header a svg{fill:#34679b}.article .news-box--video{margin-bottom:15px}.article .news-box--video figure{margin-bottom:0}.news-box--related{margin:20px 0}.news-box--related .news-box__header h2,.news-box--related .news-box__header h3,.news-box--related .news-box__header span{padding:8px 15px;border-top:3px solid var(--site-primary-color);border-left:1px solid #eaeaea;border-right:1px solid #eaeaea}.news-box--related .news-box__header h2 a,.news-box--related .news-box__header h3 a,.news-box--related .news-box__header span a{padding:0}.news-box--related .news-box__header span{display:block}.news-box--related .news[data-columns]{flex-wrap:wrap;padding:0;margin-bottom:0}.news-box--related .news[data-columns] .news__img{width:100%}.news-box--related .news[data-columns] .news__content{width:100%;padding:15px}.news-box--related .news:not([data-columns]){margin-top:15px;margin-bottom:0}.article .news-box--related figure{margin-bottom:0}.news-box--related-red{background:linear-gradient(35deg, var(--site-secondary-color), var(--site-primary-color))}.news-box--related-red .news-box__header h2{border:0;padding-bottom:0;margin-bottom:-7px;color:#fff}.news-box--related-red .news-box__inner{background:rgba(0,0,0,0);border:0}.news-box__inner{padding:15px;background:#f1f1f1;border:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:space-between;width:100%}.news-box__tabs>ul{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;border-bottom:2px solid var(--site-primary-color)}.news-box__tabs>ul li{font-size:12px;text-transform:uppercase;flex:1;padding:10px;text-align:center;cursor:pointer}.news-box__tabs>ul li.active{background:var(--site-primary-color);color:#fff}.news-box__tabs .news-box__tabs-selection{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.news-box__tabs .news-box__tabs-selection h2{font-family:"Roboto",serif;font-size:12px;text-transform:uppercase;flex:1;padding:10px;text-align:center;cursor:pointer}.news-box__tabs .news-box__tabs-selection h2.active{color:#fff}.news-box__tabs .news-box__tabs-selection h2.active:first-child{background:var(--site-primary-color)}.news-box__tabs .news-box__tabs-selection h2.active:last-child{background:#ff4c00}.news-box__tabs .news-box__tab{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.news-box__tabs .news-box__tab h2{font-family:"Roboto",serif;font-size:12px;text-transform:uppercase;flex:1;padding:10px;text-align:center;color:#fff}.news-box__tabs .news-box__tab h2[data-tab=tab-info]{background:var(--site-primary-color)}.news-box__tabs .news-box__tab h2[data-tab=tab-sport]{background:#ff4c00}.news-box__tabs-line{display:block;width:100%;height:2px;background:#c00;background:linear-gradient(130deg, rgb(204, 0, 0) 0%, rgb(204, 0, 0) 35%, rgb(255, 76, 0) 65%, rgb(255, 76, 0) 100%)}.news-box__tabs-content{display:none}.news-box__tabs-content ul{background:#fff;height:264px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-direction:column;justify-content:space-around}.news-box__tabs-content li{padding:15px;font-size:16px;font-weight:bold;border-bottom:1px solid #eaeaea}.news-box__tabs-content li:last-child{border:0}.news-box__tabs-content li a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center}.news-box__tabs-content li time{font-size:15px;color:var(--site-primary-color)}.news-box__tabs-content li div{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;max-height:69px;overflow:hidden}.news-box__tabs-content li .news__icon{margin-left:5px}.news-box__tabs-content.active{display:block}.news-box__tabs-more a{background:#fff;color:var(--site-primary-color);text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;padding:0 15px 7px;font-size:14px;font-weight:bold}.news-box__tabs-more a:hover svg{left:5px}.news-box__tabs-more svg{fill:var(--site-primary-color);padding:4px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;margin-left:5px;width:20px;height:20px;position:relative;left:0}.section__aside .news-box,.section__aside .news-box__tabs,.section__aside iframe{margin-bottom:15px}.section__aside .news-box__header h3 a,.section__aside .news-box__header h3 span,.section__aside .news-box__header span a{padding:8px 15px;border-top:3px solid var(--site-primary-color);background:#fff;display:block}.section__aside .news:last-child{margin-bottom:0}.section__aside .news__img{width:94px}.section__aside .news__content{width:calc(100% - 94px - 15px)}.section__aside .news__content h4,.section__aside .news__content>span{font-size:15px;line-height:17px}.section__aside .news__content h4 a,.section__aside .news__content>span a{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;max-height:68px;overflow:hidden}.section__aside .news__content.news__content--full-width{width:100%}.section__aside .news--big{margin-bottom:5px}.section__aside .news--big:not(:first-child){margin-top:0}.section__aside .news--big .news__img{width:100%}.section__aside .news--big .news__content{width:100%;position:unset;margin-bottom:0}.section__aside .news--big .news__content h4,.section__aside .news--big .news__content>span{font-size:16px;line-height:20px}.section__aside .news--big .news__content h4 a,.section__aside .news--big .news__content>span a{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;max-height:60px;overflow:hidden}.section__aside .news-box-title--sport h3 a,.section__aside .news-box-title--sport h3 span{border-color:#34679b;color:#34679b}.section__aside .news-box-title--biznis h3 a,.section__aside .news-box-title--biznis h3 span{border-color:#395b4a;color:#395b4a}.section__aside .news-box-title--zena h3 a,.section__aside .news-box-title--zena h3 span{border-color:#ef2673;color:#ef2673}.section__aside .news-box-title--super-recepti h3 a,.section__aside .news-box-title--super-recepti h3 span,.section__aside .news-box-title--super-recepti .news-box__header span a{border-color:#de7900;color:#de7900}.section__aside .news-box-title--sportal h3 a,.section__aside .news-box-title--sportal h3 span{border-color:#ff4c00;color:#ff4c00}.section__aside .news-box-title--sp-waterpolo-2022 h3 a,.section__aside .news-box-title--sp-waterpolo-2022 h3 span{border-color:#00a7b1;color:#00a7b1}.section__aside .news-box-aside--color{padding:15px}.section__aside .news-box-aside--color h3 a,.section__aside .news-box-aside--color .news-box__header span a{padding:0 0 15px 0;border:0;color:#fff;background:rgba(0,0,0,0)}.section__aside .news-box-aside--color .news--big .news__content{background:none}.section__aside .news-box-aside--color .news{padding:0;background:rgba(0,0,0,0)}.section__aside .news-box-aside--color .news h4 a{color:#fff}.section__aside .news-box-aside--color .news span a{color:#fff;font-family:"Merriweather",serif}.section__aside .news-box-aside--color .news__bottom .category span,.section__aside .news-box-aside--color .comments-no a{color:rgba(255,255,255,.75)}.section__aside .news-box-aside--color .news__bottom .category span svg,.section__aside .news-box-aside--color .comments-no a svg{fill:rgba(255,255,255,.75)}.section__aside .news-box-aside--zabava{background:var(--site-primary-color)}.section__aside .news-box-aside--pulsonline{background:#000;border-top:3px solid #fb0359}.section__aside .news-box-aside--pulsonline .news--big .news__content{padding:15px 0 0}.section__aside .news-box-aside--pulsonline .news{margin-bottom:15px}.section__aside .news-box-aside--pulsonline .news:last-child{margin-bottom:0}.section__aside .news-box-aside--pulsonline h3 a{color:#fb0359}.section__bottom .news{width:calc(50% - 10px);margin:20px 0 0}.section__left .news{flex-direction:column;padding:0;background:rgba(0,0,0,0)}.section__left .news__img{width:100%}.section__left .news__content{padding-top:5px;width:100%}.section__left .news__content h4{font-size:14px;line-height:18px}.section__left .news__content h4 a{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;max-height:72px;overflow:hidden}.section__left .news__bottom{padding:3px 0 5px}.section__left .news__bottom .category,.section__left .news__bottom .comments-no{font-size:11px}.section__left .news__bottom .category svg,.section__left .news__bottom .comments-no svg{width:12px;height:12px}.mt0{margin-top:0}.mb15{margin-bottom:15px}.highlight--biznis{background:#395b4a;padding:10px;margin-bottom:10px}.highlight--biznis .news-box__title h3{color:#fff;text-transform:uppercase;margin-bottom:10px;font-family:"Roboto",serif;font-size:13px;font-weight:bold}.highlight--biznis .news-box__title h3:not(:first-child){margin-top:20px}.highlight--biznis .news__content h4 a{color:#fff}.bonus-video{margin-bottom:15px}.bonus-video>span{background:#001834;display:inline-block}.bonus-video>span a{font-weight:bold;padding:10px 15px 6px;color:#fff;display:block}.bonus-video .swiper-button-prev,.bonus-video .swiper-button-next{background:var(--site-primary-color);color:#fff;width:55px;height:55px;padding:10px;top:50%}.bonus-video .swiper-button-prev:hover,.bonus-video .swiper-button-next:hover{background:#001834}.bonus-video .swiper-button-prev{left:15px}.bonus-video .swiper-button-next{right:0}.bonus-video .swiper-button-next:after,.bonus-video .swiper-button-prev:after{font-size:16px}.bonus-video__carousel-box .swiper-slide{width:calc(90% + 1px);padding:15px;background:#001834}.news3-box{display:flex;flex-wrap:wrap;column-gap:40px;padding:40px 20px}.news3-box>h3{font-weight:700;font-size:32px;line-height:38px;text-align:center;width:100%;color:#000}.news3-box>h3 a{color:#000}.news3-box>h3 a:hover{color:#000}.news3-box:has(.news3--big){padding-top:0}.news3{width:320px;margin-top:40px}.news3__content h2 a,.news3__content h4 a{min-height:90px;font-size:24px;line-height:30px;color:#121221;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;max-height:90px;overflow:hidden;margin-top:20px}.news3__bottom{color:#949494;margin-top:20px}.news3__bottom time{padding:5px 10px;margin-right:24px}.news3__bottom .category a{padding:5px 10px;color:#949494;border:1px solid rgba(0,0,0,.1);border-radius:2px;display:inline-block}.news3--big{flex-basis:100%;margin-top:0}.news3--big .news3__img a{height:400px}.news3--big .news3__content h2 a{font-family:"Merriweather",serif;font-size:32px;line-height:48px;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;max-height:144px;overflow:hidden;margin-top:11px}.news3--big .news3__bottom{margin-top:15px;display:flex;justify-content:space-between}.news3--big .news3__bottom time{margin-right:0}.news-box--hedonizam{background:#b98f55}.news-box--enterijer_i_dizajn{background:#b98f55}.news-box--hedonizam>h3 a,.news-box--enterijer_i_dizajn>h3 a{color:#fff}.news-box--hedonizam>h3 a:hover,.news-box--enterijer_i_dizajn>h3 a:hover{color:#fff}.news-box--hedonizam h2 a,.news-box--hedonizam h4 a,.news-box--enterijer_i_dizajn h2 a,.news-box--enterijer_i_dizajn h4 a{color:#fff}.news-box--hedonizam .news3__bottom,.news-box--enterijer_i_dizajn .news3__bottom{color:#fff}.news-box--hedonizam .news3__bottom .category a,.news-box--enterijer_i_dizajn .news3__bottom .category a{color:#fff;border-color:rgba(255,255,255,.1)}.news--quiz{width:calc(33.3333333333% - 11px);margin-bottom:16px}.news--quiz .news__img{width:100%}.news--quiz .news__content{width:100%;padding:15px;height:193px;background:#fff}.news--quiz .news__content h2{font-size:20px;line-height:25px}.news--quiz .news__content h2 a{-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;max-height:141px;overflow:hidden}.news--quiz .news__quiz-button a{display:flex;justify-content:center;align-items:center;color:#fff;text-transform:uppercase;font-size:16px;font-weight:700;font-family:"Roboto",serif;border-radius:8px;background:#c00;height:49px}.news-box--quiz .banner--space-vertical{width:100%}.promo-video{margin-bottom:20px;width:100%}.promo-video__close{width:24px;height:24px;cursor:pointer;display:grid;place-items:center}.promo-video__close svg{color:#fff;fill:#fff}.promo-video--hidden{display:none}.promo-video__wrap{position:relative;display:block;height:0;padding:0 0 56.25%;overflow:hidden}.promo-video__iframe{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:none}.promo-video__top{background:#001834;height:50px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center}.promo-video__dot{width:20px;height:20px;background:#c00;border-radius:50%;margin-right:5px;animation:blinkingRed;animation-duration:2.5s;animation-iteration-count:infinite}@keyframes blinkingRed{10%{background:#c00}25%{background:rgba(0,0,0,0)}65%{background:rgba(0,0,0,0)}80%{background:#c00}}.promo-video__logo{display:flex;align-items:center}.promo-video__logo img{width:68px;height:30px}.promo-video__logo>span{color:#fff;font-size:18px;margin-left:10px}.promo-video__bottom{background:#001834;height:50px;display:grid;place-items:center}.promo-video__bottom span{color:rgba(255,255,255,.75);font-size:18px;display:flex;align-items:center}.promo-video__bottom span picture{margin-left:10px}.promo-video__bottom span strong{margin-left:10px}.promo-video__bottom strong,.promo-video__bottom a{color:#fff;font-weight:bold}.news-box__top{height:48px;padding:15px 0;display:flex;justify-content:space-between;align-items:center;position:relative;width:100%}.news-box__top:after{content:"";height:1px;width:calc(100% - 30px);border-bottom:1px dashed rgba(0,0,0,.25);position:absolute;top:50%;right:15px;z-index:-1}.news-box__top h1,.news-box__top h2{font-family:"Roboto",serif;font-size:20px;font-weight:700;background:#f0f1f2;padding-left:25px;padding-right:30px;position:relative;text-transform:uppercase}.news-box__top h1:before,.news-box__top h2:before{content:"";border-radius:5px;background:#42855b;width:5px;height:100%;position:absolute;left:13.5px;top:0}.news-box__top div{font-size:14px;font-weight:600;background:#f0f1f2;color:#000;text-transform:uppercase;padding:0 15px 0 30px;display:flex;align-items:center;letter-spacing:1px}.news-box__top div svg{width:20px;height:20px;margin-right:11px}.news-box__top div span{margin:0 10px}.news-box__top.news-box__top--line{height:49px;border-top:1px solid #000}.news-box__first{width:100%}.news-box__first .news{padding:0}.news-box__first .news__img{width:520px}.news-box__first .news__content{width:540px;padding:30px}.news-box__first .news__content h2{font-size:28px;line-height:35px}.news-box__first .news__content h2 a{max-height:140px}.news-box__first .news__content p{font-size:18px;line-height:27px;padding-left:33.5px;position:relative;margin-left:-3.5px;margin-top:0;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;max-height:82px;overflow:hidden}.news-box__first .news__content p:before{content:"";border-radius:7px;background:#42855b;width:7px;height:100%;position:absolute;left:0;top:0}.news-box__bottom{display:flex;flex-wrap:wrap;justify-content:space-between;margin:20px 0;gap:20px}.news-box__bottom .news{width:calc(50% - 10px);margin:0;padding:0}.news-box__bottom .news__content{padding:15px 15px 15px 0}.news-box--boxed .news{width:calc(50% - 10px);margin-bottom:10px;flex-wrap:wrap;border-radius:4px}.news-box--boxed .news__img{width:100%}.news-box--boxed .news__content{width:100%;margin-top:10px}.news-box--boxed .news__content h2 a{min-height:104px}.news-box--boxed:not(.news-box--featured) .news:nth-last-child(odd){margin-right:5px}.news-box--boxed:not(.news-box--featured) .news:nth-last-child(even){margin-left:5px}.news-box--boxed:not(.news-box--featured) .news:nth-last-child(-n+2){margin-bottom:0}.news-box--featured{width:calc(50% - 5px)}.news-box--featured .news{width:100%;background:#395b4a}.news-box--featured:first-child .news{margin-left:5px}.news-box--featured:nth-child(2) .news{margin-right:5px}.page-biznis .news-box h2 a,.page-biznis .news-box h3 a{color:#000}.page-biznis .news__bottom{color:#545454}.page-biznis .news__bottom time:after{margin:0 8px 0 5px}.page-biznis .news__bottom .comments-no{color:#545454}.page-biznis .news__bottom .comments-no svg{fill:#545454;margin-left:10px}.page-biznis .news-box.news-box--featured h2 a,.page-biznis .news-box.news-box--featured h3 a{color:#fff}.page-biznis .news-box.news-box--featured .news__bottom{color:#fff}.page-biznis .news-box.news-box--featured .news__bottom .category span{color:#fff}.page-biznis .news-box.news-box--featured .news__bottom .comments-no a{color:#fff}.page-biznis .news-box.news-box--featured .news__bottom .comments-no a svg{fill:#fff}.news-box--colored{position:relative;background:#fff}.news-box--colored:after{content:"";width:3px;height:100%;top:0;left:0;z-index:10;position:absolute;background:var(--site-primary-color)}.section__left .news-box--colored{margin:15px 0}.section__left .news-box--colored .news{margin-bottom:0}.section__left .news-box--colored .news__content{padding:5px 8px}.section__left .news-box__top--bg{background:var(--site-primary-color);color:#fff;font-size:14px;text-transform:uppercase;height:auto;padding:0}.section__left .news-box__top--bg a{color:#fff;padding:8px 5px;width:100%;text-align:center}figure{position:relative;overflow:hidden}figure:hover img{transform:scale(1.015)}.news__comment{position:absolute;top:10px;right:10px;color:#fff;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;width:38px;height:38px;font-size:26px}.news__comment span{font-size:11px;background:var(--site-primary-color);width:20px;height:20px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:center;align-items:center;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;color:#fff;position:absolute;top:0;left:-6px}.news__icon{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between;color:#fff;fill:#fff;background:var(--site-primary-color);padding:5px}figure .news__icon{position:absolute;bottom:0;left:0}.pagination{width:100%;margin:15px 0}.pagination ul{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:space-between}.pagination li{width:calc(50% - 10px);text-align:center;background:#eaeaea}.pagination li:last-child{margin-left:auto;background:var(--site-primary-color)}.pagination li:last-child a{color:#fff}.pagination li:last-child a svg{fill:#fff;left:5px}.pagination li svg{position:relative;top:1px;left:-5px}.pagination a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;padding:10px}.page-good-life .pagination li:last-child{background:#b98f55}.page-biznis .pagination ul li{border-radius:6px;background:rgba(0,0,0,.25)}.page-biznis .pagination ul li:last-child{background:var(--site-primary-color)}.page-biznis .pagination ul li a{color:#fff;height:54px;font-weight:700}.page-biznis .pagination ul li svg{fill:#fff;color:#fff}.air-pollution{margin-bottom:20px;border:1px solid #e5e5e5;background:#f4f4f4}.air-pollution.green{background:#b3de72;border-color:#4a6b19}.air-pollution.green .air-pollution__info a{color:#4a6b19}.air-pollution.green a:hover{color:#4a6b19}.air-pollution.green .data__text{color:#4a6b19}.air-pollution.green .data__pollutant{color:#4a6b19}.air-pollution.green .data__time,.air-pollution.green .data__source{color:#4a6b19}.air-pollution.green .air-pollution__more{background:#4a6b19;color:#fff}.air-pollution.green .fa-map-marker{color:#4a6b19}.air-pollution.green .air-pollution__changecity ul{border-color:#4a6b19}.air-pollution.yellow{background:#f7d765;border-color:#896c07}.air-pollution.yellow .air-pollution__info a{color:#896c07}.air-pollution.yellow a:hover{color:#896c07}.air-pollution.yellow .data__text{color:#896c07}.air-pollution.yellow .data__pollutant{color:#896c07}.air-pollution.yellow .data__time,.air-pollution.yellow .data__source{color:#896c07}.air-pollution.yellow .air-pollution__more{background:#896c07;color:#fff}.air-pollution.yellow .fa-map-marker{color:#896c07}.air-pollution.yellow .air-pollution__changecity ul{border-color:#896c07}.air-pollution.orange{background:#f19f65;border-color:#7f3b0c}.air-pollution.orange .air-pollution__info a{color:#7f3b0c}.air-pollution.orange a:hover{color:#7f3b0c}.air-pollution.orange .data__text{color:#7f3b0c}.air-pollution.orange .data__pollutant{color:#7f3b0c}.air-pollution.orange .data__time,.air-pollution.orange .data__source{color:#7f3b0c}.air-pollution.orange .air-pollution__more{background:#7f3b0c;color:#fff}.air-pollution.orange .fa-map-marker{color:#7f3b0c}.air-pollution.orange .air-pollution__changecity ul{border-color:#7f3b0c}.air-pollution.red{background:#ec736f;border-color:#7e1411}.air-pollution.red .air-pollution__info a{color:#7e1411}.air-pollution.red a:hover{color:#7e1411}.air-pollution.red .data__text{color:#7e1411}.air-pollution.red .data__pollutant{color:#7e1411}.air-pollution.red .data__time,.air-pollution.red .data__source{color:#7e1411}.air-pollution.red .air-pollution__more{background:#7e1411;color:#fff}.air-pollution.red .fa-map-marker{color:#7e1411}.air-pollution.red .air-pollution__changecity ul{border-color:#7e1411}.air-pollution.purple{background:#a27cb9;border-color:#543666}.air-pollution.purple .air-pollution__info a{color:#543666}.air-pollution.purple a:hover{color:#543666}.air-pollution.purple .data__text{color:#543666}.air-pollution.purple .data__pollutant{color:#543666}.air-pollution.purple .data__time,.air-pollution.purple .data__source{color:#543666}.air-pollution.purple .air-pollution__more{background:#543666;color:#fff}.air-pollution.purple .fa-map-marker{color:#543666}.air-pollution.purple .air-pollution__changecity ul{border-color:#543666}.air-pollution.darkpurple{background:#a07583;border-color:#2b1e22}.air-pollution.darkpurple .air-pollution__info a{color:#2b1e22}.air-pollution.darkpurple a:hover{color:#2b1e22}.air-pollution.darkpurple .data__text{color:#2b1e22}.air-pollution.darkpurple .data__pollutant{color:#2b1e22}.air-pollution.darkpurple .data__time,.air-pollution.darkpurple .data__source{color:#2b1e22}.air-pollution.darkpurple .air-pollution__more{background:#2b1e22;color:#fff}.air-pollution.darkpurple .fa-map-marker{color:#2b1e22}.air-pollution.darkpurple .air-pollution__changecity ul{border-color:#2b1e22}.air-pollution__info{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-direction:column;align-items:center;text-align:center}.air-pollution__info.fade{opacity:.3}.air-pollution__info h1{font-family:"Roboto",serif}.air-pollution__title{text-align:center;text-transform:uppercase;font-size:12px;font-weight:normal;margin:0}.air-pollution__title a{padding:10px 5px;display:block}.air-pollution__ajax{width:100%}.air-pollution__data{width:100%}.air-pollution__data>a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:space-around}.air-pollution__data .data__img{width:60px}.air-pollution__data .data__img img{width:100%;height:100%}.air-pollution__data .data__aqi{font-size:38px;font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;align-items:center;justify-content:center;width:60px;height:60px}.air-pollution__data .data__pollutant{margin-top:10px;font-size:14px}.air-pollution__data .data__pollutant-main{text-transform:uppercase}.air-pollution__data .data__text{font-size:22px;font-weight:bold;margin:10px}.air-pollution__data .data__time,.air-pollution__data .data__source{font-size:12px;width:100%;position:relative;z-index:10}.air-pollution__data .data__source{margin:5px 0 10px}.air-pollution__data .data__source a{text-decoration:underline}.air-pollution__data.no-data .data__pollutant{margin-bottom:10px}.air-pollution__more{color:#999;background:#e8e8e8;text-align:center;font-size:12px;text-transform:uppercase}.air-pollution__more svg{margin-right:2px}.air-pollution__more a{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;padding:5px 0;width:100%}.air-pollution .air-pollution__info .air-pollution__more a{color:#fff}.air-pollution__changecity{position:relative;background:#fff}.air-pollution__changecity .location{text-transform:uppercase;font-size:12px;font-weight:bold;padding:10px 0;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.air-pollution__changecity .location span{height:26px;text-align:center;margin:0 3px;max-width:105px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:center;align-items:center}.air-pollution__changecity ul{position:absolute;background:#fff;overflow:hidden;top:46px;left:-1px;width:calc(100% + 2px);z-index:1;border-left:1px solid #e5e5e5;border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;box-shadow:0 1px 1px rgba(173,168,168,.1)}.air-pollution__changecity ul:not(.active){display:none}.air-pollution__changecity li{border-top:1px solid #f7f7f7;font-size:12px;text-transform:uppercase}.air-pollution__changecity li:first-child{padding-top:0;margin-bottom:0;border:0}.air-pollution__changecity li a{padding:10px;display:block}.air-pollution__changecity.active svg.sprite-caret-down{transform:translate(0px, -1px) rotate(180deg)}.air-pollution.error{color:#999}.air-pollution.error .air-pollution__info a{color:#999}.air-pollution.error .air-pollution__message{display:block}.air-pollution__message{display:none;color:#999;text-align:center;padding:10px}.air-pollution__message svg{width:28px;height:28px;color:#cecece}.air-pollution__message span{margin-top:10px;display:block;font-size:14px}.air-pollution__table{display:none}.wicon{width:52px;height:52px;display:inline-block;vertical-align:middle;text-indent:-99999px;background-size:contain;background-repeat:no-repeat}.wicon.wsymbol_0013_sleet_showers,.wicon.wsymbol_0029_sleet_showers_night,.wicon.wsymbol_0021_cloudy_with_sleet,.wicon.wsymbol_0037_cloudy_with_sleet_night,.wicon.wsymbol_0021_cloudy_with_sleet,.wicon.wsymbol_0037_cloudy_with_sleet_night,.wicon.wsymbol_0021_cloudy_with_sleet,.wicon.wsymbol_0037_cloudy_with_sleet_night,.wicon.wsymbol_0007_fog,.wicon.wsymbol_0021_cloudy_with_sleet,.wicon.wsymbol_0037_cloudy_with_sleet_night,.wicon.wsymbol_0021_cloudy_with_sleet,.wicon.wsymbol_0037_cloudy_with_sleet_night,.wicon.wsymbol_0006_mist,.wicon.wsymbol_0004_black_low_cloud,.wicon.wsymbol_0004_black_low_cloud,.wicon.wsymbol_0003_white_cloud,.wicon.wsymbol_0004_black_low_cloud{background-image:url("https://www.blic.rs/static/weather/cloudy.svg")}.wicon.wsymbol_0002_sunny_intervals{background-image:url("https://www.blic.rs/static/weather/cloudy-day-3.svg")}.wicon.wsymbol_0008_clear_sky_night{background-image:url("https://www.blic.rs/static/weather/cloudy-night-3.svg")}.wicon.xxx{background-image:url("https://www.blic.rs/static/weather/rainy-1.svg")}.wicon.wsymbol_0016_thundery_showers,.wicon.wsymbol_0032_thundery_showers_night,.wicon.wsymbol_0013_sleet_showers,.wicon.wsymbol_0029_sleet_showers_night,.wicon.wsymbol_0009_light_rain_showers,.wicon.wsymbol_0025_light_rain_showers_night,.wicon.wsymbol_0017_cloudy_with_light_rain,.wicon.wsymbol_0025_light_rain_showers_night,.wicon.wsymbol_0017_cloudy_with_light_rain,.wicon.wsymbol_0033_cloudy_with_light_rain_night,.wicon.wsymbol_0017_cloudy_with_light_rain,.wicon.wsymbol_0033_cloudy_with_light_rain_night,.wicon.wsymbol_0009_light_rain_showers,.wicon.wsymbol_0025_light_rain_showers_night,.wicon.wsymbol_0009_light_rain_showers,.wicon.wsymbol_0025_light_rain_showers_night{background-image:url("https://www.blic.rs/static/weather/rainy-4.svg")}.wicon.wsymbol_0010_heavy_rain_showers,.wicon.wsymbol_0026_heavy_rain_showers_night,.wicon.wsymbol_0021_cloudy_with_sleet,.wicon.wsymbol_0037_cloudy_with_sleet_night,.wicon.wsymbol_0021_cloudy_with_sleet,.wicon.wsymbol_0037_cloudy_with_sleet_night,.wicon.wsymbol_0018_cloudy_with_heavy_rain,.wicon.wsymbol_0034_cloudy_with_heavy_rain_night,.wicon.wsymbol_0010_heavy_rain_showers,.wicon.wsymbol_0026_heavy_rain_showers_night{background-image:url("https://www.blic.rs/static/weather/rainy-5.svg")}.wicon.wsymbol_0024_thunderstorms,.wicon.wsymbol_0040_thunderstorms_night,.wicon.wsymbol_0018_cloudy_with_heavy_rain,.wicon.wsymbol_0034_cloudy_with_heavy_rain_night,.wicon.wsymbol_0018_cloudy_with_heavy_rain,.wicon.wsymbol_0034_cloudy_with_heavy_rain_night,.wicon.wsymbol_0010_heavy_rain_showers,.wicon.wsymbol_0026_heavy_rain_showers_night{background-image:url("https://www.blic.rs/static/weather/rainy-6.svg")}.wicon.xxx{background-image:url("https://www.blic.rs/static/weather/snowy-1.svg")}.wicon.xxx{background-image:url("https://www.blic.rs/static/weather/snowy-2.svg")}.wicon.wsymbol_0016_thundery_showers,.wicon.wsymbol_0032_thundery_showers_night,.wicon.wsymbol_0011_light_snow_showers,.wicon.wsymbol_0027_light_snow_showers_night,.wicon.wsymbol_0011_light_snow_showers,.wicon.wsymbol_0027_light_snow_showers_night,.wicon.wsymbol_0011_light_snow_showers,.wicon.wsymbol_0027_light_snow_showers_night,.wicon.wsymbol_0019_cloudy_with_light_snow,.wicon.wsymbol_0035_cloudy_with_light_snow_night,.wicon.wsymbol_0019_cloudy_with_light_snow,.wicon.wsymbol_0035_cloudy_with_light_snow_night{background-image:url("https://www.blic.rs/static/weather/snowy-4.svg")}.wicon.wsymbol_0013_sleet_showers,.wicon.wsymbol_0029_sleet_showers_night,.wicon.wsymbol_0020_cloudy_with_heavy_snow,.wicon.wsymbol_0036_cloudy_with_heavy_snow_night,.wicon.wsymbol_0020_cloudy_with_heavy_snow,.wicon.wsymbol_0036_cloudy_with_heavy_snow_night,.wicon.wsymbol_0013_sleet_showers,.wicon.wsymbol_0029_sleet_showers_night{background-image:url("https://www.blic.rs/static/weather/snowy-5.svg")}.wicon.wsymbol_0012_heavy_snow_showers,.wicon.wsymbol_0028_heavy_snow_showers_night,.wicon.wsymbol_0021_cloudy_with_sleet,.wicon.wsymbol_0037_cloudy_with_sleet_night,.wicon.wsymbol_0012_heavy_snow_showers,.wicon.wsymbol_0028_heavy_snow_showers_night,.wicon.wsymbol_0021_cloudy_with_sleet,.wicon.wsymbol_0037_cloudy_with_sleet_night,.wicon.wsymbol_0020_cloudy_with_heavy_snow,.wicon.wsymbol_0036_cloudy_with_heavy_snow_night,.wicon.wsymbol_0012_heavy_snow_showers,.wicon.wsymbol_0028_heavy_snow_showers_night,.wicon.wsymbol_0020_cloudy_with_heavy_snow,.wicon.wsymbol_0036_cloudy_with_heavy_snow_night{background-image:url("https://www.blic.rs/static/weather/snowy-6.svg")}.wicon.wsymbol_0001_sunny{background-image:url("https://www.blic.rs/static/weather/day.svg")}.wicon.wsymbol_0008_clear_sky_night{background-image:url("https://www.blic.rs/static/weather/night.svg")}.wicon.wsymbol_0016_thundery_showers,.wicon.wsymbol_0032_thundery_showers_night{background-image:url("https://www.blic.rs/static/weather/thunder.svg")}.big .wicon{width:88px;height:88px;margin:-2px 0}.small .wicon{width:36px;height:36px;margin-top:-4px}.weather__small-widget{padding:10px;margin-bottom:15px;background:#0e6aac;background:linear-gradient(130deg, #0e6aac 0%, #768e9a 50%, #d29660 100%);border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.weather__small-widget a{color:#fff}.weather__small-widget a:hover{text-decoration:none;color:#fff}.weather__small-widget a:hover h3 span{text-decoration:underline}.weather__small-widget a:hover .weather__more{background:rgba(255,255,255,.2705882353)}.weather__small-widget h3{font-family:"Roboto",serif;font-size:20px;font-weight:bold;text-transform:uppercase;text-align:center}.weather__small-widget h3 span{width:100%;display:block}.weather__small-widget ul{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;margin:10px 0}.weather__small-widget ul li{width:50%;text-align:center}.weather__small-widget ul li>span{display:block;font-size:10px;text-transform:uppercase;margin-top:2px}.weather__small-widget ul li div{font-weight:bold;position:relative;left:5px}.weather__small-widget ul li div span{position:relative;top:-4px;font-size:8px;left:-2px;font-weight:normal}.weather__small-widget svg{width:40px;height:40px;fill:#fff;margin:10px 0}.weather__small-widget .weather__temp{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-direction:column;align-items:center}.weather__small-widget .weather__temp>span{padding:0 10px;font-size:12px}.weather__small-widget .weather__temp div{font-weight:bold;font-size:35px;position:relative;left:5px;margin-top:5px}.weather__small-widget .weather__temp div span{position:relative;top:-14px;font-size:12px;left:0;font-weight:normal}.weather__small-widget .weather__more{width:100%;background:rgba(255,255,255,.1411764706);font-size:12px;color:#fff;text-transform:uppercase;padding:5px 0;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center}.service-info{margin:15px 0;background:#fff;padding:10px;border:1px solid rgba(0,0,0,.1)}.service-info img{width:100%}.service-info ul{margin-top:15px}.service-info ul li{margin-bottom:15px}.service-info ul li:last-child{margin-bottom:0}.service-info ul li span{display:block;font-weight:bold;font-size:14px;text-transform:uppercase;text-align:center;margin-top:5px}.exchange__widget .section-title__top{font-family:"Roboto",serif;font-size:20px;font-weight:bold;text-transform:uppercase}.exchange__widget .section-title__top span{padding:8px 15px;border-top:3px solid var(--site-primary-color);background:#fff;display:block}.exchange__convertor{padding:15px}.exchange__convertor select{float:left;width:calc(50% - 25px);padding:5px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border:1px solid #ccc}.exchange__convertor svg{height:24px}.exchange__result{padding:0 15px 15px}.exchange__result span{float:left;width:calc(50% - 25px)}.exchange__result input{padding:5px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border:1px solid #ccc;float:left;width:calc(50% - 25px)}.exchange__convertor,.exchange__result{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;background:#fafafa}.exchange__convertor svg,.exchange__result svg{width:50px;fill:#999}.exchange__list{padding:15px;background:#fff}.exchange__list ul{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-wrap:wrap;justify-content:space-between}.exchange__list li{width:calc(50% - 10px);padding:6px 0;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;font-size:13px}.exchange__list li:before{content:"";display:inline-block;width:16px;height:13px;margin-right:10px;position:relative;top:.5px;background:url("https://www.clip.rs/widget/resources/images/exchangeRateFlags.gif") no-repeat 0 0}.exchange__list li.AUD:before{background-position:0 -16px}.exchange__list li.CAD:before{background-position:0 -32px}.exchange__list li.HRK:before{background-position:0 -96px}.exchange__list li.CHF:before{background-position:0 -48px}.exchange__list li.GBP:before{background-position:0 -64px}.exchange__list li.USD:before{background-position:0 -80px}.exchange__list li.BAM:before{background-position:0 -112px}.exchange__list li span{margin-left:auto}.exchange__widget+.sticky-area{margin-top:15px}.srce-za-decu{font-family:"Inter",sans-serif;font-weight:500;font-size:16px;display:flex;justify-content:space-between;padding:20px;background:#f1f4f9;margin-bottom:20px}.srce-za-decu__left{width:415px}.srce-za-decu__img{padding:10px;margin-bottom:10px;background:#fff;border-radius:8px;display:flex;flex-direction:column;align-items:center}.srce-za-decu__img-logo{margin-bottom:10px;display:flex;align-items:center}.srce-za-decu__img-logo img{width:140px;margin-right:10px}.srce-za-decu__img-logo span{font-weight:700;font-size:18px}.srce-za-decu__img-virtus{width:323px}.srce-za-decu__text{padding:23.5px 20px;background:#fff;border-radius:8px}.srce-za-decu__text li{margin-bottom:20px;display:flex;flex-direction:column}.srce-za-decu__text li:last-child{margin-bottom:0}.srce-za-decu__text div{font-weight:700}.srce-za-decu__text span{margin-top:5px;padding-left:10px;position:relative}.srce-za-decu__text span:before{content:"";width:4px;height:4px;border-radius:50%;background:#000;position:absolute;left:0;top:7px}.srce-za-decu__text span:has(a):before{background:#c00}.srce-za-decu__text span a{color:#c00}.srce-za-decu__right{width:594px}.srce-za-decu__right>div{background:#fff;border-radius:8px;padding:10px 20px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}.srce-za-decu__right>div:last-child{margin-bottom:0}.srce-za-decu__right>div p{color:#727272}.srce-za-decu__desc{position:relative;padding-left:15px}.srce-za-decu__desc:before{content:"";position:absolute;left:0;top:0;width:5px;height:100%;border-radius:20px;background:#cfcfcf}.srce-za-decu__desc strong{display:block}.srce-za-decu__desc>span{font-size:12px;margin-top:5px;color:#727272}.srce-za-decu__no{font-size:24px;font-weight:700;color:rgba(0,0,0,.5019607843)}.srce-za-decu__no span{font-size:16px;font-weight:500}.srce-za-decu__active .srce-za-decu__desc:before{background:#2bbc28}.srce-za-decu__active .srce-za-decu__desc span span{color:#2bbc28}.srce-za-decu__active .srce-za-decu__no{color:#000}.srce-za-decu__right>div.srce-za-decu__red{background:#ed1c24;color:#fff;padding:5.5px 34px;flex-direction:column;align-items:flex-start}.srce-za-decu__right>div.srce-za-decu__red p{margin:9px 0 19px;color:#fff}.srce-za-decu__right>div.srce-za-decu__red a{color:#fff}.srce-za-decu__right>div.srce-za-decu__red li span{margin-top:5px;padding-left:10px;position:relative;display:block}.srce-za-decu__right>div.srce-za-decu__red li span:before{content:"";width:4px;height:4px;border-radius:50%;background:#fff;position:absolute;left:0;top:7px}.srce-za-decu__red-title{font-size:24px}.tradingview-widget-container{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between;height:46px !important}.tw-copyright{font-size:13px;font-family:"Trebuchet MS",Arial,sans-serif;color:#9db2bd;width:90px;margin-left:10px}.tw-copyright a{color:#2196f3}.section__aside .tradingview-widget-container iframe{margin-bottom:0}.tradingview-aside-widget-container{margin-top:15px;margin-bottom:15px}.tradingview-aside-widget-info{font-family:"Trebuchet MS",Arial,sans-serif;font-size:13px;line-height:32px;text-align:center;vertical-align:middle;color:#9db2bd;margin-top:-30px}.news-box--biznis .tradingview-aside-widget-container{margin:0}.news-box--biznis .tradingview-widget-copyright{background:#fff}.news-box--biznis .tradingview-aside-widget-info{color:rgba(255,255,255,.8)}.newsletter{background-size:cover;padding:20px;margin-bottom:15px;height:158px;width:580px}.newsletter img{width:104px}.newsletter .newsletter-form{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:space-between;padding:10px}.newsletter .newsletter-form>div{width:390px}.newsletter label{color:#fff;font-size:18px}.newsletter label span{display:block;margin-top:2px}.newsletter .newsletter-buttons{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:space-between;margin-top:12px}.newsletter input[type=email]{height:32px;line-height:32px;padding:0 20px;border:2px solid #fff;background:#fff;border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px;width:212px;margin-right:10px;font-size:14px;font-style:italic}.newsletter input[type=submit]{height:36px;padding:0 20px;border:2px solid #fff;border-radius:10px;-webkit-border-radius:10px;-moz-border-radius:10px;-ms-border-radius:10px;-o-border-radius:10px;color:#fff;text-transform:uppercase;background:rgba(0,0,0,0);cursor:pointer;font-size:14px}.newsletter input[type=submit]:hover{background-color:#e10000;border-color:#e10000;color:#fff}.popup-newsletter{opacity:0;-webkit-transition:opacity .5s .5s;-o-transition:opacity .5s .5s;transition:opacity .5s .5s;pointer-events:none;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}.popup-newsletter.active{-webkit-transition:opacity .5s;-o-transition:opacity .5s;transition:opacity .5s;opacity:1;z-index:10001;pointer-events:auto;display:block}.newsletter__close{width:30px;height:30px;background:#fff;position:absolute;right:0;top:0;display:flex;align-items:center;justify-content:center;cursor:pointer}.popup-overlay{position:fixed;left:0;top:0;width:100%;height:100%;opacity:0;z-index:10;background-color:rgba(0,0,0,.6);-webkit-transition:opacity .5s .5s;-o-transition:opacity .5s .5s;transition:opacity .5s .5s;pointer-events:none}.popup-overlay.active{-webkit-transition:opacity .5s;-o-transition:opacity .5s;transition:opacity .5s;opacity:1;z-index:10000;pointer-events:auto}.biznis-countdown{padding:20px;margin:15px 0;background-position:center;background-size:cover}.biznis-countdown__content{background:rgba(255,255,255,.8);box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:15px;text-align:center;padding:20px}.biznis-countdown__content div{color:#243427;text-transform:uppercase;font-size:30px;border:1px solid #d0dbc7;border-radius:6px;padding:10px}.biznis-countdown__content p{font-size:14px;font-weight:bold;color:#48644d;margin-top:5px}.biznis-countdown__content img{width:142px;margin:20px auto 10px}.biznis-countdown__content .biznis-countdown__date{font-size:20px;font-weight:bold;color:#48644d;margin:10px 0 2px;display:block}.biznis-countdown__content .biznis-countdown__place{color:#243427}.biznis-countdown__content a{display:block;background:#ffd600;border:1px solid rgba(72,100,77,.25);border-radius:6px;padding:5px;margin-top:25px;color:#374e22}.biznis-countdown__content a:hover{color:#374e22}.live-flag{background:#cc0101;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;display:inline-block;padding:6.5px 5px 5px;height:27px;position:relative;top:1px}.live-flag__container{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;height:17px}.live-flag__dot{width:14px;height:14px;background:#fff;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;margin-right:5px;position:relative;top:-1.5px;animation:blinking;animation-duration:2.5s;animation-iteration-count:infinite}.live-flag__text{color:#fff;text-transform:uppercase;font-family:"Roboto",serif;font-weight:bold;font-size:20px}.live-flag--news-big{top:-2px}.live-flag--story{height:38px;top:-4px;padding:5px}.live-flag--story .live-flag__container{height:28px}.live-flag--story .live-flag__dot{width:20px;height:20px;top:0}.live-flag--story .live-flag__text{font-size:24px;position:relative;top:1px}@keyframes blinking{10%{background:#fff}25%{background:rgba(0,0,0,0)}65%{background:rgba(0,0,0,0)}80%{background:#fff}}.elections{margin:15px auto}.elections__carousel{width:100%;height:100% !important}@media only screen and (min-width: 600px){.elections,.elections__slide{width:1060px !important;height:350px !important;display:block !important;margin-bottom:45px}}@media only screen and (max-width: 600px){.elections,.elections__slide{width:360px !important;height:480px !important;display:block !important;margin-bottom:30px}}.elections__slide{background:#102a75;background:linear-gradient(97deg, #102a75 0, #2247b2 35%, #3b65de 87%);box-shadow:rgba(0,0,0,.06) 0 25px 30px -20px}.elections .navigation{right:50% !important;transform:translateX(50%);bottom:-30px !important}.elections .navigation div{border:1px solid rgba(0,0,0,.2)}.elections__carousel .controls{display:block !important}.elections__carousel .highcharts-legend-navigation{fill:#fff}.elections__slide .elections__text{text-align:center;margin:auto;font-family:Helvetica,Arial,sans-serif}@media only screen and (max-width: 600px){.elections__slide .elections__text{width:80%}}@media only screen and (min-width: 600px){.elections__slide .elections__text{width:50%}}.elections__slide .elections__text p{font-size:2.2em;color:#e0e0e3;fill:#e0e0e3;margin:7px 0 25px}.elections__slide .elections__text p:first-child{font-size:1.2em}.elections__slide .elections__text p strong{font-weight:bold;text-transform:uppercase}.profile{background:#fff;padding:15px;margin-bottom:5px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;flex-direction:column;align-items:center}.profile figure{width:92px}.profile img{object-fit:cover;height:92px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}.profile h1{font-weight:bold;font-size:18px;margin:10px 0 2px;text-align:center}.profile span{font-size:13px;color:rgba(48,48,48,.8117647059)}.profile p{margin-top:15px;text-align:center}.rss{background:#fff;padding:15px 15px 0}.rss h1{font-family:"Merriweather",serif;font-size:38px;font-weight:bold;line-height:1.25em;margin:15px 0}.rss p{font-size:16px;line-height:22px;margin-bottom:15px}.rss__list{margin:40px 0 80px}.rss__list li{margin-bottom:10px;font-weight:bold}.rss__list ul{margin:10px 0 0 30px}.rss__list ul li{font-weight:normal}.tag{padding:12px;background:#fff}.tag__header{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:space-between}.tag__header figure{width:60px}.tag__header img{width:60px;height:60px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;margin-right:10px;object-fit:cover}.tag__header h1{font-family:"Roboto",serif;font-weight:900;font-size:22px;line-height:26px}.tag__header p{font-weight:500;font-size:12px;line-height:14px;color:#626262;margin-top:5px}.tag__header>div{width:calc(100% - 60px - 10px)}.tag__display-name{font-size:22px;font-weight:900;line-height:25.78px;color:#000;padding:10px 12px;background:#fff}.tag__related{padding:12px;margin-bottom:5px;background:#fff}.tag__related h2{font-family:"Roboto",serif;font-size:16px;font-weight:700;line-height:18.75px;color:#000}.tag__related ul{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;justify-content:space-between}.tag__related ul li{width:calc(33.3333333333% - 10px)}.tag__related ul li img{aspect-ratio:4/3;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.tag__related ul li h5{margin:5px;font-family:"Roboto",serif;font-size:16px;font-weight:500;line-height:18.75px}.tag__related ul li h5 a{color:#626262}.tag__scroll{padding:12px;background:#fff;margin-bottom:15px}.tag__scroll h2{font-family:"Roboto",serif;font-size:16px;font-weight:700;line-height:18.75px;color:#000}.tag__scroll ul{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;width:max-content}.tag__scroll ul li{width:90px;margin-right:10px}.tag__scroll ul li img{width:90px;height:90px;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.tag__scroll ul li h5{font-family:"Roboto",serif;font-size:16px;line-height:18.75px;margin-top:10px}.tag__scroll ul li h5 a{color:#000;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;max-height:37px;overflow:hidden}.tag__scroller{overflow-x:scroll;width:calc(100% + 24px);position:relative;left:-12px;padding-left:12px;padding-bottom:10px}.tag__scroller::-webkit-scrollbar{width:3px;background-color:rgba(0,0,0,.04);border-radius:10px}.tag__scroller::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(255,255,255,.36)}.tag__scroller::-webkit-scrollbar-thumb{background-color:var(--site-primary-color);outline:rgba(112,128,144,0) solid 1px;border-radius:10px}.page-info{padding:0 12px 34px;background:#fff}.page-info__content{padding:10px 0;border-top:1px solid #e3e3e3;border-bottom:1px solid #e3e3e3;position:relative;max-height:200px;overflow:hidden}.page-info__content p{font-size:16px;line-height:19px;color:#303030;margin-bottom:20px}.page-info__content p:last-child{margin-bottom:7px}.page-info__content p a{color:#bf0000;text-decoration:underline}.page-info__content p.page-info__title{font-family:"Roboto",serif;font-weight:700;font-size:16px;line-height:19px;color:#000;margin-bottom:10px;display:block}.page-info__content p.page-info__source{color:#626262}.page-info__content p.page-info__source a{color:#626262;text-decoration:none}.page-info__content:before{content:"";background:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.489583) 41.43%, #FFFFFF 100%);width:100%;height:100%;position:absolute}.page-info__content--author{padding-top:12px;border-top:0}.page-info__more{margin-bottom:10px;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;position:relative;top:0}.page-info__more span{background:#c00;border:1px solid #e3e3e3;width:42px;height:42px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:center;position:absolute;left:50%;transform:translateX(-50%);bottom:-21px;cursor:pointer}.page-info__more svg{fill:#fff;transition-delay:300ms;width:20px;height:20px}.page-info__content.opened{max-height:100vh}.page-info__content.opened:before{display:none}.page-info__more .opened svg{transform:rotate(-180deg)}.page-info--short-text .page-info__content{border-bottom:0}.page-info--short-text .page-info__content:before{display:none}.page-info--short-text .page-info__more{display:none}.author{padding:20px 10px;background-color:#b60000;background-repeat:no-repeat;background-size:contain;height:100px;margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;align-items:center}.author img{width:60px;height:60px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;background:#fff;filter:drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));padding:3px;object-fit:cover}.author h1{font-family:"Roboto",serif;font-size:22px;font-weight:900;line-height:25.78px;color:#fff;margin-left:10px}.author+.page-info{margin:-20px 0 20px}.tag+.page-info{margin-bottom:15px}@font-face{font-family:swiper-icons;src:url("data:application/font-woff;charset=utf-8;base64, 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") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px, 0, 0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);height:var(--swiper-navigation-size);margin-top:calc(-1*var(--swiper-navigation-size)/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none !important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:"next"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0, 0, 0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(0.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(0.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(0.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(0.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px, -50%, 0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s infinite linear;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:rgba(0,0,0,0)}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}body.dark-theme .news-box--sportal,body.dark-theme .news-box--zena,body.dark-theme .news-box--kultura,body.dark-theme .news-box--video,body.dark-theme .news-box--grow_up,body.dark-theme .news-box--biznis,body.dark-theme .news-box--color{background:rgba(0,0,0,.75)}body.dark-theme .section__aside .news-box-title--sportal h3 a,body.dark-theme .section__aside .news-box-title--sportal h3 span,body.dark-theme .section__aside .news-box-title--zena h3 a,body.dark-theme .section__aside .news-box-title--zena h3 span{border-color:#000;color:#000}body.dark-theme .news-box--kultura.news-box--color .news-box__header h3,body.dark-theme .news-box__tabs-line,body.dark-theme .highlight--biznis,body.dark-theme .news__carousel-box .swiper-button-prev:hover,body.dark-theme .news__carousel-box .swiper-button-next:hover,body.dark-theme .news-box--zenaPromo-carousel{background:#000}body.dark-theme .search{background:#181818}body.dark-theme .header__menu nav ul>li.sportal,body.dark-theme .header__menu nav ul>li.biznis,body.dark-theme .header__menu nav ul>li.menu-icon--small{background:#232323 !important}body.dark-theme .header--weather .header__top,body.dark-theme .header--weather .header__menu{background:#000}body.dark-theme .header--weather .search button{background:rgba(0,0,0,0)}
        </style>

        <!-- IMPORTANT -->
        
        <!-- IMPORTANT END -->

    </head>
    <body
        
            
        
        data-run-module="local/bodyDesktop.init"
    >
        <!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDP5BZ7"
            height="0"
            width="0"
            style="display:none;visibility:hidden">
    </iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5R6QFX"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        <div class="banner__brandingLeft">
    <div id='Branding_Left' style='min-width: 470px; min-height: 1080px;'>
        <script>
            googletag.cmd.push(function() { googletag.display('Branding_Left'); });
        </script>
    </div>
</div>
        <div class="banner__brandingRight">
    <div id='Branding_Right' style='min-width: 470px; min-height: 1080px;'>
        <script>
            googletag.cmd.push(function() { googletag.display('Branding_Right'); });
        </script>
    </div>
</div>
        
















    
    
    
    











<header id="top" class="header " data-run-module="local/desktop/stickyNav.init">
    <div class="header__top">
        

        <div class="container">

            <div class="header__logo">
                <a href="/">
                    
                        <picture>
                            <source type="image/webp" srcset="//ocdn.eu/blic/blic_navigation_menu_icons/logo_x2.webp">
                            <img src="//ocdn.eu/blic/blic_navigation_menu_icons/logo_x2.png" alt="Blic" width="4" height="3" />
                        </picture>
                    
                </a>
            </div>

            <div class="header__icons">

                <span id="weatherCarousel" class="icon-weather" data-run-module="local/common/weatherByCoordinates.init">
                    <span>
                        <svg class="icon">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-cloud-sun"></use>
                        </svg>
                    </span>
                </span>

                
                <span>
                    <a href="https://www.blic.rs/kursnalista">
                        <svg class="icon">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-euro"></use>
                        </svg>
                    </a>
                </span>
                

                <span id="login-open" class="icon-user not-logged" data-run-module="local/common/ringierConnect/ssoCoordinator.init" data-device-type="desktop">
                    
                    <span id="login-button">
                        <a href="/login">
                            <svg id="logged-out-userIcon" class="icon">
                                <use xlink:href="../../../static/sprite.svg?v=27#sprite-circle-user"></use>
                            </svg>
                        </a>
                    </span>
                    

                    

                </span>

                <!-- search -->
                <form id="search" class="search" method="GET" action="/search">
                    <button>
                        <svg class="icon">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-magnifying-glass"></use>
                        </svg>
                    </button>
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Pretražite Blic "
                        name="q"
                        onfocus="this.placeholder=''"
                        onblur="this.placeholder='Pretražite Blic '"
                    />
                </form>
            </div>
        </div>
    </div>
    <!-- Main menu -->
    <div class="header__menu">
        <div class="container">
            <nav>
                
                <ul>
                    
                        
                        
                            
                                
                                    
                                    
                                    
                                    <li
                                        
                                        data-attribute="index
                                        "
                                        style=""
                                    >
                                        
                                            <a
                                                href="https://www.blic.rs/"
                                                
                                            >
                                                
                                                Naslovna
                                            </a>
                                        
                                    </li>
                                
                            
                        
                    
                        
                        
                            
                                
                                    
                                    
                                    
                                    <li
                                        
                                        data-attribute="
                                        "
                                        
                                    >
                                        
                                            <a
                                                href="https://blictv.blic.rs/"
                                                 target="_blank"
                                            >
                                                
                                                TV
                                            </a>
                                        
                                    </li>
                                
                            
                        
                    
                        
                        
                    
                        
                        
                            
                                
                                    
                                    
                                    
                                    <li
                                        class="active
                                        "
                                        data-attribute="vesti
                                        "
                                        
                                    >
                                        
                                            <a
                                                href="https://www.blic.rs/vesti"
                                                
                                            >
                                                
                                                Vesti
                                            </a>
                                        
                                    </li>
                                
                            
                        
                    
                        
                        
                            
                                
                                    <li class="menu-icon menu-icon--small sportal" >
                                        <a href="https://sportal.blic.rs/" >
                                            <picture>
                                                <source data-srcset="//ocdn.eu/blic/blic_navigation_menu_icons/sportal2.svg" type="image/jpeg">
                                                <img
                                                    class="lazyload"
                                                    src="//ocdn.eu/blic/blic_navigation_menu_icons/sportal2.svg"
                                                    style="width: 65px; height: 18px;"
                                                    width="65"
                                                    height="18"
                                                    alt="Sportal"
                                                >
                                            </picture>
                                        </a>
                                    </li>
                                
                            
                        
                    
                        
                        
                            
                                
                                    
                                    
                                    
                                    <li
                                        
                                        data-attribute="zabava
                                        "
                                        style=""
                                    >
                                        
                                            <a
                                                href="https://www.blic.rs/zabava"
                                                
                                            >
                                                
                                                Zabava
                                            </a>
                                        
                                    </li>
                                
                            
                        
                    
                        
                        
                            
                                
                                    
                                    
                                    
                                    <li
                                        class="
                                        biznis"
                                        data-attribute="
                                        "
                                        style=""
                                    >
                                        
                                            <a
                                                href="https://www.blic.rs/biznis"
                                                
                                            >
                                                
                                                Biznis
                                            </a>
                                        
                                    </li>
                                
                            
                        
                    
                        
                        
                            
                                
                                    
                                    
                                    
                                    <li
                                        
                                        data-attribute="
                                        "
                                        style=""
                                    >
                                        
                                            <a
                                                href="https://zena.blic.rs/"
                                                
                                            >
                                                
                                                Žena
                                            </a>
                                        
                                    </li>
                                
                            
                        
                    
                        
                        
                            
                                
                                    <li class="menu-icon menu-icon--small" style="background: #ED1B24">
                                        <a href="https://www.blic.rs/vesti/beograd" >
                                            <picture>
                                                <source data-srcset="//ocdn.eu/blic/blic_navigation_menu_icons/bg-na-blic2.svg" type="image/jpeg">
                                                <img
                                                    class="lazyload"
                                                    src="//ocdn.eu/blic/blic_navigation_menu_icons/bg-na-blic2.svg"
                                                    style="width: 93px; height: 20px;"
                                                    width="93"
                                                    height="20"
                                                    alt="Beograd na Blic"
                                                >
                                            </picture>
                                        </a>
                                    </li>
                                
                            
                        
                    
                        
                        
                            
                                
                                    
                                    
                                    
                                    <li
                                        
                                        data-attribute="slobodno-vreme
                                        "
                                        style=""
                                    >
                                        
                                            <a
                                                href="https://www.blic.rs/slobodno-vreme"
                                                
                                            >
                                                
                                                Slobodno vreme
                                            </a>
                                        
                                    </li>
                                
                            
                        
                    
                        
                        
                            
                                
                                    <li class="menu-icon" style="background: #3A9277;">
                                        <a href="https://www.lookupekoforum.rs/"  target="_blank">
                                            <picture>
                                                <source data-srcset="//ocdn.eu/blic/blic_navigation_menu_icons/lookup2-desktop.svg" type="image/jpeg">
                                                <img
                                                    class="lazyload"
                                                    src="//ocdn.eu/blic/blic_navigation_menu_icons/lookup2-desktop.svg"
                                                    style="width: 43px; height: 20px;"
                                                    width="43"
                                                    height="20"
                                                    alt="Lookup"
                                                >
                                            </picture>
                                        </a>
                                    </li>
                                
                            
                        
                    
                        
                        
                            
                                
                                    <li class="menu-icon" style="background: #FFFFFF;">
                                        <a href="https://www.blic.rs/najdomacin" >
                                            <picture>
                                                <source data-srcset="//ocdn.eu/blic/blic_navigation_menu_icons/desk - najdomacin.svg" type="image/jpeg">
                                                <img
                                                    class="lazyload"
                                                    src="//ocdn.eu/blic/blic_navigation_menu_icons/desk - najdomacin.svg"
                                                    style="width: 70px; height: 38px;"
                                                    width="70"
                                                    height="38"
                                                    alt="Najdomacin"
                                                >
                                            </picture>
                                        </a>
                                    </li>
                                
                            
                        
                    
                        
                        
                    
                    
                        <li class="header__menu-more">
                            <a href="#">
                                <svg class="icon">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-ellipsis-vertical"></use>
                                </svg>
                            </a>
                        </li>
                    
                </ul>
                
            </nav>
        </div>
        <!-- Dotted menu -->
        
            <div class="container">
                <ul class="header__menu-more-dropdown" data-run-module="local/desktop/menuMore.init">
                    
                        <li>
                            <a href="https://www.blic.rs/srce-za-decu" >❤ za decu</a>
                        </li>
                    
                        <li>
                            <a href="https://www.blic.rs/Auto" >Auto</a>
                        </li>
                    
                        <li>
                            <a href="https://www.blic.rs/it" >IT</a>
                        </li>
                    
                        <li>
                            <a href="https://www.blic.rs/riznica" >Riznica</a>
                        </li>
                    
                        <li>
                            <a href="https://www.blic.rs/galerija" >Galerija</a>
                        </li>
                    
                        <li>
                            <a href="https://www.blic.rs/blicstrip" >Blic strip</a>
                        </li>
                    
                </ul>
            </div>
        
    </div>


    <div class="header__sub-menu">
        <!-- Subnavigation menu -->
        
            <div class="container">
                <nav>
                    <ul>
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li >
                                            <a href="https://www.blic.rs/vesti/politika"  style="">
                                                
                                                Politika
                                            </a>
                                        </li>
                                    
                                
                            
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li >
                                            <a href="https://www.blic.rs/vesti/svet"  style="">
                                                
                                                Svet
                                            </a>
                                        </li>
                                    
                                
                            
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li >
                                            <a href="https://www.blic.rs/vesti/drustvo"  style="">
                                                
                                                Društvo
                                            </a>
                                        </li>
                                    
                                
                            
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li >
                                            <a href="https://www.blic.rs/vesti/hronika"  style="">
                                                
                                                Hronika
                                            </a>
                                        </li>
                                    
                                
                            
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li class="active ">
                                            <a href="https://www.blic.rs/vesti/beograd"  style="">
                                                
                                                Beograd
                                            </a>
                                        </li>
                                    
                                
                            
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li >
                                            <a href="https://www.blic.rs/vesti/srbija"  style="">
                                                
                                                Srbija
                                            </a>
                                        </li>
                                    
                                
                            
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li >
                                            <a href="https://www.blic.rs/vesti/vojvodina"  style="">
                                                
                                                Vojvodina
                                            </a>
                                        </li>
                                    
                                
                            
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li >
                                            <a href="https://www.blic.rs/korona-virus-srbija"  >
                                                
                                                Korona virus Srbija
                                            </a>
                                        </li>
                                    
                                
                            
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li >
                                            <a href="https://www.blic.rs/vesti/republika-srpska"  style="">
                                                
                                                Srpska info
                                            </a>
                                        </li>
                                    
                                
                            
                        
                            
                            
                                
                                    
                                        
                                        
                                        
                                        <li >
                                            <a href="https://www.blic.rs/Auto"  style="">
                                                
                                                Auto
                                            </a>
                                        </li>
                                    
                                
                            
                        
                    </ul>
                </nav>
            </div>
        
    </div>
    
</header>


<script>
    window.addEventListener("message",function(e){"hasX"===e.data&&document.querySelector("#bannerStickyBottom .banner__close").remove(),"hasNotX"===e.data&&document.querySelector("#bannerStickyBottom .banner__close").classList.remove("hidden")},!1);
</script>

        <main>
            
            
            

            

            
                
    <div class="banner banner--top banner--darker" data-placeholder-caption="Oglas">
        <div class="banner--placeholder">
            <div id='Billboard' style='min-width: 300px; min-height: 50px;'>
                <script>
                    googletag.cmd.push(function() { googletag.display('Billboard'); });
                </script>
            </div>
        </div>
    </div>

            

            <section class="section">

                

                <div class="section__content">

                    <div class="section__left">

                        

                        
                            














    





<div id="airPollutionColor" data-color="yellow"></div>


<section id="airPollution" data-color="yellow" class="air-pollution yellow" data-run-module="local/common/airPollution.init">
    
    <div class="air-pollution__info">
        <div class="air-pollution__clouds"></div>
        <span class="air-pollution__title"><a class="air-pollution-page-link" href="/zagadjenje-vazduha?grad=Beograd, Stari Grad&stanica=beograd-stari-grad">
            Zagađenje vazduha</a></span>
        <div class="air-pollution__ajax">


            
                <div class="air-pollution__data">
                    <a class="air-pollution-page-link" href="/zagadjenje-vazduha?grad=Beograd, Stari Grad&stanica=beograd-stari-grad">
                        <span class="data__img">
                            <img src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/img/airpollution/icon-yellow2.svg" alt="" />
                        </span>
                        <span class="data__aqi">54</span>
                        <span class="data__pollutant">Dominantni zagađivač<br/>
                            <span class="data__pollutant-main">PM2.5</span> : 54
                        </span>
                        <div class="data__text">Srednje zagađen</div>

                        <div class="air-pollution__table">
                            <ul>
                                <li><div>
                                    <svg class="icon">
                                        <use xlink:href="../../../static/sprite.svg?v=27#sprite-caret-right"></use>
                                    </svg>
                                    PM2.5 <span>AQI</span></div>  54 </li>
                                <li><div>
                                    <svg class="icon">
                                        <use xlink:href="../../../static/sprite.svg?v=27#sprite-caret-right"></use>
                                    </svg>
                                    PM10 <span>AQI</span></div>  13 </li>
                                <li><div>
                                    <svg class="icon">
                                        <use xlink:href="../../../static/sprite.svg?v=27#sprite-caret-right"></use>
                                    </svg>
                                    NO2 <span>AQI</span></div>  10 </li>
                                <li><div>
                                    <svg class="icon">
                                        <use xlink:href="../../../static/sprite.svg?v=27#sprite-caret-right"></use>
                                    </svg>
                                    SO2 <span>AQI</span></div>  3.7 </li>
                                <li><div>
                                    <svg class="icon">
                                        <use xlink:href="../../../static/sprite.svg?v=27#sprite-caret-right"></use>
                                    </svg>
                                    CO <span>AQI</span></div>  2.3 </li>
                            </ul>
                            
                        </div>
                    </a>
                    <div class="data__time">Ažurirano: 14:00</div>
                    <div class="data__source">
                        <svg class="icon">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-caret-right"></use>
                        </svg>
                        <a href="https://waqi.info/" target="_blank">WAQI</a>
                    </div>
                </div>
                <div class="air-pollution__more">
                    <a class="air-pollution-page-link" href="/zagadjenje-vazduha?grad=Beograd, Stari Grad&stanica=beograd-stari-grad">
                        <svg class="icon">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-caret-right"></use>
                        </svg>
                        Detaljan pregled
                    </a>
                </div>
            


        </div>

    </div>
    <div class="air-pollution__changecity">
        <div class="location">
            <svg class="icon">
                <use xlink:href="../../../static/sprite.svg?v=27#sprite-location-dot"></use>
            </svg>
            <span>Beograd, Stari Grad</span>
            <svg class="icon sprite-caret-down">
                <use xlink:href="../../../static/sprite.svg?v=27#sprite-caret-down"></use>
            </svg>
        </div>

        <ul>
            <li><a href="/zagadjenje-vazduha" data-city="beograd-stari-grad">Beograd, Stari Grad</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="beograd-novi-beograd">Beograd, Novi Beograd</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="beograd-mostar">Beograd, Mostar</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="beograd-zeleno-brdo">Beograd, Zeleno Brdo</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="novi-sad-liman">Novi Sad, Liman</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="novi-sad-rumenacka">Novi Sad, Rumenačka</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="novi-sad-sangaj">Novi Sad, Šangaj</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="obrenovac-centar">Obrenovac, Centar</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="kosjeric">Kosjerić</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="beocin-centar">Beočin, Centar</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="pancevo-starcevo">Pančevo Starčevo</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="pancevo-vatrogasni-dom">Pančevo, Vatrogasni dom</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="pancevo-vojlovica">Pančevo, Vojlovica</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="pancevo-cara-dusana">Pančevo, Cara Dušana</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="subotica">Subotica</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="sombor">Sombor</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="smederevo-centar">Smederevo, Centar</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="smederevo-carina">Smederevo, Carina</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="valjevo">Valjevo</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="nis-izjs">Niš, IZJZ</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="nis-os-sveti-sava">Niš O.š. Sveti Sava</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="popovac">Popovac</a></li>
            <li><a href="/zagadjenje-vazduha" data-city="bor-gradski-park">Bor Gradski park</a></li>
        </ul>
    </div>
</section>

                            

<section class="weather__small-widget">
    <a href="https://www.blic.rs/vremenska-prognoza/beograd-srbija">
        <h3 class="section-title__top"><span>Beograd</span></h3>
        <div class="weather__temp">
            <div>1<span>°C</span></div>

            

<svg class="icon">
    <use xlink:href="../../../static/spriteWeather.svg?v=3#sprite-wsymbol_0011_light_snow_showers"></use>
</svg>

            <span>Mestimično slab sneg</span>
        </div>

        
            
                <ul>
                    <li>
                        <div>10 <span>°C</span></div>
                        <span>max</span>
                    </li>
                    <li>
                        <div>-0 <span>°C</span></div>
                        <span>min</span>
                    </li>
                </ul>
            
        
            
        
            
        
            
        
            
        
        <div class="weather__more">Detaljan pregled</div>
    </a>
</section>

                            <div class="service-info">
                                <img src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/img/widgets/si-logo.webp" alt="Servisne informacije" />
                                <ul>
                                    <li>
                                        <a href="https://www.blic.rs/vesti/beograd/dezurne-bolnice-dezurne-zdravstvene-ustanove-dezurne-decje-bolnice/swppdpg">
                                            <img src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/img/widgets/si-hospital.webp" alt="Servisne informacije" />
                                            <span>Dežurne bolnice i ostale zdravstvene ustanove</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blic.rs/vesti/beograd/gsp-izmene-izmene-u-saobracaju/m2qpdw6">
                                            <img src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/img/widgets/si-bus.webp" alt="Servisne informacije" />
                                            <span>Izmene u saobraćaju i linija GSP</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.blic.rs/vesti/beograd/iskljucenja-struje-iskljucenja-vode-beograd/df50n2p">
                                            <img src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/img/widgets/si-whe.webp" alt="Servisne informacije" />
                                            <span>Današnja isključenja struje, vode i grejanja</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        
                        
                        
                            


<section class="news-box">
    
</section>
                        

                        

                        

                    </div>

                    <div class="section__right">

                        

                        



                        

                        

                        

                        
                            

<section class="news-box" data-run-module="local/common/removeDuplicateArticle.init">
    <div class="swiper-container news__carousel-top">
        <div class="swiper-wrapper">
            
        </div>
        <div class="swiper-tabs"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div><!-- // end carousel -->
</section>

<script>
    let articleUuidToRemove = [];
    
</script>
                        

                        

                        


<section class="news-box">
    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="20dd074f-03e4-42f5-9490-34a0e8d503ca">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/neuobicajena-pojava-danas-u-srbiji-iz-sata-u-sat-temperatura-drasticno-pada-hladni/5sl176r">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/N9Ok9kpTURBXy80NTZiZjJmOGQwYmZjM2JkZTA5MzM5YzJiYmI0OWEzYS5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/EI8k9kpTURBXy80NTZiZjJmOGQwYmZjM2JkZTA5MzM5YzJiYmI0OWEzYS5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/neuobicajena-pojava-danas-u-srbiji-iz-sata-u-sat-temperatura-drasticno-pada-hladni/5sl176r">
                            
                            U SOMBORU 0 STEPENI, U LESKOVCU 19! Hladni talas podelio Srbiju na dva dela, temperatura IZ SATA U SAT DRASTIČNO PADA
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-19T14:53:59+01:00">
                            pre 1 sat
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/neuobicajena-pojava-danas-u-srbiji-iz-sata-u-sat-temperatura-drasticno-pada-hladni/5sl176r?strana=komentari">4
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="fe543df5-1eb6-4f19-b97e-aeb8e17d9d15">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/plivanje-za-casni-krst-u-beogradu-na-adi-ciganliji-prvi-doplivao-pripadnik/t0lkwms">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/moUk9kpTURBXy9jYTRiNTM3YjBlMjY2ODZkZDIwNWZkYTc3ZjYyM2RhYi5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/zFek9kpTURBXy9jYTRiNTM3YjBlMjY2ODZkZDIwNWZkYTc3ZjYyM2RhYi5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/plivanje-za-casni-krst-u-beogradu-na-adi-ciganliji-prvi-doplivao-pripadnik/t0lkwms">
                            
                            VIJORE SE SRPSKE ZASTAVE, GORE BAKLJE Plivanje za Časni krst širom Beograda, pripadnik Žandarmerije prvi na Adi, u Zemunu ogroman broj plivača (FOTO, VIDEO)
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-19T14:22:52+01:00">
                            pre 2 sata
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/plivanje-za-casni-krst-u-beogradu-na-adi-ciganliji-prvi-doplivao-pripadnik/t0lkwms?strana=komentari">24
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="f5c5d01d-ee4f-48ae-b2bb-bebdc64a82ef">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/slavica-djukic-dejanovic-o-dosijeima-ucenika-detaljno-objasnila-sta-ce-sve-u-tim/bdp8jc5">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/8iPk9kpTURBXy84NTJkMWVhZTg5NmU0NzkyNzZiZmRkMGIxNTVjNjgzYy5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/ATXk9kpTURBXy84NTJkMWVhZTg5NmU0NzkyNzZiZmRkMGIxNTVjNjgzYy5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Slavica Đukić Dejanović"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/slavica-djukic-dejanovic-o-dosijeima-ucenika-detaljno-objasnila-sta-ce-sve-u-tim/bdp8jc5">
                            
                            &quot;Ne sviđa mi se da to tako zovu&quot;: Slavica Đukić Dejanović o &quot;DOSIJEIMA&quot; ĐAKA, detaljno objasnila šta će sve u tim izveštajima pisati razredne starešine i koji je smisao
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-19T12:40:33+01:00">
                            pre 3 sata
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/slavica-djukic-dejanovic-o-dosijeima-ucenika-detaljno-objasnila-sta-ce-sve-u-tim/bdp8jc5?strana=komentari">2
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
            <div class="banner banner--in-feed" data-placeholder-caption="Oglas">
    <div class="banner--placeholder">
        <div id='InFeed_1' style='min-width: 580px; min-height: 170px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('InFeed_1'); });
            </script>
        </div>
    </div>
</div>
        
        
        
        
        

        

        
            <article class="news" data-article-uuid="3191c859-e02b-4529-90fb-9fca67a83c02">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/patrijarh-porfirije-sluzio-liturgiju-u-hramu-svetog-save-spc-proslavlja-bogojavljanje/lg38g1c">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/AE0k9kpTURBXy80MGM2ZTUyYzgxMmQ3ZGZlMDMxYzJjMjI4MTFjNDBjNC5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/L9pk9kpTURBXy80MGM2ZTUyYzgxMmQ3ZGZlMDMxYzJjMjI4MTFjNDBjNC5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/patrijarh-porfirije-sluzio-liturgiju-u-hramu-svetog-save-spc-proslavlja-bogojavljanje/lg38g1c">
                            
                            Patrijarh Porfirije služio liturgiju u Hramu Svetog Save, SPC proslavlja Bogojavljanje
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-19T12:04:59+01:00">
                            pre 4 sata
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/patrijarh-porfirije-sluzio-liturgiju-u-hramu-svetog-save-spc-proslavlja-bogojavljanje/lg38g1c?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="6e9891ea-4679-4e2b-b629-39b65fc89d1e">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/najnovije-upozorenje-rhmz-neuobicajena-pojava-danas-u-celoj-srbiji-bice-i-snega-a/zf54d6w">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/5GWk9kqTURBXy8zZDE5MzQzYWFmMjMyZmJlOWFiZWNkMWMwNjY4OTg4ZC5qcGVnkZMFzJbMlt4AAaEwBQ">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/meQk9kqTURBXy8zZDE5MzQzYWFmMjMyZmJlOWFiZWNkMWMwNjY4OTg4ZC5qcGVnkZMFzJbMlt4AAaEwAQ"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/najnovije-upozorenje-rhmz-neuobicajena-pojava-danas-u-celoj-srbiji-bice-i-snega-a/zf54d6w">
                            
                            NAJNOVIJI ALARM RHMZ Neuobičajena pojava danas u celoj Srbiji, biće i snega, a onda temperatura pada na ispod -10!
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-19T10:51:19+01:00">
                            pre 5 sati
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/najnovije-upozorenje-rhmz-neuobicajena-pojava-danas-u-celoj-srbiji-bice-i-snega-a/zf54d6w?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        
            


<section class="news-box news-box--video-carousel" data-run-module="local/common/googleAnalyticsEvents/videoBoxEvent.init">
    <section class="news-box__header">
        <span>
            <a href="https://www.clip.rs" target="_blank">
                <svg class="icon">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-video"></use>
                </svg>
                Video
            </a>
        </span>
    </section>
    <div class="news-box__inner">
        <div class="swiper-container news__carousel-box">
            <div class="swiper-wrapper">
                
                    
                    
                    
                    
                    
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img video-clip-article-event" data-article-title="Najbolji recept za SLAVSKI KOLAČ: Ovo je najbrži i najlepši način pripreme, testo je meko, a ukrasi spektakularni!">
                                    <a href="https://zena.blic.rs/tradicija-i-obicaji/slavski-kolac-recept-najbolji-nacin-da-ga-umesite/pd16f3h" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/mbqk9kuTURBXy8zYjJmMmZiYy0xOTA3LTQzYzItOGE1NS1lY2QyZThhNDUzMDkuanBlZ5GTBc0CqM0Bf94AAaEwBQ">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/tjyktkuTURBXy8zYjJmMmZiYy0xOTA3LTQzYzItOGE1NS1lY2QyZThhNDUzMDkuanBlZ5GTBc0CqM0Bfw"
                                                     alt="Najbolji recept za SLAVSKI KOLAČ: Ovo je najbrži i najlepši način pripreme, testo je meko, a ukrasi spektakularni!"
                                                />
                                            </picture>
                                            <span class="news__icon">
                                                <svg class="icon">
                                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-video"></use>
                                                </svg>
                                            </span>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span class="video-clip-article-event" data-article-title="Najbolji recept za SLAVSKI KOLAČ: Ovo je najbrži i najlepši način pripreme, testo je meko, a ukrasi spektakularni!">
                                        <a href="https://zena.blic.rs/tradicija-i-obicaji/slavski-kolac-recept-najbolji-nacin-da-ga-umesite/pd16f3h" target="_blank">Najbolji recept za SLAVSKI KOLAČ: Ovo je najbrži i najlepši način pripreme, testo je meko, a ukrasi spektakularni!</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                
                    
                    
                    
                    
                    
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img video-clip-article-event" data-article-title="ISPLIVAO VIDEO KOJI SLAMA SRCA Ovo je poslednji snimak Merilin Monro koji pokazuje SAV OČAJ slavne lepotice - neprepoznatljiva je">
                                    <a href="https://zena.blic.rs/puls-poznatih/poslednji-snimak-merilin-monro-koji-je-ljudima-slomio-srce-sav-ocaj-slavne-lepotice/vv1gm3j" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/k74k9kuTURBXy9lYmE1YjJjMy1iZjRkLTQxZjgtYjgyMC1mNDE4MmEzMWYwZDUuanBlZ5GTBc0CqM0Bf94AAaEwBQ">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/9oFktkuTURBXy9lYmE1YjJjMy1iZjRkLTQxZjgtYjgyMC1mNDE4MmEzMWYwZDUuanBlZ5GTBc0CqM0Bfw"
                                                     alt="ISPLIVAO VIDEO KOJI SLAMA SRCA Ovo je poslednji snimak Merilin Monro koji pokazuje SAV OČAJ slavne lepotice - neprepoznatljiva je"
                                                />
                                            </picture>
                                            <span class="news__icon">
                                                <svg class="icon">
                                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-video"></use>
                                                </svg>
                                            </span>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span class="video-clip-article-event" data-article-title="ISPLIVAO VIDEO KOJI SLAMA SRCA Ovo je poslednji snimak Merilin Monro koji pokazuje SAV OČAJ slavne lepotice - neprepoznatljiva je">
                                        <a href="https://zena.blic.rs/puls-poznatih/poslednji-snimak-merilin-monro-koji-je-ljudima-slomio-srce-sav-ocaj-slavne-lepotice/vv1gm3j" target="_blank">ISPLIVAO VIDEO KOJI SLAMA SRCA Ovo je poslednji snimak Merilin Monro koji pokazuje SAV OČAJ slavne lepotice - neprepoznatljiva je</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                
                    
                    
                    
                    
                    
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img video-clip-article-event" data-article-title="Triler koji Zvezda nije preživela: Poraz i šamar Duška Ivanovića &quot;svojima&quot; može mnogo da boli">
                                    <a href="https://sportal.blic.rs/video/crvena-zvezda-izgubila-od-baskonije-u-triler-zavrsnici/2024011908020105470" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/-jFk9kuTURBXy9hMGYyNjY1NS04ZjgyLTQyY2QtOWVkZi0yMDRkYjVlOTc5MzQuanBlZ5GTBc0CqM0Bf94AAaEwBQ">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/H9NktkuTURBXy9hMGYyNjY1NS04ZjgyLTQyY2QtOWVkZi0yMDRkYjVlOTc5MzQuanBlZ5GTBc0CqM0Bfw"
                                                     alt="Triler koji Zvezda nije preživela: Poraz i šamar Duška Ivanovića &quot;svojima&quot; može mnogo da boli"
                                                />
                                            </picture>
                                            <span class="news__icon">
                                                <svg class="icon">
                                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-video"></use>
                                                </svg>
                                            </span>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span class="video-clip-article-event" data-article-title="Triler koji Zvezda nije preživela: Poraz i šamar Duška Ivanovića &quot;svojima&quot; može mnogo da boli">
                                        <a href="https://sportal.blic.rs/video/crvena-zvezda-izgubila-od-baskonije-u-triler-zavrsnici/2024011908020105470" target="_blank">Triler koji Zvezda nije preživela: Poraz i šamar Duška Ivanovića &quot;svojima&quot; može mnogo da boli</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                
                    
                    
                    
                    
                    
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img video-clip-article-event" data-article-title="  &quot;Najvažnije je da Nikola zna da ga je Deki voleo!&quot; Strašna izjava Majka Melouna o Milojeviću: Na njemu je da produži njegovo nasleđe ">
                                    <a href="https://sportal.blic.rs/video/najvaznije-je-da-nikola-zna-da-ga-je-deki-voleo-strasna-izjava-majka-melouna-o-milojevicu-na-njemu-je-da-produzi-njegovo-nasledje/2024011822142625169" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/s93k9kuTURBXy9kYTAyMGFlMy1lNDgwLTQ3NzQtOTk3Ni1lY2MwZjk2MWJmY2MuanBlZ5GTBc0CqM0Bf94AAaEwBQ">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/jrJktkuTURBXy9kYTAyMGFlMy1lNDgwLTQ3NzQtOTk3Ni1lY2MwZjk2MWJmY2MuanBlZ5GTBc0CqM0Bfw"
                                                     alt="  &quot;Najvažnije je da Nikola zna da ga je Deki voleo!&quot; Strašna izjava Majka Melouna o Milojeviću: Na njemu je da produži njegovo nasleđe "
                                                />
                                            </picture>
                                            <span class="news__icon">
                                                <svg class="icon">
                                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-video"></use>
                                                </svg>
                                            </span>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span class="video-clip-article-event" data-article-title="  &quot;Najvažnije je da Nikola zna da ga je Deki voleo!&quot; Strašna izjava Majka Melouna o Milojeviću: Na njemu je da produži njegovo nasleđe ">
                                        <a href="https://sportal.blic.rs/video/najvaznije-je-da-nikola-zna-da-ga-je-deki-voleo-strasna-izjava-majka-melouna-o-milojevicu-na-njemu-je-da-produzi-njegovo-nasledje/2024011822142625169" target="_blank">  &quot;Najvažnije je da Nikola zna da ga je Deki voleo!&quot; Strašna izjava Majka Melouna o Milojeviću: Na njemu je da produži njegovo nasleđe </a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                
                    
                    
                    
                    
                    
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img video-clip-article-event" data-article-title="Žena udomila malog, preslatkog psa, pa ZINULA OD ČUDA kad je nakon nekoliko meseci POSTAO PRAVA ZVER">
                                    <a href="https://zena.blic.rs/ljubimci/mali-udomljeni-pas-postao-zver-vlasnica-zinula-od-cuda-koliko-je-porastao/c5pxzj1" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/L1-k9kuTURBXy9lMTFkOWRkZS00NjBjLTRkZjktOGQ3MS03MmM2ZTQ2YjY0NjEuanBlZ5GTBc0CqM0Bf94AAaEwBQ">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/xJVktkuTURBXy9lMTFkOWRkZS00NjBjLTRkZjktOGQ3MS03MmM2ZTQ2YjY0NjEuanBlZ5GTBc0CqM0Bfw"
                                                     alt="Žena udomila malog, preslatkog psa, pa ZINULA OD ČUDA kad je nakon nekoliko meseci POSTAO PRAVA ZVER"
                                                />
                                            </picture>
                                            <span class="news__icon">
                                                <svg class="icon">
                                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-video"></use>
                                                </svg>
                                            </span>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span class="video-clip-article-event" data-article-title="Žena udomila malog, preslatkog psa, pa ZINULA OD ČUDA kad je nakon nekoliko meseci POSTAO PRAVA ZVER">
                                        <a href="https://zena.blic.rs/ljubimci/mali-udomljeni-pas-postao-zver-vlasnica-zinula-od-cuda-koliko-je-porastao/c5pxzj1" target="_blank">Žena udomila malog, preslatkog psa, pa ZINULA OD ČUDA kad je nakon nekoliko meseci POSTAO PRAVA ZVER</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div><!-- // end carousel -->
    </div>
</section>

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="2c0597f7-d8d1-42ac-89b5-32b41a64a829">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/hitna-pomoc-porodila-zenu-u-rakovici-stigao-je-poziv-sa-terena-evo-kako-su-mama-i/9sl6mmh">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/gFbk9kpTURBXy8xZWY5YjIyY2NiZDg5ZTBkODgxYzcyZTkwNWIwYTAzNC5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/Wsvk9kpTURBXy8xZWY5YjIyY2NiZDg5ZTBkODgxYzcyZTkwNWIwYTAzNC5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Ilustracija"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/hitna-pomoc-porodila-zenu-u-rakovici-stigao-je-poziv-sa-terena-evo-kako-su-mama-i/9sl6mmh">
                            
                            EKIPA HITNE POMOĆI PORODILA MAJKU U RAKOVICI Stigao poziv sa terena, ekipe hitno reagovale!
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-19T10:01:22+01:00">
                            pre 6 sati
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/hitna-pomoc-porodila-zenu-u-rakovici-stigao-je-poziv-sa-terena-evo-kako-su-mama-i/9sl6mmh?strana=komentari">1
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="2f04d0c7-707d-411d-8c92-a262b65d393c">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/svi-koji-bi-da-plivaju-za-casni-krst-prethodno-da-obave-pregled/6wn555f">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/UD7k9kpTURBXy8yMDZkODI5ZmE1NDZlN2EzZGZkNDMyNzZiZjdlNTM1Ny5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/iQOk9kpTURBXy8yMDZkODI5ZmE1NDZlN2EzZGZkNDMyNzZiZjdlNTM1Ny5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/svi-koji-bi-da-plivaju-za-casni-krst-prethodno-da-obave-pregled/6wn555f">
                            
                            UPOZORENJE KARDIOLOGA Svi koji bi da plivaju za Časni krst prethodno da obave pregled
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-19T09:42:34+01:00">
                            pre 6 sati
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/svi-koji-bi-da-plivaju-za-casni-krst-prethodno-da-obave-pregled/6wn555f?strana=komentari">1
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
            <div class="banner banner--in-feed" data-placeholder-caption="Oglas">
    <div class="banner--placeholder">
        <div id='InFeed_2' style='min-width: 580px; min-height: 170px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('InFeed_2'); });
            </script>
        </div>
    </div>
</div>
        
        
        
        

        

        
            <article class="news" data-article-uuid="3dc93fbf-32fe-4407-bedd-0d73f27f34f6">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/u-pozaru-na-dorcolu-povredena-dva-muskarca/5s50np8">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/PB3k9kpTURBXy9hOTRhZjUxNmE3YWVmZGYwNzY4MzY1ZTk0YTkxMDJlYS5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/15Yk9kpTURBXy9hOTRhZjUxNmE3YWVmZGYwNzY4MzY1ZTk0YTkxMDJlYS5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Ilustracija"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/u-pozaru-na-dorcolu-povredena-dva-muskarca/5s50np8">
                            
                            IZBIO POŽAR NA DORĆOLU Povređena dva muškarca
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-19T06:58:21+01:00">
                            pre 9 sati
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/u-pozaru-na-dorcolu-povredena-dva-muskarca/5s50np8?strana=komentari">2
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="be186906-a813-418a-a225-118fc7c744b9">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/saobracajna-nesreca-kod-brankovog-mosta-sudarili-se-automobil-i-autobus/smzl337">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/Pr-k9kpTURBXy83NGQ3MWYyY2ViNjczNjllZGYyNDQyYWRhNzY1MWVhMy5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/vqbk9kpTURBXy83NGQ3MWYyY2ViNjczNjllZGYyNDQyYWRhNzY1MWVhMy5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Ilustracije"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/saobracajna-nesreca-kod-brankovog-mosta-sudarili-se-automobil-i-autobus/smzl337">
                            
                            SUDAR AUTOMOBILA I AUTOBUSA Teška nesreća ispod Brankovog mosta: Vozilo u potpunosti smrskano, srča rasuta po putu (VIDEO)
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T23:36:23+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/saobracajna-nesreca-kod-brankovog-mosta-sudarili-se-automobil-i-autobus/smzl337?strana=komentari">1
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="cb03af29-db6f-44eb-bf27-d93212b3c656">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/pozar-u-ugrinovackoj-ulici-u-zemunu/7tefe6m">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/CA5k9kpTURBXy9lNzVlZWNiNTRmMGU4ZTY0NWM2MTY1NzQ1NjgzYTliYy5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/M6qk9kpTURBXy9lNzVlZWNiNTRmMGU4ZTY0NWM2MTY1NzQ1NjgzYTliYy5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="ilustracija"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/pozar-u-ugrinovackoj-ulici-u-zemunu/7tefe6m">
                            
                            VELIKI POŽAR U ZEMUNU 
Zapalio se pelet u kotlarnici: Oblak dima se nadvio nad naseljem, vatrogasci se bore s vatrom (VIDEO)
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T21:03:57+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/pozar-u-ugrinovackoj-ulici-u-zemunu/7tefe6m?strana=komentari">2
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        
            </section>
            </div>
            <div class="aklamator-wrapper--space-vertical">
                <!-- Aklamator -->
<div id="aklaPBlSrpD" class="aklawidgets" style="margin-bottom: 20px;"></div>
            </div>
            <div class="aklamator-wrapper--space-vertical">
                <!-- Aklamator -->
<div id="aklaeJgfdBQ" class="aklawidgets" style="margin-bottom: 20px;"></div>
            </div>
            <div class="aklamator-wrapper--space-vertical">
                <!-- Aklamator -->
<div id="aklaGwoT6zh" class="aklawidgets" style="margin-bottom: 20px;"></div>
            </div>
            

            <div class="section__right">
            <section class="news-box">
        

        
            <article class="news" data-article-uuid="c6f73a70-6ded-44ac-9caf-9b82f70787f8">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/uhapsena-beogradanka-zbog-proganjanja/nfqrjve">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/KZxk9kpTURBXy9jOGNmYTc0M2FhM2RlNGVlNWJiMjc5NWJmOGYwYmExYi5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/3kek9kpTURBXy9jOGNmYTc0M2FhM2RlNGVlNWJiMjc5NWJmOGYwYmExYi5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Ilustracija"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/uhapsena-beogradanka-zbog-proganjanja/nfqrjve">
                            
                            BEOGRAĐANKA SEDAM MESECI PROGANJALA DEVOJKU Okrivila je da ju je posvađala s dečkom: Evo šta je rekla na saslušanju
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T20:13:31+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/uhapsena-beogradanka-zbog-proganjanja/nfqrjve?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
            <div class="banner banner--in-feed" data-placeholder-caption="Oglas">
    <div class="banner--placeholder">
        <div id='InFeed_3' style='min-width: 580px; min-height: 170px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('InFeed_3'); });
            </script>
        </div>
    </div>
</div>
        
        
        

        

        
            <article class="news" data-article-uuid="b31f4a21-e806-4697-9def-56a343d4379c">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/saobracajna-nesreca-na-plavom-mostu-sudarila-se-dva-automobila-jedan-zavrsio-na/29e7bnk">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/r6Ck9kpTURBXy9iZTZkNWVlNThhNDVmOWFiZTZmYmNhYWQ5MzE2ZTc2ZS5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/yCJk9kpTURBXy9iZTZkNWVlNThhNDVmOWFiZTZmYmNhYWQ5MzE2ZTc2ZS5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Plavi most"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/saobracajna-nesreca-na-plavom-mostu-sudarila-se-dva-automobila-jedan-zavrsio-na/29e7bnk">
                            
                            AUTO ZAVRŠIO NA BANKINI, STAKLO RASUTO SVUDA PO PUTU Nesreća na Plavom mostu: Sudarila se dva automobila, saobraćaj otežan (FOTO)
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T18:16:03+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/saobracajna-nesreca-na-plavom-mostu-sudarila-se-dva-automobila-jedan-zavrsio-na/29e7bnk?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="76a69b95-e912-4bcc-ac73-1da694e02bd7">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/potonuo-jos-jedan-splav-na-licu-mesta-ronioci-dizu-ga-i-uz-pomoc-krana/cs15dth">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/5y3k9kpTURBXy9hZTVjOTcxNDVhZWFhOWZmZDFmYjM0NmMyYTYxYmI4ZC5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/J0Qk9kpTURBXy9hZTVjOTcxNDVhZWFhOWZmZDFmYjM0NmMyYTYxYmI4ZC5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/potonuo-jos-jedan-splav-na-licu-mesta-ronioci-dizu-ga-i-uz-pomoc-krana/cs15dth">
                            
                            POTONUO JOŠ JEDAN SPLAV Na licu mesta ronioci, dižu ga i uz pomoć krana: Skoro je ceo u vodi, mostić prepolovljen (FOTO, VIDEO)
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T17:09:02+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/potonuo-jos-jedan-splav-na-licu-mesta-ronioci-dizu-ga-i-uz-pomoc-krana/cs15dth?strana=komentari">3
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="5505399e-0def-4390-a93e-36b964fdba96">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/slavica-djukic-dejanovic-o-direktorima-ribnikara-i-memorijalnom-centru/eh1nefd">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/Wg2k9kpTURBXy81MjY3OGQ5Nzg2MzJhMTFjODhiZjZhZDQ0OTk3NmU5MC5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/_gck9kpTURBXy81MjY3OGQ5Nzg2MzJhMTFjODhiZjZhZDQ0OTk3NmU5MC5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/slavica-djukic-dejanovic-o-direktorima-ribnikara-i-memorijalnom-centru/eh1nefd">
                            
                            Slavica Đukić Dejanović o direktorima &quot;Ribnikara&quot; i memorijalnom centru: &quot;Razgovaraćemo o kandidatima, a centar će imati za cilj da prenese VAŽNU PORUKU&quot;
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T16:22:35+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/slavica-djukic-dejanovic-o-direktorima-ribnikara-i-memorijalnom-centru/eh1nefd?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="4858bf45-0bed-4061-abac-59b1895253e4">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/da-li-ste-se-i-vi-nocas-probudili-izmedu-3-i-4-niste-jedini-beogradani-nocas-masovno/7p2dnw3">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/S2Gk9kpTURBXy84MjMzZjA0MzQwYzNlYTU3YTQxMjUwNjI3YThkZWIxOC5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/cZpk9kpTURBXy84MjMzZjA0MzQwYzNlYTU3YTQxMjUwNjI3YThkZWIxOC5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/da-li-ste-se-i-vi-nocas-probudili-izmedu-3-i-4-niste-jedini-beogradani-nocas-masovno/7p2dnw3">
                            
                            Da li ste se i vi noćas probudili između 3 i 4? Niste jedini! Beograđani noćas masovno nisu mogli da spavaju, ovo je razlog
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T14:48:58+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/da-li-ste-se-i-vi-nocas-probudili-izmedu-3-i-4-niste-jedini-beogradani-nocas-masovno/7p2dnw3?strana=komentari">7
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
            <div class="banner banner--in-feed" data-placeholder-caption="Oglas">
    <div class="banner--placeholder">
        <div id='InFeed_4' style='min-width: 580px; min-height: 170px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('InFeed_4'); });
            </script>
        </div>
    </div>
</div>
        
        

        

        
            <article class="news" data-article-uuid="ee347c42-6ef9-4dfc-be7e-7bc486e8c929">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/ta-linija-511-je-neka-vrsta-prokletstva-jutros-se-autobus-ponovo-zapalio-nema-dana-da/c6nr3tk">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/Zgfk9kpTURBXy84ZDhiNGY2MDZmYzYzOTU3OWZiMzkyYWQzMWE5MmVkZS5wbmeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/9Pnk9kpTURBXy84ZDhiNGY2MDZmYzYzOTU3OWZiMzkyYWQzMWE5MmVkZS5wbmeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/ta-linija-511-je-neka-vrsta-prokletstva-jutros-se-autobus-ponovo-zapalio-nema-dana-da/c6nr3tk">
                            
                            &quot;TA 511 JE NEKA VRSTA PROKLETSTVA&quot; Novi požar na ukletoj liniji, nema dana da se nešto ne desi - od kašnjenja, najrazličitijih kvarova do opasnih situacija (FOTO, VIDEO)
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T13:32:45+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/ta-linija-511-je-neka-vrsta-prokletstva-jutros-se-autobus-ponovo-zapalio-nema-dana-da/c6nr3tk?strana=komentari">10
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="33f86a8e-63e3-4fba-beae-e57b9d77dcec">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/slavica-djukic-dejanovic-o-novim-obavezama-razrednih-staresina-pratice-i-mentalni/pjp40j5">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/_Jfk9kqTURBXy84ZmI4MDUxMTA2ZDY0ZWJiZDk5NGVkMWJjNTE4MzkyNC5qcGVnkZMFzJbMlt4AAaEwBQ">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/Fq1k9kqTURBXy84ZmI4MDUxMTA2ZDY0ZWJiZDk5NGVkMWJjNTE4MzkyNC5qcGVnkZMFzJbMlt4AAaEwAQ"
                                         class="lazyload"
                                         alt="Slavica Đukić Dejanović"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/slavica-djukic-dejanovic-o-novim-obavezama-razrednih-staresina-pratice-i-mentalni/pjp40j5">
                            
                            &quot;Razredni starešina će pratiti i mentalni sklop dece, socijalni život i empatiju i PISATI IZVEŠTAJ&quot;: Slavica Đukić Dejanović o NOVIM OBAVEZAMA NASTAVNIKA
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T11:31:29+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/slavica-djukic-dejanovic-o-novim-obavezama-razrednih-staresina-pratice-i-mentalni/pjp40j5?strana=komentari">11
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="7699a068-6b1b-4a02-9e58-880e450f3dd5">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/drvo-palo-na-kbc-zvezdara-usred-noci-nema-povredenih/fdj6se4">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/XlCk9kpTURBXy9iMjU2Yjc1ZDQzNWZmNDIxZmJjOGMzOGJkYzNlZGNhZC5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/BSfk9kpTURBXy9iMjU2Yjc1ZDQzNWZmNDIxZmJjOGMzOGJkYzNlZGNhZC5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Drvo KBC Zvezdara"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/drvo-palo-na-kbc-zvezdara-usred-noci-nema-povredenih/fdj6se4">
                            
                            VELIKO STABLO PALO NA KBC &quot;ZVEZDARA&quot; USRED NOĆI Razbijen prozor, nema povređenih
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T11:18:34+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/drvo-palo-na-kbc-zvezdara-usred-noci-nema-povredenih/fdj6se4?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="8ef39a6f-5487-43df-a8ab-712b5f4b9901">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/epidemioloskinja-zabrinuta-zbog-epidemije-velikog-kaslja-u-srbiji-tvrdi-da-je-broj/mzsp68v">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/zFRk9kpTURBXy81NjA5OThiOTVmYWEzMjBlODE0N2RmZThjMDAxYmRmNi5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/XBSk9kpTURBXy81NjA5OThiOTVmYWEzMjBlODE0N2RmZThjMDAxYmRmNi5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/epidemioloskinja-zabrinuta-zbog-epidemije-velikog-kaslja-u-srbiji-tvrdi-da-je-broj/mzsp68v">
                            
                            &quot;BROJ OBOLELIH OD VELIKOG KAŠLJA POMNOŽITE SA TRI&quot; Epidemiološkinja zabrinuta: Nismo očekivali ovakvu situaciju, decenijama nije bilo ovako
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T09:45:48+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/epidemioloskinja-zabrinuta-zbog-epidemije-velikog-kaslja-u-srbiji-tvrdi-da-je-broj/mzsp68v?strana=komentari">7
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        
            <div class="banner banner--in-feed" data-placeholder-caption="Oglas">
    <div class="banner--placeholder">
        <div id='InFeed_5' style='min-width: 580px; min-height: 170px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('InFeed_5'); });
            </script>
        </div>
    </div>
</div>
        

        

        
            <article class="news" data-article-uuid="095dc5cc-ed35-402e-afaf-77caf1c167ee">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/zapalio-se-autobus-na-liniji-511-vozilo-se-napunilo-dimom-putnici-odmah-evakuisani/0ggqn0v">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/7GDk9kpTURBXy83ZTE4MmM4ZjJiZTMwOTEwMmU3ZWUyODYxOWM5YjAyNC5wbmeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/SqVk9kpTURBXy83ZTE4MmM4ZjJiZTMwOTEwMmU3ZWUyODYxOWM5YjAyNC5wbmeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/zapalio-se-autobus-na-liniji-511-vozilo-se-napunilo-dimom-putnici-odmah-evakuisani/0ggqn0v">
                            
                            ZAPALIO SE NA AUTOBUS NA LINIJI 511 Vozilo se napunilo dimom, putnici odmah evakuisani (VIDEO)
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T09:29:52+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/zapalio-se-autobus-na-liniji-511-vozilo-se-napunilo-dimom-putnici-odmah-evakuisani/0ggqn0v?strana=komentari">2
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="6d24a5b2-5bac-4cc2-a117-135f48e019f5">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/saobracajni-kolaps-u-beogradu-u-centru-sve-stoji-ogromne-guzve-na-pancevcu-i-gazeli/07n65c2">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/Ktak9kpTURBXy9mZDlkMTBlZDhjYjZjZjFhNjczZTk1NjFiNGI5OTI0ZC5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/OTpk9kpTURBXy9mZDlkMTBlZDhjYjZjZjFhNjczZTk1NjFiNGI5OTI0ZC5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/saobracajni-kolaps-u-beogradu-u-centru-sve-stoji-ogromne-guzve-na-pancevcu-i-gazeli/07n65c2">
                            
                            SAOBRAĆAJNI KOLAPS U BEOGRADU Sve &quot;mili&quot; u centru, ogromne gužve na Pančevcu i Gazeli: AMSS izdao upozorenje!
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T08:42:56+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/saobracajni-kolaps-u-beogradu-u-centru-sve-stoji-ogromne-guzve-na-pancevcu-i-gazeli/07n65c2?strana=komentari">8
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="980c8ca0-2027-42fd-a9b4-d38e7b2e2059">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/nesreca-u-rakovici-tesko-povreden-muskarac-hitno-prevezen-na-vma/7jth1tx">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/PB3k9kpTURBXy9hOTRhZjUxNmE3YWVmZGYwNzY4MzY1ZTk0YTkxMDJlYS5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/15Yk9kpTURBXy9hOTRhZjUxNmE3YWVmZGYwNzY4MzY1ZTk0YTkxMDJlYS5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Ilustracija"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/nesreca-u-rakovici-tesko-povreden-muskarac-hitno-prevezen-na-vma/7jth1tx">
                            
                            MUŠKARAC TEŠKO POVREĐEN U RAKOVICI Pet nesreća tokom noći u Beogradu
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T07:11:27+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/nesreca-u-rakovici-tesko-povreden-muskarac-hitno-prevezen-na-vma/7jth1tx?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="adf2fcf0-2a3c-4007-952f-ad4afbfef9d0">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/sobracajna-nesreca-kod-topciderskog-parka-dve-osobe-povredene-prevoze-se-na-vma/7gg45fb">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/PB3k9kpTURBXy9hOTRhZjUxNmE3YWVmZGYwNzY4MzY1ZTk0YTkxMDJlYS5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/15Yk9kpTURBXy9hOTRhZjUxNmE3YWVmZGYwNzY4MzY1ZTk0YTkxMDJlYS5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Ilustracija"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/sobracajna-nesreca-kod-topciderskog-parka-dve-osobe-povredene-prevoze-se-na-vma/7gg45fb">
                            
                            MUŠKARAC (44) TEŠKO POVREĐEN Sudar kod Topčiderskog parka: Povrede zadobila i devojka (20), automobili UNIŠTENI
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-18T00:11:28+01:00">
                            18.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/sobracajna-nesreca-kod-topciderskog-parka-dve-osobe-povredene-prevoze-se-na-vma/7gg45fb?strana=komentari">1
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="d77a3928-a3bc-45cc-9579-12fd84b333b3">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/pozar-na-vozdovcu-zapalila-se-baraka-vatrogasci-na-terenu/4bk5fms">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/5Fak9kpTURBXy80MmFhZGMwNjc5YjM2MTgxZjk2M2Q5ODcxMTljYjIzZS5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/hlHk9kpTURBXy80MmFhZGMwNjc5YjM2MTgxZjk2M2Q5ODcxMTljYjIzZS5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Ilustracija"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/pozar-na-vozdovcu-zapalila-se-baraka-vatrogasci-na-terenu/4bk5fms">
                            
                            POŽAR NA VOŽDOVCU Vatra guta baraku, vatrogasci na terenu, vazduhom se širi neprijatan miris
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-17T20:06:47+01:00">
                            17.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/pozar-na-vozdovcu-zapalila-se-baraka-vatrogasci-na-terenu/4bk5fms?strana=komentari">3
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="4a98f66f-631f-4a46-a5a1-8f68a055dff1">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/drastican-broj-srcanih-udara-kod-mladih-sta-je-razlog-i-koji-su-simptomi-kljucni/dnxll27">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/GgXk9kpTURBXy80ZTFkZmM5YzE4MGEzNTdhNTE4ZWMxZmYyMjhkMjZmYi5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/g32k9kpTURBXy80ZTFkZmM5YzE4MGEzNTdhNTE4ZWMxZmYyMjhkMjZmYi5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/drastican-broj-srcanih-udara-kod-mladih-sta-je-razlog-i-koji-su-simptomi-kljucni/dnxll27">
                            
                            OVE GREŠKE SU ULAZNICA ZA SMRT Sve je više SRČANIH UDARA KOD MLADIH, lekari nikada nisu bili ovako zabrinuti i imaju važnu poruku
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-17T19:49:13+01:00">
                            17.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/drastican-broj-srcanih-udara-kod-mladih-sta-je-razlog-i-koji-su-simptomi-kljucni/dnxll27?strana=komentari">2
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="434c0852-c3c0-407f-ba6a-e52ff57e3038">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/beogradanka-sokirana-prizorom-iz-prevoza-u-punom-autobusu-pas-zauzeo-celo-sediste/z0z4k1c">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/65Lk9kpTURBXy9iMzUwZjE4ZTQ0NDdlNmMzMmZmMGRkNTE4ZjlhYzk2Ni5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/4CSk9kpTURBXy9iMzUwZjE4ZTQ0NDdlNmMzMmZmMGRkNTE4ZjlhYzk2Ni5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/beogradanka-sokirana-prizorom-iz-prevoza-u-punom-autobusu-pas-zauzeo-celo-sediste/z0z4k1c">
                            
                            Beograđanka u šoku zbog situacije iz gradskog prevoza: &quot;Kad bih vam prepričala, verovatno mi ne biste verovali, SVI SMO GLEDALI U NJEGA&quot;
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-17T14:16:37+01:00">
                            17.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/beogradanka-sokirana-prizorom-iz-prevoza-u-punom-autobusu-pas-zauzeo-celo-sediste/z0z4k1c?strana=komentari">6
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="f1c7d7fc-c533-4b39-950d-1be538b4b9f6">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/sudar-autobusa-gsp-a-u-bloku-21-oba-vozila-vidno-ostecena/4jx7b7r">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/p2Pk9kpTURBXy9jM2ViNTcyN2M5Zjc3MWY4MGQ1MTkwYWQ1MDViZDVkNi5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/cl4k9kpTURBXy9jM2ViNTcyN2M5Zjc3MWY4MGQ1MTkwYWQ1MDViZDVkNi5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/sudar-autobusa-gsp-a-u-bloku-21-oba-vozila-vidno-ostecena/4jx7b7r">
                            
                            SUDAR DVA AUTOBUSA GSP-A U BLOKU 21 Oba vozila vidno oštećena (FOTO)
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-17T13:38:11+01:00">
                            17.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/sudar-autobusa-gsp-a-u-bloku-21-oba-vozila-vidno-ostecena/4jx7b7r?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="a620db97-483d-4550-8c49-2df2af1efac1">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/saslusan-napadac-iz-vojvode-stepe-tokom-doceka-srpske-nove-godine-pokusao-da-ubije/tx3wf5y">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/Pr-k9kpTURBXy83NGQ3MWYyY2ViNjczNjllZGYyNDQyYWRhNzY1MWVhMy5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/vqbk9kpTURBXy83NGQ3MWYyY2ViNjczNjllZGYyNDQyYWRhNzY1MWVhMy5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="Ilustracije"
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/saslusan-napadac-iz-vojvode-stepe-tokom-doceka-srpske-nove-godine-pokusao-da-ubije/tx3wf5y">
                            
                            SASLUŠAN NAPADAČ IZ VOJVODE STEPE Tokom dočeka Srpske Nove godine pokušao da ubije konobara, a pred tužiocem zanemeo
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-17T13:34:13+01:00">
                            17.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/saslusan-napadac-iz-vojvode-stepe-tokom-doceka-srpske-nove-godine-pokusao-da-ubije/tx3wf5y?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="99d45866-fb5d-4820-b19f-6bd233ad6391">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/sramota-prodaj-auto-ako-nemas-para-za-gorivo-nije-sramota-ici-gradskim-prevozom-kradu/yyldsy7">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/Zuzk9kpTURBXy9kMDBhMjNkOTU0OTViM2M1NTVhYTgxYTNjNThkODM5OS5wbmeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/BxHk9kpTURBXy9kMDBhMjNkOTU0OTViM2M1NTVhYTgxYTNjNThkODM5OS5wbmeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/sramota-prodaj-auto-ako-nemas-para-za-gorivo-nije-sramota-ici-gradskim-prevozom-kradu/yyldsy7">
                            
                            &quot;Prodaj auto ako nemaš para za gorivo, nije sramota ići gradskim prevozom&quot;: Kradu na pumpi i to pred kamerama! (VIDEO)
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-17T13:25:50+01:00">
                            17.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/sramota-prodaj-auto-ako-nemas-para-za-gorivo-nije-sramota-ici-gradskim-prevozom-kradu/yyldsy7?strana=komentari">4
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    

        
        
        
        
        

        

        
            <article class="news" data-article-uuid="19a0b97b-a6bf-4100-a02d-a0e3eabb5669">
                <div class="news__img">
                    <a href="https://www.blic.rs/vesti/beograd/u-apoteka-beograd-proizvode-se-lekovi-koji-nedostaju-na-trzistu-ali-i-oni-koje-je/zcqjgjf">
                        <figure>
                            <picture>
                                
                                    
                                    
                                    <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/2FJk9kpTURBXy83NzRlMjI3N2U4Y2NiOWZjYmNhYjllZjgzZDEwNzNmMi5qcGeRkwXMlsyW3gABoTAF">
                                    <img width="1" height="1"
                                         src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA="
                                         data-src="//ocdn.eu/pulscms-transforms/1/2TOk9kpTURBXy83NzRlMjI3N2U4Y2NiOWZjYmNhYjllZjgzZDEwNzNmMi5qcGeRkwXMlsyW3gABoTAB"
                                         class="lazyload"
                                         alt="."
                                    />
                                
                            </picture>

                            
                        </figure>
                    </a>
                </div>
                <div class="news__content">
                    <h2>
                        <a href="https://www.blic.rs/vesti/beograd/u-apoteka-beograd-proizvode-se-lekovi-koji-nedostaju-na-trzistu-ali-i-oni-koje-je/zcqjgjf">
                            
                            U ovoj apoteci u Beogradu proizvode se LEKOVI KOJI NEDOSTAJU NA TRŽIŠTU, ali i oni koje je lekar prepisao za određenog pacijenta
                        </a>
                    </h2>
                    <div class="news__bottom">

                        
    
    
    <span class="category">
        <a href="https://www.blic.rs/vesti/beograd">Beograd</a>
    </span>


                        
                        <time datetime="2024-01-17T12:47:30+01:00">
                            17.01.2024
                        </time>

                        
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/beograd/u-apoteka-beograd-proizvode-se-lekovi-koji-nedostaju-na-trzistu-ali-i-oni-koje-je/zcqjgjf?strana=komentari">1
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </article>
        

        

        

    
</section>

                        <section class="pagination" data-run-module="local/common/pagination.init">
                            <ul>
    
    
    <li>
        <form method="GET" id="pagination-next-form" enctype="text/plain">
            
            
            <input type="hidden" name="strana" value="2">
            
            <a href="#" id="pagination-next">
                Sledeća
                <svg class="icon">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-angle-right"></use>
                </svg>
            </a>
        </form>
    </li>
    
</ul>
                        </section>

                        

    
    <section class="news-box news-box--zenaPromo-carousel">
        <section class="news-box__header">
            <span><a href="https://zena.blic.rs/etericna-ulja" target="_blank">Žena promo</a></span>
        </section>
        <div class="news-box__inner">
            <div class="swiper-container news__carousel-box">
                <div class="swiper-wrapper">
                    
                        
                        
                        
                        
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img">
                                    <a href="https://zena.blic.rs/zdravlje/evo-kako-je-etericno-ulje-efikasno-protiv-menstrualnih-bolova-i-pms-a/1tcdbfw" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/-SGk9kpTURBXy9hZWYyNzBiMmI4NmNiMWE0Y2MzYmM3NmRlODJiNjNjNi5qcGeRkwXNAqjNAX_eAAGhMAU">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/0x9ktkpTURBXy9hZWYyNzBiMmI4NmNiMWE0Y2MzYmM3NmRlODJiNjNjNi5qcGeRkwXNAqjNAX8"
                                                     alt="Bolan ciklus i PMS od kog bridi svaki deo tela su problem MNOGIH ŽENA - evo šta možete da uradite kod kuće VEĆ DANAS i očekujte preporod"
                                                />
                                            </picture>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span>
                                        <a href="https://zena.blic.rs/zdravlje/evo-kako-je-etericno-ulje-efikasno-protiv-menstrualnih-bolova-i-pms-a/1tcdbfw" target="_blank">Bolan ciklus i PMS od kog bridi svaki deo tela su problem MNOGIH ŽENA - evo šta možete da uradite kod kuće VEĆ DANAS i očekujte preporod</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                        
                        
                        
                        
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img">
                                    <a href="https://zena.blic.rs/lepota/ovaj-prirodni-recept-morate-da-probate-ukoliko-vam-opada-kosa/1x8byhp" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/dofk9kpTURBXy80YzlhYjY2M2RiYzdlZjI4MTM1MTEyMzYwYTcwOTVlMi5qcGeRkwXNAqjNAX_eAAGhMAU">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/dZbktkpTURBXy80YzlhYjY2M2RiYzdlZjI4MTM1MTEyMzYwYTcwOTVlMi5qcGeRkwXNAqjNAX8"
                                                     alt="OPADA VAM KOSA i već postajete očajni? Rešenje može biti jednostavnije nego što mislite, a EVO u čemu se krije ključ uspeha"
                                                />
                                            </picture>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span>
                                        <a href="https://zena.blic.rs/lepota/ovaj-prirodni-recept-morate-da-probate-ukoliko-vam-opada-kosa/1x8byhp" target="_blank">OPADA VAM KOSA i već postajete očajni? Rešenje može biti jednostavnije nego što mislite, a EVO u čemu se krije ključ uspeha</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                        
                        
                        
                        
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img">
                                    <a href="https://zena.blic.rs/zdravlje/etarska-ulja-protiv-hemoroida/gmb7w4t" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/wy4k9kpTURBXy9jNzFhNzVlNWVjZDg3YTJlNDM0ZWVlYWRlM2I2ZGM2Ny5qcGeRkwXNAqjNAX_eAAGhMAU">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/4mxktkpTURBXy9jNzFhNzVlNWVjZDg3YTJlNDM0ZWVlYWRlM2I2ZGM2Ny5qcGeRkwXNAqjNAX8"
                                                     alt="HEMOROIDA se ljudi i dalje stide, a svaka druga osoba u Srbiji pati od istih: Postoji jednostavan način da OLAKŠATE SEBI MUKE, a evo kako vam eterična ulja pomažu u tome"
                                                />
                                            </picture>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span>
                                        <a href="https://zena.blic.rs/zdravlje/etarska-ulja-protiv-hemoroida/gmb7w4t" target="_blank">HEMOROIDA se ljudi i dalje stide, a svaka druga osoba u Srbiji pati od istih: Postoji jednostavan način da OLAKŠATE SEBI MUKE, a evo kako vam eterična ulja pomažu u tome</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                        
                        
                        
                        
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img">
                                    <a href="https://zena.blic.rs/lepota/etericna-ulja-protiv-akni-na-licu/cyzz70g" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/DNEk9kpTURBXy82MDYzY2VmZTUzZTdjMDhhY2FhNmZhMzExYzVhNjk1Mi5qcGeRkwXNAqjNAX_eAAGhMAU">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/VsSktkpTURBXy82MDYzY2VmZTUzZTdjMDhhY2FhNmZhMzExYzVhNjk1Mi5qcGeRkwXNAqjNAX8"
                                                     alt="Ogroman broj ljudi ima PROBLEM SA AKNAMA, a evo kako da napravite prirodno MLEKO, LOSION, MASKU I TONIK za lice koji će vam definitivno pomoći da rešite ove probleme"
                                                />
                                            </picture>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span>
                                        <a href="https://zena.blic.rs/lepota/etericna-ulja-protiv-akni-na-licu/cyzz70g" target="_blank">Ogroman broj ljudi ima PROBLEM SA AKNAMA, a evo kako da napravite prirodno MLEKO, LOSION, MASKU I TONIK za lice koji će vam definitivno pomoći da rešite ove probleme</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                        
                        
                        
                        
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img">
                                    <a href="https://zena.blic.rs/lepota/kako-etericna-ulja-pomazu-protiv-celulita/kq549wj" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/rSfk9kpTURBXy83NzhhZDdhYzRhYWU3NzY1NTY0NzgxNzFmNWNhYzY3YS5qcGeRkwXNAqjNAX_eAAGhMAU">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/xD8ktkpTURBXy83NzhhZDdhYzRhYWU3NzY1NTY0NzgxNzFmNWNhYzY3YS5qcGeRkwXNAqjNAX8"
                                                     alt="Bezbolno i prirodno rešenje za CELULIT postoji! Evo o čemu se radi"
                                                />
                                            </picture>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span>
                                        <a href="https://zena.blic.rs/lepota/kako-etericna-ulja-pomazu-protiv-celulita/kq549wj" target="_blank">Bezbolno i prirodno rešenje za CELULIT postoji! Evo o čemu se radi</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                        
                        
                        
                        
                        <div class="swiper-slide">
                            <article class="news">
                                <div class="news__img">
                                    <a href="https://zena.blic.rs/zdravlje/kako-etarsko-ulje-limuna-pomaze-kod-visokog-pritiska/m8vd3yx" target="_blank">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/Hhvk9kpTURBXy81YWNjYWI0M2ZiNTY0MTE3NjlhMWM0NGQzZWQwMTJkMi5qcGeRkwXNAqjNAX_eAAGhMAU">
                                                <img class="lazyload"
                                                     width="16"
                                                     height="9"
                                                     src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA="
                                                     data-src="//ocdn.eu/pulscms-transforms/1/EfbktkpTURBXy81YWNjYWI0M2ZiNTY0MTE3NjlhMWM0NGQzZWQwMTJkMi5qcGeRkwXNAqjNAX8"
                                                     alt="Za VISOK PRITISAK kažu da je bolest modernog doba - a EVO šta pomaže u borbi sa ovim tihim ubicom"
                                                />
                                            </picture>
                                        </figure>
                                    </a>
                                </div>
                                <div class="news__content">
                                    <span>
                                        <a href="https://zena.blic.rs/zdravlje/kako-etarsko-ulje-limuna-pomaze-kod-visokog-pritiska/m8vd3yx" target="_blank">Za VISOK PRITISAK kažu da je bolest modernog doba - a EVO šta pomaže u borbi sa ovim tihim ubicom</a>
                                    </span>
                                </div>
                            </article>
                        </div>
                    
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div><!-- // end carousel -->
        </div>
    </section>


                        
                            <div style="min-height: 500px" id="nekretnine-widget" data-script="https://www.nekretnine.rs/widget-blic-latest-1.js" class="lazyload"></div>
                        

                    </div>



                </div>

                <aside class="section__aside">
    
    
        <div class="sticky-area">
    <div class="banner banner--sticky" data-placeholder-caption="Oglas">
        <div class="banner--placeholder">
            <div id='P1' style='min-width: 240px; min-height: 50px;'>
                <script>
                    googletag.cmd.push(function() { googletag.display('P1'); });
                </script>
            </div>
        </div>
    </div>
</div>
    
        
    
        <div class="sticky-area">
    <div class="banner banner--sticky" data-placeholder-caption="Oglas">
        <div class="banner--placeholder">
            <div id='P2' style='min-width: 240px; min-height: 50px;'>
                <script>
                    googletag.cmd.push(function() { googletag.display('P2'); });
                </script>
            </div>
        </div>
    </div>
</div>
    
        




<section class="news-box news-box news-box-title--sportal">
    <div class="news-box__header">
        <h3><a href="https://sportal.blic.rs">Sportal</a></h3>
    </div>
    
        
        <article class="news news--big">
            <div class="news__img">
                <a href="https://sportal.blic.rs/tenis/novak-djokovic/novak-djokovic-poslao-posebnu-poruku-posle-pobede-i-to-na-cirilici-bog-se-javi/2024011910581904545?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">
                    <figure>
                        <picture>
                            
                            
                            <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/gnRk9kuTURBXy83N2NkN2I2My1mYTcwLTRjZDEtYmRkZC1hNDUxMzI0NWY1NjguanBlZ5GTBc0BDsyY3gABoTAF">
                            <img class="lazyload" width="16" height="9" src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA=" data-src="//ocdn.eu/pulscms-transforms/1/sH4ktkuTURBXy83N2NkN2I2My1mYTcwLTRjZDEtYmRkZC1hNDUxMzI0NWY1NjguanBlZ5GTBc0BDsyY"  alt="" />
                        </picture>
                        
                    </figure>
                </a>
            </div>
            <div class="news__content">
                <h4><a href="https://sportal.blic.rs/tenis/novak-djokovic/novak-djokovic-poslao-posebnu-poruku-posle-pobede-i-to-na-cirilici-bog-se-javi/2024011910581904545?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar"> Đoković poslao posebnu poruku posle pobede i to na ćirilici /FOTO/</a></h4>
                <div class="news__bottom">
                    <div class="comments-no">
                        <a href="https://sportal.blic.rs/tenis/novak-djokovic/novak-djokovic-poslao-posebnu-poruku-posle-pobede-i-to-na-cirilici-bog-se-javi/2024011910581904545?strana=komentari">0
                            <svg class="icon sprite-comment-lines">
                                <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </article>
        
    
        
            <article class="news">
                <div class="news__content news__content--full-width">
                    <h4><a href="https://sportal.blic.rs/tenis/marta-kostjuk-nije-htela-da-pruzi-ruku-ruskinji-avesjan-plakala-posle-meca/2024011910063214204?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar"> Novi incident na Australijan openu: Marta se rasplakala nasred terena, pa odbila da pruži ruku Ruskinji</a></h4>
                    <div class="news__bottom">
                        <div class="comments-no">
                            <a href="https://sportal.blic.rs/tenis/marta-kostjuk-nije-htela-da-pruzi-ruku-ruskinji-avesjan-plakala-posle-meca/2024011910063214204?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        
    
        
            <article class="news">
                <div class="news__content news__content--full-width">
                    <h4><a href="https://sportal.blic.rs/tenis/novak-djokovic/novak-djokovic-izludeo-eceverija-nik-kirjos-porucuje-apsurdno/2024011910010198198?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar"> Kad shvatiš da Novaku ne možeš ništa! Ečeveri se &quot;zaledio&quot;, Kirjos sve rekao: Apsurdno /VIDEO/</a></h4>
                    <div class="news__bottom">
                        <div class="comments-no">
                            <a href="https://sportal.blic.rs/tenis/novak-djokovic/novak-djokovic-izludeo-eceverija-nik-kirjos-porucuje-apsurdno/2024011910010198198?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        
    
        
            <article class="news">
                <div class="news__content news__content--full-width">
                    <h4><a href="https://sportal.blic.rs/kosarka/nba/slomio-se-i-dario-saric-ovo-je-njegova-poruka-za-dejana-milojevica-foto/2024011909064341367?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar"> Slomio se i Dario Šarić - ovo je njegova poruka za Dejana Milojevića /FOTO/</a></h4>
                    <div class="news__bottom">
                        <div class="comments-no">
                            <a href="https://sportal.blic.rs/kosarka/nba/slomio-se-i-dario-saric-ovo-je-njegova-poruka-za-dejana-milojevica-foto/2024011909064341367?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        
    
        
            <article class="news">
                <div class="news__content news__content--full-width">
                    <h4><a href="https://sportal.blic.rs/fudbal/medjunarodni-fudbal/cije-su-pertle-duze-atletiko-slavi-ali-i-prica-o-spornom-golu-reala/2024011907360519858?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">Čije su pertle duže: Atletiko slavi, ali i priča o spornom golu Reala</a></h4>
                    <div class="news__bottom">
                        <div class="comments-no">
                            <a href="https://sportal.blic.rs/fudbal/medjunarodni-fudbal/cije-su-pertle-duze-atletiko-slavi-ali-i-prica-o-spornom-golu-reala/2024011907360519858?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        
    
</section>

    
        




<section class="news-box ">
    <div class="news-box__header">
        <h3><a href="https://www.blic.rs/vesti/hronika">Hronika</a></h3>
    </div>
    
        
        <article class="news news--big">
            <div class="news__img">
                <a href="https://www.blic.rs/vesti/hronika/ovo-je-bmw-u-kojem-je-stradao-dusko-krenuo-na-plivanje-za-casni-krst-pa-sleteo-u/608vy91">
                    <figure>
                        <picture>
                            
                            
                            <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/xbKk9kpTURBXy84YmRjNTYzZjUxN2M5ZGYyYTMzODYyMjAzZDNkMThlZC5qcGeRkwXNAQ7MmN4AAaEwBQ">
                            <img class="lazyload" width="16" height="9" src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAADwAACAAAVlA4IBgAAAAwAQCdASoQAAkAAkA4JaQAA3AA/vshgAA=" data-src="//ocdn.eu/pulscms-transforms/1/KPQktkpTURBXy84YmRjNTYzZjUxN2M5ZGYyYTMzODYyMjAzZDNkMThlZC5qcGeRkwXNAQ7MmA"  alt="." />
                        </picture>
                        
                    </figure>
                </a>
            </div>
            <div class="news__content">
                <h4><a href="https://www.blic.rs/vesti/hronika/ovo-je-bmw-u-kojem-je-stradao-dusko-krenuo-na-plivanje-za-casni-krst-pa-sleteo-u/608vy91">OVO JE &quot;BMW&quot; U KOJEM JE STRADAO DUŠKO Krenuo sa drugom na plivanje za Časni krst, pa sleteli u Dunav: Drug uspeo da se spase (FOTO)</a></h4>
                <div class="news__bottom">
                    <div class="comments-no">
                        <a href="https://www.blic.rs/vesti/hronika/ovo-je-bmw-u-kojem-je-stradao-dusko-krenuo-na-plivanje-za-casni-krst-pa-sleteo-u/608vy91?strana=komentari">1
                            <svg class="icon sprite-comment-lines">
                                <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </article>
        
    
        
            <article class="news">
                <div class="news__content news__content--full-width">
                    <h4><a href="https://www.blic.rs/vesti/hronika/horor-u-sopotu-pesnicama-udarao-radnika-u-kladionici-pa-presao-na-bivsu-zenu-i-jos/8k3wplx">MRTAV PIJAN NAPRAVIO NIZ PREKRŠAJA Horor u Sopotu: Pesnicama udarao radnika u kladionici, pa prešao na bivšu ženu i još jednog muškarca</a></h4>
                    <div class="news__bottom">
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/hronika/horor-u-sopotu-pesnicama-udarao-radnika-u-kladionici-pa-presao-na-bivsu-zenu-i-jos/8k3wplx?strana=komentari">0
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        
    
        
            <article class="news">
                <div class="news__content news__content--full-width">
                    <h4><a href="https://www.blic.rs/vesti/hronika/fabrika-u-kojoj-su-se-otrovala-162-radnika-nece-raditi-do-ponedeljka-inspekcije/pz0dnkw">&quot;BLIC&quot; SAZNAJE Fabrika u kojoj su se otrovala 162 radnika neće raditi do ponedeljka: Inspekcije češljaju &quot;Magnu&quot;, sutra slede detaljna merenja</a></h4>
                    <div class="news__bottom">
                        <div class="comments-no">
                            <a href="https://www.blic.rs/vesti/hronika/fabrika-u-kojoj-su-se-otrovala-162-radnika-nece-raditi-do-ponedeljka-inspekcije/pz0dnkw?strana=komentari">1
                                <svg class="icon sprite-comment-lines">
                                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-comment-lines"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        
    
</section>

    
        <div class="banner banner--list" data-placeholder-caption="Oglas">
    <div class="banner--placeholder">
        <div id='P3' style='min-width: 240px; min-height: 50px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('P3'); });
            </script>
        </div>
    </div>
</div>
    
        <!-- Aklamator -->
<div id="aklavzah18w" class="aklawidgets" style="margin-bottom: 20px;"></div>
    
        <div class="banner banner--list" data-placeholder-caption="Oglas">
    <div class="banner--placeholder">
        <div id='P4' style='min-width: 240px; min-height: 50px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('P4'); });
            </script>
        </div>
    </div>
</div>
    
        <!-- Aklamator -->
<div id="aklapBli100" class="aklawidgets" style="margin-bottom: 20px;"></div>
    
        <!-- Aklamator -->
<div id="aklapBlD247" class="aklawidgets" style="margin-bottom: 20px;"></div>
    
        <div class="banner banner--list" data-placeholder-caption="Oglas">
    <div class="banner--placeholder">
        <div id='P5' style='min-width: 240px; min-height: 50px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('P5'); });
            </script>
        </div>
    </div>
</div>
    
        



    
    <section class="news-box news-box-title--zena">
        <div class="news-box__header">
            <h3>
                
                    <a href="https://zena.blic.rs">Žena</a>
                
            </h3>
        </div>
        
        <article class="news news--big">
            <div class="news__img">
                <a href="https://zena.blic.rs/tradicija-i-obicaji/da-li-se-posti-na-svetog-jovana/51g2gzs?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">
                    <figure>
                        <picture>
                            
                            
                            <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/8BUk9kuTURBXy9iMTFjODMwYS0yN2NjLTRiMWYtOWY4MC0xMTJkZTZhNGIzYjQuanBlZ5GTBc0BDsyY3gABoTAF">
                            <img width="1" height="1" class="lazyload" src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA=" data-src="//ocdn.eu/pulscms-transforms/1/LRgktkuTURBXy9iMTFjODMwYS0yN2NjLTRiMWYtOWY4MC0xMTJkZTZhNGIzYjQuanBlZ5GTBc0BDsyY"  alt="" />
                        </picture>
                        
                    </figure>
                </a>
            </div>
            <div class="news__content">
                <h4><a href="https://zena.blic.rs/tradicija-i-obicaji/da-li-se-posti-na-svetog-jovana/51g2gzs?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">Sutra je SVETI JOVAN KRSTITELJ: Za praznik se vezuju mnogi OBIČAJI, a vernici su u dilemi da li se POSTI</a></h4>

                

            </div>
        </article>
        
        <article class="news news--big">
            <div class="news__img">
                <a href="https://zena.blic.rs/moda/tamara-vucic-u-bajkovitoj-haljini-na-svetosavskom-balu-u-becu/9lep11r?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">
                    <figure>
                        <picture>
                            
                            
                            <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/Xock9kuTURBXy8xZjA2OGI1Yi04MmViLTQxMmEtYTEwMS02YmVhYzA1ZGRhOWUuanBlZ5GTBc0BDsyY3gABoTAF">
                            <img width="1" height="1" class="lazyload" src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA=" data-src="//ocdn.eu/pulscms-transforms/1/gA8ktkuTURBXy8xZjA2OGI1Yi04MmViLTQxMmEtYTEwMS02YmVhYzA1ZGRhOWUuanBlZ5GTBc0BDsyY"  alt="" />
                        </picture>
                        
                    </figure>
                </a>
            </div>
            <div class="news__content">
                <h4><a href="https://zena.blic.rs/moda/tamara-vucic-u-bajkovitoj-haljini-na-svetosavskom-balu-u-becu/9lep11r?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">Tamara Vučić u BAJKOVITO LEPOJ HALJINI i sa frizurom kakvu do sada nije nosila: Ovaj modela parira HOLIVUDSKOM GLAMURU, a detalji su POSLEDNJI  MODNI TREND</a></h4>

                

            </div>
        </article>
        
        <article class="news news--big">
            <div class="news__img">
                <a href="https://zena.blic.rs/lifestyle/kada-cveta-amarilis/n3zgdfp?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">
                    <figure>
                        <picture>
                            
                            
                            <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/FJyk9kuTURBXy9hOThhYTlmYy1lYzg0LTQ3ZTQtYTcxZi01N2JjMDM1MjI4YzQuanBlZ5GTBc0BDsyY3gABoTAF">
                            <img width="1" height="1" class="lazyload" src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA=" data-src="//ocdn.eu/pulscms-transforms/1/5qrktkuTURBXy9hOThhYTlmYy1lYzg0LTQ3ZTQtYTcxZi01N2JjMDM1MjI4YzQuanBlZ5GTBc0BDsyY"  alt="" />
                        </picture>
                        
                    </figure>
                </a>
            </div>
            <div class="news__content">
                <h4><a href="https://zena.blic.rs/lifestyle/kada-cveta-amarilis/n3zgdfp?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">AMARILIS je jedan NESTVARAN CVET: Svaki prostor učiniće BOŽANSTVENIM - čarobne je lepote i hrana za dušu</a></h4>

                

            </div>
        </article>
        
        <article class="news news--big">
            <div class="news__img">
                <a href="https://zena.blic.rs/puls-poznatih/melanija-tramp-skrhana-na-sahrani-majke-izraz-lica-govori-o-njenom-ocaju-nikad-je/6756d6q?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">
                    <figure>
                        <picture>
                            
                            
                            <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/yG9k9kuTURBXy9hYjVkODQwNy0xMWYxLTQyZjUtOGQwMy1iMzhlNTViOWUwZDMuanBlZ5GTBc0BDsyY3gABoTAF">
                            <img width="1" height="1" class="lazyload" src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA=" data-src="//ocdn.eu/pulscms-transforms/1/OdBktkuTURBXy9hYjVkODQwNy0xMWYxLTQyZjUtOGQwMy1iMzhlNTViOWUwZDMuanBlZ5GTBc0BDsyY"  alt="" />
                        </picture>
                        
                    </figure>
                </a>
            </div>
            <div class="news__content">
                <h4><a href="https://zena.blic.rs/puls-poznatih/melanija-tramp-skrhana-na-sahrani-majke-izraz-lica-govori-o-njenom-ocaju-nikad-je/6756d6q?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">MELANIJA TRAMP potpuno skrhana na sahrani majke - IZRAZ LICA oslikava čistu agoniju i najdublju bol: Nikada je niste videli ovakvu, tu je i cela porodica Tramp</a></h4>

                

            </div>
        </article>
        
        <article class="news news--big">
            <div class="news__img">
                <a href="https://zena.blic.rs/ljubimci/iva-je-pokazala-cime-hrani-psa-i-region-je-frapiran-koliko-to-kosta/z7458fk?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">
                    <figure>
                        <picture>
                            
                            
                            <source type="image/webp" data-srcset="//ocdn.eu/pulscms-transforms/1/nGqk9kuTURBXy9iOTEzOWQwNS05YjVmLTRhNWYtYTkwNS05ZWM5ZjJiMDVkMTYuanBlZ5GTBc0BDsyY3gABoTAF">
                            <img width="1" height="1" class="lazyload" src="data:image/webp;base64,UklGRjYAAABXRUJQVlA4WAoAAAAgAAAAAAAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAkA4JaQAA3AA/vshgAA=" data-src="//ocdn.eu/pulscms-transforms/1/JyPktkuTURBXy9iOTEzOWQwNS05YjVmLTRhNWYtYTkwNS05ZWM5ZjJiMDVkMTYuanBlZ5GTBc0BDsyY"  alt="" />
                        </picture>
                        
                    </figure>
                </a>
            </div>
            <div class="news__content">
                <h4><a href="https://zena.blic.rs/ljubimci/iva-je-pokazala-cime-hrani-psa-i-region-je-frapiran-koliko-to-kosta/z7458fk?utm_source=blic.rs&amp;utm_medium=referral&amp;utm_campaign=blic_kat_vesti_beograd_sidebar">Iva je snimila video ČIME HRANI PSA i region je FRAPIRAN: &quot;LOSOS, kefir od kozjeg mleka i čia semenke - OVAJ KER JEDE BOLJE OD MENE&quot;</a></h4>

                

            </div>
        </article>
        
    </section>

    
        <section class="news-box__tabs" data-run-module="local/desktop/tabs.init">
    <div class="news-box__tabs-selection">
        <h2 class="active" data-tab="tab-info">INFO NAJNOVIJE</h2>
        <h2 data-tab="tab-sport">SPORTAL NAJNOVIJE</h2>
    </div>
    <span class="news-box__tabs-line"></span>

    
        



<div id="tab-info" class="news-box__tabs-content  active ">
    <ul>
        
            
        
            
        
            
                
                    <li>
                        <a href="https://www.blic.rs/biznis/vesti/1500-ljudi-dobilo-otkaz-zbog-loseg-znanja-nemackog-jezika/6t3j41z">
                            <div>
                                <time>16:21</time>
                                1.500 radnika dobilo otkaz zbog lošeg znanja nemačkog jezika
                            </div>
                            
                        </a>
                    </li>
                    
                
            
        
            
                
                    <li>
                        <a href="https://www.blic.rs/zabava/darko-tanasijevic-na-meti-pretnji-voditelj-elite-primio-poziv-upozorenja/z8d322f">
                            <div>
                                <time>16:15</time>
                                DARKO TANASIJEVIĆ NA METI PRETNJI Voditelj &quot;Elite&quot; primio poziv upozorenja - oglasio se i otkrio šta se dešava: &quot;Nisam vam ja kriv&quot;
                            </div>
                            
                        </a>
                    </li>
                    
                
            
        
            
                
                    <li>
                        <a href="https://www.blic.rs/vesti/svet/uzivo-japan-pokusava-da-sleti-na-mesec-ceka-nas-20-minuta-uzasa/1dvr3dk">
                            <div>
                                <time>16:15</time>
                                JAPAN IDE NA MESEC! &quot;Čeka nas 20. minuta užasa&quot;: Tokio ulazi u trku, ovo je prvi pokušaj da sleti na Zemljin prirodni satelit
                            </div>
                            
                        </a>
                    </li>
                    
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
            
                
            
        
    </ul>
    <div class="news-box__tabs-more">
        <a href="//www.blic.rs/najnovije-vesti">
            Sve najnovije vesti
            <svg class="icon">
                <use xlink:href="../../../static/sprite.svg?v=27#sprite-arrow-right"></use>
            </svg>
        </a>
    </div>
</div>
    
        


<div id="tab-sport" class="news-box__tabs-content ">
    <ul>
        
            
                <li>
                    <a href="https://sportal.blic.rs/fudbal/srbija/partizan/zvanicno-partizan-predstavio-novog-igraca-leonard-ovusu-potpisao-trogodisnji-ugovor-sa-crno-belima/2024011915255623489" target="_blank">
                        <div>
                            <time>16:25</time>
                            Zvanično: Partizan predstavio novog igrača - u Humskoj pao potpis na trogodišnji ugovor
                        </div>
                    </a>
                </li>
                
            
        
            
                <li>
                    <a href="https://sportal.blic.rs/fudbal/medjunarodni-fudbal/kup-africkih-nacija-fudbaler-zelenortskih-ostrva-bebe-postigao-gol-iz-slobodnog-udarca-sa-skoro-pola-terena-video/2024011915200653287" target="_blank">
                        <div>
                            <time>16:20</time>
                            Au, kakva golčina! Sa pola terena direktno u rašlje: Nestvaran pogodak nekadašnjeg igrača Junajteda /VIDEO/
                        </div>
                    </a>
                </li>
                
            
        
            
                <li>
                    <a href="https://sportal.blic.rs/kosarka/milos-teodosic-zestoko-psovao-sudije-posle-bolnog-poraza-zvezde-pobesneo-zbog-jednog-detalja/2024011903571666871" target="_blank">
                        <div>
                            <time>16:07</time>
                            Teodosić pobesneo na sudije! Jurio ih posle meča po parketu: Je l&#39; vidiš, mamu ti j**em! /VIDEO/
                        </div>
                    </a>
                </li>
                
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
            
        
    </ul>
    <div class="news-box__tabs-more">
        <a href="https://sportal.blic.rs/najnovije-vesti">
            Sve najnovije vesti
            <svg class="icon">
                <use xlink:href="../../../static/sprite.svg?v=27#sprite-arrow-right"></use>
            </svg>
        </a>
    </div>
</div>
    

</section>
    
        <div id="nekretninecontentexchange" data-script="https://www.nekretnine.rs/widget-content-exchange.js" class="lazyload"></div>
    

</aside>

            </section>

        </main>

    
    <div id="bannerStickyBottom" data-run-module="local/common/stickyBannerBottom.init" data-device-type="desktop" class="banner">
        <div class="banner__close hidden">
            <svg width="18px" height="18px" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
            </svg>
        </div>
        <div id='Sticky' style='min-width: 728px; min-height: 90px;'>
            <script>
                googletag.cmd.push(function() { googletag.display('Sticky'); });
            </script>
        </div>
    </div>




        <footer class="footer ">
            

<div class="container">

    <div class="footer__top">
        <form class="footer__search" method="GET" action="/search">
            <input type="search" placeholder="Pretraži Blic..." name="q">
            <button>
                <svg class="icon">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-magnifying-glass"></use>
                </svg>
            </button>
        </form>
        <div class="footer__to-top" data-run-module="local/common/toTop.init">
            <span>
                <svg class="icon sprite-angle-up">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-angle-up"></use>
                </svg>
            </span>
        </div>
    </div>

    <div class="footer__center">
        <div class="footer__links">
            
                
                
                <div>
                    <h4>KATEGORIJE</h4>
                    <ul>
                        <li><a href="https://www.blic.rs/najnovije-vesti/">Najnovije vesti</a></li>
                        <li><a href="https://www.blic.rs/vesti/svet">Svet</a></li>
                        <li><a href="https://www.blic.rs/vesti/hronika">Crna Hronika</a></li>
                        <li><a href="https://www.blic.rs/vesti/politika">Politika</a></li>
                        <li><a href="https://www.blic.rs/ukrajina">Ukrajina</a></li>
                        <li><a href="https://www.blic.rs/vesti/beograd">Beograd</a></li>
                        <li><a href="https://www.blic.rs/vesti/srbija">Srbija</a></li>
                        <li><a href="https://www.blic.rs/zabava">Zabava</a></li>
                        <li><a href="https://www.blic.rs/biznis">Biznis</a></li>
                        <li><a href="https://www.blic.rs/vremenska-prognoza">Vremenska prognoza</a></li>
                        <li><a href="https://www.blic.rs/slobodno-vreme">Slobodno vreme</a></li>
                        <li><a href="https://www.blic.rs/vesti/drustvo">Društvo</a></li>
                        <li><a href="https://www.blic.rs/kultura">Kultura</a></li>
                    </ul>
                </div>
                <div>
                    <h4>RINGIER SERBIA</h4>
                    <ul>
                        <li><a href="https://sportal.blic.rs/" target="_blank">Sportal</a></li>
                        <li><a href="https://zena.blic.rs/" target="_blank">Blic Žena</a></li>
                        <li><a href="https://www.nekretnine.rs/" target="_blank">Nekretnine</a></li>
                        <li><a href="https://www.pulsonline.rs/" target="_blank">Puls Online</a></li>
                        <li><a href="https://www.ana.rs/" target="_blank">Ana.rs</a></li>
                        <li><a href="https://www.mojauto.rs/" target="_blank">Moj Auto</a></li>
                        <li><a href="https://srpskainfo.com/" target="_blank">Srpskainfo</a></li>
                        <li><a href="https://bosnainfo.ba/" target="_blank">Bosnainfo</a></li>
                    </ul>
                </div>
                <div>
                    <h4>BLIC TV</h4>
                    <ul>
                        <li><a href="https://blictv.blic.rs/" target="_blank">Emisijie</a></li>
                        <li><a href="https://blictv.blic.rs/program/" target="_blank">Program</a></li>
                        <li><a href="https://blictv.blic.rs/gde-gledati/" target="_blank">Gde gledati</a></li>
                    </ul>
                </div>
                
                
                
                
                
                    
            
        </div>
        <div class="footer__info">
            <div>
                <svg class="icon">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-footer-building"></use>
                </svg>
                "Ringier Serbia" d.o.o.
            </div>
            <div>
                <svg class="icon">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-footer-location"></use>
                </svg>
                Kosovska 10, Beograd
            </div>
            <div class="line"></div>
            <div>
                <svg class="icon">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-footer-phone"></use>
                </svg>
                <a href="tel:+381113334555">+381 11 333 4 555</a>
            </div>
            <div>
                <svg class="icon">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-footer-fax"></use>
                </svg>
                <a href="tel:+381113334556">+381 11 333 4 556</a>
            </div>
            <div class="line"></div>
            <div>
                <svg class="icon">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-footer-email"></use>
                </svg>
                <a href="mailto:redakcija@blic.rs">redakcija@blic.rs</a>
            </div>
            <div>
                <svg class="icon">
                    <use xlink:href="../../../static/sprite.svg?v=27#sprite-footer-email"></use>
                </svg>
                <a href="mailto:redakcija_blic@ringier.rs">redakcija_blic@ringier.rs</a>
            </div>
        </div>
    </div>

    <div class="mobile-desktop-switcher">
        <a href="#" id="switch-mobile">
            <svg class="icon">
                <use xlink:href="../../../static/sprite.svg?v=27#sprite-mobile"></use>
            </svg>
            Mobilna verzija sajta
        </a>
    </div>

    <div class="footer__bottom">
        <div class="footer__logo">
            <a href="/">
                <picture>
                    <source type="image/webp" srcset="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/img/logo_x2.webp">
                    <img width="4" height="3" src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/img/logo_x2.png" alt="Blic" />
                </picture>
            </a>
        </div>
        <div class="footer__about">
            <ul>
                <li><a href="https://www.blic.rs/vesti/marketing/g20x3sg">Marketing</a></li>
                <li><a href="https://www.blic.rs/vesti/ringier-axel-springer-doo/ehq9gsn">Impressum</a></li>
                <li><a href="https://www.blic.rs/vesti/pravila-i-uslovi-koriscenja-sajta/2e8nb4j">Pravila i uslovi korišćenja</a></li>
            </ul>
        </div>
        <div class="footer__social">
            <ul>
                <li>
                    <a href="https://rs.linkedin.com/company/ringier-serbia" target="_blank" aria-label="Blic" rel="noreferrer">
                        <svg class="icon sprite-linkedin">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-linkedin"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@Bliconline1" target="_blank" aria-label="Blic" rel="noreferrer">
                        <svg class="icon sprite-youtube">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-youtube"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/Blic.rs/" target="_blank" aria-label="Blic" rel="noreferrer">
                        <svg class="icon sprite-facebook">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-facebook"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/blic_online" target="_blank" aria-label="Blic" rel="noreferrer">
                        <svg class="icon sprite-twitter">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-twitter-x"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/blic.rs/" target="_blank" aria-label="Blic" rel="noreferrer">
                        <svg class="icon sprite-instagram">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-instagram"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@blic.tiktok" target="_blank" aria-label="Blic" rel="noreferrer">
                        <svg class="icon sprite-tiktok">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-tiktok"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.blic.rs/rss" target="_blank" aria-label="Blic RSS">
                        <svg class="icon sprite-rss">
                            <use xlink:href="../../../static/sprite.svg?v=27#sprite-rss"></use>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://news.google.com/publications/CAAiEPSa46r4AkUjcaud9FX33woqFAgKIhD0muOq-AJFI3GrnfRV998K?ceid=RS:sr&oc=3" target="_blank" aria-label="Google news" data-run-module="local/common/ga4Events/googleNewsFollowEvent.init">
                        <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="36" height="29.6471" fill="url(#pattern0)"/>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_42_1121" transform="translate(-0.00315878) scale(0.00196546 0.00238663)"/>
                                </pattern>
                                <image id="image0_42_1121" width="512" height="419" xlink:href="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer__by">1996 - 2024 © - Ringier Serbia d.o.o</div>

</div>

<script defer async src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/js/libs/lazysizes.min.js"></script>
<script defer async src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/js/libs/ls.unveilhooks.min.js"></script>
<script defer async src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/js/libs/smooth.scroll.min.js"></script>
        </footer>

        <script src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/desktop/carousel.bundle.js" defer async></script>

    
        <iframe srcdoc="<script src='https://cdn.performax.cz/acc/loader.js?aab=loader'></script>" style="display: none" data-web="blic.rs" data-hash="b00fa095514acc45045088af26d47945"></iframe>
    

    </body>
</html>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"/>
                            </defs>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer__by">1996 - 2024 © - Ringier Serbia d.o.o</div>

</div>

<script defer async src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/js/libs/lazysizes.min.js"></script>
<script defer async src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/js/libs/ls.unveilhooks.min.js"></script>
<script defer async src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/js/libs/smooth.scroll.min.js"></script>
        </footer>

        <script src="//ocdn.eu/ucs/static/blicperun/e77afe686e76f3bffc0b43e0bebe0e53/desktop/carousel.bundle.js" defer async></script>

    
        <iframe srcdoc="<script src='https://cdn.performax.cz/acc/loader.js?aab=loader'></script>" style="display: none" data-web="blic.rs" data-hash="b00fa095514acc45045088af26d47945"></iframe>
    

    </body>
</html>