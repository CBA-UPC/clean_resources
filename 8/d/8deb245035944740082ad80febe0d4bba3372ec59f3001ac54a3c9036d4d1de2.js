// Copyright 2006-2024 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.versions = {"wr": "bridge-WR110.js", "pcc": "fd145cf2-4109-439c-97f8-e0bc3c3e290d.js?DeploymentConfigName=Release_20240123&Version=3"};
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
						var doms = ["JyLkPaZJVyLJHykhJVT","kLcADJThkPZJVcLyhJVT","kmZZaHNPuNhJVNuPgHuahJVT","kPZJVcLyhJVT","kPZJVcLyiHuRhJVT","kPZJVcLyJHykhJVT","kPZJVcLymPuHuJPHshJVT","TTHmPNoaPuNhJVT","VwPuPVusHihJVT","VawABPAHJJLwaHuJLhJmAikJAgIAkLchkPZJVcLymPuHuJPHshJVT","ZAJkuhPuuVcPkhJVT","ZaHNLADJThkPZJVcLyhJVT"];
			if(location.protocol == "file:") return false;
			for(var i=0, curr; i < doms.length, curr = doms[i]; i++) {
								if(new RegExp("h" + curr + "$", "i").test(dom))
									return true;
			}
			return false;
					})()
})(window.location.host.toLowerCase().replace(/^((www)?\.)/i, ""));

ClickTaleSettings.Proxy = {
	WR: "ing-district.clicktale.net/ctn_v2/",
	ImageFlag: "ing-district.clicktale.net/ctn_v2/"
}
ClickTaleSettings.Protocol = {
	Method: "ImpactRecorder"
}
ClickTaleGlobal.diagnostics=);

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (();
	
		
// Copyright 2006-2024 ClickTale Ltd., US Patent Pending
// PID: 20
// WR destination: www15
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
//PTC Code Version 10.1

window.ClickTaleSettings = window.ClickTaleSettings || {};
ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};

ClickTaleSettings.Persistence = {
    EnableStorage: true,
    EnableDispatch: true,
    AutoDispatch: true,
};

ClickTaleSettings.Compression = ClickTaleSettings.Compression || {};
ClickTaleSettings.Compression.Method = 
ClickTaleSettings.Transport = ClickTaleSettings.Transport || {};
(();

ClickTaleSettings.Proxy = {
    WR: "ing-district.clicktale.net/ctn_v2/",
    ImageFlag: "ing-district.clicktale.net/ctn_v2/",
};
ClickTaleSettings.Protocol = ClickTaleSettings.Protocol || {};
ClickTaleSettings.Protocol.Method = "ImpactRecorder";
if (window.Zone && typeof Zone["__symbol__"] === "function") {
    ClickTaleSettings.PTC.restoreZonedXHR = 

    window.CEC = window.CEC || {};
    CEC.onInit = function () {
        CEC.onXhrCreated = function (xhr) {
            ClickTaleSettings.PTC.restoreZonedXHR(xhr);
        };
    };
    window.ClickTaleOnXHRCreated = 
}
if (document.readyState === "complete") {
    window.ClickTaleIncludedOnWindowLoad = true;
}
window.ClickTaleIncludedOnDOMReady = true;

window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UploadPageHappened = false;
window.ClickTaleSettings.PTC.IsMobile = false;
window.ClickTaleSettings.PTC.textRegex = /\w|[^\x00-\x7F]/g;
window.ClickTaleUIDCookieName = "WRUID20170328";

function deleteIrrelevantUIDCookies(relevant) {
    var cookieArray = document.cookie.replace(/\s+/g, "").split(";");
    var hostArray = location.host.split(".");
    var topDom = hostArray.length <= 2 ? location.host : hostArray.slice(1).join(".");
    for (var i = 0; i < cookieArray.length; i++) {
        var currentCookie = cookieArray[i];
        var cookieKey = currentCookie.substring(0, currentCookie.indexOf("="));
        if (cookieKey.indexOf("WRUID") > -1 && relevant.indexOf(cookieKey) == -1) {
            document.cookie = cookieKey + "='';domain=." + topDom + ";path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;";
            document.cookie = cookieKey + "='';path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;";
        }
    }
}
deleteIrrelevantUIDCookies([window.ClickTaleUIDCookieName]);

ClickTaleSettings.CheckAgentSupport = 

ClickTaleSettings.PTC.startsWith = 

ClickTaleSettings.DOM = ClickTaleSettings.DOM || {};

ClickTaleSettings.ElementPathRewriter = function (el, path) {
    if (el == document.querySelector("#content")) {
        if (path[0] && !path[0].ctid) {
            path[0].ctid = "content0";
        }
    }
    return path;
};

var textOnlySelector = "#current-email-id, #moreTimeEmailAddress"; // DSC-311
textOnlySelector += ", form#application-form>ul.personal:first-child li"; // DSC-324
textOnlySelector += ", form#ApplicationForm header h1, .profile-flyout *, .has-fly-out.card-type .card-number, .rewards-container .heroContent h1 span";
textOnlySelector += ", #customer-name"; // DSC-787
textOnlySelector += ", #personalized-message > span, #personalized-message span";

(function () {
    var selectorForBoth = textOnlySelector;
    selectorForBoth += ", .media-heading > span, .contact-info > .mailing-address, .phone-no, .email-address, .user-name, #paperless-email-text, #paperless-email-text";
    selectorForBoth += ", .media-body span.name, select#citizenship-status-select option, select#state option, select#country-of-citizenship option, select#employment-status option, select#school-state-field option, select#year-in-college option, select#degree-type option, select#highest-level-of-education option, select#housing-status option, div#total-gross-income-expandable-input p, select#bank-accounts-owned-select option";
    selectorForBoth += ", #occupation-code, #occupation-code option, #number-of-credit-cards-and-loans, #number-of-credit-cards-and-loans option";
    selectorForBoth += ", .glassbox-masked:not(input), .glassbox-masked1";
    selectorForBoth += ", #mailing-state option,#home-address p, .last-four";
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
        Text: [selectorForBoth, textOnlySelector],
        Attributes: [
            {
                rule: selectorForBoth,
                attr: "value",
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

        var parentNode = document.head;
        var previosSibling = document.querySelector("head>style:last-of-type");
        serializeAPI.addChild(parentNode, previosSibling, {
            nodeType: 1,
            tagName: "style",
            attributes: {
                class: "cm-ignore",
            },
            childNodes: [
                {
                    nodeType: 3,
                    textContent: ".glassbox-omit{display: none ! important;}",
                },
            ],
        });
    };

    var locationRules = [
        {
            selector: ".media-heading .name, #Begin_Balance_Transfer table p.name, #Begin_Balance_Transfer table p.accountNumber, #Begin_Balance_Transfer table p.address, .balance-transfer-callout .balance-transfer-callout table.accounts td.name, table.accounts td.bank, .balance-transfer-callout table.accounts td.number, .residential-content li,.welcome-section .top-section-left p, .balance-transfer-callout div[id*='btInfo']",
            Attributes: ["value"],
            Text: true,
            location: {
                prop: "pathname",
                search: /application\/fmo/i,
            },
        },
        {
            selector: "section.activation-confirmation-section .welcome-name, .user-email",
            Attributes: ["value"],
            Text: true,
            location: {
                prop: "pathname",
                search: /personalprofile\/ppw\/wizard/i,
            },
        },
        {
            selector: ".letter_Content>table:first-of-type p, .letter_Content>table:first-of-type p *, h1.marquee__lead, #results div, .info-details > p.detail, .info-details > p.detail > span,.welcome-section .top-section-left p, .expandable-field-content, .ui-autocomplete>li>div",
            Attributes: ["value"],
            Text: true,
            location: {
                prop: "pathname",
                search: /application/i,
            },
        },
        {
            selector: ".media-body span.name",
            Attributes: ["value"],
            Text: true,
            location: {
                prop: "pathname",
                search: /application\/verify/i,
            },
        },
        {
            selector: "#main-content-rwd #content .heading-section h1, #customer-name",
            Attributes: ["value"],
            Text: true,
            location: {
                prop: "pathname",
                search: /application\/prequal/i,
            },
        },
        {
            selector: "#years-in-business option, #company-structure option, #your-title option, #business-state option",
            Attributes: ["value"],
            Text: true,
            location: {
                prop: "pathname",
                search: /application\/website\/apply/i,
            },
        },
    ];

    locationRules.forEach(;
})();

(();

ClickTaleSettings.PTC.AssetManager = {
    isActive: true,
    isNeedForImg: false,
    subscriberId: "224631",
    pid: "20",
    storageUrl: "https://s3.amazonaws.com/nv-p1-s3-assets-01/",
    prefixSpecialCharacters: false,
    getPrefixUrl: 
    getFullURL: 
    init: 
};
ClickTaleSettings.PTC.AssetManager.init();

ClickTaleSettings.PTC.ConfigChangeMonitor = function () {
    var excludeBothArray = ['#BVRRContainer, iframe[src*="doubleclick"], iframe[src*="doubleclick"], meta[http-equiv="refresh"],.rewards-text sup'];

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

function ClickTaleOnRecording() {
    function clickTaleTriggerMCVID(i) {
        if (i) {
            var i = parseInt(i);
            var mcvid = s_c_il[i].getMarketingCloudVisitorID();
            ClickTaleEvent("MCVID: " + mcvid);
        }
    }

    function clickTaleCheckIfMCVIDExists() {
        for (var i = 0; i < 10; i++) {
            if (window.s_c_il && s_c_il[i] && typeof s_c_il[i].getMarketingCloudVisitorID === "function" && typeof s_c_il[i].getMarketingCloudVisitorID() === "string" && s_c_il[i].getMarketingCloudVisitorID() != "") {
                clickTaleTriggerMCVID("" + i + "");
                return true;
            }
        }
        return false;
    }

    window.ClickTaleSettings.PTC.doOnlyWhen(clickTaleTriggerMCVID, clickTaleCheckIfMCVIDExists, 100, 100);

    (();
}

// End of user-defined pre WR code


var isHttps = document.location.protocol == 'https:',
	scriptSource = window.ClickTaleScriptSource,
	pccSource = scriptSource;

if (!scriptSource) {
	window.ClickTaleScriptSource = isHttps ? 'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/';
}


if(!ClickTaleGlobal.init.pccRequested) {
		var pccSrc = pccSource ? pccSource : (isHttps ? 'https://cdnssl.clicktale.net/pcc/' : 'http://cdn.clicktale.net/pcc/');
	    pccSrc += 'fd145cf2-4109-439c-97f8-e0bc3c3e290d.js?DeploymentConfigName=Release_20240123&Version=3';
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
	var PID=20, 
		Ratio=1, 
		PartitionPrefix="www15",
		SubsId=224631;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
	var headerLocation = document.location.href.toLowerCase();
if (headerLocation.indexOf("/cardmembersvcs/personalprofile/ppw/wizard") > -1 ||
    headerLocation.indexOf("application/apply?srccde=gayp&dcc=www23") > -1 ||
    headerLocation.indexOf("application/apply?srccde=gayp&dcc=www24") > -1) {
    return;
}

if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
}

window._uxa = window._uxa || [];
window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleSettings.PTC.CustomVariables = window.ClickTaleSettings.PTC.CustomVariables || [];
window.ClickTaleSettings.PTC.CustomVariables = [
    { displayName: 'Page Name', key: 'pageName', slot: 1 },
    { displayName: 'Channel', key: 'channel', slot: 2 },
    { displayName: 'Hier 1', key: 'hier1', slot: 3 },
    //slot 4 is taken
];

if(document.location.pathname.toLowerCase().indexOf('/application/ic/approved')>-1){
    var evar160Val  = !!window['s'] && window['s']['eVar160'];
    var query='';
    if (evar160Val==='1'){
        query = '?_eligible';
    }
    else if (evar160Val==='0'){
        query = '?_ineligible';
    }
    else {
        evar160Val = evar160Val || 'NA';
    }
    window._uxa.push(['setCustomVariable', 4, 'eVar160', evar160Val]);
    !!query && window._uxa.push(['setQuery', query]);
}

function sendCVar() {
    var dataGetObj = window['s'];
    if (!!dataGetObj) {
        for (var i = 0; i < window.ClickTaleSettings.PTC.CustomVariables.length; i++) {
            var customVariable = window.ClickTaleSettings.PTC.CustomVariables[i];
            if (!!dataGetObj[customVariable['key']]) {
                window._uxa.push(['setCustomVariable', customVariable.slot, customVariable.displayName, dataGetObj[customVariable['key']]]);
            }
        }
    }
}
window.ClickTaleOnStop = window.ClickTaleOnStop || [];
ClickTaleOnStop.push(sendCVar);
sendCVar();


window.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];
window.ClickTaleSettings.PTC.InitFuncs.push(;

//Cross-Domain tracking
try {
    if (typeof jQuery === 'function') {
        if (document.location.hostname.toLowerCase().indexOf("discover.com") > -1) {
            jQuery(document).one("click", '.Click_Uid', function () {
                if (typeof ClickTaleGetUID === 'function') {
                    var CTid = ClickTaleGetUID();
                    if (!CTid)
                        CTid = 0
                    else
                        CTid = CTid
                    var href = jQuery(this).attr('href') || '';
                    if (href) {
                        jQuery(this).attr('href', href + (href.indexOf('?') > -1 ? "&" : "?") + "ct_id=" + CTid);
                    }
                }
            })
        }
        if (document.location.hostname.toLowerCase().indexOf("discovercard.com") > -1) {
            var ct_Id = jQuery("#ct_Id").val();
            if (typeof ct_Id == "string" && ct_Id != "") {
                var date = new Date();
                date.setTime(date.getTime() + (window.ClickTaleGlobal.api.ClickTaleCookieExpiryDays * 86400000));
                var expires = "; expires=" + date.toGMTString();
                document.cookie = window.ClickTaleUIDCookieName + "=" + ct_Id + expires + "; path=/;" + (ClickTaleCookieDomain ? " domain=" + ClickTaleCookieDomain + ";" : "");
            }
        }
    }
} catch (e) { }

var delayTimerStart = new Date().getTime();

function doDelayedUpload() {
    if (typeof ClickTaleUploadPageNow == 'function' && ClickTaleIsRecording()) {
        ClickTaleUploadPageNow();
        window.ClickTaleSettings.PTC.UploadPageHappened = true;

    }
}
var t = 0;
function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow == 'function' && ClickTaleIsRecording()) {
        if (document.body && getComputedStyle(document.body).opacity != "0" && document.readyState == "complete") { // wait for body
            if (location.hostname.toLowerCase() === "www.discover.com") {
                // wait 2 seconds before loading
                var delayTimerCurrent = new Date().getTime();
                return ((delayTimerCurrent - delayTimerStart) > 2000);
            } else { // discovercard.com
                if (document.location.pathname.toLowerCase().indexOf("/application/fmo") > -1) { // FMO
                    var condition_1 = true,
                        condition_2 = true;
                    if (document.querySelector('#more-carousel')) {
                        condition_1 = (document.querySelector('#more-carousel').style.visibility == 'visible');
                    }
                    if (document.querySelector('.review-content-holder.container .section #BVRRContainer')) {
                        condition_2 = !!document.querySelector('.review-content-holder.container .section #BVRRContainer *');
                    }
                    return (condition_1 && condition_2);
                }
            }
            return true;
        }
    }
    return false;
}

if (typeof ClickTaleUploadPage === 'function') {
    ClickTaleDelayUploadPage();

    //AB Test Integration Timeout
    setTimeout( 2000);

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









//Signature:hbCAaXN+/myil0y39QABFCya8IPVRa6XtPlOsYm49OU5numcRn47PjsfVkapbGnU+/mytq1wvzXJ7s93ALpniNa0DUVOdJbmGrFMWWES+OY7bl4moFjSVVd+w2JiLiSDBdResDkvbSYHhukNJPeFI4LRbMcLSp/ZogQQ++1gQrc=