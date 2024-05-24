			// <script type="text/javascript">
			(function () {
				var SekindoClientDynamicConfig = function (config, prob)
{
	this.MOBILE_MAX_WIDTH = 415;
	this.config = config;
	this.prob = prob;

	var ref = this;

	this.sizeSetup = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length-1; i++)
		{
			if (rules[i][0] <= ref.prob.window.width)
			{
				selectedRule = rules[i];
				break;
			}
		}

		ref.config.unit.width = selectedRule[0];
		ref.config.unit.height = selectedRule[1];
	};

	var compareObjectsByKeys = function(obj1, obj2)
	{
		for (var key in obj1)
		{
			if (typeof obj1[key] == "object" && obj2.hasOwnProperty(key) && typeof obj2[key] == "object")
			{
				if (!compareObjectsByKeys(obj1[key],obj2[key]))
				{
					return false;
				}
				continue;
			}
			if (!obj2.hasOwnProperty(key) || obj1[key] != obj2[key])
			{
				return false;
			}
		}
		return true;
	};
	
	this.clientInfoSetup = function(rules)
	{
		var clientInfoRule = rules[0];
		if (compareObjectsByKeys(clientInfoRule, ref.prob.ci))
		{
			var configRule = rules[1];
			for (var property in configRule)
			{
				ref.config[property] = configRule[property];
			}
		}
	};

	this.deviceTypeSetup = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length-1; i++)
		{
			if (rules[i][0].toLowerCase() == ref.prob.ci.deviceType.toLowerCase())
			{
				selectedRule = rules[i];
				break;
			}
		}

		ref.config.unit.width = selectedRule[1];
		ref.config.unit.height = selectedRule[2];

		if (selectedRule[3] != 'undefined' && selectedRule[3].length > 0)
		{
			var floatSetup = selectedRule[3];
			if (floatSetup[0] === 1)
			{
				if (!ref.isStickyVideoType())
				{
					ref.config.videoType = 'flow';
				}
			}
			else
			{
				if (ref.isStickyVideoType())
				{
					ref.config.url += '&blockAlwaysSticky=1';
				}
				ref.config.videoType = 'normal';
			}

			ref.config.floatConfig.width = floatSetup[1];
			ref.config.floatConfig.height = floatSetup[2];
			ref.config.floatConfig.direction = floatSetup[3];
			ref.config.floatConfig.verticalOffset = floatSetup[4];
			ref.config.floatConfig.horizontalOffset = floatSetup[5];
			ref.config.floatConfig.isCloseBtn = floatSetup[6];
		}
	};

	this.tabletFloatSetup = function(rules)
	{
		if (rules[0].toLowerCase() == ref.prob.ci.deviceType.toLowerCase())
		{
			if (rules[1][0] === 1)
			{
				var floatSetup = rules[1];
				if (!ref.isStickyVideoType())
				{
					ref.config.videoType = 'flow';
				}
				ref.config.floatConfig.width = floatSetup[1];
				ref.config.floatConfig.height = floatSetup[2];
				ref.config.floatConfig.direction = floatSetup[3];
				ref.config.floatConfig.verticalOffset = floatSetup[4];
				ref.config.floatConfig.horizontalOffset = floatSetup[5];
				ref.config.floatConfig.isCloseBtn = floatSetup[6];
				ref.config.floatConfig.flowMode = floatSetup[7];
				ref.config.floatConfig.closeBtnPos = floatSetup[8];
			}
			else
			{
				if (ref.isStickyVideoType())
				{
					ref.config.url += '&blockAlwaysSticky=1';
				}
				ref.config.videoType = 'normal';
			}
		}
	}

	this.sliderSetup = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length-1; i++)
		{
			if (rules[i][0] <= ref.prob.window.width)
			{
				selectedRule = sizes[i];
				break;
			}
		}

		ref.config.unit.width = selectedRule[0];
		ref.config.unit.height = selectedRule[1];
	}

	this.floatSetupSetDefaults = function (selectedRule)
	{
		// Floating display timeout after close float button has clicked
		if (typeof selectedRule['flowCloseTimeout'] === 'undefined' || selectedRule['flowCloseTimeout'] === '')
		{
			selectedRule['flowCloseTimeout'] = 0;
		}
		// Floating close button position
		if (typeof selectedRule['closeBtnPos'] === 'undefined' || selectedRule['closeBtnPos'] != 'left')
		{
			selectedRule['closeBtnPos'] = 'right';
		}
		return selectedRule;
	}
	
	this.floatSetupSelectRule = function (rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length-1; i++)
		{
			if (rules[i]['screenWidthSize'] < ref.prob.window.width)
			{
				if (typeof rules[i]['screenHeightSize'] !== 'undefined' && rules[i]['screenHeightSize'] != -1)
				{
					if (rules[i]['screenHeightSize'] < ref.prob.window.height)
					{
						selectedRule = rules[i];
						break;
					}
					else
					{
						continue;
					}
				}
				else
				{
					selectedRule = rules[i];
					break;
				}
			}
		}
		return ref.floatSetupSetDefaults(selectedRule);
	}
	
	this.floatSetup = function(rules)
	{
		var selectedRule = ref.floatSetupSelectRule(rules);
		
		if (selectedRule['enabled'] === 1)
		{
			if (!ref.isStickyVideoType())
			{
				ref.config.videoType = 'flow';
			}
		}
		else
		{
			if (ref.isStickyVideoType())
			{
				ref.config.url += '&blockAlwaysSticky=1';
			}
			ref.config.videoType = 'normal';
		}

		ref.config.floatConfig = selectedRule;
		
		// Allow floating for only given GEO code
		if (typeof selectedRule['allowFloatingGeo'] !== 'undefined' && selectedRule['allowFloatingGeo'] !== '' && selectedRule['allowFloatingGeo'].indexOf(ref.prob.geo) == -1 && selectedRule['allowFloatingGeo'].indexOf('ALL_GEO') == -1)
		{
			ref.config.videoType = 'normal';
		}

		// Prevent floating for given GEO code
		if (typeof selectedRule['disallowFloatingGeo'] !== 'undefined' && selectedRule['disallowFloatingGeo'] !== '' && selectedRule['disallowFloatingGeo'].indexOf(ref.prob.geo) != -1 && selectedRule['disallowFloatingGeo'].indexOf('NO_DISALLOW_GEO') == -1)
		{
			ref.config.videoType = 'normal';
		}

		// Prevent floating for given DMA code
		if (typeof selectedRule['dmaList'] !== 'undefined' && selectedRule['dmaList'].indexOf(ref.prob.dmaCode) != -1)
		{
			ref.config.videoType = 'normal';
		}
	}

	this.clientSideSetup = function (rules) {
		var clientSideRules = rules[0];
		var configRule = rules[1];
		for (var clientProperty in clientSideRules)
		{
			if (eval(clientProperty) == clientSideRules[clientProperty])
			{
				for (var property in configRule)
				{
					ref.config[property] = configRule[property];
				}
			}
		}
	}

	this.playerDivSetup = function(rules)
	{
		if (typeof rules.mainElement !== 'undefined' && rules.mainElement["type"] && rules.mainElement["name"])
		{
			if (rules.mainElement["type"] == "id")
			{
				ref.config.playerDivSetup.elmtId = rules.mainElement["name"];
			}
			else if (rules.mainElement["type"] == "class")
			{
				ref.config.playerDivSetup.elmtClassName = rules.mainElement["name"];
			}
			else if (rules.mainElement["type"] == "querySelector")
			{
				ref.config.playerDivSetup.querySelector = rules.mainElement["name"];
			}

			if (typeof rules.mainElementNumber !== 'undefined')
			{
				ref.config.playerDivSetup.mainElementNumber = rules.mainElementNumber;
			}

			if (typeof rules.childElement !== 'undefined')
			{
				if (rules.childElement["type"] == "id")
				{
					ref.config.playerDivSetup.childElement = {};
					ref.config.playerDivSetup.childElement.elmtId = rules.childElement["name"];
				}
				else if (rules.childElement["type"] == "class")
				{
					ref.config.playerDivSetup.childElement = {};
					ref.config.playerDivSetup.childElement.elmtClassName = rules.childElement["name"];
				}
			}

			if (typeof rules.childElementNumber !== 'undefined')
			{
				ref.config.playerDivSetup.childElementNumber = rules.childElementNumber;
			}

			if (typeof rules.childElementTagName !== 'undefined')
			{
				ref.config.playerDivSetup.childElementTagName = rules.childElementTagName;
			}

			if (typeof rules.insertPosition !== 'undefined')
			{
				ref.config.playerDivSetup.insertPosition = rules.insertPosition;
			}
		}
	}

	this.newParamMapping = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length; i++)
		{
			var tagAdd='';
			var oldParam = rules[i][0];
			var newParam = rules[i][1];

			var regex = new RegExp("(\\?|&)"+oldParam+"\\=([^&]*)");
			var oldParamValue = ref.config.url.match(regex);
			if (oldParamValue && oldParamValue[2] != undefined)
			{
				ref.config.url += '&'+newParam+'='+oldParamValue[2];
			}
		}
	}

	this.templateOverride = function(rules)
	{
		var overrideAllowed = true;
		if ((typeof rules.screenSize != 'undefined') && (typeof rules.screenSize[0] != 'undefined'))
		{
			overrideAllowed = ref.prob.window.width < rules.screenSize[0];
			if (overrideAllowed && (typeof rules.screenSize[1] != 'undefined'))
			{
				overrideAllowed = ref.prob.window.height < rules.screenSize[1];
			}
		}
		if (typeof rules.deviceType != 'undefined')
		{
			overrideAllowed = ref.prob.ci.deviceType.toLowerCase() == rules.deviceType.toLowerCase();
		}
		if (overrideAllowed && (typeof rules.newTemplateId != 'undefined'))
		{
			ref.config.vp_template = rules.newTemplateId;
		}
	}

	this.generalEmptyConfig = function (){}

	this.getDynamicConfigParams = function(i, deviceType)
	{
		var configEntity = '';
		var funcName = this.config.dynamicSetup[i][0];
		if (funcName === 'playerDivSetup' && this.config.dynamicSetup[i][1][0] && deviceType)
		{
			for (var j=0; j<this.config.dynamicSetup[i][1].length; j++)
			{
				if (this.config.dynamicSetup[i][1][j][deviceType])
				{
					configEntity = [funcName, this.config.dynamicSetup[i][1][j][deviceType]];
				}
			}
		}
		else
		{
			configEntity = [funcName, this.config.dynamicSetup[i][1]];
		}
		return configEntity;
	}

	this.run = function()
	{
		var deviceType = ref.prob.ci.deviceType.toLowerCase();
		for (var i=0; i<this.config.dynamicSetup.length; i++)
		{
			var dynamicConfigEntity = this.getDynamicConfigParams(i, deviceType);
			if (dynamicConfigEntity && dynamicConfigEntity[0] && dynamicConfigEntity[1])
			{
				try
				{
					var func = this.functionMap[dynamicConfigEntity[0]];
					func(dynamicConfigEntity[1]);
				}
				catch (e)
				{
					console.log(e.message);
				}
			}
		}
	}

	this.functionMap = {'sizeSetup' : this.sizeSetup,
						'floatSetup' : this.floatSetup,
						'deviceTypeSetup' : this.deviceTypeSetup,
						'tabletFloatSetup' : this.tabletFloatSetup,
						'playerDivSetup' : this.playerDivSetup,
						'clientInfoSetup' : this.clientInfoSetup,
						'clientSideSetup' : this.clientSideSetup,
						'newParamMapping' : this.newParamMapping,
						'templateOverride' : this.templateOverride,
						'playlistTargeting' : this.generalEmptyConfig
	};

	this.isStickyVideoType = function()
	{
		return ref.config.videoType == 'sticky';
	}
};
var SekindoClientDetections_URL = function (config) {
	/* Functions needed for constructor */
	this._getDiscoverableUrl = function()
	{
		var url = '';

		try
		{
			if (window.top == window)
			{
				url = window.location.href;
			}
			else
			{
				try
				{
					url = window.top.location.href;
				}
				catch (e2)
				{
					url = document.referrer;
				}
			}

			url = url.substring(0, 1500);
		}
		catch(e1) {}

		return url;
	}

	this._setCheckerWidget = function(allowedType)
	{
		switch (allowedType)
		{
			case "0":
				config.allowViewabilityCheck = false;
				config.allowUserScrollCheck  = false;
				break;

			case "1":
				config.allowViewabilityCheck = true;
				config.allowUserScrollCheck  = false;
				break;

			case "2":
				config.allowViewabilityCheck = false;
				config.allowUserScrollCheck  = true;
				break;
		}
	}

	this._initDebugCheck = function(config)
	{
		var debugParam, debugParamsRExp = RegExp('(\\?|&)(sekDbg_[^\=&]+)\=([^&]*)', 'gi');
		var pageUrl = this._getDiscoverableUrl();
		while ((paramMatch = debugParamsRExp.exec(pageUrl)) !== null)
		{
			debugParam = paramMatch[2].replace('sekDbg_', '');
			debugParam = debugParam.replace('sekdbg_', '');
			switch (debugParam)
			{
				case 'x':
					config.x = paramMatch[3];
					break;
				case 'y':
					config.y = paramMatch[3];
					break;
				case 'videoType':
					config.videoType = paramMatch[3];
					break;
				case 'perform':
					this._setCheckerWidget(paramMatch[3]);
					break;
				case 'log':
					config.debug = paramMatch[3];
					break;
			}
		};
	}

	/* Constructor */
	this._initDebugCheck(config);
	this.COOKIE_TIMEOUT = 7*24*60*60;
	this.VIDEO_HELPER_PARAM_NAME = 'videoHelperParam';
	this.VIDEO_SHARED_PARAM_NAME = config.sharedVideoParameterName;
	this.VIDEO_GAM_TARGETING_PARAM_NAME = config.gamTargetingVideoParameterName;

	this.floatConfig = config.floatConfig;
	this.videoType = config.videoType;
	this.frameInfo = {
		isInsideGoogleFrame: false,
		isBuildFrame: false,
		isBuildFrameViaJs : false
	};
	this.needWrappingIframe = config.needWrappingIframe;
	this.isAmpProject = config.isAmpProject;
	this.isAmpIframe = config.isAmpIframe;
	this.isAPI = config.isAPI;
	this.sizesList = config.sizesList;
	this.x = config.x;
	this.y = config.y;
	this.url = config.url;
	this.origQString = config.origQString;
	this.debug = config.debug;
	this.ci = config.ci;
	this.isFpCookie = config.isFpCookie;
	this.geo = config.geo;
	this.dmaCode = config.dmaCode;
	this.dynamicSetup = config.dynamicSetup;
	this.prob = {};
	this.uuid = config.uuid;
	this.isResponsiveBanner = config.isResponsiveBanner;
	this.hideOnMissingMainElement = config.hideOnMissingMainElement;
	this.allowedUtmParameters = config.allowedUtmParameters;
	this.placementId = config.placementId;
	this.allowDisplaySamePlacementAgain = config.allowDisplaySamePlacementAgain;
	this.blockOtherPlacements = config.blockOtherPlacements;
	this.searchByMetaTagName = config.searchMetaTagNames;
	this.customTargetingProperties = config.customTargetingProperties;
	this.customPpidMapping = config.customPpidMapping;
	this.helperParameters = {};
	this.placementType = config.placementType;
	this.isApp = config.isApp;
	this.rootWindow = null;
	this.elementChecker = {};
	this.observerElement = null;
	this.observedElementInfo   = {viewabilityThreshold:config.playerInViewPrc, isViewable:false, hasScrolled:false};
	this.allowViewabilityCheck = config.allowViewabilityCheck;
	this.allowUserScrollCheck  = config.allowUserScrollCheck;
	this.isIpad = false;
	this.isRun = config.isRun;
	this.isPlayerApiActions = config.isPlayerApiActions;

	this.startTs = new Date().getTime();
	if (this.debug)
		console.log("SEKDBG: Starting timer towards timeout");

	this.getScriptElement = function()
	{
		if (typeof this.config.playerDivSetup.elmtClassName !== 'undefined' || typeof this.config.playerDivSetup.elmtId !== 'undefined' || typeof this.config.playerDivSetup.querySelector !== 'undefined')
		{
			try
			{
				if (this.debug)
				{
					console.log("SEKDBG: playerDivSetup config");
					console.log(this.config.playerDivSetup);
				}
				var specialElmt = this._getPlayerMainElement(window.top);
				if (specialElmt && typeof specialElmt !== 'undefined')
				{
					this.srcElement = specialElmt;
					if (this.debug)
					{
						console.log("SEKDBG: playerDivSetup element");
					}
					return;
				}
				if (typeof specialElmt === 'undefined' && this.hideOnMissingMainElement)
				{
					if (this.debug)
					{
						console.log("SEKDBG: Main element is missing");
					}
					this.srcElement = null;
					return;
				}
			}
			catch (e)
			{
				if (this.debug)
				{
					console.log("SEKDBG: playerDivSetup get specialElmt error - " + e.message);
				}
			}
		}

		if (document && typeof document.currentScript !== 'undefined')
		{
			if (this.debug)
				console.log("SEKDBG: currentScript is supported");
			this.srcElement = document.currentScript;
		}
		else if (document)
		{
			if (this.debug)
				console.log("SEKDBG: currentScript is not supported");
			try
			{
				/* IE 11 and below does not support currentScript */
				var scriptsList = [];
				if (typeof document.scripts !== 'undefined' && document.scripts)
				{
					if (this.debug)
						console.log("SEKDBG: document.scripts is supported");
					scriptsList = document.scripts;
				}
				else
				{
					if (this.debug)
						console.log("SEKDBG: document.scripts is not supported");
					scriptsList = document.getElementsByTagName('script');
				}
				for (var len = scriptsList.length, i = len; i >= 0; i --)
				{
					var scriptCandidate = scriptsList[i];
					if (scriptCandidate && scriptCandidate.src && scriptCandidate.src.indexOf(this.origQString) != -1)
					{
						this.srcElement = scriptCandidate;
						break;
					}
				}
			}
			catch (e)
			{
				this.srcElement = null;
			}
		}
	}

	this._getUuid = function()
	{
		if (this.isFpCookie)
		{
			try
			{
				var uuid = window.document.cookie.replace(/(?:(?:^|.*;\s*)csuuidSekindo\s*\=\s*([^;]*).*$)|^.*$/, "$1");
				if (uuid != '')
				{
					this.uuid = uuid;
				}

				window.document.cookie = "csuuidSekindo="+ this.uuid +"; max-age=" + this.COOKIE_TIMEOUT + "; path=/";
			}
			catch (e)
			{
				this.uuid = null;
			}
		}
		else
		{
			this.uuid = null;
		}
	}

	this._handleDebugParams = function(param, value)
	{
		if (!param)
			return;
		param = param.replace('sekDbg_view_', '');
		switch (param)
		{
			case 'x':
				this.config.unit.width = value;
				break;
			case 'y':
				this.config.unit.height = value;
				break;
			case 'videoType':
				this.config.videoType = value;
				break;
			case 'flowMode':
				this.config.floatConfig.flowMode = value;
				break;
			case 'flowIsCloseBtn':
				this.config.floatConfig.isCloseBtn = value;
				break;
			case 'flowDirection':
				this.config.floatConfig.direction = value;
				break;
			case 'flowCloseButtonPosition':
				this.config.floatConfig.closeBtnPos = value;
				break;
		}
	}

    this._checkAvailCampaigns = function (pageUrl) {
        var matches = pageUrl.match(/(\?|&)availCampaigns\=([0-9,]*)([^0-9,]*)&?/i);
        if (matches && matches.length > 3 && matches[3] !== "")
            return "0";
        return (matches && matches.length > 1 && matches[2] ? matches[2] : null);
    }

	this._checkStartOverDebug = function(pageUrl)
	{
		debugIp = pageUrl.match(/(\?|&)customServerPrimis\=([^&]*)(.*)?$/i);
		if (this.isApp)
		{
			debugIp = this.url.match(/(\?|&)customServerPrimis\=([^&]*)(.*)?$/i);
		}
		if (debugIp)
		{
			this.url = this.url.replace("live.primis.tech",debugIp[2]).replace("live.sekindo.com",debugIp[2]);
			if (debugIp[3])
				this.url += debugIp[3];
		}
		debugId = pageUrl.match(/(\?|&)debugPlayerSession\=([^&]*)/i);
		if (debugId)
		{
			this.url = this.url+'&debugPlayerSession='+debugId[2];
		}

		var debugParamsRExp = RegExp('(\\?|&)(sekDbg_[^\=&]+)\=([^&]*)', 'g');
		while ((paramMatch = debugParamsRExp.exec(pageUrl)) !== null)
		{
			this.url = this.url+'&'+paramMatch[2]+'='+paramMatch[3];
			this._handleDebugParams(paramMatch[2], paramMatch[3]);
		};
	}

	this.setInfo = function()
	{
		var pageUrl = this._getDiscoverableUrl();

		this._checkStartOverDebug(pageUrl);

		if (this.config.unit.width == 0)
			return;

		var availCampaigns = this._checkAvailCampaigns(pageUrl);
		if (availCampaigns)
			this.url += '&availCampaigns=' + availCampaigns;

		if (this.isAmpProject || this.isAmpIframe) {
			this.url += '&pubUrlAuto=';// + encodeURIComponent(pageUrl);
		} else {
			this.url += '&pubUrlAuto=' + encodeURIComponent(pageUrl);
		}
		this.url = this.url.replace('SEKXLEN', this.config.unit.width);
		this.url = this.url.replace('SEKYLEN', this.config.unit.height);
		this.url = this.url.replace("'", '%27');

		this._getUuid();
		if (this.uuid != null)
		{
			this.url += '&csuuid=' + encodeURIComponent(this.uuid);
		}
		
		if (this.config.placementConfig)
		{
			for (var property in this.config.placementConfig)
			{
				this.url += '&' + property + '=' + this.config.placementConfig[property];
			}
		}

		if (this.config.videoType == 'normal')
		{
			this.url += '&videoType=normal';
		}
		else if (this.config.videoType == 'flow' || this.config.videoType == 'sticky' || this.config.videoType == 'slider')
		{
			this.url += '&videoType=' + this.config.videoType + '&floatWidth=' + this.config.floatConfig.width + '&floatHeight=' + this.config.floatConfig.height +
				'&floatDirection=' + this.config.floatConfig.direction + '&floatVerticalOffset=' + this.config.floatConfig.verticalOffset + '&floatHorizontalOffset=' + this.config.floatConfig.horizontalOffset +
				'&floatCloseBtn=' + this.config.floatConfig.isCloseBtn + '&flowMode='+this.config.floatConfig.flowMode + '&flowCloseButtonPosition=' + this.config.floatConfig.closeBtnPos;
		}

		if (typeof this.config.vp_template != 'undefined')
		{
			this._setReplaceUrlParam('vp_template', this.config.vp_template);
		}

		if (this.allowedUtmParameters && this.allowedUtmParameters.length > 0)
		{
			this._setUtmParameters(pageUrl);
		}

		try
		{
			// We assume we are the only element/advertiser inside DFP iframe
			var w = window;
			this.rootWindow = w.parent;
			do
			{
				var wf = w.frameElement;
				while (wf != null)
				{
					if (wf.parentNode.id.indexOf('div-gpt-ad') != -1)
					{
						this.frameInfo.isInsideGoogleFrame = true;
						break;
					}
					wf = wf.parentNode;
				}
				w = w.parent;
			} while (w != w.parent);
			this.rootWindow = w;
			if (this.debug)
			{
				console.log("SEKDBG: [INFO] window element");
				console.log(w);
			}
		}
		catch(e)
		{
			if (this.debug)
			{
				console.log("SEKDBG: [INFO] " + e.name + ": " + e.message);
			}
		}
		try
		{
			if (!this.frameInfo.isInsideGoogleFrame)
			{
				if (window.frameElement.id.indexOf('google_ads_iframe') != -1)
				{
					this.frameInfo.isInsideGoogleFrame = true;
					this.frameInfo.googleFrameId = window.frameElement.id;
					if (this.debug)
					{
						console.log("SEKDBG: [INFO] frame ID: " + this.frameInfo.googleFrameId);
						console.log("SEKDBG: [INFO] parent element");
						console.log(this.rootWindow);
					}
				}
			}
		}
		catch (e)
		{
			if (this.debug)
			{
				console.log("SEKDBG: [INFO] - " + e.name + ": " + e.message);
			}
		}

		this.frameInfo.isBuildFrame = (this.needWrappingIframe && !this.frameInfo.isInsideGoogleFrame) || this.isAmpProject || (typeof this.config.playerDivSetup.elmtClassName !== 'undefined' || typeof this.config.playerDivSetup.elmtId !== 'undefined' || typeof this.config.playerDivSetup.querySelector !== 'undefined');
		/* Async exec requires isBuildFrame */
		// TODO:: should recognize and build iframe throgh JS also if document is ready/loaded
		this.frameInfo.isBuildFrameViaJs = (typeof this.config.playerDivSetup.elmtClassName !== 'undefined' || typeof this.config.playerDivSetup.elmtId !== 'undefined' || typeof this.config.playerDivSetup.querySelector !== 'undefined') || (this.frameInfo.isBuildFrame && this.srcElement && (this.srcElement.async || this.srcElement.defer)) || (this.frameInfo.isBuildFrame && (this.allowViewabilityCheck || this.allowUserScrollCheck));
		if (this.debug)
		{
			console.log("SEKDBG: [INFO] this.needWrappingIframe="+(this.needWrappingIframe ? 'yes' : 'no'));
			console.log("SEKDBG: [INFO] window.frameElement="+(window.frameElement ? 'ok' : 'n/a'));
			console.log("SEKDBG: [INFO] this.frameInfo.isBuildFrame="+(this.frameInfo.isBuildFrame ? 'yes' : 'no'));
			console.log("SEKDBG: [INFO] this.frameInfo.isInsideGoogleFrame="+(this.frameInfo.isInsideGoogleFrame ? 'yes' : 'no'));
			console.log("SEKDBG: [INFO] this.frameInfo.isBuildFrameViaJs="+(this.frameInfo.isBuildFrameViaJs ? 'yes' : 'no'));
			console.log("SEKDBG: [INFO] this.srcElement="+(this.srcElement ? 'ok' : 'n/a'));
			if (this.srcElement)
			{
				console.log("SEKDBG: [INFO] this.srcElement.async="+(this.srcElement.async ? 'yes' : 'no'));
				console.log("SEKDBG: [INFO] this.srcElement.defer="+(this.srcElement.defer ? 'yes' : 'no'));
			}
		}
		this._setBlockPlacementSettings(w.top);
		if (this.searchByMetaTagName)
		{
			var ref = this;
			Object.keys(this.searchByMetaTagName).forEach(function (idx)
			{
				if (typeof ref.searchByMetaTagName["tagAttribute"] === 'undefined')
				{
					// default meta tag attribute
					ref.searchByMetaTagName["tagAttribute"] = "name";
				}
				if (idx != "tagAttribute")
				{
					ref._setMetaTagHelperContent(w.top, ref.searchByMetaTagName["tagAttribute"], ref.searchByMetaTagName[idx], idx);
				}
			});
		}
		/* iPad client detection/set */
		if (this.isIpad)
		{
			this.url += '&pubDeviceType=Tablet';
			this.url += '&pubOs=iOS';
			this.url += '&pubOsVer=';
		}

		this._setSharedVideoParameter(pageUrl);
		this._setTargetingCustomParameter();
		this._setCustomPpid();
		this._setHelperParameters();
		this._setObserverChecker();
	}

	this._getTagContainerSizeInfo = function()
	{
		var containerInfo = [];
		var containerIframe = '';
		var iframeElement = null;
		containerInfo['urlParams'] = '&x=320&y=480';
		containerInfo['xLen'] = 320;
		containerInfo['yLen'] = 480;

		try
		{
			if (window.parent.document.querySelector('[id^=google_ads_iframe_dummy_sekindoParent]') != null)
			{
				containerIframe = window.parent.document.querySelector('[id^=google_ads_iframe_dummy_sekindoParent]').id;
				iframeElement = window.parent.document.getElementById(containerIframe);

				if (iframeElement.parentElement.parentElement.parentElement.clientWidth !== 0)
				{
					containerInfo['xLen'] = iframeElement.parentElement.parentElement.parentElement.clientWidth;
				}
				else if (iframeElement.parent.document.clientWidth !== 0)
				{
					containerInfo['xLen'] = iframeElement.parent.document.clientWidth;
				}

				if (iframeElement.parentElement.parentElement.parentElement.clientHeight !== 0)
				{
					containerInfo['yLen'] = iframeElement.parentElement.parentElement.parentElement.clientHeight;
				}
				else if (iframeElement.parent.document.clientHeight !== 0)
				{
					containerInfo['yLen'] = iframeElement.parent.document.clientHeight;
				}

				containerInfo['urlParams'] = '&x='+containerInfo['xLen']+'&y='+containerInfo['yLen'];
			}
			else if (this.frameInfo.isInsideGoogleFrame)
			{
				containerIframe = window.parent.document.querySelector('iframe[id^=google_ads_iframe]').id;
				iframeElement = window.parent.document.getElementById(containerIframe);
				containerInfo['urlParams'] = '&x='+iframeElement.clientWidth+'&y='+iframeElement.clientHeight;
			}
		}
		catch (e)
		{
			if (this.debug)
			{
				console.log("SEKDBG: Exception get DFP or Dummy iframe element");
			}
		}

		return containerInfo;
	}

	this.process = function()
	{
		if (!this.isRun)
			return;

		if (this.config.unit.width == 0)
			return;
		if ((!this.observedElementInfo.isViewable && this.allowViewabilityCheck) || (!this.observedElementInfo.hasScrolled && this.allowUserScrollCheck))
			return;
		if (this.ci.browser == 'ie')
			return;

		var ref = this;
		var url = this.url;

		if (this.frameInfo.isBuildFrame)
		{
			var constructed = false;
			var uniqueID = 'sekindoParent'+Math.round(Math.random()*1000);
			window['construct'+uniqueID] = function (iframe)
			{
				if (constructed) return;
				constructed = true;
				if (iframe.contentWindow || iframe.contentDocument)
				{
					var iFramewindow = iframe.contentWindow || iframe.contentDocument.defaultView;
					var iFrameDoc = iFramewindow.document || iframe.contentDocument;

					if (ref.isResponsiveBanner)
					{
						var tagContainerSizeInfo = ref._getTagContainerSizeInfo();
						if (tagContainerSizeInfo['urlParams'] != '')
						{
							url += tagContainerSizeInfo['urlParams'];
							ref.config.unit.width = tagContainerSizeInfo['xLen'];
							ref.config.unit.height = tagContainerSizeInfo['yLen'];
						}
					}


					if (ref._getPlacementType() === 'banner') // use old method. (document.write)
					{
						ref._docWrite(iFrameDoc, uniqueID, url);
					}
					else
					{
						//Make dom ready.
						iFrameDoc.open();
						iFrameDoc.close();
						// If appendChild fails - go to document.write
						try
						{
							var script1 = iFrameDoc.createElement('script');
							script1.text = "window.baseIframeName = 'google_ads_iframe_dummy_" + uniqueID +"'"
							iFrameDoc.head.appendChild(script1);

							var base = document.createElement('base');
							base.href = 'https://amli.sekindo.com/';
							iFrameDoc.head.appendChild(base);

							var script = document.createElement('script');
							script.src = url;
							iFrameDoc.head.appendChild(script);
						}
						catch(e)
						{
							ref._docWrite(iFrameDoc, uniqueID, url);
						}
					}
				}
			}

			if (this.frameInfo.isBuildFrameViaJs)
			{
				var iframe = document.createElement('iframe');
				var div0 = document.createElement('div');
				var div1 = document.createElement('div');
				div1.id = 'primisPlayerContainerDiv';

				iframe.marginWidth = '0';
				iframe.marginHeight = '0';
				iframe.hspace = '0';
				iframe.vspace = '0';
				if (this.isAPI) iframe.height = '0';
				iframe.frameBorder = '0';
				iframe.scrolling = 'no';
				iframe.title = 'Primis Frame';
				iframe.id = 'google_ads_iframe_dummy_'+uniqueID;
				if (this._getPlacementType() == 'banner')
				{
					iframe.style.width = ref.config.unit.width + "px";
					iframe.style.height = ref.config.unit.height + "px";
				}
				else
				{
					iframe.style.width = '1px';
					iframe.style.height = '1px';
				}

				if (typeof this.config.playerDivSetup !== 'undefined' && typeof this.config.playerDivSetup.insertPosition !== 'undefined')
				{
					if (this.config.playerDivSetup.insertPosition == "inside")
					{
						this.srcElement.appendChild(div0);
					}
					else if (this.config.playerDivSetup.insertPosition == "after")
					{
						this.srcElement.parentNode.insertBefore(div0, this.srcElement.nextElementSibling);
					}
					else if (this.config.playerDivSetup.insertPosition == "before")
					{
						this.srcElement.parentNode.insertBefore(div0, this.srcElement);
					}
				}
				else
				{
					if (this.srcElement)
					{
						this.srcElement.parentNode.insertBefore(div0, this.srcElement);
					}
				}
				div0.appendChild(div1);
				div1.appendChild(iframe);
				window['construct'+uniqueID](iframe);
			}
			else
			{
				if (this._getPlacementType() === 'banner') // use old method. (document.write)
				{
					var code = '<div><div><iframe width="' +  this.config.unit.width + '" height="' +  this.config.unit.height + '" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" onload="construct'+uniqueID+'(this)" title ="Primis Frame" id ="google_ads_iframe_dummy_'+uniqueID+'"></iframe></div></div>';
					document.write(code);
				}
				else
				{
					var code = '<div><iframe style="width:1px; height:1px;"  marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" onload="construct'+uniqueID+'(this)" title ="Primis Frame" id ="google_ads_iframe_dummy_'+uniqueID+'"></iframe></div>';
					try
					{
						var div = document.createElement('div');
						div.innerHTML = code;
						var currScript = this.getCurrScript()
						currScript.parentNode.insertBefore(div, currScript);
					}
					catch(e)
					{
						code = '<div>'+code+'</div>';
						document.write(code);
					}
				}
			}
		}
		else
		{
			if (ref.isResponsiveBanner)
			{
				var tagContainerSizeInfo = ref._getTagContainerSizeInfo();
				if (tagContainerSizeInfo['urlParams'] != '')
				{
					url += tagContainerSizeInfo['urlParams'];
				}
			}
			if (this._getPlacementType() === 'banner') // use old method. (document.write)
			{
				document.write(unescape("%3Cscript src='") + url + unescape("' type='text/javascript'%3E%3C/script%3E"));
			}
			else
			{
				try
				{
					var script = document.createElement('script');
					script.src = url;
					document.head.appendChild(script);
				}
				catch(e)
				{
					document.write(unescape("%3Cscript src='") + url + unescape("' type='text/javascript'%3E%3C/script%3E"));
				}
			}

		}
	}

	this.getCurrScript = function(element, checkLimit)
	{
		return document.currentScript || document.scripts[document.scripts.length-1] ;
	};

	this._docWrite = function(iFrameDoc, uniqueID, url)
	{
		iFrameDoc.open();
		iFrameDoc.write(unescape("%3Cscript%3Evar baseIframeName = 'google_ads_iframe_dummy_") + uniqueID + unescape("'%3C/script%3E") + "<base href='https://amli.sekindo.com/'>" + unescape("%3Cscript src='") + url + unescape("' type='text/javascript'%3E%3C/script%3E"));
		iFrameDoc.close();
	}

	this._getPlacementType = function()
	{
		if (this.placementType && this.placementType !== 'slBanner' && this.placementType !== 'outstream' && this.placementType !== 'vast')
		{
			return 'banner';
		}
		return 'video';
	}

	this._getPlayerMainElement = function(orgWin)
	{
		var sourceElmt;
		if (window.frameElement !== null)
		{
			var pdmt, contElmt, gfrm=window.frameElement.id;
			pdmt 	 = window.parent.document.getElementById(gfrm);
			contElmt = pdmt.parentNode.parentNode.parentNode; // element before DFP div
			orgWin   = contElmt.ownerDocument.defaultView || contElmt.ownerDocument.parentWindow;
		}
		try
		{
			if (this.debug)
			{
				console.log("SEKDBG: mainElement owner");
				console.log(orgWin);
			}
			sourceElmt = this._getSourceElementByType(orgWin.top.document, this.config.playerDivSetup);
		}
		catch (e)
		{
			if (this.debug)
			{
				console.log("SEKDBG: Exception get mainElement");
			}
			sourceElmt = this._getSourceElementByType(orgWin.document, this.config.playerDivSetup);
		}
		if (this.debug)
		{
			console.log("SEKDBG: playerDivSetup mainElement");
			console.log(sourceElmt);
		}

		if (sourceElmt && typeof sourceElmt !== 'undefined' && typeof this.config.playerDivSetup.childElement !== 'undefined')
		{
			sourceElmt = this._getSourceElementByType(sourceElmt, this.config.playerDivSetup.childElement);
			if (this.debug)
			{
				console.log("SEKDBG: playerDivSetup childElement");
				console.log(sourceElmt);
			}
		}

		if (typeof this.config.playerDivSetup.childElementNumber !== 'undefined' && typeof sourceElmt !== 'undefined')
		{
			if (typeof this.config.playerDivSetup.childElementTagName !== 'undefined')
			{
				sourceElmt = sourceElmt.getElementsByTagName(this.config.playerDivSetup.childElementTagName)[this.config.playerDivSetup.childElementNumber - 1];
			}
			else
			{
				for (var i = 0; i < sourceElmt.childElementCount; i++)
				{
					if (i == this.config.playerDivSetup.childElementNumber - 1)
					{
						sourceElmt = sourceElmt.children[i];
					}
				}
			}
		}
		return sourceElmt;
	}

	this._getSourceElementByType = function(orgWin, playerDivSetup)
	{
		var sourceElmt = null;
		if (typeof playerDivSetup.elmtClassName !== 'undefined')
		{
			if (typeof playerDivSetup.mainElementNumber !== 'undefined')
			{
				sourceElmt = orgWin.getElementsByClassName(playerDivSetup.elmtClassName)[playerDivSetup.mainElementNumber-1];
			}
			else
			{
				sourceElmt = orgWin.getElementsByClassName(playerDivSetup.elmtClassName)[0];
			}
		}
		else if (typeof playerDivSetup.elmtId !== 'undefined')
		{
			sourceElmt = orgWin.getElementById(playerDivSetup.elmtId);
		}
		else if (typeof playerDivSetup.querySelector !== 'undefined')
		{
			sourceElmt = orgWin.querySelector(this.config.playerDivSetup.querySelector);
		}
		return sourceElmt;
	}

	this._setUtmParameters = function(pageUrl)
	{
		var d_utm = '', ref = this;
		this.url = this.url.replace('&subId=[SUBID_ENCODED]','');
		if (pageUrl != '')
		{
			var parts = pageUrl.replace(/[?&#]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
				for (var i = 0; i < ref.allowedUtmParameters.length; i++)
				{
					if (key.toLowerCase() == ref.allowedUtmParameters[i])
					{
						d_utm += '-'+value;
					}
				}
			});
			d_utm = d_utm.substring(1);
		}
		if (d_utm == '')
		{
			d_utm = 'default';
		}
		this.url += '&subId=' + d_utm;
	}

	this._setBlockPlacementSettings = function(orgWin) {
		if (this.placementId != -1) {
			try {
				var addBlockParameter = false;

				// Block same placement
				if (typeof orgWin.sekindoDisplayedPlacement === 'undefined') {
					orgWin.sekindoDisplayedPlacement = this.placementId;
					if (this.debug) {
						console.log("SEKDBG: Displayed placement: "+this.placementId);
					}
				}
				else if (!this.allowDisplaySamePlacementAgain && orgWin.sekindoDisplayedPlacement == this.placementId) {
					addBlockParameter = true;
					if (this.debug) {
						console.log("SEKDBG: Allow display the same placement: "+this.allowDisplaySamePlacementAgain);
						console.log("SEKDBG: Placement ID verification: "+this.placementId);
						console.log("SEKDBG: Displayed placement on page: "+orgWin.sekindoDisplayedPlacement);
					}
				}
				// Block other placements
				if (!addBlockParameter) {
					if (this.blockOtherPlacements && typeof orgWin.sekindoBlockOtherPlacements === 'undefined') {
						orgWin.sekindoBlockOtherPlacements = true;
						if (this.debug) {
							console.log("SEKDBG: Displayed placement: "+this.placementId);
						}
					}
					else if (orgWin.sekindoBlockOtherPlacements) {
						addBlockParameter = true;
						if (this.debug) {
							console.log("SEKDBG: Block other placements: "+this.blockOtherPlacements);
						}
					}
				}

				if (addBlockParameter) { // add block parameter to second call
					this.url += '&blockPlacement=1';
				}
			}
			catch (e) {}
		}
	};

	this._getMetaTagContent = function(orgWin, property, searchPropertyValue) {
		var tagContent = null;
		var metaTags = [];
		try {
			metaTags = orgWin.document.getElementsByTagName("meta");
		} catch (e) {}
		for (var idx = 0; idx < metaTags.length; idx++) {
			if (typeof metaTags[idx].getAttribute(property) !== 'undefined' && metaTags[idx].getAttribute(property) === searchPropertyValue) {
				if (typeof metaTags[idx].getAttribute("content") !== 'undefined') {
					tagContent = metaTags[idx].getAttribute("content");
					break;
				}
			}
		}
		return tagContent;
	};

	this._setMetaTagHelperContent = function(w, property, searchProperty, contentName)
	{
		var metaTagContent = this._getMetaTagContent(w, property, searchProperty);
		if (metaTagContent)
		{
			this.helperParameters[contentName] = metaTagContent;
		}
	};

	this._setHelperParameters = function()
	{
		if (Object.keys(this.helperParameters).length > 0)
		{
			// convert helper parameters object to JSON base64 encoded string
			var jsonFormattedHelperParameters = encodeURIComponent(JSON.stringify(this.helperParameters));
			this.url += '&'+this.VIDEO_HELPER_PARAM_NAME+'='+jsonFormattedHelperParameters;
		}
	};

	this._setSharedVideoParameter = function(pageUrl)
	{
		var s_content = '', ref = this;
		if (pageUrl != '')
		{
			var parts = pageUrl.replace(/[?&#]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
				if (key.toLowerCase() == ref.VIDEO_SHARED_PARAM_NAME)
				{
					s_content = value;
				}
			});
		}
		if (s_content !== '' && s_content.indexOf("embed") != -1)
		{
			this.helperParameters[ref.VIDEO_SHARED_PARAM_NAME] = s_content;
		}
	};

	this._setTargetingCustomParameter = function()
	{
		var custom_parameters = {};
		if (this.customTargetingProperties && Object.keys(this.customTargetingProperties).length > 0)
		{
			if (typeof this.customTargetingProperties["objectType"] !== 'undefined' && typeof this.customTargetingProperties["objectFunction"] !== 'undefined')
			{
				try
				{
					custom_parameters = eval(this.customTargetingProperties["objectType"]+"."+this.customTargetingProperties["objectFunction"]);
					if (Object.keys(custom_parameters).length > 0)
					{
						if (typeof custom_parameters == 'string')
						{
							var tmp = {};
							tmp[this.customTargetingProperties["objectFunction"]] = [custom_parameters];
							custom_parameters = tmp;
						}
						this.helperParameters[this.VIDEO_GAM_TARGETING_PARAM_NAME] = custom_parameters;
					}
				}
				catch (e) {}
			}
		}
	};

	this._setCustomPpid = function() {
		if (this.customPpidMapping && Object.keys(this.customPpidMapping).length > 0) {
			var customPpidParameter = {};
			if (typeof this.customPpidMapping["objectType"] !== 'undefined' && typeof this.customPpidMapping["objectFunction"] !== 'undefined') {
				try {
					customPpidParameter = eval(this.customPpidMapping["objectType"]+"."+this.customPpidMapping["objectFunction"]);
					if (Object.keys(customPpidParameter).length > 0) {
						this.helperParameters['ppid'] = customPpidParameter;
					}
				}
				catch (e) {}
			}
		}
	};

	this._getViewportSize = function(w)
	{
		if (w.innerWidth != null)
			return {w:w.innerWidth, h:w.innerHeight};

		var d = w.document;
		if (document.compatMode == "CSS1Compat")
			return {w: d.documentElement.clientWidth, h: d.documentElement.clientHeight};

		return {w: d.body.clientWidth, h: d.body.clientWidth};
	};

	this._setProb = function()
	{
		try {
			viewPortSize = this._getViewportSize(window.top);
		}
		catch (e) {
			viewPortSize = this._getViewportSize(window);
		}

		this.prob.window = {};
		this.prob.window.width = viewPortSize.w;
		this.prob.window.height = viewPortSize.h;
		this.prob.geo = this.geo;
		this.prob.ci = this.ci;
		this.prob.ci.geo = this.geo;
		this.prob.dmaCode = this.dmaCode;
		this._setIpadConfig();
	}

	this._setIpadConfig = function()
	{
		try
		{
			if (this.url.indexOf('pubDeviceType') == -1 && navigator.platform === 'MacIntel' && navigator.maxTouchPoints >= 5 && typeof navigator.standalone !== "undefined")
			{
				this.isIpad = true;
				this.prob.ci.deviceType = "tablet";
			}
		}
		catch (e){}
	}

	this._setConfig = function()
	{
		this.config = {};
		this.config.unit = {};
		this.config.unit.width =  this.x;
		this.config.unit.height = this.y;
		this.config.floatConfig = this.floatConfig;
		this.config.dynamicSetup = this.dynamicSetup;
		this.config.videoType 	= this.videoType;
		this.config.playerDivSetup = {};
		this.config.url = this.url;
	}

	this._setReplaceUrlParam = function(paramName, newValue)
	{
		var regex = new RegExp("&"+paramName+"=[^&]+", "gm");
		this.url = this.url.replace(regex, '');
		regex = new RegExp("[?]"+paramName+"=[^&]+", "gm");
		this.url = this.url.replace(regex, '?');
		this.url += "&" + paramName + "=" +  newValue;
	}

	this._setObserverChecker = function()
	{
		try
		{
			if (this.debug)
			{
				console.log("SEKDBG: [INFO] browser="+this.ci.browser+", application="+this.isApp);
			}
			if (!this.isApp && !this.isAmpProject && !this.isAmpIframe && (this.ci.browser == 'chrome' || this.ci.browser == 'edgeChromium')
				&& (this.allowViewabilityCheck || this.allowUserScrollCheck))
			{
				this._setObserverElement();
				this._observerChecker();
			}
			else
			{
				this.allowViewabilityCheck = false;
				this.allowUserScrollCheck  = false;
			}
			if (this.debug)
			{
				console.log("SEKDBG: [INFO] viewable="+this.allowViewabilityCheck+", scroll="+this.allowUserScrollCheck);
			}
		}
		catch (e)
		{
			this.allowViewabilityCheck = false;
			this.allowUserScrollCheck  = false;
			if (this.debug)
			{
				console.log("SEKDBG: [INFO] "+e.name + ": " + e.message);
			}
		}
	}

	this._observerChecker = function()
	{
		var observerOptions, currentScrollVerticalPosition=1, ref=this;
		if (ref.observerElement)
		{
			observerOptions = {
				root: null,
				rootMargin: '0px',
				threshold: [config.playerInViewPrc, config.adInViewPrc]
			}
			this.elementChecker = new ref.rootWindow.IntersectionObserver(intersectionCallback, observerOptions);
			this.elementChecker.observe(ref.observerElement);
		}

		function intersectionCallback(entries, observer)
		{
			var intersectionEntry = entries[entries.length - 1];
			var currentViewedPercentage = intersectionEntry.intersectionRatio;
			ref.observedElementInfo.isViewable  = (currentViewedPercentage > ref.observedElementInfo.viewabilityThreshold);
			ref.observedElementInfo.hasScrolled = (currentViewedPercentage != currentScrollVerticalPosition);
			if (ref.debug)
			{
				console.log("SEKDBG: [INFO] percentage="+currentViewedPercentage+", in viewable="+ref.observedElementInfo.isViewable+", after scroll="+ref.observedElementInfo.hasScrolled);
			}
			currentScrollVerticalPosition = currentViewedPercentage;
			if ((ref.observedElementInfo.isViewable && ref.allowViewabilityCheck) || (ref.observedElementInfo.hasScrolled && ref.allowUserScrollCheck))
			{
				ref.elementChecker.unobserve(ref.observerElement);
				ref.process();
			}
		}
	}

	this._setObserverElement = function()
	{
		this.observerElement = null;
		if (this.allowUserScrollCheck)
		{
			var widgetElmt, mElmt, elmtId='extendedSection';
			mElmt = this.rootWindow.document.createElement('widget-markup');
			mElmt.setAttribute('id', elmtId);
			mElmt.setAttribute('style', 'width:0px; height:0px;');
			if (this.debug)
			{
				console.log("SEKDBG: [INFO] firstChild");
				console.log(this.rootWindow.document.body.firstChild);
			}
			this.rootWindow.document.body.insertBefore(mElmt, this.rootWindow.document.body.firstChild);
			widgetElmt = this.rootWindow.document.getElementById(elmtId);
			if (widgetElmt)
			{
				this.observerElement = widgetElmt;
			}
		}
		else if (typeof this.config.playerDivSetup.elmtClassName !== 'undefined' || typeof this.config.playerDivSetup.elmtId !== 'undefined' || typeof this.config.playerDivSetup.querySelector !== 'undefined')
		{
			this.observerElement = this.srcElement;
		}
		else if (this.srcElement && this.srcElement.parentNode)
		{
			if (this.frameInfo.isInsideGoogleFrame && typeof this.frameInfo.googleFrameId !== 'undefined')
			{
				this.observerElement = this.rootWindow.document.getElementById(this.frameInfo.googleFrameId);
			}
			else
			{
				this.observerElement = this.srcElement.parentNode;
			}
		}
		if (this.debug)
		{
			console.log("SEKDBG: [INFO] observer element");
			console.log(this.observerElement);
		}
		if (!this.observerElement)
		{
			this.allowViewabilityCheck = false;
			this.allowUserScrollCheck  = false;
		}
	}

	this.playerApiActions = function(){
		function PrimisApiConfig (){
			this.setConfig = function (apiConfig){
				this.apiPlayerConfig = apiConfig;
			}
		}

		window.top.PrimisApiConfig = new PrimisApiConfig();
		window.top.dispatchEvent(new CustomEvent('readyConfigPlayerApi', {detail: window.top.PrimisApiConfig}));
	}

	this._setProb();
	this._setConfig();

	var dynamicConfig = new SekindoClientDynamicConfig(this.config, this.prob);
	dynamicConfig.run();
	// dynamicConfig can change this url
	this.url = this.config.url;

	this.getScriptElement();
	this.setInfo();
	if (this.isPlayerApiActions && !this.isAmpProject && !this.isAmpIframe && !this.isApp) this.playerApiActions();
};

				var urlDetObj = new SekindoClientDetections_URL({
					url: 'https://live.primis.tech/live/liveView.php?s=114310&schain=1.0,1!fabrik.com,60,1&playerApiId=114310&cbuster=1706727608',
					origQString: 's=114310&schain=1.0,1!fabrik.com,60,1&playerApiId=114310',
					placementId: 114310,
					x: 640,
					y: 440,
					videoType: 'flow',
					needWrappingIframe: 1,
					isAmpProject: 0,
					isAmpIframe: 0,
					floatConfig: {
						width: '', height: '',
						direction: '', verticalOffset: '',
						horizontalOffset: '', isCloseBtn: '',
						flowMode: '', closeBtnPos: ''
					},
					isAPI: false,
					debug: 0,
					ci: {"extra":{"schemaVer":"11","os":"Windows","osVersion":"6.1","osVersionMajor":"6","osVersionMinor":"1","deviceManufacturer":"","deviceModel":"","deviceCodeName":"","deviceType":"desktop","browser":"Firefox","browserType":"browser","browserVersion":"45.0","browserVersionMajor":"45","browserVersionMinor":"0","chromeVersion":""},"browser":"firefox","os":"windows","osVer":"","deviceType":"desktop","languages":[],"googlePSI":false},
					isFpCookie: 1,
					geo: 'ES',
					dmaCode: 0,
					dynamicSetup: [],
					uuid: '65ba98b8358fa',
					isResponsiveBanner: false,
					hideOnMissingMainElement: false,
					allowedUtmParameters: ["primis_content"],
					allowDisplaySamePlacementAgain: true,
					blockOtherPlacements: false,
					searchMetaTagNames: false,
					customTargetingProperties: {"objectType":"window.top","objectFunction":"dtPrimisTargeting","commitDoubleEncoding":0,"source":"WindowObject"},
					customPpidMapping: false,
					sharedVideoParameterName: 'primis_content',
					gamTargetingVideoParameterName: 'primis_custom_target',
                    placementType: 'slBanner',
					isApp: false,
					playerInViewPrc: 0.01,
					adInViewPrc: 0.5,
					allowViewabilityCheck: false,
					allowUserScrollCheck: false,
					isRun: 1,
					isPlayerApiActions: true				});
				urlDetObj.process();
			})();
5 108.65 73.55 L 108.7 73.55 Q 81.7677734375 100.7685546875 67.35 135.6 L 67.35 135.55 Q 53.3587890625 169.0849609375 53.4 203.15 53.3939453125 245.4220703125 69.25 276.45 L 69.25 276.45 Q 87.139453125 311.978515625 120.9 325.6 L 120.8 325.6 Q 132.50859375 330.494140625 141.95 325.4 L 142 325.35 Q 152.0927734375 321.062109375 155.3 308.35 L 155.35 308.3 Q 159.7423828125 290.978125 161.1 285.65 161.11328125 285.6248046875 161.1 285.55 163.7869140625 275.45 161.7 269.65 L 161.7 269.7 Q 160.8388671875 264.51171875 153.95 256.35 146.6896484375 247.687109375 142.95 237.3 L 142.95 237.25 Q 138.7033203125 225.1880859375 138.7 210.25 138.6919921875 186.1400390625 147.4 164.15 156.05078125 142.311328125 172.1 125.65 L 172.05 125.65 Q 188.7466796875 108.4470703125 211.15 99.1 L 211.15 99.1 Q 235.3005859375 89.054296875 263.65 89.1 312.636328125 89.1048828125 340.95 115.95 M 361.9 94.45 L 361.9 94.4 Q 326.141796875 59.094921875 263.65 59.1 229.098828125 59.1458984375 199.65 71.4 L 199.6 71.4 Q 171.452734375 83.152734375 150.5 104.8 L 150.5 104.8 Q 130.3490234375 125.688671875 119.5 153.1 108.7078125 180.359765625 108.7 210.25 108.6966796875 230.8119140625 114.7 247.4 L 114.7 247.4 Q 120.2103515625 262.812890625 131 275.65 132.08984375 276.9224609375 132.7 277.35 L 132.7 277.4 Q 132.23984375 277.4806640625 132.1 278 L 132.05 278.1 Q 130.9310546875 282.5537109375 127.55 295.7 107.378125 285.471875 96.05 262.95 L 96.05 262.9 Q 83.4060546875 237.577734375 83.4 203.15 83.44140625 174.9146484375 95.05 147.1 L 95.05 147.05 Q 107.23203125 117.6318359375 130 94.65 L 130 94.65 Q 154.801953125 69.5720703125 188.5 55.85 226.1953125 40.554296875 271.65 40.55 308.2 40.515625 340 53.1 369.607421875 64.7974609375 391.95 86.15 413.3921875 106.719140625 425 133.35 L 425 133.35 Q 436.6330078125 159.9173828125 436.65 188.35 436.6861328125 227.4341796875 426.2 261.35 416.1708984375 294.0369140625 397.4 318.35 378.9775390625 342.1642578125 354 354.9 L 353.95 354.95 Q 328.31015625 368.1287109375 298.3 368.1 279.590625 368.0841796875 262.8 359.2 L 262.8 359.25 Q 248.23359375 351.52578125 242.15 340.75 240.01015625 336.640625 235.9 334.45 231.778125 332.262890625 227.15 332.8 222.568359375 333.3482421875 219.05 336.4 215.540625 339.491015625 214.35 343.95 L 205.6 378.3 205.6 378.35 Q 196.5568359375 414.055859375 194.4 421.9 L 194.4 421.85 Q 187.5673828125 446.5330078125 169.15 476.15 164.917578125 479.0849609375 162.8 479.75 162.223828125 477.9609375 161.3 473.15 160.1587890625 437.973828125 165.95 412.85 L 202.55 258 Q 203.8064453125 252.7384765625 201.35 247.85 199.6349609375 244.2423828125 197.8 237.95 L 197.8 237.95 Q 193.8365234375 224.242578125 193.85 209.55 193.8453125 183.644921875 206.85 166.05 L 206.85 166 Q 217.9248046875 151.3541015625 233.7 150.95 244.7080078125 150.951953125 251 158.05 L 250.95 158 Q 257.0521484375 166.033984375 257.05 178.6 256.8263671875 192.469921875 248.3 221 L 248.3 221 Q 245.7427734375 229.6599609375 240.15 247.7 L 240.15 247.75 Q 235.0298828125 264.476953125 232.35 275.95 225.2498046875 305.946875 244.1 327.8 L 244.1 327.75 Q 261.9630859375 348.94140625 291.8 349.15 316.1564453125 349.2369140625 337.25 334.3 L 337.25 334.3 Q 356.102734375 321.1734375 370.05 296.8 L 370.05 296.8 Q 383.0583984375 274.2859375 390 244.6 396.884765625 215.3458984375 396.9 183.05 396.9052734375 128.1248046875 361.9 94.45 Z"/></svg> ';
	var whatsappBtnSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="width:100%; height:100%;" viewBox="0 0 520 520"> <path fill="#fff" stroke="none" d=" M 438.75 79.25 Q 404.5 45 360.1 26.25 314.15 6.8 263.8 6.8 213.45 6.8 167.45 26.25 123.1 45 88.8 79.25 54.55 113.5 35.8 157.9 16.35 203.85 16.35 254.2 16.35 288.75 25.65 321.65 34.7 353.6 51.85 381.95 52.2 382.5 52.3 383.15 L 52.3 383.2 Q 52.35 383.8 52.15 384.45 L 8.8 513.25 141.8 470.7 Q 142.35 470.5 143 470.55 143.6 470.6 144.15 470.9 171.15 485.85 200.95 493.65 231.65 501.65 263.7 501.65 314.05 501.65 360.05 482.2 404.45 463.45 438.75 429.15 473 394.9 491.75 350.5 511.2 304.55 511.2 254.2 511.2 203.85 491.75 157.9 473 113.5 438.75 79.25 M 413.3 104.8 Q 442.55 134.05 458.65 172 475.3 211.3 475.3 254.25 475.25 297.2 458.6 336.45 442.5 374.4 413.2 403.7 383.95 432.95 346 449.05 306.7 465.7 263.8 465.7 232.1 465.7 202.05 456.5 173.6 447.8 148.65 431.5 L 69.9 456.7 69.95 456.7 Q 68.85 457.05 67.8 456.6 L 67.75 456.6 Q 66.7 456.1 66.25 455.05 65.8 454 66.15 452.9 L 91.65 376.95 Q 72.95 350.85 62.95 320.5 52.3 288.4 52.3 254.25 52.3 211.3 68.95 172 85.05 134.05 114.35 104.8 143.6 75.5 181.55 59.4 220.85 42.75 263.8 42.75 306.75 42.75 346.05 59.4 384 75.5 413.3 104.8 M 338.3 288.7 Q 333.05 286.65 330.55 286.85 326.85 287.15 323.8 291.45 320.8 295.6 312.95 304.4 306.5 311.65 302.55 315.7 299.65 318.8 296.55 319.1 293.4 319.35 288.7 316.85 278.9 312.4 270.05 307.25 253.3 297.45 238.5 283.2 226.65 271.8 215.95 256.2 209.85 247.25 204.55 237.6 202.2 233.25 203.65 229.85 204.55 227.7 207.85 224.7 209.75 222.95 212.75 219.6 216.2 215.75 217.85 213.9 220 211.55 221.65 208.95 221.7 208.9 224.7 203.55 227.45 198.55 224.55 192.35 223.45 190.05 206.7 144.15 203.55 135.75 199.3 133.7 198 133.1 192.7 132.95 190.75 132.9 186.8 132.5 182.5 132.05 180.5 131.95 176.6 131.75 172.5 133.25 167.3 135.15 163.2 139.35 153.35 149.3 149.15 156.1 139.55 171.65 138.8 191.85 138.05 211.7 149.05 235.5 154.5 247.35 162.4 258.95 163.15 260.05 171.15 272.6 181.05 287.2 192.35 300.4 227.85 342 268 359.55 308.9 377.45 325.65 379.75 331.35 380.5 336.25 379.7 343.6 378.5 344.1 378.45 354.05 377.95 368.45 369.35 384.3 359.9 388.4 349.65 392.4 339.65 393.65 330.05 394.65 321.9 393.3 319.45 392.25 317.45 389 315.45 384.35 312.85 381.2 311.1 343.7 290.85 338.3 288.7 Z"/> </svg> ';
	var twitterBtnSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="width:100%; height:100%;" viewBox="0 0 511.999 511.999">    <path fill="#fff" d="M509.738 109.538a15.263 15.263 0 0 0-14.332-7.215l-25.53 2.224 24.403-49.193a15.268 15.268 0 1 0-20.393-20.498l-64.587 31.631c-39.903-21.066-89.756-14.813-124.06 16.436-28.63 26.08-43.679 66.187-40.873 106.183-74.829-7.5-138.169-50.331-175.623-119.537a15.269 15.269 0 0 0-25.7-1.817c-23.23 31.382-24.86 74.41-6.649 109.809-5.02-1.268-10.362-2.984-16.286-4.963A15.266 15.266 0 0 0 .205 189.564c7.206 43.688 32.682 77.264 72.926 97.138a128.229 128.229 0 0 1-16.024 4.44 15.267 15.267 0 0 0-8.034 25.378c28.981 30.978 70.845 46.225 100.581 53.539-33.81 26.477-70.307 30.908-123.341 29.087-6.139-.186-11.795 3.272-14.376 8.837a15.27 15.27 0 0 0 2.544 16.681c22.108 24.369 102.654 51.847 187.326 53.907 3.349.081 6.765.125 10.253.125 59.451-.001 138.022-12.745 194.419-69.142 42.687-42.686 69.387-91.827 79.356-146.053 8.052-43.797 2.963-78.869.518-95.725-.18-1.239-.372-2.554-.528-3.704l23.881-38.49a15.267 15.267 0 0 0 .032-16.044zm-53.606 62.622c4.531 31.224 18.316 126.24-71.245 215.801-52.06 52.059-127.888 61.407-182.338 60.084-46.461-1.13-88.019-10.016-118.139-20.15 12.229-1.5 23.127-3.814 33.414-7.011 28.359-8.815 52.317-24.676 75.395-49.915a15.268 15.268 0 0 0-9.327-25.447c-14.559-1.866-58.305-9.23-92.753-32.992 9.927-4.06 19.501-9.141 28.643-15.205a15.27 15.27 0 0 0-4.569-27.494c-28.195-7.392-62.223-23.932-77.914-60.855 10.02 1.756 20.915 2.181 32.535-.424a15.268 15.268 0 0 0 7.645-25.504c-19.524-20.222-26.825-49.364-20.561-74.301 20.514 29.981 46.503 55.213 76.279 73.868 38.091 23.865 82.549 37.054 128.57 38.137a15.32 15.32 0 0 0 12.157-5.573 15.27 15.27 0 0 0 3.107-13.007c-7.918-35.595 3.375-73.541 28.771-96.674 26.34-23.995 65.269-27.635 94.666-8.846a15.27 15.27 0 0 0 14.938.846l31.541-15.448-16.509 33.281a15.265 15.265 0 0 0 1.065 15.388 15.252 15.252 0 0 0 13.938 6.607l22.242-1.937-10.246 16.515c-3.439 5.543-2.726 10.461-1.305 20.256z"/></svg>';
	var likeBtnSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 850 768" style="pointer-events: none; width:100%; height:100%;"> <path fill="#fff" d="M775.9,522.1c15.7-20.1,23.3-41.6,22.3-63.8c-1-24.4-11.9-43.5-20.9-55.2c10.4-26,14.5-67-20.4-98.8c-25.5-23.3-68.9-33.7-129-30.8c-42.2,1.9-77.6,9.8-79,10.1h-0.2c-8,1.4-16.5,3.2-25.2,5.1c-0.6-10.3,1.1-35.8,20.1-93.3c22.5-68.4,21.2-120.8-4.2-155.8C512.8,2.9,470.2,0,457.7,0c-12,0-23.1,5-31,14.1c-17.8,20.7-15.7,58.9-13.5,76.6c-21.2,56.9-80.6,196.3-130.9,235c-1,0.6-1.8,1.4-2.6,2.2c-14.8,15.6-24.7,32.4-31.5,47.2c-9.5-5.1-20.2-8-31.8-8h-98c-36.9,0-66.8,30-66.8,66.8v261c0,36.9,30,66.8,66.8,66.8h98c14.3,0,27.6-4.5,38.5-12.2l37.7,4.5c5.8,0.8,108.6,13.8,214.1,11.7c19.1,1.4,37.1,2.2,53.8,2.2c28.7,0,53.8-2.2,74.7-6.7c49.1-10.4,82.7-31.3,99.7-62c13-23.4,13-46.7,10.9-61.5c32-28.9,37.6-60.9,36.5-83.4C781.8,541.4,778.9,530.3,775.9,522.1L775.9,522.1z M118.5,718.4c-13,0-23.4-10.6-23.4-23.4V433.8c0-13,10.6-23.4,23.4-23.4h98c13,0,23.4,10.6,23.4,23.4v261c0,13-10.6,23.4-23.4,23.4h-98V718.4L118.5,718.4z M734.8,503.3c-6.7,7.1-8,17.8-2.9,26.2c0,0.2,6.6,11.4,7.4,26.8c1.1,21-9,39.7-30.2,55.6c-7.5,5.8-10.6,15.7-7.4,24.7c0,0.2,6.9,21.4-4.3,41.4c-10.8,19.3-34.7,33.1-71,40.8c-29.1,6.3-68.6,7.4-117.1,3.5H507c-103.3,2.2-207.7-11.2-208.8-11.4h-0.2l-16.2-1.9c1-4.5,1.4-9.3,1.4-14.1V433.8c0-6.9-1.1-13.7-3.1-19.9c2.9-10.8,10.9-34.7,29.9-55.1c72.1-57.2,142.6-250.1,145.7-258.4c1.3-3.4,1.6-7.1,1-10.8c-2.7-18-1.8-40,2.1-46.6c8.5,0.2,31.5,2.6,45.3,21.7c16.4,22.6,15.7,63.1-1.9,116.8c-27,81.7-29.2,124.8-7.9,143.7c10.6,9.5,24.7,10,35,6.3c9.8-2.2,19.1-4.2,27.9-5.6c0.6-0.2,1.4-0.3,2.1-0.5C608.7,314.6,697,308,727.7,336c26,23.8,7.5,55.2,5.5,58.6c-5.9,9-4.2,20.7,3.9,27.9c0.2,0.2,17,16.1,17.8,37.4C755.5,474.3,748.7,488.9,734.8,503.3L734.8,503.3z"></path> <path fill="#000" fill-opacity="0" d="M118.5,718.4c-13,0-23.4-10.6-23.4-23.4V433.8c0-13,10.6-23.4,23.4-23.4h98c13,0,23.4,10.6,23.4,23.4v261c0,13-10.6,23.4-23.4,23.4h-98V718.4L118.5,718.4z M734.8,503.3c-6.7,7.1-8,17.8-2.9,26.2c0,0.2,6.6,11.4,7.4,26.8c1.1,21-9,39.7-30.2,55.6c-7.5,5.8-10.6,15.7-7.4,24.7c0,0.2,6.9,21.4-4.3,41.4c-10.8,19.3-34.7,33.1-71,40.8c-29.1,6.3-68.6,7.4-117.1,3.5H507c-103.3,2.2-207.7-11.2-208.8-11.4h-0.2l-16.2-1.9c1-4.5,1.4-9.3,1.4-14.1V433.8c0-6.9-1.1-13.7-3.1-19.9c2.9-10.8,10.9-34.7,29.9-55.1c72.1-57.2,142.6-250.1,145.7-258.4c1.3-3.4,1.6-7.1,1-10.8c-2.7-18-1.8-40,2.1-46.6c8.5,0.2,31.5,2.6,45.3,21.7c16.4,22.6,15.7,63.1-1.9,116.8c-27,81.7-29.2,124.8-7.9,143.7c10.6,9.5,24.7,10,35,6.3c9.8-2.2,19.1-4.2,27.9-5.6c0.6-0.2,1.4-0.3,2.1-0.5C608.7,314.6,697,308,727.7,336c26,23.8,7.5,55.2,5.5,58.6c-5.9,9-4.2,20.7,3.9,27.9c0.2,0.2,17,16.1,17.8,37.4C755.5,474.3,748.7,488.9,734.8,503.3L734.8,503.3z"></path> </svg>';
	var viewsLogoSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="width:100%; height:100%;" viewBox="0 0 511.999 511.999"> <path fill="#fff" d="M508.745 246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818 239.784 3.249 246.035a16.896 16.896 0 0 0 0 19.923c4.569 6.257 113.557 153.206 252.748 153.206s248.174-146.95 252.748-153.201a16.875 16.875 0 0 0 0-19.922zM255.997 385.406c-102.529 0-191.33-97.533-217.617-129.418 26.253-31.913 114.868-129.395 217.617-129.395 102.524 0 191.319 97.516 217.617 129.418-26.253 31.912-114.868 129.395-217.617 129.395z"/> <path fill="#fff" d="M255.997 154.725c-55.842 0-101.275 45.433-101.275 101.275s45.433 101.275 101.275 101.275S357.272 311.842 357.272 256s-45.433-101.275-101.275-101.275zm0 168.791c-37.23 0-67.516-30.287-67.516-67.516s30.287-67.516 67.516-67.516 67.516 30.287 67.516 67.516-30.286 67.516-67.516 67.516z"/> </svg>';
	var skipProgressBtnSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" enable-background="new 0 0 512.004 512.004" viewBox="0 0 512.004 512.004"><path fill="#fff" d="M464.004 98.346h-368v32h368c14.544 0 15.92 15.92 16 20.688v128c0 3.072-.448 7.152-2.608 9.056-2.816 2.496-8.784 2.624-11.072 2.416-.768-.096-1.552-.16-2.32-.16H54.628l68.688-68.688-22.624-22.624-96 96c-6.256 6.256-6.256 16.368 0 22.624l96 96 22.624-22.624-68.688-68.688h408.464c1.168.112 2.896.24 5.024.24 7.536 0 20.064-1.52 30.144-10.224 6.272-5.424 13.744-15.6 13.744-33.328v-128c0-21.168-12.784-52.688-48-52.688z"/></svg>';
	var staticPrimisLogoSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 877.5 228.7" style="width: 100%; height: 100%; cursor: pointer;" xml:space="preserve"><path style="fill:#FFFFFF;" d="M154.2,195H115l29.8-146.3H184l-2.4,11.5c5.4-7.8,16-12.8,29-12.8c24,0,47.4,18.8,47.4,49.4 c0,34.9-30.8,62.4-61.9,62.4c-16.5,0-29.5-5-32-12.8L154.2,195z M192.2,124.1c13.6,0,24.5-10.8,24.5-22.7c0-11-8.5-18.8-20.6-18.8 c-14.3,0-24.7,11-24.7,22.5C171.4,116,179.9,124.1,192.2,124.1L192.2,124.1z"></path> <path style="fill:#FFFFFF;" d="M280.2,48.7h40.1l-2.8,13.4c8.7-12.1,18.2-16,29.9-16c4.4,0,8.9,0.4,13.2,1.2l-7.2,35.7 c-4.7-0.8-9.5-1.1-14.3-1.1c-17.3,0-27.9,12.6-32.3,33.1l-8.9,42.7h-40.1L280.2,48.7z"></path> <path style="fill:#FFFFFF;" d="M374.9,48.7h40.1l-22.3,109.1h-40.1L374.9,48.7z M377.7,24c0-12.6,10.8-24,24.5-24c12.1,0,20.6,8.5,20.6,19.9 c0,12.1-10.4,23.8-24.5,23.8C386.1,43.7,377.7,35.5,377.7,24L377.7,24z"></path> <path style="fill:#FFFFFF;" d="M430.8,48.7h40.1l-2.8,13.4c8-12.1,17.1-16,27.9-16c14.3,0,24.9,6.3,29.2,16.9c9.3-11,23.1-17.2,37.4-16.9 c21.4,0,33.6,14.1,33.6,36.2c0,3.6-0.4,7.3-1.1,10.8l-13.4,64.8h-40.1l12.3-61.1c0.2-1.4,0.4-2.9,0.4-4.3c0-7.6-3.7-12.1-10.6-12.1 c-8.7,0-14.3,7.4-16.5,18l-12.3,59.6H475l12.3-61.1c0.2-1.4,0.4-2.9,0.4-4.3c0-7.6-3.7-12.1-10.6-12.1c-8.7,0-14.3,6.9-16.5,17.5 l-12.1,60h-40.1L430.8,48.7z"></path> <path style="fill:#FFFFFF;" d="M619.7,48.7h40.1l-22.3,109.2h-40.1L619.7,48.7z M622.5,24c0-12.6,10.8-24,24.5-24c12.1,0,20.6,8.5,20.6,19.9 c0,12.1-10.4,23.8-24.5,23.8C631,43.7,622.5,35.5,622.5,24z"></path> <path style="fill:#FFFFFF;" d="M676.1,116.7c7.4,8.7,18.4,10.8,29.9,10.8c9.5,0,12.8-2.4,12.8-5.2c0-4.8-18.4-3.9-32.9-11 c-11.5-5.6-17.5-14.5-17.5-26.9c0-21,20.6-39,48.9-39c16.6-0.1,32.7,5.8,45.3,16.7l-20.1,25.3c-7.4-6.7-17.1-10.4-27.1-10.4 c-7.6,0-10.4,2.8-10.4,5.6c0,5.2,15.2,4.8,33.3,11.9c14.3,5.6,18,16.2,18,27.1c0,24.5-18.8,39.4-54.6,39.4 c-22.7,0-40.1-7.4-50.7-19.7L676.1,116.7z"></path> <path style="fill:#FF3E5F;" d="M81.9,195l-6.9,33.8H0L46.5,0h74.9l-6.9,33.8H77.3L44.6,195H81.9z"></path> <path style="fill:#FF3E5F;" d="M795.6,33.7L802.5,0h74.9L831,228.7H756L763,195h37.3l32.6-161.2L795.6,33.7z"></path> </svg>';
	this.playBtnSVG = playBtnSVG; //For usage in playlist thumbs

	/**
	 * Contains all relevant elements that change color on hover
	 */
	this.hoverColorArray = [];

	/**
	 * Contains all elements that holds the layout exposed when they are hover
	 */
	this.exposeHoldersArray = [];

	/**
	 * Contains all relevant elements animation changes when layout is displayed or hidden. every element contains an object with the following params:
	 * {element: the element to be effected (element.style)
	 * ,unit: the style unit that changes will effect ('opacity')
	 * ,onDest: the destany when layout is "on" ('1')
	 * ,offDest: the destany when layout is "off" ('0')
	 * ,onStart: a function that will apply when animation of layout "on" starts (function(){element.style.display = 'block';}
	 * ,offComplete:  a function that will apply when animation of layout "off" completes function(){element.style.display = 'none';}}
	 * example: {element:this.transparentCover.style,unit:'opacity', onDest:'1', offDest:'0', onStart:function(){centerElements.style.display = 'block';}, offComplete:function(){centerElements.style.display = 'none';}}
	 */
	this.displayArray = [];

	/**
	 * Contains all relevant elements changes when player resizes. every element contains an object with the following params:
	 * {obj:  the element to be effected (element) - must be the first obj in the list
	 * , followed by the uint to be changed (left:) and an array of 2 values ['19px','13px'] - first value for the big layout and second for the small}
	 * example: {obj:publisherLogo, left:['19px','13px'],top:['14px','10px'],transform:['translate(50%, 50%) scale(2','translate(0%, 0%) scale(1)']}
	 */
	this.resizersArray = [];

	/**
	 * Contains all relevant elements changes when ad is displayed or hidden. every element contains an object with the following params:
	 * {element: the element to be effected (element.style)
	 * ,unit: the style unit that changes will effect ('opacity')
	 * ,onDest: the destany when layout is "on" ('1')
	 * ,offDest: the destany when layout is "off" ('0')
	 * example: {element:this.transparentCover.style,unit:'display', onDest:'block', offDest:'none'}
	 */
	this.adDisplayArray = [];

	/**
	 * Contains all relevent elements changes when IMA without our skip btn is loaded, every element contains an object with the following params:
	 * {element: the element to be effected (element.style)
	 * ,unit: the style unit that changes will effect ('opacity')
	 * ,onDest: the destany when layout is "on" ('1')
	 * ,offDest: the destany when layout is "off" ('0')
	 * example: {element:this.transparentCover.style,unit:'display', onDest:'block', offDest:'none'}
	 */
	this.adImaDisplayArray = [];

	/**
	 * Contains all relevant elements to show when BgCover (autoplay 4) is displayed. every element contains an object with the following params:
	 * {element: the element to be effected (element.style)
	 * ,unit: the style unit that changes will effect ('opacity')
	 * ,onDest: the destany when layout is "on" ('1')
	 * ,offDest: the destany when layout is "off" ('0')
	 * example: {element:bottomElements.style,unit:'visibility', onDest:'hidden', offDest:'visible'}
	 */
	this.bgCoverArray = [];

	this.resizedTo = 0;

	/**
	 * Adds element to its parent and set properties like style, resizers etc.
	 * The val object may contain the following elements:
	 * id: the html element id.
	 * type: the element type (div, img, etc).
	 * parent: the parent element it will be appended to.
	 * innerHTML: any inner html if needed (svg, other html structures).
	 * style: all the style declerations of the element.
	 * resizer: resize settings that will apply to the element when the player is resized.
	 * displayer: display settings that will apply to the element when the layout is exposed or hidden.
	 */
	function addLayoutElement(val)
	{
		var elm = ref.createChild(val.type, val.parent);
		elm.id = val.id;

		if (val.class) {
			elm.classList.add(val.class);
		}

		for(var i in val.style) elm.style[i] = val.style[i];
		if(val.innerHTML)elm.innerHTML = val.innerHTML;
		if (val.resizer)
		{
			val.resizer.obj = elm;
			ref.resizersArray.push(val.resizer);
		}
		if(val.displayer)
		{
			val.displayer.element = elm.style;
			ref.displayArray.push(val.displayer);
		}
		if(val.id != 'transparentInner')ref.exposeHoldersArray.push(elm);
		elm.style.userSelect = 'none';
		elm.style.msUserSelect = 'none';
		elm.style.mozUserSelect = 'none';
		elm.style.webkitUserSelect = 'none';
		elm.style.webkitTapHighlightColor = 'rgba(0,0,0,0)';
		elm.style.webkitTapHighlightColor = 'ransparent';
		elm.style.pointerEvents = 'auto';

		ref[val.id] = elm;

		return elm;
	}
	this.addLayoutElement = addLayoutElement;

	/**
	 * Removes elements from the dom based on id and/or class name.
	 *
	 * The val object may contain the following elements:
	 * id: string. Id to remove.
	 * class: array[string]. Classes to remove.
	 */
	function removeLayoutElements(val)
	{
		if (val.class) {
			// Filter out of resizersArray elements with any one of the specified classes.
			ref.resizersArray = ref.resizersArray.filter(element => {
				return !val.class.some(className => element.obj.classList.contains(className));
			});

			// Filter out of exposeHoldersArray elements with any one of the specified classes.
			ref.exposeHoldersArray = ref.exposeHoldersArray.filter(element => {
				return !val.class.some(className => element.classList.contains(className));
			});

			// Construct the query string to select elements with the classes in the array.
			const queryString = val.class.map(className => `.${className}`).join(',');

			// Select all elements that contain any of the classes from the array.
			const selectedElements = ref.layout.querySelectorAll(queryString);

			// Remove the selected elements.
			selectedElements.forEach(element => {
				delete ref[element.id];
				element.remove();
			});
		}

		if (val.id) {
			// Filter out of resizersArray elements the specified id.
			ref.resizersArray = ref.resizersArray.filter(element => {
				return element.obj.id !== val.id;
			});

			// Filter out of exposeHoldersArray elements with the specified id.
			ref.exposeHoldersArray = ref.exposeHoldersArray.filter(element => {
				return element.id !== val.id;
			});

			// Select the element by ID and remove it.
			const elementToRemove = ref.layout.querySelector(`#${val.id}`);
			if (elementToRemove) {
				delete ref[val.id];
				elementToRemove.remove();
			}
		}
	}
	this.removeLayoutElements = removeLayoutElements;

	//AD COVER used for mobile touch events
	var dataObj = {id:'adCover', type:'div',parent:this.layout, style:{position:'absolute',top:'0px',left:'0px',zIndex:'100',cursor:'pointer', width:'100%', height:'100%', display:'none', visibility:'visible'}}
	this.adCover = addLayoutElement(dataObj);
	if(!this.isDesktop){this.adDisplayArray.push({element:this.adCover.style,unit:'display', onDest:'block', offDest:'none'});}

	//TRANSPARENT COVER used for mobile float dragging touch events
	var dataObj = {id:'transparentCover', type:'div',parent:this.layout, style:{cursor:'pointer', width:'100%', height:'100%', visibility:'visible'}}
	this.transparentCover = addLayoutElement(dataObj);

	//TRANSPARENT INNER used to darken the background for player buttons
	dataObj = {id:'transparentInner', type:'div',parent:this.transparentCover, style:{cursor:'pointer', visibility:'inherit', width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.4)', opacity:this.opacityInit}}
	this.transparentInner = addLayoutElement(dataObj);
	this.displayArray.push({element:this.transparentInner.style,unit:'opacity', onDest:'1', offDest:'0'});

	//CONTEXT MENU PRIMIS for right click the player
	dataObj = {id:'contextMenuPrimis', type:'div',parent:this.layout, style:{zIndex: 100000, position:'absolute', width:'132px', height:'25px', cursor:'pointer', backgroundColor:'rgba(0,0,0,0.7)', borderRadius: '6px', borderWidth:'1px', borderStyle:'solid', borderColor:'white', display:'none'}}
	this.contextMenuPrimis = addLayoutElement(dataObj);

	dataObj = {id:'contextMenuPoweredBy', type:'div',parent:this.contextMenuPrimis, innerHTML:'Powered By', style:{position:'relative', float:'left', lineHeight: '25px', marginLeft:'5px', fontFamily: this.fontFamilyName, fontSize: '12px', cursor:'pointer', color:'white', display:'block'}}
	var a = addLayoutElement(dataObj);

	dataObj = {id:'contextMenusPrimisLogo', type:'div',parent:this.contextMenuPrimis, innerHTML:staticPrimisLogoSvg, style:{position:'relative', float:'right', height: '25px', width:'56px', marginRight:'4px', display:'block', cursor:'pointer'}}
	var b = addLayoutElement(dataObj);

	//BOTTOM ELEMENTS unit
	dataObj = {id:'bottomElements', type:'div',parent:this.layout, style:{width:'100%', bottom:'0px', left:'0px', position:'absolute', opacity:'1', visibility:'visible'}}
	var bottomElements = addLayoutElement(dataObj);
	this.displayArray.push({element:bottomElements.style, unit:'opacity', onDest:'1', offDest:'0', onStart:function(){bottomElements.style.display = 'block';},onComplete:function(){progressBar.style.pointerEvents = 'auto';}, offComplete:function(){bottomElements.style.display = 'none';ref.progressBar.style.pointerEvents = 'none';}});
	this.bgCoverArray.push({element:bottomElements.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	//CENTER ELEMENTS
	dataObj = {id:'centerElements', type:'div',parent:this.layout, style:{top:'50%', left:'50%', transform:'translate(-50%, -50%)', position:'absolute', opacity:'1', visibility:'visible'}}
	var centerElements = addLayoutElement(dataObj);
	this.displayArray.push({element:centerElements.style,unit:'opacity', onDest:'1', offDest:'0', onStart:function(){centerElements.style.display = 'block';}, offComplete:function(){centerElements.style.display = 'none';}});
	this.adDisplayArray.push({element:centerElements.style,unit:'visibility', onDest:'hidden', offDest:'visible'});
	this.bgCoverArray.push({element:centerElements.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	//LIKE AND VIEWS ELEMENTS
	var smallPlayerElementsTop = this.layoutConfig.showTitle ? "32px" : "10px";
	var bigPlayerElementsTop = this.layoutConfig.showTitle ? "41px" : "14px";

	dataObj = {id:'viewsElements', type:'div',parent:this.layout, style:{top:'50px', left:'25px', position:'absolute', zIndex:0, display:'inline-block', opacity:'0', visibility:'visible', fontFamily:this.fontFamilyName, pointerEvents : 'none'}}
	var viewsElements = addLayoutElement(dataObj);
	this.viewsElements = viewsElements;
	this.displayArray.push({element:viewsElements.style, unit:'opacity', onDest:'1', offDest:'0', onComplete:function(){viewsElements.style.pointerEvents = 'none';viewsIcon.style.pointerEvents = 'none';viewsNum.style.pointerEvents = 'none';likesNum.style.pointerEvents = 'none';},
		offComplete:function(){viewsElements.style.pointerEvents = 'auto';}});
	this.adDisplayArray.push({element:viewsElements.style,unit:'visibility', onDest:'hidden', offDest:'visible'});
	this.bgCoverArray.push({element:viewsElements.style,unit:'visibility', onDest:'hidden', offDest:'visible'});
	this.resizersArray.push({obj:viewsElements, left:['20px','9px'], top: [bigPlayerElementsTop, smallPlayerElementsTop]});

	dataObj = {id:'viewsIcon', type:'div',parent:viewsElements, innerHTML:viewsLogoSvg, style:{position:'relative', width:'35px', height:'19px', cursor:'pointer', pointerEvents : 'none', color:'white', float: 'left'}};
	var viewsIcon = addLayoutElement(dataObj);
	this.viewsIcon = viewsIcon;
	this.resizersArray.push({obj:viewsIcon, height:['19px','16px'], width:['18px','21px'], bottom:['1px','0px']});

	dataObj = {id:'viewsNum', type:'div',parent:viewsElements, style:{position:'relative', width:'max-content', height:'20px', cursor:'pointer', pointerEvents : 'none', color:'white', float: 'left', resizer:{fontSize:['18px','14px']}}};
	var viewsNum = addLayoutElement(dataObj);
	this.viewsNum = viewsNum;
	this.resizersArray.push({obj:viewsNum, fontSize:['14px','13px'], left:['2px','0px']});

	dataObj = {id:'likesIcon', type:'div',parent:viewsElements, innerHTML:likeBtnSVG, style:{position:'relative', width:'16px', height:'16px', cursor:'pointer', float: 'left', left: '10px'}};
	var likesIcon = addLayoutElement(dataObj);
	this.hoverColorArray.push(likesIcon);
	this.likesIcon = likesIcon;
	this.likesIcon.emptyLikesIconHTML = likesIcon.innerHTML;
	this.likesIcon.filledLikesIconHTML =  likesIcon.innerHTML.replace(new RegExp('fill="#fff"', 'g'), 'fill="white"').replace(new RegExp('fill="#000" fill-opacity="0"', 'g'), 'fill=' + this.designColor + ' fill-opacity="1"');
	this.resizersArray.push({obj:likesIcon, bottom:['1px','2px']});

	dataObj = {id:'likesNum', type:'div',parent:viewsElements, style:{position:'relative', width:'max-content', height:'20px', cursor:'pointer', pointerEvents : 'none', color:'white', float: 'left'}};
	var likesNum = addLayoutElement(dataObj);
	this.resizersArray.push({obj:likesNum, fontSize:['14px','13px'], left:['12px','14px']});

	//TOP LEFT ELEMENTS
	dataObj = {id:'topLeftElements', type:'div',parent:this.layout, style:{top:'0px', left:'0px', width:'calc(100% - 100px)', position:'absolute', opacity:'1', visibility:'visible'},resizer:{width:['calc(100% - 120px)','calc(100% - 90px)']}}
	var topLeftElements = addLayoutElement(dataObj);
	this.adDisplayArray.push({element:topLeftElements.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	//TOP RIGHT ELEMENTS
	dataObj = {id:'topRightElements', type:'div',parent:this.layout, style:{top:'0px', right:'0px', position:'absolute'}}
	var topRightElements = addLayoutElement(dataObj);
	this.adDisplayArray.push({element:topRightElements.style,unit:'visibility', onDest:'hidden', offDest:'visible'});
	this.bgCoverArray.push({element:topRightElements.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	//PROGRESS BAR
	dataObj = {id:'progressBar', type:'div',parent:bottomElements, style:{width:'100%', height:'17px', backgroundColor:'rgba(0,0,0,0.0)', bottom:'41px', left:'0px', position:'absolute', cursor:'pointer'}, resizer:{bottom:['41px','27px']}}
	var progressBar = addLayoutElement(dataObj);
	this.adDisplayArray.push({element:progressBar.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	dataObj = {id:'baseBar', type:'div',parent:progressBar, style:{width:'100%', height:'5px', backgroundColor:'rgba(0,0,0,0.6)', bottom:'6px', left:'0px', position:'absolute', cursor: 'pointer'}, resizer:{height:['5px','4px']}}
	var baseBar = addLayoutElement(dataObj);

	dataObj = {id:'loadBar', type:'div',parent:progressBar, style:{width:'0%', height:'5px', backgroundColor:'rgba('+this.rgbColor+',0.4)', bottom:'6px', left:'0px', position:'absolute', cursor: 'pointer'}, resizer:{height:['5px','4px']}}
	var loadBar = addLayoutElement(dataObj);
	this.loadBar = loadBar;

	dataObj = {id:'timeBar', type:'div',parent:progressBar, style:{width:'0%', height:'5px', backgroundColor:'rgba('+this.rgbColor+',1)', bottom:'6px', left:'0px', position:'absolute'}, resizer:{height:['5px','4px']}}
	var timeBar = addLayoutElement(dataObj);
	this.timeBar = timeBar;

	var hitArea = '<div style="position:absolute; width:30px; height:30px; top:50%; left:50%; transform:translate(-50%, -50%); cursor: pointer;"></div>'
	dataObj = {id:'timeDot', type:'div',parent:progressBar, innerHTML:hitArea, style:{width:'13px', height:'13px', backgroundColor:'rgb('+this.rgbColor+')', bottom:'8px', borderRadius:'50%', left:'0%', position:'absolute', transform:'translate(-50%,50%)', zIndex:10}, resizer:{width:['13px','9px'],height:['13px','9px']}}
	var timeDot = addLayoutElement(dataObj);

	//FULLSCREEN BTNS
	dataObj = {id:'fullScreenBtn', type:'div',parent:bottomElements, style:{width:'20px', height:'20px', bottom:'14px', right:'14px', position:'absolute', cursor:'pointer'}, resizer:{bottom:['14px','8px'],right:['14px','7px']}}
	var fullScreenBtn = addLayoutElement(dataObj);
	this.fullScreenBtn = fullScreenBtn;
	this.adImaDisplayArray.push({element:fullScreenBtn.style,unit:'visibility', onDest:'hidden', offDest:'visible'});
	this.adDisplayArray.push({element:fullScreenBtn.style,unit:'visibility', onDest:'visible', offDest:'visible'});

	dataObj = {id:'fullScreenIco', type:'div',parent:fullScreenBtn, innerHTML:fullScreenBtnSVG, style:{width:'12px', height:'12px', top:'50%', left:'50%', transform:'translate(-50%, -50%)', position:'relative', cursor:'pointer'}, resizer:{width:['20px','12px'],height:['20px','12px']}}
	var fullScreenIco = addLayoutElement(dataObj);
	this.hoverColorArray.push(fullScreenIco);

	dataObj = {id:'normalScreenBtn', type:'div',parent:bottomElements, style:{display:'none', width:'20px', height:'20px', bottom:'14px', right:'14px', position:'absolute', cursor:'pointer'}, resizer:{bottom:['14px','8px'],right:['14px','7px']}}
	var normalScreenBtn = addLayoutElement(dataObj);
	//this.hoverColorArray.push(normalScreenBtn);
	this.normalScreenBtn = normalScreenBtn;

	dataObj = {id:'normalScreenIco', type:'div',parent:normalScreenBtn, innerHTML:normalScreenBtnSVG, style:{width:'12px', height:'12px', top:'50%', left:'50%', transform:'translate(-50%, -50%)', position:'relative', cursor:'pointer'}, resizer:{width:['20px','12px'],height:['20px','12px']}}
	var normalScreenIco = addLayoutElement(dataObj);
	this.hoverColorArray.push(normalScreenIco);

	// CAPTIONS BTN
	var captionsRight = this.layoutConfig.allowFullScreen ? ['50px','34px'] : ['14px','11px'];
	dataObj = {id:'captionsOnBtn', type:'div',parent:bottomElements, style:{width:'20px', height:'20px', bottom:'10px', right:'50px', position:'absolute', cursor:'pointer'}, resizer:{bottom:['10px','5px'],right:captionsRight}}
	var captionsOnBtn = addLayoutElement(dataObj);
	this.captionsOnBtn = captionsOnBtn;

	dataObj = {id:'captionsOnIco', type:'div',parent:captionsOnBtn, innerHTML:captionsOnBtnSVG, style:{width:'12px', height:'12px', top:'50%', left:'50%', transform:'translate(-50%, -50%)', position:'relative', cursor:'pointer'}, resizer:{width:['30px','20px'],height:['30px','20px']}}
	var captionsOnIco = addLayoutElement(dataObj);
	this.hoverColorArray.push(captionsOnIco);

	dataObj = {id:'captionsOffBtn', type:'div',parent:bottomElements, style:{display: 'none', width:'20px', height:'20px', bottom:'10px', right:'50px', position:'absolute', cursor:'pointer'}, resizer:{bottom:['10px','5px'],right:captionsRight}}
	var captionsOffBtn = addLayoutElement(dataObj);
	this.captionsOffBtn = captionsOffBtn;

	dataObj = {id:'captionsOffIco', type:'div',parent:captionsOffBtn, innerHTML:captionsOffBtnSVG, style:{width:'12px', height:'12px', top:'50%', left:'50%', transform:'translate(-50%, -50%)', position:'relative', cursor:'pointer'}, resizer:{width:['30px','20px'],height:['30px','20px']}}
	var captionsOffIco = addLayoutElement(dataObj);
	this.hoverColorArray.push(captionsOffIco);

	this.adDisplayArray.push({element:captionsOnBtn.style,unit:'visibility', onDest:'hidden', offDest:'visible'});
	this.adDisplayArray.push({element:captionsOffBtn.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	//SOUND CONTROLL
	this.soundControllRightRef = this.layoutConfig.allowFullScreen ? ['50px', '34px'] : ['14px', '11px'];
	this.soundControllRight = this.soundControllRightRef.slice();

	function resizerSoundControllRight()
	{
		if(ref.adStarted) //ad playing
		{
			return ['43px', '30px'];
		}
		else
		{
			return ref.soundControllRight;
		}
	}
	dataObj = {id:'soundControll', type:'div',parent:bottomElements, style:{bottom:'25px', right:'50px', position:'absolute', cursor:'pointer'}, resizer:{bottom:['23px','17px'],right:resizerSoundControllRight}}
	var soundControll = addLayoutElement(dataObj);
	this.soundControll = soundControll;
	this.adImaDisplayArray.push({element:soundControll.style,unit:'left', onDest:'110px', offDest:'unset'}, {element:soundControll.style,unit:'bottom', onDest:'12px', offDest:'17px'}, {element:soundControll.style,unit:'right', onDest:'unset', offDest:ref.soundControllRight[1]});
	this.adDisplayArray.push({element:soundControll.style,unit:'right', onDest:this.soundControllRightRef, offDest:ref.soundControllRight});
	this.adDisplayArray.push({element:soundControll.style,unit:'visibility', onDest:'visible', offDest:'visible'});
	dataObj = {id:'soundScrabber', type:'div',parent:soundControll, style:{position:'absolute', right:'0px', bottom:'0px', transform:'translate(0, 50%)', display:'block', opacity:'0', visibility:'hidden'}}
	var soundScrabber = addLayoutElement(dataObj);
	this.soundScrabber = soundScrabber;

	dataObj = {id:'soundScrabberBG', type:'div',parent:soundScrabber, style:{width:'174px', height:'40px', opacity:'0.72', borderRadius:'5px', backgroundColor:'#0c0c0c', position:'absolute', right:'-8px', bottom:'0px', transform:'translate(0, 50%)'}, resizer:{width:['174px','108px'],height:['40px','27px']}}
	var soundScrabberBG = addLayoutElement(dataObj);

	dataObj = {id:'soundScrabberHit', type:'div',parent:soundScrabber, style:{width:'120px', height:'17px', bottom:'0px', right:'32px', position:'absolute', transform:'translate(0, 50%)', cursor:'pointer'}, resizer:{width:['120px','65px'],right:['32px','24px']}}
	var soundScrabberHit = addLayoutElement(dataObj);
	this.soundScrabberHit = soundScrabberHit;

	dataObj = {id:'soundScrabberBase', type:'div',parent:soundScrabberHit, style:{width:'100%', height:'4px', bottom:'6px', right:'0px', position:'absolute', opacity:'0.34', borderRadius:'2px', backgroundColor:'#fefefe', cursor:'pointer'}}
	var soundScrabberBase = addLayoutElement(dataObj);

	dataObj = {id:'soundScrabberMain', type:'div',parent:soundScrabberHit, style:{width:'50%', height:'4px', bottom:'6px', left:'0px', position:'absolute', borderRadius:'2px', backgroundColor:'#fefefe', cursor:'pointer'}}
	var soundScrabberMain = addLayoutElement(dataObj);

	dataObj = {id:'soundOnBtn', type:'div',parent:soundControll, innerHTML:soundOnBtnSVG, style:{width:'22px', height:'22px', bottom:'0px', right:'0px', position:'absolute', transform:'translate(0, 50%)', display:'none', cursor:'pointer'}, resizer:{width:['22px','16px'],height:['22px','16px']}}
	var soundOnBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(soundOnBtn);

	dataObj = {id:'soundOffBtn', type:'div',parent:soundControll, innerHTML:soundOffBtnSVG, style:{width:'22px', height:'22px', bottom:'0px', right:'0px', position:'absolute', transform:'translate(0, 50%)', cursor:'pointer'}, resizer:{width:['22px','16px'],height:['22px','16px']}}
	var soundOffBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(soundOffBtn);

	//PROGRESS TEXT
	dataObj = {id:'progressTxt', type:'div',parent:bottomElements, style:{pointerEvents:'none', bottom:'14px', left:'19px', position:'absolute', fontSize:'14px', fontFamily:this.fontFamilyName, color:'#fff'}, resizer:{fontSize:['14px','11px'],bottom:['14px','10px'],left:['19px','11px']}};
	var progressTxt = addLayoutElement(dataObj);
	progressTxt.innerText = '';
	this.adDisplayArray.push({element:progressTxt.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	//CENTERED ELEMENTS
	dataObj = {id:'playBtn', type:'div',parent:centerElements, innerHTML:playBtnSVG, style:{visibility:'visible', width:'60px', height:'60px', top:'0px', left:'0px', position:'absolute', transform:'translate(-50%, -50%)', zIndex:1, cursor:'pointer'}, resizer:{width:['60px','40px'],height:['60px','40px']}};
	var playBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(playBtn);
	this.adImaDisplayArray.push({element:playBtn.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	dataObj = {id:'pauseBtn', type:'div',parent:centerElements, innerHTML:pauseBtnSVG, style:{visibility:'visible',width:'60px', height:'60px', top:'0px', left:'0px', position:'absolute', transform:'translate(-50%, -50%)', zIndex:1, display:'none', cursor:'pointer'}, resizer:{width:['60px','40px'],height:['60px','40px']}};
	var pauseBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(pauseBtn);
	this.adImaDisplayArray.push({element:pauseBtn.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	dataObj = {id:'backBtn', type:'div',parent:centerElements, style:{width:'44px', height:'44px', top:'50%', right:'42px', transform:'translate(-50%, -50%)', position:'absolute', cursor:'pointer'}, resizer:{right:['22px','6px']}};
	var backBtn = addLayoutElement(dataObj);

	dataObj = {id:'backBtnIco', type:'div',parent:backBtn, innerHTML:prvNxtBtnSVG, style:{width:'24px', height:'24px', top:'50%', left:'50%', transform:'translate(-50%, -50%)', position:'relative', cursor:'pointer'}, resizer:{width:['24px','18px'],height:['24px','18px']}};
	var backBtnIco = addLayoutElement(dataObj);
	this.hoverColorArray.push(backBtnIco);

	dataObj = {id:'nextBtn', type:'div',parent:centerElements, style:{width:'44px', height:'44px', top:'50%', left:'42px', transform:'translate(50%, -50%)', position:'absolute', cursor:'pointer'}, resizer:{left:['22px','6px']}}
	var nextBtn = addLayoutElement(dataObj);

	dataObj = {id:'nextBtnIco', type:'div',parent:nextBtn, innerHTML:prvNxtBtnSVG, style:{width:'24px', height:'24px', top:'50%', left:'50%', transform:'scale(-1) translate(50%, 50%)', position:'relative', cursor:'pointer'}, resizer:{width:['24px','18px'],height:['24px','18px']}}
	var nextBtnIco = addLayoutElement(dataObj);
	this.hoverColorArray.push(nextBtnIco);

	//Skip Progress Elements
	dataObj = {id:'skipXsec', type:'div', parent:bottomElements, style:{width:'110px', height:'14px', position:'absolute', bottom:'10px', left:'50%', transform: 'translateX(-50%)'}, resizer:{width:['110px','75px'], height:['21px','14px'], bottom:['10px','8px']}};
	var skipXsec = addLayoutElement(dataObj);
	this.adDisplayArray.push({element:skipXsec.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	dataObj = {id:'skipXsecBackBtn', type:'div', parent:skipXsec, style:{width:'21px', height:'21px', left:'0', position:'absolute', cursor:'pointer'}, resizer:{width:['21px','14px'], height:['21px','14px']}};
	this.skipXsecBackBtn = addLayoutElement(dataObj);

	dataObj = {id:'skipXsecBackBtnIco', type:'div', parent:this.skipXsecBackBtn, innerHTML:skipProgressBtnSvg, style:{width:'21px', height:'21px', position:'relative', cursor:'pointer'}, resizer:{width:['21px','14px'], height:['21px','14px']}};
	var skipXsecBackBtnIco = addLayoutElement(dataObj);
	this.hoverColorArray.push(skipXsecBackBtnIco);

	dataObj = {id:'skipXsecForwardBtn', type:'div', parent:skipXsec, style:{width:'21px', height:'21px', right:'0px', position:'absolute', cursor:'pointer', transform: 'scaleX(-1)'}, resizer:{width:['21px','14px'], height:['21px','14px']}};
	this.skipXsecForwardBtn = addLayoutElement(dataObj);

	dataObj = {id:'skipXsecForwardBtnIco', type:'div', parent:this.skipXsecForwardBtn, innerHTML:skipProgressBtnSvg, style:{width:'21px', height:'21px', position:'relative', cursor:'pointer'}, resizer:{width:['21px','14px'], height:['21px','14px']}};
	var skipXsecForwardBtnIco = addLayoutElement(dataObj);
	this.hoverColorArray.push(skipXsecForwardBtnIco);

	dataObj = {id:'skipXsecStaticNum', type:'div', parent:skipXsec, innerHTML:'10 Sec', style:{position:'absolute', left:'50%', transform: 'translateX(-50%)', color:'#fff', fontSize:'14px', lineHeight:'17px', fontFamily:this.fontFamilyName}, resizer:{fontSize:['14px','10px'], lineHeight:['17px','12px']}};
	var skipXsecStaticNum = addLayoutElement(dataObj);

	//TOP LEFT ELEMENTS
	var publisherLogoStyle = this.layoutConfig.publisherLogoPosition == 'left' ? {left:'19px'} : {right:'19px'};
	dataObj = {id:'publisherLogo', type:'img',parent:this.layout, style:{zIndex:'-1', top:'14px', position:'absolute', userSelect:'none', msUserSelect:'none', mozUserSelect:'none', webkitUserSelect:'none', display:'none', opacity:'0.4'}};
	SekindoUtils.assignObject(dataObj.style, publisherLogoStyle);
	this.isPublisherImageLoaded = false;
	var publisherLogo = addLayoutElement(dataObj);
	var publisherLogoPosition = this.layoutConfig.publisherLogoPosition == 'left' ? {left:['19px','13px']} : {right:['19px','13px']};
	var resizerObj = {obj:publisherLogo, top:['14px','10px'],transform:['translate(50%, 50%) scale(2)','translate(0%, 0%) scale(1)']};
	SekindoUtils.assignObject(resizerObj, publisherLogoPosition);
	this.resizersArray.push(resizerObj);
	this.adDisplayArray.push({element:publisherLogo.style,unit:'visibility', onDest:'hidden', offDest:'visible'});
	this.bgCoverArray.push({element:publisherLogo.style,unit:'visibility', onDest:'hidden', offDest:'visible'});

	dataObj = {id:'titleObj', type:'div',parent:topLeftElements, style:{ top:'14px', left:'19px', width:'100%', fontFamily:this.fontFamilyName, fontSize:'18px', color:"white", position:'absolute', display:'none', opacity:'1'}, resizer:{top:['14px','10px'],left:['19px','11px'],fontSize:['18px','14px']}}
	var titleObj = addLayoutElement(dataObj);
	this.displayArray.push({element:titleObj.style, unit:'opacity', onDest:'1', offDest:'0', onStart:function(){titleObj.style.pointerEvents = 'auto';}, offComplete:function(){titleObj.style.pointerEvents='none';}});

	dataObj = {id:'titleTxt', type:'div',parent:titleObj, style:{cursor:'pointer', paddingRight:'15px', textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden', userSelect:'none', msUserSelect:'none', mozUserSelect:'none', webkitUserSelect:'none'}};
	var titleTxt = addLayoutElement(dataObj);

	dataObj = {id:'titleIco', type:'div',parent:titleObj, innerHTML:openTabIconSVG, style:{pointerEvents:'none', marginLeft:'-15px', width:'14px', minWidth: '14px', height:'14px', paddingRight:'5px', transform:'scale(-1, 1)', marginTop: '3px'}, resizer:{width:['14px','12px'],minWidth:['14px','12px'],height:['14px','12px'],marginTop:['3px','1px']}};
	var titleIco = addLayoutElement(dataObj);
	titleIco.innHTML = titleIco.innerHTML;

	//TOP RIGHT ELEMENTS
	dataObj = {id:'primisLogoWrapper', type:'div',parent:topRightElements, style:{transform:'scale(1.5)', cursor:'pointer'}, resizer:{transform:['scale(1.5)','scale(1.1)']}}
	var primisLogoWrapper = addLayoutElement(dataObj);

	dataObj = {id:'primisLogo', type:'div',parent:primisLogoWrapper, innerHTML:primisLogoSVG, style:{top:'8px', right:'7px', width:'42px', position:'absolute', opacity:'1', cursor: 'pointer'}, displayer:{unit:'width', onDest:'42px', offDest:'12px'}}
	var primisLogo = addLayoutElement(dataObj);
	primisLogo.innerTxt = primisLogo.ownerDocument.getElementById('primisLogoTxt');
	this.displayArray.push({element:primisLogo.innerTxt.style, unit:'opacity', onDest:'2', offDest:'0', onStart:function(){primisLogo.style.pointerEvents = 'auto';}, offComplete:function(){primisLogo.style.pointerEvents='none';}});

	//shareBtnSVG emailBtnSVG facebookBtnSVG linkedinBtnSVG pinterestBtnSVG twitterBtnSVG whatsappBtnSVG
	dataObj = {id:'shareContainer', type:'div',parent:topRightElements, style:{ top:'38px', right:'8px', position:'absolute', zIndex:'1', opacity:'1', display:'none', cursor: 'pointer'}, resizer:{top:['38px','26px']}}
	var shareContainer = addLayoutElement(dataObj);
	this.displayArray.push({element:shareContainer.style, unit:'opacity', onDest:'1', offDest:'0', onComplete:function(){shareContainer.style.pointerEvents = 'auto';}, offComplete:function(){shareContainer.style.pointerEvents = 'none';shareBG.style.display = 'none';facebookBtn.style.display = 'none';twitterBtn.style.display = 'none';linkedinBtn.style.display = 'none';pinterestBtn.style.display = 'none';whatsappBtn.style.display = 'none';emailBtn.style.display = 'none';}});

	// positioning share buttons in a 1/2 rows according to available width
	function shareBGWidth() {return (ref.layoutConfig.playerWidth < 260) ? '142px' : '242px';}
	function shareBGHeight() {return (ref.layoutConfig.playerWidth < 260) ? '64px' : '34px';}
	function pinterestBtnRight() {return (ref.layoutConfig.playerWidth < 260)?'44px':'146px';}
	function shareBtnsTop() {return (ref.layoutConfig.playerWidth < 260)?'40px':'10px';}
	function whatsappBtnRight() {return (ref.layoutConfig.playerWidth < 260) ? '78px' : '180px';}
	function emailBtnRight() {return (ref.layoutConfig.playerWidth < 260) ? '112px' : '214px';}

	dataObj = {id:'shareBG', type:'div',parent:shareContainer, style:{ top:'0px', right:'0px', width:'322px', height:'40px', objectFit: 'contain', opacity: '0.72', borderRadius: '5px', backgroundColor: '#0c0c0c', position:'absolute', display:'none', opacity:'0'}, resizer:{width:['322px',shareBGWidth],height:['40px',shareBGHeight]}}
	var shareBG = addLayoutElement(dataObj);

	dataObj = {id:'shareBtn', type:'div',parent:shareContainer, innerHTML:shareBtnSVG, style:{ width:'20px', height:'20px', position:'absolute', top:'10px', right:'10px', cursor:'pointer'}, resizer:{width:['20px','14px'],height:['20px','14px']}}
	var shareBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(shareBtn);

	dataObj = {id:'facebookBtn', type:'div',parent:shareContainer, innerHTML:facebookBtnSVG, style:{ top:'10px', right:'56px', width:'20px', height:'20px', position:'absolute', display:'none', opacity:'0', cursor:'pointer'}, resizer:{width:['20px','14px'],height:['20px','14px'], right:['56px','44px']}}
	var facebookBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(facebookBtn);

	dataObj = {id:'twitterBtn', type:'div',parent:shareContainer, innerHTML:twitterBtnSVG, style:{ top:'10px', right:'102px', width:'20px', height:'20px', position:'absolute', display:'none', opacity:'0', cursor:'pointer'}, resizer:{width:['20px','14px'],height:['20px','14px'], right:['102px','78px']}}
	var twitterBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(twitterBtn);

	dataObj = {id:'linkedinBtn', type:'div',parent:shareContainer, innerHTML:linkedinBtnSVG, style:{ top:'10px', right:'148px', width:'20px', height:'20px', position:'absolute', display:'none', opacity:'0', cursor:'pointer'}, resizer:{width:['20px','14px'],height:['20px','14px'], right:['148px','112px']}}
	var linkedinBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(linkedinBtn);

	dataObj = {id:'pinterestBtn', type:'div',parent:shareContainer, innerHTML:pinterestBtnSVG, style:{ top:'10px', right:'194px', width:'20px', height:'20px', position:'absolute', display:'none', opacity:'0', cursor:'pointer'}, resizer:{width:['20px','14px'],height:['20px','14px'], right:['194px',pinterestBtnRight], top:['10px',shareBtnsTop]}}
	var pinterestBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(pinterestBtn);

	dataObj = {id:'whatsappBtn', type:'div',parent:shareContainer, innerHTML:whatsappBtnSVG, style:{ top:'10px', right:'240px', width:'20px', height:'20px', position:'absolute', display:'none', opacity:'0', cursor:'pointer'}, resizer:{width:['20px','14px'],height:['20px','14px'], right:['240px',whatsappBtnRight], top:['10px',shareBtnsTop]}}
	var whatsappBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(whatsappBtn);

	dataObj = {id:'emailBtn', type:'div',parent:shareContainer, innerHTML:emailBtnSVG, style:{ top:'10px', right:'286px', width:'20px', height:'20px', position:'absolute', display:'none', opacity:'0', cursor:'pointer'}, resizer:{width:['20px','14px'],height:['20px','14px'], right:['286px',emailBtnRight], top:['10px',shareBtnsTop]}}
	var emailBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(emailBtn);

	dataObj = {id:'lightBoxCloseBtn', type:'div',parent:this.trigger({type:this.fetch.getObj, value:'config.mainVideoDiv'}), innerHTML:lightboxCloseBtnSVG, style:{position:'absolute', zIndex:11, width:'24px', height:'24px', top:'-28px', right:'-28px', opacity:1, display:'none', cursor:'pointer'}};
	var lightBoxCloseBtn = addLayoutElement(dataObj);
	this.hoverColorArray.push(lightBoxCloseBtn);
	this.lightBoxCloseBtn = lightBoxCloseBtn;

	dataObj = {id:'liveIco', type:'div',parent:this.layout, innerHTML:liveIcoSVG, style:{position:'absolute', zIndex:11, width:'31px', height:'12px', bottom:'9px', left:'9px', display:'none', cursor:'pointer', pointerEvents : 'none'}};
	var liveIco = addLayoutElement(dataObj);
	this.resizersArray.push({obj:liveIco, width:['52px','31px'], height:['20px','12px'], bottom:['13px','9px'], left:['18px','9px']});
	this.adDisplayArray.push({element:liveIco.style,unit:'visibility', onDest:'hidden', offDest:'visible'});
	this.bgCoverArray.push({element:liveIco.style,unit:'visibility', onDest:'hidden', offDest:'visible'});
	this.liveIco = liveIco;

	dataObj = {
		id: 'primisVastIconsContainer',
		type: 'div',
		parent: this.layout
	}
	const vastIconsContainer = addLayoutElement(dataObj);
	this.vastIconsContainer = vastIconsContainer;

	//Add hover color to all relevant buttons
	this.setHoverColors = function(colorsArray)
	{
		for(var el in colorsArray)
		{
			if((typeof colorsArray[el]) != 'object')return;
			if(colorsArray[el].childNodes)colorsArray[el].childNodes[0].style.pointerEvents = 'none';
			colorsArray[el].innHTML = colorsArray[el].innerHTML;
			if(this.isDesktop)
			{
				colorsArray[el].addEventListener(this.evtType.mouseover, function (e)
				{
					var innerHTML = e.currentTarget.innerHTML;
					innerHTML = innerHTML.replace(new RegExp('fill="#fff"', 'g'), 'fill="' + ref.designColor + '"');
					e.currentTarget.innerHTML = innerHTML;
				});
				colorsArray[el].addEventListener(this.evtType.mouseout, function (e)
				{
					e.currentTarget.innerHTML = e.currentTarget.innHTML;
				});
			}
			else
			{
				colorsArray[el].addEventListener(this.evtType.mouseup, function (e)
				{
					var ref1 = this;
					var innerHTML = e.currentTarget.innerHTML;
					innerHTML = innerHTML.replace(new RegExp('fill="#fff"', 'g'), 'fill="' + ref.designColor + '"');
					e.currentTarget.innerHTML = innerHTML;
					this.targ = e.currentTarget;
					setTimeout(function(){ref1.targ.innerHTML = ref1.targ.innHTML;},400)
				});
			}
		}
	}
	this.setHoverColors(this.hoverColorArray);

	//hide unused buttons
	var checkActiveElements = [captionsOnBtn, captionsOffBtn, fullScreenBtn, normalScreenBtn, backBtn, nextBtn, primisLogo, lightBoxCloseBtn, skipXsec];
	for(var i =0; i < checkActiveElements.length; i++)
	{
		var elm = checkActiveElements[i];
		if(!elm.style)return;
		elm.style.display = (this.activeButtons.indexOf(elm.id) != -1)?elm.style.display:'none';
	}
};

LayoutDesign.prototype.setPublisherLogoDimensions = function()
{
	var ref = this;
	ref.publisherLogo.alt = "";
	ref.publisherLogo.style.display =  'block';
	var ar = ref.publisherLogo.naturalHeight / ref.publisherLogo.naturalWidth;
	ar = Math.max(0.1,Math.min(10,parseInt(ar*100)/100))
	var wCurve = SekindoUtils.getBezierAnim('easeOut',  ar/15 );
	var w = 80 - wCurve * 80 + 20;
	ref.publisherLogo.style.maxWidth = parseInt(w) +'px';

	var hCurve = SekindoUtils.getBezierAnim('easeOut',  0.666-ar/15 );
	var h = 80 - hCurve * 80 + 20;
	ref.publisherLogo.style.maxHeight = parseInt(h) +'px';
}

LayoutDesign.prototype.addLayoutFunctionality = function()
{
	var ref = this;

	this.preventDefault = function(e)
	{
		if(e && e.cancelable)e.preventDefault();
	}
	this.likesIcon.addEventListener(this.evtType.click, function()
	{
		ref.trigger({type:ref.noteOut.onVideoLike});
	}, SekindoUtils.passiveEvent());

	this.progressBar.addEventListener(this.evtType.click, onProgressBarClick, SekindoUtils.passiveEvent());
	function onProgressBarClick(e)
	{
		//avoid dragging result in desktop when mouse exits player area
		if(ref.dragging && (e.currentTarget != ref.layout && ref.isDesktop))return;

		var pct = (e.offsetX || e.touches[0].clientX || ref.timeBar.offsetWidth) / ref.progressBar.offsetWidth;
		var val = (pct * 100) +'%';
		if(!ref.dragging && e.currentTarget == ref.progressBar)
		{
			SekindoUtils.animateTo(ref.timeBar.style, 'width', val, 0.4, 'easeIn');
			SekindoUtils.animateTo(ref.timeDot.style, 'left', val, 0.4, 'easeIn');
		}

		ref.dragging = false;

		var time = Math.min(1, Math.max(0, pct));
		ref.trigger({type:ref.noteOut.onTimeScrabber,  value:time});
	}

	this.skipXsecForwardBtn.addEventListener(this.evtType.mouseup, onSkipProgressUpdate);
	this.skipXsecBackBtn.addEventListener(this.evtType.mouseup, onSkipProgressUpdate);

	function onSkipProgressUpdate(e)
	{
		var currSkipBtn = e.currentTarget.id,
			skipValue = currSkipBtn === 'skipXsecForwardBtn' ? 10 : -10,
			timeBarWidth = parseFloat(ref.timeBar.style.width),
			videoDuration = parseInt(configPlayer.contentPlayList[configPlayer.currContentIndex].duration),
			progressbarWidth = ref.loadBar.offsetWidth,
			toSkipProgress = progressbarWidth / videoDuration * 10 / progressbarWidth,
			percentSkipTo = currSkipBtn === 'skipXsecForwardBtn' ? timeBarWidth + toSkipProgress * 100 : timeBarWidth - toSkipProgress * 100;

		percentSkipTo = (Math.min(100, Math.max(0, percentSkipTo)) + '%');
		SekindoUtils.animateTo(ref.timeBar.style, 'width', percentSkipTo, 0.4, 'easeIn');
		SekindoUtils.animateTo(ref.timeDot.style, 'left', percentSkipTo, 0.4, 'easeIn');

		ref.trigger({type:ref.noteOut.onSkipProgress, value:skipValue});
	}

	//Update the progress bar according to the video progress with "videoProgress" event.
	this.progressBar.onTimeEvent = function(val)
	{
		ref.duration = val.duration;
		ref.loadBar.style.width = val.loaded/val.duration*100+'%';
		if(!ref.dragging)
		{
			ref.timeBar.style.width = val.currTime/val.duration*100+'%';
			ref.timeDot.style.left = val.currTime/val.duration*100+'%';
		}
	};

	this.dragging = false;
	this.timeDot.addEventListener(this.evtType.mousedown, function(e)
	{
		ref.preventDefault(e);
		ref.dragging = true;
		ref.movementXplorer = e.clientX;//Solution for Explorer and mobile
	}, SekindoUtils.passiveEvent());

	this.timeDot.addEventListener(this.evtType.mousemove, function (e)
	{
		ref.preventDefault(e);
		if(!ref.dragging)return;
		if(!ref.isDesktop)
		{
			if(e.movementX == undefined || e.movementX == NaN)//Solution for Explorer and mobile
			{
				e.movementX = (e.clientX || e.touches[0].clientX) - ref.movementXplorer;
				ref.movementXplorer = (e.clientX || e.touches[0].clientX);
			}

			var X = parseInt(ref.timeDot.offsetLeft)

			X += e.movementX;
			ref.timeDot.style.left = X +'px';

			var pct = ref.timeDot.offsetLeft / ref.progressBar.offsetWidth;
			var val = (pct * 100) +'%';
			ref.timeBar.style.width = val;
		}
		else
		{
			if(!ref.dragging)return;
			var pct = e.clientX / ref.progressBar.offsetWidth;
			var val = (pct * 100) +'%';
			ref.timeBar.style.width = val;
			ref.timeDot.style.left = val;
		}
	}, SekindoUtils.passiveEvent());

	this.rightClickHandling = function()
	{
		if (!ref.isDesktop)
		{
			return;
		}
		ref.contextmenuTO;
		ref.layout.addEventListener('contextmenu', function (e)
		{
			ref.preventDefault(e);
			var rect = ref.layout.getBoundingClientRect();
			ref.contextMenuPrimis.style.top = Math.min(rect.height - parseInt(ref.contextMenuPrimis.style.height) - 2, e.clientY - (rect.y ? rect.y : rect.top) + 25) + 'px';
			ref.contextMenuPrimis.style.left = Math.min(rect.width - parseInt(ref.contextMenuPrimis.style.width) - 2, e.clientX - (rect.x ? rect.x : rect.left) + 12) + 'px';
			ref.contextMenuPrimis.style.display = 'block';

			if (ref.contextmenuTO) clearTimeout(ref.contextmenuTO);
			ref.contextmenuTO = setTimeout(function () {
				ref.contextMenuPrimis.style.display = 'none';
			}, 2500);

		}, false);

		ref.contextMenuPrimis.addEventListener(ref.evtType.click, function () {
			window.open('https://www.primis.tech?utm_source=promoted', "_blank");
		}, SekindoUtils.passiveEvent());
	}
	this.rightClickHandling();

	this.layout.addEventListener(this.evtType.mouseleave,function(e)
	{
		if(ref.layoutConfig.clientInfo.browser == 'papp')ref.preventDefault(e);
		ref.dragging = false;
	});

	this.timeDot.addEventListener(this.evtType.mouseup, onTimeDotMouseUp);
	this.timeDot.addEventListener(this.evtType.mouseleave, onTimeDotMouseUp);
	this.layout.addEventListener(this.evtType.mouseup, onTimeDotMouseUp);
	function onTimeDotMouseUp(e)
	{
		if(ref.layoutConfig.clientInfo.browser == 'papp')ref.preventDefault(e);
		if(!ref.dragging)return;
		onProgressBarClick(e);
		ref.dragging = false;
	};

	this.publisherLogo.onload = function(val)
	{
		ref.setPublisherLogoDimensions();
		ref.isPublisherImageLoaded = true;
	};

	this.publisherLogo.onerror = function()
	{
		try
		{
			ref.publisherLogo.parentNode.removeChild(ref.publisherLogo);
		}
		catch (e){}
	};

	this.publisherLogo.src = this.layoutConfig.logoUrl;

	this.soundControll.addEventListener(this.evtType.mouseenter, function(e)
	{
		ref.preventDefault(e);
		if(!ref.isDesktop) return;
		if(ref.sizeCompare < 350){ref.skipXsec.style.zIndex = '-1';}
		ref.soundScrabber.style.visibility = 'visible';
		SekindoUtils.animateTo(ref.soundScrabber.style, 'opacity', '1', 0.4, 'easeOut');
		// hide video time if not enough width
		var distCalc = (ref.layoutConfig.allowFullScreen? 22 : 0) + ((ref.captionsStatus != -1)? 32 : 0) + 180;
		ref.progressTxt.style.display = (ref.layoutConfig.playerWidth > distCalc)?'block':'none';
	});

	this.soundControll.addEventListener(this.evtType.mouseleave, function(e)
	{
		ref.preventDefault(e);
		if(!ref.isDesktop) return;
		SekindoUtils.animateTo(ref.soundScrabber.style, 'opacity', '0', 0.4, 'easeOut', function(){ref.soundScrabber.style.visibility = 'hidden';});
		ref.skipXsec.style.zIndex = 'unset';
		ref.progressTxt.style.display = 'block';
	});

	this.soundScrabberHit.addEventListener(this.evtType.click,function(e)
	{
		ref.preventDefault(e);
		var pct = e.offsetX/ref.soundScrabberHit.offsetWidth;
		var val = (pct * 100) +'%';
		var vol = Math.min(1, Math.max(0, pct));
		ref.trigger({type:ref.noteOut.onVolumeScrabber, value:vol});
	}, SekindoUtils.passiveEvent());

	this.soundOnBtn.addEventListener(this.evtType.mouseup, function(e)
	{
		ref.preventDefault(e);
		ref.trigger({type:ref.noteOut.onMute, value:true});
	});

	this.soundOffBtn.addEventListener(this.evtType.mouseup, function(e)
	{
		ref.preventDefault(e);
		ref.trigger({type:ref.noteOut.onMute, value:false});
	});

	//On mobile first click exposes the layout. second click is on elements
	this.adCover.addEventListener(this.evtType.click, function(e) {ref.trigger({type:ref.noteOut.onAdCover, value:e});}, SekindoUtils.passiveEvent());
	this.adCover.addEventListener(this.evtType.mouseup, function(e){ref.trigger({type:ref.noteOut.onAdCover, value:e});},false);
	this.adCover.addEventListener(this.evtType.mousemove, function(e){ref.trigger({type:ref.noteOut.onAdCover, value:e});}, SekindoUtils.passiveEvent());
	this.transparentCover.addEventListener(this.evtType.click, function(e) {ref.trigger({type:ref.noteOut.onTransparentCover, value:e});}, SekindoUtils.passiveEvent());
	this.transparentCover.addEventListener(this.evtType.mouseup, function(e){ref.trigger({type:ref.noteOut.onTransparentCover, value:e});},false);
	this.transparentCover.addEventListener(this.evtType.mousemove, function(e){ref.trigger({type:ref.noteOut.onTransparentCover, value:e});}, SekindoUtils.passiveEvent());

	this.exposeHideLayout = function (val, eventType) {
		ref.preventDefault(val);
		function adCoverDisplay(type) {
			if (type === 'expose') {
				ref.adCover.style.display = 'none';
			}
			else if (type === 'hide' && !ref.isDesktop) {
				ref.adCover.style.display = 'block';
			}
		}
		if (ref.trigger({type:ref.fetch.adIsPlaying})) adCoverDisplay(eventType);
		for (var i in ref.displayArray) {
			//element, unit, dest, time, type, onComplete, onAnimate
			var obj = ref.displayArray[i],
				time = 0.4,
				element = obj.element;
			if (!element) return;
			if (eventType === 'expose') {
				var type = 'easeIn';
				if(obj.onStart)obj.onStart();
				SekindoUtils.animateTo(element, obj.unit, obj.onDest, time, type, obj.onComplete);
			}
			else {
				var type = 'easeOut';
				SekindoUtils.animateTo(element, obj.unit, obj.offDest, time, type, obj.offComplete);
			}
		}
	}

	/**
	 * Display vast icons in the player.
	 *
	 * This function is responsible for managing and rendering vast icons in the player.
	 *
	 * @param {Array} icons - An array of icon objects to be displayed.
	 * To remove all icons pass [] or false.
	 */
	this.vastIconsDisplay = function (icons)
	{
		// Check if there are icons to add or remove.
		icons.length ? addIcons(icons) : removeIcons();

		/**
		 * Add icons to the player.
		 *
		 * @param {Array} icons - An array of icon objects to be displayed.
		 */
		function addIcons(icons)
		{
			// Remove any existing icons before adding new ones.
			removeIcons();

			// Handle the 'adStarted' event by rendering each icon.
			for (const [index, icon] of icons.entries()) {
				renderIcon(icon, index);
			}
		}

		/**
		 * Remove existing icons from the player.
		 */
		function removeIcons()
		{
			dataObj = {
				class: ['primisVastIconContainer', 'primisVastIconImg']
			};
			ref.removeLayoutElements(dataObj);
		}

		/**
		 * Render an individual icon on the player.
		 *
		 * @param {Object} icon - The icon object to be rendered.
		 */
		function renderIcon(icon, index)
		{
			const iconElement = renderIconElement(icon, index);

			// Check the resource type (static, HTML, iFrame).
			if (icon.staticResource) {
				// Handle static resource type.
				renderStaticResource(icon, index, iconElement);
			} else if (icon.htmlResource) {
				// ToDo: Handle HTML resource type.
			} else if (icon.iFrameResource) {
				// ToDo: Handle iFrame resource type.
			}
		}

		/**
		 * Renders an icon element (container) based on the provided icon data.
		 *
		 * @param {Object} icon - The icon data containing width, height, and click events.
		 * @param {number} index - The index of the icon in the collection.
		 * @returns {HTMLElement} - The created icon element.
		 */
		function renderIconElement(icon, index)
		{
			// Define data for creating the icon element.
			let dataObj = {
				id: `primisVastIconContainer-${index}`,
				class: 'primisVastIconContainer',
				type: 'div',
				parent: ref.vastIconsContainer,
				style: {
					maxWidth: `${icon.width}px`,
					maxHeight: `${icon.height}px`
				}
			};

			// Create the icon element (wrapper).
			const iconElement = ref.addLayoutElement(dataObj);
			// Add a click event listener to the icon container to handle icon clicks.
			if (icon.iconClicks) {
				iconElement.addEventListener('click', event => {
					if (icon.iconClicks.iconClickThrough) {
						// Open the URL in a new tab.
						ref.layoutConfig.rootWindow.open(icon.iconClicks.iconClickThrough, '_blank');
					}

					if (icon.iconClicks.iconClickTracking) {
						ref.trigger({
							type: ref.noteOut.onVastIconClick,
							value: {url: icon.iconClicks.iconClickTracking, elem: iconElement}
						});
					}
				});
			}

			return iconElement;
		}

		/**
		 * Renders a static resource (image) for a VAST icon.
		 *
		 * @param {Object} icon - The icon data containing width, height, and resource information.
		 * @param {number} index - The index of the icon in the collection.
		 * @param {HTMLElement} iconElement - The container element for the VAST icon.
		 */
		function renderStaticResource(icon, index, iconElement)
		{
			// Create an image element for the icon and set its attributes and styles.
			dataObj = {
				id: `primisVastIconImg-${index}`,
				class: 'primisVastIconImg',
				type: 'img',
				parent: iconElement,
				resizer: {
					resizeFunction: (obj) => {
						ref.limitVastIconSize(obj);
					},
				},
				style: {
					width: `${icon.width}px`,
					height: `${icon.height}px`
				}
			};

			// Create the image elemeƒnt.
			const imgElement = ref.addLayoutElement(dataObj);

			// Set the image source, alt text and title.
			imgElement.src = icon.staticResource;
			imgElement.alt = icon.altText;
			imgElement.title = icon.hoverText;

			// Set width and height data attributes in case of player resize.
			imgElement.dataset.vastWidth = icon.width;
			imgElement.dataset.vastHeight = icon.height;

			// Add an 'onload' attribute to:
			// 1. Make sure the icon is not too big.
			// 1. Set opacity to 1.
			// 2. Fire an iconViewTracking pixle.
			imgElement.onload = function ()
			{
				ref.limitVastIconSize(imgElement);
				this.style.opacity = '1';
				ref.trigger({
					type: ref.noteOut.onVastIconView,
					value: {url: icon.iconViewTracking, elem: iconElement}
				});
			};

			// Report icon img load errors.
			imgElement.onerror = function ()
			{
				this.style.width = 0;
				this.style.height = 0;
				this.setAttribute('data-prevent-resize', 'true');
				ref.trigger({
					type: ref.noteOut.onVastIconError,
					value: `Vast icon could not be loaded. Program: ${icon.program}, Icon URL: ${icon.staticResource}`
				});
			}
		}
	}

	// Flag to track whether a retry is in progress.
	let vastIconResizingisRetrying = false;

	/**
	 * Set maximum size relative to player's dimensions for an element.
	 *
	 * @param {HTMLElement} elementToResize - The element to be resized.
	 * @param {number} attempt - The current attempt number.
	 * @returns {Promise<void>} A promise that resolves when the resizing is successful.
	 */
	this.limitVastIconSize = async function (elementToResize, attempt = 1)
	{
		if (elementToResize.dataset.preventResize === 'true') {
			return;
		}

		const maxIconSize = 0.25;

		// The parent element #layoutDesign.
		const parentElement = ref.layout;

		// Delay 10ms to allow the player to finish resizing and to delay between retries.
		await delay(10);

		// Get the dimensions of the parent.
		const parentWidth = parentElement.offsetWidth;
		const parentHeight = parentElement.offsetHeight;

		// Get the values of the width and height data attributes.
		const elementWidth = parseInt(elementToResize.dataset.vastWidth, 10);
		const elementHeight = parseInt(elementToResize.dataset.vastHeight, 10);

		// Check if any of the dimensions is 0, and return if true. This can happen in Safari when an icon is clicked.
		if (parentWidth === 0 || parentHeight === 0 || elementWidth === 0 || elementHeight === 0) {

			// Check if a retry is already in progress.
			if (!vastIconResizingisRetrying) {

				// Set the flag to indicate that a retry is now in progress.
				vastIconResizingisRetrying = true;

				// Retry up to 100 times, a 10ms delay is set above (1 second total retries).
				if (attempt <= 100) {
					return this.limitVastIconSize(elementToResize, attempt + 1);
				}

				vastIconResizingisRetrying = false;
			} else {
				// If a retry is already in progress, return without initiating a new one.
				return;
			}
		}

		vastIconResizingisRetrying = false;

		// Check if the element is larger than maxIconSize.
		if (elementWidth > parentWidth * maxIconSize || elementHeight > parentHeight * maxIconSize) {
			// Calculate the scaling factor to ensure neither width nor height exceeds maxIconSize.
			const widthScaleFactor = parentWidth * maxIconSize / elementWidth;
			const heightScaleFactor = parentHeight * maxIconSize / elementHeight;

			// Choose the smaller of the two scaling factors to maintain proportions.
			const scaleFactor = Math.min(widthScaleFactor, heightScaleFactor);

			// Apply the scaling factor to the element's width and height.
			elementToResize.style.width = `${elementWidth * scaleFactor}px`;
			elementToResize.style.height = `${elementHeight * scaleFactor}px`;
		}
	};

	/**
	 * Delay function to introduce a delay in asynchronous operations.
	 *
	 * @param {number} ms - The delay duration in milliseconds.
	 * @returns {Promise<void>} A promise that resolves after the specified delay.
	 */
	function delay(ms)
	{
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	this.primisLogo.addEventListener(this.evtType.click, function()
	{
		ref.trigger({type:ref.noteOut.onPrimis});
	}, SekindoUtils.passiveEvent());

	this.pauseBtn.addEventListener(this.evtType.mouseup, function(e)
	{
		ref.preventDefault(e);
		ref.trigger({type:ref.noteOut.onPause});
	},false);

	this.playBtn.addEventListener(this.evtType.mouseup, function(e)
	{
		ref.preventDefault(e);
		ref.trigger({type:ref.noteOut.onPlay});
	},false);

	this.nextBtn.addEventListener(this.evtType.mouseup, function(e)
	{
		ref.preventDefault(e);
		ref.trigger({type:ref.noteOut.onNext});
	});

	this.backBtn.addEventListener(this.evtType.mouseup, function(e)
	{
		ref.preventDefault(e);
		ref.trigger({type:ref.noteOut.onBack});
	});

	this.titleTxt.addEventListener(this.evtType.mouseup, function(){
		ref.trigger({type:ref.noteOut.onTitleClick});
	});

	this.titleTxt.addEventListener(this.evtType.mouseenter, function(e)
	{
		if(!ref.trigger({type:ref.fetch.clickUrl}) && !ref.trigger({type:ref.fetch.contentClickUrl}))return;
		ref.titleObj.style.color = ref.designColor;
		ref.titleIco.innerHTML = ref.titleIco.innerHTML.replace(new RegExp('fill="#fff"', 'g') , 'fill="'+ref.designColor+'"');
	});

	this.titleTxt.addEventListener(this.evtType.mouseleave, function(e)
	{
		ref.titleObj.style.color = 'white';
		ref.titleIco.innerHTML = ref.titleIco.innHTML;
	});

	this.fullScreenBtn.addEventListener(this.evtType.mouseup, function(e)
	{
		ref.trigger({type:ref.noteOut.onFullScreen});
	});

	this.normalScreenBtn.addEventListener(this.evtType.click, function(e)
	{
		ref.trigger({type:ref.noteOut.onNormalScreen});
	}, SekindoUtils.passiveEvent());

	this.lightBoxCloseBtn.addEventListener(this.evtType.click, function(e)
	{
		ref.trigger({type:ref.noteOut.onLightboxClose});
	}, SekindoUtils.passiveEvent());

	this.onCaptionsBtnClick = function (val)
	{
		ref.trigger({type:ref.noteOut.onCaption, value:val});
	};

	this.captionsOnBtn.addEventListener(this.evtType.click, function(e){ref.onCaptionsBtnClick(false)}, SekindoUtils.passiveEvent());
	this.captionsOffBtn.addEventListener(this.evtType.click, function(e){ref.onCaptionsBtnClick(true)}, SekindoUtils.passiveEvent());

	//Set share behaviour
	function exposeShareMenu(e)
	{
		ref.preventDefault(e);
		ref.shareBG.style.display = 'block';
		ref.facebookBtn.style.display = 'block';
		ref.twitterBtn.style.display = 'block';
		ref.linkedinBtn.style.display = 'block';
		ref.pinterestBtn.style.display = 'block';
		ref.whatsappBtn.style.display = 'block';
		ref.emailBtn.style.display = 'block';
		SekindoUtils.animateTo(ref.shareBG.style, 'opacity', '0.72', 0.2, 'easeIn');
		SekindoUtils.animateTo(ref.facebookBtn.style, 'opacity', '1', 0.4, 'easeIn');
		SekindoUtils.animateTo(ref.twitterBtn.style, 'opacity', '1', 0.4, 'easeIn');
		SekindoUtils.animateTo(ref.linkedinBtn.style, 'opacity', '1', 0.4, 'easeIn');
		SekindoUtils.animateTo(ref.pinterestBtn.style, 'opacity', '1', 0.4, 'easeIn');
		SekindoUtils.animateTo(ref.whatsappBtn.style, 'opacity', '1', 0.4, 'easeIn');
		SekindoUtils.animateTo(ref.emailBtn.style, 'opacity', '1', 0.4, 'easeIn');
		ref.trigger({type:ref.noteOut.onShareClick});
	}

	if(this.isDesktop)
	{
		this.shareContainer.addEventListener(this.evtType.mouseover,exposeShareMenu);
		this.shareContainer.addEventListener(this.evtType.mouseout,function(e)
		{
			SekindoUtils.animateTo(ref.shareBG.style, 'opacity', '0', 0.4, 'easeIn');
			SekindoUtils.animateTo(ref.facebookBtn.style, 'opacity', '0', 0.4, 'easeIn');
			SekindoUtils.animateTo(ref.twitterBtn.style, 'opacity', '0', 0.4, 'easeIn');
			SekindoUtils.animateTo(ref.linkedinBtn.style, 'opacity', '0', 0.4, 'easeIn');
			SekindoUtils.animateTo(ref.pinterestBtn.style, 'opacity', '0', 0.4, 'easeIn');
			SekindoUtils.animateTo(ref.whatsappBtn.style, 'opacity', '0', 0.4, 'easeIn');
			SekindoUtils.animateTo(ref.emailBtn.style, 'opacity', '0', 0.4, 'easeIn',function()
			{
				ref.shareBG.style.display = 'none';
				ref.facebookBtn.style.display = 'none';
				ref.twitterBtn.style.display = 'none';
				ref.linkedinBtn.style.display = 'none';
				ref.pinterestBtn.style.display = 'none';
				ref.whatsappBtn.style.display = 'none';
				ref.emailBtn.style.display = 'none';
			});
		});
	}
	else
	{
		this.shareContainer.addEventListener(this.evtType.click,exposeShareMenu, SekindoUtils.passiveEvent());
	}

	this.facebookBtn.addEventListener(this.evtType.click, onShareClick, SekindoUtils.passiveEvent());
	this.twitterBtn.addEventListener(this.evtType.click, onShareClick, SekindoUtils.passiveEvent());
	this.linkedinBtn.addEventListener(this.evtType.click, onShareClick, SekindoUtils.passiveEvent());
	this.pinterestBtn.addEventListener(this.evtType.click, onShareClick, SekindoUtils.passiveEvent());
	this.whatsappBtn.addEventListener(this.evtType.click, onShareClick, SekindoUtils.passiveEvent());
	this.emailBtn.addEventListener(this.evtType.click, onShareClick, SekindoUtils.passiveEvent());

	function onShareClick(e)
	{
		var targetId = e.currentTarget.id;
		ref.trigger({type:ref.noteOut.onShareClick, targetId: targetId});
	}
	this.trigger({type:this.noteOut.doFlowDrag,value:this.transparentCover});
};

LayoutDesign.prototype.calcPlayerSizes = function (data)
{
	//Default sizing configurations
	var min = 300;
	var max = 500;
	var minBar = 59;
	var maxBar = 93;

	//Calc player height
	var playerAR = data.HEIGHT/data.WIDTH;
	var videoAR = data.verticalOrientation?(16/9):(9/16);
	var vidH = (data.WIDTH * Math.min(videoAR, playerAR));

	//Calc playlist bar
	var H = (Math.max(min, Math.min(max, vidH)) - min) / (max - min);
	var barH = (minBar + H * (maxBar - minBar));
	var playerOptH = vidH + barH;

	var allowPlayList = data.allowPlayList && ((data.HEIGHT - barH) >= data.minOptimalHeight) //and bigger then minOptimalHeight

	if (!allowPlayList)
	{
		barH = 0;
	}

	//The video height is calculated by the bar height when playlist available and player height is limited (horizontal banners)
	if (playerOptH > data.HEIGHT && allowPlayList)
	{
		var minPct = minBar / (min + minBar);
		var maxPct = maxBar / (max + maxBar);
		var difPct = maxPct - minPct;

		var pct = minPct + (Math.max(min, Math.min(max, data.HEIGHT)) - min) / (max - min) * difPct;
		var barH = (Math.max(minBar, Math.min(maxBar, data.HEIGHT * pct)));
		var vidH = (data.HEIGHT - barH);
	}

	var barUnitW = Math.round(barH / 9 * 16);
	var vidW = Math.round(vidH / videoAR);
	barH = Math.round(barH);
	vidH = Math.round(vidH);

	if (data.minOptimalHeight <= data. HEIGHT)
	{
		vidH = Math.max(data.minOptimalHeight, vidH);
	}

	var playerSizes = {};
	playerSizes.playerWidth = vidW;
	playerSizes.playerHeight = vidH + barH + (allowPlayList ? 7 : 0);
	playerSizes.videoWidth = vidW;
	playerSizes.videoHeight = vidH;
	playerSizes.playlistUnitWidth = barUnitW;
	playerSizes.playlistHeight = barH;
	playerSizes.allowPlaylist = allowPlayList;

	return playerSizes;
};

LayoutDesign.prototype.layoutResize = function(val)
{
	var ref = this;

	ref.layoutConfig.videoWidth = val.playerSizes.videoWidth;
	ref.layoutConfig.videoHeight = val.playerSizes.videoHeight;
	ref.layoutConfig.playerWidth = val.playerSizes.playerWidth;
	ref.layoutConfig.playerHeight = val.playerSizes.playerHeight;
	ref.layoutConfig.playlistUnitWidth = val.playerSizes.playlistUnitWidth;
	ref.layoutConfig.playlistHeight = val.playerSizes.playlistHeight;

	if(ref.layoutConfig.isCloseBtn && (val.flowing || this.layoutConfig.playerMode == 'slider' || this.layoutConfig.playerMode == 'inRead'))
	{
		this.primisLogo.style.display = 'none';
	}
	else
	{
		if(this.layoutConfig.isPrimisLogo)
		{
			this.primisLogo.style.display = 'block';
		}
	}

	function resizeElements(val)
	{
		ref.resizedTo = val;
		for(var i =0;  i<ref.resizersArray.length; i++)
		{
			var obj = ref.resizersArray[i].obj;
			for(var j in  ref.resizersArray[i])
			{
				arrIJ=ref.resizersArray[i][j];
				if (typeof arrIJ == "function") arrIJ = arrIJ(obj);
				if(arrIJ && obj != arrIJ)
				{
					var result = (arrIJ[val].constructor  === Function)?arrIJ[val]():arrIJ[val]
					obj.style[j] = result;
				}
			}
		}
	}

	this.sizeCompare =this.layoutConfig.videoWidth;
	if(this.sizeCompare < 650 )
	{
		resizeElements(1);
		var isInSmallPlayer = this.sizeCompare < 250 ? true : false;
		isInSmallPlayer ? ref.skipXsec.style.display = 'none' : ref.skipXsec.style.display = 'block';
	}
	else
	{
		resizeElements(0)
	}

	if(this.layoutConfig.isShowViews && val.playerSizes.videoHeight >= this.layoutConfig.minOptimalHeight)
	{
		this.viewsElements.style.display = 'block';
	}
	else
	{
		this.viewsElements.style.display = 'none';
	}
};

LayoutDesign.prototype.setFullscreen = function()
{
	var ref = this;

	ref.fullScreenBtn.style.display = SekindoServices.fullscreen.isFullscreen ? 'none' : 'block';
	ref.normalScreenBtn.style.display = SekindoServices.fullscreen.isFullscreen ? 'block' : 'none';
	ref.lightBoxCloseBtn.style.display = (SekindoServices.fullscreen.isFullscreen && ref.layoutConfig.isLightBox) ? 'block' : 'none';
};

LayoutDesign.prototype.onCaptions = function (val)
{
	var ref = this;

	//Hide or display captions buttons.
	if(val === -1)
	{
		this.soundControllRight[0] = this.soundControllRightRef[0];
		this.soundControllRight[1] = this.soundControllRightRef[1];
		this.captionsOnBtn.style.display = 'none';
		this.captionsOffBtn.style.display = 'none';
		var sizeCompare =this.layoutConfig.videoWidth;
		this.soundControll.style.right = sizeCompare < 650 ? this.soundControllRight[1] : this.soundControllRight[0];
	}
	else
	{
		//Do we need to relocate sound button
		if (this.captionsStatus === -1)
		{
			this.soundControllRight[0] = (parseInt(this.soundControllRightRef[0]) + 39).toString() + 'px';
			this.soundControllRight[1] = (parseInt(this.soundControllRightRef[1]) + 32).toString() + 'px';
			var sizeCompare =this.layoutConfig.videoWidth;
			this.soundControll.style.right =sizeCompare < 650 ? this.soundControllRight[1] : this.soundControllRight[0];
		}

		this.captionsOnBtn.style.display = val?'block':'none';
		this.captionsOffBtn.style.display = val?'none':'block';
	}

	this.captionsStatus = val;
};

LayoutDesign.prototype.setHeaderTitle = function (val)
{
	var ref = this;
	this.headerTitle = val;
	if(val.length)
	{
		this.titleObj.style.display = 'inline-flex';
		this.titleTxt.innerText = val;
		this.titleIco.style.display = (this.trigger({type:this.fetch.clickUrl}) || this.trigger({type:this.fetch.contentClickUrl}))?'block':'none';
	}
	else
	{
		this.titleObj.style.display = 'none';
	}
};

LayoutDesign.prototype.onAdEvent = function onAdEvent(val)
{
	function runAdDisplayChanges(currAdDisplayArray)
	{
		for(var i=0; i < currAdDisplayArray.length; i++)
		{
			var obj = currAdDisplayArray[i];
			var element = obj.element;
			if(!element)return;
			var unit = obj.unit;
			var dest = val.adStarted?obj.onDest:obj.offDest;
			if (typeof dest == "function")dest = dest();
			if (typeof dest == "object")dest = dest[ref.resizedTo];
			element[unit] = dest;
		}
	}

	var ref = this;
	this.adStarted = val.adStarted;
	if(val.adStarted)
	{
		this.isImaControls = false;
		if (!val.params.controls)
		{
			this.layout.style.display = 'none';
		}
		else if (val.params.controls == 'imaControls')
		{
			this.isImaControls = true;
		}
		this.trigger({type:this.noteOut.onRemoveAdBreak});//TODO move it out to layoutManager
		if(val.params.skipTime != -1) this.addSkipAdTimeout = setTimeout(function(){ref.addAdSkipBtn(val.params.skipTime);},1200);
		this.transparentCover.style.pointerEvents = 'none';
		this.transparentInner.style.pointerEvents = 'none';
	}
	else
	{
		this.layout.style.display = 'block';

		if (this.isImaControls)
		{
			this.isImaControls = false;
			runAdDisplayChanges(this.adImaDisplayArray);
		}
		if(this.skipBtn)this.trigger({type:this.noteOut.doRemoveChild,value:{destiny:'layout', visual:this.skipBtn}});
		if(this.addSkipAdTimeout)clearTimeout(this.addSkipAdTimeout);
		this.transparentCover.style.pointerEvents = 'auto';
		this.transparentInner.style.pointerEvents = 'auto';

		// Make sure all vast icons are removed.
		this.vastIconsDisplay([]);
	}

	runAdDisplayChanges(this.adDisplayArray);
	if (this.isImaControls)
	{
		runAdDisplayChanges(this.adImaDisplayArray);
	}
};

LayoutDesign.prototype.onBgCoverBtnsChange = function onBgCoverBtnsChange(isBgShowed)
{
	for(var i in this.bgCoverArray)
	{
		var obj = this.bgCoverArray[i];
		var element = obj.element;
		if(!element)return;
		var unit = obj.unit;
		var dest = isBgShowed?obj.onDest:obj.offDest;
		element[unit] = dest;
	}
};

LayoutDesign.prototype.addAdSkipBtn = function(skipDelayTime)
{
	var ref = this;
	if (skipDelayTime == -1)
	{
		// no skip at all
		return
	}

	var dataObj = {id:'skipBtn', type:'div',parent:this.layout.parentNode/*, style:{position:'absolute',top:'0px',left:'0px',zIndex:'100',cursor:'pointer', width:'100%', height:'100%', display:'none', visibility:'visible'}*/}
	var skipBtn = this.addLayoutElement(dataObj);
	skipBtn.id = 'skipBtn';
	skipBtn.style.position = 'absolute';
	skipBtn.style.bottom = '60px';
	skipBtn.style.right = '0px';
	skipBtn.style.transform = 'translate(90px, 0)'
	skipBtn.style.zIndex = '1000000';
	skipBtn.style.backgroundColor = 'rgba(0,0,0,0.8)';
	skipBtn.style.color = 'white';
	skipBtn.style.display = 'inline-block';
	skipBtn.style.border =  '1px solid rgba(255,255,255,0.8)';
	skipBtn.style.borderRight =  0;
	skipBtn.style.padding = '4px 6px 4px 10px';
	skipBtn.style.fontFamily = this.fontFamilyName;
	skipBtn.style.width = '60px';
	skipBtn.style.fontSize = '12px';
	skipBtn.style.cursor = 'default';
	skipBtn.style.pointerEvents = 'auto';
	skipBtn.style.userSelect = 'none';
	skipBtn.style.msUserSelect = 'none';
	skipBtn.style.mozUserSelect = 'none';
	skipBtn.style.webkitUserSelect = 'none';
	skipBtn.style.textAlign = 'left';

	this.skipBtn = skipBtn;
	var counter = document.createElement('span');
	counter.style.width = '100%';
	skipBtn.appendChild(counter);
	SekindoUtils.animateTo(skipBtn.style, 'transform', 'translate(50px, 0)',.4, 'easeIn');

	var skipDelayTime = 5.6;
	var pct = 1;

	if(this.skipAdTimeout)clearTimeout(this.skipAdTimeout);
	if(this.skipAdInterval)clearInterval(this.skipAdInterval);


	this.skipAdTimeout = setTimeout(function()
	{
		clearInterval(ref.skipAdInterval);
		skipBtn.innerHTML = '<div id="ad-text:n" style="display: inline-block; padding-right: 4px; padding-bottom: 2px; cursor: pointer;">Skip Ad</div><svg height="12px" version="1.1" viewBox="12 12 12 12" width="12px" fill="#FFFFFF" transform="scale(.8) translate(0,2)" style="width: 12px; height: 12px; cursor: pointer; transform:scale(.8) translate(0,2px);"><use  xlink:href="#ytp-id-34"></use><path  d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z" id="ytp-id-34"></path></svg>';
		skipBtn.style.cursor = 'pointer';
		skipBtn.addEventListener(ref.evtType.click, function(e)
		{
			ref.preventDefault(e);
			ref.trigger({type:ref.noteOut.onSkipAd});
		}, SekindoUtils.passiveEvent());
		SekindoUtils.animateTo(skipBtn.style, 'transform', 'translate(0px, 0)',.6, 'easeIn');
	},skipDelayTime*1000);

	this.skipAdInterval = setInterval(function()
	{
			pct -= 100/(skipDelayTime*1000);
			var secToGo = Math.round(skipDelayTime * pct);
		counter.innerText = secToGo;
			if(pct <= 0)clearInterval(ref.skipAdInterval);
	},100);
};

LayoutDesign.prototype.onPlaylistDataUpdate = function onPlaylistDataUpdate(val)
{
	// fill like Icon color
	if (val.isLiked == 1)
	{
		this.likesIcon.innerHTML = this.likesIcon.filledLikesIconHTML;
		this.likesIcon.innHTML = this.likesIcon.filledLikesIconHTML;
	}
	else
	{
		this.likesIcon.innerHTML = this.likesIcon.emptyLikesIconHTML;
		this.likesIcon.innHTML = this.likesIcon.emptyLikesIconHTML;
	}

	// don't show likes count if it's smaller than minimum
	val.likes < this.trigger({type:this.fetch.minLikesNum}) ? this.likesNum.style.display = "none" : this.likesNum.style.display = "block";

	this.likesNum.innerText = SekindoUtils.KBMFormatter(val.likes+val.isLiked);
	this.viewsNum.innerText = SekindoUtils.KBMFormatter(val.views);
};

function AutoSkipContentUI(layout)
{
	var ref = this;

	this.layout = layout;
	this.layoutContainer = layout.layout;
	this.trigger = layout.trigger;
	this.noteOut = layout.noteOut;

	//Auto Skip Content Elements
	var dataObj = {id: 'autoSkipContentContainer',type: 'div',parent: this.layoutContainer,style: {width: '108px',height: '72px',position: 'absolute',right: '3px',top: '50%',transform: 'translateY(-50%)',cursor: 'pointer',display: 'none'},resizer: {width: ['108px', '70px'], height: ['72px', '44px']}};
	this.autoSkipContentContainer = layout.addLayoutElement(dataObj);

	dataObj = {id: 'autoSkipContentNext',type: 'div',parent: this.autoSkipContentContainer,style: {width: '103px',height: '33px',position: 'absolute',top: '0',cursor: 'pointer',display: 'block',backgroundColor: '#000',opacity: '0.75',borderRadius: '5px', boxShadow: '0px 0px 4px white', cursor:'pointer'},resizer: {width: ['103px', '67px'], height: ['33px', '20px']}};
	this.autoSkipContentNext = layout.addLayoutElement(dataObj);

	dataObj = {id: 'autoSkipContentNextBg',type: 'div',parent: this.autoSkipContentNext,style: {width: '0',position: 'absolute',cursor: 'pointer',display: 'block',backgroundColor: '#ff3e5f',borderRadius: '5px',zIndex: '-1',cursor:'pointer'},resizer: {height: ['33px', '20px']}};
	this.autoSkipContentNextBg = layout.addLayoutElement(dataObj);

	dataObj = {id: 'autoSkipContentNextTxt',type: 'div',parent: this.autoSkipContentNext,innerHTML: 'Next',style: {lineHeight: '32px', fontFamily: this.layout.fontFamilyName, fontSize: '21px', fontWeight: 'bold', textAlign: 'center', color: '#fff', cursor:'pointer'},resizer: {lineHeight: ['32px', '20px'], fontSize: ['21px', '14px']}};
	this.autoSkipContentNextTxt = layout.addLayoutElement(dataObj);

	// Background opacity set with 'rgba' to fix iOS (version > 15) in order to fix the rendering boxShadow issue
	dataObj = {id: 'autoSkipContentStay',type: 'div',parent: this.autoSkipContentContainer,style: {width: '103px',height: '33px',position: 'absolute',bottom: '0',cursor: 'pointer',display: 'block',backgroundColor: 'rgba(0,0,0,0.75)',borderRadius: '5px', boxShadow: '0px 0px 4px white', cursor:'pointer'},resizer: {width: ['103px', '67px'], height: ['33px', '20px']}};
	this.autoSkipContentStay = layout.addLayoutElement(dataObj);

	// Background opacity set with 'rgba' to fix iOS (version > 15) in order to fix the rendering boxShadow issue
	dataObj = {id: 'autoSkipContentStayTxt',type: 'div',parent: this.autoSkipContentStay,innerHTML: 'Stay',style: {lineHeight: '32px', fontFamily: this.layout.fontFamilyName, fontSize: '21px', fontWeight: 'bold', textAlign: 'center', color: 'rgba(255,255,255,0.8)', cursor:'pointer'},resizer: {lineHeight: ['32px', '20px'], fontSize: ['21px', '14px']}};
	this.autoSkipContentStayTxt = layout.addLayoutElement(dataObj);

	//Add functionality
	this.autoSkipContentNext.addEventListener(this.layout.evtType.click, function (e)
	{
		ref.layout.preventDefault(e);
		ref.trigger({type: ref.noteOut.onPrimisNext});
	}, SekindoUtils.passiveEvent());

	this.autoSkipContentStay.addEventListener(this.layout.evtType.click, function (e)
	{
		ref.layout.preventDefault(e);
		ref.trigger({type: ref.noteOut.onAutoSkipStay});
	}, SekindoUtils.passiveEvent());
}

AutoSkipContentUI.prototype.displayAutoSkipContent = function displayAutoSkipContent(skipAnimDuration)
{
	var ref = this;

	this.autoSkipContentContainer.style.display = 'block';
	SekindoUtils.animateTo(this.autoSkipContentNextBg.style, 'width', '100%', skipAnimDuration, 'linear', onAutoNext);

	function onAutoNext()
	{
		ref.trigger({type:ref.noteOut.onAutoNext});
	}
}

AutoSkipContentUI.prototype.hideAutoSkipContent = function hideAutoSkipContent(shouldInit)
{
	SekindoUtils.stopAnimateUnit(this.autoSkipContentNextBg.style, 'width');
	this.autoSkipContentContainer.style.display = 'none';

	if (shouldInit)
	{
		this.autoSkipContentNextBg.style.width = '0';
	}
};
function SekindoVideoManager(e){var t=this;return this.config=e,this.quality=!1,this.runningQuality=!1,this.singleQualityPlayer=!0,this.config.isStreamingVideo=!1,this.listenersArray=[],this.syncPlayersTimeFunc=this.syncPlayersTime.bind(this),this.vidWrapper=this.config.videoIFrameDoc.createElement("div"),this.vidWrapper.style.width="100%",this.vidWrapper.style.height="100%",this.defineVidWrapperProperties(),this.videoElement=this.generateVideoElement(),this.wrapVideoElement(),this.vidWrapper.appendChild(this.videoElement),this.config.bus.addCallBack("onFullScreen",function(e){t.swapVideoElement(e.type)}),this.vidWrapper}function LayoutManager(e){var t=this;return this.config=e,this.bus=e.bus,this.reportFs=1,this.intentStatus=!1,this.config.isCaptionsOn=this.config.playerTemplateData.isCaptionsOn,this.config.bus.addCallBack("onViewabilityChange",function(e){e.type!=t.config.playerInViewPrc||e.status||"flow"===t.config.playerMode||t.config.soundEnabledByUser||t.config.bus.triggerNote("onUserEvent",{type:"onMute",value:!0})}),this.config.allowFullScreen=this.config.allowFullScreen&&(this.config.bus.getParam("isAmpIframe")||SekindoUtils.isFriendlyIframe())&&SekindoServices.fullscreen.enabled&&("flow"==this.config.playerMode||"normal"==this.config.playerMode||"sticky"==this.config.playerMode||"snapIt"===this.config.playerMode),this.activeButtons="captionsOnBtn,captionsOffBtn,closeBtn"+(this.config.playerTemplateData.isPrimisLogo?",primisLogo":"")+(this.config.allowFullScreen?",normalScreenBtn,fullScreenBtn"+(this.config.playerTemplateData.isLightBox?",lightBoxCloseBtn":""):"")+(this.config.playerTemplateData.isNextBackBtns?",nextBtn,backBtn":"")+(this.config.playerTemplateData.skipXsec?",skipXsec":""),this.layoutExtraData=this.config.playerTemplateData,this.layoutExtraData.isDesktop=this.config.isDesktop,this.layoutExtraData.opacityInit="1"==this.config.isAutoPlay||"3"==this.config.isAutoPlay?"0":"1",this.layoutExtraData.allowFullScreen=this.config.allowFullScreen,this.layoutExtraData.activeButtons=this.activeButtons,this.layoutExtraData.responsive=this.config.responsive,this.layoutExtraData.isCloseBtn=this.config.isCloseBtn,this.layoutExtraData.playerMode=this.config.playerMode,this.layoutExtraData.clientInfo=this.config.clientInfo,this.layoutExtraData.minOptimalHeight=this.config.minOptimalHeight,this.layoutExtraData.verticalOrientation=this.config.verticalOrientation,this.layoutExtraData.closeBtnTheme=this.config.closeBtnTheme,this.layoutExtraData.publisherLogoPosition=this.config.publisherLogoPosition,this.layoutExtraData.absolutePath=this.config.absolutePath,this.layoutExtraData.debugInformation=this.config.debugInformation,this.layoutExtraData.rootWindow=this.config.rootWindow,this.addChilds=function(e){switch(e.destiny){case"video":this.videoDiv.appendChild(e.visual);break;case"layout":this.layoutDiv.appendChild(e.visual);break;case"videoAd":e.ima?this.adIma.appendChild(e.visual):this.adVpaid.appendChild(e.visual)}},this.removeChilds=function(e){var t;switch(e.destiny){case"video":t=this.videoDiv;break;case"layout":t=this.layoutDiv;break;case"videoAd":t=this.adDiv}if(e.visual)try{t.removeChild(e.visual)}catch(e){}else try{for(;t.firstChild;)t.removeChild(t.firstChild)}catch(e){}},this.createChild=function(e,t,i,n,o){t&&(i=t.ownerDocument),i||(i=document);var a=i.createElement(e);return t&&!n&&t.appendChild(a),o&&(a.id=o,this[o]=a),a},this.buildElements(),this.playerInterface(),this.layoutInterface(),this.startRunning(),this.config.calcPlayerSizes=function(e){return t.calcPlayerSizes(e)},this}function AutoSkipContent(e){var t=this;this.parent=e,this.SKIP_ANIMATION_DURATION_SEC=7,this.SKIP_CONTENT_AFTER_SEC=e.config.autoSkipContentConfig.skipContentAfterSec-this.SKIP_ANIMATION_DURATION_SEC,this.STATUS_DISABLED="disabled",this.STATUS_WAITING="waiting",this.STATUS_RUNNING="running",this.STATUS_PAUSED="paused",this.STATUS_STAY="stay",this.status=e.config.autoSkipContentConfig.isEnable?this.STATUS_WAITING:this.STATUS_DISABLED,this.parent.config.bus.addCallBack("hideAutoSkipContent",function(e){t.hideAutoSkipContent(e)}),this.elapsedTime=0,this.currVideoTime=-1}function SekindoFlowManager(e){this.config=e,this.capsulesStack={},this.setCapsulesData(),this.generateCapsule("initiation")}function SekindoFlowCapsule(e,t,i){this.config=e,this.dataObj=t,this.oner=i,this.id=this.dataObj.id,this.saveObj=[],this.setCallbacks(this.dataObj.when)}function FlowCapsuleCallback(e,t){this.execute=function(i){t.config.primisConsoleLog("FlowCapsuleCallback obj="+JSON.stringify(e)),e.content&&JSON.stringify(e.content)!=JSON.stringify(i)||(this.content=e.content,t.save(e),t.then())}}function SekindoBus(){this.callbacksArray=new Array,this.setParam=this.addCallBack,this.getParam=this.triggerNote}function SekindoBusItm(){this.callbackID=null,this.callbackFunc=null}function SekindoBusNote(){this.callbackID=null,this.content=null}function VastErrorHandler(e,t){this.config=e;const i=[],n={},o=[function(e,t,i){SekindoUtils.postLogMessage(t,s.config)},function(e,t,i){i>r&&e.forEach(e=>SekindoUtils.firePixel(e,null,s.config,!0))}],a=t,s=this,r=99;this.errorMap={VAST_FETCH_ERROR:{name:"VAST_FETCH_ERROR",code:90,isCritical:1},XML_PARSE_ERROR:{name:"XML_PARSE_ERROR",code:100,isCritical:1},VAST_SCHEMA_VALIDATION_ERROR:{name:"VAST_SCHEMA_VALIDATION_ERROR",code:101,isCritical:0},VAST_VERSION_ERROR:{name:"VAST_VERSION_ERROR",code:102,isCritical:0},TRAFFICKING_ERROR:{name:"TRAFFICKING_ERROR",code:200,isCritical:0},DURATION_ERROR:{name:"DURATION_ERROR",code:202,isCritical:0},MAX_WRAPPER_DEPTH_REACHED:{name:"MAX_WRAPPER_DEPTH_REACHED",code:302,isCritical:1},NO_VAST_RESPONSE:{name:"NO_VAST_RESPONSE",code:303,isCritical:1},UNDEFINED_ERROR:{name:"UNDEFINED_ERROR",code:900,isCritical:1}},this.macroMap={VAST_ERROR_CODE:"[ERRORCODE]",UNIVERSAL_AD_ID:"[UNIVERSALADID]"},this.addErrorUrl=function(e){-1===i.indexOf(e)&&i.push(e)},this.addMacroValues=function(e,t){n[e]=t},this.handleVastError=function(e,t,s,r,l){this.addMacroValues(this.macroMap.VAST_ERROR_CODE,t.code);const c=function(e,t){return e.map(e=>{for(const[i,n]of Object.entries(t))e=e.replace(i,n);return e})}(i,n),d=`${t.name} occurred in VAST version ${r||"unknown"}, VAST url ${s||"unknown"}. Additional information: ${l}`;o.forEach(e=>e(c,d,t.code)),t.isCritical&&a(e)}}function PalInterface(e){let t,i,n,o;const a=()=>{t=s().then(()=>r()).catch(t=>{e.primisConsoleLog(t.message)})};this.getNonceAsync=(()=>(i&&this.getRemainingNonceTime()<36e5&&a(),t)),this.getNonce=(()=>{const e=this.getRemainingNonceTime();return i&&e<36e5&&a(),e>0?i.nonce:void 0});const s=()=>new Promise((e,t)=>{const i=Date.now(),n=()=>{window.goog&&window.goog.pal&&window.goog.pal.NonceLoader&&window.goog.pal.NonceRequest?e():Date.now()-i<7e3?setTimeout(n,100):t(new Error("Timed out waiting for goog"))};n()});this.getRemainingNonceTime=(()=>i?i.expirationTime-Date.now():0);const r=async()=>{try{n&&o||(n=new goog.pal.NonceLoader,o=new goog.pal.NonceRequest);const t=await n.loadNonceManager(o);return(i={nonce:t.getNonce(),expirationTime:Date.now()+216e5}).nonce}catch(t){e.primisConsoleLog("Error generating PAL nonce:",t)}};a()}function SekindoAdsManager(e,t){var i=this;this.uniqueID=e,this.config=t,this.bus=this.config.bus,window.sekindoConfig=this.config,this.config.adsManager=this,this.config.lastImpViewableCompleteTime=0,this.config.isLastImpSkipped=!1,this.config.isLastImpViewable=!1,this.isImmediateViewablePreroll=!1,this.attemptGapTimestamp=0,this.timeOutObj=null,this.config.adsProcessPaused=!0,this.waterfallArray=[],this.config.impressionTimeout=0,this.contentVidCurrTime=-1,this.config.blockAdRequestsNV=!1,this.config.blockAdRequests=!1,this.processorCounter=0,this.config.adsProcessHalter=new AdsProcessHalter(this.config),this.config.cachedBids=new SekindoCachedBids(this.config,this),this.preloadedWaterfall=!1,this.epochTImestamp=(new Date).getTime(),this.isTriggerAdCompletedNormal=!0,this.canRequset2ndPreroll=!1,this.switchToAutoPlayTimer=null,this.viewableImpCount=0,this.viewableWFCount=0,this.config.isOmidActivated&&(this.omidSessionWrapper=new OMIDClientSession(this.config)),this.imaReady=!1,this.imaMain=null,this.adxImpTimestamp=0,this.dynamicBidValues=new DynamicBidValues(this.config,this),this.playbackmethodMap={onClickSoundOn:3,onViewportSoundOff:6},this.playbackmethod="0"===this.config.isAutoPlay||"2"===this.config.isAutoPlay?[this.playbackmethodMap.onClickSoundOn]:[this.playbackmethodMap.onViewportSoundOff],this.pal=new PalInterface(this.config);var n=this.config.contextualMatchData.urlRtbCategories?this.config.contextualMatchData.urlRtbCategories:"";this.config.contextualMatchData.pageRtbCatArr=n.length>0?n.split(","):[],this.initPixels(),this.setPrebidBaseConfig(),this.config.requestLifetime&&this.config.requestLifetime>0&&(this.config.requestLifetimeTimeout=setTimeout(function(){i.config.blockAdRequests=!0,i.config.adsProcessPaused=!0},6e4*this.config.requestLifetime)),this.config.requestLifetimeNV&&this.config.requestLifetimeNV>0&&(this.config.requestLifetimeTimeoutNV=setTimeout(function(){i.config.blockAdRequestsNV=!0},6e4*this.config.requestLifetimeNV)),this.handleC2PWaitTime=function(e){e?0!=this.config.c2pWaitTime&&4==this.config.isAutoPlay&&null==this.switchToAutoPlayTimer&&this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status&&(this.switchToAutoPlayTimer=setTimeout(function(){i.switchToAutoPlayTimer=null,i.config.adIsPlaying||i.config.bus.triggerNote("onUserEvent",{type:"onPlay"})},1e3*this.config.c2pWaitTime)):null!=this.switchToAutoPlayTimer&&(clearTimeout(this.switchToAutoPlayTimer),this.switchToAutoPlayTimer=null)},this.destructProcessorOnFail=function(){i.currProcessor&&void 0!==i.currProcessor&&(i.currProcessor.destructOnFail=!0),clearTimeout(i.destructOnFailTimeout),i.destructOnFailTimeout=null},this.config.bus.addCallBack("onViewabilityChange",function(e){e.type==i.config.playerInViewPrc&&(e.status&&i.config.hadImpression&&(i.config.isLastImpViewable=!0,i.config.isFirstViewablePreroll=!1),i.config.adsProcessPaused||i.config.adsProcessHalter.shouldHalt()||(i.viewableWaterfallAvailable=!1,i.loadWaterfall()),e.status||null==i.destructOnFailTimeout||i.destructProcessorOnFail(),i.handleC2PWaitTime(!0))}),this.bus.addCallBack("onAmpFlow",function(e){i.config.adsProcessPaused||i.config.adsProcessHalter.shouldHalt()||i.loadWaterfall()}),this.config.waterFall&&0!=this.config.waterFall.length?this.config.responsive||this.preloadWaterfalls():this.config.bus.triggerNote("waterFallEmpty"),this.config.bus.addCallBack("onPlayerResize",function(e){i.onPlayerResize(e)}),this.config.bus.addCallBack("onVideoProgress",function(e){i.contentVidCurrTime=e.currTime,i.isPlayerSimulatorActive=e.isSimulator}),this.config.bus.addCallBack("pauseAdsSchedule",function(e){i.pauseAdsSchedule(e)}),this.config.bus.addCallBack("resumeAdsSchedule",function(e){i.resumeAdsSchedule(e)}),this.config.bus.addCallBack("resetAdsSchedule",function(e){i.resetAdsSchedule(e)}),this.config.bus.addCallBack("setIsAutoPlay",function(e){i.setIsAutoPlay(e)}),this.config.bus.addCallBack("onUserEvent",function(e){i.onUserEvent(e)}),this.setAdsSchedule(!0),"inRead"==this.config.playerMode||"inUnit"==this.config.playerMode?this.config.bus.addCallBack("onPlayerResize",function(){i.config.bus.triggerNote("adsManagerInited")}):this.config.bus.triggerNote("adsManagerInited"),this.handleC2PWaitTime(!0)}function SekindoWaterfallLoader(e,t){var i=this;this.config=e,this.adsProgram={},this.settings=t,this.adsProgramLoaded=!1,this.awsBytesLimitation=8e3,this.waterfallUrl=this.config.waterFall;var n=/[?|&](x=\d*)/.exec(this.waterfallUrl),o=/[?|&](y=\d*)/.exec(this.waterfallUrl),a=t.requestOnly?t.viewable:this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status,s=a?1:!1===a?0:-1,r=t.width,l=t.height;n&&n.length>1&&(this.waterfallUrl=this.waterfallUrl.replace(n[1],"x="+r)),o&&o.length>1&&(this.waterfallUrl=this.waterfallUrl.replace(o[1],"y="+l)),this.waterfallUrl=this.waterfallUrl.replace("${VP_VIEWABILITY_STATE}",s),this.waterfallUrl=this.waterfallUrl.replace("${VP_PLACEMENT_STREAM_TYPE}",t.dynamicPlacementMethod),this.config.gdprIsRequired&&(this.waterfallUrl+="&gdpr="+this.config.gdprIsRequired+"&gdprConsent="+encodeURIComponent(this.config.gdprInfo.getConsentString())+"&isWePassGdpr="+this.config.gdprInfo.getIsWePass()),this.config.ccpaIsRequired&&(this.waterfallUrl+="&ccpa="+this.config.ccpaIsRequired+"&ccpaConsent="+encodeURIComponent(this.config.ccpaInfo.consent)),this.config.isLoggingActive&&(this.wfDebugLog=new WaterFallDebugLog(i.config)),this.setWaterfall=function(){this.adsXmlhttp=new XMLHttpRequest,this.adsXmlhttp.addEventListener("load",function(e){i.adsProgramLoaded=!0;try{void 0!=(n=JSON.parse(i.adsXmlhttp.responseText)).enc&&(n=n.enc?JSON.parse(atob(SekindoUtils.letterShifting(n.data))):n.data)}catch(e){var n={}}i.wfGeneralParams=n,i.adsProgram=n.ads||[];for(var o=0;o<i.adsProgram.length;o++)i.adsProgram[o].impressionCount={val:0};i.adsProgram.settings=i.settings,i.adsProgram.sspInfo=n.sspInfo,i.adsProgram.adxPublicPriceMap=n.adxPublicPriceMap,i.adsProgram.adxPrivatePriceMap=n.adxPrivatePriceMap,i.config.impressionTimeout=n.impressionTimeout?n.impressionTimeout:0,i.waterFallLifeTime=n.waterFallLifeTime?parseFloat(n.waterFallLifeTime):3e5,i.waterFallLifeTime>0&&(i.waterFallLifeTimeOut&&clearTimeout(i.waterFallLifeTimeOut),i.waterFallLifeTimeOut=setTimeout(function(){i.setWaterfall()},i.waterFallLifeTime)),i.waterfallGap=n.adsSchedule,i.debugWFManagerId=n.debugWFManagerId,t.requestOnly||i.config.adsManager.currWaterfall!=i||(i.adsProgram.length||(setTimeout(function(){i.config.bus.triggerNote("waterFallEmpty")},3),i.config.primisConsoleLog("setWaterfall - length=0")),i.config.adsManager.newAdsProgram=i.adsProgram,i.config.adsManager.waterfallGap=i.waterfallGap,i.config.adsManager.setAdsSchedule(!0),i.config.adsManager.executeAdsSchedule())},!1),this.adsXmlhttp.addEventListener("error",function(e){t.requestOnly||i.config.adsManager.currWaterfall!=i||i.config.bus.triggerNote("waterFallEmpty"),i.config.adsProcessPaused||i.config.adsProcessHalter.shouldHalt()||setTimeout(function(){i.setWaterfall()},2e3)},!1),this.adsXmlhttp.addEventListener("abort",function(e){t.requestOnly||i.config.adsManager.currWaterfall!=i||i.config.bus.triggerNote("waterFallEmpty"),i.config.adsProcessPaused||i.config.adsProcessHalter.shouldHalt()||setTimeout(function(){i.setWaterfall()},2e3)},!1),this.sendRequest()},this.setWaterfall()}function SekindoWaterfallLinearProcessor(e,t,i){this.config=e,this.params=t,this.parent=i,this.adUnitsArray=[],this.index=-1,this.status="processing",this.debugId=this.parent.processorCounter++,this.initTimestamp=(new Date).getTime(),this.init()}function SekindoA9Bidder(e,t,i,n){function o(e){var t="",i={},n=(new Date).getTime().toString();if(e.length>0&&void 0!=e[0].targeting&&void 0!=e[0].targeting.amzniid_sp&&void 0!=e[0].targeting.amznbid_sp){var o=e[0].targeting.amzniid_sp;a.ad.amznbid=e[0].targeting.amznbid_sp,t="https://aax.amazon-adsystem.com/e/dtb/vast?b="+o+"&rnd="+n}else e.length>0&&void 0!=e[0].targeting&&void 0!=e[0].targeting.amzniid&&void 0!=e[0].targeting.amznbid&&(a.ad.amznbid=e[0].targeting.amznbid,t="https://aax.amazon-adsystem.com/e/dtb/vast?b="+e[0].targeting.amzniid+"&rnd="+n+"&pp="+a.ad.amznbid);""!=t&&(i[a.adUnitCode]={bids:[{vastUrl:t,cpm:1.1*a.params.floor,ttl:300,amznbid:a.ad.amznbid}]}),a.cbFunction("amazon",i)}var a=this;if(this.params=t.preBidData.params.params,this.config=e,this.adUnitCode=n,this.cbFunction=i,this.ad=t,void 0==this.config.a9bidderInit){try{var s={pubID:this.params.pubID,adServer:"googletag",deals:!0,gdpr:{cmpTimeout:75}};this.config.schain[this.ad.campaignScope]&&(s.schain=this.config.schain[this.ad.campaignScope]),window.apstag.init(s)}catch(e){}this.config.a9bidderInit=!0}this.run=function(){a.params.floor&&(a.params.apstagSlots[0].floor={value:Math.round(100*a.params.floor),currency:"USD"});try{window.apstag.fetchBids({slots:a.params.apstagSlots},function(e){o(e)})}catch(e){o([])}}}function SekindoCachedBids(e,t){this.parent=t,this.config=e,this.bids=[]}function SekindoAdUnit(e,t,i){var n=this;this.config=e,this.params=t,this.parent=i,this.reportsBlocker={},this.busItms=[],this.adProccessStatus="init",this.adType=null,this.videoEventCallback=this.onVideoEvent.bind(this),this.videoProgressEventCallback=this.onVideoProgressEvent.bind(this),this.moatApiRef=null,this.isEnabledMoatInit="ima"!==this.params.serveType,this.config.cachedBids.invalidateBid(this.params.bidId),this.config.isAdOneClick=t.isAdOneClick,this.omidSession=this.parent.parent.omidSessionWrapper;var o="ima"===this.params.serveType||"prebidVideo"==this.params.serveType&&void 0!=this.params.preBidData&&void 0!=this.params.preBidData.params&&"a9Custom"==this.params.preBidData.params.bidder;if(!this.config.trackAdWithSafeframe&&!this.config.removeAdWithSafeframe||o||(this.adSafeFrameHandler=new adSafeFrameHandler(this)),this.params.isSkipAd)return void this.parent.adUnitReport({type:"fail",val:this});n.config.failAdDebugLog&&(this.params.failedParams={failedReason:null,failedVastURL:null,failedVastXML:null}),"prebidVideo"!=this.params.serveType&&"sspVideo"!=this.params.serveType||SekindoUtils.trackSekindoAdEvents("win",null,this.params,this.config),this.busItms.push(this.config.bus.addCallBack("onUserEvent",function(e){n.onUserEvent(e)})),this.checkAdViewability=new SekindoServices.viewabilityDurationChecker(this.config,this.config.adInViewPrc,function(){n.reportedViewable||(n.reportedViewable=!0,SekindoUtils.trackSekindoAdEvents("viewable",null,n.params,n.config),n.checkAdViewability=null)}),this.rvn=this.params.rvn;var a=this.params.vastURL;const s=new VastErrorHandler(this.config,e=>n.adsLoaded(e));if("ima"==this.params.serveType)if(this.params.floor=this.parent.calcNewFloor(this.params.baseFloor,this.params),n.parent.parent.currWaterfall.wfDebugLog&&n.parent.parent.currWaterfall.wfDebugLog.setAdFloor(this.params.campaignId,this.params.floor,n.parent.parent.currWaterfall.debugWFManagerId),this.params.competeBid=this.parent.highestBid>0?this.parent.highestBid:"",this.adProccessStatus="loaded",this.config.isAppSdk)this.params.track=function(e){},this.wrapper=new SekindoIMAAppWrapper(this.config,this.params,this);else{if(this.config.adsProcessPaused||this.config.adsProcessHalter.shouldHalt())return void this.parent.adUnitReport({type:"fail",val:this,reason:"ad error/empty"});this.params.bgColor&&(this.parent.parent.imaVideoElement.style.backgroundColor=this.params.bgColor,this.parent.parent.imaVideoElement.parentNode.style.background=this.params.bgColor),this.adType=this.params.serveType,this.params.track=function(){},this.parent.parent.imaMain?(this.wrapper=this.parent.parent.imaMain,this.videoElement=this.parent.parent.imaVideoElement,this.vpaidSlot=this.parent.parent.imaSlot,this.wrapper.requestAds(this.params,this)):(this.videoElement=this.parent.parent.imaVideoElement,this.vpaidSlot=this.parent.parent.imaSlot,this.wrapper=this.parent.parent.imaMain=new SekindoIMAWrapper(this.config,this.params,this))}else if(null!=a){var r=(new Date).getTime().toString();a=(a=(a=(a=(a=(a=(a=(a=(a=a.replace("[timestamp]",r)).replace("[CACHEBUSTING]",r)).replace("${GDPR}",this.config.gdprIsRequired)).replace("${GDPR_CONSENT}",encodeURIComponent(this.config.gdprInfo.getConsentString()))).replace("${US_PRIVACY}",encodeURIComponent(this.config.ccpaInfo.consent))).replace("${VP_IS_MUTED}",this.config.isMuted)).replace("${VP_POSITION}",this.config.nextContentIndex+1)).replace("${USER_ENGAGED}",this.config.bus.getParam("isUserEngaged"))).replace("${VP_STATE}",this.config.flowStatus?"float":"normal"),window.primisLog("[[Ad Unit]] - vastUrl: "+a),this.config.failAdDebugLog&&this.params.failedParams&&a&&(this.params.failedParams.failedVastURL=a),SekindoQueryVAST(a,e=>n.adsLoaded(e),null,this.config,0,s,-1)}else this.config.failAdDebugLog&&this.params.failedParams&&this.params.vastXml&&(this.params.failedParams.failedVastXML=this.params.vastXml),new SekindoVASTAds(this.params.vastXml,e=>n.adsLoaded(e),null,this.config,0,"",s);this.params&&!this.params.isSkipAttemptTracking&&SekindoUtils.trackSekindoAdEvents("onAttempt",null,this.params,this.config),this.createPlayerApiAdStartedObject=function(){var e={impValue:0,servingFee:0};if(this.config.playerApiId){if(this.rvn&&this.params.pubCosts.pubRevshare){var t="private"===this.params.campaignScope?this.params.pubCosts.servingFee:0;e.servingFee=this.params.pubCosts.isServingFeeRevshare?this.rvn*t/1e3:t;var i="public"===this.params.campaignScope?this.params.pubCosts.pubRevshare:1;e.impValue=this.rvn*i/1e3}e.countryCode=this.config.countryCode?this.config.countryCode:"",e.domain=this.config.domain?this.config.domain:"",e.playerWidth=this.config.videoWidth?this.config.videoWidth:this.config.width,e.playerHeight=this.config.adVideoHeight?this.config.adVideoHeight:this.config.height}return e}}function DynamicBidValues(e,t){var i=this;this.config=e,this.parent=t,this.placementMap={instream:1,outstream:3,floating:5},this.plcmtMap={instream:1,accompanying_content:2,outstream:4},this.valuesMap={placement:this.placementMap.instream,plcmt:this.plcmtMap.instream},this.instreamLocked=this.config.isInstream,this.instreamLocked?(this.valuesMap.placement=this.placementMap.instream,this.valuesMap.plcmt=this.plcmtMap.instream):"0"===this.config.isAutoPlay||"2"===this.config.isAutoPlay?(this.valuesMap.placement=this.placementMap.instream,this.valuesMap.plcmt=this.plcmtMap.instream):(this.valuesMap.placement=this.placementMap.outstream,this.valuesMap.plcmt=this.plcmtMap.accompanying_content),this.config.bus.setParam("placementDynamicValue",function(){return i.valuesMap.placement}),this.config.bus.setParam("plcmtDynamicValue",function(){return i.valuesMap.plcmt}),this.onUserClick=function(e){"onMute"===e&&!0===i.config.isMuted?(i.valuesMap.placement=i.placementMap.outstream,i.valuesMap.plcmt=i.plcmtMap.accompanying_content):(i.valuesMap.placement=i.placementMap.instream,i.valuesMap.plcmt=i.plcmtMap.instream),i.parent.loadWaterfall()},this.instreamLocked||this.config.bus.addCallBack("userClick",function(e){i.onUserClick(e)}),this.getDynamicValuesMap=function(){return this.valuesMap}}function VastMediaFilesHandler(e,t,i){this.config=e,this.medias=t,this.ad=i,this.getBestMedia=function(){var e=this.medias.filter(e=>"video/mp4"===e.type);return e.length>0&&(this.medias=e),this.ad.linear.getBestMedia(this.medias,{width:this.config.containerDiv.offsetWidth,height:this.config.containerDiv.offsetHeight})},this.sortMedias=function(){for(var e={video:[],js:[]},t=0;t<this.medias.length;t++)if(this.medias[t].type.includes("video/mp4")&&SekindoUtils.validURL(this.medias[t].src))e.video.push(this.medias[t]);else if(this.medias[t].type.includes("javascript"))e.js.push(this.medias[t]);else if(this.medias[t].type.includes("video")&&SekindoUtils.validURL(this.medias[t].src)){var i=document.createElement("video").canPlayType(this.medias[t].type);"probably"!=i&&"maybe"!=i||e.video.push(this.medias[t])}return e}}function BidMacroReplacer(e){var t=this;this.config=e,this.getPlayerFlowMode=function(){var e=-1!==["sticky","flow"].indexOf(t.config.playerMode),i=!t.config.isDesktop;return e?i?"floatMobile":"floatDesktop":"inline"},this.macroMap={"${PLAYER_TYPE}":{getValueFunc:t.getPlayerFlowMode,bidderValueMap:{rubicon:{inline:{player_type:"inline"},floatMobile:{player_type:"floatMobile"},floatDesktop:{player_type:"floatDesktop"}}}}},this.getCustomDataMacroValue=function(e,t){var i="",n=0===t.indexOf("i:");n&&(t=t.substring(2));var o=this.macroMap[t];if(0===t.indexOf("kv_"))for(var a in this.config.kvParams)a===t&&(i=this.config.kvParams[a]);else o&&(i=o.getValueFunc(),i=o.bidderValueMap[e]?o.bidderValueMap[e][i]:i);return n?parseInt(i):i}}function AdsProcessHalter(e){var t=this;this.config=e,this.isHalted=!1,this.isHaltConditionsMet=function(){return!1},this.resumeFromHalt=function(){return!(!t.isHalted||!1!==t.isHaltConditionsMet())&&(t.isHalted=!1,t.config.adsManager.resumeAdsSchedule(),!0)},this.shouldHalt=function(){return!1}}function adSafeFrameHandler(e){function t(){for(var t=SekindoUtils.getElementsInObjByTag(n,"iframe"),a=0;a<t.length;a++)t[a].hasAttribute("src")&&""!=t[a].src&&"about:blank"!=t[a].src&&!o&&(i.config.trackAdWithSafeframe&&function(e){SekindoUtils.firePixel(location.protocol+"//"+i.config.currentServerName+"/live/liveTracker.php?req=rds&cmd=countTrackAdNonFriendlyIframe&url="+encodeURI(e.src)+"&cacheBuster="+Math.round(1e7*Math.random()),i.config.pixelDiv,i.config,!0),o=!0}(t[a]),i.config.removeAdWithSafeframe&&function(t){SekindoUtils.firePixel(location.protocol+"//"+i.config.currentServerName+"/live/liveTracker.php?req=rds&cmd=countRemoveAdNonFriendlyIframe&url="+encodeURI(t.src)+"&cacheBuster="+Math.round(1e7*Math.random()),i.config.pixelDiv,i.config,!0),e.onVpaidEvent({type:"onAdError"})}(t[a]))}var i=this,n=e.config.rootDocument.getElementById("adContainerDiv"),o=!1;this.adUnit=e,this.config=e.config,this.intervalId=0,this.start=function(){i.intervalId||(i.intervalId=setInterval(function(){t()},100))},this.stop=function(){i.intervalId&&clearInterval(i.intervalId)}}function SoundsController(e,t){function i(){for(var e=SekindoUtils.getVideoAudioElementsInObj(n.config.videoIFrameDiv),t=0;t<e.length;t++)o&&-1==o.indexOf(e[t])&&(o.push(e[t]),function(e){var t=0;n.config.isMuted&&(e.mute=!0);n.config.layoutManager.layoutAPI({type:"volumeChange",content:{muted:!0,volume:a}}),e.onvolumechange=function(){n.config.isMuted&&!e.muted&&(e.muted=!0,n.config.layoutManager.layoutAPI({type:"volumeChange",content:{muted:!0,volume:a}}),++t>s&&n.wrapper.onAdError("soundStruggle"))}}(e[t]))}var n=this;this.config=e,this.wrapper=t;var o=[],a=e.volume,s=3;this.disposeMonitors=function(){this.vidCollectInterval&&clearInterval(this.vidCollectInterval);for(var e=0;e<o.length;e++)o[e].onvolumechange=null;o=null},i(),this.vidCollectInterval=setInterval(i,100)}function WaterFallDebugLog(e){var t=[],i=!(!e.LogRest||!e.LogRest.performCall);this.setWF=function(n,o){t=n,function(n){if(i){var o=SekindoUtils.createHashedObject(t,{isHash:!0,isDataCompressed:!1});e.LogRest.performCall("liveVideoWaterfall","setWaterfallList",[o],n)}}(o)},this.markAdAsHavingImps=function(t,n){if(i){var o=t.split("sta=")[1].split("&")[0];e.LogRest.performCall("liveVideoWaterfall","markAdAsHavingImps",[o],n)}},this.setAdFloor=function(t,n,o){i&&e.LogRest.performCall("liveVideoWaterfall","setAdFloorPrice",[t,n],o)},this.destruct=function(){t=null,i=null}}function SekindoFetchXML(e,t,i,n,o,a){function s(e){for(var t=0;t<l.length;t++)if(-1!=e.indexOf(l[t]))return!0;return!1}var r=new XMLHttpRequest;r.onreadystatechange=(()=>{if(r.readyState===r.DONE)if(200===r.status)if(null!==r.responseXML)i(r.responseXML,t);else if(null!==r.responseText){var c=r.responseText,p=function(e){if(window.ActiveXObject)(t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e);else var t=(new DOMParser).parseFromString(e,"text/xml");return t}(c=c.trim());p.getElementsByTagName("parsererror")[0]?(window.primisLog("[[Vast Parser]] - fetch xml failure - parse error"),a.handleVastError(null,a.errorMap.XML_PARSE_ERROR,e,-1,"SekindoFetchXML - fetch xml failure due to parse error")):i(p,t)}else window.primisLog("[[Vast Parser]] - fetch xml failure - no data"),a.handleVastError(null,a.errorMap.VAST_FETCH_ERROR,e,-1,"SekindoFetchXML - fetch xml failure - no data");else s(d)||(l.push(d),SekindoFetchXML(e,t,i,n,o,a)),window.primisLog("[[Vast Parser]] - fetch xml failure - connection fail"),a.handleVastError(null,a.errorMap.VAST_FETCH_ERROR,e,-1,"SekindoFetchXML - fetch xml failure - connection fail")});var l=o.noCredentialsDemandList,c=!1;o.isAppSdk&&l.push("casalemedia.com/pcreative");var d=e.replace("http://","").replace("https://","").split(/[/?#]/)[0];c=s(d),r.open("GET",e,!0),c||(r.withCredentials=!0),r.send(null)}function SekindoQueryVAST(e,t,i,n,o,a,s){if((o=o||0)>=MAX_WRAPPER_DEPTH)return window.primisLog("[[Vast Parser]] - arrived max depth"),void a.handleVastError(null,a.errorMap.MAX_WRAPPER_DEPTH_REACHED,e,s,"SekindoQueryVAST - wrapper depth reached.");SekindoFetchXML(e,null,function(r){try{new SekindoVASTAds(r,t,i,n,o,e,a)}catch(t){window.primisLog("[[Vast Parser]] - fail to build");const i="buildVASTAds - "+t.message;a.handleVastError(null,a.errorMap.UNDEFINED_ERROR,e,s,i)}},()=>t(null),n,a)}function SekindoTrackingEvents(e,t){if(this.events={},this.ad=t,null!==e){if("TrackingEvents"!==e.tagName){if(1!==(e=e.getElementsByTagName("TrackingEvents")).length)return;e=e.item(0)}for(var i=e.getElementsByTagName("Tracking"),n=0;n<i.length;n++){var o=i[n].getAttribute("event");if(o){var a=null;"progress"===o&&(o+="-"+(a=i[n].getAttribute("offset"))),this.events[o]=this.events[o]||[];var s={url:i[n].textContent.replace(/\s/g,""),offset:a,event:o};this.events[o].push(s)}}}}function SekindoVASTAds(e,t,i,n,o,a,s){function r(e){try{if(window.ActiveXObject){return e.xml}return(new XMLSerializer).serializeToString(e)}catch(e){return window.primisLog("[[Vast Parser]] - xml parsing error"),""}}const l=this;this.config=n,this.endpoint=a,this.onAdsAvailable=t;var c=e.getElementsByTagName("Ad"),d=e.getElementsByTagName("Error");if(d&&d.length>0)for(let e=0;e<d.length;e++)if(d[e]&&d[e].textContent){const t=d[e].textContent.trim();t&&s.addErrorUrl(t)}if(this.vastVersion=function(e){if(!e)return-1;let t;const i=e.getElementsByTagName("VAST");if(i.length>0){const e=i[0];e.hasAttribute("version")?(t=parseFloat(e.getAttribute("version")))>l.config.vastSupportedVersion&&s.handleVastError(null,s.errorMap.VAST_VERSION_ERROR,a,t,"SekindoVASTAds - Bidder did not respect the VAST version(s) listed in the bid request."):s.handleVastError(null,s.errorMap.VAST_VERSION_ERROR,a,-1,"SekindoVASTAds - VAST does not contain version.")}return t>0?t:-1}(e),0==c.length)return window.primisLog("[[Vast Parser]] - No ad"),this.onAdsAvailable=null,void s.handleVastError(this,s.errorMap.NO_VAST_RESPONSE,a,this.vastVersion,"SekindoVASTAds - No ad");this.ads||(this.ads=new Array);for(var p=0;p<c.length;p++){var h=new SekindoVASTAd(this,c.item(p),i||null,null,this.config,s);if(h.vastStr=r(e),h.isEmpty())window.primisLog("[[Vast Parser]] - ad is empty");else{if(n.demandDebug&&n.demandDebug.length>0)for(var u=0;u<n.demandDebug.length;u++)try{if(h.vastStr&&-1!=h.vastStr.indexOf(n.demandDebug[u])||a&&-1!==a.indexOf(n.demandDebug[u])){var g="VAST keyword: "+n.demandDebug[u]+", in domain: "+n.domain+", VAST Url: "+String(a)+", VAST Response: "+String(h.vastStr);SekindoUtils.postLogMessage(g,n);break}}catch(e){}if(n.LogRest&&n.LogRest.performCall)try{h.reportDebugImpPixelId=Math.random(),h.debugWFManagerId=n.adsManager.currWaterfall.debugWFManagerId,n.LogRest.performCall("liveVideoWaterfall","AddVastData",[h.reportDebugImpPixelId,a,h.vastStr,"Vast-"+o.toString()],h.debugWFManagerId)}catch(e){}if(this.ads.push(h),!h.hasData()||h.hasSequence()&&!h.isNumber(1)){var f=c.item(p).getElementsByTagName("Wrapper").item(0),m=f.getElementsByTagName("VASTAdTagURI");if(0===m.length){s.handleVastError(this,s.errorMap.VAST_SCHEMA_VALIDATION_ERROR,a,this.vastVersion,"SekindoVASTAds - missing VASTAdTagURI to provide a URI to a secondary VAST response"),window.primisLog("[[Vast Parser]] - no uri");continue}m=m.item(0).textContent.replace(/\s/g,"");var v;!function(e,t,i){v=function(n){if(e.onLoaded(n,t),i.onAdsAvailable){var o=i.onAdsAvailable;i.onAdsAvailable=null,o.call(i,i)}}}(h,"true"===f.getAttribute("allowMultipleAds"),this),window.primisLog("[[Vast Parser]] - digg in"),SekindoQueryVAST(m,v,h,n,o+1,s,this.vastVersion)}else if(t&&this.onAdsAvailable){var y=this.onAdsAvailable;this.onAdsAvailable=null,y.call(this,this)}}}}function SekindoVASTAd(e,t,i,n,o,a){function s(e,t,i){if(!e||"function"!=typeof e.querySelector){if(i)throw new Error(`element with undefined querySelector function for tag: ${t}`);return null}return e.querySelector(t)}function r(e,t,i){if(!e)throw new Error(`element is null for tag: ${t}`);var n=s(e,t);if(!n||!n.textContent){if(i)throw new Error(`element with undefined textContent for tag: ${t}`);return null}return n.textContent.trim()}function l(e,t,i){if(!e||"function"!=typeof e.getAttribute){if(i)throw new Error(`failed to get attribute: ${t}`);return null}return e.getAttribute(t)}function c(e,t){if(t<4)return[];var i=function(e,t){if(!e||"function"!=typeof e.querySelectorAll)throw new Error(`element with undefined querySelector function for tag: ${t}`);return e.querySelectorAll(t)}(e,"Verification"),n=[];if(i.length>0)for(var o=0;o<i.length;o++){var a=l(i[o],"vendor",!0),c=r(i[o],"JavaScriptResource",!0),d=r(i[o],"VerificationParameters",!1),p=new SekindoTrackingEvents(s(i[o],"TrackingEvents",!1));n.push({vendorKey:a,
scriptUrl:c,vendorParams:d,TrackingEvents:p})}return n}if(this.vast=e,this.pod=e,this.parentAd=i,this.onAdAvailable=n,this.sequence=null,this.hasContent=!0,this.loaded=!0,this.linear=null,this.id=t.id,this.impressions=[],this.currentPodAd=this,this.sentImpression=!1,this.properties={},this.universalAdId=[],this.config=o,this.adVerifications=[],this.vastType="",null!==this.parentAd){var d=this.parentAd;this.linear=d.linear?d.linear.copy(this,a):null;for(var p in d.properties)d.properties.hasOwnProperty(p)&&(this.properties[p]=d.properties[p])}t.hasAttribute("sequence")&&(this.sequence=parseInt(t.getAttribute("sequence"),10));var h=t.getElementsByTagName("InLine"),u=t.getElementsByTagName("Wrapper");if(0===h.length){if(this.loaded=!1,0===(h=u).length)return this.hasContent=!1,void a.handleVastError(null,a.errorMap.VAST_SCHEMA_VALIDATION_ERROR,this.vast.endpoint,this.vast.vastVersion,"SekindoVASTAd - InLine and Wrapper both missing.");this.vastType="Wrapper"}else u.length>0?a.handleVastError(null,a.errorMap.VAST_SCHEMA_VALIDATION_ERROR,this.vast.endpoint,this.vast.vastVersion,"SekindoVASTAd - InLine and Wrapper both present."):this.vastType="InLine";for(var g=(h=h.item(0)).firstChild;null!==g;){if(1===g.nodeType)switch(g.tagName){case"Creatives":case"InLine":case"Wrapper":case"Impression":case"Extensions":case"VASTAdTagURI":case"Error":break;default:this.properties[g.tagName]=g.textContent.replace(/^\s*|\s*$/g,"")}g=g.nextSibling}if(this.advertiser=function(e){var t=e.querySelector("Advertiser");if(t)return t.innerHTML}(h),this.icons=function(e){const t=[];return e.querySelectorAll("Icons Icon").forEach(e=>{try{const i=r(e,"StaticResource",!1),n=r(e,"HTMLResource",!1),o=r(e,"IFrameResource",!1);if(i||n||o){const a=parseInt(e.getAttribute("width"),10),s=parseInt(e.getAttribute("height"),10),l={altText:e.getAttribute("altText")||"",apiFramework:e.getAttribute("apiFramework"),duration:e.getAttribute("duration"),height:s&&!isNaN(s)?s:16,hoverText:e.getAttribute("hoverText")||"",offset:parseInt(e.getAttribute("offset"),10)||0,program:e.getAttribute("program")||"",pxRatio:parseFloat(e.getAttribute("pxRatio"))||1,width:a&&!isNaN(a)?a:16,xPosition:e.getAttribute("xPosition")||"left",yPosition:e.getAttribute("yPosition")||"top"};i?l.staticResource=i:n?l.htmlResource=n:o&&(l.iFrameResource=o),l.iconViewTracking=r(e,"IconViewTracking",!1);const c=e.querySelector("IconClicks");c&&(l.iconClicks={iconClickThrough:r(c,"IconClickThrough",!1),iconClickTracking:r(c,"IconClickTracking",!1)}),t.push(l)}}catch(e){SekindoUtils.postLogMessage(`Vast icon could not be parsed. Error processing Icon element: ${e.message}`,this.config)}}),t}(h),this.impressions=function(e){var t=[],i=e.querySelectorAll("Impression");return i&&i.forEach(function(e){t.push(e.textContent.replace(/\s/g,""))}),t}(h),this.adServingId=function(e){var t=e.querySelector("AdServingId");if(t)return t.innerHTML}(h),this.categoriesList=function(e){var t=e.querySelectorAll("Category"),i=[];if(t.length>0){for(var n=0;n<t.length;n++){var o="";t.item(n).hasAttribute("authority")&&(o=t.item(n).getAttribute("authority")),i.push({authority:o,value:t.item(n).innerHTML})}return i}}(h),this.config.isOmidActivated)try{this.adVerifications=c(h,e.vastVersion)}catch(t){var f=`Notification: skipped OMID activation for VAST version ${e.vastVersion} with reason: "${t.message}", domain: ${o.domain}, VAST Url: ${String(e.endpoint)}`;SekindoUtils.postLogMessage(f,o)}var m=h.getElementsByTagName("Creatives");if(0!==m.length){m=m.item(0).getElementsByTagName("Creative");for(var v=0;v<m.length;v++){var y=m[v];if(null!==y&&y){var b=y.children;for(var S of b)switch(S.tagName){case"Linear":var w=y.getElementsByTagName(S.tagName)[0];if(w){var k=new SekindoVASTLinear(this,w,a);this.linear?this.linear.augment(k):this.linear=k}break;case"UniversalAdId":0!==S.textContent.trim().length&&S.getAttribute("idRegistry")&&0!==S.getAttribute("idRegistry").trim().length&&this.universalAdId.push({creativeId:y.getAttribute("id"),id:S.textContent,idRegistry:S.getAttribute("idRegistry")||null});break;default:a.handleVastError(null,a.errorMap.TRAFFICKING_ERROR,this.vast.endpoint,this.vast.vastVersion,"SekindoVASTAd - Video player received an ad type that it was not expecting.")}}}this.linear&&(this.trackings=this.linear.tracking),this.parentAd&&(this.parentAd.trackings&&(this.trackings?this.trackings.augment(this.parentAd.trackings):this.trackings=this.parentAd.trackings),this.parentAd.adVerifications&&(this.adVerifications?this.adVerifications=[...this.adVerifications,...this.parentAd.adVerifications]:this.adVerifications=this.parentAd.adVerifications),this.icons=[...this.parentAd.icons,...this.icons],this.icons=Object.values(this.icons.reduce((e,t)=>(e[t.program]=t,e),{})),this.icons=this.icons.slice(-8))}else"InLine"===this.vastType&&a.handleVastError(null,a.errorMap.VAST_SCHEMA_VALIDATION_ERROR,this.vast.endpoint,this.vast.vastVersion,"SekindoVASTAd - Creatives missing.")}function SekindoVASTLinear(e,t,i){this.root=t,this.clickThrough=null,this.tracking=new SekindoTrackingEvents(t,e),this.mediaFiles=[],this.interactiveCreativeFiles=[],this.duration=null,this.adParameters=null;var n=t.getElementsByTagName("VideoClicks");if(n.length){var o=(n=n.item(0)).getElementsByTagName("ClickThrough");o.length&&(this.clickThrough=o.item(0).textContent.replace(/\s/g,"")),o=n.getElementsByTagName("ClickTracking");for(var a=0;a<o.length;a++)this.tracking.addClickTracking(o.item(a).textContent.replace(/\s/g,""))}var s=t.getElementsByTagName("Duration");s.length>0&&(this.duration=this.timecodeFromString(s.item(0).textContent.replace(/\s/g,"")),((e,{maxduration:t,minduration:i})=>e>t||e<i)(this.duration,e.config.staticBidValues)&&i.handleVastError(null,i.errorMap.DURATION_ERROR,e.vast.endpoint,e.vast.vastVersion,"SekindoVASTLinear - The duration does not match the request range.")),s.length||"InLine"!==e.vastType||i.handleVastError(null,i.errorMap.VAST_SCHEMA_VALIDATION_ERROR,e.vast.endpoint,e.vast.vastVersion,"SekindoVASTLinear - Duration is missing.");if(t.getElementsByTagName("AdParameters").length)try{string=[].map.call(t.getElementsByTagName("AdParameters"),function(e){return e.textContent||e.innerText||""}).join(""),this.adParameters=string}catch(e){this.adParameters=null}var r=t.getElementsByTagName("MediaFiles");if(r.length){(r=r.item(0).getElementsByTagName("MediaFile")).length||i.handleVastError(null,i.errorMap.VAST_SCHEMA_VALIDATION_ERROR,e.vast.endpoint,e.vast.vastVersion,"SekindoVASTLinear - Missing MediaFile node.");for(a=0;a<r.length;a++){for(var l=r.item(a),c={},d=0;d<l.attributes.length;d++)c[l.attributes[d].name]=l.attributes[d].value;c.src=r.item(a).textContent.replace(/\s/g,""),this.mediaFiles.push(c)}}else"InLine"===e.vastType&&i.handleVastError(null,i.errorMap.VAST_SCHEMA_VALIDATION_ERROR,e.vast.endpoint,e.vast.vastVersion,"SekindoVASTLinear - Missing MediaFiles node.")}function SekindoPlaylistManager(e,t){function i(){n.isFirstContent&&(n.videoElement.src=n.contentPlayList[0])}var n=this;this.uniqueID=e,this.loaderTimeout=null,this.config=t,this.bus=t.bus,this.videoTitle="",this.contentPlayList=t.contentPlayList,this.index=0,this.playlistMultiplierIndex=0,this.failTimeout=null,this.contentPixelFiredMap=[],this.prevVolVal=0,this.mobileVisibilityLock=!1,this.isUserEngaged=!1,this.config.bus.setParam("isUserEngaged",function(){return n.isUserEngaged}),this.fileId=this.contentPlayList[0]?this.contentPlayList[0].fileId:"0",this.setContentParams(0),this.config.bus.setParam("fileId",function(){return n.fileId}),this.playListId=this.contentPlayList[0]?this.contentPlayList[0].playListId:"0",this.config.bus.setParam("playListId",function(){return n.playListId}),this.listId=this.contentPlayList[0]?this.contentPlayList[0].listId:"0",this.config.bus.setParam("listId",function(){return n.listId}),this.contentMatchType=this.contentPlayList[0]?this.contentPlayList[0].contentMatch:"",this.config.bus.setParam("contentMatchType",function(){return n.contentMatchType}),this.isFirstContent=!0,this.config.bus.setParam("isFirstContent",function(){return n.isFirstContent}),this.generateVideoElement(),this.addViewabilityCallback(),this.isPlayingMode="0"!=this.config.isAutoPlay,this.bus.setParam("isPlayingMode",function(){return n.isPlayingMode}),this.isContentPlaying=!1,this.bus.setParam("isContentPlaying",function(){return n.isContentPlaying}),window.primisLog("[[Playlist Manager]][[Hls]] - hls is supported as - "+this.config.hls),this.config.isDesktop||(this.mobileVisibilityLock=!this.config.onVisibilityChange.getCurrState(),this.config.bus.addCallBack("onVisibilityChange",function(){n.config.onVisibilityChange.getCurrState()?(n.mobileVisibilityLock=!1,n.allowPlaying&&n.playerSimulator.paused&&n.playerSimulator.currDummyProgress>0?n.playerSimulator.play():n.allowPlaying&&n.videoElement&&n.videoElement.paused&&n.videoElement.play()):(n.mobileVisibilityLock=!0,n.playerSimulator.paused?n.videoElement.src&&3!=n.videoElement.networkState&&!n.videoElement.paused&&n.videoElement.pause():n.playerSimulator.pause())}));var o=this.config.c2pWaitTime-3;1==this.config.isAutoPlay||4==this.config.isAutoPlay&&o<=0?i():4==this.config.isAutoPlay&&(this.loadFirstContentTimeout=setTimeout(i,1e3*o)),this.config.bus.addCallBack("fireContentPixel",function(e){n.fireContentPixel(e)}),this.config.bus.addCallBack("loadNextContentBG",function(e){n.loadNextContentBG(n.index)}),this.config.bus.addCallBack("loadSwitchedContentBG",function(){n.loadSwitchedContentBG()}),this.config.bus.triggerNote("playlistInited"),this.config.isNativeTemplate&&this.config.nativeTemplateElements&&this.initNextContent(this.index)}function SekindoPlayerSimulator(e,t){this.uniqueID=e,this.config=t,this.currDummyProgress=0,this.paused=!0,this.src="",this.networkState=0}function SekindoDebugAgent(e){function t(e){if(!i.endSession){var t="";try{arguments.callee.caller.err=new Error("error");try{t=arguments.callee.caller.err.stack.toString()}catch(e){t=e.stack.toString()}}catch(e){}for(var o=t.split(/\r\n|\n/),a=-1==o[0].indexOf("Error")?1:2,s=0;s<a;s++)o.shift();var r=[];for(s=0;s<o.length;s++){var l="--";try{l=o[s].match(/(.*at\s+)(.*)(\s+\(http*)/)[2]}catch(e){try{l=o[s].match(/(.*)(@http*)/)[1]}catch(e){}}try{var c=o[s].match(/\:(\d+)\:\d+/)[0];r.push(l+":"+c)}catch(e){}}c=o[0].match(/\:(\d+)\:\d+/)[0];var d=JSON.stringify(r),p=JSON.stringify(i.config.clientInfo),h=(new Date).getTime(),u=new FormData;u.append("sessionId",i.config.debugSessionId),u.append("sender","player"),u.append("message",e),u.append("stack",d),u.append("timeStamp",h),u.append("lineNumber",c),u.append("userAgent",p);var g=new XMLHttpRequest;g.onreadystatechange=function(){4==this.readyState&&200==this.status&&function(e){var t=JSON.parse(e);if(!t||!t.length)return;t.sort(function(e,t){return e.time<t.time?-1:e.time>t.time?1:0});for(var o=0;o<t.length;o++)"console"==t[o].sender&&parseInt(t[o].time)>n&&(n=parseInt(t[o].time),console.log("we have a command for the player:"+t[o].content),"endSession"==t[o].content&&(i.endSession=!0))}(this.responseText)},g.open("POST",i.config.absolutePath+i.storeMsgPath,!0),g.send(u)}}var i=this;this.config=e,this.configDebug=[],this.endSession=!1,this.storeMsgPath="/debugTools/video/tests/socketConnection.php",this.externalDebugWindowURL="/debugTools/video/onSiteDebugger/debugWindow.php",this.internalDebugWindowURL="/debugTools/video/onSiteDebugger/onSiteDebugger.js",this.earlyMessagesQ=[],this.isDebuggerWindowIn=!1,this.isDebuggerWindowConstructed=!1;var n=(new Date).getTime();window.primisLog=function(e){},this.config.debugSessionId&&(window.primisLog=t),this.setDebugConfigFromWindow()}function SekindoUtils(){}function SekindoServices(){}function Slider(e,t,i){t.position="fixed",t.zIndex=SekindoUtils.getHighestZIndex(e.rootWindow,"div")+1,t.boxShadow="1px 6px 8px 4px rgba(0, 0, 0, 0.4)";let n=e.flowWidth,o=t[i.side]=`${-n-100}px`;t[i.botTop]=`${e.sliderOffset}px`;let a=e.isDesktop?e.sliderOffset:20;const s=()=>{SekindoUtils.animateTo(t,i.side,`${a}px`,.6,"easeOut")},r=()=>{SekindoUtils.animateTo(t,i.side,o,.6,"easeIn")},l=()=>{e.bus.triggerNote("onUserEvent",{type:"onMute",value:!0})};return e.bus.addCallBack("sliderOnVisibilityChange",function(){l()}),{slideIn:()=>{SekindoUtils.delayRequest(s,1,e.rootWindow),e.bus.triggerNote("exposeHideCloseUnit",{status:"open"})},slideOut:()=>{SekindoUtils.delayRequest(r,1,e.rootWindow),e.bus.triggerNote("exposeHideCloseUnit",{status:"close"}),e.bus.triggerNote("onUserEvent",{type:"onMute",value:!0})},onVisibilityChange:l}}function PlayerAPI(e,t){this.PLAYER_API_INIT_EVENT="primisPlayerInit",this.playerApiId=e,this.allowedEvents=["adStarted","adCompleted","adPlay","adPause","adSkip","adFirstQuartile","adMidQuartile","adThirdQuartile","adClickthrough","videoStart","videoEnd","videoSkip","videoClickthrough","videoTimeUpdate","volumeChange","playerModeChange","floatStatusChange","userFloatClose"];var i=t.bus,n=this;window.top&&window.top.PrimisApiConfig&&t.isPlayerApiActions&&(this.apiPlayerConfig=window.top.PrimisApiConfig.apiPlayerConfig,this.apiFloatStatus=this.apiPlayerConfig&&this.apiPlayerConfig.floatInitalStatus?this.apiPlayerConfig.floatInitalStatus:null,i.setParam("apiFloatStatus",function(){return"disable"!==n.apiFloatStatus})),this.addEventListener=function(e,t){return this.allowedEvents.indexOf(e)<0?null:(e="API"+e,i.addCallBack(e,t))},this.removeEventListener=function(e){i.removeBusItm(e)},t.isPlayerApiActions&&(this.float=function(e){this.apiFloatStatus=e,i.getParam("flowStatus")||"enable"!==e?i.getParam("flowStatus")&&"disable"===e&&i.triggerNote("apiFloat","unflow"):i.triggerNote("apiFloat","flow")})}function SekindoMraid(e){function t(){function e(){window.primisLog("[[MRAID]]isViewable : "+window.top.mraid.isViewable()),i.config.appsGeometryStatus.viewable=window.top.mraid.isViewable(),i.config.bus.triggerNote("isAppViewableChange",i.config.appsGeometryStatus.viewable),window.top.mraid.isViewable()&&t&&(t=!1,i.bus.getParam("isContentPlaying")||i.config.bus.triggerNote("onUserEvent",{type:"onPlay"}),clearInterval(o))}var t=!0;i.config.isAppsGeometry=!0,i.config.appsGeometryStatus={viewable:!1,init:!0,inActiveView:!0},window.top.mraid.addEventListener("viewableChange",function(t){e()}),"ios"===i.config.clientInfo.os&&(o=setInterval(function(){e()},1e3))}var i=this;this.config=e,this.bus=e.bus;var n=this.config.isAutoPlay,o=null,a=null;this.config.isAutoPlay=2,window.top.mraid?(window.primisLog("[[MRAID]] - class available - no need to load"),t()):(window.primisLog("[[MRAID]] - no class - try to load"),function(){function e(){window.top.mraid&&("loading"===window.top.mraid.getState()?window.top.mraid.addEventListener("ready",t):"default"===window.top.mraid.getState()&&t(),clearInterval(a)),window.primisLog("[[MRAID]] exists : "+window.top.mraid)}var o=window.top.document.getElementsByTagName("head").item(0),s=window.top.document.createElement("script");s.setAttribute("type","text/javascript"),s.setAttribute("src","mraid.js"),o.appendChild(s),s.onload=function(){window.primisLog("[[MRAID]] - onload"),e()},s.onerror=function(){window.primisLog("[[MRAID]] - load error"),i.config.isAutoPlay=n,1==n&&"ios"!=i.config.clientInfo.os&&i.config.bus.triggerNote("onUserEvent",{type:"onPlay"})},"ios"===i.config.clientInfo.os&&(a=setInterval(function(){e()},100))}())}function OMIDClientSession(e){var t=this;this.config=e,this.videoElement=null,this.adSession=null,this.mediaEvents=null,this.adEvents=null;const i=OmidSessionClient&&OmidSessionClient.default,n=i.AdSession,o=i.Partner,a=i.Context,s=i.VerificationScriptResource,r=i.AdEvents,l=i.MediaEvents,c=t.config.pubUrl,d=new o("Primistech","1.4.6"),p=window;this.startAdSession=function(e,i){try{t.videoElement=e;const h=t.videoElement;var o=[];if(i.forEach(function(e){try{var i=new s(e.scriptUrl,e.vendorKey,e.vendorParams,"full");o.push(i)}catch(i){e.TrackingEvents.track("verificationNotExecuted",{REASON:"3"},null,t.config)}}),0===o.length)throw Error("verificationScriptResources is empty or undefined.");const u=new a(d,o,c);if(u.setVideoElement(h),u.setServiceWindow(p),t.adSession=new n(u),t.didFireMediaStart=!1,t.adSession.setCreativeType("video"),t.adSession.setImpressionType("beginToRender"),t.adEvents=new r(t.adSession),t.mediaEvents=new l(t.adSession),!t.adSession.isSupported())return;t.adSession.start(),t.adSession.registerSessionObserver(e=>{switch(e.type){case"sessionStart":t.adEvents.loaded(),t.fsBusItem=t.config.bus.addCallBack("onFsChange",function(){if(t.adSession){var e=SekindoServices.fullscreen.isFullscreen?"fullscreen":"normal";t.mediaEvents.playerStateChange(e)}})}})}catch(e){}return t.adSession},this.finishAdSession=function(){t.adSession&&(t.adSession.finish(),t.adSession=null),t.fsBusItem&&t.config.bus.removeCallBack(t.fsBusItem.callbackID,t.fsBusItem.callbackFunc)},this.impressionOccurred=function(){t.adEvents&&t.adEvents.impressionOccurred()},this.mediaStart=function(e){!t.mediaEvents||isNaN(e)||t.didFireMediaStart||(t.didFireMediaStart=!0,t.mediaEvents.start(e,parseFloat(t.config.isMuted?0:t.config.volume)))},this.mediaAdUserInteraction=function(){t.mediaEvents&&t.mediaEvents.adUserInteraction("click")},this.mediaFirstQuartile=function(){t.mediaEvents&&t.mediaEvents.firstQuartile()},this.mediaMidpoint=function(){t.mediaEvents&&t.mediaEvents.midpoint()},this.mediaThirdQuartile=function(){t.mediaEvents&&t.mediaEvents.thirdQuartile()},this.mediaComplete=function(){t.mediaEvents&&t.mediaEvents.complete()},this.mediaPause=function(){t.mediaEvents&&t.mediaEvents.pause()},this.mediaResume=function(){t.mediaEvents&&t.mediaEvents.resume()},this.mediaSkipped=function(){t.mediaEvents&&t.mediaEvents.skipped()},this.mediaVolumeChange=function(e){t.mediaEvents&&t.mediaEvents.volumeChange(parseFloat(e))}}function SekindoOmid(config){function fireEvent(e){switch(window.primisLog("[[OMID]] =====================================================>>>>>>>>>>>>>> "),window.primisLog("[[OMID]] fireEvent: "+e.type),e.type){case"sessionStart":break;case"sessionFinish":ref.config.appsGeometryStatus.viewable=!1,ref.config.appsGeometryStatus.inActiveView=!1;break;case"geometryChange":window.primisLog("[[OMID]] geometryChange W x H: "+e.data.adView.onScreenGeometry.width+" X "+e.data.adView.onScreenGeometry.height),ref.config.appsGeometryStatus.viewable=e.data.adView.onScreenGeometry.width>0&&e.data.adView.onScreenGeometry.height>10,ref.config.appsGeometryStatus.inActiveView="notFound"!=e.data.adView.reasons[0],ref.lastVisible!=ref.config.appsGeometryStatus.inActiveView&&(ref.lastVisible=ref.config.appsGeometryStatus.inActiveView,ref.config.bus.triggerNote("inActiveViewChange",ref.config.appsGeometryStatus.inActiveView)),ref.lastViewable!=ref.config.appsGeometryStatus.viewable&&(ref.lastViewable=ref.config.appsGeometryStatus.viewable,ref.config.bus.triggerNote("isAppViewableChange",ref.config.appsGeometryStatus.viewable)),window.primisLog("[[OMID]] geometryChange appsGeometryStatus.viewable: "+ref.config.appsGeometryStatus.viewable),window.primisLog("[[OMID]] geometryChange appsGeometryStatus.inActiveView: "+ref.config.appsGeometryStatus.inActiveView)}}var ref=this;this.config=config,this.lastViewable=!1,this.lastVisible=!1;var currWindow=window.top,ctx="undefined"==typeof global?currWindow:global,input="undefined"==typeof exports?void 0:exports,action=function(omidGlobal_js,omidExports){function contents_exporter_getOmidExports(){return void 0===omidExports?null:omidExports}function contents_exporter_getOrCreateName(e,t){return e&&(e[t]||(e[t]={}))}function contents_logger_executeLog(e,t){"undefined"!=typeof jasmine&&jasmine?e():"undefined"!=typeof console&&console&&console.error&&t()}function contents_OmidGlobalProvider_getOmidGlobal(){if(void 0!==omidGlobal_js&&omidGlobal_js)return omidGlobal_js;if("undefined"!=typeof global&&global)return global;if(void 0!==currWindow&&currWindow)return currWindow;if(void 0!==contents_OmidGlobalProvider_globalThis&&contents_OmidGlobalProvider_globalThis)return contents_OmidGlobalProvider_globalThis;throw Error("Could not determine global object context.")}function contents_serviceCommunication_getUnobfuscatedKey(e,t){return t.reduce(function(e,t){return e&&e[t]},e)}var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.inherits=function(e,t){function i(){}i.prototype=t.prototype,e.superClass_=t.prototype,e.prototype=new i,e.prototype.constructor=e;var n;for(n in t)if("prototype"!=n)if(Object.defineProperties){var o=Object.getOwnPropertyDescriptor(t,n);o&&Object.defineProperty(e,n,o)}else e[n]=t[n]},$jscomp.ASSUME_ES5=!1,$jscomp.ASSUME_NO_NATIVE_MAP=!1,$jscomp.ASSUME_NO_NATIVE_SET=!1,$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){e!=Array.prototype&&e!=Object.prototype&&(e[t]=i.value)},$jscomp.getGlobal=function(e){return void 0!==currWindow&&currWindow===e?e:"undefined"!=typeof global&&null!=global?global:e},$jscomp.global=$jscomp.getGlobal(this),$jscomp.SYMBOL_PREFIX="jscomp_symbol_",$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){},$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)},$jscomp.symbolCounter_=0,$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++},$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator")),"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}}),$jscomp.initSymbolIterator=function(){}},$jscomp.arrayIterator=function(e){var t=0;return $jscomp.iteratorPrototype(function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}})},$jscomp.iteratorPrototype=function(e){return $jscomp.initSymbolIterator(),e={next:e},e[$jscomp.global.Symbol.iterator]=function(){return this},e},$jscomp.makeIterator=function(e){$jscomp.initSymbolIterator();var t=e[Symbol.iterator];return t?t.call(e):$jscomp.arrayIterator(e)},$jscomp.arrayFromIterator=function(e){for(var t,i=[];!(t=e.next()).done;)i.push(t.value);return i},$jscomp.arrayFromIterable=function(e){return e instanceof Array?e:$jscomp.arrayFromIterator($jscomp.makeIterator(e))};var exports_argsChecker={assertTruthyString:function(e,t){if(!t)throw Error("Value for "+e+" is undefined, null or blank.");if("string"!=typeof t&&!(t instanceof String))throw Error("Value for "+e+" is not a string.");if(""===t.trim())throw Error("Value for "+e+" is empty string.")},assertNotNullObject:function(e,t){if(null==t)throw Error("Value for "+e+" is undefined or null")},assertNumber:function(e,t){if(null==t)throw Error(e+" must not be null or undefined.");if("number"!=typeof t||isNaN(t))throw Error("Value for "+e+" is not a number")},assertNumberBetween:function(e,t,i,n){if(exports_argsChecker.assertNumber(e,t),t<i||t>n)throw Error("Value for "+e+" is outside the range ["+i+","+n+"]")},assertFunction:function(e,t){if(!t)throw Error(e+" must not be truthy.")},assertPositiveNumber:function(e,t){if(exports_argsChecker.assertNumber(e,t),0>t)throw Error(e+" must be a positive number.")}},exports_VersionUtils={},contents_VersionUtils_SEMVER_DIGITS_NUMBER=3;exports_VersionUtils.isValidVersion=function(e){return/\d+\.\d+\.\d+(-.*)?/.test(e)},exports_VersionUtils.versionGreaterOrEqual=function(e,t){e=e.split("-")[0].split("."),t=t.split("-")[0].split(".");for(var i=0;i<contents_VersionUtils_SEMVER_DIGITS_NUMBER;i++){var n=parseInt(e[i],10),o=parseInt(t[i],10);if(n>o)break;if(n<o)return!1}return!0};var exports_ArgsSerDe={},contents_ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION="1.0.3";exports_ArgsSerDe.serializeMessageArgs=function(e,t){return exports_VersionUtils.isValidVersion(e)&&exports_VersionUtils.versionGreaterOrEqual(e,contents_ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION)?t:JSON.stringify(t)},exports_ArgsSerDe.deserializeMessageArgs=function(e,t){return exports_VersionUtils.isValidVersion(e)&&exports_VersionUtils.versionGreaterOrEqual(e,contents_ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION)?t||[]:t&&"string"==typeof t?JSON.parse(t):[]};var exports_constants={AdEventType:{IMPRESSION:"impression",STATE_CHANGE:"stateChange",GEOMETRY_CHANGE:"geometryChange",SESSION_START:"sessionStart",SESSION_ERROR:"sessionError",SESSION_FINISH:"sessionFinish",VIDEO:"video",LOADED:"loaded",START:"start",FIRST_QUARTILE:"firstQuartile",MIDPOINT:"midpoint",THIRD_QUARTILE:"thirdQuartile",COMPLETE:"complete",PAUSE:"pause",RESUME:"resume",BUFFER_START:"bufferStart",BUFFER_FINISH:"bufferFinish",SKIPPED:"skipped",VOLUME_CHANGE:"volumeChange",PLAYER_STATE_CHANGE:"playerStateChange",AD_USER_INTERACTION:"adUserInteraction"},VideoEventType:{LOADED:"loaded",START:"start",FIRST_QUARTILE:"firstQuartile",MIDPOINT:"midpoint",THIRD_QUARTILE:"thirdQuartile",COMPLETE:"complete",PAUSE:"pause",RESUME:"resume",BUFFER_START:"bufferStart",BUFFER_FINISH:"bufferFinish",SKIPPED:"skipped",VOLUME_CHANGE:"volumeChange",PLAYER_STATE_CHANGE:"playerStateChange",AD_USER_INTERACTION:"adUserInteraction"},ErrorType:{GENERIC:"generic",VIDEO:"video"},AdSessionType:{NATIVE:"native",HTML:"html"},EventOwner:{NATIVE:"native",JAVASCRIPT:"javascript",NONE:"none"},AccessMode:{FULL:"full",LIMITED:"limited"},AppState:{BACKGROUNDED:"backgrounded",FOREGROUNDED:"foregrounded"},Environment:{MOBILE:"app"},InteractionType:{CLICK:"click",INVITATION_ACCEPT:"invitationAccept"},MediaType:{DISPLAY:"display",VIDEO:"video"},Reason:{NOT_FOUND:"notFound",HIDDEN:"hidden",BACKGROUNDED:"backgrounded",VIEWPORT:"viewport",OBSTRUCTED:"obstructed",CLIPPED:"clipped"},SupportedFeatures:{CONTAINER:"clid",VIDEO:"vlid"},VideoPosition:{PREROLL:"preroll",MIDROLL:"midroll",POSTROLL:"postroll",STANDALONE:"standalone"},VideoPlayerState:{MINIMIZED:"minimized",COLLAPSED:"collapsed",NORMAL:"normal",EXPANDED:"expanded",FULLSCREEN:"fullscreen"},NativeViewKeys:{X:"x",Y:"y",WIDTH:"width",HEIGHT:"height",AD_SESSION_ID:"adSessionId",IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor",CLIPS_TO_BOUNDS:"clipsToBounds",CHILD_VIEWS:"childViews",END_X:"endX",END_Y:"endY",OBSTRUCTIONS:"obstructions"},MeasurementStateChangeSource:{CONTAINER:"container",CREATIVE:"creative"},ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"},CommunicationType:{NONE:"NONE",DIRECT:"DIRECT",POST_MESSAGE:"POST_MESSAGE"},OmidImplementer:{OMSDK:"omsdk"}},contents_InternalMessage_GUID_KEY="omid_message_guid",contents_InternalMessage_METHOD_KEY="omid_message_method",contents_InternalMessage_VERSION_KEY="omid_message_version",contents_InternalMessage_ARGS_KEY="omid_message_args",exports_InternalMessage=function(e,t,i,n){this.guid=e,this.method=t,this.version=i,this.args=n};exports_InternalMessage.isValidSerializedMessage=function(e){return!!e&&void 0!==e[contents_InternalMessage_GUID_KEY]&&void 0!==e[contents_InternalMessage_METHOD_KEY]&&void 0!==e[contents_InternalMessage_VERSION_KEY]&&"string"==typeof e[contents_InternalMessage_GUID_KEY]&&"string"==typeof e[contents_InternalMessage_METHOD_KEY]&&"string"==typeof e[contents_InternalMessage_VERSION_KEY]&&(void 0===e[contents_InternalMessage_ARGS_KEY]||void 0!==e[contents_InternalMessage_ARGS_KEY])},exports_InternalMessage.deserialize=function(e){return new exports_InternalMessage(e[contents_InternalMessage_GUID_KEY],e[contents_InternalMessage_METHOD_KEY],e[contents_InternalMessage_VERSION_KEY],e[contents_InternalMessage_ARGS_KEY])},exports_InternalMessage.prototype.serialize=function(){var e={};return e[contents_InternalMessage_GUID_KEY]=this.guid,e[contents_InternalMessage_METHOD_KEY]=this.method,e[contents_InternalMessage_VERSION_KEY]=this.version,e=e,void 0!==this.args&&(e[contents_InternalMessage_ARGS_KEY]=this.args),e};var exports_Communication=function(e){this.to=e,this.communicationType_=exports_constants.CommunicationType.NONE};exports_Communication.prototype.sendMessage=function(e,t){},exports_Communication.prototype.handleMessage=function(e,t){this.onMessage&&this.onMessage(e,t)},exports_Communication.prototype.generateGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return e="y"===e?(3&t|8).toString(16):t.toString(16)})},exports_Communication.prototype.serialize=function(e){return JSON.stringify(e)},exports_Communication.prototype.deserialize=function(e){return JSON.parse(e)},exports_Communication.prototype.isDirectCommunication=function(){return this.communicationType_===exports_constants.CommunicationType.DIRECT};var exports_DetectOmid={OMID_PRESENT_FRAME_NAME:"omid_v1_present",isOmidPresent:function(e){try{return!!e.frames&&!!e.frames[exports_DetectOmid.OMID_PRESENT_FRAME_NAME]}catch(e){return!1}},declareOmidPresence:function(e){e.frames&&e.document&&(exports_DetectOmid.OMID_PRESENT_FRAME_NAME in e.frames||(null==e.document.body&&exports_DetectOmid.isMutationObserverAvailable_(e)?exports_DetectOmid.registerMutationObserver_(e):e.document.body?exports_DetectOmid.appendPresenceIframe_(e):e.document.write('<iframe style="display:none" id="'+exports_DetectOmid.OMID_PRESENT_FRAME_NAME+'" name="'+exports_DetectOmid.OMID_PRESENT_FRAME_NAME+'"></iframe>')))},appendPresenceIframe_:function(e){var t=e.document.createElement("iframe");t.id=exports_DetectOmid.OMID_PRESENT_FRAME_NAME,t.name=exports_DetectOmid.OMID_PRESENT_FRAME_NAME,t.style.display="none",e.document.body.appendChild(t)},isMutationObserverAvailable_:function(e){return"MutationObserver"in e},registerMutationObserver_:function(e){var t=new MutationObserver(function(i){i.forEach(function(i){"BODY"===i.addedNodes[0].nodeName&&(exports_DetectOmid.appendPresenceIframe_(e),t.disconnect())})});t.observe(e.document.documentElement,{childList:!0})}},exports_DirectCommunication=function(e){exports_Communication.call(this,e),this.communicationType_=exports_constants.CommunicationType.DIRECT,this.handleExportedMessage=exports_DirectCommunication.prototype.handleExportedMessage.bind(this)};$jscomp.inherits(exports_DirectCommunication,exports_Communication),exports_DirectCommunication.prototype.sendMessage=function(e,t){if(!(t=void 0===t?this.to:t))throw Error("Message destination must be defined at construction time or when sending the message.");t.handleExportedMessage(e.serialize(),this)},exports_DirectCommunication.prototype.handleExportedMessage=function(e,t){exports_InternalMessage.isValidSerializedMessage(e)&&this.handleMessage(exports_InternalMessage.deserialize(e),t)};var exports_eventTypedefs={},exports_exporter={};exports_exporter.packageExport=function(e,t,i){(i=void 0===i?contents_exporter_getOmidExports():i)&&((e=e.split(".")).slice(0,e.length-1).reduce(contents_exporter_getOrCreateName,i)[e[e.length-1]]=t)};var exports_logger={error:function(e){for(var t=[],i=0;i<arguments.length;++i)t[i-0]=arguments[i];contents_logger_executeLog(function(){throw new(Function.prototype.bind.apply(Error,[null].concat(["Could not complete the test successfully - "],$jscomp.arrayFromIterable(t))))},function(){return console.error.apply(console,[].concat($jscomp.arrayFromIterable(t)))})},debug:function(e){for(var t=[],i=0;i<arguments.length;++i)t[i-0]=arguments[i];contents_logger_executeLog(function(){},function(){return console.error.apply(console,[].concat($jscomp.arrayFromIterable(t)))})}},exports_OmidGlobalProvider={},contents_OmidGlobalProvider_globalThis=eval("this");exports_OmidGlobalProvider.omidGlobal=contents_OmidGlobalProvider_getOmidGlobal();var exports_PostMessageCommunication=function(e,t){t=void 0===t?exports_OmidGlobalProvider.omidGlobal:t,exports_Communication.call(this,t);var i=this;this.communicationType_=exports_constants.CommunicationType.POST_MESSAGE,e.addEventListener("message",function(e){if("object"==typeof e.data){var t=e.data;exports_InternalMessage.isValidSerializedMessage(t)&&(t=exports_InternalMessage.deserialize(t),e.source&&i.handleMessage(t,e.source))}})};$jscomp.inherits(exports_PostMessageCommunication,exports_Communication),exports_PostMessageCommunication.isCompatibleContext=function(e){return!!(e&&e.addEventListener&&e.postMessage)},exports_PostMessageCommunication.prototype.sendMessage=function(e,t){if(!(t=void 0===t?this.to:t))throw Error("Message destination must be defined at construction time or when sending the message.");t.postMessage(e.serialize(),"*")};var exports_Rectangle=function(e,t,i,n){this.x=e,this.y=t,this.width=i,this.height=n},exports_serviceCommunication={};exports_serviceCommunication.startServiceCommunication=function(e,t,i){return i=void 0===i?exports_DetectOmid.isOmidPresent:i,(t=contents_serviceCommunication_getUnobfuscatedKey(e,t))?new exports_DirectCommunication(t):e.top&&i(e.top)?new exports_PostMessageCommunication(e,e.top):null};var exports_VastProperties=function(e,t,i,n){this.isSkippable=e,this.skipOffset=t,this.isAutoPlay=i,
this.position=n},exports_version={ApiVersion:"1.0",Version:"1.1.0-dev"},contents_VerificationClient_VERIFICATION_CLIENT_VERSION=exports_version.Version,contents_VerificationClient_EventCallback,exports_VerificationClient=function(e){(this.communication=e=void 0===e?exports_serviceCommunication.startServiceCommunication(exports_OmidGlobalProvider.omidGlobal,["omid","v1_VerificationServiceCommunication"]):e)&&(this.communication.onMessage=this.handleMessage_.bind(this)),this.remoteIntervals_=this.remoteTimeouts_=0,this.callbackMap_={}};exports_VerificationClient.prototype.isSupported=function(){return!!this.communication},exports_VerificationClient.prototype.registerSessionObserver=function(e,t){exports_argsChecker.assertFunction("functionToExecute",e),this.sendMessage_("addSessionListener",e,t)},exports_VerificationClient.prototype.addEventListener=function(e,t){exports_argsChecker.assertTruthyString("eventType",e),exports_argsChecker.assertFunction("functionToExecute",t),this.sendMessage_("addEventListener",t,e)},exports_VerificationClient.prototype.sendUrl=function(e,t,i){exports_argsChecker.assertTruthyString("url",e),this.sendMessage_("sendUrl",function(e){e&&t?t():!e&&i&&i()},e)},exports_VerificationClient.prototype.injectJavaScriptResource=function(e,t,i){var n=this;exports_argsChecker.assertTruthyString("url",e),exports_OmidGlobalProvider.omidGlobal.document?this.injectJavascriptResourceUrlInDom_(e,t,i):this.sendMessage_("injectJavaScriptResource",function(o,a){o?(n.evaluateJavaScript_(a,e),t()):(exports_logger.error("Service failed to load JavaScript resource."),i())},e)},exports_VerificationClient.prototype.injectJavascriptResourceUrlInDom_=function(e,t,i){var n=exports_OmidGlobalProvider.omidGlobal.document,o=n.body;(n=n.createElement("script")).onload=t,n.onerror=i,n.src=e,n.type="application/javascript",o.appendChild(n)},exports_VerificationClient.prototype.evaluateJavaScript_=function(a$jscomp$59,b$jscomp$41){try{eval(a$jscomp$59)}catch(e){exports_logger.error('Error evaluating the JavaScript resource from "'+b$jscomp$41+'".')}},exports_VerificationClient.prototype.setTimeout=function(e,t){if(exports_argsChecker.assertFunction("functionToExecute",e),exports_argsChecker.assertPositiveNumber("timeInMillis",t),this.hasTimeoutMethods_())return exports_OmidGlobalProvider.omidGlobal.setTimeout(e,t);var i=this.remoteTimeouts_++;return this.sendMessage_("setTimeout",e,i,t),i},exports_VerificationClient.prototype.clearTimeout=function(e){exports_argsChecker.assertPositiveNumber("timeoutId",e),this.hasTimeoutMethods_()?exports_OmidGlobalProvider.omidGlobal.clearTimeout(e):this.sendOneWayMessage_("clearTimeout",e)},exports_VerificationClient.prototype.setInterval=function(e,t){if(exports_argsChecker.assertFunction("functionToExecute",e),exports_argsChecker.assertPositiveNumber("timeInMillis",t),this.hasIntervalMethods_())return exports_OmidGlobalProvider.omidGlobal.setInterval(e,t);var i=this.remoteIntervals_++;return this.sendMessage_("setInterval",e,i,t),i},exports_VerificationClient.prototype.clearInterval=function(e){exports_argsChecker.assertPositiveNumber("intervalId",e),this.hasIntervalMethods_()?exports_OmidGlobalProvider.omidGlobal.clearInterval(e):this.sendOneWayMessage_("clearInterval",e)},exports_VerificationClient.prototype.hasTimeoutMethods_=function(){return"function"==typeof exports_OmidGlobalProvider.omidGlobal.setTimeout&&"function"==typeof exports_OmidGlobalProvider.omidGlobal.clearTimeout},exports_VerificationClient.prototype.hasIntervalMethods_=function(){return"function"==typeof exports_OmidGlobalProvider.omidGlobal.setInterval&&"function"==typeof exports_OmidGlobalProvider.omidGlobal.clearInterval},exports_VerificationClient.prototype.handleMessage_=function(e,t){t=e.method;var i=e.guid;if(e=e.args,"response"===t&&this.callbackMap_[i]){var n=exports_ArgsSerDe.deserializeMessageArgs(contents_VerificationClient_VERIFICATION_CLIENT_VERSION,e);this.callbackMap_[i].apply(this,n)}"error"===t&&currWindow.console&&exports_logger.error(e)},exports_VerificationClient.prototype.sendOneWayMessage_=function(e,t){for(var i=[],n=1;n<arguments.length;++n)i[n-1]=arguments[n];this.sendMessage_.apply(this,[].concat([e,null],$jscomp.arrayFromIterable(i)))},exports_VerificationClient.prototype.sendMessage_=function(e,t,i){for(var n=[],o=2;o<arguments.length;++o)n[o-2]=arguments[o];this.isSupported()&&(o=this.communication.generateGuid(),t&&(this.callbackMap_[o]=t),n=new exports_InternalMessage(o,"VerificationService."+e,contents_VerificationClient_VERIFICATION_CLIENT_VERSION,exports_ArgsSerDe.serializeMessageArgs(contents_VerificationClient_VERIFICATION_CLIENT_VERSION,n)),this.communication.sendMessage(n))},exports_exporter.packageExport("OmidVerificationClient",exports_VerificationClient)},builder=function(e,t,i){if("object"==typeof i&&"string"!=typeof i.nodeName)t(e,i);else{var n=function(e){var t;for(t in e)e.hasOwnProperty(t)&&(e[t]=n(e[t]));return Object.freeze(e)};t(e,i={});var o;for(o in i)i.hasOwnProperty(o)&&(Object.getOwnPropertyDescriptor(e,o)||Object.defineProperty(e,o,{get:function(){return n({"1.0.2-dev":i[o]})}}))}};builder(ctx,action,input);var typeProperty=Object.keys(currWindow.OmidVerificationClient)[0],self=new currWindow.OmidVerificationClient[typeProperty];if(!self.isSupported())return currWindow.isOmidSupported=!1,currWindow.verificationScriptLoaded=!0,void window.primisLog("[[OMID]] is not Supported");window.primisLog("[[OMID]] is Supported"),this.config.isAppsGeometry=!0,this.config.appsGeometryStatus={viewable:!1,init:!0,inActiveView:!1},currWindow.isOmidSupported=!0,self.registerSessionObserver(fireEvent,"primis.tech-omid"),self.addEventListener("geometryChange",fireEvent),currWindow.verificationScriptLoaded=!0}function ConfigManager(e,t){this.config=e;for(var i in this.config){var n=new function(t){this.callback=function(){var i=e[t],n=i.toString();return null!=n.match(/\[object (.*)\]/i)&&"[object Object]"!=n||"object"!=typeof i||null===i||(i=JSON.parse(JSON.stringify(i))),i}}(i);t.setParam("config."+i,n.callback)}}function AppSdkApi(e){var t=this;this.config=e;var i=0,n=[];this.hasFlowParent=!0,this.lastViewable,this.lastIsInView,this.verticalPos,this.lastVisible=!1,this.switchedUnFlow=!1,this.config.flowStatus=!1,window.primisLog("[[AppSDKApi]] start"),window.top.PrimisAppApi?(window.primisLog("[[AppSDKApi]] sdk init"),this.config.isAppSdk=!0,this.appApi=window.top.primisAppApi,this.sendToApp=function(e,t,n,o,a){var s=this,r=new AppApiObj(t,n,e=e||[],a=a||null,void 0);r.index=i++,window.primisLog("[[AppSDKApi]] sendToApp: "+r.id);try{o?setTimeout(function(){s.appApi.sendToApp(r)},1):this.appApi.sendToApp(r)}catch(e){window.primisLog("[[AppSDKApi]] sendToApp error: "+e.toString())}},this.callbackToApp=function(e){this.appApi.callbackToApp(e)},this.receiveFromApp=function(e){switch(window.primisLog("[[AppSDKApi]] receiveFromApp: "+e.id+":"+e.value),n.push(e),e.type){case"report":t.onReportFromApp(e);break;case"request":t.onRequestFromApp(e);break;case"command":t.onCommandFromApp(e)}},this.appApi.receiveFromApp=this.receiveFromApp,this.callbackFromApp=function(e){window.primisLog("[[AppSDKApi]] callbackFromApp"+e.id)},this.appApi.callbackFromApp=this.callbackFromApp,this.config.isAppsGeometry=!0,this.config.appsGeometryStatus={viewable:!1,init:!0,inActiveView:!1},this.config.responsive=!0,window.top.primisLog=window.primisLog,this.config.bus.addCallBack("playerConstructed",function(){(t.config.isNativeTemplate||t.config.isPrimisNativeSkin||t.config.enableResizeObserverInapp)&&t.setResizeObserver();var e=[{id:"accelerationMethod",value:"hardwareAcceleration"}];t.config.isLoggingActive&&e.push({id:"liveDebugLoggerUrl",value:t.config.LogRest.managerUrl}),t.sendToApp(e,"webApiReady","report",!1)}),this.config.bus.addCallBack("onPlayerResize",function(e){window.primisLog("[[AppSDKApi]] onPlayerResize: "+t.config.playerWidth+":"+t.config.playerHeight),t.config.flowStatus&&t.setFlowOnApp()}),this.config.bus.addCallBack("onUserEvent",function(e){"onCloseBtnClick"==e.type&&(t.config.bus.triggerNote("APIuserFloatClose"),t.setUnFlowOnApp(),t.disableFlowMode=!0,SekindoUtils.firePixel(t.config.closeFloatPixel,t.config.pixelDiv,t.config))}),this.config.bus.addCallBack("onShareClick",function(e){t.sendToApp(e.data,"share","command",!0)}),this.config.bus.addCallBack("openUrl",function(e){t.sendToApp(e,"openUrl","command",!0)}),this.config.bus.addCallBack("allowExtUrlOpen",function(e){t.sendToApp(e.data,"allowExtUrlOpen","command",!0)}),this.config.bus.addCallBack("toImaSdk",function(e){t.sendToApp(e.data,"imaSdk","command",!0,e.value)}),this.setResizeObserver=function(){"observer"==t.config.checkerType&&(this.resizeObserver=new ResizeObserver(function(e){if(!t.config.flowStatus){var i=e[e.length-1];t.sendToApp(null,"onResize","command",!0,i.target.clientHeight)}}),this.resizeObserver.observe(t.config.rootDocument.body))}):window.primisLog("[[AppSDKApi]] sdk not found")}function AppApiObj(e,t,i,n,o){this.arrayToDataObj=function(e){for(var t=[],i=0;i<e.length;i++){var n=e[i],o=new AppApiObj(n.id,"",[],n.value,void 0);t.push(o)}return t},this.id=e,this.type=t,this.data=this.arrayToDataObj(i),this.value=n,this.callback=o}function PlaylistDesign(e,t){function i(e){f.currPlaying=e;for(var t=0;t<f.unitsArray.length;t++){var i=f.unitsArray[t];i.setIsPlaying(e==i.counter)}if("none"==f.unitsArray[e].container.style.display){if(f.dragIt)return;f.container.offsetWidth;var n=-1*parseInt(f.unitsArray[e].container.style.left),o=-1*(parseInt(f.slider.scrollWidth)-parseInt(f.container.offsetWidth));n=Math.min(0,Math.max(o,n)),SekindoUtils.animateTo(f.slider.style,"transform","translate("+n+"px, 0)",.6,"easeOut",null,d)}}function n(e){e?(f.container.style.opacity=.3,f.container.style.pointerEvents="none"):(f.container.style.opacity=1,f.container.style.pointerEvents="auto")}function o(e){for(var t=0;t<f.unitsArray.length;t++){f.unitsArray[t].setIsHoverAll(!0)}}function a(e){f.preventDefault(e),c(),f.dragIt=!1;for(var t=0;t<f.unitsArray.length;t++){f.unitsArray[t].setIsHoverAll(!1)}}function s(e){SekindoUtils.stopAnimateUnit(f.slider.style,"transform"),f.movementXplorer=e.clientX,f.dragIt=!0}function r(e){c(),f.dragIt=!1}function l(e){if(f.dragIt){if(void 0!=e.movementX&&NaN!=e.movementX||(e.movementX=(e.clientX||e.touches[0].clientX)-f.movementXplorer,f.movementXplorer=e.clientX||e.touches[0].clientX),!e.movementX)return;e.movementX&&(f.isDragged=e.movementX);var t=g();u(t+=e.movementX),d()}}function c(){if(f.isDragged){var e=g();e+=10*f.isDragged;var t=-1*(parseInt(f.slider.scrollWidth)-parseInt(f.container.offsetWidth));e=Math.round(Math.min(0,Math.max(t,e))),SekindoUtils.animateTo(f.slider.style,"transform","translate("+e+"px, 0)",.6,"easeOut",null,d)}f.isDragged=0,f.dragIt=!1}function d(){for(var e=g(),t=f.container.offsetWidth,i=0;i<f.unitsArray.length;i++){var n=f.unitsArray[i].container,o=parseInt(n.style.left);o+e+f.barUnitWidth>0&&o+e<t?(f.unitsArray[i].isImgLoaded||f.unitsArray[i].loadImg(),n.style.display="block"):n.style.display="none"}}function p(e){f.isDragged=10,"rightArrow"==e.currentTarget.id&&(f.isDragged=-10),f.arrowInterval=setInterval(function(){u(g()+f.isDragged),d()},20)}function h(e){clearInterval(f.arrowInterval),c(),f.isDragged=!1}function u(e){f.slider.style.transform="translate("+e+"px ,0)"}function g(){var e=f.slider.style.transform,t=Number(/[+-]?([0-9]*[.])?[0-9]+/.exec(e)[0]);return parseInt(t)}var f=this;if(this.config=e,this.trigger=t,this.dragIt=!1,this.isDragged=0,this.unitsArray=[],this.barUnitWidth=180,this.barHeight=100,this.loadDefaultFont=this.config.playerTemplateData.loadDefaultFont,this.fontFamilyName=this.config.playerTemplateData.fontFamilyName,this.fontFamilySize=this.config.playerTemplateData.fontFamilySize,this.mainPlayerDiv=this.config.mainPlayerDiv,this.mainVideoDiv=this.config.mainVideoDiv,this.fontFamilyLink=this.config.playerTemplateData.fontFamilyLink,this.loadDefaultFont){var m=f.config.rootDocument,v=m.getElementsByTagName("head")[0],y=m.createElement("link");y.rel="stylesheet",y.type="text/css",y.href=this.fontFamilyLink,v.appendChild(y)}this.container=e.rootDocument.createElement("div"),this.container.style.width="100%",this.container.style.height=this.barHeight+"px",this.container.style.position="relative",this.container.style.zIndex=1,this.container.style.overflow="hidden",this.container.style.userSelect="none",this.container.style.msUserSelect="none",this.container.style.mozUserSelect="none",this.container.style.webkitUserSelect="none",this.container.style.marginLeft="auto",this.container.style.marginRight="auto",this.container.style.backgroundColor=this.config.playerTemplateData.thumbBgColor,this.container.id="playlistLayoutElement",this.mainPlayerDiv.insertBefore(this.container,this.mainVideoDiv.nextSibling),this.preventDefault=function(e){e&&e.cancelable&&e.preventDefault()},this.createChild=function(e,t,i,n,o){t&&(i=t.ownerDocument),i||(i=document);var a=i.createElement(e);return t&&!n&&t.appendChild(a),o&&(a.id=o,this[o]=a),a},this.addLayoutElement=function(e){var t=f.createChild(e.type,e.parent);t.id=e.id;for(var i in e.style)t.style[i]=e.style[i];return e.innerHTML&&(t.innerHTML=e.innerHTML),t.style.userSelect="none",t.style.msUserSelect="none",t.style.mozUserSelect="none",t.style.webkitUserSelect="none",t.style.webkitTapHighlightColor="rgba(0,0,0,0)",t.style.webkitTapHighlightColor="ransparent",t.style.pointerEvents="auto",f[e.id]=t,t};var b={id:"slider",type:"div",parent:this.container,style:{width:"100%",position:"absolute",transform:"translate(0px, 0)",bottom:"0px",zIndex:1,userSelect:"none",msUserSelect:"none",mozUserSelect:"none",webkitUserSelect:"none"}};this.slider=this.addLayoutElement(b),this.config.bus.addCallBack("contentStarted",function(){i(f.config.currContentIndex)}),this.config.bus.addCallBack("onSwitchContent",function(){i(f.config.currContentIndex)}),this.config.bus.addCallBack("adCompleted",function(){n(!1)}),this.config.bus.addCallBack("adStarted",function(){n(!0)}),this.config.bus.addCallBack("onPlayerResize",function(e){!function(e){if(f.container.style.display=e.allowPlaylist?"block":"none",e.playlistUnitWidth&&e.allowPlaylist){var t=e.videoWidth,i=(e.videoHeight,e.playerWidth,e.playerHeight,e.playlistUnitWidth),n=e.playlistHeight;f.barUnitWidth=i,f.barHeight=n;for(var o=0;o<f.unitsArray.length;o++){var a=f.unitsArray[o];a.container.style.left=o*(f.barUnitWidth+6)+"px",a.container.style.width=f.barUnitWidth+"px",a.container.style.height=f.barHeight+"px",a.img.style.width=f.barUnitWidth+"px",a.img.style.height=f.barHeight+"px",a.header.style.width=f.barUnitWidth-20+"px"}var s=parseInt(f.slider.style.width);f.slider.style.width=f.unitsArray.length*(f.barUnitWidth+6)-6+"px",f.slider.style.height=f.barHeight+"px",f.container.style.height=f.barHeight+7+"px",f.container.style.width=t+"px";var r=parseInt(f.slider.style.width)/s;u(g()*r),this.rootWindow=f.config.rootWindow,SekindoUtils.delayRequest(d,2,this.rootWindow)}}(e)}),this.config.bus.addCallBack("onExposeHideEvent",function(e){!function(e){e?o():a()}(e)}),this.config.responsive&&this.config.bus.addCallBack("onFlowStatusChange",function(e){d()}),this.config.isDesktop?this.evtType={click:"click",mousedown:"mousedown",mouseup:"mouseup",mousemove:"mousemove",mouseenter:"mouseenter",mouseleave:"mouseleave",mouseover:"mouseover",mouseout:"mouseout"}:this.evtType={click:"touchstart",mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove",mouseenter:"mouseenter",mouseleave:"touchcancel",mouseover:"mouseover",mouseout:"mouseout"},this.container.addEventListener(this.evtType.mouseenter,function(e){f.eventWrapper(e,o)}),this.container.addEventListener(this.evtType.mouseleave,function(e){f.eventWrapper(e,a)}),this.container.addEventListener(this.evtType.mousedown,function(e){f.eventWrapper(e,s)}),this.container.addEventListener(this.evtType.mouseup,function(e){f.eventWrapper(e,r)}),this.container.addEventListener(this.evtType.mouseleave,function(e){f.eventWrapper(e,r)}),this.container.addEventListener(this.evtType.mousemove,function(e){f.eventWrapper(e,l)});for(var S=0;S<this.config.contentPlayList.length;S++){var w=new PlaylistUnit(this.config.contentPlayList[S],this,S,this.config);w.container.style.left=S*(this.barUnitWidth+8)+"px",this.unitsArray.push(w)}this.slider.style.width=this.config.contentPlayList.length*(this.barUnitWidth+8)+"px";b={id:"leftArrow",type:"div",parent:this.container,innerHTML:'<svg width="9px" height="16px" style="width: 9px; height: 16px; margin-left: 2px; margin-top: 14px" viewBox="0 0 9 16" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">                    \x3c!-- Generator: Sketch 46.2 (44496) - https://www.bohemiancoding.com/sketch --\x3e            <title>Arrow Left #1 Icon</title>            <desc>Created with Sketch.</desc>        <defs></defs>        <g id="behavior-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="pause-movie" transform="translate(-571.000000, -831.000000)" fill="#fff">            <g id="Group" transform="translate(560.000000, 334.000000)">                <g transform="translate(-347.000000, -131.000000)" id="Playlist-"> <g transform="translate(294.000000, 582.000000)"> <g id="arrows" transform="translate(64.000000, 45.000000)">     <path d="M0.442954136,10.0615 C0.157627823,9.7775 0,9.4025 0,9.0005 C0,8.5995 0.157627823,8.2225 0.442954136,7.9405 L7.27582098,1.2925 C7.67088818,0.9025 8.30938063,0.9025 8.70444783,1.2925 C9.09851739,1.6835 9.09851739,2.3165 8.70444783,2.7065 L2.22774006,9.0005 L8.70444783,15.2945 C9.09851739,15.6845 9.09851739,16.3175 8.70444783,16.7085 C8.30938063,17.0995 7.67088818,17.0995 7.27582098,16.7085 L0.442954136,10.0615 L0.442954136,10.0615 L0.442954136,10.0615 Z" id="Arrow-Left-#1-Icon"></path> </g> </g> </g> </g> </g> </g> </svg>',style:{cursor:"pointer",width:"40px",height:"40px",position:"absolute",zIndex:1,left:"0px",top:"50%",transform:"translate(0%, -50%)",webkitTransform:"translate(0%, -50%)"}};var k=this.addLayoutElement(b),A=(b={id:"rightArrow",type:"div",parent:this.container,innerHTML:'<svg width="10px" height="16px" style="width: 10px; height: 16px; margin-left: 28px; margin-top: 14px" viewBox="0 0 10 16" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">                    \x3c!-- Generator: Sketch 46.2 (44496) - https://www.bohemiancoding.com/sketch --\x3e            <title>Arrow right #1 Icon</title>            <desc>Created with Sketch.</desc>        <defs></defs>        <g id="behavior-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="pause-movie" transform="translate(-1335.000000, -830.000000)" fill="#fff">            <g id="Group" transform="translate(560.000000, 334.000000)">                <g transform="translate(-347.000000, -131.000000)" id="Playlist-">                    <g transform="translate(294.000000, 582.000000)">                        <g id="arrows" transform="translate(64.000000, 45.000000)">                            <path d="M764.5,8.0005 C764.5,7.5995 764.657628,7.2225 764.942954,6.9405 L771.775821,0.2925 C772.170888,-0.0975 772.809381,-0.0975 773.204448,0.2925 C773.598517,0.6835 773.598517,1.3165 773.204448,1.7065 L766.72774,8.0005 L773.204448,14.2945 C773.598517,14.6845 773.598517,15.3175 773.204448,15.7085 C772.809381,16.0995 772.170888,16.0995 771.775821,15.7085 L764.942954,9.0615 C764.657628,8.7775 764.5,8.4025 764.5,8.0005 Z" id="Arrow-right-#1-Icon" transform="translate(769.000000, 8.000875) scale(-1, 1) translate(-769.000000, -8.000875) "></path>                        </g>                    </g>                </g>            </g>        </g>        </g>        </svg>',style:{cursor:"pointer",width:"40px",height:"40px",position:"absolute",zIndex:1,right:"0px",top:"50%",transform:"translate(0%, -50%)",webkitTransform:"translate(0%, -50%)"}},this.addLayoutElement(b));return function(e){for(var t in e){if("object"!=typeof e[t])return;e[t].childNodes&&(e[t].childNodes[0].style.pointerEvents="none"),e[t].innHTML=e[t].innerHTML,this.isDesktop?(e[t].addEventListener(f.evtType.mouseover,function(e){var t=e.currentTarget.innerHTML;t=t.replace(new RegExp('fill="#fff"',"g"),'fill="'+f.designColor+'"'),e.currentTarget.innerHTML=t}),e[t].addEventListener(f.evtType.mouseout,function(e){e.currentTarget.innerHTML=e.currentTarget.innHTML})):e[t].addEventListener(f.evtType.mouseup,function(e){var t=this,i=e.currentTarget.innerHTML;i=i.replace(new RegExp('fill="#fff"',"g"),'fill="'+f.designColor+'"'),e.currentTarget.innerHTML=i,this.targ=e.currentTarget,setTimeout(function(){t.targ.innerHTML=t.targ.innHTML},400)})}}([k,A]),this.eventWrapper=function(e,t){"papp"==f.config.clientInfo.browser&&f.preventDefault(e),f.config.adIsPlaying||t(e)},A.addEventListener(this.evtType.mousedown,function(e){f.eventWrapper(e,p)}),A.addEventListener(this.evtType.mouseup,function(e){f.eventWrapper(e,h)}),A.addEventListener(this.evtType.mouseleave,function(e){f.eventWrapper(e,h)}),k.addEventListener(this.evtType.mousedown,function(e){f.eventWrapper(e,p)}),k.addEventListener(this.evtType.mouseup,function(e){f.eventWrapper(e,h)}),k.addEventListener(this.evtType.mouseleave,function(e){f.eventWrapper(e,h)}),this}function PlaylistUnit(e,t,i,n){function o(e){l.isSelected||(l.header.style.fontWeight="bold",d.style.display="block")}function a(e){l.header.style.fontWeight="normal",d.style.display="none"}function s(e){l.isSelected||(l.clickPosX=e.clientX||e.changedTouches[0].clientX,l.clickPosY=e.clientY||e.changedTouches[0].clientY)}function r(e){l.isSelected||Math.sqrt(Math.pow((e.clientX||e.changedTouches[0].clientX)-l.clickPosX,2)+Math.pow((e.clientY||e.changedTouches[0].clientY)-l.clickPosY,2))<10&&t.trigger({type:"onSwitch",value:i})}var l=this;this.config=n,this.counter=i,this.isSelected=!1,this.fontFamilyName=this.config.playerTemplateData.fontFamilyName,this.fontFamilySize=this.config.playerTemplateData.fontFamilySize,this.isImgLoaded=!1;var c={id:"playlistUnitContainer",type:"div",parent:t.slider,style:{width:t.barUnitWidth+"px",height:t.barHeight+"px",position:"absolute",left:"0px",bottom:"0px",zIndex:1,backgroundColor:"black",overflow:"hidden",userSelect:"none",msUserSelect:"none",mozUserSelect:"none",webkitUserSelect:"none",pointerEvents:"none",cursor:"pointer"}};this.container=t.addLayoutElement(c);c={id:"playlistUnitHeader",type:"div",parent:this.container,style:{display:"none",width:t.barUnitWidth-20+"px",height:"27px",left:"9.5px",top:"9.5px",fontSize:"12px",position:"absolute",zIndex:100,pointerEvents:"none",color:"#FFF",fontFamily:this.fontFamilyName,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",userSelect:"none",msUserSelect:"none",mozUserSelect:"none",webkitUserSelect:"none"}};this.header=t.addLayoutElement(c),this.header.innerText=e.title;c={id:"playlistUnitPlayIcon",type:"div",parent:this.container,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="width:100%; height:100%;" viewBox="0 0 512 512"><path fill="#fff" d="M256 0C114.617 0 0 114.615 0 256s114.617 256 256 256 256-114.615 256-256S397.383 0 256 0zm88.48 269.57l-128 80a16.008 16.008 0 0 1-16.238.422A15.994 15.994 0 0 1 192 336V176c0-5.82 3.156-11.172 8.242-13.992a15.957 15.957 0 0 1 16.238.422l128 80c4.676 2.93 7.52 8.055 7.52 13.57s-2.844 10.641-7.52 13.57z"/></svg>',style:{display:"none",width:"20px",height:"20px",left:"9.5px",bottom:"9.5px",fontSize:"12px",position:"absolute",zIndex:100,pointerEvents:"none",color:"#FFF",fontFamily:this.fontFamilyName,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",userSelect:"none",msUserSelect:"none",mozUserSelect:"none",webkitUserSelect:"none"}};var d=t.addLayoutElement(c),p=(c={id:"playlistUnitNowPlaying",type:"div",parent:this.container,style:{width:"70px",textAlign:"center",textDecoration:"none",left:"50%",top:"50%",transform:"translate(-50%, -50%)",fontSize:"11px",display:"none",position:"absolute",lineHeight:"12px",letterSpacing:"0.11px",zIndex:100,pointerEvents:"none",color:"white",fontFamily:this.fontFamilyName,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",userSelect:"none",msUserSelect:"none",mozUserSelect:"none",webkitUserSelect:"none"}},t.addLayoutElement(c));p.innerHTML="NOW </br> PLAYING";c={id:"coverBox",type:"div",parent:this.container,style:{opacity:"0",width:t.barUnitWidth+"px",height:t.barHeight+"px",position:"absolute",left:"0px",bottom:"0px",zIndex:120,backgroundColor:"rgba(0,0,0,0.4",overflow:"hidden",userSelect:"none",msUserSelect:"none",mozUserSelect:"none",webkitUserSelect:"none",display:"block",pointerEvents:"none",cursor:"pointer"}};var h=t.addLayoutElement(c);return this.eventWrapper=function(e,i){t.preventDefault(e),l.config.adIsPlaying||i(e)},this.loadImg=function(){this.isImgLoaded=!0,this.img.src=e.bgImgThumb,this.img.alt=e.title},this.img=new Image,this.img.style.pointerEvents="none",this.img.style.margin="auto",this.img.style.display="flex",this.img.className="thubmsFixed",this.img.addEventListener("error",function(){l.isImgError?l.img.parentNode.removeChild(l.img):(l.isImgError=!0,imgSrc=t.config.absolutePath+"/content/video/splayer/assets/bigPlayBtn.jpg",l.img.src=decodeURI(imgSrc))}),this.container.appendChild(this.img),this.isHoverAll=!1,this.setIsHoverAll=function(e){this.isHoverAll=e,this.isSelected||(e?(this.header.style.display="block",SekindoUtils.animateTo(h.style,"opacity","1",.4,"easeIn")):(this.header.style.display="none",SekindoUtils.animateTo(h.style,"opacity","0",.6,"easeOut")))},this.setIsPlaying=function(e){e&&this.config.playerTemplateData.isShowPlaylistNowPlaying?(p.style.display="block",this.header.style.display="none",h.style.opacity="1",this.container.style.cursor="auto",d.style.display="none",this.isSelected=!0):(p.style.display="none",this.isHoverAll?(h.style.opacity="1",this.header.style.display="block"):(h.style.opacity="0",this.header.style.display="none"),this.container.style.cursor="pointer",this.isSelected=!1)},this.container.addEventListener(t.evtType.mouseenter,function(e){l.eventWrapper(e,o)}),this.container.addEventListener(t.evtType.mouseleave,function(e){l.eventWrapper(e,a)}),this.container.addEventListener(t.evtType.mousedown,function(e){l.eventWrapper(e,s)}),this.container.addEventListener(t.evtType.mouseup,function(e){l.eventWrapper(e,r)}),t.slider.appendChild(this.container),this}function FloatCloseUnitDesign(e){function t(e){i.flowCloseUnit&&("open"===e?(i.config.playerIframeDiv.style.overflow="visible",i.flowCloseUnit.closeContainer.style.display="block"):(i.config.playerIframeDiv.style.overflow="hidden",i.flowCloseUnit.closeContainer.style.display="none"))}let i=this,n={};this.config=e,this.isSlider="slider"===this.config.playerMode,this.isFloatingBar=this.config.isFloatingBar,this.eventType=this.config.isDesktop?{click:"click",mouseup:"mouseup"}:{click:"touchstart",mouseup:"touchend"},this.flowCloseUnit=null;let o='<svg width="100%" height="100%" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3.19336" width="20" height="20" rx="1" fill="#222222" fill-opacity="0.72"/><rect x="3.3" y="3.49336" width="19.4" height="19.4" rx="0.7" stroke="black" stroke-opacity="0.3" stroke-width="0.6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0424 17.1775C16.3175 17.449 16.7637 17.449 17.0389 17.1775C17.3141 16.906 17.3141 16.4657 17.0389 16.1942L14.0534 13.2485L17.0389 10.3027C17.3141 10.0312 17.3141 9.59096 17.0389 9.31944C16.7637 9.04791 16.3175 9.04791 16.0424 9.31944L13.0568 12.2652L9.95394 9.20365C9.67875 8.93212 9.23257 8.93212 8.95737 9.20365C8.68218 9.47517 8.68218 9.9154 8.95737 10.1869L12.0603 13.2485L8.95737 16.31C8.68218 16.5815 8.68218 17.0217 8.95737 17.2933C9.23257 17.5648 9.67875 17.5648 9.95394 17.2933L13.0568 14.2317L16.0424 17.1775Z" fill="white"/></svg>';this.config.bus.addCallBack("exposeHideCloseUnit",function(e){t(e.status)}),this.flowCloseBtnFs=i.config.bus.addCallBack("onFsChange",function(e){!e&&i.config.flowStatus?t("open"):t("close")}),i.flowBarVerticalPos=function(){if(!i.config.isFloatingBar||i.isSlider)return"top";var e=i.config.sliderDir.split("");return n.botTop="b"==e[0]?"bottom":"top","flipped"===i.config.flowHeaderPosVertical?"top"===n.botTop?"bottom":"top":"top"===n.botTop?"top":"bottom"}(),i.flowCloseUnit=new function(){const t=i.isSlider?null:function(){let e='<div style="pointer-events: auto; width: 60px;height: 60px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: -1;"></div><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="width:100%; height:100%; cursor: pointer" viewBox="0 0 768 768" enable-background="new 0 0 768 768" x="0px" y="0px" version="1.1" id="Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><circle fill="#backColor" opacity="circleOpacity" cx="384" cy="384" r="341"/><g><path fill="#lineColor" d="M655.5,112.5C582.9,39.9,486.6,0,384,0S185.1,39.9,112.5,112.5S0,281.4,0,384s39.9,198.9,112.5,271.5S281.4,768,384,768 s198.9-39.9,271.5-112.5S768,486.6,768,384S728.1,185.1,655.5,112.5z M624.6,624.6C560.3,689,474.8,724.4,384,724.4 S207.7,689,143.4,624.6C10.7,492,10.7,276,143.4,143.4C207.7,79,293.2,43.6,384,43.6S560.3,79,624.6,143.4 C757.3,276,757.3,492,624.6,624.6z" class="active-path" data-old_color="#A96D6D" data-original="#lineColor"/><path fill="#lineColor" d="M553.2,214.8c-8.6-8.6-22.3-8.6-30.9,0L384,353.1L245.7,214.8c-8.6-8.6-22.3-8.6-30.9,0c-8.6,8.6-8.6,22.3,0,30.9 L353.1,384L214.8,522.3c-8.6,8.6-8.6,22.3,0,30.9c4.2,4.2,9.9,6.5,15.4,6.5s11.2-2.1,15.4-6.5l138.3-138.3l138.3,138.3 c4.2,4.2,9.9,6.5,15.4,6.5c5.7,0,11.2-2.1,15.4-6.5c8.6-8.6,8.6-22.3,0-30.9L414.9,384l138.3-138.3 C561.8,237.1,561.8,223.4,553.2,214.8z"  class="active-path" data-old_color="#A96D6D" data-original="#lineColor"/></g></svg>',t=i.config.closeBtnTheme.lineColor?i.config.closeBtnTheme.lineColor:"#000000",n=i.config.closeBtnTheme.backColor?i.config.closeBtnTheme.backColor:"#FFFFFF",o=i.config.closeBtnTheme.opacity?i.config.closeBtnTheme.opacity:"0.25";return e=e.replace(/#lineColor/g,t),e=e.replace(/#backColor/g,n),e=e.replace("circleOpacity",o)}();this.closeContainer=document.createElement("div"),this.closeIcon=document.createElement("div"),this.closeContainer.id="closeContainer",this.closeIcon.id="closeIcon",this.closeIcon.innerHTML=i.isSlider?o:t,this.closeContainer.appendChild(this.closeIcon),this.closeIconHit=document.createElement("div"),this.closeIconHit.id="closeIconHit",this.closeIcon.appendChild(this.closeIconHit);const n=i.isSlider?function(e){return{sliderIconWidth:e?"20px":"15px",sliderIconHeight:e?"20px":"15px",sliderContainerHeight:e?"29px":"24px"}}(!e.isDesktop):null,a=i.isSlider?null:parseInt(i.config.playerTemplateData.closeBtnHeight),s=i.isSlider?null:parseInt(i.config.playerTemplateData.closeBtnWidth);i.isSlider?(this.closeContainer.style.display="none",this.closeContainer.style.height=n.sliderContainerHeight,this.closeContainer.style.width="100%",this.closeContainer.style.position="absolute",this.closeContainer.style.pointerEvents="none",this.closeContainer.style.zIndex="5",this.closeContainer.style.top="-"+n.sliderContainerHeight,this.closeIcon.style.height=n.sliderIconHeight,this.closeIcon.style.width=n.sliderIconWidth,this.closeIcon.style.position="relative",this.closeIcon.style.float=i.config.closeBtnPos,this.closeIconHit.style.height=n.sliderIconHeight,this.closeIconHit.style.width=n.sliderIconWidth,this.closeIconHit.style.pointerEvents="auto",this.closeIconHit.style.position="absolute",this.closeIconHit.style.top="0",this.closeIconHit.style.left="0",this.closeIconHit.style.cursor="pointer"):(this.closeContainer.style.display="none",this.closeContainer.style.height=a+5+"px",this.closeContainer.style.width="100%",this.closeContainer.style.position="absolute",this.closeContainer.style.pointerEvents="none",this.closeContainer.style.zIndex="5",this.closeIcon.style.height=a+"px",this.closeIcon.style.width=s+"px",this.closeIcon.style.position="relative",this.closeIcon.style.float=i.config.closeBtnPos,this.closeIconHit.style.height=a+"px",this.closeIconHit.style.width=s+"px",this.closeIconHit.style.pointerEvents="auto",this.closeIconHit.style.position="absolute",this.closeIconHit.style.top="0",this.closeIconHit.style.left="0",this.closeIconHit.style.cursor="pointer","top"===i.flowBarVerticalPos?this.closeContainer.style.top="-"+this.closeContainer.style.height:this.closeContainer.style.bottom="-"+this.closeContainer.style.height),i.config.mainPlayerDiv.insertAdjacentElement("afterbegin",this.closeContainer),this.closeIconHit.addEventListener(i.eventType.click,function(e){e.preventDefault(e),e.stopPropagation(),i.config.bus.triggerNote("onUserEvent",{
type:"onCloseBtnClick"}),i.config.bus.triggerNote("onUserEvent",{type:"onMute",value:1}),i.config.bus.triggerNote("onFlowClose"),i.isSlider&&(i.flowCloseUnit.closeContainer.style.display="none",setTimeout(()=>{i.config.sPlayer.destructPlayer()},1e3))})},(i.isFloatingBar||i.isSlider)&&("top"===i.flowBarVerticalPos?i.flowCloseUnit.closeContainer.style.borderRadius="5px 5px 0 0":i.flowCloseUnit.closeContainer.style.borderRadius="0 0 5px 5px",i.flowCloseUnit.closeContainer.style.pointerEvents="auto",i.isSlider?i.flowCloseUnit.closeContainer.style.backgroundColor="none":(i.flowCloseUnit.closeContainer.style.backgroundColor=SekindoUtils.convertHexToRgb(i.config.flowHeaderBackgroundColor,i.config.flowHeaderOpacity),i.flowCloseUnit.closeIcon.style.padding="2px 4px"),i.config.isCloseBtnText&&!i.isSlider&&(i.flowCloseUnit.closeText=document.createElement("div"),i.flowCloseUnit.closeText.id="closeText",i.flowCloseUnit.closeText.innerText="Close",i.flowCloseUnit.closeContainer.appendChild(i.flowCloseUnit.closeText),i.flowCloseUnit.closeText.style.height="16px",i.flowCloseUnit.closeText.style.float=i.config.closeBtnPos,i.flowCloseUnit.closeText.style.padding="2px 2px",i.flowCloseUnit.closeText.style.fontSize=parseInt(i.config.playerTemplateData.closeBtnWidth)+"px",i.flowCloseUnit.closeText.style.cursor="pointer",i.flowCloseUnit.closeText.style.pointerEvents="auto",i.flowCloseUnit.closeText.style.fontFamily=i.config.closeBtnTheme.fontFamily?i.config.closeBtnTheme.fontFamily:"inherit",i.flowCloseUnit.closeText.style.color=i.config.closeBtnTheme.flowHeaderFontColor?i.config.closeBtnTheme.flowHeaderFontColor:"inherit",i.config.allowFloatingShadow&&(i.flowCloseUnit.closeContainer.style.boxShadow="1px 1px 8px 2px rgba(0, 0, 0, 0.4)"),i.flowCloseUnit.closeText.addEventListener(i.eventType.click,function(e){e.preventDefault(),e.stopPropagation(),i.config.bus.triggerNote("onUserEvent",{type:"onCloseBtnClick"}),i.config.bus.triggerNote("onUserEvent",{type:"onMute",value:1}),i.config.bus.triggerNote("onFlowClose")})))}function SekindoSPlayer(e,t){var i=this;this.config=e,this.initEncodedContent(this.config.encodedPlayerContentKeys),this.config.sPlayer=this,this.uniqueID=t,this.config.uniqueID=t,this.config.isSendPixels=!1,this.adsManager=null,this.debugAgent=new SekindoDebugAgent(this.config),window.Sekindo&&window.Sekindo.LogRest&&(this.config.LogRest=window.Sekindo.LogRest),this.config.isMuted=0===parseInt(this.config.isAutoSound),this.config.isDesktop="desktop"===this.config.clientInfo.deviceType,this.config.adIsPlaying=!1,this.config.flowWidth=this.config.flowWidth||310,this.config.flowHeight=this.config.flowHeight||260,this.config.pixelDivTimeout=6e4,"desktop"==this.config.clientInfo.deviceType&&"safari"==this.config.clientInfo.browser&&(this.config.pixelDivTimeout=24e4),window.primisLog("[IIQ] - "+this.config.iiqConf.isAppCfg+" pcid: "+this.config.iiqConf.pCid+" pcidt: "+this.config.iiqConf.pCidt+" bundle: "+this.config.pubUrl),this.config.dummyBaseHref="https://amli.sekindo.com/",this.config.ampView=window.ampView=-1,this.config.prebidAdUnitCodes=[],this.config.nextContentIndex=0,this.config.currContentIndex=0,this.config.isIvtHiddenPixelFired=!1,this.config.isFirstViewablePreroll=!0,this.config.playerTemplateData.isLightBox=!(!this.config.playerTemplateData.isLightBox||"desktop"!=this.config.clientInfo.deviceType),this.config.flowZindex=this.config.playerTemplateData.isLightBox?2147483646:0,this.config.isAppsGeometry=!1,SekindoUtils.applyExternalRules(this.config,"config","init"),this.config.soundEnabledByUser=!this.config.isMuted,window.isAmpProject=this.config.isAmpProject,this.config.responsive=this.config.responsive&&"sticky"!=this.config.playerMode&&"slider"!=this.config.playerMode&&"inRead"!=this.config.playerMode&&"inUnit"!=this.config.playerMode,this.config.responsive&&this.config.rootWindow.primisAmpIframeApi&&(this.config.responsive=this.config.rootWindow.primisAmpIframeApi),this.config.flowSkinWrap=!("flow"!=this.config.playerMode&&"sticky"!=this.config.playerMode&&"snapIt"!==this.config.playerMode||!this.config.flowSkinWrap||!this.config.flowSkinWrap.length)&&this.config.flowSkinWrap,("inRead"==this.config.playerMode||"inUnit"==this.config.playerMode||"slider"==this.config.playerMode||this.config.verticalOrientation)&&(this.config.playerTemplateData.hasPlaylist=!1),"flow"!=this.config.playerMode&&"snapIt"!==this.config.playerMode||!(this.config.flowSkinWrap.length>10)||this.config.isAmpProject||window.top.sekindoFlowingPlayerOn||(window.parent.config=this.config),window["sekindoBus"+this.uniqueID]=new SekindoBus,this.config.bus=this.bus=window["sekindoBus"+this.uniqueID],new ConfigManager(this.config,this.bus),this.bus.setParam("main.gdprInfo",function(){return supportDetection.gdprInfo}),this.bus.setParam("main.services",function(){return SekindoServices}),this.bus.setParam("main.utils",function(){return SekindoUtils}),this.config.rootWindow.primisAmpIframeApi&&(this.bus.setParam("main.config",function(){return i.config}),new this.config.rootWindow.primisAmpIframeApi(this.bus)),this.config.utils=SekindoUtils,SekindoServices.orientationChecker(this.bus),this.config.enableFlowDrag=new SekindoServices.controlDragElements(this.config).enableFlowDrag,this.config.isApp&&("ios"==this.config.clientInfo.os&&SekindoUtils.overrideSetInterval(this.config.rootWindow),this.appSdkApi=new AppSdkApi(this.config),this.config.isAppSdk||(window.primisLog("[[OMID]] init OMID"),this.omid=new SekindoOmid(this.config)),this.config.isAppSdk||this.config.isAppsGeometry||(window.primisLog("[[MRAID]] init MRAID"),this.mraid=new SekindoMraid(this.config))),this.config.primisConsoleLog=function(e){-1!=i.config.pubUrl.indexOf("primisDbj")&&console.log("PRIMIS:"+e)},""!=this.config.debugInformation&&console.log("PRIMIS debugInformation = "+this.config.debugInformation),this.constructContainer()}SekindoVideoManager.prototype.generateVideoElement=function(){var e=this,t=this.config.videoIFrameDoc.createElement("video");"iosWrapper"==this.config.vidType&&(this.iosVidWrapper=new SekindoServices.iosVidAutoplayWrapper(t));try{t.playsInline=!0}catch(e){}if(t.muted=!0,t.setAttribute("crossorigin","anonymous"),"Facebook"!=this.config.clientInfo.extra.browser&&"app"!=this.config.clientInfo.browser&&"papp"!=this.config.clientInfo.browser||(t.controls=!1),this.config.isDesktop&&"safari"!=this.config.clientInfo.browser||(this.singleQualityPlayer=!0),this.reportCaptionsStatus=function(){if(t.textTracks[0]&&("disabled"==t.textTracks[0].mode&&(e.hasCptions=!0),e.hasCptions)){var i=e.config.isCaptionsOn?"showing":"hidden";i!=t.textTracks[0].mode?t.textTracks[0].mode=i:e.config.bus.triggerNote("onTextTracksChange","showing"==t.textTracks[0].mode?1:0)}},t.textTracks.addEventListener("change",function(){e.reportCaptionsStatus()}),("ios"===this.config.clientInfo.os||"macosx"===this.config.clientInfo.os&&"safari"===this.config.clientInfo.browser)&&t.textTracks.addEventListener("addtrack",function(){e.reportCaptionsStatus()}),this.updateCaptionsStatus=function(e){var i=e?"showing":"hidden";t.textTracks&&t.textTracks[0]&&t.textTracks[0].mode!=i&&(t.textTracks[0].mode=e?"showing":"hidden")},this.config.bus.addCallBack("requestUpdateCaptionsMode",function(t){e.updateCaptionsStatus(t)}),"ios"===this.config.clientInfo.os&&this.config.clientInfo.osVer>12){var i=!1,n=null,o=!1,a=0;t.addEventListener("pause",function(){clearTimeout(n),i=!0}),t.addEventListener("playing",function(){if(clearTimeout(n),o){o=!1;var s=1;e.hasCptions&&(s=1e3),setTimeout(function(){t.currentTime=Math.round(a)},s)}else i&&"m3u8"==SekindoUtils.getVidFileType(t.currentSrc)&&(a=t.currentTime,n=setTimeout(function(){if(t.currentTime<=a){var e=t.currentSrc;t.src=e,o=!0,t.play()}},1e3));i=!1})}return t},SekindoVideoManager.prototype.wrapVideoElement=function(){var e=this;this.videoElement.style.cssText=this.vidWrapper.style.cssText,this.vidWrapper.addEventListener=function(t,i){e.listenersArray.push({type:t,callback:i}),e.videoElement.addEventListener(t,i)},this.vidWrapper.removeEventListener=function(t,i){e.videoElement.removeEventListener(t,i)},this.vidWrapper.play=function(){var t=e.videoElement.play();if(window.primisLog("[[Video Manager]] play:"+t),t)try{t.then(function(e){window.primisLog("[[Video Manager]] then playing ok")}).catch(function(t){window.primisLog("[[Video Manager]] error:"+t.message),e.videoElement.muted?e.iosVidWrapper||"ios"!==e.config.clientInfo.os||"The operation was aborted."==t.message||(e.config.vidType="iosWrapper",e.iosVidWrapper=new SekindoServices.iosVidAutoplayWrapper(e.videoElement),e.vidWrapper.play()):(e.videoElement.muted=!0,e.vidWrapper.play())})}catch(e){}},this.vidWrapper.pause=function(){e.videoElement.pause()}},SekindoVideoManager.prototype.setVideoSrc=function(e,t){var i=this;for(this.config.isStreamingVideo=!(t.hlsUrl!=t.url);e.firstChild;)e.removeChild(e.firstChild);var n=e.textTracks;if(n)for(var o=0;o<n.length;o++){if((s=n[o])&&s.cues)for(;s.cues.length>0;)s.removeCue(s.cues[0])}if(this.quality&&!this.config.isStreamingVideo||"hlsJs"!=this.config.hls&&"native"!=this.config.hls||!t.hlsUrl||!t.hlsUrl.length){window.primisLog("[[Hls]] - Video type set to MP4. Reason: High Quality or no HLS url...");var a=t.url;if(this.quality&&-1!=a.indexOf("://"+this.config.videoDomain+"/uploads/")&&-1!=a.indexOf("/users/converted/")&&(a=a.replace("converted","origin")),e.src=a,t.captionsUrl&&t.captionsUrl.length){var s;(s=document.createElement("track")).kind="captions",s.label="English",s.srclang="en",s.type="text/webvtt",s.src=t.captionsUrl,s.addEventListener("load",function(){this.mode="disabled",e.textTracks[0].mode="disabled"}),e.appendChild(s),e.textTracks[0].mode="showing"}}else if("hlsJs"==this.config.hls)this.generateHlsSrcWrapper(e,t.hlsUrl,t.url);else{e.removeAttribute("src");for(var r=e.getElementsByTagName("source");r.length>0;)e.removeChild(r[0]);var l=document.createElement("source");l.src=t.hlsUrl,l.type="application/x-mpegURL",e.appendChild(l),(l=document.createElement("source")).src=t.url,l.type="video/mp4",e.appendChild(l),e.load(),window.primisLog("[[Hls]] - Video type set to HLS or MP4(Unknown...). Reason: Via native HLS/iOS")}if(this.hasCptions=!1,this.config.bus.triggerNote("onTextTracksChange",-1),"edge"==this.config.clientInfo.browser){clearInterval(c);var c=setInterval(function(){e.textTracks.length&&"disabled"==e.textTracks[0].mode&&(e.textTracks[0].mode=i.config.isCaptionsOn?"showing":"hidden",i.hasCptions=!0,clearInterval(c))},1e3);clearTimeout(d);var d=setTimeout(function(){clearInterval(c)},5e3)}},SekindoVideoManager.prototype.deleteHlsJs=function(){this.hlsJs.detachMedia(),this.hlsJs.destroy(),this.hlsJs.bufferTimer&&(clearInterval(this.hlsJs.bufferTimer),this.hlsJs.bufferTimer=void 0),delete this.hlsJs,this.hlsJs=null},SekindoVideoManager.prototype.removeNewVideoElement=function(){this.hlsJs&&this.hlsJs.media==this.newVideoElement&&this.deleteHlsJs(),this.newVideoElement.removeEventListener("timeupdate",this.syncPlayersTimeFunc),this.newVideoElement.pause(),this.newVideoElement.src="",this.newVideoElement.load(),this.vidWrapper.removeChild(this.newVideoElement),delete this.newVideoElement,this.newVideoElement=null},SekindoVideoManager.prototype.swapVideoElement=function(e){if(!this.singleQualityPlayer&&!this.config.isStreamingVideo&&this.quality!=e&&(this.quality=e,this.newVideoElement&&this.removeNewVideoElement(),this.runningQuality!=e&&this.vidSrc)){if(this.newVideoElement=this.generateVideoElement(),this.vidWrapper.appendChild(this.newVideoElement),this.quality){if(this.vidSrc.url.replace("converted","origin")==this.videoElement.src)return}this.vidWrapper.appendChild(this.newVideoElement),this.setVideoSrc(this.newVideoElement,this.vidSrc);var t=this.newVideoElement.play();if(t)try{t.then(function(){}).catch(function(e){})}catch(e){}this.newVideoElement.muted=!0;try{this.newVideoElement.currentTime=this.videoElement.currentTime+1}catch(e){}this.newVideoElement.addEventListener("timeupdate",this.syncPlayersTimeFunc)}},SekindoVideoManager.prototype.syncPlayersTime=function(){var e=this;if(this.newVideoElement){var t=this.videoElement.currentTime-this.newVideoElement.currentTime;if(Math.abs(t)>.5)try{this.newVideoElement.currentTime=this.videoElement.currentTime+t/2}catch(e){}else{this.newVideoElement.removeEventListener("timeupdate",this.syncPlayersTimeFunc);for(var i=0;i<this.listenersArray.length;i++){var n=this.listenersArray[i];this.videoElement.removeEventListener(n.type,n.callback)}this.videoElement.paused&&this.newVideoElement.pause(),this.newVideoElement.style.cssText=this.videoElement.style.cssText,this.newVideoElement.style.width="100%",this.newVideoElement.style.height="100%",this.newVideoElement.volume=this.videoElement.volume,this.newVideoElement.muted=this.videoElement.muted,setTimeout(function(){for(var t=0;t<e.listenersArray.length;t++){var i=e.listenersArray[t];e.videoElement.addEventListener(i.type,i.callback)}},1),this.videoElement.pause(),this.hlsJs&&this.hlsJs.media==this.videoElement&&this.deleteHlsJs(),this.vidWrapper.removeChild(this.videoElement),this.videoElement=this.newVideoElement,this.newVideoElement=null,this.wrapVideoElement(),this.runningQuality=this.quality}}},SekindoVideoManager.prototype.generateHlsSrcWrapper=function(e,t,i){var n=this;this.hlsJs&&this.deleteHlsJs();return this.hlsJs=new Hls({maxMaxBufferLength:30}),this.hlsJs.on(Hls.Events.ERROR,function(t,o){if(o.fatal)switch(o.type){case Hls.ErrorTypes.NETWORK_ERROR:n.hlsJs.startLoad();break;case Hls.ErrorTypes.MEDIA_ERROR:n.hlsJs.recoverMediaError()}switch(o.details){case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:n.deleteHlsJs(),e.src=i,e.play(),window.primisLog("[[Hls]] - Video type set to MP4. Reason: Fallback");o.response&&o.response.code+": "+o.response.text,SekindoUtils.firePixel(location.protocol+"//"+n.config.currentServerName+"/live/liveView.php?hlsFb=1&vp_content="+encodeURIComponent(i),n.config.pixelDiv,n.config)}}),this.hlsJs.attachMedia(e),this.hlsJs.loadSource(t),window.primisLog("[[Hls]] - Video type set to HLS. Reason: Via HLS.js"),this.hlsJs},SekindoVideoManager.prototype.defineVidWrapperProperties=function(){var e=this;Object.defineProperty(this.vidWrapper,"width",{get:function(){return e.videoElement.width},set:function(t){e.videoElement.width=t}}),Object.defineProperty(this.vidWrapper,"height",{get:function(){return e.videoElement.height},set:function(t){e.videoElement.height=t}}),Object.defineProperty(this.vidWrapper,"src",{get:function(){return e.vidSrc},set:function(t){e.newVideoElement&&e.removeNewVideoElement(),e.vidSrc=t,e.setVideoSrc(e.videoElement,t)}}),Object.defineProperty(this.vidWrapper,"networkState",{get:function(){return e.videoElement.networkState}}),Object.defineProperty(this.vidWrapper,"paused",{get:function(){return e.videoElement.paused}}),Object.defineProperty(this.vidWrapper,"muted",{get:function(){return e.videoElement.muted},set:function(t){e.videoElement.muted=t}}),Object.defineProperty(this.vidWrapper,"volume",{get:function(){return e.videoElement.volume},set:function(t){e.videoElement.volume=t}}),Object.defineProperty(this.vidWrapper,"currentTime",{get:function(){return e.videoElement.currentTime},set:function(t){e.videoElement.currentTime=t}}),Object.defineProperty(this.vidWrapper,"duration",{get:function(){return e.videoElement.duration}}),Object.defineProperty(this.vidWrapper,"buffered",{get:function(){return e.videoElement.buffered}}),Object.defineProperty(this.vidWrapper,"currentSrc",{get:function(){return e.videoElement.currentSrc}})},LayoutManager.prototype.buildElements=function(){this.videoDiv=this.createChild("div",this.config.videoIFrameDiv,null,null,"videoDiv"),this.videoDiv.style.width="100%",this.videoDiv.style.height="100%",this.videoDiv.style.background="black",this.videoDiv.id="videoContainerDiv",this.videoDiv.style.position="relative",this.videoDiv.style.zIndex=1,this.adDiv=this.createChild("div",this.config.videoIFrameDiv,null,null,"adDiv"),this.adDiv.style.width="auto",this.adDiv.style.height="auto",this.adDiv.style.position="absolute",this.adDiv.style.marginLeft="auto",this.adDiv.style.marginRight="auto",this.adDiv.style.marginTop="auto",this.adDiv.style.marginBottom="auto",this.adDiv.style.display="block",this.adDiv.style.zIndex=2,this.adDiv.style.top="0px",this.adDiv.style.left="0px",this.adDiv.style.cursor="pointer",this.adDiv.style.background="black",this.adDiv.id="adContainerDiv",this.adVpaid=this.createChild("div",this.adDiv,null,null,"adVpaid"),this.adVpaid.style.width="100%",this.adVpaid.style.height="100%",this.adVpaid.style.position="absolute",this.adVpaid.style.marginLeft="auto",this.adVpaid.style.marginRight="auto",this.adVpaid.style.marginTop="auto",this.adVpaid.style.marginBottom="auto",this.adVpaid.style.display="block",this.adVpaid.style.top="0px",this.adVpaid.style.left="0px",this.adVpaid.style.cursor="pointer",this.adVpaid.style.background="black",this.adVpaid.id="adVpaid",this.adIma=this.createChild("div",this.adDiv,null,null,"adIma"),this.adIma.style.width="100%",this.adIma.style.height="100%",this.adIma.style.position="absolute",this.adIma.style.marginLeft="auto",this.adIma.style.marginRight="auto",this.adIma.style.marginTop="auto",this.adIma.style.marginBottom="auto",this.adIma.style.display="block",this.adIma.style.top="0px",this.adIma.style.left="0px",this.adIma.style.cursor="pointer",this.adIma.style.background="black",this.adIma.id="adIma",this.layoutDiv=this.createChild("div",this.config.videoIFrameDiv,null,null,"layoutDiv"),this.layoutDiv.style.width="100%",this.layoutDiv.style.height="100%",this.layoutDiv.style.position="absolute",this.layoutDiv.style.display="inline-block",this.layoutDiv.style.zIndex=3,this.layoutDiv.style.top="0px",this.layoutDiv.style.left="0px",this.layoutDiv.style.pointerEvents="none",this.layoutDiv.id="layoutContainerDiv",this.adBreakDiv=this.createChild("div",this.config.videoIFrameDiv,null,null,"adBreakDiv"),this.adBreakDiv.style.width="100%",this.adBreakDiv.style.height="100%",this.adBreakDiv.style.position="absolute",this.adBreakDiv.style.display="none",this.adBreakDiv.style.zIndex=4,this.adBreakDiv.style.top="0px",this.adBreakDiv.style.left="0px",this.adBreakDiv.style.cursor="pointer",this.config.isUsePreloader&&(this.adBreakDiv.style.background="black");this.adBreakPreloader=this.createChild("div",this.adBreakDiv,null,null,"adBreakPreloader"),this.adBreakPreloader.style.width="58px",this.adBreakPreloader.style.height="58px",this.adBreakPreloader.style.top="50%",this.adBreakPreloader.style.left="50%",this.adBreakPreloader.style.fill="none",this.adBreakPreloader.style.stroke="white",this.adBreakPreloader.style.strokeWidth="4",this.adBreakPreloader.style.strokeDasharray="400",this.adBreakPreloader.style.strokeDashoffset="0",this.adBreakPreloader.style.position="absolute",this.adBreakPreloader.style.strokeDashoffset="0",this.adBreakPreloader.style.display="block",this.adBreakPreloader.style.transform="translate(-50%, -50%) rotate(0deg)",this.adBreakPreloader.innerHTML='<svg viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet"> <g> <circle r="45%" cx="50%" cy="50%" class="circle-back" /> </g></svg> '},LayoutManager.prototype.playerInterface=function(){var e=this;this.config.bus.addCallBack("addChild",function(t){e.addChilds(t)}),this.config.bus.addCallBack("removeChild",function(t){e.removeChilds(t)}),this.config.bus.addCallBack("onFSOrientationChange",function(){e.onFullscreenResize()}),this.config.bus.addCallBack("changeTitle",function(t){e.setHeaderTitle(t)}),this.config.bus.addCallBack("onVpaidEvent",function(t){e.onVideoEvent(t)}),this.config.bus.addCallBack("onVideoEvent",function(t){e.onVideoEvent(t)}),this.config.bus.addCallBack("contentEnded",function(t){e.onVideoEvent({type:"contentEnded",val:t})}),this.config.bus.addCallBack("onVideoProgress",function(t){e.onVideoEvent({type:"onVideoProgress",val:t})}),this.config.bus.addCallBack("adCompleted",function(t){e.onAdEvent(!1,t)}),this.config.bus.addCallBack("adStarted",function(t){e.onAdEvent(!0,t)}),this.config.bus.addCallBack("openContent",function(t){e.openContent(t.value,t.fileId)}),this.config.bus.addCallBack("playlistDataUpdated",function(t){e.layoutAPI({type:"playlistData",content:t})}),this.config.bus.addCallBack("hideTimeBar",function(t){e.layoutAPI({type:"hideTimeBar"})}),this.config.bus.addCallBack("setPreloader",function(t){e.setAdBreak(t)}),this.config.bus.addCallBack("bgCoverBtnsDisplay",function(t){e.layoutAPI({type:"bgCoverBtnsDisplay",content:t})}),this.config.bus.addCallBack("requestLayoutResize",function(t){e.playerResize(t||{})}),this.config.bus.addCallBack("onTextTracksChange",function(t){e.onTextTracksChanged(t)}),this.config.bus.addCallBack("onFlowClose",function(){e.intent("onMute",1)}),this.config.bus.addCallBack("hideAllLayout",function(t){e.hideAllLayout(t)}),this.config.bus.addCallBack("onFlowStatusChange",function(t){e.layoutAPI({type:"onFlowStatusChange",content:t})})},LayoutManager.prototype.setAdBreak=function(e){var t=this;if(e){if(this.config.isUsePreloader||this.layoutAPI({type:"hideLayout",content:null}),this.adBreakDiv.style.display="block",this.adBreakPreloader.style.display="block",!this.adBreakPreloaderInterval){var i=0;this.adBreakPreloaderInterval=setInterval(function(){i+=-1.5,t.adBreakPreloader.style.strokeDashoffset=i,t.adBreakPreloader.style.transform="translate(-50%, -50%) rotate("+-2*i+"deg)"},10)}}else this.adBreakDiv.style.display="none",this.adBreakPreloader.style.display="none",this.adBreakPreloaderInterval&&(clearInterval(this.adBreakPreloaderInterval),this.adBreakPreloaderInterval=null)},LayoutManager.prototype.layoutInterface=function(){var e=this;this.layoutNote=function(t){return e.onLayoutNote(t)},this.layout=this.createChild("div",this.layoutDiv,null,null,"layout"),this.layoutDesign=new LayoutDesign(this.layoutExtraData,this.layout,this.layoutNote),this.config.playerTemplateData.hasPlaylist&&(this.playlistDesign=new PlaylistDesign(this.config,this.layoutNote)),this.autoSkipContent=new AutoSkipContent(this),this.config.isDesktop&&this.buildClickLayerProtection(),this.layoutAPI=this.layoutDesign.api,(this.config.isCloseBtn&&("flow"===this.config.playerMode||"sticky"===this.config.playerMode||"snapIt"===this.config.playerMode)||"slider"===this.config.playerMode)&&(this.floatCloseUnitDesign=new FloatCloseUnitDesign(this.config))},LayoutManager.prototype.onLayoutNote=function(e){function t(e){i.config.bus.triggerNote("onUserEvent",{type:"onPlay"}),i.config.bus.triggerNote("userSwitchContent",e)}var i=this;switch(e.type){case"adIsPlaying":return this.config.adIsPlaying;case"clickUrl":return this.config.clkUrl;case"contentClickUrl":return this.config.contentClickUrl;case"shareUrl":return this.getShareUrl();case"viewability":return this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status;case"minLikesNum":return this.config.minLikesNum;case"getObj":return-1!=e.value.indexOf("config")?this.config[e.value.replace("config.","")]:this[e.value];case"onVideoLike":this.config.bus.triggerNote("onUserEvent",{type:"onVideoLike"}),this.intent("onVideoLike");break;case"onTimeScrabber":this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentScrubberPixel"}),this.config.bus.triggerNote("onUserEvent",{type:"timeScrabber",value:e.value}),this.intent("onTimeScrabber");break;case"onSkipProgress":this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentScrubberPixel"}),this.config.bus.triggerNote("onUserEvent",{type:"skipProgress",value:e.value}),this.intent("onSkipProgress");break;case"onVolumeScrabber":this.config.soundEnabledByUser=!0,this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentVolChangePixel"}),this.config.bus.triggerNote("onUserEvent",{type:"onVolumeScrabber",value:e.value}),this.intent("onVolumeScrabber");break;case"onMute":this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentVolChangePixel"}),this.config.bus.triggerNote("onUserEvent",{type:"onMute",value:e.value}),this.intent("onMute",e.value);break;case"onCloseBtnClick":break;case"onPause":this.requestPause();break;case"onPlay":this.requestPlay(!0);break;case"onNext":this.config.nextContentIndex=(this.config.currContentIndex+1)%this.config.contentPlayList.length||0,this.intent("onNext"),t("contentPlaylistClicksPixel");break;case"onPrimisNext":this.config.nextContentIndex=(this.config.currContentIndex+1)%this.config.contentPlayList.length||0,this.intent("onNext"),t("contentAutoSkipNextPixel");break;case"onAutoNext":this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentCompletePixel"}),this.config.nextContentIndex=(this.config.currContentIndex+1)%this.config.contentPlayList.length||0,this.intent("onAutoNext"),t();break;case"onBack":this.config.nextContentIndex=(this.config.currContentIndex+this.config.contentPlayList.length-1)%this.config.contentPlayList.length,this.intent("onBack"),t("contentPlaylistClicksPixel");break;case"onSwitch":this.intent("onSwitch"),this.config.nextContentIndex=e.value,t("contentPlaylistClicksPixel");break;case"onTitleClick":this.openContent(),this.intent("onTitleClick");break;case"onFullScreen":case"onNormalScreen":case"onLightboxClose":this.requestToggleFullscreen();break;case"onCaption":this.config.isCaptionsOn=e.value,this.config.bus.triggerNote("requestUpdateCaptionsMode",e.value),this.intent("onCaption");break;case"onTransparentCover":if(this.config.isDesktop)"click"==e.value.type&&(4==this.config.isAutoPlay||2==this.config.isAutoPlay?(i.config.bus.triggerNote("userClick","voidClick"),i.config.bus.triggerNote("onUserEvent",{type:"onPlay"})):this.onVoidClick());else if("touchstart"==e.value.type){"papp"==this.config.clientInfo.browser&&(e.value.preventDefault(),this.onMobileTouch(e.value),4!=this.config.isAutoPlay&&2!=this.config.isAutoPlay||(i.config.bus.triggerNote("userClick","voidClick"),i.config.bus.triggerNote("onUserEvent",{type:"onPlay"})));var n=e.value.clientX||e.value.touches[0].clientX,o=e.value.clientY||e.value.touches[0].clientY;i.mouseMovement={x:n,y:o}}else if("touchmove"==e.value.type){var a=((l=e.value).clientX||l.touches[0].clientX)-i.mouseMovement.x,s=(l.clientY||l.touches[0].clientY)-i.mouseMovement.y;if(Math.abs(a)<10&&Math.abs(s)<10)return;this.isScrolledInPlayer=!0}else if("touchend"==e.value.type){var r=this.isScrolledInPlayer;this.onMobileTouch(e.value),4!=this.config.isAutoPlay&&2!=this.config.isAutoPlay||r||(i.config.bus.triggerNote("userClick","voidClick"),i.config.bus.triggerNote("onUserEvent",{type:"onPlay"}))}break;case"onAdCover":if(!this.config.isDesktop)if("touchstart"==e.value.type){"papp"==this.config.clientInfo.browser&&(e.value.preventDefault(),this.onMobileTouch(e.value));n=e.value.clientX||e.value.touches[0].clientX,o=e.value.clientY||e.value.touches[0].clientY;i.mouseMovement={x:n,y:o}}else if("touchmove"==e.value.type){var l;a=((l=e.value).clientX||l.touches[0].clientX)-i.mouseMovement.x,s=(l.clientY||l.touches[0].clientY)-i.mouseMovement.y;if(Math.abs(a)<10&&Math.abs(s)<10)return;this.isScrolledInPlayer=!0}else"touchend"==e.value.type?this.onMobileTouch(e.value):"adOneClick"===e.value&&this.adOneClick();break;case"onRemoveAdBreak":this.setAdBreak(!1);break;case"onLayoutExposed":break;case"onSkipAd":this.config.bus.triggerNote("onUserEvent",{type:"skipAd"});break;case"doRemoveChild":this.removeChilds({destiny:e.value.destiny,visual:e.value.visual});break;case"doFlowDrag":"flow"!==this.config.playerMode&&"sticky"!==this.config.playerMode||"desktop"===this.config.clientInfo.deviceType||this.config.enableFlowDrag(e.value);break;case"onPrimis":var c="https://www.primis.tech?utm_source="+this.config.domain+"&utm_medium="+(this.config.nativeSkinType||"classic")+"&utm_campaign=logo";if(this.config.isAppSdk)this.config.bus.triggerNote("openUrl",[{id:"url",value:c}]);else{var d="papp"==this.config.clientInfo.browser?"_top":"_blank";window.open(c,d)}this.intent("onPrimis");break;case"onShareClick":var p=e.targetId,h="",u=this.headerTitle;void 0===u&&(u="Primis Video Discovery helped me find this video");var g=encodeURIComponent("'"+u+"'"),f=encodeURIComponent(this.getShareUrl()),m=encodeURIComponent(this.getThumbnail()),v="";switch(p){case"facebookBtn":h="https://www.facebook.com/sharer.php?u="+f;v="com.facebook.katana";break;case"twitterBtn":h="https://twitter.com/intent/tweet?url="+f+"&text="+g+"&via=Primis";v="com.twitter";break;case"linkedinBtn":h="https://www.linkedin.com/shareArticle?mini=true&url="+f+"&title="+g;v="com.linkedin";break;case"pinterestBtn":h="https://pinterest.com/pin/create/link/?url="+f+"&media="+m;v="com.pinterest";break;case"whatsappBtn":h="https://api.whatsapp.com/send?text="+encodeURIComponent(u+" "+this.getShareUrl()+" via @Primis");v="com.whatsapp";break;case"emailBtn":h="mailto:?subject="+g+"&body=Primis Video Discovery helped me find this video "+(this.headerTitle?g:"")+" "+f+" via @Primis"}if(configPlayer.isAppSdk)this.config.bus.triggerNote("onShareClick",{data:[{id:"url",value:h},{id:"package",value:v}]});else if(h.trim().length>0){null==window.open(h,"_blank")&&window.open(h,"_top")}this.intent("onShareClick");break;case"onAutoSkipStay":this.intent("onAutoSkipStay"),this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentAutoSkipStayPixel"});break;case"onVastIconView":case"onVastIconClick":SekindoUtils.firePixel(e.value.url,e.value.elem,i.config,!0);break;case"onVastIconError":SekindoUtils.postLogMessage(e.value,i.config)}},LayoutManager.prototype.getShareUrl=function(){var e=this,t="";if(this.config.clkUrl){if(t=this.config.clkUrl,this.config.contentPlayList[this.config.currContentIndex].shareUrl)this.config.contentPlayList[this.config.currContentIndex].shareUrl.replace(/[?&#]+([^=&]+)=([^&]*)/gi,function(i,n,o){n.toLowerCase()==e.config.sharedVideoParameterName&&(t+=-1!=t.indexOf("?")?"&":"?",t+=e.config.sharedVideoParameterName+"="+o)})}else this.config.contentPlayList[this.config.currContentIndex].shareUrl&&(t=this.config.contentPlayList[this.config.currContentIndex].shareUrl);return t},LayoutManager.prototype.getThumbnail=function(){var e="";return void 0!==this.config.contentPlayList[this.config.currContentIndex]&&this.config.contentPlayList[this.config.currContentIndex].bgImg&&(e=this.config.contentPlayList[this.config.currContentIndex].bgImg),e},LayoutManager.prototype.onVideoEvent=function(e){if(e.val&&("volumechange"==e.type||!(this.config.adIsPlaying&&"adsManager"!=e.val.player||!this.config.adIsPlaying&&"playlistManager"!=e.val.player)))switch(e.type){case"volumechange":this.layoutAPI({type:"volumeChange",content:e.val});break;case"play":this.layoutAPI({type:"play"}),clearTimeout(this.mouseOnTimeout),this.mouseIsOn=!1,this.layoutAPI({type:"hideLayout",content:null});break;case"playing":this.config.adIsPlaying&&this.dcAdCover&&this.dcAdCover.isLayerActive&&(this.dcAdCover.style.display="block"),this.layoutAPI({type:"playing",content:e.val}),this.config.isAdOneClick&&this.config.adIsPlaying&&!this.config.isDesktop&&this.onLayoutNote({type:"onAdCover",value:"adOneClick"}),this.config.adIsPlaying||this.layoutAPI({type:"bgCoverBtnsDisplay",content:!1});break;case"pause":this.layoutAPI({type:"pause"});break;case"onVideoProgress":this.autoSkipContent.checkTimeToDisplay(e.val.currTime),this.layoutAPI({type:"videoProgress",content:e.val});break;case"contentEnded":this.intent("contentEnded"),this.layoutAPI({type:"contentEnded"})}},LayoutManager.prototype.onAdEvent=function(e,t){4!=this.config.isAutoPlay&&2!=this.config.isAutoPlay||this.layoutAPI({type:"bgCoverBtnsDisplay",content:!1}),this.autoSkipContent.onAdEvent(e),this.layoutAPI({type:"adEvent",content:{adStarted:e,params:t}}),e?(this.adDiv.style.width="100%",this.adDiv.style.height="100%",this.mouseIsOn||this.layoutAPI({type:"hideLayout",content:null}),this.dcAdCover&&t.clickLayerProtection&&(this.dcAdCover.isLayerActive=!0,this.dcAdCover.style.display="block")):(this.adDiv.style.width="auto",this.adDiv.style.height="auto",this.dcAdCover&&(clearTimeout(this.dcAdTimeout),this.dcAdCover.style.display="none",this.dcAdCover.isLayerActive=!1))},LayoutManager.prototype.buildClickLayerProtection=function(){var e=this;this.dcAdCover=this.createChild("div",this.layoutDiv,null,null,"dcAdCover"),this.dcAdCover.isLayerActive=!1,this.dcAdCover.style.position="absolute",this.dcAdCover.style.top="0px",this.dcAdCover.style.left="0px",this.dcAdCover.style.zIndex="200",this.dcAdCover.style.cursor="pointer",this.dcAdCover.style.width="100%",this.dcAdCover.style.height="100%",this.dcAdCover.style.display="none",this.dcAdCover.style.visibility="visible",this.dcAdCover.style.pointerEvents="auto",this.dcAdCover.addEventListener("click",function(t){t.preventDefault(),
e.dcAdCover.style.display="none",e.dcAdTimeout=setTimeout(function(){e.bus.getParam("isContentPlaying")&&(e.dcAdCover.style.display="block")},2e3)})},LayoutManager.prototype.intent=function(e,t){function i(e){(!0===e&&!1===n.intentStatus||!1===e&&!0===n.intentStatus)&&(n.config.bus.triggerNote("onUserEvent",{type:"onMute",value:n.intentStatus}),n.intentStatus=e)}var n=this;switch("contentEnded"!==e&&"onAutoNext"!==e&&this.config.bus.triggerNote("userClick",e),e){case"onVolumeScrabber":this.bus.getParam("isContentPlaying")&&(this.autoSkipContent.hideAutoSkipContent(),i(!0));break;case"onMute":this.autoSkipContent.hideAutoSkipContent(),t?(this.config.soundEnabledByUser=!1,this.bus.getParam("isContentPlaying")&&i(!1)):(this.config.soundEnabledByUser=!0,this.bus.getParam("isContentPlaying")&&i(!0));break;case"onCloseBtnClick":case"onSkipAd":break;case"contentEnded":!this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status&&this.config.soundEnabledByUser&&(this.config.soundEnabledByUser=!1,this.config.bus.triggerNote("onUserEvent",{type:"onMute",value:!0}),i(!1)),this.autoSkipContent.hideAutoSkipContent(!0);break;case"fullscreenChange":SekindoServices.fullscreen.isFullscreen&&i(!0),this.autoSkipContent.hideAutoSkipContent();break;case"onPlay":i(!0);break;case"onAutoNext":this.autoSkipContent.hideAutoSkipContent(!0);break;case"onNext":case"onBack":case"onSwitch":this.autoSkipContent.hideAutoSkipContent(!0),i(!0);break;case"onVideoLike":case"onShareClick":case"onTimeScrabber":case"onSkipProgress":this.autoSkipContent.hideAutoSkipContent(),i(!0);break;case"onTitleClick":case"onCaption":case"onPrimis":case"onPause":case"onAutoSkipStay":this.autoSkipContent.hideAutoSkipContent()}},LayoutManager.prototype.hideAllLayout=function(e){this.layoutDiv.style.display=e?"none":"inline-block"},LayoutManager.prototype.calcPlayerSizes=function(e){var t=e&&e.responsive&&!this.config.flowStatus&&!this.config.snapItStatus,i=e&&e.width?e.width:this.config.flowStatus||this.config.snapItStatus?this.config.flowWidth:this.config.width,n=e&&e.height?e.height:this.config.flowStatus||this.config.snapItStatus?this.config.flowHeight:this.config.height;this.config.responsive&&e&&"onFullScreenOff"==e.reason&&!this.config.flowStatus&&!this.config.snapItStatus&&(n=1/0),t&&(n=15*i/4);var o=!!(this.config.playerTemplateData.isLightBox&&SekindoServices.fullscreen.isFullscreen&&!this.config.verticalOrientation&&this.config.allowFSPlaylist||this.config.playerTemplateData.hasPlaylist&&(!this.config.flowStatus&&!this.config.snapItStatus&&"preloadFlowWfs"!=e.source||this.config.flowPlaylist)&&!SekindoServices.fullscreen.isFullscreen),a={};a.responsive=t,a.WIDTH=i,a.HEIGHT=n,a.allowPlayList=o,a.verticalOrientation=this.config.verticalOrientation,a.minOptimalHeight=this.config.minOptimalHeight,a.isFullscreen=SekindoServices.fullscreen.isFullscreen;var s=this.layoutAPI({type:"calcPlayerSizes",content:a});return s.adVideoHeight=Math.ceil(this.config.verticalOrientation?9*s.videoWidth/16:s.videoHeight),s},LayoutManager.prototype.playerResize=function(e){var t=this;this.blockOnResize=!0,setTimeout(function(){t.blockOnResize=!1},20);var i=!(!e||"onFullScreenOn"!=e.reason&&!e.centeredVideo),n=!(!this.config.flowStatus&&!this.config.snapItStatus||SekindoServices.fullscreen.isFullscreen);window.primisLog("[[LayoutManager]] playerSizes0: "+JSON.stringify(e));var o=this.calcPlayerSizes(e);window.primisLog("[[LayoutManager]] playerSizes1: "+JSON.stringify(o)),e.playerSizes=o,e.flowing=n,this.layoutAPI({type:"layoutResize",content:e}),this.config.playerWidth=o.playerWidth,this.config.playerHeight=o.playerHeight,this.config.videoWidth=o.videoWidth,this.config.videoHeight=o.videoHeight,this.config.playlistUnitWidth=o.playlistUnitWidth,this.config.playlistHeight=o.playlistHeight,this.config.adVideoHeight=o.adVideoHeight,this.config.videoIFrameDiv.style.width=this.config.videoWidth+"px",this.config.videoIFrameDiv.style.height=this.config.videoHeight+"px",i?(this.config.mainPlayerDiv.style.top="50%",this.config.mainPlayerDiv.style.left="50%",this.config.mainPlayerDiv.style.position="absolute",this.config.mainPlayerDiv.style.transform="translate(-50%, -50%)"):(this.config.mainPlayerDiv.style.top="auto",this.config.mainPlayerDiv.style.left="auto",this.config.mainPlayerDiv.style.position="static",this.config.mainPlayerDiv.style.transform="none"),this.config.isAmpProject&&(this.config.containerDiv.style.position="absolute",this.config.containerDiv.style.top="0",this.config.containerDiv.style.left="0",this.config.containerDiv.style.bottom="0",this.config.containerDiv.style.right="0");var a,s;this.flowSkinDisplay&&(this.flowSkinDisplay(n),n&&(a=this.config.flowSkinWrapper.offsetWidth,s=this.config.flowSkinWrapper.offsetHeight)),SekindoServices.fullscreen.isFullscreen||(this.config.playerIframeDiv.style.width=((e?e.extFrameWidth:null)||a||this.config.playerWidth)+"px",this.config.playerIframeDiv.style.height=((e?e.extFrameHeight:null)||s||this.config.playerHeight)+"px",!0===this.config.iframeSizeImportant&&(this.config.playerIframeDiv.style.setProperty("width",this.config.playerIframeDiv.style.width,"important"),this.config.playerIframeDiv.style.setProperty("height",this.config.playerIframeDiv.style.height,"important"))),e.source&&SekindoUtils.applyExternalRules(this.config,"style",e.source),this.config.bus.triggerNote("onPlayerResize",o)},LayoutManager.prototype.flowSkinWrapper=function(e){var t=[],i=[];!function(e,n){function o(e,i,n){for(var r=e.childNodes,l=0;l<r.length;l++)r[l].id&&-1!=r[l].id.indexOf(i)?(a=n,s=r[l]):"SCRIPT"!=r[l].tagName&&r[l].style&&"none"!=r[l].style.display&&(t.push({obj:r[l],display:r[l].style.display}),o(r[l],i,++n))}var a=0,s=null;o(e,n,-1);for(var r=0;r<a;r++){var l=(s=s.parentNode).style.cssText;i.push({obj:s,style:l});var c=t.map(function(e){return e.obj}).indexOf(s);c>-1&&t.splice(c,1)}}(this.config.flowSkinWrapper,"Player-Div"),this.flowSkinDisplay=function(e){for(var n=0;n<t.length;n++){var o=t[n].obj;try{var a=e?t[n].display:"none";o.style.setProperty("display",a,"important")}catch(e){}}for(n=0;n<i.length-1;n++){o=i[n];try{o.obj.style.cssText=e?o.style:""}catch(e){}}}},LayoutManager.prototype.startRunning=function(){var e=this;if(this.doPreventDefault=function(t){if("papp"==e.config.clientInfo.browser)try{t.preventDefault()}catch(t){}},this.config.playerTemplateData.isLightBox&&this.config.playerIframeDiv.addEventListener("click",function(t){SekindoServices.fullscreen.isFullscreen&&t.target==t.currentTarget&&e.requestToggleFullscreen(t)}),this.config.flowSkinWrap&&this.flowSkinWrapper(this.config.playerIframeDiv),0!=this.config.forceWidth){var t={centeredVideo:!0,width:this.config.forceWidth,height:this.config.forceHeight,extFrameWidth:this.config.width,extFrameHeight:this.config.height};this.playerResize(t)}else this.config.responsive||"inRead"==this.config.playerMode||"inUnit"==this.config.playerMode||"slider"==this.config.playerMode||this.playerResize({});if(this.config.responsive){function i(t){if(!e.blockOnResize&&!e.config.flowStatus&&!SekindoServices.fullscreen.isFullscreen){e.config.width=e.config.videoWidth=t.width;t={reason:"onResizeObj",responsive:!0,width:t.width,height:t.height};e.playerResize(t)}}var n=this.config.containerDiv.parentNode;this.config.containerDiv.parentNode.parentNode.style.width="100%",this.config.containerDiv.parentNode.parentNode.style.height="100%",e.reziseChecker=new SekindoServices.resizeChecker(n,i,e.bus),this.config.bus.addCallBack("onFlowStatusChange",function(t){t||e.reziseChecker.checkResize(!0)}),this.config.onVisibilityChange.getCurrState||setTimeout(function(){e.reziseChecker.checkResize(!0)},3e3)}if(this.config.nativeSkinType||this.config.responsive)try{var o=this.config.containerDiv.closest(".PrimisResponsiveStyle");o&&(o.style.removeProperty("width"),o.style.removeProperty("height"))}catch(e){}if(this.config.isDesktop&&"slider"!=this.config.playerMode&&(this.exposeHoldersArray=e.layoutAPI({type:"fetchObj",content:"exposeHoldersArray"}),this.config.videoIFrameDiv.addEventListener("mouseleave",function(t){e.onExposeHideEvent(t)},!1),this.config.videoIFrameDiv.addEventListener("mousemove",function(t){e.onExposeHideEvent(t)},!1),this.config.videoIFrameDiv.addEventListener("mouseenter",function(t){e.onExposeHideEvent(t)},!1)),"slider"===this.config.playerMode){let e=this.config.flowWidth,t=e/16*9;this.playerResize({width:e,height:t,responsive:!1})}this.onExposeHideEvent=function(t){function i(){(e.bus.getParam("isContentPlaying")||e.config.adIsPlaying)&&(e.layoutAPI({type:"hideLayout",content:t}),e.config.bus.triggerNote("onExposeHideEvent",!1),e.rolledOverElm=null,e.mouseIsOn=!1)}(e.config.bus.getParam("isContentPlaying")||e.config.adIsPlaying)&&(e.rolledOverElm=t.target,"mouseleave"==t.type?i():e.mouseIsOn||(e.mouseIsOn=!0,e.layoutAPI({type:"exposeLayout",content:t}),e.config.bus.triggerNote("onExposeHideEvent",!0),clearTimeout(e.hideLayoutTimeout),e.hideLayoutTimeout=setTimeout(function(){if(e.mouseIsOn){for(var t=!0,n=0;n<e.exposeHoldersArray.length;n++)e.exposeHoldersArray[n]==e.rolledOverElm&&(t=!1);t&&e.bus.getParam("isContentPlaying")&&i(),e.rolledOverElm=null,e.mouseIsOn=!1}},3600)))},this.isScrolledInPlayer=!1,this.onMobileTouch=function(t){e.isScrolledInPlayer&&(this.isScrolledInPlayer=!1,!SekindoServices.isFullscreen)||(e.mouseIsOn||e.layoutAPI({type:"exposeLayout",content:t}),clearTimeout(e.mouseOnTimeout),e.mouseOnTimeout=setTimeout(function(){e.mouseIsOn=!0},10),clearTimeout(e.mobileShowLayoutTimeout),e.mobileShowLayoutTimeout=setTimeout(function(){e.mouseIsOn&&(clearTimeout(e.mouseOnTimeout),e.mouseIsOn=!1,e.layoutAPI({type:"hideLayout",content:t}))},2500),e.mouseIsOn&&e.onVoidClick())},this.adOneClick=function(){e.layoutAPI({type:"exposeLayout",content:null})},this.requestToggleFullscreen=function(t){t&&t.preventDefault&&t.preventDefault(),e.config.allowFullScreen&&(t&&t.fullscreenOnly&&SekindoServices.fullscreen.isFullscreen||(SekindoServices.fullscreen.toggle(),"macosx"!=e.config.clientInfo.os||SekindoServices.fullscreen.isFullscreen||this.onFullscreenResize(!0)))},this.openContent=function(t,i){var n=t||e.config.clkUrl||e.config.contentClickUrl;if(n=n.replace("${DOMAIN_MACRO}",e.config.domain),SekindoUtils.validURL(n)){if(e.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentClickPixel",fileId:e.config.bus.getParam("fileId")}),e.config.bus.triggerNote("APIvideoClickthrough"),this.config.isAppSdk)this.config.bus.triggerNote("openUrl",[{id:"url",value:n}]);else{var o=-1!=["_top","_blank"].indexOf(e.config.playerTemplateData.clickUrlTarget)?e.config.playerTemplateData.clickUrlTarget:"_top";setTimeout(function(){window.open(n,o)},100)}var a=e.config.reportClickUrl;a&&SekindoUtils.validURL(a)&&SekindoUtils.firePixel(a,e.config.pixelDiv,e.config)}},SekindoServices.fullscreen.onchange(function(t){e.config.fullScreenOn=SekindoServices.fullscreen.isFullscreen,e.config.bus.triggerNote("APIplayerModeChange",SekindoServices.fullscreen.isFullscreen?"fullscreen":"normal"),e.layoutAPI({type:"fullScreen"}),e.mouseIsOn=!1,e.layoutAPI({type:"hideLayout",content:null}),clearTimeout(e.fsTimeout),e.intent("fullscreenChange"),e.onFullscreenResize(),SekindoServices.fullscreen.isFullscreen?(e.mouseIsOn&&(e.config.videoIFrameDiv.style.cursor="none",setTimeout(function(){clearTimeout(e.mouseOnTimeout),e.mouseIsOn=!1,e.config.isDesktop||(e.layout.style.visibility="visible")},500)),-1!=e.reportFs&&(e.fsTimeout=setTimeout(function(){e.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentFullScreenPixel"})},e.reportFs)),"msRequestFullscreen"==SekindoServices.fullscreen.fs.requestFullscreen&&(e.config.playerIframeDiv.style.width="90%",e.config.playerIframeDiv.style.height="90%")):(clearTimeout(e.mouseOnTimeout),e.mouseIsOn=!1,e.config.isDesktop||(e.layout.style.visibility="visible")),e.config.bus.triggerNote("onFullScreen",{type:SekindoServices.fullscreen.isFullscreen}),e.reportFs=1}),this.onFullscreenResize=function(){e.blockOnResize=!0,setTimeout(function(){if(SekindoServices.fullscreen.isFullscreen)if(e.config.playerTemplateData.isLightBox)t=.65*e.config.playerIframeDiv.offsetWidth,i=.65*e.config.playerIframeDiv.offsetHeight;else if("msRequestFullscreen"==SekindoServices.fullscreen.fs.requestFullscreen)t=e.config.playerIframeDiv.offsetWidth,i=e.config.playerIframeDiv.offsetHeight;else if("requestFS"!=SekindoServices.fullscreen.fs.requestFullscreen&&screen&&screen.width)if("safari"==e.config.clientInfo.browser)t=Math.max(screen.width,e.config.rootWindow.innerWidth||1),i=Math.max(screen.height,e.config.rootWindow.innerWidth||1);else t=screen.width,i=screen.height;else{t=e.config.playerIframeDiv.offsetWidth,i=e.config.playerIframeDiv.offsetHeight}else var t=null,i=null;SekindoServices.fullscreen.isFullscreen&&!e.bus.getParam("isContentPlaying")&&e.config.bus.triggerNote("onUserEvent",{type:"onPlay"});var n="onFullScreen"+(SekindoServices.fullscreen.isFullscreen?"On":"Off"),o={reason:n,width:t,height:i,source:n};e.playerResize(o)},1)},this.onTextTracksChanged=function(t){e.layoutAPI({type:"captions",content:t})},this.onVoidClick=function(){function t(){e.bus.getParam("isContentPlaying")?e.requestPause(!0):e.requestPlay(!0)}switch(e.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentVoidClickPixel"}),e.config.voidClickAction){case"openLink":e.config.clkUrl&&0!==e.config.clkUrl.length||e.config.contentClickUrl&&0!==e.config.contentClickUrl.length?e.openContent():t();break;case"none":break;case"playPause":t();break;case"fullScreen":default:e.reportFs=-1,e.requestToggleFullscreen({fullscreenOnly:!0})}},this.setHeaderTitle=function(t){e.headerTitle=t,e.config.playerTemplateData.showTitle&&e.layoutAPI({type:"headerTitle",content:t})},this.requestPlay=function(e){this.config.intentInitiator="play",this.config.bus.triggerNote("onUserEvent",{type:"onPlay"}),this.intent("onPlay"),e||this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentPausePixel"})},this.requestPause=function(e){e||this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentPausePixel"}),this.config.bus.triggerNote("onUserEvent",{type:"onPause"}),this.intent("onPause")},this.layoutAPI({type:"bgCoverBtnsDisplay",content:4==this.config.isAutoPlay||0==this.config.isAutoPlay||2==this.config.isAutoPlay}),this.layoutAPI({type:"captions",content:-1})},LayoutManager.prototype.destruct=function(){this.mobileShowLayoutTimeout&&clearTimeout(this.mobileShowLayoutTimeout),this.touchTimeOut&&clearTimeout(this.touchTimeOut),this.config.playerTemplateData.hasPlaylist&&this.playlist.destruct()},AutoSkipContent.prototype.displayAutoSkipContent=function(){if(this.status!=this.STATUS_DISABLED){var e=this.SKIP_ANIMATION_DURATION_SEC;this.elapsedTime>0&&(e-=this.elapsedTime),this.elapsedTime=-1*(new Date).getTime(),this.status=this.STATUS_RUNNING,this.parent.layoutAPI({type:"displayAutoSkipContent",content:e})}},AutoSkipContent.prototype.hideAutoSkipContent=function(e){this.status!=this.STATUS_DISABLED&&(this.parent.layoutAPI({type:"hideAutoSkipContent",content:e}),e?(this.elapsedTime=0,this.status=this.STATUS_WAITING,this.currVideoTime=-1):this.status=this.STATUS_STAY)},AutoSkipContent.prototype.onAdEvent=function(e){this.status!=this.STATUS_DISABLED&&(e&&this.status==this.STATUS_RUNNING?(this.hideAutoSkipContent(),this.status=this.STATUS_PAUSED,this.elapsedTime=Math.ceil((this.elapsedTime+(new Date).getTime())/1e3)):e||this.status!=this.STATUS_PAUSED||this.displayAutoSkipContent())},AutoSkipContent.prototype.checkTimeToDisplay=function(e){var t=this.SKIP_CONTENT_AFTER_SEC;(-1!=this.currVideoTime||e<4)&&(this.currVideoTime=e),this.parent.config.isRealPrerollEnabled&&1==this.parent.config.isAutoPlay&&-1!=this.parent.config.cachedBids.searchBidId(null)&&(t-=10),this.status==this.STATUS_WAITING&&Math.floor(this.currVideoTime)>=t&&this.displayAutoSkipContent()},SekindoFlowManager.prototype.generateCapsule=function(e){this.capsulesStack[e]&&this.capsuleId!=e&&(this.capsuleId=e,this.currCapsule=new SekindoFlowCapsule(this.config,this.capsulesStack[e],this))},SekindoFlowManager.prototype.setCapsulesData=function(){(e={}).id="initiation",e.when=[{callbackID:"adsManagerInited",save:[{id:"adsManagerInited",val:!0},{id:"isAutoPlay",val:"config.isAutoPlay"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"playlistInited",save:{id:"playlistInited",val:!0}}],e.then=[{if:{and:[{id:"adsManagerInited",val:!0},{id:"playlistInited",val:!0},{id:"isRealPrerollEnabled",val:!0}]},do:[{func:"triggerNote",params:{callbackID:"loadNextContentBG",content:!0}}]},{if:{and:[{id:"adsManagerInited",val:!0},{id:"playlistInited",val:!0},{not:{id:"isAutoPlay",val:"0"}}]},do:[{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]},{if:{and:[{id:"adsManagerInited",val:!0},{id:"playlistInited",val:!0},{id:"isAutoPlay",val:"1"},{not:{id:"isRealPrerollEnabled",val:!0}}]},do:[{func:"triggerNote",params:{callbackID:"resumePlaylist",content:{forceSimulator:!1}}}]},{if:{and:[{id:"adsManagerInited",val:!0},{id:"playlistInited",val:!0},{id:"isAutoPlay",val:"1"}]},do:[{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"setPreloader",content:!0}},{func:"resetSaveObj"},{func:"nextCapsule",params:"syncAdsToPlaylist"}]},{if:{and:[{id:"adsManagerInited",val:!0},{id:"playlistInited",val:!0},{id:"isAutoPlay",val:"0"}]},do:[{func:"triggerNote",params:{callbackID:"loadNextContentBG",content:!0}},{func:"destructCurrCapsule"},{func:"resetSaveObj"},{func:"nextCapsule",params:"waitForUser"}]},{if:{and:[{id:"adsManagerInited",val:!0},{id:"playlistInited",val:!0},{id:"isAutoPlay",val:"2"}]},do:[{func:"triggerNote",params:{callbackID:"loadNextContentBG",content:!0}},{func:"destructCurrCapsule"},{func:"resetSaveObj"},{func:"triggerNote",params:{callbackID:"resumePlaylist",content:{forceSimulator:!0}}},{func:"nextCapsule",params:"simulateAndwaitForUserOrImpression"}]},{if:{and:[{id:"adsManagerInited",val:!0},{id:"playlistInited",val:!0},{id:"isAutoPlay",val:"3"}]},do:[{func:"triggerNote",params:{callbackID:"loadNextContentBG",content:!0}},{func:"destructCurrCapsule"},{func:"resetSaveObj"},{func:"triggerNote",params:{callbackID:"resumePlaylist",content:{forceSimulator:!0}}},{func:"nextCapsule",params:"simulatePlaylist"}]},{if:{and:[{id:"adsManagerInited",val:!0},{id:"playlistInited",val:!0},{id:"isAutoPlay",val:"4"}]},do:[{func:"triggerNote",params:{callbackID:"loadNextContentBG",content:!0}},{func:"destructCurrCapsule"},{func:"resetSaveObj"},{func:"triggerNote",params:{callbackID:"resumePlaylist",content:{forceSimulator:!0}}},{func:"nextCapsule",params:"simulateAndwaitForUserOrImpression"}]}],this.capsulesStack[e.id]=e;(e={}).id="syncAdsToPlaylist",e.when=[{callbackID:"adStarted",save:[{id:"callbackID",val:"adStarted"},{id:"adRunning",val:!0}]},{callbackID:"adCompletedNormal",save:[{id:"callbackID",val:"adCompletedNormal"},{id:"adRunning",val:!1},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"adCompletedNextAd",save:[{id:"callbackID",val:"adCompletedNextAd"},{id:"adRunning",val:!1},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"waterFallEmpty",save:[{id:"callbackID",val:"waterFallEmpty"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"contentEnded",save:[{id:"callbackID",val:"contentEnded"},{id:"contentEnded",val:!0}]},{callbackID:"userSwitchContent",save:[{id:"callbackID",val:"userSwitchContent"}]},{callbackID:"playlistEnded",save:[{id:"callbackID",val:"playlistEnded"},{id:"playlistEnded",val:!0}]},{callbackID:"onUserEvent",content:{type:"onPlay"},save:[{id:"callbackID",val:"onPlay"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"onUserEvent",content:{type:"onPause"},save:[{id:"callbackID",val:"onPause"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]}],e.then=[{if:{and:[{id:"adRunning",val:!0},{id:"callbackID",val:"onPlay"}]},do:[{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]},{if:{and:[{not:{id:"adRunning",val:!0}},{id:"callbackID",val:"onPlay"}]},do:[{func:"triggerNote",params:{callbackID:"resumePlaylist"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]},{if:{id:"callbackID",val:"onPause"},do:[{func:"triggerNote",params:{callbackID:"pausePlaylist"}},{func:"triggerNote",params:{callbackID:"pauseAdsSchedule",content:"pauseAd"}}]},{if:{id:"callbackID",val:"adStarted"},do:[{func:"triggerNote",params:{callbackID:"pausePlaylist"}}]},{if:{or:[{id:"callbackID",val:"adCompletedNormal"},{and:[{id:"callbackID",val:"waterFallEmpty"},{id:"isRealPrerollEnabled",val:!0},{not:{id:"adRunning",val:!0}}]}]},do:[{func:"triggerNote",params:{callbackID:"resumePlaylist"}}]},{if:{id:"callbackID",val:"adCompletedNextAd"},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!1}}]},{if:{id:"callbackID",val:"contentEnded"},do:[{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"pauseAdsSchedule"}},{func:"resetSaveObj"},{func:"nextCapsule",params:"onContentEnded"}]},{if:{id:"callbackID",val:"userSwitchContent"},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!0}},{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"pauseAdsSchedule"}},{func:"resetSaveObj"},{func:"nextCapsule",params:"onSwitchContent"}]},{if:{id:"callbackID",val:"playlistEnded"},do:[{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"pauseAdsSchedule"}},{func:"triggerNote",params:{callbackID:"loadNextContentBG",content:!0}},{func:"resetSaveObj"},{func:"nextCapsule",params:"waitForUser"}]}],this.capsulesStack[e.id]=e;(e={}).id="onSwitchContent",e.when=[{onInit:!0,save:[{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"},{id:"nextContentIndex",val:"config.nextContentIndex"},{id:"isInit",val:!0}]},{callbackID:"adCompletedNormal",save:[{id:"callbackID",val:"adCompletedNormal"},{id:"adRunning",val:!1},{id:"isInit",val:!1}]},{callbackID:"adCompletedNextAd",save:[{id:"callbackID",val:"adCompletedNextAd"},{id:"adRunning",val:!1},{id:"isInit",val:!1}]},{callbackID:"waterFallEmpty",save:[{id:"callbackID",val:"waterFallEmpty"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"},{id:"isInit",val:!1}]},{callbackID:"userSwitchContent",save:[{id:"callbackID",val:"userSwitchContent"},{id:"isInit",val:!1}]}],e.then=[{if:{and:[{id:"isRealPrerollEnabled",val:!1},{id:"isInit",val:!0}]},do:[{func:"triggerNote",params:{callbackID:"onSwitchContent"}},{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"resetAdsSchedule"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}},{func:"resetSaveObj"},{func:"nextCapsule",params:"syncAdsToPlaylist"}]},{if:{and:[{id:"isRealPrerollEnabled",val:!0},{id:"isInit",val:!0}]},do:[{func:"triggerNote",params:{callbackID:"loadSwitchedContentBG"}},{func:"triggerNote",params:{callbackID:"prepareNextContent"}},{func:"triggerNote",params:{callbackID:"resetAdsSchedule"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]},{if:{and:[{id:"isRealPrerollEnabled",val:!0},{or:[{id:"callbackID",val:"adCompletedNormal"},{id:"callbackID",val:"waterFallEmpty"}]}]},do:[{func:"triggerNote",params:{callbackID:"onSwitchContent"}},{func:"destructCurrCapsule"},{func:"resetSaveObj"},{func:"nextCapsule",params:"syncAdsToPlaylist"}]},{if:{id:"callbackID",val:"adCompletedNextAd"},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!1}}]},{if:{and:[{id:"callbackID",val:"userSwitchContent"},{id:"isRealPrerollEnabled",val:!0}]},do:[{func:"triggerNote",params:{callbackID:"loadSwitchedContentBG"}}]}],this.capsulesStack[e.id]=e;(e={}).id="onContentEnded",e.when=[{onInit:!0,save:[{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]}],e.then=[{if:{id:"isRealPrerollEnabled",val:!0},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!0}},{func:"triggerNote",params:{callbackID:"loadNextContentBG",content:!0}}]},{if:{not:{id:"isRealPrerollEnabled",val:!0}},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!0}},{func:"triggerNote",params:{callbackID:"resumePlaylist"}}]},{do:[{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"resetAdsSchedule"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}},{func:"resetSaveObj"},{func:"nextCapsule",params:"syncAdsToPlaylist"}]}],this.capsulesStack[e.id]=e;(e={}).id="waitForUser",e.when=[{callbackID:"onUserEvent",content:{type:"onPlay"},save:[{id:"callbackID",val:"onPlay"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]}],e.then=[{if:{not:{id:"isRealPrerollEnabled",val:!0}},do:[{func:"triggerNote",params:{callbackID:"resumePlaylist"}}]},{do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!0}},{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"setIsAutoPlay",content:1}},{func:"triggerNote",params:{callbackID:"resetAdsSchedule"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}},{func:"resetSaveObj"},{func:"nextCapsule",params:"syncAdsToPlaylist"}]}],this.capsulesStack[e.id]=e;(e={}).id="simulatePlaylist",e.when=[{callbackID:"adStarted",save:[{id:"callbackID",val:"adStarted"},{id:"adRunning",val:!0}]},{callbackID:"adCompletedNormal",save:[{id:"callbackID",val:"adCompletedNormal"},{id:"adRunning",val:!1}]},{callbackID:"waterFallEmpty",save:[{id:"callbackID",val:"waterFallEmpty"}]},{callbackID:"contentEnded",save:[{id:"callbackID",val:"contentEnded"},{id:"contentEnded",val:!0}]},{callbackID:"onUserEvent",content:{type:"onPlay"},save:[{id:"callbackID",val:"onPlay"}]},{callbackID:"onUserEvent",content:{type:"onPause"},save:[{id:"callbackID",val:"onPause"}]}],e.then=[{if:{and:[{id:"adRunning",val:!0},{id:"callbackID",val:"onPlay"}]},do:[{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]},{if:{and:[{not:{id:"adRunning",val:!0}},{id:"callbackID",val:"onPlay"}]},do:[{func:"triggerNote",params:{callbackID:"resumePlaylist",content:{forceSimulator:!0}}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]},{if:{id:"callbackID",val:"onPause"},do:[{func:"triggerNote",params:{callbackID:"pausePlaylist"}},{func:"triggerNote",params:{callbackID:"pauseAdsSchedule"}}]},{if:{id:"callbackID",val:"adStarted"},do:[{func:"triggerNote",params:{callbackID:"pausePlaylist",content:!0}}]},{if:{or:[{id:"callbackID",val:"adCompletedNormal"},{id:"callbackID",val:"waterFallEmpty"}]},do:[{func:"triggerNote",params:{callbackID:"resumePlaylist",content:{forceSimulator:!0}}}]},{if:{id:"callbackID",val:"contentEnded"},do:[{func:"triggerNote",params:{callbackID:"resetAdsSchedule"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]}],this.capsulesStack[e.id]=e;(e={}).id="simulateAndwaitForUser",e.when=[{callbackID:"onUserEvent",content:{type:"onPlay"},save:[{id:"callbackID",val:"onPlay"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"onUserEvent",content:{type:"onPause"},save:[{id:"callbackID",val:"onPause"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"adStarted",save:[{id:"callbackID",val:"adStarted"},{id:"adRunning",val:!0}]},{callbackID:"adCompletedNormal",save:[{id:"callbackID",val:"adCompletedNormal"},{id:"adRunning",val:!1}]},{callbackID:"waterFallEmpty",save:[{id:"callbackID",val:"waterFallEmpty"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"contentEnded",save:[{id:"callbackID",val:"contentEnded"},{id:"contentEnded",val:!0}]}],e.then=[{if:{id:"callbackID",val:"onPause"},do:[{func:"triggerNote",params:{callbackID:"pauseAdsSchedule"}}]},{if:{and:[{id:"adRunning",val:!0},{id:"callbackID",val:"onPlay"}]},do:[{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]},{if:{and:[{not:{id:"isRealPrerollEnabled",val:!0}},{not:{id:"adRunning",val:!0}},{id:"callbackID",val:"onPlay"}]},do:[{func:"triggerNote",params:{callbackID:"stopSimulator",content:!0}},{func:"triggerNote",params:{callbackID:"resumePlaylist",content:{forceSimulator:!1,userClick:!0}}}]},{if:{and:[{not:{id:"adRunning",val:!0}},{id:"callbackID",val:"onPlay"}]},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!0}},{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"stopSimulator",content:!0}},{func:"triggerNote",params:{callbackID:"resetAdsSchedule"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}},{func:"resetSaveObj"},{func:"nextCapsule",params:"syncAdsToPlaylist"}]},{if:{id:"callbackID",val:"adStarted"},do:[{func:"triggerNote",params:{callbackID:"pausePlaylist",content:!0}}]},{if:{or:[{id:"callbackID",val:"adCompletedNormal"},{and:[{id:"callbackID",val:"waterFallEmpty"},{id:"isRealPrerollEnabled",val:!0}]}]},do:[{func:"triggerNote",params:{callbackID:"resumePlaylist",content:{forceSimulator:!0}}}]},{if:{id:"callbackID",val:"contentEnded"},do:[{func:"triggerNote",params:{callbackID:"resetAdsSchedule"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]}],this.capsulesStack[e.id]=e;var e;(e={}).id="simulateAndwaitForUserOrImpression",e.when=[{callbackID:"onUserEvent",content:{type:"onPlay"},save:[{id:"callbackID",val:"onPlay"},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"onUserEvent",content:{type:"onPause"},save:[{id:"callbackID",val:"onPause"}]},{callbackID:"adStarted",save:[{id:"callbackID",val:"adStarted"},{id:"adRunning",val:!0}]},{callbackID:"adCompletedNormal",save:[{id:"callbackID",val:"adCompletedNormal"},{id:"adRunning",val:!1},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"adCompletedNextAd",save:[{id:"callbackID",val:"adCompletedNextAd"},{id:"adRunning",val:!1},{id:"isRealPrerollEnabled",val:"config.isRealPrerollEnabled"}]},{callbackID:"waterFallEmpty",save:[{id:"callbackID",val:"waterFallEmpty"}]}],e.then=[{if:{id:"callbackID",val:"onPause"},do:[{func:"triggerNote",params:{callbackID:"pauseAdsSchedule",content:"pauseAd"}}]},{if:{and:[{id:"adRunning",val:!0},{id:"callbackID",val:"onPlay"}]},do:[{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}}]},{if:{and:[{or:[{id:"callbackID",val:"adCompletedNormal"},{and:[{not:{id:"adRunning",val:!0}},{id:"callbackID",val:"onPlay"}]}]},{not:{id:"isRealPrerollEnabled",val:!0}}]},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!1}},{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"stopSimulator",content:!0}},{func:"triggerNote",params:{callbackID:"setIsAutoPlay",content:1}},{func:"triggerNote",params:{callbackID:"resetAdsSchedule"}},{func:"triggerNote",params:{callbackID:"resumePlaylist"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}},{func:"resetSaveObj"},{func:"nextCapsule",params:"onSwitchContent"}]},{if:{and:[{not:{id:"adRunning",val:!0}},{id:"callbackID",val:"onPlay"},{id:"isRealPrerollEnabled",val:!0}]},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!0}},{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"stopSimulator",content:!0}},{func:"triggerNote",params:{callbackID:"setIsAutoPlay",content:1}},{func:"triggerNote",params:{callbackID:"resetAdsSchedule"}},{func:"triggerNote",params:{callbackID:"resumeAdsSchedule"}},{func:"resetSaveObj"},{func:"nextCapsule",params:"syncAdsToPlaylist"}]},{if:{and:[{id:"callbackID",val:"adCompletedNormal"},{id:"isRealPrerollEnabled",val:!0}]},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!1}},{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"stopSimulator",content:!0}},{func:"triggerNote",params:{callbackID:"setIsAutoPlay",content:1}},{func:"triggerNote",params:{callbackID:"resumePlaylist"}},{func:"resetSaveObj"},{func:"nextCapsule",params:"syncAdsToPlaylist"}]},{if:{id:"callbackID",val:"adCompletedNextAd"},do:[{func:"triggerNote",params:{callbackID:"setPreloader",content:!0}},{func:"destructCurrCapsule"},{func:"triggerNote",params:{callbackID:"stopSimulator",content:!0}},{func:"triggerNote",params:{callbackID:"setIsAutoPlay",content:1}},{func:"resetSaveObj"},{func:"nextCapsule",params:"syncAdsToPlaylist"}]},{if:{id:"callbackID",val:"adStarted"},do:[{func:"triggerNote",params:{callbackID:"pausePlaylist",content:!0}}]},{if:{id:"callbackID",val:"waterFallEmpty"},do:[{func:"triggerNote",params:{callbackID:"resumePlaylist",content:{forceSimulator:!0}}}]}],this.capsulesStack[e.id]=e},SekindoFlowCapsule.prototype.save=function(e){var t=e.save;e.save.id&&(t=[e.save]);for(var i=0;i<t.length;i++){var n=t[i].val,o=t[i].id;if("callbackContent"==o&&(n=e.content),-1!=String(n).indexOf("config.")){var a=n.replace("config.","");n=this.config[a]}this.saveObj[o]=n}},SekindoFlowCapsule.prototype.then=function(){if(this.dataObj.then)for(var e=0;e<this.dataObj.then.length;e++)if(this.dataObj.then[e].if){if(this.dataObj.then[e].if.or){
var t=this.dataObj.then[e].if.or,i=this.saveObj;this.gateOr(t,i)&&this.do(this.dataObj.then[e].do)}else if(this.dataObj.then[e].if.and){t=this.dataObj.then[e].if.and,i=this.saveObj;this.gateAnd(t,i)&&this.do(this.dataObj.then[e].do)}else if(this.dataObj.then[e].if.not){t=this.dataObj.then[e].if.not,i=this.saveObj;this.gateNot(t,i)&&this.do(this.dataObj.then[e].do)}else if(this.dataObj.then[e].if){var n=this.dataObj.then[e].if;this.saveObj[n.id]==n.val&&this.do(this.dataObj.then[e].do)}}else this.do(this.dataObj.then[e].do)},SekindoFlowCapsule.prototype.do=function(e){for(var t=this,i=0;i<e.length;i++){var n=e[i];switch(n.func){case"triggerNote":this.config.primisConsoleLog("triggerNote="+JSON.stringify(n.params)),this.config.bus.triggerNote(n.params.callbackID,n.params.content);break;case"updateSaveObj":this.saveObj[n.params.id]=n.params.val;break;case"resetSaveObj":this.saveObj=[];break;case"nextCapsule":if(this.nextC)return;this.nextC=!0,window.primisLog("[[Flow Manager]] - Next Capsule: "+n.params),this.config.primisConsoleLog("nextCapsule="+n.params),setTimeout(function(){t.oner.generateCapsule(n.params)},1);break;case"destructCurrCapsule":this.destruct()}}},SekindoFlowCapsule.prototype.setCallbacks=function(){var e=this.dataObj.when;this.busItems=[];for(var t=0;t<e.length;t++)if(e[t].onInit)this.save(e[t]),this.then();else{var i=e[t].capsuleCallback=new FlowCapsuleCallback(e[t],this),n=this.config.bus.addCallBack(e[t].callbackID,i.execute);this.busItems.push(n)}},SekindoFlowCapsule.prototype.destruct=function(){for(var e=0;e<this.busItems.length;e++)this.config.bus.removeBusItm(this.busItems[e])},SekindoFlowCapsule.prototype.gateAnd=function(e,t){for(var i=!0,n=0;n<e.length;n++){var o=e[n];if(o.or){if(!this.gateOr(o.or,t)){i=!1;break}}else if(o.and){if(!this.gateAnd(o.and,t)){i=!1;break}}else if(o.not){if(!this.gateNot(o.not,t)){i=!1;break}}else if(t[o.id]!=o.val){i=!1;break}}return i},SekindoFlowCapsule.prototype.gateOr=function(e,t){for(var i=0;i<e.length;i++){var n=e[i];if(n.or){if(this.gateOr(n.or,t))return!0}else if(n.and){if(this.gateAnd(n.and,t))return!0}else if(n.not){if(this.gateNot(n.not,t))return!0}else if(t[n.id]==n.val)return!0}return!1},SekindoFlowCapsule.prototype.gateNot=function(e,t){var i=e;return i.or?!this.gateOr(i.or,t):i.and?!this.gateAnd(i.and,t):i.not?!this.gateNot(i.not,t):t[i.id]!=i.val},SekindoBus.prototype.callback=function(e){for(var t=0;t<this.callbacksArray.length;t++)if(e.callbackID==this.callbacksArray[t].callbackID&&e.callbackFunc==this.callbacksArray[t].callbackFunc)return;this.callbacksArray.push(e)},SekindoBus.prototype.trigger=function(e){for(var t=0;t<this.callbacksArray.length;t++){var i;if(e.callbackID==this.callbacksArray[t].callbackID)try{i=this.callbacksArray[t].callbackFunc(e.content)}catch(e){}}return i},SekindoBus.prototype.triggerNote=function(e,t){var i=new SekindoBusNote;return i.callbackID=e,i.content=t,this.trigger(i)},SekindoBus.prototype.addCallBack=function(e,t){var i=new SekindoBusItm;return i.callbackID=e,i.callbackFunc=t,this.callback(i),i},SekindoBus.prototype.removeCallBack=function(e,t){for(var i=0;i<this.callbacksArray.length;i++)e==this.callbacksArray[i].callbackID&&t==this.callbacksArray[i].callbackFunc&&this.callbacksArray.splice(i,1)},SekindoBus.prototype.removeBusItm=function(e){for(var t=0;t<this.callbacksArray.length;t++)e==this.callbacksArray[t]&&this.callbacksArray.splice(t,1)},SekindoAdsManager.prototype.setPrebidBaseConfig=function(){if(void 0!==window.SKpbjs){this.prebidUserIds=[{name:"id5Id",storage:{type:"html5",name:"id5id",expires:60,refreshInSeconds:50400},params:{partner:212,pd:this.config.id5encoded}},{name:"sharedId",params:{type:"cookie",name:"_pubcid",expires:60,refreshInSeconds:50400}},{name:"unifiedId",params:{partner:"j6w8ta9"},storage:{type:"cookie",name:"pbjs-unifiedid",expires:60,refreshInSeconds:50400}},{name:"uid2"},{name:"lotamePanoramaId"},{name:"identityLink",params:{pid:"34"},storage:{type:"html5",name:"idl-env",expires:15,refreshInSeconds:1800}}],this.prebidUserIds.push({name:"pubProvidedId",params:{eidsFunction:SekindoUtils.getEids}});var e={sekindoLiveServer:this.config.absoluteRtbPath,pageUrl:this.config.pubUrl,cache:{url:"https://prebid.adnxs.com/pbc/v1/cache"},userSync:{filterSettings:{iframe:{bidders:["appnexus"],filter:"exclude"}},syncDelay:1e3}};e.userSync.userIds=this.prebidUserIds,window.SKpbjs.setConfig(e)}},SekindoAdsManager.prototype.onPlayerResize=function(e,t){if(this.currAdUnit){var i=e.videoWidth||e.width,n=e.adVideoHeight||e.height;this.currAdUnit.videoElement&&(this.currAdUnit.videoElement.width=i+"px",this.currAdUnit.videoElement.height=n+"px"),this.currAdUnit.vpaidSlot&&(this.currAdUnit.vpaidSlot.style.width=i+"px",this.currAdUnit.vpaidSlot.style.height=n+"px"),this.currAdUnit.wrapper&&this.currAdUnit.wrapper.resizeAd(i,n,"normal")}this.config.responsive&&this.preloadWaterfalls(e),this.config.adsProcessPaused||t||this.config.adsProcessHalter.shouldHalt()||this.loadWaterfall()},SekindoAdsManager.prototype.setAdsSchedule=function(e){this.currAdSchedule=[],this.nextAd=null,this.isAdsScheduleSetInternally=e;var t=!1;for(var i in this.config.adsSchedule)if("pre_roll"==i&&1==this.config.adsSchedule[i])this.config.isDoublePreroll&&this.currAdSchedule.unshift({format:"pre_roll",val:1}),this.currAdSchedule.unshift({format:"pre_roll",val:0});else if("mid_roll"==i)for(var n=this.config.adsSchedule[i],o=0;o<n.length;o++)this.currAdSchedule.push({format:"mid_roll",val:n[o]});else"gap"==i&&(t={format:"gap",val:this.config.adsSchedule[i]});t&&this.currAdSchedule.push(t)},SekindoAdsManager.prototype.pauseAdsSchedule=function(e){if(this.config.adsProcessPaused=!0,this.currAdUnit)if(e&&"skipAd"==e)this.stopAd();else if(this.currAdUnit.wrapper)if(e&&"pauseAd"==e)try{this.currAdUnit.wrapper.pauseAd()}catch(e){}else{try{this.currAdUnit.wrapper.skipAd()}catch(e){}try{this.currAdUnit.wrapper.stopAd()}catch(e){}}else this.currAdUnit.videoElement&&!this.currAdUnit.videoElement.paused&&this.currAdUnit.videoElement.pause()},SekindoAdsManager.prototype.resumeAdsSchedule=function(e){this.config.blockAdRequests||(this.config.adsProcessPaused=!1),this.executeAdsSchedule()},SekindoAdsManager.prototype.setIsAutoPlay=function(e){this.handleC2PWaitTime(!1),this.config.isAutoPlay=e},SekindoAdsManager.prototype.resetAdsSchedule=function(e){this.setAdsSchedule(!1)},SekindoAdsManager.prototype.calcViewableImpGapTimeDiff=function(){var e=0,t=this.config.adsSchedule.gap.impGap;if(this.config.isLastImpSkipped&&"inRead"!=this.config.playerMode&&"inUnit"!=this.config.playerMode&&(t=60),this.config.lastImpViewableCompleteTime>0){var i=new Date;e=Math.max(0,this.config.lastImpViewableCompleteTime+1e3*t-i.getTime()),0==(e/=1e3)&&(this.config.lastImpViewableCompleteTime=0)}return e},SekindoAdsManager.prototype.executeAdsSchedule=function(){function e(){t.newAdsProgram&&t.newAdsProgram.length||t.currWaterfall?t.generateProcessor():t.loadWaterfall()}var t=this;new Date;if(this.timeOutObj&&clearTimeout(this.timeOutObj),!this.config.adsProcessPaused&&!this.config.adsProcessHalter.shouldHalt())if(this.config.pixelDivConstructor&&this.config.pixelDivConstructor.reConstructPixelDiv(),this.currWaterfall){if(!this.config.adIsPlaying&&!(this.currAdSchedule.length<=0||this.nextAd&&this.nextAd==this.currAdSchedule[0]&&"gap"!=this.nextAd.format)){this.nextAd=this.currAdSchedule[0];var i=this.calcViewableImpGapTimeDiff();if("pre_roll"===this.nextAd.format){var n="skip",o=0==this.nextAd.val;o?this.currWaterfall.settings.viewable?this.isAdsScheduleSetInternally?n=this.isImmediateViewablePreroll?"immediately":this.config.isFirstViewablePreroll?"impGap":"skip":this.config.isRealPrerollEnabled?(n="immediately",this.isImmediateViewablePreroll=!0):n="impGap":n="impGap":(n=this.currWaterfall.settings.viewable&&this.canRequset2ndPreroll?"immediately":"skip",this.canRequset2ndPreroll=!1),this.config.primisConsoleLog("executeAdsSchedule is1stPreroll="+o+" VV="+this.currWaterfall.settings.viewable+" decision="+n),this.currAdSchedule.shift(),"skip"===n?this.executeAdsSchedule():"impGap"===n?0==i?e():this.executeAdsSchedule():"immediately"===n&&e()}else if("mid_roll"===this.nextAd.format)if(this.contentVidCurrTime<=this.nextAd.val)var a=this.config.bus.addCallBack("onVideoProgress",function(i){!function(i){i.currTime>=t.nextAd.val&&(t.config.bus.removeBusItm(a),t.currAdSchedule.shift(),e())}(i)});else this.currAdSchedule.shift(),this.executeAdsSchedule();else if("gap"===this.nextAd.format){var s;if(this.config.isRealPrerollEnabled&&this.currWaterfall.settings.viewable&&1==this.config.isAutoPlay)return s=this.calcDynamicGapTime(20,15),this.config.primisConsoleLog("executeAdsSchedule GAP cache="+s),void(this.timeOutObj=setTimeout(function(){t.timeOutObj=null,e()},1e3*s));i>0?(s=i,this.currWaterfall.settings.viewable||(s=Math.min(s,5))):this.config.hadImpression?s=2:(s=this.currWaterfall.settings.viewable?this.nextAd.val.attGap||(this.waterfallGap?this.waterfallGap.attGap:15):this.waterfallGap?this.waterfallGap.attGap:15,this.currWaterfall.settings.viewable&&(s=this.calcDynamicGapTime(s,30))),this.config.primisConsoleLog("executeAdsSchedule gapTime="+s+" VV="+this.currWaterfall.settings.viewable),this.timeOutObj=setTimeout(function(){t.timeOutObj=null,e()},1e3*s)}}}else this.loadWaterfall()},SekindoAdsManager.prototype.calcDynamicGapTime=function(e,t){var i=new Date,n=(i.getTime()-this.epochTImestamp)/1e3/t,o=e/2+Math.round(n);if(o<e&&(e=o),0!=this.attemptGapTimestamp){(e-=(i.getTime()-this.attemptGapTimestamp)/1e3)<0&&(e=0),e=Math.round(1e3*e)/1e3}else this.attemptGapTimestamp=i.getTime();return e},SekindoAdsManager.prototype.preloadWaterfalls=function(e){if(!this.preloadedWaterfall){this.preloadedWaterfall=!0;var t={width:e?e.videoWidth||e.width:this.config.videoWidth||this.config.width,height:e?e.adVideoHeight||e.height:this.config.adVideoHeight||this.config.height,viewable:!0,dynamicPlacementMethod:this.dynamicBidValues.placementMap.instream,requestOnly:!0};if("sticky"!=this.config.playerMode&&(this.loadWaterfall(t),t.viewable=!1,this.loadWaterfall(t),this.config.isInstream||(t.dynamicPlacementMethod=this.dynamicBidValues.placementMap.outstream,this.loadWaterfall(t),t.viewable=!0,this.loadWaterfall(t)),t.viewable=!0),this.bus.getParam("isAmpIframe")||"flow"==this.config.playerMode||"sticky"==this.config.playerMode||"snapIt"===this.config.playerMode){var i=this.config.calcPlayerSizes({source:"preloadFlowWfs",width:this.config.flowWidth,height:this.config.flowHeight});if(t.width==i.videoWidth&&t.height==i.adVideoHeight)return;t.width=i.videoWidth,t.height=i.adVideoHeight,this.config.isInstream||(t.dynamicPlacementMethod=this.dynamicBidValues.placementMap.outstream,this.loadWaterfall(t)),t.dynamicPlacementMethod=this.dynamicBidValues.placementMap.instream,this.loadWaterfall(t)}}},SekindoAdsManager.prototype.loadWaterfall=function(e){function t(e,t){for(var i in e)if("requestOnly"!=i&&void 0!==t[i]&&e[i]!=t[i])return!1;return!0}var i=this,n=this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status,o=this.bus.getParam("isAmpFlowMode")?this.config.flowWidth:this.config.videoWidth||this.config.width,a=this.bus.getParam("isAmpFlowMode")?Math.ceil(9*this.config.flowWidth/16):this.config.adVideoHeight||this.config.height,s=this.config.bus.getParam("placementDynamicValue");if(e&&e.requestOnly)var r=SekindoUtils.merge2Objs({},e);else r={width:o,height:a,viewable:n,dynamicPlacementMethod:s,requestOnly:!1};if(e&&e.requestOnly&&e.viewable==n&&e.width==o&&e.height==a&&e.dynamicPlacementMethod==s&&(r.requestOnly=!1),this.currWaterfall&&t(this.currWaterfall.settings,r))return window.primisLog("[Ads Manager][Waterfall loaded] - same as current wf: {width:"+r.width+", height:"+r.height+", viewable:"+r.viewable+", dynamicPlacementMethod:"+r.dynamicPlacementMethod+"}"),this.currWaterfall.settings.requestOnly=!1,void(!this.currWaterfall.adsProgram.length&&this.currWaterfall.adsProgramLoaded&&(setTimeout(function(){i.config.bus.triggerNote("waterFallEmpty")},10),this.config.primisConsoleLog("loadWaterfall - length=0")));for(var l=0;l<this.waterfallArray.length;l++)if(t(this.waterfallArray[l].settings,r))return window.primisLog("[[Ads Manager]][[Waterfall loaded]] - same as previous wf: {width:"+r.width+", height:"+r.height+", viewable:"+r.viewable+", dynamicPlacementMethod:"+r.dynamicPlacementMethod+"}"),this.currWaterfall=this.waterfallArray[l],this.currWaterfall.settings.requestOnly=!1,void(this.currWaterfall.adsProgramLoaded&&(this.newAdsProgram=this.currWaterfall.adsProgram,this.waterfallGap=this.currWaterfall.waterfallGap,this.setAdsSchedule(!0),this.executeAdsSchedule()));if(r.requestOnly){var c=new SekindoWaterfallLoader(this.config,r);this.waterfallArray.push(c)}else if(!this.config.adsProcessPaused&&!this.config.adsProcessHalter.shouldHalt()){window.primisLog("[[Ads Manager]][[Waterfall loaded]] - new wf: {width:"+r.width+", height:"+r.height+", viewable:"+r.viewable+", dynamicPlacementMethod:"+r.dynamicPlacementMethod+"}");c=new SekindoWaterfallLoader(this.config,r);this.waterfallArray.push(c),this.currWaterfall=c}},SekindoAdsManager.prototype.stopAd=function(e){this.config.adsProcessPaused=!0,this.currAdUnit&&this.currAdUnit.stopAd(e)},SekindoAdsManager.prototype.initPixels=function(){this.config.isSendPixels||(this.config.isSendPixels=void 0!==window.SKpbjs&&"bot"!=this.config.clientInfo.deviceType),this.config.isSendPixels&&(this.config.playerImp&&(SekindoUtils.firePixel(this.config.playerImp,this.config.pixelDiv,this.config),this.config.playerImp=""),this.config.gdprIsRequired&&""!=this.config.gdprInfo.getConsentString()&&this.config.gdprImpPixel&&(SekindoUtils.firePixel(this.config.gdprImpPixel,this.config.pixelDiv,this.config),this.config.gdprImpPixel=""),!this.config.verificationAndSyncPixels||this.config.gdprIsRequired&&""==this.config.gdprInfo.getConsentString()||this.config.ccpaIsRequired&&this.config.ccpaInfo.isRejected||(SekindoUtils.verificationAndSyncPixels(this.config.verificationAndSyncPixels,this.config.pixelDiv,this.config),this.config.verificationAndSyncPixels=""))},SekindoAdsManager.prototype.generateProcessor=function(){var e=this;if(window.primisLog("[[Ads Manager]]- Generate Processor"),this.initPixels(),(this.currWaterfall.settings.viewable||!this.config.blockAdRequestsNV&&"inRead"!=this.config.playerMode)&&!this.config.adsProcessPaused&&!this.config.adsProcessHalter.shouldHalt()){if(this.currProcessor&&("processing"==this.currProcessor.status||"started"==this.currProcessor.status)){var t=Math.round(((new Date).getTime()-this.currProcessor.initTimestamp)/1e3);return this.config.primisConsoleLog("regenerateOnFail status="+this.currProcessor.status+" VV="+this.currWaterfall.settings.viewable+" timeDiff="+t),void(this.currProcessor.regenerateOnFail=!0)}if("ok"==SekindoUtils.isIvtHidden(this.config.mainVideoDiv,this.config.rootWindow,this.config.clientInfo,this.config.isAmpProject||this.config.bus.getParam("isAmpIframe"))||this.config.clsActive||!this.config.isIvtHiddenPixelFired&&this.config.ivtHiddenPixel&&setTimeout(function(){var t=SekindoUtils.isIvtHidden(e.config.mainVideoDiv,e.config.rootWindow,e.config.clientInfo,e.config.isAmpProject||e.config.bus.getParam("isAmpIframe"));if("ok"!=t&&!e.config.isIvtHiddenPixelFired){e.config.isIvtHiddenPixelFired=!0;var i=e.config.ivtHiddenPixel+"&ivtReason="+t;SekindoUtils.firePixel(i,e.config.pixelDiv,e.config)}},3e3),this.config.primisConsoleLog("lounching VV="+this.currWaterfall.settings.viewable),this.config.hadImpression=!1,this.config.isLastImpSkipped=!1,this.isImmediateViewablePreroll=!1,this.currWaterfall.settings.viewable&&(this.attemptGapTimestamp=0,"pre_roll"==this.nextAd.format&&(this.config.isFirstViewablePreroll=!1)),!this.newAdsProgram||!this.newAdsProgram.length)return this.config.isRealPrerollEnabled&&"pre_roll"===this.nextAd.format&&setTimeout(function(){e.config.bus.triggerNote("waterFallEmpty")},5),void this.executeAdsSchedule();if(this.isTriggerAdCompletedNormal=!0,clearTimeout(this.destructOnFailTimeout),this.destructOnFailTimeout=null,this.config.isRealPrerollEnabled&&"pre_roll"==this.nextAd.format&&this.currWaterfall.settings.viewable){this.destructOnFailTimeout=setTimeout(this.destructProcessorOnFail,8e3),this.config.isDoublePreroll&&0==this.nextAd.val&&(this.isTriggerAdCompletedNormal=!1)}this.isCacheBidsOnly=!1,this.config.isRealPrerollEnabled&&1==this.config.isAutoPlay&&"gap"==this.nextAd.format&&this.currWaterfall.settings.viewable&&(this.isCacheBidsOnly=!0);var i=this.nextAd.format;(this.config.isRealPrerollEnabled||4==this.config.isAutoPlay||2==this.config.isAutoPlay)&&(i="pre_roll");var n={waterfall:this.newAdsProgram,scheduleAdFormat:i};window.primisLog("[[Ads Manager]] Generating New Processor"),this.config.primisConsoleLog("SekindoWaterfallLinearProcessor VV="+this.currWaterfall.settings.viewable),this.currProcessor=new SekindoWaterfallLinearProcessor(this.config,n,this)}},SekindoAdsManager.prototype.buildIma=function(){var e=this;!function(){var t=e.config.videoWidth||e.config.width,i=e.config.adVideoHeight||e.config.height;e.imaSlot=e.config.videoIFrameDoc.createElement("div"),e.imaSlot.style.width=t+"px",e.imaSlot.style.height=i+"px",e.imaSlot.style.marginLeft="auto",e.imaSlot.style.marginRight="auto",e.imaSlot.style.zIndex=-3,e.imaSlot.style.position="absolute",e.imaSlot.style.transform="translate(-3000px)",e.imaSlot.style.overflow="hidden",e.imaSlot.id="imaSlotContainer",e.config.bus.triggerNote("addChild",{visual:e.imaSlot,destiny:"videoAd",ima:!0})}(),function(){var t=e.config.videoWidth||e.config.width,i=e.config.adVideoHeight||e.config.height;e.imaVideoElement=e.config.videoIFrameDoc.createElement("video"),"Facebook"!=e.config.clientInfo.extra.browser&&"app"!=e.config.clientInfo.browser||(e.imaVideoElement.controls=!1),e.imaVideoElement.width=t+"px",e.imaVideoElement.height=i+"px",e.imaVideoElement.style.top="0px",e.imaVideoElement.muted=e.config.isMuted,e.imaVideoElement.volume=e.config.volume,e.imaVideoElement.id="adVideoElement",e.imaVideoElement.playsInline=!0,e.imaVideoElement.autoplay=!0,e.imaSlot.appendChild(e.imaVideoElement)}(),window.primisLog("[[Ad Unit]] - loadExternalSDK: "+this.adType),e.imaVideoElement.style.zIndex=-1,e.imaVideoElement.style.position="absolute",e.imaVideoElement.style.top="0px",e.imaVideoElement.style.left="0px"},SekindoAdsManager.prototype.replacePriceMacroForAdx=function(e,t,i,n){function o(e,t){t||(t=1);var i=1/t;return Math.ceil(e*i)/i}var a=Object.keys(n),s=a[0],r=parseFloat(e);(!r||isNaN(r)||r<0)&&(r=s),r<4&&(r=o(r,.25)),r>=4&&r<20&&(r=o(r,.5));var l=parseFloat(a[a.length-1]);if(r>=l)s=l;else{var c=l;Object.keys(n).map(function(e){var t=Math.abs(r-parseFloat(e));s=t<c?parseFloat(e):s,c=Math.min(c,t)})}var d=n[s=s.toFixed(2)]||"";return i.replace(t,d)},SekindoAdsManager.prototype.destruct=function(){if(this.config.adsProcessPaused=!0,this.timeOutObj&&clearTimeout(this.timeOutObj),this.switchToAutoPlayTimer&&clearTimeout(this.switchToAutoPlayTimer),this.currAdUnit&&this.currAdUnit.destruct(),this.waterfallArray)for(var e=0;e<this.waterfallArray.length;e++)this.waterfallArray[e].destruct();this.currProcessor&&this.currProcessor.destruct(),SekindoUtils.deleteMe(this)},SekindoWaterfallLoader.prototype.sendRequest=function(){var e=(new Date).getTime().toString(),t=this.waterfallUrl.replace("${CBUSTER}",e);if(this.config.mediaUserId&&"30826"===this.config.mediaUserId){var i=SekindoUtils.liveHash(t,this.config);new Blob([i]).size<this.awsBytesLimitation&&(t=i)}else t=SekindoUtils.liveHash(t,this.config);var n=t.split("?"),o=n.shift(),a="";n.length&&(a=n.join("?")),a.length>7168?(this.adsXmlhttp.open("POST",o,!0),this.adsXmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),this.adsXmlhttp.withCredentials=!0,this.adsXmlhttp.send(a)):(this.adsXmlhttp.open("GET",t,!0),this.adsXmlhttp.withCredentials=!0,this.adsXmlhttp.send())},SekindoWaterfallLoader.prototype.destruct=function(){this.waterFallLifeTimeOut&&clearTimeout(this.waterFallLifeTimeOut),this.wfDebugLog&&this.wfDebugLog.destruct(),this.waterFallLifeTime=0},SekindoWaterfallLinearProcessor.prototype.init=function(){var e=this;this.params.waterfall.sort(function(e,t){return e.optimizedOrder-t.optimizedOrder});const t=this.parent.processorCounter%2==0;for(var i=0;i<this.params.waterfall.length;i++){var n=this.params.waterfall[i];n.isSkipAd=!1,n.isSkipAttemptTracking=!1,n.trackingEvents.sspImpTrackers=[],n.trackingEvents.sspWinTrackers=[],n.bidId=-1,n.isCachedBid=!1,n.adomain="",n.syncSource=-1,n.amznbid="";let e=SekindoUtils.adInspection(n,this.config,this.params.scheduleAdFormat,this.parent.processorCounter,this.parent.adxImpTimestamp,t),o=void 0===window.SKpbjs,a="prebidVideo"==n.serveType||"sspVideo"==n.serveType;(!e||o&&a)&&(n.isSkipAd=!0)}this.highestBid=-1,this.setPrebidGlobalConfig(),this.setPrebidBidderConfig(),this.tmpeids=window.SKpbjs.getUserIdsAsEids().concat(SekindoUtils.getEids());var o=[];this.eids=[],this.tmpeids.forEach(function(t){1!==o[t.source]&&(e.eids.push(t),o[t.source]=1)}),this.processPrebid()},SekindoWaterfallLinearProcessor.prototype.setPrebidBidderConfig=function(){var e={bidders:["rubicon"],config:{ortb2:{site:{content:{cat:this.config.bus.getParam("contentRtbCategories"),pagecat:this.config.contextualMatchData.urlRtbCategories},ext:{data:{}}}}}};for(var t in this.config.kvParams){var i=this.config.kvParams[t];if("string"==typeof i&&-1!==i.indexOf("genre=")){var n=i.split("=")[0],o=i.split("=")[1];e.config.ortb2.site.content[n]=o,e.config.ortb2.site.ext.data[n]=[o]}}window.SKpbjs.setBidderConfig(e)},SekindoWaterfallLinearProcessor.prototype.setPrebidGlobalConfig=function(){var e={};this.config.gdprIsRequired&&(2===this.config.gdprInfo.getConsentVersion()?e.consentManagement={gdpr:{cmpApi:"static",consentData:{getTCData:{tcString:this.config.gdprInfo.getConsentString(),gdprApplies:!0}}}}:e.consentManagement={cmpApi:"static",allowAuctionWithoutConsent:!0,consentData:{getConsentData:{gdprApplies:!0,hasGlobalScope:!1,consentData:this.config.gdprInfo.v1.consent},getVendorConsents:{metadata:this.config.gdprInfo.v1.consent,gdprApplies:!0}}}),this.config.ccpaIsRequired&&(e.consentManagement||(e.consentManagement={}),e.consentManagement.usp={cmpApi:"static",consentData:{getUSPData:{uspString:this.config.ccpaInfo.consent}}}),this.config.currencyRates?e.currency={adServerCurrency:"USD",granularityMultiplier:1,rates:this.config.currencyRates}:e.currency={adServerCurrency:"USD",granularityMultiplier:1,defaultRates:{USD:{USD:1,JPY:132.06056616194866,BGN:1.8393680052666228,CZK:22.773441173704505,DKK:6.9939810025392655,GBP:.829897488949497,HUF:378.19053888836646,PLN:4.3678171729521305,RON:4.6076366030283085,SEK:10.392175303301045,CHF:.9265494216119629,ISK:144.17379855167877,NOK:9.792438634439952,HRK:7.089250446722469,TRY:18.673281294084454,AUD:1.4863161854603595,BRL:5.208878021254585,CAD:1.3621743628326908,CNY:6.981002539264555,HKD:7.794883852158375,IDR:15542.09536349102,ILS:3.4742781905388886,INR:82.79554218000565,KRW:1280.6827800244523,MXN:19.607354462522338,MYR:4.424997648829117,NZD:1.5910843600112856,PHP:55.21019467694912,SGD:1.35013636791122,THB:34.65531834853757,ZAR:17.138907175773536,EUR:.9404683532399135}}},window.SKpbjs.setConfig(e)},SekindoCachedBids.prototype.addBid=function(e,t,i){e={isValid:!0,campaignId:t.campaignId,campaignScope:t.campaignScope,size:{w:this.config.videoWidth,h:this.config.adVideoHeight},viewable:i,timestamp:(new Date).getTime(),response:SekindoUtils.merge2Objs({},e)};var n=this.bids.length;return this.bids[n]=e,n},SekindoCachedBids.prototype.getBid=function(e){return e<this.bids.length&&e>=0&&this.bids[e].isValid?this.bids[e]:null},SekindoCachedBids.prototype.invalidateBid=function(e){e<this.bids.length&&e>=0&&(this.bids[e].isValid=!1,this.bids[e].campaignId=-1)},SekindoCachedBids.prototype.searchBidId=function(e){if(!this.config.enableBidCaching)return-1;for(var t=new Date,i=0;i<this.bids.length;i++){var n=this.bids[i];if(n.isValid&&(null==e||n.campaignId==e.campaignId)&&t.getTime()-n.timestamp<1e3*n.response.ttl)return i}return-1},SekindoCachedBids.prototype.invalidateBidByAd=function(e){var t=this.searchBidId(e);this.invalidateBid(t)},SekindoWaterfallLinearProcessor.prototype.processPrebid=function(){function e(){Math.random()*o.config.vImpOpportunityMultiplier<1&&SekindoUtils.firePixel(o.config.vImpOpportunityPixel,o.config.pixelDiv,o.config),o.params.waterfall.settings.viewable&&o.parent.viewableWFCount++,o.params.waterfall.sort(i),o.parent.currWaterfall.wfDebugLog&&o.parent.currWaterfall.wfDebugLog.setWF(o.params.waterfall,o.parent.currWaterfall.debugWFManagerId),o.generateNextAd()}function t(e){if(isNaN(e.rvn)||isNaN(e.pubCosts.pubRevshare))return-1;return e.rvn*e.scoreFactor}function i(e,i){if(e.campaignPriority!=i.campaignPriority)return e.campaignPriority-i.campaignPriority;if(o.highestBid>0&&e.eligableForLastLook!=i.eligableForLastLook){if(e.eligableForLastLook)return-1;if(i.eligableForLastLook)return 1}var n=t(e),a=t(i);return-1==n?1:-1==a?-1:-1*(n-a)}function n(){o.processPrebidInternal("public",e)}var o=this;this.isPrimisLastLookActive=Sekindo.ABTest.isA(this.config.debugInformation,"pubLastLook","active"),this.isPrimisLastLookActive?o.processPrebidInternal("private",n):o.processPrebidInternal("",e)},SekindoWaterfallLinearProcessor.prototype.calcNewFloor=function(e,t){return this.highestBid>0&&!t.isStaticFloor?parseFloat(this.highestBid*t.highestBidMultiplier).toFixed(2):e},SekindoWaterfallLinearProcessor.prototype.processPrebidInternal=function(e,t){function i(t){return!l.isPrimisLastLookActive||t.campaignScope===e}function n(e,t){t.bids[0].customData&&Object.keys(t.bids[0].customData).forEach(function(e){var i=t.bids[0].customData[e],n=e.split("."),o=t.bids[0].params,a=0;if(n.length>1)for(a=0;a<n.length-1;a++)o[n[a]]=o[n[a]]?o[n[a]]:[],o=o[n[a]];var s=new BidMacroReplacer(l.config);o[n[a]]=s.getCustomDataMacroValue(t.bids[0].bidder,i)});const i=[84874,84621,85460,61204,73001,85531,82450];var n=l.parent.dynamicBidValues;switch(t.bids[0]&&t.bids[0].params&&t.bids[0].params.video&&t.bids[0].params.video.placement&&(t.bids[0].params.video.placement=g.isForceInstream?n.placementMap.instream:n.valuesMap.placement),t.bids[0]&&t.bids[0].params&&t.bids[0].params.video&&t.bids[0].params.video.plcmt&&(t.bids[0].params.video.plcmt=g.isForceInstream?n.plcmtMap.instream:n.valuesMap.plcmt),e){case"oneVideo":t.bids[0].params.video.content={},t.bids[0].params.video.content.cat=l.config.bus.getParam("contentRtbCatArr"),t.bids[0].params.video.playbackmethod=l.parent.playbackmethod;break;case"medianet":t.bids[0].params.ext={},t.bids[0].params.ext.vcat=l.config.bus.getParam("contentRtbCatArr"),t.bids[0].params.ext.pcat=l.config.contextualMatchData.pageRtbCatArr;break;case"adman":t.mediaTypes.video.sizes=[l.config.videoWidth,l.config.adVideoHeight];break;case"rubicon":l.config.isOmidActivated?(t.mediaTypes.video.protocols=[2,3,5,6,7,8,11,12,13,14],t.mediaTypes.video.api=[2,7]):(t.mediaTypes.video.protocols=[2,3,5,6],t.mediaTypes.video.api=[2]);for(var o in l.config.kvParams){var a=l.config.kvParams[o];"string"==typeof a&&-1!==a.indexOf("tg_i.domain=")&&(t.bids[0].params["tg_i.domain"]=a.split("=")[1])}break;case"triplelift":i.includes(g.campaignId)&&(t.mediaTypes.video.context="outstream");case"pulsepoint":t.mediaTypes.video.startdelay=0;break;case"telaria":t.bids[0].params.categories=l.config.bus.getParam("contentRtbCategories");break;case"spotx":if(t.bids[0].params.custom={},"string"==typeof l.config.contextualMatchData.iabCategoriesNames&&l.config.contextualMatchData.iabCategoriesNames.length>0&&(t.bids[0].params.custom.category=l.config.contextualMatchData.iabCategoriesNames.replace(/&/g,"and"),t.bids[0].params.custom.category=t.bids[0].params.custom.category.split(",")),g.isIrisEnabled){void 0!==(s=JSON.parse(l.config.bus.getParam("contentIrisContext"))).context&&s.context.length&&(t.bids[0].params.custom.iris_id=s.iris_id,t.bids[0].params.custom.iris_context=s.context)}break;case"smartadserver":if(g.isIrisEnabled){void 0!==(s=JSON.parse(l.config.bus.getParam("contentIrisContext"))).context&&s.context.length&&(t.bids[0].params.target="iris_context="+s.context.join(","))}t.bids[0].params.video.playbackmethod=l.parent.playbackmethod;break;case"ix":t.mediaTypes.video.startdelay=0,t.ortb2Imp={ext:{data:{adserver:{adslot:l.config.adslotId}}}};break;case"sharethrough":t.ortb2Imp={ext:{data:{adserver:{adslot:l.config.adslotId}}}},i.includes(g.campaignId)&&(t.mediaTypes.video.context="outstream");break;case"colossusssp":t.mediaTypes.video.sizes=[t.sizes];break;case"pubmatic":if(t.ortb2Imp={ext:{data:{adserver:{adslot:l.config.adslotId}}}},g.isIrisEnabled){var s;void 0!==(s=JSON.parse(l.config.bus.getParam("contentIrisContext"))).context&&s.context.length&&(t.bids[0].params.dctr="iris_context="+s.context,window.SKpbjs.setBidderConfig({bidders:["pubmatic"],config:{content:{id:s.iris_id}}}))}else window.SKpbjs.setBidderConfig({bidders:["pubmatic"],config:{content:{}}});break;case"openx":76994!==g.campaignId&&76995!==g.campaignId||(t.mediaTypes.video.context="outstream",t.mediaTypes.video.placement=3),i.includes(g.campaignId)&&(t.mediaTypes.video.context="outstream");break;case"sekindoGeneralVast":t.bids[0].params.vastUrl&&(t.bids[0].params.vastUrl=t.bids[0].params.vastUrl.replace("${GDPR}",l.config.gdprIsRequired),t.bids[0].params.vastUrl=t.bids[0].params.vastUrl.replace("${GDPR_CONSENT}",encodeURIComponent(l.config.gdprInfo.getConsentString())),t.bids[0].params.vastUrl=t.bids[0].params.vastUrl.replace("${US_PRIVACY}",encodeURIComponent(l.config.ccpaInfo.consent)));break;case"undertone":t.bids[0].params.video.playbackmethod=l.parent.playbackmethod;break;case"ttd":t.ortb2Imp={ext:{gpid:l.config.adslotId}};break;case"kargo":t.mediaTypes.video.startdelay=0;break;case"freewheel-ssp":t.bids[0].params.vastUrlParams={protocolVersion:l.config.vastSupportedVersion.toString(),withOMSDK:!0}}}function o(e,t,i){var n=l.params.waterfall[e],o=l.config.cachedBids.getBid(t).response;n.isCachedBid=i,n.bidId=t;var a=parseInt(1e3*o.cpm*(n.rvnPct||1));if(n.rvn=a,o.amznbid&&(n.amznbid=o.amznbid),l.highestBid<o.cpm&&(l.highestBid=o.cpm),o.meta&&o.meta.advertiserDomains&&o.meta.advertiserDomains.length>0&&(n.adomain=encodeURIComponent(o.meta.advertiserDomains[0])),void 0!==o.sspPixelData){n.adomain="";var s=o.sspPixelData.match(/(&ssp_adom=)(.*?((?=&)|$))/);null!=s&&(n.adomain=s[2],o.sspPixelData=o.sspPixelData.replace(s[0],"")),a=a+"&"+o.sspPixelData}if(function(e,t){e.blockBrands&&t&&0!=t.length&&(e.blockBrands.length>0?e.blockBrands.split(","):[]).forEach(function(i){i.toLowerCase(),t.toLowerCase(),-1!==i.indexOf(t)&&(e.isSkipAd=!0)})}(n,n.adomain),void 0!==o.sspTrackers&&(void 0!==o.sspTrackers.impTrackers&&(n.trackingEvents.sspImpTrackers=o.sspTrackers.impTrackers),void 0!==o.sspTrackers.winTrackers&&(n.trackingEvents.sspWinTrackers=o.sspTrackers.winTrackers)),n.macro={str:"${VP_RVN_MACRO}",repTo:a},o.vastXml){var r=o.vastXml;if("string"==typeof r){if(window.ActiveXObject){(c=new ActiveXObject("Microsoft.XMLDOM")).async="false",c.loadXML(r)}else var c=(new DOMParser).parseFromString(r,"text/xml");l.config.failAdDebugLog&&n.params&&n.params.failedParams&&r&&null==n.params.failedParams.failedVastXML&&(n.params.failedParams.failedVastXML=r),r=c}l.config.failAdDebugLog&&n.params&&n.params.failedParams&&o.vastUrl&&null==n.params.failedParams.failedVastURL&&(n.params.failedParams.failedVastURL=o.vastUrl),n.vastURL=null,n.vastXml=r}else n.vastURL=o.vastUrl,n.vastXml=null}function a(e,t){for(var i=e.bids[0].floorPath,n=e.bids[0].params,o=0,a=i[o];o<i.length-1;o++)n=n[a=i[o]];var s=n[a=i[o]],r="string"==typeof s,c=s.toString().split(":");c.length>1&&(s=parseFloat(c[1]));var d=l.calcNewFloor(s,t);l.parent.currWaterfall.wfDebugLog&&l.parent.currWaterfall.wfDebugLog.setAdFloor(t.campaignId,d,l.parent.currWaterfall.debugWFManagerId),d=Math.round(100*d)/100,r&&(d=d.toString()),c.length>1&&(d=c[0].concat(":",d)),n[a]=d}function s(e,n){var a="prebid"==e?"amazon":"prebid";if(d[e].response=n,d[e].status="ready","wait"!=d[a].status){var s={};for(var r in d)if("ready"==d[r].status)for(var c in d[r].response)s[c]=d[r].response[c];!function(e){for(var n=0;n<l.params.waterfall.length;n++){var a=l.params.waterfall[n];if(i(a)&&("prebidVideo"==a.serveType||"sspVideo"==a.serveType)){var s="prebidVideo"==a.serveType?"adUnit_"+n:"adUnit_ssp",r=!1;if(e.hasOwnProperty(s)&&e[s].bids.length)for(var c=0,d=e[s].bids.length;c<d;c++){var p=e[s].bids[c];if(p.cpm>0&&("prebidVideo"==a.serveType||p.referenceId==n)&&(p.vastUrl||p.vastXml)){var h=l.config.cachedBids.addBid(p,a,l.params.waterfall.settings.viewable);o(n,h,!1),SekindoUtils.trackSekindoAdEvents("response",null,a,l.config),r=!0
;break}}if(!r){var h=l.config.cachedBids.searchBidId(a);-1!==h?o(n,h,!0):a.isSkipAd=!0}}}t()}(s)}}function r(e){e.syncSource=0;for(var t=0;t<l.eids.length;t++){var i=l.eids[t];if(""!=e.preBidData.params.eidName&&i.source&&i.source==e.preBidData.params.eidName&&""!=i.uids[0].id)return e.preBidData.params.buyerUid=i.uids[0].id,void(e.syncSource=2)}e.preBidData.params.buyerUid=e.preBidData.params.internalBuyerUid,""==e.preBidData.params.buyerUid||(e.syncSource=1)}var l=this,c=[],d={prebid:{status:"inactive",response:{}},amazon:{status:"inactive",response:{}}};this.config.prebidAdUnitCodes.forEach(function(e){window.SKpbjs.removeAdUnit(e)}),this.config.prebidAdUnitCodes=[],this.a9Bidder=null;for(var p=0;p<this.params.waterfall.length;p++){if(i(g=this.params.waterfall[p])&&!g.isSkipAd){var h=this.config.cachedBids.searchBidId(g);if(-1!==h){var u=this.config.cachedBids.getBid(h).response;this.highestBid<u.cpm&&(this.highestBid=u.cpm)}}}for(p=0;p<this.params.waterfall.length;p++){var g;if(i(g=this.params.waterfall[p])&&!g.isSkipAd)if("prebidVideo"==g.serveType){if("a9Custom"==g.preBidData.params.bidder){if(this.a9Bidder){g.isSkipAd=!0;continue}if(g.preBidData.params.params.floor){var f=g.baseFloor;g.preBidData.params.params.floor=this.calcNewFloor(f,g),l.parent.currWaterfall.wfDebugLog&&l.parent.currWaterfall.wfDebugLog.setAdFloor(g.campaignId,g.preBidData.params.params.floor,l.parent.currWaterfall.debugWFManagerId)}this.a9Bidder=new SekindoA9Bidder(this.config,g,s,"adUnit_"+p)}else{var m={};g.preBidData.params.scope=g.campaignScope,m={code:"adUnit_"+p,bids:[JSON.parse(JSON.stringify(g.preBidData.params))],sizes:[this.config.videoWidth,this.config.adVideoHeight],mediaTypes:{video:{context:"instream",playerSize:[this.config.videoWidth,this.config.adVideoHeight],mimes:this.config.staticBidValues.mimes,minduration:this.config.staticBidValues.minduration,maxduration:this.config.staticBidValues.maxduration,protocols:this.config.staticBidValues.protocols,linearity:this.config.staticBidValues.linearity,api:this.config.staticBidValues.api,placement:g.isForceInstream?this.parent.dynamicBidValues.placementMap.instream:this.parent.dynamicBidValues.valuesMap.placement,plcmt:g.isForceInstream?this.parent.dynamicBidValues.plcmtMap.instream:this.parent.dynamicBidValues.valuesMap.plcmt,startdelay:this.config.staticBidValues.startdelay,skip:this.config.staticBidValues.skip,playbackmethod:this.parent.playbackmethod}}},this.config.isOmidActivated||(m.mediaTypes.video.protocols=[1,2,3,4,5,6],m.mediaTypes.video.api=[1,2]),n(g.preBidData.params.bidder,m),void 0!=m.bids[0].floorPath&&m.bids[0].floorPath.length>0&&a(m,g),window.SKpbjs.addAdUnits(m),this.config.prebidAdUnitCodes.push(m.code)}g.isSkipAttemptTracking=!0,SekindoUtils.trackSekindoAdEvents("onAttempt",null,g,this.config)}else if("sspVideo"==g.serveType){r(g),g.preBidData.params.referenceId=p;f=g.preBidData.params.baseFloor;g.preBidData.params.bidfloor=this.calcNewFloor(f,g),l.parent.currWaterfall.wfDebugLog&&l.parent.currWaterfall.wfDebugLog.setAdFloor(g.campaignId,g.preBidData.params.bidfloor,l.parent.currWaterfall.debugWFManagerId),g.preBidData.params.isForceInstream=g.isForceInstream,c.push(g.preBidData.params),g.isSkipAttemptTracking=!0,SekindoUtils.trackSekindoAdEvents("onAttempt",null,g,this.config)}}if(c.length>0){var v={code:"adUnit_ssp",bids:[function(e){var t={bidder:"sekindoInternal",params:{data:l.params.waterfall.sspInfo}};t.params.data.gdpr=l.config.gdprIsRequired,t.params.data.gdprConsent=encodeURIComponent(l.config.gdprInfo.getConsentString()),t.params.data.isWePassGdpr=l.config.gdprInfo.getIsWePass(),t.params.data.ccpa=l.config.ccpaIsRequired,t.params.data.ccpaConsent=encodeURIComponent(l.config.ccpaInfo.consent),t.params.data.minBid=0,t.params.data.placementCat=l.config.contextualMatchData.placementCategory.length>0?l.config.contextualMatchData.placementCategory.split(","):[];var i=l.parent.dynamicBidValues.getDynamicValuesMap();if(t.params.data.videoPlacementType=i.placement,t.params.data.videoPlcmtType=i.plcmt,t.params.data.playbackmethod=l.parent.playbackmethod,t.params.data.extUserIds=l.eids,t.params.data.gpid=l.config.adslotId,t.params.data.isOmidActivated=l.config.isOmidActivated,t.params.data.campaigns={},t.params.data.navigatorLanguage=window.navigator&&window.navigator.language.split("-").length>1?window.navigator.language.split("-")[0]:window.navigator.language,t.params.data.pagecat=l.config.contextualMatchData.urlRtbCategories.length>0?l.config.contextualMatchData.urlRtbCategories.split(","):[],t.params.data.contentcat=l.config.bus.getParam("contentRtbCatArr"),e[0].customData){var n=new BidMacroReplacer(l.config);t.params.data.customData={},Object.keys(e[0].customData).forEach(function(i){var o=e[0].customData[i];t.params.data.customData[i]=n.getCustomDataMacroValue(e[0].ext.partner,o)})}return t.params.data.staticBidValues=l.config.staticBidValues,e.forEach(e=>{e.schain=l.config.schain[e.campaignScope],e.videoPlacementType=e.isForceInstream?l.parent.dynamicBidValues.placementMap.instream:t.params.data.videoPlacementType,e.videoPlcmtType=e.isForceInstream?l.parent.dynamicBidValues.plcmtMap.instream:t.params.data.videoPlcmtType,t.params.data.campaigns[e.campaignId]=e}),t.params.data=SekindoUtils.createHashedObject(t.params.data,l.config),t}(c)],sizes:[this.config.videoWidth,this.config.adVideoHeight],mediaTypes:{video:{context:"instream",playerSize:[this.config.videoWidth,this.config.adVideoHeight]}}};window.SKpbjs.addAdUnits(v),this.config.prebidAdUnitCodes.push(v.code)}this.config.prebidAdUnitCodes.length>0||this.a9Bidder?(this.config.prebidAdUnitCodes.length>0&&(d.prebid.status="wait",this.config.schain.private&&window.SKpbjs.setConfig({schain_private:{validation:"strict",config:this.config.schain.private}}),window.SKpbjs.setConfig({schain_public:{validation:"strict",config:this.config.schain.public}}),window.SKpbjs.requestBids({timeout:3e3,bidsBackHandler:function(e){s("prebid",e)},adUnitCodes:this.config.prebidAdUnitCodes})),this.a9Bidder&&(d.amazon.status="wait",this.a9Bidder.run())):setTimeout(function(){t()},10)},SekindoWaterfallLinearProcessor.prototype.generateNextAd=function(){if(this.config.adsProcessPaused||this.config.adsProcessHalter.shouldHalt())return this.status="paused",void this.destruct();if(!this.params.waterfall||!this.params.waterfall.length)return this.status=null,this.parent.executeAdsSchedule(),void this.destruct();if(!this.parent.nextAd)return this.status=null,this.parent.executeAdsSchedule(),void this.destruct();if(!this.currAdUnit||"started"!=this.currAdUnit.adProccessStatus){if(!this.params.waterfall.settings)return this.config.bus.triggerNote("waterFallEmpty"),this.status=null,this.parent.executeAdsSchedule(),void this.destruct();if(this.parent.isCacheBidsOnly)return this.status=null,this.regenerateOnFail&&(this.config.primisConsoleLog("isCacheBidsOnly regenerateOnFail detected"),this.parent.setAdsSchedule(!0)),this.parent.executeAdsSchedule(),void this.destruct();if(this.index++,this.params.waterfall.length<=this.index)return this.config.bus.triggerNote("waterFallEmpty"),this.status=null,this.parent.executeAdsSchedule(),void this.destruct();var e=this.params.waterfall[this.index];if(e.adUnit=null,!e)return this.config.bus.triggerNote("waterFallEmpty"),this.status=null,this.parent.executeAdsSchedule(),void this.destruct();window.primisLog("[[WFLinearProcessor]] - generateNextAd"),this.status="processing",this.parent.imaReady||"ima"!=e.serveType||this.config.isAppSdk||(this.parent.imaReady=!0,this.parent.buildIma());var t=new SekindoAdUnit(this.config,e,this);e.adUnit=t,this.adUnitsArray&&this.adUnitsArray.push(t)}},SekindoWaterfallLinearProcessor.prototype.adUnitReport=function(e){function t(e){i.config.adIsPlaying=!1;var t=e.val;if(t.adProccessStatus="complete",t.params&&(t.params.adUnit=null),t.destruct(),i.currAdUnit=i.parent.currAdUnit=null,i.status="complete",i.status=null,i.config.isLastImpViewable){var n=new Date;i.config.lastImpViewableCompleteTime=n.getTime()}i.parent.executeAdsSchedule(),i.destruct()}var i=this;switch(window.primisLog("[[WFLinearProcessor]] - adUnitReport: "+e.type),e.type){case"startingAd":this.status="started";break;case"started":(n=e.val).adProccessStatus="started",this.currAdUnit=this.parent.currAdUnit=n,this.status="started",this.config.adIsPlaying=!0,this.config.hadImpression=!0,this.config.isLastImpViewable=this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status,this.config.isLastImpViewable&&(this.config.isFirstViewablePreroll=!1,this.parent.viewableImpCount++),!this.currAdUnit.videoElement||this.currAdUnit.videoElement.width==this.config.videoWidth&&this.currAdUnit.videoElement.height==this.config.adVideoHeight||this.parent.onPlayerResize({videoWidth:this.config.videoWidth,videoHeight:this.config.videoHeight,adVideoHeight:this.config.adVideoHeight},!0);break;case"fail":if(i.config.failAdDebugLog&&e.val.params&&1!=e.val.params.isSkipAd&&(e.val.params.failedParams&&e.reason&&(e.val.params.failedParams.failedReason=e.reason),SekindoUtils.reportFailAd(e.val,this.config)),this.config.adIsPlaying){this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdStopped",adVolume:i.config.isMuted?0:i.config.volume}),e.type="complete",t(e);break}this.config.adIsPlaying=!1;var n;(n=e.val).adProccessStatus="fail",n.params.adUnit=null,n.params=null,n.destruct(),this.currAdUnit=this.parent.currAdUnit=null,this.destructOnFail?(this.status="complete",this.config.bus.triggerNote("waterFallEmpty"),this.parent.executeAdsSchedule(),this.destruct()):this.regenerateOnFail?(this.config.primisConsoleLog("regenerateOnFail detected"),this.status="complete",this.parent.setAdsSchedule(!0),this.parent.executeAdsSchedule(),this.destruct()):this.generateNextAd();break;case"complete":t(e)}},SekindoWaterfallLinearProcessor.prototype.destruct=function(){if(this.adUnitsArray)for(var e=0;e<this.adUnitsArray.length;e++)this.adUnitsArray[e].destruct();this.parent&&this.parent.currProcessor==this&&(this.parent.currProcessor=null),SekindoUtils.deleteMe(this)},SekindoAdUnit.prototype.adsLoaded=function(e){if(this.params&&!this.params.linear){if(this.adProccessStatus="loaded",this.config.adsProcessPaused||this.config.adsProcessHalter.shouldHalt())return this.adProccessStatus="complete",void this.parent.adUnitReport({type:"fail",val:this,reason:"player paused"});if(null!=e){this.originParams=this.params;var t=e.getAd(!1,!0);if(t){if(this.config.blockVpaidjsTube&&t.vastStr){var i=t.vastStr.indexOf("vpaidjs-2018");if(-1!=i&&parseInt(t.vastStr.substr(i+12,2))>5)return void this.parent.adUnitReport({type:"fail",val:this})}if(this.params=SekindoUtils.merge2Objs(t,this.params),this.params.track("loaded",null,null,this.config.pixelDiv,this.config),this.params.linear){this.params.sentImpression=!1,this.progressArray=new Array;for(var n=0;n<this.params.getTrackingPoints().length;n++){var o=this.params.getTrackingPoints()[n];-1!=o.event.indexOf("progress")&&this.progressArray.push(o)}var a=this.params.linear.getAllMedias();this.params.linear.getInteractiveCreativeFiles();if(a.length&&0!=a.length){this.mediaFilesHandler=new VastMediaFilesHandler(this.config,a,t);var s=this.mediaFilesHandler.sortMedias(),r=this.mediaFilesHandler.getBestMedia();if(this.adVerifications=[],this.config.isOmidActivated&&this.params.adVerifications&&(this.adVerifications=this.params.adVerifications),s.video.length>0)this.runFunc=this.loadLinearContent,this.runSrc=r.src,t.icons&&(this.iconManager=new IconManager(t.icons,this.config));else{if(!(s.js.length>0))return void this.parent.adUnitReport({type:"fail",val:this,reason:"media element empty"});this.params.reportDebugImpPixelId&&this.params.debugWFManagerId&&this.config.LogRest.performCall("liveVideoWaterfall","SetVastStatus",[this.params.reportDebugImpPixelId,"VPAID proccessed"],this.params.debugWFManagerId),this.runFunc=this.loadVPAIDContent,this.runSrc=s.js[0].src}"vast"==this.params.serveType&&(SekindoUtils.trackSekindoAdEvents("response",null,this.params,this.config),SekindoUtils.trackSekindoAdEvents("win",null,this.params,this.config)),this.runFunc(this.runSrc,this.adVerifications)}else this.parent.adUnitReport({type:"fail",val:this,reason:"media element empty"})}else this.parent.adUnitReport({type:"fail",val:this,reason:"Vast xml entity Linear branch is missing"})}else this.parent.adUnitReport({type:"fail",val:this,reason:"no ad"})}else this.parent.adUnitReport({type:"fail",val:this,reason:"no ads available"})}},SekindoAdUnit.prototype.loadVPAIDContent=function(e,t){window.primisLog("[[Ad Unit]] - loadVPAIDContent"),this.wrapper&&this.destructWrapper(),this.adType="vpaid";var i=this.params.linear.adParameters,n=[];this.generateVpaidSlot(),n.slot=this.vpaidSlot,this.config.videoSlot?this.videoElement=this.config.videoSlot:this.generateVideoElement(),this.config.isOmidActivated&&"ima"!==this.adType&&t.length>0&&(this.adSessionRef=this.omidSession.startAdSession(this.videoElement,t)),this.addVideoListeners(),n.videoSlot=this.videoElement,this.params.VPAIDUrl=e,this.params.creativeData=i,this.params.environmentVars=n,this.wrapper=new SekindoVPAIDWrapper(this.config,this.params,this)},SekindoAdUnit.prototype.destructWrapper=function(){this.wrapper&&(this.wrapper.destruct(),this.wrapper=null)},SekindoAdUnit.prototype.loadLinearContent=function(e,t){if(window.primisLog("[[Ad Unit]] - loadLinearContent"),this.config.adsProcessPaused||this.config.adsProcessHalter.shouldHalt())this.parent.adUnitReport({type:"fail",val:this,reason:"Ad process pauses"});else{this.adType="linear",this.currSrc=decodeURI(e),this.generateVpaidSlot(),this.config.videoSlot?this.videoElement=this.config.videoSlot:this.generateVideoElement(),this.config.isOmidActivated&&"ima"!==this.adType&&t.length>0&&(this.adSessionRef=this.omidSession.startAdSession(this.videoElement,t)),this.addVideoListeners(),this.addLinearListeners(),this.videoElement.src=this.currSrc;var i=this.videoElement.play();if(i)try{i.then(function(){}).catch(function(e){})}catch(e){}}},SekindoAdUnit.prototype.generateVpaidSlot=function(){var e=this.config.videoWidth||this.config.width,t=this.config.adVideoHeight||this.config.height;this.vpaidSlot&&this.vpaidSlot.parentNode&&this.disposeVpaidSlot(),this.vpaidSlot=this.config.videoIFrameDoc.createElement("div"),this.vpaidSlot.style.width=e+"px",this.vpaidSlot.style.height=t+"px",this.vpaidSlot.style.marginLeft="auto",this.vpaidSlot.style.marginRight="auto",this.vpaidSlot.style.zIndex=-3,this.vpaidSlot.style.position="absolute",this.vpaidSlot.style.transform="translate(-3000px)",this.vpaidSlot.style.overflow="hidden",this.vpaidSlot.id="slotContainer",this.config.bus.triggerNote("addChild",{visual:this.vpaidSlot,destiny:"videoAd"})},SekindoAdUnit.prototype.generateVideoElement=function(){var e=this.config.videoWidth||this.config.width,t=this.config.adVideoHeight||this.config.height;this.videoElement&&this.videoElement.parentNode&&this.disposeVideoElement(),this.videoElement=this.config.videoIFrameDoc.createElement("video"),"Facebook"!=this.config.clientInfo.extra.browser&&"app"!=this.config.clientInfo.browser||(this.videoElement.controls=!1),this.videoElement.width=e+"px",this.videoElement.height=t+"px",this.videoElement.style.top="0px",this.videoElement.muted=this.config.isMuted,this.videoElement.volume=this.config.volume,this.videoElement.id="adVideoElement",this.videoElement.playsInline=!0,this.videoElement.autoplay=!0,this.vpaidSlot.appendChild(this.videoElement),this.params.bgColor&&(this.videoElement.style.backgroundColor=this.params.bgColor,this.videoElement.parentNode.style.background=this.params.bgColor),"ios"==this.config.clientInfo.os&&(this.iosVidWrapper=new SekindoServices.iosVidAutoplayWrapper(this.videoElement))},SekindoAdUnit.prototype.disposeVpaidSlot=function(){this.vpaidSlot&&"ima"!=this.adType&&(this.vpaidSlot.parentNode&&this.vpaidSlot.parentNode.removeChild(this.vpaidSlot),this.vpaidSlot=null)},SekindoAdUnit.prototype.disposeVideoElement=function(){this.videoElement&&"ima"!=this.adType&&(this.iosVidWrapper&&this.iosVidWrapper.destruct(),delete this.iosVidWrapper,this.removeListeners(),this.checkAdViewability=null,this.videoElement.parentNode&&this.videoElement.parentNode.removeChild(this.videoElement),this.videoElement.destruct&&this.videoElement.destruct(),delete this.videoElement,this.videoElement=null)},SekindoAdUnit.prototype.addVideoListeners=function(){this.videoElement.addEventListener("volumechange",this.videoEventCallback),this.videoElement.addEventListener("pause",this.videoEventCallback)},SekindoAdUnit.prototype.addLinearListeners=function(){this.videoElement.addEventListener("playing",this.videoEventCallback),this.videoElement.addEventListener("play",this.videoEventCallback),this.videoElement.addEventListener("ended",this.videoEventCallback),this.videoElement.addEventListener("click",this.videoEventCallback),this.videoElement.addEventListener("error",this.videoEventCallback),this.videoElement.addEventListener("skipped",this.videoEventCallback)},SekindoAdUnit.prototype.removeListeners=function(){this.videoElement&&(this.videoElement.removeEventListener("timeupdate",this.videoProgressEventCallback),this.videoElement.removeEventListener("playing",this.videoEventCallback),this.videoElement.removeEventListener("play",this.videoEventCallback),this.videoElement.removeEventListener("ended",this.videoEventCallback),this.videoElement.removeEventListener("click",this.videoEventCallback),this.videoElement.removeEventListener("volumechange",this.videoEventCallback),this.videoElement.removeEventListener("pause",this.videoEventCallback),this.videoElement.removeEventListener("error",this.videoEventCallback),this.videoElement.removeEventListener("skipped",this.videoEventCallback),this.checkAdViewability&&this.checkAdViewability.type&&this.checkAdViewability.destruct(),this.checkAdViewability=null)},SekindoAdUnit.prototype.stopAd=function(e){if(e&&this.removeListeners(),"start"==this.adVideoStatus)if(this.wrapper)this.wrapper.stopAd();else{var t=document.createEvent("Event");t.initEvent("ended",!0,!1),this.videoElement.dispatchEvent(t)}},SekindoAdUnit.prototype.onVideoEvent=function(e){var t=this;if("linear"==this.adType)switch(e.type){case"play":this.videoElement&&this.videoElement.currentTime>1&&this.config.bus.triggerNote("APIadPlay"),this.adSessionRef&&this.adVideoStatus&&this.omidSession.mediaResume();case"playing":if(this.config.adsProcessPaused||this.config.adsProcessHalter.shouldHalt())return this.videoElement&&this.videoElement.parentNode&&(this.videoElement.parentNode.style.display="none"),this.adVideoStatus="null",this.adProccessStatus="complete",this.disposeVideoElement(),this.params.adUnit=null,this.params=null,void this.parent.adUnitReport({type:"complete",val:this});if(this.adSessionRef&&this.omidSession.mediaStart(this.params.linear.duration),"start"!=this.adVideoStatus){var i=this.createPlayerApiAdStartedObject();this.config.bus.triggerNote("adStarted",{type:"linear",rvn:this.rvn,skipTime:this.params.skipTime,controls:this.params.controls}),this.params.track("creativeView",null,null,this.config.pixelDiv,this.config),this.params.track("start",null,null,this.config.pixelDiv,this.config),SekindoUtils.trackSekindoAdEvents("adStart",null,this.params,this.config),this.moatApiRef=this.initMoatTracking(),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoStart",adVolume:t.config.isMuted?0:t.config.volume}),SekindoUtils.trackSekindoAdEvents("impression",null,this.params,this.config),this.adSessionRef&&this.omidSession.impressionOccurred(),this.config.bus.triggerNote("APIadStarted",i),this.config.playerApiId&&this.config.isCustomDebugTracker&&SekindoUtils.firePixel(location.protocol+"//"+this.config.currentServerName+"/live/liveTracker.php?req=rds&cmd=pubimp&imp="+i.impValue+"&fee="+i.servingFee,this.config.pixelDiv,this.config),SekindoUtils.trackSekindoAdEvents("sspImpTrackers",null,this.params,this.config),this.parent.adUnitReport({type:"started",val:this}),this.checkAdViewability.startDurationChecker(),this.params.impressionCount.val+=1,"ima"===this.params.serveType&&(this.parent.parent.adxImpTimestamp=(new Date).getTime()),this.constructProgressEvents(),this.adVideoStatus="start",this.progressStatus="start",this.config.impressionTimeout&&this.config.impressionTimeout>0&&(this.impressionTimer=setTimeout(function(){t.handleVideoError(!0)},this.config.impressionTimeout)),t.parent.parent.currWaterfall.wfDebugLog&&t.parent.parent.currWaterfall.wfDebugLog.markAdAsHavingImps(this.params.trackingEvents.impression[0],t.parent.parent.currWaterfall.debugWFManagerId)}this.videoElement&&this.videoElement.parentNode&&(this.videoElement.parentNode.style.display="block"),this.vpaidSlot&&"translate(0px)"!=this.vpaidSlot.style.transform&&(this.vpaidSlot.style.display="none",this.vpaidSlot.style.zIndex=3,this.vpaidSlot.style.transform="translate(0px)",SekindoUtils.delayRequest(function(){t.config.verticalOrientation&&(t.vpaidSlot.parentElement.style.display="flex",t.vpaidSlot.parentElement.style.alignItems="center"),t.vpaidSlot&&(t.vpaidSlot.style.display="block")},1,t.config.rootWindow)),this.params.reportDebugImpPixelId&&this.params.debugWFManagerId&&this.config.LogRest.performCall("liveVideoWaterfall","SetVastStatus",[this.params.reportDebugImpPixelId,"Impression (from VAST)"],this.params.debugWFManagerId),this.config.bus.triggerNote("onVideoEvent",{type:"playing",val:{player:"adsManager"}});break;case"skipped":this.adSessionRef&&t.omidSession.mediaSkipped(),this.parent.parent.isTriggerAdCompletedNormal=!0,this.config.bus.triggerNote("APIadSkip"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdStopped",adVolume:t.config.isMuted?0:t.config.volume});case"ended":clearTimeout(this.impressionTimer),this.videoElement&&this.videoElement.parentNode&&(this.videoElement.parentNode.style.display="none"),this.config.bus.triggerNote("adCompleted"),this.parent.parent.isTriggerAdCompletedNormal?this.config.bus.triggerNote("adCompletedNormal"):(this.config.bus.triggerNote("adCompletedNextAd"),this.parent.parent.canRequset2ndPreroll=!0),"start"==this.adVideoStatus&&(this.checkAdViewability&&this.checkAdViewability.destruct(),"ended"==e.type&&(this.config.bus.triggerNote("APIadCompleted"),this.params.track("complete",null,null,this.config.pixelDiv,this.config),SekindoUtils.trackSekindoAdEvents("complete",null,this.params,this.config),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoComplete",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaComplete())),this.adVideoStatus="null",this.adProccessStatus="complete",this.disposeVideoElement(),this.params.adUnit=null,this.params=null,this.parent.adUnitReport({type:"complete",val:this});break;case"error":this.handleVideoError(!1);break;case"click":this.params.track("click",null,null,this.config.pixelDiv,this.config),SekindoUtils.trackSekindoAdEvents("clickThrough",null,this.params,this.config),this.adSessionRef&&this.omidSession.mediaAdUserInteraction(),this.config.bus.triggerNote("APIadClickthrough");var n=this.params.linear.getClickThrough();this.config.isAppSdk?this.config.bus.triggerNote("openUrl",[{id:"url",value:n}]):window.open(n,"_blank");break;case"volumechange":var o=!this.videoElement||this.videoElement.muted,a=this.videoElement?this.videoElement.volume:-1;this.config.bus.triggerNote("onVideoEvent",{type:"volumechange",val:{muted:o,volume:a,player:"adsManager"}}),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVolumeChange",adVolume:o?0:a}),this.adSessionRef&&this.omidSession.mediaVolumeChange(o?0:a);break;case"pause":this.config.bus.triggerNote("onVideoEvent",{type:"pause",val:{player:"adsManager"}}),this.videoElement&&this.videoElement.paused&&!this.videoElement.ended&&(this.config.bus.triggerNote("APIadPause"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdPaused",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaPause())}},SekindoAdUnit.prototype.onVpaidEvent=function(e){var t=this,i="string"==typeof e?e:e.type;switch(window.primisLog("[[Ad Unit]] - onVpaidEvent: "+i),i){case"onAdLoaded":if(this.adSafeFrameHandler&&this.adSafeFrameHandler.start(),this.reportsBlocker.onAdLoaded)break;if(this.reportsBlocker.onAdLoaded=!0,this.wrapper.iFrameDoc)for(var n=this.wrapper.iFrameDoc.getElementsByTagName("script"),o=0;o<n.length;o++)if(-1!=n[o].src.indexOf("bundle.clearstream.tv/bundle")){this.wrapper.doNotUseSetAdVolume=!0;break}this.config.adsProcessPaused||this.config.adsProcessHalter.shouldHalt()?(this.disposeVideoElement(),this.disposeVpaidSlot(),this.parent.adUnitReport({type:"fail",val:this,reason:"Ad process pauses"})):(this.config.isMuted&&(this.wrapper.setAdVolume(0),this.videoElement&&(this.videoElement.muted=!0)),this.parent.adUnitReport({type:"startingAd",val:this}),this.wrapper.startAd(),this.reportsBlocker={},this.reportsBlocker.onAdLoaded=!0,this.config.isMuted&&(this.wrapper.setAdVolume(0),this.videoElement&&(this.videoElement.muted=!0)),this.soundsController=new SoundsController(this.config,this.wrapper));break;case"onAdPaused":this.config.bus.triggerNote("onVpaidEvent",{type:"pause",val:{player:"adsManager"}}),this.config.bus.triggerNote("APIadPause"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdPaused",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaPause();break;case"onAdPlaying":this.config.bus.triggerNote("onVpaidEvent",{type:"playing",val:{player:"adsManager"}}),this.config.bus.triggerNote("APIadPlay"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdPlaying",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaResume();break;case"onAdUserAcceptInvitation":case"onAdUserMinimize":break;case"onAdUserClose":if(this.reportsBlocker.onAdUserClose)break;this.reportsBlocker.onAdUserClose=!0,this.config.bus.triggerNote("APIadCompleted"),this.onAdComplete(e.params),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdStopped",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaSkipped();break;case"onAdError":this.disposeVideoElement(),this.disposeVpaidSlot(),"start"==this.adVideoStatus&&(this.config.bus.triggerNote("APIadCompleted"),this.config.bus.triggerNote("adCompleted"),this.parent.parent.isTriggerAdCompletedNormal?this.config.bus.triggerNote("adCompletedNormal"):(this.config.bus.triggerNote("adCompletedNextAd"),this.parent.parent.canRequset2ndPreroll=!0)),this.parent&&this.parent.adUnitReport&&this.parent.adUnitReport({type:"fail",val:this,reason:"ad error/empty"});break;case"onAdSkippableStateChange":case"onAdExpandedChange":case"onAdSizeChange":case"onAdDurationChange":case"onAdRemainingTimeChange":break;case"onAdImpression":if(this.reportsBlocker.onAdImpression)break;this.reportsBlocker.onAdImpression=!0;var a=this.createPlayerApiAdStartedObject();this.adVideoStatus="start",this.params.track("creativeView",null,null,this.config.pixelDiv,this.config),SekindoUtils.trackSekindoAdEvents("impression",e.macro||null,this.params,this.config),this.adSessionRef&&this.omidSession.impressionOccurred(),this.config.bus.triggerNote("APIadStarted",a),this.config.playerApiId&&this.config.isCustomDebugTracker&&SekindoUtils.firePixel(location.protocol+"//"+this.config.currentServerName+"/live/liveTracker.php?req=rds&cmd=pubimp&imp="+a.impValue+"&fee="+a.servingFee,this.config.pixelDiv,this.config),SekindoUtils.trackSekindoAdEvents("sspImpTrackers",null,this.params,this.config),this.checkAdViewability.startDurationChecker(),this.config.bus.triggerNote("changeTitle",""),this.params.impressionCount.val+=1,"ima"===this.params.serveType&&(this.parent.parent.adxImpTimestamp=(new Date).getTime()),this.videoElement&&this.videoElement.parentNode&&(this.videoElement.parentNode.style.display="block"),this.vpaidSlot&&(this.vpaidSlot.style.display="none",this.vpaidSlot.style.zIndex=SekindoUtils.getHighestZIndex(this.config.rootWindow,"div")+1,this.vpaidSlot.style.transform="translate(0px)",SekindoUtils.delayRequest(function(){t.config.verticalOrientation&&(t.vpaidSlot.parentElement.style.display="flex",t.vpaidSlot.parentElement.style.alignItems="center"),t.vpaidSlot&&(t.vpaidSlot.style.display="block")},1,t.config.rootWindow)),this.config.isMuted?(this.wrapper.setAdVolume(0),this.videoElement&&(this.videoElement.muted=!0)):(this.wrapper.setAdVolume(this.config.volume),this.videoElement&&(this.videoElement.muted=!1)),this.videoElement&&this.params.bgColor&&(this.videoElement.style.backgroundColor=this.params.bgColor,this.videoElement.parentNode.style.background=this.params.bgColor),t.parent.parent.currWaterfall.wfDebugLog&&t.parent.parent.currWaterfall.wfDebugLog.markAdAsHavingImps(this.params.trackingEvents.impression[0],t.parent.parent.currWaterfall.debugWFManagerId);break;case"onAdClickThru":this.params.track("click",null,null,this.config.pixelDiv,this.config),SekindoUtils.trackSekindoAdEvents("clickThrough",null,this.params,this.config),this.config.bus.triggerNote("APIadClickthrough"),this.adSessionRef&&this.omidSession.mediaAdUserInteraction();break;case"onAdInteraction":break;case"onAdVideoStart":if(this.moatApiRef=this.initMoatTracking(e.params),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoStart",adVolume:t.config.isMuted?0:t.config.volume}),this.reportsBlocker.onAdVideoStart)break;this.reportsBlocker.onAdVideoStart=!0,this.adVideoStatus="start",this.params.track("start",null,null,this.config.pixelDiv,this.config),SekindoUtils.trackSekindoAdEvents("adStart",null,this.params,this.config),this.adSessionRef&&this.omidSession.mediaStart(this.params.linear.duration),this.videoElement&&this.videoElement.parentNode&&(this.videoElement.parentNode.style.display="block");var s=this.params.skipTime,r=this.params.controls,l=this.params.enableClickLayerProtection;e.params&&e.params.isAdHasSkip&&(s=-1,r=!1,this.config.isDesktop||(r="imaControls",this.wrapper.addSkipBtn&&this.wrapper.addSkipBtn())),this.config.bus.triggerNote("adStarted",{type:"vpaid",rvn:this.rvn,skipTime:s,controls:r,clickLayerProtection:l}),this.parent.adUnitReport({type:"started",val:this}),this.config.bus.triggerNote("onVpaidEvent",{type:"playing",val:{player:"adsManager"}});break;case"onAdVideoFirstQuartile":if(this.reportsBlocker.onAdVideoFirstQuartile)break;this.reportsBlocker.onAdVideoFirstQuartile=!0,this.params.track("firstQuartile",null,null,this.config.pixelDiv,this.config),this.config.bus.triggerNote("APIadFirstQuartile"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoFirstQuartile",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaFirstQuartile();break;case"onAdVideoMidpoint":if(this.reportsBlocker.onAdVideoMidpoint)break;this.reportsBlocker.onAdVideoMidpoint=!0,this.params.track("midpoint",null,null,this.config.pixelDiv,this.config),this.config.bus.triggerNote("APIadMidQuartile"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoMidpoint",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaMidpoint();break;case"onAdVideoThirdQuartile":if(this.reportsBlocker.onAdVideoThirdQuartile)break;this.reportsBlocker.onAdVideoThirdQuartile=!0,this.params.track("thirdQuartile",null,null,this.config.pixelDiv,this.config),this.config.bus.triggerNote("APIadThirdQuartile"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoThirdQuartile",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaThirdQuartile();break;case"onAdVideoComplete":if(this.reportsBlocker.onAdVideoComplete)break;this.reportsBlocker.onAdVideoComplete=!0,this.params.track("complete",null,null,this.config.pixelDiv,this.config),"start"==this.adVideoStatus&&(this.videoCompleteTimeout&&clearTimeout(this.videoCompleteTimeout),this.videoCompleteTimeout=setTimeout(function(){"start"==t.adVideoStatus&&(t.reportsBlocker.onStopAd||(t.reportsBlocker.onStopAd=!0,SekindoUtils.trackSekindoAdEvents("complete",null,t.params,t.config),t.config.bus.triggerNote("APIadCompleted"),t.onAdComplete(e.params)))},1e3),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoComplete",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaComplete()),this.adVideoStatus="null";break;case"onAdLinearChange":break;case"onStartAd":if(this.reportsBlocker.onStartAd)break;this.reportsBlocker.onStartAd=!0,this.config.isMuted&&this.videoElement&&!this.videoElement.muted&&(this.videoElement.muted=!0);break;case"onStopAd":if(this.reportsBlocker.onStopAd)break;this.reportsBlocker.onStopAd=!0,this.config.bus.triggerNote("APIadCompleted"),SekindoUtils.trackSekindoAdEvents("complete",null,this.params,this.config),this.videoCompleteTimeout&&clearTimeout(this.videoCompleteTimeout),
this.onAdComplete(e.params),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdStopped",adVolume:t.config.isMuted?0:t.config.volume}),this.adSessionRef&&this.omidSession.mediaPause();break;case"onSkipAd":if(this.adSessionRef&&this.omidSession.mediaSkipped(),this.reportsBlocker.onSkipAd)break;this.reportsBlocker.onSkipAd=!0,this.config.bus.triggerNote("APIadSkip"),this.config.isLastImpSkipped=!0,this.parent.parent.isTriggerAdCompletedNormal=!0,this.onAdComplete(e.params),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdStopped",adVolume:t.config.isMuted?0:t.config.volume});break;case"onAdVolumeChange":0==e.val?this.params.track("mute",null,null,this.config.pixelDiv,this.config):this.params.track("unmute",null,null,this.config.pixelDiv,this.config);var c=0==e.val,d=e.val;this.config.bus.triggerNote("onVpaidEvent",{type:"volumechange",val:{muted:c,volume:d,player:"adsManager"}}),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVolumeChange",adVolume:c?0:d}),this.adSessionRef&&this.omidSession.mediaVolumeChange(c?0:d)}},SekindoAdUnit.prototype.handleVideoError=function(e){if("start"==this.adVideoStatus){if(!e){if(this.config.isApp)return;clearTimeout(this.impressionTimer)}this.config.bus.triggerNote("APIadCompleted"),this.config.bus.triggerNote("adCompleted"),this.checkAdViewability&&this.checkAdViewability.destruct(),this.parent.parent.isTriggerAdCompletedNormal?this.config.bus.triggerNote("adCompletedNormal"):(this.config.bus.triggerNote("adCompletedNextAd"),this.parent.parent.canRequset2ndPreroll=!0)}this.videoElement&&this.videoElement.parentNode&&(this.videoElement.parentNode.style.display="none"),this.adVideoStatus="null",this.adProccessStatus="complete",this.disposeVideoElement(),this.parent.adUnitReport({type:"fail",val:this,reason:"Video error"})},SekindoAdUnit.prototype.initMoatTracking=function(e){if(!this.isEnabledMoatInit||!this.params.moatPartnerCode)return null;var t={level1:"",level2:String(this.params.campaignName),level3:"",level4:"",slicer1:"",slicer2:""};e&&e.creativeData&&(t.level1=e.creativeData.advertiserName,t.level4=e.creativeData.creativeId);var i=this.vpaidSlot,n=this.videoElement.duration,o=this.params.moatPartnerCode,a=this.videoElement.currentSrc,s=document.createElement("script"),r=[],l={vidIntType:"3",vidIntVersion:"1.0",adData:{ids:t,duration:n,url:a},dispatchEvent:function(e){l.sendEvent?(r&&(r.push(e),e=r,r=!1),l.sendEvent(e)):r&&r.push(e)},clientCallback:void 0};t="_moatApi"+Math.floor(1e8*Math.random());var c,d;try{d=(c=i.ownerDocument).defaultView||c.parentWindow}catch(e){c=document,d=window}return d[t]=l,s.type="text/javascript",i&&i.insertBefore(s,i.childNodes[0]||null),s.src="https://z.moatads.com/"+o+"/moatvideo.js#"+t,l},SekindoAdUnit.prototype.onAdComplete=function(e){"complete"!=this.adProccessStatus&&(this.disposeVideoElement(),this.disposeVpaidSlot(),this.adVideoStatus="null",this.adProccessStatus="complete",this.params.adUnit=null,this.params=null,this.config.bus.triggerNote("adCompleted",{type:this.adType}),this.parent.parent.isTriggerAdCompletedNormal?this.config.bus.triggerNote("adCompletedNormal"):(this.config.bus.triggerNote("adCompletedNextAd"),this.parent.parent.canRequset2ndPreroll=!0),this.wrapper&&this.destructWrapper(),this.config.isMuted&&this.videoElement&&(this.videoElement.muted=!0),this.parent.adUnitReport({type:"complete",val:this}))},SekindoAdUnit.prototype.onUserEvent=function(e){if(this.parent.currAdUnit==this)switch(e.type){case"onVolumeScrabber":this.videoElement&&(this.videoElement.volume=e.value,this.videoElement.muted=!1);break;case"onMute":if(e.value){if(this.videoElement&&(this.videoElement.muted=!0),this.wrapper&&"start"==this.adVideoStatus)try{this.wrapper.setAdVolume(0)}catch(e){}this.config.isMuted=!0}else{if(this.videoElement&&(this.videoElement.muted=!1),this.wrapper&&"start"==this.adVideoStatus)try{this.wrapper.setAdVolume(.2)}catch(e){}this.config.isMuted=!1}this.params&&"start"==this.adVideoStatus&&(e.value?this.params.track("mute",null,null,this.config.pixelDiv,this.config):this.params.track("unmute",null,null,this.config.pixelDiv,this.config));break;case"skipAd":if("slider"==this.config.playerMode&&(this.config.isLastImpSkipped=!0),this.wrapper)this.wrapper.skipAd();else if(this.videoElement){var t=document.createEvent("Event");t.initEvent("skipped",!0,!1),this.videoElement.dispatchEvent(t)}break;case"onPause":if(this.wrapper)try{this.wrapper.pauseAd()}catch(e){}else this.videoElement&&this.videoElement.pause();break;case"onPlay":if(this.wrapper)try{this.wrapper.resumeAd()}catch(e){}else this.videoElement&&this.videoElement.play()}},SekindoAdUnit.prototype.constructProgressEvents=function(){if(this.videoElement.addEventListener("timeupdate",this.videoProgressEventCallback),0!=this.progressArray.length)for(var e=0;e<this.progressArray.length;e++){var t=this.progressArray[e].event,i=null;if(-1!=t.indexOf("%")){var n=t.substr(9);n=Number(n.substr(0,n.length-1)),i=this.videoElement.duration*n/100}else{var o=t.substr(9).split(":");i=60*Number(o[0])*60+60*Number(o[1])+Number(o[2])}this.progressArray[e].eventTime=i}},SekindoAdUnit.prototype.onVideoProgressEvent=function(e){if(this.videoElement&&this.videoElement.src==this.currSrc){Math.round(this.videoElement.duration),Math.round(this.videoElement.currentTime);for(var t=0;t<this.progressArray.length;t++)this.progressArray[t].eventTime&&this.progressArray[t].eventTime<this.videoElement.currentTime&&(this.progressArray[t].eventTime=null,this.params.track(this.progressArray[t].event,null,null,this.config.pixelDiv,this.config));this.reportProgressStatus()}},SekindoAdUnit.prototype.reportProgressStatus=function(){switch(this.progressStatus){case"inited":break;case"start":this.videoElement.currentTime>this.videoElement.duration/4&&(this.progressStatus="firstQuartile",this.params.track("firstQuartile",null,null,this.config.pixelDiv,this.config),this.config.bus.triggerNote("videoAdEvent",{type:"firstQuartile"}),this.config.bus.triggerNote("APIadFirstQuartile"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoFirstQuartile",adVolume:this.config.isMuted?0:this.config.volume}),this.adSessionRef&&this.omidSession.mediaFirstQuartile());break;case"firstQuartile":this.videoElement.currentTime>this.videoElement.duration/2&&(this.progressStatus="midpoint",this.params.track("midpoint",null,null,this.config.pixelDiv,this.config),this.config.bus.triggerNote("videoAdEvent",{type:"midpoint"}),this.config.bus.triggerNote("APIadMidQuartile"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoMidpoint",adVolume:this.config.isMuted?0:this.config.volume}),this.adSessionRef&&this.omidSession.mediaMidpoint());break;case"midpoint":this.videoElement.currentTime>this.videoElement.duration/4*3&&(this.progressStatus="thirdQuartile",this.params.track("thirdQuartile",null,null,this.config.pixelDiv,this.config),this.config.bus.triggerNote("videoAdEvent",{type:"thirdQuartile"}),this.config.bus.triggerNote("APIadThirdQuartile"),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoThirdQuartile",adVolume:this.config.isMuted?0:this.config.volume}),this.adSessionRef&&this.omidSession.mediaThirdQuartile());break;case"thirdQuartile":this.videoElement.currentTime>this.videoElement.duration&&(this.progressStatus="complete",this.config.bus.triggerNote("videoAdEvent",{type:"complete"}),this.moatApiRef&&this.moatApiRef.dispatchEvent({type:"AdVideoComplete",adVolume:this.config.isMuted?0:this.config.volume}),this.adSessionRef&&this.omidSession.mediaComplete())}},SekindoAdUnit.prototype.destruct=function(){if(this.adSessionRef&&this.omidSession.finishAdSession(),this.logIframesService&&this.logIframesService.stop(),this.config&&this.config.isAdOneClick&&(this.config.isAdOneClick=!1),this.adSafeFrameHandler&&this.adSafeFrameHandler.stop(),this.params&&(this.params.adUnit=null),"ima"!==this.adType&&this.removeListeners(),this.vpaidSlot&&this.config.verticalOrientation&&(this.vpaidSlot.parentElement.style.display="block",this.vpaidSlot.parentElement.style.alignItems="unset"),"ima"!=this.adType||this.config.isAppSdk||(this.vpaidSlot.style.transform="translate(-3000px)"),this.busItms)for(var e=0;e<this.busItms.length;e++)this.config.bus.removeBusItm(this.busItms[e]);this.videoCompleteTimeout&&clearTimeout(this.videoCompleteTimeout),this.impressionTimer&&clearTimeout(this.impressionTimer),this.wrapper&&("ima"!==this.adType||this.config.isAppSdk)&&(this.wrapper.destruct(),delete this.wrapper),this.disposeVideoElement(),this.checkAdViewability&&this.checkAdViewability.destruct(),this.soundsController&&this.soundsController.disposeMonitors(),this.disposeVpaidSlot(),SekindoUtils.deleteMe(this)};class IconManager{constructor(e,t){this.iconData=e,this.config=t,this.init()}init(){this.config.bus.addCallBack("adStarted",()=>this.config.layoutManager.layoutAPI({type:"vastIconsDisplay",content:{icondata:this.iconData}})),this.config.bus.addCallBack("adCompleted",()=>this.config.layoutManager.layoutAPI({type:"vastIconsDisplay",content:{icondata:[]}}))}}var VASTAds,VASTAd,VASTLinear,MAX_WRAPPER_DEPTH=5;SekindoTrackingEvents.prototype.copy=function(e){var t=Object.create(SekindoTrackingEvents.prototype);t.events={};for(var i in this.events)this.events.hasOwnProperty(i)&&(t.events[i]=[].concat(this.events[i]));return t.ad=e,t},SekindoTrackingEvents.prototype.finger=function(e){var t=new XMLHttpRequest;t.open("get",e,!0),t.send()},SekindoTrackingEvents.prototype.augment=function(e){for(var t in e.events)e.events.hasOwnProperty(t)&&(this.events[t]?this.events[t]=this.events[t].concat(e.events[t]):this.events[t]=e.events[t])},SekindoTrackingEvents.prototype.addClickTracking=function(e){var t={url:e,event:"click",offset:null};this.events.click?this.events.click.push(t):this.events.click=[t]},SekindoTrackingEvents.prototype.getEventsOfTypes=function(e){var t=[],i=e.indexOf("progress")>-1;for(var n in this.events)this.events.hasOwnProperty(n)&&(e.indexOf(n)>-1||i&&0===n.indexOf("progress-"))&&(t=t.concat(this.events[n]));return t},SekindoTrackingEvents.prototype.track=function(e,t,i,n){if(this.events[e]&&0!==this.events[e].length||"creativeView"!==!e){var o=[].concat(this.events[e]);for(var a in t)if(t.hasOwnProperty(a)){if("UNIVERSALADID"===a&&t[a].length>0){for(var s=[],r=0;r<t[a].length;r++)s.push(encodeURI(t[a][r].idRegistry+" "+t[a][r].id));t[a]=s.join()}t["["+a+"]"]=encodeURIComponent(t[a]),delete t[a]}if("creativeView"===e)for(var l=this.ad;null!==l&&!l.hasSentImpression();){l.impressionSent();for(r=0;r<l.impressions.length;r++)o.push({url:l.impressions[r]});l=l.parentAd}var c=[];for(r=0;r<o.length;r++){for(var d=o[r],p=!1,h=d?d.url:"",u=0;u<c.length;u++)if(h==c[u]){p=!0;break}if(!p){c.push(h);for(var g=""+parseInt(99999999*Math.random(),10);8!==g.length;)g="0"+g;t["[CACHEBUSTING]"]=g;for(m in t)t.hasOwnProperty(m)&&(h=h.replace(m,t[m]));SekindoUtils.firePixel(h,i,n,!0)}}}},SekindoVASTAds.prototype.getAd=function(e,t){var i=null;if(e&&(i=this.getAdWithSequence(1))&&!i.current().isEmpty())return i.current();this.ads||(this.ads=[]);for(var n=0;n<this.ads.length;n++)if(!this.ads[n].hasSequence())if(t){if(this.ads[n].current()&&!this.ads[n].current().isEmpty()&&this.ads[n].currentPodAd&&this.ads[n].currentPodAd.linear&&this.ads[n].currentPodAd.linear.mediaFiles&&this.ads[n].currentPodAd.linear.mediaFiles.length)return this.ads[n].current()}else if(this.ads[n].current()&&!this.ads[n].current().isEmpty())return this.ads[n].current()},SekindoVASTAds.prototype.getAdWithSequence=function(e){for(var t=0;t<this.ads.length;t++)if(this.ads[t].isNumber(e))return this.ads[t];return null},SekindoVASTAd.prototype.getTag=function(e,t){return this.properties.hasOwnProperty(e)?this.properties[e]:t},SekindoVASTAd.prototype.onLoaded=function(e,t){e?(this.pod=e,this.currentPodAd=e.getAd(t),this.currentPodAd&&!this.currentPodAd.isEmpty()&&(this.loaded=!0,this.onAdAvailable&&this.onAdAvailable.call(this,this))):(this.loaded=!0,this.onAdAvailable&&this.onAdAvailable.call(this,this))},SekindoVASTAd.prototype.hasSentImpression=function(){return this.sentImpression},SekindoVASTAd.prototype.impressionSent=function(){this.sentImpression=!0},SekindoVASTAd.prototype.current=function(){return this.currentPodAd},SekindoVASTAd.prototype.isNumber=function(e){return this.sequence===e},SekindoVASTAd.prototype.hasSequence=function(){return null!==this.sequence},SekindoVASTAd.prototype.isEmpty=function(){return!this.hasContent},SekindoVASTAd.prototype.hasData=function(){return this.loaded},SekindoVASTAd.prototype.getNextAd=function(){return this.vast!==this.pod&&(this.currentPodAd=this.currentPodAd.getNextAd(),null!==this.currentPod)?this.currentPodAd.current():this.hasSequence()?this.vast.getAdWithSequence(this.sequence+1).current():null},SekindoVASTAd.prototype.getLinear=function(){return this.linear},SekindoVASTAd.prototype.track=function(e,t,i,n,o){var a={CONTENTPLAYHEAD:this.timecodeToString(t),ASSETURI:i,UNIVERSALADID:this.universalAdId};this.adServingId&&Object.assign(a,{ADSERVINGID:this.adServingId}),this.trackings.track(e,a,n,o)},SekindoVASTAd.prototype.getTrackingPoints=function(){for(var e=this.trackings?this.trackings.getEventsOfTypes(VAST_LINEAR_TRACKING_POINTS):[],t=[],i=0;i<e.length;i++){var n={event:e[i].event,offset:null};switch(e[i].event){case"start":n.offset="start";break;case"firstQuartile":n.offset="25%";break;case"midpoint":n.offset="50%";break;case"thirdQuartile":n.offset="75%";break;case"complete":n.offset="end";break;default:var o=e[i].offset;if(!o)continue;n.offset=SekindoVASTLinear.prototype.timecodeFromString(o)}t.push(n)}return t},SekindoVASTAd.prototype.timecodeToString=function(e){return("0"+parseInt(e/3600,10)+":"+("0"+parseInt(e%3600/60,10))+":"+("0"+e%60)).replace(/(^|:|\.)0(\d{2})/g,"$1$2")},SekindoVASTLinear.prototype.track=function(e,t,i,n,o){this.tracking.track(e,{CONTENTPLAYHEAD:this.timecodeToString(t),ASSETURI:i},n,o)},SekindoVASTLinear.prototype.timecodeToString=function(e){return("0"+parseInt(e/3600,10)+":"+("0"+parseInt(e%3600/60,10))+":"+("0"+e%60)).replace(/(^|:|\.)0(\d{2})/g,"$1$2")},SekindoVASTLinear.prototype.timecodeFromString=function(e){return-1===e.indexOf(":")?e:3600*parseInt(e.substr(0,2),10)+60*parseInt(e.substr(3,2),10)+parseInt(e.substr(6,2),10)},SekindoVASTLinear.prototype.getClickThrough=function(){return this.clickThrough},SekindoVASTLinear.prototype.attribute=function(e,t){if(!this.root.hasAttribute(e))return t;var i=this.root.getAttribute(e);switch(e){case"skipoffset":case"duration":case"offset":case"minSuggestedDuration":i=this.timecodeFromString(i)}return i},SekindoVASTLinear.prototype.getDuration=function(){return this.duration},SekindoVASTLinear.prototype.copy=function(e,t){return new SekindoVASTLinear(e,this.root,t)},SekindoVASTLinear.prototype.augment=function(e){this.duration=e.duration||this.duration,this.mediaFiles=e.mediaFiles.slice(0)||this.mediaFiles.slice(0),this.tracking.augment(e.tracking),this.clickThrough=e.clickThrough||this.clickThrough,this.adParameters=e.adParameters||this.adParameters},SekindoVASTLinear.prototype.getAllMedias=function(){return this.mediaFiles},SekindoVASTLinear.prototype.getInteractiveCreativeFiles=function(){return this.interactiveCreativeFiles},SekindoVASTLinear.prototype.getBestMedia=function(e,t){for(var i=Number.POSITIVE_INFINITY,n=-1,o=0;o<e.length;o++){var a=e[o],s=Math.sqrt(Math.pow(t.width-a.width,2)+Math.pow(t.height-a.height,2));if(s<i)i=s,n=o;else if(s===i){var r=this.mediaFiles[n],l=r.bitrate||r.maxBitrate,c=a.bitrate||a.maxBitrate;c&&!l?n=o:t.bitrate&&l&&c?Math.abs(c-t.bitrate)<Math.abs(l-t.bitrate)&&(n=o):c>l&&(n=o)}}return-1===n?null:e[n]};var VAST_LINEAR_TRACKING_POINTS=["start","firstQuartile","midpoint","thirdQuartile","complete","progress"];SekindoVASTLinear.prototype.getTrackingPoints=function(){for(var e=this.tracking?this.tracking.getEventsOfTypes(VAST_LINEAR_TRACKING_POINTS):[],t=[],i=0;i<e.length;i++){var n={event:e[i].event,offset:null};switch(e[i].event){case"start":n.offset="start";break;case"firstQuartile":n.offset="25%";break;case"midpoint":n.offset="50%";break;case"thirdQuartile":n.offset="75%";break;case"complete":n.offset="end";break;default:var o=e[i].offset;if(!o)continue;n.offset=SekindoVASTLinear.prototype.timecodeFromString(o)}t.push(n)}return t};var MIN_PAUSED_TIME_FOR_PREROLL=30;SekindoPlaylistManager.prototype.removeViewabilityCallback=function(){this.config.bus.removeBusItm(this.viewabilityCallbackId)},SekindoPlaylistManager.prototype.addViewabilityCallback=function(){var e=this;this.viewabilityCallbackId=this.config.bus.addCallBack("onViewabilityChange",function(t){t.type==e.config.playerInViewPrc&&(!t.status&&e.allowPlaying&&e.config.isAppSdk?(e.pausePlayingContent(!0),e.playerSimulator.play()):e.config.playerTemplateData.isPauseNonViewable&&!t.status&&e.allowPlaying&&!e.config.soundEnabledByUser?(e.pausePlayingContent(!0),e.playerSimulator.play()):(e.config.playerTemplateData.isPauseNonViewable||e.config.soundEnabledByUser)&&t.status?(e.playerSimulator.paused||"3"==e.config.isAutoPlay||"4"==e.config.isAutoPlay||e.playerSimulator.stop(),e.allowPlaying&&e.resumePlayingContent(this.forceSimulator)):t.status&&"2"!=e.config.isAutoPlay&&"3"!=e.config.isAutoPlay&&"4"!=e.config.isAutoPlay&&(e.playerSimulator.stop(),e.allowPlaying&&e.resumePlaylist()))})},SekindoPlaylistManager.prototype.fireContentPixel=function(e){if(!this.config.adIsPlaying){if(this.pixelIndex!=this.index)this.contentPixelFiredMap[this.index]={},this.pixelIndex=this.index;else if(void 0!==this.contentPixelFiredMap[this.index][e.contentPixelName+(e.fileId?e.fileId:"")])return;this.contentPixelFiredMap[this.index][e.contentPixelName+(e.fileId?e.fileId:"")]=!0;var t=this.config[e.contentPixelName];if(t&&SekindoUtils.validURL(t)){var i=this.config.videoWidth||this.config.width,n=this.config.videoHeight||this.config.height,o=-1!=["contentClickPixel","contentFullScreenPixel","contentPlaylistClicksPixel","contentScrubberPixel","contentVolChangePixel","contentLikePixel","contentAutoSkipStayPixel","contentAutoSkipNextPixel","contentPausePixel","contentVoidClickPixel"].indexOf(e.contentPixelName);t=(t=(t=(t=(t=t.replace(/&x=([0-9]+)/g,"&x="+i)).replace(/&y=([0-9]+)/g,"&y="+n)).replace(/&mediaPlayListId=0/g,"&mediaPlayListId="+(this.playListId||"0"))).replace(/&mediaListId=0/g,"&mediaListId="+(this.listId||"0"))).replace(/&contentFileId=0/g,"&contentFileId="+(e.fileId||this.fileId||"0")),t+="&contentMatchType="+this.contentMatchType,t+="&isExcludeFromOpt="+(!0===this.isFirstContent?"0":"1"),SekindoServices.fullscreen.isFullscreen&&"contentFullScreenPixel"!=e.contentPixelName&&(t+="&playerDisplayState=fullscreen"),o&&!this.isUserEngaged?(this.isUserEngaged=!0,this.contentPixelFiredMap[this.index]._contentEngagementUniqPixel=!0,t+="&contentEventType=player"):o&&void 0===this.contentPixelFiredMap[this.index]._contentEngagementUniqPixel&&(this.contentPixelFiredMap[this.index]._contentEngagementUniqPixel=!0,t+="&contentEventType=content"),SekindoUtils.firePixel(t,this.config.pixelDiv,this.config)}}},SekindoPlaylistManager.prototype.generateVideoElement=function(){this.videoElement=new SekindoVideoManager(this.config),this.videoElement.muted=0===parseInt(this.config.isAutoSound),this.videoElement.volume=this.config.volume,this.config.bus.triggerNote("addChild",{visual:this.videoElement,destiny:"video"}),this.addListeners(),this.playerSimulator||(this.playerSimulator=new SekindoPlayerSimulator(this.uniqueID,this.config))},SekindoPlaylistManager.prototype.loadNextContent=function(e,t){this.isFirstContent&&(this.isFirstContent=0==e),!this.contentPlayList||this.contentPlayList.length<=0||(this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status||t?(this.playerSimulator&&!this.playerSimulator.paused&&this.playerSimulator.stop(),this.allowPlaying&&(this.initNextContent(e),this.isCurrentlyPlaying=!0,this.videoElement.play(),this.config.bus.triggerNote("contentStarted",e))):this.allowPlaying&&this.playerSimulator.play())},SekindoPlaylistManager.prototype.initNextContent=function(e){this.index=e,this.setContentParams(e),this.config.videoTitle=this.videoTitle=this.contentPlayList[e].title,this.currSrc=this.contentPlayList[e],this.videoElement.src==this.currSrc&&1!=this.contentPlayList.length||(this.videoElement.src=this.currSrc,this.isContentPlaying=!1,this.currFileId=null,this.pixelIndex=null),this.videoElement.videoTitle=this.contentPlayList[e].title,this.videoElement.style.display="block";var t=this.contentPlayList[e].clkUrl;if(this.fileId=this.contentPlayList[e].fileId,this.playListId=this.contentPlayList[e].playListId,this.listId=this.contentPlayList[e].listId,this.contentMatchType=this.contentPlayList[e].contentMatch,t&&/^https?:/.test(t))try{this.config.clkUrl=decodeURI(t)}catch(o){this.config.primisConsoleLog("[[Playlist Manager]] - Bad clickUrl: "+t),this.config.clkUrl=null}else this.config.clkUrl=null;if(this.config.isNativeTemplate&&this.config.nativeTemplateElements){if(this.config.nativeTemplateElements.native_title)if(this.config.isAmpStickyAd){var i=this.contentPlayList[e].title;SekindoUtils.cropAmpTitleText(this.config,i)}else this.config.nativeTemplateElements.native_title.innerText=this.contentPlayList[e].title;if(this.config.nativeTemplateElements.native_desc&&(this.config.nativeTemplateElements.native_desc.innerText=this.contentPlayList[e].desc),this.config.nativeTemplateElements.native_vid_link)for(var n=0;n<this.config.nativeTemplateElements.native_vid_link.length;n++){var o=this.config.nativeTemplateElements.native_vid_link[n];"A"==o.tagName&&(o.href=null!=this.config.clkUrl?this.config.clkUrl:""),o.getAttribute("title")&&o.setAttribute("title",this.contentPlayList[e].title)}}this.config.currContentIndex=e,this.config.bus.triggerNote("onNextContentInited",{index:e,content:this.contentPlayList[e]}),this.config.bus.triggerNote("playlistDataUpdated",this.contentPlayList[e])},SekindoPlayerSimulator.prototype.play=function(){var e=this;this.mobileVisibilityLock||(this.paused=!1,this.currDummyTime=Date.now()-this.currDummyProgress,this.simulatePlayingInterval&&clearInterval(this.simulatePlayingInterval),this.simulatePlayingInterval=setInterval(function(){e.currDummyProgress=Date.now()-e.currDummyTime;var t=e.currDummyProgress/1e3;if(t>e.config.playerSimulatorCycleSec)return e.stop(),void e.config.bus.triggerNote("contentEnded",!0);e.config.bus.triggerNote("onVideoProgress",{currTime:t,duration:60,loaded:60,isSimulator:!0})},100))},SekindoPlayerSimulator.prototype.pause=function(){this.paused=!0,this.simulatePlayingInterval&&clearInterval(this.simulatePlayingInterval),this.simulatePlayingInterval=null},SekindoPlayerSimulator.prototype.stop=function(){this.paused=!0,this.simulatePlayingInterval&&clearInterval(this.simulatePlayingInterval),this.simulatePlayingInterval=null,this.currDummyProgress=0},SekindoPlaylistManager.prototype.setContentParams=function(e){var t=this;this.config.bus.setParam("contentSyndicatorId",function(){return t.contentPlayList[e].syndicatorId}),this.config.bus.setParam("contentFolderId",function(){return t.contentPlayList[e].folderId}),this.config.bus.setParam("contentListId",function(){return t.contentPlayList[e].listId}),this.config.bus.setParam("contentKeywords",function(){return t.contentPlayList[e].keywords}),this.config.bus.setParam("contentIabCategories",function(){return t.contentPlayList[e].iab_categories}),this.config.bus.setParam("contentRtbCategories",function(){return t.contentPlayList[e].rtb_categories}),this.config.bus.setParam("contentTitle",function(){return t.contentPlayList[e].title}),this.config.bus.setParam("contentDuration",function(){return t.contentPlayList[e].duration}),this.config.bus.setParam("contentIrisContext",function(){return t.contentPlayList[e].irisInfo}),this.config.bus.setParam("contentRtbCatArr",function(){var i=t.contentPlayList[e].rtb_categories;return i&&i.length>0?i.split(","):[]})},SekindoPlaylistManager.prototype.loadSwitchedContentBG=function(){this.setContentParams(this.config.nextContentIndex),this.loadNextContentBG(this.config.nextContentIndex)},SekindoPlaylistManager.prototype.loadNextContentBG=function(e){var t=this;if(this.contentPlayList&&!(this.contentPlayList.length<=0)){this.bgImg&&this.bgImg.parentNode&&this.bgImg.parentNode.removeChild(this.bgImg);var i;i=this.contentPlayList[e].bgImg&&SekindoUtils.validURL(decodeURI(this.contentPlayList[e].bgImg))?this.contentPlayList[e].bgImg:this.config.absolutePath+"/content/video/splayer/assets/bigPlayBtn.jpg";var n=this.config.videoIFrameDoc.createElement("img");n.src=decodeURI(i);var o=this.config.videoIFrameDoc.createElement("div");o.appendChild(n),o.style.position="absolute",o.style.top="50%",o.style.left="50%",o.style.transform="translate(-50%, -50%) scale(1, 1)",o.style.zIndex=-1,o.style.visibility="hidden",this.bgImg=o,this.setContentParams(e);var a=this.contentPlayList[e].clkUrl;if(a&&/^https?:/.test(a))try{this.config.clkUrl=decodeURI(a)}catch(e){this.config.primisConsoleLog("[[Playlist Manager]] - Bad clickUrl: "+a),this.config.clkUrl=null}else this.config.clkUrl=null;n.addEventListener("load",function(){!function(){var a,s,r=t.config.videoWidth||t.config.width,l=t.config.videoHeight||t.config.height,c=o.orientWCalc=n.width>n.height?16/9:9/16,d=o.orientHCalc=n.width<n.height?16/9:9/16;if(r/n.width<l/n.height?(a=l/350*c,s=l/400):(a=r/350,s=r/400*d),o.width=350,o.height=400,o.tWidth=n.width,o.tHeight=n.height,o.style.width="350px",o.style.height="400px",o.removeChild(n),o.style.display="flex",o.style.transform="translate(-50%, -50%) scale("+a+","+s+")",o.style.webkitTransform="translate(-50%, -50%) scale("+a+","+s+")",o.style.zIndex=3,0==e||!t.config.isUsePreloader)for(var p=0;p<7;p++)for(var h=0;h<8;h++){var u=50*-p,g=50*-h,f=t.config.videoIFrameDoc.createElement("div");f.style.width="51px",f.style.height="51px",f.style.backgroundImage="url("+decodeURI(i)+")",f.style.backgroundRepeat="no-repeat",f.style.backgroundSize="350px 400px",f.style.backgroundPosition=u+"px "+g+"px",f.style.position="absolute",f.style.left=-u+"px",f.style.top=-g+"px",o.appendChild(f)}0!=e&&t.config.isUsePreloader||(o.style.visibility="visible")}()}),n.addEventListener("error",function(){t.isImgError?n.parentNode.removeChild(n):(t.isImgError=!0,i=t.config.absolutePath+"/content/video/splayer/assets/bigPlayBtn.jpg",n.src=decodeURI(i))}),this.config.bus.triggerNote("changeTitle",this.contentPlayList[e].title),this.bgImg.addEventListener("click",function(e){!function(e){e.stopPropagation(),"3"!=t.config.isAutoPlay&&(t.config.bus.triggerNote("onUserEvent",{type:"onPlay"}),t.bgImg&&(t.bgImg.style.display="none"))}(e)},!0,!1),this.config.bus.triggerNote("addChild",{visual:this.bgImg,destiny:"video"}),window.primisLog("[[Playlist Manager]] - Prepare next content background")}},SekindoPlaylistManager.prototype.addListeners=function(){var e=this;this.videoEventCallback=this.onVideoEvent.bind(this),this.videoElement.addEventListener("ended",this.videoEventCallback),this.videoElement.addEventListener("play",this.videoEventCallback),this.videoElement.addEventListener("click",this.videoEventCallback),this.videoElement.addEventListener("playing",this.videoEventCallback),this.videoElement.addEventListener("pause",this.videoEventCallback),this.videoElement.addEventListener("error",this.videoEventCallback),this.videoElement.addEventListener("progress",this.videoEventCallback),this.videoElement.addEventListener("timeupdate",this.videoEventCallback),this.videoElement.addEventListener("volumechange",this.videoEventCallback),this.config.bus.addCallBack("resumePlaylist",function(t){e.resumePlaylist(t)}),this.config.bus.addCallBack("pausePlaylist",function(t){e.pausePlaylist(t)}),this.config.bus.addCallBack("prepareNextContent",function(){e.prepareNextContent(e.config.nextContentIndex)}),this.config.bus.addCallBack("stopSimulator",function(){e.playerSimulator.stop()}),this.config.bus.addCallBack("userSwitchContent",function(t){e.initNextContent(e.config.nextContentIndex),e.config.bus.triggerNote("nextContentInited",e.config.nextContentIndex),t&&(e.config.bus.triggerNote("fireContentPixel",{contentPixelName:t}),e.config.bus.triggerNote("APIvideoSkip")),e.removeViewabilityCallback()}),this.config.bus.addCallBack("onSwitchContent",function(){e.index=e.config.nextContentIndex,e.loadNextContent(e.index),e.addViewabilityCallback()}),this.config.bus.addCallBack("onPlayerResize",function(t){e.onPlayerResize(t)}),this.config.bus.addCallBack("onUserEvent",function(t){e.onUserEvent(t)})},SekindoPlaylistManager.prototype.onPlayerResize=function(e){var t=e.videoWidth||e.width,i=e.videoHeight||e.height;if(this.bgImg){var n,o,a=this.bgImg.width,s=this.bgImg.height;t/this.bgImg.tWidth<i/this.bgImg.tHeight?(n=i/a*this.bgImg.orientWCalc,o=i/s):(n=t/a,o=t/s*this.bgImg.orientHCalc),this.bgImg.style.transform="translate(-50%, -50%) scale("+n+","+o+")",this.bgImg.style.webkitTransform="translate(-50%, -50%) scale("+n+","+o+")"}},SekindoPlaylistManager.prototype.onTimeScrabber=function(e){window.primisLog("[[Playlist Manager]] - onTimeScrabber"),"block"==this.videoElement.style.display&&(this.videoElement.currentTime=e*this.videoElement.duration)},SekindoPlaylistManager.prototype.onVideoLike=function(){1!=this.contentPlayList[this.config.currContentIndex].isLiked&&(this.contentPlayList[this.config.currContentIndex].isLiked=1,this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentLikePixel"}),this.config.bus.triggerNote("playlistDataUpdated",this.contentPlayList[this.config.currContentIndex]))},SekindoPlaylistManager.prototype.pausePlaylist=function(e){this.allowPlaying=!1,e||this.playerSimulator&&!this.playerSimulator.paused?this.playerSimulator.pause():this.pausePlayingContent()},SekindoPlaylistManager.prototype.prepareNextContent=function(e){!this.playerSimulator||this.playerSimulator.paused?(this.pausePlayingContent(),this.initNextContent(e)):this.playerSimulator.pause()},SekindoPlaylistManager.prototype.pausePlayingContent=function(e){this.videoElement&&this.videoElement.src&&(3!=this.videoElement.networkState||this.config.isAppSdk)&&!this.videoElement.paused&&(e&&(this.pausedOnNonView=!0),window.primisLog("[[Playlist Manager]] - pausePlayingContent"),this.videoElement.pause()),this.bgImg&&(this.bgImg.style.display="none")},SekindoPlaylistManager.prototype.resumePlaylist=function(e){window.primisLog("[[Playlist Manager]]- resumePlaylist"),e||(e={}),this.config.isFirstViewablePreroll&&this.config.isRealPrerollEnabled&&"0"!=this.config.isAutoPlay&&(e.forceSimulator=!0),e.forceSimulator||(this.allowPlaying=!0),this.isPlayingMode&&!this.mobileVisibilityLock&&(e.forceSimulator||this.playerSimulator&&this.playerSimulator.paused&&(this.config.playerTemplateData.isPauseNonViewable?!this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status&&!this.config.soundEnabledByUser:this.playerSimulator.currDummyProgress>0)?this.playerSimulator.play():this.resumePlayingContent(e.userClick))},SekindoPlaylistManager.prototype.resumePlayingContent=function(e){if(!this.config.playerTemplateData.isPauseNonViewable||this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status||this.config.soundEnabledByUser){this.allowPlaying=!0,this.isCurrentlyPlaying&&this.videoElement.src&&3!=this.videoElement.networkState?(window.primisLog("[[Playlist Manager]]- resumePlayingContent"),this.videoElement.play()):this.loadNextContent(this.index,e),this.videoElement.style.display="block",this.videoElement.videoTitle=this.videoTitle,this.config.bus.triggerNote("changeTitle",this.videoTitle),this.bgImg&&(this.bgImg.style.display="none"),window.primisLog("[[Playlist Manager]] - start playing content")}},SekindoPlaylistManager.prototype.onVideoEvent=function(e){var t=this;switch("progress"!=e.type&&"timeupdate"!=e.type&&window.primisLog("[[Playlist Manager]] - onVideoEvent - "+e.type),e.type){case"error":if(this.isContentPlaying&&this.config.isAppSdk)return;if(this.currFileId=null,this.index++,this.isCurrentlyPlaying=!1,this.index>=this.contentPlayList.length){this.playlistMultiplierIndex++,this.playlistMultiplierIndex>=this.config.playlistMultiplier&&(this.playlistMultiplierIndex=0),this.index=0,this.fileId=this.contentPlayList[0]?this.contentPlayList[0].fileId:"0",this.onErrorTimeout=setTimeout(function(){t.loadNextContent(t.index)},3e3);break}this.loadNextContent(this.index);break;case"play":window.primisLog("[[Playlist Manager]][[Hls]] - Current Src Type is - "+SekindoUtils.getVidFileType(this.videoElement.currentSrc)),this.videoElement.src==this.currSrc&&this.config.bus.triggerNote("changeTitle",this.videoTitle),this.config.bus.triggerNote("onVideoEvent",{type:"play",val:{player:"playlistManager"}});case"volumechange":
var i=!this.videoElement||this.videoElement.muted,n=this.videoElement?this.videoElement.volume:-1;t.config.bus.triggerNote("onVideoEvent",{type:"volumechange",val:{muted:i,volume:n,player:"playlistManager"}}),(!i&&t.prevVolVal!==n||i&&0!==t.prevVolVal)&&(t.prevVolVal=i?0:n,t.config.bus.triggerNote("APIvolumeChange",t.prevVolVal));break;case"progress":case"timeupdate":try{this.config.bus.triggerNote("onVideoProgress",{currTime:this.videoElement.currentTime,duration:this.videoElement.duration,loaded:this.videoElement.buffered.end(this.videoElement.buffered.length-1),player:"playlistManager"})}catch(e){}this.videoElement.currentTime>=30&&this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentCompletePixel"});break;case"pause":this.isContentPlaying=!1,this.pausedOnNonView||this.config.bus.triggerNote("onVideoEvent",{type:"pause",val:{player:"playlistManager"}}),this.pausedOnNonView=!1;break;case"playing":if(this.isContentPlaying=!0,this.bgImg&&(this.bgImg.style.display="none"),this.currFileId!=this.fileId){this.currFileId=this.fileId,this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentStartPixel"});var o=SekindoUtils.getApiObjectForEvent("videoStart");this.contentPlayList[this.config.currContentIndex]&&(o.title=this.contentPlayList[this.config.currContentIndex].title,o.duration=this.contentPlayList[this.config.currContentIndex].duration),this.config.bus.triggerNote("APIvideoStart",o),window.primisLog("[[Content Pixel]] - 16. start playing content")}this.config.bus.triggerNote("changeTitle",this.videoTitle),this.config.bus.triggerNote("onVideoEvent",{type:"playing",val:{player:"playlistManager"}});break;case"ended":this.currFileId=null,this.isContentPlaying=!1,this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentCompletePixel"}),this.config.bus.triggerNote("fireContentPixel",{contentPixelName:"contentFullCompletePixel"}),this.isCurrentlyPlaying=!1,this.index++,this.index>=this.contentPlayList.length&&(this.playlistMultiplierIndex++,this.playlistMultiplierIndex>=this.config.playlistMultiplier&&(this.playlistMultiplierIndex=0),this.index=0),this.fileId=this.contentPlayList[this.index]?this.contentPlayList[this.index].fileId:"0",0==this.index&&0==this.playlistMultiplierIndex?(this.videoElement.style.display="none",this.allowPlaying=!1,this.config.bus.triggerNote("playlistEnded",!0)):(this.videoElement.style.display="none",this.config.bus.triggerNote("contentEnded",{player:"playlistManager"})),this.config.bus.triggerNote("APIvideoEnd")}},SekindoPlaylistManager.prototype.onUserEvent=function(e){switch(e.type){case"onVolumeScrabber":this.videoElement.volume=e.value,this.videoElement.muted=!1,this.config.isMuted=!1,this.config.volume=e.value;break;case"onMute":e.value?(this.videoElement.muted=!0,this.config.isMuted=!0):(this.videoElement.muted=!1,this.config.isMuted=!1);break;case"timeScrabber":this.onTimeScrabber(e.value);break;case"onVideoLike":this.onVideoLike();break;case"skipProgress":this.onSkipProgress(e.value);break;case"onPlay":this.isPlayingMode=!0,this.config.bus.triggerNote("hideAutoSkipContent",!0),this.loadFirstContentTimeout&&clearTimeout(this.loadFirstContentTimeout);break;case"onPause":this.isPlayingMode=!1}},SekindoPlaylistManager.prototype.onSkipProgress=function(e){window.primisLog("[[Playlist Manager]] - onSkipProgress"),"block"==this.videoElement.style.display&&(this.videoElement.currentTime+=e)},SekindoPlaylistManager.prototype.destruct=function(){clearInterval(this.viwabilityInterval),clearInterval(this.jsActivityInterval),clearTimeout(this.onErrorTimeout),this.loadFirstContentTimeout&&clearTimeout(this.loadFirstContentTimeout),this.videoElement.removeEventListener("ended",this.videoEventCallback),this.videoElement.removeEventListener("play",this.videoEventCallback),this.videoElement.removeEventListener("click",this.videoEventCallback),this.videoElement.removeEventListener("playing",this.videoEventCallback),this.videoElement.removeEventListener("pause",this.videoEventCallback),this.videoElement.removeEventListener("error",this.videoEventCallback),this.videoElement.removeEventListener("progress",this.videoEventCallback),this.videoElement.removeEventListener("timeupdate",this.videoEventCallback),this.videoElement.removeEventListener("volumechange",this.videoEventCallback),this.iosVidWrapper&&this.iosVidWrapper.destruct(),delete this.videoElement},SekindoVPAIDWrapper=function(e,t,i){function n(){return!0}function o(){a.VPAIDCreative=l.getVPAIDAd,a.creative=a.VPAIDCreative();var e={};if(e.AdParameters=a.params.creativeData,a.params.creativeData=e,a.checkVPAIDInterface(a.creative)){a.setCallbacksForCreative(),a.config.blacklistIframe&&a.config.blacklistIframe.length&&(a.amazoneAdCheckInterval=setInterval(function(){for(var e=SekindoUtils.getElementsInObj(a.config.videoIFrameDiv,["iframe"]),t=0;t<e.length;t++){for(var i=e[t],n=!1,o=0;o<a.config.blacklistIframe.length;o++)if(-1!=i.src.indexOf(a.config.blacklistIframe[o])){n=!0;break}if(i.src&&n)return clearInterval(a.amazoneAdCheckInterval),i.parentNode.removeChild(i),void a.onAdError("amazoneAd")}},100)),a.config.blockVpaidjsYahoo&&(a.yahooAdCheckInterval=setInterval(function(){for(var e=SekindoUtils.getElementsInObj(a.config.videoIFrameDiv,["script"]),t=0;t<e.length;t++){var i=e[t];if(i.src&&-1!=i.src.indexOf("vpaid.kube.viralgains.com"))return clearInterval(a.yahooAdCheckInterval),i.parentNode.removeChild(i),void a.onAdError("amazoneAd")}},100));var t=a.config.videoWidth||a.config.width,i=a.config.adVideoHeight||a.config.height;"chrome"!=a.config.clientInfo.browser&&"edgeChromium"!=a.config.clientInfo.browser||(a.vpaidHeavyAdObserver=new SekindoServices.heavyAdObserver("vpaid",a.iframe.contentWindow,a.config,function(e){a.onAdError()})),a.initAd(t,i,"normal",766,a.params.creativeData,a.params.environmentVars)}else a.onAdError("vpaidInterfaceNotConformed")}var a=this;this.config=e,this.params=t,this.parent=i,this.uniqueID=this.config.uniqueID,this.doNotUseSetAdVolume=!1,this.adSkipped=!1,this.killTimeOut&&clearTimeout(this.killTimeOut),this.params.killTime&&this.params.killTime>0&&(this.killTimeOut=setTimeout(function(){a.onAdError("killTimeOut")},this.params.killTime));var s=a.config.videoWidth||a.config.width,r=a.config.adVideoHeight||a.config.height;this.iframe=this.config.videoIFrameDoc.createElement("iframe"),this.iframe.style.border="none",this.iframe.frameborder="0",this.iframe.allowtransparency="true",this.iframe.hspace="0",this.iframe.vspace="0",this.iframe.style.margin="0px",this.iframe.scrolling="no",this.iframe.style.position="absolute",this.iframe.style.top="0px",this.iframe.style.left="0px",this.iframe.style.width=s+"px",this.iframe.style.height=r+"px",this.iframe.id="sekindoVpaidIframe",this.VPAIDCreative=null,this.params.environmentVars.slot.appendChild(this.iframe);var l=this.iframe.contentWindow||this.iframe.contentDocument.defaultView;this.iFrameDoc=l.document||this.iframe.contentDocument,this.iFrameDoc.open(),this.iFrameDoc.close(),this.config.gdprInfo.setTCF2ApiForIframeWindow(l);var c=this.iFrameDoc.createElement("base");c.href=this.config.dummyBaseHref,this.iFrameDoc.head.appendChild(c),l.Element.prototype.scrollIntoView=function(){};var d=this.iFrameDoc.createElement("div");this.iFrameDoc.body.appendChild(d),this.iFrameDoc.body.style.margin="0px",this.params.environmentVars.slot=d,l.onerror=n,l.console&&(l.console.error=n),this.readyStateCheckInterval&&clearInterval(this.readyStateCheckInterval),this.readyStateCheckInterval=setInterval(function(){"complete"===a.iFrameDoc.readyState&&(clearInterval(a.readyStateCheckInterval),function(){var e=a.iFrameDoc.getElementsByTagName("head")[0];a.script=a.iFrameDoc.createElement("script"),a.script.type="text/javascript",a.script.src=a.params.VPAIDUrl,a.script.onload=o,a.script.onreadystatechange=function(){"complete"==a.readyState&&o()},e.appendChild(a.script)}())},10)},SekindoVPAIDWrapper.prototype.checkVPAIDInterface=function(e){return!!(e&&e.initAd&&"function"==typeof e.initAd&&e.startAd&&"function"==typeof e.startAd&&e.stopAd&&"function"==typeof e.stopAd&&e.skipAd&&"function"==typeof e.skipAd&&e.resizeAd&&"function"==typeof e.resizeAd&&e.pauseAd&&"function"==typeof e.pauseAd&&e.resumeAd&&"function"==typeof e.resumeAd&&e.expandAd&&"function"==typeof e.expandAd&&e.collapseAd&&"function"==typeof e.collapseAd&&e.subscribe&&"function"==typeof e.subscribe&&e.unsubscribe&&"function"==typeof e.unsubscribe)},SekindoVPAIDWrapper.prototype.setCallbacksForCreative=function(){var e={AdStarted:this.onStartAd,AdStopped:this.onStopAd,AdSkipped:this.onSkipAd,AdLoaded:this.onAdLoaded,AdLinearChange:this.onAdLinearChange,AdSizeChange:this.onAdSizeChange,AdExpandedChange:this.onAdExpandedChange,AdSkippableStateChange:this.onAdSkippableStateChange,AdDurationChange:this.onAdDurationChange,AdRemainingTimeChange:this.onAdRemainingTimeChange,AdVolumeChange:this.onAdVolumeChange,AdImpression:this.onAdImpression,AdClickThru:this.onAdClickThru,AdInteraction:this.onAdInteraction,AdVideoStart:this.onAdVideoStart,AdVideoFirstQuartile:this.onAdVideoFirstQuartile,AdVideoMidpoint:this.onAdVideoMidpoint,AdVideoThirdQuartile:this.onAdVideoThirdQuartile,AdVideoComplete:this.onAdVideoComplete,AdUserAcceptInvitation:this.onAdUserAcceptInvitation,AdUserMinimize:this.onAdUserMinimize,AdUserClose:this.onAdUserClose,AdPaused:this.onAdPaused,AdPlaying:this.onAdPlaying,AdError:this.onAdError,AdLog:this.onAdLog};for(var t in e)this.creative.subscribe(e[t],String(t),this)},SekindoVPAIDWrapper.prototype.initAd=function(e,t,i,n,o,a){this.params.properties.AdTitle&&-1!=this.params.properties.AdTitle.indexOf("EyeView")&&(this.doNotUseSetAdVolume=!0),a.videoSlotCanAutoPlay=!0,this.creative.initAd(e,t,i,n,o,a)},SekindoVPAIDWrapper.prototype.onAdPaused=function(){this.parent&&this.parent.onVpaidEvent("onAdPaused")},SekindoVPAIDWrapper.prototype.onAdPlaying=function(){this.parent&&this.parent.onVpaidEvent("onAdPlaying")},SekindoVPAIDWrapper.prototype.onAdError=function(e){try{if(-1!=e.indexOf("Event:AdImpression"))return}catch(e){}this.parent&&this.parent.onVpaidEvent({type:"onAdError"})},SekindoVPAIDWrapper.prototype.onAdLog=function(e){},SekindoVPAIDWrapper.prototype.onAdUserAcceptInvitation=function(){this.parent&&this.parent.onVpaidEvent("onAdUserAcceptInvitation")},SekindoVPAIDWrapper.prototype.onAdUserMinimize=function(){this.parent&&this.parent.onVpaidEvent("onAdUserMinimize")},SekindoVPAIDWrapper.prototype.onAdUserClose=function(){this.parent&&this.parent.onVpaidEvent({type:"onAdUserClose"})},SekindoVPAIDWrapper.prototype.onAdSkippableStateChange=function(){this.parent&&this.parent.onVpaidEvent({type:"onAdSkippableStateChange",val:this.creative.getAdSkippableState()})},SekindoVPAIDWrapper.prototype.onAdExpandedChange=function(){this.parent&&this.parent.onVpaidEvent({type:"onAdExpandedChange",val:this.creative.getAdExpanded()})},SekindoVPAIDWrapper.prototype.getAdExpanded=function(){return this.creative.getAdExpanded()},SekindoVPAIDWrapper.prototype.getAdSkippableState=function(){return this.creative.getAdSkippableState()},SekindoVPAIDWrapper.prototype.onAdSizeChange=function(){this.parent&&this.parent.onVpaidEvent({type:"onAdSizeChange",width:this.creative.getAdWidth(),height:this.creative.getAdHeight()})},SekindoVPAIDWrapper.prototype.onAdDurationChange=function(){this.parent&&this.parent.onVpaidEvent({type:"onAdDurationChange",val:this.creative.getAdDuration()})},SekindoVPAIDWrapper.prototype.onAdRemainingTimeChange=function(){this.parent&&this.parent.onVpaidEvent({type:"onAdRemainingTimeChange",val:this.creative.getAdRemainingTime()})},SekindoVPAIDWrapper.prototype.getAdRemainingTime=function(){return this.creative.getAdRemainingTime()},SekindoVPAIDWrapper.prototype.onAdImpression=function(e){var t=this;clearTimeout(this.killTimeOut),this.amazoneRemovalId=setTimeout(function(){t.amazoneAdCheckInterval&&clearInterval(t.amazoneAdCheckInterval)},1e3),window.primisLog("[[VPAID Wrapper]] - onAdImpression"),this.hadImpression=!0,this.vidCollectInterval&&clearInterval(this.vidCollectInterval),this.parent&&this.parent.onVpaidEvent({type:"onAdImpression",macro:e}),this.impressionTimer&&clearTimeout(this.impressionTimer),this.config.impressionTimeout&&this.config.impressionTimeout>0&&(this.impressionTimer=setTimeout(function(){t.onAdError("impressionTimer")},this.config.impressionTimeout)),this.params.reportDebugImpPixelId&&this.params.debugWFManagerId&&this.config.LogRest.performCall("liveVideoWaterfall","SetVastStatus",[this.params.reportDebugImpPixelId,"Impression (from VPAID)"],this.params.debugWFManagerId)},SekindoVPAIDWrapper.prototype.onAdClickThru=function(e,t,i){this.parent&&this.parent.onVpaidEvent("onAdClickThru")},SekindoVPAIDWrapper.prototype.onAdInteraction=function(e){this.parent&&this.parent.onVpaidEvent("onAdInteraction")},SekindoVPAIDWrapper.prototype.onAdVideoStart=function(){var e=this;this.parent&&this.parent.onVpaidEvent("onAdVideoStart"),this.params.environmentVars.videoSlot.paused&&setTimeout(function(){var t=e.params.environmentVars.videoSlot.play();if(t)try{t.then(function(){}).catch(function(e){})}catch(e){}},200)},SekindoVPAIDWrapper.prototype.onAdVideoFirstQuartile=function(){this.parent&&this.parent.onVpaidEvent("onAdVideoFirstQuartile")},SekindoVPAIDWrapper.prototype.onAdVideoMidpoint=function(){this.parent&&this.parent.onVpaidEvent("onAdVideoMidpoint")},SekindoVPAIDWrapper.prototype.onAdVideoThirdQuartile=function(){this.parent&&this.parent.onVpaidEvent("onAdVideoThirdQuartile")},SekindoVPAIDWrapper.prototype.onAdVideoComplete=function(){this.parent&&this.parent.onVpaidEvent({type:"onAdVideoComplete"})},SekindoVPAIDWrapper.prototype.onAdLinearChange=function(){this.parent&&this.parent.onVpaidEvent("onAdLinearChange")},SekindoVPAIDWrapper.prototype.getAdLinear=function(){return this.creative.getAdLinear()},SekindoVPAIDWrapper.prototype.startAd=function(){this.creative.startAd()},SekindoVPAIDWrapper.prototype.onAdLoaded=function(){this.parent&&this.parent.onVpaidEvent("onAdLoaded")},SekindoVPAIDWrapper.prototype.onStartAd=function(){this.parent&&this.parent.onVpaidEvent("onStartAd")},SekindoVPAIDWrapper.prototype.stopAd=function(){this.creative.stopAd()},SekindoVPAIDWrapper.prototype.onStopAd=function(e){var t=this;this.hadImpression?(window.primisLog("[[VPAID Wrapper]] - onStopAd"),this.onStopTimeout=setTimeout(function(e){t.parent&&(t.adSkipped?t.parent.onVpaidEvent({type:"onSkipAd"}):t.parent.onVpaidEvent({type:"onStopAd"}))},2)):this.onAdError()},SekindoVPAIDWrapper.prototype.onSkipAd=function(e){this.parent&&this.parent.onVpaidEvent({type:"onSkipAd"})},SekindoVPAIDWrapper.prototype.skipAd=function(){var e=this;this.adSkipped=!0;try{this.creative.skipAd()}catch(e){}try{this.creative.stopAd()}catch(e){}this.forceSkipAdTimeout=setTimeout(function(){e.onAdError("forceSkipAdTimeout")},1e3)},SekindoVPAIDWrapper.prototype.setAdVolume=function(e){if(!this.doNotUseSetAdVolume)try{this.creative.setAdVolume(e)}catch(e){}},SekindoVPAIDWrapper.prototype.getAdVolume=function(){return this.creative.getAdVolume()},SekindoVPAIDWrapper.prototype.onAdVolumeChange=function(){this.hadImpression&&this.parent&&this.parent.onVpaidEvent({type:"onAdVolumeChange",val:this.creative.getAdVolume()})},SekindoVPAIDWrapper.prototype.resizeAd=function(e,t,i){this.iframe.style.width=e+"px",this.iframe.style.height=t+"px",this.creative&&this.creative.resizeAd(e,t,i)},SekindoVPAIDWrapper.prototype.pauseAd=function(){this.creative.pauseAd()},SekindoVPAIDWrapper.prototype.resumeAd=function(){this.creative.resumeAd()},SekindoVPAIDWrapper.prototype.expandAd=function(){this.creative.expandAd()},SekindoVPAIDWrapper.prototype.collapseAd=function(){this.creative.collapseAd()},SekindoVPAIDWrapper.prototype.destruct=function(e){this.killTimeOut&&clearTimeout(this.killTimeOut),this.impressionTimer&&clearTimeout(this.impressionTimer),this.onStopTimeout&&clearTimeout(this.onStopTimeout),this.amazoneAdCheckInterval&&clearInterval(this.amazoneAdCheckInterval),this.amazoneRemovalId&&clearTimeout(this.amazoneRemovalId),this.yahooAdCheckInterval&&clearInterval(this.yahooAdCheckInterval),this.readyStateCheckInterval&&clearInterval(this.readyStateCheckInterval),this.forceSkipAdTimeout&&clearTimeout(this.forceSkipAdTimeout),this.vpaidHeavyAdObserver&&this.vpaidHeavyAdObserver.destruct();var t=document.getElementById("sekindoVpaidIframe");t&&t.parentNode&&t.parentNode.removeChild(t),e||SekindoUtils.deleteMe(this)},SekindoDebugAgent.prototype.setDebugConfigFromWindow=function(){var e=this,t=SekindoUtils.getTopWindow(window);try{var i=t.location.href.toLowerCase();if(-1!=i.indexOf("sekindodebugger")&&(this.isDebuggerWindow=!0,-1!=i.indexOf("sekindodebuggerin")&&(this.isDebuggerWindowIn=!0),window.primisLog=function(t){e.earlyMessagesQ.push(t)},setTimeout(function(){for(var t=0;t<e.earlyMessagesQ.length;t+=1)window.primisLog(e.earlyMessagesQ[t]);e.earlyMessagesQ=[]},5e3)),t&&t.sekindoConfigDebug){this.configDebug=t.sekindoConfigDebug;for(var n in this.configDebug)if(-1!==n.indexOf(".")){var o=n.substring(0,n.indexOf(".")),a=n.substring(n.indexOf(".")+1,n.length);""!==this.configDebug[n]&&(this.config[o][a]=this.configDebug[n])}else""!==this.configDebug[n]&&(this.config[n]=this.configDebug[n])}}catch(e){}},SekindoDebugAgent.prototype.isActivateDebugWindow=function(){return(this.isDebuggerWindow||1==this.config.debug)&&!this.isDebuggerWindowConstructed},SekindoDebugAgent.prototype.activateDebugWindow=function(){try{this.isDebuggerWindowConstructed=!0;var e=this.isDebuggerWindowIn?null:window.open(this.config.absolutePath+this.externalDebugWindowURL);if(e)window.primisLog=function(t){try{e.sendToDebugWindow(t)}catch(n){try{arguments.callee.caller.err=new Error("error");var i;try{i=arguments.callee.caller.err.stack.toString()}catch(e){i=e.stack.toString()}e.postMessage({val:t,stack:i},"*")}catch(e){}}};else{var t=window.top.document;window.top.absolutePath=this.config.absolutePath;var i=t.createElement("script");i.language="javascript",i.type="text/javascript",i.src=this.config.absolutePath+this.internalDebugWindowURL,i.onload=function(){window.primisLog=function(e,t){try{window.top.sendToDebugWindow(e,t)}catch(e){}},window.onerror=window.top.onerror},t.body.appendChild(i)}}catch(e){}},SekindoUtils.applyExternalRules=function(e,t,i){function n(e,t){for(var i in t)"object"==typeof r.style[i]&&r.style[i].hasOwnProperty("value")&&r.style[i].hasOwnProperty("priority")?e.style.setProperty(i,r.style[i].value,r.style[i].priority):e.style[i]=r.style[i]}function o(e,t){for(var i in t)e.setAttribute(i,r.attribute[i])}if(e.externRules.length)for(var a=e.externRules,s=0;s<a.length;s++){var r=a[s];if(("init"!=i||!r.dest)&&("init"==i||r.dest&&r.dest===i))if("number"==typeof r.element){for(var l=e.playerIframeDiv,c=0;c<r.element;c++)l=l.parentNode;r.hasOwnProperty("attribute")&&o(l,r.attribute),r.hasOwnProperty("style")&&n(l,r.style)}else if("config"!=r.element||"config"!=t&&"function"!=t){if("object"==typeof r.element&&"style"==t){l=null;var d=window.parent.document;if(r.element.hasOwnProperty("id"))l=d.getElementById(r.element.id);else if(r.element.hasOwnProperty("class")){var p=r.element.hasOwnProperty("num")?r.element.num:0;l=d.getElementsByClassName(r.element.class)[p]}null!=l&&n(l,r.style)}}else for(var h in r.params)e[h]=r.params[h]}},SekindoUtils.getApiObjectForEvent=function(e){switch(e){case"videoStart":return{title:void 0,duration:void 0};default:return{}}},SekindoUtils.initEids=function(e,t){function i(){clearTimeout(n),t()}var n=null;SekindoUtils.eidsp=e.eidsp;if(!(e.gdprIsRequired&&""==e.gdprInfo.getConsentString()||e.ccpaIsRequired&&e.ccpaInfo.isRejected)&&"iiq"===e.eidsp){var o={};o={partner:793790479,pbjs:window.SKpbjs,refreshInMillis:432e5,timeoutInMillis:3e3,isAsyncServerRequest:!0,enhanceRequests:!1,idCollisionPreventionMode:"PUB",sourceMetaData:e.userIpAddr,domain:e.domain,callback:function(e){i()}},e.iiqConf.isAppCfg&&(o.partnerClientId=e.iiqConf.pCid,o.partnerClientIdType=e.iiqConf.pCidt,o.domain=e.pubUrl),window.iiqObjPrm=new IntentIqObject(o),n=setTimeout(function(){i()},2e3)}else i()},SekindoUtils.getGooglePPID=function(e){if(SekindoUtils.isPpidValid(e.customPpid))return e.customPpid;var t=SekindoUtils.getEids();if(t){var i=t.filter(e=>"intentiq.com"==e.source);if(i&&i[0]&&i[0].uids&&i[0].uids[0]&&i[0].uids[0].id)return i[0].uids[0].id}return null},SekindoUtils.getEids=function(){var e=[];return"iiq"===SekindoUtils.eidsp&&window.iiqObjPrm&&(e=window.iiqObjPrm.getIntentIqEids()).forEach(function(e){"guid.com"==e.source&&(e.source="intentiq.com")}),e},SekindoUtils.isPpidValid=function(e){if(!e||""===e||"string"!=typeof e)return!1;return new RegExp("^([0-9a-zA-Z]{32,150})$|^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$").test(e)},SekindoUtils.createSPlayer=function(e,t){configDecoded=e.configObj.enc?JSON.parse(atob(SekindoUtils.letterShifting(e.configObj.data))):e.configObj.data,this.merge2Objs(e,configDecoded),SekindoUtils.initEids(e,function(){window[t]||(window[t]=new SekindoSPlayer(e,t))})},SekindoUtils.verificationAndSyncPixels=function(e,t,n){function o(e){(new Image).src=e}function a(e){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src",e),t.setAttribute("async",!0);var i=document.getElementsByTagName("head");try{i.length&&(i=i[0]).insertBefore(t,null)}catch(e){}}function s(e){var i=Math.random().toString(16).substr(2),n="<iframe ".concat('sandbox="allow-scripts allow-same-origin"',' id="').concat(i,'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e,'">\n    </iframe>'),o=document.createElement("div");o.innerHTML=n;try{t.appendChild(o)}catch(e){}}for(i=0;i<e.length;i++){var r=e[i].pixel;r=(r=(r=r.replace(/\${GDPR}/g,n.gdprIsRequired)).replace(/\${GDPR_CONSENT}/g,encodeURIComponent(n.gdprInfo.getConsentString()))).replace(/\${US_PRIVACY}/g,encodeURIComponent(n.ccpaInfo.consent)),"img"==e[i].type?o(r):"js"==e[i].type?a(r):"iframe"==e[i].type&&s(r)}},SekindoUtils.scriptOptimizer=function(){window.console||(Window.prototype.console={},Window.prototype.console.error=function(e){},Window.prototype.console.info=function(e){},Window.prototype.console.log=function(e){},Window.prototype.console.warn=function(e){}),Element.prototype.scrollIntoView=function(){},navigator.geolocation.getCurrentPosition=function(e,t){t({code:0})},navigator.geolocation.watchPosition=function(e,t){t({code:0})},function(){for(var e=0,t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[t[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[i]+"CancelAnimationFrame"]||window[t[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,i){var n=(new Date).getTime(),o=Math.max(0,16-(n-e)),a=window.setTimeout(function(){t(n+o)},o);return e=n+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();try{window.top.Element.prototype.matches||(window.top.Element.prototype.matches=window.top.Element.prototype.msMatchesSelector||window.top.Element.prototype.webkitMatchesSelector),window.top.Element.prototype.closest||(window.top.Element.prototype.closest=function(e){var t=this;do{if(window.top.Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})}catch(e){}},SekindoUtils.trackSekindoAdEvents=function(e,t,i,n){var o=i;if(o&&o.trackingEvents){o.macro&&(t=o.macro);var a=o.trackingEvents[e];if(a){"string"==typeof a&&(a=[a]);var s="";-1!=o.syncSource&&(s="&ssp_ius="+o.syncSource);var r="ima"==o.serveType?1:n.bus.getParam("placementDynamicValue");r=o.isForceInstream?1:r;for(var l=0;l<a.length;l++){var c=a[l],d="";switch(t&&(c=c.replace(t.str,t.repTo)),n.isVisibilityLogActive&&(d="&viewPct="+JSON.stringify(SekindoUtils.getPlayerViewPct(n.videoIFrameDiv,window.parent,n.bus))),e){case"onAttempt":if(!(Math.random()*n.attemptMultiplier<1))continue;c=c.replace("${ATTEMPT_MULTIPLIER}",n.attemptMultiplier),c+="&placementStreamType="+r,c+=s;break;case"impression":c=(c=(c=c.replace(/&contentFileId=0/g,"&contentFileId="+(n.bus.getParam("fileId")||"0"))).replace(/&mediaPlayListId=0/g,"&mediaPlayListId="+(n.bus.getParam("playListId")||"0"))).replace(/&mediaListId=0/g,"&mediaListId="+(n.bus.getParam("listId")||"0")),c+="&isExcludeFromOpt="+(!0===n.bus.getParam("isFirstContent")?"0":"1"),c+="&isCachedBid="+(i.isCachedBid?"1":"0"),c+="&contentMatchType="+n.bus.getParam("contentMatchType"),c+="&ssp_adom="+o.adomain,c+="&placementStreamType="+r,c+=s,c+=d,""!=o.amznbid&&(c+="&amznbid="+o.amznbid),SekindoServices.fullscreen.isFullscreen&&(c+="&playerDisplayState=fullscreen");break;case"viewable":c+="&ssp_adom="+o.adomain,c+="&placementStreamType="+r,c+=s,c+=d;break;case"response":c+="&ssp_adom="+o.adomain,c+="&placementStreamType="+r,c+=s,i.hasOwnProperty("rvn")&&(c=c.replace("${VP_RVN_MACRO}",i.rvn));break;case"win":c+="&ssp_adom="+o.adomain,c+="&placementStreamType="+r,c+=s,SekindoUtils.trackSekindoAdEvents("sspWinTrackers",null,i,n);break;case"complete":c+="&ssp_adom="+o.adomain,c+="&placementStreamType="+r,c+=s,c+="&isCurrentlyViewable="+(n.bus.getParam("currViewabilityState",n.adInViewPrc).status?1:0)}SekindoUtils.firePixel(c,n.pixelDiv,n)}}}},SekindoUtils.md5=function(e){function t(e){var t,i="";for(t=0;t<=3;t++)i+=u.charAt(e>>8*t+4&15)+u.charAt(e>>8*t&15);return i}function i(e,t){var i=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(i>>16)<<16|65535&i}function n(e,t,n,o,a,s){return i(function(e,t){return e<<t|e>>>32-t}(i(i(t,e),i(o,s)),a),n)}function o(e,t,i,o,a,s,r){return n(t&i|~t&o,e,t,a,s,r)}function a(e,t,i,o,a,s,r){return n(t&o|i&~o,e,t,a,s,r)}function s(e,t,i,o,a,s,r){return n(t^i^o,e,t,a,s,r)}function r(e,t,i,o,a,s,r){return n(i^(t|~o),e,t,a,s,r)}var l,c,d,p,h,u="0123456789abcdef",g=function(e){var t,i=1+(e.length+8>>6),n=new Array(16*i);for(t=0;t<16*i;t++)n[t]=0;for(t=0;t<e.length;t++)n[t>>2]|=e.charCodeAt(t)<<t%4*8;return n[t>>2]|=128<<t%4*8,n[16*i-2]=8*e.length,n}(""+e),f=1732584193,m=-271733879,v=-1732584194,y=271733878;for(l=0;l<g.length;l+=16)c=f,d=m,p=v,h=y,m=r(m=r(m=r(m=r(m=s(m=s(m=s(m=s(m=a(m=a(m=a(m=a(m=o(m=o(m=o(m=o(m,v=o(v,y=o(y,f=o(f,m,v,y,g[l+0],7,-680876936),m,v,g[l+1],12,-389564586),f,m,g[l+2],17,606105819),y,f,g[l+3],22,-1044525330),v=o(v,y=o(y,f=o(f,m,v,y,g[l+4],7,-176418897),m,v,g[l+5],12,1200080426),f,m,g[l+6],17,-1473231341),y,f,g[l+7],22,-45705983),v=o(v,y=o(y,f=o(f,m,v,y,g[l+8],7,1770035416),m,v,g[l+9],12,-1958414417),f,m,g[l+10],17,-42063),y,f,g[l+11],22,-1990404162),v=o(v,y=o(y,f=o(f,m,v,y,g[l+12],7,1804603682),m,v,g[l+13],12,-40341101),f,m,g[l+14],17,-1502002290),y,f,g[l+15],22,1236535329),v=a(v,y=a(y,f=a(f,m,v,y,g[l+1],5,-165796510),m,v,g[l+6],9,-1069501632),f,m,g[l+11],14,643717713),y,f,g[l+0],20,-373897302),v=a(v,y=a(y,f=a(f,m,v,y,g[l+5],5,-701558691),m,v,g[l+10],9,38016083),f,m,g[l+15],14,-660478335),y,f,g[l+4],20,-405537848),v=a(v,y=a(y,f=a(f,m,v,y,g[l+9],5,568446438),m,v,g[l+14],9,-1019803690),f,m,g[l+3],14,-187363961),y,f,g[l+8],20,1163531501),v=a(v,y=a(y,f=a(f,m,v,y,g[l+13],5,-1444681467),m,v,g[l+2],9,-51403784),f,m,g[l+7],14,1735328473),y,f,g[l+12],20,-1926607734),v=s(v,y=s(y,f=s(f,m,v,y,g[l+5],4,-378558),m,v,g[l+8],11,-2022574463),f,m,g[l+11],16,1839030562),y,f,g[l+14],23,-35309556),v=s(v,y=s(y,f=s(f,m,v,y,g[l+1],4,-1530992060),m,v,g[l+4],11,1272893353),f,m,g[l+7],16,-155497632),y,f,g[l+10],23,-1094730640),v=s(v,y=s(y,f=s(f,m,v,y,g[l+13],4,681279174),m,v,g[l+0],11,-358537222),f,m,g[l+3],16,-722521979),y,f,g[l+6],23,76029189),v=s(v,y=s(y,f=s(f,m,v,y,g[l+9],4,-640364487),m,v,g[l+12],11,-421815835),f,m,g[l+15],16,530742520),y,f,g[l+2],23,-995338651),v=r(v,y=r(y,f=r(f,m,v,y,g[l+0],6,-198630844),m,v,g[l+7],10,1126891415),f,m,g[l+14],15,-1416354905),y,f,g[l+5],21,-57434055),v=r(v,y=r(y,f=r(f,m,v,y,g[l+12],6,1700485571),m,v,g[l+3],10,-1894986606),f,m,g[l+10],15,-1051523),y,f,g[l+1],21,-2054922799),v=r(v,y=r(y,f=r(f,m,v,y,g[l+8],6,1873313359),m,v,g[l+15],10,-30611744),f,m,g[l+6],15,-1560198380),y,f,g[l+13],21,1309151649),v=r(v,y=r(y,f=r(f,m,v,y,g[l+4],6,-145523070),m,v,g[l+11],10,-1120210379),f,m,g[l+2],15,718787259),y,f,g[l+9],21,-343485551),f=i(f,c),m=i(m,d),v=i(v,p),y=i(y,h);return t(f)+t(m)+t(v)+t(y)},SekindoUtils.letterShifting=function(e){for(var t="",i=0,n=0;n<e.length;n++)i=e.charCodeAt(n),e.charCodeAt(n)>="a".charCodeAt(0)&&e.charCodeAt(n)<="z".charCodeAt(0)&&(i+13>"z".charCodeAt(0)&&(i=i-"z".charCodeAt(0)+"a".charCodeAt(0)-1),i+=13),t+=String.fromCharCode(i);return t},SekindoUtils.findByPredicate=function(e,t){return Object.keys(e).filter(function(i){return t(e[i])}).reduce(function(t,i){return t[i]=e[i],t},{})},SekindoUtils.makePostRequest=function(e,t,i,n,o){var a=new XMLHttpRequest;a.withCredentials=!0,a.addEventListener("error",i),a.addEventListener("abort",i),a.open("POST",e,!0),a.timeout=n,a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(a.status>=200&&a.status<400?t(a.responseText):i())},a.send(o)},SekindoUtils.adInspection=function(e,t,i,n,o,a){function s(e,t,i){return 0===e.length||!i&&e.filter(function(e){return-1!==t.indexOf(e)}).length>0||i&&0===e.filter(function(e){return-1!==t.indexOf(e)}).length}return function(){if(t.isJsVpaid)return!0;var n=e.adFormat;switch(i){case"pre_roll":if(!n.pre_roll)return!1;break;case"mid_roll":case"gap":if(!n.mid_roll)return!1}return!0}()&&function(){if(-1!=e.maxImpressions&&e.impressionCount.val>=e.maxImpressions)return!1;if(-1!=e.minGapBetweenImpsSec&&((new Date).getTime()-o)/1e3<e.minGapBetweenImpsSec)return!1;return!0}()&&function(){var t=e.adFormat;return!(t.once_roll&&n>t.once_roll)}()&&function(){if(!e.contentTargeting||0==e.contentTargeting.isEnabled)return!0;var i=[t.bus.getParam("contentSyndicatorId")],n=[t.bus.getParam("contentFolderId")],o=[t.bus.getParam("contentListId")],a=t.bus.getParam("contentKeywords").split(","),r=t.bus.getParam("contentIabCategories").split(","),l=t.contextualMatchData.urlKeywords,c=t.contextualMatchData.urlCategories,d=1==e.contentTargeting.isExcludeSyndicators,p=1==e.contentTargeting.isExcludeFolders,h=1==e.contentTargeting.isExcludeVidCategories,u=1==e.contentTargeting.isExcludeUrlCategories,g=e.contentTargeting.syndicators.length>0?e.contentTargeting.syndicators.split(","):[],f=e.contentTargeting.folders.length>0?e.contentTargeting.folders.split(","):[],m=e.contentTargeting.lists.length>0?e.contentTargeting.lists.split(","):[],v=e.contentTargeting.vidKeywords.length>0?e.contentTargeting.vidKeywords.split(","):[],y=e.contentTargeting.vidKeywordsExc.length>0?e.contentTargeting.vidKeywordsExc.split(","):[],b=e.contentTargeting.vidCategories.length>0?e.contentTargeting.vidCategories.split(","):[],S=e.contentTargeting.urlKeywords.length>0?e.contentTargeting.urlKeywords.split(","):[],w=e.contentTargeting.urlKeywordsExc.length>0?e.contentTargeting.urlKeywordsExc.split(","):[],k=e.contentTargeting.urlCategories.length>0?e.contentTargeting.urlCategories.split(","):[],A=s(g,i,d),I=s(f,n,p),E=s(m,o,!1),P=s(v,a,!1),C=s(y,a,!0),T=s(b,r,h),x=s(S,l,!1),D=s(w,l,!0),V=s(k,c,u);return A&&I&&E&&P&&C&&T&&x&&D&&V}()&&!(e.campaignActivityEndTime>0&&1e3*e.campaignActivityEndTime<Date.now())&&!("prebidVideo"===e.serveType&&"slider"===t.playerMode&&a)},SekindoUtils.getViewportSize=function(e){if(null!=(e=e||window).innerWidth)return{w:e.innerWidth,h:e.innerHeight};var t=e.document;return"CSS1Compat"==document.compatMode?{w:t.documentElement.clientWidth,h:t.documentElement.clientHeight}:{w:t.body.clientWidth,h:t.body.clientWidth}},SekindoUtils.isIvtHidden=function(e,t,i,n){function o(e,t){var n=!1,a=function(e){var o=0,a="iFrame";for(void 0!==e.id&&(a=e.id);e;){if(e.style){var s=t.getComputedStyle(e);if(s){var r="",l="",c="";try{r=btoa(e.outerHTML.split(">")[0]),l=window.configPlayer&&window.configPlayer.pubUrl?btoa(window.configPlayer.pubUrl):btoa(window.location.href),c=btoa(Date.now())}catch(e){}if("0"==s.opacity)return"opacity&ivtElmtNum="+o+"&ivtBaseElmt="+a+"&ivtElmt="+r+"&ivtURL="+l+"&ivtTimestamp="+c;if("none"==s.display)return"display&ivtElmtNum="+o+"&ivtBaseElmt="+a+"&ivtElmt="+r+"&ivtURL="+l+"&ivtTimestamp="+c;if(!n&&"ios"!=i.os&&s.visibility&&(n=!0,"hidden"==s.visibility))return"visibility&ivtElmtNum="+o+"&ivtBaseElmt="+a+"&ivtElmt="+r+"ivtURL="+l+"ivtTimestamp="+c}}e=e.parentNode,o++}return"ok"}(e);if("ok"!=a)return a;try{if(t.parent!=t&&"ok"!=(a=o(t.frameElement,t.parent)))return a;var s=e.getBoundingClientRect(),r=SekindoUtils.getViewportSize(t)
;if(s.right<0||s.left>r.w)return ivtURL=window.configPlayer&&window.configPlayer.pubUrl?btoa(window.configPlayer.pubUrl):btoa(window.location.href),ivtTimestamp=btoa(Date.now()),"bounds&ivtRight="+s.right+"&ivtLeft="+s.left+"&ivtViewWidth="+r.w+"&ivtURL="+ivtURL+"&ivtTimestamp="+ivtTimestamp}catch(e){}return"ok"}return n?"ok":(t=t||window,o(e,t))},SekindoUtils.reportFailAd=function(e,t){if(e.params){var i=e.params.vastURL?btoa(e.params.vastURL):e.params.failedParams&&e.params.failedParams.failedVastURL?e.params.failedParams.failedVastURL:"",n=e.params.vastXml?btoa(e.params.vastXml):e.params.failedParams&&e.params.failedParams.failedVastXML?e.params.failedParams.failedVastXML:"",o=e.params.failedParams&&e.params.failedParams.failedReason?btoa(e.params.failedParams.failedReason):"",a=e.params.campaignId?e.params.campaignId:"",s=e.params.serveType?e.params.serveType:"",r=e.config.pubUrl?btoa(e.config.pubUrl):"",l=t.failAdPixel+"&failAdURL="+i+"&failCampId="+a+"&failServeType="+s+"&failAdWebURL="+r+"&failAdXML="+n+"&failAdReason="+o;SekindoUtils.firePixel(l,t.pixelDiv,t)}},SekindoUtils.posObjArray=[],SekindoUtils.disablePositions=function(e,t){if(t){SekindoUtils.posObjArray=[];function i(e,t){!function(e){for(;e;){if(e.style){var i=t.getComputedStyle(e);i&&i.position&&"static"!=i.position&&(SekindoUtils.posObjArray.push({obj:e,pos:i.position}),e.style.position="static")}e=e.parentNode}}(e),t!=t.top&&i(t.frameElement,t.parent)}var n=e.ownerDocument;i(e,n.defaultView||n.parentWindow)}else setTimeout(function(){for(var e=0;e<SekindoUtils.posObjArray.length;e++)SekindoUtils.posObjArray[e].obj.style.position=SekindoUtils.posObjArray[e].pos},1)},SekindoUtils.getPlayerViewPct=function(e,t,i){if(window.isAmpProject)return{w:Number(window.ampView),h:+Number(window.ampView)};if(i.getParam("isAmpIframe"))return i.getParam("ampIframeViewabilityPct");try{if("visible"!=(t.document.visibilityState||t.document.webkitVisibilityState||t.document.mozVisibilityState||t.document.msVisibilityState))return{w:0,h:0};var n=e.getBoundingClientRect(),o=n.height||n.bottom-n.top,a=SekindoUtils.getViewportSize(t),s=a.h-n.top;n.top<0&&(s=o+n.top);var r=100;(n.right<0||n.left>a.w)&&(r=0);return{w:r,h:Math.min(100,Math.max(0,s)/o*100)}}catch(e){return{w:0,h:0}}},SekindoUtils.isElementInViewPort=function(e,t,i,n){function o(e,t){var i=!1;if(r.push(t),!1===function(e){for(;e;){if(e.hidden&&!n)return!1;if(e.style){var o=t.getComputedStyle(e);if(o){if("0"==o.opacity)return!1;if("none"==o.display)return!1;if(!i&&o.visibility&&(i=!0,"hidden"==o.visibility))return!1}}e=e.parentNode}}(e))return 0;try{if("visible"!=(t.document.visibilityState||t.document.webkitVisibilityState||t.document.mozVisibilityState||t.document.msVisibilityState)&&!n)return 0;if(t.parent!=t){if(!(s=o(t.frameElement,t.parent)))return 0}var s=!0,l=e.getBoundingClientRect(),c=l.height||l.bottom-l.top,d=(l.width||(l.right,l.left),SekindoUtils.getViewportSize(t));if(c<=0&&(s=!1),(l.right<0||l.left>d.w)&&(s=!1),s){var p=l.top>0?d.h-l.top:d.h-(d.h-l.bottom),h=Number.EPSILON||function(){for(var e=1;1+.5*e!=1;)e*=.5;return e}(),u=Math.round(100*(p/c+h))/100;a=u=u>1?1:u}return a}catch(e){}try{for(var g=0;g<r.length;g++){var f=r[g];if(f.extern||f.$sf){return(f.extern||f.$sf.ext).inViewPercentage()/100}}}catch(e){return}}var a=0;if(e.isAppsGeometry)return e.appsGeometryStatus.viewable?a=1:a;if(e.bus.getParam("isAmpIframe")){var s=e.bus.getParam("ampIframeViewabilityPct");return s.h*s.w}if(window.isAmpProject)return window.ampView?a=1:a;var r=[];return i=i||window,o(t,i)},SekindoUtils.delayRequest=function(e,t,i){function n(){++o>t?e():a.requestAnimationFrame(n)}var o=0,a=i||window;n()},SekindoUtils.postLogMessage=function(e,t){var i=new XMLHttpRequest;i.withCredentials=!1,i.open("POST","https://"+t.currentServerName+"/live/liveTracker.php",!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send("req=logMsg&msg="+encodeURIComponent(e))},SekindoUtils.liveHash=function(e,t){if(t.isHash){var i,n="live/liveView.php?";if(25==(i=e.indexOf(n))){var o=e.substring(i+n.length),a=SekindoUtils.letterShifting(btoa(o));e=e.substring(0,i)+n+"hash="+a}}return e},SekindoUtils.compressString=function(e){for(byteArr=new Uint8Array(e.length),i=0,len=e.length;i<len;i++)byteArr[i]=255&e.charCodeAt(i);var t=new Zlib.Deflate(byteArr).compress(),n="";for(i=0,len=t.length;i<len;i++)n+=String.fromCharCode(t[i]);return n},SekindoUtils.createHashedObject=function(e,t){var i={enc:t.isHash,comp:!t.hasOwnProperty("isDataCompressed")||t.isDataCompressed};if(i.enc){var n=encodeURIComponent(JSON.stringify(e));if(JSON.stringify(SekindoUtils.letterShifting(btoa(n))).length<7168&&(i.comp=!1),i.comp)try{var o=SekindoUtils.compressString(n);o?n=o:i.comp=!1}catch(e){i.comp=!1}i.data=JSON.stringify(SekindoUtils.letterShifting(btoa(n)))}else i.data=JSON.stringify(e);return i},SekindoUtils.firePixel=function(e,t,i,n){if(i.isSendPixels&&e&&""!=e){if(!n){var o=void 0!==i.flowStatus&&i.flowStatus;e+="&gdpr="+i.gdprIsRequired+"&gdprConsent="+encodeURIComponent(i.gdprInfo.getConsentString())+"&isWePassGdpr="+i.gdprInfo.getIsWePass()+"&ccpa="+i.ccpaIsRequired+"&ccpaConsent="+encodeURIComponent(i.ccpaInfo.consent)+"&cbuster="+(new Date).getTime().toString()+"&uid="+i.uniqueID+"&pubUrl="+encodeURIComponent(i.pubUrl)+"&floatStatus="+o,e+="&eidsp="+i.eidsp;var a=encodeURIComponent(e)+Math.random();e+="&pxid="+SekindoUtils.md5(a),e=SekindoUtils.liveHash(e,i)}if(t)try{(r=t.ownerDocument.createElement("img")).setAttribute("src",e),r.setAttribute("height","0px"),r.setAttribute("width","0px"),r.style.cssText="display: none !important;",t.appendChild(r)}catch(t){try{(r=document.createElement("img")).setAttribute("src",e),r.setAttribute("height","0px"),r.setAttribute("width","0px"),r.style.cssText="display: none !important;",document.body.appendChild(r)}catch(t){var s='<img src="'+e+'" height="0px" width="0px" ></img>';document.write(s)}}else try{var r;(r=document.createElement("img")).setAttribute("src",e),r.setAttribute("height","0px"),r.setAttribute("width","0px"),r.style.cssText="display: none !important;",document.body.appendChild(r)}catch(t){s='<img src="'+e+'" height="0px" width="0px" ></img>';document.write(s)}}},SekindoUtils.getHighestZIndex=function(e,t){t||(t="*");for(var i,n,o=e||window,a=o.document.querySelectorAll(t),s=0,r=a.length,l=[];s<r;s+=1){try{i=o.getComputedStyle(a[s],null).zIndex||a[s].currentStyle.zIndex,n=o.getComputedStyle(a[s],null).position||a[s].currentStyle.position}catch(i){}if(i&&"static"!==n){var c=parseInt(i,10);c&&l.push(c)}}return l.length?Math.max.apply(null,l):0},SekindoUtils.getTopWindow=function(e){try{if(e.parent!=e)try{var t=SekindoUtils.getTopWindow(e.parent);if(!t)return!1;e=t}catch(e){return!1}}catch(e){return!1}return e},SekindoUtils.getBezierAnim=function(e,t){var i=function(e){return e*e*e},n=function(e){return 3*e*e*(1-e)},o=function(e){return 3*e*(1-e)*(1-e)},a=function(e){return(1-e)*(1-e)*(1-e)};return function(e,t){return t[0]*i(e)+t[1]*n(e)+t[2]*o(e)+t[3]*a(e)}(t,{easeIn:[1,0,0,0],easeOut:[1,1,1,0],easeInOut:[1,1,0,0],linear:[1,.6666,.3333,0]}[e])},SekindoUtils.animateTo=function(e,t,i,n,o,a,s){for(var r=0;r<SekindoUtils.animateArray.length;r++)SekindoUtils.animateArray[r].element==e&&SekindoUtils.animateArray[r].unit==t&&(SekindoUtils.animateArray[r].blocked=!0,SekindoUtils.animateArray[r].cancleAnimation());var l=new this.animateUnit(e,t,i,n,o,a,s);SekindoUtils.animateArray.push(l)},SekindoUtils.stopAnimateUnit=function(e,t){for(var i=0;i<SekindoUtils.animateArray.length;i++)SekindoUtils.animateArray[i].element==e&&SekindoUtils.animateArray[i].unit==t&&(SekindoUtils.animateArray[i].blocked=!0,SekindoUtils.animateArray[i].cancleAnimation())},SekindoUtils.animateArray=[],SekindoUtils.animateUnit=function(e,t,i,n,o,a,s){function r(){c.cancleAnimation(),a&&!c.blocked&&a()}function l(){var a=(new Date).getTime();d=Math.min(1.1,(a-p)/1e3/n);var g=Math.min(1,SekindoUtils.getBezierAnim(o,d)),f="height"==t||"width"==t||"opacity"==t?0:-1/0,m=i;"function"==typeof i&&(m=i());var v=Number(/[+-]?([0-9]*[.])?[0-9]+/.exec(m)[0]),y=Math.max(Math.round(1e3*(g*(v-u)+u))/1e3,f);e[t]=m.replace(v,y),s&&!c.blocked&&s(),d>1||c.blocked?r():c.currAnimFrame=h.requestAnimationFrame(l)}var c=this,d=0,p=(new Date).getTime(),h=SekindoUtils.isFriendlyIframe()?window.top:window;this.blocked=!1,this.element=e,this.unit=t,this.animTimeOut=null;var u=parseFloat(/[+-]?([0-9]*[.])?[0-9]+/.exec(e[t])[0]);return this.cancleAnimation=function(){h.cancelAnimationFrame(c.currAnimFrame);var e=SekindoUtils.animateArray.indexOf(c);SekindoUtils.animateArray.splice(e,1)},n?l():(e[t]=i,s&&!c.blocked&&s(),r()),this},SekindoUtils.resetAllAnimations=function(){for(var e=0;e<SekindoUtils.animateArray.length;e++)SekindoUtils.animateArray[e].blocked=!0;SekindoUtils.animateArray=[]},SekindoUtils.getCurrScript=function(e,t){var i=0;try{return this.currentScript=document.currentScript||n(e.mainPlayerDiv),this.currentScript;function n(e){if(t&&i++>=t)return null;var o=e.previousElementSibling;return-1!=o.src.indexOf("live/liveVi")?o:n(o)}}catch(e){return null}},SekindoUtils.getElementsInObj=function(e,t,i){var n=[];if(!e||!t)return[];if(!(h=e.document||e.contentDocument||e.contentWindow&&e.contentWindow.document||e.ownerDocument))return[];for(var o=h.getElementsByTagName?h.getElementsByTagName("iframe"):[],a=0;a<o.length;a++)try{if(o[a]&&o[a].contentWindow){for(var s=0;s<t.length;s++)for(var r=o[a].contentWindow.document.getElementsByTagName(t[s]),l=0;l<r.length;l++)r[l]&&n.push(r[l]);for(var c=o[a],d=SekindoUtils.getElementsInObj(c,t,!0),p=0;p<d.length;p++)n.push(d[p])}}catch(e){}if(!i)try{for(s=0;s<t.length;s++){var h,u=t[s];for(r=(h=e.document||e.contentDocument||e.contentWindow&&e.contentWindow.document||e.ownerDocument).getElementsByTagName?h.getElementsByTagName(u):[],l=0;l<r.length;l++)r[l]&&n.push(r[l])}}catch(e){}return n},SekindoUtils.getElementsInObjById=function(e,t,i){var n=[];if(!e||!t)return[];var o=e.document||e.contentDocument||e.contentWindow&&e.contentWindow.document||e.ownerDocument;if(!o)return[];for(var a=o.getElementsByTagName?o.getElementsByTagName("iframe"):[],s=0;s<a.length;s++)try{if(a[s]&&a[s].contentWindow){for(var r=0;r<t.length;r++)-1!=a[s].frameElement.id.indexOf(t[r])&&n.push(a[s]);for(var l=a[s],c=SekindoUtils.getElementsInObjById(l,t,!0),d=0;d<c.length;d++)n.push(c[d])}}catch(e){}return n},SekindoUtils.getElementsInObjByTag=function(e,t){function i(e){var t=e.document||e.contentDocument;if(t)return t;try{t=e.contentWindow&&e.contentWindow.document}catch(e){return t}}function n(e,t){var a=e.getElementsByTagName(t);if(a.length>0)for(var s=0;s<a.length;s++)if(o.push(a[s]),"IFRAME"==a[s].tagName){var r=i(a[s]);r&&n(r,t)}else n(a[s],t)}var o=[];return n(e,t),o},SekindoUtils.getVideoAudioElementsInObj=function(e){var t=[],i=["video","audio"];if(!e)return[];for(var n=0;n<i.length;n++)for(var o=e.getElementsByTagName(i[n]),a=0;a<o.length;a++)t.push(o[a]);var s=e.getElementsByTagName("iframe");for(n=0;n<s.length;n++)try{var r=SekindoUtils.getElementsInObj(s[n],i,!0);t=t.concat(r)}catch(e){}return t},SekindoUtils.implementEventListenersToObj=function(e){e.eventListeners=[],e.addEventListener=function(t,i){for(var n=0;n<e.eventListeners.length;n++)try{if(e.eventListeners[n].type==t&&e.eventListeners[n].callbackFunc==i)return}catch(e){}e.eventListeners.push({type:t,callbackFunc:i})},e.removeEventListener=function(t,i){if(e.eventListeners)for(var n=0;n<e.eventListeners.length;n++)try{e.eventListeners[n].type==t&&e.eventListeners[n].callbackFunc==i&&(e.eventListeners[n]=void 0)}catch(e){}},e.dispatchEvent=function(t,i){if("[object Event]"==String(t)&&(t=t.type),e.eventListeners)for(var n=e.eventListeners.length,o=0;o<n;o++)e.eventListeners&&e.eventListeners[o]&&e.eventListeners[o].type&&e.eventListeners[o].type==t&&e.eventListeners[o].callbackFunc({type:t,val:i})}},SekindoUtils.validURL=function(e){return!!/^https?:/.test(e)},SekindoUtils.isSandboxedIframe=function(e){if(e.parent===e)return 0;try{var t=e.frameElement}catch(e){t=null}if(null===t)return-12;try{return t.hasAttribute("sandbox")?1:SekindoUtils.isSandboxedIframe(e.parent)}catch(e){return-11}},SekindoUtils.getDomain=function(){var e;try{var t=SekindoUtils.getTopWindow(window),i=t?t.location:"";e=encodeURI(i);var n=t?t.location.hostname:""}catch(t){e="",n=null}return{domainUrl:e,domainName:n}},SekindoUtils.loadExternalJs=function(e,t,i){if(SekindoUtils.validURL(e)){for(var n=t||document,o=n.getElementsByTagName("script"),a=0;a<o.length;a++)if(o[a].getAttribute("src")==e)return void(i&&i());var s=n.createElement("SCRIPT");s.src=e,s.onload=function(){i&&i()};n.getElementsByTagName("HEAD")[0].appendChild(s)}},SekindoUtils.secToHMS=function(e){var t=parseInt(e/3600)%24,i=("0"+parseInt(e/60)%60).slice(-2),n=("0"+parseInt(e%60)).slice(-2);return(t?t+":":"")+i+":"+n},SekindoUtils.deleteMe=function(e){for(var t in e){e[t]=null;try{delete e[t]}catch(e){}}},SekindoUtils.isFriendlyIframe=function(){var e=!0;if(window!=window.top)try{window.top.location.toString()}catch(t){e=!1}return e},SekindoUtils.KBMFormatter=function(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"B":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e},SekindoUtils.merge2Objs=function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},SekindoUtils.getOrientation=function(){var e,t="calc";void 0!==window.orientation&&(t="window");try{t=screen.orientation?"screen":t}catch(e){}switch(t){case"screen":e=-1!==screen.orientation.type.indexOf("portrait")?90:0;break;case"window":e=window.orientation;break;case"calc":e=window.innerHeight<window.innerWidth?90:0}return e},SekindoUtils.fileNameFromUrl=function(e){var t,i={filename:"",report:""},n=/[?&]([^=#]+)=([^&#]*)/g;try{for(;t=n.exec(e);)i[t[1]]=t[2];var o=e.match(/\/([^\/?#]+)[^\/]*$/);o&&o.length>1&&(i.fileName=o[1])}catch(e){}return i},SekindoUtils.getVidFileType=function(e){var t="unknown";try{var i=/\:|\./;t=/^blob\:|\.m3u8$|\.mp4$/.exec(e)[0].replace(i,"")}catch(e){}return t},SekindoUtils.cropAmpTitleText=function(e,t){var i=t.split(" "),n=e.nativeTemplateElements.native_title;n.textContent="";for(var o=!1,a=0;a<i.length;a++){if(n.textContent=n.textContent+" "+i[a]+"...",n.offsetHeight>e.height-6){n.textContent=n.textContent.substr(0,n.textContent.length-i[a].length-3),o=!0;break}n.textContent=n.textContent.substr(0,n.textContent.length-3)}o&&(n.textContent=n.textContent+"...")},SekindoUtils.overrideSetInterval=function(e){function t(){e.requestAnimationFrame(t);for(var n=0;n<i.length;n++)i[n].ping()}var i=[];window.setInterval=function(e,t){var n=new function(e,t){this.id=Math.round(1e6*Math.random());var i=(new Date).getTime();this.ping=function(){var n=(new Date).getTime();n-i>t&&(i=n,e())}}(e,t);return i.push(n),n.id};var n=window.clearInterval;window.clearInterval=function(e){for(var t=null,o=0;o<i.length;o++)if(i[o].id==e)return void(t=i.splice(o,1));t||n(e)},t()},SekindoUtils.assignObject=function(e,t){return Object.keys(t).forEach(function(i){e[i]=t[i]}),e},SekindoUtils.localStorageSet=function(e,t,i){var n=window[e],o="sk_"+t;try{n.setItem(o,i)}catch(e){console.log("localStorageSet")}},SekindoUtils.localStorageIncr=function(e,t,i){var n=SekindoUtils.localStorageGet(e,t);return null==n&&(n=0),n=parseInt(n),n+=i,SekindoUtils.localStorageSet(e,t,n),n},SekindoUtils.localStorageGet=function(e,t){var i=window[e],n=null,o="sk_"+t;try{n=i.getItem(o)}catch(e){console.log("localStorageGet")}return n},SekindoUtils.supportsPassiveEvents=-1,SekindoUtils.passiveEvent=function(e){return!e&&!window.configPlayer.isDesktop&&(-1===SekindoUtils.supportsPassiveEvents&&(SekindoUtils.supportsPassiveEvents=0,function(){try{var e=Object.defineProperty({},"passive",{get:function(){SekindoUtils.supportsPassiveEvents=1}});window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}catch(e){}}()),!!SekindoUtils.supportsPassiveEvents&&{passive:!0})},SekindoUtils.convertHexToRgb=function(e,t){var i=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return t?"rgba("+i+", "+n+", "+o+", "+t+")":"rgb("+i+", "+n+", "+o+")"},SekindoServices.iosVidAutoplayWrapper=function(e){var t=this,i=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);if(!(i&&parseInt(i[1],10)<10)&&e){var n=e.ownerDocument;this.win=n?n.defaultView||n.parentWindow:window,this.vid=e,this.timeStamp=Date.now(),this.isAudio=!1,this.autoplay=this.vid.autoplay,this.isPaused=!this.vid.autoplay,this.src=this.vid.src,this.ended=!1,this.animFrame,this.prevPos=0,this.fallBackTimeout,this.curr=0,this.audio=new Audio,this.audio.addEventListener("playing",function(){t.audio.currentTime=t.vid.currentTime+.3,t.isAudio=!0;var e=new Event("volumechange");t.vid.dispatchEvent(e)}),this.vid.autoplay=!1,this.vid.muted=!0,this.vid.playsInline=!0,this.vid.controls=!1,this.vid.pause=function(e){if(t.isPaused=!0,t.isAudio)try{t.audio.pause()}catch(e){}var i=new Event("pause");t.vid.dispatchEvent(i)},this.vid.play=function(){if(t.win.cancelAnimationFrame(t.animFrame),t.animFrame=t.win.requestAnimationFrame(function(){try{t.setCurrTime()}catch(e){}}),t.ended=!1,t.vid.duration==t.vid.currentTime&&(t.vid.currentTime=0),t.timeStamp=Date.now()-1e3*t.vid.currentTime,t.isPaused=!1,t.isAudio)try{t.audio.play()}catch(e){}var e=new Event("play");t.vid.dispatchEvent(e);e=new Event("playing");t.vid.dispatchEvent(e)},this.vid.__defineGetter__("paused",function(){return t.isPaused}),this.vid.__defineSetter__("paused",function(e){}),this.vid.__defineGetter__("muted",function(){return!t.isAudio}),this.vid.__defineSetter__("muted",function(e){if(t.vid&&t.vid.audioTracks&&!(t.vid.audioTracks.length<=0))if(e)try{t.audio.pause(),t.isAudio=!1;var i=new Event("volumechange");t.vid.dispatchEvent(i)}catch(e){}else if(!t.isPaused){t.audio.src&&t.audio.src==t.src||(t.audio.src=t.src);try{t.audio.play()}catch(e){}}}),this.vid.__defineGetter__("volume",function(){return t.vid&&t.vid.audioTracks&&t.vid.audioTracks.length>0?t.audio.volume:0}),this.vid.__defineSetter__("volume",function(e){if(t.vid&&t.vid.audioTracks&&t.vid.audioTracks.length>0){var i=parseInt(10*e)/10;t.audio.volume=i;var n=new Event("volumechange");t.vid.dispatchEvent(n)}}),this.vid.__defineGetter__("controls",function(){return!1}),this.vid.__defineSetter__("controls",function(e){}),this.vid.__defineGetter__("ended",function(){return t.ended}),this.vid.__defineSetter__("ended",function(e){}),this.vid.__defineGetter__("autoplay",function(){return t.autoplay}),this.vid.__defineSetter__("autoplay",function(e){}),this.observer=new MutationObserver(function(e){e.forEach(function(e){t.vid.load(),t.src=e.target.src;try{t.audio.src=t.src}catch(e){}if(t.isAudio)try{t.audio.play()}catch(e){}t.autoplay&&(t.win.cancelAnimationFrame(t.animFrame),t.animFrame=t.win.requestAnimationFrame(function(){try{t.setCurrTime()}catch(e){}}))})});this.observer.observe(this.vid,{attributes:!0,attributeOldValue:!0,attributeFilter:["src"]}),this.loopStarted=!1,this.vid.addEventListener("canplay",function(e){t.loopStarted||(t.loopStarted=!0,t.timeStamp=Date.now(),t.win.cancelAnimationFrame(t.animFrame),t.animFrame=t.win.requestAnimationFrame(function(){try{t.setCurrTime()}catch(e){}}),setTimeout(function(){var e=new Event("play");t.vid.dispatchEvent(e);e=new Event("playing");t.vid.dispatchEvent(e)},1))}),this.vid.load(),this.eHandler=function(e){switch(e.type){case"seeking":case"seeked":case"ended":e.innerEvent||e.stopImmediatePropagation()}},this.vid.addEventListener("seeked",this.eHandler,!1),this.vid.addEventListener("seeking",this.eHandler,!1),this.vid.addEventListener("ended",this.eHandler,!1),this.setCurrTime=function(){if(t.animFrame&&t.win.cancelAnimationFrame(t.animFrame),t.animFrame=t.win.requestAnimationFrame(function(){try{t.setCurrTime()}catch(e){}}),t.win.clearTimeout(t.fallBackTimeout),t.fallBackTimeout=t.win.setTimeout(function(){t.setCurrTime()},60),!t.isPaused&&t.loopStarted&&(t.isAudio?t.curr=t.audio.currentTime+.2:(t.curr=Math.abs((Date.now()-t.timeStamp)/1e3),(t.curr-t.prevPos>2||t.vid.buffered.end(0)<t.curr+1&&t.curr<t.vid.duration-2)&&(t.timeStamp=Date.now()-1e3*t.vid.currentTime,t.curr=Math.abs((Date.now()-t.timeStamp)/1e3))),Math.abs(t.curr-t.vid.currentTime)<3?t.vid.currentTime=t.curr:(t.timeStamp=Date.now()-1e3*t.vid.currentTime,t.isAudio&&(t.audio.currentTime=t.vid.currentTime)),t.prevPos=t.curr,t.curr>=t.vid.duration)){if(t.vid.loop){(e=new Event("seeking")).innerEvent=!0,t.vid.dispatchEvent(e);(e=new Event("seeked")).innerEvent=!0,t.vid.dispatchEvent(e)}else{t.isPaused=!0,t.ended=!0;var e=new Event("pause");t.vid.dispatchEvent(e),t.win.cancelAnimationFrame(t.animFrame),t.win.clearTimeout(t.fallBackTimeout),t.win.requestAnimationFrame(function(){try{t.reportEndedVid()}catch(e){}})}t.timeStamp=Date.now(),t.curr=0}},this.reportEndedVid=function(){var e=new Event("pause");t.vid.dispatchEvent(e);(e=new Event("ended")).innerEvent=!0,t.vid.dispatchEvent(e)},this.destruct=function(){function e(t){if(t){var i,n,o,a=t.attributes;if(a)for(n=a.length,i=0;i<n;i+=1)"function"==typeof t[o=a[i].name]&&(t[o]=null);if(a=t.childNodes)for(n=a.length,i=0;i<n;i+=1)e(t.childNodes[i]),t.childNodes[i]&&t.removeChild(t.childNodes[i])}}if(t.isAudio)try{t.audio.pause()}catch(e){}t.win.cancelAnimationFrame(t.animFrame),t.win.clearTimeout(t.fallBackTimeout),e(t)}}},SekindoServices.setAmpPostMessageListeners=function(e,t){e.hasOwnProperty("ampListenerSet")||(window.addEventListener("message",function(i){if(i.data)try{var n=JSON.parse(i.data.replace("amp-",""));if(n.sentinel!=window.parent.AMP_CONTEXT_DATA.sentinel||"intersection"!=n.type)return;e.currentChanges=n.changes,t(n.changes)}catch(e){}}),window.parent.parent.postMessage({sentinel:window.parent.AMP_CONTEXT_DATA.sentinel,type:"send-intersections"},"*"),e.ampListenerSet=!0)},SekindoServices.viewabilityChecker=function(e){function t(e,t){o(e[e.length-1].intersectionRatio)}function i(t){if(a.config.isAmpProject)!function(){var e=window;do{try{if(void 0!==e.parent.context){e.parent.window.context.observeIntersection(n);break}}catch(e){break}e=e.parent}while(e!=e.parent)}();else{if("slider"===a.config.playerMode){if("visibility"!==t)return void o(1);e.bus.triggerNote("sliderOnVisibilityChange")}if(!a.config.onVisibilityChange.getCurrState()&&!a.currViewabilityState[0].status)return;o(SekindoUtils.isElementInViewPort(a.config,s,a.config.rootWindow))}}function n(t){var i=e.ampView;window.ampView=e.ampView=t[0].intersectionRect.height>e.height/2,i!==e.ampView&&o(e.ampView?1:0)}function o(e){if("slider"===a.config.playerMode){a.config.bus.getParam("visibilityStatus")&&(e=1)}for(var t=0;t<a.currViewabilityState.length;t++){var i=e>a.currViewabilityState[t].type;a.currViewabilityState[t].status==i&&"slider"!==a.config.playerMode||(a.currViewabilityState[t].status=i,a.config.primisConsoleLog(`report view change - ${i}`),a.config.bus.triggerNote("onViewabilityChange",{type:a.currViewabilityState[t].type,status:i}))}}var a=this;this.config=e,this.currViewabilityState=[{type:a.config.playerInViewPrc,status:!1},{type:a.config.adInViewPrc,status:!1}],this.config.bus.setParam("currViewabilityState",function(e){return a.getRequestedViewabilityStatus(e)}),this.isViewableWasFalse=!1;var s=this.config.videoIFrameDiv,r=this.config.bus.getParam("isAmpIframe");if(setTimeout(function(){o(SekindoUtils.isElementInViewPort(a.config,a.config.videoIFrameDiv,a.config.rootWindow))},1),this.getRequestedViewabilityStatus=function(e){for(var t=0;t<a.currViewabilityState.length;t++)if(a.currViewabilityState[t].type==e)return a.currViewabilityState[t]},a.config.viewabilityByElement&&a.config.viewabilityByElement.element&&function(e){var t=e.elementNumber?parseInt(e.elementNumber):0;"id"==e.type?a.config.viewabilityByElement.viewabilityElement=a.config.rootDocument.getElementById(e.name):"class"==e.type?a.config.viewabilityByElement.viewabilityElement=a.config.rootDocument.getElementsByClassName(e.name)[t]:"querySelector"==e.type&&(a.config.viewabilityByElement.viewabilityElement=a.config.rootDocument.querySelectorAll(e.name)[t]),a.config.viewabilityByElement.viewabilityElement&&(a.config.checkerType="interval")}(a.config.viewabilityByElement.element),r)this.config.bus.addCallBack("ampIframeViewableChange",function(e){o(e)});else if(a.config.isAppsGeometry)this.config.bus.addCallBack("isAppViewableChange",function(e){o(e?1:0)});else if(a.config.isAmpProject||"interval"==a.config.checkerType)this.checkViewabilityInterval=setInterval(i,200);else{var l={root:null,rootMargin:"0px",threshold:[a.config.playerInViewPrc,a.config.adInViewPrc]};this.observer=new e.rootWindow.IntersectionObserver(t,l),this.observer.observe(s)}this.config.isAmpProject&&void 0===window.parent.context&&SekindoServices.setAmpPostMessageListeners(e,n),this.config.bus.addCallBack("onVisibilityChange",function(){i("visibility")}),this.observerController=function(e){a.observer&&("start"==e?a.observer.observe(s):a.observer.unobserve(s))},this.changeObserverStatus=this.config.bus.addCallBack("changeObserverStatus",function(e){a.observerController(e)}),this.destruct=function(){clearInterval(this.checkViewabilityInterval),SekindoUtils.deleteMe(this)}},SekindoServices.viewabilityDurationChecker=function(e,t,i){var n=this;this.config=e,this.type=t,this.callback=i||null,this.durationTimeout=null,this.startDurationChecker=function(){this.currViewabilityState=this.config.bus.getParam("currViewabilityState",t),this.currViewabilityState.status&&this.createDurationTimeout(),this.viewabilityCallbackId=this.config.bus.addCallBack("onViewabilityChange",function(e){n.type==e.type&&n.checkDurationTimeout(e)})},this.createDurationTimeout=function(){n.durationTimeout=setTimeout(n.runCallback,1e3*n.config.inViewDuration)},this.checkDurationTimeout=function(e){1!=e.status||n.durationTimeout?0==e.status&&n.durationTimeout&&(clearTimeout(n.durationTimeout),n.durationTimeout=null):this.createDurationTimeout()},this.runCallback=function(){n.callback(),n.destruct()},this.destruct=function(){n.config.bus.removeBusItm(n.viewabilityCallbackId),clearTimeout(n.durationTimeout),n.durationTimeout=null,SekindoUtils.deleteMe(this)}},SekindoServices.elementViewabilityChecker=function(e,t,i,n){function o(e){for(var t=0;t<a.elementStatus.length;t++){var i=e>=a.elementStatus[t].threshold;a.elementStatus[t].viewable!=i&&(a.elementStatus[t].viewable=i,a.config.bus.triggerNote("elementViewabilityChecker",{id:a.checkerId,thresholdObj:a.elementStatus[t]}))}}var a=this;this.config=e,this.checkerId=t,this.element=i,this.threshold=n,this.elementChecker=void 0,this.elementStatus=[],this.config.bus.setParam("elementViewabilityStatus",function(e){if(!e)return a.elementStatus;for(var t=0;t<a.elementStatus.length;t++)if(a.elementStatus[t].threshold==e)return a.elementStatus[t].viewable}),function(e){for(var t=SekindoUtils.isElementInViewPort(a.config,a.element,a.config.rootWindow,!0),i=0;i<e.length;i++){var n=t>=e[i],o={threshold:e[i],viewable:n};a.elementStatus.push(o)}}(this.threshold),this.elementChecker=this.config.isAmpProject||"interval"==this.config.checkerType?new function(){function e(){o(SekindoUtils.isElementInViewPort(a.config,a.element,a.config.rootWindow))}function t(){var e=SekindoUtils.isElementInViewPort(a.config,a.element,a.config.rootWindow),t=a.config.viewabilityByElement.threshold?a.config.viewabilityByElement.threshold:.5;if(e>t){var i=.01*(a.element.getBoundingClientRect().bottom-(a.element.getBoundingClientRect().bottom-a.element.getBoundingClientRect().top)*t-a.config.viewabilityByElement.viewabilityElement.getBoundingClientRect().bottom);i<e&&(e=i)}o(e)}a.config.viewabilityByElement&&a.config.viewabilityByElement.viewabilityElement?this.checker=setInterval(t,500):this.checker=setInterval(e,500)}:new function(){var t="0px";a.config.observerOption&&a.config.observerOption.rootMargin&&(t=a.config.observerOption.rootMargin);var i={root:null,rootMargin:t,threshold:a.threshold};this.checker=new e.rootWindow.IntersectionObserver(function(e,t){o(e[e.length-1].intersectionRatio)},i),this.checker.observe(a.element)},this.destruct=function(){"observer"==this.config.checkerType?this.elementChecker.checker.unobserve(this.element):clearInterval(this.elementChecker.checker),SekindoUtils.deleteMe(a)}},SekindoServices.onVisibilityChange=function(e){var t=this;this.config=e,this.callbacksVisibilityArray=[],this.callbackVisibilityId=0,this.visibilityListener=null,this.config.bus.setParam("visibilityStatus",function(){return t.getCurrState()}),this.visibilityChangeCallback=function(e){var i="boolean"==typeof e?e:t.getCurrState();t.config.bus.triggerNote("onVisibilityChange",i)},this.getCurrState=function(){return this.config.isAppsGeometry?this.config.appsGeometryStatus.inActiveView:"visible"==(document.visibilityState||document.webkitVisibilityState)},this.config.isAppsGeometry?this.config.bus.addCallBack("inActiveViewChange",function(e){t.visibilityChangeCallback(e)}):t.visibilityListener=document.addEventListener("visibilitychange",t.visibilityChangeCallback),this.destruct=function(){SekindoUtils.deleteMe(this)}},SekindoServices.fullscreen=function(e){var t,i,n,o=this,a=e.playerIframeDiv,s=e.rootWindow.top,r=SekindoUtils.getOrientation(),l=r,c=0,d=null;if(screen&&screen.width)var p=Math.abs(e.rootWindow.orientation),h=90==p&&screen.width>screen.height||0==p&&screen.width<screen.height?90:0;this.config=e,this.fsElement=void 0;var u=navigator.userAgent.match(/MSIE 10/i),g={requestFullscreen:"requestFS",exitFullscreen:"exitFS",fullscreenElement:"fsElement",fullscreenEnabled:"fsEnabled",fullscreenchange:"fsChange",fullscreenerror:"fsError"};if(this.fs=function(){if(o.config.playerTemplateData.isLightBox)return g;if(o.config.isAmpProject)return["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"];for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i={},n=0;n<t.length;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)i[t[0][n]]=e[n];return i}return g}(),"requestFS"==this.fs.requestFullscreen){SekindoUtils.isFriendlyIframe()&&(e.rootDocument.fsEnabled=!0);var f=function(){if(r=SekindoUtils.getOrientation(),o.config.rootDocument.fsElement){if(r!=l){l=r;var e=0;clearInterval(n),n=setInterval(function(){v(r),++e>7&&clearInterval(n)},100)}}else l=r},m=function(e){o.config.rootDocument.fsElement&&27==(e=e||o.config.rootWindow.event).keyCode&&o.exit()},v=function(t){var i=window.top.innerWidth,n=window.top.innerHeight;if("chrome"==o.config.clientInfo.browser&&"ios"==o.config.clientInfo.os)i=o.config.rootWindow.innerWidth,n=o.config.rootWindow.innerHeight;window.primisLog("[[FULLSCREEN]] onFullscreenResize1:"+i+" - "+n),a.style.width=i+"px",a.style.height=n+"px",a.style.position="absolute",e.playerIframeDiv.style.width=a.offsetWidth+"px",e.playerIframeDiv.style.height=a.offsetHeight+"px",c=0,y(!0),o.config.bus.triggerNote("onFSOrientationChange")},y=function(e){var t=0;try{t=parseInt(s.getComputedStyle(s.document.documentElement).paddingTop)}catch(e){}var i=s.document.body.scrollTop||s.document.documentElement.scrollTop;i-=t,a.style.top=o.config.playerTemplateData.isLightBox?"0px":i+"px",a.style.left=o.config.playerTemplateData.isLightBox?"0px":(s.document.body.scrollLeft||s.document.documentElement.scrollLeft)+"px",!0!==e&&++c>1&&(c=0,o.exit())};o.config.rootWindow.addEventListener("orientationchange",f,!1),o.config.playerTemplateData.isLightBox&&o.config.rootWindow.addEventListener("keydown",m,!1)}else this.config.rootWindow.addEventListener("orientationchange",function(){if(SekindoServices.fullscreen.isFullscreen)if(screen&&screen.width){var e=Math.abs(o.config.rootWindow.orientation);clearInterval(d),d=setInterval(function(){e==h&&screen.width>screen.height?(o.config.bus.triggerNote("onFSOrientationChange"),clearInterval(d)):e!=h&&screen.width<screen.height&&(o.config.bus.triggerNote("onFSOrientationChange"),clearInterval(d))},100),o.config.bus.triggerNote("onFSOrientationChange")}else o.config.bus.triggerNote("onFSOrientationChange")},!1);this.request=function(c){
if(e.allowFullScreen){var p,h=o.fs.requestFullscreen;if(l=r=SekindoUtils.getOrientation(),clearInterval(d),c=c||e.playerIframeDiv,this.fsElement=c,"requestFS"==h){if(clearInterval(t),clearInterval(i),clearInterval(n),s.removeEventListener("scroll",y),p=!1,u)try{new ActiveXObject("WScript.Shell").SendKeys("{F11}"),p=!0}catch(e){}function g(){return e.rootWindow.outerWidth-screen.width==0&&e.rootWindow.outerHeight-screen.height==0}function f(){o.config.playerTemplateData.isLightBox||SekindoUtils.disablePositions(o.config.playerIframeDiv,!0);var i=window.top.innerWidth,n=window.top.innerHeight;o.setts={position:a.style.position,top:a.style.top,left:a.style.left,backgroundColor:a.style.backgroundColor,width:a.style.width,height:a.style.height},a.style.position=o.config.playerTemplateData.isLightBox?"fixed":"absolute",a.style.backgroundColor=o.config.playerTemplateData.isLightBox?"rgba(0,0,0,0.6":"black",o.prevZIndex=a.style.zIndex,a.style.zIndex=2147483647,a.style.width=o.config.playerTemplateData.isLightBox?"100%":i+"px",a.style.height=o.config.playerTemplateData.isLightBox?"100%":n+"px",o.config.playerTemplateData.isLightBox&&(o.config.mainPlayerDiv.style.top="50%",o.config.mainPlayerDiv.style.left="50%",o.config.mainPlayerDiv.style.position="absolute",o.config.mainPlayerDiv.style.transform="translate(-50%, -50%)"),y(!0),e.rootDocument.fsElement=o.fsElement;var r=e.rootDocument.createEvent("Event");r.initEvent("fsChange",!1,!1),r.message="fsChange",e.rootDocument.dispatchEvent(r),p&&(t=setInterval(function(){g()||(clearInterval(t),setTimeout(function(){o.exit(!0)},1))},10)),o.config.playerTemplateData.isLightBox||(s.addEventListener("scroll",y),e.playerIframeDiv.addEventListener("touchstart",function(e){e.touches.length>1&&o.exit(!0)}))}p?i=setInterval(function(){g()&&(clearInterval(i),setTimeout(function(){f()},1))},10):f()}else if(/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent))c[h]();else if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))a.style.width="100%",a.style.height="100%",c[h]();else{var m="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element&&Element.ALLOW_KEYBOARD_INPUT;m?c[h](m):c[h]()}}},this.exit=function(r){if("exitFS"==o.fs.exitFullscreen){if(clearInterval(t),clearInterval(i),clearInterval(n),s.removeEventListener("scroll",y),SekindoUtils.disablePositions(this.config.playerIframeDiv,!1),u&&!r)try{new ActiveXObject("WScript.Shell").SendKeys("{F11}")}catch(e){}a.style.position=o.setts.position,a.style.top=o.setts.top,a.style.left=o.setts.left,a.style.backgroundColor=o.setts.backgroundColor,a.style.zIndex=o.prevZIndex,a.style.width=o.setts.width,a.style.height=o.setts.height,e.playerIframeDiv.style.width=a.offsetWidth+"px",e.playerIframeDiv.style.height=a.offsetHeight+"px",e.rootDocument.fsElement=void 0;var l=e.rootDocument.createEvent("Event");l.initEvent("fsChange",!1,!1),l.message="fsChange",e.rootDocument.dispatchEvent(l)}else clearInterval(d),e.rootDocument[o.fs.exitFullscreen]()},this.toggle=function(e){this.isFullscreen?this.exit():this.request(e)},this.onchange=function(e){o.config.rootDocument.addEventListener(o.fs.fullscreenchange,function(){o.config.rootDocument[o.fs.fullscreenElement]?o.fsElement==o.config.rootDocument[o.fs.fullscreenElement]&&e():e()},!1)},this.onerror=function(e){o.config.rootDocument.addEventListener(o.fs.fullscreenerror,e,function(){e()},!1)},Object.defineProperties(o,{isFullscreen:{get:function(){return Boolean(o.fsElement&&o.fsElement==o.element)}},element:{enumerable:!0,get:function(){return o.config.rootDocument[o.fs.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(o.config.rootDocument[o.fs.fullscreenEnabled])}}}),this.onchange(function(){o.config.bus.triggerNote("onFsChange",SekindoServices.fullscreen.isFullscreen)})},SekindoServices.resizeChecker=function(e,t,i){var n=this,o=1,a=i.getParam("config.rootWindow");this.checkResize=function(i){var s=e.currentStyle||a.getComputedStyle(e),r=e.offsetWidth,l=parseFloat(s.marginLeft)+parseFloat(s.marginRight)+(parseFloat(s.paddingLeft)+parseFloat(s.paddingRight))+(parseFloat(s.borderLeftWidth)+parseFloat(s.borderRightWidth));l?r=e.parentNode.offsetWidth:l=0;var c=r-l;(i||o!=c)&&t({width:o=c,height:1/0}),i||a.requestAnimationFrame(function(){n.checkResize(!1)})},a.requestAnimationFrame(function(){n.checkResize(!1)})},SekindoServices.constructPixelDiv=function(e){var t=this;this.config=e,this.lockReconstruction=!1,this.reConstructPixelDiv=function(){if(!t.lockReconstruction){this.pixelDivTimeout&&clearTimeout(this.pixelDivTimeout),this.config.pixelDivTimeout&&(this.pixelDivTimeout=setTimeout(function(){t.lockReconstruction=!1},t.config.pixelDivTimeout));var i=this.config.pixelDiv;i&&(i.id="divToDestruct");var n=e.rootWindow.document.createElement("div");n.id="pixelsDiv",n.style.width="0px",n.style.height="0px",this.config.mainVideoDiv.appendChild(n),this.config.pixelDiv=n,t.lockReconstruction=!0,setTimeout(function(){i&&i.parentNode&&i.parentNode.removeChild(i)},5e3)}},this.reConstructPixelDiv()},SekindoServices.controlDragElements=function(e){var t=this;this.config=e,this.enableFlowDrag=function(e){function i(){!t.config.flowStatus||SekindoServices.fullscreen.isFullscreen||t.config.isAppSdk||(h.style.top=t.config.savedFlowOffsets.frameTop,h.style.left=t.config.savedFlowOffsets.frameLeft,h.style.bottom=t.config.savedFlowOffsets.frameBottom,h.style.right=t.config.savedFlowOffsets.frameRight)}function n(i){if(t.config.flowStatus&&!SekindoServices.fullscreen.isFullscreen&&!t.config.isAppSdk){i.preventDefault(),l=h.offsetTop,c=h.offsetLeft,d=window.top.innerHeight-t.config.playerHeight,p=window.top.innerWidth-t.config.playerWidth;var n=i.touches[0];s=n.clientX,r=n.clientY,e.addEventListener("touchend",a),e.addEventListener("touchmove",o)}}function o(e){e.preventDefault();var t=e.touches[0],i=t.clientY-r,n=t.clientX-s;s=t.clientX,r=t.clientY,h.style.top=Math.min(Math.max(l+i,0),d)+"px",h.style.left=Math.min(Math.max(c+n,0),p)+"px",l=h.offsetTop,c=h.offsetLeft}function a(){e.removeEventListener("touchend",a),e.removeEventListener("touchmove",o)}var s,r,l=0,c=0,d=0,p=0,h=t.config.playerIframeDiv;t.config.flowDragEnabled&&(e.addEventListener("touchstart",n),window.addEventListener("orientationchange",i,!1))}},SekindoServices.heavyAdObserver=function(e,t,i,n){var o=this,a="https://"+i.currentServerName+"/live/liveTracker.php?req=rds&cmd=setinc&url=&k=";this.config=i,this.id=e,this.testId="7",this.win=t,this.callback=n||void 0,this.observerCallback=null,this.isAmpIframe=i.bus.getParam("isAmpIframe");try{new t.ReportingObserver(function(e,t){!function(e){try{for(var t=0;t<e.length;t++){var i=new Date,n=i.getDate().toString()+"_"+(i.getMonth()+1).toString(),s=(e[t].body&&e[t].body.message?e[t].body.message:"NoInterventionMsg.").split(".")[0];if(e[t].body&&e[t].body.id&&"HeavyAdIntervention"==e[t].body.id&&SekindoUtils.isFriendlyIframe()&&!o.config.isAmpProject&&!o.isAmpIframe){var r="_"+o.id+"_"+o.testId+"&hk="+encodeURIComponent(s);SekindoUtils.firePixel(a+n+r,o.config.pixelDiv,o.config);var l="_domains_"+o.testId+"&hk="+encodeURIComponent(o.config.domain)+"_"+o.id;SekindoUtils.firePixel(a+n+l,o.config.pixelDiv,o.config)}else e[t].body&&e[t].body.id&&"HeavyAdIntervention"==e[t].body.id&&o.isAmpIframe&&(r="_amp_"+o.id+"_"+o.testId+"&hk="+encodeURIComponent(s),SekindoUtils.firePixel(a+n+r,o.config.pixelDiv,o.config),l="_amp_domains_"+o.testId+"&hk="+encodeURIComponent(o.config.domain)+"_"+o.id,SekindoUtils.firePixel(a+n+l,o.config.pixelDiv,o.config));"vpaid"==o.id&&o.callback("intervention")}}catch(e){}}(e)},{buffered:!0}).observe()}catch(e){}this.destruct=function(){try{SekindoUtils.deleteMe(o)}catch(e){}}},SekindoServices.orientationChecker=function(e){function t(){if((a=SekindoUtils.getOrientation())!=s){s=a;var e=0;clearInterval(o),o=setInterval(function(){n(),++e>7&&clearInterval(o)},100)}}function i(){SekindoUtils.getOrientation();screen&&screen.width?(clearInterval(o),o=setInterval(function(){var e=SekindoUtils.getOrientation();e==c&&screen.width>screen.height&&l.innerWidth>l.innerHeight?(n(),clearInterval(o)):e!=c&&screen.width<screen.height&&l.innerWidth<l.innerHeight&&(n(),clearInterval(o))},100)):SekindoUtils.delayRequest(function(){n()},3,l)}function n(){var t=SekindoUtils.getOrientation();e.triggerNote("onOrientationChange",t)}var o=null,a=SekindoUtils.getOrientation(),s=a,r=void 0,l=e.getParam("config.rootWindow");if(screen&&screen.width)var c=90==a&&screen.width>screen.height||0==a&&screen.width<screen.height?90:0;r="ios"==e.getParam("config.clientInfo").os?t:i,"onorientationchange"in window?l.addEventListener("orientationchange",r,!1):l.addEventListener("resize",r,!1),e.setParam("getOrientation",function(){return SekindoUtils.getOrientation()})},SekindoServices.createIframeIasBrandSafety=function(e){var t=e.iasBrandSafetyPixel,i=e.rootDocument.createElement("iframe");(i.frameElement||i).style.cssText="width: 0; height: 0; border: 0; display: none;",i.src="javascript:false",e.videoIFrameDiv.appendChild(i),i.onload=function(){i.contentWindow.__IntegralASUseFIF=!0;var e=i.contentWindow.document.createElement("script");e.src=t,i.contentWindow.document.body.appendChild(e)}},SekindoOutStream=function(e,t){var i=this,n={};this.config=e,this.config.savedFlowOffsets={frameTop:-1,frameLeft:-1,frameBottom:-1,frameRight:-1};var o=this.config.playerIframeDiv,a=this.config.windowParentDocument,s=o.style;if(this.animatedElement=s,this.uniqueID=t,"flow"!=this.config.playerMode&&"sticky"!=this.config.playerMode&&"snapIt"!=this.config.playerMode&&(this.config.isAutoPlay="3"),this.hadImpression=!1,this.config.clsActive=!1,this.userClosed=!1,this.userClosedFlow=!1,this.config.bus.addCallBack("adCompleted",function(){i.onAdEvent("adCompleted")}),this.config.bus.addCallBack("adStarted",function(){i.onAdEvent("adStarted")}),this.sliderPosArr=i.config.sliderDir.split(""),n.side="r"==i.sliderPosArr[1]?"right":"left",n.botTop="b"==i.sliderPosArr[0]?"bottom":"top",n.allowFloawAnimate=void 0!==i.sliderPosArr[2]&&"a"==i.sliderPosArr[2],this.params=n,this.onUserEvent=function(e){switch(e.type){case"onCloseBtnClick":"slider"!=i.config.playerMode&&"inRead"!=i.config.playerMode&&"inUnit"!=i.config.playerMode&&SekindoUtils.firePixel(i.config.closeFloatPixel,i.config.pixelDiv,i.config),function(){function e(){s.display="none",i.config.sPlayer.destructPlayer()}if("flow"==i.config.playerMode||"snapIt"==i.config.playerMode)return i.userClosedFlow=!0,i.config.bus.triggerNote("onUserEvent",{type:"onMute",value:!0}),i.config.bus.triggerNote("APIuserFloatClose"),M&&s.removeProperty("top"),void("flow"==i.config.playerMode?(ne(),i.flowDestruct()):(A(),i.snapItDestruct()));if(i.config.adsProcessPaused=!0,i.config.isAutoPlay="0",i.adsManager.stopAd(!0),i.hadImpression=!1,i.userClosed=!0,"sticky"==i.config.playerMode&&i.config.bus.triggerNote("APIuserFloatClose"),"sticky"==i.config.playerMode){var t=i.config.videoWidth||i.config.width;SekindoUtils.animateTo(s,n.side,-1*t-100+"px",.8,"easeIn",e)}else"slider"===i.config.playerMode?i.slider.slideOut():"inRead"!=i.config.playerMode&&"inUnit"!=i.config.playerMode||SekindoUtils.animateTo(s,"height","1px",.8,"easeIn",e)}()}},this.config.bus.addCallBack("onUserEvent",function(e){i.onUserEvent(e)}),"inRead"==this.config.playerMode){var r=i.config.videoWidth||i.config.width,l=i.config.videoHeight||i.config.height;this.config.videoIFrameDiv.style.opacity=0;var c=!1;function d(){function e(){s.height="1px",i.config.videoIFrameDiv.style.opacity=0,i.userClosed&&i.config.sPlayer.destructPlayer()}var t=i.config.videoWidth||i.config.width,n=i.config.videoHeight||i.config.height;if(!c&&i.hadImpression){c=!0,i.config.videoIFrameDiv.style.opacity=1;var o={extFrameWidth:t,extFrameHeight:1};i.config.bus.triggerNote("requestLayoutResize",o),SekindoUtils.animateTo(s,"height",n+"px",.8,"easeOut")}else c&&!i.hadImpression&&(c=!1,SekindoUtils.animateTo(s,"height","1px",.8,"easeIn",e))}this.showMeInterval&&clearInterval(this.showMeInterval),this.showMeInterval=setInterval(d,100);var p={width:r,height:l,extFrameWidth:r,extFrameHeight:1};setTimeout(function(){i.config.bus.triggerNote("requestLayoutResize",p)},1)}else if("snapIt"==this.config.playerMode){if(this.config.isAmpProject||this.config.bus.getParam("isAmpIframe"))return;this.config.snapItStatus=!1,this.isFullscreen=!1;var h=this.config.flowWidth,u=this.config.flowHeight,g=this.config.playerIframeDiv,f=this.config.width,m=this.config.height,v=[.5],y=10;n.side="left",this.config.flowCloseBtnBotTop=n.botTop="bottom";try{if(window.top.sekindoFlowingPlayerOn&&this.config.disableFlowPlayer)return;window.top.sekindoFlowingPlayerOn=!0}catch(e){}(I=this.config.rootDocument.createElement("div")).id="placeHolder",I.style.overflow="hidden",I.style.width="100%",I.style.height="100%";(D=this.config.rootDocument.createElement("div")).style.position="absolute",D.style.top="50%",D.style.left="50%",D.style.transform="translate(-50%, -50%) scale(1)",D.style.display="none",I.appendChild(D);var b=this.config.rootDocument.createElement("div"),S=this.config.rootDocument.createElement("div");b.setAttribute("style","width: 100px;height: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 5px solid #eeeeee;border-radius: 500px;"),S.setAttribute("style","position: absolute;top: 50%;left: 4px;transform: translate(-50%, -50%);width: 0;height: 0;border-top: 15px solid transparent;border-left: 27px solid #eeeeee;border-bottom: 15px solid transparent;"),D.appendChild(b),D.appendChild(S),this.config.containerDiv.appendChild(I);function w(){var e=i.config.playerWidth||i.config.width,t=i.config.playerHeight||i.config.height;I.style.width=e+"px",I.style.height=t+"px";var n=Math.min(e/140,t/140);D.style.transform="translate(-50%, -50%) scale("+n+")"}SekindoUtils.delayRequest(function(){w()},2,i.config.rootWindow),this.config.bus.addCallBack("onPlayerResize",function(e){i.config.snapItStatus||SekindoServices.fullscreen.isFullscreen||w()});function k(){D.style.display="block",i.config.snapItStatus=!0,i.config.bus.triggerNote("onFlowStatusChange",!0),i.config.bus.triggerNote("APIfloatStatusChange",1),i.config.allowFloatingShadow&&(i.config.isFloatingBar?s.boxShadow="1px 6px 8px 4px rgba(0, 0, 0, 0.4)":s.boxShadow="1px 1px 6px 3px rgba(0, 0, 0, 0.4)"),s.borderRadius="1px",i.config.clsActive=!0,s.display="none",s.zIndex=i.config.flowZindex||SekindoUtils.getHighestZIndex(i.config.rootWindow,"")+1,i.config.bus.triggerNote("requestLayoutResize",{source:"doFlow",width:h,height:u}),s.position="sticky";var e=i.config.playerIframeDiv.parentElement.getBoundingClientRect();s[n.side]=e.left+e.width-h-y+"px",s[n.botTop]=i.config.sliderOffset+"px",s.top="auto",s.height=0,i.config.mainPlayerDiv.style.position="absolute",i.config.mainPlayerDiv.style.bottom=0,SekindoUtils.delayRequest(function(){s.display="block",i.config.clsActive=!1,i.config.bus.triggerNote("exposeHideCloseUnit",{status:"open"})},1,i.config.rootWindow)}function A(){i.config.snapItStatus=!1,i.config.bus.triggerNote("onFlowStatusChange",!1),i.config.bus.triggerNote("APIfloatStatusChange",0),s.boxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0)",s.borderRadius="0px",s.boxShadow=null,s.zIndex=i.config.flowZindex||SekindoUtils.getHighestZIndex(i.config.rootWindow,"")+1,i.config.clsActive=!0,s.display="none",s.position="absolute",s.left=0,s.top=0,s.removeProperty("bottom"),D.style.display="none",i.config.responsive?i.config.bus.triggerNote("requestLayoutResize",{source:"doUnFlow",responsive:!0}):i.config.bus.triggerNote("requestLayoutResize",{source:"doUnFlow"}),s.height=i.config.height+"px",s.removeProperty("transform"),SekindoUtils.delayRequest(function(){s.display="block",i.config.clsActive=!1;var e=i.config.playerIframeDiv.getBoundingClientRect(),t=i.config.containerDiv.getBoundingClientRect();s[n.side]=t.x-e.x+"px",s.top=t.y-e.y+"px",i.config.bus.triggerNote("exposeHideCloseUnit",{status:"close"})},1,i.config.rootWindow)}SekindoUtils.delayRequest(function(){i.elementChecker=new SekindoServices.elementViewabilityChecker(i.config,"snapIt",I,v),i.elementViewabilityChange=i.config.bus.addCallBack("elementViewabilityChecker",function(e){if(!i.isFullscreen&&"snapIt"==e.id&&.5==e.thresholdObj.threshold&&e.thresholdObj.viewable)A();else if(!i.isFullscreen&&"snapIt"==e.id&&.5==e.thresholdObj.threshold&&!e.thresholdObj.viewable){I.getBoundingClientRect().bottom>window.top.innerHeight-m/2||k()}}),i.config.bus.getParam("elementViewabilityStatus",.5)?A():k()},1,i.config.rootWindow),i.fullScreenFlowChange=i.config.bus.addCallBack("onFsChange",function(e){if(i.isFullscreen=e,!e){i.config.bus.getParam("elementViewabilityStatus",.5)?A():k()}}),this.snapItDestruct=function(){i.elementChecker.destruct(),this.config.bus.removeBusItm(i.elementViewabilityChange),this.config.bus.removeBusItm(i.fullScreenFlowChange)}}else if("flow"==this.config.playerMode){if(this.config.isAmpProject||this.config.bus.getParam("isAmpIframe"))return;this.config.flowStatus=!1,this.config.bus.setParam("flowStatus",function(){return i.config.flowStatus}),this.isFullscreen=!1;var I,E=.6,P=this.config.flowWidth,C=this.config.flowHeight,T=(g=this.config.playerIframeDiv,f=this.config.width,m=this.config.height,y=this.config.sliderSideOffset+("string"==typeof this.config.sliderSideOffset?"":"px"),v=[.5],"both"===i.config.flowMode||"above"===i.config.flowMode),x="both"===i.config.flowMode||"seenboth"===i.config.flowMode||"below"===i.config.flowMode;try{if(window.top.sekindoFlowingPlayerOn&&this.config.disableFlowPlayer)return;window.top.sekindoFlowingPlayerOn=!0}catch(e){}(I=this.config.rootDocument.createElement("div")).id="placeHolder",I.style.position="absolute",I.style.overflow="hidden",I.style.width="100%",I.style.height="100%";var D;(D=this.config.rootDocument.createElement("div")).style.position="absolute",D.style.top="50%",D.style.left="50%",D.style.transform="translate(-50%, -50%) scale(1)",D.style.display="none",I.appendChild(D);b=this.config.rootDocument.createElement("div"),S=this.config.rootDocument.createElement("div");b.setAttribute("style","width: 100px;height: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 5px solid #eeeeee;border-radius: 500px;"),S.setAttribute("style","position: absolute;top: 50%;left: 4px;transform: translate(-50%, -50%);width: 0;height: 0;border-top: 15px solid transparent;border-left: 27px solid #eeeeee;border-bottom: 15px solid transparent;"),D.appendChild(b),D.appendChild(S),g.parentNode.insertBefore(I,g);try{if(!this.config.isDesktop&&"ios"==this.config.clientInfo.os&&!this.config.isApp){var V=this.config.rootWindow;V.document.body.addEventListener("touchstart",function(){}),V.document.body.addEventListener("touchmove",function(){})}}catch(e){}var M=!1;if(i.config.flowToAbsoluteParams&&(i.config.flowToAbsoluteParams.alignHorizontalToElement||i.config.flowToAbsoluteParams.snapElement)||i.config.dynamicVerticalOffset&&i.config.dynamicVerticalOffset.dynamicElement){function L(e){return"id"==e.type?a.getElementById(e.name):"class"==e.type?a.getElementsByClassName(e.name)[U(e)]:"querySelector"==e.type?a.querySelectorAll(e.name)[U(e)]:null}function U(e){return e.elementNumber?parseInt(e.elementNumber):0}if(i.config.flowToAbsoluteParams&&(i.config.flowToAbsoluteParams.snapElement||i.config.flowToAbsoluteParams.alignHorizontalToElement)){var R=i.config.flowToAbsoluteParams.snapElement?L(i.config.flowToAbsoluteParams.snapElement):null,N=i.config.flowToAbsoluteParams.alignHorizontalToElement?L(i.config.flowToAbsoluteParams.alignHorizontalToElement):null,O=a.getElementsByClassName(i.config.flowToAbsoluteParams.wrappingElementClass),F=0;if(O&&O[0]&&O[0].style.top&&(F=parseInt(O[0].style.top)),R){var _=R.getBoundingClientRect().top<this.config.playerIframeDiv.parentNode.getBoundingClientRect().top;M=!0,this.snapParms={},this.snapParms.absTopAdj=i.config.flowToAbsoluteParams.absTopAdj||0,this.snapParms.fixedAd=i.config.flowToAbsoluteParams.fixedAd||0,this.snapParms.leftAdj=i.config.flowToAbsoluteParams.leftAdj||0,this.snapParms.ignoreAbsOffset=i.config.flowToAbsoluteParams.ignoreAbsOffset||0,this.snapParms.removeFloatingUnit=i.config.flowToAbsoluteParams.removeFloatingUnit||0,this.snapParms.insideRelative=i.config.flowToAbsoluteParams.insideRelative||0,this.snapParms.fixedElement=i.config.flowToAbsoluteParams.fixedElement||0,this.snapParms.fixedDirection=i.config.flowToAbsoluteParams.fixedDirection||0;var B,W,H=SekindoUtils.getViewportSize(e.rootWindow),j=_?R.getBoundingClientRect().top:H.h-R.getBoundingClientRect().bottom,G=j;function z(t,a){if(!SekindoServices.fullscreen.isFullscreen){var r=function(e){_&&(e=!0);if(!i.config.flowStatus)return!1;var t=_?R.getBoundingClientRect().bottom:H.h-R.getBoundingClientRect().top;if(i.snapParms.fixedElement)return t;if(e||j>t)return j=t,t>=0;if(j==t)return t>0;return G=(2*(t-j)+t+G)/2,j=t,G>0}(a);if(clearTimeout(W),t||(W=setTimeout(function(){z(!0,!0)},2)),t||B!==r)if(r)if(i.snapParms.removeFloatingUnit&&!t)i.config.bus.triggerNote("onUserEvent",{type:"onCloseBtnClick"}),i.config.bus.triggerNote("onUserEvent",{type:"onMute",value:1}),i.config.bus.triggerNote("onFlowClose");else{s.removeProperty(n.botTop);var l=e.rootWindow.scrollY,c=o.parentNode.getBoundingClientRect().top+l;if(i.snapParms&&i.snapParms.insideRelative){var d=L(i.snapParms.insideRelative);d&&(c=d.offsetTop)}if(i.snapParms.fixedElement){s.position="fixed";var p=i.config.sliderDir?i.config.sliderDir:"br";switch(i.snapParms.fixedDirection){case"above":s.top=R.getBoundingClientRect().top-i.config.flowHeight-i.snapParms.absTopAdj+"px";break;case"below":s.top=R.getBoundingClientRect().bottom-i.snapParms.absTopAdj+"px";break;default:s.top=p.includes("t")?R.getBoundingClientRect().top-i.config.flowHeight-i.snapParms.absTopAdj+"px":R.getBoundingClientRect().bottom-i.snapParms.absTopAdj+"px"}s[n.side]="left"==n.side?-1*(i.snapParms.leftAdj+parseInt(y))+"px":i.snapParms.leftAdj-parseInt(y)+"px"}else{var h=_?R.getBoundingClientRect().top+l-c+R.getBoundingClientRect().height+i.snapParms.absTopAdj+F+"px":R.getBoundingClientRect().top+l-i.config.playerHeight-i.snapParms.absTopAdj-c-F+"px";if(s.removeProperty("bottom"),s.top=h,s.position="absolute",i.snapParms.ignoreAbsOffset)s[n.side]="0px";else{var u=e.containerDiv.getBoundingClientRect(),g=parseInt(u.left+u.width);N&&ee(),s[n.side]="left"==n.side?-u.left+parseInt(y)+i.snapParms.leftAdj+"px":-1*(i.config.rootDocument.body.clientWidth-g-parseInt(y)-i.snapParms.leftAdj)+"px"}}}else i.config.flowStatus&&(s.removeProperty("top"),s[n.botTop]=i.config.sliderOffset+"px",s.position="fixed",N&&ee(),s[n.side]=y);B=r}}z(),e.rootWindow.addEventListener("scroll",function(){z()})}}else if(i.config.dynamicVerticalOffset&&i.config.dynamicVerticalOffset.observerType&&i.config.dynamicVerticalOffset.dynamicElement&&("safari"!=i.config.clientInfo.browser||i.config.clientInfo.extra.browserVersion>"13.3")){this.dynamicResizeObserver=null;var q=null,K=L(i.config.dynamicVerticalOffset.dynamicElement);if(K){var $=i.config.dynamicVerticalOffset.offset?parseInt(i.config.dynamicVerticalOffset.offset):0,X={};if("size"==i.config.dynamicVerticalOffset.observerType){function Q(){i.config.sliderOffset=K.getBoundingClientRect().height+$,s[n.botTop]=i.config.sliderOffset+"px"}this.dynamicResizeObserver=new ResizeObserver(Q),q=Q}else if("position"==i.config.dynamicVerticalOffset.observerType){var Y=i.config.dynamicVerticalOffset.timeout?parseInt(i.config.dynamicVerticalOffset.timeout):0;function J(){i.config.sliderOffset=K.offsetTop>=0?K.getBoundingClientRect().height+K.getBoundingClientRect().top+$:$,s[n.botTop]=i.config.sliderOffset+"px"}function Z(){Y?setTimeout(J,Y):J()}X={attributes:!0},this.dynamicResizeObserver=new MutationObserver(Z),q=Z}this.startObserve=function(){this.dynamicResizeObserver&&this.dynamicResizeObserver.observe(K,X),q&&q()}}}}function ee(){var e=N.getBoundingClientRect();"none"!=window.getComputedStyle(N).display&&e.right<window.top.innerWidth&&e.left<window.top.innerWidth&&e.top<window.top.innerHeight?(n.side="left",y=(y=e.left-(i.config.flowWidth-e.width)/2+(parseInt(i.config.flowToAbsoluteParams.sideOffset)||0)-window.scrollX)+i.config.flowWidth<window.top.innerWidth?y+"px":window.top.innerWidth-i.config.flowWidth+"px"):(n.side="r"==i.sliderPosArr[1]?"right":"left",y=i.config.sliderSideOffset+("string"==typeof i.config.sliderSideOffset?"":"px"))}function w(){var e=i.config.playerWidth||i.config.width,t=i.config.playerHeight||i.config.height;I.style.width=e+"px",I.style.height=t+"px";var n=Math.min(e/140,t/140);D.style.transform="translate(-50%, -50%) scale("+n+")"}SekindoUtils.delayRequest(function(){w()},2,i.config.rootWindow);var te=this.config.sliderDir.split("");n.side="r"==te[1]?"right":"left",n.botTop="b"==te[0]?"bottom":"top",n.allowFloawAnimate=void 0!==te[2]&&"a"==te[2],this.config.flowCloseBtnBotTop=n.botTop,"m"==this.sliderPosArr[1]&&(y="calc(50% - "+P/2+"px)"),this.config.bus.addCallBack("onPlayerResize",function(e){i.config.flowStatus||SekindoServices.fullscreen.isFullscreen||w()});function ie(){if(I.style.position="relative",D.style.display="block",i.config.flowStatus=!0,i.config.bus.triggerNote("onFlowStatusChange",!0),i.config.bus.triggerNote("APIfloatStatusChange",1),i.config.allowFloatingShadow&&(i.config.isFloatingBar?s.boxShadow="1px 6px 8px 4px rgba(0, 0, 0, 0.4)":s.boxShadow="1px 1px 6px 3px rgba(0, 0, 0, 0.4)"),s.borderRadius="1px",i.config.clsActive=!0,s.display="none",s.zIndex=i.config.flowZindex||SekindoUtils.getHighestZIndex(i.config.rootWindow,"")+1,i.config.bus.triggerNote("requestLayoutResize",{source:"doFlow",width:P,height:C}),M?z(!0):(s.position="fixed",N&&ee(),s[n.side]=y,s[n.botTop]=i.config.sliderOffset+"px"),SekindoUtils.delayRequest(function(){s.display="block",i.config.clsActive=!1,i.config.bus.triggerNote("exposeHideCloseUnit",{status:"open"})},1,i.config.rootWindow),n.allowFloawAnimate)try{s[n.botTop]="-80px",SekindoUtils.animateTo(s,n.botTop,i.config.sliderSideOffset+"px",E,"easeInOut")}catch(e){}i.dynamicResizeObserver&&i.startObserve()}function ne(){i.config.flowStatus=!1,i.config.bus.triggerNote("onFlowStatusChange",!1),i.config.bus.triggerNote("APIfloatStatusChange",0),s.boxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0)",s.borderRadius="0px",s.boxShadow=null,s.zIndex=0,i.config.clsActive=!0,s.display="none",s.position="relative",s[n.side]=null,s.removeProperty("top"),s[n.botTop]=null,D.style.display="none",i.config.responsive||i.config.bus.triggerNote("requestLayoutResize"),i.dynamicResizeObserver&&i.dynamicResizeObserver.disconnect(),SekindoUtils.applyExternalRules(i.config,"style","doUnFlow"),SekindoUtils.delayRequest(function(){s.display="block",i.config.clsActive=!1,I.style.position="absolute",i.config.bus.triggerNote("exposeHideCloseUnit",{status:"close"})},1,i.config.rootWindow)}function oe(e){if(!i.userClosedFlow){var t=!0;i.config.isPlayerApiActions&&(t=i.config.bus.getParam("apiFloatStatus"));var n=I.getBoundingClientRect().bottom,o=T&&n>i.config.rootWindow.top.innerHeight-m/2,a=x&&n<i.config.rootWindow.top.innerHeight-m/2;if("flow"==e&&t)o||a?(i.config.flowStatus=!0,ie()):i.config.flowStatus&&ne();else if("unflow"==e&&i.config.flowStatus){if((o||a)&&SekindoUtils.isElementInViewPort(i.config,I,i.config.rootWindow)<=0&&t)return;ne()}}}SekindoUtils.delayRequest(function(){if(i.config.isPlayerApiActions&&i.config.bus.addCallBack("apiFloat",function(e){i.config.bus.getParam("elementViewabilityStatus")[0].viewable||oe(e)}),i.elementChecker=new SekindoServices.elementViewabilityChecker(i.config,"flow",I,v),i.elementViewabilityChange=i.config.bus.addCallBack("elementViewabilityChecker",function(e){!i.isFullscreen&&"flow"==e.id&&.5==e.thresholdObj.threshold&&e.thresholdObj.viewable?oe("unflow"):i.isFullscreen||"flow"!=e.id||.5!=e.thresholdObj.threshold||e.thresholdObj.viewable||oe("flow")}),i.config.bus.getParam("elementViewabilityStatus",.5)?"seenboth"==i.config.flowMode&&(T=!0):(oe("flow"),i.initalFlowModeChange=i.config.bus.addCallBack("elementViewabilityChecker",function(e){"flow"==e.id&&.5==e.thresholdObj.threshold&&e.thresholdObj.viewable&&("seenboth"==i.config.flowMode&&(T=!0),i.config.bus.removeBusItm(i.initalFlowModeChange))})),"desktop"==i.config.clientInfo.deviceType&&"both"!==i.config.flowMode){var e=t();i.config.rootWindow.addEventListener("scroll",function(n){var o=t();e!==o&&(e=o,!i.isFullscreen&&e&&oe("flow"))});function t(){var e=I.getBoundingClientRect().bottom<=0,t=I.getBoundingClientRect().top>=i.config.rootWindow.innerHeight;return e?1:t?2:0}}},M?2:1,i.config.rootWindow),i.fullScreenFlowChange=i.config.bus.addCallBack("onFsChange",function(e){if(i.isFullscreen=e,!e){i.config.bus.getParam("elementViewabilityStatus",.5)?(M&&s.removeProperty("top"),oe("unflow")):oe("flow")}}),this.flowDestruct=function(){i.initalFlowModeChange&&this.config.bus.removeBusItm(i.initalFlowModeChange),i.elementChecker.destruct(),this.config.bus.removeBusItm(i.elementViewabilityChange),this.config.bus.removeBusItm(i.fullScreenFlowChange)}}else if("sticky"===this.config.playerMode)this.config.flowStatus=!0,g=this.config.playerIframeDiv,f=this.config.flowWidth,y=this.config.sliderSideOffset+("string"==typeof this.config.sliderSideOffset?"":"px"),"m"===this.sliderPosArr[1]&&(y="calc(50% - "+f/2+"px)"),i.config.allowFloatingShadow&&(i.config.isFloatingBar?s.boxShadow="1px 6px 8px 4px rgba(0, 0, 0, 0.4)":s.boxShadow="1px 1px 6px 3px rgba(0, 0, 0, 0.4)"),s.borderRadius="1px",s.position="fixed",s.zIndex=this.config.flowZindex||SekindoUtils.getHighestZIndex(this.config.rootWindow,"div")+1,s[n.side]=y,s[n.botTop]=this.config.sliderOffset+"px",SekindoUtils.delayRequest(function(){i.config.bus.triggerNote("exposeHideCloseUnit",{status:"open"})},1,this.config.rootWindow),-1==this.config.savedFlowOffsets.frameTop&&"desktop"!==this.config.clientInfo.deviceType&&(this.config.savedFlowOffsets.frameTop=s.top,this.config.savedFlowOffsets.frameBottom=s.bottom,this.config.savedFlowOffsets.frameRight=s.right,this.config.savedFlowOffsets.frameLeft=s.left);else if("inUnit"===this.config.playerMode){this.config.bus.addCallBack("adStarted",ae),this.config.bus.addCallBack("adCompleted",se),this.config.videoIFrameDiv.style.opacity=0;function ae(){i.config.videoWidth||i.config.width;var e=i.config.videoHeight||i.config.height;i.config.videoIFrameDiv.style.opacity=1,s.height=e+"px"}function se(){i.config.videoIFrameDiv.style.opacity=0,s.height="1px"}p={width:r,height:l,extFrameWidth:r,extFrameHeight:1};setTimeout(function(){i.config.bus.triggerNote("requestLayoutResize",p)},1)}else"slider"===this.config.playerMode&&(this.slider=Slider(this.config,this.animatedElement,this.params))},SekindoOutStream.prototype.onAdEvent=function(e){"adStarted"===e?(this.hadImpression=!0,"slider"===this.config.playerMode&&this.slider.slideIn()):"adCompleted"===e&&(this.hadImpression=!1,"slider"===this.config.playerMode&&this.slider.slideOut())},SekindoOutStream.prototype.destruct=function(){this.showMeInterval&&clearInterval(this.showMeInterval)},SekindoIMAWrapper=function(e,t,i){function n(){l.replacePermutiveMacro();var e="private"===l.params.campaignScope?l.parent.parent.params.waterfall.adxPrivatePriceMap:l.parent.parent.params.waterfall.adxPublicPriceMap;l.vastImaURL=l.parent.parent.parent.replacePriceMacroForAdx(l.params.floor,"${ADX_FLOOR_MACRO}",l.vastImaURL,e),l.vastImaURL=l.parent.parent.parent.replacePriceMacroForAdx(l.params.competeBid,"${ADX_BID_MACRO}",l.vastImaURL,e),l.config.bus.getParam("isAmpIframe")&&l.config.gdprIsRequired&&(l.vastImaURL=l.vastImaURL+"&gdpr="+l.config.gdprIsRequired+"&gdpr_consent="+l.config.gdprInfo.getConsentString()),l.replaceCustomTargetingMacro(),l.replaceTargetingMacroToCommaSeparated(),l.replaceGamTargetingKeysMacro(),l.killTimeOut&&clearTimeout(l.killTimeOut),l.params.killTime&&l.params.killTime>0&&(l.killTimeOut=setTimeout(function(){l.onAdError("killTimeOut")},l.params.killTime));var t=l.config.videoWidth||l.config.width,i=l.config.adVideoHeight||l.config.height;l.adsRequest=new l.windowForGoogleTag.google.ima.AdsRequest,l.adsRequest.adTagUrl=l.vastImaURL,l.adsRequest.linearAdSlotWidth=t,l.adsRequest.linearAdSlotHeight=i,l.adsLoader.requestAds(l.adsRequest)}function o(e){var t=new l.windowForGoogleTag.google.ima.AdsRenderingSettings;if(t.restoreCustomPlaybackStateOnAdBreakComplete=!1,l.adsManager=e.getAdsManager(l.videoContent,t),l.params.moatPartnerCode){var i={partnerCode:l.params.moatPartnerCode,viewMode:l.windowForGoogleTag.google.ima.ViewMode.NORMAL};l.moatApiRef=function(e,t,i,n){if(!1===t.hasOwnProperty("partnerCode"))return!1;var o=document.createElement("script");i=i||e&&(void 0!==e.O?e.O.parentNode:document.body)||document.body;var a=[],s={vidIntType:"4",vidIntVersion:"1.0",adsManager:e,ids:t,imaSDK:!0,events:[],
dispatchEvent:function(e){var t=this.sendEvent,i=this.events;t?(i&&(i.push(e),e=i),t(e)):i&&i.push(e)},clientCallback:n},r={complete:"AdVideoComplete",firstquartile:"AdVideoFirstQuartile",impression:"AdImpression",loaded:"AdLoaded",midpoint:"AdVideoMidpoint",pause:"AdPaused",skip:"AdSkipped",start:"AdVideoStart",thirdquartile:"AdVideoThirdQuartile",volumeChange:"AdVolumeChange"};if(l.windowForGoogleTag.google&&l.windowForGoogleTag.google.ima&&e){var c,d="_moatApi"+Math.floor(1e8*Math.random());for(c in l.windowForGoogleTag.google.ima.AdEvent.Type)n=function(t){if(s.sendEvent){for(t=a.length-1;0<=t;t--)e.removeEventListener(a[t].type,a[t].func);s.sendEvent(s.events)}else s.events.push({type:r[t.type]||t.type,adVolume:e.getVolume()})},e.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type[c],n),a.push({type:l.windowForGoogleTag.google.ima.AdEvent.Type[c],func:n})}var p,h;d=void 0!==d?d:"";try{h=(p=i.ownerDocument).defaultView||p.parentWindow}catch(e){p=document,h=window}return h[d]=s,o.type="text/javascript",o.src="https://z.moatads.com/"+t.partnerCode+"/moatvideo.js#"+d,i&&i.insertBefore(o,i.childNodes[0]||null),s}(l.adsManager,i,l.vpaidSlot)}l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdErrorEvent.Type.AD_ERROR,s),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.AD_BREAK_READY,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.LOADED,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.IMPRESSION,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.ALL_ADS_COMPLETED,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.STARTED,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.PAUSED,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.RESUMED,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.FIRST_QUARTILE,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.MIDPOINT,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.THIRD_QUARTILE,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.COMPLETE,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.INTERACTION,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.USER_CLOSE,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.SKIPPED,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.CLICK,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.VOLUME_CHANGED,a),l.adsManager.addEventListener(l.windowForGoogleTag.google.ima.AdEvent.Type.VOLUME_MUTED,a),function(){try{var e=l.config.videoWidth||l.config.width,t=l.config.adVideoHeight||l.config.height;if(l.adsManager.init(e,t,l.windowForGoogleTag.google.ima.ViewMode.NORMAL),l.windowForGoogleTag.googleImaVansAdapter&&""!=l.params.IAS.anId){var i={anId:l.params.IAS.anId,campId:e+"x"+t,chanId:l.params.IAS.chanId,ias_xpb:1,ias_xar:0};l.windowForGoogleTag.googleImaVansAdapter.init(l.windowForGoogleTag.google,l.adsManager,l.videoContent,i)}}catch(e){s("adsManager.init problem")}}()}function a(e){switch(e.type){case l.windowForGoogleTag.google.ima.AdEvent.Type.ALL_ADS_COMPLETED:l.adSkipped?r():l&&!l.hadImpression?s("noImaAds"):l.adCompleted||(l.adCompleted=!0,l.parent&&l.parent.onVpaidEvent({type:"onAdVideoComplete",val:l}),l.parent&&l.parent.onVpaidEvent({type:"onStopAd",val:l})),l.removeTimeouts();break;case l.windowForGoogleTag.google.ima.AdEvent.Type.LOADED:var t=(i=e.getAd()).getAdPodInfo();l.isAdPods=t.totalAds>1,i.isLinear()?(l&&l.config&&(SekindoUtils.trackSekindoAdEvents("response",null,l.params,l.config),SekindoUtils.trackSekindoAdEvents("win",null,l.params,l.config)),l.parent&&l.parent.onVpaidEvent({type:"onAdLoaded"})):s("nonLinearAd");break;case l.windowForGoogleTag.google.ima.AdEvent.Type.AD_BREAK_READY:break;case l.windowForGoogleTag.google.ima.AdEvent.Type.IMPRESSION:l&&(l.hadImpression=!0),l&&l.killTimeOut&&clearTimeout(l.killTimeOut),l.parent&&l.parent.onVpaidEvent({type:"onAdImpression"}),l.config.impressionTimeout&&l.config.impressionTimeout>0&&(l.impressionTimer=setTimeout(function(){l.onAdError("impressionTimer")},l.config.impressionTimeout));break;case l.windowForGoogleTag.google.ima.AdEvent.Type.STARTED:var i=e.getAd();l.parent&&l.parent.onVpaidEvent({type:"onStartAd"}),l.parent&&l.parent.onVpaidEvent({type:"onAdVideoStart",params:{isAdHasSkip:-1!=i.getSkipTimeOffset(),creativeData:function(e){return{creativeId:e.getCreativeId(),advertiserName:e.getAdvertiserName()}}(i)}});var n=l.config.videoWidth||l.config.width,o=l.config.adVideoHeight||l.config.height;l.resizeAd(n,o,l.windowForGoogleTag.google.ima.ViewMode.NORMAL);break;case l.windowForGoogleTag.google.ima.AdEvent.Type.PAUSED:l.parent&&l.parent.onVpaidEvent({type:"onAdPaused"});break;case l.windowForGoogleTag.google.ima.AdEvent.Type.RESUMED:l.parent&&l.parent.onVpaidEvent({type:"onAdPlaying"});break;case l.windowForGoogleTag.google.ima.AdEvent.Type.FIRST_QUARTILE:l.parent&&l.parent.onVpaidEvent({type:"onAdVideoFirstQuartile"});break;case l.windowForGoogleTag.google.ima.AdEvent.Type.MIDPOINT:l.parent&&l.parent.onVpaidEvent({type:"onAdVideoMidpoint"});break;case l.windowForGoogleTag.google.ima.AdEvent.Type.THIRD_QUARTILE:l.parent&&l.parent.onVpaidEvent({type:"onAdVideoThirdQuartile"});break;case l.windowForGoogleTag.google.ima.AdEvent.Type.COMPLETE:!l.adCompleted&&l.isAdPods&&(l.adCompleted=!0,l.parent&&l.parent.onVpaidEvent({type:"onAdVideoComplete",val:l}),l.parent&&l.parent.onVpaidEvent({type:"onStopAd",val:l})),l.removeTimeouts();break;case l.windowForGoogleTag.google.ima.AdEvent.Type.INTERACTION:l.parent&&l.parent.onVpaidEvent({type:"onAdInteraction"});break;case l.windowForGoogleTag.google.ima.AdEvent.Type.USER_CLOSE:case l.windowForGoogleTag.google.ima.AdEvent.Type.SKIPPED:l.parent&&r();break;case l.windowForGoogleTag.google.ima.AdEvent.Type.CLICK:l.parent&&l.parent.onVpaidEvent({type:"onAdClickThru"});break;case l.windowForGoogleTag.google.ima.AdEvent.Type.VOLUME_CHANGED:l.parent&&l.parent.onVpaidEvent({type:"onAdVolumeChange",val:l.adsManager.getVolume()});break;case l.windowForGoogleTag.google.ima.AdEvent.Type.VOLUME_MUTED:l.parent&&l.parent.onVpaidEvent({type:"onAdVolumeChange",val:0})}}function s(e){l.removeTimeouts(),l.parent&&l.parent.onVpaidEvent({type:"onAdError",message:e})}function r(){l.parent&&(l.config.primisConsoleLog("google.ima.AdEvent.Type.SKIPPED"),l.parent.onVpaidEvent({type:"onSkipAd"}))}var l=this;this.config=e,this.parent=i,this.params=t,this.vastImaURL=this.params.vastURL,this.hadImpression=!1,this.adSkipped=!1,this.adCompleted=!1,this.vpaidSlot=this.parent.parent.parent.imaSlot,this.videoContent=this.parent.parent.parent.imaVideoElement,this.adDisplayContainer={},this.adsLoader={},this.adsManager={},this.iasReady=!1,this.adsRequest=null,this.isAdPods=!1,this.windowForGoogleTag=window,function(){if(!l.windowForGoogleTag.google||!l.windowForGoogleTag.google.ima){var e=l.windowForGoogleTag.document.createElement("script");if(e.onload=function(){!function(){l.windowForGoogleTag.google.ima.settings.setVpaidMode(l.windowForGoogleTag.google.ima.ImaSdkSettings.VpaidMode.INSECURE);var e=SekindoUtils.getGooglePPID(l.config);e&&l.windowForGoogleTag.google.ima.settings.setPpid(e),l.adDisplayContainer=new l.windowForGoogleTag.google.ima.AdDisplayContainer(l.vpaidSlot,l.videoContent),l.adsLoader=new l.windowForGoogleTag.google.ima.AdsLoader(l.adDisplayContainer),l.adDisplayContainer.initialize(),l.adsLoader.getSettings().setAutoPlayAdBreaks(!1),l.adsLoader.addEventListener(l.windowForGoogleTag.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,o,!1),l.adsLoader.addEventListener(l.windowForGoogleTag.google.ima.AdErrorEvent.Type.AD_ERROR,s,!1)}(),l.requestAds(l.params)},e.onerror=function(){l.onAdError("scriptFailToLoad")},e.src="//imasdk.googleapis.com/js/sdkloader/ima3.js",l.windowForGoogleTag.document.body.appendChild(e),l.config.pubUrl&&(-1!==l.config.pubUrl.indexOf("pcgamesn.com")||-1!==l.config.pubUrl.indexOf("trueachievements.com"))&&(!l.config.rootWindow.google||!l.config.rootWindow.google.ima)){var t=l.config.rootWindow.document.createElement("script");t.src="//imasdk.googleapis.com/js/sdkloader/ima3.js",l.config.rootWindow.document.body.appendChild(t)}}}(),this.requestAds=function(e,t){t&&(l.parent=t),l.hadImpression=!1,l.adSkipped=!1,l.adCompleted=!1,l.params=e,l.vastImaURL=e.vastURL,""==l.params.IAS.anId||this.iasReady?n():function(){if(l.windowForGoogleTag.googleImaVansAdapter)n();else{var e=document.createElement("script");e.onload=function(){l.iasReady=!0,n()},e.onerror=function(){n()},e.src="//static.adsafeprotected.com/vans-adapter-google-ima.js",document.body.appendChild(e)}}()}},SekindoIMAWrapper.prototype.replacePermutiveMacro=function(){var e="[]";try{e=localStorage._pdfps}catch(t){e="[]"}var t=encodeURIComponent(JSON.parse(e||"[]").slice(0,1e3).join(","));this.vastImaURL=this.vastImaURL.replace("${PERMUTIVE_MACRO}",t)},SekindoIMAWrapper.prototype.replaceTargetingMacroToCommaSeparated=function(){var objectStringValues="",customTargetingMacro="${SEGMENT_COMMA_SEPARATED_VALUES_MACRO}";if(-1!=this.vastImaURL.indexOf(customTargetingMacro)&&this.config.customTargetingProperties&&Object.keys(this.config.customTargetingProperties).length>0&&void 0!==this.config.customTargetingProperties.objectType&&void 0!==this.config.customTargetingProperties.objectFunction)try{var customParameters=eval(this.config.customTargetingProperties.objectType+"."+this.config.customTargetingProperties.objectFunction);Object.values(customParameters).length>0&&(objectStringValues=encodeURIComponent(customParameters.join(",")))}catch(e){}this.vastImaURL=this.vastImaURL.replace(customTargetingMacro,objectStringValues)},SekindoIMAWrapper.prototype.replaceCustomTargetingMacro=function(){var customParameters={},helperParameters="",customTargetingMacro="${FPT_KEY_VALUE_PARAM}";let customDomainMacro="${SITE_ROOT_DOMAIN}";if(-1!=this.vastImaURL.indexOf(customTargetingMacro)&&this.config.customTargetingProperties&&Object.keys(this.config.customTargetingProperties).length>0&&void 0!==this.config.customTargetingProperties.objectType&&void 0!==this.config.customTargetingProperties.objectFunction)try{customParameters=eval(this.config.customTargetingProperties.objectType+"."+this.config.customTargetingProperties.objectFunction),Object.keys(customParameters).length>0&&"object"==typeof customParameters&&(helperParameters=Object.keys(customParameters).map(function(e){return e+"="+customParameters[e]}).join("&"))}catch(e){}if(this.vastImaURL=this.vastImaURL.replace(customTargetingMacro,encodeURIComponent(helperParameters)),this.vastImaURL.includes(customDomainMacro)){let e="";this.config.domain&&void 0!==this.config.domain&&(e=this.config.domain),this.vastImaURL=this.vastImaURL.replace(customDomainMacro,e)}},SekindoIMAWrapper.prototype.replaceGamTargetingKeysMacro=function(){var e="${GTAG_KV_AUTO_COLLECT}";if(-1!=this.vastImaURL.indexOf(e)){var t="";try{var i=window.top.googletag&&window.top.googletag.pubads()?window.top.googletag.pubads().getTargetingKeys():"";if(i&&i.length>0)for(var n=0;n<i.length;n++)t+=(0!=n?"&":"")+i[n]+"="+window.top.googletag.pubads().getTargeting(i[n]).toString()}catch(e){}var o=encodeURIComponent(t);this.vastImaURL=this.vastImaURL.replace(e,o)}},SekindoIMAWrapper.prototype.startAd=function(){try{this.adsManager&&this.adsManager.start()}catch(e){this.onAdError("adsManager.start problem")}},SekindoIMAWrapper.prototype.stopAd=function(){this.adsManager&&this.adsManager.stop()},SekindoIMAWrapper.prototype.skipAd=function(){if(this.adsManager){this.adsManager.getAdSkippableState()&&this.adsManager.skip();try{this.adSkipped=!0,this.adsManager.stop()}catch(e){}this.forceSkipAdTimeout=setTimeout(function(){this.onAdError("forceSkipAdTimeout")}.bind(this),1e3)}},SekindoIMAWrapper.prototype.pauseAd=function(){this.adsManager&&this.adsManager.pause()},SekindoIMAWrapper.prototype.resumeAd=function(){this.adsManager&&this.adsManager.resume()},SekindoIMAWrapper.prototype.resizeAd=function(e,t,i){this.adsManager&&this.adsManager.resize(e,t,i)},SekindoIMAWrapper.prototype.setAdVolume=function(e){if(!this.doNotUseSetAdVolume)try{this.adsManager&&this.adsManager.setVolume(e)}catch(e){}},SekindoIMAWrapper.prototype.onAdError=function(e){this.removeTimeouts(),this.parent&&this.parent.onVpaidEvent({type:"onAdError"})},SekindoIMAWrapper.prototype.removeTimeouts=function(){this.killTimeOut&&clearTimeout(this.killTimeOut),this.impressionTimer&&clearTimeout(this.impressionTimer),this.forceSkipAdTimeout&&clearTimeout(this.forceSkipAdTimeout)},SekindoIMAWrapper.prototype.destruct=function(){this.params=null,this.parent=null,this.isAdPods=!1,this.adsManager&&(this.adsManager.destroy(),this.adsManager=null,this.adsLoader.contentComplete()),this.moatApiRef&&(this.moatApiRef=null),this.removeTimeouts()},SekindoIMAAppWrapper=function(e,t,i){var n=this;this.config=e,this.parent=i,this.hadImpression=!1,this.params=t,this.vastImaURL=this.params.vastURL,this.resizeW=null,this.resizeH=null,this.resizeX=null,this.resizeY=null,this.killTimeOut&&clearTimeout(this.killTimeOut),this.params.killTime&&this.params.killTime>0&&(this.killTimeOut=setTimeout(function(){n.onAdError("killTimeOut")},this.params.killTime)),this.fromImaSdkCB=this.config.bus.addCallBack("fromImaSdk",function(e){n.onAdEvent(e)}),this.onPlayerResizeCB=this.config.bus.addCallBack("onPlayerResize",function(){n.onPlayerResize()});var o=this.config.videoWidth||this.config.width,a=this.config.adVideoHeight||this.config.height,s=this.config.playerIframeDiv.getBoundingClientRect().left,r=this.config.videoIFrameDiv.getBoundingClientRect().top,l="private"===this.params.campaignScope?n.parent.parent.params.waterfall.adxPrivatePriceMap:n.parent.parent.params.waterfall.adxPublicPriceMap;this.vastImaURL=this.parent.parent.parent.replacePriceMacroForAdx(this.params.floor,"${ADX_FLOOR_MACRO}",this.vastImaURL,l);var c=SekindoUtils.getGooglePPID(this.config),d={value:"init",type:"command",data:[{id:"vastUrl",value:this.vastImaURL},{id:"width",value:o},{id:"height",value:a},{id:"x",value:s},{id:"y",value:r},{id:"ppid",value:c}]};this.config.bus.triggerNote("toImaSdk",d),this.onAdEvent=function(e){switch(e.value){case"allAdsCompleted":n&&!n.hadImpression?n.onAdError("noImaAds"):(n.parent&&n.parent.onVpaidEvent({type:"onAdVideoComplete",val:n}),n.parent&&n.parent.onVpaidEvent({type:"onStopAd",val:n}));break;case"loaded":(t=e.data)[0].value?(n&&n.config&&(SekindoUtils.trackSekindoAdEvents("response",null,n.params,n.config),SekindoUtils.trackSekindoAdEvents("win",null,n.params,n.config)),n.parent&&n.parent.onVpaidEvent({type:"onAdLoaded"})):n.onAdError("nonLinearAd");break;case"started":n&&(n.hadImpression=!0),n&&n.killTimeOut&&clearTimeout(n.killTimeOut),n.parent&&n.parent.onVpaidEvent({type:"onAdImpression"}),n.config.impressionTimeout&&n.config.impressionTimeout>0&&(n.impressionTimer=setTimeout(function(){n.onAdError("impressionTimer")},n.config.impressionTimeout));var t=e.data;n.parent&&n.parent.onVpaidEvent({type:"onStartAd"}),n.parent&&n.parent.onVpaidEvent({type:"onAdVideoStart",params:{isAdHasSkip:!t[0].value}});break;case"paused":n.parent&&n.parent.onVpaidEvent({type:"onAdPaused"});break;case"resumed":n.parent&&n.parent.onVpaidEvent({type:"onAdPlaying"});break;case"firstQuartile":n.parent&&n.parent.onVpaidEvent({type:"onAdVideoFirstQuartile"});break;case"midpoint":n.parent&&n.parent.onVpaidEvent({type:"onAdVideoMidpoint"});break;case"thirdQuartile":n.parent&&n.parent.onVpaidEvent({type:"onAdVideoThirdQuartile"});break;case"complete":n.parent&&n.parent.onVpaidEvent({type:"onAdVideoComplete",val:n}),n.parent&&n.parent.onVpaidEvent({type:"onStopAd",val:n});break;case"interaction":n.parent&&n.parent.onVpaidEvent({type:"onAdInteraction"});break;case"userClose":case"skipped":n.parent&&n.parent&&(n.config.primisConsoleLog("google.ima.AdEvent.Type.SKIPPED"),n.parent.onVpaidEvent({type:"onSkipAd"}));break;case"click":n.parent&&n.parent.onVpaidEvent({type:"onAdClickThru"});break;case"volumeChanged":case"volumeMuted":if(n.parent){t=e.data;n.parent.onVpaidEvent({type:"onAdVolumeChange",val:t[0].value})}break;case"error":n.parent&&n.parent.onVpaidEvent({type:"onAdError"})}}},SekindoIMAAppWrapper.prototype.startAd=function(){this.config.bus.triggerNote("toImaSdk",{value:"start",type:"command"})},SekindoIMAAppWrapper.prototype.stopAd=function(){this.config.bus.triggerNote("toImaSdk",{value:"stop",type:"command"})},SekindoIMAAppWrapper.prototype.pauseAd=function(){this.config.bus.triggerNote("toImaSdk",{value:"pause",type:"command"})},SekindoIMAAppWrapper.prototype.resumeAd=function(){this.config.bus.triggerNote("toImaSdk",{value:"resume",type:"command"})},SekindoIMAAppWrapper.prototype.resizeAd=function(e,t,i){},SekindoIMAAppWrapper.prototype.onPlayerResize=function(e,t,i){var n=this,o=this.config.videoWidth||this.config.width,a=this.config.adVideoHeight||this.config.height,s=this.config.playerIframeDiv.getBoundingClientRect().left,r=this.config.videoIFrameDiv.getBoundingClientRect().top;if(this.resizeW!=o||this.resizeH!=a||this.resizeX!=s||this.resizeY!=r){this.resizeW=o,this.resizeH=a,this.resizeX=s,this.resizeY=r;var l={value:"resize",type:"command",data:[{id:"width",value:o},{id:"height",value:a},{id:"x",value:s},{id:"y",value:r}]};clearTimeout(this.resizeDelay),this.resizeDelay=setTimeout(function(){n.config.bus.triggerNote("toImaSdk",l)},1)}},SekindoIMAAppWrapper.prototype.setAdVolume=function(e){if(!this.doNotUseSetAdVolume){var t={value:"setVolume",type:"command",data:[{id:"volume",value:e}]};this.config.bus.triggerNote("toImaSdk",t)}},SekindoIMAAppWrapper.prototype.addSkipBtn=function(){this.config.bus.triggerNote("toImaSdk",{value:"skippable",type:"command"})},SekindoIMAAppWrapper.prototype.onAdError=function(e){this.parent&&this.parent.onVpaidEvent({type:"onAdError"})},SekindoIMAAppWrapper.prototype.destruct=function(){this.config.bus.triggerNote("toImaSdk",{value:"destruct",type:"command"}),this.killTimeOut&&clearTimeout(this.killTimeOut),this.impressionTimer&&clearTimeout(this.impressionTimer),this.config.bus.removeBusItm(this.fromImaSdkCB),this.config.bus.removeBusItm(this.onPlayerResizeCB),SekindoUtils.deleteMe(this)},AppSdkApi.prototype.onReportFromApp=function(e){switch(e.id){case"viewabilityStatus":var t=this.getObjBy(e.data,"id","isOverlapped"),i=!!t&&t.value,n=!!this.getObjBy(e.data,"id","isInView").value&&!i,o=this.getObjBy(e.data,"id","verticalPCT").value,a=this.getObjBy(e.data,"id","horizontalPCT").value,s=(this.getObjBy(e.data,"id","totalPCT").value,this.getObjBy(e.data,"id","verticalPos").value),r=(this.getObjBy(e.data,"id","horizontalPos").value,this.getObjBy(e.data,"id","hasFlowParent").value),l=!1;"seenboth"!=this.config.flowMode||"below"!==s&&"inside"!==s?"both"!==this.config.flowMode&&this.config.flowMode!==s||(l=!0):(l=!0,this.config.flowMode="both");var c=a>0&&o>0;window.primisLog("[[AppSDKApi]] viewable: "+c),window.primisLog("[[AppSDKApi]] flowSkinWrap: "+this.config.flowSkinWrap),window.primisLog("[[AppSDKApi]] hasFlowParent: "+r),window.primisLog("[[AppSDKApi]] isInView: "+n),window.primisLog("[[AppSDKApi]] isOverlapped: "+i),window.primisLog("[[AppSDKApi]] verticalPos: "+s+" - "+this.config.flowMode),window.primisLog("[[AppSDKApi]] setFlowOnApp?"+this.lastViewable+" != "+c+" || "+this.lastIsInView+" != "+n+" || "+this.verticalPos+" != "+s),this.lastVisible!==n&&(this.config.appsGeometryStatus.viewable=c&&n,this.lastVisible=this.config.appsGeometryStatus.inActiveView=n,this.config.bus.triggerNote("inActiveViewChange",this.config.appsGeometryStatus.inActiveView)),this.lastViewable!=c||this.lastIsInView!=n||this.verticalPos!=s||this.switchedUnFlow?(this.lastViewable=c,this.lastIsInView=n,this.verticalPos=s,this.switchedUnFlow=!1,this.config.appsGeometryStatus.viewable=c&&n,window.primisLog("[[AppSDKApi]] playerMode: "+this.config.playerMode),window.primisLog("[[AppSDKApi]] setFlowOnApp?? "+!c+" && "+n+" && "+("flow"==this.config.playerMode)+" && "+!this.disableFlowMode+" && "+r+" && "+l),c||!n||"flow"!=this.config.playerMode&&"snapIt"!==this.config.playerMode||this.disableFlowMode||!r||!l?r&&this.config.flowStatus&&(window.primisLog("[[AppSDKApi]] setFlowOnApp - unflow"),this.setUnFlowOnApp()):(window.primisLog("[[AppSDKApi]] setFlowOnApp"),this.config.flowStatus=!0,this.config.bus.triggerNote("onFlowStatusChange",!0),this.config.bus.triggerNote("requestLayoutResize",{source:"doFlow",width:this.config.flowWidth,height:this.config.flowHeight}),this.config.appsGeometryStatus.viewable=!0,this.config.appsGeometryStatus.inActiveView=!0),this.config.bus.triggerNote("isAppViewableChange",this.config.appsGeometryStatus.viewable)):r!=this.hasFlowParent&&(this.hasFlowParent=r,window.primisLog("[[AppSDKApi]] setUnFlowOnApp2")),window.primisLog("[[AppSDKApi]] viewabilityChange appsGeometryStatus.viewable: "+this.config.appsGeometryStatus.viewable);break;case"onCloseBtnClick":this.config.bus.triggerNote("APIuserFloatClose"),this.setUnFlowOnApp(),this.disableFlowMode=!0,SekindoUtils.firePixel(this.config.closeFloatPixel,this.config.pixelDiv,this.config);break;case"onConsentStringChange":switch(window.primisLog("[[AppSDKApi]] consent string changed: "+this.getObjBy(e.data,"id","consent").value),e.value){case"1":null!==this.config.gdprInfo.v1.handler&&this.config.gdprInfo.v1.handler.onConsentAvail(this.getObjBy(e.data,"id","consent").value,!0);break;case"2":null!==this.config.gdprInfo.v2.handler&&this.config.gdprInfo.v2.handler.onConsentAvail(this.getObjBy(e.data,"id","consent").value,!0);break;default:window.primisLog('[[AppSDKApi]] unsupported consent string version "'+e.value+"'")}break;case"imaSdk":this.config.bus.triggerNote("fromImaSdk",e)}},AppSdkApi.prototype.setFlowOnApp=function(){var e=this.config.sliderDir.split(""),t="r"==e[1]?"right":"l"==e[1]?"left":"s"==e[1]?"streach":"middle",i="b"==e[0]?"bottom":"top",n="both"===this.config.flowMode||"above"===this.config.flowMode,o="both"===this.config.flowMode||"below"===this.config.flowMode,a=[{id:"flowWidth",value:this.config.flowWidth},{id:"flowHeight",value:this.config.playerHeight},{id:"hOffset",value:this.config.sliderSideOffset},{id:"vOffset",value:this.config.sliderOffset},{id:"hSticky",value:t},{id:"vSticky",value:i},{id:"hasShadow",value:this.config.allowFloatingShadow},{id:"zIndex",value:this.config.flowZindex},{id:"isFlowUp",value:n},{id:"isFlowDown",value:o},{id:"isCloseBtn",value:this.config.isCloseBtn},{id:"closeBtnPos",value:this.config.closeBtnPos}];this.config.bus.triggerNote("APIfloatStatusChange",1),this.sendToApp(a,"goFlow","command",!0)},AppSdkApi.prototype.setUnFlowOnApp=function(){window.primisLog("[[AppSDKApi]] setUnFlowOnApp"),this.config.flowStatus=!1,this.config.bus.triggerNote("onFlowStatusChange",!1),this.config.bus.triggerNote("APIfloatStatusChange",0),this.config.bus.triggerNote("requestLayoutResize",{source:"doUnFlow",responsive:!0}),this.sendToApp([],"goUnFlow","command",!0),this.switchedUnFlow=!0},AppSdkApi.prototype.onRequestFromApp=function(e){},AppSdkApi.prototype.onCommandFromApp=function(e){},AppSdkApi.prototype.registerToAPIEvents=function(e){function t(e){var t=this.callbackID.replace("API",""),n=[];if(void 0===e||null===e)n=[];else if("object"!=typeof e)n.push({id:"singleValue",value:e});else for(var o in e)n.push({id:o,value:e[o]});i.sendToApp(n,"playerApiEvent","report",!1,t)}for(var i=this,n=0;n<e.length;n++)this.config.bus.addCallBack("API"+e[n],t)},AppSdkApi.prototype.getObjBy=function(e,t,i){return e.filter(function(e){return e[t]==i})[0]},PlaylistDesign.prototype.destruct=function(){for(this.arrowInterval&&clearInterval(this.arrowInterval),this.touchTimeout&&clearTimeout(this.touchTimeout),i=0;i<this.unitsArray.length;i++)this.unitsArray[i].destruct()},PlaylistUnit.prototype.destruct=function(){},SekindoSPlayer.prototype.initEncodedContent=function(e){function t(e){return decodeURIComponent(e.replace(/\+/g," "))}if(void 0!==e&&e instanceof Array){var i=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;for(var n in this.config.contentPlayList)for(var o in e)if(i.test(this.config.contentPlayList[n][e[o]]))try{this.config.contentPlayList[n][e[o]]=t(window.atob(this.config.contentPlayList[n][e[o]]))}catch(e){}}},SekindoSPlayer.prototype.constructContainer=function constructContainer(){var ref=this;if(!this.constructed){this.constructed=!0;try{SekindoUtils.scriptOptimizer()}catch(e){return void(this.constructed=!1)}var mainPlayerDiv=this.config.rootDocument.createElement("div");mainPlayerDiv.id="Player-Div-"+this.uniqueID,mainPlayerDiv.style.width="max-content",mainPlayerDiv.style.height="max-content";var mainVideoDiv=this.config.rootDocument.createElement("div");if(mainVideoDiv.id="Video-Div-"+this.uniqueID,mainVideoDiv.style.position="relative",this.videoIFrameDiv=this.config.rootDocument.createElement("div"),this.videoIFrameDiv.id="Video-iFrame-"+this.uniqueID,this.videoIFrameDiv.style.overflow="hidden",this.videoIFrameDiv.style.position="relative",mainVideoDiv.appendChild(this.videoIFrameDiv),mainPlayerDiv.appendChild(mainVideoDiv),this.config.flowSkinWrap){this.config.flowSkinWrap=this.config.flowSkinWrap.replace('<script type="text/javascript">','<script type="text/javascript" id="nativeFlowHtmlScript">');var flowSkinWrapDiv=this.config.rootDocument.createElement("div");flowSkinWrapDiv.id="flowSkinWrapper",flowSkinWrapDiv.innerHTML=this.config.flowSkinWrap.replace("${VIDEO_PLAYER}",'<div id="flowSkinPlayer" style="display: inline-block;position: relative"></div>'),this.config.playerIframeDiv.appendChild(flowSkinWrapDiv);var flowSkinPlayerDiv=this.config.rootDocument.getElementById("flowSkinPlayer");flowSkinPlayerDiv.appendChild(mainPlayerDiv);var flowScript=this.config.rootDocument.getElementById("nativeFlowHtmlScript");flowScript&&eval(flowScript.innerHTML)}else this.config.playerIframeDiv.appendChild(mainPlayerDiv);if(this.config.isNativeTemplate)try{if(this.config.isAmpStickyAd)this.config.nativeTemplateElements={},this.config.nativeTemplateElements.native_title=window.parent.document.getElementById("native_title"+this.uniqueID);else if(!this.config.isPrimisNativeSkin){this.config.nativeTemplateElements={};var iFrameEl=window.frameElement;this.config.nativeTemplateElements.native_title=iFrameEl.ownerDocument.getElementById("native_title"+this.uniqueID),this.config.nativeTemplateElements.native_desc=iFrameEl.ownerDocument.getElementById("native_desc"+this.uniqueID),this.config.nativeTemplateElements.native_vid_link=iFrameEl.ownerDocument.getElementsByClassName("native_vid_link"+this.uniqueID)}}catch(e){}this.debugAgent.isActivateDebugWindow()&&this.debugAgent.activateDebugWindow(),this.constructIntainer()}},SekindoSPlayer.prototype.constructIntainer=function(){this.config.videoIFrameDiv=this.videoIFrameDiv,this.config.videoIFrameWindow=this.config.rootWindow,this.config.videoIFrameDoc=this.config.rootDocument,this.config.mainVideoDiv||(this.config.mainVideoDiv=this.config.rootDocument.getElementById("Video-Div-"+this.uniqueID)),this.config.mainPlayerDiv||(this.config.mainPlayerDiv=this.config.rootDocument.getElementById("Player-Div-"+this.uniqueID)),this.config.currScript=SekindoUtils.getCurrScript(this.config,3),this.config.pixelDivConstructor=new SekindoServices.constructPixelDiv(this.config),SekindoServices.fullscreen=this.config.FSservice=new SekindoServices.fullscreen(this.config),this.config.flowSkinWrap&&(this.config.flowSkinWrapper=this.config.rootDocument.getElementById("flowSkinWrapper"),this.config.flowSkinWrapper.style.display="inline-block"),this.flowManager=new SekindoFlowManager(this.config),this.config.nativeSkinIframeWindow&&this.config.isPrimisNativeSkin&&(this.nativeSkinApi=new this.config.nativeSkinIframeWindow.SekindoNativeSkinApi(this.config),"chrome"!=this.config.clientInfo.browser&&"edgeChromium"!=this.config.clientInfo.browser||(this.skinHeavyAdObserver=new SekindoServices.heavyAdObserver("skin",this.config.nativeSkinIframeWindow,this.config))),this.constructPlayer()},SekindoSPlayer.prototype.constructPlayer=function(){var e=this;this.config.onVisibilityChange=new SekindoServices.onVisibilityChange(this.config),this.config.viewabilityChecker=new SekindoServices.viewabilityChecker(this.config),""!=this.config.playerApiId&&("ie"==this.config.clientInfo.browser&&function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e}(),this.config.playerApi=new PlayerAPI(this.config.playerApiId,this.config),this.config.isAppSdk&&this.appSdkApi.registerToAPIEvents(this.config.playerApi.allowedEvents)),!this.config.isApp&&this.config.playerMode&&"normal"!=this.config.playerMode&&(this.outStream=new SekindoOutStream(this.config,this.uniqueID)),this.config.layoutManager=new LayoutManager(this.config),""!=this.config.playerApiId&&window.top.dispatchEvent(new CustomEvent(this.config.playerApi.PLAYER_API_INIT_EVENT,{detail:this.config.playerApi})),SekindoUtils.applyExternalRules(this.config,"style","init"),this.adsManager=new SekindoAdsManager(this.uniqueID,this.config),this.outStream&&(this.outStream.adsManager=this.adsManager,"flow"!=this.config.playerMode&&"sticky"!=this.config.playerMode&&"snapIt"!=this.config.playerMode&&"slider"!=this.config.playerMode&&(this.config.contentPlayList=[],this.config.bus.triggerNote("hideTimeBar"))),this.playlistManager=new SekindoPlaylistManager(this.uniqueID,this.config),this.checkPlayerViewability=new SekindoServices.viewabilityDurationChecker(this.config,this.config.playerInViewPrc,function(){SekindoUtils.firePixel(e.config.viewableImpPixel,e.config.pixelDiv,e.config)}),this.checkPlayerViewability.startDurationChecker();var t=function(t){var i=Math.round((Date.now()-e.config.lastViewableDurationTime)/10);if(e.config.lastViewableDurationTime=void 0==t?Date.now():0,!(i<=0||i>200*e.config.durationTimer||""==e.config.viewableDurPixel)){var n=e.config.viewableDurPixel+"&dur="+i;if(e.config.isVisibilityLogActive){var o=SekindoUtils.getPlayerViewPct(e.config.videoIFrameDiv,window.parent,e.bus);n+="&viewPct="+JSON.stringify(o)}SekindoUtils.firePixel(n,e.config.pixelDiv,e.config)}};this.config.bus.getParam("currViewabilityState",this.config.playerInViewPrc).status&&(this.config.lastViewableDurationTime=Date.now(),this.viewableDurPixelIntervalId=setInterval(t,1e3*this.config.durationTimer)),this.viewableDurCallbackId=this.config.bus.addCallBack("onViewabilityChange",function(i){i.type==e.config.playerInViewPrc&&(i.status?(0==e.config.lastViewableDurationTime&&(e.config.lastViewableDurationTime=Date.now()),e.viewableDurPixelIntervalId&&clearInterval(e.viewableDurPixelIntervalId),e.viewableDurPixelIntervalId=setInterval(t,1e3*e.config.durationTimer)):(e.viewableDurPixelIntervalId&&clearInterval(e.viewableDurPixelIntervalId),t(!0)))});var i=function(t){var i=Math.round((Date.now()-e.config.lastVisibleDurationTime)/10);if(e.config.lastVisibleDurationTime=void 0==t?Date.now():0,!(i<=0||i>200*e.config.durationTimer||""==e.config.playerDurPeriodsPixel)){var n=e.config.playerDurPeriodsPixel+"&dur="+i;SekindoUtils.firePixel(n,e.config.pixelDiv,e.config)}};if(this.config.onVisibilityChange.getCurrState()&&(this.config.lastVisibleDurationTime=Date.now(),this.visibleDurPixelIntervalId=setInterval(i,1e3*this.config.durationTimer)),this.visibleDurCallbackId=this.config.bus.addCallBack("onVisibilityChange",function(t){t?(0==e.config.lastVisibleDurationTime&&(e.config.lastVisibleDurationTime=Date.now()),e.visibleDurPixelIntervalId&&clearInterval(e.visibleDurPixelIntervalId),e.visibleDurPixelIntervalId=setInterval(i,1e3*e.config.durationTimer)):(e.visibleDurPixelIntervalId&&clearInterval(e.visibleDurPixelIntervalId),i(!0))}),setTimeout(function(){e.viewableDurPixelIntervalId&&clearInterval(e.viewableDurPixelIntervalId),e.visibleDurPixelIntervalId&&clearInterval(e.visibleDurPixelIntervalId),e.config.bus.removeBusItm(e.viewableDurCallbackId),e.config.bus.removeBusItm(e.visibleDurCallbackId)},72e5),("chrome"==this.config.clientInfo.browser||"edgeChromium"==this.config.clientInfo.browser)&&(this.mainHeavyAdObserver=new SekindoServices.heavyAdObserver("main",window,this.config),this.config.bus.getParam("isAmpIframe")))new SekindoServices.heavyAdObserver("amp",this.config.rootWindow,this.config);this.config.iasBrandSafetyPixel&&new SekindoServices.createIframeIasBrandSafety(this.config),this.config.bus.triggerNote("playerConstructed")},
SekindoSPlayer.prototype.destructPlayer=function(){this.config.bus.callbacksArray=[],this.visibleDurPixelIntervalId&&clearInterval(this.visibleDurPixelIntervalId),this.viewableDurPixelIntervalId&&clearInterval(this.viewableDurPixelIntervalId),this.playlistManager&&(this.playlistManager.destruct(),delete this.playlistManager),this.debugger&&(this.debugger.destruct(),delete this.debugger),this.outStream&&(this.outStream.destruct(),delete this.outStream),this.adsManager&&(this.adsManager.destruct(),delete this.adsManager),this.config.viewabilityChecker&&this.config.viewabilityChecker.destruct(),this.config.onVisibilityChange&&this.config.onVisibilityChange.destruct(),SekindoUtils.resetAllAnimations(),this.config.mainVideoDiv&&this.config.mainVideoDiv.parentNode&&this.config.mainVideoDiv.parentNode.removeChild(this.config.mainVideoDiv)};// <script type="text/javascript">

	///for IE and prebid
	if(typeof String.prototype.includes != 'function')
	{
		String.prototype.includes = function(str) {
			return (this.indexOf(str)!=-1);
		}
	}

	// Amazon A9
	!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

	// Player Config
	// ----------------
	var configPlayer = new Object();

	// player html structure params
	configPlayer.containerDiv = containerDiv;
	configPlayer.nativeSkinIframeWindow = nativeSkinIFrameWindow;
	configPlayer.nativeSkinIframe = nativeSkinIframe;

	configPlayer.playerIframeDiv = playerIframeDiv;
	configPlayer.rootDocument = rootDocument;
	configPlayer.rootWindow = rootWindow;

	configPlayer.windowParentDocument = windowParentDocument || window.parent.document;

	configPlayer.hls = supportDetection.hlsType; // native/hlsJs/0/-1
	configPlayer.vidType = supportDetection.playerType; // native/iosWrapper

	configPlayer.gdprInfo = supportDetection.gdprInfo;
	configPlayer.ccpaInfo = supportDetection.ccpaInfo;

    configPlayer.customTargetingProperties = {"objectType":"window.top","objectFunction":"dtPrimisTargeting","commitDoubleEncoding":0,"source":"WindowObject"};
    configPlayer.customPpid = '';

    //debug
    configPlayer.debugInformation = '';
    configPlayer.debug = '';
    configPlayer.debugSessionId = '';

    // need migration to hash
    configPlayer.isApp = false;
    configPlayer.allowFullScreen = true;
    configPlayer.isCloseBtn = false;
    configPlayer.disableFlowPlayer = false;
    configPlayer.isFloatingBar = false;
    configPlayer.isCloseBtnText = true;
    configPlayer.closeBtnTheme = {'lineColor' : '#000000', 'backColor' : '#ffffff', 'opacity' : '0.25', 'fontFamily' : 'inherit', 'flowHeaderFontColor' : 'inherit', 'horizontalPosition' : configPlayer.closeBtnPos};
    configPlayer.flowHeaderPosVertical = 'flipped';
    configPlayer.flowHeaderBackgroundColor = 'rgba(255,255,255,0)';
    configPlayer.flowHeaderOpacity = '1.0';

	//PLAYER
    configPlayer.configObj = {"enc":true,"data":"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hMTypL3ZcZGViXC91p2Vlp1jiY29hqzVlqGVxXC8mMTQ3MFjiqzyxZW9sNwQlNTyyODQmZGNuYwY3NwpjNDA4MFjiqzyxNwQmYmYlZTU2M2EjODt0NTp1MTp5MS5gpDQ\/qG9ePWV3o2qJQ0FaSW1Gp1c5STZJQ0cJVXcJMU5cSXNDnUFaSUNBnWRIoHqJnz9aSWgjWFZDSUgzUS5yq29aSUNBZ0ygoHcwrUx2SUNKUWNgoHRuWE1cTEFiZ0yDQWqJox4kWWyJNxyDSXZxWEJmYwJGn2N5OWcvnxU1TDNnpFcHVaZMM1Z6WyuKrxjlTaZvoycfY25SoFcDOHcNVFEmTUM5MzFXUzkvMTtlTxRJMU9XVTRORE5eWTJGnU5dYmJOrxEjTURaq0jmWaBnRFxjTTJNMx1gVTFOnx5bTURaNE5EVTNOVEUmT1RFqWJYQTBJnXqLSUNBZ0yDSaVZoVycT2yBrE56QTJOnyV5TURBq0kBo2qJQ0FaSW1WNGNDSTZJREUmTURZNE5EWTNOnxFLZyEhpVu0NVJin3NBq0uuMyqwSF9Box1cVy9hTUcZZzFZQVuJUU1zU2NOUDJJWSIfIaRcqGkyIwbvUwJfoUg5MHJWMzk1Wxp5M2N5p3uNU1V6UVN0VWImVzcuQ3RVY21fqCIfIzRyp2MvOvIvLCJxqXJuqGyiovI6IwMkIvjvYzqJoWpvOvJbqHRjpmcpL1jiqzyxZW8hpHJcoWymLaRyY2upL3VjoG9uZHNpL2NhMTypL3ZcZGViXC91p2Vlp1jiY29hqzVlqGVxXC8mMTQ3MFjiqzyxZW9sNwQlNTyyODQmZGNuYwY3NwpjNDA4MFjiqzyxNwQmYmYlZTU2M2EjODt0NTp1MTp5MS5dpGp\/Y2J1p3Rypw0kNwtkNwp5MDtjIvjvYzqJoWqUnHVgYvI6Izu0qHBmOyjiXC92nWRyol5jpzygnXMhqGVwnFjiqXBfo2Fxp1jiY24kOVjiqzyxZW9pL3VmZXJmXC9wo252ZXJ0ZWRpLmMkNDpjXC92nWRyo182NDI1OWU4NDNxY2FvNwp2NmA0MDtjXC92nWQ2NDNwNwJyNTYmYTA4ODQ1NmUkNmxkX3RbqW1vLzcjZm9wYaVmqGVlPTE2ODE2NmxjODAvLCJwoGgVpzjvOvIvLCJmnGFlZVVloCI6Izu0qHBmOyjiXC93q3phZGyanXRuoHRlZW5xpl5wo21pL2NioXB1qGyhZ1jiq2yhZG93pl0kMS12pl13nW5xo3qmLTEjXC8\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"};
	var randName = 'SekindoSPlayer65ba98b80df8f';

	SekindoUtils.createSPlayer(configPlayer, randName);
