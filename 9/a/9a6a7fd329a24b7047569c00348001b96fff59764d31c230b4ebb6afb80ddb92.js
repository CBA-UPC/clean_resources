(function(m){m.MtaH5=m.MtaH5||{};MtaH5.hack=function(){var u=document.getElementsByName("MTAH5"),r={conf:{autoReport:1,senseHash:1,senseQuery:0,userReport:0},user:{user_id:""},version:"2.0.18"};if(0==u.length)for(var w=document.getElementsByTagName("script"),v=0;v<w.length;v++)if("undefined"!==typeof w[v].attributes.name&&"MTAH5"==w[v].attributes.name.nodeValue){u=[];u.push(w[v]);break}0<u.length&&function(){"undefined"!==typeof u[0].attributes.sid&&(r.conf.sid=u[0].attributes.sid.nodeValue);"undefined"!==
typeof u[0].attributes.cid&&(r.conf.cid=u[0].attributes.cid.nodeValue);"object"===typeof _mtac&&function(){for(var n in _mtac)if("ignoreParams"==n){if("string"==typeof _mtac[n]&&/\w(,?)\w+/.test(_mtac[n])){var x=_mtac[n].split(",");_mtac.hasOwnProperty(n)&&(r.conf[n]=x)}"object"==typeof _mtac[n]&&0<_mtac[n].length&&_mtac.hasOwnProperty(n)&&(r.conf[n]=_mtac[n])}else _mtac.hasOwnProperty(n)&&(r.conf[n]=_mtac[n])}();"object"===typeof _user&&function(){for(var n in _user)r.user.hasOwnProperty(n)&&(r.user[n]=
    _user[n])}()}();r.conf.user=r.user;r.conf.version=r.version;return r}})(this);
(function(m,u){function r(a){a=window.localStorage?localStorage.getItem(a)||sessionStorage.getItem(a):(a=document.cookie.match(new RegExp("(?:^|;\\s)"+a+"=(.*?)(?:;\\s|$)")))?a[1]:"";return a}function w(a,c,e){if(window.localStorage)try{e?localStorage.setItem(a,c):sessionStorage.setItem(a,c)}catch(d){}else{var b=window.location.host,t={"com.cn":1,"js.cn":1,"net.cn":1,"gov.cn":1,"com.hk":1,"co.nz":1},k=b.split(".");2<k.length&&(b=(t[k.slice(-2).join(".")]?k.slice(-3):k.slice(-2)).join("."));document.cookie=
    a+"="+c+";path=/;domain="+b+(e?";expires="+e:"")}}function v(a){var c={},e;if(void 0===a){var b=window.location;a=b.host;var t=b.pathname;var k=b.search.substr(1);var d=b.hash}else b=a.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?::\d+)?(\/[^\?\\"'\|:<>]*)?(?:\?([^'"\\<>#]*))?(?:#(\w+))?/i)||[],a=b[1],t=b[2],k=b[3],d=b[4];void 0!==d&&(d=d.replace(/"|'|<|>/ig,"M"));k&&function(){for(var f=k.split("&"),l=0,h=f.length;l<h;l++)if(-1!=f[l].indexOf("=")){var g=f[l].indexOf("="),p=f[l].slice(0,g);g=f[l].slice(g+1);
    c[p]=g}}();k=function(){if("undefined"===typeof k)return k;for(var f=k.split("&"),l=[],h=0,g=f.length;h<g;h++)if(-1!=f[h].indexOf("=")){var p=f[h].indexOf("="),q=f[h].slice(0,p);p=f[h].slice(p+1);m.ignoreParams&&-1!=m.ignoreParams.indexOf(q)||l.push(q+"="+p)}return l.join("&")}();d&&function(){for(var f=0==d.indexOf("#")?d.substr(1).split("&"):d.split("&"),l=0,h=f.length;l<h;l++)if(-1!=f[l].indexOf("=")){var g=f[l].indexOf("="),p=f[l].slice(0,g);g=f[l].slice(g+1);if("adtag"===p.toLowerCase()){e=g;
    break}}}();return{host:a,path:t,search:k,hash:d,param:c,adtag:e}}function n(a){for(var c=[0,1,2,3,4,5,6,7,8,9],e=10;1<e;e--){var b=Math.floor(10*Math.random()),t=c[b];c[b]=c[e-1];c[e-1]=t}for(e=b=0;5>e;e++)b=10*b+c[e];return(a||"")+(b+""+ +new Date)}function x(){var a=v(),c={dm:a.host,pvi:"",si:"",url:a.path,arg:encodeURIComponent(a.search||"").substr(0,512),ty:0};c.pvi=function(){var e=(new Date((new Date).getTime()+63072E6)).toGMTString();if(m.userReport){var b=r("pgv_uid");b&&b==m.user.user_id||
(c.ty=1,w("pgv_uid",m.user.user_id,e));b=m.user.user_id}else b=r("pgv_pvi"),b||(c.ty=1,b=n(void 0),w("pgv_pvi",b,e));return b}();c.si=function(){var e=r("pgv_si");e||(e=n("s"),w("pgv_si",e));return e}();c.url=function(){var e=a.path;m.senseQuery&&(e+=a.search?"?"+encodeURIComponent(a.search||"").substr(0,512):"");m.senseHash&&(e+=a.hash?encodeURIComponent(a.hash):"");return e}();return c}function A(){var a=v(document.referrer),c=v();return{rdm:a.host,rurl:a.path,rarg:encodeURIComponent(a.search||
        "").substr(0,512),adt:c.param.ADTAG||c.param.adtag||c.param.CKTAG||c.param.cktag||c.param.PTAG||c.param.ptag||c.adtag}}function y(){try{var a=navigator,c=screen||{width:"",height:"",colorDepth:""},e={scr:c.width+"x"+c.height,scl:c.colorDepth+"-bit",lg:(a.language||a.userLanguage).toLowerCase(),tz:(new Date).getTimezoneOffset()/60}}catch(b){return{}}return e}function z(a){arr={};if(a){var c=arr,e=[],b;for(b in a)a.hasOwnProperty(b)&&e.push(encodeURIComponent(b)+"="+encodeURIComponent(a[b]));a=e.join(";");
    c.ext=a}return arr}function B(a){a=a||{};for(var c in a)a.hasOwnProperty(c)&&(m[c]=a[c]);if(m.sid)if(!m.userReport||m.user.user_id&&!parseInt(m.user.user_id,10)!==m.user.user_id){a=[];for(var e=0,b=[x(),A(),{r2:m.sid},y(),z({version:m.version}),{random:+new Date}],t=b.length;e<t;e++)for(c in b[e])b[e].hasOwnProperty(c)&&a.push(c+"="+("undefined"==typeof b[e][c]?"":b[e][c]));var k=function(d){d=Ta.src="https://pingtas.qq.com/webview/pingd?"+d.join("&").toLowerCase();var f=new Image;Ta[m.sid]=f;f.onload=
    f.onerror=f.onabort=function(){f=f.onload=f.onerror=f.onabort=null;Ta[m.sid]=!0};f.src=d};k(a);m.performanceMonitor&&(c=function(){if(window.performance){var d=window.performance.timing;var f={value:d.domainLookupEnd-d.domainLookupStart};var l={value:d.connectEnd-d.connectStart},h={value:d.responseStart-(d.requestStart||d.responseStart+1)},g=d.responseEnd-d.responseStart;d.domContentLoadedEventStart?0>g&&(g=0):g=-1;d={domainLookupTime:f,connectTime:l,requestTime:h,resourcesLoadedTime:{value:g},domParsingTime:{value:d.domContentLoadedEventStart?
            d.domInteractive-d.domLoading:-1},domContentLoadedTime:{value:d.domContentLoadedEventStart?d.domContentLoadedEventStart-d.fetchStart:-1}}}else d="";f=d;l=[];d=[];h=0;g=[x(),{r2:m.cid},y(),{random:+new Date}];for(var p=g.length;h<p;h++)for(var q in g[h])g[h].hasOwnProperty(q)&&d.push(q+"="+("undefined"==typeof g[h][q]?"":g[h][q]));for(q in f)f.hasOwnProperty(q)&&("domContentLoadedTime"==q?d.push("r3="+f[q].value):l.push(f[q].value));q=z({pfm:l.join("_"),version:m.version});d.push("ext="+q.ext);k(d)},
    "undefined"!==typeof window.performance&&"undefined"!==typeof window.performance.timing&&0!=window.performance.timing.loadEventEnd?c():window.attachEvent?window.attachEvent("onload",c):window.addEventListener&&window.addEventListener("load",c,!1))}else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u9009\u62e9\u4e86\u7528\u6237\u7edf\u8ba1uv\uff0c\u8bf7\u8bbe\u7f6e\u4e1a\u52a1\u7684user_id\uff0c\u9700\u4e3aint\u7c7b\u578b");else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u6ca1\u6709\u8bbe\u7f6esid")}
    u.MtaH5=u.MtaH5||{};u.Ta=u.Ta||{};MtaH5.pgv=B;Ta.clickStat=MtaH5.clickStat=function(a,c){var e=MtaH5.hack?MtaH5.hack():"",b={};e.conf&&function(){var g=e.conf,p;for(p in g)g.hasOwnProperty(p)&&(b[p]=g[p])}();if(b.cid){var t=[],k=x(),d={r2:m.sid};k.dm="taclick";k.url=a.toString().toLowerCase();d.r2=b.cid;d.r5=function(g){g="undefined"===typeof g?{}:g;var p=[],q;for(q in g)g.hasOwnProperty(q)&&p.push(q+"="+encodeURIComponent(g[q]));return p.join(";")}(c);var f=0;k=[k,A(),d,y(),z({version:b.version}),
        {random:+new Date}];for(d=k.length;f<d;f++)for(var l in k[f])k[f].hasOwnProperty(l)&&t.push(l+"="+("undefined"==typeof k[f][l]?"":k[f][l]));t=MtaH5.src="https://pingtas.qq.com/webview/pingd?"+t.join("&");var h=new Image;MtaH5["click_"+b.sid]=h;h.onload=h.onerror=h.onabort=function(){h=h.onload=h.onerror=h.onabort=null;MtaH5[b.sid]=!0};h.src=t}else console.log("MTA H5\u5206\u6790\u9519\u8bef\u63d0\u793a\uff1a\u60a8\u6ca1\u6709\u8bbe\u7f6ecid,\u8bf7\u5230\u7ba1\u7406\u53f0\u5f00\u901a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5e76\u66f4\u65b0\u7edf\u8ba1\u4ee3\u7801")};
    Ta.clickShare=MtaH5.clickShare=function(a){var c=MtaH5.hack?MtaH5.hack():"",e={},b=v();b=b.param.CKTAG||b.param.ckatg;var t="undefined"===typeof b?[]:b.split(".");c.conf&&function(){var h=c.conf,g;for(g in h)h.hasOwnProperty(g)&&(e[g]=h[g])}();if(e.cid){b=[];var k=x(),d={r2:m.sid};k.dm="taclick_share";k.url="mtah5-share-"+a;d.r2=e.cid;d.r5=function(h,g){var p=[];2===h.length&&h[0]==g&&p.push(h[0]+"="+h[1]);return p.join(";")}(t,"mtah5_share");a=0;k=[k,A(),d,y(),z({version:e.version}),{random:+new Date}];
        for(d=k.length;a<d;a++)for(var f in k[a])k[a].hasOwnProperty(f)&&b.push(f+"="+("undefined"==typeof k[a][f]?"":k[a][f]));f=MtaH5.src="https://pingtas.qq.com/webview/pingd?"+b.join("&").toLowerCase();var l=new Image;MtaH5["click_"+e.sid]=l;l.onload=l.onerror=l.onabort=function(){l=l.onload=l.onerror=l.onabort=null;MtaH5[e.sid]=!0};l.src=f}};var C=MtaH5.hack?MtaH5.hack():{};C.conf&&function(){var a=C.conf,c;for(c in a)a.hasOwnProperty(c)&&(m[c]=a[c])}();m.autoReport&&B()})({},this);
85236
//  - https://developer.mozilla.org/en/HTML/Element/link#Stylesheet_load_events
    var isOldWebKit = +navigator.userAgent
            .replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/, "$1") < 536


    function request(url, callback, charset, crossorigin) {
        var isCSS = IS_CSS_RE.test(url)
        var node = doc.createElement(isCSS ? "link" : "script")

        if (charset) {
            var cs = isFunction(charset) ? charset(url) : charset
            if (cs) {
                node.charset = cs
            }
        }
        // crossorigin default value is `false`.
        if (!isUndefined(crossorigin) && !isCSS) {
            node.setAttribute("crossorigin", crossorigin)
        }
        addOnload(node, callback, isCSS, url)

        if (isCSS) {
            node.rel = "stylesheet"
            node.href = url
        }
        else {
            node.async = true
            node.src = url
        }

        // For some cache cases in IE 6-8, the script executes IMMEDIATELY after
        // the end of the insert execution, so use `currentlyAddingScript` to
        // hold current node, for deriving url in `define` call
        currentlyAddingScript = node

        // ref: #185 & http://dev.jquery.com/ticket/2709
        baseElement ?
            head.insertBefore(node, baseElement) :
            head.appendChild(node)

        currentlyAddingScript = null
    }

    function addOnload(node, callback, isCSS, url) {
        var supportOnload = "onload" in node

        // for Old WebKit and Old Firefox
        if (isCSS && (isOldWebKit || !supportOnload)) {
            setTimeout(function() {
                pollCss(node, callback)
            }, 1) // Begin after node insertion
            return
        }


        if (supportOnload) {
            node.onload = onload
            node.onerror = function() {
                emit("error", { uri: url, node: node })
                onload()
            }
        }
        else {
            node.onreadystatechange = function() {
                if (/loaded|complete/.test(node.readyState)) {
                    onload()
                }
            }
        }

        function onload() {
            // Ensure only run once and handle memory leak in IE
            node.onload = node.onerror = node.onreadystatechange = null

            // Remove the script to reduce memory leak
            if (!isCSS && !data.debug) {
                head.removeChild(node)
            }
            // Dereference the node
            node = null

            callback()
        }
    }

    function pollCss(node, callback) {
        var sheet = node.sheet
        var isLoaded

        // for WebKit < 536
        if (isOldWebKit) {
            if (sheet) {
                isLoaded = true
            }
        }
        // for Firefox < 9.0
        else if (sheet) {
            try {
                if (sheet.cssRules) {
                    isLoaded = true
                }
            } catch (ex) {
                // The value of `ex.name` is changed from "NS_ERROR_DOM_SECURITY_ERR"
                // to "SecurityError" since Firefox 13.0. But Firefox is less than 9.0
                // in here, So it is ok to just rely on "NS_ERROR_DOM_SECURITY_ERR"
                if (ex.name === "NS_ERROR_DOM_SECURITY_ERR") {
                    isLoaded = true
                }
            }
        }

        setTimeout(function() {
            if (isLoaded) {
                // Place callback here to give time for style rendering
                callback()
            }
            else {
                pollCss(node, callback)
            }
        }, 20)
    }

    function getCurrentScript() {
        if (currentlyAddingScript) {
            return currentlyAddingScript
        }

        // For IE6-9 browsers, the script onload event may not fire right
        // after the script is evaluated. Kris Zyp found that it
        // could query the script nodes and the one that is in "interactive"
        // mode indicates the current script
        // ref: http://goo.gl/JHfFW
        if (interactiveScript && interactiveScript.readyState === "interactive") {
            return interactiveScript
        }

        var scripts = head.getElementsByTagName("script")

        for (var i = scripts.length - 1; i >= 0; i--) {
            var script = scripts[i]
            if (script.readyState === "interactive") {
                interactiveScript = script
                return interactiveScript
            }
        }
    }


// For Developers
    seajs.request = request


    /**
     * util-deps.js - The parser for dependencies
     * ref: tests/research/parse-dependencies/test.html
     */

    var REQUIRE_RE = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g;
    var SLASH_RE = /\\\\/g;

    function parseDependencies(code) {
        var ret = []

        code.replace(SLASH_RE, "")
            .replace(REQUIRE_RE, function(m, m1, m2) {
                if (m2) {
                    ret.push(m2)
                }
            })

        return ret
    }


    /**
     * module.js - The core of module loader
     */

    var cachedMods = seajs.cache = {}
    var anonymousMeta

    var fetchingList = {}
    var fetchedList = {}
    var callbackList = {}

    var STATUS = Module.STATUS = {
        // 1 - The `module.uri` is being fetched
        FETCHING: 1,
        // 2 - The meta data has been saved to cachedMods
        SAVED: 2,
        // 3 - The `module.dependencies` are being loaded
        LOADING: 3,
        // 4 - The module are ready to execute
        LOADED: 4,
        // 5 - The module is being executed
        EXECUTING: 5,
        // 6 - The `module.exports` is available
        EXECUTED: 6
    }


    function Module(uri, deps) {
        this.uri = uri
        this.dependencies = deps || []
        this.exports = null
        this.status = 0

        // Who depends on me
        this._waitings = {}

        // The number of unloaded dependencies
        this._remain = 0
    }

// Resolve module.dependencies
    Module.prototype.resolve = function() {
        var mod = this
        var ids = mod.dependencies
        var uris = []

        for (var i = 0, len = ids.length; i < len; i++) {
            uris[i] = Module.resolve(ids[i], mod.uri)
        }
        return uris
    }

// Load module.dependencies and fire onload when all done
    Module.prototype.load = function() {
        var mod = this

        // If the module is being loaded, just wait it onload call
        if (mod.status >= STATUS.LOADING) {
            return
        }

        mod.status = STATUS.LOADING

        // Emit `load` event for plugins such as combo plugin
        var uris = mod.resolve()
        emit("load", uris, mod)
        var len = mod._remain = uris.length
        var m;


        // Initialize modules and register waitings
        for (var i = 0; i < len; i++) {
            m = Module.get(uris[i])

            if (m.status < STATUS.LOADED) {
                // Maybe duplicate: When module has dupliate dependency, it should be it's count, not 1
                m._waitings[mod.uri] = (m._waitings[mod.uri] || 0) + 1
            }
            else {
                mod._remain--
            }
        }

        if (mod._remain === 0) {
            mod.onload()
            return
        }

        // Begin parallel loading
        var requestCache = {}

        for (i = 0; i < len; i++) {
            m = cachedMods[uris[i]]

            if (m.status < STATUS.FETCHING) {
                m.fetch(requestCache)
            }
            else if (m.status === STATUS.SAVED) {
                m.load()
            }
        }

        // Send all requests at last to avoid cache bug in IE6-9. Issues#808
        for (var requestUri in requestCache) {
            if (requestCache.hasOwnProperty(requestUri)) {
                requestCache[requestUri]()
            }
        }
    }

// Call this method when module is loaded
    Module.prototype.onload = function() {
        var mod = this
        mod.status = STATUS.LOADED

        if (mod.callback) {
            mod.callback()
        }

        // Notify waiting modules to fire onload
        var waitings = mod._waitings
        var uri, m

        for (uri in waitings) {
            if (waitings.hasOwnProperty(uri)) {
                m = cachedMods[uri]
                m._remain -= waitings[uri]
                if (m._remain === 0) {
                    m.onload()
                }
            }
        }

        // Reduce memory taken
        delete mod._waitings
        delete mod._remain
    }

// Fetch a module
    Module.prototype.fetch = function(requestCache) {

        var mod = this
        var uri = mod.uri
        mod.status = STATUS.FETCHING
        // Emit `fetch` event for plugins such as combo plugin
        var emitData = { uri: uri }
        emit("fetch", emitData)
        var requestUri = emitData.requestUri || uri

        // Empty uri or a non-CMD module
        if (!requestUri || fetchedList[requestUri]) {
            mod.load()
            return
        }

        if (fetchingList[requestUri]) {
            callbackList[requestUri].push(mod)
            return
        }

        fetchingList[requestUri] = true
        callbackList[requestUri] = [mod]

        // Emit `request` event for plugins such as text plugin
        emit("request", emitData = {
            uri: uri,
            requestUri: requestUri,
            onRequest: onRequest,
            charset: data.charset,
            crossorigin: isFunction(data.crossorigin) ? data.crossorigin(requestUri) : data.crossorigin,
            context: this
        })

        if (!emitData.requested) {
            requestCache ?
                requestCache[emitData.requestUri] = sendRequest :
                sendRequest()
        }

        function sendRequest() {
            seajs.request(emitData.requestUri, emitData.onRequest, emitData.charset, emitData.crossorigin)
        }

        function onRequest() {
            delete fetchingList[requestUri]
            fetchedList[requestUri] = true

            // Save meta data of anonymous module
            if (anonymousMeta) {
                Module.save(uri, anonymousMeta)
                anonymousMeta = null
            }

            // Call callbacks
            var m, mods = callbackList[requestUri]
            delete callbackList[requestUri]
            while (typeof mods != 'undefined' && isArray(mods) && (m = mods.shift())) m.load()
        }
    }

// Execute a module
    Module.prototype.exec = function () {
        var mod = this

        // When module is executed, DO NOT execute it again. When module
        // is being executed, just return `module.exports` too, for avoiding
        // circularly calling
        if (mod.status >= STATUS.EXECUTING) {
            return mod.exports
        }

        mod.status = STATUS.EXECUTING

        // Create require
        var uri = mod.uri
        function require(id) {
            return Module.get(require.resolve(id)).exec()
        }

        require.resolve = function(id) {
            return Module.resolve(id, uri)
        }

        require.async = function(ids, callback) {
            Module.use(ids, callback, uri + "_async_" + cid())
            return require
        }

        // Exec factory
        var factory = mod.factory

        var exports = isFunction(factory) ?
            factory(require, mod.exports = {}, mod) :
            factory

        if (exports === undefined) {
            exports = mod.exports
        }

        // Reduce memory leak
        delete mod.factory

        mod.exports = exports
        mod.status = STATUS.EXECUTED

        // Emit `exec` event
        emit("exec", mod)

        return exports
    }

// Resolve id to uri
    Module.resolve = function(id, refUri) {
        // Emit `resolve` event for plugins such as text plugin
        var emitData = { id: id, refUri: refUri }
        emit("resolve", emitData)
        return emitData.uri || seajs.resolve(emitData.id, refUri)
    }

// Define a module
    Module.define = function (id, deps, factory) {
        var argsLen = arguments.length

        // define(factory)
        if (argsLen === 1) {
            factory = id
            id = undefined
        }
        else if (argsLen === 2) {
            factory = deps

            // define(deps, factory)
            if (isArray(id)) {
                deps = id
                id = undefined
            }
            // define(id, factory)
            else {
                deps = undefined
            }
        }

        // Parse dependencies according to the module factory code
        if (!isArray(deps) && isFunction(factory)) {
            deps = parseDependencies(factory.toString())
        }

        var meta = {
            id: id,
            uri: Module.resolve(id),
            deps: deps,
            factory: factory
        }

        // Try to derive uri in IE6-9 for anonymous modules
        if (!meta.uri && doc.attachEvent) {
            var script = getCurrentScript()

            if (script) {
                meta.uri = script.src
            }

            // NOTE: If the id-deriving methods above is failed, then falls back
            // to use onload event to get the uri
        }

        // Emit `define` event, used in nocache plugin, seajs node version etc
        emit("define", meta)

        meta.uri ? Module.save(meta.uri, meta) :
            // Save information for "saving" work in the script onload event
            anonymousMeta = meta
    }

// Save meta data to cachedMods
    Module.save = function(uri, meta) {
        var mod = Module.get(uri)

        // Do NOT override already saved modules
        if (mod.status < STATUS.SAVED) {
            mod.id = meta.id || uri
            mod.dependencies = meta.deps || []
            mod.factory = meta.factory
            mod.status = STATUS.SAVED
        }
    }

// Get an existed module or create a new one
    Module.get = function(uri, deps) {
        return cachedMods[uri] || (cachedMods[uri] = new Module(uri, deps))
    }

// Use function is equal to load a anonymous module
    Module.use = function (ids, callback, uri) {
        var mod = Module.get(uri, isArray(ids) ? ids : [ids])

        mod.callback = function() {
            var exports = []
            var uris = mod.resolve()

            for (var i = 0, len = uris.length; i < len; i++) {
                exports[i] = cachedMods[uris[i]].exec()
            }

            if (callback) {
                callback.apply(global, exports)
            }

            delete mod.callback
        }

        mod.load()
    }

// Load preload modules before all other modules
    Module.preload = function(callback) {
        var preloadMods = data.preload
        var len = preloadMods.length

        if (len) {
            Module.use(preloadMods, function() {
                // Remove the loaded preload modules
                preloadMods.splice(0, len)

                // Allow preload modules to add new preload modules
                Module.preload(callback)
            }, data.cwd + "_preload_" + cid())
        }
        else {
            callback()
        }
    }


// Public API

    seajs.use = function(ids, callback) {
        Module.preload(function() {
            Module.use(ids, callback, data.cwd + "_use_" + cid())
        })
        return seajs
    }

    Module.define.cmd = {}
    global.define = Module.define


// For Developers

    seajs.Module = Module
    data.fetchedList = fetchedList
    data.cid = cid

    seajs.require = function(id) {
        var mod = Module.get(Module.resolve(id))
        if (mod.status < STATUS.EXECUTING) {
            mod.onload()
            mod.exec()
        }
        return mod.exports
    }


    /**
     * config.js - The configuration for the loader
     */

    var BASE_RE = /^(.+?\/)(\?\?)?(seajs\/)+/;

// The root path to use for id2uri parsing
// If loaderUri is `http://test.com/libs/seajs/[??][seajs/1.2.3/]sea.js`, the
// baseUri should be `http://test.com/libs/`
    data.base = (loaderDir.match(BASE_RE) || ["", loaderDir])[1]

// The loader directory
    data.dir = loaderDir

// The current working directory
    data.cwd = cwd

// The charset for requesting files
    data.charset = "utf-8"

// Modules that are needed to load before all other modules
    data.preload = (function() {
        var plugins = []

        // Convert `seajs-xxx` to `seajs-xxx=1`
        // NOTE: use `seajs-xxx=1` flag in uri or cookie to preload `seajs-xxx`
        var str = location.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2")

        // Add cookie string
        str += " " + doc.cookie

        // Exclude seajs-xxx=0
        str.replace(/(seajs-\w+)=1/g, function(m, name) {
            plugins.push(name)
        })

        return plugins
    })()

// data.alias - An object containing shorthands of module id
// data.paths - An object containing path shorthands in module id
// data.vars - The {xxx} variables in module id
// data.map - An array containing rules to map module uri
// data.debug - Debug mode. The default value is false

    seajs.config = function(configData) {

        for (var key in configData) {
            var curr = configData[key]
            var prev = data[key]

            // Merge object config such as alias, vars
            if (prev && isObject(prev)) {
                for (var k in curr) {
                    prev[k] = curr[k]
                }
            }
            else {
                // Concat array config such as map, preload
                if (isArray(prev)) {
                    curr = prev.concat(curr)
                }
                // Make sure that `data.base` is an absolute path
                else if (key === "base") {
                    // Make sure end with "/"
                    if (curr.slice(-1) !== "/") {
                        curr += "/"
                    }
                    curr = addBase(curr)
                }

                // Set config
                data[key] = curr
            }
        }

        emit("config", configData)
        return seajs
    }

})(this);
//seajs end============================================================

//combo start==========================================================
;(function(){
    // Resolve module.dependencies
    //修改实现，支持[['dd'],['dd']]并行加载
    var isArray = Array.isArray || seajs.isType("Array")
    seajs.Module.prototype.resolve = function() {
        var mod = this
        var ids = mod.dependencies
        var uris = []
        //用来控制JS并发[['ddd'],['ddd']]
        var urisArr = [];

        for (var i = 0, len = ids.length; i < len; i++) {
            if(isArray(ids[i])){
                urisArr[i] = Array();
                for (var j = 0, tmplen = ids[i].length; j < tmplen; j++) {
                    urisArr[i][j] = seajs.Module.resolve(ids[i][j], mod.uri);
                    uris.push(seajs.Module.resolve(ids[i][j], mod.uri));
                }
            }else{
                uris.push(seajs.Module.resolve(ids[i], mod.uri));
                urisArr[i] = seajs.Module.resolve(ids[i], mod.uri);
            }

        }
        mod.urisArr = urisArr;
        return uris
    }
    /**
     * The Sea.js plugin for concatenating HTTP requests
     */

    var Module = seajs.Module
    var FETCHING = Module.STATUS.FETCHING

    var data = seajs.data
    var comboHash = data.comboHash = {}

    var comboSyntax = ['c/=/', ',/']
    var comboMaxLength = 2000
    var comboExcludes


    seajs.on("load", setComboHash)
    seajs.on("fetch", setRequestUri)

    function setComboHash(uris, mod) {

        if(mod && mod.urisArr){
            uris = mod.urisArr;
        }


        if(seajs.data.debug){
            return;
        }


        var len = uris.length
        if (len < 2) {
            return
        }

        data.comboSyntax && (comboSyntax = data.comboSyntax)
        data.comboMaxLength && (comboMaxLength = data.comboMaxLength)

        comboExcludes = data.comboExcludes = /.*/;
        var needComboUris = []

        for (var i = 0; i < len; i++) {
            var uri = uris[i]

            if(isArray(uri)){
                setComboHash(uri);
                continue;
            }

            if (comboHash[uri]) {
                continue
            }

            var mod = Module.get(uri)

            // Remove fetching and fetched uris, excluded uris, combo uris
            if (mod.status < FETCHING && !isExcluded(uri) && !isComboUri(uri)) {
                needComboUris.push(uri)
            }
        }

        if (needComboUris.length > 1) {
            paths2hash(uris2paths(needComboUris))
        }

    }

    function setRequestUri(data) {
        if(seajs.data.debug){
            return;
        }
        comboHashKey = data.uri.split('?');
        data.requestUri = comboHash[comboHashKey[0]] || data.uri
    }


    // Helpers[ "http://example.com/p", ["a.js", "c/d.js", "c/e.js", "a.css", "b.css"] ]

    function uris2paths(uris) {



        return meta2paths(uris2meta(uris))
    }

    // [
    //   "http://example.com/p/a.js",
    //   "https://example2.com/b.js",
    //   "http://example.com/p/c/d.js",
    //   "http://example.com/p/c/e.js"
    // ]
    // ==>
    // {
    //   "http__example.com": {
    //                          "p": {
    //                                 "a.js": { __KEYS: [] },
    //                                 "c": {
    //                                        "d.js": { __KEYS: [] },
    //                                        "e.js": { __KEYS: [] },
    //                                        __KEYS: ["d.js", "e.js"]
    //                                 },
    //                                 __KEYS: ["a.js", "c"]
    //                               },
    //                          __KEYS: ["p"]
    //                        },
    //   "https__example2.com": {
    //                            "b.js": { __KEYS: [] },
    //                            _KEYS: ["b.js"]
    //                          },
    //   __KEYS: ["http__example.com", "https__example2.com"]
    // }

    function uris2meta(uris) {
        var meta = {
            __KEYS: []
        }

        for (var i = 0, len = uris.length; i < len; i++) {
            var partsTemp = uris[i].replace("://", "__").split("/")
            var parts = [partsTemp[0], partsTemp.slice(1).join('/')];
            var m = meta

            for (var j = 0, l = parts.length; j < l; j++) {
                var part = parts[j]

                if (!m[part]) {
                    m[part] = {
                        __KEYS: []
                    }
                    m.__KEYS.push(part)
                }
                m = m[part]
            }
        }

        return meta
    }

    // {
    //   "http__example.com": {
    //                          "p": {
    //                                 "a.js": { __KEYS: [] },
    //                                 "c": {
    //                                        "d.js": { __KEYS: [] },
    //                                        "e.js": { __KEYS: [] },
    //                                        __KEYS: ["d.js", "e.js"]
    //                                 },
    //                                 __KEYS: ["a.js", "c"]
    //                               },
    //                          __KEYS: ["p"]
    //                        },
    //   "https__example2.com": {
    //                            "b.js": { __KEYS: [] },
    //                            _KEYS: ["b.js"]
    //                          },
    //   __KEYS: ["http__example.com", "https__example2.com"]
    // }
    // ==>
    // [
    //   ["http://example.com/p", ["a.js", "c/d.js", "c/e.js"]]
    // ]

    function meta2paths(meta) {
        var paths = []
        var __KEYS = meta.__KEYS

        for (var i = 0, len = __KEYS.length; i < len; i++) {
            var part = __KEYS[i]
            var root = part
            var m = meta[part]
            var KEYS = m.__KEYS

            while (KEYS.length === 1) {
                root += "/" + KEYS[0]
                m = m[KEYS[0]]
                KEYS = m.__KEYS
            }

            if (KEYS.length) {
                paths.push([root.replace("__", "://"), meta2arr(m)])
            }
        }

        return paths
    }

    // {
    //   "a.js": { __KEYS: [] },
    //   "c": {
    //          "d.js": { __KEYS: [] },
    //          "e.js": { __KEYS: [] },
    //          __KEYS: ["d.js", "e.js"]
    //        },
    //   __KEYS: ["a.js", "c"]
    // }
    // ==>
    // [
    //   "a.js", "c/d.js", "c/e.js"
    // ]

    function meta2arr(meta) {
        var arr = []
        var __KEYS = meta.__KEYS

        for (var i = 0, len = __KEYS.length; i < len; i++) {
            var key = __KEYS[i]
            var r = meta2arr(meta[key])

            // key = "c"
            // r = ["d.js", "e.js"]
            var m = r.length
            if (m) {
                for (var j = 0; j < m; j++) {
                    arr.push(key + "/" + r[j])
                }
            } else {
                arr.push(key)
            }
        }

        return arr
    }

    // [
    //   [ "http://example.com/p", ["a.js", "c/d.js", "c/e.js", "a.css", "b.css"] ]
    // ]
    // ==>
    //
    // a hash cache
    //
    // "http://example.com/p/a.js"  ==>   "http://example.com/p/??a.js,c/d.js,c/e.js"
    // "http://example.com/p/c/d.js"  ==> "http://example.com/p/??a.js,c/d.js,c/e.js"
    // "http://example.com/p/c/e.js"  ==> "http://example.com/p/??a.js,c/d.js,c/e.js"
    // "http://example.com/p/a.css"  ==> "http://example.com/p/??a.css,b.css"
    // "http://example.com/p/b.css"  ==> "http://example.com/p/??a.css,b.css"
    //

    function paths2hash(paths) {
        for (var i = 0, len = paths.length; i < len; i++) {
            var path = paths[i]
            var root = path[0] + "/"
            var group = files2group(path[1])
            for (var j = 0, m = group.length; j < m; j++) {
                setHash(root, group[j])
            }
        }
        return comboHash
    }

    function setHash(root, files) {
        //处理max_age，版本号
        var arrFile, v=[], matches;
        for(var key in files){
            arrFile = files[key].split("?");
            files[key] = arrFile[0];
            if(arrFile[1]){
                matches = /&v=(\d+)/.exec(arrFile[1]);
                matches && v.push(matches[1]);
            }
        }
        var comboPath = root + comboSyntax[0] + files.join(comboSyntax[1])
        if(data.localcache && data.localcache.maxAge){
            if(v.length > 0){
                comboPath += '?max_age='+data.localcache.maxAge+'&v='+v.join('_');
            }else{
                comboPath += '?max_age='+data.localcache.maxAge
            }
        }
        var exceedMax = comboPath.length > comboMaxLength
        // http://stackoverflow.com/questions/417142/what-is-the-maximum-length-of-a-url
        if (files.length > 1 && exceedMax) {
            var parts = splitFiles(files,
                comboMaxLength - (root + comboSyntax[0]).length)
            setHash(root, parts[0])
            setHash(root, parts[1])
        } else {
            if (exceedMax) {
                throw new Error("The combo url is too long: " + comboPath)
            }

            for (var i = 0, len = files.length; i < len; i++) {
                comboHash[root + files[i]] = comboPath
            }
        }
    }

    function splitFiles(files, filesMaxLength) {
        var sep = comboSyntax[1]
        var s = files[0]

        for (var i = 1, len = files.length; i < len; i++) {
            s += sep + files[i]
            if (s.length > filesMaxLength) {
                return [files.splice(0, i), files]
            }
        }
    }

    //
    //  ["a.js", "c/d.js", "c/e.js", "a.css", "b.css", "z"]
    // ==>
    //  [ ["a.js", "c/d.js", "c/e.js"], ["a.css", "b.css"] ]
    //

    function files2group(files) {
        var group = []
        var hash = {}

        for (var i = 0, len = files.length; i < len; i++) {
            var file = files[i]
            var ext = getExt(file)

            if (ext) {
                (hash[ext] || (hash[ext] = [])).push(file)
            }
        }

        for (var k in hash) {
            if (hash.hasOwnProperty(k)) {
                group.push(hash[k])
            }
        }

        return group
    }

    function getExt(file) {
        var start = file.lastIndexOf(".")
        var stop = file.lastIndexOf("?")
        return start >= 0 ? (stop >0 ? file.substring(start, stop) : file.substring(start)) : ""
    }

    function isExcluded(uri) {
        if (comboExcludes) {
            return comboExcludes.test ?
                comboExcludes.test(uri) :
                comboExcludes(uri)
        }
    }

    function isComboUri(uri) {
        var comboSyntax = data.comboSyntax || ["??", ","]
        var s1 = comboSyntax[0]
        var s2 = comboSyntax[1]

        return s1 && uri.indexOf(s1) > 0 || s2 && uri.indexOf(s2) > 0
    }
    // For test
    if (data.test) {
        var test = seajs.test || (seajs.test = {})
        test.uris2paths = uris2paths
        test.paths2hash = paths2hash
    }
})()
//combo end==========================================================

//localcache start===================================================
;(function(){
    'user strict';
    var data = seajs.data,
        remoteManifest,
        defaultSyntax = ['c/=/',',/'];
    var navUserAgent = navigator.userAgent;
    //是否使用本插件功能
    var isUseLocalCache = true;
    //根据版本拼接文件名
    seajs.on('resolve', function(emitData) {
        if (emitData.id) {
            var id = seajs.resolveId(emitData.id);
            if(!data.manifest[id]){
                return;
            }
            emitData.id = id;

            //大版本号
            var vesion = data.manifest[emitData.id].split('-');
            //小版本号
            var smallVesion = data.manifest[emitData.id].split('_');

            if(smallVesion[1]){
                var eId = emitData.id + (smallVesion[0] ? '-' + smallVesion[0] : '');
                emitData.uri = seajs.resolveUri(eId);
                emitData.uri = emitData.uri + (emitData.uri.indexOf('?') != -1  ? '&':'?') + 'max_age=' + data.localcache.maxAge+'&v='+smallVesion[1];
            }else{
                var eId = emitData.id + (vesion[0] ? '-' + vesion[0] : '');
                var eId = eId + (vesion[1] ? '-' + vesion[1] : '');
                emitData.uri = seajs.resolveUri(eId);
                emitData.uri = emitData.uri + (emitData.uri.indexOf('?') != -1 ? '&':'?') + 'max_age=' + data.localcache.maxAge;
            }
        }
    });
    seajs.on('request', function(emitData) {
        /*******************全局*****************/
        //测试的话，不走localStorage
        if(!window.localStorage || seajs.data.debug || !(data.localcache && data.localcache.openLocalStorageCache==1)){
            return;
        }
        if(!isUseLocalCache){
            return;
        }
        //如果是小于等于IE9则暂时不支持
        if(isLessIE9()){
            return;
        }
        if(!data.manifest){
            //没有配置缓存文件，直接返回.
            return
        }
        //根据manifest生成remoteManifest
        if(!remoteManifest){
            var mainVesion,smallVesion,eId,tmpKey;
            remoteManifest = {};
            for(tmpKey in data.manifest){
                mainVesion = data.manifest[tmpKey].split('-');
                smallVesion = data.manifest[tmpKey].split('_');
                if(smallVesion[1]){
                    eId = tmpKey + (smallVesion[0] ? '-' + smallVesion[0] : '');
                }else{
                    eId = tmpKey + (mainVesion[0] ? '-' + mainVesion[0] : '');
                    eId = eId + (mainVesion[1] ? '-' + mainVesion[1] : '');
                }
                remoteManifest[seajs.resolveUri(eId)] = smallVesion[1]?smallVesion[1]:"0";
            }
        }
        var localManifest = storage.get(data.base.substring(7)+'manifest',true) || {}
        /*******************全局end*****************/

        var url = emitData.requestUri || emitData.uri
        var isComboUrl = isCombo(url)
        var arrUrl = url.split('?');
        if(!isComboUrl && remoteManifest[arrUrl[0]]){
            url = arrUrl[0];
            //判断是否在缓存中
            var cached = storage.get(url);
            var cachedValidated = validate(url, cached);
            if(remoteManifest[url] == localManifest[url] && cachedValidated){
                //在缓存中，就直接执行
                if(!use(url, cached)){
                    //执行失败，直接返回，继续seajs原有逻辑
                    return;
                }else{
                    //alert('cached');
                    emitData.requested = true;
                    emitData.onRequest.call(emitData.context);
                    return;
                }
            }else{
                //otherwise, get latest version from network
                emitData.requested = true;
                var tmpFetchUrl = url+'?'+arrUrl[1];
                fetchAjax(tmpFetchUrl, function(resp){
                    if(resp && validate(url, resp)){
                        if(!use(url, resp)){
                            seajs.request(tmpFetchUrl, function() {
                                emitData.onRequest.call(emitData.context);
                            });
                            return;
                        }else{
                            localManifest = storage.get(data.base.substring(7)+'manifest',true) || {}
                            localManifest[url] = remoteManifest[url]
                            storage.set(data.base.substring(7)+'manifest', JSON.stringify(localManifest))  //update one by one
                            storage.set(url, resp);
                            emitData.requested = true;
                            emitData.onRequest.call(emitData.context);
                            return;
                        }
                    }else{
                        seajs.request(tmpFetchUrl, function() {
                            emitData.onRequest.call(emitData.context);
                        });
                        return;
                    }
                })
            }
        }else if(isComboUrl){
            //try to find available code cache
            var splited = splitComboUrl(url), needFetchAjax = false;

            for(var i= splited.files.length - 1;i>=0;i--){
                var file = splited.host + splited.files[i]
                var cached = storage.get(file)
                var cachedValidated = validate(file, cached)
                if(remoteManifest[file]){
                    needFetchAjax = true
                    if(remoteManifest[file] == localManifest[file] && cachedValidated) {
                        use(file, cached)
                        splited.files.splice(i,1)  //remove from combo
                    }
                }
            }

            if(splited.files.length == 0){
                emitData.requested = true;
                emitData.onRequest.call(emitData.context);
                return
            }
            //测试用
            //needFetchAjax = true;
            // call fetch directly if all combo files are not under version control
            if(!needFetchAjax) {
                return
            }
            var syntax = data.comboSyntax || defaultSyntax,
                comboUrl = splited.host + syntax[0] + splited.files.join(syntax[1])+'?'+splited.query;
            emitData.requested = true;
            fetchAjax(comboUrl, function(resp){
                if(!resp){
                    seajs.request(comboUrl, function() {
                        emitData.onRequest.call(emitData.context);
                    });
                    return
                }
                var splitedCode = splitCombo(resp, comboUrl, splited.files)

                if(splited.files.length == splitedCode.length){
                    //ensure they are matched with each other
                    localManifest = storage.get(data.base.substring(7)+'manifest',true) || {}
                    for(var i= 0,len = splited.files.length;i<len;i++){
                        var file = splited.host + splited.files[i]
                        if(!use(file, splitedCode[i])){
                            seajs.request(comboUrl, function() {
                                emitData.onRequest.call(emitData.context);
                            });
                            return
                        }else{
                            localManifest[file] = remoteManifest[file]
                            storage.set(file, splitedCode[i])
                        }
                    }
                    storage.set(data.base.substring(7)+'manifest', JSON.stringify(localManifest))
                    //onLoad(url)
                    emitData.onRequest.call(emitData.context);
                    return;
                }else{
                    //filenames and codes not matched, fetched code is broken at somewhere.
                    if(!use(comboUrl, resp)){
                        seajs.request(comboUrl, function() {
                            emitData.onRequest.call(emitData.context);
                        });
                    }else{
                        emitData.onRequest.call(emitData.context);
                    }
                    return;
                }
            })
        }else{
            //不缓存的JS文件
            if(localManifest[url]){
                delete localManifest[url]
                storage.set(data.base.substring(7) +'manifest', JSON.stringify(localManifest))
                storage.remove(url)
            }
            return;
        }

    })




    var storage = {
        _maxRetry: 1,
        _retry: true,
        get: function(key, parse){
            var val
            try{
                val = localStorage.getItem(key)
            }catch(e){
                return undefined
            }
            if(val){
                return parse? JSON.parse(val):val
            }else{
                return undefined
            }
        },
        set: function(key, val, retry){
            retry = ( typeof retry == 'undefined' ) ? this._retry : retry
            try{
                localStorage.setItem(key, val)
            }catch(e){
                if(retry) {
                    var max = this._maxRetry
                    while(max > 0) {
                        max --
                        this.removeAll()
                        this.set(key, val, false)
                    }
                }
            }
        },
        remove: function(url){
            try{
                localStorage.removeItem(url)
            }catch(e){}
        },
        removeAll: function(force){
            /**
             * Default localstorage clean
             * delete localstorage items which are not in latest manifest
             */
            var prefix = (data.localcache && data.localcache.prefix) || /^https?\:/

            for(var i=localStorage.length-1; i>=0; i--) {
                var key = localStorage.key(i)
                if(!prefix.test(key)) continue  //Notice: change the search pattern if not match with your manifest style
                if(force || (remoteManifest &&  !remoteManifest[key])){
                    localStorage.removeItem(key);
                }
            }
        }
    }



    /**
     * Check whether the code is complete and clean
     * @param url
     * @param code
     * @return {Boolean}
     */
    var validate = (seajs.data.localcache && seajs.data.localcache.validate) || function(url, code){
            if(!code || !url) return false
            else return true
        }

    var fetchAjax = function(url, callback){
        try{
            var xhr = new window.XMLHttpRequest()
            var timer = setTimeout(function(){
                xhr.abort()
                callback(null)
            }, (data.localcache && data.localcache.timeout) || 30000)
            xhr.open('GET',url,true)
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    clearTimeout(timer)
                    if(xhr.status === 200){
                        callback(xhr.responseText)
                    }else{
                        callback(null)
                    }
                }
            }
            xhr.send(null)
        }catch(e){
            isUseLocalCache = false;
            //reportError('Exception:'+e+',url:'+url);//屏蔽掉日志
            callback(null);
        }
    }

    var reportError = function(str){
        var img = new Image();
        str = encodeURIComponent('seajs-localcache-pc-fetchAjax-error,' + str + ',userAgent:'+navUserAgent);
        str = str.replace('%0D%0A','');
        str = str.replace('%0A','');
        img.src = "http://vipfunc.qq.com/tj2/logger.php?cmd=warn&info=" + str;
    }

    //判断是否是小于等于IE9
    var isLessIE9 = function(){
        var uaMatch,
            userAgent = navUserAgent.toLowerCase();

        if(userAgent.indexOf('compatible') != -1 && userAgent.indexOf('msie') != -1){
            uaMatch = userAgent.match(/msie ([\d.]+)/);
            if(uaMatch != null){
                if(uaMatch[1]){
                    var v = parseInt(uaMatch[1]);
                    if(v <= 9){
                        return true;
                    }
                }
            }
        }

        return false;
    }

    /**
     * run code in window environment
     * @param url
     * @param code
     */
    var use = function(url, code){
        if(code && /\S/.test(code)){
            if(/\.css(?:\?|$)/i.test(url)) {
                var doc = document,
                    node = doc.createElement('style')
                doc.getElementsByTagName("head")[0].appendChild(node)
                if(node.styleSheet) {
                    node.styleSheet.cssText = code
                } else {
                    node.appendChild(doc.createTextNode(code))
                }
            } else {
                try{
                    code += '//@ sourceURL='+ url  //for chrome debug
                    ;(window.execScript || function(data){ window['eval'].call(window,data)})(code)
                }catch(e){
                    window.BJ_REPORT && typeof BJ_REPORT.info != 'undefined' && BJ_REPORT.info("url:"+url + "Exception:"+ e);
                    return false
                }
            }
        }
        return true
    }

    var isCombo = function(url){
        var sign = (seajs.data.comboSyntax && seajs.data.comboSyntax[0]) || 'c/=/'
        return url.indexOf(sign) >= 0
    }

    var splitComboUrl = function(url){
        var syntax = seajs.data.comboSyntax || defaultSyntax
        var arr = url.split(syntax[0])
        if(arr.length != 2) return url
        var host = arr[0];
        var arr = arr[1].split('?')
        var urls = arr[0].split(syntax[1]);
        var result = {}
        result.host = host;
        result.query = arr[1];
        result.files = []
        for(var i= 0,len = urls.length;i<len;i++){
            result.files.push(urls[i])
        }
        return result
    }

    /**
     * Warning: rewrite this function to fit your combo file structure
     * Default: split by define(function(){})
     * @param code
     */
    var splitCombo = (seajs.data.localcache && seajs.data.localcache.splitCombo) || function(code, url, files){
            var arr = code.split('define(')
            var result = []
            for(var i= 0,len = arr.length;i<len;i++){
                if(i==0){
                    continue;
                }else if(arr[i]){
                    result.push('define('+arr[i])
                }
            }
            return result
        }
    seajs.Storage = storage;
})()
//localcache end=====================================================