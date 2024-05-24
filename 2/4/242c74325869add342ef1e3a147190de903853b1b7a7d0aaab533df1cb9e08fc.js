!function(){function n(d){var g=[],a=[],f=function(c){for(var b={},e=0;e<z.length;e++){var h=z[e];if(h.Tag===c){b=h;break}var k=(r=h.Tag,t=x=l=void 0,l=-1!==(t=r).indexOf("http:")?t.replace("http:",""):t.replace("https:",""),-1!==(x=l.indexOf("?"))?l.replace(l.substring(x),""):l);if(c&&(-1!==c.indexOf(k)||-1!==h.Tag.indexOf(c))){b=h;break}}var r,l,x,t;return b}(d);return f.CategoryId&&(g=f.CategoryId),f.Vendor&&(a=f.Vendor.split(":")),!f.Tag&&D&&(a=g=function(c){var b=[],e=function(h){var k=document.createElement("a");k.href=h;h=k.hostname.split(".");return-1!==h.indexOf("www")||2<h.length?h.slice(1).join("."):k.hostname}(c);y.some(function(h){return h===e})&&(b=["C0004"]);return b}(d)),{categoryIds:g,vsCatIds:a}}function A(d){return!d||!d.length||(d&&window.OptanonActiveGroups?d.every(function(g){return-1!==window.OptanonActiveGroups.indexOf(","+g+",")}):void 0)}function m(d,g){void 0===g&&(g=null);var a=window,f=a.OneTrust&&a.OneTrust.IsVendorServiceEnabled;a=f&&a.OneTrust.IsVendorServiceEnabled();return"Categories"===u||"All"===u&&f&&!a?A(d):("Vendors"===u||"All"===u&&f&&a)&&A(g)}function p(d){d=d.getAttribute("class")||"";return-1!==d.indexOf("optanon-category")||-1!==d.indexOf("ot-vscat")}function q(d){return d.hasAttribute("data-ot-ignore")}function v(d,g,a){void 0===a&&(a=null);var f=d.join("-"),c=a&&a.join("-"),b=g.getAttribute("class")||"",e="",h=!1;d&&d.length&&-1===b.indexOf("optanon-category-"+f)&&(e=("optanon-category-"+f).trim(),h=!0);a&&a.length&&-1===b.indexOf("ot-vscat-"+c)&&(e+=" "+("ot-vscat-"+
c).trim(),h=!0);h&&g.setAttribute("class",e+" "+b)}function B(d,g,a){void 0===a&&(a=null);var f;d=d.join("-");a=a&&a.join("-");return-1===g.indexOf("optanon-category-"+d)&&(f=("optanon-category-"+d).trim()),-1===g.indexOf("ot-vscat-"+a)&&(f+=" "+("ot-vscat-"+a).trim()),f+" "+g}var z=JSON.parse('[{"Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625750100000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYJC9iQAAA9BQBQAc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.redditstatic.com/ads/pixel.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"http://assets.vidyard.com/share/webpack/js/5-90064db01164074d1189.chunk.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI7F6AAABWE4dQXy","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI-EqQAAA9pXiAAc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://scripts.demandbase.com/4b9d2aa6.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI5lXgAAAK0YLSuS","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI5srwAAACnESHNg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.gartner.com/en/ruxitagentjs_ICA2Vfqru_10209210209190405.js","CategoryId":["C0002","C0003"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pi.pardot.com/analytics","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.gartner.com/imagesrv/js/unica/ntpagetag.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625751000000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.youtube.com/iframe_api","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://4416342.fls.doubleclick.net/activityi","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://fpc.gartner.com/visitor/v200/svrGP","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://elqact.gartner.com/visitor/v200/svrGP.aspx","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://script.hotjar.com/modules.35981999a656a5a28309.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://investor.gartner.com/q4api/v4/captcha","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI8PCgAABXwDRhXJ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI62jAAABGCr7wXy","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625793300000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625747400000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://my.jst.ai/ajax/account_version_check.html","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI6OxgAACiLJCQAQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625782200000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI6LkwAABB33hnNh","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/TPbKyD2bAR4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI_XMAAACejxUgBD","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYJAKqgAABd2yoXNh","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625776800000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625762400000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625749200000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.gartner.com/ngw/commonassets/code/scripts/ecid.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625753700000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.google-analytics.com/plugins/ua/linkid.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI9KCAAACmAGLwAQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://s1849907385.t.eloqua.com/visitor/v200/svrGP","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.gartner.com/ngw/syspath-etc.clientlibs/emt/clientlibs/base.min.a56769cb98f0e79613fe200d85de49d4.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://counter.personyze.com/js/4822/default/index-1323480.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625763900000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI9RDAAAAbp6WQXz","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://match.prod.bidr.io/cookie-sync/demandbase","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://counter.personyze.com/stat-track-lib.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625760600000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/demconf.jpg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://counter.personyze.com/js/4822/default/index-677.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYrZYvQAAAGU9lgN-","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI5OnQAABJiyH2nJ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625746500000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://images.unsplash.com/photo-1509327309125-d016ba4c6888","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://analytics.twitter.com/i/adsct","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.gartner.com/ngw/syspath-etc.clientlibs/emt/clientlibs/structure.min.f1996885175e575901c998dbac8a183e.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625772600000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://secure.adnxs.com/seg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://tbcdn.talentbrew.com/bundles/tb-core.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://analytics.newscred.com/analytics_716881b73ece4012a382138efe0abc9c.js","CategoryId":["C0002","C0003","C0004"],"Vendor":null},{"Tag":"https://cdn.optimizely.com/js/4016840095.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://s2048847999.t.eloqua.com/visitor/v200/svrGP","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cm.everesttech.net/cm/dd","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://s7.addthis.com/js/300/addthis_widget.js#pubid\x3dra-592609c1e2e72913","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://count.personyze.com/stat-track-log-visit.js.php","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625747100000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI7CIgAAAC4edj6P","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI58kAAACSerOABD","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYJCwPQAAAUVfXRN@","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://elqact.gartner.com/visitor/v200/svrGP","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI5ukwAACd0wFwBD","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.gartner.com/en/ruxitagentjs_ICA2SVfqru_10189200420175514.js","CategoryId":["C0002","C0003"],"Vendor":null},{"Tag":"https://ssl.google-analytics.com/ga.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625767200000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI-N1QAACNvnWABD","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://bam-cell.nr-data.net/1/4b6f7f959c","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625789400000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://bat.bing.com/bat.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI6QDQAACdR7kgAQ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.gartner.com/ruxitagentjs_ICA2Vfhjqru_10209210209190405.js","CategoryId":["C0002","C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYJDCewAABCPhCgAc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI66eAAABJzAzl8G","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625773500000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/1960447244259117","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625783100000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625748300000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://cdn.jst.ai/mwgt_4.1.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYJClTAAACdy2qgBD","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://segments.company-target.com/log","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.googleoptimize.com/optimize.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://gartner.api.useinsider.com/ins.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625755500000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.acq.io/ATRK_FF435168_min.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://ict.infinity-tracking.net/js/nas.v1.min.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.gartner.com/conference-registration/create/polyfills.8c6b5cf3e4d7e0d610d5.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYJCpcgAABSnWKyuV","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI5MNAAACbZmyABD","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://counter.personyze.com/js/4822/default/index-1779674.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYJCrpgAACkpBJgBD","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625775000000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://11515309.fls.doubleclick.net/activityi","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.optimizely.com/js/84280487.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI766QAAAPFmjxN@","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/9zEFcUpCpA0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI_7UAAACeVBdQBD","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625770200000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625752800000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://dpm.demdex.net/ibs:dpid\x3d411\x26dpuuid\x3dYI5qJAAABM6T9l8G","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pixel.everesttech.net/px2/8384","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/s3rlYWcwdDY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1625772300000/vsu8txb288b8.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://cdn.optimizely.com/js/4998582456.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://c.bing.com/c.gif","CategoryId":["C0004"],"Vendor":null}]'),D=JSON.parse("true"),u=JSON.parse('"Categories"'),y=[""];y=y.filter(function(d){if("null"!==d&&d.trim().length)return d});var w=["embed","iframe","img","script"];(new MutationObserver(function(d){Array.prototype.forEach.call(d,function(g){Array.prototype.forEach.call(g.addedNodes,function(e){var h,k;if(1===e.nodeType&&-1!==w.indexOf(e.tagName.toLowerCase())&&!p(e)&&!q(e))if("script"===e.tagName.toLowerCase()){if((k=n(h=e.src||"")).categoryIds.length||k.vsCatIds.length){v(k.categoryIds,e,k.vsCatIds);m(k.categoryIds,k.vsCatIds)||(e.type="text/plain");var r=function(l){"text/plain"===e.getAttribute("type")&&l.preventDefault();e.removeEventListener("beforescriptexecute",r)};e.addEventListener("beforescriptexecute",r)}}else((k=n(h=e.src||"")).categoryIds.length||k.vsCatIds.length)&&(v(k.categoryIds,e,k.vsCatIds),m(k.categoryIds,k.vsCatIds)||(e.removeAttribute("src"),e.setAttribute("data-src",h)))});var a=g.target;if(g.attributeName&&(!p(a)||!q(a)))if("script"===a.nodeName.toLowerCase()){if((b=n(c=a.src||"")).categoryIds.length||b.vsCatIds.length){v(b.categoryIds,a,b.vsCatIds);m(b.categoryIds,b.vsCatIds)||(a.type="text/plain");var f=function(e){"text/plain"===a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",f)};a.addEventListener("beforescriptexecute",f)}}else if(-1!==w.indexOf(g.target.nodeName.toLowerCase())){var c,b;((b=n(c=a.src||"")).categoryIds.length||b.vsCatIds.length)&&(v(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))}})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});var C=document.createElement;document.createElement=function(){for(var d=[],g=0;g<arguments.length;g++)d[g]=arguments[g];if("script"!==d[0].toLowerCase()&&-1===w.indexOf(d[0].toLowerCase()))return C.bind(document).apply(void 0,d);var a=C.bind(document).apply(void 0,d),f=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||""},set:function(c){var b="";"string"==typeof c?b=c:c instanceof Object&&(b=c.toString());b=n(b);!b.categoryIds.length&&!b.vsCatIds.length||"script"!==d[0].toLowerCase()||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?!b.categoryIds.length||-1===w.indexOf(d[0].toLowerCase())||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?f("src",c):(a.removeAttribute("src"),f("data-src",c),c=a.getAttribute("class"),c||(c=B(b.categoryIds,c||"",b.vsCatIds),f("class",c))):(f("type","text/plain"),f("src",c));return!0}},type:{set:function(c){var b=n(a.src||"");c=!b.categoryIds.length&&!b.vsCatIds.length||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?c:"text/plain";return f("type",c),!0}},class:{set:function(c){var b=n(a.src);!b.categoryIds.length&&!b.vsCatIds.length||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?f("class",c):(c=B(b.categoryIds,c,b.vsCatIds),f("class",c));return!0}}}),a.setAttribute=function(c,b,e){"type"!==c&&"src"!==c||e?f(c,b):a[c]=b},a}}();top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;

    overflow: visible;

    -webkit-box-sizing: content-box;

            box-sizing: content-box;

    border: 1px solid rgba(39, 47, 55, .1);
}
.page.bordered > .background
{
    top: -1px;
    left: -1px;

    -webkit-box-sizing: content-box;

            box-sizing: content-box;

    border: 1px solid #979797;
}
.page .page-preloader
{
    position: absolute;
    z-index: 100;

    width: 100%;
    height: 100%;
    pointer-events: none;
}
.page .preloader-th
{
    z-index: 1;
}
.page .preloader-container
{
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;

    -webkit-transform: translateX(-50%) translateY(-50%);

            transform: translateX(-50%) translateY(-50%);
}
.page.unready .page-preloader .preloader-bg
{
    width: 90px;
    height: 90px;
    margin: auto;

    background: url(./img/page-unready_55dd142.gif) no-repeat center;
    background-size: contain;
}
.page.error .page-preloader .preloader-bg
{
    width: 82px;
    height: 63px;
    margin: auto;

    background: url(./img/page-error_023a46d.png) no-repeat center;
    background-size: contain;
}
.page.unready .page-preloader .preloader-text
{
    font-size: 12px;
    line-height: 17px;

    max-width: 275px;

    text-align: center;
}
html[lang=ru] .page.unready .page-preloader  .preloader-text {
    max-width: 225px;
}
html[lang=nl] .page.unready .page-preloader  .preloader-text {
    max-width: 200px;
}
html[lang=it] .page.unready .page-preloader  .preloader-text {
    max-width: 175px;
}
html[lang=ja] .page.unready .page-preloader  .preloader-text {
    max-width: 150px;
}
.page.unready .page-preloader .preloader-text.light
{
    color: #ecf0f1;
}
.page.unready .page-preloader .preloader-text.dark
{
    color: #354353;
}
.page.error .page-preloader .preloader-header
{
    font-size: 14px;
    font-weight: 600;

    min-width: 120px;
    margin: 10px;

    text-align: center;
}
.page.error .page-preloader .preloader-text
{
    font-size: 12px;
    line-height: 17px;

    max-width: 275px;

    text-align: center;
}
.page.error.dark .page-preloader .preloader-header,
.page.error.dark .page-preloader .preloader-text
{
    color: #ecf0f1;
}
.page.error.light .page-preloader .preloader-header,
.page.error.light .page-preloader .preloader-tex
{
    color: #354353;
}
.page.thumb.loading .page-preloader .preloader-bg,
.page.thumb.loading .page-preloader .preloader-animation,
.page.thumb.unready .page-preloader .preloader-bg,
.page.thumb.error .page-preloader .preloader-bg
{
    background-size: 50%;
}
.page.thumb .page-preloader .preloader-text,
.page.thumb .page-preloader .preloader-header
{
    display: none;
}
.page .highlights
{
    position: absolute;
}
.page .highlights div
{
    position: absolute;

    opacity: .6;
}
.page .touch-layer .flip-area {
    position: absolute;
    top: 0;
    width: 5%;
    height: 100%;
    cursor: pointer;
}
.zoomed .page .touch-layer .flip-area {
    pointer-events: none;
}
.single-mode .last-single-page .touch-layer .flip-area {
    display: none;
}
.page .touch-layer .flip-area {
    z-index: 1;
}
.page.left-stripe .touch-layer .flip-area {
    left: 0;
}
.page.right-stripe .touch-layer .flip-area {
    left: auto;
    left: initial;
    right: 0;
}
.page.content-inactive .touch-layer .flip-area {
    display: none;
}
.single-mode:not(.rtl) .page.left-stripe .touch-layer .flip-area,
.single-mode:not(.rtl) .page.right-stripe .touch-layer .flip-area {
    left: auto;
    left: initial;
    right: 0;
}
.single-mode.rtl .page.left-stripe .touch-layer .flip-area,
.single-mode.rtl .page.right-stripe .touch-layer .flip-area {
    left: 0;
    right: auto;
    right: initial;
}
.static-book .fade-enter-active,
.static-book .fade-leave-active
{
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
.static-book .fade-enter,
.static-book .fade-leave-to
{
    opacity: 0;
}
.desktop .page-fade-leave-active
{
    -webkit-transition: opacity .1s ease-out;
    transition: opacity .1s ease-out;
}
.desktop .page-fade-leave-to
{
    opacity: 0;
}
.desktop .svg-layer.svg-layer-not-current
{
    will-change: transform;
}

.page-reverse-side .page-preloader {
    position: absolute;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    z-index: 1;
    width: 100%;
    height: 100%;
}
.page-reverse-side .page-preloader canvas {
    position: absolute;
}
.page-reverse-side {
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    overflow: visible;
}
.page-reverse-side .preloader-th img {
    -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
}
.content .content-element {
    position: absolute;
    cursor: pointer;
}
.content .content-element .thumbnail
{
    position: absolute;

    width: 100%;
    height: 100%;

    -webkit-transform: scale(1) translateZ(0);

            transform: scale(1) translateZ(0);

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.main-frame:not(.ie11) .static-book .content .content-element .thumbnail,
.main-frame:not(.ie11) .book-container:not(.animation) .slide-book .content .content-element .thumbnail
{
    -webkit-transition: -webkit-transform .5s ease-in-out;
    transition: -webkit-transform .5s ease-in-out;
    transition: transform .5s ease-in-out;
    transition: transform .5s ease-in-out, -webkit-transform .5s ease-in-out;
}
.content .icon {
    background-color: #272f37;
    border-radius: 50%;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    position: absolute;
    z-index: 999;
    -webkit-transform: translate(-50%, -50%) scale(.9) translateZ(0);
            transform: translate(-50%, -50%) scale(.9) translateZ(0);
}
.main-frame:not(.ie11) .static-book .content .icon,
.main-frame:not(.ie11) .book-container:not(.animation) .slide-book .content .icon
{
    -webkit-transition: opacity .3s ease-in-out, -webkit-transform .15s ease-in-out;
    transition: opacity .3s ease-in-out, -webkit-transform .15s ease-in-out;
    transition: opacity .3s ease-in-out, transform .15s ease-in-out;
    transition: opacity .3s ease-in-out, transform .15s ease-in-out, -webkit-transform .15s ease-in-out;
}
.main-frame.edge .static-book .content .icon,
.main-frame.edge .slide-book .content .icon
{
    -webkit-transition: none;
    transition: none;
}
.content .icon .svg-icon
{
    width: 100%;
    height: 100%;
}
.content .icon svg
{
    width: 100%;
    height: 100%;
}
.content .icon.hidden
{
    -webkit-transform: translate(-50%, -50%) scale(1);
            transform: translate(-50%, -50%) scale(1);
    opacity: 0;
}
.content .icon.highlighted,
.highlighted .content .icon,
.content-element.highlighted .icon,
.desktop .content .content-element:not(.cross-wide):hover .icon {
    opacity: .8 !important;
}
.content .icon.highlighted,
.highlighted .content .icon,
.content-element.highlighted .icon,
.desktop .content .content-element:not(.cross-wide):hover .icon {
    -webkit-transform: translate(-50%, -50%) scale(1) translateZ(0);
            transform: translate(-50%, -50%) scale(1) translateZ(0);
}


.content .block
{
    opacity: 0;
}

.content a.link
{
    display: block;

    width: 100%;
    height: 100%;

    cursor: pointer;

    opacity: 0;
}
.book-holder .content a.link{
    display: none;
}
.book-holder.static-book .content a.link,
.slide-book .content a.link
{
    display: block;
}
.main-frame:not(.ie11) .book-holder.static-book .content a.link,
.main-frame:not(.ie11) .slide-book .content a.link
{
    -webkit-transition: opacity .3s ease-in-out;
    transition: opacity .3s ease-in-out;
}
.desktop .content a.link.hover:hover,
.highlighted .content a.link.flip,
.content a.link.highlighted
{
    opacity: 1;
}
.desktop .book-holder.static-book .content-inactive .content a,
.desktop .slide-book .content-inactive .content a.link
{
    display: none;
}
.content .image {
    z-index: 1;
    overflow: hidden;
}
.touch-preventer-full
{
    position: absolute;
    z-index: 2;
    top: 0;

    width: 100%;
    height: 100%;
}
.content .image.inline {
    cursor: inherit;
}
.drag-active .book-stopped .content .image.inline {
    cursor: move;
    cursor: -webkit-grabbing;
    cursor: grabbing;
}
.content .image:not(.cross-wide):not(.inline):hover .thumbnail,
.content .image.highlighted:not(.inline) .thumbnail {
    -webkit-transform: scale(1.02);
            transform: scale(1.02);
}

.content .gallery {
    color: #fff;
    background-color: #999;
    cursor: pointer;
    overflow: hidden;
}
.content .gallery:not(.cross-wide):hover .thumbnail,
.content .gallery.highlighted .thumbnail {
    -webkit-transform: scale(1.02);
            transform: scale(1.02);
}
.content .gif.playing .icon,
.content .gif.loading .icon,
.content .gif.playing:hover .icon,
.content .gif.loading:hover .icon,
.content .gif.autoplay .icon,
.content .gif.ended .icon
{
    opacity: 0 !important;
}
.content .gif.playing .icon,
.content .gif.loading .icon,
.content .gif.playing:hover .icon,
.content .gif.loading:hover .icon,
.content .gif.autoplay .icon,
.content .gif.ended .icon
{
    cursor: inherit;
}
.content .gif .image
{
    position: absolute;

    overflow: hidden;

    width: 100%;
    height: 100%;
}
.content .gif .image img
{
    position: absolute;
    top: 50%;
    left: 50%;

    -webkit-transform: translate(-50%, -50%);

            transform: translate(-50%, -50%);
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
.content .gif .preloader
{
    position: absolute;
    top: 50%;
    left: 50%;

    display: -webkit-box;

    display: -webkit-flex;

    display: -ms-flexbox;

    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;

    width: 32px;
    height: 32px;


    -webkit-transform: translate(-50%, -50%);


            transform: translate(-50%, -50%);
    pointer-events: none;

    border-radius: 50%;
    background-color: rgba(0,0,0,.3);
}
.main-frame:not(.ie11) .content .gif .preloader
{
    -webkit-transition: opacity .2s ease-in-out;
    transition: opacity .2s ease-in-out;
}
.content .gif .replay
{
    position: absolute;

    width: 20px;
    height: 20px;
    padding: 5px;

    z-index: 1000;

    opacity: 0;
    border-radius: 50%;
    background-color: rgba(0,0,0,.5);
}
.content .gif .replay::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-top: -20px;
    margin-left: -20px;
    -webkit-box-sizing: content-box;
            box-sizing: content-box;
}
.main-frame:not(.ie11) .content .gif .replay
{
    -webkit-transition: opacity .2s ease-in-out;
    transition: opacity .2s ease-in-out;
}
.content .gif.ended .replay
{
    display: block;
    opacity: 0;
}
.content .gif.ended:hover {
    cursor: inherit;
}
.desktop .content .gif.ended:hover .replay,
.content .gif.ended.highlighted .replay
{
    opacity: .7;
}
.desktop .content .gif.ended .replay:hover
{
    cursor: pointer;
    opacity: 1;
}
.content .gif .replay svg
{
    width: 100%;
    height: 100%;

    fill: #fff;
}

.vimeo-player
{
}

.modal-window-overlay[data-v-50c8fe48]
{
    position: fixed;
    z-index: 102500;
    top: 0;
    left: 0;

    -webkit-box-sizing: border-box;

            box-sizing: border-box;
    width: 100%;
    height: 100vh;
    max-height: 100%;

    opacity: 1;
    background: rgba(0, 0, 0, .85);
}
.modal-window-background-click[data-v-50c8fe48]
{
    width: 100%;
    min-height: 100%;
    padding-bottom: 10px;
}
.modal-window[data-v-50c8fe48]
{
    position: absolute;

    padding: 0;
}
.modal-window-emphasis[data-v-50c8fe48] {
    -webkit-box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);
            box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);
}
.overlay-enter-active[data-v-50c8fe48],
.overlay-leave-active[data-v-50c8fe48]
{
    -webkit-transition: background-color .15s ease;
    transition: background-color .15s ease;
}
.overlay-enter[data-v-50c8fe48],
.overlay-leave-active[data-v-50c8fe48]
{
    background-color: transparent;
}
.modal-enter-active[data-v-50c8fe48] {
    -webkit-transition: opacity .15s ease;
    transition: opacity .15s ease;
}
.modal-leave-active[data-v-50c8fe48] {
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease;
}
.modal-enter[data-v-50c8fe48],
.modal-leave-active[data-v-50c8fe48]
{
    opacity: 0;
}
.modal-window .modal-preloader[data-v-50c8fe48]
{
    position: absolute;
    top: 50%;
    left: 50%;

    display: -webkit-box;

    display: -webkit-flex;

    display: -ms-flexbox;

    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;

    width: 64px;
    height: 64px;

    -webkit-transition: opacity .2s ease-in-out;

    transition: opacity .2s ease-in-out;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    pointer-events: none;

    border-radius: 50%;
    background-color: rgba(0,0,0,.3);
}
.modal-window .modal-close[data-v-50c8fe48] {
    width: 28px;
    height: 28px;
    position: absolute;
    top: -28px;
    right: -28px;
    cursor: pointer;
    z-index: 2;
}
div[dir="rtl"] .modal-window .modal-close[data-v-50c8fe48] {
    right: auto;
    right: initial;
    left: -28px;
}
.modal-window .modal-close > svg[data-v-50c8fe48] {
    width: 100%;
    height: 100%;
    fill: #fff;
}
.content .content-element.video {
    will-change: transform;
}
.content .content-element.video iframe
{
    position: absolute;

    width: 100%;
    height: 100%;
}
.content .content-element.video .player
{
    width: 100%;
    height: 100%;
}
.content .content-element.video .player .w-focus-border {
    border: none !important;
}
.modal-window .w-focus-border {
    border: none !important;
}
.touch-preventer {
    position: absolute;
    z-index: 2;
    top: 0;

    width: 100%;
    height: 100%;
}
.touch-preventer {
    height: calc(100% - 60px);
}
.touch-preventer.small.vimeo {
    height: calc(100% - 45px);
}
.touch-preventer.small.youtube {
    height: calc(100% - 30px);
}
.content-element.error {
    cursor: default;
}
.content-element .error-icon {
    background-color: #272f37;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    -webkit-transform: translate(-50%, -50%) scale(.9) translateZ(0);
            transform: translate(-50%, -50%) scale(.9) translateZ(0);
}

.select-text-panel[data-v-5a5957c5] {
    position: absolute;
    background: #494949;
    border-radius: 3px;
    -webkit-box-shadow: 0 5px 7px 0 rgba(11, 31, 51, 0.35);
            box-shadow: 0 5px 7px 0 rgba(11, 31, 51, 0.35);
    font-size: 13px;
    line-height: 13px;
    padding: 0 5px;
    font-weight: normal;
    white-space: nowrap;
    text-align: center;
    -webkit-transition: opacity .2s ease-in;
    transition: opacity .2s ease-in;
    z-index: 10000;
}
.select-text-panel.bottom[data-v-5a5957c5] {
    -webkit-transform: translate(-50%, 10px);
            transform: translate(-50%, 10px);
}
.select-text-panel.bottom.right-side[data-v-5a5957c5] {
    -webkit-transform: translate(50%, 10px);
            transform: translate(50%, 10px);
}
.select-text-panel.bottom .pointer[data-v-5a5957c5] {
    position: absolute;
    display: block;
    left: 50%;
    -webkit-transform: translate(-50%, -100%);
            transform: translate(-50%, -100%);
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 9px 10px 9px;
    border-color: transparent transparent #494949 transparent;
}
.select-text-panel.top[data-v-5a5957c5] {
    -webkit-transform: translate(-50%, -40px);
            transform: translate(-50%, -40px);
}
.select-text-panel.top.right-side[data-v-5a5957c5] {
    -webkit-transform: translate(50%, -40px);
            transform: translate(50%, -40px);
}
.select-text-panel.top .pointer[data-v-5a5957c5] {
    position: absolute;
    display: block;
    left: 50%;
    bottom: 0;
    -webkit-transform: translate(-50%, 10px);
            transform: translate(-50%, 10px);
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 9px 0 9px;
    border-color: #494949 transparent transparent transparent;
}
.select-text-panel .button[data-v-5a5957c5] {
    display: inline-block;
    padding: 8px 6px;
    color: #cccccc;
}
.select-text-panel .button[data-v-5a5957c5]:hover {
    color: #dddddd;
    cursor: pointer;
}
.select-text-panel .divider[data-v-5a5957c5] {
    display: inline-block;
    color: #999999;
}
.select-text-panel.panel-fade-enter-active[data-v-5a5957c5]
{
    -webkit-transition: opacity .2s ease-in;
    transition: opacity .2s ease-in;
}
.select-text-panel.panel-fade-leave-active[data-v-5a5957c5] {
    -webkit-transition: opacity .1s .5s ease-out;
    transition: opacity .1s .5s ease-out;
}
.select-text-panel.panel-fade-leave-active.quick-leave[data-v-5a5957c5] {
    -webkit-transition: opacity 0s ease-out;
    transition: opacity 0s ease-out;
}
.select-text-panel.panel-fade-enter[data-v-5a5957c5], .select-text-panel.panel-fade-leave-to[data-v-5a5957c5]
{
    opacity: 0;
}
.flip-book
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
    z-index: 3;
    pointer-events: none;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
}
.flip-book.zoomed {
    overflow: hidden;
}
.animation .flip-book {
    z-index: 102000;
}
.book-holder
{
    position: absolute;
    pointer-events: auto;
}
.edge .book-holder.moving-hard{
    position: fixed;
}
.book
{
    position: absolute;

    opacity: 1;
    /*border: 1px dashed black;*/
    /*opacity: 0.2;*/

    -webkit-perspective: 3000px;

            perspective: 3000px;
    z-index: 2;
    pointer-events: none;
    -webkit-transform: translateX(0px);
            transform: translateX(0px); /*фикс координат для того что бы position:fixed у элементов на
                                        странице работал относительно книги, а не window,
                                        трансформация меняет систему координат для позиционирования*/
    -moz-transform: none;       /*фикс смещения курсора в inline video в firefox*/
}
.book.hard:before{
    content: '';
    background-color: white;
    position: absolute;
    -webkit-box-shadow: 0 0 3px #868686;
            box-shadow: 0 0 3px #868686;
}
.book.hard.full-sdw:after{
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16))),
    -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.16)), color-stop(0.15%, rgba(0, 0, 0, 0)), color-stop(99.85%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    -webkit-linear-gradient(right, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.15%, rgba(0, 0, 0, 0) 99.85%, rgba(0, 0, 0, 0.16) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    linear-gradient(to left, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.15%, rgba(0, 0, 0, 0) 99.85%, rgba(0, 0, 0, 0.16) 100%);
    content: '';
    position: absolute;
}
.book.hard.lft-sdw:after{
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16))),
    -webkit-gradient(linear, right top, left top, color-stop(-10%, rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    -webkit-linear-gradient(right, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    linear-gradient(to left, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%);
    content: '';
    position: absolute;
}
.book.hard.rgt-sdw:after{
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16))),
    -webkit-gradient(linear, left top, right top, color-stop(-10%, rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    -webkit-linear-gradient(left, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    linear-gradient(to right, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%);
    content: '';
    position: absolute;
}
.hard-mask .page-flip-container.outside.z1,
.hard-mask .page-flip-container.inside.z1,
.book.hard.rgt-sdw:before,
.book.hard.rgt-sdw:after
{
    border-radius: 0 5px 5px 0;
}
.hard-mask .page-flip-container.inside.z3,
.hard-mask .page-flip-container.outside.z3,
.book.hard.lft-sdw:before,
.book.hard.lft-sdw:after
{
    border-radius: 5px 0 0 5px;
}
.single-page .hard-mask .page-flip-container.outside.z1,
.single-page .hard-mask .page-flip-container.inside.z1,
.single-page .book.hard.rgt-sdw:before,
.single-page .book.hard.rgt-sdw:after,
.single-page .hard-mask .page-flip-container.inside.z3,
.single-page .hard-mask .page-flip-container.outside.z3,
.single-page .book.hard.lft-sdw:before,
.single-page .book.hard.lft-sdw:after
{
    border-radius: 5px;
}
.book.hard.full-sdw:before,
.book.hard.full-sdw:after {
    border-radius: 5px;
}
.moving-hard .hard-mask .inside:before {
    position: absolute;
    content: '';
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16))),
    -webkit-gradient(linear, right top, left top, color-stop(-10%, rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16))),
    -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0.26)), color-stop(2%, rgba(0, 0, 0, 0.33)), color-stop(2%, rgba(0, 0, 0, 0.10)), color-stop(2.5%, rgba(0, 0, 0, 0)), color-stop(7%, rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.0)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    -webkit-linear-gradient(right, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    -webkit-linear-gradient(right, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.33) 2%, rgba(0, 0, 0, 0.10) 2%, rgba(0, 0, 0, 0) 2.5%, rgba(0, 0, 0, 0.05) 7%, rgba(0, 0, 0, 0.0) 50%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    linear-gradient(to left, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    linear-gradient(to left, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.33) 2%, rgba(0, 0, 0, 0.10) 2%, rgba(0, 0, 0, 0) 2.5%, rgba(0, 0, 0, 0.05) 7%, rgba(0, 0, 0, 0.0) 50%);
    width: 100%;
    height: 100%;
    z-index: 0;
}
.single-mode .moving-hard .hard-mask .inside:before {
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16))),
    -webkit-gradient(linear, right top, left top, color-stop(-10%, rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    -webkit-linear-gradient(right, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    linear-gradient(to left, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%);
}
.moving-hard .hard-mask .inside.z1:before{
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16))),
    -webkit-gradient(linear, left top, right top, color-stop(-10%, rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16))),
    -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.26)), color-stop(2%, rgba(0, 0, 0, 0.33)), color-stop(2%, rgba(0, 0, 0, 0.10)), color-stop(2.5%, rgba(0, 0, 0, 0)), color-stop(7%, rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.0)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    -webkit-linear-gradient(left, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    -webkit-linear-gradient(left, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.33) 2%, rgba(0, 0, 0, 0.10) 2%, rgba(0, 0, 0, 0) 2.5%, rgba(0, 0, 0, 0.05) 7%, rgba(0, 0, 0, 0.0) 50%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    linear-gradient(to right, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    linear-gradient(to right, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.33) 2%, rgba(0, 0, 0, 0.10) 2%, rgba(0, 0, 0, 0) 2.5%, rgba(0, 0, 0, 0.05) 7%, rgba(0, 0, 0, 0.0) 50%);
}
.single-mode .moving-hard .hard-mask .inside.z1:before{
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16))),
    -webkit-gradient(linear, left top, right top, color-stop(-10%, rgba(0, 0, 0, 0.16)), color-stop(0.3%, rgba(0, 0, 0, 0)), color-stop(99.7%, rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.16)));
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    -webkit-linear-gradient(left, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%),
    linear-gradient(to right, rgba(0, 0, 0, 0.16) -10%, rgba(0, 0, 0, 0) 0.3%, rgba(0, 0, 0, 0) 99.7%, rgba(0, 0, 0, 0.16) 100%);
}
.flip-book .hard-mask .outside.z1:before,
.flip-book .hard-mask .outside.z3:after
{
    position: absolute;
    content: '';
    background-position: 0 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    opacity: 1;
    pointer-events: none;
}
.flip-book .hard-mask .outside.z1:before,
.flip-book .hard-mask .outside.z3:after {
    background-size: 100% 100%;
}
.flip-book.landscape .hard-mask .outside.z1:before,
.flip-book.landscape .hard-mask .outside.z3:after  {
    background-image: url(./img/cover-mask-landscape_1eda243.png);
}
.flip-book.portrait .hard-mask .outside.z1:before,
.flip-book.portrait .hard-mask .outside.z3:after  {
    background-image: url(./img/cover-mask-portrait_702037d.png);
}
.flip-book.square .hard-mask .outside.z1:before,
.flip-book.square .hard-mask .outside.z3:after  {
    background-image: url(./img/cover-mask-square_b1388dd.png);
}
.flip-book.single-page .hard-mask .outside.z1:before,
.flip-book.single-page .hard-mask .outside.z3:after  {
    background-image: none;
}
.flip-book .hard-mask .outside.z3:after {
    -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
}
.flip-book .hard-mask .inside.z3:after,
.flip-book .hard-mask .inside.z1:after {
    content: '';
    position: absolute;
    z-index: 12;
    pointer-events: none;
}
.flip-book .hard-mask .gradient-zero.inside.z3:after,
.flip-book .hard-mask .gradient-zero.inside.z1:after {
    display: none;
}
.flip-book .hard-mask .gradient-light.inside.z3:after {
    background: -webkit-gradient(linear, right top, left top, from(rgba(0,0,0,0.09)), color-stop(3%, transparent));
    background: -webkit-linear-gradient(right, rgba(0,0,0,0.09), transparent 3%);
    background: linear-gradient(to left, rgba(0,0,0,0.09), transparent 3%);
}
.flip-book .hard-mask .gradient-light.inside.z1:after {
    background: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.09)), color-stop(3%, transparent));
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.09), transparent 3%);
    background: linear-gradient(to right, rgba(0,0,0,0.09), transparent 3%);
}
.flip-book .hard-mask .gradient-middle.inside.z3:after {
    background: -webkit-gradient(linear, right top, left top, from(rgba(0,0,0,0.15)), color-stop(3%, transparent));
    background: -webkit-linear-gradient(right, rgba(0,0,0,0.15), transparent 3%);
    background: linear-gradient(to left, rgba(0,0,0,0.15), transparent 3%);
}
.flip-book .hard-mask .gradient-middle.inside.z1:after {
    background: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.15)), color-stop(3%, transparent));
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.15), transparent 3%);
    background: linear-gradient(to right, rgba(0,0,0,0.15), transparent 3%);
}
.flip-book .hard-mask .gradient-dark.inside.z3:after {
    background: -webkit-gradient(linear, right top, left top, from(rgba(0,0,0,0.23)), color-stop(3%, transparent));
    background: -webkit-linear-gradient(right, rgba(0,0,0,0.23), transparent 3%);
    background: linear-gradient(to left, rgba(0,0,0,0.23), transparent 3%);
}
.flip-book .hard-mask .gradient-dark.inside.z1:after {
    background: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.23)), color-stop(3%, transparent));
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.23), transparent 3%);
    background: linear-gradient(to right, rgba(0,0,0,0.23), transparent 3%);
}
.flip-book .hard-mask .gradient-max.inside.z3:after {
    background: -webkit-gradient(linear, right top, left top, from(rgba(0,0,0,0.27)), color-stop(3%, transparent));
    background: -webkit-linear-gradient(right, rgba(0,0,0,0.27), transparent 3%);
    background: linear-gradient(to left, rgba(0,0,0,0.27), transparent 3%);
}
.flip-book .hard-mask .gradient-max.inside.z1:after {
    background: -webkit-gradient(linear, left top, right top, from(rgba(0,0,0,0.27)), color-stop(3%, transparent));
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.27), transparent 3%);
    background: linear-gradient(to right, rgba(0,0,0,0.27), transparent 3%);
}
.mobile .flip-book.single-mode:not(.rtl) .hard-mask .gradient-zero.inside.z3:empty:after,
.mobile .flip-book.single-mode.rtl .hard-mask .gradient-zero.inside.z1:empty:after {
    display: block;
    background: #ffffff;
}
.mobile .flip-book.single-mode:not(.rtl) .hard-mask .gradient-light.inside.z3:empty:after {
    background: -webkit-gradient(linear, right top, left top, from(#e8e8e8), color-stop(3%, #ffffff));
    background: -webkit-linear-gradient(right, #e8e8e8, #ffffff 3%);
    background: linear-gradient(to left, #e8e8e8, #ffffff 3%);
}
.mobile .flip-book.single-mode.rtl .hard-mask .gradient-light.inside.z1:empty:after {
    background: -webkit-gradient(linear, left top, right top, from(#e8e8e8), color-stop(3%, #ffffff));
    background: -webkit-linear-gradient(left, #e8e8e8, #ffffff 3%);
    background: linear-gradient(to right, #e8e8e8, #ffffff 3%);
}
.mobile .flip-book.single-mode:not(.rtl) .hard-mask .gradient-middle.inside.z3:empty:after {
    background: -webkit-gradient(linear, right top, left top, from(#d9d9d9), color-stop(3%, #ffffff));
    background: -webkit-linear-gradient(right, #d9d9d9, #ffffff 3%);
    background: linear-gradient(to left, #d9d9d9, #ffffff 3%);
}
.mobile .flip-book.single-mode.rtl .hard-mask .gradient-middle.inside.z1:empty:after {
    background: -webkit-gradient(linear, left top, right top, from(#d9d9d9), color-stop(3%, #ffffff));
    background: -webkit-linear-gradient(left, #d9d9d9, #ffffff 3%);
    background: linear-gradient(to right, #d9d9d9, #ffffff 3%);
}
.mobile .flip-book.single-mode:not(.rtl) .hard-mask .gradient-dark.inside.z3:empty:after {
    background: -webkit-gradient(linear, right top, left top, from(#c4c4c4), color-stop(3%, #ffffff));
    background: -webkit-linear-gradient(right, #c4c4c4, #ffffff 3%);
    background: linear-gradient(to left, #c4c4c4, #ffffff 3%);
}
.mobile .flip-book.single-mode.rtl .hard-mask .gradient-dark.inside.z1:empty:after {
    background: -webkit-gradient(linear, left top, right top, from(#c4c4c4), color-stop(3%, #ffffff));
    background: -webkit-linear-gradient(left, #c4c4c4, #ffffff 3%);
    background: linear-gradient(to right, #c4c4c4, #ffffff 3%);
}
.mobile .flip-book.single-mode:not(.rtl) .hard-mask .gradient-max.inside.z3:empty:after {
    background: -webkit-gradient(linear, right top, left top, from(#bababa), color-stop(3%, #ffffff));
    background: -webkit-linear-gradient(right, #bababa, #ffffff 3%);
    background: linear-gradient(to left, #bababa, #ffffff 3%);
}
.mobile .flip-book.single-mode.rtl .hard-mask .gradient-max.inside.z1:empty:after {
    background: -webkit-gradient(linear, left top, right top, from(#bababa), color-stop(3%, #ffffff));
    background: -webkit-linear-gradient(left, #bababa, #ffffff 3%);
    background: linear-gradient(to right, #bababa, #ffffff 3%);
}


/*ТЕНИ ОТ КНИГИ В СКИНАХ!*/
.page-flip-container
{
    position: absolute;

    overflow: hidden;

    -webkit-box-sizing: border-box;

            box-sizing: border-box;


    /*border: 1px solid #c5cfdc;*/
}
.mobile .flip-book .page-flip-container
{
    overflow: scroll;
    -ms-overflow-style: none; /* ie hide scrollbars */
    scrollbar-width: none; /* ff hide scrollbars */
}
.mobile .flip-book .page-flip-container::-webkit-scrollbar {
    display: none; /* else browsers hide scrollbars */
}
.mobile.embed .flip-book .page-flip-container {
    pointer-events: none;
}
.hard-mask .page-flip-container {
    background-color: transparent;
}
.hard-mask .page-flip-container.inside .page:empty {
    background-color: #fff;
}
.mask
{
    position: absolute;
    opacity: 1;
    pointer-events: auto;
}
.mask.work
{
    z-index: 100;
    overflow: hidden;
}
.mask[data-page="0-0"] {
    pointer-events: none;
}
.flip-grad
{
    position: absolute;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    z-index: 12;

    /*background: rgba(0, 0, 255, 0.6);*/
    /*border: 1px dashed #000;*/
    /*background: -webkit-linear-gradient(right, transparent 0%, rgba(0,0,0,0.35) 5.5%, rgba(0,0,0,0.22) 18.5%, transparent 100%);*/
}
.vis
{
    display: block;
}
.left
{
    left: 0;
}
.work .right-page
{
    left: auto;
}
.zindex
{
    z-index: -1;
}
.reflex-container
{
    position: absolute;
    z-index: 75;

    overflow: hidden;
    pointer-events: none;
}
.inner-reflex,
.inner-reflex-bottom
{
    position: absolute;


    /*background-color: rgba(255, 0, 0, 0.55);*/


    /*background: -webkit-linear-gradient(right, rgba(0,0,0,0.55) 0%, transparent 100%);*/
}
.reflex-container2
{
    position: absolute;

    overflow: hidden;

    -webkit-transition-property: width;
}
.lft-sdw .reflex-container2
{
    visibility: hidden;
}
.z1
{
    z-index: 1;
}
.z2
{
    z-index: 2;
}
.z3
{
    z-index: 3;
}
.z4
{
    z-index: 4;
}
.reflex-left:before,
.reflex-right:before,
.reflex-first:before
{
    position: absolute;
    z-index: 10000;

    content: '';
    pointer-events: none;

    -ms-touch-action: none;

        touch-action: none;
}
.reflex-left:before
{
    right: 0;
}
.reflex-right:before
{
    left: 0;
}
.reflex-first:before
{
    left: 0;
}
.gradient-zero.reflex-left:before
{
    opacity: 0;
}
.gradient-light.reflex-left:before
{
    background:         -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .09)), color-stop(16%, rgba(255, 255, 255, .05)), color-stop(18%, rgba(255, 255, 255, .05)), to(transparent));
    background:         linear-gradient(to left, rgba(0, 0, 0, .09), rgba(255, 255, 255, .05) 16%, rgba(255, 255, 255, .05) 18%, transparent);
    background: -webkit-linear-gradient(right, rgba(0, 0, 0, .09), rgba(255, 255, 255, .05) 16%, rgba(255, 255, 255, .05) 18%, transparent);
}
.gradient-middle.reflex-left:before
{
    background:         -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .15)), color-stop(16%, rgba(255, 255, 255, .1)), color-stop(18%, rgba(255, 255, 255, .1)), to(transparent));
    background:         linear-gradient(to left, rgba(0, 0, 0, .15), rgba(255, 255, 255, .1) 16%, rgba(255, 255, 255, .1) 18%, transparent);
    background: -webkit-linear-gradient(right, rgba(0, 0, 0, .15), rgba(255, 255, 255, .1) 16%, rgba(255, 255, 255, .1) 18%, transparent);
}
.gradient-dark.reflex-left:before
{
    background:         -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .23)), color-stop(16%, rgba(255, 255, 255, .2)), color-stop(18%, rgba(255, 255, 255, .2)), to(transparent));
    background:         linear-gradient(to left, rgba(0, 0, 0, .23), rgba(255, 255, 255, .2) 16%, rgba(255, 255, 255, .2) 18%, transparent);
    background: -webkit-linear-gradient(right, rgba(0, 0, 0, .23), rgba(255, 255, 255, .2) 16%, rgba(255, 255, 255, .2) 18%, transparent);
}
.gradient-max.reflex-left:before
{
    background:         -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .27)), color-stop(16%, rgba(255, 255, 255, .3)), color-stop(18%, rgba(255, 255, 255, .3)), to(transparent));
    background:         linear-gradient(to left, rgba(0, 0, 0, .27), rgba(255, 255, 255, .3) 16%, rgba(255, 255, 255, .3) 18%, transparent);
    background: -webkit-linear-gradient(right, rgba(0, 0, 0, .27), rgba(255, 255, 255, .3) 16%, rgba(255, 255, 255, .3) 18%, transparent);
}
.gradient-zero.reflex-right:before
{
    opacity: 0;
}
.gradient-light.reflex-right:before
{
    background:         -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .11)), color-stop(15%, rgba(255, 255, 255, .03)), color-stop(16%, rgba(255, 255, 255, .03)), to(transparent));
    background:         linear-gradient(to right, rgba(0, 0, 0, .11), rgba(255, 255, 255, .03) 15%, rgba(255, 255, 255, .03) 16%, transparent 100%);
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, .11), rgba(255, 255, 255, .03) 15%, rgba(255, 255, 255, .03) 16%, transparent 100%);
}
.gradient-middle.reflex-right:before
{
    background:         -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .17)), color-stop(15%, rgba(255, 255, 255, .06)), color-stop(16%, rgba(255, 255, 255, .06)), to(transparent));
    background:         linear-gradient(to right, rgba(0, 0, 0, .17), rgba(255, 255, 255, .06) 15%, rgba(255, 255, 255, .06) 16%, transparent 100%);
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, .17), rgba(255, 255, 255, .06) 15%, rgba(255, 255, 255, .06) 16%, transparent 100%);
}
.gradient-dark.reflex-right:before
{
    background:         -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .25)), color-stop(15%, rgba(255, 255, 255, .12)), color-stop(16%, rgba(255, 255, 255, .12)), to(transparent));
    background:         linear-gradient(to right, rgba(0, 0, 0, .25), rgba(255, 255, 255, .12) 15%, rgba(255, 255, 255, .12) 16%, transparent 100%);
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, .25), rgba(255, 255, 255, .12) 15%, rgba(255, 255, 255, .12) 16%, transparent 100%);
}
.gradient-max.reflex-right:before
{
    background:         -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .29)), color-stop(15%, rgba(255, 255, 255, .19)), color-stop(16%, rgba(255, 255, 255, .19)), to(transparent));
    background:         linear-gradient(to right, rgba(0, 0, 0, .29), rgba(255, 255, 255, .19) 15%, rgba(255, 255, 255, .19) 16%, transparent 100%);
    background: -webkit-linear-gradient(left, rgba(0, 0, 0, .29), rgba(255, 255, 255, .19) 15%, rgba(255, 255, 255, .19) 16%, transparent 100%);
}
.page-flip-container.bottom
{
    display: none;
}
.work .page-flip-container.bottom
{
    display: block;
}
.flip-grad
{
    display: none;
}
.work .bottom .flip-grad
{
    display: block;
}
.reflex-container2
{
    display: none;
}
.work .reflex-container2
{
    display: block;
}
.debug-canvas
{
    position: absolute;
    z-index: -100;
    top: 0;
    left: 0;
}
.layer1
{
    z-index: 60;
}
.layer2
{
    z-index: 70;
}
.layer3
{
    z-index: 80;
}
.layer3.hard-mask
{
    z-index: 81;
}
.layer3.hard-mask.action
{
    z-index: 83;
}
.page-flip-container.break
{
    display: none;
}
.hard-mask {
    position: absolute;
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    pointer-events: none;
}
.hard-mask .page {
    pointer-events: auto;
}
.hard-mask.hRight
{
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.hard-back,
.hard-front
{
    position: absolute;
    top: 0;
    left: 0;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.hard-back
{
    z-index: 1;
}
.hard-front
{
    z-index: 2;

    -webkit-transform: rotateY(0deg);

            transform: rotateY(0deg);
    cursor: pointer;
}
.hard-front.page-flip-container {
    cursor: inherit;
}
.hard-back
{
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
}
.action.hard-mask
{
    -webkit-box-shadow: -30px 0 30px -17px rgba(0,0,0,.3);
            box-shadow: -30px 0 30px -17px rgba(0,0,0,.3);
}
.action.hard-mask.hRight
{
    -webkit-box-shadow: 30px 0 30px -17px rgba(0,0,0,.3);
            box-shadow: 30px 0 30px -17px rgba(0,0,0,.3);
}
.inner-reflex-mask {
    position: absolute;
    overflow: hidden;
}
.inner-reflex-mask.last {
    left: 0;
}
.single-mode.rtl .inner-reflex-mask.last {
    left: auto;
    left: initial;
    right: 0;
}
.last .inner-reflex {
    margin-left: 0;
}
.single-mode.rtl .last .inner-reflex {
    margin-left: 0;
    margin-left: initial;
    margin-right: 0;
}
.reflex-left:before,
.reflex-right:before,
.reflex-first:before,
.hard-mask .inside.z3:after,
.hard-mask .inside.z1:after
{
    -webkit-transition: opacity .3s ease-out;
    transition: opacity .3s ease-out;
    opacity: 1;
}
.book-stopped .reflex-left:before,
.book-stopped .reflex-right:before,
.book-stopped .reflex-first:before,
.book-stopped .hard-mask .inside.z3:after,
.book-stopped .hard-mask .inside.z1:after
{
    -webkit-transition: opacity 0s;
    transition: opacity 0s;
    opacity: 0;
    display: none;
}
.book-stopped[data-frozen-by="note"] .reflex-left:before,
.book-stopped[data-frozen-by="note"] .reflex-right:before,
.book-stopped[data-frozen-by="note"] .reflex-first:before,
.book-stopped[data-frozen-by="note"] .stripe-layer.shadow,
.book-stopped[data-frozen-by="note"] .stripe-layer.stripe,
.book-stopped[data-frozen-by="note"] .book.hard:before,
.book-stopped[data-frozen-by="note"] .book.hard:after,
.book-stopped[data-frozen-by="note"] .hard-mask .outside.z1:before,
.book-stopped[data-frozen-by="note"] .hard-mask .outside.z3:after
{
    -webkit-transition: opacity .1s ease-out;
    transition: opacity .1s ease-out;
    opacity: 1;
    display: block;
}
.book-stopped {
    cursor: -webkit-grab;
    cursor: grab;
}
.drag-active .book-stopped {
    cursor: move;
    cursor: -webkit-grabbing;
    cursor: grabbing;
}
.book-stopped.nodrag, .book-stopped.nodrag:active {
    cursor: default;
}

/*.book-stopped .reflex-left:before,*/
/*.book-stopped .reflex-right:before,*/
/*.book-stopped .reflex-first:before,*/
.book-stopped .layer2,
/*.book-stopped .z3,*/
.book-stopped .z2,
.book-stopped .reflex-container
{
    -webkit-transition: opacity 0s;
    transition: opacity 0s;
    opacity: 0;
    display: none;
}
.stripe-layer,
.book.hard:before, .book.hard:after,
.hard-mask .outside.z1:before, .hard-mask .outside.z3:after {
    opacity: 1;
    -webkit-transition: opacity .3s ease-out;
    transition: opacity .3s ease-out;
}
.book-stopped .stripe-layer.shadow, .book-stopped .stripe-layer.stripe,
.book-stopped .book.hard:before, .book-stopped .book.hard:after,
.book-stopped .hard-mask .outside.z1:before, .book-stopped .hard-mask .outside.z3:after
{
    -webkit-transition: opacity 0s;
    transition: opacity 0s;
    opacity: 0;
}
.mobile .book-stopped .stripe-layer.shadow, .book-stopped .stripe-layer.stripe,
.mobile .book-stopped .book.hard:before, .book-stopped .book.hard:after,
.mobile .book-stopped .hard-mask .outside.z1:before, .book-stopped .hard-mask .outside.z3:after
{
    display: none;
}
.lightbox .inner-reflex,
.lightbox .inner-reflex-bottom {
    display: none;
}

/*.inner-reflex-bottom*/
/*{*/
/*    !*display: none;*!*/
/*    will-change: transform, background;*/
/*}*/

/*.layer3, .layer3>div{*/
/*    will-change: transform;*/
/*}*/

/*.layer3 .flip-grad, .layer3 .inner-reflex*/
/*{*/
/*    !*display: none;*!*/
/*    will-change: transform, background;*/
/*}*/
.stripe-layer{
    position: absolute;
    pointer-events: none;
}
.stripe-layer.stripe {
    z-index: 2;
}
.stripe-layer.shadow {
    z-index: 1;
}
.left-stripe-block, .right-stripe-block {
    pointer-events: auto;
}
.first-to-last .stripe-layer{
    display: none;
}
.first-to-last .book.lft-sdw:before, .first-to-last .book.rgt-sdw:before{
    display: none;
}
.first-to-last .book.lft-sdw:after, .first-to-last .book.rgt-sdw:after{
    display: none;
}
.left-stripe-block,
.right-stripe-block {
    height: 100%;
    position: absolute;
    z-index: 2;
}
.left-stripe-block {
    right: 100%;
}
.right-stripe-block {
    left: 100%;
}

/* buttons */
.book-holder .next-button, .book-holder .previous-button {
    z-index: 1;
    width: 0;
    height: 100%;
    position: absolute;
    cursor: pointer;
}
.book-holder .next-button svg, .book-holder .previous-button svg {
    pointer-events: none;
}
.book-holder.hard .next-button, .book-holder.hard .previous-button {
    height: 103%;
    top: -1.5%;
}
.book-holder.static-book .next-button, .book-holder.static-book .previous-button {
    z-index: 1000;
}

/*.next-button {*/
/*    right: -56px;*/
/*}*/

/*.previous-button {*/
/*    left: -56px;*/
/*}*/
.book-holder .svg-icon {
    width: 100%;
    height: 100%;
}
.book-holder .left-add-note {
    top: -2px;
    right: 0;
}
.book-holder .right-add-note {
    top: -2px;
}
.book-holder .icon-book-prev {
    top: 50%;
    right: 0;
    margin-top: -12px;
}
.book-holder .icon-book-next {
    top: 50%;
    margin-top: -12px;
}
.flip-book.arrow-attract-right .book-holder .icon-book-next {
    -webkit-animation: arrow-attract-right 3.5s ease-in-out 3s infinite;
            animation: arrow-attract-right 3.5s ease-in-out 3s infinite;
}
.flip-book.arrow-attract-left .book-holder .icon-book-prev {
    -webkit-animation: arrow-attract-left 3.5s ease-in-out 3s infinite;
            animation: arrow-attract-left 3.5s ease-in-out 3s infinite;
}
.book-holder .icon-book-first {
    bottom: -2px;
    right: 0;
}
.book-holder .icon-book-last {
    bottom: -2px;
}
.book-holder .left-add-note,
.book-holder .right-add-note,
.book-holder .icon-book-prev,
.book-holder .icon-book-next,
.book-holder .icon-book-first,
.book-holder .icon-book-last {
    position: absolute;
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
@-webkit-keyframes arrow-attract-right {
9% {
        width: 32px;
        height: 32px;
        margin-left: 0;
        margin-top: -16px;
}
19% {
        margin-left: 5px;
}
29% {
        margin-left: 0;
}
39% {
        margin-left: 5px;
}
49% {
        width: 32px;
        height: 32px;
        margin-top: -16px;
        margin-left: 0;
}
69% {
        width: 24px;
        height: 24px;
        margin-top: -12px;
}
}
@keyframes arrow-attract-right {
9% {
        width: 32px;
        height: 32px;
        margin-left: 0;
        margin-top: -16px;
}
19% {
        margin-left: 5px;
}
29% {
        margin-left: 0;
}
39% {
        margin-left: 5px;
}
49% {
        width: 32px;
        height: 32px;
        margin-top: -16px;
        margin-left: 0;
}
69% {
        width: 24px;
        height: 24px;
        margin-top: -12px;
}
}
@-webkit-keyframes arrow-attract-left {
9% {
        width: 38px;
        height: 38px;
        margin-right: 0;
        margin-top: -19px;
}
19% {
        margin-right: 7px;
}
29% {
        margin-right: 0;
}
39% {
        margin-right: 7px;
}
49% {
        width: 38px;
        height: 38px;
        margin-top: -19px;
        margin-right: 0;
}
69% {
        width: 24px;
        height: 24px;
        margin-top: -12px;
}
}
@keyframes arrow-attract-left {
9% {
        width: 38px;
        height: 38px;
        margin-right: 0;
        margin-top: -19px;
}
19% {
        margin-right: 7px;
}
29% {
        margin-right: 0;
}
39% {
        margin-right: 7px;
}
49% {
        width: 38px;
        height: 38px;
        margin-top: -19px;
        margin-right: 0;
}
69% {
        width: 24px;
        height: 24px;
        margin-top: -12px;
}
}
.main-frame.light-shadows .flip-grad,
.main-frame.light-shadows .inner-reflex-bottom,
.main-frame.light-shadows .inner-reflex,
.main-frame.light-shadows .reflex-left:before,
.main-frame.light-shadows .reflex-right:before,
.main-frame.light-shadows .reflex-first:before {
    opacity: 0.7;
}

/* ie11 problem with overflow: hidden */
.main-frame.ie11 .mask.work
{
    overflow-x: hidden;
    overflow-y: auto;
    display: block;
    -ms-overflow-style: none;
}
.main-frame.ie11 .hard-mask
{
     -webkit-perspective: 2500px;
             perspective: 2500px;
}
.main-frame.ie11 .hard-mask .page-flip-container.outside,
.main-frame.ie11 .hard-mask .page-flip-container.inside
{
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
}
.main-frame.ie11 .action.hard-mask,
.main-frame.ie11 .action.hard-mask.hRight
{
    -webkit-box-shadow: none;
            box-shadow: none;
}
.main-frame.ie11 .action.hard-mask.hRight .page-flip-container.hard-back,
.main-frame.ie11 .action.hard-mask:not(.hRight) .page-flip-container.hard-front
{
    -webkit-box-shadow: -30px 0 30px -17px rgba(0,0,0,.3);
            box-shadow: -30px 0 30px -17px rgba(0,0,0,.3);
}
.main-frame.ie11 .action.hard-mask.hRight .page-flip-container.hard-front,
.main-frame.ie11 .action.hard-mask:not(.hRight) .page-flip-container.hard-back
{
    -webkit-box-shadow: 30px 0 30px -17px rgba(0,0,0,.3);
            box-shadow: 30px 0 30px -17px rgba(0,0,0,.3);
}
.stripe-btn{
    border: 0;
    background: none;
    padding: 0;
}
.next-button .icon-add-note{
    margin-left: 4px;
}
.previous-button .icon-add-note{
    margin-right: 2px;
}
.single-mode .shadow {
    opacity: 0;
}
.single-mode .book.hard.full-sdw,
.single-mode .book.soft.full-sdw {
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
}
.single-mode .book:before {
    position: absolute;
    content: '';
    pointer-events: none;
    left: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-box-shadow: 0 0 2px 1px rgba(115, 115, 115, 0.25);
            box-shadow: 0 0 2px 1px rgba(115, 115, 115, 0.25);
    width: 50%;
}
.single-mode.rtl .book.soft:before {
    left: 0;
}
.single-mode:not(.rtl) .hard-mask:not(.hRight),
.single-mode:not(.rtl) .hard-mask:not(.hRight) .page-flip-container,
.single-mode:not(.rtl) .mask:not(.mR),
.single-mode:not(.rtl) .mask:not(.mR) .page-flip-container,
.single-mode.rtl .hard-mask.hRight,
.single-mode.rtl .hard-mask.hRight .page-flip-container,
.single-mode.rtl .mask.mR,
.single-mode.rtl .mask.mR .page-flip-container,
.single-mode .page-reverse-side {
    pointer-events: none;
}

/* последние страницы толщины отрисовываются светлым, что создает дополнительный отступ в 2px */
.single-mode.rtl .next-button {
    right: -2px !important;
}
.single-mode:not(.rtl) .previous-button {
    left: -2px !important;
}
.enforce-white-bg {
    position: absolute;
    width: 100%;
    height: 100%;
}


.slide-book[data-v-42dda8e8] {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}
.desktop .slide-book[data-v-42dda8e8] {
    pointer-events: none;
}
.animation .slide-book[data-v-42dda8e8] {
    z-index: 2;
}
.slide-book .slide-holder[data-v-42dda8e8] {
    position: absolute;
    width: 100%;
    height: 100%;
}
.slide-book .slide-holder.zoomed[data-v-42dda8e8] {
    cursor: -webkit-grab;
    cursor: grab;
}
.slide-book .slide-holder.zoomed.drag-active[data-v-42dda8e8] {
    cursor: move;
    cursor: -webkit-grabbing;
    cursor: grabbing;
}
.slide-book .slide-holder.zoomed.nodrag[data-v-42dda8e8],
.slide-book .slide-holder.zoomed.nodrag[data-v-42dda8e8]:active {
    cursor: default;
}
.slide-book .slide-wrapper[data-v-42dda8e8] {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.slide-book .slide-wrapper.hidden[data-v-42dda8e8]{
    display: none;
}
.slide-book .spread-wrapper[data-v-42dda8e8] {
    position: absolute;
    -webkit-perspective: 5000px;
            perspective: 5000px;
    pointer-events: auto;
    -webkit-transform: translateX(0px);
            transform: translateX(0px); /*фикс координат для того что бы position:fixed у элементов на
                                        странице работал относительно книги, а не window,
                                        трансформация меняет систему координат для позиционирования*/
    -moz-transform: none;       /*фикс смещения курсора в inline video в firefox*/
}
.slide-book .spread-wrapper .slide-page[data-v-42dda8e8] {
    right: auto;
    right: initial;
    left: auto;
    left: initial;
}
.slide-book .spread-wrapper .slide-page.content-crop[data-v-42dda8e8] {
    margin: auto;
    left: 0;
    right: 0;
}
.slide-book .spread-wrapper .slide-page.left[data-v-42dda8e8] {
    left: 0;
}
.slide-book .spread-wrapper .slide-page.right[data-v-42dda8e8] {
    right: 0;
}
.slide-book .spread-wrapper .spread-filler[data-v-42dda8e8] {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.slide-book .spread-wrapper .page-filler[data-v-42dda8e8] {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-color: #fff;
    overflow: hidden;
}
.slide-book .spread-wrapper .page-filler .svg-icon[data-v-42dda8e8] {
    fill: rgba(200, 200, 200, 0.25);
    width: 80%;
    max-height: 80%;
}
.slide-book .spread-wrapper .page-filler[data-v-42dda8e8]::after {
    content: attr(data-caption);
    position: absolute;
    display: inline-block;
    bottom: 7px;
    left: 7px;
    text-align: center;
    color: rgba(200, 200, 200, 0.5);
}
.slide-book .slide-holder.single .spread-wrapper .page-filler[data-v-42dda8e8]::after {
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
}
.slide-book .spread-wrapper .page-filler.right[data-v-42dda8e8]::after {
    left: auto;
    left: initial;
    right: 10px;
}
.icon-add-note[data-v-42dda8e8] {
    position: absolute;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    pointer-events: auto;
}
.icon-add-note[data-v-42dda8e8]:not(.outside) {
    fill: #ffffff;
    -webkit-filter: drop-shadow(0px 0px 2px #596168);
            filter: drop-shadow(0px 0px 2px #596168);
}
.icon-add-note.hidden[data-v-42dda8e8] {
    display: none;
}
.icon-add-note.right[data-v-42dda8e8] {
    right: 0;
}
.icon-add-note.left[data-v-42dda8e8] {
    left: 0;
}
.icon-add-note svg[data-v-42dda8e8] {
    width: 24px;
    height: 24px;
}
.ie11 .icon-add-note svg[data-v-42dda8e8] {
    stroke: rgba(0,0,0,0.5);
}
.note-icon-fade-enter-active[data-v-42dda8e8] {
    -webkit-transition: opacity .3s ease-in-out;
    transition: opacity .3s ease-in-out;
}
.note-icon-fade-leave-active[data-v-42dda8e8] {
    -webkit-transition: none;
    transition: none;
}
.note-icon-fade-enter[data-v-42dda8e8],
.note-icon-fade-leave-to[data-v-42dda8e8] {
    opacity: 0;
}

.logo-container[data-v-3832a65e] {
    position: absolute;
    -webkit-transition: opacity 0.5s ease-in-out,
                width .3s ease,
                height .3s ease;
    transition: opacity 0.5s ease-in-out,
                width .3s ease,
                height .3s ease;
    z-index: 2;
}
.animation .logo-container[data-v-3832a65e] {
    z-index: 1;
}
.logo-container.overlap[data-v-3832a65e] {
    z-index: inherit;
}
.logo-container a[data-v-3832a65e] {
    -webkit-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;
}
.logo-container a[href][data-v-3832a65e]:hover{
    opacity: .8;
}
.logo-container .logo-custom[data-v-3832a65e] {
    -webkit-transition: width .3s ease,
                height .3s ease;
    transition: width .3s ease,
                height .3s ease;
}
.logo-container[data-v-3832a65e], .logo-container a[data-v-3832a65e], .logo-container svg[data-v-3832a65e], .logo-container img[data-v-3832a65e] {
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
.nav-arrows[data-v-54040386] {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 102300;
    pointer-events: none;
}
.nav-btn[data-v-54040386] {
    position: absolute;
    padding: 0;
    cursor: pointer;
    pointer-events: initial;

    border: none;
    outline: none;
    background: none;
}
.nav-right-arrow[data-v-54040386], .nav-left-arrow[data-v-54040386] {
    height: 80px;
    width: 50px;
    margin: -40px 10px 0 10px;
    top: 50%;
}
.nav-first[data-v-54040386], .nav-last[data-v-54040386] {
    height: 32px;
    width: 32px;
    margin: 0 5px;
    bottom: 0;
}
.nav-right-arrow[data-v-54040386], .nav-last[data-v-54040386]{
    right: 0;
    text-align: right;
}
.nav-left-arrow[data-v-54040386], .nav-first[data-v-54040386]{
    left: 0;
    text-align: left;
}
.nav-btn svg[data-v-54040386]
{
    fill: rgba(255,255,255,0.9);
    -webkit-filter: drop-shadow( 0px 0px 2px rgba(89,97,104,0.9));
            filter: drop-shadow( 0px 0px 2px rgba(89,97,104,0.9));
}
.nav-btn:hover svg[data-v-54040386]
{
    fill: rgba(255,255,255,1);
    -webkit-filter: drop-shadow( 0px 0px 2px rgba(89,97,104,1));
            filter: drop-shadow( 0px 0px 2px rgba(89,97,104,1));
}
.nav-right-arrow svg[data-v-54040386], .nav-left-arrow svg[data-v-54040386] {
    width: 50%;
}
.nav-right-arrow svg[data-v-54040386], .nav-left-arrow svg[data-v-54040386] {
    width: 60%;
}
.nav-first svg[data-v-54040386], .nav-last svg[data-v-54040386] {
    width: 100%;
}
.ie11 .nav-btn svg[data-v-54040386] {
    stroke: rgba(0,0,0,0.5);
}
.arrow-attract-right .nav-right-arrow[data-v-54040386] {
    margin-right: 20px;
    margin-left: 0;
    -webkit-transition: margin-left, margin-right 0.5s ease-in-out;
    transition: margin-left, margin-right 0.5s ease-in-out;
    -webkit-animation: arrow-attract-right-data-v-54040386 3.5s ease-in-out 3s infinite;
            animation: arrow-attract-right-data-v-54040386 3.5s ease-in-out 3s infinite;
}
.arrow-attract-left .nav-left-arrow[data-v-54040386] {
    margin-right: 0;
    margin-left: 20px;
    -webkit-transition: margin-left, margin-right 0.5s ease-in-out;
    transition: margin-left, margin-right 0.5s ease-in-out;
    -webkit-animation: arrow-attract-left-data-v-54040386 3.5s ease-in-out 3s infinite;
            animation: arrow-attract-left-data-v-54040386 3.5s ease-in-out 3s infinite;
}
@-webkit-keyframes arrow-attract-right-data-v-54040386 {
10% {
        width: 75px;
        height: 120px;
        margin-top: -60px;
}
20% {
        margin-right: 0;
        margin-left: 20px;
}
30% {
        margin-right: 10px;
        margin-left: 10px;
}
40% {
        margin-right: 0;
        margin-left: 20px;
}
50% {
        width: 75px;
        height: 120px;
        margin-top: -60px;
}
65% {
        height: 80px;
        width: 50px;
        margin-top: -40px;
        margin-right: 20px;
        margin-left: 0;
}
}
@keyframes arrow-attract-right-data-v-54040386 {
10% {
        width: 75px;
        height: 120px;
        margin-top: -60px;
}
20% {
        margin-right: 0;
        margin-left: 20px;
}
30% {
        margin-right: 10px;
        margin-left: 10px;
}
40% {
        margin-right: 0;
        margin-left: 20px;
}
50% {
        width: 75px;
        height: 120px;
        margin-top: -60px;
}
65% {
        height: 80px;
        width: 50px;
        margin-top: -40px;
        margin-right: 20px;
        margin-left: 0;
}
}
@-webkit-keyframes arrow-attract-left-data-v-54040386 {
10% {
        width: 75px;
        height: 120px;
        margin-top: -60px;
}
20% {
        margin-right: 20px;
        margin-left: 0;
}
30% {
        margin-right: 10px;
        margin-left: 10px;
}
40% {
        margin-right: 20px;
        margin-left: 0;
}
50% {
        width: 75px;
        height: 120px;
        margin-top: -60px;
}
65% {
        height: 80px;
        width: 50px;
        margin-top: -40px;
        margin-right: 0;
        margin-left: 20px;
}
}
@keyframes arrow-attract-left-data-v-54040386 {
10% {
        width: 75px;
        height: 120px;
        margin-top: -60px;
}
20% {
        margin-right: 20px;
        margin-left: 0;
}
30% {
        margin-right: 10px;
        margin-left: 10px;
}
40% {
        margin-right: 20px;
        margin-left: 0;
}
50% {
        width: 75px;
        height: 120px;
        margin-top: -60px;
}
65% {
        height: 80px;
        width: 50px;
        margin-top: -40px;
        margin-right: 0;
        margin-left: 20px;
}
}
.nav-arrows[data-v-6d66682b] {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    pointer-events: none;
}
.nav-btn[data-v-6d66682b] {
    position: absolute;
    padding: 0;
    cursor: pointer;
    pointer-events: initial;

    border: none;
    outline: none;
    background: none;
    z-index: 1;
}
.nav-right-arrow[data-v-6d66682b], .nav-left-arrow[data-v-6d66682b] {
    height: 80px;
    width: 40px;

    -webkit-transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, -webkit-box-shadow ease-in-out 0.4s;

    transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, -webkit-box-shadow ease-in-out 0.4s;

    transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, box-shadow ease-in-out 0.4s;

    transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, box-shadow ease-in-out 0.4s, -webkit-box-shadow ease-in-out 0.4s;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}
.nav-right-arrow[data-v-6d66682b]{
    padding-right: 5px;
}
.nav-left-arrow[data-v-6d66682b]{
    padding-left: 5px;
}
.nav-right-arrow > svg[data-v-6d66682b], .nav-left-arrow > svg[data-v-6d66682b] {
    -webkit-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
}
.nav-first-left-arrow[data-v-6d66682b] {
    margin-top: 83px;
    height: 20px;
    width: 40px;
    -webkit-transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, -webkit-box-shadow ease-in-out 0.4s;
    transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, -webkit-box-shadow ease-in-out 0.4s;
    transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, box-shadow ease-in-out 0.4s;
    transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, box-shadow ease-in-out 0.4s, -webkit-box-shadow ease-in-out 0.4s;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    opacity: 0;
}
.nav-last-right-arrow[data-v-6d66682b] {
    margin-top: 83px;
    height: 20px;
    width: 40px;
    -webkit-transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, -webkit-box-shadow ease-in-out 0.4s;
    transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, -webkit-box-shadow ease-in-out 0.4s;
    transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, box-shadow ease-in-out 0.4s;
    transition: all ease-in-out 0.75s, background-color ease-in-out 0.4s, box-shadow ease-in-out 0.4s, -webkit-box-shadow ease-in-out 0.4s;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    opacity: 0;
}
.nav-right-arrow[data-v-6d66682b],
.nav-left-arrow[data-v-6d66682b],
.nav-first-left-arrow[data-v-6d66682b],
.nav-last-right-arrow[data-v-6d66682b] {
    border-radius: 3px;
}
.button-block[data-v-6d66682b]{
    position: absolute;
    margin: -40px 10px 0 10px;
    top: 50%;
    height: 80px;
    width: 40px;
    overflow: visible;
}
.button-block.left[data-v-6d66682b]{
    left: 0;
}
.button-block.right[data-v-6d66682b]{
    right: 0;
}
.start .button-block[data-v-6d66682b],
.button-block[data-v-6d66682b]:hover {
    height: 105px;
}
.start .nav-btn.last-btn > svg[data-v-6d66682b],
.button-block:hover > .nav-btn.last-btn > svg[data-v-6d66682b]{
    width: 60%;
}
.start .nav-btn.last-btn[data-v-6d66682b],
.button-block:hover > .nav-btn.last-btn[data-v-6d66682b]
{
    display: inline-block;
    opacity: 1;
}
.button-block:hover > .nav-btn[data-v-6d66682b],
.start .nav-btn[data-v-6d66682b]{
    width: 40px;
}
.button-block:hover > .next-btn > svg[data-v-6d66682b],
.start .next-btn > svg[data-v-6d66682b]{
    width: 85%;
}
.nav-btn svg[data-v-6d66682b]
{
    fill: rgba(255,255,255,0.9);
    -webkit-filter: drop-shadow( 0px 0px 2px rgba(89,97,104,0.9));
            filter: drop-shadow( 0px 0px 2px rgba(89,97,104,0.9));
}
.nav-btn:hover svg[data-v-6d66682b]
{
    fill: rgba(255,255,255,1);
    -webkit-filter: drop-shadow( 0px 0px 2px rgba(89,97,104,1));
            filter: drop-shadow( 0px 0px 2px rgba(89,97,104,1));
}
.nav-right-arrow svg[data-v-6d66682b], .nav-left-arrow svg[data-v-6d66682b] {
    width: 60%;
}
.nav-first svg[data-v-6d66682b], .nav-last svg[data-v-6d66682b] {
    width: 100%;
}
.ie11 .nav-btn svg[data-v-6d66682b] {
    stroke: rgba(0,0,0,0.5);
}
.arrow-attract-right .nav-right-arrow > svg[data-v-6d66682b],
.arrow-attract-left .nav-left-arrow > svg[data-v-6d66682b] {
    -webkit-animation: arrow-attract-data-v-6d66682b 4s ease-in-out 1s infinite;
            animation: arrow-attract-data-v-6d66682b 4s ease-in-out 1s infinite;
}
@-webkit-keyframes arrow-attract-data-v-6d66682b {
0% {
        width: 85%;
}
20% {
        width: 60%;
}
30% {
        width: 80%;
}
40% {
        width: 60%;
}
50% {
        width: 85%;
}
100% {
        width: 85%;
}
}
@keyframes arrow-attract-data-v-6d66682b {
0% {
        width: 85%;
}
20% {
        width: 60%;
}
30% {
        width: 80%;
}
40% {
        width: 60%;
}
50% {
        width: 85%;
}
100% {
        width: 85%;
}
}

.zoom-panel[data-v-dde720a0]{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-flow: row nowrap;
        -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    width: 150px;
    height: 35px;
    left: 50%;
    border-radius: 3px;
    margin-left: -75px;
    position: absolute;
    z-index: 10000;
    bottom: 30px;
    pointer-events: initial;
    -webkit-transition: opacity 0.3s ease-in;
    transition: opacity 0.3s ease-in;
}
.zoom-panel-caption[data-v-dde720a0]{
    display: block;

    width: 30px;
    height: 100%;

    text-align: center;
    margin-top: -1px;

    cursor: pointer;

    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
}
.zoom-panel-caption[data-v-dde720a0]:hover{
    cursor: pointer;
}
.zoom-panel-caption.minus[data-v-dde720a0]{
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
}
.zoom-panel-caption.plus[data-v-dde720a0]{
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
        -ms-flex-order: 3;
            order: 3;
}
.zoom-panel-line[data-v-dde720a0]{
    position: relative;

    display: block;

    -webkit-box-ordinal-group: 3;

    -webkit-order: 2;

        -ms-flex-order: 2;

            order: 2;

    width: 90px;
    height: 5px;
    margin: 0;
    cursor: pointer;
}
.zoom-panel-line[data-v-dde720a0]:hover{
    cursor: pointer;
}
.zoom-panel-slider[data-v-dde720a0]{
    position: absolute;

    display: block;

    width: 6px;
    height: 15px;
    margin: -5px 0 0 0;

    cursor: -webkit-grab;

    cursor: grab;
    background-color: #857462;
}
.zoom-panel-slider[data-v-dde720a0]:hover{
    cursor: -webkit-grab;
    cursor: grab;
}
.zoom-panel.grabbing[data-v-dde720a0],
.zoom-panel-slider[data-v-dde720a0]:active,
.zoom-panel.grabbing .zoom-panel-caption[data-v-dde720a0],
.zoom-panel.grabbing .zoom-panel-line[data-v-dde720a0],
.zoom-panel.grabbing .zoom-panel-slider[data-v-dde720a0],
.zoom-panel.grabbing .zoom-panel-slider[data-v-dde720a0]:hover{
    cursor: -webkit-grabbing;
    cursor: grabbing;
}
.publication-container.desktop .book-container[data-v-1e94cca4]
{
    position: relative;

    -webkit-box-flex: 1;

    -webkit-flex: 1;

        -ms-flex: 1;

            flex: 1;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
        -ms-flex-order: 2;
            order: 2;
}
.publication-container.mobile .book-container[data-v-1e94cca4]
{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.publication-container.flat .book-container[data-v-1e94cca4]
{
    width: 100%;
    height: 100%;
}
.book-substrate-prev[data-v-1e94cca4],
.book-substrate-next[data-v-1e94cca4] {
    display: none;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    cursor: pointer;
}
.book-substrate-prev[data-v-1e94cca4] {
    left: 0;
}
.book-substrate-next[data-v-1e94cca4] {
    right: 0;
}
.clickToRead[data-v-1e94cca4] {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: auto;
    margin-left: -70px;
    margin-top: -20px;
    color: #fff;
    background-color: rgba(0,0,0,.7);
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    font-size: 13px;
    line-height: 20px;
    z-index: 5000;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.main-frame:not(.ie11) .clickToRead[data-v-1e94cca4] {
    -webkit-transition: opacity .25s,background-color .25s;
    transition: opacity .25s,background-color .25s;
    -webkit-transition-delay: .5s,0s;
            transition-delay: .5s,0s;
}
.miniClickToRead[data-v-1e94cca4] {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 10px;
    right: 10px;
    background-color: rgba(110,110,110,0.4);
    cursor: pointer;
    border-radius: 3px;
    z-index: 102000;

    -ms-touch-action: pan-y;

        touch-action: pan-y;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.miniClickToRead.hideTop[data-v-1e94cca4] {
    /* ignore bottom */
    top: 10px;
}
.clickToRead[data-v-1e94cca4]:hover {
    background-color: rgba(0,0,0,.5);
}
.miniClickToRead svg[data-v-1e94cca4]
{
    fill: rgba(255,255,255,0.9);
    -webkit-filter: drop-shadow( 0px 0px 2px rgba(89,97,104,0.9));
            filter: drop-shadow( 0px 0px 2px rgba(89,97,104,0.9));
}
.miniClickToRead:hover svg[data-v-1e94cca4]
{
    fill: rgba(255,255,255,1);
    -webkit-filter: drop-shadow( 0px 0px 2px rgba(89,97,104,1));
            filter: drop-shadow( 0px 0px 2px rgba(89,97,104,1));
}
.miniClickToRead .fullscreen-button-mini-holder[data-v-1e94cca4] {
    position: absolute;
    width: 32px;
    height: 32px;
    margin: 4px;
}
.miniClickToRead .fullscreen-button-mini-holder[data-v-1e94cca4]:hover {
    width: 34px;
    height: 34px;
    margin: 3px;
}
.miniClickToRead .fullscreen-button-mini-holder .svg-icon[data-v-1e94cca4] {
    fill: #fff;
}
.no-fade-enter-active[data-v-1e94cca4],
.no-fade-leave-active[data-v-1e94cca4]
{
    -webkit-transition: none !important;
    transition: none !important;
}
.main-frame:not(.ie11) .ctr-fade-enter-active[data-v-1e94cca4]
{
    -webkit-transition: opacity .3s ease-in-out 1s;
    transition: opacity .3s ease-in-out 1s;
}
.ctr-fade-enter[data-v-1e94cca4],
.ctr-fade-leave-to[data-v-1e94cca4]
{
    opacity: 0;
}

.thumb
{
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;

    margin: auto;
}
.thumb .background
{
    position: absolute;

    overflow: hidden;

    width: 100%;
    height: 100%;
}
.thumb .background img
{
    position: relative;

    width: 100%;
    height: 100%;
}

/* Fixing the glitch that image with no src attr set has a border */
.thumb .background img[src=''],
.thumb .background img:not([src]) {
    opacity:0;
}
.thumb .preloader
{
    position: absolute;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.thumb.double .preloader {
    width: 50%;
}
.thumb.double .preloader.right {
    left: 50%;
}
.thumb .preloader-container
{
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;

    -webkit-transform: translateX(-50%) translateY(-50%);

            transform: translateX(-50%) translateY(-50%);
}
.ie11 .vue-simple-spinner{
    -webkit-transition: none;
    transition: none;
}

.image[data-v-30a8a80c] {
    display: block;
    max-width: 100%;
    max-height: 100%;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    background-color: rgba(255, 255, 255, 1);
}
.lightbox-thumbnail img[data-v-30a8a80c] {
    cursor: pointer;
}
.lightbox-thumbnail.active:not(.gallery) .image[data-v-30a8a80c] {
    -webkit-box-shadow: 0 0 0 2px rgb(255, 213, 28);
            box-shadow: 0 0 0 2px rgb(255, 213, 28);
}
.icon-wrap[data-v-30a8a80c] {
    position: absolute;
    background-color: rgba(51, 51, 51, 0.5);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    width: 100%;
    height: 100%;
    top: 0px; /* for ie */
    left: 0px /* for ie */
}
.error-icon[data-v-30a8a80c] {
    width: 36px;
    height: 36px;
    fill: #f5f5f5;
}
.image-enter-active[data-v-30a8a80c] {
    -webkit-transition: background-color .1s ease, opacity .1s ease;
    transition: background-color .1s ease, opacity .1s ease;
}
.image-leave-active[data-v-30a8a80c] {
    -webkit-transition: background-color .2s ease, opacity .2s ease;
    transition: background-color .2s ease, opacity .2s ease;
}
.image-enter[data-v-30a8a80c],
.image-leave-to[data-v-30a8a80c] {
    opacity: 0;
    background-color: rgba(255, 255, 255, 0);
}

.nav-dot[data-v-e9e32c9a] {
    -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
            flex-shrink: 0;
}
.nav-dot[data-v-e9e32c9a] {
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
            flex-grow: 0;
}
.circle[data-v-e9e32c9a] {
    background-color: #444;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-left: 4px;
    margin-right: 4px;
    -webkit-transition: background-color .15s ease;
    transition: background-color .15s ease;
}
.nav-dot.gallery-item .circle[data-v-e9e32c9a] {
    margin-top: 2px;
    margin-bottom: 2px;
}
.nav-dot:not(.gallery-item) .circle[data-v-e9e32c9a] {
    margin-top: 4px;
    margin-bottom: 4px;
}
.nav-dot:hover .circle[data-v-e9e32c9a] {
    background-color: #515151;
}
.nav-dot:active .circle[data-v-e9e32c9a] {
    background-color: #333;
}
.nav-dot.active .circle[data-v-e9e32c9a] {
    background-color: #bdbdbd;
}
.gallery[data-v-e9e32c9a] {
    border: 2px solid;
    border-color: #444;
    border-radius: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition: border-color .3s ease;
    transition: border-color .3s ease;
}
.gallery.active[data-v-e9e32c9a] {
    border-color: #bdbdbd;
}

.nav-dots[data-v-65901bb9] {
    padding: 8px 0 8px;
    height: 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
}

.lightbox-thumbnails-wrap[data-v-57ed2068] {
    height: 110px;
    z-index: 2;
}
.lightbox-thumbnails[data-v-57ed2068] {
    padding: 20px 0;
    height: 70px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: scroll;
}
.lightbox-thumbnail-image-wrap[data-v-57ed2068] {
    max-width: 105px;
    height: 70px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
}
.lightbox-thumbnail[data-v-57ed2068]:not(.gallery) {
    margin: 0 12px;
}
.lightbox-thumbnail[data-v-57ed2068] {
    -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
            flex-shrink: 0;
}
.lightbox-thumbnail.gallery[data-v-57ed2068] {
    -webkit-box-shadow: 0 0 0 1px red;
            box-shadow: 0 0 0 1px red;
}
.lightbox-gallery-thumbnails[data-v-57ed2068] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}


.close[data-v-37151dfc] {
    position: absolute;
    top: -60px;
    right: -60px;
}
.desktop[dir="rtl"] .close[data-v-37151dfc],
.tablet[dir="rtl"] .close[data-v-37151dfc] {
    right: auto;
    right: initial;
    left: -60px;
}
.small-workspace .close[data-v-37151dfc] {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
}
div[dir="rtl"] .small-workspace .close[data-v-37151dfc] {
    padding-right: 0;
    padding-right: initial;
    padding-left: env(safe-area-inset-left);
}
.close[data-v-37151dfc],
.close svg[data-v-37151dfc] {
    height: 60px;
    width: 60px;
}
.lightbox-btn[data-v-37151dfc] {
    cursor: pointer;
}
.nav-area[data-v-37151dfc] {
    cursor: pointer;
    height: 100vh;
    padding-left: 12px;/* ie */
    padding-right: 12px;/* ie */
    padding-left: max(12px, env(safe-area-inset-left));
    padding-right: max(12px, env(safe-area-inset-right));
    width: 60px;
    position: absolute;
    top: 0;
    z-index: 2;
}
.nav-area.nav-area-left[data-v-37151dfc] {
    left: 0;
}
.nav-area.nav-area-right[data-v-37151dfc] {
    right: 0;
}
.nav-btns[data-v-37151dfc] {
    z-index: 4;
}
.nav-btn[data-v-37151dfc] {
    position: absolute;
    top: 50%;
    z-index: 4;/* ie */
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.nav-btn[data-v-37151dfc],
.nav-btn svg[data-v-37151dfc] {
    height: 60px;
    width: 60px;
}
.nav-btn-left[data-v-37151dfc] {
    left: 12px;/* ie */
    left: max(12px, env(safe-area-inset-left));
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
}
.nav-btn-right[data-v-37151dfc] {
    right: 12px;/* ie */
    right: max(12px, env(safe-area-inset-right));
}
.lightbox-btn svg[data-v-37151dfc] {
    fill: #666;
    -webkit-transition: fill .15s ease;
    transition: fill .15s ease;
}
.nav-area-left:hover ~ .nav-btns .nav-btn-left svg[data-v-37151dfc],
.nav-area-right:hover ~ .nav-btns .nav-btn-right svg[data-v-37151dfc],
.desktop .lightbox-btn:hover svg[data-v-37151dfc] {
    fill: #ccc;
}
.nav-area-left:active ~ .nav-btns .nav-btn-left svg[data-v-37151dfc],
.nav-area-right:active ~ .nav-btns .nav-btn-right svg[data-v-37151dfc],
.lightbox-btn:active svg[data-v-37151dfc] {
    fill: #fff;
    -webkit-transition: none;
    transition: none;
}
.lightbox-pager[data-v-37151dfc] {
    position: absolute;
    bottom: 100%;
    left: 0;
    white-space: nowrap;
}
.desktop[dir="rtl"] .lightbox-pager[data-v-37151dfc],
.tablet[dir="rtl"] .lightbox-pager[data-v-37151dfc] {
    left: auto;
    left: initial;
    right: 0;
}
.lightbox-pager[data-v-37151dfc],
.small-workspace-lightbox-pager[data-v-37151dfc] {
    color: #bcbcbc;
    font-size: 13px;
    line-height: 24px;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
.small-workspace-lightbox-pager[data-v-37151dfc] {
    padding: 4px 0;
    overflow: hidden;
    max-height: 44px;
    margin-bottom: env(safe-area-inset-bottom);
}
.lightbox[data-v-37151dfc] {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 102500;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
}
.mobile .lightbox[data-v-37151dfc] {
    position: fixed;
}
.lightbox-overlay[data-v-37151dfc] {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, .85);
}
.lightbox-main[data-v-37151dfc] {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    z-index: 3;
    pointer-events: none;
}
.lightbox-content[data-v-37151dfc] {
    background-color: rgba(51, 51, 51, 0.5);
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
            flex-grow: 0;
    position: relative;
    overflow: visible;
    z-index: 2;
    text-align: left;
    pointer-events: all;
}
.lightbox-description-wrap[data-v-37151dfc] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    z-index: 2;
}
.lightbox-description[data-v-37151dfc] {
    padding: 4px;
    color: #bcbcbc;
    font-size: 13px;
    line-height: 16px;
    width: 100%;
    max-width: 420px;
    max-height: 48px;
    overflow: hidden;
}
.overlay-enter-active[data-v-37151dfc],
.overlay-leave-active[data-v-37151dfc] {
    -webkit-transition: background-color .15s ease;
    transition: background-color .15s ease;
}
.overlay-enter[data-v-37151dfc],
.overlay-leave-to[data-v-37151dfc] {
    background-color: transparent;
}
.main-enter-active[data-v-37151dfc] {
    -webkit-transition: opacity .15s ease .2s;
    transition: opacity .15s ease .2s;
}
.main-leave-active[data-v-37151dfc] {
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease;
}
.main-enter[data-v-37151dfc],
.main-leave-to[data-v-37151dfc] {
    opacity: 0;
}
.arrows-enter-active[data-v-37151dfc] {
    -webkit-transition: opacity .35s ease .55s;
    transition: opacity .35s ease .55s;
    /* transition: opacity .35s ease 1s; для случая, если есть сабнейлы или точки */
}
.arrows-leave-active[data-v-37151dfc] {
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease;
}
.arrows-enter[data-v-37151dfc],
.arrows-leave-to[data-v-37151dfc] {
    opacity: 0;
}
.nav-enter-active[data-v-37151dfc] {
    -webkit-transition: opacity .25s ease .5s;
    transition: opacity .25s ease .5s;
}
.nav-leave-active[data-v-37151dfc] {
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease;
}
.nav-enter[data-v-37151dfc],
.nav-leave-to[data-v-37151dfc] {
    opacity: 0;
}
.lightbox-content[data-v-37151dfc] {
    -webkit-transition: width .15s ease, height .15s ease;
    transition: width .15s ease, height .15s ease;
}
.lightbox-element[data-v-37151dfc] {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
        -ms-flex-positive: 0;
            flex-grow: 0;
    -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
            flex-shrink: 0;
    position: absolute;
}
.lightbox-nav[data-v-37151dfc] {
    z-index: 2;
}
.small-workspace .close[data-v-37151dfc] {
    position: fixed;
    top: 0;
    right: 0;
}
div[dir="rtl"] .small-workspace .close[data-v-37151dfc] {
    right: auto;
    right: initial;
    left: 0;
}
.small-workspace .close[data-v-37151dfc],
.small-workspace .close svg[data-v-37151dfc] {
    height: 48px;
    width: 48px;
}
.small-workspace-nav[data-v-37151dfc] {
    height: calc(48px + env(safe-area-inset-bottom));
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    z-index: 4;
}
.small-workspace-nav-btn[data-v-37151dfc],
.small-workspace-nav-btn svg[data-v-37151dfc] {
    height: 48px;
    width: 48px;
}
.small-workspace-nav-btn-left[data-v-37151dfc] {
    padding-left: env(safe-area-inset-left);
    padding-bottom: env(safe-area-inset-bottom);
}
.small-workspace-nav-btn-right[data-v-37151dfc] {
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
}
.chevron-left[data-v-37151dfc] {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
}
.lightbox-fade-enter-active[data-v-37151dfc],
.lightbox-fade-leave-active[data-v-37151dfc] {
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
}
.lightbox-fade-enter[data-v-37151dfc],
.lightbox-fade-leave-to[data-v-37151dfc] {
    opacity: 0;
}

