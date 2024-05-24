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

/* GENERATED: tracker.min.js */
/*!!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://matomo.org/free-software/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
(function(){function a(){Matomo.addPlugin("DeviceNetworkInformation",{log:function(){var c="";try{var b=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(typeof b!=="undefined"){if(typeof b.type!=="undefined"){c+="&nwtype="+encodeURIComponent(b.type)}if(typeof b.effectiveType!=="undefined"){c+="&nwefftype="+encodeURIComponent(b.effectiveType)}}}catch(d){c=""}return c}})}if("object"===typeof window.Matomo){a()}else{if("object"!==typeof window.matomoPluginAsyncInit){window.matomoPluginAsyncInit=[]}window.matomoPluginAsyncInit.push(a)}})();
/* END GENERATED: tracker.min.js */


/* GENERATED: tracker.min.js */
/*!!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
(function(){function a(){if("object"===typeof window&&!window.Matomo){return}Matomo.addPlugin("DeviceFeatureWebGL",{log:function(){var c=document.createElement("canvas");var g=["webgl","experimental-webgl","webkit-3d","moz-webgl"];var d=null;for(var b=0;b<g.length;b++){try{d=c.getContext(g[b]);if(d){break}}catch(f){}}if(d===null){return"&webgl=0"}return"&webgl=1"}})}if("object"===typeof window.Matomo){a()}else{if("object"!==typeof window.matomoPluginAsyncInit){window.matomoPluginAsyncInit=[]}window.matomoPluginAsyncInit.push(a)}})();
/* END GENERATED: tracker.min.js */

());());if(typeof window.piwik_log!=="function"){window.piwik_log=
/*!! @license-end */;