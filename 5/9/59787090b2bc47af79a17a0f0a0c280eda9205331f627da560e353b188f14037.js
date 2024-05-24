/* Copyright 2015-2023 Quantum Metric, Inc. All rights reserved. For US patents see https://www.quantummetric.com/legal/patents/. For EULA see https://www.quantummetric.com/legal/eula 1.34.3 8baad114106ce1e8a980995576c2058933768646 */
/* Copyright Pako by Vitaly Puzrin and Andrei Tuputcyn https://github.com/nodeca/pako/blob/master/LICENSE */
(();
window.QuantumMetricInstrumentationStart({"dataScrubBlackList":[{"pred":{"contents":[{"facet":"url","operator":"contains","value":"care.siriusxm.com/subscribe/checkout/purchase/streaming/self-pay/organic/payment-int"},{"facet":"url","operator":"contains","value":"care.siriusxm.com/subscribe/checkout/purchase/streaming/self-pay/organic/payment-lite"},{"facet":"url","operator":"contains","value":"care.siriusxm.com/subscribe/checkout/purchase/streaming/self-pay/organic/credentials"},{"facet":"url","operator":"contains","value":"care.siriusxm.com/subscribe/checkout/purchase/streaming/self-pay/organic/credentials-int"},{"facet":"url","operator":"contains","value":"care.siriusxm.com/subscribe/checkout/purchase/streaming/self-pay/organic?intcmp"},{"facet":"url","operator":"contains","value":"care.siriusxm.com/subscribe/checkout/purchase/streaming/self-pay/organic?promoCode"}],"operator":"or"},"rules":[{"pred":{"operator":"default"},"value":[".sensitive","input[autocomplete=\"cc-number\"]","input[autocomplete=\"cc-csc\"]","input[x-autocompletetype=\"cc-number\"]","input[x-autocompletetype=\"cc-csc\"]","[data-qm-block]","header p.header",".account-number",".lpc_message__text"]}]},{"pred":{"facet":"url","operator":"contains","value":"blog.siriusxm.com"},"rules":[{"pred":{"operator":"default"},"value":[".sensitive","input[autocomplete=\"cc-number\"]","input[autocomplete=\"cc-csc\"]","input[x-autocompletetype=\"cc-number\"]","input[x-autocompletetype=\"cc-csc\"]","[data-qm-block]","header p.header",".account-number",".lpc_message__text"]}]},{"pred":{"contents":[{"facet":"url","operator":"regex","value":"siriusxm\\.com\\/?(\\?.+)?$"},{"facet":"url","operator":"regex","value":"www\\.siriusxm\\.com/(channels|music|plans|talk|ways-to-listen|offers|sports|comedy)"}],"operator":"or"},"rules":[{"pred":{"operator":"default"},"value":[".sensitive","input[autocomplete=\"cc-number\"]","input[autocomplete=\"cc-csc\"]","input[x-autocompletetype=\"cc-number\"]","input[x-autocompletetype=\"cc-csc\"]","[data-qm-block]","header p.header",".account-number",".lpc_message__text"]},{"pred":{"operator":"default"},"value":[".sensitive","input[autocomplete=\"cc-number\"]","input[autocomplete=\"cc-csc\"]","input[x-autocompletetype=\"cc-number\"]","input[x-autocompletetype=\"cc-csc\"]","[data-qm-block]",".account-panel-non-pii"]}]},{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":["*",".sensitive","input[autocomplete=\"cc-number\"]","input[autocomplete=\"cc-csc\"]","input[x-autocompletetype=\"cc-number\"]","input[x-autocompletetype=\"cc-csc\"]","[data-qm-block]"]}]}],"dataScrubWhiteList":[{"pred":{"facet":"url","operator":"contains","value":"/thanks"},"rules":[{"pred":{"operator":"default"},"value":["[data-qm-allow]","[at-action-key=\"confirmation\"]",".listen-now-component-subhead","[data-test=\"StartListeningButton\"]"]}]},{"pred":{"facet":"url","operator":"contains","value":"offers"},"rules":[{"pred":{"operator":"default"},"value":[".dual-offer",".small-12","h2","h2 > span","large-copy","[onetrust-banner-sdk]"]}]},{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":["[data-qm-allow]",".icon sxm-nav-logo-desktop",".package--cta button > a",".content-showcase > a","h1","h1 > span","[primary-package-card]","[onetrust-banner-sdk]","[ppc--details]","[ppc-content]"]}]}],"eventStoreURL":[{"pred":{"operator":"default"},"value":"https://siriusxm-app.quantummetric.com/q3"}],"horizonEnabled":[{"pred":{"operator":"default"},"value":true}],"logResourcePercent":[{"pred":{"operator":"default"},"value":5}],"maskInputs":[{"pred":{"operator":"default"},"value":true}],"reportURL":[{"pred":{"operator":"default"},"value":"https://ingest.quantummetric.com/siriusxm"}],"spinnerMinimumThreshold":[{"pred":{"operator":"default"},"value":5}],"transformAttributesForNodesList":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"attr":"href","re":{"f":"","p":"^.+$"},"rep":"","sel":"a"}]}]}],"webComponentsSupport":[{"pred":{"operator":"default"},"value":true}],"xhrHookWhiteListDetails":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"f":"i","p":"www.siriusxm.com"}]}]}],"xhrPerformanceWhitelistDetails":[{"pred":{"operator":"default"},"rules":[{"pred":{"operator":"default"},"value":[{"f":"i","p":"www.siriusxm.com"}]}]}],"eventDefinitions":{"events":[{"f":0,"i":11,"evalAlways":false,"m":0,"s":1,"u":"\\/checkout\\/","v":{"t":"E","v":[{"t":"SelectorPresent","v":["[data-e2e=\"PrimaryPackageDetailsList\"]"]},{"t":"V","v":[""]}]},"x":"QCC","sessionInfoReq":false,"excludeBlank":false},{"f":0,"i":12,"evalAlways":false,"m":1,"s":1,"u":".*","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["a.package--cta,.package--cta > a,a.package--cta *,.package--cta > a *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try { return QuantumMetricAPI.lastClicked ? QuantumMetricAPI.lastClicked.innerText : ""; } catch (e) {}}}]}]},"x":"QCE","sessionInfoReq":false,"excludeBlank":true},{"f":0,"i":13,"evalAlways":false,"m":0,"s":1,"u":"\\/checkout\\/","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"SelectorText","v":["h1"]},{"t":"Contains","v":["Create your account"]}]},{"t":"V","v":[""]}]},"x":"QPC","sessionInfoReq":false,"excludeBlank":false},{"f":0,"i":14,"evalAlways":false,"m":0,"s":1,"u":"\\/checkout\\/","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"SelectorText","v":["h1"]},{"t":"Contains","v":["Set up your payment and complete your account information"]}]},{"t":"V","v":[""]}]},"x":"QPC","sessionInfoReq":false,"excludeBlank":false},{"sessionInfoReq":true,"evalAlways":true,"excludeBlank":true,"i":15,"f":0,"m":1,"s":2,"u":".*","x":"QCC","v":{"t":"E","v":[{"t":"SelectorPresent","v":["sxm-ui-form-field-error"]},{"t":"SelectorText","v":["sxm-ui-form-field-error"]}]}},{"f":0,"i":16,"evalAlways":false,"m":1,"s":1,"u":"\\/checkout\\/","v":{"t":"E","v":[{"t":"ValueClause","v":[{"t":"ElementClickedNode","v":[]},{"t":"Matches","v":["[data-test=\"submit-payment-form\"],[data-test=\"submit-payment-form\"] *"]}]},{"t":"JSValueEx","v":[{"fn":function () {try {
    return ((!!QuantumMetricAPI.getPrevEventData(15) && parseInt(QuantumMetricAPI.getPrevEventData(15).value)) || 0) + 1;
} catch (e) {}}}]}]},"x":"QCE","sessionInfoReq":false,"excludeBlank":true},{"f":0,"i":17,"evalAlways":false,"m":0,"s":0,"u":"\\/subscribe\\/checkout\\/","v":{"t":"HE","v":[]},"x":"QHE","sessionInfoReq":true,"excludeBlank":false},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":true,"i":21,"f":64,"m":0,"s":1,"u":"\\/purchase","x":"QCC","v":{"t":"E","v":[{"t":"SelectorPresent","v":["[data-test=\"sxmUIPlanRecapCard\"]"]},{"t":"CV","v":[{"t":"JSValueEx","v":[{"fn":function () {try {
  
  return (document.querySelector('[data-test="sxmUIPlanRecapCard"]').innerText.split('$')[1].replace(/\D/g, "") / 100).toFixed(2);

}
catch (e) {}}}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":false,"i":22,"f":0,"m":0,"s":1,"u":".*","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {return false;}}]},{"t":"JSValue","v":[{"fn":]}]}},{"f":0,"i":23,"evalAlways":false,"m":0,"s":1,"u":".*","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  return (!!window._satellite.getVar('core:cc:globalPageName'));
}

catch (e) {}}}]},{"t":"JSValue","v":[{"fn":function () {try {
  return (window._satellite.getVar('core:cc:globalPageName'));
}

catch (e) {}}}]}]},"x":"QJS","sessionInfoReq":false,"excludeBlank":true},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":true,"i":25,"f":0,"m":0,"s":1,"u":"/subscribe/checkout","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  const globalPageName = window._satellite.getVar('core:cc:globalPageName');
  const currentURL = window.location.href;

  return (globalPageName === 'care:checkout:offerpresentmentstep' && currentURL.includes('streaming'));
} catch (e) {
  return false;
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
  return (window._satellite.getVar('core:cc:globalPageName'));
}

catch (e) {}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":true,"i":26,"f":0,"m":0,"s":1,"u":"/subscribe/checkout","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  const globalPageName = window._satellite.getVar('core:cc:globalPageName');
  const currentURL = window.location.href;

  return (globalPageName === 'care:checkout:accountlookupinterstitialstep' && currentURL.includes('streaming'));
} catch (e) {
  return false;
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
  return (window._satellite.getVar('core:cc:globalPageName'));
}

catch (e) {}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":true,"i":27,"f":0,"m":0,"s":1,"u":"/subscribe/checkout","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  const globalPageName = window._satellite.getVar('core:cc:globalPageName');
  const currentURL = window.location.href;

  return (globalPageName === 'care:checkout:accountlookupvar2' && currentURL.includes('streaming'));
} catch (e) {
  return false;
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
  return (window._satellite.getVar('core:cc:globalPageName'));
}

catch (e) {}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":true,"i":28,"f":0,"m":0,"s":1,"u":"/subscribe/checkout","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  const globalPageName = window._satellite.getVar('core:cc:globalPageName');
  const currentURL = window.location.href;

  return (globalPageName === 'care:checkout:paymentinterstitialstep' && currentURL.includes('streaming'));
} catch (e) {
  return false;
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
  return (window._satellite.getVar('core:cc:globalPageName'));
}

catch (e) {}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":true,"i":29,"f":0,"m":0,"s":1,"u":"/subscribe/checkout","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  const globalPageName = window._satellite.getVar('core:cc:globalPageName');
  const currentURL = window.location.href;

  return (globalPageName === 'care:checkout:paymentinfo' && currentURL.includes('streaming'));
} catch (e) {
  return false;
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
  return (window._satellite.getVar('core:cc:globalPageName'));
}

catch (e) {}}}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":true,"i":30,"f":0,"m":0,"s":1,"u":"/subscribe/checkout","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  const globalPageName = window._satellite.getVar('core:cc:globalPageName');
  const currentURL = window.location.href;

  return (globalPageName === 'care:checkout:review' && currentURL.includes('streaming'));
} catch (e) {
  return false;
}}}]},{"t":"JSValue","v":[{"fn":function () {try {
  return (window._satellite.getVar('core:cc:globalPageName'));
}

catch (e) {}}}]}]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":true,"i":31,"f":1,"m":0,"s":2,"u":"/subscribe/checkout","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  const globalPageName = window._satellite.getVar('core:cc:globalPageName');
  const currentURL = window.location.href;

  return (globalPageName === 'care:authenticate:confirmation' || globalPageName === 'care:checkout:confirmation' && currentURL.includes('streaming'));
} catch (e) {
  return false;
}}}]},{"t":"CV","v":[{"t":"JSValue","v":[{"fn":function () {try {
  if (!!window.QuantumMetricAPI &&
  !!window.QuantumMetricAPI.getCartValue) {
  return (parseInt(window.QuantumMetricAPI.getCartValue()) / 100).toFixed(2);
  }
} catch (e) {}}}]}]}]}},{"sessionInfoReq":false,"evalAlways":false,"excludeBlank":true,"i":32,"f":0,"m":0,"s":1,"u":"subscribe/checkout/flepz","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  const globalPageName = window._satellite.getVar('core:cc:globalPageName');
  const currentURL = window.location.href;

  return (globalPageName === 'care:checkout:offerpresentmentstep' && currentURL.includes('satellite'));
} catch (e) {
  return false;
}}}]},{"t":"JSValue","v":[{"fn":]}]}},{"sessionInfoReq":true,"evalAlways":false,"excludeBlank":true,"i":33,"f":0,"m":0,"s":2,"u":"/subscribe/checkout/","x":"QJS","v":{"t":"E","v":[{"t":"JSValue","v":[{"fn":function () {try {
  return !!window.location.href.split('programcode=')[1];
}

catch (e) {}}}]},{"t":"JSValue","v":[{"fn":function () {try {
  var code = window.location.href.split('programcode=')[1];
  if (code.includes('&')) {
     return(code.split('&')[0]);
  }
else {
return code;
}
}

catch (e) {}}}]}]}}]},"publicKeyString":"WyJ0MW8rMTFsK0RheTBpdWVRQWxQVnZob1cvV0NLRmtyR1dGd0sxQUN2Y3VXL25ESktkYVpIWFg1R0R6TjlnSndQQ043YnlnaVU0a1o5L2RUdFlBVW9oSStZK3lYUlozY0lTZEc4SHYvTWtrNVB3Tm9kZm5wdzdxRklzYStCREgvOFBRUlg2T3dzRE5DTTExd0llTkVuQXcrSjhGTjBKdlI1akltNXBpOExITSs3eGZ2VjcwMDhacU9nREJSeHdENTdWVTZJMHpvU3dNWnhEc3YvWk0xUkEzSllrTElXZHFGRWdpMFhmV1ljaHY4dXBndDRHQ2ZQcmwrQUlqd1RSRVFaNEl2bWF2eHBBNS83K1dDZDB0UE93dHR0b1M5V2RDNVlRL21Qb0NMdmJyOVo4UitPcFk2Qjhjc0s5bGpQclpDdWVCdmR3VzNnL0hiaUJoMWloYlp2R3c9PSIsIkFRQUIiXQ==","ipEncryption":"ENC_IP"}); !function(){var e,n,t;e=25,n=0,t=setInterval((function(){n++,window.adobe&&window.adobe.target&&window.adobe.target.event&&window.adobe.target.event.REQUEST_SUCCEEDED&&window.QuantumMetricAPI?(document.addEventListener(window.adobe.target.event.REQUEST_SUCCEEDED,(function(e){try{var n=e.detail.responseTokens||[],t=n.length;if(n)for(var a=0;a<t;a++)window.QuantumMetricAPI.sendEvent(22,0,n[a]["experience.name"]+": "+n[a]["activity.name"])}catch(e){console.log("ERRR: "+e)}})),clearInterval(t)):(n===e||n>e)&&clearInterval(t)}),200)}();;
((); 