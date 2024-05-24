/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={7472:17:4969:1828:2951:9739:5763:3432:4677:9565:7007:7381:9137:5943:5170:3999:407:5534:1311:9164:9755:1065:function(n){n.exports={DEFAULT_INTERVAL:20}},6214:2135:1417:6574:2647:8791:function(){},8133:6450:1224:1477:6678:2972:2365:652:2380:7246:9701:5928:9830:8576:626:2809:8741:5615:9422:8296:6457:9667:61:584:3938:2230:336:6556:7767:1071:9753:3352:7441:4545:1148:5774:7528:1173:818:341:349:4534:6913:4160:1929:7829:4146:8056:3075:3997:3813:5808:1643:4436:7715:2024:3778:749:5282:8536:2362:8897:721:8961:3485:2017:768:8219:7771:4310:3142:9505:9715:9442:9897:9070:3959:863:5203:8673:70:7266:2407:3059:7639:7270:7135:542:8207:7455:6028:8475:395:2169:1284:9243:148:2036:1067:8431:9339:3509:7058:1972:1129:3497:4192:function(n,t,e){n.exports=e(3432)},9168:4726:2530:6425:8065:8120:1480:3587:9140:142:2030:3784:182:9557:9495:5581:8155:9430:1915:2042:9181:7240:362:3229:5342:function(n,t,e){n.exports=function(n){n.registerApiModule("behavior",e(3229))}},2583:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(3557)),n.registerAudienceMatcher("behavior",e(6023))}},6023:3557:1860:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(2064))}},2064:9030:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(5546)),n.registerAudienceMatcher("first_session",e(8920))}},8920:5546:2902:3005:6341:8142:2124:3881:2552:function(n){n.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(n){return n.getId()}]}},8995:function(n){n.exports={provides:"browserVersion",getter:["sources/browser_id",function(n){return n.getVersion()}]}},2575:933:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8912)),n.registerAudienceMatcher("campaign",e(2786))}},2786:8912:1866:1955:457:1119:9503:function(n){n.exports={fieldsNeeded:["device"],match:function(n,t){return n.device===t.value}}},7470:1267:9863:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(2995)),n.registerAudienceMatcher("device_type",e(7612))}},7612:2995:2606:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(9531)),n.registerAudienceMatcher("query",e(5449))}},5449:9531:function(n,t,e){var i=e(8431);n.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},2088:8738:8338:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8453)),n.registerAudienceMatcher("referrer",e(6373))}},6373:8453:5008:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(946)),n.registerAudienceMatcher("source_type",e(4489))}},4489:946:1230:2908:2007:4157:2710:881:723:123:1663:7630:5367:8988:9152:8248:function(){}},__webpack_module_cache__={};_webpack_require__.amdO={},__webpack_require__.g=),__webpack_require__.nmd=var __webpack_exports__={};!function(){try{!function(){var n=window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(9152).initialize();var t=__webpack_require__(4545);t.time("gtagReady");var e=__webpack_require__(3497),i=__webpack_require__(2230);__webpack_require__(5581);var r=i.get("stores/directive");if(!__webpack_require__(3784).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(3999),u=__webpack_require__(336),c=__webpack_require__(1480),s={"accountId": "19205964212", "namespace": "19440972562", "revision": "3960", "anonymizeIP": true, "enableForceParameters": true, "experimental": {"trimPages": true}, "projectId": "19440972562", "layers": [{"changes": null, "id": "26602990763", "name": "[SMA] Paid search NY AB test", "commitId": "27169720149", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"20003736853": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": ["and", "26585750445"], "audienceName": "[SMA] Paid search NY test", "changes": null, "id": "26725080177", "integrationSettings": null, "variations": [{"id": "26696430283", "name": "Control", "actions": []}, {"id": "26723710136", "name": "Variant B", "actions": [{"viewId": "26710560081", "changes": [{"id": "5f36e42cb5e04a3897219fa3fc364efe", "type": "redirect", "dependencies": [], "dest": "https://subscribenow.economist.com/new-year", "preserveParameters": true, "allowAdditionalRedirect": true}]}]}], "weightDistributions": [{"entityId": "26723710136", "endOfRange": 10000}], "name": "[SMA] Paid search NY AB test", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["26710560081"], "weightDistributions": null, "decisionMetadata": null}, {"changes": null, "id": "27198410008", "name": "[SUBE] New Onboarding journey variant", "commitId": "27192970555", "groupId": null, "holdback": 0, "activation": {}, "integrationSettings": {"20003736853": {}}, "integrationStringVersion": 2, "experiments": [{"audienceIds": null, "audienceName": "Everyone else", "changes": null, "id": "27185320156", "integrationSettings": null, "variations": [{"id": "27144880187", "name": " Control Group (original core journey)", "actions": [{"viewId": "26294901519", "changes": []}]}, {"id": "27173790161", "name": "Variant (new split onboarding journey)", "actions": [{"viewId": "26294901519", "changes": [{"id": "987bc230565f434bb9c566a8d22cb7c2", "type": "redirect", "dependencies": [], "dest": "https://www.economist.com/get-started/explore", "preserveParameters": true, "allowAdditionalRedirect": false}]}]}], "weightDistributions": [{"entityId": "27144880187", "endOfRange": 5000}, {"entityId": "27173790161", "endOfRange": 10000}], "name": "[SUBE] New Onboarding journey variant", "bucketingStrategy": null}], "policy": "single_experiment", "viewIds": ["26294901519"], "weightDistributions": null, "decisionMetadata": null}], "groups": [], "audiences": [{"id": "26585750445", "name": "[SMA] Paid search NY test", "conditions": ["and", ["or", ["or", {"match": "exact", "name": "utm_medium", "type": "query", "value": "cpc.adword.pd"}, {"match": "exact", "name": "utm_medium", "type": "query", "value": "cpc.bing.pd"}]], ["or", ["or", {"match": "substring", "name": "utm_content", "type": "query", "value": "optimizely"}]]]}], "listTargetingKeys": [], "visitorAttributes": [], "visitorIdLocator": null, "integrationSettings": [], "views": [{"id": "25987710087", "category": "other", "apiName": "19440972562_hybrid_page_test_preprod", "name": "Hybrid page test preprod", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://subscribenow.economist.com/charts"}, {"match": "simple", "type": "url", "value": "https://subscribenow.economist.com/core-espresso-d-a-20"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26294901519", "category": "other", "apiName": "19440972562_sube_onboarding__newsletters", "name": "[SUBE] Onboarding - Newsletters", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.economist.com/get-started/newsletters"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26453040556", "category": "other", "apiName": "19440972562_sube_onboarding__explore", "name": "[SUBE] Onboarding - Explore", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://www.economist.com/get-started/explore"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}, {"id": "26710560081", "category": "other", "apiName": "19440972562_url_targeting_for_sma_paid_search_NY", "name": "URL Targeting for [SMA] Paid search NY AB test", "staticConditions": ["and", ["or", {"match": "simple", "type": "url", "value": "https://subscribenow.economist.com/"}, {"match": "simple", "type": "url", "value": "https://subscribenow.economist.com/default/"}]], "deactivationEnabled": false, "undoOnDeactivation": false, "tags": []}], "events": [{"id": "19823943899", "viewId": null, "name": "Subscribed: Bundle (Annual)", "category": "other", "apiName": "subscribed-bundle-annual", "eventType": "custom", "eventFilter": null}, {"id": "19848751331", "viewId": null, "name": "Checkout Clicked", "category": "other", "apiName": "checkout", "eventType": "custom", "eventFilter": null}, {"id": "19860332213", "viewId": null, "name": "Subscribed: Digital (Quarterly)", "category": "other", "apiName": "subscribed-digital-quarterly", "eventType": "custom", "eventFilter": null}, {"id": "19893950506", "viewId": null, "name": "Subscribed: Bundle (Quarterly)", "category": "other", "apiName": "subscribed-bundle-quarterly", "eventType": "custom", "eventFilter": null}, {"id": "19904300070", "viewId": null, "name": "Subscribed: Digital (Annual)", "category": "other", "apiName": "subscribed-digital-annual", "eventType": "custom", "eventFilter": null}, {"id": "20248781796", "viewId": null, "name": "[CONV] Print Subscription", "category": "other", "apiName": "cv_print_subscription", "eventType": "custom", "eventFilter": null}, {"id": "20254202148", "viewId": null, "name": "[CONV] Digital Subscription", "category": "other", "apiName": "cv_digital_subscription", "eventType": "custom", "eventFilter": null}, {"id": "20271411934", "viewId": null, "name": "[CONV] Payment details selection", "category": "other", "apiName": "cv_payment_selection", "eventType": "custom", "eventFilter": null}, {"id": "20297086386", "viewId": null, "name": "Order complete", "category": "other", "apiName": "order-complete", "eventType": "custom", "eventFilter": null}, {"id": "20326345387", "viewId": null, "name": "Article Newsletter Promo in Viewport", "category": "other", "apiName": "articleNewsletterPromoInViewport", "eventType": "custom", "eventFilter": null}, {"id": "20346935403", "viewId": null, "name": "Successful article newsletter sign up", "category": "other", "apiName": "newsletterSignUpSuccess", "eventType": "custom", "eventFilter": null}, {"id": "20742681179", "viewId": null, "name": "Onboarding: newsletters signup", "category": "other", "apiName": "onboarding-newsletter-subscribe", "eventType": "custom", "eventFilter": null}, {"id": "25974680295", "viewId": "25987710087", "name": "Subscribe button click both pages", "category": "other", "apiName": "19440972562_subscribe_button_click_both_pages", "eventType": "click", "eventFilter": {"filterType": "target_selector", "selector": ".subscribe-button"}}], "dimensions": [{"id": "20100260801", "name": "User Type", "apiName": "userType", "segmentId": null}, {"id": "20246462000", "name": "[CONV] Payment method", "apiName": "payment_method", "segmentId": null}, {"id": "20254400078", "name": "[CONV] Subscription Purchase Type", "apiName": "subscription_purchase_type", "segmentId": null}, {"id": "20273632152", "name": "[CONV] Subscription selection on splash", "apiName": "subscription_selection_splash", "segmentId": null}, {"id": "20297182604", "name": "Access Type", "apiName": "accessType", "segmentId": null}, {"id": "23762741562", "name": "Page Type", "apiName": "pageType", "segmentId": null}], "projectJS": function(){window.springBoard = window.springBoard || {};

window.springBoard.urlParams;

window.springBoard.revision = 4.0;

/**
 * Function to create browser cookies
 * @param  {string}     name    Name of the cookie
 * @param  {string}     value   Value fo the cookie
 * @param  {integer}    days    Length of cookie in days. Leave blank to never expire
 * @return {null}
 */
window.springBoard.createCookie = function(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else var expires = "";
	var cDomain = typeof window.springBoard.cookieDomain !== 'undefined' ? window.springBoard.cookieDomain : (document.location.host.indexOf("www.") == 0) ? document.location.host.substr(3, document.location.host.length) : document.location.host;
	document.cookie = escape(name) + "=" + escape(value) + expires + ";domain=" + cDomain + ";path=/" + (document.location.protocol == "https:" ? "; secure" : "");

	return null;
}

/**
 * Function to read values of browser cookies
 * @param  {string}     name    Name of cookie to read
 * @return {string|null}        Value of cookie. Returns null if cookie doesn't exist
 */
window.springBoard.readCookie = function(name) {
	var nameEQ = escape(name) + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
	}
	return null;
}

/**
 * Function to delete a browser cookie
 * @param  {string}     name    Name of cookie to delete
 * @return {null}
 */
window.springBoard.eraseCookie = function(name) {
	window.springBoard.createCookie(name, "", -1);

	return null;
}

window.optimizely = window.optimizely || [];

// Clicks on Paypal or Credit card
window.addEventListener('click', function(e){
    if(e.target.closest('.ds-form-radio-button')){
        window['optimizely'].push({
            type: 'event',
            eventName: 'cv_payment_selection'
        });
    }
})

// Payment method
var cvCheckPaymentOpts = setInterval(function(){
    var cvPayOpts = document.querySelectorAll('.PaymentSelectionOption');

    if(cvPayOpts.length > 1){
        clearInterval(cvCheckPaymentOpts);
        cvPayOpts[0].addEventListener('click', function(){
            document.cookie = "cv-pay-opt=paypal;domain=economist.com";
        });

        cvPayOpts[1].addEventListener('click', 
    }
})

// Subscription selection on splash
if(window.location.host === "subscribenow.economist.com"){
    var cvCheckSubs = setInterval(function(){
        var cvDigSub = document.querySelector('#offer-group-button-digital'),
            cvCombinedSub = document.querySelector('#offer-group-button-bundle');

        if(cvDigSub && cvCombinedSub){
            clearInterval(cvCheckSubs);

            cvDigSub.addEventListener('mousedown', function(){
                if(this.closest('.selected-group')){
                    if(document.querySelectorAll('.offer-selection input')[0].checked){
                        document.cookie = "cv-purchase=Digital Quarterly;domain=economist.com";

                        window.optimizely.push({
                            "type": "user",
                            "attributes": {
                                "subscription_selection_splash": "Digital Quarterly"
                            }
                        });
                    }
                    if(document.querySelectorAll('.offer-selection input')[1].checked){
                        document.cookie = "cv-purchase=Digital Annual;domain=economist.com";

                        window.optimizely.push({
                            "type": "user",
                            "attributes": {
                                "subscription_selection_splash": "Digitial Annual"
                            }
                        });
                    }
                }
            })

            cvCombinedSub.addEventListener('mousedown', function(){
                if(this.closest('.selected-group')){
                    if(document.querySelectorAll('.offer-selection input')[2].checked){
                        document.cookie = "cv-purchase=Print Quarterly;domain=economist.com";

                        window.optimizely.push({
                            "type": "user",
                            "attributes": {
                                "subscription_selection_splash": "Print Quarterly"
                            }
                        });
                    }
                    if(document.querySelectorAll('.offer-selection input')[3].checked){
                        document.cookie = "cv-purchase=Print Annual;domain=economist.com";

                        window.optimizely.push({
                            "type": "user",
                            "attributes": {
                                "subscription_selection_splash": "Print Annual"
                            }
                        });
                    }
                }
            })
        }
    })
}

// Print/Digital confirmation page 
if(window.location.href.indexOf('economist.com/checkout/confirmation') > -1){
    var cvWaitForTable = setInterval(function(){
        var cvTableVals = document.querySelectorAll('.OrderReferenceTable td.value'),
            cvTerm,
            cvSubType;
    
        if(cvTableVals.length > 5){
            clearInterval(cvWaitForTable);
    
            for(var i = 0; i < cvTableVals.length; i++){
                if(cvTableVals[i].innerHTML === 'Digital'){
                    cvSubType = 'Digital';
                }
                if(cvTableVals[i].innerHTML.indexOf('Print') > -1){
                    cvSubType = 'Print';
                }

                if(cvTableVals[i].innerText === "12 weeks"){
                    cvTerm = 'Quarterly'
                }

                if(cvTableVals[i].innerText === "1 year"){
                    cvTerm = 'Annual';
                }

                if(cvTableVals[i].innerText === "2 year"){
                    cvTerm = '2 Years';
                }

                if(cvTableVals[i].innerText === "3 year"){
                    cvTerm = '3 Years';
                }
            }

            if(cvSubType === 'Print'){
                window['optimizely'].push({
                    type: 'event',
                    eventName: 'cv_print_subscription'
                });

                window.optimizely.push({
                    "type": "user",
                    "attributes": {
                        "subscription_purchase_type": cvSubType + ' ' + cvTerm
                    }
                });  
            }

            if(cvSubType === 'Digital'){
                window['optimizely'].push({
                    type: 'event',
                    eventName: 'cv_digital_subscription'
                });

                window.optimizely.push({
                    "type": "user",
                    "attributes": {
                        "subscription_purchase_type": cvSubType + ' ' + cvTerm
                    }
                }); 
            }

            cvCheckPayOpt();
        }
    }, 200);
}

// Digital page only
if(window.location.href.indexOf('economist.com/complete/') > -1){
    window['optimizely'].push({
        type: 'event',
        eventName: 'cv_digital_subscription'
    });
    
    cvCheckPayOpt();
    cvCheckSub();
}

function cvCheckPayOpt(){
    var cvPayOpt = window.springBoard.readCookie('cv-pay-opt');

    if(cvPayOpt){
        window.optimizely.push({
            "type": "user",
            "attributes": {
                "payment_method": cvPayOpt
            }
        });
    }
}

// New Subscription purchase type
function cvCheckSub(){
    var cvBasketItems = document.querySelectorAll('td.basket-items-table-column');

    var cvWaitForEls = setInterval(function(){
        if(cvBasketItems.length > 5){
            clearInterval(cvWaitForEls);
            for(var i = 0; i < cvBasketItems.length; i++){
                if(cvBasketItems[i].innerHTML.indexOf('12 weeks') > -1){
                    window.optimizely.push({
                        "type": "user",
                        "attributes": {
                            "subscription_purchase_type": "Digital Quarterly"
                        }
                    });  
                    break;
                } else if (cvBasketItems[i].innerHTML.indexOf('1 year') > -1){
                    window.optimizely.push({
                        "type": "user",
                        "attributes": {
                            "subscription_purchase_type": "Digital Annual"
                        }
                    });  
                    break;
                }
            }
        }
    }, 200);
}
}, "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('20003736853', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['20003736853'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
       })(extension);
        /*
 * Javascript written in this tab will run every time a user is
 * assigned to an experiment and variation, but before any experiment
 * code runs. This hook is useful for tracking which variations a
 * visitor has been assigned to. Click the help icon for more information.
 */
try {
  window.tedl = window.tedl || {};
	window.tedl.events = window.tedl.events || [];
  
  var optiEx = optimizely.get('state').getExperimentStates();
  
  window.tedl.events.push({"name":"optimizely.experiment",
             "experiment":{
               "name":optiEx[experimentId].experimentName,
               "variation":optiEx[experimentId].variation.name
             }
            });
}catch(e){
  window.tedl.events.push({"name":"optimizely.experiment",
             "experiment":{
               "name":"error",
               "variation":e.message + ":" + (typeof optiEx == "undefined")?"optiEx missing":optiEx.toString()
             }
            });
}
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}
], "interestGroups": [], "tagGroups": []},f=__webpack_require__(8133),l="initializeOptimizelyPreview";if(f.initGlobalStore(s),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return s.projectId})),a.registerFunction("getAccountId",(function(){return s.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(8988).setupPreviewGlobal(),__webpack_require__(8988).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return s.projectId})),c.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/19440972562.js"));else if(r.shouldBootstrapDataForPreview()){a.registerFunction(l,(function(t){n(),a.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();v=r.getProjectToken(),h=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",v).replace("__PROJECT_ID__",h).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),c.addScriptSync(o),__webpack_require__(8988).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFunction()})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&n();var v,h,p;t.timeEnd("block");var g=t.now();t.setMark("optimizelyFinished",startTime=g,duration=g)}}()}catch(n){try{__webpack_require__(1915).handleError(n)}catch(t){console.log(t)}}}()})();