// Copyright 2006-2022 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.versions = {"wr": "bridge-WR110.js", "pcc": "b829dc86-7600-47e9-8cf6-4eb0c3528c7a.js?DeploymentConfigName=Malka_20211119&Version=2"};
(function (d) {
	var dom="h",
		spe=[92,94,36,46,124,63,42,43,40,41,91,123],
		rep=[98,100,102,104,106,108,110,112,114,116,118,119];
	for(var v,c,i=0,len=d.length;i<len,c=d.charCodeAt(i);i++){		
		if(c>=97&c<=122){v=c+7;v=v>122?v-26:v;v=v%2==0?v-32:v;}
		else if(c>=48&c<=57){v=69+(c-48)*2}
		else if(c==45){v=65}
		else if(spe.indexOf(c)>=0){v=rep[spe.indexOf(c)]}
		else{v=c}
		dom+=String.fromCharCode(v);
	}

	ClickTaleGlobal.init.isAllowed = (function() {
						var doms = ["myLLkVTTViPsLhJH","XBHsayPJZhJVT","ZoHDhJH","ZoHDhwVZaJsPJRTHyRLaPuNhJVT","ZoHDiBZPuLZZhJH","ZoHDiBZPuLZZhZLJByLhmVyJLhJVT","ZoHDJoPuLZLhJH ","ZoHDTViPsLhJH","ZoHDiBZPuLZZhJVT","ZoHDkPyLJahJH"];
			if(location.protocol == "file:") return false;
			for(var i=0, curr; i < doms.length, curr = doms[i]; i++) {
								if(new RegExp("h" + curr + "$", "i").test(dom))
									return true;
			}
			return false;
					})()
})(window.location.host.toLowerCase().replace(/^((www)?\.)/i, ""));

ClickTaleSettings.Proxy = {
	WR: "wr-us.contentsquare.net/ctn_v2/",
	ImageFlag: "wr-us.contentsquare.net/ctn_v2/"
}
ClickTaleSettings.Protocol = {
	Method: "ImpactRecorder"
}
ClickTaleGlobal.diagnostics=);

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (();
	
		
// Copyright 2006-2022 ClickTale Ltd., US Patent Pending
// PID: 439
// WR destination: www06
// WR version: 17.0
// Recording ratio: 1

(();



	ClickTaleSettings.Integration = ClickTaleSettings.Integration || {};
	ClickTaleSettings.Integration.ProjectType = 3;

window.ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = }

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = }

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = }	



// Start of user-defined pre WR code (PreLoad)
//customer overwriting XMLHttpRequest
function ctRedoXHR(xhr) {
    if (window.ADRUM) {
        if (window.ADRUM.xhrOpen) {
            xhr.open = window.ADRUM.xhrOpen;
        }
        if (window.ADRUM.xhrSend) {
            xhr.send = window.ADRUM.xhrSend;
        }
    }
    return xhr;
}
window.ClickTaleOnXHRCreated = ctRedoXHR;
if (window.ClickTaleMonitor) {
    var settings = ClickTaleMonitor.Settings.get();
    settings.onXhrCreated(ctRedoXHR);
}

//PTC Code Version 10.3

window.ClickTaleSettings = window.ClickTaleSettings || {};
ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};
ClickTaleSettings.Compression = ClickTaleSettings.Compression || {};
ClickTaleSettings.Compression.Method = 
ClickTaleSettings.Transport = ClickTaleSettings.Transport || {};
(();
ClickTaleSettings.Protocol = ClickTaleSettings.Protocol || {};
ClickTaleSettings.Protocol.Method = "ImpactRecorder";
if (window.Zone && typeof Zone["__symbol__"] === "function") {
    ClickTaleSettings.PTC.restoreZonedXHR = 

    window.ClickTaleOnXHRCreated = 
}
if (document.readyState === "complete") {
    window.ClickTaleIncludedOnWindowLoad = true;
}
window.ClickTaleIncludedOnDOMReady = true;

window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UploadPageHappened = false;
window.ClickTaleSettings.PTC.IsMobile = false;
window.ClickTaleUIDCookieName = "WRUIDAWS";

ClickTaleSettings.CheckAgentSupport = 

ClickTaleSettings.PTC.startsWith = 

ClickTaleSettings.DOM = ClickTaleSettings.DOM || {};

(function () {
    var selectorForBoth = '.c-address-validator__autocomplete-list>li, .c-address-validator__autocomplete-list>li>span, #enteraddress,label[for="signature"],.c-utility-module .c-utility-module__menu>.c-utility-module--location-container a.c-utility-module__menu-link[aria-label]';
    var selectorForText = '.c-three-up-confirmation__container .c-three-up-confirmation__header-reference>.reference-value,.c-billing__email,.c-utility-module .c-utility-module__menu>.c-utility-module--location-container a.c-utility-module__menu-link>span, div.review-page div:not(.order-details) > div.order-info-container > p,span.pac-matched,span.pac-item-query+span,p.address,p.service-address,div.col-sm-7:not(.cart),div.col-sm-9:not(.cart),span[class^="skype_c2c"],div.col-xs-12:not(.cart),.accountsMenu .nolinkedAccount, [data-bind*="myAccountTopHeader"], [data-bind*="accountNumber"], [data-bind*="MacAddress"],.balance-dollars, .balance-cents';
    var selectorForSrcAttr = "#map img";
    var selectorForTitleAttr = ".c-vpmodal__details .o-text-contact>strong";
    var selectorForAriaLabelAttr = "div.c-step-container--completed div.c-input-group>div.c-input-group__input";

    // /**
    //  *
    //  * @param {!string} value - attribute value || textContent
    //  * @param {!Node} node
    //  * @param {!string} rule - css selector
    //  * @param {!number} type - 0 - text, 1 - attribute
    //  * @returns {!string}
    //  */
    // function transform(value, node, rule, type) {
    //     var reg = /\w|[^\x00-\x7F]/g;
    //     return value.replace(reg, "-");
    // }

    ClickTaleSettings.DOM.PII = {
        Text: [selectorForBoth, selectorForText, selectorForSrcAttr, selectorForTitleAttr, selectorForAriaLabelAttr],
        Attributes: [
            {
                rule: selectorForBoth,
                attr: "value",
            },
            {
                rule: selectorForSrcAttr,
                attr: "src",
            },
            {
                rule: selectorForTitleAttr,
                attr: "title",
            },
            {
                rule: selectorForAriaLabelAttr,
                attr: "aria-label",
            },
        ], //,
        //Transform: transform
    };

    /**
     *
     * @param {!CSSStyleSheet} adoptedStyleSheets
     */
    

    /**
     *
     * @param {!(DocumentOrShadowRoot|Element)} root
     */
    

    ClickTaleSettings.DOM.Serializer = ClickTaleSettings.DOM.Serializer || {};

    ClickTaleSettings.DOM.Serializer.OnAfterSerialize = function (serializeAPI) {
        var allObservableRoots;
        if ("adoptedStyleSheets" in Document.prototype && window.ClickTaleGlobal && ClickTaleGlobal.symbols && ClickTaleGlobal.symbols.rootsManager && typeof ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots === "function" && Array.isArray((allObservableRoots = /** @type{!Array.<DocumentOrShadowRoot|Element>} */ (ClickTaleGlobal.symbols.rootsManager.getAllObservableRoots())))) {
            allObservableRoots.forEach(;
        }
        function getCSSSheets(items) {
            if (!!items) {
                var cssRulesString = "";
                Array.prototype.forEach.call(items, function (ele, ind) {
                    if (!!ele && ele.sheet && (ele.sheet.rules || ele.sheet.cssRules)) {
                        var cssRulesObj = ele.sheet.rules || ele.sheet.cssRules;
                        for (var i in cssRulesObj) {
                            if (cssRulesObj[i]["cssText"]) {
                                cssRulesString += cssRulesObj[i]["cssText"] + " ";
                            }
                        }
                    }
                });
                return !!cssRulesString ? cssRulesString : false;
            }
            return false;
        }
        function serializeTheNode(cssString, serializeAPI) {
            var serlizedNode = {
                nodeType: 1,
                tagName: "style",
                attributes: {},
                childNodes: [
                    {
                        nodeType: 3,
                        textContent: cssString,
                    },
                ],
            };
            serializeAPI.addChild(document.head, null, serlizedNode);
        }
        function SyncComputedStyles(serializeAPI) {
            var styles = document.querySelectorAll("style:empty");
            if (!!styles && !!styles.length) {
                var cssText = getCSSSheets(styles);
                serializeTheNode(cssText, serializeAPI);
            }
        }
        //To Call inside OnAfterSerilzation
        SyncComputedStyles(serializeAPI);
    };

    var locationRules = [
        {
            selector: '#email-settings-tile .columns > span, #auto-payment-cheque [data-bind*="activeAutoPaymentAccountInfo"], [data-bind*="eBillSubscriberEmail"], [data-bind*="FullDisplayName"]',
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/myprofile\//,
            },
        },
        {
            selector: ".device-name .name, .device-mac span",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/internet\//,
            },
        },
        {
            selector: '[data-bind*="channels"] li, .device-name',
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/tv\//,
            },
        },
        {
            selector: "#changePhoneNumber option, #voicemail-inbox .message-row .from.cell, #voicemail-inbox .message-row .date.cell, #voicemail-inbox .message-row .length.cell",
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/phone\//,
            },
        },
        {
            selector: 'label[for="mailto_address_service_address"]',
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/orderleadform2.jsp/,
            },
        },
        {
            selector: '#agreement_email, label[for="oldEmail"]',
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/store\/cart\/orderLeadForm-billingInfo.jsp/i,
            },
        },
        {
            selector: 'label[for="mailto_address_service_address"]',
            Attributes: false,
            Text: true,
            location: {
                prop: "pathname",
                search: /\/store\/checkout\/step2.jsp/i,
            },
        },
    ];

    locationRules.forEach(;
})();

(();

ClickTaleSettings.PTC.AssetManager = {
    isActive: true,
    isNeedForImg: false,
    subscriberId: "233118",
    pid: "439",
    storageUrl: "https://s3.amazonaws.com/nv-p1-s3-assets-01/",
    prefixSpecialCharacters: /shawconnect_dynamic_assets/i,
    getPrefixUrl: 
    getFullURL: 
    init: 
};
ClickTaleSettings.PTC.AssetManager.init();

ClickTaleSettings.PTC.ConfigChangeMonitor = function () {
    var excludeBothArray = ["plaintext,div.ls-bar-timer,div.slider,div.ls-inner,div.ls-lt-container,div.ls-slide,div.ls-bottom-nav-wrapper,a.ls-nav-next,a.ls-nav-prev"];

    ClickTaleSettings.ChangeMonitor = {
        Enable: ClickTaleSettings.PTC.EnableChangeMonitor,
        // Roots: [document.body],
        Exclude: {
            ChildNodes: [],
            Attributes: [],
        },
    };

    var exclude = ClickTaleSettings.ChangeMonitor.Exclude;
    if (excludeBothArray.length > 0) {
        Array.prototype.push.apply(exclude.ChildNodes, excludeBothArray);
        Array.prototype.push.apply(exclude.Attributes, excludeBothArray);
    }

    

    // if (document.location.pathname === '/') {
    //     insertIntoBoth("selector");
    // }

    if (typeof window.ClickTaleCMSelector === "string" && window.ClickTaleCMSelector != "") {
        try {
            var domNodes = document.querySelector(ClickTaleCMSelector);
            insertIntoBoth(ClickTaleCMSelector);
        } catch (err) {
            if (typeof ClickTaleNote === "function") {
                ClickTaleNote("Bad CM selector: " + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
};

ClickTaleSettings.PTC.doOnlyWhen = 



// End of user-defined pre WR code


var isHttps = document.location.protocol == 'https:',
	scriptSource = window.ClickTaleScriptSource,
	pccSource = scriptSource;

if (!scriptSource) {
	window.ClickTaleScriptSource = isHttps ? 'https://ct.contentsquare.net/www/' : 'http://ct.contentsquare.net/www/';
}


if(!ClickTaleGlobal.init.pccRequested) {
		var pccSrc = pccSource ? pccSource : (isHttps ? 'https://ct.contentsquare.net/pcc/' : 'http://ct.contentsquare.net/pcc/');
	    pccSrc += 'b829dc86-7600-47e9-8cf6-4eb0c3528c7a.js?DeploymentConfigName=Malka_20211119&Version=2';
			var pccScriptElement = ClickTaleCreateDOMElement('script');
	pccScriptElement.type = "text/javascript";
	pccScriptElement.crossOrigin = "anonymous";
		pccScriptElement.async = true;
		if(ClickTaleGlobal.scripts.sri && ClickTaleGlobal.scripts.sri.hashes){
        pccScriptElement.integrity = ClickTaleGlobal.scripts.sri.hashes.pcc;
        pccScriptElement.src = ClickTaleGlobal.scripts.sri.path + "pcc.js";
	}else {
       pccScriptElement.src = pccSrc;
    }
	
	ClickTaleGlobal.init.isAllowed && document.body.appendChild(pccScriptElement);
		ClickTaleGlobal.init.pccRequested = true;
}
	
window.ClickTalePrevOnReady = typeof window.ClickTaleOnReady == 'function' ? window.ClickTaleOnReady : void 0;

window.ClickTaleOnReady = function() {
	var PID=439, 
		Ratio=1, 
		PartitionPrefix="www06",
		SubsId=233118;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
	
window._uxa = window._uxa || [];
window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleSettings.PTC.CustomVariables = window.ClickTaleSettings.PTC.CustomVariables || [];
window.ClickTaleSettings.PTC.CustomVariables = [
    { displayName: 'Page Name', key: 'eVar1', slot: 1 },
    { displayName: 'Site Section', key: 'eVar2', slot: 2 },
    { displayName: 'Form Name', key: 'eVar6', slot: 3 },
    { displayName: 'Custom Link', key: 'eVar12', slot: 4 },
    { displayName: 'Form Step Name', key: 'eVar15', slot: 5 },
    { displayName: 'Login State', key: 'eVar19', slot: 6 },
    { displayName: 'Serviceability Details Existing Customer', key: 'eVar40', slot: 7 },
    { displayName: 'Province', key: 'eVar41', slot: 8 },
    { displayName: 'Lead Form Name', key: 'eVar66', slot: 9 },
    { displayName: 'Visitor City', key: 'eVar112', slot: 10 }
];

function sendCVar() {
    window.ClickTaleSettings.PTC.CustomVariables.forEach((CustomVariable, index) => {
        var sObj = window['s_Obj'];
        if (!!sObj) {
            sObj[CustomVariable['key']] && window._uxa.push(['setCustomVariable', CustomVariable.slot, CustomVariable.displayName, sObj[CustomVariable['key']]]);
        }
    })
}
window.ClickTaleOnStop = window.ClickTaleOnStop || [];
ClickTaleOnStop.push(sendCVar);
sendCVar();


//Qualtrics Integration Start
if (ClickTaleSettings.PTC.RecordSurvey === false) {
    return;
}
//Qualtrics Integration End

if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
};

window.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];
window.ClickTaleSettings.PTC.InitFuncs.push(;

function doUpload() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        ClickTaleUploadPageNow();
        window.ClickTaleSettings.PTC.UploadPageHappened = true;
    };
};

var ctPathname = document.location.pathname.toLowerCase();

function isVisible(elementToCheck) {
    return !!(elementToCheck && !!(elementToCheck.compareDocumentPosition(document) & Node.DOCUMENT_POSITION_CONTAINS) && (elementToCheck.offsetWidth || elementToCheck.offsetHeight || elementToCheck['getClientRects']().length));
}

function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        if (ctPathname == "/mybills") {
            return Array.prototype.filter.call(document.querySelectorAll('.tile-spinner'), .length == 0;
        }
        return true;
    }
    return false;
}

if (typeof ClickTaleDelayUploadPage === 'function') {
    ClickTaleDelayUploadPage();

    var mainLoader;
    if ((mainLoader = document.getElementById('pre-load-overlay')) && isVisible(mainLoader)) {
        if (window.MutationObserver) {
            (new MutationObserver(function (mut, obs) {
                if (!isVisible(mainLoader)) {
                    //AB Test Integration Timeout
                    setTimeout(function () {
                        window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, 500, 8, doUpload);
                    }, 1000);
                    mainLoader.removeEventListener('DOMAttrModified', arguments.callee);
                }
            })).observe(mainLoader, {
                attributes: true,
                attributeFilter: ['style']
            });
        } else {
            mainLoader.addEventListener('DOMAttrModified', function () {
                if (!isVisible(mainLoader)) {
                    //AB Test Integration Timeout
                    setTimeout(function () {
                        window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, 500, 8, doUpload);
                    }, 1000);
                    mainLoader.removeEventListener('DOMAttrModified', arguments.callee);
                }
            });
        }
    } else {
        //AB Test Integration Timeout
        setTimeout( 1000);
    }

    var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;
    for (var i = 0, initLen = initFuncs.length; i < initLen; i++) {
        if (typeof initFuncs[i] === 'function') {
            initFuncs[i]();
        }
    }
}

	// End of user-defined header code (PreInitialize)
    
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	ClickTaleGlobal.init.isAllowed && ClickTale(PID, Ratio, PartitionPrefix, SubsId);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	
	// Start of user-defined footer code
	
	// End of user-defined footer code
	
}; 
(();









//Signature:H5IzfPYtt4xcJYDSCo5KAKjXXmNzukIIK2X99/VSTK4I3nF7YlDFJ7rEhD467dY0tGbdktfIaoqkrrGgqHQGW1Tq36b6kOLYiPouna4cyZr8riuvmxl2qhW0uSs66Fuoh1ET5klWHxMvO0c15scguMB/832poifty+uACNwSjCk=