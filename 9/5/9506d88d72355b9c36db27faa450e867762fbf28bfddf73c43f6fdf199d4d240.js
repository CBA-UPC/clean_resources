// For license information, see `https://assets.adobedtm.com/5dfc7d97c6fb/7b9dae61b2a1/b4f987676724/RCb76ae370b1bb4032957902a73cf52d8e-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/5dfc7d97c6fb/7b9dae61b2a1/b4f987676724/RCb76ae370b1bb4032957902a73cf52d8e-source.min.js', "!function(){var e=setInterval((function(){function i(){return void 0!==window.s_c_il&&window.s_c_il.length>a&&void 0!==window.s_c_il[a]&&void 0!==window.s_c_il[a].getMarketingCloudVisitorID&&\"\"!==window.s_c_il[a].getMarketingCloudVisitorID()&&siemens.datalayer.page.fragment_uuid&&siemens.datalayer.page.path}function t(e){$.ajax({url:\"https://api.dc.siemens.com/fluidweb\",contentType:\"application/json\",type:\"POST\",data:JSON.stringify(e)})}function n(e,i,t){return{query:'{trackEvent (userId: \"'+e+'\", itemId: \"'+i+'\", pagePath: \"'+t+'\", eventType: \"pageview\", eventValue: 0.5, sessionId: \"'+e+'\") }'}}var a=2;i()&&(clearInterval(e),setTimeout((function(){t(n(window.s_c_il[a].getMarketingCloudVisitorID(),siemens.datalayer.page.fragment_uuid,siemens.datalayer.page.path))}),1e3))}),250)}();");