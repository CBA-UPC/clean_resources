<html><head><title></title></head><body>
</body></html>ipts/im-uid-hook.js?cid=".concat(3929),n="_im_uid.".concat(3929),r=function(t){return window.encodeURIComponent(t).replace(/'/g,"%27")};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window.yj_promotion_ad_v1=function(t,e){var n={icon:{}};n.icon.url=t.ads[0].image.standard.url,n.icon.width=t.ads[0].image.standard.width,n.icon.height=t.ads[0].image.standard.height,n.landingURL=t.ads[0].lp_url,n.title=t.ads[0].title,n.optout={},n.optout.text=t.ads[0].imark.text,n.optout.url=t.ads[0].imark.optout_url,n.optout.image_url=t.ads[0].imark.optout_image_url,n.description=t.ads[0].description,n.isnative=1,n.trackings={},gnnative_1550422.write_native_ad(n)},window.MaistAdInfo_1550422=function(t){var e={icon:{}};e.icon.url=t.image,e.landingURL=t.url,e.title=t.title,e.description=t.description1,e.isnative=1,e.trackings={},gnnative_1550422.write_native_ad(e)},window.gnnative_1550422_callback=function(t){var e=t[gnnative_1550422.zoneid];e&&Object.prototype.hasOwnProperty.call(e,"vast_xml")?gnnative_1550422.write_native_video_ad(e):gnnative_1550422.write_native_ad(e)},window.gnnative_1550422={itemFormat:'<style>    .gn-nad_container-wrap * {        margin: 0;        padding: 0;        box-sizing: border-box;        font-family: hiragino kaku gothic pro,Meiryo,sans-serif;        text-decoration: none;    }    .gn-nad_container-wrap {        position: relative;        box-sizing: border-box;    }    .gn-nad_container {        text-decoration: none;        display: block;        background: #fff;        padding:5px;    }    .gn-nad_image-container {        width: 100%;        padding-top: 52.3%;        position: relative;        overflow: hidden;        border-radius: 10px;        background: url({screenshots-url}) no-repeat center center;        background-size: cover;    }    .gn-nad_image-container img {        position: absolute;        height: 100%;        top: 0;        left: 50%;        transform: translateX(-50%);    }    .gn-nad_text-container {        position: relative;        margin: 5px 0;        text-align: left;    }    .gn-nad_text-title {        display: -webkit-box;        -webkit-box-orient: vertical;        -webkit-line-clamp: 3;        word-break: break-all;        overflow: hidden;        line-height: 1.4;        font-size: 12px;        color: #333;        font-weight: 700;        height: 50px;    }    .gn-nad_text-optout {        color: #aaa;        font-size: 10px;        margin-top: 3px;    }    .gn-nad_text-optout > span {        display: inline-block;        background: #bfbfbf;        color: #fff;        border-radius: 2px;        padding: 0 4px;        margin-right: 4px;    }</style><div class="gn-nad_container-wrap">    <a class="gn-nad_container" href="{landing-url}" target="_blank">        <div class="gn-nad_image-container"></div>        <div class="gn-nad_text-container">            <p class="gn-nad_text-title">{title}</p>            <p class="gn-nad_text-optout"><span>AD</span> {advertiser}</p>        </div>    </a></div>',zoneid:1550422,createEndpoint:function(){var e="https://aladdin.genieesspv.jp/yie/ld/nad?zoneid="+this.zoneid+"&callback=gnnative_1550422_callback",o="undefined"!=typeof geparams&&"object"==("undefined"==typeof geparams?"undefined":i(geparams))&&geparams?geparams:{},a=void 0!==document.referrer?document.referrer:"";if((!("loc"in o)||"string"!=typeof o.loc||"function"!=typeof o.loc.substring||"http"!==o.loc.substring(0,4))&&(o.loc=document.location?document.location.href:"",window.top!==window.self))try{o.loc=window.top.location.href,a=window.top.document.referrer}catch(t){try{window.frameElement&&!window.frameElement.src?a="":a&&(o.loc=a)}catch(t){a&&(o.loc=a)}}"ref"in o&&"string"==typeof o.ref&&"function"==typeof o.ref.substring&&"http"===o.ref.substring(0,4)||(o.ref=a),"ct0"in o&&"string"==typeof o.ct0&&"function"==typeof o.ct0.substring&&"http"===o.ct0.substring(0,4)||(o.ct0="undefined",void 0!==document.GEN_ct0&&"string"==typeof document.GEN_ct0&&"function"==typeof document.GEN_ct0.substring&&"http"==document.GEN_ct0.substring(0,4)&&(o.ct0=document.GEN_ct0)),e+="&cb="+Math.floor(99999999999*Math.random()),e+=document.charset?"&charset="+document.charset:document.characterSet?"&charset="+document.characterSet:"",e+="&loc="+r(o.loc);try{"[object Window]"===window.self.toString()&&"[object Window]"===window.parent.toString()||(e+="&err=1")}catch(t){}if("undefined"!==o.ct0&&(e+="&ct0="+r(o.ct0)),o.ref&&(e+="&referer="+r(o.ref)),o.gfuid&&""!=o.gfuid&&(e+="&gfuid="+r(o.gfuid)),o.adt&&""!=o.adt&&(e+="&adt="+r(o.adt)),"zip"in o&&void 0!==o.zip&&null!=o.zip&&""!=o.zip&&(e+="&zip="+r(o.zip)),"country"in o&&void 0!==o.country&&null!=o.country&&""!=o.country&&(e+="&country="+r(o.country)),"city"in o&&void 0!==o.city&&null!=o.city&&""!=o.city&&(e+="&city="+r(o.city)),"long"in o&&void 0!==o.long&&null!=o.long&&""!=o.long&&(e+="&long="+r(o.long)),"lati"in o&&void 0!==o.lati&&null!=o.lati&&""!=o.lati&&(e+="&lati="+r(o.lati)),"custom"in o&&void 0!==o.custom&&"object"==i(o.custom)&&o.custom)for(var c in o.custom)void 0!==o.custom[c]&&null!=o.custom[c]&&""!=o.custom[c]&&(e+="&"+r(c)+"="+r(o.custom[c]));var l,u,d="undefined"!=typeof gecuparams&&"object"==("undefined"==typeof gecuparams?"undefined":i(gecuparams))&&gecuparams?gecuparams:{};return void 0!==d.ver&&null!=d.ver&&""!=d.ver&&(e+="&gc_ver="+r(d.ver)),void 0!==d.minor&&null!=d.minor&&""!=d.minor&&(e+="&gc_minor="+r(d.minor)),void 0!==d.value&&null!=d.value&&""!=d.value&&(e+="&gc_value="+r(d.value)),e+="&topframe="+(window.parent==window.self?1:0),e+=function(){if("undefined"==typeof screen)return"";var t=screen.width,e=screen.height;return t>e?"&amp;sw="+e+"&amp;sh="+t:"&amp;sw="+t+"&amp;sh="+e}(),(e+=(u=n,(l=function(){try{return document.cookie.split("; ").reduce((function(t,e){var n=e.split("=");return t[n[0]]=n[1],t}),{})}catch(t){return{}}}()[u]||"")?"&".concat("extuid","=").concat(encodeURIComponent("".concat("im",":").concat(l))):""))+function(){var e;try{e=JSON.parse(function(){try{return t||localStorage&&localStorage.getItem("ua")||null}catch(t){return null}}())}catch(t){return""}if(!e)return"";var n="";if(e.fullVersionList){n+="&ucfvl=";var i=e.fullVersionList.reduce((function(t,e){var n=t;return n&&(n+=","),n+'"'+e.brand+'";v="'+e.version+'"'}),"");n+=r(i)}return e.platform&&(n+="&ucp="+r('"'+e.platform+'"')),e.architecture&&(n+="&ucarch="+r('"'+e.architecture+'"')),e.platformVersion&&(n+="&ucpv="+r('"'+e.platformVersion+'"')),e.bitness&&(n+="&ucbit="+r('"'+e.bitness+'"')),n+="&ucmbl=?"+(e.mobile?"1":"0"),e.model&&(n+="&ucmdl="+r('"'+e.model+'"')),n}()},write_native_video_ad:function(t){var e;if(t&&t.third_tag&&t.trackings){e=Math.floor(99999*Math.random()),document.write('<div id ="gnnative_ad'+e+'" style="display:none;"></div>'),document.write(t.third_tag);for(var n=0,r=t.trackings.length;n<r;n++)document.write(t.trackings[n])}else{if(!t||!t.trackings&&1!=t.isnative)return!1;if(void 0===e&&(e=Math.floor(99999*Math.random())),!(t.vast_xml&&t.item_format_url&&t.video_player_url))return!1;document.write('<div id ="gnnative_ad'+e+'" style="display:none;"></div>');var i=document.getElementById("gnnative_ad"+e);if(window.$GNVPTagRD_$)new $GNVPTagRD_$(e,i).render(t);else{var o=document.createElement("script");o.src=t.video_renderer_url,o.onload=function(){new $GNVPTagRD_$(e,i).render(t)},i.parentNode.appendChild(o)}}},write_native_ad:function(t){var e,n=this;if(t&&t.third_tag&&t.trackings){e=Math.floor(99999*Math.random()),document.write('<div id ="gnnative_ad'+e+'" style="display:none;"></div>'),document.write(t.third_tag);for(var r=0,i=t.trackings.length;r<i;r++)document.write(t.trackings[r])}else{if(!t||!t.trackings&&1!=t.isnative)return!1;var o=this.itemFormat;o=this.changeOptoutText(o,t),o=t.icon&&t.icon.url?o.replace(/{icon-url}/g,t.icon.url):o.replace(/{icon-url}/g,""),o=t.icon&&t.icon.largeURL?o.replace(/{icon-large-url}/g,t.icon.largeURL):o.replace(/{icon-large-url}/g,""),o=t.landingURL?o.replace(/{landing-url}/g,t.landingURL):o.replace(/{landing-url}/g,""),o=t.title?o.replace(/{title}/g,t.title):o.replace(/{title}/g,""),o=t.advertiser?o.replace(/{advertiser}/g,t.advertiser):o.replace(/{advertiser}/g,""),t.optout&&(o=t.optout.text?o.replace(/{optout-text}/g,t.optout.text):o.replace(/{optout-text}/g,""),o=t.optout.url?o.replace(/{optout-url}/g,t.optout.url):o.replace(/{optout-url}/g,""),o=t.optout.image_url?o.replace(/{optout-image-url}/g,t.optout.image_url):o.replace(/{optout-image-url}/g,"")),o=t.description?o.replace(/{description}/g,t.description):o.replace(/{description}/g,""),o=t.cta?o.replace(/{cta}/g,t.cta):o.replace(/{cta}/g,""),o=t.app&&t.app.appName?o.replace(/{app-name}/g,t.app.appName):o.replace(/{app-name}/g,""),o=t.app&&t.app.targetAge?o.replace(/{target-age}/g,t.app.targetAge):o.replace(/{target-age}/g,""),o=t.app&&t.app.rating?o.replace(/{rating}/g,t.app.rating):o.replace(/{rating}/g,""),t.screenshots&&(o=t.screenshots.url?o.replace(/{screenshots-url}/g,t.screenshots.url):o.replace(/{screenshots-url}/g,""),o=t.screenshots.width?o.replace(/{screenshots-width}/g,t.screenshots.width):o.replace(/{screenshots-width}/g,""),o=t.screenshots.height?o.replace(/{screenshots-height}/g,t.screenshots.height):o.replace(/{screenshots-height}/g,"")),o=this.postReplace(o)||o,void 0===e&&(e=Math.floor(99999*Math.random()),document.write('<div id ="gnnative_ad'+e+'" style="display:none;"></div>'));var a=document.getElementById("gnnative_ad"+e);if(a.innerHTML=o,t.clicktrackers&&t.clicktrackers.length)for(var c=a.getElementsByTagName("a"),l=function(e){var r=c[e];r.getAttribute("href")===t.landingURL&&n.addEvent(r,"click",(function(){for(var e="",n=0;n<t.clicktrackers.length;n++)e+=t.clicktrackers[n];if(e.length>0){var i=document.createElement("div");i.style.cssText="visibility:hidden;position:absolute;width:0px!important;height:0px!important;",i.innerHTML=e,r.appendChild(i)}return!0}))},u=0;u<c.length;u++)l(u);for(;a.firstChild;)a.parentNode.insertBefore(a.firstChild,a);a.parentNode.removeChild(a);for(var d=0,s=t.trackings.length;d<s;d++)document.write(t.trackings[d])}},changeOptoutText:function(t,e){if(!e.optout||!e.optout.url)return t;if(-1===t.indexOf("{optout-text}")||-1!==t.indexOf("{optout-url}"))return t;var n="link"+Math.floor(99999*Math.random()),r="<span onclick='return "+n+"();' style='cursor: pointer'>{optout-text}</span>",i="";return i+="<script type='text/javascript'>",i+="function "+n+"(){",i+="window.open('"+e.optout.url+"', '_blank');",i+="return false;",i+="}",i+="<\/script>",document.write(i),t.replace(/{optout-text}/g,r)},execute:function(){!function(){var t=navigator.userAgent.toLowerCase();if(-1!==t.indexOf("msie"))return!1;var e=t.match(/trident\/(\d+\.\d)/);return null!==e&&parseFloat(e[1])>=7}()&&navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues?navigator.userAgentData.getHighEntropyValues(["architecture","model","mobile","platform","bitness","platformVersion","fullVersionList"]).then((function(e){try{if(!localStorage)return void(t=JSON.stringify(e));localStorage.setItem("ua",JSON.stringify(e))}catch(n){t=JSON.stringify(e)}})):new Promise((function(t){return t()}));var n=this.createEndpoint();document.write('<script type="text/javascript" src="'+n+'"><\/script>'),function(){try{localStorage&&function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=document.createElement("script");n.src=t,n.async=e,document.body.appendChild(n)}(e)}catch(t){}}()},postReplace:function(t){(function (window, document) {
    var iframe = window.frameElement;
    if (!iframe) return;
    var scrollHeight = 0;
    iframe.style.width = "100%";
    function frameAdjuster() {
        iframe.style.height = scrollHeight + "px";
        var timer = setInterval(function () {
            if (document.body.scrollHeight > scrollHeight) {
                scrollHeight = document.body.scrollHeight;
                frameAdjuster();
            }

            if (scrollHeight > 0 && document.body.scrollHeight === scrollHeight) clearInterval(timer);
        }, 1000);
    }
    frameAdjuster();
})(window, document);},addEvent:function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,(function(e){return n.call(t,e)}))}},gnnative_1550422.execute()}();