(function(w,d,s,i) {
    var c=d.currentScript;
    if (c) {
        var uo = c.getAttribute('data-ueto');
        if (uo && w[uo] && w[uo].uetConfig && w[uo].uetConfig.deBlock === true)
            return;
    }
    var f,j; f=d.getElementsByTagName(s)[0]; j=d.createElement(s); j.async=true;
    j.src='https://www.clarity.ms/tag/uet/'+i+'';
    j.onload = function () {
        if (!c) return;
        var co = function(u) { return u && typeof u === 'object' && !(u instanceof Array) && u.beaconParams && u.beaconParams.mid && w.clarity; };
        var r = 40;
        var cl = function() {
            if (r-- < 1) return;
            var uo = c.getAttribute('data-ueto');
            if (!uo) return;
            var u = w[uo];
            w.clarityuetq = w.mtagq || u;
            if (!co(u)) { setTimeout(function () { cl(); }, 250); return; }
            var m = u.beaconParams.mid;
            w.clarity('set', '_uetmid', m);
            w.clarity('metadata', (function () { w.clarity('set', '_uetmid', m); }), false);
            d.addEventListener('UetEvent', function(e) {
                var nm = u.beaconParams.mid;
                if (m !== nm) { m = nm; w.clarity('set', '_uetmid', m); }
            });
        };
        cl();
    };
    f.parentNode.insertBefore(j,f);

    function launchEventSetup() {
        if (!w.opener) {return;}
        var sessionIdKey = 'ms-event-setup-session-id';
        var originKey = 'ms-event-setup-event-origin';
        if (sessionStorage) {
            var sessionId = sessionStorage.getItem(sessionIdKey);
            var eventOrigin = sessionStorage.getItem(originKey);
            if (sessionId && eventOrigin) {
                w.opener.postMessage({type: 'REINIT_CLARITY_EVENT_SETUP'}, eventOrigin);
            }
        }
        w.addEventListener('message', function eventListener(e) {
            var oRegex = /^https:\/\/.*\.microsoft\.com(:[0-9]+)?$/i;
            if (!oRegex.test(e.origin)) {return;};
            // ignore the event if it does not match the UET tag of the current page
            if (!e.data || !e.data.params || i !== e.data.params.TagId) {return;}
            if (!(e.data.type === 'INIT_CLARITY_EVENT_SETUP' || e.data.type === 'ACK_REINIT_CLARITY_EVENT_SETUP')) { return; };
            // clarity picker script element
            var cp = d.createElement(s); cp.src = 'https://clarity.microsoft.com/eventPicker.js'; cp.async=true;
            cp.onload = function() {
                // event setup script element
                var est = d.createElement(s); est.src = 'https://bat.bing.com/s/uet/eventSetup.js'; est.async=true;
                var b = d.getElementsByTagName('body')[0];
                var es = d.createElement('event-setup-tool'); b.prepend(es);
                // pass init data to event setup
                es.setAttribute("initData", JSON.stringify(e.data.params));
                es.setAttribute("eventOrigin", e.origin);
                if (sessionStorage) {
                    // save session id and event origin in session storage
                    sessionStorage.setItem(sessionIdKey, e.data.params.SessionId);
                    sessionStorage.setItem(originKey, e.origin);
                }
                if (e.data.type === 'INIT_CLARITY_EVENT_SETUP') {
                    w.opener.postMessage({type: 'ACK_INIT_CLARITY_EVENT_SETUP'}, e.origin);
                }
                f.parentNode.insertBefore(est,f);
            };
            f.parentNode.insertBefore(cp,f);
            w.removeEventListener('message', eventListener);
        });
    }
    launchEventSetup();
})(window, document, 'script', '211023329');
o=e(),c={};function a(t){var r=t[0];if("config"===r){var a=t[1],u=t[2]||{};n?n=!1:o=c[a]||e(),o[p]=Object.assign({},o[p],u),c[a]=o,o[E]||(o[E]=!0,ut(o,a))}else"event"===r?ot(o,Q,t[1],t[2],t[3]):"validate"===r?ot(o,tt,t[1],t[2],t[3]):function(t,e,n){ot(t,Q,"err",{type:e,value:n})}(o,"und",t)}t[l]=t[l]||[],t[l].forEach(function(t){return a(t)}),t[l].length=0,t[l].push=a;var u=t[p];if("object"===(void 0===u?"undefined":r(u))||t[v]){var s=nt(t,D)+"-"+(t[v]||u[v]);o[p]=u||{},ut(o,s)}function y(t){ot(o,Q,t.name)}t[d]=y,(t[h]||[]).forEach(function(t){return y(t)})}(window[f])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t,e){function n(t){return void 0===t||null==t||""===t}function o(t){return Object.keys(t).filter(function(e){return!n(t[e])}).map(function(e){return e+"="+(n(c=t[e])?"":!0===c?"1":!1===c?"0":("object"===(void 0===c?"undefined":r(c))&&(c=o(c)),encodeURIComponent(c)));var c}).join("&")}this.sendXhr=function(n,r,c){var a=o(r),u=new XMLHttpRequest;u.open("GET","https://"+e+"/"+n+"/"+t+"?"+a),u.setRequestHeader("Content-type","text/plain; charset=utf-8"),u.onload=function(){if("function"==typeof c)if(200==u.status){var t=void 0;try{t=JSON.parse(u.response)}catch(e){t={error:-1,ex:e,r:-1}}c(t)}else c({error:-2,code:u.status,r:-2})},u.onerror=function(){"function"==typeof c&&c({error:-3,r:-3})},u.send()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=c(n(0)),o=c(n(4));function c(t){return t&&t.__esModule?t:{default:t}}var a="at",u="ta",i="__sptrk",f=300,s=f,l="pn",h="pb1",d="pb2",p="pt",v="pd";function y(t,e,n){var o=window;function c(t){return t.navigator.connection||t.navigator.mozConnection||t.navigator.webkitConnection||{}}function a(t){return t.document.location.href}function u(t){return t.document.referrer}function f(t,e,n){try{return"function"==typeof n&&new RegExp("^\\s*function\\s*"+e+"\\s*\\(\\s*\\)\\s*\\{\\s*\\[native code\\]\\s*\\}\\s*$").test(t.Function.prototype.toString.call(n))}catch(t){}}var s,l,h=[],d={js:function(t){var e=[];if(t.Sentry){var n="";try{n="|"+Sentry.getCurrentHub().stack[0].client.dsn.projectId}catch(t){}e.push("s"+n)}return e.join(",")}(o),lc:a(o),rl:function(t){try{var e=a(t.top.window);if(e!==a(t))return e}catch(t){return"e"}}(o),rf:u(o),rr:function(t){try{var e=u(t.top.window);if(e!==u(t))return e}catch(t){return"e"}}(o),hl:function(t){try{return t.history.length}catch(t){return-1}}(o),tp:(s=(0,r.default)(),l=(0,r.default)(),l-s+(0,r.default)()-l),if:function(t){try{return t.self!==t.top}catch(t){return!0}}(o),au:function(t){var e=[],n=function(t){var e=/(^.{3}_.{22})(?=_Array$|_Symbol$|_Promise$)/;return Object.getOwnPropertyNames(t).filter(function(t){return t.match(e)})}(t);return n.length>0&&("cdc"==n[0].slice(0,3)?e.push("d"):e.push("uc")),(t.navigator.webdriver||t.document.documentElement.getAttribute("webdriver")||void 0!==Object.getOwnPropertyDescriptor(t.navigator,"webdriver"))&&e.push("w"),(t.domAutomation||t.domAutomationController)&&e.push("c"),(t.callPhantom||t._phantom)&&e.push("p"),t.__phantomas&&e.push("f"),e.join(",")}(o),ov:function(t){var e=[];return f(t,"toString",Function.prototype.toString)||e.push("s"),window.console?f(t,"log",console.log)||/CriOS\/|GSA\//.test(t.navigator.userAgent)||e.push("l"):e.push("c"),f(t,"alert",window.alert)||e.push("a"),e.join(",")}(o),te:function(t){if("ontouchstart"in t)return!0;try{return t.document.createEvent("TouchEvent"),!0}catch(t){}return!1}(o)};return function(t,e,n,r){try{e[t]=r.screen.msOrientation||(r.screen.orientation||r.screen.mozOrientation||{}).type}catch(e){n.push(t)}}("so",d,h,o),function(t,e,n,r){try{e[t]=r.navigator.platform}catch(e){n.push(t)}}("bp",d,h,o),function(t,e,n,r){try{e[t]=r.navigator.language||r.navigator.userLanguage||r.navigator.browserLanguage||r.navigator.systemLanguage}catch(e){n.push(t)}}("lg",d,h,o),function(t,e,n,r){try{e[t]=r.screen.width}catch(e){n.push(t)}}("sw",d,h,o),function(t,e,n,r){try{e[t]=r.screen.height}catch(e){n.push(t)}}("sh",d,h,o),function(t,e,n,r){try{e[t]=r.screen.left||r.screen.availLeft}catch(e){n.push(t)}}("sl",d,h,o),function(t,e,n,r){try{e[t]=r.screen.top||r.screen.availTop}catch(e){n.push(t)}}("st",d,h,o),function(t,e,n,r){try{e[t]=r.screenX||r.screenLeft}catch(e){n.push(t)}}("sx",d,h,o),function(t,e,n,r){try{e[t]=r.screenY||r.screenTop}catch(e){n.push(t)}}("sy",d,h,o),function(t,e,n,r){try{e[t]=r.outerWidth}catch(e){n.push(t)}}("ow",d,h,o),function(t,e,n,r){try{e[t]=r.outerHeight}catch(e){n.push(t)}}("oh",d,h,o),function(t,e,n,r){try{e[t]=r.screen.availWidth}catch(e){n.push(t)}}("aw",d,h,o),function(t,e,n,r){try{e[t]=r.screen.availHeight}catch(e){n.push(t)}}("ah",d,h,o),function(t,e,n,r){try{e[t]=r.screen.colorDepth}catch(e){n.push(t)}}("cd",d,h,o),function(t,e,n,r){try{e[t]=r.devicePixelRatio}catch(e){n.push(t)}}("pr",d,h,o),function(t,e,n,r){try{e[t]=(new r.Intl.DateTimeFormat).resolvedOptions().timeZone}catch(e){n.push(t)}}("tz",d,h,o),function(t,e,n,r){try{e[t]=(new r.Date).getTimezoneOffset()}catch(e){n.push(t)}}("to",d,h,o),function(t,e,n,r){try{e[t]=r.navigator.hardwareConcurrency}catch(e){n.push(t)}}("pc",d,h,o),function(t,e,n,r){try{e[t]=r.navigator.cpuClass}catch(e){n.push(t)}}("cc",d,h,o),function(t,e,n,r){try{e[t]=r.navigator.deviceMemory}catch(e){n.push(t)}}("dm",d,h,o),function(t,e,n,r){try{e[t]=!!r.sessionStorage}catch(e){n.push(t)}}("ss",d,h,o),function(t,e,n,r){try{e[t]=!!r.localStorage}catch(e){n.push(t)}}("ls",d,h,o),function(t,e,n,r,o){try{var c=r.sessionStorage.getItem(i)||o;r.sessionStorage.setItem(i,c),e[t]=c}catch(e){n.push(t)}}("tu",d,h,o,e),function(t,e,n,r,o){try{var c=i+"_u",a=r.localStorage.getItem(c)||o;a<o&&(o=a),r.localStorage.setItem(c,o),e[t]=o}catch(e){n.push(t)}}("u",d,h,o,t),function(t,e,n,o,c,u,f){try{var s=i,l=i+"_t",h=i+"_p",d=(0,r.default)(),p=u,v=c.localStorage.getItem(l)||d,y=a(c);d-v<60*f*1e3?(p=c.localStorage.getItem(s)||u,y=c.localStorage.getItem(h)||y):v=d,c.localStorage.setItem(l,v),c.localStorage.setItem(s,p),c.localStorage.setItem(h,y),n[t]=p,n[e]=y}catch(n){o.push(t),o.push(e)}}("iu","il",d,h,o,e,n),function(t,e,n,o,c){try{var a=i+"_g",u=i+"_t_g",f=(0,r.default)(),s=c,l=o.localStorage.getItem(u)||f;f-l<18e5&&(s=o.localStorage.getItem(a)||c),l=f,o.localStorage.setItem(u,l),o.localStorage.setItem(a,s),e[t]=s}catch(e){n.push(t)}}("su",d,h,o,e),function(t,e,n,r){try{var o=r.Notification;o&&(e[t]=o.permission.substring(0,3))}catch(e){n.push(t)}}("np",d,h,o),function(t,e,n,r){try{e[t]=!!r.indexedDB}catch(e){n.push(t)}}("id",d,h,o),function(t,e,n,r){try{e[t]=!!r.openDatabase}catch(e){n.push(t)}}("od",d,h,o),function(t,e,n,r){try{e[t]=r.navigator.maxTouchPoints||r.navigator.msMaxTouchPoints}catch(e){n.push(t)}}("mt",d,h,o),function(t,e,n,r){try{e[t]=r.navigator.pdfViewerEnabled}catch(e){n.push(t)}}("pe",d,h,o),function(t,e,n,r){try{var o=r.document.createElement("canvas"),c=o.getContext("webgl")||o.getContext("experimental-webgl"),a=c.getExtension("WEBGL_debug_renderer_info");e[t]=c.getParameter(a.UNMASKED_VENDOR_WEBGL)+"|"+c.getParameter(a.UNMASKED_RENDERER_WEBGL)}catch(e){n.push(t)}}("gp",d,h,o),function(t,e,n,r){try{document.cookie="t=1;SameSite=Strict",e[t]=document.cookie.indexOf("t=1;SameSite=Strict")>=0,document.cookie="t=1;SameSite=Strict; expires=Wed, 10-Jul-2019 11:23:51 GMT"}catch(e){n.push(t)}}("co",d,h),function(t,e,n,r){try{e[t]=r.navigator.javaEnabled()}catch(e){n.push(t)}}("jv",d,h,o),function(t,e,n,r){try{e[t]=r.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}catch(e){n.push(t)}}("ww",d,h,o),function(t,e,n,r){try{e[t]=r.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}catch(e){n.push(t)}}("wh",d,h,o),function(t,e,n,r){try{var o=c(r);e[t]=o.type}catch(e){n.push(t)}}("nt",d,h,o),function(t,e,n,r){try{var o=c(r);e[t]=o.effectiveType}catch(e){n.push(t)}}("ne",d,h,o),function(t,e,n,r){try{var o=c(r);e[t]=o.rtt}catch(e){n.push(t)}}("nr",d,h,o),function(t,e,n,r){try{var o=c(r);e[t]=o.downlink}catch(e){n.push(t)}}("nd",d,h,o),function(t,e,n,r){try{var o=eval.toString().length;e[t]=o}catch(e){n.push(t)}}("es",d,h),function(t,e,n,r){try{var o=r.matchMedia("(hover)").matches;e[t]=o}catch(e){n.push(t)}}("hq",d,h,o),function(t,e,n,r){try{e[t]=void 0!==r.chrome}catch(e){n.push(t)}}("cw",d,h,o),d.ex=h.join(","),d}e.default=function(t,e,n,c){var i=y(e,n,c);return function(t,e){try{var n=document.createElement("div");n.innerHTML="&nbsp;",n.className="adsbox",n.style="position: absolute; top: -10000px; left: -10000px; width: 2px; height: 2px;",document.body.appendChild(n);var o=(0,r.default)();setTimeout(function(){var t=(0,r.default)()-o;e[u]=t,e[a]="h"+n.offsetHeight,document.body.removeChild(n)},1)}catch(t){e[a]="he"}}(window,i),function(t,e){if(null!==t){var n=(0,r.default)();try{var c=document.createElement("canvas");c.width=f,c.height=s;var a=c.getContext("2d"),u=(0,o.default)(c,a),i=(0,o.default)(c,a),y=(0,o.default)(c,a,t,!1);e[h]=u,e[d]=i,e[l]=y}catch(t){}var m=(0,r.default)()-n;e[p]=m,e[v]=t}}(t,i),i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=1,o=2,c=3,a=4;function u(t){var e,n=0;if(0===t.length)return n;for(e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return n}function i(t,e){return u(t.toDataURL())}function f(t){for(var e="#",n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*t())];return e}function s(t,e,n,r){var o=e(.45*n,.55*n),c=e(.45*r,.55*r),a=e(20,30),u=o,i=c,s=e(50,100),l=t.createRadialGradient(o,c,a,u,i,s),h=f(e),d=f(e),p=f(e);return l&&(l.addColorStop(0,h),l.addColorStop(e(),d),l.addColorStop(1,p)),l}function l(t,e,n,u,i,f){switch(e){case a:t.font=Math.floor(n(30,50))+"px Arrial";var l=n(.01*u,.03*u),p=n(.25*i,.9*i),v=""+n().toString(36).substring(2);h(t,"#000",f),t.strokeStyle="#000",t.strokeText(v,l,p),d(t),t.fillStyle=s(t,n,u,i),t.fillText(v,l,p);break;case r:l=n(.2*u,.8*u),p=n(.2*i,.8*i);var y=n(.25*u,.35*u),m=Math.PI*n(.01,.2),g=2*Math.PI*n(.8,.99);h(t,"#000",f),t.strokeStyle="#000",t.fillStyle="#000",t.beginPath(),t.arc(l,p,y,m,g),t.fill(),d(t),t.fillStyle=s(t,n,u,i),t.beginPath(),t.arc(l,p,y,m,g),t.fill(),t.stroke();break;case o:var b=n(.05*u,.3*u),S=n(.05*i,.3*i),w=n(.6*u,.9*u),_=n(.3*i,.6*i),x=n(.1*u,.4*u),j=n(.6*i,.9*i),O=n(.7*u,.95*u),M=n(.7*i,.95*i);h(t,"#000",f),t.strokeStyle="#000",t.fillStyle="#000",t.beginPath(),t.moveTo(b,S),t.bezierCurveTo(w,_,x,j,O,M),t.fill(),d(t),t.fillStyle=s(t,n,u,i),t.beginPath(),t.moveTo(b,S),t.bezierCurveTo(w,_,x,j,O,M),t.fill(),t.stroke();break;case c:b=n(.1*u,.3*u),S=n(.6*i,.9*i),O=n(.6*u,.9*u),M=n(.1*i,.3*i);var E=n()>=.5?1:-1,P=u/2+E*n(.2*u,.4*u),C=i/2+E*n(.2*i,.4*i);h(t,"#000",f),t.strokeStyle="#000",t.fillStyle="#000",t.beginPath(),t.moveTo(b,S),t.quadraticCurveTo(P,C,O,M),t.fill(),d(t),t.fillStyle=s(t,n,u,i),t.beginPath(),t.moveTo(b,S),t.quadraticCurveTo(P,C,O,M),t.fill(),t.stroke()}}function h(t,e,n){n?(t.shadowColor=e,t.shadowBlur=10,t.shadowOffsetX=0,t.shadowOffsetY=0):d(t)}function d(t){t.shadowColor=void 0,t.shadowBlur=0}Math.imul||(Math.imul=function(t,e){var n=(4194303&t)*(e|=0);return 4290772992/*!== 0*/&t&&(n+=(4290772992&t)*e|0),0|n}),e.default=function(t,e,n,f){var s,h=t.width,d=t.height,p=(s=n,function(t,e){var n=s+=1831565813;return n=Math.imul(n^n>>>15,1|n),n^=n+Math.imul(n^n>>>7,61|n),(t=t||0)+((n^n>>>14)>>>0)/4294967296*((e=e||1)-t)}),v=0,y=function(t){return t()>=.5?[r,o,c,a]:[r,c,o,a]}(p);!function(t,e){e.clearRect(0,0,t.width,t.height)}(t,e);for(var m=0;m<4;m++)l(e,y.shift(),p,h,d,f),v=u(""+v+i(t));return v}}]);