(function(w, d) {
	'use strict';
	var s1 = d.getElementsByTagName('script')[0],
		s = d.createElement('script'),
		onReady;

	s.src = '//tru.am/scripts/ta-pagesocial-sdk.js';

	onReady = function() {
		var l = document.location,
			h = l.hostname.toLowerCase(),
			cid;
		if (h.indexOf('gamerant.com') > -1) {
			cid = '1950';
		} else if (h.indexOf('thegamer.com') > -1) {
			cid = '1951';
		} else if (h.indexOf('dualshockers.com') > -1) {
			cid = '1952';
		} else if (h.indexOf('screenrant.com') > -1) {
			cid = '1957';
		} else if (h.indexOf('movieweb.com') > -1) {
			cid = '1958';
		} else if (h.indexOf('cbr.com') > -1) {
			cid = '1974';
		} else if (h.indexOf('collider.com') > -1) {
			cid = '1975';
		} else if (h.indexOf('givemesport.com') > -1) {
			cid = '1977';
		} else if (h.indexOf('thethings.com') > -1) {
			cid = '2015';
		}
		if (cid) {
			w.TRUE_ANTHEM.configure(cid);
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