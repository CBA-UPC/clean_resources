if(typeof _geniee === 'undefined') {
    var _geniee = {};
}

// NOTE: url parameter starts with _ghtipd_, cookie parameters starts with _geniee_

_geniee.storageAccess = function(funcMain) {
    var promise_has = document.hasStorageAccess();
    promise_has.then(
        function (hasAccess) {
            var promise_access = document.requestStorageAccess();
            promise_access.then(
                function () {
                    // use 1st party cookie
                    funcMain();
                },
                function () {
                    funcMain();
                }
            );
        },
        function (reason) {
            funcMain();
        }
    );
};

_geniee.getUrlParams = function(urlQuery) {
    var params = {};
    var queries = urlQuery.substring(1).split('&');
    for (var i = 0; i < queries.length; i++) {
        var kv = queries[i].split('=');
        if (kv.length < 2) continue;
        if (kv[0].indexOf('_ghtipd_') === 0) {
            params[ kv[0] ] = kv[1];
        }
    }
    return params;
};

_geniee.modifyUrlParams = function(urlParams) {
    var targetKey = '_ghtipd_params';
    if (!urlParams.hasOwnProperty(targetKey)) return;

    var val = urlParams[targetKey];
    val = decodeURIComponent(val);

    var queries = val.split('(a)');
    for (var i = 0; i < queries.length; i++) {
        var kv = queries[i].split('(e)');
        if (kv.length < 2) continue;

        urlParams['_ghtipd_' + kv[0]] = kv[1];
    }

    delete urlParams[targetKey];
};

_geniee.getCookieParams = function() {
    var cookieItems = document.cookie.split(';');

    var params = {};
    for (var i = 0; i < cookieItems.length; i++) {
        var elms = cookieItems[i].trim().split('=');
        if (elms[0].indexOf('_geniee_') === 0) {
            params[ elms[0] ] = elms[1];
        }
    }
    return params;
};

_geniee.parseCvc = function(cvcFromCookie) {
    if (!cvcFromCookie) return [];

    var result = [];
    var cvcArray;
    if (cvcFromCookie) cvcArray = cvcFromCookie.split(':');
    for (var i = 0; i < cvcArray.length; i++) {
        if(!cvcArray[i].match(/^[\w\-]+,\d+$/)) continue;
        var vals = cvcArray[i].split(',');
        result.push([vals[0], vals[1]]);
    }
    return result;
};

_geniee.newCvc = function(cvcFromCookie, cvcFromUrl, cvcExpiredAtFromUrl) {
    var cvcList = _geniee.parseCvc(cvcFromCookie);

    if (cvcFromUrl) {
        if(cvcExpiredAtFromUrl) {
            cvcList.push([cvcFromUrl, cvcExpiredAtFromUrl]);
        }
    }

    var newVal = '';
    for (var i = 0; i < cvcList.length; i++) {
        var now = new Date();
        if (cvcList[i][1] <= now.getTime() / 1000) continue;

        if (newVal) newVal += ':';
        newVal += cvcList[i][0] + ',' + cvcList[i][1];
    }

    return newVal;
};

_geniee.updateCookieParams = function(cookieParams, urlParams) {
    for (var urlParamKey in urlParams) {
        if (urlParams.hasOwnProperty(urlParamKey) && urlParams[urlParamKey] != '') {
            if (urlParamKey === '_ghtipd_cvc') continue;
            if (urlParamKey === '_ghtipd_cvc_expired_at') continue;
            var cookieParamKey = urlParamKey.replace('_ghtipd_', '_geniee_');
            cookieParams[cookieParamKey] = urlParams[urlParamKey];
        }
    }

    cookieParams['_geniee_cvc'] = _geniee.newCvc(
        cookieParams['_geniee_cvc'], urlParams['_ghtipd_cvc'], urlParams['_ghtipd_cvc_expired_at']
    );
};

_geniee.setCookie = function(params) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 180);

    var cookieConf = '';
    cookieConf += 'path=/';
    cookieConf += '; expires=' + expireDate.toUTCString();

    for (var key in params) {
        if(params.hasOwnProperty(key) && params[key] != '') {
            document.cookie = key + '=' + params[key] + '; ' + cookieConf;
        }
    }
};

_geniee.main = function(){
    var cookieParams =_geniee.getCookieParams();
    var urlParams =_geniee.getUrlParams(location.search);
    _geniee.modifyUrlParams(urlParams);
    _geniee.updateCookieParams(cookieParams, urlParams);
    _geniee.setCookie(cookieParams);
}

_geniee.lpMain = function() {
    if(typeof document.hasStorageAccess == 'function'){
        _geniee.storageAccess(_geniee.main);
    }else{
        _geniee.main();
    }
};

_geniee.lpMain();
ngth;r++)t.set(e[r].name,e[r].value,Number(e[r]["max-age"]));this.localStorage.updateCache(t)},localStorage:new h.LocalStorage("_adc_ck_cache",172800)};var n=function(e,t,r,a,i){this.site_id=e,this.group=t,this.identifier=r,this.field=a,this.value=i};n.keyDelimiter="--",n.prototype.key=function(){return[this.site_id,this.group,this.identifier,this.field].join(n.keyDelimiter)},h.cacheLayer={set:function(e){if(e=this.rejectBlankCacheLayerDataProperties(e),!this.isValidCacheLayerData(e))throw new Error("cache layer is invalid.");this.requestSetTargetingMenuVariableValueAPI(e),this.updateCacheLayerCacheForSet(e)},get:function(a,e,i){var n,o,t=[],r="getCallback"+String(Math.floor(1e3*Math.random()));if(a&&e&&i){for(var c=0;c<e.length;c++)this.isValidCacheLayerKey(e[c])&&t.push(e[c]);0!==t.length&&(n=this.rejectCachedCacheLayerKeys(a,e),o=this.getCachedCacheLayers(a,e),0<n.length?(this[r]=function(e){this.updateCacheLayerCacheForGet(a,n,e);var t=o||[];if(e)for(var r=0;r<e.length;r++)t.push(this.buildObject(e[r].site_id,e[r].group,e[r].identifier,e[r].field,e[r].value));i(0<t.length?t:null)},this.requestGetTargetingMenuVariableValueAPI(a,n,r)):i(o))}},buildObject:function(e,t,r,a,i){return new n(e,t,r,a,i)},rejectBlankCacheLayerDataProperties:function(e){var t,r={};for(var a in e)if("properties"===a)for(var i in t=e[a])this.isPresent(t[i])&&(r[a]||(r[a]={}),r[a][i]=t[i]);else r[a]=e[a];return r},isValidCacheLayerData:function(e){for(var t=["site_id","group","identifier","properties"],r=0;r<t.length;r++)if(!this.isPresent(e[t[r]]))return!1;return!0},isValidCacheLayerKey:function(e){for(var t=["group","identifier","field"],r=0;r<t.length;r++)if(!this.isPresent(e[t[r]]))return!1;return!0},rejectCachedCacheLayerKeys:function(e,t){var r,a=[],i=this.getCachedCacheLayers(e,t,!0);if(i){for(var n=0;n<t.length;n++){r=!1;for(var o=0;o<i.length;o++)if(this.buildObject(e,t[n].group,t[n].identifier,t[n].field).key()===i[o].key()){r=!0;break}r||a.push(t[n])}return a}return t},requestSetTargetingMenuVariableValueAPI:function(e){var t,r,a,i=[];for(var n in e)if("properties"===n)for(var o in a=e[n])i.push("properties["+o+"]="+encodeURIComponent(a[o]));else i.push(n+"="+encodeURIComponent(e[n]));t=document.getElementsByTagName("script")[0],(r=document.createElement("script")).src="https://t.adclr.jp/tm/svv.js?"+i.join("&"),t.parentNode.insertBefore(r,t)},requestGetTargetingMenuVariableValueAPI:function(e,t,r){var a,i,n=[];n.push("site_id="+e);for(var o=0;o<t.length;o++)n.push("k["+o+"][group]="+encodeURIComponent(t[o].group)),n.push("k["+o+"][identifier]="+encodeURIComponent(t[o].identifier)),n.push("k["+o+"][field]="+encodeURIComponent(t[o].field));n.push("callback=window.ADCST.cacheLayer."+r),a=document.getElementsByTagName("script")[0],(i=document.createElement("script")).src="https://t.adclr.jp/tm/gvv.js?"+n.join("&"),a.parentNode.insertBefore(i,a)},getCachedCacheLayers:function(e,t,r){for(var a,i,n=this.localStorage.loadCache(),o=[],c=0;c<t.length;c++)a=this.buildObject(e,t[c].group,t[c].identifier,t[c].field),(i=n.get(a.key()))&&(i.isNegative&&!r||o.push(this.buildObject(a.site_id,a.group,a.identifier,a.field,i.value)));return 0<o.length?o:null},updateCacheLayerCacheForSet:function(e){var t,r=this.localStorage.loadCache();for(var a in e.properties)t=this.buildObject(e.site_id,e.group,e.identifier,a),r.set(t.key(),e.properties[a]);this.localStorage.updateCache(r)},updateCacheLayerCacheForGet:function(e,t,r){for(var a,i,n,o,c=this.localStorage.loadCache(),s=0;s<t.length;s++){if(n=!1,a=this.buildObject(e,t[s].group,t[s].identifier,t[s].field),r)for(o=0;o<r.length;o++)if(i=this.buildObject(r[o].site_id,r[o].group,r[o].identifier,r[o].field),a.key()===i.key()){n=!0;break}n?c.set(a.key(),r[o].value):c.setNegativeCache(a.key())}this.localStorage.updateCache(c)},isPresent:function(e){return null!=e&&""!==e&&"null"!==e&&"undefined"!==e},localStorage:new h.LocalStorage("_adc_cl_cache",172800)},h.addDataLayer=function(e,t){for(var r in"undefined"==typeof h.DATA_LAYER&&(h.DATA_LAYER={}),"undefined"==typeof h.DATA_LAYER[e]&&(h.DATA_LAYER[e]={}),t)t[r]&&t[r].hasOwnProperty("func")?h.DATA_LAYER[e][r]={func:t[r].func}:h.DATA_LAYER[e][r]={result:t[r]}},h.addCookieVariablesToDataLayer=function(a,i,e){var t=[];for(var r in i)t.push(i[r].cookie);0!==t.length&&(h.cookie.setApiDomains(e),h.cookie.get(t,function(e){var t={};if(e){for(var r in i)e.hasOwnProperty(i[r].cookie)&&(t[r]=e[i[r].cookie]);h.addDataLayer(a,t)}}))},h.addCacheLayersToDataLayer=function(n,o){var e=[];for(var t in o)e.push(o[t]);h.cacheLayer.get(n,e,function(e){var t,r={};if(e){for(var a in o){t=h.cacheLayer.buildObject(n,o[a].group,o[a].identifier,o[a].field);for(var i=0;i<e.length;i++)t.key()===e[i].key()&&(r[a]=e[i].value)}h.addDataLayer(n,r)}})},h.addDataLayer(0,{$srand:{func:"return (Math.ceil(Math.random() * 1e11) + 1e11).toString(16);"},$nrand:{func:"return Math.ceil(Math.random() * 1e10);"},$timestamp:{func:"return new Date().getTime();"},$url:{func:'return document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search;'},$href:{func:"return document.location.href;"},$referrer:{func:"return document.referrer;"},$ua:{func:"return window.navigator.userAgent;"},$cip:{func:'return "1";'}}),h.dataLayer=function(e,t,r){var a;if("undefined"==typeof h.DATA_LAYER&&(h.DATA_LAYER={}),"undefined"==typeof h.DATA_LAYER[t]&&(h.DATA_LAYER[t]={}),"undefined"==typeof h.DATA_LAYER[0]&&(h.DATA_LAYER[0]={}),(a=h.DATA_LAYER[0][e]||h.DATA_LAYER[t][e])&&a.hasOwnProperty("result"))return a.result;if(a){try{var i=new Function("window","document",a.func);a.result=i.call(window,window,document)}catch(n){h.logger?h.logger.warn(n):window.console&&window.console.log&&window.console.log(n),a.result=undefined}return a.result}return r?r[e]:undefined};var l={encode:function(e){return encodeURIComponent(e)},decode:function(e){return decodeURIComponent(e)},presence:function(e){return null==e?"":e}};h.embedDataLayer=function(e,s,u){return e.replace(/{adcDataLayer\.([^}]+)}/g,function(e,t){for(var r=t.split(/(?:\s|%20|\+)*\|(?:\s|%20|\+)*/),a=r[0],i=r.slice(1),n=h.dataLayer(a,s,u),o=0;o<i.length;o++){var c=l[i[o]];c&&(n=c(n))}return n})},h.evalFilter=function(e,t,r){var a;if("undefined"==typeof h.FILTER_CONDITIONS&&(h.FILTER_CONDITIONS={}),(a=h.FILTER_CONDITIONS[e])&&a.hasOwnProperty("result"))return a.result;if(a){try{var i=new Function("window","document",h.embedDataLayer(a.func,t,r));a.result=!!i.call(window,window,document)}catch(n){h.logger?h.logger.warn(n):window.console&&window.console.log&&window.console.log(n),a.result=!1}return a.result}return!1},"undefined"==typeof h.event&&(h.event={}),function(){function c(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function n(e,t){for(var r in t)switch(c(t[r])){case"array":e[r]=e[r].concat(t[r]);break;case"object":for(var a in t[r])e[r][a]=t[r][a];break;default:e[r]=t[r]}return e}function o(e){var t=[];for(var r in e){var a,i=e[r];switch(c(i)){case"array":for(var n=0;n<i.length;n++)a=i[n],t.push(r+"[]="+encodeURIComponent(a));break;case"object":for(var o in i)a=i[o],t.push(r+"["+o+"]="+encodeURIComponent(a));break;default:t.push(r+"="+encodeURIComponent(i))}}return t.join("&")}function s(e){for(var t={},r=0;r<e.datalayer.length;r++){var a=e.datalayer[r];t[a]=h.dataLayer(a,e.site_id,{$pageid:e.page_id})}return{scope:function i(){return Array.prototype.join.call(arguments,"/")}("serverdirect",e.site_id,e.page_id),params:{event:"serverdirect",site_id:e.site_id,page_id:e.page_id,tag_ids:[e.tag_id],data:t}}}function e(){"undefined"==typeof h.EVENTS&&(h.EVENTS=[]);for(var e={},t=(new Date).getTime().toString();0<h.EVENTS.length;){var r=h.EVENTS.shift();"serverdirect"===r.event&&(r=s(r.attributes)),"undefined"==typeof e[r.scope]?e[r.scope]=r.params:e[r.scope]=n(e[r.scope],r.params)}for(var a in e){var i="https://t.adclr.jp/st/event.js?"+o(e[a])+"&"+t;"function"==typeof window.fetch?window.fetch(i,{method:"GET",mode:"no-cors",keepalive:!0}):(new Image).src=i}}h.event.serverdirect=function(e){"undefined"==typeof h.EVENTS&&(h.EVENTS=[]),h.EVENTS.push({event:"serverdirect",attributes:e})},h.event.send=function(){h.util&&h.util.bindEvent&&"complete"!==document.readyState?h.util.bindEvent(window,"load",e):e()}}()}(window.ADCST);
window.ADCST.FILTER_CONDITIONS = {"cwvwfjdg":{"uuid":"cwvwfjdg","func":"var genre = document.getElementsByClassName( \"headerTagList\" )[ 0 ].getElementsByTagName( \"a\" )[ 0 ].textContent;\r\nreturn genre === \"女性漫画\";"},"eqxgjdfw":{"uuid":"eqxgjdfw","func":"var genre = document.getElementsByClassName( \"headerTagList\" )[ 0 ].getElementsByTagName( \"a\" )[ 0 ].textContent;\r\nreturn genre === \"少女漫画\";"},"vqhzixpg":{"uuid":"vqhzixpg","func":"var genre = document.getElementsByClassName( \"headerTagList\" )[ 0 ].getElementsByTagName( \"a\" )[ 0 ].textContent;\r\nreturn genre === \"青年漫画\";"},"uqcswhud":{"uuid":"uqcswhud","func":"return \"{adcDataLayer.member}\" === \"paidMember\";"},"pskskpsq":{"uuid":"pskskpsq","func":"return \"{adcDataLayer.member}\" === \"\";"},"dnpmzkxb":{"uuid":"dnpmzkxb","func":"return \"{adcDataLayer.h_acc_em|presence}\" != \"\";"},"msyprvlr":{"uuid":"msyprvlr","func":"return document.location.host.indexOf( \"mechacomic.jp\" ) !== -1;"},"zsinxxyb":{"uuid":"zsinxxyb","func":"return \"{adcDataLayer.lastClickPublisher}\" === \"facebook\";"},"nwefncbk":{"uuid":"nwefncbk","func":"return \"{adcDataLayer.lastClickPublisher}\" === \"gdn\";"},"duaojksc":{"uuid":"duaojksc","func":"return \"{adcDataLayer.lastClickPublisher}\" === \"ydn\";"},"trdvjuwh":{"uuid":"trdvjuwh","func":"return \"{adcDataLayer.lastClickPublisher}\" === \"lap\";"},"crwfmabb":{"uuid":"crwfmabb","func":"return \"{adcDataLayer.lastClickPublisher}\" === \"twitter\";"},"qpcitiho":{"uuid":"qpcitiho","func":"return \"{adcDataLayer.lastClickPublisher}\" === \"smartnews\";"},"sglxdymy":{"uuid":"sglxdymy","func":"var pageRating = document.querySelector(\"meta[name=rating]\");\r\nreturn pageRating === null || pageRating.content !== \"adult\";"},"dmctfcqz":{"uuid":"dmctfcqz","func":"return \"{adcDataLayer.lastClickPublisher}\" === \"tiktokads\";\r\n"},"dyvsdaza":{"uuid":"dyvsdaza","func":"function isValidLastClick(){\r\n  var now = new Date(),\r\n    lastClickedAt = new Date(\"{adcDataLayer.lastClickTime}\");\r\n\r\n  if(Number.isNaN(lastClickedAt.getTime())){\r\n    return false;\r\n  }\r\n  \r\n  return {adcDataLayer.isLRLastClick} \u0026\u0026 (lastClickedAt \u003e= now.setDate(now.getDate() - 3));\r\n}\r\n\r\nreturn isValidLastClick() \u0026\u0026 ({adcDataLayer.totalPayment} || 0) === 1;"},"zxckwbal":{"uuid":"zxckwbal","func":"function isValidLastClick(){\r\n  var now = new Date(),\r\n    lastClickedAt = new Date(\"{adcDataLayer.lastClickTime}\");\r\n\r\n  if(Number.isNaN(lastClickedAt.getTime())){\r\n    return false;\r\n  }\r\n  \r\n  return {adcDataLayer.isLRLastClick} \u0026\u0026 (lastClickedAt \u003e= now.setDate(now.getDate() - 3));\r\n}\r\n\r\nfunction isNonPaidAfterLastMonthUser(){\r\n  return \"{adcDataLayer.lastClickTime}\" !== \"\"\r\n}\r\n\r\nreturn isValidLastClick() \u0026\u0026 isNonPaidAfterLastMonthUser() \u0026\u0026 ({adcDataLayer.totalPayment} || 0) \u003e 1;"},"jedotcfv":{"uuid":"jedotcfv","func":"return \"{adcDataLayer.dormant}\" === \"dormant\";"}};
window.ADCST.addDataLayer(537, {"colophonChapterId":{"name":"colophonChapterId","func":"var pattern = /chapters\\/(\\d+)\\/colophon/;\r\nif ( pattern.test( location.href ) ) {\r\n  return RegExp.$1;\r\n}\r\nelse {\r\n  return \"\";\r\n}"},"colophonTitleId":{"name":"colophonTitleId","func":"function titleIdFromLink() {\r\n  var btn = document.getElementsByClassName( \"btn_colophon_back\" );\r\n\r\n  if ( btn.length \u003e 0 ) {\r\n    var links = btn[ 0 ].getElementsByTagName( \"a\" );\r\n    var pattern = /\\/books\\/(\\d+)\\??/;\r\n\r\n    for ( var i = 0; i \u003c links.length; i++ ) {\r\n      if ( pattern.test( links[ i ].href ) ) {\r\n        return RegExp.$1;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction titleIdFromQuery() {\r\n  var queries = location.search.slice( 1 ).split( \"\u0026\" );\r\n  var pattern = /^back_path=%2fbooks%2f(\\d+)/i;\r\n\r\n  for ( var i = 0; i \u003c queries.length; i++ ) {\r\n    if ( pattern.test( queries[ i ] ) ) {\r\n      return RegExp.$1;\r\n    }\r\n  }\r\n}\r\n\r\nfunction titleIdFromForm() {\r\n  var field = document.getElementById(\"back_path\");\r\n\r\n  if ( field ) {\r\n    var pattern = /^\\/books\\/lps\\?(.*\u0026)?id=(\\d+)/i;\r\n\r\n    if ( pattern.test( field.value ) ) {\r\n      return RegExp.$2;\r\n    }\r\n  }\r\n}\r\n\r\nreturn titleIdFromLink() || titleIdFromQuery() || titleIdFromForm() || \"\";"},"dormant":{"name":"dormant","func":"var val;\r\n\r\nif ( typeof window.dataLayer !== \"undefined\") {\r\n  for ( i = 0; i \u003c window.dataLayer.length; i++ ) {\r\n    if ( \"art\" in window.dataLayer[ i ] ) {\r\n      val = window.dataLayer[ i ].art;\r\n      break\r\n    }\r\n  }\r\n}\r\n\r\nreturn val === \"1\" ? \"dormant\" : \"\";"},"fbc":{"name":"fbc","func":"function getQueryValue( name ) {\r\n  var value, queries = location.search.substring(1).split(\"\u0026\");\r\n\r\n  for( var i = 0; i \u003c queries.length; i++ ){\r\n    if ( queries[ i ].split(\"=\")[0] === name ){\r\n      value = queries[ i ] .split(\"=\")[1];\r\n      return value;\r\n    }\r\n  }\r\n  return;\r\n}\r\n\r\nvar fbclid = getQueryValue( \"fbclid\" );\r\n\r\nif ( fbclid ) {\r\n  return ( \"fb.1.\" + Date.now() + \".\" + fbclid );\r\n} else {\r\n  return \"\";\r\n}"},"fbclid":{"name":"fbclid","func":"function getQueryValue( name ) {\r\n  var value, queries = location.search.substring(1).split(\"\u0026\");\r\n\r\n  for( var i = 0; i \u003c queries.length; i++ ){\r\n    if ( queries[ i ].split(\"=\")[0] === name ){\r\n      value = queries[ i ] .split(\"=\")[1];\r\n      return value;\r\n    }\r\n  }\r\n  return;\r\n}\r\n\r\nreturn getQueryValue( \"fbclid\" ) || \"\";"},"fbp":{"name":"fbp","func":"var cookie_key = \"_fbp\";\r\nvar cookies = document.cookie.split( /;\\s{0,}/ );\r\n\r\nfor ( var i = 0; i \u003c cookies.length; i++ ) {\r\n  if ( cookies[ i ].indexOf( cookie_key ) === 0 ) {\r\n     return cookies[ i ].split( \"=\" )[ 1 ];\r\n  }\r\n}"},"isLRLastClick":{"name":"isLRLastClick","func":"var val;\r\n\r\nif ( typeof window.dataLayer !== \"undefined\") {\r\n  for ( i = 0; i \u003c window.dataLayer.length; i++ ) {\r\n    if ( \"aai\" in window.dataLayer[ i ] ) {\r\n      val = window.dataLayer[ i ].aai;\r\n      break;\r\n    }\r\n  }\r\n}\r\n\r\nreturn val === \"3\";"},"lastClickPublisher":{"name":"lastClickPublisher","func":"var gtmSrcAd;\r\n\r\nif ( typeof window.dataLayer !== \"undefined\") {\r\n  for ( i = 0; i \u003c window.dataLayer.length; i++ ) {\r\n    if ( \"asr\" in window.dataLayer[ i ] ) {\r\n      gtmSrcAd = window.dataLayer[ i ].asr;\r\n      break\r\n    }\r\n  }\r\n}\r\n\r\nif ( gtmSrcAd ) {\r\n  var parts = gtmSrcAd.split( \"_\" )\r\n  return parts[ parts.length -1 ];\r\n} else {\r\n  return \"\";\r\n}"},"lastClickTime":{"name":"lastClickTime","func":"var val;\r\n\r\nif ( typeof window.dataLayer !== \"undefined\") {\r\n  for ( i = 0; i \u003c window.dataLayer.length; i++ ) {\r\n    if ( \"alt\" in window.dataLayer[ i ] ) {\r\n      val = window.dataLayer[ i ].alt;\r\n      break;\r\n    }\r\n  }\r\n}\r\n\r\nreturn val || \"\";"},"member":{"name":"member","func":"var mbr, mdm, lpm;\r\n\r\nfor ( i = 0; i \u003c window.dataLayer.length; i++ ) {\r\n  if ( \"mdm\" in window.dataLayer[ i ] || \"mbr\" in window.dataLayer[ i ] || \"lpm\" in window.dataLayer[ i ] ) {\r\n    mdm = window.dataLayer[ i ].mdm || \"\";\r\n    mbr = window.dataLayer[ i ].mbr;\r\n    lpm = window.dataLayer[ i ].lpm || \"\";\r\n    break;\r\n  }\r\n}\r\n\r\nif ( mbr === \"1\" || mdm.length \u003e 0 || lpm.length \u003e 0 ) {\r\n  return \"paidMember\";\r\n} else {\r\n  return \"\";\r\n}"},"totalPayment":{"name":"totalPayment","func":"var val;\r\n\r\nif ( typeof window.dataLayer !== \"undefined\") {\r\n  for ( i = 0; i \u003c window.dataLayer.length; i++ ) {\r\n    if ( \"tpmt\" in window.dataLayer[ i ] ) {\r\n      val = window.dataLayer[ i ].tpmt;\r\n      break;\r\n    }\r\n  }\r\n}\r\n\r\nif ( typeof val !== \"undefined\" ) {\r\n  return parseInt(val);\r\n}"},"twclid":{"name":"twclid","func":"function getQueryValue( name ) {\r\n  var value, queries = location.search.substring(1).split(\"\u0026\");\r\n\r\n  for( var i = 0; i \u003c queries.length; i++ ){\r\n    if ( queries[ i ].split(\"=\")[0] === name ){\r\n      value = queries[ i ] .split(\"=\")[1];\r\n      return value;\r\n    }\r\n  }\r\n  return;\r\n}\r\n\r\nreturn getQueryValue( \"twclid\" ) || \"\";\r\n"},"userId":{"name":"userId","func":"var val;\r\n\r\nif ( typeof window.dataLayer !== \"undefined\") {\r\n  for ( i = 0; i \u003c window.dataLayer.length; i++ ) {\r\n    if ( \"uid\" in window.dataLayer[ i ] ) {\r\n      val = window.dataLayer[ i ].uid;\r\n      break\r\n    }\r\n  }\r\n}\r\n\r\nreturn val || \"\";"}});
window.ADCST.addCacheLayersToDataLayer(
  537,
  JSON.parse(window.ADCST.embedDataLayer(JSON.stringify({"lastClickFbc":{"name":"lastClickFbc","group":"adcic","identifier":"{adcDataLayer.adcic}","field":"lastClickFbc"},"lastClickTwclid":{"name":"lastClickTwclid","group":"adcic","identifier":"{adcDataLayer.adcic}","field":"lastClickTwclid"}}), 537, {$pageid: 1171}))
);
window.ADCST.onload = function(ADCST) {
ADCST.init("t.adclr.jp", {device: "pc", os: "else", carrier: "else"});
ADCST.renderer.append("\x3cscript id='ADCST_5797' type='text/javascript' async src='https://www.googletagmanager.com/gtag/js?id=AW-968640496'>\x3c/script>\x3cscript type='text/javascript'>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\"js\", new Date());gtag(\"config\", \"AW-968640496\", { \"send_page_view\": false });\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_5797", condition: function(){ return ADCST.evalFilter("msyprvlr", 537, {$pageid: 1171}); }, embed: true});
ADCST.renderer.append("\x3cscript id='ADCST_6116' type='text/javascript'>gtag(\"config\", \"AW-848664767\", { \"send_page_view\": false });\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_6116", condition: function(){ return ADCST.evalFilter("msyprvlr", 537, {$pageid: 1171}); }, embed: true});
ADCST.renderer.append("\x3cscript id='ADCST_5803' type='text/javascript'>gtag(\"event\", \"page_view\", (typeof Object.assign === \"function\" ? Object.assign({\"send_to\": \"AW-968640496\",\"User_status\":\"{adcDataLayer.member}\",\"MailUser\":\"{adcDataLayer.mailUser}\"}, window.google_tag_params) : {\"send_to\": \"AW-968640496\",\"User_status\":\"{adcDataLayer.member}\",\"MailUser\":\"{adcDataLayer.mailUser}\"}));\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_5803", condition: function(){ return ADCST.evalFilter("msyprvlr", 537, {$pageid: 1171}); }, embed: true});
ADCST.renderer.append("\x3cscript id='ADCST_6019' type='text/javascript' async src='https://s.yimg.jp/images/listing/tool/cv/ytag.js'>\x3c/script>\x3cscript type='text/javascript'>window.yjDataLayer = window.yjDataLayer || [];function ytag() { yjDataLayer.push(arguments); }ytag({\"type\":\"ycl_cookie\", \"config\":{  \"ycl_use_non_cookie_storage\":true,  \"ycl_cookie_set_url\" : \"https://mechacomic.jp/ydn/bc\",   \"ycl_cookie_copy_url\" : \"https://mechacomic.jp/ydn/rc\"}});\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_6019"});
ADCST.renderer.append("\x3cscript id='ADCST_4914' type='text/javascript'>ytag({  \"type\": \"yjad_retargeting\",  \"config\": {    \"yahoo_retargeting_id\": \"9LU9KDWAAN\",    \"yahoo_retargeting_label\": \"\"  }});\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_4914", embed: true});
ADCST.renderer.append("\x3cscript id='ADCST_5691' type='text/javascript'>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('set', 'autoConfig', false, \"186595851897187\");fbq('init', \"186595851897187\", { country: \"jp\", em: \"{adcDataLayer.h_acc_em}\",external_id: \"{adcDataLayer.adcic | presence}\"});fbq('trackSingle', \"186595851897187\", \"PageView\", {}, {eventID: \"{adcDataLayer.$timestamp}{adcDataLayer.$srand}\" });fbq('trackSingle', \"186595851897187\", \"InitiateCheckout\", {\"User_status\": \"{adcDataLayer.member}\", \"MailUser\": \"{adcDataLayer.mailUser}\"}, {eventID: \"{adcDataLayer.$timestamp}{adcDataLayer.$srand}\" });\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_5691", embed: true});
ADCST.renderer.append("\x3cscript id='ADCST_5847' type='text/javascript'>(function(g,d,o){g._ltq=g._ltq||[];g._lt=g._lt||function(){g._ltq.push(arguments)};var h=location.protocol==='https:'?'https://d.line-scdn.net':'http://d.line-cdn.net';var s=d.createElement('script');s.async=1;s.src=o||h+'/n/line_tag/public/release/v1/lt.js';var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);})(window, document);_lt('init', {customerType: 'lap', tagId: '235d1593-9e73-4aef-a8f1-59ed3d8eb3ad'});_lt('send', 'pv', ['235d1593-9e73-4aef-a8f1-59ed3d8eb3ad']);\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_5847", embed: true});
ADCST.renderer.append("\x3cscript id='ADCST_5904' type='text/javascript'>_lt('send', 'cv', {type: 'member'}, ['235d1593-9e73-4aef-a8f1-59ed3d8eb3ad']);\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_5904", condition: function(){ return ADCST.evalFilter("uqcswhud", 537, {$pageid: 1171}); }, embed: true});
ADCST.renderer.append("\x3cscript id='ADCST_5909' type='text/javascript'>ytag({  \"type\": \"yjad_retargeting\",  \"config\": {    \"yahoo_retargeting_id\": \"9LU9KDWAAN\",    \"yahoo_retargeting_label\": \"member\"  }});\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_5909", condition: function(){ return ADCST.evalFilter("uqcswhud", 537, {$pageid: 1171}); }, embed: true});
ADCST.renderer.append("\x3cscript id='ADCST_6037' type='text/javascript'>!function (w, d, t) {  w.TiktokAnalyticsObject=t;  var ttq=w[t]=w[t]||[];  ttq.methods=[\"page\",\"track\",\"identify\",\"instances\",\"debug\",\"on\",\"off\",\"once\",\"ready\",\"alias\",\"group\",\"enableCookie\",\"disableCookie\"],  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);  ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},  ttq.load=function(e,n){var i=\"https://analytics.tiktok.com/i18n/pixel/events.js\";  ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};  var o=document.createElement(\"script\");  o.type=\"text/javascript\",o.async=!0,o.src=i+\"?sdkid=\"+e+\"&lib=\"+t;  var a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(o,a)};  ttq.load('C827BVVQNQSIS07TOVRG');  ttq.page();}(window, document, 'ttq');ttq.enableCookie();\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_6037", embed: true});
if (true) { ADCST.measurement.start("ADCST_6064", {site_id: 537, page_id: 1171}); ADCST.event.serverdirect({"site_id":"537","page_id":1171,"tag_id":6064,"datalayer":["$timestamp","$srand","$url","h_acc_em","adcic","$cip","$ua","lastClickFbc","fbclid","fbp","member","mailUser"]}); ADCST.measurement.finish("ADCST_6064"); }
if (true) { ADCST.measurement.start("ADCST_6031", {site_id: 537, page_id: 1171}); ADCST.event.serverdirect({"site_id":"537","page_id":1171,"tag_id":6031,"datalayer":["$timestamp","$srand","$url","h_acc_em","adcic","$cip","$ua","lastClickFbc","fbclid","fbp","member","mailUser","colophonTitleId"]}); ADCST.measurement.finish("ADCST_6031"); }
ADCST.renderer.append("\x3cscript id='ADCST_6121' type='text/javascript'>!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('config', 'nzc4h');\x3c/script>", {site_id: 537, page_id: 1171, uuid: "ADCST_6121", embed: true});
ADCST.event.send();
};
!function(){var e="//t.adclr.jp/st/asyncable.min.js?1e577ee8a";if(window.ADCST&&window.ADCST.loaded)window.ADCST.onload(window.ADCST);else{var d=document.createElement("script");d.src=e,document.body.appendChild(d)}}();
new Image().src = '//t.adclr.jp/st/page.gif?site_id=537&page_id=1171&device=pc&os=else&carrier=else&loc=https%3A%2F%2Fmechacomic.jp%2Fregister&1705961597&ref=' + encodeURIComponent(document.referrer);
})();
