"use strict";floor(100*Math.random())&&(window.onerror=;var ApbctXhr=),ApbctAjax=),ApbctRest=);roperty(ApbctRest,"default_route",ctPublicFunctions._rest_url+"cleantalk-antispam/v1/");var apbctLocalStorage={get:set:function(e,t){var o;!(2<arguments.length&&void 0!==arguments[2])||arguments[2]?(o={value:JSON.stringify(t),timestamp:Math.floor((new Date).getTime()/1e3)},localStorage.setItem(e,JSON.stringify(o))):localStorage.setItem(e,t)},isAlive:isSet:function(e){return null!==localStorage.getItem(e)},delete:function(e){localStorage.removeItem(e)},getCleanTalkData:function(){for(var e={},t=0;t<localStorage.length;t++){var o=localStorage.key(t);-1===o.indexOf("ct_")&&-1===o.indexOf("apbct_")||(e[o.toString()]=apbctLocalStorage.get(o))}return e}},apbctSessionStorage={get:set:isSet:delete:getCleanTalkData:;ctMouseReadInterval,ctMouseWriteDataInterval,CTTypoData=),ctDate=new Date,ctTimeMs=(new Date).getTime(),ctMouseEventTimerFlag=!0,ctMouseData=[],ctMouseDataCounter=0,ctCheckedEmails={};function apbct_attach_event_handler(e,t,o){"function"==typeof window.addEventListener?e.addEventListener(t,o):e.attachEvent(t,o)}ar ctFunctionFirstKey=ctFunctionMouseMove=(cronFormsHandler(2e3),ctPublic.data__key_is_ok&&(ctMouseReadInterval=setInterval(150),ctMouseWriteDataInterval=setInterval(1200)),; ctSetHasScrolled(){apbctLocalStorage.isSet("ct_has_scrolled")&&apbctLocalStorage.get("ct_has_scrolled")||(ctSetCookie("ct_has_scrolled","true"),apbctLocalStorage.set("ct_has_scrolled",!0)),"native"===ctPublic.data__cookies_type&&void 0===ctGetCookie("ct_has_scrolled")&&ctSetCookie("ct_has_scrolled","true")}ctFunctionHasInputFocused=function(e){ctSetHasInputFocused(),ctStopFieldsListening("focus",ctFunctionHasInputFocused)},ctFunctionHasKeyUp=function ctSetHasInputFocused(){apbctLocalStorage.isSet("ct_has_input_focused")&&apbctLocalStorage.get("ct_has_input_focused")||apbctLocalStorage.set("ct_has_input_focused",!0),("native"===ctPublic.data__cookies_type&&void 0===ctGetCookie("ct_has_input_focused")||"alternative"===ctPublic.data__cookies_type||"none"===ctPublic.data__cookies_type&&(void 0!==ctPublic.force_alt_cookies||void 0!==ctPublic.force_alt_cookies&&ctPublic.force_alt_cookies))&&ctSetCookie("ct_has_input_focused","true")}(apbct_attach_event_handler(document,"mousemove",ctFunctionMouseMove),apbct_attach_event_handler(document,"mousedown",ctFunctionFirstKey),apbct_attach_event_handler(document,"keydown",ctFunctionFirstKey),apbct_attach_event_handler(document,"scroll",ctSetHasScrolled)),ctPublic.data__key_is_ok&&("loading"!==document.readyState?apbct_ready():apbct_attach_event_handler(document,"DOMContentLoaded",apbct_ready),apbctLocalStorage.set("ct_checkjs",ctPublic.ct_checkjs_key,!0));var defaultFetch=window.fetch,defaultSend=XMLHttpRequest.prototype.send;ing"!==document.readyState?checkFormsExistForCatching():apbct_attach_event_handler(document,"DOMContentLoaded",checkFormsExistForCatching);var cleantalkModal={loaded:!1,loading:!1,opened:!1,opening:!1,load:open:close:;stener("click",,document.addEventListener("cleantalkModalContentLoaded",,window.onload=document.addEventListener("DOMContentLoaded",;