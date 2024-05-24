// Copyright 2006-2023 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.versions = {"wr": "bridge-WR110.js", "pcc": "31c5892c-0834-4705-9963-6ce6c5f92ca2.js?DeploymentConfigName=Release_20220817&Version=1"};
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
						var doms = ["iTPuLDhJVywhPuayHuLa","JLuaByFsPuRhJH","JLuaByFsPuRhJVhqw","JLuaByFsPuRhJVhBR","JLuaByFsPuRhJVT","JLuaByFsPuRhJVThHB","JLuaByFsPuRhJVThZN","JLuaByFsPuRhkL","JLuaByFsPuRhoR","JVuwVyahJLuaByFsPuRhJVT","JVuayVsJLuaLyhJLuaByFsPuRhJVT","JVuayVsJLuaLyhJLuaByFsPuRhJVT/","JashPV","LZoVwhmVZZhJVywhPuayHuLa","LZoVwhmVZZhJVywhPuayHuLa/LZoVw/JBZaVTLyJHyL/kPZa/PukLehoaTs","LZoVwAwLaGhaLZahPuayHuLa","LZoVwAaLZaGhaLZahPuayHuLa","LZoVwAaLZaIhaLZahPuayHuLa","LZoVwAaLZaMhaLZahPuayHuLa","LZoVwAaLZaMhaLZahPuayHuLa/LZoVw/JBZaVTLyJHyL/kPZa/PukLehoaTs","mVyJLhJVT","oVwAaLZaMhaLZahPuayHuLa","JVuayVsJLuaLyhJLuaByFsPuRhJVT/","LZoVwhmVZZhJVywhPuayHuLa/LZoVw/JBZaVTLyJHyL/kPZa/PukLehoaTs","wVyaHshJLuaByFsPuRhJVT/LuaLywyPZL/uLaDVyR/THw","RBiLVkJAaLZahJVywhPuayHuLa","sVHuHkTPuPZayHaPVuhJVT/sVNVBa","sBTLuhJVT","sBTLuaLJohJVT","TFhsLcLsKhJVT/wVyaHs/DLi/TFsLcLsK","VwPuPVusHihJVT","wLNHJsVBkhuLa","wLaGhaLZahPuayHuLa","ZoVwhJLuaByFsPuRhJVT","aLZaGhaLZahPuayHuLa","aLZaIhaLZahPuayHuLa","DLikTgwaGhJLuaByFsPuRhJVT","DLikTgXHIhJLuaByFsPuRhJVT","DLikTgXHIhJLuaByFsPuRhJVT/wHyauLywVyaHs/sVNPu","DLikTgXHKhJLuaByFsPuRhJVT","JLuaByFsPuRhJH","JLuaByFsPuRhJVhqw","JLuaByFsPuRhJVhBR","JLuaByFsPuRhJVThHB","JLuaByFsPuRhJVThZN","JLuaByFsPuRhkL","JLuaByFsPuRhoR"];
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
	
		
// Copyright 2006-2023 ClickTale Ltd., US Patent Pending
// PID: 8
// WR destination: www29
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
ClickTaleSettings.Compression = ClickTaleSettings.Compression || {};
ClickTaleSettings.Compression.Method = 
ClickTaleSettings.Transport = ClickTaleSettings.Transport || {};
(();
window.ClickTaleSettings.Persistence = {
    EnableStorage: true,
    EnableStreams: true,
    EnableDispatch: true,
};
window.ClickTaleSettings.Protocol = {
    Method: "ImpactRecorder",
};

//Start: IMP-1950
ClickTaleSettings.LocRefRew = function (url) {
    if (url.indexOf("#") > -1) {
        url = url.replace("#", "?__");
        return url;
    }
    return url;
};
ClickTaleSettings.LocationRewriter = ClickTaleSettings.LocRefRew;
ClickTaleSettings.ReferrerRewriter = ClickTaleSettings.LocRefRew;
//End: IMP-1950

window.ClickTaleSettings.Proxy = {
    WR: "ing-district.clicktale.net/ctn_v2/",
    ImageFlag: "ing-district.clicktale.net/ctn_v2/",
};
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
window.ClickTaleSettings.PTC.textRegex = /\w|[^\x00-\x7F]/g;
window.ClickTaleUIDCookieName = "WRUIDCD17062020";

ClickTaleSettings.CheckAgentSupport = 

ClickTaleSettings.PTC.startsWith = 

ClickTaleSettings.DOM = ClickTaleSettings.DOM || {};

(function () {
    var selectorForBoth = '#lpChat .lp_top-text,#lpChat .lp_title_text,#lpChat .lp_sender, #lpChat .lp_title_text span, #lpChat .lp_agent_is_typing,#lpChat .lpview_form_textarea,.lp_title_text[data-lp-cust-id="transcript_bubble_visitor_text"],.lp_title_text[data-lp-cust-id="transcript_bubble_agent_text"],.lp_title_text[data-lp-cust-id="transcript_bubble_visitor_text"] p,.lp_title_text[data-lp-cust-id="transcript_bubble_agent_text"] p,div#account-identification-wrapper > h2, #phonenum p.phoneNum > label, div.serviceAddress,  \
    div#divViewLoginUserID > span, div#divViewProfileInformation > span, #helloMessage, span.address-bar, #hcdeCardExpiryMonth > option, #hcdeCardExpiryYear > option, #orderSummary > div p > strong, #boxLayout > div > div.paddingRight > div > p, #boxLayout > div > div:nth-child(2) > p, #printSummary > div.topMessage.-pt4 > div, li.autocomplete-result, #diffAddress > div > div > label > div.f-label.shipping.f-dk-gray';

    //SUP-2948
    selectorForBoth += ",.ddMth>option,.ddMth";
    selectorForBoth += ', [ng-show*="displayAddr"] > .addr > span, .addressListItem, [ng-hide="showAddressFields"] > .addr, .oneLineAddress, [name="form.singleLineAddress"], .ui-autocomplete > li *, #success-confirmation-number, #confirmation-email-address, .gsVidHdrAddr'; //SUP-3029
    //SUP-3325
    selectorForBoth += ',#ctam_addressLine,#ctam_unitNum,.addressListItem span,#accountNumber,#zipCode,#registration-account-number,#firstName,#lastName,#registration-content strong,#prePoplatedUserName,#signIn_emailAddr,#signIn_fn,#signIn_ln,#billingPreferences>.listRow>.col-12>span,#email_for_notification,#mobileNumber,.greenNav__user_account_right,[class*="updatedAltTn"],.accountInfo-flip>.listRow>.col-7>span,.accountInfo-flip>.listRow>.col-5>span,[data-associated-field="myAccount-info-number1"],#signIn_SecQues,.groupsubContainerContent>label,.addressFields>.addr,.addr>span,.oneLineAddress,.address-bar,#hcdeCardExpiryMonth,#hcdeCardExpiryYear,#orderConfirmation .header-subTxt, #orderSummary strong, #yourInfoLayout p';
    var metaSelector = 'meta[http-equiv*="Content-Security-Policy"]';

    //IMP-2720
    //for static/content
    selectorForBoth += ",ul.ui-autocomplete>li>a ,ul.ui-autocomplete>li>a>b, div.selectContainer *";

    //for 2SX - serviceassistance.centurylink.com
    selectorForBoth += ", #acctInfoWelcome b,#accounts_select>option, #acctInfoWelcome";

    //for eam
    selectorForBoth += ',.pageBanner__welcomeBox>h3>span.camel_case_str,#paperless__emailDisplay,#call-details-form [id*="productId"] > option';
    selectorForBoth += ',#manageNetwork_getWireLessInfo_CenturyLink3124 span,[class*="updatedNickName"],#currentAcctNickName';
    selectorForBoth += ",input#emailAddress";

    // IMP-2775
    selectorForBoth += ',form[id*="ultipleAddressMatchForm"] #formAddress span, #deviceInDeviceList h2, #deviceInDeviceList span';

    //SUP-SUP-8216
    if (document.location.href.indexOf('lumen.com') > -1) {
        selectorForBoth += ', .mp-header__headline, .js-modal-email, .modal-email, .js-fn-edit, .js-ln-edit, .js-em-edit, .mp-account__information-address, .js-pn-edit, .Username, .form-control, .account-detail-form-control, .slds-input, .dockableContainer';
    }

    var selectorForDataColumns = "#dropDownNavBar a.accountStatusRes";
    var selectorForTextOnly = "#manageNetwork_getWireLessInfo_CenturyLink57 >span,#ssidPasswordDetails #ssid,#ssidPasswordDetails #password, #ssidPasswordDetails #ssidTitle,#convertedMessage>p>b,#allProfileDetails>li>p";
    selectorForTextOnly += ",#groupDeviceDetailsList h4,#groupDetailsHeader,.devicesConnected h4,a>.loginInfo.headZip,span#email-vaild";
    selectorForTextOnly += ", #displayName, #eidName, #eid, #email, #phonePrimary, #phoneMobile, #userProfile div.name";

    // /**
    //  *
    //  * @param {!string} value - attribute value || textContent
    //  * @param {!Node} node
    //  * @param {!string} rule - css selector
    //  * @param {!number} type - 0 - text, 1 - attribute
    //  * @returns {!string}
    //  */
    function transform(value, node, rule, type) {
        var reg = /\w|[^\x00-\x7F]/g;
        return value.replace(reg, "-");
    }

    ClickTaleSettings.DOM.PII = {
        Text: [selectorForBoth, selectorForDataColumns, selectorForTextOnly],
        Attributes: [
            {
                rule: selectorForBoth,
                attr: "value",
            },
            {
                rule: selectorForDataColumns,
                attr: "data-columns",
            },
            {
                rule: metaSelector,
                attr: "http-equiv",
            },
            {
                rule: metaSelector,
                attr: "content",
            },
        ],
        Transform: transform,
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

    ClickTaleSettings.DOM.Serializer.OnAfterSerialize = 

    var locationRules = [
        {
            selector:
                "enterprise-nav-enterprises [data-cy=cy-enterprises__menu--row] span, enterprise-nav-enterprises [data-cy*=cy-enterprises__menu--row] td, .chi-modal__content span, #userDataTable [data-ut=dataTable-row-content]>div:nth-child(5) div, #userDataTable [data-ut=dataTable-row-content]>div:nth-child(4) div, #userDataTable [data-ut=dataTable-row-content]>div:nth-child(3) div, #Invoices div, enterprise-nav-user button#user span, enterprise-nav-enterprises button#enterprises span, enterprise-nav-enterprises div[class*=-enterprises__options] tr.en-enterprises--active span,\
            div[data-ut=userDetailSection] div>div>div>div:not(.label), .defaultEnterpriseId, #accountsGroup div.table-row-content div>div, #accountAssignmentPage div.table-row-content div>div, #accountUnAssignmentPage div.table-row-content div>div, #enterpriseTableData #enterprise_wrapper>div>div.chi-grid>.chi-col>div:not(.-text--bold), \
            #enterpriseTableData div[data-ut=dataTable-row-content] div, #customerNumAccordion li, .defaultEnterprise p, #accountSelectedSummary div[data-ut=dataTable-row-content] div, \
            #subscriptions-admin-summary div[data-ut=dataTable-row-content] div, #accountSummary div.table-row-content div>div, #accountSummary div.data-row-h div, \
            app-inventory-details app-common-details .detailsKey, .inventoryLabel  span, .invLocation span, #inventorydetailId .detailsValue, app-inventory-details .detailsValue, .service_Group.product-table span, .invDetialsTable td, app-inventory-details .header-details>div, \
            #ServiceSelected>.chi-card .chi-card__content td span, .service-table a, .service-table span, #ServiceSelected .chi-card__content div>p>span, #ServiceSelected table.-diagnostic-table tbody td>div, tbody.ticket-table a, \
            div[data-cy=cy-parent-router__element]>div>div.chi-card div.chi-card__title, \
            service-type div.customRow strong.ng-binding, #orderStatusTableDiv #tableBody span, span.customer, span.billing, #orderStatusSummaryTable #tableBody .row div, #orderStatusSummaryTable #tableBody .row div a, \
            .ticket-table span, .ticket-table span a, #ticketTitle h4, #ticketLogEntryListBorder span, #headerMoreInfo div, .resolution-area span, section.-ticketbubble--container p, #ServiceSelected p, \
            .qtip-content div pre, .dataTable a, .dataTable span, .modal-dialog .accordion-toggle span, \
            .accordion-table tbody span, .data-table-row span, .data-table-row div, .accordion-detail div, .data-table tbody span, .accordion-table invoice-group span, .accordion-table account-number div, .accordion-table custom-name div, .accordion-table mostrecent-payment div, .accordion-table payment-method div, .data-table tbody td, .modal-dialog h6, .data-table h3, .accordion-detail div, .accordion-detail span, div.bill-details p, \
            .chi-card__content .chi-grid>div>span, #in-progress-table tbody td, #schedule-table tbody td, #complete-table tbody td, #window-id, #locations, #impacted-services tbody td, td.inventory-list__cell-location a, div.new-billing-request h6.upper-case, div.deliveryoption-view h6, \
            div.billing-request-detail h5:not(.bold), invoices-table-detail .accordion-detail h4, enterprise-nav-profile enterprise-nav-enterprises span, enterprise-nav-user strong[class*=username], #maintenance-wrapper .fc-event-main span, #maintenance-wrapper .fc-event-main div, \
            #paymentSummary div.paymentSummarydet div.rowCls span.ng-binding, .product-services h4.ng-binding, #potentialTicketConvertInfo p.chi-alert__text, .-escalate-ticket-modal p.-text, .-escalate-ticket-modal p.-text strong, div.makepayment-display-view tbody column b, .data-table tbody th",
            Attributes: false,
            Text: true,
            location: {
                prop: "hostname",
                search: /controlcenter\./,
            },
        },
        {
            selector: "#addAccounts-wrapper img",
            Attributes: ["src"],
            Text: false,
            location: {
                prop: "hostname",
                search: /controlcenter\./,
            },
        },
    ];

    locationRules.forEach(;
})();

(();

ClickTaleSettings.PTC.AssetManager = {
    isActive: true,
    isNeedForImg: false,
    subscriberId: "233107",
    pid: "8",
    storageUrl: "https://s3.amazonaws.com/nv-p1-s3-assets-01/",
    prefixSpecialCharacters: false,
    getPrefixUrl: 
    getFullURL: 
    init: 
};
ClickTaleSettings.PTC.AssetManager.init();

ClickTaleSettings.PTC.ConfigChangeMonitor = function () {
    var excludeBothArray = ["svg", "g", "circle", "rect", "line", "path"];

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
	    pccSrc += '31c5892c-0834-4705-9963-6ce6c5f92ca2.js?DeploymentConfigName=Release_20220817&Version=1';
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
	var PID=8, 
		Ratio=1, 
		PartitionPrefix="www29",
		SubsId=233107;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
	if (navigator.userAgent && navigator.userAgent.indexOf("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36") > -1) {
    return;
}

window._uxa = window._uxa || [];
window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleSettings.PTC.CustomVariables = window.ClickTaleSettings.PTC.CustomVariables || [];
window.ClickTaleSettings.PTC.CustomVariables = [
    {
        displayName: "Pagename",
        key: "pageName",
        slot: 1,
    },
    {
        displayName: "Line of Business",
        key: "prop58",
        slot: 2,
    },
];

if (document.cookie.indexOf("_cs_cvars") > -1 && (document.cookie.toLowerCase().indexOf("|cc|") > -1 || document.cookie.toLowerCase().indexOf("%7ccc%7c") > -1)) {
    document.cookie = "_cs_cvars=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.centurylink.com";
}

function sendCVar() {
    var dataS = window["s"];
    var dataDigital = !!window.digitalData && !!window.digitalData.page && window.digitalData.page.pageInfo;
    if (!!dataS || !!dataDigital) {
        for (var i = 0; i < window.ClickTaleSettings.PTC.CustomVariables.length; i++) {
            var cvar = window.ClickTaleSettings.PTC.CustomVariables[i];
            if (cvar["key"] == "pageName" && !!dataS) {
                if (!!dataS[cvar["key"]] && dataS[cvar["key"]].toLowerCase().indexOf("|cc|") == -1) {
                    window._uxa.push(["setCustomVariable", cvar.slot, cvar.displayName, dataS[cvar["key"]].split("#")[0]]);
                } else if (!!dataDigital && !!dataDigital[cvar["key"]] && dataDigital[cvar["key"]].toLowerCase().indexOf("|cc|") == -1) {
                    window._uxa.push(["setCustomVariable", cvar.slot, cvar.displayName, dataDigital[cvar["key"]].split("#")[0]]);
                }
            } else if (!!dataS && !!dataS[cvar["key"]] && dataS[cvar["key"]].toLowerCase().indexOf("|cc|") == -1) {
                window._uxa.push(["setCustomVariable", cvar.slot, cvar.displayName, dataS[cvar["key"]].split("#")[0]]);
            }
        }
    } else {
        if (document.cookie.indexOf("_cs_cvars") > -1) {
            document.cookie = "_cs_cvars=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.centurylink.com";
        }
    }
}
window.ClickTaleOnStop = window.ClickTaleOnStop || [];
ClickTaleOnStop.push(sendCVar);
sendCVar();

//Start: IMP-1950
if (window.location.href.indexOf("#") > -1) {
    window._uxa.push(["setPath", window.location.pathname + window.location.hash.replace("#", "?__")]);
}
//End: IMP-1950

var time = 0;
var interval = 0;

if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
}

window.ClickTaleSettings.PTC.InitFuncs = window.ClickTaleSettings.PTC.InitFuncs || [];
window.ClickTaleSettings.PTC.InitFuncs.push(;

window.ClickTaleSettings.PTC.InitFuncs.push(function () {
    var ctHref = window.location.href.toLowerCase();
    ClickTaleSettings.DOM.PII = ClickTaleSettings.DOM.PII || {};
    if (
        (location.hostname == "controlcenter.lumen.com" || location.hostname == "admin-controlcenter.centurylink.com") &&
        ctHref.indexOf("/business/controlcenter/commercial/#/home") == -1 &&
        ctHref.indexOf("/enterprise/admin/users") == -1 &&
        ctHref.indexOf("/enterprise/admin/manage-enterprises") == -1 &&
        ctHref.indexOf("/enterprise/admin/accounts") == -1 &&
        ctHref.indexOf("/enterprise/notifications/admin") == -1 &&
        ctHref.indexOf("/portalweb/mylevel3") == -1 &&
        ctHref.indexOf("/inventory/inventory/") == -1 &&
        ctHref.indexOf("/inventory/other-inventory") == -1 &&
        ctHref.indexOf("/orders/order-status") == -1 &&
        ctHref.indexOf("/emgcms/janus/angularjs/ordering/") == -1 &&
        ctHref.indexOf("/enterprise/service-mgmt/ticketing") == -1 &&
        ctHref.indexOf("/enterprise/service-mgmt/scheduled-maintenance") == -1 &&
        ctHref.indexOf("/enterprise/network/map/utilization") == -1 &&
        ctHref.indexOf("/enterprise/network-topology/network") == -1 &&
        ctHref.indexOf("/reports/") == -1 &&
        ctHref.indexOf("/billing") == -1 &&
        ctHref.indexOf("/orders/shop-page") == -1 &&
        ctHref.indexOf("/orders/explore-products") == -1 &&
        ctHref.indexOf("/enterprise/error/440") == -1
    ) {
        ClickTaleSettings.DOM.PII.UseAutoMasking = true;
        ClickTaleSettings.DOM.PII.MaskingChar = "A";
        if (typeof ClickTaleEvent === "function") {
            ClickTaleEvent("AAA");
        }
    } else {
        ClickTaleSettings.DOM.PII.UseAutoMasking = false;
    }
});

function doUpload() {
    if (typeof ClickTaleUploadPageNow === "function" && ClickTaleIsRecording()) {
        if (window.ClickTaleSettings.PTC.isReadyToRecordNotDelayed) {
            if (location.href.toLowerCase().indexOf("#module=choice") > -1) {
                if (typeof ClickTaleEvent === "function") {
                    ClickTaleEvent("page uploaded module=choice");
                }
            } else if (typeof ClickTaleEvent === "function") {
                ClickTaleEvent("page uploaded");
            }
            ClickTaleUploadPageNow();
            window.ClickTaleSettings.PTC.UploadPageHappened = true;
        }
    }
}

function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow === "function" && ClickTaleIsRecording()) {
        if (location.href.toLowerCase().indexOf("shop.centurylink.com/new") > -1) {
            return document.querySelectorAll("img[alt*='Loading']").length == 0;
        }
        window.ClickTaleSettings.PTC.isReadyToRecordNotDelayed = true;
        return true;
    }
    return false;
}

if (typeof ClickTaleDelayUploadPage === "function") {
    ClickTaleDelayUploadPage();

    if (window.top !== window.self) {
        ClickTaleEvent("iFrame");
    }

    if (location.href.toLowerCase().indexOf("shop.centurylink.com/new") > -1) {
        time = 1000;
        interval = 10;
    } else {
        time = 500;
        interval = 8;
    }

    window.ClickTaleSettings.PTC.doOnlyWhen(doUpload, isReadyToRecord, time, interval, function () {
        if (location.href.toLowerCase().indexOf("shop.centurylink.com/new") > -1 && typeof ClickTaleEvent === "function") {
            ClickTaleEvent("Event | time passed!");
        }
        doUpload();
    });

    var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;
    for (var i = 0, initLen = initFuncs.length; i < initLen; i++) {
        if (typeof initFuncs[i] === "function") {
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









//Signature:Cf4LSRV/RM1M3RgGj5c1PRH6nrMA7bOXGkmKjmuXSRhdkEx7FRAXqGJHJ+udDLDZvNxcn0ky8FTivM7rJq4ri6APtozN+1qvCEuw36s3PQB9e6VucuXYlo3mDP3AVOUsN15dHBdGZs/o/BaApWCJKVc/yGGeoGx80AqgDulqoPw=