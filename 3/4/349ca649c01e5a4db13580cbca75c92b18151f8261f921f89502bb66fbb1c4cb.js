
(function(){

    function docReady(fn) {
        if(document.readyState === "complete" || document.readyState === "interactive"){
            setTimeout(fn, 1);
        }else{
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    function getSearchParameters() {
        var prmstr = window.location.search.substr(1);
        return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
    }

    function loadAsyncScript(src, callback){
        var script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.async = true;
        if(callback != null){
            if (script.readyState) { // IE, incl. IE9
                script.onreadystatechange = function() {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                script.onload = function() { // Other browsers
                    callback();
                };
            }
        }
        a=document.getElementsByTagName('script')[0];
        a.parentNode.insertBefore(script,a);
    }

    function transformToAssocArray( prmstr ) {
        var params = {};
        var prmarr = prmstr.split("&");
        for ( var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        return params;
    }

    function create_cookie_sync(url){
        var ifrm = document.createElement("iframe");
        ifrm.src = url;
        ifrm.scrolling = "no";
        ifrm.frameBorder = 0;
        ifrm.width = 0;
        ifrm.height = 0;
        ifrm.style.margin = 0;
        ifrm.style.padding = 0;
        ifrm.style.display = "none";
        ifrm.style.width = "0px";
        ifrm.style.height = "0px";
        document.body.append(ifrm);
    }

    function call_cookies_sync(){
        docReady(function() {
            var count_cookie_sync = 0;

            create_cookie_sync("https://csync.smilewanted.com/drop_cookie_sw.php");

            if(output_list_cookies_sync.length > 0){
                output_list_cookies_sync.forEach(function(cookie_sync_url){
                    setTimeout(function(){

                        cookie_sync_url = cookie_sync_url.replaceAll('[GDPR_APPLIES]', gdpr_applies);
                        cookie_sync_url = cookie_sync_url.replaceAll('[GDPR_CONSENT_STRING]', consent_string);

                        create_cookie_sync(cookie_sync_url);
                    }, 50*count_cookie_sync);

                    count_cookie_sync++;
                });
            }
        });
    }

    var list_cookies_sync = {"smart":{"order":0,"redirect_url":"https:\/\/sync.smartadserver.com\/getuid?gdpr_consent=[GDPR_CONSENT_STRING]&nwid=2491&url=https:\/\/csync.smilewanted.com\/set_partner_userid_get\/smart\/[sas_uid]"},"appnexus":{"order":1,"redirect_url":"https:\/\/secure.adnxs.com\/getuid?https:\/\/csync.smilewanted.com\/set_partner_userid_get\/appnexus\/$UID"},"rubicon":{"order":2,"redirect_url":"https:\/\/pixel.rubiconproject.com\/exchange\/sync.php?p=pbs-smilewanted&gdpr=[GDPR_APPLIES]&gdpr_consent=[GDPR_CONSENT_STRING]"},"pubmatic":{"order":3,"redirect_url":"https:\/\/ads.pubmatic.com\/AdServer\/js\/user_sync.html?p=158810&gdpr=[GDPR_APPLIES]&gdpr_consent=[GDPR_CONSENT_STRING]&predirect=https%3A%2F%2Fcsync.smilewanted.com%2Fset_partner_userid_get%2Fpubmatic%2F"},"improve":{"order":4,"redirect_url":"https:\/\/ice.360yield.com\/server_match?r=https:\/\/csync.smilewanted.com\/set_partner_userid_get\/improve\/{PUB_USER_ID}&partner_id=1010"},"openx":{"order":5,"redirect_url":"https:\/\/u.openx.net\/w\/1.0\/cm?id=158474f5-20ec-4fcc-8ba8-4c101c556b25&gdpr=[GDPR_APPLIES]&gdpr_consent=[GDPR_CONSENT_STRING]&r=https%3A%2F%2Fcsync.smilewanted.com%2Fset_partner_userid_get%2Fopenx%2F"},"sovrn":{"order":6,"redirect_url":"https:\/\/ap.lijit.com\/pixel?gdpr=[GDPR_APPLIES]&gdpr_consent=[GDPR_CONSENT_STRING]&redir=https%3A%2F%2Fcsync.smilewanted.com%2Fset_partner_userid_get%2Fsovrn%2F%24UID"},"adform":{"order":7,"redirect_url":"https:\/\/cm.adform.net\/cookie?redirect_url=https%3A%2F%2Fcsync.smilewanted.com%2Fset_partner_userid_get%2Fadform%2F%24UID"},"adwmg":{"order":8,"redirect_url":"https:\/\/us.shb-sync.com\/d3cf52c0-fa89-45fb-83fa-f14d2af39226.gif?puid=[UID]&redir=https%3A%2F%2Fcsync.smilewanted.com%2Fset_partner_userid_get%2Fadwmg%2F%5BUID%5D&gdpr=[GDPR]&gdpr_consent=[GDPR_CONSENT]&ccpa=[CCPA]"},"smaato":{"order":9,"redirect_url":"https:\/\/s.ad.smaato.net\/c\/?adExInit=smile&gdpr=[GDPR]&gdpr_consent=[GDPR_CONSENT]&redir=https%3A%2F%2Fcsync.smilewanted.com%2Fset_partner_userid_get%2Fsmaato%2F%24UID"}};

    var output_list_cookies_sync = [];

    for(let [key, value] of Object.entries(list_cookies_sync)){
        output_list_cookies_sync[value.order] = value.redirect_url;
    }

    var gdpr_applies = 0;
    var consent_string = '';
    var params = getSearchParameters();
    var force_calls = false;

    
    setTimeout(function(){

        try{
            if(typeof top.window.__tcfapi !== 'undefined'){
                top.window.__tcfapi('getTCData', 2, function (tcData, success){
                    if(success){
                        gdpr_applies = tcData.gdprApplies ? 1 : 0;
                        consent_string = tcData.tcString;
                    }
                });
            }else{
                if(params.gdpr && params.gdpr_consent){
                    gdpr_applies = params.gdpr;
                    consent_string = params.gdpr_consent;
                }else{
                    force_calls = true;
                }
            }
        }catch(e){
            if(params.gdpr && params.gdpr_consent){
                gdpr_applies = params.gdpr;
                consent_string = params.gdpr_consent;
            }else{
                force_calls = true;
            }
        }

        loadAsyncScript("https://static.smilewanted.com/js/decode_consent/decode_consent.js", function() {
            if((sw_consent.vendor_allowed(consent_string, 639) && sw_consent.purpose_allowed(consent_string, 1) && sw_consent.purpose_allowed(consent_string, 2)) || force_calls){
                call_cookies_sync();
            }
        });
    }, 50);
})();

e)}}(),c.lang=navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage,c.ref=r.referrer(),c.pb=t.isPassback?1:0,c.rfc=t.refreshCount,c.gdpr=function(){const e={};return t.gdprConsent&&(e.consentString=t.gdprConsent.consentData,e.consentRequired="boolean"==typeof t.gdprConsent.gdprApplies&&t.gdprConsent.gdprApplies),e}(),c.usp=function(){let e="";return t.uspConsent&&(e=t.uspConsent.uspString),e}(),e.catag&&(c.ca=e.catag?1:0),e.performance&&(c.perf=1),e.performanceBackfillDisabled?c.perf_excl=1:c.perf_excl=0,c}();if(!s||!s.a||s.a.length<=0)return!1;const c=new RegExp(o,"gim"),d=JSON.stringify(s).replace(/'|&|#/g,"").replace(c,"&");return{url:function(){let e="https://ads.servenobid.com/";const t=r.queryString["nobid-env"];return t?"beta"===t?e="https://beta.servenobid.com/":"dev"===t?e="https://localhost:8282/":"qa"===t&&(e="https://qa-ads.nobid.com/"):e="https://ads.servenobid.com/",e}()+"adreq?cb="+Math.floor(11e3*Math.random()),data:d,timeout:r.getTimeout(e)}},getTimeout:function(e){return e.timeout?e.timeout:1e3},log:function(e,t){("prod"!==r.environment||r.queryString["nobid-debug"]&&""+r.queryString["nobid-debug"]=="1")&&(void 0===t?console.log("%cNoBid Tag","padding: 2px 8px 2px 8px; background-color:#f50057; color: white",e):console.log("%cNoBid Tag","padding: 2px 8px 2px 8px; background-color:#f50057; color: white",e,t))},getCookies:function(){const e=new Map,t=document&&document.cookie?document.cookie.split(";"):[];return t&&t.forEach((t=>{if(t&&t.trim().length>0){const n=(t=t.trim()).indexOf("=");if(n>0){const o=t.substring(0,n).trim(),r=t.substring(n+1).trim();e.set(o,r)}}})),e},setCookie:function(e,t,n,o){o=o||"/";const r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);const i=`expires=${r.toUTCString()}`;this.log("settings cookie: ",`${e}=${t};${i};path=${o};SameSite=None;Secure`),document.cookie=`${e}=${t};${i};path=${o};SameSite=None;Secure`},encodeCookies:function(e){const o=this.getCookies(),r=[];if(o&&o.size>0)for(const t of o.entries()){const n=t[0],o=t[1];if(n.startsWith("pid_")){const t=n.substring(4);if(t&&t.length>0){if(e&&e.indexOf(t)<0)continue;r.push(`${t}:${o}`)}}}return function(e){e=window.btoa(e);for(const o in t){const r=t[o];e=e.replaceAll(r,n[o])}return e}(r.join("|"))}};r.queryString=r.parseQueryStringParameters(r.topLocation()),r.environment=r.getEnvironment(),window.nobidQueryString=r.queryString,e.exports=r}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{const e=n(528),t=n(288);window.nobidQueryString=e.queryString,window.frameElement&&"1"===window.frameElement.getAttribute("nobid_sync_disabled")||t.nobidProcessSync()})()})();</script></body></html>