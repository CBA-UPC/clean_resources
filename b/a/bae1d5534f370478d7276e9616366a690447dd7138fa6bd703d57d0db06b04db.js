
           (function () {
    var pvs = window.top.location == window.self.location ? 1 : 2;
    var pvid=getPVID();
    var hitDone=false;
    var sf2=null;
    if (window.DotMetricsInitScript == undefined) {
        window.DotMetricsInitScript = true;

        checkTCF(start);

        function NewDotMetricsLoad(DotMetricsContentLoadedFunction) {
            if (document.readyState != undefined && document.readyState != 'loading') {
                setTimeout(function () {
                    DotMetricsContentLoadedFunction();
                }, 100);
            } else if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', DotMetricsContentLoadedFunction, false);
            } else if (document.attachEvent) {
                document.attachEvent('onreadystatechange', DotMetricsContentLoadedFunction);
            } else if (window.addEventListener) {
                window.addEventListener('load', DotMetricsContentLoadedFunction, false);
            } else if (window.attachEvent) {
                window.attachEvent('onload', DotMetricsContentLoadedFunction);
            }
            if (window.location.href.indexOf('dotmetrics_debug=true') >= 0){
                DotMetricsContentLoadedFunction();
            }
        }

        function checkTCF(callback){
            //if cmp uses TCF __tcfapi function must exist
            if(typeof __tcfapi == 'function'){
                var lr=false;
                __tcfapi('addEventListener', 2, function(tcData, success){
                    if(success){
                        if(lr==true){return;}

                        if(tcData.gdprApplies==true){
                            //if tcloaded event or user interaction with tcf is complete (useractioncomplete) check for consent
                            if(tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete'){
                                //make sure that event is handled only once regardless of removeEventListener
                                lr=true;

                                //stop listening for TCF events
                                __tcfapi('removeEventListener', 2,function(success){},tcData.listenerId);

                                if(typeof tcData.specialFeatureOptins != 'undefined' && typeof tcData.specialFeatureOptins[2] != 'undefined'){
                                    sf2=tcData.specialFeatureOptins[2];
                                }

                                //check for vendor consent, Dotmetrics vendor id 896
                                if(typeof tcData.vendor != 'undefined' && typeof tcData.vendor.consents != 'undefined' && tcData.vendor.consents[896]==true){
                                    //we have user consent
                                    callback(true);
                                }else{
                                    //we dont have user consent
                                    callback(false);
                                }
                            }
                            //This is the event status whenever the UI is surfaced or re-surfaced to a user.
                            if(tcData.eventStatus === 'cmpuishown'){
                                lr=true;
                                callback(false);
                            }
                        }else if(tcData.gdprApplies==false){
                            lr=true;
                            callback(true);
                        }else{
                            lr=true;
                            callback(false);
                        }
                    }
                });
            }else{
                //cmp does not use TCF
                callback(true);
            }
        }

        function start(hasConsent){
            var rand=new Date().getTime();
            var domain = window.location.hostname;
            var pageUrl = encodeURIComponent(window.location);
            var fbia= navigator.userAgent.toLowerCase().indexOf('fbia')>=0;
            var tzOffset= new Date().getTimezoneOffset();
            var doorUrl = 'http%3a%2f%2fuk-script.dotmetrics.net%2fdoor.js%3fd%3dwww.bbc.com%26t%3dgnlcapital';
            var domainCookie = getDomainCookie(false);

            if(fbia){pvs=1;}

            if(!hitDone){
                var dcOpt='';
                var imgUrl = 'https://uk-script.dotmetrics.net/hit.gif?id=13934&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = function (){im.onload=null};

                var panelImgUrl = 'https://rm-script.dotmetrics.net/hit.gif?id=13934&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset;
                var panelIm = new Image;
                panelIm.src = panelImgUrl;
                panelIm.onload = function (){panelIm.onload=null};
                hitDone=true;
            }

            if(pvs==2){return;}

            NewDotMetricsLoad(function () {
                if (document.createElement) {
                    if (typeof window.DotMetricsSettings == 'undefined') {
                        window.DotMetricsSettings =
                                    {
                                        CurrentPage: window.location,
                                        Debug: false,
                                        DataUrl: 'https://uk-script.dotmetrics.net/SiteEvent.dotmetrics',
                                        PostUrl: 'https://uk-script.dotmetrics.net/DeviceInfo.dotmetrics',
                                        ScriptUrl:  'https://uk-script.dotmetrics.net/Scripts/script.js?v=247',
                                        ScriptDebugUrl:  'https://download.dotmetrics.net/Script/script.debug.js?v=721297c2-ef2a-45c3-af7b-78a855b24092',
                                        PingUrl: 'https://uk-script.dotmetrics.net/Ping.dotmetrics',
                                        AjaxEventUrl: 'https://uk-script.dotmetrics.net/AjaxEvent.dotmetrics',
                                        NCSScriptUrl: 'https://uk-script.dotmetrics.net/Scripts/ncs-script.js?v=247',
                                        NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=f5176d4a-238f-42b8-9170-6e9ca7969ab1',
                                        NCSHitUrl: 'https://uk-script.dotmetrics.net/unconsentedvideohit.gif',
                                        SiteSectionId: 13934,
                                        SiteId: 1778,
                                        FlashUrl: 'https://uk-script.dotmetrics.net/DotMetricsFlash.swf',
                                        TimeOnPage: 'DotMetricsTimeOnPage',
                                        AjaxEventTimeout: 500,
                                        AdexEnabled: false,
                                        AdexConfigUrl: 'https://script.api/DotMetrics.Script.Adex/adexConfig.js?v=247&id=13934',
                                        BeaconUrl: 'https://uk-script.dotmetrics.net/BeaconEvent.dotmetrics',
                                        PVID:pvid,
                                        DomainCookie:'00000000-0000-0000-0000-000000000000',
                                        VideoTrackingEnabled: true,
                                        ErrorEventUrl: 'https://uk-script.dotmetrics.net/ErrorEvent.dotmetrics'
                                    };

                        var scriptUrl;
                        var scriptType;
                        if(hasConsent==false){
                            if(window.DotMetricsSettings.VideoTrackingEnabled==true){
                                scriptType=window.location.href.indexOf('dotmetrics_debug=true') >= 0 ? 'NCSScriptDebugUrl' : 'NCSScriptUrl';
                                scriptUrl = window.DotMetricsSettings[scriptType];
                            }
                        }else{
                            scriptType=window.location.href.indexOf('dotmetrics_debug=true') >= 0 ? 'ScriptDebugUrl' : 'ScriptUrl';
                            scriptUrl = window.DotMetricsSettings[scriptType];
                        }

                        if(typeof scriptUrl != 'undefined'){
                            var fileref = document.createElement('script');
                                fileref.setAttribute('type', 'text/javascript');
                                fileref.setAttribute('src', scriptUrl);
                                fileref.setAttribute('async', 'async');
                                if (typeof fileref != 'undefined') {
                                    document.getElementsByTagName('head')[0].appendChild(fileref);
                                }
                        }

                        window.postMessage({ type: 'DotmetricsDoorEvent', siteId: DotMetricsSettings.SiteId, sectionId: DotMetricsSettings.SiteSectionId},'*');

                        

                        if(hasConsent!=false && window.DotMetricsSettings.AdexEnabled){
	                        fileref = document.createElement('script');
	                        fileref.setAttribute('type', 'text/javascript');
	                        fileref.setAttribute('src', window.DotMetricsSettings.AdexConfigUrl);
	                        fileref.setAttribute('async', 'async');
	                        if (typeof fileref != 'undefined') {
	                             document.getElementsByTagName('head')[0].appendChild(fileref);
                            }
                        }
                    }
                }
            });
        }
    }
    function getPVID(){
        var pvid;
        try{
            if(crypto.randomUUID){
                pvid=crypto.randomUUID();
            }else{
                pvid=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
            }
        }catch(e){
            pvid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 24));
        }
        return pvid;
    }
    function getDomainCookie(hasConsent){
        var ndc='9ca1dd08-2f40-4119-b925-79d1d38ea2f3';
        if(!hasConsent){return ndc;}
        var cn='DotMetrics.DomainCookie';
        var pairs = document.cookie.split(';'), pair, result = null;
        for (var index = 0, len = pairs.length; index < len; ++index) {
            pair = pairs[index].split('=');
            pair[0] = pair[0].replace(/^\s+|\s+$/, '');
            if(pair[0]==cn){updateDomainCookie(cn,pair[1]);return pair[1];}
        }
        if(window.localStorage){
            try{
                var lsDc=window.localStorage.getItem(cn);
                if(lsDc){ updateDomainCookie(cn,lsDc); return lsDc; }
            }catch(e) {}
        }
        updateDomainCookie(cn,ndc);
        return ndc;
    }
    function updateDomainCookie(cn,ndc){
        var exdate = new Date();exdate.setFullYear(exdate.getFullYear() + 1);
        var value = ndc+'; expires='+exdate.toUTCString()+';path=/;secure;';
        document.cookie = cn + '=' + value + ';path=/;secure;';
        if(window.localStorage){
            try{ window.localStorage.setItem(cn,ndc); }catch(e) {}
        }
    }
})(window);},853:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(1),l=r.n(i),o=r(831),s=r(832),c=r(830);r(724);var m=function(e){var t=e.id,r=e.containerClassName,a=e.maxCollectionSize,i=e.promos,l=e.title,c=e.TitleElement,m=e.standard;return n.a.createElement(o.f,{containerClassName:r,collectionClassName:m?"standard":"",id:t,TitleElement:c,title:l},i.slice(0,a).map((function(e){var r=e.id,a=e.imageId,i=e.title,o=e.synopsis,c=e.subtitle,u=e.type,p=e.url,d=e.servingsText,g=void 0===d?"":d,f=e.prepTime,y=void 0===f?"":f,b=e.cookingTime,v=void 0===b?"":b;return n.a.createElement("div",{key:r,className:"gel-layout__item gel-1/2 gel-1/4@xl"},n.a.createElement(s.a,{collectionId:t,collectionTitle:l,id:r,imageId:a,synopsis:o,subtitle:c,title:i,type:u,url:p,servingsText:g,prepTime:y,cookingTime:v,standard:m}))})))};m.propTypes={id:l.a.string,containerClassName:l.a.string,maxCollectionSize:l.a.number,promos:l.a.arrayOf(l.a.shape(c.b)).isRequired,title:l.a.string,TitleElement:l.a.node,standard:l.a.bool},m.defaultProps={id:void 0,containerClassName:void 0,maxCollectionSize:16,title:"",TitleElement:"h2",standard:!0},t.a=m},856:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(1),l=r.n(i),o=r(854),s=r.n(o),c=r(831),m=r(832),u=r(830);r(726);var p=function(e){var t=e.id,r=e.maxCollectionSize,a=e.promos,i=e.title,l=e.TitleElement;return n.a.createElement(c.f,{collectionClassName:"standard-6-promos",id:t,TitleElement:l,title:i},a.slice(0,r).map((function(e){var r=e.id,a=e.imageId,l=e.title,o=e.synopsis,c=e.subtitle,u=e.type,p=e.url;return n.a.createElement("div",{key:r,className:"gel-layout__item gel-1/2 gel-1/3@m gel-1/2@xl gel-1/3@xxl"},n.a.createElement(m.a,{extraClasses:{content:s()(a)?"gel-1/1":"gel-1/1 gel-1/2@xl",image:"gel-1/1 gel-1/2@xl",type:"promo__type-right@xl"},collectionId:t,collectionTitle:i,id:r,imageId:a,synopsis:o,subtitle:c,title:l,type:u,url:p}))})))};p.propTypes={id:l.a.string.isRequired,maxCollectionSize:l.a.number,promos:l.a.arrayOf(l.a.shape(u.b)).isRequired,title:l.a.string.isRequired,TitleElement:l.a.node},p.defaultProps={maxCollectionSize:6,TitleElement:"h2"},t.a=p},857:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(1),l=r.n(i),o=r(829),s=r.n(o),c=r(843),m=r(830),u=r(836);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==p(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===p(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(727);var y=function(e){var t=e.chef,r=e.className,a=e.footer,i=e.imageId,l=e.links,o=e.occasionSubtitle,m=e.subtitle,p=e.synopsis,d=e.title,g=e.type,f=e.url;return n.a.createElement("div",{className:s()("gel-wrap promo-hero",r)},n.a.createElement("div",{className:"gel-layout gel-layout--flush"},n.a.createElement("div",{className:"gel-layout__item gel-2/3@l"},n.a.createElement("a",{href:f},n.a.createElement(c.a,{src:i}))),n.a.createElement("div",{className:s()("gel-layout__item","gel-1/3@l","promo-hero__text-section",g&&"padding-bottom")},n.a.createElement("div",{className:"gel-wrap"},n.a.createElement("div",{className:"gel-layout"},n.a.createElement("div",{className:"gel-layout__item"},n.a.createElement("div",{className:"promo-hero__title"},n.a.createElement("a",{className:"gel-trafalgar-bold promo-hero__link",href:f},d)),t&&n.a.createElement("span",{className:"gel-great-primer promo-hero__chef"},"by ".concat(t)),o&&n.a.createElement("h3",{className:"gel-great-primer promo-hero__subtitle"},o),p&&n.a.createElement(u.a,{text:p,className:"gel-pica promo-hero__synopsis"}),m&&n.a.createElement("h3",{className:"gel-great-primer promo-hero__subtitle"},m),l&&n.a.createElement("ul",{className:"promo-hero__sublinks"},l.map((function(e){var t=e.href,r=e.text;return n.a.createElement("li",{key:t,className:"promo-hero__sublinks-item"},n.a.createElement("a",{className:"gel-pica promo-hero__link",href:t},r))}))),a&&n.a.createElement("div",{className:"promo-hero__footer"},n.a.createElement("span",{className:"gel-pica-bold"},"See ",n.a.createElement("a",{className:"promo-hero__link",href:a.href},a.text))," (".concat(a.totalCount,")"))))),g&&n.a.createElement("span",{className:"gel-long-primer promo-hero__type"},g))))};y.propTypes=g(g({},m.a),{},{className:l.a.string}),y.defaultProps={className:void 0},t.a=y}}]);
//# sourceMappingURL=indexPage-Page.9d8c62d8.js.map