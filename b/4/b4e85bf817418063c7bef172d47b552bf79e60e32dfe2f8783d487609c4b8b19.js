/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;if(typeof _paq!=="object"){_paq=[]}if(typeof window.Matomo!=="object"){window.Matomo=window.Piwik=())}
/*!!! pluginTrackerHook */

/* GENERATED: tracker.js */
(function() {
    try {
    if (window.navigator.brave && window.navigator.brave.isBrave() || false){
        window._paq=window._paq||[];
        let brave_ua = navigator.userAgent.replace("Chrome","Chrome(Brave)");
        window._paq.push(['appendToTrackingUrl', 'ua='+brave_ua]); 
       }
    }
    catch (error) {
        console.error(error);
    }
})();
/* END GENERATED: tracker.js */

());());if(typeof window.piwik_log!=="function"){window.piwik_log=
/*!! @license-end */;