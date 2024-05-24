![function(t,e,n){"use strict";e.__esModule=!0,e.execCode=e.createImageTag=e.createAndInsertScriptTag=e.setCookie=e.getCookie=e.isEmptyObject=e.startsWith=e.forEach=e.isArray=void 0,e.isArray=Array.isArray?Array.isArray:e.forEach=Array.prototype.forEach?function(t,e){if(t)for(var n=0;n<t.length;n++)t[n]&&e(t[n],n)},e.startsWith=function(t,e){if(t.length<e.length)return!1;for(var n=0;n<e.length;n++)if(t[n]!=e[n])return!1;return!0},e.isEmptyObject=var o=e.getCookie=function(t){for(var e=(document.cookie||"").split(";"),n=0;n<e.length;n++){var r=(e[n]||"").split("=");if(o(r[0])===t)return o(r[1])}return""},e.setCookie=e.createAndInsertScriptTag=function(t,e){if(null!=t&&0!=t.length){var n=document.createElement("script");n.type="text/javascript","function"==typeof e&&(n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(e(),n.onreadystatechange=null)},n.onload=e),n.src=t;var o=document.getElementsByTagName("script");o[0].parentNode.insertBefore(n,o[0])}},e.createImageTag=function(t,e){if(null!=t&&0!=t.length){var n=document.createElement("img");n.src=t,"function"==typeof e&&(n.onload=e)}},e.execCode=function(t){try{"function"==typeof t&&t()}catch(t){}}},function(t,e,n){"use strict";e.__esModule=!0;var o,r=n(0),i=n(2),a=n(3),c=n(4),s=n(5),d=n(6),l=function(t,e,n,o,i,a){if(!t||!t.href||!t.tagName||"a"!==t.tagName.toLowerCase())return null;var c=encodeURIComponent(t.href),s=r.getCookie("r_ad_token1"),d="//"+h.host+"/jump.js?q="+c+"&k="+s;"file:"===window.location.protocol&&(d="http:"+d);return{z:e,w:n,c:o,e:i,callback:j:a}},u=function(t){if("conversion"===t[0]){var e=t[2];return{z:t[1],w:e,c:t[3],e:t[4],j:"co",callback:t[5]}}if("click"===t[0])return l(t[1],t[2],t[3],t[4],t[5],"cl");if("clickAction"===t[0]){var n=t[2];if("function"!=typeof n)return l(t[1],t[3],t[4],t[5],t[6],"ca");e=t[4];return{z:t[3],w:e,c:t[5],e:t[6],callback:n,j:"ca"}}return null},f=(o="h="+encodeURIComponent(window.location.hostname.toLowerCase())+"&s="+("https:"===window.location.protocol?"1":"0")+"&p="+encodeURIComponent(window.location.pathname+window.location.search)+"&r="+encodeURIComponent(window.document.referrer||"none")+"&t="+encodeURIComponent(window.document.title),function(){return o}),p=function(){function t(){this.targets=[],this.infos=[],this.rcor=[],this.sentRcor={},this.synced=!1,this.landingCvPushed=!1,this.noBounceCvPushed=!1,this.doneDomain={},this.cvHistories=[],this.trHistories=[],this.fbqInitialized=!1}return t.prototype.send=function(t,e){var n=r.getCookie("r_ad_token1"),o=r.getCookie("r_ad_token2"),i=t.c||e.trackCd||"",a=t.d||e.domainId,c=t.y||e.y||"",s=e.ex||"",d=e.rid,l=t.j||"",u=e.time||(new Date).getTime(),p=f(),h="//"+e.host+"/cv?k="+n+"&k2="+o+"&"+p+"&x="+u+"&u="+d+"&y="+c+"&j="+l+"&d="+a+"&c="+i+"&ex="+s+"&z="+t.z;h="file:"===window.location.protocol?"http:"+h:"https:"+h,null!=t.w&&(h+="&w="+t.w),null!=t.e&&(h+="&e="+encodeURIComponent(t.e)),null!=t.g&&(h+="&g="+encodeURIComponent(t.g)),h+="&_r="+Math.floor(1e3*Math.random());var g={z:t.z,w:t.w,d:a,c:i,y:c,u:d,g:t.g,e:t.e,ex:s,k:n};this.kt.trackCV(g),this.cvHistories.push(g),r.createAndInsertScriptTag(h,t.callback),""!=t.z&&"-"!=t.z&&null!=e.retargetLists&&(k(e.retargetLists.domain,c,t.e,t.z),k(e.retargetLists.boss,c,t.e,t.z),k(e.retargetLists.client,c,t.e,t.z))},t.prototype.checkInfoConditionAndSend=function(t,e){t.d&&t.d!==e.domainId||1===e.tagControlFlag&&t.d!==e.domainId&&""!==t.z&&"-"!==t.z||t.c&&t._sent&&t._sent[e.domainId]||(t._sent=t._sent||{},t._sent[e.domainId]=!0,this.send(t,e))},t.prototype.addInfo=function(t){var e=this;this.infos.push(t),r.forEach(this.targets,()},t.prototype.addTarget=function(t){var e=this,n=t.domainId,o=t.trackCd||"";void 0===this.targets[n]&&(this.targets[n]={});var i=this.targets[n],a=!1;return o&&!i[o]?(i[o]=t,delete i[""],a=!0):!o&&r.isEmptyObject(i)&&(i[o]=t,a=!0),a&&r.forEach(this.infos,(),a},t.prototype.addLandingCvInfo=function(){this.landingCvPushed||(this.addInfo({z:"",w:0,e:window._rad9_e,g:window._rad9_g,j:"ld"}),this.landingCvPushed=!0)},t.prototype.addNoBounceCvInfo=function(){this.noBounceCvPushed||(this.addInfo({z:"-",j:"nb"}),this.noBounceCvPushed=!0)},t}();window._RAD9=window._RAD9||{radx:new p};var h=window._RAD9.radx,g=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.forEach(t,(function(t){var e;(e="string"==typeof t?{z:t,j:"co"}:r.isArray(t)?u(t):t)&&h.addInfo(e)})),t.length},y=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return r.forEach(t,(function(t){if("number"==typeof t){var e="https://"+h.host+"/rcor/"+t+"/"+r.getCookie("r_ad_token1")+"/";if(h.sentRcor[e])return;r.createImageTag(e),h.trHistories.push(e),h.kt.trackTR("rcor",e),h.sentRcor[e]=!0}})),t.length},m=function(t,e,n,o){var r=function(t){var r=function(t){switch(t){case"q":case null:return window.location.href;case"u":return window.location.host+window.location.pathname;case"t":return document.title;case"r":return document.referrer;case"y":return e;case"e":return n;case"z":return o;default:return window.location.href}}(t.i);if(null==r)return!1;var i=function(t,e,n){switch(n){case void 0:case null:case"c":return-1!==t.indexOf(e);case"e":return t===e;case"p":return t.slice(0,e.length)==e;case"s":return t.slice(-e.length)==e;case"r":return new RegExp(e).test(t);default:return!1}}(r,t.k,t.m);return"o"===t.t?i:"x"===t.t&&!i},i=return function(t){for(var e=0;e<t.length;e++)if(!i(t[e]))return!1;return!0}(t)},v=_=function(t){var e=window.location.protocol;r.forEach(t,(function(t){r.execCode("https:"===e?t.scheme.https:"http:"===e?t.scheme.http:null)}))},w=function(t){var e="http:"===window.location.protocol?1:"https:"===window.location.protocol?2:0;r.forEach(t,(function(t){if(0===t.protocol||t.protocol===e){var n=t.page;"string"==typeof n?new RegExp(n).test(window.location.host+window.location.pathname)&&r.execCode(t.code):m(n,null,null,null)&&r.execCode(t.code)}}))},k=function(t,e,n,o){var i=function(t){var e="3"===t.apiGroup?r.createAndInsertScriptTag:r.createImageTag;r.forEach(t.trackers,(function(n){r.startsWith(n,"//")||r.startsWith(n,"http://")||r.startsWith(n,"https://")?(r.startsWith(n,"//")&&"file:"===window.location.protocol&&(n="http:"+n),e(n)):r.execCode(Function(n)),h.trHistories.push(n),h.kt.trackTR(t.apiGroup,n)}))};r.forEach(t,(function(t){var a;t.sent||null!=t.conditions&&m(t.conditions,e,n,o)&&(a=t.id,h.rcor.push(a),r.forEach(t.adRetargetLists,i),t.sent=!0)}))},b=function(t){h.host=t.host,h.drHost=t.drHost;var e=try{if(null==h.kt&&(h.kt=t.kt?new i.TableKT(t.kt):new i.IgnoreKT),h.kt.trackINI(t),h.fbqInitialized||(s.initFbq(),h.fbqInitialized=!0),h.addTarget(t)){a.initLecGtag(),c.initYtag();var n=h.doneDomain[t.domainId];h.addLandingCvInfo(),setTimeout((,t.nbw||2e4),t.retargetLists&&(n||k(t.retargetLists.domain,t.y,null,null),k(t.retargetLists.client,t.y,null,null),k(t.retargetLists.boss,t.y,null,null)),t.commonTags&&(n||v(t.commonTags.domain),v(t.commonTags.client),v(t.commonTags.boss)),t.commonOptionTags&&(n||_(t.commonOptionTags.domain),_(t.commonOptionTags.client),_(t.commonOptionTags.boss)),t.pageTags&&(n||w(t.pageTags.domain),w(t.pageTags.client),w(t.pageTags.boss)),h.doneDomain[t.domainId]=!0}else t.retargetLists&&(e(t.retargetLists.domain),e(t.retargetLists.client),e(t.retargetLists.boss))}catch(t){}},C=function(t){if(t.ridScript)try{t.ridScript((function(e){t.rid=void 0!==e&&null!=e?e.toString():"",b(t)}))}catch(e){t.rid="",b(t)}else t.rid=r.getCookie("s_rid")||r.getCookie("s_cap_id")||"",b(t)},T=function(t){if(t.extraLoggingScript)try{t.extraLoggingScript((function(e){t.ex=void 0!==e&&null!=e?e.toString():"",C(t)}))}catch(e){t.ex="",C(t)}else t.ex="",C(t)},E=function(t){if(t.topicFeedScript)try{t.topicFeedScript((function(e){t.y=void 0!==e&&null!=e?e.toString():"",T(t)}))}catch(e){t.y="",T(t)}else t.y="",T(t)};window._RAD9.track=function(t){var e=function(t,e){return t.replace(/{w(\d*)}/g,(function(t){for(var n,o=[],r=1;r<arguments.length;r++)o[r-1]=arguments[r];return n=0===o[0].length?1:Number(o[0])||1,Math.floor(n*e).toString()}))},n=function(e,n){for(var o in e)if(e.hasOwnProperty(o))for(var i=e[o],a="string"==typeof i?[i]:i,c=0;c<a.length;c++){var s=n(a[c],t.w);null!=s&&(r.startsWith(s,"//")||r.startsWith(s,"http://")||r.startsWith(s,"https://")?(r.startsWith(s,"//")&&"file:"===window.location.protocol&&(s="http:"+s),h.trHistories.push(s),h.kt.trackTR(o,s),r.createImageTag(s)):(r.execCode(Function(s)),h.trHistories.push(s),h.kt.trackTR(o,s)))}};if(t.trackers){var o=function(t){n(t,(function(t){return t}))};r.forEach(t.trackers.domain,o),r.forEach(t.trackers.client,o),r.forEach(t.trackers.boss,o)}if(t.cvTrackers){var i=r.forEach(t.cvTrackers.domain,i),r.forEach(t.cvTrackers.client,i),r.forEach(t.cvTrackers.boss,i)}},window._RAD9.sync=function(t,e){if(!h.synced){h.synced=!0;var n=location.hostname.split(".").reverse(),o=n[0],i=n.length,a=new Date;a.setDate(a.getDate()+180),e||(e=t);for(var c=a.toUTCString(),s=1;s<i;s++)o=n[s]+"."+o,(1!==s||"jp"!==n[0]||n[1].length>2)&&(r.setCookie("r_ad_token1",t,c,o),r.setCookie("r_ad_token2",e,c,o));for(_rad9.push=g;_rad9.length>0;)g(_rad9.shift());for(d.callbackAfterLanding(h.drHost,t,e),h.rcor.push=y;h.rcor.length>0;)y(h.rcor.shift())}},window._RAD9.run=function(t){if(!location.hostname.match(/zexy\.net$/)||!navigator.userAgent.match(/XYAPP/))if(t.trackCd||!t.trackCdScript)E(t);else try{t.trackCdScript((function(e){if(void 0!==e&&null!=e&&""!==e){var n="//"+t.host+"/"+t.domainId+"/ra"+e+".js";r.createAndInsertScriptTag(n)}else E(t)}))}catch(e){E(t)}},window._rad9=window._rad9||[],window.lec_get_token=window.lec_get_token||[],window.lec_synd=window.lec_synd||[],window.lec_synp=window.lec_synp||[]},function(t,e,n){"use strict";e.__esModule=!0,e.TableKT=e.IgnoreKT=void 0;var o=n(0),r=function(){eturn t.prototype.trackINI=function(t){},t.prototype.trackCV=t.prototype.trackTR=t}();e.IgnoreKT=r;var i=function(){function t(e){this.cols=["time","k","z","w","d","c","y","e"],this.kt=e;var n=document.createElement("div");n.style.position="fixed",n.style.border="none",n.style.right="0",n.style.top="0",n.style.margin="0",n.style.padding="0",n.style.backgroundColor="transparent",n.style.width="50%",n.style.height="100%",n.style.zIndex="9999999999",n.style.opacity="0.7",n.style.overflow="auto",n.style.pointerEvents="none",document.documentElement.appendChild(n);var r=document.createElement("thead"),i=document.createElement("tr");o.forEach(this.cols,(),r.appendChild(i);var a=document.createElement("tbody");this.tbody=a;var c=document.createElement("table");c.border="1",c.style.width="100%",c.style.color="#000",c.style.backgroundColor="#fff",c.style.borderCollapse="collapse",c.style.pointerEvents="auto",c.appendChild(r),c.appendChild(a),n.appendChild(c);var s=!0,d=!0,l=!1,u=function(){l?(d=!d,a.style.visibility=d?"visible":"collapse",l=!1):(l=!0,setTimeout((function(){l&&(s=!s,n.style.right=s?"0":"",n.style.left=s?"":"0"),l=!1}),300))};r.addEventListener?r.addEventListener("click",u,!1):r.attachEvent&&r.attachEvent("onclick",u)}return t.prototype.trackCV=function(e){var n=document.createElement("tr");n.style.backgroundColor="#fff",o.forEach(this.cols,(function(o){"time"===o?t.appendTo(n,"td",t.timeString()):t.appendTo(n,"td",null==e[o]?"":e[o])})),this.tbody.appendChild(n)},t.prototype.trackTR=function(e,n){if("2"===this.kt){var o,r=document.createElement("tr");r.style.backgroundColor="#efe",t.appendTo(r,"td",t.timeString()),(o=t.appendTo(r,"td",e)).style.wordBreak="break-all",(o=t.appendTo(r,"td",n)).colSpan=6,o.style.wordBreak="break-all",this.tbody.appendChild(r)}},t.prototype.trackINI=function(e){var n="【"+(null==e.trackCd?"デフォルトタグ":null==e.trackCdScript?"個社タグ":"個社タグ2")+"】d: "+e.domainId+", c: "+(e.trackCd||"")+", h: "+window.location.host,o=document.createElement("tr");o.style.backgroundColor="#eee",t.appendTo(o,"td",t.timeString());var r=t.appendTo(o,"td",n);r.colSpan=7,r.style.wordBreak="break-all",this.tbody.appendChild(o)},t.appendTo=function(t,e,n){var o=document.createElement(e);return o.innerHTML=n,t.appendChild(o),o},t.timeString=function(){var t=new Date;return("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+"."+("00"+t.getMilliseconds()).slice(-3)},t}();e.TableKT=i},function(t,e,n){"use strict";e.__esModule=!0,e.initLecGtag=void 0,e.initLecGtag=function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://www.googletagmanager.com/gtag/js?id=AW-956136779";var e=document.getElementsByTagName("script");e[0].parentNode.insertBefore(t,e[0]),window.dataLayer=winwindow.dataLayer.push(arguments)},window.lec_gtag("js",new Date),window.lec_gtag("config","AW-956136779")}},function(t,e,n){"use strict";function o(){!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://s.yimg.jp/images/listing/tool/cv/ytag.js";var e=document.getElementsByTagName("script");e[0].parentNode.insertBefore(t,e[0]),window.yjDataLayer=window.yjDataLayer||[],yjDataLayer.push([{type:"ycl_cookie"}])}(),window.lec_yss_cv=function(t,e,n){yjDataLayer.push([{type:"yss_conversion",config:{yahoo_conversion_id:t,yahoo_conversion_label:e,yahoo_conversion_value:n}}])},window.lec_yss_rl=function(t,e){yjDataLayer.push([{type:"yss_retargeting",config:{yahoo_ss_retargeting_id:t,yahoo_sstag_custom_params:{label:e}}}])},window.lec_ydn_cv=function(t,e,n){yjDataLayer.push([{type:"yjad_conversion",config:{yahoo_ydn_conv_io:t,yahoo_ydn_conv_label:e,yahoo_ydn_conv_transaction_id:"",yahoo_ydn_conv_value:n}}])},window.lec_ydn_rl=function(t,e){yjDataLayer.push([{type:"yjad_retargeting",config:{yahoo_retargeting_id:t,yahoo_retargeting_label:e,yahoo_retargeting_page_type:"",yahoo_retargeting_items:[{item_id:"",category_id:"",price:"",quantity:""}]}}])}}n.r(e),n.d(e,"initYtag",(function(){return o}))},function(t,e,n){"use strict";function o(){var t,e,n,o,r,i;t=window,e=doguments):o.queue.push(arguments)},t._fbq||(t._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(r=e.createElement(n)).async=!0,r.src="https://connect.facebook.net/en_US/fbevents.js",(i=e.getElementsByTagName(n)[0]).parentNode.insertBefore(r,i)),fbq("set","autoConfig",!1,"1575187032583244"),fbq("init","1575187032583244")}n.r(e),n.d(e,"initFbq",(function(){return o}))},function(t,e,n){"use strict";e.__esModule=!0,e.callbackAfterLanding=void 0;var o=n(0);e.callbackAfterLanding=function(t,e,n){var r=function(n){return"//"==n.substr(0,2)&&(n=location.protocol+n),"https://"+t+"/o?__kid__="+e+"&_onent(n)},i=function(t){return t};lec_synd.convert=r,lec_synp.convert=i;for(var a=function(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return o.forEach(e,(function(e){if(o.isArray(e)&&!(e.length<2)){var n=e[0],r=e[1];if("string"==typeof n&&"function"==typeof r){var i=t(n);try{r(i)}catch(t){}}}})),e.length}},c=a(r),s=a(i);lec_synd.length>0;)c(lec_synd.shift());for(;lec_synp.length>0;)s(lec_synp.shift());lec_synd.push=c,lec_synp.push=s;for(var d=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return o.forEach(t,(function(t){if("function"!=typeof t){if(o.isArray(t)&&!(t.length<2)){var r=t[0],i=t[1];if("number"==typeof r&&"function"==typeof i)try{if(1==r)i(e);else{if(2!=r)return;i(n)}}catch(t){}}}else t(n)})),t.length};lec_get_token.length>0;)d(lec_get_token.shift());lec_get_token.push=d,_rad9.rad9GetToken1=function(){return e},_rad9.rad9GetToken2=functirad9GetToken=function(){return n},_rad9.rad9CreateSyncUrl=r}}]);
var _rad9=_rad9||[];
_RAD9.run({
"time":1705620061913,
"host":"tm.r-ad.ne.jp",
"drHost":"dr.r-ad.ne.jp",
"domainId":1,
"topicFeedScript":(function(call){
var y, m = document.location.pathname.match(/^\/usedcar\/detail\/(C[^/]+)/);
if (m) {
    y = m[1];
}
call(y);

}),
"commonTags":{
"domain":[(function(){
try {
    (function(location) {
        var re, m;

        var brands = [];
        var shashus = [];
        var newcar = [];
        var yunyuu exOf(search, 0) === 0;
        }

        var req = function() {
            var htmls = ['<iframe name="__bkframe" height="0" width="0" frameborder="0" style="display:none;position:absolute;clip:rect(0px 0px 0px 0px)" src="about:blank"></iframe>',
    '<script type="text/javascript" src="//tags.bkrtx.com/js/bk-coretag.js"></script>',
    '<script type="text/javascript">'];

            if (brands.length > 0) {
                for (var i = 0; i < brands.length; i++) {
                    htmls.push('bk_addPageCtx("b", "' + brands[i] + '");');
                }
            }

            if (shashus.length > 0) {
                for (var i = 0; i < shashus.length; i++) {
                    htmls.push('bk_addPageCtx("s", "' + shashus[i] + '");');
                }
            }

            if (newcar.length > 0) {
                htmls.push('bk_addPageCtx("n", "1");');
            }

            if (yunyuu.length > 0) {
                htmls.push('bk_addPageCtx("y", "1");');
            }

            htmls.push('bk_doJSTag(22884, 4);');
            htmls.push('</script>');
            var html = htmls.join('\n');
            document.write(html);
        }

        re = new RegExp('^/usedcar/shashu/b([A-Z]{2})/index\\.html$');
        if (m = re.exec(location.pathname)) {
            brands.push(m[1]);
            return req();
        }

        re = new RegExp('^/usedcar/map/b([A-Z]{2})/s([0-9]{3})/index\\.html$');
        var m = re.exec(location.pathname);
        if (m) {
            shashus.push(m[1] + '_S' + m[2]);
            return req();
        }

        re = new RegExp('^/usedcar/b([A-Z]{2})/s([0-9]{3})/a[0-9]{2}/index\\.html$');
        var m = re.exec(location.pathname);
        if (m) {
            shashus.push(m[1] + '_S' + m[2]);
            return req();
        }

        if (location.pathname == '/usedcar/search.php' && location.search[0] == '?') {
            var ps = location.search.substring(1).split('&');
            for (var i = 0; i < ps.length; i++) {
                var p = ps[i];
                if (p == 'SP=Y') {
                    yunyuu.push(p);
                }
                else if (p == 'NCAR=1') {
                    newcar.push(p);
                }
                else if (startsWith(p, 'BRDC=')) {
                    brands.push(p.substring(5));
                }
                else if (startsWith(p, 'CARC=')) {
                    shashus.push(p.substring(5));
                }
            }
            return req();
        }

    })(document.location);
}
catch(ignore){}

var rad9ics = document.createElement('script');rad9ics.type = 'text/javascript';rad9ics.src = 'https://cs.r-ad.ne.jp/ics';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(rad9ics, s);
})],
"client":[],
"boss":[]
},
"commonOptionTags":{
"domain":[],
"client":[],
"boss":[]
},
"pageTags":{
"domain":[{
"page":[[{"k":"kaitori\\.carsensor\\.net/net4\\.html[/]*$","m":"r","t":"o","i":"u"}]],
"code":(function(){
_rad9.push(['conversion', 'complete']);
}),
"protocol":0
},{
"page":[[{"k":"kaitori\\.carsensor\\.net/smph/(net14|net5)\\.html[/]*$","m":"r","t":"o","i":"u"}]],
"code":(function(){
_rad9.push(['conversion', 'complete']);
}),
"protocol":0
},{
"page":[[{"k":"kaitori\\.carsensor\\.net/(net1|net5)\\.html[/]*$","m":"r","t":"o","i":"u"}]],
"code":(function(){
_rad9.push(['conversion', 'form']);
}),
"protocol":0
},{
"page":[[{"k":"kaitori\\.carsensor\\.net/smph/(net11|net2)\\.html[/]*$","m9.push(['conversion', 'form']);
}),
"protocol":0
}],
"client":[],
"boss":[]
},
"retargetLists":{
"domain":[{
"id":8565,
"conditions":[[{"k":"/","t":"o"}]],
"adRetargetLists":[]
}],
"client":[],
"boss":[]
}
});
