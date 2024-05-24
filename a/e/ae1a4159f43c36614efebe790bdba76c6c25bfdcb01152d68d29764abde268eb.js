
           (functio.location ? 1 : 2;
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
            var doorUrl = 'http%3a%2f%2fuk-script.dotmetrics.net%2fdoor.js%3fd%3dwww.tomsguide.com%26t%3dtg';

            var domainCookieEnabled = false;
            var useDomainCookie = hasConsent && domainCookieEnabled;
            var domainCookie = getDomainCookie(useDomainCookie);

            if(!hitDone){
                var dcOpt = useDomainCookie ? '&dc=' + domainCookie : '';
                var imgUrl = 'https://uk-script.dotmetrics.net/hit.gif?id=5242&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl;
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = function (){im.onload=null};

                var panelImgUrl = 'https://rm-script.dotmetrics.net/hit.gif?id=5242&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + pvid + '&c=' + hasConsent + '&tzOffset=' + tzOffset;
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
                                        ScriptDebugUrl:  'https://download.dotmetrics.net/Script/script.debug.js?v=a337e69b-b419-44b4-a7a3-4f2fea40106e',
                                        PingUrl: 'https://uk-script.dotmetrics.net/Ping.dotmetrics',
                                        AjaxEventUrl: 'https://uk-script.dotmetrics.net/AjaxEvent.dotmetrics',
                                        ExpFPEventUrl: 'https://uk-script.dotmetrics.net/ExpFP.dotmetrics',
                                        NCSScriptUrl: 'https://uk-script.dotmetrics.net/Scripts/ncs-script.js?v=252',
                                        NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=cdf75129-d7c6-41ca-baaa-7e791206b71a',
                                        NCSHitUrl: 'https://uk-script.dotmetrics.net/unconsentedvideohit.gif',
                                        SiteSectionId: 5242,
                                        SiteId: 948,
                                        FlashUrl: 'https://uk-script.dotmetrics.net/DotMetricsFlash.swf',
                                        TimeOnPage: 'DotMetricsTimeOnPage',
                                        AjaxEventTimeout: 500,
                                        AdexEnabled: false,
                                        AdexConfigUrl: 'https://script.api/DotMetrics.Script.Adex/adexConfig.js?v=252&id=5242',
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
})(window); c-bestListDisclosure_counter"},e._l(e.thirdMetricValues,(function(o){return t("span",{key:o},[e._v(e._s(o))])})),0)]),e._v(" "),t("span",{staticClass:"c-bestListDisclosure_topic",attrs:{"data-cy":"bestListDisclosure_topic"}},[e._v(e._s(e.thirdMetricLabel))])])]),e._v(" "),t("div",{class:{"blue-disclosure":e.showBlueDisclosure}},[t("p",{staticClass:"c-bestListDisclosure_message",attrs:{"data-cy":"bestListDisclosure_message"}},[t("span",{domProps:{innerHTML:e._s(e.disclosureText)}}),e._v(" "),e.showHowWeTest?t("span",[t("span",[e.isBestMattressArticle?t("span",{staticClass:"c-bestListDisclosure_link blue-link",on:{click:e.scrollToHowWeTest}},[e._v(e._s(e.howWeTestText))]):t("a",{staticClass:"c-bestListDisclosure_link",class:{"blue-link":e.showBlueDisclosure},attrs:{href:e.howWeTestLink},on:{click:e.trackDisclosureLink}},[e._v(e._s(e.howWeTestText))]),e._v(e._s(e.$te("how_we_test.".concat(e.primaryTopic,".cta"))?"":".")+"\n          ")])]):e._e()]),e._v(" "),e.showBlueDisclosure?t("GlobalSvgIcon",{staticClass:"c-bestListDisclosure_cursor",attrs:{id:"cursor-click"}}):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports},829:function(e,t,o){var content=o(866);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(252).default)("6b90d992",content,!0,{sourceMap:!1})},865:function(e,t,o){"use strict";o(829)},866:function(e,t,o){var r=o(251)((function(i){return i[1]}));r.push([e.i,".c-globalDisclosure{width:100%;padding:1.5rem;margin-bottom:1rem;color:#737373;word-spacing:0}.c-globalDisclosure a{color:#737373;border-bottom:solid 1px #e71d1d}.c-globalDisclosure a:hover{text-decoration:none;color:#e71d1d}.c-globalDisclosure_top{display:flex;border-bottom:1px solid #dadada}.c-globalDisclosure_top img{height:15px;width:15px;margin-right:.5rem}.c-globalDisclosure_top span{color:#141415;font-weight:700;margin-top:-2px}.c-globalDisclosure_hasText{border:1px solid #dadada}.c-globalDisclosure_message{font-size:.75rem;line-height:1rem;margin:0}.c-globalDisclosure_advertiser.cta{margin-left:auto;color:#e71d1d}.c-globalDisclosure_advertiser.cta:hover{border-bottom:solid 1px #e71d1d;cursor:pointer}.c-globalDisclosure_advertiser.msg{padding:2rem}@media(min-width: 768px){.c-globalDisclosure_advertiser.msg{max-width:45rem}}.c-globalDisclosure_advertiser.msg button{width:5.25rem;border-radius:.25rem}.c-globalDisclosure_advertiser.msg a{color:inherit;border-bottom:solid 1px #e71d1d}.c-globalDisclosure_insurance{cursor:pointer}.c-globalDisclosure_accordionSvg{width:16px;height:16px;margin-left:auto;transform:rotate(180deg)}.c-globalDisclosure_collapsedMessage .c-globalDisclosure_top{margin-bottom:0;padding-bottom:0;border-bottom:unset}.c-globalDisclosure_collapsedMessage .c-globalDisclosure_accordionSvg{transform:rotate(0deg)}",""]),r.locals={},e.exports=r},872:function(e,t,o){"use strict";o.r(t);o(5),o(6),o(27),o(43),o(34),o(24),o(29),o(19);var r,c=o(0),l=o(784),n={"auto-insurance":"insurance.default","life-insurance":"insurance.life","home-insurance":"insurance.default",insurance:"insurance.default","credit-cards":"credit_cards",fitness:"fitness",exercising:"","fitness-equipment":"fitness","fitness-accessories":"fitness","fitness-tech":"fitness","virtual-fitness":"fitness","sleep-tech":"sleep",sleep:"sleep",mattresses:"sleep","bed-accessories":"sleep"},d={"life-insurance":"text.insurance.modal.life","auto-insurance":"text.insurance.modal.auto"},h={laptops:"computers",desktops:"computers","credit-cards":"credit_cards"},_=["auto-insurance","life-insurance","home-insurance","insurance"],m=o(35),v=o(51),f=o(140),D=class extends l.Vue{constructor(){super(...arguments),this.hideMessage=!1,this.insuranceModal=!1}get disclosureText(){var e=n[this.primaryTopicSlug];return this.isDealsTrustStatement&&(e="deals"),this.disclosureMessage?this.disclosureMessage:this.$te("disclosure.text.".concat(e))?this.$t("disclosure.text.".concat(e)):v.a.isTopicContent({topics:this.topics},m.d)?this.$t("disclosure.text.wellness"):this.$t("disclosure.text.default")}get howWeTestKey(){var e=h[this.primaryTopicSlug];return e||(this.hasRouterTopic?"internet_routers":this.primaryTopicSlug.replace(/-/g,"_"))}get showHowWeTest(){return this.howWeTestText&&this.howWeTestLink&&!this.isDealsTrustStatement&&this.showDisclosureHeader}get howWeTestText(){return this.$te("how_we_test.".concat(this.howWeTestKey,".cta"))?this.$t("how_we_test.".concat(this.howWeTestKey,".cta")).toString():this.$t("how_we_test.everything.cta").toString()}get howWeTestLink(){return this.$te("how_we_test.".concat(this.howWeTestKey,".link"))?this.$t("how_we_test.".concat(this.howWeTestKey,".link")).toString():this.$t("how_we_test.everything.link").toString()}get hasRouterTopic(){return Object(f.g)(this.topics,"internet-routers")}get isCollapsedMessage(){return this.isAccordion&&this.hideMessage}get isDealsTrustStatement(){return this.$services.isFeatureEnabled("isDealsArticleType")}get showDisclosureHeader(){return!(this.$services.isFeatureEnabled("paidContent")||this.$services.isFeatureEnabled("paidMedia"))}get isInsurance(){return _.includes(this.primaryTopicSlug)}get financeDisclosure(){var e=d;return this.isInsuranceModal&&void 0!==e[this.primaryTopicSlug]?e[this.primaryTopicSlug]:"modal.finance"}get showAdvertiserDisclosureModal(){var e=v.a.isTopicContent({topics:this.topics},m.c);return this.isInsurance||e}get isInsuranceModal(){return this.insuranceModal}get logoSource(){return this.$staticAsset("images/logos/cnet-short.png")}get primaryTopicSlug(){return Object(f.d)(this.topics)}toggleModal(e){if(this.$refs.advertiserModal){var t=this.$refs.advertiserModal;e?t.close():t.open()}}created(){this.hideMessage=this.isCollapsedMessageOnInit}};Object(c.c)([Object(l.Prop)({default:null,type:String}),Object(c.f)("design:type",String)],D.prototype,"disclosureMessage",void 0),Object(c.c)([Object(l.Prop)({default:!1,type:Boolean}),Object(c.f)("design:type",Boolean)],D.prototype,"isAccordion",void 0),Object(c.c)([Object(l.Prop)({default:!1,type:Boolean}),Object(c.f)("design:type",Boolean)],D.prototype,"isCollapsedMessageOnInit",void 0),Object(c.c)([Object(l.Prop)({default:!1,type:Boolean}),Object(c.f)("design:type",Boolean)],D.prototype,"isNrgGeoRedesign",void 0),Object(c.c)([Object(l.Prop)({default:()=>[],type:Array}),Object(c.f)("design:type","function"==typeof(r="undefined"!=typeof Array&&Array)?r:Object)],D.prototype,"topics",void 0);var w=D=Object(c.c)([Object(l.Component)({components:{GlobalModal:()=>o.e(126).then(o.bind(null,818)).then((e=>e.default)),GlobalSvgIcon:()=>o.e(129).then(o.bind(null,785)).then((e=>e.default))}})],D),x=(o(865),o(124)),component=Object(x.a)(w,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-globalDisclosure",class:{"c-globalDisclosure_hasText g-text-xxxsmall":e.disclosureText,"c-globalDisclosure_collapsedMessage":e.isCollapsedMessage}},[e.showDisclosureHeader?t("div",{staticClass:"c-globalDisclosure_top g-outer-spacing-bottom-medium g-inner-spacing-bottom-medium",on:{click:function(t){e.hideMessage=!e.hideMessage}}},[t("img",{attrs:{src:e.logoSource,alt:e.$t("cnet_logo")}}),e._v(" "),t("span",{staticClass:"g-text-xxsmall"},[e._v(e._s(e.$t("why_trust_cnet")))]),e._v(" "),e.showAdvertiserDisclosureModal?t("div",{staticClass:"c-globalDisclosure_advertiser cta",attrs:{role:"button"},on:{click:function(t){e.toggleModal(),e.insuranceModal=!1}}},[e._v(e._s(e.$t("disclosure.modal.advertiser_disclosure")))]):e._e(),e._v(" "),e.isAccordion?t("GlobalSvgIcon",{staticClass:"c-globalDisclosure_accordionSvg",attrs:{id:"chevron"}}):e._e()],1):e._e(),e._v(" "),t("p",{staticClass:"c-globalDisclosure_message",class:{"u-hidden":e.isCollapsedMessage}},[t("span",{domProps:{innerHTML:e._s(e.disclosureText)}}),e._v(" "),e.isInsurance?t("span",[e._v("\n      "+e._s(e.$t("disclosure.text.please_see_our"))+"\n      "),t("a",{staticClass:"c-globalDisclosure_insurance",attrs:{role:"button"},on:{click:function(t){e.toggleModal(),e.insuranceModal=!0}}},[e._v("\n        "+e._s(e.$t("disclosure.text.insurance_disclosure"))+"\n      ")])]):e.showHowWeTest?t("span",[t("a",{attrs:{href:e.howWeTestLink},domProps:{innerHTML:e._s(e.howWeTestText)}})]):e._e()]),e._v(" "),e.showAdvertiserDisclosureModal?t("GlobalModal",{ref:"advertiserModal",staticClass:"c-globalDisclosure_advertiser",attrs:{"disable-scrolling":!0}},[t("div",{staticClass:"c-globalDisclosure_advertiser msg g-text-xsmall g-color-black"},[t("h5",{staticClass:"g-outer-spacing-bottom-small"},[e._v("\n        "+e._s(e.isInsuranceModal?e.$t("disclosure.text.insurance_disclosure"):e.$t("disclosure.modal.advertiser_disclosure"))+"\n      ")]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.$t("disclosure.".concat(e.financeDisclosure)))}}),e._v(" "),t("button",{staticClass:"o-button o-button-small u-text-uppercase g-outer-spacing-top-medium",attrs:{type:"button"},on:{click:function(t){return e.toggleModal(!0)}}},[e._v(e._s(e.$t("ok")))])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=9bf8cd7.modern.js.map                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       opensource">Open Source</a></li>
		<li><a href="//science.slashdot.org">Science</a></li>
		<li><a href="//yro.slashdot.org">YRO</a></li>
		<!-- <li><a href="//slashdot.org/topics.pl">more...</a></li> -->
	</ul>
</nav>
<nav class="nav-social" role="social navigation">
	<ul>
		<li class="nav-label">Follow us:</li>
		<li><a href="https://rss.slashdot.org/Slashdot/slashdotMain" target="_blank" rel="nofollow"><i class="icon-rss-squared"></i><span class="sr-only">RSS</span></a></li>
		<li><a href="https://www.facebook.com/slashdot" target="_blank" rel="nofollow"><i class="icon-facebook-squared"></i><span class="sr-only">Facebook</span></a></li>
		<li><a href="https://www.linkedin.com/company/slashdot" target="_blank" rel="nofollow"><i class="icon-linkedin-squared"></i><span class="sr-only">LinkedIn</span></a></li>
		<li><a href="https://twitter.com/slashdot" target="_blank" rel="nofollow"><i class="icon-twitter-squared"></i><span class="sr-only">Twitter</span></a></li>
		<li><a href="https://www.youtube.com/channel/UCsW36751Gy-EAbHQwe9WBNw" target="_blank" rel="nofollow"><i class="icon-youtube-squared">
                    <!-- width="1792" height="1792" -->
                    <svg viewBox="0 260 1792 1260" xmlns="http://www.w3.org/2000/svg"><path d="M711 1128l484-250-484-253v503zm185-862q168 0 324.5 4.5t229.5 9.5l73 4q1 0 17 1.5t23 3 23.5 4.5 28.5 8 28 13 31 19.5 29 26.5q6 6 15.5 18.5t29 58.5 26.5 101q8 64 12.5 136.5t5.5 113.5v176q1 145-18 290-7 55-25 99.5t-32 61.5l-14 17q-14 15-29 26.5t-31 19-28 12.5-28.5 8-24 4.5-23 3-16.5 1.5q-251 19-627 19-207-2-359.5-6.5t-200.5-7.5l-49-4-36-4q-36-5-54.5-10t-51-21-56.5-41q-6-6-15.5-18.5t-29-58.5-26.5-101q-8-64-12.5-136.5t-5.5-113.5v-176q-1-145 18-290 7-55 25-99.5t32-61.5l14-17q14-15 29-26.5t31-19.5 28-13 28.5-8 23.5-4.5 23-3 17-1.5q251-18 627-18z"/></svg>
                </i><span class="sr-only">Youtube</span></a></li>
		<li><a href="https://mastodon.cloud/@slashdot" target="_blank" rel="me nofollow"><i class="icon-mastodon-squared">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"/></svg>
				</i><span class="sr-only">Mastodon</span></a></li>
		<li><a href="//slashdot.org/newsletter" target="_blank" rel="nofollow"><i class="icon-mail-squared"></i><span class="sr-only">Newsletter</span></a></li>
	</ul>
</nav>
			</div>
		</div>

		<section>
		
			<div class="message-bar" id="firehose-message-tray">
				<span class="icon-quote-left"></span>
				<p>
					
						
						Catch up on stories from the past week (and beyond) at the <a href="//slashdot.org/archive.pl">Slashdot story archive</a>
					
				</p>
			</div>
		
		
		
			<div class="banner-wrapper">
				<div class="adwrap adwrap-unviewed banner-contain">
					
					<div id='div-gpt-ad-728x90_a'><script type='text/javascript'>
googletag.cmd.push(function(){
googletag.display('div-gpt-ad-728x90_a');});</script></div>
					<div id='div-gpt-ad-hubicon_200x90_a'><script type='text/javascript'>
googletag.cmd.push(function(){
googletag.display('div-gpt-ad-hubicon_200x90_a');});</script></div>
				</div>
			</div>
		
		<a name="main-articles"></a>
	
	<!-- header type=current end --><div id="wide">
<h1>
		404 File Not Found
		
	</h1>
<div class="generalbody">
The requested URL (/tech.slashdot.org/story/24/01/29/2239211/nyc-wants-to-create-a-first-of-its-kind-department-to-regulate-app-based-delivery?utm_source=rss0.9mainlinkanon&amp;utm_medium=feed&amp;sbsrc=yro) was not found.<p>



<p>If you feel like it, mail the url, and where ya came from to <a href="mailto:help@slashdot.org">help@slashdot.org.</a>
</div>
</div><!-- footer type=current begin -->

	
	</section>
	
	


	<footer id="fhft" class="grid_24 nf">
		<div id="logo_nf" class="fleft">
			<a href="//slashdot.org"><span>Slashdot</span></a>
		</div>
		<nav role="firehose footer">
			

			
			<ul class="fright submitstory">
					<li class="fright">
						<a href="/submit">Submit<span class="opt"> Story</span></a>
					</li>
			</ul>
		</nav>
		


	</footer>
	<section class="bq">
		<blockquote class="msg grid_24" cite="https://slashdot.org">
			<p>The best defense against logic is ignorance.</p>
			<span class="slant"></span>
		</blockquote>
	</section>
	<footer id="ft" class="grid_24">
		<nav class="grid_10" role="footer">
			<ul>
				<li><a href="//slashdot.org/faq">FAQ</a></li>
				<li><a href="//slashdot.org/archive.pl">Story Archive</a></li>
				<li><a href="//slashdot.org/hof.shtml">Hall of Fame</a></li>
				<li><a href="https://slashdotmedia.com/advertising-and-marketing-services/" rel="nofollow">Advertising</a></li>
				<li><a href="https://slashdotmedia.com/terms-of-use/" rel="nofollow">Terms</a></li>
				<li><a href="https://slashdotmedia.com/privacy-statement/" rel="nofollow">Privacy Statement</a></li>
				<li><a href="//slashdot.org/faq/slashmeta.shtml">About</a></li>
				<li><a href="mailto:feedback@slashdot.org">Feedback</a></li>
				<li><a href="#" onclick="set_mobile_pref('mobile',1);return false;">Mobile View</a></li>
				<li><a href="//slashdot.org/blog">Blog</a></li>
				<li><a href="#" id="opt-out-link"></a></li>
				<li><button class="btn opt-out" id="opt-out-button" style="display:none">
					<img src="//a.fsdn.com/sd/ccpa-optout.png" alt="Icon">
					Do Not Sell My Personal Information</button></li>

			</ul>
		</nav>
		<br>
		
		<div class="grid_14 tright tm"><span class="nobr">Copyright &copy; 2024 Slashdot Media. All Rights Reserved.</span></div>

	<div class="modal-custom overlay-custom" id="ccpa-modal" style="max-width:100%">
		<div class="modal-content modal-content-ccpa">
	    	<span class="close" id="modal-close">&times;</span>
			<div class="modal-header" id="ccpa-modal-content-destination"></div>
		</div>
	</div>

	</footer>
	
	<div class="overlay"></div>
<div class="modal-box">
    <a href="#" id="close-modal">Close</a>
    <article class="modal-content">
    </article>
    <footer>
</div>




<div id="modal_cover" class="hide" onclick="hide_modal_box(); return false;"></div>
<div id="modal_box" class="hide">
      <div id="modal_box_content"></div>
      <header class="n">
                  <span class="fadeout"></span>
                  <span class="fadeoutfade"></span>
		  <span class="pf"><a class="ico close" onclick="hide_modal_box(); return false;" href="#"><span>Close</span></a></span>
		  <h3 class="pf"><div id="logo"><a href="//slashdot.org">Slashdot</a></div><span id="preference_title"></span></h3>
      </header>
</div>
	
	<!-- CCM Tag -->
<script type="text/javascript">
bizx.cmp.ifConsent('', ['all','bombora'], function() {
        /*global _ml:true, window */
        _ml = window._ml || {};
        _ml.eid = '771';

        var s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');
        mltag.type = 'text/javascript'; mltag.async = true;
        mltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();
        s.parentNode.insertBefore(mltag, s);
});
</script>
<!-- End CCM Tag -->

<script type="text/javascript">
window.google_analytics_uacct = "UA-199823890-2";

var _gaq = _gaq || [];





  _gaq.push(['_setAccount', 'UA-199823890-2']);
  _gaq.push(['_setDomainName', '.slashdot.org']);

	
		_gaq.push(['_addIgnoredRef', 'slashdot.org']);
	


  _gaq.push(['_setCustomVar', 1, 'User Type',  'User', 3]);
	
	_gaq.push(['_setCustomVar', 2, 'Page','', 3]);

	



// track beta behavior for user
var betamatches = document.cookie.match(/betagroup=(-?\d+)/);

if(betamatches && betamatches[1]) {
  if(betamatches[1] == -1) {
    _gaq.push(['_setCustomVar', 3, 'Beta-Usage','opt-out', 3]);
  } else {
    _gaq.push(['_setCustomVar', 3, 'Beta-Usage','unredirected', 3]);
  }
}



  _gaq.push(['_trackPageview']);
  _gaq.push(['_trackPageLoadTime']);


if (window.is_euro_union === 0) {
bizx.cmp.ifConsent('', ['all'], function () {
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
});
}
</script>

<!-- CCM GA Push -->
<script>
    if (typeof _ml !== 'undefined' && _ml.us) {
        if (_ml.us.tp && _ml.us.tp.length > 0) {
            ga('set', 'dimension2', _ml.us.tp[0]);
        }
        if (_ml.us.pc && _ml.us.pc.length > 0) {
            ga('set', 'dimension7', _ml.us.pc[0]);
        }
        ga('set', 'dimension3', _ml.us.ind);
        ga('set', 'dimension4', _ml.us.cr);
        ga('set', 'dimension5', _ml.us.cs);
        ga('set', 'dimension6', _ml.us.dm);
        ga('set', 'dimension8', _ml.us.sn);
    }
</script>

<!-- Sticky Ads -->
<script type="text/javascript">
var topBannerViewed = false;
function initSticky(){
	if (SD.Ads.acceptable_ads_active) {
		return;
	}
		
	if($('#div-gpt-ad-728x90_a').length > 0 && $('#div-gpt-ad-300x250_a').length > 0 && window.outerWidth >= 1070 && !sdAdBlockActive){
	    $(window).scroll(function(){
		var y = $(document).scrollTop();
		var z =  y + window.outerHeight;
		var navOffset = 0;
		var offset = [
		    $('.nav-wrap').outerHeight(true),
		    $('.nav-secondary-wrap').outerHeight(true)
		];
		for(row in offset){
		    if(offset[row]) navOffset = navOffset + parseInt(offset[row]);
		}
		$('.adwrap-unviewed').each(function(){
		    var cls = 'adwrap-sticky';
		    var toggleCls = 'adwrap';
				//$('.banner-wrapper').css('height', $('.banner-contain').outerHeight());
		    if($(this).hasClass('railad')) {
			if(topBannerViewed){
			    var topPixels = $(this).offset().top;
			    navOffset += $('.adwrap').outerHeight();
			    if(y >= topPixels && y >= navOffset){
				$('#slashboxes').css('top', 0).css('position','sticky').css('right',13);
			    } else {
				$('#slashboxes').removeAttr('style');
			    }
			}
			return;
		    }
		    var topPixels = $(this).offset().top;
		if(y >= topPixels && y >= navOffset){
			$(this).addClass(cls);
			$(this).removeClass('adwrap');
					if(cls == 'adwrap-sticky') { //top banner
			    topBannerViewed = false;
						$('#slashboxes').css('top',$(this).outerHeight() || 0).css('position','sticky').css('right',13);
					}
		if(topBannerViewed) {
			    //console.log('hereeee');
						$('#slashboxes').css('top', 0).css('position','sticky').css('right',13);
					}
		    }else{
									//console.log('topBannerViewed', topBannerViewed);
			$(this).removeClass(cls);
			$(this).addClass(toggleCls);
			$('#slashboxes').removeAttr('style');
		    }
		});
			if($('.adwrap-viewed-banner').length > 0){
			  //console.log('ads topBanner displayed');
				topBannerViewed = true;
				$('.adwrap-viewed-banner').removeClass('adwrap-unviewed').removeClass('adwrap-sticky').addClass('adwrap');
			}
	    if($('.adwrap-viewed-railad').length > 0){
							//console.log('ads sidebar displayed');
		    $('.adwrap-viewed-railad').removeClass('adwrap-unviewed').removeClass('adwrap-railad-sticky');
				$('#slashboxes').removeAttr('style');
			}
	    });
	}
}
bizx.cmp.ifConsent('', ['all', 'google-ads'], function () {
	if (!sdAdBlockActive) {
		initSticky();
	}
	if (SD.Ads.acceptable_ads_active) {
		// similar to remove* code above in initSticky
		$('.adwrap-unviewed').removeClass('adwrap-unviewed').removeClass('adwrap-sticky').addClass('adwrap').removeClass('adwrap-railad-sticky');
		$('#slashboxes').removeAttr('style');
	}
});
</script>

<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  _paq.push(["setCookieDomain", "*.slashdot.org"]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
function initPiwikAndNels() {
  (function() {
    var u="//analytics.slashdotmedia.com/";
    _paq.push(['setTrackerUrl', u+'sd.php']);
    _paq.push(['setSiteId', 40]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'sd.js'; s.parentNode.insertBefore(g,s);
  })();

    if(window.location.pathname == '/'){
        var nelId = (location.search.split('nel_id=')[1] || '').split('&')[0];
        var url = '/ajax.pl?op=nel';
        if(nelId){
            url += '&nel_id='+nelId;
        }
        $.ajax({
            url: url,
            type: 'POST',
            success: function(html){
                $('#firehoselist article').eq(1).after(html);
            }
        });
    }
    //announcement NEL
    if(document.getElementById('announcementText')){
      $('#announcementText').hide();
      var hlUrl = '/ajax.pl?op=hl_nel';
      if(nelId){
        hlUrl += '&nel_id='+nelId;
      }
      $.ajax({
        url: hlUrl,
        type: 'POST',
        success: function(html){
          if(html.length < 10){
            $('#announcementText').show();
            return;
          }
          $('#announcementText').html(html).show();
        },
        error: function () {
          $('#announcementText').show();
        }
      });
    }
}
bizx.cmp.ifConsent('', ['storage', 'measurement'], initPiwikAndNels);
</script>


<script type="text/javascript">
_linkedin_data_partner_id = "113712";
</script><script type="text/javascript">
if (window.is_euro_union === 0) {
bizx.cmp.ifConsent('', ['all'], function (){
    (function(){var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);})();
    });
}
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=113712&fmt=gif" />
</noscript>

<!-- Datonics -->
<script type="text/javascript">
if (window.is_euro_union === 0) {
    bizx.cmp.ifConsent('', ['all'], function () {
        bizx.cmp.embedScript("//ads.pro-market.net/ads/scripts/site-143573.js", true);
    });
}
</script>
	<script id="after-content" type="text/javascript">
(function( $, fn, console ){
	$ && fn && $(function(){ fn($, console); });
})(window.jQuery, window.pageload_done, window.console);
</script>
	
	<script type='text/javascript'>
	if(!document.location.href.match(/source=autorefresh/)) {
		document.write('<img src="//slashdot.org/images/js.gif?461">');
	}
</script>
<noscript>
	<img src="//slashdot.org/images/njs.gif?504">
</noscript>
	<div class="busy genericspinner hide"><span>Working...</span></div>

	    <script>
            var regular_opt_out_link = true;

            if (bizx.cmp.show_do_not_sell()) {
                regular_opt_out_link = false;
                 document.getElementById('opt-out-button').setAttribute('style', 'display:inline');
            }

            if (window.is_euro_union === 1) {
                regular_opt_out_link = false;
                var elem = '<a href="#" title="Privacy Choices" onclick="bizx.cmp.promptConsent(); return false;">Privacy Choices</a>';
                document.getElementById('opt-out-link').innerHTML = elem;
            }

            if (regular_opt_out_link == true) {
                var elem = '<a href="https://slashdotmedia.com/opt-out-choices" title="Opt Out" rel="nofollow">Opt Out</a>';
                document.getElementById('opt-out-link').innerHTML = elem;
            }
            var cmp_modal = document.getElementById('ccpa-modal');
            var btn = document.getElementById('opt-out-button');
            var span = document.getElementById('modal-close');

            btn.onclick = function() {
            	cmp_modal.style.display = 'block';
            };

            span.onclick = function() {
            	cmp_modal.style.display = 'none';
            };

         </script>

	<script>
		if(typeof(Storage)!=="undefined"){
			window.scrollTo(0,sessionStorage.scrollPos);
				$(window).scroll(function () {
				//You've scrolled this much:
				sessionStorage.scrollPos = $(window).scrollTop();
			});
		}
		$(function(){
			$('a').click(function(){
				delete sessionStorage.scrollPos;
			})
		});
		// window.onbeforeunload = function () {
		// 	console.log('bakc button clicked');
		// 	delete sessionStorage.scrollPos;
		// }
		window.onpopstate=function() {
			delete sessionStorage.scrollPos;
		}
	</script>
	

	

	</body>
	</html>


	<!-- footer type=current end -->