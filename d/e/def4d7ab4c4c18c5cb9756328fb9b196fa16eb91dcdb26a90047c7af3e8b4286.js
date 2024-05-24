/*! 20240125-18-RELEASE */

(e=>{const t=/^(\/react)((\.|-)(.)+)*\.js/;class r{constructor(e){this.trcManager=e}static getInstance(e){return r.instance||(r.instance=new r(e)),r.instance}static detectSpa(){const e=r.detectAngular(),t=r.detectAngularJs(),n=r.detectReact(),a=r.detectVue();return{isSpa:t||e||n||a,isAngularJs:t,isAngular:e,isReact:n,isVue:a}}sendSpaData(){if(!TRC.SpaDetector.dataSent){const e=r.detectSpa();this.sendGenericEvent(e)}}sendGenericEvent(e){if(!this.checkSessionAndUser())return;const t={data:JSON.stringify(e),type:"spa-measurements"};this.trcManager.sendEvent("pubs-generic",{d:JSON.stringify(t)},{}),TRC.SpaDetector.dataSent=!0}checkSessionAndUser(){const e=this.trcManager.response&&this.trcManager.response.trc?this.trcManager.response.trc["session-data"]:null;return TRC.pageManager.getUserId()&&this.trcManager.getSessionData(e)}static detectReact(){return!!(e.React||document.querySelector("[data-react], [data-reactroot], [data-reactid]")||r());function r(){const e=document.querySelectorAll('script[src*="/react"]');if(!e)return!1;const r=Array.prototype.slice.call(e).map(e=>e.src).map(e=>e.substring(e.indexOf("/react"))).filter(e=>t.test(e));return r.length>0}}static detectVue(){return!!(e.Vue||document.querySelector("[v-for], [v-bind], [v-once], [v-on]")||document.querySelector('script[src*="vue.js"]'))}static detectAngularJs(){return!!(e.angular||document.querySelector(".ng-binding, [ng-app], [data-ng-app], [ng-controller], [data-ng-controller], [ng-repeat], [data-ng-repeat]")||document.querySelector('script[src*="angular.js"], script[src*="angular.min.js"]'))}static detectAngular(){return!!(e.getAllAngularRootElements||document.querySelector("[ng-version]")&&document.querySelector("[ng-version]").getAttribute("ng-version")[0]>=2)}}TRC.SpaDetector=r})(window);confJsonData = data;
    base_url_json = confJsonData.feedPath;
    widgetUrl = confJsonData.widgetJS;
    cssJsUrl = confJsonData.staticPath;
    imgUrl = confJsonData.imgUrl;
    base_url_default_image = confJsonData.base_url_default_image;
    base_url_default_party = confJsonData.base_url_default_party;
    cssJSUrlComm = confJsonData.cssJSUrlComm;
    base_url_party = confJsonData.base_url_party;
    edata_twitter_host = confJsonData.edata_twitter_host;
    
    base_url_candidate = confJsonData.base_url_candidate;
    //$.ajaxSetup({cache: true});
    jQuery.ajax({
        url: confJsonData.jsPath+'common.js?ver='+confJsonData.ver,
        dataType: "script",
        async: false,
        cache:true,
        success: function(){
            console.log('Common script loaded');
        }
    });    
});