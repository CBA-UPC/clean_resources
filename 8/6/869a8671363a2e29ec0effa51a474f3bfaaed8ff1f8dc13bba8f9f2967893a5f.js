function BillboardGaoLibAsync() {
    var gao = {};
    gao.creativeEmbed = function(a, b) {
        var c = gao.getById(b.creativeID);
        if (c) c.innerHTML = a;
        else setTimeout( 2)
    };
    gao._procesHTML = function() {
        var t = this;

        t.ensureGao = function() {
            var globalGao = window.gao || (window.gao = {});

            if (typeof globalGao.beginMonitorNext == "undefined") {
                globalGao.beginMonitorNext = function() {
                    if (globalGao.bufferQueue && globalGao.bufferQueue.length) {
                        globalGao.bufferQueue.shift().beginMonitor();
                    }
                }
            }

            return globalGao;
        };
	t.ensureGao();
        this.isInBufferQueue = function(globalGao) {
            // bufferQueue juz istnieje
            // sprwawdzanie musi sie odbywac ze wzgledu na zmienny stan bufora i document.readyState
            for (var i = 0; i < globalGao.bufferQueue.length; i++) {
                if (globalGao.bufferQueue[i] == t) return true;
            }
            return false;
        };
        this.holder = "___ZNACZNIK___";
        this.bufor = "";
        this.srcObj = null;
        this.tmpBuf = "";
        this.destBuf = "";
        this.busy = false;
        this.regs = {
            scriptBegin: /^\s*(<script\s*)(\s*(\w+)\s*=\s*(([^\s\"\'>]{1}[^\s>]*)|\"([^\"]*)\"|\'([^\']*)\'))*[^\w>]*>/i,
            scriptEnd: /(<\/script\b([^>\"\']|\"[^\"]*\"|\'[^\']*\')*>)/i,
            attr: /(\s*(\w+)\s*=\s*(([^\s\"\'>]{1}[^\s>]*)|\"([^\"]*)\"|\'([^\']*)\'))/
        };
        this.stack = [];
        this.started = false;
        this.startProces = function() {
            if (t.stack.length > 0) {
                t.start(t.stack.shift());
                return true;
            } else {
                t.started = false
            }
            return false;
        };
        this.addToProces = 
        this.beginMonitor = function() {
            var globalGao = window.gao;
            if (t.busy || (typeof globalGao !== "undefined" && globalGao.busy)) {
                // jesli przetwarzany inny bufor dodaj ten handler do kolejki
                if (!globalGao.bufferQueue) {
                    globalGao.bufferQueue = [];
                }
                // dodaj go tylko raz
                if (!t.isInBufferQueue(globalGao)) {
                    globalGao.bufferQueue.push(t);
                }

               return;
            }

            t.started = true;
            if (document.readyState != "complete") {
                setTimeout(function() {
                    gao.procesHTML.beginMonitor()
                }, 10);
                return
            }
            if (typeof ado !== "undefined" && ado.mode == "new" && ado.queue.length != 0 && ado.busy) {
                setTimeout( 10);
                return
            }
            t.startProces()
        };
        this.xWrite = function(s) {
            t.tmpBuf += s
        };
        this.xWriteln = 
        this.rewriteBuffor = function() {
            if (t.bufor.indexOf(t.holder) !== -1) {
                t.bufor = t.bufor.replace(t.holder, t.tmpBuf)
            } else {
                t.bufor = t.tmpBuf + t.bufor
            }
            t.tmpBuf = ""
        };
        this.evaluate = function(a) {
            if (window.execScript) {
                window.execScript(a);
                return null
            }
            var b = window.eval ? window.eval(a) : eval(a);
            return b
        };
        this.loadScript = function(a, b, c) {
            var d = false;
            var e = document.createElement("script");
            var f = a.indexOf("javascript:");
            if (a.indexOf("javascript:") !== -1) {
                var g = a.substr(f);
                t.evaluate(g);
                b(this);
                return
            }
            var h = function() {
                if (!d && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                    d = true;
                    b(this)
                }
            };
            if (gao.ie) {
                e.onreadystatechange = h
            } else {
                e.onload = h
            }
            e.src = a;
            if (typeof c !== "undefined" && c !== null) {
                e.charset = c
            }
            if (e.src.indexOf("redot.js") != -1) {
                if (gao.ie) e.onreadystatechange = function() {};
                else e.onload = 
                setTimeout( 1)
            }
            document.getElementsByTagName("head")[0].appendChild(e)
        };
        this.appendScript = function(b, c) {
            var d = function(a) {
                if (typeof callback === "function") {
                    callback()
                }
                t.rewriteBuffor();
                t.dispatch()
            };
            t.loadScript(b, d, c);
            return
        };
        this.processAttributes = function(a) {
            var b = {};
            while (a.length > 0) {
                var c = t.regs.attr.exec(a);
                if (!c) {
                    break
                }
                a = a.substr(c.index + c[1].length);
                var d = null;
                if (c[4]) {
                    d = c[4]
                }
                if (c[5]) {
                    d = c[5]
                }
                if (c[6]) {
                    d = c[6]
                }
                b[c[2].toLowerCase()] = d
            }
            return b
        };
        this.processInlineScript = function(a) {
            t.bufor = t.bufor.substr(a[0].length);
            var b = t.regs.scriptEnd.exec(t.bufor);
            var c = t.bufor.substr(0, b.index);
            t.bufor = t.holder + t.bufor.substr(b.index + b[0].length);
            c = c.replace("/*<![CDATA[*/", "");
            c = c.replace("<![CDATA[", "");
            c = c.replace("/* <![CDATA[ */", "");
            c = c.replace("/* ]]> */", "");
            c = c.replace("/*]]>*/", "");
            c = c.replace("<!--", "");
            c = c.replace("//-->", "");
            c = c.replace("//]]>-->", "");
            c = c.replace(/\/\*.*\*\//g, "");
            try {
                t.evaluate(c)
            } catch (ex) {}
            t.rewriteBuffor();
            t.dispatch();
            return
        };
        this.processSrcScript = function(a, b, c) {
            t.bufor = t.bufor.substr(a[0].length);
            var d = t.regs.scriptEnd.exec(t.bufor);
            t.bufor = t.holder + t.bufor.substr(d.index + d[0].length);
            t.appendScript(b, c)
        };
        this.dispatch = function() {
            t.deleteComment();
            var a = [];
            if (t.regs.scriptBegin.test(t.bufor) && t.regs.scriptEnd.test(t.bufor)) {
                a = t.regs.scriptBegin.exec(t.bufor);
                var b = t.processAttributes(a[0]);
                if (b.src) {
                    t.processSrcScript(a, b.src, b.charset)
                } else if (b.language !== "VBScript" && b.type != "text/vbscript") {
                    t.processInlineScript(a)
                }
            } else {
                var c = function() {
                    t.destBuf += t.bufor.replace(t.holder, "");
                    t.bufor = "";
                    t.clean()
                };
                var d = /<script/i;
                a = d.exec(t.bufor);
                if (a) {
                    var e = t.bufor.indexOf(a[0]);
                    t.destBuf += t.bufor.substr(0, e).replace(t.holder, "");
                    t.bufor = t.bufor.substr(e);
                    t.dispatch();
                    return
                } else {
                    c()
                }
            }
        };
        this.deleteComment = function() {
            var c = /\<!\s*--(.*?)(--\s*\>)/m;
            while (c.test(t.bufor)) {
                t.bufor = t.bufor.replace(c, "")
            }
        };
        this.clean = function() {
            t.busy = false;
            var globalGao = t.ensureGao();
            globalGao.busy = false;

            gao.creativeEmbed(t.destBuf, t.srcObj);
            if (!t.startProces()) {
                globalGao.beginMonitorNext();
            }
        };
        this.start = function(a) {
            t.srcObj = a;
            t.bufor = a.htmlCode;
            t.tmpBuf = "";
            t.destBuf = "";
            t.busy = true;
            var globalGao = t.ensureGao();
            globalGao.busy = true;

            document.write = t.xWrite;
            document.writeln = t.xWriteln;
            t.dispatch()
        }
    };
    if (typeof ado !== "undefined" && ado.mode === "new") gao.procesHTML = false;
    else gao.procesHTML = new gao._procesHTML;
    gao.addEvtListener = function(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, 1);
        else if (a.attachEvent) a.attachEvent("on" + b, c);
        else if (document.getElementById) a["on" + b] = c
    };
    gao.embeding = function(j) {
        var checkHTML5Support = function() {
            return !!document.createElement("canvas").getContext && !!window.postMessage
        };
        var getAvailableFlashVersion = function() {
            var convertVersion = function(v) {
                var nv = new Array(4);
                for (var i = 0; i < 4; i++) {
                    nv[i] = parseInt(v[i] || 0, 10)
                }
                return nv
            };
            var isLinux = /^Linux/.test(navigator.platform);
            var bv = function getBVersion() {
                var ua = navigator.userAgent.toLowerCase();
                var bd = ua.match(/(chrome|firefox(?=\/))\/?\s*((\d|\.)+)/i);
                if (!bd) {
                    return {
                        n: null,
                        v: [0, 0, 0, 0]
                    }
                }
                var bn = bd[1];
                bd = bd[2].split(".");
                bd = convertVersion(bd);
                return {
                    n: bn,
                    v: bd
                }
            }();
            var pv = function getPVersion() {
                var n = navigator.plugins;
                try {
                    if (n && n.length > 0) {
                        var f = navigator.mimeTypes;
                        var j = f["application/x-shockwave-flash"];
                        var h = j.enabledPlugin;
                        var k = h.description;
                        var v = h.version;
                        if (f && j && h) {
                            if (v) {
                                return convertVersion(h.version.split("."))
                            } else if (k) {
                                return convertVersion(k.split(/ +/)[2].split(/\./))
                            }
                        }
                    } else {
                        if (navigator.appVersion.indexOf("Mac") == -1 && window.execScript) {
                            var l = "ShockwaveFlash.ShockwaveFlash.";
                            for (i = 10; i > 6; i--) {
                                try {
                                    return convertVersion([(new ActiveXObject(l + i)).GetVariable("$version").split(",")[0].split(" ")[1]])
                                } catch (g) {}
                            }
                        }
                    }
                } catch (m) {}
                return [-1, -1, -1, -1]
            }();
            var checkIfBlocked = function() {
                var f = "firefox";
                var c = "chrome";
                var checkIfPluginBlocked = function() {
                    if (pv[0] < 18) return true;
                    if (pv[0] > 18 || pv[0] == 18 && (pv[1] > 0 || pv[2] > 0 || pv[3] >= 203 || pv[1] === 0 && pv[2] === 0 && pv[3] === 0)) {
                        return false
                    }
                    return true
                };
                if (bv.n === f && isLinux) {
                    if (pv[0] < 11) return true;
                    if (pv[0] === 11 && (pv[1] < 2 || (pv[1] == 2 && (pv[2] < 202 || (pv[2] == 202 && pv[3] <= 481))))) {
                        return true;
                    }
                    return false;
                }
                if (bv.n === f) {
                    return checkIfPluginBlocked()
                }
                if (bv.n === c && (bv.v[0] > 43 || bv.v[0] === 43 && (bv.v[1] > 0 || bv.v[2] > 2357 || bv.v[2] == 2357 && bv.v[3] > 131))) {
                    return checkIfPluginBlocked()
                }
                return false
            };
            if (checkIfBlocked()) {
                return -1
            }
            return pv[0]
        };
        var embedFlash = function() {
            var k = "" + j.redirection;
            for (i in j.flashVar) {
                if (j.flashVar.hasOwnProperty(i)) k += "&" + i + "=" + j.flashVar[i]
            }
            if (k.indexOf("&") == 0) k = k.substring(1);
            var l = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + location.protocol + "//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=" + j.flashVer + ',0,0,0" ';
            l += 'style="width:100%;height:100%;" id="' + j.idName + 'o">';
            l += '<param name="movie" value="' + j.swfFile + '" />';
            l += '<param name="flashvars" value="' + k + '" />';
            l += '<param name="quality" value="' + j.quality + '" />';
            l += '<param name="allowScriptAccess" value="always" />';
            l += '<param name="play" value="true" />';
            l += '<param name="menu" value="false" />';
            var m = '<embed id="' + j.idName + 'e" type="application/x-shockwave-flash" pluginpage="' + location.protocol + '//www.macromedia.com/go/getflashplayer" ';
            m += 'src="' + j.swfFile + '" flashvars="' + k + '" style="width:100%;height:100%;" name="' + j.idName + 'e" ';
            m += 'play="true" menu="false" quality="' + j.quality + '" allowScriptAccess="always" ';
            s = j.flashParams;
            for (i in s) {
                if (s.hasOwnProperty(i)) {
                    l += '<param name="' + i + '" value="' + s[i] + '" />';
                    m += i + '="' + s[i] + '" '
                }
            }
            m += "></object>";
            return l + m
        };
        var embedHtml = function() {
            var k = "" + j.redirection;
            for (i in j.flashVar) {
                if (j.flashVar.hasOwnProperty(i)) k += "&" + i + "=" + j.flashVar[i]
            }
            var l = '<iframe style="width:100%; height: 100%; border: none; overflow: hidden" seamless="seamless" scrolling="no" ';
            l += 'src="' + j.htmlFile + "#" + k + '" onload="this.contentWindow.postMessage(\'#'+k+'\', \'*\');"';
            l += "></iframe>";

            if (j.clicktagOverlay) {
                l += '<a target="_blank" href="' + (j.redir + j.targetUrl) + '" style="position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px"> </a>';
            }
            return l;
        };
        if (checkHTML5Support() && j.htmlFile) {
            return embedHtml()
        } else if (j.swfFile != "" && getAvailableFlashVersion() >= j.flashVer) {
            return embedFlash()
        } else if (j.imgFile != "") {
            j.swfFile = "";
            var n = '<a target="_blank" href="' + (j.redir + j.targetUrl) + '"><img src="' + j.imgFile + '" ';
            n += 'onclick="this.blur()" style="width:100%;height:100%;" border="0" ';
            if (j.flashParams["bgcolor"] != "undefined") n += 'style="background-color:' + j.flashParams["bgcolor"] + ';" ';
            n += "/></a>";
            return n
        } else if (j.htmlCode != "") {
            if (gao.procesHTML) {
                gao.procesHTML.addToProces(j);
                if (!gao.procesHTML.started) gao.procesHTML.beginMonitor();
                return ""
            } else {
                return j.htmlCode
            }
        }
        return embedFlash()
    };
    var userAgent = navigator.userAgent.toLowerCase();
    gao.ie = /msie/.test(userAgent) && !/opera/.test(userAgent);
    gao.css = document.compatMode != "CSS1Compat";
    var ie6 = /msie 6/.test(navigator.userAgent.toLowerCase());
    gao.badCSS = gao.ie && gao.css || ie6;
    gao.getById = function(a) {
        return document.getElementById ? document.getElementById(a) : document.all ? document.all[a] : document[a]
    };
    gao.getWindowSizes = function() {
        var a, adoHeight;
        a = gao.css ? document.body.clientWidth : document.documentElement.clientWidth;
        adoHeight = gao.css ? document.body.clientHeight : document.documentElement.clientHeight;
        return [a, adoHeight]
    };
    gao.getPageScroll = function() {
        if (typeof window.pageXOffset === "number") return [window.pageXOffset, window.pageYOffset];
        else return gao.css ? [document.body.scrollLeft, document.body.scrollTop] : [document.documentElement.scrollLeft, document.documentElement.scrollTop]
    };
    gao.countOffset = function(a, m) {
        var b = myObj0 = gao.getById(a);
        var c = ofsTop = 0;
        if (b.offsetParent) {
            do {
                c += b.offsetLeft;
                ofsTop += b.offsetTop
            } while (b = b.offsetParent);
            if (!m) {
                c -= myObj0.offsetLeft;
                ofsTop -= myObj0.offsetTop
            }
        }
        return [c, ofsTop]
    };
    gao.ci = function(a) {
        if (typeof console === "object" && typeof console.info === "function") console.info(a)
    };
    gao.toPix = function(a) {
        var b = gao.getWindowSizes();
        if (a.width) {
            if (a.width.indexOf("%") != -1) {
                a.width = parseInt(a.width) * b[0] / 100;
                a.flashParams["scale"] = "exactfit"
            } else {
                a.width = parseInt(a.width)
            }
        }
        if (a.height) {
            if (a.height.indexOf("%") != -1) {
                a.height = parseInt(a.height) * b[1] / 100;
                a.flashParams["scale"] = "exactfit"
            } else {
                a.height = parseInt(a.height)
            }
        }
        if (a.widthSmall) {
            if (a.widthSmall.indexOf("%") != -1) {
                a.widthSmall = parseInt(a.widthSmall) * b[0] / 100
            } else {
                a.widthSmall = parseInt(a.widthSmall)
            }
        }
        if (a.heightSmall) {
            if (a.heightSmall.indexOf("%") != -1) {
                a.heightSmall = parseInt(a.heightSmall) * b[1] / 100
            } else {
                a.heightSmall = parseInt(a.heightSmall)
            }
        }
    };
    var init = function(a) {
        var b = gao.getById(a.creativeID);
        if (!b) {
            setTimeout( 1);
            return
        }
        var c = b.style;
        a.alignment = a.alignment || "inherit";
        switch (a.alignment) {
            case "left":
                c.marginLeft = "0px";
                break;
            case "right":
                c.marginLeft = "auto";
                break;
            case "center":
                c.margin = "auto";
                break;
            case "inherit":
            default:
                var d = window.getComputedStyle ? window.getComputedStyle(b.parentNode, null).textAlign : b.parentNode.currentStyle.textAlign;
                if (d == "right") c.marginLeft = "auto";
                else if (d == "center") c.margin = "auto";
                else c.marginLeft = "0px"
        }
    };
    return function(bbbb) {
        gao.toPix(bbbb);
        var targetElement = document.getElementById(bbbb.targetID);
        if (targetElement) {
            var isExtraHTML = gao.procesHTML && bbbb.additionalHtml;
            var extraHTMLContainer = (isExtraHTML ? '<div id="' + bbbb.targetID + 'htmlcontainer"></div>' : '');

            targetElement.innerHTML = '<div id="' + bbbb.creativeID + '" style="'+(bbbb.clicktagOverlay ? 'position: relative; ':'')+'width:' + bbbb.width + "px;height:" + bbbb.height + 'px;">' + gao.embeding(bbbb) + "</div>" + extraHTMLContainer;
            init(bbbb);

            if (isExtraHTML) {
                gao.procesHTML.addToProces({
                    htmlCode: bbbb.additionalHtml,
                    creativeID: bbbb.targetID + 'htmlcontainer'
                });
                if (!gao.procesHTML.started) gao.procesHTML.beginMonitor();
            }
        }
    };
}(_gdeaq = window._gdeaq || []).push(["define", BillboardGaoLibAsync]);
