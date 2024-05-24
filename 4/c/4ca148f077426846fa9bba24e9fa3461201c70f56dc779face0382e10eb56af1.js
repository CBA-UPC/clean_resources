/*! Copyright © 2015, 2020, Oracle and/or its affiliates. All rights reserved. */
/*! mmapi v1.18 */
/*v1.18.0.1*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(d){function q(a,b){return typeof a===b}function M(a){return q(a,"function")}function x(a){return q(a,"undefined")}function Y(a){return x(a)||null==a}function N(a){return!x(a)&&null!==a}function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function H(a,b){return B(a,b)&&q(a[b],"string")}function O(a,b,c){try{M(a)&&a.apply(b,c)}catch(u){V&&V.log(u)}}function h(a,b){for(var c in a)B(a,c)&&b(a[c],c)}function P(a){var b=!1;h(a,function(){b=!0});return!b}function I(a){var b=new Date;
b.setTime(b.getTime()+864E5*a);return b}function ca(a,b,c){c=c||0;for(var u=a.length;c<u;c++)if(a[c]===b||M(b)&&b(a[c]))return c;return-1}function Q(a,b){var c={};h(a,function(a,b){c[b]=a});h(b,function(a,b){c[b]=a});return c}function J(a){a=JSON.parse('{"v":'+a+"}");return"v"in a?a.v:a}function Z(a){function b(){for(var a=document.cookie.split(/;\s+/g),c={},b=0;b<a.length;b++){var f=a[b].split(/[;=]/);1<f.length&&(c[f[0]]=f[1])}return c}var c=this,u=a.domain,d=a.secure,e=encodeURIComponent,g=decodeURIComponent;
c.set=function(a,b,g,f){f||(b=e(b));document.cookie=e(a)+"="+b+";domain="+u+";path=/"+(g?";expires="+I(g).toGMTString():"")+(d?";secure;sameSite=none":"");return c};c.remove=function(a){c.set(a,"",-1);return c};c.removeAll=function(a){if(a){var e=b();h(e,function(b,f){(new RegExp("^"+a)).test(f)&&c.remove(g(f))})}};c.get=function(a,c){a=new RegExp("(?:^|; )"+e(a).replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")+"=([^;]+)");a=document.cookie.match(a);if(a){var b=a[1];b=c?b:g(b)}return b};c.getAll=function(a,
c){if(a){var e=b();var f={};h(e,function(b,e){(new RegExp("^"+a)).test(e)&&(f[g(e)]=c?b:g(b))})}return f}}function C(a,b,c){c=R[c]||c||"def";var d=b+"."+c+".",n=d.replace(/\./g,"\\.");this.get=function(c){if(!c){c=a.getAll(n);var b=d.length,e={};h(c,function(a,c){e[c.substring(b)]=J(a)});return e}return(c=a.get(d+c))?J(c):c};this.set=function(c,b,h){null===b||x(b)?a.remove(d+c):(b=JSON.stringify({v:b}),b=b.substring(5,b.length-1),a.set(d+c,b,x(h)?0:h));return this};this.removeAll=function(){a.removeAll(n);
return this}}function F(a,b,c){function d(c){for(var b={},f="",y=0,d=a.get(c+y,!0);d;)f+=d,y++,d=a.get(c+y,!0);f=decodeURIComponent(f);try{b=JSON.parse(f)}catch(ia){}return b}function n(){f=d(K);v=d(S);da();f[c]=f[c]||{};v[c]=v[c]||{}}function e(c,b,f){b=JSON.stringify(b);var d="{}"===b,y=0,e=0;for(b=encodeURIComponent(b);a.get(c+y,!0);)a.remove(c+y),y++;if(!d)for(d=b.substr(3E3*e,3E3);d;)a.set(c+e,d,x(f)?365:f,!0),e++,d=b.substr(3E3*e,3E3)}function g(){e(K,f);e(S,v,0)}function r(a){var c={};h(a,
function(a,b){c[b]=w(a).v});return c}function da(){var a=(new Date).getTime(),b=f[c];h(b,function(c,f){w(c).e<=a&&delete b[f]});g()}function w(a){var c=a.indexOf("|");return{v:JSON.parse(a.substring(c+1,a.length)),e:a.substring(0,c)}}var f,v;b+=".";var K=b+"store.p.",S=b+"store.s.";c=ea[c]||c||"def";this.get=function(a){n();var b=Q(f[c],v[c]);return a?b[a]?w(b[a]).v:b[a]:r(b)};this.set=function(a,b,d){n();var e=f[c],h=v[c];delete e[a];delete h[a];null===b||x(b)||(d?(b=I(d).getTime()+"|"+JSON.stringify(b),
e[a]=b):h[a]="0|"+JSON.stringify(b));g();return this};this.removeAll=function(){n();f[c]={};v[c]={};g();return this};this.exportData=function(){n();var a={};h(f,function(b,c){a[c]=b});h(v,function(b,c){a[c]=Q(a[c],b)});h(a,function(b,c){h(b,function(b,f){a[c][f]=w(b)})});return a};n()}function L(a,b){function c(a){h([g,r],function(b){for(var c=0;c<b.length;c++){var d=b.key(c);0===d.indexOf(n)&&a(b,d)}})}function d(a,b){var c=(new Date).getTime();b=JSON.parse(b);var d;b&&b.e&&b.e<c?localStorage.removeItem(a):
d=b&&b.v;return d}b=R[b]||b||"def";var n=a+"."+b+".",e=this,g=sessionStorage,r=localStorage;e.get=function(a){if(a){a=n+a;var b=g.getItem(a)||r.getItem(a);a=d(a,b)}else{var f={},e=n.length;c(function(a,b){f[b.substring(e)]=d(b,a.getItem(b))});a=f}return a};e.set=function(a,b,c){a=n+a;if(N(b)){var d=c?r:g;b=JSON.stringify({v:b,e:c?I(c).getTime():void 0});d.setItem(a,b)}else g.removeItem(a),r.removeItem(a);return e};e.removeAll=function(){c(function(a,b){a.removeItem(b)});return e}}function fa(){var a=
this,b=arguments;a.get=function(a){var c;if(a)for(var d=0;d<b.length;d++){var e=b[d].get(a);N(e)&&(c=e)}else{var g=b[0].get();for(a=1;a<b.length;a++)h(b[a].get(),function(a,b){g[b]=x(g[b])?a:g[b]});c=g}return c};a.set=function(c,d,n){h(b,function(a){a.set(c,d,n)});return a};a.removeAll=function(){h(b,function(a){a.removeAll()});return a}}function ga(a){function b(){var a=function(a){var b=new r(f,g,a);w&&(b=new fa(b,new L(g,a)));return b};a.isSecure=q;a.testStorage=c;return a}function c(){var a=(""+
Math.random()).substring(0,5);f.set(g+".tst",a,10);a=f.get(g+".tst",!0)===a?1:0;f.remove(g+".tst");return a}function u(a){var b=(new F(f,g,void 0)).exportData(),c=!1;h(b,function(b,d){var f=a(d);h(b,function(a,b){c=!0;var d=a.e;d=(d=parseInt(d))?(d-(new Date).getTime())/864E5:d;f.set(b,a.v,d)})});return function(){c&&(f.removeAll(g+"\\.store\\.p\\."),f.removeAll(g+"\\.store\\.s\\."))}}function n(a){var b=f.getAll(g+"\\.",!0),c={};h(b,function(b,d){var e=d.split(/\./);if(2<e.length&&"store"!==e[1]){b=
c[e[1]];b||(b=new C(f,g,e[1]),c[e[1]]=b);var h=a(e[1]);d=d.substring((e[0]+"."+e[1]+".").length);b=b.get(d);h.set(d,b,30)}});return function(){h(c,function(a){a.removeAll()})}}var e=a.storageType,g=a.cprefix;if(0>ca("cookie cookie-secure cookie-key-value cookie-key-value-secure cookie-key-value-with-fallback cookie-key-value-secure-with-fallback".split(" "),e))throw"Invalid storage type: "+e;var r=0===e.indexOf("cookie-key-value")?C:F,q=-1!==e.indexOf("-secure"),w=-1!==e.indexOf("-with-fallback");
a=a.cookie_domain||d.location.hostname.replace(/^www\./i,"");var f=new Z({domain:a,secure:q});(function(){var a=g+".|storage";r===C?P(f.getAll(g+"\\.store\\.",!0))?w&&localStorage.getItem(a)!==e&&(n(function(a){return new L(g,a)}),localStorage.setItem(a,e)):u(b())():r!==F||P(f.getAll(g+"\\.",!0))||n(b())()})();this.createBuilder=b}if(!d.mmsystem){var V=d.console||{log:function(){},error:function(){}},R={"mmparams.p":"p","mmparams.d":"d",mmengine:"e"},ea={p:"mmparams.p",d:"mmparams.d",e:"mmengine"},
ha=new function(a){function b(a,b){if(A[a])for(var c=A[a].length-1;0<=c;c--)A[a][c].call({},b)}function c(a){D=q(a,"boolean")?a:!1}function u(a,b,c){c=c||{};c.type="text/javascript";c.id=a;c.src=b;if(D){a=document.getElementsByTagName("head")[0];var k=document.createElement("script");h(c,function(a,b){k.setAttribute(b,a)});a.insertBefore(k,a.lastChild)}else{var m="";h(c,function(a,b){m+=" "+b+'="'+a+'"'});document.write("<script"+m+">\x3c/script>")}}function n(a){if(!q(a,"object"))return a;if(a.constructor===
Array)return a.join(";");var b=[];h(a,function(a,c){a.constructor===Array?h(a,function(a){b.push(c+"="+a)}):b.push(c+"="+encodeURIComponent(a))});return b.join(";")}function e(a){a=a?K(a):{};var b={};q(a["mm-dlp-api"],"string")&&(b.fv={ref:a["original-ref"].substring(0,256),url:a["original-url"].substring(0,1024)},b.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(b.fv.url)[0]);h(a,function(a,c){"mmcore."===c.substring(0,7)&&(b[c.substring(7)]=a)});return b}function g(){var b="mmRequestCallbacks["+E+"]",c=
{},e=d.screen;c.fv={dmn:a.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,1024),scrw:e.width,scrh:e.height,clrd:e.colorDepth,cok:l.baseStorage.testStorage()};c.lver="1.18";c.jsncl=b;c.ri=E;c.lto=-(new Date).getTimezoneOffset();c.jrt="inline"===a.executionMode?"f":"s";return c}function r(b,c){var k=b&&b.Packages||[],m=k.length;if(0<m){d.mmInitCallback=function(a){a(l,b,{skipResponseProcessing:!0,skipPersistentData:!0,useLoaderStorage:!0,debug:R});m--;0===m&&(c(),delete d.mmInitCallback)};
for(var e=0;e<k.length;e++)u("mmpack."+e,0===k[e].indexOf("//")?k[e]:a.baseContentUrl+k[e])}else c()}function I(a){(a=document.getElementById(a))&&a.parentNode?a.parentNode.removeChild(a):a&&a.removeAttribute("src")}function w(a,c,e){a=(J[a-1]=c)&&c.PersistData||[];var k=c&&c.SystemData&&c.SystemData[0]&&c.SystemData[0].ResponseId||0;if(k>=L){for(var m=a.length-1;0<=m;m--)l.setParam(a[m].Name,a[m].Value,p.persistent,a[m].Expiration);L=k}if(H(c,"mmcoreResponse")&&B(d,"mmcore"))try{Function(c.mmcoreResponse).call(d)}catch(aa){V.log(aa)}b("response",
c);e(!!c);b("responseExecuted",c);D=!0}function f(a,b){var c="mmrequest."+E;(function(a,b){d.mmRequestCallbacks[a]=function(k){I(c);var m=!1,f=function(){m=!0;1===a?r(k,function(){w(a,k,b);var c=e(document.location.search).origin,m=d.parent;c&&m&&m.postMessage&&m.postMessage(JSON.stringify({hash:"unhide",command:"unhide",data:{}}),c)}):w(a,k,b)};if(0!==T.length){for(var G=0;G<T.length;G++)T[G](k,f);m||(D=!0)}else f();delete d.mmRequestCallbacks[a]}})(E,b);u(c,a,{onerror:"window['mmRequestCallbacks']["+
E+"](false);"});E++}function v(){var a={};return{get:function(b){return b?a[b]:a},set:function(b,c,k){0>parseInt(k)?delete a[b]:a[b]=c},removeAll:function(){a={}}}}function K(a){a=a.split(/[?&]/);for(var b={},c,k,d=0;d<a.length;d++)if(a[d]){c=a[d].split("=");try{k=decodeURIComponent(c[1]||"")}catch(aa){k=c[1]||""}b[c[0]]=k}return b}function S(a){function b(a,b,d){var e;if(e=k[a]){c[a]=b;e=e.split(/;/);for(var m=0;m<e.length;m++){var f=e[m].split("=");(a=f[0].replace(/^\s+|\s+$/gm,""))&&d(b,a,f[1]||
"")}}}var c={},k=K(a);U||(c.pageid=k.pageid);c.jsver=k.jsver;b("uv",{},function(a,b,c){B(a,b)||(a[b]=[]);a[b].push(c)});b("uat",{},function(a,b,c){a[b]=decodeURIComponent(c)});b("ids",{},function(a,b,c){c&&(a[b]=decodeURIComponent(c))});b("rul",[],function(a,b){a.push(b)});return c}function y(){if(B(d,"mmcore")){var b=d.mmcore;b.server=a.srv;l.CGRequestInternal=l.CGRequest;l.CGRequest=function(a,c){U=!0;W=a;X=c;b.CGRequest()};var c=b._Tag;b._Tag=function(d){if(-1===d.indexOf(a.srv))c.apply(b,arguments);
else{b._Clear.call(b);var k=l.mergeParams(X,S(d));ba=D;U||(D=b._async);l.CGRequestInternal(W,k);D=ba;X=W=null;U=!1}};var e=b.SetCookie;b.SetCookie=function(a){/^(mmid|pd|srv)$/.test(a)||e.apply(b,arguments)}}}function C(a,b,c){var d="";0<b.length&&"."!==b.substring(b.length-1)&&(d=".");b=b+d+c;d=a.get(b);q(d,"string")&&d&&(l.setParam(c,d,p.persistent,365),a.remove(b))}function F(a){var b=B(d,"mmcore")&&d.mmcore.cookie_domain?d.mmcore.cookie_domain:H(a,"mmcoreCookieDomain")?a.mmcoreCookieDomain:a.cookie_domain;
a=B(d,"mmcore")&&d.mmcore.cprefix?d.mmcore.cprefix:H(a,"mmcoreCprefix")?a.mmcoreCprefix:a.cprefix+".";b=new Z({domain:b||d.location.hostname.replace(/^www\./i,"")});C(b,a,"pd");C(b,a,"srv");C(b,"","mmid")}function N(a,b){var d=l.getParam,e=function(a,b,c,d){l.setParam(a,b,x(c)?1:c,d)};O(a.beforeInit,{},[d,e,{getParam:d,setParam:e,validateResponses:l.validateResponses,disable:function(){c(!0);z[p.page].set("disabled",1)},enable:function(){1===z[p.page].get("disabled")&&(z[p.page].set("disabled",0),
b())},setAsync:c}]);l.on("request",function(){O(a.beforeRequest,{},[d,e])});l.on("response",function(b){O(a.afterResponse,{},[d,e,b])});l.on("responseExecuted",function(b){O(a.afterResponseExecution,{},[d,e,b])})}function P(a){d.mmcoreInitCallback=function(b){F(a);y();l.CGRequest(function(){M(b)&&b.apply(d.mmcore,arguments)},{});delete d.mmcoreInitCallback};"local"!==a.mmcoreUrl&&u("mmcoreIntegration",a.mmcoreUrl)}function Q(a,b){H(b,"un")&&(a=0===a.indexOf("http:")?a.substring(5):a,a=0===a.indexOf("//")?
"https:"+a:a);return a}this.version="1.18";var l=this,J=[],E=1,D=!1,A={},R={},t=[],z=[],p={persistent:0,deferredRequest:1,request:2,page:3},T=[],L=0,W,X,ba,U=!1;this.baseStorage=(new ga(a)).createBuilder();this.baseStorage.storeStrategy=p;this.mergeParams=function(a,b){a=Y(a)?{}:a;b=Y(b)?{}:b;if(!q(b,"object"))return b;var c={};q(a,"object")&&h(a,function(a,b){c[b]=a});h(b,function(a,d){c[d]=c[d]?c[d].constructor===Array&&b[d].constructor===Array?c[d].concat(a):l.mergeParams(c[d],a):a});return c};
this.CGRequest=function(c,m){c=c||function(){};m=m||{};d.mmRequestCallbacks=d.mmRequestCallbacks||{};b("request");var k=l.mergeParams(g(),l.mergeParams(l.mergeParams(t[p.persistent].get(),l.mergeParams(t[p.deferredRequest].get(),l.mergeParams(t[p.page].get(),t[p.request].get()))),e(location.search))),G=[];m=l.mergeParams(k,m);h(m,function(a,b){G.push(encodeURIComponent(b)+"="+encodeURIComponent(n(a)))});t[p.deferredRequest].removeAll();t[p.request].removeAll();m=Q(a.srv,m);f(m+G.join("&"),c);return this};
this.getResponses=function(){return J};this.setParam=function(a,b,c,d){t[c].set(a,b,x(d)?365:d);return this};this.getParam=function(a,b){return t[b].get(a)};this.removeParam=function(a,b){t[b].set(a,"",-1);return this};this.on=function(a,b){A[a]&&A[a].push(b);return l};this.disable=function(){z[p.persistent].set("disabled",1,0);return this};this.enable=function(){z[p.persistent].set("disabled",null,-1);return this};this.validateResponses=function(a){M(a)&&T.push(a)};(function(a){function b(){if(1!==
z[p.persistent].get("disabled")&&1!==z[p.page].get("disabled")||1<E)H(a,"mmcoreUrl")&&a.mmcoreUrl?P(a):(F(a),l.CGRequest(void 0,{}))}function f(){N(a,b);b()}h(a,function(a,b){l[b]=a});var g=e(document.location.search);if("1"!==g.disabled){l.calcCookieDomain=l.cookie_domain||d.location.hostname.replace(/^www\./i,"");c(a.async);z[p.persistent]=l.baseStorage("ls");z[p.page]=v();t[p.persistent]=l.baseStorage("p");t[p.deferredRequest]=l.baseStorage("d");t[p.request]=v();t[p.page]=v();A.request=[];A.response=
[];A.responseExecuted=[];var k=e(document.referrer).pruh,g=g.pruh,n=d.mmpruh,q=l.getParam("pruh",0),r=(k?k+",":"")+(g?g+",":"")+(n?n+",":"")+(q?q:"");r?(d.mmInitCallback=function(a){a(l,r,f)},u("MM.PRUH",a.baseContentUrl+"utils/pruh.js")):f()}})(a);return this}({
    storageType:'cookie-key-value-secure',
    cprefix:'mmapi',
    domain:'kaspersky.com',
    baseContentUrl:'//service.maxymiser.net/platform/eu/api/',
    cookie_domain:location.hostname.match(/^[\d.]+$|/)[0]||('.'+(location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/)||[location.hostname])[0]),
    srv:'//service.maxymiser.net/cg/v5/?',
    async:false,
    mmcoreUrl:'',
    mmcoreCookieDomain:'',
    mmcoreCprefix:'',
    beforeInit: function (getParam, setParam, loader) {
        if (/Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|YandexMobileBot/
            .test(window.navigator.userAgent)) {
            loader.disable();
            return;
        }

        var angularPages = [
            //'latam.kaspersky.com/products-services/acqlp-3up-nb',
            'latam.kaspersky.com/acq40',
            //'usa.kaspersky.com/acq/products-services/lp-3up-v3-0',
            'usa.kaspersky.com/acq/kfa-kiskts',
            'latam.kaspersky.com/acq/sm/kts',
            'www.kaspersky.com.br/products-services/acqlp-3up',
            'usa.kaspersky.com/acq/kfa-kis',
            'www.kaspersky.co.uk/products-services/acqlp-3up-nb/kts',
            'www.kaspersky.com.br/products-services/acqlp-1up-kav',
            'www.kaspersky.com.br/products-services/acqlp-3up-nb',
            'www.kaspersky.com.br/products-services/acqlp-1up-kts',
        ];
        var angularPagesReg = new RegExp(angularPages.join('|'),'gi');

        if (angularPagesReg.test(location.href)) {
            loader.validateResponses(function (response, runResponse) {
                function waitForResponse() {
                    // page readiness condition
                    if (window.angular) {
                        runResponse();
                    } else {
                        setTimeout(waitForResponse, 0);
                    }
                }
                waitForResponse();
            });
        }

        /* Cross-domain data restore from window.name */
        var restoreVisitorIdFromWindow = function () {
                var key, crossDomainData;
                if (window.JSON && window.JSON.stringify && window.JSON.parse) {
                    window.name = window.name.replace(/\|\*mm(.*)mm\*\|/,
                        function (matchedString, capturedData) {
                            crossDomainData = JSON.parse(capturedData);
                            for (key in crossDomainData) {
                                if (crossDomainData.hasOwnProperty(key)) {
                                    setParam(key, crossDomainData[key], 0);
                                }
                            }
                            return '';
                        });
                }
            },
            restoreCustomCookies = function () {
            var escapeSequence = 'mmCookies',
                deserialize = function (s, f) {
                    s.replace(/<(.+?)>/g, function () {
                        var a = unescape(arguments[1]).split(","), i = 0, l = a.length;
                        for (; i < l; i += 1) a[i] = unescape(a[i]);
                        f.call(a);
                    });
                },
                calcExpiry = function (days) {
                    var now = new Date(),
                        expiry;

                    if (days) {
                        expiry = now.setDate(now.getDate() + days);

                        return new Date(expiry);
                    }
                },
                processingRegExp = new RegExp('\\|\\*' + escapeSequence + '(.*)' + escapeSequence + '\\*\\|'),
                cookieDomain = (location.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/) || [location.hostname])[0];

            window.name = window.name.replace(processingRegExp, function () {
                var dataToRestoreFrom = arguments[1] || '';

                deserialize(dataToRestoreFrom, function () {
                    var name = this[0],
                        value = this[1],
                        expireDays = this[2],
                        expiry = expireDays == 0 ? '' : calcExpiry(expireDays);

                    if (name && typeof value !== "undefined") {
                        document.cookie = name + '=' + value + '; path=/; domain=' + cookieDomain + (expiry ? '; expires=' + expiry : ';');
                    }
                });

                return '';
            });
        };

        restoreVisitorIdFromWindow();
        restoreCustomCookies();
    },
    beforeRequest: function(getParam, setParam) { /* custom code placeholder */ },
    afterResponse: function(getParam, setParam, genInfo) {
        /* Cross-domain data capture to window.name */
        function captureVisitorIdToWindow(crossDomainParams) {
            var i, cgParamName, cgParamValue,
                crossDomainData = {},
                hasCrossDomainParams = false;

            if (window.JSON && window.JSON.stringify && window.JSON.parse) {
                for (i = crossDomainParams.length; i--;) {
                    cgParamName = crossDomainParams[i];
                    cgParamValue = getParam(cgParamName, 0);
                    if (typeof cgParamValue === 'undefined' ||
                        cgParamValue === 'undefined') {
                        // nothing to save
                    } else {
                        hasCrossDomainParams = true;
                        crossDomainData[cgParamName] = cgParamValue;
                    }
                }
                if (hasCrossDomainParams) {
                    window.name = window.name.replace(
                        /\|\*mm(.*)mm\*\|/, '') + ('|*mm' + JSON.stringify(
                        crossDomainData) + 'mm*|');
                }
            }
        }
        captureVisitorIdToWindow(['pd', 'uat', 'srv']);
    },
    afterResponseExecution: function(getParam, setParam, genInfo) { /* custom code placeholder */ }
}
);d.mmsystem=new function(a){this.enableUtility=function(b){var c=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+b+"($|,)")).test(c)||(c=c.split(","),c.push(b),a.setParam("un",c.join(",").replace(/(^,)|(,$)/g,""),a.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(b){var c=a.getParam("un",a.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+b+"($|,)")).test(c)&&(c=c.replace(new RegExp("(^|,)"+b+"($|,)","gi"),",").replace(/(^,)|(,$)/g,
""),a.setParam("un",c,a.baseStorage.storeStrategy.persistent));return this};this.enable=function(){a.enable();return this};this.disable=function(){a.disable();return this};this.getConfig=function(){return{storageType:a.storageType,cprefix:a.cprefix,domain:a.domain,baseContentUrl:a.baseContentUrl,cookie_domain:a.cookie_domain,srv:a.srv,async:a.async,beforeInit:a.beforeInit,beforeRequest:a.beforeRequest,afterResponse:a.afterResponse,afterResponseExecution:a.afterResponseExecution}}}(ha)}})(window);
:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},7144:(e,t,r)=>{"use strict";r.d(t,{t:()=>n});const n=r(3325).D.sessionReplay},3614:(e,t,r)=>{"use strict";r.d(t,{BST_RESOURCE:()=>i,END:()=>s,FEATURE_NAME:()=>n,FN_END:()=>d,FN_START:()=>c,PUSH_STATE:()=>u,RESOURCE:()=>a,START:()=>o});const n=r(3325).D.sessionTrace,i="bstResource",a="resource",o="-start",s="-end",c="fn"+o,d="fn"+s,u="pushState"},5938:(e,t,r)=>{"use strict";r.d(t,{W:()=>i});var n=r(8325);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},7530:(e,t,r)=>{"use strict";r.d(t,{j:()=>b});var n=r(3325),i=r(234),a=r(5546),o=r(8325),s=r(7894),c=r(8e3),d=r(3960),u=r(385),l=r(50),f=r(3081),h=r(8632);function p(){const e=(0,h.gG)();["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start","recordReplay","pauseReplay"].forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let a=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&a.push(e.api[t](...n))})),a.length>1?a:a[0]}(t,...n)}}))}var g=r(2825);const m=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let v=!1;function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0,{init:w,info:A,loader_config:x,runtime:_={loaderType:b},exposed:E=!0}=t;const S=(0,h.gG)();A||(w=S.init,A=S.info,x=S.loader_config),(0,i.Dg)(e.agentIdentifier,w||{}),(0,i.GE)(e.agentIdentifier,x||{}),A.jsAttributes??={},u.v6&&(A.jsAttributes.isWorker=!0),(0,i.CX)(e.agentIdentifier,A);const D=(0,i.P_)(e.agentIdentifier),T=[A.beacon,A.errorBeacon];v||(D.proxy.assets&&(m(D.proxy.assets),T.push(D.proxy.assets)),D.proxy.beacon&&T.push(D.proxy.beacon),p(),(0,h.EZ)("activatedFeatures",g.T)),_.denyList=[...D.ajax.deny_list||[],...D.ajax.block_internal?T:[]],(0,i.sU)(e.agentIdentifier,_),void 0===e.api&&(e.api=function(e,t){t||(0,c.R)(e,"api");const h={};var p=o.ee.get(e),g=p.get("tracer"),m="api-",v=m+"ixn-";function b(t,r,n,a){const o=(0,i.C5)(e);return null===r?delete o.jsAttributes[t]:(0,i.CX)(e,{...o,jsAttributes:{...o.jsAttributes,[t]:r}}),A(m,n,!0,a||null===r?"session":void 0)(t,r)}function y(){}["setErrorHandler","finished","addToTrace","addRelease"].forEach((e=>{h[e]=A(m,e,!0,"api")})),h.addPageAction=A(m,"addPageAction",!0,n.D.pageAction),h.setCurrentRouteName=A(m,"routeName",!0,n.D.spa),h.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.OP)(e).customTransaction=(r||"http://custom.transaction")+t,A(m,"setPageViewName",!0)()},h.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return b(e,t,"setCustomAttribute",r);(0,l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(typeof t,"> was provided."))}else(0,l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setUserId=function(e){if("string"==typeof e||null===e)return b("enduser.id",e,"setUserId",!0);(0,l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setApplicationVersion=function(e){if("string"==typeof e||null===e)return b("application.version",e,"setApplicationVersion",!1);(0,l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},h.start=e=>{try{const t=e?"defined":"undefined";(0,a.p)(f.xS,["API/start/".concat(t,"/called")],void 0,n.D.metrics,p);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{p.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},h.recordReplay=function(){(0,a.p)(f.xS,["API/recordReplay/called"],void 0,n.D.metrics,p),(0,a.p)("recordReplay",[],void 0,n.D.sessionReplay,p)},h.pauseReplay=function(){(0,a.p)(f.xS,["API/pauseReplay/called"],void 0,n.D.metrics,p),(0,a.p)("pauseReplay",[],void 0,n.D.sessionReplay,p)},h.interaction=function(){return(new y).get()};var w=y.prototype={createTracer:function(e,t){var r={},i=this,o="function"==typeof t;return(0,a.p)(f.xS,["API/createTracer/called"],void 0,n.D.metrics,p),(0,a.p)(v+"tracer",[(0,s.z)(),e,r],i,n.D.spa,p),function(){if(g.emit((o?"":"no-")+"fn-start",[(0,s.z)(),i,o],r),o)try{return t.apply(this,arguments)}catch(e){throw g.emit("fn-err",[arguments,this,e],r),e}finally{g.emit("fn-end",[(0,s.z)()],r)}}}};function A(e,t,r,i){return function(){return(0,a.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,p),i&&(0,a.p)(e+t,[(0,s.z)(),...arguments],r?null:this,i,p),r?void 0:this}}function x(){r.e(63).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>(0,l.Z)("Downloading runtime APIs failed...")))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{w[e]=A(v,e,void 0,n.D.spa)})),h.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,a.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,p),(0,a.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,p)},u.il?(0,d.b2)((()=>x()),!0):x(),h}(e.agentIdentifier,y)),void 0===e.exposed&&(e.exposed=E),v=!0}},1926:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},3325:(e,t,r)=>{"use strict";r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.sessionReplay]:9}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({63:"nr-full",110:"nr-full-compressor",379:"nr-full-recorder"}[e]+"-1.249.0.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.249.0.PROD:",i.l=(r,n,a,o)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){s=l;break}}if(!s){c=!0;var f={63:"sha512-6SDqF6rtYgQGU8n/AB/KNoGAtnScuRXs33iIg2k8vAeSoCxB9zBs5oD5kgKn1/TE6hwPINDK6Iag3Olw7m9neA==",379:"sha512-ieiEerUXfEKXwb+MZoyRDaYgftJLBlM773GS1acP/SOj1LWwntf8fOB8psncZSW2hNp6wO77OEV3phXMhQQNVQ==",110:"sha512-ASvNmzZg3ystVYtJ5V7JpTLlOPjrqtDYHF5iYO3HfPn8AK/iVqkSFfKXUhyGfL+IUdCxMHf4U5aC+IZAbXCxVg=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+a),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[o]&&(s.integrity=f[o])}e[r]=[n];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={29:0,789:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=a);var o=i.p+i.u(t),s=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,s,c]=r,d=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);d<o.length;d++)a=o[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self["webpackChunk:NRBA-1.249.0.PROD"]=self["webpackChunk:NRBA-1.249.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(1926);var e=i(50);class t{#e(e){return"Call to agent api ".concat(e," failed. The agent is not currently initialized.")}addPageAction(t,r){(0,e.Z)(this.#e("addPageAction"))}setPageViewName(t,r){(0,e.Z)(this.#e("setPageViewName"))}setCustomAttribute(t,r,n){(0,e.Z)(this.#e("setCustomAttribute"))}noticeError(t,r){(0,e.Z)(this.#e("noticeError"))}setUserId(t){(0,e.Z)(this.#e("setUserId"))}setApplicationVersion(t){(0,e.Z)(this.#e("setApplicationVersion"))}setErrorHandler(t){(0,e.Z)(this.#e("setErrorHandler"))}finished(t){(0,e.Z)(this.#e("finished"))}addRelease(t,r){(0,e.Z)(this.#e("addRelease"))}start(t){(0,e.Z)(this.#e("start"))}recordReplay(){(0,e.Z)(this.#e("recordReplay"))}pauseReplay(){(0,e.Z)(this.#e("pauseReplay"))}}var r=i(3325),n=i(234);const a=Object.values(r.D);function o(e){const t={};return a.forEach((r=>{t[r]=function(e,t){return!1!==(0,n.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var s=i(7530);var c=i(8e3),d=i(5938),u=i(3960),l=i(385);class f extends d.W{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=i,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,n.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,c.R)(e,r)}importAggregator(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,c.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));const r=l.il&&!0===(0,n.Mt)(this.agentIdentifier,"privacy.cookies_enabled");let a;this.onAggregateImported=new Promise((e=>{a=e}));const o=async()=>{let n;try{if(r){const{setupAgentSession:e}=await i.e(63).then(i.bind(i,3228));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t)}try{if(!this.shouldImportAgg(this.featureName,n))return(0,c.L)(this.agentIdentifier,this.featureName),void a(!1);const{lazyFeatureLoader:e}=await i.e(63).then(i.bind(i,8582)),{Aggregate:r}=await e(this.featureName,"aggregate");this.featAggregate=new r(this.agentIdentifier,this.aggregator,t),a(!0)}catch(t){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),t),this.abortHandler?.(),(0,c.L)(this.agentIdentifier,this.featureName),a(!1)}};l.il?(0,u.b2)((()=>o()),!0):o()}shouldImportAgg(e,t){return e!==r.D.sessionReplay||!!n.Yu.MO&&(!1!==(0,n.Mt)(this.agentIdentifier,"session_trace.enabled")&&(!!t?.isNew||!!t?.state.sessionReplayMode))}}var h=i(7633);class p extends f{static featureName=h.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,h.t,r),this.importAggregator()}}var g=i(1117),m=i(1284);class v extends g.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var a=this.getBucket(e,t,r,i);return a.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,m.D)(e,(function(e,r){t[e]=b(r,t[e])})),t}(n,a.metrics),a}merge(e,t,r,n,i){var a=this.getBucket(e,t,n,i);if(a.metrics){var o=a.metrics;o.count+=r.count,(0,m.D)(r,(function(e,t){if("count"!==e){var n=o[e],i=r[e];i&&!i.c?o[e]=b(i.t,n):o[e]=function(e,t){if(!t)return e;t.c||(t=y(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,o[e])}}))}else a.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=b(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=w(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function w(e){return"object"!=typeof e?[]:(0,m.D)(e,A)}function A(e,t){return t}var x=i(8632),_=i(4402),E=i(4351);var S=i(5546),D=i(7956),T=i(3239),R=i(7894),j=i(9251);class C extends f{static featureName=j.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,j.t,r),l.il&&((0,D.N)((()=>(0,S.p)("docHidden",[(0,R.z)()],void 0,j.t,this.ee)),!0),(0,T.bP)("pagehide",(()=>(0,S.p)("winPagehide",[(0,R.z)()],void 0,j.t,this.ee))),this.importAggregator())}}var P=i(3081);class O extends f{static featureName=P.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,P.t9,r),this.importAggregator()}}var k=i(6660);class I{constructor(e,t,r,n){this.name="UncaughtError",this.message=e,this.sourceURL=t,this.line=r,this.column=n}}class N extends f{static featureName=k.t;#t=new Set;constructor(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,k.t,n);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("fn-err",((e,t,n)=>{this.abortHandler&&!this.#t.has(n)&&(this.#t.add(n),(0,S.p)("err",[this.#r(n),(0,R.z)()],void 0,r.D.jserrors,this.ee))})),this.ee.on("internal-error",(e=>{this.abortHandler&&(0,S.p)("ierr",[this.#r(e),(0,R.z)(),!0],void 0,r.D.jserrors,this.ee)})),l._A.addEventListener("unhandledrejection",(e=>{this.abortHandler&&(0,S.p)("err",[this.#n(e),(0,R.z)(),!1,{unhandledPromiseRejection:1}],void 0,r.D.jserrors,this.ee)}),(0,T.m$)(!1,this.removeOnAbort?.signal)),l._A.addEventListener("error",(e=>{this.abortHandler&&(this.#t.has(e.error)?this.#t.delete(e.error):(0,S.p)("err",[this.#i(e),(0,R.z)()],void 0,r.D.jserrors,this.ee))}),(0,T.m$)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#a,this.importAggregator()}#a(){this.removeOnAbort?.abort(),this.#t.clear(),this.abortHandler=void 0}#r(e){return e instanceof Error?e:void 0!==e?.message?new I(e.message,e.filename||e.sourceURL,e.lineno||e.line,e.colno||e.col):new I("string"==typeof e?e:(0,E.P)(e))}#n(e){let t="Unhandled Promise Rejection: ";if(e?.reason instanceof Error)try{return e.reason.message=t+e.reason.message,e.reason}catch(t){return e.reason}if(void 0===e.reason)return new I(t);const r=this.#r(e.reason);return r.message=t+r.message,r}#i(e){return e.error instanceof Error?e.error:new I(e.message,e.filename,e.lineno,e.colno)}}var H=i(2210);let M=1;const z="nr@id";function L(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===l._A?0:(0,H.X)(e,z,(function(){return M++}))}function Z(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,E.P)(e).length}catch(e){return}}}var U=i(1214),B=i(7243);class F{constructor(e){this.agentIdentifier=e}generateTracePayload(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,n.DL)(this.agentIdentifier);if(!t)return null;var r=(t.accountID||"").toString()||null,i=(t.agentID||"").toString()||null,a=(t.trustKey||"").toString()||null;if(!r||!i)return null;var o=(0,_.M)(),s=(0,_.Ht)(),c=Date.now(),d={spanId:o,traceId:s,timestamp:c};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(d.traceContextParentHeader=this.generateTraceContextParentHeader(o,s),d.traceContextStateHeader=this.generateTraceContextStateHeader(o,c,r,i,a)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(d.newrelicHeader=this.generateTraceHeader(o,s,c,r,i,a)),d}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,a){if(!("function"==typeof l._A?.btoa))return null;var o={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return a&&n!==a&&(o.d.tk=a),btoa((0,E.P)(o))}shouldGenerateTrace(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1,r={};if((0,n.Mt)(this.agentIdentifier,"distributed_tracing")&&(r=(0,n.P_)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var i=0;i<r.allowed_origins.length;i++){var a=(0,B.e)(r.allowed_origins[i]);if(e.hostname===a.hostname&&e.protocol===a.protocol&&e.port===a.port){t=!0;break}}return t}isDtEnabled(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled}excludeNewrelicHeader(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers}}var q=i(7825),V=["load","error","abort","timeout"],G=V.length,W=n.Yu.REQ,X=n.Yu.XHR;class K extends f{static featureName=q.t;constructor(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(super(e,t,q.t,i),(0,n.OP)(e).xhrWrappable){this.dt=new F(e),this.handler=(e,t,r,n)=>(0,S.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};l._A?.performance?.getEntriesByType("resource").forEach((t=>{if(t.initiatorType in e&&0!==t.responseStatus){const n={status:t.responseStatus},i={rxSize:t.transferSize,duration:Math.floor(t.duration),cbTime:0};Y(n,t.name),this.handler("xhr",[n,i,t.startTime,t.responseEnd,e[t.initiatorType]],void 0,r.D.ajax)}}))}catch(e){}(0,U.u5)(this.ee),(0,U.Kf)(this.ee),function(e,t,i,a){function o(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=x,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},e.addEventListener("load",(function(r){_(t,e)}),(0,T.m$)(!1)),l.IF||e.addEventListener("progress",(function(e){t.lastSize=e.loaded}),(0,T.m$)(!1))}function s(e){this.params={method:e[0]},Y(this,e[1]),this.metrics={}}function c(t,r){var i=(0,n.DL)(e);i.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",i.xpid);var o=a.generateTracePayload(this.parsedOrigin);if(o){var s=!1;o.newrelicHeader&&(r.setRequestHeader("newrelic",o.newrelicHeader),s=!0),o.traceContextParentHeader&&(r.setRequestHeader("traceparent",o.traceContextParentHeader),o.traceContextStateHeader&&r.setRequestHeader("tracestate",o.traceContextStateHeader),s=!0),s&&(this.dt=o)}}function d(e,r){var n=this.metrics,i=e[0],a=this;if(n&&i){var o=Z(i);o&&(n.txSize=o)}this.startTime=(0,R.z)(),this.body=i,this.listener=function(e){try{"abort"!==e.type||a.loadCaptureCalled||(a.params.aborted=!0),("load"!==e.type||a.called===a.totalCbs&&(a.onloadCalled||"function"!=typeof r.onload)&&"function"==typeof a.end)&&a.end(r)}catch(e){try{t.emit("internal-error",[e])}catch(e){}}};for(var s=0;s<G;s++)r.addEventListener(V[s],this.listener,(0,T.m$)(!1))}function u(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function f(e,t){var r=""+L(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function h(e,t){var r=""+L(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function p(){this.endTime=(0,R.z)()}function g(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-added",[e[1],e[2]],r)}function m(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-removed",[e[1],e[2]],r)}function v(e,t,r){t instanceof X&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,R.z)()))}function b(e,r){this.xhrCbStart&&t.emit("xhr-cb-time",[(0,R.z)()-this.xhrCbStart,this.onload,r],r)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&l.il&&(t=""+l._A.location.href):e[0]&&e[0].url?t=e[0].url:l._A?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,B.e)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var n=a.generateTracePayload(this.parsedOrigin);if(n&&(n.newrelicHeader||n.traceContextParentHeader))if(e[0]&&e[0].headers)s(e[0].headers,n)&&(this.dt=n);else{var i={};for(var o in r)i[o]=r[o];i.headers=new Headers(r.headers||{}),s(i.headers,n)&&(this.dt=n),e.length>1?e[1]=i:e.push(i)}}function s(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function w(e,t){this.params={},this.metrics={},this.startTime=(0,R.z)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},i=this.target;"string"==typeof i?r=i:"object"==typeof i&&i instanceof W?r=i.url:l._A?.URL&&"object"==typeof i&&i instanceof URL&&(r=i.href),Y(this,r);var a=(""+(i&&i instanceof W&&i.method||n.method||"GET")).toUpperCase();this.params.method=a,this.body=n.body,this.txSize=Z(n.body)||0}function A(e,t){var n;this.endTime=(0,R.z)(),this.params||(this.params={}),this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var a={txSize:this.txSize,rxSize:n,duration:(0,R.z)()-this.startTime};i("xhr",[this.params,a,this.startTime,this.endTime,"fetch"],this,r.D.ajax)}function x(e){var t=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var a=0;a<G;a++)e.removeEventListener(V[a],this.listener,!1);t.aborted||(n.duration=(0,R.z)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):_(this,e),n.cbTime=this.cbTime,i("xhr",[t,n,this.startTime,this.endTime,"xhr"],this,r.D.ajax))}}function _(e,t){e.params.status=t.status;var r=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?Z(e.response):"text"===r||""===r||void 0===r?Z(e.responseText):void 0}(t,e.lastSize);if(r&&(e.metrics.rxSize=r),e.sameOrigin){var n=t.getResponseHeader("X-NewRelic-App-Data");n&&(e.params.cat=n.split(", ").pop())}e.loadCaptureCalled=!0}t.on("new-xhr",o),t.on("open-xhr-start",s),t.on("open-xhr-end",c),t.on("send-xhr-start",d),t.on("xhr-cb-time",u),t.on("xhr-load-added",f),t.on("xhr-load-removed",h),t.on("xhr-resolved",p),t.on("addEventListener-end",g),t.on("removeEventListener-end",m),t.on("fn-end",b),t.on("fetch-before-start",y),t.on("fetch-start",w),t.on("fn-start",v),t.on("fetch-done",A)}(e,this.ee,this.handler,this.dt),this.importAggregator()}}}function Y(e,t){var r=(0,B.e)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}var Q=i(3614);const{BST_RESOURCE:J,RESOURCE:ee,START:te,END:re,FEATURE_NAME:ne,FN_END:ie,FN_START:ae,PUSH_STATE:oe}=Q;var se=i(7144);class ce extends f{static featureName=se.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,se.t,r),this.importAggregator()}}var de=i(4649);class ue extends f{static featureName=de.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,de.t,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,_.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new v({agentIdentifier:this.agentIdentifier}),this.features={},(0,x.h5)(r,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),(0,s.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){try{const t=o(this.agentIdentifier),n=[...this.desiredFeatures];n.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),n.forEach((n=>{if(t[n.featureName]||n.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(n.featureName);i.every((e=>t[e]))||(0,e.Z)("".concat(n.featureName," is enabled but one or more dependent features has been disabled (").concat((0,E.P)(i),"). This may cause unintended consequences or missing data...")),this.features[n.featureName]=new n(this.agentIdentifier,this.sharedAggregator)}}))}catch(t){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,x.fP)();return delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator,r.ee?.abort(),delete r.ee?.get(this.agentIdentifier),!1}}addToTrace(t){(0,e.Z)("Call to agent api addToTrace failed. The session trace feature is not currently initialized.")}setCurrentRouteName(t){(0,e.Z)("Call to agent api setCurrentRouteName failed. The spa feature is not currently initialized.")}interaction(){(0,e.Z)("Call to agent api interaction failed. The spa feature is not currently initialized.")}}({features:[p,C,class extends f{static featureName=ne;constructor(e,t){if(super(e,t,ne,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;const n=this.ee;let i;(0,U.QU)(n),this.eventsEE=(0,U.em)(n),this.eventsEE.on(ae,(function(e,t){this.bstStart=(0,R.z)()})),this.eventsEE.on(ie,(function(e,t){(0,S.p)("bst",[e[0],t,this.bstStart,(0,R.z)()],void 0,r.D.sessionTrace,n)})),n.on(oe+te,(function(e){this.time=(0,R.z)(),this.startPath=location.pathname+location.hash})),n.on(oe+re,(function(e){(0,S.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,r.D.sessionTrace,n)}));try{i=new PerformanceObserver((e=>{const t=e.getEntries();(0,S.p)(J,[t],void 0,r.D.sessionTrace,n)})),i.observe({type:ee,buffered:!0})}catch(e){}this.importAggregator({resourceObserver:i})}},ce,K,O,ue,N],loaderType:"pro"})})()})();</script>
<link rel="canonical" href="https://newrelic.com/termsandconditions/privacy" />
<meta name="description" content="General Data Privacy Notice" />
<link rel="icon" href="/themes/custom/erno/assets/images/metadata/favicon.ico" />
<link rel="mask-icon" href="/themes/custom/erno/assets/images/metadata/safari-pinned-tab.svg" />
<link rel="icon" sizes="16x16" href="/themes/custom/erno/assets/images/metadata/favicon-16x16.png" />
<link rel="icon" sizes="32x32" href="/themes/custom/erno/assets/images/metadata/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/themes/custom/erno/assets/images/metadata/apple-touch-icon.png" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta property="og:site_name" content="New Relic" />
<meta property="og:type" content="website" />
<meta property="og:title" content="General Data Privacy Notice" />
<meta property="og:description" content="General Data Privacy Notice" />
<meta property="og:image" content="https://newrelic.com/themes/custom/erno/assets/images/metadata/NROG_Image.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@newrelic" />
<meta name="msapplication-tilecolor" content="#008c99" />
<meta class="swiftype" name="type" data-type="enum" content="page" />
<meta name="Generator" content="Drupal 9 (https://www.drupal.org)" />
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<script type="application/ld+json">{
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "name": "New Relic",
            "url": "https://newrelic.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://newrelic.com/search#stq={search_term}"
                },
                "query": "https://newrelic.com/search#stq={search_term}",
                "query-input": "required name=search_term"
            }
        }
    ]
}</script>
<link rel="alternate" hreflang="ja" href="https://newrelic.com/jp/termsandconditions/privacy" />
<link rel="alternate" hreflang="x-default" href="https://newrelic.com/termsandconditions/privacy" />

    <title>General Data Privacy Notice</title>
    <link rel="manifest" href="/themes/custom/erno/manifest.json">

    <!-- Font preload -->
    <link rel="preload" href="/themes/custom/erno/assets/fonts/soehne/soehne-buch.woff2" as="font" type="font/woff2"
      crossorigin>
    <link rel="preload" href="/themes/custom/erno/assets/fonts/soehne/soehne-kraftig.woff2" as="font" type="font/woff2"
      crossorigin>
    <link rel="preload" href="/themes/custom/erno/assets/fonts/soehne/soehne-halbfett.woff2" as="font" type="font/woff2"
      crossorigin>

    <!-- Inline font styles -->
    <style type="text/css">
      @font-face{font-family:"Soehne";src:url("/themes/custom/erno/assets/fonts/soehne/soehne-buch.woff2") format("woff2");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Soehne";src:url("/themes/custom/erno/assets/fonts/soehne/soehne-buch-kursiv.woff2") format("woff2");font-weight:normal;font-style:italic;font-display:swap}@font-face{font-family:"Soehne";src:url("/themes/custom/erno/assets/fonts/soehne/soehne-leicht.woff2") format("woff2");font-weight:100 300;font-style:normal;font-display:swap}@font-face{font-family:"Soehne";src:url("/themes/custom/erno/assets/fonts/soehne/soehne-kraftig.woff2") format("woff2");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:"Soehne";src:url("/themes/custom/erno/assets/fonts/soehne/soehne-halbfett.woff2") format("woff2");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:"Soehne Mono";src:url("/themes/custom/erno/assets/fonts/soehne/soehne-mono-buch.woff2") format("woff2");font-weight:normal;font-style:normal;font-display:swap}@font-face{font-family:"Soehne Mono";src:url("/themes/custom/erno/assets/fonts/soehne/soehne-mono-kraftig.woff2") format("woff2");font-weight:500;font-style:normal;font-display:swap}          </style>

    <link rel="stylesheet" media="all" href="/sites/default/files/css/css_SxX7HvCbF0s9xQv7WCv9jTAxiq1UK8RjLONLHYfEuC0.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_4-GNlLvlN0-F758ZvY6Mf93adPM2ECUMjJoQCegNbSY.css" />


    <!-- Inline preferred font loader js -->
    <script>
      (function(doc){var docEl=doc.documentElement,rootClasses=docEl.classList,activateFonts=function(){rootClasses.add("fonts-active");rootClasses.remove("fonts-inactive")},fallbackLoader="/themes/custom/erno/dist/js/nr-font-loader-fallback.min.js";rootClasses.add("fonts-inactive");if(sessionStorage.nrFontsLoaded){activateFonts()}else if("fonts"in doc){Promise.all([doc.fonts.load("1em 'Soehne'"),doc.fonts.load("italic 400 1em 'Soehne'"),doc.fonts.load("300 1em 'Soehne'"),doc.fonts.load("500 1em 'Soehne'"),doc.fonts.load("600 1em 'Soehne'"),doc.fonts.load("1em 'Soehne Mono'"),doc.fonts.load("500 1em 'Soehne Mono'")]).then(function(){activateFonts();sessionStorage.nrFontsLoaded=true})}else{var ref=doc.getElementsByTagName("script")[0];var script=doc.createElement("script");script.src=fallbackLoader;script.async=true;ref.parentNode.insertBefore(script,ref)}})(document);    </script>

          <!-- Osano script -->
      <script src="https://cmp.osano.com/AzZVWOTJtg1WY32RK/cd381ba3-ebca-488c-a528-376a86764609/osano.js?language=en&variant=one"></script>

      <script>
        window.newrelic = window.newrelic || {};
        window.newrelic.segmentKey = 'jzjQisi3j3VvLyH9mc0QNEgYKpj4LlD1'
      </script>
      
    <script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefix":"","currentPath":"node\/3159","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en","currentQuery":{"device":"desktop"}},"pluralDelimiter":"\u0003","suppressDeprecationErrors":true,"translation":"source","intercom":true,"user":{"uid":0,"permissionsHash":"b3693ea1e98838dc018014af36cd32b4a7e7195e11eecb2a04d1a59847993b60"}}</script>
<script src="/sites/default/files/js/js_8-wQVTAocl9MpGf77vUcuwV3tjwhOdhGC0_o2mLjaJM.js"></script>
<script src="/libraries/erno/js/nr-utilities.js?s6ph8s"></script>
<script src="/modules/custom/nr_personalization/js/nr_personalization.personalization.js?s6ph8s"></script>
<script src="/sites/default/files/js/js_4vnf-FKe6k7C9lRxnc5ekqY8X-oOiZO5Swg33OT2c6s.js"></script>
<script src="/libraries/erno/js/nr-utm-cookie.js?s6ph8s"></script>
<script src="/libraries/erno/js/analytics.js?s6ph8s"></script>
<script src="/libraries/erno/js/nr-analytics.js?s6ph8s"></script>


                <!-- Start VWO Async SmartCode -->
<script type='text/javascript' id='vwoCode'>
window._vwo_code=window._vwo_code || (function() {
var account_id=680279,
version = 1.5,
settings_tolerance=2000,
library_tolerance=2500,
use_existing_jquery=false,
is_spa=1,
hide_element='body',
hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
/* DO NOT EDIT BELOW THIS LINE */
f=false,d=document,vwoCodeEl=d.querySelector('#vwoCode'),code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},hide_element_style:function(){return'{'+hide_element_style+'}'},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.innerText;t.onerror=function(){_vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=document.cookie.match(e)||[]}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);e=e.map(function(e){try{var t=decodeURIComponent(e);if(!/_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t)){return''}return t}catch(e){return''}});var i=[];e.forEach(function(e){var t=e.match(/([\d,]+)/g);t&&i.push(t.join('-'))});return i.join('|')},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;window.settings_timer=setTimeout(function(){_vwo_code.finish()},settings_tolerance);var e=d.createElement('style'),t=hide_element?hide_element+'{'+hide_element_style+'}':'',i=d.getElementsByTagName('head')[0];e.setAttribute('id','_vis_opt_path_hides');vwoCodeEl&&e.setAttribute('nonce',vwoCodeEl.nonce);e.setAttribute('type','text/css');if(e.styleSheet)e.styleSheet.cssText=t;else e.appendChild(d.createTextNode(t));i.appendChild(e);var n=this.getCombinationCookie();this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version+(n?'&c='+n:''));return settings_timer}};window._vwo_settings_timer = code.init();return code;}());
</script>
<!-- End VWO Async SmartCode -->
    
  </head>
  <body class="mq-breakpoints--hide path-node page-node-type-page selection:bg-gray-1 selection:text-nr-black">
        <a href="#main-content" class="visually-hidden focusable skip-link">
      Skip to main content
    </a>

    
    <div class="page js-menu-screen-overlay bg-nr-white z-0">
          <div class="page__header">
          




        
<header class="js-header bg-nr-black dark text-nr-white text-lg relative w-full larger:border-b border-solid border-gray-4 header-expanded:fixed header-expanded:top-0 header-expanded:bottom-0 header-expanded:z-10 larger:!relative">
  <div class="max-w-[1440px] mx-auto xlarge:px-8 relative flex flex-col larger:flex-row larger:items-center larger:px-6 justify-between header-expanded:h-full">
    <div  class="flex h-full shrink-0 basis-16 justify-between px-4 border-b border-solid border-gray-4 larger:basis-auto larger:p-0 larger:border-none">
      
<a class="grid w-[120px] larger:w-36 xlarge:w-[170px] svg-w-full h-full items-center rounded focus-inset" href="/" title="New Relic Logo">
  <svg width="165" height="32" viewBox="0 0 165 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5075_22003)">
<path d="M22.3821 11.0773V20.9227L13.8572 25.8464V32L27.7144 24.0005V7.9995L22.3821 11.0773Z" fill="#00AC69"/>
<path d="M13.8572 6.15563L22.3821 11.0773L27.7144 7.9995L13.8572 0L0 7.9995L5.33031 11.0773L13.8572 6.15563Z" fill="#1CE783"/>
<path d="M8.52689 19.0788V28.9242L13.8572 32V16.001L0 7.9995V14.1551L8.52689 19.0788Z" fill="white"/>
<path d="M46.7349 7.97736C43.7517 7.97736 42.3386 9.86149 42.3386 9.86149H42.1816L41.8696 8.29138H38.2563V24.3065H42.1816V15.0469C42.1816 13.0057 43.5907 11.5926 45.6359 11.5926C47.681 11.5926 49.0901 13.0017 49.0901 15.0469V24.3065H53.0154V14.7288C53.0154 10.6465 50.3462 7.97736 46.7349 7.97736Z" fill="white"/>
<path d="M89.0674 18.8111H88.842L86.1728 8.29138H82.1791L79.5099 18.8111H79.2864L76.6152 8.29138H72.533L76.6152 24.3065H81.396L84.0632 13.9438H84.2886L86.9578 24.3065H91.7366L95.8189 8.29138H91.7366L89.0674 18.8111Z" fill="white"/>
<path d="M107.838 9.70448H107.681L107.367 8.29541H104.07V24.3085H107.995V15.0489C107.995 13.0077 108.937 12.0657 110.979 12.0657H112.992V8.2934H110.656C110.11 8.29456 109.57 8.42261 109.081 8.66747C108.592 8.91232 108.167 9.2673 107.838 9.70448V9.70448Z" fill="white"/>
<path d="M121.677 7.97736C116.969 7.97736 113.515 11.4316 113.515 16.2989C113.515 21.1663 116.774 24.6205 121.677 24.6205C125.649 24.6205 128.04 22.2834 129.037 20.5644L125.433 19.2801C125.077 19.9323 123.64 21.1864 121.677 21.1864C119.388 21.1864 117.754 19.7532 117.44 17.5631H129.371C129.481 17.0471 129.534 16.5205 129.528 15.993C129.528 11.4316 126.073 7.97736 121.677 7.97736ZM117.44 14.8858C117.911 12.8447 119.324 11.2746 121.677 11.2746C123.877 11.2746 125.288 12.8447 125.602 14.8858H117.44Z" fill="white"/>
<path d="M63.6899 7.97736C58.9796 7.97736 55.5254 11.4316 55.5254 16.2989C55.5254 21.1663 58.7783 24.6205 63.6899 24.6205C67.6615 24.6205 70.0509 22.2834 71.0473 20.5644L67.4441 19.2801C67.0878 19.9323 65.6526 21.1864 63.6899 21.1864C61.4012 21.1864 59.7647 19.7532 59.4507 17.5631H71.3835C71.4938 17.0471 71.5465 16.5205 71.5405 15.993C71.5405 11.4316 68.0863 7.97736 63.6899 7.97736ZM59.4507 14.8858C59.9217 12.8447 61.3348 11.2746 63.6899 11.2746C65.8881 11.2746 67.3012 12.8447 67.6152 14.8858H59.4507Z" fill="white"/>
<path d="M143.25 1.96867H139.325V5.89394H143.25V1.96867Z" fill="white"/>
<path d="M154.082 21.0092C151.727 21.0092 149.843 19.1251 149.843 16.2989C149.843 13.4727 151.727 11.5886 154.082 11.5886C156.437 11.5886 157.379 13.1587 157.693 14.1008L161.248 12.8366C160.386 10.6002 158.273 7.97736 154.082 7.97736C149.371 7.97736 145.917 11.4316 145.917 16.2989C145.917 21.1663 149.371 24.6205 154.082 24.6205C158.309 24.6205 160.423 21.9553 161.268 19.6123L157.693 18.3401C157.379 19.4391 156.437 21.0092 154.082 21.0092Z" fill="white"/>
<path d="M129.963 5.45713H132.191V24.3065H136.116V1.96867H129.963V5.45713Z" fill="white"/>
<path d="M143.25 8.29138H139.325V24.3065H143.25V8.29138Z" fill="white"/>
<path d="M163.37 21.2347C163.069 21.2303 162.775 21.3153 162.523 21.479C162.271 21.6426 162.073 21.8775 161.955 22.1537C161.837 22.4298 161.804 22.7349 161.86 23.03C161.916 23.325 162.058 23.5968 162.269 23.8107C162.48 24.0247 162.75 24.1711 163.044 24.2313C163.338 24.2915 163.644 24.2628 163.922 24.149C164.199 24.0351 164.437 23.8411 164.605 23.5917C164.772 23.3423 164.861 23.0488 164.861 22.7484C164.868 22.5498 164.834 22.3518 164.762 22.1666C164.689 21.9815 164.58 21.8129 164.44 21.6713C164.301 21.5297 164.134 21.418 163.95 21.3429C163.766 21.2679 163.568 21.231 163.37 21.2347ZM163.37 24.0307C163.115 24.0351 162.865 23.9636 162.651 23.8254C162.438 23.6872 162.27 23.4886 162.169 23.2547C162.069 23.0208 162.04 22.7623 162.087 22.5121C162.134 22.262 162.255 22.0314 162.433 21.8499C162.611 21.6683 162.84 21.544 163.089 21.4927C163.338 21.4414 163.597 21.4655 163.833 21.5618C164.069 21.6582 164.27 21.8225 164.412 22.0338C164.554 22.2451 164.63 22.4939 164.63 22.7484C164.636 22.9161 164.607 23.0833 164.546 23.2395C164.485 23.3958 164.392 23.538 164.274 23.6573C164.156 23.7766 164.015 23.8706 163.86 23.9334C163.704 23.9962 163.537 24.0266 163.37 24.0226V24.0307Z" fill="white"/>
<path d="M164.02 22.4686C164.019 22.396 164.004 22.3243 163.975 22.2578C163.946 22.1913 163.903 22.1315 163.85 22.0821C163.797 22.0327 163.734 21.9947 163.666 21.9705C163.597 21.9462 163.525 21.9363 163.452 21.9412H162.78V23.5194H163.011V22.9719H163.223L163.768 23.5194H164.056L163.51 22.9719C163.645 22.9719 163.773 22.9191 163.868 22.8249C163.964 22.7306 164.018 22.6027 164.02 22.4686V22.4686ZM163.013 22.7404V22.1727H163.452C163.494 22.1676 163.537 22.1715 163.577 22.184C163.618 22.1965 163.655 22.2173 163.687 22.2453C163.719 22.2732 163.745 22.3075 163.763 22.346C163.78 22.3845 163.79 22.4262 163.79 22.4686C163.79 22.6357 163.684 22.7404 163.452 22.7404H163.013Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_5075_22003">
<rect width="164.861" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

</a>
      <div class="larger:hidden flex gap-2 items-center">
        <button class="js-header-search-trigger mr-4" aria-expanded="false" aria-controls="header-search-form">
  <span aria-hidden="true"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.93 20.861A6.93 6.93 0 1 0 13.93 7a6.93 6.93 0 0 0 0 13.861Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m18.782 18.782 3.466 3.465.877.878 1.125 1.125.75.75" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
</span>
  <span class="sr-only">Search toggle</span>
</button>
        <div class="hidden larger:contents largest:hidden">
          




		
							





	<a  href="https://one.newrelic.com" aria-label="Log in" class="btn-tertiary small:inline-flex w-full medium:w-fit group grow border-b-0 larger:mr-5 xlarge:leading-6 larger:text-base xlarge:text-lg max-w-full border-b no-underline w-fit" >
		<div class="h-6 overflow-hidden">
			<div class="transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col">
				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Log in
				</span>
        				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Log in
				</span>
			</div>
		</div>
	</a>
        </div>
                  




<button class="js-header-site-nav-trigger hamburger-menu relative h-8 w-8 rounded" aria-expanded="false" aria-controls="header-main">
  <span class="absolute bg-nr-white inline-block rounded h-[3px] left-1/2 transition-all duration-300 ease-in-out -translate-x-1/2 w-6 top-line top-[6px] origin-center"></span>
  <span class="absolute bg-nr-white inline-block rounded h-[3px] left-1/2 transition-all duration-300 ease-in-out -translate-x-1/2 w-6 middle-line top-[15px]"></span>
  <span class="absolute bg-nr-white inline-block rounded h-[3px] left-1/2 transition-all duration-300 ease-in-out -translate-x-1/2 w-6 bottom-line bottom-[6px]"></span>
  <span class="sr-only">
    Main navigation menu, 6 items
  </span>
</button>
              </div>
    </div>
    <div class="hidden search-expanded:block js-header-search relative p-4 border-t border-t-gray-4 z-20 larger:grow larger:p-0 larger:border-t-0" id="header-search-form">
  

<div class="search-form js-search-form search-form--navigation large:bg-nr-black dark">
  <form class="flex relative" method="post" action="/search">
    <label class="sr-only" for="header-search">Search</label>
    <input class="js-full-text-search col-start-1 row-start-1 w-full !pr-16"
          type="search"
          id="header-search"
          name="search"
          placeholder="What are you looking for?"
          autocomplete="on" autocorrect="off" autocapitalize="off"
          value="" />
    <div class="absolute right-10 flex items-center justify-center h-full w-16">
      <button class="js-search-form-submit btn-text">
        <span aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.93 20.861A6.93 6.93 0 1 0 13.93 7a6.93 6.93 0 0 0 0 13.861Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m18.782 18.782 3.466 3.465.877.878 1.125 1.125.75.75" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>

        </span>
        <span class="sr-only">Submit</span>
      </button>
    </div>
            <button class="js-search-form-cancel btn-text !bg-transparent text-nr-black dark:text-nr-white" aria-label="close" type="button">
          <span aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8.928 8.928 14.144 14.144m0-14.144L8.928 23.072" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
          </span>
        </button>
        </form>
</div>
  <div class="header-search__overlay"></div>
</div>
    <div class="hidden header-expanded:contents larger:contents" id="header-main">
              

      






<nav class="js-header-site-nav grow bg-nr-black text-nr-white overflow-y-auto pb-[102px] larger:pb-0 larger:overflow-auto larger:grow-0 larger:bg-transparent larger:text-nr-white larger:search-expanded:invisible" role="navigation">
  <ul class="js-header-site-nav-item-list flex flex-col min-h-min m-0 larger:flex-row largest:overflow-hidden">
                <li  class="js-header-site-nav-item border-b border-b-gray-4 larger:border-0">
                  <button class="js-header-site-nav-focusable px-10 py-[17px] larger:py-[34px] larger:px-2 largest:px-4 focus-inset focus:outline-4 js-parent-expanded:border-b border-b-gray-4 js-parent-expanded:flex-row-reverse js-parent-expanded:justify-end larger:inline-block larger:js-parent-expanded:border-b-0 larger:border-b-0 js-header-site-nav-button flex w-full items-center justify-between" aria-haspopup="menu">
            <span  class="text-lg larger:text-base xlarge:text-lg">      Platform
  </span>
            <span class="larger:hidden -rotate-90 js-parent-expanded:rotate-90 js-parent-expanded:-ml-2.5 transition-transform"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 12.5 7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
</span>
          </button>
                          <div class="js-subnav hidden larger:block larger:invisible larger:opacity-0 larger:absolute larger:left-0 larger:right-0 larger:-translate-x-4 transition-all js-parent-expanded:block js-parent-expanded:visible js-parent-expanded:opacity-100 js-parent-expanded:translate-x-0 border border-solid border-transparent medium:gradient-nav-black">
            <div  class="text-nr-white larger:nr-fluid-container mx-auto">
              <div>
                              

<div  class="grid grid-flow-row gap-6 items-start header-nav-onecol--12">
            

  <div class="large:col-span-12 column--index-1 grid gap-8 grid-cols-1">
                    
	        


      <div class="n03-promo-list__wrapper larger:mt-8 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/platform" itemprop="url">
        <div  class="n03-promo-list flex flex-col larger:flex-row grow gap-2 larger:gap-6 justify-between bg-nr-extra-black medium:bg-transparent larger:rounded-lg larger:border larger:border-transparent px-10 py-6 larger:px-6 larger:group-hover:border-nr-green">
                    

  <div class="n03-promo js-n03-promo-slide text-sm">
    <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="24" height="24" alt="apm icon" loading="eager" class="svg-image" src=/sites/default/files/2023-09/APM.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap group-hover:text-nr-white transition-all duration-200">
                The All-in-One Observability Platform
  
        </div>
            <div class="text-gray-2">
              30+ capabilities, 700+ integrations,  the power of AI, all together.
  
      </div>
  </div>



                <div class="n03-promo-list__cta text-sm flex items-center">
          <div class="h-6 overflow-y-hidden larger:min-w-[120px]">
            <div class="float-right transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col group-hover:text-nr-green">
              <span class="whitespace-nowrap overflow-x-visible" itemprop="name">
                View Platform
              </span>
              <span class="whitespace-nowrap overflow-x-visible">
                View Platform
              </span>
            </div>
          </div>
        </div>
          </div>
      </a>
    </div>
  


      </div>
      </div>

  
              


  
<div  class="grid grid-flow-row gap-6 items-start px-10 header-nav-fourcol--3-3-3-3 larger:grid-flow-col larger:grid-cols-12 larger:px-0 larger:mb-12">
            

  <div class="pt-10 larger:row-end-auto larger:col-span-3 bg- larger:px-0 larger:pt-12 column--index-1 grid gap-8 grid-cols-1">
          
              
      


<div class="n01-link-list">
			<div class="text-sm text-gray-2 dark:text-gray-2 ml-4 min-h-[16px] pb-2">
			      APM &amp; Digital Experience
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/application-monitoring" aria-label="APM 360" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">APM 360</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_476_5355)">
    <path d="M13.5 3.5H2.5C2.225 3.5 2 3.725 2 4V12C2 12.275 2.225 12.5 2.5 12.5H13.5C13.775 12.5 14 12.275 14 12V4C14 3.725 13.775 3.5 13.5 3.5ZM13 4.5V7.515L10.955 7.52L9.8575 6.3875C9.7525 6.28 9.605 6.225 9.4525 6.2375C9.3025 6.2525 9.165 6.3325 9.0825 6.46L7.8275 8.35L6.6325 6.915C6.5425 6.805 6.41 6.74 6.2675 6.735C6.1275 6.7275 5.9875 6.785 5.89 6.885L4.795 8.0125H2.9975V4.5H12.9975H13ZM3 11.5V9.015H5.0075C5.1425 9.015 5.2725 8.96 5.365 8.8625L6.22 7.9825L7.49 9.505C7.585 9.62 7.725 9.685 7.875 9.685C7.885 9.685 7.8925 9.685 7.9025 9.685C8.06 9.6775 8.205 9.5925 8.2925 9.4625L9.575 7.53L10.3875 8.37C10.4825 8.4675 10.6125 8.5225 10.7475 8.5225L13 8.515V11.5H3Z" fill="#F9FAFA"/>
  </g>
  <defs>
    <clipPath id="clip0_476_5355">
      <rect width="12" height="9" fill="white" transform="translate(2 3.5)"/>
    </clipPath>
  </defs>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/browser-monitoring" aria-label="Browser Real User Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Browser Real User Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.5 2.9875H2.5C2.225 2.9875 2 3.2125 2 3.4875V12.5125C2 12.7875 2.225 13.0125 2.5 13.0125H13.5C13.775 13.0125 14 12.7875 14 12.5125V3.4875C14 3.2125 13.775 2.9875 13.5 2.9875ZM13 3.9875V5.9875H3V3.9875H13ZM3 12.0125V6.9875H13V12.0125H3Z" fill="#F9FAFA"/>
  <path d="M4.5 5.48749C4.77614 5.48749 5 5.26363 5 4.98749C5 4.71135 4.77614 4.48749 4.5 4.48749C4.22386 4.48749 4 4.71135 4 4.98749C4 5.26363 4.22386 5.48749 4.5 5.48749Z" fill="#F9FAFA"/>
  <path d="M6.5 5.48749C6.77614 5.48749 7 5.26363 7 4.98749C7 4.71135 6.77614 4.48749 6.5 4.48749C6.22386 4.48749 6 4.71135 6 4.98749C6 5.26363 6.22386 5.48749 6.5 5.48749Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/mobile-monitoring" aria-label="Mobile Real User Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Mobile Real User Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M9 11H7V12H9V11Z" fill="#F9FAFA"/>
  <path d="M10.5 2H5.5C4.6725 2 4 2.6725 4 3.5V12.5C4 13.3275 4.6725 14 5.5 14H10.5C11.3275 14 12 13.3275 12 12.5V3.5C12 2.6725 11.3275 2 10.5 2ZM5.5 3H10.5C10.775 3 11 3.225 11 3.5V8.905H5V3.5C5 3.225 5.225 3 5.5 3ZM10.5 13H5.5C5.225 13 5 12.775 5 12.5V9.905H11V12.5C11 12.775 10.775 13 10.5 13Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/session-replay" aria-label="Session Replay " class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Session Replay </div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.96362 6V10L9.96362 8L6.96362 6Z" fill="#F9FAFA"/>
  <path d="M7.99867 2.015C6.23117 2.015 4.57867 2.7875 3.44867 4.1125V3.04H2.44867V5.495C2.44867 5.77 2.67367 5.995 2.94867 5.995H5.27867V4.995H4.02367C4.96367 3.75 6.42617 3.015 8.00117 3.015C10.7512 3.015 12.9862 5.2525 12.9862 8C12.9862 10.7475 10.7487 12.985 8.00117 12.985C5.64367 12.985 3.58867 11.31 3.11617 9.005C3.04867 8.6775 3.01367 8.3375 3.01367 8H2.01367C2.01367 8.405 2.05367 8.8125 2.13617 9.205C2.70367 11.975 5.16867 13.985 8.00117 13.985C11.3012 13.985 13.9862 11.3 13.9862 8C13.9862 4.7 11.3012 2.015 8.00117 2.015H7.99867Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/synthetics" aria-label="Synthetics" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Synthetics</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.3545 7.65839L11.6045 5.90839L10.897 6.61588L11.7945 7.51338H5.99945C7.06445 6.77838 8.05445 5.62338 9.02195 4.01088L9.36945 5.29338L10.3345 5.03339L9.68445 2.63338C9.61195 2.36588 9.33945 2.21088 9.07195 2.28088L6.67195 2.93088L6.93195 3.89588L8.11945 3.57338C6.48445 6.27088 4.82695 7.49838 2.83945 7.51338H2.50195V8.51338H2.50445H2.80195C4.79695 8.51338 6.45695 9.73089 8.09445 12.4184L6.92945 12.1034L6.66945 13.0684L9.06945 13.7184C9.11195 13.7309 9.15695 13.7359 9.19945 13.7359C9.41945 13.7359 9.62195 13.5884 9.68195 13.3659L10.332 10.9659L9.36695 10.7059L9.01445 12.0109C8.04695 10.4009 7.05695 9.24588 5.98945 8.51338H11.792L10.8945 9.41088L11.602 10.1184L13.352 8.36838C13.547 8.17338 13.547 7.85588 13.352 7.66088L13.3545 7.65839Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/web-performance-monitoring" aria-label="Web Performance Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Web Performance Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7 8.99875H4V9.99875H7V8.99875Z" fill="#F9FAFA"/>
  <path d="M9.98511 8.99875H7.98511V9.99875H9.98511V8.99875Z" fill="#F9FAFA"/>
  <path d="M12 8.99875H11V9.99875H12V8.99875Z" fill="#F9FAFA"/>
  <path d="M13.5 2.99625H2.5C2.225 2.99625 2 3.22125 2 3.49625V12.5037C2 12.7787 2.225 13.0037 2.5 13.0037H13.5C13.775 13.0037 14 12.7787 14 12.5037V3.49625C14 3.22125 13.775 2.99625 13.5 2.99625ZM13 3.99625V5.99625H3V3.99625H13ZM3 12.0037V6.99624H13V12.0037H3Z" fill="#F9FAFA"/>
  <path d="M4.5 5.49625C4.77614 5.49625 5 5.27239 5 4.99625C5 4.7201 4.77614 4.49625 4.5 4.49625C4.22386 4.49625 4 4.7201 4 4.99625C4 5.27239 4.22386 5.49625 4.5 5.49625Z" fill="#F9FAFA"/>
  <path d="M6.5 5.49625C6.77614 5.49625 7 5.27239 7 4.99625C7 4.7201 6.77614 4.49625 6.5 4.49625C6.22386 4.49625 6 4.7201 6 4.99625C6 5.27239 6.22386 5.49625 6.5 5.49625Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/serverless-monitoring" aria-label="Serverless" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Serverless</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M11.9375 12.2425H4.85005C3.24505 12.2425 1.98755 10.9275 1.98755 9.24751C1.98755 7.56751 3.24505 6.25251 4.85005 6.25251C4.99755 6.25251 5.17005 6.26751 5.32255 6.28501L5.42255 6.04001C6.08005 4.65251 7.40005 3.75751 8.79005 3.75751C10.8025 3.75751 12.4375 5.47501 12.4375 7.58251V7.96001L12.6725 8.03251C13.5 8.36001 14.0125 9.14251 14.0125 10.0775C14.0125 11.27 13.0825 12.24 11.9375 12.24V12.2425ZM4.85005 7.25251C3.78755 7.25251 2.98755 8.11001 2.98755 9.24751C2.98755 10.385 3.78755 11.2425 4.85005 11.2425H11.9375C12.53 11.2425 13.0125 10.72 13.0125 10.08C13.0125 9.55501 12.7625 9.15251 12.3225 8.97251L11.4375 8.70501V7.58501C11.4375 6.02751 10.25 4.76001 8.79005 4.76001C7.79005 4.76001 6.82755 5.42501 6.33255 6.45751L5.95005 7.40001L5.55255 7.33001C5.43255 7.31001 5.07255 7.25501 4.85255 7.25501L4.85005 7.25251Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/pathpoint" aria-label="Business Observability" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Business Observability</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.7502 13.1175C11.1652 13.1175 11.5002 12.7825 11.5002 12.3675C11.5002 11.9525 11.1652 11.6175 10.7502 11.6175C10.3352 11.6175 10.0002 11.9525 10.0002 12.3675C10.0002 12.7825 10.3352 13.1175 10.7502 13.1175Z" fill="#F9FAFA"/>
  <path d="M11.3703 9.88251H2.52781C2.33281 9.88251 2.15781 9.77001 2.07531 9.59501C1.99281 9.42001 2.02031 9.21251 2.14281 9.06251L4.36531 6.38251L2.14281 3.70251C2.02031 3.55251 1.99281 3.34501 2.07531 3.17001C2.15781 2.99501 2.33281 2.88251 2.52781 2.88251H11.3703C11.5328 2.88251 11.6853 2.96001 11.7778 3.09251L13.9078 6.09251C14.0303 6.26501 14.0303 6.49751 13.9078 6.67251L11.7778 9.67251C11.6828 9.80501 11.5328 9.88251 11.3703 9.88251ZM3.59281 8.88251H11.1128L12.8878 6.38251L11.1128 3.88251H3.59281L5.40031 6.06251C5.55281 6.24751 5.55281 6.51501 5.40031 6.70001L3.59281 8.88001V8.88251Z" fill="#F9FAFA"/>
  <path d="M5.00024 11.8775H2.00024V12.8775H5.00024V11.8775Z" fill="#F9FAFA"/>
  <path d="M9.00024 11.8775H6.00024V12.8775H9.00024V11.8775Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/solutions/sap" aria-label="SAP Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">SAP Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7.79505 11.4963H2.48755C2.21255 11.4963 1.98755 11.2713 1.98755 10.9963V5.00375C1.98755 4.72875 2.21255 4.50375 2.48755 4.50375H13.5125C13.7125 4.50375 13.8925 4.62375 13.9725 4.80625C14.05 4.99125 14.0125 5.20375 13.875 5.34875L8.15755 11.3413C8.06255 11.4413 7.93255 11.4963 7.79505 11.4963ZM2.98755 10.4963H7.58005L12.3425 5.50375H2.98755V10.4963Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/codestream" aria-label="CodeStream" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">CodeStream</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.8224 7.64564L8.35494 2.17814C8.15994 1.98314 7.84244 1.98314 7.64744 2.17814L2.17994 7.64564C1.98494 7.84064 1.98494 8.15813 2.17994 8.35313L7.64744 13.8206C7.74494 13.9181 7.87244 13.9681 7.99994 13.9681C8.12744 13.9681 8.25494 13.9181 8.35244 13.8206L13.8199 8.35313C14.0149 8.15813 14.0149 7.84064 13.8199 7.64564H13.8224ZM7.99994 9.20314C7.33494 9.20314 6.79494 8.66313 6.79494 7.99813C6.79494 7.33313 7.33494 6.79313 7.99994 6.79313C8.66494 6.79313 9.20494 7.33313 9.20494 7.99813C9.20494 8.66313 8.66494 9.20314 7.99994 9.20314ZM7.49994 3.73814V5.85563C6.52494 6.08313 5.79494 6.95814 5.79494 8.00064C5.79494 9.04314 6.52494 9.91814 7.49994 10.1456V12.2631L3.23744 8.00064L7.49994 3.73814ZM8.49994 12.2606V10.1431C9.47494 9.91564 10.2049 9.04063 10.2049 7.99813C10.2049 6.95563 9.47494 6.08063 8.49994 5.85313V3.73564L12.7624 7.99813L8.49994 12.2606Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
  
	</ul>
  </div>


  
      </div>
          

  <div class="larger:col-span-3 larger:pt-12 column--index-2 grid gap-8">
          
              
      


<div class="n01-link-list">
			<div class="text-sm text-gray-2 dark:text-gray-2 ml-4 min-h-[16px] pb-2">
			      Infrastructure
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/infrastructure" aria-label="Infrastructure Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Infrastructure Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 9.42533C7.9125 9.42533 7.8275 9.40283 7.75 9.35783L2.25 6.18283C2.095 6.09533 2 5.93033 2 5.75033C2 5.57033 2.095 5.40533 2.25 5.31783L7.75 2.14283C7.905 2.05283 8.095 2.05283 8.25 2.14283L13.75 5.31783C13.905 5.40783 14 5.57283 14 5.75033C14 5.92783 13.905 6.09533 13.75 6.18283L8.25 9.35783C8.1725 9.40283 8.0875 9.42533 8 9.42533ZM3.5 5.75033L8 8.34783L12.5 5.75033L8 3.15283L3.5 5.75033Z" fill="#F9FAFA"/>
  <path d="M7.99988 11.6751C7.91238 11.6751 7.82738 11.6526 7.74988 11.6076L2.24988 8.43259C2.00988 8.29509 1.92988 7.98759 2.06738 7.75009C2.20488 7.51009 2.50988 7.42759 2.74988 7.56759L7.99988 10.5976L13.2499 7.56759C13.4899 7.43009 13.7949 7.51259 13.9324 7.75009C14.0699 7.99009 13.9874 8.29509 13.7499 8.43259L8.24988 11.6076C8.17238 11.6526 8.08738 11.6751 7.99988 11.6751Z" fill="#F9FAFA"/>
  <path d="M7.99988 13.9251C7.91238 13.9251 7.82738 13.9026 7.74988 13.8576L2.24988 10.6826C2.00988 10.5451 1.92988 10.2376 2.06738 10.0001C2.20488 9.76009 2.50988 9.67759 2.74988 9.81759L7.99988 12.8476L13.2499 9.81759C13.4899 9.68009 13.7949 9.76259 13.9324 10.0001C14.0699 10.2401 13.9874 10.5451 13.7499 10.6826L8.24988 13.8576C8.17238 13.9026 8.08738 13.9251 7.99988 13.9251Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/kubernetes-pixie" aria-label="Kubernetes Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Kubernetes Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M12.4901 8.705C12.5951 7.705 12.3651 6.6775 11.8051 5.8025L13.0101 4.8475L12.3901 4.065L11.1751 5.0275C10.4251 4.29 9.4751 3.8675 8.5001 3.765V2.18H7.5001V3.77C6.5351 3.8825 5.6001 4.3025 4.8601 5.0375L3.6351 4.0625L3.0126 4.845L4.2351 5.8175C3.7826 6.53 3.5376 7.3575 3.5376 8.2275C3.5376 8.3825 3.5451 8.5375 3.5601 8.6875L2.0376 9.04L2.2626 10.015L3.7726 9.665C3.9901 10.315 4.3501 10.91 4.8451 11.405C5.0801 11.64 5.3351 11.84 5.6051 12.0125L4.9476 13.3875L5.8501 13.82L6.5076 12.45C6.9951 12.6225 7.5026 12.7125 8.0151 12.7125C8.5276 12.7125 9.0176 12.625 9.4976 12.46L10.1501 13.82L11.0526 13.3875L10.4026 12.0325C10.6851 11.8575 10.9551 11.6525 11.2026 11.41H11.2051C11.7076 10.905 12.0601 10.31 12.2751 9.6775L13.7376 10.015L13.9626 9.04L12.4901 8.7V8.705ZM8.4976 4.775C9.1801 4.8675 9.8376 5.1625 10.3801 5.6575L8.4976 7.1475V4.775ZM7.9976 7.4575C8.3976 7.4575 8.7226 7.7825 8.7226 8.1825C8.7226 8.5825 8.3976 8.9075 7.9976 8.9075C7.5976 8.9075 7.2726 8.5825 7.2726 8.1825C7.2726 7.7825 7.5976 7.4575 7.9976 7.4575ZM7.4976 4.7825V7.145L5.6501 5.6725C6.1801 5.18 6.8276 4.885 7.4976 4.7825ZM4.5351 8.2325C4.5351 7.5925 4.7076 6.9825 5.0226 6.45L6.8776 7.9275L4.5476 8.465C4.5426 8.3875 4.5376 8.31 4.5376 8.2325H4.5351ZM6.0401 11.1075C5.8676 10.99 5.7026 10.8575 5.5501 10.7025C5.1901 10.3425 4.9226 9.9125 4.7501 9.4425L7.0951 8.9L6.0376 11.105L6.0401 11.1075ZM6.9376 11.5475L7.9951 9.34L9.0576 11.5575C8.3651 11.77 7.6226 11.7675 6.9376 11.5475ZM10.4926 10.7025C10.3276 10.865 10.1501 11.0075 9.9626 11.13L8.8951 8.9025L11.2901 9.455C11.1201 9.91 10.8576 10.3375 10.4926 10.7025ZM11.5001 8.4775L9.1176 7.9275L11.0076 6.43C11.3851 7.055 11.5476 7.7725 11.5001 8.4775Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/network-performance-monitoring" aria-label="Network Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Network Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M12.0012 3H9.00122V6H7.00372V3H3.00372V7H6.00622V9H3.00122V13H7.00122V10H8.99872V13H11.9987H12.9987V9H9.99872V7H12.9987V3H11.9987H12.0012ZM4.00122 6V4H6.00372V6H4.00122ZM6.00372 12H4.00122V9.9975H6.00372V12ZM12.0012 10V12H10.0012V10H12.0012ZM9.00122 9H7.00372V7H9.00122V9ZM12.0012 6H10.0012V4H12.0012V6Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/solutions/prometheus-monitoring" aria-label="Prometheus Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Prometheus Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M11.1363 9.00845H3.96631V10.0085H4.54631L6.30631 13.7185C6.38881 13.8935 6.56381 14.0034 6.75881 14.0034H9.24131C9.43381 14.0034 9.61131 13.891 9.69381 13.7185L11.4538 10.0085H12.0338V9.00845H11.1388H11.1363ZM8.92381 13.0034H7.07381L5.65381 10.0085H10.3463L8.92631 13.0034H8.92381Z" fill="#F9FAFA"/>
  <path d="M5.17875 8.00876C5.17875 8.00876 5.17375 7.99126 5.17125 7.98376C5.04375 7.67126 4.98375 7.34876 4.99125 7.01376C4.99125 5.70876 6.95125 3.93126 7.99875 3.12126C9.04875 3.92876 11.0062 5.70876 11.0062 7.02376C11.0137 7.34876 10.9512 7.67126 10.8262 7.98126C10.8237 7.98876 10.8212 7.99876 10.8187 8.00626H11.8737C11.9687 7.67876 12.0137 7.34376 12.0062 7.01126C12.0062 4.80376 8.66875 2.36126 8.28875 2.08876C8.11375 1.96626 7.88125 1.96626 7.70875 2.08876C7.67125 2.11626 6.78875 2.74876 5.89125 3.64376C4.63125 4.90376 3.99125 6.03626 3.99125 6.99876C3.98375 7.33876 4.03125 7.67626 4.12375 8.00376H5.17875V8.00876Z" fill="#F9FAFA"/>
  <path d="M8.3314 5.59627C8.1414 5.42627 7.8539 5.42627 7.6639 5.59627C6.9864 6.20377 6.4814 6.95626 6.2014 7.77626C6.1739 7.85376 6.1714 7.93377 6.1814 8.00877H7.1839C7.3614 7.52627 7.6364 7.07126 7.9964 6.67376C8.3564 7.07376 8.6314 7.52627 8.8089 8.00877H9.8114C9.8214 7.93377 9.8189 7.85376 9.7914 7.77626C9.5139 6.95876 9.0064 6.20377 8.3289 5.59627H8.3314Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/partners/aws-monitoring" aria-label="AWS Cloud Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">AWS Cloud Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <g clip-path="url(#clip0_9754_1997)">
    <path d="M13.5975 9.35481C13.5325 9.35481 13.465 9.34231 13.4 9.31481C13.1475 9.20481 13.03 8.91232 13.1375 8.65732C13.3525 8.15732 13.4625 7.60232 13.4625 7.02982C12.895 7.08732 12.3525 7.25232 11.8775 7.51732C11.635 7.65232 11.3325 7.56482 11.1975 7.32232C11.0625 7.07982 11.15 6.77732 11.3925 6.64232C12.1475 6.22232 13.0275 6.01482 13.9375 6.00732C14.1925 6.00732 14.405 6.20232 14.4325 6.45482C14.5275 7.35982 14.3975 8.25732 14.0575 9.05232C13.975 9.24231 13.7925 9.35481 13.5975 9.35481Z" fill="#F9FAFA"/>
    <path d="M8.04005 10.9923C5.98255 10.9923 3.73504 9.68483 2.56254 7.75734C2.42004 7.52234 2.49504 7.21484 2.73004 7.06984C2.96504 6.92734 3.27254 6.99984 3.41754 7.23734C4.62504 9.22483 6.82255 10.1223 8.37505 9.97733C9.63755 9.86233 10.6125 9.38733 11.64 8.39234C11.8375 8.19984 12.155 8.20484 12.3475 8.40234C12.54 8.59984 12.535 8.91733 12.3375 9.10983C11.15 10.2623 9.95505 10.8373 8.46755 10.9748C8.32755 10.9873 8.18505 10.9948 8.04255 10.9948L8.04005 10.9923Z" fill="#F9FAFA"/>
  </g>
  <defs>
    <clipPath id="clip0_9754_1997">
      <rect width="11.975" height="4.98499" fill="white" transform="translate(2.48999 6.00732)"/>
    </clipPath>
  </defs>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/solutions/partners/azure" aria-label="Azure Cloud Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Azure Cloud Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M12.755 12.7118C12.7 12.7118 12.645 12.7018 12.59 12.6843L6.58 10.5793C6.32 10.4868 6.1825 10.2018 6.2725 9.9418C6.365 9.6818 6.65 9.5443 6.91 9.6343L11.7075 11.3168L8.215 4.7743L3.6675 11.9018C3.52 12.1343 3.21 12.2018 2.9775 12.0543C2.745 11.9068 2.675 11.5968 2.825 11.3643L7.83 3.5168C7.925 3.3668 8.0875 3.2743 8.27 3.2868C8.4475 3.2943 8.6075 3.3943 8.6925 3.5518L13.195 11.9793C13.2925 12.1618 13.2675 12.3843 13.1325 12.5393C13.035 12.6518 12.895 12.7143 12.7525 12.7143L12.755 12.7118Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/partners/gcp" aria-label="Google Cloud Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Google Cloud Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M12.6725 7.02625L12.4375 6.95375V6.57625C12.4375 4.46625 10.8 2.75125 8.79005 2.75125C7.40255 2.75125 6.08005 3.64625 5.42255 5.03375L5.32255 5.27875C5.17005 5.26125 5.00005 5.24625 4.85005 5.24625C3.24505 5.24625 1.98755 6.56125 1.98755 8.24125C1.98755 9.92125 3.24505 11.2363 4.85005 11.2363H5.97505V10.2363H4.85005C3.78755 10.2363 2.98755 9.37875 2.98755 8.24125C2.98755 7.10375 3.78755 6.24625 4.85005 6.24625C5.07255 6.24625 5.43255 6.30125 5.55255 6.32125L5.95005 6.39125L6.33255 5.44875C6.82755 4.41625 7.79005 3.75125 8.79005 3.75125C10.25 3.75125 11.4375 5.01875 11.4375 6.57625V7.69625L12.3225 7.96375C12.76 8.14375 13.0125 8.54625 13.0125 9.07125C13.0125 9.71375 12.53 10.2338 11.9375 10.2338H10.975V11.2338H11.9375C13.0825 11.2338 14.0125 10.2638 14.0125 9.07125C14.0125 8.13625 13.5 7.35375 12.6725 7.02625Z" fill="#F9FAFA"/>
  <path d="M8.12256 7.41645L6.37256 9.16645L7.08006 9.87395L7.97756 8.97645V13.249H8.97756V8.97645L9.87506 9.87395L10.5826 9.16645L8.83256 7.41645C8.63756 7.22145 8.32006 7.22145 8.12506 7.41645H8.12256Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
  
	</ul>
  </div>


  
              
      


<div class="n01-link-list">
			<div class="text-sm text-gray-2 dark:text-gray-2 ml-4 min-h-[16px] pb-2">
			      Logs
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/log-management" aria-label="Log Management" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Log Management</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.5 2.5H2.5C2.225 2.5 2 2.725 2 3V11C2 11.275 2.225 11.5 2.5 11.5H7.5V12.5H5V13.5H11V12.5H8.5V11.5H13.5C13.775 11.5 14 11.275 14 11V3C14 2.725 13.775 2.5 13.5 2.5ZM13 10.5H3V3.5H13V10.5Z" fill="#F9FAFA"/>
  <path d="M11 4.5H4V5.5H11V4.5Z" fill="#F9FAFA"/>
  <path d="M12 6.5H4V7.5H12V6.5Z" fill="#F9FAFA"/>
  <path d="M9 8.5H4V9.5H9V8.5Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
  
	</ul>
  </div>


  
      </div>
          

  <div class="larger:col-span-3 larger:pt-12 column--index-3 grid gap-8">
          
              
      


<div class="n01-link-list">
			<div class="text-sm text-gray-2 dark:text-gray-2 ml-4 min-h-[16px] pb-2">
			      Security
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/application-security" aria-label="Interactive Application Security Testing (IAST)" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Interactive Application Security Testing (IAST)</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.4626 6.72506H10.1251V6.12506C10.1251 5.56506 9.8976 5.01756 9.5026 4.62256C9.1076 4.22756 8.5601 4.00006 8.0001 4.00006C7.4401 4.00006 6.8926 4.22756 6.4976 4.62256C6.1026 5.01756 5.8751 5.56506 5.8751 6.12506V6.72506H5.5376C5.2626 6.72506 5.0376 6.95006 5.0376 7.22506V10.5001C5.0376 10.7751 5.2626 11.0001 5.5376 11.0001H10.4626C10.7376 11.0001 10.9626 10.7751 10.9626 10.5001V7.22506C10.9626 6.95006 10.7376 6.72506 10.4626 6.72506ZM6.8751 6.12506C6.8751 5.83256 6.9976 5.53506 7.2026 5.32756C7.4076 5.12006 7.7051 5.00006 8.0001 5.00006C8.2951 5.00006 8.5901 5.12256 8.7976 5.32756C9.0051 5.53256 9.1251 5.83006 9.1251 6.12506V6.72506H6.8751V6.12506ZM9.9626 10.0001H6.0376V7.72506H9.9626V10.0001Z" fill="#F9FAFA"/>
  <path d="M7.99995 9.42501C8.30371 9.42501 8.54995 9.17877 8.54995 8.87501C8.54995 8.57126 8.30371 8.32501 7.99995 8.32501C7.69619 8.32501 7.44995 8.57126 7.44995 8.87501C7.44995 9.17877 7.69619 9.42501 7.99995 9.42501Z" fill="#F9FAFA"/>
  <path d="M8 2C4.6925 2 2 4.6925 2 8C2 11.3075 4.6925 14 8 14C11.3075 14 14 11.3075 14 8C14 4.6925 11.31 2 8 2ZM8 13C5.2425 13 3 10.7575 3 8C3 5.2425 5.2425 3 8 3C10.7575 3 13 5.2425 13 8C13 10.7575 10.7575 13 8 13Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/vulnerability-management" aria-label="Vulnerability Management" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Vulnerability Management</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M12.5 7H11.5V5.5C11.5 4.56 11.1375 3.68 10.47 3.0125C9.7875 2.36 8.91 2 8 2C7.045 2 6.14 2.375 5.5125 3.03C4.8575 3.7125 4.5 4.59 4.5 5.5V7H3.5C3.225 7 3 7.225 3 7.5V13.5C3 13.775 3.225 14 3.5 14H12.5C12.775 14 13 13.775 13 13.5V7.5C13 7.225 12.775 7 12.5 7ZM5.5 5.5C5.5 4.85 5.7625 4.2175 6.2375 3.72C6.675 3.2625 7.3175 3 8 3C8.6825 3 9.2825 3.2625 9.7725 3.7275C10.25 4.205 10.5 4.8175 10.5 5.5V7H5.5V5.5ZM12 13H4V8H12V13Z" fill="#F9FAFA"/>
  <path d="M8 11.5C8.55228 11.5 9 11.0523 9 10.5C9 9.94773 8.55228 9.50002 8 9.50002C7.44772 9.50002 7 9.94773 7 10.5C7 11.0523 7.44772 11.5 8 11.5Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
  
	</ul>
  </div>


  
              
      


<div class="n01-link-list">
			<div class="text-sm text-gray-2 dark:text-gray-2 ml-4 min-h-[16px] pb-2">
			      Artificial Intelligence
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/new-relic-ai" aria-label="New Relic AI" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">New Relic AI</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00108 8.82999C8.45858 8.82999 8.82858 8.45999 8.82858 8.00249C8.82858 7.54499 8.45858 7.17499 8.00108 7.17499C7.54358 7.17499 7.17358 7.54499 7.17358 8.00249C7.17358 8.45999 7.54358 8.82999 8.00108 8.82999Z" fill="#F9FAFA"/>
  <path d="M8.0012 14.02C4.6812 14.02 1.9812 11.32 1.9812 7.99998C1.9812 4.67998 4.6812 1.97998 8.0012 1.97998C9.5937 1.97998 11.1012 2.60999 12.2462 3.75499L11.5387 4.46248C10.5837 3.50748 9.3262 2.97998 8.0012 2.97998C5.2337 2.97998 2.9812 5.23248 2.9812 7.99998C2.9812 10.7675 5.2337 13.02 8.0012 13.02C10.6012 13.02 12.7462 11.035 12.9962 8.49998H11.2212C10.9812 10.06 9.6262 11.26 7.9987 11.26C6.2012 11.26 4.7387 9.79748 4.7387 7.99998C4.7387 6.20248 6.2012 4.73999 7.9987 4.73999C8.8812 4.73999 9.7012 5.07748 10.3112 5.68748L9.6037 6.39499C9.1812 5.97249 8.6112 5.73999 7.9987 5.73999C6.7537 5.73999 5.7387 6.75498 5.7387 7.99998C5.7387 9.24498 6.7537 10.26 7.9987 10.26C9.2437 10.26 10.2587 9.24498 10.2587 7.99998V7.49998H14.0187V7.99998C14.0187 11.32 11.3187 14.02 7.9987 14.02H8.0012Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/applied-intelligence" aria-label="AIOps" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">AIOps</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14 7.52251H13V4.44501C13 3.64751 12.3525 3 11.555 3H8.5V2H7.5V3H4.445C3.6475 3 3 3.64751 3 4.44501V7.52251H2V8.52251H3V11.555C3 12.3525 3.6475 13 4.445 13H7.5V14H8.5V13H11.555C12.3525 13 13 12.3525 13 11.555V8.52251H14V7.52251ZM12 11.555C12 11.8 11.8 12 11.555 12H4.445C4.2 12 4 11.8 4 11.555V4.44501C4 4.20001 4.2 4 4.445 4H11.555C11.8 4 12 4.20001 12 4.44501V11.555Z" fill="#F9FAFA"/>
  <path d="M7.99994 9.28502C7.00994 9.28502 6.55744 8.84752 6.54244 8.83502L5.81494 9.52002C5.88744 9.59752 6.57744 10.285 7.99994 10.285C9.42244 10.285 10.1099 9.59752 10.1824 9.52002L9.45994 8.82751C9.43994 8.84501 8.98994 9.28252 7.99744 9.28252L7.99994 9.28502Z" fill="#F9FAFA"/>
  <path d="M6.725 7.52502V6.07501C6.325 6.07501 6 6.40002 6 6.80002C6 7.20002 6.325 7.52502 6.725 7.52502Z" fill="#F9FAFA"/>
  <path d="M7.4501 6.80002C7.4501 6.40002 7.1251 6.07501 6.7251 6.07501V7.52502C7.1251 7.52502 7.4501 7.20002 7.4501 6.80002Z" fill="#F9FAFA"/>
  <path d="M9.4999 6.07501C9.0999 6.07501 8.7749 6.40002 8.7749 6.80002C8.7749 7.20002 9.0999 7.52502 9.4999 7.52502C9.8999 7.52502 10.2249 7.20002 10.2249 6.80002C10.2249 6.40002 9.8999 6.07501 9.4999 6.07501Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/ai-monitoring" aria-label="AI Monitoring" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">AI Monitoring</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.02 7.49833H11.7374L10.6086 5.71741C10.5083 5.56691 10.3578 5.49166 10.1822 5.49166C10.0066 5.49166 9.85615 5.56691 9.75581 5.71741L7.99998 8.35116L6.82106 6.495C6.72073 6.3445 6.57023 6.26925 6.39465 6.26925C6.21906 6.26925 6.06856 6.3445 5.96823 6.495L5.31606 7.49833H4.01173C4.23748 5.51675 5.94315 3.96158 7.99998 3.96158H8.50165V1.98H7.49831V2.98333C5.1154 3.23416 3.23415 5.11541 2.98331 7.49833H1.97998V8.50166H2.98331C3.20906 10.8846 5.1154 12.7658 7.49831 13.0167V14.02H8.50165V13.0167C10.8846 12.7909 12.7658 10.8846 13.0166 8.50166H14.02V7.49833ZM7.99998 12.0384C5.94315 12.0384 4.23748 10.4832 4.01173 8.50166H5.61706C5.79265 8.50166 5.94315 8.42641 6.04348 8.27591L6.41973 7.699L7.59865 9.53008C7.69898 9.68058 7.84948 9.75583 8.02506 9.75583C8.20065 9.75583 8.35115 9.68058 8.45148 9.53008L10.2073 6.89633L11.0852 8.25083C11.1856 8.40133 11.3361 8.47658 11.5116 8.47658H12.0384C11.7625 10.4832 10.0568 12.0384 7.99998 12.0384Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
  
	</ul>
  </div>


  
      </div>
          

  <div class="larger:col-span-3 larger:pt-12 larger:pr-8 column--index-4 grid gap-8">
          
              
      


<div class="n01-link-list">
			<div class="text-sm text-gray-2 dark:text-gray-2 ml-4 min-h-[16px] pb-2">
			      Platform Capabilities
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/solutions/opentelemetry" aria-label="OpenTelemetry " class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">OpenTelemetry </div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.73672 8.30933C4.13672 8.30933 4.46172 7.98432 4.46172 7.58432C4.46172 7.18432 4.13672 6.85931 3.73672 6.85931C3.33672 6.85931 3.01172 7.18432 3.01172 7.58432C3.01172 7.98432 3.33672 8.30933 3.73672 8.30933Z" fill="#F9FAFA"/>
  <path d="M13.2667 4.93182L10.5167 2.18182C10.4192 2.08432 10.2817 2.0268 10.1492 2.0368C10.0117 2.0418 9.88174 2.10181 9.78924 2.20431L7.88924 4.32931C7.72424 4.51431 7.72174 4.7843 7.87424 4.9743L2.71924 10.5993C2.53924 10.7968 2.54424 11.1018 2.73424 11.2918L4.15924 12.7168C4.25674 12.8143 4.38424 12.8643 4.51174 12.8643C4.63174 12.8643 4.75424 12.8218 4.84924 12.7318L7.26174 10.5218V13.9643H8.26174V9.6068L10.4767 7.57931C10.5667 7.65181 10.6767 7.69183 10.7867 7.69183C10.9067 7.69183 11.0242 7.64932 11.1192 7.56432L13.2442 5.6643C13.3467 5.5718 13.4067 5.44181 13.4117 5.30431C13.4167 5.16681 13.3617 5.03432 13.2667 4.93682V4.93182ZM4.52924 11.6693L3.78174 10.9218L8.57924 5.68432L9.76674 6.87182L4.52924 11.6718V11.6693ZM10.8092 6.49932L8.95174 4.64181L10.1842 3.26431L12.1867 5.26681L10.8092 6.49932Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/new-relic-ai" aria-label="New Relic AI" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">New Relic AI</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00108 8.82999C8.45858 8.82999 8.82858 8.45999 8.82858 8.00249C8.82858 7.54499 8.45858 7.17499 8.00108 7.17499C7.54358 7.17499 7.17358 7.54499 7.17358 8.00249C7.17358 8.45999 7.54358 8.82999 8.00108 8.82999Z" fill="#F9FAFA"/>
  <path d="M8.0012 14.02C4.6812 14.02 1.9812 11.32 1.9812 7.99998C1.9812 4.67998 4.6812 1.97998 8.0012 1.97998C9.5937 1.97998 11.1012 2.60999 12.2462 3.75499L11.5387 4.46248C10.5837 3.50748 9.3262 2.97998 8.0012 2.97998C5.2337 2.97998 2.9812 5.23248 2.9812 7.99998C2.9812 10.7675 5.2337 13.02 8.0012 13.02C10.6012 13.02 12.7462 11.035 12.9962 8.49998H11.2212C10.9812 10.06 9.6262 11.26 7.9987 11.26C6.2012 11.26 4.7387 9.79748 4.7387 7.99998C4.7387 6.20248 6.2012 4.73999 7.9987 4.73999C8.8812 4.73999 9.7012 5.07748 10.3112 5.68748L9.6037 6.39499C9.1812 5.97249 8.6112 5.73999 7.9987 5.73999C6.7537 5.73999 5.7387 6.75498 5.7387 7.99998C5.7387 9.24498 6.7537 10.26 7.9987 10.26C9.2437 10.26 10.2587 9.24498 10.2587 7.99998V7.49998H14.0187V7.99998C14.0187 11.32 11.3187 14.02 7.9987 14.02H8.0012Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/errors-inbox" aria-label="Errors Inbox" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Errors Inbox</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.65 10.9488L13.905 9.98126L12.4275 9.59376C12.4575 9.38876 12.4775 9.17876 12.4775 8.96626C12.4775 8.69376 12.45 8.43126 12.4025 8.17126L13.7175 7.45376L13.2375 6.57626L12.11 7.19126C11.695 6.22876 10.9525 5.44126 10.025 4.96376C10.275 4.40626 10.8125 3.51376 11.675 3.51376C11.95 3.51376 12.175 3.28876 12.175 3.01376C12.175 2.73876 11.95 2.51376 11.675 2.51376C10.2125 2.51376 9.42247 3.84626 9.08747 4.60876C8.72997 4.51626 8.35997 4.46376 7.97497 4.46376C7.58997 4.46376 7.23247 4.51626 6.88247 4.60376C6.55997 3.85126 5.76747 2.46376 4.27497 2.46376C3.99997 2.46376 3.77497 2.68876 3.77497 2.96376C3.77497 3.23876 3.99997 3.46376 4.27497 3.46376C5.15997 3.46376 5.69997 4.40126 5.94247 4.95376C5.00747 5.42876 4.25747 6.22126 3.83997 7.18876L2.71247 6.57376L2.23247 7.45126L3.54747 8.16876C3.49997 8.42626 3.47247 8.69126 3.47247 8.96376C3.47247 9.18126 3.49247 9.39376 3.52247 9.60376L2.09497 9.97876L2.34997 10.9463L3.77497 10.5713C3.95747 11.0438 4.21247 11.4788 4.53247 11.8588L3.48997 12.7913L4.15497 13.5363L5.26247 12.5463C6.01747 13.1188 6.95497 13.4613 7.97247 13.4613C8.98997 13.4613 9.94997 13.1088 10.71 12.5263L11.84 13.5363L12.505 12.7913L11.435 11.8338C11.7475 11.4563 11.9975 11.0263 12.175 10.5588L13.645 10.9463L13.65 10.9488ZM7.97747 5.46626C8.34747 5.46626 8.70497 5.52626 9.03997 5.63126C9.09497 5.68126 9.15997 5.72126 9.23747 5.74376C9.28497 5.75626 9.32997 5.76376 9.37747 5.76376C9.37997 5.76376 9.38247 5.76376 9.38497 5.76376C10.1525 6.10376 10.7725 6.70876 11.135 7.46626H4.81997C5.38247 6.28626 6.58497 5.46626 7.97747 5.46626ZM4.51747 8.46626H7.47747V12.4263C5.78497 12.1813 4.47747 10.7263 4.47747 8.96626C4.47747 8.79626 4.49497 8.63126 4.51747 8.46626ZM8.47747 12.4263V8.46626H11.4375C11.46 8.63126 11.4775 8.79626 11.4775 8.96626C11.4775 10.7263 10.17 12.1813 8.47747 12.4263Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/alerts" aria-label="Alerts" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Alerts</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00012 1.98875L2.49512 4.98125V11.0188L8.00012 14.0113L13.5051 11.0188V4.98125L8.00012 1.98875ZM12.5051 10.4238L8.00012 12.8713L3.49512 10.4238V5.57626L8.00012 3.12876L12.5051 5.57626V10.4238Z" fill="#F9FAFA"/>
  <path d="M8.49512 5.50359H7.49512V8.94109H8.49512V5.50359Z" fill="#F9FAFA"/>
  <path d="M8.49512 9.49609H7.49512V10.4961H8.49512V9.49609Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/dashboards" aria-label="Dashboards" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Dashboards</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.5 2.5H2.5C2.225 2.5 2 2.725 2 3V11C2 11.275 2.225 11.5 2.5 11.5H7.5V12.5H5.5V13.5H10.5V12.5H8.5V11.5H13.5C13.775 11.5 14 11.275 14 11V3C14 2.725 13.775 2.5 13.5 2.5ZM13 10.5H3V3.5H13V10.5Z" fill="#F9FAFA"/>
  <path d="M7.62497 9.4675V8.44749C7.09997 8.31249 6.68747 7.9 6.55247 7.375H5.53247C5.69497 8.4525 6.54747 9.305 7.62497 9.4675Z" fill="#F9FAFA"/>
  <path d="M10.495 7C10.495 5.75 9.575 4.715 8.375 4.5325V5.55251C9.02 5.72001 9.495 6.305 9.495 7C9.495 7.695 9.02 8.27999 8.375 8.44749V9.4675C9.575 9.2875 10.495 8.25 10.495 7Z" fill="#F9FAFA"/>
  <path d="M7.62497 5.55251V4.5325C6.54747 4.695 5.69497 5.5475 5.53247 6.625H6.55247C6.68747 6.1 7.09997 5.68751 7.62497 5.55251Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/change-tracking" aria-label="Change Tracking" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Change Tracking</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.47137 12.245H6.46887C6.26637 12.245 6.08387 12.12 6.00887 11.9325L4.82387 9.01502L4.17887 10.45C4.09887 10.63 3.91887 10.745 3.72387 10.745H2.02637V9.74752H3.39887L4.39137 7.54002C4.47137 7.36002 4.65137 7.24502 4.84637 7.24502H4.85637C5.05637 7.24752 5.23387 7.37252 5.31137 7.55752L6.48137 10.4375L8.53887 5.55502C8.61887 5.36502 8.80387 5.23502 9.01137 5.25002C9.21637 5.25502 9.39887 5.38502 9.46887 5.57752L11.3589 10.735L13.9739 10.745L13.9689 11.745L11.0064 11.7325C10.7964 11.7325 10.6114 11.6 10.5389 11.405L8.96637 7.11502L6.93137 11.94C6.85387 12.125 6.67137 12.245 6.47137 12.245Z" fill="#F9FAFA"/>
  <path d="M9.03638 13.25C9.45138 13.25 9.78638 12.915 9.78638 12.5C9.78638 12.085 9.45138 11.75 9.03638 11.75C8.62138 11.75 8.28638 12.085 8.28638 12.5C8.28638 12.915 8.62138 13.25 9.03638 13.25Z" fill="#F9FAFA"/>
  <path d="M9.03638 4.25C9.45138 4.25 9.78638 3.915 9.78638 3.5C9.78638 3.085 9.45138 2.75 9.03638 2.75C8.62138 2.75 8.28638 3.085 8.28638 3.5C8.28638 3.915 8.62138 4.25 9.03638 4.25Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/platform/explorer" aria-label="Entity Explorer" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Entity Explorer</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M11.255 6.94498V3.87498L7.99999 2.04498L4.74499 3.87498V6.94498L1.98999 8.46748V12.155L5.24499 13.955L7.99999 12.4325L10.755 13.955L14.01 12.155V8.46748L11.255 6.94498ZM5.74499 4.45998L7.99999 3.19249L10.255 4.45998V6.94498L7.99999 8.19249L5.74499 6.94498V4.45998ZM5.24499 12.8125L2.98999 11.565V9.05748L5.24499 7.80998L7.49999 9.05748V11.565L5.24499 12.8125ZM13.01 11.565L10.755 12.8125L8.49999 11.565V9.05748L10.755 7.80998L13.01 9.05748V11.565Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
                      
      


<li class="n01-link rounded border-solid border-transparent hover:border-nr-green focus:border-nr-green text-sm border p-[3px] pl-4 transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <a href="/instant-observability" aria-label="Integrations" class="flex flex-row grow justify-between items-stretch gap-2" itemprop="url">
    <div  class="text-sm inline-block flex items-center group-hover:text-nr-white" itemprop="name">Integrations</div>
          <div class="invisible group-hover:visible bg-nr-glass rounded-sm flex items-center">
        <div class="p-[5px]">
          <span>              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.7487 4.39251L10.0987 2.26751C9.94372 2.17751 9.75372 2.17751 9.59872 2.26751L5.89872 4.39251L2.24872 6.51751C2.09372 6.60751 2.00122 6.77251 2.00122 6.95001V11.175C2.00122 11.3525 2.09622 11.5175 2.24872 11.6075L5.89872 13.7325C5.97622 13.7775 6.06372 13.8 6.15122 13.8C6.23872 13.8 6.32372 13.7775 6.40122 13.7325L10.1012 11.6075L13.7512 9.48251C13.9062 9.39251 13.9987 9.22751 13.9987 9.05001V4.82501C13.9987 4.64751 13.9037 4.48251 13.7512 4.39251H13.7487ZM9.34622 10.31L6.64622 8.76V5.68753L9.34622 7.23751V10.31ZM6.14872 12.7225L2.99622 10.8875V7.23751L5.64622 5.695V9.05001C5.64622 9.23001 5.74122 9.39501 5.89622 9.48251L8.84122 11.175L6.14622 12.7225H6.14872ZM12.9962 8.76251L10.3462 10.305V6.95001C10.3462 6.77001 10.2512 6.60501 10.0962 6.51751L7.15122 4.82501L9.84622 3.27752L12.9987 5.11251V8.76251H12.9962Z" fill="#F9FAFA"/>
</svg>

  

  </span>
        </div>
      </div>
      </a>
</li>
  
  
	</ul>
  </div>


  
      </div>
      </div>

  
  
              </div>
            </div>
          </div>
              </li>
                                      <li  class="js-header-site-nav-item border-b border-b-gray-4 larger:border-0" itemscope itemtype="https://schema.org/SiteNavigationElement">
                  <a class="js-header-site-nav-focusable px-10 py-[17px] larger:py-[34px] larger:px-2 largest:px-4 focus-inset focus:outline-4 js-parent-expanded:border-b border-b-gray-4 js-parent-expanded:flex-row-reverse js-parent-expanded:justify-end larger:inline-block larger:js-parent-expanded:border-b-0 larger:border-b-0 js-header-site-nav-button flex w-full items-center justify-between header-site-nav__item-link" href="/pricing" itemprop="url">
            <span  class="text-lg larger:text-base xlarge:text-lg" itemprop="name">      Pricing
  </span>
                      </a>
                      </li>
                <li  class="js-header-site-nav-item border-b border-b-gray-4 larger:border-0" itemscope itemtype="https://schema.org/SiteNavigationElement">
                  <button class="js-header-site-nav-focusable px-10 py-[17px] larger:py-[34px] larger:px-2 largest:px-4 focus-inset focus:outline-4 js-parent-expanded:border-b border-b-gray-4 js-parent-expanded:flex-row-reverse js-parent-expanded:justify-end larger:inline-block larger:js-parent-expanded:border-b-0 larger:border-b-0 js-header-site-nav-button flex w-full items-center justify-between header-site-nav__item-link" aria-haspopup="menu">
            <span  class="text-lg larger:text-base xlarge:text-lg">      Solutions
  </span>
            <span class="larger:hidden -rotate-90 js-parent-expanded:rotate-90 js-parent-expanded:-ml-2.5 transition-transform"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 12.5 7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
</span>
          </button>
                          <div class="js-subnav hidden larger:block larger:invisible larger:opacity-0 larger:absolute larger:left-0 larger:right-0 larger:-translate-x-4 transition-all js-parent-expanded:block js-parent-expanded:visible js-parent-expanded:opacity-100 js-parent-expanded:translate-x-0 border border-solid border-transparent medium:gradient-nav-black">
            <div  class="text-nr-white larger:nr-fluid-container mx-auto">
              <div>
                              


  
<div  class="grid grid-flow-row gap-6 items-start px-10 header-nav-fourcol--3-3-3-3 larger:grid-flow-col larger:grid-cols-12 larger:px-0 larger:mb-12">
            

  <div class="row-end-5 py-8 larger:row-end-auto larger:col-span-3 bg- larger:px-0 larger:pt-12 column--index-1 grid gap-8 grid-cols-1">
                        
  

  <div  class="n03-promo-list flex flex-col gap-7 bg-nr-extra-black medium:bg-transparent -mx-10 medium:mx-0 p-10 medium:p-0">
          <div class="text-style-h5 hidden large:block">
        Solutions
      </div>
        <ul  class="flex flex-col gap-8 grow m-0 js-svelte-carousel" data-show-dots="true" data-dots-style="circle" data-slide-class="js-n03-promo-slide" data-autoplay="true" data-autoplay-speed="10000" data-disable-autoplay-screen-size="768" data-accent-color="n03-promo-dots w-2 h-2 rounded-full bg-gray-4" data-accent-color2="n03-promo-dots w-2 h-2 rounded-full bg-nr-green">
              

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/how-to-relic/customers-apm-monitoring"  class="text-sm" aria-label="      Customers on APM
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="40" height="41" alt="APM icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/solutions-apm.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                Customers on APM
  
        </div>
            <div class="text-gray-2">
              Customers on managing distributed systems, improving user experience, and more.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/how-to-relic/igs-cut-costs-observability-monitoring"  class="text-sm" aria-label="      IGS Cut Costs
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="40" height="41" alt="Kubernetes icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/solutions-kubernates.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                IGS Cut Costs
  
        </div>
            <div class="text-gray-2">
              How IGS cut costs while improving monitoring.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/customers/william-hill"  class="text-sm" aria-label="      William Hill
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="40" height="41" alt="Ecommerce icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/solutions-ecommerce.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                William Hill
  
        </div>
            <div class="text-gray-2">
              William Hill improves MTTR by 80%.
  
      </div>
    </a>
  </li>



  
    </ul>
          <div class="n03-promo-list__cta" itemscope itemtype="https://schema.org/SiteNavigationElement">
        
		



		
		




    
	<a  href="/customers" aria-label="View Customer Stories" itemprop="url" class="btn-secondary small:inline-flex w-full medium:w-fit group dark max-w-full" >
		<div class="h-6 overflow-hidden">
			<div class="transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col">
				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block" itemprop="name">
										View Customer Stories
				</span>
        				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										View Customer Stories
				</span>
			</div>
		</div>
	</a>
      </div>
      </div>


      </div>
          

  <div class="larger:col-span-3 pt-10 larger:pt-12 column--index-2 grid gap-8">
          
              
      	

	
<div class="n01-link-list -mx-5 medium:mx-0">
			<div class="text-sm text-gray-2 dark:text-nr-white ml-4 min-h-[16px]">
			      Use Cases
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/practices/reactive-to-responsive" aria-label="Go from reactive to responsive" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Go from reactive to responsive</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/devops" aria-label="DevOps" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">DevOps</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/cloud-adoption" aria-label="Cloud Adoption" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Cloud Adoption</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/tool-consolidation" aria-label="Tool Consolidation" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Tool Consolidation</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/topic/digital-customer-experience" aria-label="Digital Customer Experience" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Digital Customer Experience</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/open-source" aria-label="Open Source" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Open Source</div>
											</div>
	</a>
</li>
  
  
	</ul>
  </div>


  
      </div>
          

  <div class="larger:col-span-3 larger:pt-12 column--index-3 grid gap-8">
          
              
      	

	
<div class="n01-link-list -mx-5 medium:mx-0">
			<div class="text-sm text-gray-2 dark:text-nr-white ml-4 min-h-[16px]">
			      Industries
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/industry/retail-and-ecommerce-monitoring" aria-label="Ecommerce &amp; Retail" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Ecommerce &amp; Retail</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/industry/healthcare" aria-label="Healthcare" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Healthcare</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/industry/digital-media-monitoring" aria-label="Media &amp; Entertainment" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Media &amp; Entertainment</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/industry/startups" aria-label="New Relic for Startups" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">New Relic for Startups</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/social-impact/signup" aria-label="Non Profit" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Non Profit</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/industry/public-sector" aria-label="Public Sector" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Public Sector</div>
											</div>
	</a>
</li>
  
  
	</ul>
  </div>


  
      </div>
          

  <div class="larger:col-span-3 larger:pt-12 larger:pr-8 column--index-4 grid gap-8">
          
              
      	

	
<div class="n01-link-list -mx-5 medium:mx-0">
			<div class="text-sm text-gray-2 dark:text-nr-white ml-4 min-h-[16px]">
			      Technologies
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/partners/aws-monitoring" aria-label="Amazon Web Services" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Amazon Web Services</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/partners/gcp" aria-label="Google Cloud Platform" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Google Cloud Platform</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/partners/azure" aria-label="Microsoft Azure" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Microsoft Azure</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/partners/pivotal" aria-label="Pivotal Cloud Foundry" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Pivotal Cloud Foundry</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/prometheus-monitoring" aria-label="Prometheus Monitoring" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Prometheus Monitoring</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/sap" aria-label="SAP Monitoring" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">SAP Monitoring</div>
											</div>
	</a>
</li>
  
  
	</ul>
  </div>


  
      </div>
      </div>

  
                

  
<div  class="grid grid-flow-row items-start px-10 medium:mb-12 header-nav-twocol--3-9 larger:grid-flow-col larger:grid-cols-12 larger:gap-6 larger:px-0">
            

          

  <div class="w-full grid-cols-1 larger:col-span-9 larger:col-start-4 larger:pt-12 column--index-2 grid gap-8">
                    
	  

  <div  class="n03-promo-list flex flex-col gap-7 bg-nr-extra-black medium:bg-transparent -mx-10 medium:mx-0 p-10 medium:p-0">
        <ul  class="flex flex-col gap-8 grow m-0 js-svelte-carousel medium:gradient-border-dark medium:border border-solid border-transparent rounded hover:border-nr-green relative" data-show-dots="true" data-dots-style="circle" data-slide-class="js-n03-promo-slide" data-autoplay="true" data-autoplay-speed="10000" data-disable-autoplay-screen-size="768" data-accent-color="n03-promo-dots w-2 h-2 rounded-full bg-gray-4" data-accent-color2="n03-promo-dots w-2 h-2 rounded-full bg-nr-green">
              

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/observability-forecast/2023/state-of-observability"  class="text-sm" aria-label="      Observability Forecast
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="24" height="24" alt="apm icon" loading="eager" class="svg-image" src=/sites/default/files/2023-09/APM.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                Observability Forecast
  
        </div>
            <div class="text-gray-2">
              Double your ROI through observability. Dive into the data.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/how-to-relic/change-tracking-deployments-10x-banking"  class="text-sm" aria-label="      10x Banking
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="41" height="40" alt="Magnify icon" loading="eager" class="svg-image" src=/sites/default/files/2023-09/solutions-magnifying.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                10x Banking
  
        </div>
            <div class="text-gray-2">
              Discover how 10x Banking masters zero-impact deployments with New Relic.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/how-to-relic/how-to-monitor-azure-with-new-relic"  class="text-sm" aria-label="      Monitor Azure
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="24" height="24" alt="Lock icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/platform-iast.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                Monitor Azure
  
        </div>
            <div class="text-gray-2">
              Harness Azure&#039;s full potential with New Relic&#039;s insights.
  
      </div>
    </a>
  </li>



  
    </ul>
      </div>


      </div>
      </div>

  
  
              </div>
            </div>
          </div>
              </li>
                <li  class="js-header-site-nav-item border-b border-b-gray-4 larger:border-0" itemscope itemtype="https://schema.org/SiteNavigationElement">
                  <button class="js-header-site-nav-focusable px-10 py-[17px] larger:py-[34px] larger:px-2 largest:px-4 focus-inset focus:outline-4 js-parent-expanded:border-b border-b-gray-4 js-parent-expanded:flex-row-reverse js-parent-expanded:justify-end larger:inline-block larger:js-parent-expanded:border-b-0 larger:border-b-0 js-header-site-nav-button flex w-full items-center justify-between header-site-nav__item-link" aria-haspopup="menu">
            <span  class="text-lg larger:text-base xlarge:text-lg">      Developers
  </span>
            <span class="larger:hidden -rotate-90 js-parent-expanded:rotate-90 js-parent-expanded:-ml-2.5 transition-transform"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 12.5 7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
</span>
          </button>
                          <div class="js-subnav hidden larger:block larger:invisible larger:opacity-0 larger:absolute larger:left-0 larger:right-0 larger:-translate-x-4 transition-all js-parent-expanded:block js-parent-expanded:visible js-parent-expanded:opacity-100 js-parent-expanded:translate-x-0 border border-solid border-transparent medium:gradient-nav-black">
            <div  class="text-nr-white larger:nr-fluid-container mx-auto">
              <div>
                            

      


  
<div  class="grid grid-flow-row gap-10 px-10 items-start header-nav-threecol--3-3-6 larger:grid-flow-col larger:grid-cols-12 larger:gap-6 larger:mb-12 larger:pt-0 larger:px-0">
            

  <div class="row-end-4 large:row-end-auto large:col-span-3 large:pt-12 column--index-1 grid gap-8 grid-cols-1">
                        
  

  <div  class="n03-promo-list flex flex-col gap-7 bg-nr-extra-black medium:bg-transparent -mx-10 medium:mx-0 p-10 medium:p-0">
          <div class="text-style-h5 hidden large:block">
        Developers
      </div>
        <ul  class="flex flex-col gap-8 grow m-0 js-svelte-carousel" data-show-dots="true" data-dots-style="circle" data-slide-class="js-n03-promo-slide" data-autoplay="true" data-autoplay-speed="10000" data-disable-autoplay-screen-size="768" data-accent-color="n03-promo-dots w-2 h-2 rounded-full bg-gray-4" data-accent-color2="n03-promo-dots w-2 h-2 rounded-full bg-nr-green">
              

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/how-to-relic/simplify-your-kubernetes-monitoring-with-the-new-relic-operator"  class="text-sm" aria-label="      Simple K8 Monitoring
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="41" height="40" alt="Kubernetes icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/developers-kubernates.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                Simple K8 Monitoring
  
        </div>
            <div class="text-gray-2">
              Simplify your Kubernetes monitoring with the New Relic operator.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/how-to-relic/monitor-hybrid-mobile-apps"  class="text-sm" aria-label="      Monitor Mobile Apps
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="41" height="41" alt="Mobile monitoring icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/developers-mobile-monitoring.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                Monitor Mobile Apps
  
        </div>
            <div class="text-gray-2">
              Monitor hybrid mobile apps in minutes with quickstart installations.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/how-to-relic/custom-instrumentation-with-the-new-relic-browser-agent"  class="text-sm" aria-label="      New Relic Browser Agent
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="40" height="41" alt="Browser monitoring icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/developers-browser-tracking.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                New Relic Browser Agent
  
        </div>
            <div class="text-gray-2">
              Custom instrumentation with the New Relic browser agent.
  
      </div>
    </a>
  </li>



  
    </ul>
      </div>


      </div>
          

  <div class="large:col-span-3 pt-10 large:pt-12 column--index-2 grid gap-8">
          
              
      	

	
<div class="n01-link-list -mx-5 medium:mx-0">
			<div class="text-sm text-gray-2 dark:text-nr-white ml-4 min-h-[16px]">
			      Popular Docs
  
		</div>
		<ul  class="flex flex-col mb-0">
		                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://docs.newrelic.com/docs/new-relic-solutions/get-started/quick-launch-guide/" aria-label="Start ingesting data" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Start ingesting data</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://docs.newrelic.com/docs/query-your-data/explore-query-data/dashboards/introduction-dashboards/" aria-label="Create custom dashboards" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Create custom dashboards</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/introduction-nrql-new-relics-query-language/" aria-label="Examine NRQL queries" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Examine NRQL queries</div>
											</div>
	</a>
</li>
  
                      
      





<li class="n01-link border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://docs.newrelic.com/docs/logs/forward-logs/forward-your-logs-using-infrastructure-agent/" aria-label="Forward logs using infrastructure agent" class="medium:inline-block flex flex-row gap-4" itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Forward logs using infrastructure agent</div>
											</div>
	</a>
</li>
  
  
	</ul>
      <div class="flex gap-4 mt-6" itemscope itemtype="https://schema.org/SiteNavigationElement">
      
		



		
												




    
	<a  href="https://docs.newrelic.com/" aria-label="View All Docs" itemprop="url" class="btn-tertiary small:inline-flex w-full medium:w-fit group ml-4 max-w-full border-b no-underline w-fit text-sm" >
		<div class="h-[22px] overflow-hidden">
			<div class="transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col">
				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block" itemprop="name">
										View All Docs
				</span>
        				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										View All Docs
				</span>
			</div>
		</div>
	</a>
    </div>
  </div>


  
      </div>
          

  <div class="large:col-span-6 large:pt-12 column--index-3 grid gap-8">
          

<div class="n04-integrations">
			<div class="text-sm text-gray-2 dark:text-nr-white mb-4">      700+ Integrations
  </div>
				<div class="text-style-body mb-6">
		
            <div>Start now for free.</div>
      
		</div>
		<div  class="flex flex-row flex-wrap items-start gap-2 mb-6 large:mb-12 relative">
		      



      
<div  class="n04-integrations-items w-full large:w-[48.5%] group p-2 rounded border border-transparent gradient-border-black btn-hover relative" itemscope itemtype="https://schema.org/SiteNavigationElement">
	  		<a href="/instant-observability/python"  class="flex flex-row gap-3 grow justify-between items-center relative z-10" itemprop="url">
		<div  class="flex child-m-auto svg-opacity-100 bg-nr-extra-black rounded-sm w-12 h-12 group-hover:svg-nr-green-fill group-hover:opacity-100">               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9135 0C5.8208 4.36975e-07 6.20127 2.65599 6.20127 2.65599L6.20806 5.40757H12.0222V6.23373H3.89871C3.89871 6.23373 0 5.78926 0 11.969C-4.347e-07 18.1488 3.40289 17.9296 3.40289 17.9296H5.43375V15.062C5.43375 15.062 5.32428 11.6413 8.7823 11.6413C12.2403 11.6413 14.5489 11.6413 14.5489 11.6413C14.5489 11.6413 17.7887 11.6939 17.7887 8.49371C17.7887 5.29347 17.7887 3.20221 17.7887 3.20221C17.7887 3.20221 18.2806 0 11.9135 0ZM8.70758 1.85032C9.28604 1.85032 9.75358 2.3203 9.75358 2.90179C9.75358 3.48328 9.28604 3.95326 8.70758 3.95326C8.12912 3.95326 7.66159 3.48328 7.66159 2.90179C7.66159 2.3203 8.12912 1.85032 8.70758 1.85032Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M12.0863 24C18.179 24 17.7986 21.344 17.7986 21.344L17.7918 18.5924H11.9776V17.7663H20.1011C20.1011 17.7663 23.9998 18.2107 23.9998 12.031C23.9998 5.85121 20.5969 6.07036 20.5969 6.07036H18.5661V8.93801C18.5661 8.93801 18.6755 12.3587 15.2175 12.3587C11.7595 12.3587 9.45095 12.3587 9.45095 12.3587C9.45095 12.3587 6.21108 12.3061 6.21108 15.5063C6.21108 18.7065 6.21108 20.7978 6.21108 20.7978C6.21108 20.7978 5.71918 24 12.0863 24ZM15.2922 22.1497C14.7138 22.1497 14.2462 21.6797 14.2462 21.0982C14.2462 20.5167 14.7138 20.0467 15.2922 20.0467C15.8707 20.0467 16.3382 20.5167 16.3382 21.0982C16.3382 21.6797 15.8707 22.1497 15.2922 22.1497Z" fill="#F9FAFA" fill-opacity="0.5"/>
</svg>

  

   </div>
	<div  class="group-hover:text-nr-green group-hover:opacity-100 grow text-left text-style-small" itemprop="name"> 
            <div>Python</div>
       </div>
	<div  class="flex bg-nr-extra-black rounded-2xl text-style-small items-center h-8 px-4 group-hover:text-nr-green group-hover:opacity-100"> Install </div>
	  		</a>
	</div>

      



      
<div  class="n04-integrations-items w-full large:w-[48.5%] group p-2 rounded border border-transparent gradient-border-black btn-hover relative" itemscope itemtype="https://schema.org/SiteNavigationElement">
	  		<a href="/instant-observability/java"  class="flex flex-row gap-3 grow justify-between items-center relative z-10" itemprop="url">
		<div  class="flex child-m-auto svg-opacity-100 bg-nr-extra-black rounded-sm w-12 h-12 group-hover:svg-nr-green-fill group-hover:opacity-100">               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 21" fill="none">
  <g clip-path="url(#clip0_3182_11652)">
    <path d="M11.44 1.61005C12.06 0.310048 11.08 0.320048 10.65 0.640048C10.31 0.890048 10.17 1.43005 10.04 1.94005C10.01 2.07005 9.96997 2.20005 9.93997 2.33005C9.67997 2.05005 9.59997 1.58005 9.51997 1.13005C9.42997 0.580048 9.33997 0.0800481 8.91997 0.0200481C8.20997 -0.0799519 8.19997 0.270048 8.18997 0.760048C8.18997 0.790048 8.18997 0.820048 8.18997 0.860048C8.16997 1.39005 8.25997 1.77005 8.49997 2.68005C8.12997 2.40005 7.93997 1.98005 7.77997 1.62005C7.57997 1.17005 7.41997 0.820048 7.01997 0.970048C6.29997 1.23005 6.48997 1.85005 6.74997 2.52005C7.00997 3.19005 7.34997 3.84005 7.92997 4.42005C7.27997 4.53005 6.39997 4.81005 6.63997 5.49005C6.79997 5.94005 7.09997 5.86005 7.42997 5.77005C7.58997 5.73005 7.75997 5.68005 7.92997 5.69005C8.17997 5.71005 8.39997 5.84005 8.61997 5.98005C8.83997 6.12005 9.05997 6.25005 9.30997 6.27005C9.81997 6.31005 9.92997 7.29005 9.88997 8.08005C9.84997 8.80005 8.95997 9.31005 8.49997 8.85005C6.39997 5.33005 3.65997 2.88005 2.51997 2.24005C2.86997 2.96005 2.74997 7.13005 2.42997 9.93005C2.17997 11.24 1.66997 11.91 1.26997 12.44C0.969971 12.83 0.739971 13.15 0.709971 13.59C0.679971 14.16 0.769971 14.46 0.869971 14.76C0.959971 15.03 1.04997 15.31 1.03997 15.79C1.01997 16.4 0.689971 16.79 0.409971 17.12C0.219971 17.34 0.0599711 17.53 0.00997111 17.75C-0.100029 18.3 0.469971 18.47 0.799971 18.47C0.899971 18.47 0.989971 18.35 1.07997 18.15C1.04997 18.5 1.01997 18.85 1.00997 19.19C0.959971 20.21 1.10997 20.61 1.77997 20.61C2.28997 20.61 2.86997 20.14 3.50997 19.61C4.32997 18.93 5.25997 18.16 6.30997 18.2C7.40997 18.23 8.06997 19.21 8.60997 20.01C8.97997 20.56 9.28997 21.03 9.64997 21.02C10.53 21 11.23 20.7 11.24 17.99C11.24 15.59 10.65 13.32 9.76997 11.3C9.53997 10.51 9.64997 9.58005 10.09 8.96005C10.36 8.57005 10.35 7.92005 10.33 7.30005C10.32 6.85005 10.31 6.41005 10.42 6.14005C10.53 5.86005 10.69 5.74005 10.86 5.61005C11.09 5.43005 11.34 5.24005 11.45 4.65005C11.53 4.24005 11.44 3.87005 11.35 3.51005C11.22 2.97005 11.09 2.41005 11.46 1.64005L11.44 1.61005ZM1.35997 14.78C1.24997 14.52 1.15997 14.27 1.15997 14.01C1.15997 13.4 1.92997 12.3 1.84997 13.15C1.71997 13.78 1.59997 14.44 1.48997 15.11C1.44997 15 1.40997 14.89 1.36997 14.79L1.35997 14.78ZM10.64 17.4C10.58 20.6 10.24 20.39 9.71997 20.41C9.19997 20.43 8.34997 17.59 6.19997 17.57C4.04997 17.55 2.73997 20.1 1.81997 20C0.899971 19.9 2.70997 11.98 2.99997 10.57C3.12997 10.48 3.26997 10.38 3.40997 10.29C3.02997 9.55005 3.07997 8.71005 3.68997 8.10005C4.25997 7.53005 5.15997 7.14005 5.97997 7.27005C6.64997 7.38005 7.18997 7.75005 7.42997 8.34005C7.47997 8.34005 7.52997 8.32005 7.57997 8.32005C8.72997 10.12 10.69 14.21 10.63 17.41L10.64 17.4Z" fill="#F9FAFA" fill-opacity="0.5"/>
    <path d="M7.17 9.16994C7.09 9.97994 6.44999 10.6199 5.67999 10.8099C4.85999 11.0099 3.96 10.6899 3.66 9.84994C3.51 9.41994 3.53999 8.97994 3.79999 8.59994C4.01999 8.27994 4.36999 8.02994 4.71999 7.86994C5.43999 7.53994 6.46 7.50994 6.96 8.22994C7.15 8.50994 7.18 8.82994 7.17 9.14994V9.16994Z" fill="#F9FAFA" fill-opacity="0.5"/>
  </g>
  <defs>
    <clipPath id="clip0_3182_11652">
      <rect width="11.65" height="21" fill="white"/>
    </clipPath>
  </defs>
</svg>

  

   </div>
	<div  class="group-hover:text-nr-green group-hover:opacity-100 grow text-left text-style-small" itemprop="name"> 
            <div>Java</div>
       </div>
	<div  class="flex bg-nr-extra-black rounded-2xl text-style-small items-center h-8 px-4 group-hover:text-nr-green group-hover:opacity-100"> Install </div>
	  		</a>
	</div>

      



      
<div  class="n04-integrations-items w-full large:w-[48.5%] group p-2 rounded border border-transparent gradient-border-black btn-hover relative" itemscope itemtype="https://schema.org/SiteNavigationElement">
	  		<a href="/instant-observability/php"  class="flex flex-row gap-3 grow justify-between items-center relative z-10" itemprop="url">
		<div  class="flex child-m-auto svg-opacity-100 bg-nr-extra-black rounded-sm w-12 h-12 group-hover:svg-nr-green-fill group-hover:opacity-100">               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 32 16" fill="none">
  <path d="M2.51975 3.36612H7.24209C8.62814 3.37776 9.63252 3.77738 10.2552 4.56432C10.8779 5.35127 11.0834 6.42613 10.8719 7.7889C10.7898 8.41161 10.6076 9.02235 10.3257 9.62145C10.0554 10.2206 9.67973 10.7608 9.19798 11.2426C8.61052 11.8533 7.98216 12.2409 7.31257 12.4055C6.64299 12.5701 5.9498 12.6522 5.23334 12.6522H3.11886L2.44927 16.0001H0L2.51975 3.36612V3.36612ZM4.58137 5.37487L3.52413 10.6611C3.59461 10.6727 3.6651 10.6787 3.73558 10.6787C3.8177 10.6787 3.90015 10.6787 3.98227 10.6787C5.10999 10.6903 6.04987 10.579 6.80157 10.3439C7.55328 10.0972 8.05863 9.23978 8.31695 7.77128C8.5284 6.53784 8.31695 5.82703 7.68261 5.63918C7.0599 5.45134 6.27894 5.36324 5.33906 5.37487C5.19809 5.38651 5.06311 5.3925 4.93378 5.3925C4.81642 5.3925 4.69308 5.3925 4.56375 5.3925L4.58137 5.37487" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M13.661 0H16.0927L15.4055 3.36555H17.5904C18.7886 3.38915 19.6813 3.63584 20.2688 4.10561C20.8679 4.57539 21.0441 5.46839 20.7974 6.78395L19.6168 12.6516H17.1499L18.2776 7.04826C18.395 6.4608 18.3598 6.04389 18.1719 5.7972C17.9841 5.55051 17.5788 5.42716 16.9561 5.42716L15.0002 5.40954L13.5553 12.6516H11.1237L13.661 0Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M23.4087 3.36612H28.131C29.5171 3.37776 30.5214 3.77738 31.1441 4.56432C31.7668 5.35127 31.9723 6.42613 31.7609 7.7889C31.6787 8.41161 31.4966 9.02235 31.2146 9.62145C30.9443 10.2206 30.5686 10.7608 30.0869 11.2426C29.4994 11.8533 28.8711 12.2409 28.2015 12.4055C27.5319 12.5701 26.8387 12.6522 26.1223 12.6522H24.0078L23.3382 16.0001H20.8889L23.4087 3.36612V3.36612ZM25.4703 5.37487L24.413 10.6611C24.4835 10.6727 24.554 10.6787 24.6245 10.6787C24.7066 10.6787 24.7891 10.6787 24.8712 10.6787C25.9989 10.6903 26.9388 10.579 27.6905 10.3439C28.4422 10.0972 28.9475 9.23978 29.2059 7.77128C29.4173 6.53784 29.2059 5.82703 28.5715 5.63918C27.9488 5.45134 27.1679 5.36324 26.228 5.37487C26.087 5.38651 25.952 5.3925 25.8227 5.3925C25.7053 5.3925 25.582 5.3925 25.4527 5.3925L25.4703 5.37487" fill="#F9FAFA" fill-opacity="0.5"/>
</svg>

  

   </div>
	<div  class="group-hover:text-nr-green group-hover:opacity-100 grow text-left text-style-small" itemprop="name"> 
            <div>PHP</div>
       </div>
	<div  class="flex bg-nr-extra-black rounded-2xl text-style-small items-center h-8 px-4 group-hover:text-nr-green group-hover:opacity-100"> Install </div>
	  		</a>
	</div>

      



      
<div  class="n04-integrations-items w-full large:w-[48.5%] group p-2 rounded border border-transparent gradient-border-black btn-hover relative" itemscope itemtype="https://schema.org/SiteNavigationElement">
	  		<a href="/instant-observability/ruby"  class="flex flex-row gap-3 grow justify-between items-center relative z-10" itemprop="url">
		<div  class="flex child-m-auto svg-opacity-100 bg-nr-extra-black rounded-sm w-12 h-12 group-hover:svg-nr-green-fill group-hover:opacity-100">               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M5.62564 14.8013C8.83025 15.2385 11.9776 15.6685 15.1874 16.1068C14.0937 14.2862 13.0285 12.5119 11.9544 10.7232C9.85015 12.0793 7.76548 13.4225 5.62615 14.8013H5.62564ZM16.0923 4.72337C15.8097 5.14773 15.5267 5.57158 15.2446 5.99594C14.2758 7.45361 13.3069 8.91128 12.3391 10.3695C12.2849 10.4509 12.2153 10.5154 12.2911 10.6402C13.2265 12.1845 14.1541 13.7334 15.0843 15.2808C15.2312 15.5252 15.3792 15.7686 15.5695 16.0032C15.7572 12.2474 15.9454 8.49156 16.1336 4.73575C16.1196 4.73162 16.1057 4.7275 16.0923 4.72389V4.72337ZM3.32544 9.53828C3.36926 9.58005 3.47806 9.60376 3.52911 9.57901C4.42629 9.13815 5.32915 8.70709 6.20623 8.22962C6.4924 8.07391 6.71258 7.79547 6.95904 7.56911C7.77528 6.82042 8.59048 6.07019 9.40517 5.31995C9.45518 5.27406 9.51397 5.2292 9.54387 5.17145C9.83675 4.59962 10.124 4.0247 10.422 3.43328C10.0667 3.29973 9.73053 3.16928 9.3897 3.05069C9.34381 3.0347 9.27059 3.06667 9.22057 3.09451C8.43167 3.53486 7.62833 3.952 6.86469 4.43256C6.48261 4.67284 6.17117 5.02759 5.83292 5.33594C5.28739 5.83351 4.74289 6.33264 4.20561 6.83898C4.06278 6.97356 3.93284 7.1267 3.82198 7.28861C3.45434 7.82383 3.09804 8.36678 2.72525 8.92469C2.93356 9.14073 3.12331 9.34698 3.32595 9.5388L3.32544 9.53828ZM6.60378 8.80712C6.15776 10.6922 5.71381 12.5671 5.25542 14.5032C7.40454 13.1183 9.50468 11.7653 11.5904 10.4215C9.93059 9.88426 8.27595 9.34853 6.60378 8.80764V8.80712ZM15.5442 4.74142C13.7282 5.04461 11.9555 5.34109 10.16 5.64067C10.7716 7.12825 11.3707 8.58592 11.9874 10.0854C13.1801 8.29356 14.349 6.53786 15.5447 4.74142H15.5442ZM6.67854 8.42144C8.31411 8.95253 9.91667 9.4728 11.5662 10.008C10.9536 8.5158 10.3622 7.07566 9.75837 5.60561C8.7297 6.54611 7.71701 7.47217 6.67854 8.42144ZM3.39298 10.6376C2.8129 12.0241 2.25294 13.3632 1.68265 14.7265C2.77887 14.694 3.84158 14.6626 4.94037 14.6301C4.42423 13.2987 3.9184 11.9932 3.39298 10.6371V10.6376ZM4.97853 13.6824C4.99194 13.6798 5.00534 13.6762 5.01926 13.6736C5.41011 12.0473 5.80714 10.4319 6.20675 8.74164C5.31575 9.20467 4.466 9.64605 3.59304 10.1003C4.03854 11.2584 4.51344 12.4799 4.97904 13.6824H4.97853ZM14.8868 4.47794C14.3665 4.34026 13.8462 4.20208 13.326 4.06492C12.5778 3.86847 11.8291 3.67408 11.0815 3.47556C10.9881 3.45081 10.9206 3.43431 10.8654 3.54723C10.6014 4.08864 10.3287 4.62592 10.0605 5.16526C10.0523 5.18176 10.0538 5.20342 10.0476 5.24519C11.6677 4.99975 13.277 4.75586 14.8857 4.51197C14.8863 4.50062 14.8863 4.48928 14.8868 4.47794ZM11.8688 3.24662C13.2657 3.63334 14.663 4.01955 16.1088 4.41967C15.8654 3.72667 15.6401 3.0842 15.4081 2.42317C14.2206 2.68666 13.0481 2.94653 11.875 3.20641C11.8729 3.21981 11.8709 3.2327 11.8688 3.24611V3.24662ZM5.33844 15.1137C4.81301 15.0534 4.27419 15.1091 3.74154 15.1179C3.30378 15.1256 2.86653 15.1421 2.42928 15.1555C2.3839 15.157 2.33904 15.1658 2.29419 15.2143C5.91129 15.5489 9.5284 15.883 13.145 16.2177C13.1476 16.2017 13.1496 16.1852 13.1522 16.1692C11.9926 16.0109 10.8334 15.8526 9.67381 15.6943C8.22903 15.4968 6.78683 15.2803 5.33844 15.1132V15.1137ZM1.75381 13.4787C2.21994 12.3974 2.684 11.3146 3.15219 10.2344C3.19911 10.1261 3.1955 10.0524 3.10372 9.96522C2.90778 9.77908 2.72628 9.57798 2.51229 9.35575C2.22303 10.784 1.94098 12.1762 1.65894 13.5689C1.66925 13.5736 1.68008 13.5787 1.69039 13.5839C1.71204 13.5493 1.73834 13.5163 1.75433 13.4792L1.75381 13.4787ZM10.9402 2.96097C11.726 2.75833 12.5237 2.59951 13.3162 2.42266C13.3672 2.41131 13.4178 2.3943 13.4683 2.37986C13.4657 2.36697 13.4631 2.35408 13.4606 2.34119C12.3442 2.49123 11.2274 2.6418 10.0543 2.79958C10.374 2.93931 10.6205 3.04347 10.9402 2.96148V2.96097Z" fill="#F9FAFA" fill-opacity="0.5"/>
</svg>

  

   </div>
	<div  class="group-hover:text-nr-green group-hover:opacity-100 grow text-left text-style-small" itemprop="name"> 
            <div>Ruby</div>
       </div>
	<div  class="flex bg-nr-extra-black rounded-2xl text-style-small items-center h-8 px-4 group-hover:text-nr-green group-hover:opacity-100"> Install </div>
	  		</a>
	</div>

  
	</div>
	<div class="flex gap-4 mt-6" itemscope itemtype="https://schema.org/SiteNavigationElement">
					
		



		
												




    
	<a  href="/instant-observability" aria-label="View All Integrations" itemprop="url" class="btn-tertiary small:inline-flex w-full medium:w-fit group max-w-full border-b no-underline w-fit text-sm" >
		<div class="h-[22px] overflow-hidden">
			<div class="transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col">
				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block" itemprop="name">
										View All Integrations
				</span>
        				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										View All Integrations
				</span>
			</div>
		</div>
	</a>
			</div>
</div>

      </div>
      </div>
  
  
                

  
<div  class="grid grid-flow-row items-start px-10 medium:mb-12 header-nav-twocol--3-9 larger:grid-flow-col larger:grid-cols-12 larger:gap-6 larger:px-0">
            

          

  <div class="w-full grid-cols-1 larger:col-span-9 larger:col-start-4 larger:pt-12 column--index-2 grid gap-8">
                    
	  

  <div  class="n03-promo-list flex flex-col gap-7 bg-nr-extra-black medium:bg-transparent -mx-10 medium:mx-0 p-10 medium:p-0">
        <ul  class="flex flex-col gap-8 grow m-0 js-svelte-carousel medium:gradient-border-dark medium:border border-solid border-transparent rounded hover:border-nr-green relative" data-show-dots="true" data-dots-style="circle" data-slide-class="js-n03-promo-slide" data-autoplay="true" data-autoplay-speed="10000" data-disable-autoplay-screen-size="768" data-accent-color="n03-promo-dots w-2 h-2 rounded-full bg-gray-4" data-accent-color2="n03-promo-dots w-2 h-2 rounded-full bg-nr-green">
              

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/observability-forecast/2023/state-of-observability"  class="text-sm" aria-label="      Observability Forecast
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="24" height="24" alt="apm icon" loading="eager" class="svg-image" src=/sites/default/files/2023-09/APM.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                Observability Forecast
  
        </div>
            <div class="text-gray-2">
              The largest, most comprehensive study on observability. Dive into the data.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/best-practices/use-iast-to-proof-exploitable-vulns"  class="text-sm" aria-label="      Secure Code with IAST
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="24" height="24" alt="Lock icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/platform-iast.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                Secure Code with IAST
  
        </div>
            <div class="text-gray-2">
              Learn how to use New Relic IAST to spot and fix vulnerabilities in your first-party code.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/how-to-relic/identify-and-resolve-host-performance"  class="text-sm" aria-label="      IT Host Fixes
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="41" height="40" alt="fix IT hosts" loading="eager" class="svg-image" src=/sites/default/files/2023-09/delvelopers-it-host-fix.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                IT Host Fixes
  
        </div>
            <div class="text-gray-2">
              Spot and solve host issues with New Relic&#039;s insights.
  
      </div>
    </a>
  </li>



  
    </ul>
      </div>


      </div>
      </div>

  
  
              </div>
            </div>
          </div>
              </li>
                <li  class="js-header-site-nav-item border-b border-b-gray-4 larger:border-0" itemscope itemtype="https://schema.org/SiteNavigationElement">
                  <button class="js-header-site-nav-focusable px-10 py-[17px] larger:py-[34px] larger:px-2 largest:px-4 focus-inset focus:outline-4 js-parent-expanded:border-b border-b-gray-4 js-parent-expanded:flex-row-reverse js-parent-expanded:justify-end larger:inline-block larger:js-parent-expanded:border-b-0 larger:border-b-0 js-header-site-nav-button flex w-full items-center justify-between header-site-nav__item-link" aria-haspopup="menu">
            <span  class="text-lg larger:text-base xlarge:text-lg">      Resources
  </span>
            <span class="larger:hidden -rotate-90 js-parent-expanded:rotate-90 js-parent-expanded:-ml-2.5 transition-transform"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9 12.5 7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
</span>
          </button>
                          <div class="js-subnav hidden larger:block larger:invisible larger:opacity-0 larger:absolute larger:left-0 larger:right-0 larger:-translate-x-4 transition-all js-parent-expanded:block js-parent-expanded:visible js-parent-expanded:opacity-100 js-parent-expanded:translate-x-0 border border-solid border-transparent medium:gradient-nav-black">
            <div  class="text-nr-white larger:nr-fluid-container mx-auto">
              <div>
                                

  
<div  class="grid grid-flow-row items-start px-10 medium:mb-12 header-nav-twocol--3-9 larger:grid-flow-col larger:grid-cols-12 larger:gap-6 larger:px-0">
            

  <div class="w-full row-end-5 py-8 larger:row-end-auto larger:col-span-3 larger:pb-0 larger:pt-12 column--index-1 grid gap-8 grid-cols-1">
          
      
  
<section class="js-n02-text n02-text--header overflow-auto large:pt-4">
        <div class="text-style-h5 mb-10 hidden large:block">Resources</div>
        <div class="text-style-body text-nr-white medium:text-gray-2 text-visited-gray mb-14 medium:mb-0">
            <ul><li><a href="/about">About Us</a></li>
	<li><a href="/about/leadership">Leadership</a></li>
	<li><a href="/about/culture">Careers</a></li>
	<li><a href="/social-impact/students">New Relic for Students</a></li>
	<li><a href="/about/newsroom">Newsroom</a></li>
	<li><a href="/about/environmental-social-governance">ESG</a></li>
</ul>
  
    </div>
    <div class="flex gap-4 mt-6">
          </div>
</section>

      </div>
          

  <div class="w-full grid-cols-1 larger:col-span-9 larger:col-start-4 larger:pt-12 column--index-2 grid gap-8">
          
              
      	

	
<div class="n01-link-list -mx-5 medium:mx-0">
		<ul  class="flex flex-col mb-0">
		                      
      





<li class="n01-link large:basis-20 border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/resources" aria-label="Resource Library" class="medium:inline-block flex flex-row gap-4" itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
													<div class='medium:flex medium:flex-row medium:gap-7 items-center' aria-hidden="true" focusable="false" >
						<span class="group-hover:svg-nr-green-custom group-hover:svg-opacity-100 transition-all duration-200">              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" viewBox="0 0 37 42" fill="none">
  <path d="M1 30.0548V11.1973L18.3004 0.622437L35.6008 11.1973V30.0548L18.3004 40.6224L1 30.0548Z" fill="#141A1F" stroke="url(#paint0_linear_3210_11667)"/>
  <path d="M23.6336 13.6224H12.967C12.7903 13.6224 12.6203 13.6959 12.497 13.8289C12.3703 13.9619 12.3003 14.1369 12.3003 14.3224V26.9224C12.3003 27.1079 12.3703 27.2864 12.497 27.4159C12.6236 27.5489 12.7903 27.6224 12.967 27.6224H23.6336C23.8103 27.6224 23.9803 27.5489 24.1036 27.4159C24.227 27.2829 24.3003 27.1079 24.3003 26.9224V14.3224C24.3003 14.1369 24.2303 13.9584 24.1036 13.8289C23.977 13.6959 23.8103 13.6224 23.6336 13.6224ZM13.6336 15.0224H14.967V26.2224H13.6336V15.0224ZM22.967 26.2224H16.3003V15.0224H22.967V26.2224Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <defs>
    <linearGradient id="paint0_linear_3210_11667" x1="18.3004" y1="0.622437" x2="18.3004" y2="40.6224" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9FAFA" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#F9FAFA" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
</svg>

  

  </span>
											</div>
							</div>
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Resource Library</div>
													<small class="n01-link__description block pt-1 text-gray-3 text-sm">
					      Ebooks, data sheets, and white papers.
  
				</small>
					</div>
	</a>
</li>
  
                      
      





<li class="n01-link large:basis-20 border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/blog" aria-label="New Relic Blog" class="medium:inline-block flex flex-row gap-4" itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
													<div class='medium:flex medium:flex-row medium:gap-7 items-center' aria-hidden="true" focusable="false" >
						<span class="group-hover:svg-nr-green-custom group-hover:svg-opacity-100 transition-all duration-200">              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" viewBox="0 0 37 42" fill="none">
  <path d="M1 30.0548V11.1973L18.3004 0.622437L35.6008 11.1973V30.0548L18.3004 40.6224L1 30.0548Z" fill="#141A1F" stroke="url(#paint0_linear_3210_11666)"/>
  <path d="M23.8217 27.5227H12.9126C12.6126 27.5227 12.3672 27.2602 12.3672 26.9394V14.106C12.3672 13.7852 12.6126 13.5227 12.9126 13.5227H23.8217C24.1217 13.5227 24.3672 13.7852 24.3672 14.106V26.9394C24.3672 27.2602 24.1217 27.5227 23.8217 27.5227ZM13.4581 26.356H23.2763V14.6894H13.4581V26.356Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M17.822 19.3561H14.5493V20.5227H17.822V19.3561Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M17.822 21.6893H14.5493V22.856H17.822V21.6893Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M22.1853 19.3561H18.9126V20.5227H22.1853V19.3561Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M22.1853 21.6893H18.9126V22.856H22.1853V21.6893Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M17.822 24.0227H14.5493V25.1894H17.822V24.0227Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M22.1853 24.0227H18.9126V25.1894H22.1853V24.0227Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M22.1857 15.8561H14.5493V18.1894H22.1857V15.8561Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <defs>
    <linearGradient id="paint0_linear_3210_11666" x1="18.3004" y1="0.622437" x2="18.3004" y2="40.6224" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9FAFA" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#F9FAFA" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
</svg>

  

  </span>
											</div>
							</div>
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">New Relic Blog</div>
													<small class="n01-link__description block pt-1 text-gray-3 text-sm">
					      Industry updates, tips, and best practices.
  
				</small>
					</div>
	</a>
</li>
  
                      
      





<li class="n01-link large:basis-20 border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://forum.newrelic.com/s/" aria-label="Community Forum" class="medium:inline-block flex flex-row gap-4" itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
													<div class='medium:flex medium:flex-row medium:gap-7 items-center' aria-hidden="true" focusable="false" >
						<span class="group-hover:svg-nr-green-custom group-hover:svg-opacity-100 transition-all duration-200">              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" viewBox="0 0 37 42" fill="none">
  <path d="M1 30.0548V11.1973L18.3004 0.622437L35.6008 11.1973V30.0548L18.3004 40.6224L1 30.0548Z" fill="#141A1F" stroke="url(#paint0_linear_3210_11665)"/>
  <path d="M23.8806 25.3324C24.2273 25.0158 24.4673 24.5991 24.574 24.1424C24.6806 23.6858 24.644 23.2058 24.474 22.7691C24.304 22.3324 24.004 21.9558 23.6173 21.6924C23.2306 21.4291 22.7706 21.2858 22.3006 21.2858C21.8306 21.2858 21.3706 21.4291 20.984 21.6924C20.5973 21.9591 20.2973 22.3324 20.1273 22.7691C19.9573 23.2058 19.9206 23.6858 20.0273 24.1424C20.134 24.5991 20.374 25.0158 20.7206 25.3324C19.734 25.6891 18.9673 26.3724 18.9673 27.2924H20.3006C20.3006 26.8924 21.244 26.3891 22.3006 26.3891C23.3573 26.3891 24.3006 26.8924 24.3006 27.2924H25.634C25.634 26.3724 24.8673 25.6891 23.8806 25.3324ZM22.3006 22.6258C22.4973 22.6258 22.6906 22.6858 22.8573 22.7958C23.0206 22.9058 23.1506 23.0624 23.224 23.2458C23.3006 23.4291 23.3206 23.6291 23.2806 23.8224C23.2406 24.0158 23.1473 24.1958 23.0073 24.3358C22.8673 24.4758 22.6906 24.5724 22.494 24.6091C22.3006 24.6491 22.0973 24.6291 21.9173 24.5524C21.734 24.4758 21.5773 24.3491 21.4673 24.1858C21.3573 24.0224 21.2973 23.8291 21.2973 23.6291C21.2973 23.3624 21.404 23.1091 21.5906 22.9224C21.7773 22.7358 22.034 22.6291 22.2973 22.6291L22.3006 22.6258Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M15.8806 25.3324C16.2273 25.0158 16.4673 24.5991 16.574 24.1424C16.6806 23.6858 16.644 23.2058 16.474 22.7691C16.304 22.3324 16.004 21.9558 15.6173 21.6924C15.2306 21.4291 14.7706 21.2858 14.3006 21.2858C13.8306 21.2858 13.3706 21.4291 12.984 21.6924C12.5973 21.9591 12.2973 22.3324 12.1273 22.7691C11.9573 23.2058 11.9206 23.6858 12.0273 24.1424C12.134 24.5991 12.374 25.0158 12.7206 25.3324C11.734 25.6891 10.9673 26.3724 10.9673 27.2924H12.3006C12.3006 26.8924 13.244 26.3891 14.3006 26.3891C15.3573 26.3891 16.3006 26.8924 16.3006 27.2924H17.634C17.634 26.3724 16.8673 25.6891 15.8806 25.3324ZM14.3006 22.6258C14.4973 22.6258 14.6906 22.6858 14.8573 22.7958C15.0206 22.9058 15.1506 23.0624 15.224 23.2458C15.3006 23.4291 15.3206 23.6291 15.2806 23.8224C15.2406 24.0158 15.1473 24.1958 15.0073 24.3358C14.8673 24.4758 14.6906 24.5724 14.494 24.6091C14.3006 24.6491 14.0973 24.6291 13.9173 24.5524C13.734 24.4758 13.5773 24.3491 13.4673 24.1858C13.3573 24.0224 13.2973 23.8291 13.2973 23.6291C13.2973 23.3624 13.404 23.1091 13.5906 22.9224C13.7773 22.7358 14.034 22.6291 14.2973 22.6291L14.3006 22.6258Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M20.3006 19.9591H21.634C21.634 19.0391 20.8673 18.3557 19.8806 17.9991C20.2273 17.6824 20.4673 17.2657 20.574 16.8091C20.6806 16.3524 20.644 15.8724 20.474 15.4357C20.304 14.9991 20.004 14.6224 19.6173 14.3591C19.2306 14.0957 18.7706 13.9524 18.3006 13.9524C17.8306 13.9524 17.3706 14.0957 16.984 14.3591C16.5973 14.6224 16.2973 14.9991 16.1273 15.4357C15.9573 15.8724 15.9206 16.3524 16.0273 16.8091C16.134 17.2657 16.374 17.6824 16.7206 17.9991C15.734 18.3557 14.9673 19.0391 14.9673 19.9591H16.3006C16.3006 19.5591 17.244 19.0557 18.3006 19.0557C19.3573 19.0557 20.3006 19.5591 20.3006 19.9591ZM18.3006 15.2924C18.4973 15.2924 18.6906 15.3524 18.8573 15.4624C19.0206 15.5724 19.1506 15.7291 19.224 15.9124C19.3006 16.0957 19.3206 16.2957 19.2806 16.4891C19.2406 16.6824 19.1473 16.8624 19.0073 17.0024C18.8673 17.1424 18.6906 17.2391 18.494 17.2757C18.3006 17.3157 18.1006 17.2957 17.9173 17.2191C17.734 17.1424 17.5773 17.0157 17.4673 16.8524C17.3573 16.6891 17.2973 16.4957 17.2973 16.2957C17.2973 16.0291 17.404 15.7757 17.5906 15.5891C17.7773 15.4024 18.034 15.2957 18.2973 15.2957L18.3006 15.2924Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <defs>
    <linearGradient id="paint0_linear_3210_11665" x1="18.3004" y1="0.622437" x2="18.3004" y2="40.6224" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9FAFA" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#F9FAFA" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
</svg>

  

  </span>
											</div>
							</div>
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Community Forum</div>
													<small class="n01-link__description block pt-1 text-gray-3 text-sm">
					      Ask a question, share an answer.
  
				</small>
					</div>
	</a>
</li>
  
                      
      





<li class="n01-link large:basis-20 border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/events" aria-label="Events &amp; Webinars" class="medium:inline-block flex flex-row gap-4" itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
													<div class='medium:flex medium:flex-row medium:gap-7 items-center' aria-hidden="true" focusable="false" >
						<span class="group-hover:svg-nr-green-custom group-hover:svg-opacity-100 transition-all duration-200">              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" viewBox="0 0 37 42" fill="none">
  <path d="M1 30.0548V11.1973L18.3004 0.622437L35.6008 11.1973V30.0548L18.3004 40.6224L1 30.0548Z" fill="#141A1F" stroke="url(#paint0_linear_3210_11664)"/>
  <path d="M25.1227 16.406H23.3727V14.0726H22.2061V16.406H15.2061V14.0726H14.0394V16.406H12.2894C11.9686 16.406 11.7061 16.6685 11.7061 16.9893V27.4893C11.7061 27.8101 11.9686 28.0726 12.2894 28.0726H25.1227C25.4436 28.0726 25.7061 27.8101 25.7061 27.4893V16.9893C25.7061 16.6685 25.4436 16.406 25.1227 16.406ZM24.5394 26.906H12.8727V17.5726H24.5394V26.906Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M16.3729 19.3226H14.0396V21.656H16.3729V19.3226Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M16.3729 22.8226H14.0396V25.156H16.3729V22.8226Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M19.8729 19.3226H17.5396V21.656H19.8729V19.3226Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <defs>
    <linearGradient id="paint0_linear_3210_11664" x1="18.3004" y1="0.622437" x2="18.3004" y2="40.6224" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9FAFA" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#F9FAFA" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
</svg>

  

  </span>
											</div>
							</div>
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Events &amp; Webinars</div>
													<small class="n01-link__description block pt-1 text-gray-3 text-sm">
					      Join us for an upcoming event or training.
  
				</small>
					</div>
	</a>
</li>
  
                      
      





<li class="n01-link large:basis-20 border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://learn.newrelic.com/" aria-label="New Relic University" class="medium:inline-block flex flex-row gap-4" itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
													<div class='medium:flex medium:flex-row medium:gap-7 items-center' aria-hidden="true" focusable="false" >
						<span class="group-hover:svg-nr-green-custom group-hover:svg-opacity-100 transition-all duration-200">              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" viewBox="0 0 37 42" fill="none">
  <path d="M1 30.0548V11.1973L18.3004 0.622437L35.6008 11.1973V30.0548L18.3004 40.6224L1 30.0548Z" fill="#141A1F" stroke="url(#paint0_linear_3210_11662)"/>
  <path d="M25.597 17.4924L19.2203 14.3024C19.0336 14.2091 18.8103 14.2091 18.6236 14.3024L12.247 17.4924C12.0203 17.6058 11.877 17.8358 11.877 18.0891V22.5524H13.2103V19.1691L14.427 19.7791V23.8324C14.427 24.0558 14.537 24.2624 14.7203 24.3858C16.1136 25.3258 17.517 25.7958 18.9203 25.7958C20.3236 25.7958 21.727 25.3258 23.1203 24.3858C23.3036 24.2624 23.4136 24.0558 23.4136 23.8324V19.7824L25.597 18.6924C25.8236 18.5791 25.967 18.3491 25.967 18.0958C25.967 17.8424 25.8236 17.6124 25.597 17.4991V17.4924ZM22.0803 23.4658C19.957 24.7824 17.8836 24.7824 15.7603 23.4658V20.4424L18.6203 21.8724C18.7136 21.9191 18.817 21.9424 18.917 21.9424C19.017 21.9424 19.1203 21.9191 19.2136 21.8724L22.0736 20.4424V23.4658H22.0803ZM18.9203 20.5324L14.0336 18.0891L18.9203 15.6458L23.807 18.0891L18.9203 20.5324Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <path d="M10.6338 26.3758C11.0805 26.8225 11.7805 27.0125 12.5471 27.0125C13.3138 27.0125 14.0138 26.8225 14.4605 26.3758L12.5471 23.1858L10.6338 26.3758Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <defs>
    <linearGradient id="paint0_linear_3210_11662" x1="18.3004" y1="0.622437" x2="18.3004" y2="40.6224" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9FAFA" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#F9FAFA" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
</svg>

  

  </span>
											</div>
							</div>
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">New Relic University</div>
													<small class="n01-link__description block pt-1 text-gray-3 text-sm">
					      Learning paths and training courses.
  
				</small>
					</div>
	</a>
</li>
  
                      
      





<li class="n01-link large:basis-20 border p-4 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green transition-all duration-200 group" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://support.newrelic.com/" aria-label="Technical Support" class="medium:inline-block flex flex-row gap-4" itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
													<div class='medium:flex medium:flex-row medium:gap-7 items-center' aria-hidden="true" focusable="false" >
						<span class="group-hover:svg-nr-green-custom group-hover:svg-opacity-100 transition-all duration-200">              <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" viewBox="0 0 37 42" fill="none">
  <path d="M1 30.0548V11.1973L18.3004 0.622437L35.6008 11.1973V30.0548L18.3004 40.6224L1 30.0548Z" fill="#141A1F" stroke="url(#paint0_linear_3210_11661)"/>
  <path d="M21.2375 28.9896H19.9041V23.9363C19.9041 23.6663 20.0675 23.4196 20.3208 23.3196C22.0941 22.603 23.2375 20.903 23.2375 18.993C23.2375 17.083 22.1775 15.533 20.5708 14.773V18.3263C20.5708 18.693 20.2708 18.993 19.9041 18.993H17.2375C16.8708 18.993 16.5708 18.693 16.5708 18.3263V14.7696C14.9641 15.5296 13.9041 17.1596 13.9041 18.9896C13.9041 20.8196 15.0475 22.5996 16.8208 23.3163C17.0741 23.4196 17.2375 23.663 17.2375 23.933V28.9863H15.9041V24.363C13.8641 23.3563 12.5708 21.293 12.5708 18.9896C12.5708 16.2496 14.4208 13.8596 17.0708 13.1763C17.2708 13.1263 17.4841 13.1696 17.6441 13.2963C17.8075 13.423 17.9008 13.6163 17.9008 13.823V17.6563H19.2341V13.823C19.2341 13.6163 19.3308 13.423 19.4908 13.2963C19.6508 13.1696 19.8641 13.1263 20.0641 13.1763C22.7141 13.8596 24.5641 16.2463 24.5641 18.9863C24.5641 21.2896 23.2708 23.353 21.2308 24.363V28.9863L21.2375 28.9896Z" fill="#F9FAFA" fill-opacity="0.5"/>
  <defs>
    <linearGradient id="paint0_linear_3210_11661" x1="18.3004" y1="0.622437" x2="18.3004" y2="40.6224" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F9FAFA" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#F9FAFA" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
</svg>

  

  </span>
											</div>
							</div>
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block group-hover:text-nr-green transition-all duration-200" itemprop="name">Technical Support</div>
													<small class="n01-link__description block pt-1 text-gray-3 text-sm">
					      Expert support for our global clients.
  
				</small>
					</div>
	</a>
</li>
  
  
	</ul>
  </div>


  
      </div>
      </div>

  
                

  
<div  class="grid grid-flow-row items-start px-10 medium:mb-12 header-nav-twocol--3-9 larger:grid-flow-col larger:grid-cols-12 larger:gap-6 larger:px-0">
            

          

  <div class="w-full grid-cols-1 larger:col-span-9 larger:col-start-4 larger:pt-12 column--index-2 grid gap-8">
                    
	  

  <div  class="n03-promo-list flex flex-col gap-7 bg-nr-extra-black medium:bg-transparent -mx-10 medium:mx-0 p-10 medium:p-0">
        <ul  class="flex flex-col gap-8 grow m-0 js-svelte-carousel medium:gradient-border-dark medium:border border-solid border-transparent rounded hover:border-nr-green relative" data-show-dots="true" data-dots-style="circle" data-slide-class="js-n03-promo-slide" data-autoplay="true" data-autoplay-speed="10000" data-disable-autoplay-screen-size="768" data-accent-color="n03-promo-dots w-2 h-2 rounded-full bg-gray-4" data-accent-color2="n03-promo-dots w-2 h-2 rounded-full bg-nr-green">
              

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/observability-forecast/2023/state-of-observability"  class="text-sm" aria-label="      Observability Forecast
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="24" height="24" alt="apm icon" loading="eager" class="svg-image" src=/sites/default/files/2023-09/APM.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                Observability Forecast
  
        </div>
            <div class="text-gray-2">
              Dive into the data: Uncover the impact of observability for your business.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/blog/best-practices/why-you-need-iast"  class="text-sm" aria-label="      IAST Explained
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="24" height="24" alt="Lock icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/platform-iast.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                IAST Explained
  
        </div>
            <div class="text-gray-2">
              From basics to benefits: Navigate the world of IAST with us.
  
      </div>
    </a>
  </li>



        

  <li class="n03-promo group flex-1 js-n03-promo-slide basis-full" itemscope itemtype="https://schema.org/SiteNavigationElement">
    <a href="/resources/ebooks/six-steps-to-achieve-business-observability"  class="text-sm" aria-label="      Business O11y
  " itemprop="url">
      <div class="n03-promo__logo w-10 mb-4">
              <div class="n03-promo__image">
  
          <img width="25" height="25" alt="Dollar sign icon" loading="eager" class="svg-image" src=/sites/default/files/2023-08/resources-dollar.svg />

  
</div>

  
      </div>
              <div  class="n03-promo__title whitespace-nowrap mb-2 group-hover:text-nr-green underline underline-offset-4 transition-all duration-200" itemprop="name">
                Business O11y
  
        </div>
            <div class="text-gray-2">
              Turn your data into dollars and make better business decisions.
  
      </div>
    </a>
  </li>



  
    </ul>
      </div>


      </div>
      </div>

  
  
              </div>
            </div>
          </div>
              </li>
                                      <li  class="js-header-site-nav-item border-b border-b-gray-4 larger:border-0" itemscope itemtype="https://schema.org/SiteNavigationElement">
                  <a class="js-header-site-nav-focusable px-10 py-[17px] larger:py-[34px] larger:px-2 largest:px-4 focus-inset focus:outline-4 js-parent-expanded:border-b border-b-gray-4 js-parent-expanded:flex-row-reverse js-parent-expanded:justify-end larger:inline-block larger:js-parent-expanded:border-b-0 larger:border-b-0 js-header-site-nav-button flex w-full items-center justify-between header-site-nav__item-link" href="https://docs.newrelic.com" itemprop="url">
            <span  class="text-lg larger:text-base xlarge:text-lg" itemprop="name">      Docs
  </span>
                          <span class="larger:hidden mr-2"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2736_13329)">
<path d="M13.0899 8.56991V2.90991H7.42993" stroke="#E4E5E6" stroke-width="1.33" stroke-linejoin="round"/>
<path d="M5.59009 10.4099L13.0901 2.90991" stroke="#E4E5E6" stroke-width="1.33" stroke-linejoin="round"/>
<path d="M13.0899 13.0899H10.5399H7.99991H5.45991H2.90991V10.5399V7.99991V5.45991V2.90991" stroke="#E4E5E6" stroke-width="1.33" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2736_13329">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
</span>
                      </a>
                      </li>
      </ul>
</nav>
            <div class="header-cta-container hidden header-expanded:flex p-[27px] fixed w-full bottom-0 bg-nr-black z-10 js-cta-container larger:p-[22px_0] larger:flex larger:static larger:w-auto">
        <div class="hidden larger:contents larger:mr-4">
          <button class="js-header-search-trigger mr-4" aria-expanded="false" aria-controls="header-search-form">
  <span aria-hidden="true"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.93 20.861A6.93 6.93 0 1 0 13.93 7a6.93 6.93 0 0 0 0 13.861Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m18.782 18.782 3.466 3.465.877.878 1.125 1.125.75.75" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
</span>
  <span class="sr-only">Search toggle</span>
</button>
          <div class="header-cta inline-flex items-center gap-6">
            




		
							





	<a  href="https://one.newrelic.com" aria-label="Log in" class="btn-tertiary small:inline-flex w-full medium:w-fit group js-login-btn grow border-b-0 xlarge:leading-6 larger:text-base xlarge:text-lg max-w-full border-b no-underline w-fit" >
		<div class="h-6 overflow-hidden">
			<div class="transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col">
				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Log in
				</span>
        				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Log in
				</span>
			</div>
		</div>
	</a>
                          




		
		





	<a  href="https://newrelic.com/signup" aria-label="Get Started Free" class="btn-green btn bg-nr-green text-nr-black small:inline-flex w-full medium:w-fit group header-cta-signup h-12 grow xlarge:leading-6 xlarge:h-12 larger:text-base xlarge:text-lg larger:px-4 larger:h-11 max-w-full" >
		<div class="h-6 overflow-hidden">
			<div class="transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col">
				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Get Started Free
				</span>
        				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Get Started Free
				</span>
			</div>
		</div>
	</a>
                                      




		
		





	<a  href="https://newrelic.com/request-demo" aria-label="Get Demo" class="btn-secondary small:inline-flex w-full medium:w-fit group !hidden h-12 grow xlarge:leading-6 xlarge:h-12 larger:text-base xlarge:text-lg larger:px-4 larger:h-11 xxlarge:!flex max-w-full" >
		<div class="h-6 overflow-hidden">
			<div class="transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col">
				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Get Demo
				</span>
        				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Get Demo
				</span>
			</div>
		</div>
	</a>
                      </div>
        </div>
        <div class="flex dark gap-6 w-full larger:hidden">
          




		
		





	<a  href="https://one.newrelic.com" aria-label="Log in" class="btn-secondary small:inline-flex w-full medium:w-fit btn-small group js-login-btn grow text-center basis-0 max-w-full" >
		<div class="h-[22px] overflow-hidden">
			<div class="transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col">
				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Log in
				</span>
        				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Log in
				</span>
			</div>
		</div>
	</a>
                      




		
		





	<a  href="https://newrelic.com/signup" aria-label="Get Started Free" class="btn-primary small:inline-flex w-full medium:w-fit btn-small group header-cta-signup grow text-center basis-0 max-w-full" >
		<div class="h-[22px] overflow-hidden">
			<div class="transition-transform motion-reduce:transition-none duration-300 ease-in-out transform-gpu group-hover:-translate-y-1/2 flex flex-col">
				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Get Started Free
				</span>
        				<span class="text-ellipsis whitespace-nowrap overflow-hidden inline-block">
										Get Started Free
				</span>
			</div>
		</div>
	</a>
                  </div>
      </div>
    </div>
  </div>
</header>


      </div>
  <main class="page__content" id="main-content">
                                                    










<div class="section text-nr-black section--column-align">
                            


		
				

<div class="row row--columns-1 nr-fluid-container grid gap-x-6 gap-y-8 items-center large:grid-cols-12" data-layout="12">
																																											
						
						

  <div class="large:col-span-12 column--index-1 grid gap-8 grid-cols-1">
          <div data-drupal-messages-fallback class="hidden"></div>


      </div>
			</div>
                          </div>



                              
  
  
<article role="article">
        
<div class="r02-banner section group/banner">
  






<div class="banner text-left text-nr-black medium:mb-24 mb-20">
	  	<div>
					


	
<div class="nr-fluid-container">
	<div class="grid medium:grid-cols-12 gap-x-8 items-center">
		<div  class="medium:col-span-10 pt-8 medium:pt-12">
						  


<div class="banner__eyebrow text-style-eyebrow mb-8 large:mb-4">      New Relic, Inc.
  </div>
				<h1 class="banner__headline">      General Data Privacy Notice
  </h1>
	
			<div >
				
			</div>
		</div>
								</div>
</div>
			</div>
		</div>



</div>



      











<div class="r01-layout section text-left medium:mb-12 mb-8 text-nr-black section--column-align section--column-align-start">
                    	


		
				

<div class="row row--columns-1 nr-fluid-container grid gap-x-6 gap-y-8 items-center large:grid-cols-12" data-layout="8">
																																											
						
						

  <div class="large:col-span-8 column--index-1 grid gap-8 grid-cols-1">
          	
  <div  class="p02-text min-w-0">
						<div class="p02-text__description content">
            <div><p>Last updated December 20, 2023*</p>
     
<p>Welcome to New Relic! New Relic's full-stack data analysis platform enables businesses to have a clearer view of what’s happening in their software.</p>


<p>Want to learn how New Relic processes data when you use or interact with our Services?  See our <a href="/termsandconditions/services-notices">Services Data Privacy Notice</a>.</p> 
	
<p>For California Residents, please see our <a href="&#10;https://newrelic.com/termsandconditions/californiaprivacynotice"> California Privacy Notice</a>.</p>

<p>Interested in applying for a job at New Relic?  See our <a href="/termsandconditions/applicant-privacy-policy">Applicant Privacy Policy</a> to understand how New Relic uses the information you provide when you apply.</p>

<p>For California Residents, please see our <a href="/termsandconditions/californiaapplicantprivacy"> California Applicant Privacy Notice</a>.</p>

<p>This New Relic General Data Privacy Notice (“General Privacy Notice”) explains who we are, how we collect, share and use personal data about you, and how you can exercise your privacy rights. We are committed to protecting your information and being transparent about the information we collect about you and how we use it. </p>

<p>We recommend that you read this General Privacy Notice in full to ensure you are informed. If you have any questions about this General Privacy Notice please see <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a>. If there’s a particular section you’re interested in reviewing, click on a link below to jump to that spot.</p>

<style>
<!--/*--><![CDATA[/* ><!--*/

<!--/*--><![CDATA[/* ><!--*/
 
table, th, td { border: 1px solid black; } 

/*--><!]]]]><![CDATA[>*/

/*--><!]]>*/
</style><table style="width:100%"><tbody><tr><td style="text-align: left; vertical-align: middle;"><b>1. <a href="#definitions">Definitions</a></b><br /><b>2. <a href="#who_we_are">Who We Are</a></b><br /><b>3. <a href="#the_information_we_collect_about_you">The Information We Collect About You</a></b><br /><b>4. <a href="#how_we_use_your_personal_data">How We Use Your Personal Data</a></b><br /><b>5. <a href="#how_we_share_your_personal_data">How We Share Your Personal Data</a></b><br /><b>6. <a href="#legal_basis_for_processing_your_personal_data">Legal Basis for Processing Your Personal Data</a></b><br /><b>7. <a href="#how_long_we_hold_your_personal_data">How Long We Hold Your Personal Data</a></b><br /><b>8. <a href="#international_data_transfers">International Data Transfers</a></b><br /><b>9. <a href="#your_choices_and_data_protection_rights">Your Choices and Data Protection Rights</a></b><br /><b>10. <a href="#do_not_track">Do Not Track and Global Privacy Control</a></b><br /><b>11. <a href="#advertising">Advertising</a></b><br /><b>12. <a href="#third_party_websites_and_social_media_widgets">Third Party Websites and Social Media Widgets</a></b><br /><b>13. <a href="#security_of_your_personal_data">Security of Your Personal Data</a></b><br /><b>14. <a href="#children">Children</a></b><br /><b>15. <a href="#changes_to_this_privacy_notice">Changes to this General Privacy Notice</a></b><br /><b>16. <a href="#how_to_contact_us">How to Contact Us</a></b></td>
		</tr></tbody></table><br /><p><a id="definitions" name="definitions">1. Definitions</a><br /></p><p>“Personal Data” means any information relating to an identified or identifiable individual, including, for example, your name, phone number, post code or zip code, Device ID, IP address and email address.  Further information about the Personal Data that we collect, where we collect it from, and how we use it is set out below.<br /><br />
“Sites” means the websites that display or link to this General Privacy Notice, such as <a href="http://www.newrelic.com/">www.newrelic.com</a>,  <a href="http://status.newrelic.com/">status.newrelic.com</a>,  <a href="http://learn.newrelic.com/">learn.newrelic.com</a>,  <a href="http://discuss.newrelic.com/">discuss.newrelic.com</a><a></a>,  <a href="http://www.newrelic.jp/">www.newrelic.jp</a>,  <a href="http://www.newrelic.de/">www.newrelic.de</a><a></a>, <a href="”" https:="">codestream.com</a><a></a>, <a href="”" https:="">pixielabs.ai</a> and any related New Relic website operated by New Relic.<br /><br />
Undefined terms used in this General Privacy Notice have the same definition as in our <a href="/termsandconditions/paid/">Terms of Service</a>.</p>
 <p></p>

<a id="who_we_are" name="who_we_are">2. Who We Are</a><br /><p>New Relic, Inc. makes monitoring services and tools available via several platforms, including pixielabs.ai, newrelic.com, and codestream.com.  When you create an account with us via one of our platforms, your information is controlled by New Relic, Inc.</p>
<br />New Relic, Inc. is a Delaware corporation headquartered at 188 Spear Street, Suite 1200, San Francisco, CA 94105. New Relic, Inc. has offices, subsidiaries and affiliated companies all around the world (collectively “New Relic”, “we”, “us”, “our”, and “ours”).
<br />For more information about New Relic, please see the <a href="”https://newrelic.com/about/”">“About Us”</a> section of our Sites.
 <p></p>

<a id="”the_information_we_collect_about_you”" name="”the_information_we_collect_about_you”">3. The Information We Collect About You</a><br /><p>New Relic collects Personal Data about you both offline and online. Offline information about you originates from our interactions with you, for example, during in-person meetings or at New Relic events, conferences, or workshops. Online information originates from your activities on our Sites and third party sources.
The Personal Data we collect includes information such as your name, mailing or billing address, credit card information, username, GitHub ID, email address, company name, IP or MAC address.  We collect this information so we know who you are for various reasons, including to communicate with you, bill you correctly, and to enable you to log-in to and use New Relic Sites and New Relic Separate Platforms.  
For more information on the types of Personal Data we collect and how we may receive it, click on “Read more”.</p>
<details><summary><span class="summary-closed">Read more</span> 
</summary><p>We may collect offline or online data, such as contact and financial information,  from you directly, automatically, or from third parties, such as data aggregators, that may not have a relationship with you.</p>
<p>a. Personal Data Categories</p> 

<style>
<!--/*--><![CDATA[/* ><!--*/

<!--/*--><![CDATA[/* ><!--*/
 
table, th, td { border: 1px solid black; } 

/*--><!]]]]><![CDATA[>*/

/*--><!]]>*/
</style><table cellpadding="2" cellspacing="2"><tbody><tr><td style="text-align: left; vertical-align: middle;"><span style="font-weight:bold">Personal Data category</span></td>
<td style="text-align: left; vertical-align: middle;"><span style="font-weight:bold">Examples of Personal Data included</span></td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Contact information</td>
			<td style="text-align: left; vertical-align: middle;">
			Your name, job title, company name, mailing address, phone number, email address, username, password</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Financial &amp; billing information</td>
			<td style="text-align: left; vertical-align: middle;">Your billing name and address, credit card number, bank account information</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Event visitor information</td>
			<td style="text-align: left; vertical-align: middle;">Your name, title, company name, mailing address, country, phone number, email address</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Community profile information</td>
			<td style="text-align: left; vertical-align: middle;">Username, photo and/or biographical information, such as your occupation, social media profiles, profile on Stack Overflow, Github ID, company name, areas of expertise, custom profiles</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Office visitor information</td>
			<td style="text-align: left; vertical-align: middle;">Your name, email address, phone number, photograph, company name, time and date of arrival</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Pictures, videos, &amp; audio recordings</td>
			<td style="text-align: left; vertical-align: middle;">Images of you captured during a New Relic event or promotion in photos or videos and/or recordings of you made during a research or a promotional session or event with your consent</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Device &amp; geographic information</td>
			<td style="text-align: left; vertical-align: middle;">IP address, device type, unique device identification numbers, browser-type, broad geographic location (e.g. country or city-level location), user ID, and other technical information
<br />Information about how your device has interacted with our Sites, including the pages accessed and links clicked
</td>
		</tr></tbody></table><br /><p>b. Personal Data we collect directly from you includes contact, financial and billing, event visitor, community profile, and office visitor information, as well as pictures, videos and audio recordings, and data we collect automatically, which includes device and geographic information.</p> 
<style>
<!--/*--><![CDATA[/* ><!--*/

<!--/*--><![CDATA[/* ><!--*/
 
table, th, td { border: 1px solid black; } 

/*--><!]]]]><![CDATA[>*/

/*--><!]]>*/
</style><table cellpadding="2" cellspacing="2"><tbody><tr><td style="text-align: left; vertical-align: middle;"><span style="font-weight:bold">Personal Data category</span></td>
<td style="text-align: left; vertical-align: middle;"><span style="font-weight:bold">Examples of how it may be collected by New Relic directly</span></td>
<td style="text-align: left; vertical-align: middle;"><span style="font-weight:bold">Collected automatically</span></td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Contact information</td>
			<td style="text-align: left; vertical-align: middle;">If you 
<ul><li>express an interest in obtaining additional information about our Services</li>
<li>request customer support</li>
<li>use our "Contact Us" or similar features</li>
<li>register to use our Sites and other New Relic platforms, such as pixielabs.ai, sign up for or attend an event, webinar or contest</li>
<li>download certain content, such as whitepapers from our Sites or third-party sites</li>
<li>participate in a New Relic research study or promotion</li>
<li>initiate a webchat on the New Relic website</li>
</ul></td>
<td style="text-align: left; vertical-align: middle;">No</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Financial &amp; billing information</td>
			<td style="text-align: left; vertical-align: middle;">If you 
<ul><li>make purchases via our Sites</li>
<li>register for an event or webinar</li>
</ul></td>
<td style="text-align: left; vertical-align: middle;">No</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Event visitor information</td>
			<td style="text-align: left; vertical-align: middle;">If you 
<ul><li>attend an event</li>
</ul></td>
<td style="text-align: left; vertical-align: middle;">No</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Community profile information</td>
			<td style="text-align: left; vertical-align: middle;">We may collect this data in a variety of contexts.<br /><br />If you 
<ul><li>attend a New Relic promotion or event, your image may be captured in a photo or video</li>
<li>participate in a New Relic research study your research session may be recorded with your consent.</li>
</ul></td>
<td style="text-align: left; vertical-align: middle;">No</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Office visitor information</td>
			<td style="text-align: left; vertical-align: middle;">If you 
<ul><li>visit our Sites</li>
</ul><br />Some of this information may be collected using cookies and similar tracking technology, as explained further in the <a href="/termsandconditions/cookie-policy/">New Relic Cookie Policy</a>.
</td>
<td style="text-align: left; vertical-align: middle;">Yes</td>
		</tr></tbody></table><p>If you provide to us or to our service providers any Personal Data relating to other individuals or third parties (such as your beneficiaries, references for job candidates, or referrals for the purposes of collaboration within the New Relic platform), you represent that you have the authority to do so and permit us to use the Personal Data in accordance with this General Privacy Notice. If you would like to exercise your rights relating to your Personal Data, please see <a href="#your_choices_and_data_protection_rights">Section 9 (Your Choices and Data Protection Rights)</a><a></a>.</p>
<p>If you are that beneficiary or any other third party whose Personal Data was provided to New Relic on your behalf and with your consent, and you would like to exercise your rights relating to your Personal Data, please see <a href="#your_choices_and_data_protection_rights">Section 9 (Your Choices and Data Protection Rights)</a>.</p>
<p>c. <b><span class="emphasized">We may collect the following types of Personal Data about you from third parties</span></b> that supply us with Personal Data in order to help us establish an account, target our marketing, or fulfill orders in partnership with our resellers.
<br /><br />Our third party company relationships help us to update, expand, and analyze our Personal Data records, identify new customers, optimize our Sites and Services, create more tailored advertising to provide services that may be of interest to you, and manage open source projects.
<br /><br />Personal Data that we collect from third party sources include:
<style>
<!--/*--><![CDATA[/* ><!--*/

<!--/*--><![CDATA[/* ><!--*/
 
table, th, td { border: 1px solid black; } 

/*--><!]]]]><![CDATA[>*/

/*--><!]]>*/
</style></p><table cellpadding="2" cellspacing="2"><tbody><tr><td style="text-align: left; vertical-align: middle;"><span style="font-weight:bold">Example Categories of Personal Data</span></td>
<td style="text-align: left; vertical-align: middle;"><span style="font-weight:bold">Third party source</span></td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">
<ul><li>Contact information</li>
<li>Intent data (or user behavior data)</li>
<li>Device and geographic information</li>
<li>Community profile information</li>
</ul></td>
<td style="text-align: left; vertical-align: middle;">
<ul><li>Providers of business contact information</li>
<li>Resellers, referral and joint marketing partners, distributors, managed service providers, IAAS or PAAS partners, cloud providers, and other technical alliances</li>
</ul></td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Details about a potential customers’ software environment</td>
			<td style="text-align: left; vertical-align: middle;">Resellers, referral and joint marketing partners, distributors, managed service providers, IAAS or PAAS partners, cloud providers, and other technical alliances</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">User account information</td>
			<td style="text-align: left; vertical-align: middle;">Vendors</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">User account information</td>
			<td style="text-align: left; vertical-align: middle;">Code repository platforms, such as GitHub</td>
		</tr><tr><td style="text-align: left; vertical-align: middle;">Contact information</td>
			<td style="text-align: left; vertical-align: middle;">Companies that host an event or sponsor an event</td>
		</tr></tbody></table><p>We have checked that these third parties have an appropriate legal basis to provide us this Personal Data, such as your consent, a legitimate business interest, or are otherwise legally permitted or required to disclose your Personal Data.</p>
</details><p></p>
<a id="how_we_use_your_personal_data" name="how_we_use_your_personal_data">4. How We Use Your Personal Data</a><br /><p>In general, Personal Data we collect from you or about you from third parties is used for business and commercial purposes, for example to provide and maintain our Sites, Services, and New Relic Separate Platforms. Additionally, collecting this information enables us to better understand the visitors who come to our Sites, where they come from, and what content on our Sites is of interest to them.</p> 
<details><summary><span class="summary-closed">Read more</span> 
</summary><p>New Relic uses your Personal Data for the following purposes:</p>
<br />a.  <strong>to create &amp; maintain a trusted environment for our Services and Sites,</strong> including in order to<ul><li>manage the security of our Sites, physical locations, networks, and systems</li>
<li>operate, administer, analyze, develop, improve and optimize the use, function and performance of our Sites, Services, New Relic Separate Platforms and systems</li>
<li>comply with applicable laws and regulations and to operate our business</li>
<li>to manage code check-ins and pull requests for open source and community development projects</li>
</ul><br />b.   <strong>to provide our Services and perform our contract with you as our customer</strong> including to<ul><li>engage in transactions with customers, suppliers and business partners and to process orders for New Relic Services</li>
<li>to provide New Relic Services, New Relic Separate Platforms, survey tools, payment processing services, or the certificate creation tool for New Relic University</li>
</ul><br />c.  <strong>to communicate and respond to your requests and inquiries to New Relic, including to</strong><ul><li>conduct research you agree to participate in or reach out to you to discuss any feedback you may submit, through meetings, surveys, or other tools</li>
<li>respond to your queries and provide you with information and promotional material on New Relic when you initiate a webchat</li>
</ul><br />d.  <strong>to market our Services or related products and services to new and existing customers, including</strong> <ul><li>tailor our marketing and sales activities to your company’s interests and in accordance with your communication preferences and your requests for information and to be contacted by New Relic</li>
<li>tailor the purchase of Services</li>
<li>for purposes of targeted advertising, delivering relevant email content and event promotion </li>
<li>to link or combine information about you with other Personal Data we get from third parties, to help understand your needs and provide you with better and more personalized service</li>
<li>by creating anonymous data records from Personal Data in accordance with applicable law.</li>
</ul></details><p></p>

<a id="how_we_share_your_personal_data" name="how_we_share_your_personal_data">5. How We Share Your Personal Data</a><br /><p>Except as provided in this General Privacy Notice, we do not, and will not, sell Personal Data.</p> 
<p>Generally, we may disclose your Personal Data for our business purposes, such as to our service providers, partners or competent law enforcement bodies.</p>
<details><summary><span class="summary-closed">Read More</span> 
 </summary><p>New Relic may disclose your Personal to</p> 
<p>a. <em>Third party service providers.</em>  We engage with third parties to  support our business and operations.  For example some third party service providers offer services that we use to provide the Services, Sites, and New Relic Separate Platforms, such as cloud providers. New Relic remains liable for any onward transfers to third parties.</p> 
<p>b. <em>Event sponsors and hosts.</em> If you elect to do so, we may share Personal Data collected at New Relic events, such as FutureStack or New Relic’s seminars, with sponsors and hosts of such events, for valuable consideration from such sponsor or host to New Relic. Such sponsor or host may use it for their business or commercial purposes in accordance with their own privacy notices.</p>
<p>c. <em>Business partners.</em> We contract with business partners, such as third party resellers, for our commercial purposes. For instance, if you fill out a form on our Sites, such as by signing up for a free New Relic account, ebook or webinar, or if you reach out to our Sales team, you may be contacted by a designated New Relic partner.</p> 
<p>d. <em>Comply with our legal obligations.</em> Where we believe disclosure is necessary (i) as a matter of applicable law or regulation, (ii) to exercise, establish or defend our legal rights, or (iii) to protect your vital interests or those of any other person, we may disclose your Personal Data in response to lawful requests by a public authority, including any competent law enforcement body, regulatory, government agency, court or other third party, including to meet national security or law enforcement requirements.</p>

<p>e. <em>New Relic entities.</em> We may share your Personal Data within New Relic, such as with or between subsidiaries of New Relic, Inc.  We and our subsidiaries will only use the information as described in this notice.</p>
<p>f. <em>Actual or potential buyers.</em> In connection with any actual or proposed purchase, merger or acquisition of any part of our business, provided that we inform the buyer (and its agents and advisors) it must use your Personal Data only for the purposes disclosed in this General Privacy Notice.</p>
<p>g. <em>Other person(s).</em>  Where you provide consent to the disclosure or as allowed by applicable data protection law, we may share your information as described at the time of consent.</p>
</details><p></p>

<a id="legal_basis_for_processing_your_personal_data" name="legal_basis_for_processing_your_personal_data">6. Legal Basis for Processing Your Personal Data</a><br /><p>When we use your Personal Data, we take care to ensure that it is used in an appropriate way. Our use of Personal Data is done under one of various legal bases, including for our legitimate interest, in performance of a contract or with your consent.</p>  
<p>If you have questions about or need further information concerning the legal basis on which we collect and use your Personal Data, please see <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a><a></a>. 
<details><summary><span class="summary-closed">Read More</span> 
 </summary><p>We will process your Personal Data and share that Personal Data in accordance with this Privacy Notice where:</p><ul><li>Its use is necessary <strong>for a contract</strong> you have entered into or because you have asked for something to be done so you can enter into a contract with us</li>
<li>Its use is necessary because of a <strong>legal obligation</strong> that applies to us (except an obligation imposed by a contract). This may include responding to subpoenas, warrants or other requests served on New Relic anywhere in the world or to protect or defend the rights or property of New Relic or its users</li>
<li><strong>You have consented</strong> to its use in a specific way. For example where you have consented to receiving marketing materials. You may withdraw your consent at any time as further described in <a href="#your_choices_and_data_protection_rights">Section 9 (Your Choices and Data Protection Rights</a></li>
<li>Its use is in accordance with <strong>our legitimate interests</strong> e.g. to manage our business, subject to those interests not overriding your fundamental rights and freedoms. This may include the activities and purposes described in <a href="#how_we_use_your_personal_data">Section 4 (How We Use Your Personal Data)</a> and <a href="#how_we_share_your_personal_data">Section 5 (How We Share Your Personal Data)</a><a></a>.  In connection with due diligence efforts as part of a proposed sale, merger, or reorganization of our business or after a sale, merger, or reorganization
<p>If we ask you to provide Personal Data to comply with a legal requirement or to perform a contract with you, we will make this clear at the relevant time and advise you whether the provision of your Personal Data is mandatory or not (as well as of the possible consequences if you do not provide your Personal Data).</p></li>
</ul></details></p><p></p>

<a id="how_long_we_hold_your_personal_data" name="how_long_we_hold_your_personal_data">7. How Long We Hold Your Personal Data</a><br /><p>We retain Personal Data we collect from you where we have an ongoing legitimate business need to do so (for example, for as long as your account is active or as needed to provide you Services you have requested or to comply with applicable legal, tax or accounting requirements). This may also include situations where litigation is pending or ongoing and such information is subject to a legal hold.</p>
<p>When we have no ongoing legitimate business need to process your Personal Data, we will either delete or anonymise it or, if this is not possible (for example, because your Personal Data has been stored in backup archives), then we will securely store your Personal Data and isolate it from any further processing until deletion is possible.  Where we rely on your consent you have the right to withdraw it at any time in the manner indicated when you consent.</p>
<p>If you have questions about or need further information concerning the retention of your Personal Data, please see <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a>.</p>
<p></p>

<a id="international_data_transfers" name="international_data_transfers">8. International Data Transfers</a><br /><p>When you use our Services or Sites, your Personal Data may be transferred to, and processed in, countries where we or our service providers operate. These may be countries other than the country in which you are located These countries may have data protection laws that are different from the laws of your country.</p>
<details><summary><span class="summary-closed">Read more</span> 
</summary><p>If you are located in the European Economic Area (EEA), Switzerland, and/or the United Kingdom (UK) your Personal Data will be accessed by New Relic staff or suppliers, transferred, and/or stored outside the EEA, Switzerland and/or the UK.</p>
<p>We take appropriate safeguards to require that your Personal Data will remain protected in accordance with this General Data Privacy Notice and as required by applicable data protection law, including: (i) requiring that our third-party service providers and partners employ an adequate method of transfer, such as the European Commission’s Standard Contractual Clauses (further details of which can be provided upon request). Additionally, New Relic complies with the EU-U.S. Data Privacy Framework (EU-U.S. DPF), the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework (Swiss-U.S. DPF) as set forth by the U.S. Department of Commerce.  New Relic has certified to the U.S. Department of Commerce that it adheres to the EU-U.S. Data Privacy Framework Principles (EU-U.S. DPF Principles) with regard to the processing of personal data received from the European Union in reliance on the EU-U.S. DPF and from the United Kingdom (and Gibraltar) in reliance on the UK Extension to the EU-U.S. DPF.  New Relic has certified to the U.S. Department of Commerce that it adheres to the Swiss-U.S. Data Privacy Framework Principles (Swiss-U.S. DPF Principles) with regard to the processing of personal data received from Switzerland in reliance on the Swiss-U.S. DPF.  If there is any conflict between the terms in this privacy notice and the EU-U.S. DPF Principles and/or the Swiss-U.S. DPF Principles, the Principles shall govern. New Relic is subject to the investigation and enforcement powers of the U.S. Federal Trade Commission. To learn more about the Data Privacy Framework (DPF) program, and to view our certification, please visit <a href="https://www.dataprivacyframework.gov/s/">https://www.dataprivacyframework.gov/</a>.  In compliance with the EU- U.S. DPF (and the UK Extension to the EU- U.S. DPF) and the Swiss- U.S. DPF, New Relic commits to resolve DPF Principles-related complaints about our collection and use of your personal data.  Individuals from the EU, Switzerland and the UK with inquiries or complaints regarding our handling of personal data received in reliance on the EU-U.S. DPF, and the UK Extension to the EU-U.S. DPF and the Swiss-U.S. DPF should first contact New Relic as set out at Section 9 (c) of this Privacy Notice:
</p><p>In compliance with the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF and the Swiss-U.S. DPF, New Relic commits to refer unresolved complaints concerning our handling of personal data received in reliance on the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF and the Swiss-U.S. DPF to JAMS, an alternative dispute resolution provider based in the United States.  If you do not receive timely acknowledgment of your DPF Principles-related complaint from us, or if we have not addressed your DPF Principles-related complaint to your satisfaction, please visit https://www.jamsadr.com/eu-us-data-privacy-framework for more information or to file a complaint.  The services of JAMS are provided at no cost to you. Additionally,you may have the possibility to engage in binding arbitration through the Data Privacy Framework Arbitration Panel under certain circumstances. To find out more about the Data Privacy Framework’s binding arbitration scheme, see <a href="https://www.dataprivacyframework.gov/s/article/Participation-Requirements-Data-Privacy-Framework-DPF-Principles-dpf">Annex 1 of the EU- U.S. Data Privacy Framework Principles</a>.</p> 
</details><p></p>

<a id="your_choices_and_data_protection_rights" name="your_choices_and_data_protection_rights">9. Your Choices and Data Protection Rights</a><br /><p>New Relic takes reasonable steps to ensure that the Personal Data we collect is reliable for its intended use, accurate, complete and up to date. We offer certain data protection options to all individuals, including the ability to opt out of receiving marketing communications, to amend your personal data contained in your account, and to request we delete your account information.</p>  

<p>For more information on the rights and options you have, including jurisdiction-specific rights, please click Read More.</p>
<details><summary><span class="summary-closed">Read More</span> 
 </summary><p>a. When it comes to <strong>your marketing choices,</strong> we offer you choices regarding the collection, use, and sharing of your Personal Data. We will periodically send you newsletters and emails that directly promote the use of our Sites or the purchase of our Services (marketing and/or sales communications) as the following applies : (i) in accordance with your marketing preferences, (ii) if you sign up for a New Relic account or other content, (iii) request to be contacted by New Relic and/or if you request information from New Relic.</p>
<p>You can opt out of receiving marketing communications from us at any time by clicking (1) the 'unsubscribe' or ‘opt out’ link at the bottom of the marketing emails you receive, (2) adjusting your email preferences provided <a href="https://try.newrelic.com/UnsubscribePage.html/">here</a>, or (3) by sending an email to Privacy@newrelic.com. Please note that it may take up to three days to remove your contact information from our marketing communications lists, so you may receive correspondence from us for a short time after you make your request. Your email preferences only affect marketing communications. You will not be able to opt out of service related emails from us, such as, e.g., transactional emails, or notices of updates to our Terms of Service, Services Privacy Notice, or this General Privacy Notice.</p>
<p>Should you decide to opt-out of receiving future mailings, we will retain a record of your preference (including retaining your email address) and we may share your email address with third parties solely for the purpose of ensuring that you do not receive further marketing communications related to our Services from third parties.</p>
 <p>b. We apply certain <strong>data protection rights to all individuals (including individuals covered by the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF and the Swiss-U.S. DPF)</strong>, regardless of location.  Specifically, you may correct or update Personal Data contained in your account by editing your profile within the registration portion of our Sites or sending an email to Privacy@newrelic.com. You may also request we delete your account information by completing this <a href="https://login.newrelic.com/?login_challenge=06577f1a988841f4bf167b866c0418b9">form</a>, if you have an account, or by sending an email to Personaldatarequests@newrelic.com. If you would like to remove your Personal Data from a Site testimonial or our blog you can send an email to Personaldatarequests@newrelic.com.</p> 
<p>When you reach out to us, we will endeavor to respond without delay in accordance with applicable data protection laws. We may need to ask you additional clarifying questions in order to accurately respond to your request and to verify you are making the request in respect of your own Personal Data.</p>
<p>With respect to deletion requests, we may be required (by law or otherwise) to keep Personal Data and not remove it (or to keep this information for a certain time, in which case we will comply with your deletion request only after we have fulfilled such requirements). We will let you know if we are unable to comply with this request and the reasons why.</p>
<p>c. EEA &amp; the United Kingdom</p>
<p>In addition to the rights to correct, update, or request to delete Personal Data outlined above, persons located in the EEA or the United Kingdom have some additional data protection rights under EEA and UK data protection laws.</p>
<p>These rights include the right to find out if we use your Personal Data, or to access your Personal Data.</p> 
<p>Also, you can object to the processing of Personal Data we process on the basis of our legitimate business interests, ask us to restrict processing, or request portability of your Personal Data.</p>
<p>Where we have collected and processed your Personal Data on the basis of consent, you can withdraw your consent at any time. You should note that withdrawing your consent will not affect the lawfulness of any processing we conducted prior to the withdrawal, nor will it affect the processing of your Personal Data where we relied on lawful bases other than consent.</p> 
<p>You have the right to complain to a data protection authority about our collection and use of your Personal Data.  For more information, please contact your local data protection authority.</p>
<p>If you are an EEA or UK individual  (including any individual covered by the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF and the Swiss-U.S. DPF) and have a New Relic account, you can exercise your access right by completing this <a href="https://login.newrelic.com/?login_challenge=becf97b4ad2d44428abf4eb09c54e4fe">form</a>. If you do not have a New Relic account, and want to exercise your access right or any of the other rights outlined in this Section and would like to make any of these requests, please submit your request to Privacy@newrelic.com.</p>

<p>d. California</p>
<p>New Relic provides services to businesses and complies with the applicable provisions of the California Consumer Privacy Act. If you are a California resident, please see our <a href="/termsandconditions/californiaprivacynotice"> California Privacy Notice</a>.</p>

<p>e. Nevada</p>
<p>If you are a resident of Nevada, you have the right to submit a request that we do not sell to third parties certain types of personal information that we have collected or will collect about you. You can exercise this right by contacting us at privacy@newrelic.com with the subject line “Nevada Do Not Sell Request” and providing us with your name and the email address. Please note that we do not currently sell your personal information as the term “sale” is defined in Nevada Revised Statutes Chapter 603A.</p>
<p>If you have any questions about New Relic’s privacy practices, you can contact us as described in <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a><a></a></p>

f. Virginia
<p>If you are a Virginia resident, you have some additional data protection rights. under the Virginia Consumer Data Protection Act, in addition to the rights to correct, update, or request to delete Personal Data outlined above.</p>
<p>You can request that we confirm if we actually process your Personal Data and request access to such Personal Data. You have the right to request a portable copy of the Personal Data that you provided to us. You have the right to opt out of the processing of the Personal Data for purposes of targeted advertising, the sale of Personal Data, or profiling in furtherance of decisions that produce legal or similarly significant effects concerning the consumer. Please note that New Relic does not “sell” your Personal Data as the term “sale” is defined in the Virginia Consumer Data Protection Act. New Relic engages in targeted advertising as that term is defined under the Virginia Consumer Data Protection Act. This means that New Relic may disclose Personal Data for targeted advertising in line with your choices.</p>
     
<p>You have the right to opt out of the sale of your Personal Data.</p>
<p>You may opt out of the disclosure of your Personal Data for targeted advertising by clicking on the Your Privacy Choices tab on www.newrelic.com or by contacting us at privacy@newrelic.com with the subject line “Virginia Do Not Disclose My Data for Targeted Advertising”. You have the right not to be discriminated against based on exercising your data protection rights, and we do not discriminate against any individual for doing so. In order to protect your Personal Data from unauthorized access, we may require you to verify your credentials before you can submit a data protection request. If you do not have an account with us, or if we suspect that your account has been accessed without your authorization, we may ask you to provide additional personal information for verification purposes. </p>

<p>If we refuse to take action on a data protection request that you have made, you may appeal our decision within a reasonable period of time by contacting us at privacy@newrelic.com and specifying that you wish to appeal. Within 60 days of our receipt of your appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to the Virginia Attorney General at the following address <a href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint">https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint</a>. </p>
<p>If you have any questions about New Relic’s privacy practices, you can contact us as described in <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a><a></a></p>

<p>g. Colorado</p>
<p>If you are a Colorado resident, you have some additional data protection rights under the Colorado Consumer Privacy Act, in addition to the rights to correct, update, or request to delete Personal Data outlined above.</p> 

<p>You can request that we confirm if we actually process your Personal Data and request access to such Personal Data. You have the right to request a portable copy of the Personal Data that you provided to us. You have the right to opt out of the processing of the Personal Data for purposes of targeted advertising, the sale of Personal Data, or profiling in furtherance of decisions that produce legal or similarly significant effects concerning the consumer. Please note that New Relic does not “sell” your Personal Data as the term “sale” is defined in the Colorado Consumer Privacy Act. New Relic engages in targeted advertising as that term is defined under the Colorado Consumer Privacy Act. This means that New Relic may disclose Personal Data for targeted advertising in line with your choices.</p> 

<p>You may opt out of the disclosure of your Personal Data for targeted advertising by clicking on the Your Privacy Choices tab on www.newrelic.com or by contacting us at privacy@newrelic.com with the subject line “Colorado Do Not Disclose My Data for Targeted Advertising”. In order to protect your Personal Data from unauthorized access, we may require you to verify your credentials before you can submit a data protection request. If you do not have an account with us, or if we suspect that your account has been accessed without your authorization, we may ask you to provide additional personal information for verification purposes.</p> 

<p>If we refuse to take action on a data protection request that you have made, you may appeal our decision within a reasonable period of time by contacting us at privacy@newrelic.com and specifying that you wish to appeal. Within 45 days of our receipt of your appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to the Colorado Attorney General by following the instructions here: <a href="https://complaints.coag.gov/s/contact-us">https://complaints.coag.gov/s/contact-us</a>.</p>

<p>If you have any questions about New Relic’s privacy practices, you can contact us as described in <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a><a></a></p>

<p>h. Connecticut</p>
<p>If you are a Connecticut resident, you have some additional data protection rights under the Connecticut Data Privacy Act in respect of Personal Data that we collect and/or process on you, which are in addition to the rights to correct, update, or request to delete such Personal Data as outlined above.</p>
<p>You can request that we confirm if we actually process your Personal Data and request access to such Personal Data. You have the right to request a copy of  your Personal Data processed by us in a portable and, to the extent technically feasible, readily usable format where the processing is carried out by automated means subject to applicable restrictions.  You have the right to opt out of the processing of the Personal Data for purposes of targeted advertising, the sale of Personal Data, or profiling in furtherance of solely automated decisions that produce a legal or other significant impact concerning the consumer. Please note that New Relic does not “sell” your Personal Data as the term “sale” is defined in the Connecticut Data Privacy Act. New Relic engages in targeted advertising as that term is defined under the Connecticut Data Privacy Act. This means that New Relic may disclose Personal Data for targeted advertising in line with your choices.</p>
<p> You may opt out of the disclosure of your Personal Data for targeted advertising by clicking on the Your Privacy Choices tab on www.newrelic.com or by contacting us at privacy@newrelic.com with the subject line “Connecticut Do Not Disclose My Data for Targeted Advertising”. In order to protect your Personal Data from unauthorized access, we may require you to verify your credentials before you can submit a data protection request. If you do not have an account with us, or if we suspect that your account has been accessed without your authorization, we may ask you to provide additional personal information for verification purposes.</p> 
<p>If we refuse to take action on a data protection request that you have made, you may appeal our decision within a reasonable period of time by contacting us at privacy@newrelic.com and specifying that you wish to appeal. Within 60 days of our receipt of your appeal, we will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to the Connecticut Attorney General  by following the instructions here: <a href="https://portal.ct.gov/AG/Common/Complaint-Form-Landing-page">https://portal.ct.gov/AG/Common/Complaint-Form-Landing-page</a>.</p>
<p>If you have any questions about New Relic’s privacy practices, you can contact us as described in <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a><a></a></p>

<p>i. If you are a Utah resident, you have some additional data protection rights under the Utah Consumer Privacy Act in addition to the right to delete Personal Data outlined above.</p>

<p>You can request that we confirm if we actually process your Personal Data and request access to such Personal Data. You have the right to request a portable copy of the Personal Data that you provided to us. You have the right to opt out of the processing of the Personal Data for purposes of targeted advertising and the sale of Personal Data. Please note that New Relic does not “sell” your Personal Data as the term “sale” is defined in the Utah Consumer Privacy Act. New Relic engages in targeted advertising as that term is defined under the Utah Consumer Privacy Act. This means that New Relic may disclose Personal Data for targeted advertising in line with your choices.</p>
<p>You may opt out of the disclosure of your Personal Data for targeted advertising by clicking on the Your Privacy Choices tab on www.newrelic.com or by contacting us at privacy@newrelic.com with the subject line “Utah Do Not Disclose My Data for Targeted Advertising”. In order to protect your Personal Data from unauthorized access, we may require you to verify your credentials before you can submit a data protection request. If you do not have an account with us, or if we suspect that your account has been accessed without your authorization, we may ask you to provide additional personal information for verification purposes.</p>
<p>If you have any questions about New Relic’s privacy practices, you can contact us as described in <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a><a></a></p>

<p>j. Australia Supplemental Data Protection Law Disclosures. New Relic will process Personal Data under this General Data Privacy Notice in accordance with the Australian Privacy Act 1988 and the Australia Privacy Principles. If you are <strong>an Australian resident</strong> and you are dissatisfied with our handling of a data subject right request or a complaint, you can always contact us at Privacy@newrelic.com. If you disagree with the resolution proposed by us, you may make a complaint to the Office of the Australian Information Commissioner (“OAIC”) by contacting the OAIC using the methods listed on their website http://www.oaic.gov.au.</p>
</details><p></p> 

<a id="do_not_track" name="do_not_track">10. Do Not Track and Global Privacy Control</a><br /><p>New Relic does not currently commit to responding to browser’s “do not track” or “DNT” preference across its Sites and Services, because no common industry standard for DNT has been adopted by industry groups, technology companies or regulators, including no consistent standard of interpreting user intent.  New Relic takes privacy and choices regarding privacy seriously and will make efforts to continue to monitor the development around DNT browser technology and the implementation of a standard for DNT.  Global Privacy Control is a browser setting that allows you to notify websites you visit about your privacy preferences. New Relic honors website visitors’ Global Privacy Control signals.</p>

<a id="advertising" name="advertising">11. Advertising</a><br /><p>We may partner with third party ad networks either to display advertising on our Sites or to manage our advertising on other sites.  Our ad network partner may use cookies and web beacons to collect non-personally identifiable information about your activities on our Sites to provide you targeted advertising based upon your interests. To learn more about targeted advertising and advertising networks and about your ability to opt out of collection by certain third parties, please visit the opt-out pages of the Network Advertising Initiative, <a href="https://optout.networkadvertising.org/?c=1">here</a>, and the Digital Advertising Alliance, <a href="https://optout.aboutads.info/?c=2&amp;lang=EN">here</a>. In addition, if you wish to opt-out of interest-based advertising click <a href="https://preferences-mgr.truste.com/">here</a> (or, if located in the EU, click <a href="https://www.youronlinechoices.eu/">here</a><a></a>).</p>
<p>Please note this does not opt you out of being served advertising.  You will continue to receive generic ads.</p>

<a id="third_party_websites_and_social_media_widgets" name="third_party_websites_and_social_media_widgets">12. Third Party Websites and Social Media Widgets</a><br /><p>This General Privacy Notice applies to the use and disclosure of Personal Data that we collect as described herein.</p>
<p>Our provision of a link to any other website or location is for your convenience and does not signify our endorsement of such other website or location or its contents. When you click on such a link, you will leave our site and go to another site. During this process, a third party may collect Personal Data from you.</p>
<p>We have no control over, do not review, and cannot be responsible for, these outside websites or their content. Please be aware that the terms of this General Privacy Notice do not apply to these outside websites or content, or to any collection of data after you click on a link to a third party. We encourage you to carefully read the privacy statement of any website you visit.</p>
<p>Our Sites also include social media features, such as the Facebook Like button and widgets, such as the “Share this” button or interactive mini-programs that run on our site. These features may collect your IP address, which page you are visiting on our Sites, and may set a cookie to enable the feature to function properly. Social media features and widgets are either hosted by a third party or hosted directly on our Sites.  Your interactions with these features are also governed by the privacy policy of the company providing it.</p>

<a id="security_of_your_personal_data" name="security_of_your_personal_data">13. Security of Your Personal Data</a><br /><p>New Relic is committed to protecting the security of your Personal Data. We use appropriate technical and organizational measures to protect your Personal Data from unauthorized access, use, or disclosure. For instance, when you enter your credit card number on our order forms, we encrypt the transmission of that information using secure socket layer technology (SSL). All account accesses require users to provide their username and password. It is the responsibility of each user to maintain this information in a secure manner. Despite these measures, you should know that New Relic cannot fully eliminate security risks associated with Personal Data and mistakes and security breaches may happen. If you have any questions about security on our Sites, you can contact us as described in <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a><a></a>.</p>

<a id="children" name="children">14. Children</a><br /><p>Our Sites are not directed to children and we do not intentionally gather Personal Data about visitors who are under the age of 16. If you learn that anyone younger than 16 (or of older age as applicable under the laws of your jurisdiction) has provided us with Personal Data, please contact us as described in <a href="#how_to_contact_us">Section 16 (How to Contact Us)</a>, and we will take steps to delete such information. If you are a minor (as per the applicable laws in your jurisdiction) and are using this website, you may only do so with the consent of your parent or guardian.</p>

<a id="changes_to_this_privacy_notice" name="changes_to_this_privacy_notice">15. Changes to this Privacy Notice</a><br /><p>This General Privacy Notice may be changed from time to time, and if we make any substantial changes in the way we use your Personal Data, we will take appropriate measures to inform you, consistent with the significance of the changes we make.  You can see when this General Privacy Notice was last updated by checking the “last updated” date displayed at the top of this General Privacy Notice.</p>
<p>This Privacy Notice is effective as of the date set out at the top of this Privacy Notice.  It describes the categories of personal information that we have collected, disclosed for a business or commercial purpose and sold over the preceding twelve (12) months.</p>

<a id="how_to_contact_us" name="how_to_contact_us">16. How to Contact Us</a>
<p>New Relic has a Data Protection Officer and has nominated both local and global Data Protection Officers. If you have questions about how your Personal Data is collected, stored, shared or used, or if you wish to exercise any of your data rights, or if you have a disability and need to access this notice in an alternative format, please contact our Data Protection Officers at:</p>
<p>By email: privacy@newrelic.com</p>
<p>By mail: Attn: Legal Data Subject Request
<br />New Relic, Inc.
<br />188 Spear Street
<br />Suite 1000
<br />San Francisco, CA 94105</p>

<p>New Relic appointed New Relic International Limited as its EU data protection representative, and the Irish Data Protection Commissioner is New Relic supervisory authority. You can contact New Relic EU Representative by emailing privacy@newrelic.com attn: New Relic EU Representative.</p>

<p>New Relic appointed New Relic UK Limited as its UK data protection representative, and the Information Commissioner’s Office is New Relic supervisory authority in the United Kingdom. You can contact New Relic UK Representative at:</p>
<p>Strand Bridge House
<br />138-142 The Strand 
<br />London, England WC2R 1HL
<br />Or by emailing privacy@newrelic.com attn: New Relic UK Representative.</p>

<p>For any complaints regarding our compliance with our privacy and security practices including complaints under the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF and the Swiss-U.S. DPF, , please contact New Relic first. New Relic will investigate and attempt to resolve any complaints and disputes regarding our privacy practices.</p>
<p>The data controller of your Personal Data for all countries that New Relic does business is New Relic, Inc., unless you have contracted directly with New Relic, K.K. in Japan, in which case New Relic, K.K. is the data controller.</p>
<p>*Updated on December 20, 2023 with additional information on uses and disclosures on personal data.</p>

<p>Prior Versions</p>
<a href="/termsandconditions/privacy/7nov2023">November 7, 2023</a>
<br /><a href="/termsandconditions/privacy/3oct2023">October 3, 2023</a>
<br /><a href="/termsandconditions/privacy/10aug2022">August 10, 2023</a>
<br /><a href="/termsandconditions/privacy/12jul2023">July 12, 2023</a>
</div>
      </div>
		</div>




      </div>
			</div>

                  </div>




  
</article>




                                        </main>
      <div class="page__footer">
              <footer class="bg-nr-black">
  <div class="nr-fluid-container py-16 large:py-24 text-gray-2">
                      

      <div class="flex flex-col medium:flex-row large:justify-between gap-8 pb-12">
	<div class="grow medium:basis-1/2 large:basis-auto large:grow-0">
					
              
      

		
<div class="n01-link-list  medium:mx-0">
			<div class="hidden">
			      Company
  
		</div>
		<ul  class="medium:columns-2 large:columns-3 gap-8">
		                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/about" aria-label="About Us" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">About Us</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/about/leadership" aria-label="Leadership" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Leadership</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/about/culture" aria-label="Careers" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Careers</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://newrelic.org/" aria-label="Social Impact" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Social Impact</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/about/newsroom" aria-label="Newsroom" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Newsroom</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/customers" aria-label="Customers" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Customers</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/solutions/partners" aria-label="Partner Program" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Partner Program</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/sites/default/files/2023-11/NEWR-Code-of-Conduct-Oct-2022-final.pdf" aria-label="Code of Conduct" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Code of Conduct</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/procurement/suppliers" aria-label="Suppliers Portal" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Suppliers Portal</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/security" aria-label="Security" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Security</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/pricing/free-tier" aria-label="Free Tier Pricing" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Free Tier Pricing</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/about/environmental-social-governance" aria-label="ESG" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">ESG</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/about/contact-us" aria-label="Contact Us" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">Contact Us</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/competitive-comparison/datadog" aria-label="New Relic vs Datadog" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">New Relic vs Datadog</div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="/observability-forecast/2023/state-of-observability" aria-label="2023 Observability Forecast" class="medium:inline-block flex flex-row " itemprop="url">
				<div>
							<div  class="text-style-body xlarge:text-lg larger:text-base inline-block border-b border-transparent group-hover:border-nr-white" itemprop="name">2023 Observability Forecast</div>
											</div>
	</a>
</li>
  
  
	</ul>
  </div>


  
			</div>
	<div class="footer-menu__social-links large:basis-[168px]">
					
              
      

		
<div class="n01-link-list  medium:mx-0">
			<div class="text-lg mb-8 large:text-right">
			      Follow Us
  
		</div>
		<ul  class="flex flex-row flex-wrap large:justify-end gap-x-6 gap-y-8 max-w-[168px]">
		                      
      




	
<li class="n01-link footer-icon-link mb-0 mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://github.com/newrelic" aria-label="GitHub" class="medium:inline-block flex flex-row " itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
									<span aria-hidden="true" focusable="false">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M20.07 0H3.93A3.93 3.93 0 0 0 0 3.93v16.14a3.92 3.92 0 0 0 3 3.81c.304.076.616.116.93.12h5.26v-2.39c-3.55.75-4.27-1.51-4.27-1.51a3.75 3.75 0 0 0-1.36-1.89c-1.24-.75 0-.75 0-.75.396.06.772.21 1.1.44.326.23.596.531.79.88.177.316.415.595.7.82.294.233.635.4 1 .49.35.1.718.13 1.08.09a2.64 2.64 0 0 0 1-.35 2.56 2.56 0 0 1 .83-1.69 5.67 5.67 0 0 1-2.37-.44 5.64 5.64 0 0 1-3.44-5.87A4.9 4.9 0 0 1 5.56 8.4 4.5 4.5 0 0 1 5.68 5h.5a7.08 7.08 0 0 1 3 1.33 13 13 0 0 1 3.17-.42c1.08 0 2.156.14 3.2.42C18.09 4.7 19.19 5 19.19 5a4.74 4.74 0 0 1 0 3.36 5 5 0 0 1 1.32 3.43v1.25a5.003 5.003 0 0 1-.25 1.15A5.44 5.44 0 0 1 19 16.3a5.54 5.54 0 0 1-2 1.38 5.66 5.66 0 0 1-2.37.42c.298.313.53.684.68 1.09.15.413.211.852.18 1.29v3.39a.724.724 0 0 0 0 .13h4.94A3.93 3.93 0 0 0 24 20.07V3.93A3.93 3.93 0 0 0 20.07 0Z" fill="currentColor"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>

					</span>
											</div>
				<div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link footer-icon-link mb-0 mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://www.twitch.tv/new_relic" aria-label="Twitch" class="medium:inline-block flex flex-row " itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
									<span aria-hidden="true" focusable="false">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.474 15.657V5.44h12.018v7.634a.328.328 0 0 1-.118.275c-.377.365-.76.731-1.143 1.097-.383.365-.766.731-1.143 1.097-.047.068-.165.114-.259.114h-3.676a.349.349 0 0 0-.283.114l-1.767 1.715c-.015.03-.04.05-.069.072-.015.012-.032.026-.049.042v-1.943h-3.51Zm5.514-7.268v4.32h-1.484v-4.32h1.484Zm2.521 4.32h1.461v-4.32h-1.46v4.32Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm4.006 18.08V20c.023 0 .047 0 .047.023h2.31c.07 0 .164-.069.211-.114.188-.182.378-.364.57-.547.384-.368.773-.74 1.15-1.122a.525.525 0 0 1 .401-.16h2.592a.434.434 0 0 0 .33-.137l4.242-4.114a.41.41 0 0 0 .141-.32V4H5.155c-.118 0-.165.046-.212.16a83.75 83.75 0 0 1-.896 2.583l-.01.049c-.02.092-.037.173-.037.27V18.08h4.006Z" fill="currentColor"/></svg>

					</span>
											</div>
				<div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link footer-icon-link mb-0 mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://twitter.com/newrelic" aria-label="Twitter" class="medium:inline-block flex flex-row " itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
									<span aria-hidden="true" focusable="false">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.068 0A2.934 2.934 0 0 1 24 2.932v18.136A2.934 2.934 0 0 1 21.068 24H2.932A2.934 2.934 0 0 1 0 21.068V2.932A2.934 2.934 0 0 1 2.932 0h18.136ZM9.165 19.9c6.372 0 9.856-5.28 9.856-9.856 0-.15 0-.302-.007-.445a7.098 7.098 0 0 0 1.731-1.796 7.03 7.03 0 0 1-1.99.546 3.462 3.462 0 0 0 1.523-1.918 7.014 7.014 0 0 1-2.198.84 3.465 3.465 0 0 0-5.898 3.16 9.827 9.827 0 0 1-7.14-3.62 3.475 3.475 0 0 0-.468 1.739c0 1.2.611 2.263 1.545 2.88A3.403 3.403 0 0 1 4.553 11v.043a3.468 3.468 0 0 0 2.78 3.398 3.45 3.45 0 0 1-1.566.057A3.459 3.459 0 0 0 9 16.905a6.963 6.963 0 0 1-5.13 1.43A9.651 9.651 0 0 0 9.165 19.9Z" fill="currentColor"/></svg>

					</span>
											</div>
				<div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link footer-icon-link mb-0 mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="http://www.facebook.com/NewRelic" aria-label="Facebook" class="medium:inline-block flex flex-row " itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
									<span aria-hidden="true" focusable="false">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.069 0A2.934 2.934 0 0 1 24 2.932v18.136a2.933 2.933 0 0 1-2.931 2.93H2.932A2.933 2.933 0 0 1 0 21.069V2.932A2.933 2.933 0 0 1 2.932 0H21.07Zm-4.81 24v-8.37h2.797l.532-3.471h-3.33V9.908c0-.95.466-1.876 1.957-1.876h1.514V5.078s-1.374-.235-2.688-.235c-2.743 0-4.534 1.662-4.534 4.67v2.646H9.458v3.47h3.049V24" fill="currentColor"/></svg>

					</span>
											</div>
				<div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link footer-icon-link mb-0 mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://www.linkedin.com/company/new-relic-inc-" aria-label="LinkedIn" class="medium:inline-block flex flex-row " itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
									<span aria-hidden="true" focusable="false">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.068 0A2.934 2.934 0 0 1 24 2.932v18.136A2.934 2.934 0 0 1 21.068 24H2.932A2.934 2.934 0 0 1 0 21.068V2.932A2.934 2.934 0 0 1 2.932 0h18.136ZM7.522 19.841V9.261H4.004v10.58h3.518Zm12.681 0v-6.067c0-3.25-1.735-4.762-4.049-4.762-1.866 0-2.702 1.026-3.17 1.747V9.26H9.469c.046.993 0 10.58 0 10.58h3.516v-5.909c0-.316.023-.632.116-.858.254-.632.833-1.286 1.805-1.286 1.272 0 1.781.97 1.781 2.392v5.661h3.517ZM5.787 4.16c-1.204 0-1.99.791-1.99 1.828 0 1.015.762 1.828 1.943 1.828h.023c1.226 0 1.99-.813 1.99-1.828C7.73 4.952 6.99 4.161 5.787 4.16Z" fill="currentColor"/></svg>

					</span>
											</div>
				<div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link footer-icon-link mb-0 mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://www.instagram.com/newrelic/" aria-label="Instagram" class="medium:inline-block flex flex-row " itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
									<span aria-hidden="true" focusable="false">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="4" fill="#1D252C"/><path d="M12.002 4.621c2.405 0 2.69.01 3.636.053.879.038 1.353.186 1.67.31.418.16.72.358 1.034.67.316.317.51.616.671 1.035.123.316.271.794.31 1.67.042.95.052 1.234.052 3.636 0 2.405-.01 2.69-.052 3.636-.039.879-.187 1.353-.31 1.67-.162.418-.358.72-.671 1.034a2.77 2.77 0 0 1-1.034.671c-.317.123-.795.271-1.67.31-.95.042-1.235.052-3.636.052-2.405 0-2.69-.01-3.636-.052-.88-.039-1.354-.187-1.67-.31a2.784 2.784 0 0 1-1.034-.671A2.768 2.768 0 0 1 4.99 17.3c-.123-.317-.27-.795-.31-1.67-.041-.95-.052-1.235-.052-3.636 0-2.405.01-2.69.053-3.636.038-.88.186-1.354.31-1.67.161-.419.358-.721.67-1.034.317-.317.616-.51 1.035-.672.316-.123.794-.27 1.67-.31.946-.041 1.23-.052 3.636-.052Zm0-1.621c-2.444 0-2.75.01-3.71.053-.956.042-1.614.197-2.184.418a4.394 4.394 0 0 0-1.596 1.041 4.41 4.41 0 0 0-1.04 1.593c-.222.573-.377 1.227-.42 2.184C3.012 9.252 3 9.558 3 12.002s.01 2.75.053 3.71c.042.956.197 1.614.418 2.183a4.393 4.393 0 0 0 1.041 1.596 4.4 4.4 0 0 0 1.593 1.038c.573.221 1.227.376 2.184.418.96.043 1.265.053 3.71.053 2.443 0 2.749-.01 3.709-.053.956-.042 1.614-.197 2.184-.418a4.4 4.4 0 0 0 1.593-1.038 4.4 4.4 0 0 0 1.037-1.592c.221-.573.376-1.228.418-2.184.042-.96.053-1.266.053-3.71s-.01-2.75-.053-3.71c-.042-.956-.197-1.613-.418-2.183a4.216 4.216 0 0 0-1.03-1.6 4.4 4.4 0 0 0-1.593-1.037c-.573-.222-1.228-.377-2.184-.419-.963-.045-1.27-.056-3.713-.056Z" fill="currentColor"/><path d="M12.002 7.378a4.625 4.625 0 0 0 0 9.248 4.625 4.625 0 0 0 0-9.248Zm0 7.623a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM17.888 7.195a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" fill="currentColor"/></svg>

					</span>
											</div>
				<div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link footer-icon-link mb-0 mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://www.youtube.com/user/NewRelicInc/featured" aria-label="YouTube" class="medium:inline-block flex flex-row " itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
									<span aria-hidden="true" focusable="false">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.931 0h16.138A3.931 3.931 0 0 1 24 3.931v16.138A3.931 3.931 0 0 1 20.069 24H3.931A3.931 3.931 0 0 1 0 20.069V3.931A3.931 3.931 0 0 1 3.931 0Zm1.737 6.668c1.27-.33 6.327-.33 6.327-.33s5.067 0 6.337.35c.69.18 1.24.73 1.419 1.419.35 1.27.34 3.908.34 3.908s0 2.629-.34 3.888c-.18.7-.73 1.24-1.42 1.43-1.269.33-6.336.33-6.336.33s-5.048 0-6.327-.34a2.06 2.06 0 0 1-1.43-1.43c-.33-1.25-.33-3.888-.33-3.888s0-2.629.33-3.898c.19-.69.75-1.25 1.43-1.44Zm8.926 5.337-4.208-2.429v4.848l4.208-2.419Z" fill="currentColor"/></svg>

					</span>
											</div>
				<div>
											</div>
	</a>
</li>
  
  
	</ul>
  </div>


  
              
      

		
<div class="n01-link-list  medium:mx-0">
			<div class="text-lg mb-8 large:text-right">
			      Download the New Relic App
  
		</div>
		<ul  class="flex flex-row flex-wrap large:justify-end gap-x-6 gap-y-8 max-w-[168px]">
		                      
      




	
<li class="n01-link footer-icon-link mb-0 mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://play.google.com/store/apps/details?id=com.newrelic.rpm" aria-label="Google Play" class="medium:inline-block flex flex-row " itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
									<span aria-hidden="true" focusable="false">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5435.8 1604"><title>Get it on Google Play</title><path d="M5234.4 1604h-5033C90.4 1604 0 1513.6 0 1403.5v-1203C0 90 90.4 0 201.4 0h5033c110.9 0 201.4 90 201.4 200.5v1203c0 110.1-90.5 200.5-201.4 200.5z" fill-rule="evenodd" clip-rule="evenodd"/><path d="M5234.4 32.1c93.1 0 169.3 75.7 169.3 168.4v1203c0 92.7-75.7 168.4-169.3 168.4h-5033c-93.1 0-169.3-75.7-169.3-168.4v-1203c0-92.7 75.7-168.4 169.3-168.4h5033zm0-32.1h-5033C90.4 0 0 90.4 0 200.5v1203C0 1514 90.4 1604 201.4 1604h5033c110.9 0 201.4-90 201.4-200.5v-1203C5435.8 90.4 5345.3 0 5234.4 0z" fill-rule="evenodd" clip-rule="evenodd" fill="#a6a6a6"/><path d="M2863.6 530.6c-36.3 0-66.9-12.7-91.1-37.7-24-24.3-37.4-57.8-36.8-92 0-36.5 12.4-67.4 36.8-91.9 24.1-25 54.7-37.7 91-37.7 35.9 0 66.5 12.7 91.1 37.7 24.4 25.3 36.8 56.2 36.8 91.9-.4 36.6-12.8 67.5-36.8 91.9-24.1 25.2-54.7 37.8-91 37.8zm-1080.1 0c-35.5 0-66.3-12.5-91.5-37.2-25-24.6-37.7-55.7-37.7-92.4s12.7-67.8 37.7-92.4c24.7-24.7 55.5-37.2 91.5-37.2 17.6 0 34.7 3.5 51.1 10.6 16.1 6.9 29.2 16.3 38.9 27.8l2.4 2.9-27.1 26.6-2.8-3.3c-15.3-18.2-35.8-27.1-62.9-27.1-24.2 0-45.3 8.6-62.7 25.6-17.5 17.1-26.4 39.5-26.4 66.6s8.9 49.5 26.4 66.6c17.4 17 38.5 25.6 62.7 25.6 25.8 0 47.5-8.6 64.4-25.6 10-10 16.2-24 18.4-41.7H1779v-37.4h124.2l.5 3.4c.9 6.3 1.8 12.8 1.8 18.8 0 34.5-10.4 62.4-31 83-23.4 24.4-54 36.8-91 36.8zm1436.1-5.3h-38.3L3064 337.6l1 33.8v153.8h-38.3V276.7h43.7l1.2 1.9 110.3 176.8-1-33.7v-145h38.7v248.6zm-643.8 0H2537V314.1h-67.3v-37.4H2643v37.4h-67.3v211.2zm-137.7 0h-38.7V276.7h38.7v248.6zm-217.5 0h-38.7V314.1h-67.3v-37.4h173.3v37.4h-67.3v211.2zm-130.5-.4h-148.4V276.7h148.4v37.4h-109.6v68.2h98.9v37h-98.9v68.2h109.6v37.4zm710.8-57.7c17.3 17.3 38.3 26 62.7 26 25.1 0 45.6-8.5 62.7-26 17-17 25.6-39.3 25.6-66.2s-8.6-49.3-25.5-66.2c-17.3-17.3-38.4-26-62.7-26-25.1 0-45.6 8.5-62.6 26-17 17-25.6 39.3-25.6 66.2s8.5 49.3 25.4 66.2z" fill="#fff"/><path d="M2732.1 872.4c-94.5 0-171.1 71.7-171.1 170.6 0 98 77.1 170.6 171.1 170.6 94.5 0 171.1-72.2 171.1-170.6 0-98.9-76.6-170.6-171.1-170.6zm0 273.6c-51.7 0-96.2-42.8-96.2-103.4 0-61.5 44.6-103.4 96.2-103.4 51.7 0 96.2 41.9 96.2 103.4.1 61-44.5 103.4-96.2 103.4zm-373.3-273.6c-94.5 0-171.1 71.7-171.1 170.6 0 98 77.1 170.6 171.1 170.6 94.5 0 171.1-72.2 171.1-170.6 0-98.9-76.7-170.6-171.1-170.6zm0 273.6c-51.7 0-96.2-42.8-96.2-103.4 0-61.5 44.6-103.4 96.2-103.4 51.7 0 96.2 41.9 96.2 103.4 0 61-44.5 103.4-96.2 103.4zm-444.2-221.5v72.2h173.3c-5.3 40.5-18.7 70.4-39.2 90.9-25.4 25.4-64.6 53-133.7 53-106.5 0-189.8-86-189.8-192.5s83.3-192.5 189.8-192.5c57.5 0 99.4 22.7 130.5 51.7l51.2-51.2c-43.2-41.4-100.7-73.1-181.3-73.1-146.1 0-268.7 119-268.7 264.7 0 146.1 122.5 264.7 268.7 264.7 78.9 0 138.1-25.8 184.9-74.4 47.7-47.7 62.8-115 62.8-169.3 0-16.9-1.3-32.1-4-45h-244.6c.1-.1.1.8.1.8zm1816.9 56.2C3717.2 942.4 3674 872 3585.4 872c-87.8 0-160.8 69.1-160.8 170.6 0 95.8 72.2 170.6 169.3 170.6 78 0 123.4-47.7 142.1-75.7l-57.9-38.8c-19.2 28.5-45.9 47.2-83.8 47.2-38.3 0-65.1-17.4-82.9-51.7l228.1-94.5c0 .1-8-19-8-19zm-232.6 57c-1.8-65.9 51.2-99.4 89.1-99.4 29.9 0 54.8 14.7 63.3 36.1l-152.4 63.3zM3313.6 1203h74.9V701.8h-74.9V1203zm-123-292.7h-2.7c-16.9-20.1-49-38.3-90-38.3-85.1 0-163.5 74.9-163.5 171.1 0 95.8 78 169.8 163.5 169.8 40.5 0 73.1-18.3 90-38.8h2.7v24.5c0 65.1-34.8 100.2-90.9 100.2-45.9 0-74.4-33-86-60.6l-65.1 27.2c18.7 45 68.6 100.7 151 100.7 87.8 0 162.2-51.7 162.2-177.8V882.2H3191v28.1h-.4zm-86 235.7c-51.7 0-94.9-43.2-94.9-102.9 0-60.2 43.2-103.8 94.9-103.8 51.2 0 90.9 44.1 90.9 103.8.5 59.7-39.6 102.9-90.9 102.9zm977.6-444.2h-179.1V1203h74.9v-189.8h104.3c82.9 0 164.4-60.1 164.4-155.5s-81.2-155.9-164.5-155.9zm2.2 241.4h-106.5v-172h106.5c56.1 0 87.8 46.3 87.8 86 0 39.3-32.1 86-87.8 86zm462.5-71.7c-54.4 0-110.5 24.1-133.7 76.6l66.4 27.6c14.3-27.6 40.5-37 68.2-37 38.8 0 78 23.2 78.9 64.6v5.3c-13.4-7.6-42.8-19.2-78-19.2-71.7 0-144.4 39.2-144.4 112.7 0 67.3 58.8 110.5 124.3 110.5 50.3 0 78-22.7 95.3-49h2.7v38.8h72.2v-192c0-89.4-66.4-138.9-151.9-138.9zm-9.4 274.5c-24.5 0-58.8-12-58.8-42.8 0-38.8 42.8-53.5 79.3-53.5 33 0 48.6 7.1 68.2 16.9-5.4 45-43.4 79-88.7 79.4zm424.7-263.8l-86 217.4h-2.7l-89.1-217.4h-80.6l133.7 303.9-76.2 168.9h78L5045 882.2h-82.8zM4288 1203h74.9V701.8H4288V1203z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1682.108" y1="1339.478" x2="1624.292" y2="1309.634" gradientTransform="matrix(11.64 0 0 -22.55 -18705.596 30554.37)"><stop offset="0" stop-color="#00a0ff"/><stop offset=".007" stop-color="#00a1ff"/><stop offset=".26" stop-color="#00beff"/><stop offset=".512" stop-color="#00d2ff"/><stop offset=".76" stop-color="#00dfff"/><stop offset="1" stop-color="#00e3ff"/></linearGradient><path d="M418.4 302.1c-11.6 12.5-18.3 31.6-18.3 56.6v886.7c0 25 6.7 44.1 18.7 56.1l3.1 2.7 496.8-496.8v-11.1L421.5 299.4l-3.1 2.7z" fill-rule="evenodd" clip-rule="evenodd" fill="url(#a)"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="1712.662" y1="1274.838" x2="1606.561" y2="1274.838" gradientTransform="matrix(9.145 0 0 -7.7 -14305.538 10618.251)"><stop offset="0" stop-color="#ffe000"/><stop offset=".409" stop-color="#ffbd00"/><stop offset=".775" stop-color="orange"/><stop offset="1" stop-color="#ff9c00"/></linearGradient><path d="M1084 973.5L918.3 807.8v-11.6L1084 630.5l3.6 2.2 196 111.4c56.1 31.6 56.1 83.8 0 115.8l-196 111.4-3.6 2.2z" fill-rule="evenodd" clip-rule="evenodd" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1707.441" y1="1290.047" x2="1646.682" y2="1211.223" gradientTransform="matrix(15.02 0 0 -11.5775 -24650.229 15829.648)"><stop offset="0" stop-color="#ff3a44"/><stop offset="1" stop-color="#c31162"/></linearGradient><path d="M1087.6 971.3L918.3 802l-499.9 499.9c18.3 19.6 49 21.8 83.3 2.7l585.9-333.3" fill-rule="evenodd" clip-rule="evenodd" fill="url(#c)"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="1660.636" y1="1365.668" x2="1687.767" y2="1330.45" gradientTransform="matrix(15.02 0 0 -11.5715 -24650.229 15809.992)"><stop offset="0" stop-color="#32a071"/><stop offset=".069" stop-color="#2da771"/><stop offset=".476" stop-color="#15cf74"/><stop offset=".801" stop-color="#06e775"/><stop offset="1" stop-color="#00f076"/></linearGradient><path d="M1087.6 632.7L501.7 299.9c-34.3-19.6-65.1-16.9-83.3 2.7L918.3 802l169.3-169.3z" fill-rule="evenodd" clip-rule="evenodd" fill="url(#d)"/><path d="M1084 967.7l-581.9 330.6c-32.5 18.7-61.5 17.4-80.2.4l-3.1 3.1 3.1 2.7c18.7 16.9 47.7 18.3 80.2-.4L1088 971.3l-4-3.6z" opacity=".2" fill-rule="evenodd" clip-rule="evenodd"/><path d="M1283.6 854.1l-200.1 113.6 3.6 3.6 196-111.4c28.1-16 41.9-37 41.9-57.9-1.7 19.2-16 37.4-41.4 52.1z" opacity=".12" fill-rule="evenodd" clip-rule="evenodd"/><path d="M501.7 305.7l781.9 444.2c25.4 14.3 39.7 33 41.9 52.1 0-20.9-13.8-41.9-41.9-57.9L501.7 299.9c-56.1-32.1-101.6-5.3-101.6 58.8v5.8c0-64.2 45.5-90.5 101.6-58.8z" opacity=".25" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/></svg>
					</span>
											</div>
				<div>
											</div>
	</a>
</li>
  
                      
      




	
<li class="n01-link footer-icon-link mb-0 mb-8 rounded-lg border-solid border-transparent hover:border-nr-green focus:border-nr-green group hover:text-gray-1" itemscope itemtype="https://schema.org/SiteNavigationElement">
	<a href="https://itunes.apple.com/us/app/new-relic/id594038638?ls=1&amp;mt=8" aria-label="App Store" class="medium:inline-block flex flex-row " itemprop="url">
					<div class="items-center larger:text-base xlarge:text-lg mb-2">
									<span aria-hidden="true" focusable="false">
						<svg width="78" height="26" viewBox="0 0 78 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M71.7886 8.45e-05H6.21494C5.97592 8.45e-05 5.73976 8.45e-05 5.50137 0.0013845C5.30181 0.0026845 5.10385 0.006461 4.90237 0.0096395C4.46468 0.0147757 4.02802 0.0531741 3.59618 0.124501C3.16495 0.197381 2.74723 0.33478 2.35714 0.532051C1.96753 0.730991 1.61154 0.989493 1.30207 1.29818C0.990971 1.606 0.731649 1.9618 0.534073 2.35189C0.335951 2.74121 0.198572 3.15839 0.126682 3.58905C0.0541086 4.01915 0.0150561 4.45422 0.00987514 4.89035C0.00382621 5.08964 0.00318742 5.28959 0 5.4889V20.5132C0.00318742 20.715 0.00382621 20.9105 0.00987514 21.1124C0.0150577 21.5485 0.0541102 21.9836 0.126682 22.4136C0.198374 22.8445 0.33576 23.262 0.534073 23.6514C0.73156 24.0403 0.990918 24.3946 1.30207 24.7007C1.61036 25.0108 1.96659 25.2695 2.35714 25.4669C2.74722 25.6647 3.1649 25.8029 3.59618 25.8769C4.02809 25.9477 4.46471 25.9861 4.90237 25.9918C5.10385 25.9962 5.30181 25.9988 5.50137 25.9988C5.73975 26.0001 5.97593 26.0001 6.21494 26.0001H71.7886C72.0228 26.0001 72.2609 26.0001 72.4951 25.9988C72.6938 25.9988 72.8975 25.9962 73.0961 25.9918C73.5329 25.9864 73.9687 25.948 74.3997 25.8769C74.8324 25.8024 75.2516 25.6642 75.6435 25.4669C76.0337 25.2694 76.3896 25.0107 76.6977 24.7007C77.008 24.3934 77.2679 24.0393 77.4678 23.6514C77.6647 23.2617 77.8008 22.8443 77.8714 22.4136C77.9441 21.9835 77.9845 21.5485 77.9924 21.1124C77.9949 20.9105 77.9949 20.715 77.9949 20.5132C78 20.277 78 20.0422 78 19.8022V6.19857C78 5.96053 78 5.7244 77.9949 5.4889C77.9949 5.28959 77.9949 5.08964 77.9924 4.89032C77.9845 4.45416 77.9441 4.01919 77.8714 3.58902C77.8006 3.15862 77.6645 2.74146 77.4678 2.35186C77.0655 1.56996 76.4275 0.933501 75.6435 0.531992C75.2515 0.335203 74.8323 0.197841 74.3997 0.124442C73.9688 0.0528013 73.5329 0.0143895 73.0961 0.0095485C72.8975 0.0063765 72.6938 0.0025675 72.4951 0.0013C72.2609 0 72.0228 0 71.7886 0V8.45e-05Z" fill="black"/><path d="M5.50459 25.4314C5.30599 25.4314 5.11219 25.4288 4.91515 25.4244C4.50697 25.4191 4.09974 25.3837 3.6968 25.3184C3.32108 25.2539 2.95711 25.1339 2.6169 24.9623C2.2798 24.7921 1.97234 24.569 1.7063 24.3015C1.4364 24.0371 1.2117 23.7305 1.0411 23.3938C0.868624 23.0548 0.749258 22.6916 0.687163 22.3166C0.620106 21.9137 0.583826 21.5062 0.578635 21.0978C0.574502 20.9607 0.569092 20.5043 0.569092 20.5043V5.48895C0.569092 5.48895 0.574854 5.03953 0.578667 4.9075C0.583638 4.49974 0.619707 4.09295 0.686564 3.69065C0.748773 3.31464 0.868232 2.95031 1.0408 2.61029C1.21078 2.27379 1.43423 1.96694 1.7025 1.70162C1.97046 1.43378 2.27891 1.20952 2.61658 1.03701C2.95601 0.865989 3.31929 0.746804 3.69425 0.683454C4.09851 0.617522 4.50716 0.581876 4.91676 0.576815L5.50491 0.568878H72.492L73.0872 0.577133C73.493 0.581943 73.898 0.617271 74.2985 0.682817C74.6773 0.746962 75.0443 0.866978 75.3877 1.03892C76.0641 1.38657 76.6146 1.93658 76.9618 2.61187C77.1316 2.94955 77.2492 3.31091 77.3107 3.68367C77.3783 4.08927 77.4162 4.49926 77.424 4.91036C77.4258 5.09444 77.4258 5.29217 77.4258 5.48895C77.431 5.7327 77.431 5.9647 77.431 6.19861V19.8022C77.431 20.0384 77.431 20.2688 77.4258 20.5011C77.4258 20.7125 77.4258 20.9061 77.4233 21.1054C77.4157 21.5092 77.3785 21.9119 77.3119 22.3102C77.2511 22.6879 77.1324 23.054 76.9599 23.3957C76.7881 23.7288 76.5647 24.0328 76.2979 24.2964C76.0316 24.5654 75.7236 24.7898 75.3858 24.961C75.0434 25.1339 74.6769 25.2544 74.2985 25.3184C73.8956 25.384 73.4883 25.4195 73.0801 25.4244C72.8892 25.4288 72.6893 25.4314 72.4952 25.4314L71.7886 25.4327L5.50459 25.4314Z" fill="white"/><path d="M16.2935 12.9282C16.3008 12.3641 16.451 11.8109 16.7303 11.3202C17.0096 10.8295 17.4088 10.4172 17.8908 10.1217C17.5846 9.68564 17.1807 9.32676 16.7111 9.07358C16.2414 8.82041 15.7191 8.67992 15.1855 8.66328C14.0473 8.54413 12.9438 9.34247 12.3638 9.34247C11.7725 9.34247 10.8795 8.67511 9.9178 8.69483C9.29578 8.71487 8.68956 8.89525 8.15823 9.21838C7.62689 9.54152 7.18855 9.99639 6.88593 10.5387C5.57503 12.802 6.55284 16.1283 7.80859 17.9578C8.43687 18.8536 9.17114 19.8543 10.1319 19.8188C11.0721 19.7799 11.4233 19.221 12.5582 19.221C13.6825 19.221 14.012 19.8188 14.9923 19.7963C16.0011 19.7799 16.6368 18.8964 17.243 17.9921C17.6944 17.3538 18.0418 16.6483 18.2722 15.9018C17.6861 15.6546 17.1859 15.2408 16.834 14.712C16.4822 14.1832 16.2942 13.5628 16.2935 12.9282Z" fill="black"/><path d="M14.4419 7.46008C14.992 6.80158 15.263 5.95519 15.1974 5.10065C14.357 5.18867 13.5807 5.5892 13.0232 6.22243C12.7506 6.53178 12.5419 6.89167 12.4088 7.28153C12.2758 7.67139 12.2211 8.08357 12.248 8.4945C12.6683 8.49882 13.0842 8.40797 13.4642 8.22878C13.8442 8.0496 14.1785 7.78677 14.4419 7.46008Z" fill="black"/><path d="M27.5733 17.6409H24.488L23.747 19.8226H22.4402L25.3626 11.7509H26.7203L29.6427 19.8226H28.3136L27.5733 17.6409ZM24.8075 16.6342H27.2532L26.0475 13.0935H26.0138L24.8075 16.6342Z" fill="black"/><path d="M35.9541 16.8805C35.9541 18.7092 34.9726 19.8842 33.4913 19.8842C33.1161 19.9037 32.7429 19.8176 32.4145 19.6355C32.0862 19.4534 31.8158 19.1828 31.6345 18.8546H31.6065V21.7694H30.3951V13.9377H31.5677V14.9165H31.5899C31.7796 14.5899 32.0545 14.3207 32.3854 14.1375C32.7163 13.9543 33.0908 13.864 33.469 13.8761C34.9668 13.8761 35.9541 15.0568 35.9541 16.8805ZM34.709 16.8805C34.709 15.689 34.0916 14.9057 33.1495 14.9057C32.224 14.9057 31.6014 15.7055 31.6014 16.8805C31.6014 18.0662 32.224 18.8603 33.1495 18.8603C34.0916 18.8603 34.709 18.0827 34.709 16.8805H34.709Z" fill="black"/><path d="M42.4497 16.8805C42.4497 18.7092 41.4678 19.8842 39.9866 19.8842C39.6113 19.9037 39.2382 19.8176 38.9098 19.6355C38.5814 19.4534 38.3111 19.1828 38.1298 18.8546H38.1017V21.7694H36.8904V13.9377H38.0629V14.9165H38.0852C38.2748 14.5899 38.5497 14.3207 38.8806 14.1375C39.2115 13.9543 39.586 13.864 39.9643 13.8761C41.4621 13.8761 42.4497 15.0568 42.4497 16.8805ZM41.2043 16.8805C41.2043 15.689 40.5868 14.9057 39.6447 14.9057C38.7192 14.9057 38.0967 15.7055 38.0967 16.8805C38.0967 18.0662 38.7192 18.8603 39.6447 18.8603C40.5868 18.8603 41.2043 18.0827 41.2043 16.8805Z" fill="black"/><path d="M46.742 17.5736C46.8317 18.3741 47.6115 18.8996 48.6771 18.8996C49.6981 18.8996 50.4327 18.3741 50.4327 17.6523C50.4327 17.0258 49.9896 16.6507 48.9406 16.3936L47.8916 16.1416C46.4053 15.7836 45.7152 15.0904 45.7152 13.9656C45.7152 12.5729 46.9323 11.6163 48.6599 11.6163C50.3709 11.6163 51.5435 12.5729 51.5829 13.9656H50.3601C50.2869 13.1601 49.6192 12.6739 48.6433 12.6739C47.6675 12.6739 46.9998 13.1658 46.9998 13.8818C46.9998 14.4525 47.4263 14.7883 48.4696 15.0453L49.3614 15.2637C51.0221 15.6553 51.7115 16.3206 51.7115 17.5012C51.7115 19.0113 50.5059 19.9571 48.5873 19.9571C46.7922 19.9571 45.5803 19.0335 45.502 17.5736L46.742 17.5736Z" fill="black"/><path d="M54.3271 12.545V13.9377H55.4493V14.8943H54.3271V18.1386C54.3271 18.6426 54.5518 18.8774 55.0451 18.8774C55.1783 18.8751 55.3114 18.8658 55.4436 18.8495V19.8004C55.2218 19.8417 54.9964 19.8604 54.7708 19.8562C53.576 19.8562 53.11 19.4087 53.11 18.2674V14.8943H52.252V13.9377H53.11V12.545H54.3271Z" fill="black"/><path d="M56.0986 16.8805C56.0986 15.0289 57.1922 13.8654 58.8975 13.8654C60.6086 13.8654 61.6971 15.0289 61.6971 16.8805C61.6971 18.7372 60.6143 19.8956 58.8975 19.8956C57.1814 19.8956 56.0986 18.7372 56.0986 16.8805ZM60.4628 16.8805C60.4628 15.6103 59.8791 14.8607 58.8975 14.8607C57.916 14.8607 57.3323 15.616 57.3323 16.8805C57.3323 18.1557 57.916 18.8997 58.8975 18.8997C59.8791 18.8997 60.4628 18.1557 60.4628 16.8805H60.4628Z" fill="black"/><path d="M62.6958 13.9377H63.8511V14.9393H63.8792C63.9573 14.6265 64.1411 14.35 64.3996 14.1564C64.6581 13.9628 64.9756 13.8638 65.2987 13.8761C65.4383 13.8756 65.5775 13.8907 65.7137 13.9212V15.0511C65.5375 14.9974 65.3536 14.9727 65.1694 14.9781C64.9934 14.971 64.818 15.0019 64.6551 15.0688C64.4923 15.1356 64.3459 15.2369 64.226 15.3655C64.106 15.4941 64.0155 15.6471 63.9604 15.814C63.9054 15.9808 63.8872 16.1575 63.9072 16.332V19.8226H62.6958L62.6958 13.9377Z" fill="black"/><path d="M71.2987 18.0941C71.1357 19.1624 70.0924 19.8956 68.7576 19.8956C67.0408 19.8956 65.9752 18.7486 65.9752 16.9084C65.9752 15.0625 67.0465 13.8653 68.7066 13.8653C70.3394 13.8653 71.3661 14.9838 71.3661 16.7681V17.182H67.198V17.255C67.1788 17.4716 67.206 17.6897 67.2778 17.895C67.3496 18.1003 67.4644 18.288 67.6146 18.4457C67.7647 18.6034 67.9468 18.7273 68.1487 18.8094C68.3506 18.8915 68.5677 18.9299 68.7856 18.9219C69.0718 18.9486 69.3591 18.8825 69.6046 18.7334C69.8502 18.5842 70.0409 18.36 70.1484 18.0941L71.2987 18.0941ZM67.2038 16.3377H70.1541C70.165 16.143 70.1354 15.9481 70.0672 15.7653C69.999 15.5826 69.8936 15.4158 69.7577 15.2756C69.6217 15.1353 69.4582 15.0246 69.2773 14.9503C69.0965 14.8761 68.9022 14.8399 68.7066 14.8441C68.5094 14.843 68.3138 14.8808 68.1313 14.9553C67.9488 15.0299 67.7828 15.1398 67.6431 15.2787C67.5034 15.4175 67.3926 15.5826 67.3172 15.7644C67.2418 15.9462 67.2032 16.141 67.2038 16.3377V16.3377Z" fill="black"/><path d="M24.6561 5.6753C24.91 5.65713 25.1649 5.69538 25.4022 5.78732C25.6396 5.87925 25.8535 6.02256 26.0285 6.20692C26.2036 6.39127 26.3355 6.61208 26.4146 6.8534C26.4937 7.09473 26.5182 7.35056 26.4862 7.60245C26.4862 8.84151 25.8146 9.55374 24.6561 9.55374H23.2512V5.6753H24.6561ZM23.8553 9.00525H24.5886C24.7701 9.01607 24.9517 8.98639 25.1202 8.9184C25.2887 8.8504 25.4399 8.74578 25.5628 8.61216C25.6856 8.47854 25.7771 8.31929 25.8304 8.14599C25.8838 7.97269 25.8977 7.7897 25.8712 7.61035C25.8958 7.43171 25.8805 7.24986 25.8263 7.07782C25.7721 6.90579 25.6804 6.74784 25.5579 6.61529C25.4353 6.48273 25.2848 6.37886 25.1172 6.3111C24.9497 6.24335 24.7691 6.21339 24.5886 6.22339H23.8553V9.00525Z" fill="black"/><path d="M27.1685 8.08896C27.1501 7.89661 27.1721 7.70254 27.2333 7.5192C27.2945 7.33585 27.3934 7.16728 27.5237 7.02429C27.6541 6.8813 27.8129 6.76706 27.9901 6.68888C28.1673 6.6107 28.3589 6.57031 28.5527 6.57031C28.7465 6.57031 28.9381 6.6107 29.1153 6.68888C29.2925 6.76706 29.4514 6.8813 29.5817 7.02429C29.712 7.16728 29.8109 7.33585 29.8721 7.5192C29.9333 7.70254 29.9553 7.89661 29.9369 8.08896C29.9557 8.2815 29.9339 8.47584 29.8729 8.65948C29.8119 8.84312 29.713 9.012 29.5826 9.15527C29.4523 9.29854 29.2933 9.41303 29.1159 9.49138C28.9386 9.56973 28.7467 9.6102 28.5527 9.6102C28.3587 9.6102 28.1669 9.56973 27.9895 9.49138C27.8121 9.41303 27.6531 9.29854 27.5228 9.15527C27.3924 9.012 27.2935 8.84312 27.2325 8.65948C27.1715 8.47584 27.1497 8.2815 27.1685 8.08896ZM29.3411 8.08896C29.3411 7.45451 29.0553 7.08349 28.5537 7.08349C28.0502 7.08349 27.7669 7.45451 27.7669 8.08897C27.7669 8.72849 28.0502 9.09665 28.5537 9.09665C29.0553 9.09665 29.3411 8.72595 29.3411 8.08896H29.3411Z" fill="black"/><path d="M33.6168 9.55368H33.0159L32.4092 7.39801H32.3634L31.7593 9.55368H31.1642L30.3551 6.62677H30.9426L31.4684 8.86017H31.5117L32.1152 6.62677H32.6709L33.2743 8.86017H33.3201L33.8434 6.62677H34.4226L33.6168 9.55368Z" fill="black"/><path d="M35.1032 6.62676H35.6608V7.09173H35.7041C35.7775 6.92473 35.9013 6.78474 36.0583 6.69126C36.2153 6.59779 36.3977 6.55549 36.5799 6.57026C36.7228 6.55956 36.8662 6.58103 36.9995 6.63309C37.1329 6.68515 37.2528 6.76647 37.3504 6.87102C37.4479 6.97557 37.5207 7.10067 37.5632 7.23705C37.6057 7.37343 37.6168 7.51761 37.5959 7.65888V9.55363H37.0166V7.80394C37.0166 7.33358 36.8116 7.09966 36.3832 7.09966C36.2863 7.09516 36.1895 7.11162 36.0995 7.14791C36.0095 7.1842 35.9285 7.23946 35.8619 7.30991C35.7953 7.38036 35.7448 7.46433 35.7138 7.55607C35.6829 7.6478 35.6721 7.74513 35.6824 7.84138V9.55367H35.1031L35.1032 6.62676Z" fill="black"/><path d="M38.5188 5.48419H39.0981V9.55367H38.5188V5.48419Z" fill="black"/><path d="M39.9033 8.08895C39.8848 7.89659 39.9069 7.70251 39.9681 7.51916C40.0293 7.33581 40.1282 7.16723 40.2585 7.02424C40.3889 6.88125 40.5478 6.767 40.725 6.68882C40.9022 6.61064 41.0938 6.57025 41.2876 6.57025C41.4814 6.57025 41.673 6.61064 41.8502 6.68882C42.0274 6.767 42.1863 6.88125 42.3167 7.02424C42.447 7.16723 42.5459 7.33581 42.6071 7.51916C42.6683 7.70251 42.6904 7.89659 42.6719 8.08895C42.6907 8.2815 42.6689 8.47584 42.6079 8.65949C42.5468 8.84313 42.448 9.012 42.3176 9.15527C42.1872 9.29853 42.0282 9.41302 41.8508 9.49136C41.6735 9.5697 41.4816 9.61018 41.2876 9.61018C41.0936 9.61018 40.9017 9.5697 40.7243 9.49136C40.547 9.41302 40.388 9.29853 40.2576 9.15527C40.1272 9.012 40.0284 8.84313 39.9673 8.65949C39.9063 8.47584 39.8845 8.2815 39.9033 8.08895ZM42.0758 8.08895C42.0758 7.45451 41.79 7.08349 41.2884 7.08349C40.7849 7.08349 40.5016 7.45451 40.5016 8.08896C40.5016 8.72849 40.7849 9.09665 41.2884 9.09665C41.79 9.09664 42.0758 8.72594 42.0758 8.08895H42.0758Z" fill="black"/><path d="M43.2817 8.72594C43.2817 8.19908 43.6751 7.89535 44.3734 7.85219L45.1685 7.80649V7.55385C45.1685 7.24472 44.9635 7.07016 44.5676 7.07016C44.2442 7.07016 44.0201 7.18854 43.9558 7.39548H43.395C43.4542 6.89274 43.9285 6.57028 44.5943 6.57028C45.3302 6.57028 45.7452 6.93558 45.7452 7.55385V9.55368H45.1876V9.14235H45.1417C45.0487 9.2899 44.9181 9.41018 44.7632 9.49092C44.6083 9.57165 44.4347 9.60995 44.2601 9.6019C44.1369 9.61468 44.0124 9.60157 43.8945 9.56342C43.7767 9.52527 43.6682 9.46291 43.576 9.38038C43.4839 9.29785 43.41 9.19698 43.3594 9.08426C43.3087 8.97154 43.2822 8.84948 43.2817 8.72594ZM45.1685 8.47584V8.23114L44.4517 8.27684C44.0475 8.30382 43.8642 8.44093 43.8642 8.69896C43.8642 8.96239 44.0933 9.11568 44.4084 9.11568C44.5008 9.125 44.594 9.11571 44.6827 9.08835C44.7713 9.06099 44.8536 9.01613 44.9245 8.95643C44.9954 8.89673 45.0535 8.82342 45.0954 8.74086C45.1374 8.6583 45.1622 8.56817 45.1685 8.47584Z" fill="black"/><path d="M46.5065 8.08896C46.5065 7.16411 46.9832 6.57822 47.7248 6.57822C47.9083 6.56979 48.0903 6.6136 48.2497 6.70453C48.4091 6.79547 48.5392 6.92976 48.6249 7.09172H48.6682V5.48419H49.2474V9.55367H48.6924V9.09124H48.6465C48.5542 9.25211 48.4196 9.38473 48.2571 9.47475C48.0946 9.56476 47.9106 9.60874 47.7248 9.60191C46.9782 9.60194 46.5065 9.01604 46.5065 8.08896ZM47.1048 8.08896C47.1048 8.70976 47.3983 9.08333 47.8891 9.08333C48.3773 9.08333 48.679 8.70438 48.679 8.0915C48.679 7.48149 48.3741 7.09714 47.8891 7.09714C47.4015 7.09714 47.1048 7.47324 47.1048 8.08896H47.1048Z" fill="black"/><path d="M51.6441 8.08896C51.6257 7.89661 51.6477 7.70254 51.7089 7.5192C51.7701 7.33585 51.869 7.16728 51.9993 7.02429C52.1296 6.8813 52.2885 6.76706 52.4657 6.68888C52.6429 6.6107 52.8345 6.57031 53.0283 6.57031C53.2221 6.57031 53.4137 6.6107 53.5909 6.68888C53.7681 6.76706 53.9269 6.8813 54.0573 7.02429C54.1876 7.16728 54.2865 7.33585 54.3477 7.5192C54.4089 7.70254 54.4309 7.89661 54.4125 8.08896C54.4313 8.2815 54.4095 8.47584 54.3485 8.65948C54.2875 8.84312 54.1886 9.012 54.0582 9.15527C53.9279 9.29854 53.7689 9.41303 53.5915 9.49138C53.4141 9.56973 53.2223 9.6102 53.0283 9.6102C52.8343 9.6102 52.6424 9.56973 52.4651 9.49138C52.2877 9.41303 52.1287 9.29854 51.9984 9.15527C51.868 9.012 51.7691 8.84312 51.7081 8.65948C51.6471 8.47584 51.6253 8.2815 51.6441 8.08896ZM53.8167 8.08896C53.8167 7.45451 53.5308 7.08349 53.0293 7.08349C52.5257 7.08349 52.2425 7.45451 52.2425 8.08897C52.2425 8.72849 52.5258 9.09665 53.0293 9.09665C53.5308 9.09665 53.8167 8.72595 53.8167 8.08896Z" fill="black"/><path d="M55.1897 6.62676H55.7473V7.09173H55.7906C55.864 6.92473 55.9879 6.78474 56.1449 6.69126C56.3019 6.59779 56.4842 6.55549 56.6665 6.57026C56.8093 6.55956 56.9527 6.58103 57.0861 6.63309C57.2194 6.68515 57.3393 6.76647 57.4369 6.87102C57.5345 6.97557 57.6072 7.10067 57.6497 7.23705C57.6922 7.37343 57.7034 7.51761 57.6824 7.65888V9.55363H57.1032V7.80394C57.1032 7.33358 56.8982 7.09966 56.4698 7.09966C56.3728 7.09516 56.276 7.11162 56.1861 7.14791C56.0961 7.1842 56.015 7.23946 55.9484 7.30991C55.8819 7.38036 55.8314 7.46433 55.8004 7.55607C55.7694 7.6478 55.7587 7.74513 55.769 7.84138V9.55367H55.1897V6.62676Z" fill="black"/><path d="M60.9555 5.89807V6.64011H61.5914V7.12666H60.9555V8.63169C60.9555 8.93828 61.0822 9.07253 61.3705 9.07253C61.4444 9.0723 61.5181 9.06785 61.5914 9.0592V9.54035C61.4874 9.55891 61.382 9.56878 61.2763 9.56987C60.6322 9.56987 60.3756 9.34389 60.3756 8.77959V7.12664H59.9097V6.64008H60.3756V5.89807H60.9555Z" fill="black"/><path d="M62.3827 5.48419H62.9569V7.09713H63.0027C63.0797 6.92858 63.2069 6.78779 63.3671 6.69397C63.5272 6.60014 63.7125 6.55784 63.8976 6.57282C64.0397 6.56511 64.1817 6.58876 64.3136 6.64209C64.4454 6.69542 64.5639 6.7771 64.6604 6.88132C64.757 6.98554 64.8292 7.10973 64.8721 7.24501C64.915 7.3803 64.9274 7.52336 64.9085 7.66398V9.55368H64.3286V7.80648C64.3286 7.33897 64.1103 7.1022 63.701 7.1022C63.6014 7.09406 63.5013 7.10771 63.4076 7.1422C63.3139 7.17668 63.2288 7.23117 63.1584 7.30185C63.0881 7.37253 63.034 7.45769 63.0001 7.55138C62.9661 7.64507 62.9531 7.74502 62.962 7.84424V9.55367H62.3827L62.3827 5.48419Z" fill="black"/><path d="M68.2859 8.76338C68.2072 9.03088 68.0367 9.26227 67.8042 9.41707C67.5717 9.57187 67.292 9.64022 67.0141 9.61016C66.8207 9.61525 66.6286 9.57831 66.451 9.50192C66.2733 9.42553 66.1145 9.3115 65.9855 9.16776C65.8565 9.02402 65.7604 8.85401 65.7039 8.66953C65.6474 8.48504 65.6318 8.29051 65.6583 8.09942C65.6325 7.90774 65.6484 7.71279 65.7047 7.52775C65.7611 7.34272 65.8567 7.17192 65.985 7.02692C66.1133 6.88192 66.2714 6.76611 66.4485 6.68732C66.6256 6.60854 66.8176 6.56862 67.0116 6.57027C67.8283 6.57027 68.3209 7.12667 68.3209 8.04577V8.24733H66.2483V8.2797C66.2393 8.38711 66.2528 8.49522 66.2881 8.59711C66.3234 8.699 66.3796 8.79241 66.4532 8.87135C66.5268 8.9503 66.6161 9.01304 66.7155 9.05555C66.8148 9.09806 66.9219 9.11939 67.03 9.1182C67.1686 9.13479 67.309 9.10991 67.4333 9.04672C67.5577 8.98354 67.6603 8.8849 67.7283 8.76336L68.2859 8.76338ZM66.2483 7.82012H67.7309C67.7382 7.72189 67.7248 7.62322 67.6915 7.53045C67.6583 7.43769 67.606 7.35287 67.538 7.28147C67.4699 7.21006 67.3877 7.15364 67.2965 7.11582C67.2053 7.07801 67.1071 7.05964 67.0084 7.0619C66.9082 7.06064 66.8088 7.0794 66.716 7.11706C66.6232 7.15473 66.5389 7.21054 66.468 7.2812C66.3972 7.35186 66.3413 7.43595 66.3035 7.52851C66.2658 7.62107 66.247 7.72022 66.2483 7.82012H66.2483Z" fill="black"/></svg>
					</span>
											</div>
				<div>
											</div>
	</a>
</li>
  
  
	</ul>
  </div>


  
			</div>
</div>
  
  
  
              <div id="block-nrfooterlegalandlanguage">
  
    
      



<div>
  <a class="inline-block mb-16 large:mb-6" href="/" title="New Relic Logo">
    <svg width="165" height="32" viewBox="0 0 165 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5075_22003)">
<path d="M22.3821 11.0773V20.9227L13.8572 25.8464V32L27.7144 24.0005V7.9995L22.3821 11.0773Z" fill="#00AC69"/>
<path d="M13.8572 6.15563L22.3821 11.0773L27.7144 7.9995L13.8572 0L0 7.9995L5.33031 11.0773L13.8572 6.15563Z" fill="#1CE783"/>
<path d="M8.52689 19.0788V28.9242L13.8572 32V16.001L0 7.9995V14.1551L8.52689 19.0788Z" fill="white"/>
<path d="M46.7349 7.97736C43.7517 7.97736 42.3386 9.86149 42.3386 9.86149H42.1816L41.8696 8.29138H38.2563V24.3065H42.1816V15.0469C42.1816 13.0057 43.5907 11.5926 45.6359 11.5926C47.681 11.5926 49.0901 13.0017 49.0901 15.0469V24.3065H53.0154V14.7288C53.0154 10.6465 50.3462 7.97736 46.7349 7.97736Z" fill="white"/>
<path d="M89.0674 18.8111H88.842L86.1728 8.29138H82.1791L79.5099 18.8111H79.2864L76.6152 8.29138H72.533L76.6152 24.3065H81.396L84.0632 13.9438H84.2886L86.9578 24.3065H91.7366L95.8189 8.29138H91.7366L89.0674 18.8111Z" fill="white"/>
<path d="M107.838 9.70448H107.681L107.367 8.29541H104.07V24.3085H107.995V15.0489C107.995 13.0077 108.937 12.0657 110.979 12.0657H112.992V8.2934H110.656C110.11 8.29456 109.57 8.42261 109.081 8.66747C108.592 8.91232 108.167 9.2673 107.838 9.70448V9.70448Z" fill="white"/>
<path d="M121.677 7.97736C116.969 7.97736 113.515 11.4316 113.515 16.2989C113.515 21.1663 116.774 24.6205 121.677 24.6205C125.649 24.6205 128.04 22.2834 129.037 20.5644L125.433 19.2801C125.077 19.9323 123.64 21.1864 121.677 21.1864C119.388 21.1864 117.754 19.7532 117.44 17.5631H129.371C129.481 17.0471 129.534 16.5205 129.528 15.993C129.528 11.4316 126.073 7.97736 121.677 7.97736ZM117.44 14.8858C117.911 12.8447 119.324 11.2746 121.677 11.2746C123.877 11.2746 125.288 12.8447 125.602 14.8858H117.44Z" fill="white"/>
<path d="M63.6899 7.97736C58.9796 7.97736 55.5254 11.4316 55.5254 16.2989C55.5254 21.1663 58.7783 24.6205 63.6899 24.6205C67.6615 24.6205 70.0509 22.2834 71.0473 20.5644L67.4441 19.2801C67.0878 19.9323 65.6526 21.1864 63.6899 21.1864C61.4012 21.1864 59.7647 19.7532 59.4507 17.5631H71.3835C71.4938 17.0471 71.5465 16.5205 71.5405 15.993C71.5405 11.4316 68.0863 7.97736 63.6899 7.97736ZM59.4507 14.8858C59.9217 12.8447 61.3348 11.2746 63.6899 11.2746C65.8881 11.2746 67.3012 12.8447 67.6152 14.8858H59.4507Z" fill="white"/>
<path d="M143.25 1.96867H139.325V5.89394H143.25V1.96867Z" fill="white"/>
<path d="M154.082 21.0092C151.727 21.0092 149.843 19.1251 149.843 16.2989C149.843 13.4727 151.727 11.5886 154.082 11.5886C156.437 11.5886 157.379 13.1587 157.693 14.1008L161.248 12.8366C160.386 10.6002 158.273 7.97736 154.082 7.97736C149.371 7.97736 145.917 11.4316 145.917 16.2989C145.917 21.1663 149.371 24.6205 154.082 24.6205C158.309 24.6205 160.423 21.9553 161.268 19.6123L157.693 18.3401C157.379 19.4391 156.437 21.0092 154.082 21.0092Z" fill="white"/>
<path d="M129.963 5.45713H132.191V24.3065H136.116V1.96867H129.963V5.45713Z" fill="white"/>
<path d="M143.25 8.29138H139.325V24.3065H143.25V8.29138Z" fill="white"/>
<path d="M163.37 21.2347C163.069 21.2303 162.775 21.3153 162.523 21.479C162.271 21.6426 162.073 21.8775 161.955 22.1537C161.837 22.4298 161.804 22.7349 161.86 23.03C161.916 23.325 162.058 23.5968 162.269 23.8107C162.48 24.0247 162.75 24.1711 163.044 24.2313C163.338 24.2915 163.644 24.2628 163.922 24.149C164.199 24.0351 164.437 23.8411 164.605 23.5917C164.772 23.3423 164.861 23.0488 164.861 22.7484C164.868 22.5498 164.834 22.3518 164.762 22.1666C164.689 21.9815 164.58 21.8129 164.44 21.6713C164.301 21.5297 164.134 21.418 163.95 21.3429C163.766 21.2679 163.568 21.231 163.37 21.2347ZM163.37 24.0307C163.115 24.0351 162.865 23.9636 162.651 23.8254C162.438 23.6872 162.27 23.4886 162.169 23.2547C162.069 23.0208 162.04 22.7623 162.087 22.5121C162.134 22.262 162.255 22.0314 162.433 21.8499C162.611 21.6683 162.84 21.544 163.089 21.4927C163.338 21.4414 163.597 21.4655 163.833 21.5618C164.069 21.6582 164.27 21.8225 164.412 22.0338C164.554 22.2451 164.63 22.4939 164.63 22.7484C164.636 22.9161 164.607 23.0833 164.546 23.2395C164.485 23.3958 164.392 23.538 164.274 23.6573C164.156 23.7766 164.015 23.8706 163.86 23.9334C163.704 23.9962 163.537 24.0266 163.37 24.0226V24.0307Z" fill="white"/>
<path d="M164.02 22.4686C164.019 22.396 164.004 22.3243 163.975 22.2578C163.946 22.1913 163.903 22.1315 163.85 22.0821C163.797 22.0327 163.734 21.9947 163.666 21.9705C163.597 21.9462 163.525 21.9363 163.452 21.9412H162.78V23.5194H163.011V22.9719H163.223L163.768 23.5194H164.056L163.51 22.9719C163.645 22.9719 163.773 22.9191 163.868 22.8249C163.964 22.7306 164.018 22.6027 164.02 22.4686V22.4686ZM163.013 22.7404V22.1727H163.452C163.494 22.1676 163.537 22.1715 163.577 22.184C163.618 22.1965 163.655 22.2173 163.687 22.2453C163.719 22.2732 163.745 22.3075 163.763 22.346C163.78 22.3845 163.79 22.4262 163.79 22.4686C163.79 22.6357 163.684 22.7404 163.452 22.7404H163.013Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_5075_22003">
<rect width="164.861" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

  </a>
  <div class="text-sm grid gap-16 large:grid-cols-[auto,auto] large:gap-4">
    <ul class="columns-2 gap-6 medium:w-6/12 large:w-full large:grid large:grid-flow-col large:gap-8 mb-0">
              <li class="mb-4 large:mb-0 hover:text-gray-1">
          <a href="/termsandconditions/terms" class="footer__meta-link">
            Terms of Service
                      </a>
        </li>
              <li class="mb-4 large:mb-0 hover:text-gray-1">
          <a href="/termsandconditions/dmca" class="footer__meta-link">
            DMCA Policy
                      </a>
        </li>
              <li class="mb-4 large:mb-0 hover:text-gray-1">
          <a href="/termsandconditions/privacy" class="footer__meta-link">
            Privacy Policy
                      </a>
        </li>
              <li class="mb-4 large:mb-0 hover:text-gray-1">
          <a href="" class="footer__meta-link js-privacy-choices flex items-center group">
            Your Privacy Choices
                          <img src="/themes/custom/erno/assets/images/icons/misc/ccpa.svg" class="h-4 ml-2 group-hover:invert" alt="California Consumer Privacy Act (CCPA) Opt-Out Icon" />
                      </a>
        </li>
              <li class="mb-4 large:mb-0 hover:text-gray-1">
          <a href="/termsandconditions/cookie-policy" class="footer__meta-link">
            Cookie Policy
                      </a>
        </li>
              <li class="mb-4 large:mb-0 hover:text-gray-1">
          <a href="/termsandconditions/modern-slavery-act" class="footer__meta-link">
            UK Slavery Act of 2015
                      </a>
        </li>
          </ul>
    <div class="relative large:flex large:justify-end">
      <button  class="footer__lang-btn-js flex items-center hover:text-nr-white" aria-controls="footer__lang-list" aria-expanded="false">
        <span class="svg-current-fill mr-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0C3.4 0 0 3.4 0 7.5C0 11.6 3.4 15 7.5 15C11.6 15 15 11.6 15 7.5C15 3.4 11.6 0 7.5 0ZM4 2C5 1.4 6.2 1 7.5 1C7.7 1 7.8 1 8 1V2.6L6 4.6V6.6L4 4.6V2ZM7 14C3.6 13.7 1 10.9 1 7.5C1 5.7 1.8 4 3 2.8V5L6 8V11L7 12V14ZM11 13C10.1 13.6 9.1 13.9 8 14V11.6L7 10.6V9H9.6L11 10.4V13ZM12 12.2V10L10 8H7V5L9 3V1.2C11.9 1.9 14 4.5 14 7.5C14 9.3 13.2 11 12 12.2Z" fill="#293338"/>
</svg>
</span>
        English
      </button>
      <ul  id="footer__lang-list" class="footer__lang-list-js absolute bottom-full inset-x-0 medium:right-auto large:left-auto large:-right-3 p-3 min-w-[168px] bg-gray-1 rounded shadow-nr-black invisible opacity-0 transition-opacity after:content-[&quot;&quot;] after:absolute after:top-full after:left-6 large:after:left-auto large:after:right-6 after:-m-px after:border-t-8 after:border-t-gray-1 after:border-x-8 after:border-x-transparent">
                  <li class="block mb-2 last:mb-0">
            <a href="https://newrelic.com/de/termsandconditions/privacy" class="footer__meta-link block text-nr-black hover:text-gray-3 focus:text-gray-3">Deutsch</a>
          </li>
                  <li class="block mb-2 last:mb-0">
            <a href="https://newrelic.com/termsandconditions/privacy" class="footer__meta-link block text-nr-black hover:text-gray-3 focus:text-gray-3">English</a>
          </li>
                  <li class="block mb-2 last:mb-0">
            <a href="https://newrelic.com/es/termsandconditions/privacy" class="footer__meta-link block text-nr-black hover:text-gray-3 focus:text-gray-3">Español</a>
          </li>
                  <li class="block mb-2 last:mb-0">
            <a href="https://newrelic.com/fr/termsandconditions/privacy" class="footer__meta-link block text-nr-black hover:text-gray-3 focus:text-gray-3">Français</a>
          </li>
                  <li class="block mb-2 last:mb-0">
            <a href="https://newrelic.com/jp/termsandconditions/privacy" class="footer__meta-link block text-nr-black hover:text-gray-3 focus:text-gray-3">日本語</a>
          </li>
                  <li class="block mb-2 last:mb-0">
            <a href="https://newrelic.com/kr/termsandconditions/privacy" class="footer__meta-link block text-nr-black hover:text-gray-3 focus:text-gray-3">한국어</a>
          </li>
                  <li class="block mb-2 last:mb-0">
            <a href="https://newrelic.com/pt/termsandconditions/privacy" class="footer__meta-link block text-nr-black hover:text-gray-3 focus:text-gray-3">Português</a>
          </li>
              </ul>
    </div>
  </div>
  <div class="text-sm mt-8 large:mt-5">
    ©2008-24 New Relic, Inc. All rights reserved
  </div>
</div>


  </div>

  
  </div>
</footer>


          </div>
  
  </div>




    

    <script src="/sites/default/files/js/js_ke1oOJdjiJgmIIPb3ivmlr7RZYRdKMqxnnfbQ6-1Z2I.js"></script>
<script src="/libraries/carousel/lib/main.js?s6ph8s" type="module"></script>
<script src="/sites/default/files/js/js_qgYOPbh6JJyZbIVVXX9mozU4V97PPqJcVue-W3Wh-io.js"></script>

  <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"NRBR-044cd27ea2168d4c185","applicationID":"707464402","transactionName":"NFdVbUVZVxEEUEEIXw0ddlpDUVYMSkNUBlU8UVZaX10=","queueTime":0,"applicationTime":15,"atts":"GBBWGw1DRB8=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
