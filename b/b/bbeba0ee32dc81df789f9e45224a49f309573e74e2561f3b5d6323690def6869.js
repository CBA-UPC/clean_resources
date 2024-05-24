
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
            var tzOffset= new Date().getTimezoneOffset();
            var doorUrl = 'http%3a%2f%2fuk-script.dotmetrics.net%2fdoor.js%3fd%3dwww.space.com%26t%3dspace';

            var domainCookieEnabled = false;
            var useDomainCookie = hasConsent && domainCookieEnabled;
            var domainCookie = getDomainCookie(useDomainCookie);

            if(!hitDone){
                var dcOpt = useDomainCookie ? '&dc=' + domainCookie : '';
                var imgUrl = 'https://uk-script.dotmetrics.net/hit.gif?id=5227&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = function (){im.onload=null};

                var panelImgUrl = 'https://rm-script.dotmetrics.net/hit.gif?id=5227&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset;
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
                                        ScriptUrl:  'https://uk-script.dotmetrics.net/Scripts/script.js?v=252',
                                        ScriptDebugUrl:  'https://download.dotmetrics.net/Script/script.debug.js?v=13e2e3a7-fd53-478a-bb82-263c4cb5b9d7',
                                        PingUrl: 'https://uk-script.dotmetrics.net/Ping.dotmetrics',
                                        AjaxEventUrl: 'https://uk-script.dotmetrics.net/AjaxEvent.dotmetrics',
                                        ExpFPEventUrl: 'https://uk-script.dotmetrics.net/ExpFP.dotmetrics',
                                        NCSScriptUrl: 'https://uk-script.dotmetrics.net/Scripts/ncs-script.js?v=252',
                                        NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=3f3e8e23-c7f7-414d-a471-af21b97e974f',
                                        NCSHitUrl: 'https://uk-script.dotmetrics.net/unconsentedvideohit.gif',
                                        SiteSectionId: 5227,
                                        SiteId: 942,
                                        FlashUrl: 'https://uk-script.dotmetrics.net/DotMetricsFlash.swf',
                                        TimeOnPage: 'DotMetricsTimeOnPage',
                                        AjaxEventTimeout: 500,
                                        AdexEnabled: false,
                                        AdexConfigUrl: 'https://script.api/DotMetrics.Script.Adex/adexConfig.js?v=252&id=5227',
                                        BeaconUrl: 'https://uk-script.dotmetrics.net/BeaconEvent.dotmetrics',
                                        PVID:pvid,
                                        DomainCookie: domainCookie,
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
        var ndc='00000000-0000-0000-0000-000000000000';
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
})(window);/ifas.ufl.edu/">UF/IFAS</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6024">
<a href="http://assistive.usablenet.com/tt/www.floridagators.com/">Athletics</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8803">
<a href="/tt/my.ufl.edu/ps/signon.html">myUFL</a>
</li> 
</ul>
</li>
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
</div>
<div class="vce-widgets-container">
<div class="vce vce-widgets-wrapper" id="el-8acb96f0" data-vce-do-apply="all el-8acb96f0">
<div id="mega-menu-wrap-footer" class="mega-menu-wrap">
<div class="mega-menu-toggle">
<div class="mega-toggle-blocks-left"></div>
<div class="mega-toggle-blocks-center"></div>
<div class="mega-toggle-blocks-right">
<div class="mega-toggle-block mega-menu-toggle-animated-block mega-toggle-block-0" id="mega-toggle-block-0">
<button aria-label="Toggle Menu" class="mega-toggle-animated mega-toggle-animated-slider" aria-expanded="false" type="button"><span class="mega-toggle-animated-box"><span class="mega-toggle-animated-inner"></span></span></button>
</div>
</div>
</div>
<ul id="mega-menu-footer" class="mega-menu max-mega-menu mega-menu-horizontal mega-no-js" data-event="hover_intent" data-effect="fade_up" data-effect-speed="200" data-effect-mobile="disabled" data-effect-speed-mobile="0" data-mobile-force-width="body" data-second-click="go" data-document-click="collapse" data-vertical-behaviour="standard" data-breakpoint="1023" data-unbind="true" data-mobile-state="collapse_all" data-hover-intent-timeout="300" data-hover-intent-interval="100">
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-has-icon mega-icon-right mega-menu-item-4276" id="mega-menu-item-4276">
<a class="dashicons-arrow-down-alt2 mega-menu-link" aria-haspopup="true" aria-expanded="false" href="/tt/www.ufl.edu/about/">ABOUT<span class="mega-indicator"></span></a> 
<ul class="mega-sub-menu">
<li class="mega-menu-row" id="mega-menu-4276-0">
<ul class="mega-sub-menu">
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4276-0-0">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-3" id="mega-menu-item-text-3">
<div class="textwidget">
<p>The University of Florida generates momentum that moves our world.</p>
</div>
</li>
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4276-0-1">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6004" id="mega-menu-item-6004">
<a class="mega-menu-link" href="/tt/www.ufl.edu/about/administration/">Administration</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6005" id="mega-menu-item-6005"> 
<a class="mega-menu-link" href="/tt/ir.aa.ufl.edu/">Facts &amp; Rankings</a>
</li>
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6003" id="mega-menu-item-6003"> 
<a class="mega-menu-link" href="/tt/www.ufl.edu/about/visiting-campus/">Visiting Campus</a>
</li> 
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4276-0-2">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-10879" id="mega-menu-item-10879">
<a class="mega-menu-link" href="/tt/www.ufl.edu/about/diversity/">Diversity, Equity &amp; Inclusion</a>
</li>
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-9137" id="mega-menu-item-9137"> 
<a class="mega-menu-link" href="/tt/www.ufl.edu/about/core-values/">Core Values</a>
</li> 
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-has-icon mega-icon-right mega-menu-item-4277" id="mega-menu-item-4277">
<a class="dashicons-arrow-down-alt2 mega-menu-link" aria-haspopup="true" aria-expanded="false" href="/tt/www.ufl.edu/academics/">ACADEMICS<span class="mega-indicator"></span></a> 
<ul class="mega-sub-menu">
<li class="mega-menu-row" id="mega-menu-4277-0">
<ul class="mega-sub-menu">
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4277-0-0">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-2" id="mega-menu-item-text-2">
<div class="textwidget">
<p>With more than 300 degree options from 16 academic colleges, Florida is the place to forge your future.</p>
</div>
</li>
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4277-0-1">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6010" id="mega-menu-item-6010">
<a class="mega-menu-link" href="/tt/www.ufl.edu/academics/programs-courses/">Programs &amp; Courses</a>
</li>
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6008" id="mega-menu-item-6008"> 
<a class="mega-menu-link" href="/tt/www.ufl.edu/academics/colleges/">Colleges</a>
</li>
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6007" id="mega-menu-item-6007"> 
<a class="mega-menu-link" href="/tt/www.ufl.edu/academics/online-distance-learning/">Online &amp; Distance Learning</a>
</li> 
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4277-0-2">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6011" id="mega-menu-item-6011">
<a class="mega-menu-link" href="/tt/uflib.ufl.edu/">Libraries</a>
</li>
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6009" id="mega-menu-item-6009"> 
<a class="mega-menu-link" href="/tt/www.ufl.edu/academics/academic-career-services/">Academic &amp; Career Services</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6012" id="mega-menu-item-6012"> 
<a class="mega-menu-link" href="/tt/ai.ufl.edu">Artificial Intelligence</a>
</li> 
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-has-icon mega-icon-right mega-menu-item-4278" id="mega-menu-item-4278">
<a class="dashicons-arrow-down-alt2 mega-menu-link" aria-haspopup="true" aria-expanded="false" href="/tt/www.ufl.edu/admissions/">ADMISSIONS<span class="mega-indicator"></span></a> 
<ul class="mega-sub-menu">
<li class="mega-menu-row" id="mega-menu-4278-0">
<ul class="mega-sub-menu">
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4278-0-0">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-4" id="mega-menu-item-text-4">
<div class="textwidget">
<p>Take the first step to becoming a Gator&mdash;get step-by-step info on applying, enrolling and financial aid.</p>
</div>
</li>
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4278-0-1">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-4281" id="mega-menu-item-4281">
<a class="mega-menu-link" href="/tt/admissions.ufl.edu/">Undergraduate</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-4282" id="mega-menu-item-4282"> 
<a class="mega-menu-link" href="/tt/admissions.ufl.edu/apply/graduate/">Graduate</a>
</li>
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-6013" id="mega-menu-item-6013"> 
<a class="mega-menu-link" href="/tt/www.ufl.edu/academics/online-distance-learning/">Online &amp; Distance Learning</a>
</li> 
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4278-0-2">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-4284" id="mega-menu-item-4284">
<a class="mega-menu-link" href="/tt/admissions.ufl.edu/apply/freshman/international">International Students</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-4285" id="mega-menu-item-4285"> 
<a class="mega-menu-link" href="/tt/admissions.ufl.edu/apply/transfer/">Transfer Students</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-4286" id="mega-menu-item-4286"> 
<a class="mega-menu-link" href="/tt/www.sfa.ufl.edu/">Financial Aid</a>
</li> 
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-has-icon mega-icon-right mega-menu-item-4279" id="mega-menu-item-4279">
<a class="dashicons-arrow-down-alt2 mega-menu-link" aria-haspopup="true" aria-expanded="false" href="/tt/www.ufl.edu/life-at-uf/">Life at UF<span class="mega-indicator"></span></a> 
<ul class="mega-sub-menu">
<li class="mega-menu-row" id="mega-menu-4279-0">
<ul class="mega-sub-menu">
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4279-0-0">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-5" id="mega-menu-item-text-5">
<div class="textwidget">
<p>Join a dynamic, diverse community in a great college town and discover sports, arts, amenities and more.</p>
</div>
</li>
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4279-0-1">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-menu-item-8989" id="mega-menu-item-8989">
<a class="mega-menu-link" href="/tt/www.ufl.edu/life-at-uf/housing/">Housing</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6026" id="mega-menu-item-6026"> 
<a class="mega-menu-link" href="/tt/dineoncampus.com/uf/">Dining</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6027" id="mega-menu-item-6027"> 
<a class="mega-menu-link" href="/tt/recsports.ufl.edu">Fitness &amp; Recreation</a>
</li> 
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4279-0-2">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6028" id="mega-menu-item-6028">
<a class="mega-menu-link" href="/tt/www.sfa.ufl.edu/types-of-aid/employment/">Student Jobs</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6030" id="mega-menu-item-6030"> 
<a class="mega-menu-link" href="/tt/studentinvolvement.ufl.edu/">Organizations &amp; Service</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6077" id="mega-menu-item-6077"> 
<a class="mega-menu-link" href="http://assistive.usablenet.com/tt/www.floridagators.com/">Athletics</a>
</li> 
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-has-children mega-menu-megamenu mega-align-bottom-left mega-menu-grid mega-hide-arrow mega-has-icon mega-icon-right mega-menu-item-4280" id="mega-menu-item-4280">
<a class="dashicons-arrow-down-alt2 mega-menu-link" aria-haspopup="true" aria-expanded="false" href="/tt/www.ufl.edu/research-and-impact/">RESEARCH &amp; IMPACT<span class="mega-indicator"></span></a> 
<ul class="mega-sub-menu">
<li class="mega-menu-row" id="mega-menu-4280-0">
<ul class="mega-sub-menu">
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4280-0-0">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-widget widget_text mega-menu-item-text-6" id="mega-menu-item-text-6">
<div class="textwidget">
<p>Florida ideas, discoveries and inventions are changing lives and opening opportunities for people everywhere.</p>
</div>
</li>
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4280-0-1">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6078" id="mega-menu-item-6078">
<a class="mega-menu-link" href="/tt/research.ufl.edu/">UF Research</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6079" id="mega-menu-item-6079"> 
<a class="mega-menu-link" href="/tt/innovate.research.ufl.edu/">UF Innovate</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6080" id="mega-menu-item-6080"> 
<a class="mega-menu-link" href="/tt/ufhealth.org/">UF Health</a>
</li> 
</ul>
</li>
<li class="mega-menu-column mega-menu-columns-4-of-12" id="mega-menu-4280-0-2">
<ul class="mega-sub-menu">
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6081" id="mega-menu-item-6081">
<a class="mega-menu-link" href="http://assistive.usablenet.com/tt/ifas.ufl.edu/">UF/IFAS</a>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-menu-item-6082" id="mega-menu-item-6082"> 
<a class="mega-menu-link" href="/tt/ai.ufl.edu/">Artificial Intelligence</a>
</li> 
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li class="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-10675" id="mega-menu-item-10675">
<a class="mega-menu-link" href="/tt/www.uff.ufl.edu/give-now/?utm_source=uhp&amp;utm_medium=wsl">GIVE</a>
</li>
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
<div class="entry-content">
<div class="vce-row-container">
<div class="vce-row vce-element--has-background vce-row--col-gap-30 homePg_Banner vce-row-content--top" data-vce-full-width="true" id="el-25e2b864" data-vce-do-apply="all el-25e2b864">
<div class="vce-col vce-col--md-50p vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-first vce-col--lg-first vce-col--xl-first verScroll_Col" id="el-ab4d3445">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-ab4d3445">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-ab4d3445">
<div class="vce-single-image-container ver_thickBar vce-single-image--align-left" id="object1">
<div class="vce vce-single-image-wrapper" id="el-f7601dc5" data-vce-do-apply="all el-f7601dc5">
<div class="vce-single-image-figure-inner">
<div class="vce-single-image-inner vce-single-image--absolute"></div>
</div>
</div>
</div>
<div class="vce-single-image-container ver_thinBar vce-single-image--align-left" id="object2">
<div class="vce vce-single-image-wrapper" id="el-d3f43de7" data-vce-do-apply="all el-d3f43de7">
<div class="vce-single-image-figure-inner">
<div class="vce-single-image-inner vce-single-image--absolute"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-content-background-container">
<div class="vce-asset-background-simple-container vce-visible-all-only vce-asset-background-simple--style-cover vce-asset-background-simple--position-center-top">
<div class="vce-asset-background-simple">
<div class="vce-asset-background-simple-item vcv-lozad" data-background-image="https://www.ufl.edu/wp-content/uploads/sites/5/2024/01/Explore-Fall23_OsubiCraig_hero-01.webp"></div>
<div class="vce-asset-background-simple-item"></div>
</div>
</div>
</div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-4p vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-3be8ae17">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-3be8ae17">
<div class="vce-content-background-container"></div>
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-3be8ae17">
<div></div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-50p vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last hoverImage hero__text" id="el-4e8d3e6c">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-4e8d3e6c">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-4e8d3e6c">
<div class="vce-text-block Banner_SubTitle">
<div class="vce-text-block-wrapper vce" id="el-48bf4358" data-vce-do-apply="all el-48bf4358" data-vce-animate="vce-o-animate--slideInLeft">
<p class="p1">Arts and Culture</p>
</div>
</div>
<div class="vce-text-block Banner_Title">
<div class="vce-text-block-wrapper vce" id="el-35ec8e57" data-vce-do-apply="all el-35ec8e57">
<h1>Fueling the Economy</h1>
<p class="hero__excerpt">Oṣubi Craig, director of UF's Center for Arts, Migration and Enterpreneurship, shares his hopes for the center&rsquo;s global network of scholars and artists, how culture fuels the economy, and how a sandwich can be art. </p>
</div>
</div>
<div class="vce-button--style-basic-container animated-border-button orange small_Width vce-button--style-basic-container--align-left">
<span class="vce-button--style-basic-wrapper vce" id="el-47e9df12" data-vce-do-apply="margin el-47e9df12"><a class="vce-button vce-button--style-basic vce-button--style-basic--border-square vce-button--style-basic--size-medium vce-button--style-basic--color-ba-0-0-0-0--fff" title="9 Questions with Oşubi Craig" id="hero-learn-more" data-vce-do-apply="padding border background  el-47e9df12" aria-label="Learn More" rel="noopener" href="/tt/explore.research.ufl.edu/9-questions-with-osubi-craig.html">Learn More</a></span>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last" id="el-2d0bcaef">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-2d0bcaef">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-2d0bcaef">
<div></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-0 homePg_Alert hideSection visually-hidden vce-row-equal-height vce-row-content--middle" data-vce-full-width="true" id="el-0a488371" data-vce-do-apply="all el-0a488371">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-auto vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-auto vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-last vce-col--xl-first" id="el-5c736d7e">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-5c736d7e">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-5c736d7e">
<div class="vce-text-block alertBoxWrapper">
<div class="vce-text-block-wrapper vce" id="el-bb3f6c80" data-vce-do-apply="all el-bb3f6c80">
<h2>UF Alert</h2>
<p>See the latest <a rel="noopener" href="/tt/ufalert.ufl.edu/category/ufalert/">UF alerts</a>.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-70 homePg_Row1 hideSection2 vce-row-equal-height vce-row-content--middle" data-vce-full-width="true" id="el-9c61aa0b" data-vce-do-apply="all el-9c61aa0b">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-28p vce-col--lg-visible vce-col--lg-first vce-col--xl-28p vce-col--xl-visible vce-col--xl-first col_Left" id="el-1713a6f8">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-1713a6f8">
<div class="vce-content-background-container"></div>
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-1713a6f8">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-71ce84c5" data-vce-do-apply="all el-71ce84c5">
<h2>Announcements</h2>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-70p vce-col--lg-visible vce-col--lg-last vce-col--xl-70p vce-col--xl-visible vce-col--xl-last col_Right" id="el-5e43f589">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-5e43f589">
<div class="vce-content-background-container"></div>
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-5e43f589">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-ee6b0ca8" data-vce-do-apply="all el-ee6b0ca8">
<ul>
<li>Campus Construction Impact: See the latest campus <a rel="noopener" href="/tt/campusclosures.ufl.edu/">construction updates and impacted areas</a>.</li>
<br>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-30 homePg_Row5_Title vce-row-equal-height vce-row-content--middle" data-vce-full-width="true" id="el-a976266d" data-vce-do-apply="all el-a976266d">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-a9d3a52c">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-a9d3a52c">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-a9d3a52c">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-1ddf75d6" data-vce-do-apply="all el-1ddf75d6">
<h2>News</h2>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-30 secOvw_Row8 vce-row-equal-height vce-row-content--top" data-vce-full-width="true" id="el-ad7f9a7e" data-vce-do-apply="all el-ad7f9a7e">
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-auto vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-auto vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-last vce-col--xl-first" id="el-68d4a26a">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-68d4a26a">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-68d4a26a">
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-54 rowTop linkCard vce-row-equal-height vce-row-content--top" id="el-6c015705" data-vce-do-apply="all el-6c015705">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-a200a561">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-a200a561">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-a200a561">
<div class="vce-single-image-container vce-single-image--align-center">
<div class="vce vce-single-image-wrapper" id="el-fcc386de" data-vce-do-apply="all el-fcc386de">
<div class="vce-single-image-figure-inner">
<a title="How psychology is shaping the future of technology" class="vce-single-image-inner vce-single-image--absolute" rel="noopener" href="/tt/news.warrington.ufl.edu/faculty-and-research/how-psychology-is-shaping-the-future-of-technology/"><span title="How psychology is shaping the future of technology">Professor Heng Xu speaking at a conference</span></a> 
</div>
</div>
</div>
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-cf9d16fa" data-vce-do-apply="all el-cf9d16fa">
<p>How psychology is shaping the future of technology</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first" id="el-f91a923d">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-f91a923d">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-f91a923d">
<div class="vce-single-image-container vce-single-image--align-center">
<div class="vce vce-single-image-wrapper" id="el-7059b0ab" data-vce-do-apply="all el-7059b0ab">
<div class="vce-single-image-figure-inner">
<a title="Planet Money&rsquo;s Jess Jiang to discuss how AI is transforming business " class="vce-single-image-inner vce-single-image--absolute" rel="noopener" href="/tt/news.ufl.edu/2024/01/jess-jiang-business-journalist-residence-talk/"><span title="Planet Money&rsquo;s Jess Jiang to discuss how AI is transforming business">Portrait of Jess Jiang</span></a> 
</div>
</div>
</div>
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-8c3c0f38" data-vce-do-apply="all el-8c3c0f38">
<p>Planet Money&rsquo;s Jess Jiang to discuss how AI is transforming business </p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last" id="el-5f46d325">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-5f46d325">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-5f46d325">
<div class="vce-single-image-container vce-single-image--align-center">
<div class="vce vce-single-image-wrapper" id="el-72d482b9" data-vce-do-apply="all el-72d482b9">
<div class="vce-single-image-figure-inner">
<a title="Staying one step ahead of the criminals" class="vce-single-image-inner vce-single-image--absolute" rel="noopener" href="/tt/news.ufl.edu/2024/01/uf-saferplaces-feature/"><span title="Staying one step ahead of the criminals">A man standing in a projected image of retail store</span></a> 
</div>
</div>
</div>
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-3560a53f" data-vce-do-apply="all el-3560a53f">
<p>Staying one step ahead of the criminals</p>
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
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-30 vce-row-equal-height vce-row-content--top" data-vce-full-width="true" data-vce-stretch-content="true" id="el-3161f877" data-vce-do-apply="all el-3161f877">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first video_line_aos" id="el-a7746bf3">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-a7746bf3">
<div class="vce-content-background-container"></div>
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-a7746bf3">
<div class="vce-text-block news stripe_image">
<div class="vce-text-block-wrapper vce" id="el-4cea142c" data-vce-do-apply="all el-4cea142c">
<div></div>
</div>
</div>
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-30 vce-row-equal-height vce-row-content--top" id="el-d76bfa5f" data-vce-do-apply="all el-d76bfa5f">
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first homePg_Row3  news-float" id="el-068d6e5a">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-068d6e5a">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-068d6e5a">
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--has-col-background vce-row--col-gap-0 ve_details_sec news-center vce-row-equal-height vce-row-content--top" id="el-6f1c2223" data-vce-do-apply="all el-6f1c2223">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-element--has-background vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-auto vce-col--lg-visible vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-first col_Left" id="el-25bcd5c3">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-25bcd5c3">
<div class="vce-content-background-container"></div>
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-25bcd5c3">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-99e09449" data-vce-do-apply="all el-99e09449">
<h2>Headlines from Florida</h2>
<p>
<a rel="noopener" href="/tt/news.ufl.edu/2024/01/supercomputer/">How scientists are using UF's supercomputer</a>
</p>
<hr>
<p data-pm-slice="1 1 []">
<a rel="noopener" href="/tt/www.floridamuseum.ufl.edu/museum-blog/cattle-dna-nicolas-and-the-nsf-podcast/">When was cattled imported to the Americas?</a>
</p>
<hr>
<p>
<a rel="noopener" href="/tt/blogs.ifas.ufl.edu/news/2024/01/18/how-timing-of-fertilizer-ordinances-impacts-water-quality-uf-ifas-scientists-explain/"><span class="css-14tyax2" data-testid="inline-card-icon-and-title"><span class="smart-link-title-wrapper css-0">How timing of fertilizer ordinances impacts water quality, UF/IFAS scientists explain</span></span></a>
</p>
<hr>
<p data-pm-slice="1 1 []">
<a rel="noopener" href="/tt/phhp.ufl.edu/2024/01/10/building-cultural-competence-through-virtual-exchange/">Building cultural competence through virtual exchange</a>
</p>
<hr>
<p>
<a rel="noopener" href="/tt/ufhealth.org/news/2024/genetic-score-advances-personalized-treatment-strategies-with-promising-aml-drug"><span class="css-14tyax2" data-testid="inline-card-icon-and-title"><span class="smart-link-title-wrapper css-0">Researchers have developed a genetic score to predict patient outcomes with a promising targeted drug treatment</span></span></a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-element--has-background vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-auto vce-col--lg-visible vce-col--lg-last vce-col--xl-auto vce-col--xl-visible vce-col--xl-last col_Right" id="el-77cf259d">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-77cf259d">
<div class="vce-content-background-container"></div>
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-77cf259d">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-49e34819" data-vce-do-apply="all el-49e34819">
<h2>Florida in the News</h2>
<p>
<strong>CNN</strong> <a rel="noopener" href="/tt/www.cnn.com/2024/01/19/australia/australia-cane-toad-invasive-species-intl-hnk-dst/index.html">This warty, toxic pest threatens entire ecosystems. These scientists have a secret weapon</a>
</p>
<hr>
<p>
<strong>PBS News</strong> <a rel="noopener" href="/tt/www.pbs.org/newshour/show/why-women-are-drawn-to-solo-travel-and-how-the-tourism-industry-is-responding">Why women are drawn to solo travel and how the tourism industry is responding</a>
</p>
<hr>
<p>
<strong>U.S. News &amp; World Report</strong> <a rel="noopener" href="/tt/www.usnews.com/news/politics/articles/2024-01-16/population-growth-patterns-paint-grim-picture-for-democrats">Population-growth patterns paint grim picture for Democratss</a>
</p>
<hr>
<p>
<strong>Space</strong> <a rel="noopener" href="/tt/www.space.com/mars-search-for-life-sample-return-tension">If life exists on Mars, don't count on sample-return missions to find it, scientists say</a>
</p>
<hr>
<p>
<strong>The Messenger</strong> <a rel="noopener" href="/tt/themessenger.com/tech/climate-change-is-stifling-forests-across-the-western-u-s">Climate change is stifling forests across western US</a>
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
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-30 secOvw_Row4 vce-row-equal-height vce-row-content--top" id="el-00827fd2" data-vce-do-apply="all el-00827fd2">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-66c9f9c3">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-66c9f9c3">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-66c9f9c3">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-2c0b5055" data-vce-do-apply="all el-2c0b5055">
<h2>Don't Miss a Moment</h2>
<p>Every day, the people and programs at the University of Florida solve problems, change lives and widen our view of what&rsquo;s possible. See what our work means for you.</p>
</div>
</div>
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-72 vce-row-equal-height vce-row-content--top" id="el-696bdc50" data-vce-do-apply="all el-696bdc50">
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-first vce-col--lg-first vce-col--xl-first secOvw_Row4_BtnCol" id="el-3279e3f9">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-3279e3f9">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-3279e3f9">
<div class="vce-button--style-basic-container animated-border-button blue vce-button--style-basic-container--align-center">
<span class="vce-button--style-basic-wrapper vce" id="el-4a28c9ee" data-vce-do-apply="margin el-4a28c9ee"><a class="vce-button vce-button--style-basic vce-button--style-basic--border-square vce-button--style-basic--size-medium vce-button--style-basic--color-ba-255-255-255-0--b-52-55-65" title="UF News" data-vce-do-apply="padding border background  el-4a28c9ee" rel="noopener" href="/tt/news.ufl.edu">See All News</a></span>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first" id="el-d99c9e05">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-d99c9e05">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-d99c9e05">
<div class="vce-button--style-basic-container animated-border-button blue vce-button--style-basic-container--align-center">
<span class="vce-button--style-basic-wrapper vce" id="el-fe7e3905" data-vce-do-apply="margin el-fe7e3905"><a class="vce-button vce-button--style-basic vce-button--style-basic--border-square vce-button--style-basic--size-medium vce-button--style-basic--color-ba-255-255-255-0--b-52-55-65" title="Newsletter Signup" data-vce-do-apply="padding border background  el-fe7e3905" rel="noopener" href="/tt/www.ufl.edu/newsletter-signup/">Newsletter Signup</a></span>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last" id="el-5df4ce38">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-5df4ce38">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-5df4ce38">
<div class="vce-button--style-basic-container animated-border-button blue vce-button--style-basic-container--align-center">
<span class="vce-button--style-basic-wrapper vce" id="el-9f5f825f" data-vce-do-apply="margin el-9f5f825f"><a class="vce-button vce-button--style-basic vce-button--style-basic--border-square vce-button--style-basic--size-medium vce-button--style-basic--color-ba-255-255-255-0--b-52-55-65" title="UF Experts" data-vce-do-apply="padding border background  el-9f5f825f" rel="noopener" href="/tt/experts.ufl.edu/">Find an Expert</a></span>
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
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-30 verticalTab impactTabs vce-row-no-paddings vce-row-equal-height vce-row-content--top" data-vce-full-width="true" data-vce-stretch-content="true" id="el-b47b1fd4" data-vce-do-apply="all el-b47b1fd4">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-4c7bf53c">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-4c7bf53c">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-4c7bf53c">
<div class="vce-tabs-with-slide maskBg" id="el-64600c46" data-vce-background-image-all="https://www.ufl.edu/wp-content/uploads/sites/5/2022/03/National-Impact-Home.webp" data-vce-background-image="all" data-vce-lozad="true" data-vce-do-apply="all el-64600c46" data-active-tab="1">
<div class="vce-tabs-with-slide-inner">
<div class="vce-tabs-with-slide-container">
<div class="vce-tabs-with-slide-list" role="tablist" aria-label="Tabs with slide">
<span class="vce-tabs-with-slide-slider"></span>
<div class="vce-tabs-with-slide-tab" data-vce-target-model-id="6cbbce9a" data-vce-tab="true">
<a class="vce-tabs-with-slide-tab-title" data-vce-use-cache="false" data-vce-tabs="true" data-vce-target="[data-model-id=6cbbce9a]" data-vce-container=".vce-tabs-with-slide-inner" role="tab" aria-selected="true" aria-controls="el-6cbbce9a" id="tab-6cbbce9a" href="#el-6cbbce9a">Impact Overview</a>
</div>
<div class="vce-tabs-with-slide-tab" data-vce-target-model-id="fc284734" data-vce-tab="true">
<a class="vce-tabs-with-slide-tab-title" data-vce-use-cache="false" data-vce-tabs="true" data-vce-target="[data-model-id=fc284734]" data-vce-container=".vce-tabs-with-slide-inner" role="tab" aria-selected="false" aria-controls="el-fc284734" id="tab-fc284734" href="#el-fc284734">Statewide Impact</a>
</div>
<div class="vce-tabs-with-slide-tab" data-vce-target-model-id="2873a680" data-vce-tab="true">
<a class="vce-tabs-with-slide-tab-title" data-vce-use-cache="false" data-vce-tabs="true" data-vce-target="[data-model-id=2873a680]" data-vce-container=".vce-tabs-with-slide-inner" role="tab" aria-selected="false" aria-controls="el-2873a680" id="tab-2873a680" href="#el-2873a680">National Impact</a>
</div>
<div class="vce-tabs-with-slide-tab" data-vce-target-model-id="0e96c22d" data-vce-tab="true">
<a class="vce-tabs-with-slide-tab-title" data-vce-use-cache="false" data-vce-tabs="true" data-vce-target="[data-model-id=0e96c22d]" data-vce-container=".vce-tabs-with-slide-inner" role="tab" aria-selected="false" aria-controls="el-0e96c22d" id="tab-0e96c22d" href="#el-0e96c22d">Global Impact</a>
</div>
</div>
</div>
<div class="vce-tabs-with-slide-panels-container">
<div class="vce-tabs-with-slide-panels">
<div class="vce-tabs-with-slide-panel impact_Overview" id="el-6cbbce9a" data-model-id="6cbbce9a" data-vce-content=".vce-tabs-with-slide-panel-body">
<div class="vce-tabs-with-slide-tab-inner">
<div class="vce-tabs-with-slide-panel-heading">
<a class="vce-tabs-with-slide-panel-title" data-vce-target="[data-model-id=6cbbce9a]" data-vce-use-cache="false" data-vce-accordion="" data-vce-container=".vce-tabs-with-slide-inner" role="tab" aria-selected="true" aria-controls="el-6cbbce9a" id="accordion-6cbbce9a" href="#el-6cbbce9a">Impact Overview</a>
</div>
<div class="vce-tabs-with-slide-panel-body" role="tabpanel" aria-labelledby="tab-6cbbce9a accordion-6cbbce9a" data-vce-do-apply="all el-6cbbce9a">
<div class="vce-tabs-with-slide-element-container" data-js-panel-body="">
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-30 vce-row-equal-height vce-row-content--top" id="el-83e46968" data-vce-do-apply="all el-83e46968">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-4abd0ea7">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-4abd0ea7">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-4abd0ea7">
<div class="vce-text-block overview_Title">
<div class="vce-text-block-wrapper vce" id="el-59e4b89b" data-vce-do-apply="all el-59e4b89b">
<h2>MOMENTUM THAT MOVES OUR WORLD</h2>
</div>
</div>
<div class="vce-text-block overview_Desc">
<div class="vce-text-block-wrapper vce" id="el-7ee3eb25" data-vce-do-apply="all el-7ee3eb25">One of America&rsquo;s all-around best universities, the University of Florida drives future-making education, eye-opening discoveries, life-saving health care, and community-building collaboration for our state, our nation, and our world.</div>
</div>
<div class="vce-button--style-basic-container animated-underline-button vce-button--style-basic-container--align-left">
<span class="vce-button--style-basic-wrapper vce" id="el-a718b092" data-vce-do-apply="margin el-a718b092"><a class="vce-button vce-button--style-basic vce-button--style-basic--border-square vce-button--style-basic--size-medium vce-button--style-basic--color-ba-99-42-248-0--b-0-0-0" title="University of Florida's research and impact" data-vce-do-apply="padding border background  el-a718b092" href="/tt/www.ufl.edu/research-and-impact/">Discover Our Impact</a></span>
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
<div class="vce-tabs-with-slide-panel impact_Others Tab1" id="el-fc284734" data-model-id="fc284734" data-vce-content=".vce-tabs-with-slide-panel-body">
<div class="vce-tabs-with-slide-tab-inner">
<div class="vce-tabs-with-slide-panel-heading">
<a class="vce-tabs-with-slide-panel-title" data-vce-target="[data-model-id=fc284734]" data-vce-use-cache="false" data-vce-accordion="" data-vce-container=".vce-tabs-with-slide-inner" role="tab" aria-selected="false" aria-controls="el-fc284734" id="accordion-fc284734" href="#el-fc284734">Statewide Impact</a>
</div>
<div class="vce-tabs-with-slide-panel-body" role="tabpanel" aria-labelledby="tab-fc284734 accordion-fc284734" data-vce-do-apply="all el-fc284734" hidden="hidden">
<div class="vce-tabs-with-slide-element-container" data-js-panel-body="">
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-30 vce-row-equal-height vce-row-content--top" id="el-577cb288" data-vce-do-apply="all el-577cb288">
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-first" id="el-93a7346c">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-93a7346c">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-93a7346c">
<div class="vce-text-block impact_Title">
<div class="vce-text-block-wrapper vce" id="el-6d95c951" data-vce-do-apply="all el-6d95c951">
<h2>IT STARTS IN FLORIDA</h2>
</div>
</div>
<div class="vce-text-block impact_Desc">
<div class="vce-text-block-wrapper vce" id="el-e18cf443" data-vce-do-apply="all el-e18cf443">
<p>Momentum begins at the cutting edge of a continent, where cultures meet and ideas collide.</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-last" id="el-aaad699f">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-aaad699f">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-aaad699f">
<div class="vce-single-image-container vce-single-image--align-left">
<div class="vce vce-single-image-wrapper" id="el-7eae05af" data-vce-do-apply="all el-7eae05af">
<div class="vce-single-image-figure-inner">
<div class="vce-single-image-inner vce-single-image--absolute">
<span title="Statewide Impact - Slide Media">marshy area </span>
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
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-70 impact_Card_Row vce-row-equal-height vce-row-content--top" id="el-4e1fc018" data-vce-do-apply="all el-4e1fc018">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-first" id="el-f314a456">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-f314a456">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-f314a456">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-f81b971e" data-vce-do-apply="all el-f81b971e">
<p class="Factoid_Number">10,000</p>
<hr>
<p class="Factoid_Title">Florida Jobs</p>
<p class="Factoid_Desc">Companies with technology licensed from Florida contributed $2.4 billion and nearly 10,000 jobs to the state&rsquo;s economy.</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible" id="el-781c0a48">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-781c0a48">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-781c0a48">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-aa086006" data-vce-do-apply="all el-aa086006">
<p class="Factoid_Number">$16.91B</p>
<hr>
<p class="Factoid_Title">Economic Impact</p>
<p class="Factoid_Desc">In Florida economic impact during the 2018 fiscal year.</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-last" id="el-5183efd8">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-5183efd8">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-5183efd8">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-0ec1be2f" data-vce-do-apply="all el-0ec1be2f">
<p class="Factoid_Number">~70%</p>
<hr>
<p class="Factoid_Title">Of Florida Undergraduates</p>
<p class="Factoid_Desc">Secure jobs or plan to start their careers in Florida.</p>
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
<div class="vce-tabs-with-slide-panel impact_Others Tab2" id="el-2873a680" data-model-id="2873a680" data-vce-content=".vce-tabs-with-slide-panel-body">
<div class="vce-tabs-with-slide-tab-inner">
<div class="vce-tabs-with-slide-panel-heading">
<a class="vce-tabs-with-slide-panel-title" data-vce-target="[data-model-id=2873a680]" data-vce-use-cache="false" data-vce-accordion="" data-vce-container=".vce-tabs-with-slide-inner" role="tab" aria-selected="false" aria-controls="el-2873a680" id="accordion-2873a680" href="#el-2873a680">National Impact</a>
</div>
<div class="vce-tabs-with-slide-panel-body" role="tabpanel" aria-labelledby="tab-2873a680 accordion-2873a680" data-vce-do-apply="all el-2873a680" hidden="hidden">
<div class="vce-tabs-with-slide-element-container" data-js-panel-body="">
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-30 vce-row-equal-height vce-row-content--top" id="el-5339582f" data-vce-do-apply="all el-5339582f">
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-first" id="el-c8055370">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-c8055370">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-c8055370">
<div class="vce-text-block impact_Title">
<div class="vce-text-block-wrapper vce" id="el-66f9a1b3" data-vce-do-apply="all el-66f9a1b3">
<h2>IT ACCELERATES OUR NATION</h2>
</div>
</div>
<div class="vce-text-block impact_Desc">
<div class="vce-text-block-wrapper vce" id="el-d94245ff" data-vce-do-apply="all el-d94245ff">
<p>Once launched, the best ideas gather speed. University of Florida innovations earn national attention and acclaim.</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-last" id="el-ba111af1">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-ba111af1">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-ba111af1">
<div class="vce-single-image-container vce-single-image--align-left">
<div class="vce vce-single-image-wrapper" id="el-f178ba94" data-vce-do-apply="all el-f178ba94">
<div class="vce-single-image-figure-inner">
<div class="vce-single-image-inner vce-single-image--absolute"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-70 impact_Card_Row vce-row-equal-height vce-row-content--top" id="el-48274423" data-vce-do-apply="all el-48274423">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-first" id="el-ddf88e70">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-ddf88e70">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-ddf88e70">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-15784430" data-vce-do-apply="all el-15784430">
<p class="Factoid_Number">UF/IFAS #1</p>
<hr>
<p class="Factoid_Title">Ranked</p>
<p class="Factoid_Desc">Among all US universities in awards from the National Science Foundation for Higher Education Research &amp; Development in Agricultural Sciences, Natural Resources &amp; Conservation.</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible" id="el-cf643d35">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-cf643d35">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-cf643d35">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-d77dce7c" data-vce-do-apply="all el-d77dce7c">
<p class="Factoid_Number">
<b>$1B</b>
</p>
<hr>
<p class="Factoid_Title">2022 Research Expenditures</p>
<div class="js-fill-card-detail-desc">
<div>
<div class="js-react-root">
<div class="window-module">
<div class="u-gutter">
<div class="editable">
<div class="description-content js-desc-content">
<div class="current markeddown hide-on-edit js-desc js-show-with-desc" dir="auto">
<p dir="auto">Florida researchers conducted a record amount of research in fiscal 2022.</p>
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
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-last" id="el-010a3881">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-010a3881">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-010a3881">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-042ce545" data-vce-do-apply="all el-042ce545">
<p class="Factoid_Number">#1</p>
<hr>
<p class="Factoid_Title">Ranked</p>
<p class="Factoid_Desc">Nationally in innovation impact <a rel="noopener" href="/tt/news.ufl.edu/2020/06/uf-ranked-no-1-nationally-in-innovation-impact/">in 2020</a>.</p>
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
<div class="vce-tabs-with-slide-panel impact_Others Tab3" id="el-0e96c22d" data-model-id="0e96c22d" data-vce-content=".vce-tabs-with-slide-panel-body">
<div class="vce-tabs-with-slide-tab-inner">
<div class="vce-tabs-with-slide-panel-heading">
<a class="vce-tabs-with-slide-panel-title" data-vce-target="[data-model-id=0e96c22d]" data-vce-use-cache="false" data-vce-accordion="" data-vce-container=".vce-tabs-with-slide-inner" role="tab" aria-selected="false" aria-controls="el-0e96c22d" id="accordion-0e96c22d" href="#el-0e96c22d">Global Impact</a>
</div>
<div class="vce-tabs-with-slide-panel-body" role="tabpanel" aria-labelledby="tab-0e96c22d accordion-0e96c22d" data-vce-do-apply="all el-0e96c22d" hidden="hidden">
<div class="vce-tabs-with-slide-element-container" data-js-panel-body="">
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-30 vce-row-equal-height vce-row-content--top" id="el-0bc39b1e" data-vce-do-apply="all el-0bc39b1e">
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-first" id="el-c178aa92">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-c178aa92">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-c178aa92">
<div class="vce-text-block impact_Title">
<div class="vce-text-block-wrapper vce" id="el-3166c2bc" data-vce-do-apply="all el-3166c2bc">
<h2>IT'S CHANGING OUR WORLD</h2>
</div>
</div>
<div class="vce-text-block impact_Desc">
<div class="vce-text-block-wrapper vce" id="el-0e32f236" data-vce-do-apply="all el-0e32f236">
<p>We&rsquo;re taking on the world&rsquo;s most pressing challenges, with and for people everywhere.<br>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-last" id="el-dd0d9807">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-dd0d9807">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-dd0d9807">
<div class="vce-single-image-container vce-single-image--align-left">
<div class="vce vce-single-image-wrapper" id="el-025e27a4" data-vce-do-apply="all el-025e27a4">
<div class="vce-single-image-figure-inner">
<div class="vce-single-image-inner vce-single-image--absolute">
<span title="Global Impact - Slide Media">statue of gator on globe </span>
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
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-70 impact_Card_Row vce-row-equal-height vce-row-content--top" id="el-996067a9" data-vce-do-apply="all el-996067a9">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-first" id="el-e23dfee0">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-e23dfee0">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-e23dfee0">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-9a515a6d" data-vce-do-apply="all el-9a515a6d">
<p class="Factoid_Number">#5&nbsp;</p>
<hr>
<p class="Factoid_Title">Global</p>
<p class="Factoid_Desc">Teaching and extension organization leading agricultural and natural research with nearly 3,000 faculty and staff.</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible" id="el-79110007">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-79110007">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-79110007">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-b6069563" data-vce-do-apply="all el-b6069563">
<p class="Factoid_Number">95+</p>
<hr>
<p class="Factoid_Title">Diversity</p>
<p class="Factoid_Desc">Nations represented among students enrolled for fall 2020.</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-100p vce-col--lg-visible vce-col--lg-last vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-last" id="el-7e29126d">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-7e29126d">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-7e29126d">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-69d45932" data-vce-do-apply="all el-69d45932">
<p class="card_Text">Record three-time recipient of the Best Global Incubator award for Sid Martin Biotech.</p>
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
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-30 homePg_Row5_Title vce-row-equal-height vce-row-content--top" data-vce-full-width="true" data-vce-stretch-content="true" id="el-f4b2e61d" data-vce-do-apply="all el-f4b2e61d">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-100p vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-a6678439">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-a6678439">
<div class="vce-content-background-container"></div>
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-a6678439">
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-30 homePg_Row5_Title vce-row-equal-height vce-row-content--middle" data-vce-full-width="true" id="el-3164c9e8" data-vce-do-apply="all el-3164c9e8">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-cba96ec4">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-cba96ec4">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-cba96ec4">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-31e40c2a" data-vce-do-apply="all el-31e40c2a">
<h2>Happening at Florida&nbsp;</h2>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-30 homePg_Row5_Slider vce-row-equal-height vce-row-content--top" data-vce-full-width="true" data-vce-stretch-content="true" id="el-ef1a178e" data-vce-do-apply="all el-ef1a178e">
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-04bd0250">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-04bd0250">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-04bd0250">
<div class="vce-shortcode">
<div class="vce-shortcode-wrapper vce" id="el-f4691b01" data-vce-do-apply="all el-f4691b01">
<div class="lwcw slick" data-options="id=2&amp;format=html"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-45 event_Link_Row vce-row-equal-height vce-row-content--top" id="el-90ea188c" data-vce-do-apply="all el-90ea188c">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-auto vce-col--lg-visible vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-first" id="el-de77808e">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-de77808e">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-de77808e">
<div class="vce-button--style-basic-container animated-border-button orange vce-button--style-basic-container--align-right">
<span class="vce-button--style-basic-wrapper vce" id="el-041f473e" data-vce-do-apply="margin el-041f473e"><a class="vce-button vce-button--style-basic vce-button--style-basic--border-square vce-button--style-basic--size-medium vce-button--style-basic--color-ba-255-255-255-0--b-52-55-65 vce-button--style-basic--hover-color-4d70ac--b-52-55-65" title="" data-vce-do-apply="padding border background  el-041f473e" rel="noopener" href="/tt/calendar.ufl.edu">View Events Calendar</a></span>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-auto vce-col--lg-visible vce-col--lg-last vce-col--xl-auto vce-col--xl-visible vce-col--xl-last" id="el-b46593f0">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-b46593f0">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-b46593f0">
<div class="vce-button--style-basic-container animated-border-button orange vce-button--style-basic-container--align-left">
<span class="vce-button--style-basic-wrapper vce" id="el-6809d2c2" data-vce-do-apply="margin el-6809d2c2"><a class="vce-button vce-button--style-basic vce-button--style-basic--border-square vce-button--style-basic--size-medium vce-button--style-basic--color-ba-255-255-255-0--b-52-55-65 vce-button--style-basic--hover-color-4d70ac--b-52-55-65" title="" data-vce-do-apply="padding border background  el-6809d2c2" rel="noopener" href="/tt/catalog.ufl.edu/UGRD/dates-deadlines/pdfs/">View Academic Calendar</a></span>
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
</div>
<div class="vce-row-container">
<div class="vce-row vce-element--has-background vce-row--col-gap-52 homePg_Row7 vce-row-equal-height vce-row-content--middle" data-vce-full-width="true" id="el-55d6be09" data-vce-do-apply="all el-55d6be09">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-4af4411c">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-4af4411c">
<div class="vce-content-background-container"></div>
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-4af4411c">
<div class="vce-text-block title">
<div class="vce-text-block-wrapper vce" id="el-da124722" data-vce-do-apply="all el-da124722">
<p>
<strong>Follow Florida</strong>
</p>
</div>
</div>
<div class="vce-shortcode">
<div class="vce-shortcode-wrapper vce" id="el-ddb23fac" data-vce-do-apply="all el-ddb23fac">
<div class="social-feed row"></div>
</div>
</div>
<div class="vce-raw-html custom-social-icons">
<div class="vce-raw-html-wrapper" id="el-f9bf3c0a" data-vce-do-apply="all el-f9bf3c0a">
<a class="facebook-icon" rel="noopener" href="http://assistive.usablenet.com/tt/www.facebook.com/uflorida/"><span class="visually-hidden">Facebook Icon</span></a> &nbsp; <a class="twitter-icon" rel="noopener" href="/tt/twitter.com/UF/"><span class="visually-hidden">Twitter Icon</span></a> &nbsp; <a class="instagram-icon" rel="noopener" href="/tt/instagram.com/uflorida/"><span class="visually-hidden">Instagram Icon</span></a> &nbsp; <a class="youtube-icon" rel="noopener" href="http://assistive.usablenet.com/tt/www.youtube.com/user/universityofflorida/"><span class="visually-hidden">Youtube Icon</span></a> &nbsp; <a class="linkedin-icon" rel="noopener" href="/tt/www.linkedin.com/school/uflorida/"><span class="visually-hidden">LinkedIn Icon</span></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-0 homePg_bannerSlider vce-row-equal-height vce-row-content--middle" data-vce-full-width="true" data-vce-stretch-content="true" id="el-4fcddd9c" data-vce-do-apply="all el-4fcddd9c">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-c9260110">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-c9260110">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-c9260110">
<div id="el-6750cc27" class="vce-slider-revolution--align-left">
<div class="vce vce-slider-revolution" data-vce-do-apply="all el-6750cc27">
<span title="Rectangle 5676">shading background </span> researcher showing product horizontal orange line Artificial intelligence is changing every sector of our economy and every aspect of a University of Florida education. We aim to ensure students in all fields develop AI competency. AI-Infused Curriculum <a id="slider-29-slide-235-layer-4" class="rs-layer rev-btn" rel="noopener" data-type="button" data-rsp_ch="on" data-xy="xo:1990px,1990px,1990px,317px;yo:774px,774px,774px,123px;" data-text="w:normal;s:17,17,17,4;l:40,40,40,6;fw:500;" data-dim="minh:0px,0px,0px,none;" data-wrpcls="bannerSlider_Btn" data-padding="r:25,25,25,4;l:25,25,25,4;" data-border="bos:solid;boc:rgba(255,255,255,0.35);bow:1px,1px,1px,1px;" data-frame_999="o:0;st:w;sR:8700;" data-frame_hover="bgc:rgba(0,0,0,0);boc:rgba(255,255,255,0.75);bor:0px,0px,0px,0px;bos:solid;bow:1px,1px,1px,1px;e:power1.inOut;" href="/tt/ai.ufl.edu">Learn About the AI Initiative</a> horizontal orange line horizontal orange line horizontal orange line <span title="Rectangle 5676"> shading background </span> Hands in the air horizontal orange line Florida has embraced a campus-wide commitment to understand our past, address racism and promote equality, starting with a focus on the Black experience. Anti-Racism Central Initiatives <a id="slider-29-slide-213-layer-4" class="rs-layer rev-btn" rel="noopener" data-type="button" data-rsp_ch="on" data-xy="xo:1996px,1996px,1996px,318px;yo:751px,751px,751px,119px;" data-text="w:normal;s:17,17,17,4;l:40,40,40,6;fw:500;" data-dim="minh:0px,0px,0px,none;" data-wrpcls="bannerSlider_Btn" data-padding="r:25,25,25,4;l:25,25,25,4;" data-border="bos:solid;boc:rgba(255,255,255,0.35);bow:1px,1px,1px,1px;" data-frame_999="o:0;st:w;sR:8700;" data-frame_hover="bgc:rgba(0,0,0,0);boc:rgba(255,255,255,0.75);bor:0px,0px,0px,0px;bos:solid;bow:1px,1px,1px,1px;e:power1.inOut;" href="/tt/antiracism.ufl.edu/">Join Us in Fighting Racism</a> horizontal orange line horizontal orange line horizontal orange line <span title="Rectangle 5676"> shading background </span> UF 50th anniversary women's athletics artwork horizontal orange line With more than 2,700 female student-athletes claiming 165 national or conference championships, Florida women&rsquo;s programs have found success in the conference, national and international stages. 50 Years of Women's Athletics <a id="slider-29-slide-233-layer-4" class="rs-layer rev-btn" rel="noopener" data-type="button" data-rsp_ch="on" data-xy="xo:2065px,2065px,2065px,329px;yo:776px,776px,776px,123px;" data-text="w:normal;s:17,17,17,4;l:40,40,40,6;fw:500;" data-dim="minh:0px,0px,0px,none;" data-wrpcls="bannerSlider_Btn" data-padding="r:25,25,25,4;l:25,25,25,4;" data-border="bos:solid;boc:rgba(255,255,255,0.35);bow:1px,1px,1px,1px;" data-frame_999="o:0;st:w;sR:8700;" data-frame_hover="bgc:rgba(0,0,0,0);boc:rgba(255,255,255,0.75);bor:0px,0px,0px,0px;bos:solid;bow:1px,1px,1px,1px;e:power1.inOut;" href="/tt/floridagators.com/sports/2021/9/24/celebrating-50-years-of-womens-athletics.aspx">Learn More</a> horizontal orange line horizontal orange line horizontal orange line </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-150 homePg_Row9 vce-row-equal-height vce-row-content--middle" data-vce-full-width="true" id="el-e64e810d" data-vce-do-apply="all el-e64e810d">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-auto vce-col--lg-visible vce-col--lg-first vce-col--xl-auto vce-col--xl-visible vce-col--xl-first col_Left" id="el-7ef531d5">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-7ef531d5">
<div class="vce-content-background-container"></div>
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-7ef531d5">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-013b3ac8" data-vce-do-apply="all el-013b3ac8">
<h2>Join Us</h2>
<p>Whether you&rsquo;re a future student, an alumnus, a potential faculty or staff member or a proud Floridian, there&rsquo;s a home for you here.</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--xs-100p vce-col--xs-visible vce-col--xs-last vce-col--xs-first vce-col--sm-100p vce-col--sm-visible vce-col--sm-last vce-col--sm-first vce-col--md-100p vce-col--md-visible vce-col--md-last vce-col--md-first vce-col--lg-auto vce-col--lg-visible vce-col--lg-last vce-col--xl-auto vce-col--xl-visible vce-col--xl-last col_Right" id="el-f8441648">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-f8441648">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-f8441648">
<div class="vce-call-to-action-button-container hide-icon homepage-cta-btn vce-call-to-action-button--align-left" id="el-03963d6f">
<a class="vce vce-button vce-call-to-action-button vce-call-to-action-button--shape-rounded vce-call-to-action-button--icon-color-b-255-255-255 vce-call-to-action-button--icon-hover-color-fff vce-call-to-action-button--title-color-b-0-33-165 vce-call-to-action-button--title-hover-color-b-0-33-165 vce-call-to-action-button--description-color-b-49-53-53 vce-call-to-action-button--description-hover-color-b-49-53-53 vce-call-to-action-button--background-color-ba-255-255-255-0--b-243-241-233--90--F82A6D--7554FC--7554FC--F82A6D" title="" data-vce-do-apply="all el-03963d6f" href="/tt/www.ufl.edu/academics/programs-courses/"><span class="vce-call-to-action-button-icon-wrapper vcv-ui-icon-feather vcv-ui-icon-feather-instagram"></span><span class="vce-call-to-action-button-title">Explore Programs</span><span class="vce-call-to-action-button-description">Choose from 30 certificates, 100 undergraduate majors, and 200 graduate degree options.</span></a>
</div>
<div class="vce-call-to-action-button-container hide-icon homepage-cta-btn vce-call-to-action-button--align-left" id="el-39b2b50c">
<a class="vce vce-button vce-call-to-action-button vce-call-to-action-button--shape-rounded vce-call-to-action-button--icon-color-b-255-255-255 vce-call-to-action-button--icon-hover-color-fff vce-call-to-action-button--title-color-b-0-33-165 vce-call-to-action-button--title-hover-color-b-0-33-165 vce-call-to-action-button--description-color-b-49-53-53 vce-call-to-action-button--description-hover-color-b-49-53-53 vce-call-to-action-button--background-color-ba-255-255-255-0--b-243-241-233--90--F82A6D--7554FC--7554FC--F82A6D" title="" data-vce-do-apply="all el-39b2b50c" rel="noopener" href="/tt/jobs.ufl.edu/"><span class="vce-call-to-action-button-icon-wrapper vcv-ui-icon-feather vcv-ui-icon-feather-instagram"></span><span class="vce-call-to-action-button-title">Work with Us</span><span class="vce-call-to-action-button-description">You belong at a university that&rsquo;s leading the way&mdash;discover current job postings.</span></a>
</div>
<div class="vce-call-to-action-button-container hide-icon homepage-cta-btn vce-call-to-action-button--align-left" id="el-5593f1b1">
<a class="vce vce-button vce-call-to-action-button vce-call-to-action-button--shape-rounded vce-call-to-action-button--icon-color-b-255-255-255 vce-call-to-action-button--icon-hover-color-fff vce-call-to-action-button--title-color-b-0-33-165 vce-call-to-action-button--title-hover-color-b-0-33-165 vce-call-to-action-button--description-color-b-49-53-53 vce-call-to-action-button--description-hover-color-b-49-53-53 vce-call-to-action-button--background-color-ba-255-255-255-0--b-243-241-233--90--F82A6D--7554FC--7554FC--F82A6D" title="" data-vce-do-apply="all el-5593f1b1" rel="noopener" href="/tt/www.uff.ufl.edu/give-now/?utm_source=uhp&amp;utm_medium=wsl"><span class="vce-call-to-action-button-icon-wrapper vcv-ui-icon-feather vcv-ui-icon-feather-instagram"></span><span class="vce-call-to-action-button-title">Make a Gift</span><span class="vce-call-to-action-button-description">Your support clears paths for students, boosts groundbreaking research, and keeps UF strong.</span></a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-0 footerTop vce-row-equal-height vce-row-content--top" data-vce-full-width="true" data-vce-stretch-content="true" id="el-a5c972b6" data-vce-do-apply="all el-a5c972b6">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-e8818e75">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-e8818e75">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-e8818e75">
<div class="vce-raw-html">
<div class="vce-raw-html-wrapper" id="el-da88aa4e" data-vce-do-apply="all el-da88aa4e">
<div id="footerTopBorder"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-element--has-background vce-row--col-gap-30 footer_Top vce-row-equal-height vce-row-content--middle" data-vce-full-width="true" id="el-f9e79b47" data-vce-do-apply="all el-f9e79b47">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-first vce-col--lg-first vce-col--xl-first col_Left" id="el-8ea0bc8f">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-8ea0bc8f">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-8ea0bc8f">
<div class="vce-single-image-container siteLogo_Footer vce-single-image--align-left">
<div class="vce vce-single-image-wrapper" id="el-380910bf" data-vce-do-apply="all el-380910bf">
<div class="vce-single-image-figure-inner">
<span title="UF-Signature-Converted-Footer">University of Florida Logo </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last col_Right" id="el-1ee00183">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-1ee00183">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-1ee00183">
<div class="vce-row-container" data-vce-boxed-width="true">
<div class="vce-row vce-row--col-gap-30 vce-row-equal-height vce-row-content--top" id="el-48f3cda3" data-vce-do-apply="all el-48f3cda3">
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-f856d4b2">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-f856d4b2">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-f856d4b2">
<div class="vce-raw-html custom-social-icons">
<div class="vce-raw-html-wrapper" id="el-25f0da00" data-vce-do-apply="all el-25f0da00">
<a class="facebook-icon" rel="noopener" href="http://assistive.usablenet.com/tt/www.facebook.com/uflorida/"><span class="visually-hidden">Facebook Icon</span></a> &nbsp; <a class="twitter-icon" rel="noopener" href="/tt/twitter.com/UF/"><span class="visually-hidden">Twitter Icon</span></a> &nbsp; <a class="instagram-icon" rel="noopener" href="/tt/instagram.com/uflorida/"><span class="visually-hidden">Instagram Icon</span></a> &nbsp; <a class="youtube-icon" rel="noopener" href="http://assistive.usablenet.com/tt/www.youtube.com/user/universityofflorida/"><span class="visually-hidden">Youtube Icon</span></a> &nbsp; <a class="linkedin-icon" rel="noopener" href="/tt/www.linkedin.com/school/uflorida/"><span class="visually-hidden">LinkedIn Icon</span></a>
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
</div>
</div>
<div class="vce-row-container">
<div class="vce-row vce-element--has-background vce-row--col-gap-30 footer_Mid vce-row-equal-height vce-row-content--top" data-vce-full-width="true" id="el-47a74f01" data-vce-do-apply="all el-47a74f01">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-first vce-col--lg-first vce-col--xl-first contact_col" id="el-368402a2">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-368402a2">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-368402a2">
<div class="vce-text-block footer_Title">
<div class="vce-text-block-wrapper vce" id="el-6af71b55" data-vce-do-apply="all el-6af71b55">
<h2>Contact Us</h2>
</div>
</div>
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-7a130372" data-vce-do-apply="all el-7a130372">
<p>University of Florida<br>Gainesville, FL 32611<br>
<a href="tel:352-392-3261">352-392-3261</a>
</p>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first" id="el-1463d05e">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-1463d05e">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-1463d05e">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-cd1f2da0" data-vce-do-apply="all el-cd1f2da0">
<h2>Tools</h2>
</div>
</div>
<div class="vce-basic-menu-container" id="el-8ab16ef6" data-vce-basic-menu="true" data-vce-basic-menu-to-sandwich="false">
<div class="vce-basic-menu-inner vce vce-basic-menu--style-text--color-3E3D3D vce-basic-menu--style-sub-menu-text--color-3E3D3D vce-basic-menu--style-sub-menu-background--color-ffffff vce-basic-menu--style-sub-menu-outline--color-EDEDED" data-vce-do-apply="margin padding border background  el-8ab16ef6">
<div class="vce-basic-menu">
<div class="vce-basic-menu-wrapper vce-basic-menu--alignment-left">
<ul class="menu">
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-111">
<a href="/tt/one.ufl.edu/">One.UF</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-112">
<a href="/tt/my.ufl.edu/ps/signon.html">MyUFL</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-113">
<a href="/tt/webmail.ufl.edu/">Webmail</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-114">
<a href="/tt/elearning.ufl.edu">eLearning</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-115">
<a href="/tt/ufalert.ufl.edu/">UF Alerts</a>
</li> 
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first" id="el-d02048ce">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-d02048ce">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-d02048ce">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-6eae9abe" data-vce-do-apply="all el-6eae9abe">
<h2>Resources</h2>
</div>
</div>
<div class="vce-basic-menu-container" id="el-11ed2a8d" data-vce-basic-menu="true" data-vce-basic-menu-to-sandwich="false">
<div class="vce-basic-menu-inner vce vce-basic-menu--style-text--color-3E3D3D vce-basic-menu--style-sub-menu-text--color-3E3D3D vce-basic-menu--style-sub-menu-background--color-ffffff vce-basic-menu--style-sub-menu-outline--color-EDEDED" data-vce-do-apply="margin padding border background  el-11ed2a8d">
<div class="vce-basic-menu">
<div class="vce-basic-menu-wrapper vce-basic-menu--alignment-left">
<ul class="menu">
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10915">
<a href="/tt/report.ufl.edu/">Report Discrimination, Harassment or Misconduct</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2478">
<a href="/tt/catalog.ufl.edu/ugrad/current/Pages/dates-and-deadlines.aspx">Academic Calendar</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2479">
<a href="/tt/jobs.ufl.edu/">Jobs</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2480">
<a href="/tt/policy.ufl.edu">Policies</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2481">
<a href="/tt/regulations.ufl.edu/">Regulations</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2482">
<a href="http://assistive.usablenet.com/tt/publicrecords.ufl.edu/">Public Records</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6071">
<a href="/tt/titleix.ufl.edu/">Title IX</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-10729">
<a href="/tt/www.bkstr.com/floridastore/home">Bookstore</a>
</li> 
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last" id="el-7ba93a26">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-7ba93a26">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-7ba93a26">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-f6df802e" data-vce-do-apply="all el-f6df802e">
<h2>Website</h2>
</div>
</div>
<div class="vce-basic-menu-container" id="el-189133f3" data-vce-basic-menu="true" data-vce-basic-menu-to-sandwich="false">
<div class="vce-basic-menu-inner vce vce-basic-menu--style-text--color-3E3D3D vce-basic-menu--style-sub-menu-text--color-3E3D3D vce-basic-menu--style-sub-menu-background--color-ffffff vce-basic-menu--style-sub-menu-outline--color-EDEDED" data-vce-do-apply="margin padding border background  el-189133f3">
<div class="vce-basic-menu">
<div class="vce-basic-menu-wrapper vce-basic-menu--alignment-left">
<ul class="menu">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6583">
<a href="/tt/www.ufl.edu/a-z-website-listing/">A-Z Listing</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-124">
<a href="http://assistive.usablenet.com/tt/accessibility.ufl.edu/">Accessibility</a>
</li> 
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11477">
<a href="/tt/privacy.ufl.edu/privacy-policies-and-procedures/onlineinternet-privacy-statement/">Online/Internet Privacy Statement</a>
</li> 
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
</div>
<div class="vce-row-container">
<div class="vce-row vce-element--has-background vce-row--col-gap-30 copyRight_Row vce-row-equal-height vce-row-content--top" data-vce-full-width="true" id="el-5a97dd8e" data-vce-do-apply="all el-5a97dd8e">
<div class="vce-content-background-container"></div>
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" id="el-a2599b9d">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-a2599b9d">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-a2599b9d">
<div class="vce-text-block">
<div class="vce-text-block-wrapper vce" id="el-4006edfb" data-vce-do-apply="all el-4006edfb">&copy; 2024 University of Florida</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="vcv-popup-277" class="vcv-popup-container">
<div class="vce-popup-root-container vce-popup-position-center-top searchWrapper" id="el-a1d60978" role="dialog" hidden="" aria-hidden="true">
<div class="vce-popup-root-wrapper vce-popup-close-icon-inside vce-popup-root-close-button-medium">
<div class="vce-popup-root-inner" data-vce-do-apply="margin el-a1d60978">
<button class="vce-popup-root-close-button" aria-label="Close"><span class="vce-icon-button-icon-wrapper vcv-ui-icon-material vcv-ui-icon-material-close vce-popup-root-close-button--shape-none"></span></button>
<div class="vce-popup-root vce-full-width-custom-container vce-popup-root--shape-square" data-vce-do-apply="border  background padding el-a1d60978">
<div class="vce-content-background-container"></div>
<div class="vce-popup-root-inner">
<div class="vce-row-container">
<div class="vce-row vce-row--col-gap-0 vce-row-equal-height vce-row-content--middle" data-vce-full-width="true" id="el-7d91dada" data-vce-do-apply="all el-7d91dada">
<div class="vce-row-content" data-vce-element-content="true">
<div class="vce-col vce-col--xs-auto vce-col--all-last vce-col--all-first" id="el-ad6a334d">
<div class="vce-col-inner" data-vce-do-apply="border margin background  el-ad6a334d">
<div class="vce-col-content" data-vce-element-content="true" data-vce-do-apply="padding el-ad6a334d">
<div class="vce-raw-html">
<div class="vce-raw-html-wrapper" id="el-ec0bf400" data-vce-do-apply="all el-ec0bf400">
<div class="gcse-search" enableorderby="true"></div>
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
</div>
</div>
<link rel="preload" as="font" id="rs-icon-set-revicon-woff" type="font/woff" crossorigin="anonymous" media="all" href="/tt/www.ufl.edu/wp-content/plugins/revslider/public/assets/fonts/revicons/revicons.woff?5510888">
</div>
<div lang="en">
<a class="un_hidden_link" accesskey="t" href="#un_jtt_tp" rel="nofollow"><img alt="Assistive Options" height="0" width="0" src="/tt/images/spacer.gif"></a>
<p>
<a href="#" rel="nofollow">Top of page</a>
</p>
<hr>
<div>
<h1 class="accesskey">
<a name="un_jtt_tp">Assistive Options</a>
</h1>
<ul>
<li> Change the current font size: <a title="increase font size" href="/tt/www.ufl.edu/?un_jtt_font_size_perc=1.20" rel="nofollow">larger</a> | <span title="default font size set">default</span> | <a title="decrease font size" href="/tt/www.ufl.edu/?un_jtt_font_size_perc=0.83" rel="nofollow">smaller</a>
</li>
<li> Current color mode is <strong>Black on White</strong>, other available mode: <a href="/tt/www.ufl.edu/?un_jtt_color_mode=0" rel="nofollow">Yellow on Black</a>
</li>
<li>Show textual links as <a href="/tt/www.ufl.edu/?un_jtt_squared_link_mode=1" rel="nofollow">buttons</a>
</li>
<li>
<a href="/tt/www.ufl.edu/?un_jtt_move_elts_mode=0" rel="nofollow">Do not move navbars</a>
</li>
<li>
<a href="/tt/www.ufl.edu/?un_jtt_show_speedbumps=2" rel="nofollow">Do not alert me</a> when leaving dynamic conforming version</li>
<li>Open <a href="/tt/www.ufl.edu/?un_jtt_show_docs=1" rel="nofollow">not handled documents directly</a>
</li>
<li>
<a href="/tt/www.ufl.edu/?un_jtt_show_parameters=0" rel="nofollow">Hide Assistive Options</a>
</li>
</ul>
<p> Open the <a title="original version located at https://www.ufl.edu/" href="https://www.ufl.edu/">original version</a> of this page. </p>
</div>
<p>
<a href="https://usablenet.com/technology/assistive">UsableNet Assistive</a> is a <a href="https://www.usablenet.com/">UsableNet</a> product. <a href="/tt/index.html">UsableNet Assistive Main Page</a>. </p>
</div>
</body>
</html>
