
           (function () {
    var pvs = window.top.location == window.self.location ? 1 : 2;
    var pvid=getPVID();
    var hitDone=false;
    var sf2=null;
    if (window.DotMetricsInitScript == undefined) {
        window.DotMetricsInitScript = true;

        start(true);

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
            var tzOffset= new Date().getTimezoneOffset();
            var doorUrl = 'http%3a%2f%2fscript.dotmetrics.net%2fdoor.js%3fid%3d4718';

            var domainCookieEnabled = true;
            var useDomainCookie = hasConsent && domainCookieEnabled;
            var domainCookie = getDomainCookie(useDomainCookie);

            if(!hitDone){
                var dcOpt = useDomainCookie ? '&dc=' + domainCookie : '';
                var imgUrl = 'https://script.dotmetrics.net/hit.gif?id=4718&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = function (){im.onload=null};

                
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
                                        DataUrl: 'https://script.dotmetrics.net/SiteEvent.dotmetrics',
                                        PostUrl: 'https://script.dotmetrics.net/DeviceInfo.dotmetrics',
                                        ScriptUrl:  'https://script.dotmetrics.net/Scripts/script.js?v=256',
                                        ScriptDebugUrl:  'https://download.dotmetrics.net/Script/script.debug.js?v=a0c45729-849b-4d63-94a3-0b7faab59d1e',
                                        PingUrl: 'https://script.dotmetrics.net/Ping.dotmetrics',
                                        AjaxEventUrl: 'https://script.dotmetrics.net/AjaxEvent.dotmetrics',
                                        ExpFPEventUrl: 'https://script.dotmetrics.net/ExpFP.dotmetrics',
                                        NCSScriptUrl: 'https://script.dotmetrics.net/Scripts/ncs-script.js?v=256',
                                        NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=039c0672-ca25-465d-b7ac-15f609ddcd47',
                                        NCSHitUrl: 'https://script.dotmetrics.net/unconsentedvideohit.gif',
                                        SiteSectionId: 4718,
                                        SiteId: 93,
                                        FlashUrl: 'https://script.dotmetrics.net/DotMetricsFlash.swf',
                                        TimeOnPage: 'DotMetricsTimeOnPage',
                                        AjaxEventTimeout: 500,
                                        AdexEnabled: true,
                                        AdexConfigUrl: 'https://adex.dotmetrics.net/adexConfig.js?v=256&id=4718',
                                        BeaconUrl: 'https://script.dotmetrics.net/BeaconEvent.dotmetrics',
                                        PVID:pvid,
                                        DomainCookie: domainCookie,
                                        VideoTrackingEnabled: true,
                                        ErrorEventUrl: 'https://script.dotmetrics.net/ErrorEvent.dotmetrics'
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
        var ndc='8e77b40e-98fa-4287-adcc-4fd695c49d58';
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
})(window););