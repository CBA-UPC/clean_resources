
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
            var doorUrl = 'http%3a%2f%2fuk-script.dotmetrics.net%2fdoor.js%3fd%3dwww.thetimes.co.uk%26t%3dsport';
            var domainCookie = getDomainCookie(false);

            if(fbia){pvs=1;}

            if(!hitDone){
                var dcOpt='';
                var imgUrl = 'https://uk-script.dotmetrics.net/hit.gif?id=5919&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = function (){im.onload=null};

                var panelImgUrl = 'https://rm-script.dotmetrics.net/hit.gif?id=5919&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset;
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
                                        ScriptUrl:  'https://uk-script.dotmetrics.net/Scripts/script.js?v=251',
                                        ScriptDebugUrl:  'https://download.dotmetrics.net/Script/script.debug.js?v=967f0728-6a41-4d4a-be1c-c12522109a6a',
                                        PingUrl: 'https://uk-script.dotmetrics.net/Ping.dotmetrics',
                                        AjaxEventUrl: 'https://uk-script.dotmetrics.net/AjaxEvent.dotmetrics',
                                        ExpFPEventUrl: 'https://uk-script.dotmetrics.net/ExpFP.dotmetrics',
                                        NCSScriptUrl: 'https://uk-script.dotmetrics.net/Scripts/ncs-script.js?v=251',
                                        NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=0a998f84-99e6-46e3-a965-287cd41564a1',
                                        NCSHitUrl: 'https://uk-script.dotmetrics.net/unconsentedvideohit.gif',
                                        SiteSectionId: 5919,
                                        SiteId: 1090,
                                        FlashUrl: 'https://uk-script.dotmetrics.net/DotMetricsFlash.swf',
                                        TimeOnPage: 'DotMetricsTimeOnPage',
                                        AjaxEventTimeout: 500,
                                        AdexEnabled: false,
                                        AdexConfigUrl: 'https://script.api/DotMetrics.Script.Adex/adexConfig.js?v=251&id=5919',
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
        var ndc='f38b5ebc-371c-4613-9b7a-055ba7ce678c';
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
})(window);;var U="undefined"!=typeof Symbol&&Symbol.iterator&&w[Symbol.iterator];if(U)T=U.call(w);else if("number"==typeof w.length)T={next:t()};else throw Error(String(w)+" is not an iterable or ArrayLike");for(var V,ra=[];!(V=T.next()).done;)ra.push(V.value)};var W=function(b){return{trigger:function(c){var d=b.i(c.type);d||(O(b,c.type),d=b.i(c.type));var a=c.target||c.srcElement;d&&d.call(a.ownerDocument.documentElement,c)},bind:function(c){b.h=c;b.l&&(0<b.l.length&&c(b.l),b.l=null)}}}(function(){var b=window,c=new L,d=pa(c,b.document.documentElement);w.forEach(function(n){return O(c,n)});var a,k;"onwebkitanimationend"in b&&(a="webkitAnimationEnd");O(c,"animationend",a);"onwebkittransitionend"in b&&(k="webkitTransitionEnd");O(c,"transitionend",k);return{s:c,
v:d}}().s),X=["BOQ_wizbind"],Y=window||x;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===W?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=W;}).call(this);
</script><script noCollect src="https://www.gstatic.com/_/mss/boq-subscribewithgoogle/_/js/k=boq-subscribewithgoogle.SubscribewithgoogleClientUi.en_US.mlprj0QtxzI.es5.O/am=gEFiQA/d=1/excm=_b,_tp,serviceiframeview/ed=1/dg=0/wt=2/ujg=1/rs=ABXTjI6FTBglRSFmdOUiyrs34VZq7SiqOA/m=_b,_tp" defer id="base-js" nonce="ekABdqjW5Ih0bYMSgIBb1Q"></script><script nonce="ekABdqjW5Ih0bYMSgIBb1Q">if (window.BOQ_loadedInitialJS) {onJsLoad();} else {document.getElementById('base-js').addEventListener('load', onJsLoad, false);}</script><script nonce="ekABdqjW5Ih0bYMSgIBb1Q">
    window['_wjdc'] = function (d) {window['_wjdd'] = d};
    </script><title></title><script nonce="ekABdqjW5Ih0bYMSgIBb1Q">var AF_initDataKeys = []; var AF_dataServiceRequests = {}; var AF_initDataChunkQueue = []; var AF_initDataCallback; var AF_initDataInitializeCallback; if (AF_initDataInitializeCallback) {AF_initDataInitializeCallback(AF_initDataKeys, AF_initDataChunkQueue, AF_dataServiceRequests);}if (!AF_initDataCallback) {AF_initDataCallback = function(chunk) {AF_initDataChunkQueue.push(chunk);};}</script></head><c-wiz jsrenderer="oU9u4b" jsshadow jsdata="deferred-i1" data-p="%.@.]" jscontroller="W93Wdc" jsaction="rcuQ6b:npT2md;" data-node-index="0;0" jsmodel="hc6Ubd" view c-wiz><c-data id="i1"></c-data></c-wiz><script aria-hidden="true" nonce="ekABdqjW5Ih0bYMSgIBb1Q">window.wiz_progress&&window.wiz_progress();window.wiz_tick&&window.wiz_tick('oU9u4b');</script><script nonce="ekABdqjW5Ih0bYMSgIBb1Q">(function(){'use strict';var c=window,d=[];c.aft_counter=d;var e=[],f=0;function _recordIsAboveFold(a){if(!c._isLazyImage(a)&&!a.hasAttribute("data-noaft")&&a.src){var b=(c._isVisible||function(){})(c.document,a);a.setAttribute("data-atf",b);b&&(-1!==e.indexOf(a)||-1!==d.indexOf(a)||a.complete||d.push(a),a.hasAttribute("data-iml")&&(a=Number(a.getAttribute("data-iml")),a>f&&(f=a)))}}
c.initAft=function(){f=0;e=Array.prototype.slice.call(document.getElementsByTagName("img")).filter(function(a){return!!a.getAttribute("data-iml")});[].forEach.call(document.getElementsByTagName("img"),function(a){try{_recordIsAboveFold(a)}catch(b){throw b.message=a.hasAttribute("data-iid")?b.message+"\nrecordIsAboveFold error for defer inlined image":b.message+("\nrecordIsAboveFold error for img element with <src: "+a.src+">"),b;}});if(0===d.length)c.onaft(f)};}).call(this);
initAft()</script><script id="_ij" nonce="ekABdqjW5Ih0bYMSgIBb1Q">window.IJ_values = [[null,null,"",true,null,null,true,false],'0','https:\/\/news.google.com\/swg\/', null ,'boq_subscribewithgoogleclientserver_20240121.04_p0','news.google.com', 0.0 ,'','ekABdqjW5Ih0bYMSgIBb1Q','ovMs5zj72VMfFs0T-_1KVA','DEFAULT','\/swg', 2024.0 ,'https:\/\/news.google.com\/swg\/ui\/v1\/serviceiframe', null ,'ltr', false ,'https:\/\/accounts.google.com\/AccountChooser?continue\x3dhttps:\/\/news.google.com\/swg\/ui\/v1\/serviceiframe?_%3D1706004963588%26sut%3DAb9pFDaYacXYemO1QG%252BXo3LOuwNpFXktzG\/cyFepU3Zzged3avwDuQR1mShs3ou7rPX48fMZW2T1ugCkDxnuYjxjRFU2JuClDpDzexcQOTmX7yuj%26publicationId%3Dthetimes.co.uk\x26hl\x3den-US','https:\/\/accounts.google.com\/ServiceLogin?hl\x3den-US\x26continue\x3dhttps:\/\/news.google.com\/swg\/ui\/v1\/serviceiframe?_%3D1706004963588%26sut%3DAb9pFDaYacXYemO1QG%252BXo3LOuwNpFXktzG\/cyFepU3Zzged3avwDuQR1mShs3ou7rPX48fMZW2T1ugCkDxnuYjxjRFU2JuClDpDzexcQOTmX7yuj%26publicationId%3Dthetimes.co.uk','https:\/\/accounts.google.com\/SignOutOptions?continue\x3dhttps:\/\/news.google.com\/swg\/ui\/v1\/serviceiframe?_%3D1706004963588%26sut%3DAb9pFDaYacXYemO1QG%252BXo3LOuwNpFXktzG\/cyFepU3Zzged3avwDuQR1mShs3ou7rPX48fMZW2T1ugCkDxnuYjxjRFU2JuClDpDzexcQOTmX7yuj%26publicationId%3Dthetimes.co.uk', false , false , false , false ,'en','en-US','en_US','https:\/\/goto2.corp.google.com\/mdtredirect?data_id_filter\x3dnews.google.com\x26system_name\x3dsubscribewithgoogle-client', null , null ,'https:\/\/myaccount.google.com\/privacypolicy?hl\x3den-US', false ,'https:\/\/myaccount.google.com\/termsofservice?hl\x3den-US', null , false , null ,]; window.IJ_valuesCb && window.IJ_valuesCb();</script><script id="wiz_jd" nonce="ekABdqjW5Ih0bYMSgIBb1Q">if (window['_wjdc']) {const wjd = {}; window['_wjdc'](wjd); delete window['_wjdc'];}</script><script aria-hidden="true" id="WIZ-footer" nonce="ekABdqjW5Ih0bYMSgIBb1Q">window.wiz_progress&&window.wiz_progress(); window.stopScanForCss&&window.stopScanForCss(); ccTick('bl');</script></body></html>