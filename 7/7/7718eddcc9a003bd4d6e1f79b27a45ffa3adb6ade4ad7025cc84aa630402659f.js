(function(w, d) {
	'use strict';
	var s1 = d.getElementsByTagName('script')[0],
		s = d.createElement('script'),
		types,
		attr,
		pageFn,
		onReady;

	types = {
		'video.other': true
	};

	attr = 

	pageFn = function() {
		var ogtype = attr('meta[property="og:type"]', 'content');
		if (w.TRUE_ANTHEM.isValidPageType(ogtype) || types[ogtype]) {
			return {
				'canonical': attr('meta[property="og:url"]', 'content'),
				'og:type': 'article',
				'og:url': attr('meta[property="og:url"]', 'content')
			};
		}
		return {};
	};

	s.src = '//tru.am/scripts/ta-pagesocial-sdk.js';
	onReady = function() {
		var l = document.location,
			h = l.hostname.toLowerCase(),
			cid;
		if (h.indexOf('tsn.ca') > -1) {
			cid = '932';
		} else if (h.indexOf('theloop.ca') > -1) {
			cid = '539';
		} else if ((h.indexOf('www.etalk.ca') > -1) && !(/\/dynamic\//i.test(l.pathname))) {
			cid = '1399';
		} else if ((h.indexOf('marilyn.ca') > -1) || (h.indexOf('more.ctv.ca') > -1)) {
			cid = '1405';
		} else if ((h.indexOf('ctv.ca') > -1)) {
			cid = '1405';
		} else if ((h.indexOf('bnnbloomberg.ca') > -1)) {
			cid = '1660';
		} else if ((h.indexOf('noovomoi.ca') > -1)) {
			cid = '1763';
		}
		if (cid) {
			w.TRUE_ANTHEM.configure(cid, {
				page: pageFn
			});
		}
	};
	if (s.addEventListener) {
		s.addEventListener('load', onReady, false);
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
}(window, document));