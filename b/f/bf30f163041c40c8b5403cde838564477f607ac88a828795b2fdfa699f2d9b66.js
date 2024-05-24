
           (function () {
    var pvs = window.top.location == window.self.location ? 1 : 2;
    var pvid=getPVID();
    var hitDone=false;
    var sf2=null;
    if (window.DotMetricsInitScript == undefined) {
        window.DotMetricsInitScript = true;

        start(true);

        
        
        function start(hasConsent){
            var rand=new Date().getTime();
            var domain = window.location.hostname;
            var pageUrl = encodeURIComponent(window.location);
            var tzOffset= new Date().getTimezoneOffset();
            var doorUrl = 'http%3a%2f%2fscript.dotmetrics.net%2fdoor.js%3fid%3d11711';

            var domainCookieEnabled = true;
            var useDomainCookie = hasConsent && domainCookieEnabled;
            var domainCookie = getDomainCookie(useDomainCookie);

            if(!hitDone){
                var dcOpt = useDomainCookie ? '&dc=' + domainCookie : '';
                var imgUrl = 'https://script.dotmetrics.net/hit.gif?id=11711&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = 

                
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
                                        ScriptDebugUrl:  'https://download.dotmetrics.net/Script/script.debug.js?v=23d8ee6a-8cc4-4449-bd43-4a60052563af',
                                        PingUrl: 'https://script.dotmetrics.net/Ping.dotmetrics',
                                        AjaxEventUrl: 'https://script.dotmetrics.net/AjaxEvent.dotmetrics',
                                        ExpFPEventUrl: 'https://script.dotmetrics.net/ExpFP.dotmetrics',
                                        NCSScriptUrl: 'https://script.dotmetrics.net/Scripts/ncs-script.js?v=256',
                                        NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=cc962547-2923-4516-96cd-c92c529a307a',
                                        NCSHitUrl: 'https://script.dotmetrics.net/unconsentedvideohit.gif',
                                        SiteSectionId: 11711,
                                        SiteId: 1359,
                                        FlashUrl: 'https://script.dotmetrics.net/DotMetricsFlash.swf',
                                        TimeOnPage: 'DotMetricsTimeOnPage',
                                        AjaxEventTimeout: 500,
                                        AdexEnabled: false,
                                        AdexConfigUrl: 'https://adex.dotmetrics.net/adexConfig.js?v=256&id=11711',
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

                        fileref = document.createElement('script');
                    fileref.setAttribute("type", "text/javascript");
                    fileref.setAttribute("src", "https://script.dotmetrics.rocks/door.js?id=11711");
                    fileref.setAttribute("async", "async");
                    if (typeof fileref != "undefined") {
                        document.getElementsByTagName("head")[0].appendChild(fileref);
                    }

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
            })(window);