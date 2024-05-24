<HTML><HEAD>
<TITLE>Access Denied</TITLE>
</HEAD><BODY>
<H1>Access Denied</H1>
 
You don't have permission to access "http&#58;&#47;&#47;www&#46;sap&#46;com&#47;etc&#46;clientlibs&#47;sapdx&#47;front&#45;layer&#47;dist&#47;resources&#47;sapcom&#47;static&#45;Quote&#46;b5fd06d4b1d7ee027782&#46;css" on this server.<P>
Reference&#32;&#35;18&#46;24231102&#46;1706719705&#46;d3e68e
</BODY>
</HTML>
, m) { if (!l) { return } k = typeof k === "string" ? k : $.param(k); m = m || parent; if (i) { m[h](k, l.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) } else { if (l) { m.location = l.replace(/#.*$/, "") + "#" + (+new Date) + (j++) + "&" + k } } }; $.receiveMessage = c = function (l, m, k) { if (i) { if (l) { a && c(); a = function (n) { if ((typeof m === "string" && n.origin !== m) || ($.isFunction(m) && m(n.origin) === f)) { return f } l(n) } } if (b[e]) { b[l ? e : "removeEventListener"]("message", a, f) } else { b[l ? "attachEvent" : "detachEvent"]("onmessage", a) } } else { g && clearInterval(g); g = null; if (l) { k = typeof m === "number" ? m : typeof k === "number" ? k : 100; g = setInterval(function () { var o = document.location.hash, n = /^#?\d+&/; if (o !== d && n.test(o)) { d = o; l({ data: o.replace(n, "") }) } }, k) } } } })(jQuery);