// For license information, see `https://assets.adobedtm.com/5ef092d1efb5/2ed847db6b25/a5135263278c/RC4533cd51b40f4ce486eaaca0950ac490-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/5ef092d1efb5/2ed847db6b25/a5135263278c/RC4533cd51b40f4ce486eaaca0950ac490-source.min.js', "null!=window.wdgtagging&&function(t,e){window.location.pathname.match(/\\/games\\/store\\/.+\\/(cfq7ttc0k6l8|cfq7ttc0kgq8|cfq7ttc0khs0)\\/?/i)&&(e.pdpStoreUETMediaPixel=function(){try{t=window,a=document,n=\"script\",o=\"//bat.bing.com/bat.js\",t[r=\"uetq\"]=t[r]||[],i=function(){var e={ti:\"137017350\"};e.q=t[r],t[r]=new UET(e),t[r].push(\"pageLoad\")},(d=a.createElement(n)).src=o,d.async=1,d.onload=d.onreadystatechange=function(){var t=this.readyState;t&&\"loaded\"!==t&&\"complete\"!==t||(i(),d.onload=d.onreadystatechange=null)},(s=a.getElementsByTagName(n)[0]).parentNode.insertBefore(d,s),e.GamePassDictionary={xboxGamePass:{idRegex:/cfq7ttc0k6l8|cfq7ttc0kgq8|cfq7ttc0khs0/i},gamePassIdToEventLabel:{cfq7ttc0k6l8:\"none\",cfq7ttc0kgq8:\"pcgp\",cfq7ttc0khs0:\"ultimate\"}},e.fireUetEvent=function(t,a){try{window.uetq=window.uetq||[],\"none\"===a?window.uetq.push(\"event\",t,{}):window.uetq.push(\"event\",t,{event_label:a})}catch(t){e.debugLog(\"UET mousedown error: \"+t)}},e.isUetTargetLinkOrButton=function(t){try{var a=$(t).attr(\"data-m\");if(!a)return!1;if(a.match(/joinbutton/i).length<1)return!1;var n=a.match(e.GamePassDictionary.xboxGamePass.idRegex);return!(n.length<1)&&n[0]}catch(t){e.debugLog(\"UET isUetTargetLinkOrButton  error: \"+t)}},$(document).on(\"mousedown\",\"div[class*='ProductActionsPanel-module'] a, div[class*='ProductActionsPanel-module'] button, div[class*='PDPActionPanelLayout-module'] a, div[class*='PDPActionPanelLayout-module'] button\",(function(){try{var t=e.isUetTargetLinkOrButton(this);if(!t)return;t=t.toLowerCase(),e.fireUetEvent(\"join_now\",e.GamePassDictionary.gamePassIdToEventLabel[t])}catch(t){e.debugLog(\"UET mousedown error: \"+t)}})),window.addEventListener(\"message\",(function(t){try{if(t.origin&&\"https://www.microsoft.com\"!==t.origin)return;if(t.data&&t.data.message&&t.data.status&&t.data.orderInfo&&t.data.orderInfo.orderState&&\"done\"==t.data.message&&\"success\"==t.data.status&&\"Purchased\"==t.data.orderInfo.orderState){var a=\"\";t.data.orderInfo&&t.data.orderInfo.lineItems.length&&t.data.orderInfo.lineItems[0].productId&&(a=t.data.orderInfo.lineItems[0].productId),\"string\"==typeof a&&(a=a.toLowerCase());var n=e.GamePassDictionary.gamePassIdToEventLabel[a];n&&n.length&&e.fireUetEvent(\"purchase\",n)}}catch(t){e.debugLog(\"Error Tagging UET Purchase event: \"+t)}}),!1)}catch(t){e.debugLog(\"UET setup error: \"+t)}var t,a,n,o,r,i,d,s},t.catCheckAllExecuteOrPush(e.pdpStoreUETMediaPixel))}(window.wdgtagging,window.wdgtagging.util);");