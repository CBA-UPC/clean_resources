/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
());

var params = {};
location.search.replace(
    /([^?&=]+)=?([^&]*)/g,
    function(_, key, value) {
        if (key) { params[decodeURIComponent(key)] = decodeURIComponent(value||''); }
    }
);

var tag = params.clicktag ? params.clicktag : params.ct ? params.ct : null;
if (tag) {
    var elements = document.querySelectorAll('a[href]');
    for (var i=0, l=elements.length; i<l; i++) {
        elements[i].setAttribute('href', tag);
    }
}

var CAT_MODULES_VERSIONS = CAT_MODULES_VERSIONS || {"project":"display-ads","cat":{"modules":[{"button":"5.0.4"},{"font":"3.1.0"},{"freehtml":"1.0.2"},{"list":"2.0.2"},{"theme":"6.5.1"},{"wrapper":"1.0.1"},{"display":"(LOCAL)"},{"grid":"(LOCAL)"},{"page":"(LOCAL)"}]}};
