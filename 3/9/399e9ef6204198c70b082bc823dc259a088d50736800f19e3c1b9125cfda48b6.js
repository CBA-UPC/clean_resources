/*
Widget:   q4.doctracking
Version:  1.0.3
Compiled: 2016-05-19
*/
!function (a, b, c) { c !== b && b(function () { var d, e, f, g, h, i, j, k; a.hasOwnProperty = a.hasOwnProperty || Object.prototype.hasOwnProperty, a.hasOwnProperty("ga") && (h = "", d = /\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|mp4|txt|rar|html|wma|mov|avi|wmv|flv|wav)(\?.*)?$/i, e = /^https?:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i, g = /^https?\:\/\//i, f = /.*\.cloudfront\.net$/i, j = a.location.href.match(e), k = j.length > 0 ? j[1] : !1, i = b("base"), i.length > 0 && i.attr("href") !== c && (h = i.attr("href")), b("body").on("click", "a", function (c) { var i, j, l, m, n, o, p; if (i = b(this), l = i.attr("href") || "", !l.match(/^javascript:/i)) { if (m = l.match(e), n = null !== m ? m[1] : k, o = n === k || f.test(n) || n.toLowerCase().indexOf("q4cdn") > -1, j = { value: 0, non_i: !1, action: "click", loc: l }, l.match(/^mailto\:/i)) j.category = "email", j.label = l.replace(/^mailto\:/i, ""); else if (l.match() && !o) j.category = "external", j.label = l.replace(g, ""), j.non_i = !0; else if (null !== (p = l.match(d))) j.category = "download", j.action = "download", j.label = l.replace(/ /g, "-").replace(g, ""), j.loc = (f.test(n) ? "" : h) + l; else { if (!l.match(/^tel\:/i)) return; j.category = "telephone", j.action = "click", j.label = l.replace(/^tel\:/i, "") } a.ga("send", "event", j.category, j.action, j.label.toLowerCase(), j.value, { nonInteraction: j.non_i }), a.ga("Client.send", "event", j.category, j.action, j.label.toLowerCase(), j.value, { nonInteraction: j.non_i }) } })) }) }(window, window.jQuery);SizesConfig.srcsetAttr,a),h.appendChild(d)}),i&&(g.setAttribute(lazySizesConfig.sizesAttr,i),c.removeAttribute(lazySizesConfig.sizesAttr),c.removeAttribute("sizes")),k&&g.setAttribute("data-optimumx",k),j&&g.setAttribute("data-ratio",j),h.appendChild(g),c.appendChild(h)},n=function(a){if(a.target._lazybgset){var b=a.target,d=b._lazybgset,e=b.currentSrc||b.src;if(e){var f=c.fire(d,"bgsetproxy",{src:e,useSrc:h.test(e)?JSON.stringify(e):e});f.defaultPrevented||(d.style.backgroundImage="url("+f.detail.useSrc+")")}b._lazybgsetLoading&&(c.fire(d,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var d,e,f;!a.defaultPrevented&&(d=a.target.getAttribute("data-bgset"))&&(f=a.target,e=b.createElement("img"),e.alt="",e._lazybgsetLoading=!0,a.detail.firesLoad=!0,m(d,f,e),setTimeout(function(){c.loader.unveil(e),c.rAF(function(){c.fire(e,"_lazyloaded",{},!0,!0),e.complete&&n({target:e})})}))}),b.addEventListener("load",n,!0),a.addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c&&a.target._lazybgset&&a.detail.dataAttr){var b=a.target._lazybgset,d=k(b);i[d]&&(a.target._lazysizesParentFit=d,c.rAF(function(){a.target.setAttribute("data-parent-fit",d),a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0),b.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&a.detail.instance==c&&(a.detail.width=j(a.target._lazybgset))})}});