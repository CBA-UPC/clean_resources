(function(w, d) {
	"use strict";
	var s1 = d.getElementsByTagName("script")[0],
		s = d.createElement("script"),
		types,
		attr,
		pageFn,
		onReady;
	types = {
		website: true,
	};

	s.src = "//tru.am/scripts/ta-pagesocial-sdk.js";

	attr = 

	pageFn = function() {
		var l,
			u,
			ogtype = attr('meta[property="og:type"]', "content");
		if (w.TRUE_ANTHEM.isValidPageType(ogtype) || types[ogtype]) {
			l = document.location;
			u = l.protocol + "//" + l.host + l.pathname;
			return {
				canonical: u,
				"og:type": "article",
				"og:url": u,
			};
		}
		return {};
	};

	onReady = function() {
		var l = document.location,
			h = l.hostname.toLowerCase(),
			cid;
		if (h.indexOf("pcmag.com") > -1) {
			cid = "1510";
		} else if (h.indexOf("mashable.com") > -1) {
			cid = "1511";
		} else if (h.indexOf("ign.com") > -1) {
			if (
				/^\/articles\//i.test(l.pathname) ||
				/^\/videos\//i.test(l.pathname) ||
				/^\/slideshows\//i.test(l.pathname)
			) {
				cid = "1520";
			}
		} else if (h.indexOf("askmen.com") > -1) {
			cid = "1512";
		} else if (h.indexOf("extremetech.com") > -1) {
			cid = "1515";
		} else if (h.indexOf("offers.com") > -1) {
			cid = "1509";
		} else if (h.indexOf("blackfriday.com") > -1) {
			cid = "1514";
		} else if (h.indexOf("bestblackfriday.com") > -1) {
			cid = "1570";
		} else if (h.indexOf("techbargains.com") > -1) {
			cid = "1516";
		} else if (h.indexOf("lifehacker.com") > -1) {
			cid = "2060";
		}
		if (cid) {
			if (cid === "1509" || cid === "1516" || cid === "1515") {
				w.TRUE_ANTHEM.configure(cid, {
					page: pageFn
				});
			} else {
				w.TRUE_ANTHEM.configure(cid);
			}
		}
	};
	if (s.addEventListener) {
		s.addEventListener("load", onReady, false);
	} else {
		s.onreadystatechange = function() {
			if (s.readyState in {
					loaded: 1,
					complete: 1
				}) {
				s.onreadystatechange = null;
				onReady();
			}
		};
	}
	s1.parentNode.insertBefore(s, s1);
})(window, document);