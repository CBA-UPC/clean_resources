// Copyright 2006-2022 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.versions = {"wr": "bridge-WR110.js", "pcc": "551bcaec-da93-4dc4-98cd-7797150f4957.js?DeploymentConfigName=Malka_20211220&Version=1"};
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
						var doms = ["oPRRVZoPhZBBTVhqw"];
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
	
		
// Copyright 2006-2022 ClickTale Ltd., US Patent Pending
// PID: 1094
// WR destination: www41
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
//PTC Code Version 10.3

window.ClickTaleSettings = window.ClickTaleSettings || {};
ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};
ClickTaleSettings.Compression = ClickTaleSettings.Compression || {};
ClickTaleSettings.Compression.Method = 
ClickTaleSettings.Transport = ClickTaleSettings.Transport || {};
(();
ClickTaleSettings.Protocol = ClickTaleSettings.Protocol || {};
ClickTaleSettings.Protocol.Method = "ImpactRecorder";
if (window.Zone && typeof Zone['__symbol__'] === 'function') {
    ClickTaleSettings.PTC.restoreZonedXHR = 

    window.ClickTaleOnXHRCreated = 
}
if (document.readyState === 'complete') {
    window.ClickTaleIncludedOnWindowLoad = true;
}
window.ClickTaleIncludedOnDOMReady = true;
ClickTaleSettings.PTC.Integrations = window.ClickTaleSettings.PTC.Integrations || [];
window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UploadPageHappened = false;
window.ClickTaleSettings.PTC.IsMobile = false;
window.ClickTaleSettings.PTC.textRegex = /\w|[^\x00-\x7F]/g;

if (window.ClickTaleMonitor) {
    var settings = window.ClickTaleMonitor.Settings.get();
    settings.configure({
        identification: {
            cookie: {
                useBase64: true
            }
        }
    });
}

ClickTaleSettings.CheckAgentSupport = 

ClickTaleSettings.PTC.startsWith = 

ClickTaleSettings.DOM = ClickTaleSettings.DOM || {};

;
(function () {
    var selectorForBoth = 'selector';

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
        Text: [selectorForBoth],
        Attributes: [{
            rule: selectorForBoth,
            attr: 'value'
        }] //,
        //Transform: transform
    };

    /**
     *
     * @param {!CSSStyleSheet} adoptedStyleSheets
     */
    function getSerializedNode(adoptedStyleSheets) {
        var textArray = [];
        adoptedStyleSheets.forEach(;
        if (textArray.length) {
            return {
                nodeType: 1,
                tagName: "style",
                attributes: {
                    "data-addoptedCSS": "true"
                },
                childNodes: [{
                    "nodeType": 3,
                    "textContent": textArray.join('\r\n')
                }]
            }
        }
        return null;
    }

    /**
     *
     * @param {!(DocumentOrShadowRoot|Element)} root
     */
    

    ClickTaleSettings.DOM.Serializer = ClickTaleSettings.DOM.Serializer || {};

    ClickTaleSettings.DOM.Serializer.OnAfterSerialize = 


    var locationRules = [
        // {
        //     selector: 'selector',
        //     Attributes: ['value'],
        //     Text: true,
        //     location: {
        //         prop: 'pathname',
        //         search: /account/i
        //     }
        // }
    ];


    locationRules.forEach(;
})();



;
(();

ClickTaleSettings.PTC.AssetManager = {
    isActive: false,
    isNeedForImg: false,
    subscriberId: '',
    pid: '',
    storageUrl: 'https://s3.amazonaws.com/nv-p1-s3-assets-01/',
    prefixSpecialCharacters: false,
    getPrefixUrl: 
    getFullURL: 
    init: 
};
ClickTaleSettings.PTC.AssetManager.init();

ClickTaleSettings.PTC.ConfigChangeMonitor = function () {
    var excludeBothArray = [];

    ClickTaleSettings.ChangeMonitor = {
        Enable: ClickTaleSettings.PTC.EnableChangeMonitor,
        // Roots: [document.body],
        Exclude: {
            ChildNodes: [],
            Attributes: []
        }

    }

    var exclude = ClickTaleSettings.ChangeMonitor.Exclude;
    if (excludeBothArray.length > 0) {
        Array.prototype.push.apply(exclude.ChildNodes, excludeBothArray);
        Array.prototype.push.apply(exclude.Attributes, excludeBothArray);
    }

    

    // if (document.location.pathname === '/') {
    //     insertIntoBoth("selector");
    // }

    if (typeof window.ClickTaleCMSelector === 'string' && window.ClickTaleCMSelector != '') {
        try {
            var domNodes = document.querySelector(ClickTaleCMSelector);
            insertIntoBoth(ClickTaleCMSelector);
        } catch (err) {
            if (typeof ClickTaleNote === 'function') {
                ClickTaleNote('Bad CM selector: ' + encodeURIComponent(ClickTalePIISelector));
            }
        }
    }
};

ClickTaleSettings.PTC.doOnlyWhen = 


function ClickTaleOnRecording() {

    (function () {
        function init() {
            var uxaGet = _uxa.push(["getSessionData"]);
            if (uxaGet && uxaGet.projectId) {
                var pid = uxaGet.projectId;
                var uu = uxaGet.userId;
                var sn = uxaGet.sessionNumber;
                var pvid = uxaGet.pageNumber;
                if (pid && uu && sn && pvid) {
                    var intLink = "https://app.contentsquare.com/quick-playback/index.html?pid=" + pid + "&uu=" + uu + "&sn=" + sn + "&pvid=" + pvid + "&vd=csrl";
                    window.ClicktaleReplayLink = 
                    if (window.CS_CONF) {
                        CS_CONF.replaylink = intLink;
                    }
                }
            }
        }

        
        var disableCallback = false;
        window._uxa = window._uxa || [];
        _uxa.push(['afterPageView', callback]);
    })();

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
	    pccSrc += '551bcaec-da93-4dc4-98cd-7797150f4957.js?DeploymentConfigName=Malka_20211220&Version=1';
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
	var PID=1094, 
		Ratio=1, 
		PartitionPrefix="www41",
		SubsId=233406;
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return;
	};
		
	
	// Start of user-defined header code (PreInitialize)
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

function isReadyToRecord() {
    if (typeof ClickTaleUploadPageNow === 'function' && ClickTaleIsRecording()) {
        if (document.location.href.indexOf("") > -1) {
            return true;
        } else {
            return true;
        }
    }
    return false;
};

ClickTaleDelayUploadPage();

//AB Test Integration Timeout
setTimeout(1000);

var initFuncs = window.ClickTaleSettings.PTC.InitFuncs;
for (var i = 0, initLen = initFuncs.length; i < initLen; i++) {
    if (typeof initFuncs[i] === 'function') {
        initFuncs[i]();
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









//Signature:kYhb1qTrwc02P5lRuuGqSCi5FYV7dUQ/Q8nRwG80gFcWIPSpyp7sOJ2B+B4P7tT7cjzdd5y1rJsuLWnGoutewJ1b4eOnT1bhWX67ndCsBG5y2aqTGK5cZPJ3GO+Fs+Ez+ZYTOMkVaOre4J0UPtwDrM46DRnbe86LKC319TmJG+s=